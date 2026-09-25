'use strict';
// Hammersmith and Fulham (cg- London borough page, UK cluster Phase 5, row 177). Named sources only.
// Spine: a curve that keeps neighbours together. Historic England NHLE points inside the ONS December 2024 BFC boundary of
// Hammersmith and Fulham (E09000013): 266 entries, 266 distinct points, borough bounding box 4.11 km x 7.24 km. Closed
// straight-line tour through all 266 in different orders (km): random 600.0 (mean of 1,000, seed 20260925); sorted west
// to east 265.5; south to north 157.9; eight zig-zag strips 63.1; Hilbert curve order on a 2x2 grid 181.2, 4x4 107.6,
// 16x16 61.8, 256x256 53.5, 1024x1024 53.5; nearest neighbour from the westernmost point 46.0; Hilbert order tidied with
// 2-opt 41.3. Straight lines, not streets. Hammersmith Bridge's list point lies outside the BFC boundary and is not used.
// Lesson family: Hilbert space-filling curve (recursion, locality-preserving ordering) as a tour heuristic; screened
// 25 September 2026 (Hilbert 0, space-filling 0, 2-opt 0). Distinct from Doncaster (annealing, p-median) and
// Rathfarnham (travelling salesman on a different point set).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'HAMMERSMITH AND FULHAM', blurb: 'Fulham Palace, Olympia and a project that uses a curve drawn by recursion to plan a walk past 266 listed buildings.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-hammersmith-and-fulham-london',
  code: 'hmf',
  accent: '#A02293',
  accentRationale: 'Hammersmith and Fulham: a vivid magenta from the solver (5.42:1 on every paper tint), the only bright pink-violet among the London boroughs so far',
  pageType: 'governorate',
  place: {
    name: 'Hammersmith and Fulham',
    eyebrow: 'London Borough of Hammersmith and Fulham',
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
  routeLabel: 'Hammersmith and Fulham, London',
  title: 'Coding Classes in Hammersmith and Fulham | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Hammersmith and Fulham: Shepherd\'s Bush, White City, Parsons Green, Sands End and Brook Green. Ages 6 to 67.',
  ogDescription: 'Hammersmith and Fulham coding and Python classes, with a project that draws a Hilbert curve by recursion and uses it to plan a short route past 266 listed buildings.',
  twitterDescription: 'Hammersmith and Fulham coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Hammersmith and Fulham Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Hammersmith and Fulham, taught live in English.'
  },

  h1: 'Coding classes in Hammersmith and Fulham',
  capsuleQ: 'What are the best coding classes in Hammersmith and Fulham?',
  capsule: 'Hammersmith and Fulham is the west London borough of Hammersmith, Fulham, Shepherd\'s Bush, White City, Parsons Green, Sands End and Brook Green, with 183,157 residents at the 2021 Census, Fulham Palace as its only Grade I building and 266 listed entries in all. A class worth joining shows learners how a clever idea beats brute force, and this page does it with a walk: visit all 266 listed buildings in the shortest possible loop, using a curve drawn by recursion, the Hilbert curve, to put them in a sensible order. Teachers in India teach live on video, for ages 6 to 67, one to one or in small classes of five to ten learners at the same stage. There is no charge for the first lesson. Carrying on costs USD 100 a month in a class or USD 150 a month one to one.',
  lead: 'Imagine a walking tour of every listed building in Hammersmith and Fulham: 266 of them, from Fulham Palace to the Grand Hall at Olympia. Take them in a random order and your loop would be about 600 kilometres long, criss-crossing a borough only seven kilometres from end to end. Sort them west to east and it is still 265. Our learners try something cleverer. The Hilbert curve is a line that wriggles through every square of a grid, drawn by a simple rule applied again and again: each square splits into four, and the curve visits the four in a twisted U. Its magic is that points close together on the curve are close together on the map. Line the buildings up along it and the tour drops to about 54 kilometres.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Hammersmith and Fulham.',

  picks: {
    eyebrow: 'Course picks for Hammersmith and Fulham',
    h2: 'Starting courses in Hammersmith and Fulham',
    intro: 'Picture a Year 3 child in Fulham who draws mazes, a Year 9 pupil in Shepherd\'s Bush who loves puzzles about shortest routes, a Year 12 student in Hammersmith considering computer science, and a delivery driver in White City who plans a route every morning. Each can begin with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch pen that draws a pattern by repeating the same rule inside itself, the first step to a Hilbert curve.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python: plot map points, join them in order and measure the route.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including recursion, the Hilbert curve and route comparisons from this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who plan rounds, visits or deliveries and want to see how ordering methods compare.' }
    ]
  },

  sections: [
    {
      id: 'hmf', tint: '', eyebrow: 'The borough in numbers',
      h2: '183,157 residents and 266 listed entries',
      intro: 'Figures come directly from the named publisher, or from our own count of its data where we say so.',
      body: [
        { kind: 'table', caption: 'Hammersmith and Fulham, counted', head: ['Measure', 'Value', 'Source'], rows: [
          ['Usual residents, 2021 Census', '183,157', 'ONS table TS001'],
          ['Heritage List entries inside the borough', '266: 1 Grade I, 25 Grade II*, 240 Grade II', 'Historic England data, counted 25 September 2026'],
          ['Size of the borough\'s bounding box', 'about 4.1 km by 7.2 km', 'Our measurement from the ONS boundary'],
          ['Lines at Hammersmith', 'Circle, District, Hammersmith & City and Piccadilly', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'One Grade I', p: 'Fulham Palace is the only Grade I entry inside the borough, which makes it the natural start of the tour.' },
          { h3: 'Halls and houses', p: 'The Grand Hall and Pillar Hall at Olympia, Kelmscott House, Hurlingham House and Sandford Manor House are among the Grade II* entries.' },
          { h3: 'Industry and charity', p: 'Gasholder No 2 at the former Fulham Gasworks is Grade II*, as are Sir William Powell\'s Almshouses and Fulham Town Hall.' }
        ] },
        { kind: 'p', text: 'The council\'s find-your-library page names libraries at Askew Road, Fulham, Hammersmith and Shepherds Bush.' }
      ]
    },
    {
      id: 'curve', tint: 'tint', eyebrow: 'The idea',
      h2: 'A curve that fills a square',
      intro: 'The Hilbert curve is built by recursion: to draw the curve on a grid, draw four smaller copies of it, rotated so they join end to end.',
      body: [
        { kind: 'table', caption: 'The Hilbert curve at each level of detail', head: ['Grid', 'Squares visited', 'Tour through the 266 buildings in curve order'], rows: [
          ['2 by 2', '4', '181.2 km'],
          ['4 by 4', '16', '107.6 km'],
          ['16 by 16', '256', '61.8 km'],
          ['256 by 256', '65,536', '53.5 km'],
          ['1,024 by 1,024', 'over a million', '53.5 km']
        ] },
        { kind: 'p', text: 'Each level refines the one before, and the tour shortens quickly and then stops improving: by 256 by 256 every building sits in its own square, so a finer grid changes nothing. The deep idea is locality. Two points next to each other along the curve are almost always near each other on the map, so sorting by position along the curve keeps neighbours together. Sorting by a single coordinate, west to east, does not: it zigzags north and south across the borough on every step.' },
        { kind: 'p', text: 'Every distance here is a straight line between two listed buildings\' map points, not a walk along streets, and learners say so in their write-up. Hammersmith Bridge does not appear: its heritage list point falls outside the borough\'s land boundary in the data we used.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Six ways to order a walk past 266 buildings',
      intro: 'Learners code each ordering, measure the loop, and discover which ideas are worth their effort.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Naive orders', p: 'Random order, then sorting by one coordinate. Quick to code, and a useful warning about how bad a thoughtless order can be.' },
          { h3: '2. Space-filling order', p: 'Zig-zag strips across the map, then the Hilbert curve. Both keep neighbours together; one uses recursion.' },
          { h3: '3. Greedy and tidy-up', p: 'Nearest neighbour picks the closest unvisited building each time. Then a 2-opt pass uncrosses any crossing legs until none improve.' }
        ] },
        { kind: 'table', caption: 'Loop length through all 266 listed entries, straight lines, run 25 September 2026', head: ['Method', 'Loop length'], rows: [
          ['Random order, average of 1,000 tries', '600.0 km'],
          ['Sorted west to east', '265.5 km'],
          ['Sorted south to north', '157.9 km'],
          ['Eight zig-zag strips', '63.1 km'],
          ['Hilbert curve order', '53.5 km'],
          ['Nearest neighbour', '46.0 km'],
          ['Hilbert order, then 2-opt tidy-up', '41.3 km']
        ] },
        { kind: 'p', text: 'The Hilbert order cuts the random loop by more than ninety per cent using nothing but a sort. Nearest neighbour does better, and tidying the Hilbert route with 2-opt does better still, at 41.3 kilometres. The trade-off is the lesson. The Hilbert sort takes one pass and works just as well for a million points; nearest neighbour and 2-opt need far more comparisons as the list grows. Choosing a method means weighing quality against effort, and learners measure both.' },
        { kind: 'callout', h3: 'Why this is worth doing without AI', p: 'An AI assistant can produce Hilbert curve code on request. What it will not give a learner is the feel for recursion that comes from drawing the curve level by level, or the judgement that comes from racing six methods on the same real map and seeing where cleverness pays and where it stops paying. That judgement, which method is good enough for the job, is what engineers are hired for.' }
      ]
    },
    {
      id: 'recursion', tint: 'tint', eyebrow: 'The skill underneath',
      h2: 'Recursion: a rule that uses itself',
      intro: 'The Hilbert curve is the friendliest possible introduction to recursion, one of the hardest ideas in programming for beginners.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Base case', p: 'At the smallest size, the curve is just a U through four squares. The program must know when to stop splitting.' },
          { h3: 'Recursive case', p: 'At any larger size, draw four smaller curves, turning the first and last so the ends meet.' },
          { h3: 'See it grow', p: 'Drawing levels one, two, three and four on screen makes the pattern of self-similarity impossible to miss.' }
        ] },
        { kind: 'p', text: 'GCSE computer science students meet recursion as a concept; A-level students must be able to write and trace recursive functions, and the Hilbert curve is an ideal practice piece. The building positions are Historic England\'s and the boundary is the ONS\'s; the orderings, curves and loop lengths are our own work, computed on 25 September 2026. Neither Historic England, Hammersmith and Fulham Council, TfL nor the ONS has any tie to Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Hammersmith\'s four lines, and one laptop',
      intro: 'The borough is well served by the Tube. Our classes do not need it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Hammersmith', p: 'TfL\'s open data lists the Circle, District, Hammersmith & City and Piccadilly lines at Hammersmith.' },
          { h3: 'White City to Sands End', p: 'A learner in the north of the borough and another by the river at Sands End can share one class from home.' },
          { h3: 'The shortest route', p: 'No commute is the shortest route of all: open the laptop, join the call, and the class of five to ten is there.' }
        ] },
        { kind: 'spec', title: 'Hammersmith and Fulham in London', p: 'Hammersmith and Fulham is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> covers every borough and the City, linking each page as it goes up, including <a class="cg-inline-link" href="/coding-classes-in-ealing-london">Ealing</a> to the west and <a class="cg-inline-link" href="/coding-classes-in-wandsworth-london">Wandsworth</a> across the river.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From drawing mazes to recursive curves',
    intro: 'We start each learner at the rung the free lesson reveals, not the one their year group implies.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Patterns that repeat', p: 'Children draw with the Scratch pen and discover shapes made by repeating a rule.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Routes and distances', p: 'Python that plots points, joins them in order and adds up the lengths of the legs.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Recursion and heuristics', p: 'Hilbert curves, greedy routes and 2-opt on real map data, excellent for A-level computer science and project work.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Good enough, fast', p: 'Adults learn to compare planning methods on quality and effort, and to pick the one that fits the job.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can plan a route in seconds. Why should a Hammersmith and Fulham teenager learn how?',
    intro: 'Because choosing the right method is a judgement, and judgement comes from experiments.',
    p1: 'Route planning is everywhere in modern software, and AI tools will happily suggest an approach. But which one? On this borough\'s 266 buildings a one-line sort along a Hilbert curve gets within about a third of the tidied 2-opt route, while greedy and 2-opt methods do better at a much higher cost as the list grows. A learner who has timed and measured all of them can judge an AI\'s suggestion instead of just accepting it.',
    p2: 'Recursion, locality and trade-offs between speed and quality are ideas that last a whole career, from databases to games to logistics. Tools will keep writing code. People who know which code to ask for will keep being needed.',
    closer: 'Hammersmith and Fulham packs 266 listed buildings into a few kilometres. A learner here who can find a sensible path through them with a curve drawn by recursion has learned something genuinely elegant.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Shepherd\'s Bush to Parsons Green, classes online',
    intro: 'Wherever a learner is in the borough, their class is a video call away.',
    cells: [
      { h3: 'At home', p: 'A laptop or desktop, headphones and broadband that copes with video are enough to take part.' },
      { h3: 'School stages', p: 'We use the Key Stages of schools in England to describe progress, up to sixth form, naming GCSE or A level when they apply. All teaching is in English.' },
      { h3: 'First lesson free', p: 'A proper lesson with a teacher, not a sales pitch, ending with a recommended level and course. No card details needed.' },
      { h3: 'Matched groups', p: 'Five to ten learners at the same stage, from across the UK and further afield, so a sensible time is usually available.' },
      { h3: 'Two sessions a week', p: 'Most classes meet on two evenings a week and pause for holidays and exams by agreement.' },
      { h3: 'UK clock', p: 'Teachers are in India, but every time we send is given in UK time.' }
    ],
    spec: { title: 'A compact borough, a wide class', p: 'Around 183,000 people live in Hammersmith and Fulham, and a good class needs five learners at one stage free together, so ours draw from far beyond the borough.' }
  },

  fees: {
    h2: 'Fees for Hammersmith and Fulham families',
    intro: 'A free first lesson, then a single monthly fee, the same from White City to Fulham.',
    first: 'A full first lesson with a teacher, free, with a recommended level, course and time at the end.',
    group: 'Roughly eight live lessons a month in a class of five to ten at one stage.',
    private: 'Roughly eight live lessons a month, one learner with one teacher.',
    closer: 'Families here pay in US dollars, as all families outside India do, and the site shows no pound prices. Nothing is charged until after the free lesson and until a course and weekly time are agreed. The pricing page covers pausing, missed lessons and switching between group and private teaching.'
  },

  reviewsH2: 'Families\' Google reviews, word for word',

  book: {
    h2: 'Ask for a free lesson',
    intro: 'Share the learner\'s age or school year and one interest. The first lesson might be a Scratch pattern drawn by repetition, a Python route plotter, or the Hilbert curve project on this page.',
    success: 'Thank you. Your Hammersmith and Fulham lesson request is with us.'
  },

  faq: {
    h2: 'Hammersmith and Fulham questions',
    intro: 'About the borough, the Hilbert curve project and our lessons.',
    items: [
      { q: 'How many people live in Hammersmith and Fulham?', a: 'The 2021 Census counted 183,157 usual residents in the London Borough of Hammersmith and Fulham, in ONS table TS001.' },
      { q: 'How many listed buildings are there?', a: 'We counted 266 entries on Historic England\'s National Heritage List inside the borough boundary: one at Grade I, Fulham Palace, 25 at Grade II* and 240 at Grade II.' },
      { q: 'What is a Hilbert curve?', a: 'A line that passes through every square of a grid, built by recursion: each square is split into four and the curve visits them in a turned U shape. Points close together along the curve are close together on the map.' },
      { q: 'How short was the shortest route found?', a: 'Taking the buildings in Hilbert curve order gave a straight-line loop of 53.5 km; nearest neighbour gave 46.0 km; and tidying the Hilbert route with 2-opt gave 41.3 km. A random order averaged 600 km.' },
      { q: 'Are these real walking distances?', a: 'No. They are straight lines between map points, not routes along streets. The project is about comparing ordering methods fairly, all measured the same way.' },
      { q: 'When would lessons take place?', a: 'After the free lesson we suggest a weekly slot in a class at the right level with room. Teachers are in India; slots are quoted in UK time.' },
      { q: 'What is needed at home?', a: 'A computer with sound and a steady connection. The route project needs Python and one free download of heritage list points.' },
      { q: 'Is there a Modern Age Coders centre in Hammersmith and Fulham?', a: 'No. There is no Hammersmith and Fulham centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Hammersmith and Fulham cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'On from west London',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> indexes every borough and the City, linking pages as they appear, from <a class="cg-inline-link" href="/coding-classes-in-hounslow-london">Hounslow</a> further west to <a class="cg-inline-link" href="/coding-classes-in-camden-london">Camden</a> in the north. Route planning and search lead naturally into our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> sets out school stages in all four UK nations.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hammersmith and Fulham and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-ealing-london', label: 'Ealing' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-hmf .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.3vw, 2.7rem); }
.cg-root.cg-hmf .cg-hero h1 { font-weight: 800; letter-spacing: -0.02em; line-height: 1.02; }
.cg-root.cg-hmf .cg-capsule { border-top: 2px solid var(--cg-accent); border-left: 2px solid var(--cg-accent); padding: 0.85rem 0 0 0.85rem; }
.cg-root.cg-hmf .cg-eyebrow { letter-spacing: 0.12em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-hmf .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.012em; }
.cg-root.cg-hmf .cg-grid-3 { gap: clamp(0.9rem, 2.6vw, 1.8rem); }
.cg-root.cg-hmf .cg-table caption { font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-hmf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hmf .cg-table td:last-child { font-weight: 650; }
.cg-root.cg-hmf .cg-ladder-col { border-left: 4px dashed var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-hmf .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Hammersmith and Fulham. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000013): 183,157 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 266 (I 1, II* 25, II 240); Grade I 1286903 FULHAM PALACE; II* include 1096048 Grand Hall and Pillar Hall, Olympia Exhibition Centre, 1193040 KELMSCOTT HOUSE, 1192658 HURLINGHAM HOUSE, 1286723 SANDFORD MANOR HOUSE, 1261959 Gasholder No 2, Fulham Gasworks, 1079809 SIR WILLIAM POWELL\'S ALMSHOUSES, 1191939 FULHAM TOWN HALL. Hammersmith Bridge not inside the BFC boundary points. LBHF /libraries/find-your-library, 25 September 2026: Askew Road, Fulham, Hammersmith, Shepherds Bush libraries named. TfL Unified API HUBHMS (Hammersmith): Circle, District, Hammersmith & City, Piccadilly.',
    localProject: 'Points: 266 NHLE Easting/Northing inside the H&F BFC polygon (266 distinct). Bounding box 4.11 km (E) x 7.24 km (N). Closed tour length, Euclidean, km: random 600.0 (mean of 1,000 permutations, numpy default_rng(20260925)); sorted by easting 265.5; by northing 157.9; 8 boustrophedon strips 63.1; Hilbert index on square bbox grid g x g (ties by easting): g 2 181.2, 4 107.6, 16 61.8, 256 53.5, 1024 53.5; nearest neighbour from westernmost point 46.0; 2-opt on the g 1024 Hilbert order 41.3. Lesson family: Hilbert space-filling curve ordering as a tour heuristic, recursion; screened 25 September 2026 (famscan: Hilbert 0, space-filling 0, 2-opt 0).',
    requiredMentions: [
      '183,157',
      'Hilbert curve',
      'Fulham Palace',
      'Kelmscott House',
      'Hurlingham House',
      'Sandford Manor House',
      'Gasholder No 2',
      'Sir William Powell',
      'Askew Road'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Hammersmith and Fulham E09000013: 183,157 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000013&measures=20100' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Hammersmith and Fulham on 25 September 2026: 266 (1 I, 25 II*, 240 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'ONS Local Authority Districts December 2024 boundaries (BFC), Hammersmith and Fulham E09000013.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2024_Boundaries_UK_BFC/FeatureServer/0' },
      { claim: 'Hammersmith and Fulham Council, find your library.', url: 'https://www.lbhf.gov.uk/libraries/find-your-library' },
      { claim: 'TfL Unified API, StopPoint HUBHMS (Hammersmith).', url: 'https://api.tfl.gov.uk/StopPoint/HUBHMS' }
    ],
    rejectedClaims: [
      'Walking distances along streets: not computed; all distances are straight lines and the page says so.',
      'Hammersmith Bridge: its list point lies outside the borough\'s land boundary in the data used; not included.',
      'The age claim often made for Gasholder No 2: not read in the list entry for this build; only its name and grade are used.',
      'Football grounds and clubs in the borough: not used, to avoid any implied affiliation.',
      'Hammersmith and Fulham schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth: never a standout; used only to order the build.'
    ]
  }
};
