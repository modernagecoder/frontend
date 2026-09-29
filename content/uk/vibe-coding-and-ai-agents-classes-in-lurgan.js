'use strict';
// Lurgan (cg- town page, UK cluster Phase 8, towns band A, row 426). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: how should an AI agent act when its actions do not
// always go to plan? (Markov decision process, value iteration, a policy that allows for slips, against a plan that assumes
// every move works).
// Data (read 29 September 2026): OpenStreetMap API 0.6 over bbox -6.375,54.440,-6.300,54.480 in 6 tiles (ODbL). A 60 by 60
// grid of 20 m cells (1.2 km square) centred on the node OSM uses to label the town (place=town "Lurgan", id 5286382091).
// Cells whose centre falls inside a mapped building are blocked (503); cells crossed by a trunk, primary, secondary or
// tertiary road are main-road cells (346); 3,085 open cells connect to the goal.
// Our toy delivery robot (scratchpad lrg/mdp3.py): start near the north-west corner (cell 3,3), goal near the south-east
// (56,56); each move costs 1, entering a main-road cell costs 10 more; a chosen move goes as intended 80% of the time and
// slips to either side 10% each. Value iteration converged in 229 sweeps (change under 1e-6). With no slips the cheapest
// route costs 132. With slips, 4,000 simulated runs each: planner that assumes moves always work (replanning every step)
// mean cost 186.9, main-road cells entered 3.65, steps 150.5, 90th percentile cost 214; MDP policy mean cost 173.3 (model
// expectation 173.6), main-road cells 2.92, steps 144.2, 90th percentile 194. Off-road steps next to a main road (1,000
// runs, adj.py): naive 10.7%, policy 6.4%.
// Lesson family: Markov decision processes and value iteration (policies under uncertain actions). Screened: "Markov
// decision", "value iteration", "Bellman equation", "gridworld" 0 hits on any page (only course and resource files).
// Crewe owns Q-learning (learning from trial and error); Hamilton owns route inspection; this page plans with a known
// model of slips.
// Place facts: NISRA Census 2021 MS-A01: Lurgan DEA 38,198 (Lurgan is part of the settlement "Craigavon Urban Area
// including Aghacommon", 72,301, which NISRA does not split). Neighbourhood names: OpenStreetMap place=suburb nodes in the
// rectangle.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'LURGAN', label: 'Lurgan', blurb: 'Vibe coding and AI agents classes for Lurgan, with a project where a robot agent learns to plan for its own slips on a grid laid over the town centre.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-lurgan',
  code: 'lrg',
  accent: '#4C0B4C',
  accentRationale: 'Lurgan: a very deep plum (11.59:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Lurgan',
    eyebrow: 'Lurgan, County Armagh, Northern Ireland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Armagh City, Banbridge and Craigavon' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Portadown', href: '/best-coding-and-ai-classes-in-portadown' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Lurgan, Northern Ireland',
  title: 'Vibe Coding and AI Agents Classes in Lurgan | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents and Python lessons for Lurgan, Mourneview, Taghneven and Toberhewny learners in County Armagh, aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Lurgan, with a project where a robot agent on a grid over the town plans for slips instead of hoping they never happen.',
  twitterDescription: 'Lurgan vibe coding, AI agents and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Lurgan',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Lurgan and County Armagh, taught live with planning under uncertainty.'
  },

  h1: 'Vibe coding and AI agents classes in Lurgan',
  capsuleQ: 'Where can Lurgan learners find the best vibe coding and AI agents classes?',
  capsule: 'The Lurgan District Electoral Area had 38,198 usual residents in NISRA\'s Census 2021 tables; the town itself is counted inside the Craigavon Urban Area settlement, which NISRA does not divide. Mourneview, Taghneven, Toberhewny, Drumnamoe, Knocknashane and Ballyblagh are among the neighbourhood names OpenStreetMap places around the centre. Learners from P1 up to adults of 67 can take vibe coding, AI agents, Python, coding and maths with a tutor in India on live video, privately or in a group of five to ten who share a stage. We put reasoning ahead of tools, so a learner knows why an agent chose what it did. There is no charge for the first lesson, which ends with a suggested course. The Lurgan project lays a 1.2 km grid over the town centre and teaches a small robot agent to plan for the fact that its moves sometimes go wrong. Group lessons afterwards cost USD 100 a month, private lessons USD 150 a month.',
  lead: 'Most route planners assume that every step goes exactly as intended. Real agents, from delivery robots to software agents calling unreliable tools, cannot assume that. The standard way to plan when actions are uncertain is a Markov decision process: list the states, the actions, the chance of each outcome and the cost of each, then work out the cheapest action in every state, not just along one route. The method that does the working out, value iteration, repeats one simple update until the numbers stop changing. This project builds a small robot world on a 20 m grid over central Lurgan from OpenStreetMap, where buildings block the way and main roads are expensive to stray onto, and compares a naive planner with a proper policy.',
  wa: 'Hello Modern Age Coders, could we book a free vibe coding or AI agents lesson for a learner in Lurgan?',

  picks: {
    eyebrow: 'Lurgan course picks',
    h2: 'Where Lurgan learners begin',
    intro: 'Four routes in, one per age range; the first live lesson on each costs nothing and needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: board-game moves, chance and planning a safe way across.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games the learner designs, builds with an AI and tests to destruction.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the Lurgan robot grid.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents that plan, cope with failure and use tools, built in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Lurgan in the census',
      h2: 'Lurgan, Mourneview, Taghneven and Toberhewny',
      intro: 'NISRA\'s count for the Lurgan electoral area, and neighbourhood names on the map.',
      body: [
        { kind: 'table', caption: 'Lurgan in NISRA Census 2021 table MS-A01, usual residents', head: ['Area', 'Census geography', 'Usual residents'], rows: [
          ['Lurgan', 'District Electoral Area', '38,198']
        ] },
        { kind: 'p', text: 'NISRA counts Lurgan together with Portadown and Craigavon as one urban settlement, so no stand-alone Lurgan settlement figure exists; the electoral area also includes countryside. OpenStreetMap places Ballyblagh, Dougher, Drumnamoe, Knocknashane, Mourneview, Silverwood, Taghneven, Tannaghmore and Toberhewny as neighbourhood names in and around the town. Local schools follow the Northern Ireland Curriculum; we plan lessons by primary class and post-primary year and support CCEA GCSE and A level. Tell us when your holidays are and lessons will skip them.' },
        { kind: 'callout', h3: 'Other Northern Ireland pages and CCEA', p: 'Visit <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">coding and AI classes in Northern Ireland</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-portadown">Portadown</a> and <a class="cg-inline-link" href="/ccea-a-level-software-systems-development-help">CCEA A level Software Systems Development help</a>. Why we teach thinking before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Lurgan project',
      h2: 'Planning for slips: a Markov decision process on a grid over central Lurgan',
      intro: 'A robot, 3,600 squares of real town, moves that sometimes go astray, and two ways of deciding what to do.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data and lays a 60 by 60 grid of 20 m squares over central Lurgan, centred on the point the map uses to label the town. A square is blocked if its centre falls inside a mapped building (503 squares) and counts as a main-road square if a trunk, primary, secondary or tertiary road crosses it (346). A toy delivery robot must get from near one corner to near the opposite one. Every move costs 1, and landing on a main-road square costs 10 more, standing in for the risk of being there. The twist: a move goes the chosen way only 80% of the time; otherwise the robot slips sideways.' },
        { kind: 'p', text: 'The naive planner finds the cheapest route as if slips never happened, and after each slip simply replans from wherever it ended up. The Markov decision process instead uses value iteration to work out, for all 3,085 reachable squares, the expected cost to the goal and the action that minimises it, slips included. It needed 229 rounds of updates to settle.' },
        { kind: 'table', caption: 'Robot runs across central Lurgan with a 20% chance of slipping, 4,000 simulated journeys each, our Python run on OpenStreetMap data', head: ['Approach', 'Average cost', 'Main-road squares entered', 'Worst tenth of runs cost at least'], rows: [
          ['Cheapest route with no slips at all', '132', 'n/a', 'n/a'],
          ['Plan that ignores slips, replanning', '186.9', '3.65', '214'],
          ['MDP policy from value iteration', '173.3', '2.92', '194']
        ] },
        { kind: 'p', text: 'Slips make every journey dearer, but the policy that expects them does noticeably better: its average cost is 7% lower, it strays onto main roads 20% less often, and its bad days are less bad, with the worst tenth of runs costing 194 rather than 214. The difference shows in where it walks: of the naive planner\'s steps off the main roads, 10.7% were on a square right beside one, against 6.4% for the policy, which gives itself room to slip. The model\'s own prediction of its average cost, 173.6, matched the simulation closely, a useful check that the maths and the code agree.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Play a board game where a dice roll sometimes pushes your counter sideways, and find the safer path.' },
          { h3: 'Years 8 to 10', p: 'Build the Lurgan grid in Python from map data and mark buildings and main roads.' },
          { h3: 'Years 11 to 14', p: 'Code value iteration, simulate thousands of runs and compare the policy with a naive plan.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap data, our robot', p: 'Buildings and roads are from OpenStreetMap and its contributors under the Open Database Licence. The grid, the costs, the slip rate and every result are our own modelling choices for a teaching exercise, not advice about real streets.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents and uncertainty',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Hoping every step works is not a strategy.',
      body: [
        { kind: 'table', caption: 'From the Lurgan robot to real AI agents', head: ['In the grid project', 'When an AI agent acts in the world'], rows: [
          ['Moves went astray 20% of the time', 'Tools fail and actions misfire'],
          ['The naive planner averaged 186.9', 'Planning as if all goes well costs more'],
          ['The MDP policy averaged 173.3', 'Planning for failure pays off'],
          ['It kept away from main roads', 'Leave a margin near costly mistakes'],
          ['Model and simulation agreed', 'Check the maths against real runs']
        ] },
        { kind: 'p', text: 'Software agents face their own slips: a web page that fails to load, a tool that returns an error, an instruction misread. An agent designed around the happy path keeps getting into trouble; one that plans for likely failures keeps a margin. In vibe coding the learner explains a program while an AI writes it; our Lurgan learners also ask what happens when each step fails, and write that into the design. Agents that act on your behalf need that thinking most of all. Learners take on agent building once their Python stands up on its own, typically Year 12 onwards or as adults, and Copilot Studio agents are private lessons only. Read <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the UK student agents course</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, NISRA and Armagh City, Banbridge and Craigavon Borough Council have no part in this page; we used openly published data only, and the robot model with any errors in it is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From dice-roll board games to planning agents',
    intro: 'We take primary class or school year as a hint and let the free lesson decide.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Chance, safe paths and thinking a move ahead.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to Year 9', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 10 to 14', h3: 'Python and probability', p: 'Grids, expected values and simulation beside CCEA GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Agents under uncertainty', p: 'Decision-making, failure handling and tool use in Python agents.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and planning',
    h2: 'What is a Markov decision process, and why do AI agents need one?',
    intro: 'A Markov decision process describes a task as states, actions, the probability of each outcome and its cost, so an agent can compute the lowest-cost action for every state even when actions do not always work as intended.',
    p1: 'On a 20 m grid over central Lurgan with a 20% chance of slipping, a policy found by value iteration averaged a cost of 173.3 per journey and entered 2.92 main-road squares, against 186.9 and 3.65 for a planner that assumed every move would work.',
    p2: 'Learners who have built that robot ask of any AI agent: what does it do when a step fails, and did anyone plan for that?',
    closer: 'Planning for failure is what keeps Lurgan teenagers in charge of the agents they build, and learning to code is how that becomes a habit in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Mourneview to Toberhewny, over video',
    intro: 'Bring a laptop or desktop with a camera and an internet line good enough for a call.',
    cells: [
      { h3: 'Learner does the typing', p: 'Code, prompts and runs come from the student, while the tutor watches the shared screen and asks what could go wrong.' },
      { h3: 'Start set by the trial', p: 'The free session shows the right first topic; CCEA courses are noted.' },
      { h3: 'Trial without charge', p: 'Lesson one costs nothing and closes with our course pick.' },
      { h3: 'Stage-based groups', p: 'Five to ten learners from across the UK, all at one level.' },
      { h3: 'Twice weekly', p: 'No lessons during school holidays.' },
      { h3: 'Fixed hour', p: 'UK clock changes are our tutors\' job, not your timetable\'s.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at the same level, all free the same evening, seldom live near each other. Online, they can still learn together.' }
  },

  fees: {
    h2: 'Lurgan fees',
    intro: 'Lurgan learners are on our international price list, used in every country except India.',
    first: 'One whole lesson free, followed by advice.',
    group: 'Around eight live small-group lessons per month.',
    private: 'Around eight live one-to-one lessons per month.',
    closer: 'Lurgan accounts are billed in US dollars, never pounds, starting only once the free trial has pinned down a course and a lesson slot. The pricing page covers holidays, absences and moving between private and group tuition.'
  },

  reviewsH2: 'Parents and learners from across the UK on Google',

  book: {
    h2: 'Book a free Lurgan lesson',
    intro: 'Share an age or school year and something the learner likes doing. A trial might be a slippery-dice board game, a Scratch game designed with an AI, early Python, or a tiny robot planner on a real map.',
    success: 'Thank you. Your Lurgan request has arrived.'
  },

  faq: {
    h2: 'Lurgan questions',
    intro: 'Planning under uncertainty, the robot grid, vibe coding, Python and practical points.',
    items: [
      { q: 'How many people live in Lurgan?', a: 'NISRA\'s Census 2021 counts 38,198 usual residents in the Lurgan District Electoral Area. The town is part of the Craigavon Urban Area settlement, which NISRA does not split by town.' },
      { q: 'Are vibe coding and AI agents classes available online in Lurgan?', a: 'Yes, through live video lessons for ages 6 to 67 in Lurgan and across County Armagh.' },
      { q: 'What is value iteration?', a: 'A method for solving a Markov decision process: start with guesses of each state\'s cost to the goal and repeatedly update them using the cheapest action, until they stop changing. On our Lurgan grid it settled after 229 rounds.' },
      { q: 'What is the difference between a plan and a policy?', a: 'A plan is one fixed sequence of moves; a policy says what to do in every possible state. A policy copes when a slip puts the agent somewhere unexpected.' },
      { q: 'What does the Lurgan project involve?', a: 'Building a 20 m grid over central Lurgan from OpenStreetMap, solving it as a Markov decision process and comparing 4,000 simulated journeys against a planner that ignores slips.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, at every age; learners describe the program, then check and fix what the AI writes.' },
      { q: 'When can learners build AI agents?', a: 'Usually from Year 12, or in adulthood, once Python holds up without help; Copilot Studio is taught privately.' },
      { q: 'Do you support CCEA exams?', a: 'Yes, in computing and maths at GCSE and A level, taught for understanding and never with a promised grade.' },
      { q: 'What do lessons cost?', a: 'Nothing for the taster. Continuing costs USD 100 for each month of group classes or USD 150 for each month of private teaching.' },
      { q: 'Are lessons paused for holidays?', a: 'Yes, during school holidays; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other Northern Ireland pages',
    html: 'Each has its own project: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-portadown">Portadown</a> (what makes a junction central), <a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh</a>, <a class="cg-inline-link" href="/best-coding-class-in-lisburn">Lisburn</a> and <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a>. Everywhere else is on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland page</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Lurgan and County Armagh',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/best-coding-and-ai-classes-in-portadown', label: 'Portadown' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-lrg .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-lrg .cg-hero h1 { font-weight: 760; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-lrg .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-lrg .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lrg .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-lrg .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-lrg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lrg .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-lrg .cg-ladder-col { border-left: 4px double var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-lrg .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Armagh City, Banbridge and Craigavon (N09000002). Northern Ireland Curriculum; CCEA GCSE and A level. NISRA Census 2021 MS-A01: Lurgan DEA 38,198 (no separate Lurgan settlement; part of Craigavon Urban Area including Aghacommon). Neighbourhoods (OpenStreetMap place=suburb): Ballyblagh, Dougher, Drumnamoe, Knocknashane, Mourneview, Silverwood, Taghneven, Tannaghmore, Toberhewny.',
    localProject: 'OSM API 0.6: 60 x 60 grid of 20 m cells centred on place=town node 5286382091; 503 blocked (building), 346 main-road cells, 3,085 open cells connected to goal. Start (3,3), goal (56,56); step 1, main-road +10; 80% intended, 10% each side. Value iteration 229 sweeps. No-slip optimum 132. 4,000 runs: slip-ignoring replanner mean 186.9, road cells 3.65, steps 150.5, p90 214; MDP policy 173.3 (model 173.6), 2.92, 144.2, p90 194. Lesson family: Markov decision processes, value iteration.',
    requiredMentions: [
      '38,198',
      'Mourneview',
      'Taghneven',
      'Toberhewny',
      'Drumnamoe',
      'Knocknashane',
      'Ballyblagh',
      'Markov decision process',
      'value iteration'
    ],
    sources: [
      { claim: 'NISRA, Census 2021 main statistics table MS-A01, usual residents by district electoral area and settlement.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'OpenStreetMap buildings, roads and place names around Lurgan, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'CCEA qualifications used in Northern Ireland schools (GCSE and A level).', url: 'https://ccea.org.uk/' }
    ],
    rejectedClaims: [
      'A Lurgan settlement population: NISRA publishes none; only the DEA figure is used.',
      'Park, linen or lough history: not read from a source; not claimed.',
      'Advice about real streets or road safety: the robot, costs and slip rate are a teaching model only.',
      'Politics or identity topics: excluded.',
      'Named schools, term dates or transfer test advice: none.',
      'Sterling prices: none.'
    ]
  }
};
