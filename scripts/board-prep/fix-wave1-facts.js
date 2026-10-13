#!/usr/bin/env node
/**
 * scripts/board-prep/fix-wave1-facts.js
 *
 * One-off, idempotent text corrections to the hand-built wave-1 pages (html and
 * md twins), verified 2026-10-13 against primary sources:
 *   - CISCE's 2027 Computer Applications syllabus asks for at least twenty lab
 *     assignments and prescribes NO separate project; the external examiner is
 *     nominated by the head of school and marks on four criteria (no viva).
 *     BlueJ "projects" (the IDE's folders) are correct and left alone.
 *   - CBSE 2026: main exams 17 Feb to 11 Mar, second exam 15 to 21 May.
 *   - Option c (owner, 2026-10-13): ICSE outside India is one to one, so the
 *     Gulf batch-time FAQ is rewritten.
 * Every replacement is applied to every listed file; a phrase that is in no
 * file is reported so a silent miss cannot pass.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const PAGES = path.resolve(__dirname, '..', '..', 'src', 'pages');

const ICSE = ['icse-class-10-java-classes-online', 'icse-class-10-computer-applications-syllabus-explained', 'icse-class-10-bluej-java-coaching', 'icse-class-10-computer-applications-board-exam-preparation'];
const CBSE = ['cbse-class-10-ai-board-exam-preparation'];

const ICSE_FIXES = [
  // classes-online
  ['the 20-plus lab assignments and the internal-assessment project.', 'the 20-plus lab assignments for the internal assessment.'],
  ['Practical lab work and a project. Students must complete at least 20 lab assignments in the year, and prepare a project; the assessment is shared', 'Practical lab work. Students must complete at least 20 lab assignments in the year; CISCE does not prescribe a separate project, though some schools call the finished file the computer project. The assessment is shared'],
  ['drafts the project in the second term', 'adds a few larger programs in the second term'],
  ['built from twenty or more lab assignments and a project.', 'built from twenty or more lab assignments.'],
  ['with the lab file and project built across the year', 'with the lab file built across the year'],
  ['from at least twenty lab assignments and a project, shared', 'from at least twenty lab assignments, shared'],
  ['Internal assessment: at least 20 lab assignments in the year, plus a project', 'Internal assessment: at least 20 lab assignments in the year'],
  ['Twenty assignments, one project and an external examiner, planned across the year', 'Twenty assignments and an external examiner, planned across the year'],
  ['<h4>The project is scoped early and drafted in the second term</h4><p>The internal assessment includes a written project, and a project drafted in October and revised in November is a different thing from one assembled the week before the external examiner arrives. We help the student choose a topic they can talk about for ten minutes, because that is exactly what will be asked of them.</p>',
   '<h4>The larger programs are scoped early and written in the second term</h4><p>CISCE asks for twenty or more assignments rather than a separate project, but a file that ends with a few substantial programs, drafted in October and revised in November, reads very differently from one assembled the week before the external examiner arrives. We help the student pick programs they can explain confidently, because examiners often ask.</p>'],
  ['File reviewed assignment by assignment, project questioned,', 'File reviewed assignment by assignment, programs questioned,'],
  ["the lab file and the project are a year's work by design", "the lab file is a year's work by design"],
  ['Lab file, project and practical mocks included', 'Lab file and practical mocks included'],
  ['<h3>We are an ICSE family in the Gulf. Do the timings work?</h3><p>Tuesday 5:30 PM IST is 4:00 PM in the UAE and Oman and 3:00 PM in Saudi Arabia, Qatar, Kuwait and Bahrain; Wednesday 8:00 PM IST is 6:30 PM and 5:30 PM respectively. The Tuesday slot suits families whose school day ends early, and the Wednesday slot suits everyone else. The syllabus is the same CISCE Computer Applications your school follows, and the fee is shown on this page in your own currency.</p>',
   '<h3>We are an ICSE family in the Gulf or abroad. How do classes work?</h3><p>Outside India we teach ICSE Computer Applications personalised one to one, two private classes a week at a local time after school, because the mini batch is timed for Indian evenings. CISCE lists ICSE schools abroad in the UAE, Singapore, Indonesia and Thailand, all on the same syllabus your child follows, and the fee is shown on this page in US dollars when you visit from abroad.</p>'],
  ['"name": "We are an ICSE family in the Gulf. Do the timings work?", "acceptedAnswer": {"@type": "Answer", "text": "Tuesday 5:30 PM IST is 4:00 PM in the UAE and Oman and 3:00 PM in Saudi Arabia, Qatar, Kuwait and Bahrain; Wednesday 8:00 PM IST is 6:30 PM and 5:30 PM respectively. The Tuesday slot suits families whose school day ends early, and the Wednesday slot suits everyone else. The syllabus is the same CISCE Computer Applications your school follows, and the fee is shown on this page in your own currency."',
   '"name": "We are an ICSE family in the Gulf or abroad. How do classes work?", "acceptedAnswer": {"@type": "Answer", "text": "Outside India we teach ICSE Computer Applications personalised one to one, two private classes a week at a local time after school, because the mini batch is timed for Indian evenings. CISCE lists ICSE schools abroad in the UAE, Singapore, Indonesia and Thailand, all on the same syllabus your child follows, and the fee is shown on this page in US dollars when you visit from abroad."'],
  ['- Gulf families: Tuesday 4:00 PM and Wednesday 6:30 PM in the UAE and Oman; Tuesday 3:00 PM and Wednesday 5:30 PM in Saudi Arabia, Qatar, Kuwait and Bahrain', '- Outside India (UAE, Singapore, Indonesia, Thailand): personalised one to one at a local time after school'],
  // syllabus-explained
  ['at least 20 lab assignments and a project, marked', 'at least 20 lab assignments, marked'],
  ['The lab file passes twenty here and the project is drafted.', 'The lab file passes twenty here.'],
  ['<li class="bx-done"><b>A project</b>, prepared and documented, that the student can present and answer questions on.</li>', '<li class="bx-done"><b>No separate project</b> is prescribed by CISCE; many schools call the finished lab file the computer project.</li>'],
  ['by an examiner who reviews the practical work and questions the student.', 'by an examiner the head of school nominates, marking on the same four criteria.'],
  ['Continuous assessment of the lab work and project by the school', 'Continuous assessment of the lab work by the school'],
  ['the project defended to an unfamiliar teacher', 'the lab file explained to an unfamiliar teacher'],
  ['the lab assignments and the project, in a mini batch', 'the twenty-plus lab assignments, in a mini batch'],
  ['One hundred marks from practical lab work and a project. Students must complete at least 20 lab assignments during the year, and prepare a project; the assessment is shared', 'One hundred marks from practical lab work. Students must complete at least 20 lab assignments during the year, and CISCE does not prescribe a separate project; the assessment is shared'],
  ['Practical lab work of at least 20 assignments in the year, plus a project', 'Practical lab work of at least 20 assignments in the year'],
  ['The internal assessment: twenty assignments, a project, two assessors', 'The internal assessment: twenty assignments, two assessors'],
  // bluej
  ['The project half of the internal assessment is drafted in the second term alongside the\n      assignments, and both are rehearsed together before the school\'s practical day.', 'A few larger programs are added to the file in the second term, and the whole file is\n      rehearsed before the school\'s practical day.'],
  // board-exam-preparation
  ['Finish the lab file and project before', 'Finish the lab file before'],
  ['the lab file and project must be finished before', 'the lab file must be finished before'],
  ['the project questioned by a teacher the student has not met', 'the programs questioned by a teacher the student has not met'],
  ['the project drafted and defended once,', 'the larger programs explained once to a new teacher,'],
  ['The internal assessment, lab work and project, is completed at school in the weeks before the written examination, on a schedule', 'The internal assessment, the lab work, is completed at school on a schedule'],
  ['lab file and project closed, practical rehearsed', 'lab file closed, practical rehearsed'],
  // md twins word some of these differently
  ['at least 20 lab assignments in the year plus a project, assessed', 'at least 20 lab assignments in the year, assessed'],
  ['The project is scoped early and drafted in the second term.', 'A few larger programs are scoped early and written in the second term.'],
  ['of at least 20 assignments in the year plus a project, 50', 'of at least 20 assignments in the year, 50'],
  ['with the file passing twenty and the project drafted', 'with the file passing twenty'],
  ['a documented project the student can present; 50 marks from the internal teacher and 50 from an external examiner who reviews the practical work and questions the student', 'no separate project is prescribed; 50 marks from the internal teacher and 50 from an external examiner the head of school nominates'],
  ['lab file reviewed, project questioned by an unfamiliar teacher', 'lab file reviewed, programs questioned by an unfamiliar teacher'],
  ["The internal assessment is completed at school in the weeks before the written paper, on the school's schedule within CISCE's framework, so the file and project close before theory revision begins", "The internal assessment is completed at school on the school's schedule within CISCE's framework, so the file should close before theory revision begins"]
];

const CBSE_FIXES = [
  ['17 February to 9 March', '17 February to 11 March'],
  ['from 15 May to 1 June', 'from 15 to 21 May'],
  ['15 May to 1 June in 2026', '15 to 21 May in 2026'],
  ['(15 May to 1 June', '(15 to 21 May']
];

function apply(slugs, fixes) {
  const used = new Set();
  for (const slug of slugs) for (const ext of ['.html', '.md']) {
    const f = path.join(PAGES, slug + ext);
    if (!fs.existsSync(f)) continue;
    let s = fs.readFileSync(f, 'utf8');
    const before = s;
    for (const [a, b] of fixes) if (s.includes(a)) { s = s.split(a).join(b); used.add(a); }
    if (s !== before) { fs.writeFileSync(f, s, 'utf8'); console.log('fixed', slug + ext); }
  }
  for (const [a, b] of fixes) if (!used.has(a) && !slugs.some(sl => ['.html', '.md'].some(e => { const f = path.join(PAGES, sl + e); return fs.existsSync(f) && fs.readFileSync(f, 'utf8').includes(b); }))) console.log('NOT FOUND:', a.slice(0, 80));
}

apply(ICSE, ICSE_FIXES);
apply(CBSE, CBSE_FIXES);
