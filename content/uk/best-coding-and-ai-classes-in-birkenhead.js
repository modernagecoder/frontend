'use strict';
// Birkenhead (cg- town page, UK cluster Phase 8, towns band A, row 350). Keyword slug per the owner's 2026-09-27
// instruction. Spine: was the park really 120 acres? Anchors (read raw 28 September 2026): Project Gutenberg ebook 70767,
// "Frederick Law Olmsted, Landscape Architect, 1822-1903" (ed. Frederick Law Olmsted, Jr., Putnam 1922), which reprints
// passages from Olmsted's "Walks and Talks of an American Farmer in England" (first published 1852, visit of 1850):
// "BIRKENHEAD AND ITS PARK"; "It was placed in the hands of Mr. Paxton, in June, 1844, by whom it was laid out in its
// present form by June of the following year"; "Of the farm which was purchased, one hundred and twenty acres have been
// disposed of in the way I have described. The remaining sixty acres, encircling the park and garden, were reserved to be
// sold or rented ... for private building lots"; "this People's Garden"; "Carriage roads, thirty-four feet wide". The same
// book quotes his later Cyclopedia article: "Birkenhead park [which Mr. Olmsted had visited in 1850] is a piece of ground
// of 185 acres in a suburb of Liverpool"; "designed and its construction superintended by Sir Joseph Paxton and Mr. Kemp".
// OpenStreetMap (read 28 September 2026 from api.openstreetmap.org, ODbL): way 257607585 "Birkenhead Park", leisure=park,
// version 6 (2025-09-26), one closed ring of 182 node references (181 distinct points). Overpass returned "server too
// busy" (not a block); the main API was used instead.
// Our run (scratchpad bkh/): shoelace on raw degrees 0.0000779 square degrees (meaningless); local projection x = lon * R *
// cos(53.3947), y = lat * R, R 6,371,008.8 m: -574,279 m2 (negative = clockwise ring), 57.43 ha, 141.9 acres (1 acre =
// 4,046.8564224 m2); without the cosine: 238.0 acres (1.68 times too big); geographiclib WGS84 geodesic polygon: 576,688 m2,
// 142.5 acres, perimeter 5,222 m. So the map outline sits between Olmsted's 120 (park and garden, 1850) and 185 (1861
// article), and below the 180 implied by 120 + 60.
// Lesson family: area of a real map polygon (degrees are not metres, cos(latitude), ring orientation, sphere vs ellipsoid)
// checked against historical acreages with different definitions. Screened: polygon area, OpenStreetMap, Overpass,
// Paxton, Olmsted, acre 0 relevant hits (Bahla used shoelace for perimeter vs area on a sketch plot, not map geometry).
// Place facts: Nomis Census 2021 TS007A, Wirral E08000015: total 320,196; 20 to 24 15,076 (4.7%; England 6.0%); 25 to 29
// 17,866 (5.6%; 6.6%); 55 to 59 23,934 (7.5%; 6.7%); 60 to 64 21,519 (6.7%; 5.8%); 65 to 69 18,918 (5.9%; 4.9%); 70 to 74
// 19,103 (6.0%; 5.0%). ONS 2021 BUAs: Birkenhead 109,835; Wallasey 85,610; Heswall 29,075; West Kirby 13,380; Hoylake
// 5,315 (Bebington 57,600 is a Merseyside page mention; named in text only).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BIRKENHEAD', label: 'Birkenhead', blurb: 'Coding and AI classes for Birkenhead, with a project that measures Birkenhead Park from its map outline and tests the acreage Olmsted wrote down in 1850.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-birkenhead',
  code: 'bkh',
  accent: '#3C5C4B',
  accentRationale: 'Birkenhead: a park-lawn green (5.99:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Birkenhead',
    eyebrow: 'Birkenhead, Wirral, Merseyside, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Merseyside' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Merseyside', href: '/coding-classes-in-merseyside' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Birkenhead, England',
  title: 'Coding and AI Classes in Birkenhead | Python Online, 6 to 67',
  description: 'Online coding, AI and Python classes for Birkenhead, Wallasey, Heswall and West Kirby learners aged 6 to 67, live one-to-one or in small groups. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Birkenhead, and a Python project that measures Birkenhead Park from its map outline and checks Olmsted\'s acres.',
  twitterDescription: 'Birkenhead coding, AI and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Birkenhead',
    description: 'Online coding, AI, Python and mathematics for children, teenagers and adults in Birkenhead and across Wirral, taught live at each learner\'s level.'
  },

  h1: 'Coding and AI classes in Birkenhead',
  capsuleQ: 'Where can Birkenhead learners find the best coding and AI classes?',
  capsule: 'Birkenhead is the largest built-up area in Wirral: the ONS gives it 109,835 people at the 2021 census, out of 320,196 in the whole borough, with Wallasey at 85,610 and Heswall at 29,075. Wirral has fewer people in their twenties than England and more in their late fifties and sixties. Anyone from 6 to 67, in Birkenhead itself, Wallasey, West Kirby or Hoylake, can join our India-based tutors on video for coding, AI, Python and maths, one-to-one or in a same-level class of five to ten. A free first lesson shows where to begin. Birkenhead\'s project measures a famous park. Continuing costs USD 100 monthly for a class place, or USD 150 monthly with a tutor to yourself.',
  lead: 'In 1850 a young American farmer touring England was urged by a Birkenhead baker not to leave without seeing the town\'s new park. Frederick Law Olmsted, who went on to plan New York\'s Central Park, called it "this People\'s Garden" and recorded what the head gardener told him: Joseph Paxton laid it out between June 1844 and June 1845, and of the farm that was bought, "one hundred and twenty acres" became park and garden. Eleven years later Olmsted described the same park as "a piece of ground of 185 acres". Which is right? Today anyone can download the park\'s outline from OpenStreetMap, and a Python learner can measure it. The first answer the program gives is in square degrees, and it is useless.',
  wa: 'Hello Modern Age Coders, we would like to book a free coding or AI lesson for a Birkenhead learner.',

  picks: {
    eyebrow: 'Birkenhead course picks',
    h2: 'Where Birkenhead learners tend to start',
    intro: 'Match the learner to a course by age and what excites them; a free live lesson comes first, with no card asked for.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with maps, shapes and simple drawing games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with coordinates, areas and small AI tasks.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The full teen Python course, home of the park project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Adult Python from the first line to data and maps.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wirral borough',
      h2: 'Fewer twenty-somethings, more people near retirement',
      intro: 'Census figures are published for Wirral as a whole; here are six bands from Nomis next to England.',
      body: [
        { kind: 'table', caption: 'Wirral and England, six age bands (TS007A, 2021)', head: ['Age group', 'Wirral people', 'Wirral share', 'England share'], rows: [
          ['20 to 24', '15,076', '4.7%', '6.0%'],
          ['25 to 29', '17,866', '5.6%', '6.6%'],
          ['55 to 59', '23,934', '7.5%', '6.7%'],
          ['60 to 64', '21,519', '6.7%', '5.8%'],
          ['65 to 69', '18,918', '5.9%', '4.9%'],
          ['70 to 74', '19,103', '6.0%', '5.0%']
        ] },
        { kind: 'p', text: 'People in their twenties are a smaller part of Wirral than of England, while each five-year band from 55 to 74 is about a point larger. Besides Birkenhead and Wallasey, the ONS lists Bebington, Heswall, West Kirby at 13,380 and Hoylake at 5,315 among the borough\'s built-up areas. Schools on Wirral follow the national curriculum for England, and our timetable pauses for the holiday dates you share.' },
        { kind: 'callout', h3: 'County and region', p: 'The county page is <a class="cg-inline-link" href="/coding-classes-in-merseyside">Merseyside</a>, and the regional one is <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Birkenhead project',
      h2: 'Measuring Birkenhead Park from its outline',
      intro: 'Download a polygon, turn degrees into metres, and compare with the acres in an old book.',
      body: [
        { kind: 'p', text: 'OpenStreetMap stores the park as a single closed outline of 181 points, each a latitude and longitude. The shoelace formula gives the area of any such polygon: multiply each point\'s x by the next point\'s y, subtract the reverse, add everything up and halve it. Run it straight on the coordinates and the answer is 0.0000779, in square degrees, a unit that means nothing on the ground. The learner has to project the points onto a flat grid in metres first, and that is where the real lessons are.' },
        { kind: 'table', caption: 'The area of Birkenhead Park by method, our Python run on OpenStreetMap way 257607585, 28 September 2026', head: ['Method', 'Result', 'Acres', 'Verdict'], rows: [
          ['Shoelace on raw degrees', '0.0000779 square degrees', 'None', 'Wrong units'],
          ['Degrees to metres, no latitude correction', 'About 963,000 square metres', '238.0', 'Far too big'],
          ['Local projection with cos(latitude)', '574,279 square metres (sign negative)', '141.9', 'Close'],
          ['Geodesic area on the WGS84 ellipsoid', '576,688 square metres', '142.5', 'Reference'],
          ['Olmsted, 1850 visit: park and garden', 'One hundred and twenty acres', '120', 'Quoted'],
          ['Olmsted, later article', 'A piece of ground of 185 acres', '185', 'Quoted']
        ] },
        { kind: 'p', text: 'A degree of latitude is about 111 kilometres everywhere, but a degree of longitude shrinks towards the poles. At Birkenhead, about 53.4 degrees north, it is only about 60 percent as long, so east-west distances must be multiplied by the cosine of the latitude. Forget that step and the park comes out at 238 acres, 68 percent too big. With the correction the local projection gives 574,279 square metres, which is 141.9 acres at 4,046.8564224 square metres to the acre. The sign of the result is negative because the outline runs clockwise, a detail that trips up anyone who does not take the absolute value.' },
        { kind: 'p', text: 'As a check, the learner uses the geographiclib package, which measures the polygon on the true shape of the Earth rather than a sphere: 576,688 square metres, or 142.5 acres, less than half a percent from the simple method. So the modern outline encloses about 142 acres. That is more than the 120 acres of park and garden the gardener described in 1850, and less than both the 185 of Olmsted\'s later article and the 180 implied by his own "remaining sixty acres" set aside for building plots. The numbers do not settle who was right, because each describes a different boundary; the program\'s job is to measure honestly and say which boundary it measured.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw the park on squared paper, count the squares and compare with a friend\'s count.' },
          { h3: 'Ages 11 to 15', p: 'Code the shoelace formula in Python and test it on shapes with known areas.' },
          { h3: 'Ages 15 and up', p: 'Project the real outline, handle orientation, and compare with a geodesic library.' }
        ] },
        { kind: 'callout', h3: 'Olmsted\'s words, open map data, our sums', p: 'The quotations come from the Project Gutenberg edition of Frederick Law Olmsted, Landscape Architect (1922). The park outline is OpenStreetMap data, © OpenStreetMap contributors, available under the Open Database Licence. Every area in the table is our own calculation.' }
      ]
    },
    {
      id: 'park', tint: 'deep', eyebrow: 'Why this park',
      h2: 'What Olmsted wrote down in 1850',
      intro: 'Details from his account, with our map measurement beside them.',
      body: [
        { kind: 'table', caption: 'Birkenhead Park in Olmsted\'s account (Project Gutenberg) and on the map', head: ['Detail', 'His words or our figure'], rows: [
          ['Laid out by', 'Mr. Paxton, June 1844 to June 1845'],
          ['Carriage roads', '"thirty-four feet wide, with borders of ten feet"'],
          ['Park and garden in 1850', '"one hundred and twenty acres"'],
          ['Land kept for building plots', '"The remaining sixty acres"'],
          ['His later description', '"a piece of ground of 185 acres"'],
          ['OpenStreetMap outline today', 'About 142.5 acres (our geodesic figure)']
        ] },
        { kind: 'p', text: 'Area from a polygon is everyday work in mapping, farming and planning software, and the traps on this page are the ones professionals meet: coordinates stored in degrees, a forgotten cosine, a negative sign from ring direction, and an old number that was measuring a different thing. A Birkenhead learner who has worked through them will read any "area" in a dataset with a useful question in mind: area of what, measured how?' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Project Gutenberg, the OpenStreetMap Foundation or the census office. The texts and data are theirs; the measurements and any errors in them are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From squared paper to map data',
    intro: 'School years give a rough starting point; the trial lesson decides.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Shapes in blocks', p: 'Block coding with shapes, grids and drawing.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and geometry', p: 'Coordinates, areas and loops in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Maps and AI', p: 'Trigonometry in code, data and AI beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data and maps', p: 'Adult Python towards data and geographic work.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and maps',
    h2: 'Would an AI remember the cosine?',
    intro: 'Area code is short, which makes its mistakes easy to miss.',
    p1: 'Ask an AI assistant for the area of a park from its coordinates and it may hand back a tidy shoelace function. Whether it projects the points first, corrects for latitude and takes the absolute value is something you only learn by checking.',
    p2: 'A Birkenhead learner who has seen 238 acres turn into 142 knows to test generated code on a shape whose area is already known.',
    closer: 'For Birkenhead teenagers, being able to test machine-written code against answers already known is worth a great deal in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Wallasey to West Kirby, taught online',
    intro: 'All that any Wirral home needs is a computer and a steady internet connection.',
    cells: [
      { h3: 'Learners at the keyboard', p: 'Students type their own programs while the tutor follows along by screen share and asks guiding questions.' },
      { h3: 'Begin at the right point', p: 'The free lesson, not only the school year, decides where a Year 3 or Year 13 learner begins, and the exam board is noted.' },
      { h3: 'First lesson, no fee', p: 'A full free lesson that ends with a plain course suggestion.' },
      { h3: 'Level-matched groups', p: 'Five to ten UK learners at one stage.' },
      { h3: 'Two sessions weekly', p: 'Holidays stay lesson-free.' },
      { h3: 'Your time holds', p: 'We shift with the UK clocks, so the slot does not move.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five learners at the same level, all free at the same hour, rarely live in one Wirral town. Online classes give each of them a proper match.' }
  },

  fees: {
    h2: 'Birkenhead fees',
    intro: 'Birkenhead is billed at our one international rate, used for every country apart from India.',
    first: 'A full lesson with no charge, and a course suggestion after it.',
    group: 'Around eight live group lessons in a month.',
    private: 'Around eight live one-to-one lessons in a month.',
    closer: 'All fees are in US dollars rather than sterling. Invoices start after the free lesson has agreed a course and a slot each week; holiday weeks, missed sessions and moving between formats are explained under pricing.'
  },

  reviewsH2: 'Merseyside and UK families on Google',

  book: {
    h2: 'Book a free Birkenhead lesson',
    intro: 'Tell us the learner\'s age or year group and one interest. A first lesson could be a Scratch drawing game, a first Python program, a short AI activity, or measuring a shape with the shoelace formula.',
    success: 'Thank you. We have received your Birkenhead request.'
  },

  faq: {
    h2: 'Birkenhead questions',
    intro: 'The park project, Wirral figures and lesson details.',
    items: [
      { q: 'What is the population of Birkenhead?', a: 'The ONS gives 109,835 for the Birkenhead built-up area at the 2021 census; Wirral borough as a whole had 320,196.' },
      { q: 'Can Birkenhead learners study coding and AI online?', a: 'Yes. Every lesson is taught live over video, so anyone on Wirral aged 6 to 67 can take part.' },
      { q: 'What is the Birkenhead Park project?', a: 'Learners compute the park\'s area from its OpenStreetMap outline and compare it with the acres Frederick Law Olmsted recorded.' },
      { q: 'How big is Birkenhead Park by your measurement?', a: 'About 142.5 acres for the current OpenStreetMap outline, measured on the WGS84 ellipsoid.' },
      { q: 'Why does the latitude matter?', a: 'A degree of longitude at Birkenhead is only about 60 percent as long as a degree of latitude; ignoring that inflates the area to 238 acres.' },
      { q: 'Do lessons take place in person?', a: 'No. All lessons are live online.' },
      { q: 'Is there help for GCSE and A level?', a: 'We support maths and computing students at both stages, working on real understanding rather than any promised grade.' },
      { q: 'Which ages do you teach?', a: 'Ages 6 to 67.' },
      { q: 'What are the fees?', a: 'The first lesson costs nothing. Then a group place is USD 100 a month, and private lessons are USD 150 a month.' },
      { q: 'Do lessons stop in the school holidays?', a: 'Yes; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Pages across the Mersey and beyond',
    html: 'Across the river, <a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool</a> has its own page, and <a class="cg-inline-link" href="/best-coding-class-in-chester">Chester</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-warrington">Warrington</a> are nearby too. The county is on <a class="cg-inline-link" href="/coding-classes-in-merseyside">Merseyside</a>, the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links everything.',
    waLabel: 'Message our team on WhatsApp'
  },

  footerHeading: 'Birkenhead and Merseyside',
  footerPlaces: [
    { href: '/coding-classes-in-merseyside', label: 'Merseyside' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bkh .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.9vw, 2.6rem); }
.cg-root.cg-bkh .cg-hero h1 { font-weight: 740; letter-spacing: -0.021em; line-height: 1.07; }
.cg-root.cg-bkh .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-bkh .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bkh .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.017em; }
.cg-root.cg-bkh .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-bkh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bkh .cg-table th { letter-spacing: 0.045em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-bkh .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-bkh .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Wirral (E08000015). Nomis Census 2021 TS007A: total 320,196; 20 to 24 15,076 (4.7%, England 6.0%); 25 to 29 17,866 (5.6%, 6.6%); 55 to 59 23,934 (7.5%, 6.7%); 60 to 64 21,519 (6.7%, 5.8%); 65 to 69 18,918 (5.9%, 4.9%); 70 to 74 19,103 (6.0%, 5.0%). ONS 2021 BUAs: Birkenhead 109,835; Wallasey 85,610; Bebington 57,600; Heswall 29,075; West Kirby 13,380; Hoylake 5,315. Project Gutenberg 70767, Frederick Law Olmsted, Landscape Architect (1922), reprinting Walks and Talks of an American Farmer in England (1852; 1850 visit): Paxton "June, 1844" to "June of the following year"; "one hundred and twenty acres"; "The remaining sixty acres"; "Carriage roads, thirty-four feet wide"; later article "a piece of ground of 185 acres". OpenStreetMap way 257607585 "Birkenhead Park" v6 (ODbL).',
    localProject: 'Shoelace on degrees 0.0000779 sq deg; no cosine 238.0 acres; local projection (R 6,371,008.8 m, cos 53.3947) -574,279 m2 = 141.9 acres (clockwise, negative); geographiclib WGS84 576,688 m2 = 142.5 acres, perimeter 5,222 m. Olmsted 120 (1850, park and garden), 120 + 60 = 180 implied, 185 (later article). Lesson family: polygon area from map coordinates, projection/cos(latitude), ring orientation, sphere vs ellipsoid, definitional boundary.',
    requiredMentions: [
      '320,196',
      '109,835',
      'Wallasey',
      'Heswall',
      'West Kirby',
      'Hoylake',
      'Birkenhead Park',
      'Frederick Law Olmsted',
      'Joseph Paxton',
      'geodesic'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Wirral and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Frederick Law Olmsted, Landscape Architect, 1822-1903 (ebook 70767).', url: 'https://www.gutenberg.org/ebooks/70767' },
      { claim: 'OpenStreetMap way 257607585, Birkenhead Park outline (ODbL).', url: 'https://www.openstreetmap.org/way/257607585' }
    ],
    rejectedClaims: [
      'That Birkenhead Park inspired Central Park: widely repeated but not stated in the source read; the page says only that Olmsted went on to plan Central Park, which the book documents (the Olmsted and Vaux plan).',
      'The park\'s official area today or listing grade: Historic England returned 403 earlier; not claimed.',
      'Roads or features inside the OpenStreetMap outline: not checked on the ground; the page says the outline is one ring.',
      'Olmsted\'s dollar figures for plots and cost: money, not used.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
