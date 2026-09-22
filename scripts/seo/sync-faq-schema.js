#!/usr/bin/env node
/**
 * Rebuild a page's FAQPage "mainEntity" from the FAQ that is visible on the page,
 * so the structured data says exactly what the reader sees (Google's FAQ rule,
 * and the rule this site's cluster verifier enforces character for character).
 *
 *   node scripts/seo/sync-faq-schema.js src/pages/best-coding-class-in-pune.html [...more files]
 *   node scripts/seo/sync-faq-schema.js --dry-run <files>
 *
 * Visible FAQ = <details class="faq-item"><summary>Q</summary><div class="faq-a">A</div></details>
 * Answer text is entity-decoded, tag-stripped and whitespace-normalised before it
 * goes into the JSON. Pages without a FAQPage block or without visible FAQs are skipped.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const DRY = process.argv.includes('--dry-run');
const files = process.argv.slice(2).filter((a) => !a.startsWith('--'));
if (!files.length) { console.error('usage: sync-faq-schema.js [--dry-run] <html files>'); process.exit(1); }

const norm = (x) => x.replace(/\s+/g, ' ').trim();
const dec = (s) => s.replace(/<[^>]+>/g, '').replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&ndash;/g, '–').replace(/&mdash;/g, '—').replace(/&middot;/g, '·').replace(/&nbsp;/g, ' ').replace(/&#8377;/g, '₹').replace(/&amp;/g, '&');

files.forEach((rel) => {
  const file = path.resolve(rel);
  let html = fs.readFileSync(file, 'utf8');
  // four FAQ markups in use on the site: <details><summary>Q</summary><div class="faq-a">A</div> (class="age-faq-body" on the age/grade family),
  // <details><summary>Q</summary><p>A</p>, and <div class="faq-item"><div class="faq-question"><span>Q</span>…<div class="faq-answer"><p>A</p>
  const vis = [];
  [...html.matchAll(/<details[^>]*>\s*<summary>([\s\S]*?)<\/summary>\s*(?:<div class="(?:faq-a|age-faq-body)">([\s\S]*?)<\/div>|<div class="a">\s*<p>([\s\S]*?)<\/p>|<p>([\s\S]*?)<\/p>)/g)].forEach((m) => vis.push([norm(dec(m[1])), norm(dec(m[2] || m[3] || m[4]))]));
  // the ag- page system: <div class="ag-faq-item"><h3>Q</h3><p>A</p></div>
  [...html.matchAll(/<div class="ag-faq-item">\s*<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g)].forEach((m) => vis.push([norm(dec(m[1])), norm(dec(m[2]))]));
  [...html.matchAll(/<div class="faq-item">\s*<div class="faq-question">\s*<span>([\s\S]*?)<\/span>[\s\S]*?<div class="faq-answer">\s*<p>([\s\S]*?)<\/p>/g)].forEach((m) => vis.push([norm(dec(m[1])), norm(dec(m[2]))]));
  const start = html.indexOf('"mainEntity": [');
  if (!vis.length || start === -1) { console.log('skip:', rel, vis.length ? 'no FAQPage block' : 'no visible FAQ'); return; }
  // find the matching close bracket of the mainEntity array
  let i = start + '"mainEntity": ['.length, depth = 1, inStr = false, escNext = false;
  for (; i < html.length && depth; i++) {
    const ch = html[i];
    if (inStr) { if (escNext) escNext = false; else if (ch === '\\') escNext = true; else if (ch === '"') inStr = false; continue; }
    if (ch === '"') inStr = true; else if (ch === '[') depth++; else if (ch === ']') depth--;
  }
  const end = i; // index after the closing ]
  const body = '\n' + vis.map(([q, a]) => '            { "@type": "Question", "name": ' + JSON.stringify(q) + ', "acceptedAnswer": { "@type": "Answer", "text": ' + JSON.stringify(a) + ' } }').join(',\n') + '\n          ]';
  const next = html.slice(0, start + '"mainEntity": ['.length) + body + html.slice(end);
  // sanity: the block still parses
  const blocks = [...next.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  blocks.forEach((b, k) => { try { JSON.parse(b); } catch (e) { throw new Error(rel + ': ld+json block ' + k + ' invalid after sync: ' + e.message); } });
  if (next === html) { console.log('unchanged:', rel); return; }
  if (!DRY) fs.writeFileSync(file, next);
  console.log((DRY ? 'would sync ' : 'synced ') + rel + ': ' + vis.length + ' questions');
});
