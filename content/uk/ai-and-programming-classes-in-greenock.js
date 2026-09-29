'use strict';
// Greenock (cg- town page, UK cluster Phase 8, towns band A, row 416). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: why does a model that fits its training data perfectly
// fail on new data, and what does regularisation do about it? (polynomial fits of rising degree to a real elevation profile
// from few points, plain least squares against ridge regression, train versus test error).
// Data (read 29 September 2026): OpenTopoData public API, dataset eudem25m (Copernicus EU-DEM v1.1, 25 m): 100 points at
// even spacing along longitude 4.7600 W from 55.9525 N to 55.9225 N (3,316 m, starting near the waterfront and running
// uphill). Heights 5.4 m to 275.4 m (the last point 253.5 m).
// Our run (scratchpad grk/reg.py): 50 random draws of 15 training points; the other 85 are the test. Median test RMSE /
// train RMSE / worst test error (m): degree 1 17.9 / 16.9 / 38.7; degree 3 15.7 / 14.2 / 44.5; degree 5 18.7 / 10.6 /
// 66.3; degree 9 84.5 / 3.7 / 354.0; degree 14 23,501 / 0.0 / 140,613. Ridge (standardised features, alpha 0.001):
// degree 5 14.6 / 11.8 / 45.1; degree 9 18.7 / 10.9 / 63.8; degree 14 14.1 / 9.5 / 42.2. Degree 14 ridge strength sweep
// (median test RMSE): 1e-6 19.8; 1e-4 17.9; 1e-3 14.1; 1e-2 17.5; 1e-1 17.9; 1 16.8. (This sweep looks at test error and is
// shown only to illustrate that strength matters; the page says a real project picks it by cross-validation.)
// Lesson family: regularisation (ridge), overfitting with polynomial degree, train/test gap. Screened: "regularisation",
// "ridge regression", "polynomial fit", "elevation profile", "EU-DEM" 0 hits. Overfitting as a word appears on Tamworth
// (hidden layer) and Waltham Forest; the method here, the penalty, is new. Inverclyde page = Torricelli draining.
// Place facts: NRS mid-2020 localities: Greenock 41,280 (largest in Inverclyde, list on the Inverclyde page). postcodes.io
// (Inverclyde, PA15/PA16) suburban areas: Bow Farm, Braeside, Branchton, Cowdenknowes, Fort Matilda, Gibshill, Lyle Hill,
// Maukinhill, Overton, Ravenscraig (Cartsdyke is registered by the Inverclyde page).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'GREENOCK', label: 'Greenock', blurb: 'AI and programming classes for Greenock, with a machine learning project that fits the town\'s climb from the waterfront and shows why a perfect fit can be a terrible model.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-greenock',
  code: 'grk',
  accent: '#36224C',
  accentRationale: 'Greenock: a deep aubergine (11.36:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Greenock',
    eyebrow: 'Greenock, Inverclyde, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Inverclyde' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Inverclyde', href: '/coding-classes-in-inverclyde' },
    { label: 'Paisley', href: '/online-coding-and-python-classes-in-paisley' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Greenock, Scotland',
  title: 'AI and Programming Classes in Greenock | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Greenock, Braeside, Branchton and Gibshill learners in Inverclyde, aged 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Greenock, with a regularisation project that fits the town\'s slope from the waterfront and exposes overfitting.',
  twitterDescription: 'Greenock AI, programming, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Greenock',
    description: 'Online AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Greenock and Inverclyde, taught live with reasoning first.'
  },

  h1: 'AI and programming classes in Greenock',
  capsuleQ: 'Which are the best AI and programming classes in Greenock?',
  capsule: 'The mid-2020 estimate from National Records of Scotland gives Greenock 41,280 residents, far ahead of any other Inverclyde locality. Braeside, Branchton, Gibshill, Bow Farm, Ravenscraig and Cowdenknowes are among its recorded suburbs in the PA15 and PA16 districts. Tutors in India teach AI, programming, Python, vibe coding and maths on live video to learners from six to 67, one-to-one or in a class of five to ten at a matching level. We teach reasoning before tools, so a learner can spot a model that looks perfect and is not. The first lesson is free and closes with our course advice. The Greenock project samples a 3.3 km climb from near the waterfront, lets polynomial models learn it from just 15 points, and watches the most flexible one fail spectacularly until regularisation reins it in. Beyond the trial, our rates are USD 100 per month for a place in a class and USD 150 per month for individual lessons.',
  lead: 'A model that matches its training data exactly sounds ideal. It usually is not. Given enough flexibility, a model can thread through every training point and swing wildly in between, a failure called overfitting. Regularisation is the standard cure: add a penalty for complicated answers, so the model prefers a smooth explanation unless the data truly demands a wiggly one. Greenock is a good place to see it, because the ground rises steadily from the waterfront. This project takes 100 heights from a published elevation model along a straight line running uphill through the town, trains polynomial models on 15 of them and tests on the other 85.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Greenock?',

  picks: {
    eyebrow: 'Greenock course picks',
    h2: 'Greenock courses in reasoning, Python and AI',
    intro: 'Choose by age and interest. The first lesson of every course is live and free, with no card required.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: drawing a sensible line through points and knowing when a curve is too clever.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with an AI and tested hard.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including the Greenock slope and regularisation.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data, modelling, machine learning and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Greenock and Inverclyde',
      h2: 'Greenock, Braeside, Branchton and Gibshill',
      intro: 'The NRS estimate for Greenock, and suburbs recorded in PA15 and PA16.',
      body: [
        { kind: 'table', caption: 'Greenock in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['Greenock locality, mid-2020', '41,280']
        ] },
        { kind: 'p', text: 'On postcodes.io, Bow Farm, Braeside, Branchton, Cowdenknowes, Fort Matilda, Gibshill, Lyle Hill, Maukinhill, Overton and Ravenscraig appear as suburban areas of Inverclyde in PA15 and PA16. Inverclyde schools teach the Curriculum for Excellence; our lessons are planned by Scottish year group, with SQA Computing Science and Maths support from National 5 to Advanced Higher. Tell us when the holidays fall and lessons will stop for them.' },
        { kind: 'callout', h3: 'Inverclyde, Paisley and Scottish exams', p: 'See <a class="cg-inline-link" href="/coding-classes-in-inverclyde">coding classes in Inverclyde</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-paisley">Paisley</a> and <a class="cg-inline-link" href="/advanced-higher-maths-tuition-online">Advanced Higher Maths tuition</a>. The reasons we teach thinking first are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Greenock project',
      h2: 'Regularisation on Greenock\'s slope: polynomial fits from 15 points',
      intro: 'One real hillside, models from straight line to degree 14, and a penalty that saves the most flexible one.',
      body: [
        { kind: 'p', text: 'The learner requests 100 heights from the OpenTopoData service, which serves the European EU-DEM elevation model at 25 m resolution, along a line 3,316 m long running south from near the waterfront. Heights rise from 5.4 m to 275.4 m. Fifteen points are picked at random for training; the other 85 test the model. Python fits polynomials of degree 1, 3, 5, 9 and 14 by ordinary least squares, then again with ridge regression, which adds a penalty on large coefficients. The whole experiment is repeated for 50 different random choices of the 15 points.' },
        { kind: 'table', caption: 'Typical error in metres when predicting heights along the Greenock line, medians over 50 draws of 15 training points, our Python run on EU-DEM data', head: ['Model', 'Error on training points', 'Error on unseen points'], rows: [
          ['Straight line (degree 1)', '16.9', '17.9'],
          ['Degree 3', '14.2', '15.7'],
          ['Degree 9', '3.7', '84.5'],
          ['Degree 14', '0.0', '23,501'],
          ['Degree 14 with ridge penalty', '9.5', '14.1']
        ] },
        { kind: 'p', text: 'As the degree rises, the training error falls towards zero: a degree-14 polynomial passes exactly through all 15 points. The error on unseen points does the opposite. At degree 9 it is 84.5 m, and at degree 14 the typical miss is over 23 km in height, because the curve swings to absurd values between training points. Adding a small ridge penalty to the same degree-14 model brings the unseen error down to 14.1 m, better than any of the plain fits, while its training error rises to 9.5 m. It fits the training points less tightly and the hillside far better.' },
        { kind: 'p', text: 'The strength of the penalty matters. On this data a very weak penalty left a typical unseen error of 19.8 m and a much stronger one 16.8 m. In a real project the strength is chosen by cross-validation on the training points alone; we tried several on the test points only to show how sensitive it is.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Plot heights along a hill on squared paper and draw a smooth line, then a wiggly one through every dot.' },
          { h3: 'S1 to S3', p: 'Fetch a few Greenock heights in Python and fit a straight line and a curve.' },
          { h3: 'S4 and up', p: 'Fit polynomials of rising degree, add a ridge penalty and pick its strength by cross-validation.' }
        ] },
        { kind: 'callout', h3: 'EU-DEM heights, our models', p: 'Heights come from the Copernicus EU-DEM v1.1 via the OpenTopoData service; produced using Copernicus data and information funded by the European Union. The line, the sampling, the models and every error figure are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Overfitting and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Zero error on training data is a warning light, not a trophy.',
      body: [
        { kind: 'table', caption: 'From the Greenock slope to working with AI', head: ['In the regularisation project', 'When AI builds a model for you'], rows: [
          ['Degree 14 scored 0.0 m on training', 'Ask for the error on unseen data'],
          ['Its unseen error was over 23 km', 'Flexible models can fail badly between examples'],
          ['A ridge penalty cut that to 14.1 m', 'Penalising complexity often helps'],
          ['Penalty strength changed the result', 'Every setting should be chosen honestly'],
          ['15 points were all it had', 'Little data calls for simpler models']
        ] },
        { kind: 'p', text: 'Modern AI models are enormously flexible, which is exactly why techniques like regularisation matter. If you ask an AI assistant to fit a model and it proudly reports a near-perfect fit, the first question is how it does on data it has not seen. Vibe coding has the learner explain the model in words and the AI draft the code; in Greenock lessons a slice of test data is always kept back and checked by the learner. AI agents that build models on their own should be told to do the same and to report both numbers. Learners move on to building agents when their Python stands on its own, commonly around S5 or in adult life, and Copilot Studio agents are reserved for private tuition. The progression is on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our AI agents page for UK learners</a>, and the philosophy on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We are independent of OpenTopoData, the Copernicus programme, National Records of Scotland and postcodes.io, and used only their open data. The models and any errors in them are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From lines on graph paper to regularised models',
    intro: 'The school year gives a first guess; the free lesson settles the level.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Patterns, graphs and choosing a sensible line.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner, built with AI help and tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and machine learning', p: 'Curve fitting, overfitting and regularisation alongside SQA Maths.', courses: ['ai-ml-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Modelling and agents', p: 'Python, machine learning and AI agents, built step by step.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and overfitting',
    h2: 'What is regularisation in machine learning?',
    intro: 'Regularisation adds a penalty for complexity when a model is trained, so it prefers simpler explanations and generalises better to data it has not seen; ridge regression, which penalises large coefficients, is a common example.',
    p1: 'Fitting heights along a 3.3 km line through Greenock from 15 points, a degree-14 polynomial matched every training point yet missed unseen ones by over 23 km, while the same model with a ridge penalty missed by 14.1 m.',
    p2: 'Learners who have run that experiment ask of any AI model: how does it do on data it never saw, and what stops it overfitting?',
    closer: 'Knowing why a perfect fit can be a bad model keeps Greenock teenagers in charge of the AI they build, which makes learning to code well worth it in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Braeside to Gibshill, online',
    intro: 'All you need is a computer with a webcam and an internet connection that supports video.',
    cells: [
      { h3: 'Students do the typing', p: 'Every line and every run is the learner\'s, while the tutor watches the shared screen and asks what the numbers mean.' },
      { h3: 'Pitched from the trial', p: 'The free lesson shows where to start; any SQA course is noted.' },
      { h3: 'Free opening lesson', p: 'No charge for lesson one, which ends with our course suggestion.' },
      { h3: 'Classes by level', p: 'Five to ten UK learners at the same stage in each class.' },
      { h3: 'Two a week', p: 'Paused for school holidays.' },
      { h3: 'Stable time', p: 'Tutors adjust for UK clock changes so your slot stays fixed.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one stage, free on the same evening, seldom live close together. Over video, they do not need to.' }
  },

  fees: {
    h2: 'Greenock fees',
    intro: 'Greenock learners pay our international prices, which apply outside India.',
    first: 'A full lesson free, then our recommendation.',
    group: 'About eight live group lessons each month.',
    private: 'About eight live private lessons each month.',
    closer: 'No sterling prices exist: we bill in US dollars, and not before the trial has fixed a course and a time. Holidays, absences and format changes are handled on the pricing page.'
  },

  reviewsH2: 'What parents in Inverclyde and learners across Britain say on Google',

  book: {
    h2: 'Book a free Greenock lesson',
    intro: 'An age or school year and a favourite hobby are all we need. Possible trials: sketching rough lines through dots, co-designing a Scratch game with an AI, writing starter Python, or fitting a curve to genuine hill heights.',
    success: 'Thank you. Your Greenock request has arrived.'
  },

  faq: {
    h2: 'Greenock questions',
    intro: 'Overfitting, penalties, the hillside data, vibe coding and how lessons work.',
    items: [
      { q: 'What is the population of Greenock?', a: 'National Records of Scotland estimated 41,280 people in the Greenock locality in mid-2020.' },
      { q: 'Are AI and programming classes available online in Greenock?', a: 'They are; lessons run on live video for learners from 6 to 67 in Gourock, Port Glasgow, Greenock or anywhere else in Inverclyde.' },
      { q: 'What is overfitting?', a: 'When a model learns the quirks of its training data instead of the real pattern, so it scores well on that data and badly on new data. Our degree-14 fit to Greenock heights is an extreme case.' },
      { q: 'What is ridge regression?', a: 'Linear regression with an added penalty on the size of the coefficients. It keeps a flexible model from swinging wildly and usually improves predictions on new data.' },
      { q: 'What does the Greenock project involve?', a: 'Fetching 100 elevation points along a 3.3 km line through Greenock, fitting polynomial models from 15 of them, and comparing plain fits with regularised ones on the other 85.' },
      { q: 'Does vibe coding feature?', a: 'It does, for all ages: learners plan and test, while an AI helps with the typing.' },
      { q: 'When can learners build AI agents?', a: 'When Python no longer needs a helping hand, often S5 onwards; anything in Copilot Studio is taught privately.' },
      { q: 'Do you support Higher and Advanced Higher Maths?', a: 'Yes, along with National 5 and Computing Science, taught for understanding rather than promised grades.' },
      { q: 'How much are lessons?', a: 'The first lesson is free; then USD 100 a month in a group or USD 150 a month privately.' },
      { q: 'Are lessons held in the holidays?', a: 'No, lessons pause for school holidays; send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Inverclyde and Clyde pages',
    html: 'Pages with their own projects: <a class="cg-inline-link" href="/coding-classes-in-inverclyde">Inverclyde</a> (draining a tank), <a class="cg-inline-link" href="/online-coding-and-python-classes-in-paisley">Paisley</a>, <a class="cg-inline-link" href="/coding-classes-in-renfrewshire">Renfrewshire</a> and <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a>. Everywhere else is on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Greenock and Inverclyde',
  footerPlaces: [
    { href: '/coding-classes-in-inverclyde', label: 'Inverclyde' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-grk .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-grk .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-grk .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-grk .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-grk .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.02em; }
.cg-root.cg-grk .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-grk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-grk .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-grk .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-grk .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Inverclyde (S12000018). Scotland: Curriculum for Excellence, SQA National 5 to Advanced Higher. NRS mid-2020 settlement and locality estimates: Greenock 41,280 (Port Glasgow 14,200 next). postcodes.io (Inverclyde, PA15/PA16): Bow Farm, Braeside, Branchton, Cowdenknowes, Fort Matilda, Gibshill, Lyle Hill, Maukinhill, Overton, Ravenscraig (suburban areas).',
    localProject: 'OpenTopoData eudem25m: 100 points along 4.7600 W, 55.9525 to 55.9225 N (3,316 m), 5.4 to 275.4 m. 50 draws of 15 training points. Median test / train RMSE (m): deg 1 17.9/16.9; deg 3 15.7/14.2; deg 9 84.5/3.7; deg 14 23,501/0.0; deg 14 ridge (alpha 0.001, standardised) 14.1/9.5. Strength sweep 1e-6 19.8 to 1 16.8 (illustrative, test-based). Lesson family: regularisation, ridge, overfitting.',
    requiredMentions: [
      '41,280',
      'Braeside',
      'Branchton',
      'Gibshill',
      'Cowdenknowes',
      'Ravenscraig',
      'Bow Farm',
      'regularisation',
      'ridge regression'
    ],
    sources: [
      { claim: 'OpenTopoData API, EU-DEM 25 m dataset (Copernicus EU-DEM v1.1).', url: 'https://www.opentopodata.org/datasets/eudem/' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas in Inverclyde.', url: 'https://api.postcodes.io/places?q=Braeside' }
    ],
    rejectedClaims: [
      'Shipbuilding, harbour or James Watt history: not read from a source; not claimed.',
      'Exact street names along the line: not claimed; only coordinates are given.',
      'That the ridge strength shown is the one a proper project would pick: stated as illustrative only.',
      'Largest locality in Inverclyde: per NRS mid-2020 figures quoted on the Inverclyde page (Greenock 41,280, Port Glasgow 14,200).',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
