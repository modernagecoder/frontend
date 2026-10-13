'use strict';
// NAPLAN Year 3 numeracy practice (ag- exam door, Australia cluster Phase 3, row 40).
// Facts read raw on 7 October 2026 at nap.edu.au: test window page (numeracy "To be completed after the
// conventions of language test"; Year 3 numeracy 45 minutes), what's in the tests (numeracy strands, item
// types, Public demonstration site, "The best preparation for NAPLAN is to teach the curriculum", Year 3
// writing on paper), key dates (2027 window 10 to 22 March), and the Year 3 numeracy proficiency level
// descriptions (Needs additional support, Developing, Strong, Exceeding). Practice items are our own.
// Lesson family: the jump strategy on an open number line (checked free site-wide on 7 October 2026).
// Parent page: /naplan-numeracy-practice-online (not repeated here). No score or level is promised.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'NAPLAN YEAR 3', label: 'NAPLAN Year 3 numeracy', blurb: 'What a Year 3 child meets in the 45-minute numeracy test, what each proficiency level looks like, and the jump strategy for adding and subtracting.' },
  slug: 'naplan-year-3-numeracy-practice',
  code: 'nyth',
  accent: '#1C5C18',
  accentRationale: 'Year 3 numeracy: a deep garden green (6.6:1 on #EDE7DA), at least 11 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'NAPLAN Year 3 numeracy practice',
  title: 'NAPLAN Year 3 Numeracy Practice | Skills, Levels, Questions',
  description: 'NAPLAN Year 3 numeracy practice: the 45-minute test, what each proficiency level looks like in Year 3, and original jump-strategy questions with answers.',
  ogDescription: 'Year 3 NAPLAN numeracy, read from ACARA\'s own descriptions: the 45-minute test, the skills behind each proficiency level, and number-line practice we wrote for eight-year-olds.',
  twitterDescription: 'Year 3 NAPLAN numeracy: the test, the four levels and jump-strategy practice.',
  pageName: 'NAPLAN Year 3 Numeracy Practice',
  webPageDescription: 'A Year 3 guide to NAPLAN numeracy for Australian parents: how long the test runs, what ACARA says a Year 3 student at each proficiency level can do, and original practice on the open number line with worked answers.',
  courseDescription: 'Live online maths classes for Australian children in Years 2 to 4 that build place value, mental addition and subtraction and early multiplication, without promising any NAPLAN result.',
  crumbs: [{ name: 'NAPLAN numeracy practice', href: '/naplan-numeracy-practice-online' }],
  crumbLabel: 'Year 3 numeracy',
  navLinks: [
    { href: '#year3', label: 'Year 3 test' },
    { href: '#levels', label: 'Levels' },
    { href: '#jumps', label: 'Number line' },
    { href: '#home', label: 'At home' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; NAPLAN Year 3 numeracy &middot; Live online',
  h1: 'NAPLAN Year 3 numeracy practice',
  lede: 'Year 3 is the first time most Australian children sit NAPLAN, and for many it is also their first timed test of any kind. The numeracy part lasts 45 minutes and draws on the counting, place value and early multiplication they have been learning since Foundation. This page sets out what ACARA says a Year 3 student typically shows at each proficiency level, then teaches one strategy that makes mental addition and subtraction calm and checkable: jumping along an open number line. We do not teach the reading, writing or conventions of language tests, and we promise no level.',
  secondaryCta: { href: '#jumps', label: 'Try the number line questions' },
  wa: 'Hello Modern Age Coders, I would like a free maths class for my Year 3 child, focusing on number sense.',
  heroNote: 'Year 3 facts from ACARA &middot; Questions written by us &middot; Numeracy only',
  spec: [
    ['Year level', 'Year 3'],
    ['Numeracy time', '45 minutes'],
    ['2027 window', '10 to 22 March'],
    ['Sits after', 'Conventions of language'],
    ['Results', 'Four proficiency levels'],
    ['Our focus', 'Place value and mental strategies'],
    ['Not covered', 'Reading, writing, conventions'],
    ['Promise', 'None about results']
  ],
  capsuleQ: 'In short',
  capsule: 'In Year 3, NAPLAN numeracy is a 45-minute test taken after the conventions of language test, inside the national window (10 to 22 March in 2027). ACARA describes a Year 3 student at the Strong level as able to compare one-, two- and three-digit numbers, solve simple addition, subtraction, multiplication and division problems, and read clocks to the nearest minute.',

  picks: {
    eyebrow: 'Good first steps',
    h2: 'Three courses that suit Year 3',
    lede: 'Each starts from what an eight-year-old already knows and grows it carefully.',
    items: [
      { course: 'mental-maths-mastery-kids', code: 'NY3 / 01', title: 'Mental maths for primary', note: 'Counting on, bridging tens and number-line thinking, practised aloud.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'NY3 / 02', title: 'Primary maths across the strands', note: 'Number, measurement, shape and data at a pace that suits the child.' },
      { course: 'abacus-mental-maths-course-for-kids', code: 'NY3 / 03', title: 'Abacus mental maths', note: 'A hands-on picture of place value for children who like to see quantities.' }
    ]
  },

  sections: [
    {
      id: 'year3', tint: 'tint', eyebrow: 'The Year 3 numeracy test',
      h2: 'Forty-five minutes, on screen, after the language test',
      lede: 'Every detail below is ACARA\'s own, from the NAPLAN site, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Year 3 numeracy at a glance', head: ['Detail', 'What ACARA states'], rows: [
          ['Duration', '45 minutes'],
          ['Order in the window', 'Completed after the conventions of language test'],
          ['Content strands', 'Number, algebra, measurement, space, statistics and probability'],
          ['Question types', 'Multiple choice, text entry and technology-enhanced items such as drag-and-drop and hot-spot'],
          ['Calculator section', 'ACARA describes a non-calculator section only for Years 7 and 9'],
          ['2027 window', '10 to 22 March']
        ] },
        { kind: 'two', mt: true,
          left: [
            'One Year 3 detail confuses many parents. ACARA notes that Year 3 students do the writing test on paper, while students in Years 5, 7 and 9 write online. That paper arrangement is described for writing. For numeracy, ACARA lists technology-enhanced item types such as drag-and-drop and hot-spot, and the Public demonstration site shows how they behave.',
            'For a child of eight, the screen itself can be the hardest part: dragging a number into a box, or clicking a spot on a picture. Ten minutes on the demonstration site before test week removes that surprise.'
          ],
          right: [
            'ACARA is plain about preparation: "The best preparation for NAPLAN is to teach the curriculum." Questions are built mostly on skills taught in earlier years, with a few that reach into the current year and the next.',
            'That is why this page teaches a strategy rather than a stack of test papers. A child who can explain how they added 38 and 25 is ready for whatever form the question takes.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/key-dates/naplan-test-window" rel="noopener" target="_blank">NAPLAN test window</a>; <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/whats-in-the-tests" rel="noopener" target="_blank">NAPLAN, What\'s in the tests</a>. Checked on 7 October 2026. ACARA has no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'levels', tint: 'deep', eyebrow: 'Year 3 proficiency levels',
      h2: 'What each level looks like in a Year 3 child',
      lede: 'ACARA publishes a description for every level, year and domain. These lines are quoted from the Year 3 numeracy descriptions; the selection is ours.',
      body: [
        { kind: 'table', caption: 'Selected Year 3 numeracy descriptions, quoted from ACARA', head: ['Level', 'The student can (selected lines)'], rows: [
          ['Needs additional support', 'connect quantities, number names and numerals to 20; continue a pattern with objects, shapes or numbers, including skip counting by 2 and 5'],
          ['Developing', 'quantify and compare collections to 100; read time on a digital and analog clock to the hour and half-hour'],
          ['Strong', 'quantify and compare one-, two- and three-digit numbers; read time on clocks to the nearest minute; solve problems using a calendar'],
          ['Exceeding', 'use the relationship between addition and subtraction to solve problems; calculate duration of time; determine an unknown value in a number sentence involving addition and/or subtraction']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Read the Strong and Exceeding rows side by side and a pattern appears. The step up is rarely about bigger numbers. It is about relationships: knowing that subtraction undoes addition, or finding the missing number in 47 + ? = 63 instead of only computing 47 + 16.',
            'The open number line is built for exactly that step. A child who can jump from 47 to 63 and count the jumps is already using the relationship between addition and subtraction, which ACARA lists at the Exceeding level.'
          ],
          right: [
            'Time appears at every level, from ordering familiar events to reading a clock to the nearest minute and calculating durations. Duration is the same skill as finding a gap on a number line, only with minutes instead of ones.',
            'None of these levels is a label for a child. They describe what a student showed during one test, on one day, and teachers use them alongside everything else they know.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/results-and-reports/proficiency-level-descriptions" rel="noopener" target="_blank">NAPLAN proficiency level descriptions, Numeracy Year 3</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'jumps', tint: '', eyebrow: 'Practice we wrote',
      h2: 'The jump strategy on an open number line',
      lede: 'An open number line has no printed marks. The child draws a line, writes the starting number, and makes jumps of tens and ones they choose themselves. The jumps are the working out.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Jump the tens first', p: 'For 38 + 25, start at 38, jump 20 to 58, then jump 5 to 63. Two jumps, each one easy to say out loud.' },
          { h3: 'Land on a friendly ten', p: 'For 46 + 7, jump 4 to reach 50, then 3 more to 53. Splitting the 7 into 4 and 3 is the whole trick.' },
          { h3: 'Count the gap', p: 'For 63 minus 47, start at 47 and jump to 63: 3 to reach 50, 10 to reach 60, 3 to reach 63. The gap is 16.' }
        ] },
        { kind: 'table', caption: 'Original Year 3 practice, with the jumps a child might draw', head: ['Question', 'Jumps on the line', 'Answer'], rows: [
          ['A library has 38 picture books and buys 25 more. How many now?', '38, jump 20 to 58, jump 5 to 63', '63'],
          ['Mia has 46 stickers and is given 7. How many does she have?', '46, jump 4 to 50, jump 3 to 53', '53'],
          ['A bus holds 63 people. 47 are on board. How many more can get on?', '47, jump 3 to 50, jump 10 to 60, jump 3 to 63: 3 + 10 + 3', '16'],
          ['Find the missing number: 29 + ? = 45', '29, jump 1 to 30, jump 10 to 40, jump 5 to 45: 1 + 10 + 5', '16'],
          ['A swimming lesson starts at 3:40 and ends at 4:15. How long is it?', '3:40, jump 20 minutes to 4:00, jump 15 minutes to 4:15', '35 minutes'],
          ['Is 52 minus 19 closer to 30 or to 40?', '52, jump back 20 to 32, then forward 1 to 33', '33, so closer to 30']
        ] },
        { kind: 'p', text: 'The fourth and fifth questions are the interesting ones. Neither looks like a take-away sum, yet both are solved by counting the gap between two numbers. That move, from "what is 29 plus 16" to "what gets me from 29 to 45", is the relationship ACARA describes at the top level, and a number line makes it visible.' },
        { kind: 'p', text: 'The last question shows a second habit: jump past the target with a friendly number, then step back. Subtracting 20 and adding 1 is quicker and safer than subtracting 19 digit by digit.' }
      ]
    },
    {
      id: 'home', tint: 'tint', eyebrow: 'Five minutes at home',
      h2: 'Number-line games that need only paper',
      lede: 'Short, playful and spoken aloud works far better than worksheets at this age.',
      body: [
        { kind: 'two',
          leftH3: 'Games to try',
          left: [
            'Guess the gap: say two numbers, such as 27 and 50, and ask how far apart they are. Draw the line together and let your child choose the jumps.',
            'Clock jumps: when you leave for school, ask how many minutes until the bell. Jump from the time now to the bell time on a quick sketch.',
            'Change the jumps: solve one question two different ways, for example 38 + 25 as 38 + 2 + 23, then compare. Finding more than one route builds flexibility.'
          ],
          rightH3: 'What to listen for',
          right: [
            'Can your child say why they jumped to 50 first? Reasons matter more than speed.',
            'Do they check with a second route when unsure? That is the habit that protects a careful child in a timed test.',
            'If they freeze, shrink the numbers. Confidence with 8 + 5 comes before 38 + 25.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From counting to calculating',
    h2: 'Four steps a Year 3 child climbs',
    lede: 'Where a child begins depends on how they work with numbers, not the year on their report.',
    table: { caption: 'Mental addition and subtraction, step by step', head: ['Step', 'What it looks like', 'Secure when the child can'], rows: [
      ['1. Counting on', 'Starts at the larger number and counts up', 'Add 9 to 36 without starting from 1'],
      ['2. Friendly tens', 'Jumps to the next ten first', 'Explain why 46 + 7 passes through 50'],
      ['3. Tens and ones', 'Jumps in tens, then ones', 'Solve 38 + 25 in two spoken jumps'],
      ['4. Gaps', 'Counts the distance between two numbers', 'Find the missing number in 29 + ? = 45']
    ] },
    left: { h3: 'If tests make your child anxious', ps: [
      'Year 3 nerves usually come from not knowing what the screen will do. One visit to the demonstration site helps more than any amount of extra practice.',
      'Keep the week before NAPLAN ordinary: the usual sleep, the usual breakfast, the usual reading.'
    ] },
    right: { h3: 'Looking ahead', ps: [
      'Year 5 builds on these strategies with larger numbers and fractions; our <a class="ag-inline-link" href="/naplan-year-5-numeracy-practice">Year 5 numeracy page</a> picks up from here.',
      'For the national picture across all four year levels, see <a class="ag-inline-link" href="/naplan-numeracy-practice-online">NAPLAN numeracy practice</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Maths courses for younger learners',
    h2: 'Courses that suit Years 2 to 4',
    lede: 'Grouped by what a child is ready for. Each card opens the full syllabus.',
    bands: [
      { num: 'I', h3: 'Number sense', sub: 'Counting, place value and mental strategies', courses: [
        { code: 'NY3 / N / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Strategies explained, then practised in short bursts.' },
        { code: 'NY3 / N / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus mental maths', blurb: 'Beads that make tens and ones concrete.' },
        { code: 'NY3 / N / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Patterns for quick calculation, always checked.' }
      ] },
      { num: 'II', h3: 'All the strands', sub: 'Measurement, shape and data too', courses: [
        { code: 'NY3 / S / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Every strand of the primary curriculum, taught with talk.' },
        { code: 'NY3 / S / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving and computational thinking', blurb: 'Puzzles, patterns and logical steps.' },
        { code: 'NY3 / S / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Tallies, graphs and chance, for when a child is ready.' }
      ] },
      { num: 'III', h3: 'For keen young problem solvers', sub: 'When the basics feel easy', courses: [
        { code: 'NY3 / X / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Harder puzzles at a gentle pace.' },
        { code: 'NY3 / X / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'For the rare Year 3 child already working well ahead.' },
        { code: 'NY3 / X / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Missing numbers grow into equations, much later.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Inside a lesson',
    h2: 'Small groups, short tasks, lots of talking',
    lede: 'Our teachers work from India, which is behind every Australian state. A 4 pm class in Perth starts at 1.30 pm India time, so after-school slots for young children are easy to keep week after week.',
    slots: [
      { time: 'Straight after school', l: 'Suits eight-year-olds, before tiredness sets in.' },
      { time: 'Saturday morning', l: 'A relaxed option for busy weekdays.' },
      { time: 'Holiday blocks', l: 'A few short sessions on one skill.' }
    ],
    cells: [
      { h3: 'Thirty minutes of focus', p: 'Young learners get short, varied tasks rather than one long drill.' },
      { h3: 'Say it, then write it', p: 'Children explain each jump aloud before drawing it.' },
      { h3: 'Groups of fifteen to twenty', p: 'Children at the same stage learn together.' },
      { h3: 'One-to-one if needed', p: 'For a child who needs a particular gap closed gently.' },
      { h3: 'A note for parents', p: 'What we practised, and one game to play at home.' },
      { h3: 'Honest about NAPLAN', p: 'We teach mathematics; the test result belongs to the child.' }
    ]
  },

  projectsH2: 'Things our students have made',
  projectsLede: 'Projects from learners who enjoy building, collected in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from parents, copied word for word from Google.',

  fees: {
    h2: 'Fees',
    lede: 'Families in Australia pay monthly in US dollars, the rate we use everywhere outside India. There is no deposit, and you can stop at the end of any month.',
    free: ['A real lesson with a teacher', 'A clear picture of where your child is', 'No payment details needed'],
    group: ['Fifteen to twenty children at one stage', 'The same teacher each week', 'Short tasks with feedback', 'A certificate at the end'],
    one: ['A teacher for one child', 'Gentle work on specific gaps', 'Times that fit your week']
  },

  faq: {
    eyebrow: 'Questions about Year 3 NAPLAN numeracy',
    h2: 'What parents of Year 3 children ask',
    items: [
      { q: 'How long is the Year 3 NAPLAN numeracy test?', a: '45 minutes. ACARA schedules it after the conventions of language test within the national test window.' },
      { q: 'When is NAPLAN for Year 3 in 2027?', a: 'The 2027 window is 10 to 22 March. Your school sets the exact day.' },
      { q: 'Is there a calculator in Year 3?', a: 'ACARA describes a non-calculator section followed by an online calculator only for the Year 7 and 9 tests, and describes no calculator for Year 3.' },
      { q: 'Is the Year 3 test on paper?', a: 'ACARA says Year 3 students do the writing test on paper. For numeracy it lists technology-enhanced item types such as drag-and-drop, which you can preview on the Public demonstration site.' },
      { q: 'What is an open number line?', a: 'A line with no printed marks, on which a child writes a starting number and draws their own jumps, for example tens then ones, to add, subtract or find a gap.' },
      { q: 'What does Strong look like in Year 3?', a: 'Among other things, ACARA lists comparing one-, two- and three-digit numbers, solving simple addition and subtraction problems, reading time on clocks to the nearest minute and solving problems using a calendar.' },
      { q: 'Should my child practise past papers?', a: 'ACARA advises that teaching the curriculum is how students should prepare. A short look at the demonstration site is useful; drilling papers in Year 3 rarely is.' },
      { q: 'Do you teach the reading and writing tests?', a: 'No. We teach mathematics only, so this page covers numeracy and nothing else.' },
      { q: 'Will lessons improve my child\'s level?', a: 'We do not promise any level or result. We teach number sense and mental strategies properly, which is what the test draws on.' },
      { q: 'When would classes run in Australia?', a: 'We agree one weekly time after the free trial, usually just after school. In Perth, 4 pm is 1.30 pm India time all year, as Western Australia has no daylight saving.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for primary families',
    lede: 'The other NAPLAN years, maths support and competitions.',
    items: [
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy, all years', p: 'Dates, tailored testing and the bigger picture.' },
      { href: '/naplan-year-5-numeracy-practice', label: 'NAPLAN Year 5 numeracy', p: 'The next step: larger numbers and fractions.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'Live classes from Foundation to Year 12.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Maths contests that welcome younger students.' },
      { href: '/coding-classes-for-7-and-8-year-olds-australia', label: 'Coding for 7 and 8 year olds', p: 'Loops, patterns and first programs.' },
      { href: '/maths-challenges', label: 'Maths challenges', p: 'Puzzles to share at home.' }
    ]
  },

  start: {
    h2: 'Book a free maths class for Year 3',
    lede: 'Tell us your child\'s year and what feels tricky. The trial lesson works on number sense, gently, and finishes with honest advice.',
    readFirst: 'Prefer to look around first? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> lists every maths course, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a real lesson.',
    note: 'WhatsApp is usually the fastest way to reach us. Our number starts +91 because we teach from India; we have no office in Australia.',
    formNote: 'No card details and no commitment. We reply once to arrange the class.'
  },

  footer: {
    cols: [
      { h4: 'NAPLAN numeracy', links: [
        { href: '/naplan-numeracy-practice-online', label: 'All year levels' },
        { href: '/naplan-year-5-numeracy-practice', label: 'Year 5' },
        { href: '/naplan-year-7-numeracy-practice', label: 'Year 7' },
        { href: '/naplan-year-9-numeracy-practice', label: 'Year 9' }
      ] },
      { h4: 'Australia', links: [
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Year 3 maths taught properly; no NAPLAN level promised'
  },

  personalityCss: `
.ag-root.ag-nyth .ag-hero-grid { gap: clamp(1rem, 3vw, 2.6rem); }
.ag-root.ag-nyth .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-nyth .ag-capsule { border-left-width: 6px; }
.ag-root.ag-nyth .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-nyth .ag-table caption { text-align: left; }
.ag-root.ag-nyth .ag-table td { line-height: 1.55; }
.ag-root.ag-nyth .ag-spec dt { letter-spacing: 0.08em; }
.ag-root.ag-nyth .ag-slots { gap: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'ACARA, NAPLAN (nap.edu.au), read 7 October 2026. Test window page: numeracy "To be completed after the conventions of language test"; "Year 3: 45 minutes". What\'s in the tests: numeracy strands number, algebra, measurement, space, statistics and probability; item types multiple-choice, text entry and technology-enhanced (drag-and-drop, hot-spot); "Year 7 and 9 numeracy tests have 2 sections"; writing: "a Year 3 student doing the test on paper"; "The best preparation for NAPLAN is to teach the curriculum." Key dates: 2027 window 10 to 22 March. Proficiency level descriptions, Numeracy Year 3, quoted lines: Needs additional support "connect quantities, number names and numerals to 20", "including skip counting by 2 and 5"; Developing "quantify and compare collections to 100", "read time on a digital and analog clock to the hour and half-hour"; Strong "quantify and compare one-, two- and three-digit numbers", "read time on clocks to the nearest minute", "solve problems using a calendar"; Exceeding "use the relationship between addition and subtraction to solve problems", "calculate duration of time", "determine an unknown value in a number sentence involving addition and/or subtraction".',
    localProject: 'Original Year 3 practice on the open number line with worked jumps: 38 + 25 = 63 (jump 20 then 5), 46 + 7 = 53 (via 50), 63 minus 47 = 16 (counting the gap 3 + 10 + 3), 29 + ? = 45 gives 16, a lesson from 3:40 to 4:15 lasts 35 minutes, and 52 minus 19 = 33 by jumping back 20 and forward 1.',
    requiredMentions: ['open number line', 'jump strategy', 'skip counting by 2 and 5', 'read time on clocks to the nearest minute', 'solve problems using a calendar', 'quantify and compare collections to 100', 'Guess the gap', '29 + ? = 45', '3:40 and ends at 4:15'],
    sources: [
      { claim: 'NAPLAN test window: numeracy after conventions of language; Year 3 numeracy 45 minutes.', url: 'https://www.nap.edu.au/naplan/key-dates/naplan-test-window' },
      { claim: 'NAPLAN, What\'s in the tests: numeracy strands, item types, Years 7 and 9 non-calculator section, Year 3 writing on paper, best preparation quote.', url: 'https://www.nap.edu.au/naplan/whats-in-the-tests' },
      { claim: 'NAPLAN key dates: 2027 test window 10 to 22 March.', url: 'https://www.nap.edu.au/naplan/key-dates' },
      { claim: 'NAPLAN proficiency level descriptions, Numeracy Year 3, all four levels.', url: 'https://www.nap.edu.au/naplan/results-and-reports/proficiency-level-descriptions' }
    ],
    rejectedClaims: [
      'That the Year 3 numeracy test is on paper: ACARA describes paper only for the Year 3 writing test, so no paper claim is made for numeracy.',
      'Number of questions in the Year 3 numeracy test: not stated on the pages read.',
      'Any national share of Year 3 students at each proficiency level: not quoted.',
      'Any claim that practice or tutoring raises a NAPLAN level: refused.',
      'Teaching of the reading, writing or conventions of language tests: not offered, stated on the page.'
    ]
  }
};
