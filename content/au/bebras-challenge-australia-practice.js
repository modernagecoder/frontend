'use strict';
// Bebras Challenge Australia practice (ag- competition door, Australia cluster Phase 3, row 88).
// Facts read raw on 7 October 2026 at the Australian Maths Trust's Bebras page (amt.edu.au/bebras),
// fetched with curl's default user agent: 2026 challenge period 9 February to 8 March, entries closed
// 6 March, 60 minutes for Middle Primary and 45 for other divisions, Years 3 to 12, five divisions,
// 15 questions, scoring 6, 9 and 12 marks to a maximum of 135, award bands, Bebras 365 and Mini
// Challenges, history (Valentina Dagiene, University of Vilnius; International Bebras Committee;
// Bebras Australia from 2014, CSIRO until 2023, AMT from 2024). No entry fee is printed (AUD).
// Spine: sorting networks, an original Bebras-style task; family checked free site-wide on 7 October
// 2026. Network results were checked by us in Python over every ordering.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'BEBRAS CHALLENGE', label: 'Bebras Challenge practice', blurb: 'The Bebras Computational Thinking Challenge in Australia: format, scoring and divisions from the Australian Maths Trust, plus an original practice task.' },
  slug: 'bebras-challenge-australia-practice',
  code: 'bebr',
  accent: '#6C5A1B',
  accentRationale: 'Bebras practice: an olive bronze chosen by hand, muted, at least 10 RGB from every accent in content and stylesheets and above 4.8:1 on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Bebras Challenge Australia practice',
  title: 'Bebras Challenge Australia Practice | Computational Thinking',
  description: 'Bebras Challenge practice for Australian students in Years 3 to 12: format, divisions and scoring from the Australian Maths Trust, and an original practice task.',
  ogDescription: 'The Bebras Computational Thinking Challenge in Australia explained from the AMT\'s own page: 15 questions, timing by division, the 135-mark scoring, free past challenges, and a practice task we wrote.',
  twitterDescription: 'Bebras Challenge practice for Australian students, with an original computational thinking task.',
  pageName: 'Bebras Challenge Australia Practice',
  webPageDescription: 'A guide for Australian students, parents and teachers to the Bebras Computational Thinking Challenge: who runs it, the 2026 challenge period, divisions and timing, the scoring and award bands, the free Bebras 365 archive, and an original practice task on sorting networks with worked answers.',
  courseDescription: 'Live online computational thinking and coding classes for Australian students from Year 3 to Year 12 that build the logic, patterns and algorithms Bebras tasks draw on.',
  crumbs: [{ name: 'Australian competitions calendar', href: '/australian-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Bebras Challenge practice',
  navLinks: [
    { href: '#format', label: 'Format' },
    { href: '#scoring', label: 'Scoring' },
    { href: '#task', label: 'Practice task' },
    { href: '#prepare', label: 'Preparing' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Bebras Challenge &middot; Years 3 to 12',
  h1: 'Bebras Challenge practice',
  lede: 'The Bebras Challenge asks students to think like computer scientists without writing a line of code. Each task is a short story, often about beavers, that hides an idea from computing: a sorting method, a graph, a way of encoding information, a rule that has to be followed exactly. In Australia it is run by the Australian Maths Trust, open to Years 3 to 12, and held in Term 1. This page sets out the format and scoring from the Trust\'s own page, explains what the questions really test, and gives an original practice task on sorting networks with the answers worked through. We prepare students for Bebras by teaching computational thinking; we are not connected with the Trust or with the international challenge.',
  secondaryCta: { href: '#task', label: 'Try the practice task' },
  wa: 'Hello Modern Age Coders, I would like a free computational thinking class to prepare for Bebras.',
  heroNote: 'Format and scoring from the AMT\'s Bebras page &middot; Checked on 7 October 2026',
  spec: [
    ['Run in Australia by', 'Australian Maths Trust'],
    ['Who can enter', 'Years 3 to 12'],
    ['2026 period', '9 February to 8 March'],
    ['Questions', '15, multiple choice, integer and interactive'],
    ['Time', '60 min Middle Primary, 45 min others'],
    ['Maximum score', '135 marks'],
    ['Coding needed', 'No'],
    ['Teams', 'Individually or in teams of up to four']
  ],
  capsuleQ: 'In short',
  capsule: 'The Bebras Computational Thinking Challenge is an international problem-solving contest that needs no coding. In Australia the Australian Maths Trust runs it for Years 3 to 12 in Term 1. In 2026 it ran from 9 February to 8 March. There are 15 questions, worth 6, 9 or 12 marks by difficulty, to a maximum of 135, with 60 minutes for Middle Primary and 45 for other divisions.',

  picks: {
    eyebrow: 'For Bebras-style thinking',
    h2: 'Three courses that build what Bebras tests',
    lede: 'Logic and patterns for primary students, algorithms for secondary students, and competition problem solving for the keenest.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'BEBR / 01', title: 'Computational thinking for primary', note: 'Rules, patterns, sorting and searching worked through as puzzles, exactly the territory of the primary divisions.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'BEBR / 02', title: 'Algorithms for secondary', note: 'Graphs, sorting, search and efficiency, the ideas behind the harder Junior to Senior tasks.' },
      { course: 'competitive-programming-for-teens-course', code: 'BEBR / 03', title: 'From Bebras to programming contests', note: 'For students who want to turn puzzle skill into code, on the road to the Australian Informatics Olympiad.' }
    ]
  },

  sections: [
    {
      id: 'format', tint: 'tint', eyebrow: 'The challenge itself',
      h2: 'Who runs Bebras in Australia, and how it works',
      lede: 'Everything in this section is from the Australian Maths Trust\'s Bebras page, read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Bebras Challenge in Australia, 2026, as published by the AMT', head: ['Detail', 'What the AMT states'], rows: [
          ['Challenge period', 'Monday 9 February to Sunday 8 March 2026, with entries closing Friday 6 March'],
          ['Timing', '60 minutes for Middle Primary (Years 3 and 4); 45 minutes for all other divisions'],
          ['Divisions', 'Middle Primary (Years 3 and 4), Upper Primary (5 and 6), Junior (7 and 8), Intermediate (9 and 10), Senior (11 and 12)'],
          ['Questions', '15, a combination of multiple choice, integer and interactive responses'],
          ['Delivery', 'Online; students choose any day in the period and must finish within the time allowed'],
          ['Participation', 'Individually or in teams of up to four'],
          ['Coding', '"Coding skills are not required to complete the Bebras Challenge."'],
          ['Topics', 'Vary each year']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The AMT describes Bebras as an international challenge "that involves over 2.9 million students from 60 countries". The name is Lithuanian for beaver, chosen by the founder, Professor Valentina Dagiene of the University of Vilnius, and tasks are assessed each year by the International Bebras Committee.',
            'In Australia, Bebras began in 2014 and was delivered by CSIRO until 2023. From 2024 the Australian Maths Trust took it over. The main round runs in Term 1, and the AMT notes a follow-up event in Term 4 for international Bebras week.'
          ],
          right: [
            'Schools enter students through the Trust; families do not normally enter directly. Entry fees are set by the AMT in Australian dollars, so we do not print them here; ask your school or check the Trust\'s page.',
            'Dates for 2027 had not been published when we checked. The 2026 pattern, a window across February and early March, is a reasonable guide to planning, but the Trust\'s page is the place to confirm the next challenge period.'
          ] },
        { kind: 'source', html: 'Source: Australian Maths Trust, <a class="ag-inline-link" href="https://amt.edu.au/bebras" rel="noopener" target="_blank">Bebras Computational Thinking Challenge</a>, read on 7 October 2026. We are independent of the AMT and of the International Bebras Committee.' }
      ]
    },
    {
      id: 'scoring', tint: 'deep', eyebrow: 'Marks and awards',
      h2: 'How Bebras is scored, and what the awards mean',
      lede: 'Difficulty decides how much each question is worth. A wrong answer and a blank score the same: zero.',
      body: [
        { kind: 'table', caption: 'Bebras scoring and award bands, from the AMT page (2026)', head: ['Item', 'AMT rule'], rows: [
          ['Easy question', '6 marks'],
          ['Medium question', '9 marks'],
          ['Hard question', '12 marks'],
          ['Wrong or unanswered', 'Zero'],
          ['Highest possible', '135 marks'],
          ['Excellence', '135 marks, with a certificate of excellence'],
          ['High Distinction', '114 to 134 marks'],
          ['Distinction', '102 to 113 marks'],
          ['Credit', '87 to 101 marks'],
          ['Merit', '60 to 86 marks'],
          ['Participation', '0 to 59 marks']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The AMT does not say how many questions sit at each level. Five easy, five medium and five hard would give exactly 135, but other mixes add up too, so students should not count on any pattern. What matters for timing is simpler: a student who spends ten minutes on one 12-mark question has used more than a fifth of a 45-minute paper on it.',
            'Because there is no penalty for a wrong answer, every question should get some answer before time runs out. That is not gaming the contest; it is reading its rules.'
          ],
          right: [
            'The award bands are fixed marks rather than percentiles, so a student can see exactly how far they are from the next band. Moving from Merit to Credit, for example, needs 87 marks, which is any combination of questions adding to that number.',
            'We treat awards as a by-product. Students who enjoy the puzzles and understand the ideas behind them do well; students drilled on question types tend to stall when the topics change, and the AMT notes that they vary each year.'
          ] }
      ]
    },
    {
      id: 'task', tint: 'tint', eyebrow: 'An original practice task',
      h2: 'Beavers at the gates: a sorting network puzzle',
      lede: 'This task is ours, written in the Bebras style. It hides a real idea from computing, a sorting network, inside a story. Try it before reading the answers.',
      body: [
        { kind: 'two',
          leftH3: 'The task',
          left: [
            'Four beavers stand in a row of four places, numbered 1 to 4 from left to right. At each gate, the beavers in two named places compare heights, and if the taller one is on the left they swap. The gates are checked in order.',
            'Gate list A has five gates: places 1 and 2, then 3 and 4, then 1 and 3, then 2 and 4, then 2 and 3. Gate list B has only the first four of those gates. Question: does each list always finish with the beavers in order from shortest to tallest, whatever order they start in?'
          ],
          rightH3: 'The answer',
          right: [
            'List A always works. We checked all 24 possible starting orders of four beavers, and every one finishes sorted. Its five gates also run in three rounds, because the first two gates touch different places and so can happen at the same time, as can the next two.',
            'List B fails. Leaving out the last gate breaks 16 of the 24 starting orders. Start with heights 1, 3, 2, 4 and no gate ever swaps anyone, yet the middle two are in the wrong order. For four items in this design, five comparators are needed and four are not enough.'
          ] },
        { kind: 'table', mt: true, caption: 'Results of our check, run over every starting order', head: ['Gate list', 'Gates', 'Rounds', 'Starting orders sorted', 'Orders of 0s and 1s sorted'], rows: [
          ['A', '5', '3', '24 of 24', '16 of 16'],
          ['B', '4', '2', '8 of 24', '12 of 16']
        ] },
        { kind: 'p', text: 'The last column is a shortcut worth knowing. If you only test lists made of 0s and 1s, there are 16 to try instead of 24, and the faulty list B is still caught: four of those sixteen come out unsorted. Students who notice that a smaller test can still find the bug are thinking the way Bebras rewards.' },
        { kind: 'source', html: 'Task and results are ours, checked in Python over all 24 orderings and all 16 lists of 0s and 1s on 7 October 2026. The story follows the Bebras style but is not an AMT or Bebras question.' }
      ]
    },
    {
      id: 'prepare', tint: '', eyebrow: 'Getting ready',
      h2: 'How to prepare without drilling',
      lede: 'The Trust publishes a large free archive. Used well, it is enough practice for most students.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Bebras 365', p: 'The AMT describes it as a free resource with all past challenges, "more than 12 different challenges for each of the five divisions", open without a login.' },
          { h3: 'Mini Challenges', p: 'Short sets built around key algorithmic thinking skills, also free and available at any time, which suit a weekly practice habit.' },
          { h3: 'Teacher resources', p: 'The Trust states that teachers do not need to register for the challenge to use its resources.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The most useful preparation is talking through answers. After each past task, ask what idea was hidden in it: a search, a sort, a rule applied repeatedly, a way of encoding. The ideas repeat across years even when the stories change.',
            'Timing practice helps older students. Try a full past challenge under the real limit, then look at which questions took longest and whether they were worth it.'
          ],
          right: [
            'Our classes teach the computational thinking itself: patterns, decomposition, algorithms and abstraction, with puzzles like the one above and with code for older students. We do not use or reproduce the AMT\'s papers in class beyond linking to its free archive.',
            'Students who enjoy Bebras often go on to the Computational and Algorithmic Thinking competition and, with programming, the Australian Informatics Olympiad. Both are on our competitions calendar.'
          ] },
        { kind: 'source', html: 'Bebras 365, Mini Challenges and teacher resources as described on the AMT\'s <a class="ag-inline-link" href="https://amt.edu.au/bebras" rel="noopener" target="_blank">Bebras page</a>, read on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From puzzles to programs',
    h2: 'Four stages of computational thinking',
    lede: 'Bebras sits at the start of a long path. Each stage keeps the one before it.',
    table: { caption: 'A computational thinking path for Australian students', head: ['Around', 'Stage', 'The sign it is secure'], rows: [
      ['Years 3 to 4', '1. Following rules exactly', 'Applies a puzzle\'s rule without skipping steps'],
      ['Years 5 to 6', '2. Spotting the hidden idea', 'Says which computing idea a Bebras task is about'],
      ['Years 7 to 9', '3. Designing an approach', 'Explains why one strategy beats another'],
      ['Years 9 to 12', '4. Writing it as code', 'Turns a puzzle\'s method into a working program']
    ] },
    left: { h3: 'If your child finds the puzzles hard', ps: [
      'Bebras questions are meant to be unfamiliar. Reading the story twice and drawing it usually helps more than any trick.',
      'Working in a team of up to four, which the AMT allows, is a good way to start.'
    ] },
    right: { h3: 'What comes next', ps: [
      'The <a class="ag-inline-link" href="/australian-informatics-olympiad-preparation">Australian Informatics Olympiad page</a> explains the step to programming contests.',
      'The <a class="ag-inline-link" href="/australian-maths-trust-amc-aio-cat-preparation">AMT competitions page</a> compares the AMC, AIO and CAT.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for puzzle-minded students',
    lede: 'Grouped by stage. Every card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'Logic and patterns', courses: [
        { code: 'BEBR / P / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Puzzles that teach algorithms.' },
        { code: 'BEBR / P / 02', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'Turning puzzle rules into visual code.' },
        { code: 'BEBR / P / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for integer-answer questions.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Algorithms and code', courses: [
        { code: 'BEBR / S / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A language for testing ideas quickly.' },
        { code: 'BEBR / S / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Sorting, searching and graphs, properly.' },
        { code: 'BEBR / S / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns and counting with Python.' }
      ] },
      { num: 'III', h3: 'Competition track', sub: 'For the keenest', courses: [
        { code: 'BEBR / X / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest problems, judged by code.' },
        { code: 'BEBR / X / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Counting and logic for maths contests.' },
        { code: 'BEBR / X / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'A fast language used in olympiads.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live problem-solving classes, timed for Australia',
    lede: 'Our teachers work from India. During daylight saving, a 4.30 pm lesson in Melbourne starts at 11 am India time, so after-school puzzle classes are easy for us to run.',
    slots: [
      { time: 'Term 4 and the holidays', l: 'A good time to start before the February challenge.' },
      { time: 'Weekly after school', l: 'Steady practice through Term 1.' },
      { time: 'Weekend sessions', l: 'Team practice for groups of friends.' }
    ],
    cells: [
      { h3: 'Draw the story', p: 'Every task is sketched before it is solved.' },
      { h3: 'Name the idea', p: 'Students say which computing concept the puzzle hides.' },
      { h3: 'Groups of fifteen to twenty', p: 'Matched by stage rather than only by year.' },
      { h3: 'One-to-one option', p: 'For students aiming at the harder divisions.' },
      { h3: 'Notes for parents', p: 'One idea learned and one puzzle to try at home.' },
      { h3: 'No award promises', p: 'We teach thinking; the result is the student\'s.' }
    ]
  },

  projectsH2: 'Projects our students have shared',
  projectsLede: 'Made because learners wanted to, with no contest attached. More are in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' words, quoted exactly from Google.',

  fees: {
    h2: 'Fees',
    lede: 'Australian families pay monthly in US dollars, the same rate we use in every country outside India, with no deposit and the freedom to stop at any month end. Bebras entry is arranged and paid through schools, separately.',
    free: ['A real lesson with a teacher', 'A view of your child\'s problem-solving level', 'No card needed'],
    group: ['Fifteen to twenty students at one stage', 'The same teacher every week', 'Puzzles discussed in depth', 'A certificate at the end'],
    one: ['A teacher for one student', 'Aimed at a chosen division', 'A weekly time that suits you']
  },

  faq: {
    eyebrow: 'Questions about Bebras',
    h2: 'What families and students ask',
    items: [
      { q: 'What is the Bebras Challenge?', a: 'An international computational thinking challenge. Students solve short story-based tasks that hide ideas from computer science, without needing to code. In Australia the Australian Maths Trust runs it.' },
      { q: 'Who can enter Bebras in Australia?', a: 'Students in Years 3 to 12, in five divisions from Middle Primary to Senior. Entry is normally arranged through schools.' },
      { q: 'When is Bebras held?', a: 'In Term 1. In 2026 the challenge period was 9 February to 8 March. Check the AMT\'s page for the next period.' },
      { q: 'How long is the Bebras Challenge?', a: '60 minutes for Middle Primary (Years 3 and 4) and 45 minutes for all other divisions, with 15 questions.' },
      { q: 'Does Bebras need coding?', a: 'No. The AMT states that coding skills are not required. Tasks test logical and algorithmic thinking.' },
      { q: 'How is Bebras scored?', a: 'Easy questions are worth 6 marks, medium 9 and hard 12, up to 135. Wrong and unanswered questions score zero.' },
      { q: 'Can students work in teams?', a: 'Yes. The AMT says students can take part individually or in teams of up to four.' },
      { q: 'What is a sorting network?', a: 'A fixed sequence of compare-and-swap steps that puts items in order whatever order they start in. Some steps can happen at the same time, which is why sorting networks are used in hardware.' },
      { q: 'Where can students practise?', a: 'The AMT\'s free Bebras 365 archive holds past challenges for each division, and its Mini Challenges are short skill sets. Our classes teach the underlying thinking.' },
      { q: 'Are you part of the AMT or Bebras?', a: 'No. We are an independent online school preparing students through computational thinking lessons.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More competitions for Australian students',
    lede: 'The full calendar, the next contests up, and the curriculum underneath.',
    items: [
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Every Australian contest, month by month.' },
      { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMC, AIO and CAT preparation', p: 'The Trust\'s other competitions compared.' },
      { href: '/australian-informatics-olympiad-preparation', label: 'Australian Informatics Olympiad', p: 'Where Bebras thinking meets code.' },
      { href: '/australian-curriculum-digital-technologies-help', label: 'Digital Technologies help', p: 'The curriculum behind the puzzles.' },
      { href: '/coding-games-for-kids-australia', label: 'Coding games for kids', p: 'Games that build the same thinking.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main Australian page.' }
    ]
  },

  start: {
    h2: 'Book a free computational thinking class',
    lede: 'Tell us the year level and whether Bebras is coming up. The free class works through puzzles like the one on this page and ends with honest advice on preparation.',
    readFirst: 'Prefer to explore? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> lists every course, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson.',
    note: 'WhatsApp usually brings the quickest reply. Our number starts +91 because the school runs from India; we keep no Australian office.',
    formNote: 'No payment details and no obligation. We reply once to book it.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/australian-informatics-olympiad-preparation', label: 'Informatics Olympiad' },
        { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMT competitions' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' },
        { href: '/coding-games-for-kids-australia', label: 'Coding games for kids' }
      ] }
    ],
    bottomRight: 'Independent of the AMT and Bebras; facts from the AMT\'s page'
  },

  personalityCss: `
.ag-root.ag-bebr .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-bebr .ag-capsule { border-left-width: 6px; }
.ag-root.ag-bebr .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-bebr .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-bebr .ag-grid-2 h3 { letter-spacing: -0.004em; }
.ag-root.ag-bebr .ag-spec dd { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'Australian Maths Trust, Bebras Computational Thinking Challenge page (amt.edu.au/bebras), read 7 October 2026 with curl\'s default user agent: Monday 9 February to Sunday 8 March 2026; entries close Friday 6 March 2026; 60 minutes for Middle Primary Years 3 and 4, 45 minutes for all other divisions; Years 3 to 12; "involves over 2.9 million students from 60 countries"; "Coding skills are not required to complete the Bebras Challenge."; individually or in teams of up to four; Term 1 main round, Term 4 follow-up; Lithuanian for beaver; Professor Valentina Dagiene, University of Vilnius; International Bebras Committee; Bebras Australia began 2014, delivered by CSIRO until 2023, AMT from 2024; divisions Middle Primary, Upper Primary, Junior, Intermediate, Senior; topics vary each year; online; 15 questions, multiple choice, integer and interactive; easy 6, medium 9, hard 12 marks, highest 135; incorrect and unanswered zero; awards Excellence 135, High Distinction 114-134, Distinction 102-113, Credit 87-101, Merit 60-86, Participation 0-59; Bebras 365 "more than 12 different challenges for each of the five divisions"; Bebras Mini Challenges.',
    localProject: 'Original Bebras-style sorting network task, checked in Python: gate list A (five comparators: 1-2, 3-4, 1-3, 2-4, 2-3; three rounds) sorts all 24 orderings and all 16 lists of 0s and 1s; gate list B (first four gates) sorts 8 of 24 and 12 of 16, failing 16 of the 24 orderings, e.g. 1, 3, 2, 4 unchanged.',
    requiredMentions: ['Bebras 365', 'Valentina Dagiene', 'International Bebras Committee', '114 to 134', '16 of the 24', 'five comparators', 'teams of up to four', '2.9 million students', 'Lithuanian for beaver'],
    sources: [
      { claim: 'AMT Bebras Computational Thinking Challenge page: dates, timing, divisions, format, scoring, awards, history, Bebras 365 and Mini Challenges.', url: 'https://amt.edu.au/bebras' },
      { claim: 'AMT 2026 key dates calendar (competition dates cross-check, as used on our competitions calendar page).', url: 'https://amt.edu.au/wp-content/uploads/2025/2026-Competitions-and-Programs-Key-Dates-Calendar.pdf' },
      { claim: 'AMT home page and competitions menu, confirming the AMT runs Bebras alongside CAT and the AIO.', url: 'https://amt.edu.au/' }
    ],
    rejectedClaims: [
      'Bebras entry fees: set in Australian dollars by the AMT, not printed (one-currency rule).',
      '2027 Bebras dates: not published when checked, so not stated.',
      'Any reproduction of AMT or Bebras questions: refused; the practice task is original and past challenges are only linked.',
      'Any award or score promise: refused.',
      'Any affiliation with the AMT, CSIRO or the International Bebras Committee: none.'
    ]
  }
};
