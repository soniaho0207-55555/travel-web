#!/usr/bin/env node
/**
 * H-09: Wiki 词条配图健康度监控
 *
 * 用法：
 *   node scripts/audit-wiki-images.js
 *   node scripts/audit-wiki-images.js > audit-wiki-images.csv
 *
 * 输出 CSV：entity_type, entity_id, entity_name, wiki_title, api_thumb_url, has_direct_url, direct_url, api_status, direct_status
 *
 * 策略：
 * - 扫 THEMES (6) + CITIES (15) + landmarks (N×15=~53)
 * - 对每个 wiki 标题调 Wikipedia pageimages API
 * - 若 API 不返图 → api_status=no-thumb
 * - 若数据里已有 coverUrl / wikiImage → has_direct_url=yes（表示已有兜底）
 * - QA round 1 增强：对 direct_url 做 HEAD 校验，记 direct_status（防 H-02 同类坏链复发）
 * - 输出 CSV 给 PM 复核
 *
 * 最后输出 "Alerts"：wiki 失败且无直链、或直链 HEAD 非 2xx 的条目（必修）
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { URL } = require('url');

const DATA_PATH = path.join(__dirname, '..', 'js', 'data.js');
const TIMEOUT_MS = 5000;
const CONCURRENCY = 6;

function loadData() {
  const src = fs.readFileSync(DATA_PATH, 'utf8');
  const mod = { exports: {} };
  const sandbox = { CITIES: null, THEMES: null, CONTINENTS: null, CONTINENT_MAP: null, module: mod, console };
  const vm = require('vm');
  const ctx = vm.createContext(sandbox);
  vm.runInContext(src + '\nmodule.exports = { CITIES, THEMES };', ctx);
  return mod.exports;
}

function collectEntities({ CITIES, THEMES }) {
  const rows = [];
  for (const t of THEMES) {
    if (t.cover) rows.push({ type: 'theme', id: t.id, name: t.name, wiki: t.cover, directUrl: t.coverUrl || '' });
  }
  for (const c of CITIES) {
    if (c.wiki) rows.push({ type: 'city', id: c.id, name: c.name, wiki: c.wiki, directUrl: c.wikiImage || '' });
    for (const l of c.landmarks || []) {
      if (l.wiki) rows.push({ type: 'landmark', id: `${c.id}/${l.name}`, name: l.name, wiki: l.wiki, directUrl: l.wikiImage || '' });
    }
  }
  return rows;
}

/* Wikipedia pageimages API */
function fetchPageImage(title) {
  return new Promise((resolve) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=800&redirects=1`;
    const req = https.request(url, { timeout: TIMEOUT_MS, headers: { 'User-Agent': 'TravelWebAuditBot/2.6' } }, (r) => {
      let body = '';
      r.on('data', (d) => body += d);
      r.on('end', () => {
        try {
          const j = JSON.parse(body);
          const pages = j.query?.pages;
          if (!pages) return resolve({ status: 'no-query', thumb: '' });
          for (const p of Object.values(pages)) {
            if (p.missing !== undefined) return resolve({ status: 'wiki-404', thumb: '' });
            if (p.thumbnail?.source) return resolve({ status: 'ok', thumb: p.thumbnail.source });
          }
          resolve({ status: 'no-thumb', thumb: '' });
        } catch (e) {
          resolve({ status: 'parse-error', thumb: '' });
        }
      });
    });
    req.on('error', () => resolve({ status: 'error', thumb: '' }));
    req.on('timeout', () => { req.destroy(); resolve({ status: 'timeout', thumb: '' }); });
    req.end();
  });
}

/* HEAD 校验 direct_url 本身（QA round 1 增强：防 H-02 同类坏链复发） */
function headCheckOnce(urlStr) {
  return new Promise((resolve) => {
    let u;
    try { u = new URL(urlStr); } catch (_) { return resolve({ status: 'invalid-url', location: '' }); }
    const req = https.request(u, { method: 'HEAD', timeout: TIMEOUT_MS, headers: { 'User-Agent': 'TravelWebAuditBot/2.6' } }, (r) => {
      resolve({ status: String(r.statusCode), location: r.headers.location ? new URL(r.headers.location, u).toString() : '' });
    });
    req.on('error', () => resolve({ status: 'error', location: '' }));
    req.on('timeout', () => { req.destroy(); resolve({ status: 'timeout', location: '' }); });
    req.end();
  });
}

async function headCheck(urlStr, maxHops = 3) {
  if (!urlStr) return '';
  let current = urlStr;
  for (let i = 0; i < maxHops; i++) {
    const { status, location } = await headCheckOnce(current);
    const code = Number(status);
    if (code >= 300 && code < 400 && location) { current = location; continue; }
    return status;
  }
  return 'too-many-redirects';
}

async function runAll(rows) {
  const results = new Array(rows.length);
  let idx = 0;
  async function worker() {
    while (true) {
      const i = idx++;
      if (i >= rows.length) return;
      const r = rows[i];
      process.stderr.write(`  [${i + 1}/${rows.length}] ${r.type} · ${r.name} · wiki=${r.wiki}\n`);
      const [res, directStatus] = await Promise.all([
        fetchPageImage(r.wiki),
        headCheck(r.directUrl),
      ]);
      results[i] = { ...r, apiThumb: res.thumb, apiStatus: res.status, directStatus };
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  return results;
}

function csvEscape(s) {
  if (s === null || s === undefined) return '';
  const str = String(s).replace(/"/g, '""');
  return /[,"\n]/.test(str) ? `"${str}"` : str;
}

function toCsv(rows) {
  const header = 'entity_type,entity_id,entity_name,wiki_title,api_thumb_url,has_direct_url,direct_url,api_status,direct_status';
  const lines = rows.map(r => [
    r.type, r.id, r.name, r.wiki, r.apiThumb, r.directUrl ? 'yes' : 'no', r.directUrl, r.apiStatus, r.directStatus,
  ].map(csvEscape).join(','));
  return [header, ...lines].join('\n');
}

function isDirectOk(s) {
  if (!s) return false;           // 无 direct_url
  const n = Number(s);
  return n >= 200 && n < 300;
}

function summarize(results) {
  const byStatus = {};
  for (const r of results) byStatus[r.apiStatus] = (byStatus[r.apiStatus] || 0) + 1;
  process.stderr.write('\n=== audit-wiki-images summary ===\n');
  process.stderr.write(`Total entities: ${results.length}\n`);
  process.stderr.write('-- api_status --\n');
  for (const [k, v] of Object.entries(byStatus).sort((a, b) => b[1] - a[1])) {
    process.stderr.write(`  ${k}: ${v}\n`);
  }
  // direct_status 分布（仅统计配置了 direct_url 的条目）
  const byDirect = {};
  for (const r of results) if (r.directUrl) byDirect[r.directStatus] = (byDirect[r.directStatus] || 0) + 1;
  process.stderr.write('-- direct_status (仅计有 direct_url 的条目) --\n');
  const directTotal = results.filter(r => r.directUrl).length;
  if (!directTotal) {
    process.stderr.write('  (无直链配置)\n');
  } else {
    for (const [k, v] of Object.entries(byDirect).sort((a, b) => b[1] - a[1])) {
      process.stderr.write(`  ${k}: ${v}\n`);
    }
  }
  // Alerts：wiki 失败且无可用直链（直链缺失 or HEAD 非 2xx）
  const alerts = results.filter(r => r.apiStatus !== 'ok' && !isDirectOk(r.directStatus));
  process.stderr.write(`\n=== ALERTS (wiki 失败且无可用直链兜底，PM 必修) ===\n`);
  if (!alerts.length) {
    process.stderr.write('  (无)\n');
  } else {
    for (const a of alerts) process.stderr.write(`  [${a.type}] ${a.name}（wiki="${a.wiki}" → ${a.apiStatus}；direct=${a.directStatus || 'none'}）\n`);
  }
  // Direct-broken：有直链但 HEAD 非 2xx（QA round 1 增强，防 H-02 同类复发）
  const directBroken = results.filter(r => r.directUrl && !isDirectOk(r.directStatus));
  process.stderr.write(`\n=== DIRECT-BROKEN (direct_url 配置了但 HEAD 非 2xx，Dev 必修) ===\n`);
  if (!directBroken.length) {
    process.stderr.write('  (无)\n');
  } else {
    for (const a of directBroken) process.stderr.write(`  [${a.type}] ${a.name} → direct_status=${a.directStatus} · ${a.directUrl}\n`);
  }
  const healthy = results.filter(r => r.apiStatus === 'ok' || isDirectOk(r.directStatus)).length;
  process.stderr.write(`\nHealthy (API 返图 OR 直链 2xx): ${healthy}/${results.length}\n`);
}

(async () => {
  process.stderr.write('→ 读取 js/data.js\n');
  const data = loadData();
  const rows = collectEntities(data);
  process.stderr.write(`→ 共 ${rows.length} 个 wiki 条目待审计（${rows.filter(r => r.type === 'theme').length} theme / ${rows.filter(r => r.type === 'city').length} city / ${rows.filter(r => r.type === 'landmark').length} landmark）\n\n`);
  const results = await runAll(rows);
  process.stdout.write(toCsv(results) + '\n');
  summarize(results);
})();
