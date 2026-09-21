'use strict';
// Preston (cg- city page, UK cluster Phase 4). Spine: a trend one bad year cannot bend. Theil-Sen against least
// squares on the Department for Transport road traffic statistics API, count point 36029 (M6, junction 30 to 31,
// Lancashire), annual average daily flow of all motor vehicles, 2000 to 2025, read 21 September 2026 (scratchpad
// prs/ts.py). 26 years: 24 counted (manual in most years, automatic counter in 2018 and 2019), 2 estimated from the
// previous year (2001, 2016). 2019 156,190; 2020 101,388 (64.9% of 2019); 2025 171,079, the highest; 2020 the
// lowest. Slopes in vehicles a day per year: least squares all years 979, without 2020-21 1,404; Theil-Sen (median of
// 325 pairwise slopes) all years 1,054, without 2020-21 1,292. Stress test with 2020 entered as 0: least squares 459,
// Theil-Sen 1,054 (unchanged). Lesson family: robust estimation (Theil-Sen median of pairwise slopes, breakdown,
// O(n^2) pairs); distinct from least squares trend (Sheffield), spikes and median absolute deviation. Screened free
// site-wide on 21 September 2026 (Theil-Sen, robust regression: 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 for Preston E07000123 (147,835 usual
// residents; 141,777 in households, 95.9%; 6,058 in communal establishments, 4.1%), TS007A (9,241 aged 5 to 9,
// 6.3%; 12,600 aged 20 to 24, 8.5%; 11,012 aged 25 to 29, 7.4%; England 5.9, 6.0 and 6.6%), TS068 (34,784
// schoolchildren and full-time students of 138,914 aged 5 and over, 25.0%; England 20.4%). GOV.UK news, Highways
// England, 5 December 2018, "England's first motorway turns 60" (5 December 1958: 2,300 drivers; the eight-mile
// Preston bypass, the very first motorway in Britain, now part of the M6; two lanes each way, no central safety
// barrier, no electronic signs; upgraded to four lanes in the 1990s, replacing all the original bridges; the M6
// then accounted for one in eight of all motorway journeys). University of Lancashire, About us (founded in 1828 as
// the Institution for the Diffusion of Knowledge; motto Ex solo ad solem, from the earth to the sun; Preston Campus
// home to over 27,000 students and staff). Preston City Council returned HTTP 403 and was not used; the Preston
// Guild site did not load.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'PRESTON', blurb: 'Home of Britain\'s first motorway, with a project that fits a traffic trend the 2020 slump cannot bend.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-preston',
  code: 'prs',
  accent: '#833F4D',
  accentRationale: 'Preston: a brick rose from the solver (6.12:1 on every paper tint, dE 7.4 from the nearest used accent), warmer than the Bradford claret and far from the Southampton plum',
  pageType: 'city',
  place: {
    name: 'Preston',
    eyebrow: 'Preston, Lancashire, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Lancashire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Preston, England',
  title: 'Best Coding Classes in Preston | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Preston learners aged 6 to 67, from Fulwood and Ashton-on-Ribble to Ribbleton and Ingol. First lesson free.',
  ogDescription: 'Coding and AI lessons for Preston, home of Britain\'s first motorway, on a page that fits a traffic trend to the M6 that one bad year cannot bend.',
  twitterDescription: 'Preston learners aged six to sixty-seven can take coding and AI lessons with us live online, starting with one free lesson.',
  ogImageCourse: 'statistics-probability-maths-course',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Preston Live Online Coding, Data and Maths Lessons',
    description: 'Coding, Python, AI, data and mathematics for Preston children, teenagers and adults, taught live online in English in level-based groups or one to one.'
  },

  h1: 'Coding classes in Preston',
  capsuleQ: 'What are the best coding classes in Preston?',
  capsule: 'Preston had 147,835 usual residents at the 2021 Census, with those aged 20 to 24 making up 8.5%, compared with 6.0% nationally. It is where Britain\'s first motorway opened on 5 December 1958: the eight-mile Preston bypass, now part of the M6. Modern Age Coders teaches Preston learners from six to sixty-seven in live online lessons, in a group of five to ten at one level or one to one, with teachers working from India and lesson times set in UK hours. The opening lesson is free. After that, USD 100 a month covers a group place and USD 150 a month covers private lessons.',
  lead: 'On 5 December 1958, according to Highways England, 2,300 drivers took the new Preston bypass for the first time, the first motorway in Britain. Today the Department for Transport publishes a traffic figure for the M6 between junctions 30 and 31 for every year since 2000, and it has grown from 116,874 vehicles on an average day to 171,079 in 2025. How fast is it growing? Draw the usual least-squares line and the answer is 979 more vehicles a day each year. But that line is dragged down by one extraordinary year: in 2020 the flow fell to 101,388. A different method, Theil-Sen, takes the slope between every pair of years, 325 of them, and uses the middle value: 1,054 a day each year. Enter 2020 as zero, as a broken counter might, and least squares halves to 459 while Theil-Sen does not move at all. That is robust estimation, and it is the lesson Preston\'s motorway gives our teenage learners.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Preston.',

  picks: {
    eyebrow: 'Course picks for Preston',
    h2: 'Four courses for the motorway city',
    intro: 'Choose by the learner\'s interests. Every course begins with a free live lesson, and booking needs no card.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', band: 'Ages 6 to 11', note: 'Number, shape, measurement and money for primary years, including the ordering and comparing that sit under every average.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from a first line to full projects, with a real traffic series as an early dataset to fit and test.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', band: 'A level years', note: 'A level statistics, including the standard rules for outliers and when to use them, beside the pure maths behind it.' },
      { course: 'statistics-probability-maths-course', band: 'University and adult', note: 'Statistics for adults from descriptive summaries to hypothesis testing, including why a median can be the safer summary.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Preston today',
      h2: 'A young city on the Ribble',
      intro: 'Census 2021 for the Preston local authority, from the Office for National Statistics tables on Nomis.',
      body: [
        { kind: 'table', caption: 'Preston, Census 2021', head: ['Census 2021 measure', 'Preston', 'England'], rows: [
          ['Usual residents', '147,835', 'Not compared'],
          ['In households', '141,777, 95.9%', 'Not compared'],
          ['In communal establishments', '6,058, 4.1%', 'Not compared'],
          ['Aged 5 to 9', '9,241, 6.3%', '5.9%'],
          ['Aged 20 to 24', '12,600, 8.5%', '6.0%'],
          ['Aged 25 to 29', '11,012, 7.4%', '6.6%'],
          ['Schoolchildren and full-time students, of 138,914 aged five and over', '34,784, 25.0%', '20.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Young adults', p: 'Residents aged 20 to 24 made up 8.5% of Preston and those aged 25 to 29 another 7.4%, against 6.0% and 6.6% nationally.' },
          { h3: 'Children too', p: 'Children aged 5 to 9 were 6.3% of residents, a little above England\'s 5.9%, so the city is young at both ends of school age.' },
          { h3: 'In education', p: 'The 2021 Census put schoolchildren and full-time students at 25.0% of Preston residents aged five and over; across England the share was 20.4%.' }
        ] },
        { kind: 'p', text: 'For our classes, that means Preston learners at every stage: a six-year-old in Ingol building a first block game, a Year 11 student in Fulwood getting ready for GCSE Computer Science, or someone in their twenties in Deepdale picking up data skills for work. Each joins five to ten learners at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'The first motorway',
      h2: 'Eight miles that started the motorway age',
      intro: 'From Highways England\'s 2018 account on GOV.UK and from the University of Lancashire.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '5 December 1958', p: 'Highways England says 2,300 drivers drove along the Preston bypass for the first time that day. The eight-mile road was the very first motorway in Britain and is now part of the M6.' },
          { h3: 'Two lanes to four', p: 'The bypass opened with just two lanes each way, no safety barrier in the central reservation and no electronic signs. An upgrade in the 1990s made it a four-lane motorway and replaced all the original bridges.' },
          { h3: '1828', p: 'The University of Lancashire says it was founded that year in Preston as the Institution for the Diffusion of Knowledge. Its motto, Ex solo ad solem, means from the earth to the sun.' }
        ] },
        { kind: 'p', text: 'In 2018 Highways England said the M6 accounted for one in eight of all motorway journeys, and the University says its Preston Campus is home to over 27,000 students and staff. We have no connection with Highways England, National Highways or the University. We mention them because a city that gave Britain its first motorway is a natural place to learn how to measure traffic honestly.' },
        { kind: 'spec', title: 'The count point we used', p: 'The Department for Transport publishes road traffic statistics for count point 36029, on the M6 between junctions 30 and 31, for every year from 2000 to 2025. Most years are manual counts, 2018 and 2019 came from an automatic counter, and 2001 and 2016 were estimated from the year before. Knowing which is which matters before fitting any line.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A trend that one bad year cannot bend',
      intro: 'Theil-Sen estimates a trend as the median of the slopes between every pair of points. We compared it with ordinary least squares on 26 years of M6 traffic at Preston.',
      body: [
        { kind: 'table', caption: 'Growth in average daily traffic, M6 junction 30 to 31, 2000 to 2025 (vehicles a day, per year)', head: ['Method', 'Years used', 'Slope'], rows: [
          ['Least squares', 'All 26', '979'],
          ['Least squares', 'Without 2020 and 2021', '1,404'],
          ['Theil-Sen', 'All 26', '1,054'],
          ['Theil-Sen', 'Without 2020 and 2021', '1,292'],
          ['Least squares, 2020 entered as 0', 'All 26', '459'],
          ['Theil-Sen, 2020 entered as 0', 'All 26', '1,054']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Every pair', p: 'For each pair of years, work out the slope of the line joining them. Twenty-six years give 325 pairs, and so 325 slopes.' },
          { h3: '2. Take the middle', p: 'Sort the slopes and pick the median. A few wild slopes at either end cannot move the middle much, which is the whole point.' },
          { h3: '3. Stress-test it', p: 'Corrupt one year on purpose, as a broken counter might, and refit both lines. Least squares collapses from 979 to 459; Theil-Sen stays at 1,054.' }
        ] },
        { kind: 'callout', h3: 'Robust is not the same as right', p: 'Theil-Sen resists one bad year, but 2020 and 2021 were two genuinely low years, and together they still pull its slope down from 1,292 to 1,054. The method protects against a few freak values, not against a real change in behaviour. Deciding whether the pandemic years belong in a growth trend is a judgement about the world, and a good analysis reports the trend both ways and says which it prefers and why.' },
        { kind: 'p', text: 'There is a cost to the robustness. Least squares needs one pass through the data; Theil-Sen needs every pair, so 26 years mean 325 slopes and 100 years would mean 4,950. For a traffic series that is nothing, but on millions of points learners meet faster versions that sample the pairs instead, and the idea of trading speed for resistance to bad data stays with them.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Trends that survive bad data',
      h2: 'Five checks for a trend you can trust',
      intro: 'Learned on motorway traffic, used afterwards on sensor readings, sales, sports statistics and any series with the odd broken or extraordinary value.',
      body: [
        { kind: 'table', caption: 'Estimating a trend when some values are unusual', head: ['Check', 'What it looks like', 'What it prevents'], rows: [
          ['Read the method column', 'Separate counted, automatic and estimated years before fitting', 'Treating a copied estimate as a fresh measurement'],
          ['Fit two ways', 'Compare least squares with a robust method such as Theil-Sen', 'A trend quietly dragged by one value'],
          ['Break it on purpose', 'Replace one value with nonsense and see which method notices', 'Discovering fragility only after publishing'],
          ['Name the unusual years', 'Say which years are extraordinary and why, and show the trend with and without them', 'Silently dropping the years that do not fit'],
          ['Count the cost', 'Remember that pairwise methods grow with the square of the data', 'A robust method that never finishes on large data']
        ] },
        { kind: 'p', text: 'The first check has a local lesson in it: the 2001 and 2016 figures are not new counts at all but estimates carried forward from the year before. They sit comfortably in the series, which is exactly why a learner has to read the method column to know they are there.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Lining up numbers to find the middle one, and seeing that one silly number cannot move the middle much.' },
          { h3: 'Teenagers', p: 'The DfT series fetched and parsed, least squares and Theil-Sen coded from scratch, and a deliberate stress test run.' },
          { h3: 'Adults', p: 'Trend reporting at work that shows the robust figure beside the usual one and explains any difference.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Department for Transport, Highways England, National Highways or the University of Lancashire. The traffic statistics are published for public use; the fitted slopes and stress tests are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From the middle number to a robust trend',
    intro: 'Think of the age bands as a rough map; the free lesson shows the actual starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The middle number', p: 'Ordering lists, finding the middle, and noticing how an average jumps when one number is silly while the middle barely moves.', courses: ['elementary-mathematics-complete-masterclass', 'mental-maths-mastery-kids'] },
      { band: 'Ages 11 to 13', h3: 'Slopes and graphs', p: 'Plotting a series, drawing a line through it and working out its slope in code.', courses: ['maths-through-coding', 'comprehensive-middle-school-mathematics-mastery'] },
      { band: 'Ages 14 to 18', h3: 'Robust trends in Python', p: 'Least squares and Theil-Sen written from scratch on real traffic data, with outliers tested on purpose.', courses: ['python-complete-masterclass-teens', 'a-level-maths-course-pure-mechanics-statistics'] },
      { band: 'Ages 18 to 67', h3: 'Honest trends at work', p: 'Robust statistics, data quality flags and clear reporting for anyone whose numbers include the occasional disaster.', courses: ['statistics-probability-maths-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A spreadsheet will fit a trend line for you. Why should a Preston teenager learn Theil-Sen?',
    intro: 'Because the default line gives no warning when one bad value is bending it.',
    p1: 'Ask an AI tool how fast M6 traffic at Preston is growing and it will probably fit a least-squares line and quote about 979 vehicles a day per year. It is unlikely to add that 2020 alone drags that figure down, or that a single corrupted year could halve it. A learner who has fitted a robust line beside it knows to ask how sensitive any quoted trend is.',
    p2: 'Robustness matters inside AI too. Models trained on data with a few extreme or mislabelled points can be pulled badly off course, and much of practical machine learning is about spotting and resisting that. Theil-Sen is one of the simplest, clearest examples of the idea, and it can be coded from scratch in an evening.',
    closer: 'So a Preston teenager should still learn to program in 2026, in the city of Britain\'s first motorway: tools will draw any line you ask for, and knowing which lines survive bad data is what makes the answer worth trusting.',
    blogAnchor: 'why it is still worth learning to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Fulwood, Ashton or Ribbleton, with no motorway needed',
    intro: 'Preston is well connected by road, but a live online lesson needs no journey at all.',
    cells: [
      { h3: 'Across the city in seconds', p: 'A learner in Cottam and another in Ribbleton can share the same lesson without either leaving home.' },
      { h3: 'School stages as named in England', p: 'Reception, the Key Stages, Year 9 options, GCSEs and A levels, in the terms Preston schools use, with every lesson in English.' },
      { h3: 'A genuine first lesson', p: 'The free lesson teaches a real task and closes by proposing a level, a course and a weekly time. Booking asks for no card.' },
      { h3: 'Level decides the group', p: 'Each group gathers five to ten learners working at the same stage, drawn from Preston, elsewhere in Britain and overseas, which keeps a sensible slot open for every level.' },
      { h3: 'A regular timetable', p: 'Two lessons a week at fixed times, roughly eight a month, with holiday and exam pauses arranged with the teacher in advance.' },
      { h3: 'Teachers on Indian Standard Time', p: 'India does not change its clocks, so the gap to Preston is four and a half hours during British Summer Time and five and a half for the rest of the year, which keeps after-school and evening slots within our teachers\' working day.' }
    ],
    spec: { title: 'Across Lancashire as well', p: 'Families in Penwortham, Leyland or Chorley join exactly the same groups, because every lesson is online and groups are formed by level rather than postcode.' }
  },

  fees: {
    h2: 'Preston lesson fees',
    intro: 'A free lesson first, then a single monthly fee.',
    first: 'A full lesson at no cost, ending with a level, a recommended course and a proposed weekly time.',
    group: 'Roughly eight live lessons a month in a group of five to ten learners at one level.',
    private: 'Roughly eight live lessons a month taught to your learner on their own.',
    closer: 'Families outside India all pay one US dollar fee, so Broughton and Lea pay exactly the same, and there is no pound price list. We only start billing when the free lesson has settled the course and the weekly slot, and our pricing page sets out how pausing, missed lessons and moving between group and one-to-one teaching work.'
  },

  reviewsH2: 'Six family reviews from Google, left as written',

  book: {
    h2: 'Book a free lesson for a Preston learner',
    intro: 'We choose the first task by level: finding the middle of a list for a young child, a first Python program that plots a line, or the M6 traffic series and a Theil-Sen trend for a teenager ready for real data.',
    success: 'Thank you. The team will be in touch shortly to arrange a Preston lesson.'
  },

  faq: {
    h2: 'Preston coding class questions',
    intro: 'What Preston families ask us most often.',
    items: [
      { q: 'How many people live in Preston?', a: 'The 2021 Census counted 147,835 usual residents in the Preston local authority: 141,777 in households and 6,058, or 4.1%, in communal establishments.' },
      { q: 'How many Preston residents are students?', a: 'In 2021, 34,784 of the 138,914 residents aged five and over were schoolchildren or full-time students, 25.0% against 20.4% in England.' },
      { q: 'Was Britain\'s first motorway in Preston?', a: 'Yes. Highways England says the eight-mile Preston bypass, opened on 5 December 1958, was the very first motorway in Britain, and that it is now part of the M6. We are not connected with Highways England.' },
      { q: 'What is Theil-Sen?', a: 'A way of estimating a trend by working out the slope between every pair of points and taking the median. Because it uses the middle slope, a few extreme values cannot drag it far.' },
      { q: 'How fast is M6 traffic at Preston growing?', a: 'On the DfT figures for junction 30 to 31 from 2000 to 2025, about 979 more vehicles a day each year by least squares and 1,054 by Theil-Sen. Leaving out 2020 and 2021 raises both.' },
      { q: 'How much did traffic fall in 2020?', a: 'At the M6 count point between junctions 30 and 31, average daily traffic fell from 156,190 vehicles in 2019 to 101,388 in 2020, then reached 171,079 in 2025.' },
      { q: 'When are Preston lessons held?', a: 'Most lessons fall on weekday afternoons and evenings or at weekends, and the free lesson fixes the UK time. India is 4.5 hours ahead of the UK in summer and 5.5 hours ahead in winter.' },
      { q: 'Is there a Modern Age Coders centre in Preston?', a: 'No. There is no Preston centre and no premises anywhere in the UK; all teaching happens live online. Learners need a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'What do Preston lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How are Preston groups formed?', a: 'By level, pace and aims rather than age or postcode, with five to ten learners at one stage. If no group meets at a suitable time, we propose one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'The North West and beyond',
    html: 'Down the M6 and along the M62, the <a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool page</a> finds the moon\'s rhythm in a month of tide readings and <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a> times a rise travelling down the River Medlock. <a class="cg-inline-link" href="/best-coding-class-in-sheffield">Sheffield</a> shows how a least-squares trend shifts with its starting year. School stages across England are explained in the <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a>, and every UK page is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Preston and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-liverpool', label: 'Liverpool' },
    { href: '/best-coding-class-in-manchester', label: 'Manchester' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-prs .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.3vw, 2.85rem); }
.cg-root.cg-prs .cg-hero h1 { font-weight: 700; letter-spacing: -0.017em; line-height: 1.09; }
.cg-root.cg-prs .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-prs .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-prs .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.014em; }
.cg-root.cg-prs .cg-grid-3 { gap: clamp(1.2rem, 2.8vw, 2.4rem); }
.cg-root.cg-prs .cg-table caption { font-weight: 700; letter-spacing: 0.016em; }
.cg-root.cg-prs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-prs .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-prs .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Preston, Census 2021 via Nomis: TS001 Preston local authority (E07000123) 147,835 usual residents, 141,777 in households (95.9 percent), 6,058 in communal establishments (4.1 percent); TS007A 9,241 aged 5 to 9 (6.3 percent), 12,600 aged 20 to 24 (8.5 percent), 11,012 aged 25 to 29 (7.4 percent), against England 5.9, 6.0 and 6.6 percent; TS068 34,784 schoolchildren and full-time students of 138,914 residents aged 5 and over, 25.0 percent, against 20.4 percent in England. GOV.UK, Highways England, 5 December 2018: on 5 December 1958 2,300 drivers used the eight-mile Preston bypass, the very first motorway in Britain, now part of the M6; two lanes each way, no central barrier, no electronic signs; four-lane upgrade in the 1990s replaced all original bridges; the M6 then carried one in eight of all motorway journeys. University of Lancashire: founded in 1828 as the Institution for the Diffusion of Knowledge; motto Ex solo ad solem; Preston Campus home to over 27,000 students and staff.',
    localProject: 'A trend one bad year cannot bend. DfT road traffic statistics API, count point 36029, M6 junction 30 to 31, all motor vehicles, AADF 2000 to 2025: 24 counted (automatic counter 2018 and 2019), 2 estimated from the previous year (2001, 2016). 2019 156,190; 2020 101,388; 2025 171,079. Slopes (vehicles a day per year): least squares 979 (1,404 without 2020-21); Theil-Sen 1,054 over 325 pairs (1,292 without 2020-21); with 2020 entered as 0, least squares 459 and Theil-Sen 1,054. Lesson family: robust estimation (Theil-Sen median of pairwise slopes, stress testing, quadratic pair count); distinct from least squares trends, spike detection and median absolute deviation.',
    requiredMentions: [
      '147,835',
      '141,777',
      '12,600',
      '34,784',
      '138,914',
      '5 December 1958',
      '2,300 drivers',
      'Theil-Sen',
      'Institution for the Diffusion of Knowledge',
      '171,079',
      '101,388',
      '36029'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Preston: 147,835 usual residents; 141,777 in households; 6,058 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000123' },
      { claim: 'Nomis, Census 2021 TS007A: Preston and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000123,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Preston 34,784 students of 138,914 aged 5 and over (25.0 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000123,E92000001' },
      { claim: 'Department for Transport road traffic statistics, count point 36029, annual average daily flow 2000 to 2025.', url: 'https://roadtraffic.dft.gov.uk/api/average-annual-daily-flow?filter[count_point_id]=36029' },
      { claim: 'GOV.UK, Highways England, England\'s first motorway turns 60: 5 December 1958, 2,300 drivers, eight-mile Preston bypass.', url: 'https://www.gov.uk/government/news/englands-first-motorway-turns-60-with-major-technology-upgrade' },
      { claim: 'University of Lancashire, About us: founded 1828 as the Institution for the Diffusion of Knowledge; Preston Campus.', url: 'https://www.lancashire.ac.uk/about-us' }
    ],
    rejectedClaims: [
      'Preston Guild dates: the Guild site did not load and Preston City Council returned HTTP 403, so not stated.',
      'The upgrade cost figures in the 2018 GOV.UK article: pound amounts, excluded by the one-currency rule.',
      'That count point 36029 lies on the original 1958 carriageway: the source does not say which junctions the bypass spanned, so the page does not claim it.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Department for Transport, Highways England, National Highways or the University of Lancashire.'
    ]
  }
};
