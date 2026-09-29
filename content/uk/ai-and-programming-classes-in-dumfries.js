'use strict';
// Dumfries (cg- town page, UK cluster Phase 8, towns band A, row 420). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: why do AI models go out of date? (concept drift: a
// model trained on an older period, kept frozen, against one retrained on a rolling window, measured year by year).
// Data (read 29 September 2026): Met Office historic station data, Eskdalemuir (323400E 602600N, 242 m amsl, in Dumfries and
// Galloway), file eskdalemuirdata.txt: monthly mean daily maximum temperature (tmax). 2026 months are provisional and not
// used; no tmax month is missing from 1961 to 2025.
// Our run (scratchpad dfs/drift.py): "model" = the average tmax for each calendar month over a training window. Frozen:
// 1961 to 1990, never updated. Rolling: retrained each year on the previous 30 years. Test years 1991 to 2025. Bias
// (actual minus predicted, degrees C) / mean absolute error / share of months warmer than predicted: 1991-2000 frozen 0.20
// / 1.18 / 56.7%, rolling 0.16 / 1.17 / 55.0%; 2001-2010 frozen 0.79 / 1.24 / 74.2%, rolling 0.58 / 1.15 / 65.0%; 2011-2020
// frozen 0.82 / 1.24 / 72.5%, rolling 0.36 / 1.09 / 59.2%; 2021-2025 frozen 1.57 / 1.69 / 90.0%, rolling 0.86 / 1.19 /
// 73.3%. Whole 1991-2025 bias: frozen 0.74, rolling 0.44. Annual average of monthly tmax: 1961-1990 10.77, 1996-2025 11.64.
// Lesson family: concept drift, model monitoring and retraining windows. Screened: "concept drift", "data drift", "model
// drift", "Eskdalemuir" 0 hits. Barnsley owns distribution shift between places (KL divergence); forecasting skill pages
// (Dundee, Berkshire, Newham) own forecast methods; this page is about a model ageing.
// Place facts: NRS mid-2020 localities: Dumfries 33,470 (largest in Dumfries and Galloway; Stranraer 10,110 next, per the
// Dumfries and Galloway page). postcodes.io (Dumfries and Galloway, DG1/DG2) suburban areas: Georgetown, Kingholm Quay,
// Larchfield, Lincluden, Lochside, Marchmount, Maxwelltown, Noblehill, Summerville, Troqueer; villages Cargenbridge,
// Heathhall, Locharbriggs.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'DUMFRIES', label: 'Dumfries', blurb: 'AI and programming classes for Dumfries, with a machine learning project on why models trained on the past slowly go wrong, using a century of Eskdalemuir weather records.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-dumfries',
  code: 'dfs',
  accent: '#30636B',
  accentRationale: 'Dumfries: a deep sea teal (5.42:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Dumfries',
    eyebrow: 'Dumfries, Dumfries and Galloway, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Dumfries and Galloway' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Dumfries and Galloway', href: '/coding-classes-in-dumfries-and-galloway' },
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Dumfries, Scotland',
  title: 'AI and Programming Classes in Dumfries | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Dumfries, Lincluden, Troqueer and Locharbriggs learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'AI and programming classes for Dumfries, with a project that shows a model trained on 1960s to 1980s weather slowly going wrong, and how retraining helps.',
  twitterDescription: 'Dumfries AI, programming, Python and vibe coding classes online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Dumfries',
    description: 'Online AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Dumfries and Galloway, taught live with reasoning first.'
  },

  h1: 'AI and programming classes in Dumfries',
  capsuleQ: 'Which are the best AI and programming classes in Dumfries?',
  capsule: 'Dumfries is by far the largest locality in Dumfries and Galloway, with 33,470 people in the mid-2020 estimate from National Records of Scotland. Lincluden, Troqueer, Maxwelltown, Georgetown, Summerville and Noblehill are recorded suburbs in the DG1 and DG2 districts, with Locharbriggs and Heathhall listed as villages. Anyone aged six to 67 can learn AI, programming, Python, vibe coding and maths with an India-based tutor over video, alone or in a group of five to ten at the same stage. Reasoning before tools means learners can tell when a model has quietly gone stale. Your first session is on the house, finishing with the course we would pick. The Dumfries project builds a simple forecasting model from Met Office records at Eskdalemuir, freezes it on 1961 to 1990, and measures year by year how it drifts out of date. After the trial, monthly fees are USD 100 in a group or USD 150 for private lessons.',
  lead: 'Every machine learning model is trained on the past and used in the future. If the world it describes changes, the model slowly becomes wrong, a problem called concept drift. It is why AI assistants have a knowledge cutoff, why fraud and spam filters are retrained regularly, and why teams monitor models long after launch. Weather records make drift easy to see. The Met Office station at Eskdalemuir, in Dumfries and Galloway, has published monthly temperatures for over a century. A model that learned what each month was like in 1961 to 1990 can be tested on every month since, and compared with a model that keeps relearning.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Dumfries?',

  picks: {
    eyebrow: 'Dumfries course picks',
    h2: 'Dumfries courses in reasoning, Python and AI',
    intro: 'Match the learner\'s age to a course below; whichever you choose, the opening live lesson is free and booking needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: using past patterns to predict, and noticing when the pattern changes.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with AI help and checked properly.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including the drift experiment on Eskdalemuir records.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data, model monitoring, machine learning and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Dumfries and Galloway',
      h2: 'Dumfries, Lincluden, Troqueer and Maxwelltown',
      intro: 'The NRS estimate for Dumfries, and places recorded in DG1 and DG2.',
      body: [
        { kind: 'table', caption: 'Dumfries in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['Dumfries locality, mid-2020', '33,470']
        ] },
        { kind: 'p', text: 'Postcodes.io records Georgetown, Kingholm Quay, Larchfield, Lincluden, Lochside, Marchmount, Maxwelltown, Noblehill, Summerville and Troqueer as suburban areas of Dumfries and Galloway in DG1 and DG2, and Cargenbridge, Heathhall and Locharbriggs as villages. Schools in the region teach the Curriculum for Excellence; our lessons use Scottish year groups and support SQA Computing Science and Maths through to Advanced Higher. Pass on your holiday dates and we will leave those weeks free.' },
        { kind: 'callout', h3: 'Dumfries and Galloway and SQA support', p: 'See <a class="cg-inline-link" href="/coding-classes-in-dumfries-and-galloway">coding classes in Dumfries and Galloway</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> and <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths tuition</a>. Why reasoning comes before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Dumfries project',
      h2: 'Concept drift: a frozen model against a retrained one on Eskdalemuir temperatures',
      intro: 'Train on the past, test on every year since, and watch the error grow.',
      body: [
        { kind: 'p', text: 'Eskdalemuir\'s historic Met Office file supplies the data: for each month, the average of the daily maximum temperatures. The model is deliberately simple: to predict a month, use the average of that calendar month over a training window. The frozen model is trained once, on 1961 to 1990, and never updated. The rolling model is retrained every year on the thirty years just before. Both predict every month from 1991 to 2025, and the learner measures the bias, how far reality sits above or below the prediction on average, and how often the actual month came out warmer.' },
        { kind: 'table', caption: 'Monthly maximum temperature at Eskdalemuir, prediction errors by decade, our Python run on Met Office data', head: ['Years predicted', 'Frozen model bias', 'Months warmer than frozen', 'Rolling model bias', 'Months warmer than rolling'], rows: [
          ['1991 to 2000', '+0.20 C', '56.7%', '+0.16 C', '55.0%'],
          ['2001 to 2010', '+0.79 C', '74.2%', '+0.58 C', '65.0%'],
          ['2011 to 2020', '+0.82 C', '72.5%', '+0.36 C', '59.2%'],
          ['2021 to 2025', '+1.57 C', '90.0%', '+0.86 C', '73.3%']
        ] },
        { kind: 'p', text: 'In its first decade the frozen model is nearly unbiased. By 2021 to 2025 it predicts 1.57 C too cold on average, and nine months in ten come out warmer than it expects; its typical miss has grown from 1.18 C to 1.69 C. The rolling model drifts far less, because it keeps absorbing recent years, but it still lags: in 2021 to 2025 it is 0.86 C too cold and three months in four beat it. Across the stations\'s record, the average monthly maximum was 10.77 C for 1961 to 1990 and 11.64 C for 1996 to 2025. A model is a snapshot of the period it learned from.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Predict tomorrow from what usually happens, then keep a tally of when the usual guess was wrong.' },
          { h3: 'S1 to S3', p: 'Read the Eskdalemuir file in Python and average each month over 1961 to 1990.' },
          { h3: 'S4 and up', p: 'Build frozen and rolling models, track bias by decade and design a retraining schedule.' }
        ] },
        { kind: 'callout', h3: 'Met Office records, our models', p: 'Temperatures are from the Met Office historic station data for Eskdalemuir, published under the Open Government Licence; 2026 months are marked provisional and are not used. The models, windows and errors are our own work and are not a climate assessment.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Drift and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Yesterday\'s accurate model is not guaranteed to be today\'s.',
      body: [
        { kind: 'table', caption: 'From the Eskdalemuir drift test to working with AI', head: ['In the drift project', 'When you rely on an AI model'], rows: [
          ['Frozen model bias grew to +1.57 C', 'Models age as the world changes'],
          ['Nine months in ten beat it by 2021 to 2025', 'Errors in one direction are a warning sign'],
          ['Rolling retraining halved the bias', 'Refreshing training data helps'],
          ['Even the rolling model lagged', 'Retraining on the past always trails the present'],
          ['Error was tracked decade by decade', 'Keep monitoring after launch']
        ] },
        { kind: 'p', text: 'Chat assistants are trained up to a knowledge cutoff, so on recent events they can be confidently out of date in exactly this way. With vibe coding, the learner explains the goal and an AI drafts the code; in Dumfries lessons we then ask whether the libraries and facts behind that code are up to date, and test on the most recent data available. AI agents that act on information need the same habit: know when their knowledge was last refreshed. Agents come into the course once a learner\'s Python can stand alone, mostly for senior pupils and adults, and Copilot Studio is covered only in private lessons. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents route for UK learners</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'The Met Office, National Records of Scotland and postcodes.io publish the open data used here and have no connection to us; the models, and any errors, belong to Modern Age Coders.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From weather tallies to model monitoring',
    intro: 'The school year points to a start; the free lesson confirms it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Patterns, predictions and noticing when things change.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and machine learning', p: 'Time series, models and monitoring alongside SQA Maths and Computing Science.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Machine learning in practice', p: 'Deployment, drift, retraining and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and drift',
    h2: 'Why do AI models go out of date, and what is concept drift?',
    intro: 'Concept drift is when the patterns a model learned stop matching the world it is used in, so its predictions become steadily and systematically wrong unless it is monitored and retrained.',
    p1: 'A model that learned Eskdalemuir\'s monthly temperatures from 1961 to 1990 was nearly unbiased in the 1990s but predicted 1.57 C too cold by 2021 to 2025, when 90.0% of months beat it; retraining every year cut that bias to 0.86 C.',
    p2: 'Learners who have watched a model age ask of any AI tool: when was it last trained, and has the world moved since?',
    closer: 'Knowing that models go stale keeps Dumfries teenagers alert to out-of-date AI answers, and learning to code is how that alertness becomes second nature in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Lessons across Dumfries and Galloway',
    intro: 'Equipment: one computer with a webcam and broadband that can manage video.',
    cells: [
      { h3: 'Learner at the keyboard', p: 'Students write, prompt and run every step while the tutor follows the shared screen and asks what the result means.' },
      { h3: 'Starting point from the trial', p: 'The free session shows what to teach first; any SQA course is recorded.' },
      { h3: 'No-cost first lesson', p: 'Lesson one is free and ends with our recommendation.' },
      { h3: 'Small, matched classes', p: 'Between five and ten learners, grouped by what they can do rather than where they live.' },
      { h3: 'Two per week', p: 'Lessons pause during school holidays.' },
      { h3: 'Steady slot', p: 'Our tutors work round UK clock changes, so your lesson hour stays fixed.' }
    ],
    spec: { title: 'Why online', p: 'Across a region as wide as Dumfries and Galloway, five learners at one level on the same evening are rarely near each other. Video solves it.' }
  },

  fees: {
    h2: 'Dumfries fees',
    intro: 'Learners in Dumfries are on our international rate card, the one for every country except India.',
    first: 'A full free lesson, then a course suggestion.',
    group: 'Roughly eight live group lessons a month.',
    private: 'Roughly eight live one-to-one lessons a month.',
    closer: 'No pound prices here: we bill in US dollars, starting after the trial has fixed a course and a slot. Breaks, missed sessions and format swaps are dealt with on the pricing page.'
  },

  reviewsH2: 'On Google: Dumfries and Galloway families and learners around Britain',

  book: {
    h2: 'Book a free Dumfries lesson',
    intro: 'We only need an age or year group and a hobby. The trial might be a prediction-tally game, a Scratch game built with an AI, early Python, or charting a century of real temperatures.',
    success: 'Thank you. Your Dumfries request is in.'
  },

  faq: {
    h2: 'Dumfries questions',
    intro: 'Ageing models, the weather records, vibe coding and how lessons are organised.',
    items: [
      { q: 'What is the population of Dumfries?', a: 'National Records of Scotland estimated 33,470 people in the Dumfries locality in mid-2020.' },
      { q: 'Do you teach AI and programming to Dumfries learners?', a: 'You can. Because every lesson is on video, ages 6 to 67 anywhere from Stranraer to Annan can take part.' },
      { q: 'What is a knowledge cutoff in AI?', a: 'The date after which a model has seen no training data. Anything that changed later is invisible to it unless it is given new information.' },
      { q: 'How do you fix concept drift?', a: 'Monitor errors over time, and retrain on recent data when they drift. In our Eskdalemuir test, yearly retraining cut the 2021 to 2025 bias from 1.57 C to 0.86 C, though it still lagged.' },
      { q: 'What does the Dumfries project involve?', a: 'Building simple temperature models from Met Office Eskdalemuir records, freezing one on 1961 to 1990, retraining another every year, and tracking both to 2025.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, for all ages; learners plan the program and test what the AI writes.' },
      { q: 'When do learners start building AI agents?', a: 'When Python stops needing support, which for most is the senior phase or later; Copilot Studio is one-to-one.' },
      { q: 'Do you help with SQA exams?', a: 'Yes, Computing Science and Maths from National 5 to Advanced Higher, taught for understanding without promised grades.' },
      { q: 'What do lessons cost?', a: 'The trial is free. Ongoing, a class place is USD 100 monthly and a private tutor USD 150 monthly.' },
      { q: 'Do lessons stop in the holidays?', a: 'They pause for the school holidays; send us the dates and we plan round them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Southern Scotland and the border',
    html: 'Each with a different experiment: <a class="cg-inline-link" href="/coding-classes-in-dumfries-and-galloway">Dumfries and Galloway</a> (counting stars under a dark sky), <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-ayr">Ayr</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-kilmarnock">Kilmarnock</a> and <a class="cg-inline-link" href="/coding-classes-in-cumbria">Cumbria</a> over the border. Everything else starts at the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dumfries and Galloway',
  footerPlaces: [
    { href: '/coding-classes-in-dumfries-and-galloway', label: 'Dumfries and Galloway' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-dfs .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-dfs .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-dfs .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-dfs .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dfs .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-dfs .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; font-style: italic; }
.cg-root.cg-dfs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dfs .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-dfs .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-dfs .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Dumfries and Galloway (S12000006). Scotland: Curriculum for Excellence, SQA National 5 to Advanced Higher. NRS mid-2020 settlement and locality estimates: Dumfries 33,470 (Stranraer 10,110 next). postcodes.io (Dumfries and Galloway, DG1/DG2): Georgetown, Kingholm Quay, Larchfield, Lincluden, Lochside, Marchmount, Maxwelltown, Noblehill, Summerville, Troqueer (suburban areas); Cargenbridge, Heathhall, Locharbriggs (villages).',
    localProject: 'Met Office historic station data, Eskdalemuir (242 m amsl), monthly tmax, 1961 to 2025 complete (2026 provisional excluded). Frozen 1961-1990 climatology vs rolling previous-30-year climatology, tested 1991-2025. Bias / months warmer: frozen 0.20/56.7, 0.79/74.2, 0.82/72.5, 1.57/90.0; rolling 0.16/55.0, 0.58/65.0, 0.36/59.2, 0.86/73.3 (decades 1991-2000 to 2021-2025). Frozen MAE 1.18 to 1.69. Annual mean tmax 10.77 (1961-1990) vs 11.64 (1996-2025). Lesson family: concept drift, monitoring, retraining.',
    requiredMentions: [
      '33,470',
      'Eskdalemuir',
      'Lincluden',
      'Troqueer',
      'Maxwelltown',
      'Georgetown',
      'Noblehill',
      'concept drift',
      'knowledge cutoff'
    ],
    sources: [
      { claim: 'Met Office historic station data, Eskdalemuir, monthly temperatures (Open Government Licence).', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/eskdalemuirdata.txt' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas and villages in Dumfries and Galloway.', url: 'https://api.postcodes.io/places?q=Lincluden' }
    ],
    rejectedClaims: [
      'That Eskdalemuir is near Dumfries or represents Dumfries weather: not claimed; described only as a station in Dumfries and Galloway.',
      'Causes of the warming or a climate projection: not claimed; the page measures model error only.',
      'Burns, river or town history: not read from a source; not claimed.',
      'Largest locality in Dumfries and Galloway: per NRS mid-2020 figures quoted on the Dumfries and Galloway page (Dumfries 33,470, Stranraer 10,110).',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
