'use strict';
// Wellingborough (cg- town page, UK cluster Phase 10, towns band B, row 493). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: which part of a network is the tightly
// knit middle, and which part is fringe? (k-core decomposition by peeling.)
// Data (read 30 September 2026): OpenStreetMap via one Overpass query (OSM base 2026-09-30), bounding box
// 52.283,-0.749,52.327,-0.656 (the postcodes.io extent of the Wellingborough place record). Ways tagged highway =
// motorway, trunk, primary, secondary, tertiary, unclassified, residential, living_street or a link road; service roads,
// tracks and paths excluded. 1,769 ways.
// Our run (scratchpad wlb/kc.py): junction graph (nodes = junctions and street ends; pass-through joins merged), largest
// connected piece: 2,236 nodes, 2,572 links. Links per node: 811 with one (dead ends, including roads cut by the box
// edge), 7 with two, 1,355 with three, 61 with four, 2 with five. Peeling nodes with fewer than 2 links took 8 rounds
// (811, 239, 90, 46, 22, 11, 3, 1) and removed 1,223 nodes; the 2-core has 1,013 nodes (45.3%) and 1,349 links (384 nodes
// with two links, 588 with three, 39 with four, 2 with five). Peeling nodes with fewer than 3 links then removed
// everything in 7 rounds (384, 265, 190, 101, 51, 19, 3): the 3-core is empty, so the largest core number is 2.
// Lesson family: k-core decomposition / core number / peeling a graph. Screened: "k-core" and "core number" 0 hits in
// content/; claimed in claims.txt. Kettering (same council area) = cops and robbers pursuit on a street graph; Corby =
// sort comparisons; Northampton and the county page have their own families. Same kind of data as Kettering (OSM
// streets), different town, different question.
// Place facts: North Northamptonshire TS001 359,525. ONS 2021 BUA (published): Wellingborough 54,425. postcodes.io (North
// Northamptonshire) villages: Wilby, Little Irchester (NN8), Finedon (NN9), Great Doddington, Irchester (NN29).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WELLINGBOROUGH', label: 'Wellingborough', blurb: 'Coding and AI classes for Wellingborough, with a graph project that peels the street network layer by layer to find its connected core.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-wellingborough',
  code: 'wlb',
  accent: '#8A2F55',
  accentRationale: 'Wellingborough: a deep mulberry (8.02:1 contrast), chosen by hand to stand apart from recent accents',
  pageType: 'city',
  place: {
    name: 'Wellingborough',
    eyebrow: 'Wellingborough, North Northamptonshire, East Midlands',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'North Northamptonshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-midlands', name: 'East Midlands' }],
  nav: [
    { label: 'Northamptonshire', href: '/coding-classes-in-northamptonshire' },
    { label: 'East Midlands', href: '/coding-and-ai-classes-in-east-midlands' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wellingborough, Northamptonshire',
  title: 'Coding and AI Classes in Wellingborough | Python, Ages 6 to 67',
  description: 'Coding, AI, Python and vibe coding for Wellingborough, Wilby, Finedon and Great Doddington learners aged 6 to 67, live online with a tutor. Free first lesson.',
  ogDescription: 'Coding and AI classes for Wellingborough, with a graph project that finds the k-core of the town street network.',
  twitterDescription: 'Wellingborough coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-structures-algorithms-masterclass-college',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Wellingborough',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Wellingborough and North Northamptonshire, taught live through problems on real networks and data.'
  },

  h1: 'Coding and AI classes in Wellingborough',
  capsuleQ: 'Which are the best coding and AI classes in Wellingborough?',
  capsule: 'Wellingborough\'s built-up area was home to 54,425 people at the 2021 census, according to the ONS, inside the North Northamptonshire council area. Wilby, Little Irchester, Finedon and Great Doddington are villages recorded in the NN8, NN9 and NN29 postcode districts of the same council area. For learners in any of these places aged six to 67, we run coding, AI, Python, vibe coding and maths lessons as live video calls. The tutors are in India, and a learner either has one to themselves or joins five to ten others working at the same level. Our method is to make learners work an idea by hand before a computer or an AI does it for them. The opening lesson is free, and we end it by suggesting a course. Wellingborough\'s project turns the town\'s streets into a network of 2,236 points and strips away its loose ends, round by round, to see what solid middle is left. After that, a group place is USD 100 per month and one-to-one tuition is USD 150 per month.',
  lead: 'Social networks, road maps, the web and the knowledge graphs behind some AI systems are all networks: points joined by links. A common first question about any network is who is central. Counting a point\'s links is the obvious answer and a weak one, because a point can have several links that all lead nowhere. A stronger idea is the k-core: the largest part of the network in which every point has at least k links to other points in that same part. You find it by peeling. Remove every point with too few links, which may leave others with too few, and repeat until nothing more falls off. This project peels the streets of Wellingborough.',
  wa: 'Hello Modern Age Coders, I would like to arrange a free coding or AI lesson for a learner in Wellingborough.',

  picks: {
    eyebrow: 'Starting points',
    h2: 'Wellingborough courses, chosen by age',
    intro: 'Each course opens with a free live lesson. You book it without a card and decide afterwards.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think in steps: maps, mazes and networks solved by hand before any code is written.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children, who plan a Scratch game and keep only the AI suggestions that pass their tests.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python for teenagers up to dictionaries, sets and graphs, with the Wellingborough street network as a project.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Students and adults', note: 'Data structures and algorithms, including graph methods used in search, routing and AI.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Place and numbers',
      h2: 'Wellingborough, Wilby, Finedon and Great Doddington',
      intro: 'Census figures for the town and its council area, and village names from the postcode gazetteer.',
      body: [
        { kind: 'table', caption: 'Wellingborough and North Northamptonshire, Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Wellingborough built-up area', '54,425'],
          ['North Northamptonshire council area', '359,525']
        ] },
        { kind: 'p', text: 'The town figure is the ONS built-up area; the second row is the whole unitary council area, which also contains other towns. They are separate published counts. postcodes.io lists Wilby and Little Irchester as villages in the NN8 district, Finedon in NN9, and Great Doddington and Irchester in NN29, all within North Northamptonshire. Schools here follow the English national curriculum. We place children by school year, Year 2 to Year 13, and can match lessons to GCSE and A level computer science or maths.' },
        { kind: 'callout', h3: 'Northamptonshire pages', p: 'More from the county: <a class="cg-inline-link" href="/coding-classes-in-northamptonshire">coding classes in Northamptonshire</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-kettering">Kettering</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-northampton">Northampton</a>. On why we teach reasoning before tools, see <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Wellingborough project',
      h2: 'k-core decomposition: peeling a street network',
      intro: 'Take away the dead ends, then whatever became a dead end, and keep going.',
      body: [
        { kind: 'p', text: 'With one query to OpenStreetMap, the learner downloads every way tagged as a public road class inside a box around Wellingborough: 1,769 mapped ways, from main roads down to residential streets, leaving out service roads, tracks and footpaths. The program turns them into a network whose points are junctions and street ends. The largest connected piece has 2,236 points and 2,572 links. Counting links at each point gives the first picture.' },
        { kind: 'table', caption: 'Links at each point of the Wellingborough street network, our Python count on OpenStreetMap data', head: ['Links at the point', 'What it is', 'How many'], rows: [
          ['1', 'A dead end', '811'],
          ['2', 'A join between two streets', '7'],
          ['3', 'A three-way junction', '1,355'],
          ['4', 'A crossroads', '61'],
          ['5', 'A five-way junction', '2']
        ] },
        { kind: 'p', text: 'Now the peeling. Round one removes the 811 dead ends. That leaves some junctions with only one link, so round two removes 239 more, round three 90, and so on through eight rounds until every remaining point has at least two links. In all 1,223 points are peeled away. What survives is the 2-core: 1,013 points and 1,349 links, 45.3% of the network. It is the part of the town made of loops, where there is always a second way round. Everything peeled off is a branch: a cul-de-sac, or a whole estate that joins the rest at a single point.' },
        { kind: 'p', text: 'The next step gives the surprising result. There are 1,355 three-way junctions, so a learner expects a healthy 3-core, a region where every junction has three links inside the region. Peeling for three links removes 384 points in the first round, 265 in the second, and after seven rounds nothing is left. The 3-core is empty, and the highest core number anywhere in the network is 2. A junction having three links is a local fact; belonging to a 3-core is a fact about the whole neighbourhood, and the streets do not supply it. One limit to note: roads that leave the box are cut off and counted as dead ends, so points close to the edge are peeled earlier than they would be on a wider map.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Colour a printed street map, crossing out dead ends again and again until only loops remain.' },
          { h3: 'Ages 11 to 15', p: 'Store the network as a Python dictionary and write the loop that peels points with one link.' },
          { h3: 'Ages 15 and up', p: 'Compute every point\'s core number, confirm the 3-core is empty and explain why degree did not predict it.' }
        ] },
        { kind: 'callout', h3: 'Map data credit', p: 'Street data (C) OpenStreetMap contributors, available under the Open Database Licence, read on 30 September 2026. The junction network, the peeling and all counts are our own processing, and they depend on how streets are mapped and on the box we chose.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Networks and AI',
      h2: 'What peeling a network teaches about vibe coding and AI agents',
      intro: 'A point with many links is not always important. Structure has to be computed.',
      body: [
        { kind: 'table', caption: 'From the Wellingborough streets to AI work', head: ['Found in the street network', 'The wider lesson'], rows: [
          ['1,355 junctions had three links', 'A local count is easy and tempting'],
          ['Yet the 3-core was empty', 'Global structure can contradict local counts'],
          ['Removing 811 points exposed 239 more', 'One change can cascade, so loop until stable'],
          ['45.3% of points formed the 2-core', 'Separate the core from the fringe before analysing'],
          ['Box edges created false dead ends', 'Know where your data was cut']
        ] },
        { kind: 'p', text: 'Graph ideas sit underneath a good deal of AI: recommendation systems, fraud detection, knowledge graphs and the way some assistants link facts together. Vibe coding, where you describe software in plain English and an AI writes it, makes it easy to get a k-core function in seconds. It also makes it easy to get one that peels a single round and stops. Wellingborough learners have done the peeling by hand on paper, so they know to test the AI\'s version on a small network with a known answer. An AI agent that explores a network of web pages or documents needs the same awareness of what is core and what is a dead end. Agent projects follow once Python is secure, which for most learners is in the later teenage years or adulthood, and Copilot Studio agents are taught one-to-one only. Continue with <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the Office for National Statistics and postcodes.io are independent of Modern Age Coders. We relied on their open data and take responsibility for everything computed from it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From first steps',
    h2: 'Crossing out dead ends, then coding graphs',
    intro: 'The school year points to a stage. A free lesson checks it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Mazes, maps and repeated rules, worked on paper and in Scratch.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps made with an AI helper under the child\'s direction.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and algorithms', p: 'Dictionaries, sets and graph methods beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Algorithms and AI', p: 'Graph algorithms, machine learning and agents for study or work.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and networks',
    h2: 'What is a k-core, and why does network structure matter for AI?',
    intro: 'A k-core is the largest part of a network in which every point is linked to at least k other points of that part; it matters for AI because systems that rank, recommend or link information need to tell a network\'s dense middle from its fringe.',
    p1: 'In Wellingborough\'s street network of 2,236 points, peeling left a 2-core of 1,013 points, and although 1,355 junctions had three links the 3-core was empty.',
    p2: 'Someone who has seen that result will not take "it has lots of connections" as proof that something is central, in a road map or in an AI\'s knowledge graph.',
    closer: 'Working it through in code is what makes the idea stick, and it is the kind of understanding that keeps Wellingborough teenagers useful alongside AI in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Day to day',
    h2: 'The way Wellingborough lessons run',
    intro: 'All teaching is on a video call. The learner needs a computer with a camera and a quiet enough corner to think in.',
    cells: [
      { h3: 'The student drives', p: 'Code is written by the learner on their own shared screen; the tutor prompts, questions and corrects course.' },
      { h3: 'Start with a real lesson', p: 'We use a free session to see how the learner thinks, then name the course that suits.' },
      { h3: 'No cost, no card', p: 'Trying a lesson commits you to nothing.' },
      { h3: 'Level-matched classes', p: 'Five to ten learners who are all at one stage, joining from around the UK.' },
      { h3: 'Twice weekly', p: 'Through the school term, with Northamptonshire holiday weeks off when you send dates.' },
      { h3: 'A constant UK slot', p: 'Tutors take on the clock change, and your time stays put.' }
    ],
    spec: { title: 'Why this is taught online', p: 'A shared screen lets a tutor see exactly what the learner typed, and an online class can be assembled from learners at one level across the whole country.' }
  },

  fees: {
    h2: 'Fees for Wellingborough learners',
    intro: 'These are the international fees that apply to every learner outside India.',
    first: 'An entire first lesson for free, closing with a course suggestion.',
    group: 'Small group of five to ten, some eight lessons in a month.',
    private: 'A tutor to yourself, some eight lessons in a month.',
    closer: 'Our prices are in US dollars, with no sterling equivalent published. Invoicing starts only when the trial is over and the course and lesson time are chosen. Holiday breaks, missed lessons and changes of format are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from Northamptonshire parents and learners across the UK',

  book: {
    h2: 'Request a free Wellingborough lesson',
    intro: 'Tell us how old the learner is, or their school year, and one thing they are keen on. The trial may be a dead-end puzzle on a map, a Scratch game with an AI helper, a first Python script, or a tiny network stored in code.',
    success: 'Thank you. Your Wellingborough request is in.'
  },

  faq: {
    h2: 'Wellingborough questions and answers',
    intro: 'Networks, the street project, the courses, vibe coding and the practical side.',
    items: [
      { q: 'What is the population of Wellingborough?', a: 'The ONS recorded 54,425 usual residents in the Wellingborough built-up area at the 2021 census. North Northamptonshire as a whole had 359,525.' },
      { q: 'Can I take coding and AI classes from Wellingborough?', a: 'Yes. Lessons are live and online for ages 6 to 67, so Wellingborough, Wilby, Finedon and Great Doddington are all covered.' },
      { q: 'What is a core number?', a: 'A point\'s core number is the largest k for which the point belongs to the k-core. It says how deep inside the network the point sits.' },
      { q: 'What is a graph in computer science?', a: 'A graph is a set of points, called nodes, joined by links, called edges. Road maps, friendships and web pages can all be stored as graphs.' },
      { q: 'What did the Wellingborough project find?', a: 'Of 2,236 points in the street network, 1,013 formed the 2-core after eight rounds of peeling, and no 3-core existed even though 1,355 junctions had three links.' },
      { q: 'Do you teach vibe coding to children?', a: 'Yes. They tell an AI what to build in Scratch or Python and are taught to test and question what comes back.' },
      { q: 'When are AI agents introduced?', a: 'After Python is secure, usually in the later teens or for adults. Copilot Studio agents are taught in one-to-one lessons only.' },
      { q: 'Is this useful for GCSE or A level computer science?', a: 'Yes. Graphs, algorithms and programming are all on those courses. We teach understanding and make no grade promises.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. Then a group place is USD 100 a month and one-to-one lessons are USD 150 a month.' },
      { q: 'What about school holidays?', a: 'Lessons pause for them. Just send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Read on',
    h2: 'Other Northamptonshire towns',
    html: 'Compare projects: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-kettering">Kettering</a> (a pursuit game on a street network), <a class="cg-inline-link" href="/online-coding-and-python-classes-in-corby">Corby</a> (counting comparisons while sorting postcodes) and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-northampton">Northampton</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">East Midlands page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> list more.',
    waLabel: 'Message our team on WhatsApp'
  },

  footerHeading: 'Wellingborough and Northamptonshire',
  footerPlaces: [
    { href: '/coding-classes-in-northamptonshire', label: 'Northamptonshire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wlb .cg-hero-grid { align-items: end; gap: clamp(1.25rem, 3.25vw, 2.9rem); }
.cg-root.cg-wlb .cg-hero h1 { font-weight: 755; letter-spacing: -0.029em; line-height: 1.06; }
.cg-root.cg-wlb .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-wlb .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; }
.cg-root.cg-wlb .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.023em; }
.cg-root.cg-wlb .cg-table caption { font-weight: 600; text-align: left; font-size: 0.89rem; }
.cg-root.cg-wlb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wlb .cg-table th { font-weight: 700; border-bottom: 2px dotted var(--cg-accent); }
.cg-root.cg-wlb .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-wlb .cg-callout { border-radius: 8px; border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'North Northamptonshire (E06000061), Census 2021 TS001 usual residents 359,525. ONS 2021 BUA (published): Wellingborough 54,425. English national curriculum, GCSE and A level. postcodes.io (North Northamptonshire) villages: Wilby, Little Irchester (NN8), Finedon (NN9), Great Doddington, Irchester (NN29).',
    localProject: 'OSM via Overpass (base 2026-09-30), bbox 52.283,-0.749,52.327,-0.656, 1,769 highway ways (motorway to residential, living_street, link roads). Junction graph, largest component: 2,236 nodes, 2,572 links; degree 1: 811, 2: 7, 3: 1,355, 4: 61, 5: 2. Peeling below 2 links: 8 rounds (811, 239, 90, 46, 22, 11, 3, 1), 1,223 removed; 2-core 1,013 nodes (45.3%), 1,349 links. Peeling below 3 links: 7 rounds, nothing left; 3-core empty; largest core number 2. Lesson family: k-core decomposition, core number, peeling.',
    requiredMentions: [
      '54,425',
      '2,236',
      '2,572',
      '1,013',
      'Wilby',
      'Finedon',
      'Great Doddington',
      'Little Irchester',
      'k-core',
      'core number'
    ],
    sources: [
      { claim: 'OpenStreetMap street data via the Overpass API, (C) OpenStreetMap contributors, ODbL.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: Wellingborough extent and villages in North Northamptonshire.', url: 'https://api.postcodes.io/places?q=Wellingborough' }
    ],
    rejectedClaims: [
      'That the 2-core is the town centre or any named district: not claimed; it is a property of the network, not a place.',
      'That Wellingborough streets are more or less looped than another town: not compared, not claimed.',
      'Traffic, congestion or travel times: none used.',
      'That the villages are close to or part of the town: not claimed; they are listed as recorded in the council area.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
