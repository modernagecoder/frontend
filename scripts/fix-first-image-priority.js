#!/usr/bin/env node
/**
 * fix-first-image-priority.js
 * ------------------------------------------------------------------
 * The first image inside <main> is the page's likely Largest Contentful
 * Paint element, and 442 static pages had it marked loading="lazy", which
 * tells the browser to wait before fetching the one image it paints
 * first. This sweep removes lazy from that image and marks it
 * fetchpriority="high", but only when it sits near the top of <main>
 * (within 6,000 characters), so an image far down the page stays lazy.
 *
 * Skips logos and aria-hidden images. Idempotent. Dry by default.
 *
 *   node scripts/fix-first-image-priority.js          # report only
 *   node scripts/fix-first-image-priority.js --apply  # write
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIR = path.join(ROOT, 'src/pages');
const APPLY = process.argv.includes('--apply');
const NEAR_TOP = 6000;

let scanned = 0, changed = 0, alreadyEager = 0, tooFar = 0, noImage = 0;
const examples = [];

for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith('.html')).sort()) {
  const file = path.join(DIR, f);
  const raw = fs.readFileSync(file, 'utf8');
  scanned++;
  const mi = raw.indexOf('<main');
  if (mi < 0) { noImage++; continue; }
  const re = /<img\b[^>]*>/g;
  re.lastIndex = mi;
  let m, target = null;
  while ((m = re.exec(raw))) {
    const tag = m[0];
    if (/logo/i.test(tag) || /aria-hidden=["']true["']/.test(tag)) continue;
    target = { tag, index: m.index };
    break;
  }
  if (!target) { noImage++; continue; }
  if (target.index - mi > NEAR_TOP) { tooFar++; continue; }
  if (!/loading=["']lazy["']/.test(target.tag)) { alreadyEager++; continue; }
  let tag = target.tag.replace(/\s*loading=["']lazy["']/, '');
  if (!/fetchpriority=/.test(tag)) tag = tag.replace(/<img\b/, '<img fetchpriority="high"');
  if (!/decoding=/.test(tag)) tag = tag.replace(/<img\b/, '<img decoding="async"');
  const out = raw.slice(0, target.index) + tag + raw.slice(target.index + target.tag.length);
  changed++;
  if (examples.length < 5) examples.push(`${f}: ${(target.tag.match(/src=["']([^"']+)/) || [])[1]}`);
  if (APPLY) fs.writeFileSync(file, out);
}

console.log(`${scanned} pages scanned: ${changed} first images ${APPLY ? 'made eager' : 'would be made eager'}, ${alreadyEager} already eager, ${tooFar} first image too far down (kept lazy), ${noImage} no image in <main>`);
examples.forEach((e) => console.log('  e.g. ' + e));
if (!APPLY && changed) console.log('Dry run. Re-run with --apply to write.');
