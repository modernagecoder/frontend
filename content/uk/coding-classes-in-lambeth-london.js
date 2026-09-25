'use strict';
// Lambeth (cg- London borough page, UK cluster Phase 5, row 181). Named sources only.
// Spine: the cheapest network that links every dock. TfL Unified API /BikePoint (read 25 September 2026): 801 docking
// stations across London; converted from WGS84 to British National Grid (OS Helmert) and tested against the ONS December
// 2024 BFC boundary of Lambeth (E09000022): 58 inside, 1,650 docks between them (NbDocks). Straight-line minimum spanning
// tree: 17.12 km, 57 links; Prim and Kruskal agree (1,653 candidate pairs); shortest link 14 m; longest 1,073 m (Saltoun
// Road, Brixton to Brockwell Lido, Brixton); next 703 m (Gauden Road, Clapham to Clapham Common Station) and 694 m
// (Clarence Walk, Stockwell to Gauden Road). Star from the dock nearest Waterloo station ("Waterloo Station 1,
// Waterloo"): 128.0 km (7.5 times the tree). Greedy nearest-neighbour chain from that dock: 26.59 km. Tree degrees:
// 17 docks with one link, 26 with two, 15 with three. Straight lines, not streets or cables.
// Lesson family: minimum spanning trees (Prim, Kruskal, cut property: greedy is provably optimal here, unlike routing);
// screened 25 September 2026 (spanning tree 0, Kruskal 0).
// Lambeth Council's libraries pages did not list branch names in the text we read, so none are named.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'LAMBETH', blurb: 'Lambeth Palace, the Royal Festival Hall and a project that finds the shortest network linking 58 cycle docks.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-lambeth-london',
  code: 'lam',
  accent: '#492612',
  accentRationale: 'Lambeth: a dark chestnut brown from the solver (10.86:1 on every paper tint), deeper and redder than the Wandsworth oar brown',
  pageType: 'governorate',
  place: {
    name: 'Lambeth',
    eyebrow: 'London Borough of Lambeth',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Lambeth, London',
  title: 'Coding Classes in Lambeth, Brixton, Clapham | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Lambeth: Brixton, Clapham, Streatham, Stockwell, Vauxhall, Kennington and Waterloo. Ages 6 to 67.',
  ogDescription: 'Lambeth coding and Python classes, with a project on 58 cycle docks where learners find the shortest possible network linking them all, and prove a greedy method gets it right.',
  twitterDescription: 'Lambeth coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Lambeth Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Lambeth, taught live in English.'
  },

  h1: 'Coding classes in Lambeth',
  capsuleQ: 'What are the best coding classes in Lambeth?',
  capsule: 'Lambeth is the south London borough of Brixton, Clapham, Streatham, Stockwell, Vauxhall, Kennington, West Norwood and Waterloo, with 317,654 residents at the 2021 Census, Lambeth Palace and the Royal Festival Hall among its six Grade I entries. A coding class that means something teaches a learner when a simple method is guaranteed to give the right answer, and this page does it with cycle docks: link all 58 docks in the borough with the least total length, using two famous algorithms that are provably perfect. Teachers in India teach live on video to learners from 6 to 67, either alone or in groups of five to ten sharing a level. The first lesson is free. Afterwards, it is USD 100 a month for a group place or USD 150 a month for one-to-one.',
  lead: 'Transport for London publishes the location of every cycle hire docking station, 801 across the capital when we checked, and 58 of them fall inside Lambeth. Suppose you had to connect all 58 with a network, a cable, a maintenance route, anything, using as little total length as possible. There are more than a thousand possible links between pairs of docks. Our learners solve it with a minimum spanning tree, and they solve it twice, with Prim\'s algorithm and with Kruskal\'s, which work in completely different ways. Both land on exactly the same answer: 17.12 kilometres of straight-line links. Wiring every dock straight to Waterloo instead would take 128 kilometres. The surprise is that a greedy rule, always take the shortest safe link, is not just good here. It is perfect, and learners see why.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Lambeth.',

  picks: {
    eyebrow: 'Course picks for Lambeth',
    h2: 'First courses for Lambeth learners',
    intro: 'Think of a Year 2 child in Streatham who joins the dots in every puzzle book, a Year 8 pupil in Brixton who cycles everywhere, a Year 12 student in Clapham considering engineering or computer science, and a planner in Vauxhall who designs networks for a living. A free first lesson is open to each.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch dot-to-dot game where the shortest links win, and a first look at networks.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with real map points: distances between docks and the closest pair.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including Prim, Kruskal and the dock network on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who plan networks or routes and want to know when a quick method is guaranteed to be optimal.' }
    ]
  },

  sections: [
    {
      id: 'lambeth', tint: '', eyebrow: 'Lambeth in figures',
      h2: '317,654 residents and 58 cycle docks',
      intro: 'Where a figure is ours, we say whose data we counted; otherwise it is published by the named body.',
      body: [
        { kind: 'table', caption: 'Lambeth in four figures', head: ['What was measured', 'Result', 'Whose data'], rows: [
          ['People resident at the 2021 Census', '317,654', 'ONS table TS001'],
          ['Listed entries inside the borough', '943: 6 Grade I, 52 Grade II*, 885 Grade II', 'Historic England, counted 25 September 2026'],
          ['Cycle hire docking stations inside the borough', '58, with 1,650 docks between them', 'TfL BikePoint data, counted 25 September 2026'],
          ['Lines at Waterloo', 'Bakerloo, Jubilee, Waterloo & City and South Western Railway', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Palace and hall', p: 'Lambeth Palace and the Royal Festival Hall are both listed at Grade I.' },
          { h3: 'Churches', p: 'The Church of All Saints, the Church of St John the Divine and Christ Church are also Grade I.' },
          { h3: 'A statue', p: 'The statue of Robert Clayton at the north entrance to a ward of St Thomas\' Hospital completes Lambeth\'s six Grade I entries.' }
        ] }
      ]
    },
    {
      id: 'docks', tint: 'tint', eyebrow: 'The data',
      h2: 'Every dock, as TfL lists it',
      intro: 'TfL\'s open data gives each docking station\'s name, position and number of docks. We converted the positions to the national grid and kept the 58 inside Lambeth\'s boundary.',
      body: [
        { kind: 'table', caption: 'The longest links in the shortest network', head: ['From', 'To', 'Straight-line length'], rows: [
          ['Saltoun Road, Brixton', 'Brockwell Lido, Brixton', '1,073 m'],
          ['Gauden Road, Clapham', 'Clapham Common Station', '703 m'],
          ['Clarence Walk, Stockwell', 'Gauden Road, Clapham', '694 m']
        ] },
        { kind: 'p', text: 'The docks cluster thickly in the north of the borough around Waterloo and Vauxhall, where the shortest link is only 14 metres, and thin out to the south, where the network has to reach a long way to Brockwell Lido. The longest links tell learners where the docks are sparse, which is useful information in its own right. All distances are straight lines between dock positions, not routes along roads.' },
        { kind: 'p', text: 'Lambeth Council\'s library pages did not list branch names in the text our reader could see, so we do not name them here; the council\'s own website has the details.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Two algorithms, one perfect network',
      intro: 'Learners build a minimum spanning tree two different ways and check that the answers match to the metre.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Prim\'s algorithm', p: 'Start at any dock. Repeatedly add the shortest link from the network so far to a dock not yet in it, until every dock is joined.' },
          { h3: 'Kruskal\'s algorithm', p: 'Sort all 1,653 possible links from shortest to longest. Take each in turn unless it would close a loop. Stop when all docks connect.' },
          { h3: 'Why greedy works', p: 'Any link that is the shortest way across a split of the docks into two groups must be in some shortest network. Both algorithms only ever take such links.' }
        ] },
        { kind: 'table', caption: 'Ways to connect Lambeth\'s 58 docks, straight lines, run 25 September 2026', head: ['Method', 'Total length'], rows: [
          ['Every dock wired straight to the Waterloo dock', '128.0 km'],
          ['A single chain, always hopping to the nearest unvisited dock', '26.6 km'],
          ['Minimum spanning tree, Prim\'s algorithm', '17.12 km'],
          ['Minimum spanning tree, Kruskal\'s algorithm', '17.12 km']
        ] },
        { kind: 'p', text: 'The shortest network has 57 links, one fewer than the number of docks, as every tree must. Seventeen docks sit at the end of a branch with a single link; the rest have two or three. The star through Waterloo is seven and a half times longer. The contrast with route planning is the real lesson: for a delivery round, greedy nearest-neighbour choices are only a rough guess, but for linking points into a network, the greedy rule is provably the shortest possible. Knowing which kind of problem you face is half of computer science.' },
        { kind: 'callout', h3: 'Why this is more than asking an AI', p: 'An AI assistant can print a minimum spanning tree function. A learner who has coded both Prim and Kruskal, watched them agree on 17.12 km, and understood the cut argument knows when a greedy method can be trusted and when it cannot. That judgement, which problems have fast perfect answers and which do not, is exactly what separates confident engineering from guesswork, with or without AI.' }
      ]
    },
    {
      id: 'trees', tint: 'tint', eyebrow: 'Where trees appear',
      h2: 'Spanning trees beyond cycle docks',
      intro: 'The same idea turns up wherever things must be connected cheaply.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Networks', p: 'Laying cables, pipes or paths to connect every site with the least material is a spanning tree problem.' },
          { h3: 'Clustering', p: 'Cut the longest links of the tree and the docks fall into natural groups, a simple way to find clusters in data.' },
          { h3: 'Proof, not luck', p: 'The cut property turns "it seems to work" into "it always works", a first taste of proving an algorithm correct.' }
        ] },
        { kind: 'p', text: 'GCSE computer science pupils meet graphs and algorithms in outline; A-level students study graph algorithms formally and can implement both methods with a proper union-find structure and priority queue. The dock positions are TfL\'s open data; the conversions, trees, lengths and comparisons are our own, computed on 25 September 2026. TfL, the cycle hire scheme\'s sponsor, Lambeth Council, Historic England and the ONS have no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Waterloo, Brixton and a desk at home',
      intro: 'Lambeth has one of London\'s great railway termini and plenty of cycle docks. Our classes need neither.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Waterloo', p: 'TfL\'s open data lists the Bakerloo, Jubilee and Waterloo & City lines and South Western Railway at Waterloo.' },
          { h3: 'Streatham to Kennington', p: 'A learner in the south of the borough and another in Kennington can share one class without leaving home.' },
          { h3: 'A connected class', p: 'Every learner in a group of five to ten is linked to the teacher and to each other, and nobody is left at the end of a long branch.' }
        ] },
        { kind: 'spec', title: 'Lambeth in London', p: 'Lambeth is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> covers every borough and the City, linking each page when it is published, including <a class="cg-inline-link" href="/coding-classes-in-wandsworth-london">Wandsworth</a> to the west and <a class="cg-inline-link" href="/coding-classes-in-croydon-london">Croydon</a> to the south.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From dot-to-dot to provably optimal networks',
    intro: 'We place learners by what the free lesson shows they can do, with their year group only a starting hint.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Join the dots', p: 'Children connect points in Scratch and try to use the least ink.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Distances', p: 'Python that measures distances between real places and finds the nearest neighbour of each.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Graphs and proofs', p: 'Prim, Kruskal, union-find and the cut property, core A-level computer science and olympiad material.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Networks at work', p: 'Adults learn to recognise network problems and which ones have fast, guaranteed answers.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can write Prim\'s algorithm. Why should a Lambeth teenager learn why it works?',
    intro: 'Because trusting a method is different from understanding when it is right.',
    p1: 'AI tools produce standard algorithms reliably. What they rarely explain unprompted is the difference between problems where a greedy choice is guaranteed to be optimal and problems where it is only a guess. On Lambeth\'s docks the greedy spanning tree is perfect, while the greedy chain is not even close. A learner who has proved the first and measured the second will know which kind of answer they are looking at, from an AI or anyone else.',
    p2: 'Graphs underlie maps, social networks, the internet and many AI systems themselves. Understanding them deeply is a lasting skill. Tools will keep generating code; people who know when that code is provably right will keep being needed.',
    closer: 'Lambeth links Waterloo to Brixton to Streatham. A learner here who can find the shortest network joining all of it has learned a genuinely beautiful piece of computer science.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Vauxhall to West Norwood, taught live',
    intro: 'Across Lambeth, class begins when the video call connects.',
    cells: [
      { h3: 'At home', p: 'Learners sit at their own computer with headphones on; the only other requirement is broadband that copes with an hour of video.' },
      { h3: 'England\'s stages', p: 'We describe progress using English Key Stages, from Key Stage 1 up to sixth form, naming GCSE and A level where they apply. Lessons are in English.' },
      { h3: 'Free to begin', p: 'The opening session is taught properly and closes with the teacher\'s advice on level and course. No card is taken for it.' },
      { h3: 'Five to ten per class', p: 'Classmates share a stage, gathered from across the UK and abroad, so a sensible evening hour is usually available.' },
      { h3: 'Twice a week', p: 'Expect two lessons a week, both in the evening, with the group taking agreed time off in school holidays and around exams.' },
      { h3: 'UK times', p: 'Teachers are based in India; all times we send are UK times.' }
    ],
    spec: { title: 'A busy borough, a right-sized class', p: 'Nearly 318,000 people live in Lambeth, and a good class still needs five learners at the same stage free at the same hour, so our groups draw from far beyond it.' }
  },

  fees: {
    h2: 'Fees for Lambeth families',
    intro: 'A free first lesson, then one monthly fee across the borough.',
    first: 'A complete lesson with a teacher, free, ending with a recommended level, course and time.',
    group: 'About eight live lessons a month in a class of five to ten at one stage.',
    private: 'About eight live lessons a month, one to one.',
    closer: 'We bill in US dollars wherever a family lives outside India, which is why no pound amounts appear on the site. The first invoice comes only after the free lesson, once you have picked a course and a weekly evening. Pauses, missed lessons and a later move to or from private teaching are explained on the pricing page.'
  },

  reviewsH2: 'What families say about us on Google',

  book: {
    h2: 'Book a free lesson',
    intro: 'Knowing the learner\'s year group and one thing they love helps us plan. The first lesson could be a Scratch dot-to-dot, a Python distance finder, or the dock network on this page.',
    success: 'Thank you. Your Lambeth lesson request has reached our team.'
  },

  faq: {
    h2: 'Lambeth families\' questions',
    intro: 'About the borough, the network project and our lessons.',
    items: [
      { q: 'How many people live in Lambeth?', a: 'The 2021 Census counted 317,654 usual residents in the London Borough of Lambeth, in ONS table TS001.' },
      { q: 'How many cycle docks are in Lambeth?', a: 'When we checked TfL\'s open data on 25 September 2026, 58 of the 801 docking stations in London were inside Lambeth\'s boundary, with 1,650 docks between them.' },
      { q: 'What is a minimum spanning tree?', a: 'The shortest possible network of links that connects every point, with no loops. For Lambeth\'s 58 docks it has 57 links and a total straight-line length of 17.12 km.' },
      { q: 'Why do Prim\'s and Kruskal\'s algorithms agree?', a: 'Both only ever add links that are the shortest way across some split of the points into two groups, and every such link belongs to a shortest network. So both are guaranteed to find a minimum spanning tree.' },
      { q: 'Is this the route a cyclist would take?', a: 'No. The distances are straight lines between dock positions, and the tree is a network of links, not a single journey. The project is about connecting points, not planning a ride.' },
      { q: 'When would a Lambeth learner have lessons?', a: 'Lesson one tells us the level; we then offer a place in a class at that level that meets on a set evening, shown in UK time even though the teacher is in India.' },
      { q: 'What equipment is needed?', a: 'Any home computer with working sound and dependable internet will do. The network project needs Python and TfL\'s free docking station data.' },
      { q: 'Is there a Modern Age Coders centre in Lambeth?', a: 'No. There is no Lambeth centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Lambeth cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'More of London',
    html: 'Each borough and the City has a page linked from our <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> as it is published, among them <a class="cg-inline-link" href="/coding-classes-in-hammersmith-and-fulham-london">Hammersmith and Fulham</a>, where learners plan a walk with a Hilbert curve, and <a class="cg-inline-link" href="/coding-classes-in-bromley-london">Bromley</a>. Graph thinking leads on to our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes for London learners</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> lines up school years across the four nations.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Lambeth and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-wandsworth-london', label: 'Wandsworth' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-lam .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-lam .cg-hero h1 { font-weight: 790; letter-spacing: -0.02em; line-height: 1.03; }
.cg-root.cg-lam .cg-capsule { border-left: 4px solid var(--cg-accent); border-top: 1px solid var(--cg-accent); padding: 0.8rem 0 0 0.9rem; }
.cg-root.cg-lam .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lam .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-lam .cg-grid-3 { gap: clamp(0.95rem, 2.4vw, 1.75rem); }
.cg-root.cg-lam .cg-table caption { font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-lam .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lam .cg-table td:last-child { font-weight: 650; }
.cg-root.cg-lam .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-lam .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Lambeth. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000022): 317,654 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 943 (I 6, II* 52, II 885); Grade I 1116399 LAMBETH PALACE, 1249756 Royal Festival Hall, 1064976 CHURCH OF ALL SAINTS, 1357964 CHURCH OF ST JOHN THE DIVINE, 1358233 CHRIST CHURCH, 1319925 STATUE OF ROBERT CLAYTON AT NORTH ENTRANCE TO WARD (St Thomas\' Hospital). TfL Unified API HUBWAT (Waterloo): Bakerloo, Jubilee, Waterloo & City, South Western Railway. Lambeth Council /libraries-archives pages: no branch names in the text read; none named.',
    localProject: 'TfL Unified API /BikePoint, 25 September 2026: 801 docking stations; lat/lon converted to OSGB36 grid (GRS80 -> Helmert ETRS89->OSGB36 -> Airy -> TM); 58 inside Lambeth BFC polygon; NbDocks total 1,650. Euclidean MST: Prim 17.12 km = Kruskal 17.12 km (1,653 pairs), 57 edges; min edge 14 m; top edges 1,073 m Saltoun Road, Brixton - Brockwell Lido, Brixton; 703 m Gauden Road, Clapham - Clapham Common Station, Clapham Common; 694 m Clarence Walk, Stockwell - Gauden Road, Clapham. Degrees: 1 x17, 2 x26, 3 x15. Star from Waterloo Station 1, Waterloo (nearest dock to TfL 940GZZLUWLO 51.503299,-0.11478): 128.0 km (7.5x). Greedy NN chain from that dock: 26.59 km. Lesson family: minimum spanning tree and the cut property, screened 25 September 2026.',
    requiredMentions: [
      '317,654',
      'minimum spanning tree',
      'Kruskal',
      'Lambeth Palace',
      'Royal Festival Hall',
      'Robert Clayton',
      'St John the Divine',
      'Brockwell Lido',
      'Saltoun Road'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Lambeth E09000022: 317,654 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000022&measures=20100' },
      { claim: 'TfL Unified API, BikePoint: all cycle hire docking stations with positions and dock counts.', url: 'https://api.tfl.gov.uk/BikePoint' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Lambeth on 25 September 2026: 943 (6 I, 52 II*, 885 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'ONS Local Authority Districts December 2024 boundaries (BFC), Lambeth E09000022.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2024_Boundaries_UK_BFC/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint HUBWAT (Waterloo).', url: 'https://api.tfl.gov.uk/StopPoint/HUBWAT' }
    ],
    rejectedClaims: [
      'Waterloo as the busiest station (by any measure): not verified at ORR for this build; not stated.',
      'Road or cycle-lane distances: not computed; all links are straight lines and the page says so.',
      'Lambeth library branch names: not present in the page text read; none named.',
      'The Oval and cricket clubs: not used, to avoid any implied affiliation.',
      'Lambeth schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth: never a standout; used only to order the build.'
    ]
  }
};
