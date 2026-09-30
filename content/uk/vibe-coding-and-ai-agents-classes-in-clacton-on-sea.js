'use strict';
// Clacton-on-Sea (cg- town page, UK cluster Phase 10, towns band B, row 498). Keyword slug per the owner's rotation,
// with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can an agent steer by simple pulls
// and pushes alone, with no plan? (potential field navigation, and the local minimum that traps it).
// Data (read 30 September 2026): OpenStreetMap building outlines from one Overpass query for the box 51.782 to 51.800
// north, 1.140 to 1.172 east, in Clacton-on-Sea: 6,454 buildings. Drawn onto a grid of 4 m cells, 550 by 497; 20.9% of
// cells are covered by a building. Everything else (roads, gardens, beach, water) counts as open ground in this toy.
// Our run (scratchpad cos/pf.py): 300 random start and goal pairs at least 50 m apart (seed 2026). Agent: potential =
// distance to goal + repulsion within 12 m of a building; each step moves to the lowest of the 8 neighbouring cells and
// stops if none is lower. Reached the goal on 60 of 300 trips (20.0%). By straight-line distance: 50 to 250 m 4 of 10;
// 250 to 500 m 11 of 33; 500 m to 1 km 28 of 97; over 1 km 17 of 160. Stuck trips had moved a median 143 m (their
// median straight-line distance was 1,135 m). Attraction only, no repulsion: 68 of 300 (22.7%). Repulsion radius 24 m:
// 58 of 300 (19.3%). Successful trips were about as short as the grid's shortest path (median ratio 1.0). A shortest-path
// planner on the same grid reaches every goal: all starts and goals lie in one connected open region of 215,161 cells.
// Lesson family: potential field navigation agent (attraction/repulsion, local minima, reactive vs planning agents).
// Place facts: Tendring (E07000076) TS001 148,291. ONS 2021 BUAs (published): Clacton-on-Sea 53,200; Harwich 20,215;
// Brightlingsea 8,680; Walton-on-the-Naze 6,990; Kirby Cross 6,035. postcodes.io (Tendring): Holland-on-Sea, Great
// Clacton, Bocking's Elm, Rush Green (suburban areas); Jaywick, Little Clacton (villages); Frinton-on-Sea (town).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CLACTON-ON-SEA', label: 'Clacton-on-Sea', blurb: 'Vibe coding and AI agents classes for Clacton-on-Sea in Essex, with an agent project on steering by attraction and repulsion.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-clacton-on-sea',
  code: 'cos',
  accent: '#125E66',
  accentRationale: 'Clacton-on-Sea: a deep sea teal (7.5:1 contrast on white), chosen by hand as unused and unlike the other Phase 10 accents',
  pageType: 'city',
  place: {
    name: 'Clacton-on-Sea',
    eyebrow: 'Clacton-on-Sea, Tendring, Essex',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Essex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Essex', href: '/coding-classes-in-essex' },
    { label: 'Colchester', href: '/best-coding-class-in-colchester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Clacton-on-Sea, Essex',
  title: 'Vibe Coding and AI Agents Classes in Clacton-on-Sea | 6 to 67',
  description: 'Live online vibe coding, AI agents, Python and coding classes for ages 6 to 67 in Clacton-on-Sea, Jaywick, Holland-on-Sea and Great Clacton. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Clacton-on-Sea, with a project where a simple agent tries to cross a map of the town by pulls and pushes alone.',
  twitterDescription: 'Clacton-on-Sea, Essex: vibe coding, AI agents, Python and coding classes online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Clacton-on-Sea, Essex',
    description: 'Vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Clacton-on-Sea and Tendring, taught live online with clear thinking first.'
  },

  h1: 'Vibe coding and AI agents classes in Clacton-on-Sea',
  capsuleQ: 'What are the best vibe coding and AI agents classes for Clacton-on-Sea?',
  capsule: 'The Clacton-on-Sea built-up area held 53,200 residents at the 2021 census and Tendring district 148,291, both ONS figures. Holland-on-Sea, Great Clacton and Bocking\'s Elm are recorded as suburban areas, Jaywick as a village and Frinton-on-Sea as a town. From age six to 67, learners study vibe coding, AI agents, Python, coding and maths in live video lessons with our tutors in India, either individually or among five to ten classmates at the same level. We teach how to think before which tool to use, so learners can judge what an AI produces. The Clacton project builds a simple navigating agent that feels a pull towards its goal and a push away from buildings, sets it loose on a grid of the town, and counts how often it arrives. The first lesson is free and finishes with a suggested course. From then on it is USD 100 a month for a group place, USD 150 a month for one-to-one.',
  lead: 'Some agents plan; others only react. A potential field agent is the purest reactor. Treat the goal as the bottom of a valley, treat every obstacle as a small hill, and let the agent roll downhill one step at a time. It needs no map in its head and almost no computation, which made the idea popular in early robotics. It also has a famous weakness: a dip in the landscape that is not the goal, a local minimum, where every direction looks uphill and the agent simply stops. Using the building outlines that OpenStreetMap volunteers have drawn for Clacton-on-Sea, a learner can build this agent in Python and measure how serious the weakness is.',
  wa: 'Hello Modern Age Coders, could I book a free vibe coding or AI agents lesson for a learner in Clacton-on-Sea?',

  picks: {
    eyebrow: 'Clacton-on-Sea picks',
    h2: 'Vibe coding, agent and thinking courses for Clacton-on-Sea',
    intro: 'Four courses, ordered by age. The first live session of any of them is free, with no card needed to book.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think course: follow a simple rule, find where it gets stuck, and invent a fix.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Build a Scratch chase game with AI help and discover the corners where the chaser jams.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with an AI assistant, including the Clacton navigating agent.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Generative AI and agents that plan, use tools and know when they are stuck.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Tendring district',
      h2: 'Clacton-on-Sea, Harwich and the Tendring towns',
      intro: 'The district\'s built-up areas of 6,000 residents or more, and the places listed around Clacton.',
      body: [
        { kind: 'table', caption: 'Built-up areas of 6,000 or more residents within Tendring, ONS 2021 census figures', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Clacton-on-Sea', '53,200'],
          ['Harwich', '20,215'],
          ['Brightlingsea', '8,680'],
          ['Walton-on-the-Naze', '6,990'],
          ['Kirby Cross', '6,035']
        ] },
        { kind: 'p', text: 'Every row is the ONS\'s own number and none has been added to another; the district count of 148,291 is published separately. For Tendring, postcodes.io gives Holland-on-Sea, Great Clacton, Bocking\'s Elm and Rush Green as suburban areas, Jaywick and Little Clacton as villages, and Frinton-on-Sea as a town. Essex schools use the national curriculum for England, and we plan lessons around whatever term calendar you share.' },
        { kind: 'callout', h3: 'Essex, the East of England and our teaching', p: 'The county is covered on <a class="cg-inline-link" href="/coding-classes-in-essex">coding classes in Essex</a> and the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a>. Our case for reasoning before tools is made on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Clacton-on-Sea project',
      h2: 'A potential field agent on a grid of 6,454 Clacton buildings',
      intro: 'Pull towards the goal, push away from walls, step downhill, and see how far that gets.',
      body: [
        { kind: 'p', text: 'A single Overpass request fetches the outline of every building OpenStreetMap holds in a box over central Clacton-on-Sea: 6,454 of them. The learner draws the outlines onto a grid of 4-metre cells, 550 across and 497 down, and finds that 20.9% of the cells are covered by a building. In this toy world everything else counts as open ground, so the agent may cross roads, gardens and even water. Each cell gets a height: its straight-line distance to the goal, plus a steep extra hill within 12 metres of any building. The agent looks at its eight neighbouring cells, steps to the lowest, and repeats. If no neighbour is lower than where it stands, it has reached either the goal or a local minimum, and it stops.' },
        { kind: 'table', caption: '300 random trips across the Clacton grid, potential field agent, our Python run on OpenStreetMap data', head: ['Straight-line distance', 'Trips', 'Reached the goal', 'Share'], rows: [
          ['50 m to 250 m', '10', '4', '40.0%'],
          ['250 m to 500 m', '33', '11', '33.3%'],
          ['500 m to 1 km', '97', '28', '28.9%'],
          ['Over 1 km', '160', '17', '10.6%'],
          ['All trips', '300', '60', '20.0%']
        ] },
        { kind: 'p', text: 'The agent arrived on 60 of 300 trips. The rest ended in a local minimum, typically a building face or a courtyard-like pocket that lies directly between the agent and its goal: the pull says forward, the wall says no, and stepping sideways looks like climbing. Stuck agents had covered a median of only 143 metres, on trips whose median straight-line length was 1,135 metres. Longer trips failed more often simply because they pass more buildings. When the agent did get through, its path was about as short as the shortest possible route on the grid, so the method is efficient when it works.' },
        { kind: 'table', caption: 'Changing the repulsion, same 300 trips, our calculation', head: ['Agent setting', 'Goals reached of 300', 'Share'], rows: [
          ['Attraction only, no repulsion', '68', '22.7%'],
          ['Repulsion within 12 m of buildings', '60', '20.0%'],
          ['Repulsion within 24 m of buildings', '58', '19.3%']
        ] },
        { kind: 'p', text: 'Tuning did not rescue it. Removing the push or doubling its reach moved the success rate by only a few points, because the trap comes from the shape of the landscape, not from one badly chosen number. A planner rescues it. Dijkstra\'s shortest-path search on the same grid reaches the goal every time, since all the starts and goals lie in one connected open region of 215,161 cells. The planner pays for that certainty by examining a large part of the grid before it moves, while the reactive agent looks at eight cells per step. Real robots often combine the two: a planner sets waypoints and a reactive layer handles what is immediately in front.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Roll a marble across a tilted tray of obstacles and mark the pockets where it comes to rest.' },
          { h3: 'Ages 11 to 15', p: 'Code a downhill-stepping agent in Python on a small grid and draw the spots where it stalls.' },
          { h3: 'Ages 15 and up', p: 'Build the Clacton grid, run 300 trips, vary the repulsion and compare with a shortest-path planner.' }
        ] },
        { kind: 'callout', h3: 'Whose data, whose agent', p: 'Building outlines are © OpenStreetMap contributors and are used under the Open Database Licence. The grid, the agent and all counts are our own. The grid ignores fences, water and private land, so the results say something about the algorithm and nothing about walking around Clacton.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents that get stuck',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'An agent that only ever takes the step that looks good right now will sometimes stop short, and it will not know why.',
      body: [
        { kind: 'table', caption: 'From the Clacton grid to software agents', head: ['The navigating agent', 'An AI agent on a task'], rows: [
          ['Stepped downhill and halted at a wall', 'Repeats the same failing action or gives up early'],
          ['Could not tell a trap from the goal', 'Needs an explicit test for "am I actually done?"'],
          ['Tuning moved success by a few points', 'Prompt tweaks rarely fix a structural flaw'],
          ['The planner always arrived, at a cost', 'Planning ahead costs time but avoids dead ends'],
          ['Planner plus reactor works in practice', 'Good agents plan, act, check and replan']
        ] },
        { kind: 'p', text: 'Vibe coding is building by description: you say what you want, an AI writes it, and you judge the result. A learner who vibe codes this agent will get working code quickly, and a demo on an empty grid will look perfect. Clacton students run it on the real building grid, count arrivals, and ask the AI for a stuck detector and a fallback planner. That is the core skill for AI agents of every kind: decide in advance how the agent notices it has stopped making progress and what it does next. Agent courses with us follow solid independent Python, which most learners reach at 16 or older, and Copilot Studio agents are offered as one-to-one lessons only. There is more on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for students in the UK</a> and on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the Office for National Statistics and postcodes.io have no relationship with us. We relied on their open data and take responsibility for the simulation and its mistakes.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'From marble trays to planning agents',
    intro: 'Year bands are indicative. The free lesson is where we find the right step.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Rules, where they break, and how to tell you are stuck.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games built with an AI, then tested until they misbehave.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Vibe coding in Python', p: 'Agents, grids and search, in step with GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'AI agents', p: 'Python, then agents that plan, call tools and recover.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents',
    h2: 'What is a potential field in robot and agent navigation?',
    intro: 'A potential field is a way of steering an agent by giving the goal an attractive pull and obstacles a repulsive push, then moving in whichever direction lowers the combined value.',
    p1: 'On a grid of 6,454 Clacton-on-Sea buildings, a potential field agent reached its goal on only 60 of 300 random trips, because it kept stopping in local minima, while a shortest-path planner reached all 300.',
    p2: 'Learners who have watched it stall know to ask of any agent: how does it detect that it is stuck, and what is the fallback?',
    closer: 'Clacton teenagers who can code both the reactor and the planner understand agents from the inside, and that understanding comes from learning to program in 2026, not from prompting alone.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How we teach',
    h2: 'Online from Jaywick to Holland-on-Sea',
    intro: 'Bring a computer and an internet line that can carry a video call; nothing else is required.',
    cells: [
      { h3: 'Built by the learner', p: 'Students prompt, type and test on their own machine as the tutor watches the shared screen and questions each decision.' },
      { h3: 'Trial sets the level', p: 'What we see in the free lesson fixes the starting topic, and any exam board is noted.' },
      { h3: 'Opening lesson free', p: 'It costs nothing, needs no card and ends with a course we recommend.' },
      { h3: 'Five to ten, one level', p: 'Group classes bring together learners at the same stage from around the UK.' },
      { h3: 'Two classes a week', p: 'With gaps for school holidays when you send the dates.' },
      { h3: 'Time that stays put', p: 'The tutor absorbs the British Summer Time change, and your slot does not shift.' }
    ],
    spec: { title: 'Why video lessons', p: 'Classes grouped by level need learners from a wide area. Meeting online makes the area the whole country.' }
  },

  fees: {
    h2: 'Clacton-on-Sea fees',
    intro: 'Clacton-on-Sea families pay the international rate, which is the one for all learners not in India.',
    first: 'A complete lesson, live and free, ending with a recommended course.',
    group: 'Eight or so live lessons a month in a small class.',
    private: 'Eight or so live lessons a month, one learner and one tutor.',
    closer: 'All billing is in US dollars; we do not publish a pound equivalent. No invoice is sent before the trial has settled both the course and a weekly time. How holidays, missed classes and format changes work is on the pricing page.'
  },

  reviewsH2: 'Essex families and other UK learners reviewing us on Google',

  book: {
    h2: 'Book a free Clacton-on-Sea lesson',
    intro: 'We only need an age or school year and an interest to plan the trial. It may be a marble-and-obstacles puzzle, a Scratch game made with AI help, first Python, or a tiny agent crossing a grid.',
    success: 'Thank you. Your Clacton-on-Sea request is in.'
  },

  faq: {
    h2: 'Clacton-on-Sea questions',
    intro: 'Potential fields, the navigating agent, vibe coding, Python and lesson arrangements.',
    items: [
      { q: 'What is the population of Clacton-on-Sea?', a: 'The Clacton-on-Sea built-up area had 53,200 residents at the 2021 census, and Tendring district 148,291, according to the ONS.' },
      { q: 'Do you offer vibe coding and AI agents classes in Clacton-on-Sea?', a: 'Yes, online. Live video lessons reach Clacton-on-Sea, Jaywick, Holland-on-Sea, Great Clacton and Frinton-on-Sea, for ages 6 to 67.' },
      { q: 'What is vibe coding?', a: 'Writing software by describing what you want to an AI model, which generates the code, while you test, question and correct what it gives you.' },
      { q: 'What is a local minimum?', a: 'A point that is lower than everything immediately around it without being the lowest point overall. An agent that only moves downhill stops there.' },
      { q: 'What is the Clacton-on-Sea project?', a: 'Coding a potential field agent in Python, running it on a grid of the town\'s buildings, and comparing its 20.0% success rate with a planner that always arrives.' },
      { q: 'What is an AI agent?', a: 'A program that pursues a goal by choosing and carrying out actions, observing the results and deciding what to do next.' },
      { q: 'When can learners start building AI agents?', a: 'After they can write Python by themselves, which is mostly from 16 upwards. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Is GCSE or A level support available?', a: 'Yes, in computer science and maths, focused on understanding. We give no grade promises.' },
      { q: 'What do classes cost?', a: 'You pay nothing for the first lesson. Afterwards it is USD 100 a month for group classes or USD 150 a month for private ones.' },
      { q: 'Do lessons run through school holidays?', a: 'They pause when you ask; just send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Across Essex',
    h2: 'More Essex and East of England pages',
    html: 'Each with a different project: <a class="cg-inline-link" href="/best-coding-class-in-colchester">Colchester</a>, <a class="cg-inline-link" href="/best-coding-class-in-chelmsford">Chelmsford</a> and <a class="cg-inline-link" href="/best-coding-class-in-southend-on-sea">Southend-on-Sea</a>. All other areas are listed on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message the team on WhatsApp'
  },

  footerHeading: 'Clacton-on-Sea and Essex',
  footerPlaces: [
    { href: '/coding-classes-in-essex', label: 'Essex' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-cos .cg-hero-grid { align-items: start; gap: clamp(1.3rem, 3vw, 2.5rem); }
.cg-root.cg-cos .cg-hero h1 { font-weight: 730; letter-spacing: -0.023em; line-height: 1.06; }
.cg-root.cg-cos .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-cos .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cos .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.014em; }
.cg-root.cg-cos .cg-table caption { text-align: left; font-size: 0.9rem; font-style: italic; }
.cg-root.cg-cos .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cos .cg-table th { font-size: 0.82rem; font-weight: 700; letter-spacing: 0.02em; }
.cg-root.cg-cos .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-cos .cg-callout { border-left-width: 5px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'Tendring (E07000076), Census 2021 TS001 usual residents 148,291. ONS 2021 BUAs of 6,000+ within the district (published): Clacton-on-Sea 53,200; Harwich 20,215; Brightlingsea 8,680; Walton-on-the-Naze 6,990; Kirby Cross 6,035. postcodes.io (Tendring): Holland-on-Sea, Great Clacton, Bocking\'s Elm, Rush Green (suburban areas); Jaywick, Little Clacton (villages); Frinton-on-Sea (town).',
    localProject: 'OpenStreetMap buildings via one Overpass query, box 51.782-51.800 N, 1.140-1.172 E: 6,454 buildings on a 4 m grid of 550 by 497 cells, 20.9% built. 300 random trips of 50 m or more (seed 2026). Potential field agent (distance to goal + repulsion within 12 m, 8-neighbour descent): reached 60 of 300 (20.0%); 50-250 m 4 of 10; 250-500 m 11 of 33; 500 m-1 km 28 of 97; over 1 km 17 of 160. Stuck after median 143 m (median straight-line 1,135 m). Attraction only 68 (22.7%); 24 m repulsion 58 (19.3%). Shortest-path planner reaches all (one open region of 215,161 cells). Lesson family: potential field navigation, local minima, reactive vs planning agents.',
    requiredMentions: [
      '53,200',
      '148,291',
      '6,454',
      'Jaywick',
      'Holland-on-Sea',
      'Great Clacton',
      'Bocking\'s Elm',
      'Frinton-on-Sea',
      'potential field',
      'local minimum'
    ],
    sources: [
      { claim: 'OpenStreetMap building outlines (ODbL) fetched through the Overpass API for a box in Clacton-on-Sea.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas, villages and towns in Tendring.', url: 'https://api.postcodes.io/places?q=Jaywick' }
    ],
    rejectedClaims: [
      'Pier, beach, tourism or seafront facts: not read from a source; not claimed.',
      'That the grid shows walkable routes: not claimed; fences, water and private land are ignored.',
      'That potential fields are useless: not claimed; successful trips were about as short as the shortest path.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
