'use strict';
// Shrewsbury (cg- town page, UK cluster Phase 8, towns band A, row 385). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: which links hold a network together,
// and is a real bridge the same as a "bridge" in graph theory? (union-find, cut edges, redundancy).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map call, bbox -2.766,52.700,-2.742,52.716 (ODbL). Every highway
// way except motorways and proposed roads, kept at full detail: 6,308 points, 6,971 links, 11 separate pieces before any
// closure (fragments cut by the rectangle edge; largest 6,206 points). River Severn centre line (waterway=river) from the
// same download. Bridge ways whose line crosses the river line: 10. Nine join the piece holding the town-centre point to
// the other side: Welsh Bridge (primary), English Bridge (tertiary), Kingsland Bridge (unclassified), Greyfriars Bridge,
// Frankwell Suspension Bridge, Porthill Footbridge, Castle Walk Footbridge (footways), and two unnamed footway ways about
// 12 m apart. One unnamed service way crosses the line but only touches tiny fragments.
// Our run (scratchpad shr/net.py): union-find. Close all 10: the piece with the town-centre point (postcodes.io Shrewsbury
// coordinate) has 3,582 points; the other side 2,619. Close any one alone: the town-centre piece stays joined to the
// rest (6,206 points, or 6,205 when Welsh Bridge closes, which strands one point). Tarjan cut edges on the whole network:
// 1,621 of 6,971 links; smaller side 1 point for 564, 2 to 9 for 877, 10 to 49 for 151, 50 or more for 29; the most any
// one link cuts off is 104 points. None of the river bridges is a cut edge.
// Lesson family: connected components with union-find, cut edges (graph bridges) vs physical bridges, redundancy and
// minimum cut. Screened: articulation, cut edge, union-find, connected component, resilience 0 hits. Crewe owns Q-learning;
// Worcester owns A*; Kettering owns minimax on OSM.
// Place facts: ONS 2021 BUAs (published): Shrewsbury 76,015; Bayston Hill 5,220. postcodes.io (Shropshire), suburban
// areas: Frankwell, Kingsland, Coleham, Monkmoor, Harlescott, Meole Brace, Castlefields, Copthorne, Ditherington.
// The Shropshire county page owns the Darwin anchor; not reused.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'SHREWSBURY', label: 'Shrewsbury', blurb: 'Coding and AI classes for Shrewsbury, with a graph project on the town\'s real street network: which links hold it together, and what the River Severn bridges really do.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-shrewsbury',
  code: 'swy',
  accent: '#334C22',
  accentRationale: 'Shrewsbury: a deep riverbank green (7.7:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Shrewsbury',
    eyebrow: 'Shrewsbury, Shropshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Shropshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'Shropshire', href: '/coding-classes-in-shropshire' },
    { label: 'Telford', href: '/ai-and-programming-classes-in-telford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Shrewsbury, England',
  title: 'Coding and AI Classes in Shrewsbury | Python, Vibe Coding, 6-67',
  description: 'Online coding, AI, Python and vibe coding classes for Shrewsbury, Frankwell, Monkmoor and Meole Brace learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Shrewsbury, and a Python graph project on which street links and River Severn bridges hold the town together.',
  twitterDescription: 'Shrewsbury coding, AI, Python and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Shrewsbury',
    description: 'Online coding, AI, Python, vibe coding and mathematics for children, teenagers and adults in Shrewsbury and across Shropshire, taught live with thinking skills first.'
  },

  h1: 'Coding and AI classes in Shrewsbury',
  capsuleQ: 'Where can Shrewsbury learners find the best coding and AI classes?',
  capsule: 'The ONS gives the Shrewsbury built-up area 76,015 people at the 2021 census, and Bayston Hill 5,220; Frankwell, Kingsland, Coleham, Monkmoor, Harlescott and Meole Brace are among the neighbourhoods recorded in the town. Our India-based tutors teach coding, AI, Python, vibe coding and maths to Shrewsbury learners between 6 and 67 over a video link, either as private lessons or in classes of five to ten grouped by ability. We put reasoning ahead of tools, so learners understand what an AI is doing rather than simply trusting it. A free first lesson ends with our course recommendation. The Shrewsbury project turns the town\'s real streets into a graph, the structure behind sat navs, social networks and many AI systems, and asks which links really hold it together. To carry on, group tuition runs at USD 100 each month and individual tuition at USD 150 each month.',
  lead: 'Look at a map of central Shrewsbury and the River Severn is hard to miss, with a string of bridges carrying roads and footpaths across it. A computer scientist sees something else: a graph, points joined by links, and a question that matters for sat navs, power grids and the internet alike. Which links, if they failed, would cut the network in two? This project downloads the street network from OpenStreetMap, uses a fast technique called union-find to count the separate pieces, and discovers that the word "bridge" means something quite different to a graph algorithm than it does to a person standing on the English Bridge.',
  wa: 'Hello Modern Age Coders, may we book a free coding or AI lesson for a learner in Shrewsbury?',

  picks: {
    eyebrow: 'Shrewsbury course picks',
    h2: 'Courses in thinking, vibe coding and AI for Shrewsbury',
    intro: 'Go by age and interest. Every course begins with a live lesson that is free and booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: maps, networks, puzzles and "what if this link broke?" questions.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps described to an AI and tested by the learner.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Python, data and graphs on the way to AI, including this street-network project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Graphs, retrieval, language models and AI agents explained from first principles.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Shrewsbury',
      h2: 'Shrewsbury and its neighbourhoods',
      intro: 'Published ONS census counts and the neighbourhoods recorded in the town.',
      body: [
        { kind: 'table', caption: 'Shrewsbury and Bayston Hill, 2021 census counts published by the ONS', head: ['Built-up area', 'People (2021)'], rows: [
          ['Shrewsbury', '76,015'],
          ['Bayston Hill', '5,220']
        ] },
        { kind: 'p', text: 'These two ONS figures are shown as published, not added together. Frankwell, Kingsland, Coleham, Monkmoor, Harlescott, Meole Brace, Castlefields, Copthorne and Ditherington are all recorded as suburban areas in Shropshire. Local schools work to England\'s national curriculum; send the holiday dates and no lessons will clash.' },
        { kind: 'callout', h3: 'The county, the region and why thinking comes first', p: 'County-wide options are on <a class="cg-inline-link" href="/coding-classes-in-shropshire">coding classes in Shropshire</a>, and the wider region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">the West Midlands region page</a>. Our reasons for reasoning before prompting are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Shrewsbury project',
      h2: 'Which links hold Shrewsbury together? A graph project on real streets',
      intro: 'Count the separate pieces with union-find, close the river bridges, then find the links a graph algorithm calls bridges.',
      body: [
        { kind: 'p', text: 'An OpenStreetMap API download covering central Shrewsbury provides the raw material, with every road, path and footway kept at full detail: 6,308 points joined by 6,971 links. The River Severn\'s centre line comes in the same download. A little geometry finds the bridge links whose line crosses the river: ten of them. Nine connect the part of the network holding the town centre to the other side: Welsh Bridge, English Bridge, Kingsland Bridge, Greyfriars Bridge, Frankwell Suspension Bridge, Porthill Footbridge, Castle Walk Footbridge and two unnamed footway links a few metres apart. The tenth, an unnamed service link, crosses the river line but only touches a few stray points.' },
        { kind: 'p', text: 'To count how many separate pieces a network has, the program uses union-find, also called a disjoint-set structure. Every point starts in its own group, and each link merges the two groups it joins; with a trick called path compression, asking "which group is this point in?" stays fast even for thousands of points. Before anything is closed, the download already holds 11 pieces, because the edge of the rectangle chops off a few fragments, and the main piece has 6,206 points.' },
        { kind: 'table', caption: 'Closing crossings on the mapped Shrewsbury network, computed in Python from OpenStreetMap data on 29 September 2026', head: ['Closure test', 'Outcome'], rows: [
          ['Nothing closed', 'Main piece of 6,206 points'],
          ['Any single river crossing closed', 'Town centre still joined to the rest'],
          ['All ten crossings closed', 'Town-centre piece of 3,582 points, other side 2,619'],
          ['Graph-theory bridges in the whole network', '1,621 of 6,971 links'],
          ['Largest piece any one link can cut off', '104 points']
        ] },
        { kind: 'p', text: 'Closing any single river crossing leaves the town centre connected, because the others take over. Only when all ten are closed does the network split, into a town-centre piece of 3,582 points and another of 2,619. That is redundancy, and it is exactly what engineers want from roads, power lines and computer networks alike.' },
        { kind: 'p', text: 'Then comes the twist. In graph theory a "bridge", or cut edge, is any single link whose removal splits the network, found here with Tarjan\'s algorithm in one pass. There are 1,621 of them, nearly a quarter of all links, yet not one is a river bridge. Most lead into dead ends or short spurs: 564 cut off a single point, 877 cut off between two and nine, and the most any one link can isolate is 104 points. The river bridges, the famous ones, are precisely the links the network can survive without.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw a small town as dots and lines, then rub out one line at a time and see what gets cut off.' },
          { h3: 'Ages 11 to 15', p: 'Load a street network in Python and count its separate pieces with union-find.' },
          { h3: 'Ages 15 and up', p: 'Code Tarjan\'s algorithm, find every cut edge and test which closures split the town.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap data, our graph', p: 'Street and river data is from OpenStreetMap and its contributors under the Open Database Licence. The graph, the closures, the union-find counts and the cut-edge analysis are our own work, and they describe the mapped network inside one rectangle, not official road plans.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Graphs and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Points and links turn up everywhere AI is used, from maps to knowledge bases.',
      body: [
        { kind: 'table', caption: 'From Shrewsbury\'s streets to AI systems', head: ['In the street-network project', 'In AI tools and agents'], rows: [
          ['Union-find counted pieces quickly', 'The right data structure makes big data manageable'],
          ['No single river crossing was critical', 'Build systems with backups for every key step'],
          ['1,621 graph bridges, none of them river bridges', 'A word can mean different things to people and programs'],
          ['The rectangle edge created fake fragments', 'How data is cut out shapes the answer'],
          ['Closures were tested one by one and together', 'Test failures in combination, not just alone']
        ] },
        { kind: 'p', text: 'Knowledge graphs, route planners and many AI agent workflows are built on graphs, so understanding one properly pays off widely. Vibe coding lets a learner describe a program and have an AI draft it, and this project shows why the checking half of that job matters: an AI asked to "find the bridges" might return the river crossings, the graph cut edges, or a muddle of both, and only a learner who knows the difference will notice. AI agents that plan routes or workflows also need to know which steps have backups and which do not. Agents come later, for older teens and adults with solid Python, and Copilot Studio agents are only taught one-to-one. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the agents pathway we run for UK students</a>, plus the article <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is independent of OpenStreetMap, the ONS and postcodes.io, and this project is not transport advice. Their data made it possible; the graph work, and any mistakes in it, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From dots and lines to network algorithms',
    intro: 'A year group points us roughly in the right direction; the trial lesson pins the level down.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Maps, networks, puzzles and what-if questions.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps made with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and graphs', p: 'Data structures, graph algorithms and testing beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Graphs, data and agents', p: 'Algorithms, knowledge graphs, language models and agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and networks',
    h2: 'What is a graph in computer science, and why does AI use them?',
    intro: 'A graph is a set of points joined by links, and it can describe roads, friendships, web pages or the steps of a plan.',
    p1: 'In Shrewsbury the graph had 6,308 points and 6,971 links, and two classic algorithms answered questions no one could answer by eye. Search engines, route planners and knowledge graphs used alongside AI models all rest on the same idea.',
    p2: 'Learners who have built one from real data see the structure behind the tools, and ask better questions of them.',
    closer: 'Modelling a town as points and links, then testing it, gives Shrewsbury teenagers a head start with AI; that is reason enough to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Frankwell to Monkmoor, online',
    intro: 'If your broadband can carry a video call and you have a laptop or desktop, you are set.',
    cells: [
      { h3: 'Student at the keyboard', p: 'Learners do all the typing and running themselves; the tutor watches through screen share and nudges with questions.' },
      { h3: 'The trial sets the pace', p: 'School year is a starting hint; the free lesson picks the first topic and notes any exam board.' },
      { h3: 'Start with a free lesson', p: 'Session one is on the house, and we finish it by naming a course that fits.' },
      { h3: 'Classes by level', p: 'Every class gathers five to ten British learners who are working at one level.' },
      { h3: 'Two lessons a week', p: 'No lessons during school holidays.' },
      { h3: 'Fixed hours', p: 'Our tutors adjust to the UK clock changes, so your time slot stays put.' }
    ],
    spec: { title: 'Why lessons are online', p: 'Five learners at one stage who are all free at the same time are rarely close neighbours. Online, they can learn together anyway.' }
  },

  fees: {
    h2: 'Shrewsbury fees',
    intro: 'Shrewsbury learners pay our international rate, the same in every country other than India.',
    first: 'A full first lesson free, finishing with a course suggestion.',
    group: 'About eight live small-group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Fees are set in US dollars, not pounds. No invoice appears until the trial has produced an agreed course and weekly time; holidays, missed lessons and group-to-private switches are all set out on the pricing page.'
  },

  reviewsH2: 'Shropshire and wider UK families, on Google',

  book: {
    h2: 'Book a free Shrewsbury lesson',
    intro: 'Send the learner\'s age or year group and one or two interests. The trial could be a map-and-network puzzle, a Scratch game built with AI help, a first Python program, or a tiny graph of their own street.',
    success: 'Thank you. Your Shrewsbury request is with us.'
  },

  faq: {
    h2: 'Shrewsbury questions',
    intro: 'The street-network project, graphs, vibe coding, agents and practical details.',
    items: [
      { q: 'How many people live in Shrewsbury?', a: 'At the 2021 census the Shrewsbury built-up area had 76,015 residents, according to the ONS.' },
      { q: 'Can Shrewsbury learners join your coding and AI lessons?', a: 'Yes, through live online lessons for learners aged 6 to 67 in Shrewsbury and across Shropshire.' },
      { q: 'What is union-find?', a: 'A data structure that keeps track of which items belong to the same group, merging groups quickly as links are added; it is a standard way to count connected pieces of a network.' },
      { q: 'What is the Shrewsbury project?', a: 'Learners turn the town centre\'s street network into a graph, test what happens when River Severn crossings close, and find the links that graph theory calls bridges.' },
      { q: 'Is vibe coding part of the courses?', a: 'Yes, for children, teenagers and adults, with the learner planning and testing everything the AI produces.' },
      { q: 'Is AI agent building available?', a: 'Yes, once the learner writes Python with confidence, generally in the late teens or later; Copilot Studio agent work runs in private sessions only.' },
      { q: 'Are classes held in person?', a: 'No, every lesson is live online.' },
      { q: 'Can you help during GCSE or A level study?', a: 'Computer science and maths are covered at both levels; the goal is real understanding, and nobody is promised a grade.' },
      { q: 'What are the fees?', a: 'We do not charge for lesson one. After it, USD 100 monthly covers a class place and USD 150 monthly covers private tuition.' },
      { q: 'Are there lessons in school holidays?', a: 'No, lessons pause. Let us know the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Shropshire and West Midlands pages',
    html: 'Within Shropshire, <a class="cg-inline-link" href="/ai-and-programming-classes-in-telford">Telford</a> runs its own project; across the region, try <a class="cg-inline-link" href="/ai-and-programming-classes-in-redditch">Redditch</a>, <a class="cg-inline-link" href="/best-coding-class-in-worcester">Worcester</a> or <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every other area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Shrewsbury and Shropshire',
  footerPlaces: [
    { href: '/coding-classes-in-shropshire', label: 'Shropshire' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-swy .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-swy .cg-hero h1 { font-weight: 760; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-swy .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-swy .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-swy .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.02em; }
.cg-root.cg-swy .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-swy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-swy .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-swy .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-swy .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'ONS 2021 BUAs (published): Shrewsbury 76,015; Bayston Hill 5,220. postcodes.io (Shropshire) suburban areas: Frankwell, Kingsland, Coleham, Monkmoor, Harlescott, Meole Brace, Castlefields, Copthorne, Ditherington. OSM bridge names: Welsh Bridge, English Bridge, Kingsland Bridge, Greyfriars Bridge, Frankwell Suspension Bridge, Porthill Footbridge, Castle Walk Footbridge.',
    localProject: 'OSM bbox -2.766,52.700,-2.742,52.716: 6,308 points, 6,971 links, 11 pieces (largest 6,206). 10 bridge ways cross the River Severn line; 9 join the town-centre piece to the other side. Union-find: all closed -> 3,582 vs 2,619; any one closed -> still joined. Tarjan cut edges 1,621 of 6,971 (smaller side 1: 564; 2-9: 877; 10-49: 151; 50+: 29; max 104); no river bridge is a cut edge. Lesson family: union-find, cut edges vs physical bridges, redundancy.',
    requiredMentions: [
      '76,015',
      'Bayston Hill',
      'Frankwell',
      'Monkmoor',
      'Harlescott',
      'Meole Brace',
      'Welsh Bridge',
      'English Bridge',
      'union-find',
      '1,621'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'OpenStreetMap map data for central Shrewsbury, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'OpenStreetMap API 0.6 map call used for the street and river data.', url: 'https://api.openstreetmap.org/api/0.6/map?bbox=-2.766,52.700,-2.742,52.716' },
      { claim: 'postcodes.io places: suburban areas in Shropshire around Shrewsbury.', url: 'https://api.postcodes.io/places?q=Frankwell' }
    ],
    rejectedClaims: [
      'River loop or town-plan history: not read from a source; not claimed.',
      'Darwin: the Shropshire county page owns that anchor; not reused.',
      'Bridge ages, traffic or condition: not read; not claimed.',
      'That the mapped network is complete or official: stated as OpenStreetMap data inside one rectangle only.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
