'use strict';
// Palmerston, Darwin (cg- district page, Australia cluster Phase 8, row 345). Keyword slug online-coding-and-python-classes-in-*,
// council page (ABS LGA72800, City of Palmerston) in Greater Darwin, under Darwin and the Northern Territory.
// Spine: itertools.pairwise over Darwin bus GTFS stop sequences (NT Government, data.nt.gov.au, CC BY) for Wednesday 30 September 2026,
// a weekday the feed's weekday timetable runs: 376 trips touch the 118 stops inside the council outline; pairwise over all sorted rows
// gives 7,762 pairs of which 375 cross trip boundaries (171 with negative times); grouped by trip, 7,387 pairs over 388 segments,
// 135 inside Palmerston (median 1 minute), 1,083 zero-minute hops. Script: scratchpad au/b18/a_plmn.py. Lesson family: pairwise.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'PALMERSTON',
    label: 'Palmerston, Darwin',
    blurb: 'Online coding and Python classes for Palmerston, where pairing each bus stop with the next one teaches itertools.pairwise and one boundary it must not cross.'
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
  slug: 'online-coding-and-python-classes-in-palmerston-nt-darwin',
  code: 'plmn',
  accent: '#253E54',
  accentRationale: 'Palmerston: a muted dry-season slate (hue 208.1, s 0.56, v 0.33), at least 23.7 RGB from every Northern Territory page accent and all claimed accents, 12.5 from other AU accents and 8.1 from every other site colour; 9.0:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Palmerston',
    eyebrow: 'City of Palmerston, Greater Darwin, Northern Territory',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Place', name: 'Palmerston' },
      { type: 'AdministrativeArea', name: 'City of Palmerston' },
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
  routeLabel: 'Palmerston, Darwin',
  title: 'Online Coding and Python Classes in Palmerston, Darwin',
  description: 'Live online coding and Python classes for Palmerston NT, ages 6 to adult, with a Python project pairing consecutive bus stops from the Darwin public bus timetable.',
  ogDescription: 'Pair each Palmerston bus stop with the next and 375 pairs jump between trips, 171 of them backwards in time. Grouping first fixes it.',
  twitterDescription: 'Python and coding for Palmerston learners, taught live online with a free first lesson.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Palmerston NT',
    description: 'Python and programming lessons for Palmerston children, teenagers and adults, placed by level after a free trial and taught live.'
  },
  h1: 'Online coding and Python classes in Palmerston',
  capsuleQ: 'What Python tool does the Palmerston project use?',
  capsule: 'itertools.pairwise, which turns a list into neighbouring pairs. Learners pair each stop on a Palmerston bus trip with the next to measure how long each hop takes. Run it over the whole timetable at once and 375 pairs join the last stop of one trip to the first stop of another, 171 of them going backwards in time. Grouping by trip first fixes every one.',
  lead: 'Palmerston is the satellite city south-east of Darwin, with its own council, a bus interchange and a young population. Its suburbs are served by local routes 70 to 78, 87 and 88 and by the longer routes 8 and 9 towards Darwin. The Northern Territory Government publishes the whole bus timetable, ready for a careful Python learner.',
  wa: 'Hi Modern Age Coders, we are in Palmerston and would like to book a free Python or coding lesson.',
  picks: {
    eyebrow: 'Course picks for Palmerston',
    h2: 'Python courses for the Top End',
    intro: 'Courses that build tidy, testable Python. The free trial picks the starting level.',
    items: [
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'The standard library, itertools included, in depth.'
      },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Lists, grouping and real timetable data.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First typed Python in small projects.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Turning raw records into checked summaries.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Palmerston in the 2021 Census',
      h2: 'A young, car-based city of families',
      intro: 'Figures for the City of Palmerston council area (ABS LGA72800) from 2021 Census QuickStats, read on 13 October 2026, with the ABS 2025 estimate.',
      body: [
        {
          kind: 'table',
          caption: 'City of Palmerston counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents, 2021 Census', '37,247'],
            ['Estimated residents, 2025', '43,193'],
            ['Median age', '31'],
            ['Families', '9,502'],
            ['Private dwellings', '14,535'],
            ['People per household', '2.8']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Palmerston shares beside the Northern Territory',
          head: ['Share', 'Palmerston', 'NT'],
          rows: [
            ['Residents aged 5 to 9', '8.8% (3,271)', '7.2%'],
            ['Drove a car to work', '73.1% (14,074)', '63.4%'],
            ['Separate houses', '75.9% (9,348)', '66.8%'],
            ['Technicians and trades workers', '16.5% (3,179)', '13.8%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Families', p: 'Couples with children were 48.4% of Palmerston families, above the territory share.' },
            { h3: 'Driving city', p: 'Nearly three in four workers drove to work, and only 1.2% walked, compared with 7.6% across the NT.' },
            { h3: 'Two figures', p: 'The Census count of 37,247 and the ABS 2025 estimate of 43,193 use different methods, so both appear without subtraction.' }
          ]
        },
        {
          kind: 'p',
          text: 'The 2021 Census was held during the pandemic, so travel answers describe that week. The bureau rounds its shares and lightly perturbs small counts, so we print its figures exactly and never build totals by adding rows.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Pairs that must stay inside one trip',
      intro: 'The bus timetable lists every stop of every trip in order. To measure each hop, learners pair each stop with the next using itertools.pairwise, added to Python in version 3.10. We use Wednesday 30 September 2026, a weekday on which the feed\'s weekday timetable runs, and keep the 376 trips that touch the 118 stops inside the City of Palmerston.',
      body: [
        {
          kind: 'table',
          caption: 'Two ways to pair consecutive stops (our run, Python 3.13)',
          head: ['Method', 'Pairs', 'Problem pairs'],
          rows: [
            ['pairwise over all rows sorted by trip and stop', '7,762', '375 cross from one trip to the next'],
            ['Of those crossing pairs, time runs backwards', '171', 'Negative hop times'],
            ['Group by trip, then pairwise inside each', '7,387', 'None']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'One per boundary',
              p: 'There are 376 trips, so a single list has 375 places where one trip ends and the next begins. pairwise pairs across every one of them.'
            },
            { h3: 'Short hops', p: 'Grouped correctly, the 135 stop-to-stop segments inside Palmerston have a median hop of 1 minute.' },
            {
              h3: 'Zero-minute hops',
              p: 'Of the 7,387 correct pairs, 1,083 show 0 minutes, because the timetable records whole minutes. Learners decide how to treat them before averaging.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'A calendar surprise',
          p: 'The same feed switches its weekday service off on 51 weekday dates between 5 October and 28 December 2026, while leaving it on from 14 to 25 December. We do not know why, so the project uses a date the weekday timetable clearly covers and reports this exception rather than guessing.'
        },
        {
          kind: 'p',
          text: 'Timetables come from the NT Government\'s Darwin bus GTFS feed on data.nt.gov.au, licensed Creative Commons Attribution, downloaded on 13 October 2026. Stops are placed in the City of Palmerston by our point-in-polygon test on the ABS council outline; pairs, hop times and counts are our own calculation.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Writing it in Python',
      h2: 'Group first, then pair',
      intro: 'The correct version is only two lines longer. The lesson is noticing that the short version is wrong.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Read stop_times, keep active trips for the chosen day and sort by trip and stop sequence.'],
            ['2', 'Run pairwise over the whole list and count pairs whose two trips differ.'],
            ['3', 'Group rows into a dict of trips, then run pairwise inside each trip.'],
            ['4', 'Summarise hop times for Palmerston segments and decide what to do with zeros.']
          ]
        },
        {
          kind: 'p',
          text: 'A useful check falls out of step 2: the number of bad pairs should equal the number of trips minus one. Here it is exactly 375 for 376 trips, which confirms the explanation. Learners also find the longest hops, such as an express segment of 28 minutes into Palmerston Interchange, and check they are real rather than errors.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Hold hands with the next person in each team line, and notice what goes wrong when two lines stand end to end.' },
            { h3: 'Teenagers', p: 'Write both versions, prove the 375, and chart the hop times.' },
            { h3: 'Adults', p: 'Compute differences between consecutive events in logs or sensor data without crossing groups.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Palmerston',
      h2: 'Interchange, routes and Territory time',
      intro: 'Local details from the Darwin bus timetable feed and the IANA time zone database.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Busiest stop', p: 'Palmerston Interchange has 315 scheduled departures on the chosen Wednesday, the most of any stop in the council area.' },
            { h3: '20 route names', p: 'Trips touching Palmerston that day run on 20 route names, from local 70s and 80s to the Orbital services and rural 440s.' },
            { h3: 'No daylight saving', p: 'Darwin time has stayed at nine and a half hours ahead of UTC since daylight saving last ended in March 1944.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Area used',
          p: 'The City of Palmerston is the ABS council outline of about 52.7 square kilometres, drawn in three parts. School term dates are not given here because the NT education sources could not be read directly.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From holding hands to itertools',
    intro: 'Most Palmerston learners start on one of these rungs; the trial confirms which.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Order and sequence',
        p: 'Scratch projects where steps must happen in the right order.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Moving to text',
        p: 'Loops, lists and first timetable puzzles typed out.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Real public files',
        p: 'itertools, grouping and messy government data.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Pipelines',
        p: 'Clean, repeatable data processing and automation.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Python and AI',
    h2: 'Would an AI assistant group first?',
    intro: 'Not always, because the short version looks so neat.',
    p1: 'Ask for "time between consecutive stops" and an assistant may well write pairwise over the sorted rows. The output looks plausible until someone notices a few negative times among thousands.',
    p2: 'A Palmerston learner who has counted the 375 bad pairs knows to check group boundaries in any generated code that compares neighbours.',
    closer: 'In our Python classes, every neat one-liner gets a sanity check.',
    blogAnchor: 'why understanding code still beats copying it'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Palmerston lessons work',
    intro: 'Every session is a live video class, joined from home in Palmerston, Rosebery or anywhere nearby.',
    cells: [
      { h3: 'Real-time teaching', p: 'Your teacher is on the call the whole time, reading code line by line.' },
      { h3: 'Territory terms', p: 'Lessons pause in Northern Territory school holidays.' },
      { h3: 'Try before paying', p: 'The first session is on us, and you receive a short written plan.' },
      { h3: 'Class size', p: 'Up to ten learners of similar level, or a private teacher.' },
      { h3: 'Two a week', p: 'Around eight lessons a month.' },
      { h3: 'India time', p: 'A 4pm Palmerston lesson is noon in India, all year.' }
    ],
    spec: {
      title: 'Darwin time',
      p: 'The IANA time zone database keeps Darwin at UTC+9:30 with no daylight saving since 1944, exactly four hours ahead of India.'
    }
  },
  fees: {
    h2: 'Palmerston fees',
    intro: 'Every learner pays the same fees.',
    first: 'The first lesson is free and includes a plan.',
    group: 'Group lessons: two a week through term, with five to ten classmates.',
    private: 'Individual lessons: the same two a week, with the teacher all to yourself.',
    closer: 'Fees are set in US dollars and begin only when the trial has chosen a course and weekly time. Holiday and missed-lesson rules are on the pricing page.'
  },
  reviewsH2: 'Family reviews on Google',
  book: {
    h2: 'Book a free Palmerston lesson',
    intro: 'Tell us the learner\'s age and interests. A child might play the team-line game; a teenager might pair every Palmerston stop.',
    success: 'Thank you. We will be in touch about a Palmerston lesson.'
  },
  faq: {
    h2: 'Palmerston coding and Python questions',
    intro: 'Questions from Palmerston families and adult learners.',
    items: [
      {
        q: 'How many people live in Palmerston?',
        a: 'The 2021 Census counted 37,247 residents in the City of Palmerston, median age 31. The ABS estimate for 2025 is 43,193.'
      },
      {
        q: 'What does itertools.pairwise do?',
        a: 'It returns overlapping pairs of neighbours from a sequence: first and second, second and third, and so on. It was added in Python 3.10.'
      },
      {
        q: 'Why did some pairs go backwards in time?',
        a: 'Because they joined the last stop of one trip to the first stop of the next. Grouping by trip before pairing removes them.'
      },
      {
        q: 'What are zero-minute hops?',
        a: 'Pairs of stops with the same scheduled minute. The timetable records whole minutes, so short hops round to zero.'
      },
      {
        q: 'Can 10-year-olds learn Python?',
        a: 'Often, especially those who have already built things in Scratch. The free lesson shows whether typing code suits them yet.'
      },
      {
        q: 'Where does the bus data come from?',
        a: 'From the Northern Territory Government\'s Darwin bus GTFS feed on data.nt.gov.au, licensed Creative Commons Attribution.'
      },
      {
        q: 'Do you have a centre in Palmerston?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Palmerston classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are groups formed?',
        a: 'By level and pace, five to ten learners each, not by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      {
        q: 'Can adults learn with you?',
        a: 'Yes. Working adults join their own groups or take private lessons, and many bring a spreadsheet they want to automate.'
      }
    ]
  },
  next: {
    eyebrow: 'More for Top End learners',
    h2: 'Explore further',
    html: 'For the wider Top End, read the <a class="cg-inline-link" href="/online-coding-and-python-classes-in-darwin">Darwin page</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-territory">Northern Territory guide</a>; children ready to leave blocks behind can start with <a class="cg-inline-link" href="/after-scratch-next-step-python-australia">our Scratch-to-Python step</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Palmerston and Darwin',
  footerPlaces: [
    { href: '/after-scratch-next-step-python-australia', label: 'After Scratch: Python' },
    { href: '/online-coding-and-python-classes-in-darwin', label: 'Darwin' },
    { href: '/coding-and-ai-classes-in-northern-territory', label: 'Northern Territory' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-plmn .cg-hero-grid { align-items: center; gap: clamp(1.15rem, 2.7vw, 2.15rem); }
.cg-root.cg-plmn .cg-hero h1 { font-weight: 700; letter-spacing: -0.032em; line-height: 1.01; }
.cg-root.cg-plmn .cg-capsule { border-left: 3px dotted var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-plmn .cg-eyebrow { letter-spacing: 0.1em; font-weight: 655; font-size: 0.78rem; }
.cg-root.cg-plmn .cg-section-head h2 { max-width: 20ch; }
.cg-root.cg-plmn .cg-grid-3 { gap: clamp(0.9rem, 2.8vw, 1.85rem); }
.cg-root.cg-plmn .cg-table caption { text-align: left; font-weight: 625; font-size: 0.87rem; }
.cg-root.cg-plmn .cg-table td:nth-child(2) { text-align: right; font-variant-numeric: tabular-nums; }
.cg-root.cg-plmn .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.55rem; }
.cg-root.cg-plmn .cg-callout { border-radius: 6px; border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'City of Palmerston (LGA72800), ABS Census 2021 QuickStats (read 13 October 2026): 37,247 people; median age 31; 9,502 families; 14,535 private dwellings; 2.8 people per household; aged 5-9 3,271 (8.8%, NT 7.2%); car as driver 14,074 (73.1%, NT 63.4%); walked 238 (1.2%, NT 7.6%); separate houses 9,348 (75.9%, NT 66.8%); technicians and trades 3,179 (16.5%, NT 13.8%); couple families with children 4,599 (48.4%). ABS ERP 2025 (ABS_ANNUAL_ERP_LGA2025, LGA 72800): 43,193. ABS LGA area 52.6559 sq km in 3 rings. Darwin bus GTFS (data.nt.gov.au, CC BY, downloaded 13 October 2026): 118 stops inside the LGA by our test; Wednesday 30 September 2026 756 trips, 376 touching Palmerston on 20 route names; Palmerston Interchange 315 departures; weekday service removed by calendar_dates on 51 of 61 weekdays from 5 October to 28 December 2026 (running 14 to 25 December). Darwin +9:30, last DST ended March 1944 (IANA 2026e). NT term dates not used (NT education sources previously blocked).',
    localProject: 'Python 3.13 itertools.pairwise over Darwin GTFS stop_times for 376 trips touching Palmerston (Wednesday 30 September 2026), sorted by (trip_id, stop_sequence): 7,762 pairs; 375 cross trip boundaries (= trips - 1), 171 with negative time. Grouped by trip: 7,387 pairs, 388 distinct segments, 135 inside Palmerston with median 1.0 minute; 1,083 zero-minute hops. Longest median segment 81 Cavenagh St to Palmerston Interchange 28 minutes. Our calculation. Script: scratchpad au/b18/a_plmn.py.',
    requiredMentions: ['43,193', '14,535', '8.8% (3,271)', '73.1% (14,074)', 'itertools.pairwise', '375 pairs', '7,387', 'Palmerston Interchange', '1,083'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Palmerston local government area (LGA72800), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA72800'
      },
      {
        claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Palmerston LGA 72800, total persons, 2025.',
        url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.72800.LGA2025.A?format=csvfilewithlabels'
      },
      {
        claim: 'ABS ASGS 2021 Local Government Areas boundary service (council outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      {
        claim: 'Northern Territory Government, Bus timetable data and geographic information - Darwin (GTFS), data.nt.gov.au, Creative Commons Attribution; feed downloaded 13 October 2026, weekday service 7 September 2026 to 22 January 2027.',
        url: 'https://data.nt.gov.au/dataset/bus-timetable-data-and-geographic-information-darwin'
      },
      { claim: 'Python documentation, itertools.pairwise (new in version 3.10).', url: 'https://docs.python.org/3/library/itertools.html#itertools.pairwise' },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Darwin at +9:30 on rule Aus, whose last daylight saving period ended in March 1944.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'The reason the feed removes weekday service on 51 dates: not claimed; reported as published.',
      'NT school term dates: not given; NT education sources could not be read directly.',
      'Bus patronage or reliability: not claimed; the feed gives scheduled times.',
      'Darwin city or NT-wide figures from the parent pages: kept off this page.',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the City of Palmerston or the NT Government.'
    ]
  }
};
