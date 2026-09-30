'use strict';
// Clifton (cg- district page, UK cluster Phase 9, row 465). Keyword slug per the owner's 2026-09-30 ruling. Clifton is a
// ward of the City of Bristol. Spine: can you work out where you are from nothing but how high you are standing?
// (particle filter / Monte Carlo localisation on a terrain model: a cloud of guesses, reweighted by each altimeter
// reading, against dead reckoning that drifts).
// Data (read 30 September 2026): EU-DEM 25 m elevation model (Copernicus) through the OpenTopoData public API, a 40 by 40
// grid over the rectangle 51.445 to 51.475 N, 2.640 to 2.590 W around Clifton: 3,468 m by 3,316 m, heights 5.0 to 116.8 m.
// Our run (scratchpad clf/pf.py): a simulated walker with an unknown start takes 25 m steps (compass error 10 degrees,
// step error 5 m) and reads an altimeter (error 2 m) after each. 2,000 particles, 40 runs. Median position error: 501 m
// after 10 steps, 38 m after 30, 28 m after 60, 28 m after 120; 95% of runs within 100 m at the end. Dead reckoning told
// the true start: 17, 27, 43, 64 m. Altimeter error 5 m: 36 m at the end, 87.5% within 100 m. 500 particles: 29 m, 67.5%
// within 100 m. 100 particles: 379 m, 40%.
// Lesson family: particle filter (Monte Carlo localisation, sequential importance resampling).
// Screened: "particle filter" 0 page hits; claimed in the fork claims file. Bristol owns Voronoi; Bath and Kingswood own
// other families; Kalman filter pages exist elsewhere and are not repeated here.
// Place facts: Census 2021 TS001 wards of Bristol: Clifton 13,022; Clifton Down 11,420 (a separate ward).
// postcodes.io (City of Bristol): Clifton Wood, Hotwells (BS8); Redland, Cotham (BS6).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CLIFTON', label: 'Clifton', blurb: 'Coding and AI classes for Clifton in Bristol, with a Python project that locates a lost walker from altimeter readings alone.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-clifton-bristol',
  code: 'clf',
  accent: '#3F6212',
  accentRationale: 'Clifton: a dark moss green, picked by hand and unlike the Bristol city page accent',
  pageType: 'city',
  place: {
    name: 'Clifton',
    eyebrow: 'Clifton, Bristol, England',
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
  routeLabel: 'Clifton, Bristol',
  title: 'Coding and AI Classes in Clifton, Bristol | Python, Ages 6 to 67',
  description: 'Live online coding, AI, Python and vibe coding lessons for learners aged 6 to 67 in Clifton, Clifton Wood, Hotwells, Redland and Cotham, Bristol. First lesson free.',
  ogDescription: 'Coding and AI classes for Clifton, Bristol, with a particle filter project that finds a lost walker on the hills from altimeter readings.',
  twitterDescription: 'Clifton, Bristol: coding, AI, Python and vibe coding classes online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Clifton, Bristol',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Clifton and nearby Bristol wards, taught live with thinking ahead of tools.'
  },

  h1: 'Coding and AI classes in Clifton',
  capsuleQ: 'Which are the best coding and AI classes in Clifton?',
  capsule: 'Clifton is a City of Bristol ward that counted 13,022 usual residents in the 2021 census, and Clifton Down is a ward of its own with 11,420. In the postcodes.io records, Clifton Wood and Hotwells sit in BS8, with Redland and Cotham in BS6. Anyone from six to 67 can study coding, AI, Python, vibe coding and maths here through live video with a tutor in India, either alone or among five to ten classmates at a matching level. We teach how to reason before which tool to reach for, so learners can tell when a confident answer is only one of many guesses. Lesson one costs nothing and ends with a named course. In the Clifton project a particle filter locates a lost walker on a terrain model whose heights run from 5.0 to 116.8 metres. Monthly fees afterwards are USD 100 for a class place or USD 150 for private lessons.',
  lead: 'Suppose a phone has lost its satellite signal. It still has a compass, a step counter and a barometer that gives height. On flat ground that would be useless for finding yourself. Where the ground varies by more than a hundred metres across the map, every height reading rules out most of it. A particle filter turns that into an algorithm: scatter two thousand guesses across the map, move every guess when the walker moves, and after each altimeter reading keep the guesses whose ground height matches and drop those that do not. Robots localise themselves this way, and the terrain model around Clifton has enough relief to show it working.',
  wa: 'Hi Modern Age Coders, I would like a free coding or AI lesson for a learner in Clifton, Bristol.',

  picks: {
    eyebrow: 'Where to start in Clifton',
    h2: 'Thinking, vibe coding, Python and AI agents for Clifton learners',
    intro: 'Four starting points, one per age band. Each begins with a free live lesson, and booking takes no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Learning how to think: narrowing down many guesses with one clue at a time.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'A child describes a Scratch game, an AI drafts it, the child tests and repairs it.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the ground up, with the Clifton particle filter as a project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Generative AI and AI agents in Python, including how agents handle uncertainty.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Clifton in figures',
      h2: 'Clifton, Clifton Down, Hotwells and Clifton Wood',
      intro: 'Two ward counts from the census, and the place names recorded around them.',
      body: [
        { kind: 'table', caption: 'Two City of Bristol wards, usual residents, Census 2021 (Nomis)', head: ['Ward', 'Residents (2021)'], rows: [
          ['Clifton', '13,022'],
          ['Clifton Down', '11,420']
        ] },
        { kind: 'p', text: 'Each ward has its own published figure and we leave them unadded. Postcodes.io lists Clifton Wood and Hotwells as Bristol suburbs in BS8, and Redland and Cotham in BS6. Pupils in Bristol work through England\'s national curriculum towards GCSEs and A levels. Lessons are arranged around the school calendar once you tell us the dates.' },
        { kind: 'callout', h3: 'Bristol and the South West', p: 'City and regional pages: <a class="cg-inline-link" href="/best-coding-class-in-bristol">coding classes in Bristol</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a>. The argument for thinking first is at <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Clifton project',
      h2: 'Lost on a hill: a particle filter that finds you by height',
      intro: 'A terrain grid, a simulated walker who does not know the starting point, and 2,000 guesses.',
      body: [
        { kind: 'p', text: 'The learner downloads a 40 by 40 grid of ground heights from the open EU-DEM elevation model for a rectangle of 3,468 by 3,316 metres around Clifton. The lowest cell is 5.0 m and the highest 116.8 m. A simulated walker is dropped somewhere unknown and walks in 25 metre steps. The compass is wrong by about ten degrees, the step counter by about five metres, and the altimeter by about two. The particle filter starts with 2,000 guesses spread over the whole rectangle.' },
        { kind: 'table', caption: 'Median position error over 40 simulated walks around Clifton, our Python run on EU-DEM heights', head: ['Steps walked', 'Particle filter, start unknown', 'Step counting, start known'], rows: [
          ['10 (250 m)', '501 m', '17 m'],
          ['30 (750 m)', '38 m', '27 m'],
          ['60 (1.5 km)', '28 m', '43 m'],
          ['120 (3 km)', '28 m', '64 m']
        ] },
        { kind: 'p', text: 'After ten steps the filter is still half a kilometre out: many places share a height, and the cloud of guesses has not yet collapsed. By thirty steps it is within 38 m, and from sixty steps it holds at 28 m. Counting steps from a known start does the opposite. It begins accurate and drifts, reaching 64 m after three kilometres, because each small compass and stride error is added to the last and nothing corrects them. In 95% of the 40 walks the filter finished within 100 m of the truth.' },
        { kind: 'p', text: 'Then the learner tries to break it. A worse altimeter, wrong by five metres, still ends at a median of 36 m, with 87.5% of walks inside 100 m. Cutting the guesses hurts far more: with 500 particles the median stays at 29 m but only 67.5% of walks finish within 100 m, and with 100 particles the median error is 379 m and just 40% succeed. With too few guesses, none happens to start close to the truth, and resampling then multiplies wrong ones.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Put counters on a contour map and remove every one that is on the wrong height after each clue.' },
          { h3: 'Ages 11 to 15', p: 'Code the move, weigh and resample loop in Python on a small grid of Clifton heights.' },
          { h3: 'Ages 15 and up', p: 'Run 40 walks, vary the sensor error and particle count, and explain each failure.' }
        ] },
        { kind: 'callout', h3: 'Real heights, simulated walker', p: 'The heights are from the EU-DEM 25 metre model of the Copernicus programme, read through OpenTopoData. The walker, the sensor errors and every result in the table are simulated by us. Nobody\'s movements were recorded, and this is a classroom exercise, not a navigation aid.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Many guesses, one answer',
      h2: 'What a cloud of guesses teaches about vibe coding and AI agents',
      intro: 'Holding several possibilities open, and letting evidence thin them out, is a skill AI tools need from their users.',
      body: [
        { kind: 'table', caption: 'The Clifton particle filter next to everyday work with AI', head: ['On the hill', 'With an AI assistant'], rows: [
          ['501 m out after ten steps', 'Early answers can be confidently wrong'],
          ['Each reading removed wrong guesses', 'Each test removes wrong explanations'],
          ['Step counting drifted to 64 m', 'Unchecked steps pile up errors'],
          ['100 particles failed 60% of the time', 'Too few alternatives hides the right one'],
          ['A rough altimeter still worked', 'Imperfect checks beat no checks']
        ] },
        { kind: 'p', text: 'Vibe coding means stating what you want in words and having an AI write the code. The risk is accepting its first guess. Clifton learners practise the particle filter habit instead: ask for more than one approach, run a test, discard what fails. AI agents that act over many steps drift like the step counter unless something measures them against the world, so our older learners give their agents a check after each action. That stage comes after Python is secure, which for most people means sixteen or older, and Copilot Studio is taught only in private lessons. More detail: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the AI agents route for UK students</a>, and the principle at <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Copernicus, OpenTopoData, the ONS and postcodes.io are credited as open data sources. None of them endorses or works with Modern Age Coders, and the analysis and any mistakes in it belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'From narrowing guesses to probabilistic code',
    intro: 'Bands follow school years loosely. The free lesson shows us where a learner really is.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Clues, elimination and explaining a choice aloud.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Describe it, let an AI draft it, then test and mend it.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and AI', p: 'Simulation, randomness and models, in step with GCSE and A level.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'AI agents', p: 'Python, generative AI and agents that check themselves.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and uncertainty',
    h2: 'What is a particle filter, and how does it work out a position?',
    intro: 'A particle filter is an algorithm that tracks something it cannot see directly by keeping thousands of guesses, moving them as the thing moves, and favouring the guesses that agree with each new measurement until they cluster on the truth.',
    p1: 'On Clifton\'s terrain, 2,000 guesses and an altimeter found a lost walker to within 28 m after sixty steps, while step counting from a known start had drifted to 43 m by then and 64 m by the end.',
    p2: 'A learner who has built one expects an AI tool to be unsure at first and asks what evidence would narrow things down.',
    closer: 'Weighing guesses against evidence is a coding skill as much as a thinking one, which is why Clifton teenagers gain from writing real programs in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson format',
    h2: 'What a Clifton lesson looks like',
    intro: 'Any laptop or desktop with a webcam will do, given broadband that copes with a video call.',
    cells: [
      { h3: 'The learner drives', p: 'Code is written on the learner\'s own screen, shared live, and the tutor\'s job is to question each step.' },
      { h3: 'Placed by the trial', p: 'We set the level from what we see in the free lesson and record any exam board.' },
      { h3: 'Nothing to pay at first', p: 'Lesson one is free and finishes with the course we would choose.' },
      { h3: 'Groups of five to ten', p: 'One level per group, with classmates from all over the UK.' },
      { h3: 'Two sessions weekly', p: 'Paused through school breaks.' },
      { h3: 'A fixed UK time', p: 'Our tutors move their clocks when Britain does.' }
    ],
    spec: { title: 'Why online', p: 'A single ward rarely holds five people at one level who are all free on a Tuesday. The whole country does.' }
  },

  fees: {
    h2: 'Clifton fees',
    intro: 'Learners in Clifton are on our international rate card, used everywhere outside India.',
    first: 'One complete lesson, free, with a course recommended.',
    group: 'Roughly eight live class sessions a month.',
    private: 'Roughly eight live individual sessions a month.',
    closer: 'All fees are set in US dollars and we publish no sterling figures. Nothing is charged until the trial has fixed a course and a regular slot. Holidays, missed sessions and changing between class and private are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from Bristol families and learners across Britain',

  book: {
    h2: 'Arrange a free lesson for Clifton',
    intro: 'Give us an age or school year and something the learner likes. The free lesson could be a clue-and-eliminate puzzle, a Scratch game drafted with an AI, a first Python script, or a small cloud of guesses hunting for a walker.',
    success: 'Thanks. We have your Clifton request.'
  },

  faq: {
    h2: 'Clifton questions answered',
    intro: 'On particle filters, the hill project, Python, vibe coding and the practical side.',
    items: [
      { q: 'How many people live in Clifton, Bristol?', a: 'The 2021 census counted 13,022 usual residents in Clifton ward. Clifton Down ward, counted separately, had 11,420.' },
      { q: 'Are there online coding and AI classes for Clifton?', a: 'Yes. Lessons run as live video calls for ages 6 to 67, so anyone in Clifton or elsewhere in Bristol can join.' },
      { q: 'What is Monte Carlo localisation?', a: 'It is the use of a particle filter to work out where a robot or person is: many random position guesses are moved, scored against sensor readings and resampled.' },
      { q: 'What is dead reckoning?', a: 'Estimating position by adding up each step and heading from a known start. In our test it drifted to 64 m after three kilometres.' },
      { q: 'What happens in the Clifton project?', a: 'A Python particle filter with 2,000 guesses finds a simulated walker on real terrain heights from altimeter readings, and learners test what makes it fail.' },
      { q: 'Is vibe coding taught?', a: 'Yes, at every age. The learner decides what to build and checks what the AI produces.' },
      { q: 'At what stage do learners make AI agents?', a: 'After they can write Python unaided, usually at sixteen or over. Copilot Studio is private tuition only.' },
      { q: 'Can you support GCSE or A level work?', a: 'We teach computer science and maths for understanding at both levels and make no promises about grades.' },
      { q: 'How much are lessons?', a: 'Free for the first one. After that, USD 100 a month in a class or USD 150 a month for individual lessons.' },
      { q: 'Are there lessons in school holidays?', a: 'No, we pause for them. Just let us know your dates.' }
    ]
  },

  next: {
    eyebrow: 'Elsewhere in Bristol',
    h2: 'Other Bristol and South West pages',
    html: 'Each has a different project: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-bishopston-bristol">Bishopston</a> (matching GPS points to roads), <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol</a>, <a class="cg-inline-link" href="/best-coding-class-in-bath">Bath</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a>. The full list is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Ask on WhatsApp'
  },

  footerHeading: 'Clifton and Bristol',
  footerPlaces: [
    { href: '/best-coding-class-in-bristol', label: 'Bristol' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-clf .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.4vw, 3rem); }
.cg-root.cg-clf .cg-hero h1 { font-weight: 740; letter-spacing: -0.031em; line-height: 1.06; }
.cg-root.cg-clf .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-clf .cg-eyebrow { letter-spacing: 0.2em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-clf .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.024em; }
.cg-root.cg-clf .cg-table caption { font-style: italic; text-align: left; font-size: 0.92rem; }
.cg-root.cg-clf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-clf .cg-table th { letter-spacing: 0.04em; font-weight: 700; font-size: 0.79rem; }
.cg-root.cg-clf .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-clf .cg-callout { border-left-width: 3px; border-radius: 4px; }
`,

  dossier: {
    curriculumAuthority: 'City of Bristol (E06000023). England: national curriculum, GCSE and A level. Census 2021 TS001 wards: Clifton 13,022; Clifton Down 11,420. postcodes.io (City of Bristol): Clifton Wood, Hotwells (BS8); Redland, Cotham (BS6).',
    localProject: 'EU-DEM 25 m via OpenTopoData, 40x40 grid, 51.445-51.475 N, 2.640-2.590 W: 3,468 m by 3,316 m, heights 5.0 to 116.8 m. Simulated walker, unknown start, 25 m steps, compass error 10 degrees, step error 5 m, altimeter error 2 m; 2,000 particles, 40 runs. Median error 501 / 38 / 28 / 28 m after 10 / 30 / 60 / 120 steps; 95% within 100 m at end. Dead reckoning (known start) 17 / 27 / 43 / 64 m. Altimeter 5 m: 36 m, 87.5%. 500 particles: 29 m, 67.5%. 100 particles: 379 m, 40%. Lesson family: particle filter (Monte Carlo localisation).',
    requiredMentions: [
      '13,022',
      '11,420',
      'Clifton Wood',
      'Hotwells',
      'Redland',
      'Cotham',
      'Clifton Down',
      'particle filter',
      '116.8'
    ],
    sources: [
      { claim: 'EU-DEM 25 m elevation model (Copernicus Land Monitoring Service) read through the OpenTopoData API.', url: 'https://www.opentopodata.org/datasets/eudem/' },
      { claim: 'ONS Census 2021 TS001 ward populations for Bristol via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas in the City of Bristol.', url: 'https://api.postcodes.io/places?q=Clifton' }
    ],
    rejectedClaims: [
      'Landmarks, the gorge, the bridge, the Downs or any named street: not read from a source; none named.',
      'Sum of Clifton and Clifton Down wards: separate wards; not added.',
      'Any claim that the method works as a navigation aid or on a real phone: simulated only.',
      'That 116.8 m is the height of any named hill: it is the highest cell of a 40 by 40 grid over the rectangle, nothing more.',
      'Named schools, the university and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
