'use strict';
// Wiltshire (cg- county index, UK cluster Phase 7, row 254). Two unitary councils: Wiltshire and Swindon. Spine: does
// the rising sun ever line up with Box Tunnel? Sources read raw 26 September 2026: Historic England NHLE 1409161, Box
// Tunnel East Portal, Corsham, Grade II ("Tall Bath stone tunnel portal constructed in 1836-41"; "At 1.8 miles it was of
// unprecedented length and by far the longest of the eleven tunnels on the route. It is arrow-straight and incorporates
// an incline of 1/100 down towards Bath"; "its austere design by Isambard Kingdom Brunel"; the Great Western line "At 118
// miles"). NHLE 1284962, West Portal of Box Tunnel, Grade II*. NHLE points: west portal E 382927 N 168905 (51.41890,
// -2.24691); east portal E 385800 N 169425 (51.42365, -2.20561). English Heritage pages returned 403 (logged).
// Our geometry (scratchpad wil/box.py, box2.py): portal-to-portal distance by Pythagoras 2,919.7 m against 1.8 miles =
// 2,896.8 m; grid bearing west to east 79.74 degrees, true bearing 79.53 (grid north 0.21 degrees off true north here);
// bore slope atan(1/100) = 0.573 degrees rising eastward. NOAA solar position (geometric, no refraction, no terrain):
// looking east from the west portal in 2027, the sun crosses the tunnel bearing at altitude 0.31 degrees on 7 April and
// 0.79 on 8 April (about 06:39 to 06:40 UK summer time), and 0.48 on 5 September (06:36): within the sun's own radius
// (0.27 degrees) of the bore line on those three mornings; 9 April 1.27, 6 September 0.01.
// Lesson family: coordinate geometry with Pythagoras and atan2 bearings, grid versus true north, and solving for when two
// angles match; screened (Box Tunnel: 0 hits). Solar position formulas were used in East Sussex for solar noon; here
// they serve an alignment question on different data.
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (our sum 743,740); ONS built-up areas, all inside,
// agree with our OA sums. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'WILTSHIRE', blurb: 'Swindon, Salisbury and the market towns, and a Brunel lesson: use the official coordinates to find the mornings the sun lines up with Box Tunnel.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-wiltshire',
  code: 'wil',
  accent: '#3D6B25',
  accentRationale: 'Wiltshire: a chalk-downland green from the solver (5.08:1 on the darkest paper tint), brighter and yellower than the Nottinghamshire and South Yorkshire greens',
  pageType: 'governorate',
  place: {
    name: 'Wiltshire',
    eyebrow: 'Wiltshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'South West England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Salisbury', href: '/best-coding-class-in-salisbury' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wiltshire',
  title: 'Coding Classes in Wiltshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Wiltshire, from Swindon, Salisbury and Trowbridge to Chippenham, Calne, Devizes, Melksham and Warminster.',
  ogDescription: 'Coding classes for all of Wiltshire, and a Box Tunnel project: turn Historic England coordinates into a bearing and find the mornings the sun shines straight down the line.',
  twitterDescription: 'Wiltshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Wiltshire',
    description: 'Ability-placed online coding, Python, geometry and mathematics for children, teenagers and adults across Wiltshire, taught live in English.'
  },

  h1: 'Coding classes in Wiltshire',
  capsuleQ: 'What are the best coding classes in Wiltshire?',
  capsule: 'Wiltshire as a county is two unitary councils, Wiltshire and Swindon, with 743,740 residents at the 2021 Census by our addition of the two totals. Swindon is by far the largest town, followed by Salisbury, Trowbridge and Chippenham, then a ring of market towns. Our lessons are live over video, taught from India, and each learner is placed by ability, whatever their age. Coding, Python and maths are taught to learners aged 6 to 67, either on their own with a teacher or in groups of five to ten. The Wiltshire project starts at Box Tunnel, near Corsham. Try a lesson at no cost; staying on is USD 100 each month in a group or USD 150 each month privately.',
  lead: 'Historic England describes Box Tunnel, built between 1836 and 1841 to a design by Isambard Kingdom Brunel, as 1.8 miles long, arrow-straight, and on an incline of 1 in 100 down towards Bath, so it climbs as you head east. Its list entries also give map coordinates for both portals. Those few numbers are enough to ask a lovely question: is there any morning when the rising sun lines up with the tunnel and shines straight down it? This page\'s project works it out in Python. It checks the tunnel\'s length with Pythagoras, turns the coordinates into a compass bearing, corrects for the difference between map north and true north, and then searches a year of sunrises for the moment the angles agree.',
  wa: 'Hello Modern Age Coders, we are in Wiltshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Wiltshire',
    h2: 'Where Wiltshire learners begin',
    intro: 'A seven-year-old in Devizes who loves maps, a Year 8 in Chippenham discovering Pythagoras, a Year 12 in Salisbury studying A level maths, and an adult in Swindon who wants to program properly. Each starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, with angles, directions and moving sprites.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, including Pythagoras, angles and coordinates as Python projects.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', band: 'Ages 16 to 18', note: 'A level maths across pure, mechanics and statistics, with trigonometry that coding brings to life.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for adults, building towards real projects with real data.' }
    ]
  },

  sections: [
    {
      id: 'wiltshire', tint: '', eyebrow: 'Wiltshire in figures',
      h2: '743,740 people across Wiltshire and Swindon',
      intro: 'The two council figures come from the 2021 Census on Nomis; putting them together is our step. Towns are ONS built-up areas, which we recounted from census output areas.',
      body: [
        { kind: 'table', caption: 'Wiltshire\'s twelve largest built-up areas, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Swindon', '183,680', 'Devizes', '19,490'],
          ['Salisbury', '47,690', 'Melksham', '18,280'],
          ['Trowbridge', '43,750', 'Warminster', '18,020'],
          ['Chippenham', '36,090', 'Westbury', '16,395'],
          ['Stratton St Margaret', '20,690', 'Royal Wootton Bassett', '13,005'],
          ['Calne', '19,725', 'Amesbury', '12,680']
        ] },
        { kind: 'p', text: 'Wiltshire Council covers 510,333 people and Swindon 233,407. Swindon\'s built-up area reaches a little into Wiltshire Council\'s area, while Stratton St Margaret is counted as a place of its own. Beyond the table come Corsham, Tidworth, Bradford-on-Avon and Marlborough. Every town sits inside the county and matches our own count to within a handful of people. Term dates come from the two councils and from academy trusts; we have not read them, so each family tells us its own.' },
        { kind: 'callout', h3: 'Salisbury has its own page', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-salisbury">Salisbury</a> page searches Magna Carta. Neighbouring counties with pages include <a class="cg-inline-link" href="/coding-classes-in-somerset">Somerset</a>, <a class="cg-inline-link" href="/coding-classes-in-dorset">Dorset</a>, <a class="cg-inline-link" href="/coding-classes-in-hampshire">Hampshire</a>, <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a>, <a class="cg-inline-link" href="/coding-classes-in-oxfordshire">Oxfordshire</a> and <a class="cg-inline-link" href="/coding-classes-in-gloucestershire">Gloucestershire</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Wiltshire project',
      h2: 'Sunrise down Brunel\'s tunnel',
      intro: 'Two points from an official list, Pythagoras, a compass bearing, and a year of sunrises.',
      body: [
        { kind: 'p', text: 'Historic England lists the two portals separately and gives each a grid reference in metres east and north. The west portal is at 382,927 east and 168,905 north; the east portal at 385,800 east and 169,425 north. The learner first checks the data with Pythagoras: the straight-line distance is the square root of 2,873² plus 520², which is 2,919.7 metres. The list entry says 1.8 miles, or 2,896.8 metres. The two agree to within 23 metres, less than one per cent, which is reassuring, since the listed points mark buildings rather than the exact track.' },
        { kind: 'p', text: 'Next, the direction. The atan2 function turns the same two differences into a bearing of 79.74 degrees from map north, a little north of due east. Map north on the British grid is not quite true north away from its central line, so the program converts both portals to latitude and longitude and recomputes: the true bearing is 79.53 degrees, a difference of 0.21 degrees. The gradient of 1 in 100 also matters: looking east from the west portal, the bore rises at 0.573 degrees above level.' },
        { kind: 'table', caption: 'Mornings when the sun crosses the tunnel\'s bearing near the horizon, 2027, our calculation', head: ['Date', 'UK time', 'Sun\'s height at that moment', 'On the tunnel\'s line?'], rows: [
          ['6 April', '06:38', '−0.17°', 'Just below'],
          ['7 April', '06:39', '0.31°', 'Yes, within the sun\'s disc'],
          ['8 April', '06:40', '0.79°', 'Yes, within the sun\'s disc'],
          ['9 April', '06:41', '1.27°', 'Just above'],
          ['5 September', '06:36', '0.48°', 'Yes, within the sun\'s disc']
        ] },
        { kind: 'p', text: 'Finally the sun. Using standard formulas for the sun\'s position, the program steps through every morning of 2027, finds the moment the sun\'s compass direction equals the tunnel\'s, and records how high it is then. For the sun to shine straight along the bore its height must be close to the 0.573-degree slope. That happens on two mornings in early April, the 7th and 8th, and once in early September, the 5th, a little after half past six in the morning.' },
        { kind: 'p', text: 'Now the honest part. Our calculation ignores the atmosphere, which bends light near the horizon by roughly half a degree and would shift the answer by about a day. It ignores the hills and the deep cutting beyond the east portal, which may hide the low sun entirely. And the listed points are not the exact centre line of the track. Every answer in maths or code rests on assumptions, and saying what they are is part of the answer.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 9 to 12', p: 'Plot two points on squared paper, measure the line between them, and check it with Pythagoras on a calculator.' },
          { h3: 'Ages 12 to 15', p: 'Compute the tunnel\'s length and bearing in Python with math.hypot and math.atan2, and compare the length with the list entry.' },
          { h3: 'Ages 15 and up', p: 'Add a sun-position function, search a year of mornings for the alignment, and then add refraction and see which dates move.' }
        ] },
        { kind: 'callout', h3: 'Official facts and our model', p: 'The tunnel\'s dates, length, straightness, gradient and portal locations come from Historic England\'s list entries. The distances, bearings, dates and times on this page are our own calculation from those figures and standard sun formulas, without refraction or terrain. We make no claim that sunlight can actually be seen through the tunnel.' }
      ]
    },
    {
      id: 'box-tunnel', tint: 'deep', eyebrow: 'Why Box Tunnel',
      h2: 'Brunel\'s straight line through the hill',
      intro: 'The Wiltshire link, in Historic England\'s own words.',
      body: [
        { kind: 'table', caption: 'Box Tunnel in its Historic England list entries, 1409161 and 1284962', head: ['Point', 'The list entry says'], rows: [
          ['Built', 'The east portal was constructed in 1836 to 1841; the tunnel was the last structure on the line to be completed, in 1841.'],
          ['Designer', 'Its austere design is by Isambard Kingdom Brunel.'],
          ['Length', '1.8 miles, of unprecedented length and by far the longest of the eleven tunnels on the route.'],
          ['Shape', 'Arrow-straight, with an incline of 1 in 100 down towards Bath.'],
          ['Listing', 'East portal Grade II; west portal Grade II*.']
        ] },
        { kind: 'p', text: 'The list entry records trial shafts dug in 1836 and construction shafts begun the following year; work at different points underground only joins up if the geometry is right, which is exactly the kind of geometry this project uses. Surveyors of the 1830s did it with instruments and hand calculation; today the same checks take a few lines of code. A Wiltshire student who has turned two grid references into a length, a bearing and a sunrise date has learned how much careful work a handful of numbers can support, and where its limits are.' },
        { kind: 'p', text: 'We have no connection with Historic England, Network Rail or either Wiltshire council. The list entries are Historic England\'s; our calculations and any errors are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-salisbury">Salisbury</a> and <a class="cg-inline-link" href="/best-coding-class-in-bath">Bath</a> have their own pages, with <a class="cg-inline-link" href="/coding-classes-in-somerset">Somerset</a> to the west and <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a> to the east.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From turning sprites to trigonometry in code',
    intro: 'The free lesson finds the right first step. Age is a clue, never the rule.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Turn and move', p: 'Block coding where sprites turn by angles and move by steps across a grid.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Shapes and distances', p: 'Python with coordinates, distances and Pythagoras, drawn on screen.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'Trigonometry at work', p: 'GCSE and A level maths alongside Python that uses angles, bearings and real data.', courses: ['a-level-maths-course-pure-mechanics-statistics', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Programs for real problems', p: 'Python for adults, from basics to projects that answer genuine questions.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and assumptions',
    h2: 'Ask an AI when the sun shines through Box Tunnel. What will it leave out?',
    intro: 'A precise-looking date is only as good as the assumptions behind it.',
    p1: 'An AI assistant might give you a confident date for the sun lining up with the tunnel, perhaps repeating a story it has read somewhere. Unless it shows its working, you cannot tell whether it used the real coordinates, corrected for map north, allowed for the gradient, or ignored the atmosphere and the hills. Our own answer, 7 and 8 April and 5 September in 2027, comes with every one of those choices written down.',
    p2: 'A Wiltshire student who has done the calculation knows that the value of an answer lies partly in its list of assumptions. That is a habit worth bringing to every AI answer: ask what it assumed, and check the parts you can.',
    closer: 'So a young person in Wiltshire should learn to code in 2026 to show the working behind an answer, not just the answer.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'From the Vale of Pewsey to Swindon, at home',
    intro: 'Wiltshire is broad and rural, and many families are a long drive from the nearest club. Online lessons cut out the drive.',
    cells: [
      { h3: 'Learning at home', p: 'A cottage near Marlborough, a house in Trowbridge, a flat in Swindon. The teacher watches the shared screen while the learner writes the code.' },
      { h3: 'School words, unchanged', p: 'Year groups, key stages, GCSEs and A levels are named the way Wiltshire schools name them, and teaching is in English.' },
      { h3: 'Free to start', p: 'A real first lesson, then honest advice on level and course. No card details are needed.' },
      { h3: 'Classmates at your stage', p: 'Groups of five to ten learners at one level, from Wiltshire and well beyond.' },
      { h3: 'Holidays kept', p: 'Two lessons a week suits most learners, with pauses for your school\'s own holidays.' },
      { h3: 'Fixed in UK time', p: 'Your slot stays at the same UK time all year; the teacher, keeping India time several hours ahead, adjusts when the clocks change.' }
    ],
    spec: { title: 'Why groups follow level', p: 'Across a county of market towns and villages, five learners at one stage free on the same evening rarely live close together. Grouping by level lets a learner in Amesbury or Bradford-on-Avon join a class that fits.' }
  },

  fees: {
    h2: 'Fees in Wiltshire',
    intro: 'Calne or Corsham, the fee is the same, as it is in every country we teach apart from India.',
    first: 'A full lesson of real work, then advice on level and course.',
    group: 'About eight lessons a month with five to ten learners at one level.',
    private: 'About eight lessons a month, one-to-one.',
    closer: 'Fees are in US dollars, not pounds. Billing begins after the free lesson, once a course and a regular slot are fixed. Pausing, a missed lesson, or moving from group to private are all explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from our families',

  book: {
    h2: 'Book a free Wiltshire lesson',
    intro: 'Send the learner\'s age or year group and a favourite subject. A first lesson might be a Scratch compass game, a Python Pythagoras checker, or the Box Tunnel sunrise on this page.',
    success: 'Thank you. Your Wiltshire request has been received.'
  },

  faq: {
    h2: 'Wiltshire questions',
    intro: 'The county, the tunnel project and practical details.',
    items: [
      { q: 'How many people live in Wiltshire?', a: 'Wiltshire Council\'s area had 510,333 usual residents and Swindon 233,407 at the 2021 Census, 743,740 together by our sum of the ONS figures on Nomis.' },
      { q: 'What are the largest towns in Wiltshire?', a: 'By ONS built-up area: Swindon 183,680, Salisbury 47,690, Trowbridge 43,750, Chippenham 36,090 and Stratton St Margaret 20,690.' },
      { q: 'What is the Box Tunnel project?', a: 'Learners take the Historic England grid references for both portals, check the tunnel\'s length with Pythagoras, compute its bearing, and search a year of sunrises for mornings when the sun lines up with the bore: 7 and 8 April and 5 September in 2027, in our model.' },
      { q: 'Why is map north different from true north?', a: 'The British grid is a flat projection whose north lines match true north only along its central line. Near Box the difference is about 0.21 degrees, small but worth correcting in precise work.' },
      { q: 'Can you actually see the sun through the tunnel?', a: 'We do not claim so. Our calculation ignores the atmosphere\'s bending of light, the hills and the cutting beyond the east portal, all of which could change or block the view.' },
      { q: 'Is there a Wiltshire classroom?', a: 'No. Lessons run live over video, so Tidworth is as near to class as central Swindon.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67. Children start with blocks, Python usually begins around ten, teenagers combine coding with GCSE or A level maths, and adults learn Python. The free lesson sets the level.' },
      { q: 'Do you teach A level maths?', a: 'Yes, across pure, mechanics and statistics, with coding used to explore ideas like trigonometry. We help learners understand; we do not promise grades.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free. Groups are then USD 100 a month and one-to-one lessons USD 150 a month, with no joining fee.' },
      { q: 'Do you pause for Wiltshire school holidays?', a: 'Yes, if you like. Wiltshire Council, Swindon Borough Council and academy trusts publish dates, and we plan breaks around yours.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages around Wiltshire',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-salisbury">Salisbury</a> and <a class="cg-inline-link" href="/best-coding-class-in-bath">Bath</a>, then <a class="cg-inline-link" href="/coding-classes-in-somerset">Somerset</a>, <a class="cg-inline-link" href="/coding-classes-in-dorset">Dorset</a>, <a class="cg-inline-link" href="/coding-classes-in-hampshire">Hampshire</a> and <a class="cg-inline-link" href="/coding-classes-in-gloucestershire">Gloucestershire</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every other area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wiltshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-salisbury', label: 'Salisbury' },
    { href: '/coding-classes-in-somerset', label: 'Somerset' }
  ],

  personalityCss: `
.cg-root.cg-wil .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-wil .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-wil .cg-capsule { border-top: 5px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-wil .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wil .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.017em; }
.cg-root.cg-wil .cg-table caption { font-weight: 600; font-style: italic; text-align: left; }
.cg-root.cg-wil .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wil .cg-table th { letter-spacing: 0.04em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-wil .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-wil .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Wiltshire: unitary councils Wiltshire and Swindon. ONS Census 2021 TS001 via Nomis: Wiltshire 510,333; Swindon 233,407; our sum 743,740. ONS built-up areas (published; agree with our OA sums): Swindon 183,680 (Swindon, Wiltshire); Salisbury 47,690; Trowbridge 43,750; Chippenham 36,090; Stratton St Margaret 20,690; Calne 19,725; Devizes 19,490; Melksham 18,280; Warminster 18,020; Westbury 16,395; Royal Wootton Bassett 13,005; Amesbury 12,680; Corsham 10,890; Tidworth 10,690; Bradford-on-Avon 9,865; Marlborough 8,830. Historic England NHLE 1409161 (Box Tunnel East Portal, Corsham, Grade II): "Tall Bath stone tunnel portal constructed in 1836-41"; "its austere design by Isambard Kingdom Brunel"; "At 1.8 miles it was of unprecedented length and by far the longest of the eleven tunnels on the route. It is arrow-straight and incorporates an incline of 1/100 down towards Bath"; "it was the last structure to be completed, in 1841". NHLE 1284962 West Portal of Box Tunnel, Grade II*. NHLE points: west E 382927 N 168905; east E 385800 N 169425.',
    localProject: 'Coordinate geometry: Pythagoras distance 2,919.7 m vs 1.8 miles = 2,896.8 m (difference 23 m); atan2 grid bearing 79.74 degrees; true bearing from WGS84 points 79.53; grid-true 0.21; slope atan(0.01) = 0.573 degrees. NOAA geometric solar position (no refraction, no terrain), 2027, morning crossing of azimuth 79.53 from the west portal found by bisection: 6 April -0.17 degrees; 7 April 0.31 (06:39 UK summer time); 8 April 0.79 (06:40); 9 April 1.27; 5 September 0.48 (06:36); 6 September 0.01. Within 0.27 degrees (solar radius) of 0.573: 7 April, 8 April, 5 September. Page states refraction of roughly half a degree, terrain and point-location caveats, and claims no visible alignment. AI angle: answers without stated assumptions. Lesson family: Pythagoras and atan2 bearings, grid vs true north, solving for matching angles.',
    requiredMentions: [
      '743,740',
      'Box Tunnel',
      '1409161',
      '2,919.7',
      'arrow-straight',
      'Stratton St Margaret',
      'Royal Wootton Bassett',
      'Corsham',
      'Melksham',
      'Devizes',
      'Calne'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Wiltshire and Swindon, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Wiltshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Historic England, National Heritage List entry 1409161: Box Tunnel East Portal (dates, designer, length, straightness, gradient).', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1409161' },
      { claim: 'Historic England, National Heritage List entry 1284962: West Portal of Box Tunnel, and NHLE coordinates for both portals.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1284962' }
    ],
    rejectedClaims: [
      'The story that the sun shines through the tunnel on a particular day: not read from a primary source, so not repeated.',
      'Stonehenge and Old Sarum facts: English Heritage pages returned 403, not retried, not used.',
      'That sunlight can actually be seen through the tunnel: not claimed; terrain and refraction are named as reasons.',
      'Exact refraction correction: given only as roughly half a degree, a standard figure, not computed.',
      'Wiltshire school term dates: none read.',
      'Named Wiltshire schools: none named.'
    ]
  }
};
