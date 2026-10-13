'use strict';
// Western Australia (cg- state page, Australia cluster Phase 5; index for the WA city pages).
// Spine: map grid zones across WA. Landgate's project grids page (read raw 7 October 2026) lists 19 project
// grids (18 mainland towns and districts plus Christmas Island), each with its own central meridian, scale
// factor and false easting, designed so plan distance equals ground distance within 20 parts per million; it
// states that MGA2020 is a Transverse Mercator projection conforming to the Universal Transverse Mercator grid
// system. Calculated by us on 7 October 2026 with the UTM zone rule zone = floor((longitude + 180) / 6) + 1 and
// zone central meridian = 6 x zone - 183: of the 19 project-grid central meridians, 13 fall in zone 50, 3 in
// zone 51 (Broome 122 20', Esperance 121 53', Goldfields 121 30'), 1 in zone 49 (Carnarvon 113 40'), 1 in zone
// 52 (Kununurra 128 45') and 1 in zone 48 (Christmas Island 105 37' 30"). Carnarvon and Exmouth (114 04') are
// 0.4 degrees apart but sit either side of the 114 E zone edge. Karratha's grid meridian (116 56') is 4 minutes
// from zone 50's central meridian of 117 E. Scale factors range from 0.99999592 (Busselton) to 1.00004949
// (Goldfields); Perth 0.99999906. Lesson family: map grid zone arithmetic (UTM/MGA2020 zones from longitude,
// zone edges, local project grids); screened free site-wide on 7 October 2026 ("mga zone", "grid zone",
// "mga2020" 0 hits). Place facts read raw 7 October 2026: ABS Census 2021 QuickStats Western Australia (STE 5):
// 2,660,026 people, median age 38, 703,130 families, 1,147,872 private dwellings, 2.5 per household, bachelor
// degree and above 513,667 (23.8 percent; 2016 20.5 percent; Australia 26.3). Greater Perth 2,116,647.
// WA Department of Education future term dates (gazetted): 2027 Term 1 Monday 1 February to Friday 9 April,
// Term 2 Monday 26 April to Friday 2 July, Term 3 Monday 19 July to Friday 24 September, Term 4 Monday 11
// October to Thursday 16 December; dates listed to 2032, 2031 and 2032 preliminary. IANA tzdata 2026e:
// Australia/Perth rule AW, last daylight saving trial ended March 2009. SCSA returned a Cloudflare 403 and was
// not circumvented: the WACE is not described here.

