'use strict';
// South Australia (cg- state page, Australia cluster Phase 5; index for the SA city pages).
// Spine: taxicab (Manhattan) distance against straight-line distance on Adelaide's city grid. Data: the OSM API
// 0.6 map call for a rectangle around the city square mile (138.5935 to 138.6125 E, 34.9325 to 34.9160 S), read
// 7 October 2026 (ODbL). Measured by us on 7 October 2026 (local planar projection at 34.925 S): the street grid
// is turned 3.39 degrees from true east-west (length-weighted over 331 segments of 20 m or more on 16 named
// streets such as King William Street, Grenfell Street and Pirie Street; median 3.51 degrees). 126 cafe points
// mapped in the rectangle give 7,800 pairs at least 50 m apart. Along the rotated grid, the walking-by-blocks
// distance averages 1.2733 times the straight-line distance (4/pi = 1.2732, the expected value for random
// directions); maximum 1.4142 (square root of 2, a pure diagonal); mean extra distance 182.1 m, median 150.7 m.
// Ignoring the 3.39 degree turn changes the mean ratio only to 1.2744. The two cafes farthest apart are
// 2,153.4 m apart in a straight line and 3,043.5 m apart by the grid. Lesson family: taxicab geometry
// (Manhattan distance) on a real grid; screened free site-wide on 7 October 2026 ("taxicab" 0 hits).
// Place facts read raw 7 October 2026: ABS Census 2021 QuickStats South Australia (STE 4): 1,781,516 people,
// median age 41, 479,770 families, 806,982 private dwellings, 2.4 people per household, bachelor degree and above
// 335,213 (22.7 percent; 2016 18.5 percent; Australia 26.3). Greater Adelaide 1,387,290. SACE Board home page:
// students build 200 credits; Stage 1 and Stage 2; SACE Board Strategic Plan 2024 - 2027, Passport to Thrive.
// IANA tzdata 2026e: Australia/Adelaide rule AS, daylight saving from the first Sunday in October to the first
// Sunday in April. The SA Department for Education and sa.gov.au school term pages returned 403 and were not
// circumvented, so no SA term dates are quoted.

