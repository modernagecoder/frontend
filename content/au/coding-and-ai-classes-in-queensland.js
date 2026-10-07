'use strict';
// Queensland (cg- state page, Australia cluster Phase 5; index for the Queensland city pages).
// Spine: linear referencing (chainage) along the Gold Coast rail line. Data: OpenStreetMap relation 15667051,
// "T5 Gold Coast line: Roma Street to Varsity Lakes", read from the OSM API on 7 October 2026 (ODbL): 14 stops,
// 14 platforms, track geometry 89.103 km over 1,434 vertices. Measured by us on 7 October 2026 (local planar
// projection at 27.75 S; each platform projected onto the nearest track segment): chainage from Roma Street
// South Bank 2.684 km, Boggo Road 4.239, Altandi 17.873, Loganlea 31.249, Beenleigh 40.205, Ormeau 52.537,
// Coomera 59.441, the platform OSM labels Hope Island 62.929, Helensvale 68.229, Nerang 76.035, Robina 85.264,
// Varsity Lakes 89.013. Straight-line distance from Roma Street to Varsity Lakes 79.555 km (track 1.119 times
// longer); the ratio is 1.429 at South Bank and falls towards 1.12 on the Gold Coast. Platform centres sit 0 to
// 6.4 m from the track line; snapping to the nearest stored vertex instead of projecting moves chainage by up to
// 73.9 m (Coomera) and 64.6 m (Hope Island). Lesson family: linear referencing / chainage, projecting a point
// onto a polyline; screened free site-wide on 7 October 2026 ("chainage" 0 hits, "linear referencing" 0 hits).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats Queensland (STE 3): 5,156,138 people,
// median age 38, 1,366,657 families, 2,190,424 private dwellings, 2.5 people per household; bachelor degree level
// and above 918,466 (21.9 percent; 2016 18.3 percent; Australia 26.3). Greater Brisbane 2,526,238. Queensland
// Department of Education term dates page: 2026 Term 1 Tuesday 27 January to Thursday 2 April (10 weeks), Term 2
// Monday 20 April to Friday 26 June, Term 3 Monday 13 July to Friday 18 September, Term 4 Tuesday 6 October to
// Friday 11 December; Term 4 holidays Saturday 12 December to Tuesday 26 January 2027, 46 days. IANA tzdata
// 2026e: Australia/Brisbane rule AQ, last daylight saving ended March 1992. QCAA (qcaa.qld.edu.au) returned a
// Cloudflare 403 to automated reads on 7 October 2026 and was not circumvented: the QCE is not described here.

