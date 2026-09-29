'use strict';
// Runcorn (cg- town page, UK cluster Phase 8, towns band A, row 395). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can a program find a town's shopping
// areas without being told how many there are? (density-based clustering, DBSCAN, and the choice of radius).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map calls over bbox -2.760,53.305,-2.660,53.350 in 8 tiles (ODbL):
// 272 places tagged as a shop (excluding "yes" and "vacant") or as a cafe, restaurant or fast-food outlet.
// Our run (scratchpad rnc/db.py): scikit-learn DBSCAN, minimum 5 places per core point, distances in metres. Clusters /
// places left as noise / two largest clusters with their most common addr:street: radius 60 m: 5 / 95 (34.9%) / 100
// (Church Street), 54 (Forest Walk); 100 m: 6 / 86 (31.6%) / 102, 56; 150 m: 8 / 64 (23.5%) / 104, 60; 250 m: 6 / 46
// (16.9%) / 127, 68. The same two main clusters appear at every radius.
// Lesson family: density-based clustering (DBSCAN), noise points, parameter sensitivity and stability. Screened: DBSCAN
// 0 hits; k-means clustering is used elsewhere (two pages) and only mentioned in passing here.
// Place facts: Halton (E06000006) TS001 128,478. ONS 2021 BUAs (published): Runcorn 61,645; Widnes 59,935. postcodes.io
// (Halton) suburban areas: Higher Runcorn, Weston, Halton Brook, Palace Fields, Murdishaw, Windmill Hill, Norton,
// Beechwood, Halton Lea.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'RUNCORN', label: 'Runcorn', blurb: 'Online coding and Python classes for Runcorn, with a clustering project that lets a program discover the town\'s shopping areas on its own.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-runcorn',
  code: 'rnc',
  accent: '#55295C',
  accentRationale: 'Runcorn: a deep grape purple (9.11:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Runcorn',
    eyebrow: 'Runcorn, Halton, Cheshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Cheshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Cheshire', href: '/coding-classes-in-cheshire' },
    { label: 'Warrington', href: '/online-coding-and-python-classes-in-warrington' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Runcorn, England',
  title: 'Online Coding and Python Classes in Runcorn | AI, 6 to 67',
  description: 'Online coding, Python, AI and vibe coding classes for Runcorn, Widnes, Murdishaw and Palace Fields learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Live online coding and Python classes for Runcorn, and a clustering project in which a program finds the town\'s shopping areas by itself.',
  twitterDescription: 'Runcorn online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Runcorn',
    description: 'Online coding, Python, AI, vibe coding and mathematics for children, teenagers and adults in Runcorn and across Halton, taught live with thinking skills first.'
  },

  h1: 'Online coding and Python classes in Runcorn',
  capsuleQ: 'Which are the best online coding and Python classes in Runcorn?',
  capsule: 'At the 2021 census 128,478 people usually lived in Halton borough, and the ONS gives Runcorn and Widnes, the two largest of the five built-up areas it lists there, 61,645 and 59,935 people. Murdishaw, Palace Fields, Windmill Hill, Halton Brook and Beechwood are among Runcorn\'s recorded suburbs. Learners anywhere in the borough, from six-year-olds to adults of 67, can study coding, Python, AI, vibe coding and maths with an India-based tutor on a live video call, either privately or as part of a class of five to ten at a similar level. Clear thinking is taught first, so learners understand what their tools and AI assistants produce. Lesson one is free and closes with our course advice. Runcorn\'s project hands a program 272 shops and cafés and asks it to find the town\'s shopping areas without being told how many there are. After the trial, tuition is USD 100 for each month in a group or USD 150 for each month of private teaching.',
  lead: 'Most people could glance at a map of Runcorn\'s shops and point to where they bunch together. Teaching a computer to do the same is a classic machine learning task called clustering, and the hard part is that nobody tells the program how many groups to look for. A method called DBSCAN solves that by looking for crowded neighbourhoods: any place with enough others close by is the core of a cluster, clusters grow outwards from their cores, and places with no crowd around them are simply labelled noise. This project runs it in Python on every shop, café, restaurant and takeaway mapped in and around Runcorn on OpenStreetMap, and tests how much the answer depends on one number: how close counts as close.',
  wa: 'Hello Modern Age Coders, may we book a free coding or Python lesson for a learner in Runcorn?',

  picks: {
    eyebrow: 'Runcorn course picks',
    h2: 'Runcorn courses in thinking, Python and AI',
    intro: 'Choose by age and interest. Lesson one of every course is live and free, and booking asks for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: sorting things into groups and explaining where one group ends.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps built by describing them to AI and checking the result.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the shop-clustering map.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the start through data science, machine learning basics and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Runcorn and Halton',
      h2: 'Runcorn, Widnes and the Halton neighbourhoods',
      intro: 'The two largest of Halton\'s five ONS built-up areas, and suburbs recorded in Runcorn.',
      body: [
        { kind: 'table', caption: 'Halton\'s two largest built-up areas, ONS 2021 census counts', head: ['Built-up area', 'People (2021)'], rows: [
          ['Runcorn', '61,645'],
          ['Widnes', '59,935']
        ] },
        { kind: 'p', text: 'The ONS publishes these as two separate counts and we leave them that way; the borough figure of 128,478 comes from its own table, and three smaller built-up areas are not shown. Higher Runcorn, Weston, Halton Brook, Palace Fields, Murdishaw, Windmill Hill, Norton, Beechwood and Halton Lea are all recorded as suburban areas in Halton. Halton\'s schools follow England\'s national curriculum, and lessons skip any holiday weeks you let us know about.' },
        { kind: 'callout', h3: 'Cheshire, the North West and our approach', p: 'More choices are listed on <a class="cg-inline-link" href="/coding-classes-in-cheshire">coding classes in Cheshire</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>. Why reasoning comes before prompting is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Runcorn project',
      h2: 'Finding Runcorn\'s shopping areas with DBSCAN clustering',
      intro: 'Map 272 shops and cafés, let density decide the groups, and test the answer at four different radii.',
      body: [
        { kind: 'p', text: 'The learner downloads a rectangle covering Runcorn from the OpenStreetMap API in eight tiles and keeps every place tagged as a shop, café, restaurant or takeaway: 272 of them. Their positions are converted to metres. DBSCAN then needs two settings. One is the minimum crowd, set here at five: a place with at least five places, itself included, within reach counts as a core point. The other is the radius that defines "within reach". Clusters are chains of core points and their neighbours; anything left over is noise.' },
        { kind: 'table', caption: 'DBSCAN on Runcorn\'s shops and food places at four radii, our Python run on OpenStreetMap data, 29 September 2026', head: ['Radius', 'Clusters', 'Places left as noise', 'Two largest clusters'], rows: [
          ['60 m', '5', '95 (34.9%)', '100 and 54 places'],
          ['100 m', '6', '86 (31.6%)', '102 and 56'],
          ['150 m', '8', '64 (23.5%)', '104 and 60'],
          ['250 m', '6', '46 (16.9%)', '127 and 68']
        ] },
        { kind: 'p', text: 'Two clusters dominate at every radius. The larger one, whose most common tagged street address is Church Street, holds between 100 and 127 places; the second, where Forest Walk is the most common address, holds between 54 and 68. The program found them with no idea of how many groups to expect, which is exactly what DBSCAN is for. A method such as k-means, by contrast, has to be told the number of clusters in advance.' },
        { kind: 'p', text: 'Everything smaller depends on the radius. Widening it from 60 m to 150 m pulls more lone shops into small clusters, so the number of clusters climbs from 5 to 8 and the noise falls from 34.9% to 23.5%. Widen it again to 250 m and small clusters start merging into their neighbours, so the count drops back to six. There is no single "correct" radius. The honest summary is that two shopping areas are robust and the rest are sensitive to the setting, which is the kind of statement a careful analyst makes and a careless one skips.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Scatter counters on a map, circle the crowded patches, then argue about the lonely ones.' },
          { h3: 'Ages 11 to 15', p: 'Plot Runcorn\'s shops in Python and count how many sit within 100 m of each other.' },
          { h3: 'Ages 15 and up', p: 'Run DBSCAN at several radii, track which clusters survive and report what is robust.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap places, our clusters', p: 'Shop and café positions are from OpenStreetMap and its contributors under the Open Database Licence. The clustering, the radii and every count are our own work; street names are only the most common address tag inside each cluster.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Clustering and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A clustering takes seconds to run and a lifetime to over-interpret.',
      body: [
        { kind: 'table', caption: 'From Runcorn\'s shop clusters to working with AI', head: ['In the clustering project', 'When AI analyses data for you'], rows: [
          ['DBSCAN chose how many groups there were', 'Methods that find structure still rely on settings'],
          ['Two clusters survived every radius', 'Trust findings that hold as settings change'],
          ['Small clusters came and went', 'Treat fragile results as fragile'],
          ['Lone shops were labelled noise', 'Not every point belongs to a pattern'],
          ['Street names came from tags', 'Labels are only as good as the data behind them']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to "cluster these locations" and it will usually pick one setting, draw a tidy map and describe the groups with confidence. Vibe coding hands the typing to an AI while the learner describes the goal; Runcorn learners then rerun its clustering at several settings before trusting a single group. AI agents that summarise data for you face the same risk of presenting one arbitrary run as the truth. Learners reach agent building once Python is steady, usually as older teenagers or adults, and Copilot Studio agents are covered only in one-to-one lessons. Look at <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our route into AI agents for UK students</a> and the principle behind it, <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is not connected with OpenStreetMap, the ONS, postcodes.io or any business in the data. We worked only from open records, and the analysis, errors included, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From sorting counters to clustering data',
    intro: 'The school year is a hint; the free lesson shows the right starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Grouping, boundaries and explaining a choice.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and data science', p: 'Maps, clustering and careful conclusions alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Data science and agents', p: 'Python, machine learning and AI agents, built step by step.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and grouping',
    h2: 'What is clustering in machine learning, and what does DBSCAN add?',
    intro: 'Clustering groups similar things without labels; DBSCAN does it by density and finds how many groups there are by itself.',
    p1: 'On Runcorn\'s 272 shops and cafés it found the same two main shopping areas at every radius from 60 m to 250 m, while the smaller groups and the share of lone places changed with the setting.',
    p2: 'Learners who have seen that difference ask of every AI-produced grouping: which parts survive a change of settings?',
    closer: 'Knowing which patterns are solid and which are fragile helps Runcorn teenagers use AI analysis wisely, and that is worth learning Python for in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Murdishaw to Palace Fields, online',
    intro: 'Bring a computer and an internet connection strong enough for video; nothing else is needed.',
    cells: [
      { h3: 'Hands on the keys', p: 'Learners type, prompt and run everything, and the tutor follows through screen share with a steady stream of questions.' },
      { h3: 'Starting from the trial', p: 'The free session shows what the learner can already do, which sets topic one; exam boards are noted.' },
      { h3: 'Free opening lesson', p: 'Lesson one has no fee and ends with a course suggestion.' },
      { h3: 'Matched classes', p: 'Each class holds five to ten British learners who share a level.' },
      { h3: 'Two lessons weekly', p: 'Paused over the school holidays.' },
      { h3: 'Fixed hours', p: 'Tutors move with the UK clock changes so the lesson time holds.' }
    ],
    spec: { title: 'Why we teach online', p: 'Five learners at one level who are all free on the same evening rarely share a neighbourhood. Online, distance stops mattering.' }
  },

  fees: {
    h2: 'Runcorn fees',
    intro: 'Runcorn learners pay our international rate, applied in every country other than India.',
    first: 'A complete lesson free at the start, followed by our suggestion.',
    group: 'About eight live small-group lessons each month.',
    private: 'About eight live private lessons each month.',
    closer: 'Fees are charged in US dollars rather than sterling, and invoicing starts only once the trial has fixed a course and a weekly time. The pricing page covers holidays, absences and moving between group and private.'
  },

  reviewsH2: 'Cheshire households and learners elsewhere in Britain, on Google',

  book: {
    h2: 'Book a free Runcorn lesson',
    intro: 'Let us know the learner\'s age or year group and a hobby. A trial might be a grouping puzzle, a Scratch game made with AI help, a first Python program, or plotting real places on a map.',
    success: 'Thank you. Your Runcorn request is with us.'
  },

  faq: {
    h2: 'Runcorn questions',
    intro: 'Clustering, the shop-map project, Python, vibe coding and practical details.',
    items: [
      { q: 'What is the population of Runcorn?', a: 'The ONS gives 61,645 for the Runcorn built-up area at the 2021 census.' },
      { q: 'Can Runcorn learners take online Python classes?', a: 'Yes, over live video, for anyone aged 6 to 67 in Runcorn, Widnes or elsewhere in Halton.' },
      { q: 'What is DBSCAN?', a: 'A clustering method that groups points lying in crowded neighbourhoods, labels isolated points as noise and does not need to be told how many clusters to find.' },
      { q: 'What is the Runcorn project?', a: 'Learners cluster 272 shops and food places mapped around Runcorn with DBSCAN, compare four radii and report which shopping areas are robust.' },
      { q: 'Is vibe coding taught?', a: 'Yes, at every age, with the learner planning the program and testing what the AI writes.' },
      { q: 'Can learners progress to AI agents?', a: 'When Python has become familiar, which tends to be the late teens or adulthood; Copilot Studio agents are private lessons only.' },
      { q: 'Are lessons held in person?', a: 'No, every lesson is online.' },
      { q: 'Do you cover exam courses?', a: 'GCSE and A level computer science and maths, yes, taught for understanding; grades are never guaranteed.' },
      { q: 'How much are lessons?', a: 'Lesson one costs nothing. Continuing is USD 100 per month in a class or USD 150 per month one-to-one.' },
      { q: 'Do lessons pause in school holidays?', a: 'Yes. Send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Cheshire and North West pages',
    html: 'Cheshire neighbours with projects of their own: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-warrington">Warrington</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-crewe">Crewe</a> (an agent learning streets) and <a class="cg-inline-link" href="/best-coding-class-in-chester">Chester</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links to every area we cover.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Runcorn and Cheshire',
  footerPlaces: [
    { href: '/coding-classes-in-cheshire', label: 'Cheshire' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-rnc .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-rnc .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-rnc .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-rnc .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rnc .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.02em; }
.cg-root.cg-rnc .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-rnc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rnc .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-rnc .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-rnc .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Halton (E06000006), Census 2021 TS001 usual residents 128,478. ONS 2021 BUAs (published): Runcorn 61,645; Widnes 59,935. postcodes.io (Halton) suburban areas: Higher Runcorn, Weston, Halton Brook, Palace Fields, Murdishaw, Windmill Hill, Norton, Beechwood, Halton Lea.',
    localProject: 'OSM bbox -2.760,53.305,-2.660,53.350 (8 tiles): 272 shops and food places. DBSCAN min 5: radius 60 m 5 clusters, 95 noise (34.9%), largest 100 (Church Street) and 54 (Forest Walk); 100 m 6, 86 (31.6%), 102/56; 150 m 8, 64 (23.5%), 104/60; 250 m 6, 46 (16.9%), 127/68. Lesson family: density-based clustering, noise, parameter sensitivity, robustness.',
    requiredMentions: [
      '61,645',
      '59,935',
      '128,478',
      'Widnes',
      'Murdishaw',
      'Palace Fields',
      'Windmill Hill',
      'Beechwood',
      'DBSCAN',
      'Forest Walk'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations and TS001 usual residents via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'OpenStreetMap map data around Runcorn, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io places: suburban areas in Halton.', url: 'https://api.postcodes.io/places?q=Murdishaw' }
    ],
    rejectedClaims: [
      'New-town or bridge history: not read from a source; not claimed.',
      'What the shopping areas are called officially: only the most common address tag in each cluster is reported.',
      'Named businesses: none named.',
      'Sum of the two built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
