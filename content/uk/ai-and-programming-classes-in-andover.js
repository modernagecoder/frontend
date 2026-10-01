'use strict';
// Andover (cg- town page, UK cluster Phase 10, towns band B, row 520). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: what should a model do when the thing it
// predicts is a count that cannot go below zero? (Poisson regression with a log link against a straight line, judged
// on squares the model has not seen).
// Data (read 30 September 2026): OpenStreetMap roads (trunk down to residential and living streets, with link roads)
// from one Overpass query for the box 51.180 to 51.245 north, 1.545 to 1.425 west; OS Code-Point Open, dataset
// version 2026.3.0, SP area file.
// Our run (scratchpad adv/pr.py): National Grid squares of 500 m, eastings 432000 to 440000 and northings 142500 to
// 149500, 16 by 14 = 224 squares. Postcodes with a position inside the grid: 1,366 (SP10 959, SP11 407). Road length
// inside the grid: 303.0 km. 88 squares hold no postcode, 42 hold no road, the fullest holds 76; mean 6.1, variance
// 99.6. Straight line by least squares: postcodes = -1.36 + 5.52 x road km; 55 squares predicted below zero; mean
// absolute error 3.35. Poisson regression on road km (our iteratively reweighted least squares): never below 1.37,
// 1.98 times as many per extra km, highest prediction 94.7, mean absolute error 3.94. Poisson regression on the
// logarithm of road km (plus 0.05): exponent 1.53, prediction for an empty square 0.03, mean absolute error 2.99.
// Held-out test, 200 random 70/30 splits (seed 20260930), mean absolute error on unseen squares: line 3.48, Poisson
// on km 4.49 (line ahead in 193 splits), Poisson on log km 3.16 (ahead of the line in 193 splits). Spread of the
// line's misses by third of predicted size: 0.75, 2.16, 9.88. Pearson dispersion 3.1 for the log model.
// Lesson family: Poisson regression (count data, log link).
// Place facts: Test Valley (E07000093) TS001 130,492. ONS 2021 BUAs wholly inside it (published): Andover 48,480;
// Romsey 19,920; North Baddesley 7,000.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ANDOVER', label: 'Andover', blurb: 'AI and programming classes for Andover in Hampshire, with a machine learning project on why a straight line predicts impossible negative counts.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-andover',
  code: 'adv',
  accent: '#3A6C0A',
  accentRationale: 'Andover: a deep leaf green (6.3:1 contrast on white), selected by hand to stand apart from accents in use',
  pageType: 'city',
  place: {
    name: 'Andover',
    eyebrow: 'Andover, Test Valley, Hampshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Hampshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Hampshire', href: '/coding-classes-in-hampshire' },
    { label: 'Basingstoke', href: '/ai-and-programming-classes-in-basingstoke' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Andover, Hampshire',
  title: 'AI and Programming Classes in Andover, Hampshire | Ages 6 to 67',
  description: 'AI, programming, Python and vibe coding classes taught live online for Andover, Charlton, Picket Piece, Anna Valley and Weyhill, ages 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Andover, Hampshire, with a machine learning project: Poisson regression against a straight line on 224 map squares.',
  twitterDescription: 'Andover, Hampshire: AI, programming, Python and vibe coding lessons online for ages 6 to 67. The first is free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Andover, Hampshire',
    description: 'AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Andover and the Test Valley, taught live online and tested on data the model has not seen.'
  },

  h1: 'AI and programming classes in Andover, Hampshire',
  capsuleQ: 'Where will an Andover learner find the best AI and programming classes?',
  capsule: 'In the ONS figures for the 2021 census the Andover built-up area has 48,480 residents and Test Valley borough 130,492. Charlton, Picket Piece, Anna Valley, Upper Clatford, Abbotts Ann and Weyhill are recorded around it as villages. We teach AI, programming, Python, vibe coding and maths on live video to learners from six years old to 67. Tutors are based in India. A lesson is either private or shared by five to ten learners at one level. We start from reasoning, so that a student can test a model\'s output instead of taking it on trust. The Andover project counts postcodes in 224 map squares and asks a model to predict the count from the length of road in each square, which a straight line does badly in an instructive way. There is no charge for lesson one, which closes with a course recommendation. After that a group place costs USD 100 a month and a private tutor USD 150 a month.',
  lead: 'Draw a straight line through some data and sooner or later it predicts something that cannot happen. Ask it how many postcodes lie in a field with no road and it may answer minus one. Nobody has ever found minus one postcodes. Counts start at zero and go up in whole steps, and a model built for counts should know that. Poisson regression is the standard one. It is taught on university statistics courses, but the idea is within reach of a teenager who can plot a graph, and a grid laid over Andover and its villages supplies the ideal data: some squares packed with addresses, many with none at all.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a learner in Andover.',

  picks: {
    eyebrow: 'Andover starting points',
    h2: 'AI, programming and thinking courses for Andover',
    intro: 'Find the learner\'s age below. Each course starts with one free live lesson and no card is needed to reserve it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: guess how many houses are on a street, then say why the guess can never be below nought.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Have an AI build a Scratch counting game and catch the moment the score goes negative.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'How models learn from data, including Poisson regression on Andover\'s map squares.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web work with an AI assistant, scored on examples it was not shown.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Test Valley',
      h2: 'Andover, Romsey and North Baddesley',
      intro: 'The borough\'s built-up areas of 6,000 or more that lie wholly inside it, and the villages around Andover in postcode data.',
      body: [
        { kind: 'table', caption: 'Built-up areas wholly in Test Valley with at least 6,000 residents, ONS, 2021 census', head: ['Built-up area', 'Residents, 2021'], rows: [
          ['Andover', '48,480'],
          ['Romsey', '19,920'],
          ['North Baddesley', '7,000']
        ] },
        { kind: 'p', text: 'All three figures are the ONS\'s own and we have not summed them. The borough figure, 130,492, is a separate count from the census. One further built-up area lies partly in a neighbouring district and is left out. postcodes.io records Charlton, Picket Piece, Anna Valley, Upper Clatford, Abbotts Ann, Enham Alamein, Penton Mewsey, Weyhill and Goodworth Clatford as villages in Test Valley, and Knights Enham and East Anton as hamlets. Hampshire schools follow the national curriculum for England. Give us the term dates and we will plan round them.' },
        { kind: 'callout', h3: 'Hampshire, the South East and our teaching', p: 'The county is covered on <a class="cg-inline-link" href="/coding-classes-in-hampshire">coding classes in Hampshire</a> and the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>. Our view that thinking has to come before tools is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Andover project',
      h2: 'Poisson regression on 224 map squares',
      intro: 'Count the postcodes in each square, measure its roads, fit three models and test them on squares held back.',
      body: [
        { kind: 'p', text: 'The learner lays a grid of 500 m National Grid squares over Andover and the villages round it, 16 across and 14 up, 224 in all. Two open datasets fill it in. Code-Point Open from Ordnance Survey gives the position of 1,366 postcodes inside the grid, 959 of them in district SP10 and 407 in SP11. One Overpass request to OpenStreetMap gives the roads, 303.0 km of them inside the grid. The counts are lopsided, as counts usually are: 88 squares contain no postcode at all, and the fullest contains 76.' },
        { kind: 'table', caption: 'Three models predicting postcodes per square from road length (our Python fits; misses are mean absolute errors in postcodes)', head: ['Model', 'Prediction for a square with no road', 'Squares predicted below zero', 'Average miss, all squares', 'Average miss, unseen squares'], rows: [
          ['Straight line', '-1.36', '55', '3.35', '3.48'],
          ['Poisson regression on road km', '1.37', '0', '3.94', '4.49'],
          ['Poisson regression on log of road km', '0.03', '0', '2.99', '3.16']
        ] },
        { kind: 'p', text: 'The straight line says each kilometre of road adds 5.52 postcodes, starting from minus 1.36. For 55 of the 224 squares its answer is a negative number of postcodes. Poisson regression cannot do that. It predicts the logarithm of the count, and turning a logarithm back into a count always gives something above zero. But the first Poisson model is worse overall, and the reason is worth finding. Working in logarithms turns adding into multiplying, so it claims every extra kilometre of road nearly doubles the postcodes, by a factor of 1.98. For the busiest squares that runs away: its top prediction is 94.7 where the real maximum is 76.' },
        { kind: 'p', text: 'The repair is to give the model the logarithm of road length as well, so that both sides speak the same language. The fitted rule becomes a power law: postcodes grow as road length to the power 1.53. That model never goes negative, predicts 0.03 for an empty square, and has the smallest average miss. The column that matters most is the last. Each model was fitted on 70% of the squares and scored on the other 30%, 200 times over with different random splits. The straight line beat the first Poisson model in 193 of the 200. The log version beat the straight line in 193 of the 200. One more check keeps everyone honest: the counts vary about three times as much as a pure Poisson model expects, so its error bars would be too narrow, and a statistician would reach next for a model that allows extra spread.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Count dots in the squares of a printed grid, draw a line through the tallies, and spot the square where the line dips under nought.' },
          { h3: 'Ages 11 to 15', p: 'Build the grid in Python, fit a straight line, and list every square with a negative prediction.' },
          { h3: 'Ages 15 and up', p: 'Code Poisson regression from its update rule in NumPy, try both inputs, and run the 200 held-out splits.' }
        ] },
        { kind: 'callout', h3: 'Sources and what this does not show', p: 'Postcode positions contain OS data © Crown copyright and database right 2026 and Royal Mail data © Royal Mail copyright and database right 2026. Roads are © OpenStreetMap contributors under the Open Database Licence. The grid, the fits and the scores are ours. A postcode is not a household, and a square of another size or place would give other numbers. The models describe this one grid and predict nothing about future building.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Outputs with limits',
      h2: 'What counting postcodes teaches about AI and vibe coding',
      intro: 'A model should be built so that impossible answers cannot come out, and then still be tested.',
      body: [
        { kind: 'table', caption: 'From Andover\'s squares to AI in general', head: ['In the project', 'In AI practice'], rows: [
          ['55 squares predicted below zero', 'Check outputs against what is physically possible'],
          ['A log link made negatives impossible', 'Shape the model so bad answers cannot occur'],
          ['The first Poisson model did worse than the line', 'The right family with the wrong input still fails'],
          ['193 of 200 unseen splits', 'Judge on data the model never saw'],
          ['Three times the expected spread', 'Report where the assumptions do not hold']
        ] },
        { kind: 'p', text: 'The same device sits inside large language models. A language model works out a raw score for each possible next word, then passes the scores through an exponential so that they all become positive and can be read as probabilities. That is a log link by another name. When a student vibe codes a prediction tool, the assistant will nearly always hand back a straight-line fit, because that is the commonest example it has seen. It will not mention that the fit can go negative, or that a count needs different treatment. Andover learners know to ask, and know how to settle the matter with a held-out test. AI agents are the next stage for those who can write Python unaided, which usually means sixth-formers and adults; Copilot Studio agents are taught in private lessons only. Read <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents: a UK student pathway</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Neither Ordnance Survey, Royal Mail, OpenStreetMap, the Office for National Statistics nor postcodes.io has reviewed or backed this page. Their open data made the project possible and the conclusions are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Steps',
    h2: 'From tally charts to model fitting',
    intro: 'We use school years as a rough guide and the free lesson as the real test of level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Counting, estimating and noticing when an answer makes no sense.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Simple projects an AI drafts and the learner corrects.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, models and AI', p: 'Fitting and testing models on real data, beside GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Applied machine learning', p: 'Python basics first, then generative AI and agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and counting',
    h2: 'What is Poisson regression?',
    intro: 'Poisson regression is a method for predicting counts, such as how many of something fall in an area, that models the logarithm of the expected count as a straight-line function of the inputs, so that no prediction can fall below zero.',
    p1: 'On 224 squares around Andover a straight line predicted a negative number of postcodes in 55 of them; Poisson regression on the logarithm of road length predicted none below zero and had the smaller average miss on unseen squares, 3.16 against 3.48.',
    p2: 'A careless Poisson model fed raw road length did worse than the line, at 4.49, which shows that choosing the right kind of model is only half the work.',
    closer: 'Andover teenagers who have run that comparison look at any AI prediction and check two things: could this output even exist, and was it tested on fresh data? Both habits come from building models in code, and they are good reasons to learn programming in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Day to day',
    h2: 'Charlton, Picket Piece and Anna Valley in one online class',
    intro: 'The only equipment is a computer with a webcam and a connection good enough for video.',
    cells: [
      { h3: 'Student at the controls', p: 'The tutor sees the learner\'s screen and asks questions. The learner writes every line and runs it.' },
      { h3: 'Placed by what we see', p: 'In the free lesson we find out what a learner can already do, and which exam board applies.' },
      { h3: 'A free first class', p: 'It runs the full time, needs no card, and ends with the course we would choose.' },
      { h3: 'Level-matched classes', p: 'Groups of five to ten, all at one stage, drawn from the whole UK.' },
      { h3: 'Two a week', p: 'We skip any holiday weeks you tell us about.' },
      { h3: 'Same hour all year', p: 'British Summer Time is our tutors\' problem; your lesson time does not move.' }
    ],
    spec: { title: 'Why not in person?', p: 'A class at one level needs enough learners at that level. A town and its villages cannot always provide them, and the whole country can.' }
  },

  fees: {
    h2: 'Andover lesson prices',
    intro: 'Andover families pay the international rates we charge everywhere except India.',
    first: 'A full live lesson free of charge, ending with a course recommendation.',
    group: 'Eight or so live lessons a month in a small group.',
    private: 'Eight or so live lessons a month, private.',
    closer: 'Every price is in US dollars and none is given in sterling. Invoicing starts only after the trial, when the course and weekly time are fixed. Holidays, absences and format changes are dealt with on the pricing page.'
  },

  reviewsH2: 'Hampshire families and UK learners, in their Google reviews',

  book: {
    h2: 'Reserve a free Andover lesson',
    intro: 'All we need is an age or year and one interest. A trial can be a counting puzzle on a grid, a Scratch game drafted by AI, the first lines of Python, or a first model fitted to real data.',
    success: 'Thanks. Your Andover request is with us and we will be in touch.'
  },

  faq: {
    h2: 'Andover: common questions',
    intro: 'Poisson regression, the grid project, AI, programming and arrangements.',
    items: [
      { q: 'What is the population of Andover?', a: 'The ONS recorded 48,480 usual residents in the Andover built-up area at the 2021 census, and 130,492 in Test Valley.' },
      { q: 'Are online AI and programming classes available in Andover?', a: 'Yes. Live video lessons for ages 6 to 67 cover Andover, Charlton, Picket Piece, Anna Valley, Weyhill and the other Test Valley villages.' },
      { q: 'What is count data?', a: 'Data made of whole numbers that record how many times something occurred, such as visits, goals or postcodes in a square. Counts cannot be negative or fractional.' },
      { q: 'What is a held-out test?', a: 'Keeping part of the data aside while a model is fitted, then scoring the model on that unseen part. It shows how the model copes with new cases instead of ones it has memorised.' },
      { q: 'What do learners build in the Andover project?', a: 'A 224-square grid in Python with postcode counts and road lengths, three models that predict one from the other, and a test on unseen squares that picks the winner.' },
      { q: 'Do you teach vibe coding too?', a: 'Yes, to all ages. The learner directs an AI and then checks its work line by line.' },
      { q: 'How soon can someone build AI agents?', a: 'As soon as they write Python on their own, which is normally sixth form or adulthood. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Is there help for GCSE and A level?', a: 'Yes, in computer science and maths. We teach for understanding and promise no particular grade.' },
      { q: 'How much do lessons cost?', a: 'The first is free. Group lessons are USD 100 a month after that and private lessons USD 150 a month.' },
      { q: 'Do you pause for holidays?', a: 'Yes, for any dates you send.' }
    ]
  },

  next: {
    eyebrow: 'More of Hampshire',
    h2: 'Other Hampshire and South East pages',
    html: 'Pages with different projects include <a class="cg-inline-link" href="/ai-and-programming-classes-in-basingstoke">Basingstoke</a> and <a class="cg-inline-link" href="/best-coding-class-in-winchester">Winchester</a>, and the county page is <a class="cg-inline-link" href="/coding-classes-in-hampshire">Hampshire</a>. For anywhere else, start at the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Andover and Hampshire',
  footerPlaces: [
    { href: '/coding-classes-in-hampshire', label: 'Hampshire' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-adv .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.6vw, 2.9rem); }
.cg-root.cg-adv .cg-hero h1 { font-weight: 710; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-adv .cg-capsule { border-bottom: 3px double var(--cg-accent); padding-bottom: 0.95rem; }
.cg-root.cg-adv .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; font-size: 0.81rem; }
.cg-root.cg-adv .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.015em; }
.cg-root.cg-adv .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 500; }
.cg-root.cg-adv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-adv .cg-table th { font-size: 0.82rem; font-weight: 700; letter-spacing: 0.02em; }
.cg-root.cg-adv .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-adv .cg-callout { border-left-width: 4px; border-radius: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Test Valley (E07000093), Census 2021 TS001 usual residents 130,492. ONS 2021 BUAs of 6,000+ wholly inside Test Valley (published): Andover 48,480; Romsey 19,920; North Baddesley 7,000. Chandler\'s Ford straddles the boundary with Eastleigh and is excluded. postcodes.io (Test Valley): Andover (town); Charlton, Picket Piece, Anna Valley, Upper Clatford, Abbotts Ann, Enham Alamein, Penton Mewsey, Weyhill, Goodworth Clatford (villages); Knights Enham, East Anton (hamlets).',
    localProject: 'OSGB 500 m grid 432000-440000 E, 142500-149500 N: 16 x 14 = 224 squares. OS Code-Point Open 2026.3.0: 1,366 postcodes with a position in the grid (SP10 959, SP11 407). OpenStreetMap roads (trunk to residential) via one Overpass query, box 51.180-51.245 N, 1.545-1.425 W: 303.0 km in the grid. 88 squares with no postcode, 42 with no road, maximum 76, mean 6.1, variance 99.6. Least-squares line: -1.36 + 5.52 x km; 55 negative predictions; MAE 3.35. Poisson regression (IRLS) on km: minimum 1.37, x1.98 per km, maximum prediction 94.7, MAE 3.94. Poisson on log(km + 0.05): exponent 1.53, empty-square prediction 0.03, MAE 2.99. 200 random 70/30 splits (seed 20260930), held-out MAE: line 3.48; Poisson km 4.49 (line ahead in 193); Poisson log km 3.16 (ahead of the line in 193). Line residual spread by third: 0.75, 2.16, 9.88. Pearson dispersion about 3.1 (overdispersed). Lesson family: Poisson regression, count data, log link, held-out testing.',
    requiredMentions: [
      '48,480',
      '130,492',
      'Picket Piece',
      'Anna Valley',
      'Upper Clatford',
      'Abbotts Ann',
      'Enham Alamein',
      'Penton Mewsey',
      'Poisson regression',
      '1,366',
      '303.0'
    ],
    sources: [
      { claim: 'OS Code-Point Open, dataset version 2026.3.0: postcode unit positions for the SP area.', url: 'https://www.ordnancesurvey.co.uk/products/code-point-open' },
      { claim: 'OpenStreetMap roads (ODbL) fetched through the Overpass API for a box around Andover.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: villages and hamlets in Test Valley.', url: 'https://api.postcodes.io/places?q=Picket%20Piece' }
    ],
    rejectedClaims: [
      'That postcodes measure households or population: not claimed; stated as a caveat.',
      'Which named area holds the fullest square: not published; the grid is ours.',
      'Any forecast of housing growth around Andover: not made.',
      'Chandler\'s Ford as a Test Valley town: it straddles two districts; excluded.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
