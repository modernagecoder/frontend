'use strict';
// Woden, Canberra (cg- district page, Australia cluster Phase 8, row 330). Keyword slug ai-and-programming-classes-in-*,
// district page (ABS SA3 80109 Woden Valley) under Canberra and the ACT.
// Spine: item-item collaborative filtering on ACT Registered Vehicles by Make, Model and Suburb (1 September 2026; counts of 10 or
// less suppressed): 118 suburbs x 348 make-model-emission items, 6,936 observed cells. Neighbour count k chosen on 4,498 cells in
// Belconnen, Tuggeranong and Gungahlin (k=5, MAE 6.60). Held out on Woden's 590 cells: CF MAE 6.52 vehicles, popularity baseline 9.60,
// suburb mean 10.12. Script: scratchpad au/b16/a_wodn.py. Lesson family: item-item collaborative filtering; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'WODEN',
    label: 'Woden, Canberra',
    blurb: 'AI and programming classes for Woden, with a recommender-style model that guesses how many of each car model a Woden suburb has, and beats a popularity guess.'
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
  slug: 'ai-and-programming-classes-in-woden-canberra',
  code: 'wodn',
  accent: '#8F445F',
  accentRationale: 'Woden: a muted plum (hue 338.4, s 0.52, v 0.56), at least 35.1 RGB from every ACT and Canberra page accent, 12.5 from other AU accents and 7.5 from every other site colour; 5.4:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Woden',
    eyebrow: 'Woden Valley district, south-west Canberra, ACT',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Woden Valley' },
      { type: 'City', name: 'Canberra' },
      { type: 'AdministrativeArea', name: 'Australian Capital Territory' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-australian-capital-territory', name: 'Australian Capital Territory' },
    { slug: 'vibe-coding-and-ai-agents-classes-in-canberra', name: 'Canberra' }
  ],
  nav: [
    { label: 'Canberra', href: '/vibe-coding-and-ai-agents-classes-in-canberra' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Woden, Canberra',
  title: 'AI and Programming Classes in Woden, Canberra',
  description: 'Live online AI and programming classes for Woden Valley, ages 6 to adult, with a collaborative filtering project built on ACT vehicle registration data.',
  ogDescription: 'Hide one number about Woden cars and predict it from the rest: collaborative filtering misses by 6.52 vehicles, a popularity guess by 9.60.',
  twitterDescription: 'AI and programming for Woden learners, live online with a free first lesson.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Woden',
    description: 'Machine learning, Python and programming lessons for Woden Valley children, teenagers and adults, placed by level and taught live.'
  },
  h1: 'AI and programming classes in Woden',
  capsuleQ: 'What AI technique does the Woden project use?',
  capsule: 'Collaborative filtering, the idea behind many "people who liked this also liked that" recommendations. Learners hide one count from the ACT vehicle registration table, such as how many of one car model are registered in Phillip, and predict it from the suburb\'s other models. The model misses by 6.52 vehicles on average; guessing from overall popularity misses by 9.60.',
  lead: 'Woden Valley is a compact district of 12 suburbs, from Curtin and Hughes to Mawson and Torrens, with Woden Town Park in Phillip at its middle. ACT Government open data lists registered vehicles by make, model and suburb, which gives a Woden learner a real table of preferences to model.',
  wa: 'Hi Modern Age Coders, we live in Woden and would like a free AI or programming lesson.',
  picks: {
    eyebrow: 'Course picks for Woden',
    h2: 'AI, data and Python',
    intro: 'Courses that suit the recommender project. A free trial lesson decides the level.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Similarity, prediction and honest validation.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Recommenders, baselines and model selection.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Tables, matrices and charts in Python.' },
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 12', note: 'How recommendations work, explained with games.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Woden Valley in the Census',
      h2: 'Graduates, apartments and buses',
      intro: 'Figures for the Woden Valley statistical area (ABS SA3 80109) from 2021 Census QuickStats, read on 13 October 2026, with the 2025 ABS estimate.',
      body: [
        {
          kind: 'table',
          caption: 'Woden Valley counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents, 2021 Census', '39,279'],
            ['Estimated residents, 2025', '41,600'],
            ['Median age', '39'],
            ['Families', '10,505'],
            ['Private dwellings', '17,065'],
            ['People per household', '2.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Woden shares compared with the ACT',
          head: ['Share', 'Woden Valley', 'ACT'],
          rows: [
            ['Bachelor degree or higher', '50.4% (16,385)', '42.9%'],
            ['Flat or apartment', '21.3% (3,258)', '19.4%'],
            ['Bus to work', '5.4% (1,130)', '3.6%'],
            ['Managers among workers', '18.9% (3,927)', '17.9%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Degrees', p: 'Half of Woden residents aged 15 and over held a bachelor degree or higher, well above the territory share.' },
            { h3: 'Transport', p: 'Buses carried 5.4% of Woden workers to work, and 5.1% walked, both above the ACT shares.' },
            { h3: 'Two figures', p: 'The 2021 Census count and the ABS 2025 estimate use different methods, so they appear side by side without subtraction.' }
          ]
        },
        {
          kind: 'p',
          text: 'The 2021 Census took place during the pandemic, so journey-to-work answers reflect that week. ABS shares are rounded and small counts slightly adjusted; parts can miss totals, and we print the published values.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Predicting a hidden count',
      intro: 'The registration table, dated 1 September 2026, has a row for each suburb, make, model and emissions band with more than ten vehicles. Laid out as a grid, that is 118 suburbs by 348 vehicle types, and only 6,936 of the 41,064 cells have a published number. Collaborative filtering predicts a hidden cell from similar vehicle types the same suburb does have.',
      body: [
        {
          kind: 'table',
          caption: 'Average error predicting each of Woden\'s 590 published counts with it hidden (our calculation)',
          head: ['Method', 'Mean absolute error'],
          rows: [
            ['Item-item collaborative filtering, 5 neighbours', '6.52 vehicles'],
            ['Popularity: the type\'s ACT share times the suburb\'s total', '9.60 vehicles'],
            ['The suburb\'s average count', '10.12 vehicles']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'How it works',
              p: 'Two vehicle types are similar if suburbs that register many of one also register many of the other. The prediction blends the suburb\'s counts of the five most similar types.'
            },
            {
              h3: 'Choosing five',
              p: 'The number of neighbours was picked on 4,498 cells in Belconnen, Tuggeranong and Gungahlin before Woden was touched. Five gave 6.60 there; fifty gave 8.68.'
            },
            { h3: 'Biggest cell', p: 'Woden\'s largest published count is one popular Toyota model in a single emissions band in Phillip: 172 vehicles.' }
          ]
        },
        {
          kind: 'callout',
          h3: 'The suppression problem',
          p: 'Counts of ten or fewer are not published, so a blank cell can mean none or a handful. The model treats blanks as zero when measuring similarity, and it is only tested on cells above ten. Learners write both limits into their report, because a recommender trained on censored data can look better than it is.'
        },
        {
          kind: 'p',
          text: 'Data come from the ACT Registered Vehicles by Make, Model and Suburb dataset on data.act.gov.au, licensed CC BY 4.0, downloaded on 13 October 2026. Woden suburbs are assigned by our test of ABS suburb outlines; the similarities, predictions and errors are our own calculation in NumPy.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Building the recommender',
      h2: 'A matrix, cosine similarity and a fair test',
      intro: 'The core is short; the care goes into what counts as a fair test.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Pivot the 6,936 rows into a suburbs by vehicle-type matrix with blanks as zero.'],
            ['2', 'Compute item-item cosine similarities from every suburb except the one being tested.'],
            ['3', 'Hide each Woden cell in turn, predict it, and record the absolute error.'],
            ['4', 'Compare with two baselines and choose k on other districts, never on Woden.']
          ]
        },
        {
          kind: 'p',
          text: 'Step 2 matters: if the test suburb helps compute the similarities, the model has seen the answer. Step 4 matters just as much. Choosing the neighbour count by looking at Woden\'s own errors would make 6.52 look better than it deserves, so the choice is made elsewhere and simply applied here.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Guess a friend\'s favourite snack from the snacks people with similar tastes chose.' },
            { h3: 'Teenagers', p: 'Build the matrix in NumPy, code the predictor and present the baselines fairly.' },
            { h3: 'Adults', p: 'Prototype product or content recommendations and test them against popularity first.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Woden',
      h2: 'Trees, street art and the 2027 calendar',
      intro: 'Local details from ACT Government open data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Public trees', p: 'Woden suburbs hold 73,127 public tree records by our count, 33,672 labelled native and 24,507 exotic.' },
            { h3: 'Street art', p: 'Sixteen artworks are listed in the district, half of them street art.' },
            { h3: 'Second half of 2027', p: 'ACT Term 3 in 2027 runs from Tuesday 20 July to Friday 24 September.' }
          ]
        },
        {
          kind: 'spec',
          title: 'District used',
          p: 'Woden Valley is the ABS statistical area of about 28.6 square kilometres; 12 named suburbs fall inside it by our test.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From snack guesses to recommenders',
    intro: 'Ages are a starting guide only.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Likes and patterns',
        p: 'Block-code games about sorting and matching tastes.',
        courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course']
      },
      {
        band: 'Ages 8 to 12',
        h3: 'First data',
        p: 'Tables, counting and simple predictions in Python.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Machine learning',
        p: 'Similarity, baselines and fair testing.',
        courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Applied AI',
        p: 'Recommenders and evaluation for work.',
        courses: ['ai-ml-masterclass-complete-college', 'statistics-probability-maths-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Is building a recommender still worth learning?',
    intro: 'Yes, because knowing how one fails is worth more than calling one.',
    p1: 'Library code will give you a recommender in minutes. It will not tell you that the input hides every count of ten or fewer, or that tuning on the test district inflates the score.',
    p2: 'A Woden learner who has met both problems in real data will ask the right questions of any AI system that recommends, ranks or predicts.',
    closer: 'Our AI classes start with the data and end with an honest comparison.',
    blogAnchor: 'the case for learning to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Woden lessons, live online',
    intro: 'Classes run over video, so learners join from any Woden suburb.',
    cells: [
      { h3: 'Taught live', p: 'A teacher runs each lesson and checks work as it happens.' },
      { h3: 'ACT terms', p: 'Lessons follow the school terms and rest in holidays.' },
      { h3: 'Free first lesson', p: 'A trial lesson, then a short written plan.' },
      { h3: 'Groups', p: 'Fifteen to twenty learners per level, or one-to-one.' },
      { h3: 'Schedule', p: 'Two lessons a week, about eight a month.' },
      { h3: 'India hours', p: 'A 6:30pm Woden lesson is 1pm in India while daylight saving runs.' }
    ],
    spec: { title: 'Summer time', p: 'Canberra runs on Sydney time in the IANA database; in 2026 to 2027, daylight saving lasts from 4 October to 4 April.' }
  },
  fees: {
    h2: 'Woden class fees',
    intro: 'All learners pay the same fees.',
    first: 'Lesson one is free, followed by a plan.',
    group: 'Group lessons: about eight a month, fifteen to twenty learners.',
    private: 'Private lessons: about eight a month with one teacher.',
    closer: 'Fees are in US dollars and start only once the trial has set a course and weekly time. The pricing page explains holidays and missed lessons.'
  },
  reviewsH2: 'Google reviews from families',
  book: {
    h2: 'Book a free Woden lesson',
    intro: 'Tell us the learner\'s age and interests. A child might play the snack-guessing game; a teenager might build the vehicle recommender.',
    success: 'Thank you. We will be in touch about a Woden lesson.'
  },
  faq: {
    h2: 'Woden AI and programming questions',
    intro: 'Questions from Woden families and adult learners.',
    items: [
      {
        q: 'How many people live in Woden Valley?',
        a: 'The 2021 Census counted 39,279 residents in the district, median age 39. The ABS estimate for 2025 is 41,600.'
      },
      {
        q: 'What is collaborative filtering?',
        a: 'A way to predict a missing value from the pattern of other values, such as estimating one suburb\'s count of a car model from models that tend to appear together.'
      },
      {
        q: 'Did the AI beat simple guesses?',
        a: 'Yes on this data: 6.52 vehicles average error against 9.60 for a popularity guess, with the neighbour count chosen on other districts.'
      },
      { q: 'What does suppression mean here?', a: 'Counts of ten or fewer are not published, so missing cells are uncertain rather than zero.' },
      { q: 'Is this suitable for teenagers?', a: 'Yes, for confident Python learners. Younger children explore the same idea with guessing games.' },
      {
        q: 'Which suburbs are in Woden Valley?',
        a: 'Our test places 12 named suburbs in the district, including Phillip, Curtin, Hughes, Mawson and Torrens.'
      },
      {
        q: 'Do you have a centre in Woden?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Woden classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are groups decided?',
        a: 'By level and pace, fifteen to twenty learners, not by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can adults study AI here?', a: 'Yes. Adults learn in adult groups or privately, often with data from their own work.' }
    ]
  },
  next: {
    eyebrow: 'More for Canberra learners',
    h2: 'Explore further',
    html: 'Woden learners can continue with the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canberra">Canberra page</a>, the territory-wide <a class="cg-inline-link" href="/coding-and-ai-classes-in-australian-capital-territory">ACT guide</a> and <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teenagers</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Woden and Canberra',
  footerPlaces: [
    { href: '/ai-classes-for-teens-australia', label: 'AI for teens' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canberra', label: 'Canberra' },
    { href: '/coding-and-ai-classes-in-australian-capital-territory', label: 'ACT' },
    { href: '/coding-classes-for-kids-canberra', label: 'Kids in Canberra' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-wodn .cg-hero-grid { align-items: stretch; gap: clamp(1.2rem, 2.8vw, 2.3rem); }
.cg-root.cg-wodn .cg-hero h1 { font-weight: 690; letter-spacing: -0.03em; line-height: 1.01; }
.cg-root.cg-wodn .cg-capsule { border: 1px solid var(--cg-accent); border-radius: 8px; padding: 0.9rem 1rem; }
.cg-root.cg-wodn .cg-eyebrow { letter-spacing: 0.105em; font-weight: 690; font-size: 0.79rem; }
.cg-root.cg-wodn .cg-section-head h2 { max-width: 17ch; }
.cg-root.cg-wodn .cg-grid-3 { gap: clamp(1rem, 3vw, 2rem); }
.cg-root.cg-wodn .cg-table caption { text-align: left; font-weight: 650; font-size: 0.87rem; }
.cg-root.cg-wodn .cg-table td:last-child { font-variant-numeric: tabular-nums; }
.cg-root.cg-wodn .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.65rem; }
.cg-root.cg-wodn .cg-callout { border-radius: 0; }
`,
  dossier: {
    curriculumAuthority: 'Woden Valley SA3 80109, ABS Census 2021 QuickStats (read 13 October 2026): 39,279 people; median age 39; 10,505 families; 17,065 private dwellings; 2.4 people per household; bachelor or higher 16,385 (50.4%, ACT 42.9%); flat or apartment 3,258 (21.3%, ACT 19.4%); bus to work 1,130 (5.4%, ACT 3.6%); walked 5.1% (ACT 4.0%); managers 3,927 (18.9%, ACT 17.9%). ABS ERP 2025 (SA3 80109): 41,600. ABS SA3 area 28.6004 sq km; 12 named suburbs by our SAL-centroid test. ACT open data (CC BY 4.0, 13 October 2026): tree records 73,127 (33,672 native, 24,507 exotic); artworks 16 (8 street art). ACT 2027 Term 3 Tuesday 20 July to Friday 24 September. Canberra = Australia/Sydney (IANA 2026e).',
    localProject: 'ACT Registered Vehicles by Make, Model and Suburb (data_as_at 2026-09-01; counts of 10 or less suppressed): 6,936 rows, 118 suburbs x 348 make-model-emissions items = 41,064 cells, 6,936 observed. Leave-one-cell-out on Woden 12 suburbs, 590 observed cells (median 17): item-item cosine CF (similarities from other suburbs) k=5 MAE 6.52; popularity baseline (item ACT share x suburb remaining total) 9.60; suburb mean 10.12. k chosen on 4,498 cells in Belconnen, Tuggeranong, Gungahlin: k=3 6.61, 5 6.60, 10 6.69, 20 7.03, 50 8.68. Largest Woden cell: Phillip, Toyota Corolla, CO2 - B, 172. Our calculation. Script: scratchpad au/b16/a_wodn.py.',
    requiredMentions: ['Woden Town Park', '17,065', '50.4% (16,385)', '5.4% (1,130)', '6.52 vehicles', '9.60', '41,064', '4,498 cells', '73,127'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Woden Valley statistical area level 3 (SA3 80109), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/80109'
      },
      {
        claim: 'ABS Data API, Estimated Resident Population by ASGS 2021 regions (ABS_ANNUAL_ERP_ASGS2021), SA3 80109 Woden Valley, 2025.',
        url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_ASGS2021,1.2.0/ERP.SA3.80109.A?startPeriod=2024&format=csvfilewithlabels'
      },
      {
        claim: 'ABS ASGS 2021 Statistical Area Level 3 boundary service (district outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SA3/MapServer'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines, used to place each suburb in a district).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'ACT Government open data, ACT Registered Vehicles by Make, Model and Suburb (data.act.gov.au h4vn-y97q), Creative Commons Attribution 4.0, data as at 1 September 2026, counts of 10 or less suppressed, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/h4vn-y97q'
      },
      {
        claim: 'ACT Government open data, ACTGOV Tree Assets (data.act.gov.au 9qch-rvqr), Creative Commons Attribution 4.0, grouped counts by suburb queried 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/9qch-rvqr'
      },
      {
        claim: 'ACT Government open data, ACTGOV Artwork Assets (data.act.gov.au a69k-qah8), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/a69k-qah8'
      },
      {
        claim: 'ACT Government open data, ACT Education Public Holidays and Term Dates (data.act.gov.au 4kcq-44ad): 2027 Term 1 begins Monday 1 February (new students), Canberra Day Monday 8 March, Term 3 Tuesday 20 July to Friday 24 September, Term 4 Tuesday 12 October to Friday 17 December.',
        url: 'https://www.data.act.gov.au/d/4kcq-44ad'
      },
      {
        claim: 'IANA time zone database 2026e, backward file: Australia/Canberra links to Australia/Sydney.',
        url: 'https://data.iana.org/time-zones/tzdb/backward'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: rule AN, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Totals of registered vehicles by suburb or district: not given; suppressed rows make any sum a lower bound, and parts are never summed into totals.',
      'Claims about which suburbs own more electric or low-emission vehicles: not made.',
      'Woden Valley suburb (SAL) Census figures: not used; the page uses the SA3 district.',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the ACT Government or Access Canberra.'
    ]
  }
};
