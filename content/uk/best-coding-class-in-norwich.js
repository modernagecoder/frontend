'use strict';
// Norwich (cg- city page, UK cluster Phase 4). Spine: clustered or evenly spaced? It depends on the frame.
// Point pattern analysis of Norwich's Grade I churches with the Clark-Evans nearest-neighbour ratio: Historic
// England National Heritage List for England, Listed Building points (ArcGIS NHLE_v02_VIEW layer 0, OGL, read 22
// September 2026), clipped to ONS LAD DEC 2025 BFC E07000148 (scratchpad nor/ce.py). 1,037 list entries (850 II,
// 125 II*, 62 I). Grade I entries whose names contain church, cathedral or chapel (excluding farm, house, chambers,
// hall adjacent): 34. Whole council area 39.00 km2: mean nearest-neighbour distance 243 m against 535 m expected
// under complete spatial randomness, R = 0.453, z = -6.10; Monte Carlo (499 random layouts in the council area):
// simulated mean 609 m, none as small as observed. Convex hull of the churches, 4.39 km2: expected 180 m, R = 1.351,
// z = +3.91; Monte Carlo in the hull: simulated mean 200 m, about 2 percent of layouts as spread out as observed.
// All 62 Grade I entries: council area R = 0.383 (z -9.30), hull 5.47 km2 R = 1.022 (z +0.32, indistinguishable
// from random). Closest church pair: All Saints Church and Church of St John Baptist, 51 m; median nearest-church
// distance 134 m; farthest a Church of St Mary 3,294 m from any other Grade I church.
// Lesson family: point pattern analysis (Clark-Evans ratio, complete spatial randomness, Monte Carlo envelopes,
// the study-area problem). Screened 22 September 2026: Clark-Evans and spatial randomness 0 hits; the convex hull
// here is only a study frame, distinct from the Nottingham hull algorithm page.
// Place facts read raw 22 September 2026: Census 2021 via Nomis, Norwich E07000148: TS001 143,922 usual residents,
// 137,487 in households, 6,435 in communal establishments; TS007A 10,263 aged 15 to 19 (7.1 percent, England 5.7),
// 16,471 aged 20 to 24 (11.4, England 6.0), 12,061 aged 25 to 29 (8.4, England 6.6); TS068 35,161 students of
// 136,992 aged 5 and over (25.7 percent, England 20.4); TS006 3,688.2 usual residents per square km (England
// 433.5). Norwich Cathedral, Our story and Cathedral highlights: founded 1096 by Herbert de Losinga, the first
// Bishop of Norwich; the spire has risen above the city for over 900 years; the most complete Norman Cathedral in
// England, the second tallest spire; the largest collection of medieval roof bosses in the world. Norwich Castle
// museum pages returned 403.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'NORWICH', blurb: 'The fine city, with a project that asks whether its medieval churches are clustered or evenly spaced, and finds that the answer depends on the frame.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-norwich',
  code: 'nor',
  accent: '#775522',
  accentRationale: 'Norwich: a dark mustard from the solver (5.49:1 on every paper tint, dE 7.5 from the nearest used accent), warmer than the Hull olive and well clear of the brand amber',
  pageType: 'city',
  place: {
    name: 'Norwich',
    eyebrow: 'Norwich, Norfolk',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Norwich' },
      { type: 'AdministrativeArea', name: 'Norfolk' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Norwich, England',
  title: 'Best Coding Classes in Norwich | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Norwich learners aged 6 to 67, from Eaton and Thorpe Hamlet to Mile Cross. Your first lesson is free.',
  ogDescription: 'Coding and AI lessons for Norwich, on a page that tests whether 34 Grade I churches are clustered or evenly spaced, and shows the answer flip with the frame.',
  twitterDescription: 'Norwich learners from six to sixty-seven can learn coding, Python and AI with us live online. The first lesson costs nothing.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '22 September 2026',
  courseSchema: {
    name: 'Norwich Online Coding, Maths and AI Lessons',
    description: 'Live online coding, Python, statistics, AI and mathematics lessons for Norwich children, teenagers and adults, taught in English in small level-matched groups or one to one.'
  },

  h1: 'Coding classes in Norwich',
  capsuleQ: 'What are the best coding classes in Norwich?',
  capsule: 'Census 2021 found 143,922 usual residents in Norwich, and 11.4% of them were aged 20 to 24, against 6.0% across England. Norwich Cathedral was founded in 1096 by Herbert de Losinga, the first Bishop of Norwich. Modern Age Coders teaches Norwich learners aged six to sixty-seven in live online lessons, either one to one or in a group of five to ten matched by level, with teachers in India and lesson times set in UK hours. The first lesson is free; after that a group place costs USD 100 a month and one-to-one teaching USD 150 a month.',
  lead: 'Historic England lists 34 Grade I churches, chapels and cathedral buildings inside Norwich. Are they clustered or evenly spaced? Measure each one\'s distance to its nearest neighbour and compare the average with what random scattering would give. Across the whole council area the churches sit far closer together than random, a ratio of 0.453, strongly clustered. Draw the frame tightly around the churches themselves and the same 34 points become more evenly spaced than random, a ratio of 1.351, and in 499 random layouts only about one in fifty spread out as much. Nothing about the churches changed. Only the frame did. Our teenagers learn to run the test, and to say which frame they chose.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Norwich.',

  picks: {
    eyebrow: 'Course picks for Norwich',
    h2: 'Four courses for the fine city',
    intro: 'Choose by the learner\'s interests. Each course opens with a free live lesson, and booking never needs a card.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', band: 'Ages 6 to 11', note: 'Measuring, averaging and comparing from the first years of school, with maps and distances that children can check with a ruler.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real datasets in Python, including coordinates, distances and the simulations that test whether a pattern is real.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 13 to 18', note: 'Secondary maths in depth: statistics, probability and the geometry of distance that point patterns depend on.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'Data science for adults, from reading spatial data to simulation-based tests that make no convenient assumptions.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Norwich today',
      h2: 'A young city inside a tight boundary',
      intro: 'Figures from Census 2021 for the Norwich council area, taken from Nomis and printed exactly as the Office for National Statistics released them.',
      body: [
        { kind: 'table', caption: 'Norwich, Census 2021', head: ['Measure', 'Norwich', 'England'], rows: [
          ['Usual residents', '143,922', '56,490,048'],
          ['Living in households', '137,487', 'Not compared'],
          ['Living in communal establishments', '6,435', 'Not compared'],
          ['Aged 15 to 19', '10,263 (7.1%)', '5.7%'],
          ['Aged 20 to 24', '16,471 (11.4%)', '6.0%'],
          ['Aged 25 to 29', '12,061 (8.4%)', '6.6%'],
          ['Students among residents aged 5 and over', '35,161 (25.7%)', '20.4%'],
          ['Usual residents per square kilometre', '3,688.2', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Twenty-somethings', p: 'Residents aged 20 to 24 made up 11.4% of Norwich in 2021, and those aged 25 to 29 another 8.4%, both well above the English shares.' },
          { h3: 'More than a quarter studying', p: 'Of 136,992 residents aged five and over, 35,161 were at school or in full-time study, 25.7% against 20.4% for England.' },
          { h3: 'A city drawn tight', p: 'The council boundary hugs the built-up city, so its 3,688.2 residents per square kilometre is high for a place of its size, and suburbs such as Sprowston fall outside it.' }
        ] },
        { kind: 'p', text: 'Our Norwich classes reflect that range. A Year 2 child in Eaton might be learning to measure and compare, a Year 11 student in Lakenham revising for GCSE Computer Science, and a graduate in Thorpe Hamlet learning Python for a data role, each in a small group at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Stone and spire',
      h2: 'A Norman cathedral and a city of churches',
      intro: 'From Norwich Cathedral\'s own account of its story and highlights.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1096', p: 'The Cathedral says it was founded that year by Herbert de Losinga, the first Bishop of Norwich, beginning as a Benedictine monastery.' },
          { h3: 'The spire', p: 'For over 900 years its spire has risen above the city skyline, and the Cathedral describes it as the second tallest spire.' },
          { h3: 'Roof bosses', p: 'The Cathedral calls itself the most complete Norman cathedral in England, and holds what it describes as the largest collection of medieval roof bosses in the world.' }
        ] },
        { kind: 'p', text: 'We have no connection with Norwich Cathedral. It opens this page because the cathedral is one of 34 Grade I church buildings in the city, alongside parish churches such as St Peter Mancroft, St Michael Coslany and St Stephen. A city with that many old churches invites a simple question that turns out to need statistics to answer: were they placed in clumps, at random, or at a steady spacing?' },
        { kind: 'spec', title: 'Where the points come from', p: 'Historic England publishes the National Heritage List for England as open data under the Open Government Licence. Inside the Norwich boundary it has 1,037 list entries: 850 at Grade II, 125 at Grade II* and 62 at Grade I. Of the 62, those named as a church, chapel or cathedral number 34.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Are Norwich\'s churches clustered or evenly spaced?',
      intro: 'The Clark-Evans ratio divides the average nearest-neighbour distance by the distance randomness would produce. Below 1 means clustered, above 1 means evenly spaced.',
      body: [
        { kind: 'table', caption: 'Nearest-neighbour tests on Norwich\'s Grade I list entries, with two choices of study area', head: ['Points', 'Study area', 'Observed', 'Random would give', 'Ratio'], rows: [
          ['34 churches', 'Whole council area, 39.00 km2', '243 m', '535 m', '0.453, clustered'],
          ['34 churches', 'Tight outline round the churches, 4.39 km2', '243 m', '180 m', '1.351, evenly spaced'],
          ['All 62 Grade I entries', 'Whole council area', '152 m', '397 m', '0.383, clustered'],
          ['All 62 Grade I entries', 'Tight outline round the points, 5.47 km2', '152 m', '149 m', '1.022, close to random']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Measure the gaps', p: 'For each church, find the nearest other church. The average is 243 metres, the median 134, and the closest pair, All Saints and St John Baptist, stand 51 metres apart.' },
          { h3: '2. Ask what chance gives', p: 'Scatter 34 points at random over the same area, many times, and average their gaps. That is the yardstick, and it depends entirely on the size and shape of the area.' },
          { h3: '3. Simulate, do not assume', p: 'The textbook formula ignores edges. So learners also run 499 random layouts inside each frame and see where the real churches fall among them.' }
        ] },
        { kind: 'callout', h3: 'The frame is part of the answer', p: 'Over the whole council area, none of 499 random layouts had gaps as small as the real churches: they are clustered in the old centre. Inside the tight outline, only about 2% of random layouts were as evenly spread: within the old city they keep their distance from one another. Both statements are true. A report that gives one ratio without its frame hides the question it actually answered.' },
        { kind: 'p', text: 'The two results fit what a city of parish churches would look like. Churches were built close together in the medieval centre, which is why they cluster against the modern boundary, and each served its own parish, which is why, among themselves, they keep a steady spacing. The statistics cannot prove that story, but they can rule out the idea that the churches are simply scattered at random.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Patterns in points',
      h2: 'Five questions before calling a pattern real',
      intro: 'Learned on churches, then used on trees, shops, stars in a telescope image, cells under a microscope and any map of dots.',
      body: [
        { kind: 'table', caption: 'Testing a point pattern honestly', head: ['Question', 'For the Norwich churches', 'What it prevents'], rows: [
          ['What is a point?', '34 Grade I entries named as churches, chapels or the cathedral', 'Mixing buildings with walls, gates and houses'],
          ['What is the frame?', 'Council area and tight outline, both reported', 'Choosing the frame that gives the answer you wanted'],
          ['What is random here?', 'Uniform scatter inside the same frame', 'A yardstick that does not match the map'],
          ['What about the edges?', 'Simulations inside the frame, not only the formula', 'Edge points with no neighbour beyond the boundary'],
          ['How surprising is it?', 'Compared with 499 random layouts', 'Reading meaning into a ratio that chance often produces']
        ] },
        { kind: 'p', text: 'All 62 Grade I entries tell a quieter story. Inside their own outline, their ratio is 1.022, which random scattering produces easily. Adding castle buildings, gatehouses, museums and offices to the churches blurs the steady spacing that the churches alone show, and learners see how the choice of what counts as a point can switch a result off.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Dropping counters on a map, measuring each one\'s nearest neighbour with a ruler, and comparing with the real churches.' },
          { h3: 'Teenagers', p: 'The heritage list in Python, a nearest-neighbour search, the Clark-Evans ratio and a simulation envelope for each frame.' },
          { h3: 'Adults', p: 'Spatial statistics for work with locations of any kind, reported with the frame, the definition and the test used.' }
        ] },
        { kind: 'p', text: 'We have no connection with Historic England, Norwich Cathedral or Norwich City Council. The heritage list and boundaries are open data under the Open Government Licence, and the census figures are public; the distances, ratios and simulations are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counters on a map to a spatial test',
    intro: 'The age bands are only a starting guess. The free lesson settles the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Near and far', p: 'Measuring gaps between points on a map, finding the nearest one each time, and averaging the results.', courses: ['elementary-mathematics-complete-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Random or not?', p: 'Scattering random points in code, comparing them with a real map, and asking which looks more even.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Point pattern tests', p: 'Nearest-neighbour search, the Clark-Evans ratio and Monte Carlo envelopes on real heritage data.', courses: ['data-science-course-for-teens-python-data', 'complete-high-school-mathematics-mastery'] },
      { band: 'Ages 18 to 67', h3: 'Spatial statistics', p: 'Clustering tests, study areas and simulation for adults who work with locations and maps.', courses: ['data-science-complete-masterclass-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool will call a pattern clustered in seconds. Why should a Norwich teenager check the frame?',
    intro: 'Because the tool will not tell you that a different frame gives the opposite answer.',
    p1: 'Ask an assistant whether these churches are clustered and it may compute a ratio over whatever area it assumes and report a confident verdict. A learner who has run the test both ways knows that 0.453 and 1.351 come from the same 34 points, and knows to ask which area, which points and which yardstick before believing either.',
    p2: 'The same trap waits in machine learning. A model evaluated on one slice of data can look excellent and fail on another, and a clustering algorithm will find groups in data that has none. Simulation against a fair random baseline is the habit that protects against both, and it is easiest to learn on a map of places the learner can walk past.',
    closer: 'So a Norwich teenager should still learn to program in 2026, in a city whose cathedral has stood since 1096: the computer does the measuring in a second, and the judgement about what was measured is still ours.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Earlham, Sewell or Lakenham, from home',
    intro: 'A trip across Norwich after school can eat an evening. Live online lessons keep that time for learning.',
    cells: [
      { h3: 'Both banks of the Wensum', p: 'A learner in Mile Cross and another in Thorpe Hamlet can share the same lesson without crossing the river.' },
      { h3: 'Stages Norwich schools use', p: 'Reception, Key Stages 1 to 4, GCSE options and A levels, called by the names Norwich schools use, and taught in English throughout.' },
      { h3: 'A free lesson that counts', p: 'The first session teaches something real, then recommends a level, a course and a weekly time. There is no card to enter.' },
      { h3: 'Grouped by level', p: 'Groups of five to ten learners at one stage, from Norwich, other parts of the UK and overseas, so every level finds a time that works.' },
      { h3: 'A fixed weekly pair', p: 'Two set lessons each week, about eight a month, with school holidays and exam weeks arranged with the teacher ahead of time.' },
      { h3: 'Clocks in two countries', p: 'India stays on one time all year, four and a half hours ahead of Norwich in British Summer Time and five and a half in winter, keeping UK after-school and evening lessons within the teaching day.' }
    ],
    spec: { title: 'Across Norfolk', p: 'Families in Wymondham, Aylsham, Dereham or Sprowston join exactly the same classes, because every lesson is online and groups are formed by level.' }
  },

  fees: {
    h2: 'Norwich lesson fees',
    intro: 'The first lesson costs nothing, then there is one monthly fee.',
    first: 'A complete lesson at no charge, closing with a recommended level, course and weekly time.',
    group: 'About eight live lessons each month in a group of five to ten learners at one stage.',
    private: 'About eight live lessons each month, with a teacher focused on your learner alone.',
    closer: 'Families everywhere outside India pay the same US dollar fee, from Tuckswood to Catton Grove, and we do not show prices in pounds. We charge nothing until the free lesson has agreed a course and a slot; the pricing page explains pausing, missed lessons and switching between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews from families, left unedited',

  book: {
    h2: 'Book a free lesson for a Norwich learner',
    intro: 'The first task depends on the learner: a counters-on-a-map game for a young child, a short Python program that measures distances for a beginner, or the heritage list and a Clark-Evans test for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Norwich learner.'
  },

  faq: {
    h2: 'Norwich coding class questions',
    intro: 'The questions Norwich families ask us most.',
    items: [
      { q: 'How many people live in Norwich?', a: 'Census 2021 counted 143,922 usual residents in the Norwich council area: 137,487 living in households and 6,435 in communal establishments such as student halls and care homes.' },
      { q: 'How does Norwich compare with England?', a: 'In 2021, 11.4% of residents were aged 20 to 24 against 6.0% in England, 25.7% of those aged five and over were students against 20.4%, and there were 3,688.2 residents per square kilometre against 433.5.' },
      { q: 'What is the Clark-Evans ratio?', a: 'The average distance from each point to its nearest neighbour, divided by the average that random scattering over the same area would give. Values below 1 suggest clustering and values above 1 suggest even spacing.' },
      { q: 'So are Norwich\'s churches clustered?', a: 'Against the whole council area, yes: a ratio of 0.453. Within a tight outline around the churches themselves, they are more evenly spaced than random, 1.351. Both are true; they answer different questions.' },
      { q: 'Where does the church data come from?', a: 'Historic England\'s National Heritage List for England, published as open data under the Open Government Licence. Norwich has 62 Grade I list entries, 34 of them named as churches, chapels or the cathedral.' },
      { q: 'How old is Norwich Cathedral?', a: 'The Cathedral says it was founded in 1096 by Herbert de Losinga, the first Bishop of Norwich, and that its spire has risen above the city for over 900 years. We are not connected with the Cathedral.' },
      { q: 'When do Norwich lessons run?', a: 'Weekday afternoons, evenings or weekends, at a UK time chosen during the free lesson. India is four and a half hours ahead of Norwich in summer and five and a half hours ahead in winter.' },
      { q: 'Is there a Modern Age Coders centre in Norwich?', a: 'No. There is no Norwich centre and we have no premises anywhere in the UK, since all teaching is live online. A learner needs a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Norwich lessons cost?', a: 'The first lesson is free. Afterwards, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Norwich groups formed?', a: 'By level, pace and aims rather than age or address, with five to ten learners at one stage. If no group meets at a time that suits, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'East of England and beyond',
    html: 'Across East Anglia, the <a class="cg-inline-link" href="/best-coding-class-in-cambridge">Cambridge page</a> ranks its warmest months with a heap, and <a class="cg-inline-link" href="/best-coding-class-in-plymouth">Plymouth</a> turns its listed buildings into a density map. <a class="cg-inline-link" href="/best-coding-class-in-york">York</a> measures how surprising its street names are. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> covers the school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> lists every city we teach.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Norwich and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-cambridge', label: 'Cambridge' },
    { href: '/best-coding-class-in-york', label: 'York' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-nor .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3vw, 2.5rem); }
.cg-root.cg-nor .cg-hero h1 { font-weight: 690; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-nor .cg-capsule { border-left: 5px double var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-nor .cg-eyebrow { letter-spacing: 0.15em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-nor .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.017em; }
.cg-root.cg-nor .cg-grid-3 { gap: clamp(0.95rem, 2.4vw, 2.1rem); }
.cg-root.cg-nor .cg-table th { letter-spacing: 0.022em; }
.cg-root.cg-nor .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nor .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-nor .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Norwich, Census 2021 via Nomis (E07000148): TS001 143,922 usual residents, 137,487 in households, 6,435 in communal establishments; TS007A 10,263 aged 15 to 19 (7.1 percent, England 5.7), 16,471 aged 20 to 24 (11.4 percent, England 6.0), 12,061 aged 25 to 29 (8.4 percent, England 6.6); TS068 35,161 students of 136,992 residents aged 5 and over (25.7 percent, England 20.4); TS006 3,688.2 usual residents per square kilometre (England 433.5). Norwich Cathedral, Our story and Cathedral highlights: founded 1096 by Herbert de Losinga, the first Bishop of Norwich, as a Benedictine monastery; spire above the city for over 900 years; most complete Norman cathedral in England; second tallest spire; largest collection of medieval roof bosses in the world.',
    localProject: 'Are Norwich\'s churches clustered or evenly spaced? Historic England NHLE Listed Building points (OGL, read 22 September 2026) clipped to ONS LAD E07000148: 1,037 entries (850 II, 125 II*, 62 I); 34 Grade I named as church, chapel or cathedral. Clark-Evans ratio: council area 39.00 km2, observed mean nearest neighbour 243 m, expected 535 m, R 0.453 (z -6.10), none of 499 random layouts as clustered; convex hull 4.39 km2, expected 180 m, R 1.351 (z +3.91), about 2 percent of 499 layouts as spread. All 62 Grade I: council R 0.383, hull R 1.022. Closest pair All Saints Church and Church of St John Baptist 51 m; median nearest-church distance 134 m. Lesson family: point pattern analysis, Clark-Evans ratio, complete spatial randomness, Monte Carlo envelopes and the study-area problem; distinct from Plymouth kernel density and Bristol Voronoi.',
    requiredMentions: [
      '143,922',
      '137,487',
      '6,435',
      '3,688.2',
      '16,471',
      '35,161',
      '136,992',
      'Losinga',
      'roof bosses',
      'Clark-Evans',
      'St Peter Mancroft',
      '1.351'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Norwich: 143,922 usual residents; 137,487 in households; 6,435 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000148' },
      { claim: 'Nomis, Census 2021 TS007A: Norwich and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000148,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Norwich 35,161 students of 136,992 aged 5 and over (25.7 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000148,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Norwich 3,688.2 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E07000148,E92000001' },
      { claim: 'Historic England, National Heritage List for England open data, Listed Building points (OGL).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'ONS, Local Authority Districts December 2025 boundaries (BFC), Norwich.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_DEC_2025_Boundaries_UK_BFC/FeatureServer' },
      { claim: 'Norwich Cathedral, Our story: founded 1096 by Herbert de Losinga; over 900 years of the spire.', url: 'https://www.cathedral.org.uk/our-story/' },
      { claim: 'Norwich Cathedral, Cathedral highlights: most complete Norman cathedral in England, second tallest spire, largest collection of medieval roof bosses.', url: 'https://www.cathedral.org.uk/cathedral-highlights/' }
    ],
    rejectedClaims: [
      'A count of all medieval churches in Norwich: list entry names are inconsistent (some churches are listed as museums or arts centres), so the page uses only Grade I entries named as churches, chapels or the cathedral, and says so.',
      'Norwich Castle museum history page: returned 403, so nothing from it is used.',
      'Any claim that the churches were deliberately spaced: the test rules out randomness within the old city; the parish explanation is offered as fitting, not as proven.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Historic England, Norwich Cathedral or Norwich City Council.'
    ]
  }
};
