'use strict';
// Banbridge (cg- town page, UK cluster Phase 8, towns band A, row 432). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: how can a computer find the truly shortest round
// trip without trying every order? (the Held-Karp algorithm: dynamic programming over subsets for the travelling salesman
// problem, its exact answer against a greedy heuristic, and why it still runs out of road).
// Data (read 29 September 2026): OpenStreetMap API 0.6 over bbox -6.305,54.330,-6.240,54.368 (6 tiles, ODbL): walkable ways
// 201.2 km; 30 nodes tagged highway=bus_stop inside the box; start = the node OpenStreetMap uses to label the town
// (place=town "Banbridge", id 267762560). Walking distances between stops by Dijkstra on the path network.
// Our run (scratchpad bbr/hk.py): closed round of the n stops nearest the town label. n / Held-Karp optimum / nearest-
// neighbour / NN extra / median of 2,000 random orders / subproblems stored / steps / seconds / tours brute force would check:
// 8: 2.04 km / 2.18 / 6.9% / 3.69 / 449 / 1,351 / 0.0 / 2,520; 10: 4.37 / 4.53 / 3.7% / 6.90 / 2,305 / 9,225 / 0.0 /
// 181,440; 12: 4.86 / 5.06 / 4.1% / 10.01 / 11,265 / 56,331 / 0.1 / 19,958,400; 14: 5.90 / 6.12 / 3.6% / 13.05 / 53,249 /
// 319,501 / 0.5 / 3,113,510,400; 16: 6.52 / 6.74 / 3.3% / 15.46 / 245,761 / 1,720,335 / 2.5 / 653,837,184,000. All 30 stops
// would need about 30 x 2^29 = 16,106,127,360 subproblems.
// Lesson family: exact dynamic programming over subsets (Held-Karp) against exponential blow-up and heuristics. Screened:
// "Held-Karp", "subset DP" 0 hits anywhere in content/ ("bitmask DP" appears only in course syllabus files). Hamilton owns
// route inspection, Worcester A*, other pages nearest-neighbour and 2-opt heuristics; claimed in $S/claims.txt as bbr.
// Place facts: NISRA Census 2021 MS-A01: settlement BANBRIDGE 17,400 (approximation); DEA Banbridge 34,940 (exact); wards
// Banbridge East 4,479, Banbridge North 4,272, Banbridge South 5,043, Banbridge West 5,431, Gransha 5,155, Loughbrickland
// 5,711, Quilly 4,497 (ward names from postcodes.io outcode BT32; postcodes.io places does not cover Northern Ireland).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BANBRIDGE', label: 'Banbridge', blurb: 'AI and programming classes for Banbridge, with a project that finds the exact shortest walk round the town\'s bus stops and shows where exact answers stop being possible.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-banbridge',
  code: 'bbr',
  accent: '#6E5A0A',
  accentRationale: 'Banbridge: a dark ochre (6.71:1 contrast), chosen by hand to differ in hue from the purples, navies and greens of recent pages',
  pageType: 'city',
  place: {
    name: 'Banbridge',
    eyebrow: 'Banbridge, Armagh City, Banbridge and Craigavon, Northern Ireland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Armagh City, Banbridge and Craigavon' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Armagh', href: '/best-coding-class-in-armagh' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Banbridge, Northern Ireland',
  title: 'AI and Programming Classes in Banbridge | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Banbridge, Loughbrickland, Gransha and Quilly learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'AI and programming classes for Banbridge, with a project that computes the exact shortest walk round the town\'s bus stops and shows why AI needs shortcuts.',
  twitterDescription: 'Banbridge AI, programming, Python and vibe coding classes online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Banbridge',
    description: 'Online AI, programming, algorithms, Python, vibe coding and maths for children, teenagers and adults in Banbridge and County Down, taught live with reasoning first.'
  },

  h1: 'AI and programming classes in Banbridge',
  capsuleQ: 'Which are the best AI and programming classes in Banbridge?',
  capsule: 'Banbridge had roughly 17,400 usual residents at the 2021 census, by NISRA\'s settlement estimate, inside a district electoral area of 34,940. Banbridge East, North, South and West, Loughbrickland, Gransha and Quilly are among the wards postcodes.io lists for the BT32 district. AI, programming, Python, vibe coding and maths are taught over live video by India-based tutors to anyone from six to 67, in one-to-one sessions or small classes of five to ten grouped by level. Reasoning is taught before tools, so learners know when a computer\'s answer is exact and when it is a good guess. The trial lesson costs nothing and ends with a course suggestion. The Banbridge project uses a clever algorithm called Held-Karp to find the shortest walking round of up to 16 of the town\'s 30 mapped bus stops, and then shows why even that cannot handle all 30. Group lessons then cost USD 100 a month and one-to-one lessons USD 150 a month.',
  lead: 'Plan a walk that visits a set of places once each and returns home by the shortest route, and you have the travelling salesman problem. The obvious method, trying every order, collapses almost at once: sixteen stops already allow about 654 billion different rounds. Held-Karp is a smarter exact method from 1962. Instead of whole routes, it builds up the shortest way to cover each subset of stops ending at each stop, reusing those partial answers again and again, which is the essence of dynamic programming. This project runs it on the bus stops mapped on OpenStreetMap across Banbridge, with walking distances along real paths, and compares it with a quick greedy rule.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Banbridge?',

  picks: {
    eyebrow: 'Banbridge course picks',
    h2: 'Banbridge courses in logic, Python and AI',
    intro: 'Match the learner\'s age to a course. Each starts with a live lesson that costs nothing, booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: route puzzles, counting possibilities and remembering answers you have already worked out.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with an AI and tested carefully.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Algorithms and machine learning in Python, including the Banbridge exact-route project.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Students and adults', note: 'Dynamic programming, graphs and optimisation, the foundations under AI planning.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Banbridge and its wards',
      h2: 'Banbridge, Loughbrickland, Gransha and Quilly',
      intro: 'NISRA census figures, with the wards postcodes.io lists for BT32.',
      body: [
        { kind: 'table', caption: 'Banbridge in NISRA Census 2021 MS-A01 (the settlement figure is a NISRA approximation)', head: ['Area', 'Usual residents (2021)'], rows: [
          ['Banbridge settlement', '17,400'],
          ['Banbridge district electoral area', '34,940'],
          ['Banbridge West ward', '5,431'],
          ['Banbridge South ward', '5,043'],
          ['Loughbrickland ward', '5,711'],
          ['Gransha ward', '5,155']
        ] },
        { kind: 'p', text: 'The settlement, the electoral area and the wards are different shapes on the map, so their figures are quoted separately and never summed; Banbridge East (4,479), Banbridge North (4,272) and Quilly (4,497) complete the list of BT32 wards shown here. Teaching follows the Northern Ireland Curriculum year structure, P1 to P7 then Years 8 to 14, and our exam help is geared to CCEA in computing and maths. Tell us your holiday dates and lessons will be arranged round them.' },
        { kind: 'callout', h3: 'Armagh, Northern Ireland and CCEA', p: 'Also see <a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland page</a> and <a class="cg-inline-link" href="/ccea-a-level-software-systems-development-help">CCEA A level Software Systems Development help</a>. Why reasoning comes before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Banbridge project',
      h2: 'The exact shortest round of Banbridge bus stops: Held-Karp dynamic programming',
      intro: 'Real walking distances, rounds of 8 to 16 stops, and a count of every subproblem solved.',
      body: [
        { kind: 'p', text: 'OpenStreetMap supplies the data: over a rectangle covering Banbridge there are 201.2 km of walkable streets and paths and 30 mapped bus stops. Dijkstra\'s algorithm gives the walking distance between every pair of stops. Starting from the stop nearest the point OpenStreetMap uses to label the town, Python solves rounds of the nearest 8, 10, 12, 14 and 16 stops three ways: Held-Karp for the exact shortest round, a nearest-neighbour rule that always walks to the closest unvisited stop, and 2,000 random orders for comparison.' },
        { kind: 'table', caption: 'Shortest walking round of the stops nearest the centre of Banbridge, our Python run on OpenStreetMap data', head: ['Stops', 'Exact shortest', 'Nearest-neighbour rule', 'Typical random order', 'Subproblems stored', 'Orders brute force would check'], rows: [
          ['8', '2.04 km', '2.18 km', '3.69 km', '449', '2,520'],
          ['12', '4.86 km', '5.06 km', '10.01 km', '11,265', '19,958,400'],
          ['16', '6.52 km', '6.74 km', '15.46 km', '245,761', '653,837,184,000']
        ] },
        { kind: 'p', text: 'For sixteen stops Held-Karp stores 245,761 partial answers and makes about 1.7 million comparisons, finishing in 2.5 seconds, where checking every order would mean about 654 billion rounds. The greedy nearest-neighbour rule is instant and here only 3.3% longer than the true optimum; a random order is more than twice as long. The catch is that Held-Karp still grows exponentially. All 30 Banbridge stops would need about 16.1 billion subproblems, far beyond a laptop\'s memory. Past a few dozen stops, even exact cleverness gives way to heuristics, and the skill becomes judging how good the heuristic answer is.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Find the shortest way round five points on a map by hand, then count how many orders there were.' },
          { h3: 'Years 8 to 10', p: 'Build the distance table for a few Banbridge stops in Python and try the nearest-neighbour rule.' },
          { h3: 'Years 11 and up', p: 'Code Held-Karp, time it from 8 to 16 stops and measure how far greedy is from exact.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap paths and stops, our solver', p: 'Paths and bus stop positions are from OpenStreetMap and its contributors under the Open Database Licence. The start, distances, rounds and timings are our own calculations; no real bus route is modelled.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Planning and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Perfect answers have a size limit, and planning systems live beyond it.',
      body: [
        { kind: 'table', caption: 'From the Banbridge route project to AI planning', head: ['In the Held-Karp project', 'When AI plans for you'], rows: [
          ['16 stops took 2.5 seconds exactly', 'Small problems can be solved perfectly'],
          ['30 stops would need 16.1 billion subproblems', 'Growth, not speed, sets the limit'],
          ['Greedy was 3.3% longer here', 'Heuristics are often close, but check'],
          ['Random orders were over twice as long', 'Always compare with a baseline'],
          ['Partial answers were reused', 'Remembering work is a powerful idea']
        ] },
        { kind: 'p', text: 'Delivery planners, schedulers and AI agents that organise tasks all face this kind of combinatorial explosion, and nearly all of them rely on heuristics that give good answers without a guarantee. In vibe coding the learner describes a program while an AI writes it; our Banbridge learners then ask whether the result is exact or approximate, and test it against a known optimum on small cases. Agents that plan for you should be clear about which it is. Agent building follows once Python is second nature, which for most means the last years of school or adulthood, and Copilot Studio agents are covered in private lessons only. The progression into agents is mapped on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our UK agents course page</a>; the teaching idea behind it is <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, NISRA and postcodes.io are not linked with Modern Age Coders; we used only their open data, and the solver and any errors in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From route puzzles to dynamic programming',
    intro: 'We treat the school year as a starting hint and let the trial set the level.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Routes, counting choices and reusing earlier answers.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to Year 9', h3: 'Vibe coding for kids', p: 'Games and apps planned by the learner, built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 10 to 14', h3: 'Python and algorithms', p: 'Graphs, dynamic programming and heuristics alongside CCEA GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Optimisation and agents', p: 'Algorithms, planning and AI agents in Python.', courses: ['data-structures-algorithms-masterclass-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and planning',
    h2: 'What is the Held-Karp algorithm, and why can\'t a computer just try every route?',
    intro: 'Held-Karp finds the exact shortest round trip by dynamic programming, building the shortest way to cover every subset of stops and reusing those answers, which is vastly faster than trying every order, though it still grows exponentially.',
    p1: 'On 16 of Banbridge\'s mapped bus stops it found the exact shortest walking round, 6.52 km, from 245,761 partial answers in 2.5 seconds, where trying every order would mean about 654 billion rounds; all 30 stops would need about 16.1 billion subproblems.',
    p2: 'Learners who have run it ask of any AI plan: is this answer exact, or a good guess, and how would we know?',
    closer: 'A Banbridge teenager who knows when an answer is proven and when it is merely good will not be bluffed by an AI plan, and coding is where that instinct forms.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Banbridge to Loughbrickland, online',
    intro: 'Equipment: a computer, a webcam and broadband that can manage a video call.',
    cells: [
      { h3: 'Learners code it themselves', p: 'Every line and run is the student\'s; the tutor follows the shared screen and asks what the program is doing.' },
      { h3: 'Placed by the trial', p: 'Half an hour of real work tells us the right first topic, with any CCEA exam written into the plan.' },
      { h3: 'Free first lesson', p: 'No fee for lesson one, which ends with our course suggestion.' },
      { h3: 'Classes by stage', p: 'Groups of five to ten UK learners at one level.' },
      { h3: 'Twice a week', p: 'Paused over school holidays.' },
      { h3: 'Stable slot', p: 'Tutors follow UK clock changes, so your time stays the same.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at the same stage, free on the same evening, rarely live near each other. Online, the distance vanishes.' }
  },

  fees: {
    h2: 'Banbridge fees',
    intro: 'Banbridge learners pay our international prices, the ones for every country except India.',
    first: 'A full free lesson, then advice on a course.',
    group: 'About eight live group lessons a month.',
    private: 'About eight live private lessons a month.',
    closer: 'Every fee is in US dollars, with no sterling tariff, and billing starts once a trial has agreed a course and a lesson time; school breaks, absences and format changes are on the pricing page.'
  },

  reviewsH2: 'Google reviews from Banbridge-area families and learners around the UK',

  book: {
    h2: 'Book a free Banbridge lesson',
    intro: 'An age or year group and one interest is enough for us to plan. Possible trials: a shortest-round puzzle on paper, a Scratch game made alongside an AI, early Python, or a tiny routing problem on real streets.',
    success: 'Thank you. Your Banbridge request has arrived.'
  },

  faq: {
    h2: 'Banbridge questions',
    intro: 'Exact rounds, Held-Karp, the Banbridge bus stops, vibe coding and how lessons run.',
    items: [
      { q: 'What is the population of Banbridge?', a: 'NISRA\'s Census 2021 settlement figures put Banbridge at roughly 17,400 usual residents, and the Banbridge district electoral area at 34,940.' },
      { q: 'Are AI and programming classes available online in Banbridge?', a: 'They are, through live video, open to ages 6 to 67 from Loughbrickland to anywhere in Armagh City, Banbridge and Craigavon.' },
      { q: 'What is dynamic programming?', a: 'Solving a big problem by breaking it into overlapping smaller ones, solving each once and reusing the answers. Held-Karp applies it to route planning.' },
      { q: 'Why is the travelling salesman problem hard?', a: 'The number of possible orders grows faster than exponentially: 16 stops allow about 654 billion rounds. Exact methods such as Held-Karp help, but still become impossible for large numbers of stops.' },
      { q: 'What does the Banbridge project involve?', a: 'Finding the exact shortest walking round of 8 to 16 mapped Banbridge bus stops with Held-Karp, and comparing it with a greedy rule and random orders.' },
      { q: 'Is vibe coding included?', a: 'At all ages: learners describe the program, an AI drafts it, and the learner tests every part.' },
      { q: 'When do learners build AI agents?', a: 'Once Python no longer needs a guiding hand, for most around Years 13 and 14 or in adult life; Copilot Studio is private tuition only.' },
      { q: 'Is there CCEA exam support?', a: 'Yes, in Digital Technology, Software Systems Development and maths, with understanding as the goal and no promised grades.' },
      { q: 'What do lessons cost?', a: 'Nothing for the trial lesson. Carrying on costs USD 100 per month as part of a class, or USD 150 per month for your own tutor.' },
      { q: 'Do school holidays stop lessons?', a: 'They do. Share your school\'s holiday weeks and no lessons will fall in them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Elsewhere in Northern Ireland',
    html: 'Each of these runs a different experiment: <a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh</a>, <a class="cg-inline-link" href="/best-coding-class-in-newry">Newry</a>, <a class="cg-inline-link" href="/best-coding-class-in-lisburn">Lisburn</a> and <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> cover the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Banbridge and Northern Ireland',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/best-coding-class-in-armagh', label: 'Armagh' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bbr .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-bbr .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-bbr .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-bbr .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bbr .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-bbr .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-bbr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bbr .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; }
.cg-root.cg-bbr .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-bbr .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Armagh City, Banbridge and Craigavon (N09000002). Northern Ireland Curriculum; CCEA GCSE and A level. NISRA Census 2021 MS-A01: settlement BANBRIDGE 17,400 (approximation); DEA Banbridge 34,940; wards Banbridge East 4,479, Banbridge North 4,272, Banbridge South 5,043, Banbridge West 5,431, Gransha 5,155, Loughbrickland 5,711, Quilly 4,497 (ward names from postcodes.io outcode BT32).',
    localProject: 'OSM API 0.6 bbox -6.305,54.330,-6.240,54.368: walk network 201.2 km, 30 bus stops, start = place=town node 267762560. Held-Karp exact vs nearest-neighbour vs random (2,000). n=8: 2.04 km / 2.18 / 3.69, 449 subproblems; n=12: 4.86 / 5.06 / 10.01, 11,265; n=16: 6.52 / 6.74 (+3.3%) / 15.46, 245,761 subproblems, 1.72M steps, 2.5 s vs 653,837,184,000 brute-force tours. 30 stops about 16.1 billion subproblems. Lesson family: Held-Karp dynamic programming over subsets.',
    requiredMentions: [
      '17,400',
      '34,940',
      'Banbridge West',
      'Loughbrickland',
      'Gransha',
      'Quilly',
      'Held-Karp',
      '245,761',
      '653,837,184,000'
    ],
    sources: [
      { claim: 'NISRA Census 2021 MS-A01 usual resident population by settlement, DEA and ward.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'OpenStreetMap paths and bus stops in Banbridge, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io outcode BT32: wards in Armagh City, Banbridge and Craigavon.', url: 'https://api.postcodes.io/outcodes/BT32' }
    ],
    rejectedClaims: [
      'Bridge, linen or town history: not read from a source; not claimed.',
      'Real bus routes or timetables: not modelled; the stops are points only.',
      'That the listed wards make up the town: they are wards postcodes.io lists for BT32; not claimed as the town area.',
      'Sum of settlement, DEA and ward figures: different geographies; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
