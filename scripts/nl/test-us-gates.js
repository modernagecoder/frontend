#!/usr/bin/env node
'use strict';
/**
 * Proves scripts/nl/build.js enforces the US rules (spec docs/superpowers/specs/2026-10-17-us-cluster-design.md,
 * section 3): each case writes a throwaway US module into content/us/, runs `build.js <slug> --dry-run`,
 * checks the expected BUILD FAIL message, and deletes the module. A clean control case must reach the
 * word-floor or pass line, which proves the failures come from the US gate and not from a broken module.
 *
 *   node scripts/nl/test-us-gates.js
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const ROOT = path.resolve(__dirname, '..', '..');
const DIR = path.join(ROOT, 'content', 'us');
const BASE = path.join(ROOT, 'content', 'uk', 'best-online-coding-classes-uk.js');
const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, stripTrunk: true };

const CASES = [
  ['control', '', null],
  ['ist', 'Classes start at 7 PM IST for families.', 'bare IST on a US page'],
  ['weekend', 'Join our weekend batch this spring.', '"weekend batch" on a US page'],
  ['dollar', 'Classes cost $49 a month.', 'typed dollar figure on a US page'],
  ['premium', 'A premium class for every child.', "'Premium' on a US page"],
  ['endash', 'Grades 3–5 start here.', 'en dash on a US page'],
];

let fails = 0;
const ok = (c, m) => { console.log((c ? 'ok    ' : 'FAIL  ') + m); if (!c) fails++; };
fs.mkdirSync(DIR, { recursive: true });
for (const [name, text, want] of CASES) {
  const slug = 'zz-us-gate-test-' + name;
  const file = path.join(DIR, slug + '.js');
  const src = `'use strict';
const base = require(${JSON.stringify(BASE)});
const m = Object.assign({}, base, { slug: ${JSON.stringify(slug)}, market: ${JSON.stringify(US)} });
m.lede = (base.lede || '') + ${JSON.stringify(text ? ' ' + text : '')};
module.exports = m;
`;
  fs.writeFileSync(file, src, 'utf8');
  try {
    const r = spawnSync(process.execPath, [path.join(ROOT, 'scripts/nl/build.js'), slug, '--dry-run'], { encoding: 'utf8' });
    const out = (r.stdout || '') + (r.stderr || '');
    if (want) ok(out.includes('BUILD FAIL: ' + want), `${name}: refused with "${want}"`);
    else ok(!/BUILD FAIL: (bare IST|"weekend batch"|typed dollar|'Premium' on a US|en dash on a US|html lang)/.test(out) && !/no content module/.test(out), `control: no US gate fires on a clean US module (${out.trim().split('\n').pop().slice(0, 90)})`);
  } finally {
    fs.unlinkSync(file);
  }
}
if (!fs.readdirSync(DIR).length) fs.rmdirSync(DIR);
console.log(fails ? `${fails} FAILED` : 'US gates: all checks pass');
process.exit(fails ? 1 : 0);
