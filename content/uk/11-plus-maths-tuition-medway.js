'use strict';
// 11 plus maths tuition in Medway (ag- maths door by area, UK cluster Phase 6). Kent has its own page.
// Read on 26 September 2026 by curl, quotes grepped from the raw text:
//  - Medway Council, About the Medway Test: "The Medway Test is made up of 3 papers: English Mathematics Reasoning";
//    "a minimum of a 20 minute break between test papers"; "These tests are written specifically for Medway Council.
//    Our test provider is GL Assessment."; materials found online or in retailers other than on the GL website "are not
//    official and are not supported or endorsed by GL or Medway Council"; timing table: English 30 minutes; Mathematics
//    2 practice questions (2 minutes), 50 minutes marked, "Mathematical elements", timed sections "No. The whole test must
//    be completed in the 50 minutes."; Reasoning 45 minutes (spatial/non-verbal 20, verbal 25); Chatham Grammar also
//    accepts children assessed suitable through the Kent Test.
//  - Medway Council, How the test is marked: raw scores standardised for age; "English test standardised score x 2 +
//    Mathematics test standardised score x 2 + Reasoning test standardised score x 1 = Total weighted score"; a minimum
//    total set each year; recent years about a quarter of the cohort assessed as grammar (figures not printed as targets).
//  - Medway Council, Outside Medway: "the Medway Test is used only by the 6 Medway grammar schools".
//  - Medway Council, Register: registration opens Monday 18 May and closes Friday 12 June 2026; talk to the child's
//    teacher first.
//  - Medway Council, Dates: Medway primary pupils sit at their own school on Tuesday 15 and Wednesday 16 September 2026;
//    others at a Medway test centre on 19 or 20 September 2026. Results: email after 10am, Wednesday 14 October 2026.
//  - Medway familiarisation booklet (GL Assessment, 2026): "All of the tests are multiple-choice"; "The Mathematics test
//    will cover what you have been taught in class. However, there may be some questions that are more challenging";
//    "All questions in the English and Mathematics tests are based on the Key Stage 2 National Curriculum up to and
//    including Year 5"; not allowed: ruler, protractor, compasses, "any type of timer", "calculator - including watches
//    and any other device with this facility", extra paper.
//  - Medway Council schools directory: Chatham Grammar, Fort Pitt Grammar School, Holcombe Grammar School, Rainham Mark
//    Grammar School, Sir Joseph Williamson's Mathematical School, The Rochester Grammar School.
//  - National curriculum in England, mathematics, Year 5: "multiply numbers up to 4 digits by a one- or two-digit number
//    using a formal written method, including long multiplication for two-digit numbers"; short division; estimate and
//    check.
// Spine: maths is one unbroken 50-minute paper, double weighted, with no timer on the wrist; pacing and written methods
// are the child's own. Lesson family: formal written multiplication and division with estimation checks.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'MEDWAY TEST', label: '11 plus maths in Medway', blurb: 'Medway gives maths a whole 50-minute paper, counted twice, with no sections and no timer on the wrist.' },
  slug: '11-plus-maths-tuition-medway',
  code: 'mdm',
  accent: '#10226B',
  accentRationale: 'Medway 11 plus maths: a dockyard navy, chosen by colour distance from every accent on the site (11.57:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Medway',
  title: '11 Plus Maths Tuition Medway | Medway Test Maths, Online',
  description: 'Live online 11 plus maths for the Medway Test: a 50-minute maths paper counted twice, the rules Medway Council publishes, and Year 5 written methods taught well.',
  ogDescription: 'The Medway Test gives maths its own 50-minute paper, weighted twice, with no sections and no watches. How to pace it, and the Year 5 written methods behind it.',
  twitterDescription: 'Medway Test maths, taught live online: one 50-minute paper, double weighted, Year 5 methods.',
  pageName: '11 Plus Maths Tuition in Medway',
  webPageDescription: 'Live online mathematics teaching for children preparing for the Medway Test used by the six Medway grammar schools, based on what Medway Council and its GL familiarisation booklet publish.',
  courseDescription: 'Live online maths classes for Medway children in Years 4 and 5, teaching Year 5 written methods and number for a 50-minute multiple-choice maths paper with no calculator or timer.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Medway',
  navLinks: [
    { href: '#test', label: 'The Medway Test' },
    { href: '#fifty', label: 'Fifty minutes' },
    { href: '#methods', label: 'Written methods' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Medway &middot; Medway Test mathematics paper &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Medway',
  lede: 'The Medway Test treats maths more generously than almost any other 11 plus. It has a paper of its own, fifty minutes long, and Medway Council\'s marking formula counts it twice: English times two, maths times two, reasoning once. And unlike tests that chop maths into short timed sections, in Medway Council\'s own timing table, the column headed "Timed sections" reads, for maths, "No. The whole test must be completed in the 50 minutes." Then add one rule from the familiarisation booklet: no timer of any kind, watches with a calculator included. So for fifty minutes a ten-year-old manages their own pace through a full paper of Year 5 maths, without a calculator and without a watch. This page sets out what Medway Council publishes, and teaches the written methods such a paper leans on.',
  secondaryCta: { href: '#fifty', label: 'See how to pace 50 minutes' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Medway Test.',
  heroNote: 'Maths only &middot; We do not teach English or reasoning &middot; No connection with Medway Council or any school',
  spec: [
    ['Test', 'The Medway Test, Medway\'s 11+'],
    ['Written for', 'Medway Council, by GL Assessment'],
    ['Papers', 'English, Mathematics, Reasoning'],
    ['Maths paper', '50 minutes, one block'],
    ['Maths weighting', 'Counted twice in the total'],
    ['Format', 'Multiple choice'],
    ['Not allowed', 'Calculator, any timer, ruler, protractor'],
    ['We teach', 'Year 5 maths and written methods']
  ],
  capsuleQ: 'In short',
  capsule: 'Medway Council runs the Medway Test for the six Medway grammar schools, and says it is used only by them. GL Assessment writes it "specifically for Medway Council". There are three multiple-choice papers with breaks of at least twenty minutes: English (30 minutes), Mathematics (50 minutes, with no timed sections inside it) and Reasoning (45 minutes). The council\'s total counts the English and Mathematics standardised scores twice and Reasoning once, so maths is two fifths of the total. Questions are based on Key Stage 2 up to and including Year 5, and calculators and timers are not allowed. For 2027 entry, registration ran from 18 May to 12 June 2026, Medway primary pupils sat the test on 15 and 16 September 2026, and results arrive on 14 October 2026. We teach the maths, live online. Try a first lesson free; after that it is USD 100 a month in a group or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Medway starting points',
    h2: 'Three courses for a 50-minute maths paper',
    lede: 'A long, double-weighted paper rewards reliable methods. Choose by where the errors come from.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'MEDWAY / 1', title: 'Medway Test maths course', note: 'Year 5 content and written methods, practised in fifty-minute blocks.' },
      { course: 'mental-maths-mastery-kids', code: 'MEDWAY / 2', title: 'Mental maths for estimating', note: 'Quick estimates that check written answers without a calculator.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'MEDWAY / 3', title: 'Solid number foundations', note: 'For Year 4 children whose tables and place value need firming up first.' }
    ]
  },

  sections: [
    {
      id: 'test', tint: 'tint', eyebrow: 'The Medway Test',
      h2: 'What Medway Council publishes',
      lede: 'Medway Council runs registration and testing and publishes the papers, timings, marking and dates. Read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'The three Medway Test papers, from Medway Council', head: ['Paper', 'Marked time', 'What it covers'], rows: [
          ['English', '30 minutes', 'Comprehension, punctuation, grammar'],
          ['Mathematics', '50 minutes, one block', 'Mathematical elements, Key Stage 2 to Year 5'],
          ['Reasoning', '45 minutes', 'Spatial and non-verbal (20 minutes), verbal (25 minutes)']
        ] },
        { kind: 'table', caption: 'Medway Test dates for September 2027 entry', head: ['Step', 'Date', 'Detail'], rows: [
          ['Registration', 'Monday 18 May to Friday 12 June 2026', 'The council suggests talking to the child\'s teacher first.'],
          ['Test, Medway primaries', 'Tuesday 15 and Wednesday 16 September 2026', 'At the child\'s own school.'],
          ['Test, other children', 'Saturday 19 or Sunday 20 September 2026', 'At a Medway test centre.'],
          ['Results', 'Wednesday 14 October 2026', 'By email, after 10am.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The council says "These tests are written specifically for Medway Council. Our test provider is GL Assessment." It adds that materials found online or in shops, other than on GL\'s website, "are not official and are not supported or endorsed by GL or Medway Council".',
            'The familiarisation booklet says "All of the tests are multiple-choice", that the maths "will cover what you have been taught in class" with some more challenging questions, and that questions are "based on the Key Stage 2 National Curriculum up to and including Year 5".'
          ],
          right: [
            'The marking formula is published: "English test standardised score x 2 + Mathematics test standardised score x 2 + Reasoning test standardised score x 1 = Total weighted score." A minimum total is set each year; the council\'s recent figures put about a quarter of each cohort in the grammar band. We mention that as background, never as a target.',
            'The council says the Medway Test is used only by the six Medway grammar schools. Chatham Grammar also accepts a Kent Test assessment. Admissions after the test are for the council and the schools.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.medway.gov.uk/info/200137/schools_and_learning/1049/medway_test_11" rel="noopener" target="_blank">Medway Council, Medway Test (11+)</a>, including its pages on registration, dates, results, how the test is marked and children outside Medway; the Medway Test familiarisation booklet (GL Assessment, 2026). Modern Age Coders has no connection with Medway Council, GL Assessment or any Medway school.' }
      ]
    },
    {
      id: 'fifty', tint: 'plain', eyebrow: 'Fifty minutes, one block',
      h2: 'Pacing a long maths paper without a watch',
      lede: 'Most 11 plus maths comes in short sections with an audio file or an invigilator calling time. Medway\'s does not.',
      body: [
        { kind: 'two',
          leftH3: 'What the rules add up to',
          left: [
            'For its maths paper, the council\'s timing table is plain: "No. The whole test must be completed in the 50 minutes." The familiarisation booklet lists among things not allowed "any type of timer" and a calculator "including watches and any other device with this facility".',
            'So a child meets fifty minutes of maths as one stretch, and the decisions about speed are theirs. Some children rush the first half and run out of care; others linger on an early question and never reach the last page.'
          ],
          rightH3: 'What we practise',
          right: [
            'We build stamina in steps: twenty-minute maths blocks in the autumn, thirty-five by spring, the full fifty by summer. Children learn to check the time only at natural points, such as the end of each page, using whatever clock the test room provides, rather than constantly.',
            'We also teach the simplest pacing rule there is: halfway through the time, be at least halfway through the questions. A child who is well behind at that moment speeds up on familiar questions and saves the longest for last.'
          ] },
        { kind: 'p', html: 'The double weighting makes this matter. With maths counted twice in the total, a paper that goes well for thirty minutes and badly for twenty costs more than it would in a test where maths is a small section. Stamina is part of the maths here.' }
      ]
    },
    {
      id: 'methods', tint: 'deep', eyebrow: 'The lesson',
      h2: 'Written methods that do not wobble',
      lede: 'With no calculator for fifty minutes, the formal written methods of Year 5 carry the paper. The curriculum asks children to "multiply numbers up to 4 digits by a one- or two-digit number using a formal written method, including long multiplication for two-digit numbers".',
      body: [
        { kind: 'table', caption: 'Year 5 written methods, with estimation checks (our own examples)', head: ['Calculation', 'Estimate first', 'Exact answer'], rows: [
          ['347 × 26', 'About 350 × 25 = 8,750', '9,022 (6,940 + 2,082)'],
          ['1,208 × 7', 'About 1,200 × 7 = 8,400', '8,456'],
          ['2,436 ÷ 6', 'About 2,400 ÷ 6 = 400', '406: note the zero in the tens'],
          ['4,005 - 1,687', 'About 4,000 - 1,700 = 2,300', '2,318'],
          ['58 × 49', '58 × 50 = 2,900, minus 58', '2,842']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Every row starts with an estimate, and that is deliberate. On a multiple-choice paper, an estimate often rules out most of the options before the written method starts. After the method, it confirms that the answer is the right size. It is the calculator-free equivalent of checking your work.',
            'The division row shows the classic trap: 2,436 ÷ 6 is 406, not 46. Children who forget the placeholder zero get an answer ten times too small. The estimate, about 400, catches it at once.'
          ],
          right: [
            'The last row shows a mental shortcut the curriculum encourages: "multiply and divide numbers mentally, drawing upon known facts". 58 × 49 is 58 × 50 minus 58, which is quicker and safer than long multiplication. A fifty-minute paper rewards children who know when a written method is needed and when it is not.',
            'Subtraction across zeros, as in 4,005 - 1,687, is where exchanges go wrong. We teach it until it is boring, which is exactly the point: boring methods do not wobble at minute forty.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics</a>, Year 5 multiplication and division, and addition and subtraction (statutory requirements). The examples are ours.' }
      ]
    },
    {
      id: 'prepare', tint: 'tint', eyebrow: 'Our approach',
      h2: 'Methods, stamina, and nothing unofficial',
      lede: 'Medway Council\'s warning about unofficial materials shapes how we prepare children, too.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Every Year 5 strand', p: 'Number, fractions, measures, geometry and statistics, each taught until quick and correct. A fifty-minute paper has room for all of them.' },
          { h3: 'Methods first', p: 'Formal written methods for all four operations, checked by estimation, practised until they are automatic.' },
          { h3: 'Stamina last', p: 'Timed blocks that grow towards fifty minutes, so accuracy at the end matches accuracy at the start.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The council points families to GL\'s website and its own familiarisation booklet for the format. Use those. We do not reproduce them, and our practice questions are written by us to the Year 5 curriculum.',
            'English is also counted twice, and reasoning once. We teach only the maths, and families should plan for the other papers separately.'
          ],
          right: [
            'The council asks families to talk to their child\'s teacher before registering, to see whether the test is right for them. We agree, and our free lesson ends with an equally honest view of the maths.',
            'Medway and Kent run different tests on different timetables; our <a class="ag-inline-link" href="/11-plus-maths-tuition-kent">Kent Test maths page</a> covers the county\'s own test.'
          ] }
      ]
    },
    {
      id: 'towns', tint: 'plain', eyebrow: 'The six schools',
      h2: 'Chatham, Rochester, Gillingham and Rainham',
      lede: 'Medway Council\'s school directory names the six grammar schools that use the Medway Test. We list them only to show which test this page covers.',
      body: [
        { kind: 'table', caption: 'Medway\'s grammar schools, as Medway Council\'s directory lists them', head: ['School', 'Note'], rows: [
          ['Chatham Grammar', 'Also accepts the Kent Test'],
          ['Fort Pitt Grammar School', 'Medway Test'],
          ['Holcombe Grammar School', 'Medway Test'],
          ['Rainham Mark Grammar School', 'Medway Test'],
          ['Sir Joseph Williamson\'s Mathematical School', 'Medway Test'],
          ['The Rochester Grammar School', 'Medway Test']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Lessons are live on video, so a child in Strood, Gillingham, Hoo or Walderslade is taught the same way, in groups of five to ten matched by level.',
            'For coding in the area, see our <a class="ag-inline-link" href="/coding-classes-in-united-kingdom">UK page</a>, which lists every city and county we cover.'
          ],
          right: [
            'The council says children who do not live in Medway can sit the Medway Test, and explains on a separate page what families outside Medway should consider before registering.',
            'We have no connection with Medway Council, GL Assessment or any of these schools, and we do not advise on applications or places.'
          ] },
        { kind: 'source', html: 'Source: Medway Council, secondary schools directory and Medway Test pages, read 26 September 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Towards September 2027',
    h2: 'Four stages to fifty steady minutes',
    lede: 'For today\'s Year 5, registration should fall in late spring 2027 and the test early in Year 6. The council publishes the dates.',
    table: { caption: 'From methods to stamina', head: ['When', 'Stage', 'What secure looks like'], rows: [
      ['Autumn, Year 5', '1. Number facts and place value', 'Tables instant, numbers to a million read and rounded correctly'],
      ['Winter, Year 5', '2. Written methods', 'Long multiplication and short division right first time, checked by estimate'],
      ['Spring, Year 5', '3. The rest of Year 5', 'Fractions, measures, shape and data as secure as number'],
      ['Summer holiday', '4. Fifty minutes', 'A full paper, paced without a watch, as accurate at the end as the start']
    ] },
    left: { h3: 'A later start', ps: [
      'If time is short, methods and stamina come first: they carry the most marks on a long paper.',
      'We will tell you honestly at the free lesson what the time allows.'
    ] },
    right: { h3: 'After October', ps: [
      'Reliable written methods are the backbone of secondary maths. Many pupils continue with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>.',
      'Children who love problems can try the challenges on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our courses',
    h2: 'Maths and coding for Medway families',
    lede: 'By stage, each with its full syllabus.',
    bands: [
      { num: 'I', h3: 'For the Medway Test', sub: 'Years 3 to 5', courses: [
        { code: 'MDM / 1', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths for Medway', blurb: 'Year 5 maths for a 50-minute paper.' },
        { code: 'MDM / 2', slug: 'mental-maths-mastery-kids', title: 'Mental maths and estimation', blurb: 'Checks without a calculator.' },
        { code: 'MDM / 3', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths to Year 5', blurb: 'Foundations first.' },
        { code: 'MDM / 4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus arithmetic course', blurb: 'Number sense by hand.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Year 6 onwards', courses: [
        { code: 'MDM / 5', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Early secondary maths', blurb: 'Algebra and more.' },
        { code: 'MDM / 6', slug: 'gcse-mathematics-mastery', title: 'GCSE maths, full course', blurb: 'Both tiers, every board.' },
        { code: 'MDM / 7', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition problem solving', blurb: 'Stretch for strong pupils.' }
      ] },
      { num: 'III', h3: 'Coding', sub: 'Algorithms by hand and machine', courses: [
        { code: 'MDM / 8', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Write long multiplication as an algorithm.' },
        { code: 'MDM / 9', slug: 'scratch-programming-complete-course', title: 'Scratch for young coders', blurb: 'Logic and sequence.' },
        { code: 'MDM / 10', slug: 'python-ai-kids-masterclass', title: 'First Python, with AI', blurb: 'Typed code for ready pupils.' }
      ] },
      { num: 'IV', h3: 'Later', sub: 'Teenagers', courses: [
        { code: 'MDM / 11', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic methods', blurb: 'Speed on secure foundations.' },
        { code: 'MDM / 12', slug: 'ai-ml-masterclass-teens', title: 'Teen machine learning', blurb: 'Where arithmetic ends up.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'After school or on weekends, UK time',
    lede: 'Lessons are taught live from India. Medway primary pupils have early-evening or weekend-morning slots, set in UK time, with the clock changes absorbed on our side.',
    slots: [
      { time: 'Weekday, after school', l: 'Early in the evening.' },
      { time: 'Weekend, morning', l: 'For tired weekday learners.' },
      { time: 'Holidays', l: 'Extra sessions to build stamina.' }
    ],
    cells: [
      { h3: 'One teacher', p: 'The same teacher each week.' },
      { h3: 'Frank updates', p: 'Short, honest notes for parents.' },
      { h3: 'Five to ten children', p: 'Grouped by level.' },
      { h3: 'Nothing unofficial', p: 'Our own questions only; no copied GL or council material.' },
      { h3: 'One to one', p: 'For method gaps or pacing.' },
      { h3: 'Maths only', p: 'No English or reasoning coaching; no admissions advice.' }
    ]
  },

  projectsH2: 'Where our students take their maths',
  projectsLede: 'Four projects built by students at our school, every one resting on reliable arithmetic. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'From parents\' Google reviews, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly US dollar fee for every family outside India. No sign-up charge; stop whenever you like.',
    free: ['A real lesson', 'An honest view', 'No card needed'],
    group: ['Five to ten children at one level', 'A regular teacher', 'Methods checked in class', 'A certificate at the end'],
    one: ['A teacher for one child', 'Focused on methods and pace', 'Flexible timing']
  },

  faq: {
    eyebrow: 'Medway Test questions',
    h2: 'What Medway families ask us',
    items: [
      { q: 'What is in the Medway Test?', a: 'Medway Council says it has three papers: English (30 minutes), Mathematics (50 minutes) and Reasoning (45 minutes), with at least twenty minutes\' break between them. All are multiple choice.' },
      { q: 'How much does maths count?', a: 'The council\'s formula counts the English and Mathematics standardised scores twice each and Reasoning once, so maths is two fifths of the total weighted score.' },
      { q: 'Is the maths paper split into timed sections?', a: 'No. The council says the whole maths test must be completed in the 50 minutes.' },
      { q: 'Can my child wear a watch?', a: 'The familiarisation booklet lists any type of timer, and calculators including watches with that facility, among items not allowed. Check the booklet for the full list.' },
      { q: 'What maths is tested?', a: 'The booklet says all questions in the English and Mathematics tests are based on the Key Stage 2 National Curriculum up to and including Year 5.' },
      { q: 'When is the Medway Test for September 2028 entry?', a: 'Not published when we checked on 26 September 2026. For 2027 entry, registration ran from 18 May to 12 June 2026 and Medway primary pupils sat the test on 15 and 16 September 2026.' },
      { q: 'Is the Medway Test the same as the Kent Test?', a: 'No. They are different tests. The council says the Medway Test is used only by the six Medway grammar schools, though Chatham Grammar also accepts a Kent Test assessment.' },
      { q: 'Are shop-bought practice papers official?', a: 'No. The council says materials found online or in retailers, other than on the GL website, are not official and not endorsed by GL or Medway Council.' },
      { q: 'Do you teach English or reasoning?', a: 'No. We teach maths only, and we do not advise on applications or places.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. Then it is USD 100 a month for a group or USD 150 a month for one to one.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Kent and Medway families',
    lede: 'The Kent Test next door, our national page, and nearby selective areas.',
    items: [
      { href: '/11-plus-maths-tuition-kent', label: '11 plus maths in Kent', p: 'The county\'s own test, sat in the first week of Year 6.' },
      { href: '/11-plus-maths-tuition-bexley', label: '11 plus maths in Bexley', p: 'A London borough test just west of Medway.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The national overview.' },
      { href: '/online-coding-classes-for-kids-uk', label: 'Coding for UK children', p: 'A primary child\'s first steps in code.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Maths challenges through the year.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every UK area.' }
    ]
  },

  start: {
    h2: 'Book a free Medway maths lesson',
    lede: 'Tell us your child\'s year and how they manage longer stretches of maths. We teach a proper lesson and then give you an honest account.',
    readFirst: 'Reading first? Every <a class="ag-inline-link" href="/courses">course syllabus</a> is online, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our lessons, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> shows the path onward.',
    note: 'WhatsApp is the quickest. We teach from India, our number is Indian, and we have no office in Kent or Medway.',
    formNote: 'No card details. One reply to fix a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/gcse-mathematics-mastery', label: 'GCSE maths' }
      ] },
      { h4: 'Kent, Medway and national', links: [
        { href: '/11-plus-maths-tuition-kent', label: '11 plus maths in Kent' },
        { href: '/11-plus-maths-tuition-bexley', label: '11 plus maths in Bexley' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'Medway Council runs the test; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-mdm .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-mdm .ag-capsule { border-left-width: 5px; border-radius: 0 6px 6px 0; }
.ag-root.ag-mdm .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-mdm .ag-table caption { text-align: left; font-weight: 700; letter-spacing: 0.012em; }
.ag-root.ag-mdm .ag-table td:nth-child(3) { font-variant-numeric: tabular-nums; }
.ag-root.ag-mdm .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-mdm .ag-three h3 { letter-spacing: -0.01em; }
.ag-root.ag-mdm .ag-slots { gap: 1.04rem; }
`,

  mustMention: ['Sir Joseph Williamson', 'Fort Pitt Grammar School', 'Holcombe Grammar School', 'Rainham Mark Grammar School', 'written specifically for Medway Council', 'The whole test must be completed in the 50 minutes', 'Mathematics test standardised score x 2', 'any type of timer']
};
