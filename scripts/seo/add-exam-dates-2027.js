#!/usr/bin/env node
/**
 * Keyword Ledger 2026-27, action 18: put the dated 2027 exam facts on the exam pages
 * that already earn (exam pages are the site's best template at 24.4 clicks per page).
 * Every date below is quoted from the organiser's own page as read on the date given,
 * recorded in Desktop/SkyCoders/keyword-research-2026-09/data/contests/sheets/.
 *
 * Inserts one "Key dates" section before each page's second section, on the page's own
 * system (ag- or mp-), and stamps data-exam-dates="2026-09-23" so a re-run skips it.
 *   node scripts/seo/add-exam-dates-2027.js [--dry-run]
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const DRY = process.argv.includes('--dry-run');
const STAMP = 'data-exam-dates="2026-09-23"';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const JCQ = 'JCQ, Key dates in the examination cycle, June 2027 series (read 22 Sep 2026)';
const CB = 'College Board, 2027 AP Exam Dates (read 22 Sep 2026)';
const IBO = 'ibo.org curriculum pages (read 22 Sep 2026)';
const AQA = 'aqa.org.uk, GCSE Computer Science 8525 (read 22 Sep 2026)';

const PAGES = [
  { slug: 'uk-gcse-computer-science-tutoring', sys: 'ag', title: 'GCSE Computer Science in 2027: the first sitting of the revised specification',
    lede: 'Summer 2027 is the first time the revised GCSE Computer Science content is examined. AQA says so on its own 8525 page, and the change comes from a national Department for Education review, so the other boards follow the same timeline. We teach to the revised content from the first class, not the old textbook.',
    rows: [['Revised GCSE Computer Science content (AQA 8525 "Updated")', 'First teaching September 2025, first exams Summer 2027', AQA], ['Outgoing 8525 specification', 'Last exams 2026', AQA], ['June 2027 series: first exam on the common timetable', '10 May 2027', JCQ], ['June 2027 series: final GCSE exam', '18 June 2027 (contingency day 23 June 2027)', JCQ], ['Entries deadline for the June 2027 series', '21 February 2027 (schools enter students; ask yours)', JCQ], ['Paper-by-paper dates for Computer Science', 'Set in each board\'s own timetable; the JCQ commentary confirms no session moves for Computer Science in 2027', JCQ]],
    note: 'OCR J277 and Edexcel 1CP2 were not individually re-read when this table was written; the revised content applies GCSE-wide under the same review. Results days for 2027 are not published in the JCQ key-dates document, so none is stated here.' },
  { slug: 'ap-computer-science-a-online-classes', sys: 'ag', title: 'AP Computer Science A, May 2027: the dates that matter',
    lede: 'The College Board has published the 2027 schedule. AP Computer Science A sits in the second week, in the afternoon session, and entry runs through your school\'s AP coordinator on school-set deadlines in the autumn.',
    rows: [['AP Computer Science A exam', 'Wednesday, 12 May 2027, Session 2 (afternoon)', CB], ['2027 AP exam window', 'Two weeks in May: 3 to 7 May and 10 to 14 May 2027', CB], ['How to enter', 'Through your school\'s AP coordinator; deadlines are set by the school in the autumn term', CB], ['Our teaching calendar', 'Paced backwards from 12 May 2027, with the last four weeks on timed free-response practice', 'This page']],
    note: 'Dates are the College Board\'s; we prepare students for the exam and cannot enter them for it.' },
  { slug: 'ap-computer-science-principles-online-coaching', sys: 'ag', title: 'AP Computer Science Principles, May 2027: two dates, not one',
    lede: 'AP Computer Science Principles has a portfolio deadline before the exam, and the portfolio deadline is the one families miss. Both dates are on the College Board\'s published 2027 schedule.',
    rows: [['Create performance task: digital portfolio submission deadline', '30 April 2027, 11:59 pm Eastern Time', CB], ['AP Computer Science Principles exam', 'Friday, 14 May 2027, Session 2 (afternoon)', CB], ['2027 AP exam window', 'Two weeks in May: 3 to 7 May and 10 to 14 May 2027', CB], ['How to enter', 'Through your school\'s AP coordinator; deadlines are set by the school in the autumn term', CB], ['Our teaching calendar', 'The Create task is finished and rehearsed in writing by the end of March 2027; April is for the written responses under time', 'This page']],
    note: 'Dates are the College Board\'s; we prepare students for the exam and cannot enter them for it.' },
  { slug: 'ib-computer-science-online-tuition', sys: 'ag', title: 'IB Computer Science, May 2027: the first exam of the new course',
    lede: 'The IB launched a new Diploma Programme Computer Science course for first teaching in August 2025, and May 2027 is its first assessment. The syllabus now names machine learning as a topic, and the subject has moved into group 4, which changes how it fits a student\'s diploma.',
    rows: [['New DP Computer Science course', 'First teaching August 2025; first assessment May 2027', IBO], ['Outgoing DP Computer Science course', 'Last assessment 2026', IBO], ['What the new course contains', 'Theme A, Concepts of computer science: computer fundamentals, networks, databases, machine learning. Theme B, Computational thinking and problem-solving: computational thinking, programming, object-oriented programming, and further topics', IBO], ['Where it sits in the diploma', 'Group 4 (sciences), so it can be a student\'s group 4 subject rather than an extra taken alongside mathematics', IBO], ['Our teaching calendar', 'DP2 students are paced backwards from the May 2027 session; DP1 students starting now are taught the new course from the first module', 'This page']],
    note: 'The IB\'s May 2027 session dates by paper were not re-read when this table was written; ask your IB coordinator for the school\'s schedule.' },
  { slug: 'ap-calculus-tutoring-online', sys: 'mp', title: 'AP Calculus AB and BC, May 2027: the date and the window',
    lede: 'Both calculus exams sit on the same morning in the second week of the 2027 AP window. We pace the course backwards from that Monday.',
    rows: [['AP Calculus AB exam', 'Monday, 10 May 2027, Session 1 (morning)', CB], ['AP Calculus BC exam', 'Monday, 10 May 2027, Session 1 (morning)', CB], ['2027 AP exam window', 'Two weeks in May: 3 to 7 May and 10 to 14 May 2027', CB], ['How to enter', 'Through your school\'s AP coordinator; deadlines are set by the school in the autumn term', CB]],
    note: 'Dates are the College Board\'s; we prepare students for the exam and cannot enter them for it.' },
  { slug: 'ib-maths-tuition-online', sys: 'mp', title: 'IB Mathematics AA and AI: which curriculum your child is on, and until when',
    lede: 'The current Analysis and Approaches and Applications and Interpretation courses run to a final assessment in November 2028. A new mathematics curriculum is taught from 2027 for first assessment in 2029, so a student starting DP1 in August or September 2027 is on the new one.',
    rows: [['Current AA and AI curriculum', 'Final assessment November 2028', IBO], ['New AA and AI curriculum', 'Taught from 2027; first assessment 2029', IBO], ['Who is affected', 'DP1 cohorts beginning in 2027 study the new content; students already in DP1 or DP2 finish on the current one', IBO], ['Our teaching', 'Both AA and AI, SL and HL, on the curriculum your child is actually sitting; ask us which one on the call', 'This page']],
    note: 'What changes in the new mathematics curriculum is in the IB\'s subject briefs, which were not summarised here; we will update this table when we have read them in full.' },
  { slug: 'gcse-maths-tuition-online', sys: 'mp', title: 'GCSE Maths, June 2027 series: the dates that matter',
    lede: 'GCSE Maths sits on the shared June 2027 timetable. No change to the maths specification was found for 2026-27, so the course is the one your child\'s school is already teaching.',
    rows: [['First exam on the common timetable', '10 May 2027', JCQ], ['Final GCSE exam on the common timetable', '18 June 2027 (contingency day 23 June 2027)', JCQ], ['Entries deadline for the June 2027 series', '21 February 2027 (schools enter students; ask yours)', JCQ], ['Paper dates for Maths (Foundation and Higher, Papers 1 to 3)', 'Set in each board\'s own timetable; no session moves for Maths in 2027 per the JCQ commentary', JCQ], ['Specification', 'Unchanged for 2026-27 as far as the boards\' pages showed', JCQ]],
    note: 'Results days for 2027 are not published in the JCQ key-dates document, so none is stated here.' },
];

function agBlock(p) {
  return '<section class="ag-section" id="dates-2027" ' + STAMP + '>\n<div class="ag-wrap">\n<div class="ag-section-head">\n<p class="ag-eyebrow">Key dates, 2027</p>\n<h2>' + esc(p.title) + '</h2>\n<p class="ag-lede">' + esc(p.lede) + '</p>\n</div>\n<div class="ag-table-wrap">\n<table class="ag-table">\n<thead><tr><th scope="col">What</th><th scope="col">When</th><th scope="col">Where we read it</th></tr></thead>\n<tbody>' + p.rows.map((r) => '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>').join('') + '</tbody>\n</table>\n</div>\n<p class="ag-source-note">' + esc(p.note) + '</p>\n</div>\n</section>\n';
}
function mpBlock(p) {
  return '<section class="mp-section" id="dates-2027" ' + STAMP + '>\n<div class="mp-wrap">\n<span class="mp-eyebrow">Key dates, 2027</span>\n<h2>' + esc(p.title) + '</h2>\n<p class="mp-lede">' + esc(p.lede) + '</p>\n<div class="mp-table-scroll mp-mt">\n<table class="mp-compare">\n<thead><tr><th>What</th><th class="us">When</th><th>Where we read it</th></tr></thead>\n<tbody>' + p.rows.map((r) => '<tr><th>' + esc(r[0]) + '</th><td class="us">' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>').join('') + '</tbody>\n</table>\n</div>\n<p class="mp-lede" style="font-size:.9rem;opacity:.8;margin-top:14px">' + esc(p.note) + '</p>\n</div>\n</section>\n';
}

let n = 0;
PAGES.forEach((p) => {
  const file = path.join(ROOT, 'src', 'pages', p.slug + '.html');
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes(STAMP)) { console.log('skip', p.slug); return; }
  const secs = [...html.matchAll(/<section class="(ag|mp)-section[^"]*"[^>]*>/g)];
  if (secs.length < 2) throw new Error(p.slug + ': fewer than two sections');
  const at = secs[1].index;
  const block = p.sys === 'ag' ? agBlock(p) : mpBlock(p);
  html = html.slice(0, at) + block + html.slice(at);
  if (p.slug === 'ib-maths-tuition-online') html = html.replace('<h2>Premium teaching. One honest price.</h2>', '<h2>Serious teaching. One honest price.</h2>');
  if (/—/.test(block)) throw new Error('em-dash in block for ' + p.slug);
  if (!DRY) fs.writeFileSync(file, html);
  n++; console.log((DRY ? 'would write ' : 'wrote ') + p.slug + ' (' + p.rows.length + ' rows, inserted at section 2)');
});
// sitemap lastmod for the touched pages
if (!DRY && n) {
  const sm = path.join(ROOT, 'sitemap.xml'); let s = fs.readFileSync(sm, 'utf8'); let m = 0;
  PAGES.forEach((p) => { const re = new RegExp('(<loc>https://learn\\.modernagecoders\\.com/' + p.slug + '</loc>\\s*<lastmod>)[^<]*(</lastmod>)'); if (re.test(s)) { s = s.replace(re, '$12026-09-23$2'); m++; } });
  fs.writeFileSync(sm, s); console.log('sitemap lastmod updated for', m, 'pages');
}
console.log(n + ' pages ' + (DRY ? 'would change' : 'changed'));
