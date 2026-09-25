'use strict';
// Sutton (cg- London borough page, UK cluster Phase 5, row 165). Named sources only.
// Spine: rhythm in gappy data. Environment Agency Water Quality Archive (new API, environment.data.gov.uk/water-quality,
// limit 250 a page, text/csv), sampling point TH-PWAR0045 "WANDLE ( CARSHALTON BRANCH ) AT BUTTER HILL BRIDGE",
// 528200E 165128N, inside the ONS December 2024 BFC boundary of Sutton (E09000029) by our ray-casting test. 3,899
// results; 232 water temperatures, 6 January 2000 to 11 September 2026; 11-13 samples a year 2000-2009, 4 a year 2010
// and 2013-2016, none in 2011-2012 (991-day gap ending 7 January 2013), 1 in 2017, 3 in 2020, 9-12 otherwise.
// Treating the samples as evenly spaced and taking an FFT gives a peak at 11.6 samples = 489 days at the mean spacing
// of 42.2 days (wrong). Lomb-Scargle on the true dates (periods 20-1,500 days, normalised): peak 366 days, power 0.604;
// 500 shuffles (seed 20260925): 99th percentile of the maximum 0.089, none reached 0.598. Annual sine fit: mean 11.68 C,
// amplitude 2.88 C, warmest about day 206 (25 July), R2 0.60. Other determinands at 365 days: dissolved oxygen 0.261,
// total oxidised nitrogen 0.118, pH 0.041 (peak 1,233 d, weak), ammoniacal nitrogen 148 of 231 reported "<0.03".
// Lesson family: Lomb-Scargle on irregular samples + censored values. Liverpool taught Fourier on a dense regular tide
// record and Wrexham rejected a periodogram; this page's point is uneven sampling, a different dataset and lesson.
// Sutton Council's site answered every libraries URL with HTTP 202 and an empty body (a bot challenge); not
// circumvented, so no library list is given.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'SUTTON', blurb: 'Carshalton House, the River Wandle and a project that finds a yearly rhythm in 26 years of patchy river samples.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-sutton-london',
  code: 'sut',
  accent: '#623A88',
  accentRationale: 'Sutton: a clear violet from the solver (6.87:1 on every paper tint), lighter and redder than the Ealing indigo and far from the Croydon teal',
  pageType: 'governorate',
  place: {
    name: 'Sutton',
    eyebrow: 'London Borough of Sutton',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Sutton, London',
  title: 'Coding Classes in Sutton, Cheam, Carshalton | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Sutton: Cheam, Carshalton, Wallington, Beddington, Hackbridge and Worcester Park. Ages 6 to 67.',
  ogDescription: 'Sutton coding and Python classes, with a project where learners find the yearly rhythm of the River Wandle in 26 years of irregular Environment Agency samples.',
  twitterDescription: 'Sutton coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Sutton Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Sutton, taught live in English.'
  },

  h1: 'Coding classes in Sutton',
  capsuleQ: 'What are the best coding classes in Sutton?',
  capsule: 'Sutton is the south London borough of Cheam, Carshalton, Wallington, Beddington, Hackbridge, Worcester Park and Belmont, home to 209,639 people at the 2021 Census, with a branch of the River Wandle running through Carshalton. The classes worth choosing teach a learner to handle real data as it actually arrives, with gaps, missing years and values too small to measure. This page does exactly that with 26 years of Environment Agency river samples from Carshalton. Teaching is live on video from India for anyone aged 6 to 67, either one learner with one teacher or a group of five to ten at a single level. The first lesson costs nothing. After that, group classes are USD 100 a month and private lessons USD 150 a month.',
  lead: 'Since January 2000 the Environment Agency has been taking water samples from the Carshalton branch of the River Wandle at Butter Hill Bridge, and it publishes every result. Water temperature has been measured 232 times. You would expect a clear yearly rhythm: cold in January, warm in July. The difficulty is the timing of the samples. For ten years they came about monthly; then for several years only four a year; then none at all for 991 days; then monthly again. Our learners first try the textbook tool, a Fourier transform, which assumes evenly spaced samples, and it confidently reports a cycle of 489 days. Then they use a method built for uneven data, the Lomb-Scargle periodogram, and the true year appears at 366 days.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Sutton.',

  picks: {
    eyebrow: 'Course picks for Sutton',
    h2: 'Courses Sutton learners often choose first',
    intro: 'Think of a Year 1 child in Wallington who dips a net in the Wandle at weekends, a Year 7 pupil in Cheam who loves science practicals, a Year 12 student in Carshalton choosing between geography and computer science, and a retired engineer in Worcester Park who wants to do something useful with open data. Each can begin with one free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch river with a thermometer that rises and falls through the seasons, and a first line graph.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with real readings: the warmest and coldest sample, and a chart of a year of river temperatures.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including this page\'s Lomb-Scargle project on Environment Agency data.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who work with incomplete records and want reliable ways to find patterns without fooling themselves.' }
    ]
  },

  sections: [
    {
      id: 'sutton', tint: '', eyebrow: 'Sutton in numbers',
      h2: '209,639 residents, 209 listed buildings and one river branch',
      intro: 'Each figure below is published by the named organisation or counted by us from its open data.',
      body: [
        { kind: 'table', caption: 'Sutton, figure by figure', head: ['Measure', 'Figure', 'From'], rows: [
          ['Usual residents at the 2021 Census', '209,639', 'ONS table TS001, via Nomis'],
          ['National Heritage List entries inside the borough', '209: 1 Grade I, 14 Grade II*, 194 Grade II', 'Historic England data, counted 25 September 2026'],
          ['River samples at Butter Hill Bridge, all measures', '3,899 results since 6 January 2000', 'Environment Agency Water Quality Archive'],
          ['Water temperatures among them', '232', 'Environment Agency Water Quality Archive'],
          ['Services at Sutton station', 'Southern and Thameslink', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'One Grade I', p: 'Sutton\'s single Grade I entry is the great hall of Beddington Place. A pigeon house to its north west is listed at Grade II*.' },
          { h3: 'Carshalton House', p: 'Carshalton House is Grade II*, and so are two structures in its grounds listed separately: the Water Pavilion and the Hermitage or Grotto.' },
          { h3: 'Chapels and houses', p: 'Other Grade II* entries include the Lumley Chapel, which the list describes as the remains of the old Church of St Dunstan, Whitehall in Cheam, and the Old Rectory at Carshalton.' }
        ] }
      ]
    },
    {
      id: 'samples', tint: 'tint', eyebrow: 'The data',
      h2: 'Twenty-six years of samples, taken unevenly',
      intro: 'Sampling point TH-PWAR0045 is the Carshalton branch of the Wandle at Butter Hill Bridge. We checked its grid reference against the ONS boundary: it lies inside Sutton.',
      body: [
        { kind: 'table', caption: 'Water temperature samples per year at Butter Hill Bridge', head: ['Years', 'Samples each year', 'What a learner sees'], rows: [
          ['2000 to 2009', '11 to 13', 'Roughly monthly'],
          ['2010, and 2013 to 2016', '4', 'Roughly quarterly'],
          ['2011 and 2012', '0', 'A gap of 991 days, ending on 7 January 2013'],
          ['2017 and 2020', '1 and 3', 'Very sparse'],
          ['2018, 2019, 2021 to 2025', '10 to 12', 'Roughly monthly again'],
          ['2026, to 11 September', '9', 'The latest samples']
        ] },
        { kind: 'p', text: 'Across all 232 samples the coldest reading was 3.65 °C on 27 January 2006 and the warmest 19.2 °C on 17 August 2022. The same visits also measured dissolved oxygen, nitrogen compounds, phosphate and pH, which lets learners ask a better question than "does the temperature follow the seasons?": which of these measures follow a yearly rhythm at all?' },
        { kind: 'p', text: 'We would have named Sutton\'s libraries here. Every libraries address we tried on the council\'s website returned an empty challenge response to our automated reader, and we do not try to get past such checks, so no list appears; Sutton Council\'s own site has it.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Finding the year in gappy data with Lomb-Scargle',
      intro: 'Learners compare the textbook method with one designed for uneven sampling, and then check the answer is not luck.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. The trap', p: 'A Fourier transform assumes the samples are equally spaced. Feed it the 232 temperatures in order and its strongest cycle is 11.6 samples long, which at the average spacing of 42.2 days is 489 days. Wrong.' },
          { h3: '2. The fix', p: 'The Lomb-Scargle periodogram fits a wave of each trial length to the real dates, gaps and all, and reports how much of the variation each length explains.' },
          { h3: '3. The check', p: 'Shuffle the temperatures among the dates 500 times and rerun. If shuffled data can produce a peak as tall as the real one, the rhythm might be chance.' }
        ] },
        { kind: 'table', caption: 'Lomb-Scargle on the true sample dates, run 25 September 2026', head: ['Measure', 'Strength of a 365-day cycle (0 to 1)', 'Reading'], rows: [
          ['Water temperature', '0.598 (peak at 366 days)', 'A strong yearly rhythm'],
          ['Dissolved oxygen', '0.261', 'A clear yearly rhythm'],
          ['Total oxidised nitrogen', '0.118', 'A weak one'],
          ['pH', '0.041', 'No yearly rhythm to speak of'],
          ['Largest peak in 500 shuffles, 99th percentile', '0.089', 'What chance alone reaches']
        ] },
        { kind: 'p', text: 'None of the 500 shuffles came near the real temperature peak, so the yearly cycle is not an accident of sampling. Fitting a single wave to all 232 readings gives an average of about 11.7 °C, a swing of about 2.9 °C either side, and the warmest point of the year around 25 July. The wave explains 60% of the variation between samples; the rest is weather, time of day and everything else a single visit catches.' },
        { kind: 'callout', h3: 'Why this is not a job to hand to a chatbot', p: 'Ask an AI tool to find the cycle in this data and it may well reach for the Fourier transform, because most examples it has seen use evenly spaced data. It will print 489 days without hesitation. A learner who knows why the method failed, how Lomb-Scargle handles the gaps, and how a shuffle test guards against false rhythms can check any tool\'s answer instead of trusting it.' }
      ]
    },
    {
      id: 'belowlimit', tint: 'tint', eyebrow: 'A second lesson in the same file',
      h2: 'When most results say "less than"',
      intro: 'Not every number in an environmental dataset is a number.',
      body: [
        { kind: 'p', text: 'Of 231 results for ammoniacal nitrogen at Butter Hill Bridge, 148 are recorded as "<0.03", meaning below the laboratory\'s reporting limit, and one as "<0.3". Only 82 are plain numbers. A naive program either crashes on the "<" or silently drops those rows, and both mislead: dropping them keeps only the higher readings and makes the river look more polluted than the record shows.' },
        { kind: 'p', text: 'Learners try three honest options, reporting the share below the limit, substituting the limit itself as an upper bound, and analysing the numbers with the limitation stated. Pupils working towards GCSE can manage the first two; sixth formers can meet the statistical methods designed for such censored data. The same care matters wherever a sensor or test has a floor, from medical assays to air quality.' },
        { kind: 'p', text: 'One more caution learners are asked to state. A wave fitted to each period separately gives an average of 11.3 °C in 2000 to 2009, 11.8 °C in 2010 to 2019 and 12.2 °C from 2020, but the middle decade has only 44 samples, so that rise is a question for a proper trend test, not a finding. The samples belong to the Environment Agency; the analysis, the shuffles and the percentages are ours, run on 25 September 2026. The Environment Agency, Sutton Council, Historic England, TfL and the ONS have no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Southern, Thameslink and a desk at home',
      intro: 'Sutton is a rail borough more than a Tube one. For our lessons, neither matters.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Sutton station', p: 'TfL\'s open data lists Southern and Thameslink services at Sutton (London) station.' },
          { h3: 'Worcester Park to Wallington', p: 'Learners from the western edge of the borough and from the east can share one class without either making a journey.' },
          { h3: 'No sampling gaps', p: 'Unlike the river record, classes run to a regular pattern: five to ten learners at one level, meeting at a set UK time.' }
        ] },
        { kind: 'spec', title: 'Sutton and its neighbours', p: 'Sutton is one of 32 London boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists every borough and the City, linking each page when it is ready, among them <a class="cg-inline-link" href="/coding-classes-in-croydon-london">Croydon</a> to the east.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a thermometer graph to a periodogram',
    intro: 'The free lesson tells us which rung fits. A learner\'s school year gives us a first guess and nothing more.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Seasons on a graph', p: 'Children plot warm and cold months in Scratch and spot the pattern that repeats every year.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Messy real data', p: 'Python that reads a real file, skips or flags odd values, and draws a year of readings.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Cycles and chance', p: 'Waves, periodograms and shuffle tests on irregular data, excellent material for a computing or geography project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Trustworthy patterns', p: 'Adults learn how to find a genuine pattern in incomplete records and to say clearly what the data cannot show.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can analyse a spreadsheet in seconds. Why should a Sutton teenager learn to do it properly?',
    intro: 'Because real data is gappy, and the confident answer is often the wrong one.',
    p1: 'Most examples an AI model learned from are tidy: evenly spaced, complete, every value a number. Real records are not. The Wandle file has a 991-day hole, years with four samples, and a column where most entries begin with "<". A tool that assumes tidy data returns a 489-day cycle or a river that looks dirtier than it is, and it will not warn you. A person who understands the data catches both.',
    p2: 'Learners who have worked through this project take three habits into any subject: look at when the data was collected before looking at what it says, choose a method whose assumptions fit, and test whether a pattern could arise by chance. Automated tools will keep getting faster. Knowing when their assumptions break is the part that stays human.',
    closer: 'Rivers, hospitals and businesses all keep imperfect records. A Sutton learner who can find a true signal in them, and admit what the data cannot tell, will always be useful.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Cheam to Hackbridge, lessons by live video',
    intro: 'In any corner of Sutton, the class begins as soon as the call connects.',
    cells: [
      { h3: 'From home', p: 'A laptop or desktop, headphones and a dependable connection are all the equipment a learner needs.' },
      { h3: 'English school stages', p: 'We talk in the Key Stages that schools in England use, from Key Stage 1 up to sixth form, naming GCSE and A level where they fit. Every lesson is taught in English.' },
      { h3: 'First lesson free', p: 'A proper session with a teacher, not a sales conversation, that ends with a suggested level and course. No payment details are requested.' },
      { h3: 'Five to ten at one level', p: 'Classes bring together learners at the same stage from across the UK and beyond, so a convenient time is usually available.' },
      { h3: 'Two lessons a week', p: 'Most classes meet on two evenings each week and break for half terms, holidays and exams, as agreed with the teacher.' },
      { h3: 'Times in UK time', p: 'Our teachers are based in India, but every time we send is written as it reads in Sutton.' }
    ],
    spec: { title: 'A compact borough, a wide class', p: 'About 210,000 people live in Sutton, and a good class still needs five learners at the same level free at the same hour, which is why our groups reach well beyond it.' }
  },

  fees: {
    h2: 'Fees for Sutton families',
    intro: 'The first lesson is free; after that there is one monthly fee, the same across Sutton.',
    first: 'A full first lesson with a teacher, free of charge, closing with our suggestion of level, course and time.',
    group: 'Around eight live lessons a month in a class of five to ten at one level.',
    private: 'Around eight live lessons a month, one learner and one teacher.',
    closer: 'Sutton families pay in US dollars, like every family outside India; no sterling prices appear anywhere on the site. There is nothing to pay until the free lesson is done and a course and regular time are agreed. The pricing page covers pausing, missed lessons and changing between a class and private teaching.'
  },

  reviewsH2: 'Families on Google, in their own words',

  book: {
    h2: 'Book a free lesson',
    intro: 'Share the learner\'s age or school year and one interest. The first lesson could be a Scratch seasons graph, a Python chart of river readings, or the Wandle project on this page.',
    success: 'Thank you. We have your Sutton lesson request.'
  },

  faq: {
    h2: 'Sutton questions, answered',
    intro: 'On the borough, the river project and how lessons run.',
    items: [
      { q: 'What is the population of Sutton?', a: 'The 2021 Census counted 209,639 usual residents in the London Borough of Sutton, according to Office for National Statistics table TS001.' },
      { q: 'Where do the River Wandle figures come from?', a: 'From the Environment Agency\'s Water Quality Archive, which publishes every result from its sampling points. We used point TH-PWAR0045, the Carshalton branch of the Wandle at Butter Hill Bridge, from January 2000 to September 2026.' },
      { q: 'What is a Lomb-Scargle periodogram?', a: 'A way to find repeating cycles in data taken at uneven times. For each trial cycle length it fits a wave to the actual dates and measures how much of the variation that wave explains, so gaps in the record do not distort the answer.' },
      { q: 'Why did the Fourier transform give 489 days?', a: 'Because it treats samples as equally spaced. The Wandle samples were monthly in some years, quarterly in others and absent for 991 days, so counting samples instead of days stretched the yearly cycle to about 489 days.' },
      { q: 'What does "<0.03" mean in the results?', a: 'That the amount was below the laboratory\'s reporting limit of 0.03 milligrams per litre. For ammoniacal nitrogen at Butter Hill Bridge, 148 of 231 results are recorded that way, so they must be handled, not deleted.' },
      { q: 'When are lessons for Sutton learners?', a: 'After the free lesson we suggest a regular weekly time from the classes at the learner\'s level that have space. Teachers are in India, and every time we give you is UK time.' },
      { q: 'What does a learner need?', a: 'A laptop or desktop, headphones or speakers, and a reliable connection. The river project needs only Python and the Environment Agency\'s free download.' },
      { q: 'Is there a Modern Age Coders centre in Sutton?', a: 'No. There is no Sutton centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Sutton cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Further across London and the UK',
    html: 'All 32 boroughs and the City are on the <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a>, with each linked once its page is live, for example <a class="cg-inline-link" href="/coding-classes-in-ealing-london">Ealing</a>, whose page also works with Environment Agency river data, and <a class="cg-inline-link" href="/coding-classes-in-newham-london">Newham</a>. Learners who want more data science can move on to our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">London AI and machine learning classes</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> shows how school stages compare between the four nations.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Sutton and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-croydon-london', label: 'Croydon' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-sut .cg-hero-grid { align-items: stretch; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-sut .cg-hero h1 { font-weight: 720; letter-spacing: -0.017em; line-height: 1.06; }
.cg-root.cg-sut .cg-capsule { border: 1px solid var(--cg-accent); border-radius: 6px; padding: 1rem; }
.cg-root.cg-sut .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sut .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-sut .cg-grid-3 { gap: clamp(0.9rem, 2.5vw, 1.8rem); }
.cg-root.cg-sut .cg-table caption { font-weight: 700; letter-spacing: 0.02em; }
.cg-root.cg-sut .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sut .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-sut .cg-ladder-col { border-left: 3px double var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-sut .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Sutton. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000029): 209,639 usual residents (208,425 households, 1,214 communal). Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 209 (I 1, II* 14, II 194); Grade I 1065672 BEDDINGTON PLACE (GREAT HALL ONLY); II* include 1065627 CARSHALTON HOUSE, 1183926 WATER PAVILION AT CARSHALTON HOUSE, 1357608 HERMITAGE OR GROTTO AT CARSHALTON HOUSE, 1183440 REMAINS OF OLD CHURCH OF ST DUNSTAN, NOW KNOWN AS THE LUMLEY CHAPEL, 1357580 WHITEHALL, 1065674 PIGEON HOUSE TO NORTH WEST OF BEDDINGTON PLACE, 1183473 The Old Rectory, Carshalton. TfL Unified API StopPoint 910GSUTTON (Sutton (London) Rail Station), 25 September 2026: Southern, Thameslink. Sutton Council (sutton.gov.uk/libraries, /w/libraries, /libraries-and-leisure) returned HTTP 202 with an empty body to curl on 25 September 2026: not circumvented, no library list used.',
    localProject: 'EA Water Quality Archive API (environment.data.gov.uk/water-quality), sampling point TH-PWAR0045 WANDLE ( CARSHALTON BRANCH ) AT BUTTER HILL BRIDGE, 528200 165128, FRESHWATER - RIVERS, OPEN; point inside Sutton BFC polygon (ray casting). Observations via /sampling-point/TH-PWAR0045/observation?limit=250&skip=n, Accept text/csv: 3,899 rows, 2000-01-06 to 2026-09-11. Temperature of Water n 232; per year 2000 11, 2001 12, 2002 11, 2003 12, 2004 12, 2005 12, 2006 12, 2007 13, 2008 12, 2009 12, 2010 4, 2013 4, 2014 4, 2015 4, 2016 4, 2017 1, 2018 11, 2019 12, 2020 3, 2021 12, 2022 12, 2023 11, 2024 10, 2025 12, 2026 9; longest gap 991 days ending 2013-01-07; min 3.65 C 2006-01-27, max 19.2 C 2022-08-17. FFT on sample index: peak 11.6 samples, mean spacing 42.2 d -> 489 d. scipy lombscargle normalised, periods 20-1,500 d (6,000 steps): temperature peak 366 d 0.604, 365 d 0.598; shuffles 500, seed 20260925, 99th pct of max 0.089, 0 exceed. Sine fit: mean 11.68, amplitude 2.88, peak day 206 (25 Jul), R2 0.60. 365-d power: DO mg/l 0.261 (n 231), TON 0.118 (n 229), pH 0.041 (n 228, peak 1,233 d 0.125), orthophosphate 0.043. Ammoniacal N: 231 results, 148 "<0.03", 1 "<0.3", 82 numeric. Era sine means: 2000-09 11.32 (n 119), 2010-19 11.75 (n 44), 2020-26 12.24 (n 69). Lesson family: Lomb-Scargle on irregular samples plus censored (below reporting limit) values, screened 25 September 2026 under the reuse rule (Liverpool Fourier on regular tide data; Wrexham periodogram rejected).',
    requiredMentions: [
      '209,639',
      'Lomb-Scargle',
      'Butter Hill Bridge',
      'TH-PWAR0045',
      'Beddington Place',
      'Carshalton House',
      'Lumley Chapel',
      'Hermitage or Grotto',
      '991 days'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Sutton E09000029: 209,639 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000029&measures=20100' },
      { claim: 'Environment Agency Water Quality Archive, sampling point TH-PWAR0045, all observations 2000-2026.', url: 'https://environment.data.gov.uk/water-quality/sampling-point/TH-PWAR0045/observation' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Sutton on 25 September 2026: 209 (1 I, 14 II*, 194 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'ONS Local Authority Districts December 2024 boundaries (BFC), Sutton E09000029.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2024_Boundaries_UK_BFC/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint 910GSUTTON (Sutton (London) Rail Station), 25 September 2026: Southern, Thameslink.', url: 'https://api.tfl.gov.uk/StopPoint/910GSUTTON' }
    ],
    rejectedClaims: [
      'Sutton Council library list: every libraries URL returned HTTP 202 with an empty body (bot challenge); not circumvented, so no libraries are named.',
      'That the Carshalton branch is spring-fed, and the history of the Carshalton ponds: not verified at a primary source for this build, so not stated.',
      'A warming trend in the Wandle: era means rise, but the 2010s have 44 samples and no trend test was run, so it is framed as a question only.',
      'Sutton grammar schools and 11+ admissions: left to the Phase 6 maths pages and not mentioned here; no admissions advice.',
      'BedZED and other Hackbridge claims: not read at a primary source for this build and not used.',
      'Census ethnicity, religion or country of birth for Sutton: never a standout; used only to order the build.'
    ]
  }
};
