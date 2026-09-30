'use strict';
// Southall, Ealing (cg- district page, UK cluster Phase 9, row 438). Keyword slug per the owner's 2026-09-30 decision
// (rotation with city suffix), with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when an
// agent cannot keep every possibility in mind, how many should it keep? (beam search: keep the k most promising partial
// plans at each step; beam width against success, route quality and work; why language models use it).
// Data (read 30 September 2026): OpenStreetMap via one Overpass API query over bbox -0.405,51.495,-0.350,51.525 (ODbL; the
// main OSM API returned 509 bandwidth-limit errors that day and was not retried aggressively). Walkable ways simplified to
// 3,058 junctions, 218.7 km; 832 dead ends.
// Our run (scratchpad g1/swl.py): 150 random start and goal junctions at least 800 m apart (median shortest walk 2,840 m).
// Beam search scores each partial route by distance walked plus straight-line distance left, keeps the k best after
// every step, never revisits a junction within a route. Routes found / median length against the shortest / 90th
// percentile / exactly shortest / median partial routes expanded: k 1: 3 of 150, 1.015, 1.051, 0, 9; k 2: 30, 1.059, 1.401,
// 2, 49.5; k 5: 75, 1.050, 1.255, 9, 211; k 20: 129, 1.035, 1.224, 16, 1,180.5; k 100: 149, 1.021, 1.152, 14, 4,836. A*
// with the same straight-line guide finds the shortest route every time after a median 438 junctions.
// Lesson family: beam search (beam width, incompleteness, memory versus quality). Screened 30 September 2026: "beam
// search" appears only in course syllabus files; claimed as swl. Ealing borough page = rating curves; not reused.
// Place facts: Census 2021 usual residents by 2022 ward (Nomis NM_2021_1, TYPE153), per ward, not summed: Southall
// Broadway 10,825; Southall Green 15,694; Southall West 6,581; Dormers Wells 15,609. postcodes.io (Ealing): Norwood Green
// and Dormer's Wells suburban areas; Southall recorded as a settlement.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'SOUTHALL', label: 'Southall', blurb: 'Vibe coding and AI agents classes for Southall in Ealing, with a project on how an agent decides how many plans to keep in mind at once.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-southall-london',
  code: 'swl',
  accent: '#8A5A0B',
  accentRationale: 'Southall: a deep amber (5.92:1 contrast), chosen by hand to stand apart from recent purples and blues',
  pageType: 'city',
  place: {
    name: 'Southall',
    eyebrow: 'Southall, Ealing, London',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'Ealing', href: '/coding-classes-in-ealing-london' },
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Southall, London',
  title: 'Vibe Coding and AI Agents Classes in Southall | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents and Python lessons for Southall, Norwood Green and Dormers Wells learners in west London, aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Southall, with a beam search project on how many plans an agent should keep in mind at once.',
  twitterDescription: 'Southall vibe coding, AI agents and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Southall',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Southall and Ealing, taught live with search and planning explained.'
  },

  h1: 'Vibe coding and AI agents classes in Southall',
  capsuleQ: 'Where can Southall learners find the best vibe coding and AI agents classes?',
  capsule: 'Southall has no single official headcount, so here are its 2022 wards as Census 2021 recorded them: Southall Green 15,694 usual residents, Southall Broadway 10,825 and Southall West 6,581, each an ONS figure of its own. Norwood Green and Dormer\'s Wells are recorded suburban areas of Ealing alongside them. Vibe coding, AI agents, Python, coding and maths are taught on live video by India-based tutors to anyone aged six to 67, solo or in a class of five to ten at one level. We explain how an agent decides before handing over tools, so learners can judge what it chose to ignore. Lesson one is free, ending with our suggested course. The Southall project gives a route-finding agent a limited memory, lets it keep only its most promising plans at each step, and measures what that costs on 150 real journeys. Past the trial, a shared class is USD 100 per month and solo tuition USD 150 per month.',
  lead: 'An agent working through a problem step by step usually has far too many possible paths to keep track of. Beam search is the classic compromise: at every step keep only the k most promising partial plans, called the beam, and drop the rest. Keep one and you have a greedy agent that commits to its first hunch; keep more and you pay for the memory but lose fewer good options. Large language models use the same trick when they choose words, because the number of possible sentences explodes. This project makes the trade-off visible on something concrete: walking routes across Southall\'s streets and paths from OpenStreetMap.',
  wa: 'Hello Modern Age Coders, could we book a free vibe coding or AI agents lesson for a learner in Southall?',

  picks: {
    eyebrow: 'Southall course picks',
    h2: 'Southall courses in thinking, vibe coding and agents',
    intro: 'Choose the course that fits the learner\'s age; on all four, the first live lesson is free and booking asks for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: keeping a few options open, and noticing when you gave up on the good one too early.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games described to an AI, then built and tested by the young maker.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the beam search agent on Southall paths.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How language models choose words, planning agents and search, built in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Southall and Ealing',
      h2: 'Southall Broadway, Southall Green, Norwood Green and Dormers Wells',
      intro: 'Census 2021 ward counts, and places recorded in Ealing.',
      body: [
        { kind: 'table', caption: 'Usual residents by 2022 ward, Census 2021, ONS via Nomis', head: ['Ward', 'Residents (2021)'], rows: [
          ['Southall Green', '15,694'],
          ['Dormers Wells', '15,609'],
          ['Southall Broadway', '10,825'],
          ['Southall West', '6,581']
        ] },
        { kind: 'p', text: 'These are four separate ward figures and are not totalled; no single official count exists for Southall. Postcodes.io records Norwood Green and Dormer\'s Wells as suburban areas of Ealing, with Southall itself listed as a settlement. Ealing schools follow England\'s national curriculum; our lessons work by school year and cover GCSE and A level, and we stop for the holidays once you tell us the dates.' },
        { kind: 'callout', h3: 'Ealing, London and our approach', p: 'More nearby options: <a class="cg-inline-link" href="/coding-classes-in-ealing-london">coding classes in Ealing</a> and <a class="cg-inline-link" href="/best-coding-class-in-london">London</a>. Why we teach thinking before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Southall project',
      h2: 'Beam search: how many plans should an agent keep in mind?',
      intro: 'One street map, 150 journeys, five beam widths, and a comparison with a search that remembers everything.',
      body: [
        { kind: 'p', text: 'Street and path data for a rectangle over Southall come from OpenStreetMap, simplified to 3,058 junctions and 218.7 km, of which 832 junctions are dead ends. Python picks 150 random journeys at least 800 m apart; the typical shortest walk is 2,840 m. The agent grows partial routes one junction at a time, scores each by distance walked plus straight-line distance still to go, keeps only the k highest-scoring after every step, and never walks back through a junction it has already used on that route.' },
        { kind: 'table', caption: 'Beam search on 150 Southall walking journeys, our Python run on OpenStreetMap data', head: ['Beam width k', 'Journeys completed', 'Typical route against the shortest', 'Partial routes examined (median)'], rows: [
          ['1 (greedy)', '3 of 150', '1.5% longer', '9'],
          ['2', '30 of 150', '5.9% longer', '49.5'],
          ['5', '75 of 150', '5.0% longer', '211'],
          ['20', '129 of 150', '3.5% longer', '1,180.5'],
          ['100', '149 of 150', '2.1% longer', '4,836']
        ] },
        { kind: 'p', text: 'A beam of one almost always fails: it follows the most promising street straight into a cul-de-sac with nothing left to fall back on. Widening the beam rescues more journeys, and at 100 it completes 149 of the 150, with routes typically 2.1% longer than the true shortest. It never guarantees the shortest; even at width 100 it found the exact optimum on only 14 journeys, because good routes that looked unpromising early were thrown away. For comparison, A* search, which remembers every junction it has seen, found the shortest route on every journey after examining a median of 438 junctions. On a town map memory is cheap, so A* wins. Beam search earns its place where remembering everything is impossible, such as choosing the next word from tens of thousands, step after step.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Walk a paper maze keeping only your two favourite paths, and see when that goes wrong.' },
          { h3: 'Ages 11 to 15', p: 'Code a greedy route-finder on a few Southall streets in Python and watch it hit a dead end.' },
          { h3: 'Ages 15 and up', p: 'Build beam search, vary the width on 150 journeys and compare it with A*.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap data, our agent', p: 'Streets and paths are from OpenStreetMap and its contributors under the Open Database Licence, fetched with the Overpass API. The journeys, the agent and all results are our own calculations.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'How agents plan',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Pruning early is cheap until the good option is the one pruned.',
      body: [
        { kind: 'table', caption: 'From the Southall beam search to real AI agents', head: ['In the route project', 'When an AI agent plans or writes'], rows: [
          ['A beam of one failed 147 of 150 times', 'Committing to the first hunch is fragile'],
          ['Wider beams completed more journeys', 'Keeping options open costs memory but helps'],
          ['Even width 100 rarely found the shortest', 'Pruned search is good, not guaranteed'],
          ['A* won when memory was cheap', 'Pick the method that fits the problem size'],
          ['Language models face vast choices', 'That is why they use beams and sampling']
        ] },
        { kind: 'p', text: 'Agents that plan multi-step tasks, and models that write text, keep a small set of candidates at each step because they cannot consider everything. When an agent commits too early it can walk confidently into a dead end, just like the greedy router here. In vibe coding the learner describes the program and an AI writes it; our Southall learners ask the AI for more than one approach before choosing, and test each. Building agents comes after a learner can code Python without support, typically sixteen upwards, and anything in Copilot Studio is taught privately. Read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> for the principle and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agents for UK learners</a> for the route.' },
        { kind: 'p', text: 'OpenStreetMap, the ONS, Nomis and postcodes.io provided open data only and have no link to Modern Age Coders; the agent and any faults in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From paper mazes to planning agents',
    intro: 'We start from the school year and let the trial lesson fine-tune it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Mazes, options and knowing when to backtrack.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and search', p: 'Graphs, search and heuristics next to GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Agents and language models', p: 'Search, decoding and planning agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents and search',
    h2: 'What is beam search in AI, and why do language models use it?',
    intro: 'Beam search keeps only the k most promising partial answers at each step and drops the rest; language models use it because the number of possible sentences is far too large to explore, and it trades a small loss in quality for a huge saving in memory.',
    p1: 'Finding walking routes across Southall, a beam of one completed just 3 of 150 journeys, while a beam of 100 completed 149 with routes typically 2.1% longer than the shortest.',
    p2: 'Learners who have tuned a beam ask of any AI agent: how many options did it keep, and what did it throw away too early?',
    closer: 'A Southall teenager who has watched a greedy agent walk into a cul-de-sac builds agents that keep their options open, and coding is how that lesson sticks.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Lessons reaching Southall by video',
    intro: 'Bring a computer, a webcam and a connection able to hold a video call.',
    cells: [
      { h3: 'Hands on keys', p: 'Students type and run it all while our tutor, following over screen share, keeps asking what the agent should try next.' },
      { h3: 'Plan from day one', p: 'What the trial reveals becomes lesson two\'s starting point, with any GCSE board written down.' },
      { h3: 'First lesson free', p: 'Lesson one is on us and ends with a course suggestion.' },
      { h3: 'Grouped by ability', p: 'Classes hold between five and ten learners from around the UK, sorted by level.' },
      { h3: 'Two a week', p: 'No lessons in school holidays.' },
      { h3: 'Fixed slot', p: 'Tutors follow UK clock changes, so your time holds.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, all free the same evening, are rarely neighbours. On video they do not need to be.' }
  },

  fees: {
    h2: 'Southall fees',
    intro: 'The international rate card, which applies outside India, is what Southall learners pay.',
    first: 'A free first lesson, then our advice.',
    group: 'Around eight live group lessons each month.',
    private: 'Around eight live private lessons each month.',
    closer: 'Billing is in US dollars, with no sterling tariff, beginning after the trial settles a course and a time slot; the pricing page covers school breaks, missed sessions and format switches.'
  },

  reviewsH2: 'Reviews on Google from Ealing parents and learners elsewhere',

  book: {
    h2: 'Book a free Southall lesson',
    intro: 'An age or year group and a favourite hobby are enough for us to plan with. Trials range from a keep-two-paths maze and an AI-assisted Scratch game to beginner Python or a small route-finding agent.',
    success: 'Thank you. Your Southall request has arrived.'
  },

  faq: {
    h2: 'Southall questions',
    intro: 'Beam search, the route project, vibe coding, Python and practical details.',
    items: [
      { q: 'How many people live in Southall?', a: 'There is no single official figure. Census 2021 counted 15,694 in Southall Green ward, 10,825 in Southall Broadway and 6,581 in Southall West, each measured on its own.' },
      { q: 'Are vibe coding and AI agents classes available online in Southall?', a: 'They are: every class is a live video call, open to ages 6 to 67 from Norwood Green to Dormers Wells and across Ealing.' },
      { q: 'What is beam width?', a: 'The number of partial answers beam search keeps at each step. Wider beams find more and better answers but use more memory and time.' },
      { q: 'Is beam search better than A*?', a: 'Not when memory is cheap: A* finds the shortest route with certainty. Beam search is useful when the choices are too many to remember, as in text generation.' },
      { q: 'What does the Southall project involve?', a: 'Running beam search with widths from 1 to 100 on 150 walking journeys across Southall\'s mapped streets and comparing it with A*.' },
      { q: 'How does vibe coding fit in?', a: 'Throughout, for all ages: learners describe the program, the AI drafts it, and the learner tests and repairs it.' },
      { q: 'When do learners build AI agents?', a: 'When Python is something they can do alone, most often from sixteen; Copilot Studio is one-to-one only.' },
      { q: 'Can you help with GCSE and A level?', a: 'Yes, in computer science and maths, aiming at understanding; no grade is ever promised.' },
      { q: 'How much are lessons?', a: 'Lesson one has no fee. Monthly after that: USD 100 in a class, USD 150 with a personal tutor.' },
      { q: 'Are there lessons in the holidays?', a: 'No, they pause for school holidays; send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More west London pages',
    html: 'Pages with projects of their own: <a class="cg-inline-link" href="/coding-classes-in-ealing-london">Ealing</a> (a river rating curve), <a class="cg-inline-link" href="/coding-classes-in-hillingdon-london">Hillingdon</a>, <a class="cg-inline-link" href="/coding-classes-in-hounslow-london">Hounslow</a> and <a class="cg-inline-link" href="/best-coding-class-in-london">London</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Southall and Ealing',
  footerPlaces: [
    { href: '/coding-classes-in-ealing-london', label: 'Ealing' },
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-swl .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-swl .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-swl .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-swl .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-swl .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.02em; }
.cg-root.cg-swl .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-swl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-swl .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-swl .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-swl .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Ealing (E09000009), London. England: national curriculum, GCSE and A level. Census 2021 usual residents by 2022 ward (Nomis NM_2021_1, TYPE153): Southall Broadway 10,825; Southall Green 15,694; Southall West 6,581; Dormers Wells 15,609. postcodes.io (Ealing): Norwood Green, Dormer\'s Wells (suburban areas); Southall (settlement).',
    localProject: 'OSM via Overpass, bbox -0.405,51.495,-0.350,51.525: 3,058 junctions, 218.7 km, 832 dead ends. 150 journeys >= 800 m (median shortest 2,840 m). Beam search k 1/2/5/20/100: completed 3/30/75/129/149; median length ratio 1.015/1.059/1.050/1.035/1.021; exact 0/2/9/16/14; median expanded 9/49.5/211/1,180.5/4,836. A* median 438 junctions, always shortest. Lesson family: beam search.',
    requiredMentions: [
      '10,825',
      '15,694',
      '6,581',
      '15,609',
      'Norwood Green',
      'Dormers Wells',
      'Southall Broadway',
      'beam search',
      'beam width'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by 2022 ward, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'OpenStreetMap streets and paths in Southall via the Overpass API, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io places: suburban areas and settlements in Ealing.', url: 'https://api.postcodes.io/places?q=Norwood%20Green' }
    ],
    rejectedClaims: [
      'A population for Southall as a whole: no published figure for exactly that area; ward figures only, not summed.',
      'Community, religious or heritage descriptions: not used; the page sticks to measured map data.',
      'How specific language models decode: described only in general terms.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
