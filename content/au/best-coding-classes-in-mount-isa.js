'use strict';
// Mount Isa (cg- regional city page, Australia cluster Phase 7, row 191). Shaped page (best): leads with teenagers and
// adults. Spine: how much of the sky can you see from each point in and around Mount Isa, and does the shortcut agree?
// Data: SRTM 1 arc-second elevation (NASA, public domain) through the OpenTopoData public API, dataset srtm30m, fetched
// 10 October 2026 (scratchpad au/r8/dl/isa_dem.json): 134 x 151 grid, step 0.0003 degrees (about 33 by 31 m), latitude
// -20.745 to -20.705, longitude 139.470 to 139.515; 20,234 points; elevation 279 to 464 m, mean 366.9. Sky view factor
// by our code (au/r8/isa_svf.py), horizon method, SVF = 1 - mean(sin horizon angle): radius 600 m, 16 directions,
// 10,434 interior cells, mean 0.9552, minimum 0.5636, 29.2 percent below 0.95, 5.5 percent below 0.90. On the 4,088 cells
// that fit every radius: 300 m 0.9625, 600 m 0.9591, 1,200 m 0.9568; 8 directions 0.9595, 32 directions 0.9587.
// Slope-only shortcut (1 + cos slope) / 2: mean 0.9975, correlation 0.752 with the horizon method, mean absolute
// difference 0.0422. Lesson family: sky view factor (terrain openness) from an elevation grid; screened free site-wide
// on 10 October 2026 and claimed by AU-R8.
// Place facts read raw on 10 October 2026: ABS Census 2021 QuickStats, Mount Isa Significant Urban Area (3013), with
// Queensland and Australia: 18,317 people; median age 31; 4,430 families; 8,714 private dwellings; 2.6 people per
// household; separate house 4,751 (75.1 percent; Qld 74.8; Australia 72.3); flat or apartment 267 (4.2; Qld 12.5);
// Professionals 1,588 (17.3; Qld 21.4; Australia 24.0); Technicians and Trades Workers 1,925 (21.0; Qld 13.7);
// Bachelor Degree level and above 2,029 (14.5; Qld 21.9; Australia 26.3); aged 15 to 19: 1,170 (6.4); aged 20 to 24:
// 1,320 (7.2). ABS ERP Mount Isa LGA (35300) 30 June 2025: 18,585. Queensland term dates from education.qld.gov.au.
// Excluded by the brief and cluster rules: mining production, money and health figures; income, rent, mortgage,
// ancestry, birthplace, language, religion. The location of the lowest sky view value is not described.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'MOUNT ISA', label: 'Mount Isa', blurb: 'Mount Isa, where an elevation grid and a little trigonometry measure how much sky each spot can see.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-mount-isa',
  code: 'mtis',
  accent: '#825A4A',
  accentRationale: 'Mount Isa: a weathered ironstone brown (HSV saturation 0.43, value 0.51, hue 15), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 5.9:1 on white and 4.9:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Mount Isa',
    eyebrow: 'Mount Isa, north west Queensland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Queensland', href: '/coding-and-ai-classes-in-queensland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Mount Isa, Queensland',
  title: 'Best Coding Classes in Mount Isa | Online, Teens and Adults',
  description: 'Live online coding and Python classes for Mount Isa teenagers and adults, with a project that measures how much open sky each point in the city can see.',
  ogDescription: 'Mount Isa coding classes built around one question: from any spot in town, how much of the sky can you actually see?',
  twitterDescription: 'Coding classes for Mount Isa teens and adults, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Mount Isa Learners',
    description: 'Level-matched online Python, grids, geometry, numerical methods and data analysis for teenagers and adults in Mount Isa and north west Queensland, taught live in English.'
  },

  h1: 'Coding classes in Mount Isa',
  capsuleQ: 'What are the best coding classes in Mount Isa?',
  capsule: 'Classes in which a Mount Isa teenager or adult turns a public elevation grid into answers about their own surroundings, then defends each choice of radius and method to a teacher. The 2021 Census recorded 18,317 people in the urban area. Lessons run live online, one to one or in a small level-matched group, and the first is free.',
  lead: 'Stand on a flat plain and you can see the whole dome of the sky. Stand in a gully or beside a ridge and part of it disappears behind the land. Geographers measure this with a number called the sky view factor, from 1 for a completely open spot down towards 0 at the bottom of a deep slot. NASA\'s radar survey of the Earth gives Mount Isa\'s ground height every 30 metres or so, and from those 20,234 heights a Python program can work out the sky view factor for each point. Across 10,434 points the average is 0.9552. A popular shortcut that looks only at the local slope says 0.9975. Our Mount Isa learners find out why the two disagree and which one to trust.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Mount Isa.',

  picks: {
    eyebrow: 'Course picks for Mount Isa',
    h2: 'Starting points for a Mount Isa learner',
    intro: 'Each builds towards the sky view project below. A free lesson chooses between them, and nobody is asked for a card.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from scratch to two-dimensional lists, loops over a grid and simple plots.' },
      { course: 'maths-through-coding', band: 'Ages 11 to 16', note: 'Angles, tangents and coordinates, learned by drawing them with code.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'NumPy arrays, summaries and the care needed when comparing two methods.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Full Python, including performance, vectorised code and testing numerical work.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Mount Isa in the Census',
      h2: 'A young city of 18,317 in the north west',
      intro: 'What the 2021 Census recorded for the Mount Isa urban area, beside Queensland and national figures.',
      body: [
        { kind: 'p', text: 'Census night found 18,317 residents with a median age of 31. Between them were 4,430 families and 8,714 private dwellings, at an average of 2.6 people per household.' },
        { kind: 'table', caption: 'Mount Isa shares compared (2021 Census)', head: ['Group', 'Mount Isa', 'Queensland', 'Australia'], rows: [
          ['Technicians and trades workers (1,925 people)', '21.0%', '13.7%', '12.9%'],
          ['Professionals (1,588 people)', '17.3%', '21.4%', '24.0%'],
          ['Bachelor degree or above (2,029 people)', '14.5%', '21.9%', '26.3%'],
          ['Separate houses (4,751 dwellings)', '75.1%', '74.8%', '72.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Few apartments', p: 'Flats and apartments made up 267 dwellings, 4.2% of the total, against 12.5% across Queensland.' },
          { h3: 'Plenty of young adults', p: 'There were 1,170 residents aged 15 to 19 and 1,320 aged 20 to 24, 7.2% of the population in that second band.' },
          { h3: 'The council area today', p: 'The ABS estimates 18,585 people in the Mount Isa council area at 30 June 2025, on a wider boundary than the urban count.' }
        ] },
        { kind: 'p', text: 'The bureau perturbs small Census counts slightly to protect privacy, so individual rows need not add up to the published totals. Figures here are copied exactly as published, and none of them is our own sum of rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How much sky can each point in Mount Isa see?',
      intro: 'Ground heights from NASA\'s Shuttle Radar Topography Mission, about 33 by 31 metres apart, turned into a sky view factor for every point with Python.',
      body: [
        { kind: 'table', caption: 'Sky view factor across the Mount Isa grid (our calculation, 10 October 2026)', head: ['Setting', 'Points measured', 'Average sky view factor'], rows: [
          ['Look 600 m out in 16 directions', '10,434', '0.9552'],
          ['Same points, slope-only shortcut', '10,434', '0.9975'],
          ['Look 300 m out (shared points)', '4,088', '0.9625'],
          ['Look 1,200 m out (shared points)', '4,088', '0.9568'],
          ['8 directions instead of 16 (shared points)', '4,088', '0.9595']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Walk out from each point', p: 'For every grid point the program steps outwards in 16 compass directions, up to 600 metres, recording the steepest angle up to the land in each direction. That angle is the horizon.' },
          { h3: '2. Turn horizons into sky', p: 'The sine of each horizon angle is the slice of sky hidden in that direction. One minus their average is the sky view factor: 1 means nothing is hidden at all.' },
          { h3: '3. Read the results', p: 'Most of the grid is open, but 29.2% of points fall below 0.95 and 5.5% below 0.90. The lowest value, 0.5636, means more than two fifths of the sky is hidden.' }
        ] },
        { kind: 'callout', h3: 'Why the shortcut sees too much sky', p: 'The slope-only formula, one plus the cosine of the slope, halved, only knows how steep the ground is under your feet. It cannot see a ridge 400 metres away. Over the same 10,434 points it averages 0.9975 against 0.9552, the two agree with a correlation of only 0.752, and they differ by 0.0422 on average. Choosing the radius matters too: a 300 metre search misses distant hills and reports more sky than a 1,200 metre search on the same points.' },
        { kind: 'p', text: 'The grid spans latitudes 20.745 to 20.705 south and longitudes 139.470 to 139.515 east, with heights from 279 to 464 metres. Edge points, where a full 600 metre search would leave the grid, are not measured. All sky view figures are our own calculations from the public SRTM data.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Measuring terrain honestly',
      h2: 'Choices that change a terrain measurement',
      intro: 'Worked out on Mount Isa\'s heights, then reused for solar panels, radio coverage, shading in streets or drainage studies.',
      body: [
        { kind: 'table', caption: 'Decisions tested on the Mount Isa grid', head: ['Decision', 'Options tried', 'Effect on the average'], rows: [
          ['Search radius', '300, 600 and 1,200 m', 'Falls from 0.9625 to 0.9568 as distant land appears'],
          ['Number of directions', '8, 16 and 32', 'Barely moves: 0.9595, 0.9591, 0.9587'],
          ['Method', 'Horizon search against slope-only', '0.9552 against 0.9975'],
          ['Edges', 'Skip points too near the boundary', 'Only 10,434 of 20,234 points measured']
        ] },
        { kind: 'p', text: 'The direction count turned out not to matter much, while the radius and the method mattered a great deal. Learning to test which settings move an answer, and to report them alongside it, is the difference between a measurement and a guess with decimals.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Load the grid, compute the horizon in one direction for one point by hand, then loop it across the whole map.' },
          { h3: 'University students', p: 'Vectorise the search with NumPy, test sensitivity to radius and resolution, and compare with published methods.' },
          { h3: 'Adults at work', p: 'Any spatial analysis, from site planning to sensor placement, depends on the same radius and edge decisions.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with NASA, OpenTopoData, the ABS or the Queensland Government. The elevation data and statistics are theirs; the sky view calculations are our own work.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Mount Isa',
      h2: 'Queensland time, no clock changes',
      intro: 'The details that decide when a Mount Isa learner can join a live lesson.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One time zone all year', p: 'Mount Isa keeps Queensland time, UTC plus 10, with no daylight saving.' },
          { h3: 'India time', p: 'India time is four and a half hours behind Mount Isa in every season.' },
          { h3: 'Summer shifts elsewhere', p: 'From October to April Sydney and Melbourne move an hour ahead of Mount Isa, while lesson times here stay put.' }
        ] },
        { kind: 'spec', title: 'Queensland school dates', p: 'The Queensland Department of Education lists Term 4 of 2026 from Tuesday 6 October to Friday 11 December, with the summer holidays running until Tuesday 26 January 2027. Lessons can pause over the break if a family wishes.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first loop to spatial analysis',
    intro: 'The bands are only a guide; the free lesson finds the actual start.',
    cols: [
      { band: 'Ages 11 to 14', h3: 'Grids and angles', p: 'Storing a small map in a list of lists and drawing angles with code.', courses: ['maths-through-coding', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'Searching a map', p: 'Loops over rows and columns, trigonometry in functions and comparing two methods fairly.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'University', h3: 'Numerical terrain work', p: 'NumPy, vectorised searches, sensitivity tests and reading the research methods.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-science-complete-masterclass-college'] },
      { band: 'Adults', h3: 'Spatial data at work', p: 'Automating grid analysis and reporting settings alongside results.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant choose the right method?',
    intro: 'It often picks the quickest one.',
    p1: 'Ask a chatbot for the sky view factor of an elevation grid and there is a fair chance it returns the slope-only formula, because it is short and appears in many tutorials. Run on Mount Isa\'s grid, that answer is tidy, fast and wrong by 0.0422 on average.',
    p2: 'Our Mount Isa learners have AI tools draft the code, then check it against a single point worked by hand and against the horizon method. They also ask what radius the tool assumed, a question the tool rarely raises on its own.',
    closer: 'A Mount Isa learner who has seen two respectable formulas disagree on the same ground will keep asking which assumptions an answer rests on, with any AI tool that comes after 2026.',
    blogAnchor: 'what coding teaches beyond the code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Outback address, city classroom',
    intro: 'A live online lesson works the same in Mount Isa as anywhere on the coast.',
    cells: [
      { h3: 'Booked in Queensland time', p: 'With no daylight saving in Queensland, a lesson slot stays at the same Mount Isa hour all year.' },
      { h3: 'Fitted to Queensland years', p: 'Teachers know the Queensland year levels, including senior students working towards the QCE, and teach in English.' },
      { h3: 'Programming first, paperwork never', p: 'The free session is hands-on coding. You then receive our suggestion for a course and time, and we never ask for payment details.' },
      { h3: 'Level-matched groups', p: 'Five to ten learners at one stage, gathered from across Australia and beyond so every level has a usable time.' },
      { h3: 'Twice a week', p: 'Close to eight lessons a month, with holidays and exam weeks planned well ahead.' },
      { h3: 'Rosters welcome', p: 'Adults on rotating shifts can switch group slots or choose private lessons instead.' }
    ],
    spec: { title: 'Every message in Mount Isa time', p: 'Times are written in Queensland time, so there is nothing to convert from southern daylight saving.' }
  },

  fees: {
    h2: 'Prices for coding classes in Mount Isa',
    intro: 'All three options at a glance.',
    first: 'A free lesson, after which we suggest a level, a course and a time.',
    group: 'Roughly eight group lessons a month, five to ten learners at one level.',
    private: 'Roughly eight one-to-one lessons a month with the same teacher.',
    closer: 'Distance adds no surcharge: Mount Isa families pay the US dollar rate charged everywhere else in Australia. No money is taken until the trial has agreed a course and time; holidays, missed lessons and format changes are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from people who learn with us',

  book: {
    h2: 'Share a few details and we will shape the trial',
    intro: 'The first exercise is matched in advance: a grid drawing for a Year 7 beginner, the one-direction horizon search for a Year 11 student, or the full sky view comparison for an adult.',
    success: 'Thank you. We will be in touch soon about a coding class in Mount Isa.'
  },

  faq: {
    h2: 'Mount Isa coding class questions answered',
    intro: 'The first things Mount Isa parents and adult learners want to know.',
    items: [
      { q: 'How many people live in Mount Isa?', a: 'The 2021 Census counted 18,317 people in the Mount Isa urban area. The ABS estimate for the council area at 30 June 2025 is 18,585.' },
      { q: 'What is a sky view factor?', a: 'A sky view factor is the share of the sky visible from a point, from 1 for a completely open spot to near 0 for one surrounded by high ground or walls. It is calculated from the angle to the horizon in many directions.' },
      { q: 'What is the Mount Isa sky view project?', a: 'Learners download public elevation data for Mount Isa, write Python to find the horizon in 16 directions from each point, calculate the sky view factor, and compare the result with a slope-only shortcut and with different search distances.' },
      { q: 'Why not just use the slope?', a: 'Slope describes only the ground beneath a point, so it ignores hills further away. On the Mount Isa grid the slope-only shortcut averages 0.9975, well above the 0.9552 from a proper horizon search.' },
      { q: 'Can Year 11 and 12 students take part?', a: 'Yes. Senior students fit the lessons around their QCE subjects, and their assessed school work remains entirely their own.' },
      { q: 'When do lessons run for Mount Isa?', a: 'After school, in the evening or at weekends, agreed during the trial and written in Queensland time. India time is four and a half hours behind Mount Isa all year.' },
      { q: 'Do you teach children under 12?', a: 'Yes, from age 6 with visual tools such as Scratch, while the sky view project here suits teenagers and adults.' },
      { q: 'Is there a Modern Age Coders office in Mount Isa?', a: 'No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.', boiler: true },
      { q: 'What do Mount Isa coding classes cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How large are the groups?', a: 'Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'More in Queensland',
    h2: 'Other Queensland pages worth a look',
    html: 'Towards the coast there are <a class="cg-inline-link" href="/ai-and-programming-classes-in-townsville">AI and programming classes in Townsville</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-cairns">vibe coding and AI agents in Cairns</a>. Further south, read <a class="cg-inline-link" href="/online-coding-and-python-classes-in-mackay">online coding and Python in Mackay</a>, or see everything across the state at <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">coding and AI classes in Queensland</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Mount Isa and Queensland',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-townsville', label: 'Townsville' },
    { href: '/vibe-coding-and-ai-agents-classes-in-cairns', label: 'Cairns' },
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-mtis .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3vw, 2.5rem); }
.cg-root.cg-mtis .cg-hero h1 { font-weight: 690; letter-spacing: -0.016em; line-height: 1.1; }
.cg-root.cg-mtis .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-mtis .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-mtis .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.008em; }
.cg-root.cg-mtis .cg-grid-3 { gap: clamp(1rem, 2.6vw, 1.9rem); }
.cg-root.cg-mtis .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-mtis .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mtis .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-mtis .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Mount Isa Significant Urban Area, ABS Census 2021 QuickStats, area code 3013, with Queensland and Australia (read 10 October 2026): 18,317 people; median age 31; 4,430 families; 8,714 private dwellings; 2.6 people per household; separate house 4,751 (75.1 percent; Qld 74.8; Australia 72.3); flat or apartment 267 (4.2 percent; Qld 12.5); Professionals 1,588 (17.3 percent; Qld 21.4; Australia 24.0); Technicians and Trades Workers 1,925 (21.0 percent; Qld 13.7; Australia 12.9); Bachelor Degree level and above 2,029 (14.5 percent; Qld 21.9; Australia 26.3); aged 15 to 19: 1,170 (6.4 percent); aged 20 to 24: 1,320 (7.2 percent). ABS ERP Mount Isa LGA (35300) 30 June 2025: 18,585. Queensland Department of Education term dates: 2026 Term 4 Tuesday 6 October to Friday 11 December; summer holidays to Tuesday 26 January 2027. IANA tz Australia/Brisbane UTC+10, no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Sky view factor (terrain openness) from an elevation grid. SRTM 1 arc-second (NASA, public domain) via OpenTopoData public API dataset srtm30m, fetched 10 October 2026: 134 x 151 grid, step 0.0003 degrees (dy 33.2 m, dx 31.2 m), latitude -20.745 to -20.705, longitude 139.470 to 139.515, 20,234 points, elevation 279 to 464 m, mean 366.9. Horizon method (SVF = 1 - mean over directions of sin of the maximum horizon angle): R 600 m, 16 directions: 10,434 cells, mean 0.9552, minimum 0.5636, 29.2 percent below 0.95, 5.5 percent below 0.90. Common 4,088 cells: R 300 m mean 0.9625; 600 m 0.9591; 1,200 m 0.9568; 600 m with 8 directions 0.9595; 32 directions 0.9587. Slope-only (1 + cos slope)/2 on the 10,434 cells: mean 0.9975, correlation 0.752, mean absolute difference 0.0422.',
    requiredMentions: [
      '18,317',
      '8,714',
      '18,585',
      '0.9552',
      '0.9975',
      '10,434',
      '0.5636',
      'correlation of only 0.752',
      'Outback address, city classroom'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Mount Isa Significant Urban Area (3013): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3013' },
      { claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Mount Isa LGA 35300, total persons, 2025.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.35300.LGA2025.A?format=csvfilewithlabels' },
      { claim: 'OpenTopoData, SRTM 30 m dataset documentation (NASA Shuttle Radar Topography Mission, public domain).', url: 'https://www.opentopodata.org/datasets/srtm/' },
      { claim: 'Queensland Department of Education, term dates.', url: 'https://education.qld.gov.au/about-us/calendar/term-dates' }
    ],
    rejectedClaims: [
      'Mine production, mine size, company or money figures for Mount Isa: excluded by the brief.',
      'What lies at the point with the lowest sky view factor: it was not checked against any land use source, so it is not described.',
      'Health, heat or ultraviolet effects of sky openness: excluded by the cluster rules.',
      'Weather or climate statistics: the Bureau of Meteorology is excluded as a source for this cluster.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'A journal citation for the horizon definition: the publisher returned 403 to our check, so no paper is cited.',
      'Any affiliation with NASA, OpenTopoData, the ABS or the Queensland Government.'
    ]
  }
};
