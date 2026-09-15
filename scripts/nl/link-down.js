#!/usr/bin/env node
'use strict';
/**
 * Count-checked text insertion, for linking a new page from its hub or parent.
 *
 *   node scripts/nl/link-down.js <file> --anchor "<exact text>" --insert "<text>" [--before] [--dry]
 *
 * The anchor must occur exactly once in the file, and the inserted text must
 * not already be present, so a link-down can never land twice or in the wrong
 * place. Inserts after the anchor unless --before is given. Works on HTML,
 * Markdown and content modules alike.
 */
const fs = require('fs');
const path = require('path');

const argv = process.argv.slice(2);
const file = argv[0];
const opt = k => { const i = argv.indexOf('--' + k); return i === -1 ? undefined : argv[i + 1]; };
const anchor = opt('anchor');
const insert = opt('insert');
if (!file || anchor === undefined || insert === undefined) {
  console.error('usage: node scripts/nl/link-down.js <file> --anchor "<text>" --insert "<text>" [--before] [--dry]');
  process.exit(2);
}
const p = path.resolve(file);
const s = fs.readFileSync(p, 'utf8');
const n = s.split(anchor).length - 1;
if (n !== 1) { console.error(`${file}: anchor found ${n} times (need exactly 1)`); process.exit(1); }
if (s.includes(insert)) { console.error(`${file}: insert already present`); process.exit(1); }
if (argv.includes('--dry')) { console.log(`${file}: dry run ok`); process.exit(0); }
const at = s.indexOf(anchor) + (argv.includes('--before') ? 0 : anchor.length);
fs.writeFileSync(p, s.slice(0, at) + insert + s.slice(at), 'utf8');
console.log(`${file}: inserted ${insert.length} chars ${argv.includes('--before') ? 'before' : 'after'} the anchor`);
