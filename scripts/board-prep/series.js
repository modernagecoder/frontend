'use strict';
/**
 * scripts/board-prep/series.js
 *
 * One place that knows every Class 10 board-prep page (series.json). Used by
 * build.js (generated pages), retrofit-wave1.js (hand-written pages), the
 * wiring script and the two cluster gates, so the related-pages block, the
 * routes and the gates' slug lists cannot drift apart.
 *
 * The related-pages block lists every LIVE page of the page's own board in
 * its groups, then a short row of the other board's hub pages. A page is live
 * when src/pages/<slug>.html exists, so a half-built wave never links to a 404.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const SERIES = JSON.parse(fs.readFileSync(path.join(__dirname, 'series.json'), 'utf8'));
const PAGES = SERIES.pages;

const isLive = slug => fs.existsSync(path.join(ROOT, 'src', 'pages', slug + '.html'));
const bySlug = Object.fromEntries(PAGES.map(p => [p.slug, p]));

const BOARD_NAME = { cbse: 'CBSE Class 10 AI (417)', icse: 'ICSE Class 10 Computer Applications (Java)' };
// the other board's doors, shown as one short row under the groups
const HUBS = {
  cbse: ['cbse-class-10-ai-classes-online', 'cbse-class-10-ai-syllabus-explained', 'cbse-class-10-ai-important-questions', 'cbse-class-10-ai-sample-paper-and-mock-tests'],
  icse: ['icse-class-10-java-classes-online', 'icse-class-10-computer-applications-syllabus-explained', 'icse-class-10-java-programs-practice', 'icse-class-10-computer-applications-important-questions']
};

function groupsFor(board, exceptSlug, live = isLive) {
  return SERIES.groups[board].map(([key, name]) => ({
    key, name,
    pages: PAGES.filter(p => p.board === board && p.group === key && p.slug !== exceptSlug && live(p.slug))
  })).filter(g => g.pages.length);
}

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Inner HTML of <div class="bx-siblings">. Indented deeper than the closing
// "\n    </div>\n  </div>\n</section>" that retrofit-wave1.js anchors on.
function siblingsHtml(slug, live = isLive) {
  const me = bySlug[slug];
  const board = me ? me.board : (slug.startsWith('icse') ? 'icse' : 'cbse');
  const other = board === 'cbse' ? 'icse' : 'cbse';
  const cols = groupsFor(board, slug, live).map(g => `      <div class="bx-sibgroup">
        <h3>${esc(g.name)}</h3>
        <ul>
${g.pages.map(p => `          <li><a href="/${p.slug}">${esc(p.label)}</a></li>`).join('\n')}
        </ul>
      </div>`).join('\n');
  const otherLinks = HUBS[other].filter(s => live(s)).map(s => `<a href="/${s}">${esc(bySlug[s].label)}</a>`).join(' <span aria-hidden="true">&middot;</span> ');
  return `${cols}
      <p class="bx-sib-other"><b>${BOARD_NAME[other]}:</b> ${otherLinks}</p>`;
}

function siblingsMd(slug, live = isLive) {
  const me = bySlug[slug];
  const board = me ? me.board : 'cbse';
  return groupsFor(board, slug, live).map(g => `**${g.name}:** ` + g.pages.map(p => `[${p.label}](/${p.slug})`).join(', ') + '.').join('\n\n');
}

const slugAlternation = () => PAGES.map(p => p.slug.replace(/[-]/g, '\\-')).join('|');

module.exports = { SERIES, PAGES, bySlug, isLive, groupsFor, siblingsHtml, siblingsMd, slugAlternation, BOARD_NAME };
