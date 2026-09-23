'use strict';
// Peterborough (cg- city page, UK cluster Phase 4). Spine: you cannot see a ceiling from the middle of a slope.
// Logistic growth and identifiability on ONS mid-year population estimates for Peterborough (Nomis NM_2002_1, all
// ages, persons, E06000031, 1991 to 2025, 35 values, read 23 September 2026; scratchpad pbo/profile.py). 1991
// 154,181; 2001 157,439; 2011 184,457; 2016 205,091; 2021 216,470; 2024 224,152; 2025 224,757. Largest yearly
// rises 2016 (+4,845), 2015 (+4,480), 2012 (+4,218); falls in 1996 to 1998 (1997 -1,721). Logistic curve with the
// ceiling K fixed and growth rate and midpoint fitted to all 35 values (root mean square error in people, predicted
// 2040): K 240,000: 8,714, 226,811; 260,000: 7,773, 235,019; 300,000: 6,833, 245,466; 400,000: 6,026, 257,446;
// 600,000: 5,605, 265,598; 1,000,000: 5,396, 270,428; 2,000,000: 5,281, 273,372. Straight line: 2,367 a year,
// error 6,261, 2040 257,765. Free three-parameter fits hit the parameter limits (the ceiling runs away). Fitted on
// 1991 to 2015 and tested on 2016 to 2025 (mean absolute error; predicted 2025): K 240,000 20,089 (201,173); 260,000
// 18,454 (203,589); 300,000 16,523 (206,519); 400,000 14,447 (209,767); 1,000,000 12,308 (213,218); line 15,163
// (208,762); actual 224,757. Every method under-predicts, because growth quickened after 2011.
// Lesson family: logistic growth, carrying capacity and identifiability (profile fits, extrapolation risk). Screened
// 23 September 2026: logistic growth, logistic curve and carrying capacity 0 hits (logistic appears only as
// logistics).
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Peterborough E06000031: TS001 215,671 usual
// residents, 213,464 in households, 2,207 in communal establishments; TS007A 14,163 aged 4 and under (6.6 percent),
// 15,730 aged 5 to 9 (7.3), 15,502 aged 10 to 14 (7.2), 17,299 aged 30 to 34 (8.0, England 7.0); England 5.4, 5.9,
// 6.0 for the three youngest bands; TS068 43,896 students of 201,510 aged 5 and over (21.8 percent, England 20.4);
// TS006 628.1 usual residents per square km (England 433.5). Peterborough Cathedral, History: one of the finest
// Norman cathedrals in Europe; a place of worship for over 1,350 years; after a fire in 1116 the current building
// began in 1118; the new monastic church consecrated in 1238 with a unique wooden ceiling that remains largely
// unchanged; Katharine of Aragon buried there in 1536; Mary, Queen of Scots buried there in 1587 after her
// execution at Fotheringhay. The page gives two founding dates (654 in the text, 655 in the timeline), so neither
// is used.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'PETERBOROUGH', blurb: 'The cathedral city on the Nene, with a project that asks where its population growth will level off, and shows why the data cannot yet say.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-peterborough',
  code: 'pbo',
  accent: '#68122F',
  accentRationale: 'Peterborough: a cathedral crimson from the solver (9.93:1 on every paper tint, dE 7.7 from the nearest used accent), redder than the Dundee plum and cooler than the York brick',
  pageType: 'city',
  place: {
    name: 'Peterborough',
    eyebrow: 'Peterborough, Cambridgeshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Peterborough' },
      { type: 'AdministrativeArea', name: 'Cambridgeshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Peterborough, England',
  title: 'Best Coding Classes in Peterborough | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Peterborough learners aged 6 to 67, from Hampton and Orton to Werrington. The first lesson is free of charge.',
  ogDescription: 'Coding and AI lessons for Peterborough, on a page that fits S-shaped growth curves to 35 years of population estimates and finds the ceiling cannot be seen yet.',
  twitterDescription: 'Peterborough learners from six to sixty-seven can study coding, Python and AI with us in live online lessons, and the first is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Peterborough Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, modelling, AI and mathematics taught live online in English to Peterborough children, teenagers and adults, in small groups set by level or one to one.'
  },

  h1: 'Coding classes in Peterborough',
  capsuleQ: 'What are the best coding classes in Peterborough?',
  capsule: 'The 2021 census counted 215,671 usual residents in Peterborough, and children aged five to nine made up 7.3% of them, against 5.9% in England. Peterborough Cathedral says it has been a place of worship for over 1,350 years, and that Katharine of Aragon was buried there in 1536. Peterborough learners, from six-year-olds to adults of sixty-seven, work with our India-based teachers live on screen, either individually or in a class of five to ten at the same level, at times that suit UK families. The first lesson costs nothing, and after it a group place is USD 100 a month and a private one USD 150.',
  lead: 'Peterborough\'s population, by the Office for National Statistics\' mid-year estimates, grew from 154,181 in 1991 to 224,757 in 2025. Growth like this cannot go on for ever, and the classic model for it is the logistic curve: slow, then fast, then levelling off at a ceiling called the carrying capacity. So where is Peterborough\'s ceiling? Fix it at 400,000, fit the rest, and the curve matches the 35 years of estimates to within about 6,000 people on average. Fix it at two million and the fit is slightly better still. The data simply cannot tell. Our teenagers fit the curve, find that the most interesting number is the one the data cannot pin down, and learn to say so instead of reporting a false ceiling.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Peterborough.',

  picks: {
    eyebrow: 'Course picks for Peterborough',
    h2: 'Four courses for the city on the Nene',
    intro: 'Start with what the learner enjoys. Each course begins with a free live lesson, and booking one never needs a card.',
    items: [
      { course: 'maths-through-coding', band: 'Ages 8 to 12', note: 'Patterns, sequences and growth explored by writing short programs, from doubling puzzles to simple graphs.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real public data in Python, fitting curves and testing their predictions, the route to this page\'s project.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', band: 'Ages 16 to 18', note: 'A level Maths, where exponential models, logarithms and modelling assumptions are all examined.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Forecasting and trend analysis for adults, including how far a fitted model can safely be pushed.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Peterborough today',
      h2: 'A growing city full of young families',
      intro: 'From Census 2021 for the Peterborough council area, as published by the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Peterborough, Census 2021', head: ['Measure', 'Peterborough', 'England'], rows: [
          ['Usual residents', '215,671', '56,490,048'],
          ['Living in households', '213,464', 'Not compared'],
          ['Aged 4 and under', '14,163 (6.6%)', '5.4%'],
          ['Aged 5 to 9', '15,730 (7.3%)', '5.9%'],
          ['Aged 10 to 14', '15,502 (7.2%)', '6.0%'],
          ['Aged 30 to 34', '17,299 (8.0%)', '7.0%'],
          ['Students among residents aged 5 and over', '43,896 (21.8%)', '20.4%'],
          ['Usual residents per square kilometre', '628.1', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Children everywhere', p: 'Each of the three youngest age bands made up a larger share of Peterborough\'s residents in 2021 than of England\'s, with 7.3% aged five to nine.' },
          { h3: 'Parents in their thirties', p: 'Residents aged 30 to 34 were 8.0% of the city, against 7.0% nationally, which fits the pattern of young families.' },
          { h3: 'Room to grow', p: 'At 628.1 residents per square kilometre, the council area includes villages and farmland as well as the city, and 213,464 people lived in households.' }
        ] },
        { kind: 'p', text: 'Of 201,510 residents aged five and over, 43,896 were at school or in full-time study. We teach learners at every stage here: a Year 3 child in Hampton on a first coding project, a Year 10 student in Werrington choosing GCSE Computer Science, and a parent in Orton learning Python for work, each in a group at a matching level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'A Norman cathedral',
      h2: 'A wooden ceiling from the thirteenth century and two queens',
      intro: 'From Peterborough Cathedral\'s own history and timeline.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1116 and 1118', p: 'The Cathedral says a fire devastated the monastery and much of the town in 1116, and that building of the present Cathedral began in 1118.' },
          { h3: '1238', p: 'The new monastic church was consecrated, with a unique wooden ceiling that the Cathedral says remains largely unchanged today.' },
          { h3: '1536 and 1587', p: 'Katharine of Aragon, first wife of Henry VIII, was buried in the Cathedral in 1536, and Mary, Queen of Scots in 1587 after her execution at Fotheringhay Castle.' }
        ] },
        { kind: 'p', text: 'We have no connection with Peterborough Cathedral. It opens this page because it has watched the city around it grow and shrink for nine centuries. The project below asks a question the builders of 1118 could not have answered either: how big will the place become? Modern data make it tempting to think we can now say. The honest answer is more interesting.' },
        { kind: 'spec', title: 'Where the population figures come from', p: 'The Office for National Statistics publishes mid-year population estimates for every council area, available through Nomis. For Peterborough they run from 1991 to 2025, one figure a year, built from census counts rolled forward with births, deaths and migration.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Where will Peterborough\'s growth level off?',
      intro: 'A logistic curve rises slowly, then quickly, then flattens towards a ceiling. We fix the ceiling at different values and let the computer fit the rest.',
      body: [
        { kind: 'table', caption: 'Logistic curves fitted to Peterborough\'s mid-year estimates, 1991 to 2025, with the ceiling fixed in advance', head: ['Ceiling fixed at', 'Average miss (people)', 'Predicted 2040'], rows: [
          ['240,000', '8,714', '226,811'],
          ['300,000', '6,833', '245,466'],
          ['400,000', '6,026', '257,446'],
          ['1,000,000', '5,396', '270,428'],
          ['2,000,000', '5,281', '273,372'],
          ['No ceiling: a straight line', '6,261', '257,765']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Fit a curve', p: 'Ask for the closest-fitting logistic curve with all three numbers free, and the computer pushes the ceiling ever higher until it hits whatever limit we set. No single answer inside the range wins.' },
          { h3: '2. Fix the ceiling instead', p: 'Choose a ceiling, fit the growth rate and midpoint, and record the error. From 400,000 to two million, the error barely changes: the data are equally happy with all of them.' },
          { h3: '3. Read what is ruled out', p: 'Low ceilings do fit worse: a ceiling of 240,000 misses by 8,714 on average. The data can say growth has not nearly stopped. They cannot say where it will.' }
        ] },
        { kind: 'callout', h3: 'Why the ceiling hides', p: 'A logistic curve only reveals its ceiling once it starts to bend. Peterborough\'s estimates still rise almost in a straight line, with 2,367 more residents a year on average, and a curve that has not bent carries no information about where it will. It is a well-known trap in modelling, and it applies just as much to forecasts of epidemics, product sales and technology adoption.' },
        { kind: 'p', text: 'Testing on the future makes it plainer. Fit every model to 1991 to 2015 only, then compare with 2016 to 2025, and all of them fall short: the closest predicted about 213,000 for 2025, against the estimate of 224,757. Growth quickened after 2011, with rises of 4,845 in 2016 and 4,480 in 2015, and nothing in the earlier years hinted at it. A model can only extend the pattern it has seen.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Models and limits',
      h2: 'Five questions for any growth forecast',
      intro: 'Learned on population figures, then used on app downloads, disease spread, sales, electric car uptake and the growth curves quoted for AI tools.',
      body: [
        { kind: 'table', caption: 'Checking an S-curve before believing it', head: ['Question', 'For Peterborough', 'What it catches'], rows: [
          ['Has the curve started to bend?', 'No, the rise is still nearly straight', 'A ceiling invented from a slope'],
          ['How flat is the error?', 'Almost unchanged from 400,000 to two million', 'A precise number the data cannot support'],
          ['What is ruled out?', 'Ceilings near 240,000 fit clearly worse', 'Throwing away the part the data do show'],
          ['Does it predict unseen years?', 'Fits to 2015 all under-predict 2025', 'Mistaking a good fit for a good forecast'],
          ['What drives the numbers?', 'Births, deaths and migration, not a formula', 'Treating a curve as a cause']
        ] },
        { kind: 'p', text: 'The last question matters most. A population does not follow a logistic curve because the mathematics says so; it grows because of housing, jobs, families and people moving in and out. The curve is a summary, useful for thinking and dangerous for planning when it is pushed beyond what the data can support.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A plant or a pile of blocks that grows fast and then slows, and a guess about how tall it will end up.' },
          { h3: 'Teenagers', p: 'Mid-year estimates read in Python, logistic curves fitted with a fixed ceiling, and forecasts tested on years held back.' },
          { h3: 'Adults', p: 'Growth forecasting at work, with the uncertain parameters named and the forecast range reported instead of a single number.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Office for National Statistics, Peterborough Cathedral or Peterborough City Council. The estimates and census tables are published openly; every fitted curve, error and prediction here is our own calculation, not an official projection.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From growing plants to logistic curves',
    intro: 'The age bands are a rough starting point; the free lesson confirms the right level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Growing and slowing', p: 'Measuring something that grows, drawing it on a chart, and noticing when the growth slows down.', courses: ['kids-coding-blocks-masterclass', 'mental-maths-mastery-kids'] },
      { band: 'Ages 11 to 13', h3: 'Sequences in code', p: 'Adding and multiplying patterns in Python, and comparing steady growth with growth that speeds up.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Fitting curves', p: 'Logistic models on real population data, with fixed-ceiling fits, error measures and held-back years.', courses: ['data-science-course-for-teens-python-data', 'a-level-maths-course-pure-mechanics-statistics'] },
      { band: 'Ages 18 to 67', h3: 'Forecasting at work', p: 'Growth models for sales, users and demand, with honest ranges instead of single confident numbers.', courses: ['data-analysis-mastery-course-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Any AI tool will fit a growth curve. Why should a Peterborough teenager learn when not to trust one?',
    intro: 'Because the fitting software reports a ceiling even when the data contain none.',
    p1: 'Give an assistant Peterborough\'s population and ask when it will level off, and it may hand back a precise ceiling and a date. A learner who has fixed the ceiling at ten different values and watched the error barely move knows that such a number is invented. That learner can explain what the data do show, and what they cannot.',
    p2: 'The same caution applies to forecasts about AI itself. Claims that a technology will keep growing, or is about to level off, often rest on fitting an S-curve to its early years, which is exactly when the ceiling is invisible. People who understand why cannot be talked into certainty by a neat graph.',
    closer: 'So a Peterborough teenager should still learn to program in 2026, in a city whose cathedral has seen it rise and fall for nine centuries: code can fit any curve, but judging what a curve can know is still a human skill.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Hampton, Orton or Werrington, from home',
    intro: 'Peterborough\'s townships spread in every direction from the centre, and crossing between them takes time. A lesson online takes none.',
    cells: [
      { h3: 'Township to township', p: 'A learner in Paston and another in Hampton Vale can share one lesson without a car journey across the city.' },
      { h3: 'English school stages', p: 'Lessons follow the stages Peterborough schools use, from Reception through Key Stages 1 to 4 to GCSEs and A levels, and are taught in English.' },
      { h3: 'Free and worthwhile', p: 'The first session involves real work with a teacher and ends with a recommended level, course and weekly slot. We never ask for card details.' },
      { h3: 'Five to ten per class', p: 'Classmates working at the same stage, from Peterborough, the rest of the UK and abroad, so each level has a time that suits.' },
      { h3: 'A two-lesson week', p: 'Two regular lessons each week, about eight a month, with holidays and exam periods arranged with the teacher well ahead.' },
      { h3: 'Evenings across two time zones', p: 'Our teachers in India are four and a half hours ahead of Peterborough in British Summer Time and five and a half in winter, and they teach into their evening so learners here can join after school or work.' }
    ],
    spec: { title: 'Around the city', p: 'Families in Stamford, Whittlesey, Oundle or Yaxley join exactly the same classes, because lessons are online and groups are formed by level.' }
  },

  fees: {
    h2: 'Peterborough lesson fees',
    intro: 'The first lesson is free; after that there is one monthly fee.',
    first: 'A full lesson free of charge, ending with a suggested level, course and weekly time.',
    group: 'About eight live lessons a month with five to ten learners at your learner\'s level.',
    private: 'About eight live lessons a month with a teacher who works with your learner alone.',
    closer: 'Bretton and Stanground pay the same fee as any family elsewhere outside India, set in US dollars, and nothing on our site is priced in pounds. Billing only starts once the free lesson has fixed a course and a weekly time; the pricing page covers pausing, missed lessons and moving between group and one-to-one lessons.'
  },

  reviewsH2: 'Six reviews families left on Google, unaltered',

  book: {
    h2: 'Book a free lesson for a Peterborough learner',
    intro: 'We set the first task by level: a growing-pattern puzzle for a young child, a short Python program that graphs a sequence for a beginner, or the ONS estimates and a logistic fit for a teenager ready for real data.',
    success: 'Thank you. We will be in touch shortly to arrange a lesson for your Peterborough learner.'
  },

  faq: {
    h2: 'Peterborough coding class questions',
    intro: 'The questions Peterborough families put to us most.',
    items: [
      { q: 'How many people live in Peterborough?', a: 'Census 2021 counted 215,671 usual residents in the Peterborough council area, with 213,464 living in households. The ONS mid-year estimate for 2025 is 224,757.' },
      { q: 'How does Peterborough compare with England?', a: 'It is a city of young families: in 2021, 7.3% of residents were aged 5 to 9 (England 5.9%) and 8.0% were aged 30 to 34 (England 7.0%). It had 628.1 residents per square kilometre, against 433.5 across England.' },
      { q: 'What is a logistic curve?', a: 'An S-shaped model of growth that starts slowly, speeds up, then levels off towards a ceiling called the carrying capacity. It is widely used for populations, sales and the spread of new ideas.' },
      { q: 'So when will Peterborough stop growing?', a: 'The data cannot say. Logistic curves with ceilings anywhere from 400,000 to two million fit the 1991 to 2025 estimates almost equally well, because the growth has not yet started to bend.' },
      { q: 'Where do the population figures come from?', a: 'The Office for National Statistics publishes mid-year estimates for each council area, which we read through Nomis. For Peterborough they cover every year from 1991 to 2025.' },
      { q: 'Who is buried in Peterborough Cathedral?', a: 'The Cathedral says Katharine of Aragon was buried there in 1536 and Mary, Queen of Scots in 1587. We are not connected with Peterborough Cathedral.' },
      { q: 'When do Peterborough lessons run?', a: 'After school, in the evening or at the weekend, at a UK time chosen in the free lesson. India is four and a half hours ahead of Peterborough in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Peterborough?', a: 'No. We have no Peterborough centre and no premises anywhere in the UK, as every lesson is taught live online. Learners need a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Peterborough lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Peterborough groups formed?', a: 'By level, pace and goals rather than age or address, with five to ten learners at one stage. If no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'Eastern England and beyond',
    html: 'To the south, the <a class="cg-inline-link" href="/best-coding-class-in-cambridge">Cambridge page</a> ranks its warmest months with a heap, and to the north <a class="cg-inline-link" href="/best-coding-class-in-lincoln">Lincoln</a> tests whether frosty days arrive at random. <a class="cg-inline-link" href="/best-coding-class-in-norwich">Norwich</a> asks whether its churches are clustered. School stages in England are set out in our <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> is the way into every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Peterborough and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-cambridge', label: 'Cambridge' },
    { href: '/best-coding-class-in-lincoln', label: 'Lincoln' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-pbo .cg-hero-grid { align-items: end; gap: clamp(1.05rem, 2.9vw, 2.45rem); }
.cg-root.cg-pbo .cg-hero h1 { font-weight: 710; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-pbo .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.85rem 0; }
.cg-root.cg-pbo .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-pbo .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.016em; }
.cg-root.cg-pbo .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-pbo .cg-table th { letter-spacing: 0.023em; }
.cg-root.cg-pbo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pbo .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-pbo .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Peterborough, Census 2021 via Nomis (E06000031): TS001 215,671 usual residents, 213,464 in households, 2,207 in communal establishments; TS007A 14,163 aged 4 and under (6.6 percent, England 5.4), 15,730 aged 5 to 9 (7.3, England 5.9), 15,502 aged 10 to 14 (7.2, England 6.0), 17,299 aged 30 to 34 (8.0, England 7.0); TS068 43,896 students of 201,510 residents aged 5 and over (21.8 percent, England 20.4); TS006 628.1 usual residents per square kilometre (England 433.5). Peterborough Cathedral, History: a place of worship for over 1,350 years; fire in 1116; present building begun 1118; consecrated 1238 with a unique wooden ceiling largely unchanged; Katharine of Aragon buried 1536; Mary, Queen of Scots buried 1587.',
    localProject: 'Where will Peterborough\'s growth level off? ONS mid-year estimates (Nomis NM_2002_1, read 23 September 2026), 1991 154,181 to 2025 224,757. Logistic curves with fixed ceiling, fitted to all 35 years (error in people; predicted 2040): 240,000 8,714 (226,811); 260,000 7,773; 300,000 6,833 (245,466); 400,000 6,026 (257,446); 600,000 5,605; 1,000,000 5,396 (270,428); 2,000,000 5,281 (273,372); straight line 6,261 (257,765). Free fits run to the parameter limits. Fitted 1991-2015, tested 2016-2025: all under-predict 2025 (best 213,218 against 224,757). Largest rises 2016 +4,845 and 2015 +4,480. Lesson family: logistic growth, carrying capacity and identifiability; distinct from Dundee forecast baselines and Sheffield least squares.',
    requiredMentions: [
      '215,671',
      '213,464',
      '628.1',
      '15,730',
      '43,896',
      '201,510',
      'Katharine of Aragon',
      'wooden ceiling',
      'carrying capacity',
      '224,757',
      'Fotheringhay',
      '154,181'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Peterborough: 215,671 usual residents; 213,464 in households; 2,207 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000031' },
      { claim: 'Nomis, Census 2021 TS007A: Peterborough and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000031,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Peterborough 43,896 students of 201,510 aged 5 and over (21.8 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000031,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Peterborough 628.1 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E06000031,E92000001' },
      { claim: 'ONS mid-year population estimates via Nomis, Peterborough, 1991 to 2025.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2002_1.data.csv?geography=E06000031&gender=0&c_age=200&measures=20100' },
      { claim: 'Peterborough Cathedral, History: 1116 fire, 1118 building begun, 1238 consecration and wooden ceiling, burials of 1536 and 1587.', url: 'https://www.peterborough-cathedral.org.uk/history' }
    ],
    rejectedClaims: [
      'A founding year for the Cathedral: its own page gives 654 in one place and 655 in another, so neither is used.',
      'A population ceiling or date for Peterborough: the data cannot identify one, which is the point of the page; no official projection is quoted.',
      'Causes of Peterborough\'s faster growth after 2011: not established by the estimates alone, so the page reports timing only.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Office for National Statistics, Peterborough Cathedral or Peterborough City Council.'
    ]
  }
};