const PLACES = [
  ['Perth', 'online-coding-and-python-classes-in-perth-western-australia'], ['Mandurah', 'ai-and-programming-classes-in-mandurah'],
  ['Bunbury', 'vibe-coding-and-ai-agents-classes-in-bunbury'], ['Busselton', 'best-coding-classes-in-busselton'],
  ['Geraldton', 'best-coding-classes-in-geraldton'], ['Albany', 'vibe-coding-and-ai-agents-classes-in-albany-wa'],
  ['Kalgoorlie', 'best-coding-classes-in-kalgoorlie'], ['Karratha', 'ai-and-programming-classes-in-karratha']
];
// Name each place; link only the ones whose Australian page has been built.
function linked(list) {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtPages('au').map(p => p.slug));
  return list.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'state', tag: 'WESTERN AUSTRALIA', label: 'Western Australia', blurb: 'WA terms gazetted years ahead, India time two and a half hours behind, and a project on the map grids that cover the state.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-western-australia',
  code: 'wast',
  accent: '#1C7020',
  accentRationale: 'Western Australia: a deep saltbush green picked by hand (HSV saturation 0.75, value 0.44), at least 10 RGB units from every accent in use and 5.0:1 or better on every paper tint',
  pageType: 'city',
  place: {
    name: 'Western Australia',
    eyebrow: 'Western Australia',
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
  routeLabel: 'Western Australia',
  title: 'Coding and AI Classes in Western Australia | Live Online Lessons',
  description: 'Live online coding, Python, AI and maths lessons for learners across Western Australia, from Pre-primary age to Year 12 and adult. The first lesson is free.',
  ogDescription: 'Coding and AI classes across Western Australia, with a project on why a state this wide needs four map zones and nineteen local grids.',
  twitterDescription: 'WA coding and AI lessons for children, teens and adults, live online, first lesson free.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Western Australian Learners',
    description: 'Level-matched online coding, Python, AI, mapping data and mathematics for children, teenagers and adults across Western Australia, scheduled around the gazetted WA school terms.'
  },

  h1: 'Coding and AI classes in Western Australia',
  capsuleQ: 'Where can a Western Australian learner find the best coding and AI classes?',
  capsule: 'Online, at times that suit a state two and a half hours ahead of India, with teaching that uses Western Australian data. WA counted 2,660,026 residents at the 2021 Census. Our live lessons cover ages 6 to 67, from first Scratch projects to Python, maps and AI, taught privately or in a small class of equals, and the opening lesson costs nothing.',
  lead: 'Western Australia is so wide that no single flat map grid can cover it without bending distances. Surveyors solve this in two ways. The national grid cuts the world into strips six degrees of longitude wide, and Western Australia straddles four of them. Then, for towns where engineers need plans that match the ground, Landgate keeps nineteen local project grids, each centred on its own meridian. Our learners work out which strip every grid belongs to, find the two towns less than half a degree apart that land in different zones, and learn why a coordinate can jump by hundreds of kilometres at an invisible line in the desert.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Western Australia.',

  picks: {
    eyebrow: 'Course picks for WA',
    h2: 'Four places to start in Western Australia',
    intro: 'Set by age and interest, and every one begins with a trial lesson that costs nothing.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Pre-primary to Year 3', note: 'Scratch with a stage that has its own grid, where every sprite needs an x and a y before it can move.' },
      { course: 'maths-through-coding', band: 'Years 3 to 7', note: 'Coordinates, angles and counting in code, the maths that sits underneath every map on a screen.' },
      { course: 'python-complete-masterclass-teens', band: 'Years 8 to 12', note: 'Python with real coordinates: zones, conversions and tests that catch a point on the wrong side of a line.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Python from first steps to working scripts for data, mapping and the everyday automation of a busy job.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'WA in the Census',
      h2: 'A third of the continent and two and a half million people',
      intro: 'Statewide figures as QuickStats reported them for 2021, alongside the national value where one is published.',
      body: [
        { kind: 'table', caption: 'Western Australia in numbers: 2021 QuickStats, ABS', head: ['Measure', 'Western Australia', 'Australia'], rows: [
          ['People', '2,660,026', 'Not shown here'],
          ['Median age', '38', '38'],
          ['Families', '703,130', 'Not shown here'],
          ['Private dwellings', '1,147,872', 'Not shown here'],
          ['Average people per household', '2.5', 'Not shown here'],
          ['People aged 15 and over with a bachelor degree or higher', '513,667, or 23.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'More graduates every Census', p: 'The share of Western Australians aged 15 and over with a bachelor degree or higher rose from 20.5% in 2016 to 23.8% in 2021.' },
          { h3: 'Perth holds most people', p: 'Greater Perth recorded 2,116,647 residents in 2021, roughly four in every five people in the state.' },
          { h3: 'The rest spread very thinly', p: 'Outside Perth, Western Australians live in towns that can be a long way from the nearest specialist class. A live online lesson is the same hour for a learner in Kununurra or Esperance.' }
        ] },
        { kind: 'p', text: 'These are the Bureau\'s own published totals. Census cells are adjusted individually for privacy, which is why we never sum the rows of a table to invent a total of our own.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'The WA school year',
      h2: 'Terms gazetted years in advance',
      intro: 'From the WA Department of Education\'s future term dates page, which reproduces the dates published in the Government Gazette. We describe the calendar only and give no enrolment advice.',
      body: [
        { kind: 'table', caption: '2027 term dates for WA public schools, as gazetted', head: ['Semester', 'Term', 'Dates'], rows: [
          ['Semester 1', 'Term 1', 'Monday 1 February to Friday 9 April'],
          ['Semester 1', 'Term 2', 'Monday 26 April to Friday 2 July'],
          ['Semester 2', 'Term 3', 'Monday 19 July to Friday 24 September'],
          ['Semester 2', 'Term 4', 'Monday 11 October to Thursday 16 December']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Planned to 2032', p: 'The department lists term dates for every year up to 2032, marking the 2031 and 2032 dates as preliminary until they are confirmed.' },
          { h3: 'A holiday on a Monday', p: 'For 2027 the department notes that Monday 26 April, the first day of Term 2, is expected to be a public holiday in lieu of Anzac Day, which falls on a Sunday.' },
          { h3: 'Senior years', p: 'Year 12 in WA leads to the WACE. Its awarding body\'s site refused our automated requests, and a page about WACE courses written from memory would be guesswork, so this one leaves them out.' }
        ] },
        { kind: 'spec', title: 'Gifted and talented testing', p: 'WA runs its own Academic Selective Entrance Test in Year 6. Our <a class="cg-inline-link" href="/wa-gate-aset-maths-practice">WA GATE and ASET maths page</a> describes the published format; we teach the maths and give no admissions advice.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which map zone does each WA project grid sit in?',
      intro: 'Landgate\'s nineteen project grids, each central meridian run through the standard UTM zone rule. Our calculation, 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Selected Landgate project grids and the national zone each central meridian falls in (our calculation)', head: ['Grid', 'Central meridian', 'Zone', 'Zone centre'], rows: [
          ['Christmas Island', '105°37\'30" E', '48', '105° E'],
          ['Carnarvon', '113°40\' E', '49', '111° E'],
          ['Exmouth', '114°04\' E', '50', '117° E'],
          ['Perth', '115°49\' E', '50', '117° E'],
          ['Karratha', '116°56\' E', '50', '117° E'],
          ['Goldfields', '121°30\' E', '51', '123° E'],
          ['Broome', '122°20\' E', '51', '123° E'],
          ['Kununurra', '128°45\' E', '52', '129° E']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Find the strip', p: 'Add 180 to the longitude, divide by 6, round down and add 1. A meridian of 115°49\' gives zone 50. The code is one line; the tests are where the learning happens.' },
          { h3: '2. Count the zones', p: 'Of the 19 grids, 13 sit in zone 50, 3 in zone 51, and one each in zones 49, 52 and, for Christmas Island, 48. The mainland grids alone span four zones.' },
          { h3: '3. Find the edge', p: 'Carnarvon\'s grid meridian is 113°40\' and Exmouth\'s is 114°04\', only 0.4 degrees apart, yet the zone edge at 114° E runs between them. Karratha\'s sits just 4 minutes from the centre of its zone.' }
        ] },
        { kind: 'callout', h3: 'Why towns get their own grid', p: 'Landgate says that within a project grid, a distance on a plan equals the ground distance to within 20 parts per million, about 2 cm in a kilometre. Each grid gets its own scale factor to make that true: Busselton\'s is 0.99999592 and the Goldfields grid\'s is 1.00004949. Learners see why one six-degree strip cannot promise the same everywhere inside it.' },
        { kind: 'p', text: 'Zone numbers and distances to zone centres on this page are our calculations from Landgate\'s published central meridians. Landgate notes that MGA2020 is a Transverse Mercator projection that follows the Universal Transverse Mercator system; for full grid parameters, use its spreadsheet and the national technical manuals it points to.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Coordinates in code',
      h2: 'Five habits for any program that stores locations',
      intro: 'Learned on WA map grids, then used on GPS tracks, delivery apps, farm records and anything with an easting in it.',
      body: [
        { kind: 'table', caption: 'How to keep coordinates honest', head: ['Habit', 'In practice', 'What it prevents'], rows: [
          ['Store the zone with the point', 'Keep zone 50 next to every easting and northing', 'Two points that look close but are hundreds of kilometres apart'],
          ['Name the datum', 'Say GDA2020 or GDA94, never just "the coordinates"', 'Positions shifted by a datum change'],
          ['Test the edges', 'Check a point just either side of 114° E', 'A rule that fails exactly where it matters'],
          ['Keep plan and ground apart', 'Record whether a distance is on the grid or on the ground', 'Small scale errors adding up over long lines'],
          ['Use the published tools', 'Check results against the official calculators', 'Trusting your own code with nobody checking it']
        ] },
        { kind: 'p', text: 'The first habit causes the most surprises. An easting of 400,000 metres in zone 50 and the same number in zone 51 are two different places a long way apart, so a spreadsheet that drops the zone column has quietly broken every distance it calculates afterwards.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A Scratch map with numbered strips, where a sprite has to announce which strip it is standing in.' },
          { h3: 'Teenagers', p: 'The 19 Landgate grids in Python, a zone function and a set of edge-case tests around 114° E and 120° E.' },
          { h3: 'Adults', p: 'A script that reads a list of sites, adds the zone to each one and flags any pair that crosses a zone edge.' }
        ] }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Across WA',
      h2: 'Western Australian places with their own page',
      intro: 'Town and city pages are added one at a time, and only once there are enough verified local facts to write something accurate.',
      body: [
        { kind: 'p', text: 'WA places covered so far or planned: ' + linked(PLACES) + '. A linked name has its own page and local data project; the others are being prepared and appear here so families know they are on the way.' },
        { kind: 'spec', title: 'Clocks in Western Australia', p: 'WA keeps the same time all year. The IANA time zone database records its most recent daylight saving trial ending in March 2009, so Western Australia stays two and a half hours ahead of India in every season, the smallest gap of any Australian state.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a sprite on a grid to coordinates you can trust',
    intro: 'Year levels are only a starting suggestion. The free lesson settles where a learner begins.',
    cols: [
      { band: 'Pre-primary to Year 2', h3: 'Moving on a grid', p: 'Sprites that move by steps left, right, up and down, and the first sense of x and y.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 3 to 6', h3: 'Maps and angles', p: 'Coordinates, compass directions and simple rules that place things on a map.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 7 to 12', h3: 'Zones and edge cases', p: 'Functions that convert and classify positions, with tests written to break them at the boundaries.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Location data at work', p: 'Field records, site lists and reports where the zone, datum and method are written down.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool can convert coordinates instantly. Why should a WA student understand zones?',
    intro: 'Because a conversion that ignores the zone gives an answer in the right format and the wrong place.',
    p1: 'Ask an assistant for the distance between two eastings and it will subtract them without blinking, whether or not they share a zone. Ask it to write a zone function and it may produce something that works for Perth and fails quietly for a point at exactly 114 degrees east. The numbers come back neat and plausible, which is precisely what makes the mistake hard to see.',
    p2: 'A student who has placed Landgate\'s grids into their zones knows the questions to ask of any generated answer about location: which zone, which datum, plan or ground, and what happens at the edge? Those questions apply to mapping, mining, agriculture and logistics, all of which run on coordinates.',
    closer: 'So the reason for a Western Australian student to learn to code in 2026 is not to out-type an AI tool. It is to know when its coordinates point to the right place.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Broome, Bunbury or Boulder, one live lesson',
    intro: 'Travelling to a weekly class is unrealistic for much of WA. A live online lesson removes the distance completely.',
    cells: [
      { h3: 'The closest time zone to ours', p: 'WA is only two and a half hours ahead of India, so after-school lessons fall in the early afternoon of our teachers\' day, with plenty of choice.' },
      { h3: 'WA school language', p: 'Teachers use Pre-primary, Year 11 and WA term names, the same words a Western Australian classroom uses. Every lesson is in English.' },
      { h3: 'Start with a full lesson', p: 'The trial is taught like any other week, so the learner leaves with something built, and the teacher then suggests a level, course and lesson time. There is no payment form.' },
      { h3: 'Groups by ability', p: 'Classmates are chosen by standard, between five and ten of them, and come from WA, interstate and overseas, which keeps a convenient hour open at most levels.' },
      { h3: 'Two lessons a week', p: 'Around eight a month at a fixed time, with breaks for school holidays and exams arranged with the teacher.' },
      { h3: 'No clock changes', p: 'Neither WA nor India uses daylight saving, so a lesson time chosen in February is still the same time in August.' }
    ],
    spec: { title: 'Plan around the gazetted terms', p: 'Because WA publishes term dates years ahead, families can tell the teacher the whole year\'s school calendar at the start, and lessons pause on the right weeks without reminders.' }
  },

  fees: {
    h2: 'What lessons cost in Western Australia',
    intro: 'A single price list from the Kimberley to the Great Southern.',
    first: 'A complete first lesson at no cost, ending with a recommended level, course and weekly time.',
    group: 'A month of lessons, typically eight, with fifteen to twenty learners at a similar level.',
    private: 'The same rhythm of about eight lessons a month, taught one to one.',
    closer: 'Outside India every family is invoiced in US dollars at one rate, so Port Hedland and Fremantle pay exactly the same. Nothing is billed until the trial has settled what and when the learner will study; holiday pauses, make-up lessons and swapping between group and private teaching are all covered on the pricing page.'
  },

  reviewsH2: 'Unedited Google reviews from our families',

  book: {
    h2: 'Tell us the learner\'s age or year',
    intro: 'The first task suits the learner: a Scratch grid game for a young child, a first Python coordinate exercise for the middle years, or the WA map-zone puzzle for a senior student.',
    success: 'Thank you. We will be in touch shortly about a class in Western Australia.'
  },

  faq: {
    h2: 'Western Australia coding class questions',
    intro: 'The questions WA families raise most often.',
    items: [
      { q: 'What is the population of Western Australia?', a: 'The 2021 Census counted 2,660,026 people in Western Australia, 2,116,647 of them in Greater Perth, with a median age of 38.' },
      { q: 'What is a map grid zone?', a: 'A map grid zone is one of the strips, six degrees of longitude wide, that the Universal Transverse Mercator system divides the world into. Each zone gets its own flat grid, so a coordinate is only meaningful together with its zone number.' },
      { q: 'What is the WA map grid project?', a: 'Learners take the central meridians of Landgate\'s 19 project grids and work out which national zone each falls in. Thirteen land in zone 50, and Carnarvon and Exmouth, only 0.4 degrees apart, end up in different zones.' },
      { q: 'When are the 2027 WA school terms?', a: 'Term 1 runs Monday 1 February to Friday 9 April, Term 2 Monday 26 April to Friday 2 July, Term 3 Monday 19 July to Friday 24 September and Term 4 Monday 11 October to Thursday 16 December, as gazetted.' },
      { q: 'Do you help with the WACE?', a: 'Yes, as teaching of programming and maths skills. We cannot quote WACE course details here because the awarding body\'s site turned away our automated reads, so name the course at the trial and lessons are shaped to it. Anything submitted for assessment stays the student\'s own work.' },
      { q: 'What time are lessons in WA?', a: 'Afternoons, evenings or weekends, chosen in the trial and always written in WA time. India is two and a half hours behind WA all year, because neither changes its clocks.' },
      { q: 'Do you teach regional and remote students?', a: 'Yes. Lessons need only a laptop or desktop, sound and a stable connection, so a learner in the Pilbara joins exactly the same class as one in Perth.' },
      { q: 'Is there a Modern Age Coders office in Western Australia?', a: 'No, and we do not claim one. Teaching is entirely live online with no premises anywhere in Australia, and the phone number we display is an Indian number.', boiler: true },
      { q: 'How much are coding lessons in WA?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Nothing is paid until course, format and time are agreed.', boiler: true },
      { q: 'How many students share a group?', a: 'Five to ten, grouped by level, pace and goals rather than age or suburb. When no group suits a learner at a workable hour, private lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for WA and Australian learners',
    html: 'Primary students preparing for the selective test can read <a class="cg-inline-link" href="/wa-gate-aset-maths-practice">WA GATE and ASET maths practice</a>, and NAPLAN families can start with <a class="cg-inline-link" href="/naplan-numeracy-practice-online">NAPLAN numeracy practice</a>. Teenagers interested in competitions can browse the <a class="cg-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">Australian competitions calendar</a>. Everything else for Australian families starts from our <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Western Australia and Australia',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/wa-gate-aset-maths-practice', label: 'WA GATE maths' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-wast .cg-hero-grid { align-items: end; gap: clamp(1.2rem, 3.6vw, 3rem); }
.cg-root.cg-wast .cg-hero h1 { font-weight: 700; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-wast .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.3rem; }
.cg-root.cg-wast .cg-eyebrow { letter-spacing: 0.18em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-wast .cg-section-head h2 { max-width: 30ch; }
.cg-root.cg-wast .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.9rem); }
.cg-root.cg-wast .cg-table caption { font-weight: 700; }
.cg-root.cg-wast .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-wast .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-wast .cg-spec { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Western Australia, ABS Census 2021 QuickStats, state 5 (read 7 October 2026): 2,660,026 people; median age 38; 703,130 families; 1,147,872 private dwellings; average 2.5 people per household; bachelor degree level and above 513,667 (23.8 percent; WA 2016 410,269, 20.5 percent; Australia 2021 26.3 percent). Greater Perth GCCSA 5GPER: 2,116,647. WA Department of Education future term dates page (education.wa.edu.au/future-term-dates), dates as published in the Western Australian Government Gazette for public schools: 2027 Semester 1 Term 1 Monday 1 February to Friday 9 April; Term 2 Monday 26 April to Friday 2 July; Semester 2 Term 3 Monday 19 July to Friday 24 September; Term 4 Monday 11 October to Thursday 16 December; note that Monday 26 April is expected to be a public holiday in lieu of Anzac Day on Sunday 25 April; dates listed to 2032, with 2031 and 2032 marked preliminary. Landgate project grids and calculations page: MGA2020 is the standard map projection associated with GDA2020, a Transverse Mercator projection that conforms to the internationally standardised Universal Transverse Mercator grid system; within a project grid the plan distance equals the ground distance to a defined tolerance of 20 parts per million; 19 project grids with central meridian, central scale factor and false easting (e.g. Perth PCG2020 115 49 00, 0.99999906, 50 000; Goldfields GOLD2020 121 30 00, 1.00004949, 60 000; Busselton BCG2020 115 26 00, 0.99999592; Christmas Island CIG2020 105 37 30). IANA tzdata 2026e: Zone Australia/Perth rule AW; Rule AW 2006 December 3 to 2009 March last Sunday, no later rule. SCSA (scsa.wa.edu.au, senior-secondary.scsa.wa.edu.au) returned a Cloudflare challenge (HTTP 403) on 7 October 2026 and was not circumvented.',
    localProject: 'Map grid zone arithmetic on Landgate\'s 19 project grids (calculated 7 October 2026): zone = floor((longitude + 180) / 6) + 1, zone central meridian = 6 x zone - 183. Central meridians and zones: Albany 117 53 (50), Barrow Island-Onslow 115 15 (50), Broome 122 20 (51), Busselton 115 26 (50), Carnarvon 113 40 (49), Christmas Island 105 37 30 (48), Collie 115 56 (50), Esperance 121 53 (51), Exmouth 114 04 (50), Geraldton 114 35 (50), Goldfields 121 30 (51), Jurien 114 59 (50), Kalbarri 114 18 55 (50), Karratha 116 56 (50), Kununurra 128 45 (52), Lancelin 115 22 (50), Margaret River 115 10 (50), Perth 115 49 (50), Port Hedland 118 36 (50). Counts: zone 50 thirteen, zone 51 three, zones 48, 49 and 52 one each; mainland grids span zones 49 to 52. Carnarvon and Exmouth meridians 0.4 degrees apart either side of 114 E. Karratha 4 minutes west of 117 E. Scale factors 0.99999592 (Busselton) to 1.00004949 (Goldfields). Lesson family: map grid zone arithmetic (UTM/MGA2020 zones from longitude, zone edges, local project grids); distinct from Irish Grid conversion, Mercator distortion and great-circle pages.',
    requiredMentions: [
      '2,660,026',
      '703,130',
      '1,147,872',
      '513,667',
      'Thursday 16 December',
      '20 parts per million',
      '0.99999592',
      '1.00004949',
      '113°40\''
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Western Australia: people, median age, families, private dwellings, household size, highest educational attainment.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/5' },
      { claim: 'ABS Census 2021 QuickStats, Greater Perth: people.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/5GPER' },
      { claim: 'WA Department of Education, future term dates (as gazetted): 2027 terms, the Anzac Day note, dates to 2032.', url: 'https://www.education.wa.edu.au/future-term-dates' },
      { claim: 'Landgate, project grids and calculations: MGA2020 and UTM, the 20 parts per million tolerance, the 19 project grids and their parameters.', url: 'https://www.landgate.wa.gov.au/location-data-and-services/surveying/geodesy/project-grids-and-calculations/' },
      { claim: 'IANA time zone database 2026e, australasia file: Australia/Perth and rule AW.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'WACE courses, ATAR syllabuses and assessment: the SCSA websites returned a Cloudflare challenge and were not circumvented.',
      'The MGA2020 false easting, false northing and central scale factor: the national technical manual site (icsm.gov.au) redirected to an unreachable host, so they are not quoted; only Landgate\'s project-grid parameters are.',
      'Exact areas of WA or distances between towns: not needed for the project and not verified.',
      'GATE offers, selective school outcomes, results and rankings: excluded by the cluster rules.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with Landgate, the WA Department of Education, SCSA or the ABS.'
    ]
  }
};
