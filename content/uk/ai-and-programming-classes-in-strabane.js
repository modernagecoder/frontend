'use strict';
// Strabane (cg- town page, UK cluster Phase 8, towns band A, row 436). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: can a machine learning model use data nobody has
// labelled? (semi-supervised learning: label spreading over a similarity graph that includes unlabelled examples, against a
// classifier trained on the labelled examples alone, as the share of labels shrinks).
// Data (read 29 September 2026): OpenStreetMap API 0.6 over bbox -7.500,54.810,-7.430,54.845 (6 tiles, ODbL); analysis kept
// latitudes 54.817 to 54.845 (the span of the mapped border line) and only buildings on the UK side of the UK/Ireland
// border (OSM relations 62149 and 62273, 14 shared ways; nearest-segment side test, checked on 8 place nodes). 2,939 closed
// building outlines of at least 5 square metres: 1,155 homes (house, detached, semidetached_house, terrace, residential,
// apartments, bungalow), 203 other typed buildings, 1,581 untyped ("yes").
// Our run (scratchpad sbn/lp.py): features = position, log area, number of buildings sharing a mapped point; standardised.
// Label spreading (scikit-learn LabelSpreading, k-nearest-neighbour graph, 10 neighbours, alpha 0.2) using all 2,939
// buildings, against k-nearest-neighbours (5) trained on the labelled ones only. Stratified labelled share, 20 random
// draws, balanced accuracy on the hidden typed buildings (label spreading / labelled-only): 1% (14 labelled: 12 homes,
// 2 other) 54.8 / 50.0; 2% (27) 58.6 / 51.6; 5% (68) 69.9 / 63.6; 10% (136) 76.5 / 71.0; 25% (340) 83.1 / 76.9.
// Lesson family: semi-supervised learning, label propagation / spreading on a graph. Screened: "label propagation",
// "label spreading", "semi-supervised" 0 hits in content/uk, nl, ie (course syllabi only). Kirkcaldy used typed buildings
// for gradient boosting (supervised only); Derry owns Marey time-distance charts.
// Place facts: NISRA Census 2021 MS-A01: Strabane settlement 13,507; Derry City and Strabane LGD 150,756 (the LGD figure
// also appears on the Derry page); settlements Sion Mills 1,974, Castlederg 2,980, Newtownstewart 1,414; wards Ballycolman
// 3,530, Strabane North 4,006, Strabane West 3,105. OSM place nodes on the UK side: Ballycolman, Castletown, Springhill,
// Head of the Town, Foot of the Town (suburbs), Lisnafin (neighbourhood). No identity or border-politics content.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'STRABANE', label: 'Strabane', blurb: 'AI and programming classes for Strabane, with a machine learning project that learns from buildings nobody has labelled.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-strabane',
  code: 'sbn',
  accent: '#44474A',
  accentRationale: 'Strabane: a cool charcoal (8.82:1 on paper), chosen by hand to stand apart from the coloured accents of recent pages',
  pageType: 'city',
  place: {
    name: 'Strabane',
    eyebrow: 'Strabane, County Tyrone, Northern Ireland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Derry City and Strabane' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Derry', href: '/best-coding-class-in-derry-londonderry' },
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Strabane, Northern Ireland',
  title: 'AI and Programming Classes in Strabane | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Strabane, Ballycolman, Lisnafin and Sion Mills learners, aged 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Strabane, with a semi-supervised learning project that lets a model learn from 1,581 buildings no one has labelled.',
  twitterDescription: 'Strabane AI, programming, Python and vibe coding classes online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Strabane',
    description: 'Online AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Strabane and west Tyrone, taught live with reasoning first.'
  },

  h1: 'AI and programming classes in Strabane',
  capsuleQ: 'Which are the best AI and programming classes in Strabane?',
  capsule: 'NISRA counted 13,507 people usually resident in Strabane in 2021, in the Derry City and Strabane council district. Ballycolman, Castletown, Springhill, Lisnafin, Head of the Town and Foot of the Town are among the neighbourhoods OpenStreetMap names, and Sion Mills, Castlederg and Newtownstewart are smaller settlements in the same district. Anyone aged six to 67 in the district can study AI, programming, Python, vibe coding or maths with an India-based tutor on camera, alone or in a group of five to ten matched by ability. We teach reasoning before tools, so learners can see how a model reached its answer and when it is guessing. The opening lesson is free and ends with a course we recommend. In the Strabane project, 1,581 of the town\'s 2,939 mapped buildings carry no type at all, and the learner discovers how a model can use those unlabelled buildings to learn better from the few that are labelled. From then on, a class place costs USD 100 each month and individual tuition USD 150.',
  lead: 'Most machine learning needs labelled examples: photos marked cat or dog, emails marked spam or not. Labels are slow and costly to produce, and real data sets are full of examples nobody has labelled. Semi-supervised learning uses those too. One simple method, label spreading, links each example to its most similar neighbours and lets the known labels flow along the links, so the unlabelled examples shape where the boundaries fall. Strabane\'s map is an ideal test bed. On OpenStreetMap, more than half the buildings in the town have no type recorded, while the rest are tagged as homes or as something else. The project asks how well each approach does when only a small share of labels is known.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Strabane?',

  picks: {
    eyebrow: 'Strabane course picks',
    h2: 'Strabane courses in thinking, Python and AI',
    intro: 'Match a course to age and interest; every one begins with a free live lesson, booked without card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: sorting with only a few examples and guessing sensibly from neighbours.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games dreamed up by the learner, built with AI help and put to the test.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including label spreading on Strabane\'s mapped buildings.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python through data work, machine learning and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Strabane in the 2021 census',
      h2: 'Strabane, Ballycolman, Lisnafin and Sion Mills',
      intro: 'NISRA counts for the town and nearby settlements, and the wards that carry town names.',
      body: [
        { kind: 'table', caption: 'Settlements in Derry City and Strabane, NISRA Census 2021 table MS-A01', head: ['Settlement', 'Usual residents'], rows: [
          ['Strabane', '13,507'],
          ['Castlederg', '2,980'],
          ['Sion Mills', '1,974'],
          ['Newtownstewart', '1,414']
        ] },
        { kind: 'p', text: 'NISRA publishes each settlement separately and we never total them; the whole Derry City and Strabane district held 150,756. Census wards include Ballycolman (3,530 residents), Strabane North (4,006) and Strabane West (3,105). West Tyrone schools follow the Northern Ireland Curriculum, and we plan lessons by the same P1 to Year 14 structure, with help for CCEA GCSE and A level when a learner is sitting them. Tell us your holiday dates and lessons will pause for them.' },
        { kind: 'callout', h3: 'North-west pages and CCEA support', p: 'See <a class="cg-inline-link" href="/best-coding-class-in-derry-londonderry">Derry</a>, <a class="cg-inline-link" href="/coding-classes-in-fermanagh-and-omagh">Fermanagh and Omagh</a> and <a class="cg-inline-link" href="/ccea-a-level-software-systems-development-help">CCEA A level Software Systems Development help</a>. Our thinking-first approach is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Strabane project',
      h2: 'Learning from unlabelled data: label spreading on Strabane\'s mapped buildings',
      intro: 'A few known labels, many unknown ones, and a test of whether the unknown ones can help.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap building outlines over Strabane and keeps the 2,939 on the UK side of the border, which the map also records. Of these, 1,155 are tagged as homes, 203 as other buildings such as shops, schools, sheds and garages, and 1,581 have no type. For every outline the program records its position, its floor area and a count of attached neighbours, because a terraced or semi-detached house shares mapped points with the house next door. The experiment hides most of the known labels, keeping only a small share, and asks two models to fill in the rest. A k-nearest-neighbours classifier learns from the kept labels alone. Label spreading builds a web linking every building, labelled or not, to its ten most similar neighbours, and lets the kept labels spread along it.' },
        { kind: 'table', caption: 'Balanced accuracy on the hidden labels, average of 20 random draws, our Python run on OpenStreetMap data for Strabane', head: ['Share of labels kept', 'Labels kept (homes, other)', 'Label spreading', 'Labelled-only classifier'], rows: [
          ['1%', '14 (12, 2)', '54.8%', '50.0%'],
          ['2%', '27 (23, 4)', '58.6%', '51.6%'],
          ['5%', '68 (58, 10)', '69.9%', '63.6%'],
          ['10%', '136 (116, 20)', '76.5%', '71.0%'],
          ['25%', '340 (289, 51)', '83.1%', '76.9%']
        ] },
        { kind: 'p', text: 'At every level, spreading labels through all the buildings beats learning from the labelled ones alone, by between 4.8 and 7.0 points. With only two non-home examples, the labelled-only model does no better than chance, 50.0%, while label spreading already edges ahead. The gain comes from the unlabelled buildings: they fill in the shape of the data, so a label in one terrace can flow along the whole street. It is not magic. Accuracy still climbs steeply as real labels are added, and if neighbouring buildings were unlike each other the spreading would mislead rather than help. We do not publish the model\'s guesses for the 1,581 untyped buildings, because nothing could check them.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Colour a few houses on a street map as homes or shops, then guess the rest from their neighbours.' },
          { h3: 'Years 8 to 10', p: 'Count typed and untyped buildings on the Strabane map in Python and plot them.' },
          { h3: 'Year 11 and up', p: 'Run label spreading against a labelled-only classifier at several label shares and explain the gap.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap buildings, our models', p: 'Building outlines, tags and the border line are from OpenStreetMap and its contributors under the Open Database Licence. The filtering, the features, both models and every score are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Labels and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Data without labels can still teach, as long as nobody mistakes guesses for facts.',
      body: [
        { kind: 'table', caption: 'What label spreading in Strabane says about AI', head: ['Seen on the Strabane map', 'Lesson for AI work'], rows: [
          ['1,581 buildings had no label', 'Most real data arrives unlabelled'],
          ['Spreading beat labelled-only at every share', 'Structure in unlabelled data can help'],
          ['Two non-home labels left one model at chance', 'Rare classes need extra care'],
          ['Accuracy rose with more real labels', 'Good labels remain the most valuable investment'],
          ['Guesses for untyped buildings were not published', 'Do not present unchecked output as fact']
        ] },
        { kind: 'p', text: 'Large AI models are trained on vast amounts of unlabelled text and images before a smaller amount of labelled or human-rated data shapes their behaviour, so the balance between the two matters well beyond this project. In vibe coding the learner describes a model in words while an AI writes the code; our Strabane learners also decide which data counts as labelled and how the result will be checked on examples the model never saw. AI agents that label or sort data for you can spread errors as easily as good labels, so a person should spot-check. Agent projects follow once Python needs no support, typically from Year 12 on, with Copilot Studio reserved for one-to-one teaching. For the steps, read <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents pathway for UK learners</a>; for the reasoning, <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'NISRA and OpenStreetMap publish the open data used here and have no involvement with us; the models, and any errors, are Modern Age Coders\' own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From colouring a street to semi-supervised learning',
    intro: 'The school year gives a first idea of level; the trial lesson confirms it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Sorting, examples and sensible guesses from neighbours.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to Year 9', h3: 'Vibe coding for kids', p: 'Games and small apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 10 to 14', h3: 'Python and machine learning', p: 'Classifiers, graphs and honest evaluation alongside CCEA GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Machine learning and agents', p: 'Data, models and AI agents built step by step in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and labels',
    h2: 'What is semi-supervised learning?',
    intro: 'Semi-supervised learning trains a model on a small set of labelled examples together with a larger set of unlabelled ones, using the structure of the unlabelled data, for example through label spreading on a similarity graph, to make better predictions than the labelled examples alone would allow.',
    p1: 'With just 10% of Strabane\'s typed buildings labelled, label spreading through all 2,939 mapped buildings reached 76.5% balanced accuracy on the hidden labels, against 71.0% for a classifier that saw only the labelled ones.',
    p2: 'Learners who have run it ask of any AI model: which data was labelled, who labelled it, and how was the result checked?',
    closer: 'A Strabane teenager who asks where a model\'s labels came from will not take its answers on trust, and writing the code is how that question becomes a habit.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Online across Strabane and west Tyrone',
    intro: 'Any computer with a webcam and an internet connection that can stream video will do.',
    cells: [
      { h3: 'Learner at the helm', p: 'The student writes, prompts and runs every step; the tutor watches the shared screen and asks how they know the answer is right.' },
      { h3: 'Start level from the trial', p: 'The free lesson shows what to teach first, with any CCEA course noted.' },
      { h3: 'No fee for lesson one', p: 'The trial is free and ends with a course suggestion.' },
      { h3: 'Stage-based groups', p: 'Five to ten learners from across the UK at one level per group.' },
      { h3: 'Two sessions weekly', p: 'Paused through school holidays.' },
      { h3: 'Steady hour', p: 'Tutors follow UK clock changes, so your lesson time holds.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, free on the same evening, are rarely neighbours. Video lets them learn together anyway.' }
  },

  fees: {
    h2: 'Strabane fees',
    intro: 'Strabane learners pay the international rates we use everywhere except India.',
    first: 'A full free lesson, then a course recommendation.',
    group: 'About eight live group lessons per month.',
    private: 'About eight live one-to-one lessons per month.',
    closer: 'Fees are set in US dollars, not pounds, and the first invoice follows the trial only once a course and a weekly time are agreed. For holiday breaks, absences and changing between group and private lessons, see the pricing page.'
  },

  reviewsH2: 'West Tyrone families and learners across the UK, on Google',

  book: {
    h2: 'Book a free Strabane lesson',
    intro: 'Share the learner\'s age or year group and one interest. The trial might be a colour-the-street guessing game, a Scratch game made with an AI, a first Python program, or a small model trained on real map data.',
    success: 'Thank you. Your Strabane request is with us.'
  },

  faq: {
    h2: 'Strabane questions',
    intro: 'Labels, unlabelled buildings, vibe coding and how lessons work.',
    items: [
      { q: 'What is the population of Strabane?', a: 'NISRA\'s Census 2021 counts 13,507 usual residents in the Strabane settlement.' },
      { q: 'Are Strabane lessons held online?', a: 'All of them are, as live video calls for ages 6 to 67, so Sion Mills and Castlederg are as easy to reach as the town centre.' },
      { q: 'What is label propagation?', a: 'A semi-supervised method that links each example to similar ones and lets known labels flow along those links to unlabelled examples. Label spreading is a softer version that lets the original labels be revised a little.' },
      { q: 'When does unlabelled data help a model?', a: 'When similar examples tend to share a label, so the unlabelled ones reveal the shape of each group. In our Strabane test it added between 4.8 and 7.0 points of balanced accuracy.' },
      { q: 'What does the Strabane project involve?', a: 'Predicting whether mapped buildings are homes from a small share of known labels, comparing label spreading over all 2,939 buildings with a classifier that uses the labelled ones only.' },
      { q: 'Where does vibe coding fit?', a: 'In every course: the learner describes the program, the AI drafts it, and the learner tests and repairs it.' },
      { q: 'When do learners start building AI agents?', a: 'When they can write Python without prompting, usually Year 12 onwards; Copilot Studio is private tuition only.' },
      { q: 'Do you help with CCEA exams?', a: 'Yes, in Software Systems Development, Digital Technology and Maths, taught for understanding with no grade promised.' },
      { q: 'What are the fees?', a: 'Nothing for the trial, then USD 100 monthly in a class or USD 150 monthly for private lessons.' },
      { q: 'Do lessons stop in the holidays?', a: 'They pause for the school holidays once you tell us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Northern Ireland pages',
    html: 'Pages with their own projects: <a class="cg-inline-link" href="/best-coding-class-in-derry-londonderry">Derry</a> (train timetables as time-distance charts), <a class="cg-inline-link" href="/coding-classes-in-fermanagh-and-omagh">Fermanagh and Omagh</a>, <a class="cg-inline-link" href="/coding-classes-in-mid-ulster">Mid Ulster</a> and <a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh</a>. Further afield, start at <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Strabane and the north-west',
  footerPlaces: [
    { href: '/best-coding-class-in-derry-londonderry', label: 'Derry' },
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-sbn .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-sbn .cg-hero h1 { font-weight: 760; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-sbn .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-sbn .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sbn .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-sbn .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-sbn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sbn .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-sbn .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-sbn .cg-callout { border-left-width: 6px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Derry City and Strabane (N09000005). Northern Ireland Curriculum; CCEA GCSE and A level. NISRA Census 2021 MS-A01: Strabane settlement 13,507; Castlederg 2,980; Sion Mills 1,974; Newtownstewart 1,414; Derry City and Strabane LGD 150,756; wards Ballycolman 3,530, Strabane North 4,006, Strabane West 3,105. OSM place nodes (UK side): Ballycolman, Castletown, Springhill, Head of the Town, Foot of the Town, Lisnafin.',
    localProject: 'OSM API 0.6 bbox -7.500,54.810,-7.430,54.845, kept lat 54.817-54.845, UK side of border (relations 62149/62273): 2,939 buildings, 1,155 homes, 203 other typed, 1,581 untyped. Label spreading (kNN 10, alpha 0.2) vs kNN (5) on labelled only, 20 draws, balanced accuracy: 1% 54.8/50.0; 2% 58.6/51.6; 5% 69.9/63.6; 10% 76.5/71.0; 25% 83.1/76.9. Lesson family: semi-supervised learning, label propagation/spreading.',
    requiredMentions: [
      '13,507',
      '2,939',
      '1,581',
      'Ballycolman',
      'Lisnafin',
      'Head of the Town',
      'Sion Mills',
      'label propagation',
      'semi-supervised'
    ],
    sources: [
      { claim: 'NISRA, Census 2021 main statistics table MS-A01, usual residents by settlement, ward and LGD.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'OpenStreetMap buildings and administrative boundaries around Strabane, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'CCEA qualifications used in Northern Ireland schools (GCSE and A level).', url: 'https://ccea.org.uk/' }
    ],
    rejectedClaims: [
      'Border politics, identity or history: not discussed; the border is used only to keep the analysis to the UK side.',
      'Labels for the 1,581 untyped buildings: not predicted or published, because they could not be checked.',
      'A Strabane electoral-area population: not stated, as the DEA containing the town was not verified.',
      'Sum of settlement figures: separate NISRA counts; never added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
