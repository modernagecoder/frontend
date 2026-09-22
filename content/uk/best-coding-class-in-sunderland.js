'use strict';
// Sunderland (cg- city page, UK cluster Phase 4). Spine: do not check everything; skip the boxes that cannot matter.
// Quadtree spatial index over Sunderland's named places in Ordnance Survey Open Names (CSV, OS Downloads API, file
// read 21 September 2026, NZ tile; scratchpad sun/qt.py, dup.py). Features with DISTRICT_BOROUGH or COUNTY_UNITARY
// Sunderland, postcodes excluded: 4,709 (4,141 named roads, 160 sections of named road, 80 primary education, 76
// suburban areas, 28 medical care, 27 hills, 22 woodland). 1,000 random query points drawn from the features, radius
// 500 m: 47.8 features found on average; brute force makes 4,709 distance checks per query. Quadtree by bucket
// capacity (boxes, max depth, distance checks per query, boxes visited per query): 1: 19,069, 30, 56.5, 284.5;
// 4: 3,689, 8, 66.5, 96.2; 16: 989, 6, 89.7, 48.2; 64: 265, 5, 150.7, 27.6. Every answer matched brute force. On our
// laptop 1,000 queries took about 1.0 s by brute force and 0.061 s with capacity 16. Radius sweep at capacity 16
// (checks per query, share of brute force): 100 m 20.6 (0.4 percent), 250 m 42.0 (0.9), 500 m 89.7 (1.9), 1,000 m
// 220.5 (4.7), 2,000 m 585.5 (12.4, 486.3 found). Leaves at capacity 16: 742, of which 55 empty; non-empty leaf depths
// 2 to 6; smallest box 246 m across holding 10 features (White Gates Drive, Lawson Terrace, Bailey Way among them);
// largest non-empty box 3,942 m. Duplicates: 71 coordinates shared by two or more features (145 features), at most
// three (Grasswell suburban area, Gertrude Street, Grasswell Terrace); with capacity 1 they force splitting to the
// depth limit of 30.
// Lesson family: quadtrees and spatial indexing (bucket capacity trade-off, pruning boxes, duplicates and depth
// limits, when an index stops helping). Screened 22 September 2026: quadtree, k-d tree and spatial index 0 hits.
// Place facts read raw 22 September 2026: Census 2021 via Nomis, Sunderland E08000024: TS001 274,172 usual residents,
// 270,386 in households, 3,786 in communal establishments; TS007A 16,033 aged 10 to 14 (5.8 percent, England 6.0),
// 14,645 aged 15 to 19 (5.3, England 5.7), 15,142 aged 20 to 24 (5.5, England 6.0), 16,103 aged 65 to 69 (5.9,
// England 4.9); TS068 48,863 students of 260,323 aged 5 and over (18.8 percent, England 20.4); TS006 1,994.6 usual
// residents per square km (England 433.5). Sunderland Minster, History of the Building: formerly St Michael and All
// Angels, Bishopwearmouth, first built around 900 AD; served most of the area south of the River Wear under the
// Bishop of Durham, hence Bishopwearmouth; inaugurated as Sunderland Minster on 11 January 1998; renamed on 1 May
// 2007 the Minster Church of St Michael and All Angels and St Benedict Biscop; chancel window designed in 1950 to
// replace one damaged by enemy action in the Second World War. National Glass Centre: closed permanently 31 July 2026.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'SUNDERLAND', blurb: 'The city on the Wear, with a project that indexes 4,709 named places so a search can ignore almost all of them.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-sunderland',
  code: 'sld',
  accent: '#4E1268',
  accentRationale: 'Sunderland: a deep purple from the solver (10.58:1 on every paper tint, dE 8.7 from the nearest used accent), darker and redder than any other UK city accent',
  pageType: 'city',
  place: {
    name: 'Sunderland',
    eyebrow: 'Sunderland, Tyne and Wear',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Sunderland' },
      { type: 'AdministrativeArea', name: 'Tyne and Wear' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Sunderland, England',
  title: 'Best Coding Classes in Sunderland | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Sunderland learners aged 6 to 67, from Roker and Millfield to Washington. The first lesson is free of charge.',
  ogDescription: 'Coding and AI lessons for Sunderland, on a page that builds a quadtree over 4,709 named places so a search can skip almost all of them.',
  twitterDescription: 'Learners in Sunderland from six to sixty-seven can take live online coding, Python and AI lessons with us, and the first is free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '22 September 2026',
  courseSchema: {
    name: 'Sunderland Online Coding, Maths and AI Lessons',
    description: 'Live online coding, Python, algorithms, AI and mathematics lessons for children, teenagers and adults in Sunderland, in English, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Sunderland',
  capsuleQ: 'What are the best coding classes in Sunderland?',
  capsule: 'Census 2021 counted 274,172 usual residents in Sunderland, and 5.9% of them were aged 65 to 69, against 4.9% for England. Sunderland Minster says its church was first built around 900 AD and served most of the area south of the Wear, which is why that side became Bishopwearmouth. Sunderland learners of any age from six to sixty-seven can join us live online, in a group of five to ten at their level or on their own with a teacher, with our teachers in India and lessons at UK times. The introductory lesson is free, and the monthly fee after it is USD 100 for a group place or USD 150 for private teaching.',
  lead: 'Ordnance Survey lists 4,709 named places in Sunderland, from Roker to Washington. A map app asked what lies within 500 metres of a point has a simple way to answer: measure the distance to all 4,709 and keep the close ones. On average about 48 qualify, so almost every measurement is wasted. A quadtree splits the city into four boxes, splits any crowded box into four again, and so on, so a search can skip every box too far away to matter. With boxes of up to sixteen places, the same question needs about 90 distance checks instead of 4,709. Set the box size to one and the tree goes haywire, because three places share a single point. Our teenagers build the tree and find out why.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Sunderland.',

  picks: {
    eyebrow: 'Course picks for Sunderland',
    h2: 'Four courses for the city on the Wear',
    intro: 'Choose by what the learner enjoys. Every course begins with a free live lesson, and booking never takes card details.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with grids and treasure maps, where splitting a map into quarters to hunt for an object is an early taste of a quadtree.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Trees, recursion and search built from scratch, the tools this page uses to index Sunderland\'s place names.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first steps to full programs, including classes, recursion and reading real data files.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Data structures for adults preparing for technical roles, with the trade-offs behind indexes explained properly.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Sunderland today',
      h2: 'A city with an older age profile',
      intro: 'Census 2021 figures for Sunderland, from Nomis, reported exactly as the Office for National Statistics released them.',
      body: [
        { kind: 'table', caption: 'Sunderland, Census 2021', head: ['Measure', 'Sunderland', 'England'], rows: [
          ['Usual residents', '274,172', '56,490,048'],
          ['Living in households', '270,386', 'Not compared'],
          ['Living in communal establishments', '3,786', 'Not compared'],
          ['Aged 10 to 14', '16,033 (5.8%)', '6.0%'],
          ['Aged 20 to 24', '15,142 (5.5%)', '6.0%'],
          ['Aged 65 to 69', '16,103 (5.9%)', '4.9%'],
          ['Students among residents aged 5 and over', '48,863 (18.8%)', '20.4%'],
          ['Usual residents per square kilometre', '1,994.6', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Older than average', p: 'People aged 65 to 69 made up 5.9% of Sunderland\'s residents in 2021, above England\'s 4.9%, while the early twenties were below the national share.' },
          { h3: 'Fewer full-time students', p: 'Of 260,323 residents aged five and over, 48,863 were schoolchildren or full-time students, 18.8% against 20.4% across England.' },
          { h3: 'Mostly at home', p: 'Only 3,786 residents lived in communal establishments such as halls and care homes, and 270,386 in ordinary households.' }
        ] },
        { kind: 'p', text: 'That older profile matters to us because we teach adults too. A Year 6 child in Millfield might be building a first maze game, a Year 10 student in Washington choosing GCSE Computer Science, and a retired engineer in Roker learning Python for pleasure, each in a group of five to ten learners working at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Two banks, two names',
      h2: 'A church from around 900 AD and a city divided by its river',
      intro: 'From Sunderland Minster\'s own history of its building.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Around 900 AD', p: 'The Minster says its church, formerly St Michael and All Angels, Bishopwearmouth, was first built around 900 AD, though many alterations mean little of the earliest building remains.' },
          { h3: 'South of the Wear', p: 'The church served most of the area south of the river and came under the Bishop of Durham, which the Minster gives as the origin of the name Bishopwearmouth.' },
          { h3: '1998 and 2007', p: 'It was inaugurated as Sunderland Minster on 11 January 1998, and in 2007 renamed to add St Benedict Biscop to St Michael and All Angels.' }
        ] },
        { kind: 'p', text: 'We have no connection with Sunderland Minster. Its story opens this page because it is a story about dividing space: the name Bishopwearmouth records who held the land south of the Wear, and the north bank carries a different name, Monkwearmouth. A quadtree divides space too, though it keeps dividing wherever things get crowded, and that is what lets a computer ignore the parts of a map that cannot matter to a question.' },
        { kind: 'spec', title: 'Where the places come from', p: 'Ordnance Survey publishes Open Names as free data under the Open Government Licence. For Sunderland, leaving out postcodes, it lists 4,709 named features: 4,141 named roads, 160 sections of road, 80 primary schools, 76 suburban areas, 27 hills and more, each with a grid reference.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Searching 4,709 places without looking at most of them',
      intro: 'A quadtree stores points in boxes. When a box holds more than its limit, it splits into four smaller boxes, and the points move down into them.',
      body: [
        { kind: 'table', caption: 'A quadtree over Sunderland\'s 4,709 named places, answering 1,000 searches for everything within 500 metres', head: ['Places per box before splitting', 'Boxes', 'Deepest level', 'Distance checks per search', 'Boxes visited per search'], rows: [
          ['1', '19,069', '30', '56.5', '284.5'],
          ['4', '3,689', '8', '66.5', '96.2'],
          ['16', '989', '6', '89.7', '48.2'],
          ['64', '265', '5', '150.7', '27.6'],
          ['No tree at all', 'Not applicable', 'Not applicable', '4,709', 'Not applicable']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Split when crowded', p: 'Start with one box around the whole city. Each time a box holds more places than its limit, cut it into four equal boxes and move its places down.' },
          { h3: '2. Prune the search', p: 'To find places within 500 metres of a point, skip any box whose nearest edge is further away than that. Only the surviving boxes are opened.' },
          { h3: '3. Check against brute force', p: 'All 1,000 test searches returned exactly the same places as measuring every distance. Speed is worthless if the answers change.' }
        ] },
        { kind: 'callout', h3: 'Three places at one point', p: 'Seventy-one grid references in the file are shared by two or more features, and the busiest holds three: Grasswell as a suburban area, Gertrude Street and Grasswell Terrace. With a limit of one place per box, a box holding those three can never be split small enough, so the tree keeps dividing until it hits its safety limit of 30 levels and creates 19,069 boxes. Real data contains duplicates, and every quadtree needs a rule for them.' },
        { kind: 'p', text: 'The advantage depends on the question. For a 100-metre search the tree checks 0.4% of the places brute force would; for 2,000 metres, where nearly 500 places qualify, it checks 12.4%. An index is brilliant at small, local questions and gradually loses its edge as the question grows towards the whole city.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Indexing space',
      h2: 'Five decisions inside any spatial index',
      intro: 'Learned on Sunderland\'s place names, then used in map apps, games, delivery routing, collision detection and the databases behind them.',
      body: [
        { kind: 'table', caption: 'Building a quadtree that behaves', head: ['Decision', 'For Sunderland', 'What goes wrong otherwise'], rows: [
          ['Box capacity', 'Sixteen balanced checks against boxes', 'Too small: thousands of boxes; too big: a slow scan'],
          ['Depth limit', 'Thirty levels as a safety stop', 'Duplicates split forever'],
          ['Duplicate rule', 'Keep shared points together in one box', 'A tree shaped by three street names'],
          ['Test against brute force', '1,000 searches compared one by one', 'A fast index that quietly misses places'],
          ['Match the question', 'Great for 100 m, weaker for 2 km', 'Paying for an index the queries cannot use']
        ] },
        { kind: 'p', text: 'The tree is also uneven, which is the point. With a capacity of sixteen, the smallest box is 246 metres across and holds ten road features including White Gates Drive and Lawson Terrace, while the largest occupied box is 3,942 metres across where places are sparse. Boxes shrink where places crowd together and stay large where they do not, so the work of a search follows the density of the city.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A treasure map folded into quarters again and again, and the discovery that you never need to unfold the far corners.' },
          { h3: 'Teenagers', p: 'Open Names read in Python, a recursive quadtree class, pruning by distance and every answer checked against brute force.' },
          { h3: 'Adults', p: 'Spatial indexes in databases and mapping tools at work, chosen and tuned for the questions that are actually asked.' }
        ] },
        { kind: 'p', text: 'We are not connected with Ordnance Survey, Sunderland Minster or Sunderland City Council. Ordnance Survey makes Open Names free under the Open Government Licence and the ONS census tables are open to all; we built every tree and measured every count and timing ourselves.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From folding a map to a quadtree',
    intro: 'These age bands are a rough guide, and the free lesson shows where to begin.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Quarters and corners', p: 'Folding a map into quarters, deciding which quarter to search, and throwing away the rest.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Grids and searches', p: 'Storing points in a grid, finding the ones near a spot, and counting how many checks it took.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Trees in Python', p: 'Recursive quadtrees, pruning, capacity trade-offs and duplicates on thousands of real place names.', courses: ['problem-solving-dsa-masterclass-teens', 'competitive-programming-for-teens-course'] },
      { band: 'Ages 18 to 67', h3: 'Indexes at work', p: 'Spatial and ordinary database indexes for adults, and how to decide whether one is worth its cost.', courses: ['data-structures-algorithms-masterclass-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Databases index maps automatically. Why should a Sunderland teenager build a quadtree?',
    intro: 'Because knowing what an index skips is how you know when to trust it.',
    p1: 'Modern databases and map services index locations without anyone writing a tree. A learner who has built one knows why a search for nearby cafes is instant and a search across the whole country is not, why duplicates can wreck performance, and why an index has to be tested against the slow, obvious method before anyone relies on it.',
    p2: 'AI systems depend on the same idea. When a chatbot looks up documents similar to a question, it searches millions of stored vectors, and it can only do that quickly by skipping most of them with an index built on the principles a quadtree teaches. The shapes are different, but the trade between speed and exactness is the same one learners measure here.',
    closer: 'So a Sunderland teenager should still learn to program in 2026, in a city whose two banks have had different names for a thousand years: software divides space in milliseconds, but someone has to decide how to divide it and check that nothing falls through the gaps.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Roker, Hendon or Washington, from home',
    intro: 'From Washington in the west to the coast at Seaburn, Sunderland is spread out. An online lesson closes the distance.',
    cells: [
      { h3: 'North and south of the Wear', p: 'A learner in Fulwell and another in Silksworth can share the same lesson without crossing a bridge.' },
      { h3: 'English stages, named properly', p: 'Reception, Key Stages 1 to 4, GCSE options and A levels, called what Sunderland schools call them, with all lessons in English.' },
      { h3: 'The first lesson counts', p: 'The free session teaches something real and closes with a recommended level, course and weekly time. There is no card to enter.' },
      { h3: 'Matched classmates', p: 'Five to ten learners at one stage, from Sunderland, elsewhere in Britain and overseas, which gives every level a usable time.' },
      { h3: 'Two lessons a week', p: 'A steady pair of weekly lessons, about eight a month, with holidays and exam weeks set with the teacher ahead of time.' },
      { h3: 'Teachers on a late shift', p: 'Our teachers are four and a half hours ahead of Sunderland in summer and five and a half in winter, because India keeps one time all year. They teach into their evening so that Wearside learners can join after school.' }
    ],
    spec: { title: 'Across Wearside and beyond', p: 'Families in Seaham, South Shields, Chester-le-Street or Gateshead join exactly the same classes, since everything is online and groups are formed by level.' }
  },

  fees: {
    h2: 'Sunderland lesson fees',
    intro: 'A free lesson first, then a single fee each month.',
    first: 'A full lesson with no charge, ending with a level, a course and a weekly time we recommend.',
    group: 'About eight live lessons per month with five to ten learners at one stage.',
    private: 'About eight live lessons per month, taught to your learner individually.',
    closer: 'Outside India, one US dollar fee applies to every family, from Pennywell to Seaburn, and we list no prices in pounds. We take no payment until the free lesson has settled a course and a slot; pausing, missed lessons and switching between group and private teaching are covered on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from families, quoted without changes',

  book: {
    h2: 'Book a free lesson for a Sunderland learner',
    intro: 'The first task is chosen by level: a fold-the-map search game for a young child, a short Python program that finds nearby points for a beginner, or Open Names and a quadtree for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Sunderland learner.'
  },

  faq: {
    h2: 'Sunderland coding class questions',
    intro: 'The questions Sunderland families most often ask.',
    items: [
      { q: 'How many people live in Sunderland?', a: 'Census 2021 counted 274,172 usual residents in Sunderland, with 270,386 living in households and 3,786 in communal establishments such as halls of residence and care homes.' },
      { q: 'How does Sunderland compare with England?', a: 'Sunderland is older than average and has fewer students: people aged 65 to 69 were 5.9% of residents in 2021 (England 4.9%), and 18.8% of those aged five and over were in study (England 20.4%). Its density was 1,994.6 residents per square kilometre, well above the English 433.5.' },
      { q: 'What is a quadtree?', a: 'A way of storing points on a map in boxes that split into four whenever they get crowded. It lets a program answer questions like what is near here by opening only the few boxes that could contain an answer.' },
      { q: 'How much work does the quadtree save?', a: 'For searches within 500 metres, a quadtree holding up to sixteen places per box made about 90 distance checks instead of 4,709, and gave exactly the same answers in all 1,000 tests.' },
      { q: 'Where do the place names come from?', a: 'Ordnance Survey Open Names, free data under the Open Government Licence. For Sunderland, excluding postcodes, it lists 4,709 named features, most of them roads.' },
      { q: 'Why is one side of Sunderland called Bishopwearmouth?', a: 'Sunderland Minster says its church served most of the area south of the Wear and came under the Bishop of Durham, hence the name. We are not connected with the Minster.' },
      { q: 'When are Sunderland lessons scheduled?', a: 'Weekday afternoons and evenings or weekends, at a UK time agreed in the free lesson. India is four and a half hours ahead of Sunderland in summer and five and a half hours ahead in winter.' },
      { q: 'Is there a Modern Age Coders centre in Sunderland?', a: 'No. There is no Sunderland centre and we have no premises anywhere in the UK; all lessons are live online. Learners need a computer with sound and a dependable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Sunderland lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Sunderland groups formed?', a: 'By level, pace and goals rather than age or address, with five to ten learners at one stage. If no group suits the learner\'s schedule, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The North East and beyond',
    html: 'Up the coast, the <a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle page</a> colours a map of its wards with as few colours as possible, and to the south <a class="cg-inline-link" href="/best-coding-class-in-york">York</a> measures how surprising its street names are. <a class="cg-inline-link" href="/best-coding-class-in-portsmouth">Portsmouth</a> finds the three roads that hold its island to the mainland. School stages in England are laid out in the <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> is the index to every city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Sunderland and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-newcastle-upon-tyne', label: 'Newcastle' },
    { href: '/best-coding-class-in-york', label: 'York' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-sld .cg-hero-grid { align-items: center; gap: clamp(1.05rem, 3vw, 2.5rem); }
.cg-root.cg-sld .cg-hero h1 { font-weight: 690; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-sld .cg-capsule { border-left: 3px solid var(--cg-accent); border-bottom: 3px solid var(--cg-accent); padding: 0 0 0.9rem 1rem; }
.cg-root.cg-sld .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sld .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.015em; }
.cg-root.cg-sld .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-sld .cg-table th { letter-spacing: 0.027em; }
.cg-root.cg-sld .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sld .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-sld .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Sunderland, Census 2021 via Nomis (E08000024): TS001 274,172 usual residents, 270,386 in households, 3,786 in communal establishments; TS007A 16,033 aged 10 to 14 (5.8 percent, England 6.0), 14,645 aged 15 to 19 (5.3, England 5.7), 15,142 aged 20 to 24 (5.5, England 6.0), 16,103 aged 65 to 69 (5.9, England 4.9); TS068 48,863 students of 260,323 residents aged 5 and over (18.8 percent, England 20.4); TS006 1,994.6 usual residents per square kilometre (England 433.5). Sunderland Minster, History of the Building: formerly St Michael and All Angels, Bishopwearmouth, first built around 900 AD; served most of the area south of the River Wear under the Bishop of Durham, hence Bishopwearmouth; inaugurated as Sunderland Minster 11 January 1998; renamed 1 May 2007 to include St Benedict Biscop.',
    localProject: 'Searching 4,709 places without looking at most of them. OS Open Names (read 21 September 2026), Sunderland features excluding postcodes: 4,709 (4,141 named roads). Quadtree, 1,000 random 500 m searches (47.8 found on average; brute force 4,709 checks): capacity 1, 19,069 boxes, depth 30, 56.5 checks, 284.5 boxes visited; 4, 3,689, 8, 66.5, 96.2; 16, 989, 6, 89.7, 48.2; 64, 265, 5, 150.7, 27.6; all answers identical to brute force. Radius sweep at capacity 16: 100 m 0.4 percent of brute-force checks, 2,000 m 12.4 percent. 71 shared coordinates, at most three at one point (Grasswell, Gertrude Street, Grasswell Terrace). Smallest box 246 m, largest occupied 3,942 m. Lesson family: quadtrees and spatial indexing; distinct from Aberdeen Bloom filter, Wolverhampton trie and Southampton hash tables.',
    requiredMentions: [
      '274,172',
      '270,386',
      '3,786',
      '1,994.6',
      '15,142',
      '48,863',
      '260,323',
      'Bishopwearmouth',
      'Biscop',
      'quadtree',
      'Grasswell',
      'White Gates Drive'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Sunderland: 274,172 usual residents; 270,386 in households; 3,786 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E08000024' },
      { claim: 'Nomis, Census 2021 TS007A: Sunderland and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E08000024,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Sunderland 48,863 students of 260,323 aged 5 and over (18.8 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E08000024,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Sunderland 1,994.6 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E08000024,E92000001' },
      { claim: 'Ordnance Survey Open Names (CSV download): named features with district, used for the Sunderland point set.', url: 'https://api.os.uk/downloads/v1/products/OpenNames/downloads' },
      { claim: 'Sunderland Minster, Guide to the Minster and its history: around 900 AD, Bishopwearmouth, 11 January 1998, 2007 renaming.', url: 'https://sunderlandminster.org.uk/guide-to-the-minster-and-its-history/' }
    ],
    rejectedClaims: [
      'OS Open Rivers for a line-simplification project on the Wear: the river through the city has only 113 vertices, too few for the idea, so it was dropped.',
      'Traffic on the Wear bridges before and after the Northern Spire: count points could not be matched to bridges with confidence, so the idea was dropped.',
      'National Glass Centre as heritage: it closed permanently on 31 July 2026, so it is not presented as a place to visit.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Ordnance Survey, Sunderland Minster or Sunderland City Council.'
    ]
  }
};
