'use strict';
// Portsmouth (cg- city page, UK cluster Phase 4). Spine: how many roads hold an island city to the mainland?
// Minimum cut and maximum flow on Ordnance Survey Open Roads (shapefile, OS Downloads API, read 22 September 2026,
// tile SU; scratchpad pts/cut.py, cut2.py). Study box E 455000 to 475000, N 93000 to 112000: 17,738 road links and
// 14,986 nodes (16,728 single carriageway, 409 collapsed dual carriageway, 345 roundabout, 150 slip road, 101 dual
// carriageway); largest connected part 14,863 nodes and 17,357 links once parallel links are merged. Graph bridges
// (links whose removal disconnects the network): 6,544; 4,589 nodes are dead ends, and every one of them hangs off a
// bridge. Minimum cut between central Portsea Island (850 nodes, E 463300 to 466500, N 99000 to 101500) and Cosham,
// Drayton and Farlington (937 nodes, E 464300 to 468500, N 105000 to 107000): 3 links, the M275 (motorway), London
// Road A3 and Eastern Road A2030, each a collapsed dual carriageway; maximum flow 3 edge-disjoint routes; node
// connectivity 3. With the three removed, the island side has 2,534 nodes and 256.6 km of road. Comparison cut on
// the mainland between the Fareham side (E 455000 to 458000) and the Havant side (E 470000 to 474000): 5.
// Lesson family: minimum cut and maximum flow (max-flow min-cut theorem, Menger, graph bridges and why most are
// cul-de-sacs). Screened 22 September 2026: min cut, max flow, articulation points and bridge-finding 0 hits;
// distinct from Coventry union-find, Belfast PageRank and Hull flood fill.
// Place facts read raw 22 September 2026: Census 2021 via Nomis, Portsmouth E06000044: TS001 208,003 usual
// residents, 201,362 in households, 6,641 in communal establishments; TS007A 14,494 aged 15 to 19 (7.0 percent,
// England 5.7), 20,042 aged 20 to 24 (9.6, England 6.0), 15,368 aged 25 to 29 (7.4, England 6.6); TS068 49,106
// students of 196,723 aged 5 and over (25.0 percent, England 20.4); TS006 5,149.8 usual residents per square km
// (England 433.5), second of 309 English council areas outside the London boroughs, after Luton 5,196.0 (our
// ranking of the published TS006 values). Mary Rose Trust, History of the Mary Rose: built 1510; sank 19 July 1545
// in the Battle of the Solent, when 200 French ships attempted to invade; Henry VIII watched the sinking from
// Southsea Castle; John Deane explored the wreck in the 1830s; raised in 1982.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'PORTSMOUTH', blurb: 'The island city, with a project that finds the smallest set of roads whose loss would cut Portsea Island off from the mainland.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-portsmouth',
  code: 'pts',
  accent: '#18428B',
  accentRationale: 'Portsmouth: a naval blue from the solver (7.78:1 on every paper tint, dE 6.8 from the nearest used accent), brighter than the Aberdeen slate and bluer than the Glasgow Clyde blue',
  pageType: 'city',
  place: {
    name: 'Portsmouth',
    eyebrow: 'Portsmouth, Hampshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Portsmouth' },
      { type: 'AdministrativeArea', name: 'Hampshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Portsmouth, England',
  title: 'Best Coding Classes in Portsmouth | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Portsmouth learners aged 6 to 67, from Southsea and Fratton to Cosham. The first lesson is free of charge.',
  ogDescription: 'Coding and AI lessons for Portsmouth, on a page that finds the three roads that hold Portsea Island to the mainland, using the max-flow min-cut theorem.',
  twitterDescription: 'Portsmouth learners aged six to sixty-seven can learn coding, Python and AI live online with us, beginning with a free lesson.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '22 September 2026',
  courseSchema: {
    name: 'Portsmouth Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, algorithms, AI and mathematics taught live online in English to Portsmouth children, teenagers and adults, in small level-matched groups or one to one.'
  },

  h1: 'Coding classes in Portsmouth',
  capsuleQ: 'What are the best coding classes in Portsmouth?',
  capsule: 'The 2021 census counted 208,003 usual residents in Portsmouth, at 5,149.8 per square kilometre, which puts the city second among English council areas outside London, just behind Luton. The Mary Rose, built in 1510, sank off the city in 1545 and was raised in 1982. Portsmouth learners from six to sixty-seven join us on live video, either in a class of five to ten at the same level or with a teacher of their own; the teaching comes from India, scheduled around the UK day. There is no charge for the opening lesson. After that, a group place is USD 100 a month and individual teaching USD 150.',
  lead: 'Much of Portsmouth stands on Portsea Island. Ordnance Survey\'s road network for the area around it has 17,738 road links. How many of them would have to close before no car could drive from the Guildhall to Cosham? A program can answer that without trying every combination, using one of the most useful results in computer science: the largest number of separate routes between two places equals the smallest number of links whose removal separates them. For Portsea Island both numbers are three: the M275, London Road and Eastern Road. On the mainland, between the Fareham and Havant sides, the answer is five. Our teenagers compute both, and learn why the theorem makes the question easy.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Portsmouth.',

  picks: {
    eyebrow: 'Course picks for Portsmouth',
    h2: 'Four courses for the island city',
    intro: 'Pick by what the learner enjoys most. Every course begins with a live lesson that costs nothing, and we never ask for a card to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Maps, mazes and puzzles about getting from one place to another, including which single path, if blocked, would stop the journey.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Graphs, searches and flows built from scratch, the toolkit this page uses on Portsmouth\'s roads.' },
      { course: 'competitive-programming-for-teens-course', band: 'Ages 13 to 18', note: 'Contest-style problems for teenagers who like hard algorithms, where max-flow and min-cut are standard weapons.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Interview-level data structures and algorithms for adults, from graph representation to network flow.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Portsmouth today',
      h2: 'A crowded island with a young population',
      intro: 'The numbers below come straight from the Office for National Statistics\' 2021 census tables for Portsmouth, downloaded through Nomis and left exactly as released.',
      body: [
        { kind: 'table', caption: 'Portsmouth, Census 2021', head: ['Measure', 'Portsmouth', 'England'], rows: [
          ['Usual residents', '208,003', '56,490,048'],
          ['Living in households', '201,362', 'Not compared'],
          ['Living in communal establishments', '6,641', 'Not compared'],
          ['Aged 15 to 19', '14,494 (7.0%)', '5.7%'],
          ['Aged 20 to 24', '20,042 (9.6%)', '6.0%'],
          ['Aged 25 to 29', '15,368 (7.4%)', '6.6%'],
          ['Students among residents aged 5 and over', '49,106 (25.0%)', '20.4%'],
          ['Usual residents per square kilometre', '5,149.8', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Tightly packed', p: 'Only Luton, at 5,196.0 per square kilometre, is denser among English council areas outside the London boroughs, on the published 2021 figures.' },
          { h3: 'A quarter studying', p: 'Of 196,723 residents aged five and over, 49,106 were schoolchildren or full-time students, 25.0% against 20.4% for England.' },
          { h3: 'Young adults', p: 'People aged 20 to 24 were 9.6% of the city\'s residents in 2021, and those aged 15 to 19 were 7.0%, both above the English shares.' }
        ] },
        { kind: 'p', text: 'Those learners appear in our groups at every stage. A Year 5 child in Copnor might be solving a first maze in code, a Year 12 student in Southsea taking A level Computer Science, and an adult in Paulsgrove learning Python for a new role, each placed with five to ten learners at the same level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'A Tudor warship',
      h2: 'The Mary Rose, lost in sight of Southsea Castle',
      intro: 'From the Mary Rose Trust\'s history of the ship.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1510', p: 'The Mary Rose Trust dates the ship\'s building to 1510, early in the reign of Henry VIII, whose navy she served for more than three decades.' },
          { h3: '19 July 1545', p: 'She sank during the Battle of the Solent, when the Trust says 200 French ships attempted to invade England. Henry VIII watched from Southsea Castle.' },
          { h3: '1982', p: 'After John Deane explored the wreck in the 1830s, the Mary Rose was finally raised in 1982, more than four centuries after she sank.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Mary Rose Trust. The Mary Rose begins this page because Portsmouth has always been a city shaped by water: a naval port on an island, reached across narrow creeks. That geography is exactly what makes the question below worth asking, and a computer network, a supply chain or a power grid faces the same question in a different form.' },
        { kind: 'spec', title: 'Where the roads come from', p: 'Ordnance Survey publishes Open Roads as free open data: every public road in Great Britain as a network of links and junctions. In a box around Portsmouth, from Fareham to Havant, it holds 17,738 links, most of them single carriageway, with dual carriageways shown as one collapsed link.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Three roads hold Portsea Island to the mainland',
      intro: 'A minimum cut is the smallest set of links whose loss separates two parts of a network. Maximum flow counts the separate routes between them. The two numbers are always equal.',
      body: [
        { kind: 'table', caption: 'Cuts and routes in the Open Roads network around Portsmouth', head: ['Question', 'Answer', 'What it means'], rows: [
          ['Links whose removal cuts any part off', '6,544', 'Graph bridges, most of them at the end of a cul-de-sac'],
          ['Dead-end junctions', '4,589', 'Each hangs off one of those bridges'],
          ['Separate routes, island centre to Cosham', '3', 'Maximum flow with each link used once'],
          ['Links that separate them', '3: M275, London Road, Eastern Road', 'The minimum cut, equal to the flow'],
          ['Separate routes, Fareham side to Havant side', '5', 'The mainland is harder to cut']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Build the graph', p: 'Every junction becomes a node and every road link an edge. Around Portsmouth that is 14,863 connected nodes and 17,357 edges.' },
          { h3: '2. Push flow', p: 'Treat each road as a pipe that carries one unit. Keep finding a route from the island centre to Cosham that still has room, and send one more unit along it.' },
          { h3: '3. Read off the cut', p: 'When no route has room left, the links that are full and lead out of the reachable part form the minimum cut. Here they are the three road links onto the island.' }
        ] },
        { kind: 'callout', h3: 'Why most bridges are not interesting', p: 'A standard algorithm finds every link whose loss disconnects the network, and around Portsmouth it finds 6,544. That sounds alarming until you notice that 4,589 junctions are dead ends: every cul-de-sac is joined by a link that is, technically, a bridge. The question worth asking is not which single link matters, but how many links separate two places we care about, and that needs a cut between them.' },
        { kind: 'p', text: 'Once the three island links are removed, the island side holds 2,534 junctions and 256.6 kilometres of road. The count covers roads only: the railway and any foot or cycle crossings are not in the Open Roads network, and a road closed for works still counts as a link. Learners are expected to say so whenever they quote the number three.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Thinking in networks',
      h2: 'Five questions to ask of any network',
      intro: 'Learned on the roads of an island city, then used on computer networks, power grids, supply chains, water pipes and the links between web pages.',
      body: [
        { kind: 'table', caption: 'Reading a network result honestly', head: ['Question', 'For Portsea Island', 'Why it matters'], rows: [
          ['Between which two places?', 'Central island against Cosham, Drayton and Farlington', 'A cut only means something between named sides'],
          ['What counts as a link?', 'Public roads in Open Roads; dual carriageways as one link', 'Adding rail or footpaths changes the answer'],
          ['Links or junctions?', 'Three separate links, and three separate junction routes', 'Losing one roundabout can close several links at once'],
          ['Is the answer stable?', 'Three for all seven pairs of island and mainland areas we tested', 'A cut that changes with small choices is fragile'],
          ['What does the theorem save?', 'No need to test combinations of 17,357 links', 'The flow finds the cut in seconds']
        ] },
        { kind: 'p', text: 'The last row is the reason the theorem matters. Checking every set of three links out of seventeen thousand would take longer than anyone could wait. A flow algorithm reaches the same certainty by growing routes one at a time, and when it stops, the bottleneck is written in the result.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A paper map of an island, counters for cars, and the game of closing roads until nobody can cross.' },
          { h3: 'Teenagers', p: 'Open Roads read in Python, a graph built from links and junctions, and a max-flow algorithm that finds the three crossings.' },
          { h3: 'Adults', p: 'Resilience analysis at work, from office networks to delivery routes, using cuts rather than guesses.' }
        ] },
        { kind: 'p', text: 'We have no connection with Ordnance Survey, the Mary Rose Trust or Portsmouth City Council. Open Roads is published under the Open Government Licence and the census figures are public; the graphs, cuts and flows on this page are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From closing roads on a map to max flow',
    intro: 'The age bands are a rough guide, and the free lesson finds the proper starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Ways across', p: 'Counting the routes between two places on a simple map and finding which roads, if closed, would stop the trip.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Graphs in code', p: 'Storing a map as nodes and edges, walking it with a search, and spotting the links that everything depends on.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Flows and cuts', p: 'Augmenting paths, the max-flow min-cut theorem and graph bridges on the real Portsmouth road network.', courses: ['problem-solving-dsa-masterclass-teens', 'competitive-programming-for-teens-course'] },
      { band: 'Ages 18 to 67', h3: 'Network resilience', p: 'Flow algorithms for adults working with networks, logistics and infrastructure, and how to explain a bottleneck.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A graph library finds a minimum cut in one call. Why should a Portsmouth teenager learn how?',
    intro: 'Because the call returns a number, and only understanding says what the number is worth.',
    p1: 'An AI assistant can import a library and print three. A learner who has pushed flow along real routes knows that three depends on the two areas chosen, on whether dual carriageways count once or twice, and on what the data leaves out. That learner can defend the answer, or change it deliberately when the question changes.',
    p2: 'Flows and cuts sit underneath a surprising amount of modern computing: routing traffic across the internet, splitting an image into foreground and background, matching students to places or tasks to machines. Photo editing tools have used graph cuts to separate an object from its background. The ideas are old, precise and still in daily use, which makes them worth learning properly.',
    closer: 'So a Portsmouth teenager should still learn to program in 2026, in a city that has always depended on a few crossings to the mainland: the software can find the bottleneck, but people decide what to do about it.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Southsea, North End or Drayton, from home',
    intro: 'With only three road links off the island, a trip across Portsmouth depends on a few busy roads. A live online lesson needs none of them.',
    cells: [
      { h3: 'Island and mainland', p: 'A learner in Eastney and another in Paulsgrove can share one lesson without either of them using the M275.' },
      { h3: 'English stages throughout', p: 'Reception, Key Stages 1 to 4, GCSEs and A levels, named as Portsmouth schools name them, and every lesson taught in English.' },
      { h3: 'The free lesson teaches', p: 'The first session covers a real task and ends by suggesting a level, a course and a weekly slot. No card details are taken.' },
      { h3: 'Right-level classmates', p: 'Groups of five to ten learners at the same stage, from Portsmouth, elsewhere in the UK and overseas, so every level can find a sensible hour.' },
      { h3: 'Twice every week', p: 'Two fixed lessons a week, around eight a month, with holidays and exam dates planned with the teacher in advance.' },
      { h3: 'Late afternoon in Southsea', p: 'When it is late afternoon in Portsmouth it is already evening in India, where our teachers are: four and a half hours ahead in the British summer, five and a half in winter. They teach through their evening so that UK learners can join after school or work.' }
    ],
    spec: { title: 'Around the harbour', p: 'Families in Gosport, Fareham, Havant or Waterlooville join exactly the same classes, since lessons are online and groups are built around level.' }
  },

  fees: {
    h2: 'Portsmouth lesson fees',
    intro: 'A free lesson to start, then one monthly fee.',
    first: 'A full lesson with no charge, ending with a suggested level, course and weekly time.',
    group: 'Roughly eight live lessons a month in a group of five to ten learners at the same level.',
    private: 'Roughly eight live lessons a month, with the teacher working only with your learner.',
    closer: 'A household in Milton pays the same as one in Hilsea or anywhere else outside India: a single fee in US dollars, with no pound prices shown. You pay nothing until after the free lesson, when a course and a time have been agreed; pausing, missed lessons and switching formats are all explained on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from families, quoted in full',

  book: {
    h2: 'Book a free lesson for a Portsmouth learner',
    intro: 'We choose the first task by level: a close-the-roads map game for a young child, a short Python program that stores a map as a graph for a beginner, or Open Roads and a max-flow search for a teenager ready for real data.',
    success: 'Thank you. We will contact you soon to arrange a lesson for your Portsmouth learner.'
  },

  faq: {
    h2: 'Portsmouth coding class questions',
    intro: 'What Portsmouth families most often ask us.',
    items: [
      { q: 'How many people live in Portsmouth?', a: 'The 2021 census counted 208,003 usual residents in the Portsmouth council area, of whom 201,362 lived in households and 6,641 in communal establishments such as student halls and care homes.' },
      { q: 'How does Portsmouth compare with England?', a: 'In 2021, 9.6% of residents were aged 20 to 24 against 6.0% in England, 25.0% of those aged five and over were students against 20.4%, and there were 5,149.8 residents per square kilometre against 433.5.' },
      { q: 'What is a minimum cut?', a: 'The smallest set of links in a network whose removal separates two chosen parts of it. The max-flow min-cut theorem says its size always equals the largest number of separate routes between those parts.' },
      { q: 'Which roads connect Portsea Island to the mainland?', a: 'In Ordnance Survey\'s Open Roads network, the minimum cut between the island centre and Cosham is three links: the M275, London Road (A3) and Eastern Road (A2030). Rail and foot crossings are not in that dataset.' },
      { q: 'Where does the road data come from?', a: 'Ordnance Survey Open Roads, free data under the Open Government Licence. Our study area around Portsmouth, from Fareham to Havant, contains 17,738 road links.' },
      { q: 'When did the Mary Rose sink?', a: 'The Mary Rose Trust says she sank on 19 July 1545 during the Battle of the Solent, watched by Henry VIII from Southsea Castle, and was raised in 1982. We are not connected with the Trust.' },
      { q: 'When are Portsmouth lessons held?', a: 'Lessons run after school, in the evening or at the weekend, and your slot is chosen with the teacher at the end of the free lesson. India is four and a half hours ahead of Portsmouth in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Portsmouth?', a: 'No. There is no Portsmouth centre and we have no premises anywhere in the UK, as every lesson is taught live online. Learners need a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Portsmouth lessons cost?', a: 'The first lesson is free. After it, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern are USD 150 a month. Course, format and time are agreed before any charge.', boiler: true },
      { q: 'How are Portsmouth groups put together?', a: 'By level, pace and goals rather than age or postcode, with five to ten learners at one stage. If no group suits the learner\'s timetable, we offer one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The south coast and beyond',
    html: 'Along the Solent, the <a class="cg-inline-link" href="/best-coding-class-in-southampton">Southampton page</a> builds a hash table from postcodes, and further east <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a> slides an eight-hour window over ozone readings. <a class="cg-inline-link" href="/best-coding-class-in-hull">Hull</a> runs a flood fill from the Humber. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> explains the school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> gathers every city we cover.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Portsmouth and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-southampton', label: 'Southampton' },
    { href: '/best-coding-class-in-brighton-and-hove', label: 'Brighton and Hove' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-pts .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.55rem); }
.cg-root.cg-pts .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.04; }
.cg-root.cg-pts .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-pts .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-pts .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.013em; }
.cg-root.cg-pts .cg-grid-3 { gap: clamp(1.05rem, 2.5vw, 2.1rem); }
.cg-root.cg-pts .cg-table th { letter-spacing: 0.025em; }
.cg-root.cg-pts .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pts .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-pts .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Portsmouth, Census 2021 via Nomis (E06000044): TS001 208,003 usual residents, 201,362 in households, 6,641 in communal establishments; TS007A 14,494 aged 15 to 19 (7.0 percent, England 5.7), 20,042 aged 20 to 24 (9.6 percent, England 6.0), 15,368 aged 25 to 29 (7.4 percent, England 6.6); TS068 49,106 students of 196,723 residents aged 5 and over (25.0 percent, England 20.4); TS006 5,149.8 usual residents per square kilometre (England 433.5), second among English council areas outside the London boroughs after Luton at 5,196.0 (our ranking of the published values). Mary Rose Trust, History of the Mary Rose: built 1510; sank 19 July 1545 in the Battle of the Solent, when 200 French ships attempted to invade; Henry VIII watched from Southsea Castle; John Deane explored the wreck in the 1830s; raised 1982.',
    localProject: 'Three roads hold Portsea Island to the mainland. OS Open Roads (read 22 September 2026), box E 455000 to 475000, N 93000 to 112000: 17,738 links, 14,986 nodes; largest connected part 14,863 nodes, 17,357 merged links. Graph bridges 6,544; dead-end nodes 4,589, each on a bridge. Minimum cut between central Portsea Island (850 nodes) and Cosham, Drayton and Farlington (937 nodes): 3 links (M275; London Road A3; Eastern Road A2030), maximum flow 3, node connectivity 3; island side after the cut 2,534 nodes, 256.6 km of road. Mainland Fareham side to Havant side cut: 5. Lesson family: minimum cut and maximum flow (max-flow min-cut theorem, Menger, graph bridges); distinct from Coventry union-find, Belfast PageRank and Hull flood fill.',
    requiredMentions: [
      '208,003',
      '201,362',
      '5,149.8',
      '20,042',
      '49,106',
      '196,723',
      'Mary Rose',
      'Southsea Castle',
      'M275',
      'Eastern Road',
      'Portsea Island',
      '17,738'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Portsmouth: 208,003 usual residents; 201,362 in households; 6,641 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000044' },
      { claim: 'Nomis, Census 2021 TS007A: Portsmouth and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000044,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Portsmouth 49,106 students of 196,723 aged 5 and over (25.0 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000044,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density for all English council areas (Portsmouth 5,149.8; Luton 5,196.0).', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=TYPE154' },
      { claim: 'Ordnance Survey Open Roads (shapefile download): road links and nodes for tile SU.', url: 'https://api.os.uk/downloads/v1/products/OpenRoads/downloads' },
      { claim: 'Mary Rose Trust, History of the Mary Rose: 1510, 19 July 1545, Battle of the Solent, Southsea Castle, John Deane, 1982.', url: 'https://maryrose.org/discover/history/' }
    ],
    rejectedClaims: [
      'A statement that Portsea Island has exactly three connections of any kind: rail and foot or cycle crossings are not in Open Roads, so the page limits the claim to road links in that dataset.',
      'Portsmouth Historic Dockyard about page: returned 404, so dockyard facts come only from the Mary Rose Trust.',
      'Portsmouth as the densest city in the UK: the published figures put Luton slightly higher among English council areas outside London, so the page says second.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Ordnance Survey, the Mary Rose Trust or Portsmouth City Council.'
    ]
  }
};
