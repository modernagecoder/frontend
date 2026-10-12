'use strict';
// Subiaco, Perth (cg- district page, Australia cluster Phase 8, row 307). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), suburb page (ABS SAL51416, City of Subiaco) under Perth and Western Australia.
// Spine: which columns of the PTA stops file carry no information? Inside Subiaco 5 of 29 columns hold a single value
// across the 58 stop records, but across all 16,822 records only 2 do. Dropping columns on the evidence of a local
// sample would throw away 3 that matter elsewhere.
// Data: PTA-001 Stops (CC BY 4.0, data.wa.gov.au). Our calculation, scratchpad au/b14.
// Lesson family: constant (single-valued) columns, local sample vs full dataset; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'SUBIACO',
    label: 'Subiaco, Perth',
    blurb: 'Coding and AI classes for Subiaco, with a data check that finds five columns that never change in the suburb, and only two that never change anywhere.'
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
  slug: 'best-coding-and-ai-classes-in-subiaco-perth',
  code: 'sbia',
  accent: '#745239',
  accentRationale: 'Subiaco: a warm brick brown (hue 25.4), 5.66:1 on #EDE7DA; 28.5 RGB from the nearest Western Australian accent, 14.3 from any other Australian accent and 8.8 from every other site colour',
  pageType: 'city',
  place: {
    name: 'Subiaco',
    eyebrow: 'Subiaco, City of Subiaco, Western Australia',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Subiaco' },
      { type: 'AdministrativeArea', name: 'City of Subiaco' },
      { type: 'City', name: 'Perth' },
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' },
    { slug: 'online-coding-and-python-classes-in-perth-western-australia', name: 'Perth' }
  ],
  nav: [
    { label: 'Perth', href: '/online-coding-and-python-classes-in-perth-western-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Subiaco, Perth',
  title: 'Best Coding and AI Classes in Subiaco, Perth',
  description: 'Live online coding and AI classes for Subiaco learners aged 6 to 67, from Scratch and Python to data and AI projects, in groups or one to one. First lesson free.',
  ogDescription: 'A Subiaco data project: 58 stop records, 29 columns, five that never change locally and the three of those that do change across Western Australia.',
  twitterDescription: 'Coding and AI for Subiaco learners, live online with a teacher.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '12 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Subiaco',
    description: 'Level-matched online coding, data and AI lessons for children, teenagers and adults in Subiaco, Perth, taught live in English.'
  },
  h1: 'Coding and AI classes in Subiaco',
  capsuleQ: 'Where can Subiaco learners find the best coding and AI classes?',
  capsule: 'Live online lessons, in a small group or one to one, beginning with Scratch at six and moving through Python to data work and AI for teenagers and adults, using real Western Australian data. The 2021 Census counted 9,940 people in Subiaco.',
  lead: 'The state\'s public transport stops file has 29 columns. In Subiaco, five of them hold the same value on every one of the suburb\'s 58 stop records, so a tidy-minded analyst might delete all five. Run the same check on the whole state file and only two survive the cut.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in Subiaco.',
  picks: {
    eyebrow: 'Course picks for Subiaco',
    h2: 'Courses that teach careful data work',
    intro: 'The stops project needs Python, a feel for tables and the habit of testing a conclusion on more than one sample. These courses build it, and the free trial sets the level.',
    items: [
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 17',
        note: 'Python with real public tables, from loading to honest conclusions.'
      },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Cleaning and profiling data before any chart or model is built.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Core Python: lists, sets, dictionaries and files.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'First typed Python and AI projects in short steps.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Subiaco in the Census',
      h2: 'Apartments, graduates and the train',
      intro: 'Selected 2021 Census QuickStats for the suburb of Subiaco (ABS code SAL51416), alongside the Western Australian figure.',
      body: [
        {
          kind: 'table',
          caption: 'Subiaco at a glance, 2021',
          head: ['Measure', 'Subiaco'],
          rows: [
            ['Residents', '9,940'],
            ['Median age', '40'],
            ['Families', '2,549'],
            ['Private dwellings', '5,333'],
            ['People per household', '2.1']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Subiaco compared with Western Australia',
          head: ['Indicator', 'Subiaco', 'Western Australia'],
          rows: [
            ['Flats or apartments', '41.7% (1,869)', '6.5%'],
            ['Adults with a bachelor degree or higher', '56.2% (4,795)', '23.8%'],
            ['Employed people in professional jobs', '48.4% (2,676)', '22.0%'],
            ['Workers who took the train to work', '6.2% (342)', '1.8%'],
            ['Workers who took a bus to work', '8.5% (473)', '2.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Children and teenagers', p: 'Subiaco counted 446 residents aged 5 to 9, 515 aged 10 to 14 and 379 aged 15 to 19.' },
            { h3: 'Home workers', p: 'On Census day 666 employed residents, 12.0%, worked from home, against 7.5% across the state.' },
            { h3: 'A compact suburb', p: 'The ABS boundary of Subiaco takes in about 3.1 square kilometres west of the Perth city centre.' }
          ]
        },
        { kind: 'p', text: 'Census counts carry deliberate small adjustments for privacy, so we copy them unchanged and build no new totals from them.' }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Constant here, or constant everywhere?',
      intro: 'A column whose value never changes cannot separate one row from another, so it is safe to drop. The catch is the word never. We counted distinct values in all 29 columns of the stops file, first for Subiaco\'s records and then for the whole state.',
      body: [
        {
          kind: 'table',
          caption: 'Distinct values per column (our calculation)',
          head: ['Column', 'In Subiaco (58 records)', 'Statewide (16,822 records)'],
          rows: [
            ['accessible', '1', '1, every record is Y'],
            ['shelter', '1', '1, every record is Y'],
            ['status', '1', '2: 16,821 Active, 1 Planned'],
            ['area_lg', '1', '17 service areas'],
            ['sunphear', '1', '2: 16,718 records hold 0, 104 hold 1'],
            ['stoptype', '3', '8']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Truly constant',
              p: 'Two columns, accessible and shelter, read Y on all 16,822 records. Whatever they were meant to describe, in this file they cannot tell any stop from another.'
            },
            {
              h3: 'Constant only here',
              p: 'Three more look constant in Subiaco but vary statewide. Drop them on local evidence and a later model of the whole network loses the regional areas and the one planned stop.'
            },
            {
              h3: 'Varied locally',
              p: 'The other 24 columns already change inside Subiaco, from stop names to the three stop types: 50 standard, 5 rail and 3 marked Standard/CAT.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The rule we teach',
          p: 'Decide which columns to drop using the data the code will actually run on. A sample of 58 stop records from one inner suburb is uniform in ways the state is not: every Subiaco record sits in the Perth Metro area, while statewide there are 17 service areas. A check that passed in Subiaco would quietly break a statewide analysis.'
        },
        {
          kind: 'p',
          text: 'Stop records are open data from the Public Transport Authority of Western Australia. Membership of Subiaco is our point-in-boundary check, and every distinct-value count is our calculation. We describe what the columns contain, not what each was intended to mean, since the file carries no data dictionary.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Profiling a table',
      h2: 'Finding single-valued columns in code',
      intro: 'The check is short in plain Python or in pandas. What matters is where you run it.',
      body: [
        {
          kind: 'table',
          caption: 'Ways to find constant columns',
          head: ['Approach', 'Code idea', 'Statewide result'],
          rows: [
            ['Plain Python', 'len(set(row[c] for row in rows)) == 1', 'accessible, shelter'],
            ['pandas', 'df.columns[df.nunique() == 1]', 'Same two columns'],
            ['Count missing too', 'df.nunique(dropna=False)', 'Same answer here'],
            ['Compare samples', 'Run on one suburb, then the state', '5 locally, 2 statewide']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Sort a bag of buttons and notice which feature, like having holes, is the same on every button.' },
            { h3: 'Secondary learners', p: 'Profile the Subiaco records in Python, then rerun on the state file and explain the difference.' },
            { h3: 'Adults', p: 'Profile work spreadsheets on the full dataset before deleting columns that look useless in a filtered view.' }
          ]
        },
        {
          kind: 'p',
          text: 'A constant column is not always an error. Sometimes it is a placeholder for data not yet collected. The useful habit is to report it, ask what it was meant to hold, and only then decide whether to drop it.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Subiaco',
      h2: 'Three stations along one line',
      intro: 'Local markers from the stops file, our boundary checks and the WA school calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Rail platforms',
              p: 'By our boundary check, the 58 stop records inside Subiaco include five rail platform records, at Subiaco, Daglish and West Leederville stations.'
            },
            {
              h3: 'Labels and lines',
              p: 'Of those 58 records, 52 carry the suburb label Subiaco, 5 say Daglish and 1 says West Leederville, a reminder that a label and a boundary can disagree.'
            },
            { h3: 'Term 1, 2027', p: 'WA public school Term 1 of 2027 runs from Monday 1 February to Friday 9 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Subiaco alone',
          p: 'Figures here describe the suburb of Subiaco only. Bagot Road carries the most stop records, 12. Neighbouring suburbs such as Shenton Park, Jolimont and West Leederville have their own separate numbers, none added in.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting buttons to profiling data',
    intro: 'These bands are rough; a learner\'s trial class shows where they really belong.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and patterns',
        p: 'Games and puzzles that train careful observation.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python basics',
        p: 'Lists, sets and counting things in code.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Data with Python',
        p: 'Real tables, profiling and honest summaries.',
        courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Data analysis',
        p: 'Cleaning, profiling and modelling data for work or study.',
        courses: ['data-analysis-mastery-course-college', 'data-science-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can clean the table. Which table did it look at?',
    intro: 'Whatever it was given. AI tools profile the data in front of them, and a filtered sample is easy to hand over by mistake.',
    p1: 'Give an assistant the Subiaco records and ask it to remove useless columns, and it will reasonably remove five. The advice is correct for those 58 rows and wrong for the file the analysis was meant to cover.',
    p2: 'Learners who have run the check at both scales ask the follow-up question every time: is this sample the whole story? That one question is the difference between using an AI tool and trusting it blindly.',
    closer: 'In Subiaco, the learner who checks the full dataset keeps the columns that matter.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Subiaco lessons run',
    intro: 'Lessons happen over live video, so nobody travels anywhere.',
    cells: [
      { h3: 'Hands on the keys', p: 'Subiaco learners write every line themselves while the teacher watches and questions.' },
      { h3: 'WA school terms', p: 'Plans follow the Western Australian school year and break for its holidays.' },
      { h3: 'Try before paying', p: 'One complete lesson at no cost, then a plain suggestion of what fits.' },
      { h3: 'Groups of five to ten', p: 'Matched by level and pace, or one to one.' },
      { h3: 'Two classes a week', p: 'Fixed weekly times, about eight lessons a month.' },
      { h3: 'Teachers in India', p: 'A 5pm Subiaco lesson starts at 2:30pm India time, all year.' }
    ],
    spec: {
      title: 'Perth time, all year',
      p: 'Western Australia last used daylight saving in a trial that ended in March 2009 (IANA time zone database), and India does not use it, so lesson times never shift.'
    }
  },
  fees: {
    h2: 'Subiaco class fees',
    intro: 'Three prices for every family.',
    first: 'The first lesson is free and ends with a clear suggestion.',
    group: 'A month of group classes, about eight lessons, with five to ten learners at one level.',
    private: 'About eight lessons a month with one teacher for one learner.',
    closer: 'Subiaco families pay in US dollars, only after the trial and once a course and time are agreed. The pricing page covers school holidays, missed lessons and switching between group and private.'
  },
  reviewsH2: 'Google reviews from our families and students',
  book: {
    h2: 'Book a first Subiaco lesson',
    intro: 'Let us know how old the learner is and what they like doing. Teenagers could open by profiling the stops file at two scales, and younger children with a Scratch sorting game.',
    success: 'Thank you. We will be in touch soon about a Subiaco lesson.'
  },
  faq: {
    h2: 'Questions from Subiaco',
    intro: 'What Subiaco parents and adult learners usually want to know.',
    items: [
      {
        q: 'How many people live in Subiaco, Perth?',
        a: 'The 2021 Census QuickStats record 9,940 residents in the suburb of Subiaco, with 2,549 families and a median age of 40.'
      },
      {
        q: 'What is a constant column?',
        a: 'A column in a table that holds the same value in every row. It cannot distinguish one row from another, so it adds nothing to a filter, a chart or a machine learning model.'
      },
      {
        q: 'How do you find constant columns in pandas?',
        a: 'Count the distinct values in each column with df.nunique() and list the columns where the count is 1. Run it on the full dataset, not a filtered sample.'
      },
      {
        q: 'What did the Subiaco stops check find?',
        a: 'Across the 58 stop records inside Subiaco, 5 of 29 columns were constant. Across all 16,822 records in the state file, only 2 were, so 3 would have been dropped wrongly.'
      },
      {
        q: 'How young can a Subiaco child begin?',
        a: 'Six is a comfortable start, using Scratch blocks. Most children move on to typing Python somewhere around nine.'
      },
      {
        q: 'Can under-18s take Claude-based courses?',
        a: 'No. Courses that use Claude admit adults of 18 and older; school students learn on other AI tools instead.'
      },
      {
        q: 'Is there a classroom in Subiaco?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do lessons cost for Subiaco learners?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'Who is in each group?',
        a: 'Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      {
        q: 'Can a Subiaco group class cover Copilot Studio?',
        a: 'No. Copilot Studio lessons run privately, one learner and one teacher; group classes write their agents in Python.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Perth and Western Australia',
    h2: 'More for Subiaco learners',
    html: 'See <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">the Perth page</a> for the whole city and <a class="cg-inline-link" href="/coding-classes-for-kids-perth">coding for Perth children</a> for younger learners. <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">The Western Australia guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Subiaco and Perth',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-classes-for-kids-perth', label: 'Kids in Perth' },
    { href: '/ai-and-programming-classes-in-mandurah', label: 'Mandurah' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' }
  ],
  personalityCss: `
.cg-root.cg-sbia .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-sbia .cg-hero h1 { font-weight: 650; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-sbia .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.6rem 0 0.6rem 1.1rem; }
.cg-root.cg-sbia .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-sbia .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.012em; }
.cg-root.cg-sbia .cg-grid-3 { gap: clamp(0.8rem, 2.1vw, 1.6rem); }
.cg-root.cg-sbia .cg-table caption { font-weight: 640; text-align: left; }
.cg-root.cg-sbia .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sbia .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-sbia .cg-callout { border-left-width: 5px; border-radius: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Subiaco (SAL51416), City of Subiaco. ABS Census 2021 QuickStats (read 12 October 2026): 9,940 people; median age 40; 2,549 families; 5,333 private dwellings; 2.1 per household; flats 1,869 (41.7%, WA 6.5%); bachelor or higher 4,795 (56.2%, WA 23.8%); professionals 2,676 (48.4%, WA 22.0%); train 342 (6.2%, WA 1.8%); bus 473 (8.5%, WA 2.9%); worked at home 666 (12.0%, WA 7.5%); aged 5-9 446; 10-14 515; 15-19 379. ABS SAL area 3.1292 sq km; council verified by ABS LGA point query (Subiaco). PTA-001 stops (CC BY 4.0, read 12 Oct 2026): 58 records inside the SAL polygon (Standard 50, Rail 5, Standard/CAT 3); rail platform records at Subiaco Stn (1, 2), Daglish Stn (1, 2), West Leederville Stn (2); suburb labels SUBIACO 52, DAGLISH 5, WEST LEEDERVILLE 1; 53 records statewide labelled SUBIACO; Bagot Rd 12 records. WA 2027 Term 1: Monday 1 February to Friday 9 April. Perth: no daylight saving since March 2009 (IANA).',
    localProject: 'Constant columns. PTA-001, 29 attribute columns. Subiaco 58 records: 5 single-valued (status, accessible, shelter, area_lg, sunphear). Statewide 16,822 records: 2 single-valued (accessible Y x 16,822; shelter Y x 16,822); status Active 16,821 / Planned 1; area_lg 17 values; sunphear 0 x 16,718, 1 x 104; stoptype 8 values (Subiaco 3). Column meanings not documented in the catalogue; page describes contents only.',
    requiredMentions: ['5,333', '1,869', '379', 'Daglish', 'Bagot Road', '16,822', '16,821 Active', '17 service areas', 'sunphear'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Subiaco suburb and locality (SAL51416), read 12 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL51416'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) Suburbs and Localities and Local Government Areas boundary services, used for our point-in-boundary checks and areas.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Public Transport Authority of Western Australia, Stops (PTA-001), Creative Commons Attribution 4.0, published on data.wa.gov.au; 16,822 stop records read from the SLIP map service on 12 October 2026.',
        url: 'https://catalogue.data.wa.gov.au/dataset/public-transport-authority-stops-bus-stops'
      },
      {
        claim: 'pandas documentation, DataFrame.nunique: count distinct elements per column, with the dropna option.',
        url: 'https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.nunique.html'
      },
      {
        claim: 'WA Department of Education, future term dates: 2027 public school terms as gazetted.',
        url: 'https://www.education.wa.edu.au/future-term-dates'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: Zone Australia/Perth follows rule AW, whose last daylight saving period ended in March 2009.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'That every Subiaco stop has a shelter or is accessible: not claimed; the page only says those columns hold Y on every record.',
      'The meaning of the sunphear and similar coded columns: not claimed; no data dictionary is published with the file.',
      'Passenger or service numbers at Subiaco stops: not claimed.',
      'Names of schools: none named on this page.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by cluster rules.',
      'Any link with the City of Subiaco, the Public Transport Authority or the WA Department of Education.'
    ]
  }
};
