'use strict';
// Casuarina, Darwin (cg- district page, Australia cluster Phase 8, row 346). Keyword slug ai-and-programming-classes-in-*,
// suburb page (ABS SAL70051 Casuarina (NT)) in the City of Darwin (our test), under Darwin and the Northern Territory.
// Spine: non-negative matrix factorisation (scikit-learn 1.7.2) of a 610-stop x 24-hour departures matrix from the Darwin bus GTFS for
// Wednesday 30 September 2026 (17,967 departures, each stop's row as hourly shares). k=3 relative error 0.514 (k=1 0.763, k=5 0.325);
// parts: morning (91% of weight 6 to 9am), afternoon (77% 3 to 6pm), all-day; dominant part for 483 stops all-day, 70 morning, 57
// afternoon. The four main Casuarina stops weigh about 0.5 all-day. PCA's second component has 13 of 24 negative loadings.
// Script: scratchpad au/b18/a_casu.py. Lesson family: NMF; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'CASUARINA',
    label: 'Casuarina, Darwin',
    blurb: 'AI and programming classes for Casuarina, where a factorisation of Darwin\'s bus timetable finds a morning rush, an afternoon rush and an all-day pattern on its own.'
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
  slug: 'ai-and-programming-classes-in-casuarina-darwin',
  code: 'casu',
  accent: '#531E30',
  accentRationale: 'Casuarina: a muted deep mangrove plum (hue 339.6, s 0.64, v 0.33), at least 26.2 RGB from every Northern Territory page accent and all claimed accents, 12.9 from other AU accents and 7.7 from every other site colour; 10.7:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Casuarina',
    eyebrow: 'Casuarina, City of Darwin, Northern Territory',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Casuarina' },
      { type: 'AdministrativeArea', name: 'City of Darwin' },
      { type: 'City', name: 'Darwin' },
      { type: 'AdministrativeArea', name: 'Northern Territory' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-northern-territory', name: 'Northern Territory' },
    { slug: 'online-coding-and-python-classes-in-darwin', name: 'Darwin' }
  ],
  nav: [
    { label: 'Darwin', href: '/online-coding-and-python-classes-in-darwin' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Casuarina, Darwin',
  title: 'AI and Programming Classes in Casuarina, Darwin',
  description: 'Live online AI and programming classes for Casuarina and northern Darwin, ages 6 to adult, with an unsupervised learning project on the Darwin bus timetable.',
  ogDescription: 'Factorise 17,967 Darwin bus departures and three patterns appear unasked: a morning rush, an afternoon rush and all-day service. Casuarina is mostly all-day.',
  twitterDescription: 'AI and programming for Casuarina learners, live online, with the first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-complete-college',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Casuarina',
    description: 'Machine learning, data and programming lessons for Casuarina and northern Darwin learners, placed by level after a free trial.'
  },
  h1: 'AI and programming classes in Casuarina',
  capsuleQ: 'What does the Casuarina AI project discover?',
  capsule: 'Hidden patterns in a timetable, found without being told what to look for. Learners turn the Darwin bus timetable into a grid of 610 stops by 24 hours and factorise it with non-negative matrix factorisation. Three parts emerge: a morning rush, an afternoon rush and all-day service. The Casuarina interchange stops are about half all-day.',
  lead: 'Casuarina is the bus hub of Darwin\'s northern suburbs, a small suburb of about 0.4 square kilometres where 15 bus routes meet. Few people live there, but buses on routes 1 to 5, 10, 12 and the Orbital services start, end or pass through it every weekday. Its timetable is a good place to see what unsupervised learning can find.',
  wa: 'Hello Modern Age Coders, we are near Casuarina and would like a free AI or programming lesson.',
  picks: {
    eyebrow: 'Course picks for Casuarina',
    h2: 'Machine learning, data and Python',
    intro: 'Courses for learners interested in what AI can find on its own. A free trial lesson points the way.',
    items: [
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Unsupervised learning, factorisation and evaluation.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Clustering and pattern finding on real data.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Matrices and charts with Python.' },
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 12', note: 'How computers spot patterns, explained simply.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Casuarina in the Census',
      h2: 'A tiny residential count around a big hub',
      intro: 'From the 2021 Census QuickStats for the Casuarina suburb and locality (ABS SAL70051), read on 13 October 2026. The numbers are small, so the bureau\'s privacy adjustments matter more than usual.',
      body: [
        {
          kind: 'table',
          caption: 'Casuarina counts',
          head: ['Measure', 'Value'],
          rows: [
            ['People', '406'],
            ['Median age', '27'],
            ['Families', '24'],
            ['Private dwellings', '76'],
            ['Suburb area', 'about 0.42 sq km']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Casuarina travel to work compared with the NT',
          head: ['Share', 'Casuarina', 'NT'],
          rows: [
            ['Bus to work', '14.4% (42)', '2.1%'],
            ['Walked to work', '12.4% (36)', '7.6%'],
            ['Drove a car to work', '46.4% (135)', '63.4%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Bus users', p: 'Of Casuarina workers, 14.4% took the bus to work in 2021, roughly seven times the NT share.' },
            { h3: 'Small numbers', p: 'With only 406 residents, a handful of people moves these shares a lot, so they are better read as signs than measurements.' },
            { h3: 'Young', p: 'The median age was 27, below the NT median of 33.' }
          ]
        },
        {
          kind: 'p',
          text: 'Remember that 2021 was a pandemic year for travel. Because the ABS nudges small counts to protect privacy, every share above sits next to its count, and none are combined.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Three patterns nobody labelled',
      intro: 'For Wednesday 30 September 2026, a weekday the feed\'s weekday timetable runs, the Darwin bus GTFS lists 17,967 departures from 610 stops between 5am and 10pm. Learners turn each stop\'s departures into hourly shares and ask NMF to explain the 610 rows as mixtures of a few non-negative patterns.',
      body: [
        {
          kind: 'table',
          caption: 'Reconstruction error by number of patterns (our calculation, scikit-learn 1.7.2)',
          head: ['Patterns', 'Relative error'],
          rows: [
            ['1', '0.763'],
            ['2', '0.594'],
            ['3', '0.514'],
            ['4', '0.424'],
            ['5', '0.325']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Morning rush',
              p: 'One pattern puts 91% of its weight between 6am and 9am. It dominates 70 stops, typically ones served mainly in the morning peak.'
            },
            { h3: 'Afternoon rush', p: 'Another puts 77% of its weight between 3pm and 6pm, and dominates 57 stops.' },
            {
              h3: 'All-day service',
              p: 'The third is spread across the day and dominates 483 stops. The four main Casuarina stops are about half this pattern, with the rest split between the two rushes.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Why non-negative matters',
          p: 'PCA on the same matrix explains variance well, but its second component has 13 negative values among 24 hours: "minus departures" that no one can picture. NMF only adds patterns together, so every part reads like a timetable. More patterns always lower the error, so learners choose three for meaning, not for the smallest number.'
        },
        {
          kind: 'p',
          text: 'Our timetable is the Territory\'s public bus data file for Darwin, published openly with an attribution licence. Deciding which stops sit inside Casuarina uses our own outline test against the bureau\'s suburb boundary, and the matrix, factorisations and tallies are ours as well.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'In code',
      h2: 'A matrix, NMF and some judgement',
      intro: 'scikit-learn does the factorising. The judgement is in preparing the matrix and reading the parts.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Count departures by stop and hour for one weekday the feed covers.'],
            ['2', 'Divide each row by its total so busy and quiet stops compare fairly.'],
            ['3', 'Fit NMF for 1 to 5 patterns and chart the errors.'],
            ['4', 'Name each of three patterns from its hours and check the Casuarina stops.']
          ]
        },
        {
          kind: 'p',
          text: 'Step 2 is a real decision. Without it, the busiest stops dominate and the patterns describe them alone. Learners try both, and also compare with PCA to see why its negative values make the parts hard to explain. Calendar handling matters too: the feed switches its weekday timetable off on many dates in late 2026, so choosing the day comes first.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Mix two colours of paint to match a shade, the idea behind building things from positive parts.' },
            { h3: 'Teenagers', p: 'Build the matrix, fit NMF and present the three patterns as charts.' },
            { h3: 'Adults', p: 'Use NMF to find usage patterns in sales, energy or web logs at work.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Casuarina',
      h2: 'The hub in numbers',
      intro: 'A closer look at the stops inside the suburb, plus a note on Territory time.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Busiest stop', p: 'Trower Road after Linton Street carries 342 departures that Wednesday, more than any other stop within Casuarina.' },
            { h3: 'Terminus', p: 'The Bradshaw Terrace terminus stop has 268 departures, and eight route names in the feed begin "Casuarina".' },
            { h3: 'Territory time', p: 'Darwin keeps UTC+9:30 all year; the IANA database records its last daylight saving period ending in March 1944.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'We use the bureau\'s Casuarina boundary, about 0.42 square kilometres, which our test places within the City of Darwin. Territory school term dates are left out: we were unable to fetch them from an official source.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From mixing paint to matrix factorisation',
    intro: 'Ages are only a starting guide.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Patterns',
        p: 'Block-code games about repeating patterns.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 8 to 12',
        h3: 'Tables of numbers',
        p: 'Python lists, grids and simple charts.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Unsupervised learning',
        p: 'Clustering and factorisation on real data.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied ML',
        p: 'Matrix methods and evaluation for work.',
        courses: ['ai-ml-masterclass-complete-college', 'statistics-probability-maths-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Is pattern-finding AI always right?',
    intro: 'It always finds patterns. Deciding which ones mean something is up to people.',
    p1: 'Ask NMF for five patterns and it will return five, with a lower error than three. Some of those extra parts may describe a single unusual stop rather than anything general.',
    p2: 'A Casuarina learner who has named three patterns from their hours, and checked them against known stops, treats AI-found patterns as hypotheses to test rather than facts.',
    closer: 'Our AI classes pair every pattern a model finds with a reason to believe it.',
    blogAnchor: 'is learning to code still worth it'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Casuarina lessons, live online',
    intro: 'Classes run over video, so learners across Darwin\'s northern suburbs join from home.',
    cells: [
      { h3: 'Live teacher', p: 'Each class is taught in real time, with code reviewed as learners type.' },
      { h3: 'School holidays', p: 'Classes pause during Territory school holidays.' },
      { h3: 'No-cost start', p: 'Your first class is free, and a short course plan follows.' },
      { h3: 'Groups', p: 'Fifteen to twenty learners at a level, or one-to-one.' },
      { h3: 'Pace', p: 'Twice-weekly classes across each school term.' },
      { h3: 'India time', p: 'A 5:30pm Casuarina class starts at 1:30pm in India, every day of the year.' }
    ],
    spec: {
      title: 'Four hours ahead',
      p: 'With Darwin fixed at UTC+9:30 and India at UTC+5:30, the IANA database puts Casuarina exactly four hours ahead all year.'
    }
  },
  fees: {
    h2: 'Casuarina class fees',
    intro: 'All learners pay the same fees.',
    first: 'Class one is free, followed by a plan.',
    group: 'Group classes: two a week, with five to ten others.',
    private: 'Private classes: about eight a month with your own teacher.',
    closer: 'Prices are in US dollars, payable only after the trial class has agreed what and when. For holidays and absences, see our pricing page.'
  },
  reviewsH2: 'What parents write on Google',
  book: {
    h2: 'Book a free Casuarina lesson',
    intro: 'Tell us the learner\'s age and interests. A child might mix paint colours; a teenager might factorise the bus timetable.',
    success: 'Thank you. We will contact you about a Casuarina lesson.'
  },
  faq: {
    h2: 'Casuarina AI and programming questions',
    intro: 'Questions from Casuarina and northern Darwin families and adult learners.',
    items: [
      {
        q: 'How many people live in Casuarina?',
        a: 'The 2021 Census counted 406 people in the Casuarina suburb, median age 27. Few people live in the suburb itself.'
      },
      {
        q: 'What is non-negative matrix factorisation?',
        a: 'A way of breaking a table of non-negative numbers into a few additive parts, so each row is a mix of patterns.'
      },
      { q: 'Why three patterns?', a: 'Because three gave parts that make sense as timetables. More patterns lower the error but become harder to explain.' },
      {
        q: 'How is NMF different from PCA?',
        a: 'PCA allows negative values, which suits some tasks but makes timetable parts hard to read. NMF only adds positive parts.'
      },
      { q: 'Can children learn about AI patterns?', a: 'Younger learners explore pattern games; factorisation suits confident teenagers and adults.' },
      { q: 'How many bus routes serve Casuarina?', a: 'On the chosen Wednesday, 15 route names in the Darwin timetable stop inside the Casuarina suburb.' },
      {
        q: 'Do you have a centre in Casuarina?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Casuarina classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who would my child learn alongside?',
        a: 'Fifteen to twenty learners of similar level and pace, whatever their age or where they live. One-to-one lessons are there if no group time works.',
        boiler: true
      },
      { q: 'Do you teach adults?', a: 'We do. Grown-up learners have their own groups or private classes, and many analyse data from their workplace.' }
    ]
  },
  next: {
    eyebrow: 'More for Top End learners',
    h2: 'Read more',
    html: 'Casuarina learners can also see the <a class="cg-inline-link" href="/online-coding-and-python-classes-in-darwin">Darwin page</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-territory">Northern Territory guide</a> and <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Casuarina and Darwin',
  footerPlaces: [
    { href: '/ai-classes-for-teens-australia', label: 'AI for teens' },
    { href: '/online-coding-and-python-classes-in-darwin', label: 'Darwin' },
    { href: '/coding-and-ai-classes-in-northern-territory', label: 'Northern Territory' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-casu .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.5vw, 2.05rem); }
.cg-root.cg-casu .cg-hero h1 { font-weight: 660; letter-spacing: -0.028em; line-height: 1.05; }
.cg-root.cg-casu .cg-capsule { border-left: 2px solid var(--cg-accent); border-right: 2px solid var(--cg-accent); padding: 0 0.9rem; }
.cg-root.cg-casu .cg-eyebrow { letter-spacing: 0.115em; font-weight: 665; font-size: 0.8rem; }
.cg-root.cg-casu .cg-section-head h2 { max-width: 19ch; }
.cg-root.cg-casu .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.65rem); }
.cg-root.cg-casu .cg-table caption { text-align: left; font-weight: 605; font-size: 0.9rem; }
.cg-root.cg-casu .cg-table td:nth-child(n+2) { font-variant-numeric: tabular-nums; }
.cg-root.cg-casu .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.7rem; }
.cg-root.cg-casu .cg-callout { border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Casuarina (NT) (SAL70051), ABS Census 2021 QuickStats (read 13 October 2026): 406 people; median age 27 (NT 33); 24 families; 76 private dwellings; bus to work 42 (14.4%, NT 2.1%); walked 36 (12.4%, NT 7.6%); car as driver 135 (46.4%, NT 63.4%). ABS SAL area 0.4187 sq km; inside the City of Darwin LGA by our test. Darwin bus GTFS (data.nt.gov.au, CC BY, downloaded 13 October 2026), Wednesday 30 September 2026: 756 trips, 17,967 departures at 610 stops, hours 5 to 22; 5 stops inside the SAL: Trower Rd after Linton St 342, 9 Scaturchio St 280, Casuarina Bradshaw Terrace Terminus 268, Casuarina Bradshaw Terrace 204, Angelo St before Gsell St 15; 15 route names stop inside (1, 1h, 2, 3, 4, 5, 9, 10, 11, 12, 21, 24, 25, OL1, OL2); 8 route long names begin Casuarina. Darwin +9:30, last DST ended March 1944 (IANA 2026e). NT term dates not used.',
    localProject: 'scikit-learn 1.7.2 NMF (init nndsvda, random_state 0) on X = 610 stops x 24 hours of departures, each row divided by its total. Relative Frobenius error k=1 0.763, 2 0.594, 3 0.514, 4 0.424, 5 0.325. k=3 parts: morning (91% of weight 6 to 9am), afternoon (77% 3 to 6pm), all-day (11% 6 to 9am, 31% 3 to 6pm); dominant part: all-day 483 stops, morning 70, afternoon 57. Casuarina stops weights (morning, all-day, afternoon) about (0.19, 0.51, 0.29). PCA 3 components explained 0.41, 0.15, 0.147; second component 13 of 24 loadings negative. Our calculation. Script: scratchpad au/b18/a_casu.py.',
    requiredMentions: [
      '17,967 departures',
      '610 stops',
      '0.514',
      '483 stops',
      'Trower Road after Linton Street',
      '14.4% (42)',
      '13 negative values',
      'Bradshaw Terrace',
      '15 bus routes meet'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Casuarina (NT) suburb and locality (SAL70051), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL70051'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Northern Territory Government, Bus timetable data and geographic information - Darwin (GTFS), data.nt.gov.au, Creative Commons Attribution; feed downloaded 13 October 2026, weekday service 7 September 2026 to 22 January 2027.',
        url: 'https://data.nt.gov.au/dataset/bus-timetable-data-and-geographic-information-darwin'
      },
      {
        claim: 'scikit-learn 1.7.2 documentation, sklearn.decomposition.NMF.',
        url: 'https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.NMF.html'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Darwin at +9:30 on rule Aus, whose last daylight saving period ended in March 1944.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Who lives in Casuarina or in what type of housing beyond published counts: not claimed.',
      'Passenger numbers at the interchange: not claimed; the feed gives scheduled departures.',
      'NT school term dates: not given; NT education sources could not be read directly.',
      'Darwin city or NT-wide figures from the parent pages: kept off this page.',
      'Naming schools or the university: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the City of Darwin or the NT Government.'
    ]
  }
};
