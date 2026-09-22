'use strict';
// Exeter (cg- city page, UK cluster Phase 4). Spine: the right order, and the missing link.
// Topological sort (Kahn's algorithm) on the directed river network upstream of Exeter in Ordnance Survey Open
// Rivers (WatercourseLink shapefile, OS Downloads API, read 22 September 2026; scratchpad ext/topo.py, chk.py,
// fix.py). Box E 260000 to 335000, N 75000 to 155000 (4,549 links). Outlet: the River Exe link ending at 291373,
// 92510 near Exeter Quay. As published: 774 links and 775 nodes drain to the outlet, 307 sources (nodes with nothing
// flowing in), 712.7 km of channel; Kahn's algorithm orders all 775 nodes, so the subgraph has no cycle; no node
// splits flow; accumulating length in topological order gives the same 712.7 km; longest chain 93 links. Named
// River Culm in the box 56.3 km, of which 16.3 km reaches the outlet: one Culm link ends at 298034, 101020 with
// nothing downstream, and the next Culm link starts 417.5 m away at 297623, 101095 with nothing flowing in. Adding
// that single 417.5 m link: 1,086 links, 431 sources, 911.8 km (199.1 km more); River Culm reaching Exeter 56.7 km;
// upstream length where the Culm joins the Exe 25.0 km before, 224.1 km after. River Creedy system 186.9 km (164
// links). Named lengths after the repair: River Exe 90.0 km, Culm 56.7, Barle 36.8, Yeo 22.0, Lowman 17.6; unnamed
// 366.4. The box holds 112 sink nodes (most at the coast). The file alone cannot say whether the gap is a culvert,
// a leat or an omission; the page says so.
// Lesson family: topological sort and dependency order (Kahn's algorithm, cycle detection, accumulation in order,
// and a graph that is correct but incomplete). Screened 22 September 2026: topological sort 0 hits (Dutch "dag"
// only); distinct from Hull flood fill, Portsmouth min cut and Belfast PageRank.
// Place facts read raw 22 September 2026: Census 2021 via Nomis, Exeter E07000041: TS001 130,709 usual residents,
// 120,940 in households, 9,769 in communal establishments; TS007A 11,766 aged 15 to 19 (9.0 percent, England 5.7),
// 16,349 aged 20 to 24 (12.5, England 6.0), 8,958 aged 25 to 29 (6.9, England 6.6); TS068 35,774 students of 124,823
// aged 5 and over (28.7 percent, England 20.4); TS006 2,780.0 usual residents per square km (England 433.5). Met
// Office, Our history: founded 1854 by Vice-Admiral Robert FitzRoy, captain of HMS Beagle; storm warning service
// from early 1861, now the shipping forecast, thought to be the longest running national forecasting service in the
// world; first public weather forecast written for 31 July 1861; headquarters moved from Bracknell to Exeter in
// 2003; Flood Forecasting Centre established 2007.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'EXETER', blurb: 'The city on the Exe, with a project that puts a whole river network in order and finds 199 kilometres hiding behind one missing link.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-exeter',
  code: 'ext',
  accent: '#456A1B',
  accentRationale: 'Exeter: a Devon field green from the solver (5.12:1 on every paper tint, dE 7.4 from the nearest used accent), yellower than the Plymouth green and brighter than the Cardiff green',
  pageType: 'city',
  place: {
    name: 'Exeter',
    eyebrow: 'Exeter, Devon',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Exeter' },
      { type: 'AdministrativeArea', name: 'Devon' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Exeter, England',
  title: 'Best Coding Classes in Exeter | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Exeter learners aged 6 to 67, from Heavitree and St Thomas to Pennsylvania. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Exeter, on a page that sorts the whole River Exe network into flow order and finds 199 km hidden behind one missing link.',
  twitterDescription: 'Exeter learners aged six to sixty-seven can learn coding, Python and AI with us in live online lessons, with the first one free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '22 September 2026',
  courseSchema: {
    name: 'Exeter Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, algorithms, AI and mathematics taught live online in English to Exeter children, teenagers and adults, in small groups matched by level or one to one.'
  },

  h1: 'Coding classes in Exeter',
  capsuleQ: 'What are the best coding classes in Exeter?',
  capsule: 'Census 2021 counted 130,709 usual residents in Exeter, and 28.7% of those aged five and over were in school or full-time study, against 20.4% in England. The Met Office, founded in 1854 by Robert FitzRoy, moved its headquarters from Bracknell to Exeter in 2003. We teach Exeter learners from six to sixty-seven by live video, either privately or in small classes of five to ten grouped by ability, and our India-based teachers keep to UK hours. The opening lesson carries no charge, and after that a group place costs USD 100 a month and one-to-one lessons USD 150 a month.',
  lead: 'Every stream in the Exe catchment flows somewhere, so the river network is a set of arrows. To add up how much river drains past Exeter Quay, a program must visit the streams in the right order, sources first and the outlet last. That order is a topological sort, and on Ordnance Survey\'s river data it works perfectly: 775 junctions, no loops, 712.7 kilometres of channel. The number is still wrong. One link of the River Culm ends 417.5 metres short of the next, joined to nothing, so almost everything above that point never reaches Exeter in the data. Bridge that one gap and the total jumps to 911.8 kilometres. Our teenagers learn that a correct algorithm on an incomplete graph gives a confident wrong answer.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Exeter.',

  picks: {
    eyebrow: 'Course picks for Exeter',
    h2: 'Four courses for the city on the Exe',
    intro: 'Pick the course that matches what the learner already likes doing. There is a free live lesson at the start of every one, and nobody asks for a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Puzzles about doing things in the right order, like getting dressed or building a model, the everyday form of a topological sort.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Graphs, queues and ordering algorithms built from scratch, the tools this page uses on the River Exe.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from a first program to full projects, including reading a real map file and walking its connections.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Python for adults beginning or returning, from scripts to handling dependencies and data in real projects.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Exeter today',
      h2: 'A university city on the edge of Dartmoor',
      intro: 'Census 2021 figures for the Exeter council area, drawn from Nomis and printed as the Office for National Statistics published them.',
      body: [
        { kind: 'table', caption: 'Exeter, Census 2021', head: ['Measure', 'Exeter', 'England'], rows: [
          ['Usual residents', '130,709', '56,490,048'],
          ['Living in households', '120,940', 'Not compared'],
          ['Living in communal establishments', '9,769', 'Not compared'],
          ['Aged 15 to 19', '11,766 (9.0%)', '5.7%'],
          ['Aged 20 to 24', '16,349 (12.5%)', '6.0%'],
          ['Aged 25 to 29', '8,958 (6.9%)', '6.6%'],
          ['Students among residents aged 5 and over', '35,774 (28.7%)', '20.4%'],
          ['Usual residents per square kilometre', '2,780.0', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Students everywhere', p: 'Of 124,823 residents aged five and over, 35,774 were schoolchildren or full-time students in 2021, 28.7% against 20.4% for England.' },
          { h3: 'Late teens and early twenties', p: 'Those aged 15 to 19 made up 9.0% of Exeter and those aged 20 to 24 another 12.5%, both far above the English shares.' },
          { h3: 'Halls and houses', p: 'Student halls and other communal establishments housed 9,769 people in 2021, a large number for a city of this size; the other 120,940 residents lived in private households.' }
        ] },
        { kind: 'p', text: 'Our Exeter learners come from every stage. A Year 4 pupil in Heavitree might be making a first game, a Year 12 student in St Thomas starting A level Computer Science, and a graduate in Pennsylvania learning Python for a new job, each in a group of five to ten learners at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Forecasting from Exeter',
      h2: 'The Met Office, from FitzRoy to Exeter',
      intro: 'From the Met Office\'s own history of itself.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1854', p: 'Vice-Admiral Robert FitzRoy, already known as captain of HMS Beagle, founded the Met Office to learn more about the climate at sea and make shipping safer.' },
          { h3: '1861', p: 'FitzRoy began a storm warning service that became the shipping forecast, which the Met Office says is thought to be the longest running national forecasting service in the world, and wrote the first public forecast, for 31 July.' },
          { h3: '2003 and 2007', p: 'The Met Office moved its headquarters from Bracknell to Exeter in 2003, and established the Flood Forecasting Centre in 2007.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Met Office. It belongs on this page because flood forecasting starts with the question the project below asks: which streams feed which rivers, in what order, and how much of the landscape drains past a given point. Answering that for real needs connected, correct data, and the project shows what happens when one piece is missing.' },
        { kind: 'spec', title: 'Where the rivers come from', p: 'Ordnance Survey publishes Open Rivers as free open data: every watercourse in Great Britain as a network of links running in the direction of flow, joined at named and unnamed junctions. Around the Exe it holds thousands of links, from moorland streams to the tidal estuary.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Putting the River Exe in order, and finding the missing link',
      intro: 'A topological sort lists the junctions so that every stream comes before the junction it flows into. Adding up river length in that order is then a single pass.',
      body: [
        { kind: 'table', caption: 'The river network draining past Exeter Quay in OS Open Rivers, before and after bridging one 417.5-metre gap in the River Culm', head: ['Measure', 'As published', 'With the gap bridged'], rows: [
          ['Links draining to Exeter Quay', '774', '1,086'],
          ['Sources, with nothing flowing in', '307', '431'],
          ['Total channel length', '712.7 km', '911.8 km'],
          ['River length above the Culm\'s meeting with the Exe', '25.0 km', '224.1 km'],
          ['Named River Culm reaching Exeter', '16.3 km', '56.7 km'],
          ['Loops found by the sort', 'None', 'None']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count what flows in', p: 'For every junction, count the links arriving. Junctions with none are sources, high on the moors or in the fields, and they go into a queue first.' },
          { h3: '2. Release in order', p: 'Take a junction from the queue, pass its accumulated length downstream, and when a junction has heard from every stream above it, add it to the queue. This is Kahn\'s algorithm.' },
          { h3: '3. Prove there are no loops', p: 'If the queue empties before every junction is visited, the network contains a loop and cannot be ordered. On the Exe all 775 junctions were ordered, so water only ever flows one way.' }
        ] },
        { kind: 'callout', h3: 'A perfect algorithm, a wrong answer', p: 'In the published data, one River Culm link ends at a point with nothing downstream, and the next Culm link begins 417.5 metres away with nothing flowing into it. The sort cannot see the connection, so it treats everything above the gap as a separate river system that never reaches Exeter. Adding that one short link brings 199.1 kilometres of channel back into the total. The file alone cannot tell us whether the gap is a culvert, a mill channel or a mapping omission, and the page does not guess.' },
        { kind: 'p', text: 'With the gap bridged, the River Exe itself contributes 90.0 kilometres of named channel, the Culm 56.7, the Barle 36.8 and the Yeo 22.0, while 366.4 kilometres of smaller streams carry no name at all. The Creedy and its tributaries add 186.9 kilometres above their meeting with the Exe. The longest chain of links from any source to Exeter Quay is 93 links long.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Order and dependency',
      h2: 'Five checks for any dependency graph',
      intro: 'Learned on a river, then used on course prerequisites, build systems, spreadsheet formulas, project plans and the pipelines that train AI models.',
      body: [
        { kind: 'table', caption: 'Ordering things that depend on each other', head: ['Check', 'On the Exe network', 'What it catches'], rows: [
          ['Is there a cycle?', 'All 775 junctions ordered, so none', 'Tasks that wait on each other for ever'],
          ['Where are the sources?', '307 as published, 431 after the repair', 'Starting points that are really broken ends'],
          ['Where are the sinks?', '112 end points in the wider box, most where rivers meet the sea', 'Paths that stop without reaching anywhere'],
          ['Does the total add up?', 'Accumulated length equals the sum of links', 'Double counting at splits or missed branches'],
          ['Is the graph complete?', 'One 417.5 m gap hides 199.1 km', 'A correct answer to the wrong question']
        ] },
        { kind: 'p', text: 'Dead ends are the clue. A source should be high ground and a sink should be the sea; a river that simply stops inland, or starts from nowhere a few hundred metres further on, is worth a look. Learners write a check that lists loose ends lying close together. Here the gap showed up another way: the file holds 56.3 kilometres of channel named River Culm, and only 16.3 of them reached Exeter.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Cards for getting ready for school, put in an order that works, and the discovery that some cards can swap and some cannot.' },
          { h3: 'Teenagers', p: 'Open Rivers read in Python, Kahn\'s algorithm, length accumulated downstream, and a search for loose ends that reveals the gap.' },
          { h3: 'Adults', p: 'Dependency graphs at work, from build pipelines to project plans, with completeness checked before the order is trusted.' }
        ] },
        { kind: 'p', text: 'We are not connected with Ordnance Survey, the Met Office or Exeter City Council. Ordnance Survey releases Open Rivers under the Open Government Licence, and the census tables are free to download; every ordering, total and repair described above is our own working, and none of it is a hydrological survey.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From getting dressed in order to a topological sort',
    intro: 'The age bands give only a rough idea; the free lesson finds the real starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'First things first', p: 'Putting everyday steps in an order that works and spotting which steps must wait for others.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Arrows and maps', p: 'Drawing which stream flows into which, storing it in code, and following the arrows to the sea.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Sorting a graph', p: 'Kahn\'s algorithm, cycle detection and accumulation on a real river network, plus checks for missing links.', courses: ['problem-solving-dsa-masterclass-teens', 'competitive-programming-for-teens-course'] },
      { band: 'Ages 18 to 67', h3: 'Dependencies at work', p: 'Ordering tasks, builds and data pipelines, and checking that the graph describes the real system.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write Kahn\'s algorithm in seconds. Why should an Exeter teenager learn it?',
    intro: 'Because the algorithm was never where the Exe went wrong.',
    p1: 'Ask an assistant to total the river length above Exeter and it could write a flawless topological sort and report 712.7 kilometres. Nothing in the code is wrong. A learner who has worked through the network knows to list loose ends, to ask why a river would stop 417.5 metres short of itself, and to treat a clean run as the start of checking rather than the end.',
    p2: 'Modern AI is built from dependency graphs too. Training pipelines, data preparation steps and the layers of a neural network are all run in a topological order by the software that manages them. When a step is missing or a connection is wrong, the system can still finish and still produce numbers, which is exactly why people who understand the graph remain essential.',
    closer: 'So an Exeter teenager should still learn to program in 2026, in the city that forecasts Britain\'s weather: the order of operations can be automated, but noticing what the data left out is still a human skill.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Heavitree, St Thomas or Topsham, from home',
    intro: 'Exeter is compact, but a school-night trip across it still takes time. Live online lessons remove the journey.',
    cells: [
      { h3: 'Either side of the Exe', p: 'A learner in Alphington and another in Pinhoe can sit in the same lesson without either crossing the river.' },
      { h3: 'England\'s school stages', p: 'Reception, Key Stages 1 to 4, GCSEs and A levels, named as Exeter schools name them, with every lesson taught in English.' },
      { h3: 'A real first lesson', p: 'The free session covers a proper task and ends with a recommended level, course and weekly time. There is no card to enter.' },
      { h3: 'Five to ten per group', p: 'Learners at the same stage from Exeter, the rest of the UK and overseas, so every level can find a workable time.' },
      { h3: 'Twice weekly', p: 'Two fixed lessons each week, about eight a month, with holidays and exam periods planned with the teacher well in advance.' },
      { h3: 'Two clocks, one plan', p: 'With no clock change in India, our teachers are four and a half hours ahead of Exeter in British Summer Time and five and a half in winter, so UK after-school and evening lessons fit their working day.' }
    ],
    spec: { title: 'Across Devon', p: 'Families in Exmouth, Crediton, Tiverton or Cullompton join exactly the same classes, because lessons are online and groups are formed by level.' }
  },

  fees: {
    h2: 'Exeter lesson fees',
    intro: 'The first lesson is free, then a single monthly fee.',
    first: 'A complete lesson at no cost, closing with a suggested level, course and weekly time.',
    group: 'About eight live lessons each month in a class of five to ten learners at one level.',
    private: 'About eight live lessons each month, with the teacher working with your learner alone.',
    closer: 'Newtown and Whipton pay exactly what a family in any other country outside India pays, one fee set in US dollars, and you will not see a price in pounds here. The first bill follows the free lesson, never precedes it, and only once a course and a weekly time are fixed. Pauses, a missed lesson or a move from group to private teaching are all explained on our pricing page.'
  },

  reviewsH2: 'What six families wrote on Google, unchanged',

  book: {
    h2: 'Book a free lesson for an Exeter learner',
    intro: 'The first task is set by level: a right-order puzzle for a young child, a short Python program that follows arrows on a small map for a beginner, or Open Rivers and a topological sort for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Exeter learner.'
  },

  faq: {
    h2: 'Exeter coding class questions',
    intro: 'The questions Exeter families ask us most.',
    items: [
      { q: 'How many people live in Exeter?', a: 'Census 2021 counted 130,709 usual residents in the Exeter council area, with 120,940 living in households and 9,769 in communal establishments such as student halls and care homes.' },
      { q: 'How does Exeter compare with England?', a: 'Exeter is much younger and more studious than the country as a whole: 12.5% of its 2021 residents were aged 20 to 24 (England 6.0%), and 28.7% of residents aged five and over were students (England 20.4%). It is also far denser, at 2,780.0 people per square kilometre against 433.5.' },
      { q: 'What is a topological sort?', a: 'An ordering of things that depend on each other, so that each item comes after everything it depends on. For a river network it means listing the streams so every stream comes before the river it flows into.' },
      { q: 'What did the project find on the River Exe?', a: 'The river data upstream of Exeter Quay orders cleanly with no loops, but a 417.5-metre gap in the River Culm cuts off much of its catchment. Bridging it raises the channel length draining past Exeter from 712.7 to 911.8 kilometres.' },
      { q: 'Where does the river data come from?', a: 'Ordnance Survey Open Rivers, free open data under the Open Government Licence, which records every watercourse in Great Britain as links running in the direction of flow.' },
      { q: 'When did the Met Office come to Exeter?', a: 'The Met Office says it moved its headquarters from Bracknell to Exeter in 2003, nearly 150 years after Robert FitzRoy founded it in 1854. We are not connected with the Met Office.' },
      { q: 'At what times are Exeter lessons?', a: 'Most Exeter learners choose a slot after school or after work, and some prefer Saturday or Sunday; the exact time is fixed during the free lesson. Our teachers in India are four and a half hours ahead in the British summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Exeter?', a: 'No. There is no Exeter centre and we have no premises anywhere in the UK; every lesson runs live online. Learners need a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Exeter lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Exeter groups organised?', a: 'By level, pace and aims rather than age or address, with five to ten learners at one stage. When no group suits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The South West and beyond',
    html: 'Down the coast, the <a class="cg-inline-link" href="/best-coding-class-in-plymouth">Plymouth page</a> turns its listed buildings into a density map, and up the M5 <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol</a> divides itself into library catchments. <a class="cg-inline-link" href="/best-coding-class-in-hull">Hull</a> runs a flood fill from the Humber. For key stages, GCSE choices and A levels, read the <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a>; for the full list of towns and cities, start from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Exeter and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-plymouth', label: 'Plymouth' },
    { href: '/best-coding-class-in-bristol', label: 'Bristol' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-ext .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-ext .cg-hero h1 { font-weight: 700; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-ext .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-ext .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ext .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.016em; }
.cg-root.cg-ext .cg-grid-3 { gap: clamp(0.95rem, 2.5vw, 2.1rem); }
.cg-root.cg-ext .cg-table th { letter-spacing: 0.022em; }
.cg-root.cg-ext .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ext .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-ext .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Exeter, Census 2021 via Nomis (E07000041): TS001 130,709 usual residents, 120,940 in households, 9,769 in communal establishments; TS007A 11,766 aged 15 to 19 (9.0 percent, England 5.7), 16,349 aged 20 to 24 (12.5 percent, England 6.0), 8,958 aged 25 to 29 (6.9 percent, England 6.6); TS068 35,774 students of 124,823 residents aged 5 and over (28.7 percent, England 20.4); TS006 2,780.0 usual residents per square kilometre (England 433.5). Met Office, Our history: founded 1854 by Vice-Admiral Robert FitzRoy, captain of HMS Beagle; storm warning service from early 1861, now the shipping forecast, thought to be the longest running national forecasting service in the world; first public forecast written for 31 July 1861; headquarters moved from Bracknell to Exeter in 2003; Flood Forecasting Centre 2007.',
    localProject: 'Putting the River Exe in order. OS Open Rivers WatercourseLink (read 22 September 2026), outlet the River Exe link ending near Exeter Quay (291373, 92510). As published: 774 links, 775 nodes, 307 sources, 712.7 km; Kahn\'s algorithm orders all nodes (no cycle); no flow splits; longest chain 93 links. River Culm gap: a link ends at 298034, 101020 with nothing downstream; the next begins 417.5 m away with nothing flowing in. Bridged: 1,086 links, 431 sources, 911.8 km; Culm confluence upstream length 25.0 to 224.1 km; named Culm reaching Exeter 16.3 to 56.7 km; Creedy system 186.9 km. 112 sink nodes in the wider box. Lesson family: topological sort (Kahn), cycle detection, accumulation, incomplete graphs; distinct from Hull flood fill and Portsmouth min cut.',
    requiredMentions: [
      '130,709',
      '120,940',
      '9,769',
      '2,780.0',
      '16,349',
      '35,774',
      '124,823',
      'FitzRoy',
      'River Culm',
      'topological sort',
      '911.8',
      'Bracknell'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Exeter: 130,709 usual residents; 120,940 in households; 9,769 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000041' },
      { claim: 'Nomis, Census 2021 TS007A: Exeter and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000041,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Exeter 35,774 students of 124,823 aged 5 and over (28.7 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000041,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Exeter 2,780.0 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E07000041,E92000001' },
      { claim: 'Ordnance Survey Open Rivers (shapefile download): watercourse links in the direction of flow.', url: 'https://api.os.uk/downloads/v1/products/OpenRivers/downloads' },
      { claim: 'Met Office, Our history: 1854 FitzRoy, 1861 storm warnings and first public forecast, 2003 move from Bracknell to Exeter, 2007 Flood Forecasting Centre.', url: 'https://www.metoffice.gov.uk/about-us/who-we-are/our-history' }
    ],
    rejectedClaims: [
      'The cause of the River Culm gap: the file cannot show whether it is a culvert, a leat or an omission, so the page states only that the links do not join.',
      'Any flood risk statement for Exeter: the project measures network connectivity and channel length, not flooding.',
      'Exeter Cathedral history page: the page returned navigation only without dated facts, so the Cathedral is not described.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Ordnance Survey, the Met Office or Exeter City Council.'
    ]
  }
};
