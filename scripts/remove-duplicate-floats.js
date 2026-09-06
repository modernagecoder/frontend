#!/usr/bin/env node
/**
 * remove-duplicate-floats.js
 * ------------------------------------------------------------------
 * 104 pages carried two or three stacked copies of the floating WhatsApp
 * and Misti buttons: one inside the inlined footer (the real one, refreshed
 * at every build) and one or two older copies pasted after the footer's
 * END marker, each with its own <style> block and its own Lenis script tag.
 * Stacked at the same fixed position they looked like one button, but the
 * page shipped three anchors, three style blocks and up to three copies of
 * a 14 KB script, and the top copy (old inline !important styles) could
 * never be hidden or moved by the footer's mobile rules, which is why the
 * mobile action bar's help control sat under a WhatsApp float.
 *
 * Rule: on a page that has an inlined footer block, every float anchor,
 * float hover-style block and Lenis script OUTSIDE that block is a
 * leftover and is removed. Pages without a footer block are left alone.
 *
 *   node scripts/remove-duplicate-floats.js          # dry run, counts only
 *   node scripts/remove-duplicate-floats.js --apply  # write
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIR = path.join(ROOT, 'src/pages');
const APPLY = process.argv.includes('--apply');
const START = '<!-- BEGIN_INLINED_FOOTER -->';
const END = '<!-- END_INLINED_FOOTER -->';

const FLOAT_ANCHOR = /[ \t]*<!--\s*(?:Misti AI Floating Chat Button[^>]*?|WhatsApp Floating Chat Button)\s*-->\s*<a\b[^>]*class="(?:misti-chat-btn|wa-float-btn)"[\s\S]*?<\/a>[ \t]*\r?\n?|[ \t]*<a\b[^>]*class="(?:misti-chat-btn|wa-float-btn)"[\s\S]*?<\/a>[ \t]*\r?\n?/g;
const FLOAT_STYLE = /[ \t]*<style>\s*\/\* Misti AI Button Hover \*\/[\s\S]*?<\/style>[ \t]*\r?\n?/g;
const LENIS = /[ \t]*(?:<!--\s*Lenis Smooth Scrolling\s*-->\s*)?<script src="https:\/\/unpkg\.com\/lenis@[^"]+"><\/script>[ \t]*\r?\n?/g;

function clean(segment, stats) {
  let s = segment;
  s = s.replace(FLOAT_ANCHOR, () => { stats.anchors++; return ''; });
  s = s.replace(FLOAT_STYLE, () => { stats.styles++; return ''; });
  s = s.replace(LENIS, () => { stats.lenis++; return ''; });
  return s;
}

let scanned = 0, changed = 0;
const totals = { anchors: 0, styles: 0, lenis: 0 };
const examples = [];
for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith('.html')).sort()) {
  const file = path.join(DIR, f);
  const raw = fs.readFileSync(file, 'utf8');
  scanned++;
  const s = raw.indexOf(START);
  const e = raw.indexOf(END);
  if (s < 0 || e < 0 || e < s) continue;
  const footer = raw.slice(s, e + END.length);
  if (!/class="wa-float-btn"/.test(footer)) continue; // footer has no float of its own: nothing is a duplicate
  const stats = { anchors: 0, styles: 0, lenis: 0 };
  const before = clean(raw.slice(0, s), stats);
  const after = clean(raw.slice(e + END.length), stats);
  const out = before + footer + after;
  if (out === raw) continue;
  changed++;
  totals.anchors += stats.anchors; totals.styles += stats.styles; totals.lenis += stats.lenis;
  if (examples.length < 5) examples.push(`${f}: -${stats.anchors} anchors, -${stats.styles} style blocks, -${stats.lenis} lenis scripts`);
  if (APPLY) fs.writeFileSync(file, out);
}
console.log(`${scanned} pages scanned, ${changed} with leftover floats${APPLY ? ' cleaned' : ' (dry run)'}: ${totals.anchors} anchors, ${totals.styles} style blocks, ${totals.lenis} lenis scripts`);
examples.forEach((x) => console.log('  e.g. ' + x));
if (!APPLY && changed) console.log('Re-run with --apply to write.');
