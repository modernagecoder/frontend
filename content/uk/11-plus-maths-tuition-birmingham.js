'use strict';
// 11 plus maths tuition in Birmingham (ag- maths door by area, UK cluster Phase 6).
// Read on 26 September 2026 by curl, quotes grepped from the raw text:
//  - Birmingham City Council, grammar schools in Birmingham, September 2027: "There is one entry test for all of
//    Birmingham's grammar schools and for grammar schools outside Birmingham that are part of the West Midlands Grammar
//    Schools group"; eight Birmingham schools named (Bishop Vesey's; KE VI Aston; Camp Hill Boys; Camp Hill Girls; Five
//    Ways; Handsworth Grammar for Boys; Handsworth School for Girls; Sutton Coldfield Grammar School for Girls).
//  - King Edward VI Foundation, "The test": provided by GL Assessment; two papers "each approximately 60 minutes long
//    (which includes time for instructions and example questions)"; "individually timed sections" of English
//    comprehension, verbal reasoning, mathematics and non-verbal/spatial reasoning; all multiple choice on a separate
//    answer sheet; weightings 50% English/verbal, 25% non-verbal, 25% mathematics; instructions and timings by audio CD;
//    candidates "can only work on the current section and cannot revisit a previous section"; five-minute warning in
//    sections over five minutes; no watches, a clock in the room; calculators not allowed; no rulers.
//  - KE VI Foundation timeline (2027 entry): registration opens 5 May 2026 via westmidlandsgrammarschools.co.uk;
//    reasonable adjustments deadline 12 June 2026 4pm; registration deadline 26 June 2026 4pm; test 12 September 2026,
//    AM and PM sessions; results 16 October 2026 ("not the offer of a place"); the test "is not to be used as a practice
//    or 'mock test'" by candidates with no intention of applying.
//  - KE VI Foundation results page: "The Qualifying Score for all of the Birmingham grammar schools for 2027 entry is
//    205." (Priority scores, cut-off tables and distances are admissions and are not used.)
//  - West Midlands Grammar Schools familiarisation guide (2023 edition, GL): not allowed "a ruler", "a calculator",
//    "a protractor", "scrap paper"; "you may do any working out in the test booklet"; "The Mathematics section will draw
//    upon what you have been taught in class; however, there may be some questions that are more challenging".
//  - National curriculum in England, mathematics, Year 5 geometry (properties of shapes): "know angles are measured in
//    degrees: estimate and compare acute, obtuse and reflex angles"; "draw given angles, and measure them in degrees";
//    angles at a point (360), on a straight line (180), other multiples of 90; properties of rectangles; non-statutory
//    guidance: pupils become accurate "measuring with a protractor" and "use angle sum facts ... to make deductions".
// Spine: the Year 5 curriculum teaches measuring with a protractor; the Birmingham test bans the protractor, so every
// angle question on it is a reasoning question. Lesson family: angle facts and deduction without instruments.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'BIRMINGHAM TEST', label: '11 plus maths in Birmingham', blurb: 'No ruler, no protractor, no scrap paper: why the maths on the Birmingham grammar schools test rewards reasoning over measuring.' },
  slug: '11-plus-maths-tuition-birmingham',
  code: 'bhm',
  accent: '#0E0E5C',
  accentRationale: 'Birmingham 11 plus maths: a deep canal-night navy, picked by colour distance from every accent already on the site (13.7:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Birmingham',
  title: '11 Plus Maths Tuition Birmingham | Grammar School Test Maths',
  description: 'Live online 11 plus maths for the Birmingham grammar schools test: the maths sections, what the rules ban from the desk, and why angles become reasoning.',
  ogDescription: 'The Birmingham grammar schools test bans rulers, protractors, calculators and scrap paper. So its angle questions are reasoning questions. How we teach that.',
  twitterDescription: 'Birmingham 11 plus maths, taught live online: Year 5 geometry by reasoning, not by protractor.',
  pageName: '11 Plus Maths Tuition in Birmingham',
  webPageDescription: 'Live online mathematics teaching for Birmingham children preparing for the entrance test used by the city\'s eight grammar schools, built on what the King Edward VI Foundation and West Midlands Grammar Schools publish.',
  courseDescription: 'Live online maths classes for Birmingham children in Years 4 and 5, teaching Year 5 number and geometry for a multiple-choice test taken with a pencil, an eraser and nothing else.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Birmingham',
  navLinks: [
    { href: '#test', label: 'The test' },
    { href: '#desk', label: 'The desk' },
    { href: '#angles', label: 'Angles' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Birmingham &middot; Grammar schools entrance test maths &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Birmingham',
  lede: 'Here is a detail from the rules for the Birmingham grammar schools test that changes how a whole topic should be taught. The familiarisation guide lists four things a child may not use: a ruler, a calculator, a protractor and scrap paper. In Year 5, the national curriculum teaches children to draw angles and measure them in degrees, and its guidance expects them to become accurate with a protractor. On the test, the protractor stays at home. Any question about an angle therefore has to be answered by knowing facts and reasoning from them, never by measuring. That is a different skill from the one most Year 5 classrooms have just practised, and it can be taught directly. This page sets out what the King Edward VI Foundation and West Midlands Grammar Schools publish about the test, and how we teach its maths.',
  secondaryCta: { href: '#angles', label: 'See the angle reasoning' },
  wa: 'Hello Modern Age Coders, I would like a free maths class for my child for the Birmingham grammar schools test.',
  heroNote: 'Maths only &middot; We do not teach verbal or non-verbal reasoning &middot; No link with any Birmingham school',
  spec: [
    ['Test', 'One entrance test, eight Birmingham schools'],
    ['Arranged by', 'King Edward VI Foundation'],
    ['Provider', 'GL Assessment'],
    ['Papers', 'Two, about 60 minutes each with instructions'],
    ['Inside each paper', 'Separately timed sections, maths among them'],
    ['Answers', 'Multiple choice, separate answer sheet'],
    ['On the desk', 'Pencil, eraser, sharpener, nothing more'],
    ['We teach', 'Year 5 maths by reasoning, not measuring']
  ],
  capsuleQ: 'In short',
  capsule: 'Birmingham City Council says there is one entry test for all of Birmingham\'s grammar schools, shared with the West Midlands Grammar Schools group outside the city. The King Edward VI Foundation arranges it for the eight Birmingham schools; GL Assessment provides it. Children sit two papers of about 60 minutes each, and each paper is split into individually timed sections of English comprehension, verbal reasoning, mathematics and non-verbal or spatial reasoning. Every question is multiple choice, mathematics carries 25% of the weighting, and the familiarisation guide says the maths draws on "what you have been taught in class", with some harder questions. For September 2027 entry the test was sat on Saturday 12 September 2026. We teach the Year 5 maths behind it, live online, and we teach it for a desk with no ruler, protractor, calculator or scrap paper. Your first lesson costs nothing; after it, a group place is USD 100 and private teaching USD 150, each per month.',

  picks: {
    eyebrow: 'Where a Birmingham child starts',
    h2: 'Three courses for a pencil-only paper',
    lede: 'Choose by how your child copes without tools, not by how many practice papers they have done.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'BHAM / 1', title: '11 plus maths preparation', note: 'Year 5 number, fractions, measures and geometry, taught so the facts do the work that tools cannot.' },
      { course: 'mental-maths-mastery-kids', code: 'BHAM / 2', title: 'Mental calculation', note: 'No calculator and no scrap paper: calculation that happens in the head, or in a small margin, is the whole game.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'BHAM / 3', title: 'Foundations, Years 1 to 5', note: 'For a Year 4 or early Year 5 child who still needs the foundations before speed.' }
    ]
  },

  sections: [
    {
      id: 'test', tint: 'tint', eyebrow: 'The test, as published',
      h2: 'One test for the city\'s eight grammar schools',
      lede: 'Three organisations publish the facts: Birmingham City Council, the King Edward VI Foundation, which arranges the test for the eight Birmingham schools, and West Midlands Grammar Schools, which handles registration. All read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'The Birmingham entrance test for September 2027 entry, from the King Edward VI Foundation\'s timeline', head: ['Stage', 'Date', 'What the Foundation says'], rows: [
          ['Registration opens', 'Tuesday 5 May 2026', 'Online through the West Midlands Grammar Schools website, with an email acknowledgement.'],
          ['Reasonable adjustments', 'By 4pm, Friday 12 June 2026', 'Requests and evidence are uploaded with the registration form.'],
          ['Registration closes', '4pm, Friday 26 June 2026', 'No registrations are accepted after this time.'],
          ['Entrance test', 'Saturday 12 September 2026', 'Two sessions, morning and afternoon; each child is allocated one.'],
          ['Results', 'Friday 16 October 2026', 'Sent before the council preference deadline, and not an offer of a place.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Foundation describes two papers, "each approximately 60 minutes long (which includes time for instructions and example questions)". West Midlands Grammar Schools give the same papers as approximately 50 to 60 minutes. Each paper is divided into smaller sections with their own time limits, covering English comprehension, verbal reasoning, mathematics and non-verbal or spatial reasoning. Nothing is written out in sentences. Children choose from printed options and shade their choice on an answer sheet that, according to the guide, is "scored by computer".',
            'The Foundation publishes weightings of 50% for English and verbal reasoning, 25% for non-verbal reasoning and 25% for mathematics, with each section score standardised for age. For 2027 entry it gives a qualifying score of 205 for all the Birmingham grammar schools. How that score is then used for places is set out by each school, and we leave it with them.'
          ],
          right: [
            'The sections are run by audio. Before each one, children are told how long they have; they "can only work on the current section and cannot revisit a previous section or move on to the next section until told to do so". In sections longer than five minutes, the recording announces when five minutes remain. Watches and timers are not allowed; there is a clock in the room.',
            'One line in the timeline is worth repeating because it is unusual and fair: the grammar schools pay for the test, and it "is not to be used as a practice or \'mock test\'" by children with no intention of applying. We would never suggest registering a child to practise.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.birmingham.gov.uk/info/20119/school_admissions/584/grammar_schools_in_birmingham" rel="noopener" target="_blank">Birmingham City Council, grammar schools in Birmingham</a>; <a class="ag-inline-link" href="https://kingedwardvifoundation.co.uk/the-test/" rel="noopener" target="_blank">King Edward VI Foundation, the test</a>, its timeline and results pages; <a class="ag-inline-link" href="https://westmidlandsgrammarschools.co.uk/the-entrance-test" rel="noopener" target="_blank">West Midlands Grammar Schools, the entrance test</a>, and its familiarisation guide (2023 edition). Modern Age Coders has no connection with the Foundation, West Midlands Grammar Schools, GL Assessment, the council or any school.' }
      ]
    },
    {
      id: 'desk', tint: 'plain', eyebrow: 'What is on the desk',
      h2: 'A pencil, an eraser, a sharpener, and nothing else',
      lede: 'The familiarisation guide is specific about equipment, and each item it removes takes away a way of getting an answer.',
      body: [
        { kind: 'three', cells: [
          { h3: 'No calculator', p: 'Every calculation is mental or written by hand. That includes the long multiplication and the fraction arithmetic of Year 5, so written methods need to be quick and compact.' },
          { h3: 'No ruler, no protractor', p: 'Nothing can be measured. A length or an angle has to be worked out from what the question tells you and the facts you already know.' },
          { h3: 'No scrap paper', p: 'The guide says scrap paper is not permitted, "However, you may do any working out in the test booklet." The working has to fit in the margins of the booklet.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why this matters for maths in particular',
          left: [
            'Much primary maths teaching, rightly, uses tools. Children measure lines with rulers, draw angles with protractors and check answers on calculators. A test that removes all three is really asking a different question: do you know enough to not need them?',
            'For number work the answer is fluency. For geometry the answer is facts: the angles on a straight line, the angles round a point, the right angles of a rectangle. Those let a child find a missing angle in seconds without anything in their hand.'
          ],
          rightH3: 'What we change in lessons',
          right: [
            'From the start, our Birmingham-bound pupils practise with only a pencil. We set questions in small printed boxes so the working has to fit, which teaches neat, short methods rather than sprawling ones.',
            'We also teach children to trust a fact over a picture. A diagram on a test page may not be drawn accurately, and a child who reasons from the facts is never misled by how the picture happens to look.'
          ] }
      ]
    },
    {
      id: 'angles', tint: 'deep', eyebrow: 'The Year 5 geometry',
      h2: 'Angles you cannot measure, so you reason',
      lede: 'The national curriculum lists the facts. The test, by taking the protractor away, makes them the only route in.',
      body: [
        { kind: 'table', caption: 'Year 5 angle facts from the national curriculum, and a reasoning question of our own for each', head: ['Year 5 fact', 'In the curriculum\'s words', 'A question in our style'], rows: [
          ['Kinds of angle', 'Estimate and compare acute, obtuse and reflex angles', 'Which is larger: a reflex angle or three right angles minus a small amount? Explain without drawing.'],
          ['A whole turn', 'Angles at a point and 1 whole turn (total 360°)', 'Three angles meet at a point. Two are 145° and 90°. What is the third?'],
          ['A straight line', 'Angles at a point on a straight line and half a turn (total 180°)', 'A line is crossed by another. One angle is 63°. Find the other three.'],
          ['Multiples of 90°', 'Other multiples of 90°', 'A minute hand turns from 12 to 9. Through how many degrees, clockwise?'],
          ['Rectangles', 'Use the properties of rectangles to deduce related facts and find missing lengths and angles', 'A diagonal meets one side of a rectangle at 28°. What angle does it make with the next side?'],
          ['Regular shapes', 'Distinguish between regular and irregular polygons based on reasoning about equal sides and angles', 'A five-sided shape has all sides equal. Must it be regular?']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Answers, for the curious: the third angle at a point is 125°, because 360 - 145 - 90 = 125. Where two lines cross, the angles are 63°, 117°, 63° and 117°, because neighbours add to 180°. From 12 to 9 clockwise is three quarters of a turn, 270°. The rectangle diagonal makes 62° with the next side, since the corner is 90°. And the five-sided shape need not be regular: equal sides do not force equal angles.',
            'Every one of those can be answered with a pencil and nothing else. None of them can be answered faster with a protractor than with a fact.'
          ],
          right: [
            'The curriculum\'s own guidance points the same way. Alongside measuring, it says Year 5 pupils "use angle sum facts and other properties to make deductions about missing angles and relate these to missing number problems". That last phrase is the key: a missing angle is a subtraction from 180 or from 360, which turns geometry into arithmetic a child already knows.',
            'The Foundation\'s guide adds that some maths questions may be more challenging than usual so that children can show how they use what they know. Angles are a natural home for that: two facts combined, or a fact hidden inside a shape, rather than any new content.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics</a>, Year 5 geometry, properties of shapes, statutory requirements and non-statutory guidance; West Midlands Grammar Schools familiarisation guide, 2023 edition. The example questions and answers are written by Modern Age Coders and are not taken from any test.' }
      ]
    },
    {
      id: 'number', tint: 'tint', eyebrow: 'The rest of the maths',
      h2: 'Number work that fits in a margin',
      lede: 'Geometry is one strand. The larger part of any primary maths section is number, and the same no-tools rule shapes how it should be practised.',
      body: [
        { kind: 'two',
          left: [
            'The Year 5 curriculum asks children to multiply numbers of up to four digits by a one- or two-digit number with a formal written method, including long multiplication, and to multiply and divide mentally drawing on known facts. On a pencil-only paper both matter. The written method is there for the big product; the mental facts are there for everything else, including checking which of five answers is even possible.',
            'Checking is where a child without a calculator gains most. A product of 38 and 46 must end in 8, because 8 × 6 = 48. It must be close to 40 × 45 = 1,800. Two quick thoughts like that rule out most wrong options before any long multiplication starts.'
          ],
          right: [
            'We teach children to write their working small and in order, in the space the booklet gives, so they can find it again if they return to a question inside the same section. Returning to a previous section is not allowed, so there is no point leaving a trail for later: finish, choose, move on.',
            'Fractions and measures get the same treatment. Converting 2.4 kilograms to grams, or finding three fifths of 45, should be fact and a single step, not a written sum. Those seconds add up across a timed section in which the recording, not the child, decides when it ends.'
          ] },
        { kind: 'p', html: 'None of this requires a Birmingham paper, and we do not use one. The practice is ours, built from the Year 5 curriculum and the published format: multiple choice, individually timed sections, a pencil and an eraser. The familiarisation guide from West Midlands Grammar Schools is the right place to see the real layout, and we tell every family to work through it at home.' }
      ]
    },
    {
      id: 'city', tint: 'plain', eyebrow: 'Across the city',
      h2: 'Eight schools, one test, and a lesson that comes to you',
      lede: 'The council names the eight Birmingham grammar schools that use the test. We list them only so families know which test this page describes.',
      body: [
        { kind: 'table', caption: 'Birmingham\'s grammar schools, as Birmingham City Council lists them', head: ['School', 'Part of the city'], rows: [
          ['Bishop Vesey\'s Grammar School for Boys', 'Sutton Coldfield'],
          ['King Edward VI Aston School', 'Aston'],
          ['King Edward VI Camp Hill School for Boys', 'Kings Heath'],
          ['King Edward VI Camp Hill School for Girls', 'Kings Heath'],
          ['King Edward VI Five Ways School', 'Bartley Green'],
          ['King Edward VI Handsworth Grammar School for Boys', 'Handsworth'],
          ['King Edward VI Handsworth School for Girls', 'Handsworth'],
          ['Sutton Coldfield Grammar School for Girls', 'Sutton Coldfield']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The council also lists grammar schools outside Birmingham that belong to the West Midlands Grammar Schools group and use the same test, from Stratford-upon-Avon to Telford. A child in Solihull preparing for a Birmingham school sits the same paper as a child in Erdington.',
            'Lessons are live on video, so the distance between Kings Heath and Sutton Coldfield, or the evening traffic on the A38, does not come into it.'
          ],
          right: [
            'Our groups are formed by level. So a Birmingham pupil may share a lesson with a child in Leeds or Cardiff who is at exactly the same stage, which is how we keep groups this small. Our <a class="ag-inline-link" href="/coding-classes-in-united-kingdom">UK page</a> lists everywhere we write about.',
            'We have no connection with any of these schools, the Foundation, West Midlands Grammar Schools or the council. The areas in the right-hand column are ours, given as a rough guide to where each school is.'
          ] },
        { kind: 'source', html: 'Source: Birmingham City Council, grammar schools in Birmingham, September 2027. The "part of the city" column is Modern Age Coders\' own description.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The year ahead',
    h2: 'Four steps to a test sat with only a pencil',
    lede: 'For a child now in Year 5, the next test falls early in Year 6. The steps below work backwards from that.',
    table: { caption: 'From known facts to reasoning under a section clock', head: ['When', 'Step', 'The sign it is secure'], rows: [
      ['Year 4', '1. Tables and turns', 'Knows the tables to 12 × 12 and that a straight line is 180° and a full turn 360°'],
      ['Autumn of Year 5', '2. Methods in small spaces', 'Does long multiplication neatly in a box the size of a stamp, and gets it right'],
      ['Spring of Year 5', '3. Deduction', 'Finds a missing angle or length from two facts without reaching for a ruler'],
      ['Summer of Year 5', '4. Sections', 'Works one timed section, stops when told, and starts the next without looking back']
    ] },
    left: { h3: 'Starting in the summer', ps: [
      'A child who begins late still gains a lot, as long as the order is kept. Facts come before speed; a timed section built on shaky facts only makes mistakes faster.',
      'If the foundations need more time than is left, we will say that at the free lesson.'
    ] },
    right: { h3: 'After the results', ps: [
      'The maths outlasts the test. Many pupils continue into <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where angles become turtle turns in a program.',
      'Children who enjoyed the puzzles often try the Primary Maths Challenge and UKMT challenges on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Every course',
    h2: 'Maths and coding for Birmingham families',
    lede: 'Sorted by stage, with each card opening the full syllabus.',
    bands: [
      { num: 'I', h3: 'Before the test', sub: 'Years 3 to 5', courses: [
        { code: 'BHM / A1', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'Year 5 content for a pencil-only, multiple-choice paper.' },
        { code: 'BHM / A2', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Calculation without a calculator, fast and reliable.' },
        { code: 'BHM / A3', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'The groundwork of place value, tables and shape.' },
        { code: 'BHM / A4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Beads first, then the picture of them in the head.' }
      ] },
      { num: 'II', h3: 'Secondary school', sub: 'Year 6 onwards', courses: [
        { code: 'BHM / B1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Angles in triangles, algebra and the start of proof.' },
        { code: 'BHM / B2', slug: 'gcse-mathematics-mastery', title: 'GCSE maths, foundation and higher', blurb: 'For AQA, Edexcel and OCR, taught to the specification.' },
        { code: 'BHM / B3', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Geometry and number problems with no set method.' }
      ] },
      { num: 'III', h3: 'Maths with code', sub: 'Shapes you can program', courses: [
        { code: 'BHM / C1', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Turning angles and sequences into Python.' },
        { code: 'BHM / C2', slug: 'scratch-programming-complete-course', title: 'Scratch coding for kids', blurb: 'Draw polygons by turning a sprite through exact angles.' },
        { code: 'BHM / C3', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The next step once block coding feels easy.' }
      ] },
      { num: 'IV', h3: 'Later', sub: 'Past the test year', courses: [
        { code: 'BHM / D1', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths and speed calculation', blurb: 'Faster mental methods, built on solid basics.' },
        { code: 'BHM / D2', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Teenage work that rests on the same number sense.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'Evenings and weekends, in UK time',
    lede: 'Our teachers work from India. Because India does not change its clocks, the gap to Birmingham is 5 hours 30 minutes from late October to late March and 4 hours 30 minutes in British Summer Time; we book primary children into early evening and weekend morning slots on the UK clock.',
    slots: [
      { time: 'Weekday, after school', l: 'An hour that still leaves the evening free.' },
      { time: 'Weekend morning', l: 'For children who are tired after school.' },
      { time: 'School holidays', l: 'Short extra sessions when there is no homework.' }
    ],
    cells: [
      { h3: 'One teacher throughout', p: 'The person who saw last week\'s mistake is there to check it is gone.' },
      { h3: 'Short honest notes', p: 'Parents hear what went well and what needs work, plainly.' },
      { h3: 'Five to ten per group', p: 'Children at the same level, so explanations land for everyone.' },
      { h3: 'Our own questions', p: 'Every practice item is written by us. Nothing is copied from the test or the guide.' },
      { h3: 'Private lessons too', p: 'One to one for a specific gap, or a child who prefers it.' },
      { h3: 'Maths, and only maths', p: 'No verbal or non-verbal reasoning teaching, and no admissions advice.' }
    ]
  },

  projectsH2: 'What our students go on to build',
  projectsLede: 'Four projects by students at our school, each of whom once learned their angle facts. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents\' words from our Google profile, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly price in US dollars, the same for families everywhere outside India. No registration fee, no contract.',
    free: ['A lesson that teaches something', 'Our honest view afterwards', 'No card required'],
    group: ['Five to ten children at one level', 'A regular teacher', 'Marked work, talked through', 'A certificate at the end'],
    one: ['A teacher for your child alone', 'Aimed at the exact gap', 'Handy in the last months before September']
  },

  faq: {
    eyebrow: 'Birmingham test questions',
    h2: 'What Birmingham parents ask us',
    items: [
      { q: 'Is there a maths paper in the Birmingham grammar schools test?', a: 'Not a separate one. According to the King Edward VI Foundation, each of the two papers is split into individually timed sections, and mathematics is one of the four types, alongside English comprehension, verbal reasoning and non-verbal or spatial reasoning. All questions are multiple choice.' },
      { q: 'How much does maths count?', a: 'The Foundation publishes the weightings as 50% for English and verbal reasoning, 25% for non-verbal reasoning and 25% for mathematics, with each section standardised for age.' },
      { q: 'Can my child take a ruler or protractor into the test?', a: 'No. The West Midlands Grammar Schools familiarisation guide says a ruler, a calculator, a protractor and scrap paper are not allowed. Working out can be done in the test booklet. Children bring an HB pencil, an eraser and a sharpener.' },
      { q: 'What maths does the test cover?', a: 'The guide says the mathematics section draws on what children have been taught in class, with some questions more challenging than usual. For a test in the September of Year 6, that means the primary curriculum up to the end of Year 5.' },
      { q: 'Can children go back to earlier questions?', a: 'Within a section, yes, if time allows. Between sections, no: the Foundation says candidates can only work on the current section and cannot go back to a previous one or move on until told.' },
      { q: 'When is the test for September 2028 entry?', a: 'The dates for that cycle had not been published when we checked on 26 September 2026. For September 2027 entry, registration ran from 5 May to 4pm on 26 June 2026 and the test was on Saturday 12 September 2026. The Foundation and West Midlands Grammar Schools publish the new dates.' },
      { q: 'Can my child sit the test for practice?', a: 'No. The Foundation says the grammar schools pay for the test and it is not to be used as a practice or mock test by children with no intention of applying. The familiarisation guide is the proper way to see the format.' },
      { q: 'Will you also coach the reasoning sections?', a: 'No. We teach the maths only, and we do not advise on school applications or places.' },
      { q: 'Do you use real Birmingham papers?', a: 'No. Our practice questions are our own. We do not reproduce test or familiarisation material.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free. After that a group place is USD 100 a month and one to one is USD 150 a month, with no joining fee and no minimum term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for families in and around Birmingham',
    lede: 'Our national 11 plus page, another selective county, and where a keen young mathematician can go next.',
    items: [
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The national page on 11 plus maths.' },
      { href: '/11-plus-maths-tuition-buckinghamshire', label: '11 plus maths in Buckinghamshire', p: 'A county test with a similar weighting, run very differently.' },
      { href: '/coding-classes-in-birmingham', label: 'Coding classes in Birmingham', p: 'Our page on coding for Birmingham children and teenagers.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Maths competitions for primary and secondary pupils.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every UK nation, city and area we cover.' },
      { href: '/online-coding-classes-for-kids-uk', label: 'Coding for UK children', p: 'Where a primary-age child starts with code.' }
    ]
  },

  start: {
    h2: 'Try a lesson on us',
    lede: 'Send the year group and a line on how maths is going. We teach a real lesson, then tell you honestly what we noticed.',
    readFirst: 'Not ready to talk yet? Browse the <a class="ag-inline-link" href="/courses">full course list</a>, read about <a class="ag-inline-link" href="/how-we-teach">our teaching method</a>, or follow the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> from first steps to secondary level.',
    note: 'WhatsApp is quickest. Our number is an Indian one, and we have no office in the UK: all teaching is online.',
    formNote: 'No payment details asked for. We reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/maths-through-coding', label: 'Maths through coding' },
        { href: '/courses/gcse-mathematics-mastery', label: 'GCSE maths' }
      ] },
      { h4: 'In the UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/coding-classes-in-birmingham', label: 'Coding in Birmingham' },
        { href: '/11-plus-maths-tuition-buckinghamshire', label: '11 plus maths in Buckinghamshire' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'We teach the maths; the schools run the test'
  },

  personalityCss: `
.ag-root.ag-bhm .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-bhm .ag-capsule { border-left-width: 4px; border-radius: 0 6px 6px 0; }
.ag-root.ag-bhm .ag-section-head h2 { max-width: 25ch; }
.ag-root.ag-bhm .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.02em; }
.ag-root.ag-bhm .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-bhm .ag-spec dt { letter-spacing: 0.14em; }
.ag-root.ag-bhm .ag-three h3 { letter-spacing: -0.004em; }
.ag-root.ag-bhm .ag-slots { gap: 0.95rem; }
`,

  mustMention: ['King Edward VI Foundation', 'protractor', 'individually timed', 'Bishop Vesey', 'Angles at a point and 1 whole turn', 'Camp Hill', 'scrap paper', 'Sutton Coldfield Grammar School for Girls']
};
