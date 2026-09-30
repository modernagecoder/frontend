'use strict';
// Pinner, Harrow (cg- district page, UK cluster Phase 9, row 442). Keyword slug per the owner's 2026-09-30 decision
// (rotation with city suffix), with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: should
// an agent plan a big job in outline first and fill in detail later, and what does that shortcut cost? (hierarchical
// planning: coarse plan over main roads plus local refinement, against one flat search over every junction).
// Data (read 30 September 2026): OpenStreetMap via one Overpass API query over bbox -0.405,51.585,-0.355,51.610 (ODbL):
// walkable ways simplified to 2,021 junctions and 143.3 km; ways tagged primary, secondary or tertiary form the coarse
// layer: 25.5 km, 463 junctions, one connected piece.
// Our run (scratchpad g1/pnr.py): 500 random trips between side-street junctions (seed 442). Flat plan: Dijkstra over
// the whole network until the goal is settled. Hierarchical plan: Dijkstra from the start to the closest main-road
// junction by walking distance, the same from the goal, then Dijkstra on the main-road layer between the two.
// Junctions settled over all 500 trips: flat 495,141, hierarchical 127,714 (median per trip 952.5 against 255.5).
// Route length, hierarchical over shortest: median 1.084, 90th percentile 1.528, 41.6% within 5%, 10.4% over 1.5 times.
// Trips under 800 m (57): 31.6% over 1.5 times, worst 14.78. Trips of 2 km or more (263): median 1.073, 3.4% over 1.5
// times, worst 2.0.
// Lesson family: hierarchical planning (coarse-to-fine, subgoals). Screened 30 September 2026: "hierarchical planning",
// "subgoal" 0 hits (Cannock owns hierarchical clustering, a different idea); claimed as pnr. Harrow borough page = input
// validation; Stanmore = imitation learning; Southall = beam search.
// Place facts: Census 2021 usual residents by 2022 ward (Nomis NM_2021_1, TYPE153), per ward, not summed: Pinner 13,137;
// Pinner South 15,739; Hatch End 9,822. postcodes.io (Harrow): Hatch End, Pinner Green, Pinnerwood Park, Rayners Lane
// (HA5) and North Harrow (HA2) suburban areas; Pinner recorded as a settlement (HA5).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'PINNER', label: 'Pinner', blurb: 'Vibe coding and AI agents classes for Pinner in Harrow, with a project on planning in outline first: a quarter of the work, routes about 8% longer.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-pinner-london',
  code: 'pnr',
  accent: '#56650B',
  accentRationale: 'Pinner: a dark olive (6.2:1 contrast or better on paper), picked by hand to sit apart from neighbouring pages',
  pageType: 'city',
  place: {
    name: 'Pinner',
    eyebrow: 'Pinner, Harrow, London',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'Harrow', href: '/coding-classes-in-harrow-london' },
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Pinner, London',
  title: 'Vibe Coding and AI Agents Classes in Pinner | Ages 6 to 67',
  description: 'Vibe coding, AI agents and Python taught live online for Pinner, Hatch End, Pinner Green and Rayners Lane learners aged 6 to 67. The first lesson is free.',
  ogDescription: 'Vibe coding and AI agents classes for Pinner, with a planning project: outline first, detail later, and what that shortcut costs.',
  twitterDescription: 'Pinner vibe coding, AI agents and Python classes online, ages 6 to 67. Free first lesson.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Pinner',
    description: 'Online vibe coding, AI agents, Python and maths for children, teenagers and adults in Pinner and Harrow, taught live, with planning before prompting.'
  },

  h1: 'Vibe coding and AI agents classes in Pinner',
  capsuleQ: 'Where can Pinner learners find the best vibe coding and AI agents classes?',
  capsule: 'Three Harrow wards carry most of what people call Pinner, and the ONS counted each separately at Census 2021: 13,137 usual residents in Pinner ward, 15,739 in Pinner South and 9,822 in Hatch End. Pinner Green, Pinnerwood Park and Rayners Lane are recorded suburban areas there too. Lessons in vibe coding, AI agents, Python and maths run on live video with tutors based in India, for anyone aged six to 67, one-to-one or with five to ten classmates at a matching level. Every project begins with a plan, and the Pinner project asks how detailed that plan needs to be. An agent that sketches a route along main roads first and fills in side streets afterwards did about a quarter of the searching and walked a typical 8% further. Your first lesson is free, with a course recommendation at the end; from then on a group seat is USD 100 per month and one-to-one is USD 150 per month.',
  lead: 'Nobody plans a long journey one paving stone at a time. You decide on the big roads first and sort out the last few turnings when you get there. AI planners do the same thing under the name hierarchical planning, and coding agents do it when they write an outline before any code. It saves a great deal of effort, but it is a shortcut, and shortcuts have a price. Using OpenStreetMap\'s walking network for Pinner, this project counts both: how much searching the outline-first planner avoids, and how much longer its routes turn out to be.',
  wa: 'Hello Modern Age Coders, may we arrange a free vibe coding or AI agents lesson for someone in Pinner?',

  picks: {
    eyebrow: 'Pinner course picks',
    h2: 'Pinner courses in planning, vibe coding and agents',
    intro: 'One course for each age band. The opening live lesson of any of them is free, and we take no card to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: splitting a big problem into parts before touching the detail.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games outlined on paper, then built step by step with an AI helper.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web apps with AI help, plus the two-level route planner for Pinner.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Agents that plan, split work into subgoals and check each part, written in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Pinner and Harrow',
      h2: 'Pinner, Pinner South, Hatch End and Rayners Lane',
      intro: 'Ward counts from Census 2021 for the west of Harrow, and the places on record.',
      body: [
        { kind: 'table', caption: 'Census 2021 usual residents for three 2022 wards of Harrow, ONS via Nomis', head: ['Ward', 'Residents (2021)'], rows: [
          ['Pinner South', '15,739'],
          ['Pinner', '13,137'],
          ['Hatch End', '9,822']
        ] },
        { kind: 'p', text: 'Each row is one ward, and we have not added them up, because no published figure matches "Pinner" as residents use the name. Postcodes.io lists Hatch End, Pinner Green, Pinnerwood Park and Rayners Lane as suburban areas in HA5 and North Harrow as one in HA2, all within the borough of Harrow, with Pinner itself held as a settlement. Schools here teach the English national curriculum, so we talk in school years, keep GCSE and A level on the map, and pause over any holiday dates you give us.' },
        { kind: 'callout', h3: 'Borough, city and method', p: 'For the whole borough see <a class="cg-inline-link" href="/coding-classes-in-harrow-london">coding classes in Harrow</a>; for the capital, <a class="cg-inline-link" href="/best-coding-class-in-london">London</a>. Our case for planning before prompting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Pinner project',
      h2: 'Hierarchical planning: main roads first, side streets later',
      intro: 'Two planners, 500 walks, and a count of both effort and distance.',
      body: [
        { kind: 'p', text: 'OpenStreetMap gives Pinner a walking network of 2,021 junctions and 143.3 km. Of that, 25.5 km is tagged as a primary, secondary or tertiary road, touching 463 junctions; this is the outline layer. We drew 500 random walks between side-street junctions and planned each one twice. The flat planner runs Dijkstra\'s algorithm across everything until it reaches the goal. The two-level planner finds the closest main-road junction to each end, plans between those two on the outline layer alone, and joins the three pieces together.' },
        { kind: 'table', caption: 'Flat against two-level route planning in Pinner, our Python run on OpenStreetMap data', head: ['Measure', 'Flat', 'Two-level'], rows: [
          ['Junctions examined, all 500 walks', '495,141', '127,714'],
          ['Junctions examined, typical walk', 'about 950', 'about 255'],
          ['Route length, typical walk', 'shortest', '1.08 times shortest'],
          ['Walks more than 1.5 times the shortest', 'none', '10.4%'],
          ['Same, for walks under 800 m', 'none', '31.6%'],
          ['Same, for walks of 2 km or more', 'none', '3.4%']
        ] },
        { kind: 'p', text: 'The two-level planner looked at roughly a quarter as many junctions, and its typical route was about 8% longer than the true shortest; 41.6% of its routes were within 5%. The cost is not spread evenly. On long walks the detour to a main road barely matters, and only 3.4% of walks of 2 km or more came out over one and a half times the shortest. On short walks the outline is a liability: two addresses a few side streets apart get sent out to a main road and back, and the worst of our 57 short walks was nearly 15 times longer than it needed to be. The lesson learners take away is a rule about scale: use the outline for big jobs, and notice when a job is small enough to solve directly.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Plan a walk across a paper map using only the thick roads, then try a short hop and see the plan go wrong.' },
          { h3: 'Ages 11 to 15', p: 'Build a small street graph in Python and mark which streets belong to the outline.' },
          { h3: 'Ages 15 and up', p: 'Write both planners, count junctions examined, and find the distance at which the outline starts to pay.' }
        ] },
        { kind: 'callout', h3: 'Whose data, whose sums', p: 'Street and path geometry, and the road class tags, come from OpenStreetMap contributors under the Open Database Licence through the Overpass API. The planners, the 500 walks and the comparisons are ours.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Planning and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'An outline is what makes a large task possible, and also where it can go astray.',
      body: [
        { kind: 'table', caption: 'From the Pinner planner to AI agents', head: ['In the planning project', 'When an agent plans'], rows: [
          ['Outline first cut the search to a quarter', 'Subgoals keep a large task manageable'],
          ['Routes ran about 8% longer', 'A fixed outline rules out some better answers'],
          ['Short walks suffered most', 'Small tasks do not need a grand plan'],
          ['Each piece was solved on its own', 'Each step can be checked on its own'],
          ['The main roads were chosen by someone else', 'A plan is only as good as its outline']
        ] },
        { kind: 'p', text: 'Vibe coding means describing a program to an AI in ordinary language and steering what it writes. Asked for a whole app in one prompt, an AI tends to lose track; asked for an outline, then one part at a time, it does far better, and the learner can test every part. That is hierarchical planning done by a person. AI agents do it for themselves, breaking a goal into subgoals and working through them, which is why a poor outline can send a capable agent the long way round. Pinner learners write the outline before the prompt and ask whether the job even needs one. Building agents waits until Python is comfortable, generally from about sixteen upwards, and Copilot Studio agent lessons are one-to-one only. Read on at <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for students in the UK</a> or <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'This page is independent of OpenStreetMap, the ONS, Nomis and postcodes.io. We drew on what they publish openly; the planners and any error in the counts belong to Modern Age Coders.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Route through the courses',
    h2: 'From splitting problems to planning agents',
    intro: 'School year is a starting guess; the free lesson settles the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Big problems cut into parts, solved in a sensible order.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Outline a game, then build it piece by piece with an AI.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and planning', p: 'Graphs, Dijkstra and layered plans, alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Agents with subgoals', p: 'Planning, decomposition and checking in Python agents.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and planning',
    h2: 'What is hierarchical planning, and when does it go wrong?',
    intro: 'Hierarchical planning solves a problem in outline first and fills in the detail afterwards; it goes wrong when the outline forces a detour, which happens most on small problems that never needed an outline.',
    p1: 'Across 500 walks in Pinner, planning along main roads first examined 127,714 junctions where a flat search examined 495,141, with routes typically 8% longer; but 31.6% of walks under 800 m came out more than one and a half times the shortest.',
    p2: 'A learner who has counted both sides asks of any plan, their own or an AI\'s: is this outline helping, or is it just in the way?',
    closer: 'Pinner teenagers who can write an outline, and also say when to skip it, get much more out of an AI coding tool than those who only type prompts.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'Hatch End to Rayners Lane, by video',
    intro: 'A laptop or desktop with a webcam and an ordinary home connection is enough.',
    cells: [
      { h3: 'Plan, then type', p: 'Learners write a short outline first and then the code themselves, sharing their screen so the tutor can question each step.' },
      { h3: 'Level found in the trial', p: 'We see what the learner can already do and note any exam board.' },
      { h3: 'Nothing to pay at first', p: 'The trial lesson is complete and free, and ends with a named course.' },
      { h3: 'Small, matched classes', p: 'Five to ten people at one stage, joining from all over Britain.' },
      { h3: 'Twice weekly', p: 'Paused in the school holidays when you ask.' },
      { h3: 'Fixed UK time', p: 'Clock changes are absorbed at the tutors\' end.' }
    ],
    spec: { title: 'Why not a local room', p: 'A class only works when everyone in it is at the same stage, and one suburb seldom has enough learners at each stage. The whole country does.' }
  },

  fees: {
    h2: 'Fees for Pinner',
    intro: 'Pinner sits on our international rate card, the same one used for every learner outside India.',
    first: 'A whole lesson at no cost, then a recommendation.',
    group: 'Around eight live classes each month with five to ten learners.',
    private: 'Around eight live lessons each month with a tutor to yourself.',
    closer: 'We price in US dollars and do not quote sterling. No invoice goes out before the trial has agreed a course and a slot; the pricing page covers holiday breaks, lessons missed and moving between formats.'
  },

  reviewsH2: 'What Harrow parents and UK learners tell Google',

  book: {
    h2: 'Book a free Pinner lesson',
    intro: 'Send an age or school year and one thing the learner likes. The first session could be a thick-roads map puzzle, a Scratch game outlined and built with an AI, some beginning Python, or a two-level planner on real streets.',
    success: 'Thanks. We have your Pinner request.'
  },

  faq: {
    h2: 'Pinner questions',
    intro: 'Planning, subgoals, vibe coding, agents and how lessons run.',
    items: [
      { q: 'How many people live in Pinner?', a: 'There is no single official figure. Census 2021 counted 13,137 usual residents in Pinner ward and 15,739 in Pinner South, published as separate wards of Harrow.' },
      { q: 'Can I take vibe coding and AI agents classes online from Pinner?', a: 'Yes. Everything is taught on live video, for ages 6 to 67, to Pinner, Hatch End, Rayners Lane and the rest of Harrow.' },
      { q: 'What is a subgoal?', a: 'A smaller target on the way to a bigger one. Reaching the main road is a subgoal of walking across Pinner; writing the login screen is a subgoal of building an app.' },
      { q: 'What is Dijkstra\'s algorithm?', a: 'A method for finding the shortest route through a network by always extending the closest unfinished point. It is exact, and its work grows with the size of the area searched.' },
      { q: 'What happens in the Pinner project?', a: 'Learners plan 500 walks twice, once over every street and once along main roads first, and compare the searching done with the distance walked.' },
      { q: 'How is vibe coding taught?', a: 'Outline first, then one part at a time with the AI, testing as you go. Children, teenagers and adults all do it.' },
      { q: 'When can a learner start on AI agents?', a: 'Once Python feels comfortable, usually from about sixteen; Copilot Studio agents are taught one-to-one.' },
      { q: 'Does this help with GCSE or A level?', a: 'It supports computer science and maths at both levels. We teach for understanding and do not promise grades.' },
      { q: 'What is the price?', a: 'The first lesson is free. After that, USD 100 each month for a group place, USD 150 each month for one-to-one.' },
      { q: 'Are school holidays respected?', a: 'Yes, give us the dates and lessons pause.' }
    ]
  },

  next: {
    eyebrow: 'Keep exploring',
    h2: 'Other Harrow and west London pages',
    html: 'Different places, different experiments: <a class="cg-inline-link" href="/coding-classes-in-harrow-london">Harrow</a> (validating inputs), <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-stanmore-london">Stanmore</a> (copying an expert), <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-southall-london">Southall</a> (beam search) and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-wembley-london">Wembley</a> (trade-offs). Everything else is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Ask on WhatsApp'
  },

  footerHeading: 'Pinner and Harrow',
  footerPlaces: [
    { href: '/coding-classes-in-harrow-london', label: 'Harrow' },
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-pnr .cg-hero-grid { align-items: start; gap: clamp(1.3rem, 3.9vw, 3.1rem); }
.cg-root.cg-pnr .cg-hero h1 { font-weight: 720; letter-spacing: -0.021em; line-height: 1.07; }
.cg-root.cg-pnr .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-pnr .cg-eyebrow { letter-spacing: 0.12em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-pnr .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.015em; }
.cg-root.cg-pnr .cg-table caption { font-style: italic; text-align: left; font-size: 0.92rem; }
.cg-root.cg-pnr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pnr .cg-table th { letter-spacing: 0.03em; font-weight: 700; font-size: 0.8rem; }
.cg-root.cg-pnr .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-pnr .cg-callout { border-left-width: 5px; border-radius: 3px 16px 16px 3px; }
`,

  dossier: {
    curriculumAuthority: 'Harrow (E09000015), London. England: national curriculum, GCSE and A level. Census 2021 usual residents by 2022 ward (Nomis NM_2021_1, TYPE153): Pinner 13,137; Pinner South 15,739; Hatch End 9,822. postcodes.io (Harrow): Hatch End, Pinner Green, Pinnerwood Park, Rayners Lane (HA5), North Harrow (HA2) suburban areas; Pinner settlement (HA5).',
    localProject: 'OSM via Overpass, bbox -0.405,51.585,-0.355,51.610: 2,021 junctions, 143.3 km; primary/secondary/tertiary layer 25.5 km, 463 junctions. 500 trips between side-street junctions. Junctions settled: flat Dijkstra 495,141, two-level 127,714 (median 952.5 vs 255.5). Length ratio median 1.084, p90 1.528, 41.6% within 5%, 10.4% over 1.5x; under 800 m (57 trips) 31.6% over 1.5x, worst 14.78; 2 km or more (263) median 1.073, 3.4% over 1.5x. Lesson family: hierarchical planning, subgoals.',
    requiredMentions: [
      '13,137',
      '15,739',
      '9,822',
      '495,141',
      '127,714',
      'Hatch End',
      'Pinner Green',
      'Pinnerwood Park',
      'Rayners Lane',
      'North Harrow',
      'hierarchical planning'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by 2022 ward, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'OpenStreetMap streets, paths and highway tags in Pinner via the Overpass API, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io places: suburban areas and settlements in Harrow.', url: 'https://api.postcodes.io/places?q=Hatch%20End' }
    ],
    rejectedClaims: [
      'A single population for Pinner: no published figure for exactly that area; wards given separately.',
      'That main roads are the fastest or safest way to walk: not measured; they are only the outline layer.',
      'Pinner Fair, the High Street or local history: not read from a source; not claimed.',
      'How any named AI agent product plans internally: described in general terms only.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
