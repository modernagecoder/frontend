'use strict';
// WA Gifted and Talented ASET: Quantitative Reasoning practice (ag- exam door, Australia cluster Phase 3,
// row 49). Facts read raw on 7 October 2026 from the WA Department of Education (education.wa.edu.au):
// Gifted and Talented overview (selection starts in Year 5, testing in Year 6, placement from Year 7;
// programs at 24 select public secondary schools; 2027 intake closed), Testing page (academic applicants sit
// the ASET only; four components; "We do not endorse or recommend any form of private professional coaching
// or tutoring"; Practice ASET and ASET Handbook; practice scores are not considered), Key dates for the 2028
// intake (applications open Tuesday 13 October 2026, close 6 pm Friday 5 February 2027; Year 6 ASET Saturday
// 6 March 2027 in Perth metro, Bunbury and Albany), and the ASET Handbook PDF (order and timings: Reading
// Comprehension 35 minutes, Communicating Ideas in Writing 25 minutes, Quantitative Reasoning 35 minutes,
// Abstract Reasoning 20 minutes; 10-minute break; 35 Quantitative Reasoning questions; ovals A to D; one
// point per question, no deduction; Quantitative Reasoning "very different to a test of school achievement").
// Lesson family: matchstick growing patterns (checked free site-wide on 7 October 2026). Patterns are our
// own. No admissions or program-choice advice. No result promised.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'WA GATE ASET', label: 'WA GATE ASET quantitative reasoning', blurb: 'The ASET sat in Year 6 for Gifted and Talented entry, its 35-minute Quantitative Reasoning test, the department\'s view on coaching, and matchstick pattern puzzles.' },
  slug: 'wa-gate-aset-maths-practice',
  code: 'wgat',
  accent: '#241480',
  accentRationale: 'WA GATE ASET: a deep ink blue (11.5:1 on #EDE7DA), at least 16 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'WA GATE ASET maths practice',
  title: 'WA GATE ASET Maths Practice | Quantitative Reasoning, Year 6',
  description: 'WA Gifted and Talented ASET for Year 6: the 35-minute Quantitative Reasoning test, the 2027 date, the department\'s advice, and matchstick pattern puzzles.',
  ogDescription: 'The Academic Selective Entrance Test for WA Gifted and Talented programs, described from the department\'s handbook, with honest advice and growing-pattern puzzles we wrote.',
  twitterDescription: 'WA GATE ASET: Quantitative Reasoning explained, with matchstick pattern practice.',
  pageName: 'WA GATE ASET Maths Practice',
  webPageDescription: 'A guide for Western Australian families to the Quantitative Reasoning test in the Academic Selective Entrance Test (ASET) for Gifted and Talented programs: format, timing and marking from the WA Department of Education, its position on coaching, and original matchstick pattern puzzles.',
  courseDescription: 'Live online maths and reasoning classes for Western Australian students in Years 5 and 6, building pattern spotting, rules and algebraic thinking from the curriculum rather than test coaching.',
  crumbs: [{ name: 'Online maths tutoring in Australia', href: '/online-maths-tutoring-australia' }],
  crumbLabel: 'WA GATE ASET maths',
  navLinks: [
    { href: '#aset', label: 'The ASET' },
    { href: '#qr', label: 'Quantitative Reasoning' },
    { href: '#matchsticks', label: 'Matchstick patterns' },
    { href: '#booklet', label: 'Answer booklet' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Western Australia &middot; Gifted and Talented &middot; ASET',
  h1: 'WA GATE ASET maths practice',
  lede: 'In Western Australia, academic entry to the Gifted and Talented Secondary Selective Entrance programs begins in Year 5, with testing in Year 6 and placement from Year 7. Academic applicants sit one test: the Academic Selective Entrance Test, or ASET. Its number-based part, Quantitative Reasoning, is 35 multiple-choice questions in 35 minutes. This page explains it from the department\'s ASET Handbook, quotes the department\'s view on coaching, and practises a kind of reasoning that suits it well: growing matchstick patterns, where the job is to find the rule. There is no program-choice or admissions advice here, and no promise of a result.',
  secondaryCta: { href: '#matchsticks', label: 'Try the matchstick puzzles' },
  wa: 'Hello Modern Age Coders, I would like a free maths and reasoning class for my Year 5 or 6 child in WA.',
  heroNote: 'Facts from the WA Department of Education &middot; Puzzles written by us &middot; No admissions advice',
  spec: [
    ['Programs', 'Gifted and Talented, Years 7 to 12'],
    ['Test', 'ASET'],
    ['Sat in', 'Year 6'],
    ['Next Year 6 test', 'Saturday 6 March 2027'],
    ['Quantitative Reasoning', '35 questions, 35 minutes'],
    ['Options', 'A, B, C or D'],
    ['Wrong answers', 'No points deducted'],
    ['Answers', 'Pencil in a paper booklet']
  ],
  capsuleQ: 'In short',
  capsule: 'The ASET is the Academic Selective Entrance Test for WA Gifted and Talented programs, sat in Year 6 for Year 7 entry. It has four tests: Reading Comprehension, Communicating Ideas in Writing, Quantitative Reasoning and Abstract Reasoning. Quantitative Reasoning has 35 multiple-choice questions in 35 minutes. For the 2028 intake, Year 6 students sit it on Saturday 6 March 2027 in Perth, Bunbury and Albany.',

  picks: {
    eyebrow: 'Reasoning that lasts',
    h2: 'Three courses for able Years 5 and 6 students',
    lede: 'Maths and logic that are worth learning whichever school comes next.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'WGA / 01', title: 'Problem solving and patterns', note: 'Rules, sequences and logical steps, talked through.' },
      { course: 'algebra-foundations-masterclass', code: 'WGA / 02', title: 'Algebra foundations', note: 'Growing patterns become the first algebraic rules.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'WGA / 03', title: 'Competition maths', note: 'Unfamiliar problems for students who love a challenge.' }
    ]
  },

  sections: [
    {
      id: 'aset', tint: 'tint', eyebrow: 'The ASET, from the department',
      h2: 'Four tests, about two hours of tasks, one booklet',
      lede: 'Order and timings are quoted from the department\'s ASET Handbook, read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'ASET tests in the order sat (ASET Handbook)', head: ['Test', 'Time', 'Format'], rows: [
          ['Reading Comprehension', '35 minutes', 'Multiple choice'],
          ['Communicating Ideas in Writing', '25 minutes', 'Written test'],
          ['Break', '10 minutes', 'Students leave the room'],
          ['Quantitative Reasoning', '35 minutes', 'Multiple choice, 35 questions'],
          ['Abstract Reasoning', '20 minutes', 'Multiple choice, 35 questions']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The department explains that academic applicants complete the ASET only, while arts and language applicants may also have auditions, workshops or interviews. The programs run at 24 select public secondary schools, which the department says include a selective academic school, a selective arts college, two regional schools and an online academic program for country students.',
            'The handbook says there is "no particular order of difficulty and all questions are worth a single point", and that points are not deducted for wrong answers, so guessing is acceptable when a student is unsure.'
          ],
          right: [
            'For the 2028 intake, applications open on Tuesday 13 October 2026 and close at 6 pm on Friday 5 February 2027. The Year 6 ASET in Perth metro, Bunbury and Albany is on Saturday 6 March 2027, with regional and interstate arrangements listed separately.',
            'The department publishes a Practice ASET aimed at the Year 7 intake and notes that practice test results do not show how an applicant will score and are not considered when making offers.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.education.wa.edu.au/gifted-and-talented/testing" rel="noopener" target="_blank">WA Department of Education, Gifted and Talented testing</a>; <a class="ag-inline-link" href="https://www.education.wa.edu.au/key-dates-and-application-guidelines" rel="noopener" target="_blank">Key dates and application guidelines</a>; <a class="ag-inline-link" href="https://www.education.wa.edu.au/gifted-and-talented" rel="noopener" target="_blank">Gifted and Talented overview</a>; ASET Handbook (PDF linked from the testing page). Checked on 7 October 2026. We are independent of the department.' }
      ]
    },
    {
      id: 'qr', tint: 'deep', eyebrow: 'Quantitative Reasoning',
      h2: 'Not a school maths test, by design',
      lede: 'The handbook is explicit about what this test is and is not.',
      body: [
        { kind: 'capsule', q: 'From the ASET Handbook', p: '"This test assesses quantitative reasoning ability, which is very different to a test of school achievement in mathematics or science." It checks how well a student can use mathematical and scientific reasoning to solve problems, with content drawn from many sources and "very different to what is taught in school".' },
        { kind: 'two', mt: true,
          left: [
            'The handbook asks students to look at information carefully, find patterns and relationships, solve problems, and spot similarities and differences. Rough working is allowed in the question booklet and on the back of the answer booklet, but only shaded answers are marked.',
            'On its testing page the department also states: "We do not endorse or recommend any form of private professional coaching or tutoring". It suggests reading the handbook and trying the Practice ASET so students know what to expect.'
          ],
          right: [
            'We take that seriously. A test designed to identify potential rather than acquired knowledge is not something to drill. What does help is a child who enjoys spotting patterns, explains rules in words, and checks a rule against every case.',
            'Our classes build those habits through ordinary, interesting mathematics. They are not ASET coaching, and the free trial is where we say honestly whether a child needs anything beyond the official practice test.'
          ] },
        { kind: 'source', html: 'Sources: ASET Handbook, Quantitative Reasoning test overview; <a class="ag-inline-link" href="https://www.education.wa.edu.au/gifted-and-talented/testing" rel="noopener" target="_blank">Gifted and Talented testing</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'matchsticks', tint: '', eyebrow: 'Puzzles we wrote',
      h2: 'Matchstick growing patterns',
      lede: 'Shapes made of matchsticks grow one step at a time. The challenge is to find how many sticks each step adds, write a rule, and use the rule for steps far too large to draw.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Count the first few', p: 'Draw steps 1, 2 and 3 and count the sticks. Write the counts in a row.' },
          { h3: 'Find what is added', p: 'The difference between counts tells you how many sticks each new piece needs, after the first piece is built.' },
          { h3: 'Write the rule, then test it', p: 'A rule such as 3 times the step, plus 1, must work for every step you drew, not just one.' }
        ] },
        { kind: 'table', caption: 'Original matchstick patterns with rules', head: ['Pattern', 'First counts', 'Rule for step n', 'Question and answer'], rows: [
          ['Squares joined in a row', '4, 7, 10', '3n + 1', 'Step 10 needs 31 sticks'],
          ['Triangles joined in a row, alternately up and down', '3, 5, 7', '2n + 1', 'Step 20 needs 41 sticks'],
          ['Squares in a row: which step uses exactly 100 sticks?', '4, 7, 10', '3n + 1 = 100', 'Step 33'],
          ['Hexagons joined in a row', '6, 11, 16', '5n + 1', 'Step 8 needs 41 sticks'],
          ['A pattern starting 5, 9, 13', '5, 9, 13', '4n + 1', 'Step 15 needs 61 sticks'],
          ['Square grids: 1 by 1, 2 by 2, 3 by 3', '4, 12, 24', '2n(n + 1)', 'A 3 by 3 grid needs 24 sticks']
        ] },
        { kind: 'p', text: 'The first pattern explains why so many rules end in plus 1. The first square needs 4 sticks, but every square after it shares a side with the one before, so it adds only 3. Four sticks is really 1 plus 3, which is where 3n + 1 comes from. A student who can explain the plus 1 has understood the pattern, not just matched numbers.' },
        { kind: 'p', text: 'The last pattern is different, and that is the point. The counts 4, 12, 24 do not go up by the same amount each time, so no rule of the form "times something, plus 1" fits. Counting horizontal and vertical sticks separately in a 3 by 3 grid gives 4 rows of 3 and 4 columns of 3, which is 12 plus 12. Checking a rule on every step catches the moment a pattern stops being simple.' }
      ]
    },
    {
      id: 'abstract', tint: 'deep', eyebrow: 'The other reasoning test',
      h2: 'Abstract Reasoning: 35 questions in 20 minutes',
      lede: 'The fourth ASET test is faster still, and the handbook describes it in terms that link closely to pattern work.',
      body: [
        { kind: 'two',
          leftH3: 'What the handbook says',
          left: [
            'Abstract Reasoning assesses the ability to think about ideas and patterns that are not always obvious, to recognise connections, make reasoned choices and decide whether they make sense. It has 35 multiple-choice questions to complete in 20 minutes.',
            'The handbook names a question type called Next in Sequence, in which a student identifies the rule for a sequence and chooses the option that most logically and simply comes next.'
          ],
          rightH3: 'Why pattern habits transfer',
          right: [
            'Finding what changes from one step to the next, writing it as a rule and testing that rule on every step is the same habit whether the steps are matchstick shapes or abstract figures.',
            'Twenty minutes for 35 questions is a little over half a minute each, so a student who has practised looking for one change at a time, rather than everything at once, will feel far calmer.'
          ] },
        { kind: 'p', text: 'Try the hexagon pattern from the table with this in mind. One hexagon needs 6 sticks. Each new hexagon shares one side with its neighbour, so it adds 5. Step 8 therefore needs 6 plus 7 lots of 5, which is 41, and the rule 5n + 1 says the same thing in a single line. Whether a sequence is made of numbers, sticks or shapes, the question is always: what is added or changed each time, and what was there at the start?' },
        { kind: 'source', html: 'Source: ASET Handbook, Abstract Reasoning test overview, linked from <a class="ag-inline-link" href="https://www.education.wa.edu.au/gifted-and-talented/testing" rel="noopener" target="_blank">Gifted and Talented testing</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'booklet', tint: 'tint', eyebrow: 'A paper test',
      h2: 'Pencil, ovals and careful alignment',
      lede: 'The ASET is answered on paper, and the handbook spends real care on the answer booklet.',
      body: [
        { kind: 'two',
          leftH3: 'What the handbook describes',
          left: [
            'Students receive one answer booklet for all four tests. Each multiple-choice question has four small ovals labelled A, B, C and D, coloured in with a pencil because scanners read pencil marks only.',
            'Students may answer in any order, but the handbook recommends working through questions in order, because that reduces the risk of misaligning answers.'
          ],
          rightH3: 'Habits worth building',
          right: [
            'Check the question number against the row before colouring an oval, every time.',
            'Use the question booklet for working; markers only see the shaded answers.',
            'If stuck, choose the most sensible option and move on, since wrong answers cost nothing.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Pattern reasoning',
    h2: 'Four stages for young pattern spotters',
    lede: 'These develop through puzzles, discussion and good teaching over years.',
    table: { caption: 'From counting to rules', head: ['Stage', 'The student can', 'Secure when'], rows: [
      ['1. Continue', 'Extend a pattern by drawing', 'Draws step 4 of the square pattern correctly'],
      ['2. Difference', 'See what each step adds', 'Explains why each square adds 3 sticks'],
      ['3. Rule', 'Write a rule for step n', 'Finds step 20 of the triangle pattern without drawing'],
      ['4. Reverse and test', 'Work backwards and check rules', 'Finds which step uses 100 sticks and tests the grid pattern']
    ] },
    left: { h3: 'Wellbeing', ps: [
      'The department does not recommend private coaching for the ASET, and heavy preparation for a test of potential rarely helps.',
      'Matchsticks, toothpicks or drawn lines at the kitchen table make pattern puzzles a game rather than a chore.'
    ] },
    right: { h3: 'Other states', ps: [
      'South Australia\'s Ignite assessment is covered on <a class="ag-inline-link" href="/sa-ignite-entry-maths-practice">SA Ignite maths practice</a>.',
      'For NAPLAN in Year 5, see <a class="ag-inline-link" href="/naplan-year-5-numeracy-practice">NAPLAN Year 5 numeracy</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses for Years 5 and 6',
    h2: 'Courses for pattern-loving students',
    lede: 'Sorted into three groups; tap a card for the syllabus.',
    bands: [
      { num: 'I', h3: 'Patterns and logic', sub: 'Reasoning skills', courses: [
        { code: 'WGA / P / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving and computational thinking', blurb: 'Sequences, rules and logical steps.' },
        { code: 'WGA / P / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns generated by code.' },
        { code: 'WGA / P / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Challenging puzzles.' }
      ] },
      { num: 'II', h3: 'Curriculum maths', sub: 'Strong foundations', courses: [
        { code: 'WGA / C / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'All strands, deeply.' },
        { code: 'WGA / C / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, accurate calculation.' },
        { code: 'WGA / C / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Reading graphs and judging likelihood.' }
      ] },
      { num: 'III', h3: 'Ahead', sub: 'Toward secondary maths', courses: [
        { code: 'WGA / A / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Rules written as algebra.' },
        { code: 'WGA / A / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'A head start on secondary topics.' },
        { code: 'WGA / A / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Patterns in calculation.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Our lessons',
    h2: 'Live classes for Western Australian families',
    lede: 'Teachers are in India, two and a half hours behind Perth all year, since WA has no daylight saving. A 4 pm Perth class starts at 1.30 pm India time.',
    slots: [
      { time: 'After school', l: 'Ideal for Years 5 and 6.' },
      { time: 'Saturday', l: 'For busy weekday families.' },
      { time: 'Holidays', l: 'Short pattern and logic workshops.' }
    ],
    cells: [
      { h3: 'Draw, count, rule', p: 'Students build patterns before writing rules.' },
      { h3: 'Explain the plus one', p: 'Every rule must be explained, not just found.' },
      { h3: 'Fifteen to twenty per group', p: 'Small groups at a shared level.' },
      { h3: 'One-to-one', p: 'For focused individual work.' },
      { h3: 'Not ASET coaching', p: 'We teach maths and reasoning, consistent with the department\'s advice.' },
      { h3: 'No offer promises', p: 'Offers are the department\'s decision.' }
    ]
  },

  projectsH2: 'Our students\' projects',
  projectsLede: 'Built by learners for fun. See the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parent reviews from Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'WA families pay monthly in US dollars, our rate outside India. No deposit, and you can stop at the end of any month.',
    free: ['A real trial lesson', 'Honest advice, including when no classes are needed', 'No card details'],
    group: ['Fifteen to twenty students at one level', 'A regular teacher', 'Explained feedback', 'Certificate at the end'],
    one: ['A teacher for one child', 'Chosen focus areas', 'Times to suit you']
  },

  faq: {
    eyebrow: 'Questions about the ASET',
    h2: 'Western Australian families ask',
    items: [
      { q: 'What is the ASET?', a: 'The Academic Selective Entrance Test used by the WA Department of Education for Gifted and Talented Secondary Selective Entrance programs. Academic applicants sit the ASET only.' },
      { q: 'When do students sit the ASET?', a: 'The department says selection starts in Year 5, with testing in Year 6 and placement from Year 7. For the 2028 intake, the Year 6 ASET in Perth metro, Bunbury and Albany is on Saturday 6 March 2027.' },
      { q: 'How long is the Quantitative Reasoning test?', a: '35 minutes for 35 multiple-choice questions, according to the ASET Handbook.' },
      { q: 'Is Quantitative Reasoning a maths test?', a: 'The handbook says it is very different to a test of school achievement in mathematics or science; it assesses mathematical and scientific reasoning with content unlike what is taught in school.' },
      { q: 'Are marks taken off for wrong answers?', a: 'No. The handbook says each question is worth one point and no points are deducted for incorrect answers.' },
      { q: 'What is a matchstick growing pattern?', a: 'A sequence of shapes made from matchsticks, where each step adds pieces. Students find how many sticks each step adds and write a rule, such as 3n + 1, for any step.' },
      { q: 'Should my child have coaching?', a: 'The department says it does not endorse or recommend private professional coaching or tutoring, and suggests the ASET Handbook and the Practice ASET instead.' },
      { q: 'When do applications open?', a: 'For the 2028 intake, applications open on Tuesday 13 October 2026 and close at 6 pm on Friday 5 February 2027.' },
      { q: 'Can you advise which program to choose?', a: 'No. We give no admissions or program-choice advice.' },
      { q: 'What time would lessons be in Perth?', a: 'One weekly slot is set once the free class is done. Western Australia keeps the same clock all year, so Perth stays two and a half hours ahead of India.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for WA families',
    lede: 'Other tests, maths and coding.',
    items: [
      { href: '/sa-ignite-entry-maths-practice', label: 'SA Ignite maths', p: 'South Australia\'s gifted program assessment.' },
      { href: '/queensland-academies-entry-maths-practice', label: 'Queensland Academies test', p: 'Logic grids and number series.' },
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia', p: 'Live lessons for all years.' },
      { href: '/coding-classes-for-11-and-12-year-olds-australia', label: 'Coding for 11 and 12 year olds', p: 'Patterns and logic in code.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Maths and coding contests, month by month.' },
      { href: '/maths-challenges', label: 'Maths challenges', p: 'Puzzles for home.' }
    ]
  },

  start: {
    h2: 'Book a free patterns class',
    lede: 'Share your child\'s year level and a puzzle or game they enjoy. The trial is a real lesson in patterns and reasoning, with honest advice afterwards.',
    readFirst: 'Exploring first? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> lists every course, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows a lesson.',
    note: 'The fastest replies come on WhatsApp. Our number has India\'s +91 code; we teach from India and have no WA office.',
    formNote: 'No card, no commitment. We reply once to book it.'
  },

  footer: {
    cols: [
      { h4: 'Selective tests', links: [
        { href: '/sa-ignite-entry-maths-practice', label: 'SA Ignite' },
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
    bottomRight: 'Patterns and reasoning taught well; no offers promised'
  },

  personalityCss: `
.ag-root.ag-wgat .ag-hero-grid { gap: clamp(1rem, 2.6vw, 2.3rem); }
.ag-root.ag-wgat .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-wgat .ag-capsule { border-left-width: 6px; }
.ag-root.ag-wgat .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-wgat .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-wgat .ag-table th { letter-spacing: 0.015em; }
.ag-root.ag-wgat .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-wgat .ag-slots { gap: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'WA Department of Education (education.wa.edu.au), read 7 October 2026. Gifted and Talented: "The selection process starts when students are in Year 5, testing in Year 6, with placement starting from Year 7."; programs at "24 select public secondary schools including: a selective academic school, a selective arts college, 2 regional schools, an online academic program for country students." Testing: "Academic applicants complete the Academic Selective Entrance Testing (ASET) only."; four components incl. quantitative reasoning and abstract reasoning; "We do not endorse or recommend any form of private professional coaching or tutoring"; Practice ASET aimed at the Year 7 intake; practice scores not considered. Key dates (2028 intake): applications open Tuesday 13 October 2026; close 6 pm Friday 5 February 2027; ASET standard conditions, Perth metro, Bunbury and Albany, Year 6 students: Saturday 6 March 2027. ASET Handbook: Reading Comprehension 35 minutes (multiple choice), Communicating Ideas in Writing 25 minutes, Quantitative Reasoning 35 minutes, Abstract Reasoning 20 minutes; 10-minute break between writing and Quantitative Reasoning; ovals A, B, C, D; pencil; "no particular order of difficulty and all questions are worth a single point"; no deduction for incorrect answers; Quantitative Reasoning "very different to a test of school achievement in mathematics or science", content "very different to what is taught in school", 35 questions in 35 minutes; Abstract Reasoning 35 questions in 20 minutes. WA has no daylight saving (AWST UTC+8); India UTC+5:30.',
    localProject: 'Original matchstick growing patterns: squares in a row 3n + 1 (step 10, 31 sticks; step 33 uses exactly 100), triangles 2n + 1 (step 20, 41), hexagons 5n + 1 (step 8, 41), 5, 9, 13 as 4n + 1 (step 15, 61), and square grids 2n(n + 1) (3 by 3 uses 24).',
    requiredMentions: ['matchstick growing pattern', 'Academic Selective Entrance Test', 'Saturday 6 March 2027', 'Tuesday 13 October 2026', 'very different to a test of school achievement', '24 select public secondary schools', '3n + 1', '2n(n + 1)', 'We do not endorse or recommend any form of private professional coaching or tutoring'],
    sources: [
      { claim: 'WA Department of Education, Gifted and Talented testing: ASET components, coaching statement, practice ASET and handbook.', url: 'https://www.education.wa.edu.au/gifted-and-talented/testing' },
      { claim: 'WA Department of Education, Key dates and application guidelines: 2028 intake dates.', url: 'https://www.education.wa.edu.au/key-dates-and-application-guidelines' },
      { claim: 'WA Department of Education, Gifted and Talented overview: selection years, program locations.', url: 'https://www.education.wa.edu.au/gifted-and-talented' },
      { claim: 'ASET Handbook (PDF): order, timings, marking, answer booklet, Quantitative Reasoning description.', url: 'https://www.education.wa.edu.au/dl/l4d9182v' }
    ],
    rejectedClaims: [
      'Calculator rules for the ASET: not stated in the handbook passages read, so none is claimed.',
      'Program locations by name and offer rounds: not given; no admissions advice is offered.',
      'Practice ASET questions: not reproduced; all patterns are original.',
      'ASET dates for regional WA and interstate centres beyond those listed: not claimed.',
      'Any promise of an offer or score: refused.'
    ]
  }
};
