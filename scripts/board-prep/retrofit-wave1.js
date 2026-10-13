#!/usr/bin/env node
/**
 * scripts/board-prep/retrofit-wave1.js
 *
 * One-off, idempotent retrofit of the ten hand-built wave-1 Class 10 pages
 * (2026-08-25) to the wave-2 chrome, without touching their prose:
 *   - board-prep.css version bumped to the wave-2 build (bx-btn--pd, bx-pd-card,
 *     bx-sticky, bx-qlist live there)
 *   - Priority demo: hero button, card under the lead form, phone sticky bar
 *     (owner rule: data-pd-book on every page)
 *   - areaServed: India plus only the countries where that board has schools
 *   - the sibling strip lists all twenty pages of the series
 *   - ICSE only (owner ruling 2026-10-13, option c): outside India the course is
 *     one to one, so the group card is India-only too and an intl-only note says so
 *
 * Usage: node scripts/board-prep/retrofit-wave1.js
 */
'use strict';

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const PAGES = path.join(ROOT, 'src', 'pages');
const BRAND = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts', 'brand-facts.json'), 'utf8'));
const CSS_VER = '20261013';

const WAVE1 = {
  'cbse-class-10-ai-classes-online': 'cbse',
  'cbse-class-10-ai-syllabus-explained': 'cbse',
  'python-for-cbse-class-10-ai': 'cbse',
  'cbse-class-10-ai-board-exam-preparation': 'cbse',
  'cbse-class-10-ai-project-and-practical-file': 'cbse',
  'icse-class-10-java-classes-online': 'icse',
  'icse-class-10-computer-applications-syllabus-explained': 'icse',
  'icse-class-10-java-programs-practice': 'icse',
  'icse-class-10-bluej-java-coaching': 'icse',
  'icse-class-10-computer-applications-board-exam-preparation': 'icse'
};

