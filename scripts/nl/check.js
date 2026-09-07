#!/usr/bin/env node
'use strict';
/**
 * Gate runner for one Netherlands cluster page.
 *
 *   node scripts/nl/check.js coding-classes-in-amstelveen [--no-render]
 *
 * (a) personality block grep (build guide section 19, tested form)
 * (b) every cg- class on the page exists in coding-global.css
 * (c) verify-cluster-pages.js coding-global, this slug's result
 * (d) check-cluster-uniqueness.js coding-global, this slug's worst pair
 * (e) audit-rendered-ag-pages.mjs --prefix=cg <slug> (Playwright, 1280 + 390)
 * Exit 1 on any failure.
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..');
const slug = process.argv[2];
const NO_RENDER = process.argv.includes('--no-render');
if (!slug) { console.error('usage: node scripts/nl/check.js <slug>'); process.exit(2); }

const html = fs.readFileSync(path.join(ROOT, 'src', 'pages', slug + '.html'), 'utf8');
const bodyM = html.match(/<body class="(cg|ag)-root (?:cg|ag)-([a-z]+)"/);
const P = bodyM ? bodyM[1] : 'cg';
const code = bodyM ? bodyM[2] : '';
const CLUSTER_NAME = P === 'ag' ? 'build-ai' : 'coding-global';
const CSS_FILE = P === 'ag' ? 'ai-global.css' : 'coding-global.css';
let failed = false;
const bad = (m) => { failed = true; console.log('FAIL  ' + m); };
const ok = (m) => console.log('ok    ' + m);

// (a) personality block
const style = ((html.match(/<style>([\s\S]*?)<\/style>/) || [])[1] || '').trim();
// The guide's tested grep, line by line: every rule opener must start with the
// page's own prefixed selector, including ones indented inside an @media.
const sels = style.split(/\r?\n/).map(l => l.trim()).filter(l => /^[^@/}][^{]*\{/.test(l)).map(l => l.match(/^[^{]*\{/)[0]);
const pre = `.${P}-root.${P}-${code}`;
const unprefixed = sels.filter(s => !s.startsWith(pre + ' ') && !s.startsWith(pre + '{') && !s.startsWith(pre + '.') && !s.startsWith(pre + ':'));
if (unprefixed.length) bad('unprefixed personality selectors: ' + unprefixed.join(' ')); else ok(`personality block: ${sels.length} selectors, all prefixed ${pre}`);

// (b) undefined classes
const css = fs.readFileSync(path.join(ROOT, 'src', 'css', CSS_FILE), 'utf8');
const defined = new Set([...css.matchAll(new RegExp('\.(' + P + '-[a-z0-9-]+)', 'g'))].map(m => m[1]));
const used = new Set();
for (const m of html.matchAll(/class="([^"]+)"/g)) for (const c of m[1].split(/\s+/)) if (c.startsWith(P + '-')) used.add(c);
const undef = [...used].filter(c => !defined.has(c));
if (undef.length) bad('classes not in ' + CSS_FILE + ': ' + undef.join(' ')); else ok(`classes: ${used.size} used, all defined`);

// (c) verify gate
const v = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'verify-cluster-pages.js'), CLUSTER_NAME], { encoding: 'utf8' });
const vOut = (v.stdout || '') + (v.stderr || '');
const vLines = vOut.split(/\r?\n/);
const idx = vLines.findIndex(l => l.includes(slug));
const mine = idx === -1 ? [] : vLines.slice(idx, idx + 12).filter((l, i) => i === 0 || /^\s{2,}/.test(l) || /^\s*(ERROR|warn)/.test(l));
const summary = vLines.filter(l => /pages pass|FAIL/.test(l)).slice(-2).join(' ');
if (idx === -1) bad('verify: slug not in output (not registered?)');
else if (/FAIL|ERROR/.test(mine.join('\n'))) bad('verify:\n' + mine.join('\n'));
else ok('verify: ' + mine.join(' | ').slice(0, 300));
console.log('      ' + summary);

// (d) uniqueness
const u = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'check-cluster-uniqueness.js'), CLUSTER_NAME], { encoding: 'utf8' });
const uOut = (u.stdout || '') + (u.stderr || '');
const uMine = uOut.split(/\r?\n/).filter(l => l.includes(slug));
const uFail = uMine.some(l => /FAIL/.test(l));
const uWarn = uMine.some(l => /warn/.test(l));
if (uFail) bad('uniqueness:\n' + uMine.join('\n'));
else if (uWarn) { console.log('WARN  uniqueness (above 6%):\n' + uMine.join('\n')); }
else ok('uniqueness: ' + uMine.slice(0, 2).join(' | '));
console.log('      ' + uOut.split(/\r?\n/).filter(l => /threshold|Shingle/.test(l)).join(' | '));

// (e) rendered audit
if (!NO_RENDER) {
  // Playwright is not a dependency of this repo; it lives in the sibling
  // dashboard3 project (with its browsers). NODE_PATH lets the audit's
  // createRequire find it without installing 400 MB of browsers here.
  const env = Object.assign({}, process.env);
  try { require.resolve('playwright'); } catch (e) {
    const alt = ['../../dashboard3/node_modules', '../dashboard3/node_modules'].map(p => path.resolve(ROOT, p)).find(p => fs.existsSync(path.join(p, 'playwright')));
    if (alt) env.NODE_PATH = alt + (env.NODE_PATH ? path.delimiter + env.NODE_PATH : '');
  }
  const a = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'audit-rendered-ag-pages.mjs'), '--prefix=' + P, slug], { encoding: 'utf8', timeout: 180000, env });
  const aOut = (a.stdout || '') + (a.stderr || '');
  process.stdout.write(aOut.split(/\r?\n/).filter(l => l.trim()).map(l => '      ' + l).join('\n') + '\n');
  if (a.status !== 0) bad('rendered audit exit ' + a.status); else ok('rendered audit clean at 1280 and 390');
}

process.exit(failed ? 1 : 0);
