'use strict';
// Northern Territory (cg- territory page, Australia cluster Phase 5; index for the NT pages).
// Spine: spherical excess. A triangle drawn on the Earth between Darwin, Nhulunbuy and Alice Springs has angles
// that add up to more than 180 degrees. Coordinates: OpenStreetMap Nominatim results read 7 October 2026 (ODbL):
// Darwin 12.4604400 S 130.8410469 E, Nhulunbuy 12.1804346 S 136.7759913 E, Alice Springs 23.6983884 S
// 133.8812885 E, Katherine 14.4646157 S 132.2635993 E. Calculated by us on 7 October 2026 on a sphere of mean
// radius 6,371.0088 km (unit vectors, great-circle arcs, angles between great-circle planes): sides Darwin to
// Nhulunbuy 645.5 km, Nhulunbuy to Alice Springs 1,316.7 km, Darwin to Alice Springs 1,290.1 km; angles at
// Darwin 78.1546, Nhulunbuy 73.5804, Alice Springs 28.8420 degrees; sum 180.577 degrees; spherical excess 0.577
// degrees (2,077 arcseconds); area by Girard's theorem (excess in radians x R squared) 408,809 square km against
// 407,207 square km for a flat triangle with the same three sides (Heron's formula), a difference of about
// 1,600 square km. The thin Darwin, Katherine, Alice Springs triangle has an excess of only 0.0864 degrees
// (311 arcseconds). Lesson family: spherical excess and Girard's theorem; screened free site-wide on 7 October
// 2026 ("spherical excess" 0 hits, "girard" 0 hits). Place facts read raw 7 October 2026: ABS Census 2021
// QuickStats Northern Territory (STE 7): 232,605 people, median age 33, 54,507 families, 95,779 private
// dwellings, 2.8 people per household; bachelor degree and above 39,428 (21.5 percent; 2016 17.1 percent;
// Australia 26.3). Greater Darwin 139,902. IANA tzdata 2026e: Australia/Darwin UTC+9:30 with no current
// daylight saving rule. The NT Department of Education and nt.gov.au school pages returned 403 and were not
// circumvented: no NT term dates or senior subject details are quoted.

