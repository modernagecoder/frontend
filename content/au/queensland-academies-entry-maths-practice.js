'use strict';
// Queensland Academies Year 7 entrance test: numerical reasoning and mathematics practice (ag- exam door,
// Australia cluster Phase 3, row 48). Facts read raw on 7 October 2026 from Queensland Academies
// (qa.eq.edu.au, Department of Education Queensland): admissions home ("Entry into a Queensland Academy is
// through a selective entry applications process"; one application only), Year 7 enrolments (applications
// for 2028 entry due 4pm, Friday 21 August 2026; Entrance Test on Saturday 5 or Sunday 6 September 2026;
// notice of outcome late Term 4 2026; Entrance Test about 3 hours, facilitated by Edutest, ability and
// achievement tests: Verbal reasoning 30 min, Numerical reasoning 30 min, Reading comprehension 30 min,
// Mathematics 30 min, Written expression 15 min; quoted descriptions; individual results and parent reports
// not distributed) and the Entrance Test Policy (venues QASMT Toowong, QACI Kelvin Grove, QAHS Gold Coast;
// items to bring). QASMT enrolments page: academically selective state school offering IB programmes.
// Lesson family: logic grid deduction (checked free site-wide on 7 October 2026). Puzzles are our own.
// No admissions, application or school-choice advice. No result promised.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'QLD ACADEMIES TEST', label: 'Queensland Academies entrance test maths', blurb: 'The Year 7 Entrance Test\'s numerical reasoning and mathematics parts, from the academies\' own pages, with logic grid puzzles for careful deduction.' },
  slug: 'queensland-academies-entry-maths-practice',
  code: 'qaem',
  accent: '#346448',
  accentRationale: 'Queensland Academies test: a muted rainforest green (5.6:1 on #EDE7DA), at least 10 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Queensland Academies entrance test maths practice',
  title: 'Queensland Academies Entrance Test Maths Practice | Year 7',
  description: 'Queensland Academies Year 7 entrance test: the numerical reasoning and mathematics tests from the academies\' own pages, and original logic grid puzzles to practise.',
  ogDescription: 'The maths side of the Queensland Academies Entrance Test for Year 7, described from qa.eq.edu.au, with deduction puzzles and number series we wrote ourselves.',
  twitterDescription: 'Queensland Academies Year 7 test: the maths parts and logic grid practice.',
  pageName: 'Queensland Academies Entrance Test Maths Practice',
  webPageDescription: 'A guide for Queensland families to the numerical reasoning and mathematics parts of the Queensland Academies Year 7 Entrance Test: format and timing from the academies\' admissions pages, and original logic grid, series and pattern puzzles with solutions.',
  courseDescription: 'Live online maths and reasoning classes for upper-primary students in Queensland, building number sense, patterns and logical deduction from the curriculum rather than coaching for any test.',
  crumbs: [{ name: 'Online maths tutoring in Australia', href: '/online-maths-tutoring-australia' }],
  crumbLabel: 'Queensland Academies test maths',
  navLinks: [
    { href: '#qatest', label: 'The test' },
    { href: '#numerical', label: 'Numerical reasoning' },
    { href: '#grids', label: 'Logic grids' },
    { href: '#series', label: 'Series' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Queensland &middot; Queensland Academies &middot; Year 7 entry',
  h1: 'Queensland Academies entrance test maths practice',
  lede: 'The Queensland Academies are academically selective state schools, and entry to Year 7 involves an Entrance Test of about three hours run by Edutest. Two of its five parts use numbers: a 30-minute numerical reasoning test and a 30-minute mathematics test. This page describes both from the academies\' own admissions pages, then practises the skill the numerical reasoning description ends on, deduction, through logic grid puzzles we wrote. You will find nothing here about applications, shortlisting or offers, and no promise of any result.',
  secondaryCta: { href: '#grids', label: 'Try the logic grids' },
  wa: 'Hello Modern Age Coders, I would like a free maths and reasoning class for my upper-primary child in Queensland.',
  heroNote: 'Format from qa.eq.edu.au &middot; Puzzles written by us &middot; No admissions advice',
  spec: [
    ['Schools', 'Queensland Academies'],
    ['Entry year', 'Year 7'],
    ['Whole test', 'About 3 hours'],
    ['Delivered by', 'Edutest'],
    ['Numerical reasoning', '30 minutes'],
    ['Mathematics', '30 minutes'],
    ['Results', 'Not released to families'],
    ['Our focus', 'Deduction and number patterns']
  ],
  capsuleQ: 'In short',
  capsule: 'Year 7 entry to a Queensland Academy includes an Entrance Test of about three hours, facilitated by Edutest. It mixes ability tests (verbal reasoning, numerical reasoning) and achievement tests (reading comprehension, mathematics, written expression). Numerical reasoning and mathematics each run 30 minutes. The academies say individual test results and parent reports are not distributed.',

  picks: {
    eyebrow: 'Strong foundations',
    h2: 'Three courses for able upper-primary students',
    lede: 'Maths and reasoning that serve any Year 7, wherever it is.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'QAE / 01', title: 'Problem solving and logic', note: 'Deduction, patterns and puzzles, explained step by step.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'QAE / 02', title: 'Upper-primary maths', note: 'Number, measurement, algebra, space and data from the curriculum.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'QAE / 03', title: 'Competition maths', note: 'For children who enjoy harder, unfamiliar problems.' }
    ]
  },

  sections: [
    {
      id: 'qatest', tint: 'tint', eyebrow: 'The Entrance Test',
      h2: 'Five tests, about three hours, ability and achievement',
      lede: 'From the Queensland Academies admissions site, read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Year 7 Entrance Test components (qa.eq.edu.au)', head: ['Aspect', 'Test area', 'Duration'], rows: [
          ['Ability', 'Verbal reasoning', '30 minutes'],
          ['Ability', 'Numerical reasoning', '30 minutes'],
          ['Achievement', 'Reading comprehension', '30 minutes'],
          ['Achievement', 'Mathematics', '30 minutes'],
          ['Achievement', 'Written expression', '15 minutes']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The academies explain the difference between the two kinds of test. Ability tests "are designed to measure a child\'s ability to think, reason and solve problems, without necessarily relying on prior knowledge." Achievement tests "are designed to measure actual achievement or performance in some key academic areas."',
            'Edutest marks the tests and analyses results on behalf of the Queensland Academies. The academies state that they do not distribute individual test results or parent reports.'
          ],
          right: [
            'For Year 7 entry in 2028, the academies listed applications due by 4pm, Friday 21 August 2026, and the Entrance Test on either Saturday 5 or Sunday 6 September 2026, allocated automatically. Testing takes place at the academy campuses at Toowong, Kelvin Grove and the Gold Coast, with remote testing possible in limited circumstances.',
            'The policy\'s list of what to bring is short: two black or blue pens, two pencils, an eraser, a sharpener and identification.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://qa.eq.edu.au/enrolments/year7-enrolments" rel="noopener" target="_blank">Queensland Academies, Year 7 enrolments</a>; <a class="ag-inline-link" href="https://qa.eq.edu.au/enrolments/entrance-test-policy" rel="noopener" target="_blank">Entrance Test Policy</a>; <a class="ag-inline-link" href="https://qa.eq.edu.au/" rel="noopener" target="_blank">Queensland Academies admissions</a>. Checked on 7 October 2026. Modern Age Coders is not connected with the academies or Edutest.' }
      ]
    },
    {
      id: 'numerical', tint: 'deep', eyebrow: 'The two number tests',
      h2: 'Numerical reasoning is not the same as mathematics',
      lede: 'The academies describe each test in a sentence. Reading them side by side explains how to think about preparation.',
      body: [
        { kind: 'table', caption: 'Descriptions quoted from the Year 7 enrolments page', head: ['Test', 'Description (quoted)'], rows: [
          ['Numerical reasoning (ability, 30 minutes)', '"Measures the ability to think and reason using numbers. This includes series, matrices, arithmetical reasoning and deduction."'],
          ['Mathematics (achievement, 30 minutes)', '"Measures year-level appropriate mathematical knowledge, including items tapping numbers, measurement, algebra, space and data."']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The mathematics test checks what a child has learned at school, across the familiar strands. Good everyday teaching is the preparation for it.',
            'Numerical reasoning is described as an ability test. Its four named ingredients, series, matrices, arithmetical reasoning and deduction, are about seeing structure in numbers rather than recalling methods.'
          ],
          right: [
            'Because ability tests aim to measure reasoning without relying on prior knowledge, we do not think drilling them is worthwhile, and the academies give no indication that families should.',
            'What does help a young thinker is enjoying puzzles that need careful, step-by-step deduction. That is a lifelong skill, and the logic grids below are a good way to practise it.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://qa.eq.edu.au/enrolments/year7-enrolments" rel="noopener" target="_blank">Queensland Academies, Year 7 enrolments: The Entrance Test</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'grids', tint: '', eyebrow: 'Puzzles we wrote',
      h2: 'Logic grids: deduction you can see',
      lede: 'A logic grid lists people down one side and possibilities across the top. Each clue lets you cross out boxes. When only one box is left in a row, that answer is certain.',
      body: [
        { kind: 'three', cells: [
          { h3: 'One fact per clue', p: 'Read each clue on its own and cross out only what it rules out. Resist guessing until the grid forces an answer.' },
          { h3: 'Rows and columns both count', p: 'If a column has one box left, that value belongs to that person, even if their row still has options.' },
          { h3: 'Loop back', p: 'After placing an answer, reread earlier clues. A clue that looked useless often becomes decisive later.' }
        ] },
        { kind: 'table', caption: 'Original logic grid puzzles with full solutions', head: ['Puzzle', 'Clues', 'Solution'], rows: [
          ['Ari, Bo and Cam each chose a different number: 4, 7 or 9.', 'Ari\'s number is even. Bo\'s number is bigger than Cam\'s.', 'Ari 4, Bo 9, Cam 7'],
          ['Dee, Eli, Fin and Gus finished a race in places 1 to 4.', 'Gus came second. Fin came last. Dee finished ahead of Eli.', 'Dee 1st, Gus 2nd, Eli 3rd, Fin 4th'],
          ['Three students scored 12, 15 and 18 on a quiz: Hana, Ivo and Jo.', 'Ivo scored a multiple of 6. Jo scored 3 more than Hana. Hana did not score 15.', 'Hana 12, Jo 15, Ivo 18'],
          ['Kai, Lia and Max each own one pet: a cat, a dog or a fish. Their pets have 4, 4 and 0 legs.', 'Kai\'s pet has no legs. Lia is allergic to cats.', 'Kai fish, Lia dog, Max cat']
        ] },
        { kind: 'p', text: 'The third puzzle carries a lesson about checking. With only its first two clues, it has two answers. "Ivo scored a multiple of 6" leaves Ivo with 12 or 18, and "Jo scored 3 more than Hana" fits both Hana 12 with Jo 15 and Hana 15 with Jo 18. So Ivo 18, Hana 12, Jo 15 works, and so does Ivo 12, Hana 15, Jo 18. The third clue, Hana did not score 15, removes the second answer and leaves exactly one.' },
        { kind: 'p', text: 'A good puzzle needs exactly one solution, and looking for a second one is part of the work, not an extra. Students who learn to ask "could anything else also fit?" become much more careful readers of clues, in puzzles and in every subject where conclusions are drawn from evidence.' }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'A grid, solved slowly',
      h2: 'Walking through the race puzzle',
      lede: 'Seeing every step once makes the method easy to repeat.',
      body: [
        { kind: 'p', text: 'Draw a grid with Dee, Eli, Fin and Gus down the side and places 1, 2, 3 and 4 across the top. The first clue, Gus came second, fills one box outright: tick Gus under 2 and cross out every other box in Gus\'s row and in the place 2 column. The second clue, Fin came last, does the same for Fin and place 4.' },
        { kind: 'p', text: 'Now only places 1 and 3 remain, and only Dee and Eli remain to fill them. The final clue, Dee finished ahead of Eli, decides it: ahead means a smaller place number, so Dee takes 1 and Eli takes 3. Every box in the grid is now either ticked or crossed, and each clue can be checked against the finished grid in a few seconds.' },
        { kind: 'p', text: 'Notice that no step involved guessing. Each tick was forced by a clue or by the boxes already crossed out. That is what deduction means, and it is why logic grids are a calm, confidence-building way for young students to practise reasoning: when a child cannot place an answer, the grid shows exactly which clue to reread.' }
      ]
    },
    {
      id: 'academies', tint: '', eyebrow: 'About the academies',
      h2: 'What kind of schools these are',
      lede: 'Facts only, from the academies\' own pages; no advice about whether to apply.',
      body: [
        { kind: 'p', text: 'The Queensland Academy for Science, Mathematics and Technology describes itself as an academically selective state school that offers the International Baccalaureate programmes exclusively, with the Middle Years Programme in Years 7 to 9 and the Diploma Programme in Years 10 to 12. The admissions site serves all three Queensland Academies, and the Entrance Test Policy names their campuses at Toowong, Kelvin Grove and the Gold Coast. Whether a selective school suits a particular child is a family decision, and one we deliberately leave to families and the schools.' }
      ]
    },
    {
      id: 'series', tint: 'tint', eyebrow: 'Number series',
      h2: 'Series and simple matrices we wrote',
      lede: 'The academies name series and matrices as part of numerical reasoning. These original examples show the kinds of structure worth noticing.',
      body: [
        { kind: 'table', caption: 'Original number patterns with the rule explained', head: ['Pattern', 'Next term', 'Rule'], rows: [
          ['3, 7, 15, 31, ...', '63', 'Double and add 1'],
          ['2, 5, 10, 17, 26, ...', '37', 'Add 3, 5, 7, 9, then 11: the gaps are consecutive odd numbers'],
          ['81, 27, 9, 3, ...', '1', 'Divide by 3 each time'],
          ['1, 1, 2, 3, 5, 8, ...', '13', 'Add the two previous terms'],
          ['A 3 by 3 grid with rows 2, 3, 6 / 4, 5, 20 / 7, 2, ?', '14', 'In each row the third number is the first two multiplied']
        ] },
        { kind: 'p', text: 'For every series, the habit is the same: write the gaps underneath, then the gaps between the gaps if needed. The second pattern hides its rule until the gaps are written out; the fourth needs a different idea altogether, looking back two terms. Trying more than one kind of rule, and checking it on every term rather than only the first two, is what turns pattern spotting into reasoning.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Deduction, step by step',
    h2: 'Four stages for young reasoners',
    lede: 'Children grow into careful deduction over years of puzzles and discussion.',
    table: { caption: 'From guessing to proving', head: ['Stage', 'The child can', 'Secure when'], rows: [
      ['1. Single clues', 'Use one clue to rule something out', 'Crosses out the right boxes for each clue'],
      ['2. Combining clues', 'Use two clues together', 'Solves the race puzzle without trial and error'],
      ['3. Checking uniqueness', 'Look for a second solution', 'Spots that the quiz puzzle first had two answers'],
      ['4. Explaining', 'Write why each answer is forced', 'Explains a solution in clear sentences']
    ] },
    left: { h3: 'Balance and wellbeing', ps: [
      'Ability tests aim to measure reasoning rather than practice, so heavy preparation has little point and adds pressure.',
      'Puzzles enjoyed as a family build the same thinking without any stress.'
    ] },
    right: { h3: 'Other states', ps: [
      'The NSW Year 7 test is described on <a class="ag-inline-link" href="/nsw-selective-test-mathematical-reasoning-practice">NSW selective test maths</a>.',
      'For NAPLAN in the primary years, see <a class="ag-inline-link" href="/naplan-year-5-numeracy-practice">NAPLAN Year 5 numeracy</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses for Years 5 and 6',
    h2: 'Maths and reasoning courses',
    lede: 'Grouped by focus. Each card links to a full syllabus.',
    bands: [
      { num: 'I', h3: 'Reasoning', sub: 'Deduction and patterns', courses: [
        { code: 'QAE / R / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving and computational thinking', blurb: 'Logic and patterns, step by step.' },
        { code: 'QAE / R / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Puzzles for keen minds.' },
        { code: 'QAE / R / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns explored in code.' }
      ] },
      { num: 'II', h3: 'Curriculum maths', sub: 'Number to data', courses: [
        { code: 'QAE / C / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'All strands, taught carefully.' },
        { code: 'QAE / C / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Confident calculation.' },
        { code: 'QAE / C / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and chance.' }
      ] },
      { num: 'III', h3: 'Ahead', sub: 'Secondary readiness', courses: [
        { code: 'QAE / A / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'Years 7 to 9 content.' },
        { code: 'QAE / A / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Patterns become rules.' },
        { code: 'QAE / A / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB mathematics', blurb: 'For much later, for families interested in IB.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Our classes',
    h2: 'Live puzzle-rich lessons for Queensland families',
    lede: 'Teachers work from India, behind Brisbane by four and a half hours all year, as Queensland has no daylight saving. A 4 pm Brisbane class starts at 11.30 am India time.',
    slots: [
      { time: 'After school', l: 'A good fit for Years 5 and 6.' },
      { time: 'Weekend', l: 'Relaxed puzzle sessions.' },
      { time: 'Holidays', l: 'Short logic and maths workshops.' }
    ],
    cells: [
      { h3: 'Grids on paper', p: 'Children draw and fill logic grids as they reason.' },
      { h3: 'Explain the deduction', p: 'Every placed answer comes with its reason.' },
      { h3: 'Five to ten per group', p: 'Children at similar levels learn together.' },
      { h3: 'One-to-one lessons', p: 'Available when focused help suits better.' },
      { h3: 'Not test coaching', p: 'We teach reasoning and maths, not test drills.' },
      { h3: 'No admissions claims', p: 'Selection is the academies\' decision alone.' }
    ]
  },

  projectsH2: 'Student creations',
  projectsLede: 'Projects our learners built for fun. Explore the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, quoted as written.',

  fees: {
    h2: 'Fees',
    lede: 'Queensland families pay each month in US dollars, our rate in every country except India. No deposit, and you can stop at any month end.',
    free: ['A real lesson with a teacher', 'Honest advice about next steps', 'No card required'],
    group: ['Five to ten children at one level', 'One regular teacher', 'Feedback on every puzzle', 'Certificate at the end'],
    one: ['One teacher, one child', 'Focus on chosen skills', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Questions about the Queensland Academies test',
    h2: 'Queensland families ask',
    items: [
      { q: 'What is in the Queensland Academies Year 7 Entrance Test?', a: 'Five tests over about three hours: verbal reasoning, numerical reasoning, reading comprehension, mathematics and written expression, facilitated by Edutest.' },
      { q: 'How long are the maths parts?', a: 'Numerical reasoning and mathematics each take 30 minutes, according to the academies\' Year 7 enrolments page.' },
      { q: 'What is numerical reasoning?', a: 'The academies describe it as measuring the ability to think and reason using numbers, including series, matrices, arithmetical reasoning and deduction.' },
      { q: 'How is it different from the mathematics test?', a: 'Mathematics is an achievement test of year-level knowledge across numbers, measurement, algebra, space and data. Numerical reasoning is an ability test of reasoning with numbers.' },
      { q: 'What is a logic grid?', a: 'A table listing people against possibilities, in which each clue lets you cross out boxes until only one answer remains for each person.' },
      { q: 'Do families receive test results?', a: 'The academies say they do not distribute individual test results or parent reports.' },
      { q: 'Where is the test held?', a: 'The policy names the QASMT campus at Toowong, QACI at Kelvin Grove and QAHS on the Gold Coast, with remote testing in limited circumstances.' },
      { q: 'Can you help with applications or shortlisting?', a: 'No. We give no admissions, application or school-choice advice.' },
      { q: 'Will lessons improve my child\'s result?', a: 'We promise no result. We teach maths and reasoning that are valuable on their own terms.' },
      { q: 'What time would lessons be in Brisbane?', a: 'We agree a weekly time after the free trial. Brisbane is four and a half hours ahead of India time all year.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Queensland families',
    lede: 'Maths, NAPLAN and coding.',
    items: [
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'Live classes for every year.' },
      { href: '/naplan-year-5-numeracy-practice', label: 'NAPLAN Year 5 numeracy', p: 'Upper-primary numeracy.' },
      { href: '/nsw-selective-test-thinking-skills-practice', label: 'Reasoning puzzles', p: 'Spotting flaws in arguments.' },
      { href: '/coding-classes-for-11-and-12-year-olds-australia', label: 'Coding for 11 and 12 year olds', p: 'Logic in programming.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Contests across Australia.' },
      { href: '/maths-challenges', label: 'Maths challenges', p: 'Puzzles to try at home.' }
    ]
  },

  start: {
    h2: 'Book a free maths and reasoning class',
    lede: 'Tell us your child\'s year and what they enjoy. The trial is a real lesson in reasoning, and we will give honest advice about whether more is worthwhile.',
    readFirst: 'Prefer to explore first? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> shows every course, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson.',
    note: 'WhatsApp brings the fastest reply. Our +91 number is Indian; the school operates from India, with no Australian premises.',
    formNote: 'No card details and no obligation. One reply to arrange it.'
  },

  footer: {
    cols: [
      { h4: 'Selective tests', links: [
        { href: '/nsw-selective-test-mathematical-reasoning-practice', label: 'NSW selective maths' },
        { href: '/victorian-selective-entry-exam-maths-practice', label: 'Victorian selective exam' },
        { href: '/wa-gate-aset-maths-practice', label: 'WA GATE ASET' },
        { href: '/sa-ignite-entry-maths-practice', label: 'SA Ignite' }
      ] },
      { h4: 'Australia', links: [
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/coding-classes-in-australia', label: 'Coding classes' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Reasoning taught for life; no admissions promises'
  },

  personalityCss: `
.ag-root.ag-qaem .ag-hero-grid { gap: clamp(1.1rem, 2.7vw, 2.4rem); }
.ag-root.ag-qaem .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-qaem .ag-capsule { border-left-width: 5px; }
.ag-root.ag-qaem .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-qaem .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-qaem .ag-table td { line-height: 1.5; }
.ag-root.ag-qaem .ag-spec dt { letter-spacing: 0.08em; }
.ag-root.ag-qaem .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Queensland Academies (qa.eq.edu.au), read 7 October 2026. Admissions home: "Entry into a Queensland Academy is through a selective entry applications process"; only one application can be submitted. Year 7 enrolments: applications for 2028 entry; "Applications must be received by 4pm, Friday 21 August 2026"; testing day 5-6 September 2026; Entrance Test on either Saturday 5 September 2026 or Sunday 6 September 2026 through automatic scheduling; notice of outcome late Term 4 2026; "The Entrance Test is a series of tests approximately 3 hours of duration that will be facilitated by Edutest. The tests will cover both ability and achievement."; ability and achievement definitions quoted; table: Ability Verbal reasoning 30min; Ability Numerical reasoning 30min "Measures the ability to think and reason using numbers. This includes series, matrices, arithmetical reasoning and deduction."; Achievement Reading comprehension 30min; Achievement Mathematics 30min "Measures year-level appropriate mathematical knowledge, including items tapping numbers, measurement, algebra, space and data."; Achievement Written expression 15min; "Edutest will mark the tests and analyse the student results on behalf of the Queensland Academies."; "we do not distribute individual test results or parent reports". Entrance Test Policy: venues QASMT [Toowong], QACI [Kelvin Grove], QAHS [Gold Coast]; bring 2 black or blue pens, 2 pencils, eraser, sharpener, ID. Queensland has no daylight saving (AEST UTC+10); India UTC+5:30.',
    localProject: 'Original logic grid puzzles with solutions (numbers 4, 7, 9; a four-runner race; quiz scores 12, 15, 18 including a deliberate two-solution version repaired with one extra clue; pets by number of legs) and original number patterns (3, 7, 15, 31 to 63; 2, 5, 10, 17, 26 to 37; 81, 27, 9, 3 to 1; Fibonacci-style 13; a 3 by 3 product grid giving 14).',
    requiredMentions: ['logic grid', 'series, matrices, arithmetical reasoning and deduction', 'Edutest', 'Friday 21 August 2026', 'Saturday 5 or Sunday 6 September 2026', 'Hana did not score 15', '3, 7, 15, 31', 'Kelvin Grove', 'individual test results or parent reports'],
    sources: [
      { claim: 'Queensland Academies, Year 7 enrolments: dates, Entrance Test format and descriptions, results policy.', url: 'https://qa.eq.edu.au/enrolments/year7-enrolments' },
      { claim: 'Queensland Academies, Entrance Test Policy: venues, scheduling, items to bring.', url: 'https://qa.eq.edu.au/enrolments/entrance-test-policy' },
      { claim: 'Queensland Academies admissions home: selective entry process, one application.', url: 'https://qa.eq.edu.au/' },
      { claim: 'QASMT enrolments: academically selective state school offering IB programmes.', url: 'https://qasmt.eq.edu.au/enrolments' }
    ],
    rejectedClaims: [
      'Calculator rules: the policy\'s list of items to bring does not mention a calculator, and no rule was stated, so none is claimed.',
      'Number of questions in each test: not stated on the pages read.',
      'Shortlisting, engagement activities, merit pools and offers: described by the academies but omitted, because no admissions advice is given.',
      'Edutest sample materials: not reproduced; all puzzles are original.',
      'Any promise about results or offers: refused.'
    ]
  }
};
