'use strict';
// Nightcliff, Darwin (cg- district page, Australia cluster Phase 8, row 347). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), suburb page (ABS SAL70210) inside the City of Darwin, under Darwin and the Northern Territory.
// Spine: itertools.takewhile stops at the first item that fails its test. Over Nightcliff bus visits in timetable file order it
// counts 0 departures before 9am; after sorting by time it counts 86, the same as a plain filter. Our run in scratchpad
// au/b19/ntcf_gtfs.py. Data: Darwin bus GTFS (NT Government, CC BY), City of Darwin Roads (CC BY 4.0). Palmerston and Casuarina
// figures are kept off this page. Lesson family: itertools.takewhile vs filter; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'NIGHTCLIFF',
    label: 'Nightcliff, Darwin',
    blurb: 'Coding and AI classes for Nightcliff, where a timetable script counted no morning buses until the rows were sorted.'
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
  slug: 'best-coding-and-ai-classes-in-nightcliff-darwin',
  code: 'ntcf',
  accent: '#984A1F',
  accentRationale: 'Nightcliff: a dry-season burnt orange (hue 21.3), 5.11:1 on #EDE7DA; 32.0 RGB from the nearest Northern Territory accent, 12.5 from any other Australian accent and 8.1 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Nightcliff',
    eyebrow: 'Nightcliff, City of Darwin, Northern Territory',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Nightcliff' },
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
  routeLabel: 'Nightcliff, Darwin',
  title: 'Best Coding and AI Classes in Nightcliff, Darwin',
  description: 'Live online coding and AI classes for Nightcliff, Darwin: Scratch from age six, Python and AI for teens and adults, taught in small groups or one to one.',
  ogDescription: 'Nightcliff timetable project: itertools.takewhile counted 0 buses before 9am, a filter counted 86. The rows were in the wrong order.',
  twitterDescription: 'Coding and AI classes for Nightcliff, live online.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '14 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Nightcliff',
    description: 'Level-matched online lessons in Scratch, Python and applied AI for children, teenagers and adults in Nightcliff, Darwin.'
  },
  h1: 'Coding and AI classes in Nightcliff',
  capsuleQ: 'How do Nightcliff families choose the best coding and AI classes?',
  capsule: 'Look for teaching that explains why code gives the answer it does, not only how to type it. We teach live online, from Scratch at six to Python and AI for teens and adults. Nightcliff had 3,884 residents at the 2021 Census, so groups mix learners from across Darwin.',
  lead: 'A short Python script asked how many buses stop in Nightcliff before nine on a weekday morning. It answered zero. The timetable says 86. The script used itertools.takewhile on rows that were never sorted by time, and it gave up at the very first row.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Nightcliff.',
  picks: {
    eyebrow: 'Course picks for Nightcliff',
    h2: 'Where Nightcliff learners usually start',
    intro: 'Each of these courses spends time on reading code closely, which is what the bus project below needs. A free first lesson settles the level.',
    items: [
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Loops, iterators and the itertools module, built up from first principles.'
      },
      {
        course: 'scratch-programming-complete-course',
        band: 'Ages 6 to 10',
        note: 'Stop conditions and repeat-until blocks, the young version of this lesson.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 14', note: 'Lists, sorting and small data projects with AI help.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Adults 18 and over', note: 'Using AI tools for code and checking what they produce.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Nightcliff in the Census',
      h2: 'A compact suburb on the Darwin coast',
      intro: 'Census 2021 figures for the suburb of Nightcliff (ABS code SAL70210), with the Northern Territory alongside.',
      body: [
        {
          kind: 'table',
          caption: 'Nightcliff suburb, 2021',
          head: ['Measure', 'Nightcliff'],
          rows: [
            ['Residents', '3,884'],
            ['Median age', '34'],
            ['Families', '955'],
            ['Private dwellings', '1,817'],
            ['People per household', '2.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Nightcliff and the Northern Territory',
          head: ['Indicator', 'Nightcliff', 'Northern Territory'],
          rows: [
            ['Flats or apartments', '55.0% (837)', '17.9%'],
            ['Separate houses', '35.8% (545)', '66.8%'],
            ['Adults with a bachelor degree or higher', '45.2% (1,453)', '21.5%'],
            ['Employed people in professional jobs', '34.8% (803)', '22.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children', p: '207 residents were aged 5 to 9 and 208 were aged 10 to 14.' },
            { h3: 'Teenagers', p: '166 residents were aged 15 to 19, the years when many learners move from blocks to typed code.' },
            { h3: 'Small area', p: 'The suburb covers about 1.45 square kilometres, next to Rapid Creek and Coconut Grove.' }
          ]
        },
        {
          kind: 'p',
          text: 'More than half of Nightcliff\'s homes were flats or apartments, far above the Territory share. Every figure is printed as QuickStats shows it; Census cells are slightly adjusted for privacy, so we never add them up.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Zero buses before nine, according to the code',
      intro: 'We took the Darwin bus timetable, kept the 10 stop records inside the Nightcliff boundary and the service for Wednesday 30 September 2026: 402 scheduled visits on 110 trips. Then we asked one question three ways.',
      body: [
        {
          kind: 'table',
          caption: 'Visits at Nightcliff stops before a cut-off (our run)',
          head: ['Method', 'Before 9am', 'Before noon'],
          rows: [
            ['sum(1 for r in rows if r.time < cut)', '86', '151'],
            ['takewhile on rows in file order', '0', '5'],
            ['takewhile on rows sorted by time', '86', '151']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Routes serving the Nightcliff stops that day',
          head: ['Route', 'Visits'],
          rows: [
            ['4, Casuarina to Darwin via CDU and Nightcliff', '365'],
            ['11, Millner, Rapid Creek, Alawa', '13'],
            ['OL1, Orbital 1, limited stops', '12'],
            ['OL2, Orbital 2, limited stops', '12']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'What takewhile does',
              p: 'It hands back items while a test is true and stops for good at the first false one. It never looks further down the list.'
            },
            {
              h3: 'Why file order failed',
              p: 'The timetable lists stops trip by trip. The first Nightcliff row is a bus at 11:01, so the test failed at once and the count was zero.'
            },
            {
              h3: 'When it is right',
              p: 'On rows sorted by time, takewhile matches the filter and can stop early on a long list, which is why people reach for it.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Check the order before you stop early',
          p: 'Any tool that stops at the first miss, takewhile, a break inside a loop, a binary search, assumes the data is sorted on the thing you are testing. When the answer looks too small, print the first few rows before trusting it.'
        },
        {
          kind: 'p',
          text: 'Times come from the published Darwin timetable feed; which stops count as Nightcliff is decided by our own boundary test, and each count above was printed by our script.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Iterators in Python',
      h2: 'Three ways to take part of a list',
      intro: 'They look alike and answer different questions.',
      body: [
        {
          kind: 'table',
          caption: 'Filtering tools compared',
          head: ['Tool', 'Reads the whole input?', 'Needs sorted input?'],
          rows: [
            ['filter() or a comprehension', 'Yes', 'No'],
            ['itertools.takewhile', 'No, stops at the first miss', 'Yes, for a cut-off question'],
            ['itertools.dropwhile', 'Skips until the first miss, then keeps the rest', 'Yes, for a cut-off question']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Hand out cards and stop at the first red one. Shuffle the deck and try again.' },
            { h3: 'Secondary learners', p: 'Run takewhile and filter on the same list, sorted and unsorted, and explain each result.' },
            { h3: 'Adults', p: 'Look for loops in your own scripts that break early and ask what order their input arrives in.' }
          ]
        },
        {
          kind: 'p',
          text: 'A short assert that the list is sorted, placed just before takewhile, turns a silent wrong answer into a loud error that is easy to fix.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Nightcliff',
      h2: 'Streets, buses and clocks',
      intro: 'Local markers from City of Darwin and Territory open data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Streets',
              p: 'City of Darwin\'s road layer has 51 road records whose midpoint falls inside Nightcliff. Aralia Street is the longest at a recorded 1,542 metres.'
            },
            { h3: 'Busiest stop', p: 'Progress Drive at John Stokes Square had 71 scheduled visits on the sample Wednesday, more than any other Nightcliff stop.' },
            { h3: 'Service hours', p: 'The first scheduled departure at a Nightcliff stop that day was 6:19am and the last was 10:05pm.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Suburb figures',
          p: 'Figures here describe the suburb of Nightcliff inside the City of Darwin. Darwin, Palmerston and Casuarina each have their own pages and their numbers are not repeated here.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From card games to iterators',
    intro: 'Ages are only a guide; the trial lesson decides.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch',
        p: 'Repeat-until loops and when to stop.',
        courses: ['scratch-programming-complete-course', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and AI basics',
        p: 'Lists, sorting and first data questions.',
        courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python in depth',
        p: 'Iterators, itertools and testing answers.',
        courses: ['python-complete-masterclass-teens', 'teens-ai-tools-mastery-course']
      },
      {
        band: 'Adults 18 and over',
        h3: 'Applied AI',
        p: 'Working with AI-written code that has to be right.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'AI and code',
    h2: 'Would an AI assistant have caught it?',
    intro: 'Not unless someone asked about the order of the rows.',
    p1: 'Ask an AI tool for the quickest way to count early buses and it may well suggest takewhile, because it is the efficient answer for sorted data. The suggestion is reasonable. The hidden condition is that the rows must already be in time order.',
    p2: 'A learner who has watched 86 turn into 0 knows to ask what order the data is in. That question is worth more than the one-line answer, and it is the habit our lessons build.',
    closer: 'For Nightcliff learners, the useful skill is spotting the assumption behind a neat line of code.',
    blogAnchor: 'why checking AI-written code still matters'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online lessons for Nightcliff',
    intro: 'Every lesson is live on video from home.',
    cells: [
      { h3: 'Watch it run', p: 'Learners print the first rows of their data before they trust a count.' },
      { h3: 'School terms', p: 'Classes follow the Territory school year and pause for holidays.' },
      { h3: 'Free first lesson', p: 'A full lesson at no cost, followed by a written suggestion.' },
      { h3: 'Fifteen to twenty per group', p: 'Grouped by level, or taught privately.' },
      { h3: 'Two a week', p: 'Fixed times twice a week, about eight lessons a month.' },
      { h3: 'Teachers in India', p: 'Darwin has no daylight saving, so a 7pm Nightcliff class is 3pm India time all year round.' }
    ],
    spec: {
      title: 'Darwin time',
      p: 'Darwin keeps 9:30 hours ahead of UTC all year (IANA time zone database), and India keeps 5:30, so the gap is always four hours.'
    }
  },
  fees: {
    h2: 'Fees for Nightcliff learners',
    intro: 'One price list for everyone.',
    first: 'The first lesson is free, with advice in writing afterwards.',
    group: 'About eight group lessons each month, fifteen to twenty learners per group.',
    private: 'About eight one-to-one lessons each month.',
    closer: 'Nightcliff families are billed in US dollars after the trial has settled the course and the times. Holidays and missed lessons are covered on the pricing page.'
  },
  reviewsH2: 'Google reviewers on our teaching',
  book: {
    h2: 'Book a free Nightcliff lesson',
    intro: 'Tell us the learner\'s age and what they enjoy. An older student could repeat the bus count and fix it; a younger one could build a Scratch game that knows when to stop.',
    success: 'Thank you. We will be in touch about a Nightcliff lesson.'
  },
  faq: {
    h2: 'Nightcliff coding questions',
    intro: 'Questions Nightcliff families ask.',
    items: [
      {
        q: 'How many people live in Nightcliff?',
        a: 'Census 2021 QuickStats counts 3,884 residents in the suburb of Nightcliff, with a median age of 34 and 1,817 private dwellings.'
      },
      {
        q: 'What is itertools.takewhile in Python?',
        a: 'A function that yields items from an iterable while a condition holds and stops at the first item where it does not.'
      },
      {
        q: 'Why did takewhile return fewer results than filter?',
        a: 'Because takewhile stops at the first failure. Unless the data is sorted on the tested value, later matches are never reached.'
      },
      {
        q: 'How many buses stop in Nightcliff on a weekday?',
        a: 'On Wednesday 30 September 2026 the published timetable had 402 scheduled visits at the 10 Nightcliff stop records, our count from the Darwin timetable feed.'
      },
      {
        q: 'Can a six-year-old learn coding online?',
        a: 'Yes. Children start with Scratch, dragging blocks to make games, and move to typed Python once reading and typing are comfortable.'
      },
      { q: 'Do teenagers use Claude in class?', a: 'No. Claude is kept for learners aged 18 and over; teenagers work with other AI tools.' },
      {
        q: 'Is there a classroom in Nightcliff?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Nightcliff learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Fifteen to twenty learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Is Copilot Studio taught to groups?', a: 'No. Copilot Studio is one-to-one only; groups build their AI projects in Python.' }
    ]
  },
  next: {
    eyebrow: 'Explore Darwin and the Territory',
    h2: 'More for Nightcliff learners',
    html: '<a class="cg-inline-link" href="/online-coding-and-python-classes-in-darwin">The Darwin page</a> covers the whole city and <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-territory">the Northern Territory guide</a> the rest of the Territory. <a class="cg-inline-link" href="/online-coding-and-python-classes-in-palmerston-nt-darwin">Palmerston</a> has a page of its own.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Nightcliff and Darwin',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-darwin', label: 'Darwin' },
    { href: '/online-coding-and-python-classes-in-palmerston-nt-darwin', label: 'Palmerston' },
    { href: '/coding-and-ai-classes-in-northern-territory', label: 'Northern Territory' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-ntcf .cg-hero-grid { align-items: end; gap: clamp(1.13rem, 3.31vw, 2.61rem); }
.cg-root.cg-ntcf .cg-hero h1 { font-weight: 648; letter-spacing: -0.019em; line-height: 1.07; }
.cg-root.cg-ntcf .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.61rem 0 0.61rem 1.03rem; }
.cg-root.cg-ntcf .cg-eyebrow { letter-spacing: 0.124em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-ntcf .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.013em; }
.cg-root.cg-ntcf .cg-grid-3 { gap: clamp(0.74rem, 1.93vw, 1.51rem); }
.cg-root.cg-ntcf .cg-table caption { font-weight: 617; text-align: left; letter-spacing: 0.016em; }
.cg-root.cg-ntcf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ntcf .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.93rem; }
.cg-root.cg-ntcf .cg-callout { border-left-width: 4px; border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Nightcliff suburb (SAL70210), City of Darwin (LGA71000). ABS Census 2021 QuickStats (read 14 October 2026): 3,884 people; median age 34; 955 families; 1,817 private dwellings; 2.4 per household; flats 837 (55.0%, NT 17.9%); separate houses 545 (35.8%, NT 66.8%); bachelor or higher 1,453 (45.2%, NT 21.5%); professionals 803 (34.8%, NT 22.0%); aged 5-9 207; 10-14 208; 15-19 166. ABS SAL area 1.4512 sq km; SALs intersecting: Coconut Grove, Rapid Creek. Darwin GTFS (NT Government, CC BY, files dated 7 Sep 2026), Wednesday 30 Sep 2026 (weekday services are withdrawn by calendar_dates from 5 Oct in this feed): 10 stop records inside SAL70210 (ray-casting test), 402 visits on 110 trips; route 4 365, 11 13, OL1 12, OL2 12; Progress Drive at John Stokes Square 71; first 06:19, last 22:05. City of Darwin Roads (CC BY 4.0): 51 records with midpoint inside; Aralia Street True_Length 1,542 m.',
    localProject: 'itertools.takewhile vs filter. Nightcliff stop_times rows in feed order (trip by trip, first row 11:01:00). Before 09:00: filter 86, takewhile file order 0, takewhile sorted 86. Before 12:00: 151, 5, 151. Script au/b19/ntcf_gtfs.py.',
    requiredMentions: ['3,884', '1,453', '166', 'Coconut Grove', 'takewhile', '402 scheduled visits', 'John Stokes Square', 'Aralia Street', '6:19am'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Nightcliff suburb (SAL70210), read 14 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL70210'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Local Government Area and Suburbs and Localities boundary services, used for our point-in-boundary and intersection checks.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Northern Territory Government, Bus Timetable Data and Geographic Information - Darwin (GTFS, feed files dated 7 September 2026), Creative Commons Attribution, listed on data.nt.gov.au; downloaded 14 October 2026.',
        url: 'https://data.nt.gov.au/dataset/bus-timetable-data-and-geographic-information-darwin'
      },
      {
        claim: 'City of Darwin, Darwin Roads feature layer (Road_Name, True_Length, GIS_Length), Creative Commons Attribution 4.0 International; queried 14 October 2026.',
        url: 'https://www.arcgis.com/home/item.html?id=253e992a987d433eaf87ce20290a9c45'
      },
      {
        claim: 'Python documentation, itertools.takewhile: make an iterator that returns elements from the iterable as long as the predicate is true.',
        url: 'https://docs.python.org/3/library/itertools.html#itertools.takewhile'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Darwin, 9:30 ahead of UTC with no daylight saving rule in force.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Northern Territory school term dates: the NT term-date pages returned 403 and were not used.',
      'Super Tuesday bike counts for Darwin: CSV links returned 403; not used.',
      'City of Darwin place-name explanations: no licence stated on the layer; not used.',
      'Palmerston and Casuarina timetable figures: kept to their own pages.',
      'Any individual address or stop named after a house number: not published.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Darwin or the NT Government.'
    ]
  }
};
