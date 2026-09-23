'use strict';
// Worcester (cg- city page, UK cluster Phase 4). Spine: find the shortest road route without searching the whole
// city. A* search against Dijkstra's algorithm on Ordnance Survey Open Roads (GB shapefile, SO tile, RoadLink), clipped
// to a box around Worcester (E 379000 to 391500, N 248500 to 261000): 6,953 road links, 6,148 junction nodes, 786.9
// km of road (read 23 September 2026; scratchpad wor/astar.py). OS Open Rivers: the Severn appears as name1 "Afon
// Hafren"; 14 segments in or near the box; 2 road links cross it inside the box, the A44 and Temeside Way (A4440).
// Places from OS Open Names (15 suburbs and the city point); west bank by ray-crossing parity against the Severn line:
// Dines Green, Lower Wick, St John's. 120 place-to-place routes (81 same bank, 39 crossing the river); A* heuristic =
// straight-line distance (admissible). Routes identical to Dijkstra in 120 of 120. Median junctions expanded: same bank
// Dijkstra 1,415, A* 235 (median saving 82 percent); across the river 2,249 and 422 (81 percent). Median road distance
// over straight-line distance 1.30 same bank, 1.27 across. St John's to the city point: road 1,118 m, straight 1,025 m;
// Dijkstra 307 junctions, A* 26. Warndon to Dines Green: 7,160 m against 5,595 m; 4,370 against 1,382 junctions. Largest
// ratio: Ronkswood to Tolladine, 1,529 m by road against 485 m straight (3.15).
// Lesson family: A* search (heuristics, admissibility, nodes expanded, obstacles). Screened 23 September 2026: A*
// search 0 hits; distinct from the Dijkstra and shortest-path pages because the lesson is the heuristic and the work
// it saves, measured against Dijkstra on identical routes.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Worcester E07000237: TS001 103,872 usual residents,
// 102,059 in households, 1,813 communal; TS007A 7,439 aged 20 to 24 (7.2 percent, England 6.0), 7,438 aged 30 to 34
// (7.2, England 7.0); TS068 20,328 students of 98,593 aged 5 and over (20.6 percent, England 20.4); TS006 3,121.4 per
// square km (England 433.5). Worcester Cathedral, Heritage: first cathedral founded in 680; Saint Oswald built a later
// cathedral in 983; Saint Wulfstan began the present building in 1084; Chapter House thought to be the first round
// chapter house in the world. King John page: King John, 1166 to 1216, spent Christmas in Worcester in 1214; his will
// asked for burial between the shrines of St Wulfstan and St Oswald; the original will is kept in the Cathedral
// Library; tomb in front of the High Altar. NHLE Grade I (listed 22 May 1954): Cathedral 1389728; Edgar Tower 1063829;
// Guildhall 1389921; The Commandery 1390176; The Greyfriars 1389859; The Old Palace 1389763.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'WORCESTER', blurb: 'The cathedral city on the Severn, with a project that finds the shortest route across town without searching every street.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-worcester',
  code: 'wor',
  accent: '#47447E',
  accentRationale: 'Worcester: a porcelain slate blue, from the solver (7.11:1 on every paper tint, dE 6.7 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Worcester',
    eyebrow: 'Worcester, Worcestershire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Worcester' },
      { type: 'AdministrativeArea', name: 'Worcestershire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Worcester, England',
  title: 'Best Coding Classes in Worcester | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Worcester learners aged 6 to 67, from St John\'s and Barbourne to Warndon. Your first lesson is free.',
  ogDescription: 'Coding and AI lessons for Worcester, on a page that finds the shortest route across the city while searching only a fraction of its junctions.',
  twitterDescription: 'Worcester learners aged six to sixty-seven can study coding, Python and AI with us in live online lessons, starting with a free one.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Worcester Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, maps and search algorithms, AI and mathematics taught live online in English to Worcester children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Worcester',
  capsuleQ: 'What are the best coding classes in Worcester?',
  capsule: 'Worcester had 103,872 usual residents at the 2021 census, packed at 3,121.4 people per square kilometre against 433.5 for England. Worcester Cathedral says its present building was begun by Saint Wulfstan in 1084, and that King John asked in his will to be buried there. Worcester learners aged six to sixty-seven can take live video lessons with our teachers in India, on their own or in a class of five to ten at a matching stage, at times planned around UK school and work. The first lesson is free; afterwards a group place costs USD 100 a month and private lessons USD 150.',
  lead: 'A sat-nav finding a route across Worcester could check every junction in the city, ring by ring, until it reaches the destination. That is Dijkstra\'s algorithm, and it is guaranteed to find the shortest route. A* finds exactly the same route but adds a sense of direction: it favours junctions that are closer, as the crow flies, to where it is going. On Ordnance Survey\'s map of 6,953 road links around the city, our teenagers ran 120 journeys, one for every pair of 16 places. The routes matched every time. But for a typical trip on one side of the Severn, Dijkstra examined 1,415 junctions and A* just 235.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Worcester.',

  picks: {
    eyebrow: 'Course picks for Worcester',
    h2: 'Four courses for the Severn city',
    intro: 'Go for the course closest to what the learner already enjoys. All four begin with a free live lesson, booked without any card.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, a first step towards maze games where a sprite finds its way home.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to full projects, enough to load a city\'s road map and search it for routes.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'AI for teenagers, where search with a good guess, as in A*, is one of the oldest ideas in the field.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults working with routes, networks or scheduling, where a smarter search can save hours of computing.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Worcester today',
      h2: 'A compact city with plenty of young adults',
      intro: 'Census 2021 figures for the City of Worcester district, from the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Worcester, Census 2021', head: ['Measure', 'Worcester', 'England'], rows: [
          ['Usual residents', '103,872', '56,490,048'],
          ['Living in households', '102,059', 'Not compared'],
          ['Living in communal establishments', '1,813', 'Not compared'],
          ['Aged 20 to 24', '7,439 (7.2%)', '6.0%'],
          ['Aged 30 to 34', '7,438 (7.2%)', '7.0%'],
          ['Students among residents aged 5 and over', '20,328 (20.6%)', '20.4%'],
          ['Usual residents per square kilometre', '3,121.4', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Tightly drawn', p: 'The City of Worcester district is small and built up, with 3,121.4 residents per square kilometre, far above England as a whole.' },
          { h3: 'Young adults', p: 'People aged 20 to 24 made up 7.2% of residents in 2021, against 6.0% nationally, and so did people aged 30 to 34.' },
          { h3: 'Students', p: 'Of the 98,593 residents aged five and over, 20,328 were studying, 20.6%, very close to the figure for England.' }
        ] },
        { kind: 'p', text: 'Our Worcester groups gather learners from every part of the city. A Year 4 child in Warndon might be making a first game, a Year 10 student in Barbourne starting GCSE Computer Science, and an adult in St John\'s learning Python for work, each placed in a small group at their own level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Cathedral and king',
      h2: 'Founded in 680, chosen by a king',
      intro: 'From Worcester Cathedral\'s own heritage pages and Historic England\'s open listing data.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '680 to 1084', p: 'The cathedral says the first cathedral was founded in 680, Saint Oswald built a later one in 983, and Saint Wulfstan began the present building in 1084, when its crypt was started.' },
          { h3: 'King John', p: 'King John spent Christmas in Worcester in 1214 and asked in his will to be buried between the shrines of St Wulfstan and St Oswald. His original will is kept in the Cathedral Library.' },
          { h3: 'Grade I across the city', p: 'Historic England lists the cathedral, Edgar Tower, the Guildhall, The Commandery, The Greyfriars and The Old Palace at Grade I, all first listed on 22 May 1954.' }
        ] },
        { kind: 'p', text: 'The cathedral also describes its 12th century Chapter House as thought to be the first round chapter house in the world. We have no connection with Worcester Cathedral, Worcester City Council, Historic England or Ordnance Survey. The city is on this page because it stands on both banks of the Severn, and a river crossed by very few roads is exactly the kind of obstacle that tests a route-finding algorithm.' },
        { kind: 'spec', title: 'Where the map comes from', p: 'Ordnance Survey Open Roads is a free map of every road in Great Britain as a network of links and junctions, with each link\'s length. OS Open Rivers supplies the line of the Severn, and OS Open Names the positions of the city\'s suburbs.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can you find the shortest route without searching the whole city?',
      intro: 'Dijkstra\'s algorithm spreads out evenly from the start, like ripples. A* adds a heuristic, a guess of the distance still to go, and explores the most promising junctions first. If the guess never overestimates, A* still finds the true shortest route.',
      body: [
        { kind: 'table', caption: 'OS Open Roads around Worcester, 120 journeys between 15 suburbs and the city centre, median junctions examined', head: ['Journeys', 'Dijkstra', 'A*', 'Work saved by A*'], rows: [
          ['Same side of the Severn (81)', '1,415', '235', '82%'],
          ['Across the Severn (39)', '2,249', '422', '81%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Build the network', p: 'Take the 6,953 road links in a 12.5 kilometre square around the city: 6,148 junctions joined by 786.9 kilometres of road, each link labelled with its length.' },
          { h3: '2. Choose the guess', p: 'For A*, the guess is the straight-line distance to the destination. No road can be shorter than a straight line, so the guess never overestimates, and the route found is always the shortest.' },
          { h3: '3. Count the work', p: 'Run both algorithms on every pair of places and count the junctions each one examines. The routes matched on all 120 journeys; only the effort differed.' }
        ] },
        { kind: 'callout', h3: 'We expected the river to fool the guess', p: 'Inside our square only two roads cross the Severn, the A44 and the A4440, so the straight line across the water is often a poor guide. We expected A* to lose much of its advantage on cross-river trips. It did not: it saved 81% of the work across the river against 82% on the same side. Cross-river journeys were simply longer, so both methods did more work. Testing a hunch and reporting that it was wrong is as valuable as confirming one.' },
        { kind: 'p', text: 'The examples show the range. From St John\'s to the city centre, the road route is 1,118 metres against 1,025 in a straight line, and A* examined 26 junctions where Dijkstra examined 307. From Warndon to Dines Green, 7,160 metres by road, A* examined 1,382 junctions against 4,370. The biggest gap between road and crow is between Ronkswood and Tolladine: 1,529 metres by road for places 485 metres apart.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Search in practice',
      h2: 'Five questions before trusting a route finder',
      intro: 'Practised on Worcester\'s roads, then used in sat-navs, games, delivery planning, robots and puzzle solvers.',
      body: [
        { kind: 'table', caption: 'Decisions behind an A* search', head: ['Question', 'For Worcester', 'What goes wrong if you skip it'], rows: [
          ['What is the network?', 'OS Open Roads links and junctions in a set square', 'Routes that leave the map or miss a road'],
          ['What does a link cost?', 'Its length in metres', 'Shortest in distance confused with quickest in time'],
          ['Is the guess admissible?', 'Straight-line distance never overestimates', 'A faster search that returns a longer route'],
          ['How is it checked?', 'Every A* route compared with Dijkstra', 'An optimisation that quietly changed the answer'],
          ['What was measured?', 'Junctions examined, on identical routes', 'Speed claims with nothing to compare against']
        ] },
        { kind: 'p', text: 'The second row matters most for real journeys. We measured distance, not time, because Open Roads gives lengths but not traffic. A route that is shortest in metres can be slow at rush hour. A* works just as well with travel time as the cost, as long as the guess still never overestimates.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Mazes on squared paper, first solved by trying every path and then by always heading towards the exit.' },
          { h3: 'Teenagers', p: 'Dijkstra and A* in Python on the real Ordnance Survey road network, with the work counted and the routes checked.' },
          { h3: 'Adults', p: 'Route and network problems at work, with costs, heuristics and checks written down before trusting a faster search.' }
        ] },
        { kind: 'p', text: 'We are not connected with Ordnance Survey, Worcester Cathedral, Worcester City Council or Historic England. The maps, census tables and listing records are open data; the networks, searches and counts on this page are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From paper mazes to A* search',
    intro: 'Treat the ages as a starting guide; the free lesson decides where each learner begins.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Mazes', p: 'Solving mazes by trying every turn, then by always heading towards the exit, and counting the difference.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Maps in code', p: 'Storing a small street map in Python and finding a route between two places step by step.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Dijkstra and A*', p: 'Both algorithms on Ordnance Survey roads, with an admissible heuristic and the work each one does measured.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Networks at work', p: 'Routing, scheduling and network questions, with costs and heuristics chosen carefully and results checked.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI plans routes in an instant. Why should a Worcester teenager write A* by hand?',
    intro: 'Because A* is one of the founding ideas of artificial intelligence, and building it shows what a good guess is worth.',
    p1: 'A* was developed as part of early AI research into planning, and the idea of search guided by an estimate still runs through game engines, robot planners and the systems that decide what an AI model tries next. A learner who has watched a simple straight-line guess cut the work by around 80% understands why good estimates matter so much.',
    p2: 'The Worcester project also shows how to check a clever method. Every A* route was compared with Dijkstra\'s, and they matched 120 times out of 120. That habit, proving a faster method still gives the right answer, is exactly what AI engineers need when they speed up a system.',
    closer: 'So a Worcester teenager should keep learning to code in 2026, in a city split by a river with few crossings: computers can search a map in milliseconds, but someone has to choose the guess and check it never misleads.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'St John\'s, Barbourne or Ronkswood, and no bridge to cross',
    intro: 'Worcester straddles the Severn, with only a handful of road crossings. Online, both banks are the same distance from the lesson.',
    cells: [
      { h3: 'Both banks, one class', p: 'A learner in Lower Wick and another in Blackpole can share a lesson without either of them crossing the river.' },
      { h3: 'Levels Worcestershire pupils know', p: 'We follow the English curriculum from Reception through each Key Stage to GCSE and A level, with every lesson taught in English.' },
      { h3: 'A real first lesson', p: 'The free session works on a genuine task and ends with our advice on level, course and a weekly slot. No card is needed.' },
      { h3: 'Groups by level', p: 'Five to ten learners at the same stage, from Worcester, across the UK and abroad, so every level has workable times.' },
      { h3: 'A steady timetable', p: 'Two fixed lessons each week, around eight a month, with half terms and exams planned with the teacher in advance.' },
      { h3: 'Teachers in another time zone', p: 'A 5.30 pm lesson in Worcester is 10 pm for our teachers in summer and 11 pm in winter, as India does not change its clocks; they plan their evenings around UK learners.' }
    ],
    spec: { title: 'Across Worcestershire', p: 'Families in Droitwich, Malvern, Pershore or Evesham join the very same classes, since every group is online and formed by level.' }
  },

  fees: {
    h2: 'Worcester lesson fees',
    intro: 'A free first lesson, then one monthly fee.',
    first: 'A whole lesson free of charge, ending with advice on level, course and a weekly time.',
    group: 'About eight live lessons a month in a group of five to ten learners at one stage.',
    private: 'About eight live lessons a month, with the teacher working with your learner alone.',
    closer: 'Families in Diglis or Northwick pay in US dollars, as every family outside India does, and there are no pound prices on any of our pages. Nothing is charged until after the free lesson, once a course and weekly slot are agreed; the pricing page explains pauses, missed lessons and changes between group and one-to-one teaching.'
  },

  reviewsH2: 'Six families on Google, quoted without changes',

  book: {
    h2: 'Book a free lesson for a Worcester learner',
    intro: 'The first task is matched to the learner: a paper maze game for a young child, a short Python program that finds a route on a tiny map for a beginner, or Ordnance Survey roads and A* search for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your Worcester learner.'
  },

  faq: {
    h2: 'Worcester coding class questions',
    intro: 'What Worcester families ask us most.',
    items: [
      { q: 'How many people live in Worcester?', a: 'Census 2021 counted 103,872 usual residents in the City of Worcester district, with 102,059 in households and 1,813 in communal establishments.' },
      { q: 'How does Worcester compare with England?', a: 'It is very compact, at 3,121.4 residents per square kilometre against 433.5, and has slightly more young adults: 7.2% were aged 20 to 24 in 2021, against 6.0%. Its student share, 20.6%, is close to England\'s.' },
      { q: 'What is A* search?', a: 'A route-finding algorithm that explores the most promising junctions first, using a guess of the remaining distance. If the guess never overestimates, as a straight line never does on roads, A* is guaranteed to find the shortest route.' },
      { q: 'How much work did A* save on Worcester\'s roads?', a: 'Across 120 journeys between suburbs, A* found the same routes as Dijkstra\'s algorithm while examining far fewer junctions: a median of 235 against 1,415 on one side of the Severn, and 422 against 2,249 across it.' },
      { q: 'Where does the map data come from?', a: 'From Ordnance Survey\'s free Open Roads, Open Rivers and Open Names datasets, which give the road network, the line of the Severn and the positions of the suburbs.' },
      { q: 'Why is King John linked to Worcester?', a: 'Worcester Cathedral says King John spent Christmas in Worcester in 1214, asked in his will to be buried in the cathedral, and lies in front of its High Altar; his original will is in the Cathedral Library. We are not connected with the cathedral.' },
      { q: 'When do Worcester lessons happen?', a: 'On weekday afternoons or evenings, or at weekends, at a UK time we settle in the free lesson. India is four and a half hours ahead of Worcester in summer and five and a half in winter.' },
      { q: 'Is there a Worcester centre?', a: 'No. We have no Worcester centre and no premises anywhere in the UK, because all teaching is live online. A learner needs a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'How much are lessons for a Worcester learner?', a: 'The first lesson is free. Then a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one lessons on the same timetable are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How is each group formed?', a: 'By level, pace and goals rather than age or address, with five to ten learners at one stage. If no group suits the learner\'s week, we offer one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The Severn and beyond',
    html: 'Down the Severn, the <a class="cg-inline-link" href="/best-coding-class-in-gloucester">Gloucester page</a> matches two river curves that do not keep time, and <a class="cg-inline-link" href="/best-coding-class-in-coventry">Coventry</a> chains its bus stops into groups. <a class="cg-inline-link" href="/best-coding-class-in-durham">Durham</a> traces lines of sight across a grid of heights. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Worcester and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-gloucester', label: 'Gloucester' },
    { href: '/best-coding-class-in-coventry', label: 'Coventry' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-wor .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.3vw, 2.55rem); }
.cg-root.cg-wor .cg-hero h1 { font-weight: 700; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-wor .cg-capsule { border-left: 5px double var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-wor .cg-eyebrow { letter-spacing: 0.14em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-wor .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.017em; }
.cg-root.cg-wor .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.15rem); }
.cg-root.cg-wor .cg-table th { letter-spacing: 0.028em; }
.cg-root.cg-wor .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wor .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-wor .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Worcester, Census 2021 via Nomis (E07000237): TS001 103,872 usual residents, 102,059 in households, 1,813 in communal establishments; TS007A 7,439 aged 20 to 24 (7.2 percent, England 6.0), 7,438 aged 30 to 34 (7.2 percent, England 7.0); TS068 20,328 students of 98,593 residents aged 5 and over (20.6 percent, England 20.4); TS006 3,121.4 per square kilometre (England 433.5). Worcester Cathedral: first cathedral 680; Oswald 983; Wulfstan began the present building 1084; round Chapter House. King John: Christmas 1214; burial wish; will in the Cathedral Library. NHLE Grade I (22 May 1954): Cathedral, Edgar Tower, Guildhall, Commandery, Greyfriars, Old Palace.',
    localProject: 'Can you find the shortest route without searching the whole city? OS Open Roads, box E 379000 to 391500, N 248500 to 261000: 6,953 links, 6,148 junctions, 786.9 km. Severn from OS Open Rivers (Afon Hafren), two road crossings in the box (A44, A4440). 15 suburbs and the city point from OS Open Names; west bank by geometry: Dines Green, Lower Wick, St John\'s. 120 journeys: routes identical 120 of 120; median junctions same bank Dijkstra 1,415, A* 235 (82 percent saved); across 2,249 and 422 (81 percent). St John\'s to centre 1,118 m, 307 against 26; Warndon to Dines Green 7,160 m, 4,370 against 1,382; Ronkswood to Tolladine 1,529 m against 485 m straight. Lesson family: A* search.',
    requiredMentions: [
      '103,872',
      '102,059',
      '20,328',
      '98,593',
      '3,121.4',
      'Wulfstan',
      'Commandery',
      'Greyfriars',
      'Edgar Tower',
      'Barbourne',
      'Warndon',
      'Ronkswood'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Worcester: 103,872 usual residents; 102,059 in households; 1,813 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000237' },
      { claim: 'Nomis, Census 2021 TS007A: Worcester and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000237,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Worcester 20,328 students of 98,593 aged 5 and over (20.6 percent).', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000237,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: density, Worcester 3,121.4 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E07000237,E92000001' },
      { claim: 'Ordnance Survey Open Roads, Open Rivers and Open Names, OS Data Hub downloads.', url: 'https://api.os.uk/downloads/v1/products/OpenRoads/downloads' },
      { claim: 'Worcester Cathedral, Heritage: 680, 983, 1084, round Chapter House.', url: 'https://www.worcestercathedral.org.uk/heritage/' },
      { claim: 'Worcester Cathedral, King John: Christmas 1214, burial wish, will in the Cathedral Library, tomb before the High Altar.', url: 'https://www.worcestercathedral.org.uk/heritage/people-of-interest/king-john/' },
      { claim: 'Historic England NHLE open data: Grade I listings in central Worcester, 22 May 1954.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1389728' }
    ],
    rejectedClaims: [
      'Our expectation that the Severn would erase A*\'s advantage: tested and not supported (81 percent saved across the river against 82 percent); the page reports that.',
      'Journey times: Open Roads gives lengths, not traffic, so the page measures distance only and says so.',
      'Reasons for the largest detour (Ronkswood to Tolladine): not investigated, so no cause is claimed.',
      'The cathedral\'s description of itself as possibly the most interesting of England\'s cathedrals: a superlative, not repeated.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Ordnance Survey, Worcester Cathedral, Worcester City Council or Historic England.'
    ]
  }
};
