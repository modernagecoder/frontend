#!/usr/bin/env node
'use strict';
/**
 * Proves the scripts/nl pipeline serves the Canadian market (spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md,
 * plan docs/superpowers/plans/2026-10-22-ca-cluster-pilots.md, Task 1):
 *  1. the lead contract, locale tags and NANP normaliser, rendered in memory from a UK module with the CA market;
 *  2. the build gates: each case writes a throwaway module into content/ca/, runs `build.js <slug> --dry-run`,
 *     checks the expected BUILD FAIL message, and deletes the module. A clean control must not trip a CA gate.
 *
 *   node scripts/nl/test-market-ca.js
 *
 * Canada pages are currency-neutral: prices go through data-price only, so the same page is right in USD now
 * and in CAD once the Canadian price region is switched on. (416) 555-0123 uses 555-0100 to 555-0199, which
 * NANPA reserves for fictional use.
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const ROOT = path.resolve(__dirname, '..', '..');
const cg = require('./lib/render-cg');
const ag = require('./lib/render-ag');

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };
const OK10 = [['(416) 555-0123', '4165550123'], ['+1 416 555 0123', '4165550123'], ['1-604-555-0123', '6045550123'], ['011 1 416 555 0123', null], ['4165550123', '4165550123']];

let fails = 0;
const ok = (c, m) => { console.log((c ? 'ok    ' : 'FAIL  ') + m); if (!c) fails++; };
function normaliserFrom(html, re, v) {
  const m = html.match(re);
  return m ? new Function(v, m[1] + ' return ' + v + ';') : null;
}

// --- 1. lead contract -----------------------------------------------------------
// UK fixtures print USD in their own copy; a Canadian page never does, so fixtures are made neutral first.
const neutral = file => JSON.parse(JSON.stringify(require(path.join(ROOT, file))).replace(/USD [0-9]+|US dollars?|in dollars|dollars/g, 'the monthly fee'));
const cgHtml = cg.render(Object.assign({}, neutral('content/uk/best-coding-class-in-london.js'), { market: CA }));
ok(/countryIso:'CA'/.test(cgHtml) && /countryCode:'\+1'/.test(cgHtml) && /countryName:'Canada'/.test(cgHtml), 'cg lead contract sends +1 / CA / Canada');
ok(cgHtml.includes('content="en_CA"') && cgHtml.includes('name="geo.region" content="CA"'), 'cg og:locale en_CA and geo.region CA');
ok(cgHtml.includes('placeholder="(416) 555-0123"') && cgHtml.includes('Canadian mobile number'), 'cg phone label and NANPA fiction placeholder');
const cgNorm = normaliserFrom(cgHtml, /var digits=phone\.replace\(\/\\D\/g,''\);(.*?)if\(digits\.length<7/, 'digits');
ok(!!cgNorm, 'cg normaliser present');
if (cgNorm) for (const [inp, want] of OK10) { if (!want) continue; const got = cgNorm(inp.replace(/\D/g, '')); ok(got === want, `cg "${inp}" -> ${got}`); }
ok(/if\(!foreignLead&&\(digits\.length<10\|\|digits\.length>10\|\|!\/\^\[2-9\]\//.test(cgHtml), 'cg exactly 10 national digits starting 2-9');

const agHtml = ag.render(Object.assign({}, neutral('content/uk/best-online-coding-classes-uk.js'), { market: CA }));
ok(/countryIso: 'CA'/.test(agHtml) && /countryCode: '\+1'/.test(agHtml), 'ag lead contract sends +1 / CA');
// Fees: price anchors the pricing script rewrites to the visitor's currency, never a printed USD figure.
// The crawler fallback and structured data carry the CAD row (owner 2026-10-24).
for (const [label, html] of [['cg', cgHtml], ['ag', agHtml]]) {
  ok(/data-price="coding\.canada\.group">\$140</.test(html) && /data-price="coding\.canada\.personal">\$210</.test(html), `${label} fees are data-price anchors on the CAD row`);
  ok(/data-price-currency>CAD</.test(html) && !/data-price-currency>USD</.test(html), `${label} fee label is CAD`);
  ok(!/USD 100|USD 150|billed in US dollars/.test(html.replace(/<script[\s\S]*?<\/script>/g, '')), `${label} fee block prints no USD figure`);
  ok(/data-price-scope="coding\.canada"/.test(html) && !/"priceCurrency":"USD"/.test(html) && /"price":"210","priceCurrency":"CAD"/.test(html), `${label} structured data in CAD`);
}
ok(agHtml.includes('<html lang="en-CA">') && agHtml.includes('content="en_CA"'), 'ag html lang en-CA and og:locale en_CA');
ok(/if \(!foreignLead && \(phoneDigits\.length > 10 \|\| !\/\^\[2-9\]\//.test(agHtml), 'ag maximum 10 national digits starting 2-9');
const agNorm = normaliserFrom(agHtml.replace(/\n\s*/g, ' '), /var phoneDigits = phoneRaw\.replace\(\/\\D\/g, ''\);(.*?)if \(phoneDigits\.length </, 'phoneDigits');
ok(!!agNorm, 'ag normaliser present');
if (agNorm) for (const [inp, want] of OK10) { if (!want) continue; const got = agNorm(inp.replace(/\D/g, '')); ok(got === want, `ag "${inp}" -> ${got}`); }
if (agNorm) ok(agNorm('41655501234').length !== 10 || agNorm('41655501234') !== '4165550123', 'ag 11 digits without a leading 1 are not cut to 10');

