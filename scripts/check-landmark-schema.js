#!/usr/bin/env node
/**
 * M-02 schema guard — enforces PRD §M-02 field contract:
 *   每个 landmark 必须有 era (string) + yearNum (number)
 *
 * Usage:
 *   node scripts/check-landmark-schema.js
 *
 * Exit: 0 = pass / 1 = missing fields found (pre-commit hook 会阻塞 commit)
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'js', 'data.js');
const src = fs.readFileSync(dataPath, 'utf8');

// data.js 不走 module.exports；用 Function 壳注入 CITIES
const box = {};
new Function('box', src + '\nbox.CITIES = CITIES;')(box);
const CITIES = box.CITIES;

const misses = [];
CITIES.forEach(c => {
  (c.landmarks || []).forEach((l, i) => {
    const tag = `${c.id} / ${l.name || '#' + i}`;
    if (!l.era || typeof l.era !== 'string') {
      misses.push(`MISSING era    : ${tag}`);
    }
    if (typeof l.yearNum !== 'number' || !Number.isFinite(l.yearNum)) {
      misses.push(`MISSING yearNum: ${tag}`);
    }
  });
});

if (misses.length === 0) {
  const total = CITIES.reduce((s, c) => s + (c.landmarks?.length || 0), 0);
  console.log(`[M-02] ✓ ${total} landmarks all have era + yearNum`);
  process.exit(0);
}

console.error(`[M-02] ✗ ${misses.length} schema violation(s):`);
misses.forEach(m => console.error('  ' + m));
console.error('');
console.error('PRD §M-02 要求：每个 landmark 必须有 era (string) + yearNum (number)');
console.error('修复后再 commit，或用 --no-verify 强绕（不推荐）');
process.exit(1);
