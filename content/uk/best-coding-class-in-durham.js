'use strict';
// Durham (cg- city page, UK cluster Phase 4). Spine: could the monks on the central tower have seen the Battle of
// Neville's Cross? Bresenham line of sight over OS Terrain 50 (ASCII grid, OS Downloads API, release 20260529, tiles
// NZ13 to NZ35 mosaicked, 50 m cells; scratchpad dur/los.py, vs.py, inf.py), observer at the NHLE point for the
// Cathedral (list entry 1161023, NZ 27360 42144; Terrain 50 cell 65.1 m), target eye 1.7 m, curvature with refraction
// k 0.13 (0.08 m drop at 1,110 m). Neville's Cross (scheduled monument 1016622, scheduled 6 December 1927; listed
// Grade II 1323226) at NZ 26257 42022, cell 102.6 m, 1,110 m away, 23 Bresenham cells, profile dips to 29.9 m at
// the Wear; eye height needed to see a person there 10.4 m (bisection). Registered battlefield 1000024, Battle of
// Neville's Cross 1346, registered 6 June 1995, area_ha 39.31 (157 cells of 50 m = 39.25 ha by cell centres), ground
// 68.0 to 103.6 m, 1,251 to 2,122 m away. Cells visible by observer height: 0 to 30 m none; 40 m 3; 50 m 4; 60 m 16;
// 70 m 37 (24 percent). Eye height needed per cell: min 32.2 m, median 85.2 m; within 100 m 101 cells, 150 m 122,
// 200 m 131; 14 hidden even at 300 m. Bresenham and dense bilinear sampling (5 m steps) agree on 157 of 157 cells at
// 20 m and 40 m. Viewshed within 5 km (31,416 cells): ground 6.3 percent, 40 m 40.4 percent, 70 m 65.1 percent;
// 1,854,044 Bresenham cell visits per viewshed.
// Lesson family: Bresenham rasterisation and line of sight / viewshed (integer line drawing, max-slope test, bisection
// for minimum height, sampling validation, cost of the naive viewshed). Screened 23 September 2026: Bresenham, line of
// sight, viewshed 0 hits.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, County Durham E06000047: TS001 522,068 usual
// residents, 508,762 in households, 13,306 communal; TS068 98,781 students of 497,316 aged 5 and over (19.9 percent,
// England 20.4); TS006 234.5 per square km (England 433.5). MSOA E02004314 (House of Commons Library name Durham
// City): 12,666 residents, 6,351 in households, 6,315 in communal establishments; 10,073 students of 12,608 aged 5
// and over (79.9 percent); 5,354 aged 20 to 24 (42.2 percent); density 1,787.9. E02004313 Gilesgate and Old Durham
// 6,746; E02004315 Aykley Heads, Neville's Cross and Langley Moor 13,300; E02004309 Pity Me and Framwellgate Moor
// 6,194. Durham World Heritage Site website (stewarded by Durham Cathedral, Durham University, Durham County Council
// and St John's College): UNESCO inscribed the site in 1986; Towers page: central tower enlarged in the late 13th
// century, struck by lightning and repaired in 1429, struck again thirty years later, new tower built 1465 to 1474,
// a second storey added ten years later; medieval sources say in 1346 the monks watched the Battle of Neville's Cross
// from the top of the central tower and sang when they saw the Scots defeated; monks later climbed on 17 October to
// sing three anthems, to the north, south and east. Architectural importance page: rib vaults and pointed arches
// allowed greater height. NHLE: Cathedral Grade I, listed 6 May 1952.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'DURHAM', blurb: 'The cathedral city on the Wear, with a project that asks whether monks on the tower in 1346 could really have watched a battle.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-durham',
  code: 'drm',
  accent: '#1E3C67',
  accentRationale: 'Durham: a deep river blue for the Wear around the peninsula, from the solver (8.98:1 on every paper tint, dE 6.7 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Durham',
    eyebrow: 'Durham, County Durham',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Durham' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Durham, England',
  title: 'Best Coding Classes in Durham | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Durham learners aged 6 to 67, from Gilesgate and Framwellgate Moor to Belmont. Your first lesson is free.',
  ogDescription: 'Coding and AI lessons for Durham, on a page that tests whether monks on the cathedral tower in 1346 could have seen the Battle of Neville\'s Cross.',
  twitterDescription: 'Durham learners aged six to sixty-seven can study coding, Python and AI with us in live online lessons, starting with a free one.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Durham Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, maps and terrain data, AI and mathematics taught live online in English to Durham children, teenagers and adults, individually or in small groups by level.'
  },

  h1: 'Coding classes in Durham',
  capsuleQ: 'What are the best coding classes in Durham?',
  capsule: 'County Durham had 522,068 usual residents at the 2021 census, and in the middle-layer area the House of Commons Library calls Durham City, 10,073 of the 12,608 residents aged five and over were students. The Durham World Heritage Site says UNESCO inscribed the castle and cathedral in 1986. From our base in India we teach Durham learners aged six to sixty-seven over live video, either on their own with a teacher or in a class of five to ten at a matching level, with lesson times set around UK days. The first lesson costs nothing, and after it a group place is USD 100 a month and private teaching USD 150.',
  lead: 'Medieval sources, as the World Heritage Site retells them, say that in 1346 the monks of Durham climbed the cathedral\'s central tower and watched the Battle of Neville\'s Cross. Could they? Our teenagers answer with Bresenham\'s line algorithm, which steps across a grid of Ordnance Survey heights one cell at a time, checking whether any hill rises into the line of sight. A person standing at the Neville\'s Cross monument, 1,110 metres away, comes into view from an eye height of just 10.4 metres. The area Historic England registers as the battlefield is another matter: half of it needs an eye more than 85.2 metres above the cathedral\'s ground, and 14 of its 157 cells stay hidden from any height we tried.',
  wa: 'Hello Modern Age Coders, please could we book a free coding lesson for a learner in Durham?',

  picks: {
    eyebrow: 'Course picks for Durham',
    h2: 'Four courses for the cathedral city',
    intro: 'Pick by what the learner already enjoys; the level is settled in the free live lesson that opens every course, which never needs a card to book.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, where sprites move across a grid step by step, much as a line is drawn on a screen.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from a first program to full projects, the base a teenager needs to load a grid of heights and trace lines across it.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Working with real data files in Python, including checking a result by computing it two different ways.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults whose work involves maps, sites and plans, from reading open data to answering a clear question with it.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Durham today',
      h2: 'A county of half a million and a city of students',
      intro: 'Census 2021 figures from the Office for National Statistics on Nomis, for the County Durham unitary authority and for four middle-layer areas around the city, named by the House of Commons Library.',
      body: [
        { kind: 'table', caption: 'County Durham and Durham city areas, Census 2021', head: ['Area', 'Usual residents', 'Students among those aged 5 and over', 'Residents per square kilometre'], rows: [
          ['County Durham', '522,068', '19.9%', '234.5'],
          ['Durham City', '12,666', '79.9%', '1,787.9'],
          ['Gilesgate and Old Durham', '6,746', '35.6%', '2,086.8'],
          ['Aykley Heads, Neville\'s Cross and Langley Moor', '13,300', '40.1%', '1,052.6'],
          ['Pity Me and Framwellgate Moor', '6,194', '20.0%', '2,439.6'],
          ['England', '56,490,048', '20.4%', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Colleges on the map', p: 'In the Durham City area, 6,315 of the 12,666 residents lived in communal establishments such as college accommodation, and 42.2% were aged 20 to 24.' },
          { h3: 'A spread-out county', p: 'County Durham as a whole had 234.5 residents per square kilometre, well under England\'s 433.5, with 508,762 people living in households.' },
          { h3: 'Close to the national mix', p: 'Across the county, 19.9% of residents aged five and over were in study, near England\'s 20.4%; the city centre is the exception, not the rule.' }
        ] },
        { kind: 'p', text: 'Our Durham learners reflect that range. A Year 3 child in Newton Hall might be making a first animation, a Year 10 student in Gilesgate choosing GCSE Computer Science projects, and an adult in Framwellgate Moor learning Python for work, each in a small group at the right level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'The peninsula',
      h2: 'A tower rebuilt after lightning, and a battle watched from the top',
      intro: 'From the Durham World Heritage Site\'s own pages and Historic England\'s open listing data.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1346', p: 'Medieval sources, the World Heritage Site says, record that the monks watched the Battle of Neville\'s Cross from the top of the central tower and began to sing when they saw the Scots defeated.' },
          { h3: '1429 and after', p: 'The central tower was struck by lightning and repaired in 1429, then struck again thirty years later. A new tower was built between 1465 and 1474, and a second storey followed ten years later.' },
          { h3: '1986', p: 'UNESCO inscribed Durham Castle and Cathedral on the World Heritage List. Historic England lists the Cathedral at Grade I, and records a registered battlefield for 1346 on the city\'s western edge.' }
        ] },
        { kind: 'p', text: 'The dates matter for our project. The tower visitors climb today was built more than a century after the battle, so the tower the monks stood on in 1346 was an earlier one, and we could not find its height in any source we were able to check. That is why the project asks how high an eye would need to be, rather than pretending to know. The site also recalls that, for many years afterwards, monks climbed the tower on 17 October to sing to the north, south and east, with St Cuthbert\'s shrine still at the heart of the cathedral below.' },
        { kind: 'spec', title: 'Where the heights come from', p: 'Ordnance Survey Terrain 50 is a free grid of ground heights across Great Britain, one value for every 50 metre square. It shows bare ground, with no buildings or trees, which suits a question about 1346 better than a modern surface would, though it smooths the steep banks of the peninsula.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Could the monks have seen the Battle of Neville\'s Cross?',
      intro: 'Bresenham\'s algorithm picks the grid cells a straight line passes through using only whole-number steps. Line of sight then asks whether any cell along the way rises above the line from eye to target.',
      body: [
        { kind: 'table', caption: 'Registered battlefield of Neville\'s Cross, 157 cells of Terrain 50, seen from the Cathedral\'s listed position; target a person 1.7 metres tall', head: ['Eye height above the cathedral\'s ground', 'Cells in view', 'Share'], rows: [
          ['0 to 30 metres', '0', '0%'],
          ['40 metres', '3', '2%'],
          ['50 metres', '4', '3%'],
          ['60 metres', '16', '10%'],
          ['70 metres', '37', '24%'],
          ['Any height up to 300 metres', '143', '91%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Draw the line', p: 'From the cathedral cell to the monument cell, Bresenham visits 23 squares, updating a running error term with whole-number additions and never touching a fraction. The heights dip to 29.9 metres where the line crosses the Wear.' },
          { h3: '2. Test the slope', p: 'Work out the angle from the eye to the target, then check each square in between. If any square\'s angle is steeper, the target is hidden. At 1,110 metres, the curve of the Earth changes heights by only 0.08 metres.' },
          { h3: '3. Find the height', p: 'Visibility only improves as the eye rises, so bisection can find the lowest eye that works: 10.4 metres for the monument, from 32.2 metres to well over 85.2 metres for the battlefield squares.' }
        ] },
        { kind: 'callout', h3: 'A story the terrain neither proves nor rules out', p: 'The monument itself is easy to see, but the registered battlefield lies beyond rising ground as seen from the cathedral, and even from 70 metres most of it stays hidden. That does not mean the chroniclers were wrong. Fighting moves, the registered boundary is a modern judgement, and a person 1.7 metres tall is only one choice of target. What the model does show is exactly which assumptions the story depends on, and that is the most useful thing a model can do.' },
        { kind: 'p', text: 'We checked the method as well as the answer. Sampling each line every 5 metres with smoothly interpolated heights, instead of Bresenham\'s whole squares, gave the same verdict for all 157 battlefield cells at 20 and 40 metres. Widening the question to a full viewshed, every square within 5 kilometres, shows the cost of the simple approach: 1,854,044 square visits for one eye height, with 6.3% of the area in view from the ground, 40.4% from 40 metres and 65.1% from 70 metres.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Line of sight in practice',
      h2: 'Five checks before trusting a visibility map',
      intro: 'Practised on Neville\'s Cross, then used for phone masts, wind farm planning, security cameras, games and flight paths.',
      body: [
        { kind: 'table', caption: 'Decisions behind any line of sight answer', head: ['Check', 'For the 1346 question', 'If it is skipped'], rows: [
          ['What surface?', 'Bare ground, no buildings or trees', 'A modern town hiding a medieval view'],
          ['How fine a grid?', '50 metre squares, steep banks smoothed', 'Cliffs turned into slopes without warning'],
          ['Where exactly is the eye?', 'The listed point, at stated heights', 'One precise answer from an unknown height'],
          ['What counts as seen?', 'A person 1.7 metres tall', 'Ground level targets, which hide far more easily'],
          ['Does the method agree with another?', 'Bresenham against 5 metre sampling', 'A grid artefact reported as history']
        ] },
        { kind: 'p', text: 'The third row changes everything. Report one height and the page would announce either that the monks saw the battle or that they could not, and both would sound certain. Reporting the answer across a range of heights, and saying plainly that the 1346 tower\'s height is unknown, is less dramatic and much more honest.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Drawing lines on squared paper square by square, then standing toy figures behind blocks to see who can spot whom.' },
          { h3: 'Teenagers', p: 'Bresenham in Python, a height grid from Ordnance Survey, a line of sight test, bisection for the lowest eye, and a second method to check the first.' },
          { h3: 'Adults', p: 'Visibility and terrain questions at work, with the surface, grid size and assumptions written down beside every map.' }
        ] },
        { kind: 'p', text: 'We are not connected with Durham Cathedral, Durham University, the Durham World Heritage Site, Historic England, Ordnance Survey or Durham County Council. The height grid, listing records and census tables are open data; the lines, heights and viewsheds on this page are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From squared paper to a viewshed',
    intro: 'Treat the age bands as a guide; the free lesson decides where each learner begins.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Lines on a grid', p: 'Colouring the squares a straight line passes through, and hiding figures behind blocks to test who can see whom.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Grids in code', p: 'Storing a small map of heights as a list of lists in Python and finding the tallest square along a row.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Bresenham and sightlines', p: 'Writing Bresenham\'s algorithm, testing line of sight on real Ordnance Survey heights and finding the lowest eye by bisection.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Terrain questions at work', p: 'Answering visibility and site questions with open height data, and stating every assumption alongside the result.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can draw a map in seconds. Why should a Durham teenager trace a line through one?',
    intro: 'Because the useful question is not what the answer is, but what it depends on.',
    p1: 'Ask an AI tool whether the monks could see the battle and it will probably give a confident yes or no. A learner who has traced the line square by square knows the answer depends on the tower\'s height, the grid, the surface and what counts as seen, and can ask the tool the questions that expose a guess.',
    p2: 'Bresenham\'s algorithm is also a reminder that fast, simple code still runs everywhere. It was designed for drawing lines with whole numbers, and the same idea of stepping through a grid sits behind graphics, games and robot navigation. Building it by hand makes the grid underneath modern tools visible.',
    closer: 'So a Durham teenager should keep learning to code in 2026, within sight of a tower rebuilt after lightning: machines will answer quickly, but someone has to know which assumptions the answer is standing on.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Gilesgate, Belmont or Brandon, and never a trip to the peninsula',
    intro: 'The city spreads from the colleges by the river to the estates and villages on the hills around it. Online, every one of them is next door to the lesson.',
    cells: [
      { h3: 'Hills and river', p: 'A learner in Sherburn and another in Ushaw Moor can share one class without crossing the Wear or finding a bus into town.' },
      { h3: 'English school stages', p: 'We teach to the stages used in County Durham schools, Reception and Key Stages 1 to 4 through to GCSE and A level, entirely in English.' },
      { h3: 'A lesson with substance', p: 'The free session works through a real task and closes with a recommended level, course and weekly slot. We do not ask for card details.' },
      { h3: 'Stage, not postcode', p: 'Groups hold five to ten learners at the same stage, from Durham, the rest of the UK and overseas, so every level has sensible times.' },
      { h3: 'Two lessons a week', p: 'Two regular lessons each week, around eight a month, with half terms and exam seasons planned with the teacher in advance.' },
      { h3: 'An evening here, late there', p: 'A 4.30 pm lesson in Durham starts at 9 pm in India while the UK is on summer time and at 10 pm in winter, because India keeps one time zone all year; our teachers work their evenings around UK families.' }
    ],
    spec: { title: 'Across the North East', p: 'Families in Chester-le-Street, Spennymoor, Bishop Auckland or Consett join the same live groups, since every class is online and arranged by level.' }
  },

  fees: {
    h2: 'Durham lesson fees',
    intro: 'The first lesson is free; after that there is one monthly fee.',
    first: 'A full lesson with nothing to pay, ending with advice on level, course and a weekly slot.',
    group: 'Roughly eight live lessons a month, in a group of five to ten learners at one stage.',
    private: 'Roughly eight live lessons a month, with the teacher working with your learner alone.',
    closer: 'Whether you live in Newton Hall or Neville\'s Cross, the fee is set in US dollars, as it is for every family outside India, and the site shows no pound prices. Nothing is billed until after the free lesson, when the course and weekly slot are agreed; pauses, missed lessons and changing between group and private teaching are all set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from families, word for word',

  book: {
    h2: 'Book a free lesson for a Durham learner',
    intro: 'The first task depends on the learner: a grid-drawing game for a young child, a short Python program that finds the highest square on a map for a beginner, or Ordnance Survey heights and Bresenham\'s line for a teenager ready for real data.',
    success: 'Thank you. We will get in touch soon to arrange a lesson for your Durham learner.'
  },

  faq: {
    h2: 'Durham coding class questions',
    intro: 'The questions we hear most often from Durham families.',
    items: [
      { q: 'How many people live in County Durham?', a: 'The 2021 census counted 522,068 usual residents in the County Durham unitary authority, 508,762 of them in households. The middle-layer area the House of Commons Library names Durham City had 12,666.' },
      { q: 'Why is the Durham City area so different from the county?', a: 'It is where many students live: 10,073 of its 12,608 residents aged five and over were studying in 2021 (79.9%, against 19.9% for the county), and 6,315 residents lived in communal establishments such as college accommodation.' },
      { q: 'What is Bresenham\'s line algorithm?', a: 'A method published by Jack Bresenham in 1965 for choosing which grid squares a straight line passes through using only whole-number addition and comparison. It was designed to control a digital plotter, later drew lines on screens, and is used here to walk across a grid of heights.' },
      { q: 'Could the monks see the Battle of Neville\'s Cross?', a: 'It depends on assumptions. On Ordnance Survey Terrain 50, a person at the Neville\'s Cross monument is visible from 10.4 metres above the cathedral\'s ground, but most of the registered battlefield needs an eye far higher, and the height of the 1346 tower is unknown.' },
      { q: 'Where do the heights and battlefield come from?', a: 'The heights are Ordnance Survey Terrain 50, free open data on a 50 metre grid. The Cathedral\'s position, the monument and the registered battlefield boundary come from Historic England\'s open listing data.' },
      { q: 'What happened to the cathedral\'s central tower?', a: 'The Durham World Heritage Site says it was struck by lightning and repaired in 1429, struck again thirty years later, and rebuilt between 1465 and 1474, with a second storey added ten years later. We are not connected with the Cathedral or the World Heritage Site.' },
      { q: 'What times do Durham lessons run?', a: 'Durham families usually go for a slot after school, a weekday evening or a weekend morning, and we agree the time in the free lesson. India runs four and a half hours ahead of the UK in summer and five and a half in winter.' },
      { q: 'Do you have a centre in Durham?', a: 'No. We have no Durham centre and no premises anywhere in the UK, because every lesson is live online. Learners need a computer with sound and a stable connection, and the number you will call is Indian.', boiler: true },
      { q: 'How much are lessons for a Durham learner?', a: 'The first lesson is free. Then a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one lessons on the same timetable are USD 150 a month. The course, format and time are agreed before anything is charged.', boiler: true },
      { q: 'How do you decide which group a learner joins?', a: 'By level, pace and aims rather than age or address, so each group has five to ten learners at one stage. If no group fits the learner\'s timetable, one-to-one lessons are available instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The North East and beyond',
    html: 'Down the road, the <a class="cg-inline-link" href="/best-coding-class-in-sunderland">Sunderland page</a> builds a quadtree so a search can skip most of the map, and <a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle upon Tyne</a> colours 26 wards with four colours. Further south, <a class="cg-inline-link" href="/best-coding-class-in-hull">Hull</a> floods a grid of heights cell by cell. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out the school stages, and every other city is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Durham and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-sunderland', label: 'Sunderland' },
    { href: '/best-coding-class-in-newcastle-upon-tyne', label: 'Newcastle upon Tyne' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-drm .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.4vw, 2.7rem); }
.cg-root.cg-drm .cg-hero h1 { font-weight: 700; letter-spacing: -0.028em; line-height: 1.04; }
.cg-root.cg-drm .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-drm .cg-eyebrow { letter-spacing: 0.18em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-drm .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.018em; }
.cg-root.cg-drm .cg-grid-3 { gap: clamp(1.1rem, 2.6vw, 2.2rem); }
.cg-root.cg-drm .cg-table th { letter-spacing: 0.02em; }
.cg-root.cg-drm .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-drm .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-drm .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'County Durham, Census 2021 via Nomis (E06000047): TS001 522,068 usual residents, 508,762 in households, 13,306 in communal establishments; TS068 98,781 students of 497,316 aged 5 and over (19.9 percent, England 20.4); TS006 234.5 per square kilometre (England 433.5). MSOAs (House of Commons Library names): E02004314 Durham City 12,666 residents, 6,351 in households, 6,315 communal, 10,073 students of 12,608 (79.9 percent), 5,354 aged 20 to 24 (42.2 percent), 1,787.9 per square kilometre; E02004313 Gilesgate and Old Durham 6,746 (35.6 percent students, 2,086.8); E02004315 Aykley Heads, Neville\'s Cross and Langley Moor 13,300 (40.1 percent, 1,052.6); E02004309 Pity Me and Framwellgate Moor 6,194 (20.0 percent, 2,439.6). Durham World Heritage Site: UNESCO inscription 1986; Towers page: 1429 repair, second strike thirty years later, new tower 1465 to 1474, second storey ten years later; 1346 monks watched the Battle of Neville\'s Cross from the central tower; 17 October anthems.',
    localProject: 'Could the monks have seen the Battle of Neville\'s Cross? OS Terrain 50 (50 m), observer at NHLE 1161023 (cell 65.1 m), target 1.7 m, curvature and refraction k 0.13. Monument (1016622) 1,110 m away, 23 Bresenham cells, needs 10.4 m. Registered battlefield 1000024, 157 cells: visible 0 to 30 m none, 40 m 3, 50 m 4, 60 m 16, 70 m 37; per-cell needed height min 32.2, median 85.2; 14 hidden at 300 m (143 visible at some height). Bresenham vs 5 m bilinear sampling agree 157 of 157 at 20 and 40 m. 5 km viewshed (31,416 cells): 6.3, 40.4, 65.1 percent at 0, 40, 70 m; 1,854,044 cell visits. Lesson family: Bresenham rasterisation and line of sight.',
    requiredMentions: [
      '522,068',
      '12,666',
      '10,073',
      '234.5',
      'Neville\'s Cross',
      '1346',
      'Cuthbert',
      'Bresenham',
      '1,854,044',
      'Framwellgate',
      'Gilesgate',
      '1465'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001: County Durham 522,068 usual residents; MSOA E02004314 12,666 (6,315 communal); E02004313, E02004315, E02004309.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000047,E02004314,E02004313,E02004315,E02004309' },
      { claim: 'Nomis, Census 2021 TS068: students aged 5 and over, County Durham 19.9 percent; Durham City MSOA 10,073 of 12,608 (79.9 percent).', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000047,E02004314,E02004313,E02004315,E02004309,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: density, County Durham 234.5 per square kilometre; MSOA densities.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E06000047,E02004314,E02004313,E02004315,E02004309,E92000001' },
      { claim: 'Nomis, Census 2021 TS007A: Durham City MSOA 5,354 aged 20 to 24 (42.2 percent).', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E02004314,E92000001' },
      { claim: 'House of Commons Library, MSOA Names 2.2: E02004314 Durham City and neighbouring area names.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'Durham World Heritage Site, Towers: 1346 monks on the central tower; 1429 repair; new tower 1465 to 1474; second storey.', url: 'https://www.durhamworldheritagesite.com/learn/architecture/cathedral/intro/towers' },
      { claim: 'Durham World Heritage Site home page: UNESCO inscribed the site in 1986; stewards.', url: 'https://www.durhamworldheritagesite.com/' },
      { claim: 'Historic England NHLE open data: Cathedral 1161023 Grade I; Neville\'s Cross 1016622 and 1323226; registered battlefield 1000024 (Battle of Neville\'s Cross 1346).', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1000024' },
      { claim: 'Ordnance Survey Terrain 50, ASCII grid, OS Data Hub downloads.', url: 'https://api.os.uk/downloads/v1/products/Terrain50/downloads' }
    ],
    rejectedClaims: [
      'A verdict that the monks did or did not see the battle: the height of the 1346 tower is unknown and the answer is given across a range of eye heights.',
      'The height of the present central tower: not found in a fetchable primary source; the present tower postdates the battle anyway.',
      'UNESCO World Heritage Centre page for Durham: returned 403 and was not circumvented; the inscription year comes from the Durham World Heritage Site.',
      'Historic England list entry pages: 403 to scripted requests, not circumvented; names, grades, dates and boundaries come from the NHLE open data layer.',
      'A County Durham figure presented as the city: the page separates the unitary authority from the Durham City middle-layer area.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules. The Cathedral is described as heritage only.',
      'Any affiliation with Durham Cathedral, Durham University, the Durham World Heritage Site, Historic England, Ordnance Survey or Durham County Council.'
    ]
  }
};
