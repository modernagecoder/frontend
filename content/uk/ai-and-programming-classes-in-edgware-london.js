'use strict';
// Edgware, Barnet and Harrow (cg- district page, UK cluster Phase 9, row 440). Keyword slug per the owner's 2026-09-30
// decision (rotation with city suffix), with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine:
// what happens to a model when some of its training answers are wrong? (label noise: random flips against systematic
// mislabelling, models that memorise against models that average, accuracy hiding damage to one class).
// Data (read 30 September 2026): Nomis Census 2021 at output-area level for Barnet (E09000003) and Harrow (E09000015):
// TS044 accommodation type (NM_2062_1, categories total and purpose-built flats), TS006 density (NM_2026_1), TS017
// one-person households (NM_2037_1), TS045 no car (NM_2063_1). 1,801 output areas; 238,545 households, 77,977 in
// purpose-built blocks of flats; 483 areas (26.8%) have a majority of households in such flats = label "flat-majority".
// Our run (scratchpad edg/noise.py): inputs log density, one-person share, no-car share; 30 random 70/30 splits; training
// labels corrupted, test labels left clean. Clean-test accuracy / flat-majority areas found (%). No noise: logistic
// regression 82.0 / 55.7; 1-nearest-neighbour 78.4 / 59.0; 15-nearest 83.0 / 56.0; decision tree 77.8 / 58.6. Random
// flips 30%: logistic 81.2 / 51.8; 1-NN 61.3 / 53.3; 15-NN 76.4 / 54.5; tree 60.2 / 53.0. Systematic (40% of flat-majority
// training areas relabelled as not): logistic 77.6 / 20.4; 1-NN 76.5 / 35.7; 15-NN 77.4 / 20.3; tree 75.9 / 35.7. Always
// answering "not flat-majority": 73.2%.
// Lesson family: label noise in training data. Screened 30 September 2026: "label noise" 0 hits; claimed as edg. Barnet
// borough page = Nagel-Schreckenberg traffic; Harrow = input validation; neither reused.
// Place facts: Census 2021 usual residents by 2022 ward (Nomis NM_2021_1, TYPE153), per ward, not summed: Edgware
// (Barnet) 19,998; Edgwarebury 12,109; Burnt Oak 21,857; Edgware (Harrow) 15,713. postcodes.io: Burnt Oak (Barnet),
// Canons Park and Little Stanmore (Harrow) suburban areas in HA8; Edgware a settlement; Edgware Bury a hamlet.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'EDGWARE', label: 'Edgware', blurb: 'AI and programming classes for Edgware, with a machine learning project on what wrong answers in the training data do to a model.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-edgware-london',
  code: 'edg',
  accent: '#7A0B3C',
  accentRationale: 'Edgware: a deep raspberry (10.82:1 contrast), chosen by hand to stand apart from neighbouring pages',
  pageType: 'city',
  place: {
    name: 'Edgware',
    eyebrow: 'Edgware, Barnet and Harrow, London',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'Barnet', href: '/coding-classes-in-barnet-london' },
    { label: 'Harrow', href: '/coding-classes-in-harrow-london' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Edgware, London',
  title: 'AI and Programming Classes in Edgware, London | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Edgware, Burnt Oak, Canons Park and Edgwarebury learners aged 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Edgware, with a Census project showing what mislabelled training data does to a machine learning model.',
  twitterDescription: 'Edgware AI, programming, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Edgware',
    description: 'Online AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Edgware, Barnet and Harrow, taught live.'
  },

  h1: 'AI and programming classes in Edgware',
  capsuleQ: 'Which are the best AI and programming classes in Edgware?',
  capsule: 'Edgware straddles two London boroughs, and the ONS counts each 2022 ward on its own: at Census 2021 there were 19,998 usual residents in the Edgware ward of Barnet, 15,713 in the Edgware ward of Harrow and 12,109 in Edgwarebury. Burnt Oak and Canons Park are recorded suburban areas in the same HA8 postcode district. Tutors in India teach AI, programming, Python, vibe coding and maths here over live video to anyone aged six to 67, one-to-one or in groups of five to ten at a shared level. Reasoning comes before tools, so a learner can ask where a model\'s answers came from. Lesson one is free and ends with a course suggestion. The Edgware project trains models on 1,801 Census areas, deliberately spoils some of the training answers, and measures which models cope. Ongoing lessons are USD 100 a month in a group or USD 150 a month privately.',
  lead: 'A machine learning model learns from examples that come with answers attached, called labels. In real projects some of those labels are wrong: a tired annotator, a typo, an out-of-date record. This is label noise, and it is everywhere. Two questions matter. Does a little noise ruin a model, and does it matter whether the mistakes are random or all lean the same way? This project answers both with real data: Census output areas across Barnet and Harrow, the two boroughs Edgware sits in, where the model must say whether most households in an area live in purpose-built flats.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Edgware?',

  picks: {
    eyebrow: 'Edgware course picks',
    h2: 'Edgware courses in reasoning, Python and AI',
    intro: 'Find the age band that fits. Each course begins with one live lesson at no charge, and booking needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: learning from examples, and what to do when an example is wrong.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with an AI and tested properly.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including the spoiled-labels experiment on Census areas.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How modern AI is trained, where training data goes wrong, and AI agents in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Edgware, Barnet and Harrow',
      h2: 'Edgware, Edgwarebury, Burnt Oak and Canons Park',
      intro: 'Census 2021 ward counts on both sides of the borough line, and places recorded in HA8.',
      body: [
        { kind: 'table', caption: 'Usual residents by 2022 ward, Census 2021, ONS via Nomis', head: ['Ward', 'Borough', 'Residents (2021)'], rows: [
          ['Burnt Oak', 'Barnet', '21,857'],
          ['Edgware', 'Barnet', '19,998'],
          ['Edgware', 'Harrow', '15,713'],
          ['Edgwarebury', 'Barnet', '12,109']
        ] },
        { kind: 'p', text: 'Each line is the ONS count for one ward; they are not added together, and no official figure covers Edgware as a single place. On postcodes.io, Burnt Oak is a suburban area of Barnet and Canons Park and Little Stanmore are suburban areas of Harrow, all in the HA8 district, with Edgware Bury recorded as a hamlet. Both boroughs teach England\'s national curriculum; we plan by school year, help with GCSE and A level, and keep clear of the holiday weeks you give us.' },
        { kind: 'callout', h3: 'Barnet, Harrow and how we teach', p: 'Borough pages: <a class="cg-inline-link" href="/coding-classes-in-barnet-london">coding classes in Barnet</a> and <a class="cg-inline-link" href="/coding-classes-in-harrow-london">Harrow</a>. The reason we start with thinking is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Edgware project',
      h2: 'Label noise: training a model on answers that are partly wrong',
      intro: 'Clean test data, deliberately spoiled training data, four kinds of model.',
      body: [
        { kind: 'p', text: 'From the Nomis API the learner collects Census 2021 tables for all 1,801 output areas in Barnet and Harrow. Of 238,545 households, 77,977 live in purpose-built blocks of flats, and in 483 areas, 26.8%, such flats are the majority. That yes-or-no fact is the label. The model sees three clues per area: population density, the share of one-person households and the share of households with no car. Four models are trained: logistic regression, a decision tree, a nearest-neighbour model that copies the single most similar area, and one that takes a vote among the 15 most similar. Then the training labels are corrupted, while the test labels stay correct.' },
        { kind: 'table', caption: 'Accuracy on clean test areas after corrupting training labels, averages of 30 splits, our Python run on Census 2021 data', head: ['Training labels', 'Logistic regression', 'Vote of 15 neighbours', 'Single nearest neighbour', 'Decision tree'], rows: [
          ['All correct', '82.0%', '83.0%', '78.4%', '77.8%'],
          ['10% flipped at random', '81.9%', '82.2%', '72.4%', '71.0%'],
          ['30% flipped at random', '81.2%', '76.4%', '61.3%', '60.2%'],
          ['40% of flat areas relabelled "not"', '77.6%', '77.4%', '76.5%', '75.9%']
        ] },
        { kind: 'p', text: 'Random noise sorts the models into two camps. Logistic regression, which fits one smooth boundary through all the examples, loses under a point even with 30% of labels flipped, because random mistakes on both sides largely cancel. The single-neighbour model and the unpruned tree memorise individual examples, wrong ones included, and fall to about 60%. Systematic noise is a different animal. When 40% of the flat-majority areas are relabelled as "not", accuracy still looks respectable at around 77%, but only because 73.2% of areas are not flat-majority anyway. The share of genuine flat-majority areas the logistic model finds collapses from 55.7% to 20.4%. It has learned the annotator\'s bias.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort animal cards from examples where a few labels are swapped, and see which sorting rule survives.' },
          { h3: 'Ages 11 to 15', p: 'Load the Barnet and Harrow data in Python and flip some training labels by hand.' },
          { h3: 'Ages 15 and up', p: 'Compare four models under random and one-sided label noise, and report more than accuracy.' }
        ] },
        { kind: 'callout', h3: 'Census data, our experiment', p: 'Counts are Office for National Statistics Census 2021 data from Nomis, under the Open Government Licence. The label, the deliberate corruption and every score are our own work; the published data itself is not at fault.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Training data and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A model can only be as fair as the answers it was shown.',
      body: [
        { kind: 'table', caption: 'From the Edgware label experiment to working with AI', head: ['In the label noise project', 'When you rely on a trained model'], rows: [
          ['Random flips barely hurt logistic regression', 'Some noise is survivable with the right model'],
          ['Memorising models fell to about 60%', 'Models that copy examples copy their mistakes'],
          ['One-sided errors cut flats found to 20.4%', 'Biased labels teach biased behaviour'],
          ['Accuracy still read 77%', 'A headline score can hide the damage'],
          ['Test labels were kept clean', 'Always evaluate on answers you trust']
        ] },
        { kind: 'p', text: 'Every large AI model is trained on data labelled or written by people, and some of it is wrong in ways that lean one direction. That is one route by which bias gets in. In vibe coding the learner describes a program and an AI writes it; our Edgware learners ask where the training answers came from and check a sample by hand before trusting a classifier. AI agents that label data for other systems can spread their own mistakes the same way. Agent projects start when a learner can write and debug Python unaided, which for most means sixteen and over, and Copilot Studio agents are taught one-to-one only. Two pages go further: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We used open data from the ONS, Nomis and postcodes.io, none of whom has any link to Modern Age Coders. The experiment and its errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From sorting cards to robust models',
    intro: 'School year is where we start guessing; the trial lesson is where we find out.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Examples, rules and spotting a wrong example.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Classifiers, training data and honest testing beside GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'AI in practice', p: 'Data quality, model training and AI agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and training data',
    h2: 'What is label noise in machine learning, and how much does it matter?',
    intro: 'Label noise means some training examples carry the wrong answer; random noise is often tolerated by models that average over many examples, while systematic noise, errors that lean one way, teaches the model the same bias.',
    p1: 'On 1,801 Census areas in Barnet and Harrow, flipping 30% of training labels at random cost logistic regression under one point of accuracy but dropped a single-nearest-neighbour model from 78.4% to 61.3%; one-sided mislabelling cut the flat-majority areas found from 55.7% to 20.4%.',
    p2: 'Learners who have run that experiment ask of any AI model: who labelled its training data, and which way would their mistakes lean?',
    closer: 'Asking where the answers came from keeps Edgware teenagers a step ahead of the models they use, and writing code is how they learn to ask it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Burnt Oak to Canons Park, online',
    intro: 'You will need a computer with a camera and an internet line good enough for video, nothing more.',
    cells: [
      { h3: 'Pupil writes, tutor questions', p: 'The learner types and runs each step; on the shared screen the tutor keeps asking where a result came from.' },
      { h3: 'First topic from the trial', p: 'The free lesson tells us what is already known; we also note the exam board.' },
      { h3: 'Trial without charge', p: 'Lesson one is free and ends with a course suggestion.' },
      { h3: 'Small classes, one level', p: 'Five to ten learners from around the UK who are at the same stage.' },
      { h3: 'Two sessions weekly', p: 'Not during school holidays.' },
      { h3: 'No drifting timetable', p: 'UK clock changes are handled by our tutors, so your slot stays where it is.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at the same level with the same free evening almost never live on the same road. A video class brings them together.' }
  },

  fees: {
    h2: 'Edgware fees',
    intro: 'Edgware is covered by our international prices, charged in every country other than India.',
    first: 'A whole lesson free, then our recommendation.',
    group: 'About eight live lessons a month in a small class.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Invoices are in US dollars and never in sterling; none is issued before the trial has settled both a course and a weekly time. Holidays, missed lessons and changing between class and private tuition are explained on the pricing page.'
  },

  reviewsH2: 'Barnet and Harrow families, and learners nationwide, on Google',

  book: {
    h2: 'Book a free Edgware lesson',
    intro: 'Send an age or school year and whatever the learner is keen on. The trial could be a wrong-label card sort, a Scratch game built with an AI, a short Python script, or a tiny classifier on real data.',
    success: 'Thank you. Your Edgware request has reached us.'
  },

  faq: {
    h2: 'Edgware questions',
    intro: 'Wrong labels, the Census experiment, vibe coding and how lessons run.',
    items: [
      { q: 'How many people live in Edgware?', a: 'No single official figure exists. Census 2021 counted 19,998 in the Edgware ward of Barnet and 15,713 in the Edgware ward of Harrow, reported separately.' },
      { q: 'Are AI and programming classes available online in Edgware?', a: 'Yes. Classes are live video calls for ages 6 to 67 in Edgware, Burnt Oak, Canons Park and across both boroughs.' },
      { q: 'Which models cope with noisy labels?', a: 'Those that average over many examples, such as logistic regression or a vote among many neighbours. Models that memorise single examples, such as one nearest neighbour or an unpruned tree, suffer most.' },
      { q: 'Why is systematic label noise worse than random noise?', a: 'Random mistakes partly cancel out; mistakes that all lean one way are learned as if they were the truth. In our test, accuracy stayed near 77% while flat-majority areas found fell to 20.4%.' },
      { q: 'What does the Edgware project involve?', a: 'Predicting which of 1,801 Barnet and Harrow Census areas are mostly flats, then corrupting training labels at random and one-sidedly to see what breaks.' },
      { q: 'Is vibe coding taught?', a: 'Yes, to every age group: the learner explains what to build, and checks what the AI builds.' },
      { q: 'When are learners ready to build AI agents?', a: 'When they can write and debug Python unaided, usually sixteen and over; Copilot Studio agents are private lessons only.' },
      { q: 'Do you cover GCSE and A level?', a: 'Computer science and maths at both levels, taught so the ideas make sense; we do not promise grades.' },
      { q: 'What will lessons cost?', a: 'The trial is free. Then USD 100 a month for a group place, or USD 150 a month for one-to-one.' },
      { q: 'Do lessons run in school holidays?', a: 'No; give us the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More north-west London pages',
    html: 'Neighbouring pages and what each explores: <a class="cg-inline-link" href="/coding-classes-in-barnet-london">Barnet</a> (traffic jams from simple rules), <a class="cg-inline-link" href="/coding-classes-in-harrow-london">Harrow</a> (checking inputs), <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-wembley-london">Wembley</a> (trade-offs) and <a class="cg-inline-link" href="/best-coding-class-in-london">London</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has every other area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Edgware, Barnet and Harrow',
  footerPlaces: [
    { href: '/coding-classes-in-barnet-london', label: 'Barnet' },
    { href: '/coding-classes-in-harrow-london', label: 'Harrow' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-edg .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-edg .cg-hero h1 { font-weight: 790; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-edg .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-edg .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-edg .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.021em; }
.cg-root.cg-edg .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-edg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-edg .cg-table th { letter-spacing: 0.04em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-edg .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-edg .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Barnet (E09000003) and Harrow (E09000015), London. England: national curriculum, GCSE and A level. Census 2021 usual residents by 2022 ward (Nomis NM_2021_1, TYPE153): Edgware (Barnet) 19,998; Edgwarebury 12,109; Burnt Oak 21,857; Edgware (Harrow) 15,713. postcodes.io (HA8): Burnt Oak (Barnet), Canons Park, Little Stanmore (Harrow) suburban areas; Edgware settlement; Edgware Bury hamlet.',
    localProject: 'Census 2021 OA data Barnet + Harrow (TS044, TS006, TS017, TS045): 1,801 OAs, 238,545 households, 77,977 in purpose-built flats, 483 flat-majority (26.8%). 30 splits, clean test. Accuracy / flats found: clean logistic 82.0/55.7, 1-NN 78.4/59.0, 15-NN 83.0/56.0, tree 77.8/58.6; random 10% 81.9, 72.4, 82.2, 71.0; random 30% 81.2, 61.3, 76.4, 60.2; systematic 40% 77.6/20.4, 76.5/35.7, 77.4/20.3, 75.9/35.7; baseline 73.2. Lesson family: label noise.',
    requiredMentions: [
      '19,998',
      '15,713',
      '12,109',
      '21,857',
      '1,801',
      '77,977',
      'Burnt Oak',
      'Canons Park',
      'Edgwarebury',
      'label noise'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS044, TS006, TS017, TS045 and TS001 via Nomis (output areas and 2022 wards).', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Nomis API dataset NM_2062_1, Census 2021 TS044 accommodation type.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2062_1.def.sdmx.json' },
      { claim: 'postcodes.io places: suburban areas in Barnet and Harrow (HA8).', url: 'https://api.postcodes.io/places?q=Burnt%20Oak' }
    ],
    rejectedClaims: [
      'A population for Edgware as a whole: no published figure for exactly that area; ward figures only, not summed.',
      'Any claim that the Census data is mislabelled: the corruption is ours, applied only to training copies.',
      'Community, religious or heritage descriptions: not used.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
