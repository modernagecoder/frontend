'use strict';
// Burton upon Trent (cg- town page, UK cluster Phase 8, towns band A, row 400). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can a machine learning model tell a town
// from a village? (support vector machines, support vectors, the soft-margin C setting, baselines, and a model learning
// what its features can see rather than what the label means).
// Data (read 29 September 2026): Nomis Census 2021 TS006 population density (NM_2026_1) and TS045 car or van availability
// (NM_2063_1) for all 384 output areas in East Staffordshire (E07000193); ONS OA21 to BUA22 lookup (ArcGIS
// OA21_BUA22_LAD22_RGN22_EW_LU). Label: town = OA in the Burton upon Trent or Uttoxeter BUA (273 OAs); village or
// countryside = every other OA (111: other BUAs plus 34 OAs in no BUA). Features: log10 density, % households with no car.
// Our run (scratchpad bur/svm2.py, svm3.py): scikit-learn SVC linear, standardised features. Always guessing "town" 71.1%.
// C 0.01: 214 support vectors, 80.2%; C 0.1: 180, 81.2%; C 1: 175, 81.8%; C 10 and 100: 174, 81.8%. Density alone 81.2%,
// no-car share alone 71.1%. At C 1, OAs predicted "town": Burton 222 of 227, Uttoxeter 41 of 46, Stretton 16 of 16,
// Barton-under-Needwood 12 of 14, Tutbury 11 of 12, Rolleston on Dove 6 of 10, OAs in no BUA 0 of 34. Median OA density
// (people per sq km): Burton 5,111; Stretton 3,924; Uttoxeter 3,486; Tutbury 3,369; Barton 3,189; no BUA 44.
// Lesson family: support vector machine, support vectors, soft margin (C), baseline accuracy, label versus feature.
// Screened: "support vector", "soft margin", "baseline accuracy" 0 hits.
// Place facts: East Staffordshire (E07000193) TS001 124,020. ONS 2021 BUAs (published): Burton upon Trent 76,255;
// Uttoxeter 14,020; Barton-under-Needwood 4,715; Stretton (East Staffordshire) 4,650; Tutbury 3,675; Rolleston on Dove
// 2,900. postcodes.io (East Staffordshire) suburban areas: Horninglow, Stapenhill, Winshill, Branston, Outwoods, Shobnall.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BURTON UPON TRENT', label: 'Burton upon Trent', blurb: 'AI and programming classes for Burton upon Trent, with a machine learning project that tries to tell towns from villages using Census numbers.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-burton-upon-trent',
  code: 'btt',
  accent: '#8A3078',
  accentRationale: 'Burton upon Trent: a deep magenta (6.1:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Burton upon Trent',
    eyebrow: 'Burton upon Trent, East Staffordshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Staffordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'Staffordshire', href: '/coding-classes-in-staffordshire' },
    { label: 'Stafford', href: '/online-coding-and-python-classes-in-stafford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Burton upon Trent, England',
  title: 'AI and Programming Classes in Burton upon Trent | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Burton upon Trent, Uttoxeter, Stapenhill and Horninglow learners aged 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Burton upon Trent, plus a support vector machine project that tries to tell East Staffordshire\'s towns from its villages.',
  twitterDescription: 'Burton upon Trent AI, programming, Python and vibe coding classes online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Burton upon Trent',
    description: 'Online AI, programming, Python, vibe coding and maths for children, teenagers and adults in Burton upon Trent and East Staffordshire, taught live with reasoning first.'
  },

  h1: 'AI and programming classes in Burton upon Trent',
  capsuleQ: 'Which are the best AI and programming classes in Burton upon Trent?',
  capsule: 'East Staffordshire had 124,020 usual residents at the 2021 census, and the ONS puts 76,255 people in the Burton upon Trent built-up area and 14,020 in Uttoxeter. Horninglow, Stapenhill, Winshill, Branston and Shobnall are among the suburbs recorded in Burton. Learners from six up to 67 anywhere in the district study AI, programming, Python, vibe coding and maths with India-based tutors on live video, alone or with five to ten classmates at their stage. Reasoning is taught before tools, so learners can tell when a model or chatbot has gone wrong. Our first lesson costs nothing and ends with a course recommendation. The Burton project trains a support vector machine on 384 Census output areas to separate towns from villages, and finds it has learned something slightly different from what it was asked. Beyond that, group tuition is USD 100 monthly and one-to-one tuition USD 150 monthly.',
  lead: 'A support vector machine is one of the classic machine learning methods for sorting things into two groups. Given examples with labels, it draws the boundary that sits as far as possible from both sides, and the handful of examples closest to that boundary, the support vectors, are the only ones that decide where it goes. Here the examples are the 384 small Census areas that make up East Staffordshire, the label says whether each one belongs to a town (Burton or Uttoxeter) or not, and the model sees two numbers per area: how many people live per square kilometre and what share of households have no car. The accuracy looks respectable. What the model actually learned is the more interesting part.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Burton upon Trent?',

  picks: {
    eyebrow: 'Burton course picks',
    h2: 'Burton upon Trent courses in reasoning, Python and AI',
    intro: 'Choose by age and interest. Every course opens with a live lesson that is free and asks for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: sorting by rules, finding the rule that fails and asking what a label really means.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games and small apps made by describing them to an AI, then testing every part.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including the town-or-village classifier and its support vectors.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from scratch to machine learning and AI agents, with every model checked against a baseline.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'East Staffordshire',
      h2: 'Burton upon Trent, Uttoxeter and the villages between',
      intro: 'Built-up areas in the district as the ONS counted them, and suburbs recorded in Burton.',
      body: [
        { kind: 'table', caption: 'Selected ONS built-up areas in East Staffordshire, 2021 census populations', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Burton upon Trent', '76,255'],
          ['Uttoxeter', '14,020'],
          ['Barton-under-Needwood', '4,715'],
          ['Stretton', '4,650'],
          ['Tutbury', '3,675'],
          ['Rolleston on Dove', '2,900']
        ] },
        { kind: 'p', text: 'The figures are the ONS\'s own, one area at a time; we have not totalled them, and the district figure of 124,020 is taken from a different table. Horninglow, Stapenhill, Winshill, Branston, Outwoods and Shobnall appear on postcodes.io as suburban areas in East Staffordshire. Schools in Staffordshire follow England\'s national curriculum, so give us the holiday dates and we will plan lessons around them.' },
        { kind: 'callout', h3: 'Staffordshire, the West Midlands and our teaching', p: 'More local choices are on <a class="cg-inline-link" href="/coding-classes-in-staffordshire">coding classes in Staffordshire</a> and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands region</a>. Our case for thinking before prompting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Burton project',
      h2: 'Teaching a support vector machine to tell towns from villages',
      intro: 'Two Census numbers per area, one linear boundary, and a surprise about what the boundary really separates.',
      body: [
        { kind: 'p', text: 'From the Nomis API the learner downloads population density (table TS006) and car availability (TS045) for all 384 output areas in East Staffordshire, then uses the ONS lookup to see which built-up area each belongs to. Areas inside Burton upon Trent or Uttoxeter are labelled town, 273 of them; the other 111, in villages or open countryside, are labelled not town. After putting both features on the same scale, scikit-learn fits a linear support vector machine at several values of C, the setting that decides how heavily mistakes are punished.' },
        { kind: 'table', caption: 'Linear support vector machine on East Staffordshire output areas, our Python run on Census 2021 data', head: ['Model', 'Support vectors', 'Accuracy'], rows: [
          ['Always answer "town"', 'None', '71.1%'],
          ['C = 0.01 (soft margin)', '214', '80.2%'],
          ['C = 0.1', '180', '81.2%'],
          ['C = 1', '175', '81.8%'],
          ['C = 100 (strict margin)', '174', '81.8%'],
          ['Density only, C = 1', 'Not recorded', '81.2%']
        ] },
        { kind: 'p', text: 'The first lesson is about baseline accuracy. Because most areas are in a town, a program that never looks at the data scores 71.1%, so the model\'s 81.8% is an improvement of about ten points, not a triumph. The second is in the support vectors. In a cleanly separated problem only a few points hold up the boundary; here 175 of 384 do, a sign that towns and villages overlap heavily in these two numbers. Lowering C softens the margin, lets more points inside it and costs a little accuracy. The third lesson is that the car feature barely matters: density alone reaches 81.2%.' },
        { kind: 'table', caption: 'Output areas called "town" by the C = 1 model, with median density in people per square kilometre', head: ['Area', 'Called town', 'Median density'], rows: [
          ['Burton upon Trent', '222 of 227', '5,111'],
          ['Stretton', '16 of 16', '3,924'],
          ['Uttoxeter', '41 of 46', '3,486'],
          ['Tutbury', '11 of 12', '3,369'],
          ['Barton-under-Needwood', '12 of 14', '3,189'],
          ['Areas in no built-up area', '0 of 34', '44']
        ] },
        { kind: 'p', text: 'Every one of Stretton\'s areas, and nearly all of Tutbury\'s and Barton\'s, lands on the town side. At the scale of a few hundred homes, the streets of a large village are about as crowded as the streets of a town. What the model has really learned is "built-up or open land", which it gets right in all 34 countryside areas. "Town or village" is a distinction the ONS makes by the size of the whole settlement, and nothing in the two features describes that.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort house cards into town and village by one rule, then find the cards the rule gets wrong.' },
          { h3: 'Ages 11 to 15', p: 'Plot every East Staffordshire area by density in Python and try drawing the dividing line by hand.' },
          { h3: 'Ages 15 and up', p: 'Fit the support vector machine, vary C, count support vectors and compare with the baseline.' }
        ] },
        { kind: 'callout', h3: 'Census data, our model', p: 'Density, car and lookup data are Office for National Statistics Census 2021 releases via Nomis and the ONS geography portal, under the Open Government Licence. The labels, the model and all the accuracy figures are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Classifiers and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A model is loyal to its features, not to the meaning of its label.',
      body: [
        { kind: 'table', caption: 'From the Burton classifier to working with AI', head: ['In the town-or-village project', 'When AI builds or runs a model'], rows: [
          ['Guessing "town" already scored 71.1%', 'Always ask what the lazy answer would score'],
          ['175 of 384 areas were support vectors', 'Many borderline cases mean heavy overlap'],
          ['The car share added under a point', 'More features do not always add much'],
          ['Stretton was called a town every time', 'Errors can expose what the label really means'],
          ['Countryside was never misread', 'Know which question the model is truly answering']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to "build a classifier" and it will usually report accuracy and stop there. Vibe coding lets the learner describe the model while the AI writes it; our Burton students then add a baseline, look at which examples ended up as support vectors and read the mistakes one settlement at a time. AI agents that train and deploy models for you will not do this unasked, so it has to be part of the brief. Building agents comes after Python is second nature, mostly for older teens and adults, and Copilot Studio agents are taught in private lessons alone. The path is on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our UK route into AI agents</a>, the reasoning on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is independent of the Office for National Statistics, Nomis and postcodes.io. We used only their published open data, and the classifier, with any errors, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From sorting cards to training classifiers',
    intro: 'Treat the school year as a hint; the free lesson finds the real starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Rules, exceptions and saying what a category means.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps made with AI help, then tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Classifiers, baselines and honest accuracy next to GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Machine learning and agents', p: 'Python, models and AI agents, built and checked stage by stage.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and classification',
    h2: 'What is a support vector machine, and what are support vectors?',
    intro: 'A support vector machine is a classifier that draws the boundary between two groups as far as possible from both, and the support vectors are the examples nearest that boundary, the only ones that fix its position.',
    p1: 'On East Staffordshire\'s 384 Census areas it scored 81.8% against a do-nothing baseline of 71.1%, used 175 support vectors, and called every Stretton area a town because it had learned built-up versus open land.',
    p2: 'Learners who have seen that ask of any AI model: what does the baseline score, and which examples is it unsure about?',
    closer: 'Checking a model like that is how Burton teenagers stay in charge of AI tools rather than trusting a single accuracy number, and a strong reason to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Stapenhill to Uttoxeter, all online',
    intro: 'A laptop or desktop and an internet connection that handles video are all you need.',
    cells: [
      { h3: 'Students do the typing', p: 'Every line, prompt and run is the learner\'s own, with the tutor watching over screen share and asking how they know.' },
      { h3: 'Starting point from the trial', p: 'The free session shows current skills, which sets the first topic; exam boards go on record.' },
      { h3: 'Free first lesson', p: 'We charge nothing for the opening lesson and finish it with a course suggestion.' },
      { h3: 'Groups by level', p: 'Classes bring together five to ten learners across the UK at one stage.' },
      { h3: 'Twice weekly', p: 'No lessons in school holidays.' },
      { h3: 'Steady timetable', p: 'Tutors shift with the UK clock changes so your time slot stays put.' }
    ],
    spec: { title: 'Why lessons are online', p: 'Five learners at the same level with the same free evening seldom live near one another. Teaching over video makes the map irrelevant.' }
  },

  fees: {
    h2: 'Burton upon Trent fees',
    intro: 'Burton learners pay international rates, which apply to every country except India.',
    first: 'A full free lesson first, then our recommendation.',
    group: 'Roughly eight live lessons a month in a small class.',
    private: 'Roughly eight live private lessons a month.',
    closer: 'Everything is billed in US dollars rather than sterling, starting only when the trial has agreed a course and a weekly time. For holidays, missed sessions and moving between class and private tuition, see the pricing page.'
  },

  reviewsH2: 'Google reviews from Staffordshire families and learners across the UK',

  book: {
    h2: 'Book a free Burton lesson',
    intro: 'Tell us the learner\'s age or year group and one or two interests. We might spend the trial inventing sorting rules for picture cards, co-writing a Scratch game with an AI, writing some starter Python, or training a tiny classifier on real numbers.',
    success: 'Thank you. Your Burton upon Trent request has reached us.'
  },

  faq: {
    h2: 'Burton upon Trent questions',
    intro: 'Support vector machines, the town-or-village project, Python, vibe coding and the practical details.',
    items: [
      { q: 'What is the population of Burton upon Trent?', a: 'The ONS gives 76,255 residents for the Burton upon Trent built-up area at the 2021 census, and 124,020 for East Staffordshire.' },
      { q: 'Can Burton learners take AI and programming classes online?', a: 'Yes. Lessons are live on video for ages 6 to 67 in Burton, Uttoxeter and the villages of East Staffordshire.' },
      { q: 'What is a support vector machine used for?', a: 'Sorting examples into groups, such as spam or not spam, by drawing the widest possible boundary between labelled examples and placing new cases on one side of it.' },
      { q: 'What is the C parameter in an SVM?', a: 'It sets how much the model is penalised for points on the wrong side of the margin. A small C gives a softer, wider margin with more support vectors; a large C fits the training data more tightly.' },
      { q: 'What is the Burton project?', a: 'Training a support vector machine on 384 East Staffordshire Census areas to tell towns from villages, comparing it with a simple baseline and studying the areas it gets wrong.' },
      { q: 'Is vibe coding part of the lessons?', a: 'Yes, for all ages; the learner plans the program and tests whatever the AI writes.' },
      { q: 'When do learners start building AI agents?', a: 'Once Python is fluent, for most in the late teens or adulthood; Copilot Studio agents are one-to-one only.' },
      { q: 'Do you support GCSE and A level students?', a: 'In computer science and maths, yes. We teach for understanding and never promise a grade.' },
      { q: 'What are the fees?', a: 'The first lesson is free. Carrying on costs USD 100 per month in a group or USD 150 per month privately.' },
      { q: 'Are there lessons during school holidays?', a: 'No, lessons pause; just send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Staffordshire and Midlands pages',
    html: 'Neighbouring pages with their own projects: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-tamworth">Tamworth</a>, <a class="cg-inline-link" href="/best-coding-class-in-lichfield">Lichfield</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-stafford">Stafford</a> and, over the county line, <a class="cg-inline-link" href="/best-coding-class-in-derby">Derby</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every area we teach.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Burton upon Trent and Staffordshire',
  footerPlaces: [
    { href: '/coding-classes-in-staffordshire', label: 'Staffordshire' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-btt .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.5rem); }
.cg-root.cg-btt .cg-hero h1 { font-weight: 800; letter-spacing: -0.028em; line-height: 1.03; }
.cg-root.cg-btt .cg-capsule { border-left: 5px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-btt .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-btt .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.022em; }
.cg-root.cg-btt .cg-table caption { font-weight: 650; text-align: left; font-style: italic; font-size: 0.92rem; }
.cg-root.cg-btt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-btt .cg-table th { letter-spacing: 0.06em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-btt .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-btt .cg-callout { border-left-width: 6px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'East Staffordshire (E07000193), Census 2021 TS001 usual residents 124,020. ONS 2021 BUAs (published): Burton upon Trent 76,255; Uttoxeter 14,020; Barton-under-Needwood 4,715; Stretton (East Staffordshire) 4,650; Tutbury 3,675; Rolleston on Dove 2,900. postcodes.io (East Staffordshire) suburban areas: Horninglow, Stapenhill, Winshill, Branston, Outwoods, Shobnall.',
    localProject: 'Census 2021 TS006 density + TS045 no-car share for 384 East Staffordshire OAs; OA21-BUA22 lookup. Town = Burton or Uttoxeter BUA (273), else 111. Linear SVC, standardised: baseline 71.1%; C 0.01 214 SVs 80.2%; 0.1 180 81.2%; 1 175 81.8%; 10/100 174 81.8%; density only 81.2%. C 1 called town: Burton 222/227, Uttoxeter 41/46, Stretton 16/16, Barton 12/14, Tutbury 11/12, no BUA 0/34. Median density Burton 5,111, Stretton 3,924, Uttoxeter 3,486, Tutbury 3,369, Barton 3,189, no BUA 44. Lesson family: SVM, support vectors, soft margin C, baseline accuracy, label vs feature.',
    requiredMentions: [
      '124,020',
      '76,255',
      '14,020',
      'Horninglow',
      'Stapenhill',
      'Shobnall',
      'support vectors',
      'soft margin',
      'baseline accuracy'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS006 population density, TS045 car or van availability and TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS output area to built-up area lookup (OA21 to BUA22), ONS Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: suburban areas in East Staffordshire.', url: 'https://api.postcodes.io/places?q=Horninglow' }
    ],
    rejectedClaims: [
      'Brewing history or named breweries: not read from a source; not claimed.',
      'Why Stretton counts as a separate built-up area: the ONS method is not quoted; only the model result is reported.',
      'Whether the Burton upon Trent built-up area lies wholly in East Staffordshire: not claimed.',
      'Sum of the built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
