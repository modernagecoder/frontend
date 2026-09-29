'use strict';
// St Andrews (cg- town page, UK cluster Phase 8, towns band A, row 422). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: how should an AI agent explore when it has no map
// ahead of it? (uninformed search: breadth-first against depth-first, with Dijkstra as the reference; how much each
// explores and how good a route it returns).
// Data (read 29 September 2026): OpenStreetMap API 0.6 over bbox -2.835,56.325,-2.770,56.350 (6 tiles, ODbL): walkable ways,
// simplified to 3,086 junctions and 3,890 segments, 172.4 km; start = the node OpenStreetMap uses to label the town
// (place=town "St Andrews", id 21511530), snapped to the nearest junction.
// Our run (scratchpad sta/srch.py): 60 random target junctions. Shortest walking route median 1,270 m (25 junctions away).
// Junctions explored before reaching the target (median): Dijkstra by distance 1,300; breadth-first by number of junctions
// 1,387; depth-first (random neighbour order) 1,637. Route returned against the true shortest (median): breadth-first 1.27
// times (never exactly shortest in the 60 runs); depth-first 11.43 times, over 3 times the shortest for 91.7% of targets.
// Lesson family: uninformed graph search strategies (BFS, DFS) for an exploring agent, cost of exploration and route
// quality. Screened: "uninformed search", "iterative deepening" 0 hits; Hull owns flood fill with BFS on a grid, Worcester
// A* heuristics, Guildford implication search; here the comparison of strategies for an agent is the lesson.
// Place facts: NRS mid-2020 localities: St Andrews 18,410 (per the Fife page list). postcodes.io (Fife, KY16): Boarhills,
// Guardbridge, Strathkinness (villages), Kincaple (hamlet).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ST ANDREWS', label: 'St Andrews', blurb: 'Vibe coding and AI agents classes for St Andrews, with a project where agents explore the town\'s paths without a map and the learner compares how they search.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-st-andrews',
  code: 'sad',
  accent: '#8A223E',
  accentRationale: 'St Andrews: a deep crimson (7.11:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'St Andrews',
    eyebrow: 'St Andrews, Fife, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Fife' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Fife', href: '/coding-classes-in-fife' },
    { label: 'Glenrothes', href: '/best-coding-and-ai-classes-in-glenrothes' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'St Andrews, Scotland',
  title: 'Vibe Coding and AI Agents Classes in St Andrews | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents and Python lessons for St Andrews, Strathkinness, Guardbridge and Boarhills learners in Fife, aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for St Andrews, with a project comparing how breadth-first and depth-first agents explore the town\'s paths.',
  twitterDescription: 'St Andrews vibe coding, AI agents and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for St Andrews',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in St Andrews and north-east Fife, taught live with search strategies explained.'
  },

  h1: 'Vibe coding and AI agents classes in St Andrews',
  capsuleQ: 'Where can St Andrews learners find the best vibe coding and AI agents classes?',
  capsule: 'National Records of Scotland puts the St Andrews locality at 18,410 people for mid-2020. Strathkinness, Guardbridge and Boarhills are villages recorded in the KY16 district, with Kincaple listed as a hamlet. Tutors based in India teach vibe coding, AI agents, Python, coding and maths live on camera to anyone six to 67, one-to-one or with five to ten peers of similar ability. We explain how things work before handing over tools, so learners understand what an agent is doing when it searches. The trial lesson is free and closes with our suggested course. In the St Andrews project, agents with no map explore 172.4 km of the town\'s paths in different orders, and the learner measures how much each has to look at and how good a route it brings back. Continuing lessons are priced at USD 100 a month per group place and USD 150 a month for a private tutor.',
  lead: 'An AI agent that has to find something, a file in a folder tree, an answer in a set of web pages, a place in a town, often cannot see the whole picture at once. It must explore, one step at a time, and the order it explores in matters. Breadth-first search looks at everything one step away, then two steps, then three. Depth-first search follows one path as far as it goes before backing up. Neither uses any sense of direction, which is why they are called uninformed. This project lets both loose on the walking network of St Andrews from OpenStreetMap, with Dijkstra\'s algorithm as the yardstick, and sends them to 60 random destinations.',
  wa: 'Hello Modern Age Coders, could we book a free vibe coding or AI agents lesson for a learner in St Andrews?',

  picks: {
    eyebrow: 'St Andrews course picks',
    h2: 'St Andrews courses in reasoning, vibe coding and agents',
    intro: 'Four routes in, set by age. Every one opens with a live lesson that costs nothing, booked without card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: mazes, search orders and knowing when you have looked everywhere.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games dreamed up by the learner, built with an AI and tested thoroughly.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the exploring agents on St Andrews paths.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How agents search, plan and use tools, built in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'St Andrews and north-east Fife',
      h2: 'St Andrews, Strathkinness, Guardbridge and Boarhills',
      intro: 'The NRS estimate for St Andrews, and places recorded in KY16.',
      body: [
        { kind: 'table', caption: 'St Andrews in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['St Andrews locality, mid-2020', '18,410']
        ] },
        { kind: 'p', text: 'Postcodes.io lists Boarhills, Guardbridge and Strathkinness as villages and Kincaple as a hamlet in the KY16 postcode district of Fife. Schools in the area teach the Curriculum for Excellence; lessons follow the Scottish year structure, and we support SQA Computing Science and Maths from National 5 up to Advanced Higher. Holiday weeks are skipped once you send us the dates.' },
        { kind: 'callout', h3: 'Fife pages and SQA support', p: 'See <a class="cg-inline-link" href="/coding-classes-in-fife">coding classes in Fife</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-glenrothes">Glenrothes</a> and <a class="cg-inline-link" href="/advanced-higher-computing-science-project-help">Advanced Higher Computing Science project help</a>. Why understanding comes before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The St Andrews project',
      h2: 'Breadth-first against depth-first: agents exploring St Andrews without a map',
      intro: 'One start, 60 destinations, three ways to explore, and a count of every junction looked at.',
      body: [
        { kind: 'p', text: 'The learner downloads the walkable paths and streets of St Andrews from OpenStreetMap and simplifies them to 3,086 junctions joined by 3,890 segments, 172.4 km in all. Every search starts from the point OpenStreetMap uses to label the town. For each of 60 random destinations the program runs three searches: breadth-first, which counts steps between junctions; depth-first, which dives down one path at a time in a random order; and Dijkstra\'s algorithm, which always expands the nearest point by actual distance and so finds the true shortest route. The median destination is 1,270 m away, 25 junctions from the start.' },
        { kind: 'table', caption: 'Exploring St Andrews paths to 60 random destinations, medians, our Python run on OpenStreetMap data', head: ['Strategy', 'Junctions explored before finding the target', 'Route returned against the true shortest'], rows: [
          ['Dijkstra (reference)', '1,300', 'Always the shortest'],
          ['Breadth-first search', '1,387', '1.27 times as long'],
          ['Depth-first search', '1,637', '11.43 times as long']
        ] },
        { kind: 'p', text: 'All three look at a large share of the town before finding a destination only 25 junctions away, because none of them knows which way the target lies. Breadth-first finds routes with the fewest junctions, but fewest junctions is not the same as fewest metres, so its routes ran about 27% long and it found the true shortest in none of the 60 runs. Depth-first is the one to watch: it explored the most, and the route it brought back was typically eleven times the shortest, over three times too long for 91.7% of destinations, because it follows whatever path it happens to be on. An agent that explores depth-first and reports the first route it finds can be wildly wasteful.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Explore a paper maze two ways, ring by ring and one corridor at a time, and count the squares visited.' },
          { h3: 'S1 to S3', p: 'Write breadth-first search in Python on a small piece of the St Andrews path network.' },
          { h3: 'S4 and up', p: 'Compare BFS, DFS and Dijkstra on 60 destinations and explain every difference in the table.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap paths, our agents', p: 'Paths and streets are from OpenStreetMap and its contributors under the Open Database Licence. The simplification, start point, destinations and all counts are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'How agents search',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Search order is a design choice, and it shapes both effort and answer.',
      body: [
        { kind: 'table', caption: 'From the St Andrews search race to real AI agents', head: ['In the path project', 'When an AI agent explores'], rows: [
          ['All three explored over 1,300 junctions', 'Without guidance, search is expensive'],
          ['BFS routes ran 27% long', 'Fewest steps is not always cheapest'],
          ['DFS routes ran eleven times long', 'The first answer found can be a poor one'],
          ['Dijkstra always found the shortest', 'The right measure of cost matters'],
          ['None knew where the target was', 'Hints and heuristics make agents efficient']
        ] },
        { kind: 'p', text: 'AI agents searching files, websites or options face the same choices: look broadly first or dig deep, and stop at the first answer or keep going for a better one. An agent that dives down the first promising link and reports what it finds there behaves a lot like depth-first search. In vibe coding the learner describes a program and the AI writes it; our St Andrews learners also decide how their agents should search and when they may stop, then measure the result. Agent building waits until the learner can write Python without help, which for most is S5 or beyond, and Copilot Studio work happens only in private lessons. The steps are on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our AI agents course for UK learners</a>, and the approach on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, National Records of Scotland and postcodes.io supply the open data used here and are not linked to us; the agents, and any mistakes in them, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From paper mazes to searching agents',
    intro: 'Your year group gives us a first idea; the trial settles the level.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Mazes, orders of search and checking you missed nothing.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and search', p: 'Queues, stacks and graph search alongside SQA Computing Science.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Agents that search', p: 'Search strategies, tools and planning in Python agents.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and search',
    h2: 'What is the difference between breadth-first and depth-first search?',
    intro: 'Breadth-first search explores everything one step away, then two, then three, so it finds the route with the fewest steps; depth-first search follows one path as far as possible before backing up, so it can find a route quickly but often a very long one.',
    p1: 'Exploring St Andrews paths to 60 random destinations, breadth-first returned routes a median 1.27 times the shortest, while depth-first returned routes 11.43 times the shortest after exploring more of the town.',
    p2: 'After this race, learners greet any agent\'s answer with two questions: what order did it search in, and did it settle for the first hit?',
    closer: 'A St Andrews teenager who has coded both searches can tell a thorough agent from a hasty one, and that judgement is built by writing code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Strathkinness to Boarhills, online',
    intro: 'Laptop or desktop, a camera, and a connection strong enough for video: that is all.',
    cells: [
      { h3: 'Code by the learner', p: 'Students write and run everything; the tutor watches through screen share and asks them to predict each search.' },
      { h3: 'Trial finds the level', p: 'The free session shows where to begin; SQA exams are noted if one is ahead.' },
      { h3: 'Free first session', p: 'Lesson one is free of charge and ends with a course suggestion.' },
      { h3: 'Groups by stage', p: 'Five to ten learners from around Britain at one level per class.' },
      { h3: 'Two a week in term', p: 'Holidays off.' },
      { h3: 'Stable timetable', p: 'UK clock changes are absorbed by our tutors, not by your slot.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at the same level, free on one evening and living close together, are hard to find in a small town. Online, it stops mattering.' }
  },

  fees: {
    h2: 'St Andrews fees',
    intro: 'St Andrews learners pay our international rates, used in every country but India.',
    first: 'A free first lesson, then our advice.',
    group: 'Around eight live group lessons monthly.',
    private: 'Around eight live one-to-one lessons monthly.',
    closer: 'We invoice in US dollars, never sterling, and not until the trial has settled a course and a weekly time; holidays, absences and moving between group and private are set out on the pricing page.'
  },

  reviewsH2: 'Fife parents and learners further afield, reviewing us on Google',

  book: {
    h2: 'Book a free St Andrews lesson',
    intro: 'An age or year group and a favourite hobby are enough to plan from. Trials range from exploring a paper maze and an AI-assisted Scratch game to first Python or searching real paths.',
    success: 'Thank you. Your St Andrews request is with us.'
  },

  faq: {
    h2: 'St Andrews questions',
    intro: 'BFS, DFS, the St Andrews paths, vibe coding and how lessons run.',
    items: [
      { q: 'What is the population of St Andrews?', a: 'National Records of Scotland estimated 18,410 people in the St Andrews locality in mid-2020.' },
      { q: 'Are vibe coding and AI agents classes available online in St Andrews?', a: 'All lessons are live video calls, so Guardbridge, Strathkinness and the rest of north-east Fife are covered for ages 6 to 67.' },
      { q: 'What is uninformed search?', a: 'Search that has no sense of where the goal lies, such as breadth-first and depth-first search. Informed search adds a hint, like the straight-line distance to the goal.' },
      { q: 'Why did depth-first search return such long routes?', a: 'It follows whatever path it is on until it runs out, so the first route it reaches the target by is often a long detour. In our St Andrews test it was over three times the shortest for 91.7% of destinations.' },
      { q: 'What does the St Andrews project involve?', a: 'Letting breadth-first, depth-first and Dijkstra searches explore 172.4 km of mapped St Andrews paths to 60 random destinations and comparing effort and route length.' },
      { q: 'Where does vibe coding come in?', a: 'From the start, at any age: the learner explains the program, the AI drafts it, and the learner tests and fixes it.' },
      { q: 'When do learners start on AI agents?', a: 'Once they write Python unaided, commonly in the senior phase or as adults; Copilot Studio agents are one-to-one.' },
      { q: 'Do you support Advanced Higher Computing Science?', a: 'Yes, along with National 5 and Higher, in Computing Science and Maths, taught for understanding with no promised grades.' },
      { q: 'How much are lessons?', a: 'Trial lesson free; from then on, USD 100 monthly for class lessons or USD 150 monthly for solo ones.' },
      { q: 'Do lessons stop for holidays?', a: 'They do; school holidays are lesson-free once you tell us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Fife and Tayside pages',
    html: 'Each has its own experiment: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-glenrothes">Glenrothes</a> (where rain flows), <a class="cg-inline-link" href="/ai-and-programming-classes-in-kirkcaldy">Kirkcaldy</a>, <a class="cg-inline-link" href="/best-coding-class-in-dundee">Dundee</a> and <a class="cg-inline-link" href="/coding-classes-in-fife">Fife</a>. Everywhere else is reached from the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'St Andrews and Fife',
  footerPlaces: [
    { href: '/coding-classes-in-fife', label: 'Fife' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-sad .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-sad .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-sad .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-sad .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sad .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-sad .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-sad .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sad .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-sad .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-sad .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Fife (S12000047). Scotland: Curriculum for Excellence, SQA National 5 to Advanced Higher. NRS mid-2020 settlement and locality estimates: St Andrews 18,410 (Fife page list). postcodes.io (Fife, KY16): Boarhills, Guardbridge, Strathkinness (villages); Kincaple (hamlet).',
    localProject: 'OSM API 0.6 bbox -2.835,56.325,-2.770,56.350: walk network simplified to 3,086 junctions, 3,890 segments, 172.4 km; start = place=town node 21511530. 60 random targets; shortest median 1,270 m, 25 junctions. Explored (median): Dijkstra 1,300, BFS 1,387, DFS 1,637. Route vs shortest (median): BFS 1.27 (0/60 exact), DFS 11.43 (91.7% over 3x). Lesson family: uninformed search strategies for an exploring agent.',
    requiredMentions: [
      '18,410',
      '172.4 km',
      '3,086',
      'Strathkinness',
      'Guardbridge',
      'Boarhills',
      'Kincaple',
      'uninformed search',
      'depth-first search'
    ],
    sources: [
      { claim: 'OpenStreetMap paths and streets in St Andrews, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: villages and hamlets in Fife (KY16).', url: 'https://api.postcodes.io/places?q=Strathkinness' }
    ],
    rejectedClaims: [
      'University, golf or cathedral history: not read from a source; not claimed.',
      'That any real agent product uses these strategies: described as general behaviour only.',
      'Named destinations: the 60 targets are random junctions and are not named.',
      'Rank of St Andrews among Fife localities: not claimed beyond its NRS figure.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
