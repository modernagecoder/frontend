'use strict';
// North Yorkshire (cg- county index, UK cluster Phase 7, row 241). Ceremonial county as used here: the seven 2021
// Census districts that now form North Yorkshire Council (ONS LAD April 2023 list: E06000065 North Yorkshire; Craven,
// Harrogate, Selby no longer listed), plus York, Middlesbrough and Redcar and Cleveland. Stockton-on-Tees, whose southern
// part is ceremonially in North Yorkshire, is covered whole on the County Durham page.
// Spine: does a law of gravity describe commuting? Data: 2011 Census WU01UK, location of usual residence and place of
// work, local authority level, all persons (Nomis NM_1203_1, read 26 September 2026), for the ten areas above.
// Distances between population centres: mean of the 2011 MSOA population-weighted centroids in each area (ONS Open
// Geography Portal, MSOA_Dec_2011_PWC). Our model (scratchpad nyk/grav.py): 90 ordered pairs, 1 zero flow; 62,358
// people commuting between the ten areas, 262,282 living and working in the same one. Log-linear least squares on the
// 89 non-zero pairs: flow ~ O^0.427 x D^0.691 / d^3.298, R^2 0.776; with both mass exponents fixed at 1, d^3.100, R^2
// 0.747; with Newton's square law (exponent 2), R^2 0.677. Largest under-prediction York to Hambleton 2,915 against
// 552 (centres 40.0 km apart); Redcar and Cleveland to Middlesbrough 10,569 but Middlesbrough to Redcar and Cleveland
// 5,111 (model 26,499). Outside the closed set: Harrogate to Leeds 8,481, Selby to Leeds 6,193, York to Leeds 5,023;
// Harrogate's largest flow inside the set is to Hambleton, 1,920.
// Lesson family: gravity model of spatial interaction, fitted by log-linear regression, with residuals and a closed-
// system caveat; screened (gravity model: 0 hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (our sum 1,098,768); ONS built-up areas checked
// against our OA sums (Middlesbrough area spans Redcar and Cleveland; Otley is almost wholly in Leeds, left out).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'NORTH YORKSHIRE', blurb: 'From the Dales to the Tees and the coast, and a project that tests whether commuting obeys a law of gravity.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-north-yorkshire',
  code: 'nyk',
  accent: '#54205C',
  accentRationale: 'North Yorkshire: a moorland heather purple from the solver (9.74:1 on the darkest paper tint), far from the Lancashire rose and the Lincoln green',
  pageType: 'governorate',
  place: {
    name: 'North Yorkshire',
    eyebrow: 'North Yorkshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Yorkshire and the Humber' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'York', href: '/best-coding-class-in-york' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'North Yorkshire',
  title: 'Coding Classes in North Yorkshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across North Yorkshire, from York, Harrogate and Scarborough to Middlesbrough, Redcar, Selby, Ripon and Skipton.',
  ogDescription: 'Coding classes for all of North Yorkshire, and a data project: fit a gravity model to real census commuting between ten areas, then find where the law breaks.',
  twitterDescription: 'North Yorkshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for North Yorkshire',
    description: 'Ability-placed online coding, Python, data science and mathematics for children, teenagers and adults across North Yorkshire, taught live in English.'
  },

  h1: 'Coding classes in North Yorkshire',
  capsuleQ: 'What are the best coding classes in North Yorkshire?',
  capsule: 'This page covers North Yorkshire as a county: the North Yorkshire Council area, counted at the 2021 Census as seven districts, together with York, Middlesbrough and Redcar and Cleveland. Adding up the ten published counts gives our total of 1,098,768 residents. The biggest places are Middlesbrough, York, Harrogate and Scarborough. We teach live over video from India, and place each learner in a class matched to their ability, whatever their age. That runs from 6 to 67, with groups of five to ten or one-to-one lessons in coding, Python, data science and maths. The North Yorkshire project uses real census data on who commutes where. A first lesson is on us; carrying on costs USD 100 a month for a group or USD 150 a month for one-to-one.',
  lead: 'Why do more people commute from Selby to York than from Scarborough to Richmondshire? Big places attract more journeys, and near places attract more than far ones. Geographers turned that common sense into a formula borrowed from physics, the gravity model: the flow between two places grows with their size and shrinks with the distance between them. The census recorded where people lived and where they worked, so the formula can be tested properly. This page\'s project fits it in Python to the real 2011 Census flows between ten North Yorkshire areas, measures how much it explains, and then studies the places where it gets the answer badly wrong, because that is where the interesting geography is.',
  wa: 'Hello Modern Age Coders, we are in North Yorkshire and would like a free lesson, please.',

  picks: {
    eyebrow: 'Courses for North Yorkshire',
    h2: 'Where North Yorkshire learners start',
    intro: 'A seven-year-old in Northallerton building a first game, a Year 8 in Knaresborough who loves maps, a Year 12 in Guisborough keen on data science, and an adult in Scarborough who works with spreadsheets every day. Each of them begins with a free lesson.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, with games, puzzles and first steps with data and AI.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, with graphs, logs and ratios turned into Python projects.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real data in Python for teenagers, including fitting a model and reading what it gets wrong.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Spreadsheets, statistics and SQL, then Python and dashboards, for adults whose work runs on data.' }
    ]
  },

  sections: [
    {
      id: 'north-yorkshire', tint: '', eyebrow: 'North Yorkshire in figures',
      h2: '1,098,768 people from the Dales to the Tees',
      intro: 'Area counts are 2021 Census figures on Nomis; the county total is our own sum. Town figures are ONS built-up areas, which we checked by totalling census output areas.',
      body: [
        { kind: 'table', caption: 'The twelve largest built-up areas in North Yorkshire, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Middlesbrough', '148,215', 'Selby', '19,475'],
          ['York', '141,685', 'Guisborough', '18,095'],
          ['Harrogate', '75,515', 'Ripon', '16,590'],
          ['Scarborough', '59,505', 'Knaresborough', '15,785'],
          ['Redcar', '37,660', 'Skipton', '15,050'],
          ['Eston', '29,635', 'Catterick Garrison', '14,210']
        ] },
        { kind: 'p', text: 'The ONS Middlesbrough area crosses into Redcar and Cleveland, so it is larger than the borough, which had 143,926. York is the largest single council at 202,821, and Richmondshire the smallest of the old districts at 49,776. Beyond the table are Northallerton, Whitby, Huntington and Haxby. The seven districts the census used have since become one North Yorkshire Council, which appears in the ONS list of councils from April 2023. The southern part of Stockton-on-Tees also lies in the ceremonial county, and our County Durham page covers that borough whole. North Yorkshire Council, York, the two Teesside councils and academy trusts set school holidays, which we did not read; lesson breaks are arranged with each family.' },
        { kind: 'callout', h3: 'Two city pages already', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-york">York</a> page is about street names, and <a class="cg-inline-link" href="/best-coding-class-in-ripon">Ripon</a> is about river floods. This page is for the rest of the county, from Skipton to Saltburn.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The North Yorkshire project',
      h2: 'Does commuting obey a law of gravity?',
      intro: 'Real census flows between ten areas, a formula from physics, and the places where it fails.',
      body: [
        { kind: 'p', text: 'The learner downloads the 2011 Census table WU01UK from Nomis, which counts people by where they lived and where they worked. For our ten areas that gives 90 journeys between different areas: 62,358 people commuted across a boundary between two of them, while 262,282 lived and worked in the same one. For each area the learner totals the commuters leaving and the jobs filled, finds a centre point from ONS population-weighted centroids, and measures the distance between every pair of centres.' },
        { kind: 'p', text: 'Newton\'s gravity falls with the square of distance. The commuting version is flow = k × (size of origin)ᵃ × (size of destination)ᵇ ÷ distanceᶜ, and taking logarithms turns it into a straight line that ordinary least squares can fit. Fitted to the 89 pairs with at least one commuter, it gives a distance power of 3.3 and explains 77.6 per cent of the variation in the logged flows, an R² of 0.776. Forcing Newton\'s square law instead drops the fit to 0.677: commuting falls away with distance much faster than gravity does.' },
        { kind: 'table', caption: 'Where our fitted model misses by most, 2011 Census commuters', head: ['From', 'To', 'Actual', 'Model', 'What it tells you'], rows: [
          ['York', 'Hambleton', '2,915', '552', 'Centres 40 km apart; journeys near the edges are much shorter.'],
          ['Selby', 'York', '5,093', '5,403', 'A near hit, for comparison.'],
          ['Redcar and Cleveland', 'Middlesbrough', '10,569', '32,225', 'Centres only 11 km apart, and a steep power law overshoots.'],
          ['Middlesbrough', 'Redcar and Cleveland', '5,111', '26,499', 'Half the flow of the reverse trip, yet predicted almost as high.'],
          ['Harrogate', 'Leeds', '8,481', 'not in model', 'Leeds lies outside the ten areas, so the model never sees it.']
        ] },
        { kind: 'p', text: 'Each big miss is a lesson in its own right. York to Hambleton flows more than five times what the model expects, and the likely reason is the crude distance: we measured from centre to centre of two large districts, while real journeys start and end all over them. Between Middlesbrough and Redcar and Cleveland the model overshoots in both directions, predicting 32,225 and 26,499 where the census found 10,569 and 5,111: a distance raised to the power 3.3 becomes tiny for centres only 11 km apart, so the formula explodes. It also barely separates the two directions, although one flow is double the other. And the largest flow from Harrogate in the whole table goes somewhere our model does not include: 8,481 people commuted to Leeds, more than four times Harrogate\'s biggest flow inside the ten areas, 1,920 to Hambleton.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Put pins in a paper map for five towns, guess the busiest commute between them, then check the real census number.' },
          { h3: 'Ages 13 to 16', p: 'Load the flow table into Python, compute distances, and plot logged flow against logged distance to see the straight line appear.' },
          { h3: 'Ages 16 and up', p: 'Fit the full model with least squares, compare it with Newton\'s square law, and write up the five largest residuals with an explanation for each.' }
        ] },
        { kind: 'callout', h3: 'Whose numbers these are', p: 'The commuting counts are from the 2011 Census, published by the ONS on Nomis, and the centre points from ONS centroids. The fitted formula, its powers, R² values and every model prediction are ours, computed for teaching. Commuting in 2011 may differ from commuting now.' }
      ]
    },
    {
      id: 'commuting', tint: 'deep', eyebrow: 'Why North Yorkshire',
      h2: 'A big, varied county is a fair test',
      intro: 'Why this county suits a gravity model, and where its limits show.',
      body: [
        { kind: 'table', caption: 'Some 2011 Census commuting flows, from Nomis table WU01UK', head: ['From', 'To', 'Commuters'], rows: [
          ['Selby', 'York', '5,093'],
          ['Harrogate', 'Leeds', '8,481'],
          ['Selby', 'Leeds', '6,193'],
          ['York', 'Leeds', '5,023'],
          ['Harrogate', 'York', '1,837'],
          ['Scarborough', 'Ryedale', '2,036']
        ] },
        { kind: 'p', text: 'A county that runs from Pennine towns through market towns to a coast and an industrial river gives a model plenty to explain: short busy links like Selby to York, long thin ones across the moors, and strong pulls from cities just outside, like Leeds. A learner who fits the model and then argues with its mistakes is doing what transport planners and data scientists do every day, and learning that a good fit and a complete explanation are not the same thing.' },
        { kind: 'p', text: 'We have no link with the Office for National Statistics, Nomis, North Yorkshire Council or any council named here. The census counts are theirs; the model and any error in it are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-york">York</a> and <a class="cg-inline-link" href="/best-coding-class-in-ripon">Ripon</a> have their own pages; the <a class="cg-inline-link" href="/coding-classes-in-east-riding-of-yorkshire">East Riding</a> is to the south-east, <a class="cg-inline-link" href="/coding-classes-in-county-durham">County Durham</a> to the north and <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a> to the south.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From maps and games to models of real data',
    intro: 'The free lesson settles where each learner starts. Age is a first guess only.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Games and maps', p: 'Block coding with games that move around a map, measuring how far a sprite has travelled.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 to 13', h3: 'Numbers in Python', p: 'Typed Python with tables, totals and simple graphs built from real numbers.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Models and data', p: 'Data science in Python, fitting lines and curves to real tables and questioning the leftovers.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Data for work', p: 'Spreadsheets, SQL and Python for adults who need to explain what the numbers really show.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and models',
    h2: 'An AI can fit a model in seconds. Can it tell you what the model left out?',
    intro: 'A good score hides the questions that matter most.',
    p1: 'Hand an assistant the flow table and ask for a gravity model, and it will return a formula and an R² close to ours without fuss. It is far less likely to notice that the biggest flow from Harrogate goes to a city outside the data, or that the model treats Middlesbrough to Redcar and the reverse journey as nearly the same. Those gaps sit outside the numbers it was given.',
    p2: 'Every AI system is a fitted model of some data, and its failures often come from what was left out of that data. A North Yorkshire student who has chased down the Leeds commuters knows to ask what a model was never shown, which is one of the most useful questions anyone can put to an AI tool.',
    closer: 'So a young person in North Yorkshire should learn to code in 2026 to see what a model is missing, not just how well it scores.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons happen',
    h2: 'Dales, moors and coast, one screen away',
    intro: 'In a county this size, a weekly class in York or Middlesbrough can mean a long drive each way. Online lessons remove it.',
    cells: [
      { h3: 'Lessons at home', p: 'A farmhouse in Wensleydale, a terrace in Redcar, a flat in Harrogate. The teacher shares a screen and the learner does the coding.' },
      { h3: 'Words from your school', p: 'Year groups, key stages, GCSEs and A levels are named as North Yorkshire schools name them, and lessons are in English.' },
      { h3: 'A free lesson first', p: 'A proper lesson with real work, then clear advice on level and course, with no card details asked for.' },
      { h3: 'Classmates at your level', p: 'Five to ten learners at the same stage, from across the county, the UK and further afield.' },
      { h3: 'Breaks when school breaks', p: 'Two lessons a week is typical, and we pause for your own school\'s holidays.' },
      { h3: 'UK times, always', p: 'Your lesson time is set in UK time and does not shift with the clocks; the teacher, who keeps India time several hours ahead, adjusts instead.' }
    ],
    spec: { title: 'Why groups go by level', p: 'Even York or Middlesbrough rarely has five learners at the same stage free on the same evening. Grouping by level means a learner in Whitby or Settle joins a class that fits.' }
  },

  fees: {
    h2: 'Fees in North Yorkshire',
    intro: 'Skipton or Saltburn, the fee is identical, and it is the fee in every country we teach apart from India.',
    first: 'A full lesson of real work, ending with a suggested level and course.',
    group: 'Around eight lessons a month with five to ten learners at one level.',
    private: 'Around eight lessons a month with a teacher to themselves.',
    closer: 'We bill in US dollars and quote no sterling prices. Nothing is charged until the free lesson has settled a course and a weekly time, and our pricing page explains pauses, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Families rate us on Google',

  book: {
    h2: 'Book a free lesson in North Yorkshire',
    intro: 'Tell us an age or school year and what the learner enjoys. A first lesson could be a map game in Scratch, a Python table, or the commuting data on this page.',
    success: 'Thank you. Your North Yorkshire request has reached us.'
  },

  faq: {
    h2: 'North Yorkshire questions',
    intro: 'The county, the commuting project and how lessons run.',
    items: [
      { q: 'How many people live in North Yorkshire?', a: 'Counting the North Yorkshire Council area with York, Middlesbrough and Redcar and Cleveland, there were 1,098,768 usual residents at the 2021 Census, by our sum of the ten ONS area figures on Nomis.' },
      { q: 'What are the largest towns in North Yorkshire?', a: 'By ONS built-up area: Middlesbrough 148,215, York 141,685, Harrogate 75,515, Scarborough 59,505 and Redcar 37,660.' },
      { q: 'What is the commuting project?', a: 'Learners fit a gravity model to 2011 Census commuting flows between ten North Yorkshire areas, find it explains 77.6 per cent of the variation in logged flows, and investigate the largest misses, such as York to Hambleton and Harrogate to Leeds.' },
      { q: 'What is a gravity model?', a: 'A formula saying the flow between two places rises with their sizes and falls with the distance between them. It is borrowed from Newton\'s law of gravity and is used for commuting, trade and migration.' },
      { q: 'Why use 2011 commuting data?', a: 'It is the Nomis table we read at local authority level for this page. The model is a teaching exercise, and commuting today may be different.' },
      { q: 'Are lessons held anywhere in the county?', a: 'No. Every lesson is live online, so nobody drives to a class.' },
      { q: 'Which ages can join?', a: 'Ages 6 to 67. Children start with block coding or early Python, teenagers move on to data science and advanced Python, and adults take Python, data or SQL. The free lesson sets the level.' },
      { q: 'Can a teenager learn data science?', a: 'Yes. The teen data science course uses Python on real tables, including fitting models and reading the parts they get wrong.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. Groups are then USD 100 per month and one-to-one USD 150 per month, with no joining fee and no fixed contract.' },
      { q: 'Do lessons pause for North Yorkshire school holidays?', a: 'Yes, if you like. North Yorkshire Council, York, Middlesbrough, Redcar and Cleveland and academy trusts publish their own dates, and we fit breaks to yours.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Neighbouring pages',
    html: 'Start with <a class="cg-inline-link" href="/best-coding-class-in-york">York</a> or <a class="cg-inline-link" href="/best-coding-class-in-ripon">Ripon</a>, then <a class="cg-inline-link" href="/coding-classes-in-county-durham">County Durham</a>, the <a class="cg-inline-link" href="/coding-classes-in-east-riding-of-yorkshire">East Riding</a> and <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'North Yorkshire and around',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-york', label: 'York' },
    { href: '/coding-classes-in-county-durham', label: 'County Durham' }
  ],

  personalityCss: `
.cg-root.cg-nyk .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3vw, 2.7rem); }
.cg-root.cg-nyk .cg-hero h1 { font-weight: 800; letter-spacing: -0.028em; line-height: 1.03; }
.cg-root.cg-nyk .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-nyk .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-nyk .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-nyk .cg-table caption { font-weight: 700; font-style: italic; text-align: left; }
.cg-root.cg-nyk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nyk .cg-table th { letter-spacing: 0.04em; font-weight: 600; }
.cg-root.cg-nyk .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-nyk .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'North Yorkshire as used here: the seven 2021 Census districts now forming North Yorkshire Council (ONS LAD April 2023: E06000065 North Yorkshire), plus York, Middlesbrough, Redcar and Cleveland; Stockton-on-Tees on the County Durham page. ONS Census 2021 TS001 via Nomis: York 202,821; Harrogate 162,666; Middlesbrough 143,926; Redcar and Cleveland 136,531; Scarborough 108,736; Selby 91,988; Hambleton 90,690; Craven 56,927; Ryedale 54,707; Richmondshire 49,776; our sum 1,098,768. ONS built-up areas (published; agree with our OA sums): Middlesbrough 148,215 (spans Redcar and Cleveland); York 141,685; Harrogate 75,515; Scarborough 59,505; Redcar 37,660; Eston 29,635; Selby 19,475; Guisborough 18,095; Ripon 16,590; Knaresborough 15,785; Skipton 15,050; Catterick Garrison 14,210; Northallerton 13,310; Whitby 12,595; Huntington 12,420; Haxby 10,180. Otley (14,540; 505 inside) excluded. 2011 Census WU01UK (Nomis NM_1203_1), all persons: Selby to York 5,093; Harrogate to York 1,837; Harrogate to Hambleton 1,920; York to Hambleton 2,915; Hambleton to York 2,158; Redcar and Cleveland to Middlesbrough 10,569; Middlesbrough to Redcar and Cleveland 5,111; Scarborough to Ryedale 2,036; Harrogate to Leeds 8,481; Selby to Leeds 6,193; York to Leeds 5,023.',
    localProject: 'Gravity model of commuting. Ten areas, 90 ordered pairs, 1 zero; cross-area total 62,358; same-area 262,282. Masses: O = residents working in the ten, D = jobs filled from the ten. Distances: haversine between means of 2011 MSOA population-weighted centroids. OLS on logs, 89 pairs: const 6.545, O^0.427, D^0.691, d^-3.298, R^2 0.776; masses fixed at 1: d^-3.100, R^2 0.747; d^-2: R^2 0.677. Residuals: York to Hambleton 2,915 vs 552 (40.0 km); Selby to Scarborough 232 vs 46; Middlesbrough to Redcar and Cleveland 5,111 vs 26,499; Redcar and Cleveland to Middlesbrough 10,569 vs 32,225; Selby to York 5,093 vs 5,403; Middlesbrough to Craven 1 vs 18. Closed-system caveat: Harrogate to Leeds 8,481 against largest in-set 1,920. Page labels the model as ours and the data as 2011. AI angle: a fitted model cannot see what was left out of its data. Lesson family: gravity model, log-linear fit, residual analysis, closed-system bias.',
    requiredMentions: [
      '1,098,768',
      'gravity model',
      'WU01UK',
      '8,481',
      '10,569',
      '62,358',
      'Catterick Garrison',
      'Guisborough',
      'Northallerton',
      'Richmondshire',
      '0.776'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the ten North Yorkshire areas, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for North Yorkshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS 2011 Census WU01UK location of usual residence and place of work, local authority level, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Open Geography Portal: 2011 MSOA population-weighted centroids, OA21 to BUA22 lookup, LAD April 2023 names.', url: 'https://geoportal.statistics.gov.uk/' }
    ],
    rejectedClaims: [
      'Explanations for individual residuals beyond distance measurement and direction (for example road links or particular employers): not researched, not claimed.',
      'That Hambleton borders York or where its commuters live: not checked; the page speaks only of journeys near district edges in general.',
      'Census 2021 commuting flows: not read at this level for this page, and any pandemic effect on them is not claimed.',
      'The date North Yorkshire Council was created beyond its presence in the ONS April 2023 list: not stated.',
      'North Yorkshire school term dates: none read.',
      'Named North Yorkshire schools: none named.'
    ]
  }
};
