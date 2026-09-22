#!/usr/bin/env node
/**
 * Keyword Ledger 2026-27, action 11 (the fix half): put the entry-route truth and the
 * published 2026-27 dates on /math-olympiad-amc-tutoring, which ranks and earns but says
 * nothing about how a family outside the US and Canada can actually enter, and nothing
 * about the AIME format change for 2027.
 *
 * Facts from maa.org (AMC hub, amcreg, amc-international, invitational competitions),
 * read via web.archive.org snapshots of 2026-09-05 to 2026-09-21 because maa.org sits
 * behind a browser challenge; recorded in the contest sheet maa-amc-aime-usamo.md.
 * Inserts one mp-system section before the page's second section; stamped, so a re-run skips it.
 *   node scripts/seo/fix-amc-page-2027.js [--dry-run]
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const DRY = process.argv.includes('--dry-run');
const STAMP = 'data-amc-entry="2026-09-23"';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const file = path.join(ROOT, 'src', 'pages', 'math-olympiad-amc-tutoring.html');
let html = fs.readFileSync(file, 'utf8');
if (html.includes(STAMP)) { console.log('skip: already stamped'); process.exit(0); }

const MAA = 'maa.org, read via archived copies of 5 to 21 Sep 2026';
const rows = [
  ['AMC 10 A and AMC 12 A', 'Thursday 5 November 2026', MAA],
  ['AMC 10 B and AMC 12 B', 'Friday 13 November 2026', MAA],
  ['AMC 8', '21 to 27 January 2027, the school picks a day in the window', MAA],
  ['AIME (invitation only)', '5 or 6 February 2027; new for 2027: 15 questions in two parts of 90 minutes each, integer answers from 0 to 999, taken at a Pearson testing centre, $85 plus tax paid by the family, and only students aged 13 and over are eligible', MAA],
  ['USAMO and USAJMO (invitation only)', '20 to 21 March 2027; qualification "will be primarily based on AIME scores"', MAA],
  ['Who qualifies for AIME', 'Set scores rather than percentages: 100 or above on AMC 10, 85 or above on AMC 12. AMC 8 does not lead to AIME', MAA],
  ['Age and grade limits', 'AMC 8: grade 8 and below, under 15.5 on the day. AMC 10: grade 10 and below, under 17.5. AMC 12: grade 12 and below, under 19.5', MAA],
  ['Entry in the United States and Canada', 'Through a school, university, math circle or learning centre registered as a competition manager. "Students and parents do not register directly with the MAA." A family without a participating school is told to check local colleges, math circles or learning centres', MAA],
  ['Entry everywhere else', 'The MAA states the competitions "will only be offered to schools with USA, Canada, APO/FPO/DPO mailing addresses, and schools registered with one of our AMC international partners." Families in India, the UAE and the Gulf, the UK and Europe, Singapore and South-East Asia, and Australia and New Zealand enter through the International Group Leader the MAA names for their region on its AMC International page, never through the MAA directly and never through us', MAA],
  ['Fees', 'Paid by the school or competition manager, not the family, for AMC 8, 10 and 12 in the US and Canada: $55 early bird, $75 regular, $115 late per competition, plus per-student bundles. AIME: $85 plus tax, paid by the family to Pearson. International group leaders set their own fees, which the MAA does not control', MAA],
];
const block = '<section class="mp-section" id="entry-2027" ' + STAMP + '>\n<div class="mp-wrap">\n<span class="mp-eyebrow">How entry works, and the 2026-27 dates</span>\n<h2>The part of the AMC nobody tells international families</h2>\n<p class="mp-lede">We coach the mathematics. We cannot enter your child for the competition, and neither can anyone else outside the MAA\'s own route. Here is that route, and every published 2026-27 date, from the MAA\'s pages as read in September 2026.</p>\n<div class="mp-table-scroll mp-mt">\n<table class="mp-compare">\n<thead><tr><th>What</th><th class="us">When or how</th><th>Where we read it</th></tr></thead>\n<tbody>' + rows.map((r) => '<tr><th>' + esc(r[0]) + '</th><td class="us">' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>').join('') + '</tbody>\n</table>\n</div>\n<p class="mp-lede" style="font-size:.9rem;opacity:.8;margin-top:14px">A naming trap: the AMC on this page is the MAA\'s American Mathematics Competitions. Australia\'s AMC is the Australian Mathematics Competition, a different contest from a different organiser with its own page on this site. Never mix their dates or rules.</p>\n</div>\n</section>\n';
if (/—/.test(block)) throw new Error('em-dash in block');
const secs = [...html.matchAll(/<section class="mp-section[^"]*"[^>]*>/g)];
if (secs.length < 2) throw new Error('fewer than two mp sections');
html = html.slice(0, secs[1].index) + block + html.slice(secs[1].index);
if (!DRY) fs.writeFileSync(file, html);
// sitemap lastmod
if (!DRY) { const sm = path.join(ROOT, 'sitemap.xml'); let s = fs.readFileSync(sm, 'utf8'); s = s.replace(/(<loc>https:\/\/learn\.modernagecoders\.com\/math-olympiad-amc-tutoring<\/loc>\s*<lastmod>)[^<]*(<\/lastmod>)/, '$12026-09-23$2'); fs.writeFileSync(sm, s); }
console.log((DRY ? 'would write' : 'wrote') + ' entry-2027 section on math-olympiad-amc-tutoring (' + rows.length + ' rows)');
