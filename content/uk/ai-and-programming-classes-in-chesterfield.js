'use strict';
// Chesterfield (cg- town page, UK cluster Phase 8, towns band A, row 360). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can one number explain two old
// measurements, and what does that teach about how machine learning fits models? Anchor (read raw 28 September 2026):
// Project Gutenberg 46229, Samuel Smiles, "The Life of George Stephenson and of his Son Robert Stephenson": "a coal-mining
// adventure at Chesterfield"; "Tapton House was included in the lease of one of the collieries ... he took up his residence
// there, and it continued his home until the close of his life"; "Tapton House is a large, roomy brick mansion ... about a
// mile to the northeast of the town of Chesterfield"; "looking over the town of Chesterfield, with its church and crooked
// spire"; Stephenson "had long before ascertained, by careful experiments at Killingworth, that the engine expends half its
// power in overcoming a rising gradient of 1 in 260, which is about 20 feet in the mile; and that when the gradient is so
// steep as 1 in 100, not less than three fourths of its power is sacrificed in ascending the acclivity."
// Our model (scratchpad chf/): share of power used on the climb = G / (G + r), G = rise per unit length, r = the level-track
// resistance as a fraction of weight (one unknown). From the first sentence alone r = 1/260: predicts 0.722 at 1 in 100
// (Smiles: at least 0.75). From the second alone r = 1/300: predicts 0.536 at 1 in 260 (Smiles: half). Least squares over
// both (grid search): r = 0.003645, about 1 in 274; predictions 0.513 and 0.733 (loss 0.00047). Unit check: 5,280 / 260 =
// 20.3 feet per mile ("about 20"); 1 in 100 = 52.8 feet per mile.
// Lesson family: fitting a one-parameter model with a loss function, conflicting data points, "not less than" as an
// inequality, unit check. Screened: model fitting, loss function, rolling resistance, curve fit, one parameter 0 hits
// (Chester fitted an exponential recession by gradient descent; St Asaph used terrain gradients).
// Place facts: Nomis Census 2021 TS007A, Chesterfield E07000034: total 103,569; 15 to 19 4,917 (4.7%; England 5.7%); 20 to
// 24 5,312 (5.1%; 6.0%); 55 to 59 7,929 (7.7%; 6.7%); 60 to 64 6,912 (6.7%; 5.8%); 65 to 69 6,046 (5.8%; 4.9%); 75 to 79
// 4,481 (4.3%; 3.6%). ONS 2021 BUAs: Chesterfield 76,420 (our OA sum inside the borough 75,167); Staveley 15,145; Brimington
// 11,075 (8,932 inside the borough).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CHESTERFIELD', label: 'Chesterfield', blurb: 'AI and programming classes for Chesterfield, with a project that fits a one-number model to George Stephenson\'s gradient experiments, the way machine learning fits data.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-chesterfield',
  code: 'chf',
  accent: '#4C2E13',
  accentRationale: 'Chesterfield: a timber-spire brown (9.91:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Chesterfield',
    eyebrow: 'Chesterfield, Derbyshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Derbyshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-midlands', name: 'East Midlands' }],
  nav: [
    { label: 'Derbyshire', href: '/coding-classes-in-derbyshire' },
    { label: 'East Midlands', href: '/coding-and-ai-classes-in-east-midlands' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Chesterfield, England',
  title: 'AI and Programming Classes in Chesterfield | Coding for 6 to 67',
  description: 'Online AI, programming, Python and vibe coding classes for Chesterfield, Staveley and Brimington learners aged 6 to 67, solo or in small groups. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Chesterfield, and a Python project that fits a model to George Stephenson\'s gradient experiments like machine learning does.',
  twitterDescription: 'Chesterfield AI, programming and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Chesterfield',
    description: 'Online AI, programming, Python, vibe coding and mathematics for children, teenagers and adults in Chesterfield, taught live with thinking skills first.'
  },

  h1: 'AI and programming classes in Chesterfield',
  capsuleQ: 'Which are the best AI and programming classes in Chesterfield?',
  capsule: 'Chesterfield borough had 103,569 residents at the 2021 census; the ONS gives 76,420 for the Chesterfield built-up area and 15,145 for Staveley, with part of Brimington also inside the borough. People from 55 to 79 are more common here than across England, and those aged 15 to 24 less so. From the town centre to Staveley, learners from 6 to 67 can take AI, programming, Python, vibe coding and maths in live online lessons with our tutors in India, one-to-one or in a small same-level group of five to ten. We teach thinking before tools, so learners who let AI write code still know whether it is right. The first lesson is free, and continuing costs USD 100 a month for a group or USD 150 a month for private lessons.',
  lead: 'George Stephenson, the railway pioneer, spent his last years at Tapton House, which his biographer Samuel Smiles describes as "about a mile to the northeast of the town of Chesterfield", with views over "its church and crooked spire". Smiles also records two numbers from Stephenson\'s early experiments: a locomotive "expends half its power in overcoming a rising gradient of 1 in 260", and on a gradient of 1 in 100 "not less than three fourths of its power is sacrificed". Can one simple model explain both statements? Finding out is a small version of what every machine learning system does: choose a model, measure how wrong it is, and adjust until the error is as small as possible.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a Chesterfield learner.',

  picks: {
    eyebrow: 'Chesterfield course picks',
    h2: 'Thinking, vibe coding and AI courses for Chesterfield',
    intro: 'Go by age and interest; each course opens with a free live lesson, and we never ask for a card to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: logic, patterns and checking your own answers.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Train and track games in Scratch, then small apps made with AI and tested.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and AI projects for teenagers, including the gradient model.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How modern AI models and AI agents are built and evaluated, in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Chesterfield borough',
      h2: 'More people in later working life',
      intro: 'Six census age bands for Chesterfield from Nomis, with England\'s share alongside.',
      body: [
        { kind: 'table', caption: 'Chesterfield borough and England, six age bands (TS007A, 2021)', head: ['Ages', 'Chesterfield residents', 'Chesterfield %', 'England %'], rows: [
          ['15 to 19', '4,917', '4.7%', '5.7%'],
          ['20 to 24', '5,312', '5.1%', '6.0%'],
          ['55 to 59', '7,929', '7.7%', '6.7%'],
          ['60 to 64', '6,912', '6.7%', '5.8%'],
          ['65 to 69', '6,046', '5.8%', '4.9%'],
          ['75 to 79', '4,481', '4.3%', '3.6%']
        ] },
        { kind: 'p', text: 'The late fifties stand a full point above England and the late teens a full point below. Besides the town itself, the ONS lists Staveley as a separate built-up area, and Brimington, 11,075 people in all, lies mostly within the borough. Derbyshire schools follow the national curriculum for England; tell us the half-term dates and lessons will leave them free.' },
        { kind: 'callout', h3: 'County, region and our approach', p: 'The county is on <a class="cg-inline-link" href="/coding-classes-in-derbyshire">Derbyshire</a>, the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">East Midlands</a>. Why we put thinking ahead of AI tools is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Chesterfield project',
      h2: 'Fitting one number to Stephenson\'s experiments',
      intro: 'Turn two sentences into data, build a model with one unknown, and measure how wrong it is.',
      body: [
        { kind: 'p', text: 'First the learner checks Smiles\'s units. A gradient of 1 in 260 means rising one foot for every 260 feet travelled, and a mile is 5,280 feet, so that is 5,280 divided by 260, or 20.3 feet in the mile: "about 20", as Smiles says. Then comes the model. On level track an engine only has to overcome friction, which the learner writes as a fraction r of the train\'s weight. On a slope it also has to lift the train, which costs the gradient G. So the share of power spent on the climb is G divided by G plus r. There is one unknown, r, and two sentences to learn it from.' },
        { kind: 'table', caption: 'Share of an engine\'s power spent climbing, Smiles\'s statements against one-number models, our Python run, 28 September 2026', head: ['Model', 'At 1 in 260 (Smiles: half)', 'At 1 in 100 (Smiles: at least three quarters)'], rows: [
          ['r learned from the first sentence (1 in 260)', '0.500', '0.722'],
          ['r learned from the second sentence (1 in 300)', '0.536', '0.750'],
          ['r fitted to both by least squares (about 1 in 274)', '0.513', '0.733'],
          ['Unit check', '20.3 feet per mile', '52.8 feet per mile']
        ] },
        { kind: 'p', text: 'Using only the first sentence, r comes out at exactly 1 in 260, but then the model predicts that a 1 in 100 climb uses 72.2 percent of the power, less than the "not less than three fourths" Smiles reports. Using only the second sentence gives r of 1 in 300, and then the model says the gentler slope takes 53.6 percent, not half. The two statements cannot both be exactly true in this model. So the learner does what machine learning does: defines a loss, the sum of squared errors across both statements, and searches for the r that makes it smallest. The answer is about 1 in 274, which predicts 51.3 percent and 73.3 percent.' },
        { kind: 'p', text: 'The interesting part is interpreting the result. "Not less than three fourths" is not a measurement but a floor, so strictly the fitted model breaks it slightly. Either Stephenson\'s figures were rounded, or the simple model leaves something out, such as air resistance, which grows with speed. A good data scientist reports both the fitted number and the doubt, rather than hiding the conflict. Finally the learner uses the model to predict an untested case, a 1 in 50 climb, and gets about 85 percent, then writes down why that prediction deserves less trust than the fitted points.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Roll a toy car down ramps of different steepness and chart how far it goes.' },
          { h3: 'Ages 11 to 15', p: 'Code the one-number model in Python and try values of r by hand.' },
          { h3: 'Ages 15 and up', p: 'Define a loss function, search for the r that minimises it and explain why the data disagree.' }
        ] },
        { kind: 'callout', h3: 'Smiles\'s figures, our model', p: 'The quotations come from Project Gutenberg\'s edition of Samuel Smiles\'s Life of George Stephenson and of his Son Robert Stephenson. The model, the fitting and the predictions are our own work.' }
      ]
    },
    {
      id: 'ml', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'From one parameter to billions',
      intro: 'The same loop of guess, measure error and adjust sits inside every AI system.',
      body: [
        { kind: 'table', caption: 'George Stephenson and Chesterfield, from Samuel Smiles (Project Gutenberg)', head: ['Detail', 'Smiles\'s words'], rows: [
          ['Why he came', '"a coal-mining adventure at Chesterfield"'],
          ['His home', 'Tapton House, which "continued his home until the close of his life"'],
          ['Where it stands', '"about a mile to the northeast of the town of Chesterfield"'],
          ['The view', '"its church and crooked spire"'],
          ['The experiments', 'Made at Killingworth, on gradients of 1 in 260 and 1 in 100']
        ] },
        { kind: 'p', text: 'The model on this page has one parameter; the language models behind chatbots have billions, but they are trained with the same idea of reducing a loss. Knowing that changes how a learner uses vibe coding. When an AI assistant writes a model-fitting program in seconds, the learner still asks what the loss measures, whether the data conflict, and how far the predictions can be trusted. Older teenagers and adults take this further, building AI agents that call tools and act on results in Python; Copilot Studio agent courses run one-to-one only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is unconnected with Project Gutenberg and the census office; the book and statistics are theirs, and the model and any errors in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From toy ramps to machine learning',
    intro: 'School year gives a first guess; the free lesson confirms the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Puzzles, patterns and checking answers.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps built with AI help, then tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Models and AI', p: 'Physics models, data fitting and AI beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Machine learning and agents', p: 'How AI models learn, and how agents use them.', courses: ['complete-generative-ai-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and models',
    h2: 'Does a fitted model tell the truth?',
    intro: 'It tells you the least-bad answer to the question you asked.',
    p1: 'The Chesterfield model fits Stephenson\'s two statements as well as one number can, yet it still breaks one of them. Large AI models are fitted the same way, and they too can be confidently slightly wrong.',
    p2: 'A learner who has watched two sources disagree, and chosen how to report it, is ready to question any number a model or chatbot produces.',
    closer: 'Understanding what a model is really doing is a strong reason for Chesterfield teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Staveley to Brimington, all online',
    intro: 'A laptop or desktop and a reliable connection are all that is needed.',
    cells: [
      { h3: 'Learners at the controls', p: 'Students type, prompt and test for themselves; the tutor follows through screen share and asks guiding questions.' },
      { h3: 'Starting where they are', p: 'A Year 5 or Year 12 learner begins at the level the free lesson finds, with the exam board noted.' },
      { h3: 'Free trial lesson', p: 'A full lesson with no charge and a clear suggestion afterwards.' },
      { h3: 'One level per class', p: 'Five to ten UK learners at the same stage.' },
      { h3: 'Two sessions a week', p: 'None in school holidays.' },
      { h3: 'Fixed local time', p: 'Our tutors shift with British Summer Time for you.' }
    ],
    spec: { title: 'Why small classes are online', p: 'Five Chesterfield learners at one stage, all free at one hour, rarely live close by. Online, each finds a group that suits.' }
  },

  fees: {
    h2: 'Chesterfield fees',
    intro: 'Chesterfield pays our single international rate, the same everywhere outside India.',
    first: 'A whole lesson free, followed by a course suggestion.',
    group: 'About eight live small-group lessons in a month.',
    private: 'About eight live one-to-one lessons in a month.',
    closer: 'Fees are in US dollars, not pounds. No charge applies until the trial has decided the course and a regular slot; the pricing page covers breaks, absences and changing format.'
  },

  reviewsH2: 'Derbyshire and UK families on Google',

  book: {
    h2: 'Book a free Chesterfield lesson',
    intro: 'Tell us the learner\'s age or year group plus an interest. A first lesson could be a pattern puzzle, a Scratch train game built with AI help, a first Python program, or fitting a line to real numbers.',
    success: 'Thank you. The Chesterfield request has arrived.'
  },

  faq: {
    h2: 'Chesterfield questions',
    intro: 'The Stephenson project, vibe coding and practical details.',
    items: [
      { q: 'What is the population of Chesterfield?', a: 'The 2021 census counted 103,569 in Chesterfield borough; the ONS gives 76,420 for the Chesterfield built-up area.' },
      { q: 'Can Chesterfield learners take AI and programming classes online?', a: 'Yes. Lessons are live over video for anyone aged 6 to 67 in the borough.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, with the learner setting the goal, reading the code the AI writes and testing it properly.' },
      { q: 'Can older students learn to build AI agents?', a: 'Yes, once they have some Python; Copilot Studio agents are taught one-to-one only.' },
      { q: 'What is the Stephenson gradient project?', a: 'Learners fit a one-number model to two of George Stephenson\'s measurements recorded by Samuel Smiles, using a loss function like machine learning does.' },
      { q: 'Are lessons in person?', a: 'No. They are live online only.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, in computer science and maths, for understanding; grades are not promised.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67.' },
      { q: 'How much are lessons?', a: 'The trial is free; then USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Are school holidays lesson-free?', a: 'Yes; let us know the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other pages nearby',
    html: 'Nearby, <a class="cg-inline-link" href="/best-coding-class-in-sheffield">Sheffield</a>, <a class="cg-inline-link" href="/best-coding-class-in-derby">Derby</a> and <a class="cg-inline-link" href="/best-coding-class-in-nottingham">Nottingham</a> have their own pages. See <a class="cg-inline-link" href="/coding-classes-in-derbyshire">Derbyshire</a> for the county, <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">East Midlands</a> for the region, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> for all pages.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Chesterfield and Derbyshire',
  footerPlaces: [
    { href: '/coding-classes-in-derbyshire', label: 'Derbyshire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-chf .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-chf .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.03; }
.cg-root.cg-chf .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-chf .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-chf .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-chf .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-chf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-chf .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-chf .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-chf .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Chesterfield (E07000034). Nomis Census 2021 TS007A: total 103,569; 15 to 19 4,917 (4.7%, England 5.7%); 20 to 24 5,312 (5.1%, 6.0%); 55 to 59 7,929 (7.7%, 6.7%); 60 to 64 6,912 (6.7%, 5.8%); 65 to 69 6,046 (5.8%, 4.9%); 75 to 79 4,481 (4.3%, 3.6%). ONS 2021 BUAs: Chesterfield 76,420; Staveley 15,145; Brimington 11,075 (8,932 inside). Project Gutenberg 46229, Samuel Smiles: "a coal-mining adventure at Chesterfield"; Tapton House "continued his home until the close of his life"; "about a mile to the northeast of the town of Chesterfield"; "its church and crooked spire"; "the engine expends half its power in overcoming a rising gradient of 1 in 260, which is about 20 feet in the mile"; "when the gradient is so steep as 1 in 100, not less than three fourths of its power is sacrificed".',
    localProject: 'Model share = G/(G + r). r = 1/260 from sentence 1 -> 0.722 at 1 in 100; r = 1/300 from sentence 2 -> 0.536 at 1 in 260; least squares r = 0.003645 (about 1 in 274) -> 0.513 and 0.733, loss 0.00047; 1 in 50 -> about 0.846. Unit check 20.3 ft/mile, 52.8 ft/mile. Lesson family: one-parameter model fitting with a loss function, conflicting data, inequality statement, extrapolation caution.',
    requiredMentions: [
      '103,569',
      '76,420',
      'Staveley',
      'Brimington',
      'Tapton House',
      'crooked spire',
      'Killingworth',
      '1 in 260',
      'loss function',
      'Samuel Smiles'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Chesterfield and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Samuel Smiles, The Life of George Stephenson and of his Son Robert Stephenson (ebook 46229).', url: 'https://www.gutenberg.org/ebooks/46229' }
    ],
    rejectedClaims: [
      'Stephenson\'s illness and death details: in the source but excluded under the cluster content rules.',
      'Why the spire is crooked: not read from a source; not claimed.',
      'The physics of real locomotives beyond the one-number model: not claimed; the model is a teaching simplification.',
      'Present-day Tapton House use: not read from a source; not claimed.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
