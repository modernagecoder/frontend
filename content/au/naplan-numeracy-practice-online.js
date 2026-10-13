'use strict';
// NAPLAN numeracy practice (ag- exam door, Australia cluster Phase 1 preview, row 4).
// Facts read raw on 7 October 2026 at nap.edu.au (ACARA's NAPLAN site): key dates (2027 test window
// 10 to 22 March; 2028 15 to 27 March; 2029 14 to 26 March; practice tests in the assessment platform
// from Term 3, 2026; public demonstration site year-round), what's in the tests (numeracy strands,
// item types, the Years 7 and 9 non-calculator section), the NAPLAN test window page (9-day window;
// numeracy after conventions of language; numeracy durations Year 3 45 minutes, Year 5 50, Years 7
// and 9 65), tailored tests (testlets A, B, C, D, E, F; results from number correct and average
// difficulty), and proficiency level descriptions (Exceeding, Strong, Developing, Needs additional
// support). Practice questions are our own. Spine: front-end estimation and benchmark fractions
// (family checked free site-wide on 7 October 2026). No score or level is promised.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'NAPLAN NUMERACY', label: 'NAPLAN numeracy practice', blurb: 'How the online numeracy test works for Years 3, 5, 7 and 9, the 2027 dates, and an estimation habit worth building early.' },
  slug: 'naplan-numeracy-practice-online',
  code: 'nnp',
  accent: '#5A1827',
  accentRationale: 'NAPLAN numeracy: a deep muted claret (10.7:1 on #EDE7DA), at least 11 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'NAPLAN numeracy practice online',
  title: 'NAPLAN Numeracy Practice Online | Years 3, 5, 7 and 9',
  description: 'NAPLAN numeracy practice for Years 3, 5, 7 and 9: the 2027 test dates, how the tailored online test works, calculator rules, and original practice questions.',
  ogDescription: 'The NAPLAN numeracy test explained from ACARA\'s own pages: durations by year, the tailored testlet design, the Years 7 and 9 calculator rule, 2027 dates, and estimation practice we wrote ourselves.',
  twitterDescription: 'NAPLAN numeracy for Years 3, 5, 7 and 9: dates, test design and estimation practice.',
  pageName: 'NAPLAN Numeracy Practice Online',
  webPageDescription: 'A guide to NAPLAN numeracy for Australian families: what the test assesses, how long it runs in each year, how tailored testing works, the 2027 test window, proficiency levels, and original estimation practice for Years 3, 5, 7 and 9.',
  courseDescription: 'Live online maths classes for Australian primary and secondary students that build number sense, estimation and reasoning, the skills NAPLAN numeracy draws on, without promising any result.',
  crumbs: [{ name: 'Online maths tutoring in Australia', href: '/online-maths-tutoring-australia' }],
  crumbLabel: 'NAPLAN numeracy practice',
  navLinks: [
    { href: '#test', label: 'The test' },
    { href: '#tailored', label: 'Tailored design' },
    { href: '#dates', label: 'Dates' },
    { href: '#estimation', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; NAPLAN Years 3, 5, 7 and 9 &middot; Live online',
  h1: 'NAPLAN numeracy practice',
  lede: 'NAPLAN numeracy is a short online test, but it measures something that takes years to build: whether a child can reason with numbers rather than only follow steps. The questions change as a student answers, the Year 7 and 9 tests lock the calculator away for the first part, and the results come back as one of four proficiency levels. This page explains how the test actually works, using ACARA\'s own descriptions, gives the confirmed dates for 2027, and offers practice questions we wrote around one habit that helps in every year level: estimating before calculating. Nothing here promises a score. Good teaching shows up in NAPLAN as a by-product, not the other way round.',
  secondaryCta: { href: '#estimation', label: 'Try the practice questions' },
  wa: 'Hello Modern Age Coders, I would like a free maths class about number sense and NAPLAN numeracy.',
  heroNote: 'Facts from ACARA\'s NAPLAN site &middot; Original practice &middot; No score promises',
  spec: [
    ['Who sits it', 'Years 3, 5, 7 and 9'],
    ['2027 window', '10 to 22 March'],
    ['Design', 'Tailored: adapts as students answer'],
    ['Year 3', '45 minutes'],
    ['Year 5', '50 minutes'],
    ['Years 7 and 9', '65 minutes, calculator after a short section'],
    ['Results', 'Four proficiency levels'],
    ['We teach', 'Number sense and reasoning']
  ],
  capsuleQ: 'In short',
  capsule: 'NAPLAN numeracy is the national maths test for Years 3, 5, 7 and 9. It runs 45 minutes in Year 3, 50 in Year 5 and 65 in Years 7 and 9, where a short non-calculator section comes first. The tailored design adapts the questions to each student. In 2027 the test window is 10 to 22 March. Results are reported as four proficiency levels.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses that build what NAPLAN measures',
    lede: 'Number sense first, then the reasoning that the later testlets reward.',
    items: [
      { course: 'mental-maths-mastery-kids', code: 'NNP / 01', title: 'Mental maths for primary', note: 'Place value, estimation and quick reasoning: the ground Years 3 and 5 stand on.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'NNP / 02', title: 'Primary maths, all strands', note: 'Number, measurement, space and data in step with what Australian classrooms cover.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'NNP / 03', title: 'Years 7 to 9 maths', note: 'Fractions, ratios, algebra and geometry, with reasoning written out.' }
    ]
  },

  sections: [
    {
      id: 'test', tint: 'tint', eyebrow: 'What the numeracy test is',
      h2: 'One test, four year levels, five content strands',
      lede: 'Durations and rules are ACARA\'s, from the NAPLAN site, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'NAPLAN numeracy by year level', head: ['Year', 'Duration', 'Calculator'], rows: [
          ['Year 3', '45 minutes', 'No calculator section is described'],
          ['Year 5', '50 minutes', 'No calculator section is described'],
          ['Year 7', '65 minutes', 'A short non-calculator section first, then an online calculator'],
          ['Year 9', '65 minutes', 'A short non-calculator section first, then an online calculator']
        ] },
        { kind: 'two', mt: true,
          left: [
            'ACARA describes the numeracy tests as measuring students\' "application of mathematics knowledge, skills, procedures and processes" across the content strands of number, algebra, measurement, space, statistics and probability. Questions arrive as multiple choice, text entry and technology-enhanced items such as drag-and-drop and hot-spot.',
            'The questions are mostly built on skills taught in earlier years. ACARA notes that a few assess content from the year of testing and the following year, so a Year 5 student may see something they meet properly in Year 6.'
          ],
          right: [
            'In Years 7 and 9 the calculator rule shapes the whole test. The first section asks students to show arithmetic without help. Once they move on, an online calculator appears, and they cannot go back to the non-calculator section.',
            'NAPLAN is aligned with the Australian Curriculum: Mathematics. While states move from version 8.4 to version 9.0, ACARA says the tests assess skills common to both versions.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/whats-in-the-tests" rel="noopener" target="_blank">NAPLAN, What\'s in the tests</a>; <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/key-dates/naplan-test-window" rel="noopener" target="_blank">NAPLAN test window and durations</a>. Read at source on 7 October 2026; ACARA has no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'tailored', tint: 'deep', eyebrow: 'How the test adapts',
      h2: 'Tailored testing: three testlets, several pathways',
      lede: 'NAPLAN numeracy is not the same paper for everyone. The questions a student sees depend on how they answer, which changes how practice should be done.',
      body: [
        { kind: 'table', caption: 'The numeracy testlet design, as ACARA describes it', head: ['Stage', 'What happens'], rows: [
          ['First testlet', 'Every student at a year level starts with testlet A'],
          ['Second testlet', 'Answers in A decide the next set: less complex (B) or more complex (D); a low score in A leads to testlet C early, then B'],
          ['Final testlet', 'The second testlet decides the last one: highest complexity (F), average (E) or lowest (C)'],
          ['Scoring', 'Based on both the number of questions answered correctly and the average difficulty of the questions the student received']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The practical consequence is about care, not speed. A careless slip early in testlet A can send a capable student down a gentler pathway, and ACARA states that a student who answers the same number of questions correctly on a less complex pathway can receive a lower scale score.',
            'That is why our practice puts so much weight on checking an answer against an estimate. A check that takes ten seconds protects the pathway for the rest of the test.'
          ],
          right: [
            'Results are reported against four proficiency levels: Exceeding, Strong, Developing and Needs additional support. ACARA publishes descriptions of what students at each level typically show, by year and domain.',
            'The levels describe what a child could do on the day. They are a useful snapshot for a teacher, and a poor reason for drilling. Children who understand the mathematics tend to read the questions calmly, and that matters more than practice volume.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/understanding-online-assessment/tailored-tests" rel="noopener" target="_blank">NAPLAN, Tailored tests</a>; <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/results-and-reports/proficiency-level-descriptions" rel="noopener" target="_blank">NAPLAN proficiency level descriptions</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'dates', tint: 'tint', eyebrow: 'Key dates',
      h2: 'When NAPLAN runs in 2027, 2028 and 2029',
      lede: 'ACARA publishes test windows years ahead. Schools choose the exact days within the window.',
      body: [
        { kind: 'table', caption: 'NAPLAN test windows, as published on the NAPLAN key dates page', head: ['Year', 'Test window'], rows: [
          ['2027', '10 to 22 March'],
          ['2028', '15 to 27 March'],
          ['2029', '14 to 26 March']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Inside the window, ACARA sets the order: writing first, then reading, then conventions of language, then numeracy. Schools are asked to schedule tests as soon as possible within the window and to prefer mornings.',
            'If a student is absent, schools can run catch-up sessions later in the window. Exact days for any child come from their school, not from us.'
          ],
          right: [
            'Familiarisation is free and official. ACARA says schools can complete practice tests in the assessment platform from Term 3, 2026, and the public demonstration site offers sample questions year-round so students can see the item types before test week.',
            'We recommend that every student tries the public demonstration site once, simply to remove surprise about how drag-and-drop or text entry works on screen.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/key-dates" rel="noopener" target="_blank">NAPLAN key dates</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'estimation', tint: '', eyebrow: 'Practice we wrote',
      h2: 'Front-end estimation and benchmark fractions',
      lede: 'One habit runs through every year level: decide roughly what the answer should be before working it out. Front-end estimation uses the leading digits; benchmark fractions compare everything to a half or a whole.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Front-end estimation', p: 'Work with the leading digits first, then adjust. For 48 times 3, think 40 times 3 is 120 and 8 times 3 is 24, so about 144. The rough answer arrives before any written method.' },
          { h3: 'Benchmark fractions', p: 'Compare fractions to 0, a half and 1 before calculating. Five eighths is more than a half; three sevenths is less. The comparison is done without common denominators.' },
          { h3: 'The ten-second check', p: 'After calculating, set the answer beside the estimate. If they disagree by a factor of ten, a decimal point or a digit has slipped, and there is still time to fix it.' }
        ] },
        { kind: 'table', caption: 'Original practice questions by year level, with the estimate and the exact answer', head: ['Year', 'Question', 'Estimate first', 'Exact answer'], rows: [
          ['Year 3', 'A class receives 3 boxes of 48 pencils. About how many pencils is that?', '40 times 3 is 120, plus 8 times 3 is 24: about 144', '144'],
          ['Year 5', 'Which is larger, five eighths or three sevenths?', 'Five eighths is more than a half; three sevenths is less than a half', 'Five eighths'],
          ['Year 5', 'A 3.8 metre ribbon is cut into 4 equal pieces. About how long is each piece?', '3.8 is close to 4, and 4 shared by 4 is 1: just under 1 metre', '0.95 metres'],
          ['Year 7', 'Without a calculator: is seven twelfths plus five ninths more or less than 1?', 'Each fraction is more than a half, so the total is more than 1', 'More than 1 (it is 1 and 5 thirty-sixths)'],
          ['Year 7', 'Without a calculator: estimate 49 times 21.', '50 times 20 is 1,000; both numbers moved, so the answer is near 1,000', '1,029'],
          ['Year 9', 'A crowd of 23,847 people is 38 per cent under 18. About how many is that?', 'About 24,000 times two fifths: about 9,600, a little high because both numbers were rounded up', '9,062 (to the nearest person)'],
          ['Year 9', 'A calculator shows 8.4 for 2.4 times 0.35. Is that reasonable?', '2.4 is about 2 and 0.35 about a third, so the answer is under 1', 'No: the answer is 0.84, a slipped decimal point']
        ] },
        { kind: 'p', text: 'Notice what the estimates do. In the Year 9 calculator question, the student never needs to redo the multiplication to know something is wrong; the estimate alone catches a decimal point in the wrong place. In the Year 7 fraction question, no common denominator is needed to answer correctly. Those are exactly the moments the tailored design rewards, because a slip caught early keeps a student on the pathway their understanding deserves.' },
        { kind: 'p', text: 'We do not sell NAPLAN drilling, and we do not promise a proficiency level. Our classes teach the mathematics properly, with estimation and checking built in from the first lesson, and families tell us the test week feels calmer as a result.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Building number sense',
    h2: 'Four rungs from Year 3 to Year 9',
    lede: 'Where a child starts depends on how they reason with numbers, not on their year level.',
    table: { caption: 'Estimation and reasoning, rung by rung', head: ['Around', 'Rung', 'The sign it is secure'], rows: [
      ['Year 3', '1. Place value', 'Rounds to the nearest ten or hundred and explains why'],
      ['Year 5', '2. Front-end estimation', 'Estimates products and quotients before calculating'],
      ['Year 7', '3. Benchmarks', 'Compares fractions and percentages to a half and a whole without converting'],
      ['Year 9', '4. Reasonableness', 'Spots a wrong calculator answer from an estimate alone']
    ] },
    left: { h3: 'If maths feels stressful', ps: [
      'Anxiety about tests usually comes from not knowing whether an answer is right. Estimation gives a child a way to check, which changes how a test feels.',
      'Short, regular practice with talk about reasoning beats long sessions of worksheets.'
    ] },
    right: { h3: 'Beyond NAPLAN', ps: [
      'Students who enjoy the reasoning side often try the Australian Mathematics Competition, covered on our <a class="ag-inline-link" href="/australian-maths-trust-amc-aio-cat-preparation">Australian Maths Trust page</a>.',
      'The same habits carry into senior maths, where checking a result against an estimate saves marks in every exam.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine maths courses for Australian students',
    lede: 'Grouped by stage. Full syllabuses open from each card.',
    bands: [
      { num: 'I', h3: 'Years 3 to 5', sub: 'Number sense and fluency', courses: [
        { code: 'NNP / P / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense and estimation, not tricks.' },
        { code: 'NNP / P / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'All strands, taught with reasoning out loud.' },
        { code: 'NNP / P / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus mental maths', blurb: 'Visual calculation for younger learners who like structure.' }
      ] },
      { num: 'II', h3: 'Years 7 to 9', sub: 'Fractions to algebra', courses: [
        { code: 'NNP / S / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'Fractions, ratios, geometry and early algebra.' },
        { code: 'NNP / S / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations and expressions, understood rather than memorised.' },
        { code: 'NNP / S / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data, chance and the reasoning NAPLAN\'s later items use.' }
      ] },
      { num: 'III', h3: 'Stretch', sub: 'For keen problem solvers', courses: [
        { code: 'NNP / X / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problem solving for the AMC and beyond.' },
        { code: 'NNP / X / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving and computational thinking', blurb: 'Logic and patterns for curious primary students.' },
        { code: 'NNP / X / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Fast calculation methods, always checked against an estimate.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly classes, timed for Australian afternoons',
    lede: 'Our maths teachers are based in India, which sits behind every Australian capital. A 4 pm class in Brisbane, for instance, begins at 11.30 am India time, so primary-age slots straight after the school bell are simple to staff and simple to keep.',
    slots: [
      { time: 'Weekday after school', l: 'The usual choice for primary and middle years.' },
      { time: 'Weekend morning', l: 'For families who prefer a calmer start.' },
      { time: 'School holidays', l: 'Short catch-up blocks on a single topic.' }
    ],
    cells: [
      { h3: 'Reasoning out loud', p: 'Students explain how they know, not just what they got.' },
      { h3: 'Estimation built in', p: 'Every calculation starts with a rough answer and ends with a check.' },
      { h3: 'Classes of fifteen to twenty', p: 'Children grouped by what they can already do, so nobody waits and nobody is lost.' },
      { h3: 'Private lessons', p: 'Chosen when a child needs a particular gap closed or confidence rebuilt.' },
      { h3: 'Parents kept informed', p: 'A short note on what was covered and what to try at home.' },
      { h3: 'No promises', p: 'No proficiency level is promised. We teach the maths; the result is the child\'s.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Work our learners made for its own sake, with no test attached. The full gallery lives in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents in their own words, quoted exactly as they appear on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Australian families are billed monthly in US dollars, the same rate we charge everywhere outside India, with nothing to pay up front and freedom to stop at any month end.',
    free: ['A real lesson with a teacher', 'An honest view of where your child is', 'No card details'],
    group: ['Fifteen to twenty students at one level', 'The same teacher each week', 'Work reviewed and explained', 'A certificate at the end'],
    one: ['A teacher for one child', 'Focused on specific gaps', 'Flexible weekly times']
  },

  faq: {
    eyebrow: 'Questions about NAPLAN numeracy',
    h2: 'What Australian parents ask',
    items: [
      { q: 'What is NAPLAN numeracy?', a: 'It is the maths test within NAPLAN, the national assessment for students in Years 3, 5, 7 and 9. ACARA says it measures the application of mathematics knowledge, skills, procedures and processes across number, algebra, measurement, space, statistics and probability.' },
      { q: 'When is NAPLAN in 2027?', a: 'The 2027 test window is 10 to 22 March. Schools set the exact days within the window and run numeracy after the conventions of language test.' },
      { q: 'How long is the numeracy test?', a: '45 minutes in Year 3, 50 minutes in Year 5, and 65 minutes in Years 7 and 9.' },
      { q: 'Can students use a calculator?', a: 'In Years 7 and 9 the test has a short non-calculator section first, after which an online calculator is available. Students cannot return to the non-calculator section once they move on.' },
      { q: 'What is a tailored test?', a: 'The test adapts as a student answers. Everyone starts with testlet A, and the answers decide whether the next questions are less or more complex. Results depend on both the number answered correctly and how difficult those questions were.' },
      { q: 'What are the proficiency levels?', a: 'Results are reported as Exceeding, Strong, Developing or Needs additional support. ACARA publishes descriptions of each level by year and domain.' },
      { q: 'What is front-end estimation?', a: 'A way of estimating by working with the leading digits first and adjusting afterwards. It gives a rough answer quickly, so a calculated answer can be checked against it.' },
      { q: 'Where can my child try practice questions?', a: 'ACARA\'s public demonstration site has sample questions year-round, and schools can run practice tests in the assessment platform from Term 3, 2026. Our practice questions on this page are written by us.' },
      { q: 'Will your classes raise my child\'s NAPLAN result?', a: 'We do not promise any result or proficiency level. We teach number sense, estimation and reasoning properly, and those skills are what the test draws on.' },
      { q: 'What time would a class be for us?', a: 'We fix one weekly slot with you once the trial class is done, normally just after school in your state. Brisbane is four and a half hours ahead of India time all year, as Queensland has no daylight saving.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Australian families',
    lede: 'Maths beyond NAPLAN, competitions, and coding.',
    items: [
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'From Foundation year to senior maths, taught live.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Australian competitions calendar', p: 'Maths, coding and AI contests, month by month.' },
      { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMC and CAT preparation', p: 'Getting primary and middle-years students ready for AMT papers.' },
      { href: '/math-olympiad-amc-tutoring', label: 'Maths olympiad tutoring', p: 'For students who want harder problems.' },
      { href: '/maths-challenges', label: 'Maths challenges', p: 'Puzzles to try at home.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Where maths meets programming.' }
    ]
  },

  start: {
    h2: 'Start with a free maths class',
    lede: 'Tell us the year level and what feels hard right now. The free class works on number sense and reasoning, and ends with an honest view of next steps.',
    readFirst: 'Rather browse quietly? Every maths course is laid out on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson from start to finish.',
    note: 'A WhatsApp message tends to get the quickest reply. Our number carries the +91 Indian code: the school operates from India and keeps no premises in Australia.',
    formNote: 'No card, no obligation. One reply to arrange the class.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMT competitions' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/maths-challenges', label: 'Maths challenges' },
        { href: '/math-olympiad-amc-tutoring', label: 'Olympiad tutoring' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'We teach the maths; no NAPLAN result is promised'
  },

  personalityCss: `
.ag-root.ag-nnp .ag-hero-grid { gap: clamp(1rem, 2.8vw, 2.4rem); }
.ag-root.ag-nnp .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-nnp .ag-capsule { border-left-width: 5px; }
.ag-root.ag-nnp .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-nnp .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-nnp .ag-table th { letter-spacing: 0.015em; }
.ag-root.ag-nnp .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-nnp .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'ACARA, NAPLAN (nap.edu.au), read 7 October 2026. Key dates: 2027 10 to 22 March, 2028 15 to 27 March, 2029 14 to 26 March; "Schools can complete practice tests in the assessment platform from Term 3, 2026"; public demonstration site year-round. Test window page: 9-day window; numeracy "To be completed after the conventions of language test"; numeracy Year 3 45 minutes, Year 5 50 minutes, Year 7 65 minutes, Year 9 65 minutes. What\'s in the tests: numeracy measures "students\' application of mathematics knowledge, skills, procedures and processes"; strands number, algebra, measurement, space, statistics and probability; "Year 7 and 9 numeracy tests have 2 sections. There is a short non-calculator section". Tailored tests: testlet A, then B or D (low score in A: C early, then B), then F, E or C; results based on number correct and average difficulty. Proficiency levels: Exceeding, Strong, Developing, Needs additional support.',
    localProject: 'Original estimation practice across Years 3, 5, 7 and 9: front-end estimation (48 times 3; 49 times 21), benchmark fractions (five eighths against three sevenths; seven twelfths plus five ninths against 1), measurement (3.8 metres in four pieces), percentage of a crowd (38 per cent of 23,847, exact 9,062 to the nearest person) and a calculator reasonableness check (2.4 times 0.35 shown as 8.4, exact 0.84).',
    requiredMentions: ['10 to 22 March', '15 to 27 March', '14 to 26 March', 'testlet A', 'Needs additional support', 'front-end estimation', 'benchmark fractions', 'non-calculator section', 'public demonstration site', '9,062'],
    sources: [
      { claim: 'NAPLAN key dates: test windows 2027 to 2029, practice tests from Term 3, 2026, public demonstration site.', url: 'https://www.nap.edu.au/naplan/key-dates' },
      { claim: 'NAPLAN test window: 9-day window, test order and durations by year.', url: 'https://www.nap.edu.au/naplan/key-dates/naplan-test-window' },
      { claim: 'NAPLAN, What\'s in the tests: numeracy strands, item types, Years 7 and 9 non-calculator section, curriculum alignment.', url: 'https://www.nap.edu.au/naplan/whats-in-the-tests' },
      { claim: 'NAPLAN tailored tests: testlet pathways and how results are calculated.', url: 'https://www.nap.edu.au/naplan/understanding-online-assessment/tailored-tests' },
      { claim: 'NAPLAN proficiency level descriptions: Exceeding, Strong, Developing, Needs additional support.', url: 'https://www.nap.edu.au/naplan/results-and-reports/proficiency-level-descriptions' }
    ],
    rejectedClaims: [
      'Number of questions in each numeracy test: not stated on the pages read, so not given.',
      'Any national results, averages or percentages at each proficiency level: not quoted.',
      'Whether the Year 3 numeracy test is on paper or online: the pages read mark only the Year 3 writing test as paper, so the page does not state the Year 3 numeracy format beyond its duration.',
      'Any claim that practice or tutoring raises a NAPLAN result or level: refused.',
      'Any affiliation with ACARA: none, stated on the page.'
    ]
  }
};
