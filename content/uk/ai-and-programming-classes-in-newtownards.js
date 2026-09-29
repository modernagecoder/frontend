'use strict';
// Newtownards (cg- town page, UK cluster Phase 8, towns band A, row 428). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when an AI squeezes many numbers into a 2D
// picture, what can you trust in it? (t-SNE against PCA on real data: which neighbours survive, and how the picture changes
// with perplexity and random seed).
// Data (read 29 September 2026): NISRA Census 2021 MS-A02, age in five-year bands (19 bands, 0-4 to 90+), settlement sheet:
// 223 settlements; the 146 with at least 1,000 usual residents used, each turned into age shares (percent). NISRA MS-A01:
// settlement NEWTOWNARDS 29,677; DEA Newtownards 29,395; LGD Ards and North Down 163,659.
// Our run (scratchpad nwa/tsne.py): nearest settlements to Newtownards by the full 19-band age profile (Euclidean):
// Enniskillen, Coleraine, Ballymoney, Ballymena, Larne. PCA to 2D: variance explained 55.0% and 11.8%; trustworthiness
// (10 neighbours) 0.893; share of each settlement's 10 true nearest neighbours kept 45.7%. t-SNE (scikit-learn, PCA init):
// perplexity 5, seeds 0/1/2: trust 0.890/0.887/0.886, kept 48.4/46.8/47.8%; perplexity 30: 0.913/0.910/0.904, kept
// 50.6/49.5/49.3%; perplexity 50: 0.896/0.898/0.910, kept 48.4/47.5/48.8%. Five nearest to Newtownards on the t-SNE map
// change with settings: perplexity 5 seed 0 Enniskillen, Coleraine, Ballymoney, Randalstown, Killyleagh; perplexity 30 seed
// 1 Limavady, Coleraine, Saintfield, Enniskillen, Larne; Ballymena (true fourth-nearest) appears in none of the nine.
// Lesson family: t-SNE and dimensionality reduction for visualisation; reading maps of high-dimensional data. Screened:
// "t-SNE", "trustworthiness" 0 hits in content/uk, nl, ie (only course and blog files mention t-SNE); PCA was taught on
// Salford as a method; here PCA is only the comparison.
// Place facts: postcodes.io outcode BT23 lists electoral wards including Conway Square, Cronstown, Glen, Gregstown,
// Loughries, Movilla, Scrabo and West Winds (the district also covers Comber and Ballygowan areas).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'NEWTOWNARDS', label: 'Newtownards', blurb: 'AI and programming classes for Newtownards, with a t-SNE project that maps the age profiles of 146 Northern Ireland towns and tests what the picture really shows.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-newtownards',
  code: 'nwa',
  accent: '#66507A',
  accentRationale: 'Newtownards: a muted heather purple (5.65:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Newtownards',
    eyebrow: 'Newtownards, Ards and North Down, Northern Ireland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Ards and North Down' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Bangor', href: '/best-coding-class-in-bangor-northern-ireland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Newtownards, Northern Ireland',
  title: 'AI and Programming Classes in Newtownards | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Newtownards, Scrabo, Movilla and Comber learners in County Down, aged 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Newtownards, with a t-SNE project that maps 146 Northern Ireland towns by age profile and checks what the map can be trusted for.',
  twitterDescription: 'Newtownards AI, programming, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Newtownards',
    description: 'Online AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Newtownards and Ards and North Down, taught live.'
  },

  h1: 'AI and programming classes in Newtownards',
  capsuleQ: 'Which are the best AI and programming classes in Newtownards?',
  capsule: 'Census 2021 counted 29,677 usual residents in the Newtownards settlement, NISRA reports, within Ards and North Down, a council area of 163,659. Scrabo, Movilla, Glen, Loughries, Gregstown and West Winds are among the electoral wards listed for the BT23 postcode district. From primary pupils to adults of 67, anyone in the borough can learn AI, programming, Python, vibe coding and maths on camera with our tutors in India, one-to-one or in a group of five to ten matched by level. We teach how to question a result before how to produce one, so a striking chart never goes unchecked. Your opening session costs nothing, and we end it by naming a course that fits. The Newtownards project squeezes the age profiles of 146 Northern Ireland towns into one picture with t-SNE, the method behind many AI cluster maps, and then tests which of its patterns are real. Ongoing tuition is priced in US dollars: 100 a month for a seat in a class, 150 a month for lessons on your own.',
  lead: 'AI researchers love a particular kind of picture: thousands of items, each described by many numbers, squashed onto a flat map where similar items land close together. Often it is made with t-SNE. The pictures look like islands and continents, and they invite stories. But a flat map of many dimensions has to throw information away, and t-SNE chooses what to keep in ways that change from run to run. This project builds such a map from real data: NISRA\'s census age profiles for every Northern Ireland settlement of 1,000 or more people, 146 of them, each described by 19 five-year age bands. Newtownards is one dot. The question is what its neighbours on the map really mean.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Newtownards?',

  picks: {
    eyebrow: 'Newtownards course picks',
    h2: 'Newtownards courses in reasoning, Python and AI',
    intro: 'Pick by age and interest; each course starts with a free live lesson and needs no payment details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: drawing maps of ideas and asking what a picture leaves out.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with AI help and tested carefully.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including the t-SNE map of Northern Ireland towns.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data, visualisation, machine learning and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Newtownards and Ards and North Down',
      h2: 'Newtownards, Scrabo, Movilla and Loughries',
      intro: 'Census 2021 figures from NISRA, each printed as published and never added together.',
      body: [
        { kind: 'table', caption: 'Newtownards in Census 2021, usual residents (NISRA MS-A01)', head: ['Area', 'Type of area', 'Usual residents'], rows: [
          ['Newtownards', 'Settlement', '29,677'],
          ['Newtownards', 'District electoral area', '29,395'],
          ['Ards and North Down', 'Council area', '163,659']
        ] },
        { kind: 'p', text: 'The settlement and the electoral area share a name but not a boundary, which is why their figures differ. Postcodes.io lists Conway Square, Cronstown, Glen, Gregstown, Loughries, Movilla, Scrabo and West Winds among the electoral wards of the BT23 district, which also takes in the Comber and Ballygowan areas. Schools here follow the Northern Ireland Curriculum, so we work in P1 to P7 and Years 8 to 14 and support CCEA GCSE and A level in Digital Technology, Computer Science and Maths. Tell us your holiday dates and lessons will fit round them.' },
        { kind: 'callout', h3: 'Northern Ireland pages', p: 'See <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">coding and AI classes in Northern Ireland</a>, <a class="cg-inline-link" href="/best-coding-class-in-bangor-northern-ireland">Bangor</a> and <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a>. Why we teach thinking before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Newtownards project',
      h2: 'Mapping 146 towns with t-SNE: what the picture keeps and what it invents',
      intro: 'Nineteen numbers per town, squeezed into two, and checked against the originals.',
      body: [
        { kind: 'p', text: 'The learner downloads NISRA\'s Census 2021 table MS-A02, which counts residents in five-year age bands for every settlement, and keeps the 146 settlements with at least 1,000 people. Each becomes a list of 19 percentages, from 0 to 4 years up to 90 and over. In those 19 dimensions, the towns whose age mix is closest to Newtownards are Enniskillen, Coleraine, Ballymoney, Ballymena and Larne. Python then flattens everything to two dimensions twice: once with principal component analysis (PCA), a straight projection, and once with t-SNE, which tries hard to keep each town next to its closest matches.' },
        { kind: 'table', caption: 'How well each flat map keeps the real neighbours, our Python run on NISRA Census 2021 age profiles', head: ['Map', 'Settings', 'True 10 nearest kept on the map', 'Trustworthiness score'], rows: [
          ['PCA', 'Straight projection', '45.7%', '0.893'],
          ['t-SNE', 'Perplexity 5', '46.8% to 48.4%', '0.886 to 0.890'],
          ['t-SNE', 'Perplexity 30', '49.3% to 50.6%', '0.904 to 0.913'],
          ['t-SNE', 'Perplexity 50', '47.5% to 48.8%', '0.896 to 0.910']
        ] },
        { kind: 'p', text: 'Even the most faithful map keeps only about half of each town\'s ten real nearest neighbours; the other half are strangers placed close by accident of the squashing. t-SNE does a little better than PCA at local neighbourhoods, and scores slightly higher on trustworthiness, a standard check of whether map neighbours are real ones, but its picture changes with the perplexity setting and with the random seed. Across nine t-SNE runs, the five towns drawn nearest to Newtownards changed each time, with Limavady, Saintfield, Randalstown and Killyleagh all appearing, while Ballymena, one of its five true closest matches, never appeared at all. PCA, meanwhile, explains 55.0% and 11.8% of the variation along its two axes, so a third of the information is simply not on the page.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Sort picture cards into piles by two features, then argue about the cards that fit two piles.' },
          { h3: 'Years 8 to 10', p: 'Load the NISRA age table in Python and find which towns have the most similar age mix to Newtownards.' },
          { h3: 'Years 11 and up', p: 'Run PCA and t-SNE, measure how many true neighbours survive, and test the effect of perplexity.' }
        ] },
        { kind: 'callout', h3: 'NISRA census tables, our maps', p: 'Age and population counts are from NISRA Census 2021 tables MS-A01 and MS-A02, used under the Open Government Licence. The shares, projections, maps and scores are our own calculations; NISRA marks some settlement figures as approximations.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Maps of data and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Treat a cluster plot as a question to investigate, not an answer.',
      body: [
        { kind: 'table', caption: 'From the Newtownards t-SNE map to working with AI', head: ['In the census project', 'When AI shows you a map of data'], rows: [
          ['About half of true neighbours survived', 'Closeness on a flat map is only partly real'],
          ['Perplexity changed the picture', 'Settings shape what you see'],
          ['Seeds reshuffled the nearest towns', 'Rerun before trusting any single layout'],
          ['Ballymena never appeared near Newtownards', 'Real similarities can vanish from the plot'],
          ['PCA left a third of the variation off the page', 'Every projection throws information away']
        ] },
        { kind: 'p', text: 'Language models themselves work with long lists of numbers for every word, and diagrams of those "embedding spaces" usually come from t-SNE or methods like it. Ask an AI assistant to "cluster and visualise" your data and it will often hand back one such picture with a confident story attached. Vibe coding lets the learner describe the analysis while the AI writes the code; our Newtownards learners then rerun it with different settings and check neighbours in the original numbers before telling any story. Agents that summarise data for you need the same checks built in. Agent projects wait until a learner\'s Python stands on its own, typically sixth-form age or older, and Copilot Studio agents are only taught privately. For where this leads, read <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agents for students in the UK</a>; for why we teach it this way, <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Figures come from NISRA and postcodes.io open releases; neither body is linked to this page, and the projections and any slip in them are our responsibility.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From sorting cards to mapping data',
    intro: 'Your school year gives us a first guess; the free lesson confirms the level.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Sorting, similarity and what a picture hides.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to Year 9', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 10 to 14', h3: 'Python and machine learning', p: 'Data, projections and fair tests alongside CCEA GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Data science and agents', p: 'Visualisation, machine learning and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and visualisation',
    h2: 'What is t-SNE, and how should you read a t-SNE plot?',
    intro: 't-SNE is a method that squeezes data with many numbers per item onto a flat map so that similar items land close together; read it for local neighbourhoods only, because distances between clusters, cluster sizes and the exact layout change with its settings.',
    p1: 'Mapping 146 Northern Ireland settlements by their census age profiles, t-SNE kept about half of each town\'s ten true nearest neighbours, and the towns drawn nearest to Newtownards changed with every perplexity and seed.',
    p2: 'Learners who have tested those maps ask of any AI-made cluster plot: was it rerun, and were the neighbours checked in the original data?',
    closer: 'A Newtownards teenager who reruns a pretty plot before believing it will not be fooled by an AI-generated one, and that habit starts with writing code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'How lessons reach Newtownards',
    intro: 'A laptop or PC, a camera and broadband fit for video calls: nothing more is needed.',
    cells: [
      { h3: 'Student-made plots', p: 'Learners write the code and draw the charts themselves; tutors, watching over screen share, keep asking what a plot really shows.' },
      { h3: 'Starting point', p: 'Found during the trial, with any CCEA exam on the horizon written into the plan.' },
      { h3: 'Trial lesson free', p: 'We charge nothing for the first lesson and suggest a course at the end.' },
      { h3: 'Matched groups', p: 'Five to ten learners from across the UK at the same stage.' },
      { h3: 'Two a week', p: 'Paused through school holidays.' },
      { h3: 'Fixed hour', p: 'Our tutors follow UK clock changes, so your time stays put.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, free on the same evening and close enough to meet, are rare in any one town. Video solves it.' }
  },

  fees: {
    h2: 'Newtownards fees',
    intro: 'For Newtownards we use the international rate card that covers all countries except India.',
    first: 'A full free lesson, then a recommendation.',
    group: 'About eight live small-group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'No sterling tariff exists: invoices are in US dollars and begin after the trial settles a course and a slot. School breaks, absences and changes of format are set out on the pricing page.'
  },

  reviewsH2: 'Google reviews: Ards families and learners around Britain',

  book: {
    h2: 'Book a free Newtownards lesson',
    intro: 'A school year or age, and one hobby, is all we ask. We may open with a picture-card sorting game, an AI-assisted Scratch build, first steps in Python, or charting real NISRA figures.',
    success: 'Thank you. Your Newtownards request is with us.'
  },

  faq: {
    h2: 'Newtownards questions',
    intro: 'Flat maps of big data, NISRA age tables, vibe coding and the logistics of lessons.',
    items: [
      { q: 'What is the population of Newtownards?', a: 'NISRA counted 29,677 usual residents in the Newtownards settlement at the 2021 census.' },
      { q: 'Are AI and programming classes available online in Newtownards?', a: 'Every lesson is a live video call, so learners aged 6 to 67 in Comber or anywhere in Ards and North Down can join.' },
      { q: 'What is perplexity in t-SNE?', a: 'A setting that roughly controls how many neighbours each point pays attention to. Small values stress very local structure; larger ones smooth it. In our census maps it changed which towns appeared next to Newtownards.' },
      { q: 'What is the difference between PCA and t-SNE?', a: 'PCA is a straight projection that keeps the biggest overall spreads in the data; t-SNE bends the space to keep near neighbours together, so it shows local groups better but distorts distances between groups.' },
      { q: 'What does the Newtownards project involve?', a: 'Turning NISRA census age profiles for 146 settlements into 2D maps with PCA and t-SNE, and measuring how many real neighbours each map keeps.' },
      { q: 'Is vibe coding on the timetable?', a: 'From P1 pupils to adult learners: the student sets the goal, the AI drafts code, and the student checks every piece.' },
      { q: 'At what age do agents come in?', a: 'When Python needs no support, often sixth form or later; Copilot Studio is one-to-one.' },
      { q: 'Do you help with CCEA GCSE and A level?', a: 'CCEA Digital Technology, Computer Science and Maths are all covered; we build understanding and never promise a grade.' },
      { q: 'What does it cost?', a: 'Lesson one free. After it: USD 100 monthly for group places, USD 150 monthly for one-to-one.' },
      { q: 'Do lessons pause for holidays?', a: 'They do. Send the school holiday calendar and we skip those weeks.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Northern Ireland pages',
    html: 'Pages with their own projects: <a class="cg-inline-link" href="/best-coding-class-in-bangor-northern-ireland">Bangor</a> (why the wait for a train feels long), <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a>, <a class="cg-inline-link" href="/best-coding-class-in-lisburn">Lisburn</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-ballymena">Ballymena</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> cover the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Newtownards and Northern Ireland',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/best-coding-class-in-bangor-northern-ireland', label: 'Bangor' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-nwa .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-nwa .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-nwa .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-nwa .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-nwa .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.02em; }
.cg-root.cg-nwa .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-nwa .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nwa .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-nwa .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-nwa .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Ards and North Down (N09000011). Northern Ireland Curriculum; CCEA GCSE and A level. NISRA Census 2021 MS-A01: settlement NEWTOWNARDS 29,677; DEA Newtownards 29,395; LGD Ards and North Down 163,659. postcodes.io outcode BT23 wards include Conway Square, Cronstown, Glen, Gregstown, Loughries, Movilla, Scrabo, West Winds.',
    localProject: 'NISRA Census 2021 MS-A02 settlement sheet: 146 settlements of 1,000+, 19 five-year age shares. True nearest to Newtownards: Enniskillen, Coleraine, Ballymoney, Ballymena, Larne. PCA 2D: 55.0% + 11.8% variance, trust 0.893, 10-NN kept 45.7%. t-SNE perplexity 5/30/50 x seeds 0-2: trust 0.886 to 0.913, kept 46.8 to 50.6%; map neighbours of Newtownards change every run; Ballymena never in map top 5. Lesson family: t-SNE, dimensionality reduction for visualisation.',
    requiredMentions: [
      '29,677',
      '29,395',
      '163,659',
      'Scrabo',
      'Movilla',
      'Gregstown',
      'Loughries',
      'West Winds',
      't-SNE',
      'trustworthiness'
    ],
    sources: [
      { claim: 'NISRA Census 2021 MS-A01 usual residents by settlement, DEA and LGD.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'NISRA Census 2021 MS-A02 age in five-year bands by settlement.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a02.xlsx' },
      { claim: 'postcodes.io outcode BT23: administrative wards listed for the district.', url: 'https://api.postcodes.io/outcodes/BT23' }
    ],
    rejectedClaims: [
      'Scrabo Tower, airfield or priory history: not read from a source; not claimed.',
      'Why towns share age profiles: no cause claimed; similarity is arithmetic on NISRA shares only.',
      'That the BT23 wards are all inside the Newtownards settlement: not claimed; the district also covers Comber and Ballygowan areas.',
      'Rank of Newtownards among Northern Ireland towns: not claimed.',
      'Named schools, transfer test advice and term dates: none.',
      'Sterling prices: none.'
    ]
  }
};
