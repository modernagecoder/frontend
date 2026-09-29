'use strict';
// Motherwell (cg- town page, UK cluster Phase 8, towns band A, row 421). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: with one-way streets, can you drive back out of
// every street you can drive into? (directed graphs, strongly connected components, and telling real traps from artefacts
// of how the data was cut).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map calls (ODbL) over a larger box, analysed inside bbox
// -4.012,55.772,-3.960,55.800. Public streets only (motorway to living street and links; service roads, private and
// no-motor ways left out), one-way rules from oneway=yes/-1 and roundabouts: 96.9 km of street, 14.8 km one-way.
// Our run (scratchpad mtw/scc3.py): directed graph, 4,074 nodes; largest weakly connected piece 4,014 nodes; 115 strongly
// connected components; the largest holds 3,878 nodes (96.61%) and 98.8% of directed street length. 136 nodes fall
// outside it; 121 of those lie within 300 m of the rectangle's edge (roads cut by the box). The 15 interior ones form 3
// small regions: 9 nodes (168 m, unclassified, can leave but not legally re-enter) and two 3-node pieces of about 15 to 19 m
// on a tertiary road.
// Lesson family: directed graphs and strongly connected components (Kosaraju/Tarjan), boundary artefacts in cut data.
// Screened: "strongly connected", "Kosaraju" 0 hits; Shrewsbury owns undirected components with union-find and graph
// bridges (its Tarjan mention is for bridges); Hamilton owns route inspection on the same kind of data.
// Place facts: NRS mid-2020 localities: Motherwell 32,840 (fourth in North Lanarkshire after Cumbernauld 50,530, Coatbridge
// 43,950, Airdrie 36,390, per the North Lanarkshire page). postcodes.io (North Lanarkshire, ML1) suburban areas: Carfin,
// Flemington, Forgewood, Muirhouse, New Stevenston; villages Cleland, Newarthill.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'MOTHERWELL', label: 'Motherwell', blurb: 'Coding and AI classes for Motherwell, with a project that checks whether one-way streets ever let you drive in but not out.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-motherwell',
  code: 'mtw',
  accent: '#25336B',
  accentRationale: 'Motherwell: a deep navy (9.59:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Motherwell',
    eyebrow: 'Motherwell, North Lanarkshire, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'North Lanarkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'North Lanarkshire', href: '/coding-classes-in-north-lanarkshire' },
    { label: 'Hamilton', href: '/vibe-coding-and-ai-agents-classes-in-hamilton-scotland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Motherwell, Scotland',
  title: 'Coding and AI Classes in Motherwell | Python, Ages 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Motherwell, Forgewood, Muirhouse and Newarthill learners aged 6 to 67, taught live online. First lesson free.',
  ogDescription: 'Coding and AI classes for Motherwell, with a directed-graph project that checks whether one-way streets can trap a driver.',
  twitterDescription: 'Motherwell coding, AI, Python and vibe coding classes online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Motherwell',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Motherwell and North Lanarkshire, taught live with logical thinking first.'
  },

  h1: 'Coding and AI classes in Motherwell',
  capsuleQ: 'Where can Motherwell learners find the best coding and AI classes?',
  capsule: 'Behind Cumbernauld, Coatbridge and Airdrie, Motherwell is North Lanarkshire\'s fourth locality, estimated at 32,840 residents for mid-2020 by National Records of Scotland. Forgewood, Muirhouse, Flemington, Carfin and New Stevenston are among its recorded suburbs in the ML1 district, with Newarthill and Cleland listed as villages. Coding, AI, Python, vibe coding and maths lessons are delivered on camera by India-based tutors to anyone six to 67, as one-to-one sessions or in a level-matched group of five to ten. Logical thinking is taught before tools, so learners can find the flaw in a map, a program or an AI answer. We run the first session without charge and finish it with a course suggestion. The Motherwell project turns 96.9 km of mapped streets into a directed graph and asks whether any one-way rule lets a driver in but never out. Past the trial, group lessons are USD 100 monthly and individual lessons USD 150 monthly.',
  lead: 'A road map is a graph: junctions joined by streets. With two-way streets you can always retrace your steps, but one-way streets turn it into a directed graph, where getting from A to B says nothing about getting back. The right question then is which parts of town are strongly connected: places you can drive from any one to any other and back again, legally. A single wrongly tagged one-way street can create a pocket you can enter but never leave. This project runs that check on Motherwell\'s streets as mapped on OpenStreetMap, and discovers that most of the apparent problems were caused by the analysis itself.',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Motherwell?',

  picks: {
    eyebrow: 'Motherwell course picks',
    h2: 'Motherwell courses in logic, Python and AI',
    intro: 'Four starting points arranged by age. Whichever you choose, the opening live lesson is free and booking takes no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: one-way arrows, mazes and proving you can always get back.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games designed by the learner, built with an AI and tested until they break.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from scratch to graphs and maps, including the Motherwell one-way check.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Modern AI, planning agents that navigate constraints, and Python agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Motherwell and North Lanarkshire',
      h2: 'Motherwell, Forgewood, Muirhouse and Newarthill',
      intro: 'The NRS figure for Motherwell, and places recorded in ML1.',
      body: [
        { kind: 'table', caption: 'Motherwell in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['Motherwell locality, mid-2020', '32,840']
        ] },
        { kind: 'p', text: 'Carfin, Flemington, Forgewood, Muirhouse and New Stevenston appear on postcodes.io as suburban areas of North Lanarkshire in ML1; Cleland and Newarthill are recorded as villages. Lanarkshire classrooms work to the Curriculum for Excellence, and we plan the same way, by primary and secondary year, with SQA help in Computing Science and Maths. Tell us the holiday dates and those weeks stay free.' },
        { kind: 'callout', h3: 'North Lanarkshire links and SQA', p: 'Try <a class="cg-inline-link" href="/coding-classes-in-north-lanarkshire">coding classes in North Lanarkshire</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-hamilton-scotland">Hamilton</a> and <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science help</a>. Our thinking-first approach is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Motherwell project',
      h2: 'Can you always drive out again? Strongly connected components on Motherwell\'s one-way streets',
      intro: 'A directed street graph, a search in both directions, and a careful look at where the gaps are.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data and keeps the public streets inside a rectangle over Motherwell: 96.9 km, of which 14.8 km carry one-way rules, including roundabouts. Each street becomes one arrow for a one-way street or two arrows for a two-way one. Python then finds the strongly connected components: groups of junctions where every one can reach every other and back. A classic way to do it, Kosaraju\'s algorithm, runs one search along the arrows and a second search against them.' },
        { kind: 'table', caption: 'Strongly connected components of Motherwell\'s public streets, our Python run on OpenStreetMap data', head: ['Measure', 'Result'], rows: [
          ['Junctions and bends in the network', '4,014'],
          ['In the largest strongly connected component', '3,878 (96.61%)'],
          ['Share of street length in it', '98.8%'],
          ['Points outside it', '136'],
          ['Of those, within 300 m of the rectangle\'s edge', '121'],
          ['Interior pockets left', '3, the largest 168 m long']
        ] },
        { kind: 'p', text: 'At first sight 136 points look trapped, but 121 of them sit near the edge of the rectangle. Cutting the map at a straight line chops streets in half, and a one-way street that leaves the box looks like a dead end with no way back. That is a problem created by the analysis, not by Motherwell. Only 15 interior points remain, in three tiny pockets: one 168 m unclassified road that the map lets you leave but not legally enter, and two short pieces of about 15 and 19 m on a tertiary road. Pockets like these are usually a real restriction such as an exit-only road, or a tagging slip worth checking on the ground; the graph cannot tell which.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Draw a small town with arrows on some streets and find any place you can reach but cannot leave.' },
          { h3: 'S1 to S3', p: 'Build a directed graph of a few Motherwell streets in Python and search it forwards and backwards.' },
          { h3: 'S4 and up', p: 'Run Kosaraju\'s algorithm on the whole network and separate real pockets from edge artefacts.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap streets, our graph', p: 'Street geometry and one-way tags are from OpenStreetMap and its contributors under the Open Database Licence. Turn restrictions and time-limited rules were not modelled; the rectangle, graph and results are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Graphs and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Some problems in the data are ones you put there yourself.',
      body: [
        { kind: 'table', caption: 'From the Motherwell one-way check to working with AI', head: ['In the street project', 'When an AI agent plans in a network'], rows: [
          ['One-way streets made the graph directed', 'Constraints change what is reachable'],
          ['98.8% of street length was strongly connected', 'Most networks are healthy; measure it'],
          ['121 of 136 problem points were edge artefacts', 'Your own cut can create false problems'],
          ['Three tiny pockets remained', 'Real anomalies deserve a human check'],
          ['Turn restrictions were not modelled', 'Know what the model leaves out']
        ] },
        { kind: 'p', text: 'Route-planning agents, delivery robots and navigation apps all rely on directed graphs, and a single trap can leave an agent stuck. In vibe coding the learner describes the program and the AI writes it; our Motherwell learners also ask where the data was cut and what that does to the answer, then check the most surprising results by hand. Agents that act in the real world need the same scepticism about their inputs. Agent projects are for learners whose Python already runs without a safety net, typically senior pupils and adults, and Copilot Studio is kept to private tuition. More detail sits on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents route for UK students</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no tie to OpenStreetMap, National Records of Scotland or postcodes.io; we relied on their open data, and the graph work and its errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From arrow mazes to graph algorithms',
    intro: 'We use the school year as a starting hint and adjust after the trial.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Arrows, mazes and proving a way back exists.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and small apps made with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and graphs', p: 'Directed graphs, searches and real map data alongside SQA Computing Science.', courses: ['python-complete-masterclass-teens', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'AI and planning agents', p: 'Graphs, planning and AI agents, built in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Graphs and code',
    h2: 'What is a strongly connected component in a graph?',
    intro: 'In a directed graph, a strongly connected component is a group of points where every point can reach every other by following the arrows, and get back again; algorithms such as Kosaraju\'s find them with two searches.',
    p1: 'On Motherwell\'s one-way street network, 98.8% of street length formed one strongly connected component, and 121 of the 136 points outside it turned out to be artefacts of cutting the map at the rectangle\'s edge.',
    p2: 'Learners who have run that check ask of any AI route or plan: is every step reversible, and did the way the data was cut create the problem?',
    closer: 'Separating real problems from artefacts keeps Motherwell teenagers in charge of the AI they use, and coding is where that skill is practised in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Online lessons across Motherwell',
    intro: 'Kit list: a computer, a webcam and an internet connection that handles video.',
    cells: [
      { h3: 'Learner in charge', p: 'The student types and runs everything; the tutor watches via screen share and asks them to predict each output.' },
      { h3: 'Trial sets the level', p: 'The free first lesson shows what to teach first, with SQA exams noted if relevant.' },
      { h3: 'Opening lesson free', p: 'No fee for lesson one, which finishes with a course suggestion.' },
      { h3: 'Classes by ability', p: 'Five to ten learners from across Britain, grouped by stage.' },
      { h3: 'Twice weekly', p: 'We break for school holidays.' },
      { h3: 'Unchanging hour', p: 'When UK clocks change, our tutors move so you do not have to.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one stage, free the same evening and living close by, are rare. Online classes make distance irrelevant.' }
  },

  fees: {
    h2: 'Motherwell fees',
    intro: 'Motherwell learners are on our international rates, which apply in every country except India.',
    first: 'A free first lesson, then a recommendation.',
    group: 'About eight live small-group lessons monthly.',
    private: 'About eight live one-to-one lessons monthly.',
    closer: 'Motherwell families are billed in US dollars, not pounds, from the week the trial fixes a course and a slot; holiday breaks, missed lessons and switching format sit on the pricing page.'
  },

  reviewsH2: 'What Lanarkshire families and UK learners say on Google',

  book: {
    h2: 'Book a free Motherwell lesson',
    intro: 'Give us an age or school year and something the learner enjoys. We might start with an arrow-maze puzzle, an AI-assisted Scratch game, some first Python, or a small directed graph of real streets.',
    success: 'Thank you. Your Motherwell request has reached us.'
  },

  faq: {
    h2: 'Motherwell questions',
    intro: 'Directed graphs, the street check, vibe coding, Python and practical points.',
    items: [
      { q: 'What is the population of Motherwell?', a: 'National Records of Scotland estimated 32,840 people in the Motherwell locality in mid-2020.' },
      { q: 'Are coding and AI classes available online in Motherwell?', a: 'They are. Carfin, Newarthill and the rest of the area are all in reach, because lessons happen on live video for ages 6 to 67.' },
      { q: 'What is Kosaraju\'s algorithm?', a: 'A method for finding strongly connected components: search the graph once following the arrows, then again with every arrow reversed, processing points in a particular order.' },
      { q: 'What is an edge artefact in data analysis?', a: 'A false pattern created by where the data was cut. In our Motherwell graph, 121 of 136 apparently trapped points were streets chopped by the rectangle.' },
      { q: 'What is the Motherwell project?', a: 'Turning 96.9 km of Motherwell streets into a directed graph with one-way rules and finding places a driver could enter but not legally leave.' },
      { q: 'Is vibe coding part of the lessons?', a: 'Yes, at every age; the learner designs the program and tests what the AI produces.' },
      { q: 'How far into the course do agents come?', a: 'After their Python can stand on its own, which is often S5 or later; Copilot Studio is private only.' },
      { q: 'Do you teach SQA Computing Science and Maths?', a: 'Yes, from National 5 to Advanced Higher, aiming at understanding without promising grades.' },
      { q: 'What are the fees?', a: 'No charge for the trial; a class place then costs USD 100 each month and private tuition USD 150 each month.' },
      { q: 'Are lessons paused in the holidays?', a: 'Yes; tell us the school holiday dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other Lanarkshire pages',
    html: 'Each has its own experiment: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-hamilton-scotland">Hamilton</a> (an agent covering every street), <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-airdrie">Airdrie</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-coatbridge">Coatbridge</a> and <a class="cg-inline-link" href="/coding-classes-in-north-lanarkshire">North Lanarkshire</a>. For anywhere else, go via <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Motherwell and North Lanarkshire',
  footerPlaces: [
    { href: '/coding-classes-in-north-lanarkshire', label: 'North Lanarkshire' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-mtw .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-mtw .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-mtw .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-mtw .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mtw .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-mtw .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-mtw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mtw .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-mtw .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-mtw .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'North Lanarkshire (S12000050). Scotland: Curriculum for Excellence, SQA National 5 to Advanced Higher. NRS mid-2020 settlement and locality estimates: Motherwell 32,840 (fourth after Cumbernauld 50,530, Coatbridge 43,950, Airdrie 36,390). postcodes.io (North Lanarkshire, ML1): Carfin, Flemington, Forgewood, Muirhouse, New Stevenston (suburban areas); Cleland, Newarthill (villages).',
    localProject: 'OSM API 0.6, analysed in bbox -4.012,55.772,-3.960,55.800: public streets 96.9 km, one-way 14.8 km. Directed graph 4,014 nodes (weak component); 115 SCCs; largest 3,878 nodes (96.61%), 98.8% of directed length. 136 nodes outside; 121 within 300 m of the box edge; 15 interior in 3 pockets (9 nodes / 168 m unclassified, out-not-in; two 3-node tertiary pieces of about 15 and 19 m). Lesson family: directed graphs, strongly connected components, boundary artefacts.',
    requiredMentions: [
      '32,840',
      '96.9 km',
      'Forgewood',
      'Muirhouse',
      'Flemington',
      'Carfin',
      'New Stevenston',
      'strongly connected',
      'Kosaraju'
    ],
    sources: [
      { claim: 'OpenStreetMap streets and one-way tags in Motherwell, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas and villages in North Lanarkshire.', url: 'https://api.postcodes.io/places?q=Forgewood' }
    ],
    rejectedClaims: [
      'Steelworks or football history: not read from a source; not claimed.',
      'That the three pockets are mapping errors or real restrictions: not decided; flagged for checking.',
      'Named streets in the pockets: not named, to avoid implying a fault on a specific road.',
      'Fourth locality in North Lanarkshire: per NRS mid-2020 figures quoted on the North Lanarkshire page.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
