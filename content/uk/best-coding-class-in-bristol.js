'use strict';
// Bristol (cg- city page, UK cluster Phase 4). Spine: who is nearest? A Voronoi diagram of Bristol's libraries.
// Sites: Bristol City Council GIS layer ext/ll_leisure_and_culture/MapServer/0 (27 records: 26 libraries and the
// Lockleaze Collection Point), matching the council's library finder, both read 21 September 2026. Boundary: ONS
// Local Authority Districts December 2023 BGC, E06000023 (25 parts, 109.69 km2 on that file by our calculation;
// the main part 109.63). Discrete Voronoi on a 50 m grid (43,888 points inside; 26 libraries; 1,141,088 distance
// checks; scratchpad bri/voronoi.py, res.py, lock.py). Largest cells: Avonmouth 10.98 km2, Sea Mills 7.39,
// Fishponds 6.08, Wick Road 5.90, St George 5.83; smallest Central 2.16, St Pauls 2.33. A 25 m grid moves no cell
// by more than 0.018 km2. Census 2021 output-area population-weighted centroids (ONS OA December 2021 PWC V4;
// 1,405 Bristol OAs from Nomis TS001 TYPE150) counted per cell as units, never summed as people: Avonmouth 7,
// St George 112 (the most), St Pauls 70, Central 51. Farthest land point from any library 5,177 m, nearest
// Avonmouth, at E353365 N183010 (ST 533 830), the northern tip of the boundary. OA centroid distance to nearest
// library: median 697 m, 90th percentile 1,286 m, max 2,161 m. Counting the Lockleaze collection point: Horfield
// 4.69 -> 2.56 km2, Fishponds 6.08 -> 4.99, Junction 3 3.95 -> 3.65, Bishopston 3.29 -> 3.22; Lockleaze 3.58.
// Lesson family: Voronoi diagrams (nearest-site partition, perpendicular bisectors, farthest point from any site,
// area versus people). Screened free site-wide on 21 September 2026 (famcheck.js: voronoi 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 for Bristol E06000023 (472,465 usual
// residents; 457,848 in households; 14,617 in communal establishments, 3.1%), TS007A (26,764 aged 5 to 9, 5.7%;
// 47,538 aged 20 to 24, 10.1%; 44,399 aged 25 to 29, 9.4%; 43,857 aged 30 to 34, 9.3%; England 5.9, 6.0, 6.6 and
// 7.0%), TS068 (108,835 schoolchildren and full-time students of 446,523 aged 5 and over, 24.4%; England 20.4%).
// ONS Census 2021 geographies (OAs of 40 to 250 households and 100 to 625 usual residents). University of Bristol
// facts (2024/25: 31,132 students, 9,055 staff, 10,903 international students; founded 1876 as University
// College, Bristol; first higher education institution in England to admit women on an equal basis to men).
// Bristol Centre for Supercomputing (Isambard-AI: in 2025 the most powerful university-based supercomputer in the
// world and 11th fastest globally). Clifton Suspension Bridge Trust (designed by Brunel, spans the Avon Gorge,
// opened 8 December 1864, a city-wide party).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'BRISTOL', blurb: 'Brunel\'s city and home of Isambard-AI, with a project that splits Bristol into the areas nearest each of its libraries.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-bristol',
  code: 'bri',
  accent: '#682F12',
  accentRationale: 'Bristol: a burnt red-sandstone brown from the solver (8.51:1 on every paper tint, dE 7.6 from the nearest used accent), after the red stone of Redcliffe, and well away from the blues used for Oxford and Milton Keynes',
  pageType: 'city',
  place: {
    name: 'Bristol',
    eyebrow: 'Bristol, South West England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'City of Bristol' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Bristol, England',
  title: 'Best Coding Classes in Bristol | Modern Age Coders',
  description: 'Coding, Python, AI and maths classes taught live online for Bristol learners aged 6 to 67, from Clifton and Bedminster to Fishponds. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Bristol, on a page that splits the city into the areas nearest each of its 26 libraries and finds where area and people part company.',
  twitterDescription: 'Bristol learners aged six to sixty-seven can learn to code live online with us, and the first lesson is on the house.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Bristol Coding, Python and AI Lessons, Live Online',
    description: 'Coding, Python, AI, data and mathematics taught live online in English to Bristol children, teenagers and adults, in groups placed by level or one to one.'
  },

  h1: 'Coding classes in Bristol',
  capsuleQ: 'What are the best coding classes in Bristol?',
  capsule: 'The 2021 Census found 472,465 people living in Bristol, with 10.1% aged 20 to 24 against 6.0% in England. The University of Bristol reports 31,132 students for 2024/25, and says its Isambard-AI became the most powerful university-based supercomputer in the world in 2025. Modern Age Coders teaches Bristol learners from six to sixty-seven live online, either one to one or in groups of five to ten placed by level, with teachers based in India and lesson times set in UK hours. There is no charge for the first lesson; from then on, group teaching is USD 100 a month and private teaching USD 150 a month.',
  lead: 'Bristol City Council lists 26 libraries, from Avonmouth beside the Severn to Stockwood on the south-eastern edge, plus a collection point in Lockleaze. Suppose every part of the city belongs to whichever library is nearest in a straight line. The map that results is a Voronoi diagram, a shape that turns up all over computing and geography. Drawn over Bristol\'s boundary on a 50-metre grid, it gives Avonmouth Library the largest territory by far, 10.98 square kilometres, and Central Library the smallest, 2.16. Yet Avonmouth\'s cell contains only 7 of the city\'s 1,405 census output areas, while St George Library\'s holds 112. Territory and people are different things, and a program that mixes them up draws a confident, misleading map. Building the diagram, and reading it honestly, is the lesson Bristol\'s libraries give our teenage learners.',
  wa: 'Hello Modern Age Coders, please can we have a free coding lesson for a learner in Bristol?',

  picks: {
    eyebrow: 'Course picks for Bristol',
    h2: 'Four courses for Brunel\'s city',
    intro: 'Start from what the learner already enjoys. Each course begins with a free live lesson and needs no card to book.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding towards games and apps, where a map game in which each player owns the squares nearest their base fits in early.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Coordinates, distance and geometry built in Python, the mathematics underneath any nearest-site map.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning from the ground up, including k-nearest neighbours, whose simplest form divides data into Voronoi cells.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Spreadsheets, SQL, Python and dashboards for the catchment and territory questions that come up in almost every organisation.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bristol today',
      h2: 'A large city weighted towards its twenties and early thirties',
      intro: 'Census 2021 for the Bristol local authority, as published by the Office for National Statistics through Nomis.',
      body: [
        { kind: 'table', caption: 'Bristol, Census 2021', head: ['Census 2021 measure', 'Bristol', 'England'], rows: [
          ['Usual residents', '472,465', 'Not compared'],
          ['In households', '457,848', 'Not compared'],
          ['In communal establishments', '14,617, 3.1%', 'Not compared'],
          ['Aged 5 to 9', '26,764, 5.7%', '5.9%'],
          ['Aged 20 to 24', '47,538, 10.1%', '6.0%'],
          ['Aged 25 to 29', '44,399, 9.4%', '6.6%'],
          ['Aged 30 to 34', '43,857, 9.3%', '7.0%'],
          ['Schoolchildren and full-time students, of 446,523 aged five and over', '108,835, 24.4%', '20.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Twenties and thirties', p: 'Each five-year band from 20 to 34 held more than 9% of Bristol\'s residents, against 6.0% to 7.0% across England.' },
          { h3: 'Mostly in households', p: 'Just 3.1% of residents lived in communal establishments, a category that includes student halls; the other 96.9% lived in households.' },
          { h3: 'Children in step with England', p: 'Children aged 5 to 9 made up 5.7% of residents, close to the national 5.9%, so family life runs alongside the student city.' }
        ] },
        { kind: 'p', text: 'For our timetable, that mix means one thing: a Bristol learner of any age is matched with others at the same level, whether that is a six-year-old in Southville starting with blocks, a Year 10 student in Brislington heading for GCSE Computer Science, or a thirty-year-old in Easton moving into data work.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Bridges, universities and supercomputers',
      h2: 'From Brunel\'s bridge to Isambard-AI',
      intro: 'From the Clifton Suspension Bridge Trust, the University of Bristol and its Bristol Centre for Supercomputing.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '8 December 1864', p: 'The Clifton Suspension Bridge Trust records that the bridge opened on this day, a city-wide party for Bristol. It was designed by Isambard Kingdom Brunel and spans the Avon Gorge.' },
          { h3: '1876', p: 'The University of Bristol was founded that year as University College, Bristol, and says it was the first higher education institution in England to admit women on an equal basis to men.' },
          { h3: '2025', p: 'The University says Isambard-AI, hosted by its Bristol Centre for Supercomputing, became the most powerful university-based supercomputer in the world that year and the 11th fastest globally.' }
        ] },
        { kind: 'p', text: 'For 2024/25 the University reports 31,132 students, 10,903 of them international, and 9,055 staff. We have no connection with the University or with the Bridge Trust. We mention them because a Bristol teenager lives in a city whose university runs one of the machines on which serious AI research now happens, and understanding what such machines compute, rather than only what they print out, starts with small programs like the one on this page.' },
        { kind: 'spec', title: 'Twenty-six libraries and a collection point', p: 'The council\'s library finder lists 26 libraries and a collection point at The Hub in Gainsborough Square, Lockleaze, where people can return loans, collect reservations and choose picture books for young children. Whether that counts as a library is exactly the kind of question the project makes a programmer answer before drawing anything.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Who is nearest? Bristol split 26 ways',
      intro: 'A Voronoi diagram hands every point to its nearest site. We drew one for Bristol\'s libraries inside the ONS boundary of the city, testing every point on a 50-metre grid.',
      body: [
        { kind: 'table', caption: 'Voronoi cells of Bristol\'s 26 libraries by straight-line distance, largest five and smallest two', head: ['Library', 'Cell area', 'Census output areas inside'], rows: [
          ['Avonmouth', '10.98 sq km', '7'],
          ['Sea Mills', '7.39 sq km', '48'],
          ['Fishponds', '6.08 sq km', '70'],
          ['Wick Road', '5.90 sq km', '60'],
          ['St George', '5.83 sq km', '112'],
          ['St Pauls', '2.33 sq km', '70'],
          ['Central', '2.16 sq km', '51']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Bisect', p: 'Between any two libraries, the points equally far from both lie on one straight line, the perpendicular bisector. Each cell is the region on the near side of every such line.' },
          { h3: '2. Assign', p: 'The plain method tests every grid point against every library: 43,888 points inside the boundary times 26 libraries, just over 1.1 million distance checks, which a laptop gets through quickly.' },
          { h3: '3. Measure', p: 'Count the grid points in each cell to get its area, then count the census output-area centres that fall inside it for a rough sense of how many people it serves.' }
        ] },
        { kind: 'callout', h3: 'Area is not people', p: 'Avonmouth\'s cell is the largest by far, yet it contains only 7 of Bristol\'s 1,405 output areas. St George\'s cell is about half the size and contains 112, and St Pauls, one of the smallest, holds 70. The Office for National Statistics builds output areas to hold between 100 and 625 usual residents, so counting them gives a fair rough guide to people without us adding up any census figures ourselves.' },
        { kind: 'p', text: 'The same pass gives two more results. The piece of Bristol\'s land farthest from any library is 5.2 kilometres from Avonmouth Library, at the northern tip of the city boundary near grid reference ST 533 830. And the median output-area centre sits 697 metres from its nearest library, with nine in ten within 1,286 metres. Straight lines ignore the Avon, the harbour and the hills, so all of these are distances as the crow flies, and learners label them that way.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Nearest-site maps',
      h2: 'Five rules for a catchment map you can defend',
      intro: 'Practised on libraries, used afterwards for schools, shops, delivery zones, phone masts and the nearest-neighbour methods inside machine learning.',
      body: [
        { kind: 'table', caption: 'Building a Voronoi map honestly', head: ['Rule', 'In practice', 'What it stops'], rows: [
          ['Define the sites', 'Decide whether the Lockleaze collection point counts before drawing anything', 'A map whose answer rests on a choice nobody stated'],
          ['Clip to the real boundary', 'Measure cells inside the published city boundary, not a rectangle drawn around it', 'Cells padded with land outside the city'],
          ['Keep area and people apart', 'Report output areas or residents alongside square kilometres', 'Empty land mistaken for an underserved population'],
          ['Say what distance means', 'State that distance is a straight line, not a walk or a bus journey', 'A crow-flies map read as a travel-time map'],
          ['Check the resolution', 'Rerun on a finer grid and confirm the areas barely move', 'Decimal places the grid cannot support']
        ] },
        { kind: 'p', text: 'The first rule matters more than it looks. Counting the Lockleaze collection point as a site shrinks Horfield Library\'s cell from 4.69 to 2.56 square kilometres and trims Fishponds from 6.08 to 4.99, while the collection point takes 3.58. Nothing about the city changed; only a definition did. The last rule passed cleanly: on a 25-metre grid no cell moved by more than 0.018 square kilometres.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A playground map where every square belongs to the nearest friend, coloured by hand first and then by a short program.' },
          { h3: 'Teenagers', p: 'The council\'s library file read in Python, a grid tested against every site, cells measured and the collection point argued out.' },
          { h3: 'Adults', p: 'Catchment and territory analysis for stores, depots or sales areas, with area and population kept firmly apart.' }
        ] },
        { kind: 'p', text: 'We are not connected with Bristol City Council, the University of Bristol, the Office for National Statistics or the Clifton Suspension Bridge Trust. The library locations and boundaries are published for public use; the cells, counts and distances are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a playground map to a Voronoi diagram',
    intro: 'Treat the ages as a first guess; the free lesson finds the actual level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Closest wins', p: 'Squared paper, a few coloured bases and the rule that every square joins its nearest base, then the same rule in blocks.', courses: ['kids-coding-blocks-masterclass', 'elementary-mathematics-complete-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Coordinates and distance', p: 'Plotting points, measuring the distance between them in Python and finding which of several points is nearest.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Voronoi in Python', p: 'Real site files, grids clipped to a boundary, cells measured and nearest-neighbour classifiers compared with the map.', courses: ['ai-ml-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Catchments at work', p: 'Territory, coverage and location questions answered with data, with the definitions stated and the limits shown.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A mapping tool can shade catchments in a click. Why should a Bristol teenager build a Voronoi diagram?',
    intro: 'Because every shaded map hides choices about what counts and what distance means.',
    p1: 'Ask an AI assistant which library serves each part of Bristol and it may give a tidy answer, but it will not necessarily say whether it counted the Lockleaze collection point, whether it measured straight lines or streets, or whether a big cell means many readers or open land. Those choices move the result: one of them alone nearly halves Horfield\'s territory. A learner who has built the diagram knows to ask.',
    p2: 'Voronoi cells also sit inside machine learning. A nearest-neighbour classifier, one of the first methods an AI course teaches, labels a new example by the closest known one, and in doing so divides its data into exactly these cells. Building the Bristol map by hand is a direct route to understanding what that classifier really does.',
    closer: 'That is why a Bristol teenager should still learn to program in 2026, in the city whose university runs Isambard-AI: maps and models appear instantly now, and the person who knows which choices sit inside them is the one who can be trusted with them.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Clifton, Bedminster or Fishponds, all from home',
    intro: 'Bristol is a city of hills, bridges and busy roads; online lessons skip the journey entirely.',
    cells: [
      { h3: 'Across the river, no crossing', p: 'A learner in Southville and one in Redland can share a lesson without either of them crossing the harbour or the Avon.' },
      { h3: 'The stages English schools use', p: 'Reception, Key Stages 1 to 4, Year 9 options, GCSEs and A levels, named the way Bristol schools name them, with every lesson in English.' },
      { h3: 'Start with a real lesson', p: 'The free session teaches something real and closes with a recommended level, course and weekly time. We never ask for card details to book it.' },
      { h3: 'Placed by level, not postcode', p: 'Groups hold five to ten learners at the same stage from Bristol, elsewhere in the UK and overseas, which keeps a slot open for every level.' },
      { h3: 'A steady two a week', p: 'Two lessons each week at a fixed time, roughly eight a month, with holiday and exam breaks agreed in advance with the teacher.' },
      { h3: 'Teaching from India', p: 'Our teachers keep India Standard Time all year, four and a half hours ahead of Bristol in summer and five and a half in winter, so after-school and evening slots here fall inside their normal day.' }
    ],
    spec: { title: 'For working adults', p: 'With so many Bristol residents in their twenties and early thirties, evening one-to-one lessons are often the practical choice for adults fitting programming around a job. Format and time are settled at the free lesson.' }
  },

  fees: {
    h2: 'Bristol lesson fees',
    intro: 'One free lesson, then one of two monthly prices.',
    first: 'A full lesson with nothing to pay, ending with a level, a suggested course and a time slot.',
    group: 'Each month, around eight live lessons in a group of five to ten learners at one level.',
    private: 'Each month, around eight live lessons with a teacher who works with one learner only.',
    closer: 'Outside India the fee is a single US dollar amount, identical for a family in Redland and a family in Cotham, and there is no pound price list. Nothing is charged until the free lesson has agreed a course and a slot, and the pricing page covers pauses, missed lessons and moving between group and one-to-one teaching.'
  },

  reviewsH2: 'Six reviews families left on Google, word for word',

  book: {
    h2: 'Claim a free first lesson in Bristol',
    intro: 'We choose the opening task by level: a nearest-friend map game for a young child, a first Python program that measures distances, or the council\'s library file and a full Voronoi diagram for a teenager ready for real data.',
    success: 'Thanks. We will be in touch soon to set up a Bristol lesson.'
  },

  faq: {
    h2: 'Bristol coding class questions',
    intro: 'Answers to what Bristol families ask most often.',
    items: [
      { q: 'How many people live in Bristol?', a: 'The 2021 Census counted 472,465 usual residents: 457,848 in households and 14,617, or 3.1%, in communal establishments.' },
      { q: 'How many students live in Bristol?', a: 'The 2021 Census counted 108,835 schoolchildren and full-time students among 446,523 residents aged five and over, 24.4% against 20.4% in England. The University of Bristol reports 31,132 students for 2024/25.' },
      { q: 'How many libraries does Bristol have?', a: 'The council\'s library finder lists 26 libraries plus a collection point in Lockleaze, where loans can be returned and reservations collected. Our project uses the council\'s published locations for all 27 sites.' },
      { q: 'What is a Voronoi diagram?', a: 'A map that gives every point to its nearest site. For Bristol, each library gets the part of the city that is closer to it, in a straight line, than to any other library.' },
      { q: 'Which Bristol library has the largest catchment?', a: 'By area, Avonmouth Library, whose cell covers 10.98 square kilometres on our 50-metre grid. By output areas, a rough guide to people, St George Library comes first with 112.' },
      { q: 'What is Isambard-AI?', a: 'A supercomputer for AI research hosted by the University of Bristol\'s Bristol Centre for Supercomputing. The University says it became the most powerful university-based supercomputer in the world in 2025. We are not connected with the University.' },
      { q: 'When do Bristol lessons take place?', a: 'After school, in the evening or at weekends, on a UK time agreed at the free lesson. India runs four and a half hours ahead of Bristol in summer and five and a half in winter, so those slots are daytime for our teachers.' },
      { q: 'Is there a Modern Age Coders centre in Bristol?', a: 'No. We have no Bristol centre and no premises anywhere in the UK; all teaching is live online. You need a computer with sound and a stable connection, and our contact number is an Indian one.', boiler: true },
      { q: 'How much do Bristol lessons cost?', a: 'The first lesson is free. Then a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, and private lessons on the same timetable are USD 150 a month. Course, format and time are agreed before anything is charged.', boiler: true },
      { q: 'How are Bristol groups made up?', a: 'By level, pace and aims, not by age or postcode: five to ten learners at one stage. Where no group runs at a workable time, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'Nearby nations, other cities, the national guide',
    html: 'Across the Severn, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales guide</a> covers the Curriculum for Wales and WJEC. A Markov chain built from two centuries of rain is on the <a class="cg-inline-link" href="/best-coding-class-in-oxford">Oxford page</a>, and <a class="cg-inline-link" href="/best-coding-class-in-cambridge">Cambridge</a> ranks its warmest months with a heap. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out the school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> gathers every UK page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bristol and the UK',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-oxford', label: 'Oxford' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-bri .cg-hero-grid { align-items: end; gap: clamp(0.95rem, 3vw, 2.6rem); }
.cg-root.cg-bri .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-bri .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-bri .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bri .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.015em; }
.cg-root.cg-bri .cg-grid-3 { gap: clamp(1.15rem, 2.8vw, 2.4rem); }
.cg-root.cg-bri .cg-table caption { font-weight: 700; letter-spacing: 0.01em; }
.cg-root.cg-bri .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bri .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-bri .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Bristol, Census 2021 via Nomis: TS001 Bristol local authority (E06000023) 472,465 usual residents, 457,848 in households, 14,617 in communal establishments (3.1 percent); TS007A 26,764 aged 5 to 9 (5.7 percent), 47,538 aged 20 to 24 (10.1 percent), 44,399 aged 25 to 29 (9.4 percent), 43,857 aged 30 to 34 (9.3 percent), against England 5.9, 6.0, 6.6 and 7.0 percent; TS068 108,835 schoolchildren and full-time students of 446,523 residents aged 5 and over, 24.4 percent, against 20.4 percent in England. ONS Census 2021 geographies: output areas of 40 to 250 households and 100 to 625 usual residents. University of Bristol facts, 2024/25: 31,132 students, 9,055 staff, 10,903 international students; founded 1876 as University College, Bristol; first higher education institution in England to admit women on an equal basis to men. Bristol Centre for Supercomputing: Isambard-AI became in 2025 the most powerful university-based supercomputer in the world and 11th fastest globally. Clifton Suspension Bridge Trust: designed by Isambard Kingdom Brunel, spans the Avon Gorge, opened 8 December 1864. Bristol City Council library finder: 26 libraries and the Lockleaze collection point (The Hub, Gainsborough Square).',
    localProject: 'Who is nearest? Bristol City Council GIS layer ll_leisure_and_culture/0, 27 sites (26 libraries and the Lockleaze Collection Point), read 21 September 2026; ONS LAD December 2023 BGC boundary E06000023 (109.69 km2 on that file by our calculation). Discrete Voronoi, 50 m grid, 43,888 points, 26 libraries, 1,141,088 distance checks. Cells: Avonmouth 10.98 km2 (7 output areas), Sea Mills 7.39 (48), Fishponds 6.08 (70), Wick Road 5.90 (60), St George 5.83 (112, the most), St Pauls 2.33 (70), Central 2.16 (51). 25 m grid: maximum change 0.018 km2. Output areas: ONS OA December 2021 population-weighted centroids V4, 1,405 Bristol codes from Nomis TS001 TYPE150; counted as units, never summed as people. Farthest land point from any library 5,177 m (Avonmouth), ST 533 830. OA centre distance to nearest library: median 697 m, 90th percentile 1,286 m. With the Lockleaze collection point: Horfield 4.69 to 2.56, Fishponds 6.08 to 4.99, Lockleaze 3.58. Lesson family: Voronoi diagrams and nearest-site partitions; distinct from point-in-polygon, union-find, shortest paths and k-means.',
    requiredMentions: [
      '472,465',
      '457,848',
      '14,617',
      '108,835',
      '446,523',
      '31,132',
      'Isambard-AI',
      '8 December 1864',
      'Lockleaze',
      'Avonmouth Library',
      'St George Library',
      'Clifton Suspension Bridge'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Bristol: 472,465 usual residents; 457,848 in households; 14,617 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000023' },
      { claim: 'Nomis, Census 2021 TS007A: Bristol and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000023,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Bristol 108,835 students of 446,523 aged 5 and over (24.4 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000023,E92000001' },
      { claim: 'Bristol City Council library finder: 26 libraries and the Lockleaze collection point.', url: 'https://www.bristol.gov.uk/residents/libraries-and-archives/find-a-library/library-finder' },
      { claim: 'Bristol City Council GIS, Libraries layer: site names and coordinates used for the Voronoi cells.', url: 'https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_leisure_and_culture/MapServer/0' },
      { claim: 'ONS Open Geography, Local Authority Districts December 2023 BGC: the Bristol boundary.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2023_Boundaries_UK_BGC/FeatureServer/0' },
      { claim: 'ONS Open Geography, Output Areas December 2021 population-weighted centroids V4.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/OA_December_2021_EW_PWC_V4/FeatureServer/0' },
      { claim: 'ONS, Census 2021 geographies: output areas of 100 to 625 usual residents.', url: 'https://www.ons.gov.uk/methodology/geography/ukgeographies/censusgeographies/census2021geographies' },
      { claim: 'University of Bristol, facts: 31,132 students, 9,055 staff and 10,903 international students in 2024/25; founded 1876.', url: 'https://www.bristol.ac.uk/university/facts/' },
      { claim: 'University of Bristol, Bristol Centre for Supercomputing: Isambard-AI in 2025.', url: 'https://www.bristol.ac.uk/research/centres/bristol-supercomputing/' },
      { claim: 'Clifton Suspension Bridge Trust: Brunel, the Avon Gorge, opening on 8 December 1864.', url: 'https://cliftonbridge.org.uk/history/' }
    ],
    rejectedClaims: [
      'Isambard-AI funding figure: a pound amount, excluded by the one-currency rule and not needed.',
      'Residents per library catchment: would require summing output-area counts, so the page counts output areas as units instead.',
      'Walking or travel-time catchments: not computed; the page states that its distances are straight lines.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Bristol City Council, the University of Bristol, the ONS or the Clifton Suspension Bridge Trust.'
    ]
  }
};
