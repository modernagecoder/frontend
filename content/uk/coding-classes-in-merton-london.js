'use strict';
// Merton (cg- London borough page, UK cluster Phase 5, row 183). Named sources only.
// Spine: which shapes can cover a floor? Historic England list entries 1080891 (Colour House at Messrs Liberty's Print
// Works, Grade II: colour house of a textile printing works, dated 1742) and 1193882 (Wheel house at Messrs Liberty's
// Printworks, Grade II: "The site has been used for printing textiles for the past two centuries", on part of the site of
// Merton Priory; C19 undershot wheel "with four sets of seven cast iron arms"; used for washing materials in the Wandle).
// Printed textiles repeat a unit across cloth: a tiling. Learners search every way regular polygons (3 to 42 sides) can
// meet at a point with angles summing to 360 degrees, using exact fractions: 17 combinations, 21 distinct arrangements
// round the point, 3 made of one shape only (triangles 6, squares 4, hexagons 3). Pentagons meet in (5, 5, 10) but a
// pentagon's 108 degrees does not divide 360; a heptagon's 128.57 degrees fits only in (3, 7, 42). Whether each
// arrangement extends across a whole plane is left as a learner test; no count of complete tilings is asserted.
// Lesson family: tessellation and exhaustive search over polygon angles with exact arithmetic; screened 25 September 2026
// (tessellat 0, vertex configuration 0). Merton Council's libraries page returned 403: not circumvented, no list.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'MERTON', blurb: 'Liberty\'s old print works, Eagle House and a project that searches every way regular shapes can tile a floor.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-merton-london',
  code: 'mrt',
  accent: '#451740',
  accentRationale: 'Merton: a madder-dye plum from the solver (11.76:1 on every paper tint), for a textile-printing page, redder than Kensington\'s aubergine',
  pageType: 'governorate',
  place: {
    name: 'Merton',
    eyebrow: 'London Borough of Merton',
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
  routeLabel: 'Merton, London',
  title: 'Coding Classes in Merton, Wimbledon, Mitcham | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Merton: Wimbledon, Mitcham, Morden, Raynes Park, Colliers Wood and South Wimbledon. Ages 6 to 67.',
  ogDescription: 'Merton coding and Python classes, with a project from the old Liberty print works where learners search every way regular polygons can meet to cover a floor.',
  twitterDescription: 'Merton coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Merton Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Merton, taught live in English.'
  },

  h1: 'Coding classes in Merton',
  capsuleQ: 'What are the best coding classes in Merton?',
  capsule: 'Merton is the south west London borough of Wimbledon, Mitcham, Morden, Raynes Park, Colliers Wood and South Wimbledon, with 215,186 residents at the 2021 Census, Eagle House and the old Liberty print works by the River Wandle. A good coding class turns a question anyone can ask into a search a computer can finish, and this page does it with patterns: which regular shapes can meet at a point and fit together with no gaps, the question behind every tiled floor and printed fabric. Our teachers, working from India, teach live over video to learners aged 6 to 67, privately or in small classes of five to ten matched by stage. We charge nothing for the first lesson; after it, group places are USD 100 a month and private teaching USD 150 a month.',
  lead: 'Beside the River Wandle at Merton stand two small listed buildings from a textile printing works: a colour house dated 1742 and a wheel house whose list entry says the site has been used for printing textiles for two centuries. Printed cloth is maths you can wear. A pattern is cut into a block, and the block is stamped again and again until the design covers the fabric with no gaps and no overlaps. Our learners ask the question underneath every repeating pattern: which regular shapes can fit together around a point? They write a program that tries every combination of regular polygons, from triangles up to 42-sided shapes, and keeps the ones whose corner angles add up to exactly 360 degrees. It finds 17 combinations, 21 ways to arrange them, and only 3 that use a single shape.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Merton.',

  picks: {
    eyebrow: 'Course picks for Merton',
    h2: 'Courses to begin with in Merton',
    intro: 'Think of a Year 1 child in Mitcham who loves pattern blocks, a Year 7 pupil in Morden who notices the tiles on every bathroom floor, a Year 12 student in Wimbledon choosing maths or design, and a textile designer in Colliers Wood curious about the geometry of repeats. Each of them can start with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch stamp that prints a shape again and again, and a first look at which shapes leave gaps.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with angles: the corner of a triangle, a square, a hexagon, and why three hexagons fit.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including the exhaustive search for tilings on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults in design, craft or architecture who want to use code to explore patterns.' }
    ]
  },

  sections: [
    {
      id: 'merton', tint: '', eyebrow: 'Merton in figures',
      h2: '215,186 residents and 242 listed entries',
      intro: 'Published figures appear as their owners publish them; where we counted open data ourselves, we say so.',
      body: [
        { kind: 'table', caption: 'Merton at a glance', head: ['About', 'Figure', 'According to'], rows: [
          ['Residents at the 2021 Census', '215,186', 'ONS table TS001'],
          ['Heritage List entries we counted in the borough', '242: 3 Grade I, 11 Grade II*, 228 Grade II', 'Historic England data, 25 September 2026'],
          ['Colour house at the Liberty print works, dated', '1742', 'Historic England list entry 1080891'],
          ['Services at Wimbledon', 'District line, Tram, South Western Railway and Thameslink', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Three at Grade I', p: 'Eagle House in Wimbledon, its forecourt walls, piers, railings and gates, and the Church of St Lawrence at Morden are Merton\'s Grade I entries.' },
          { h3: 'Houses and a park', p: 'Southside House, The Canons, the Old Rectory House and Morden Park with its garden walls are among the Grade II* entries.' },
          { h3: 'A windmill', p: 'The Old Windmill on Wimbledon Common is Grade II*; its list entry says it was built in 1817 and 1818 as a hollow post mill and altered in 1893.' }
        ] }
      ]
    },
    {
      id: 'print', tint: 'tint', eyebrow: 'The inspiration',
      h2: 'A print works by the Wandle',
      intro: 'Two Grade II buildings survive from the textile printing works at Merton Abbey. Their list entries tell a compact story.',
      body: [
        { kind: 'table', caption: 'What the list entries record', head: ['Building', 'Detail from Historic England'], rows: [
          ['Colour house', 'Colour house of a textile printing works, dated 1742, of brick and flint with reused stone'],
          ['Wheel house', 'Built in the 1700s; its nineteenth-century undershot wheel has four sets of seven cast iron arms'],
          ['The site', 'Part of the site of Merton Priory, used for printing textiles for the past two centuries'],
          ['The river', 'The wheel house was used for washing materials in the Wandle during processing']
        ] },
        { kind: 'p', text: 'A wheel with seven arms in each set turns up again in the maths. Seven-sided shapes, heptagons, have corners of about 128.6 degrees, and 360 is not a multiple of that, so heptagons alone can never tile a floor. The only way one fits round a point with other regular shapes is beside a triangle and a 42-sided polygon, and learners go on to test whether even that can be continued. We could not include a library list: Merton Council\'s libraries page refused our automated reader, and we never try to get round such blocks.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Searching every way regular shapes can meet',
      intro: 'Learners turn a geometry puzzle into a search that a computer can finish completely, with exact fractions so no rounding error can fool it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Corner angles', p: 'A regular shape with n sides has corners of 180 times (n minus 2) divided by n degrees: 60 for a triangle, 90 for a square, 120 for a hexagon.' },
          { h3: '2. Search', p: 'Try every group of three, four, five or six shapes with 3 to 42 sides, and keep those whose corners add to exactly 360. Fractions, not decimals, keep the test exact.' },
          { h3: '3. Arrange', p: 'Order matters round a point: a triangle, square, triangle, 12-gon is different from two triangles then a square and a 12-gon. Count the distinct arrangements.' }
        ] },
        { kind: 'table', caption: 'What the search finds, run 25 September 2026', head: ['Result', 'Count'], rows: [
          ['Combinations of regular shapes whose corners make exactly 360 degrees', '17'],
          ['Distinct ways to arrange them round the point', '21'],
          ['Using only one kind of shape', '3: six triangles, four squares or three hexagons'],
          ['Largest shape that ever fits', 'A 42-sided polygon, with a triangle and a heptagon']
        ] },
        { kind: 'p', text: 'Only triangles, squares and hexagons can tile a floor on their own, which is why they fill so many printed fabrics and bathroom floors. Pentagons can meet round a point, two of them with a ten-sided shape, but a regular pentagon alone always leaves a gap because 108 degrees does not fit into 360. Some of the 21 arrangements work locally but cannot be continued across a whole surface; learners test them by drawing outward from the first point and finding where the next corner goes wrong. That last step, checking that a local fit becomes a global one, is where the real mathematics lies.' },
        { kind: 'callout', h3: 'Why this is worth doing without AI', p: 'An AI assistant can tell you that only three regular shapes tile a plane. A learner who has written the search, used exact fractions to avoid a false match, counted 17 combinations and 21 arrangements, and then tried to extend them by hand has done real mathematical exploration. They know how a computer can settle a question completely, and where human reasoning still has to take over.' }
      ]
    },
    {
      id: 'exact', tint: 'tint', eyebrow: 'Why exact arithmetic',
      h2: 'When 359.9999 is not 360',
      intro: 'Computers store most decimals approximately. For a yes-or-no question like "does this make exactly 360?", that matters.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Floating point', p: 'The corner of a heptagon, 900 divided by 7, cannot be written exactly as a decimal. Adding such numbers can land a hair away from 360 either way.' },
          { h3: 'Fractions', p: 'Python\'s fractions keep 900/7 exactly, so a sum is 360 or it is not, with no rounding in between.' },
          { h3: 'A habit worth keeping', p: 'Whenever a program must decide equality, learners ask whether the numbers are exact. Money, time and geometry all reward the question.' }
        ] },
        { kind: 'p', text: 'GCSE maths pupils meet angles in polygons and tessellation directly and can follow the whole search; A-level students can extend it to arrangements that mix shapes in different ways and to proofs that certain arrangements cannot be continued. The building details are Historic England\'s; the search, counts and angles are our own, computed on 25 September 2026. Historic England, Liberty, Merton Council, TfL and the ONS have no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Wimbledon\'s trains and trams, and a desk at home',
      intro: 'Merton has Underground, tram and main-line stations. Our lessons need a laptop instead.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Wimbledon', p: 'TfL\'s open data lists the District line, the tram, South Western Railway and Thameslink at Wimbledon.' },
          { h3: 'Raynes Park to Mitcham', p: 'A learner in the west of the borough and one in Mitcham can meet in the same online class.' },
          { h3: 'Fitting together', p: 'Each class is five to ten learners at the same stage, chosen so everyone fits the pace without gaps.' }
        ] },
        { kind: 'spec', title: 'Merton in London', p: 'Merton is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> covers all of them and the City, adding each page as it is published, including <a class="cg-inline-link" href="/coding-classes-in-sutton-london">Sutton</a>, upstream on the Wandle.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From pattern blocks to exhaustive search',
    intro: 'In the free lesson we see what the learner can already do, and that sets the starting rung.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Stamps and shapes', p: 'Children stamp shapes in Scratch and see which ones cover the screen without gaps.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Angles in code', p: 'Python that works out polygon angles and checks which add up to a full turn.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Search and proof', p: 'Exhaustive search, exact fractions and extension tests, strong ground for maths competitions and computing projects.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Pattern and design', p: 'Adults use code to generate and test repeating patterns for design, craft or teaching.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can draw a pattern in seconds. Why should a Merton teenager learn the maths of tiling?',
    intro: 'Because generating something and understanding why it works are different skills.',
    p1: 'Image generators produce tiled patterns on request, and sometimes they are subtly wrong: shapes that almost meet, gaps that repeat. A learner who has searched every possible meeting of regular shapes with exact arithmetic knows what can fit and what cannot, and can spot an impossible pattern at a glance. The same search-and-verify approach sits behind puzzle solvers, scheduling tools and much of computer science.',
    p2: 'Learners also meet a key idea: a computer can settle a finite question completely, but the jump from a local fit to a whole plane needs human reasoning. AI will keep producing patterns; people who can check them will keep being needed.',
    closer: 'Merton printed patterns on cloth for two centuries. A learner here who can prove which patterns are possible has joined a very long local tradition.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Morden to Wimbledon, lessons live',
    intro: 'In every corner of Merton, a lesson begins when the video call opens.',
    cells: [
      { h3: 'A place at home', p: 'Any quiet corner works, with a laptop or desktop, a headset and a broadband line strong enough for video.' },
      { h3: 'English Key Stages', p: 'Progress reports use the language of schools in England: the Key Stage the learner is in, and GCSE or A level where that applies. Lessons are in English.' },
      { h3: 'Start without paying', p: 'Lesson one is genuine teaching, ending with the teacher\'s recommendation on level and course. No card is needed.' },
      { h3: 'Stage-matched groups', p: 'We fill each class with five to ten learners at one stage, drawn from around the UK and further away, so an evening slot usually fits.' },
      { h3: 'A two-evening rhythm', p: 'The standard week has two evening lessons; holidays and exam periods bring agreed breaks.' },
      { h3: 'London times', p: 'The teacher is in India; every lesson time we send is already converted to UK time.' }
    ],
    spec: { title: 'A mid-sized borough, a matched class', p: 'About 215,000 people live in Merton, and a strong class still needs five learners at one stage free at the same time, so ours draw from far beyond the borough.' }
  },

  fees: {
    h2: 'Fees for Merton families',
    intro: 'The same arrangement from Wimbledon to Mitcham: a free first lesson, then one monthly fee.',
    first: 'A full first lesson with a teacher, free, finishing with a recommended level, course and weekly time.',
    group: 'Roughly eight live lessons a month, in a class of five to ten at one stage.',
    private: 'Roughly eight live lessons a month, taught one to one.',
    closer: 'Merton families are charged in US dollars, as everyone outside India is, and no prices in pounds appear on the site. The first charge comes only after the free lesson, once a course and regular slot are chosen. How pausing, missed lessons and swapping between group and private teaching work is set out on the pricing page.'
  },

  reviewsH2: 'In families\' words, from Google',

  book: {
    h2: 'Request a free lesson',
    intro: 'A year group and a favourite pastime is all we need to plan. Lesson one could be a Scratch stamping game, some Python angle puzzles, or the tiling search on this page.',
    success: 'Thank you. Your Merton lesson request has reached us.'
  },

  faq: {
    h2: 'Merton questions',
    intro: 'About the borough, the tiling project and our lessons.',
    items: [
      { q: 'What was Merton\'s population in 2021?', a: '215,186 usual residents, according to Census table TS001 from the Office for National Statistics.' },
      { q: 'What were the buildings at Merton Abbey used for?', a: 'Historic England lists a colour house dated 1742 and a wheel house from a textile printing works. The wheel house entry says the site had been used for printing textiles for two centuries and that the building was used for washing materials in the Wandle.' },
      { q: 'Which regular shapes tile a floor on their own?', a: 'Only three: equilateral triangles, squares and regular hexagons. Their corners, 60, 90 and 120 degrees, divide exactly into 360.' },
      { q: 'How many ways can regular shapes meet at a point?', a: 'Our exhaustive search, using exact fractions and shapes from 3 to 42 sides, found 17 combinations whose corners total 360 degrees and 21 distinct ways to arrange them around the point.' },
      { q: 'Why use fractions instead of decimals?', a: 'Some corner angles, such as a heptagon\'s 900/7 degrees, cannot be stored exactly as decimals. Fractions keep them exact, so the program never mistakes 359.9999 for 360.' },
      { q: 'When would lessons take place?', a: 'After the free lesson, we suggest a class at the right level with room and its fixed weekly evening, given in UK time; the teacher is in India.' },
      { q: 'What does a learner need?', a: 'A computer that plays sound and a connection that holds up for video. The tiling project needs nothing but Python.' },
      { q: 'Is there a Modern Age Coders centre in Merton?', a: 'No. There is no Merton centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Merton cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Beyond Merton',
    html: 'Our <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> collects every borough and the City, linking pages as they go live, from <a class="cg-inline-link" href="/coding-classes-in-kingston-upon-thames-london">Kingston upon Thames</a> next door to <a class="cg-inline-link" href="/coding-classes-in-kensington-and-chelsea-london">Kensington and Chelsea</a>. Search and pattern problems lead naturally into our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">machine learning lessons for London learners</a>, and families comparing school systems across Britain can use the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Merton and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-sutton-london', label: 'Sutton' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-mrt .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.3vw, 2.8rem); }
.cg-root.cg-mrt .cg-hero h1 { font-weight: 770; letter-spacing: -0.018em; line-height: 1.04; }
.cg-root.cg-mrt .cg-capsule { border-top: 3px dotted var(--cg-accent); border-bottom: 3px dotted var(--cg-accent); padding: 0.9rem 0; }
.cg-root.cg-mrt .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mrt .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-mrt .cg-grid-3 { gap: clamp(1rem, 2.5vw, 1.8rem); }
.cg-root.cg-mrt .cg-table caption { font-weight: 700; letter-spacing: 0.016em; }
.cg-root.cg-mrt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mrt .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-mrt .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-mrt .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Merton. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000024): 215,186 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 242 (I 3, II* 11, II 228); Grade I 1358013 EAGLE HOUSE, 1193413 FORECOURT WALLS, PIERS, RAILINGS AND GATES OF EAGLE HOUSE, 1080899 CHURCH OF ST LAWRENCE; II* include 1194026 Southside House, 1358036 THE CANONS, 1080951 THE OLD RECTORY HOUSE, 1080902 MORDEN PARK, 1358050 THE OLD WINDMILL (1817-18, hollow post mill, altered 1893). List entries 1080891 (Colour House at Messrs Liberty\'s Print Works: dated 1742; brick, flint, reused stone) and 1193882 (Wheel house at Messrs Liberty\'s Printworks: C18; C19 undershot wheel with four sets of seven cast iron arms; site of Merton Priory; used for printing textiles for the past two centuries; washing materials in the Wandle). TfL HUBWIM (Wimbledon): District, South Western Railway, Thameslink, Tram. merton.gov.uk/libraries returned HTTP 403 on 25 September 2026: not circumvented.',
    localProject: 'Exhaustive search with Python fractions: interior angle 180(n-2)/n, n = 3..42, multisets of size 3 to 6 summing to 360: 17 (3,7,42) (3,8,24) (3,9,18) (3,10,15) (3,12,12) (4,5,20) (4,6,12) (4,8,8) (5,5,10) (6,6,6) (3,3,4,12) (3,3,6,6) (3,4,4,6) (4,4,4,4) (3,3,3,3,6) (3,3,3,4,4) (3,3,3,3,3,3); cyclic arrangements up to rotation and reflection: 21 (adds 3.4.3.12, 3.4.6.4, 3.6.3.6, 3.3.4.3.4). One-shape: 6.6.6, 4.4.4.4, 3.3.3.3.3.3. Heptagon angle 900/7 = 128.571; pentagon 108 (360/108 = 3.33). Global extendability not asserted; left as learner test. Lesson family: tessellation and exhaustive search with exact arithmetic, screened 25 September 2026.',
    requiredMentions: [
      '215,186',
      'Liberty print works',
      'colour house',
      'tessellation',
      'Eagle House',
      'Southside House',
      'The Canons',
      'Church of St Lawrence',
      'undershot wheel'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Merton E09000024: 215,186 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000024&measures=20100' },
      { claim: 'Historic England list entry 1080891, Colour House at Messrs Liberty\'s Print Works, dated 1742.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1080891' },
      { claim: 'Historic England list entry 1193882, Wheel house at Messrs Liberty\'s Printworks: textile printing for two centuries; wheel with four sets of seven arms.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1193882' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Merton on 25 September 2026: 242 (3 I, 11 II*, 228 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint HUBWIM (Wimbledon).', url: 'https://api.tfl.gov.uk/StopPoint/HUBWIM' }
    ],
    rejectedClaims: [
      'The number of complete tilings of the plane built from these arrangements: not taken from a primary source; the page asks learners to test extension and states no count.',
      'William Morris\'s works at Merton Abbey: not in the list entry text read; not stated.',
      'Tennis at Wimbledon and its club: not mentioned, to avoid any implied affiliation.',
      'Merton library list: council page returned 403; none named.',
      'Merton schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth: never a standout; used only to order the build.'
    ]
  }
};
