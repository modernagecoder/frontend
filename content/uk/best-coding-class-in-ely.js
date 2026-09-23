'use strict';
// Ely (cg- city page, UK cluster Phase 4). Spine: how high would the water have to rise to make Ely an island again?
// Percolation on OS Terrain 50 (ASCII grid, OS Downloads API, release 20260529), tiles TL35 to TL79 mosaicked into a
// 50 km square (E 530000 to 580000, N 250000 to 300000; 1,000 by 1,000 cells of 50 m; scratchpad ely/perc.py). Heights
// -8.3 to 130.2 m, median 7.2 m; 18.5 percent of cells below 0 m OD, 33.6 percent below 2 m, 44.7 percent below 5 m.
// Cathedral: NHLE 1331690 Cathedral of the Holy Trinity, Grade I, listed 23 September 1950, point 554046 280281,
// Terrain 50 cell 20.7 m. Water level raised in 0.25 m steps, dry land = cells above the level, 4-connected components
// (scipy ndimage.label). Ely's component stops touching the edge of the square first at 1.50 m: 104.5 square km; at 2 m
// 91.7; 3 m 78.8; 5 m 62.3; 8 m 14.1; 10 m 12.3; 15 m 7.7; 20 m 3.5; cathedral cell under water at 20.75 m. Largest
// component share of the whole square: 0 m 78.8 percent, 1 m 66.9, 2 m 58.5, 5 m 46.9, 10 m 37.1, 20 m 19.4. Spanning
// test (dry land connecting opposite sides), bisection on the level: real terrain stops spanning at 12.30 m with 40.8
// percent of cells dry; the same heights shuffled at random stop at 3.60 m with 59.6 percent dry (site percolation
// threshold for a random square grid is about 59.3 percent). Box test (ely/box.py), squares centred on the cathedral:
// 20 km island at 6.5 m (19.3 square km, the island does not fit); 30 km and 38 km island at 1.5 m, 104.5 square km.
// Lesson family: percolation (threshold, giant component, spanning cluster, shuffled null model). Screened 23
// September 2026: percolation 0 hits; distinct from Hull flood fill (single fill from a seed) and Coventry union-find
// (chaining stops by distance).
// Place facts read raw 23 September 2026: Census 2021 via Nomis, East Cambridgeshire E07000009: TS001 87,762 usual
// residents, 87,000 in households, 762 communal; TS007A 5,526 aged 10 to 14 (6.3 percent, England 6.0), 3,663 aged 20
// to 24 (4.2, England 6.0); TS068 14,966 students of 83,243 aged 5 and over (18.0 percent, England 20.4); TS006 134.8
// per square km (England 433.5). MSOA E02003734 North Ely 11,960 residents (1,142.5 per square km); E02003735 South Ely
// 8,613 (176.7). Ely Cathedral, History and Heritage: Ely was an island until 400 years ago, when work started to drain
// the Fens; third longest medieval cathedral in England at 161 m (537 ft); West Tower completed c1189, 66 m (215 ft),
// 288 steps; 14th century Octagon. St Etheldreda page: in 673 she returned to Ely and founded a double monastery for
// monks and nuns. The Octagon page: on 13 February 1322 the Norman central tower collapsed. Ely Museum: built on an
// island of solid land surrounded by marshes.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'ELY', blurb: 'The cathedral city of the Fens, with a project that raises the water level on a map to find when Ely becomes an island again.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-ely',
  code: 'ely',
  accent: '#596A39',
  accentRationale: 'Ely: a fen-reed olive for the drained marshland, from the solver (4.81:1 on every paper tint, dE 8.0 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Ely',
    eyebrow: 'Ely, Cambridgeshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'East Cambridgeshire' },
      { type: 'AdministrativeArea', name: 'Cambridgeshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ely, England',
  title: 'Best Coding Classes in Ely | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for learners in Ely aged 6 to 67, and in Littleport, Soham and Sutton too. The first lesson is completely free.',
  ogDescription: 'Coding and AI lessons for Ely, on a page that floods a map of the Fens a quarter of a metre at a time to find when Ely becomes an island again.',
  twitterDescription: 'Ely learners aged six to sixty-seven can take coding, Python and AI lessons with us live online, starting with a free one.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Ely Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, maps and simulation, AI and mathematics taught live online in English to children, teenagers and adults in Ely and East Cambridgeshire, in small groups or one to one.'
  },

  h1: 'Coding classes in Ely',
  capsuleQ: 'What are the best coding classes in Ely?',
  capsule: 'East Cambridgeshire, the district around Ely, had 87,762 usual residents at the 2021 census, living at 134.8 people per square kilometre against 433.5 across England. Ely Cathedral says Ely was an island until about 400 years ago, when work began to drain the surrounding Fens. Ely learners aged six to sixty-seven can study with our teachers in India in live video lessons, alone or in a group of five to ten at a similar level, at times that fit the British school and working week. The first lesson is free; after it, a group place costs USD 100 a month and one-to-one lessons USD 150.',
  lead: 'Ely Cathedral says the city stood on an island until the Fens were drained. Our teenagers put that to the test on today\'s map. They take Ordnance Survey heights for a 50 kilometre square around Ely, raise an imaginary water level a quarter of a metre at a time, and ask whether Ely\'s dry land still connects to the edge of the square. At 1.5 metres above sea level it no longer does: Ely becomes an island of 104.5 square kilometres. Then they meet percolation theory. Shuffle the same heights at random and dry land stops crossing the square when 59.6% of it is dry, just as the theory predicts. The real Fens keep a connected path until only 40.8% is dry.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Ely, please.',

  picks: {
    eyebrow: 'Course picks for Ely',
    h2: 'Four courses for the Isle',
    intro: 'Start with whatever the learner enjoys most. There is a free live lesson at the start of every course, with no card needed to book it.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, a first step towards grid games where water spreads from square to square.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from a first line to full projects, the basis for loading a map of heights and flooding it in code.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real data in Python, including comparing a result with a random version of the same data to see what is really there.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults working with maps, networks or risk, where knowing when things stay connected really matters.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Ely today',
      h2: 'A small city in a spacious district',
      intro: 'Census 2021 figures for East Cambridgeshire and for the two middle-layer areas the House of Commons Library names North Ely and South Ely, from the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'East Cambridgeshire and Ely, Census 2021', head: ['Area', 'Usual residents', 'Residents per square kilometre'], rows: [
          ['East Cambridgeshire', '87,762', '134.8'],
          ['North Ely', '11,960', '1,142.5'],
          ['South Ely', '8,613', '176.7'],
          ['England', '56,490,048', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'School-age children', p: 'Children aged 10 to 14 were 6.3% of East Cambridgeshire\'s residents in 2021, a little above England\'s 6.0%.' },
          { h3: 'Fewer young adults', p: 'People aged 20 to 24 were only 4.2% of residents, against 6.0% nationally, and 14,966 of the 83,243 aged five and over were studying.' },
          { h3: 'Room to spread', p: 'At 134.8 residents per square kilometre the district is far less crowded than England as a whole, and almost everyone, 87,000 people, lives in a household.' }
        ] },
        { kind: 'p', text: 'Our Ely groups reflect a district of small towns and villages. A Year 4 child in Littleport might be building a first game, a Year 10 student in Soham starting GCSE Computer Science, and an adult in Sutton learning Python for work, each in a small group at the right level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'The Isle of Ely',
      h2: 'A monastery on an island, a tower that fell',
      intro: 'From Ely Cathedral\'s own history pages and Ely Museum.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '673', p: 'The cathedral records that Etheldreda returned to Ely, where she owned land, and founded a double monastery for monks and nuns, becoming its abbess.' },
          { h3: 'About 1189', p: 'The West Tower was completed. The cathedral gives its height as 66 metres, with 288 steps to the top, and the whole building as 161 metres long.' },
          { h3: '13 February 1322', p: 'The Norman central tower collapsed, and in its place the builders raised the Octagon, the 14th century tower and wooden lantern the cathedral is known for.' }
        ] },
        { kind: 'p', text: 'Ely Museum describes the city as built on an island of solid land surrounded by marshes, and the cathedral dates the draining of the Fens to about 400 years ago. Historic England lists the Cathedral of the Holy Trinity at Grade I. We have no connection with Ely Cathedral, Ely Museum or East Cambridgeshire District Council; the island belongs on this page because it turns a local story into a question a computer can answer.' },
        { kind: 'spec', title: 'Where the heights come from', p: 'Ordnance Survey Terrain 50 is a free grid of ground heights for Great Britain, one value every 50 metres, measured above Ordnance Datum, roughly mean sea level. It shows today\'s land, after centuries of drainage, not the medieval landscape.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'When does Ely become an island again?',
      intro: 'Percolation is the study of when things stay connected: water through rock, fire through a forest, a rumour through a network. Here it is dry land across a drowning map.',
      body: [
        { kind: 'table', caption: 'OS Terrain 50, a 50 km square around Ely: the dry land still connected to Ely as the water rises', head: ['Water level above Ordnance Datum', 'Ely joined to the edge of the square?', 'Ely\'s dry land'], rows: [
          ['0 metres', 'Yes', '1,968.9 square km'],
          ['1 metre', 'Yes', '1,671.5 square km'],
          ['1.5 metres', 'No: Ely is an island', '104.5 square km'],
          ['5 metres', 'No', '62.3 square km'],
          ['10 metres', 'No', '12.3 square km'],
          ['20 metres', 'No', '3.5 square km']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Build the map', p: 'Stitch 25 Ordnance Survey tiles into one grid of a million squares. Heights run from 8.3 metres below sea level to 130.2 above, and 18.5% of the square lies below zero.' },
          { h3: '2. Raise the water', p: 'For each level, mark every square above it as dry and group dry squares that touch along an edge. Ely\'s group is the one containing the cathedral.' },
          { h3: '3. Test the connection', p: 'If Ely\'s group reaches any edge of the square, Ely is still joined to the mainland. The first level where it does not is 1.5 metres, checked in steps of a quarter of a metre.' }
        ] },
        { kind: 'callout', h3: 'Real land is not random', p: 'Percolation theory says that on a grid where each square is dry at random, a connected path crosses the grid once about 59.3% of squares are dry. We tested it by shuffling Ely\'s own heights into random positions: the path broke at 59.6%, right on cue. The real map held a crossing path until only 40.8% of squares were dry, at a water level of 12.3 metres, because real heights come in ridges and valleys, not scattered specks. The lesson reaches far beyond maps: random models can badly misjudge anything whose parts are arranged, from road networks to the spread of disease.' },
        { kind: 'p', text: 'The answer comes with honest limits. Terrain 50 smooths away narrow flood banks, roads and railway embankments, any of which can join or split land on the real ground, and it shows the land after centuries of drainage rather than as the medieval monks knew it. So 1.5 metres is not a flood forecast. It is a measured answer to a clear question about one map, which is what a good model gives.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Connections in practice',
      h2: 'Five checks before trusting a connectivity result',
      intro: 'Practised on the Isle of Ely, then used for power grids, phone networks, groundwater, wildfire risk and the spread of infections.',
      body: [
        { kind: 'table', caption: 'Choices behind a percolation answer', head: ['Check', 'For the Ely map', 'If it is skipped'], rows: [
          ['What counts as touching?', 'Squares sharing an edge, not just a corner', 'Diagonal leaks joining land that is not joined'],
          ['What is the edge of the world?', 'The border of a 50 km square', 'An island that is only an island inside a small box'],
          ['How fine are the steps?', 'A quarter of a metre', 'A threshold reported more precisely than it was measured'],
          ['Is there a null model?', 'The same heights, shuffled at random', 'No way to tell structure from chance'],
          ['What does the map miss?', 'Banks, roads and embankments narrower than 50 m', 'A modelling answer mistaken for a forecast']
        ] },
        { kind: 'p', text: 'The second row can change the answer, so we tested it. In a 20 kilometre square centred on the cathedral, Ely only counts as an island at 6.5 metres, because the 104.5 square kilometre island is too big to fit inside so small a box and keeps touching its edge. Squares of 30 and 38 kilometres centred on the cathedral both give the same answer as the 50 kilometre square: 1.5 metres and 104.5 square kilometres. A result that holds once the box is big enough is one you can start to trust.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Colouring squares on a grid as land or water and checking whether a toy boat can sail from one side to the other.' },
          { h3: 'Teenagers', p: 'Ordnance Survey heights in Python, connected groups of squares, a rising water level and a shuffled null model to compare against.' },
          { h3: 'Adults', p: 'Connectivity and resilience questions at work, with the rules for connection and the limits of the data written down.' }
        ] },
        { kind: 'p', text: 'We are not connected with Ordnance Survey, Ely Cathedral, Ely Museum, Historic England or East Cambridgeshire District Council. The height grid, census tables and listing records are open data, and the islands, thresholds and comparisons on this page are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a grid of squares to percolation theory',
    intro: 'The age bands are a starting point only; the free lesson finds the right level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Land and water', p: 'Shading squares on a grid as land or water and finding whether a path crosses from one side to the other.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Grids in code', p: 'A small map of heights as a list of lists in Python, and code that marks every square below a chosen level.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Percolation', p: 'Connected groups on a real height grid, the moment Ely becomes an island, and a random null model for comparison.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Networks at work', p: 'Asking when networks, maps and systems stay connected, and testing answers against a random baseline.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can map flood risk from satellites. Why should an Ely teenager flood a grid by hand?',
    intro: 'Because a result only means something when you know what it is being compared with.',
    p1: 'The Ely project compares the real map with a shuffled one, and the difference, 40.8% against 59.6%, is the whole finding. AI systems trained on real-world data also need comparisons like this to show they have learned structure and not noise. A learner who has built a null model by hand knows to ask for one.',
    p2: 'Percolation also explains sudden change. Connectivity can hold, hold and then collapse at a threshold, which is why networks, epidemics and even online trends can seem stable until they are not. Watching Ely\'s land split away at a single quarter-metre step makes that behaviour concrete and memorable.',
    closer: 'So an Ely teenager should keep learning to code in 2026, on the old Isle itself: computers can flood a million squares in seconds, but someone has to decide what counts as connected and what to compare it with.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Littleport, Soham or Haddenham, and no drive into Ely',
    intro: 'East Cambridgeshire is a district of scattered towns and villages. Online, every one of them is the same distance from the lesson.',
    cells: [
      { h3: 'Villages in one class', p: 'A learner in Little Downham and another in Isleham can share a lesson, with no journey across the fen roads.' },
      { h3: 'English school stages', p: 'We follow the stages used in Cambridgeshire schools, Reception and Key Stages 1 to 4 through GCSE and A level, and teach in English.' },
      { h3: 'A lesson that teaches', p: 'The free session covers a real task and ends with a suggested level, course and weekly time. There is no card to enter.' },
      { h3: 'Groups by level', p: 'Five to ten learners at one stage, from Ely, the rest of the UK and abroad, so every level has workable lesson times.' },
      { h3: 'Two lessons a week', p: 'Two fixed lessons weekly, around eight a month, with half terms and exams planned with the teacher ahead of time.' },
      { h3: 'Evenings across time zones', p: 'A 5.30 pm lesson in Ely begins at 10 pm in India during British Summer Time and 11 pm in winter, because India does not change its clocks; our teachers keep evening hours for UK learners.' }
    ],
    spec: { title: 'Across the Fens and beyond', p: 'Families in Cambridge, Newmarket, March or Chatteris can join the very same groups, since lessons are online and formed by level.' }
  },

  fees: {
    h2: 'Ely lesson fees',
    intro: 'The first lesson is free, then there is one monthly fee.',
    first: 'A whole lesson with no charge, ending with our suggestion for level, course and weekly time.',
    group: 'Around eight live lessons a month, in a class of five to ten learners at the same stage.',
    private: 'Around eight live lessons a month, with the teacher focused entirely on your learner.',
    closer: 'Families in Burwell or Stretham pay in US dollars, the same as every family outside India, and our site shows no pound prices anywhere. Nothing is billed before the free lesson, and charges begin only once a course and weekly slot are agreed; the pricing page explains pauses, missed lessons and switching between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews by families, word for word',

  book: {
    h2: 'Book a free lesson for an Ely learner',
    intro: 'The first task fits the learner: a land-and-water grid game for a young child, a short Python program that marks squares below a level for a beginner, or the Terrain 50 map of the Fens for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Ely learner.'
  },

  faq: {
    h2: 'Ely coding class questions',
    intro: 'The questions Ely families ask us most.',
    items: [
      { q: 'How many people live in and around Ely?', a: 'Census 2021 counted 87,762 usual residents in East Cambridgeshire, the district that includes Ely. The two middle-layer areas the House of Commons Library names North Ely and South Ely had 11,960 and 8,613.' },
      { q: 'How does East Cambridgeshire compare with England?', a: 'It is much less crowded, with 134.8 residents per square kilometre against 433.5, and has fewer young adults: 4.2% of residents were aged 20 to 24 in 2021, against 6.0% in England.' },
      { q: 'What is percolation?', a: 'The study of when a connected path forms through a partly filled grid or network, such as water through soil or fire through a forest. Its key idea is the threshold: below it, paths are rare; just above it, they appear suddenly.' },
      { q: 'At what water level would Ely become an island?', a: 'On Ordnance Survey Terrain 50, and within a 50 kilometre square, Ely\'s dry land stops connecting to the edge of the square at 1.5 metres above Ordnance Datum, leaving an island of 104.5 square kilometres. Narrow banks the map smooths away could change that.' },
      { q: 'Where do the heights come from?', a: 'From Ordnance Survey Terrain 50, a free grid of ground heights for Great Britain at 50 metre spacing. The cathedral\'s position comes from Historic England\'s open listing data.' },
      { q: 'Was Ely really an island?', a: 'Ely Cathedral says Ely was an island until about 400 years ago, when work began to drain the Fens, and Ely Museum describes the city as built on an island of solid land surrounded by marshes. We are not connected with either.' },
      { q: 'What time are Ely lessons?', a: 'After school, in the evening or at the weekend, at a UK time we fix together during the free lesson. India runs four and a half hours ahead of Ely in summer and five and a half in winter.' },
      { q: 'Is there a centre in Ely?', a: 'No. We have no Ely centre and no premises anywhere in the UK; all lessons are live online. Learners need a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much are lessons for an Ely learner?', a: 'The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How is each group put together?', a: 'By level, pace and aims rather than age or address, with five to ten learners at one stage. If no group suits the learner\'s timetable, one-to-one lessons are available.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The East of England and beyond',
    html: 'To the south, the <a class="cg-inline-link" href="/best-coding-class-in-cambridge">Cambridge page</a> keeps a top ten from decades of weather records without sorting them all, and <a class="cg-inline-link" href="/best-coding-class-in-peterborough">Peterborough</a> asks how much a growth curve can really tell us. <a class="cg-inline-link" href="/best-coding-class-in-hull">Hull</a> floods a grid of heights from a single starting point. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ely and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-cambridge', label: 'Cambridge' },
    { href: '/best-coding-class-in-peterborough', label: 'Peterborough' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-ely .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.3vw, 2.6rem); }
.cg-root.cg-ely .cg-hero h1 { font-weight: 700; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-ely .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-ely .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ely .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.013em; }
.cg-root.cg-ely .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.15rem); }
.cg-root.cg-ely .cg-table th { letter-spacing: 0.026em; }
.cg-root.cg-ely .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ely .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-ely .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'East Cambridgeshire, Census 2021 via Nomis (E07000009): TS001 87,762 usual residents, 87,000 in households, 762 in communal establishments; TS007A 5,526 aged 10 to 14 (6.3 percent, England 6.0), 3,663 aged 20 to 24 (4.2 percent, England 6.0); TS068 14,966 students of 83,243 residents aged 5 and over (18.0 percent, England 20.4); TS006 134.8 per square kilometre (England 433.5). MSOAs (House of Commons Library names): E02003734 North Ely 11,960 (1,142.5 per square kilometre); E02003735 South Ely 8,613 (176.7). Ely Cathedral: island until about 400 years ago when Fen drainage began; 161 m long; West Tower c1189, 66 m, 288 steps; Octagon. St Etheldreda founded a double monastery in 673. Norman central tower collapsed 13 February 1322. Ely Museum: island of solid land surrounded by marshes. NHLE 1331690 Cathedral of the Holy Trinity, Grade I.',
    localProject: 'When does Ely become an island again? OS Terrain 50, 50 km square (E 530000 to 580000, N 250000 to 300000), 1,000 by 1,000 cells; heights -8.3 to 130.2 m; 18.5 percent below 0 m. Water raised in 0.25 m steps; 4-connected dry components. Ely (cathedral cell 20.7 m) separates from the square\'s edge at 1.50 m, component 104.5 square km; 5 m 62.3; 10 m 12.3; 20 m 3.5; at 0 m 1,968.9 and 1 m 1,671.5 connected to the edge. Spanning: real terrain stops at 12.30 m with 40.8 percent dry; shuffled heights stop at 3.60 m with 59.6 percent dry (theory about 59.3). Lesson family: percolation.',
    requiredMentions: [
      '87,762',
      '14,966',
      '83,243',
      '11,960',
      'Etheldreda',
      'Octagon',
      'Littleport',
      'Soham',
      'percolation',
      '104.5',
      'Isle of Ely',
      '288 steps'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001: East Cambridgeshire 87,762; North Ely 11,960; South Ely 8,613.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000009,E02003734,E02003735' },
      { claim: 'Nomis, Census 2021 TS007A: East Cambridgeshire and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000009,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: East Cambridgeshire 14,966 students of 83,243 aged 5 and over (18.0 percent).', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000009,E02003734,E02003735,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: density, East Cambridgeshire 134.8; North Ely 1,142.5; South Ely 176.7 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E07000009,E02003734,E02003735,E92000001' },
      { claim: 'House of Commons Library, MSOA Names: North Ely, South Ely.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'Ely Cathedral, History and Heritage: island until about 400 years ago; 161 m; West Tower c1189, 66 m, 288 steps; Octagon.', url: 'https://www.elycathedral.org/about/history-heritage' },
      { claim: 'Ely Cathedral, St Etheldreda: double monastery founded in 673.', url: 'https://www.elycathedral.org/about/history-heritage/st-etheldreda' },
      { claim: 'Ely Cathedral, The Octagon: Norman central tower collapsed on 13 February 1322.', url: 'https://www.elycathedral.org/about/history-heritage/the-octagon' },
      { claim: 'Ely Museum: Ely built on an island of solid land surrounded by marshes.', url: 'https://www.elymuseum.org.uk/' },
      { claim: 'Ordnance Survey Terrain 50, ASCII grid, OS Data Hub downloads; NHLE open data for the Cathedral of the Holy Trinity (1331690).', url: 'https://api.os.uk/downloads/v1/products/Terrain50/downloads' }
    ],
    rejectedClaims: [
      'A flood forecast for Ely: Terrain 50 smooths banks and embankments and shows the drained land surface; the 1.5 m figure is a model answer for one map and one square.',
      'Ely\'s rank among England\'s smallest cities: a disputed comparison, not used.',
      'The cathedral\'s claim to be the third longest medieval cathedral in England: not needed and not used; its length in metres is used instead.',
      'Peat shrinkage figures since drainage: no fetchable primary source used; the page says only that the map shows land after centuries of drainage.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Ordnance Survey, Ely Cathedral, Ely Museum, Historic England or East Cambridgeshire District Council.'
    ]
  }
};
