#!/usr/bin/env node
'use strict';
/**
 * Shared 7-word shingles between two cg- pages, attributed to sentences.
 *
 *   node scripts/nl/shingles.js coding-classes-in-the-hague coding-classes-in-amsterdam
 *
 * Reimplements the uniqueness gate's visible-text extraction (strip head,
 * scripts, styles, nav, footer, then every element whose class carries a
 * designed-to-repeat suffix) so the list here is the list the gate scores.
 * Prints each shared shingle once, grouped under the sentence it came from in
 * page A, ranked by how many shared shingles that sentence carries. Rewrite
 * those sentences; do not reword them (feedback_cluster_uniqueness_write_fresh).
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const [a, b] = process.argv.slice(2);
if (!a || !b) { console.error('usage: node scripts/nl/shingles.js <slugA> <slugB>'); process.exit(2); }

const SHARED_SUFFIXES = ['spec', 'price', 'review', 'proj', 'trust', 'form-panel', 'markets', 'btn-row', 'hero-note', 'crumbs', 'eyebrow', 'course-code', 'capsule-q', 'band-head', 'chip', 'slot-time', 'timetable', 'qlabel', 'siblings', 'stamp', 'pick-code'];
const CG_EXTRA = ['course-card', 'pick', 'picks-more', 'boiler', 'contact-card', 'contact-row', 'contact-bar', 'contact-bar-in', 'contact-grid', 'sticky', 'form-layout', 'price-grid', 'price-label', 'hero-actions', 'breadcrumb', 'ladder', 'verified', 'callout'];
function sharedFor(prefix) { return SHARED_SUFFIXES.concat(prefix === 'cg' ? CG_EXTRA : []).map(s => prefix + '-' + s); }

function stripByClass(html, cls) {
  // remove elements whose class attribute contains cls (nesting-aware for the common single-level case)
  const re = new RegExp('<([a-z0-9]+)([^>]*\\bclass="[^"]*\\b' + cls + '\\b[^"]*"[^>]*)>', 'gi');
  let out = html, m;
  while ((m = re.exec(out))) {
    const tag = m[1];
    const start = m.index;
    let depth = 1, i = re.lastIndex;
    const open = new RegExp('<' + tag + '\\b', 'gi'), close = new RegExp('</' + tag + '>', 'gi');
    while (depth > 0) {
      open.lastIndex = i; close.lastIndex = i;
      const o = open.exec(out), c = close.exec(out);
      if (!c) { i = out.length; break; }
      if (o && o.index < c.index) { depth++; i = o.index + 1; } else { depth--; i = c.index + c[0].length; }
    }
    out = out.slice(0, start) + ' ' + out.slice(i);
    re.lastIndex = start;
  }
  return out;
}

function visibleText(slug) {
  let h = fs.readFileSync(path.join(ROOT, 'src', 'pages', slug + '.html'), 'utf8');
  const prefix = (h.match(/<body class="(cg|ag)-root/) || [])[1] || 'cg';
  const SHARED = sharedFor(prefix);
  h = h.replace(/<head[\s\S]*?<\/head>/i, ' ').replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ').replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    .replace(/<!-- BEGIN_LINK_MESH -->[\s\S]*?<!-- END_LINK_MESH -->/g, ' ');
  for (const c of SHARED) h = stripByClass(h, c);
  return h.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;|&#\d+;/gi, ' ').replace(/\s+/g, ' ').trim();
}

const norm = s => s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
function shingles(text) {
  const w = norm(text).split(' ');
  const set = new Map();
  for (let i = 0; i + 7 <= w.length; i++) set.set(w.slice(i, i + 7).join(' '), i);
  return set;
}

const ta = visibleText(a), tb = visibleText(b);
const sa = shingles(ta), sb = shingles(tb);
const shared = [...sa.keys()].filter(k => sb.has(k));
const pct = (n, d) => (100 * n / d).toFixed(1) + '%';
console.log(`${a}: ${sa.size} shingles; ${b}: ${sb.size}; shared ${shared.length} (${pct(shared.length, sa.size)} of A, ${pct(shared.length, sb.size)} of B)`);

// attribute to sentences of A
const sentences = ta.split(/(?<=[.!?])\s+/);
const hits = new Map();
for (const sh of shared) {
  const first = sh.split(' ').slice(0, 4).join(' ');
  const sent = sentences.find(s => norm(s).includes(first)) || '(unattributed) ' + sh;
  if (!hits.has(sent)) hits.set(sent, []);
  hits.get(sent).push(sh);
}
const ranked = [...hits.entries()].sort((x, y) => y[1].length - x[1].length);
for (const [sent, list] of ranked) {
  console.log(`\n[${list.length}] ${sent.slice(0, 220)}`);
  for (const sh of list.slice(0, 3)) console.log('     ' + sh);
}
