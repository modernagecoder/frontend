'use strict';
// CCEA GCSE Digital Technology (Programming) help (ag- exam door, Northern Ireland; UK cluster Phase 3).
// Sources, read raw on 21 September 2026 (CCEA PDFs via curl + PyMuPDF):
//  - CCEA GCSE Digital Technology specification (first teaching September 2017, updated 17 September
//    2019), QAN 603/1122/8. Verbatim: Unit 1 "External written examination 1 hour 30%"; Route B:
//    Programming, Unit 4 Digital Development Concepts "External written examination 1 hour 30 mins 40%",
//    Unit 5 Digital Development Practice "Controlled assessment 30%"; "Students must take at least 40
//    percent of the assessment (based on unit weightings) at the end of the course as terminal
//    assessment"; Unit 5 "Students must use one of the following languages in their completed solution:
//    Python, Java or C#."; Unit 4 content (paradigms, IDE features, binary/hex, ASCII 7-bit and 8-bit and
//    Unicode, two-byte addition and overflow, Boolean operators and truth tables, algorithms, flow diagrams
//    and pseudo-code, bubble and insertion sort, linear and binary search, one-dimensional arrays, string
//    functions, functions or methods, file handling, validation "presence, length, type and format checks",
//    white box and black box, system, unit and integration testing, "valid, invalid and extreme" test
//    data); controlled assessment "worth 60 marks and will take a maximum of 36 hours"; task setting "high",
//    task taking "medium", task marking "medium"; "We will publish a new scenario-based task for Unit 3
//    and Unit 5 in June each year"; drafting: teachers must not correct work in detail for a fair copy.
//  - CCEA GCSE Chief Examiner's and Principal Moderator's Report, Digital Technology, Summer Series 2025.
//    Verbatim: Unit 4 "The total mark for the exam was 120 marks and the time allowed was 90 minutes";
//    "ten compulsory questions"; question types; Question 7 QWC "worth 6 marks"; "Candidates making use of
//    generic terms will be unable to score in the top band."; strengths (predicting output, logic errors,
//    binary arithmetic, test plans, black and white box); weaknesses (arrays in loops e.g. sales[j],
//    running totals, unbounded iteration, output statements inside loops, constants' advantage, Unicode
//    versus ASCII, dry run second point, insertion and bubble sort, user requirements, robustness data);
//    "These requirements align closely to the mark scheme."; "where variable names are provided
//    candidates must make use of them"; ticks: "only the first n, where n=the required number, will be
//    accepted"; Unit 5 moderation: "The use of templates is prohibited."; "Extreme testing of data was
//    lacking in a number of centres."; screenshots only for corrective action; evaluation descriptive not
//    evaluative; practice through legacy tasks encouraged; modelling with live data files not authorised.
//    Unit 1 notes (boot-up sequence, validation, VLOOKUP, IoT, legislation titles, health concerns).
// Spine: code on paper, where the bullet points are the mark scheme. Unit 4 is a handwritten paper of
// 120 marks in 90 minutes in 2025, and CCEA's own report says the marks followed the bullet-pointed
// requirements and the variable names given. Deliberately NOT repeated from the Northern Ireland page
// (row 33): the two-route fork as the argument, and the three-language list as the argument.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'CCEA GCSE', blurb: 'Unit 4 is written by hand, 120 marks in 90 minutes, and CCEA says the bullet points in each question track its mark scheme.' },
  slug: 'ccea-gcse-digital-technology-programming-help',
  code: 'ccdt',
  accent: '#42188B',
  accentRationale: 'CCEA programming route: a deep indigo from the solver (9.82:1 on every paper tint, dE 9.2 from the nearest used accent), well apart from the magenta of the Northern Ireland page above it',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'CCEA GCSE Digital Technology programming help',
  title: 'CCEA GCSE Digital Technology Programming Help | Units 4 and 5',
  description: 'CCEA GCSE Digital Technology programming help in Northern Ireland: Unit 4 is written by hand, and the 2025 report shows where marks went. Unit 5 too.',
  ogDescription: 'CCEA\'s Unit 4 is a handwritten programming paper, 120 marks in 90 minutes in 2025. Its report says the bullet points track the mark scheme.',
  twitterDescription: 'CCEA GCSE Digital Technology, programming route: the handwritten Unit 4 paper, the Unit 5 moderators\' notes, and the compulsory core.',
  pageName: 'CCEA GCSE Digital Technology Programming Help',
  webPageDescription: 'Live online tuition for the CCEA GCSE Digital Technology programming route in Northern Ireland, built from the specification and CCEA\'s 2025 examiners\' report.',
  courseDescription: 'Live online teaching for CCEA GCSE Digital Technology (Programming) candidates: handwritten algorithms, arrays and loops, data representation, testing, evaluation and the compulsory core.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'CCEA Digital Technology',
  navLinks: [
    { href: '#paper', label: 'The Unit 4 paper' },
    { href: '#bullets', label: 'Bullet points' },
    { href: '#unit5', label: 'Unit 5' },
    { href: '#core', label: 'Unit 1' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Northern Ireland &middot; CCEA GCSE &middot; Years 11 and 12',
  h1: 'CCEA GCSE Digital Technology programming help',
  lede: 'On the programming route of CCEA\'s GCSE Digital Technology, the biggest single unit is a paper candidates answer with a pen. Unit 4, Digital Development Concepts, is worth 40 per cent, and in summer 2025 it carried 120 marks in 90 minutes: algorithms completed and written by hand, arrays processed in loops, trace tables filled in, binary added, and one extended answer marked for the quality of its writing. CCEA\'s own report on that paper is unusually direct about where the marks went. Candidates were strong at predicting output and spotting logic errors. They lost marks by skipping a bullet-pointed requirement, ignoring a variable name the question gave them, or leaving it unclear where a loop ended. "These requirements align closely to the mark scheme", the examiners wrote. This page is built on that report.',
  secondaryCta: { href: '#bullets', label: 'The bullet-point rule' },
  wa: 'Hello Modern Age Coders, I would like a free first lesson for CCEA GCSE Digital Technology programming.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Read from CCEA\'s specification and its 2025 examiners\' report',
  spec: [
    ['Qualification', 'CCEA GCSE Digital Technology (Programming)'],
    ['Unit 1, core', 'Written exam, 1 hour, 30 per cent'],
    ['Unit 4', 'Written exam, 1 hour 30 minutes, 40 per cent'],
    ['Unit 4 in 2025', '120 marks in 90 minutes'],
    ['Unit 5', 'Controlled assessment, up to 36 hours, 30 per cent'],
    ['Unit 5 languages', 'Python, Java or C#'],
    ['Group', 'Five to ten at one stage'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'CCEA\'s GCSE Digital Technology (Programming) is three units: the compulsory core, Unit 1, a one-hour written exam worth 30 per cent; Unit 4, Digital Development Concepts, a written exam of 1 hour 30 minutes worth 40 per cent; and Unit 5, Digital Development Practice, a controlled assessment worth 30 per cent and 60 marks, completed in up to 36 hours in Python, Java or C# on a scenario CCEA publishes each June. In 2025 the Unit 4 paper carried 120 marks. CCEA\'s report on it says candidates predicted output well but lost marks on arrays inside loops, while loops, running totals and, above all, on not following the bullet-pointed requirements and given variable names, which it says align closely to the mark scheme. Modern Age Coders teaches handwritten algorithm practice against exactly those habits, the Unit 1 core, and the design, testing and evaluation skills Unit 5 grades, on our own briefs. We never work on a live controlled assessment task. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for the programming route',
    lede: 'Two of the three languages CCEA allows in Unit 5, and the algorithms Unit 4 asks for by hand. Every card opens its syllabus.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'NI / 01', title: 'Python for Teens', note: 'Variables to file handling in the language most Northern Irish schools use for Unit 5.' },
      { course: 'java-programming-masterclass-for-teens', code: 'NI / 02', title: 'Java for Teens', note: 'For schools on Java, and for the object-oriented ideas the Unit 4 extended answer asks candidates to describe.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'NI / 03', title: 'Problem Solving and Algorithms', note: 'Bubble and insertion sort, linear and binary search, arrays and trace tables, practised on paper as well as on screen.' }
    ]
  },

  sections: [
    {
      id: 'paper', tint: 'tint', eyebrow: 'The Unit 4 paper',
      h2: 'Code on paper: what the 2025 examiners saw',
      lede: 'From CCEA\'s Chief Examiner\'s report on Unit 4, Digital Development Concepts, summer 2025.',
      body: [
        { kind: 'table', caption: 'The 2025 Unit 4 paper at a glance', head: ['Feature', 'In 2025'], rows: [
          ['Marks and time', '120 marks in 90 minutes, ten compulsory questions'],
          ['Question types', 'Multiple choice, fill in the blanks, closed response, tick box, matching terms and open response'],
          ['Marks per part', 'From 1 to 9'],
          ['Extended writing', 'One question of 6 marks, marked in levels for the quality of written communication'],
          ['Share of the GCSE', '40 per cent']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where candidates did well',
          left: [
            'Predicting the output of algorithms, identifying the cause of logic errors and writing accurate solutions, which the report says has improved year on year.',
            'Binary arithmetic, validation, test plans, and the difference between black box and white box testing, where many took full marks.'
          ],
          rightH3: 'Where marks leaked',
          right: [
            'Arrays inside loops: using the index variable correctly, as in sales[j], and keeping a running total. Unbounded iteration, where many candidates reach for a for loop when a while loop is needed.',
            'Short explanations that describe instead of answering: what a constant is rather than why it helps, one point about a dry run instead of two, one difference between Unicode and ASCII restated backwards.'
          ] },
        { kind: 'table', mt: true, caption: 'Slips in the 2025 report, and what to practise', head: ['Topic', 'The slip', 'Practise'], rows: [
          ['Arrays', 'Not using the array name given, setting all elements with one assignment instead of a loop', 'Initialising and totalling arrays in loops, by hand, weekly'],
          ['While loops', 'Wrong condition, no counter moving through the array, output statements left inside the loop', 'Writing while versions of every for loop, and marking where each loop ends'],
          ['Constants', 'Defining a constant instead of giving an advantage', 'Answering "why" questions with a benefit, such as readability or easier maintenance'],
          ['Characters', 'Confusing the number of bits with the number of characters in ASCII and Unicode', 'Two genuinely different contrasts, stated both ways'],
          ['Sorting', 'Mixing up insertion and bubble sort', 'Tracing both sorts on the same short list until the difference is obvious'],
          ['Robustness', 'Naming a type of testing instead of the data used', 'Two of valid, null, invalid and exceptional data, at high volume']
        ] },
        { kind: 'source', html: 'Source: CCEA GCSE Chief Examiner\'s and Principal Moderator\'s Report, Digital Technology, Summer Series 2025, and the CCEA GCSE Digital Technology specification, both from the <a class="ag-inline-link" href="https://ccea.org.uk/key-stage-4/gcse/subjects/gcse-digital-technology-2017" rel="noopener" target="_blank">CCEA GCSE Digital Technology pages</a>. The 120-mark total is the 2025 paper\'s; papers can vary.' }
      ]
    },
    {
      id: 'bullets', tint: 'deep', eyebrow: 'The bullet-point rule',
      h2: 'The bullet points are the mark scheme',
      lede: 'The single most repeated piece of advice in the 2025 report, and the easiest to practise.',
      body: [
        { kind: 'p', html: 'Long Unit 4 questions set out a scenario and then list what the algorithm must do, usually as bullet points: read this, calculate that, output these two values, use one condition per if-statement. The report says of one such question: "These requirements align closely to the mark scheme." Candidates lost marks for not outputting a value a bullet asked for, for using two conditions where one was specified, and for entering numbers where the question gave variable names such as HireCost and NumberOfNights.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Use the names given', p: 'The report is plain: "where variable names are provided candidates must make use of them". A correct algorithm with invented names loses marks it did not need to lose.' },
          { h3: 'Show where loops end', p: 'Outputs placed inside a while loop earned nothing when they belonged after it. Indent clearly or end the loop explicitly, so the logic is visible on paper.' },
          { h3: 'Count your ticks', p: 'Where a question asks for a set number of ticks, "only the first n, where n=the required number, will be accepted". Extra answers in a single-answer space score nothing.' }
        ] },
        { kind: 'p', html: 'The extended answer has its own trap. The report warns that "Candidates making use of generic terms will be unable to score in the top band", and elsewhere singles out words like faster and quicker. In 2025 the question asked candidates to describe procedural and object-oriented programming. Most described objects, classes and inheritance well and procedural programming thinly, sometimes as no more than step-by-step instructions.' },
        { kind: 'table', mt: true, caption: 'A routine for any long Unit 4 question', head: ['Step', 'What to do'], rows: [
          ['1. Number the bullets', 'Write a small number beside each requirement before writing any code'],
          ['2. Copy the names', 'Underline every variable and array name the question supplies, and use them exactly'],
          ['3. Write the algorithm', 'One requirement at a time, in the order given, with loops clearly opened and closed'],
          ['4. Tick them off', 'Check each numbered bullet against a line of the answer before moving on'],
          ['5. Dry run it', 'Trace one set of values through by hand, which also catches outputs in the wrong place']
        ] },
        { kind: 'p', html: 'Writing code by hand is its own skill. Students who only ever type into an editor that indents and completes for them find a blank page slow and untidy, and CCEA marks what it can read. We set handwritten algorithm work in every group from the start, alongside the on-screen programming Unit 5 needs.' }
      ]
    },
    {
      id: 'unit5', tint: '', eyebrow: 'Unit 5',
      h2: 'Unit 5: what the moderators noted, and where we stop',
      lede: 'Digital Development Practice: a new scenario each June, 60 marks, up to 36 hours, marked in school and moderated by CCEA.',
      body: [
        { kind: 'table', caption: 'The 2025 moderators\' notes, task by task', head: ['Task', 'What moderators saw'], rows: [
          ['1. Design', 'Strong flowcharts and pseudo-code; user requirements sometimes copied from the task without being developed; user feedback to refine the design sometimes missing'],
          ['2. Build', 'High standard of programs; every solution must be annotated; the strongest considered robustness'],
          ['3. Test', 'Well-structured test tables, but extreme test data often missing; screenshots needed only to show corrective action, which some skipped'],
          ['4. Evaluate', 'Too often descriptive; the advice is to judge each user requirement as fully met, partially met or not met, and to treat performance, robustness and refinements in depth']
        ] },
        { kind: 'p', html: 'Two rules from the report shape how anyone outside the school should behave. "The use of templates is prohibited", and moderators encourage candidates to develop their own program style. CCEA also expects schools to practise on legacy tasks and practice tasks rather than rehearsing on the live scenario, and says "Extreme testing of data was lacking in a number of centres", a gap that practice fixes cheaply.' },
        { kind: 'two', mt: true,
          leftH3: 'What we do for Unit 5',
          left: [
            'Teach design with flowcharts and pseudo-code, validation and error trapping, annotated code, test tables with valid, invalid and extreme data, and evaluation against user requirements, on practice scenarios we write.',
            'Use Python or Java, whichever the school teaches. We have no general C# course; C# appears only in our Unity game course, so a family at a C# school should tell us in the first lesson.'
          ],
          rightH3: 'What we never do',
          right: [
            'Look at, discuss or help with the live controlled assessment task, or any work produced for it. The teacher signs that the work is the candidate\'s own and may not correct it in detail for a fair copy.',
            'Supply templates or model solutions of any kind, which CCEA prohibits in any case.'
          ] }
      ]
    },
    {
      id: 'core', tint: 'tint', eyebrow: 'Unit 1',
      h2: 'Unit 1, the compulsory core, in one hour',
      lede: 'Shared by both routes, worth 30 per cent, and broader than most students expect.',
      body: [
        { kind: 'p', html: 'Unit 1, Digital Technology, covers data storage and representation, networks, databases, spreadsheets, security, legislation and the wider effects of digital technology. The 2025 report found it answered well overall, with a few recurring gaps worth planning around.' },
        { kind: 'table', mt: true, caption: 'Unit 1 gaps in the 2025 report', head: ['Topic', 'What went wrong'], rows: [
          ['Start-up', 'Many could not identify the boot-up sequence when a computer is switched on'],
          ['Databases', 'Validation questions separated candidates; many lacked the knowledge'],
          ['Spreadsheets', 'Some could not describe VLOOKUP, and some wrote formulae with the wrong symbols'],
          ['Connected devices', 'Many could not expand the letters IoT'],
          ['Legislation', 'Titles not known precisely enough to earn the mark'],
          ['Health', 'Answers not tied to the situation described in the question']
        ] },
        { kind: 'p', html: 'Because at least 40 per cent of the assessment must be taken at the end of the course, schools plan when each unit is sat. For the step after the GCSE, <a class="ag-inline-link" href="/ccea-a-level-software-systems-development-help">the CCEA Software Systems Development page</a> covers the A level, and <a class="ag-inline-link" href="/coding-and-ai-classes-in-northern-ireland">the Northern Ireland page</a> sets out the two routes and the whole system from primary school up.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through Years 11 and 12',
    lede: 'Placement follows what a student can already write without help, on screen and on paper.',
    table: { caption: 'What a programming-route candidate should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Constructs', 'Year 10 or early Year 11', 'Variables, constants, selection, for and while loops, written unaided in Python or Java'],
      ['2. Arrays and algorithms', 'Year 11', 'One-dimensional arrays in loops with running totals, bubble and insertion sort, linear and binary search, by hand and on screen'],
      ['3. Data and testing', 'Year 11', 'Binary, hexadecimal and overflow, ASCII and Unicode, validation checks, test plans with valid, invalid and extreme data'],
      ['4. Exam habits', 'Year 12', 'Long questions answered against numbered bullets, given names used exactly, extended answers in precise terms']
    ] },
    left: { h3: 'Rung two is where 2025 slipped', ps: [
      'Arrays inside while loops were the weakest area in the report. Weekly handwritten practice closes the gap faster than anything else.',
      'The full order of topics runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Rung four is quick to learn', ps: [
      'The bullet-point routine takes a few weeks of practice and then pays on every long question.',
      'Lessons lighten during controlled assessment weeks and before the exams.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for the programming route',
    lede: 'Arranged by unit. The free lesson decides the first one.',
    bands: [
      { num: 'I', h3: 'Programming for Units 4 and 5', sub: 'The permitted languages', courses: [
        { code: 'UK / NI1 / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Constructs, arrays, functions and files, the Unit 5 toolkit in Python.' },
        { code: 'UK / NI1 / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'The same ground in Java, with the object-oriented ideas Unit 4 asks about.' },
        { code: 'UK / NI1 / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development in C#', blurb: 'Our only C# course, through Unity; useful for a C# school, though games are not the Unit 5 brief.' }
      ] },
      { num: 'II', h3: 'Algorithms and data', sub: 'Unit 4 theory', courses: [
        { code: 'UK / NI2 / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'Sorts, searches, arrays and trace tables, by hand first.' },
        { code: 'UK / NI2 / 02', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'Binary, hexadecimal, character sets and testing theory shared with Unit 4.' },
        { code: 'UK / NI2 / 03', slug: 'mysql-mastery-for-teens', title: 'MySQL for teens', blurb: 'Database design, data types and validation, which Unit 1 examines.' }
      ] },
      { num: 'III', h3: 'Core and beyond', sub: 'Unit 1 and the A level', courses: [
        { code: 'UK / NI3 / 01', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Cybercrime, threats and protection for the Unit 1 security questions.' },
        { code: 'UK / NI3 / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Spreadsheet formulae and lookups; pitched older, but it covers VLOOKUP properly.' },
        { code: 'UK / NI3 / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures, advanced', blurb: 'For students heading to A level Software Systems Development.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Paper first, then the screen',
    lede: 'Our teachers work from India on a clock that never changes, so Northern Ireland is four and a half hours behind in summer and five and a half in winter. Slots are fixed in UK time.',
    slots: [
      { time: 'After school', l: 'Most Year 11 and 12 students choose this.' },
      { time: 'Evening', l: 'Around sport, music or part-time work.' },
      { time: 'Saturday', l: 'Long enough for a timed Unit 4 section and its marking.' }
    ],
    cells: [
      { h3: 'Handwritten algorithms', p: 'Every week at least one algorithm written on paper against numbered bullet points, then marked the way the report describes.' },
      { h3: 'While loops on purpose', p: 'Arrays processed with while loops as well as for loops, with counters and running totals checked by dry run.' },
      { h3: 'Precise words', p: 'Extended answers rewritten until generic words like faster are replaced with the correct terms.' },
      { h3: 'Extreme test data', p: 'Every practice test table includes extreme data, the gap the moderators flagged.' },
      { h3: 'Our own scenarios', p: 'Unit 5 skills practised on briefs we write, never on the live task.' },
      { h3: 'Five to ten per group', p: 'Students at one rung, swapping and marking each other\'s handwritten answers.' }
    ]
  },

  projectsH2: 'Work from our students\' lessons',
  projectsLede: 'Four projects from classes, none of them assessed work. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, reproduced as written.',

  fees: {
    h2: 'Fees for CCEA lessons',
    lede: 'One monthly charge in US dollars, applied to every family outside India. The first lesson costs nothing, and nothing is billed until a course and a weekly slot are fixed.',
    free: ['A lesson on real CCEA-style questions', 'A clear view of the right rung', 'Just a phone number to book'],
    group: ['Five to ten students on one rung', 'The same teacher across Years 11 and 12', 'Handwritten algorithms marked weekly', 'Quieter weeks around controlled assessment'],
    one: ['A teacher for one student', 'A plan built back from the exam dates', 'Suits a C# school or a late start']
  },

  faq: {
    eyebrow: 'Questions about CCEA GCSE Digital Technology',
    h2: 'What families in Northern Ireland ask',
    items: [
      { q: 'How is the programming route assessed?', a: 'Unit 1 is a one-hour written exam worth 30 per cent. Unit 4 is a written exam of 1 hour 30 minutes worth 40 per cent. Unit 5 is a controlled assessment worth 30 per cent and 60 marks, done in up to 36 hours.' },
      { q: 'Is Unit 4 on screen?', a: 'No. It is an external written examination, so algorithms are written by hand. In 2025 it carried 120 marks across ten compulsory questions.' },
      { q: 'Where do candidates lose most marks in Unit 4?', a: 'According to CCEA\'s 2025 report: arrays processed inside loops, while loops, running totals, and not following the bullet-pointed requirements or the variable names a question supplies.' },
      { q: 'Which languages can be used in Unit 5?', a: 'Python, Java or C#, chosen by the school. The solution must be written in one of the three.' },
      { q: 'How often does the Unit 5 task change?', a: 'Every year. CCEA publishes a new scenario-based task in June, worth 60 marks and taking up to 36 hours.' },
      { q: 'What do moderators look for in testing?', a: 'Structured test tables with valid, invalid and extreme data, both black box and white box tests, and screenshots only where they show a correction. Extreme data was often missing in 2025.' },
      { q: 'Can a tutor help with the controlled assessment?', a: 'Not with the task itself. The teacher certifies the work as the candidate\'s own and may not correct it in detail. We teach the skills beforehand on our own scenarios and never see the live task.' },
      { q: 'What is in Unit 1?', a: 'Data representation and storage, networks, databases, spreadsheets, security, legislation and the effects of digital technology. It is shared with the multimedia route.' },
      { q: 'What comes after the GCSE?', a: 'CCEA offers A level Software Systems Development and A level Digital Technology. Our Software Systems Development page covers the first.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Then a single monthly fee in US dollars, lower for a group place than for one-to-one teaching, as listed in the fees section, with nothing paid ahead.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Further reading for Northern Ireland',
    lede: 'The system around the GCSE, the A level after it, and choosing at 14.',
    items: [
      { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Coding and AI classes in Northern Ireland', p: 'The two routes, the permitted languages, and the whole system.' },
      { href: '/ccea-a-level-software-systems-development-help', label: 'CCEA A level Software Systems Development', p: 'The programming A level that follows this route.' },
      { href: '/choosing-gcse-computer-science-year-9-options', label: 'Choosing computing at 14', p: 'What the evidence says about picking a computing GCSE.' },
      { href: '/sentinus-young-innovators-coding-help', label: 'Sentinus Young Innovators', p: 'Northern Ireland\'s science and technology showcase for young people.' },
      { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code, do not copy-paste it', p: 'AI tools and assessed work.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The hub for every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will phone at a UK time of your choosing. The lesson uses CCEA-style questions, one of them on paper, and ends with a rung to begin on.',
    readFirst: 'Rather read first? Each <a class="ag-inline-link" href="/courses">course page</a> carries its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> is candid about who the method suits, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> sets out the order.',
    note: 'WhatsApp is quickest and free from a UK phone. It rings our office in India, so the number starts +91.',
    formNote: 'No card or contract. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Northern Ireland', links: [
        { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Coding and AI in Northern Ireland' },
        { href: '/ccea-a-level-software-systems-development-help', label: 'A level Software Systems Development' },
        { href: '/sentinus-young-innovators-coding-help', label: 'Sentinus Young Innovators' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'More', links: [
        { href: '/understand-the-code-dont-copy-paste-uk', label: 'AI and assessed work' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'Coding roadmap' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'CCEA teaching, live, on UK time'
  },

  personalityCss: `
.ag-root.ag-ccdt .ag-hero h1 { letter-spacing: -0.022em; font-weight: 740; }
.ag-root.ag-ccdt .ag-capsule { border-left-width: 5px; border-top: 1px solid var(--ag-accent); }
.ag-root.ag-ccdt .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-ccdt .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-ccdt .ag-table td:first-child { font-weight: 620; }
.ag-root.ag-ccdt .ag-band-head h3 { letter-spacing: -0.014em; }
`,

  mustMention: ['Digital Development Concepts', 'Digital Development Practice', '120 marks', '36 hours', 'Python, Java or C#', 'align closely to the mark scheme', 'while loop', 'extreme', 'templates is prohibited', 'Unit 1'],

  dossier: {
    curriculumAuthority: 'Northern Ireland, CCEA GCSE Digital Technology (Programming). Specification, first teaching September 2017, updated 17 September 2019, QAN 603/1122/8: Unit 1 "External written examination 1 hour 30%"; Route B Programming: Unit 4 Digital Development Concepts "External written examination 1 hour 30 mins 40%", Unit 5 Digital Development Practice "Controlled assessment 30%"; "Students must take at least 40 percent of the assessment (based on unit weightings) at the end of the course as terminal assessment"; Unit 5 "Students must use one of the following languages in their completed solution: Python, Java or C#."; Unit 4 content including paradigms, ASCII (7-bit and 8-bit) and Unicode, overflow, truth tables, bubble and insertion sort, linear and binary search, one-dimensional arrays, validation "presence, length, type and format checks", white and black box testing, "valid, invalid and extreme" test data; controlled assessment "worth 60 marks and will take a maximum of 36 hours to complete"; task setting high, task taking medium, task marking medium; "We will publish a new scenario-based task for Unit 3 and Unit 5 in June each year"; teachers must not correct work in detail for a fair copy. CCEA GCSE Chief Examiner\'s and Principal Moderator\'s Report, Digital Technology, Summer Series 2025: Unit 4 "The total mark for the exam was 120 marks and the time allowed was 90 minutes", "ten compulsory questions", question types, Question 7 QWC "worth 6 marks"; "Candidates making use of generic terms will be unable to score in the top band."; "These requirements align closely to the mark scheme."; "where variable names are provided candidates must make use of them"; "only the first n, where n=the required number, will be accepted"; Unit 5: "The use of templates is prohibited."; "Extreme testing of data was lacking in a number of centres."; screenshots only for corrective action; evaluation to be structured by requirements fully met, partially met or not met; practice through legacy tasks. Unit 1 notes on boot-up sequence, validation, VLOOKUP, IoT, legislation titles, health concerns.',
    localProject: 'Code on paper, where the bullet points are the mark scheme. CCEA\'s programming route puts its largest unit, Unit 4, into a handwritten paper that in 2025 carried 120 marks in 90 minutes. The page is built on CCEA\'s 2025 Chief Examiner\'s report: it lays out the paper, what candidates did well (predicting output, logic errors, binary, test plans) and where marks leaked (arrays in loops, while loops, running totals, constants, Unicode versus ASCII, sorts, robustness data), then turns the report\'s most repeated advice, that bullet-pointed requirements align closely to the mark scheme and given variable names must be used, into a five-step routine for long questions. It covers Unit 5 through the Principal Moderator\'s notes task by task and draws the line on help (no live task, no templates, which CCEA prohibits), states honestly that we have no general C# course, and closes with the Unit 1 gaps the report found. The two-route fork and the language list are referenced to the Northern Ireland page rather than argued again. Lesson family: an exam report turned into a practice method.',
    requiredMentions: ['120 marks', 'align closely to the mark scheme', 'Python, Java or C#', 'templates is prohibited'],
    sources: [
      { claim: 'CCEA GCSE Digital Technology specification (2017, updated 17 September 2019): routes, units, durations and weightings, terminal rule, Unit 4 content, Unit 5 languages, and the controlled assessment rules.', url: 'https://ccea.org.uk/downloads/docs/Specifications/GCSE/GCSE%20Digital%20Technology%20(2017)/GCSE%20Digital%20Technology%20(2017)-specification-Standard_1.pdf' },
      { claim: 'CCEA GCSE Chief Examiner\'s and Principal Moderator\'s Report, Digital Technology, Summer Series 2025: the Unit 4 paper, strengths and weaknesses, the bullet-point and variable-name advice, the tick rule, the Unit 5 moderation notes, and the Unit 1 gaps.', url: 'https://ccea.org.uk/downloads/docs/ExamMod-Reports/GCSE/GCSE%20Digital%20Technology%20(2017)/2025/GCSE%20Digital%20Technology%20(2017)-Summer2025-Report.pdf' }
    ],
    rejectedClaims: [
      'That every Unit 4 paper carries 120 marks: stated only as the 2025 total from the report.',
      'Any content of a live Unit 5 task: not read, never used.',
      'A 2026 examiners\' report: not published at the checked address on 21 September 2026 (404).',
      'A general C# course: none exists; the page says so.',
      'Grade boundaries or pass rates: none read at a primary source.',
      'Any promise about a grade, and any work on controlled assessment, which we decline.'
    ]
  }
};
