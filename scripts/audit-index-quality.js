#!/usr/bin/env node
/**
 * audit-index-quality.js
 *
 * Why this exists: Google reported ~400 URLs as "Crawled - currently not indexed".
 * Those pages are not broken (200, indexable, canonical, in sitemap). They are being
 * declined on judgement. This script measures the three things that judgement keys on,
 * so the fix queue is evidence-ranked instead of guessed:
 *
 *   1. MOLD    - how much of a page's text is shared with its sibling pages
 *                (near-duplicate detection over 5-word shingles).
 *   2. CLAIMS  - unverifiable or contradicting promises ("FAANG", "lifetime access",
 *                "guaranteed job", "industry-recognized"), which read as mass-produced.
 *   3. DEPTH   - substance a reader could not get from a brochure: code, concrete
 *                numbers with units, named tools, explanation words ("because", "why").
 *
 * Usage:  node scripts/audit-index-quality.js [--top 40] [--csv out.csv] [--group courses]
 */

const fs = require('fs');
const path = require('path');

const ROOTS = [
  { dir: 'src/pages', group: 'static', pattern: /\.html$/ },
  { dir: 'content/courses/generated', group: 'courses', pattern: /index\.html$/ },
  { dir: 'content/blog/generated', group: 'blog', pattern: /index\.html$/ },
];

const HYPE = [
  /\bFAANG\b/i, /lifetime access/i, /industry[- ]recognized/i, /guaranteed? (?:job|placement)/i,
  /100% (?:job|placement|success)/i, /transformation into/i, /world[- ]class/i,
  /cutting[- ]edge/i, /unlock your/i, /take your .{0,20} to the next level/i,
  /direct path to high[- ]paying/i, /become an? expert in/i, /master everything/i,
  /24\/7 (?:support|community)/i, /job referrals/i, /recognized by top tech companies/i,
];

// Depth signals: things a brochure does not contain.
const DEPTH = [
  /\bbecause\b/i, /\bwhich means\b/i, /\bthe reason\b/i, /\bin practice\b/i,
  /\bcommon mistake\b/i, /\bgets? this wrong\b/i, /\btrade[- ]?off/i, /\bunder the hood\b/i,
  /\bfor example\b/i, /\bstep by step\b/i, /\bwhat actually happens\b/i,
];

function walk(dir, pattern, out = []) {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, pattern, out);
    else if (pattern.test(e.name)) out.push(p);
  }
  return out;
}

function visibleText(file) {
  let h = fs.readFileSync(file, 'utf8');
  h = h.replace(/<script[\s\S]*?<\/script>/gi, ' ')
       .replace(/<style[\s\S]*?<\/style>/gi, ' ')
       .replace(/<!--[\s\S]*?-->/g, ' ')
       .replace(/<[^>]+>/g, '\n');
  return h.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#0?39;/g, "'")
          .replace(/&quot;/g, '"').replace(/&[a-z]+;/g, ' ')
          .split(/\n+/).map(s => s.replace(/\s+/g, ' ').trim()).filter(Boolean).join('\n');
}

function shingles(text, n = 5) {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + n <= words.length; i++) set.add(words.slice(i, i + n).join(' '));
  return set;
}

// Page families share a URL shape long before they share a folder. Grouping by the first
// few slug tokens puts the 131 "best-coding-class-in-*" pages in one bucket, which is the
// unit a near-duplicate problem actually lives in.
function clusterOf(file) {
  const slug = /generated/.test(file)
    ? path.basename(path.dirname(file))
    : path.basename(file, '.html');
  const t = slug.split('-');
  if (t.length <= 3) return slug;
  const m = slug.match(/^(.*?)-(?:in|for|near)-/);
  if (m && m[1].split('-').length >= 2) return m[1] + '-*';
  return t.slice(0, 3).join('-') + '-*';
}

