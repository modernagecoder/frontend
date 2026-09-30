'use strict';
// Wimbledon, Merton (cg- district page, UK cluster Phase 9, row 444). Keyword slug per the owner's 2026-09-30 decision
// (rotation with city suffix), with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: if you
// tune a model and score it on the same data, how much does the score flatter you? (nested cross-validation: an inner
// loop that chooses settings, an outer loop that scores the whole procedure; the winner's own score is optimistic).
// Data (read 30 September 2026): Nomis Census 2021 for all 654 output areas in Merton: TS045 car or van availability
// (NM_2063_1), TS017 household size (NM_2037_1), TS044 accommodation type (NM_2062_1), TS006 density (NM_2026_1); ONS OA to
// LSOA and LSOA 2021 to ward (May 2022) best-fit lookups. Study area chosen by us: 199 output areas best-fitted to the wards
// Wimbledon Town & Dundonald (43), Wimbledon Park (37), Village (35), Hillside (36) and Raynes Park (48): 23,671
// households, 7,585 with no car or van. The other 455 Merton output areas are a separate check.
// Our run (scratchpad wim/wim.py): target = % of households with no car; inputs log density, one-person share, flat share.
// scikit-learn gradient boosting; 40 random settings drawn from a grid (trees 20 to 400, depth 1 to 6, learning rate 0.01
// to 1.0, subsample, leaf size); 5-fold cross-validation; repeated 10 times with different draws and folds. Mean absolute
// error in percentage points, averaged over the 10 repeats: the winning setting's own cross-validation score 6.14; nested
// cross-validation of the whole procedure 6.37 (winner's score lower in 8 of 10 repeats); the chosen model on the rest of
// Merton 7.04; a typical (median) setting 7.17; the worst 12.36; always guessing the Wimbledon average 11.6.
// Lesson family: nested cross-validation, selection optimism. Screened 30 September 2026: "nested cross-validation" 0
// hits; claimed in claims.txt as wim. Plymouth owns leave-one-out, Ellesmere Port data leakage by spatial split, Bognor
// peeking; Merton borough page = tessellation, not reused (its mentions 215,186, Liberty print works, Eagle House unused).
// Place facts: Census 2021 usual residents by 2022 ward, published per ward, never summed: Wimbledon Town & Dundonald
// 12,966; Wimbledon Park 11,071; Village 11,804; Hillside 8,242; Raynes Park 12,301. postcodes.io (Merton): Wimbledon
// (SW19), South Wimbledon (SW19), Merton Park (SW19), Raynes Park, Cottenham Park and Copse Hill (SW20).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WIMBLEDON', label: 'Wimbledon', blurb: 'AI and programming classes for Wimbledon in Merton, with a machine learning project on how much a tuned model\'s own test score flatters it.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-wimbledon-london',
  code: 'wim',
  accent: '#0A6B4F',
  accentRationale: 'Wimbledon: a deep emerald (6.5:1 contrast), chosen by hand and unused elsewhere in the cluster',
  pageType: 'city',
  place: {
    name: 'Wimbledon',
    eyebrow: 'Wimbledon, Merton, London',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'Merton', href: '/coding-classes-in-merton-london' },
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wimbledon, London',
  title: 'AI and Programming Classes in Wimbledon, London | 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Wimbledon, Raynes Park, South Wimbledon and Merton Park learners aged 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Wimbledon, with a nested cross-validation project that measures how much a tuned model\'s own score overstates its skill.',
  twitterDescription: 'Wimbledon AI, programming, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Wimbledon',
    description: 'Online AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Wimbledon and the London Borough of Merton, taught live with honest evaluation first.'
  },

  h1: 'AI and programming classes in Wimbledon',
  capsuleQ: 'Which are the best AI and programming classes in Wimbledon?',
  capsule: 'The 2021 census recorded 12,966 residents in Merton\'s Wimbledon Town and Dundonald ward, 11,071 in Wimbledon Park, 11,804 in Village, 8,242 in Hillside and 12,301 in Raynes Park. South Wimbledon, Merton Park, Cottenham Park and Copse Hill are suburban areas recorded in the SW19 and SW20 districts. Wimbledon learners from six to 67 take AI, programming, Python, vibe coding and maths with an India-based tutor on a live video call, privately or as one of five to ten in a class at their level. We teach honest testing before clever tools, so a learner can tell a real result from a flattering one. Nothing is charged for lesson one, which ends with our course suggestion. The Wimbledon project tunes a model on 199 Census areas and shows that the score which picked the winner is better than the winner deserves. For Wimbledon families who stay, fees are USD 100 a month for a class place or USD 150 a month one-to-one.',
  lead: 'Modern models have settings, called hyperparameters, and the usual way to choose them is to try many and keep whichever scores highest in cross-validation. The trap is reporting that highest score as the model\'s accuracy. It was the luckiest of many attempts on that particular data, so it is biased upwards. The fix is nested cross-validation: an inner loop does the choosing, and an outer loop scores the whole choosing procedure on data it never touched. This project runs both on Wimbledon, predicting how many households in each small Census area have no car, and then checks the verdict on the rest of Merton.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Wimbledon?',

  picks: {
    eyebrow: 'Wimbledon course picks',
    h2: 'Wimbledon courses in reasoning, Python and AI',
    intro: 'A Wimbledon learner starts on the course that matches their age; every course begins with one free live lesson and no card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: fair tests, and why marking your own homework does not count.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games the learner invents, builds with an AI and then tries hard to break.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including tuning and nested cross-validation on Wimbledon data.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python through data science, model evaluation and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wimbledon and Merton',
      h2: 'Wimbledon Town, Wimbledon Park, Village, Hillside and Raynes Park',
      intro: 'Census 2021 counts for five Merton wards, and suburbs recorded in SW19 and SW20.',
      body: [
        { kind: 'table', caption: 'Usual residents by Merton ward, Census 2021 (ONS, via Nomis), 2022 ward boundaries', head: ['Ward', 'Residents (2021)'], rows: [
          ['Wimbledon Town & Dundonald', '12,966'],
          ['Wimbledon Park', '11,071'],
          ['Village', '11,804'],
          ['Hillside', '8,242'],
          ['Raynes Park', '12,301']
        ] },
        { kind: 'p', text: 'The five figures are separate ONS counts and are not added into a population for Wimbledon, which has no one official outline. On postcodes.io, Wimbledon, South Wimbledon and Merton Park fall in SW19, with Raynes Park, Cottenham Park and Copse Hill in SW20, all in the borough of Merton. Merton schools teach the national curriculum for England; with your term dates in hand we keep lessons clear of the holidays.' },
        { kind: 'callout', h3: 'Merton, London and the way we teach', p: 'Other options are on <a class="cg-inline-link" href="/coding-classes-in-merton-london">coding classes in Merton</a> and our <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a>. The thinking-first approach is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Wimbledon project',
      h2: 'Nested cross-validation: is the winning model as good as its score?',
      intro: 'Forty settings, one winner, and three different answers to "how accurate is it?".',
      body: [
        { kind: 'p', text: 'Four Census 2021 tables for Merton come from the Nomis API. Only the 199 output areas inside the five wards listed above are kept, home to 23,671 households; 7,585 of those have no car or van. Three facts about each Wimbledon area go in (how crowded it is, how many homes hold one person, how many homes are flats) and a gradient boosting model has to say what share of its households are car-free. Forty settings are drawn at random, varying the number of trees, their depth, the learning rate and more, and each is scored by five-fold cross-validation. The whole experiment is repeated ten times with different draws.' },
        { kind: 'table', caption: 'Average error in percentage points when predicting the no-car share, means of 10 repeats, our Python run on Census 2021 data', head: ['How the error was measured', 'Error'], rows: [
          ['Always guess the Wimbledon average', '11.6'],
          ['A typical setting out of the forty', '7.17'],
          ['The winning setting, by the score that chose it', '6.14'],
          ['Nested cross-validation of the whole procedure', '6.37'],
          ['The chosen model tested on the rest of Merton', '7.04']
        ] },
        { kind: 'p', text: 'The winner\'s own score, 6.14, is the number most tutorials would report. Nested cross-validation, which repeats the search inside each training fold and scores on the fold left out, gives 6.37, and the winner\'s score was the lower of the two in 8 of the 10 repeats. The gap is small here because forty settings of one model on 199 areas leave limited room for luck; search thousands of settings on a smaller sample and it grows. The last row carries a different warning. On the 455 Merton areas outside Wimbledon the chosen model\'s error rises to 7.04, because those areas are not like the ones it learned from. Nested cross-validation makes the score honest for data like the training data; it cannot promise anything about somewhere else.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Pick the luckiest of ten coin-flippers, then ask them to do it again and see what happens.' },
          { h3: 'Ages 11 to 15', p: 'Train one model on Wimbledon Census areas in Python and score it on areas it has not seen.' },
          { h3: 'Ages 15 and up', p: 'Search forty settings, then wrap the search in an outer loop and compare the two scores.' }
        ] },
        { kind: 'callout', h3: 'Census data, our models', p: 'Household, car, housing and density counts are Office for National Statistics Census 2021 data from Nomis, under the Open Government Licence. The choice of wards, the models, the search and every error figure are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Evaluation and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Whichever score picked the champion is the one figure to leave out of the report.',
      body: [
        { kind: 'table', caption: 'From the Wimbledon tuning project to working with AI', head: ['In the Census project', 'When AI tunes a model for you'], rows: [
          ['The winner scored 6.14 by its own test', 'A selected score is a lucky score'],
          ['Nested cross-validation said 6.37', 'Score the procedure, not the pick'],
          ['A typical setting scored 7.17', 'Tuning helped, but less than it looked'],
          ['Elsewhere in Merton the error was 7.04', 'New places are a different test again'],
          ['Ten repeats gave a steadier answer', 'One run is an anecdote']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to "tune this model and report the accuracy" and it will usually hand back the top cross-validation score from its search, the flattering one. When a Wimbledon learner vibe codes, saying in words what the program should do while an AI writes it, the instruction includes an untouched outer test, and the learner checks the code really keeps that data apart. AI agents that train models unattended make this mistake silently unless the evaluation rule is part of their brief. We start agent building when a learner\'s Python is independent, generally at sixteen or older, and Copilot Studio agents are covered only in one-to-one lessons. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the UK student route into AI agents</a> and the principle behind it, <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'The Office for National Statistics, Nomis and postcodes.io provided open data and nothing more; this analysis, and any slip in it, belongs to Modern Age Coders.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From fair tests to nested validation',
    intro: 'We read the school year as a hint, and let the free Wimbledon trial lesson show the true level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Fair tests, luck versus skill, and checking your own answer properly.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps made with an AI, then tested by their maker.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Models, tuning and honest scoring beside GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Machine learning and agents', p: 'Evaluation done properly, then AI agents built in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and evaluation',
    h2: 'What is nested cross-validation, and why is a tuned model\'s own score too optimistic?',
    intro: 'Nested cross-validation puts the tuning inside an inner loop and scores the result in an outer loop on untouched data; without it, the reported score is the luckiest of many tries and overstates how well the model will do.',
    p1: 'Tuning a model on 199 Wimbledon Census areas, the winning setting scored an error of 6.14 points by the test that chose it, 6.37 under nested cross-validation and 7.04 on the rest of Merton.',
    p2: 'A learner who has seen those three numbers side by side asks of any AI-reported accuracy: was this the score used to pick the model, and where else was it tested?',
    closer: 'Wimbledon teenagers who can run that check are much harder to impress with a headline accuracy figure, and the skill comes from building the test in code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Raynes Park to Wimbledon Park, by video',
    intro: 'For a Wimbledon lesson you need a computer, a webcam and a connection that holds a video call.',
    cells: [
      { h3: 'Learner writes, tutor asks', p: 'The student does the typing and running. From the shared screen, the tutor keeps asking how they would prove the result.' },
      { h3: 'The trial sets the start', p: 'One free session shows what is already known; exam boards are written down.' },
      { h3: 'First session free', p: 'Wimbledon families pay nothing for it, and it ends with a course we recommend.' },
      { h3: 'Classes of one level', p: 'Five to ten learners, drawn from across Britain, all at the same point.' },
      { h3: 'Twice a week', p: 'Term time only.' },
      { h3: 'Same hour all year', p: 'British clock changes are handled by the tutor, not the family.' }
    ],
    spec: { title: 'Why we teach online', p: 'Even in a place the size of Wimbledon, five learners at one level who are free on the same evening are hard to gather in one room. A video class gathers them from anywhere.' }
  },

  fees: {
    h2: 'Wimbledon fees',
    intro: 'Wimbledon is charged at our international rate, which covers every country apart from India.',
    first: 'One complete lesson free, followed by advice.',
    group: 'Around eight live lessons each month in a small class.',
    private: 'Around eight live lessons each month one-to-one.',
    closer: 'Wimbledon invoices are in US dollars, with no pound price list, and the first one is raised only after the trial has agreed a course and an evening. Holidays, missed lessons and changing between class and private tuition are on the pricing page.'
  },

  reviewsH2: 'Merton parents and learners around Britain, in their Google reviews',

  book: {
    h2: 'Book a free Wimbledon lesson',
    intro: 'An age or year group and a favourite pastime are enough for us to plan a Wimbledon trial: a luck-or-skill game, a Scratch project made with an AI, first Python, or a model scored on real Census areas.',
    success: 'Thank you. Your Wimbledon request has reached us.'
  },

  faq: {
    h2: 'Wimbledon questions',
    intro: 'Tuning, honest scores, the 199 Census areas, vibe coding and how Wimbledon lessons run.',
    items: [
      { q: 'How many people live in Wimbledon Park ward?', a: 'The 2021 census counted 11,071 usual residents in Wimbledon Park ward in Merton; Wimbledon Town and Dundonald ward had 12,966.' },
      { q: 'Can Wimbledon learners take AI and programming classes online?', a: 'Yes. Learners aged 6 to 67 in Wimbledon, Raynes Park, South Wimbledon and the rest of Merton join by live video.' },
      { q: 'What does tuning a model mean?', a: 'Trying different settings, for example more or fewer trees or a faster or slower learning rate, and keeping the version that scores highest on held-back data.' },
      { q: 'Is nested cross-validation always necessary?', a: 'It matters most when the data is small and many settings are tried. In our Wimbledon test the gap was 6.14 against 6.37 points; with more searching on less data it widens.' },
      { q: 'What is the Wimbledon project?', a: 'Predicting the no-car share of 199 Wimbledon Census areas, choosing a model from forty settings, and comparing its own score with a nested score and a test on the rest of Merton.' },
      { q: 'Where does vibe coding fit?', a: 'In every course and at every age: the learner states what the program must do, an AI drafts it, and the learner tests it.' },
      { q: 'At what point do learners build AI agents?', a: 'After Python is independent, generally sixteen or older; Copilot Studio agents are one-to-one lessons.' },
      { q: 'Is there help for GCSE and A level?', a: 'In computer science and maths, yes. We teach for understanding and give no promise about grades.' },
      { q: 'What do Wimbledon lessons cost?', a: 'The trial is free; after it, USD 100 monthly for a class place or USD 150 monthly for private lessons.' },
      { q: 'Do lessons stop in the holidays?', a: 'They do, once we have the school dates.' }
    ]
  },

  next: {
    eyebrow: 'Read on',
    h2: 'More Merton and London pages',
    html: 'Each of these has a project of its own: <a class="cg-inline-link" href="/coding-classes-in-merton-london">Merton</a>, <a class="cg-inline-link" href="/coding-classes-in-wandsworth-london">Wandsworth</a>, <a class="cg-inline-link" href="/coding-classes-in-kingston-upon-thames-london">Kingston upon Thames</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-hayes-london">Hayes</a> (which average to trust). All other areas are reached from <a class="cg-inline-link" href="/best-coding-class-in-london">London</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wimbledon and Merton',
  footerPlaces: [
    { href: '/coding-classes-in-merton-london', label: 'Merton' },
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wim .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-wim .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-wim .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-wim .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wim .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-wim .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-wim .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wim .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-wim .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-wim .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'London Borough of Merton (E09000024). Census 2021 usual residents by 2022 ward (published per ward, not summed): Wimbledon Town & Dundonald 12,966; Wimbledon Park 11,071; Village 11,804; Hillside 8,242; Raynes Park 12,301. postcodes.io (Merton): Wimbledon, South Wimbledon, Merton Park (SW19); Raynes Park, Cottenham Park, Copse Hill (SW20).',
    localProject: 'Census 2021 TS045/TS017/TS044/TS006 for 199 OAs in five Wimbledon wards (23,671 households, 7,585 no car); 455 other Merton OAs as external check. Gradient boosting, 40 random settings, 5-fold CV, 10 repeats. MAE points: winner own CV 6.14; nested 6.37 (winner lower in 8 of 10); rest of Merton 7.04; median setting 7.17; worst 12.36; mean-only 11.6. Lesson family: nested cross-validation, selection optimism.',
    requiredMentions: [
      '12,966',
      '11,071',
      '11,804',
      '12,301',
      'Raynes Park',
      'South Wimbledon',
      'Cottenham Park',
      'Copse Hill',
      'nested cross-validation',
      'Merton Park'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS045, TS017, TS044, TS006 and usual residents by ward, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS output area to LSOA lookup and LSOA 2021 to ward (May 2022) best-fit lookup, ONS Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: Wimbledon and suburban areas in Merton.', url: 'https://api.postcodes.io/places?q=Raynes%20Park' }
    ],
    rejectedClaims: [
      'A population for "Wimbledon": no single official boundary; ward figures given separately, never summed.',
      'Tennis, the Common or windmill history: not read from a source; not claimed.',
      'Why car ownership differs between areas: no cause claimed; the data only tests the evaluation method.',
      'That these five wards define Wimbledon: stated as our chosen study area.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