// --- 2. build gates -------------------------------------------------------------
const DIR = path.join(ROOT, 'content', 'ca');
const BASE = path.join(ROOT, 'content', 'uk', 'best-online-coding-classes-uk.js');
const CREDIT = 'We teach alongside the school course and do not grant Ontario credits.';
const CASES = [
  // [name, extra lede text, expected failure or null, extra module fields, code block]
  ['control', '', null],
  ['ist', 'Classes start at 7 PM IST for families.', 'bare IST on a Canadian page'],
  ['weekend', 'Join our weekend batch this spring.', '"weekend batch" on a Canadian page'],
  ['dollar', 'Classes cost $140 a month.', 'typed dollar figure on a Canadian page'],
  ['usd', 'The fee is USD 100 a month.', 'currency named on a Canadian page'],
  ['usdollars', 'Billed monthly in US dollars.', 'currency named on a Canadian page'],
  ['cad', 'The fee is CAD 140 a month.', 'currency named on a Canadian page'],
  ['cadollars', 'Billed in Canadian dollars.', 'currency named on a Canadian page'],
  ['caprefix', 'Fees are listed in CA$ for families.', 'currency named on a Canadian page'],
  ['premium', 'A premium class for every child.', "'Premium' on a Canadian page"],
  ['endash', 'Grades 3–5 start here.', 'en dash on a Canadian page'],
  ['nocredit', '', 'course-code page without the no-credit sentence', { courseCodePage: true }],
  ['credit', CREDIT, null, { courseCodePage: true }],
  ['codedollar', '', null, null, { kind: 'code', label: 'A shop', lang: 'python', code: 'print("$140 off")' }],
];
fs.mkdirSync(DIR, { recursive: true });
const gateRe = /BUILD FAIL: (bare IST on a Canadian|"weekend batch" on a Canadian|typed dollar figure on a Canadian|currency named on a Canadian|'Premium' on a Canadian|en dash on a Canadian|html lang must be en or en-CA|course-code page without)/;
for (const [name, text, want, extra, codeBlock] of CASES) {
  const slug = 'zz-ca-gate-test-' + name;
  const file = path.join(DIR, slug + '.js');
  const src = `'use strict';
// The UK module prints USD in its own copy; a Canadian page never does, so the fixture is made neutral first.
const base = JSON.parse(JSON.stringify(require(${JSON.stringify(BASE)})).replace(/USD [0-9]+|US dollars?|in dollars|dollars/g, 'the monthly fee'));
const m = Object.assign({}, base, { slug: ${JSON.stringify(slug)}, market: ${JSON.stringify(CA)} }, ${JSON.stringify(extra || {})});
m.lede = (base.lede || '') + ${JSON.stringify(text ? ' ' + text : '')};
${codeBlock ? `m.sections = base.sections.concat([{ id: 'zz-code', tint: '', eyebrow: 'Code', h2: 'Code', body: [${JSON.stringify(codeBlock)}] }]);` : ''}
module.exports = m;
`;
  fs.writeFileSync(file, src, 'utf8');
  try {
    const r = spawnSync(process.execPath, [path.join(ROOT, 'scripts/nl/build.js'), slug, '--dry-run'], { encoding: 'utf8' });
    const out = (r.stdout || '') + (r.stderr || '');
    if (/no content module/.test(out)) ok(false, `${name}: build.js does not read content/ca`);
    else if (want) ok(out.includes('BUILD FAIL: ' + want), `${name}: refused with "${want}" (${out.trim().split('\n').pop().slice(0, 90)})`);
    else ok(!gateRe.test(out), `${name}: no Canadian gate fires (${out.trim().split('\n').pop().slice(0, 90)})`);
  } finally {
    fs.unlinkSync(file);
  }
}
if (!fs.readdirSync(DIR).length) fs.rmdirSync(DIR);

console.log(fails ? `${fails} FAILED` : 'CA market: all checks pass');
process.exit(fails ? 1 : 0);
