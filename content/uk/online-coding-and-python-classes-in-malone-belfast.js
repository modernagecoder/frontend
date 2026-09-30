'use strict';
// Malone, Belfast (cg- district page, UK cluster Phase 9, row 475). Keyword slug per the owner's rotation with a city suffix,
// and the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how do you scatter points so that they
// look random but never crowd each other? (Poisson disk sampling with Bridson's algorithm, against plain uniform random
// points; "blue noise").
// Data (read 30 September 2026): OpenStreetMap API 0.6 map calls over bbox -5.972,54.552,-5.925,54.590 in 9 tiles (ODbL).
// Outline used: way 554010963, leisure=park, name "Barnett Demesne"; by our shoelace calculation 50.36 hectares, the
// largest of the named park and green-space outlines in the rectangle (Lagan Meadows 40.07 ha, Malone Playing Fields 24.97
// ha, Musgrave Park 19.02 ha).
// Our run (scratchpad mal/pds.py, 30 candidates per active point, seed 2026), points kept inside the park outline. Minimum
// spacing 15 m: 1,445 points from 52,979 candidate tries, closest pair 15.0 m, median nearest-neighbour gap 15.9 m; the
// same number of plain random points: closest pair 0.2 m, median gap 8.9 m, 86.0% have a neighbour closer than 15 m.
// Spacing 25 m: 529 points, 19,247 tries, gaps 25.0 / 26.4 m; random 0.2 / 15.2 m, 86.4% closer than 25 m. Spacing 40 m:
// 218 points, 8,039 tries, gaps 40.1 / 42.4 m; random 0.6 / 22.8 m, 87.6% closer than 40 m.
// Lesson family: Poisson disk sampling (Bridson), blue noise, background grid for fast neighbour checks. Screened:
// "Poisson disk", "Bridson", "blue noise" 0 hits anywhere in content/. Claimed in claims.txt as "mal".
// Place facts: NISRA Census 2021 table MS-A01, ward sheet: Malone 4,811; Upper Malone 4,974; Musgrave 4,836; DEA sheet:
// Balmoral 24,491. OpenStreetMap place labels in the rectangle: Upper Malone, Lower Malone, Balmoral, Taughmonagh,
// Stranmillis (suburbs). postcodes.io has no Northern Ireland place names.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'MALONE', label: 'Malone, Belfast', blurb: 'Online coding and Python classes for Malone in Belfast, with a project that scatters points across a real park so they look random but never crowd.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-malone-belfast',
  code: 'mal',
  accent: '#2F6B4F',
  accentRationale: 'Malone: a parkland green (6.29:1 contrast), picked by hand to differ in hue from recent pages',
  pageType: 'city',
  place: {
    name: 'Malone',
    eyebrow: 'Malone, Belfast, Northern Ireland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Belfast' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-belfast', name: 'Belfast' }],
  nav: [
    { label: 'Belfast', href: '/best-coding-class-in-belfast' },
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Malone, Belfast',
  title: 'Online Coding and Python Classes in Malone, Belfast | 6 to 67',
  description: 'Live online coding, Python, AI and vibe coding lessons for Malone, Upper Malone and Balmoral learners in Belfast, aged 6 to 67, with CCEA help. First lesson free.',
  ogDescription: 'Online coding and Python classes for Malone, Belfast, with a project that fills a real park outline with evenly spaced random points using Poisson disk sampling.',
  twitterDescription: 'Malone, Belfast: online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Malone, Belfast',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Malone and across Belfast, taught live with reasoning first.'
  },

  h1: 'Online coding and Python classes in Malone, Belfast',
  capsuleQ: 'Which are the best online coding and Python classes in Malone, Belfast?',
  capsule: 'In NISRA\'s 2021 census tables the Belfast ward called Malone has 4,811 usual residents and the ward called Upper Malone 4,974, inside the Balmoral district electoral area of 24,491. OpenStreetMap labels Upper Malone, Lower Malone, Balmoral and Taughmonagh as suburbs in the area. Learners there, from P1 age to 67, take coding, Python, AI, vibe coding and maths by live video with tutors working from India, in private lessons or in a class of five to ten at one level. Reasoning is taught ahead of tools, so a learner can test what an AI writes instead of trusting it. We teach the first lesson free and close it with a course suggestion. The Malone project fills the outline of Barnett Demesne, a 50.36 hectare park, with points that look random yet are never closer than a chosen distance, and compares them with truly random points. Lessons continue at USD 100 a month in a class or USD 150 a month one-to-one.',
  lead: 'Ask a computer for random points and it will oblige, but the result looks wrong to most people: clumps here, bare patches there. That is what real randomness looks like. When you want points that feel natural and evenly spread, for planting trees in a game world, choosing places to take soil samples, or placing dots in a drawing, you need something else: random positions with a guaranteed minimum distance between them. The standard method is Poisson disk sampling, and Robert Bridson\'s 2007 algorithm does it quickly using a simple grid. This project runs it inside the mapped outline of a real Belfast park.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Malone, Belfast?',

  picks: {
    eyebrow: 'Malone course picks',
    h2: 'Malone courses in thinking, Python and AI',
    intro: 'Age decides the starting course. Its first live lesson is free, and booking it never involves a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: what random really looks like, and rules that keep things apart.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games dreamed up by the learner, built with an AI and tested properly.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the first program to grids, geometry and simulation, with the park sampling project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data, sampling, simulation and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Malone and Belfast',
      h2: 'Malone, Upper Malone and Balmoral',
      intro: 'NISRA census figures for the wards and electoral area that carry the names.',
      body: [
        { kind: 'table', caption: 'Census 2021 usual residents, NISRA table MS-A01', head: ['Area', 'Residents (2021)'], rows: [
          ['Malone ward', '4,811'],
          ['Upper Malone ward', '4,974'],
          ['Balmoral district electoral area', '24,491']
        ] },
        { kind: 'p', text: 'Each figure is printed as NISRA publishes it. The wards sit inside the electoral area, so nothing here should be added together, and "Malone" as people use the word is wider than the ward. OpenStreetMap labels Upper Malone, Lower Malone, Balmoral, Taughmonagh and Stranmillis as suburbs within our study rectangle. Schools follow the Northern Ireland Curriculum from P1 to Year 14; send us the holiday dates and lessons will keep clear of them.' },
        { kind: 'callout', h3: 'Belfast, Northern Ireland and CCEA help', p: 'See <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland page</a> and <a class="cg-inline-link" href="/ccea-gcse-digital-technology-programming-help">CCEA GCSE Digital Technology programming help</a>. Why thinking comes before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Malone project',
      h2: 'Random but never crowded: Poisson disk sampling inside Barnett Demesne',
      intro: 'A real park outline, a minimum distance, and two very different kinds of random.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data for a rectangle over Malone and picks out the park outline named Barnett Demesne, which our area calculation puts at 50.36 hectares. Bridson\'s algorithm starts with one random point inside the park. It then repeatedly picks an existing point, tries up to 30 new candidates in a ring between one and two spacings away, and keeps the first that is inside the park and far enough from every point already placed. A background grid, with cells small enough to hold at most one point, means each check only looks at a few neighbouring cells. When a point has failed 30 times it is retired, and the process stops when none are left.' },
        { kind: 'table', caption: 'Poisson disk points against plain random points inside Barnett Demesne, our Python run on an OpenStreetMap outline', head: ['Minimum spacing', 'Points placed', 'Closest pair', 'Same number, plain random: closest pair', 'Plain random points with a neighbour inside the spacing'], rows: [
          ['15 m', '1,445', '15.0 m', '0.2 m', '86.0%'],
          ['25 m', '529', '25.0 m', '0.2 m', '86.4%'],
          ['40 m', '218', '40.1 m', '0.6 m', '87.6%']
        ] },
        { kind: 'p', text: 'With a 15 m spacing the park takes 1,445 points, none closer than 15 m, and the typical gap to the nearest neighbour is 15.9 m: tightly packed but with no pattern to the eye. Scatter the same 1,445 points with a plain random generator and the closest pair is 20 cm apart, the typical gap shrinks to 8.9 m, and 86% of points have a neighbour inside the 15 m they were supposed to keep. The cost of doing it properly is modest: 52,979 candidate positions tried, about 37 for each point kept. Designers call the even result blue noise.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Drop counters on a map at random, then again with a rule that no two may touch, and compare the pictures.' },
          { h3: 'Years 8 to 10', p: 'Generate random points in Python, measure every nearest-neighbour gap and plot the clumps.' },
          { h3: 'Years 11 to 14', p: 'Code Bridson\'s algorithm with a background grid, clip it to the park outline and count the tries.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap outline, our points', p: 'The park outline is from OpenStreetMap and its contributors under the Open Database Licence. The area figure, the sampling and every count are our own calculations. The points are imaginary; nothing here describes real trees, paths or plans for the park.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Sampling and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A sample is only as useful as the way it was drawn.',
      body: [
        { kind: 'table', caption: 'From the park sampling project to working with AI', head: ['In the Malone project', 'When AI samples or tests for you'], rows: [
          ['Plain random points clumped', 'Random test cases can miss whole regions'],
          ['86% broke the spacing rule', 'Check the property you wanted, do not assume it'],
          ['A grid made each check cheap', 'The right data structure changes the cost'],
          ['30 tries per point was a setting', 'Defaults are choices; know them'],
          ['Points stayed inside the outline', 'Constraints must be tested, not hoped for']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to "place some random points in this shape" and it will usually call a plain random generator and move on; whether the result suits the purpose is never questioned. Vibe coding lets a learner say in words what the program should do while the AI writes it. Our Malone learners then measure what came back, here the smallest gap between points, and only then decide whether it did the job. Agents that choose test cases, survey sites or samples of data need that same check. Agent building is held until Python comes without prompting, which in practice means sixth-formers and adults, and Copilot Studio is only ever taught privately. More is on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for students in the UK</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Neither OpenStreetMap nor NISRA has any link with Modern Age Coders. Their open data is all we used, and the sampling code and any mistakes in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From counters on a map to sampling algorithms',
    intro: 'P1 to Year 14 tells us roughly where to start, and the trial lesson tells us exactly.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Chance, fairness and rules that keep things apart.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to Year 9', h3: 'Vibe coding for kids', p: 'Small games and apps built with an AI and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 10 to 14', h3: 'Python and simulation', p: 'Random numbers, grids and geometry beside CCEA GCSE and A level.', courses: ['python-complete-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Python, data and agents', p: 'Sampling, simulation and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and randomness',
    h2: 'What is Poisson disk sampling, and how do you code it in Python?',
    intro: 'Poisson disk sampling scatters random points so that no two are closer than a set distance; Bridson\'s algorithm codes it by growing outward from existing points and using a background grid to check neighbours quickly.',
    p1: 'Inside the 50.36 hectare outline of Barnett Demesne, a 15 m spacing gave 1,445 points with no pair closer than 15.0 m, while the same number of plain random points had a closest pair 0.2 m apart and 86.0% of them broke the spacing.',
    p2: 'Learners who have coded it ask of any AI-written sampler: what kind of random is this, and did anyone measure the result?',
    closer: 'Measuring what a program really produced is the habit that lets Malone teenagers rely on AI-written code, and Python is where the habit is built.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Upper Malone to Balmoral, by video',
    intro: 'A computer with a webcam and an internet line that can carry video: nothing more is needed.',
    cells: [
      { h3: 'Typed by the learner', p: 'Students write and run the code themselves. Tutors watch the shared screen and ask what each result proves.' },
      { h3: 'The trial sets the plan', p: 'We see what the learner can already do, and note any CCEA exam coming up.' },
      { h3: 'Lesson one is free', p: 'There is no charge, and it ends with the course we would pick.' },
      { h3: 'Who is in a class', p: 'Between five and ten people working at the same level, wherever in the UK they log in from.' },
      { h3: 'Two lessons a week', p: 'None in the school holidays.' },
      { h3: 'A fixed time', p: 'When the clocks change, our tutors adjust and your slot stays where it is.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at the same level who are all free on one evening rarely live within a few streets of each other. Video lets the class form anyway.' }
  },

  fees: {
    h2: 'Malone fees',
    intro: 'Malone learners pay the international prices we charge in every country other than India.',
    first: 'One full lesson free, then our recommendation.',
    group: 'About eight live lessons a month in a small class.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Fees are in US dollars, not sterling. We bill only once the trial has settled a course and a weekly time, and the pricing page sets out what happens with holidays, absences and changes of format.'
  },

  reviewsH2: 'Belfast families and UK learners, in their Google reviews',

  book: {
    h2: 'Book a free Malone lesson',
    intro: 'A P or Year group, or an age, and one interest are all we need. The trial could be a counters-on-a-map game, a Scratch game planned with an AI, a first Python script, or scattering points across a real park outline.',
    success: 'Thank you. Your Malone request has reached us.'
  },

  faq: {
    h2: 'Malone questions',
    intro: 'Random points, the park project, Python, vibe coding and how lessons run.',
    items: [
      { q: 'How many people live in Malone, Belfast?', a: 'NISRA\'s 2021 census gives 4,811 usual residents for Malone ward and 4,974 for Upper Malone ward; the wider Balmoral electoral area has 24,491.' },
      { q: 'Can Malone learners take Python classes online?', a: 'Yes. Lessons are live video calls for ages 6 to 67 in Malone, Balmoral and across Belfast.' },
      { q: 'What is blue noise?', a: 'A pattern of points that is random but evenly spaced, with no clumps and no regular grid. Poisson disk sampling is a common way to make it.' },
      { q: 'Why do truly random points clump?', a: 'Because nothing stops two of them landing close together. In our park test, 86% of plain random points had a neighbour nearer than the 15 m spacing.' },
      { q: 'What is the Malone project?', a: 'Coding Bridson\'s Poisson disk algorithm in Python, filling the OpenStreetMap outline of Barnett Demesne at three spacings and comparing with plain random points.' },
      { q: 'Will my child do vibe coding?', a: 'Yes, whatever their age. They say what the program should do, an AI writes a first version, and they test it.' },
      { q: 'How soon do AI agents appear?', a: 'Not until Python is second nature, so usually sixth form or beyond; Copilot Studio needs private lessons.' },
      { q: 'Do you help with CCEA exams?', a: 'Yes: GCSE Digital Technology, GCSE Maths and the A levels, taught for understanding. No grade is promised.' },
      { q: 'What do lessons cost?', a: 'The trial lesson is free. After it, USD 100 a month in a class or USD 150 a month for private lessons.' },
      { q: 'Do lessons run in the holidays?', a: 'No; they pause, so please send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Belfast and Northern Ireland pages',
    html: 'Each page has its own experiment: <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast</a> (ranking bus stops), <a class="cg-inline-link" href="/ai-and-programming-classes-in-ormeau-belfast">Ormeau</a>, <a class="cg-inline-link" href="/best-coding-class-in-lisburn">Lisburn</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-newtownards">Newtownards</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> link to the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Malone and Belfast',
  footerPlaces: [
    { href: '/best-coding-class-in-belfast', label: 'Belfast' },
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-mal .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-mal .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-mal .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-mal .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mal .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-mal .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-mal .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mal .cg-table th { letter-spacing: 0.04em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-mal .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-mal .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Belfast (N09000003). Northern Ireland Curriculum, P1 to Year 14, CCEA GCSE and A level. NISRA Census 2021 MS-A01: Malone ward 4,811; Upper Malone ward 4,974; Musgrave ward 4,836; Balmoral DEA 24,491. OpenStreetMap place labels in the rectangle: Upper Malone, Lower Malone, Balmoral, Taughmonagh, Stranmillis (suburbs).',
    localProject: 'OSM API 0.6 bbox -5.972,54.552,-5.925,54.590 (9 tiles); park way 554010963 Barnett Demesne, 50.36 ha by our calculation. Bridson Poisson disk (k 30, seed 2026) inside the outline: r 15 m 1,445 points, 52,979 tries, min 15.0 m, median nn 15.9 m; uniform same count min 0.2 m, median 8.9 m, 86.0% closer than r. r 25 m 529 points, 19,247 tries, 25.0 / 26.4; uniform 0.2 / 15.2, 86.4%. r 40 m 218, 8,039, 40.1 / 42.4; uniform 0.6 / 22.8, 87.6%. Lesson family: Poisson disk sampling, blue noise.',
    requiredMentions: [
      '4,974',
      '24,491',
      '50.36',
      '1,445',
      'Upper Malone',
      'Lower Malone',
      'Taughmonagh',
      'Barnett Demesne',
      'Poisson disk',
      'blue noise'
    ],
    sources: [
      { claim: 'OpenStreetMap park outline and place labels in Malone, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'NISRA Census 2021 main statistics table MS-A01, usual resident population by ward and district electoral area.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'CCEA qualifications referred to for Northern Ireland learners.', url: 'https://ccea.org.uk/' }
    ],
    rejectedClaims: [
      'That Barnett Demesne lies in Malone ward, or who owns or manages it: not claimed; it is the largest named park outline in our rectangle.',
      'Real trees, planting plans or facilities in the park: none described; the points are imaginary.',
      'A population for "Malone" as a neighbourhood: only the NISRA ward and DEA figures are given, not added.',
      'Community background, religion or identity data: not used.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
