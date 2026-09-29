'use strict';
// Crewe (cg- town page, UK cluster Phase 8, towns band A, row 378). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: should an AI agent learn by trial
// and error or plan with a map? (Q-learning vs planning).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map call, bbox -2.452,53.090,-2.432,53.100 (ODbL, "OpenStreetMap
// and contributors"). Every highway way except motorways, simplified to junctions: 940 junctions, 1,230 links in the
// largest connected piece. Landmarks: "Crewe Heritage Centre" (museum, way 815025050) and "Crewe Library" (library, node
// 5842521464), each snapped to its nearest junction (26.1 m and 32.7 m away); straight line between the two junctions 352 m.
// Our run (scratchpad crw/ql.py): Dijkstra shortest walking route 498.4 m over 14 junctions, 82 junctions settled.
// Q-learning (reward = minus metres walked, start values 0, epsilon 0.2, learning rate 0.5, no discount), 20 random seeds:
// greedy route first equals 498.4 m after a median 54 episodes (range 46 to 62), having walked a median 516.3 km of
// simulated streets in training (range 477.8 to 573.1). A pure random walk reaches the library after a median 50.8 km
// (200 walks).
// Lesson family: reinforcement learning (Q-learning), exploration cost, learn vs plan with a model, reward design.
// Screened: Q-learning, reinforcement 0 hits. Dijkstra appears elsewhere as the main lesson (Worcester, Diemen, Bergen op
// Zoom); here it is only the comparison. Middlesbrough and Newcastle-under-Lyme own place ambiguity.
// Place facts: Cheshire East (E06000049) TS001 398,772. ONS 2021 BUAs (published): Crewe 74,120; Nantwich 18,740;
// Alsager 15,505; Sandbach 11,290; Haslington 5,040.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CREWE', label: 'Crewe', blurb: 'Vibe coding and AI agents classes for Crewe, with a project where an AI agent learns to walk across the town centre by trial and error.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-crewe',
  code: 'cwe',
  accent: '#52437A',
  accentRationale: 'Crewe: a muted engine-livery violet (6.93:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Crewe',
    eyebrow: 'Crewe, Cheshire East, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Cheshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Cheshire', href: '/coding-classes-in-cheshire' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Crewe, England',
  title: 'Vibe Coding and AI Agents Classes in Crewe | Ages 6 to 67',
  description: 'Online vibe coding, AI agents, Python and coding classes for Crewe, Nantwich, Sandbach and Alsager learners aged 6 to 67, taught live online. First lesson free.',
  ogDescription: 'Live online vibe coding and AI agents classes for Crewe, and a Python project where an agent learns a walking route through the town centre.',
  twitterDescription: 'Crewe vibe coding, AI agents and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Crewe',
    description: 'Online vibe coding, AI agents, Python, coding and mathematics for children, teenagers and adults in Crewe and across Cheshire East, taught live with thinking skills first.'
  },

  h1: 'Vibe coding and AI agents classes in Crewe',
  capsuleQ: 'Where can Crewe learners find the best vibe coding and AI agents classes?',
  capsule: 'The ONS counted 74,120 people in the Crewe built-up area at the 2021 census, in a Cheshire East of 398,772 that also includes Nantwich, Alsager, Sandbach and Haslington. From six-year-olds to adults of 67, anyone here can join India-based tutors on a video call for vibe coding, AI agents, Python, coding and maths, taught privately or in classes of five to ten grouped by level. Reasoning is taught ahead of any tool, which means an agent\'s behaviour makes sense to the person running it. We waive the fee for lesson one and close it with a recommendation. The Crewe project sets an AI agent loose on the town centre\'s real street map and asks what learning by trial and error really costs. To keep going, budget USD 100 monthly for a class place or USD 150 monthly for private tuition.',
  lead: 'Some AI agents are not told how to do a job; they are rewarded for doing it well and left to work out the rest. This approach, reinforcement learning, is used to train game-playing programs, and a simple version called Q-learning fits in a page of Python. This project gives a Q-learning agent the real street map of central Crewe from OpenStreetMap and one goal: walk from the Crewe Heritage Centre to Crewe Library by the shortest route. The agent is never shown the answer. It wanders, remembers what each move cost, and slowly improves. Then the learner compares it with a planner that simply reads the map.',
  wa: 'Hello Modern Age Coders, we would like a free vibe coding or AI agents lesson for a learner in Crewe.',

  picks: {
    eyebrow: 'Crewe course picks',
    h2: 'Crewe choices for thinking, vibe coding and agents',
    intro: 'Age and interests point the way. A free live lesson starts every course, with no card needed to book.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think programme: mazes, routes, rules and learning from a wrong turn.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps created by describing them to AI and checking the result.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects built with AI, including the street-map agent from this page.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents that plan, act, use tools and learn, from the first line of Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Crewe and Cheshire East',
      h2: 'Crewe and other Cheshire East towns',
      intro: 'ONS 2021 census populations for Crewe and some of the district\'s other built-up areas.',
      body: [
        { kind: 'table', caption: 'Five Cheshire East settlements and their 2021 census counts (ONS)', head: ['Built-up area', 'People (2021)'], rows: [
          ['Crewe', '74,120'],
          ['Nantwich', '18,740'],
          ['Alsager', '15,505'],
          ['Sandbach', '11,290'],
          ['Haslington', '5,040']
        ] },
        { kind: 'p', text: 'The ONS publishes each built-up area as its own figure, and we show them that way, without a total; the Cheshire East count of 398,772 comes from a separate census table and includes Macclesfield, Congleton, Wilmslow and many smaller places not listed. Cheshire schools teach the English national curriculum, so send us your holiday dates and those weeks will stay lesson-free.' },
        { kind: 'callout', h3: 'County, region and how we teach', p: 'More choices are on <a class="cg-inline-link" href="/coding-classes-in-cheshire">coding classes in Cheshire</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">the North West England page</a>. Why every course puts judgement before prompting is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Crewe project',
      h2: 'An AI agent learns to cross Crewe town centre',
      intro: 'Turn OpenStreetMap into a graph, let a Q-learning agent explore it, and count what that exploration costs.',
      body: [
        { kind: 'p', text: 'The learner downloads a small rectangle of central Crewe from the OpenStreetMap API and keeps every road, path and footway. Junctions become points and the stretches between them become links with a length in metres: 940 junctions and 1,230 links. The two landmarks are attached to their nearest junctions, 26.1 m and 32.7 m away. In a straight line those junctions are 352 m apart, but nobody walks through buildings, and a planning algorithm called Dijkstra\'s, which reads the whole map, finds the shortest walking route: 498.4 m through 14 junctions, after examining 82 junctions.' },
        { kind: 'p', text: 'The Q-learning agent gets no map in advance. At each junction it can take any link, and every step costs it the metres walked. It keeps a table of how good each move from each junction has turned out to be, and updates it after every step. Most of the time it picks the move that looks cheapest so far; one time in five it tries a random move, to explore. Each attempt, called an episode, ends when it reaches the library. The experiment is repeated with 20 different random seeds.' },
        { kind: 'table', caption: 'Learning the route by trial and error against planning with a map, our Python run on OpenStreetMap data, 29 September 2026', head: ['Method', 'Result'], rows: [
          ['Dijkstra planning with the full map', '498.4 m route, 82 junctions examined'],
          ['Q-learning: attempts until its route is the shortest', 'Median 54 (range 46 to 62)'],
          ['Q-learning: distance walked in training to get there', 'Median 516.3 km (range 477.8 to 573.1)'],
          ['Random wandering with no learning, one arrival', 'Median 50.8 km']
        ] },
        { kind: 'p', text: 'The agent does learn. After a median of 54 attempts, its preferred route is exactly the 498.4 m one the planner found, and it got there without ever being shown a map. But look at the price. To learn a walk of about half a kilometre it covered a median of 516.3 km of simulated streets, roughly a thousand times the length of the route, most of it in the early attempts when it knew nothing. Even so, that is far better than not learning: a purely random walker needs a median of 50.8 km just to reach the library once, and never improves.' },
        { kind: 'p', text: 'The lesson for anyone building agents is clear. When a reliable map exists, planning with it is enormously cheaper than trial and error. Reinforcement learning earns its place where no such map is available, such as games with too many positions to list, or where mistakes are cheap because they happen in simulation. A robot or an AI agent acting in the real world usually cannot afford 500 km of wrong turns.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Solve a paper maze by trial, then again with the map, and count the wrong turns.' },
          { h3: 'Ages 11 to 15', p: 'Turn a small street map into a graph in Python and find the shortest route.' },
          { h3: 'Ages 15 and up', p: 'Code Q-learning, change the exploration rate and measure the cost of learning.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap data, our agent', p: 'Map data is from OpenStreetMap and its contributors, available under the Open Database Licence. The graph, the routes, the agent and every distance in the tables are our own calculations.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Learning agents',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Trial and error teaches agents, at a price.',
      body: [
        { kind: 'table', caption: 'From the Crewe agent to AI agents in general', head: ['In the street-map project', 'In real AI agents'], rows: [
          ['Reward: minus the metres walked', 'Agents chase whatever they are rewarded for'],
          ['One move in five was random', 'Exploring means sometimes doing the wrong thing'],
          ['516.3 km walked to learn 498.4 m', 'Learning by trial can be hugely expensive'],
          ['The map-reading planner won easily', 'Give agents good information and plan first'],
          ['Safe to fail in a simulation', 'Let agents practise where mistakes cost nothing']
        ] },
        { kind: 'p', text: 'Vibe coding, where a learner explains what they want and an AI writes the program, is a quick way to build a project like this one, and a quick way to get a subtly broken agent. If the reward is set up badly, the agent learns something nobody intended; if exploration never stops, it keeps taking random turns forever. Learners test each piece the AI writes against the planner\'s answer. The same habits carry over to AI agents built on language models, which also act, observe and adjust. Agent-building begins in Python for older teens and adults, with Copilot Studio kept for private tuition. Two related reads: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">how UK students learn to build AI agents with us</a>, and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no link with OpenStreetMap, the Office for National Statistics or any Crewe venue named here. The map and counts are theirs; the agent and any errors in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From mazes to learning agents',
    intro: 'A school year gives us a starting guess, and the free lesson confirms the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Mazes, routes and rules, with reasons for each step.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and agents', p: 'Graphs, search and simple learning agents alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Building AI agents', p: 'Planning, tools, learning and safe agent design in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and experience',
    h2: 'Can an AI agent learn without being told the answer?',
    intro: 'Yes, from rewards alone, but the practice can cost far more than the task.',
    p1: 'The Crewe agent found the shortest route without ever seeing a map, which is genuinely impressive. It also walked roughly a thousand times the length of that route while doing it.',
    p2: 'Learners who have watched that happen ask two questions of any learning system: what is it rewarded for, and what did its practice cost?',
    closer: 'Training an agent and adding up its practice bill teaches Crewe teenagers to see through AI hype, and that alone justifies learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Nantwich to Sandbach, all online',
    intro: 'Any home in Cheshire East with a computer and steady internet can join.',
    cells: [
      { h3: 'The student builds', p: 'Learners type, prompt and test the code themselves while the tutor watches their screen and asks the next question.' },
      { h3: 'The trial decides the start', p: 'A Year 4 or a Year 13 begins where the free lesson places them, with exam boards recorded.' },
      { h3: 'Free opening lesson', p: 'Lesson one costs nothing and ends with a recommended course.' },
      { h3: 'Classes at one level', p: 'Every group mixes five to ten learners from around the UK who are equally far along.' },
      { h3: 'Twice a week', p: 'Paused during the school holidays.' },
      { h3: 'Constant lesson times', p: 'Tutors adapt to UK clock changes, so the slot never moves.' }
    ],
    spec: { title: 'Why the lessons are online', p: 'Five learners at the same stage and free at the same hour rarely live close together, even in one district. Online, they can still share a class.' }
  },

  fees: {
    h2: 'Crewe fees',
    intro: 'Outside India, including in Crewe, a single international price list applies.',
    first: 'A whole lesson free to start, with a suggested course at the end.',
    group: 'About eight live group lessons each month.',
    private: 'About eight live one-to-one lessons each month.',
    closer: 'We quote in US dollars and not sterling. Nothing is billed until after the trial, when the course and weekly slot are agreed, and holidays away, missed sessions and format swaps are all covered on our pricing page.'
  },

  reviewsH2: 'Cheshire parents and learners, and others nationwide, on Google',

  book: {
    h2: 'Book a free Crewe lesson',
    intro: 'All we need is an age or a school year and a favourite subject or pastime. The trial can be a maze challenge, a Scratch game put together with an AI, a first taste of Python, or an agent that improves by collecting points.',
    success: 'Thank you. Your Crewe request is with us.'
  },

  faq: {
    h2: 'Crewe questions',
    intro: 'The street-map agent, vibe coding, AI agents and the everyday details.',
    items: [
      { q: 'What is the population of Crewe?', a: 'The ONS gives 74,120 for the Crewe built-up area at the 2021 census; Cheshire East as a whole had 398,772 residents.' },
      { q: 'Do you teach vibe coding in Crewe?', a: 'Yes, live online for all ages from 6 to 67, with learners planning first and testing whatever the AI writes.' },
      { q: 'Can learners in Crewe study AI agents?', a: 'Yes. Python basics come first, so this usually starts in the later teens; Copilot Studio agent work is kept to private lessons.' },
      { q: 'What is the street-map agent project?', a: 'Learners build a Q-learning agent that finds the shortest walk from the Crewe Heritage Centre to Crewe Library by trial and error, and compare it with a planner.' },
      { q: 'Is there in-person teaching?', a: 'No, all lessons are live online.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, in computer science and maths, working on understanding rather than promising grades.' },
      { q: 'What ages do you teach?', a: 'Anyone from 6 to 67.' },
      { q: 'How much do lessons cost?', a: 'Nothing for the first. After that, USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons stop in school holidays?', a: 'Yes, send us the dates and we will pause.' },
      { q: 'Can adults join too?', a: 'Yes. Adults learn in groups with other adults or privately.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Cheshire and North West pages',
    html: 'Elsewhere in the county, <a class="cg-inline-link" href="/best-coding-class-in-chester">Chester</a> has its own page and project, and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-newcastle-under-lyme">Newcastle-under-Lyme</a> in Staffordshire runs another agent project. <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a> is covered as well, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Crewe and Cheshire',
  footerPlaces: [
    { href: '/coding-classes-in-cheshire', label: 'Cheshire' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-cwe .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-cwe .cg-hero h1 { font-weight: 760; letter-spacing: -0.023em; line-height: 1.05; }
.cg-root.cg-cwe .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-cwe .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cwe .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.018em; }
.cg-root.cg-cwe .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-cwe .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cwe .cg-table th { letter-spacing: 0.055em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-cwe .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-cwe .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Cheshire East (E06000049), Census 2021 TS001 usual residents 398,772. ONS 2021 BUAs (published): Crewe 74,120; Nantwich 18,740; Alsager 15,505; Sandbach 11,290; Haslington 5,040. OpenStreetMap: Crewe Heritage Centre (museum, way 815025050), Crewe Library (library, node 5842521464).',
    localProject: 'OSM API bbox -2.452,53.090,-2.432,53.100: 940 junctions, 1,230 links. Snaps 26.1 m and 32.7 m; straight line 352 m. Dijkstra 498.4 m, 14 junctions, 82 settled. Q-learning (epsilon 0.2, alpha 0.5, reward minus metres), 20 seeds: optimal after median 54 episodes (46 to 62), median 516.3 km walked (477.8 to 573.1). Random walk median 50.8 km per arrival. Lesson family: Q-learning, exploration cost, learn vs plan.',
    requiredMentions: [
      '74,120',
      '398,772',
      'Nantwich',
      'Sandbach',
      'Alsager',
      'Haslington',
      'Crewe Heritage Centre',
      'Crewe Library',
      'Q-learning',
      'reinforcement learning'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations and TS001 usual residents via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'OpenStreetMap map data for central Crewe, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'OpenStreetMap API 0.6 map call used for the street graph.', url: 'https://api.openstreetmap.org/api/0.6/map?bbox=-2.452,53.090,-2.432,53.100' }
    ],
    rejectedClaims: [
      'Railway history of Crewe: not read from a source; not claimed.',
      'Opening times or services of the Heritage Centre or Library: not read; not claimed.',
      'That the route is a recommended or safe walking route: not assessed; it is only the shortest in the map graph.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
