#!/usr/bin/env node
'use strict';
/**
 * Record a gated page in its cluster tracker.
 *
 *   node scripts/nl/finish.js --tracker IRELAND-PROGRESS.md --slug <slug> --row <n>
 *        --type "<type>" --spine "<what only this page carries>" --trap "<data trap or none>"
 *        --build <build output file> --check <check output file>
 *
 * Reads the word count from the build output and the worst overlap pair from
 * the check output, replaces the previous row's "(this commit)" with the
 * current HEAD (the previous page's commit), and appends the new row to the
 * Done table with "(this commit)". Replaces the session-only finish_ag.py the
 * Netherlands build used.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..');
const args = {};
for (let i = 2; i < process.argv.length; i += 2) args[process.argv[i].replace(/^--/, '')] = process.argv[i + 1];
for (const k of ['tracker', 'slug', 'row', 'type', 'spine', 'trap', 'build', 'check']) {
  if (!args[k]) { console.error('missing --' + k); process.exit(2); }
}
const page = require(['nl', 'ie'].map(d => path.join(ROOT, 'content', d, args.slug + '.js')).find(p => fs.existsSync(p)));

const build = fs.readFileSync(args.build, 'utf8');
const check = fs.readFileSync(args.check, 'utf8');
const wm = build.match(new RegExp('built ' + args.slug + ': (\\d+) visible words'));
if (!wm) { console.error('no word count for ' + args.slug + ' in ' + args.build); process.exit(1); }
const words = Number(wm[1]).toLocaleString('en-US');

let worst = null;
for (const m of check.matchAll(/(?:ok|warn)\s+([\d.]+)%\s+(\S+)\s+vs\s+(\S+)/g)) {
  const [, pct, a, b] = m;
  if (a !== args.slug && b !== args.slug) continue;
  if (!worst || Number(pct) > worst[0]) worst = [Number(pct), a === args.slug ? b : a];
}
const overlap = worst ? `${worst[0]}% vs ${worst[1]}` : 'n/a';

const trackerPath = path.join(ROOT, args.tracker);
let s = fs.readFileSync(trackerPath, 'utf8');
const eol = s.includes('\r\n') ? '\r\n' : '\n';
const open = (s.match(/\| \(this commit\) \|/g) || []).length;
if (open > 1) { console.error('tracker has ' + open + ' open "(this commit)" rows'); process.exit(1); }
if (open === 1) {
  const head = execFileSync('git', ['rev-parse', '--short=8', 'HEAD'], { cwd: ROOT, encoding: 'utf8' }).trim();
  s = s.replace('| (this commit) |', '| ' + head + ' |');
}
if (new RegExp('\\| ' + args.slug + ' \\(').test(s)) { console.error(args.slug + ' already has a row'); process.exit(1); }

const row = `| ${args.row} | ${args.slug} (${page.code}, ${page.accent}) | ${args.type} | ${words} | ${overlap} | ${args.spine} | ${args.trap} | (this commit) |`;
const done = s.indexOf('## Done');
const next = s.indexOf(eol + '## ', done + 1);
if (done === -1 || next === -1) { console.error('Done section not found'); process.exit(1); }
let section = s.slice(done, next).replace(/\s+$/, '');
section = section + eol + row;
s = s.slice(0, done) + section + eol + s.slice(next);
fs.writeFileSync(trackerPath, s, 'utf8');
console.log(`tracker row ${args.row}: ${args.slug}, ${words} words, overlap ${overlap}`);
