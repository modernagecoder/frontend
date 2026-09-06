#!/usr/bin/env node
/**
 * verify-hreflang.js
 * ------------------------------------------------------------------
 * Proves the hreflang cluster in content/markets.json is complete and
 * reciprocal on disk, because a half-applied set is worse than none:
 * Google ignores hreflang links that lack a return link.
 *
 * For every member page (each market + the x-default page):
 *   1. it carries exactly one link per market hreflang code, plus x-default
 *   2. every href points at a page in the cluster (no strays)
 *   3. the page's own URL appears in its set (self-reference)
 *   4. no hreflang code is repeated and no code is used by two paths
 *
 *   node scripts/verify-hreflang.js
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://learn.modernagecoders.com';
const MARKETS = require(path.join(ROOT, 'content', 'markets.json'));

function fileFor(p) {
  return path.join(ROOT, 'src', 'pages', (p === '/' ? 'index' : p.replace(/^\//, '')) + '.html');
}
function norm(u) { return u.replace(SITE, '').replace(/\/+$/, '') || '/'; }

const problems = [];
const expected = new Map(MARKETS.markets.map((m) => [m.hreflang, m.path]));
expected.set('x-default', MARKETS.xDefault);
const codes = [...expected.keys()];
if (new Set(codes).size !== codes.length) problems.push('duplicate hreflang codes in markets.json');
const paths = [...expected.values()];
if (new Set(paths).size !== paths.length) problems.push('two markets share one path in markets.json');

const members = paths;
for (const p of members) {
  const file = fileFor(p);
  if (!fs.existsSync(file)) { problems.push(`${p}: page file missing`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const head = html.slice(0, html.indexOf('</head>'));
  const found = new Map();
  for (const m of head.matchAll(/<link[^>]+rel="alternate"[^>]+hreflang="([^"]+)"[^>]+href="([^"]+)"/g)) {
    if (found.has(m[1])) problems.push(`${p}: hreflang "${m[1]}" appears twice`);
    found.set(m[1], norm(m[2]));
  }
  for (const [code, target] of expected) {
    if (!found.has(code)) problems.push(`${p}: missing hreflang "${code}"`);
    else if (found.get(code) !== target) problems.push(`${p}: hreflang "${code}" points at ${found.get(code)}, expected ${target}`);
  }
  for (const [code, target] of found) {
    if (!expected.has(code)) problems.push(`${p}: unexpected hreflang "${code}" -> ${target}`);
  }
  if (![...found.values()].includes(p)) problems.push(`${p}: does not reference itself`);
}

console.log(`hreflang cluster "${MARKETS.clusterId}": ${members.length} pages checked`);
if (problems.length) {
  console.error('\nhreflang verification FAILED:');
  problems.slice(0, 40).forEach((x) => console.error('  - ' + x));
  process.exit(1);
}
console.log('✓ hreflang verification passed: every member lists every market, itself and x-default, and nothing else.');
