'use strict';
// SA Ignite program assessment: Mathematical Reasoning practice (ag- exam door, Australia cluster Phase 3,
// row 50). The SA Department for Education site (education.sa.gov.au) returned 403 to an automated read on
// 7 October 2026 and was not circumvented. Facts were instead read raw the same day from two SA Department
// for Education schools that run Ignite: Glenunga International High School (gihs.sa.edu.au, Ignite page:
// "a Department for Education Special Interest School"; Ignite "funded by the Department of Education";
// offered at three schools; running since 1997; "The ACER Ignite Assessment will be held on 20 February 2027
// for Year 6 students entering Year 7 the following year."; ACER Portal registrations open Monday 2 November
// 2026; four parts over about 3 hours with a break: Reading Comprehension, Mathematical Reasoning, Abstract
// Reasoning, Written Expression; marked by ACER in Melbourne; eligibility rules) and Aberfoyle Park High
// School (aphs.sa.edu.au: "IGNITE is a year 7 to 10 specialist learning program catered to the needs of
// gifted students."; "All students can apply for the IGNITE program regardless of zone.").
// Lesson family: colouring arguments, checkerboard invariants (checked free site-wide, 7 October 2026).
// Puzzles are our own. No admissions or school-choice advice. No result promised.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'SA IGNITE', label: 'SA Ignite assessment maths', blurb: 'The ACER Ignite Assessment sat in Year 6 for South Australia\'s gifted program, its Mathematical Reasoning part, and colouring puzzles that prove things impossible.' },
  slug: 'sa-ignite-entry-maths-practice',
  code: 'saig',
  accent: '#9C1824',
  accentRationale: 'SA Ignite: a deep crimson (6.6:1 on #EDE7DA), at least 13 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'SA Ignite assessment maths practice',
  title: 'SA Ignite Assessment Maths Practice | Year 6, Reasoning',
  description: 'SA Ignite assessment for Year 6: the four-part ACER test including Mathematical Reasoning, the 20 February 2027 date, and original colouring-argument puzzles.',
  ogDescription: 'South Australia\'s Ignite program assessment, described from Ignite schools\' own pages, with checkerboard colouring puzzles that teach how mathematicians prove something cannot happen.',
  twitterDescription: 'SA Ignite assessment: the format, the 2027 date and colouring-argument puzzles.',
  pageName: 'SA Ignite Assessment Maths Practice',
  webPageDescription: 'A guide for South Australian families to the ACER Ignite Assessment for the Ignite gifted program: its four parts and timing from Ignite schools\' pages, the 2027 assessment date, and original colouring-argument puzzles with full reasoning.',
  courseDescription: 'Live online maths and reasoning classes for South Australian students in Years 5 and 6, building proof, pattern and problem solving from the curriculum rather than coaching for any assessment.',
  crumbs: [{ name: 'Online maths tutoring in Australia', href: '/online-maths-tutoring-australia' }],
  crumbLabel: 'SA Ignite maths',
  navLinks: [
    { href: '#ignite', label: 'The program' },
    { href: '#assessment', label: 'The assessment' },
    { href: '#colour', label: 'Colouring arguments' },
    { href: '#proof', label: 'Why proof matters' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'South Australia &middot; Ignite program &middot; Year 6 assessment',
  h1: 'SA Ignite assessment maths practice',
  lede: 'Ignite is South Australia\'s special interest program for gifted students, run at three government high schools. Entry for Year 7 starts with the ACER Ignite Assessment in Year 6: four parts over about three hours, one of them Mathematical Reasoning. This page gives the facts as Ignite schools publish them, including the February 2027 date, and then teaches a beautiful piece of mathematical reasoning that suits curious Year 5 and 6 students: colouring a board to prove that something can never happen. You will find no advice here about applying or choosing a school, and no promise of any result.',
  secondaryCta: { href: '#colour', label: 'Try the colouring puzzles' },
  wa: 'Hello Modern Age Coders, I would like a free maths and reasoning class for my Year 5 or 6 child in South Australia.',
  heroNote: 'Facts from SA Ignite schools &middot; Puzzles written by us &middot; No admissions advice',
  spec: [
    ['Program', 'Ignite, for gifted students'],
    ['Years', 'Ignite program, Years 7 to 10'],
    ['Assessment', 'ACER Ignite Assessment'],
    ['Sat in', 'Year 6'],
    ['Next date', '20 February 2027'],
    ['Length', 'About 3 hours, four parts'],
    ['Maths part', 'Mathematical Reasoning'],
    ['Marked by', 'ACER']
  ],
  capsuleQ: 'In short',
  capsule: 'The ACER Ignite Assessment is the test for entry to South Australia\'s Ignite program for gifted students, sat in Year 6 for Year 7. Glenunga International High School lists it on 20 February 2027, with ACER Portal registrations opening on 2 November 2026. It has four parts over about three hours: Reading Comprehension, Mathematical Reasoning, Abstract Reasoning and Written Expression.',

  picks: {
    eyebrow: 'For curious minds',
    h2: 'Three courses for able Years 5 and 6 students',
    lede: 'Mathematics that rewards curiosity, wherever a child goes next.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'SAI / 01', title: 'Competition maths', note: 'Proof, invariants and unusual problems, explored with care.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'SAI / 02', title: 'Problem solving and logic', note: 'Reasoning steps written out and explained.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'SAI / 03', title: 'Upper-primary maths', note: 'The curriculum taught deeply, as a base for reasoning.' }
    ]
  },

  sections: [
    {
      id: 'ignite', tint: 'tint', eyebrow: 'The Ignite program',
      h2: 'A gifted program at three South Australian schools',
      lede: 'As described by two Ignite schools on 7 October 2026. The SA Department for Education site blocked our automated read, so we relied on its schools\' pages.',
      body: [
        { kind: 'two',
          left: [
            'Glenunga International High School describes itself as "a Department for Education Special Interest School" offering programs for students with high intellectual potential through Ignite. Its page says the program is funded by the Department of Education, supports identified gifted and talented students, and has been running since 1997.',
            'The same page names the three schools offering it: "Glenunga International High School, The Heights High School, and Aberfoyle Park High School."'
          ],
          right: [
            'Aberfoyle Park High School describes IGNITE as "a year 7 to 10 specialist learning program catered to the needs of gifted students", and states that "All students can apply for the IGNITE program regardless of zone."',
            'Glenunga\'s page notes that its Ignite students follow enrichment or accelerated pathways. How each school organises its classes is a question for the school itself.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://gihs.sa.edu.au/specialist-programs/ignite/" rel="noopener" target="_blank">Glenunga International High School, Ignite</a>; <a class="ag-inline-link" href="https://aphs.sa.edu.au/programs/ignite/" rel="noopener" target="_blank">Aberfoyle Park High School, IGNITE</a>. Checked on 7 October 2026. We have no connection with these schools, the Department or ACER.' }
      ]
    },
    {
      id: 'assessment', tint: 'deep', eyebrow: 'The assessment',
      h2: 'Four parts, about three hours, marked by ACER',
      lede: 'From Glenunga International High School\'s Ignite page, read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'ACER Ignite Assessment for Year 7 entry in 2028', head: ['Detail', 'As the school publishes it'], rows: [
          ['Date', '20 February 2027, for Year 6 students entering Year 7 the following year'],
          ['Registration', 'Via the ACER Portal, opening Monday 2 November 2026'],
          ['Length', 'Four parts over approximately 3 hours, with a break'],
          ['Parts', 'Reading Comprehension; Mathematical Reasoning; Abstract Reasoning; Written Expression'],
          ['Marking', 'Test materials are sent to ACER in Melbourne'],
          ['Who can sit', 'Students in Year 6; Year 5 students only with a principal\'s letter of recommendation'],
          ['How often', 'Once, at one Ignite School']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The school pages we read do not publish the length or number of questions in the Mathematical Reasoning part, so we do not guess at them. Families should take format details from the school and ACER at registration.',
            'Rural and interstate students may, with principal approval, be able to sit the assessment at their primary school; students living outside Australia cannot register, according to Glenunga\'s page.'
          ],
          right: [
            'Because the assessment is designed to identify high intellectual potential, we see little value in drilling for it. What helps an able child is enjoying problems that need reasoning rather than routine, and learning to explain why an answer must be right.',
            'Our classes teach mathematics in that spirit. They are not Ignite coaching, and in the free trial we say honestly whether a child needs anything at all.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://gihs.sa.edu.au/specialist-programs/ignite/" rel="noopener" target="_blank">Glenunga International High School, Registrations for Year 7 in 2028</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'colour', tint: '', eyebrow: 'Puzzles we wrote',
      h2: 'Colouring arguments: proving something is impossible',
      lede: 'Colour a board like a chessboard, in alternating dark and light squares. Many moves, tiles and paths must always switch colour or always cover one of each. Counting colours can then prove that a task can never be done, without trying every possibility.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Colour first', p: 'Shade the grid in a checkerboard pattern. Every square now has exactly one colour, and neighbours always differ.' },
          { h3: 'Find what never changes', p: 'A domino always covers one dark and one light square. A step to a neighbouring square always changes colour.' },
          { h3: 'Count and compare', p: 'If the task needs equal numbers of each colour and the board has unequal numbers, the task is impossible.' }
        ] },
        { kind: 'table', caption: 'Original puzzles solved with colouring', head: ['Puzzle', 'The colouring idea', 'Answer'], rows: [
          ['An 8 by 8 board has two opposite corners removed. Can 31 dominoes cover the remaining 62 squares?', 'Opposite corners share a colour, leaving 30 of one colour and 32 of the other; each domino covers one of each', 'No'],
          ['Can dominoes exactly cover a 5 by 5 board?', '25 squares is odd, and every domino covers 2', 'No'],
          ['A 4 by 4 board loses the two corners at the ends of its top row. Does colouring rule out a domino covering?', 'Those corners are different colours, leaving 7 of each, so colouring cannot rule it out', 'No; and a covering does exist'],
          ['A knight jumps around a chessboard. Can it return to its start in an odd number of moves?', 'Every knight move changes colour, so it is back on its starting colour only after an even number of moves', 'No'],
          ['On a 3 by 3 grid, a path visits every square once, stepping to neighbours. Can it start on an edge square that is not a corner?', 'Shade corners and centre dark: 5 dark, 4 light. A 9-square path alternates colours, so it must start and end on dark', 'No; it must start on a corner or the centre']
        ] },
        { kind: 'p', text: 'The first puzzle is a classic for a reason. Trying to place 31 dominoes by hand takes ages and never settles the question. Colouring settles it in one line: the board has 30 squares of one colour and 32 of the other, but 31 dominoes would cover exactly 31 of each. No amount of clever placing can fix that.' },
        { kind: 'p', text: 'The grid path in the last row rewards slow reading. Shade the four corners and the centre dark; the four edge squares in between are light. Any path that steps only to neighbours must alternate dark, light, dark, light. A path through all nine squares therefore has five squares in one colour and four in the other, so it must begin and end on the colour that appears five times. Dark appears five times, so a full path has to start on a corner or the centre. Starting on a light edge square would need five light squares, and there are only four. One count rules out every attempt at once, which is exactly what makes colouring arguments so satisfying.' },
        { kind: 'p', text: 'Parity, odd and even, is the simplest relative of these ideas. The 5 by 5 board fails before any colouring at all, because 25 squares cannot be split into pairs. Encourage students to try the cheapest argument first: count, then colour, then search for a construction only if neither settles the question.' },
        { kind: 'p', text: 'The third puzzle teaches the limit of the method, and it is just as important. When the colours balance, colouring proves nothing either way. A student then has to find an actual covering, here a domino across the middle two top squares and three rows of dominoes below, to show the task is possible. Knowing when an argument works, and when it does not, is the heart of mathematical reasoning.' }
      ]
    },
    {
      id: 'proof', tint: 'tint', eyebrow: 'Why proof matters',
      h2: 'From "I could not do it" to "it cannot be done"',
      lede: 'The jump from failing to find something to proving it cannot exist is one of the most powerful ideas a young mathematician meets.',
      body: [
        { kind: 'two',
          leftH3: 'What changes in a child\'s thinking',
          left: [
            'Before colouring arguments, a stuck child concludes they are not clever enough. After them, they ask whether the task might be impossible, and look for something that never changes.',
            'That question, what stays the same, reaches far beyond chessboards: into parity of numbers, balanced equations and later into the invariants used in computer science.'
          ],
          rightH3: 'How to explore at home',
          right: [
            'Draw grids on paper and cut out dominoes from card. Let your child try to cover a board, then show the colouring.',
            'Ask them to invent a board that colouring cannot rule out but that still cannot be covered. It is a genuinely hard and rewarding challenge.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Reasoning and proof',
    h2: 'Four stages for young mathematicians',
    lede: 'These grow over years through puzzles, conversation and good teaching.',
    table: { caption: 'From trying to proving', head: ['Stage', 'The student can', 'Secure when'], rows: [
      ['1. Trying', 'Attempt a task by hand', 'Covers a small board with dominoes'],
      ['2. Counting', 'Use counting to rule things out', 'Explains why a 5 by 5 board cannot be covered'],
      ['3. Invariants', 'Find what never changes', 'Uses colours to prove the 8 by 8 corners puzzle'],
      ['4. Limits', 'Know when an argument proves nothing', 'Explains the 4 by 4 puzzle fully']
    ] },
    left: { h3: 'Enjoyment first', ps: [
      'The assessment is designed to identify potential, so pressure and drilling add little. Puzzles enjoyed for their own sake build the same thinking.',
      'If a child becomes anxious, step back from any test practice.'
    ] },
    right: { h3: 'Other states', ps: [
      'Western Australia\'s ASET is covered on <a class="ag-inline-link" href="/wa-gate-aset-maths-practice">WA GATE ASET maths practice</a>.',
      'The Queensland Academies test is on <a class="ag-inline-link" href="/queensland-academies-entry-maths-practice">Queensland Academies maths practice</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses for Years 5 and 6',
    h2: 'Courses for students who love a puzzle',
    lede: 'Three groups; each card leads to the full syllabus.',
    bands: [
      { num: 'I', h3: 'Proof and puzzles', sub: 'Reasoning for its own sake', courses: [
        { code: 'SAI / P / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Invariants, parity and proof.' },
        { code: 'SAI / P / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving and computational thinking', blurb: 'Step-by-step reasoning.' },
        { code: 'SAI / P / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Test ideas with small programs.' }
      ] },
      { num: 'II', h3: 'Curriculum depth', sub: 'Strong foundations', courses: [
        { code: 'SAI / C / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Every strand, taught thoroughly.' },
        { code: 'SAI / C / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense and fluency.' },
        { code: 'SAI / C / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data, chance and fair reasoning.' }
      ] },
      { num: 'III', h3: 'Ahead', sub: 'Into secondary', courses: [
        { code: 'SAI / A / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Patterns written with letters.' },
        { code: 'SAI / A / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'Early secondary topics.' },
        { code: 'SAI / A / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Calculation patterns, checked.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Our lessons',
    h2: 'Live, discussion-rich classes for SA families',
    lede: 'Our teachers are in India, behind Adelaide. During daylight saving Adelaide is five hours ahead of India time, so a 4.30 pm class there begins at 11.30 am in India.',
    slots: [
      { time: 'After school', l: 'Good for Years 5 and 6.' },
      { time: 'Weekend', l: 'Time for longer puzzles.' },
      { time: 'Holidays', l: 'Short proof and puzzle workshops.' }
    ],
    cells: [
      { h3: 'Boards and dominoes', p: 'Students colour, cut and test ideas by hand.' },
      { h3: 'Arguments written down', p: 'Every claim of impossibility needs a reason.' },
      { h3: 'Fifteen to twenty per group', p: 'Groups that discuss together.' },
      { h3: 'One-to-one lessons', p: 'For a student who wants to go deep alone.' },
      { h3: 'Not Ignite coaching', p: 'We teach mathematics, not assessment drills.' },
      { h3: 'No offer claims', p: 'Entry decisions rest with the schools.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'Built by our learners because they wanted to. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, quoted exactly.',

  fees: {
    h2: 'Fees',
    lede: 'South Australian families pay monthly in US dollars, the rate we use outside India. No payment in advance and no minimum term.',
    free: ['A full trial lesson', 'An honest view, even if no classes are needed', 'No card details'],
    group: ['Fifteen to twenty students at one level', 'One regular teacher', 'Feedback on reasoning', 'Certificate at the end'],
    one: ['A teacher for one student', 'Chosen focus', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions about Ignite',
    h2: 'South Australian families ask',
    items: [
      { q: 'What is the Ignite program?', a: 'A South Australian special interest program for gifted students, funded by the Department of Education and offered at Glenunga International High School, The Heights High School and Aberfoyle Park High School, according to Glenunga\'s page.' },
      { q: 'When is the Ignite assessment?', a: 'Glenunga lists the ACER Ignite Assessment on 20 February 2027 for Year 6 students entering Year 7 the following year.' },
      { q: 'What does the assessment include?', a: 'Four parts over about three hours with a break: Reading Comprehension, Mathematical Reasoning, Abstract Reasoning and Written Expression.' },
      { q: 'Who marks it?', a: 'Glenunga\'s page says the test materials are sent to ACER in Melbourne for marking.' },
      { q: 'Can Year 5 students sit it?', a: 'Glenunga\'s page says Year 5 students may apply but need a signed letter of recommendation from their primary school principal.' },
      { q: 'What is a colouring argument?', a: 'A proof that colours a board, usually in a checkerboard pattern, and counts colours to show a task such as covering it with dominoes is impossible.' },
      { q: 'Are colouring puzzles too hard for Year 5?', a: 'Usually not. The 5 by 5 board needs only the idea of odd and even, and most curious Year 5 students can follow the corners puzzle once the board is coloured in front of them.' },
      { q: 'How long is the Mathematical Reasoning part?', a: 'The school pages we read do not say, so we do not state a length. ACER and the school provide format details at registration.' },
      { q: 'Can you help with registration or school choice?', a: 'No. We give no admissions or school-choice advice.' },
      { q: 'Will classes help my child get in?', a: 'We promise no result. We teach reasoning and mathematics that are valuable in themselves.' },
      { q: 'What time would lessons be in Adelaide?', a: 'We agree a weekly time after the free trial. During daylight saving Adelaide is five hours ahead of India time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for South Australian families',
    lede: 'Other states\' tests, maths and coding.',
    items: [
      { href: '/wa-gate-aset-maths-practice', label: 'WA GATE ASET', p: 'Matchstick patterns and quantitative reasoning.' },
      { href: '/queensland-academies-entry-maths-practice', label: 'Queensland Academies test', p: 'Logic grids and series.' },
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia', p: 'Live classes for every year.' },
      { href: '/coding-classes-for-11-and-12-year-olds-australia', label: 'Coding for 11 and 12 year olds', p: 'Logic and invariants in code.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Contests for keen problem solvers.' },
      { href: '/maths-challenges', label: 'Maths challenges', p: 'Puzzles to share.' }
    ]
  },

  start: {
    h2: 'Book a free maths and reasoning class',
    lede: 'Tell us your child\'s year and what kind of problems they enjoy. The trial is a real lesson in reasoning and proof, followed by honest advice.',
    readFirst: 'Want to look first? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> lists every course, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson.',
    note: 'WhatsApp is usually fastest. Our +91 number is Indian; we teach from India and have no South Australian office.',
    formNote: 'No card details, no obligation. We reply once to set it up.'
  },

  footer: {
    cols: [
      { h4: 'Selective tests', links: [
        { href: '/wa-gate-aset-maths-practice', label: 'WA GATE ASET' },
        { href: '/queensland-academies-entry-maths-practice', label: 'Queensland Academies' },
        { href: '/victorian-selective-entry-exam-maths-practice', label: 'Victorian selective exam' },
        { href: '/nsw-selective-test-mathematical-reasoning-practice', label: 'NSW selective maths' }
      ] },
      { h4: 'Australia', links: [
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/coding-classes-in-australia', label: 'Coding classes' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Reasoning and proof taught well; no entry promised'
  },

  personalityCss: `
.ag-root.ag-saig .ag-hero-grid { gap: clamp(1rem, 2.9vw, 2.6rem); }
.ag-root.ag-saig .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-saig .ag-capsule { border-left-width: 4px; }
.ag-root.ag-saig .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-saig .ag-table caption { text-align: left; }
.ag-root.ag-saig .ag-table td { line-height: 1.6; }
.ag-root.ag-saig .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-saig .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'SA Department for Education site education.sa.gov.au returned HTTP 403 to automated reads on 7 October 2026 and was not circumvented. Glenunga International High School, Ignite page (gihs.sa.edu.au, a Department for Education school), read 7 October 2026: "Glenunga International High School is a Department for Education Special Interest School"; "The Ignite Program is a special interest program funded by the Department of Education, designed to support the learning needs of identified gifted and talented students. The Ignite Program is offered at Glenunga International High School, The Heights High School, and Aberfoyle Park High School."; "The Ignite Program has been functioning since 1997."; "The ACER Ignite Assessment will be held on 20 February 2027 for Year 6 students entering Year 7 the following year."; "Registrations for the 2027 assessment via the ACER Portal will open on Monday 2 November 2026."; "The assessment comprises four parts, completed over a period of approximately 3 hours with time allowed for a break." Reading Comprehension, Mathematical Reasoning, Abstract Reasoning, Written Expression; materials sent to ACER in Melbourne for marking; open to Year 6; Year 5 with principal letter; only once and at one Ignite School; rural and interstate options with principal approval; students not residing in Australia cannot register. Aberfoyle Park High School (aphs.sa.edu.au): "IGNITE is a year 7 to 10 specialist learning program catered to the needs of gifted students."; "All students can apply for the IGNITE program regardless of zone." Adelaide daylight saving ACDT UTC+10:30; India UTC+5:30.',
    localProject: 'Original colouring-argument puzzles: the 8 by 8 board without opposite corners (30 and 32 squares of each colour, so 31 dominoes cannot cover it); a 5 by 5 board (25 squares, odd); a 4 by 4 board without the two top corners (balanced 7 and 7, colouring proves nothing, a covering exists); a knight returning only after an even number of moves; a Hamiltonian path on a 3 by 3 grid that must start and end on dark squares (5 dark, 4 light).',
    requiredMentions: ['colouring argument', 'ACER Ignite Assessment', '20 February 2027', 'Monday 2 November 2026', 'running since 1997', 'regardless of zone', 'two opposite corners removed', '30 of one colour and 32 of the other', 'The Heights High School'],
    sources: [
      { claim: 'Glenunga International High School, Ignite: program description, schools, assessment date, registration, parts, marking and eligibility.', url: 'https://gihs.sa.edu.au/specialist-programs/ignite/' },
      { claim: 'Aberfoyle Park High School, IGNITE: Years 7 to 10 program for gifted students, applications regardless of zone.', url: 'https://aphs.sa.edu.au/programs/ignite/' },
      { claim: 'Glenunga International High School home page: Ignite listed among specialist programs.', url: 'https://gihs.sa.edu.au/' }
    ],
    rejectedClaims: [
      'Any fact from the SA Department for Education site: it returned 403 and was not circumvented, so facts come only from Department schools\' pages.',
      'Length, question count or calculator rules for Mathematical Reasoning: not published on the pages read, so not stated.',
      'Selection criteria, offers and appeals: not described; no admissions advice is given.',
      'The official name of the third school beyond the wording quoted from Glenunga\'s page: not independently verified, so only the quote is used.',
      'Any promise of entry or a score: refused.'
    ]
  }
};
