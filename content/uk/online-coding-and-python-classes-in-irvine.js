'use strict';
// Irvine (cg- town page, UK cluster Phase 8, towns band A, row 419). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: what can you actually reach on foot in 5, 10, 15 or 20
// minutes? (isochrones: single-source shortest paths with a distance cut-off on a walking network, compared with the
// straight-line circle a simple calculation would draw).
// Data (read 29 September 2026): OpenStreetMap API 0.6 over bbox -4.705,55.595,-4.625,55.640 (6 tiles, ODbL): walkable ways
// (all highways except motorways, trunk roads, construction, foot=no, private), 350.6 km, main connected piece 14,622
// nodes; 10,769 buildings; start = the node OpenStreetMap uses to label the town (place=town "Irvine", id 3824817957),
// snapped 32.3 m to the network.
// Our run (scratchpad irv/iso.py): walking speed 80 m a minute (4.8 km/h, our assumption); network distance from the start
// plus the snap from each building's centre to its nearest network node. Buildings reachable on foot / inside the
// straight-line circle of the same radius / share: 5 min (400 m) 20 / 152 / 13.2%; 10 min (800 m) 292 / 746 / 39.1%; 15
// min (1,200 m) 1,065 / 1,991 / 53.5%; 20 min (1,600 m) 2,370 / 3,863 / 61.4%.
// Lesson family: isochrones, Dijkstra with a cut-off, network versus straight-line reach. Screened: "isochrone", "15-minute
// city" 0 hits. Cumbernauld owns circuity (ratios of route to straight line for random pairs); here the object is the
// reachable set from one point and the share of the naive circle it covers.
// Place facts: NRS mid-2020 localities: Irvine 34,130 (largest in North Ayrshire; Kilwinning 16,100 next, per the North
// Ayrshire page). postcodes.io (North Ayrshire, KA11/KA12) suburban areas: Bourtreehill, Dreghorn, Fullarton, Girdle Toll;
// villages Perceton, Springside (Dreghorn is registered by the North Ayrshire page).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'IRVINE', label: 'Irvine', blurb: 'Online coding and Python classes for Irvine, with a project that maps how far you can really walk in 5, 10, 15 and 20 minutes from the town centre.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-irvine',
  code: 'irv',
  accent: '#484C0B',
  accentRationale: 'Irvine: a dark khaki olive (7.31:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Irvine',
    eyebrow: 'Irvine, North Ayrshire, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'North Ayrshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'North Ayrshire', href: '/coding-classes-in-north-ayrshire' },
    { label: 'Kilmarnock', href: '/vibe-coding-and-ai-agents-classes-in-kilmarnock' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Irvine, Scotland',
  title: 'Online Coding and Python Classes in Irvine | AI, Ages 6 to 67',
  description: 'Live online coding, Python, AI and vibe coding lessons for Irvine, Girdle Toll, Bourtreehill and Dreghorn learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Online coding and Python classes for Irvine, with a map project showing how far you can really walk in 10 minutes compared with a circle on the map.',
  twitterDescription: 'Irvine online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Irvine',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Irvine and North Ayrshire, taught live with careful reasoning first.'
  },

  h1: 'Online coding and Python classes in Irvine',
  capsuleQ: 'Which are the best online coding and Python classes in Irvine?',
  capsule: 'North Ayrshire\'s largest locality by a wide margin is Irvine, with 34,130 people in the National Records of Scotland estimate for mid-2020. Girdle Toll, Bourtreehill, Fullarton and Dreghorn are among the suburbs on record in the KA11 and KA12 districts, with Perceton and Springside listed as villages. Coding, Python, AI, vibe coding and maths lessons come live from India-based tutors, for anyone six to 67, either solo or in a class of five to ten at a common stage. Reasoning comes first, so learners can see when a quick answer hides a wrong assumption. The first lesson costs nothing and ends with the course we would suggest. The Irvine project builds a 350.6 km walking network and draws the true 5, 10, 15 and 20 minute walks from the town centre, then compares them with the circles a simple calculation would draw. Staying on is USD 100 per month for group classes, or USD 150 per month for private teaching.',
  lead: 'Ask how much of a town lies within a ten-minute walk and the quick answer is a circle: ten minutes at walking pace, about 800 metres, drawn around the starting point. Real walks follow streets and paths, cross rivers only at bridges and go round railways, so the true reachable area, called an isochrone, is smaller and oddly shaped. Planners use isochrones to judge access to shops, schools and stations, and apps draw them for travel times. This project builds one from scratch in Python, starting from the point OpenStreetMap uses to label Irvine and counting how many of the town\'s 10,769 mapped buildings each walk really reaches.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Irvine?',

  picks: {
    eyebrow: 'Irvine course picks',
    h2: 'Irvine courses in thinking, Python and AI',
    intro: 'Pick by age and interest. Every course begins with a live lesson that is free and asks for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: routes, maps and the difference between near and reachable.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with AI help and tested carefully.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first programs to maps and graphs, including the Irvine walking study.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data, networks, mapping and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Irvine and North Ayrshire',
      h2: 'Irvine, Girdle Toll, Bourtreehill and Fullarton',
      intro: 'The NRS estimate for Irvine, and places recorded in KA11 and KA12.',
      body: [
        { kind: 'table', caption: 'Irvine in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['Irvine locality, mid-2020', '34,130']
        ] },
        { kind: 'p', text: 'Bourtreehill, Dreghorn, Fullarton and Girdle Toll are suburban areas of North Ayrshire on postcodes.io, in the KA11 and KA12 districts, with Perceton and Springside recorded as villages. North Ayrshire schools follow the Curriculum for Excellence; we plan by P and S year and give SQA Computing Science and Maths support through to Advanced Higher. Let us know the holiday weeks and lessons will steer clear of them.' },
        { kind: 'callout', h3: 'Ayrshire pages and exam support', p: 'See <a class="cg-inline-link" href="/coding-classes-in-north-ayrshire">coding classes in North Ayrshire</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-kilmarnock">Kilmarnock</a> and <a class="cg-inline-link" href="/national-5-maths-tuition-online">National 5 Maths tuition</a>. Why we build reasoning before tool use is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Irvine project',
      h2: 'Isochrones in Python: how far can you really walk from the centre of Irvine?',
      intro: 'A walking network, one starting point, four time limits and a circle for comparison.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data over Irvine and keeps every way a pedestrian may use: 350.6 km of streets, paths and tracks, leaving out motorways and trunk roads. The start is the point OpenStreetMap uses to label the town, snapped to the nearest path. Dijkstra\'s algorithm finds the walking distance to every junction, and each of the 10,769 mapped buildings is given the distance of its nearest junction. At an assumed walking pace of 80 m a minute, 4.8 km/h, the program counts the buildings reachable within each time, and the buildings inside a straight-line circle of the same radius.' },
        { kind: 'table', caption: 'Buildings reachable on foot from the centre of Irvine, against a straight-line circle, our Python run on OpenStreetMap data', head: ['Walking time', 'Circle radius', 'Reachable on foot', 'Inside the circle', 'Share of the circle reached'], rows: [
          ['5 minutes', '400 m', '20', '152', '13.2%'],
          ['10 minutes', '800 m', '292', '746', '39.1%'],
          ['15 minutes', '1,200 m', '1,065', '1,991', '53.5%'],
          ['20 minutes', '1,600 m', '2,370', '3,863', '61.4%']
        ] },
        { kind: 'p', text: 'The circle badly overstates what is walkable. In ten minutes a walker reaches 292 buildings, only 39.1% of the 746 inside the ten-minute circle. At five minutes the gap is widest: 20 against 152. The share improves with time, because longer walks have more chance to get round whatever blocks the direct line, but even at twenty minutes almost four in ten buildings inside the circle are out of reach. Likely reasons are visible on any map: water, railways and main roads that can only be crossed at certain places, and paths that wind rather than run straight.' },
        { kind: 'p', text: 'The figures rest on assumptions a learner should test: a single walking speed, every mapped path counted as usable, no waiting at crossings, and the choice of start. Change them and the shapes change, which is the point of building the tool rather than trusting one drawing.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'On a printed street map, colour everywhere you could walk in ten steps of the grid, then compare with a drawn circle.' },
          { h3: 'S1 to S3', p: 'Load a small part of Irvine\'s paths in Python and find the walking distance between two points.' },
          { h3: 'S4 and up', p: 'Build isochrones with Dijkstra, count buildings reached and test how the walking speed changes them.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap paths, our isochrones', p: 'Paths, streets and buildings are from OpenStreetMap and its contributors under the Open Database Licence. The start point, walking speed, network and counts are our own choices and calculations, not official accessibility statistics.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Reach and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Drawing a ring on a map is guessing; routing along the paths is measuring.',
      body: [
        { kind: 'table', caption: 'From the Irvine isochrones to working with AI', head: ['In the walking project', 'When AI estimates distance or access'], rows: [
          ['10 minutes reached 39.1% of the circle', 'Straight-line estimates can mislead badly'],
          ['5 minutes reached 20 of 152', 'Errors are largest at short range'],
          ['Barriers shaped the reachable area', 'Real constraints must be in the model'],
          ['One walking speed was assumed', 'State the assumptions behind every figure'],
          ['The start point changed the result', 'Test more than one case']
        ] },
        { kind: 'p', text: 'Ask an AI assistant which homes are "within a ten-minute walk" of somewhere and it may simply draw a circle from coordinates. In vibe coding a learner describes the program and an AI writes it; our Irvine learners insist on network distance, then check a few walks against the map. AI agents that recommend places or plan trips for people depend on getting exactly this right. We start agent projects when a learner can write Python on their own, which for most is late in school or later, and keep Copilot Studio to private lessons. For the next steps read <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our AI agents course for UK learners</a>, and for the approach <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, National Records of Scotland and postcodes.io publish the open data we used; they have no involvement with Modern Age Coders, and the isochrones and any errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From colouring maps to shortest-path code',
    intro: 'A P or S year gives us a starting guess; the trial lesson checks it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Maps, routes and near versus reachable.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and small apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and networks', p: 'Graphs, Dijkstra and real map data beside SQA Computing Science.', courses: ['python-complete-masterclass-teens', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Python, maps and agents', p: 'Geospatial analysis and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and maps',
    h2: 'What is an isochrone, and how do you make one in Python?',
    intro: 'An isochrone is the area reachable from a point within a set time; you make one by running a shortest-path algorithm such as Dijkstra\'s on a real travel network and keeping everything within the time limit.',
    p1: 'From the centre of Irvine at 4.8 km/h, a ten-minute walk reached 292 mapped buildings, just 39.1% of the 746 inside a straight-line circle of the same radius.',
    p2: 'Learners who have built that tool ask of any map an AI draws: is this distance along the ground, or through walls?',
    closer: 'An Irvine teenager who can route along real paths will spot a lazy circle in an AI answer straight away, and Python is how they get there.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Girdle Toll to Fullarton, all online',
    intro: 'A computer, a camera and a connection able to carry video are all the equipment needed.',
    cells: [
      { h3: 'Hands on the keys', p: 'The learner writes and runs everything while the tutor watches through screen share and asks what the result shows.' },
      { h3: 'Where to begin', p: 'The trial shows us, and if an SQA exam is coming we plan towards it.' },
      { h3: 'Nothing up front', p: 'We teach a full first session for free and then point to the right course.' },
      { h3: 'Grouped by ability', p: 'Each class has five to ten learners at one level, from across the country.' },
      { h3: 'Twice weekly in term', p: 'We stop when the schools do.' },
      { h3: 'Constant time', p: 'Tutors adjust for UK clock changes so your slot does not shift.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, free on the same evening, rarely live near each other. Video removes the distance.' }
  },

  fees: {
    h2: 'Irvine fees',
    intro: 'Irvine learners pay our international prices, used for every country apart from India.',
    first: 'A full lesson free of charge, then our recommendation.',
    group: 'About eight live group lessons each month.',
    private: 'About eight live one-to-one lessons each month.',
    closer: 'Everything is priced in US dollars, not sterling. Once the trial has fixed a course and a regular time, billing begins; holidays, absences and format changes are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews by Ayrshire families and UK learners',

  book: {
    h2: 'Book a free Irvine lesson',
    intro: 'Give us an age or school year plus an interest, and the trial will be built round it: perhaps a walk-colouring map puzzle, an AI-assisted Scratch game, a first script in Python, or a real shortest path.',
    success: 'Thank you. Your Irvine request is in.'
  },

  faq: {
    h2: 'Irvine questions',
    intro: 'Isochrones, the walking project, Python, vibe coding and practical details.',
    items: [
      { q: 'What is the population of Irvine?', a: 'National Records of Scotland estimated 34,130 people in the Irvine locality in mid-2020.' },
      { q: 'Are online Python classes available in Irvine?', a: 'Yes, as live video lessons for ages 6 to 67 in Irvine, Dreghorn, Springside and the rest of North Ayrshire.' },
      { q: 'Why is a straight-line circle a poor guide to walking distance?', a: 'Because walks follow paths and must go round rivers, railways and busy roads. From the centre of Irvine, a ten-minute walk reached only 39.1% of the buildings in the matching circle.' },
      { q: 'What does Dijkstra\'s algorithm do?', a: 'It finds the shortest route from one starting point to every other point in a network, which is exactly what an isochrone needs.' },
      { q: 'What does the Irvine project involve?', a: 'Building a walking network from OpenStreetMap, computing 5, 10, 15 and 20 minute isochrones from the town centre and counting the buildings each reaches.' },
      { q: 'Is there vibe coding?', a: 'Plenty, at all ages. Learners say what the program should do, then test and fix what the AI builds.' },
      { q: 'When do learners build AI agents?', a: 'Around the point where they write Python without prompts, usually the senior phase or adulthood; Copilot Studio is private-only.' },
      { q: 'Do you support SQA Maths and Computing Science?', a: 'Yes, from National 5 to Advanced Higher, taught for understanding and never with a promised grade.' },
      { q: 'How much are lessons?', a: 'Trial free. Monthly after that: USD 100 in a group, USD 150 on your own.' },
      { q: 'Do lessons pause in the holidays?', a: 'Yes, for school holidays; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other Ayrshire pages',
    html: 'Different experiments on each: <a class="cg-inline-link" href="/coding-classes-in-north-ayrshire">North Ayrshire</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-kilmarnock">Kilmarnock</a> (agents sharing work), <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-ayr">Ayr</a> and <a class="cg-inline-link" href="/coding-classes-in-south-ayrshire">South Ayrshire</a>. For the rest, use the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Irvine and North Ayrshire',
  footerPlaces: [
    { href: '/coding-classes-in-north-ayrshire', label: 'North Ayrshire' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-irv .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-irv .cg-hero h1 { font-weight: 760; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-irv .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-irv .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-irv .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-irv .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-irv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-irv .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-irv .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-irv .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'North Ayrshire (S12000021). Scotland: Curriculum for Excellence, SQA National 5 to Advanced Higher. NRS mid-2020 settlement and locality estimates: Irvine 34,130 (Kilwinning 16,100 next). postcodes.io (North Ayrshire, KA11/KA12): Bourtreehill, Dreghorn, Fullarton, Girdle Toll (suburban areas); Perceton, Springside (villages).',
    localProject: 'OSM API 0.6 bbox -4.705,55.595,-4.625,55.640: walking network 350.6 km (main piece 14,622 nodes), 10,769 buildings, start = place=town node 3824817957 (snap 32.3 m). 80 m/min. Reachable / circle / share: 5 min 20/152/13.2%; 10 min 292/746/39.1%; 15 min 1,065/1,991/53.5%; 20 min 2,370/3,863/61.4%. Lesson family: isochrones, Dijkstra with cut-off.',
    requiredMentions: [
      '34,130',
      '10,769',
      'Girdle Toll',
      'Bourtreehill',
      'Fullarton',
      'Perceton',
      'Springside',
      'isochrone',
      '39.1%'
    ],
    sources: [
      { claim: 'OpenStreetMap paths, streets and buildings in Irvine, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas and villages in North Ayrshire.', url: 'https://api.postcodes.io/places?q=Girdle%20Toll' }
    ],
    rejectedClaims: [
      'New-town history, harbour or named landmarks along the walks: not read from a source; not claimed.',
      'Which specific barrier blocks which walk: described generally; not attributed to named features.',
      'Official accessibility or walking-time statistics: none; figures are our model.',
      'Largest locality in North Ayrshire: per NRS mid-2020 figures quoted on the North Ayrshire page (Irvine 34,130, Kilwinning 16,100).',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
