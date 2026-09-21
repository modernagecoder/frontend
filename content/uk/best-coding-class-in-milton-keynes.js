'use strict';
// Milton Keynes (cg- city page, UK cluster Phase 4). Spine: an answer that gets more precise as you throw more
// darts. Monte Carlo estimation of how much of Milton Keynes lies within 400 metres of an active bus stop.
// Data read on 21 September 2026 (scratchpad mk/mc.py): NaPTAN via the DfT API for administrative area 049
// (Milton Keynes), 1,316 active on-street and bus station stops; the Milton Keynes local authority boundary
// (LAD December 2023, generalised clipped, from the ONS Open Geography Portal) in British National Grid,
// about 308.67 square kilometres on that simplified file by our calculation. Random points in the bounding
// box, kept if inside the boundary (about 60% are), counted as covered if a stop lies within 400 m: 100 points
// 37.0% plus or minus 4.8 (one standard error), 1,000 points 41.1% plus or minus 1.6, 10,000 points 39.7% plus
// or minus 0.5, 100,000 points 39.9% plus or minus 0.15; a 50-metre grid of 123,471 points inside the boundary
// gives 39.8%. Lesson family: Monte Carlo estimation and error that shrinks with the square root of the sample.
// Screened free site-wide on 21 September 2026 (Monte Carlo: 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 (287,060 usual residents; 284,994 in
// households; 2,066 in communal establishments), TS007A (aged 5 to 9 20,264, 7.1%; 10 to 14 20,615, 7.2%;
// 35 to 39 23,020, 8.0%; 20 to 24 5.2%; England 5.9%, 6.0%, 6.7% and 6.0%; band total 287,061, never summed),
// TS068 (59,908 schoolchildren and full-time students of 269,327 residents aged 5 and over, 22.2%; England
// 20.4%); Bletchley Park, Colossus in Context part 1 (first Colossus delivered January 1944, one of ten; built
// to help break Lorenz messages, known at Bletchley as Tunny; operated in the Newmanry); The National Museum of
// Computing, Rebuilding Colossus (1993 start from eight wartime photographs of 1945; original mechanical
// drawings burnt in 1960; rebuilt in the room in Block H where Colossus No 9 stood; project inaugurated by the
// Duke of Kent on 18 July 1994); Milton Keynes City Council visitor travel page (over 300km of Redways).
// Refused (403): the Open University facts page; not used.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'MILTON KEYNES', blurb: 'Home of Bletchley Park and Colossus, with a Monte Carlo project that estimates how much of the city is near a bus stop.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-milton-keynes',
  code: 'mkn',
  accent: '#0F2B57',
  accentRationale: 'Milton Keynes: a deep codebreaker navy from the solver (11.34:1 on every paper tint, dE 8.2 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Milton Keynes',
    eyebrow: 'Milton Keynes, Buckinghamshire, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Buckinghamshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Milton Keynes, England',
  title: 'Best Coding Classes in Milton Keynes | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Milton Keynes learners aged 6 to 67, from Bletchley to Newport Pagnell, with a live teacher. First lesson free.',
  ogDescription: 'Coding and AI classes for Milton Keynes, the home of Colossus, on a page that throws 100,000 random darts to measure how much of the city is near a bus stop.',
  twitterDescription: 'Milton Keynes coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Milton Keynes Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Milton Keynes, taught live in English.'
  },

  h1: 'Coding classes in Milton Keynes',
  capsuleQ: 'What are the best coding classes in Milton Keynes?',
  capsule: 'Milton Keynes had 287,060 residents at the 2021 Census and is a city of young families: children aged 5 to 9 made up 7.1% of residents and adults aged 35 to 39 made up 8.0%, above England\'s 5.9% and 6.7%. It is also where the first Colossus computer went to work, at Bletchley Park in January 1944. Modern Age Coders gives Milton Keynes learners from age six to sixty-seven live online lessons, in ability-matched groups of five to ten or one to one, taught from India at a regular hour on UK time. There is no charge for the first lesson, and after that a group place is USD 100 a month and private teaching USD 150 a month.',
  lead: 'How much of Milton Keynes is within a short walk of a bus stop? Measuring it exactly means drawing a 400-metre circle round each of the city\'s 1,316 active stops and working out the area of the merged shape inside the borough boundary, which is fiddly geometry. There is a cleverer way, and it is one of the oldest ideas in computing: throw darts. Scatter random points across the map, keep the ones that land inside Milton Keynes, and count what fraction are within 400 metres of a stop. With a hundred darts the answer is 37%, give or take almost five points. With a thousand it is 41%. With a hundred thousand it settles at 39.9%, give or take a sixth of a point, and a painstaking 50-metre grid agrees at 39.8%. Why the answer sharpens so slowly, and exactly how much more effort each extra digit costs, is the lesson this city\'s own map teaches our teenage learners here.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Milton Keynes.',

  picks: {
    eyebrow: 'Course picks for Milton Keynes',
    h2: 'Four courses for the city of Colossus',
    intro: 'Start from what the learner wants to make. Each course begins with a free live lesson and needs no card details.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Python and AI ideas for primary and early secondary, including a program that plays darts and keeps score.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths explored with code, from coin-flip and dice simulators to statistics on real data.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python to GCSE depth and beyond, including simulation and the Monte Carlo coverage project.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'Simulation, sampling error and confidence intervals, applied to real geographic data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Milton Keynes today',
      h2: 'A city of young families',
      intro: 'The 2021 Census for the Milton Keynes local authority, from the Office for National Statistics, read through Nomis.',
      body: [
        { kind: 'table', caption: 'Milton Keynes, Census 2021', head: ['Census measure', 'Milton Keynes', 'England'], rows: [
          ['Usual residents', '287,060', 'Not compared'],
          ['Living in a household', '284,994', 'Not compared'],
          ['Living in a communal establishment', '2,066', 'Not compared'],
          ['Aged 5 to 9', '20,264, a 7.1% share', '5.9%'],
          ['Aged 10 to 14', '20,615, a 7.2% share', '6.0%'],
          ['Aged 35 to 39', '23,020, an 8.0% share', '6.7%'],
          ['Aged 20 to 24', '5.2%', '6.0%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Parents in their thirties', p: 'Adults aged 35 to 39 were 8.0% of Milton Keynes residents, against 6.7% nationally, and children aged 5 to 14 ran well above the England shares too.' },
          { h3: 'Fewer early twenties', p: 'Only 5.2% were aged 20 to 24, below England\'s 6.0%: a city of families rather than of students.' },
          { h3: 'In education', p: 'Of 269,327 residents aged five and over, 59,908 were schoolchildren or full-time students, a 22.2% share where England had 20.4%.' }
        ] },
        { kind: 'p', text: 'The five-year age table adds up to 287,061, one more than the headline 287,060, because each census table is protected independently. We quote the headline and do not add the bands. For a coding school, the shape of this city means one thing above all: lots of children in primary and early secondary, with parents looking for a strong start and a clear route to GCSE.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Colossus and Bletchley',
      h2: 'Where the first Colossus went to work',
      intro: 'From Bletchley Park\'s own history pages and The National Museum of Computing\'s account of rebuilding Colossus.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'January 1944', p: 'Bletchley Park records that the first Colossus computer was delivered there in January 1944, and that nine more followed it.' },
          { h3: 'Tunny', p: 'The machines were built to help break the wireless messages of Germany\'s senior commanders, enciphered with the Lorenz machine and known at Bletchley as Tunny. They worked in the department called the Newmanry.' },
          { h3: 'Rebuilt from photographs', p: 'The museum\'s account says the rebuild started in 1993 from eight wartime photographs of Colossus taken in 1945, because the original mechanical drawings had been burnt in 1960.' }
        ] },
        { kind: 'p', text: 'The rebuilt Colossus stands in the room in Block H where Colossus No 9 stood during the war, and the Colossus Rebuild Project was inaugurated by the Duke of Kent on 18 July 1994. We have no connection with Bletchley Park or The National Museum of Computing. We mention them because a learner in Milton Keynes lives a short journey from where electronic computing was put to work, and seeing the machine that did it makes a first program feel less like homework and more like inheritance.' },
        { kind: 'spec', title: 'Codebreaking as maths', p: 'Breaking Tunny was statistics as much as engineering: counting patterns in huge numbers of characters and asking whether they were chance. Estimating an area by random points uses the same instinct, trusting large numbers of random trials to reveal what is really there.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Throwing darts at Milton Keynes',
      intro: 'Monte Carlo estimation answers a hard geometry question with random points and a counter. We used the national stop register and the ONS boundary for the borough.',
      body: [
        { kind: 'table', caption: 'Share of Milton Keynes within 400 metres of an active bus stop, by number of random points', head: ['Points inside the boundary', 'Estimate', 'Give or take (one standard error)'], rows: [
          ['100', '37.0%', '4.8 points'],
          ['1,000', '41.1%', '1.6 points'],
          ['10,000', '39.7%', '0.5 points'],
          ['100,000', '39.9%', '0.15 points'],
          ['50-metre grid, 123,471 points', '39.8%', 'A check, not an estimate']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Throw into a box', p: 'Random points are drawn across the rectangle around Milton Keynes. Roughly six in ten land inside the borough boundary; the rest are thrown away, a check done with a point-in-polygon test.' },
          { h3: '2. Test each dart', p: 'For every point inside, the program looks for any of the 1,316 active stops within 400 metres, checking only nearby grid squares so it stays fast.' },
          { h3: '3. Watch it settle', p: 'The running share wanders early, then steadies. Each estimate comes with its own margin, calculated from the count alone.' }
        ] },
        { kind: 'callout', h3: 'Why a hundred times more darts buys only ten times more precision', p: 'The margin of error in a Monte Carlo estimate shrinks with the square root of the number of points. Going from 1,000 points to 100,000 is a hundred times the work, and the margin falls from 1.6 points to 0.15, about ten times smaller. Every extra reliable digit costs a hundred times more darts. That rule governs election polls, drug trials and the simulations inside weather forecasts, and a learner can see it happen on their own screen in minutes.' },
        { kind: 'p', text: 'The result itself deserves a plain reading. About 40% of the area of the borough lies within 400 metres of an active bus stop, which makes sense for a place with a dense city core, older towns such as Bletchley, Wolverton and Newport Pagnell, and a lot of countryside and parkland around them. Area is not people: most residents live in the built-up parts, so this figure says nothing about how many people are near a stop, and the page does not pretend it does.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Estimating by simulation',
      h2: 'Five habits for trustworthy random estimates',
      intro: 'Learned on a bus map, used afterwards on risk, games, physics, finance-free forecasting and any problem too awkward to solve on paper.',
      body: [
        { kind: 'table', caption: 'How to run a Monte Carlo estimate you can defend', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Fix the seed', 'Record the random seed so the run can be repeated exactly', 'A result nobody else can reproduce'],
          ['Report the margin', 'Give the standard error alongside every estimate', 'A single figure that looks more certain than it is'],
          ['Plan the sample', 'Decide the precision needed, then the number of points, using the square-root rule', 'Running far too few, or wastefully many'],
          ['Check with another method', 'Compare with a grid or an exact calculation on a small case', 'A bug disguised as randomness'],
          ['Say what is measured', 'Area near a stop is not people near a stop', 'A true number answering the wrong question']
        ] },
        { kind: 'p', text: 'The last habit matters as much as the maths. A fair estimate of the wrong quantity is still misleading, and learners write one sentence under every result saying exactly what it measures and what it does not.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Dropping counters onto a paper map and counting how many land near the bus stops drawn on it, then doing the same in Scratch with thousands of dots.' },
          { h3: 'Teenagers', p: 'The full project in Python: point-in-polygon, a grid for fast lookups, the running estimate and its standard error.' },
          { h3: 'Adults', p: 'Simulation for questions at work where exact answers are hard, with margins reported and methods cross-checked.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Department for Transport, the Office for National Statistics, Milton Keynes City Council, Bletchley Park or The National Museum of Computing. The stop register and the boundary are both published for public use.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around the city',
      h2: 'Three hundred kilometres of Redways',
      intro: 'Milton Keynes was built with its own network for people on foot and on bikes.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The Redways', p: 'Milton Keynes City Council describes over 300km of dedicated off-road walking and cycling pathways, known as the Redways.' },
          { h3: 'Stops everywhere it is built', p: 'The register lists stops across the city core and the older towns, from Central Milton Keynes to Bletchley and Newport Pagnell.' },
          { h3: 'Countryside in between', p: 'The 60% of the borough further than 400 metres from any stop is largely the open land and parkland that surround the built-up areas.' }
        ] },
        { kind: 'spec', title: 'A planned city makes a good dataset', p: 'Few British cities were laid out as deliberately as Milton Keynes, which makes its maps unusually clean to work with. That is a gift for a learner: fewer quirks to fight, and more time to think about the method.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counters on a map to an estimate with a margin',
    intro: 'Bands are approximate. The first free lesson tells us where to begin.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Chance games', p: 'Coin flips, dice and spinners in code, and the discovery that more tries give steadier results.', courses: ['scratch-programming-complete-course', 'early-math-foundations'] },
      { band: 'Ages 11 to 13', h3: 'Probability by simulation', p: 'Programs that repeat an experiment thousands of times and compare the result with the maths.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Monte Carlo properly', p: 'Random points, point-in-polygon, standard error and the square-root rule on a real map.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Simulation at work', p: 'Estimating hard quantities by simulation, with seeds, margins and independent checks.', courses: ['data-science-complete-masterclass-college', 'college-mathematics-complete-masterclass'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool can estimate this in seconds. Why should a Milton Keynes teenager learn Monte Carlo?',
    intro: 'Because an estimate without its margin is only half an answer.',
    p1: 'Ask an assistant how much of Milton Keynes is near a bus stop and it may write a simulation and return a figure. If it used a few hundred points, the figure could be several percentage points off and still look precise. Unless someone asks for the margin, or checks it against a second method, nobody would know. The mathematics that tells you how far to trust the number is simple, and it is exactly the part a quick answer tends to leave out.',
    p2: 'Much of modern AI is built on random sampling of one kind or another: training on random batches of data, sampling words one at a time, testing on random subsets. A learner who understands why error shrinks with the square root of the sample will ask the right question of every confident number they meet, from a survey headline to a model\'s accuracy score.',
    closer: 'That is why a Milton Keynes learner, in a city where codebreakers trusted large numbers of trials, should still learn to program in 2026: the habit of asking how sure a number is does not come from the tools; it comes from having built the estimate yourself.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Bletchley, Wolverton or Newport Pagnell, all on one timetable',
    intro: 'Milton Keynes stretches from its old towns to its new estates, and a live online class reaches every one without a journey.',
    cells: [
      { h3: 'No trip across the grid', p: 'A learner in Emerson Valley and one in Newport Pagnell can share a class from their own homes, and no one drives across the grid roads.' },
      { h3: 'The stages schools use', p: 'Reception, Key Stages, Year 9 options, GCSEs and A levels keep the names Milton Keynes schools give them, with every lesson in English.' },
      { h3: 'A real first session', p: 'The free lesson is actual teaching on an actual task, ending with a frank recommendation of level, course and slot, and no card details.' },
      { h3: 'Matched by ability', p: 'Groups of five to ten learners at one level, from Milton Keynes and elsewhere in the UK and abroad, so every stage can find a time.' },
      { h3: 'Twice weekly', p: 'Two lessons a week at a fixed time, around eight a month, with breaks for holidays and revision arranged with the teacher.' },
      { h3: 'Time from India', p: 'India keeps the same clock all year, so our teachers are four and a half hours ahead of Milton Keynes in summer and five and a half in winter; after-school and evening slots sit within their working day.' }
    ],
    spec: { title: 'Lots of families, lots of after-school requests', p: 'With a high share of children aged 5 to 14, Milton Keynes families mostly ask for slots just after school and early in the evening, and those are the easiest for our teachers to give.' }
  },

  fees: {
    h2: 'What classes cost in Milton Keynes',
    intro: 'Here is everything, in three lines.',
    first: 'One whole lesson for free, finishing with a level, a course suggestion and a proposed weekly time.',
    group: 'A month of lessons, usually eight, in a group of five to ten learners working at the same level.',
    private: 'Around eight lessons a month on the same rhythm, taught to one learner alone.',
    closer: 'We charge in US dollars at the same rate for every family outside India, so Bletchley and Newport Pagnell pay identical fees, and there are no prices in pounds. Nothing is billed until the free lesson has agreed a course and a slot, and the pricing page sets out how breaks, missed lessons and changes between group and private work.'
  },

  reviewsH2: 'Google reviews from six families, unedited',

  book: {
    h2: 'Start with a free lesson in Milton Keynes',
    intro: 'The first task suits the learner: a dice or spinner game for a young child, a simulation that repeats an experiment, or the full dart-throwing coverage project for a teenager who likes a challenge.',
    success: 'Thank you. The team will be in touch about a Milton Keynes class shortly.'
  },

  faq: {
    h2: 'Milton Keynes coding class questions',
    intro: 'The questions Milton Keynes families ask us most.',
    items: [
      { q: 'How many people live in Milton Keynes?', a: 'The 2021 Census counted 287,060 usual residents in the Milton Keynes local authority area: 284,994 in households and 2,066 in communal establishments.' },
      { q: 'Is Milton Keynes a young city?', a: 'It has many young families. In 2021, children aged 5 to 9 were 7.1% of residents and adults aged 35 to 39 were 8.0%, both above England\'s shares of 5.9% and 6.7%.' },
      { q: 'What is the Monte Carlo project?', a: 'Learners scatter random points across the Milton Keynes boundary and count how many fall within 400 metres of one of the 1,316 active bus stops. With 100,000 points the estimate is 39.9%, give or take 0.15 points.' },
      { q: 'Why does it need so many points?', a: 'Because the margin of error shrinks with the square root of the number of points. A hundred times more points gives about ten times more precision.' },
      { q: 'What does Colossus have to do with Milton Keynes?', a: 'The first Colossus was delivered to Bletchley Park, now in Milton Keynes, in January 1944. A rebuilt Colossus stands in Block H, in the room where Colossus No 9 stood. We are not connected with Bletchley Park or the museum.' },
      { q: 'When are lessons for Milton Keynes learners?', a: 'After school, in the evening or at the weekend, with the time set in UK hours at the free lesson. India is four and a half hours ahead of Milton Keynes in summer and five and a half in winter.' },
      { q: 'Can lessons pause for exams and holidays?', a: 'Yes. Many families pause during GCSE and A level revision, the exams and school holidays, agreeing the dates with the teacher in advance.' },
      { q: 'Do you have premises in Milton Keynes?', a: 'We do not. There is no Modern Age Coders building in Milton Keynes or anywhere in the UK; lessons are live online, needing a computer with audio and a dependable connection. The phone number we give is in India.', boiler: true },
      { q: 'What do Milton Keynes lessons cost?', a: 'The first lesson is free. A group place is then USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; private teaching on the same schedule is USD 150 a month. Course, format and time are agreed before you pay.', boiler: true },
      { q: 'How big are the classes?', a: 'Five to ten learners, grouped by level, pace and aims rather than age or address. When no group at the right level meets at a convenient time, we suggest private lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'Neighbouring cities and the national pages',
    html: 'Nearby, <a class="cg-inline-link" href="/best-coding-class-in-coventry">Coventry</a> groups its bus stops with union-find and <a class="cg-inline-link" href="/best-coding-class-in-wolverhampton">Wolverhampton</a> builds a trie of their names, while <a class="cg-inline-link" href="/best-coding-class-in-london">London</a> works with its Datastore. Families new to English schooling can read the <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a>, and everything is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Milton Keynes and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/best-coding-class-in-coventry', label: 'Coventry' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-mkn .cg-hero-grid { align-items: start; gap: clamp(1.15rem, 3vw, 2.65rem); }
.cg-root.cg-mkn .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.07; }
.cg-root.cg-mkn .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-mkn .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mkn .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.01em; }
.cg-root.cg-mkn .cg-grid-3 { gap: clamp(1.05rem, 2.9vw, 2.25rem); }
.cg-root.cg-mkn .cg-table caption { letter-spacing: 0.016em; font-weight: 700; }
.cg-root.cg-mkn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mkn .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-mkn .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Milton Keynes, Census 2021 via Nomis: TS001 Milton Keynes local authority (E06000042) 287,060 usual residents, 284,994 in households, 2,066 in communal establishments; TS007A aged 5 to 9 20,264 (7.1 percent), 10 to 14 20,615 (7.2 percent), 35 to 39 23,020 (8.0 percent), 20 to 24 5.2 percent, against England 5.9, 6.0, 6.7 and 6.0 percent (band total 287,061, never summed on the page); TS068 59,908 schoolchildren and full-time students of 269,327 residents aged 5 and over, 22.2 percent, against 20.4 percent in England. Bletchley Park, E159 Colossus in Context Part 1: "in January 1944, the first Colossus computer was delivered to Bletchley Park. This machine and the nine that followed it"; built to assist breaking messages enciphered with the Lorenz machine, known at BP as Tunny; operated in the Newmanry. The National Museum of Computing, Rebuilding Colossus: information gathered in 1993 comprised eight wartime photographs taken of Colossus in 1945 and fragments of circuit diagrams; original mechanical drawings deliberately burnt in 1960; rebuild in the room in Block H where Colossus No 9 stood; the Duke of Kent formally opened the Bletchley Park Museums and inaugurated the Colossus Rebuild Project on 18 July 1994. Milton Keynes City Council, Visitor Travel Planning: over 300km of dedicated off-road walking and cycling pathways, known as the Redways.',
    localProject: 'More darts, sharper answer, at the square-root rate. NaPTAN via the DfT API, area 049, read 21 September 2026: 1,316 active BCT and BCS stops. Boundary: ONS Local Authority Districts December 2023 generalised clipped, E06000042, British National Grid, 308.67 square kilometres on that file by our calculation, one ring. Random points in the 20.2 by 25.3 km bounding box, seed 20260921, kept when inside (about 60 percent), covered when a stop lies within 400 m (grid lookup): n 100 0.370 plus or minus 0.048; n 1,000 0.411 plus or minus 0.016; n 10,000 0.3968 plus or minus 0.0049; n 100,000 0.3991 plus or minus 0.0015; 50 m grid 123,471 points inside, 0.3978. Area is not population, as the page states. Lesson family: Monte Carlo estimation and square-root error scaling; distinct from bootstrap, point-in-polygon (Brainport) and bin width.',
    requiredMentions: [
      '287,060',
      '284,994',
      '2,066',
      '20,264',
      '20,615',
      '23,020',
      '59,908',
      'Block H',
      '18 July 1994',
      '300km',
      'Newmanry',
      'Tunny'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Milton Keynes: 287,060 usual residents; 284,994 in households; 2,066 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000042&measures=20100' },
      { claim: 'Nomis, Census 2021 TS007A: Milton Keynes and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000042,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Milton Keynes 59,908 students of 269,327 aged 5 and over (22.2 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000042,E92000001' },
      { claim: 'Department for Transport, NaPTAN access nodes API, area 049: active stops and coordinates.', url: 'https://naptan.api.dft.gov.uk/v1/access-nodes?dataFormat=csv&atcoAreaCodes=049' },
      { claim: 'ONS Open Geography Portal, Local Authority Districts December 2023 boundaries (generalised clipped): Milton Keynes polygon.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2023_Boundaries_UK_BGC/FeatureServer/0' },
      { claim: 'Bletchley Park, Colossus in Context Part 1: January 1944 delivery, ten machines, Tunny, the Newmanry.', url: 'https://www.bletchleypark.org.uk/our-story/e159-colossus-in-context-part-1/' },
      { claim: 'The National Museum of Computing, Rebuilding Colossus: 1993 photographs, drawings burnt in 1960, Block H, 18 July 1994.', url: 'https://www.tnmoc.org/rebuilding-colossus' },
      { claim: 'Milton Keynes City Council, Visitor Travel Planning: over 300km of Redways.', url: 'https://www.milton-keynes.gov.uk/highways/visitor-travel-planning' }
    ],
    rejectedClaims: [
      'Open University facts: its facts page returned 403, so none are used.',
      'The official area of the borough: only our calculation on a generalised boundary is given, labelled as such.',
      'How many people live near a stop: area is not population, and the page says so.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the DfT, the ONS, the council, Bletchley Park or The National Museum of Computing.'
    ]
  }
};
