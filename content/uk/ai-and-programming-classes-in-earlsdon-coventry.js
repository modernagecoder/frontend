'use strict';
// Earlsdon, Coventry (cg- district page, UK cluster Phase 9, row 480). Keyword slug per the owner's rotation (city suffix),
// with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can a model fill the gaps between
// measurements and also say how unsure it is? (Gaussian process regression, also called kriging, against inverse distance
// weighting; whether the stated uncertainty is honest and whether it is informative).
// Data (read 30 September 2026): OpenTopoData public API, eudem25m (Copernicus EU-DEM v1.1): a 40 by 40 grid (1,600 heights)
// over bbox -1.556,52.381,-1.503,52.407, about 3.6 km by 2.9 km covering the Earlsdon ward's output-area centres; heights
// 70.1 to 110.0 m, standard deviation 8.43 m.
// Our run (scratchpad eds/gp.py): scikit-learn GaussianProcessRegressor (constant x RBF + white noise, normalised target,
// kernel fitted by marginal likelihood); train on n random grid points, test on the rest; averages of 10 draws. RMSE GP /
// IDW (power 2) / share of test points inside the GP's 95% interval / mean error in the most-uncertain fifth against the
// least-uncertain fifth: n 25: 5.47 / 5.78 / 89.4% / 6.82 vs 2.32; n 50: 4.14 / 5.06 / 90.6% / 5.08 vs 1.77; n 100: 2.79 /
// 4.43 / 91.3% / 3.36 vs 1.13; n 200: 1.85 / 3.84 / 92.7% / 2.05 vs 0.82. Guessing the mean height: 8.43 m.
// Lesson family: Gaussian process regression / kriging with predictive uncertainty, against inverse distance weighting.
// Screened: "Gaussian process", "kriging", "inverse distance weighting" 0 hits. Halesowen owns conformal intervals; Greenock
// regularised polynomials; Carlisle TIN interpolation. Coventry city page owns union-find.
// Place facts: Nomis Census 2021 TS001, 2022 wards: Earlsdon (E05001221) 15,384. postcodes.io (Coventry): Earlsdon and
// Whoberley (CV5), Canley (CV4), Canley Gardens (CV5) suburban areas.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'EARLSDON', label: 'Earlsdon', blurb: 'AI and programming classes for Earlsdon in Coventry, with a project that maps the ground from a handful of height readings and makes the model admit where it is guessing.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-earlsdon-coventry',
  code: 'eds',
  accent: '#2A5C7A',
  accentRationale: 'Earlsdon: a petrol blue (7.22:1 contrast), hand-picked to differ from the slate, sienna and pine of the other Phase 9 pages in this batch',
  pageType: 'city',
  place: {
    name: 'Earlsdon',
    eyebrow: 'Earlsdon, Coventry, West Midlands, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Coventry' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-coventry', name: 'Coventry' }],
  nav: [
    { label: 'Coventry', href: '/best-coding-class-in-coventry' },
    { label: 'Warwickshire', href: '/coding-classes-in-warwickshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Earlsdon, Coventry',
  title: 'AI and Programming Classes in Earlsdon, Coventry | Ages 6 to 67',
  description: 'AI, programming, Python and vibe coding, taught live online to Earlsdon, Whoberley and Canley learners in Coventry between 6 and 67. Your first lesson costs nothing.',
  ogDescription: 'AI and programming classes for Earlsdon, Coventry, with a Gaussian process project that fills in a height map and reports its own uncertainty.',
  twitterDescription: 'Earlsdon, Coventry: AI, programming, Python and vibe coding classes online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Earlsdon, Coventry',
    description: 'Online AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Earlsdon and Coventry, taught live with honest uncertainty in mind.'
  },

  h1: 'AI and programming classes in Earlsdon, Coventry',
  capsuleQ: 'Which are the best AI and programming classes in Earlsdon, Coventry?',
  capsule: 'Earlsdon is one of Coventry\'s council wards; the 2021 census recorded 15,384 usual residents there, a figure the ONS publishes through Nomis. Whoberley, Canley and Canley Gardens are other suburban areas of the city on record in the CV5 and CV4 postcode districts. We teach AI, programming, Python, vibe coding and maths to learners aged six to 67 by live video from India, either individually or in classes of five to ten pitched at one level. Our lessons put judgement ahead of tools, including the judgement to ask how sure a model really is. You can try a lesson free, and we will say which course we think fits. In the Earlsdon project a Gaussian process learns the shape of the ground from as few as 25 height readings, predicts the rest, and attaches a range to every prediction that the learner then tests. Afterwards the price is USD 100 a month for group tuition and USD 150 a month for private tuition.',
  lead: 'Most prediction methods give you a number and nothing else. A Gaussian process gives a number and a range, and the range is wide where it has little nearby evidence and narrow where it has plenty. Geologists have used the same idea for decades under the name kriging. The test bed here is the ground under Earlsdon: 1,600 height readings from a European elevation model across a box about 3.6 km wide. The model is shown a small random sample, asked to predict every other point, and then marked twice, once on how close it got and once on whether its claimed ranges were honest.',
  wa: 'Hello Modern Age Coders, I would like to arrange a free AI or programming lesson for someone in Earlsdon, Coventry.',

  picks: {
    eyebrow: 'Earlsdon course picks',
    h2: 'AI, Python and thinking courses for Earlsdon',
    intro: 'Go by the learner\'s age. All four open with a free live lesson, booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: estimating between known points and saying how confident you are.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games built by explaining them to an AI, then playing them to find the faults.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, with the Earlsdon height map and its uncertainty bands.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the beginning through modelling, uncertainty and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Earlsdon and Coventry',
      h2: 'Earlsdon, Whoberley, Canley and Canley Gardens',
      intro: 'The ward\'s census count and the neighbouring suburbs on record.',
      body: [
        { kind: 'table', caption: 'Earlsdon ward, Coventry: usual residents at the 2021 census (ONS, Nomis)', head: ['Area', 'Usual residents (2021)'], rows: [
          ['Earlsdon ward', '15,384']
        ] },
        { kind: 'p', text: 'Postcodes.io has Earlsdon, Whoberley and Canley Gardens as suburban areas of Coventry in CV5, and Canley in CV4. The census figure is for the council ward of Earlsdon, whose boundary is not the same thing as the neighbourhood people mean by the name. Coventry schools teach the national curriculum for England; we support it through to GCSE and A level in computer science and maths, and we keep lessons out of the holiday weeks you tell us about.' },
        { kind: 'callout', h3: 'Coventry, Warwickshire and how we teach', p: 'There is a page for <a class="cg-inline-link" href="/best-coding-class-in-coventry">Coventry</a> as a whole and one for <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a>. The thinking behind our lessons is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Earlsdon project',
      h2: 'Filling in the map: Gaussian process regression against inverse distance weighting',
      intro: 'A few known heights, 1,500 unknown ones, and a model that must put a range on every guess.',
      body: [
        { kind: 'p', text: 'The learner requests a 40 by 40 grid of heights from the OpenTopoData service, which serves the Copernicus EU-DEM elevation model. Across the box the ground runs from 70.1 m to 110.0 m. A random handful of the 1,600 points is kept as "measurements" and the rest are hidden. Two methods then predict the hidden heights. Inverse distance weighting is the simple one: average the known points, counting near ones more. The Gaussian process instead learns from the sample how quickly height tends to change with distance, and uses that both to predict and to say how far off it might be. Each experiment is repeated for ten different random samples.' },
        { kind: 'table', caption: 'Predicting hidden heights around Earlsdon, averages of 10 random samples, our Python run on EU-DEM data', head: ['Known points', 'Gaussian process error', 'Inverse distance error', 'Truth inside the 95% range'], rows: [
          ['25', '5.47 m', '5.78 m', '89.4%'],
          ['50', '4.14 m', '5.06 m', '90.6%'],
          ['100', '2.79 m', '4.43 m', '91.3%'],
          ['200', '1.85 m', '3.84 m', '92.7%']
        ] },
        { kind: 'p', text: 'With only 25 points the two methods are close, and both beat simply guessing the average height, which would be out by 8.43 m. As points are added the Gaussian process pulls away: at 200 points its typical error is 1.85 m, less than half that of inverse distance weighting. Its ranges can be checked too. A range labelled 95% should contain the truth 95 times in 100; here it managed 89.4% to 92.7%, so the model is a little too sure of itself. Yet the ranges clearly carry information. With 100 known points, the fifth of predictions the model was least sure about were wrong by 3.36 m on average, and the fifth it was most sure about by 1.13 m. It knows roughly where it is guessing, even if it slightly understates by how much.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Guess the height between two marked points on a drawn hill, and say "sure" or "not sure" each time.' },
          { h3: 'Ages 11 to 15', p: 'Code inverse distance weighting in Python and test it on hidden Earlsdon heights.' },
          { h3: 'Ages 15 and up', p: 'Fit a Gaussian process, plot its uncertainty and measure how often the 95% range holds.' }
        ] },
        { kind: 'callout', h3: 'EU-DEM heights, our models', p: 'Heights are from Copernicus EU-DEM v1.1 via OpenTopoData; produced using Copernicus data and information funded by the European Union. The elevation model is itself an estimate on a 25 m grid. Sampling, both predictors and every error figure are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Uncertainty and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A prediction without a range hides the most useful thing the model knows.',
      body: [
        { kind: 'table', caption: 'From the Earlsdon height map to AI in general', head: ['In the height project', 'With any AI prediction'], rows: [
          ['The Gaussian process gave a range with every answer', 'Ask for uncertainty, not just a number'],
          ['95% ranges held 89.4% to 92.7% of the time', 'Stated confidence should be tested'],
          ['Errors were three times larger where it was unsure', 'Uncertainty tells you where to look first'],
          ['More points shrank the error from 5.47 m to 1.85 m', 'Evidence, not cleverness, buys accuracy'],
          ['Inverse distance weighting gave no range at all', 'Simple methods can hide what they do not know']
        ] },
        { kind: 'p', text: 'Chatbots rarely tell you how sure they are, and when asked they tend to sound confident regardless. A learner who has made a model print its own error bars, and then caught those bars being slightly too narrow, reads AI output differently. In our Earlsdon vibe coding lessons the brief to the AI always includes "report the uncertainty and show how you checked it", and the learner runs that check. For AI agents the stakes are higher, because an agent acts on its predictions; one that knows where it is unsure can pause and ask. We move on to building agents once a learner can write Python without prompting, generally from Year 12 or in adulthood, and keep Copilot Studio agents to one-to-one teaching. Further reading: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenTopoData, the Copernicus programme, the ONS and postcodes.io supplied open data only. Modern Age Coders is not connected with any of them, and the analysis, including its mistakes, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From "sure or not sure" to error bars',
    intro: 'We read the school year as a hint and let the free lesson settle the starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Estimating, in-between values and owning up to a guess.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Apps and games made with an AI, inspected and fixed by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Interpolation, regression and uncertainty, next to GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Modelling and agents', p: 'Probabilistic models in Python, then agents that act on them.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI that admits doubt',
    h2: 'What is Gaussian process regression, and how does it know when it is unsure?',
    intro: 'Gaussian process regression predicts a value at a new point from nearby known points and, because it models how values vary with distance, also returns an uncertainty that grows where known points are scarce.',
    p1: 'On 1,600 heights around Earlsdon it predicted hidden points to within 2.79 m from 100 samples, against 4.43 m for inverse distance weighting, and its 95% ranges contained the truth 91.3% of the time.',
    p2: 'After this project a learner\'s first question to any AI prediction is simple: what is the range, and has anyone checked it?',
    closer: 'An Earlsdon learner who has tested a model\'s error bars expects the same honesty from every AI tool, and knows how to check for it in code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Teaching Earlsdon by video',
    intro: 'Equipment list: a computer, a webcam, a broadband line.',
    cells: [
      { h3: 'Nobody codes for the learner', p: 'They write it, run it and explain it. The tutor sees the screen and asks what the output should be first.' },
      { h3: 'The trial finds the level', p: 'And the interests, and the exam board where there is one.' },
      { h3: 'The trial is free', p: 'It closes with the course we would recommend.' },
      { h3: 'Groups are matched', p: 'Five to ten learners of one level, from all parts of Britain.' },
      { h3: 'Two lessons a week', p: 'In term time only.' },
      { h3: 'The hour does not drift', p: 'Our tutors take care of the UK clock changes.' }
    ],
    spec: { title: 'Why we do not meet in a room', p: 'Matching level and timetable matters more than matching postcode, and the pool of learners is far bigger online.' }
  },

  fees: {
    h2: 'Earlsdon fees',
    intro: 'Earlsdon sits on our international price list, the one used everywhere except India.',
    first: 'A free lesson to begin, with a recommendation.',
    group: 'Group tuition: around eight live lessons per month.',
    private: 'Private tuition: around eight live lessons per month.',
    closer: 'Our prices are in US dollars and are not converted to pounds. You are invoiced only after the trial, once we have agreed a course and a regular time. See the pricing page for holidays, missed lessons and moving between group and private.'
  },

  reviewsH2: 'Coventry parents and learners across Britain on Google',

  book: {
    h2: 'Book a free Earlsdon lesson',
    intro: 'Tell us roughly how old the learner is and what holds their attention. We will build the trial from that: a guess-the-height game, a Scratch project with an AI, first Python, or a small model that reports its own doubt.',
    success: 'Thank you. Your Earlsdon request has been received.'
  },

  faq: {
    h2: 'Earlsdon questions',
    intro: 'Uncertainty, the height project, AI, vibe coding and arrangements.',
    items: [
      { q: 'How many people live in Earlsdon?', a: 'Coventry\'s Earlsdon ward had 15,384 usual residents at the 2021 census, according to ONS figures on Nomis.' },
      { q: 'Do you offer AI and programming classes in Earlsdon?', a: 'Yes, online. Learners aged 6 to 67 in Earlsdon, Whoberley, Canley and elsewhere in Coventry join live video lessons.' },
      { q: 'What is kriging?', a: 'The name used in geology and mapping for Gaussian process regression: predicting values between measured points while also estimating how uncertain each prediction is.' },
      { q: 'What is inverse distance weighting?', a: 'A simple way to estimate a value between known points by averaging them, giving nearer points more weight. It is easy to code but gives no measure of uncertainty.' },
      { q: 'What happens in the Earlsdon project?', a: 'A Gaussian process and inverse distance weighting each predict hidden heights on a 1,600-point grid from 25 to 200 known points, and the learner checks both the errors and the claimed 95% ranges.' },
      { q: 'How is vibe coding taught?', a: 'The learner writes the brief, an AI writes code, and the learner tests it, including any claims it makes about accuracy.' },
      { q: 'When are learners ready for AI agents?', a: 'When they can write Python without prompting, generally from Year 12 or as adults; Copilot Studio agents are taught one-to-one.' },
      { q: 'Can you help with GCSE or A level?', a: 'Yes, computer science and maths. The aim is understanding, and we do not promise grades.' },
      { q: 'How much does it cost?', a: 'A free first lesson, then USD 100 a month for group tuition or USD 150 a month for private tuition.' },
      { q: 'Are lessons held in the holidays?', a: 'No, we pause; please send your dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Coventry and Warwickshire pages',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-coventry">Coventry</a> page has its own project on grouping points, and there are pages for <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-nuneaton">Nuneaton</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-solihull">Solihull</a>. Everything else is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Earlsdon and Coventry',
  footerPlaces: [
    { href: '/best-coding-class-in-coventry', label: 'Coventry' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-eds .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-eds .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-eds .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-eds .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-eds .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.02em; }
.cg-root.cg-eds .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-eds .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-eds .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-eds .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-eds .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Coventry (E08000026), Earlsdon ward (E05001221), Census 2021 TS001 usual residents 15,384 (Nomis NM_2021_1, 2022 wards). England national curriculum; GCSE and A level. postcodes.io (Coventry): Earlsdon, Whoberley, Canley Gardens (CV5), Canley (CV4) suburban areas.',
    localProject: 'OpenTopoData eudem25m 40x40 grid, bbox -1.556,52.381,-1.503,52.407 (about 3.6 x 2.9 km), 70.1 to 110.0 m, sd 8.43. GP (constant x RBF + white) vs IDW power 2; 10 draws. RMSE GP/IDW, 95% coverage: n 25 5.47/5.78, 89.4%; 50 4.14/5.06, 90.6%; 100 2.79/4.43, 91.3%; 200 1.85/3.84, 92.7%. n 100 error most-unsure fifth 3.36 vs least-unsure 1.13. Lesson family: Gaussian process regression (kriging), predictive uncertainty, IDW.',
    requiredMentions: [
      '15,384',
      'Whoberley',
      'Canley Gardens',
      'Gaussian process',
      'kriging',
      'inverse distance weighting',
      '8.43 m',
      '91.3%'
    ],
    sources: [
      { claim: 'OpenTopoData API, EU-DEM 25 m dataset (Copernicus EU-DEM v1.1).', url: 'https://www.opentopodata.org/datasets/eudem/' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis, 2022 wards.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas of Coventry.', url: 'https://api.postcodes.io/places?q=Earlsdon' }
    ],
    rejectedClaims: [
      'That the height grid matches the ward boundary: it is a rectangle around the ward, stated as a box.',
      'Watchmaking or other local history: not read from a source; not claimed.',
      'That the elevation model is ground truth: stated as an estimate on a 25 m grid.',
      'Comparisons of Earlsdon with other wards: none made.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
