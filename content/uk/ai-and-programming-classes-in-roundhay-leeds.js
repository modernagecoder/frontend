'use strict';
// Roundhay, Leeds (cg- district page, UK cluster Phase 9, row 460). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: with only 16 tries, how should you search for a
// model's settings? (hyperparameter search: grid against random against Latin hypercube under a fixed budget).
// Data (read 30 September 2026): Nomis Census 2021 for all 2,607 output areas in Leeds (E08000035): TS045 car or van
// availability (341,381 households, 98,083 with none), TS017 one-person share, TS044 share in purpose-built flats, TS006
// density.
// Our run (scratchpad rdy/hps.py): gradient boosting (150 trees, depth 3) predicts each area's no-car share; 70% of areas
// for the search (3-fold cross-validated mean absolute error), 30% held out. Two settings searched: learning rate 0.001
// to 1 (log scale) and subsample 0.3 to 1.0. Budget 16 trials. Grid 4 x 4: best 8.587 (learning rate 0.1, subsample
// 0.77); grid rows by learning rate: 0.001 about 14.5; 0.01 9.58 to 9.77; 0.1 8.59 to 8.69; 1.0 11.63 to 27.24. Random
// search, 20 repeats of 16 trials: median 8.479, worst 8.526, ahead of the grid in 20 of 20. Latin hypercube, 20 repeats:
// median 8.474, worst 8.496, ahead in 20 of 20. Lowest seen in 656 evaluations 8.426 (learning rate 0.037, subsample
// 0.47). Held-out error: grid winner 8.874; overall winner 8.567. Always predicting the average: 15.62.
// Lesson family: hyperparameter search strategies under a budget. Screened: "hyperparameter", "Latin hypercube" 0 hits;
// "grid search" (Chesterfield, Hull) and "random search" (Shropshire) appear for other purposes. Claimed in claims.txt.
// Kirkcaldy owns gradient boosting itself; here boosting is only the model being tuned. Leeds city page = reservoir
// sampling.
// Place facts: Census 2021 TS001 (Nomis): Roundhay ward (E05011411) 23,809. postcodes.io places (Leeds, LS8) suburban
// areas: Roundhay, Oakwood, Gledhow.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ROUNDHAY', label: 'Roundhay, Leeds', blurb: 'AI and programming classes for Roundhay in Leeds, with a machine learning project on how to search for a model\'s settings when you can only afford 16 tries.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-roundhay-leeds',
  code: 'rdy',
  accent: '#5B6B12',
  accentRationale: 'Roundhay: a deep moss olive (hand-picked for hue distance from other Phase 9 pages, contrast above 5.5:1)',
  pageType: 'city',
  place: {
    name: 'Roundhay',
    eyebrow: 'Roundhay, Leeds, West Yorkshire',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Leeds' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-leeds', name: 'Leeds' }],
  nav: [
    { label: 'Leeds', href: '/best-coding-class-in-leeds' },
    { label: 'West Yorkshire', href: '/coding-classes-in-west-yorkshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Roundhay, Leeds',
  title: 'AI and Programming Classes in Roundhay, Leeds | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Roundhay, Oakwood and Gledhow learners in Leeds LS8, ages 6 to 67. The first lesson is free.',
  ogDescription: 'AI and programming classes for Roundhay, Leeds, with a project comparing grid, random and Latin hypercube search for tuning a model on a budget.',
  twitterDescription: 'Roundhay, Leeds: AI, programming, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Roundhay, Leeds',
    description: 'Online AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Roundhay, Oakwood and Gledhow, taught live with reasoning first.'
  },

  h1: 'AI and programming classes in Roundhay',
  capsuleQ: 'Which are the best AI and programming classes in Roundhay?',
  capsule: 'Roundhay ward in Leeds counted 23,809 usual residents at the 2021 census, and Roundhay, Oakwood and Gledhow are the suburban areas recorded in its LS8 postcode district. AI, programming, Python, vibe coding and maths lessons are open to anyone from six to 67 and run on live video with tutors in India, either privately or in a class of five to ten at a shared level. Sound reasoning is taught before any tool, so a learner can ask the awkward question when a model\'s score looks good. We give the first lesson free and close it with a course suggestion. The Roundhay project tunes a machine learning model on Census data for all 2,607 small areas of Leeds and asks how to spend a budget of 16 attempts: on a tidy grid, at random, or with a Latin hypercube. Continuing costs USD 100 a month in a class or USD 150 a month privately.',
  lead: 'Machine learning models have settings that are chosen before training starts, such as how fast to learn or how much data each step sees. They are called hyperparameters, and finding good values means training the model again and again, which costs time and money. So the real question is how to search when tries are limited. The obvious plan is a grid: a few values of each setting, every combination. The less obvious plan is to pick the combinations at random. This project runs both, plus a third design called a Latin hypercube, on a model that predicts car ownership across Leeds, with exactly 16 tries each.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Roundhay, Leeds?',

  picks: {
    eyebrow: 'Roundhay course picks',
    h2: 'Roundhay courses in reasoning, Python and AI',
    intro: 'Pick the row that matches the learner\'s age. All four courses open with a live lesson that costs nothing and needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think course: searching sensibly when you cannot try everything.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'A child explains a Scratch game, an AI builds it, the child finds the faults.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including tuning a model on Leeds Census data.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python through data science, model tuning and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Roundhay and LS8',
      h2: 'Roundhay, Oakwood and Gledhow',
      intro: 'The census figure for Roundhay ward, and the places recorded in LS8.',
      body: [
        { kind: 'table', caption: 'Roundhay in the 2021 census (ONS table TS001, via Nomis)', head: ['Area', 'Usual residents'], rows: [
          ['Roundhay ward', '23,809']
        ] },
        { kind: 'p', text: 'The count is for the council ward called Roundhay. Postcodes.io records Roundhay, Oakwood and Gledhow as suburban areas of Leeds in LS8, a postcode district that also reaches into the Chapel Allerton, Moortown, Gipton and Harehills and Killingbeck and Seacroft wards. Leeds schools follow England\'s national curriculum; tell us when the holidays are and we leave those weeks empty.' },
        { kind: 'callout', h3: 'Leeds, West Yorkshire and why thinking comes first', p: 'For the whole city see <a class="cg-inline-link" href="/best-coding-class-in-leeds">coding classes in Leeds</a>; for the county, <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">West Yorkshire</a>. Our reasons for teaching reasoning before tools are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Roundhay project',
      h2: 'Sixteen tries to tune a model: grid search, random search and a Latin hypercube',
      intro: 'One model, two settings, a fixed budget, and three ways to spend it.',
      body: [
        { kind: 'p', text: 'The learner downloads four Census 2021 tables from the Nomis API for the 2,607 output areas of Leeds, which hold 341,381 households, 98,083 of them with no car or van. A gradient boosting model predicts each area\'s no-car share from its population density, its share of one-person households and its share of flats. Two settings are searched: the learning rate, anywhere from 0.001 to 1, and the subsample, the fraction of areas each tree sees, from 0.3 to 1. Every candidate is scored by cross-validation on 70% of the areas; the other 30% are kept back for a final check. Guessing the average for every area is wrong by 15.62 points.' },
        { kind: 'table', caption: 'Lowest cross-validated error found with 16 tries, our Python run on Census 2021 data for Leeds', head: ['Search method', 'Typical result', 'Worst of 20 runs', 'Ahead of the grid'], rows: [
          ['Grid, 4 learning rates by 4 subsamples', '8.587', 'One run only', 'Not applicable'],
          ['Random search', '8.479', '8.526', '20 of 20 runs'],
          ['Latin hypercube', '8.474', '8.496', '20 of 20 runs']
        ] },
        { kind: 'p', text: 'The grid reveals why it loses. Reading across its rows, the error is about 14.5 at a learning rate of 0.001, about 9.6 at 0.01, about 8.6 at 0.1, and between 11.63 and 27.24 at 1.0. The learning rate decides almost everything, and the subsample hardly matters except when the rate is far too high. Yet the grid spends its 16 tries on only four different learning rates. Random search tries 16 different ones, so it lands closer to the sweet spot, near 0.04, every time. A Latin hypercube goes one step further and guarantees the 16 values of each setting are evenly spread, which made its worst run (8.496) better than random search\'s worst (8.526).' },
        { kind: 'p', text: 'The gain is real but modest, a little over one per cent, and it carries to the held-back areas: the grid\'s winner scores 8.874 there, and the overall winner from all our searches scores 8.567. Tuning polishes a model; it does not rescue a poor one. The bigger lesson is about where to spend effort: when one setting matters far more than the others, a grid wastes most of its budget.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Hunt for treasure on a squared map with 16 guesses: a neat pattern, or scattered picks?' },
          { h3: 'Ages 11 to 15', p: 'Train a small model in Python with three different learning rates and compare the errors.' },
          { h3: 'Ages 15 and up', p: 'Run grid, random and Latin hypercube searches with equal budgets and explain which wins and why.' }
        ] },
        { kind: 'callout', h3: 'Census data, our search', p: 'Household, car, housing and density counts are Office for National Statistics Census 2021 data from Nomis, under the Open Government Licence. The model, the three searches and every error figure are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Tuning and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A limited budget should go where it changes the answer.',
      body: [
        { kind: 'table', caption: 'From the Roundhay search to working with AI', head: ['In the tuning project', 'When AI tunes or tests for you'], rows: [
          ['The grid tried only four learning rates', 'Tidy plans can waste most of their effort'],
          ['Random search won 20 times out of 20', 'Varying everything at once explores more'],
          ['Latin hypercube had the safest worst case', 'Designed spread beats pure chance'],
          ['The gain was about one per cent', 'Report how much, not just which'],
          ['30% of areas were held back', 'Confirm on data the search never saw']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to "tune this model" and it will often write a grid search, because grids are easy to explain. In vibe coding, a learner states the goal and an AI produces the code; Roundhay learners go on to ask what the budget is, which settings matter, and whether the winner was checked on unseen data. AI agents that run experiments unattended spend real compute on the same choice, so the search plan belongs in their instructions. We hold agent building until a learner is fluent in Python, generally from the later teens, and Copilot Studio agents are taught in one-to-one lessons only. More is on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'This page is independent of the Office for National Statistics, Nomis and postcodes.io, whose open data it uses. The analysis is ours, and so are any mistakes in it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From treasure maps to tuned models',
    intro: 'A year group tells us roughly where to begin; the free lesson tells us exactly.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Searching, guessing well and learning from each try.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps made with AI help and tested by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Models, settings and fair testing beside GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Machine learning and agents', p: 'Training, tuning and AI agents, step by step in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and tuning',
    h2: 'What is hyperparameter tuning, and is grid search or random search better?',
    intro: 'Hyperparameter tuning is the search for the settings that make a model perform well, and with a limited number of tries random search usually beats grid search, because it tests many more distinct values of whichever setting turns out to matter.',
    p1: 'Tuning a model on 2,607 Leeds Census areas with 16 tries, a 4 by 4 grid reached an error of 8.587, while random search reached a median 8.479 and a Latin hypercube 8.474, both ahead of the grid in 20 of 20 runs.',
    p2: 'Learners who have run the three searches ask of any AI-tuned model: how many settings were tried, how were they chosen, and was the winner checked on fresh data?',
    closer: 'A Roundhay teenager who knows where a search budget is wasted can direct an AI\'s experiments instead of just watching them, and that starts with writing the code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'How lessons reach Roundhay',
    intro: 'Bring a computer with a webcam and a connection steady enough for video; that is all.',
    cells: [
      { h3: 'Hands on', p: 'Students do the typing and the running. The tutor follows over screen share and asks them to predict each result first.' },
      { h3: 'The trial sets the start', p: 'In the free session we see what the learner already knows and note any exam board.' },
      { h3: 'First lesson free', p: 'Nothing to pay for the opening lesson, which ends with our course advice.' },
      { h3: 'Classes of five to ten', p: 'Grouped by stage, with classmates from all over the UK.' },
      { h3: 'Two a week', p: 'In term time.' },
      { h3: 'Your time stays fixed', p: 'When British clocks change, the tutor adjusts, not you.' }
    ],
    spec: { title: 'Why online', p: 'In any one neighbourhood it is rare to find five learners at one level who are free together. Video lets the class form anyway.' }
  },

  fees: {
    h2: 'Roundhay fees',
    intro: 'Roundhay learners are on our international rate, the one for all countries other than India.',
    first: 'One complete free lesson, then a recommendation.',
    group: 'Roughly eight live lessons a month in a small class.',
    private: 'Roughly eight live one-to-one lessons a month.',
    closer: 'Our fees are in US dollars; there is no sterling tariff. Billing starts only when the trial has agreed a course and a weekly slot, and the pricing page explains holidays, absences and changing format.'
  },

  reviewsH2: 'Google reviews from Leeds parents and learners elsewhere in the UK',

  book: {
    h2: 'Book a free Roundhay lesson',
    intro: 'Give us an age or school year and something the learner likes. We might open with a treasure-map search game, a Scratch project built with an AI, first Python, or tuning a tiny model.',
    success: 'Thank you. Your Roundhay request is with us.'
  },

  faq: {
    h2: 'Roundhay questions',
    intro: 'Model tuning, the Leeds data project, vibe coding and lesson arrangements.',
    items: [
      { q: 'How many people live in Roundhay?', a: 'Roundhay ward had 23,809 usual residents at the 2021 census.' },
      { q: 'Are AI and programming classes available online in Roundhay?', a: 'Yes. Lessons are live video calls for ages 6 to 67 in Roundhay, Oakwood, Gledhow and across Leeds.' },
      { q: 'What is a hyperparameter?', a: 'A setting chosen before a model is trained, such as the learning rate or the number of trees, as opposed to the values the model learns from data.' },
      { q: 'What is a Latin hypercube?', a: 'A way of choosing trial points so that each setting\'s range is divided into equal slices and every slice is used exactly once, giving an even spread with few trials.' },
      { q: 'What does the Roundhay project involve?', a: 'Tuning a gradient boosting model on Census data for 2,607 Leeds areas with 16 tries, comparing a grid, random search and a Latin hypercube, then checking the winner on held-back areas.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, to all ages: learners describe the program, an AI drafts it, and they test and fix it.' },
      { q: 'When are learners ready to build AI agents?', a: 'When they are fluent in Python, generally from the later teens; Copilot Studio agents are one-to-one lessons only.' },
      { q: 'Do you support GCSE and A level?', a: 'Yes, in computer science and maths, with understanding as the goal and no promised grades.' },
      { q: 'What are the fees?', a: 'The first lesson is free, then USD 100 a month in a class or USD 150 a month privately.' },
      { q: 'Do lessons pause for school holidays?', a: 'Yes; send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Leeds pages',
    html: 'Different projects on each page: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-headingley-leeds">Headingley</a> (a generator over 1.7 million postcodes), <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-horsforth-leeds">Horsforth</a>, <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-harrogate">Harrogate</a>. For other areas, begin at the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Roundhay and Leeds',
  footerPlaces: [
    { href: '/best-coding-class-in-leeds', label: 'Leeds' },
    { href: '/coding-classes-in-west-yorkshire', label: 'West Yorkshire' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-rdy .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-rdy .cg-hero h1 { font-weight: 760; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-rdy .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-rdy .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rdy .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.02em; }
.cg-root.cg-rdy .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-rdy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rdy .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-rdy .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-rdy .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Leeds (E08000035). Census 2021 TS001: Roundhay ward (E05011411) 23,809. postcodes.io places (Leeds, LS8): Roundhay, Oakwood, Gledhow (suburban areas); LS8 wards also Chapel Allerton, Moortown, Gipton & Harehills, Killingbeck & Seacroft, Little London & Woodhouse. England national curriculum, GCSE and A level.',
    localProject: 'Census 2021 TS045/TS017/TS044/TS006 for 2,607 Leeds OAs (341,381 households, 98,083 no car). Gradient boosting (150 trees, depth 3) predicts no-car share; 3-fold CV MAE on 70%, 30% held out; mean-only 15.62. Budget 16: grid 4x4 best 8.587 (lr 0.1, subsample 0.77; rows 14.5 / 9.6 / 8.6 / 11.63-27.24); random median 8.479, worst 8.526, 20/20 ahead; Latin hypercube median 8.474, worst 8.496, 20/20. Overall lowest 8.426 (lr 0.037, sub 0.47). Hold-out: grid winner 8.874, overall winner 8.567. Lesson family: hyperparameter search under a budget.',
    requiredMentions: [
      '23,809',
      '2,607',
      '341,381',
      '98,083',
      'Oakwood',
      'Gledhow',
      'hyperparameter',
      'Latin hypercube',
      'random search'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS045, TS017, TS044, TS006 and TS001 via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Nomis API dataset NM_2063_1, Census 2021 TS045 car or van availability, Leeds output areas.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2063_1.def.sdmx.json' },
      { claim: 'postcodes.io places and outcode LS8: suburban areas and wards in Leeds.', url: 'https://api.postcodes.io/outcodes/LS8' }
    ],
    rejectedClaims: [
      'Roundhay Park or any landmark, size or history claim: not read from a source; not made.',
      'That random search always beats a grid: stated for limited budgets where one setting dominates, as measured here.',
      'Why areas differ in car ownership: no cause claimed; the data only feeds the tuning exercise.',
      'A Roundhay-only result: the model uses all Leeds areas, and the page says so.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
