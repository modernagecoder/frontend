#!/usr/bin/env node
/**
 * dedupe-cluster-prose.js
 *
 * The build agents wrote each market page from the Oman template and, as
 * expected, carried some of its sentences across. check-cluster-uniqueness.js
 * found them. This rewrites those specific sentences with market-specific
 * variants.
 *
 * Two things make this safe rather than a blunt find-and-replace:
 *
 *  1. Matching is whitespace-tolerant. The source sentences wrap across lines
 *     in the HTML, so a literal string match silently finds nothing. We build a
 *     regex from the words and let \s+ absorb the line breaks.
 *
 *  2. Replacement is global on purpose. Most of these sentences appear TWICE in
 *     a page: once in visible prose and once inside the FAQPage schema. Google
 *     penalises schema that does not match visible text, so replacing every
 *     occurrence is what keeps them in sync. Replacing only the first would
 *     silently break the schema match.
 *
 * Every edit is verified: the script reports any target it could not find,
 * rather than reporting success for a no-op.
 *
 * Usage: node scripts/dedupe-cluster-prose.js [--dry]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES = path.join(ROOT, 'src/pages');
const DRY = process.argv.includes('--dry');

// Edit table lives in JSON so it can be regenerated and reviewed separately.
// Keys are short market names; the full slug is derived below.
const editsArg = process.argv.find(a => a.startsWith('--edits='));
const EDITS_FILE = editsArg ? editsArg.slice(8) : path.join(__dirname, 'cluster-dedupe-edits.json');
const RAW = JSON.parse(fs.readFileSync(EDITS_FILE, 'utf8'));
const EDITS = {};
for (const [k, v] of Object.entries(RAW)) {
  EDITS[k === 'hub' ? 'learn-to-build-ai' : 'ai-and-machine-learning-classes-in-' + k] = v;
}

const _UNUSED_EDITS = {
  'ai-and-machine-learning-classes-in-muscat': [
    ['Students learn Python and the mathematics under machine learning, then train and evaluate their own models rather than only prompting AI tools.',
     'Students work in Python, take on the statistics and linear algebra that machine learning actually runs on, and finish able to train a model and state how accurate it is.'],
    ['Every card opens the full week by week syllabus.',
     'Each card below opens a full schedule, term by term, with the projects attached to it.'],
    ['Student work Projects our students have shipped, live on the public web None of these is a mockup',
     'Student work Work our students have put online and left there None of it is a mockup'],
    ['Between sessions there is a task rather than a worksheet, something to build, break and bring back.',
     'The week between sessions carries a build, not a worksheet. Something to make, break, and bring back with questions.']
  ],
  'ai-and-machine-learning-classes-in-kuwait': [
    ['The catalogue Twelve live courses, sorted by what a learner can already do A nine year old and a working engineer do not belong in the same syllabus at different speeds.',
     'The catalogue Twelve live courses, grouped by what a learner can already do Skill, not birthday, decides where someone starts. A child who already writes Python does not repeat the beginning.'],
    ['Student work Projects our students have shipped, live on the public web None of these is a mockup',
     'Student work Software written by students, still running in public None of it is a mockup']
  ],
  'ai-and-machine-learning-classes-in-kuwait-city': [
    ['Students learn Python and the mathematics under machine learning, then train and evaluate their own models rather than only prompting AI tools.',
     'Students write Python, meet the mathematics sitting under every model, and leave having trained something and measured its error themselves.'],
    ['Modelling is a mathematical skill and mathematics does not.',
     'Model building rests on mathematics, and mathematics is not deprecated.'],
    ['Each band below is a separate curriculum with its own projects and its own finishing line.',
     'The three bands below are different curricula, not one course at three speeds, and they end in different places.'],
    ['Fees are monthly with no admission fee and no annual lock in.',
     'Billing is month to month. Nothing is charged to join and nothing commits you to a year.'],
    ['What a session is Ninety minutes of live video with a teacher who knows your child\'s name and remembers what they got stuck on last week.',
     'What a session is Ninety minutes on live video with a teacher who can tell you, without checking, what your child struggled with last week.'],
    ['The catalogue Twelve live courses, sorted by what a learner can already do A nine year old and a working engineer do not belong in the same syllabus at different speeds.',
     'The catalogue Twelve live courses, placed by current ability Where a learner starts is set by what they can already do, not by how old they are.'],
    ['Every one is a working application at a real address, built by a student and left online where anyone can open it.',
     'Each is running software at a public address, written by a student, still there for anyone to inspect.'],
    ['Student work Projects our students have shipped, live on the public web None of these is a mockup or a screenshot',
     'Student work What students here have put on the internet Not one of these is a mockup or a screenshot']
  ],
  'ai-and-machine-learning-classes-in-bahrain': [
    ['Fees are monthly with no admission fee and no annual lock in.',
     'Fees run month by month. No joining charge, and no year-long commitment.'],
    ['Every one is a working application at a real address, built by a student and left online where anyone can open it.',
     'All of them are live at public addresses, written by students, and still open to anyone who wants to look.'],
    ['Student work Projects our students have shipped, live on the public web None of these is a mockup',
     'Student work Things students built and then published None of it is a mockup'],
    ['Between sessions there is a task rather than a worksheet, something to build, break and bring back.',
     'Between one session and the next there is something to build rather than something to fill in.']
  ],
  'ai-and-machine-learning-classes-in-uae': [
    ['Modelling is a mathematical skill and mathematics does not.',
     'Building models rests on mathematics, and that foundation does not move.'],
    ['Each band below is a separate curriculum with its own projects and its own finishing line.',
     'Each band below runs its own syllabus and its own projects, and arrives somewhere different.'],
    ['Fees are monthly with no admission fee and no annual lock in.',
     'Paid monthly. There is no admission charge and no annual contract.'],
    ['Every card opens the full week by week syllabus.',
     'Open any card for the complete schedule and the projects that go with it.'],
    ['The first class is free and needs no card.',
     'The opening class costs nothing and asks for no payment details.']
  ],
  'ai-and-machine-learning-classes-in-saudi-arabia': [
    ['Each band below is a separate curriculum with its own projects and its own finishing line.',
     'Each of the three bands below is its own curriculum, with its own build work and its own end point.'],
    ['Every card opens the full week by week syllabus.',
     'Every card leads to the complete syllabus with dates and fees.'],
    ['We run rolling admission so a student can join in any week.',
     'Admission is continuous, so there is no closed intake to wait for.'],
    ['What a session is Ninety minutes of live video with a teacher who knows your child\'s name and remembers what they got stuck on last week.',
     'What a session is Ninety minutes of live teaching from someone who remembers your child from the previous week and picks up where they stopped.']
  ],
  'ai-and-machine-learning-classes-in-qatar': [
    ['Students learn Python and the mathematics under machine learning, then train and evaluate their own models rather than only prompting AI tools.',
     'Students build in Python, study the mathematics machine learning depends on, and train models they can evaluate rather than merely operate.'],
    ['Modelling is a mathematical skill and mathematics does not.',
     'Model building sits on mathematics, and mathematics does not go out of date.'],
    ['The first class is free and needs no card.',
     'The first class costs nothing, with no card required.']
  ]
};

// Sentences shared by many pages that are chrome rather than content, and are
// therefore left alone on purpose: review quotes (must be verbatim), project
// blurbs, "batches are five to eight students or one to one", and the
// "we do not write testimonials" line.

function looseRegex(sentence) {
  const esc = sentence.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // any run of whitespace in the source may be a newline plus indentation;
  // straight and curly apostrophes are interchangeable
  const body = esc.split(/\s+/).join('\\s+').replace(/'/g, "['\u2019]");
  return new RegExp(body, 'g');
}

let totalEdits = 0, misses = [];

for (const [slug, edits] of Object.entries(EDITS)) {
  const file = path.join(PAGES, slug + '.html');
  if (!fs.existsSync(file)) { misses.push(slug + ': FILE MISSING'); continue; }
  let html = fs.readFileSync(file, 'utf8');
  let pageEdits = 0;

  for (const [find, replace] of edits) {
    const re = looseRegex(find);
    const hits = (html.match(re) || []).length;
    if (!hits) { misses.push(slug + ': NOT FOUND -> "' + find.slice(0, 60) + '..."'); continue; }
    html = html.replace(re, replace);
    pageEdits += hits;
  }

  if (pageEdits && !DRY) fs.writeFileSync(file, html, 'utf8');
  totalEdits += pageEdits;
  console.log((DRY ? '[dry] ' : '') + slug.replace('ai-and-machine-learning-classes-in-', '').padEnd(16) + pageEdits + ' occurrence(s) rewritten');
}

console.log('\nTotal occurrences rewritten: ' + totalEdits);
if (misses.length) {
  console.log('\nCould not locate ' + misses.length + ' target(s). These need checking by hand:');
  misses.forEach(m => console.log('  ' + m));
  process.exitCode = 1;
} else {
  console.log('Every target located and rewritten.');
}
