'use strict';
// Horsforth (cg- district page, UK cluster Phase 9, row 461). Keyword slug per the owner's 2026-09-30 ruling (4-way rotation
// with city suffix). Spine: how do you measure fair access to something like a playground? (two-step floating catchment,
// 2SFCA, against a simple count, and how much the chosen walking distance changes the answer).
// Data (read 30 September 2026): Overpass API (OpenStreetMap, ODbL) over the rectangle 53.825 to 53.855 N, 1.665 to 1.605 W:
// walkable ways (all highways except motorways, trunk roads, construction, foot=no, private), 256.0 km; 16 playgrounds
// (leisure=playground, nodes or area centres). ONS Output Areas (December 2021) population-weighted centroids inside the
// rectangle: 122 OAs, all in Leeds, 37,296 usual residents (Census 2021 TS001 via Nomis).
// Our run (scratchpad hfh/fca2.py): walking distances on the network, points snapped to the nearest path node. 2SFCA: each
// playground's ratio = 1 / residents of OAs within the walking limit; each OA's score = sum of ratios of reachable
// playgrounds (per 1,000 residents). Residents with no playground within: 400 m 30,583 (82.0%); 800 m 16,220 (43.5%);
// 1,200 m 4,865 (13.0%). Spearman correlation of 2SFCA score with simple count, among OAs that reach at least one:
// 400 m 0.661 (23 OAs); 800 m 0.862 (69 OAs); 1,200 m 0.855 (106 OAs). Median residents sharing one playground's
// catchment: 622 / 3,230 / 6,692. One playground has no OA centre within 800 m.
// Lesson family: accessibility measurement, two-step floating catchment (2SFCA), threshold sensitivity. Screened:
// "floating catchment", "2SFCA", "accessibility index" 0 hits; claimed in the fork claims file. Leeds city page owns
// reservoir sampling; Irvine owns isochrones (reachable set from one point).
// Place facts: Census 2021 TS001, Horsforth ward (E05011547) 24,310; Horsforth is not an ONS built-up area of its own.
// postcodes.io places (Leeds): Horsforth, Cragg Hill, Horsforth Woodside (LS18); Newlay (LS13); Tinshill, Cookridge,
// West Park (LS16).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HORSFORTH', label: 'Horsforth', blurb: 'Coding and AI classes for Horsforth in Leeds, with a project that measures fair access to playgrounds and finds the answer hangs on one number.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-horsforth-leeds',
  code: 'hfh',
  accent: '#115E59',
  accentRationale: 'Horsforth: a deep pine teal (7.58:1 contrast), chosen by hand to sit apart from the purples and navies of recent pages',
  pageType: 'city',
  place: {
    name: 'Horsforth',
    eyebrow: 'Horsforth, Leeds, West Yorkshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-leeds', name: 'Leeds' }],
  nav: [
    { label: 'Leeds', href: '/best-coding-class-in-leeds' },
    { label: 'West Yorkshire', href: '/coding-classes-in-west-yorkshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Horsforth, Leeds',
  title: 'Coding and AI Classes in Horsforth, Leeds | Python, 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Horsforth, Cragg Hill, Newlay and Cookridge learners aged 6 to 67, with live tutors. First lesson free.',
  ogDescription: 'Coding and AI classes for Horsforth, with a Leeds data project that measures how fairly playgrounds are shared and how one threshold changes everything.',
  twitterDescription: 'Horsforth coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Horsforth, Leeds',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Horsforth and north-west Leeds, taught live with measurement skills first.'
  },

  h1: 'Coding and AI classes in Horsforth',
  capsuleQ: 'Where can Horsforth learners find the best coding and AI classes?',
  capsule: 'The 2021 census put 24,310 usual residents in Leeds\'s Horsforth ward. Postcodes.io records Cragg Hill and Horsforth Woodside in the LS18 district, with Newlay, Tinshill and Cookridge among the neighbouring places. Children from six and adults up to 67 can learn coding, AI, Python, vibe coding and maths with a tutor in India on live video, privately or in a class of five to ten at one level. We start with how to measure things fairly, so learners can question a score before trusting it. Lesson one costs nothing and finishes with the course we would choose. The Horsforth project maps 16 playgrounds and 37,296 residents on 256.0 km of paths, then compares a simple count with a fairer measure of access, and finds that one choice matters more than either method. Beyond the trial, fees are USD 100 a month in a group or USD 150 a month for one-to-one lessons.',
  lead: 'How good is your access to a playground? The quick answer counts how many are within walking distance. A fairer answer notices that a playground shared by 6,000 people is not the same as one shared by 600. The two-step floating catchment method, used by planners and health researchers, does exactly that: first it works out how many people each facility serves, then it adds up each neighbourhood\'s share of the facilities it can reach. This project builds both measures in Python for a rectangle around Horsforth, using OpenStreetMap paths and playgrounds and census counts for 122 small areas, and then asks the awkward question: what if the walking limit had been different?',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Horsforth?',

  picks: {
    eyebrow: 'Horsforth course picks',
    h2: 'Horsforth courses in measurement, Python and AI',
    intro: 'Four starting points by age. Whichever you pick, lesson one is live and free, and we do not ask for a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: fair shares, averages and asking what a number really measures.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with an AI and tested properly.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first steps to maps and data, including the Horsforth access study.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for geospatial data, analysis and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Horsforth and north-west Leeds',
      h2: 'Horsforth, Cragg Hill, Newlay and Cookridge',
      intro: 'The census count for Horsforth ward, and places recorded around it.',
      body: [
        { kind: 'table', caption: 'Horsforth in the 2021 census (usual residents, via Nomis)', head: ['Area', 'Residents (2021)'], rows: [
          ['Horsforth ward, Leeds', '24,310']
        ] },
        { kind: 'p', text: 'The ONS does not publish a separate built-up area for Horsforth, so the ward is the figure we use. Postcodes.io lists Horsforth, Cragg Hill and Horsforth Woodside in LS18, Newlay in LS13, and Tinshill, Cookridge and West Park in LS16. Leeds schools teach England\'s national curriculum, with GCSE and A level exams; share your holiday dates and lessons will leave those weeks out.' },
        { kind: 'callout', h3: 'Leeds, West Yorkshire and our approach', p: 'See the <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds page</a>, <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">coding classes in West Yorkshire</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a>. Why we teach reasoning before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Horsforth project',
      h2: 'Measuring fair access to playgrounds: simple counts against the two-step floating catchment',
      intro: 'Sixteen playgrounds, 122 census areas, two ways to score access, and three walking limits.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap paths and playgrounds for a rectangle around Horsforth through the Overpass service, 256.0 km of walkable ways and 16 playgrounds, plus the population-weighted centres of the 122 census output areas inside it, home to 37,296 people. Every walk is measured along real paths. The simple measure counts playgrounds within the walking limit of each area. The two-step floating catchment measure first divides each playground among everyone who can reach it, then gives each area the total of its shares.' },
        { kind: 'table', caption: 'Playground access around Horsforth at three walking limits, our Python run on OpenStreetMap and Census 2021 data', head: ['Walking limit', 'Residents with no playground in reach', 'Agreement of the two measures', 'Typical residents sharing one playground'], rows: [
          ['400 m', '30,583 (82.0%)', '0.661', '622'],
          ['800 m', '16,220 (43.5%)', '0.862', '3,230'],
          ['1,200 m', '4,865 (13.0%)', '0.855', '6,692']
        ] },
        { kind: 'p', text: 'Agreement here is a rank correlation among areas that reach at least one playground, where 1 would mean identical orderings. At 800 m and 1,200 m the fancy measure and the simple count rank areas very similarly, so in this corner of Leeds a count is a fair first guide. The number that swings is the one people quote most: the share of residents with no playground nearby. Choose 400 m and it is 82.0%; choose 1,200 m and it is 13.0%. The method matters less than the threshold, and the threshold is a human choice that deserves to be stated, argued and tested.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Share sweets between tables that sit near two bowls, and find out why counting bowls is not the whole story.' },
          { h3: 'Ages 11 to 15', p: 'Count Horsforth playgrounds within an 800 m walk of a few areas in Python.' },
          { h3: 'Ages 15 and up', p: 'Build the two-step floating catchment, vary the limit and write up which result is robust.' }
        ] },
        { kind: 'callout', h3: 'Open data, our measure', p: 'Paths and playgrounds are from OpenStreetMap and its contributors under the Open Database Licence; population and area centres are Office for National Statistics Census 2021 data under the Open Government Licence. The rectangle, the limits and every score are our own work; playgrounds not yet mapped are not counted.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Scores and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Somebody chose the cut-off behind every neat access map.',
      body: [
        { kind: 'table', caption: 'From the Horsforth playground study to working with AI', head: ['In the access project', 'When AI produces a score or ranking'], rows: [
          ['No-access share ran from 82.0% to 13.0%', 'One setting can swing the headline'],
          ['Count and 2SFCA agreed at 0.862', 'Check whether the complex method changes anything'],
          ['One playground reached no area centre', 'Edge cases hide in the data'],
          ['Unmapped playgrounds are invisible', 'A model only knows what was recorded'],
          ['Walking distance, not straight lines', 'Measure the thing people actually experience']
        ] },
        { kind: 'p', text: 'Ask an AI assistant which neighbourhoods are "under-served" and it will often choose a threshold silently and report a confident list. Vibe coding hands the typing to an AI while the learner describes the task; our Horsforth learners also name every threshold in the prompt and rerun with different values before they believe the answer. AI agents that analyse data and write reports should be instructed the same way. Agent building starts once a learner writes Python comfortably, usually older teenagers and adults, and Copilot Studio agents are taught one-to-one only. For the pathway, read <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for students in the UK</a>; for the reasoning, <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Our sources (OpenStreetMap, the ONS and postcodes.io) simply publish open data; none of them reviewed this study, and its mistakes, if any, are Modern Age Coders\'.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From sharing sweets to access models',
    intro: 'A school year is our first clue; the trial settles the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Fair shares, counting and saying what a number measures.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and data', p: 'Maps, networks and robust conclusions alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Geospatial Python and agents', p: 'Access analysis, data pipelines and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Data and fairness',
    h2: 'What is the two-step floating catchment method for measuring access?',
    intro: 'The two-step floating catchment method (2SFCA) measures access by first sharing each facility among everyone who can reach it, then giving each neighbourhood the total of its shares, so crowded facilities count for less than quiet ones.',
    p1: 'Around Horsforth it ranked areas much like a simple playground count (rank agreement 0.862 at an 800 m walk), while the share of residents with no playground in reach swung from 82.0% to 13.0% as the walking limit moved from 400 m to 1,200 m.',
    p2: 'Students who ran this study ask two things of every ranking an AI hands them: what cut-off was used, and would another one flip it?',
    closer: 'A Horsforth teenager who reruns a score with a different threshold will not be steered by one confident chart, and that habit grows fastest by writing code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Online lessons for north-west Leeds',
    intro: 'Kit list: a computer with a camera and broadband steady enough for video.',
    cells: [
      { h3: 'Hands on, always', p: 'Every line is typed and run by the learner, while the tutor, following on screen share, keeps asking what each result shows.' },
      { h3: 'Level from the trial', p: 'The free lesson shows where to begin, and any exam board is noted.' },
      { h3: 'Free opening lesson', p: 'Lesson one costs nothing and closes with a course suggestion.' },
      { h3: 'Classes by stage', p: 'Five to ten UK learners at the same level in each group.' },
      { h3: 'Twice weekly', p: 'Paused over school holidays.' },
      { h3: 'Fixed time', p: 'Our tutors follow UK clock changes, so your slot stays put.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, free on the same evening and close to each other, are rare. Video makes the distance irrelevant.' }
  },

  fees: {
    h2: 'Horsforth fees',
    intro: 'In Horsforth, as everywhere outside India, our international rates apply.',
    first: 'A full free lesson, then a recommendation.',
    group: 'Around eight live small-group lessons each month.',
    private: 'Around eight live one-to-one lessons each month.',
    closer: 'We bill in US dollars and never in sterling, beginning once the trial has settled a course and a slot; the pricing page explains school breaks, absences and changing format.'
  },

  reviewsH2: 'Leeds families and learners across the UK, on Google',

  book: {
    h2: 'Book a free Horsforth lesson',
    intro: 'Tell us the learner\'s age or school year and something they enjoy. We might start with a fair-shares puzzle, an AI-assisted Scratch game, some first Python, or plotting real playgrounds.',
    success: 'Thank you. Your Horsforth request has reached us.'
  },

  faq: {
    h2: 'Horsforth questions',
    intro: 'Access measures, the playground project, Python, vibe coding and practical details.',
    items: [
      { q: 'What is the population of Horsforth?', a: 'The 2021 census counted 24,310 usual residents in Horsforth ward, Leeds.' },
      { q: 'Are coding and AI classes available online in Horsforth?', a: 'They are. Lessons run over live video, so anyone 6 to 67 in Horsforth or elsewhere in Leeds can join.' },
      { q: 'What does 2SFCA stand for?', a: 'Two-step floating catchment area, an accessibility measure that shares each facility among the people who can reach it before scoring each neighbourhood.' },
      { q: 'Why does the walking limit matter so much?', a: 'It decides who counts as near. Around Horsforth, residents with no playground in reach fell from 82.0% at 400 m to 13.0% at 1,200 m.' },
      { q: 'What does the Horsforth project involve?', a: 'Mapping 16 playgrounds and 122 census areas on 256.0 km of paths, scoring access two ways and testing three walking limits.' },
      { q: 'Is vibe coding part of it?', a: 'From the first course on: learners say what they want built, then check and repair what the AI hands back.' },
      { q: 'At what stage do agents come in?', a: 'When writing Python feels routine, typically late teens and adults; Copilot Studio is taught privately.' },
      { q: 'Can you support exam years?', a: 'GCSE and A level computer science and maths are covered, taught so the ideas stick, with no promised grades.' },
      { q: 'What do lessons cost?', a: 'Trial free; after that USD 100 monthly for a class place or USD 150 monthly one-to-one.' },
      { q: 'Do lessons pause in the holidays?', a: 'Yes, for school holidays; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Leeds and Yorkshire pages',
    html: 'Pages with their own projects: <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a>, <a class="cg-inline-link" href="/best-coding-class-in-bradford">Bradford</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-harrogate">Harrogate</a> and <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">West Yorkshire</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Horsforth and Leeds',
  footerPlaces: [
    { href: '/best-coding-class-in-leeds', label: 'Leeds' },
    { href: '/coding-classes-in-west-yorkshire', label: 'West Yorkshire' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hfh .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-hfh .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-hfh .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-hfh .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hfh .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-hfh .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-hfh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hfh .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-hfh .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-hfh .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Leeds (E08000035). England: national curriculum, GCSE and A level. Census 2021 TS001: Horsforth ward (E05011547) 24,310. postcodes.io (Leeds): Horsforth, Cragg Hill, Horsforth Woodside (LS18); Newlay (LS13); Tinshill, Cookridge, West Park (LS16).',
    localProject: 'Overpass (OSM) rectangle 53.825-53.855 N, 1.665-1.605 W: walkable ways 256.0 km, 16 playgrounds; 122 OAs (PWC) with 37,296 residents (TS001). 2SFCA vs count, network walking. No playground within: 400 m 30,583 (82.0%); 800 m 16,220 (43.5%); 1,200 m 4,865 (13.0%). Spearman among served OAs 0.661 / 0.862 / 0.855. Median catchment residents 622 / 3,230 / 6,692. Lesson family: accessibility measurement, 2SFCA, threshold sensitivity.',
    requiredMentions: [
      '24,310',
      '37,296',
      '256.0 km',
      'Cragg Hill',
      'Horsforth Woodside',
      'Newlay',
      'Tinshill',
      'Cookridge',
      'floating catchment'
    ],
    sources: [
      { claim: 'OpenStreetMap paths and playgrounds via the Overpass API, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 usual residents for Horsforth ward and output areas, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Output Areas (December 2021) population-weighted centroids, ONS Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: suburban areas in Leeds.', url: 'https://api.postcodes.io/places?q=Cragg%20Hill' }
    ],
    rejectedClaims: [
      'Town history, landmarks or rankings of Horsforth: not read from a source; not claimed.',
      'That any area is under-served in fact: the page shows how the answer depends on the threshold; no policy claim.',
      'That OpenStreetMap lists every playground: not claimed; unmapped playgrounds are not counted.',
      'A Horsforth built-up area figure: the ONS publishes none; the ward figure is used.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
