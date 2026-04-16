#!/usr/bin/env node
/**
 * H-04 / H-12: 购票渠道链接全站可达性审计
 *
 * 用法：
 *   node scripts/audit-links.js
 *   node scripts/audit-links.js > audit-links.csv
 *
 * 输出 CSV：city, landmark, channel_name, url, status_code, final_url, final_status, note
 *
 * 策略：
 * - 读 js/data.js 里所有 landmarks[].ticket.channels[].url
 * - 对每条 URL 先发 HEAD（3s 超时），失败 fallback GET
 * - 最多 3 次重试
 * - 跟随 redirect，标记 final_url
 * - 标记 status 为 4xx / 5xx / timeout / redirect-to-homepage / ok
 * - 最后一行汇总统计
 *
 * 输出到 stdout；stderr 打印进度。
 */

const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const DATA_PATH = path.join(__dirname, '..', 'js', 'data.js');
const TIMEOUT_MS = 3000;
const MAX_RETRIES = 3;
const CONCURRENCY = 6;

/* 1. 解析 data.js —— 用 vm 方案 */
function loadData() {
  const src = fs.readFileSync(DATA_PATH, 'utf8');
  // 把 data.js 的 CITIES 声明剥出来，放进 sandbox 求值
  const mod = { exports: {} };
  const sandbox = { CITIES: null, THEMES: null, CONTINENTS: null, CONTINENT_MAP: null, module: mod, console };
  const vm = require('vm');
  const ctx = vm.createContext(sandbox);
  vm.runInContext(src + '\nmodule.exports = { CITIES, THEMES };', ctx);
  return mod.exports;
}

/* 2. 收集所有 (city, landmark, channel) tuples */
function collectChannels(CITIES) {
  const rows = [];
  for (const c of CITIES) {
    for (const l of c.landmarks || []) {
      const ticket = l.ticket;
      if (!ticket || !Array.isArray(ticket.channels)) continue;
      for (const ch of ticket.channels) {
        rows.push({
          city: c.name,
          landmark: l.name,
          channelName: ch.name,
          url: ch.url,
          note: ch.note || '',
        });
      }
    }
  }
  return rows;
}

/* 3. 单条 URL 检查（HEAD→GET fallback，跟随 redirect，重试 3 次） */
function checkUrl(url, attempt = 1) {
  return new Promise((resolve) => {
    if (!url) {
      resolve({ status: 'null-url', code: '', finalUrl: '', finalStatus: 'null-url' });
      return;
    }
    let parsed;
    try { parsed = new URL(url); } catch (e) {
      resolve({ status: 'malformed', code: '', finalUrl: '', finalStatus: 'malformed' });
      return;
    }
    const http = parsed.protocol === 'https:' ? require('https') : require('http');

    const tryMethod = (method) => new Promise((res) => {
      const req = http.request({
        method,
        hostname: parsed.hostname,
        port: parsed.port,
        path: parsed.pathname + parsed.search,
        headers: {
          'User-Agent': 'TravelWebAuditBot/2.6 (+audit-links.js)',
          'Accept': '*/*',
        },
        timeout: TIMEOUT_MS,
      }, (r) => {
        res({ code: r.statusCode, location: r.headers.location });
        r.resume(); // drain
      });
      req.on('error', () => res({ code: 'error' }));
      req.on('timeout', () => { req.destroy(); res({ code: 'timeout' }); });
      req.end();
    });

    (async () => {
      let r = await tryMethod('HEAD');
      // 某些站 HEAD 不支持，回退 GET
      if (r.code === 405 || r.code === 403 || r.code === 'error') {
        r = await tryMethod('GET');
      }
      // 重试
      if ((r.code === 'timeout' || r.code === 'error') && attempt < MAX_RETRIES) {
        return resolve(await checkUrl(url, attempt + 1));
      }
      // 跟随 redirect 一层（简化，不深层）
      if (r.code >= 300 && r.code < 400 && r.location) {
        try {
          const next = new URL(r.location, parsed).toString();
          const inner = await checkUrl(next, 1);
          return resolve({
            status: r.code,
            code: r.code,
            finalUrl: next,
            finalStatus: inner.finalStatus === 'ok' ? 'redirect-ok' : inner.finalStatus,
          });
        } catch (e) {
          return resolve({ status: r.code, code: r.code, finalUrl: '', finalStatus: 'redirect-broken' });
        }
      }
      if (r.code >= 200 && r.code < 300) return resolve({ status: r.code, code: r.code, finalUrl: url, finalStatus: 'ok' });
      if (r.code >= 400 && r.code < 500) return resolve({ status: r.code, code: r.code, finalUrl: '', finalStatus: '4xx' });
      if (r.code >= 500 && r.code < 600) return resolve({ status: r.code, code: r.code, finalUrl: '', finalStatus: '5xx' });
      resolve({ status: r.code, code: r.code || '', finalUrl: '', finalStatus: String(r.code) });
    })();
  });
}

/* 4. concurrency-limited runner */
async function runAll(rows) {
  const results = new Array(rows.length);
  let idx = 0;
  async function worker(id) {
    while (true) {
      const i = idx++;
      if (i >= rows.length) return;
      const r = rows[i];
      process.stderr.write(`  [${i + 1}/${rows.length}] ${r.city} · ${r.landmark} · ${r.channelName}\n`);
      const check = await checkUrl(r.url);
      results[i] = { ...r, ...check };
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i)));
  return results;
}

/* 5. CSV 输出 */
function csvEscape(s) {
  if (s === null || s === undefined) return '';
  const str = String(s).replace(/"/g, '""');
  return /[,"\n]/.test(str) ? `"${str}"` : str;
}

function toCsv(rows) {
  const header = 'city,landmark,channel_name,url,status_code,final_url,final_status,note';
  const lines = rows.map(r =>
    [r.city, r.landmark, r.channelName, r.url || '', r.code, r.finalUrl, r.finalStatus, r.note]
      .map(csvEscape).join(',')
  );
  return [header, ...lines].join('\n');
}

/* 6. 汇总 */
function summarize(results) {
  const byStatus = {};
  for (const r of results) {
    byStatus[r.finalStatus] = (byStatus[r.finalStatus] || 0) + 1;
  }
  process.stderr.write('\n=== audit-links summary ===\n');
  process.stderr.write(`Total channels: ${results.length}\n`);
  for (const [k, v] of Object.entries(byStatus).sort((a, b) => b[1] - a[1])) {
    process.stderr.write(`  ${k}: ${v}\n`);
  }
  const problem = results.filter(r => !['ok', 'redirect-ok', 'null-url'].includes(r.finalStatus));
  process.stderr.write(`Problem channels (非 ok): ${problem.length}\n`);
}

(async () => {
  process.stderr.write('→ 读取 js/data.js\n');
  const { CITIES } = loadData();
  process.stderr.write(`→ CITIES ${CITIES.length} 城\n`);
  const rows = collectChannels(CITIES);
  process.stderr.write(`→ 共 ${rows.length} 条 ticket channels 待审计\n\n`);
  const results = await runAll(rows);
  process.stdout.write(toCsv(results) + '\n');
  summarize(results);
})();
