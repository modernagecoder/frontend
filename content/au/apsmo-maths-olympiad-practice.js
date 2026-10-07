'use strict';
// APSMO Maths Olympiad practice (ag- competition door, Australia cluster Phase 3, row 93).
// Facts read raw on 7 October 2026 at apsmo.edu.au, fetched with curl's default user agent: About Us
// (Australasian Problem Solving Mathematical Olympiads, not-for-profit, established 1987, affiliated
// with MOEMS, over 100,000 students), Maths Olympiad Years 5-6 page (Junior Division, Division J, since
// 1987; 2026 contest dates 6 May, 10 June, 29 July and 9 September; four contests about six weeks
// apart from early Term 2; 5 questions, 1 mark each, 30 minutes; school registration only, teams of up
// to 30), its FAQs (Preparation Kit in Term 1; integrity rules including that teachers "are prohibited
// from teaching to the upcoming Maths Olympiad questions"), and the Years 7-8 page (Senior Division,
// Division S). Team fees are not printed. Spine: working backwards, with original problems; family
// checked free site-wide on 7 October 2026. Arithmetic checked forwards by us.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'APSMO OLYMPIAD', label: 'APSMO Maths Olympiad practice', blurb: 'The APSMO Maths Olympiad for Years 5 to 8 from APSMO\'s own pages, its integrity rules, and the working-backwards strategy taught with our own problems.' },
  slug: 'apsmo-maths-olympiad-practice',
  code: 'apsm',
  accent: '#663939',
  accentRationale: 'APSMO practice: a muted terracotta brown chosen by hand, at least 10 RGB from every accent in content and stylesheets and above 4.8:1 on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'APSMO Maths Olympiad practice',
  title: 'APSMO Maths Olympiad Practice | Years 5 to 8 Problem Solving',
  description: 'APSMO Maths Olympiad practice for Years 5 to 8: four contests, five questions in 30 minutes, the 2026 dates and integrity rules, and strategies on our own problems.',
  ogDescription: 'The APSMO Maths Olympiad explained from APSMO\'s own pages: Division J and Division S, four contests a year, five questions in 30 minutes, school entry only, and the working-backwards strategy.',
  twitterDescription: 'APSMO Maths Olympiad practice for Years 5 to 8, with strategies taught on our own problems.',
  pageName: 'APSMO Maths Olympiad Practice',
  webPageDescription: 'A guide for Australian families and teachers to the APSMO Maths Olympiad for Years 5 to 8: who runs it, the 2026 contest dates, format and entry rules, the integrity conditions that govern preparation, and a lesson on working backwards using original problems.',
  courseDescription: 'Live online problem-solving classes for Australian students in Years 5 to 8 that teach general strategies such as working backwards, organised lists and patterns, using our own problems.',
  crumbs: [{ name: 'Australian competitions calendar', href: '/australian-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'APSMO Maths Olympiad practice',
  navLinks: [
    { href: '#about', label: 'About APSMO' },
    { href: '#format', label: 'Format' },
    { href: '#integrity', label: 'Integrity' },
    { href: '#backwards', label: 'Strategy' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; APSMO Maths Olympiad &middot; Years 5 to 8',
  h1: 'APSMO Maths Olympiad practice',
  lede: 'The APSMO Maths Olympiad is a schools competition for capable students in Years 5 to 8: four short contests across the year, each just five questions in thirty minutes, sat in the classroom and marked by the teacher. Five questions sounds easy until you meet them. Each one rewards a strategy rather than a procedure, which is why the competition suits children who enjoy thinking more than calculating. This page sets out the format and dates from APSMO\'s own pages, explains the integrity rules that shape how anyone may prepare, and teaches one general strategy, working backwards, with problems we wrote ourselves. We are an independent online school with no connection to APSMO.',
  secondaryCta: { href: '#backwards', label: 'Try the strategy' },
  wa: 'Hello Modern Age Coders, I would like a free problem-solving class for the APSMO Maths Olympiad.',
  heroNote: 'Format from APSMO\'s own pages &middot; Problems are ours &middot; Checked on 7 October 2026',
  spec: [
    ['Run by', 'APSMO, a not-for-profit'],
    ['Divisions', 'J (Years 5 and 6), S (Years 7 and 8)'],
    ['Contests', 'Four a year, about six weeks apart'],
    ['Each contest', '5 questions, 1 mark each, 30 minutes'],
    ['2026 dates', '6 May, 10 June, 29 July, 9 September'],
    ['Entry', 'Schools only; teams of up to 30'],
    ['Marked by', 'The teacher, results sent to APSMO'],
    ['We teach', 'General strategies, our own problems']
  ],
  capsuleQ: 'In short',
  capsule: 'The APSMO Maths Olympiad is an inter-school problem-solving competition run by the Australasian Problem Solving Mathematical Olympiads, a not-for-profit established in 1987. Division J is for Years 5 and 6 and Division S for Years 7 and 8. Students sit four contests a year, each of 5 questions worth 1 mark in 30 minutes. In 2026 they fell on 6 May, 10 June, 29 July and 9 September. Only schools can enter.',

  picks: {
    eyebrow: 'For olympiad problem solving',
    h2: 'Three courses for APSMO-age students',
    lede: 'Strategy-based problem solving for Years 5 to 8, at three depths.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'APSM / 01', title: 'Problem-solving strategies', note: 'Working backwards, organised lists, patterns and logical elimination, practised on fresh problems every week.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'APSM / 02', title: 'Years 5 to 8 maths', note: 'Fractions, ratios, number properties and geometry, the content olympiad problems quietly rely on.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'APSM / 03', title: 'Competition maths', note: 'For students who want harder problems and longer arguments beyond the school contests.' }
    ]
  },

  sections: [
    {
      id: 'about', tint: 'tint', eyebrow: 'Who runs it',
      h2: 'APSMO and its programs',
      lede: 'From APSMO\'s About Us and program pages, read on 7 October 2026.',
      body: [
        { kind: 'two',
          left: [
            'APSMO describes itself as "a not-for-profit, professional organisation established in 1987". The initials stand for Australasian Problem Solving Mathematical Olympiads. It says it is affiliated with MOEMS, the Mathematical Olympiads for Elementary and Middle Schools in the United States, and that over 100,000 students take part in its programs each year across Australia and New Zealand.',
            'The Maths Olympiad is one of several APSMO programs. The others named on its site are Maths Quest for Years 1 and 2, Maths Explorer for Years 3 and 4, and Maths Games for Years 5 and 6 and for Years 7 and 8.'
          ],
          right: [
            'APSMO draws a clear line between them. The Maths Games, it says, are "specifically designed to provide mainstream students" with a chance to learn problem-solving skills, while the Olympiad is "an ideal format for high achieving students to work in a competitive environment with challenging questions".',
            'For the Years 7 and 8 contest, APSMO is blunter still: "The Maths Olympiad is not a teaching program". It is a competition, and the teaching is meant to happen around it.'
          ] },
        { kind: 'source', html: 'Sources: APSMO <a class="ag-inline-link" href="https://apsmo.edu.au/about-us/" rel="noopener" target="_blank">About Us</a>, <a class="ag-inline-link" href="https://apsmo.edu.au/competitions-programs/maths-olympiad-years-5-6/faqs-olympiad-years-5-6/" rel="noopener" target="_blank">Maths Olympiad Years 5 and 6 FAQs</a> and <a class="ag-inline-link" href="https://apsmo.edu.au/competitions-programs/maths-olympiad-years-7-8/" rel="noopener" target="_blank">Maths Olympiad Years 7 and 8</a>, read on 7 October 2026. We are independent of APSMO.' }
      ]
    },
    {
      id: 'format', tint: 'deep', eyebrow: 'The competition',
      h2: 'Four contests, five questions, thirty minutes',
      lede: 'The format is the same in both divisions. These details are from APSMO\'s Maths Olympiad pages.',
      body: [
        { kind: 'table', caption: 'APSMO Maths Olympiad, as published for 2026', head: ['Detail', 'Division J', 'Division S'], rows: [
          ['Year levels', 'Years 5 and 6', 'Years 7 and 8 (and up to Year 9 in New Zealand)'],
          ['Running since', 'In Australia since 1987', 'Not stated on the page read'],
          ['2026 contests', 'Wednesday 6 May, Wednesday 10 June, Wednesday 29 July, Wednesday 9 September', 'The same four Wednesdays'],
          ['Each contest', '5 questions, 1 mark each, 30 minutes', '5 questions, 1 mark each, 30 minutes'],
          ['Conditions', 'Individual, exam conditions in the classroom, no collaboration', 'The same'],
          ['Marking', 'By the teacher in charge, results submitted to APSMO', 'The same']
        ] },
        { kind: 'two', mt: true,
          left: [
            'APSMO says the four contests are held "approximately six weeks apart, starting in early Term 2" and that "students are required to complete all four contests". After each paper it recommends reviewing and discussing the solutions as a group.',
            'Entry is only through schools. "Individual registration is not possible", APSMO states, and registration is open to schools in Australia and New Zealand and to Australian International Schools. Schools can enter any number of teams of up to 30 students. Team fees are in Australian dollars, so we do not print them.'
          ],
          right: [
            'With only five marks per contest, every question matters, and twenty marks across the year decide the final picture. Thirty minutes for five questions is about six minutes each, which is generous for some and tight for others; reading carefully is worth more than speed.',
            'Dates for 2027 were not on the pages when we checked. The 2026 pattern, early Term 2 through to September, is a useful guide; your school will confirm the real dates.'
          ] },
        { kind: 'source', html: 'Source: APSMO <a class="ag-inline-link" href="https://apsmo.edu.au/competitions-programs/maths-olympiad-years-5-6/" rel="noopener" target="_blank">Maths Olympiad Years 5 and 6</a> and <a class="ag-inline-link" href="https://apsmo.edu.au/competitions-programs/maths-olympiad-years-7-8/" rel="noopener" target="_blank">Years 7 and 8</a> pages, read on 7 October 2026.' }
      ]
    },
    {
      id: 'integrity', tint: 'tint', eyebrow: 'How preparation must work',
      h2: 'APSMO\'s integrity rules, and what they mean for tutoring',
      lede: 'APSMO publishes strict conditions to keep the contests fair. Any honest preparation has to respect them.',
      body: [
        { kind: 'table', caption: 'APSMO\'s integrity conditions for the Maths Olympiad, quoted from its FAQ', head: ['Condition', 'APSMO\'s wording'], rows: [
          ['Exam conditions', '"Maths Olympiad contests must be conducted in examination conditions."'],
          ['Papers kept closed', 'Contest papers are not provided to schools until the week of the contest'],
          ['No early access', '"Students are not to have access to the Maths Olympiad questions, answers or solution methods prior to sitting the contest."'],
          ['No teaching to the test', 'Teachers "are prohibited from teaching to the upcoming Maths Olympiad questions. This includes intentionally providing preparation questions that are very similar to the actual questions."'],
          ['Re-examination', 'APSMO "reserves the right to re-examine students prior to determining the final Awards."']
        ] },
        { kind: 'two', mt: true,
          left: [
            'These rules shape everything we do for APSMO students. We teach general problem-solving strategies on problems we write ourselves. We never see contest papers before a contest, never try to predict upcoming questions, and never set practice designed to resemble them.',
            'That is not a limitation. The Olympiad is built to reward flexible thinking on unfamiliar problems, and drilling look-alike questions would not build that even if it were allowed.'
          ],
          right: [
            'APSMO provides its own preparation material to schools. Its FAQ says schools receive a Preparation Kit in Term 1 with a practice paper and detailed solutions, and that teachers can access the previous year\'s papers through the members\' area.',
            'Families should therefore ask the school about practice. What we add is steady teaching of the strategies underneath: working backwards, organised lists, looking for patterns, drawing a diagram and checking an answer against the question.'
          ] },
        { kind: 'source', html: 'Quotations: APSMO <a class="ag-inline-link" href="https://apsmo.edu.au/competitions-programs/maths-olympiad-years-5-6/faqs-olympiad-years-5-6/" rel="noopener" target="_blank">Maths Olympiad Years 5 and 6 FAQs</a>, read on 7 October 2026.' }
      ]
    },
    {
      id: 'backwards', tint: '', eyebrow: 'A general strategy',
      h2: 'Working backwards, on problems we wrote',
      lede: 'When a problem tells you the end result and the steps that led to it, the fastest route is often to start at the end and undo each step. These problems are ours and are not based on any APSMO paper.',
      body: [
        { kind: 'table', caption: 'Two original problems solved by working backwards, each checked forwards', head: ['Problem', 'Undo the steps', 'Check forwards'], rows: [
          ['A number is doubled, then 6 is added, then the result is divided by 4. The answer is 9. What was the number?', '9 times 4 is 36; 36 minus 6 is 30; 30 halved is 15', '15 doubled is 30, plus 6 is 36, divided by 4 is 9'],
          ['Ana gives Ben half of her marbles, then gives him 3 more, and has 5 left. How many did she start with?', '5 plus 3 is 8; she had given away half, so she started with twice 8, which is 16', '16, give away 8, leaves 8; give 3 more, leaves 5']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Each operation is undone by its opposite, in reverse order: dividing becomes multiplying, adding becomes subtracting, halving becomes doubling. The order matters as much as the operations. Undoing the steps in the original order gives the wrong answer, which is the most common slip we see.',
            'The check forwards is not optional. It takes ten seconds and catches almost every mistake, and in a five-question contest a single caught mistake is a fifth of the marks.'
          ],
          right: [
            'Compare working backwards with guessing and checking on the first problem. A student guessing 10, then 12, then 14, then 15 needs four trials to land on the answer, and has no guarantee of stopping. Working backwards gets there in three steps, every time, and shows why the answer is right.',
            'Guess and check still has its place, especially when steps cannot be reversed. Good problem solvers know several strategies and choose between them, which is what our classes practise, always on fresh problems.'
          ] },
        { kind: 'source', html: 'Problems and solutions are ours, checked forwards by hand and in Python on 7 October 2026. No APSMO question is reproduced or imitated.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A strategy toolkit',
    h2: 'Five strategies for olympiad-style problems',
    lede: 'Students build these one at a time. Each strategy is practised until choosing it feels natural.',
    table: { caption: 'Problem-solving strategies we teach, in the order we teach them', head: ['Strategy', 'When it helps', 'The sign it is secure'], rows: [
      ['Draw a diagram', 'Shapes, distances, arrangements', 'Draws before calculating, without being told'],
      ['Organised list', 'Counting possibilities', 'Lists every case once, in an order that shows none are missing'],
      ['Look for a pattern', 'Sequences and repeated steps', 'Predicts the next case and then checks it'],
      ['Work backwards', 'An end result is given', 'Undoes steps in reverse order and checks forwards'],
      ['Guess, check, refine', 'Steps cannot be reversed', 'Each new guess is better informed than the last']
    ] },
    left: { h3: 'If your child finds the problems hard', ps: [
      'That is expected; the Olympiad is designed to stretch high achievers. Discussing solutions afterwards, as APSMO recommends, is where most learning happens.',
      'Encourage drawing and writing, even when the answer seems obvious.'
    ] },
    right: { h3: 'Other contests', ps: [
      'Our <a class="ag-inline-link" href="/australian-mathematics-competition-practice-by-year">AMC by year page</a> covers the Australian Maths Trust\'s competition.',
      'The <a class="ag-inline-link" href="/maths-challenge-for-young-australians-practice">Maths Challenge page</a> covers a module with written solutions.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Years 5 to 8 problem solvers',
    lede: 'Grouped by depth. Each card opens a full outline.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Confident with numbers', courses: [
        { code: 'APSM / F / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, reliable number sense.' },
        { code: 'APSM / F / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Every strand, reasoning out loud.' },
        { code: 'APSM / F / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Fast calculation, always checked.' }
      ] },
      { num: 'II', h3: 'Problem solving', sub: 'Strategies and content', courses: [
        { code: 'APSM / P / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem-solving strategies', blurb: 'A strategy a fortnight, on fresh problems.' },
        { code: 'APSM / P / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'Fractions to early algebra.' },
        { code: 'APSM / P / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'When working backwards becomes equations.' }
      ] },
      { num: 'III', h3: 'Stretch', sub: 'For the keenest', courses: [
        { code: 'APSM / X / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Harder problems and full arguments.' },
        { code: 'APSM / X / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Testing patterns with Python.' },
        { code: 'APSM / X / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and chance, carefully.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live problem-solving classes for Years 5 to 8',
    lede: 'Our teachers work from India, behind every Australian time zone. A 4 pm lesson in Adelaide during daylight saving begins at 11 am India time, so after-school sessions are simple for us to keep.',
    slots: [
      { time: 'Term 1', l: 'Building strategies before the first contest.' },
      { time: 'Weekly through the year', l: 'One strategy, several fresh problems.' },
      { time: 'Holiday sessions', l: 'A short block on one strategy.' }
    ],
    cells: [
      { h3: 'Strategy named', p: 'Students say which strategy they chose and why.' },
      { h3: 'Always checked', p: 'Every answer is checked against the question.' },
      { h3: 'Groups of five to ten', p: 'Children at a similar problem-solving stage.' },
      { h3: 'One-to-one option', p: 'For students who want a faster pace.' },
      { h3: 'Short parent notes', p: 'The strategy of the week and a problem to try.' },
      { h3: 'Fair play', p: 'We never use or imitate contest papers.' }
    ]
  },

  projectsH2: 'Projects our students made',
  projectsLede: 'Learners\' own work, outside any contest. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' reviews, quoted from Google word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Australian families are charged monthly in US dollars, the same rate we use everywhere outside India, with nothing to pay up front and freedom to stop at any month end. APSMO entry is arranged and paid by schools.',
    free: ['A real lesson with a teacher', 'An honest view of problem-solving level', 'No payment details'],
    group: ['Five to ten students at one stage', 'The same teacher each week', 'Solutions discussed in depth', 'A certificate at the end'],
    one: ['A teacher for one student', 'Paced to suit them', 'A weekly time you choose']
  },

  faq: {
    eyebrow: 'Questions about the APSMO Maths Olympiad',
    h2: 'What Australian families ask',
    items: [
      { q: 'What is the APSMO Maths Olympiad?', a: 'An inter-school problem-solving competition for capable students in Years 5 to 8, run by the Australasian Problem Solving Mathematical Olympiads, a not-for-profit established in 1987.' },
      { q: 'What are Division J and Division S?', a: 'Division J is the Junior Division for Years 5 and 6. Division S is the Senior Division for Years 7 and 8, and up to Year 9 in New Zealand.' },
      { q: 'How many contests are there?', a: 'Four a year, about six weeks apart, starting in early Term 2. In 2026 they were on 6 May, 10 June, 29 July and 9 September. Students must complete all four.' },
      { q: 'How long is each contest?', a: '30 minutes for 5 questions, each worth 1 mark, sat individually under exam conditions and marked by the teacher.' },
      { q: 'Can my child enter on their own?', a: 'No. APSMO states that individual registration is not possible; schools register teams of up to 30 students.' },
      { q: 'Can you coach my child on the contest questions?', a: 'No. APSMO prohibits teaching to the upcoming questions, including practice that is very similar to them. We teach general strategies on our own problems.' },
      { q: 'What is working backwards?', a: 'A strategy for problems that give the final result and the steps that produced it. You start at the end and undo each step in reverse order, then check by working forwards.' },
      { q: 'How is the Olympiad different from the Maths Games?', a: 'APSMO describes the Maths Games as designed for mainstream students to learn problem-solving skills, and the Olympiad as a competitive format for high achievers.' },
      { q: 'Where does practice material come from?', a: 'APSMO sends schools a Preparation Kit in Term 1 with a practice paper and solutions. Ask the school; our classes add strategy teaching around it.' },
      { q: 'Are you part of APSMO?', a: 'No. We are an independent online school, quoting APSMO because it runs the competition.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More maths competitions in Australia',
    lede: 'Other contests for the same age group and our maths pages.',
    items: [
      { href: '/australian-mathematics-competition-practice-by-year', label: 'AMC practice by year', p: 'The Australian Maths Trust\'s competition.' },
      { href: '/maths-challenge-for-young-australians-practice', label: 'Maths Challenge practice', p: 'Written solutions over several weeks.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Every contest by month.' },
      { href: '/naplan-year-7-numeracy-practice', label: 'NAPLAN Year 7 numeracy', p: 'The national test in the same years.' },
      { href: '/maths-challenges', label: 'Maths challenges', p: 'Puzzles to try at home.' },
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia', p: 'Our main maths page for Australia.' }
    ]
  },

  start: {
    h2: 'Book a free problem-solving class',
    lede: 'Tell us the year level and whether your child sits the APSMO Olympiad at school. The free class teaches one strategy on our own problems and ends with honest advice.',
    readFirst: 'Prefer to look first? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> has every course, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson.',
    note: 'WhatsApp usually gets the quickest reply. The number begins +91 because the school runs from India and has no Australian address.',
    formNote: 'No card and no obligation. One reply to set it up.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/australian-mathematics-competition-practice-by-year', label: 'AMC by year' },
        { href: '/maths-challenge-for-young-australians-practice', label: 'Maths Challenge' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' },
        { href: '/maths-challenges', label: 'Maths challenges' }
      ] }
    ],
    bottomRight: 'Independent of APSMO; we never use or imitate contest papers'
  },

  personalityCss: `
.ag-root.ag-apsm .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-apsm .ag-capsule { border-left-width: 6px; }
.ag-root.ag-apsm .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-apsm .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-apsm .ag-grid-2 p { line-height: 1.62; }
.ag-root.ag-apsm .ag-spec dt { letter-spacing: 0.06em; }
`,

  dossier: {
    curriculumAuthority: 'APSMO pages read 7 October 2026 with curl\'s default user agent. About Us: "The Australasian Problem Solving Mathematical Olympiads (APSMO) is a not-for-profit, professional organisation established in 1987."; affiliated with MOEMS (Mathematical Olympiads for Elementary and Middle Schools); over 100,000 students across Australia and New Zealand each year. Maths Olympiad Years 5-6: Junior Division (Division J), running in Australia since 1987; 2026 Competition One Wednesday 6 May, Two Wednesday 10 June, Three Wednesday 29 July, Four Wednesday 9 September; "Individual registration is not possible."; schools in Australia and New Zealand and Australian International Schools; teams of up to 30; "four separate contests held approximately six weeks apart, starting in early Term 2"; "Students are required to complete all four contests."; 5 questions, 1 mark each, 30 minutes; individual, exam conditions, teacher marks and submits. Years 7-8: Senior Division (Division S), Years 7 and 8 (and up to Year 9 in New Zealand); "The Maths Olympiad is not a teaching program". FAQs: Preparation Kit in Term 1 with practice paper and solutions; previous year\'s papers in the Member\'s Area; Maths Games "specifically designed to provide mainstream students"; Olympiad "an ideal format for high achieving students to work in a competitive environment with challenging questions"; integrity conditions 1-5 quoted.',
    localProject: 'Original working-backwards problems: doubled, plus 6, divided by 4 gives 9, so the number is 15 (9 x 4 = 36, 36 - 6 = 30, 30 / 2 = 15; checked forwards); Ana gives half her marbles then 3 more and has 5 left, so she started with 16 (5 + 3 = 8, 8 x 2 = 16; checked forwards). Guess and check takes four trials (10, 12, 14, 15) on the first problem.',
    requiredMentions: ['Australasian Problem Solving Mathematical Olympiads', 'Division J', 'Division S', 'Preparation Kit', 'Individual registration is not possible', 'working backwards', 'Wednesday 29 July', 'teaching to the upcoming'],
    sources: [
      { claim: 'APSMO About Us: name, not-for-profit, established 1987, MOEMS affiliation, over 100,000 students.', url: 'https://apsmo.edu.au/about-us/' },
      { claim: 'APSMO Maths Olympiad Years 5-6: Division J, since 1987, 2026 dates, format, entry rules.', url: 'https://apsmo.edu.au/competitions-programs/maths-olympiad-years-5-6/' },
      { claim: 'APSMO Maths Olympiad Years 5-6 FAQs: Preparation Kit, Maths Games comparison, integrity conditions.', url: 'https://apsmo.edu.au/competitions-programs/maths-olympiad-years-5-6/faqs-olympiad-years-5-6/' },
      { claim: 'APSMO Maths Olympiad Years 7-8: Division S, year levels, "not a teaching program", 2026 dates.', url: 'https://apsmo.edu.au/competitions-programs/maths-olympiad-years-7-8/' }
    ],
    rejectedClaims: [
      'Team fees: AUD, not printed (one-currency rule).',
      'Award thresholds for individual and team awards: on a separate awards page not read, so not stated.',
      'Any APSMO question, or practice designed to resemble upcoming questions: refused, in line with APSMO\'s integrity conditions.',
      '2027 contest dates: not published when checked.',
      'Any award promise: refused.'
    ]
  }
};
