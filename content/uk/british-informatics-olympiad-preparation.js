'use strict';
// British Informatics Olympiad preparation (ag- competition spoke, UK cluster Phase 1 preview).
// Organiser facts read at olympiad.org.uk on 20 September 2026: round one is "a 3-hour paper, with three
// questions", answered "in any language", "to be taken in school" on "a day of the school's choosing",
// during December and January (the 2026 window ran 8 December 2025 to 23 January 2026); entry is "open to
// students under 19 years of age and studying full-time at an establishment of Secondary or Further (not
// Higher) Education in mainland Britain"; the final is held in Cambridge at Easter; the top four
// finalists form the team for the International Olympiad in Informatics, hosted by Uzbekistan in 2026.
// Spine: the test you did not write. Our own experiment of 20 September 2026 (scratchpad uk/bio/
// difftest.js, seeded mulberry32, seed 20260920): a fast grid-path solution carrying one plausible bug
// against a brute force, on 10,000 random grids up to 5 by 5. The buggy version disagreed on 1,872 cases
// (18.7 per cent), the first at case 12; the corrected version disagreed on none. Lesson family:
// randomised differential testing (property tests plus seeded randomness), checked free site-wide.
// No past paper is reproduced; learners are pointed at the organiser's own archive.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'BIO', label: 'British Informatics Olympiad', blurb: 'What round one actually asks, and the testing habit that finds the bug before the marker does.' },
  slug: 'british-informatics-olympiad-preparation',
  code: 'bio',
  accent: '#9B5527',
  accentRationale: 'BIO: a dark copper from the solver (4.58:1 on every paper tint), separated from the London red and the competitions bronze',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'British Informatics Olympiad preparation',
  title: 'British Informatics Olympiad Preparation | BIO Round One',
  description: 'Preparation for the British Informatics Olympiad: what round one asks, how to test a solution until it breaks, and weekly practice with a teacher. First class free.',
  ogDescription: 'BIO round one is a 3-hour paper with three questions, sat in school. Here is what it asks, how to prepare, and the random testing habit that catches the bug you did not think of.',
  twitterDescription: 'British Informatics Olympiad preparation: round one explained, and how to test until your solution breaks.',
  pageName: 'British Informatics Olympiad Preparation',
  webPageDescription: 'How to prepare for the British Informatics Olympiad: the published rules of round one, a testing method that finds hidden bugs, and live online classes in algorithms and problem solving.',
  courseDescription: 'Live online competitive programming and algorithms classes for students preparing for the British Informatics Olympiad and similar contests, taught with original practice problems.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'British Informatics Olympiad',
  navLinks: [
    { href: '#what', label: 'What BIO asks' },
    { href: '#testing', label: 'The testing habit' },
    { href: '#plan', label: 'A term of practice' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Round one in school &middot; Live online preparation',
  h1: 'British Informatics Olympiad preparation',
  lede: 'The British Informatics Olympiad is the national programming competition for school students, and its first round is unusual: three questions, three hours, any programming language, sat in your own school on a day the school picks. Nobody watches you type, and nothing stops a plausible-looking program from being wrong on the cases the marker will try. That is what makes preparation different from revision. You cannot memorise your way through it, and you cannot tell by reading whether your solution is right. This page sets out what the organiser says round one involves, shows a testing method that finds the bugs reading never does, and explains what weekly practice with a teacher adds.',
  secondaryCta: { href: '#testing', label: 'See the testing method' },
  wa: 'Hello Modern Age Coders, I would like a free class about preparing for the British Informatics Olympiad.',
  heroNote: 'Original practice problems &middot; No past papers reproduced &middot; No results promised',
  spec: [
    ['Round one', '3 hours, three questions'],
    ['Where', 'In school, date chosen by the school'],
    ['Language', 'Any programming language'],
    ['Who', 'Under 19, secondary or further education'],
    ['Where from', 'Mainland Britain'],
    ['Window', 'December and January'],
    ['Then', 'A final in Cambridge at Easter'],
    ['Top four', 'The team for the IOI']
  ],
  capsuleQ: 'In short',
  capsule: 'The British Informatics Olympiad sets round one as a 3-hour paper with three questions, answered in any programming language and taken in school on a day of the school\'s choosing, during December and January. The organiser opens it to students under 19 studying full-time at an establishment of Secondary or Further, not Higher, Education in mainland Britain. Strong entrants go to a final in Cambridge at Easter, and the top four finalists form the UK team for the International Olympiad in Informatics, which Uzbekistan hosted in 2026. Preparation is mostly two things: knowing a handful of algorithm patterns, and testing a solution hard enough to find your own mistakes. We teach both live online, with problems written fresh rather than copied from the organiser\'s papers. A first class is free; groups cost USD 100 a month and one-to-one USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses behind a BIO entry',
    lede: 'Most entrants need two things at once: more algorithms, and better testing. These build them.',
    items: [
      { course: 'competitive-programming-for-teens-course', code: 'BIO / 01', title: 'Competitive programming', note: 'Contest-shaped problems with time limits, and the discipline of trying to break your own answer before the clock does.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'BIO / 02', title: 'Algorithms and data structures', note: 'Search, recursion, dynamic programming and the structures round one keeps reaching for.' },
      { course: 'python-complete-masterclass-teens', code: 'BIO / 03', title: 'Python from start to finish', note: 'For entrants whose programming is not yet fluent: the language first, so the contest is about the thinking.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What the organiser says',
      h2: 'Round one, in the organiser\'s own words',
      lede: 'Everything in this table is quoted or summarised from olympiad.org.uk, read on 20 September 2026. Check it again before entering, because arrangements change year to year.',
      body: [
        { kind: 'table', caption: 'British Informatics Olympiad, round one', head: ['Question', 'What the organiser states'], rows: [
          ['What is it?', 'A 3-hour paper with three questions'],
          ['In what language?', 'Answers may be written in any programming language'],
          ['Where is it sat?', 'In school, on a day of the school\'s choosing'],
          ['When?', 'During December and January; the 2026 window ran from 8 December 2025 to 23 January 2026'],
          ['Who may enter?', 'Students under 19 years of age studying full-time at an establishment of Secondary or Further, not Higher, Education in mainland Britain'],
          ['What is submitted?', 'The student\'s computer programs, together with written answers to the problems'],
          ['What comes next?', 'A final held in Cambridge at Easter'],
          ['And after that?', 'The top four finalists make up the team for the International Olympiad in Informatics, hosted by Uzbekistan in 2026']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Two details change how a student should prepare. The paper is sat in school, so a teacher has to enter the school and set a date: if nobody at school knows about it, that conversation is the first task, not the algorithms.',
            'And because answers include written work as well as programs, a solution that is half explained is worth more than a program that silently fails. Practising the writing matters.'
          ],
          right: [
            'The language freedom cuts both ways. A student may use whatever they know best, but nothing in the room will tell them their program is wrong. Under exam conditions the only judge available is the student\'s own testing, which is why the next section is the heart of this page.',
            'Students in Northern Ireland should check their eligibility with the organiser, since the rules quoted above say mainland Britain. The <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a> lists alternatives, including one in Belfast.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://olympiad.org.uk/2026/index.html" rel="noopener" target="_blank">British Informatics Olympiad 2026</a> and its <a class="ag-inline-link" href="https://www.olympiad.org.uk/2026/rules.html" rel="noopener" target="_blank">rules page</a>, read 20 September 2026. Modern Age Coders is not connected with the British Informatics Olympiad.' }
      ]
    },
    {
      id: 'testing', tint: 'deep', eyebrow: 'The habit that wins marks',
      h2: 'The test you did not write',
      lede: 'Contest solutions fail on cases their author never imagined. The fix is not to imagine harder; it is to let a computer find them for you.',
      body: [
        { kind: 'three', cells: [
          { h3: '1. Write the slow version', p: 'First solve the problem the obvious, stupid way: try every possibility. It will be far too slow for the real input, and that does not matter. It is your definition of the right answer.' },
          { h3: '2. Generate small cases', p: 'Write a generator that makes tiny random inputs, small enough for the slow version to finish instantly, and seed it so any run can be repeated exactly.' },
          { h3: '3. Compare until they differ', p: 'Run both on thousands of cases and stop at the first disagreement. Because the case is tiny, you can read it, work it out by hand and see the bug.' }
        ] },
        { kind: 'p', text: 'Here is the method on a problem of exactly the kind round one likes. Count the routes from the top-left to the bottom-right of a small grid, moving only right or down, with some squares blocked. We wrote a fast solution in the usual way, with one plausible mistake in how it fills the first row, and a brute force that simply tries every route. Then we generated 10,000 random grids of up to five by five squares from a fixed seed, and compared.' },
        { kind: 'table', caption: 'Our run of 20 September 2026: fast solution against brute force, 10,000 random grids, seed 20260920', head: ['Measure', 'Result'], rows: [
          ['Cases tested', '10,000'],
          ['Cases where the buggy fast solution disagreed', '1,872, or 18.7 per cent'],
          ['First disagreement', 'Case 12, a five-row grid, brute force 0 routes against the fast solution\'s 1'],
          ['Cases where the corrected solution disagreed', 'None'],
          ['Time to find the first bug', 'Under a second']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The bug was invisible on the examples in the question, which is exactly how contest mistakes behave. It only showed itself when a wall sat in the first row, and that arrangement did not appear in the sample input. Reading the code again would not have helped; a hundred hand-written tests might have missed it too.'
          ],
          right: [
            'The seed matters more than it looks. Recording it means a failing run can be reproduced exactly, by you tomorrow or by a teacher looking at your work. Without it, a bug that appears once and vanishes is the most frustrating thing in competitive programming.'
          ] },
        { kind: 'p', text: 'This is a habit, not a trick, and it transfers well beyond contests: every serious software team compares a fast implementation against a simple one this way. In class, learners build the generator and the brute force before they optimise anything, and a teacher reads both.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'A term of practice',
      h2: 'Ten weeks, one hour a week, and no cramming',
      lede: 'A realistic shape for an autumn term before a December or January paper. It assumes a student can already write programs in one language.',
      body: [
        { kind: 'table', caption: 'A ten-week preparation shape', head: ['Weeks', 'Focus', 'What the student should be able to do by the end'], rows: [
          ['1 to 2', 'Reading problems and brute force', 'Restate a problem in their own words and solve it slowly but correctly'],
          ['3 to 4', 'Testing', 'Write a generator and a brute force, and find their own bug with a seeded run'],
          ['5 to 6', 'Search and recursion', 'Enumerate arrangements, prune sensibly and know when recursion is the wrong tool'],
          ['7 to 8', 'Dynamic programming and counting', 'Turn a counting problem into a table, and explain in writing why it is correct'],
          ['9', 'Writing answers', 'Explain a method on paper clearly enough for a marker who never sees it run'],
          ['10', 'Full three-hour practice', 'Sit three fresh questions in one sitting and manage the clock']
        ] },
        { kind: 'p', text: 'Every practice problem we set is written fresh in the style of the competition. Past papers belong to the organiser and are on its own site, which is the right place to get them. If a school has never entered, a teacher can find the entry arrangements there too.' }
      ]
    },
    {
      id: 'answer', tint: '', eyebrow: 'Where we fit',
      h2: 'What a teacher adds, and what we do not claim',
      lede: 'Preparation is mostly practice. A teacher shortens the time between a mistake and understanding it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'What classes add', p: 'Problems at the right level each week, a person who reads both the program and the written explanation, and the testing habit above, taught until it is automatic.' },
          { h3: 'What we do not do', p: 'We do not enter students, invigilate, mark, or have any role in the competition. We do not reproduce its papers and we promise no score, no place in the final and no team selection.' },
          { h3: 'Worth it anyway', p: 'Everything on this page, from brute-force reasoning to seeded testing, is ordinary professional practice. A student who never sits the paper still keeps the skills.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting there',
    h2: 'Four steps to a serious attempt',
    lede: 'Most students arrive somewhere in the middle. The free class finds where.',
    table: { caption: 'From confident coder to contest entrant', head: ['Stage', 'Step', 'The evidence it is secure'], rows: [
      ['Before starting', '1. Fluent in one language', 'Can write and debug a 50-line program without help'],
      ['Weeks 1 to 4', '2. Slow but right', 'Solves a contest problem by brute force and proves it on small cases'],
      ['Weeks 3 to 6', '3. Tests properly', 'Finds a bug with a seeded generator rather than by rereading'],
      ['Weeks 5 to 10', '4. Fast and explained', 'Turns the slow answer into an efficient one and writes why it works']
    ] },
    left: { h3: 'If a school does not enter', ps: [
      'Ask the organiser about arrangements before assuming there is no route. Meanwhile the skills carry over to other contests on the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a>.',
      'Team contests such as the Perse Coding Team Challenge suit students who prefer company to silence.'
    ] },
    right: { h3: 'After round one', ps: [
      'Finalists work on harder problems and tighter limits. The path beyond is the <a class="ag-inline-link" href="/ioi-olympiad-informatics-training">International Olympiad in Informatics</a>, which the top four finalists reach.',
      'Many entrants also practise on <a class="ag-inline-link" href="/usaco-preparation-online-coaching">USACO</a>, which runs online through the year.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for contest preparation',
    lede: 'Ordered roughly by where an entrant usually needs work. Each card opens its syllabus.',
    bands: [
      { num: 'I', h3: 'Getting fluent', sub: 'The language stops being the obstacle', courses: [
        { code: 'BIO / LANG / 01', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Every core idea of the language, with prediction before running.' },
        { code: 'BIO / LANG / 02', slug: 'python-ai-kids-masterclass', title: 'First steps in Python', blurb: 'For younger entrants who are new to typed code.' },
        { code: 'BIO / LANG / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For students whose school teaches Java and who want to enter in it.' }
      ] },
      { num: 'II', h3: 'Algorithms', sub: 'The patterns round one rewards', courses: [
        { code: 'BIO / ALG / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Search, sorting, recursion and dynamic programming, reasoned on paper first.' },
        { code: 'BIO / ALG / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest problems against the clock, with testing built into the routine.' },
        { code: 'BIO / ALG / 03', slug: 'competitive-programming-masterclass-college', title: 'Advanced competitive programming', blurb: 'For finalists and sixth formers pushing into harder rounds.' }
      ] },
      { num: 'III', h3: 'Around the contest', sub: 'Projects, maths and hackathons', courses: [
        { code: 'BIO / EXTRA / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'Counting, proof and case analysis, which informatics problems lean on.' },
        { code: 'BIO / EXTRA / 02', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'Building something complete under time pressure.' },
        { code: 'BIO / EXTRA / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'For students whose interest runs towards the AI olympiad instead.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How preparation runs',
    h2: 'One hour a week, plus problems between',
    lede: 'Teachers work from India, five and a half hours ahead of the UK in winter and four and a half in summer, so most contest students take a weekday evening or a weekend morning, agreed in UK time.',
    slots: [
      { time: 'Weekday evening', l: 'The common choice for Years 10 to 13 during term.' },
      { time: 'Weekend morning', l: 'Long enough for a full practice paper and a review.' },
      { time: 'Holiday intensives', l: 'For the weeks before a December or January sitting.' }
    ],
    cells: [
      { h3: 'Problems written fresh', p: 'Every practice question is our own, in the competition\'s style; the organiser\'s papers stay on the organiser\'s site.' },
      { h3: 'Programs read line by line', p: 'The teacher reads the code and the written explanation, not just the final output.' },
      { h3: 'Testing every week', p: 'A generator and a brute force are part of the routine, not an afterthought.' },
      { h3: 'Small groups', p: 'Five to ten students at a similar level, comparing approaches to the same problem.' },
      { h3: 'One to one before a sitting', p: 'For a student with a date in the diary and specific gaps to close.' },
      { h3: 'Honest limits', p: 'No promises about scores or selection, and no help during the paper itself.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Four published student projects. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Google reviews from families, copied exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly, in US dollars, the same rate as every country outside India. No joining fee.',
    free: ['A real contest problem with a teacher', 'An honest view of the starting level', 'No card details'],
    group: ['Five to ten students at one level', 'Weekly problems and code review', 'The same teacher throughout', 'A certificate at the end'],
    one: ['A teacher for one student', 'Planned around the sitting date', 'Suited to finalists and to late starters']
  },

  faq: {
    eyebrow: 'Questions about the BIO',
    h2: 'What students and parents ask about the British Informatics Olympiad',
    items: [
      { q: 'What happens in round one?', a: 'The organiser describes it as a 3-hour paper with three questions, answered in any programming language and taken in school on a day the school chooses, during December and January.' },
      { q: 'Who can enter?', a: 'The organiser states it is open to students under 19 years of age studying full-time at an establishment of Secondary or Further, not Higher, Education in mainland Britain.' },
      { q: 'Which programming language should my child use?', a: 'Whichever they write most fluently, since any language is allowed. Fluency matters more than the choice: three hours is not long enough to fight the language as well as the problems.' },
      { q: 'What happens after round one?', a: 'Strong entrants are invited to a final held in Cambridge at Easter, and the top four finalists make up the UK team for the International Olympiad in Informatics, which Uzbekistan hosted in 2026.' },
      { q: 'How should a student practise?', a: 'Solve problems slowly and correctly first, then test hard: write a brute force and a seeded random generator and compare. In our own run of 10,000 random cases, that method exposed a bug in 1,872 of them that reading the code had not revealed.' },
      { q: 'Do you use past BIO papers?', a: 'No. Practice problems are written fresh in the same style. The organiser publishes its own past papers, and that is where students should get them.' },
      { q: 'Can you enter my child for the competition?', a: 'No. Entry is arranged by the school with the organiser. We teach the preparation, and we have no role in the competition itself.' },
      { q: 'My school has never entered. What now?', a: 'Ask a computing teacher to look at the organiser\'s site, since the paper is sat in school on a date the school picks. In the meantime, other contests on our calendar page are open to individuals.' },
      { q: 'What do classes cost?', a: 'The first class is free. After that a group place is USD 100 a month and one-to-one teaching USD 150, with no joining fee and no annual contract.' },
      { q: 'When are lessons, in UK time?', a: 'A weekly slot agreed in the free class, usually a weekday evening or a weekend morning. India runs five and a half hours ahead of the UK in winter and four and a half in summer.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Other contests and pages',
    lede: 'Where the BIO sits among the rest.',
    items: [
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Every UK coding, maths and AI contest we could confirm.' },
      { href: '/ioi-olympiad-informatics-training', label: 'International Olympiad in Informatics', p: 'Where the top four finalists go next.' },
      { href: '/usaco-preparation-online-coaching', label: 'USACO preparation', p: 'An online contest that runs through the year.' },
      { href: '/coding-olympiad-medal-track', label: 'The coding olympiad track', p: 'How the contests build on one another.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class in the UK', p: 'Seven checks for any provider.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page.' }
    ]
  },

  start: {
    h2: 'Try a contest problem, free',
    lede: 'Send a number and we will arrange a free class at a UK time that suits. The class is a real contest problem, solved slowly, then tested until it breaks.',
    readFirst: 'Prefer to read first? Each <a class="ag-inline-link" href="/courses">course page</a> lists its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the method, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> shows the order of topics.',
    note: 'WhatsApp from a UK mobile costs nothing and is usually quickest. Our number is Indian and described as such; there is no UK office.',
    formNote: 'No card, no obligation. One reply to arrange the class.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar' },
        { href: '/ioi-olympiad-informatics-training', label: 'Informatics olympiad' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' },
        { href: '/ukmt-maths-challenge-tutoring', label: 'UKMT challenges' }
      ] },
      { h4: 'United Kingdom', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/best-online-coding-classes-uk', label: 'Choosing a class' },
        { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
        { href: '/best-coding-class-in-london', label: 'London' }
      ] }
    ],
    bottomRight: 'Preparation only: we are not connected with the competition'
  },

  personalityCss: `
.ag-root.ag-bio .ag-hero-grid { gap: clamp(1rem, 2.6vw, 2.3rem); }
.ag-root.ag-bio .ag-hero h1 { letter-spacing: -0.022em; }
.ag-root.ag-bio .ag-capsule { border-left-width: 5px; }
.ag-root.ag-bio .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-bio .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-bio .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-bio .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-bio .ag-slots { gap: 1.15rem; }
`,

  mustMention: ['three questions', 'Secondary or Further', 'Uzbekistan', '1,872', '18.7 per cent', '10,000 random grids', 'seed 20260920', 'brute force', 'Case 12', 'a day of the school\'s choosing']
};
