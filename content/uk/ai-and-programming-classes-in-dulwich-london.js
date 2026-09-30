'use strict';
// Dulwich, Southwark (cg- district page, UK cluster Phase 9, row 448). Keyword slug per the owner's 2026-09-30 decision
// (rotation with city suffix), with the vibe coding / AI agents / how-to-think picks, FAQ and door links.
// Spine: why does a model get worse as it gets bigger, fall apart when it is exactly big enough to memorise its training
// data, and then improve again when it is made far bigger still? (double descent, the interpolation threshold,
// minimum-norm solutions, and whether the second descent actually wins).
// Data (read 30 September 2026): Nomis Census 2021 for all 959 output areas in Southwark: TS006 population density,
// TS017 household size (one-person share), TS044 accommodation type (flat share), TS045 car or van availability (no-car
// share); ONS OA to LSOA and LSOA 2021 to ward (May 2022) best-fit lookups. 156 of the 959 areas are best-fitted to the
// wards Dulwich Village (28), Dulwich Wood (27), Dulwich Hill (32), Goose Green (39) and Champion Hill (30), with 20,953
// households between them. The experiment uses the whole borough.
// Our run (scratchpad dlw/dlw3.py): predict an area's no-car share from log density, one-person share and flat share
// (standardised). The three inputs are expanded into N random ReLU features and fitted by minimum-norm least squares
// (pseudo-inverse) on 100 training areas; error measured on the other 859; median over 30 random seeds. Test RMSE in
// percentage points by N: 5: 10.85; 10: 9.63; 20: 10.17; 40: 13.05; 80: 49.2; 100: 494.87; 120: 78.25; 200: 32.01; 1,000:
// 18.27; 10,000: 15.59. Training RMSE: 9.42, 8.26, 7.68, 6.44, 3.65, 0.98, then 0.0 from 120 on. Predicting the training
// mean for every area: 14.91. With a small ridge penalty (0.001): 10.85, 9.61, 9.74, 11.19, 12.46, 12.55, 12.50, 12.36,
// 11.95 (to 1,000 features). The second descent is real but never returns to the 9.63 of the small model, and does not
// even beat the mean-only 14.91.
// Lesson family: double descent in over-parameterised models. Screened 30 September 2026: "double descent" 0 hits; claimed
// in claims.txt as dlw. Wimbledon owns nested cross-validation, Roundhay hyperparameter tuning; Southwark borough page =
// golden ratio, not reused.
// Place facts: Census 2021 usual residents by 2022 ward, per ward, never summed: Dulwich Village 10,255; Dulwich Wood
// 10,588; Dulwich Hill 9,591; Goose Green 13,612; Champion Hill 9,219. postcodes.io (Southwark): Dulwich and Dulwich
// Village (SE21), East Dulwich (SE22), Herne Hill (SE24), Nunhead (SE15).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'DULWICH', label: 'Dulwich', blurb: 'AI and programming classes for Dulwich, with a project in which a model is made steadily bigger and its errors rise, explode and fall again: double descent, measured on Southwark Census data.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-dulwich-london',
  code: 'dlw',
  accent: '#7B3F61',
  accentRationale: 'Dulwich: a mulberry (7.6:1 contrast), chosen by hand and unused elsewhere in the cluster',
  pageType: 'city',
  place: {
    name: 'Dulwich',
    eyebrow: 'Dulwich, Southwark, London',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'Southwark', href: '/coding-classes-in-southwark-london' },
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Dulwich, London',
  title: 'AI and Programming Classes in Dulwich | Ages 6 to 67',
  description: 'Live online AI, programming, Python and maths classes for ages 6 to 67 in Dulwich, Dulwich Village, East Dulwich, Herne Hill and Nunhead. First lesson free.',
  ogDescription: 'AI and programming classes for Dulwich, with a double descent project: a model grown from 5 features to 10,000 on Southwark Census data.',
  twitterDescription: 'Dulwich AI, programming, Python and maths classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Dulwich',
    description: 'Online AI, programming, Python and maths for children, teenagers and adults in Dulwich and the borough of Southwark, taught live with every model tested on data it has not seen.'
  },

  h1: 'AI and programming classes in Dulwich',
  capsuleQ: 'Where do Dulwich learners find the best AI and programming classes?',
  capsule: 'Three wards of the London Borough of Southwark carry the Dulwich name: Dulwich Village, which had 10,255 residents at the 2021 census, Dulwich Wood with 10,588 and Dulwich Hill with 9,591. Goose Green ward had 13,612, and East Dulwich, Herne Hill and Nunhead are recorded as places in the borough. We teach AI, programming, Python, vibe coding and maths to Dulwich learners between six and 67 by live video from India, privately or in a class of five to ten who are at one level. Every model a learner builds is judged on data it was not trained on. A first Dulwich lesson is free and closes with our suggestion of a course. The Dulwich project grows one model from 5 features to 10,000 on Census data for 959 Southwark areas and watches its error rise, explode and come back down, a pattern called double descent. From then on a class place is USD 100 a month, and private lessons are USD 150 a month.',
  lead: 'The old advice in machine learning was simple: a model that is too small misses the pattern, a model that is too big memorises noise, so pick one in the middle. Then very large neural networks arrived, with far more adjustable numbers than training examples, and worked anyway. The explanation is a curve with two dips. Error falls, rises to a sharp peak at the point where the model is just big enough to fit the training data exactly, the interpolation threshold, and then falls a second time as the model grows past it. This project reproduces the whole curve in a few dozen lines of Python, and checks something the headlines skip: whether the second dip is actually lower than the first.',
  wa: 'Hello Modern Age Coders, may we book a free AI or programming lesson for a learner in Dulwich?',

  picks: {
    eyebrow: 'Dulwich course picks',
    h2: 'AI and programming courses for Dulwich learners',
    intro: 'Choose by the age of the Dulwich learner. The first live lesson of each course is free, with no card details taken.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Learning how to think: spotting a rule, then asking whether it holds on a new example.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'Python from the first line, with small models that learn from a table of numbers.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning built by hand: training sets, test sets and the double descent curve.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How large models are built and why their size behaves so strangely.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Dulwich and Southwark',
      h2: 'Dulwich Village, Dulwich Wood, Dulwich Hill and East Dulwich',
      intro: 'Ward counts from the 2021 census, with the SE21, SE22 and SE24 place names.',
      body: [
        { kind: 'table', caption: 'Five Southwark wards chosen for this page, at the 2021 census (ONS, via Nomis; 2022 wards)', head: ['Ward', 'Residents (2021)'], rows: [
          ['Dulwich Village', '10,255'],
          ['Dulwich Wood', '10,588'],
          ['Dulwich Hill', '9,591'],
          ['Goose Green', '13,612'],
          ['Champion Hill', '9,219']
        ] },
        { kind: 'p', text: 'These are five separate published counts, and we keep them separate: Dulwich has no single official edge, so there is nothing for a total to describe. Postcodes.io lists Dulwich and Dulwich Village in SE21, East Dulwich in SE22, Herne Hill in SE24 and Nunhead in SE15, each in Southwark. State schools in Southwark teach the national curriculum for England; give us a Dulwich learner\'s term dates and the holidays stay free of lessons.' },
        { kind: 'callout', h3: 'Southwark, London and how we teach', p: 'For the borough, read <a class="cg-inline-link" href="/coding-classes-in-southwark-london">coding classes in Southwark</a>; for the capital, the <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a>. Why thinking is taught ahead of tools is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Dulwich project',
      h2: 'Double descent: one model, grown from 5 features to 10,000',
      intro: 'Make the model bigger step by step, and measure its error each time on areas it has never seen.',
      body: [
        { kind: 'p', text: 'The Census divides Southwark into 959 output areas, 156 of them in the five wards above, where they hold 20,953 households. For every area in the borough we took three facts, its population density, its share of one-person households and its share of flats, and asked a model to predict a fourth: the share of households with no car. The model sees only 100 areas chosen at random and is tested on the other 859. Its size is set by one number, how many random features it builds from the three inputs. Each size is run 30 times with different random choices and the middle result is reported.' },
        { kind: 'table', caption: 'Error in percentage points by model size, 100 training areas, 859 test areas, our Python run on Census 2021 data', head: ['Features', 'Error on training areas', 'Error on unseen areas'], rows: [
          ['5', '9.42', '10.85'],
          ['10', '8.26', '9.63'],
          ['20', '7.68', '10.17'],
          ['40', '6.44', '13.05'],
          ['80', '3.65', '49.2'],
          ['100', '0.98', '494.87'],
          ['120', '0.0', '78.25'],
          ['200', '0.0', '32.01'],
          ['1,000', '0.0', '18.27'],
          ['10,000', '0.0', '15.59']
        ] },
        { kind: 'p', text: 'Read down the last column. With 10 features the model is at its most accurate, 9.63 points out on areas it has not seen. After that, more features help it on the training areas and hurt it everywhere else, which is ordinary overfitting. At 100 features, exactly one per training area, it can fit every training value almost perfectly, and to do so it has only one possible set of weights, a wild one: the typical error on unseen areas is 494.87 points, for a quantity that can only lie between 0 and 100. Past that threshold something changes. With more features than areas there are many ways to fit the training data exactly, the method picks the gentlest of them, and the error falls again: 78.25, 32.01, 18.27, 15.59.' },
        { kind: 'p', text: 'That second fall is double descent, and it is real. But look at where it ends. At 10,000 features the error is 15.59, which is worse than the 9.63 of the ten-feature model and worse even than the 14.91 you get by ignoring the inputs and guessing the training average every time. On this small, noisy problem the giant model recovers from the peak without ever catching the small one. A tiny penalty on large weights, called ridge, removes the peak altogether, 12.55 at 100 features instead of 494.87, and still the lowest it reaches, at 1,000 features, is 11.95. Bigger can be better; here it was not, and only the test told us.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw a wiggly line through every dot on a chart, then see how badly it guesses a new dot.' },
          { h3: 'Ages 11 to 15', p: 'Split the Southwark table into training and test areas in Python and score a simple model.' },
          { h3: 'Ages 15 and up', p: 'Code random features and the minimum-norm fit, plot both descents and add ridge.' }
        ] },
        { kind: 'callout', h3: 'Census inputs, our experiment', p: 'The area figures are Office for National Statistics Census 2021 data from Nomis, under the Open Government Licence. They describe output areas of roughly a hundred or more households, never a person or a home. The features, fits and error figures are our own, and a different random split would move them a little.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Programming and AI',
      h2: 'What this teaches about AI and programming',
      intro: 'Size is a setting with consequences, and the consequences have to be measured.',
      body: [
        { kind: 'table', caption: 'From the Dulwich curve to real AI systems', head: ['In the Southwark experiment', 'In AI more widely'], rows: [
          ['Training error hit 0.0 from 120 features', 'A perfect fit to training data proves little'],
          ['Unseen error peaked at 494.87', 'The risky size is "just big enough"'],
          ['It fell again to 15.59 at 10,000', 'Very large models can generalise'],
          ['Ten features still won, at 9.63', 'A small model may suit a small problem'],
          ['Ridge cut the peak to 12.55', 'Gentle constraints tame a model']
        ] },
        { kind: 'p', text: 'Today\'s language models live far out on the right of this curve, with vastly more adjustable numbers than a classroom could count, and the second descent is part of why they work. The Dulwich experiment gives learners the other half of the story: on a modest problem, a modest model can be the accurate one, and no rule of thumb replaces a held-back test set. We use the same discipline when Dulwich learners vibe code, stating what they want for an AI to write: the code is accepted when it passes a test the learner devised, never because it looks finished. AI agents come later, after Python is written with confidence, mostly from sixteen upward, and Copilot Studio agents are taught one-to-one only. More on that: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents course for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is independent of the Office for National Statistics, Nomis and postcodes.io, none of which has reviewed this page. Their published open data is all we drew on.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From wiggly lines to models tested properly',
    intro: 'We use a Dulwich learner\'s school year to propose a stage, then let the trial lesson decide.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Rules, exceptions and checking a guess against a fresh case.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and first AI', p: 'Typed code and small models that learn from examples.', courses: ['python-ai-kids-masterclass', 'vibe-coding-for-kids-beginners-ai-scratch-game-dev'] },
      { band: 'Years 9 to 13', h3: 'Machine learning', p: 'Training, testing and overfitting beside GCSE and A level work.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Large models', p: 'How generative AI is built, and the mathematics underneath it.', courses: ['complete-generative-ai-masterclass-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and model size',
    h2: 'What is double descent in machine learning?',
    intro: 'Double descent is the pattern in which a model\'s error on new data falls, climbs to a peak when the model is just large enough to fit its training data exactly, and then falls a second time as the model grows larger still.',
    p1: 'On Census data for 959 Southwark areas, a model trained on 100 of them was 9.63 points out with 10 features, 494.87 with 100, and 15.59 with 10,000: the second descent happened but never beat the first.',
    p2: 'Anyone who has plotted that curve stops asking "how big is the model?" and asks instead "how did it do on data it had never seen, and what simpler model was it compared with?"',
    closer: 'For a Dulwich teenager, writing the experiment in Python turns a surprising fact about AI into something they have checked, and checking is the skill that lasts.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Herne Hill to Nunhead, on a live call',
    intro: 'All a Dulwich learner needs is a computer with a camera and a connection steady enough for video.',
    cells: [
      { h3: 'Code written by the learner', p: 'Nothing is typed for the Dulwich student. The tutor shares the view and asks how the result was tested.' },
      { h3: 'The trial finds the level', p: 'One lesson shows us what is secure, where to start and which exam board applies.' },
      { h3: 'First Dulwich lesson free', p: 'It runs to full length and ends with a course we would choose.' },
      { h3: 'One level per class', p: 'Five to ten learners, drawn from the whole UK, at a single stage.' },
      { h3: 'Two sessions weekly', p: 'Holiday weeks are taken out of the calendar.' },
      { h3: 'Same hour all year', p: 'The tutor moves with British clock changes; you do not.' }
    ],
    spec: { title: 'Why Dulwich lessons are online', p: 'Five SE21 or SE22 learners at one level, all free at the same hour, is a rare find. Across the UK by video, such a class forms easily.' }
  },

  fees: {
    h2: 'Dulwich fees',
    intro: 'A Dulwich family pays the international rate, identical in every country outside India.',
    first: 'A complete first lesson at no cost, plus a course suggestion.',
    group: 'Around eight live group lessons each month.',
    private: 'Around eight live private lessons each month.',
    closer: 'Our Dulwich prices are in US dollars, and no pound figure is published. The first payment is due only after the trial has agreed a course and a regular time. For holidays, absences and changing between a class and one-to-one, see the pricing page.'
  },

  reviewsH2: 'What Southwark families and UK learners say in Google reviews',

  book: {
    h2: 'Book a free Dulwich lesson',
    intro: 'Let us know the learner\'s age or year group and one thing they care about. The Dulwich trial is shaped to fit: a rule-spotting puzzle, a Scratch project, opening lines of Python, or a small model put to a fair test.',
    success: 'Thank you. Your Dulwich request has reached us.'
  },

  faq: {
    h2: 'Dulwich questions',
    intro: 'Model size, the Southwark experiment, AI, vibe coding and the running of Dulwich lessons.',
    items: [
      { q: 'How many people live in the Dulwich wards?', a: 'Census 2021 recorded 10,255 in Dulwich Village, 10,588 in Dulwich Wood and 9,591 in Dulwich Hill, with 13,612 in Goose Green and 9,219 in Champion Hill. Each is a separate published figure.' },
      { q: 'Do you run AI and programming classes online for Dulwich?', a: 'Yes, on live video for ages 6 to 67 in Dulwich, Dulwich Village, East Dulwich, Herne Hill and Nunhead.' },
      { q: 'What is the interpolation threshold?', a: 'The model size at which it can first fit every training example exactly. In the Dulwich project that is 100 features for 100 training areas, and it is where error on new data peaked.' },
      { q: 'What is overfitting?', a: 'Learning the quirks of the training examples instead of the pattern behind them, so the model scores well on data it has seen and badly on data it has not.' },
      { q: 'What happens in the Dulwich project?', a: 'Learners predict no-car shares for Southwark Census areas with models of 5 to 10,000 random features, chart training and test error, and find both descents of the double descent curve.' },
      { q: 'Does the project show that bigger models are better?', a: 'No. The 10,000-feature model recovered to 15.59 points of error, but the 10-feature model scored 9.63. On this data the small model won.' },
      { q: 'Do you teach vibe coding and AI agents?', a: 'Vibe coding at all ages, with the learner testing what the AI writes. Agents follow once Python is confident, usually from sixteen; Copilot Studio agents are one-to-one only.' },
      { q: 'Can you help with GCSE and A level?', a: 'With computer science and maths, yes, taught so the ideas are understood. We do not promise a grade.' },
      { q: 'What do Dulwich lessons cost?', a: 'Nothing for the trial; then USD 100 a month in a class or USD 150 a month for private lessons.' },
      { q: 'Do you teach in school holidays?', a: 'No. Share the dates and we leave those weeks out.' }
    ]
  },

  next: {
    eyebrow: 'Read on',
    h2: 'More Southwark and London pages',
    html: 'Every page has a project of its own: <a class="cg-inline-link" href="/coding-classes-in-southwark-london">Southwark</a> (the golden ratio), <a class="cg-inline-link" href="/coding-classes-in-lambeth-london">Lambeth</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-wimbledon-london">Wimbledon</a> (testing a model without fooling yourself) and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-chiswick-london">Chiswick</a> (lopsided data put on a better scale). All of the capital is on <a class="cg-inline-link" href="/best-coding-class-in-london">our London page</a>; all of Britain is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dulwich and Southwark',
  footerPlaces: [
    { href: '/coding-classes-in-southwark-london', label: 'Southwark' },
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-dlw .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 2.8vw, 2.4rem); }
.cg-root.cg-dlw .cg-hero h1 { font-weight: 790; letter-spacing: -0.022em; line-height: 1.03; }
.cg-root.cg-dlw .cg-capsule { border-left: 3px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 0 0 0.9rem 1.1rem; }
.cg-root.cg-dlw .cg-eyebrow { letter-spacing: 0.2em; font-weight: 650; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-dlw .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.024em; }
.cg-root.cg-dlw .cg-table caption { font-weight: 650; text-align: left; font-size: 0.91rem; letter-spacing: 0.01em; }
.cg-root.cg-dlw .cg-table td { font-variant-numeric: tabular-nums; text-align: right; }
.cg-root.cg-dlw .cg-table td:first-child { text-align: left; font-weight: 600; }
.cg-root.cg-dlw .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-dlw .cg-callout { border-left-width: 6px; border-radius: 4px; }
`,

  dossier: {
    curriculumAuthority: 'London Borough of Southwark (E09000028). Census 2021 usual residents by 2022 ward (per ward, not summed): Dulwich Village 10,255; Dulwich Wood 10,588; Dulwich Hill 9,591; Goose Green 13,612; Champion Hill 9,219. postcodes.io (Southwark): Dulwich and Dulwich Village (SE21), East Dulwich (SE22), Herne Hill (SE24), Nunhead (SE15).',
    localProject: 'Census 2021 TS006/TS017/TS044/TS045 for 959 Southwark OAs (156 in five Dulwich-area wards, 20,953 households). Random ReLU features, minimum-norm least squares, 100 train / 859 test, median of 30 seeds. Test RMSE: 5: 10.85; 10: 9.63; 20: 10.17; 40: 13.05; 80: 49.2; 100: 494.87; 120: 78.25; 200: 32.01; 1,000: 18.27; 10,000: 15.59. Train: 9.42, 8.26, 7.68, 6.44, 3.65, 0.98, 0.0. Mean-only 14.91. Ridge 0.001: 12.55 at 100, 11.95 at 1,000. Lesson family: double descent.',
    requiredMentions: [
      '494.87',
      '10,255',
      '10,588',
      '13,612',
      'Dulwich Village',
      'East Dulwich',
      'Herne Hill',
      'Nunhead',
      'double descent',
      'interpolation threshold'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS006, TS017, TS044 and TS045 by output area, and usual residents by ward, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS output area to LSOA lookup and LSOA 2021 to ward (May 2022) best-fit lookup, ONS Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: Dulwich, Dulwich Village, East Dulwich, Herne Hill and Nunhead.', url: 'https://api.postcodes.io/places?q=Dulwich' }
    ],
    rejectedClaims: [
      'A population for "Dulwich": no single official boundary; ward figures given separately, never summed.',
      'That the experiment uses Dulwich areas only: not claimed; it uses all 959 Southwark output areas, 156 of them in the named wards.',
      'That bigger models are better: contradicted by our own run (15.59 at 10,000 features against 9.63 at 10 and 14.91 for the mean); the page says so.',
      'That Goose Green or Champion Hill ward is East Dulwich or part of Dulwich: not claimed; they are listed as wards we chose, and the place names come from postcodes.io.',
      'Picture gallery, college, park or school claims: not read from a source; not claimed.',
      'Sterling prices: none.'
    ]
  }
};
