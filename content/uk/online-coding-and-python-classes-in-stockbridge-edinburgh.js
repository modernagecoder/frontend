'use strict';
// Stockbridge, Edinburgh (cg- district page, UK cluster Phase 9, row 471). Keyword slug per the owner's 2026-09-30 ruling,
// with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: what is the biggest climb on a walk,
// and why is it not simply highest minus lowest? (maximum subarray, Kadane's algorithm; order matters, one pass is enough).
// Data (read 30 September 2026): OpenTopoData public API, dataset eudem25m (EU-DEM v1.1, Copernicus Land Monitoring
// Service, European Environment Agency), 300 points along longitude 3.2100 W from latitude 55.9750 N to 55.9450 N,
// 3 requests of 100. Length 3,316 m, spacing 11.1 m.
// Our run (scratchpad stb/kad.py): heights first 32.5 m, last 75.0 m, lowest 16.8 m at 1,420 m along, highest 76.9 m at
// 3,205 m along. 299 height changes. Reading north to south: largest net climb 60.2 m, from the point at 1,420 m to the
// point at 3,205 m; Kadane 299 steps, checking every pair 44,850 comparisons, same answer. Reading south to north: largest
// net climb 18.3 m, from 1,420 m back to 1,065 m, although highest minus lowest is still 60.2 m. Total ascent north to
// south 77.9 m, total descent 35.3 m.
// Lesson family: maximum subarray (Kadane's algorithm). Screened: "Kadane", "maximum subarray" 0 hits in content/; rm.js
// and famq.js clean; claimed in claims.txt. Cumulative elevation gain and smoothing belong to earlier pages; this is the
// best contiguous run in a sequence of gains and losses.
// Place facts: no NRS figure for Stockbridge; City of Edinburgh about 512,700 (Scotland's Census 2022 rounded, registered
// by the Edinburgh page). postcodes.io (City of Edinburgh, EH3/EH4) suburban areas: Stockbridge, Comely Bank, Inverleith,
// Canonmills. No river, valley or street is named: the profile is a straight line on a map, not a walkable route.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'STOCKBRIDGE', label: 'Stockbridge', blurb: 'Online coding and Python classes for Stockbridge in Edinburgh, with a project that finds the biggest climb hidden in 300 real heights in one pass.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-stockbridge-edinburgh',
  code: 'stb',
  accent: '#0E5A7A',
  accentRationale: 'Stockbridge: a deep teal blue (7.3:1 contrast), picked by hand to sit apart from the violet and plum of the other Edinburgh districts',
  pageType: 'city',
  place: {
    name: 'Stockbridge',
    eyebrow: 'Stockbridge, Edinburgh, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Edinburgh' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-edinburgh', name: 'Edinburgh' }],
  nav: [
    { label: 'Edinburgh', href: '/best-coding-class-in-edinburgh' },
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Stockbridge, Edinburgh',
  title: 'Online Coding and Python Classes in Stockbridge, Edinburgh',
  description: 'Live online coding and Python classes for Stockbridge, Comely Bank, Inverleith and Canonmills learners in Edinburgh, from age 6 to 67. The first lesson is free.',
  ogDescription: 'Online coding and Python classes for Stockbridge, Edinburgh, with a project that finds the biggest climb in a line of 300 heights using one pass.',
  twitterDescription: 'Stockbridge, Edinburgh: online coding, Python and AI classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Stockbridge, Edinburgh',
    description: 'Online coding, Python, AI and maths for children, teenagers and adults in Stockbridge and across Edinburgh, taught live with algorithms explained on real data.'
  },

  h1: 'Online coding and Python classes in Stockbridge, Edinburgh',
  capsuleQ: 'Which online coding and Python classes are best for Stockbridge learners?',
  capsule: 'Stockbridge belongs to the City of Edinburgh, which had about 512,700 residents in Scotland\'s 2022 census; we found no official count for exactly Stockbridge, so this page gives none. The EH3 and EH4 postcode districts also record Comely Bank, Inverleith and Canonmills as suburbs. From India, our teachers run live video lessons in coding, Python, AI and maths for ages six to 67, one learner at a time or five to ten together at one level. Every topic starts from the idea behind it, so a learner can explain an algorithm and not only run it. You pay nothing for lesson one, which ends with a recommended course. The Stockbridge project reads 300 real heights along a line through the district and asks a question with a catch: what is the biggest climb? Once a course is chosen, a class place is USD 100 per month and individual tuition USD 150 per month.',
  lead: 'Take a list of numbers that go up and down: daily profit and loss, temperature changes, or the rise and fall of the ground along a line. Which unbroken stretch adds up to the most? That is the maximum subarray problem. The obvious method tries every start and every end. Kadane\'s algorithm does it in a single pass with one idea: at each step, either carry on with the run you have, or drop it and start again here, whichever is larger. The same data shows why the quick shortcut, highest value minus lowest value, gives a wrong answer as soon as direction matters. This project runs both on real heights through Stockbridge.',
  wa: 'Hello Modern Age Coders, we would like a free online coding or Python lesson for a learner in Stockbridge.',

  picks: {
    eyebrow: 'Stockbridge course picks',
    h2: 'Courses for Stockbridge: thinking, Python and vibe coding',
    intro: 'One course per age band. Each opens with a free live lesson and needs no payment details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: running totals, ups and downs, and spotting when to start counting again.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games the learner designs, an AI helps write, and the learner then tests.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first lines to algorithms on lists, with the Stockbridge climb project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data, algorithms, automation and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Stockbridge and its postcode districts',
      h2: 'Stockbridge, Comely Bank, Inverleith and Canonmills',
      intro: 'What the open postcode data records, and what it does not.',
      body: [
        { kind: 'table', caption: 'Suburban areas recorded by postcodes.io in two Edinburgh postcode districts', head: ['Recorded suburban area', 'Postcode district'], rows: [
          ['Stockbridge', 'EH4'],
          ['Comely Bank', 'EH4'],
          ['Inverleith', 'EH3'],
          ['Canonmills', 'EH3']
        ] },
        { kind: 'p', text: 'We searched for an official head count covering exactly Stockbridge and did not find one, which is why none appears on this page. Pupils here follow the Curriculum for Excellence, so we place learners by P and S stage and support SQA Computing Science and Maths at National 5, Higher and Advanced Higher. Lessons step around Edinburgh school holidays when you tell us the dates.' },
        { kind: 'callout', h3: 'Edinburgh, Scotland and SQA support', p: 'Start from <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a> for the whole city or <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> for the country, and see <a class="cg-inline-link" href="/advanced-higher-maths-tuition-online">Advanced Higher Maths tuition</a> for exam help. Our case for ideas before tools is <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Stockbridge project',
      h2: 'The biggest climb in 300 heights, found in one pass',
      intro: 'A straight line on the map, a height every 11.1 m, and an answer that depends on which way you read it.',
      body: [
        { kind: 'p', text: 'The learner asks an open elevation service for the ground height at 300 points along longitude 3.2100 W, from latitude 55.9750 N to 55.9450 N. The line is 3,316 m long, and 70 of its 300 points fall inside the area OpenStreetMap maps as Stockbridge. It is a line on a map, not a path anyone walks. The heights start at 32.5 m, fall to 16.8 m at 1,420 m along, and end at 75.0 m after a high point of 76.9 m. Turning heights into 299 changes between neighbours gives a list of gains and losses, and the question becomes: which unbroken run of changes has the largest total?' },
        { kind: 'table', caption: 'Largest net climb along the line, our Python run on EU-DEM heights', head: ['Direction of reading', 'Largest net climb', 'From', 'To'], rows: [
          ['North to south', '60.2 m', '1,420 m along (16.8 m high)', '3,205 m along (76.9 m high)'],
          ['South to north', '18.3 m', '1,420 m along', '1,065 m along'],
          ['Highest minus lowest, either way', '60.2 m', 'ignores order', 'ignores order']
        ] },
        { kind: 'table', caption: 'Work done to find the north-to-south answer', head: ['Method', 'Steps', 'Answer'], rows: [
          ['Try every start and end point', '44,850 pairs', '60.2 m'],
          ['Kadane\'s algorithm, one pass', '299 steps', '60.2 m']
        ] },
        { kind: 'p', text: 'Reading north to south, the largest climb is 60.2 m, and it happens to equal highest minus lowest because the low point comes before the high point. Turn round and the shortcut fails. Reading south to north, highest minus lowest is still 60.2 m, but the high point now comes first, and the largest climb actually available is 18.3 m. Kadane\'s algorithm gets both right because it never looks at heights out of order. It also does far less work: 299 steps against 44,850 pairs, for the same 60.2 m. For comparison, every upward step added together comes to 77.9 m north to south and every downward step to 35.3 m, a different measure again.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Keep a running score of ups and downs on paper and decide when it pays to start the count again.' },
          { h3: 'S1 to S3', p: 'Write the try-everything version in Python and count how many pairs it checks.' },
          { h3: 'S4 and up', p: 'Write Kadane in six lines, reverse the list, and explain the 18.3 m result.' }
        ] },
        { kind: 'callout', h3: 'Copernicus heights, our analysis', p: 'Heights are from EU-DEM v1.1, produced using Copernicus data and information funded by the European Union, read through the OpenTopoData public API. The grid is about 25 m, so points 11.1 m apart are interpolated and buildings or bridges can disturb a reading. The climbs are a teaching calculation, not a survey.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Algorithms, vibe coding and agents',
      h2: 'Why one pass matters to vibe coding and AI agents',
      intro: 'An AI will write either version; only a learner who knows both can tell which one they got.',
      body: [
        { kind: 'table', caption: 'From the Stockbridge climb to code an AI writes for you', head: ['In the climb project', 'In AI-written code'], rows: [
          ['Highest minus lowest was wrong in one direction', 'Plausible shortcuts pass the first test and fail the second'],
          ['Reversing the list exposed the error', 'A good test changes the input, not only the numbers'],
          ['299 steps matched 44,850 pairs', 'Two correct programs can differ hugely in cost'],
          ['Points 11.1 m apart on a 25 m grid', 'Know the limits of the data before trusting the output'],
          ['Net climb, total ascent and range all differed', 'Say exactly which quantity you want']
        ] },
        { kind: 'p', text: 'Describe this task loosely to a coding assistant, "find the biggest climb", and you may get highest minus lowest, a double loop, or Kadane, each delivered with equal confidence. Vibe coding means writing software by telling an AI what you want; our Stockbridge learners add the test that matters, run it backwards, and ask the AI how many steps its answer takes. The same habit carries over to AI agents, which string many such steps together and repeat any hidden mistake at speed. Learners build agents once they write Python unaided, which tends to be around S5 or after, and Copilot Studio agents are taught in one-to-one lessons only. More on this: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'The European Environment Agency, OpenTopoData, OpenStreetMap, National Records of Scotland and postcodes.io provide open data and are unconnected to this school. The calculation is ours, and so is any mistake in it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'By stage',
    h2: 'From running totals to efficient algorithms',
    intro: 'School stage is only a rough guide; the free lesson shows where to begin.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Running totals, patterns and knowing when to start over.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Small games and apps made with an AI and checked by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and algorithms', p: 'Lists, loops and efficiency, next to SQA Computing Science and Maths.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Adults', h3: 'Python, data and agents', p: 'Algorithms on real data and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Algorithms',
    h2: 'What is Kadane\'s algorithm and what is it used for?',
    intro: 'Kadane\'s algorithm finds the unbroken stretch of a list of numbers with the largest total in a single pass, by deciding at each number whether to extend the current run or start a new one; it is used to find the strongest run of gains in prices, signals, scores or heights.',
    p1: 'On 300 heights through Stockbridge it found the largest north-to-south climb, 60.2 m, in 299 steps where checking every pair took 44,850, and it correctly gave 18.3 m in the other direction, where highest minus lowest would still say 60.2 m.',
    p2: 'A learner who has seen that reversal asks of any program: does the order of the data matter, and did the code respect it?',
    closer: 'Stockbridge teenagers who can explain why one pass is enough have met the core of algorithm design, and no AI tool removes the need for it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lessons',
    h2: 'How a Stockbridge learner joins',
    intro: 'Needed at home: a laptop or desktop with a camera, and broadband good enough for video.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'The learner writes every line while sharing their screen. The teacher steers with questions and leaves the typing alone.' },
      { h3: 'Level set at the trial', p: 'The free lesson shows the right starting point and records any SQA course being taken.' },
      { h3: 'Lesson one is on us', p: 'No fee for the opening lesson, which finishes with the course we would pick.' },
      { h3: 'Five to ten per class', p: 'Classmates are at your level and may live anywhere in the UK.' },
      { h3: 'Twice weekly', p: 'Through the school term.' },
      { h3: 'Same hour all year', p: 'When British clocks move, the tutor adjusts and your time stays put.' }
    ],
    spec: { title: 'Why online', p: 'A class matched by level and free at one hour seldom lives within one district. Video removes that limit.' }
  },

  fees: {
    h2: 'What Stockbridge learners pay',
    intro: 'The rates below are our international ones, which apply to Stockbridge as to every place outside India.',
    first: 'One full lesson at no cost, ending with a course recommendation.',
    group: 'Roughly eight live class lessons in a month.',
    private: 'Roughly eight live individual lessons in a month.',
    closer: 'Fees are charged in US dollars; there is no price in pounds. Payment begins only after the trial, when the course and weekly time are settled. Holiday pauses, missed lessons and moving between class and individual tuition are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from Edinburgh and the rest of the UK',

  book: {
    h2: 'Arrange a free lesson in Stockbridge',
    intro: 'Tell us an age or stage and one interest. A trial could be a running-total puzzle, a Scratch game built with AI help, first steps in Python, or the climb problem itself.',
    success: 'Thanks. We have your Stockbridge request.'
  },

  faq: {
    h2: 'Stockbridge questions',
    intro: 'The climb project, Kadane, vibe coding and practical details.',
    items: [
      { q: 'How many people live in Stockbridge?', a: 'We could not find an official figure for exactly Stockbridge. The City of Edinburgh, which includes it, had about 512,700 residents in the 2022 census.' },
      { q: 'Can you learn coding and Python online in Stockbridge?', a: 'Yes. Lessons are live on video for anyone aged 6 to 67 in Stockbridge, Comely Bank, Inverleith, Canonmills and wider Edinburgh.' },
      { q: 'What is the maximum subarray problem?', a: 'Given a list of positive and negative numbers, find the unbroken stretch with the largest sum. Kadane\'s algorithm solves it in one pass.' },
      { q: 'Why is highest minus lowest the wrong answer?', a: 'Because a climb must go from an earlier point to a later one. In our Stockbridge data, reading south to north, the high point comes first, so the true largest climb is 18.3 m, not 60.2 m.' },
      { q: 'What does the Stockbridge project involve?', a: 'Reading 300 open heights along a line through the district, then finding the largest net climb by two methods and in both directions.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, from age eight. The learner describes a program, an AI drafts it, and the learner tests and repairs it.' },
      { q: 'At what stage do learners build AI agents?', a: 'When they can write Python unaided, which tends to be around S5 or after. Copilot Studio agents are one-to-one only.' },
      { q: 'Is there help for SQA Computing Science?', a: 'Yes, at National 5, Higher and Advanced Higher, and for Maths too. We teach for understanding and do not promise grades.' },
      { q: 'How much do classes cost?', a: 'Lesson one is free. Then it is USD 100 per month for a class place or USD 150 per month for individual lessons.' },
      { q: 'What happens in school holidays?', a: 'Lessons pause for the dates you give us and resume afterwards.' }
    ]
  },

  next: {
    eyebrow: 'Elsewhere',
    h2: 'Other Edinburgh and Scottish pages',
    html: 'Different places, different projects: <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-musselburgh">Musselburgh</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-livingston">Livingston</a> and <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a>. Everything else is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Ask on WhatsApp'
  },

  footerHeading: 'Stockbridge and Edinburgh',
  footerPlaces: [
    { href: '/best-coding-class-in-edinburgh', label: 'Edinburgh' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-stb .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.6vw, 3rem); }
.cg-root.cg-stb .cg-hero h1 { font-weight: 720; letter-spacing: -0.03em; line-height: 1.05; }
.cg-root.cg-stb .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-stb .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; }
.cg-root.cg-stb .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.024em; }
.cg-root.cg-stb .cg-table caption { font-style: italic; text-align: left; font-size: 0.92rem; }
.cg-root.cg-stb .cg-table td { font-variant-numeric: tabular-nums; padding-block: 0.7rem; }
.cg-root.cg-stb .cg-table th { letter-spacing: 0.03em; font-weight: 700; font-size: 0.8rem; }
.cg-root.cg-stb .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-stb .cg-callout { border-left-width: 3px; border-radius: 4px; }
`,

  dossier: {
    curriculumAuthority: 'City of Edinburgh (S12000036). Scotland: Curriculum for Excellence, SQA National 5, Higher, Advanced Higher. No NRS figure for Stockbridge; City of Edinburgh about 512,700 (Scotland\'s Census 2022, rounded). postcodes.io (City of Edinburgh, EH3/EH4): Stockbridge, Comely Bank, Inverleith, Canonmills (suburban areas).',
    localProject: 'OpenTopoData eudem25m (EU-DEM v1.1): 300 points on longitude 3.2100 W, 55.9750 N to 55.9450 N, 3,316 m, 11.1 m spacing. Heights 32.5 m first, 75.0 m last, low 16.8 m at 1,420 m, high 76.9 m at 3,205 m. Largest net climb north to south 60.2 m (Kadane 299 steps; all pairs 44,850); south to north 18.3 m (1,420 m to 1,065 m). Total ascent 77.9 m, descent 35.3 m. Lesson family: maximum subarray (Kadane).',
    requiredMentions: [
      'Comely Bank',
      'Inverleith',
      'Canonmills',
      'Kadane',
      'maximum subarray',
      '44,850',
      '60.2 m',
      '18.3 m',
      '3.2100 W'
    ],
    sources: [
      { claim: 'EU-DEM v1.1 elevation, Copernicus Land Monitoring Service (European Environment Agency), read via the OpenTopoData public API.', url: 'https://www.opentopodata.org/datasets/eudem/' },
      { claim: 'OpenStreetMap suburb outline for Stockbridge, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io places: suburban areas in the City of Edinburgh (EH3, EH4).', url: 'https://api.postcodes.io/places?q=Stockbridge' },
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 rounded population estimates (City of Edinburgh).', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' }
    ],
    rejectedClaims: [
      'A population for Stockbridge: none found for exactly this area; not stated. The only boundary used is the OpenStreetMap suburb outline (70 of 300 profile points inside).',
      'Naming the river, valley or streets the line crosses: not verified against a source; left out.',
      'That the line is a walking route or that 60.2 m is the climb of any real walk: not claimed.',
      'Surveyed accuracy: EU-DEM is a 25 m grid and points are interpolated; stated on the page.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