// Same lists as scripts/board-prep/build.js (AREA, SIBLINGS).
const AREA = {
  cbse: ['India', 'United Arab Emirates', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Oman', 'Nepal', 'Bahrain', 'Ethiopia', 'Malaysia', 'Singapore'],
  icse: ['India', 'United Arab Emirates', 'Singapore', 'Indonesia', 'Thailand']
};
const { SIBLINGS, offerBlock } = require('./build.js');

const HERO_FIXES = [
  // ICSE abroad is one to one (option c); Oman, Saudi Arabia, Qatar, Kuwait and Bahrain have no ICSE schools
  ['<p class="bx-tt-zones"><b>Gulf families:</b> Tuesday 4:00 PM and Wednesday 6:30 PM in the UAE and Oman &middot; Tuesday 3:00 PM and Wednesday 5:30 PM in Saudi Arabia, Qatar, Kuwait and Bahrain</p>',
   '<p class="bx-tt-zones"><b>In India:</b> the mini batch at these times &middot; <b>Outside India</b> (UAE, Singapore, Indonesia, Thailand): personalised one to one at your local time</p>'],
  // the 2026 CBSE dates were wrong: main exams 17 Feb to 11 Mar, second exam 15 to 21 May
  ['<b>2026 ran</b> 17 February to 9 March, then 15 May to 1 June.', '<b>2026 ran</b> 17 February to 11 March, then a second exam from 15 to 21 May.'],
  // CISCE prescribes at least twenty lab assignments and no separate project
  ['<b>Internal</b> 20-plus lab assignments and a project, 50 internal and 50 external', '<b>Internal</b> 20-plus lab assignments, 50 internal and 50 external'],
  ['<b>Conducted by the school</b> before the theory paper.', '<b>Conducted by the school</b> on dates it sets.']
];

function areaJson(board) {
  return '[' + AREA[board].map(n => `{ "@type": "Country", "name": "${n}" }`).join(', ') + ']';
}

function retrofit(slug, board) {
  const file = path.join(PAGES, slug + '.html');
  let h = fs.readFileSync(file, 'utf8');
  const before = h;

  h = h.replace(/\/css\/board-prep\.css\?v=\d+/, `/css/board-prep.css?v=${CSS_VER}`);

  h = h.split('"areaServed": { "@type": "Country", "name": "India" }').join(`"areaServed": ${areaJson(board)}`);

  // hero: priority demo button right after the first (free demo) button
  if (!h.includes('data-pd-book="bx-hero"')) {
    h = h.replace(/(<div class="bx-btn-row">\s*<a [^>]*class="bx-btn"[^>]*>[^<]*<\/a>)/,
      '$1\n          <a href="/book-demo" class="bx-btn bx-btn--pd" data-pd-book="bx-hero">Book a priority demo</a>');
  }

  // priority demo card under the lead form
  if (!h.includes('data-pd-book="bx-book"')) {
    h = h.replace(/(<div class="bx-form-panel">[\s\S]*?<\/form>)/,
      `$1
        <div class="bx-pd-card">
          <h3>Want it sooner? Book a priority demo</h3>
          <p>A full live class of ${BRAND.priorityDemo.length} at a slot you pick, with a written skill report and learning roadmap on WhatsApp afterwards. The fee is adjusted against your first month if you enrol.</p>
          <a href="/book-demo" class="bx-btn bx-btn--pd" data-pd-book="bx-book">Book a priority demo</a>
        </div>`);
  }

  // phone sticky bar
  if (!h.includes('class="bx-sticky"')) {
    h = h.replace(/<body class="bx-root ([^"]*)">/, (m, c) => `<body class="bx-root ${c.includes('bx-has-sticky') ? c : c + ' bx-has-sticky'}">`);
    h = h.replace(/(<\/footer>)/, `$1

<nav class="bx-sticky" aria-label="Quick actions">
  <a href="#start">Free class</a>
  <a href="/book-demo" class="bx-sticky-pd" data-pd-book="bx-sticky">Priority demo</a>
  <a href="tel:+919123366161">Call us</a>
</nav>`);
  }

  // sibling strip: all twenty pages
  const sibs = SIBLINGS.filter(s => s[0] !== slug)
    .map(([s, n]) => `      <a class="bx-sib" href="/${s}"><span class="bx-sib-n">${n}</span><span class="bx-sib-m">/${s}</span></a>`).join('\n');
  h = h.replace(/(<div class="bx-siblings">)[\s\S]*?(\n    <\/div>\n  <\/div>\n<\/section>)/, `$1\n${sibs}$2`);
  h = h.replace(/<h2>Nine more pages for Class 10 board students<\/h2>\s*<p class="bx-lede">[^<]*<\/p>/,
    '<h2>More pages for Class 10 board students</h2>\n      <p class="bx-lede">Ten pages on CBSE Artificial Intelligence 417 and ten on ICSE Computer Applications (Java), from the syllabus and the exam date to classes for families in the Gulf and abroad.</p>');

  // the course, both formats and the fee inside the hero card (owner, 2026-10-13)
  if (!h.includes('class="bx-offer"')) {
    h = h.replace(/(<aside class="bx-timetable"[\s\S]*?)(\n\s*<p class="bx-tt-zones">)/, (m, a, z) => `${a}\n        ${offerBlock(board)}${z}`);
  }

  // hero-card facts corrected 2026-10-13 (verified against CBSE and CISCE)
  for (const [from, to] of HERO_FIXES) h = h.split(from).join(to);

  if (board === 'icse') {
    // the mini batch stamp in the hero card is India-only too
    h = h.replace(/<span class="bx-stamp">(Mini batch)/g, '<span class="bx-stamp" data-india-only="true">$1');
    // the group card has no place abroad under option c
    h = h.replace(/<div class="bx-price">(\s*<p class="bx-price-name">[^<]*<\/p>\s*<p class="bx-price-amt"><span data-price="coding\.india\.group">)/,
      '<div class="bx-price" data-india-only="true">$1');
    if (!h.includes('bx-intl-note')) {
      h = h.replace(/(<section class="bx-section[^"]*" id="fees">[\s\S]*?<div class="bx-grid-3">[\s\S]*?\n    <\/div>)/,
        '$1\n    <p class="bx-mt-40 bx-intl-note" data-intl-only="true" hidden><b>Outside India:</b> the ICSE Computer Applications course runs as personalised one to one, two private classes a week at a time set in your own time zone. The mini batch is taught for families in India.</p>');
    }
  }

  if (h !== before) fs.writeFileSync(file, h, 'utf8');
  const checks = {
    pd: (h.match(/data-pd-book=/g) || []).length,
    area: h.includes('"name": "Singapore"'),
    sibs: (h.match(/class="bx-sib"/g) || []).length,
    sticky: h.includes('bx-has-sticky'),
    icseGroupHidden: board === 'icse' ? /data-india-only="true">\s*<p class="bx-price-name">[^<]*<\/p>\s*<p class="bx-price-amt"><span data-price="coding\.india\.group">/.test(h) : null,
    intlNote: board === 'icse' ? h.includes('bx-intl-note') : null
  };
  console.log(slug, JSON.stringify(checks));
}

for (const [slug, board] of Object.entries(WAVE1)) retrofit(slug, board);
