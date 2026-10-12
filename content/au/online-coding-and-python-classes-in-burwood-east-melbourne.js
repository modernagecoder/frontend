'use strict';
// Burwood East, Melbourne (cg- district page, Australia cluster Phase 8, row 277). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), suburb page (ABS SAL20427, Burwood East, City of Whitehorse) under Melbourne
// and Victoria. The Whitehorse council page carries council-wide figures; this page uses suburb figures only.
// Spine: Python statistics module median_low, median_high and quantiles (exclusive vs inclusive) on bus headways.
// Metro bus GTFS (downloaded 10 Oct 2026), Wednesday 28 Oct 2026: 51 stops inside the suburb, routes 703, 732, 733, 735,
// 736, 902. Route 732 at Tiller St/Burwood Hwy towards Box Hill: 45 departures 05:52 to 21:03, 44 gaps of 13 to 31
// minutes; mean 20.70, median 20.5 (never occurs), median_low 20, median_high 21, mode 21; quartiles exclusive
// [17.25, 20.5, 23.0], inclusive [17.75, 20.5, 23.0]; 90th percentile exclusive 27.5, inclusive 26.4 (= NumPy default).
// Busiest stop Eley Rd/Blackburn Rd, 117 departures on 703, 735, 736; gaps mean 9.19, median 7, two zero-minute gaps.
// Script: scratchpad au/b10/bwde.py, bwde2.py.
// Lesson family: statistics median_low/median_high/quantiles methods; 0 hits in content/, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BURWOOD EAST',
    label: 'Burwood East, Melbourne',
    blurb: 'Online coding and Python classes for Burwood East, with a statistics project on how long you really wait for the 732.'
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
  slug: 'online-coding-and-python-classes-in-burwood-east-melbourne',
  code: 'bwde',
  accent: '#4F640F',
  accentRationale: 'Burwood East: a deep olive (hue 75), picked by a full search of the muted range: 20.1 RGB units from every Victorian page accent, 19.6 from every other Australian accent and 6.2 from every other colour in content, the stylesheets and the claims logs; 5.39:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Burwood East',
    eyebrow: 'Burwood East, City of Whitehorse, Melbourne, Victoria',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Melbourne' },
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' },
    { slug: 'vibe-coding-and-ai-agents-classes-in-melbourne', name: 'Melbourne' }
  ],
  nav: [
    { label: 'Melbourne', href: '/vibe-coding-and-ai-agents-classes-in-melbourne' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Burwood East, Melbourne',
  title: 'Online Coding and Python Classes in Burwood East, Melbourne',
  description: 'Live online coding and Python classes for Burwood East children, teenagers and adults, from Scratch to Python statistics and data, in small groups or one to one.',
  ogDescription: 'Python classes for Burwood East: the median wait between 732 buses at Tiller Street is 20.5 minutes, a gap that never once happens. Python explains why.',
  twitterDescription: 'Burwood East online coding and Python classes, first class free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Burwood East',
    description: 'Level-matched online lessons in Scratch, Python, statistics and data for learners in Burwood East, taught live in English.'
  },
  h1: 'Online coding and Python classes in Burwood East',
  capsuleQ: 'What do online Python classes look like for Burwood East learners?',
  capsule: 'A teacher and a small group on a video call, writing Python together and testing it on real data. Burwood East is a compact suburb of 10,675 residents on 4.26 square kilometres, where 1.2% of workers caught a bus to work in 2021, twice the Victorian rate.',
  lead: 'Stand at the Tiller Street stop on Burwood Highway and the 732 to Box Hill comes, on a typical weekday, every twenty minutes or so. But "typical" hides a choice. Python\'s statistics module offers three different medians and two ways of cutting data into quarters, and on this one bus stop they give different answers.',
  wa: 'Hello Modern Age Coders, I would like a free online coding or Python class for a learner in Burwood East.',
  picks: {
    eyebrow: 'Course picks for Burwood East',
    h2: 'Courses where Python meets real numbers',
    intro: 'All four courses put Python to work on data and statistics, the toolkit behind the bus headway project. The free first class confirms the level.',
    items: [
      {
        course: 'python-complete-masterclass-teens',
        band: 'Ages 13 to 17',
        note: 'Python from first lines to the standard library, statistics module included.'
      },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Cleaning, summarising and plotting real datasets in Python.' },
      { course: 'statistics-probability-maths-course', band: 'Ages 15 and up', note: 'Averages, spread and quantiles understood properly, not just computed.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Spreadsheets, SQL and Python for summaries a manager can trust.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Burwood East in the Census',
      h2: 'A small suburb between two highways',
      intro: 'Figures for the Burwood East suburb (ABS code SAL20427) from the 2021 Census QuickStats, next to the Victorian value. The City of Whitehorse page covers the council as a whole.',
      body: [
        {
          kind: 'table',
          caption: 'Burwood East suburb, 2021 Census headline counts',
          head: ['Headline', 'Burwood East'],
          rows: [
            ['Residents', '10,675'],
            ['Median age', '41'],
            ['Families', '2,982'],
            ['Private dwellings', '4,469'],
            ['Average people per household', '2.6']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Burwood East and Victoria compared',
          head: ['Measure', 'Burwood East', 'Victoria'],
          rows: [
            ['Separate houses', '73.8% (2,966)', '73.4%'],
            ['Semi-detached, row or terrace houses and townhouses', '18.1% (726)', '13.9%'],
            ['Workers who drove to work', '45.8% (2,298)', '49.9%'],
            ['Workers who took a bus', '1.2% (58)', '0.6%'],
            ['Workers who took the train', '1.1% (53)', '1.6%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'No station', p: 'No metropolitan railway station lies inside the suburb boundary, so local public transport here means buses.' },
            { h3: 'Townhouses', p: 'Nearly one home in five is a townhouse or semi-detached, above the state share of 13.9%.' },
            { h3: 'Lockdown week', p: 'Census night in August 2021 came during a lockdown; 30.6% of employed residents, 1,536 people, worked from home that week.' }
          ]
        },
        {
          kind: 'p',
          text: 'To protect privacy, the bureau makes small random changes to every cell, so the rows of a table can differ slightly from its total. Figures here are quoted as published and never added together.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Three medians for one bus stop',
      intro: 'From the state bus timetable feed we listed every 732 departure from the Tiller Street stop towards Box Hill Bus Station on Wednesday 28 October 2026: 45 buses, the first at 5:52am and the last at 9:03pm. That leaves 44 gaps between buses, from 13 to 31 minutes. Then we asked Python\'s statistics module to summarise them.',
      body: [
        {
          kind: 'table',
          caption: 'Route 732 at Tiller Street, minutes between buses (our calculation)',
          head: ['Python call', 'Result', 'What it means'],
          rows: [
            ['mean', '20.70', 'The arithmetic average gap'],
            ['median', '20.5', 'Halfway between the two middle gaps; no gap is 20.5'],
            ['median_low', '20', 'The lower middle value, a gap that really occurs'],
            ['median_high', '21', 'The upper middle value, also a real gap'],
            ['mode', '21', 'The most common gap, seen 7 times']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Quartiles and the 90th percentile, two methods (our calculation)',
          head: ['Cut point', 'method exclusive (default)', 'method inclusive'],
          rows: [
            ['Lower quartile', '17.25', '17.75'],
            ['Median', '20.5', '20.5'],
            ['Upper quartile', '23.0', '23.0'],
            ['90th percentile', '27.5', '26.4']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Even counts cause it',
              p: 'With 44 gaps there is no single middle value, so the plain median averages the 22nd and 23rd gaps in sorted order, 20 and 21 minutes. median_low and median_high pick one of them instead.'
            },
            {
              h3: 'Which tool agrees',
              p: 'NumPy\'s default percentile gave 26.4 for the 90th percentile, matching the inclusive method rather than Python\'s own default.'
            },
            {
              h3: 'The busiest stop',
              p: 'At Eley Road on Blackburn Road three routes, 703, 735 and 736, made 117 departures between them. The median gap there was 7 minutes, and twice two buses left in the same minute.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'Which answer is right?',
          p: 'All of them, for different questions. For a printed figure, the plain median or mean is fine. When the answer must be a value that actually happened, such as a real departure gap to quote to a rider, median_low or median_high is the honest choice. When two people compute quantiles and disagree, the method is the first thing to check.'
        },
        {
          kind: 'p',
          text: 'Times come from the feed downloaded on 10 October 2026 and can change with later timetables. The selection of stop and day, the gaps and every statistic above are our own calculation.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'In Python',
      h2: 'Small functions, careful defaults',
      intro: 'The statistics module ships with every Python install. Its quantiles function cuts data into n equal-probability groups, and its method argument decides how to treat the ends of the data.',
      body: [
        {
          kind: 'table',
          caption: 'The statistics functions used in the project',
          head: ['Function', 'Returns', 'Use it when'],
          rows: [
            ['median(data)', 'Middle value, or the mean of the two middles', 'You want the usual textbook median'],
            ['median_low(data)', 'The smaller of the two middles', 'The answer must be a real data point'],
            ['median_high(data)', 'The larger of the two middles', 'The same, erring upwards'],
            ['quantiles(data, n=4)', 'Three cut points, exclusive by default', 'The data is a sample from something bigger'],
            [
              'quantiles(data, n=4, method=\'inclusive\')',
              'Cut points treating the data as the whole population',
              'The data is every case there is'
            ]
          ]
        },
        {
          kind: 'p',
          text: 'A single Wednesday of departures is arguably the whole population for that day, which makes the inclusive method a reasonable choice here. Treat the same gaps as a sample of all weekdays and the exclusive method fits better. Spreadsheets, NumPy and Python each have their own default, so a summary should always say which one it used.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Primary learners', p: 'Line up cards with bus gaps on them and find the middle by hand, with an odd and then an even count.' },
            { h3: 'Secondary students', p: 'Compute every column of the project table in Python and explain each difference in a sentence.' },
            { h3: 'Adults', p: 'Audit a work report: which quantile method made those numbers, and would another change the story?' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Burwood East',
      h2: 'Six bus routes and five schools',
      intro: 'From the bus feed and the 2025 school locations file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Bus stops', p: 'On that Wednesday 51 stops inside the suburb had departures, served by routes 703, 732, 733, 735, 736 and 902.' },
            {
              h3: 'Government schools',
              p: 'All five schools in the file for Burwood East are government schools, among them Burwood East Primary School, Burwood Heights Primary School and Forest Hill College.'
            },
            { h3: 'Older residents', p: 'The median age of 41 sits a little above the Victorian median, and households average 2.6 people.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Term 3, 2027',
          p: 'Victorian government schools run Term 3 from Monday 12 July to Friday 17 September 2027, a natural point to start or change a course.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting cards to Python statistics',
    intro: 'Ages are only a guide; the free first class places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch',
        p: 'Games that count, sort and keep score, built from blocks.',
        courses: ['scratch-programming-complete-course', 'mental-maths-mastery-kids']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python basics',
        p: 'Lists, sorting and the first averages worked out in code.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Python and data',
        p: 'The statistics module, NumPy and summaries of real datasets.',
        courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data']
      },
      {
        band: 'University and adult',
        h3: 'Analysis for work',
        p: 'Python, SQL and statistics for reports that hold up.',
        courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Python and AI',
    h2: 'Why learn statistics in Python when an AI will summarise the data?',
    intro: 'Because the AI will choose a method for you, silently, and the method can change the answer.',
    p1: 'Ask a chatbot for the quartiles of the 732 gaps and it will run some code and report three numbers. Whether the lower quartile comes back as 17.25 or 17.75 depends on a default it may not mention, and a second run with a different library can disagree with the first.',
    p2: 'A learner who has seen a median of 20.5 that never occurs knows to ask which median, which method and which library. Those three questions turn an AI summary from a guess into something a report can rely on.',
    closer: 'In Burwood East, as anywhere, the learner who can check the numbers is worth more than the one who can only request them.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'How online classes run for Burwood East',
    intro: 'Lessons are live video calls, so there is no bus to catch to class.',
    cells: [
      {
        h3: 'On the learner\'s own computer',
        p: 'Code is written on the learner\'s machine with the screen shared, so the teacher sees each line as it appears.'
      },
      { h3: 'School terms', p: 'Courses are planned around Victorian terms, with a pause each holiday.' },
      { h3: 'Try a full lesson', p: 'The free class is a complete lesson, after which the teacher suggests a course and a regular slot.' },
      { h3: 'Groups at one level', p: 'Between five and ten learners at the same stage share each class.' },
      { h3: 'Fixed weekly times', p: 'Two lessons a week at set times, around eight a month, with planned breaks.' },
      {
        h3: 'Teachers in India',
        p: 'With teachers in India, a 3:45pm Burwood East class in daylight saving is 10:15am India time, and 11:15am during the Melbourne winter.'
      }
    ],
    spec: {
      title: 'Melbourne clocks',
      p: 'Daylight saving in Melbourne began on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India keeps one time all year, so lesson times are always confirmed in Melbourne time.'
    }
  },
  fees: {
    h2: 'Burwood East class fees',
    intro: 'One free lesson and two monthly prices.',
    first: 'The opening lesson costs nothing and finishes with a recommendation.',
    group: 'A month in a level-matched group of five to ten, usually eight lessons.',
    private: 'Around eight private lessons a month with one teacher.',
    closer: 'Outside India, fees are in US dollars, the same for Burwood East as for every other overseas family. Nothing is charged until after the trial, once course and time are settled; holidays, missed lessons and format changes are explained on the pricing page.'
  },
  reviewsH2: 'What Google reviewers write about our classes',
  book: {
    h2: 'Book a free Burwood East class',
    intro: 'Give us an age and an interest. A six-year-old might start with a scoring game in Scratch; a Year 12 student might start by working out the 732 timetable statistics in Python.',
    success: 'Thank you. Our team will contact you soon about a Burwood East class.'
  },
  faq: {
    h2: 'Burwood East coding and Python questions',
    intro: 'Questions Burwood East families and adult learners send us.',
    items: [
      {
        q: 'How many people live in Burwood East?',
        a: 'The 2021 Census QuickStats for the Burwood East suburb record 10,675 residents, 2,982 families and 4,469 private dwellings, with a median age of 41.'
      },
      {
        q: 'What is the difference between median, median_low and median_high in Python?',
        a: 'With an even number of values, median averages the two middle values, while median_low returns the smaller of them and median_high the larger. With an odd count all three give the same answer.'
      },
      {
        q: 'What does the method argument in statistics.quantiles do?',
        a: 'It chooses how the cut points are interpolated. The default, exclusive, treats the data as a sample from a larger population; inclusive treats the data as the entire population, and usually gives cut points nearer the middle.'
      },
      {
        q: 'What did the Burwood East bus project find?',
        a: 'For 44 gaps between 732 buses at Tiller Street, the median was 20.5 minutes, a gap that never occurs, while median_low gave 20 and median_high 21. The lower quartile was 17.25 or 17.75 depending on the method.'
      },
      {
        q: 'Is Python a good first real language?',
        a: 'For most learners, yes. It reads close to English, runs instantly and has a large standard library, so beginners spend their time on ideas rather than punctuation.'
      },
      { q: 'What do younger Burwood East children start with?', a: 'From age six, children start with Scratch, making games that keep score and sort things.' },
      {
        q: 'Do you teach in Burwood East?',
        a: 'Only online. There are no Modern Age Coders premises in Australia, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Python classes cost for Burwood East learners?',
        a: 'The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one classes cost USD 150 a month. The course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How many learners are in each group?',
        a: 'Five to ten, grouped on level, pace and goals, with one-to-one lessons when no group time fits.',
        boiler: true
      },
      {
        q: 'Can adults learn Python with you?',
        a: 'Yes. Adults study in their own groups or one to one, often to automate spreadsheets or to analyse data at work with more confidence.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Burwood East learners',
    html: 'The <a class="cg-inline-link" href="/online-coding-and-python-classes-in-whitehorse-melbourne">City of Whitehorse page</a> covers the council area that includes Burwood East, and the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-box-hill-melbourne">Box Hill page</a> the centre the 732 runs to. Parents of younger children can begin with <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">kids coding classes in Melbourne</a>, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a> covers the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Burwood East and Melbourne',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-whitehorse-melbourne', label: 'City of Whitehorse' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-bwde .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.3rem); }
.cg-root.cg-bwde .cg-hero h1 { font-weight: 640; letter-spacing: -0.016em; line-height: 1.07; }
.cg-root.cg-bwde .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.7rem 0 0.7rem 1.1rem; }
.cg-root.cg-bwde .cg-eyebrow { letter-spacing: 0.15em; font-weight: 620; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-bwde .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.008em; }
.cg-root.cg-bwde .cg-grid-3 { gap: clamp(0.85rem, 2.5vw, 1.95rem); }
.cg-root.cg-bwde .cg-table caption { font-weight: 660; text-align: left; text-transform: none; }
.cg-root.cg-bwde .cg-table td:nth-child(n+2) { font-variant-numeric: tabular-nums; letter-spacing: 0.01em; }
.cg-root.cg-bwde .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.85rem; }
.cg-root.cg-bwde .cg-callout { border-left-width: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Burwood East, ABS Census 2021 QuickStats, Burwood East suburb SAL20427 (read 11 October 2026): 10,675 people; median age 41; 2,982 families; 4,469 private dwellings; 2.6 people per household; separate house 73.8% (2,966; Victoria 73.4%); semi-detached, row or terrace house, townhouse 18.1% (726; Victoria 13.9%); car as driver 45.8% (2,298; Victoria 49.9%); bus 1.2% (58; Victoria 0.6%); train 1.1% (53; Victoria 1.6%); worked at home 30.6% (1,536; lockdown Census). ABS SAL area 4.26 square kilometres, City of Whitehorse. No metropolitan station inside the boundary. Victorian School Locations 2025: 5 open schools, all government (Primary 2, Secondary 1, Special 1, Language 1), including Burwood East Primary School, Burwood Heights Primary School and Forest Hill College. Victorian 2027 Term 3: Monday 12 July to Friday 17 September. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'Python statistics median_low, median_high and quantiles methods on bus headways. Metro bus GTFS Schedule (downloaded 10 October 2026), Wednesday 28 October 2026: 51 stops with departures inside the Burwood East SAL polygon; routes 703, 732, 733, 735, 736, 902. Route 732 at Tiller St/Burwood Hwy (stop 8685) towards Box Hill Bus Station: 45 departures 05:52 to 21:03; 44 gaps 13 to 31 minutes; mean 20.70; median 20.5 (no gap equals it); median_low 20; median_high 21; mode 21 (7 times); quantiles n=4 exclusive [17.25, 20.5, 23.0], inclusive [17.75, 20.5, 23.0]; 90th percentile exclusive 27.5, inclusive 26.4, NumPy percentile default 26.4. Busiest stop Eley Rd/Blackburn Rd (stop 15868), routes 703/735/736: 117 departures, mean gap 9.19, median 7, two zero-minute gaps. Script: scratchpad au/b10/bwde.py, bwde2.py.',
    requiredMentions: [
      '10,675',
      '2,982',
      '4,469',
      '4.26 square kilometres',
      'Tiller Street',
      '17.25',
      '17.75',
      'median_low',
      'Burwood Heights Primary School',
      'Forest Hill College'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Burwood East suburb (SAL20427).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20427' },
      {
        claim: 'Department of Transport and Planning, GTFS Schedule (Creative Commons Attribution 4.0), metropolitan bus feed downloaded 10 October 2026, calendar 8 October to 31 December 2026.',
        url: 'https://discover.data.vic.gov.au/dataset/gtfs-schedule'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL20427 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'Python documentation, statistics module (median, median_low, median_high, mode, quantiles).',
        url: 'https://docs.python.org/3/library/statistics.html'
      },
      {
        claim: 'NumPy documentation, numpy.percentile (default linear method).',
        url: 'https://numpy.org/doc/stable/reference/generated/numpy.percentile.html'
      },
      {
        claim: 'Victorian Government, school term dates and holidays, 2027 Victorian school term dates.',
        url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria'
      },
      {
        claim: 'IANA time zone database, australasia file: Australia/Melbourne daylight saving rules.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Actual waiting times or punctuality: not measured; gaps are scheduled times from the timetable feed.',
      'Departures on other days of the week: not analysed; one Wednesday only.',
      'Names of the special developmental school and the English language school: not used; counted only.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the City of Whitehorse, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
