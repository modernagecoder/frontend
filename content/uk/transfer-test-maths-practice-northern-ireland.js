'use strict';
// Transfer test maths practice, Northern Ireland (ag- maths door; UK cluster Phase 3). DATED: 2026 sitting.
// Sources, read raw on 21 September 2026 (seagni.co.uk pages via curl; SEAG PDFs via PyMuPDF):
//  - SEAG FAQs: SEAG is "a not for profit, private limited company, open to all 63 of the post-primary schools
//    in N. Ireland which use academic selection"; eligibility "Children born between 2nd July 2015 and 1st
//    July 2016"; Irish-medium version available; administration fee, waived for Free School Meals
//    Entitlement; SAS range "69-141 with a mean (or average) of 100"; one-paper outcomes marked "e".
//  - SEAG key dates (as displayed on 21 September 2026): late registration 21 to 24 September 2026; Pupil
//    Cards 9 October; "Saturday, 14th November 2026 Assessment Paper 1"; "Saturday, 21st November 2026
//    Assessment Paper 2"; outcomes "Saturday, 23rd January 2027"; re-marks 25 January to 3 February 2027.
//  - SEAG news, 19 September 2026: the late window is "THE FINAL OPPORTUNITY"; many centres full.
//  - SEAG Assessment Guide: "Both Papers have an identical format and are set at the same level of
//    difficulty."; based entirely on the statutory NI Curriculum at Key Stage 2; practice test of 5 English
//    and 5 maths questions, not timed; main test "28 English (or Gaeilge) Questions 28 Maths Questions 60
//    Minutes"; maths areas Numbers, Measurements, Shape and Space, Money, Probability, Data Representation;
//    outcomes standardised "to take account of the pupil's age"; Bands 1 to 6; TSAS = English SAS + Maths
//    SAS; re-marks by hand.
//  - SEAG 2026 Entrance Assessment Format (at a glance): "Pupils may begin their Main Test by starting with
//    English (or Gaeilge) questions or by starting with Maths questions."; maths Q29-Q56, "Q29-Q50 multiple
//    choice", "Q51-Q56 free response"; "60 minutes to answer the 56 questions in the Main Test"; "Each
//    question is worth 1 mark"; "Each multiple choice question has 5 possible answers".
//  - SEAG 2026 Specification (English): maths content list (number, decimals to two places, fractions and
//    percentages, primes, squares, cubes, indices, function machines, a letter for an unknown, measurement,
//    shape and space, position and direction, data handling, money including change, probability,
//    interpreting a calculator display); "responding to open-ended or multiple choice questions".
//  - SEAG Guidance Notes for Parents 2026: invigilators warn "when they have about 30 minutes left and when
//    they have about 10 minutes left"; TSAS mean 200; Band 1 = cohort percentile 60 or higher, "the top 40%";
//    around 10% of applications contain errors.
//  - SEAG What We Do: "Around 13,000 pupils sit the Entrance Assessment"; before SEAG, "two different types of
//    Entrance Assessment on four consecutive Saturdays"; GL Assessment sets and marks.
// Spine: one hour, two subjects, and the child decides the split. The SEAG main test gives 60 minutes for
// 28 English and 28 maths questions, lets pupils start with either, and adds the Maths score to the
// English score as half of the outcome. Revise after the 2026 sitting and each new SEAG specification.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'TRANSFER TEST', blurb: 'One hour for 28 English and 28 maths questions, in whichever order the child chooses. Maths is half the outcome.' },
  slug: 'transfer-test-maths-practice-northern-ireland',
  code: 'ttm',
  accent: '#913091',
  accentRationale: 'Transfer test: a bright orchid from the solver (5.61:1 on every paper tint, dE 9.9 from the nearest used accent), lighter than the other Northern Irish pages for a page read by parents of ten-year-olds',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Transfer test maths practice, Northern Ireland',
  title: 'Transfer Test Maths Practice, Northern Ireland | SEAG 2026',
  description: 'SEAG transfer test maths practice for P7: 28 maths questions in a shared 60 minutes with English, five-option multiple choice, and maths as half the outcome.',
  ogDescription: 'The SEAG test gives one hour for 28 English and 28 maths questions, in whichever order a child chooses. How to practise the maths half.',
  twitterDescription: 'SEAG transfer test maths for P7 in Northern Ireland: the format, the maths content, the timing, and how outcomes are worked out.',
  pageName: 'Transfer Test Maths Practice, Northern Ireland',
  webPageDescription: 'Live online maths lessons for P7 children in Northern Ireland preparing for the SEAG Entrance Assessment, built from SEAG\'s own specification, format guide and parent guidance.',
  courseDescription: 'Live online maths teaching for P7 children: the Key Stage 2 content the SEAG Entrance Assessment covers, five-option multiple choice, free-response questions and time management.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Transfer test maths',
  navLinks: [
    { href: '#format', label: 'The format' },
    { href: '#hour', label: 'The shared hour' },
    { href: '#content', label: 'Maths content' },
    { href: '#outcomes', label: 'Outcomes' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Northern Ireland &middot; P7 &middot; Ages 10 and 11',
  h1: 'Transfer test maths practice, Northern Ireland',
  lede: 'Northern Ireland\'s transfer test is now a single assessment. The Schools\' Entrance Assessment Group, SEAG, sets two identical-format papers on consecutive Saturdays each November, written and marked by GL Assessment, and all 63 schools that use academic selection accept the outcome. Each paper has a short untimed practice section, then a main test of 28 English and 28 maths questions with one shared allowance of 60 minutes. SEAG\'s own format guide adds a detail that shapes everything: "Pupils may begin their Main Test by starting with English (or Gaeilge) questions or by starting with Maths questions." So a ten-year-old has to decide, under pressure, how to split one hour between two subjects. The Maths score is half the result. This page sets out the format, the maths content, the timing decision, and how outcomes are calculated, from SEAG\'s published documents.',
  secondaryCta: { href: '#hour', label: 'The shared hour' },
  wa: 'Hello Modern Age Coders, I would like a free first maths lesson for my P7 child and the transfer test.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; From SEAG\'s specification, format guide and parent guidance',
  spec: [
    ['Assessment', 'SEAG Entrance Assessment, P7'],
    ['2026 papers', 'Saturday 14 and Saturday 21 November'],
    ['Each paper', '28 English and 28 maths questions, 60 minutes'],
    ['Maths questions', '22 multiple choice, then 6 free response'],
    ['Multiple-choice options', 'Five per question'],
    ['Outcome', 'English score plus Maths score'],
    ['Pupils each year', 'Around 13,000'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The SEAG Entrance Assessment is the single transfer test used by all 63 post-primary schools in Northern Ireland that select academically. Children in P7 sit two papers of identical format, in 2026 on Saturday 14 and Saturday 21 November. Each paper begins with an untimed practice section of five English and five maths questions, then a main test of 28 English and 28 maths questions in 60 minutes, which pupils may start with either subject. In the maths section, questions 29 to 50 are multiple choice with five options and questions 51 to 56 are free response; every question is worth one mark. Outcomes are standardised for age: an English score and a Maths score, each averaging 100, are added to give a total, and pupils are placed in six bands, Band 1 being the top 40 per cent. The content is based entirely on the Northern Ireland Key Stage 2 curriculum. Modern Age Coders teaches that maths content live and practises the format and timing with SEAG\'s free practice papers. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for P7 maths',
    lede: 'Primary maths, quick number skills, and exam-style practice. SEAG\'s test is based on the Northern Ireland Key Stage 2 curriculum, and we teach from SEAG\'s own content list.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'TT / 01', title: 'Primary Maths', note: 'Number, fractions, measurement, shape, data and money across the primary years.' },
      { course: 'mental-maths-mastery-kids', code: 'TT / 02', title: 'Mental Maths for Kids', note: 'Quick, reliable calculation, which matters when 56 questions share one hour.' },
      { course: '11-plus-maths-preparation-course-uk', code: 'TT / 03', title: '11+ Maths Preparation', note: 'Written for England\'s 11+, but much of the problem solving carries across; SEAG content is taught from SEAG\'s own list.' }
    ]
  },

  sections: [
    {
      id: 'format', tint: 'tint', eyebrow: 'The format',
      h2: 'Two identical papers, three sections each',
      lede: 'From SEAG\'s 2026 Entrance Assessment Format (at a glance) and Assessment Guide.',
      body: [
        { kind: 'table', caption: 'Each SEAG paper', head: ['Section', 'What it contains', 'Counts?'], rows: [
          ['1. Practice test', '5 English and 5 maths questions, not timed, to settle pupils and practise the answer sheet', 'No'],
          ['2. English main test', '28 questions: punctuation, grammar and spelling exercises, then a comprehension passage', 'Yes'],
          ['3. Maths main test', '28 questions: numbers 29 to 50 multiple choice, 51 to 56 free response', 'Yes'],
          ['Time for sections 2 and 3', '60 minutes in total for all 56 main-test questions', 'Not applicable']
        ] },
        { kind: 'p', html: 'SEAG says "Both Papers have an identical format and are set at the same level of difficulty", and a child must sit both: a pupil who sits only one receives estimated outcomes marked with an e. Every question is worth one mark, and each multiple-choice question has five possible answers. Answers go on a separate answer sheet, where a multiple-choice answer can be marked with a horizontal line or by shading the box.' },
        { kind: 'table', mt: true, caption: 'Key dates for the 2026 assessment, as published by SEAG', head: ['Date', 'What happens'], rows: [
          ['21 to 24 September 2026', 'Late registration window, the final opportunity to register'],
          ['Friday 9 October 2026', 'Pupil cards available to download'],
          ['Saturday 14 November 2026', 'Paper 1'],
          ['Saturday 21 November 2026', 'Paper 2'],
          ['Saturday 23 January 2027', 'Outcomes released online'],
          ['25 January to 3 February 2027', 'Window for re-mark requests']
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://seagni.co.uk/guidance/assessment-guide" rel="noopener" target="_blank">SEAG Assessment Guide</a>, the 2026 Format (at a glance), the 2026 Specification, SEAG\'s key dates and FAQs, and its 2026 guidance notes for parents. Dates are SEAG\'s as displayed on 21 September 2026; check SEAG\'s site for any change.' }
      ]
    },
    {
      id: 'hour', tint: 'deep', eyebrow: 'The shared hour',
      h2: 'One hour, two subjects, and the child decides the split',
      lede: 'The feature of the SEAG test that most changes how a child should practise.',
      body: [
        { kind: 'p', html: 'The 60 minutes are not divided by SEAG. The format guide says pupils may start with either subject, and the parents\' guidance notes that invigilators announce when there are "about 30 minutes left" and "about 10 minutes left". Nothing else tells a child how long to spend on the maths. A pupil who lingers over a comprehension passage can reach question 51 with too little time for the six free-response maths questions, and one who rushes the maths can leave English marks behind.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Pick an order, and keep it', p: 'Some children do better starting with the subject they find harder, while fresh; others settle with the easier one first. Either works if it is decided before the day and practised every time.' },
          { h3: 'Use the half-time call', p: 'The invigilator\'s warning at about 30 minutes is a natural checkpoint: roughly one subject should be done. Practising with that checkpoint builds a sense of pace.' },
          { h3: 'Leave no blank', p: 'Every question is worth one mark. A child running out of time should at least mark an answer for each remaining multiple-choice question rather than leave it empty.' }
        ] },
        { kind: 'p', html: 'The last point needs care. SEAG\'s documents say each question is worth one mark and do not describe any penalty for wrong answers; we therefore teach children to answer every multiple-choice question, and to make a considered choice where they can. We do not claim more about the marking than SEAG publishes.' }
      ]
    },
    {
      id: 'content', tint: '', eyebrow: 'Maths content',
      h2: 'What the maths section covers',
      lede: 'From SEAG\'s 2026 Specification, which bases the test entirely on the Northern Ireland Key Stage 2 curriculum.',
      body: [
        { kind: 'table', caption: 'Maths content in the 2026 specification', head: ['Area', 'Includes'], rows: [
          ['Number', 'Place value, decimals to two places, multiplying and dividing by 10, 100 and 1000, estimation, mental calculation, fractions, decimals and percentages and their equivalence'],
          ['Patterns and algebra', 'Sequences, doubling and halving, prime, square, cube and triangular numbers, simple indices, function machines, a letter standing for an unknown'],
          ['Operations', 'Problem solving with the four operations, estimation and approximation, interpreting a calculator display'],
          ['Money', 'Calculations with money, including working out change'],
          ['Measurement, shape and space', 'Units and measures, properties of shapes, position, movement and direction'],
          ['Probability', 'The language of chance, ordering events by likelihood, fifty-fifty, and probability with a dice'],
          ['Data', 'Recording, representing and interpreting data in graphs, tables and diagrams']
        ] },
        { kind: 'p', html: 'The specification says pupils will be expected to recognise patterns and relationships and make predictions, "responding to open-ended or multiple choice questions". The multiple-choice questions reward accuracy and elimination: with five options, ruling out two or three wrong ones is often faster than working the answer out in full. The six free-response questions at the end reward clear working and a precise final answer, with no options to check against.' },
        { kind: 'two', mt: true,
          leftH3: 'Where P7 children often need work',
          left: [
            'Fractions, decimals and percentages as one idea, converting between them quickly.',
            'Multi-step money and measurement problems, where the arithmetic is easy but the order of steps is not.'
          ],
          rightH3: 'Where the format adds difficulty',
          right: [
            'Transferring answers accurately to a separate answer sheet, which the practice test exists to rehearse.',
            'Keeping pace across 28 maths questions while also managing the English half.'
          ] }
      ]
    },
    {
      id: 'outcomes', tint: 'tint', eyebrow: 'Outcomes',
      h2: 'How the outcome is worked out',
      lede: 'SEAG\'s outcomes are standardised, and maths is exactly half of the total.',
      body: [
        { kind: 'table', caption: 'What parents receive', head: ['Outcome', 'What it means'], rows: [
          ['Maths SAS', 'A standardised age score for the maths section, on a scale that runs from 69 to 141 with an average of 100'],
          ['English SAS', 'The same for the English (or Gaeilge) section'],
          ['TSAS', 'The two scores added together, averaging 200'],
          ['Cohort percentile', 'How a pupil compares with everyone who sat the assessment'],
          ['Band', 'Six bands; Band 1 is a cohort percentile of 60 or higher, the top 40 per cent']
        ] },
        { kind: 'p', html: 'The scores are standardised, SEAG explains, to take account of the pupil\'s age when they sat the test, the number of correct answers and the difficulty of the assessment. A child born in June is compared fairly with one born the previous July. Because the total is simply the English score plus the Maths score, a gain in maths counts exactly as much as the same gain in English. The percentile needed for each band stays the same each year, while the score needed may vary slightly.' },
        { kind: 'two', mt: true,
          leftH3: 'What we do',
          left: [
            'Teach the Key Stage 2 maths on SEAG\'s list, with extra time on the areas a child finds slow, and practise five-option multiple choice and free-response questions separately.',
            'Rehearse the full format with SEAG\'s free practice papers and answer sheets, including the shared 60 minutes and the half-time checkpoint.'
          ],
          rightH3: 'What we will not claim',
          right: [
            'A band or a score. The outcome depends on the whole cohort, and schools set their own admissions criteria.',
            'Anything about marking beyond what SEAG publishes, and any shortcut past the content itself.'
          ] },
        { kind: 'p', html: 'For later years, <a class="ag-inline-link" href="/ccea-gcse-maths-help">the CCEA GCSE Maths page</a> explains the GCSE pathways, and <a class="ag-inline-link" href="/coding-and-ai-classes-in-northern-ireland">the Northern Ireland page</a> sets out the wider system. For England\'s tests, see <a class="ag-inline-link" href="/11-plus-maths-tuition-kent">11+ maths in Kent</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through P6 and P7',
    lede: 'Placement follows what a child can do accurately and at pace, not only what they have covered.',
    table: { caption: 'What a transfer test candidate should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Secure number', 'P6', 'Place value, the four operations, fractions, decimals and percentages, done accurately'],
      ['2. The full list', 'P6 into P7', 'Every area on SEAG\'s specification covered, including probability, data and function machines'],
      ['3. The format', 'Early P7', 'Five-option multiple choice, free response, and a separate answer sheet handled confidently'],
      ['4. The shared hour', 'Autumn of P7', 'Both subjects completed in 60 minutes, with a chosen order and a half-time check']
    ] },
    left: { h3: 'Rung two is about coverage', ps: [
      'Children often meet one or two areas late, such as function machines or probability. SEAG\'s list is the checklist.',
      'Children who enjoy puzzles may also like <a class="ag-inline-link" href="/primary-maths-challenge-practice">the Primary Maths Challenge</a>.'
    ] },
    right: { h3: 'Rung four is practice, not content', ps: [
      'Pace comes from timed papers with both subjects together, not from maths alone.',
      'Lessons wind down after the November papers.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for primary children',
    lede: 'Grouped by purpose. The free lesson settles where a child starts.',
    bands: [
      { num: 'I', h3: 'Transfer test maths', sub: 'Key Stage 2 content', courses: [
        { code: 'UK / TT1 / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'The whole primary maths curriculum, placed by year.' },
        { code: 'UK / TT1 / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Speed and accuracy without pen and paper.' },
        { code: 'UK / TT1 / 03', slug: '11-plus-maths-preparation-course-uk', title: '11+ maths preparation', blurb: 'Problem solving for selective tests, adapted to SEAG content.' }
      ] },
      { num: 'II', h3: 'Number confidence', sub: 'For children who find maths slow', courses: [
        { code: 'UK / TT2 / 01', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus mental maths', blurb: 'A visual way into number.' },
        { code: 'UK / TT2 / 02', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Calculation shortcuts for children who like patterns.' },
        { code: 'UK / TT2 / 03', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'For siblings aged four to seven.' }
      ] },
      { num: 'III', h3: 'Beyond the test', sub: 'Coding and puzzles', courses: [
        { code: 'UK / TT3 / 01', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'Block coding, a relaxing change from test practice.' },
        { code: 'UK / TT3 / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Puzzles and logic for curious children.' },
        { code: 'UK / TT3 / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'After November, a project to look forward to.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Content first, then the hour',
    lede: 'Our teachers are in India, which keeps the same clock all year, so Northern Ireland is four and a half hours behind in summer and five and a half in winter. Lessons are set in UK time.',
    slots: [
      { time: 'After school', l: 'Short sessions suit P6 and P7 children.' },
      { time: 'Early evening', l: 'Before homework and tea.' },
      { time: 'Saturday morning', l: 'The same time of day as the real papers.' }
    ],
    cells: [
      { h3: 'SEAG\'s list', p: 'Every area in the specification covered, checked off as it becomes secure.' },
      { h3: 'Five-option practice', p: 'Multiple choice with elimination, so options become a tool rather than a trap.' },
      { h3: 'Free response', p: 'The last six maths questions practised with clear working and exact answers.' },
      { h3: 'Answer sheets', p: 'Transferring answers to a separate sheet, as in the real test.' },
      { h3: 'The shared hour', p: 'Full timed papers with both subjects, a chosen order and a half-time check.' },
      { h3: 'Small groups', p: 'Five to ten P7 children, with a calm, encouraging pace.' }
    ]
  },

  projectsH2: 'Made by children in our classes',
  projectsLede: 'Small projects from everyday lessons, not practice tests. Plenty more are in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents have written on Google, unedited.',

  fees: {
    h2: 'Fees for transfer test maths lessons',
    lede: 'Fees are monthly and in US dollars, at one rate for families anywhere outside India. There is no charge for the first lesson, and we send no bill until a course and a weekly slot are agreed.',
    free: ['A gentle lesson on SEAG-style maths', 'A clear view of which areas need work', 'Only a phone number needed'],
    group: ['Five to ten P7 children at one stage', 'The same teacher each week', 'Timed practice as November nears', 'A calm, encouraging pace'],
    one: ['A teacher for one child', 'Built around the areas a child finds slow', 'Suits a child anxious about the test']
  },

  faq: {
    eyebrow: 'Questions about the transfer test',
    h2: 'What P7 parents ask',
    items: [
      { q: 'What is the SEAG Entrance Assessment?', a: 'The single transfer test used by all 63 post-primary schools in Northern Ireland that use academic selection. It is set and marked by GL Assessment for SEAG, and around 13,000 pupils sit it each year.' },
      { q: 'When are the 2026 papers?', a: 'Paper 1 is on Saturday 14 November 2026 and Paper 2 on Saturday 21 November 2026. Outcomes are released on Saturday 23 January 2027.' },
      { q: 'How is each paper structured?', a: 'An untimed practice section of five English and five maths questions, then a main test of 28 English and 28 maths questions in 60 minutes, which pupils may start with either subject.' },
      { q: 'What kind of maths questions are there?', a: 'Questions 29 to 50 are multiple choice with five possible answers, and questions 51 to 56 are free response. Each question is worth one mark.' },
      { q: 'What maths does it cover?', a: 'Key Stage 2 content from the Northern Ireland curriculum: number, fractions, decimals and percentages, patterns, simple algebra, measurement, shape and space, money, probability and data.' },
      { q: 'How is the result worked out?', a: 'An English score and a Maths score, each standardised for age with an average of 100, are added to give a total. Pupils are then placed in six bands; Band 1 is the top 40 per cent of those who sat.' },
      { q: 'Does my child have to sit both papers?', a: 'Yes. A pupil who sits only one paper receives estimated outcomes marked with an e, and schools decide how to treat those under their own admissions criteria.' },
      { q: 'Can my child sit it in Irish?', a: 'Yes. SEAG provides Gaeilge versions of the assessment, invigilated in Irish at centres that offer it. Our lessons, though, are in English only.' },
      { q: 'Is it too late to register?', a: 'SEAG set a final late registration window from 21 to 24 September 2026. After that, no child can be registered for the 2026 assessment.' },
      { q: 'What does it cost?', a: 'Our first lesson is free. After that, lessons are one monthly fee in US dollars, lower for a group place than one to one, as shown in the fees section, with nothing charged in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for families in Northern Ireland',
    lede: 'The GCSE years ahead, the wider system, and puzzles for keen children.',
    items: [
      { href: '/ccea-gcse-maths-help', label: 'CCEA GCSE Maths', p: 'The GCSE pathways that come later.' },
      { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Coding and AI classes in Northern Ireland', p: 'Primary school to A level.' },
      { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge', p: 'A UK-wide puzzle competition for primary children.' },
      { href: '/first-competitions-for-primary-school-children-uk', label: 'First competitions for primary children', p: 'Gentle contests in maths and coding.' },
      { href: '/11-plus-maths-tuition-kent', label: '11+ maths in Kent', p: 'How England\'s selective tests differ.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page, in one place.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time that suits your family. The first lesson is gentle, uses SEAG-style maths, and ends with a plan up to November.',
    readFirst: 'Rather look around first? The <a class="ag-inline-link" href="/courses">course list</a> gives each syllabus in full, <a class="ag-inline-link" href="/how-we-teach">our teaching page</a> describes how we work with ten-year-olds, and <a class="ag-inline-link" href="/student-labs">student labs</a> collects children\'s projects.',
    note: 'The fastest reply comes on WhatsApp, which is free from a UK phone. Our office is in India, so the number you will see starts +91.',
    formNote: 'Nothing to pay and nothing to sign; we answer once, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Northern Ireland', links: [
        { href: '/ccea-gcse-maths-help', label: 'CCEA GCSE Maths' },
        { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Coding and AI in Northern Ireland' },
        { href: '/primary-maths-challenge-practice', label: 'Primary Maths Challenge' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'More', links: [
        { href: '/first-competitions-for-primary-school-children-uk', label: 'First competitions' },
        { href: '/11-plus-maths-tuition-kent', label: '11+ maths in Kent' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Transfer test maths, live on UK time'
  },

  personalityCss: `
.ag-root.ag-ttm .ag-hero h1 { letter-spacing: -0.02em; font-weight: 700; }
.ag-root.ag-ttm .ag-capsule { border-left-width: 6px; border-radius: 8px; }
.ag-root.ag-ttm .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-ttm .ag-table caption { text-align: left; font-weight: 660; }
.ag-root.ag-ttm .ag-table td:first-child { font-weight: 630; }
.ag-root.ag-ttm .ag-band-head h3 { letter-spacing: -0.01em; }
`,

  mustMention: ['SEAG', '28 maths questions', '60 minutes', 'five possible answers', 'free response', 'Band 1', 'standardised', '14 November 2026', 'GL Assessment', 'Key Stage 2'],

  dossier: {
    curriculumAuthority: 'Northern Ireland, SEAG Entrance Assessment (the transfer test), set and marked by GL Assessment. SEAG FAQs: "a not for profit, private limited company, open to all 63 of the post-primary schools in N. Ireland which use academic selection"; eligibility for children born 2 July 2015 to 1 July 2016 transferring in September 2027; Gaeilge versions; administration fee waived for Free School Meals Entitlement; SAS "69-141 with a mean (or average) of 100"; one-paper outcomes marked "e". Key dates as displayed on 21 September 2026: late registration 21 to 24 September 2026, pupil cards 9 October, Paper 1 Saturday 14 November 2026, Paper 2 Saturday 21 November 2026, outcomes Saturday 23 January 2027, re-marks 25 January to 3 February 2027. Assessment Guide: "Both Papers have an identical format and are set at the same level of difficulty."; based entirely on the statutory NI Curriculum at Key Stage 2; practice test 5 English and 5 maths, not timed; main test 28 English and 28 maths questions in 60 minutes; outcomes standardised "to take account of the pupil\'s age"; Bands 1 to 6; TSAS = English SAS + Maths SAS. 2026 Format (at a glance): "Pupils may begin their Main Test by starting with English (or Gaeilge) questions or by starting with Maths questions."; maths Q29 to Q56, Q29 to Q50 multiple choice, Q51 to Q56 free response; "60 minutes to answer the 56 questions in the Main Test"; "Each question is worth 1 mark"; "Each multiple choice question has 5 possible answers". 2026 Specification: maths content list; "responding to open-ended or multiple choice questions". Guidance Notes for Parents 2026: warnings at "about 30 minutes left" and "about 10 minutes left"; TSAS mean 200; Band 1 cohort percentile 60 or higher, the top 40%. What We Do: "Around 13,000 pupils sit the Entrance Assessment"; before SEAG, two different assessments on four consecutive Saturdays.',
    localProject: 'One hour, two subjects, and the child decides the split. Northern Ireland\'s single transfer test, SEAG\'s Entrance Assessment, gives each paper one 60-minute main test for 28 English and 28 maths questions, lets pupils begin with either subject, and adds the standardised Maths score to the English score as half of the outcome. The page sets out the format and the 2026 dates from SEAG\'s documents, explains the shared hour and how to manage it with the invigilators\' 30- and 10-minute calls, walks the maths content in SEAG\'s 2026 specification with advice on five-option multiple choice and the free-response questions, and explains the standardised outcomes, TSAS and bands. It claims nothing about marking beyond SEAG\'s documents and promises no band. Dated to the 2026 sitting. Lesson family: a selective test whose shared time limit makes pacing a skill in its own right.',
    requiredMentions: ['SEAG', 'five possible answers', 'Band 1', '14 November 2026'],
    sources: [
      { claim: 'SEAG Assessment Guide: format, content areas, standardised outcomes, bands and re-marks.', url: 'https://seagni.co.uk/guidance/assessment-guide' },
      { claim: 'SEAG key dates for the 2026 assessment, as displayed on 21 September 2026.', url: 'https://seagni.co.uk/guidance/key-dates' },
      { claim: 'SEAG FAQs: SEAG\'s status and membership, eligibility, fees, Gaeilge versions, SAS range and one-paper outcomes.', url: 'https://seagni.co.uk/guidance/faqs' },
      { claim: 'SEAG practice materials: free practice papers, answer sheets and the parents\' guide with answer keys.', url: 'https://seagni.co.uk/guidance/practice-materials' },
      { claim: 'SEAG What We Do: around 13,000 pupils a year, the 63 schools, and the arrangements before SEAG.', url: 'https://seagni.co.uk/about-us/what-we-do' }
    ],
    rejectedClaims: [
      'Any rule on penalties for wrong answers: SEAG\'s documents do not describe one, so the page claims none and only says each question is worth one mark.',
      'The TSAS needed for any band or any school: varies by year and school; not quoted.',
      'Fee amounts: SEAG\'s administration and re-mark fees are in pounds, which this page keeps off to avoid confusion with our US dollar fees; they are described, not priced.',
      'Third-party tutor sites\' descriptions of the test: not used; only SEAG\'s own documents.',
      'Any promise of a band or place, which we decline.'
    ]
  }
};
