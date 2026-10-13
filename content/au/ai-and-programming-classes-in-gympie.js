'use strict';
// Gympie (cg- regional city page, Australia cluster Phase 7, row 185). Shaped page: AI and programming for teenagers
// and adults. Spine: does averaging three simple forecasters beat picking one? Data: ABS Data API, dataflow
// ABS_ANNUAL_ERP_ASGS2021 (1.2.0), estimated resident population for every Queensland SA2, 2001 to 2025, read 10
// October 2026. Our code (scratchpad au/r7/gym.py): forecasters from the last ten years at each origin: naive (last
// value), linear trend, compound growth; combination = their plain average; horizon 5 years; SA2s with at least
// 1,000 residents at the origin and ten years earlier. Mean / median absolute percentage error: origin 2011 (519
// areas) naive 8.02/6.00, linear 5.97/4.30, compound 8.16/4.97, combination 5.62/3.70; origin 2015 (524) 7.20/4.85,
// 5.53/3.71, 6.99/4.36, 4.99/3.15; origin 2020 (525) 7.52/5.84, 4.27/2.78, 5.05/3.15, 4.51/3.16. Origin 2015: the
// combination beat naive in 354 areas, linear in 314, compound in 332 of 524. Gympie - North (319031512): 2015 origin
// errors 5.09, 1.22, 1.93, combination 0.65; 2020 origin combination 15,600 vs 15,512 (0.57). Gympie - South
// (319031513): 2015 origin combination 7,469 vs 7,434 (0.47); 2020 origin all methods missed 9,079 (naive 18.12,
// linear 12.14, compound 11.40, combination 13.89). Lesson family: forecast combination (averaging simple
// forecasters, held-out years); screened 0 location-page hits and 0 claims 10 October 2026 (distinct from Dundee
// walk-forward baselines and Plin Gompertz fit); claimed by AU-R7.
// Place facts read raw 10 October 2026: ABS Census 2021 QuickStats, Gympie SUA (3008): 22,424 people; median age
// 43; 5,997 families; 9,916 private dwellings; 2.4 per household; separate house 7,705 (88.0 percent; Qld 74.8;
// Australia 72.3); Labourers 1,301 (15.1; Qld 10.1; Australia 9.0); Professionals 1,151 (13.3; Qld 21.4); car as
// driver 6,100 (70.6; Qld 59.5); aged 10 to 14 1,529 (6.8; Qld 6.6). ABS SUA area 69.4615 square kilometres. ABS SAL
// polygons at least 80 percent inside: Gympie, Araluen, Banks Pocket, Glanmire, Monkland, Southside, Victory Heights,
// Jones Hill, Tamaree. Queensland Department of Education future dates, 2027 terms. IANA tz Australia/Brisbane: rule
// AQ, last daylight saving ended March 1992. Excluded: income, rent, ancestry, religion, health, Indigenous status.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'GYMPIE', label: 'Gympie', blurb: 'AI and programming for Gympie, and three simple forecasters tested against ten years of Queensland population estimates.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-gympie',
  code: 'gymp',
  accent: '#127412',
  accentRationale: 'Gympie: a deep Mary Valley green (HSV saturation 0.84, value 0.45, hue 120), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, with contrast above 4.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Gympie',
    eyebrow: 'Gympie, Queensland, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Queensland' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-queensland', name: 'Queensland' }],
  nav: [
    { label: 'Queensland', href: '/coding-and-ai-classes-in-queensland' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Gympie, Queensland',
  title: 'AI and Programming Classes in Gympie | Live Online Lessons',
  description: 'AI and programming classes for Gympie teens and adults, live online: Python, forecasting and machine learning tested on real Queensland data. First lesson free.',
  ogDescription: 'Gympie AI and programming classes, with a project that tests three simple forecasters and their average on ten years of Queensland population estimates.',
  twitterDescription: 'Live online AI and programming classes for Gympie teens and adults, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Gympie Learners',
    description: 'Python, forecasting and machine learning taught live online to teenagers and adults in Gympie and the Mary Valley of Queensland.'
  },

  h1: 'AI and programming classes in Gympie',
  capsuleQ: 'What are the best AI and programming classes in Gympie?',
  capsule: 'Gympie teenagers and adults learn AI well when they build models in Python and then test them honestly on data the model never saw. The 2021 Census counted 22,424 people in the Gympie urban area, and the median age was 43. Every class is live online with a teacher, one to one or in a small group, and the first lesson is free.',
  lead: 'Forecasting is where many people first meet AI, and the simplest lesson in forecasting is also the most surprising: when you are not sure which method is right, average several. We tested that on the bureau\'s population estimates for more than five hundred Queensland areas, including the two that cover Gympie. Three plain forecasters looked back ten years and predicted five years ahead: keep the last value, extend the straight-line trend, or extend the compound growth rate. Their average was the most accurate of the four for forecasts made in 2011 and 2015, and close behind the straight-line trend for 2020. It also failed in exactly the place where every method failed, Gympie South after 2020, which is the second lesson the project teaches.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Gympie.',

  picks: {
    eyebrow: 'Course picks for Gympie',
    h2: 'AI learning paths for the Mary Valley',
    intro: 'All are taught live and can reach a project like the forecasting test. Book the free trial, which needs no card, and the teacher will suggest one.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning for teenagers, built in Python, with a strong habit of testing every model on held-out data.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from zero to programs that read real data files and make simple predictions.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'University and adult', note: 'Machine learning, deep learning and generative AI, with evaluation treated as seriously as training.' },
      { course: 'data-science-complete-masterclass-college', band: 'Adults', note: 'Data science in Python, from cleaning and exploring data to forecasting and model checks.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Gympie at the Census',
      h2: 'A Mary Valley city of separate houses',
      intro: 'Figures for the Gympie Significant Urban Area from the 2021 Census, against Queensland and Australia.',
      body: [
        { kind: 'table', caption: 'Gympie urban area: core 2021 counts', head: ['Measure', 'Gympie'], rows: [
          ['Residents', '22,424'],
          ['Median age', '43'],
          ['Families', '5,997'],
          ['Private dwellings', '9,916'],
          ['Average people per household', '2.4'],
          ['Area of the urban area', 'about 69.5 square kilometres']
        ] },
        { kind: 'table', mt: true, caption: 'Gympie beside Queensland and Australia', head: ['Measure', 'Gympie', 'Qld', 'Australia'], rows: [
          ['Separate houses among occupied homes', '7,705 (88.0%)', '74.8%', '72.3%'],
          ['Labourers among employed residents', '1,301 (15.1%)', '10.1%', '9.0%'],
          ['Professionals among employed residents', '1,151 (13.3%)', '21.4%', '24.0%'],
          ['Drove themselves to work', '6,100 (70.6%)', '59.5%', '52.7%'],
          ['Children aged 10 to 14', '1,529 (6.8%)', '6.6%', '6.2%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Detached living', p: 'Separate houses are 88.0% of occupied homes, far above the Queensland share of 74.8%.' },
          { h3: 'Practical work', p: 'Labourers are 15.1% of employed residents, against 10.1% across the state.' },
          { h3: 'Localities inside', p: 'Bureau localities inside the urban area include Gympie, Southside, Monkland, Jones Hill, Victory Heights, Glanmire, Araluen, Banks Pocket and Tamaree.' }
        ] },
        { kind: 'p', text: 'The bureau perturbs Census cells slightly for privacy, so small differences between parts and totals are expected. Figures appear here exactly as published.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Does averaging three forecasts beat picking one?',
      intro: 'Each forecaster sees ten years of history and predicts five years ahead. We score them on what actually happened.',
      body: [
        { kind: 'table', caption: 'Average forecast error across Queensland areas, five years ahead (mean absolute percentage error, our calculation)', head: ['Forecast made in', 'Areas', 'Keep last value', 'Straight-line trend', 'Compound growth', 'Average of the three'], rows: [
          ['2011, checked in 2016', '519', '8.02%', '5.97%', '8.16%', '5.62%'],
          ['2015, checked in 2020', '524', '7.20%', '5.53%', '6.99%', '4.99%'],
          ['2020, checked in 2025', '525', '7.52%', '4.27%', '5.05%', '4.51%']
        ] },
        { kind: 'table', mt: true, caption: 'The two statistical areas covering Gympie (bureau estimates and our forecasts)', head: ['Area and forecast', 'Actual', 'Average of three', 'Error'], rows: [
          ['Gympie - North, made 2015 for 2020', '15,020', '14,922', '0.65%'],
          ['Gympie - North, made 2020 for 2025', '15,512', '15,600', '0.57%'],
          ['Gympie - South, made 2015 for 2020', '7,434', '7,469', '0.47%'],
          ['Gympie - South, made 2020 for 2025', '9,079', '7,818', '13.89%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Three honest baselines', p: 'Keep the last value, extend the ten-year straight line, or extend the ten-year growth rate. Each is one line of Python.' },
          { h3: 'Average them', p: 'The combination is the plain mean of the three predictions, with no weights fitted to the data, so it cannot overfit the test years.' },
          { h3: 'Score on held-out years', p: 'Every forecast is checked against an estimate the methods never saw, across hundreds of areas, not just one town.' }
        ] },
        { kind: 'callout', h3: 'When averaging helps, and when nothing does', p: 'For forecasts made in 2015 the average beat keeping the last value in 354 of 524 areas, the straight line in 314 and compound growth in 332. Yet in 2020 the straight line alone did slightly better on average, and in Gympie South every method was far off: the area grew from 7,434 to 9,079 in five years, much faster than its past suggested. Combining forecasts reduces risk; it cannot predict a change the history does not contain.' },
        { kind: 'p', text: 'Forecasts here are classroom exercises on past data, not predictions of Gympie\'s future population. We used areas with at least 1,000 estimated residents at each starting point and ten years before it. Gympie - North and Gympie - South are bureau statistical areas whose boundaries differ from the urban area in the Census table. Estimates come from the Australian Bureau of Statistics; every forecast and error is our own calculation.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Why combining works',
      h2: 'What the forecasting test teaches about AI',
      intro: 'The same idea sits behind many of the most reliable systems in machine learning.',
      body: [
        { kind: 'p', text: 'Each simple forecaster makes a different kind of mistake. Keeping the last value ignores growth; the straight line misses acceleration; compound growth overshoots fast-growing areas. Because their errors partly point in different directions, the average cancels some of them out. Ensembles in machine learning, from random forests to averaging several trained networks, use the same principle, and learners who build the three-method version first understand why those bigger methods work.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write the three forecasters, average them, and measure the error on a few areas held back from the start.' },
          { h3: 'University students', p: 'Test weighted combinations and see when fitted weights beat the plain average and when they overfit.' },
          { h3: 'Adults', p: 'Apply simple combinations to a business series such as orders or stock, and report the error alongside the forecast.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the Australian Bureau of Statistics, the Queensland Government or Gympie Regional Council. The estimates are the bureau\'s; the forecasting code and every score on this page are ours.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Gympie planner',
      h2: 'Queensland terms in 2027 and steady clocks',
      intro: 'Dates that help a Gympie family choose a regular lesson time.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Terms 1 and 2', p: 'Queensland state schools run Term 1 of 2027 from Wednesday 27 January to Thursday 25 March, and Term 2 from Monday 12 April to Friday 25 June.' },
          { h3: 'Terms 3 and 4', p: 'Term 3 runs from Monday 12 July to Friday 17 September, and Term 4 from Tuesday 5 October to Friday 10 December.' },
          { h3: 'No clock changes', p: 'Queensland has had no daylight saving since March 1992, so Gympie stays on AEST and India time is four and a half hours behind all year.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first predictions to tested models',
    intro: 'The ages are a guide; the free lesson sets the real starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Patterns in numbers', p: 'Python that spots trends in short lists and makes a first simple prediction.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Models and tests', p: 'First machine learning models, with training and test data kept strictly apart.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'University', h3: 'Ensembles', p: 'Combining models, measuring uncertainty and comparing methods fairly across many datasets.', courses: ['ai-ml-masterclass-complete-college', 'data-analytics-mathematics-masterclass'] },
      { band: 'Adults', h3: 'Forecasts at work', p: 'Forecasting and reporting with Python, with errors shown next to every prediction.', courses: ['data-science-complete-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI tools will forecast anything. Why should Gympie learners build their own?',
    intro: 'Because a forecast with no record of past errors is a guess, and the only way to get that record is to test it.',
    p1: 'Modern AI tools produce confident forecasts on request, often with a neat chart. What they rarely show is how the same method would have done in earlier years. In the project, the method that won in 2020 was not the one that won in 2015, and none of them saw the jump in Gympie South coming. A learner who has run that test knows to ask any forecaster, human or machine, for its track record.',
    p2: 'Our Gympie learners write the forecasters, combine them and score them on hundreds of areas, then compare the results with what an AI assistant says when given the same data. That experience turns forecasts from something to believe into something to check.',
    closer: 'Anyone can ask for a prediction in 2026; the useful skill is knowing how far to trust it.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Gympie lessons work',
    intro: 'Lessons are live video classes, so learners across the Mary Valley join from home.',
    cells: [
      { h3: 'Learning from home', p: 'A computer with a microphone and a reliable connection is all a Gympie learner needs.' },
      { h3: 'Queensland levels', p: 'Teachers plan around Queensland year levels and school terms, and everything is taught in English.' },
      { h3: 'Free trial first', p: 'The first lesson is a full class that ends with a course and weekly time recommended for the learner.' },
      { h3: 'Level-matched groups', p: 'Groups of fifteen to twenty learners share a level and pace, gathered from Gympie and other places.' },
      { h3: 'Twice weekly', p: 'Group learners meet on two set days each week, roughly eight lessons a month.' },
      { h3: 'Teachers in India', p: 'Our teachers work in India, four and a half hours behind Gympie in every season.' }
    ],
    spec: { title: 'No seasonal juggling', p: 'Because neither Queensland nor India changes its clocks, a Gympie lesson time stays the same all year.' }
  },

  fees: {
    h2: 'Gympie class fees',
    intro: 'Prices are brief and the same across Australia.',
    first: 'Your first lesson is free and closes with a recommended level, course and time.',
    group: 'A month of group classes, about eight lessons, with fifteen to twenty learners at one level.',
    private: 'Roughly eight private lessons each month with your own teacher.',
    closer: 'We charge in US dollars outside India, and Gympie pays the same as any other Australian town. Billing starts after the trial has agreed the course and schedule, and the pricing page explains holidays, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Google reviews from families',

  book: {
    h2: 'Book a free AI lesson in Gympie',
    intro: 'Let us know the learner\'s age and interests. A beginner might write a first prediction in Python; a more experienced learner might build the three-forecaster test.',
    success: 'Thank you. We will be in touch soon about a Gympie lesson.'
  },

  faq: {
    h2: 'Gympie AI class questions',
    intro: 'Answers to the questions Gympie families and adult learners ask most.',
    items: [
      { q: 'What is forecast combination?', a: 'Forecast combination means producing several forecasts with different methods and averaging them. It often beats any single method because their errors partly cancel.' },
      { q: 'Which method won in the Gympie project?', a: 'The average of the three forecasters had the lowest average error for forecasts made in 2011 and 2015. For forecasts made in 2020, the straight-line trend alone was slightly better.' },
      { q: 'How many people live in Gympie?', a: 'The 2021 Census counted 22,424 people in the Gympie urban area, with a median age of 43.' },
      { q: 'Why did every method miss Gympie South after 2020?', a: 'Its estimated population rose from 7,434 in 2020 to 9,079 in 2025, much faster than in the previous ten years, and forecasters built only on that history could not anticipate the change.' },
      { q: 'Do you teach senior Queensland students?', a: 'Yes, with the programming and maths that senior study uses, planned around Queensland terms. Assessed work always stays the student\'s own.' },
      { q: 'When are lessons for Gympie learners?', a: 'Weekday afternoons and Saturday mornings are popular, always agreed in Gympie time.' },
      { q: 'Can younger children join?', a: 'Yes. Children from age six start with Scratch and games; the forecasting project suits teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Gympie?', a: 'No. We hold no premises in Australia and claim none. All classes are live online; learners need a computer and a dependable connection, and our listed phone number is in India.', boiler: true },
      { q: 'What do Gympie AI classes cost?', a: 'The first lesson is free. Afterwards a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month one-to-one. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners share a group?', a: 'Fifteen to twenty, matched by level and aims rather than age or location. If no group time works, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More from Queensland',
    html: 'The Queensland overview is <a class="cg-inline-link" href="/coding-and-ai-classes-in-queensland">coding and AI classes in Queensland</a>. Closer to home, see <a class="cg-inline-link" href="/ai-and-programming-classes-in-sunshine-coast">AI and programming classes on the Sunshine Coast</a>. Younger learners can start with <a class="cg-inline-link" href="/python-ai-course-for-kids-australia">a Python AI course for kids</a>, and the wider argument is in <a class="cg-inline-link" href="/learn-to-train-ai-not-just-prompt-it-australia">learn to train AI, not just prompt it</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Gympie and Queensland',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/ai-and-programming-classes-in-sunshine-coast', label: 'Sunshine Coast' },
    { href: '/vibe-coding-and-ai-agents-classes-in-hervey-bay', label: 'Hervey Bay' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-gymp .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.8vw, 2.3rem); }
.cg-root.cg-gymp .cg-hero h1 { font-weight: 730; letter-spacing: -0.018em; line-height: 1.1; }
.cg-root.cg-gymp .cg-capsule { border-left: 3px solid var(--cg-accent); background: rgba(18, 116, 18, 0.04); padding: 0.8rem 1rem; }
.cg-root.cg-gymp .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-gymp .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.009em; }
.cg-root.cg-gymp .cg-grid-3 { gap: clamp(0.9rem, 2.1vw, 1.7rem); }
.cg-root.cg-gymp .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.006em; }
.cg-root.cg-gymp .cg-table td + td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gymp .cg-ladder-col { border-top: 3px solid rgba(18, 116, 18, 0.3); padding-top: 0.85rem; }
.cg-root.cg-gymp .cg-callout { border-left: 3px solid var(--cg-accent); }
`,

  dossier: {
    curriculumAuthority: 'Gympie, ABS Census 2021 QuickStats, Significant Urban Area 3008 (read 10 October 2026): 22,424 people; median age 43; 5,997 families; 9,916 private dwellings; average 2.4 people per household; separate house 7,705 (88.0 percent; Qld 74.8; Australia 72.3); Labourers 1,301 (15.1 percent; Qld 10.1; Australia 9.0); Professionals 1,151 (13.3 percent; Qld 21.4; Australia 24.0); car as driver 6,100 (70.6 percent; Qld 59.5; Australia 52.7); aged 10 to 14 1,529 (6.8 percent; Qld 6.6; Australia 6.2). ABS ASGS 2021 SUA area 69.4615 square kilometres. ABS SAL 2021 polygons at least 80 percent inside (our overlay): Gympie, Araluen, Banks Pocket, Glanmire, Monkland, Southside, Victory Heights, Jones Hill (0.875), Tamaree (0.80). Queensland Department of Education, future school dates (read 10 October 2026): 2027 Term 1 Wednesday 27 January to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September; Term 4 Tuesday 5 October to Friday 10 December. IANA tzdb australasia: Australia/Brisbane 10:00 rule AQ, last daylight saving period ended in March 1992.',
    localProject: 'Forecast combination. ABS Data API dataflow ABS_ANNUAL_ERP_ASGS2021 1.2.0, ERP by SA2, all Queensland SA2s, 2001 to 2025, read 10 October 2026. Our code (scratchpad au/r7/gym.py): at origin o with the value at o-10, forecasts for o+5: naive = value(o); linear = value(o) + 5 x (value(o) - value(o-10)) / 10; compound = value(o) x (value(o)/value(o-10))^(5/10); combination = mean of the three. Kept SA2s with at least 1,000 residents at o and o-10. Mean and median absolute percentage error: o=2011 n=519 naive 8.021/6.001 linear 5.970/4.298 compound 8.160/4.974 combination 5.622/3.697; o=2015 n=524 7.199/4.848, 5.527/3.706, 6.992/4.359, 4.988/3.151; o=2020 n=525 7.524/5.840, 4.270/2.780, 5.049/3.146, 4.508/3.160. o=2015: combination beat naive in 354, linear in 314, compound in 332 of 524. Gympie - North 319031512: 2001 12,012; 2010 13,355; 2015 14,255; 2020 15,020; 2025 15,512; o=2015 forecasts 14,255 / 15,203 / 15,309 / combination 14,922 (errors 5.09, 1.22, 1.93, 0.65); o=2020 combination 15,600 (0.57). Gympie - South 319031513: 2001 4,267; 2010 6,349; 2015 6,769; 2020 7,434; 2025 9,079; o=2015 combination 7,469 (0.47); o=2020 forecasts 7,434 / 7,976 / 8,044 / combination 7,818 (errors 18.12, 12.14, 11.40, 13.89).',
    requiredMentions: [
      '7,818',
      '14,922',
      '5,997',
      '9,916',
      '7,705',
      'Gympie - North',
      'Gympie - South',
      'forecast combination',
      'Victory Heights',
      '13.89%'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Gympie Significant Urban Area (3008): people, median age, families, dwellings, dwelling structure, occupation, travel to work, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3008' },
      { claim: 'ABS Data API, Estimated Resident Population by SA2 and above (ASGS Edition 3), dataflow ABS_ANNUAL_ERP_ASGS2021, Queensland SA2s.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_ASGS2021,1.2.0/ERP.SA2..A?startPeriod=2001' },
      { claim: 'Queensland Department of Education, future school dates (2027 term dates).', url: 'https://education.qld.gov.au/about-us/calendar/future-dates' },
      { claim: 'ABS ASGS 2021 Significant Urban Area and Suburbs and Localities boundaries.', url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SUA/MapServer/0' },
      { claim: 'IANA time zone database, australasia file: Australia/Brisbane and rule AQ.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any forecast of Gympie\'s future population: the page scores past forecasts against past estimates only.',
      'Any cause for the rapid growth of Gympie - South after 2020: not established from the sources.',
      'Claims that forecast combination always wins: in the 2020 test the straight-line trend alone had the lower mean error, and the page says so.',
      'Queensland senior subject details from the QCAA: its site returned a Cloudflare 403 and was not circumvented.',
      'Income, rent, ancestry, religion, health and Indigenous status figures: excluded by the cluster rules.',
      'Any affiliation with the ABS, the Queensland Government or Gympie Regional Council.'
    ]
  }
};
