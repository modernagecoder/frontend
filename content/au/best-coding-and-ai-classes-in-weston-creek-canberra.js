'use strict';
// Weston Creek, Canberra (cg- district page, Australia cluster Phase 8, row 331). Keyword slug best-coding-and-ai-classes-in-*,
// district page (ABS SA3 80108 Weston Creek) under Canberra and the ACT.
// Spine: systematic samples (every k-th record by objectid) vs simple random samples of the 46,396 ACT Government tree records in
// Weston Creek suburbs, estimating the street-tree share (true 60.4%). At k=100 (464 trees) systematic estimates span 57.3% to 64.9%
// (sd 1.54 points) against random samples' sd 2.29; the list is clustered (lag-1 autocorrelation 0.67 for exotic labels, 5,597 runs vs
// 16,955 expected), which is why systematic wins here; at k=500 on exotic share it does not. Script: scratchpad au/b16/a_wscr.py.
// Lesson family: systematic sampling and periodicity; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'WESTON CREEK',
    label: 'Weston Creek, Canberra',
    blurb: 'Coding and AI classes for Weston Creek, with a sampling project on 46,396 public tree records: is checking every hundredth tree as good as picking at random?'
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
  slug: 'best-coding-and-ai-classes-in-weston-creek-canberra',
  code: 'wscr',
  accent: '#1E6712',
  accentRationale: 'Weston Creek: a muted eucalypt green (hue 111.5, s 0.83, v 0.40), at least 24.4 RGB from every ACT and Canberra page accent, 12.5 from other AU accents and 8.1 from every other site colour; 5.7:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Weston Creek',
    eyebrow: 'Weston Creek district, west Canberra, ACT',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Weston Creek' },
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
  routeLabel: 'Weston Creek, Canberra',
  title: 'Best Coding and AI Classes in Weston Creek, Canberra',
  description: 'Live online coding and AI classes for Weston Creek learners aged 6 to adult, with a sampling project on 46,396 ACT Government tree records from the district.',
  ogDescription: 'Audit every hundredth Weston Creek tree or 464 random ones? On this list, every hundredth wins, and the reason is how the records are ordered.',
  twitterDescription: 'Coding and AI for Weston Creek learners, live online, with the first lesson free.',
  ogImageCourse: 'statistics-probability-maths-course',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Weston Creek',
    description: 'Coding, data and AI lessons for Weston Creek children, teenagers and adults, matched by level and taught live over video.'
  },
  h1: 'Coding and AI classes in Weston Creek',
  capsuleQ: 'What should Weston Creek parents look for in the best coding and AI classes?',
  capsule: 'Projects where the answer depends on thinking, not just typing. In ours, learners estimate how many of Weston Creek\'s 46,396 public tree records are street trees by checking only a sample. Taking every hundredth record beats picking at random here. Working out why, and when it would fail, is the real skill.',
  lead: 'Weston Creek is a small, settled district of eight suburbs in Canberra\'s west, from Weston and Rivett to Duffy and Holder. Its median age at the 2021 Census was 41, and more than four in five homes were separate houses. The ACT Government\'s tree list covers its streets and parks record by record, which suits a lesson on sampling.',
  wa: 'Hi Modern Age Coders, I am in Weston Creek and would like a free coding or AI lesson.',
  picks: {
    eyebrow: 'Course picks for Weston Creek',
    h2: 'Data, statistics and AI',
    intro: 'Courses that suit the sampling project. A free trial lesson sets the starting level.',
    items: [
      { course: 'statistics-probability-maths-course', band: 'University and adult', note: 'Sampling, variation and what an estimate can promise.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python on public data, with every estimate checked.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'How training samples shape what models learn.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Counting and estimating puzzles for younger learners.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Weston Creek in numbers',
      h2: 'Houses, managers and home offices',
      intro: 'From the 2021 Census QuickStats for the Weston Creek statistical area (ABS SA3 80108), read on 13 October 2026, alongside the ABS estimate for 2025.',
      body: [
        {
          kind: 'table',
          caption: 'Weston Creek district counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents, 2021 Census', '24,630'],
            ['Estimated residents, 2025', '25,070'],
            ['Median age', '41'],
            ['Families', '6,816'],
            ['Private dwellings', '9,945'],
            ['Bedrooms per dwelling', '3.4']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Weston Creek shares beside the ACT',
          head: ['Share', 'Weston Creek', 'ACT'],
          rows: [
            ['Separate houses', '81.7% (7,477)', '63.2%'],
            ['Worked at home', '12.6% (1,505)', '10.9%'],
            ['Managers among workers', '20.3% (2,433)', '17.9%'],
            ['Walked to work', '0.9% (104)', '4.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Family homes', p: 'Only 398 Weston Creek dwellings, 4.3%, were flats or apartments, against nearly one in five across the territory.' },
            { h3: 'Children', p: 'Residents aged 5 to 9 numbered 1,716, or 7.0%, a little above the ACT share.' },
            {
              h3: 'Stable size',
              p: 'The district counted 24,630 people in 2021; the ABS 2025 estimate is 25,070. The two are measured differently and are not subtracted.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'Because the Census was held in the pandemic, working-at-home and travel figures may be unusual for that week. ABS shares are rounded and small counts lightly perturbed, so we copy each figure rather than add rows.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Every hundredth tree or a random handful?',
      intro: 'Suppose an inspector can check only 464 of Weston Creek\'s 46,396 tree records and must estimate the share that are street trees. The true share, from the full list, is 60.4%. One plan takes every 100th record in the order the data is stored; the other draws 464 at random. Learners run both plans many times and compare how far they stray.',
      body: [
        {
          kind: 'table',
          caption: 'Estimates of the street-tree share (true 60.4%; our calculation, 2,000 random draws per size)',
          head: ['Plan', 'Trees checked', 'Spread of estimates'],
          rows: [
            ['Every 10th record, all 10 starting points', '4,640', '59.6% to 60.9%'],
            ['Random 4,640', '4,640', 'about 0.7 points either way (1 sd)'],
            ['Every 100th record, all 100 starting points', '464', '57.3% to 64.9%, sd 1.5 points'],
            ['Random 464', '464', 'sd 2.3 points']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why systematic wins',
              p: 'Records come in runs: neighbouring records in the list tend to be alike. Taking every k-th record spreads the sample across all the runs, like a free form of stratifying.'
            },
            {
              h3: 'Measured clustering',
              p: 'For native and exotic labels, neighbouring records agree far more than chance: 5,597 runs where a random order would give about 16,955.'
            },
            {
              h3: 'Not always',
              p: 'Estimating the exotic share with every 500th record, systematic and random plans are about equally variable. The advantage depends on the question and the gap.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The periodic trap',
          p: 'If a list repeated a pattern every 100 records, say a planting plan of 99 natives then one exotic, every 100th record would hit the same spot each time and miss the truth badly. That case is a labelled simulation, not Weston Creek data, and learners build it to see the failure for themselves.'
        },
        {
          kind: 'p',
          text: 'Records come from the ACTGOV Tree Assets dataset on data.act.gov.au, licensed CC BY 4.0, read on 13 October 2026 for the eight Weston Creek suburbs. 7,188 records have no native or exotic label. Samples, runs and spreads are our own calculation.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'In Python',
      h2: 'Slicing with a step, then measuring the spread',
      intro: 'A systematic sample is one line of Python: rows[start::k]. The lesson is in testing every start and comparing with random draws.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Sort the 46,396 records by their database id and compute the true street-tree share.'],
            ['2', 'Take every k-th record for each starting point and list the estimates.'],
            ['3', 'Draw 2,000 random samples of the same size and compare the spread.'],
            ['4', 'Count runs of matching labels, then build a periodic list that breaks the method.']
          ]
        },
        {
          kind: 'p',
          text: 'Step 4 turns a result into understanding. Learners see that the method is not magic: it borrows strength from the way records happen to be ordered. Shuffle the list first and the advantage vanishes; sort it by street and it grows. Every claim about the method comes with the ordering it depends on.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Estimate red beads in a long necklace by checking every tenth bead, then by random picks.' },
            { h3: 'Teenagers', p: 'Code both plans, chart the spreads and explain the run count.' },
            { h3: 'Adults', p: 'Design spot checks for audits, inventories and quality control without hidden periodic bias.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Weston Creek',
      h2: 'Monday bins, public art and 2027 school dates',
      intro: 'Details from ACT Government open data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'One bin day', p: 'All eight Weston Creek suburbs in the ACT NOWaste list put their garbage out on a Monday.' },
            {
              h3: 'Public art',
              p: 'The artwork list has 26 pieces in the district, split evenly: eight sculptures, eight street art works and eight features, plus two others.'
            },
            { h3: 'School year', p: 'In 2027 the ACT school year starts on Monday 1 February for new students, and Term 4 ends on Friday 17 December.' }
          ]
        },
        {
          kind: 'spec',
          title: 'District used',
          p: 'Weston Creek is the ABS statistical area of about 18.1 square kilometres, the smallest of the eight Canberra districts on our pages; eight named suburbs fall inside it by our test.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From bead necklaces to sampling plans',
    intro: 'Use the ages as a guide; the trial decides.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Counting and guessing',
        p: 'Block-code games about estimating amounts.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'Python basics',
        p: 'Lists, slices and simple experiments.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Data and AI',
        p: 'Samples, estimates and model training data.',
        courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Statistics at work',
        p: 'Sampling design and analysis for real decisions.',
        courses: ['statistics-probability-maths-course', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why does sampling matter for AI?',
    intro: 'Because every model learns from a sample, and how it was drawn shapes what it believes.',
    p1: 'Training data are rarely the whole population. If the sample was drawn every k-th record from an ordered list, its quality depends on that order, exactly as in Weston Creek.',
    p2: 'Learners who have watched systematic sampling win and lose on real records ask how any training set was drawn before trusting what a model learned from it.',
    closer: 'In our classes, data come with a question: how were these chosen?',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lessons for Weston Creek families',
    intro: 'Every class is live over video, so learners stay home in Weston Creek.',
    cells: [
      { h3: 'Real-time teaching', p: 'Teachers run lessons live and look at code as it is typed.' },
      { h3: 'Term-time', p: 'Lessons keep to ACT terms and stop in the breaks.' },
      { h3: 'No-cost trial', p: 'The first lesson is free and comes with a plan.' },
      { h3: 'Level groups', p: 'Groups of five to ten, or a private teacher.' },
      { h3: 'Twice weekly', p: 'Around eight lessons each month.' },
      { h3: 'Indian clock', p: 'A 4:30pm Weston Creek lesson in December starts at 11am in India.' }
    ],
    spec: {
      title: 'Daylight saving',
      p: 'Canberra keeps Sydney time in the IANA time zone database, so clocks go forward on the first Sunday in October and back on the first Sunday in April, changing the India gap by an hour.'
    }
  },
  fees: {
    h2: 'Weston Creek fees',
    intro: 'One fee table for every learner.',
    first: 'The first lesson is free, with a written plan.',
    group: 'Groups: about eight lessons a month, five to ten learners.',
    private: 'Private: about eight lessons a month with one teacher.',
    closer: 'Fees are in US dollars and begin only after the trial has chosen a course and weekly slot. Holiday and missed-lesson rules are on the pricing page.'
  },
  reviewsH2: 'Families\' Google reviews',
  book: {
    h2: 'Book a free Weston Creek lesson',
    intro: 'Share the learner\'s age and interests. A child might sample a bead necklace; a teenager might run the tree-record experiment.',
    success: 'Thank you. We will reach out about a Weston Creek lesson.'
  },
  faq: {
    h2: 'Weston Creek coding and AI questions',
    intro: 'Questions from Weston Creek families and adult learners.',
    items: [
      { q: 'What is Weston Creek\'s population?', a: 'The 2021 Census counted 24,630 residents, median age 41. The ABS estimate for 2025 is 25,070.' },
      { q: 'What is systematic sampling?', a: 'Choosing every k-th item from a list after a starting point, instead of picking items at random.' },
      {
        q: 'Why did it beat random sampling here?',
        a: 'Because neighbouring tree records in the list tend to be alike, so evenly spaced picks cover all the runs.'
      },
      {
        q: 'When does systematic sampling fail?',
        a: 'When the list repeats a pattern with the same spacing as the sample, so every pick lands on the same part of the pattern.'
      },
      {
        q: 'Is this suitable for younger children?',
        a: 'They explore the same idea with beads and counting games; the coded version suits teenagers and adults.'
      },
      {
        q: 'How many public trees are in Weston Creek?',
        a: 'The ACT tree asset list holds 46,396 records in Weston Creek suburbs, 28,015 of them street trees.'
      },
      {
        q: 'Do you have a centre in Weston Creek?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Weston Creek classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How do groups work?',
        a: 'Learners are grouped by level and pace, five to ten per group, not by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can adults join?', a: 'Yes. Adults learn in adult groups or privately, often to design audits or analyses at work.' }
    ]
  },
  next: {
    eyebrow: 'More for Canberra learners',
    h2: 'Read on',
    html: 'The <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canberra">Canberra page</a> covers the city and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-australian-capital-territory">ACT guide</a> the territory; younger Weston Creek learners can begin with <a class="cg-inline-link" href="/coding-classes-for-kids-canberra">coding for Canberra kids</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Weston Creek and Canberra',
  footerPlaces: [
    { href: '/learn-to-think-not-just-use-ai-tools-australia', label: 'Think, not just use AI' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canberra', label: 'Canberra' },
    { href: '/coding-and-ai-classes-in-australian-capital-territory', label: 'ACT' },
    { href: '/coding-classes-for-kids-canberra', label: 'Kids in Canberra' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-wscr .cg-hero-grid { align-items: end; gap: clamp(1.25rem, 3.1vw, 2.45rem); }
.cg-root.cg-wscr .cg-hero h1 { font-weight: 650; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-wscr .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.85rem; }
.cg-root.cg-wscr .cg-eyebrow { letter-spacing: 0.115em; font-weight: 630; font-size: 0.77rem; }
.cg-root.cg-wscr .cg-section-head h2 { max-width: 22ch; }
.cg-root.cg-wscr .cg-grid-3 { gap: clamp(0.85rem, 2.3vw, 1.55rem); }
.cg-root.cg-wscr .cg-table caption { text-align: left; font-weight: 635; font-size: 0.88rem; }
.cg-root.cg-wscr .cg-table td:nth-child(2) { text-align: right; font-variant-numeric: tabular-nums; }
.cg-root.cg-wscr .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-wscr .cg-callout { border-radius: 8px; border-left-width: 3px; }
`,
  dossier: {
    curriculumAuthority: 'Weston Creek SA3 80108, ABS Census 2021 QuickStats (read 13 October 2026): 24,630 people; median age 41; 6,816 families; 9,945 private dwellings; 3.4 bedrooms per dwelling; separate houses 7,477 (81.7%, ACT 63.2%); worked at home 1,505 (12.6%, ACT 10.9%); managers 2,433 (20.3%, ACT 17.9%); walked to work 104 (0.9%, ACT 4.0%); flats 398 (4.3%); aged 5-9 1,716 (7.0%, ACT 6.4%). ABS ERP 2025 (SA3 80108): 25,070. ABS SA3 area 18.1487 sq km, smallest of the eight Canberra SA3s on these pages (Molonglo 27.1507, Woden Valley 28.6004); 8 named suburbs by our SAL-centroid test. ACT open data (CC BY 4.0, 13 October 2026): ACT NOWaste 8 Weston Creek rows, all Monday; artworks 26 (8 sculpture, 8 street art, 8 feature). ACT 2027 Term 1 begins Monday 1 February; Term 4 ends Friday 17 December. Canberra = Australia/Sydney (IANA 2026e).',
    localProject: 'ACTGOV Tree Assets, 46,396 records in 8 Weston Creek suburbs, ordered by objectid: STREET TREE 28,015 (60.38%), OPEN SPACE 16,304, LANEWAY 1,102, MEDIAN 975; native 26,812, exotic 12,396, unlabelled 7,188. Street-tree share, systematic vs SRS (2,000 draws, seed 1): k=10 m=4,640 sys 59.58% to 60.91% (sd 0.35 pt) vs SRS sd 0.69; k=50 m=928 sys sd 1.23 vs SRS 1.56; k=100 m=464 sys 57.33% to 64.87% (sd 1.54) vs SRS sd 2.29; k=500 m=93 sys sd 3.57 vs SRS 5.09. Exotic share (labelled, true 31.62%): k=500 sys sd 5.35 vs SRS 5.18. Exotic label lag-1 autocorrelation 0.67; runs 5,597 vs 16,955 expected. Periodic list: labelled simulation. Our calculation. Script: scratchpad au/b16/a_wscr.py.',
    requiredMentions: [
      '25,070',
      '9,945',
      '81.7% (7,477)',
      '12.6% (1,505)',
      '46,396 public tree records',
      '5,597 runs',
      '57.3% to 64.9%',
      'rows[start::k]',
      '0.9% (104)'
    ],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Weston Creek statistical area level 3 (SA3 80108), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/80108'
      },
      {
        claim: 'ABS Data API, Estimated Resident Population by ASGS 2021 regions (ABS_ANNUAL_ERP_ASGS2021), SA3 80108 Weston Creek, 2025.',
        url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_ASGS2021,1.2.0/ERP.SA3.80108.A?startPeriod=2024&format=csvfilewithlabels'
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
        claim: 'ACT Government open data, ACTGOV Tree Assets (data.act.gov.au 9qch-rvqr), Creative Commons Attribution 4.0, records for the eight Weston Creek suburbs read 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/9qch-rvqr'
      },
      {
        claim: 'ACT Government open data, ACT Suburb Next Garbage, Recycling and Green Waste Collection Dates (data.act.gov.au jzzy-44un), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/jzzy-44un'
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
      'Tree health, age or planting history: not claimed; the dataset does not record them in the fields used.',
      'The order of records reflecting a field survey route: not claimed; only measured clustering is reported.',
      'Weston Creek suburb (SAL) Census figures: not used; the page uses the SA3 district.',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the ACT Government.'
    ]
  }
};
