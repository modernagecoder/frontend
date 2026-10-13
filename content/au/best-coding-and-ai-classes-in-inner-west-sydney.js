'use strict';
// Inner West, Sydney (cg- district page, Australia cluster Phase 8, row 231). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), council-area page (ABS LGA14170) under Sydney and New South Wales.
// Spine: index numbers on the ten L1 light rail stops from Lilyfield to Dulwich Hill. Pick October 2024 as the base
// month and five stops are below 100 in August 2026; pick November 2024 (the lowest month at all ten) and every stop
// is above 118. Chaining the monthly ratios reproduces the fixed-base index exactly; averaging the monthly percentage
// changes and compounding them overstates every stop (Hawthorne 130.5 against an actual 109.5).
// Data: Transport for NSW station usage file, light rail tap-on entries, October 2024 to August 2026 (23 months),
// each stop on its own, never summed. Census: ABS QuickStats Inner West LGA14170. Script scratchpad au/b4/inwt2.py.
// Lesson family: base-period index numbers, fixed base vs chained vs averaged growth; 0 location-page hits, unclaimed.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'INNER WEST',
    label: 'Inner West, Sydney',
    blurb: 'Coding and AI for the Inner West, with a project on how the choice of base month rewrites a light rail growth story.'
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
  slug: 'best-coding-and-ai-classes-in-inner-west-sydney',
  code: 'inwt',
  accent: '#42369E',
  accentRationale: 'Inner West: a slate indigo (hue 247, softer than Northern Beaches), chosen by hand at least 10 RGB units from all 1,272 accents in content, the shared stylesheets and the claims log, 9.4:1 on white and 7.7:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Inner West',
    eyebrow: 'Inner West Council area, Sydney, New South Wales',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Sydney' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'best-coding-classes-in-sydney', name: 'Sydney' }
  ],
  nav: [
    { label: 'Sydney', href: '/best-coding-classes-in-sydney' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Inner West, Sydney',
  title: 'Best Coding and AI Classes in the Inner West, Sydney',
  description: 'Live online coding and AI classes for Inner West children, teenagers and adults: Scratch, Python, data and machine learning, in small groups or one to one.',
  ogDescription: 'Inner West coding and AI classes, with a project on ten L1 light rail stops: one change of base month turns a fall at Dulwich Hill into a rise of 23%.',
  twitterDescription: 'Inner West coding and AI classes, live online with a teacher, first class free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for the Inner West',
    description: 'Level-matched online coding, Python, data and AI lessons for children, teenagers and adults in the Inner West council area, taught live in English.'
  },
  h1: 'Coding and AI classes in the Inner West',
  capsuleQ: 'Where do Inner West learners find the best coding and AI classes?',
  capsule: 'In live online classes where a teacher works through real data and real code beside the learner, from Scratch at six to Python and machine learning for teenagers and adults. The Inner West is a young, terrace-lined council area: the 2021 Census counted 182,818 residents, and 20,072 homes, 27.1%, were semi-detached, terrace or townhouses.',
  lead: 'Index numbers turn counts into a story: set one month to 100 and every other month becomes "up" or "down" from it. Done on the light rail stops between Lilyfield and Dulwich Hill, that story depends almost entirely on which month you pick as 100. Our students learn to pick it on purpose and to say so.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in the Inner West.',
  picks: {
    eyebrow: 'Course picks for the Inner West',
    h2: 'Courses for learners who want numbers to mean something',
    intro: 'Each course below trains the habits used in the light rail project. The free trial checks the level first, and payment waits until course and time are agreed.',
    items: [
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Ratios, percentages and growth explained by writing short programs.' },
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 17',
        note: 'Load a public transport file, build index numbers and chart them honestly.'
      },
      {
        course: 'ai-ml-masterclass-teens',
        band: 'Ages 14 to 18',
        note: 'From trends and averages to models, with care about what a starting point does to a result.'
      },
      {
        course: 'data-analysis-mastery-course-college',
        band: 'University and adult',
        note: 'Spreadsheets to Python for reporting growth at work without misleading anyone.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Inner West in the Census',
      h2: 'Terraces, flats and many graduates',
      intro: 'Figures for the Inner West local government area (ABS code LGA14170) from the 2021 Census QuickStats, set against New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Inner West, 2021 Census headline counts',
          head: ['Headline', 'Inner West'],
          rows: [
            ['Residents', '182,818'],
            ['Median age', '38'],
            ['Families', '46,892'],
            ['Private dwellings', '85,118'],
            ['Average people per household', '2.3']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Inner West against NSW and Australia',
          head: ['Measure', 'Inner West', 'NSW', 'Australia'],
          rows: [
            ['Semi-detached, terrace or townhouse homes', '27.1% (20,072)', '11.7%', '12.6%'],
            ['Flats or apartments', '42.4% (31,418)', '21.7%', '14.2%'],
            ['Residents aged 30 to 34', '9.9% (18,130)', '7.3%', '7.3%'],
            ['Adults with a bachelor degree or higher', '48.2% (75,306)', '27.8%', '26.3%'],
            ['Workers employed as professionals', '41.0% (41,893)', '25.8%', '24.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'At home that day', p: 'Census day fell in the August 2021 lockdown, when 53,838 employed residents, 52.7%, worked from home.' },
            { h3: 'Train commuters', p: '3,339 workers, 3.3%, took the train to work that day, against 1.7% across the state.' },
            { h3: 'Driving', p: '21,050 workers, 20.6%, drove themselves to work, under half the state rate of 43.1%.' }
          ]
        },
        {
          kind: 'p',
          text: 'Each Census cell is slightly adjusted by the bureau for privacy, so we quote these figures exactly as published and do not combine them.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Up 23% or down 11%? It depends on the base month',
      intro: 'We took monthly tap-on entries at the ten L1 Dulwich Hill Line stops from Lilyfield to Dulwich Hill, published by Transport for NSW for October 2024 to August 2026, and turned each stop into an index number twice.',
      body: [
        {
          kind: 'table',
          caption: 'Tap-on entries per month and two index numbers for August 2026 (Transport for NSW counts; indices are ours)',
          head: ['Stop', 'Oct 2024', 'Nov 2024', 'Aug 2026', 'Index, Oct 2024 = 100', 'Index, Nov 2024 = 100'],
          rows: [
            ['Lilyfield', '8,626', '7,956', '8,508', '98.6', '106.9'],
            ['Leichhardt North', '8,361', '6,338', '8,454', '101.1', '133.4'],
            ['Hawthorne', '8,373', '6,337', '9,169', '109.5', '144.7'],
            ['Marion', '7,663', '5,668', '7,887', '102.9', '139.1'],
            ['Taverners Hill', '5,715', '4,357', '5,297', '92.7', '121.6'],
            ['Lewisham West', '14,351', '10,480', '14,342', '99.9', '136.9'],
            ['Waratah Mills', '5,393', '4,079', '5,595', '103.7', '137.2'],
            ['Arlington', '11,454', '8,708', '11,531', '100.7', '132.4'],
            ['Dulwich Grove', '9,904', '7,550', '8,972', '90.6', '118.8'],
            ['Dulwich Hill', '16,357', '11,780', '14,490', '88.6', '123.0']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'October as the base', p: 'Five of the ten stops sit below 100 in August 2026. Dulwich Hill reads 88.6, a fall of about 11%.' },
            {
              h3: 'November as the base',
              p: 'November 2024 was the quietest month at every one of the ten stops. From that base, all ten are above 100, nine of them above 118, and Dulwich Hill reads 123.0.'
            },
            { h3: 'Same data', p: 'Nothing in the counts changed between the two columns. Only the month set to 100 moved, by four weeks.' }
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Three ways to measure October 2024 to August 2026 (our calculation)',
          head: ['Stop', 'Fixed base', 'Monthly ratios multiplied together', 'Average monthly change, compounded'],
          rows: [
            ['Hawthorne', '109.5', '109.5', '130.5'],
            ['Marion', '102.9', '102.9', '118.4'],
            ['Dulwich Grove', '90.6', '90.6', '101.5'],
            ['Dulwich Hill', '88.6', '88.6', '102.4']
          ]
        },
        {
          kind: 'callout',
          h3: 'Why averaging growth goes wrong',
          p: 'Multiplying the 22 monthly ratios always lands exactly on the fixed-base figure, because the middle months cancel. Averaging the percentage changes first does not: a 20% fall followed by a 20% rise averages to no change at all, yet leaves the count 4% lower than it started. That is how Dulwich Hill appears to grow when it actually fell.'
        },
        {
          kind: 'p',
          text: 'The counts are tapped entries only, so trips with no tap are missing, and the indices, comparisons and the choice of stops are ours. We have not checked which council each stop sits in; they are simply the western end of the L1 line.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'In Python',
      h2: 'Index numbers in a handful of lines',
      intro: 'Learners write the calculation themselves before reaching for a library, so they can see each choice the library would otherwise hide.',
      body: [
        {
          kind: 'table',
          caption: 'The calculations, written out',
          head: ['Idea', 'Python', 'Watch out for'],
          rows: [
            ['Fixed-base index', '[100 * v / counts[base] for v in counts]', 'A base month that is unusually high or low'],
            ['Chained index', 'running product of counts[i] / counts[i - 1]', 'A missing month breaks the chain'],
            ['Averaged growth', 'mean of the monthly percentage changes', 'Never compound it to report total growth']
          ]
        },
        {
          kind: 'p',
          text: 'Price indices, school results and company reports all use base periods. The question a careful reader asks is always the same: why this base, and what does the picture look like from another one?'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Track a class plant\'s height in Scratch and see how "it doubled" depends on the day you start measuring.' },
            { h3: 'Teenagers', p: 'Build both indices for all ten stops, chart them, and write two honest headlines from the same data.' },
            { h3: 'Adults', p: 'Rebuild a work dashboard\'s growth figures from raw counts and check which base they quietly use.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Schools and terms',
      h2: 'Public schools since the 1860s',
      intro: 'From the NSW government schools file and the 2027 calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: '37 government schools',
              p: 'The NSW schools file lists 37 government schools in the council area, among them 24 primary, 9 secondary and 3 infants schools.'
            },
            {
              h3: 'The earliest',
              p: 'Balmain Public School records its first teacher in 1860, ahead of Ashfield Public School and Leichhardt Public School in 1862.'
            },
            { h3: 'From the 1880s', p: 'Kegworth Public School in Leichhardt (1887) and Dulwich Hill Public School (1885) both date from the 1880s.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Term 1, 2027',
          p: 'Eastern division schools begin on Wednesday 3 February 2027 and Term 1 ends on Friday 9 April. Our lessons pause for the NSW holidays.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From measuring a plant to reporting growth honestly',
    intro: 'Treat the ages as rough guides; the trial lesson finds where each learner should begin.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and counting',
        p: 'Games that count, compare and keep score, built in blocks.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python and percentages',
        p: 'Python basics while working out ratios and percentage change.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 14 to 18',
        h3: 'Data and AI',
        p: 'Public datasets, charts and first machine learning models.',
        courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Analysis for work',
        p: 'Reporting, automation and models built on clean numbers.',
        courses: ['data-analysis-mastery-course-college', 'artificial-intelligence-complete-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI chart tool picks a base month for you. Does an Inner West student need to care?',
    intro: 'Yes, because the tool will not tell you what the other months would have said.',
    p1: 'Ask an AI assistant to "show growth at Dulwich Hill" and it will often start the chart from the first month in the file, or from whichever month makes a tidy line. Either choice is defensible. Neither is mentioned in the answer, and the headline can flip from a fall to a rise.',
    p2: 'A learner who has built both indices by hand knows to ask which month is 100, to try another, and to multiply ratios rather than average them. Those questions stop a misleading chart before it reaches a report.',
    closer: 'In the Inner West or anywhere else, the student who checks the base month is the one whose charts can be trusted.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lilyfield or Dulwich Hill, the class comes to you',
    intro: 'Every lesson is live online, so there is no stop to reach and no timetable to fit around.',
    cells: [
      { h3: 'Learn at home', p: 'A laptop and a quiet table are enough; the teacher shares code and screen live.' },
      { h3: 'NSW calendar', p: 'Planning tracks NSW syllabus stages, with no lessons in the state school holidays.' },
      { h3: 'Trial first', p: 'The free first class is a real lesson, closing with a course, level and time suggestion.' },
      { h3: 'Fifteen to twenty learners', p: 'Groups are formed by level and pace, mixing Inner West learners with others.' },
      { h3: 'Two lessons weekly', p: 'Two set lessons a week, roughly eight a month, with planned breaks agreed early.' },
      { h3: 'Teachers in India', p: 'A 5:30pm Inner West lesson in daylight saving time is 12 noon in India; after the clocks go back, it is 1pm there.' }
    ],
    spec: {
      title: 'Sydney clock changes',
      p: 'Daylight saving starts on Sunday 4 October 2026 and finishes on Sunday 4 April 2027. India stays on one time all year; we always agree times in Sydney time.'
    }
  },
  fees: {
    h2: 'Inner West class fees',
    intro: 'Everything is covered by three amounts.',
    first: 'Your first class is free and ends with a clear recommendation.',
    group: 'A month of group lessons, usually eight, with fifteen to twenty learners at one level.',
    private: 'Roughly eight one-to-one lessons every month.',
    closer: 'Families outside India are invoiced in US dollars, the same for every Inner West household. Nothing is charged until after the trial, when course and time are set; holidays, absences and switching formats are explained on the pricing page.'
  },
  reviewsH2: 'Google reviews from families and students',
  book: {
    h2: 'Book a first Inner West class',
    intro: 'Give us the learner\'s age and what they enjoy. An eight-year-old could start with a Scratch scorekeeping game; a university student could start with the light rail indices.',
    success: 'Thank you. Our team will get in touch shortly about an Inner West class.'
  },
  faq: {
    h2: 'Inner West coding and AI questions',
    intro: 'The questions Inner West families and adult learners ask most.',
    items: [
      {
        q: 'How many people live in the Inner West council area?',
        a: 'The 2021 Census QuickStats for the Inner West local government area record 182,818 residents, 46,892 families and a median age of 38.'
      },
      {
        q: 'What is an index number?',
        a: 'A way to compare values by setting one period to 100. If a stop had 8,373 entries in the base month and 9,169 later, the later index is 100 times 9,169 divided by 8,373, which is 109.5.'
      },
      {
        q: 'Why does the base month matter so much?',
        a: 'Because every later value is divided by it. November 2024 was the quietest month at all ten L1 stops we studied, so using it as the base makes every stop look as if it grew strongly.'
      },
      {
        q: 'Is a chained index different from a fixed-base one?',
        a: 'For a single series with no gaps, no. Multiplying each month\'s ratio to the month before gives exactly the fixed-base figure. Averaging the monthly percentage changes is what gives a different, wrong answer.'
      },
      {
        q: 'Can a six-year-old learn coding online?',
        a: 'Yes. Six- to eight-year-olds start with Scratch in short, hands-on lessons with plenty of talking and building.'
      },
      { q: 'Do you teach Copilot Studio agents?', a: 'Only one to one. Group classes learn to build agents in Python.' },
      {
        q: 'Do you have a centre in the Inner West?',
        a: 'No. All lessons are live online, we have no premises in Australia, and the phone number we show is an Indian number.',
        boiler: true
      },
      {
        q: 'How much are coding classes for Inner West learners?',
        a: 'The first lesson is free. After that, group lessons cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How many learners share a group?',
        a: 'Fifteen to twenty, matched by level, pace and goals rather than age or suburb. One-to-one lessons are offered if no group suits the learner\'s time.',
        boiler: true
      },
      { q: 'Do you teach adults?', a: 'Yes, in adult groups or one to one, often focused on data and reporting skills for work.' }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Inner West learners',
    html: 'Inside the council area, <a class="cg-inline-link" href="/ai-and-programming-classes-in-marrickville-sydney">Marrickville</a> has a page of its own; to the south-west is <a class="cg-inline-link" href="/ai-and-programming-classes-in-bankstown-sydney">Bankstown</a>. The <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales guide</a> cover everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Inner West and Sydney',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-marrickville-sydney', label: 'Marrickville' },
    { href: '/ai-and-programming-classes-in-bankstown-sydney', label: 'Bankstown' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-inwt .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-inwt .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.1; }
.cg-root.cg-inwt .cg-capsule { background: color-mix(in srgb, var(--cg-accent) 6%, transparent); padding: 0.9rem 1.1rem; border-radius: 6px; }
.cg-root.cg-inwt .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-inwt .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.012em; }
.cg-root.cg-inwt .cg-grid-3 { gap: clamp(0.9rem, 2.3vw, 1.8rem); }
.cg-root.cg-inwt .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-inwt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-inwt .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-inwt .cg-callout { border-left-width: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Inner West, ABS Census 2021 QuickStats, Inner West local government area LGA14170 (read 10 October 2026): 182,818 people; median age 38; 46,892 families; 85,118 private dwellings; 2.3 people per household; semi-detached, row or terrace 27.1% (20,072); flats or apartments 42.4% (31,418); aged 30-34 9.9% (18,130); bachelor degree or higher 48.2% (75,306); professionals 41.0% (41,893); worked at home 52.7% (53,838, lockdown Census day); train 3.3%; drove to work 20.6% (21,050). Transport for NSW station usage file (light rail Entry rows), ten L1 stops Lilyfield to Dulwich Hill, October 2024 to August 2026; November 2024 the minimum month at all ten; Dulwich Hill 16,357 (Oct 2024), 11,780 (Nov 2024), 14,490 (Aug 2026). NSW government schools file (Date_extracted 2026-10-02): 37 schools in the LGA (24 primary, 9 secondary, 3 infants); Balmain Public School 1860; Ashfield and Leichhardt Public Schools 1862; Kegworth Public School 1887; Dulwich Hill Public School 1885. NSW 2027 Eastern division Term 1: 3 February to 9 April. Sydney daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Base-period index numbers for ten L1 light rail stops, each stop separately (no totals). Index for August 2026: base October 2024, five stops below 100 (Dulwich Hill 88.6, Dulwich Grove 90.6, Taverners Hill 92.7, Lilyfield 98.6, Lewisham West 99.9); base November 2024, all ten 106.9 to 144.7 (all above 118 except Lilyfield 106.9). Chained monthly ratios equal the fixed-base index exactly; arithmetic mean of 22 monthly changes compounded overstates every stop (Hawthorne 130.5 vs 109.5; Marion 118.4 vs 102.9; Dulwich Grove 101.5 vs 90.6; Dulwich Hill 102.4 vs 88.6). Script: scratchpad au/b4/inwt2.py.',
    requiredMentions: ['182,818', '46,892', '85,118', '31,418', '20,072', '75,306', '41,893', '53,838', '16,357', 'Kegworth Public School'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Inner West local government area (LGA14170).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA14170'
      },
      {
        claim: 'Transport for NSW, Train, Metro and Light Rail Station Monthly Usage from November 2024, based on Opal batch data (Creative Commons Attribution), file updated 15 September 2026.',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution), Date_extracted 2026-10-02.',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      { claim: 'NSW Department of Education, 2027 term dates (Eastern division).', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'A combined total of entries across the ten stops: not printed; each stop is indexed on its own.',
      'Why November 2024 was the quietest month: not explained; no cause was checked.',
      'Which council area each light rail stop lies in: not checked or claimed.',
      'Passenger numbers including untapped trips: not available; the file counts tap-on entries only.',
      'Names of single-sex schools and schools for specific purposes: not used.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Inner West Council, Transport for NSW, the NSW Department of Education or the ABS.'
    ]
  }
};
