'use strict';
// Salisbury, Adelaide (cg- district page, Australia cluster Phase 8, row 323). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), council page (ABS LGA47140, City of Salisbury) under Adelaide and South Australia.
// Mawson Lakes (committed suburb page) lies inside this council; its figures and required mentions are kept off.
// Spine: picking a timetable day column with date.isoweekday() instead of date.weekday(). For Wednesday 21 October 2026
// the slip reads Thursday's column (36,116 visits instead of 36,097, almost invisible); for Saturday it reads Sunday
// (14,069 instead of 17,088); for Sunday it raises IndexError. Our run, scratchpad au/b17/slsb_weekday.py, GTFS v1708.
// Lesson family: weekday() vs isoweekday(); claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'SALISBURY',
    label: 'Salisbury, Adelaide',
    blurb: 'Coding and AI classes for the City of Salisbury, where one off-by-one day number hides on weekdays and shows up on weekends.'
  },
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  slug: 'best-coding-and-ai-classes-in-salisbury-adelaide',
  code: 'slsb',
  accent: '#530E19',
  accentRationale: 'Salisbury: a dark garnet (hue 350.4), 11.80:1 on #EDE7DA; 32.4 RGB from the nearest South Australian accent, 10.7 from any other Australian accent and 8.1 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Salisbury',
    eyebrow: 'City of Salisbury, Adelaide, South Australia',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Salisbury' },
      { type: 'City', name: 'Adelaide' },
      { type: 'AdministrativeArea', name: 'South Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-south-australia', name: 'South Australia' },
    { slug: 'ai-and-programming-classes-in-adelaide', name: 'Adelaide' }
  ],
  nav: [
    { label: 'Adelaide', href: '/ai-and-programming-classes-in-adelaide' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Salisbury, Adelaide',
  title: 'Best Coding and AI Classes in Salisbury, Adelaide',
  description: 'Live online coding and AI classes across the City of Salisbury for learners aged 6 to 67, from Scratch to Python and AI, taught in small groups or one to one.',
  ogDescription: 'A Salisbury coding project: one day-number mistake that changes 19 visits on a Wednesday, 3,019 on a Saturday and crashes on a Sunday.',
  twitterDescription: 'Coding and AI for the City of Salisbury, live online.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '14 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Salisbury',
    description: 'Level-matched online coding, Python and AI lessons for children, teenagers and adults across the City of Salisbury, taught live in English.'
  },
  h1: 'Coding and AI classes in Salisbury',
  capsuleQ: 'Where can Salisbury families find the best coding and AI classes?',
  capsule: 'In live online lessons, small-group or private, that begin with Scratch for six-year-olds and lead to Python and AI for teenagers and adults, with projects on real Adelaide data. The City of Salisbury counted 145,806 residents at the 2021 Census.',
  lead: 'Python numbers the days of the week two ways. One starts Monday at 0, the other at 1. Pick the wrong one when reading the City of Salisbury\'s bus timetable and a Wednesday count barely moves, a Saturday count drops by three thousand, and a Sunday count crashes.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Salisbury.',
  picks: {
    eyebrow: 'Course picks for Salisbury',
    h2: 'Courses that catch quiet bugs',
    intro: 'The weekday project needs Python dates, lists and the habit of testing on more than one case. These courses teach it; a free trial lesson sets the level.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Dates, indexing and testing on real data, built up step by step.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'Python for work, including the date handling most bugs hide in.'
      },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Timetables and other public data analysed carefully.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First Python and AI projects with plenty of checking.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Salisbury in the Census',
      h2: 'A large northern council of family homes',
      intro: 'Council-wide 2021 Census QuickStats for the City of Salisbury (ABS code LGA47140), compared with South Australia.',
      body: [
        {
          kind: 'table',
          caption: 'City of Salisbury, 2021',
          head: ['Measure', 'City of Salisbury'],
          rows: [
            ['Residents', '145,806'],
            ['Median age', '36'],
            ['Families', '38,565'],
            ['Private dwellings', '57,079'],
            ['People per household', '2.6']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Salisbury against South Australia',
          head: ['Indicator', 'Salisbury', 'South Australia'],
          rows: [
            ['Separate houses', '83.5% (43,781)', '78.0%'],
            ['Workers who drove to work', '70.7% (45,082)', '63.9%'],
            ['Workers who took a bus to work', '3.6% (2,290)', '3.1%'],
            ['Adults with a bachelor degree or higher', '15.0% (17,646)', '22.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: 'The council counted 9,166 children under five, 9,713 aged 5 to 9 and 9,486 aged 10 to 14.' },
            { h3: 'Teenagers', p: 'A further 8,820 residents were aged 15 to 19.' },
            { h3: 'Area', p: 'The council area covers about 160 square kilometres of Adelaide\'s north.' }
          ]
        },
        { kind: 'p', text: 'Council figures appear as the bureau published them. Small privacy adjustments mean we never add Census cells together.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Monday is 0, or Monday is 1?',
      intro: 'The timetable\'s calendar file has seven columns, monday to sunday, marking which days each service runs. A script picks the column from a list of day names using the date. date.weekday() gives Monday 0 and Sunday 6; date.isoweekday() gives Monday 1 and Sunday 7. We ran the same count with each.',
      body: [
        {
          kind: 'table',
          caption: 'Scheduled visits at stop records inside the City of Salisbury (our run)',
          head: ['Date', 'weekday() picks', 'isoweekday() picks'],
          rows: [
            ['Wednesday 21 October 2026', 'wednesday: 36,097', 'thursday: 36,116'],
            ['Saturday 24 October 2026', 'saturday: 17,088', 'sunday: 14,069'],
            ['Sunday 25 October 2026', 'sunday: 14,069', 'IndexError: list index out of range']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why weekdays hide it',
              p: 'Wednesday and Thursday timetables are almost the same, so the wrong column changes the count by only 19 visits. A quick check on a weekday looks fine.'
            },
            { h3: 'Why Saturday shows it', p: 'Reading Sunday\'s column on a Saturday loses 3,019 visits. The number is still plausible, which makes it dangerous.' },
            {
              h3: 'Why Sunday crashes',
              p: 'isoweekday() returns 7 for Sunday, one past the end of a seven-item list. The crash is the most helpful thing the bug does.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Test the edges of the week',
          p: 'The fix is one word, weekday() instead of isoweekday(), or a lookup keyed by name such as d.strftime(\'%A\').lower(). The lesson is to test on Saturday and Sunday as well as a weekday, because the edge of a range is where off-by-one errors live.'
        },
        {
          kind: 'p',
          text: 'Counts come from Adelaide Metro\'s published timetable, release 1708. Which stop records sit inside the council is decided by our boundary test, and each number above was printed by our script.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Python dates',
      h2: 'Two day numbers, one week',
      intro: 'Both methods are correct; they simply follow different conventions.',
      body: [
        {
          kind: 'table',
          caption: 'Day numbers in Python\'s datetime',
          head: ['Method', 'Monday', 'Sunday', 'Use with'],
          rows: [
            ['date.weekday()', '0', '6', 'Zero-based lists of day names'],
            ['date.isoweekday()', '1', '7', 'ISO 8601 conventions and reports'],
            ['date.strftime(\'%A\')', 'Monday', 'Sunday', 'Lookups by name, no counting'],
            ['calendar.day_name[d.weekday()]', 'Monday', 'Sunday', 'Locale-aware names']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Number the days of the week starting from zero, then from one, and see which list a friend\'s answer fits.' },
            { h3: 'Secondary learners', p: 'Reproduce the Salisbury table, then write a test that runs the count for every day of one week.' },
            { h3: 'Adults', p: 'Check any spreadsheet or script that turns dates into day numbers; Excel, SQL and Python do not all agree.' }
          ]
        },
        {
          kind: 'p',
          text: 'Many bugs of this kind survive because the developer tested only the case in front of them. A loop over all seven days costs seconds and catches all three outcomes shown above.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Salisbury',
      h2: 'Nine railway stations and an interchange',
      intro: 'What the council-wide timetable shows for one ordinary Wednesday, 21 October 2026.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Stop records', p: 'Our check places 792 stop records inside the council, served by 77 routes that Wednesday.' },
            { h3: 'Rail', p: 'Nine railway station records inside the council had 826 scheduled train visits that day.' },
            { h3: 'Salisbury Interchange', p: 'Zone F of Salisbury Interchange had 185 scheduled visits, and Stop 49 on Church Street 204.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Council figures',
          p: 'This page covers the whole City of Salisbury. Suburbs inside it, including Mawson Lakes, have their own pages and figures, which are not repeated here. Neighbouring councils are Playford, Port Adelaide Enfield and Tea Tree Gully.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting days to testing code',
    intro: 'These ages are a guide; the trial lesson finds the start.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and logic',
        p: 'Games built around sequences and counting.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python basics',
        p: 'Lists, indexes and first dates in code.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with data',
        p: 'Timetables, dates and careful testing.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Working Python',
        p: 'Dependable scripts for study and jobs.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI writes date code. Who tests Sunday?',
    intro: 'The learner who knows where date code breaks. Assistants mix the two conventions more often than you might expect.',
    p1: 'Ask for "the timetable column for a date" and an assistant may use either method. If it picks isoweekday() with a zero-based list, a weekday demo will look right, and the bug will wait for the weekend.',
    p2: 'Learners who have seen 17,088 become 14,069 test every day of the week before trusting date code, whoever wrote it. That habit is worth more than memorising which method starts at zero.',
    closer: 'In Salisbury, the learner who tests the whole week ships code that works on Sundays too.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Salisbury lessons work',
    intro: 'All teaching is live over video from home.',
    cells: [
      { h3: 'Run it together', p: 'Learner and teacher run each test case live on the shared screen.' },
      { h3: 'State school terms', p: 'Plans follow the South Australian school year, with holiday breaks.' },
      { h3: 'Free first lesson', p: 'A full trial class, then a written suggestion.' },
      { h3: 'Five to ten per group', p: 'Level-matched groups, or one-to-one lessons.' },
      { h3: 'Two lessons weekly', p: 'Set weekly slots, about eight lessons a month.' },
      { h3: 'India time', p: 'Teachers are in India: a 5pm Salisbury lesson is 12 noon India time in summer and 1pm from April.' }
    ],
    spec: {
      title: 'Adelaide clocks',
      p: 'Adelaide uses daylight saving from the first Sunday in October to the first Sunday in April (IANA time zone database); India does not, so the difference switches between five and four hours.'
    }
  },
  fees: {
    h2: 'Salisbury class fees',
    intro: 'Three prices for every family.',
    first: 'Lesson one is free and comes with a written next step.',
    group: 'About eight group lessons a month with five to ten learners.',
    private: 'About eight private lessons a month with one teacher.',
    closer: 'Salisbury households are billed in US dollars, starting only once the trial has settled a course and a weekly slot. Breaks and missed classes are set out on our pricing page.'
  },
  reviewsH2: 'Google feedback from learners we teach',
  book: {
    h2: 'Book a free Salisbury lesson',
    intro: 'Send the learner\'s age and a line about their interests. Older students might run the timetable test across a whole week; younger ones might make a Scratch calendar.',
    success: 'Thank you. We will contact you soon about a Salisbury lesson.'
  },
  faq: {
    h2: 'Salisbury coding and AI questions',
    intro: 'Questions families and adults across the City of Salisbury ask.',
    items: [
      {
        q: 'What is the population of the City of Salisbury?',
        a: 'The 2021 Census QuickStats count 145,806 residents in the City of Salisbury local government area, with 38,565 families and a median age of 36.'
      },
      {
        q: 'What is the difference between weekday() and isoweekday()?',
        a: 'Both give the day of the week as a number. weekday() counts Monday as 0 and Sunday as 6; isoweekday() counts Monday as 1 and Sunday as 7.'
      },
      {
        q: 'Why did the Salisbury Sunday count crash?',
        a: 'isoweekday() returned 7 for Sunday, and a list of seven day names only has positions 0 to 6, so Python raised IndexError.'
      },
      {
        q: 'How many bus and train visits does Salisbury have?',
        a: 'By our count of the Adelaide Metro timetable, stop records inside the City of Salisbury had 36,097 scheduled visits on Wednesday 21 October 2026 and 17,088 on Saturday 24 October.'
      },
      { q: 'What age can children start?', a: 'Six, with Scratch. Typed Python usually starts between eight and ten.' },
      { q: 'Can teenagers use Claude in lessons?', a: 'No. Anyone under 18 learns with other AI tools; Claude-based courses start at 18.' },
      {
        q: 'Is there a classroom in Salisbury?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Salisbury learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      {
        q: 'Do Salisbury group classes include Copilot Studio?',
        a: 'No. That tool is kept for private lessons, and group learners code their agents in Python.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Adelaide and South Australia',
    h2: 'More for Salisbury learners',
    html: 'Families in the suburb itself can read <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-mawson-lakes-adelaide">our Mawson Lakes page</a>. City-wide, see <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">the Adelaide page</a> and <a class="cg-inline-link" href="/coding-classes-for-kids-adelaide">Adelaide kids\' coding</a>, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">the South Australia guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Salisbury and Adelaide',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/best-coding-and-ai-classes-in-mawson-lakes-adelaide', label: 'Mawson Lakes' },
    { href: '/coding-classes-for-kids-adelaide', label: 'Kids in Adelaide' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' }
  ],
  personalityCss: `
.cg-root.cg-slsb .cg-hero-grid { align-items: end; gap: clamp(1.02rem, 3.08vw, 2.48rem); }
.cg-root.cg-slsb .cg-hero h1 { font-weight: 664; letter-spacing: -0.019em; line-height: 1.07; }
.cg-root.cg-slsb .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.61rem 0 0.61rem 1.12rem; }
.cg-root.cg-slsb .cg-eyebrow { letter-spacing: 0.122em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-slsb .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.013em; }
.cg-root.cg-slsb .cg-grid-3 { gap: clamp(0.82rem, 2.12vw, 1.62rem); }
.cg-root.cg-slsb .cg-table caption { font-weight: 646; text-align: left; }
.cg-root.cg-slsb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-slsb .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.92rem; }
.cg-root.cg-slsb .cg-callout { border-left-width: 5px; border-radius: 4px; }
`,
  dossier: {
    curriculumAuthority: 'City of Salisbury (LGA47140). ABS Census 2021 QuickStats (read 12 October 2026): 145,806 people; median age 36; 38,565 families; 57,079 private dwellings; 2.6 per household; separate houses 43,781 (83.5%, SA 78.0%); drove 45,082 (70.7%, SA 63.9%); bus 2,290 (3.6%, SA 3.1%); bachelor or higher 17,646 (15.0%, SA 22.7%); aged 0-4 9,166; 5-9 9,713; 10-14 9,486; 15-19 8,820. ABS LGA area 159.8432 sq km. Adelaide Metro GTFS v1708: 792 stop records inside the LGA polygon; Wednesday 21 Oct 2026 36097 visits (bus 34544, train 826, school 712 723, regional 701 4), 77 routes; 9 railway station records; Zone F Salisbury Interchange East Side 185; Stop 49 Church St East side 204; Saturday 24 Oct 17,088; Sunday 25 Oct 14,069. Neighbouring LGAs (ABS touches): Playford, Port Adelaide Enfield, Tea Tree Gully. Mawson Lakes figures deliberately not used.',
    localProject: 'weekday() vs isoweekday(). slsb_weekday.py, calendar.txt only: Wednesday 21 Oct 2026 weekday()=2 wednesday 36,097 vs isoweekday()=3 thursday 36,116; Saturday 24 Oct weekday()=5 saturday 17,088 vs isoweekday()=6 sunday 14,069; Sunday 25 Oct weekday()=6 sunday 14,069 vs isoweekday()=7 IndexError: list index out of range. Python 3.13.6.',
    requiredMentions: ['145,806', '57,079', '9,713', 'Salisbury Interchange', 'Port Adelaide Enfield', '36,116', '17,088', 'isoweekday', 'IndexError'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Salisbury local government area (LGA47140), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA47140'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Local Government Area and Suburbs and Localities boundary services, used for our point-in-boundary and intersection checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Department for Infrastructure and Transport (South Australia), Adelaide Metro General Transit Feed, version 1708 (valid 9 October 2026 to 9 April 2027), Creative Commons Attribution 3.0 Australia per its data.gov.au listing; downloaded 13 October 2026.',
        url: 'https://data.gov.au/data/dataset/https-gtfs-adelaidemetro-com-au'
      },
      {
        claim: 'Python documentation, datetime: date.weekday() returns Monday as 0 and Sunday as 6; date.isoweekday() returns Monday as 1 and Sunday as 7.',
        url: 'https://docs.python.org/3/library/datetime.html'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Adelaide, rule AS, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Mawson Lakes figures: not used; that suburb has its own page.',
      'Passenger numbers: not claimed; scheduled visits only.',
      'School term dates: not given; official SA term-date pages refused automated access (HTTP 403).',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Salisbury or Adelaide Metro.'
    ]
  }
};
