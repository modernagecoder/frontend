'use strict';
// Busselton (cg- regional city page, Australia cluster Phase 7, row 163). Shaped page: general coding for
// teenagers and adults. Spine: how much mapped possum habitat lies inside a box drawn around central
// Busselton, and why do three reasonable rules give three different answers? Data: Department of
// Biodiversity, Conservation and Attractions, Western Ringtail Possum Habitat Suitability (DBCA-049), WA data
// catalogue (CC BY 4.0, package metadata modified 6 October 2026), SLIP Plants_and_Animals MapServer layer 11,
// queried 8 October 2026. Metadata: compiled January 2013 to January 2014 for the southern Swan Coastal Plain
// between Binningup and Dunsborough; vegetation assumed correct as at 2012; no updates planned, areas cleared
// since 2012 not excluded; classes A very high, B high, C medium, D low, E very low, U unsuitable.
// Our code (scratchpad au/r4/bsn_clip.py, bsn_check.py): window 115.320 to 115.370 E, 33.638 to 33.668 S
// (our choice), 4.63 x 3.32 km, 1,536.5 ha; 84 polygons touch it, 16 cut by its edge; whole-polygon rule
// 307.6 ha, centroid rule 161.7 ha, Sutherland-Hodgman clipped 203.1 ha (A 16.0, B 36.2, C 27.0, D 123.7,
// U 0.2); independent 10 m grid count 202.8 ha. Lesson family: Sutherland-Hodgman polygon clipping; screened
// 0 content hits 8 October 2026; claimed by AU-R4. Place facts: ABS Census 2021 QuickStats SUA 5004
// Busselton; WA Department of Education term dates; IANA tz 2026e Australia/Perth, Asia/Kolkata. Excluded by
// the cluster rules: income, rent, ancestry, religion, health. No suburb names verified, so none are used.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'BUSSELTON', label: 'Busselton', blurb: 'Busselton on Geographe Bay, possum habitat maps cut to a box around the town, and the polygon clipping that gets the area right.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-busselton',
  code: 'bsln',
  accent: '#2D639E',
  accentRationale: 'Busselton: a deep bay blue (HSV saturation 0.72, value 0.62, hue 211), set by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, with 4.8:1 or better on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Busselton',
    eyebrow: 'Busselton, Western Australia, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Western Australia', href: '/coding-and-ai-classes-in-western-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Busselton, Western Australia',
  title: 'Best Coding Classes in Busselton | Live Online, Teens and Adults',
  description: 'Live online coding classes for Busselton teens and adults: Python, algorithms and real South West map data, in small groups or one to one. First lesson free.',
  ogDescription: 'Coding classes for Busselton, built around a project that clips WA possum habitat maps to a box drawn around the town.',
  twitterDescription: 'Busselton coding classes for teens and adults, live online with a teacher, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '8 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Busselton Learners',
    description: 'Python, algorithms and geometry with real Western Australian open data, taught live online to teenagers and adults in Busselton and the South West.'
  },

  h1: 'Coding classes in Busselton',
  capsuleQ: 'What are the best coding classes in Busselton?',
  capsule: 'For Busselton teenagers and adults, look for live lessons where a teacher explains each idea and real projects make it stick: Python first, then algorithms and geometry applied to genuine South West data. The 2021 Census counted 40,544 people in the Busselton urban area. We teach online in groups of fifteen to twenty or one to one, with a free first lesson.',
  lead: 'Western Australia\'s conservation department maps where western ringtail possums could live across the coastal plain from Binningup to Dunsborough, sorting the bush into classes from very high suitability to unsuitable. Draw a rectangle around central Busselton and ask a simple question: how many hectares of mapped habitat are inside it? Count every patch the box touches and you get one answer. Count only patches whose centre falls inside and you get another. Cut each patch exactly at the box edge and you get the right one. The gap between the three is almost 150 hectares, and the algorithm that closes it fits on one screen.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Busselton.',

  picks: {
    eyebrow: 'Courses for Busselton',
    h2: 'Four places Busselton learners begin',
    intro: 'Every option below is taught live. The trial lesson, which needs no card to book, shows which suits the learner.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the very first line, through loops and functions to programs that read and draw real map data.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 17', note: 'Algorithms and data structures for teenagers, taught by breaking real problems into steps.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'A complete Python path for adults, from basics to clean, tested, larger programs.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Adults', note: 'Classic algorithms, including geometric ones, with attention to correctness and cost.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Busselton by the numbers',
      h2: 'An older, spread-out urban area on Geographe Bay',
      intro: 'The statistics bureau\'s Busselton Significant Urban Area covers 1,423.3 square kilometres. These are its 2021 Census results.',
      body: [
        { kind: 'table', caption: 'Busselton urban area, Census 2021', head: ['Count', 'Value'], rows: [
          ['Residents', '40,544'],
          ['Median age', '45'],
          ['Families', '11,044'],
          ['Private dwellings', '21,202'],
          ['People per household, on average', '2.5']
        ] },
        { kind: 'table', mt: true, caption: 'Busselton next to Western Australia and Australia', head: ['Measure', 'Busselton', 'WA', 'Australia'], rows: [
          ['Occupied homes that are separate houses', '13,208 (88.3%)', '79.7%', '72.3%'],
          ['Occupied homes that are flats or apartments', '74 (0.5%)', '6.5%', '14.2%'],
          ['Residents aged 20 to 24', '1,390 (3.4%)', '6.0%', '6.2%'],
          ['Residents aged 10 to 14', '2,944 (7.3%)', '6.4%', '6.2%'],
          ['Employed residents who are technicians or trades workers', '3,380 (17.9%)', '15.3%', '12.9%'],
          ['Aged 15 and over with a bachelor degree or above', '5,802 (17.6%)', '23.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Children, then a gap', p: 'Ages 10 to 14 make up 7.3% of residents, but people aged 20 to 24 only 3.4%, close to half the national share.' },
          { h3: 'Almost no apartments', p: 'Just 74 occupied flats or apartments were counted, 0.5% of homes, against 6.5% across WA.' },
          { h3: 'A trades town', p: 'Technicians and trades workers are 17.9% of the employed, above the state and national figures.' }
        ] },
        { kind: 'p', text: 'Small counts in the Census are adjusted at random to protect privacy, so parts can differ a little from totals. We copy the bureau\'s published figures exactly.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How much possum habitat is inside the box?',
      intro: 'One window, 84 habitat patches and three ways of counting them. Only one is geometry; the other two are guesses.',
      body: [
        { kind: 'table', caption: 'Our window around central Busselton (chosen by us, measured by our code)', head: ['Item', 'Value'], rows: [
          ['Window edges', '115.320 to 115.370 east, 33.638 to 33.668 south'],
          ['Size', '4.63 km by 3.32 km, 1,536.5 ha'],
          ['Habitat patches touching the window', '84'],
          ['Patches cut by the window edge', '16']
        ] },
        { kind: 'table', mt: true, caption: 'Mapped habitat inside the window under three counting rules (our calculation, DBCA-049 layer read 8 October 2026)', head: ['Rule', 'Hectares counted'], rows: [
          ['Count the whole patch if it touches the window', '307.6 ha'],
          ['Count the whole patch only if its centre is inside', '161.7 ha'],
          ['Clip each patch at the window edge (Sutherland-Hodgman)', '203.1 ha'],
          ['Check: count 10 m grid cells inside both', '202.8 ha']
        ] },
        { kind: 'table', mt: true, caption: 'The clipped 203.1 ha by habitat suitability class', head: ['Class', 'Meaning in the dataset', 'Clipped area'], rows: [
          ['A', 'Very high', '16.0 ha'],
          ['B', 'High', '36.2 ha'],
          ['C', 'Medium', '27.0 ha'],
          ['D', 'Low', '123.7 ha'],
          ['U', 'Unsuitable', '0.2 ha']
        ] },
        { kind: 'callout', h3: 'One shortcut adds half again, the other drops a fifth', p: 'Counting whole patches that touch the box adds 104.5 ha the box does not contain. Counting by centre point drops 41.4 ha that it does. Neither error is random: both come from the 16 patches the edge cuts through, which are exactly the ones a careless program mishandles.' },
        { kind: 'p', text: 'The department notes that the map shows vegetation as it stood in 2012 and that areas cleared since then have not been removed, so these are mapped hectares, not a survey of today\'s bush. All window figures are our own, from data used under Creative Commons Attribution 4.0.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'The algorithm',
      h2: 'Clipping one edge at a time',
      intro: 'Sutherland-Hodgman cuts a polygon against a rectangle in four passes, one per side.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Pick a side', p: 'Take the left edge of the window. Walk round the patch outline, one corner after another.' },
          { h3: 'Keep or cut', p: 'Keep corners on the inside. Where the outline crosses the edge, add the crossing point. Drop corners outside.' },
          { h3: 'Repeat four times', p: 'Feed the result into the right, bottom and top edges in turn. What survives is the patch inside the window.' }
        ] },
        { kind: 'p', text: 'Then the shoelace formula gives the clipped area from the corner coordinates. Because the method is short, we test it against something completely different: a grid of 10 metre squares, counting those whose centres fall in both the window and a patch. The two agree to 0.3 ha out of 203, which is how you know the clipping code is right rather than just plausible.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Clip a triangle against a square on paper, then turn each step into a Python function and test it on one real patch.' },
          { h3: 'University students', p: 'Prove why the method needs a convex window, then compare it with general clipping algorithms used in GIS software.' },
          { h3: 'Adults', p: 'Learn how boundary rules quietly change totals in reports, and how to state which rule a figure used.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no tie to the Department of Biodiversity, Conservation and Attractions, the WA Government, the City of Busselton or the statistics bureau. The Census figures are the bureau\'s; the window, clipping, totals and grid check are our own work.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Busselton calendar',
      h2: 'WA school terms and Perth time',
      intro: 'Two things to know when choosing a lesson slot from Busselton.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Rest of 2026', p: 'The WA Department of Education lists Term 4 of 2026 from Monday 12 October to Thursday 17 December.' },
          { h3: 'First term of 2027', p: 'Term 1 of 2027 runs from Monday 1 February to Friday 9 April.' },
          { h3: 'No clock change', p: 'Western Australia keeps the same time all year, so Busselton is always two and a half hours ahead of India time.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first programs to geometry that holds up',
    intro: 'Ages are a starting guess; the trial lesson places each learner properly.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Shapes in code', p: 'Python that stores corners as lists, draws polygons and works out their areas.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Algorithms', p: 'Step-by-step methods like clipping, with tests that prove each one works on hard cases.', courses: ['problem-solving-dsa-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'University', h3: 'Spatial computing', p: 'Computational geometry, spatial data formats and the cost of running algorithms on large maps.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Working with public data', p: 'Fetching, cleaning and summarising government datasets, and writing down every assumption.', courses: ['data-analysis-mastery-course-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool can write a clipping function. Why should a Busselton learner learn one?',
    intro: 'Because AI-written geometry code often handles the easy patches and quietly gets the edge cases wrong, and those edge cases carry the whole answer here.',
    p1: 'Ask an AI assistant for the habitat inside a box and you may get code that tests whether each patch overlaps the box and then adds up whole patches: the 307.6 ha answer. It runs, prints a number and looks finished. Only someone who knows what clipping should do will ask whether the 16 cut patches were handled properly.',
    p2: 'We teach Busselton learners to use AI helpers and to check them. Write the clipping by hand once, test it against an independent method such as the grid count, then compare it with what an assistant produces. The habit carries into every kind of code.',
    closer: 'An AI tool can draft code quickly; checking it is still a human job, and a skill employers notice.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live lessons for Busselton, online',
    intro: 'Every class runs on a video call, so living in the South West makes no difference.',
    cells: [
      { h3: 'Learn from home', p: 'Join from a home computer; there is no drive up to Bunbury or Perth for a class.' },
      { h3: 'WA school years', p: 'Teachers work with WA year levels and plan around the four WA terms. All teaching is in English.' },
      { h3: 'A proper trial', p: 'The first lesson is free and real, and ends with a recommended course and a weekly time.' },
      { h3: 'Right-sized groups', p: 'Groups hold fifteen to twenty learners at a similar level, drawn from Busselton and further afield.' },
      { h3: 'Twice a week', p: 'Two live lessons each week, about eight a month, at a fixed time set after the trial.' },
      { h3: 'Teachers in India', p: 'Our teachers are two and a half hours behind Busselton all year, because neither place changes its clocks.' }
    ],
    spec: { title: 'One fixed gap', p: 'With no daylight saving at either end, a Busselton lesson time never moves between summer and winter.' }
  },

  fees: {
    h2: 'Busselton coding class fees',
    intro: 'Three lines cover the whole price list.',
    first: 'The first lesson is free and ends with a course, level and weekly time recommended.',
    group: 'A month of group lessons, typically eight, alongside fifteen to twenty learners at your stage.',
    private: 'Around eight one-to-one lessons a month with a dedicated teacher.',
    closer: 'Outside India fees are in US dollars, the same for Busselton as for any Australian town. There is no charge until after the trial, when a course and a slot are fixed; the pricing page sets out holidays, missed classes and changing between group and private.'
  },

  reviewsH2: 'Google reviews from our learners and parents',

  book: {
    h2: 'Book a free coding lesson in Busselton',
    intro: 'Tell us the learner\'s age and interests. A beginner might start by drawing shapes in Python; someone further along might go straight to clipping the habitat map.',
    success: 'Thank you. We will be in touch shortly about a Busselton lesson.'
  },

  faq: {
    h2: 'Busselton coding questions',
    intro: 'Answers for families and adults in the South West.',
    items: [
      { q: 'What is polygon clipping?', a: 'Polygon clipping cuts a shape so that only the part inside a chosen boundary, such as a rectangle, remains. Sutherland-Hodgman does it by trimming the shape against each edge of the boundary in turn.' },
      { q: 'What does the Busselton project show?', a: 'Inside a 1,536.5 ha window around central Busselton, mapped western ringtail possum habitat totals 203.1 ha when patches are clipped properly, but 307.6 ha if whole touching patches are counted and 161.7 ha if patches are counted by their centre point.' },
      { q: 'How many people live in Busselton?', a: 'The Busselton urban area had 40,544 residents at the 2021 Census, with a median age of 45.' },
      { q: 'Is the habitat map up to date?', a: 'The department describes it as vegetation as at 2012 and says areas cleared since then have not been removed, so it is used here as a mapping exercise, not a current survey.' },
      { q: 'Do you support WA senior school students?', a: 'Yes, with the programming and maths behind senior WA courses, timed around WA terms. Assessed school work always stays the student\'s own.' },
      { q: 'When can Busselton learners have lessons?', a: 'After-school weekday slots and Saturday mornings are usual. The time is agreed at the trial and always given in WA time.' },
      { q: 'Do you teach young children?', a: 'Yes. Live classes start at age six with Scratch; the habitat clipping project is aimed at teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Busselton?', a: 'No. We have no premises anywhere in Australia and claim none. All lessons are live online; learners need a computer with sound and good internet, and our listed phone number is Indian.', boiler: true },
      { q: 'What do Busselton coding classes cost?', a: 'The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Nothing is charged before the plan is agreed.', boiler: true },
      { q: 'How big are your groups?', a: 'Between five and ten learners, grouped by level and goals rather than by age or town. When no group time suits, one-to-one lessons are available.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'Keep reading from the South West',
    html: 'The state overview is <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">coding and AI classes in Western Australia</a>, and the nearest city page is <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-bunbury">vibe coding and AI agents in Bunbury</a>. Families preparing for selective entry can try <a class="cg-inline-link" href="/wa-gate-aset-maths-practice">WA GATE ASET maths practice</a>. Every Australian page is on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Busselton and Western Australia',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/vibe-coding-and-ai-agents-classes-in-bunbury', label: 'Bunbury' },
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-bsln .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.4vw, 2.6rem); }
.cg-root.cg-bsln .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-bsln .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-bsln .cg-eyebrow { letter-spacing: 0.16em; font-weight: 600; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-bsln .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.01em; }
.cg-root.cg-bsln .cg-grid-3 { gap: clamp(1.05rem, 2.6vw, 2rem); }
.cg-root.cg-bsln .cg-table caption { font-weight: 600; text-align: left; color: var(--cg-accent); }
.cg-root.cg-bsln .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-bsln .cg-ladder-col { background: rgba(45, 99, 158, 0.045); padding: 1rem; }
.cg-root.cg-bsln .cg-callout { border-left: 4px solid var(--cg-accent); }
`,

  dossier: {
    curriculumAuthority: 'Busselton, ABS Census 2021 QuickStats, Significant Urban Area 5004 (read 8 October 2026), area 1,423.3 square kilometres: 40,544 people; median age 45; 11,044 families; 21,202 private dwellings; average 2.5 people per household; separate house 13,208 (88.3 percent; WA 79.7; Australia 72.3); flat or apartment 74 (0.5 percent; WA 6.5; Australia 14.2); aged 20 to 24 1,390 (3.4 percent; WA 6.0; Australia 6.2); aged 10 to 14 2,944 (7.3 percent; WA 6.4; Australia 6.2); Technicians and Trades Workers 3,380 (17.9 percent; WA 15.3; Australia 12.9); Bachelor Degree level and above 5,802 (17.6 percent; WA 23.8; Australia 26.3). WA Department of Education term dates: 2026 Term 4 Monday 12 October to Thursday 17 December; 2027 Term 1 Monday 1 February to Friday 9 April. IANA tz 2026e: Australia/Perth UTC+8 with no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Sutherland-Hodgman polygon clipping. Department of Biodiversity, Conservation and Attractions, Western Ringtail Possum Habitat Suitability (DBCA-049), WA data catalogue, Creative Commons Attribution 4.0, package metadata modified 2026-10-06; SLIP Plants_and_Animals MapServer layer 11 queried 8 October 2026. Metadata: southern Swan Coastal Plain between Binningup and Dunsborough; beginning January 2013, ending January 2014; vegetation assumed correct as at 2012; no maintenance planned, areas cleared since 2012 not excluded; HAB_SUITAB A very high, B high, C medium, D low, E very low, U unsuitable. Window (our choice) 115.320 to 115.370 E, 33.638 to 33.668 S, equirectangular about 33.653 S: 4.63 by 3.32 km, 1,536.5 ha. 84 polygons touch the window, 16 cut by its edge. Whole touching polygons 307.6 ha; centroid inside 161.7 ha; clipped 203.1 ha (A 16.0, B 36.2, C 27.0, D 123.7, U 0.2). Independent 10 m grid count 202.8 ha (A 15.9, B 36.1, C 27.0, D 123.6, U 0.2).',
    requiredMentions: [
      '40,544',
      '11,044',
      '21,202',
      '13,208',
      '1,423.3 square kilometres',
      '1,536.5 ha',
      '307.6 ha',
      '161.7 ha',
      '203.1 ha',
      'Binningup'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Busselton Significant Urban Area (5004): people, median age, families, dwellings, dwelling structure, age, occupation, education, area.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/5004' },
      { claim: 'DBCA, Western Ringtail Possum Habitat Suitability (DBCA-049), Creative Commons Attribution 4.0, with metadata on currency and classes.', url: 'https://catalogue.data.wa.gov.au/dataset/western-ringtail-possum-habitat-suitability' },
      { claim: 'SLIP Plants_and_Animals map service, layer 11, used to read the polygons.', url: 'https://public-services.slip.wa.gov.au/public/rest/services/SLIP_Public_Services/Plants_and_Animals/MapServer/11' },
      { claim: 'WA Department of Education, future term dates.', url: 'https://education.wa.edu.au/future-term-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Perth.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Possum population numbers, conservation status or sightings: not part of the habitat suitability dataset, so none are stated.',
      'Present-day vegetation inside the window: the metadata says clearing since 2012 is not removed, so only mapped hectares are reported.',
      'Suburb or locality names for Busselton: none were verified inside the urban area for this page, so none are named.',
      'Weather or coastal hazard figures: Bureau of Meteorology pages returned 403 to automated reads and were not circumvented.',
      'Income, rent, ancestry, religion and health figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with DBCA, the WA Government, the City of Busselton or the ABS.'
    ]
  }
};
