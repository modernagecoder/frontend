'use strict';
// Australian maths competitions for primary kids (ag- competition hub, Australia cluster Phase 3, row 105).
// Facts read raw on 7 October 2026 (curl default agent): AMT pages for the AMC (divisions, 60 minutes for
// primary, 2026 dates, topics, the free AMC Early Primary pilot for Years 1 and 2 from 12 to 23 October 2026),
// Maths Challenge (Years 3 to 10, 3 to 4 weeks, groups of three in primary), the AJMO (up to Year 8), and the
// AMT 2026 key dates PDF (KSF, Maths Enrichment divisions and dates); APSMO Maths Olympiad Years 5-6 (since
// 1987, four contests, 5 questions in 30 minutes, school entry only, teams up to 30); ICAS year levels and
// dates (Mathematics Years 2 to 12; primary papers and timings; 2026 window 24 to 28 August). Spine: solve a
// simpler problem first, counting squares of any size in a grid (family checked free site-wide on
// 7 October 2026; values verified by hand and by sum of squares).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'competition', tag: 'PRIMARY MATHS CONTESTS', label: 'Maths competitions for primary kids', blurb: 'Every maths competition open to Australian primary students, from the AMC to the APSMO Maths Olympiad, by year level.' },
  slug: 'australian-maths-competitions-for-primary-kids',
  code: 'mpka',
  accent: '#6C6028',
  accentRationale: 'Maths competitions for primary kids: a warm olive chosen by hand, muted, at least 10 RGB from every accent in use or claimed',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Maths competitions for primary kids in Australia',
  title: 'Maths Competitions for Primary Kids in Australia: A Guide',
  description: 'Maths competitions for Australian primary students by year level: the AMC, Maths Challenge, Kangourou sans Frontières, APSMO Maths Olympiad, ICAS and the AJMO.',
  ogDescription: 'A guide for Australian parents and teachers to the maths competitions a primary student can enter, what each involves, which year levels it suits, and a problem-solving strategy to try at home.',
  twitterDescription: 'Australian maths competitions for primary students, by year level, with a strategy to practise at home.',
  pageName: 'Maths Competitions for Primary Kids in Australia',
  webPageDescription: 'A hub guide to maths competitions for Australian primary school students: the Australian Mathematics Competition and its new Early Primary paper, Kangourou sans Frontières, Maths Challenge, Maths Enrichment, the APSMO Maths Olympiad, ICAS Mathematics and the AJMO, with a worked lesson on solving a simpler problem first.',
  courseDescription: 'Live online maths classes for Australian primary students that build number sense and problem solving, including preparation for competitions such as the AMC and APSMO Maths Olympiad.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Primary maths competitions',
  navLinks: [
    { href: '#list', label: 'The competitions' },
    { href: '#detail', label: 'Formats' },
    { href: '#simpler', label: 'Strategy lesson' },
    { href: '#start-here', label: 'Choosing' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Years 1 to 6 &middot; Checked at each organiser',
  h1: 'Maths competitions for primary kids',
  lede: 'Maths competitions can give primary children something school maths rarely does: problems with no obvious method, where the fun is in working out how to start. Australia has a strong set of them, from the Australian Mathematics Competition, first run in 1978, to the APSMO Maths Olympiad for Years 5 and 6 and a brand-new paper for Years 1 and 2. This page lists them by year level, with every detail checked at the organiser, and works through one problem-solving strategy that helps on almost every paper. We are independent of every organiser named, and we never reproduce their questions.',
  secondaryCta: { href: '#simpler', label: 'Try the strategy' },
  wa: 'Hello Modern Age Coders, I would like a free maths class about competitions for my primary school child in Australia.',
  heroNote: 'Checked at each organiser on 7 October 2026 &middot; Independent of all of them &middot; Problem solving, not drilling',
  spec: [
    ['Covers', 'Maths competitions and programs'],
    ['Year levels', 'Years 1 to 6'],
    ['Longest running', 'AMC, first run in 1978'],
    ['New for Years 1 and 2', 'Free AMC Early Primary pilot, 12 to 23 October 2026'],
    ['Team problem solving', 'Maths Challenge, groups of three in primary'],
    ['Years 5 and 6 olympiad', 'APSMO, four contests a year'],
    ['We provide', 'Maths problem-solving classes'],
    ['We are not', 'An organiser of any competition']
  ],
  capsuleQ: 'In short',
  capsule: 'Australian primary students can sit the Australian Mathematics Competition from Year 3 (60 minutes for primary), Kangourou sans Frontières, ICAS Mathematics from Year 2, the APSMO Maths Olympiad in Years 5 and 6, and the AJMO up to Year 8. The Maths Challenge program runs over 3 to 4 weeks. Years 1 and 2 can try the free AMC Early Primary pilot from 12 to 23 October 2026.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for young problem solvers',
    lede: 'Number sense and problem solving first; competitions reward both.',
    items: [
      { course: 'mental-maths-mastery-kids', code: 'MPK / 01', title: 'Mental maths for kids', note: 'Number sense rather than tricks, for ages 5 to 10: the base every primary paper builds on.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'MPK / 02', title: 'Competition maths', note: 'Problem-solving strategies for the AMC and APSMO style of question, and beyond.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'MPK / 03', title: 'Primary maths', note: 'Live classes that place each child by level, so competition work rests on secure basics.' }
    ]
  },

  sections: [
    {
      id: 'list', tint: 'tint', eyebrow: 'The competitions',
      h2: 'Maths competitions open to primary students, by year level',
      lede: 'Year levels and 2026 dates are as each organiser publishes them. Most competitions are entered through schools.',
      body: [
        { kind: 'table', caption: 'Maths competitions and programs for Australian primary students, 2026', head: ['Competition', 'Organiser', 'Primary years', '2026 timing'], rows: [
          ['AMC Early Primary (free pilot)', 'Australian Maths Trust', 'Years 1 and 2', '12 to 23 October, online'],
          ['ICAS Mathematics', 'ICAS Assessments', 'Years 2 to 6 (and to Year 12)', '24 to 28 August sitting window'],
          ['Kangourou sans Frontières (KSF)', 'Australian Maths Trust', 'Years 3 to 6 (and secondary)', '24 to 26 March'],
          ['Maths Challenge', 'Australian Maths Trust', 'Years 3 to 6 (and to Year 10)', 'A 3 to 4 week program between 2 March and 26 June'],
          ['Australian Mathematics Competition (AMC)', 'Australian Maths Trust', 'Years 3 to 6 (and secondary)', '4 to 6 August'],
          ['Maths Enrichment', 'Australian Maths Trust', 'Capable students from Year 4', '12 to 16 weeks between 30 March and 16 October'],
          ['Maths Olympiad Years 5-6', 'APSMO', 'Years 5 and 6', '6 May, 10 June, 29 July, 9 September'],
          ['Australian Junior Mathematics Olympiad (AJMO)', 'Australian Maths Trust', 'Up to Year 8', 'Thursday 10 September']
        ] },
        { kind: 'p', mt: true, text: 'Coding and computational thinking contests for the same age group are gathered in our guide to <a class="ag-inline-link" href="/australian-coding-competitions-for-primary-kids">coding competitions for primary kids</a>, and the full year appears month by month on the <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">Australian competitions calendar</a>. Entry fees are set by the organisers and are not shown here.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://amt.edu.au/amc" rel="noopener" target="_blank">AMT AMC</a>; <a class="ag-inline-link" href="https://amt.edu.au/challenge" rel="noopener" target="_blank">AMT Maths Challenge</a>; <a class="ag-inline-link" href="https://amt.edu.au/ajmo" rel="noopener" target="_blank">AMT AJMO</a>; <a class="ag-inline-link" href="https://amt.edu.au/wp-content/uploads/2025/2026-Competitions-and-Programs-Key-Dates-Calendar.pdf" rel="noopener" target="_blank">AMT 2026 key dates</a>; <a class="ag-inline-link" href="https://apsmo.edu.au/competitions-programs/maths-olympiad-years-5-6/" rel="noopener" target="_blank">APSMO Maths Olympiad Years 5-6</a>; <a class="ag-inline-link" href="https://www.icasassessments.com/event-calendar/" rel="noopener" target="_blank">ICAS 2026 dates</a>. Read 7 October 2026.' }
      ]
    },
    {
      id: 'detail', tint: 'deep', eyebrow: 'Formats',
      h2: 'What each one actually involves',
      lede: 'Competitions differ more in format than in difficulty. Knowing the format helps a child prepare calmly.',
      body: [
        { kind: 'table', caption: 'Formats for primary students, from the organisers', head: ['Competition', 'Primary format', 'Worth knowing'], rows: [
          ['AMC', '60 minutes; Middle Primary (Years 3 and 4) and Upper Primary (Years 5 and 6) divisions', 'Topics may include arithmetic, fractions and ratios, pre-algebra, geometry, measurement, statistics and probability, and problem solving'],
          ['AMC Early Primary pilot', '25 questions (20 multiple choice, 5 integer answer), 50 minutes, online only', 'Free in 2026; the AMT says it will join the standard AMC from 2027'],
          ['Maths Challenge', 'About 1 hour of class time and 2 to 3 hours of study a week', 'Primary students work in groups of three; problems vary each year, based on the national curriculum'],
          ['APSMO Maths Olympiad', 'Four contests about six weeks apart; each has 5 questions worth 1 mark, in 30 minutes', 'School entry only; teams of up to 30 students; running in Australia since 1987'],
          ['ICAS Mathematics', 'Year 2: 30 questions in 35 minutes; Years 3 to 5: 40 in 45 minutes; Year 6: 40 in 1 hour', 'One paper per year level, sat at school or a testing centre'],
          ['AJMO', '10 problems, 90 minutes, online, single integer answers from 0 to 999', 'A first olympiad-style paper; schools choose the AJMO or the AIMO for each student']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The AMC, according to the AMT, is Australia\'s longest running, largest and best-known maths competition for school students. Kangourou sans Frontières, which the AMT says was inspired by the AMC, now has more than 6 million participants worldwide each year.',
            'Maths Enrichment is a different kind of program: an extension course for capable students from Year 4, run over 12 to 16 weeks with printed notes students keep, in divisions named after mathematicians from Ramanujan to Pólya.'
          ],
          right: [
            'APSMO describes its Maths Olympiad as an inter-school competition for high-achieving and high-potential Years 5 and 6 students, completed individually under exam conditions, with solutions reviewed as a group afterwards.',
            'The AJMO is new: the AMT pitches it at students up to Year 8 who enjoy challenging problems but are not yet ready for the Australian Intermediate Mathematics Olympiad.'
          ] }
      ]
    },
    {
      id: 'simpler', tint: 'tint', eyebrow: 'Strategy lesson',
      h2: 'Solve a simpler problem first',
      lede: 'Competition problems often look too big to start. One reliable strategy is to shrink the problem, solve small versions, and look for the pattern. The problem below is ours.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The problem', p: 'How many squares of any size can you find in a 6 by 6 grid? Not just the 36 small ones: 2 by 2 squares, 3 by 3 squares, all the way up to the whole grid.' },
          { h3: 'Make it smaller', p: 'Start with a 1 by 1 grid: 1 square. A 2 by 2 grid has 4 small squares and 1 big one: 5. A 3 by 3 grid has 9, 4 and 1: 14.' },
          { h3: 'Find the pattern', p: 'The counts are 1, then 1 plus 4, then 1 plus 4 plus 9. Each grid adds the next square number. So a 6 by 6 grid has 1 plus 4 plus 9 plus 16 plus 25 plus 36.' }
        ] },
        { kind: 'table', mt: true, caption: 'Squares of any size in an n by n grid, counted by size', head: ['Grid', '1 by 1', '2 by 2', '3 by 3', '4 by 4', '5 by 5', '6 by 6', 'Total'], numCols: [1, 2, 3, 4, 5, 6, 7], rows: [
          ['1 by 1', '1', '', '', '', '', '', '1'],
          ['2 by 2', '4', '1', '', '', '', '', '5'],
          ['3 by 3', '9', '4', '1', '', '', '', '14'],
          ['4 by 4', '16', '9', '4', '1', '', '', '30'],
          ['5 by 5', '25', '16', '9', '4', '1', '', '55'],
          ['6 by 6', '36', '25', '16', '9', '4', '1', '91']
        ] },
        { kind: 'p', mt: true, text: 'The answer for the 6 by 6 grid is 91. The table also shows why the pattern works, which matters as much as the number: in a 6 by 6 grid, a 2 by 2 square can start in any of 5 positions across and 5 down, giving 25; a 3 by 3 square in 4 positions each way, giving 16; and so on, until the single 6 by 6 square. Children who can explain that reason have done more than spot a pattern, they have shown why it must continue. This is exactly the habit the harder competition questions reward, and it carries all the way to olympiad level.' },
        { kind: 'two', mt: true,
          leftH3: 'Trying it at home',
          left: [
            'Draw the small grids on squared paper and colour each size of square in a different colour. Counting by colour keeps the work organised and makes the pattern visible.',
            'Then ask a follow-up: what about a 6 by 4 rectangle? The same shrinking strategy works, and the answer is a good test of whether the reason was really understood.'
          ],
          rightH3: 'Other places it helps',
          right: [
            'Problems about handshakes, paths through a grid, or numbers in a growing pattern all yield to the same move: try the small cases, record them in a table, and look for what changes each time.',
            'It also builds patience. A child who knows that small cases lead somewhere is far less likely to give up on a question that looks impossible at first.'
          ] }
      ]
    },
    {
      id: 'start-here', tint: '', eyebrow: 'Choosing',
      h2: 'Picking a first competition, and preparing for it',
      lede: 'For most children, the right first competition is a short one that feels like a game. Here is a gentle starting guide.',
      body: [
        { kind: 'table', caption: 'A starting guide for primary maths competitions', head: ['Year level', 'A gentle first step', 'When ready for more'], rows: [
          ['Years 1 and 2', 'AMC Early Primary (free pilot), puzzles at home', 'ICAS Mathematics in Year 2'],
          ['Years 3 and 4', 'Maths Challenge with friends, KSF', 'The AMC Middle Primary division'],
          ['Year 5', 'The AMC Upper Primary division', 'APSMO Maths Olympiad, Maths Enrichment'],
          ['Year 6', 'APSMO Maths Olympiad', 'The AJMO, or Maths Enrichment at a higher division']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Our classes build number sense and problem-solving strategies: drawing a picture, making a table, working backwards, solving a simpler problem, checking an answer makes sense. Children explain their thinking out loud, because explaining is how the strategies stick.',
            'Practice uses problems we write ourselves in a similar spirit; organisers\' past papers belong to them and we never reproduce them.'
          ],
          right: [
            'We are independent of the Australian Maths Trust, APSMO and ICAS, and do not enter children or handle results. Entries normally go through schools, and each organiser explains how families can take part.',
            'We do not promise a score, a certificate level or a medal. For a primary child, a competition is a chance to enjoy hard thinking, and the result is simply one day\'s snapshot.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing as a problem solver',
    h2: 'Four rungs through primary maths competitions',
    lede: 'Children grow at different speeds; the order is usually this one.',
    table: { caption: 'From confident counting to explained solutions', head: ['Around', 'Rung', 'The sign it is secure'], rows: [
      ['Years 1 and 2', '1. Confident with number', 'Counts, adds and compares quickly and accurately'],
      ['Years 3 and 4', '2. Has strategies', 'Chooses to draw, list or act out a problem without being told'],
      ['Years 4 and 5', '3. Organises work', 'Records small cases in a table and spots the pattern'],
      ['Years 5 and 6', '4. Explains why', 'Says why a pattern must continue, not only that it does']
    ] },
    left: { h3: 'After a competition', ps: [
      'Look at one question your child found hardest and solve it together slowly. That single conversation teaches more than another practice paper.',
      'Praise the strategy, not the score. Strategies are what carry forward.'
    ] },
    right: { h3: 'Coding contests too', ps: [
      'For coding and computational thinking contests, see <a class="ag-inline-link" href="/australian-coding-competitions-for-primary-kids">coding competitions for primary kids</a>.',
      'Older students can read our <a class="ag-inline-link" href="/australian-mathematical-olympiad-preparation">Australian Mathematical Olympiad guide</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for primary mathematicians',
    lede: 'From number sense to competition strategy. Each card opens its syllabus.',
    bands: [
      { num: 'I', h3: 'Number sense', sub: 'Years 1 to 4', courses: [
        { code: 'MPK / NS / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense, not tricks.' },
        { code: 'MPK / NS / 02', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'Secure first steps in number.' },
        { code: 'MPK / NS / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus mental maths', blurb: 'Visual calculation for young learners.' }
      ] },
      { num: 'II', h3: 'Problem solving', sub: 'Years 3 to 6', courses: [
        { code: 'MPK / PS / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Strategies for contest problems.' },
        { code: 'MPK / PS / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Classes placed by level.' },
        { code: 'MPK / PS / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Logic and patterns.' }
      ] },
      { num: 'III', h3: 'Stretch', sub: 'Upper primary and beyond', courses: [
        { code: 'MPK / ST / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'Ready for the AJMO and beyond.' },
        { code: 'MPK / ST / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns explored with code.' },
        { code: 'MPK / ST / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Fast mental methods, explained.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Friendly online maths classes after school',
    lede: 'Our maths teachers teach live from India. Australian clocks run ahead: Darwin by four hours all year, Melbourne by four and a half in winter and five and a half in summer. So an Australian after-school maths class takes place in the Indian afternoon, at a comfortable hour for young children.',
    slots: [
      { time: 'After school', l: 'Number sense and a strategy of the week.' },
      { time: 'Saturday morning', l: 'A longer set of puzzles, solved together.' },
      { time: 'Before a competition', l: 'Calm practice with our own problems.' }
    ],
    cells: [
      { h3: 'Strategies taught', p: 'Draw it, list it, shrink it, check it.' },
      { h3: 'Thinking out loud', p: 'Children explain how they solved each problem.' },
      { h3: 'Original problems', p: 'Never copied from competition papers.' },
      { h3: 'Classes of fifteen to twenty', p: 'Children at a similar level, learning from each other.' },
      { h3: 'One-to-one option', p: 'For a child who needs a different pace or more stretch.' },
      { h3: 'No medal promised', p: 'Organisers set and mark; we build the thinking.' }
    ]
  },

  projectsH2: 'Work our students have shared',
  projectsLede: 'Made for the love of it, apart from any competition. See the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Family reviews from Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'Maths classes are charged per month in US dollars, our international rate, with no enrolment fee and no fixed term. Competition entries are arranged with the organisers, usually through schools, and are separate from our fees.',
    free: ['A free first maths class', 'A short check of number sense and strategies', 'No payment details'],
    group: ['Fifteen to twenty children at one level', 'The same teacher each week', 'Problems solved and discussed together', 'A certificate on completion'],
    one: ['A teacher for one child', 'Work pitched exactly at the child\'s level', 'Times arranged around family life']
  },

  faq: {
    eyebrow: 'Questions about primary maths competitions',
    h2: 'What parents and teachers ask',
    items: [
      { q: 'What maths competitions can primary students enter in Australia?', a: 'The AMC from Year 3, Kangourou sans Frontières, the Maths Challenge program, ICAS Mathematics from Year 2, the APSMO Maths Olympiad in Years 5 and 6, the AJMO up to Year 8, and Maths Enrichment for capable students from Year 4.' },
      { q: 'Is there anything for Years 1 and 2?', a: 'Yes. The AMT is running a free AMC Early Primary pilot for Years 1 and 2 from 12 to 23 October 2026: 25 questions in 50 minutes, online only. ICAS Mathematics also has an Introductory paper for Year 2.' },
      { q: 'What is the APSMO Maths Olympiad?', a: 'An inter-school competition for Years 5 and 6 run by APSMO since 1987: four contests a year, each of 5 questions in 30 minutes, entered by schools in teams of up to 30 students.' },
      { q: 'How long is the AMC for primary students?', a: 'Sixty minutes for the Middle Primary (Years 3 and 4) and Upper Primary (Years 5 and 6) divisions. In 2026 it ran from 4 to 6 August.' },
      { q: 'What does "solve a simpler problem first" mean?', a: 'A problem-solving strategy: shrink a big problem to small versions, solve those, record the answers in a table and look for the pattern, then explain why it holds.' },
      { q: 'Can my child enter without their school?', a: 'APSMO says individual registration is not possible; it is school entry only. For other competitions, each organiser\'s site explains whether families can enter through testing centres or other routes.' },
      { q: 'Is Maths Challenge a test?', a: 'Not in the usual sense. The AMT runs it as a 3 to 4 week problem-solving program, with primary students working in groups of three alongside teacher discussion.' },
      { q: 'Do you use past competition papers?', a: 'No. Past papers belong to the organisers. We teach strategies with problems written by us in a similar spirit.' },
      { q: 'Will classes guarantee a High Distinction or medal?', a: 'No. Organisers set and mark their own competitions. We build number sense and problem-solving strategies, which is what the papers reward.' },
      { q: 'What happens in the free class?', a: 'Your child tries a few problems with a teacher, including one that uses a strategy like solving a simpler case first, and you get honest advice on a suitable first competition.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for primary families',
    lede: 'Coding contests, maths support and the national picture.',
    items: [
      { href: '/australian-coding-competitions-for-primary-kids', label: 'Coding competitions for primary kids', p: 'Bebras, the CAT and more.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Every contest by month.' },
      { href: '/australian-mathematics-competition-practice-by-year', label: 'AMC practice by year', p: 'Divisions and question style.' },
      { href: '/maths-challenge-for-young-australians-practice', label: 'Maths Challenge practice', p: 'Problems marked with a rubric.' },
      { href: '/apsmo-maths-olympiad-practice', label: 'APSMO practice', p: 'Five questions, thirty minutes.' },
      { href: '/icas-maths-practice-online', label: 'ICAS Maths practice', p: 'Papers and entry routes.' },
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy', p: 'How the tailored test works.' },
      { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMT competitions', p: 'The AMC, CAT and AIO in depth.' },
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring online', p: 'Weekly maths for Australian students.' },
      { href: '/math-olympiad-amc-tutoring', label: 'Maths olympiad tutoring', p: 'For children ready for more.' }
    ]
  },

  start: {
    h2: 'Book a free maths class',
    lede: 'Tell us your child\'s year level and how they feel about maths puzzles. The free class tries a few competition-style problems together and ends with a suggestion for a first competition.',
    readFirst: 'Would you like to see the courses first? Every syllabus is on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our classes.',
    note: 'WhatsApp is generally the quickest way to hear back. Our number is Indian because our teachers work from India; we have no Australian office.',
    formNote: 'Free, with no card and no commitment. We reply once to arrange it.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Coding for kids' }
      ] },
      { h4: 'Competitions', links: [
        { href: '/australian-coding-competitions-for-primary-kids', label: 'Primary coding contests' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMT competitions' },
        { href: '/course-atlas', label: 'Course atlas' }
      ] }
    ],
    bottomRight: 'Independent of the AMT, APSMO and ICAS; facts checked at source'
  },

  personalityCss: `
.ag-root.ag-mpka .ag-hero-grid { gap: clamp(1rem, 2.4vw, 2.1rem); }
.ag-root.ag-mpka .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-mpka .ag-capsule { border-left-width: 6px; }
.ag-root.ag-mpka .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-mpka .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-mpka .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-mpka .ag-spec dt { letter-spacing: 0.13em; }
.ag-root.ag-mpka .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Organisers\' own pages, read 7 October 2026. AMT AMC: "Tuesday 4 to Thursday 6 August 2026"; "Primary divisions: 60 minutes"; "First run in 1978"; Middle Primary Years 3 and 4, Upper Primary Years 5 and 6; topics may include basic arithmetic, fractions and ratios, algebra and pre-algebra, geometry, measurement, statistics and probability, problem-solving; "From 12 - 23 October, we are offering a FREE pilot of the AMC Early Primary paper for Years 1 and 2"; "25 questions (20 multiple choice and 5 integer-answer)"; "50 minutes"; "Online-only"; "From 2027, the AMC Early Primary division will be part of our standard AMC offerings". AMT 2026 PDF: KSF 24 to 26 March, Years 3 to 12, 60 minutes primary, "more than 6 million participants each year"; Maths Challenge 2 March to 26 June, Years 3 to 10; Maths Enrichment 30 March to 16 October, 12 to 16 weeks, Years 4 to 10, divisions Ramanujan, Newton, Dirichlet, Euler, Gauss, Noether, Pólya. AMT Maths Challenge: "around 1 hour of class time and around 2-3 hours of study time per week"; "groups of three for primary divisions". AMT AJMO: Thursday 10 September 2026; up to Year 8; 10 problems; 90 minutes; online only; integer answers 0 to 999. APSMO: Maths Olympiad Years 5-6, "running in Australia since 1987"; 2026 contests Wednesday 6 May, 10 June, 29 July, 9 September; "Each contest paper contains 5 questions, worth 1 mark each" in 30 minutes; "Individual registration is not possible"; teams of up to 30 students. ICAS: Mathematics Australia Years 2 to 12; Intro 30 questions 35m; A, B, C 40 questions 45m; D 40 questions 1hr; 2026 Mathematics window 24 to 28 August.',
    localProject: 'A worked strategy lesson written by us: counting squares of any size in an n by n grid by solving smaller grids first: 1, 5, 14, 30, 55, 91 for n = 1 to 6 (sums of square numbers); reason: a k by k square fits in (n-k+1) positions each way, e.g. 25 two-by-two squares and 16 three-by-three squares in a 6 by 6 grid; follow-up with a 6 by 4 rectangle.',
    requiredMentions: ['AMC Early Primary', '12 to 23 October 2026', 'APSMO', 'since 1987', 'Maths Enrichment', 'Ramanujan', 'groups of three', 'squares of any size', 'solve a simpler problem first'],
    sources: [
      { claim: 'AMT AMC: dates, divisions, topics, Early Primary pilot.', url: 'https://amt.edu.au/amc' },
      { claim: 'AMT Maths Challenge: dates, time commitment, groups of three.', url: 'https://amt.edu.au/challenge' },
      { claim: 'AMT AJMO: date, eligibility and format.', url: 'https://amt.edu.au/ajmo' },
      { claim: 'AMT 2026 key dates: KSF, Maths Challenge, Maths Enrichment.', url: 'https://amt.edu.au/wp-content/uploads/2025/2026-Competitions-and-Programs-Key-Dates-Calendar.pdf' },
      { claim: 'APSMO Maths Olympiad Years 5-6: history, dates, format, entry rules.', url: 'https://apsmo.edu.au/competitions-programs/maths-olympiad-years-5-6/' },
      { claim: 'ICAS year levels and exam papers; ICAS 2026 dates.', url: 'https://www.icasassessments.com/icas-year-levels-and-exam-papers/' }
    ],
    rejectedClaims: [
      'Entry prices printed by the AMT, APSMO and ICAS: not shown (Australian dollars; one-currency rule).',
      'APSMO programs other than the Years 5-6 Maths Olympiad (Maths Games, Maths Explorer): mentioned on its page but not described, as their details were not read.',
      'Any 2027 date beyond the AMT statement that Early Primary joins the AMC from 2027: not published.',
      'Any past paper content: never reproduced.',
      'Any promise of an award, High Distinction or medal: none made.',
      'Affiliation with the AMT, APSMO or ICAS: none; stated on the page.'
    ]
  }
};
