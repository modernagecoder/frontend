'use strict';
// Surfers Paradise, Gold Coast (cg- district page, Australia cluster Phase 8, row 337). Keyword slug online-coding-and-python-classes-in-*,
// suburb page (ABS SAL32702) in the City of Gold Coast, under Gold Coast and Queensland.
// Spine: datetime.strptime with several formats on time tokens in City of Gold Coast parking sign text (CC BY 3.0). 854 signs lie
// inside the ABS outline by our test (suburb field says Surfers Paradise for 570); 955 time tokens in 437 signs; "%I%p" parses 953,
// "%I.%M%p" the other 2, "%I:%M%p" none; 17 distinct windows, 18 signs with overnight windows (end before start), 5 ranges whose start
// has no AM/PM. Script: scratchpad au/b18/a_srfp.py. Lesson family: strptime with several formats; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'SURFERS PARADISE',
    label: 'Surfers Paradise, Gold Coast',
    blurb: 'Online coding and Python classes for Surfers Paradise, where 955 times on parking signs teach how datetime.strptime reads text, and where it cannot.'
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
  slug: 'online-coding-and-python-classes-in-surfers-paradise-gold-coast',
  code: 'srfp',
  accent: '#416491',
  accentRationale: 'Surfers Paradise: a muted surf blue (hue 213.8, s 0.55, v 0.57), at least 20.8 RGB from every Queensland page accent and all claimed accents, 11.0 from other AU accents and 6.5 from every other site colour; 4.9:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Surfers Paradise',
    eyebrow: 'Surfers Paradise, City of Gold Coast, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Surfers Paradise' },
      { type: 'AdministrativeArea', name: 'City of Gold Coast' },
      { type: 'City', name: 'Gold Coast' },
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' },
    { slug: 'best-coding-classes-in-gold-coast', name: 'Gold Coast' }
  ],
  nav: [
    { label: 'Gold Coast', href: '/best-coding-classes-in-gold-coast' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Surfers Paradise, Gold Coast',
  title: 'Online Coding and Python Classes in Surfers Paradise, Gold Coast',
  description: 'Live online coding and Python classes for Surfers Paradise, ages 6 to adult, with a Python project that reads the times on 854 real parking signs.',
  ogDescription: 'Parking signs in Surfers Paradise hold 955 times. One strptime format reads 953 of them; the last two, and the overnight windows, teach the rest.',
  twitterDescription: 'Python and coding for Surfers Paradise learners, live online with a free first lesson.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Surfers Paradise',
    description: 'Python and programming lessons for Surfers Paradise children, teenagers and adults, matched by level after a free trial.'
  },
  h1: 'Online coding and Python classes in Surfers Paradise',
  capsuleQ: 'What Python skill does the Surfers Paradise project build?',
  capsule: 'Turning text into times. Learners pull every time, such as 9AM or 9.30AM, out of the council\'s parking sign list for Surfers Paradise and convert each with datetime.strptime. One format handles 953 of the 955 times. The two left over, the windows that run past midnight and the ranges missing AM on the start time all teach careful parsing.',
  lead: 'Surfers Paradise is the Gold Coast\'s high-rise beachfront suburb. Four in five homes are apartments, 8.4% of workers walked to work in 2021, and the streets carry hundreds of parking signs. The City of Gold Coast publishes every sign with its exact wording, which is a perfect messy dataset for Python learners.',
  wa: 'Hello Modern Age Coders, I live in Surfers Paradise and would like a free Python lesson.',
  picks: {
    eyebrow: 'Course picks for Surfers Paradise',
    h2: 'Python, from first strings to real data',
    intro: 'Courses for learners who want their code to cope with untidy text. The trial session decides the starting point.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Strings, dates and regular expressions on real files.' },
      {
        course: 'python-programming-masterclass-zero-to-advanced-college',
        band: 'University and adult',
        note: 'The datetime module and robust parsing in depth.'
      },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First typed Python, including clocks and times.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Cleaning text columns before analysis.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Surfers Paradise in the Census',
      h2: 'A suburb of apartments and walkers',
      intro: 'From the 2021 Census QuickStats for Surfers Paradise (ABS SAL32702), read on 13 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Surfers Paradise counts',
          head: ['Measure', 'Value'],
          rows: [
            ['People', '26,412'],
            ['Median age', '42'],
            ['Families', '5,891'],
            ['Private dwellings', '18,947'],
            ['People per household', '1.9'],
            ['Bedrooms per dwelling', '2.1']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Surfers Paradise shares beside Queensland',
          head: ['Share', 'Surfers Paradise', 'Queensland'],
          rows: [
            ['Flat or apartment', '81.2% (9,277)', '12.5%'],
            ['Walked to work', '8.4% (1,054)', '2.6%'],
            ['Drove a car to work', '49.4% (6,222)', '59.5%'],
            ['Residents aged 5 to 9', '2.4% (631)', '6.4%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Apartments', p: 'More than four in five Surfers Paradise dwellings were flats or apartments, against one in eight across Queensland.' },
            { h3: 'Small households', p: 'Households averaged 1.9 people, and couples with children were only 21.4% of families.' },
            { h3: 'A note on 2021', p: 'The Census fell during the pandemic, so commuting shares describe that particular week.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau rounds its percentages and adjusts small counts for privacy, so we reproduce its numbers without summing rows into totals.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Reading the times on 854 signs',
      intro: 'The council\'s list records each parking sign\'s wording, such as "8P 6AM - 6PM MON - FRI". Our map test finds 854 signs inside the Surfers Paradise outline, although the list\'s own suburb field names Surfers Paradise for only 570 of them. Learners extract every time token with a regular expression and parse it with datetime.strptime.',
      body: [
        {
          kind: 'table',
          caption: 'Parsing 955 time tokens from 437 signs (our run, Python 3.13)',
          head: ['Formats tried, in order', 'Tokens parsed'],
          rows: [
            ['%I%p, for 9AM', '953'],
            ['plus %I:%M%p, for 9:30AM', '953, the colon form never appears'],
            ['plus %I.%M%p, for 9.30AM', '955, all of them']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Try formats in order',
              p: 'strptime raises ValueError when text does not match. A small function tries each format in turn and returns the first success, or None.'
            },
            {
              h3: 'Overnight windows',
              p: 'Of 17 different time windows, three run past midnight, such as 6PM to 6AM. They appear on 18 signs, and a check that the end comes after the start wrongly rejects them.'
            },
            {
              h3: 'Missing AM',
              p: 'Five signs write ranges like 7.30-9.30am, with the suffix only at the end. The start time is not caught as a token at all and needs its own rule.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The most common windows',
          p: 'Once parsed, the windows are easy to count: 9am to 7pm appears on 181 signs, 9am to 5pm on 156 and 6am to 6pm on 64. Learners then answer a real question, such as which signs apply at 8pm, by comparing parsed times rather than strings.'
        },
        {
          kind: 'p',
          text: 'Sign wording comes from the City of Gold Coast Parking Signs layer, licensed CC BY 3.0 and queried on 13 October 2026. Placing signs inside the ABS outline is our own point-in-polygon test; tokens, formats and counts are our script\'s output. Tariff signs exist in the list but prices are left out here.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Writing the parser',
      h2: 'strptime, a format list and honest failures',
      intro: 'The core is a loop over format strings. The craft is in what happens when none match.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Load the signs, keep those inside Surfers Paradise and print twenty texts.'],
            ['2', 'Write a regular expression for times and count the token shapes.'],
            ['3', 'Write parse_time(token, formats) with try and except ValueError.'],
            ['4', 'Pair start and end times, flag overnight windows and list the signs with missing suffixes.']
          ]
        },
        {
          kind: 'p',
          text: 'Learners keep a list of every token that fails to parse instead of skipping it. Here that list ends empty after the third format, but on other suburbs it will not, and the habit of looking at failures is the point. They also compare the suburb field with the map test and write one sentence about why 292 signs inside the outline carry another suburb or none.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Read clock times written in different ways and put them on a 24-hour line.' },
            { h3: 'Teenagers', p: 'Build the parser, test it on all 955 tokens and handle overnight windows.' },
            { h3: 'Adults', p: 'Parse dates and times from forms, logs and exports at work without losing rows.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Surfers Paradise',
      h2: 'Trams, buses and the 2027 calendar',
      intro: 'More local details from the Translink feed and the Queensland Department of Education.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Eight routes', p: 'In the Translink feed of 7 October 2026, eight route names stop inside the suburb, including the G:link tram.' },
            { h3: 'Stop records', p: 'Our map test places 60 Translink stop records inside the Surfers Paradise outline.' },
            { h3: 'Term 3, 2027', p: 'Queensland state schools run Term 3 from Monday 12 July to Friday 17 September 2027.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'Surfers Paradise is the ABS suburb outline of about 5.8 square kilometres; signs and stops are placed in it by our point-in-polygon test.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From clock faces to datetime',
    intro: 'Ages are a guide; the free session confirms the rung.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Blocks first',
        p: 'Scratch projects with timers and clocks.',
        courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Typed Python',
        p: 'Strings, loops and simple time maths.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Python with data',
        p: 'Regular expressions and dates on real text.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Python at work',
        p: 'Robust parsing and automation.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Python and AI',
    h2: 'Could an AI read the signs instead?',
    intro: 'Often, and with no way of knowing which ones it got wrong.',
    p1: 'A language model asked to read sign times will cope with most. It may quietly misread 7.30-9.30am or treat 6PM to 6AM as impossible, and there is no error to catch.',
    p2: 'A parser written with strptime fails loudly on anything it does not understand. Learners who have built one know exactly which signs their numbers rest on.',
    closer: 'In our Python classes, explicit rules come first and AI helps around them.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Surfers Paradise lessons, online',
    intro: 'Classes happen over video, so learners stay in their apartment or house rather than finding parking.',
    cells: [
      { h3: 'Taught live', p: 'A teacher runs every session in real time and reads code as it is typed.' },
      { h3: 'School terms', p: 'We follow Queensland term dates and pause for holidays.' },
      { h3: 'First session free', p: 'Try a lesson at no cost and get a written plan.' },
      { h3: 'Groups', p: 'Fifteen to twenty learners per level, or private sessions.' },
      { h3: 'Twice weekly', p: 'About eight sessions every month.' },
      { h3: 'India hours', p: 'A 6pm Surfers Paradise session starts at 1:30pm in India.' }
    ],
    spec: {
      title: 'One time zone all year',
      p: 'Queensland\'s last daylight saving period ended in March 1992, as the IANA time zone database records, so session times never shift against India.'
    }
  },
  fees: {
    h2: 'Surfers Paradise fees',
    intro: 'Every learner pays the same fees.',
    first: 'The first session is free, with a plan to follow.',
    group: 'Group: about eight sessions a month, fifteen to twenty learners.',
    private: 'Private: about eight sessions a month, one teacher.',
    closer: 'Fees are set in US dollars and begin once the trial has agreed a course and weekly slot. Holiday and absence rules appear on the pricing page.'
  },
  reviewsH2: 'Reviews on Google',
  book: {
    h2: 'Book a free Surfers Paradise lesson',
    intro: 'Tell us the learner\'s age and interests. A child might line up clock times; a teenager might parse every sign in the suburb.',
    success: 'Thank you. We will be in touch about a Surfers Paradise lesson.'
  },
  faq: {
    h2: 'Surfers Paradise coding and Python questions',
    intro: 'Questions from families and adult learners in Surfers Paradise.',
    items: [
      { q: 'How many people live in Surfers Paradise?', a: 'The 2021 Census counted 26,412 people in the suburb, median age 42.' },
      {
        q: 'What does datetime.strptime do?',
        a: 'It turns text into a date or time using a format string, such as %I%p for 9AM, and raises ValueError if the text does not match.'
      },
      { q: 'Why try several formats?', a: 'Real text mixes styles. On these signs most times look like 9AM, but two look like 9.30AM.' },
      { q: 'How do you handle 6PM to 6AM?', a: 'By treating a window whose end is earlier than its start as running past midnight, instead of rejecting it.' },
      { q: 'Is this suitable for young children?', a: 'They start with clocks and simple programs; parsing real data suits teenagers and adults.' },
      { q: 'Where does the sign data come from?', a: 'From the City of Gold Coast Parking Signs layer, CC BY 3.0, queried on 13 October 2026.' },
      {
        q: 'Do you have a centre in Surfers Paradise?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Surfers Paradise classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who are the classmates?',
        a: 'Fifteen to twenty learners at the same level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Do adults learn Python with you?', a: 'Yes. Adults have their own groups or private sessions, often to tidy data from their work.' }
    ]
  },
  next: {
    eyebrow: 'More for Gold Coast learners',
    h2: 'Further pages',
    html: 'Beachside learners can also visit the <a class="cg-inline-link" href="/best-coding-classes-in-gold-coast">Gold Coast page</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland guide</a> and <a class="cg-inline-link" href="/after-scratch-next-step-python-australia">moving from Scratch to Python</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Surfers Paradise and the Gold Coast',
  footerPlaces: [
    { href: '/after-scratch-next-step-python-australia', label: 'After Scratch: Python' },
    { href: '/best-coding-classes-in-gold-coast', label: 'Gold Coast' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-gold-coast', label: 'Kids on the Gold Coast' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-srfp .cg-hero-grid { align-items: center; gap: clamp(1.05rem, 2.4vw, 2rem); }
.cg-root.cg-srfp .cg-hero h1 { font-weight: 695; letter-spacing: -0.031em; line-height: 1.02; }
.cg-root.cg-srfp .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-srfp .cg-eyebrow { letter-spacing: 0.085em; font-weight: 690; font-size: 0.81rem; }
.cg-root.cg-srfp .cg-section-head h2 { max-width: 21ch; }
.cg-root.cg-srfp .cg-grid-3 { gap: clamp(1rem, 2.7vw, 1.8rem); }
.cg-root.cg-srfp .cg-table caption { text-align: left; font-weight: 615; font-size: 0.9rem; }
.cg-root.cg-srfp .cg-table td:first-child { font-family: monospace; font-size: 0.9rem; }
.cg-root.cg-srfp .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.55rem; }
.cg-root.cg-srfp .cg-callout { border-radius: 7px; border-left-width: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Surfers Paradise (SAL32702), ABS Census 2021 QuickStats (read 13 October 2026): 26,412 people; median age 42; 5,891 families; 18,947 private dwellings; 1.9 people per household; 2.1 bedrooms; flat or apartment 9,277 (81.2%, Queensland 12.5%); walked to work 1,054 (8.4%, Queensland 2.6%); car as driver 6,222 (49.4%, Queensland 59.5%); aged 5-9 631 (2.4%, Queensland 6.4%); couple families with children 1,261 (21.4%). ABS SAL area 5.7961 sq km. Translink SEQ GTFS (feed 7 October to 6 December 2026): 60 stop records in the SAL by our test; 8 route names (70, 705, 731, 738, 740, 741, 747, L1). City of Gold Coast Parking Signs (CC BY 3.0, 13 October 2026): 8,496 signs; 854 inside the SAL by our test; SUBURB field SURFERS PARADISE 570; 292 inside with another or blank suburb. Queensland 2027 Term 3 Monday 12 July to Friday 17 September. Brisbane time, no DST since March 1992 (IANA 2026e).',
    localProject: 'Python 3.13 on 854 signs inside Surfers Paradise: regex for times finds 955 tokens in 437 signs (shapes 9PM 467, 9AM 462, 99PM 17, 99AM 7, 9.99AM 2). datetime.strptime formats: %I%p parses 953; adding %I:%M%p still 953; adding %I.%M%p 955. 17 distinct windows: 09:00-19:00 181 signs, 09:00-17:00 156, 06:00-18:00 64; 3 windows end before start (18:00-06:00, 19:00-06:00, 19:00-07:00) on 18 signs. 5 ranges with no suffix on the start (6-10AM, 7.30-9.30am). Tariff wording excluded. Our script. Script: scratchpad au/b18/a_srfp.py.',
    requiredMentions: ['26,412', '18,947', '81.2% (9,277)', '8.4% (1,054)', '955 time tokens', '%I.%M%p', '854 signs', '7.30-9.30am', 'datetime.strptime'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Surfers Paradise suburb and locality (SAL32702), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL32702'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'City of Gold Coast open data, Parking Signs, Creative Commons Attribution 3.0, queried 13 October 2026.',
        url: 'https://data-goldcoast.opendata.arcgis.com/'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
      },
      {
        claim: 'Python documentation, datetime.strptime and format codes (%I, %M, %p).',
        url: 'https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior'
      },
      {
        claim: 'Queensland Department of Education, future school dates: 2027 Term 1 Wednesday 27 January to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September; Term 4 Tuesday 5 October to Friday 10 December.',
        url: 'https://education.qld.gov.au/about-us/calendar/future-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Brisbane follows rule AQ, whose last daylight saving period ended in March 1992.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Parking tariffs, fines or enforcement: excluded (money).',
      'Whether any sign is current on the street: not claimed; the list is the council\'s record.',
      'Surfers Paradise tourist numbers: not claimed.',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the City of Gold Coast, Translink or the Queensland Department of Education.'
    ]
  }
};
