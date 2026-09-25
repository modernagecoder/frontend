'use strict';
// Waltham Forest (cg- London borough page, UK cluster Phase 5, row 186). Named sources only.
// Spine: can a computer tell an oak from a cherry by its size? GLA London Datastore, Local Authority Maintained Trees,
// Borough_tree_list_2025Nov.csv: 46,396 Waltham Forest rows (LB Waltham Forest 45,665; TfL 555; LB Redbridge 174; LB
// Newham 2). Kept the six most common genera with height, canopy, girth and a known age band: 20,401 trees (Cherry
// 6,118, Maple 5,620, Birch 2,801, Plane 2,279, Oak 2,180, Whitebeam 1,403). Features: height, canopy, girth, age band,
// street (location Highways). Decision tree grown by information gain (entropy, 40 candidate thresholds per feature,
// minimum 30 trees per split), 70/30 split with seed 20260925. Majority class (Cherry) 29.6% on test; label entropy
// 2.384 bits. Test accuracy by depth: 1 37.2%, 2 40.1%, 3 45.5%, 4 47.6%, 6 49.7%, 8 50.5%, 12 51.1% (train 59.1%).
// First split height <= 10 m (gain 0.246 bits); depth 2: short -> Cherry; tall street trees -> Plane; tall others -> Oak.
// Depth-4 recall: Cherry 87.5, Oak 48.5, Plane 39.3, Birch 38.9, Maple 24.6, Whitebeam 0.
// Lesson family: decision trees by information gain, overfitting, class imbalance; screened 25 September 2026
// (information gain 0; decision tree mentioned once in passing elsewhere). No Grade I entries in the borough.
// Waltham Forest Council's libraries page returned HTTP 202 with an empty body (challenge): not circumvented.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'WALTHAM FOREST', blurb: 'The William Morris Gallery, 46,000 street trees and a project that grows a decision tree to tell them apart.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-waltham-forest-london',
  code: 'wfr',
  accent: '#15791E',
  accentRationale: 'Waltham Forest: a fresh leaf green from the solver (4.50:1 on every paper tint), brighter than every other London green for a page about trees',
  pageType: 'governorate',
  place: {
    name: 'Waltham Forest',
    eyebrow: 'London Borough of Waltham Forest',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Waltham Forest, London',
  title: 'Coding Classes in Waltham Forest, Walthamstow | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Waltham Forest: Walthamstow, Leyton, Leytonstone, Chingford, Highams Park and Wood Street. Ages 6 to 67.',
  ogDescription: 'Waltham Forest coding and Python classes, with a machine learning project that grows a decision tree to tell oaks, cherries and planes apart from their size.',
  twitterDescription: 'Waltham Forest coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Waltham Forest Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Waltham Forest, taught live in English.'
  },

  h1: 'Coding classes in Waltham Forest',
  capsuleQ: 'What are the best coding classes in Waltham Forest?',
  capsule: 'Waltham Forest is the north east London borough of Walthamstow, Leyton, Leytonstone, Chingford and Highams Park, with 278,426 residents at the 2021 Census, the William Morris Gallery in Lloyd Park and more than 46,000 trees on the public list of trees looked after by councils. The coding class to choose teaches how machine learning really decides, and this page does that with those trees: a decision tree, built from scratch, that asks yes-or-no questions about height and position until it can guess whether a tree is an oak, a cherry or a plane. Lessons are taught live on video by teachers in India, for learners from 6 to 67, one to one or in small groups of five to ten at the same stage. The first lesson is free; after it, a group place is USD 100 a month and a private place USD 150 a month.',
  lead: 'The Greater London Authority publishes a list of trees maintained by London\'s councils, and Waltham Forest\'s part of it runs to 46,396 trees, most with a height, a canopy width, a trunk girth and an age band. Our learners take the six commonest kinds, cherry, maple, birch, plane, oak and whitebeam, and ask a machine learning question: from size and position alone, can a program tell which is which? They build a decision tree, the same kind of model used inside many real AI systems, choosing each question by how much it reduces uncertainty, a measure called information gain. The first question it chooses is simple: is the tree taller than ten metres? The answers that follow reveal what the data knows, and exactly where it runs out.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Waltham Forest.',

  picks: {
    eyebrow: 'Course picks for Waltham Forest',
    h2: 'First courses from Waltham Forest',
    intro: 'Picture a Year 2 child in Chingford who collects leaves from Epping Forest walks, a Year 9 pupil in Walthamstow curious about how AI makes decisions, a Year 12 student in Leytonstone choosing biology or computer science, and a tree officer or gardener in Highams Park who knows every species by sight. Each can start with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch guessing game that asks yes-or-no questions to identify a tree, a first decision tree.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with real tree records: count each kind and find the tallest and the widest.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including the information-gain decision tree on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who use or buy AI tools and want to see how a model chooses its questions.' }
    ]
  },

  sections: [
    {
      id: 'walthamforest', tint: '', eyebrow: 'Waltham Forest in numbers',
      h2: '278,426 residents and 46,396 listed trees',
      intro: 'Every figure below is the named organisation\'s own, or our count from its published data.',
      body: [
        { kind: 'table', caption: 'Waltham Forest facts', head: ['Fact', 'Figure', 'Source'], rows: [
          ['Usual residents, 2021 Census', '278,426', 'ONS table TS001'],
          ['Trees in Waltham Forest on the London tree list', '46,396', 'Greater London Authority, November 2025 file'],
          ['Heritage List entries in the borough', '117: 13 Grade II*, 104 Grade II', 'Historic England data, counted 25 September 2026'],
          ['Lines at Walthamstow Central', 'Victoria and Weaver', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'William Morris Gallery', p: 'The Water House in Lloyd Park, now the William Morris Gallery, is Grade II*; its list entry dates it to 1762.' },
          { h3: 'A hunting lodge', p: 'Queen Elizabeth\'s Hunting Lodge at Chingford is also Grade II*, as are Walnut Tree House and Chestnuts House.' },
          { h3: 'Library and cinema', p: 'Leytonstone Library and the former ABC Cinema are among the borough\'s Grade II* entries; Waltham Forest has none at Grade I.' }
        ] }
      ]
    },
    {
      id: 'trees', tint: 'tint', eyebrow: 'The data',
      h2: 'Six kinds of tree, five measurements each',
      intro: 'We kept trees from the six commonest groups that have a height, canopy, girth and age band recorded, and noted whether each stands on a street. That leaves 20,401 trees.',
      body: [
        { kind: 'table', caption: 'Trees used in the project', head: ['Kind of tree', 'Trees'], rows: [
          ['Cherry', '6,118'],
          ['Maple', '5,620'],
          ['Birch', '2,801'],
          ['Plane', '2,279'],
          ['Oak', '2,180'],
          ['Whitebeam', '1,403']
        ] },
        { kind: 'p', text: 'Cherries are the largest group, so a lazy model that always answers "cherry" is right 29.6% of the time on unseen trees. That is the score to beat. Seventy per cent of the trees are used to build the model and the other thirty per cent are kept back to test it, chosen at random with a fixed seed so anyone can repeat the split. We could not add a library list for the borough: the council\'s libraries page sent our automated reader an empty challenge, and we never get round such checks.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Growing a decision tree by information gain',
      intro: 'At every step the program tries every question it could ask, such as "is the tree taller than 10 metres?", and picks the one that leaves the least uncertainty about the answer.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Measure uncertainty', p: 'Entropy measures how mixed a group is. With six kinds of tree in these proportions it is 2.38 bits: a lot of uncertainty.' },
          { h3: '2. Choose the question', p: 'For each possible split, work out how much entropy drops on average. The biggest drop, the information gain, wins. First winner: height at or below 10 metres, a gain of 0.25 bits.' },
          { h3: '3. Repeat and test', p: 'Split each group again, deeper and deeper, then score the tree on the trees it has never seen.' }
        ] },
        { kind: 'table', caption: 'Accuracy on unseen trees as the decision tree grows, run 25 September 2026', head: ['Depth of tree', 'Right on trees it learned from', 'Right on unseen trees'], rows: [
          ['Always guess cherry', '-', '29.6%'],
          ['1 question', '37.2%', '37.2%'],
          ['3 levels', '45.2%', '45.5%'],
          ['4 levels', '47.6%', '47.6%'],
          ['6 levels', '50.7%', '49.7%'],
          ['12 levels', '59.1%', '51.1%']
        ] },
        { kind: 'p', text: 'The shallow tree reads like common sense: short trees are usually cherries; tall trees on streets are usually planes; tall trees elsewhere are usually oaks. Deeper trees keep improving on the trees they learned from, but barely improve on new ones: at twelve levels the gap between 59% and 51% is the model memorising quirks rather than learning. Some kinds are nearly invisible to it. At four levels it finds 87.5% of the cherries but 24.6% of the maples and not a single whitebeam, because size and position simply do not separate them. A decision tree can only be as good as the questions its data allows it to ask.' },
        { kind: 'callout', h3: 'Why build one rather than ask an AI', p: 'An AI system can train a decision tree in one line of code and report an accuracy. A learner who has grown one by hand, question by question, knows what that number hides: a baseline of 29.6% to beat, a gap between training and test that signals overfitting, and whole classes the model never gets right. Those are exactly the questions to ask of any AI system that makes decisions about people or places.' }
      ]
    },
    {
      id: 'fairness', tint: 'tint', eyebrow: 'Reading a model honestly',
      h2: 'Three things accuracy alone does not tell you',
      intro: 'The project ends with learners reporting more than one number.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Compare with a baseline', p: 'A model that is right 47.6% of the time sounds poor until you know that guessing the commonest answer gets 29.6%.' },
          { h3: 'Watch the gap', p: 'When training accuracy races ahead of test accuracy, the model is memorising. Learners stop growing the tree where the gap opens.' },
          { h3: 'Look class by class', p: 'An overall score can hide a group the model always gets wrong, as with whitebeam here. Report recall for every class.' }
        ] },
        { kind: 'p', text: 'GCSE computer science pupils can follow the yes-or-no questions and the idea of a test set; A-level students can compute entropy and information gain by hand and code the splitting rule. The tree records are the Greater London Authority\'s; the cleaning, the tree-building, and every accuracy and recall figure are our own, run on 25 September 2026. The GLA, Waltham Forest Council, the William Morris Gallery, Historic England, TfL and the ONS have no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Walthamstow Central and a laptop at home',
      intro: 'Walthamstow has Underground and Overground trains. Our lessons start wherever the learner sits down.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Walthamstow Central', p: 'TfL\'s open data lists the Victoria and Weaver lines at Walthamstow Central.' },
          { h3: 'Chingford to Leyton', p: 'A learner near the forest in Chingford and one in Leyton can share one class from their homes.' },
          { h3: 'Every learner counted', p: 'Small groups of five to ten at one stage mean no learner is the whitebeam of the class, overlooked by the model.' }
        ] },
        { kind: 'spec', title: 'Waltham Forest in London', p: 'Waltham Forest is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> covers all of them and the City, adding each page as it is published, including <a class="cg-inline-link" href="/coding-classes-in-redbridge-london">Redbridge</a> to the east and <a class="cg-inline-link" href="/coding-classes-in-hackney-london">Hackney</a>, whose page studies trees in a different way.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From twenty questions to machine learning',
    intro: 'We find the learner\'s starting point in the free lesson; their school year only helps us guess.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Yes-or-no games', p: 'Children build guessing games in Scratch that narrow down an answer one question at a time.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Sorting by rules', p: 'Python that sorts real records into groups with if-statements and counts how often the rules are right.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Learning from data', p: 'Entropy, information gain, test sets and overfitting, a real first model and a strong base for A-level projects.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Questioning AI', p: 'Adults learn to read model results critically: baselines, gaps and the groups a model misses.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI tools train models in seconds. Why should a Waltham Forest teenager grow one by hand?',
    intro: 'Because the numbers an AI reports mean little until you know how they were made.',
    p1: 'Machine learning libraries will fit a decision tree to any spreadsheet instantly and print an accuracy. On Waltham Forest\'s trees, that number could be 51% or 59% depending on whether you test on new data, and it hides the fact that whitebeams are never recognised at all. A learner who has chosen each split by information gain, watched the training score race ahead of the test score, and looked class by class, can ask the questions that matter of any AI system, including the ones that affect people\'s lives.',
    p2: 'Those habits, compare with a baseline, keep data aside for testing, and check every group, are the core of responsible AI. Tools will keep producing models; people who can judge them will keep being needed.',
    closer: 'Waltham Forest looks after tens of thousands of trees. A learner here who can teach a computer to recognise some of them, and explain where it fails, has taken a real first step into artificial intelligence.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Leytonstone to Chingford, classes live',
    intro: 'Across Waltham Forest, a lesson is a video call away.',
    cells: [
      { h3: 'Your own table', p: 'A laptop or desktop, a headset and a steady broadband connection are the only things a learner needs.' },
      { h3: 'English school stages', p: 'We describe progress in English Key Stages, from early primary to sixth form, naming GCSE and A level where they fit. Lessons are in English.' },
      { h3: 'A free first session', p: 'The first lesson is real teaching and closes with a recommended level and course, with no card details requested.' },
      { h3: 'Balanced classes', p: 'Five to ten learners at one stage, drawn from across the UK and beyond, so there is usually a convenient evening.' },
      { h3: 'Two evenings each week', p: 'Classes meet twice weekly in the evening in most cases, with agreed pauses for holidays and exams.' },
      { h3: 'On London time', p: 'Teachers are based in India, and every time we send is already in UK time.' }
    ],
    spec: { title: 'A green borough, a matched class', p: 'About 278,000 people live in Waltham Forest, and a good class still needs five learners at the same stage free at the same time, so ours draw from far beyond the borough.' }
  },

  fees: {
    h2: 'Fees for Waltham Forest families',
    intro: 'A free first lesson, then one monthly fee that is the same in Chingford and Leyton.',
    first: 'A full first lesson with a teacher, free, ending with a recommended level, course and weekly time.',
    group: 'Around eight live lessons each month in a class of five to ten at one stage.',
    private: 'Around eight live lessons each month, one learner, one teacher.',
    closer: 'Waltham Forest families pay in US dollars, like every family outside India, and the site shows no pound prices. Nothing is charged until after the free lesson and until a course and regular slot have been chosen. The pricing page covers pausing, missed lessons and swapping between class and private teaching.'
  },

  reviewsH2: 'Reviews families have left on Google',

  book: {
    h2: 'Book a free lesson',
    intro: 'A year group or age, and one thing the learner enjoys, is enough for us to prepare. We could start with a Scratch guessing game, a Python tree counter, or the decision tree project on this page.',
    success: 'Thank you. Your Waltham Forest lesson request has arrived.'
  },

  faq: {
    h2: 'Waltham Forest families\' questions',
    intro: 'About the borough, the decision tree project and our lessons.',
    items: [
      { q: 'How many people live in Waltham Forest?', a: 'The 2021 Census counted 278,426 usual residents in the London Borough of Waltham Forest, in ONS table TS001.' },
      { q: 'Is the William Morris Gallery a listed building?', a: 'Yes. Historic England lists the Water House in Lloyd Park, now the William Morris Gallery, at Grade II*, and dates it to 1762.' },
      { q: 'What is a decision tree?', a: 'A model that makes a prediction by asking a series of yes-or-no questions, such as whether a tree is taller than ten metres, each answer leading to the next question until it reaches a guess.' },
      { q: 'What is information gain?', a: 'The drop in uncertainty, measured as entropy in bits, that a question produces. The decision tree picks the question with the biggest gain at each step; here the first is whether the tree is at most ten metres tall.' },
      { q: 'How accurate was the model?', a: 'On trees it had never seen, a four-level tree was right 47.6% of the time, against 29.6% for always guessing cherry. It found most cherries but no whitebeams, because size and position do not separate them.' },
      { q: 'When would Waltham Forest lessons be?', a: 'After the free lesson we suggest a class at the right level with room and its regular evening, in UK time; the teacher is in India.' },
      { q: 'What does a learner need?', a: 'A computer with sound and a steady connection. The decision tree project needs Python and the free London tree list.' },
      { q: 'Is there a Modern Age Coders centre in Waltham Forest?', a: 'No. There is no Waltham Forest centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Waltham Forest cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Elsewhere in the capital',
    html: 'Our <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists every borough and the City, with links added as pages go live, such as <a class="cg-inline-link" href="/coding-classes-in-enfield-london">Enfield</a> to the west and <a class="cg-inline-link" href="/coding-classes-in-tower-hamlets-london">Tower Hamlets</a> to the south. A first decision tree leads straight into our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes for London learners</a>, and families comparing the four UK school systems can use the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Waltham Forest and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-redbridge-london', label: 'Redbridge' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-wfr .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-wfr .cg-hero h1 { font-weight: 760; letter-spacing: -0.018em; line-height: 1.05; }
.cg-root.cg-wfr .cg-capsule { border-left: 4px solid var(--cg-accent); border-right: 1px solid var(--cg-accent); padding: 0 1rem; }
.cg-root.cg-wfr .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wfr .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.011em; }
.cg-root.cg-wfr .cg-grid-3 { gap: clamp(0.95rem, 2.5vw, 1.8rem); }
.cg-root.cg-wfr .cg-table caption { font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-wfr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wfr .cg-table td:last-child { font-weight: 650; }
.cg-root.cg-wfr .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.65rem; }
.cg-root.cg-wfr .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Waltham Forest. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000031): 278,426 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 117 (II* 13, II 104, no Grade I); II* include 1065620 THE WATER HOUSE, LLOYD PARK (WILLIAM MORRIS GALLERY) (1762), 1293481 Queen Elizabeth\'s Hunting Lodge, 1065586 WALNUT TREE HOUSE, 1191062 CHESTNUTS HOUSE, 1418380 Leytonstone Library, 1065590 ABC Cinema. TfL HUBWHC (Walthamstow Central): Victoria, Weaver. walthamforest.gov.uk/libraries returned HTTP 202 with empty body on 25 September 2026: not circumvented.',
    localProject: 'GLA London Datastore, Borough_tree_list_2025Nov.csv, borough Waltham Forest: 46,396 rows (maintainer LB Waltham Forest 45,665; Transport for London 555; LB Redbridge 174; LB Newham 2). Kept common_genus in {Cherry, Maple, Oak, Birch, Plane, Whitebeam} with numeric height_m, canopy_m, girth_dbh and age_cat in five bands: 20,401 (Cherry 6,118; Maple 5,620; Birch 2,801; Plane 2,279; Oak 2,180; Whitebeam 1,403). Features height, canopy, girth, age (1-5), street (location == Highways). random.Random(20260925) shuffle, 70/30. ID3-style binary splits by entropy information gain, up to 40 thresholds per feature, min 30 per node. Majority Cherry test 29.6%; label entropy 2.384 bits. Test (train) accuracy: depth 1 37.2 (37.2); 2 40.1 (41.2); 3 45.5 (45.2); 4 47.6 (47.6); 6 49.7 (50.7); 8 50.5 (54.0); 12 51.1 (59.1). Root split height <= 10.0 m, gain 0.246; depth 2: <=10 m -> Cherry both branches; >10 m street -> Plane, >10 m not street -> Oak. Depth-4 test recall: Cherry 87.5, Oak 48.5, Plane 39.3, Birch 38.9, Maple 24.6, Whitebeam 0.0. Lesson family: decision tree by information gain, overfitting, class recall; screened 25 September 2026.',
    requiredMentions: [
      '278,426',
      '46,396',
      'information gain',
      'William Morris Gallery',
      'Queen Elizabeth\'s Hunting Lodge',
      'Walnut Tree House',
      'Chestnuts House',
      'Leytonstone Library',
      'whitebeam'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Waltham Forest E09000031: 278,426 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000031&measures=20100' },
      { claim: 'Greater London Authority, Local Authority Maintained Trees, borough tree list November 2025.', url: 'https://data.london.gov.uk/dataset/local-authority-maintained-trees' },
      { claim: 'Historic England list entry 1065620, The Water House, Lloyd Park (William Morris Gallery), Grade II*, 1762.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1065620' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Waltham Forest on 25 September 2026: 117 (13 II*, 104 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint HUBWHC (Walthamstow Central): Victoria, Weaver.', url: 'https://api.tfl.gov.uk/StopPoint/HUBWHC' }
    ],
    rejectedClaims: [
      'Waltham Forest library list: council page returned a challenge; none named.',
      'Epping Forest ownership and extent within the borough: not read at a primary source for this build; mentioned only as a place for walks in a scenario.',
      'That the Victoria line terminates at Walthamstow: not verified in the TfL record read; not stated.',
      'Football club in Leyton: not mentioned, to avoid any implied affiliation.',
      'Waltham Forest schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth: never a standout; used only to order the build.'
    ]
  }
};
