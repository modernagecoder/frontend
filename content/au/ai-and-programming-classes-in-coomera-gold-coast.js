'use strict';
// Coomera, Gold Coast (cg- district page, Australia cluster Phase 8, row 338). Keyword slug ai-and-programming-classes-in-*,
// suburb page (ABS SAL30688) in the City of Gold Coast, under Gold Coast and Queensland.
// Spine: random vs temporal train-test split on 176 City of Gold Coast traffic counts (CC BY 3.0) with suburb COOMERA, 2017 to 2026.
// Street-level model: 200 random splits give MAE 3,622 to 6,548 (mean 5,159); the honest temporal split (train before 2024, test
// 2024 to 2026) gives 6,147; a last-count baseline 6,056. Site-level: random mean 3,817 (2,541 to 5,385), temporal 3,568, last-count
// 3,385 (best). Script: scratchpad au/b18/a_coom.py and a_coom2.py. Lesson family: temporal vs random split; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'COOMERA',
    label: 'Coomera, Gold Coast',
    blurb: 'AI and programming classes for Coomera, where predicting next year\'s traffic from last year\'s shows why shuffling data before testing a model can mislead.'
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
  slug: 'ai-and-programming-classes-in-coomera-gold-coast',
  code: 'coom',
  accent: '#24663A',
  accentRationale: 'Coomera: a muted river-flat green (hue 140.0, s 0.65, v 0.40), at least 20.4 RGB from every Queensland page accent and all claimed accents, 10.2 from other AU accents and 6.3 from every other site colour; 5.6:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Coomera',
    eyebrow: 'Coomera, City of Gold Coast, Queensland',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Coomera' },
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
  routeLabel: 'Coomera, Gold Coast',
  title: 'AI and Programming Classes in Coomera, Gold Coast',
  description: 'Live online AI and programming classes for Coomera, ages 6 to adult, with a machine learning project testing traffic predictions on a time-ordered split.',
  ogDescription: 'Shuffle Coomera\'s traffic counts before testing a model and its error swings from 3,622 to 6,548 vehicles. Testing on the future gives the honest answer.',
  twitterDescription: 'AI and programming for Coomera learners, taught live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Coomera',
    description: 'Machine learning, data and programming lessons for Coomera children, teenagers and adults, placed by level after a free trial.'
  },
  h1: 'AI and programming classes in Coomera',
  capsuleQ: 'What does the Coomera AI project test?',
  capsule: 'Whether a model can predict traffic it has not seen yet. Learners use 176 council traffic counts from Coomera, taken between 2017 and 2026. Splitting them at random to test a model gives errors that jump around and can look better than reality. Training on the past and testing on 2024 to 2026 gives the honest figure, and a simple last-count rule does as well as the model.',
  lead: 'Coomera is a changing part of the northern Gold Coast, home to young families, a train station and some roads that now carry many more cars than a few years ago. The City of Gold Coast surveys its streets repeatedly and publishes every count. A list of counts taken over nine years is exactly the kind of data where a careless test fools an AI builder.',
  wa: 'Hi Modern Age Coders, we live in Coomera and would like a free AI or programming lesson.',
  picks: {
    eyebrow: 'Course picks for Coomera',
    h2: 'Machine learning, data and Python',
    intro: 'Courses for learners who want to test models properly. The trial session points to the right one.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Training, testing and fair validation of models.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Time-aware validation and baselines for forecasting.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python on public data, with dates handled properly.' },
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 12', note: 'How AI learns from the past, in simple terms.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Coomera in the 2021 Census',
      h2: 'A young suburb of families',
      intro: 'From 2021 Census QuickStats for the Coomera suburb and locality (ABS SAL30688), read on 13 October 2026.',
      body: [
        {
          kind: 'table',
          caption: 'Coomera counts',
          head: ['Measure', 'Value'],
          rows: [
            ['People', '20,225'],
            ['Median age', '29'],
            ['Families', '5,364'],
            ['Private dwellings', '6,957'],
            ['People per household', '3.1'],
            ['Bedrooms per dwelling', '3.7']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Coomera shares compared with Queensland',
          head: ['Share', 'Coomera', 'Queensland'],
          rows: [
            ['Residents aged 5 to 9', '8.9% (1,801)', '6.4%'],
            ['Residents aged 10 to 14', '8.2% (1,656)', '6.6%'],
            ['Semi-detached, terrace or townhouse', '26.1% (1,623)', '11.7%'],
            ['Drove a car to work', '65.2% (6,413)', '59.5%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Young', p: 'With a median age of 29, Coomera was younger than Queensland overall, whose median was 38.' },
            { h3: 'Families', p: 'Couples with children made up 47.5% of families, and households averaged 3.1 people.' },
            {
              h3: 'Census caveat',
              p: 'The Census was taken during the pandemic, and a growing suburb changes quickly, so 2021 figures are a snapshot of a moving target.'
            }
          ]
        },
        { kind: 'p', text: 'ABS shares are rounded and small counts nudged for privacy. We copy them as printed and never add rows into totals.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Testing a model on the future',
      intro: 'The council\'s traffic survey list records 176 counts in Coomera, from March 2017 to July 2026. The task is to predict a count from earlier counts on the same street. Learners test the same simple model two ways: by shuffling all counts and holding out a random 53, and by training on counts before 2024 and testing on the 53 taken since.',
      body: [
        {
          kind: 'table',
          caption: 'Average error in vehicles per day, predicting each held-out count (our calculation)',
          head: ['Test design', 'Street-level model', 'Site-level model'],
          rows: [
            ['200 random splits, range', '3,622 to 6,548', '2,541 to 5,385'],
            ['200 random splits, average', '5,159', '3,817'],
            ['Time-ordered split, 2024 to 2026', '6,147', '3,568'],
            ['Baseline: last earlier count', '6,056', '3,385']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Random looks rosier',
              p: 'At street level, the average random split reports about 1,000 vehicles less error than the time-ordered test, because later counts on a street leak into training.'
            },
            {
              h3: 'Random is unstable',
              p: 'Depending only on the shuffle, the reported error ranges by nearly 3,000 vehicles. A builder who ran it once could report almost any number.'
            },
            {
              h3: 'The baseline wins',
              p: 'Using the last earlier count at the same site beats averaging all past counts, with an error of 3,385. Growth makes old counts misleading.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'A growing road',
          p: 'Foxwell Road between the Old Pacific Highway and Creek Road shows why. Its counts rise from 39,153 vehicles a day in 2020 to 50,345 in 2024 and 48,285 in 2026. Any model that mixes these years without regard to time will misjudge it.'
        },
        {
          kind: 'p',
          text: 'Counts come from the City of Gold Coast Traffic Count layer, CC BY 3.0, queried on 13 October 2026, using rows whose suburb is Coomera. A street-level model pools all sites on a street; a site-level model uses street and location together. Splits, models and errors are our own calculation.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Building the test',
      h2: 'Sort by date, then split',
      intro: 'The code change is small: sort before splitting instead of shuffling. The thinking behind it is the lesson.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Load the Coomera counts, convert survey dates and plot one street over time.'],
            ['2', 'Write a predictor that averages earlier counts at the same street or site.'],
            ['3', 'Score it on 200 random splits, then on the time-ordered split.'],
            ['4', 'Add the last-count baseline and write which test matches real use.']
          ]
        },
        {
          kind: 'p',
          text: 'Step 4 asks learners to imagine using the model in 2027. Only the time-ordered test resembles that situation, so it is the number they report, even when a shuffled test once looked better. They also note how the result depends on what counts as the same place: pooling a whole street mixes quiet and busy sections.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Guess next week\'s weather from this week\'s, and see why peeking at next week is cheating.' },
            { h3: 'Teenagers', p: 'Run both splits in Python and chart how the random error jumps between shuffles.' },
            { h3: 'Adults', p: 'Apply time-ordered validation to sales, demand or staffing forecasts at work.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Coomera',
      h2: 'Trains, buses and the 2027 school year',
      intro: 'A few more Coomera details from the Translink feed and the Queensland Department of Education.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Routes', p: 'In the Translink feed of 7 October 2026, 17 route names stop inside Coomera, including Gold Coast line trains.' },
            { h3: 'Stop records', p: 'Our map test places 64 Translink stop records inside the Coomera outline.' },
            { h3: 'Term 4, 2027', p: 'Queensland state schools run Term 4 from Tuesday 5 October to Friday 10 December 2027.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Outline used',
          p: 'Coomera is the ABS suburb outline of about 24.7 square kilometres. Upper Coomera is a separate suburb and its counts are not used.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From weather guesses to forecasting',
    intro: 'A guide to where learners usually start.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Patterns over time',
        p: 'Block-code games about what comes next.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 8 to 12',
        h3: 'First data',
        p: 'Charts, averages and simple predictions in Python.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Machine learning',
        p: 'Models, splits and honest scores.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Forecasting',
        p: 'Time-aware models and statistics for work.',
        courses: ['ai-ml-masterclass-complete-college', 'statistics-probability-maths-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Do AutoML tools split data correctly?',
    intro: 'Many default to a random split unless told otherwise.',
    p1: 'Tools that train models automatically often shuffle before testing, because that suits many problems. For counts that grow over time, as on Coomera roads, that default can flatter the model and hide how unstable the score is.',
    p2: 'Coomera learners know to ask how a model was tested before trusting its score, and to compare it with a plain baseline first.',
    closer: 'Our AI classes teach learners to test models the way they will be used.',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Coomera lessons run',
    intro: 'Lessons are live online, which suits busy northern Gold Coast family schedules.',
    cells: [
      { h3: 'Live teacher', p: 'Every class is run in real time with feedback on each learner\'s code.' },
      { h3: 'Term calendar', p: 'Classes follow Queensland terms and break for holidays.' },
      { h3: 'Free first class', p: 'One trial class, then a short written recommendation.' },
      { h3: 'Groups', p: 'Five to ten per level, or private teaching.' },
      { h3: 'Two a week', p: 'Roughly eight classes a month.' },
      { h3: 'India time', p: 'A 4pm Coomera class begins at 11:30am in India.' }
    ],
    spec: {
      title: 'Steady clock',
      p: 'Queensland has not used daylight saving since March 1992 in the IANA time zone database, so the four-and-a-half-hour gap to India never changes.'
    }
  },
  fees: {
    h2: 'Coomera fees',
    intro: 'All learners pay the same fees.',
    first: 'The first class is free, followed by a plan.',
    group: 'Group: roughly eight classes monthly, fifteen to twenty learners.',
    private: 'Private: roughly eight classes monthly with one teacher.',
    closer: 'Fees are charged in US dollars, starting only after the trial has fixed a course and weekly time. The pricing page explains holidays and missed classes.'
  },
  reviewsH2: 'Families on Google',
  book: {
    h2: 'Book a free Coomera lesson',
    intro: 'Tell us the learner\'s age and interests. A child might play the weather-guessing game; a teenager might test the traffic model both ways.',
    success: 'Thank you. We will contact you about a Coomera lesson.'
  },
  faq: {
    h2: 'Coomera AI and programming questions',
    intro: 'Questions Coomera families and adult learners ask.',
    items: [
      { q: 'How many people live in Coomera?', a: 'The 2021 Census counted 20,225 people in the Coomera suburb, with a median age of 29.' },
      { q: 'What is a train-test split?', a: 'Dividing data into a part the model learns from and a part held back to check how well it predicts.' },
      {
        q: 'Why not split at random?',
        a: 'When data grow over time, a random split lets the model learn from the future. Its score can look better, and it varies a lot between shuffles.'
      },
      {
        q: 'Did the AI model beat simple rules?',
        a: 'No. Using the last earlier count at the same site gave a smaller error than averaging all earlier counts.'
      },
      { q: 'Can children learn machine learning?', a: 'Younger learners explore prediction through games; real model testing usually starts in the teens.' },
      { q: 'Where do the traffic counts come from?', a: 'From the City of Gold Coast Traffic Count layer, CC BY 3.0, queried on 13 October 2026.' },
      {
        q: 'Do you have a centre in Coomera?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Coomera classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How do groups work?',
        a: 'Fifteen to twenty learners at one level and pace, not grouped by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can adults learn AI here?', a: 'Yes. Adults join adult groups or private classes, often to forecast numbers at work.' }
    ]
  },
  next: {
    eyebrow: 'More for Gold Coast learners',
    h2: 'Read more',
    html: 'Northern Gold Coast families can also see the <a class="cg-inline-link" href="/best-coding-classes-in-gold-coast">Gold Coast page</a>, our <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">Queensland guide</a> and <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Coomera and the Gold Coast',
  footerPlaces: [
    { href: '/ai-classes-for-teens-australia', label: 'AI for teens' },
    { href: '/best-coding-classes-in-gold-coast', label: 'Gold Coast' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-for-kids-gold-coast', label: 'Kids on the Gold Coast' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-coom .cg-hero-grid { align-items: stretch; gap: clamp(1.2rem, 2.8vw, 2.3rem); }
.cg-root.cg-coom .cg-hero h1 { font-weight: 705; letter-spacing: -0.03em; line-height: 1.0; }
.cg-root.cg-coom .cg-capsule { border: 1px solid var(--cg-accent); border-radius: 6px; padding: 0.9rem 1rem; }
.cg-root.cg-coom .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.79rem; }
.cg-root.cg-coom .cg-section-head h2 { max-width: 17ch; }
.cg-root.cg-coom .cg-grid-3 { gap: clamp(1rem, 3vw, 2rem); }
.cg-root.cg-coom .cg-table caption { text-align: left; font-weight: 640; font-size: 0.87rem; }
.cg-root.cg-coom .cg-table td:nth-child(n+2) { text-align: right; font-variant-numeric: tabular-nums; }
.cg-root.cg-coom .cg-ladder-col { border-left: 6px solid var(--cg-accent); padding-left: 0.65rem; }
.cg-root.cg-coom .cg-callout { border-radius: 0; }
`,
  dossier: {
    curriculumAuthority: 'Coomera (SAL30688), ABS Census 2021 QuickStats (read 13 October 2026): 20,225 people; median age 29 (Queensland 38); 5,364 families; 6,957 private dwellings; 3.1 people per household; 3.7 bedrooms; aged 5-9 1,801 (8.9%, Queensland 6.4%); aged 10-14 1,656 (8.2%, Queensland 6.6%); semi-detached 1,623 (26.1%, Queensland 11.7%); car as driver 6,413 (65.2%, Queensland 59.5%); couple families with children 2,548 (47.5%). ABS SAL area 24.6574 sq km. Translink SEQ GTFS: 64 stop records in the SAL by our test; 17 route names incl. Gold Coast line trains. City of Gold Coast Traffic Count (CC BY 3.0, 13 October 2026): 176 counts with suburb COOMERA and a date and VPD, 21 March 2017 to 31 July 2026. Queensland 2027 Term 4 Tuesday 5 October to Friday 10 December. Brisbane time, no DST since March 1992 (IANA 2026e).',
    localProject: 'Predict VPD from earlier counts at the same street (51 streets) or site (street + location, 127 sites). Temporal split: train before 1 January 2024 (123), test 2024 to 2026 (53). Street-level mean model: temporal MAE 6,147; 200 random splits of the same size mean 5,159, range 3,622 to 6,548; last-count baseline 6,056. Site-level: temporal 3,568; random mean 3,817, range 2,541 to 5,385; last-count 3,385. Median VPD train 5,881, test 7,998. Foxwell Road between Old Pacific Highway and Creek Road: 39,153 (2020), 41,870 (2021), 44,120 (2022), 49,096 (2023), 50,345 (2024), 48,285 (2026). Our calculation. Scripts: scratchpad au/b18/a_coom.py, a_coom2.py.',
    requiredMentions: ['20,225', '6,957', '8.9% (1,801)', '26.1% (1,623)', '3,622 to 6,548', '6,147', 'Foxwell Road', '3,385', '176 council traffic counts'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Coomera suburb and locality (SAL30688), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL30688'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'City of Gold Coast open data, Traffic Count, Creative Commons Attribution 3.0, queried 13 October 2026.',
        url: 'https://data-goldcoast.opendata.arcgis.com/'
      },
      {
        claim: 'Department of Transport and Main Roads, Translink General Transit Feed Specification (GTFS) for South East Queensland, Creative Commons Attribution 4.0; feed valid 7 October to 6 December 2026.',
        url: 'https://www.data.qld.gov.au/dataset/general-transit-feed-specification-gtfs-translink'
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
      'Forecasts of future Coomera traffic: not made; the project only compares test designs.',
      'Upper Coomera counts: a separate suburb, not used.',
      'Theme parks and attendance: not claimed.',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the City of Gold Coast, Translink or the Queensland Department of Education.'
    ]
  }
};
