'use strict';
// Downpatrick (cg- town page, UK cluster Phase 8, towns band A, row 435). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: what is the smallest circle that holds every one
// of a set of places, and why does the order you feed the points in matter? (smallest enclosing circle, Welzl's randomised
// incremental algorithm, support points, brute force against the clever method, shuffling as a guard against bad input).
// Data (read 29 September 2026): OpenStreetMap API 0.6 over bbox -5.750,54.310,-5.690,54.345 in 6 tiles (ODbL): 40 mapped
// shops (shop nodes plus the centres of shop-tagged outlines) and 5,865 building outlines (centres used).
// Our run (scratchpad dpk/mec.py): iterative Welzl (move-to-front triple loop). Shops: smallest enclosing circle radius
// 1,834.3 m, fixed by 2 support points (so it equals the circle on the two farthest-apart shops); 229 point-in-circle
// tests. A circle centred on the average shop position must reach 2,338.7 m; one centred on the middle of the shops' box
// 1,855.9 m; the true centre is 509.4 m from the average position. Brute force (every circle through 2 or 3 shops, 10,660
// candidates, stopping each check at the first shop outside): 15,409 tests, same 1,834.3 m. Buildings (5,865, circle radius
// 2,435.0 m because the rectangle bounds them): shuffled input (seed 7) 65,666 tests; 20 other shuffles median 50,206.5
// (27,632 to 140,080); sorted west to east 239,155; sorted east to west 205,503.
// Lesson family: smallest enclosing circle, Welzl's algorithm, randomised incremental algorithms and input order.
// Screened: "Welzl", "enclosing circle", "minimum enclosing" 0 hits in content/. Bristol owns Voronoi (largest empty space),
// Birkenhead polygon area; the object here is the tightest circle round a point set.
// Place facts: NISRA Census 2021 MS-A01: Downpatrick settlement 11,545; Downpatrick DEA 21,916; Newry, Mourne and Down LGD
// 182,074; settlements Killyleagh 2,787 and Ardglass 1,761; wards Cathedral 4,217 and Quoile 4,172 (Nominatim: Cathedral
// ward, Downpatrick; the Quoile river at Downpatrick). No identity, religious-site or saint claims.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'DOWNPATRICK', label: 'Downpatrick', blurb: 'Online coding and Python classes for Downpatrick, with a geometry project that finds the smallest circle holding every mapped shop in the town.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-downpatrick',
  code: 'dpk',
  accent: '#6B6A10',
  accentRationale: 'Downpatrick: a dark mustard olive (5.36:1 on paper), chosen by hand to differ in hue from the purples, navies and greens of recent pages',
  pageType: 'city',
  place: {
    name: 'Downpatrick',
    eyebrow: 'Downpatrick, County Down, Northern Ireland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Newry, Mourne and Down' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-northern-ireland', name: 'Northern Ireland' }],
  nav: [
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Newry', href: '/best-coding-class-in-newry' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Downpatrick, Northern Ireland',
  title: 'Online Coding and Python Classes in Downpatrick | AI, 6 to 67',
  description: 'Live online coding, Python, AI and vibe coding lessons for Downpatrick, Killyleagh, Ardglass and Quoile learners in County Down, aged 6 to 67. First lesson free.',
  ogDescription: 'Online coding and Python classes for Downpatrick, with a geometry project that finds the tightest circle round every mapped shop and asks why input order matters.',
  twitterDescription: 'Downpatrick online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Downpatrick',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Downpatrick and County Down, taught live with geometry and reasoning first.'
  },

  h1: 'Online coding and Python classes in Downpatrick',
  capsuleQ: 'Which are the best online coding and Python classes in Downpatrick?',
  capsule: 'Downpatrick town counted 11,545 residents in NISRA\'s 2021 census tables, with 21,916 across its electoral area in the Newry, Mourne and Down district. Cathedral and Quoile are two of the census wards at the town, while Killyleagh and Ardglass are among the smaller settlements elsewhere in the district. From primary school up to age 67, learners study coding, Python, AI, vibe coding and maths on live video with tutors based in India, in one-to-one lessons or a group of five to ten who share a stage. Clear geometric and logical thinking comes first, so learners can check a program\'s answer rather than trust it. Lesson one costs nothing, and we close it by naming the course that fits. In the Downpatrick project, Python finds the smallest circle that holds all 40 mapped shops, then shows why the same clever algorithm can run several times slower on sorted input. Staying on means USD 100 per month for class lessons, or USD 150 per month with a tutor to yourself.',
  lead: 'Here is a question that sounds simple: what is the smallest circle that contains every point in a set? Delivery planners ask it about customers, phone engineers about masts, and game programmers about collision boxes. The obvious approaches, a circle around the average point or around the middle of the bounding box, are close but not right. The exact answer comes from an elegant algorithm published by Emo Welzl in 1991, which adds points one at a time and only rebuilds the circle when a point falls outside it. It is fast on average, provided the points arrive in random order. This project runs it in Python on the shops and buildings of Downpatrick as mapped on OpenStreetMap.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Downpatrick?',

  picks: {
    eyebrow: 'Downpatrick course picks',
    h2: 'Downpatrick starting courses in geometry, Python and AI',
    intro: 'Choose by age and interest. Each course opens with a live class that is free, and booking takes no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: shapes, distances and finding the tightest fit.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games that the learner plans, an AI helps build and the learner then tests hard.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first programs to geometry and algorithms, including the Downpatrick circle.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data, algorithms, randomisation and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Downpatrick in the 2021 census',
      h2: 'Downpatrick, Quoile, Killyleagh and Ardglass',
      intro: 'NISRA figures for the town, its electoral area and the district, with nearby settlements and wards.',
      body: [
        { kind: 'table', caption: 'People usually resident in 2021, from NISRA table MS-A01', head: ['Place', 'NISRA geography', 'Residents'], rows: [
          ['Downpatrick', 'Settlement', '11,545'],
          ['Downpatrick', 'District electoral area', '21,916'],
          ['Killyleagh', 'Settlement', '2,787'],
          ['Ardglass', 'Settlement', '1,761']
        ] },
        { kind: 'p', text: 'Each figure is a separate NISRA count for a different kind of area, so none is added to another; the whole Newry, Mourne and Down district held 182,074. Cathedral ward (4,217 residents) and Quoile ward (4,172) are census wards at Downpatrick. Lessons follow the Northern Ireland Curriculum year structure used in County Down, and exam support is matched to CCEA specifications. Send us your holiday weeks and lessons will skip them.' },
        { kind: 'callout', h3: 'County Down neighbours and CCEA', p: 'See <a class="cg-inline-link" href="/best-coding-class-in-newry">Newry</a>, <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland</a> and <a class="cg-inline-link" href="/ccea-gcse-maths-help">CCEA GCSE Maths help</a>. Why thinking comes before tools is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Downpatrick project',
      h2: 'The smallest circle round every Downpatrick shop: Welzl\'s algorithm in Python',
      intro: 'Forty shops, one exact circle, two tempting shortcuts, and a test of what input order does to speed.',
      body: [
        { kind: 'p', text: 'OpenStreetMap supplies 40 shops inside a rectangle over Downpatrick; where a shop is drawn as an outline, its centre stands in for it. Positions are converted to metres. Welzl\'s algorithm then builds the smallest enclosing circle: it takes the shops one at a time, and whenever a shop falls outside the current circle, it rebuilds the circle so that this shop sits on its edge. The final circle always rests on two or three points, its support points; every other shop could move a little without changing it.' },
        { kind: 'table', caption: 'Circles holding all 40 mapped shops in Downpatrick, our Python run on OpenStreetMap data', head: ['Method', 'Radius', 'Point checks'], rows: [
          ['Welzl\'s algorithm (exact)', '1,834.3 m', '229'],
          ['Try every circle through 2 or 3 shops', '1,834.3 m', '15,409'],
          ['Centre on the middle of the shops\' box', '1,855.9 m', 'Not exact'],
          ['Centre on the average shop position', '2,338.7 m', 'Not exact']
        ] },
        { kind: 'p', text: 'Here the tightest circle rests on just two shops, the two farthest apart, and the brute-force search agrees at 1,834.3 m after 15,409 checks against Welzl\'s 229. The box-centre shortcut happens to come within 22 m, but the average-position shortcut needs a radius 504 m larger, because the average is pulled towards wherever shops cluster: the true centre is 509.4 m away from it. The second experiment uses all 5,865 building centres in the rectangle. With the buildings shuffled, the algorithm needed a median of about 50,200 checks over 20 shuffles. Fed them sorted from west to east, it needed 239,155, and sorted east to west, 205,503. Sorted input keeps putting the next point outside the circle, forcing rebuild after rebuild, which is why the algorithm shuffles first.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Pin coins on a map and find the smallest paper circle that covers them all; notice which coins touch the edge.' },
          { h3: 'Years 8 to 10', p: 'Compute the average-centre circle for Downpatrick\'s shops in Python and measure how much too big it is.' },
          { h3: 'Year 11 and up', p: 'Code Welzl\'s algorithm, count its checks on shuffled and sorted input, and compare with brute force.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap places, our circles', p: 'Shops and buildings are from OpenStreetMap and its contributors under the Open Database Licence. The rectangle, the circles and every count are our own work; shops are not named.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Algorithms and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Correct is not the same as quick; the input decides.',
      body: [
        { kind: 'table', caption: 'From the Downpatrick circle to coding with AI', head: ['In the geometry project', 'When AI writes code for you'], rows: [
          ['Welzl needed 229 checks, brute force 15,409', 'A known algorithm can beat a naive loop by miles'],
          ['The average-centre circle was 504 m too wide', 'An intuitive shortcut can be quietly wrong'],
          ['Two shops fixed the whole circle', 'A few points can decide the answer'],
          ['Sorted input took several times the checks', 'Test code on awkward inputs, not just tidy ones'],
          ['Shuffling first protected the speed', 'Randomness can be a deliberate design choice']
        ] },
        { kind: 'p', text: 'Ask an AI assistant for "the smallest circle containing these points" and it may centre a circle on the average and call it done, which our Downpatrick shops show can be 504 m too wide. In vibe coding the learner describes what the program must do and the AI writes the code; our Downpatrick learners then check the result against a brute-force search on a small set and time it on sorted input. AI agents that crunch data for you will not run those checks unless told. We move learners on to agent building once their Python is steady, usually around Year 12 or as adults, and Copilot Studio agents are only taught one-to-one. Two pages say more: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>, and the <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agents route for UK students</a>.' },
        { kind: 'p', text: 'OpenStreetMap and NISRA publish the open data this page relies on and have no link with Modern Age Coders; the circles and any errors in them are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From coins on a map to randomised algorithms',
    intro: 'School year is a first guide; the free lesson shows the real starting point.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Shapes, distances and the tightest fit.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to Year 9', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 10 to 14', h3: 'Python and algorithms', p: 'Geometry, recursion and algorithm analysis alongside CCEA GCSE and A level.', courses: ['python-complete-masterclass-teens', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Python for data and agents', p: 'Algorithms, data and AI agents built in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and geometry',
    h2: 'How do you find the smallest circle that contains a set of points?',
    intro: 'Use Welzl\'s algorithm: add the points in random order and, whenever one falls outside the current circle, rebuild the circle with that point on its edge; the result rests on just two or three points and takes expected linear time.',
    p1: 'For Downpatrick\'s 40 mapped shops it found a 1,834.3 m circle with 229 point checks, where trying every candidate circle took 15,409 and a circle centred on the average shop needed 2,338.7 m.',
    p2: 'Learners who have run it ask of any code an AI writes: is this the exact answer, and how does it behave on the worst kind of input?',
    closer: 'A Downpatrick teenager who can test an algorithm on its worst input will not be fooled by code that only works on tidy examples, and Python is where that habit is formed.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Taught online across County Down',
    intro: 'A computer, a camera and broadband that can hold a video call are all the equipment required.',
    cells: [
      { h3: 'Learner at the keyboard', p: 'The student writes and runs each step; our tutor follows on screen share and asks them to predict the result first.' },
      { h3: 'Trial sets the starting topic', p: 'We see what the learner can already do and note any CCEA course ahead.' },
      { h3: 'Free opening class', p: 'The first class is free and finishes with our course recommendation.' },
      { h3: 'Level-matched groups', p: 'Classes hold five to ten learners drawn together by stage, not by town.' },
      { h3: 'Twice weekly in term', p: 'School holidays off.' },
      { h3: 'Fixed hour', p: 'When UK clocks change, our tutors shift so your slot stays the same.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, all free on the same evening, rarely live close together. Video makes the distance irrelevant.' }
  },

  fees: {
    h2: 'Downpatrick fees',
    intro: 'Learners in Downpatrick pay our international rates, applied in every country except India.',
    first: 'One complete free lesson, then a suggestion.',
    group: 'Roughly eight live group lessons monthly.',
    private: 'Roughly eight live one-to-one lessons monthly.',
    closer: 'Downpatrick families see prices in US dollars only. Nothing is invoiced until after the trial, once a course and a regular slot are fixed; the pricing page handles breaks, missed sessions and format changes.'
  },

  reviewsH2: 'County Down parents and UK learners, reviewing us on Google',

  book: {
    h2: 'Book a free Downpatrick lesson',
    intro: 'Let us know the learner\'s age or year and one interest. The trial could be a coin-and-circle puzzle, a Scratch game made with an AI, a first Python script, or measuring real places from a map.',
    success: 'Thank you. Your Downpatrick request is in.'
  },

  faq: {
    h2: 'Downpatrick questions',
    intro: 'Enclosing circles, the shop project, Python, vibe coding and practical points.',
    items: [
      { q: 'What is the population of Downpatrick?', a: 'NISRA\'s Census 2021 counts 11,545 usual residents in the Downpatrick settlement and 21,916 in the Downpatrick district electoral area.' },
      { q: 'Are online Python classes available in Downpatrick?', a: 'You can: lessons run over live video, so anyone 6 to 67 in Killyleagh, Ardglass or elsewhere in the district can join.' },
      { q: 'What is Welzl\'s algorithm?', a: 'A randomised method for finding the smallest circle around a set of points. It adds points one at a time and rebuilds the circle only when a point falls outside, running in expected linear time.' },
      { q: 'Why does input order matter for a randomised algorithm?', a: 'Its speed guarantee assumes random order. On sorted input, each new point tends to fall outside the circle, forcing repeated rebuilds; in our test, sorted building data took about four to five times as many checks as a typical shuffle.' },
      { q: 'What does the Downpatrick project involve?', a: 'Finding the smallest circle round 40 mapped Downpatrick shops with Welzl\'s algorithm, comparing it with shortcuts and brute force, and timing it on 5,865 buildings in different orders.' },
      { q: 'Is vibe coding included?', a: 'It is, for all ages: the learner sets out what the program must do, then checks and corrects what the AI writes.' },
      { q: 'When can learners build AI agents?', a: 'Once Python feels natural, which is usually from Year 12 or in adulthood; Copilot Studio needs private lessons.' },
      { q: 'Which CCEA subjects can you help with?', a: 'Yes, in Maths, Digital Technology and Software Systems Development, taught for understanding with no promised grades.' },
      { q: 'What do lessons cost?', a: 'Free for the trial; afterwards USD 100 monthly as part of a class, USD 150 monthly one-to-one.' },
      { q: 'Are lessons paused for holidays?', a: 'Yes, for school holidays; send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other pages across Northern Ireland',
    html: 'A different experiment on each: <a class="cg-inline-link" href="/best-coding-class-in-newry">Newry</a> (an exact test on heritage records), <a class="cg-inline-link" href="/best-coding-class-in-lisburn">Lisburn</a>, <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a> and <a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> cover the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Downpatrick and County Down',
  footerPlaces: [
    { href: '/best-coding-class-in-newry', label: 'Newry' },
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-dpk .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-dpk .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-dpk .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-dpk .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dpk .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-dpk .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-dpk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dpk .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-dpk .cg-ladder-col { border-left: 4px double var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-dpk .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Newry, Mourne and Down (N09000010). Northern Ireland Curriculum; CCEA GCSE and A level. NISRA Census 2021 MS-A01: Downpatrick settlement 11,545; Downpatrick DEA 21,916; Newry, Mourne and Down LGD 182,074; Killyleagh settlement 2,787; Ardglass settlement 1,761; wards Cathedral 4,217 and Quoile 4,172.',
    localProject: 'OSM API 0.6 bbox -5.750,54.310,-5.690,54.345: 40 shops, 5,865 buildings. Welzl (iterative): shops radius 1,834.3 m, 2 support points, 229 checks; brute force 10,660 candidates, 15,409 checks; box-centre 1,855.9 m; average-centre 2,338.7 m, centre offset 509.4 m. Buildings: shuffled 65,666 checks (20 shuffles median 50,206.5, range 27,632 to 140,080); west to east 239,155; east to west 205,503. Lesson family: smallest enclosing circle, Welzl, input order.',
    requiredMentions: [
      '11,545',
      '21,916',
      '5,865',
      'Cathedral ward',
      'Quoile',
      'Killyleagh',
      'Ardglass',
      'Welzl',
      'enclosing circle'
    ],
    sources: [
      { claim: 'NISRA, Census 2021 main statistics table MS-A01, usual residents by settlement, ward, district electoral area and LGD.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'OpenStreetMap shops and buildings in Downpatrick, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'CCEA qualifications used in Northern Ireland schools (GCSE and A level).', url: 'https://ccea.org.uk/' }
    ],
    rejectedClaims: [
      'Religious sites, saint or cathedral history: not read from a source; not claimed, and identity topics avoided.',
      'Named shops: none named.',
      'That the building circle means anything about the town: it is bounded by our rectangle and used only for the speed test.',
      'Sum of the NISRA figures: different geographies; never added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
