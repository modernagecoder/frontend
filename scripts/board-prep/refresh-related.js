#!/usr/bin/env node
'use strict';
/**
 * scripts/board-prep/refresh-related.js
 *
 * Rewrites the grouped related-pages block on every LIVE hand-written board
 * page (waves 1, the ten pages build.js does not generate), plus the matching
 * section in its .md twin, and bumps the board-prep.css version. Generated pages
 * get the same block by re-running build.js. Run after every new batch so older
 * pages link to the newer ones. Idempotent.
 *
 * Usage: node scripts/board-prep/refresh-related.js
 */
const fs = require('fs');
const path = require('path');
const { PAGES, isLive, siblingsHtml, siblingsMd } = require('./series.js');

const ROOT = path.resolve(__dirname, '..', '..');
const CSS_VER = '20261106';
const generated = new Set(fs.readdirSync(path.join(ROOT, 'content', 'board-prep')).filter(f => f.endsWith('.js')).map(f => f.replace(/\.js$/, '')));

let n = 0;
for (const p of PAGES) {
  if (generated.has(p.slug) || !isLive(p.slug)) continue;
  const file = path.join(ROOT, 'src', 'pages', p.slug + '.html');
  let h = fs.readFileSync(file, 'utf8');
  const before = h;
  h = h.replace(/(<div class="bx-siblings">)[\s\S]*?(\n    <\/div>\n  <\/div>\n<\/section>)/, `$1\n${siblingsHtml(p.slug)}$2`);
  h = h.replace(/(<p class="bx-qlabel">The rest of the Class 10 series<\/p>\s*<h2>)[^<]*(<\/h2>\s*<p class="bx-lede">)[^<]*(<\/p>)/,
    `$1More pages for Class 10 board students$2${p.board === 'cbse'
      ? 'Every page in the CBSE Class 10 AI (417) series, grouped by what you need: classes, each unit, question practice, notes and revision, and the exam itself.'
      : 'Every page in the ICSE Class 10 Computer Applications series, grouped by what you need: classes, each chapter, Section B programs, question practice, notes and revision, and the exam itself.'}$3`);
  h = h.replace(/board-prep\.css\?v=\d+/, `board-prep.css?v=${CSS_VER}`);
  if (h !== before) { fs.writeFileSync(file, h); n++; }

  const md = path.join(ROOT, 'src', 'pages', p.slug + '.md');
  if (fs.existsSync(md)) {
    let m = fs.readFileSync(md, 'utf8');
    const block = `## More pages in this series\n\n${siblingsMd(p.slug)}\n`;
    if (/## More pages in this series\n[\s\S]*?(?=\n## |\n---\n|$)/.test(m)) m = m.replace(/## More pages in this series\n[\s\S]*?(?=\n## |\n---\n|$)/, block);
    else if (/^Related pages: .*$/m.test(m)) m = m.replace(/^Related pages: .*$/m, block.trim());
    else m = m.replace(/\n---\n\n\*Canonical:/, `\n${block}\n---\n\n*Canonical:`);
    fs.writeFileSync(md, m);
  }
}
console.log('refreshed', n, 'hand-written pages');
