'use strict';
// Grafton (cg- regional city page, Australia cluster Phase 7, row 189). Shaped page: AI and programming for
// teenagers and adults. Spine: can two clients that each see only one bank of the Clarence train a shared model
// without pooling their data? Data: NSW Spatial Services, NSW Geocoded Addressing Theme, AddressPoint layer
// ((c) Spatial Services), queried 10 October 2026 over a box around Grafton; coordinates and locality labels only,
// no addresses printed. Our code (scratchpad au/r7/gra_fed.py): 11,966 points, 10,887 inside the ABS Grafton SUA
// polygon; GRAFTON 6,155 and SOUTH GRAFTON 3,402 used (9,557). Logistic regression on projected east and north
// kilometres (standardised), learning rate 0.5; 20 percent test split (seed 7): 1,911 test points (1,206 Grafton, 705
// South Grafton), 7,646 training. Client A holds only Grafton points, client B only South Grafton (fully non-IID).
// Centralised, 400 steps: test accuracy 0.9995 (1 error). FedAvg with E local steps per round, 400 local steps in
// total: E=1 (400 rounds) 0.9995; E=5 (80) 0.9995; E=20 (20) 0.9990; E=100 (4) 0.9979 (weights shrink toward the
// clients' own optima: client drift). Local-only models: north only predicts Grafton for 1,859 of 1,911, accuracy
// 0.6583; south only 0.4767. Lesson family: federated averaging with non-IID clients; screened 0 location-page hits
// and 0 claims 10 October 2026; claimed by AU-R7.
// Place facts read raw 10 October 2026: ABS Census 2021 QuickStats, Grafton SUA (1015): 19,255 people; median age
// 43; 4,973 families; 8,711 private dwellings; 2.3 per household; Community and Personal Service Workers 1,305 (18.1;
// NSW 10.6; Australia 11.5); Professionals 1,115 (15.5; NSW 25.8); Labourers 957 (13.3; NSW 8.2); separate house
// 6,265 (82.3; NSW 65.6); car as driver 4,875 (67.8; NSW 43.1); aged 10 to 14 1,282 (6.7; NSW 6.2). SUA area
// 106.2537 square kilometres. SAL polygons at least 80 percent inside: Grafton, South Grafton, Junction Hill, Great
// Marlow, Waterview, Carrs Creek, Carrs Island, Carrs Peninsula, Alumy Creek, Koolkhan, Trenayr, Southampton,
// Crowther Island. Excluded: income, rent, ancestry, religion, health, Indigenous status.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'GRAFTON', label: 'Grafton', blurb: 'AI and programming for Grafton, and a model trained by two clients who each see only one bank of the Clarence.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-grafton',
  code: 'grft',
  accent: '#342076',
  accentRationale: 'Grafton: a deep jacaranda-shadow violet (HSV saturation 0.73, value 0.46, hue 254), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, with contrast above 4.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Grafton',
    eyebrow: 'Grafton, New South Wales, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }],
  nav: [
    { label: 'New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Grafton, New South Wales',
  title: 'AI and Programming Classes in Grafton | Live Online Lessons',
  description: 'AI and programming classes for Grafton teens and adults, live online: Python, machine learning and privacy-aware training on Clarence Valley data. First lesson free.',
  ogDescription: 'Grafton AI classes, with a project where two clients on opposite banks of the Clarence train one model by federated averaging, without sharing their data.',
  twitterDescription: 'Live online AI and programming classes for Grafton teens and adults, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Grafton Learners',
    description: 'Python, machine learning and federated learning taught live online to teenagers and adults in Grafton and the Clarence Valley.'
  },

  h1: 'AI and programming classes in Grafton',
  capsuleQ: 'What are the best AI and programming classes in Grafton?',
  capsule: 'Grafton teenagers and adults learn AI well by training real models in Python and asking where the data lives and who may see it. Grafton\'s urban area held 19,255 residents at the 2021 Census, whose median age was 43. Every lesson is taught live over video by a teacher, privately or in a small group, and there is no charge for the first.',
  lead: 'Some AI systems are now trained without collecting everyone\'s data in one place. Each device or site trains a copy of the model on its own data, and only the model\'s numbers travel to be averaged. That is federated learning, and its hardest case is when every participant sees a different kind of data. Grafton gives a clean example. We took the state\'s address points on both sides of the Clarence and gave one imaginary client only the Grafton points on the north bank, and the other only the South Grafton points. Neither can learn the river alone: their models are right 65.8% and 47.7% of the time. Averaged together round by round, they match a model trained on all the data at once, with one mistake in 1,911 test points.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Grafton.',

  picks: {
    eyebrow: 'Course picks for Grafton',
    h2: 'AI courses for the Clarence Valley',
    intro: 'Every course reaches projects like the two-bank model. Start with the free trial, which asks for no card.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning for teenagers in Python, from a first classifier to training and testing it honestly.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The Python foundations machine learning depends on: lists, loops, functions and data files.' },
      { course: 'artificial-intelligence-complete-masterclass-college', band: 'University and adult', note: 'AI from search and logic to machine learning and modern models, with the maths explained.' },
      { course: 'data-science-complete-masterclass-college', band: 'Adults', note: 'Data science in Python, from cleaning data to models, evaluation and responsible use.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Grafton at the Census',
      h2: 'A river city on two banks',
      intro: 'The Grafton Significant Urban Area at the 2021 Census, against New South Wales and Australia.',
      body: [
        { kind: 'table', caption: 'Grafton urban area: core 2021 counts', head: ['Measure', 'Grafton'], rows: [
          ['Residents', '19,255'],
          ['Median age', '43'],
          ['Families', '4,973'],
          ['Private dwellings', '8,711'],
          ['Average people per household', '2.3'],
          ['Area of the urban area', 'about 106.3 square kilometres']
        ] },
        { kind: 'table', mt: true, caption: 'Grafton beside New South Wales and Australia', head: ['Measure', 'Grafton', 'NSW', 'Australia'], rows: [
          ['Community and personal service workers', '1,305 (18.1%)', '10.6%', '11.5%'],
          ['Labourers among employed residents', '957 (13.3%)', '8.2%', '9.0%'],
          ['Professionals among employed residents', '1,115 (15.5%)', '25.8%', '24.0%'],
          ['Separate houses among occupied homes', '6,265 (82.3%)', '65.6%', '72.3%'],
          ['Drove to work', '4,875 (67.8%)', '43.1%', '52.7%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Service work', p: 'Community and personal service workers make up 18.1% of employed residents, far above the state share of 10.6%.' },
          { h3: 'Houses and cars', p: 'Separate houses are 82.3% of occupied homes, and 67.8% of workers drove themselves to work.' },
          { h3: 'Both banks', p: 'The urban area takes in the localities of Grafton, South Grafton, Junction Hill, Great Marlow, Waterview, Koolkhan, Trenayr, Southampton, Alumy Creek, Carrs Creek, Carrs Island, Carrs Peninsula and Crowther Island.' }
        ] },
        { kind: 'p', text: 'The bureau slightly randomises Census counts for privacy, which can leave parts not quite matching totals. Figures here are exactly as published.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can two banks of the Clarence train one model without sharing data?',
      intro: 'The task: given a point\'s position, is it addressed to Grafton or South Grafton? Each client holds only one answer.',
      body: [
        { kind: 'table', caption: 'Test accuracy on 1,911 held-out address points (our calculation)', head: ['How the model was trained', 'Rounds of averaging', 'Accuracy'], rows: [
          ['All training data in one place', 'none', '99.95%'],
          ['Federated, 1 local step per round', '400', '99.95%'],
          ['Federated, 5 local steps per round', '80', '99.95%'],
          ['Federated, 20 local steps per round', '20', '99.90%'],
          ['Federated, 100 local steps per round', '4', '99.79%'],
          ['North bank client alone', 'none', '65.83%'],
          ['South bank client alone', 'none', '47.67%']
        ] },
        { kind: 'table', mt: true, caption: 'The address points used (NSW Spatial Services, our count)', head: ['Group', 'Points'], rows: [
          ['Inside the Grafton urban area', '10,887'],
          ['Addressed to Grafton (north client)', '6,155'],
          ['Addressed to South Grafton (south client)', '3,402'],
          ['Held back for testing', '1,911'],
          ['Used for training', '7,646']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Local training', p: 'Each client starts from the shared model and takes a few gradient steps of logistic regression on its own points.' },
          { h3: 'Averaging', p: 'The server averages the two sets of weights, weighted by how many points each client holds, and sends the result back.' },
          { h3: 'Same budget', p: 'Every federated run uses 400 local steps in total, so the only difference is how often the clients synchronise.' }
        ] },
        { kind: 'callout', h3: 'Client drift', p: 'With one local step per round, federated averaging reproduces the central model exactly. With 100 local steps, each client pulls far towards its own one-sided answer before averaging, the shared weights shrink, and accuracy slips from 99.95% to 99.79%. The data never moved in either case. What changed was how long each client trained alone, which is the central trade-off in real federated systems.' },
        { kind: 'p', text: 'Addresses come from NSW Spatial Services address points, copyright Spatial Services; we used only each point\'s position and its locality label, and print no addresses. The task is easy on purpose, so the effect of uneven data stands out. The split, the training and every accuracy figure are our own calculations.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Privacy and AI',
      h2: 'What federated learning teaches about data',
      intro: 'Training without pooling data protects privacy, but it changes how a model learns.',
      body: [
        { kind: 'p', text: 'The local-only models fail for a simple reason: a client that has only ever seen north bank points has never seen a reason to say South Grafton, so it says Grafton for almost every point, 1,859 of the 1,911. Averaging gives the shared model both halves of the picture without either client revealing a single point. Real systems face the same pattern in milder form: hospitals with different patients, phones with different users, schools with different students. Learners who have watched drift happen on a map of their own town understand why federated systems synchronise often and test on everyone\'s data.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Train a classifier on half the data, see it fail on the other half, then average two models and watch it recover.' },
          { h3: 'University students', p: 'Implement federated averaging, vary local steps and client imbalance, and plot the drift.' },
          { h3: 'Adults', p: 'Understand what privacy-preserving AI can and cannot promise before relying on it at work.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no ties to NSW Spatial Services, the Australian Bureau of Statistics or Clarence Valley Council. Their data is used under its published terms; the federated experiment and its results are ours.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Grafton planner',
      h2: 'Lesson times and terms for Clarence Valley learners',
      intro: 'Grafton is on New South Wales time, with summer daylight saving.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Clocks', p: 'Daylight saving in Grafton runs from 4 October 2026 to 4 April 2027, moving the clocks one hour forward for summer.' },
          { h3: 'The India gap', p: 'Teachers in India are four and a half hours behind Grafton through winter and five and a half through summer.' },
          { h3: 'Third term', p: 'New South Wales public schools hold Term 3 of 2027 from Monday 19 July to Friday 24 September, a good stretch for a steady weekly lesson.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first classifier to federated models',
    intro: 'Ages are only a guide; the free first lesson places each learner.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Data and decisions', p: 'Python that plots points, draws a dividing line and counts how often it is right.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Training models', p: 'Logistic regression, gradient descent and honest testing on held-out data.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'University', h3: 'Distributed learning', p: 'Federated averaging, uneven data and the privacy questions around shared models.', courses: ['artificial-intelligence-complete-masterclass-college', 'data-analytics-mathematics-masterclass'] },
      { band: 'Adults', h3: 'AI with care', p: 'Building and evaluating models on sensitive data while keeping that data where it belongs.', courses: ['data-science-complete-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI tools can train a model for you, why should Grafton learners understand federated learning?',
    intro: 'Because "your data never leaves your device" is a promise about privacy, not about accuracy, and the difference matters.',
    p1: 'More and more products advertise that they learn without collecting your data. That can be true and still hide a weakness: if each participant\'s data is lopsided, the shared model may drift, and nobody sees it unless they test on everyone. In the project, the drift was small because the task is easy. In harder tasks it can matter much more.',
    p2: 'Our Grafton learners build the clients, the averaging server and the tests themselves. They come away able to ask good questions of any system that claims to protect privacy while learning: how often do clients synchronise, how different is their data, and who checks the result.',
    closer: 'Training a model takes a few lines in 2026; understanding what it learned, and from whom, is still the valuable part.',
    blogAnchor: 'why programming still repays the effort'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Grafton lessons work',
    intro: 'Every class is a live video lesson, so learners on both sides of the river join from home.',
    cells: [
      { h3: 'Getting set up', p: 'Learners need only a laptop or desktop, a headset or built-in mic, and internet that copes with video.' },
      { h3: 'NSW year levels', p: 'Teachers plan around New South Wales year levels and term dates, teaching in English.' },
      { h3: 'Free trial class', p: 'The first lesson is a full class and ends with a recommended course and time.' },
      { h3: 'Groups of a level', p: 'Each group has five to ten learners at the same level, from Grafton and elsewhere.' },
      { h3: 'Twice a week', p: 'Groups meet on two set days weekly, close to eight lessons a month.' },
      { h3: 'India-based teachers', p: 'Our teachers work in India, and every lesson is booked in Grafton time.' }
    ],
    spec: { title: 'Quiet hours', p: 'Adults can choose early evening or weekend one-to-one lessons that fit around work and family.' }
  },

  fees: {
    h2: 'Grafton class fees',
    intro: 'Pricing is simple and the same throughout Australia.',
    first: 'The first class is free, finishing with a suggested level, course and weekly time.',
    group: 'A month of group classes, close to eight, with five to ten learners at one level.',
    private: 'Close to eight private lessons a month with your own teacher.',
    closer: 'Outside India, fees are charged in US dollars, and Grafton pays what all of Australia pays. Nothing is billed until the trial settles what to study and when; holidays, absences and switching formats are all covered on our pricing page.'
  },

  reviewsH2: 'Families\' Google reviews',

  book: {
    h2: 'Book a free AI lesson in Grafton',
    intro: 'Tell us how old the learner is and what they enjoy. Someone new to coding might train a first classifier in Python; a stronger learner might build the two-client federated model.',
    success: 'Thank you. We will contact you shortly about a Grafton lesson.'
  },

  faq: {
    h2: 'Grafton AI class questions',
    intro: 'Answers for Grafton families and adult learners.',
    items: [
      { q: 'What is federated learning?', a: 'Federated learning trains one shared model across many devices or sites. Each trains on its own data and sends only model updates, which a server averages.' },
      { q: 'What is client drift?', a: 'Client drift happens when clients with very different data train alone for too long between averaging rounds, so the shared model moves away from the right overall answer.' },
      { q: 'How many people live in Grafton?', a: 'The 2021 Census counted 19,255 people in the Grafton urban area, with a median age of 43.' },
      { q: 'How accurate was the federated model?', a: 'With frequent averaging it scored 99.95% on 1,911 held-out points, the same as a model trained on all the data; with only four rounds it scored 99.79%.' },
      { q: 'Do you help HSC students in Grafton?', a: 'Yes, with programming and the maths behind computing subjects, planned around NSW terms. Assessed work always remains the student\'s own.' },
      { q: 'When are Grafton lessons held?', a: 'Weekday afternoons, early evenings and Saturday mornings are popular, always set in Grafton time.' },
      { q: 'Is there anything for primary school children?', a: 'Yes. Children from six begin with Scratch and block coding; the federated project suits teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Grafton?', a: 'No. We have no premises in Australia and claim none. All classes are live online; learners need a computer and a dependable connection, and our listed phone number is in India.', boiler: true },
      { q: 'What do Grafton AI classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, or USD 150 a month one-to-one. All of it is agreed before payment.', boiler: true },
      { q: 'How many learners share a group?', a: 'Five to ten, grouped by level and goals rather than age or town. If no group time suits, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for the Northern Rivers and NSW',
    html: 'Find every New South Wales page in the <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">NSW state guide</a>. Down the coast are <a class="cg-inline-link" href="/best-coding-classes-in-coffs-harbour">coding classes in Coffs Harbour</a>, and to the north <a class="cg-inline-link" href="/best-coding-classes-in-lismore">coding classes in Lismore</a>. For why training models beats only prompting them, read <a class="cg-inline-link" href="/learn-to-train-ai-not-just-prompt-it-australia">learn to train AI, not just prompt it</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Grafton and New South Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/best-coding-classes-in-coffs-harbour', label: 'Coffs Harbour' },
    { href: '/best-coding-classes-in-lismore', label: 'Lismore' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-grft .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.3vw, 2.45rem); }
.cg-root.cg-grft .cg-hero h1 { font-weight: 750; letter-spacing: -0.019em; line-height: 1.07; }
.cg-root.cg-grft .cg-capsule { border-left: 4px solid var(--cg-accent); border-bottom: 1px solid rgba(52, 32, 118, 0.22); padding: 0.8rem 1rem; }
.cg-root.cg-grft .cg-eyebrow { letter-spacing: 0.125em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-grft .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.014em; }
.cg-root.cg-grft .cg-grid-3 { gap: clamp(0.9rem, 2.5vw, 1.9rem); }
.cg-root.cg-grft .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.001em; }
.cg-root.cg-grft .cg-table td + td { font-variant-numeric: tabular-nums; }
.cg-root.cg-grft .cg-ladder-col { border-left: 2px solid rgba(52, 32, 118, 0.3); padding-left: 0.95rem; }
.cg-root.cg-grft .cg-callout { border-top: 2px solid var(--cg-accent); background: rgba(52, 32, 118, 0.035); }
`,

  dossier: {
    curriculumAuthority: 'Grafton, ABS Census 2021 QuickStats, Significant Urban Area 1015 (read 10 October 2026): 19,255 people; median age 43; 4,973 families; 8,711 private dwellings; average 2.3 people per household; Community and Personal Service Workers 1,305 (18.1 percent; NSW 10.6; Australia 11.5); Labourers 957 (13.3 percent; NSW 8.2; Australia 9.0); Professionals 1,115 (15.5 percent; NSW 25.8; Australia 24.0); separate house 6,265 (82.3 percent; NSW 65.6; Australia 72.3); car as driver 4,875 (67.8 percent; NSW 43.1; Australia 52.7). ABS ASGS 2021 SUA area 106.2537 square kilometres. ABS SAL 2021 polygons at least 80 percent inside (our overlay): Grafton, South Grafton, Junction Hill, Great Marlow, Waterview, Carrs Creek, Carrs Island, Carrs Peninsula, Alumy Creek, Koolkhan, Trenayr, Southampton, Crowther Island. NSW Department of Education term dates (read 10 October 2026): 2027 Term 3 Monday 19 July to Friday 24 September. IANA tzdb australasia: Australia/Sydney rule AN, daylight saving 4 October 2026 to 4 April 2027.',
    localProject: 'Federated averaging with non-IID clients. NSW Spatial Services, NSW_Geocoded_Addressing_Theme MapServer layer 1 (AddressPoint), (c) Spatial Services, queried 10 October 2026 by envelope 152.8742, -29.7611, 153.0066, -29.5987: 11,966 points; 10,887 inside the ABS Grafton SUA polygon; locality from the address suffix: GRAFTON 6,155, SOUTH GRAFTON 3,402 (9,557 used). Our code (scratchpad au/r7/gra_fed.py): features = east and north kilometres from 152.93, -29.68, standardised; logistic regression, learning rate 0.5; test split 20 percent with numpy default_rng(7): 1,911 test (1,206 Grafton, 705 South Grafton), 7,646 train. Client A = Grafton training points only; client B = South Grafton only; FedAvg weighted by client size; 400 local steps in total. Test accuracy: centralised 400 steps 0.99948 (1 error); FedAvg E=1, 400 rounds 0.9995; E=5, 80 rounds 0.9995; E=20, 20 rounds 0.9990; E=100, 4 rounds 0.9979; north-only model 0.6583 (predicts Grafton for 1,859 of 1,911); south-only model 0.4767.',
    requiredMentions: [
      '19,255',
      '4,973',
      '8,711',
      '6,265',
      '1,911',
      'federated averaging',
      'client drift',
      'Crowther Island',
      '99.79%'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Grafton Significant Urban Area (1015): people, median age, families, dwellings, occupation, dwelling structure, travel to work.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1015' },
      { claim: 'NSW Spatial Services, NSW Geocoded Addressing Theme, AddressPoint layer (positions and locality labels only).', url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Geocoded_Addressing_Theme/MapServer/1' },
      { claim: 'NSW Department of Education, future and past NSW term and vacation dates (2027).', url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates' },
      { claim: 'ABS ASGS 2021 Significant Urban Area and Suburbs and Localities boundaries.', url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SUA/MapServer/0' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney and rule AN.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any individual address: only positions and locality labels were used, and none are printed.',
      'Claims that any named company or hospital uses federated learning: the page speaks only in general terms.',
      'That federated learning guarantees privacy: the page says it keeps data local but does not claim more.',
      'Income, rent, ancestry, religion, health and Indigenous status figures: excluded by the cluster rules.',
      'Any affiliation with NSW Spatial Services, the ABS or Clarence Valley Council.'
    ]
  }
};