function main() {
  const argv = process.argv.slice(2);
  const arg = (flag, def) => { const i = argv.indexOf(flag); return i === -1 ? def : argv[i + 1]; };
  const top = parseInt(arg('--top', '40'), 10);
  const csvOut = arg('--csv', null);
  const onlyGroup = arg('--group', null);

  const pages = [];
  for (const root of ROOTS) {
    if (onlyGroup && root.group !== onlyGroup) continue;
    for (const file of walk(root.dir, root.pattern)) {
      const text = visibleText(file);
      const words = text.split(/\s+/).filter(Boolean).length;
      if (words < 50) continue;
      pages.push({ file, group: root.group, text, words, sh: shingles(text) });
    }
  }

  // Document frequency of every shingle, computed GLOBALLY with an absolute threshold.
  // Per-group DF with a ratio threshold was wrong: the 131 city pages sit inside a
  // 600-page "static" bucket, so their shared boilerplate never reached a 30% ratio and
  // the largest near-duplicate cluster on the site scored ~0% mold. Any 5-word phrase
  // appearing on MOLD_DF or more pages is shared text, whatever folder it lives in.
  const MOLD_DF = 10;
  const df = new Map();
  for (const p of pages) for (const s of p.sh) df.set(s, (df.get(s) || 0) + 1);

  const byGroup = new Map();
  for (const p of pages) {
    if (!byGroup.has(p.group)) byGroup.set(p.group, []);
    byGroup.get(p.group).push(p);
  }

  const rows = [];
  for (const [group, list] of byGroup) {
    for (const p of list) {
      let mold = 0;
      for (const s of p.sh) if (df.get(s) >= MOLD_DF) mold++;
      const moldPct = p.sh.size ? Math.round((mold / p.sh.size) * 100) : 0;

      const hypeHits = HYPE.filter(re => re.test(p.text)).map(re => String(re).slice(1, -2));
      const depthHits = DEPTH.reduce((n, re) => n + (p.text.match(new RegExp(re.source, 'gi')) || []).length, 0);
      const codeish = (p.text.match(/[a-zA-Z_]+\([^)]*\)|\bgo func\b|=>|\{\s*\}/g) || []).length;
      const depthPer1k = Math.round((depthHits / Math.max(p.words, 1)) * 1000 * 10) / 10;

      // Risk: mold-heavy, hype-heavy, explanation-light pages are the ones Google declines.
      const risk = Math.round(moldPct * 0.6 + hypeHits.length * 6 - depthPer1k * 3 - Math.min(codeish, 40) * 0.2);

      rows.push({ group, cluster: clusterOf(p.file), file: p.file, words: p.words, moldPct,
                  hype: hypeHits.length, hypeList: hypeHits.join('; '), depthPer1k, codeish, risk });
    }
  }

  rows.sort((a, b) => b.risk - a.risk);

  console.log(`Pages audited: ${rows.length}`);
  for (const [group, list] of byGroup) {
    const g = rows.filter(r => r.group === group);
    const avg = k => Math.round(g.reduce((s, r) => s + r[k], 0) / g.length);
    console.log(`  ${group}: ${g.length} pages | avg mold ${avg('moldPct')}% | avg hype flags ${avg('hype')} | avg explanation/1k words ${(g.reduce((s,r)=>s+r.depthPer1k,0)/g.length).toFixed(1)}`);
  }
  // Worst page FAMILIES: one bad mould stamps out dozens of URLs at a time.
  const clusters = new Map();
  for (const r of rows) {
    if (!clusters.has(r.cluster)) clusters.set(r.cluster, []);
    clusters.get(r.cluster).push(r);
  }
  const big = [...clusters.entries()].filter(([, l]) => l.length >= 5)
    .map(([name, l]) => ({
      name, n: l.length,
      mold: Math.round(l.reduce((s, r) => s + r.moldPct, 0) / l.length),
      hype: (l.reduce((s, r) => s + r.hype, 0) / l.length).toFixed(1),
      words: Math.round(l.reduce((s, r) => s + r.words, 0) / l.length),
      risk: Math.round(l.reduce((s, r) => s + r.risk, 0) / l.length),
    }))
    .sort((a, b) => b.risk - a.risk);
  console.log(`\nPage families (5+ pages built from one mould), worst first:`);
  console.log('risk  pages  mold  hype  avg words  family');
  for (const c of big.slice(0, 15)) {
    console.log(String(c.risk).padStart(4) + '  ' + String(c.n).padStart(5) + '  ' +
      String(c.mold + '%').padStart(4) + '  ' + String(c.hype).padStart(4) + '  ' +
      String(c.words).padStart(9) + '  ' + c.name);
  }

  console.log(`\nHighest indexing risk (mold-heavy, hype-heavy, explanation-light):`);
  console.log('risk  mold  hype  expl/1k  words  page');
  for (const r of rows.slice(0, top)) {
    console.log(
      String(r.risk).padStart(4) + '  ' + String(r.moldPct + '%').padStart(4) + '  ' +
      String(r.hype).padStart(4) + '  ' + String(r.depthPer1k).padStart(7) + '  ' +
      String(r.words).padStart(5) + '  ' + r.file.replace(/\\/g, '/')
    );
  }

  if (csvOut) {
    const head = 'risk,group,cluster,mold_pct,hype_flags,explanation_per_1k,code_signals,words,file,hype_detail\n';
    const body = rows.map(r => [r.risk, r.group, r.cluster, r.moldPct, r.hype, r.depthPer1k, r.codeish, r.words,
      r.file.replace(/\\/g, '/'), '"' + r.hypeList.replace(/"/g, "'") + '"'].join(',')).join('\n');
    fs.writeFileSync(csvOut, head + body);
    console.log(`\nFull ranking written to ${csvOut}`);
  }
}

main();