const PLACES = [
  ['Adelaide', 'ai-and-programming-classes-in-adelaide'], ['Mount Gambier', 'vibe-coding-and-ai-agents-classes-in-mount-gambier'],
  ['Whyalla', 'online-coding-and-python-classes-in-whyalla'], ['Murray Bridge', 'vibe-coding-and-ai-agents-classes-in-murray-bridge'],
  ['Port Lincoln', 'best-coding-classes-in-port-lincoln']
];
// Name each place; link only the ones whose Australian page has been built.
function linked(list) {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtPages('au').map(p => p.slug));
  return list.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'state', tag: 'SOUTH AUSTRALIA', label: 'South Australia', blurb: 'The SACE, half-hour clocks and a project walking Adelaide\'s square mile block by block.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-south-australia',
  code: 'sast',
  accent: '#804C60',
  accentRationale: 'South Australia: a muted shiraz rose picked by hand (HSV saturation 0.41, value 0.50), at least 10 RGB units from every accent in use and 5.5:1 against the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'South Australia',
    eyebrow: 'South Australia',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'South Australia',
  title: 'Coding and AI Classes in South Australia | Reception to SACE',
  description: 'Live online coding, Python, AI and maths lessons for South Australian learners, from Reception age to the SACE and adult life. The first lesson is free of charge.',
  ogDescription: 'Coding and AI classes for South Australia, with a project measuring how much farther you walk between Adelaide cafes when you have to follow the grid.',
  twitterDescription: 'South Australian coding and AI lessons, from Reception age to SACE and adult, live online, first lesson free.',
  ogImageCourse: 'data-structures-algorithms-masterclass-college',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for South Australian Learners',
    description: 'Level-matched online coding, Python, AI, data and mathematics for children, teenagers and adults across South Australia, with support for SACE computing and maths technique.'
  },

  h1: 'Coding and AI classes in South Australia',
  capsuleQ: 'Which coding and AI classes work best for a South Australian learner?',
  capsule: 'Ones planned around SACE subjects and South Australia\'s half-hour time zone, that turn local streets into real programming problems. South Australia counted 1,781,516 people at the 2021 Census. Our teachers work with ages 6 to 67 live online, from a first Scratch game to Python, algorithms and AI, privately or in a small group at one level, and the trial lesson is free.',
  lead: 'Adelaide\'s city centre is laid out as a grid of streets, and that grid decides how far you actually walk. Two cafes might be 500 metres apart as the crow flies, but on foot you have to go along one street and then down another. Mathematicians call the walking version taxicab distance. Our project takes every cafe mapped inside the square mile, measures both distances for all 7,800 pairs and finds that the grid adds, on average, 27.33 percent: astonishingly close to a figure that pure geometry predicts, 4 divided by pi. Learners discover why, and why the grid being turned three and a half degrees off north hardly changes the answer.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in South Australia.',

  picks: {
    eyebrow: 'Course picks for South Australia',
    h2: 'Four routes into coding for a South Australian learner',
    intro: 'Chosen by stage of life and by what the learner wants to make. Every route begins with a lesson that is free.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Reception age to Year 3', note: 'Block coding on a grid of streets, where a delivery bike can only turn at corners.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Years 3 to 6', note: 'Puzzles about routes, shortcuts and counting steps, the thinking behind every map program.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Years 7 to 12', note: 'Distances, sorting and graph problems in Python, written with tests and timed against each other.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Algorithms for people who build software, from distance metrics to the data structures that make searches fast.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'South Australia in the Census',
      h2: 'Nearly 1.8 million people and an older median than the nation',
      intro: 'Statewide totals from the 2021 QuickStats, with the national figure beside them where the Bureau provides one.',
      body: [
        { kind: 'table', caption: 'South Australia in numbers: 2021 QuickStats, ABS', head: ['Measure', 'South Australia', 'Australia'], rows: [
          ['People', '1,781,516', 'Not listed'],
          ['Median age', '41', '38'],
          ['Families', '479,770', 'Not listed'],
          ['Private dwellings', '806,982', 'Not listed'],
          ['Average people per household', '2.4', 'Not listed'],
          ['People aged 15 and over with a bachelor degree or higher', '335,213, or 22.7%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Three years older than average', p: 'South Australia\'s median age was 41 in 2021, three years above the Australian median of 38. Adult learners are a natural part of any SA class list.' },
          { h3: 'Degrees on the rise', p: 'In 2016, 18.5% of South Australians aged 15 and over held a bachelor degree or higher. In 2021 it was 22.7%.' },
          { h3: 'Adelaide and the rest', p: 'Greater Adelaide recorded 1,387,290 residents in 2021, so most of the state lives within reach of one city grid.' }
        ] },
        { kind: 'p', text: 'All of these are totals published by the Bureau. Each Census cell is adjusted on its own to protect privacy, so we never treat the sum of a table\'s rows as a total.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'Schooling in SA',
      h2: 'The SACE and the subjects we help with',
      intro: 'From the SACE Board\'s own website and our dedicated SACE pages. We describe what is published and give no enrolment or admissions advice.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '200 credits', p: 'The SACE Board explains that students achieve the South Australian Certificate of Education by building 200 credits through subjects, VET and other recognised learning, across Stage 1 and Stage 2.' },
          { h3: 'Digital Technologies', p: 'Our <a class="cg-inline-link" href="/sace-digital-technologies-help">SACE Digital Technologies page</a> covers the Stage 2 subject, its assessment types and how we teach the technique without touching assessed work.' },
          { h3: 'Mathematics', p: 'Senior maths students can read our pages on <a class="cg-inline-link" href="/sace-mathematical-methods-tutoring">SACE Mathematical Methods</a> and <a class="cg-inline-link" href="/sace-specialist-mathematics-tutoring">SACE Specialist Mathematics</a>.' }
        ] },
        { kind: 'spec', title: 'School terms in SA', p: 'The SA Department for Education\'s term date pages refused automated access when we checked on 7 October 2026, and we do not work around a block. Families simply tell the teacher their school\'s dates during the free lesson.' },
        { kind: 'p', text: 'The SACE Board publishes a strategic plan for 2024 to 2027, which it calls Passport to Thrive. For entry to Ignite programs, see our <a class="cg-inline-link" href="/sa-ignite-entry-maths-practice">SA Ignite entry maths page</a>; as everywhere, we teach the maths and offer no admissions advice.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How much farther is it when you have to follow Adelaide\'s grid?',
      intro: 'Every cafe OpenStreetMap shows inside a rectangle around the city square mile, every pair measured two ways. Our calculation, 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Grid distance against straight-line distance for 7,800 cafe pairs (our calculation)', head: ['Measure', 'Result'], rows: [
          ['Street grid turned from true east-west', '3.39 degrees'],
          ['Cafes mapped in the rectangle', '126'],
          ['Pairs at least 50 m apart', '7,800'],
          ['Average grid distance divided by straight distance', '1.2733'],
          ['4 divided by pi, for comparison', '1.2732'],
          ['Largest ratio (a pure diagonal)', '1.4142'],
          ['Average extra walking per pair', '182.1 m (median 150.7 m)'],
          ['Farthest pair: straight line, then grid', '2,153.4 m, then 3,043.5 m']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Measure the grid\'s angle', p: 'Learners take 331 street segments from King William Street, Grenfell Street, Pirie Street and others, find each one\'s direction and average them, weighted by length. The grid is turned 3.39 degrees from true east-west.' },
          { h3: '2. Rotate, then add', p: 'Turning every point by that angle lines the coordinates up with the streets. Taxicab distance is then just the east-west gap plus the north-south gap, with no square roots.' },
          { h3: '3. Compare with geometry', p: 'For a direction chosen at random, the average of the walking distance divided by the straight one is 4 divided by pi. Adelaide\'s cafes give 1.2733 against 1.2732: real data matching a formula to four places.' }
        ] },
        { kind: 'callout', h3: 'The rotation that barely mattered', p: 'Skip the rotation and treat the grid as if it ran exactly north-south, and the average ratio moves only from 1.2733 to 1.2744. Learners are often surprised: a turn of a few degrees changes individual pairs noticeably but averages out across thousands of them. It is a good lesson in when a correction is worth its complexity, and how to measure that rather than guess.' },
        { kind: 'p', text: 'All figures here are our calculations from OpenStreetMap, which volunteers maintain and which will not show every cafe. Taxicab distance follows the main grid only; real walks use laneways, parks and diagonal crossings, so they can be shorter.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Distance in code',
      h2: 'Five habits for any program that measures how far',
      intro: 'Practised on a city grid, then used on warehouses, game boards, robots and any problem where you cannot cut corners.',
      body: [
        { kind: 'table', caption: 'How to pick the right distance', head: ['Habit', 'In practice', 'What it prevents'], rows: [
          ['Ask how things move', 'Grid streets, open ground or a network?', 'Using a straight line where nobody can travel'],
          ['Align with the grid first', 'Rotate coordinates to match the streets', 'Errors that grow with the grid\'s angle'],
          ['Know the expected answer', 'Compare a large sample with 4 divided by pi', 'Bugs that hide inside plausible numbers'],
          ['Drop tiny pairs', 'Exclude points closer than a set gap', 'Ratios dominated by mapping noise'],
          ['Measure whether a fix matters', 'Run with and without a correction', 'Complexity that buys nothing']
        ] },
        { kind: 'p', text: 'The third habit is the most powerful one we teach. When theory predicts 1.2732 and your program prints 1.2733, you can trust it far more than if you had nothing to compare with. When it prints 1.6, you know at once that something is broken.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A Scratch city of square blocks where a sprite counts its steps between two shops and compares routes.' },
          { h3: 'Teenagers', p: 'The Adelaide cafes in Python: measuring the grid angle, rotating, and testing the result against 4 divided by pi.' },
          { h3: 'Adults', p: 'A script that chooses the right distance for a delivery area and reports how much the choice changes the plan.' }
        ] }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Around South Australia',
      h2: 'South Australian places with a page',
      intro: 'Each city page is written separately and only when enough verified facts exist to describe that place accurately.',
      body: [
        { kind: 'p', text: 'South Australian places covered or in preparation: ' + linked(PLACES) + '. Names with links already have a page and their own data project; the rest are on our list and named so families know.' },
        { kind: 'spec', title: 'Half-hour clocks', p: 'South Australia runs half an hour behind the eastern states. The IANA time zone database gives Adelaide daylight saving from the first Sunday in October to the first Sunday in April, so our teachers in India are four hours behind SA in winter and five hours behind in summer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From steps on a grid to algorithms that measure the world',
    intro: 'The bands below are only a guide; the free lesson decides the real starting point.',
    cols: [
      { band: 'Reception age to Year 2', h3: 'Steps and turns', p: 'Moving a sprite one block at a time and counting how many steps a route takes.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 3 to 6', h3: 'Shortest routes', p: 'Comparing routes on grids and maps, and discovering that the shortest one is not always obvious.', courses: ['problem-solving-and-computational-thinking-for-kids', 'maths-through-coding'] },
      { band: 'Years 7 to 12', h3: 'Distance functions', p: 'Writing and testing several ways to measure distance, and choosing between them with evidence.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Algorithms at work', p: 'Routing, matching and search problems where the choice of distance changes real decisions.', courses: ['data-structures-algorithms-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool will compute a distance for you. Why should a South Australian student know which one?',
    intro: 'Because the formula that is easiest to write is often the one that describes a journey nobody can make.',
    p1: 'Ask an assistant how far apart two Adelaide addresses are and it will most likely give the straight-line figure, calculated correctly and presented neatly. But nobody walks through buildings, and on a grid the true walking distance is usually a quarter longer. Ask it to write code for delivery times and the same assumption slips into the program without a comment to warn the reader.',
    p2: 'A student who has measured the Adelaide grid knows what to ask of any generated answer involving distance: how does the thing actually move, what does theory predict, and does the output match? Those questions carry over to logistics, robotics, games and any model that turns positions into decisions.',
    closer: 'That is the case for a South Australian student learning to code in 2026: not to race an AI tool, but to know when its distances describe the real world.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the Barossa to the Eyre Peninsula, one lesson',
    intro: 'Many South Australians live a long way from a specialist class. A live online lesson brings it home.',
    cells: [
      { h3: 'Half-hour time zones handled', p: 'South Australia\'s clocks sit half an hour off the eastern states. Every lesson time is written in SA time so nobody has to convert.' },
      { h3: 'SACE vocabulary', p: 'Teachers talk about Stage 1, Stage 2 and SACE subjects the way South Australian schools do. All lessons are in English.' },
      { h3: 'A proper trial', p: 'The first lesson is a full one with something finished at the end, then a suggestion for level, course and weekly time. We never ask for card details at this stage.' },
      { h3: 'Matched groups', p: 'Groups of fifteen to twenty learners are formed by standard, mixing South Australians with learners from other states and countries so most levels have a sensible time.' },
      { h3: 'Two lessons a week', p: 'About eight a month at a fixed time, paused for school holidays and exam periods by arrangement with the teacher.' },
      { h3: 'Teachers in India', p: 'Our teachers keep India time, which runs four or five hours behind SA depending on the season, so SA afternoons are their working day.' }
    ],
    spec: { title: 'Adults welcome', p: 'With a median age of 41, South Australia has plenty of adults coming back to learn. Adult learners join adult groups, or learn one to one if they prefer.' }
  },

  fees: {
    h2: 'What lessons cost in South Australia',
    intro: 'One set of prices across the whole state.',
    first: 'A full first lesson with no charge, finishing with a recommended level, course and weekly time.',
    group: 'A month of lessons, usually eight, in a group of fifteen to twenty learners at a similar level.',
    private: 'The same monthly pattern of about eight lessons, with one teacher and one learner.',
    closer: 'Every family outside India pays in US dollars at one rate, so a family in Port Augusta pays the same as one in Glenelg. No invoice goes out until the trial has chosen a course and a time; how holidays, missed lessons and changes between group and private teaching are handled is spelled out on the pricing page.'
  },

  reviewsH2: 'Google reviews from families, shown as written',

  book: {
    h2: 'Tell us the learner\'s age and year level',
    intro: 'The first task fits the learner: block coding on a street grid for a young child, a first Python route puzzle for the middle years, or the Adelaide taxicab problem for a senior student.',
    success: 'Thank you. Our team will contact you shortly about a class in South Australia.'
  },

  faq: {
    h2: 'South Australian coding class questions',
    intro: 'The things South Australian families usually want to know first.',
    items: [
      { q: 'What was South Australia\'s population at the 2021 Census?', a: 'The 2021 Census counted 1,781,516 people in South Australia, with a median age of 41 against 38 for the whole country.' },
      { q: 'What is taxicab distance?', a: 'Taxicab distance, also called Manhattan distance, is the distance between two points when you can only travel along a grid: the horizontal gap plus the vertical gap. It is always at least as long as the straight-line distance and at most about 1.41 times it.' },
      { q: 'What is the Adelaide grid project?', a: 'Learners measure every pair of cafes mapped in Adelaide\'s square mile both as the crow flies and along the street grid. Across 7,800 pairs the grid distance averages 1.2733 times the straight one, almost exactly 4 divided by pi.' },
      { q: 'What is the SACE?', a: 'The SACE is the South Australian Certificate of Education. The SACE Board explains that students achieve it by building 200 credits across Stage 1 and Stage 2 through subjects, VET and other recognised learning.' },
      { q: 'Do you help with SACE Digital Technologies and maths?', a: 'Yes, by teaching technique and understanding; we have separate pages for Digital Technologies, Mathematical Methods and Specialist Mathematics. Assessed work stays the student\'s own, and we never write it.' },
      { q: 'What time are lessons for South Australian learners?', a: 'Afternoons, evenings or weekends, settled during the trial and always shown in SA time. India is four hours behind South Australia in winter and five hours behind during daylight saving.' },
      { q: 'Why don\'t you list SA school term dates?', a: 'The Department for Education\'s term date pages refused our automated check, and we only publish dates we have read at the source. Tell the teacher your school\'s dates and lessons are planned around them.' },
      { q: 'Do you have a centre in South Australia?', a: 'No, and none is claimed. All teaching is live online, with no premises in Australia; a learner needs a laptop or desktop, sound and a dependable connection, and the number we show is in India.', boiler: true },
      { q: 'How much do coding lessons cost in SA?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Between five and ten learners, placed by level, pace and goals rather than age or suburb. If no group fits at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for South Australian learners',
    html: 'Senior students can go straight to <a class="cg-inline-link" href="/sace-digital-technologies-help">SACE Digital Technologies help</a> or <a class="cg-inline-link" href="/sace-specialist-mathematics-tutoring">SACE Specialist Mathematics</a>. Families looking at Ignite programs can read <a class="cg-inline-link" href="/sa-ignite-entry-maths-practice">SA Ignite entry maths</a>, and keen competitors can use the <a class="cg-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">competitions calendar</a>. Our other Australian pages are listed on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'South Australia and Australia',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/sace-mathematical-methods-tutoring', label: 'SACE Methods' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-sast .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.4rem); }
.cg-root.cg-sast .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.09; }
.cg-root.cg-sast .cg-capsule { border-left: 5px dotted var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-sast .cg-eyebrow { letter-spacing: 0.24em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-sast .cg-section-head h2 { max-width: 35ch; letter-spacing: -0.008em; }
.cg-root.cg-sast .cg-grid-3 { gap: clamp(1.15rem, 2.5vw, 2.05rem); }
.cg-root.cg-sast .cg-table caption { font-weight: 600; letter-spacing: 0.03em; }
.cg-root.cg-sast .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sast .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-sast .cg-spec { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'South Australia, ABS Census 2021 QuickStats, state 4 (read 7 October 2026): 1,781,516 people; median age 41 (Australia 38); 479,770 families; 806,982 private dwellings; average 2.4 people per household; bachelor degree level and above 335,213 (22.7 percent; SA 2016 256,514, 18.5 percent; Australia 2021 26.3 percent). Greater Adelaide GCCSA 4GADE: 1,387,290 people. SACE Board home page (sace.sa.edu.au): Achieving your SACE, How to build 200 credits, a short video on how the SACE works and how students can achieve the necessary requirements through subjects, VET and other recognised learning; Stage 1 and Stage 2 sections; the SACE Board Strategic Plan 2024 - 2027, Passport to Thrive. IANA tzdata 2026e: Zone Australia/Adelaide UTC+9:30 rule AS; Rule AS 2008 to max: daylight saving from the first Sunday in October to the first Sunday in April. The SA Department for Education (education.sa.gov.au) and sa.gov.au school terms pages returned HTTP 403 on 7 October 2026 and were not circumvented. SACE subject details are on the dedicated SACE pages.',
    localProject: 'Taxicab geometry on Adelaide\'s city grid (calculated 7 October 2026). OSM API 0.6 map call, bbox 138.5935,-34.9325,138.6125,-34.9160 (ODbL). Grid angle: 331 segments of 20 m or more on 16 named streets (King William, Grenfell, Pirie, Flinders, Wakefield, Rundle Mall, Currie, Waymouth, Franklin, Grote, Pulteney, Frome, Hindley, Rundle, Angas, Gouger), direction folded to plus or minus 45 degrees, length-weighted mean 3.388 degrees, median 3.509. 126 amenity=cafe nodes; 7,800 pairs at least 50 m apart. Coordinates rotated by the grid angle; taxicab = |dx| + |dy|. Mean taxicab/straight ratio 1.2733 (4/pi = 1.2732), maximum 1.4142, unrotated mean 1.2744; mean extra 182.1 m, median 150.7 m; farthest pair 2,153.4 m straight, 3,043.5 m taxicab. Lesson family: taxicab (Manhattan) distance versus Euclidean distance, expected ratio 4/pi; distinct from shortest-path routing and street-network circuity pages.',
    requiredMentions: [
      '1,781,516',
      '479,770',
      '806,982',
      '335,213',
      '200 credits',
      'Passport to Thrive',
      '3.39 degrees',
      '1.2733',
      '3,043.5 m'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, South Australia: people, median age, families, private dwellings, household size, highest educational attainment.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/4' },
      { claim: 'ABS Census 2021 QuickStats, Greater Adelaide: people.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/4GADE' },
      { claim: 'SACE Board home page: 200 credits, Stage 1 and Stage 2, the 2024 to 2027 strategic plan.', url: 'https://www.sace.sa.edu.au/' },
      { claim: 'OpenStreetMap data for Adelaide city via the OSM API 0.6 map call (ODbL).', url: 'https://www.openstreetmap.org/#map=16/-34.9243/138.6030' },
      { claim: 'IANA time zone database 2026e, australasia file: Australia/Adelaide and rule AS.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'South Australian school term dates: the Department for Education and sa.gov.au pages returned 403 and were not circumvented.',
      'SACE results, ATAR outcomes, school rankings and Ignite offers: excluded by the cluster rules.',
      'Who planned the grid and why it sits at its angle: not verified at a primary source, so the page reports only our measurement of mapped streets.',
      'Walking times between cafes: not measured; taxicab distance ignores laneways and diagonal paths.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the SACE Board, the SA Department for Education or the ABS.'
    ]
  }
};
