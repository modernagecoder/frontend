'use strict';
// Cumbernauld (cg- town page, UK cluster Phase 8, towns band A, row 411). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how much further is the real journey than the
// straight line, on foot and by road? (circuity or detour factor: network shortest paths divided by straight-line
// distance, sampled over many random trips, and how it varies with trip length).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map calls over bbox -4.035,55.930,-3.945,55.965 in 12 tiles (ODbL).
// Inside the rectangle: 248.1 km of roads (including service roads) and 209.3 km of footways, paths, cycleways, steps and
// pedestrian ways. Walking graph = every highway way except motorways, trunk roads, foot=no, private, construction;
// driving graph = public roads including service roads. Largest connected pieces: 20,530 walking nodes, 12,025 driving
// nodes, 11,801 in both.
// Our run (scratchpad cum/circ.py): 600 random pairs of shared nodes at least 300 m apart (seed 2026), median straight
// line 2.06 km; Dijkstra shortest paths on each graph. Detour factor (network / straight line): walking median 1.335, 90th
// percentile 1.737; driving median 1.698, 90th percentile 2.706. Driving / walking median 1.196; driving more than 1.5 times
// the walk in 18.8% of pairs. By straight-line band (pairs; walk; drive): 0.3 to 1 km 77, 1.455, 1.904; 1 to 2 km 205,
// 1.382, 1.814; 2 to 4 km 282, 1.297, 1.652; 4 km and over 36, 1.232, 1.350.
// Lesson family: circuity / detour factor of networks, sampling routes, distribution by distance band. Screened: "circuity",
// "detour factor", "network distance" 0 hits; Worcester owns A* and Bristol Voronoi; Dijkstra is only the tool here.
// Place facts: NRS mid-2020 localities: Cumbernauld 50,530 (North Lanarkshire page registers council figures).
// postcodes.io (North Lanarkshire, G67/G68) suburban areas: Abronhill, Balloch, Carbrain, Carrickstone, Condorrat,
// Greenfaulds, Kildrum, Luggiebank, Seafar, Westerwood, Westfield.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CUMBERNAULD', label: 'Cumbernauld', blurb: 'Online coding and Python classes for Cumbernauld, with a project that measures how much further real journeys are than the straight line, on foot and by road.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-cumbernauld',
  code: 'cbd',
  accent: '#5C553C',
  accentRationale: 'Cumbernauld: a dark olive grey (6.0:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Cumbernauld',
    eyebrow: 'Cumbernauld, North Lanarkshire, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'North Lanarkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'North Lanarkshire', href: '/coding-classes-in-north-lanarkshire' },
    { label: 'Falkirk', href: '/coding-classes-in-falkirk' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Cumbernauld, Scotland',
  title: 'Online Coding and Python Classes in Cumbernauld | AI, 6 to 67',
  description: 'Live online coding, Python, AI and vibe coding lessons for Cumbernauld, Abronhill, Condorrat and Balloch learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Online coding and Python classes for Cumbernauld, with a map project measuring how far real walking and driving routes stray from the straight line.',
  twitterDescription: 'Cumbernauld online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Cumbernauld',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Cumbernauld and North Lanarkshire, taught live with sound reasoning first.'
  },

  h1: 'Online coding and Python classes in Cumbernauld',
  capsuleQ: 'Which are the best online coding and Python classes in Cumbernauld?',
  capsule: 'Cumbernauld is North Lanarkshire\'s biggest locality, with 50,530 residents in the mid-2020 estimate from National Records of Scotland. Abronhill, Condorrat, Balloch, Carbrain, Kildrum and Seafar are among the suburbs on record in the G67 and G68 districts. Coding, Python, AI, vibe coding and maths lessons run on live video with our tutors in India, for ages six to 67, either solo or in a five-to-ten-strong class of similar level. Every course starts from clear reasoning, so a learner can test what an AI assistant suggests. Your trial lesson costs nothing, and at the end we say which course we would pick. The Cumbernauld project builds walking and driving networks from 457 km of mapped paths and roads and measures how much further 600 real routes are than the straight line. Monthly tuition afterwards: USD 100 for a class seat, USD 150 for a tutor to yourself.',
  lead: 'A map app never tells you the straight-line distance; it tells you the route. The ratio between the two, route length divided by the crow-flies distance, is called the detour factor or circuity, and it says a lot about how a place is laid out. A town where it stays near 1 lets you travel almost directly; one where it climbs towards 2 sends you the long way round. Measuring it takes a real map, a shortest-path algorithm and a few hundred random trips, all things a learner can put together in Python. Cumbernauld, with 209 km of mapped footways, paths and cycleways alongside its roads, makes a revealing test of walking against driving.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Cumbernauld?',

  picks: {
    eyebrow: 'Cumbernauld course picks',
    h2: 'Cumbernauld courses in thinking, Python and AI',
    intro: 'Match a course to age and interest. The first lesson of each is live and free, with nothing to pay upfront.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: routes, maps, measuring and asking why the short way is not the straight way.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with AI help and checked thoroughly.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first steps to graphs and maps, including the Cumbernauld route study.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data, networks, automation and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Cumbernauld and North Lanarkshire',
      h2: 'Cumbernauld, Abronhill, Condorrat and Balloch',
      intro: 'The NRS estimate for Cumbernauld, and suburbs recorded in G67 and G68.',
      body: [
        { kind: 'table', caption: 'Cumbernauld in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['Cumbernauld locality, mid-2020', '50,530']
        ] },
        { kind: 'p', text: 'On postcodes.io, Abronhill, Balloch, Carbrain, Carrickstone, Condorrat, Greenfaulds, Kildrum, Luggiebank, Seafar, Westerwood and Westfield are suburban areas of North Lanarkshire in the G67 and G68 postcode districts. Teaching lines up with the Curriculum for Excellence, P and S year groups, and SQA Computing Science and Maths from National 5 through Advanced Higher. Send the holiday dates and lessons will avoid them.' },
        { kind: 'callout', h3: 'North Lanarkshire, Falkirk and Scottish exams', p: 'Try <a class="cg-inline-link" href="/coding-classes-in-north-lanarkshire">coding classes in North Lanarkshire</a>, <a class="cg-inline-link" href="/coding-classes-in-falkirk">Falkirk</a> and <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths tuition</a>. Why we put thinking before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Cumbernauld project',
      h2: 'How far is it really? Walking and driving detour factors from OpenStreetMap',
      intro: 'Build two networks from one map, sample 600 trips, and compare every route with a ruler line.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data for a rectangle over Cumbernauld: 248.1 km of roads and 209.3 km of footways, paths, cycleways and steps. From it Python builds two networks. The walking network uses every way a pedestrian may use, leaving out motorways and trunk roads; the driving network keeps only public roads. The program then picks 600 random pairs of points found on both networks, at least 300 m apart, finds the shortest route between each pair with Dijkstra\'s algorithm, and divides it by the straight-line distance.' },
        { kind: 'table', caption: 'Detour factors for 600 random trips across Cumbernauld, our Python run on OpenStreetMap data', head: ['Measure', 'On foot', 'By road'], rows: [
          ['Median detour factor', '1.335', '1.698'],
          ['90th percentile', '1.737', '2.706'],
          ['Trips of 0.3 to 1 km (77)', '1.455', '1.904'],
          ['Trips of 2 to 4 km (282)', '1.297', '1.652'],
          ['Trips of 4 km or more (36)', '1.232', '1.350']
        ] },
        { kind: 'p', text: 'On foot, a typical trip here is about a third longer than the straight line; by road it is about 70% longer, and one trip in ten is at least 2.7 times the direct distance. For the median pair, the drive is about 20% longer than the walk, and in 18.8% of pairs the drive is more than one and a half times the walk. Short trips suffer most: under a kilometre, walkers go 46% further than the crow and drivers 90% further; a likely reason is that the first and last stretches of a journey rarely point the right way, and on a short trip they are most of it. Over longer distances the extra shrinks towards the straight line.' },
        { kind: 'p', text: 'The numbers come with honest limits. The rectangle cuts routes that would leave it, one-way streets are ignored, and a path counts only if someone has mapped it. Change any of those and the numbers move, which is exactly why a learner should be able to rerun the analysis rather than quote it.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Measure a straight line and a string laid along the streets between two places on a printed map.' },
          { h3: 'S1 to S3', p: 'Load a small piece of the Cumbernauld map in Python and find the shortest walk between two points.' },
          { h3: 'S4 and up', p: 'Build both networks, sample hundreds of trips and chart the detour factor by distance.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap routes, our sampling', p: 'Paths and roads are from OpenStreetMap and its contributors under the Open Database Licence. The networks, sampled trips and every ratio are our own calculations, not official travel statistics.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Distances and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'As the crow flies is how nobody actually travels.',
      body: [
        { kind: 'table', caption: 'From the Cumbernauld route study to working with AI', head: ['In the detour project', 'When AI estimates something for you'], rows: [
          ['Walking trips ran 1.335 times the straight line', 'Real systems add overheads a simple formula misses'],
          ['Short trips detoured most', 'Averages hide where the error is largest'],
          ['One road trip in ten was 2.7 times direct', 'Look at the tail, not only the middle'],
          ['600 samples gave a stable picture', 'Measure many cases rather than trusting one'],
          ['Edges and unmapped paths shaped results', 'State what the data leaves out']
        ] },
        { kind: 'p', text: 'Ask an AI assistant how far apart two places are and it may reason from coordinates and give a straight-line figure as if it were the journey. Vibe coding lets a learner describe the program while the AI writes it; our Cumbernauld learners insist it measures along the network, then check a few routes by hand. AI agents that plan deliveries or trips for you depend on getting exactly this right. Building agents waits until a learner handles Python without hand-holding, generally late in secondary school or beyond, and anything in Copilot Studio is taught in private lessons. The agent route is mapped out on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our page for UK students</a>; the philosophy behind it is <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'None of OpenStreetMap, National Records of Scotland or postcodes.io is connected with us; we drew on their open data, and the modelling and any mistakes are Modern Age Coders\'.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From string on a map to shortest-path code',
    intro: 'The school year is our first guess at a level; the trial lesson settles it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Maps, measuring and comparing routes.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Small apps and games planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and networks', p: 'Graphs, shortest paths and sampling next to SQA Computing Science and Maths.', courses: ['python-complete-masterclass-teens', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Python, data and agents', p: 'Data, networks and AI agents built in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and maps',
    h2: 'How do you work out the real walking distance between two places in Python?',
    intro: 'Build a network from map data, run a shortest-path algorithm such as Dijkstra\'s along it, and compare the result with the straight-line distance; the ratio is called the detour factor.',
    p1: 'Across 600 random trips in Cumbernauld, walking routes were a median 1.335 times the straight line and driving routes 1.698 times, with trips under a kilometre detouring most.',
    p2: 'Learners who have measured that ask of any distance an AI quotes: is it along the route or as the crow flies?',
    closer: 'Checking how an answer was measured lets Cumbernauld teenagers use AI with confidence rather than faith, a fine reason to learn Python in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Taught online across Cumbernauld',
    intro: 'Laptop or desktop, camera, and broadband that can carry a video call: that is everything.',
    cells: [
      { h3: 'Student at the keys', p: 'Learners write, prompt and run every step themselves; the tutor watches over screen share and asks why each choice was made.' },
      { h3: 'Starting line', p: 'We find the right first topic during the trial and note any SQA exam ahead.' },
      { h3: 'No charge to try', p: 'The first lesson is free and ends with a course suggestion.' },
      { h3: 'Groups of equals', p: 'Every group seats five to ten learners at a common stage, drawn from across Britain.' },
      { h3: 'Two a week', p: 'Paused for school holidays.' },
      { h3: 'Fixed time', p: 'Our tutors follow UK clock changes, so your slot does not move.' }
    ],
    spec: { title: 'Why online', p: 'Finding five learners at one level, free the same evening and close together, is rare. Video makes proximity irrelevant.' }
  },

  fees: {
    h2: 'Cumbernauld fees',
    intro: 'Cumbernauld learners pay our international prices, which apply in every country but India.',
    first: 'A full free lesson, then a recommendation.',
    group: 'Some eight live group lessons each month.',
    private: 'Some eight live one-to-one lessons each month.',
    closer: 'Our prices are set in US dollars, not sterling, and nothing is billed before the trial has agreed a course and a weekly slot. Holidays, absences and switching format are all explained on the pricing page.'
  },

  reviewsH2: 'What North Lanarkshire parents and UK learners say on Google',

  book: {
    h2: 'Book a free Cumbernauld lesson',
    intro: 'Give us an age or school year and one thing the learner is into. We could open with measuring routes on a paper map, an AI-assisted Scratch game, a beginner\'s Python script, or real shortest paths.',
    success: 'Thank you. Your Cumbernauld request has come through.'
  },

  faq: {
    h2: 'Cumbernauld questions',
    intro: 'Route ratios, the map study, vibe coding, Python and how lessons are arranged.',
    items: [
      { q: 'What is the population of Cumbernauld?', a: 'National Records of Scotland estimated 50,530 people in the Cumbernauld locality in mid-2020.' },
      { q: 'Can Cumbernauld learners take online Python classes?', a: 'They can. Every class runs on live video, open to ages 6 to 67 anywhere in North Lanarkshire.' },
      { q: 'What is a detour factor?', a: 'The length of the real route divided by the straight-line distance. A value of 1.3 means the journey is 30% longer than a direct line.' },
      { q: 'Why do short trips detour more?', a: 'A likely reason is that the first and last parts of a journey rarely point towards the destination, and on a short trip those parts make up much of the distance. In our sample, trips under 1 km detoured most.' },
      { q: 'What does the Cumbernauld project involve?', a: 'Building walking and driving networks from OpenStreetMap, sampling 600 random trips and comparing each route with the straight line.' },
      { q: 'Is vibe coding taught?', a: 'Yes, at all ages, with learners describing, testing and correcting what the AI writes.' },
      { q: 'When do learners start building AI agents?', a: 'Once Python is comfortable, usually S4 to S6 or as adults; Copilot Studio agents are private lessons only.' },
      { q: 'Do you help with National 5, Higher and Advanced Higher?', a: 'Yes, in Computing Science and Maths, for understanding rather than guaranteed grades.' },
      { q: 'What are the fees?', a: 'Free for the trial, then USD 100 monthly as part of a class or USD 150 monthly one-to-one.' },
      { q: 'What happens in school holidays?', a: 'Lessons stop for them; just share the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More North Lanarkshire and central Scotland pages',
    html: 'Pages with their own projects: <a class="cg-inline-link" href="/coding-classes-in-north-lanarkshire">North Lanarkshire</a>, <a class="cg-inline-link" href="/coding-classes-in-falkirk">Falkirk</a>, <a class="cg-inline-link" href="/best-coding-class-in-stirling">Stirling</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-hamilton-scotland">Hamilton</a> (an agent covering every street). The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> reach everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Cumbernauld and North Lanarkshire',
  footerPlaces: [
    { href: '/coding-classes-in-north-lanarkshire', label: 'North Lanarkshire' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-cbd .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-cbd .cg-hero h1 { font-weight: 760; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-cbd .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; border-radius: 0 6px 6px 0; }
.cg-root.cg-cbd .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cbd .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.02em; }
.cg-root.cg-cbd .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; font-style: italic; }
.cg-root.cg-cbd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cbd .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-cbd .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-cbd .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'North Lanarkshire (S12000050). Scotland: Curriculum for Excellence, SQA National 5, Higher, Advanced Higher. NRS mid-2020 settlement and locality estimates: Cumbernauld 50,530. postcodes.io (North Lanarkshire, G67/G68): Abronhill, Balloch, Carbrain, Carrickstone, Condorrat, Greenfaulds, Kildrum, Luggiebank, Seafar, Westerwood, Westfield (suburban areas).',
    localProject: 'OSM API 0.6 bbox -4.035,55.930,-3.945,55.965 (12 tiles): 248.1 km roads, 209.3 km paths. Walking graph 20,530 nodes, driving 12,025, shared 11,801. 600 random pairs >= 300 m (median 2.06 km). Detour median walk 1.335 (p90 1.737), drive 1.698 (p90 2.706); drive/walk median 1.196; drive > 1.5 x walk in 18.8%. Bands: <1 km 1.455/1.904; 2-4 km 1.297/1.652; >= 4 km 1.232/1.350. Lesson family: circuity / detour factor.',
    requiredMentions: [
      '50,530',
      'Abronhill',
      'Condorrat',
      'Carbrain',
      'Kildrum',
      'Seafar',
      'Greenfaulds',
      'detour factor',
      'circuity'
    ],
    sources: [
      { claim: 'OpenStreetMap map data for Cumbernauld, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas in North Lanarkshire.', url: 'https://api.postcodes.io/places?q=Abronhill' }
    ],
    rejectedClaims: [
      'New-town planning history or claims about segregated paths: not read from a source; only mapped lengths are reported.',
      'Official journey times or travel statistics: none; the detour factors are our own sample.',
      'One-way streets and routes leaving the rectangle: ignored, and said so on the page.',
      'Largest locality in North Lanarkshire: per NRS mid-2020 figures quoted on the North Lanarkshire page (Cumbernauld 50,530, Coatbridge 43,950).',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
