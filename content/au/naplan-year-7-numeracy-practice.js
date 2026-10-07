'use strict';
// NAPLAN Year 7 numeracy practice (ag- exam door, Australia cluster Phase 3, row 42).
// Facts read raw on 7 October 2026 at nap.edu.au: test window page ("Year 7: 65 minutes"; numeracy after
// conventions of language), what's in the tests ("Year 7 and 9 numeracy tests have 2 sections. There is a
// short non-calculator section, in which students are required to demonstrate arithmetical calculation
// skills. For the remainder of the test, an online calculator is available."), key dates (2027 window 10 to
// 22 March), and the Year 7 numeracy proficiency level descriptions (quoted lines below).
// Lesson family: the double number line for proportion and percentages (checked free site-wide on
// 7 October 2026). Parent page: /naplan-numeracy-practice-online. No score or level is promised.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'NAPLAN YEAR 7', label: 'NAPLAN Year 7 numeracy', blurb: 'The 65-minute Year 7 test with its short non-calculator section, what ACARA describes from Developing to Exceeding, and the double number line for proportion.' },
  slug: 'naplan-year-7-numeracy-practice',
  code: 'nysv',
  accent: '#184874',
  accentRationale: 'Year 7 numeracy: a deep harbour blue (7.7:1 on #EDE7DA), at least 10 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'NAPLAN Year 7 numeracy practice',
  title: 'NAPLAN Year 7 Numeracy Practice | Calculator Rules, Levels',
  description: 'NAPLAN Year 7 numeracy practice: the 65-minute test, how its non-calculator section works, the Year 7 levels, and double number line questions with full answers.',
  ogDescription: 'Year 7 NAPLAN numeracy explained from ACARA: the short non-calculator section, the jump to secondary-school maths in the proficiency descriptions, and proportion practice on a double number line.',
  twitterDescription: 'Year 7 NAPLAN numeracy: the calculator rule, the levels and proportion practice.',
  pageName: 'NAPLAN Year 7 Numeracy Practice',
  webPageDescription: 'A Year 7 guide to NAPLAN numeracy for Australian families: the 65-minute test and its non-calculator opening, what ACARA describes at each proficiency level in Year 7, and original proportion and percentage practice on a double number line.',
  courseDescription: 'Live online maths classes for Australian students in Years 6 to 8 covering fractions, percentages, ratio, integers and early algebra, taught for understanding rather than for a NAPLAN level.',
  crumbs: [{ name: 'NAPLAN numeracy practice', href: '/naplan-numeracy-practice-online' }],
  crumbLabel: 'Year 7 numeracy',
  navLinks: [
    { href: '#year7', label: 'Year 7 test' },
    { href: '#calculator', label: 'Calculator rule' },
    { href: '#levels7', label: 'Levels' },
    { href: '#dnl', label: 'Double number line' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; NAPLAN Year 7 numeracy &middot; Live online',
  h1: 'NAPLAN Year 7 numeracy practice',
  lede: 'Year 7 NAPLAN arrives a few weeks into secondary school, and it is the first numeracy test that splits in two. Students begin with a short section where no calculator is allowed, then move to the rest of the test with an online calculator, and they cannot go back. Proportion and percentages run through the Year 7 descriptions at every level from Developing up, so this page teaches one tool that makes them visible: the double number line. Practice questions are ours, answers are worked in full, and we teach numeracy only. No proficiency level is promised.',
  secondaryCta: { href: '#dnl', label: 'Try the proportion questions' },
  wa: 'Hello Modern Age Coders, I would like a free maths class for my Year 7 child, on fractions, percentages and ratio.',
  heroNote: 'Year 7 facts from ACARA &middot; Practice written by us &middot; Numeracy only',
  spec: [
    ['Year level', 'Year 7'],
    ['Numeracy time', '65 minutes'],
    ['Structure', 'Short non-calculator section, then calculator'],
    ['Going back', 'Not possible after the first section'],
    ['2027 window', '10 to 22 March'],
    ['Our focus', 'Proportion, percentages, integers'],
    ['Not covered', 'Literacy tests'],
    ['Promise', 'None about results']
  ],
  capsuleQ: 'In short',
  capsule: 'The Year 7 NAPLAN numeracy test lasts 65 minutes. It opens with a short non-calculator section where students show arithmetic; after that an online calculator is available for the rest of the test. It runs inside the national window, 10 to 22 March in 2027. At the Strong level ACARA lists, among other things, calculating fractions and percentages of a quantity and solving problems involving a simple proportion.',

  picks: {
    eyebrow: 'A good place to start',
    h2: 'Three courses for the move to secondary maths',
    lede: 'Picked for the ideas the Year 7 descriptions keep returning to.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'NY7 / 01', title: 'Years 7 to 9 maths', note: 'Fractions, percentages, ratio, integers and geometry, step by step.' },
      { course: 'algebra-foundations-masterclass', code: 'NY7 / 02', title: 'Algebra foundations', note: 'Number sentences, unknowns and equivalent expressions, made sensible.' },
      { course: 'statistics-probability-maths-course', code: 'NY7 / 03', title: 'Statistics and probability', note: 'Data displays and chance, including the percentage forms Year 7 uses.' }
    ]
  },

  sections: [
    {
      id: 'year7', tint: 'tint', eyebrow: 'The Year 7 numeracy test',
      h2: 'Sixty-five minutes at the start of secondary school',
      lede: 'ACARA\'s details, read on the NAPLAN site on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Year 7 numeracy in one table', head: ['Item', 'As ACARA puts it'], rows: [
          ['Time allowed', '65 minutes'],
          ['Position in the test week', 'Done once conventions of language is finished'],
          ['Sections', 'Two: a short non-calculator section, then the remainder with an online calculator'],
          ['Content', 'Number, algebra, measurement, space, statistics and probability, as the curriculum strands'],
          ['Item formats', 'Multiple choice, typed answers, drag-and-drop and hot-spot'],
          ['2027 dates', '10 to 22 March']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Year 7 is the first year that NAPLAN tests secondary-school content for many students, but ACARA builds most questions on skills from earlier years. A small number reach into the current and following year, so a Year 7 student may meet an idea their class covers later in the year.',
            'In states where Year 7 is the first year of high school, students sit NAPLAN in a new building, with new teachers, often in their first term. Familiarity with the format matters more in Year 7 than in any other year.'
          ],
          right: [
            'The test is tailored. Every student begins on the same first testlet, and their answers decide whether the next set is more or less complex. A slip in the non-calculator section can steer a capable student onto an easier path.',
            'That is why checking in the first section is worth more than speed. Ten seconds spent confirming 15 per cent of 60 is 9 protects every question that follows.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/key-dates/naplan-test-window" rel="noopener" target="_blank">NAPLAN test window</a>; <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/whats-in-the-tests" rel="noopener" target="_blank">What\'s in the tests</a>; <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/understanding-online-assessment/tailored-tests" rel="noopener" target="_blank">Tailored tests</a>. Checked on 7 October 2026. We are not connected with ACARA in any way.' }
      ]
    },
    {
      id: 'calculator', tint: 'deep', eyebrow: 'The calculator rule',
      h2: 'Why the first section changes how to prepare',
      lede: 'ACARA\'s wording: "There is a short non-calculator section, in which students are required to demonstrate arithmetical calculation skills. For the remainder of the test, an online calculator is available."',
      body: [
        { kind: 'two',
          leftH3: 'What the rule means',
          left: [
            'The non-calculator section comes first and is short. Once a student moves past it, the online calculator appears for the remaining questions, and the first section is closed to them.',
            'So mental and written arithmetic is tested directly, at the very start, when nerves are highest. Percentages of round numbers, fraction of a quantity, and order of operations are typical of what a student should be able to do without a device.'
          ],
          rightH3: 'How we prepare for it',
          right: [
            'Build friendly benchmarks: 10 per cent, 5 per cent, a quarter, a half. Almost every non-calculator percentage question is a combination of these.',
            'Practise estimating before using a calculator in the second section. An online calculator is only as reliable as the keys pressed, and an estimate catches a misplaced decimal point instantly.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/whats-in-the-tests" rel="noopener" target="_blank">NAPLAN, What\'s in the tests: Year 7 and Year 9 tests</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'levels7', tint: 'tint', eyebrow: 'Year 7 proficiency levels',
      h2: 'Proportion appears at every level from Developing up',
      lede: 'Lines quoted from ACARA\'s Year 7 numeracy descriptions; we chose which lines to show.',
      body: [
        { kind: 'table', caption: 'Selected Year 7 numeracy descriptions (ACARA wording)', head: ['Level', 'The student can (selected)'], rows: [
          ['Needs additional support', 'calculate a simple fraction of a quantity; read time to the nearest minute and calculate duration'],
          ['Developing', 'convert between fractions, decimals and percentages; express a simple word problem as a number sentence and determine the value of an unknown'],
          ['Strong', 'calculate fractions and percentages of a quantity; solve problems involving a simple proportion; locate points on the Cartesian plane'],
          ['Exceeding', 'connect equivalent fractions, decimals and percentages; solve problems involving proportion in context; solve problems involving 24-hour time within a time zone']
        ] },
        { kind: 'p', text: 'Follow the proportion thread down the levels and it grows: from a fraction of a quantity, to converting between fractions, decimals and percentages, to simple proportion, to proportion in context. The double number line below supports every one of those steps, because it shows two quantities growing together on the same picture.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/results-and-reports/proficiency-level-descriptions" rel="noopener" target="_blank">NAPLAN proficiency level descriptions, Numeracy Year 7</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'dnl', tint: '', eyebrow: 'Practice we wrote',
      h2: 'The double number line',
      lede: 'Draw two parallel lines. Mark one quantity on the top line and the matching quantity on the bottom line, starting from zero on both. Anything you do to one line (halve it, add a tenth) you do to the other.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Percentages', p: 'Top line 0 to 240 students, bottom line 0 to 100 per cent. Mark 10 per cent at 24, so 30 per cent is 72 and 5 per cent is 12.' },
          { h3: 'Rates', p: 'Top line 0 to 150 km, bottom line 0 to 120 minutes. Halve both: 75 km in 60 minutes. Now any time can be found.' },
          { h3: 'Scales', p: 'Top line centimetres on a map, bottom line kilometres on the ground. 2 cm matches 5 km, so 1 cm matches 2.5 km.' }
        ] },
        { kind: 'table', caption: 'Original Year 7 practice with the double number line steps', head: ['Question', 'Section', 'Marks on the double number line', 'Answer'], rows: [
          ['What is 15 per cent of 60?', 'Non-calculator', '100% at 60, 10% at 6, 5% at 3', '9'],
          ['35 per cent of the 240 students in Year 7 walk to school. How many is that?', 'Non-calculator', '10% at 24, 30% at 72, 5% at 12', '84'],
          ['18 out of 72 people chose basketball. What percentage is that?', 'Either', '72 at 100%, half is 36 at 50%, half again is 18 at 25%', '25 per cent'],
          ['A recipe uses 3 cups of flour for 12 pancakes. How much flour for 20 pancakes?', 'Either', '12 pancakes at 3 cups, 4 pancakes at 1 cup, 20 pancakes at 5 cups', '5 cups'],
          ['On a map 2 cm stands for 5 km. Two towns are 7 cm apart on the map. How far apart are they?', 'Either', '2 cm at 5 km, 1 cm at 2.5 km, 7 cm at 17.5 km', '17.5 km'],
          ['A bus covers 150 km in 2 hours at a steady speed. How far does it go in 50 minutes?', 'Calculator', '120 min at 150 km, 60 min at 75 km, 10 min at 12.5 km, 50 min at 62.5 km', '62.5 km']
        ] },
        { kind: 'p', text: 'The first two questions are written for the non-calculator section on purpose. Both are answered entirely from 10 per cent and 5 per cent benchmarks, which a double number line makes automatic. The bus question looks harder, but on the double line it is three halvings and one subtraction; a calculator only confirms it.' },
        { kind: 'p', text: 'A useful check for every proportion answer: the two lines must stay in the same order. If 50 minutes produced more than 75 km, the answer would have crossed the 60-minute mark, which cannot be right.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Proportional reasoning',
    h2: 'Four rungs across Years 6 to 8',
    lede: 'A student climbs at their own speed. The year levels are only signposts.',
    table: { caption: 'Proportion, rung by rung', head: ['Rung', 'Looks like', 'Secure once a student can'], rows: [
      ['1. Fraction of a quantity', 'Finds a quarter or a third of a number', 'Find three quarters of 48 without a written method'],
      ['2. Benchmarks', 'Uses 10, 5, 25 and 50 per cent', 'Find 35 per cent of 240 mentally'],
      ['3. Double number line', 'Draws matching scales for two quantities', 'Solve the pancake question by halving and scaling'],
      ['4. Proportion in context', 'Chooses the method for rates, scales and percentages', 'Explain why the bus answer must be under 75 km']
    ] },
    left: { h3: 'Settling into secondary school', ps: [
      'Year 7 brings new teachers, new rooms and a new timetable just weeks before NAPLAN. Keeping maths routines steady at home helps.',
      'If your child is anxious, practise only the non-calculator benchmarks. Quick wins there make the rest of the test feel manageable.'
    ] },
    right: { h3: 'Before and after Year 7', ps: [
      'Year 5 strategies such as compensation still matter; see <a class="ag-inline-link" href="/naplan-year-5-numeracy-practice">NAPLAN Year 5 numeracy</a>.',
      'Year 9 moves on to algebra and checking equations; our <a class="ag-inline-link" href="/naplan-year-9-numeracy-practice">Year 9 numeracy page</a> covers it.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses for the middle years',
    h2: 'Maths courses for Years 6 to 8',
    lede: 'Sorted by what a student is working on. Every card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Number and proportion', sub: 'Fractions, percentages, ratio', courses: [
        { code: 'NY7 / P / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'The Years 7 to 9 curriculum, taught with reasons.' },
        { code: 'NY7 / P / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Benchmarks and estimation for the non-calculator section.' },
        { code: 'NY7 / P / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Fast mental methods with built-in checks.' }
      ] },
      { num: 'II', h3: 'Algebra and data', sub: 'Unknowns, expressions, graphs', courses: [
        { code: 'NY7 / A / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'From number sentences to equations.' },
        { code: 'NY7 / A / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Displays, chance and percentages.' },
        { code: 'NY7 / A / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Breaking problems into clear steps.' }
      ] },
      { num: 'III', h3: 'Stretch', sub: 'For students racing ahead', courses: [
        { code: 'NY7 / X / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Contest problems for confident students.' },
        { code: 'NY7 / X / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'An early look at Years 9 and 10.' },
        { code: 'NY7 / X / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths review', blurb: 'Filling earlier gaps quickly and without fuss.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'What lessons look like',
    h2: 'Live classes that fit a secondary-school week',
    lede: 'Our teachers are based in India, which runs behind every Australian state. In Sydney during daylight saving, a 5 pm class starts at 11.30 am India time, so slots after school and sport are easy to hold.',
    slots: [
      { time: 'Early evening', l: 'After sport and homework, for most Year 7 students.' },
      { time: 'Weekend morning', l: 'A calmer option during busy terms.' },
      { time: 'Holiday catch-up', l: 'Focused blocks on fractions or percentages.' }
    ],
    cells: [
      { h3: 'Draw it first', p: 'Students sketch a double number line before reaching for a calculator.' },
      { h3: 'Benchmarks daily', p: 'Ten per cent and five per cent become second nature.' },
      { h3: 'Five to ten students', p: 'Grouped by what they can do now, not by age alone.' },
      { h3: 'One-to-one lessons', p: 'For specific gaps from primary school or a fresh start.' },
      { h3: 'Parents kept in the loop', p: 'A short summary after each block of lessons.' },
      { h3: 'No NAPLAN promise', p: 'We teach mathematics; the result is the student\'s own.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Projects made out of curiosity rather than for marks. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, quoted exactly.',

  fees: {
    h2: 'Fees',
    lede: 'We bill Australian families monthly in US dollars, our standard rate outside India. No deposit is needed, and you may stop at the end of any month.',
    free: ['A complete lesson with a teacher', 'An honest assessment of where things stand', 'No card needed'],
    group: ['Five to ten students working at one level', 'A consistent teacher', 'Marked work with explanations', 'Certificate at the end'],
    one: ['One teacher, one student', 'Work aimed at particular gaps', 'Flexible weekly time']
  },

  faq: {
    eyebrow: 'Questions about Year 7 NAPLAN numeracy',
    h2: 'Year 7 families often ask',
    items: [
      { q: 'How long is the Year 7 NAPLAN numeracy test?', a: '65 minutes, sat after the conventions of language test within the national window.' },
      { q: 'Can Year 7 students use a calculator in NAPLAN?', a: 'Only after the first part. The test opens with a short non-calculator section; for the remainder an online calculator is available, and students cannot return to the first section.' },
      { q: 'When is Year 7 NAPLAN in 2027?', a: 'Within the national window of 10 to 22 March 2027, on a day set by the school.' },
      { q: 'What is a double number line?', a: 'Two parallel number lines that show two quantities growing together, such as students and per cent, or kilometres and minutes. Whatever is done to one line is done to the other, which makes proportion visible.' },
      { q: 'What does Strong look like in Year 7?', a: 'ACARA lists skills including calculating fractions and percentages of a quantity, solving problems involving a simple proportion, and locating points on the Cartesian plane.' },
      { q: 'What should my child practise for the non-calculator section?', a: 'Benchmarks such as 10 per cent, 5 per cent, a quarter and a half, fraction of a quantity, and order of operations. These cover most arithmetic a student must show without a device.' },
      { q: 'Is Year 7 NAPLAN harder than Year 5?', a: 'It covers more content and adds the calculator split, but ACARA builds most questions on skills from earlier years, with a few that reach ahead.' },
      { q: 'Do you cover reading and writing?', a: 'No. Our classes are mathematics only.' },
      { q: 'Can lessons guarantee a level?', a: 'No. We never promise a level or score; we teach the maths that the test draws on.' },
      { q: 'What time would classes be in Sydney?', a: 'We set one weekly time after the free trial. During daylight saving Sydney is five and a half hours ahead of India time, so 5 pm in Sydney is 11.30 am India time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'For Year 7 families',
    lede: 'NAPLAN across the years, coding and maths support.',
    items: [
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy overview', p: 'All four year levels and the testlet design.' },
      { href: '/naplan-year-9-numeracy-practice', label: 'NAPLAN Year 9 numeracy', p: 'Algebra and the next calculator test.' },
      { href: '/coding-for-year-7-australia', label: 'Coding for Year 7', p: 'Programming in the Years 7 and 8 curriculum.' },
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia', p: 'Live lessons for every year.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Contests worth a try in Year 7.' },
      { href: '/maths-challenges', label: 'Maths challenges', p: 'Puzzles beyond the syllabus.' }
    ]
  },

  start: {
    h2: 'Try a free Year 7 maths class',
    lede: 'Tell us what your child is finding hard, whether fractions, percentages or the new pace of secondary school. The trial lesson starts there.',
    readFirst: 'Browsing first? Compare every maths course on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, or read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> for a lesson in detail.',
    note: 'WhatsApp usually brings the quickest reply. Our number begins with India\'s +91, since we teach from there and keep no premises in Australia.',
    formNote: 'No card, no commitment. We reply once to arrange it.'
  },

  footer: {
    cols: [
      { h4: 'NAPLAN numeracy', links: [
        { href: '/naplan-numeracy-practice-online', label: 'All year levels' },
        { href: '/naplan-year-3-numeracy-practice', label: 'Year 3' },
        { href: '/naplan-year-5-numeracy-practice', label: 'Year 5' },
        { href: '/naplan-year-9-numeracy-practice', label: 'Year 9' }
      ] },
      { h4: 'For Year 7', links: [
        { href: '/coding-for-year-7-australia', label: 'Coding for Year 7' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Year 7 maths taught for understanding; no level promised'
  },

  personalityCss: `
.ag-root.ag-nysv .ag-hero-grid { gap: clamp(1rem, 2.5vw, 2.2rem); }
.ag-root.ag-nysv .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-nysv .ag-capsule { border-left-width: 5px; }
.ag-root.ag-nysv .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-nysv .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-nysv .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-nysv .ag-spec dt { letter-spacing: 0.09em; }
.ag-root.ag-nysv .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'ACARA, NAPLAN (nap.edu.au), read 7 October 2026. Test window: "Year 7: 65 minutes"; numeracy after conventions of language. What\'s in the tests: "Year 7 and 9 numeracy tests have 2 sections. There is a short non-calculator section, in which students are required to demonstrate arithmetical calculation skills. For the remainder of the test, an online calculator is available." Key dates: 2027 window 10 to 22 March. Proficiency level descriptions, Numeracy Year 7 (quoted): Needs additional support "calculate a simple fraction of a quantity", "read time to the nearest minute and calculate duration"; Developing "convert between fractions, decimals and percentages", "express a simple word problem as a number sentence and determine the value of an unknown"; Strong "calculate fractions and percentages of a quantity", "solve problems involving a simple proportion", "locate points on the Cartesian plane"; Exceeding "connect equivalent fractions, decimals and percentages", "solve problems involving proportion in context", "solve problems involving 24-hour time within a time zone". Time zones: Sydney observes daylight saving (AEDT, UTC+11) from the first Sunday in October; India time UTC+5:30.',
    localProject: 'Original Year 7 double number line practice: 15 per cent of 60 is 9; 35 per cent of 240 is 84; 18 of 72 is 25 per cent; 3 cups for 12 pancakes scales to 5 cups for 20; a 2 cm to 5 km map scale gives 17.5 km for 7 cm; 150 km in 2 hours gives 62.5 km in 50 minutes. Questions are labelled for the non-calculator or calculator section.',
    requiredMentions: ['double number line', 'calculate fractions and percentages of a quantity', 'solve problems involving a simple proportion', 'solve problems involving proportion in context', 'convert between fractions, decimals and percentages', '62.5 km', '17.5 km', '35 per cent of the 240 students', '3 cups of flour for 12 pancakes'],
    sources: [
      { claim: 'NAPLAN test window: Year 7 numeracy 65 minutes, after conventions of language.', url: 'https://www.nap.edu.au/naplan/key-dates/naplan-test-window' },
      { claim: 'NAPLAN, What\'s in the tests: the Year 7 and 9 non-calculator section and online calculator.', url: 'https://www.nap.edu.au/naplan/whats-in-the-tests' },
      { claim: 'NAPLAN tailored tests.', url: 'https://www.nap.edu.au/naplan/understanding-online-assessment/tailored-tests' },
      { claim: 'NAPLAN proficiency level descriptions, Numeracy Year 7.', url: 'https://www.nap.edu.au/naplan/results-and-reports/proficiency-level-descriptions' },
      { claim: 'NAPLAN key dates: 2027 window.', url: 'https://www.nap.edu.au/naplan/key-dates' }
    ],
    rejectedClaims: [
      'Length or number of questions in the non-calculator section: ACARA says only that it is short, so no figure is given.',
      'Percentage discount questions: left out so that no currency appears on the page.',
      'Any national results for Year 7: not quoted.',
      'Any promise that lessons raise a level: refused.',
      'Literacy test preparation: not offered.'
    ]
  }
};
