'use strict';
// Ramsgate (cg- town page, UK cluster Phase 10, towns band B, row 549). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: a neural network learns nothing, or learns
// garbage, depending only on the numbers it starts with; why? (Weight initialisation: zero and constant init keep hidden
// units identical; tiny, Xavier and huge random init; saturation.)
// Data (read 1 October 2026): OpenTopoData eudem25m (Copernicus EU-DEM v1.1), a 41 x 41 grid over 51.322 to 51.362 N,
// 1.370 to 1.440 E: 1,681 points; 340 with no height (sea); 15 more at or below 0.5 m dropped; 1,326 land points, mean
// 40.72 m, sd 10.70 m, max 56.05 m. Random 80/20 split (seed 20261001): 1,060 train, 266 test. Network (scratchpad
// rmg/init.py, numpy): 2 inputs (scaled latitude and longitude), two hidden layers of 32 tanh units, linear output,
// Adam lr 0.01, 3,000 full-batch steps, heights standardised. Test RMSE: predict the mean 10.37 m; all weights 0: 10.37 m,
// 1 distinct first-layer unit; all weights 0.5: 7.48 m, 1 distinct unit (32 clones); normal sd 0.001: 2.18 m (1.83 to
// 2.44 over 5 seeds); Xavier (Glorot) normal: 1.97 m (1.78 to 2.15); normal sd 10: 59.08 m (43.81 to 69.51), 65% of
// first-layer outputs beyond |0.99|.
// Lesson family: weight initialisation. Screened: "weight initiali" 0 hits; claimed in claims.txt.
// Place facts: Thanet TS001 140,587 (a requiredMention on the Margate page; printed, not listed). ONS 2021 BUA (published):
// Ramsgate 42,030. postcodes.io suburban areas with nearest postcode in the Ramsgate BUA: Newington, Pegwell,
// Nethercourt, Northwood, Haine, Chilton (Northwood is a requiredMention on the Kirkby page; printed, not listed).
// Dumpton and Westwood fall in the Broadstairs BUA, Cliffs End and Manston outside; left out.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'RAMSGATE', label: 'Ramsgate', blurb: 'Coding and AI classes for Ramsgate, with a neural network that learns the shape of the town\'s land, or fails to, depending on how it starts.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-ramsgate',
  code: 'rmg',
  accent: '#59612B',
  accentRationale: 'Ramsgate: a muted chalk-downland olive (6.63:1 on white, 5.38:1 on the ledger beige), chosen by hand at least 40 RGB steps from every Kent and South East page',
  pageType: 'city',
  place: {
    name: 'Ramsgate',
    eyebrow: 'Ramsgate, Thanet, Kent',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Kent' },
      { type: 'AdministrativeArea', name: 'South East England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Kent', href: '/coding-classes-in-kent' },
    { label: 'Margate', href: '/online-coding-and-python-classes-in-margate' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ramsgate, Kent',
  title: 'Coding and AI Classes in Ramsgate, Kent | Ages 6 to 67',
  description: 'Coding and AI classes for Ramsgate, Newington, Pegwell and Nethercourt, live online for ages 6 to 67: Python, neural networks and vibe coding. Free first lesson.',
  ogDescription: 'Coding and AI classes for Ramsgate, with a neural network project on why the starting weights decide everything.',
  twitterDescription: 'Ramsgate coding and AI lessons, live online for ages 6 to 67. The first lesson costs nothing.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Ramsgate',
    description: 'Online coding, AI, Python and maths lessons for children, teenagers and adults in Ramsgate and Thanet, including neural networks trained on local open data.'
  },

  h1: 'Coding and AI classes in Ramsgate',
  capsuleQ: 'What are the best coding and AI classes for Ramsgate?',
  capsule: 'According to the ONS, 42,030 people lived in the Ramsgate built-up area at the 2021 census, and 140,587 in the Thanet district. Newington, Pegwell, Nethercourt, Northwood, Haine and Chilton are the gazetteer suburbs we could place inside the built-up area by their nearest postcode. Modern Age Coders teaches coding, AI, Python, vibe coding and maths in Ramsgate through live online lessons for ages six to 67; the tutors are in India and teach privately or in groups of five to ten learners at one level. Learners begin with a free lesson, and we recommend a course only afterwards. In the Ramsgate project a small neural network learns the height of the land from its position, and the learner discovers that the numbers it starts from decide whether it learns anything at all. After the trial, lessons cost USD 100 a month in a group or USD 150 a month privately.',
  lead: 'Before a neural network sees any data, someone has to fill it with numbers. It sounds like a formality. It is not: start every weight at zero and the network cannot learn; start them all the same and its neurons stay identical forever; start them too large and it learns worse than a guess. A map of the heights under Ramsgate gives a network something real to learn, and five ways of starting it give five very different results.',
  wa: 'Hi Modern Age Coders, we are in Ramsgate and would like to try a free coding or AI lesson.',

  picks: {
    eyebrow: 'Good first courses',
    h2: 'Coding and AI courses for Ramsgate learners',
    intro: 'For each age, the course we usually suggest first. Each starts with a live lesson that is free, with no card taken.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Breaking problems into steps and spotting patterns, the groundwork for code and AI.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games made together with an AI, then tested and repaired by the child.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Neural networks in Python from the inside, including the Ramsgate height model.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Web and Python projects built with AI help, checked line by line.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Ramsgate and Thanet',
      h2: 'Ramsgate, Newington, Pegwell, Nethercourt and Northwood',
      intro: 'Two official counts, and the suburbs that passed our postcode check.',
      body: [
        { kind: 'table', caption: 'Census 2021 usual residents, ONS', head: ['Area', 'Residents'], rows: [
          ['Ramsgate built-up area', '42,030'],
          ['Thanet district', '140,587']
        ] },
        { kind: 'p', text: 'Thanet also contains Margate, Broadstairs and a number of villages, so the district figure measures a bigger area and should not be added to the town\'s. Dumpton and Westwood appear in the gazetteer, but their nearest postcodes fall in the Broadstairs built-up area, while Cliffs End and Manston sit outside Ramsgate\'s altogether, so none of them is on our list. Ramsgate schools follow the national curriculum for England, and our lessons can support GCSE and A level computer science and maths from Year 9.' },
        { kind: 'callout', h3: 'East Kent pages', p: 'Visit <a class="cg-inline-link" href="/online-coding-and-python-classes-in-margate">Margate</a>, <a class="cg-inline-link" href="/best-coding-class-in-canterbury">Canterbury</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-folkestone">Folkestone</a> and <a class="cg-inline-link" href="/coding-classes-in-kent">our Kent page</a>. Why we teach reasoning before AI tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learning to think before leaning on AI</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Ramsgate project',
      h2: 'Five ways to start a network, and what each one learned',
      intro: '1,326 land heights, one small network, and only the starting numbers changed.',
      body: [
        { kind: 'p', text: 'The learner asks OpenTopoData for the height of the ground at 1,681 points, a 41 by 41 grid over a rectangle round Ramsgate, taken from the European Union\'s EU-DEM elevation model. 340 points come back with no height because they are out at sea, and 15 more are dropped at half a metre or less, leaving 1,326 points on land. Their average height is 40.72 m and the highest is 56.05 m. A random fifth, 266 points, is set aside for testing, and the network never sees them while training.' },
        { kind: 'p', text: 'The network is small enough to write by hand in numpy: two inputs, the position of a point; two hidden layers of 32 units, each squashing its sum with tanh; one output, the predicted height. It trains for 3,000 steps with the Adam optimiser, the same data and the same settings every time. The only thing that changes is how its weights are filled at the start. Xavier initialisation, from Xavier Glorot and Yoshua Bengio in 2010, draws random weights scaled to the number of connections so that signals neither fade nor explode as they pass through the layers.' },
        { kind: 'table', caption: 'Height prediction error on the 266 test points (root mean square, metres), our numpy run; random schemes averaged over 5 seeds', head: ['Starting weights', 'Test error', 'Different first-layer units', 'What went wrong'], rows: [
          ['Just predict the average height', '10.37 m', 'none', 'Baseline'],
          ['Every weight 0', '10.37 m', '1 of 32', 'No gradient reaches the hidden units'],
          ['Every weight 0.5', '7.48 m', '1 of 32', 'All 32 units stay identical'],
          ['Random, very small (0.001)', '2.18 m', '32 of 32', 'Slow start, rescued by Adam'],
          ['Xavier random', '1.97 m', '32 of 32', 'Works as intended'],
          ['Random, very large (10)', '59.08 m', '32 of 32', '65% of outputs stuck at the limit']
        ] },
        { kind: 'p', text: 'With every weight at zero, the network ends exactly where a person guessing the average would: 10.37 m out. The hidden units all output zero, so no correction ever flows back to them. With every weight at 0.5 it does a little better, 7.48 m, but its 32 first-layer units receive identical updates at every step and finish as 32 copies of one unit, so the network is really one neuron wide. Random starts break that symmetry. Xavier scaling gives the lowest error, 1.97 m on average, and a very small random start comes close at 2.18 m because the optimiser adapts its step sizes. Weights drawn with a spread about forty times the Xavier size push 65% of the tanh outputs against their limits, and the error, 59.08 m, is far worse than guessing.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play a team guessing game where everyone copies the same answer, then one where each person starts differently.' },
          { h3: 'Ages 11 to 15', p: 'Fit a straight line by nudging two numbers in Python, starting from different guesses.' },
          { h3: 'Ages 15 and up', p: 'Write the network in numpy, try each start, and count the identical units yourself.' }
        ] },
        { kind: 'callout', h3: 'Data and credits', p: 'Heights are from EU-DEM v1.1, produced with funding by the European Union under the Copernicus programme, served by OpenTopoData and read on 1 October 2026. Xavier initialisation is from Glorot and Bengio, AISTATS 2010. The grid, the network, the training runs and every error figure above are our own, and a 25 metre elevation model is too coarse to show individual cliffs or streets.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Inside AI models',
      h2: 'What the height network teaches about AI',
      intro: 'Large models begin exactly the same way, just with billions of weights.',
      body: [
        { kind: 'table', caption: 'From a Ramsgate height model to understanding AI', head: ['What the network did', 'What it shows about AI'], rows: [
          ['Zero weights matched a guess of the average', 'Training can run and still teach the model nothing'],
          ['Equal weights gave 32 clones of one unit', 'Size means nothing without variety inside'],
          ['Xavier scaling reached 1.97 m', 'Small design choices decide whether learning works'],
          ['Huge weights did worse than guessing', 'More is not better; balance matters'],
          ['Every run used the same data', 'Change one thing at a time to learn what it does']
        ] },
        { kind: 'p', text: 'Every large language model started as a network full of carefully scaled random numbers, and much of the craft of training lies in choices like this one that users never see. Ramsgate learners practise vibe coding by asking an AI for a neural network, then checking how it initialises its weights and testing what happens if they change it. Agents come later, once a learner can write Python alone, which for most is in the sixth form or adulthood; Copilot Studio agents are taught only one-to-one. See <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">why learners explain code instead of pasting it</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the agents course for UK students</a>.' },
        { kind: 'p', text: 'OpenTopoData, the Copernicus programme, the ONS and postcodes.io provided the open data used here. None of them is linked with Modern Age Coders, and the analysis is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing skills',
    h2: 'From guessing games at seven to neural networks at seventeen',
    intro: 'The free lesson shows where to begin; the school years are only a rough match.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Thinking in steps', p: 'Patterns, puzzles and instructions, with plenty away from the screen.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Making with AI', p: 'Scratch built with an AI, then the first Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'How AI learns', p: 'Neural networks and machine learning written in Python.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Python and generative AI', p: 'Strong Python, then generative AI understood from the inside.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Networks and AI',
    h2: 'What is weight initialisation, and why does it decide whether an AI model learns?',
    intro: 'Weight initialisation is the choice of the numbers a neural network holds before training begins, and it decides whether the model learns because zero or identical starting weights stop its units from ever becoming different, while badly scaled ones jam them at their limits.',
    p1: 'Learning Ramsgate\'s land heights, the same small network scored 10.37 m error from all-zero weights, 7.48 m from equal weights, 1.97 m from Xavier weights and 59.08 m from very large ones.',
    p2: 'A learner who has watched 32 units turn into one asks of any AI model not just what it was trained on, but how it was set up to learn.',
    closer: 'Ramsgate teenagers who can build and break a network themselves understand AI well enough to direct it, and that understanding begins with writing code.',
    blogAnchor: 'why understanding code still matters for young people in 2026'
  },

  delivery: {
    eyebrow: 'How it runs',
    h2: 'How lessons for Ramsgate work',
    intro: 'Lessons take place live on video. A laptop or desktop with a keyboard is needed; tablets and phones are not practical for writing programs.',
    cells: [
      { h3: 'Hands on keyboard', p: 'Learners write and run their own code, with the tutor prompting rather than typing.' },
      { h3: 'Right level first', p: 'We decide where to start from what the free lesson shows.' },
      { h3: 'Nothing to pay upfront', p: 'The trial is free, and no card is requested.' },
      { h3: 'Small groups', p: 'Five to ten learners at a matching level, from across the UK.' },
      { h3: 'Weekly routine', p: 'Two lessons a week during term, about eight a month, holidays skipped on request.' },
      { h3: 'Time that stays put', p: 'Our tutors absorb the UK clock changes, not your timetable.' }
    ],
    spec: { title: 'Why teaching is online', p: 'A group at one exact level is simple to form from the whole UK and hard to form from one town, and video needs no travel.' }
  },

  fees: {
    h2: 'Fees for Ramsgate learners',
    intro: 'Ramsgate learners pay our standard fee for students living outside India.',
    first: 'First lesson: free, a full session, ending with a course recommendation.',
    group: 'Group classes, about eight a month.',
    private: 'Private lessons, about eight a month.',
    closer: 'We charge in US dollars and do not list pound prices. The trial is free, and payments begin only after a course and a regular time have been agreed. The pricing page explains holidays, missed lessons and changing between group and private.'
  },

  reviewsH2: 'Reviews on Google from Kent families and learners around the country',

  book: {
    h2: 'Book a free Ramsgate lesson',
    intro: 'Share the learner\'s age or school year and what they like doing. A first lesson could be a pattern puzzle, a Scratch game built with AI, some beginner Python, or training a tiny network on Ramsgate heights.',
    success: 'Thanks. Your Ramsgate request is with us.'
  },

  faq: {
    h2: 'Ramsgate questions',
    intro: 'Neural networks, coding, AI and how lessons work.',
    items: [
      { q: 'How many people live in Ramsgate?', a: 'The ONS counted 42,030 usual residents in the Ramsgate built-up area at the 2021 census. The Thanet district had 140,587.' },
      { q: 'Can learners in Ramsgate, Newington and Pegwell join coding and AI classes?', a: 'Yes. Anyone aged 6 to 67 in Ramsgate, Newington, Pegwell, Nethercourt or elsewhere in Thanet can join, as every lesson is live online.' },
      { q: 'Why can a network not learn from all-zero weights?', a: 'Because every hidden unit then outputs the same value and receives the same correction, so the units never become different; with tanh and zero weights the correction to them is zero from the start.' },
      { q: 'What is Xavier initialisation?', a: 'A way of choosing random starting weights with a spread based on how many connections go into and out of each layer, so signals keep a sensible size as they pass through the network.' },
      { q: 'What did the Ramsgate project find?', a: 'Predicting land height, the same network reached 1.97 m error with Xavier weights, 10.37 m with all zeros, no better than guessing the average, and 59.08 m with very large weights.' },
      { q: 'What is vibe coding?', a: 'Describing to an AI what you want a program to do, then checking, running and repairing the code it produces. We teach it next to Python written by the learner.' },
      { q: 'When are AI agents taught?', a: 'After a learner can write Python on their own, often from sixteen or as an adult. Copilot Studio agents are one-to-one only.' },
      { q: 'Does this support GCSE computer science?', a: 'Programming, data and how computers learn from data appear across GCSE and A level computer science, and the project draws on all of them. We do not promise grades.' },
      { q: 'What are the fees?', a: 'The first lesson is free, then USD 100 a month in a group or USD 150 a month for private lessons.' },
      { q: 'Can lessons stop for school holidays?', a: 'Yes. Tell us the holiday weeks and we will leave them free.' }
    ]
  },

  next: {
    eyebrow: 'Related pages',
    h2: 'More in Kent and the South East',
    html: 'We also cover <a class="cg-inline-link" href="/online-coding-and-python-classes-in-margate">Margate</a>, <a class="cg-inline-link" href="/best-coding-class-in-canterbury">Canterbury</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-folkestone">Folkestone</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-rochester">Rochester</a>. The full picture is on <a class="cg-inline-link" href="/coding-classes-in-kent">the Kent page</a>, <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">our South East page</a> and <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">the UK page</a>.',
    waLabel: 'Message on WhatsApp'
  },

  footerHeading: 'Ramsgate and Kent',
  footerPlaces: [
    { href: '/coding-classes-in-kent', label: 'Kent' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-rmg .cg-hero-grid { align-items: start; gap: clamp(0.95rem, 2.4vw, 2rem); }
.cg-root.cg-rmg .cg-hero h1 { font-weight: 790; letter-spacing: -0.026em; line-height: 1.08; }
.cg-root.cg-rmg .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.8rem 0; }
.cg-root.cg-rmg .cg-eyebrow { letter-spacing: 0.11em; font-weight: 690; text-transform: uppercase; font-size: 0.83rem; }
.cg-root.cg-rmg .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.017em; }
.cg-root.cg-rmg .cg-table caption { font-weight: 570; text-align: left; font-size: 0.91rem; }
.cg-root.cg-rmg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rmg .cg-table td:last-child { font-style: italic; }
.cg-root.cg-rmg .cg-ladder-col { border: 1px solid color-mix(in srgb, var(--cg-accent) 35%, transparent); border-radius: 6px; padding: 0.7rem; }
.cg-root.cg-rmg .cg-callout { border-left-width: 4px; border-radius: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Thanet (E07000114), Census 2021 TS001 usual residents 140,587. ONS 2021 BUA (published): Ramsgate 42,030. English national curriculum, GCSE and A level. postcodes.io suburban areas with nearest postcode in the Ramsgate BUA: Newington, Pegwell, Nethercourt, Northwood, Haine, Chilton; Dumpton and Westwood (Broadstairs BUA), Cliffs End and Manston excluded.',
    localProject: 'Weight initialisation of a small tanh network fitting land height. OpenTopoData eudem25m, 41 x 41 grid over 51.322 to 51.362 N, 1.370 to 1.440 E: 1,681 points, 340 sea, 15 at or below 0.5 m dropped, 1,326 land (mean 40.72 m, max 56.05 m); 266 test points. 2-32-32-1 tanh, Adam 0.01, 3,000 steps. Test RMSE: mean guess 10.37 m; zeros 10.37 m (1 distinct unit); all 0.5 7.48 m (1 distinct unit); sd 0.001 2.18 m; Xavier 1.97 m; sd 10 59.08 m, 65% saturated.',
    requiredMentions: [
      '42,030',
      'Newington',
      'Pegwell',
      'Nethercourt',
      'weight initialisation',
      '1,326 points on land',
      '7.48 m',
      '59.08 m',
      'Glorot and Bengio'
    ],
    sources: [
      { claim: 'OpenTopoData, eudem25m dataset (EU-DEM v1.1, Copernicus Land Monitoring Service), heights for a 41 by 41 grid round Ramsgate.', url: 'https://www.opentopodata.org/datasets/eudem/' },
      { claim: 'Glorot X. and Bengio Y. (2010), Understanding the difficulty of training deep feedforward neural networks, AISTATS, PMLR 9, 249 to 256.', url: 'https://proceedings.mlr.press/v9/glorot10a.html' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations and output-area lookup.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for Thanet.', url: 'https://api.postcodes.io/places?q=Pegwell' }
    ],
    rejectedClaims: [
      'Heights of cliffs, the harbour or named landmarks: a 25 m elevation model cannot resolve them; not claimed.',
      'That Xavier is always the right choice: only this run is reported; ReLU networks usually use He initialisation, not tested here.',
      'That the tiny start fails in general: here Adam rescued it; stated.',
      'Dumpton, Westwood, Cliffs End and Manston as Ramsgate suburbs: outside the BUA by nearest postcode; left out.',
      'Named schools and term dates: none read or named.',
      'Sterling prices: none.'
    ]
  }
};
