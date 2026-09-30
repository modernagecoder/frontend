'use strict';
// Scarborough (cg- town page, UK cluster Phase 10, towns band B, row 483). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can one number stand in for a position on a
// map, so that sorting by it keeps neighbours together? (Z-order curve / Morton code by bit interleaving, the idea behind
// a geohash; how well it keeps true nearest neighbours adjacent, against postcode order and a one-axis sort; the seam).
// Data (read 30 September 2026): Ordnance Survey Code-Point Open (dataset version 2026.3.0, OGL): postcode districts YO11
// and YO12, 1,685 postcodes with a grid reference, at 1,606 distinct points (YO11 730, YO12 876), spanning 11,163 m by
// 16,220 m. These districts include Eastfield, Cayton, Seamer and Crossgates as well as Scarborough itself.
// Our run (scratchpad scb/zo.py): true nearest neighbour of each point by k-d tree (mean 77.1 m). Z key: 8 m cells, 11
// bits per axis interleaved into 22 bits. For each ordering, the share of points whose true nearest neighbour sits next
// to them in the list / within 8 places, and the mean distance between consecutive entries: shuffled 0.0% / 0.5% /
// 3,416 m; easting only 5.3% / 40.8% / 2,216 m; postcode A to Z 26.7% / 61.3% / 503 m; Z-order 57.3% / 85.4% / 218 m.
// Worst Z-order gap 1,503 places; 14 points have a nearest neighbour across the first split of the square.
// Lesson family: Z-order curve / Morton code / geohash as a locality-preserving key. Screened: "Z-order", "geohash" 0
// hits. (First plan, the Clark-Evans nearest neighbour index, dropped: the Norwich page teaches it.) Hammersmith uses a
// Hilbert curve as a touring heuristic, a different question; Corby and Southampton use Code-Point for sorting and hashing.
// Place facts: ONS 2021 BUAs (published): Scarborough 59,505; Filey 6,665. postcodes.io suburban areas with their closest
// postcode in YO11 or YO12 (our check by outcode, NOT a built-up area test): Falsgrave, Northstead, Barrowcliff, Newby,
// Throxenby, Edgehill (YO12); Weaponness, South Cliff, Wheatcroft, Eastfield, Osgodby, Cayton (YO11).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'SCARBOROUGH', label: 'Scarborough', blurb: 'Online coding and Python classes for Scarborough, with a project that turns a map position into one sortable number.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-scarborough',
  code: 'scb',
  accent: '#1F5A86',
  accentRationale: 'Scarborough: a North Sea blue (6.91:1 contrast), hand-picked and unused elsewhere',
  pageType: 'city',
  place: {
    name: 'Scarborough',
    eyebrow: 'Scarborough, North Yorkshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'North Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-yorkshire-and-the-humber', name: 'Yorkshire and the Humber' }],
  nav: [
    { label: 'North Yorkshire', href: '/coding-classes-in-north-yorkshire' },
    { label: 'York', href: '/best-coding-class-in-york' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Scarborough, England',
  title: 'Online Coding and Python Classes in Scarborough | Ages 6 to 67',
  description: 'Online coding, Python, AI and vibe coding classes taught live for Scarborough, Falsgrave, Northstead, Newby and Eastfield, ages 6 to 67. First lesson free.',
  ogDescription: 'Online coding and Python classes for Scarborough, with a project that weaves two grid references into one number and tests whether sorting by it keeps neighbours together.',
  twitterDescription: 'Scarborough coding, Python, AI and vibe coding classes on live video, ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Scarborough',
    description: 'Python, coding, AI, vibe coding and maths lessons given live online to children, teenagers and adults in Scarborough and elsewhere in North Yorkshire.'
  },

  h1: 'Online coding and Python classes in Scarborough',
  capsuleQ: 'What are the best online coding and Python classes for Scarborough?',
  capsule: 'The ONS recorded 59,505 residents in the Scarborough built-up area at the 2021 census, in North Yorkshire. Falsgrave, Northstead, Barrowcliff, Newby, Weaponness and Eastfield are all recorded as suburban areas in the YO11 and YO12 postcode districts. Coding, Python, AI, vibe coding and maths are taught here by live video, to learners from six to 67, by tutors who are based in India. Lessons are one-to-one or in a class of five to ten at a single level, and they start from how to reason about a problem before any tool is opened. There is no charge for the first lesson, and it finishes with our advice on a course. Monthly fees afterwards are USD 100 in a group and USD 150 for private tuition. The Scarborough project asks a question every map app has to answer: how do you sort places, which have two coordinates, into a single list that keeps neighbours together?',
  lead: 'A list has one dimension and a map has two. Sort 1,685 postcodes by how far east they are and two that share a street can end up hundreds of rows apart, because every postcode between them on the east to west scale, however far north or south, gets slotted in between. Databases meet this problem constantly, because so much work with location data starts by finding what is close by. One old and elegant answer is to weave the two coordinates together, bit by bit, into a single number. It is called a Z-order curve, it takes about six lines of Python, and the same trick sits underneath the geohash codes that many apps use.',
  wa: 'Hello Modern Age Coders, I am in Scarborough and would like to book a free coding or Python lesson.',

  picks: {
    eyebrow: 'Scarborough course picks',
    h2: 'Python, thinking and AI courses for Scarborough',
    intro: 'Choose by age. A free live lesson opens each course, with no payment details requested.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: grids, coordinates, ordering and the idea of a code that stands for a place.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games made by describing them to an AI, then tested square by square.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python through to binary, bit operations and sorting real postcode data.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from nothing to data work, spatial indexes and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Scarborough and North Yorkshire',
      h2: 'Scarborough, Falsgrave, Northstead, Newby and Eastfield',
      intro: 'Two ONS built-up areas, and the suburbs recorded in the town\'s two postcode districts.',
      body: [
        { kind: 'table', caption: 'Two ONS built-up areas in North Yorkshire, residents at the 2021 census', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Scarborough', '59,505'],
          ['Filey', '6,665']
        ] },
        { kind: 'p', text: 'Both are ONS figures and they are not added together here. Postcodes.io records Falsgrave, Northstead, Barrowcliff, Newby, Throxenby and Edgehill as suburban areas whose closest postcode is in YO12, and Weaponness, South Cliff, Wheatcroft, Eastfield, Osgodby and Cayton as suburban areas whose closest postcode is in YO11. That is a check by postcode district only; we have not tested which of them the ONS places inside the built-up area. Schools in North Yorkshire teach England\'s national curriculum up to GCSE and A level, and we fit lessons around the term dates you give us.' },
        { kind: 'callout', h3: 'North Yorkshire, the wider region and our approach', p: 'See also <a class="cg-inline-link" href="/coding-classes-in-north-yorkshire">coding classes in North Yorkshire</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a>. We explain why reasoning is taught ahead of AI tools on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Scarborough project',
      h2: 'The Z-order curve: one number for a place on the map',
      intro: 'Four ways to put postcodes in a list, scored on whether neighbours stay together.',
      body: [
        { kind: 'p', text: 'Ordnance Survey\'s free Code-Point Open file gives a grid reference for every postcode. The learner keeps the two districts YO11 and YO12, which cover Scarborough together with places such as Eastfield, Cayton and Seamer: 1,685 postcodes at 1,606 distinct points, in a rectangle 11,163 metres wide and 16,220 metres tall. For each point the program first finds its true nearest neighbour, which is 77.1 metres away on average. Then it builds the Z key. Each coordinate is turned into an 11-bit cell number, using cells eight metres across, and the two are interleaved: one bit of easting, one bit of northing, and so on, giving a single 22-bit number.' },
        { kind: 'p', text: 'Sorting by that number traces a path shaped like a chain of letter Zs across the map, filling one small square before moving to the next. The test is simple. Put the points in some order, then ask how often a point\'s true nearest neighbour is the very next entry in the list, and how often it is within eight places.' },
        { kind: 'table', caption: 'How well four orderings of 1,606 Scarborough postcode points keep nearest neighbours together (our Python run on OS Code-Point Open)', head: ['Ordering', 'Neighbour is adjacent', 'Neighbour within 8 places', 'Mean hop to next entry'], rows: [
          ['Shuffled at random', '0.0%', '0.5%', '3,416 m'],
          ['By easting only', '5.3%', '40.8%', '2,216 m'],
          ['Postcode, A to Z', '26.7%', '61.3%', '503 m'],
          ['Z-order key', '57.3%', '85.4%', '218 m']
        ] },
        { kind: 'p', text: 'Alphabetical postcode order already carries some geography, which is why it beats a one-axis sort. The Z key does much better than either: for 85.4% of points, checking eight entries on each side of it in the list finds the true nearest neighbour, which is 16 comparisons where a full scan needs 1,605. The remaining cases are the catch. A Z curve has seams where it jumps from one large square to the next, and two points on opposite sides of a seam share almost none of their leading bits. Fourteen points have their nearest neighbour across the first split of the map, and the worst pair sits 1,503 places apart in a list of 1,606. A short prefix in common means close together; the reverse is not guaranteed.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Number the squares of a 4 by 4 grid by drawing Zs inside Zs, then find two touching squares with far-apart numbers.' },
          { h3: 'Ages 11 to 15', p: 'Write a Python function that interleaves the bits of two small numbers, and check it by hand.' },
          { h3: 'Ages 15 and up', p: 'Key all 1,606 points, sort them, and measure how often the nearest neighbour is within eight places.' }
        ] },
        { kind: 'callout', h3: 'Postcode data and our measurements', p: 'Postcode grid references are from Ordnance Survey Code-Point Open, used under the Open Government Licence. Contains OS data, Crown copyright and database right 2026. Contains Royal Mail data, Royal Mail copyright and database right 2026. The keys, orderings and percentages are our own calculations.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Codes, prefixes and AI',
      h2: 'What a Z-order key teaches about vibe coding and AI agents',
      intro: 'A clever shortcut is safe only when you know where it breaks.',
      body: [
        { kind: 'table', caption: 'From Scarborough\'s postcode list to working with AI', head: ['In the Z-order project', 'When AI writes or uses location code'], rows: [
          ['85.4% found within eight places', 'A fast method that is usually right still needs a fallback'],
          ['Worst pair 1,503 places apart', 'Test the edges, not only the typical case'],
          ['A to Z order scored 26.7%', 'Check what structure the data already has'],
          ['Easting alone scored 5.3%', 'Dropping a dimension loses information'],
          ['16 comparisons against 1,605', 'Know what speed is being bought, and with what']
        ] },
        { kind: 'p', text: 'Ask an AI to write a function that finds the closest shop or stop and it may well reach for a geohash prefix match, because that pattern is everywhere in its training data. It will seldom mention the seams. In vibe coding the learner specifies and the AI drafts, so our Scarborough students are taught to follow a draft with the question "which inputs would make this wrong?" and to write the test that finds out. For AI agents, which call such functions and act on whatever comes back, a silent miss at a boundary becomes a wrong action. We begin agent projects when a learner\'s Python no longer needs a tutor\'s help, typically at sixteen or over, and we teach Copilot Studio agents only in private lessons. The pages on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for students in the UK</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> say more.' },
        { kind: 'p', text: 'This page is independent of Ordnance Survey, Royal Mail, the ONS and postcodes.io. Their open data is used under licence, and none of them has reviewed our work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Route',
    h2: 'From grid squares to spatial keys in Python',
    intro: 'School years are only a rough guide. The trial lesson sets the real starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Grids, coordinates, patterns and putting things in order.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch and early Python with an AI helper and the child as tester.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python properly', p: 'Binary, functions, sorting and data, alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Python and algorithms', p: 'From first programs to indexes, search and agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and location data',
    h2: 'What is a Z-order curve, and how does a geohash turn a location into one code?',
    intro: 'A Z-order curve is a way of numbering the cells of a grid by interleaving the bits of the two coordinates, so that one sortable number stands for a position; a geohash does the same with latitude and longitude and writes the result as a short string of letters and digits.',
    p1: 'On 1,606 postcode points in Scarborough\'s YO11 and YO12 districts, sorting by a Z-order key put the true nearest neighbour next in the list for 57.3% of points, against 26.7% for alphabetical postcode order and 5.3% for a sort by easting alone.',
    p2: 'Having seen the seams, a learner checks any AI-written "find what is closest" code at the boundaries before relying on it.',
    closer: 'A Scarborough teenager who can interleave bits by hand knows what a location code can and cannot promise, which is the kind of knowledge that coding gives and prompting alone does not.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'Falsgrave to Eastfield, taught online',
    intro: 'A laptop or desktop and a steady connection for video are all that is required.',
    cells: [
      { h3: 'The learner types', p: 'Screen sharing lets the tutor see every keystroke. The learner writes the code and explains it back.' },
      { h3: 'A level check first', p: 'In the free lesson we find out what is known already and note any exam board.' },
      { h3: 'First one free', p: 'It is a complete lesson, there is no fee, and it ends with a course recommendation.' },
      { h3: 'Small, level classes', p: 'Groups are five to ten learners from across the UK at the same stage.' },
      { h3: 'Two lessons each week', p: 'With a pause for every school holiday.' },
      { h3: 'Steady timetable', p: 'The hour you choose is kept through both clock changes.' }
    ],
    spec: { title: 'Why online', p: 'A class of five at one level, all free at the same time, is rare in any single town. Teaching by video means the class can be drawn from the whole country.' }
  },

  fees: {
    h2: 'Scarborough fees',
    intro: 'Our international prices apply in Scarborough, as they do everywhere except India.',
    first: 'A full lesson at no cost, ending with a suggested course.',
    group: 'Eight or so live lessons per month in a small class.',
    private: 'Eight or so live lessons per month with a tutor to yourself.',
    closer: 'Prices are set and invoiced in US dollars, with no sterling equivalent published. Billing starts only when the trial has fixed a course and a weekly slot. The pricing page explains holidays, missed lessons and changing between group and private.'
  },

  reviewsH2: 'What families in Yorkshire and across the UK say on Google',

  book: {
    h2: 'Book a free Scarborough lesson',
    intro: 'We need an age or year group and one interest to plan the trial. It could be a grid-numbering puzzle, an AI-assisted Scratch game, a first Python function, or interleaving bits for real postcodes.',
    success: 'Thank you. We have received your Scarborough request.'
  },

  faq: {
    h2: 'Scarborough questions',
    intro: 'Z-order keys, geohashes, the postcode project, Python and the practical side.',
    items: [
      { q: 'What is the population of Scarborough?', a: 'The ONS counted 59,505 residents in the Scarborough built-up area at the 2021 census.' },
      { q: 'Are online coding and Python classes open to Scarborough learners?', a: 'Yes. Lessons are live on video for ages 6 to 67, so Falsgrave, Northstead, Newby, Eastfield and the villages around are all covered.' },
      { q: 'What is a geohash?', a: 'A short code for a location, made by interleaving the bits of its latitude and longitude and writing them in letters and digits. Places that share a long opening run of characters are close together.' },
      { q: 'What is a Morton code?', a: 'Another name for a Z-order key: the single number you get by interleaving the bits of two or more coordinates.' },
      { q: 'What does the Scarborough project measure?', a: 'Whether sorting 1,606 postcode points by a Z-order key keeps each point next to its true nearest neighbour. It does for 57.3% of points, and for 85.4% within eight places.' },
      { q: 'Is vibe coding part of the lessons?', a: 'Yes. Learners describe what they want, let an AI draft the code, and then test it, especially at the awkward edges.' },
      { q: 'How soon can someone work on AI agents?', a: 'As soon as their Python stands up without help, which is normally from sixteen. Copilot Studio agents are taught privately, not in groups.' },
      { q: 'Do lessons help with GCSE or A level computer science?', a: 'They cover the same ground, binary and algorithms included, with time to understand it. We do not promise grades.' },
      { q: 'What are the fees for Scarborough?', a: 'The trial is free. Group classes cost USD 100 a month and private lessons USD 150 a month.' },
      { q: 'Are there breaks for school holidays?', a: 'Yes. Give us the dates and we pause for them.' }
    ]
  },

  next: {
    eyebrow: 'Further afield',
    h2: 'More Yorkshire pages',
    html: 'Pages with projects of their own include <a class="cg-inline-link" href="/best-coding-class-in-york">York</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-harrogate">Harrogate</a>, <a class="cg-inline-link" href="/best-coding-class-in-hull">Hull</a> and <a class="cg-inline-link" href="/coding-classes-in-north-yorkshire">North Yorkshire</a>. Every UK page can be reached from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Scarborough and North Yorkshire',
  footerPlaces: [
    { href: '/coding-classes-in-north-yorkshire', label: 'North Yorkshire' },
    { href: '/coding-and-ai-classes-in-yorkshire-and-the-humber', label: 'Yorkshire and the Humber' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-scb .cg-hero-grid { align-items: stretch; gap: clamp(1.1rem, 3vw, 2.6rem); }
.cg-root.cg-scb .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.09; }
.cg-root.cg-scb .cg-capsule { border-bottom: 3px double var(--cg-accent); padding-bottom: 1.1rem; }
.cg-root.cg-scb .cg-eyebrow { letter-spacing: 0.08em; font-weight: 750; }
.cg-root.cg-scb .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.012em; }
.cg-root.cg-scb .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 600; letter-spacing: 0.01em; }
.cg-root.cg-scb .cg-table td { font-variant-numeric: tabular-nums; border-bottom: 1px dashed var(--cg-accent); }
.cg-root.cg-scb .cg-table th { font-size: 0.84rem; font-weight: 650; text-align: left; }
.cg-root.cg-scb .cg-ladder-col { border-top: 2px dashed var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-scb .cg-callout { border-left-width: 4px; border-radius: 8px; }
`,

  dossier: {
    curriculumAuthority: 'North Yorkshire (E06000065). ONS 2021 BUAs (published): Scarborough 59,505; Filey 6,665. postcodes.io suburban areas with closest postcode in YO12: Falsgrave, Northstead, Barrowcliff, Newby, Throxenby, Edgehill; in YO11: Weaponness, South Cliff, Wheatcroft, Eastfield, Osgodby, Cayton (checked by outcode only, not against the BUA).',
    localProject: 'OS Code-Point Open 2026.3.0: YO11 + YO12, 1,685 postcodes at 1,606 distinct points (730 + 876), extent 11,163 m x 16,220 m; mean true nearest neighbour 77.1 m. Z key: 8 m cells, 11 bits per axis, 22 bits. Nearest neighbour adjacent / within 8 places / mean hop: shuffled 0.0% / 0.5% / 3,416 m; easting 5.3% / 40.8% / 2,216 m; postcode A-Z 26.7% / 61.3% / 503 m; Z-order 57.3% / 85.4% / 218 m. Worst Z gap 1,503; 14 points split by the first seam. Lesson family: Z-order curve / Morton code / geohash.',
    requiredMentions: [
      'Z-order',
      'geohash',
      '59,505',
      '1,685',
      '1,606',
      '57.3%',
      '85.4%',
      'Falsgrave',
      'Northstead',
      'Barrowcliff'
    ],
    sources: [
      { claim: 'Ordnance Survey Code-Point Open, dataset version 2026.3.0, Open Government Licence; contains OS data and Royal Mail data.', url: 'https://www.ordnancesurvey.co.uk/products/code-point-open' },
      { claim: 'ONS 2021 built-up area populations (Census 2021).', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas around Scarborough and their closest postcodes.', url: 'https://api.postcodes.io/places?q=Falsgrave' }
    ],
    rejectedClaims: [
      'That the listed suburbs are inside the Scarborough built-up area: only their postcode district was checked.',
      'That YO11 and YO12 equal Scarborough: they also take in Eastfield, Cayton, Seamer and Crossgates; stated on the page.',
      'Resort, castle, harbour or tourism claims: not read from a source; not claimed.',
      'That a Z-order key always finds the nearest neighbour: 14.6% were missed within eight places.',
      'Sum of the two built-up areas: not added.',
      'Named schools, exam outcomes and sterling prices: none.'
    ]
  }
};
