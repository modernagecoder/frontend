'use strict';
// Oldham (cg- town page, UK cluster Phase 8, towns band A, row 349). Keyword slug per the owner's 2026-09-27 instruction.
// Spine: how low does the Tame get, and how sure are we? Anchors (read raw 28 September 2026): EA Hydrology API station
// Uppermill, River Tame (3bb833ed-3e1d-4ed4-b2ff-04eea975f0d4; opened 1998-07-10; lat 53.542691, long -2.009054; NRFA 69048),
// daily mean flow measure ...-flow-m-86400-m3s-qualified; NRFA station-info 69048 "Tame at Uppermill": catchment 40.6 km2,
// "Non-standard weir draining catchment consisting of Millstone Grit and Coal Measures."; postcodes.io reverse lookup: nearest
// postcode OL3 7AJ, admin district Oldham, parish Saddleworth.
// Our run (28 September 2026, scratchpad old/fdc.py): 10,284 daily rows, 10 July 1998 to 25 September 2026; 21 calendar days
// have no row at all; 714 rows are flagged Missing with an empty value, the longest run 636 days (24 November 2016 to
// 21 August 2018). Flags: Good 8,504, Unchecked 923, Missing 714, Estimated 123, Suspect 20. Water years 1999 to 2025
// (1 October 1998 to 30 September 2025), Good + Estimated: 8,544 days. Exceedance flows (m3/s): Q95 0.211, Q90 0.239,
// Q70 0.382, Q50 0.609, Q10 2.433, Q5 3.51. Mean 1.076; 30.3% of days above the mean. Wrong way round (95th percentile
// labelled Q95): 3.51. Unchecked days in the same years: 581, median 0.165, mostly May to September; adding them gives
// Q95 0.181, Q50 0.568, Q10 2.375.
// Lesson family: flow duration curve (exceedance vs percentile inversion), rows present vs values present, and selection
// bias from dropping unchecked data that cluster at low flows. Screened: flow duration, selection bias, Millstone Grit
// 0 hits; Winchester used Q95/Q5 only as a side ratio to a baseflow filter; Loughborough used peaks over threshold.
// Place facts: Nomis Census 2021 TS007A, Oldham E08000004: total 242,088; 0 to 4 16,005 (6.6%; England 5.4%); 5 to 9 17,445
// (7.2%; 5.9%); 10 to 14 18,068 (7.5%; 6.0%); 15 to 19 16,254 (6.7%; 5.7%); 75 to 79 7,589 (3.1%; 3.6%); 85 and over 4,215
// (1.7%; 2.4%). ONS 2021 BUAs inside: Oldham 110,720; Chadderton 37,610; Failsworth 19,960; Shaw 18,240; Lees 12,630;
// Uppermill 11,200 (Royton 22,990 is mostly inside, our OA sum 22,268; not given a figure on the page).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'OLDHAM', label: 'Oldham', blurb: 'AI and programming classes for Oldham, with a project that builds a flow duration curve for the River Tame at Uppermill.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-oldham',
  code: 'olh',
  accent: '#4C412A',
  accentRationale: 'Oldham: a millstone-grit brown (8.07:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Oldham',
    eyebrow: 'Oldham, Greater Manchester, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Greater Manchester', href: '/coding-classes-in-greater-manchester' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Oldham, England',
  title: 'AI and Programming Classes in Oldham | Online Coding, 6 to 67',
  description: 'Online AI, programming and Python classes for Oldham, Chadderton, Failsworth and Saddleworth learners aged 6 to 67, one-to-one or in groups. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Oldham, and a Python project that builds a flow duration curve for the River Tame at Uppermill.',
  twitterDescription: 'Oldham AI, programming and coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Oldham',
    description: 'Online AI, programming, Python and mathematics for children, teenagers and adults in Oldham, taught live and pitched at each learner\'s level.'
  },

  h1: 'AI and programming classes in Oldham',
  capsuleQ: 'Which are the best AI and programming classes in Oldham?',
  capsule: 'At the 2021 census Oldham borough had 242,088 residents. The ONS counts 110,720 in the Oldham built-up area, 37,610 in Chadderton and 19,960 in Failsworth, with Shaw, Lees and Uppermill among the smaller places. About one resident in five is under 15, a larger slice than in England as a whole, and fewer people are over 75. Learners aged 6 to 67, from Failsworth up to Saddleworth, can study AI, programming, Python and maths live online with tutors based in India, one-to-one or in a same-level group of five to ten. The trial lesson is free and ends with a suggested course. Oldham\'s project reads nearly three decades of river data from Uppermill. Staying on costs USD 100 a month for a group or USD 150 a month for one-to-one lessons.',
  lead: 'In Saddleworth parish, the Environment Agency has measured the River Tame at Uppermill every day since July 1998. The National River Flow Archive describes a weir draining 40.6 square kilometres of Millstone Grit and Coal Measures. Engineers who plan water abstraction or check the health of a river ask one question of a record like this: how often does the flow drop below a given level? The answer is a flow duration curve, and a Python learner can build one from the public download in an afternoon. The hard part is not the code. It is noticing which days are really there, which are flagged, and what quietly happens to the answer when some are left out.',
  wa: 'Hello Modern Age Coders, can we arrange a free AI or programming lesson for an Oldham learner?',

  picks: {
    eyebrow: 'Oldham course picks',
    h2: 'Starting points for Oldham learners',
    intro: 'Choose by age and interest; every course starts with a free live lesson, and booking needs no card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with weather, water and simple measuring games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python that reads real numbers and sorts them.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Teen data science in Python, where the Tame project lives.' },
      { course: 'data-science-complete-masterclass-college', band: 'Adults and students', note: 'A full adult route through Python data science.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Oldham borough',
      h2: 'Plenty of school-age children',
      intro: 'Nomis figures from the 2021 census for six Oldham age bands, beside England.',
      body: [
        { kind: 'table', caption: 'Oldham borough and England, six age bands (TS007A, 2021)', head: ['Band', 'People in Oldham', 'Oldham share', 'England share'], rows: [
          ['0 to 4', '16,005', '6.6%', '5.4%'],
          ['5 to 9', '17,445', '7.2%', '5.9%'],
          ['10 to 14', '18,068', '7.5%', '6.0%'],
          ['15 to 19', '16,254', '6.7%', '5.7%'],
          ['75 to 79', '7,589', '3.1%', '3.6%'],
          ['85 and over', '4,215', '1.7%', '2.4%']
        ] },
        { kind: 'p', text: 'Each band from birth to 19 runs one to one and a half points above the England figure, and the bands from 75 upward run below it. The ONS lists Shaw at 18,240, Lees at 12,630 and Uppermill at 11,200 as separate built-up areas in the borough, and Uppermill lies in Saddleworth parish. Oldham schools teach the national curriculum for England; give us the term calendar and lessons will avoid the breaks.' },
        { kind: 'callout', h3: 'County and region', p: 'Read about the county on <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> and the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Oldham project',
      h2: 'A flow duration curve for the Tame',
      intro: 'Download the daily flows, check what is really there, then rank the days.',
      body: [
        { kind: 'p', text: 'The learner downloads every daily mean flow for the Uppermill gauge: 10,284 rows from 10 July 1998 to 25 September 2026. The first check finds only 21 calendar days with no row at all, which looks reassuring. The second check is the one that matters. Another 714 rows exist but are flagged Missing and hold no value, including one unbroken run of 636 days from November 2016 to August 2018. A program that only counts rows would believe the record is almost complete. Each row also carries a quality flag: 8,504 Good, 923 Unchecked, 123 Estimated and 20 Suspect.' },
        { kind: 'table', caption: 'Tame at Uppermill, flows exceeded for a share of days, water years 1999 to 2025, our Python run, 28 September 2026', head: ['Measure', 'Flow exceeded (cubic metres a second)', 'Meaning'], rows: [
          ['Q95', '0.211', 'Exceeded on 95% of days, a low flow'],
          ['Q90', '0.239', 'Exceeded on 90% of days'],
          ['Q70', '0.382', 'Exceeded on 70% of days'],
          ['Q50', '0.609', 'The median day'],
          ['Q10', '2.433', 'Exceeded on only 10% of days'],
          ['Q5', '3.51', 'Exceeded on only 5% of days, a high flow']
        ] },
        { kind: 'p', text: 'To build the curve the learner keeps whole water years, October to September, from 1999 to 2025, takes the Good and Estimated days, 8,544 of them, and sorts the flows from highest to lowest. Each flow gets a rank, and the rank divided by the number of days gives, near enough, the share of time that flow is equalled or beaten. Here sits the classic trap. Q95 means the flow exceeded 95% of the time, which is the 5th percentile, not the 95th. Ask a library for the 95th percentile and label it Q95 and you get 3.51 instead of 0.211, turning the river\'s lowest flows into its highest. The mean, 1.076, is about 1.8 times the median, and only 30.3% of days are above it, because a few wet days pull the average up.' },
        { kind: 'p', text: 'Then comes the subtle part. Dropping the Unchecked days feels cautious, but they are not a random sample. In those water years there are 581 of them, mostly between May and September, and their median flow is 0.165, below the Q95 of the checked days. Including them lowers Q95 to 0.181 and the median to 0.568. So the exclusion rule shifts exactly the low-flow end that abstraction planners care about. The learner reports both versions side by side and writes down why, rather than choosing the one that looks tidier.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Record a week of rain in a jar, sort the days and find the middle one.' },
          { h3: 'Ages 11 to 15', p: 'Sort the Tame flows in Python and read off Q50 and Q95.' },
          { h3: 'Ages 15 and up', p: 'Handle flags and gaps, plot the curve, and test each exclusion rule.' }
        ] },
        { kind: 'callout', h3: 'Environment Agency data, our curve', p: 'Daily flows and quality flags come from the Environment Agency\'s Hydrology service; station details come from the National River Flow Archive. The filtering, the ranking and every figure in the tables are our own calculation.' }
      ]
    },
    {
      id: 'tame', tint: 'deep', eyebrow: 'The Uppermill gauge',
      h2: 'What the record says about the station',
      intro: 'Station facts from the two public services, next to a few of our summary figures.',
      body: [
        { kind: 'table', caption: 'The Tame at Uppermill gauge (EA Hydrology and NRFA 69048)', head: ['Item', 'Source detail or our figure'], rows: [
          ['Station', 'Uppermill, River Tame, opened 10 July 1998'],
          ['Catchment', '40.6 square kilometres (NRFA)'],
          ['Structure and rock', 'A non-standard weir; Millstone Grit and Coal Measures'],
          ['Nearest postcode', 'OL3 7AJ, Saddleworth parish, Oldham'],
          ['Longest run flagged Missing', '636 days, November 2016 to August 2018'],
          ['Median day, checked data', '0.609 cubic metres a second']
        ] },
        { kind: 'p', text: 'Flow duration curves are used well beyond rivers. Web teams describe server response times by the share of requests slower than a threshold, and energy analysts describe wind farms by the share of hours above a given output. The same traps turn up: percentiles read the wrong way round, missing records that look present, and data dropped for a reason that happens to correlate with the answer. An Oldham learner who has met all three in the Tame record will recognise them anywhere.' },
        { kind: 'p', text: 'Modern Age Coders is not linked to the Environment Agency, the National River Flow Archive or the census office. Their data remain theirs; the processing, the curve and any error in them are our responsibility.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From rain jars to data science',
    intro: 'Year groups are only a first guess; the trial lesson decides the real start.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Blocks and measuring', p: 'Block coding games that count, sort and compare.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python with data', p: 'Lists, sorting and medians in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Data science and AI', p: 'Percentiles, charts and AI projects beside GCSE and A level.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Analysis at work', p: 'Adult data science and Python from the start.', courses: ['data-science-complete-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and river data',
    h2: 'Would an AI notice the flags?',
    intro: 'Code that runs cleanly can still answer a slightly different question.',
    p1: 'Ask an AI assistant to compute Q95 from a river file and it may produce working code in seconds. Whether it reads Q95 as an exceedance flow, skips empty values flagged Missing, and asks what to do with Unchecked days is another matter.',
    p2: 'An Oldham learner who has done this by hand knows which three questions to ask of any generated analysis before trusting its numbers.',
    closer: 'Knowing what to check in machine-written analysis is one of the most useful things Oldham teenagers can learn from coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Failsworth to Saddleworth, all live online',
    intro: 'Anywhere in the borough, a computer and a reliable connection are enough.',
    cells: [
      { h3: 'Student does the typing', p: 'The code comes from the learner; our tutor looks on through screen share and offers questions, not answers.' },
      { h3: 'Matched to real level', p: 'Whether in Year 6 or Year 12, the free lesson sets the first topic, with the exam board noted.' },
      { h3: 'The trial is free', p: 'One full lesson, no charge, and a clear course suggestion at the end.' },
      { h3: 'Groups at one stage', p: 'Five to ten UK learners, all working at a similar level.' },
      { h3: 'Two a week', p: 'None during school holidays.' },
      { h3: 'A fixed slot', p: 'Our tutors follow the UK clock change, so your time stays put.' }
    ],
    spec: { title: 'Why small groups work online', p: 'Five Oldham learners at one stage and free at one hour rarely live close together. Meeting online puts each of them in a class that fits.' }
  },

  fees: {
    h2: 'Oldham fees',
    intro: 'Oldham is charged our single international rate, the same in every country but India.',
    first: 'A complete trial lesson, free, then our course advice.',
    group: 'About eight live lessons a month in a small group.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Fees are quoted in US dollars, not pounds. Nothing is billed before the trial has settled a course and a regular time each week; the pricing page describes holidays, missed lessons and switching between group and private study.'
  },

  reviewsH2: 'Reviews from Greater Manchester and UK families',

  book: {
    h2: 'Book a free Oldham lesson',
    intro: 'Let us know the learner\'s age or school year and a favourite interest. The first lesson might be a Scratch weather game, a first Python program, a small AI experiment, or reading Q50 from the Tame record.',
    success: 'Thank you. The Oldham request has reached us.'
  },

  faq: {
    h2: 'Oldham questions',
    intro: 'The river project, borough numbers and lesson basics.',
    items: [
      { q: 'What is the population of Oldham?', a: 'The 2021 census counted 242,088 in Oldham borough; the ONS gives 110,720 for the Oldham built-up area.' },
      { q: 'Can Oldham learners take AI and programming classes online?', a: 'Yes. Learners from 6 to 67 anywhere in the borough join live online AI, programming, Python and maths lessons.' },
      { q: 'What is the River Tame project?', a: 'Learners build a flow duration curve from Environment Agency daily flows at Uppermill and test how data flags change it.' },
      { q: 'What does Q95 mean?', a: 'The flow exceeded on 95% of days, which is the 5th percentile of flows; for the Tame at Uppermill our figure is 0.211 cubic metres a second.' },
      { q: 'Why do the Unchecked days matter?', a: 'They cluster in summer low flows, so leaving them out lifts Q95 from 0.181 to 0.211.' },
      { q: 'Do you teach in person?', a: 'No, every lesson is live and online.' },
      { q: 'Can you help with GCSE and A level?', a: 'Yes, in maths and computing, for understanding; we make no promises about grades.' },
      { q: 'What ages can join?', a: 'Learners from 6 to 67.' },
      { q: 'What does it cost?', a: 'Nothing for the first lesson. After that, group study is USD 100 per month and one-to-one study USD 150 per month.' },
      { q: 'Are school holidays free of lessons?', a: 'Yes; share your dates with us.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Neighbouring pages',
    html: 'Next door, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-rochdale">Rochdale</a> has a canal project and <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-stockport">Stockport</a> have their own pages. The county sits under <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> and the region under <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>; the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> gathers the rest.',
    waLabel: 'WhatsApp our team'
  },

  footerHeading: 'Oldham and Greater Manchester',
  footerPlaces: [
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-olh .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3vw, 2.5rem); }
.cg-root.cg-olh .cg-hero h1 { font-weight: 760; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-olh .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-olh .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-olh .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.02em; }
.cg-root.cg-olh .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-olh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-olh .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-olh .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.75rem; }
.cg-root.cg-olh .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Oldham (E08000004). Nomis Census 2021 TS007A: total 242,088; 0 to 4 16,005 (6.6%, England 5.4%); 5 to 9 17,445 (7.2%, 5.9%); 10 to 14 18,068 (7.5%, 6.0%); 15 to 19 16,254 (6.7%, 5.7%); 75 to 79 7,589 (3.1%, 3.6%); 85 and over 4,215 (1.7%, 2.4%). ONS 2021 BUAs: Oldham 110,720; Chadderton 37,610; Failsworth 19,960; Shaw 18,240; Lees 12,630; Uppermill 11,200. EA Hydrology station Uppermill, River Tame, opened 1998-07-10; NRFA 69048 "Tame at Uppermill" catchment 40.6 km2, "Non-standard weir draining catchment consisting of Millstone Grit and Coal Measures."; postcodes.io nearest OL3 7AJ, Oldham, Saddleworth parish.',
    localProject: '10,284 daily rows (1998-07-10 to 2026-09-25); 21 days absent; 714 flagged Missing with no value (longest 636 days, 2016-11-24 to 2018-08-21); Good 8,504, Unchecked 923, Estimated 123, Suspect 20. WY 1999-2025 Good+Estimated 8,544 days: Q95 0.211, Q90 0.239, Q70 0.382, Q50 0.609, Q10 2.433, Q5 3.51; mean 1.076; 30.3% of days above mean; inverted label gives 3.51. Unchecked 581 days (median 0.165, mostly May to September); with them Q95 0.181, Q50 0.568, Q10 2.375. Lesson family: flow duration curve, exceedance vs percentile, rows vs values, selection bias from flags.',
    requiredMentions: [
      '242,088',
      '110,720',
      'Chadderton',
      'Failsworth',
      'Uppermill',
      'Saddleworth',
      'River Tame',
      'flow duration curve',
      'Millstone Grit'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Oldham and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Environment Agency Hydrology API, station Uppermill (River Tame), daily mean flow with quality flags.', url: 'https://environment.data.gov.uk/hydrology/id/stations/3bb833ed-3e1d-4ed4-b2ff-04eea975f0d4' },
      { claim: 'National River Flow Archive station 69048, Tame at Uppermill.', url: 'https://nrfa.ceh.ac.uk/data/station/info/69048' }
    ],
    rejectedClaims: [
      'Flood events or highest recorded flows: not discussed.',
      'Why the 2016 to 2018 record is missing: not stated by either source; not claimed.',
      'Whether Unchecked values are correct: unknown; both versions reported.',
      'Saddleworth Moor and moorland history: not used.',
      'Cotton mill and textile machinery history: spent by the Bolton and Blackburn pages; not used.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
