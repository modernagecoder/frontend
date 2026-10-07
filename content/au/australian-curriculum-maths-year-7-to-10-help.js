'use strict';
// Australian Curriculum Mathematics Years 7 to 10 help (ag- curriculum door, Australia cluster Phase 3, row 83).
// Facts read raw on 7 October 2026 from ACARA's Version 9.0 Mathematics downloads (Word files):
// curriculum content 7-10 (strands, year achievement standards, content descriptions and elaborations
// quoted with codes) and "about the learning area" (proficiency, problem solving, optional content for
// pathways after Year 10). Spine: absolute, relative and percentage error (AC9M9M04) and the effect of
// approximation in repeated calculations (AC9M10N01); family checked free site-wide on 7 October 2026.
// All worked numbers are ours and were computed in Python.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'MATHS YEARS 7 TO 10', label: 'Australian Curriculum maths, Years 7 to 10', blurb: 'The six strands of secondary maths in Version 9.0, what each year expects, and a lesson on error and approximation from the Years 9 and 10 content.' },
  slug: 'australian-curriculum-maths-year-7-to-10-help',
  code: 'mtsn',
  accent: '#7E1521',
  accentRationale: 'Years 7 to 10 maths: a deep red-brick chosen by hand, muted, at least 11 RGB from every accent on the site and above 4.8:1 on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Australian Curriculum maths Years 7 to 10 help',
  title: 'Australian Curriculum Maths Years 7 to 10 Help | Version 9.0',
  description: 'Australian Curriculum maths help for Years 7 to 10: the six strands, what each year expects in Version 9.0, quoted from ACARA, and a lesson on percentage error.',
  ogDescription: 'Secondary maths in the Australian Curriculum, Version 9.0, year by year: number, algebra, measurement, space, statistics and probability, plus a lesson on error and approximation.',
  twitterDescription: 'Years 7 to 10 maths in the Australian Curriculum, explained and quoted, with live tutoring.',
  pageName: 'Australian Curriculum Maths Years 7 to 10 Help',
  webPageDescription: 'A guide for Australian families to the Mathematics curriculum for Years 7 to 10, Version 9.0: the six strands, the opening of each year\'s achievement standard, how proficiency and problem solving are described, the optional content that prepares for Mathematical Methods, and a worked lesson on absolute, relative and percentage error.',
  courseDescription: 'Live online maths classes for Australian students in Years 7 to 10, covering number, algebra, measurement, geometry, statistics and probability with reasoning written out.',
  crumbs: [{ name: 'Online maths tutoring in Australia', href: '/online-maths-tutoring-australia' }],
  crumbLabel: 'Maths Years 7 to 10',
  navLinks: [
    { href: '#strands', label: 'Strands' },
    { href: '#years', label: 'Year by year' },
    { href: '#error', label: 'Worked lesson' },
    { href: '#senior', label: 'After Year 10' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Mathematics Years 7 to 10 &middot; Live online',
  h1: 'Australian Curriculum maths, Years 7 to 10',
  lede: 'Secondary maths in Australia is set out in the Australian Curriculum, Version 9.0, one year at a time from Year 7 to Year 10. It covers six strands, asks for reasoning and problem solving rather than only procedures, and by Year 10 expects students to model growth and decay, prove geometric results and analyse statistical claims in the media. Your state or territory decides how it is taught, and some have their own syllabuses, but the national content is the common map underneath. This page summarises that map, quotes what ACARA says each year should achieve, and works one lesson from the Years 9 and 10 content on measurement error and rounding, a topic students find easy to underestimate.',
  secondaryCta: { href: '#error', label: 'See the worked lesson' },
  wa: 'Hello Modern Age Coders, I would like a free maths class for Years 7 to 10.',
  heroNote: 'Quoted from ACARA Version 9.0 Mathematics &middot; Worked numbers are ours &middot; 7 October 2026',
  spec: [
    ['Curriculum', 'Australian Curriculum Mathematics, Version 9.0'],
    ['Years', '7, 8, 9 and 10, each with its own standard'],
    ['Strands', 'Number, Algebra, Measurement, Space, Statistics, Probability'],
    ['Emphasis', 'Proficiency, reasoning and problem solving'],
    ['Year 10 extra', 'Optional content for post Year 10 pathways'],
    ['Implemented by', 'Each state and territory'],
    ['Next step', 'Senior maths subjects, set by each state'],
    ['We teach', 'Live classes, groups or one-to-one']
  ],
  capsuleQ: 'In short',
  capsule: 'Years 7 to 10 maths in the Australian Curriculum, Version 9.0, is written year by year in six strands: Number, Algebra, Measurement, Space, Statistics and Probability. Each year has an achievement standard. The content builds from prime factors and integers in Year 7 to irrational numbers, quadratics and trigonometry in Year 9, and growth and decay modelling in Year 10. States and territories decide how it is taught.',

  picks: {
    eyebrow: 'Matched to these years',
    h2: 'Three courses for Years 7 to 10 maths',
    lede: 'One for the middle years, one for algebra, one for the climb towards senior maths.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MTSN / 01', title: 'Years 7 and 8 maths', note: 'Integers, rational numbers, ratios, angles and early algebra, with reasoning written out.' },
      { course: 'algebra-foundations-masterclass', code: 'MTSN / 02', title: 'Algebra that sticks', note: 'Expressions, equations and linear relations understood rather than memorised: the core of Years 8 and 9.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'MTSN / 03', title: 'Years 9 and 10 into senior', note: 'Quadratics, trigonometry, exponentials and statistics, with an eye on senior maths choices.' }
    ]
  },

  sections: [
    {
      id: 'strands', tint: 'tint', eyebrow: 'How the content is organised',
      h2: 'Six strands, and the proficiency that runs through them',
      lede: 'Every content description belongs to one strand and one year. The strands are listed in ACARA\'s Years 7 to 10 file.',
      body: [
        { kind: 'table', caption: 'The six Mathematics strands, Version 9.0, with one Year 9 or 10 content description from each, quoted', head: ['Strand', 'Example content description', 'Code'], rows: [
          ['Number', '"recognise the effect of using approximations of real numbers in repeated calculations and compare the results when using exact representations"', 'AC9M10N01'],
          ['Algebra', '"identify and graph quadratic functions, solve quadratic equations graphically and numerically, and solve monic quadratic equations with integer roots algebraically, using graphing software and digital tools as appropriate"', 'AC9M9A04'],
          ['Measurement', '"calculate and interpret absolute, relative and percentage errors in measurements, recognising that all measurements are estimates"', 'AC9M9M04'],
          ['Space', '"apply deductive reasoning to proofs involving shapes in the plane and use theorems to solve spatial problems"', 'AC9M10SP01'],
          ['Statistics', '"analyse claims, inferences and conclusions of statistical reports in the media, including ethical considerations and identification of potential sources of bias"', 'AC9M10ST01'],
          ['Probability', '"use the language of \'if ... then\', \'given\', \'of\', \'knowing that\' to describe and interpret situations involving conditional probability"', 'AC9M10P01']
        ] },
        { kind: 'two', mt: true,
          left: [
            'ACARA\'s description of the learning area says the curriculum "focuses on the development of increasingly sophisticated knowledge and understanding of mathematical concepts, fluency in representations and procedures, and sound mathematical reasoning and problem-solving skills."',
            'Those four ideas, understanding, fluency, reasoning and problem solving, are not separate topics. They are how every content description is meant to be learned, which is why a correct answer without working often earns less than parents expect.'
          ],
          right: [
            'On problem solving, ACARA says students engage in it "when they are presented with a problem situation for which they do not immediately know the answer". That definition matters at home: a page of identical exercises builds fluency, but it is not problem solving.',
            'The codes are a practical tool. AC9M9M04, for example, reads as Australian Curriculum Version 9, Mathematics, Year 9, Measurement, content description 4. Quoting one to a teacher makes it easy to agree on exactly what needs work.'
          ] },
        { kind: 'source', html: 'Sources: ACARA, <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/mathematics/mathematics-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Mathematics curriculum content 7 to 10, Version 9.0</a> and <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/mathematics/mathematics-about-the-learning-area-v9.docx" rel="noopener" target="_blank">Mathematics: about the learning area</a> (Word downloads), read on 7 October 2026. ACARA is not connected with us.' }
      ]
    },
    {
      id: 'years', tint: 'deep', eyebrow: 'Year by year',
      h2: 'How each year\'s achievement standard begins',
      lede: 'Each standard is long. Its first sentence shows where the year starts, and the progression is clearer side by side.',
      body: [
        { kind: 'table', caption: 'Opening sentence of each achievement standard, Mathematics Version 9.0', head: ['Year', 'ACARA\'s wording'], rows: [
          ['Year 7', '"By the end of Year 7, students represent natural numbers in expanded form and as products of prime factors, using exponent notation."'],
          ['Year 8', '"By the end of Year 8, students recognise irrational numbers and terminating or recurring decimals."'],
          ['Year 9', '"By the end of Year 9, students recognise and use rational and irrational numbers to solve problems."'],
          ['Year 10', '"By the end of Year 10, students recognise the effect of approximations of real numbers in repeated calculations."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where students usually stumble',
          left: [
            'Year 8 brings Pythagoras\' theorem (AC9M8M06) and linear relations on the Cartesian plane. Students who are shaky on negative numbers and fractions from Year 7 tend to struggle here, because both topics lean on them constantly.',
            'Year 9 is often the hardest jump. Expanding binomials, factorising monic quadratics, gradients and distances on the plane, and trigonometry in right-angled triangles all arrive within one year.'
          ],
          rightH3: 'What Year 10 asks for',
          right: [
            'Year 10 adds exponential relations, growth and decay modelling, deductive proofs in geometry, scatterplots and two-way tables, and conditional probability.',
            'It also asks for judgement. Content descriptions such as AC9M10M04, "identify the impact of measurement errors on the accuracy of results in practical contexts", have no single procedure; students have to think about where error comes from and how much it matters.'
          ] },
        { kind: 'source', html: 'Quotations: ACARA, Mathematics curriculum content 7 to 10, Version 9.0, achievement standards, AC9M8M06 and AC9M10M04, read on 7 October 2026.' }
      ]
    },
    {
      id: 'error', tint: 'tint', eyebrow: 'A lesson from Years 9 and 10',
      h2: 'Error and approximation, worked through',
      lede: 'AC9M9M04 asks students to calculate absolute, relative and percentage errors, and AC9M10N01 asks them to see what approximation does over repeated calculations. One elaboration suggests comparing a guessed attendance with the real one. We start there.',
      body: [
        { kind: 'table', caption: 'Three errors from one guess: an event expected 1,200 people and 1,050 came (our numbers)', head: ['Measure', 'How it is worked out', 'Result'], rows: [
          ['Absolute error', 'Difference between estimate and actual: 1,200 minus 1,050', '150 people'],
          ['Relative error', 'Absolute error divided by the actual value: 150 divided by 1,050', 'About 0.143'],
          ['Percentage error', 'Relative error as a percentage', 'About 14.3 per cent']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The elaboration under AC9M9M04 describes exactly this: "comparing an estimation of the number of people expected to come to an event by subtracting the actual number that turned up to give an error, then converting this into a percentage error". It also asks students to consider when to use the absolute value and when not, depending on whether over-estimating and under-estimating should count the same.',
            'Measurement brings in the same idea from the other side. A length read as 12.4 cm on a ruler marked in millimetres could be anywhere from 12.35 to 12.45 cm, so the absolute error is at most 0.05 cm and the percentage error is at most about 0.40 per cent. "All measurements are estimates" is a phrase from the content description itself.'
          ],
          right: [
            'AC9M10N01 extends this to repeated calculations. Take a circular path of radius 30 metres. One lap is 2 times pi times 30, about 188.50 metres, so 10 laps is 1,884.96 metres to two decimal places.',
            'Use 3.14 for pi and 10 laps comes to 1,884.00 metres, out by 0.96 metres, about 0.05 per cent. Round each lap to the nearest metre first, giving 188, and 10 laps becomes 1,880 metres, out by 4.96 metres, about 0.26 per cent. Rounding early made the error five times larger, which is the effect the Year 10 standard asks students to recognise.'
          ] },
        { kind: 'p', text: 'Students who understand this stop rounding in the middle of a calculation, keep exact values or full calculator precision until the end, and round once, to an accuracy that suits the context. That habit, which AC9M7N05 begins in Year 7 with rounding "to a given accuracy appropriate to the context", protects marks in every senior maths subject.' },
        { kind: 'source', html: 'Quotations: ACARA, Mathematics curriculum content 7 to 10, Version 9.0, AC9M7N05, AC9M9M04 and AC9M10N01 with elaborations, read on 7 October 2026. The event, ruler and track figures are ours, computed in Python.' }
      ]
    },
    {
      id: 'senior', tint: '', eyebrow: 'Looking past Year 10',
      h2: 'The optional content for senior maths pathways',
      lede: 'Year 10 is where students start choosing between senior maths subjects, and ACARA provides extra material for those heading towards the most demanding ones.',
      body: [
        { kind: 'two',
          left: [
            'ACARA\'s description of the learning area includes optional content for post Year 10 pathways. It says that "preparation for subsequent study of Mathematical Methods Units 1 and 2 can be supported by further development of aspects of mathematics content in Year 10".',
            'In other words, students who intend to take the more advanced senior maths subject benefit from going further in Year 10 than the core content requires. Schools decide whether and how to offer this.'
          ],
          right: [
            'Senior subjects are not national. Each state\'s authority sets its own maths courses and names them differently. We cover several of those on separate pages, linked below, rather than guessing at one set of rules for all of Australia.',
            'What carries across every state is the Years 7 to 10 foundation. A student secure in algebra, functions and trigonometry by the end of Year 10 has options; a student with gaps there finds the senior choices narrowed for them.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Years 7 and 8', p: 'Fill gaps in fractions, negatives and ratios early. They return in every later topic.' },
          { h3: 'Year 9', p: 'Expect the step up. Algebra and trigonometry arrive together and reward steady weekly practice.' },
          { h3: 'Year 10', p: 'Talk to the school early about senior maths choices and whether optional content is offered.' }
        ] },
        { kind: 'source', html: 'Quotation: ACARA, Mathematics: about the learning area, Version 9.0, section on optional content for post Year 10 mathematics pathways, read on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Secure foundations',
    h2: 'Four checkpoints from Year 7 to Year 10',
    lede: 'A checkpoint is passed when the skill holds up in an unfamiliar problem, not only in a textbook exercise.',
    table: { caption: 'Readiness checkpoints for secondary maths', head: ['Around', 'Checkpoint', 'The sign it is secure'], rows: [
      ['Year 7', 'Rational numbers', 'Moves between fractions, decimals and percentages without hesitation'],
      ['Year 8', 'Linear relations', 'Reads a gradient and intercept from a real context and explains them'],
      ['Year 9', 'Quadratics and trigonometry', 'Factorises a monic quadratic and solves a right-triangle problem'],
      ['Year 10', 'Modelling and error', 'Chooses a model, keeps precision to the end and judges the result']
    ] },
    left: { h3: 'If maths has become stressful', ps: [
      'Stress usually traces back to one gap that every new topic leans on. Finding that gap is faster than reteaching a whole year.',
      'We start with a short diagnostic in the free class for exactly this reason.'
    ] },
    right: { h3: 'Next steps', ps: [
      'For NSW students, our <a class="ag-inline-link" href="/hsc-maths-advanced-tutoring">HSC Maths Advanced page</a> explains the senior course; Victorian students can start with <a class="ag-inline-link" href="/vce-maths-methods-tutoring">VCE Maths Methods</a>.',
      'Students who want a challenge can look at the <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine maths courses for Years 7 to 10',
    lede: 'Grouped by purpose. Each card opens the full syllabus.',
    bands: [
      { num: 'I', h3: 'Core maths', sub: 'The year-level content', courses: [
        { code: 'MTSN / C / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'Years 7 and 8 content, taught for understanding.' },
        { code: 'MTSN / C / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'From expressions to linear and quadratic equations.' },
        { code: 'MTSN / C / 03', slug: 'complete-high-school-mathematics-mastery', title: 'Senior-ready maths', blurb: 'Years 9 and 10 into early senior content.' }
      ] },
      { num: 'II', h3: 'Data and applications', sub: 'Statistics, probability and models', courses: [
        { code: 'MTSN / D / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Distributions, sampling and conditional probability.' },
        { code: 'MTSN / D / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Exploring functions and data with Python.' },
        { code: 'MTSN / D / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data', blurb: 'For older students curious about data science.' }
      ] },
      { num: 'III', h3: 'Stretch', sub: 'For keen problem solvers', courses: [
        { code: 'MTSN / X / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problem solving beyond the syllabus.' },
        { code: 'MTSN / X / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for students rebuilding confidence.' },
        { code: 'MTSN / X / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Quick calculation, always checked.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly maths lessons for Australian secondary students',
    lede: 'Teachers are based in India, which is behind every Australian time zone. A 6 pm lesson in Brisbane begins at 1.30 pm India time all year, as Queensland does not use daylight saving.',
    slots: [
      { time: 'Weekday evenings', l: 'The usual choice for Years 7 to 10.' },
      { time: 'Weekend sessions', l: 'For students with busy weeknights.' },
      { time: 'Before exams', l: 'Extra sessions on the topics that need them.' }
    ],
    cells: [
      { h3: 'Working shown', p: 'Every solution written out, because that is how marks are awarded.' },
      { h3: 'Gaps found first', p: 'A short diagnostic before new content.' },
      { h3: 'Groups of five to ten', p: 'Grouped by level rather than strictly by year.' },
      { h3: 'One-to-one lessons', p: 'For a specific gap or a student ready to move fast.' },
      { h3: 'Brief parent notes', p: 'What was covered and what to practise.' },
      { h3: 'No grade promises', p: 'We teach the maths properly; results belong to the student.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Work learners chose to make, outside any assessment. See more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Families\' own words, as they appear on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Australian families pay monthly in US dollars, the same rate we charge in every country outside India. No deposit, and you can stop at the end of any month.',
    free: ['A lesson with a real teacher', 'A short diagnostic of where things stand', 'No payment details'],
    group: ['Five to ten students at one level', 'The same teacher every week', 'Homework marked and explained', 'A certificate at the end'],
    one: ['A teacher for one student', 'Focused on chosen topics', 'A weekly time that suits you']
  },

  faq: {
    eyebrow: 'Questions about Years 7 to 10 maths',
    h2: 'What Australian families ask',
    items: [
      { q: 'What are the strands of the Australian Curriculum maths for Years 7 to 10?', a: 'Number, Algebra, Measurement, Space, Statistics and Probability. Each year from Year 7 to Year 10 has content descriptions in all six and its own achievement standard.' },
      { q: 'What is percentage error?', a: 'The absolute error, which is the difference between a measured or estimated value and the actual value, divided by the actual value and written as a percentage. The Year 9 content asks students to calculate and interpret it.' },
      { q: 'What is the difference between absolute and relative error?', a: 'Absolute error is the size of the difference in the original units. Relative error divides that difference by the actual value, so errors in large and small quantities can be compared fairly.' },
      { q: 'Why does rounding too early matter?', a: 'Each rounded step adds a small error, and repeated steps can add those errors up. The Year 10 content asks students to recognise this effect and compare it with exact calculation.' },
      { q: 'Is maths taught the same way in every state?', a: 'The national curriculum is the shared content, but each state and territory decides how it is implemented and some publish their own syllabuses. Senior maths subjects are set by each state.' },
      { q: 'What is the optional content in Year 10?', a: 'ACARA provides optional content for students heading towards the most demanding senior maths, to support later study of Mathematical Methods. Schools decide whether to use it.' },
      { q: 'Which year is hardest?', a: 'Many students find Year 9 the biggest step, because quadratics, coordinate geometry and trigonometry arrive close together.' },
      { q: 'Can you help my child catch up?', a: 'Yes. We begin by finding the specific gaps, usually from earlier years, then rebuild those before moving on. We do not promise a particular grade.' },
      { q: 'Are you connected with ACARA?', a: 'No. We are an independent online school, and we quote ACARA because it publishes the curriculum.' },
      { q: 'When would lessons be in Australia?', a: 'We set a weekly time after the free class, usually after school or in the evening in your state. Every Australian time zone is ahead of India time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More maths for Australian students',
    lede: 'Tutoring, senior subjects and competitions.',
    items: [
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'Our main maths page for Australia.' },
      { href: '/naplan-year-9-numeracy-practice', label: 'NAPLAN Year 9 numeracy', p: 'The Year 9 test, explained.' },
      { href: '/year-10-maths-methods-preparation', label: 'Year 10 Maths Methods preparation', p: 'Getting ready for the advanced senior course.' },
      { href: '/hsc-maths-advanced-tutoring', label: 'HSC Maths Advanced', p: 'Senior maths in NSW.' },
      { href: '/vce-maths-methods-tutoring', label: 'VCE Maths Methods', p: 'Senior maths in Victoria.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Maths contests through the year.' }
    ]
  },

  start: {
    h2: 'Book a free maths class',
    lede: 'Tell us the year level and the topic that is causing trouble. The free lesson includes a short diagnostic and ends with a straight answer about what would help most.',
    readFirst: 'Rather read first? Every course is on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a lesson step by step.',
    note: 'WhatsApp is usually fastest. The number begins +91, India\'s code; the school operates from India and has no Australian address.',
    formNote: 'Free, no card, no obligation. One reply to arrange it.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' },
        { href: '/year-10-maths-methods-preparation', label: 'Year 10 Methods preparation' },
        { href: '/naplan-year-9-numeracy-practice', label: 'NAPLAN Year 9 numeracy' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' },
        { href: '/maths-challenges', label: 'Maths challenges' }
      ] }
    ],
    bottomRight: 'ACARA content quoted; we are independent and promise no grades'
  },

  personalityCss: `
.ag-root.ag-mtsn .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-mtsn .ag-capsule { border-left-width: 5px; }
.ag-root.ag-mtsn .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-mtsn .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-mtsn .ag-grid-3 > div { padding-top: 0.2rem; }
.ag-root.ag-mtsn .ag-spec dt { letter-spacing: 0.07em; }
`,

  dossier: {
    curriculumAuthority: 'ACARA, Australian Curriculum Version 9.0, Mathematics curriculum content 7-10 and Mathematics: about the learning area (Word downloads), read 7 October 2026. Strands: Number, Algebra, Measurement, Space, Statistics, Probability. Achievement standard openings for Years 7, 8, 9 and 10 quoted. AC9M10N01, AC9M9A04, AC9M9M04 (elaboration on event attendance and percentage error; "using absolute value in a percentage error formula"), AC9M10SP01, AC9M10ST01, AC9M10P01, AC9M8M06, AC9M10M04, AC9M7N05 quoted. About the learning area: proficiency sentence; problem solving "when they are presented with a problem situation for which they do not immediately know the answer"; optional content "preparation for subsequent study of Mathematical Methods Units 1 and 2 can be supported by further development of aspects of mathematics content in Year 10".',
    localProject: 'Worked error lesson (our numbers, computed in Python): event estimate 1,200 vs actual 1,050: absolute error 150, relative about 0.143, percentage about 14.3 per cent; ruler reading 12.4 cm: absolute error at most 0.05 cm, percentage at most about 0.40 per cent; circular path radius 30 m: 10 laps exact 1,884.96 metres, with pi as 3.14 1,884.00 (0.96 m, about 0.05 per cent), rounding each lap to 188 m gives 1,880 (4.96 m, about 0.26 per cent).',
    requiredMentions: ['AC9M9M04', 'AC9M10M04', 'AC9M7N05', 'AC9M10N01', 'AC9M8M06', 'AC9M9A04', '14.3 per cent', '1,884.96 metres', 'post Year 10 pathways'],
    sources: [
      { claim: 'ACARA Version 9.0 Mathematics curriculum content 7-10: strands, achievement standards, content descriptions and elaborations quoted.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/mathematics/mathematics-curriculum-content-7-10-v9.docx' },
      { claim: 'ACARA Version 9.0 Mathematics: about the learning area: proficiency, problem solving and optional content for post Year 10 pathways.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/mathematics/mathematics-about-the-learning-area-v9.docx' },
      { claim: 'ACARA Version 9.0 Mathematics curriculum content F-6, for continuity with Year 6.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/mathematics/mathematics-curriculum-content-f-6-v9.docx' }
    ],
    rejectedClaims: [
      'Names and structures of each state\'s senior maths subjects: not summarised here; covered on state-specific pages.',
      'Which states have their own maths syllabuses: not named, as each authority\'s pages were not all read.',
      'Any national results or proportions of students meeting standards: not quoted.',
      'Any promise of grades or results: refused.'
    ]
  }
};
