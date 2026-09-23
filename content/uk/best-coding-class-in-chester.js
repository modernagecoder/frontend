'use strict';
// Chester (cg- city page, UK cluster Phase 4). Spine: how fast does a river drain after rain, and why does the answer
// depend on how you learn it? Gradient descent fitting exponential recession curves to the Environment Agency Hydrology
// daily mean flow of the River Gowy at Bridge Trafford (station 6078ba41-0d4f-4053-aaea-25d628b1d97f, catchment 156.0
// square km, 24 August 1979 to 14 April 2026 on days graded Complete and Good: 14,855 days; read 23 September 2026;
// scratchpad chs/gd.py, gd2.py). Recession segments: start at a local peak above the 75th percentile (1.285 cubic
// metres per second; median 0.634), continue while flow falls every day on consecutive good days, at least 8 days: 189
// segments, median 10 days, longest 22. Model Q = Q0 exp(-t/k), fitted by gradient descent on mean squared error (log Q0
// and 1/k as parameters). Longest segment, from 19 January 2023, 22 days, 4.122 to 0.730: learning rate 0.0001 stopped
// at 20,000 iterations (k 10.32); 0.001 converged in 5,528 (k 10.39); 0.01 in 642 (k 10.39, mse 0.15179); 0.05 stopped
// at a poor answer (k 2.15, mse 0.831); 0.1 collapsed (k 0.10); 0.5 declared convergence after 51 iterations at a useless
// answer (k 0.04, mse 1.650). Log-linear least squares on the same segment: k 15.98 days. All 189 segments at rate 0.01,
// cap 50,000: 182 converged, 7 stopped; median 651 iterations; median k 4.2 days (original scale) against 6.1 days
// (log-linear), log-linear longer in 181 of 182. Highest good daily mean in the record: 18.034 on 24 August 1987.
// Lesson family: gradient descent (learning rate, convergence and false convergence, choice of loss function), on an
// exponential-decay model. Screened 23 September 2026: gradient descent and learning rate appear only in passing on
// the Groningen academy page; recession curves 0 hits.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Cheshire West and Chester E06000050: TS001 357,150
// usual residents, 352,087 in households, 5,063 communal; TS007A 26,045 aged 50 to 54 (7.3 percent, England 6.9),
// 26,572 aged 55 to 59 (7.4, England 6.7), 19,681 aged 20 to 24 (5.5, England 6.0); TS068 62,738 students of 339,532
// aged 5 and over (18.5 percent, England 20.4); TS006 388.2 per square km (England 433.5). MSOAs (House of Commons
// Library names): Chester City and Garden Quarter 10,245 (38.4 percent students, 2,339.5 per square km); Blacon North
// 6,243 (22.5, 4,208.0); Chester Handbridge Park 8,816 (17.3, 1,678.5). NHLE scheduled monuments: The walls, towers,
// gates and posterns of the City of Chester 1006785; Roman amphitheatre (southern part) 1004638; Chester Castle (part)
// 1006773; Dee Bridge 1006771; Roman quarry including Edgar's Cave and the rock-cut figure of Minerva on Edgar's Field
// 1014718, scheduled 13 December 1929. GOV.UK List of Cities (2022) includes Chester.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'CHESTER', blurb: 'The walled Roman city on the Dee, with a project that teaches a computer to learn how fast a river drains after rain.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-chester',
  code: 'chs',
  accent: '#54246B',
  accentRationale: 'Chester: a deep Roman purple for the legionary fortress, from the solver (9.25:1 on every paper tint, dE 7.9 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Chester',
    eyebrow: 'Chester, Cheshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Cheshire West and Chester' },
      { type: 'AdministrativeArea', name: 'Cheshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Chester, England',
  title: 'Best Coding Classes in Chester | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Chester learners aged 6 to 67, from Hoole and Handbridge to Blacon. There is no charge for the first lesson.',
  ogDescription: 'Coding and AI lessons for Chester, on a page where learners teach a computer how fast the River Gowy drains after rain, one small step at a time.',
  twitterDescription: 'Chester learners aged six to sixty-seven can study coding, Python and AI with us in live online lessons, and lesson one is free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Chester Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, model fitting, AI and mathematics taught live online in English to Chester children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Chester',
  capsuleQ: 'What are the best coding classes in Chester?',
  capsule: 'Cheshire West and Chester, the council area that includes the city, had 357,150 usual residents at the 2021 census, at 388.2 per square kilometre against 433.5 for England. Historic England schedules the walls, towers, gates and posterns of the City of Chester as an ancient monument, alongside the southern part of its Roman amphitheatre. Chester learners aged six to sixty-seven study with our teachers in India in live video lessons, in a group of five to ten at one level or one to one, at hours fitted around the UK day. Lesson one is free; after that it is USD 100 a month for a group place or USD 150 for private teaching.',
  lead: 'After heavy rain, the River Gowy near Chester rises and then drains away, day by day, along a curve that looks like exponential decay. How fast? Our teenagers make a computer learn the answer with gradient descent, the same step-by-step method that trains AI models: guess, measure the error, nudge the guess downhill, repeat. On one 22-day fall in January 2023, a sensible step size settles in 642 steps on a decay time of 10.39 days. A step size of 0.5 instead of 0.01 announces success after 51 steps, with an answer of 0.04 days that is nonsense. And a shortcut that fits the logarithm instead says 15.98 days. Same river, three answers, and every one of them teaches something.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Chester.',

  picks: {
    eyebrow: 'Course picks for Chester',
    h2: 'Four courses for the walled city',
    intro: 'Choose the course nearest to what the learner already enjoys. Every one begins with a free live lesson that needs no payment details to book.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, a first step towards programs that improve a guess one small step at a time.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to full projects, the foundation for loading decades of river data and fitting a curve to it.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning for teenagers, where gradient descent is the engine that trains almost every model they will meet.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who fit models to real measurements and need to know when an answer can be trusted.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Chester today',
      h2: 'A city centre full of students, in a county of families',
      intro: 'Census 2021 figures for Cheshire West and Chester and for three middle-layer areas of the city named by the House of Commons Library, from the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Cheshire West and Chester and three Chester areas, Census 2021', head: ['Area', 'Usual residents', 'Students among those aged 5 and over', 'Residents per square kilometre'], rows: [
          ['Cheshire West and Chester', '357,150', '18.5%', '388.2'],
          ['Chester City and Garden Quarter', '10,245', '38.4%', '2,339.5'],
          ['Blacon North', '6,243', '22.5%', '4,208.0'],
          ['Chester Handbridge Park', '8,816', '17.3%', '1,678.5'],
          ['England', '56,490,048', '20.4%', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A student centre', p: 'In the area named Chester City and Garden Quarter, 38.4% of residents aged five and over were studying in 2021, against 18.5% across the whole district.' },
          { h3: 'Parents\' generation', p: 'Across the district, people aged 50 to 54 made up 7.3% of residents and those aged 55 to 59 made up 7.4%, both above England\'s shares.' },
          { h3: 'Mostly households', p: 'Of the 357,150 residents, 352,087 lived in households; 62,738 of the 339,532 aged five and over were students, 18.5%.' }
        ] },
        { kind: 'p', text: 'Our Chester groups mix learners from across the city and beyond. A Year 3 child in Hoole might be making a first animation, a Year 11 student in Upton revising GCSE Computer Science, and an adult in Handbridge learning Python for work, each placed in a small group at the right level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Roman and medieval',
      h2: 'A city inside its walls',
      intro: 'From Historic England\'s open data on scheduled monuments, and the government\'s List of Cities.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The walls', p: 'Historic England schedules "the walls, towers, gates and posterns of the City of Chester" as a single ancient monument, together with part of Chester Castle and the Dee Bridge.' },
          { h3: 'The amphitheatre', p: 'The southern part of Chester\'s Roman amphitheatre is scheduled too, as is the Abbey Green Roman site within the old city.' },
          { h3: 'Minerva', p: 'Across the Dee, a Roman quarry on Edgar\'s Field, with Edgar\'s Cave and a figure of the goddess Minerva cut into the rock, was scheduled on 13 December 1929.' }
        ] },
        { kind: 'p', text: 'Chester appears on the government\'s List of Cities, published in 2022. We have no connection with Historic England, Cheshire West and Chester Council or the Environment Agency. The river project uses the Gowy rather than the Dee because the Environment Agency\'s open hydrology service publishes a long, quality-graded daily record for the Gowy, while the Dee at Chester does not appear in that service.' },
        { kind: 'spec', title: 'Where the flows come from', p: 'The Environment Agency\'s Hydrology service publishes the daily mean flow of the River Gowy at Bridge Trafford, north east of Chester, from August 1979, with a quality grade on every day. We used only days graded complete and good: 14,855 of them.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How fast does the Gowy drain, and how should a computer learn it?',
      intro: 'After a peak, many rivers fall along a curve where flow = starting flow x e to the power of minus time over k. The number k, in days, says how quickly the river drains. Gradient descent finds k by repeatedly stepping downhill on the error.',
      body: [
        { kind: 'table', caption: 'River Gowy at Bridge Trafford, 22-day fall from 19 January 2023 (4.122 to 0.730 cubic metres per second): the same model fitted with different step sizes', head: ['Step size (learning rate)', 'What happened', 'Decay time k'], rows: [
          ['0.0001', 'Still creeping after 20,000 steps', '10.32 days, not finished'],
          ['0.001', 'Settled after 5,528 steps', '10.39 days'],
          ['0.01', 'Settled after 642 steps', '10.39 days'],
          ['0.05', 'Stuck at a poor answer', '2.15 days'],
          ['0.5', 'Claimed success after 51 steps', '0.04 days, useless']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Find the falls', p: 'Scan 14,855 good days for peaks above 1.285 cubic metres per second followed by at least eight days of steady falling. That gives 189 recessions, typically 10 days long.' },
          { h3: '2. Step downhill', p: 'Start with a guess for the starting flow and k, work out which way the error falls fastest, take a small step that way, and repeat until the error stops shrinking.' },
          { h3: '3. Check the answer', p: 'Compare the fitted curve with the readings. A result that satisfies the stopping rule but misses the data, like k of 0.04 days, is a failure however quickly it arrived.' }
        ] },
        { kind: 'callout', h3: 'Which error are you minimising?', p: 'Fitting the logarithm of the flow with a straight line is a popular shortcut, and it gave 15.98 days for the January 2023 fall where gradient descent on the flow itself gave 10.39. Across all 189 recessions the pattern held: at a step size of 0.01, 182 fits settled, with a median k of 4.2 days, while the logarithm shortcut gave 6.1 days and came out longer in 181 of the 182. Neither is wrong. The logarithm treats a small error at low flow as seriously as a large one at high flow; the direct fit cares most about the big numbers. Choosing the error to minimise is choosing what the answer means.' },
        { kind: 'p', text: 'Seven recessions never settled within 50,000 steps at that rate, a reminder that one step size does not suit every problem. The Gowy\'s highest daily mean flow on a good day in the whole record was 18.034 cubic metres per second, on 24 August 1987, so the river our learners model is a small one, but the method is the one that trains the largest AI systems in the world.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Fitting models',
      h2: 'Five questions before trusting a fitted number',
      intro: 'Practised on the Gowy, then used for drug doses, battery discharge, cooling cups of tea, radioactive decay and every neural network trained by gradient descent.',
      body: [
        { kind: 'table', caption: 'Decisions behind a gradient descent fit', head: ['Question', 'For the Gowy recessions', 'What goes wrong if you skip it'], rows: [
          ['Is the data good?', 'Only days graded complete and good', 'Estimated flows bending the curve'],
          ['What counts as a recession?', 'A peak above 1.285, then 8 or more falling days', 'Rain in the middle of a fall read as slow drainage'],
          ['How big a step?', '0.01, tested against larger and smaller', 'Crawling for ever, or leaping to nonsense'],
          ['What does "converged" mean?', 'The error stopped shrinking and the curve fits', 'Stopping at a wrong answer and calling it done'],
          ['Which error?', 'Flow itself, with the logarithm shown for comparison', 'A decay time whose meaning nobody knows']
        ] },
        { kind: 'p', text: 'The fourth row is the one AI engineers watch most closely. A training run can stop improving because it has found a good answer, or because it has jammed somewhere useless, and the loss number alone does not always say which. Checking the fitted curve against real data, as the class does here, is the habit that catches it.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Guessing a hidden number with hot-and-cold clues and learning that giant jumps overshoot while tiny steps take for ever.' },
          { h3: 'Teenagers', p: 'Gradient descent written by hand in Python, tested on real Environment Agency flows, with step sizes and error measures compared.' },
          { h3: 'Adults', p: 'Fitting models to measurements at work, with convergence checked against the data and the choice of error explained.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Environment Agency, Historic England or Cheshire West and Chester Council. The flows, census tables and monument records are open data; the recessions, fits and step-size experiments on this page are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From hot-and-cold guessing to gradient descent',
    intro: 'Treat the age bands as a starting guide; the free lesson decides where each learner begins.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Warmer, colder', p: 'Hot-and-cold guessing games that show why the size of each step matters as much as its direction.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Curves in code', p: 'Plotting how a quantity halves again and again in Python, and matching a curve to real numbers by eye.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Gradient descent', p: 'Fitting a decay curve to real river data, testing step sizes and comparing two ways of measuring error.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Models at work', p: 'Fitting and checking models on real measurements, with convergence and the chosen error made explicit.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Gradient descent trains every large AI model. Why should a Chester teenager run it on a river?',
    intro: 'Because on a small, real problem you can see exactly how it succeeds and how it fails.',
    p1: 'The chatbots and image tools of 2026 were trained by gradient descent on billions of numbers, far too many to inspect. On the Gowy there are two numbers to learn and a curve anyone can check. A learner who has watched a step size of 0.5 declare victory at a useless answer understands why AI training runs are watched, restarted and tested so carefully.',
    p2: 'The choice of error matters just as much in AI. What a model is asked to minimise decides what it becomes good at, and changing the measure changes the answer, exactly as the logarithm shortcut changed k from 10.39 to 15.98 days. Learning that on a river makes it easy to question an AI system\'s goals later.',
    closer: 'So a Chester teenager should keep learning to code in 2026, inside walls that have seen two thousand years of change: machines will keep learning faster, but someone has to check whether what they learned is true.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Hoole, Blacon or Handbridge, all without the journey',
    intro: 'The council area runs from the city out to Ellesmere Port, Neston and Frodsham. Online, each town is exactly as near to the lesson as the Rows.',
    cells: [
      { h3: 'City and towns', p: 'A learner in Lache and another in Neston can share one class, with no drive into the city centre.' },
      { h3: 'Levels Cheshire schools use', p: 'Our levels follow the English curriculum from Reception through each Key Stage to GCSE and A level, and every lesson is taught in English.' },
      { h3: 'Straight into real work', p: 'Even the free session covers a real task, and it ends with our suggested level, course and weekly slot. No card is requested.' },
      { h3: 'Grouped by stage', p: 'Five to ten learners at the same level, from Chester, around the UK and overseas, so each stage has sensible times.' },
      { h3: 'A steady rhythm', p: 'Two regular lessons each week, around eight a month, with holidays and exam weeks planned with the teacher well ahead.' },
      { h3: 'Across the time zones', p: 'It is 9 pm for our teachers in India when a 4.30 pm lesson starts in Chester in summer, and 10 pm in winter, because India does not change its clocks; they shape their evenings around UK families.' }
    ],
    spec: { title: 'Around Cheshire and North Wales', p: 'Families in Ellesmere Port, Northwich, Wrexham or Mold join the very same classes, as lessons are online and groups are formed by level.' }
  },

  fees: {
    h2: 'Chester lesson fees',
    intro: 'A free first lesson, then one monthly fee.',
    first: 'A full lesson free of charge, closing with advice on level, course and a weekly slot.',
    group: 'Roughly eight live lessons a month in a group of five to ten learners at one stage.',
    private: 'Roughly eight live lessons a month, with the teacher focused only on your learner.',
    closer: 'Families in Upton or Vicars Cross are billed in US dollars, as every family outside India is, and no pound price appears on any of our pages. There is nothing to pay until after the free lesson, once a course and weekly time are chosen; the pricing page explains pauses, missed lessons and moves between group and one-to-one teaching.'
  },

  reviewsH2: 'Google reviews from six families, as they posted them',

  book: {
    h2: 'Book a free lesson for a Chester learner',
    intro: 'We pick the opening task for the learner: a hot-and-cold guessing game for a young child, a short Python program that halves a number again and again for a beginner, or decades of Gowy flows and gradient descent for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Chester learner.'
  },

  faq: {
    h2: 'Chester coding class questions',
    intro: 'The questions Chester families send us most.',
    items: [
      { q: 'How many people live in Cheshire West and Chester?', a: 'Census 2021 counted 357,150 usual residents in Cheshire West and Chester, the council area that includes the city, with 352,087 in households. The area named Chester City and Garden Quarter had 10,245.' },
      { q: 'How does the area compare with England?', a: 'It has an older working-age population: 7.3% of residents were aged 50 to 54 and 7.4% aged 55 to 59 in 2021, above England. In the city centre area, 38.4% of residents aged five and over were students.' },
      { q: 'What is gradient descent?', a: 'A way of finding good values for a model by repeatedly measuring the error, working out which direction reduces it fastest, and taking a small step that way. It is the main method used to train modern AI models.' },
      { q: 'How fast does the River Gowy drain after rain?', a: 'It depends how you measure the error. Across 189 falls since 1979, gradient descent on the flow itself gave a median decay time of 4.2 days, while fitting the logarithm gave 6.1 days.' },
      { q: 'Where do the river flows come from?', a: 'From the Environment Agency\'s Hydrology open data: daily mean flow of the River Gowy at Bridge Trafford, from August 1979, using only days graded complete and good.' },
      { q: 'What are Chester\'s scheduled monuments?', a: 'Historic England schedules the walls, towers, gates and posterns of the City of Chester, the southern part of the Roman amphitheatre, part of Chester Castle, the Dee Bridge and a Roman quarry with a rock-cut figure of Minerva on Edgar\'s Field, among others. We are not connected with Historic England.' },
      { q: 'What times do Chester lessons run?', a: 'Most Chester families choose a slot after school, on a weekday evening or at the weekend, and we agree the time in the free lesson. India is four and a half hours ahead of Chester in summer and five and a half in winter.' },
      { q: 'Is there a Chester centre we can visit?', a: 'No. There is no Chester centre and we have no premises anywhere in the UK, because every lesson is live online. Learners need a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do lessons cost in Chester?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one lessons on the same timetable cost USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How do you group learners?', a: 'By level, pace and goals rather than age or address, with five to ten learners at one stage. If no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The North West and beyond',
    html: 'To the north, the <a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool page</a> reads its tide as a sum of waves, and <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a> correlates changes rather than levels. <a class="cg-inline-link" href="/best-coding-class-in-lancaster">Lancaster</a> asks whether the Lune is flooding more or whether chance could explain it. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Chester and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-liverpool', label: 'Liverpool' },
    { href: '/best-coding-class-in-manchester', label: 'Manchester' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-chs .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.9vw, 2.35rem); }
.cg-root.cg-chs .cg-hero h1 { font-weight: 750; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-chs .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-chs .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-chs .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.016em; }
.cg-root.cg-chs .cg-grid-3 { gap: clamp(1rem, 2.3vw, 2rem); }
.cg-root.cg-chs .cg-table th { letter-spacing: 0.02em; }
.cg-root.cg-chs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-chs .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-chs .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Cheshire West and Chester, Census 2021 via Nomis (E06000050): TS001 357,150 usual residents, 352,087 in households, 5,063 in communal establishments; TS007A 26,045 aged 50 to 54 (7.3 percent, England 6.9), 26,572 aged 55 to 59 (7.4 percent, England 6.7), 19,681 aged 20 to 24 (5.5 percent, England 6.0); TS068 62,738 students of 339,532 residents aged 5 and over (18.5 percent, England 20.4); TS006 388.2 per square kilometre (England 433.5). MSOAs: Chester City and Garden Quarter 10,245 (38.4 percent students, 2,339.5 per square kilometre); Blacon North 6,243 (22.5, 4,208.0); Chester Handbridge Park 8,816 (17.3, 1,678.5). NHLE scheduled monuments: walls, towers, gates and posterns 1006785; Roman amphitheatre (southern part) 1004638; Chester Castle (part) 1006773; Dee Bridge 1006771; Abbey Green Roman site 1006767; Edgar\'s Field Roman quarry and Minerva 1014718 (13 December 1929). GOV.UK List of Cities 2022.',
    localProject: 'How fast does the Gowy drain? EA Hydrology, Gowy at Bridge Trafford, daily mean flow 1979 to 2026, 14,855 good days. 189 recessions (peak above 1.285, 8+ falling days). Q = Q0 exp(-t/k) fitted by gradient descent. 19 January 2023, 22 days: rate 0.0001 unfinished at 20,000 (k 10.32); 0.001 5,528 steps (10.39); 0.01 642 steps (10.39); 0.05 stuck (2.15); 0.5 false convergence at 51 steps (0.04). Log-linear 15.98. All at 0.01: 182 converged, 7 not; median k 4.2 days against log-linear 6.1; log-linear longer in 181 of 182. Record good daily mean 18.034 on 24 August 1987. Lesson family: gradient descent.',
    requiredMentions: [
      '357,150',
      '352,087',
      '62,738',
      '339,532',
      '388.2',
      'Gowy',
      'Bridge Trafford',
      'Edgar',
      'posterns',
      'Blacon',
      'Handbridge',
      'Garden Quarter'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001: Cheshire West and Chester 357,150; MSOAs Chester City and Garden Quarter, Blacon North, Chester Handbridge Park.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000050,E02003803,E02003798,E02003807' },
      { claim: 'Nomis, Census 2021 TS007A: Cheshire West and Chester and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000050,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: students aged 5 and over; district 18.5 percent; city centre area 38.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000050,E02003803,E02003798,E02003807,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: densities.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E06000050,E02003803,E02003798,E02003807,E92000001' },
      { claim: 'House of Commons Library, MSOA Names: Chester areas.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'Environment Agency Hydrology: River Gowy at Bridge Trafford, daily mean flow with quality grades.', url: 'https://environment.data.gov.uk/hydrology/id/measures/6078ba41-0d4f-4053-aaea-25d628b1d97f-flow-m-86400-m3s-qualified' },
      { claim: 'Historic England NHLE open data, scheduled monuments: Chester walls, amphitheatre, castle, Dee Bridge, Abbey Green, Edgar\'s Field quarry and Minerva.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1006785' },
      { claim: 'GOV.UK, List of Cities (29 August 2022): Chester listed.', url: 'https://www.gov.uk/government/publications/list-of-cities' }
    ],
    rejectedClaims: [
      'River Dee flows at Chester: not in the Environment Agency\'s open hydrology service; the Gowy is used instead and the page says why.',
      'Chester Cathedral history: the cathedral\'s website pages fetched carried no historical text to cite; no cathedral history is claimed.',
      'Superlatives about the city walls or racecourse: not sourced, not used.',
      'A single "true" decay time for the Gowy: the page shows how the answer depends on the error being minimised.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Environment Agency, Historic England or Cheshire West and Chester Council.'
    ]
  }
};
