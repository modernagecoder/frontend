'use strict';
// Ellesmere Port (cg- town page, UK cluster Phase 8, towns band A, row 404). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: why does a model that scores well in testing
// do worse in real use? (data leakage through a random train/test split when neighbouring places are alike; spatial
// autocorrelation, Moran's I, grouped splits).
// Data (read 29 September 2026): Nomis Census 2021 for all 1,179 output areas in Cheshire West and Chester (E06000050):
// TS045 car availability (NM_2063_1; 155,125 households, 25,879 with no car or van), TS017 one-person share (NM_2037_1),
// TS006 density (NM_2026_1). ONS OA December 2021 population-weighted centroids (OA_December_2021_EW_PWC_V4) and the ONS
// OA21 to LSOA21 to MSOA21 lookup (OA_LSOA_MSOA_EW_DEC_2021_LU_v3): 47 MSOAs.
// Our run (scratchpad elp/leak.py): scikit-learn random forest (300 trees, min leaf 3) predicting each area's % no car,
// 5-fold cross-validation averaged over 3 seeds. Mean absolute error, points, random split / whole MSOAs held out:
// location only (centroid easting, northing) 6.87 / 8.86; census features only (log density, one-person share) 6.39 /
// 6.48; both 5.70 / 6.16. Always predicting the average: 10.73. Moran's I on no-car share, 8 nearest neighbours: 0.558.
// Lesson family: data leakage from random splits, spatial autocorrelation (Moran's I), grouped cross-validation.
// Screened: "data leakage", "spatial autocorrelation", "Moran", "grouped split" 0 hits; random forest is only the tool
// (a Meierijstad page teaches it); Plymouth's cross-validation page is leave-one-out, a different question.
// Place facts: Cheshire West and Chester TS001 357,150 (registered by Chester; not a mention here). ONS 2021 BUAs
// (published): Ellesmere Port 65,430; Winsford 32,530. postcodes.io suburban areas whose nearest OA centroid lies in the
// Ellesmere Port BUA (our check): Great Sutton, Little Sutton, Whitby, Little Stanney, Wolverham, Overpool, Stanlow;
// Hooton and Childer Thornton villages (Childer Thornton BUA).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ELLESMERE PORT', label: 'Ellesmere Port', blurb: 'AI and programming classes for Ellesmere Port, with a machine learning project on why a random test split can flatter a model.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-ellesmere-port',
  code: 'elp',
  accent: '#461B6B',
  accentRationale: 'Ellesmere Port: a deep indigo (10.38:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Ellesmere Port',
    eyebrow: 'Ellesmere Port, Cheshire West and Chester, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Cheshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Cheshire', href: '/coding-classes-in-cheshire' },
    { label: 'Chester', href: '/best-coding-class-in-chester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ellesmere Port, England',
  title: 'AI and Programming Classes in Ellesmere Port | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Ellesmere Port, Great Sutton, Little Sutton and Overpool learners aged 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Ellesmere Port, with a Census project showing how a random train and test split can make a model look better than it is.',
  twitterDescription: 'Ellesmere Port AI, programming, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Ellesmere Port',
    description: 'Online AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Ellesmere Port and Cheshire West, taught live.'
  },

  h1: 'AI and programming classes in Ellesmere Port',
  capsuleQ: 'Which are the best AI and programming classes in Ellesmere Port?',
  capsule: 'The ONS puts 65,430 people in the Ellesmere Port built-up area at the 2021 census, in the Cheshire West and Chester council area. Great Sutton, Little Sutton, Overpool, Wolverham and Little Stanney are recorded suburbs that fall within it, and Hooton and Childer Thornton are villages in the same CH66 postcode district as Great Sutton. Learners from six to 67 can study AI, programming, Python, vibe coding and maths with an India-based tutor over live video, in private lessons or a group of five to ten at one level. Each course starts with sound reasoning, so learners can challenge a model or a chatbot instead of trusting it. The first lesson is free and ends with the course we would suggest. The Ellesmere Port project trains a model on 1,179 Census areas and discovers that the usual way of testing it gives a flattering score. Continuing costs USD 100 a month for group lessons or USD 150 a month for one-to-one.',
  lead: 'Every machine learning course teaches the same ritual: hide some of the data, train on the rest, and score the model on what it never saw. Usually the hidden part is chosen at random. That works when every example is independent, but places are not. Two neighbouring streets tend to be alike, so a random split can put an area in the test set while its near-identical neighbour sits in the training set, and the model scores well simply by remembering the neighbour. This is a form of data leakage, and it is one reason models that shine in testing disappoint in real use. The project measures how big the effect is across Cheshire West and Chester.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Ellesmere Port?',

  picks: {
    eyebrow: 'Ellesmere Port course picks',
    h2: 'Ellesmere Port courses in thinking, Python and AI',
    intro: 'Four ways in, sorted by age. The opening class of each is live and costs nothing, and we never ask for card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: fair tests, hidden answers and noticing when a test is too easy.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games described to an AI, then checked piece by piece by the learner.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including the leaky-split experiment on real Census areas.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python through data science, honest model testing and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Ellesmere Port and Cheshire West',
      h2: 'Ellesmere Port, Great Sutton, Overpool and Little Stanney',
      intro: 'ONS built-up area counts, and the recorded suburbs that sit inside Ellesmere Port.',
      body: [
        { kind: 'table', caption: 'Two ONS built-up areas in Cheshire West and Chester, 2021 census residents', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Ellesmere Port', '65,430'],
          ['Winsford', '32,530']
        ] },
        { kind: 'p', text: 'Each is an ONS figure in its own right; we do not add them. Postcodes.io records Great Sutton, Little Sutton, Whitby, Little Stanney, Wolverham, Overpool and Stanlow as suburban areas, and for each one the nearest Census output area lies in the Ellesmere Port built-up area; Hooton and Childer Thornton are listed as villages. Cheshire schools teach England\'s national curriculum, so tell us the holidays and no lesson will clash with them.' },
        { kind: 'callout', h3: 'Cheshire, the North West and our method', p: 'For more options see <a class="cg-inline-link" href="/coding-classes-in-cheshire">coding classes in Cheshire</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>. Why understanding comes before AI tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Ellesmere Port project',
      h2: 'Data leakage in a train/test split: when neighbours give the answer away',
      intro: 'One target, three sets of inputs, two ways of testing, and a gap that reveals what the model really learned.',
      body: [
        { kind: 'p', text: 'The learner collects Census 2021 data from the Nomis API for all 1,179 output areas in Cheshire West and Chester. Of 155,125 households, 25,879 have no car or van, and the goal is to predict each area\'s no-car share. Inputs come in two kinds: where the area is, taken from the ONS population-weighted centre point, and what it is like, measured by population density and the share of one-person households. A random forest model is trained and tested with five-fold cross-validation, first splitting the areas at random, then holding out whole neighbourhoods at once, using the 47 larger areas (MSOAs) the ONS groups them into.' },
        { kind: 'p', text: 'Before any model, the learner checks how alike neighbours are. Moran\'s I, a standard measure of spatial autocorrelation that runs from about minus one to one, comes out at 0.558 for the no-car share when each area is compared with its eight nearest neighbours. That is strong: knowing the neighbours tells you a lot.' },
        { kind: 'table', caption: 'Average prediction error for each area\'s no-car share, in percentage points, our Python run on Census 2021 data', head: ['Model inputs', 'Random split', 'Whole neighbourhoods held out'], rows: [
          ['None: always predict the average', '10.73', '10.73'],
          ['Location only', '6.87', '8.86'],
          ['Census features only', '6.39', '6.48'],
          ['Location and Census features', '5.70', '6.16']
        ] },
        { kind: 'p', text: 'With a random split, the location-only model looks respectable, cutting the error from 10.73 to 6.87. Hold out whole neighbourhoods and it jumps to 8.86, nearly 30% worse, because it can no longer look up the answer from the house next door. The model built on density and household mix barely changes, 6.39 against 6.48: it had learned something about areas in general, not about particular places. The combined model still leads under both tests, but its lead narrows once the leak is closed. A score is only as honest as the split behind it.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Make a quiz where the answers sit on the next page, then design one that cannot be cheated.' },
          { h3: 'Ages 11 to 15', p: 'Map Cheshire West\'s areas by no-car share in Python and see how neighbours resemble each other.' },
          { h3: 'Ages 15 and up', p: 'Train a random forest, compare random and grouped splits and compute Moran\'s I yourself.' }
        ] },
        { kind: 'callout', h3: 'Census and ONS geography, our models', p: 'Counts are Office for National Statistics Census 2021 data from Nomis; centre points and area lookups are from the ONS Open Geography Portal, all under the Open Government Licence. The models, splits and errors are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Testing models honestly',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A leaky test flatters whoever sits it, human or machine.',
      body: [
        { kind: 'table', caption: 'From the Ellesmere Port experiment to working with AI', head: ['In the leakage project', 'When AI builds or checks a model'], rows: [
          ['Moran\'s I was 0.558', 'Check whether examples are truly independent'],
          ['Location-only error rose from 6.87 to 8.86', 'A random split can hide a weak model'],
          ['Census-only error hardly moved', 'Models that learn general patterns travel better'],
          ['Holding out whole areas closed the leak', 'Test on data like the real future cases'],
          ['The average alone scored 10.73', 'Always compare with the simplest baseline']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to build and evaluate a model and it will almost always reach for a random train/test split, because that is what most tutorials show. Vibe coding lets learners describe what they want while the AI writes the code; in Ellesmere Port our students then ask how the test data was chosen and whether it could leak. AI agents that train, test and report on models make these choices automatically and rarely mention them. Our agent projects wait until a learner can write Python unaided, which for most means sixteen upwards, and Copilot Studio work runs solely in private sessions. Details are on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>, and the thinking on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Nothing here is endorsed by the ONS, Nomis or postcodes.io: we simply used what they publish openly, and the modelling choices and any slips are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From cheat-proof quizzes to honest model tests',
    intro: 'The school year is a guide; the free lesson finds the right level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Fair tests, hidden answers and spotting a shortcut.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner, written with AI and tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Models, test splits and honest scores alongside GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Machine learning and agents', p: 'Python, careful evaluation and AI agents, step by step.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and evaluation',
    h2: 'What is data leakage in machine learning, and how does a train/test split cause it?',
    intro: 'Data leakage is when information about the test answers slips into training, so the model scores better in testing than it will in use; a random split causes it when test examples have near-copies in the training data.',
    p1: 'Across Cheshire West and Chester\'s 1,179 Census areas, a location-only model scored an error of 6.87 points on a random split but 8.86 when whole neighbourhoods were held out, because neighbouring areas are alike (Moran\'s I 0.558).',
    p2: 'After this project, students greet any AI-reported accuracy with two questions: who picked the test rows, and could training have peeked at them?',
    closer: 'A teenager in Ellesmere Port who can question the test as well as the score will not be fooled by a dashboard, and coding is how that habit forms.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Great Sutton to Overpool, all online',
    intro: 'A computer and a connection good enough for a video call are the only kit needed.',
    cells: [
      { h3: 'The student does it', p: 'Each line of code, each prompt and each run belongs to the learner; the tutor watches on screen share and asks what they expect to happen.' },
      { h3: 'Level set by the trial', p: 'The free session tells us what the learner knows, which decides topic one; exam boards are recorded too.' },
      { h3: 'Trial at no cost', p: 'We charge nothing for lesson one, which finishes with our course pick.' },
      { h3: 'Classes by ability', p: 'Every class is five to ten UK learners at one level.' },
      { h3: 'Two a week', p: 'We stop for school holidays.' },
      { h3: 'Unmoving slot', p: 'British clock changes are absorbed by our tutors, not your timetable.' }
    ],
    spec: { title: 'Why online', p: 'Five learners of one level, free on the same evening, seldom live within a short trip of each other. Video solves that.' }
  },

  fees: {
    h2: 'Ellesmere Port fees',
    intro: 'Ellesmere Port learners pay international prices, which cover everywhere outside India.',
    first: 'A complete lesson free, and a recommendation after it.',
    group: 'About eight live small-group lessons monthly.',
    private: 'About eight live private lessons monthly.',
    closer: 'Our invoices are in US dollars rather than sterling, and the first is sent only after the trial has fixed both a course and a weekly time. The pricing page deals with holidays, missed lessons and switching between private and group.'
  },

  reviewsH2: 'What Cheshire parents and UK learners write about us on Google',

  book: {
    h2: 'Book a free Ellesmere Port lesson',
    intro: 'An age, a school year and one hobby is enough for us to plan. The trial could be building an uncheatable quiz, making a Scratch game alongside an AI, writing a short Python script, or scoring a model on real numbers.',
    success: 'Thank you. We have your Ellesmere Port request.'
  },

  faq: {
    h2: 'Ellesmere Port questions',
    intro: 'Data leakage, the Census project, Python, vibe coding and the practical side.',
    items: [
      { q: 'What is the population of Ellesmere Port?', a: 'The ONS gives 65,430 residents for the Ellesmere Port built-up area at the 2021 census.' },
      { q: 'Can I take AI and programming classes online in Ellesmere Port?', a: 'You can: every lesson is a live video call, open to anyone 6 to 67 in Great Sutton, Little Sutton or elsewhere in Cheshire West.' },
      { q: 'What is spatial autocorrelation?', a: 'The tendency for nearby places to have similar values. Moran\'s I measures it; for the no-car share in Cheshire West and Chester it was 0.558, which is strong.' },
      { q: 'How do you avoid data leakage when testing a model?', a: 'Make the test set look like the cases the model will face, for example by holding out whole areas, whole people or later dates rather than random rows, and keep every step of preparation inside the training data.' },
      { q: 'What is the Ellesmere Port project?', a: 'Predicting the no-car share of 1,179 Census areas with a random forest, then comparing a random test split with one that holds out whole neighbourhoods.' },
      { q: 'Is vibe coding taught?', a: 'Yes, at all ages; the learner plans, describes and tests, and the AI helps with typing.' },
      { q: 'When do learners start on AI agents?', a: 'After Python stops being the hard part, so mostly from about sixteen; Copilot Studio agents need private lessons.' },
      { q: 'Is there exam help for GCSE and A level?', a: 'For computer science and maths we teach the ideas properly; we do not promise results.' },
      { q: 'What are the fees?', a: 'We charge nothing for the trial. Ongoing tuition is USD 100 monthly with a class or USD 150 monthly alone with a tutor.' },
      { q: 'Do lessons stop for school holidays?', a: 'Yes; send the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Cheshire and Merseyside pages',
    html: 'Pages with their own projects: <a class="cg-inline-link" href="/best-coding-class-in-chester">Chester</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-runcorn">Runcorn</a> (clustering shops), <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-birkenhead">Birkenhead</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-warrington">Warrington</a>. Every area we teach is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ellesmere Port and Cheshire',
  footerPlaces: [
    { href: '/coding-classes-in-cheshire', label: 'Cheshire' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-elp .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.9vw, 2.5rem); }
.cg-root.cg-elp .cg-hero h1 { font-weight: 780; letter-spacing: -0.029em; line-height: 1.04; }
.cg-root.cg-elp .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-elp .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-elp .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.02em; }
.cg-root.cg-elp .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-elp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-elp .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-elp .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-elp .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Cheshire West and Chester (E06000050), Census 2021 TS001 usual residents 357,150. ONS 2021 BUAs (published): Ellesmere Port 65,430; Winsford 32,530. postcodes.io suburban areas (nearest OA centroid in Ellesmere Port BUA, our check): Great Sutton, Little Sutton, Whitby, Little Stanney, Wolverham, Overpool, Stanlow; villages Hooton, Childer Thornton.',
    localProject: 'Census 2021 TS045/TS017/TS006 for 1,179 OAs (155,125 households, 25,879 no car); ONS OA PWC and OA-MSOA lookup (47 MSOAs). Random forest, 5-fold CV x 3 seeds, MAE points random / MSOA-grouped: location 6.87 / 8.86; census 6.39 / 6.48; both 5.70 / 6.16; mean-only 10.73. Moran I (8 nn) 0.558. Lesson family: data leakage via random split, spatial autocorrelation, grouped CV.',
    requiredMentions: [
      '65,430',
      '1,179',
      '155,125',
      '25,879',
      'Great Sutton',
      'Little Sutton',
      'Overpool',
      'Little Stanney',
      'data leakage',
      'spatial autocorrelation'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS045, TS017 and TS006 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Output Areas (December 2021) population-weighted centroids and OA to LSOA to MSOA lookup, ONS Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: suburban areas and villages in Cheshire West and Chester.', url: 'https://api.postcodes.io/places?q=Overpool' }
    ],
    rejectedClaims: [
      'Canal, port or refinery history: not read from a source; not claimed.',
      'Why some areas have fewer cars: no cause claimed; only prediction errors are reported.',
      'That Hooton and Childer Thornton are part of Ellesmere Port: they fall in a separate ONS built-up area; described only as villages sharing the CH66 district.',
      'Sum of the built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