const PLACES = [
  ['Darwin', 'online-coding-and-python-classes-in-darwin'], ['Alice Springs', 'best-coding-classes-in-alice-springs']
];
// Name each place; link only the ones whose Australian page has been built.
function linked(list) {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtPages('au').map(p => p.slug));
  return list.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'state', tag: 'NORTHERN TERRITORY', label: 'Northern Territory', blurb: 'The youngest median age in Australia, a clock that never changes, and a triangle whose angles add up to more than 180 degrees.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-northern-territory',
  code: 'ntst',
  accent: '#544018',
  accentRationale: 'Northern Territory: a dark red-earth ochre chosen by hand (HSV saturation 0.71, value 0.33), at least 10 RGB units from every accent in use and 8.0:1 against the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'the Northern Territory',
    eyebrow: 'Northern Territory, Australia',
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
  routeLabel: 'Northern Territory, Australia',
  title: 'Coding and AI Classes in the Northern Territory | Live Online',
  description: 'Live online coding, Python, AI and maths lessons for learners in the Northern Territory, from age 6 to adult, on a clock that never changes. First lesson free.',
  ogDescription: 'Coding and AI classes for the Northern Territory, with a project on why a triangle from Darwin to Nhulunbuy to Alice Springs has angles adding up to 180.577 degrees.',
  twitterDescription: 'Northern Territory coding and AI lessons for kids, teens and adults, live online, first lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Northern Territory Learners',
    description: 'Level-matched online coding, Python, AI and mathematics for children, teenagers and adults across the Northern Territory, from Darwin to Alice Springs and remote communities.'
  },

  h1: 'Coding and AI classes in the Northern Territory',
  capsuleQ: 'How can a Northern Territory learner get the best coding and AI teaching from far away?',
  capsule: 'Through live online lessons that ignore distance and use the Territory\'s own geography as the maths. The 2021 Census counted 232,605 people in the NT. We teach ages 6 to 67 live, from Scratch to Python, geometry and AI, in a small group at one level or one to one, on the same clock all year, and the first lesson costs nothing.',
  lead: 'Draw a triangle on a map between Darwin, Nhulunbuy on the Gove Peninsula and Alice Springs, and measure its three angles. At school you learn they must add up to 180 degrees. On the curved surface of the Earth they add up to 180.577. The extra bit, called the spherical excess, is not a measuring error: it is exactly proportional to the triangle\'s area. Our learners compute the distances and angles from map coordinates, find the excess, use it to work out the area of the triangle, and discover that treating the Territory as flat loses about 1,600 square kilometres.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in the Northern Territory.',

  picks: {
    eyebrow: 'Course picks for the NT',
    h2: 'Four ways into coding from the Territory',
    intro: 'Picked by age and interest. A free lesson opens every one of them.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 8', note: 'Block coding with shapes, turns and angles, drawing triangles and checking what their angles add up to.' },
      { course: 'maths-through-coding', band: 'Ages 8 to 13', note: 'Geometry and measurement in code, from angles on paper to distances across a map.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python with vectors and trigonometry: real coordinates, great circles and the curved Earth.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Practical Python for working adults, including location data, scheduling and small tools that save hours.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The NT in the Census',
      h2: 'A young population spread across a vast territory',
      intro: 'Territory totals from the 2021 QuickStats, with the Australian figure where one is published.',
      body: [
        { kind: 'table', caption: 'The Northern Territory in numbers: 2021 QuickStats, ABS', head: ['Measure', 'Northern Territory', 'Australia'], rows: [
          ['People', '232,605', 'Not given'],
          ['Median age', '33', '38'],
          ['Families', '54,507', 'Not given'],
          ['Private dwellings', '95,779', 'Not given'],
          ['Average people per household', '2.8', 'Not given'],
          ['Residents aged 15 and over with a bachelor degree or above', '39,428, or 21.5%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The youngest median', p: 'Half the Territory\'s people were under 33 in 2021, five years younger than the national median of 38 and the youngest of the eight state and territory pages we read.' },
          { h3: 'Bigger households', p: 'An average of 2.8 people lived in each NT household in 2021, more than in any of the states we checked.' },
          { h3: 'Darwin and the rest', p: 'Greater Darwin had 139,902 residents in 2021. Everyone else lives in towns and communities that can be hundreds of kilometres apart.' }
        ] },
        { kind: 'p', text: 'Every figure above is one the Bureau publishes itself. Census cells are adjusted individually to protect privacy, so on this page no total is ever built by adding the rows of a table.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'School in the NT',
      h2: 'What this page covers about NT schooling',
      intro: 'We publish only what we have read at the source, and two NT government websites refused our automated requests when we checked.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term dates', p: 'The Territory\'s school term pages returned an access error to our automated check on 7 October 2026. Rather than guess, we leave them out; families share their dates during the trial lesson.' },
          { h3: 'Senior certificate', p: 'The education department\'s pages, including those about senior secondary study, declined our requests, so senior subjects are not described here. We teach the skills senior students rely on.' },
          { h3: 'National curriculum', p: 'What applies everywhere is covered on our pages for the <a class="cg-inline-link" href="/australian-curriculum-digital-technologies-help">Australian Curriculum: Digital Technologies</a> and for <a class="cg-inline-link" href="/naplan-numeracy-practice-online">NAPLAN numeracy</a>.' }
        ] },
        { kind: 'spec', title: 'Competitions from anywhere', p: 'Distance matters less for contests than for classes, and our <a class="cg-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists the main ones by month.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Why do the angles of a Territory triangle add up to more than 180 degrees?',
      intro: 'Darwin, Nhulunbuy and Alice Springs as points on a sphere, with every side and angle computed from map coordinates. Our calculation, 7 October 2026.',
      body: [
        { kind: 'table', caption: 'The Darwin, Nhulunbuy, Alice Springs triangle on a spherical Earth (our calculation)', head: ['Measure', 'Value'], rows: [
          ['Darwin to Nhulunbuy', '645.5 km'],
          ['Nhulunbuy to Alice Springs', '1,316.7 km'],
          ['Darwin to Alice Springs', '1,290.1 km'],
          ['Angles at Darwin, Nhulunbuy, Alice Springs', '78.1546°, 73.5804°, 28.8420°'],
          ['Sum of the three angles', '180.577°'],
          ['Spherical excess', '0.577°, or 2,077 arcseconds'],
          ['Area from the excess (Girard\'s theorem)', '408,809 km²'],
          ['Area of a flat triangle with the same sides', '407,207 km²']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Points as arrows', p: 'Each town\'s latitude and longitude becomes an arrow from the Earth\'s centre. The angle between two arrows, multiplied by the Earth\'s radius, is the great-circle distance between the towns.' },
          { h3: '2. Angles between planes', p: 'Each side of the triangle lies on a plane through the Earth\'s centre. The angle at a corner is the angle between two of those planes, found with a cross product and a dot product.' },
          { h3: '3. The excess is the area', p: 'Girard\'s theorem says the excess, measured in radians and multiplied by the radius squared, is the triangle\'s area. Here that gives 408,809 km², about 1,600 km² more than a flat triangle with the same sides.' }
        ] },
        { kind: 'callout', h3: 'Bigger triangles bend more', p: 'Swap Nhulunbuy for Katherine, close to the line between Darwin and Alice Springs, and the triangle becomes long and thin. Its excess drops to just 0.0864 degrees, 311 arcseconds, because its area is so much smaller. Learners see that the curve of the Earth only shows up when a shape covers a lot of ground, which is why surveyors of small blocks can treat the land as flat and surveyors of the Territory cannot.' },
        { kind: 'p', text: 'All figures are our calculations from OpenStreetMap coordinates on a perfectly round Earth of radius 6,371.0088 km. The real Earth is slightly flattened, and each town\'s coordinate marks one mapped point, so official surveyed distances will differ a little.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Geometry in code',
      h2: 'Five habits for any program that works on a curved Earth',
      intro: 'Learned on Territory towns, then applied to flight paths, shipping routes, satellite data and any map bigger than a city.',
      body: [
        { kind: 'table', caption: 'How to stop flat-Earth assumptions creeping into code', head: ['Habit', 'In practice', 'What it prevents'], rows: [
          ['Say which Earth', 'Write down the radius or model used', 'Two programs that disagree for no visible reason'],
          ['Work in vectors', 'Turn coordinates into unit vectors before measuring', 'Formulas that break near the poles or the date line'],
          ['Check the sum', 'Confirm a triangle\'s angles exceed 180 degrees by a sensible amount', 'Angle code that is quietly wrong'],
          ['Compare with flat', 'Compute the flat answer too and look at the gap', 'Using a curved method where it changes nothing, or a flat one where it matters'],
          ['Know your source points', 'Note where each coordinate came from', 'Treating a town\'s map pin as a surveyed mark']
        ] },
        { kind: 'p', text: 'The fourth habit is the one Territory learners find most useful. Seeing a 1,600 km² gap on a big triangle and almost nothing on a thin one teaches them when the extra effort of spherical geometry earns its keep.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A Scratch pen program that draws triangles on paper and adds up their angles, ready for the surprise later.' },
          { h3: 'Teenagers', p: 'Darwin, Nhulunbuy and Alice Springs in Python: vectors, great-circle arcs, corner angles and Girard\'s theorem.' },
          { h3: 'Adults', p: 'A small tool that takes any list of places and reports distances, angles and how much a flat map would mislead.' }
        ] }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Across the Territory',
      h2: 'Territory places with a page of their own',
      intro: 'Place pages are written one at a time, and only where enough checked local facts exist.',
      body: [
        { kind: 'p', text: 'NT places covered or planned: ' + linked(PLACES) + '. A linked name already has its own page and data project; others are still being prepared.' },
        { kind: 'spec', title: 'A clock that never changes', p: 'The IANA time zone database places Darwin at nine and a half hours ahead of universal time with no daylight saving. India is five and a half hours ahead, so our teachers are exactly four hours behind the Territory every day of the year.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From drawing triangles to measuring a curved Earth',
    intro: 'These bands only suggest a start. The trial lesson decides.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Shapes and turns', p: 'Drawing shapes with code, turning by angles and noticing patterns in the turns.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 to 12', h3: 'Measuring things', p: 'Angles, distances and maps, checked by code and by hand.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'Vectors and the globe', p: 'Coordinates as vectors, trigonometry in code and the geometry of a curved surface.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Location data at work', p: 'Routes, sites and distances handled with a stated model and a sanity check.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool can measure the distance from Darwin to Alice Springs. Why should a Territory student understand how?',
    intro: 'Because a formula that assumes a flat map can be confidently wrong over Territory distances.',
    p1: 'Ask an assistant for the area of a triangle joining three Territory towns and it may use the school formula for a flat triangle, give a precise-looking number and not mention the curve of the Earth. Ask it to write a distance function and it may treat degrees of longitude as if they were the same width everywhere. The answers look reasonable on a small scale and drift as the distances grow.',
    p2: 'A student who has computed the spherical excess of a real Territory triangle knows what to ask of any generated answer involving the globe: flat or curved, which radius, and how big is the difference at this scale? Those questions matter for aviation, mining, defence and remote logistics, all of which deal in long distances.',
    closer: 'That is why a Territory student should still learn to code in 2026: to know when an AI tool\'s numbers have quietly flattened the Earth.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Darwin, Katherine or Alice Springs, the same lesson',
    intro: 'Distances in the Territory make a weekly class in person impossible for most families. Online lessons remove the distance entirely.',
    cells: [
      { h3: 'A fixed four-hour gap', p: 'Neither the Territory nor India changes its clocks, so our teachers are four hours behind the NT all year and lesson times never shift.' },
      { h3: 'Built for remote learners', p: 'Any laptop or desktop with sound and a reliable connection is enough. Learners far from town join the same class as learners in Darwin.' },
      { h3: 'Full trial lesson', p: 'The first session is a real lesson with something finished, followed by a recommended level, course and time. No card details are needed.' },
      { h3: 'Classmates at your level', p: 'Groups of fifteen to twenty learners at a similar standard, from the Territory, other states and overseas, so most levels have a workable hour.' },
      { h3: 'Steady weekly rhythm', p: 'Two lessons a week, about eight a month, at a fixed time, with breaks for school holidays arranged with the teacher.' },
      { h3: 'English throughout', p: 'Every lesson is taught in English, using Australian school year names so lessons connect with what learners meet at school.' }
    ],
    spec: { title: 'Young learners welcome', p: 'With the Territory\'s median age at 33, many enquiries are for school-age children. Our youngest live classes start at age 6.' }
  },

  fees: {
    h2: 'What lessons cost in the Northern Territory',
    intro: 'One price list for the whole Territory.',
    first: 'A full first lesson free of charge, ending with a recommended level, course and weekly time.',
    group: 'A month of lessons, normally eight, with fifteen to twenty learners at a similar level.',
    private: 'Around eight lessons a month in the same pattern, one teacher with one learner.',
    closer: 'Families outside India are invoiced in US dollars at a single rate, so Tennant Creek and the Darwin waterfront receive the same bill. Nothing is billed before the trial has fixed a course and a lesson time, and our pricing page explains holiday pauses, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'Google reviews from families we teach, word for word',

  book: {
    h2: 'Tell us the learner\'s age',
    intro: 'The first task suits the learner: block-coded triangles for a young child, a first Python map distance for the middle years, or the spherical triangle for a senior student.',
    success: 'Thank you. The team will be in touch soon about a class in the Northern Territory.'
  },

  faq: {
    h2: 'Northern Territory coding class questions',
    intro: 'What Territory families tend to ask first.',
    items: [
      { q: 'How many people live in the Northern Territory?', a: 'The 2021 Census counted 232,605 people in the Northern Territory, with a median age of 33, and 139,902 of them in Greater Darwin.' },
      { q: 'What is spherical excess?', a: 'Spherical excess is the amount by which the angles of a triangle drawn on a sphere add up to more than 180 degrees. By Girard\'s theorem it is proportional to the triangle\'s area, so larger triangles have larger excess.' },
      { q: 'What is the Territory triangle project?', a: 'Learners compute the triangle joining Darwin, Nhulunbuy and Alice Springs on a spherical Earth from map coordinates. Its angles add up to 180.577 degrees, and the excess gives an area of 408,809 square kilometres.' },
      { q: 'Does the Northern Territory have daylight saving?', a: 'No. The IANA time zone database lists Darwin at nine and a half hours ahead of universal time with no daylight saving, so the Territory keeps one time all year, four hours ahead of India.' },
      { q: 'Why don\'t you list NT school term dates?', a: 'The Territory\'s school pages declined our automated check, and we only print dates we have read at the source ourselves. Families tell the teacher their school calendar during the trial.' },
      { q: 'Do you help senior students in the NT?', a: 'Yes, with the programming, maths and data skills senior subjects draw on. We could not read the department\'s senior secondary pages automatically, so we do not describe those subjects; assessed work always stays the student\'s own.' },
      { q: 'Can students in remote communities join?', a: 'Yes, if they have a laptop or desktop, sound and a connection reliable enough for a video call. They join exactly the same live lessons as learners in Darwin.' },
      { q: 'Is there a Modern Age Coders centre in the Northern Territory?', a: 'No, and none is claimed. All lessons are live online with no premises in Australia, and the contact number shown is an Indian one.', boiler: true },
      { q: 'How much are coding lessons in the NT?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by level, pace and goals rather than age or town. If no group meets at a suitable hour, the learner is offered one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Territory learners',
    html: 'Learners who enjoy maths puzzles can start with the <a class="cg-inline-link" href="/australian-maths-competitions-for-primary-kids">maths competitions for primary kids</a>, and teenagers with <a class="cg-inline-link" href="/game-programming-course-australia">our game programming course page</a>. Parents comparing options can read <a class="cg-inline-link" href="/online-coding-classes-for-kids-australia">online coding classes for kids in Australia</a>. All our Australian pages are listed on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'The Northern Territory and Australia',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-queensland', label: 'Queensland' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/coding-and-ai-classes-in-south-australia', label: 'South Australia' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-ntst .cg-hero-grid { align-items: end; gap: clamp(1.15rem, 3.3vw, 2.75rem); }
.cg-root.cg-ntst .cg-hero h1 { font-weight: 800; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-ntst .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-ntst .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ntst .cg-section-head h2 { max-width: 37ch; letter-spacing: -0.01em; }
.cg-root.cg-ntst .cg-grid-3 { gap: clamp(1.2rem, 2.7vw, 2.25rem); }
.cg-root.cg-ntst .cg-table caption { font-weight: 700; letter-spacing: 0.02em; }
.cg-root.cg-ntst .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ntst .cg-ladder-col { border-top: 4px double var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-ntst .cg-spec { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Northern Territory, ABS Census 2021 QuickStats, state 7 (read 7 October 2026): 232,605 people; median age 33 (Australia 38); 54,507 families; 95,779 private dwellings; average 2.8 people per household; bachelor degree level and above 39,428 (21.5 percent; NT 2016 30,712, 17.1 percent; Australia 2021 26.3 percent). Median ages on the other state pages read the same day: NSW 39, Victoria 38, Queensland 38, SA 41, WA 38, Tasmania 42, ACT 35; household sizes: Victoria 2.5, Queensland 2.5, SA 2.4, WA 2.5, Tasmania 2.4, ACT 2.5. Greater Darwin GCCSA 7GDAR: 139,902. IANA tzdata 2026e australasia file: Zone Australia/Darwin 9:30 rule Aus, Aus rules ending in the 1940s, so no current daylight saving. The NT Department of Education (education.nt.gov.au) and nt.gov.au school pages returned HTTP 403 on 7 October 2026 and were not circumvented.',
    localProject: 'Spherical excess on the Darwin, Nhulunbuy, Alice Springs triangle (calculated 7 October 2026). Coordinates from OpenStreetMap Nominatim (ODbL): Darwin -12.4604400, 130.8410469 (node 1639099539); Nhulunbuy -12.1804346, 136.7759913; Alice Springs -23.6983884, 133.8812885; Katherine -14.4646157, 132.2635993 (relation centroids for the last three). Sphere radius 6,371.0088 km. Sides: Darwin-Nhulunbuy 645.5 km, Nhulunbuy-Alice Springs 1,316.7 km, Darwin-Alice Springs 1,290.1 km. Angles: Darwin 78.1546, Nhulunbuy 73.5804, Alice Springs 28.8420; sum 180.57707 degrees; excess 0.57707 degrees = 2,077.4 arcseconds; area (Girard) 408,809 square km; flat triangle with the same sides (Heron) 407,207 square km. Darwin, Katherine, Alice Springs: excess 0.0864 degrees (311.0 arcseconds), area 61,210 square km. Lesson family: spherical excess and Girard\'s theorem; distinct from great-circle distance, horizon distance and map projection pages.',
    requiredMentions: [
      '232,605',
      '54,507',
      '95,779',
      '39,428',
      'Nhulunbuy',
      '180.577',
      '408,809',
      '2,077 arcseconds'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Northern Territory: people, median age, families, private dwellings, household size, highest educational attainment.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/7' },
      { claim: 'ABS Census 2021 QuickStats, Greater Darwin: people.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/7GDAR' },
      { claim: 'OpenStreetMap Nominatim search results for Darwin, Nhulunbuy, Alice Springs and Katherine (ODbL).', url: 'https://nominatim.openstreetmap.org/' },
      { claim: 'IANA time zone database 2026e, australasia file: Australia/Darwin.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'NT school term dates and senior secondary subjects: the NT Department of Education and nt.gov.au pages returned 403 and were not circumvented.',
      'Official surveyed distances between the towns: not used; our distances are on a perfect sphere between mapped points.',
      'The area of the Northern Territory: not verified at a primary source and not needed for the project.',
      'Any claim about remote internet coverage in particular communities: not verified.',
      'Income, rent, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the NT Government, the NT Department of Education or the ABS.'
    ]
  }
};
