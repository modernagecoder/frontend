#!/usr/bin/env node
/**
 * reorder-redirect-files.js
 *
 * Both redirect files ended up with rules BELOW their /* catch-all, where they
 * can never fire (first match wins, /* matches everything). This was assumed
 * harmless because "the other file covers it", but that belief was false in
 * the direction that matters: _redirects is processed before netlify.toml, so
 * _redirects' catch-all swallows every URL before netlify.toml is consulted at
 * all. Result, confirmed live before this fix: 105 URLs 404 in production,
 * including 68 .md twins.
 *
 * The fix, per file:
 *   _redirects   — everything after the catch-all line moves wholesale to just
 *                  above it (comments travel with their rules); the catch-all
 *                  becomes the true last rule. Exact duplicate rule lines are
 *                  dropped (first occurrence wins, same as Netlify semantics).
 *   netlify.toml — [[redirects]] blocks after the catch-all block are extracted
 *                  and re-inserted above it. Non-redirect sections ([[headers]]
 *                  etc.) stay exactly where they are. Exact duplicate blocks are
 *                  dropped file-wide.
 *
 * This script does NOT prove safety by itself. The proof is the before/after
 * snapshot diff from snapshot-resolution.js: the ONLY acceptable change is
 * BROKEN -> ok. Any resolved URL that changes target fails the fix.
 *
 * Usage: node scripts/reorder-redirect-files.js [--dry]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DRY = process.argv.includes('--dry');

// ------------------------------------------------------------- _redirects ---
function fixRedirects() {
  const file = path.join(ROOT, '_redirects');
  const src = fs.readFileSync(file, 'utf8');
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const lines = src.split(/\r?\n/);

  const catchIdx = lines.findIndex(l => /^\/\*\s/.test(l.trim()));
  if (catchIdx === -1) throw new Error('_redirects: no /* catch-all found');

  const head = lines.slice(0, catchIdx);
  const catchLine = lines[catchIdx];
  const tail = lines.slice(catchIdx + 1);

  const tailRules = tail.filter(l => /^\//.test(l.trim())).length;

  // move the tail wholesale above the catch-all, banner first
  const banner = [
    '',
    '# ============================================================================',
    '# RELOCATED 2026-07-27: everything below this banner previously sat AFTER the',
    '# /* catch-all, where no rule can ever fire (first match wins). Confirmed live',
    '# before the fix: these rules were dead and their URLs 404ed in production,',
    '# including the .md twins. The /* catch-all must stay the LAST line.',
    '# ============================================================================'
  ];

  let merged = [...head, ...banner, ...tail, '', catchLine];

  // drop exact duplicate rule lines, first occurrence wins (Netlify semantics)
  const seen = new Set();
  let dupes = 0;
  merged = merged.filter(l => {
    const t = l.trim();
    if (!/^\//.test(t)) return true;
    if (seen.has(t)) { dupes++; return false; }
    seen.add(t);
    return true;
  });

  if (!DRY) fs.writeFileSync(file, merged.join(eol), 'utf8');

  // invariant: catch-all is the last rule line
  const ruleLines = merged.map(l => l.trim()).filter(t => /^\//.test(t));
  const lastIsCatch = /^\/\*\s/.test(ruleLines[ruleLines.length - 1]);
  return { tailRules, dupes, lastIsCatch, totalRules: ruleLines.length };
}

// ------------------------------------------------------------ netlify.toml --
function fixNetlifyToml() {
  const file = path.join(ROOT, 'netlify.toml');
  const src = fs.readFileSync(file, 'utf8');
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const lines = src.split(/\r?\n/);

  // locate every [[redirects]] block: header line + contiguous key = value lines
  const blocks = [];
  for (let i = 0; i < lines.length; i++) {
    if (!/^\s*\[\[redirects\]\]\s*$/.test(lines[i])) continue;
    let end = i + 1;
    while (end < lines.length &&
           (/^\s*\w+\s*=/.test(lines[end]) || lines[end].trim() === '')) {
      // stop a trailing blank run from being swallowed into the block
      if (lines[end].trim() === '' &&
          !(end + 1 < lines.length && /^\s*\w+\s*=/.test(lines[end + 1]))) break;
      end++;
    }
    blocks.push({ start: i, end }); // [start, end) in line indices
  }

  const catchBlock = blocks.find(b =>
    lines.slice(b.start, b.end).some(l => /^\s*from\s*=\s*"\/\*"\s*$/.test(l)));
  if (!catchBlock) throw new Error('netlify.toml: no /* catch-all block found');

  const deadBlocks = blocks.filter(b => b.start > catchBlock.start);

  // pull the dead blocks out, bottom-up so indices stay valid
  const extracted = [];
  const work = [...lines];
  for (const b of [...deadBlocks].reverse()) {
    extracted.unshift(work.splice(b.start, b.end - b.start).join(eol));
  }

  // find the catch-all again in the reduced file and insert above it
  const catchIdx = work.findIndex((l, i) =>
    /^\s*\[\[redirects\]\]\s*$/.test(l) &&
    work.slice(i, i + 6).some(x => /^\s*from\s*=\s*"\/\*"\s*$/.test(x)));
  if (catchIdx === -1) throw new Error('netlify.toml: catch-all lost during move');

  const banner = [
    '# ============================================================================',
    '# RELOCATED 2026-07-27: these [[redirects]] blocks previously sat AFTER the',
    '# /* catch-all block and could never fire. Kept in their original relative',
    '# order. The /* catch-all must remain the LAST [[redirects]] block.',
    '# ============================================================================',
    ''
  ];
  work.splice(catchIdx, 0, ...banner, ...extracted.join(eol + eol).split(eol), '');

  // drop exact duplicate blocks file-wide, first occurrence wins
  let text = work.join(eol);
  const seen = new Set();
  let dupes = 0;
  text = text.replace(/\[\[redirects\]\][^\[]*/g, (block) => {
    const norm = block.replace(/\s+/g, ' ').trim();
    if (seen.has(norm)) { dupes++; return ''; }
    seen.add(norm);
    return block;
  });

  if (!DRY) fs.writeFileSync(file, text, 'utf8');

  // invariant: catch-all is the last [[redirects]] block
  const froms = [...text.matchAll(/\[\[redirects\]\][^\[]*?from\s*=\s*"([^"]+)"/g)].map(m => m[1]);
  return {
    moved: deadBlocks.length,
    dupes,
    lastIsCatch: froms[froms.length - 1] === '/*',
    totalBlocks: froms.length
  };
}

const r = fixRedirects();
console.log('_redirects:   moved ' + r.tailRules + ' rule(s) above the catch-all, dropped ' +
  r.dupes + ' exact duplicate(s), ' + r.totalRules + ' rules total, catch-all last: ' + r.lastIsCatch);

const t = fixNetlifyToml();
console.log('netlify.toml: moved ' + t.moved + ' block(s) above the catch-all, dropped ' +
  t.dupes + ' exact duplicate(s), ' + t.totalBlocks + ' blocks total, catch-all last: ' + t.lastIsCatch);

if (!r.lastIsCatch || !t.lastIsCatch) {
  console.error('\nINVARIANT FAILED: catch-all is not last. Do not commit.');
  process.exit(1);
}
console.log('\nNow run the after-snapshot and diff against the before-snapshot.');