const PLACES = [
  ['Brisbane', 'best-coding-classes-in-brisbane'], ['the Gold Coast', 'best-coding-classes-in-gold-coast'],
  ['the Sunshine Coast', 'ai-and-programming-classes-in-sunshine-coast'], ['Townsville', 'ai-and-programming-classes-in-townsville'],
  ['Cairns', 'vibe-coding-and-ai-agents-classes-in-cairns'], ['Toowoomba', 'best-coding-classes-in-toowoomba'],
  ['Mackay', 'online-coding-and-python-classes-in-mackay'], ['Rockhampton', 'ai-and-programming-classes-in-rockhampton'],
  ['Bundaberg', 'online-coding-and-python-classes-in-bundaberg'], ['Hervey Bay', 'vibe-coding-and-ai-agents-classes-in-hervey-bay'],
  ['Ipswich', 'vibe-coding-and-ai-agents-classes-in-ipswich-qld'], ['Logan', 'best-coding-classes-in-logan']
];
// Name each place; link only the ones whose Australian page has been built.
function linked(list) {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtPages('au').map(p => p.slug));
  return list.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'state', tag: 'QUEENSLAND', label: 'Queensland', blurb: 'Queensland terms, one time zone all year, and a project measuring the Gold Coast line kilometre by kilometre.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-queensland',
  code: 'qlst',
  accent: '#843014',
  accentRationale: 'Queensland: a red-earth rust chosen by hand (HSV saturation 0.85, value 0.52), at least 11 RGB units from every accent in use and 7.1:1 against the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Queensland',
    eyebrow: 'Queensland, Australia',
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
  routeLabel: 'Queensland, Australia',
  title: 'Coding and AI Classes in Queensland | Prep to Year 12, Online',
  description: 'Live online coding, Python, AI and maths lessons for Queensland learners from Prep to Year 12 and adult, set around Queensland school terms. The first class is free.',
  ogDescription: 'Coding and AI classes for Queensland, with a project that measures how far along the Gold Coast rail line each station really sits.',
  twitterDescription: 'Queensland coding and AI classes, Prep to Year 12 and adult, live online, first class free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Queensland Learners',
    description: 'Level-matched online coding, Python, AI, data and mathematics for children, teenagers and adults across Queensland, scheduled around the Queensland school terms.'
  },

  h1: 'Coding and AI classes in Queensland',
  capsuleQ: 'How do I find the best coding and AI classes for a Queensland learner?',
  capsule: 'Look for teaching that fits Queensland\'s terms and its single time zone, and that builds real programs from real local data. The 2021 Census counted 5,156,138 Queenslanders. We teach ages 6 to 67 live online, from early Scratch through Python, mapping data and AI, either one to one or in a small group at the same level, and the first class costs nothing.',
  lead: 'A train from Roma Street to Varsity Lakes covers about 89 kilometres of track, yet the two stations are only about 80 kilometres apart in a straight line. Where does the extra distance go, and how far along the line is each stop? Railway engineers answer with chainage: a distance measured along the track itself, not across the map. Our project rebuilds it from open map data. Learners join hundreds of short track pieces into one line, drop every platform onto it and measure. Along the way they learn why the obvious shortcut, snapping each station to the closest stored point, can be wrong by more than 70 metres.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Queensland.',

  picks: {
    eyebrow: 'Course picks for Queensland',
    h2: 'Where a Queensland learner might begin',
    intro: 'Matched to age and ambition. Each course starts with a free class, with no card needed.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Prep to Year 3', note: 'Block coding with trains, tracks and timetables, where a sprite has to stop at every station in order.' },
      { course: 'python-ai-kids-masterclass', band: 'Years 4 to 7', note: 'First Python with coordinates and distances, measuring a route on a map and comparing it with a ruler line.' },
      { course: 'python-complete-masterclass-teens', band: 'Years 8 to 12', note: 'Python with real geometry: joining line pieces, projecting points and testing a result against a second method.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Working with open spatial data, the way councils, transport planners and engineers handle it every day.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Queensland in the Census',
      h2: 'Over five million people across a state that keeps one clock',
      intro: 'Statewide figures from the 2021 QuickStats, beside the national ones where the Bureau publishes them.',
      body: [
        { kind: 'table', caption: 'Queensland in numbers: 2021 QuickStats, ABS', head: ['Measure', 'Queensland', 'Australia'], rows: [
          ['People', '5,156,138', 'Not compared'],
          ['Median age', '38', '38'],
          ['Families', '1,366,657', 'Not compared'],
          ['Private dwellings', '2,190,424', 'Not compared'],
          ['Average people per household', '2.5', 'Not compared'],
          ['People aged 15 and over with a bachelor degree or higher', '918,466, or 21.9%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Graduates on the rise', p: 'In 2016, 18.3% of Queenslanders aged 15 and over held a bachelor degree or higher. Five years later the share had grown to 21.9%.' },
          { h3: 'Brisbane at the centre', p: 'Greater Brisbane was home to 2,526,238 people in 2021, roughly half the state, with the rest spread along a very long coast and inland.' },
          { h3: 'A state-sized commute', p: 'Distances in Queensland are measured in hours, which is part of why live online lessons suit families from Cairns to Coolangatta equally.' }
        ] },
        { kind: 'p', text: 'All of these are totals the Bureau publishes. Because Census cells are adjusted to protect privacy, the parts of a table are never added together on this page to create a total of our own.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'The Queensland year',
      h2: 'Four ten-week terms and a long summer break',
      intro: 'From the Queensland Department of Education\'s term dates page. Queensland publishes 2027 dates on a separate future dates page, so the current year is shown here.',
      body: [
        { kind: 'table', caption: '2026 Queensland state school terms, as published by the Department of Education', head: ['Term', 'Dates', 'Length'], rows: [
          ['Term 1', 'Tuesday 27 January to Thursday 2 April', '10 weeks'],
          ['Term 2', 'Monday 20 April to Friday 26 June', '10 weeks'],
          ['Term 3', 'Monday 13 July to Friday 18 September', '10 weeks'],
          ['Term 4', 'Tuesday 6 October to Friday 11 December', '10 weeks']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The summer holidays', p: 'After Term 4 the department lists a break from Saturday 12 December 2026 to Tuesday 26 January 2027, which it counts as 46 days.' },
          { h3: 'Student-free days', p: 'The department also publishes staff professional development days, two at the start of Term 1 and two before Term 2 in 2026, when students are not at school.' },
          { h3: 'Senior years', p: 'Queensland students finish school with the QCE. The authority that sets it blocks automated reading of its website, so we do not describe its subjects here rather than guess at them.' }
        ] },
        { kind: 'spec', title: 'Selective academies', p: 'Queensland\'s academies set their own entry tests. Our <a class="cg-inline-link" href="/queensland-academies-entry-maths-practice">Queensland academies entry maths page</a> explains the published format; as everywhere, we give no admissions advice.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How far along the Gold Coast line is each station?',
      intro: 'OpenStreetMap\'s route for the line from Roma Street to Varsity Lakes, every platform projected onto the track. Our measurements, 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Chainage along the track against straight-line distance from Roma Street (our calculation)', head: ['Station', 'Along the track (km)', 'Straight line (km)', 'Track per straight km'], rows: [
          ['South Bank', '2.684', '1.878', '1.429'],
          ['Boggo Road', '4.239', '3.287', '1.290'],
          ['Altandi', '17.873', '13.792', '1.296'],
          ['Loganlea', '31.249', '25.634', '1.219'],
          ['Beenleigh', '40.205', '33.409', '1.203'],
          ['Coomera', '59.441', '52.033', '1.142'],
          ['Helensvale', '68.229', '60.104', '1.135'],
          ['Robina', '85.264', '76.032', '1.121'],
          ['Varsity Lakes', '89.013', '79.555', '1.119']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. One line from many pieces', p: 'The route arrives as more than two hundred separate track pieces. Learners join them end to end into a single line of 1,434 points measuring 89.1 km, and check that no piece was reversed or skipped.' },
          { h3: '2. Drop each platform onto it', p: 'A platform sits beside the track, not on it. For every short segment the code finds the closest point, then keeps the closest segment overall. Platform centres land between 0 and 6.4 m from the line.' },
          { h3: '3. Read the distance', p: 'The distance along the line to that dropped point is the chainage. Near Brisbane the track bends with the river and the ratio to the straight line is about 1.4; by the Gold Coast it settles near 1.12.' }
        ] },
        { kind: 'callout', h3: 'The shortcut that drifts', p: 'Snapping each platform to the nearest stored point on the line, instead of projecting onto a segment, looks almost the same and takes one line of code. On this route it moves Coomera by 73.9 m and the platform OpenStreetMap labels Hope Island by 64.6 m, because stored points are sparse on straight stretches. Learners measure both methods and see exactly where the shortcut fails.' },
        { kind: 'p', text: 'Every figure in this section is our calculation from OpenStreetMap data, which volunteers maintain and which can be incomplete. Track geometry also differs from official railway chainage, which starts at its own datum; our zero is the Roma Street platform.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Geometry in code',
      h2: 'Five habits for any program that measures along a route',
      intro: 'Practised on a railway, then used on hiking tracks, delivery runs, pipelines and any data recorded "so many kilometres along".',
      body: [
        { kind: 'table', caption: 'How to measure along a line without fooling yourself', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Check the joins', 'Confirm each piece starts where the last one ended', 'A line that doubles back on itself'],
          ['Project, do not snap', 'Find the closest point on each segment, not the closest vertex', 'Errors of tens of metres on straight stretches'],
          ['Use a sensible projection', 'Convert degrees to metres with a local scale', 'Distances stretched or squeezed by latitude'],
          ['Report the offset too', 'Store how far each point sat from the line', 'Silently attaching a point to the wrong track'],
          ['Say where zero is', 'Name the starting point of every chainage', 'Two reports that disagree by a fixed amount']
        ] },
        { kind: 'p', text: 'The second habit matters most. A line stored as points is only accurate between them if you treat the gaps as straight segments, and the closest vertex can be a long way from the closest point. Once learners have seen 73.9 m appear from that one shortcut, they test every geometric function against a second method.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A Scratch train that stops at stations along a drawn track and counts how far it has travelled.' },
          { h3: 'Teenagers', p: 'The Gold Coast line in Python: joining pieces, projecting platforms and comparing projection with snapping.' },
          { h3: 'Adults', p: 'A reusable script that takes any route and list of points and returns chainage, offset and a warning for points far from the line.' }
        ] }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Up and down the state',
      h2: 'Queensland places with pages of their own',
      intro: 'City pages are added one by one, only where enough checked local facts exist to write something true about that place.',
      body: [
        { kind: 'p', text: 'Queensland places covered or on our list: ' + linked(PLACES) + '. Linked names already have their own page and local project; unlinked ones are in preparation and listed so families know they are planned.' },
        { kind: 'spec', title: 'One clock all year', p: 'Queensland does not use daylight saving. The IANA time zone database records the state\'s last summer time ending in March 1992, so Queensland stays four and a half hours ahead of India all year, while New South Wales, next door, moves an hour further ahead each summer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a toy train to measuring a real railway',
    intro: 'Year levels only guide the start. The free class shows where a learner really belongs.',
    cols: [
      { band: 'Prep to Year 2', h3: 'Moving along a path', p: 'Sprites that follow a route, stop and count steps, the earliest idea of distance along a line.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 3 to 6', h3: 'Maps and measuring', p: 'Coordinates, simple distances and comparing a winding route with a straight one.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 7 to 12', h3: 'Geometry that holds up', p: 'Segments, projections and test cases built to catch the shortcut that almost works.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Spatial data at work', p: 'Routes, assets and field records handled with stated methods and checked offsets.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool will happily write a distance function. Why should a Queensland student test it?',
    intro: 'Because a function can return believable kilometres and still measure the wrong thing.',
    p1: 'Ask an assistant how far Helensvale is from Roma Street and you may get the straight-line figure, the timetable figure or a guess, with no hint which. Ask it to write code that places stations on a route and it may snap each one to the nearest stored point, because that is shorter to write. The output looks tidy. The error only appears when someone compares it with a careful projection and finds tens of metres missing.',
    p2: 'A student who has measured the Gold Coast line both ways knows what to ask of any generated answer involving distance: along what, from where, and by which method? Those questions apply to maps, sensors, logistics and every model that turns positions into numbers, and they separate someone who uses AI output from someone who can vouch for it.',
    closer: 'That is why a Queensland student should still learn to code in 2026: not to beat an AI tool at typing, but to know when its kilometres are the right ones.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Cairns, Toowoomba or Coolangatta, the same lesson',
    intro: 'Queensland is too big for one physical classroom to serve. A live video lesson reaches every corner of it at once.',
    cells: [
      { h3: 'No clock changes to track', p: 'With no daylight saving in Queensland, a lesson booked for 4pm stays at 4pm all year, and our side of the timetable never moves either.' },
      { h3: 'Queensland school words', p: 'Teachers use Prep, Year 10 and Queensland term language, so lessons line up with what a learner hears at school. Every class is in English.' },
      { h3: 'Try a full lesson', p: 'The free class is a real lesson with a finished piece of work, then a recommendation for level, course and weekly time. No payment details are asked for.' },
      { h3: 'Groups at one level', p: 'A group has five to ten learners at a similar standard, from Queensland, other states and abroad, which keeps sensible times open for most levels.' },
      { h3: 'Twice a week', p: 'About eight lessons a month at a fixed hour, with school holidays and exam weeks paused by arrangement.' },
      { h3: 'India time, every week', p: 'Our teachers keep India time, four and a half hours behind Queensland, so a Queensland afternoon lesson sits in their working midday.' }
    ],
    spec: { title: 'Holidays are long here', p: 'The summer break after Term 4 runs to 46 days. Many families use part of it for a short project course, and the teacher can plan one around the dates the department publishes.' }
  },

  fees: {
    h2: 'What classes cost in Queensland',
    intro: 'The same simple pricing from Cape York to the border.',
    first: 'A full first lesson free of charge, ending with a suggested level, course and weekly time.',
    group: 'A month of teaching, generally eight lessons, with five to ten learners at a similar level.',
    private: 'The same monthly pattern of about eight lessons, one teacher with one learner.',
    closer: 'Families outside India pay in US dollars at one rate, so Mount Isa and Maroochydore receive the same invoice. Billing starts only once the trial has fixed a course and a weekly time; holiday pauses, missed lessons and switching between group and private teaching are set out on the pricing page.'
  },

  reviewsH2: 'Google reviews from families we teach, unedited',

  book: {
    h2: 'Which year level is the learner in?',
    intro: 'The first task fits the learner: a block-coding train for a young child, a first Python map measurement for the middle years, or the chainage problem for a senior student.',
    success: 'Thank you. The team will be in touch soon about a class in Queensland.'
  },

  faq: {
    h2: 'Queensland coding class questions',
    intro: 'What Queensland families ask us first.',
    items: [
      { q: 'How many people live in Queensland?', a: 'The 2021 Census counted 5,156,138 people in Queensland, with a median age of 38, and 2,526,238 of them in Greater Brisbane.' },
      { q: 'What is chainage?', a: 'Chainage is a distance measured along a route such as a railway, road or pipeline from a fixed starting point, rather than straight across the map. Engineers use it to say exactly where something sits on a line.' },
      { q: 'What is the Gold Coast line project?', a: 'Learners rebuild the line from Roma Street to Varsity Lakes from OpenStreetMap, project each platform onto the track and measure its chainage. Varsity Lakes comes out at 89.013 km along the track against 79.555 km in a straight line.' },
      { q: 'Does Queensland have daylight saving?', a: 'No. The IANA time zone database records Queensland\'s last daylight saving ending in March 1992, so the state stays on the same time all year, four and a half hours ahead of India.' },
      { q: 'When do Queensland school terms run?', a: 'In 2026 Term 1 ran from Tuesday 27 January to Thursday 2 April, Term 2 from Monday 20 April to Friday 26 June, Term 3 from Monday 13 July to Friday 18 September and Term 4 from Tuesday 6 October to Friday 11 December, each 10 weeks.' },
      { q: 'Do you help with the QCE?', a: 'We teach the programming and maths skills senior students need. The authority that runs the QCE blocks automated reading of its site, so we do not describe its subjects here; tell us the subject in the free lesson and the teacher will plan around it. Assessed work is always the student\'s own.' },
      { q: 'What time are lessons for Queensland learners?', a: 'Afternoons, evenings or weekends, agreed during the trial and written in Queensland time. Because neither Queensland nor India changes its clocks, the time never shifts during the year.' },
      { q: 'Is there a Modern Age Coders centre in Queensland?', a: 'No, and none is claimed. All lessons happen live online, with no premises in Australia. A learner needs a laptop or desktop, working sound and a reliable connection; the contact number on this page is Indian.', boiler: true },
      { q: 'What do coding classes cost in Queensland?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched by level, pace and goals rather than age or suburb. If no group meets at a workable time, the learner is offered one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Queensland and Australian learners',
    html: 'Younger learners who love building games can start with <a class="cg-inline-link" href="/game-development-for-kids-australia">game development for kids</a>, and families thinking about selective academies can read <a class="cg-inline-link" href="/queensland-academies-entry-maths-practice">Queensland academies entry maths</a>. For NAPLAN numeracy, see <a class="cg-inline-link" href="/naplan-numeracy-practice-online">NAPLAN numeracy practice</a>. The national overview is on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Queensland and Australia',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/queensland-academies-entry-maths-practice', label: 'Qld academies' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-qlst .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.2vw, 2.7rem); }
.cg-root.cg-qlst .cg-hero h1 { font-weight: 800; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-qlst .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-qlst .cg-eyebrow { letter-spacing: 0.22em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-qlst .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.012em; }
.cg-root.cg-qlst .cg-grid-3 { gap: clamp(1.2rem, 2.8vw, 2.2rem); }
.cg-root.cg-qlst .cg-table caption { font-weight: 600; letter-spacing: 0.01em; }
.cg-root.cg-qlst .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-qlst .cg-ladder-col { border-top: 3px dashed var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-qlst .cg-spec { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Queensland, ABS Census 2021 QuickStats, state 3 (read 7 October 2026): 5,156,138 people; median age 38; 1,366,657 families; 2,190,424 private dwellings; average 2.5 people per household; bachelor degree level and above 918,466 (21.9 percent; Queensland 2016 693,410, 18.3 percent; Australia 2021 26.3 percent). Greater Brisbane GCCSA 3GBRI: 2,526,238 people. Queensland Department of Education term dates page (education.qld.gov.au/about-us/calendar/term-dates): 2026 Term 1 Tuesday 27 January to Thursday 2 April, 10 weeks; Term 2 Monday 20 April to Friday 26 June, 10 weeks; Term 3 Monday 13 July to Friday 18 September, 10 weeks; Term 4 Tuesday 6 October to Friday 11 December, 10 weeks; staff professional development days Term 1 Thursday 22 and Friday 23 January, Term 2 Thursday 16 and Friday 17 April, Term 3 Friday 4 September; school holidays after Term 4 Saturday 12 December to Tuesday 26 January 2027, 46 days; 2027 to 2029 dates on a separate future school dates page. IANA tzdata 2026e australasia file: Zone Australia/Brisbane rule AQ; Rule AQ 1989-1991 October last Sunday daylight saving, 1990-1992 March first Sunday standard time, no later rule. QCAA (qcaa.qld.edu.au) returned a Cloudflare challenge (HTTP 403) on 7 October 2026 and was not circumvented.',
    localProject: 'Linear referencing (chainage) on OpenStreetMap relation 15667051, T5 Gold Coast line Roma Street to Varsity Lakes, read from the OSM API 0.6 on 7 October 2026 (ODbL). Track ways (role empty) joined end to end: 1,434 vertices, 89.103 km. 14 platforms; each platform centre (or the matching stop node for a platform mapped as a relation) projected onto the nearest segment in a local planar projection at latitude 27.75 S. Chainage from the Roma Street platform: South Bank 2.684 km, Boggo Road 4.239, Altandi 17.873, Loganlea 31.249, Beenleigh 40.205, Ormeau 52.537, Coomera 59.441, Hope Island (OSM label) 62.929, Helensvale 68.229, Nerang 76.035, Robina 85.264, Varsity Lakes 89.013. Straight-line distances from Roma Street: South Bank 1.878, Boggo Road 3.287, Altandi 13.792, Loganlea 25.634, Beenleigh 33.409, Coomera 52.033, Helensvale 60.104, Robina 76.032, Varsity Lakes 79.555; ratios 1.429 to 1.119. Platform offsets from the track 0 to 6.4 m. Nearest-vertex snapping instead of projection shifts chainage by up to 73.9 m (Coomera) and 64.6 m (Hope Island). Lesson family: linear referencing, chainage, projecting a point onto a polyline; distinct from map matching, line simplification and shortest-path pages.',
    requiredMentions: [
      '5,156,138',
      '1,366,657',
      '2,190,424',
      '918,466',
      '79.555 km',
      'Tuesday 6 October',
      '46 days',
      '89.013 km',
      '73.9 m'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Queensland: people, median age, families, private dwellings, household size, highest educational attainment.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3' },
      { claim: 'ABS Census 2021 QuickStats, Greater Brisbane: people.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3GBRI' },
      { claim: 'Queensland Department of Education, term dates: 2026 terms, lengths, professional development days and holidays.', url: 'https://education.qld.gov.au/about-us/calendar/term-dates' },
      { claim: 'OpenStreetMap relation 15667051, T5 Gold Coast line, Roma Street to Varsity Lakes (ODbL), read via the OSM API 0.6.', url: 'https://www.openstreetmap.org/relation/15667051' },
      { claim: 'IANA time zone database 2026e, australasia file: Australia/Brisbane and rule AQ.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'QCE subjects, syllabus content and assessment: the QCAA website returned a Cloudflare challenge and was not circumvented.',
      'Official Queensland Rail chainages and timetable distances: not published in the data read; our chainage starts at the Roma Street platform.',
      'Whether every platform in OpenStreetMap is a station open to passengers today: not verified; the Hope Island platform is named only as OpenStreetMap labels it.',
      'Academy offers, cut-offs, school rankings and results: excluded by the cluster rules.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Queensland Rail, the QCAA, the Queensland Department of Education or the ABS.'
    ]
  }
};
