'use strict';
// Bishopston (cg- district page, UK cluster Phase 9, row 466). Keyword slug per the owner's 2026-09-30 ruling. Bishopston
// is in the City of Bristol, in the ward of Bishopston and Ashley Down. Spine: a GPS dot is never exactly on the road, so
// which road were you on? (map matching with a hidden Markov model and the Viterbi algorithm, against snapping each
// point to its closest road).
// Data (read 30 September 2026): Overpass API (OpenStreetMap, ODbL), rectangle 51.468 to 51.492 N, 2.605 to 2.570 W
// around Bishopston: drivable network of 102.0 km, 3,968 nodes, 4,218 segments, 754 mapped ways.
// Our run (scratchpad bsp/mm.py): 60 simulated trips of 800 to 2,500 m along shortest paths, one position every 40 m
// (2,718 positions), Gaussian noise added. Share of positions assigned to the correct way, median over trips, closest
// road vs Viterbi: noise 5 m 91.8% vs 93.3%; 15 m 76.0% vs 83.3%; 30 m 57.4% vs 65.2%.
// Lesson family: Viterbi map matching (hidden Markov model decoding).
// Screened: "Viterbi" and "map matching" 0 page hits; claimed in the fork claims file. Bristol owns Voronoi; Clifton
// (this phase) the particle filter; Kingswood (another fork) a separate family.
// Place facts: Census 2021 TS001 ward Bishopston and Ashley Down 13,304. postcodes.io (City of Bristol): Bishopston,
// Montpelier, Henleaze, Ashley Down, Horfield, Westbury Park.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BISHOPSTON', label: 'Bishopston', blurb: 'Vibe coding and AI agents classes for Bishopston in Bristol, with a Python project that works out which road a noisy GPS trace was really on.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-bishopston-bristol',
  code: 'bsp',
  accent: '#1E3A8A',
  accentRationale: 'Bishopston: a dark royal blue, selected by hand to stand apart from the moss green Clifton page',
  pageType: 'city',
  place: {
    name: 'Bishopston',
    eyebrow: 'Bishopston, Bristol, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Bristol' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-bristol', name: 'Bristol' }],
  nav: [
    { label: 'Bristol', href: '/best-coding-class-in-bristol' },
    { label: 'South West', href: '/coding-and-ai-classes-in-south-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bishopston, Bristol',
  title: 'Vibe Coding and AI Agents Classes in Bishopston, Bristol | 6-67',
  description: 'Live online vibe coding, AI agents, Python and coding lessons for ages 6 to 67 in Bishopston, Ashley Down, Horfield and Montpelier, Bristol. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Bishopston, Bristol, with a Viterbi map matching project on 102.0 km of local roads.',
  twitterDescription: 'Bishopston, Bristol: vibe coding, AI agents and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'complete-generative-ai-masterclass-college',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Bishopston, Bristol',
    description: 'Online vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Bishopston and surrounding Bristol suburbs, taught live, reasoning first.'
  },

  h1: 'Vibe coding and AI agents classes in Bishopston',
  capsuleQ: 'Which are the best vibe coding and AI agents classes in Bishopston?',
  capsule: 'Bishopston belongs to the Bristol ward of Bishopston and Ashley Down, where the 2021 census recorded 13,304 usual residents. Postcodes.io also lists Horfield, Montpelier, Henleaze and Westbury Park among Bristol\'s suburban areas. Classes in vibe coding, AI agents, Python, coding and maths are open to ages six to 67 and happen on live video, led by tutors working from India, for one learner at a time or for five to ten at a shared level. Each course trains judgement first and tool use second, so a learner can tell a plausible output from a correct one. The trial lesson is free and we end it by proposing a course. For the Bishopston project, learners match noisy GPS traces to 102.0 km of mapped road using the Viterbi algorithm. After the trial, a class place is USD 100 per month and private tuition USD 150 per month.',
  lead: 'A satellite fix is usually several metres off, and between tall buildings it can be thirty. A sat-nav still shows your car neatly on a road. The step that does this is called map matching. The naive version moves each dot to whichever road is closest, which breaks at every junction and wherever two streets run side by side. The better version treats the true road as hidden and asks a different question: which sequence of roads, taken as a whole, would most plausibly have produced this string of dots? The Viterbi algorithm answers that efficiently. We test both versions on the mapped streets around Bishopston, 754 of them inside one small rectangle, and measure the difference.',
  wa: 'Hello Modern Age Coders. Could I arrange a free vibe coding or AI lesson for a learner in Bishopston, Bristol?',

  picks: {
    eyebrow: 'Bishopston starting points',
    h2: 'Vibe coding, AI agents and how-to-think courses for Bishopston',
    intro: 'Match the age, then try it: all four begin with a live lesson that is free and asks for no card.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: an idea in words, a Scratch game from an AI, then testing.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: judging a whole route, not one step, before picking an answer.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python in depth, with Viterbi map matching on Bishopston roads.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Generative AI and building AI agents in Python, with evaluation throughout.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'About Bishopston',
      h2: 'Bishopston, Ashley Down, Horfield and Montpelier',
      intro: 'One census figure for the ward and the suburb names recorded for this part of Bristol.',
      body: [
        { kind: 'table', caption: 'Bishopston and Ashley Down ward, City of Bristol, Census 2021 (Nomis)', head: ['Measure', 'Figure'], rows: [
          ['Usual residents, 2021', '13,304'],
          ['Local authority', 'City of Bristol']
        ] },
        { kind: 'p', text: 'The 13,304 is for the whole ward of Bishopston and Ashley Down. No separate census count for Bishopston alone is used here. Postcodes.io names Bishopston, Ashley Down, Horfield, Montpelier, Henleaze and Westbury Park as suburban areas of Bristol. The city\'s schools teach the national curriculum for England, leading to GCSE and A level, and our timetable gives way to school holidays when you send the dates.' },
        { kind: 'callout', h3: 'The city and the region', p: 'See <a class="cg-inline-link" href="/best-coding-class-in-bristol">our Bristol page</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a>. Why we put reasoning ahead of tools is set out in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bishopston project',
      h2: 'Which road was it? Map matching with the Viterbi algorithm',
      intro: 'A road network, sixty simulated trips, blurred positions, and two ways to put them back on the map.',
      body: [
        { kind: 'p', text: 'From OpenStreetMap, through the Overpass service, the learner loads the drivable roads in a rectangle around Bishopston: 102.0 km in 754 mapped ways, cut into 4,218 short segments. Python then simulates 60 trips of between 800 and 2,500 metres along the shortest route between two random junctions and records a position every 40 metres, 2,718 positions in all. Random error is added to each one to imitate a GPS receiver. Because the trips are simulated, the true road for every position is known and both methods can be marked.' },
        { kind: 'table', caption: 'Positions placed on the correct road, median over 60 simulated Bishopston trips, our Python run on OpenStreetMap data', head: ['GPS error', 'Closest road', 'Viterbi'], rows: [
          ['5 m', '91.8%', '93.3%'],
          ['15 m', '76.0%', '83.3%'],
          ['30 m', '57.4%', '65.2%']
        ] },
        { kind: 'p', text: 'With a good signal there is little to choose: 91.8% against 93.3%. At 15 metres of error the gap opens to seven points, 76.0% against 83.3%, because the closest road to a blurred dot is often a side street the trip never entered, and only a method that looks at the dots before and after can tell. At 30 metres Viterbi still leads, 65.2% against 57.4%, yet a third of positions are wrong under either method. No algorithm recovers information the signal never contained.' },
        { kind: 'p', text: 'The method has two ingredients. One score says how likely a dot is given a candidate road, which falls as the distance grows. The other says how likely a move from one candidate to the next is, by comparing the distance along the roads with the straight distance between the two dots. Viterbi keeps, for each candidate at each step, only the most probable way of arriving there, so the work grows with the length of the trip and not with the number of possible routes.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Follow a wobbly line of dots across a street map and argue about which roads it must have used.' },
          { h3: 'Ages 11 to 15', p: 'Snap dots to the closest Bishopston road in Python and count the mistakes at junctions.' },
          { h3: 'Ages 15 and up', p: 'Write the Viterbi pass, tune the two scores and measure accuracy at three error levels.' }
        ] },
        { kind: 'callout', h3: 'Simulated trips only', p: 'Road data is from OpenStreetMap and its contributors under the Open Database Licence. Every trip and every GPS position was generated by our program, so no real journeys or people are involved, and the percentages describe this simulation and nothing else.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Sequences and AI',
      h2: 'Vibe coding and AI agents: judge the whole path, not each step',
      intro: 'The Viterbi idea, that the most sensible sequence beats a chain of locally sensible choices, applies directly to AI.',
      body: [
        { kind: 'table', caption: 'Bishopston map matching and work with AI, side by side', head: ['In the road project', 'In AI work'], rows: [
          ['Closest road failed at junctions', 'A step that looks right alone can be wrong in context'],
          ['Viterbi scored the full sequence', 'Review an agent\'s whole plan, not single actions'],
          ['Gain was 1.5 points at 5 m, 7.3 at 15 m', 'Clever methods matter most when inputs are noisy'],
          ['A third still wrong at 30 m', 'Bad input limits every model'],
          ['True roads were known, so both could be marked', 'Keep a test set with known answers']
        ] },
        { kind: 'p', text: 'Speech recognisers relied on this same algorithm for decades to turn sounds into the likeliest string of words. In vibe coding the learner describes a program and an AI writes it, and what our Bishopston learners add is the marking: a simulated case with a known answer, run before the code is trusted. An AI agent carries out many steps in a row, and one that checks only each step can wander just as the closest-road method does. Learners build agents once they write Python confidently without help, typically at sixteen or older. Copilot Studio agents are taught in private lessons only. Further reading: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents, the UK student route</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the ONS and postcodes.io provide open data, which we acknowledge. They are independent of Modern Age Coders, and responsibility for this analysis rests with us alone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Pathway',
    h2: 'A pathway from route puzzles to AI agents',
    intro: 'School years are shown as a rough key. The real placement comes out of the free lesson.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Routes, sequences and checking a whole answer.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Ideas turned into games with an AI, then tested by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and algorithms', p: 'Graphs, probability and dynamic programming beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'AI agents', p: 'Generative AI and agents in Python, measured against known answers.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and sequences',
    h2: 'What is map matching, and why use the Viterbi algorithm for it?',
    intro: 'Map matching is the task of deciding which roads a series of imprecise GPS positions actually followed, and the Viterbi algorithm is used because it finds the single most probable sequence of roads for the whole series without trying every possible route.',
    p1: 'On simulated Bishopston trips with 15 metres of GPS error, it placed 83.3% of positions on the correct road where snapping to the closest road managed 76.0%.',
    p2: 'Having coded it, a learner looks at any AI output as one candidate sequence among many and asks how it was scored.',
    closer: 'Bishopston teenagers who can program a test with known answers are able to mark an AI\'s work themselves, and that is a reason to write code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'In practice',
    h2: 'How Bishopston learners join and what happens',
    intro: 'You will want a proper computer, not a phone, with a working camera and a steady connection.',
    cells: [
      { h3: 'Learner writes, tutor probes', p: 'The screen being shared is the learner\'s. They code, and the tutor interrupts with "what will this print?"' },
      { h3: 'A level chosen in the trial', p: 'We watch how the learner works in lesson one, place them, and log the exam board where relevant.' },
      { h3: 'Lesson one is free', p: 'It costs nothing, and you come away with a suggested course.' },
      { h3: 'Five to ten in a group', p: 'Everyone in it is at the same stage, and they join from across Britain.' },
      { h3: 'Twice every week', p: 'School holidays are left free.' },
      { h3: 'One UK time, kept', p: 'Clock changes are handled at the tutor\'s end.' }
    ],
    spec: { title: 'Why online', p: 'To fill a level-matched class we draw on the whole UK. A few streets could not supply it, and a video call removes the need.' }
  },

  fees: {
    h2: 'Fees for Bishopston learners',
    intro: 'Bishopston is billed on the international schedule that covers all learners outside India.',
    first: 'An entire lesson free of charge, and a course proposed.',
    group: 'Eight or so live lessons in a class every month.',
    private: 'Eight or so live lessons with your own tutor every month.',
    closer: 'Our prices are stated in US dollars alone, with no pound figures anywhere. You start paying after the trial, when a course and a weekly time are agreed. The pricing page deals with school breaks, absence and moving from class to private or back.'
  },

  reviewsH2: 'How Bristol families and other UK learners rate us on Google',

  book: {
    h2: 'Request a free lesson for Bishopston',
    intro: 'Mention the learner\'s year or age and a favourite subject or hobby. Depending on that, the trial is a route puzzle on paper, a Scratch game made with AI help, some first lines of Python, or dots snapped onto a street map.',
    success: 'Got it, thank you. Your Bishopston request has reached us.'
  },

  faq: {
    h2: 'Bishopston: common questions',
    intro: 'What parents and adult learners ask about map matching, the project, agents, fees and timing.',
    items: [
      { q: 'What is the population of Bishopston?', a: 'The ward of Bishopston and Ashley Down had 13,304 usual residents in the 2021 census. We do not use a figure for Bishopston alone.' },
      { q: 'Can someone in Bishopston learn vibe coding and AI agents online?', a: 'Yes. All teaching is by live video, for anyone aged 6 to 67 in Bishopston or the rest of Bristol.' },
      { q: 'What is a hidden Markov model?', a: 'A model in which the thing you care about, such as the road, cannot be seen, and you infer it from noisy observations plus rules about how it changes from step to step.' },
      { q: 'What does the Viterbi algorithm do?', a: 'It finds the most probable sequence of hidden states for a series of observations by keeping only the likeliest path into each state at every step.' },
      { q: 'What is the Bishopston project?', a: 'Matching 2,718 simulated GPS positions to 102.0 km of mapped road in Python and comparing Viterbi with snapping to the closest road.' },
      { q: 'What is vibe coding?', a: 'Building software by telling an AI what you want in plain language. We teach learners to specify clearly and to test the result.' },
      { q: 'Who can take the AI agents lessons?', a: 'Learners with confident, independent Python, which in practice means about sixteen upward. Copilot Studio agents are taught privately only.' },
      { q: 'Is GCSE or A level covered?', a: 'Computer science and maths at both levels are, with understanding as the aim. We give no grade guarantees.' },
      { q: 'What are the monthly fees?', a: 'USD 100 a month for a class place and USD 150 a month for private tuition, after a free first lesson.' },
      { q: 'Do classes run in school holidays?', a: 'They pause. Send your school\'s dates when you book.' }
    ]
  },

  next: {
    eyebrow: 'Keep exploring',
    h2: 'More pages for Bristol and the South West',
    html: 'No two share a project: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-clifton-bristol">Clifton</a> (finding a lost walker by height), <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol</a>, <a class="cg-inline-link" href="/best-coding-class-in-bath">Bath</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a>. Every UK page is reachable from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Bishopston and Bristol',
  footerPlaces: [
    { href: '/best-coding-class-in-bristol', label: 'Bristol' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bsp .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.8vw, 2.4rem); }
.cg-root.cg-bsp .cg-hero h1 { font-weight: 800; letter-spacing: -0.034em; line-height: 1.02; }
.cg-root.cg-bsp .cg-capsule { border-right: 3px solid var(--cg-accent); padding-right: 1.1rem; }
.cg-root.cg-bsp .cg-eyebrow { letter-spacing: 0.13em; font-weight: 800; text-transform: uppercase; }
.cg-root.cg-bsp .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.018em; }
.cg-root.cg-bsp .cg-table caption { font-weight: 500; text-align: left; font-size: 0.88rem; }
.cg-root.cg-bsp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bsp .cg-table th { letter-spacing: 0.07em; font-weight: 800; font-size: 0.75rem; text-transform: uppercase; }
.cg-root.cg-bsp .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-bsp .cg-callout { border-left-width: 8px; border-radius: 0; }
`,

  dossier: {
    curriculumAuthority: 'City of Bristol (E06000023). England: national curriculum, GCSE and A level. Census 2021 TS001 ward Bishopston and Ashley Down 13,304. postcodes.io (City of Bristol): Bishopston, Ashley Down, Horfield, Montpelier, Henleaze, Westbury Park.',
    localProject: 'Overpass (OSM) rectangle 51.468-51.492 N, 2.605-2.570 W: drivable network 102.0 km, 3,968 nodes, 4,218 segments, 754 ways. 60 simulated shortest-path trips of 800-2,500 m, position every 40 m (2,718 positions), Gaussian noise. Correct-way share (median over trips), closest road vs Viterbi HMM: 5 m 91.8% vs 93.3%; 15 m 76.0% vs 83.3%; 30 m 57.4% vs 65.2%. Lesson family: Viterbi map matching.',
    requiredMentions: [
      '13,304',
      'Ashley Down',
      'Horfield',
      'Montpelier',
      'Henleaze',
      'Westbury Park',
      'Viterbi',
      'map matching',
      '102.0 km'
    ],
    sources: [
      { claim: 'OpenStreetMap road network via the Overpass API, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 ward populations for Bristol via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas in the City of Bristol.', url: 'https://api.postcodes.io/places?q=Bishopston' }
    ],
    rejectedClaims: [
      'A population for Bishopston alone: only the ward of Bishopston and Ashley Down (13,304) is published in our source.',
      'Named roads, shops, stadiums or traffic conditions: not read from a source; none named.',
      'Real GPS traces or any person\'s journeys: none used; all trips are simulated.',
      'That Viterbi is always better: not claimed; the gain was 1.5 points at 5 m and a third of positions stayed wrong at 30 m.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
