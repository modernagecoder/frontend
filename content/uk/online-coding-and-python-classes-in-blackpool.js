'use strict';
// Blackpool (cg- town page, UK cluster Phase 8, towns band A, row 339). Keyword slug per the owner's 2026-09-27
// instruction. Spine: where should you stand to measure the Tower best? Anchors (read raw 27 September 2026): The Blackpool
// Tower website (theblackpooltower.com): /history/ "When the Tower opened in 1894"; "The Blackpool Tower Circus first opened
// to the public on 14 May 1894"; "The present interior was designed by Frank Matcham and was completed in 1900" (the
// ballroom); /our-attractions/the-blackpool-tower-top/ "Take a trip 380ft into the sky to the top of The Blackpool Tower";
// address "Blackpool Tower, The Promenade, Blackpool, FY1 4BJ" (postcodes.io: FY1 4BJ, Blackpool). The 380 ft is the height
// of the Tower Top visit, not a claimed total height.
// Our run (27 September 2026): h = 380 ft = 115.8 m (0.3048 m per foot). Height from distance d and angle of elevation t:
// h = d tan t, eye height ignored. With a reading error of plus or minus half a degree, the worst height error: d 20 m
// (angle 80.2) 6.3 m, 5.5%; d 50 m (66.7) 2.8 m, 2.4%; d 115.8 m (45.0) 2.0 m, 1.8%; d 200 m (30.1) 2.3 m, 2.0%; d 400 m
// (16.1) 3.8 m, 3.3%; d 1,000 m (6.6) 8.9 m, 7.6%. Search over whole metres: least worst-case error at d = 117 m. Theory:
// relative error is about the angle error times 2 / sin(2t), smallest at t = 45 degrees.
// Lesson family: angle of elevation (trigonometry) with sensitivity to measurement error and an optimum viewing distance;
// screened (angle of elevation, clinometer, trigonometry: 0 hits; Hounslow's error budget combined many sources along a
// baseline, a different question; Lancashire used the illuminations, not reused).
// Place facts: Nomis Census 2021 TS007A, Blackpool E06000009: total 141,036; 5 to 9 7,905 (5.6%; England 5.9%); 20 to 24
// 7,446 (5.3%; 6.0%); 40 to 44 7,718 (5.5%; 6.3%); 55 to 59 10,993 (7.8%; 6.7%); 60 to 64 9,418 (6.7%; 5.8%); 75 to 79 5,821
// (4.1%; 3.6%). ONS 2021 BUA Blackpool 149,070 (reaches beyond the borough; OA sum inside 140,774).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BLACKPOOL', label: 'Blackpool', blurb: 'Online coding and Python classes for Blackpool, with a project that finds the ideal spot to measure the Tower by angle of elevation.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-blackpool',
  code: 'bpl',
  accent: '#4E308A',
  accentRationale: 'Blackpool: an illumination-night indigo (8.01:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Blackpool',
    eyebrow: 'Blackpool, Lancashire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Lancashire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Lancashire', href: '/coding-classes-in-lancashire' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Blackpool, England',
  title: 'Online Coding and Python Classes in Blackpool | AI, 6 to 67',
  description: 'Live online coding, Python and AI classes for Blackpool children, teenagers and adults aged 6 to 67, one-to-one or in small groups. The first lesson is free.',
  ogDescription: 'Online coding and Python classes for Blackpool, and a trigonometry project that works out where to stand to measure the Tower most accurately.',
  twitterDescription: 'Blackpool online coding, Python and AI classes for ages 6 to 67. First live lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Blackpool',
    description: 'Online coding, Python, AI and mathematics for children, teenagers and adults in Blackpool, taught live in English at the right level.'
  },

  h1: 'Online coding and Python classes in Blackpool',
  capsuleQ: 'Which are the best online coding and Python classes in Blackpool?',
  capsule: 'Blackpool borough had 141,036 residents in the 2021 census, and the ONS gives 149,070 for the Blackpool built-up area, which reaches past the borough. People aged 55 to 64 are well above the England share, while children and adults in their early forties are fewer. Coding, Python, AI and maths are taught live by our tutors in India to learners aged 6 to 67, one-to-one or in small classes of five to ten at a single stage. A free first lesson settles the course. The Blackpool project uses a school protractor, some trigonometry and a few lines of Python on the Tower itself. Staying on is USD 100 a month in a group or USD 150 a month privately.',
  lead: 'The Blackpool Tower opened in 1894, and its own website invites visitors to take "a trip 380ft into the sky" to the Tower Top. Could you check that number from the pavement? Surveyors do it with trigonometry: stand a known distance away, measure the angle up to the top, and the tangent of that angle times the distance gives the height. But no hand-held measurement is perfect. A clinometer read by a teenager might be half a degree out. The surprising question is this: does it matter where you stand? It turns out it matters a great deal, and a short Python program can find the spot on the Promenade where a half-degree slip does the least damage.',
  wa: 'Hello Modern Age Coders, please book a free online coding or Python lesson for a learner in Blackpool.',

  picks: {
    eyebrow: 'Blackpool starting points',
    h2: 'First courses for Blackpool learners',
    intro: 'Pick by age and interest. Each course begins with a free live lesson, and no card is needed.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with angles, turns and drawing towers.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with simple maths, plus small AI projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, including the Tower measurement project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Python for adults from scratch, up to modelling and data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Blackpool borough',
      h2: 'An older-leaning seaside town',
      intro: 'Blackpool in census table TS007A (2021), from Nomis, six bands with England alongside.',
      body: [
        { kind: 'table', caption: 'Blackpool borough and England, six age bands, Census 2021 TS007A', head: ['Ages', 'Blackpool count', 'Blackpool %', 'England %'], rows: [
          ['5 to 9', '7,905', '5.6%', '5.9%'],
          ['20 to 24', '7,446', '5.3%', '6.0%'],
          ['40 to 44', '7,718', '5.5%', '6.3%'],
          ['55 to 59', '10,993', '7.8%', '6.7%'],
          ['60 to 64', '9,418', '6.7%', '5.8%'],
          ['75 to 79', '5,821', '4.1%', '3.6%']
        ] },
        { kind: 'p', text: 'People in their late fifties and early sixties are well above the national share, and children and younger adults below it. The ONS counts a single large built-up area, 149,070 people, that covers the borough and extends a little beyond it. Blackpool schools use England\'s national curriculum; lessons with us stop for whichever holiday weeks you list.' },
        { kind: 'callout', h3: 'County and region', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-lancashire">Lancashire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West</a> page links the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Blackpool project',
      h2: 'Where to stand to measure the Tower',
      intro: 'Height from an angle, and how much a small mistake costs at each distance.',
      body: [
        { kind: 'p', text: 'The learner converts the Tower\'s 380 feet to metres, 115.8, and writes a Python function: height equals distance times the tangent of the angle of elevation. Then comes the realistic part. Suppose the angle is misread by up to half a degree either way. For each standing distance the program computes the height it would report at the angle plus half a degree and at the angle minus half a degree, and keeps the larger error. Ignoring the height of the observer\'s eyes for now, the pattern is clear.' },
        { kind: 'table', caption: 'Our Python model for the 380 foot Tower Top, angle misread by up to half a degree, 27 September 2026', head: ['Standing distance', 'Angle of elevation', 'Worst height error', 'As a percentage'], rows: [
          ['20 m', '80.2 degrees', '6.3 m', '5.5%'],
          ['50 m', '66.7 degrees', '2.8 m', '2.4%'],
          ['115.8 m', '45.0 degrees', '2.0 m', '1.8%'],
          ['200 m', '30.1 degrees', '2.3 m', '2.0%'],
          ['400 m', '16.1 degrees', '3.8 m', '3.3%'],
          ['1,000 m', '6.6 degrees', '8.9 m', '7.6%']
        ] },
        { kind: 'p', text: 'Standing too close is bad: at 20 metres the angle is steep, the tangent changes violently, and a half-degree slip moves the answer by 6.3 metres. Standing too far is bad too: at a kilometre the angle is tiny, so half a degree is a large share of it. The error is smallest in between. A search over every whole metre from 10 to 2,000 puts the sweet spot at 117 metres, almost exactly as far away as the target is high, where the angle is 45 degrees and the worst error is 2.0 metres.' },
        { kind: 'p', text: 'The learner then checks the result with algebra: the relative error is roughly the angle error times 2 divided by the sine of twice the angle, and the sine of 90 degrees is at its largest, so 45 degrees wins. Finally the learner adds eye height, about one and a half metres, and a second source of error, the tape measure, and sees how the ideal distance shifts. Tests check that the function returns exactly 115.8 m for a 45 degree angle at 115.8 m.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Make a straw-and-protractor clinometer and measure the height of a tree or lamp post.' },
          { h3: 'Ages 11 to 15', p: 'Write the tangent function in Python and fill in the error table.' },
          { h3: 'Ages 15 and up', p: 'Search for the ideal distance, prove the 45 degree result, and add eye height.' }
        ] },
        { kind: 'callout', h3: 'The Tower\'s figure, our model', p: 'The 380 foot Tower Top figure, the 1894 opening and the Promenade address come from The Blackpool Tower website. The trigonometry, error model and search are ours.' }
      ]
    },
    {
      id: 'tower', tint: 'deep', eyebrow: 'Why the Tower',
      h2: 'A landmark since 1894',
      intro: 'What The Blackpool Tower\'s own pages say.',
      body: [
        { kind: 'table', caption: 'The Blackpool Tower, from its official website', head: ['Detail', 'What the site says'], rows: [
          ['Opened', '1894'],
          ['The circus', 'First opened to the public on 14 May 1894'],
          ['The ballroom interior', 'Designed by Frank Matcham, completed in 1900'],
          ['Tower Top', 'A trip 380 feet into the sky'],
          ['Address', 'The Promenade, Blackpool, FY1 4BJ'],
          ['What our model uses', '380 feet as the target height, 115.8 m']
        ] },
        { kind: 'p', text: 'Choosing where to measure from is a real engineering problem. Surveyors, drone pilots, astronomers and the software inside phone cameras all face the same trade-off: some positions make small errors large and others keep them small. Programs that plan measurements search for the arrangement where the unavoidable mistakes matter least. A Blackpool learner who has found the 117 metre sweet spot has solved a small version of that problem.' },
        { kind: 'p', text: 'Modern Age Coders is not connected with The Blackpool Tower, Blackpool Tourism Limited or the ONS. Their figures stay theirs; any slip in the model belongs to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From straw clinometers to measurement planning',
    intro: 'School years are a guide; the trial finds the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Angles and turns', p: 'Block coding with angles, shapes and movement.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and maths', p: 'Functions and simple trigonometry in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Models and AI', p: 'Modelling, error and AI alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Applied programming', p: 'Adult Python for models and data.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and uncertainty',
    h2: 'Will an AI tell you where to stand?',
    intro: 'A formula is not the whole answer; the setup matters.',
    p1: 'Ask a chatbot how to measure a building with trigonometry and it will give the tangent formula correctly. It will rarely mention that the same formula can be three times less accurate depending on where you stand.',
    p2: 'A Blackpool learner who has modelled half a degree of error knows to ask how sensitive any answer is to the measurements behind it.',
    closer: 'Asking how much a small mistake could cost is a habit worth building in code, and a good reason for Blackpool teenagers to keep at it in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson set-up',
    h2: 'All of Blackpool, by live video',
    intro: 'The whole borough joins the same way.',
    cells: [
      { h3: 'Student-written code', p: 'Learners type every line; the tutor watches the shared screen and asks questions rather than taking over.' },
      { h3: 'The right first step', p: 'Year 3 or Year 12, the trial and school year together decide where a learner starts, with their exam board noted.' },
      { h3: 'Free first lesson', p: 'The trial costs nothing and ends with a plain recommendation.' },
      { h3: 'Classmates on your level', p: 'Every group mixes five to ten UK learners who have reached the same step.' },
      { h3: 'Two lessons a week', p: 'During term only; holidays stay free.' },
      { h3: 'Fixed time slot', p: 'UK clock changes are absorbed by our tutors, not your timetable.' }
    ],
    spec: { title: 'Why groups meet online', p: 'Five Blackpool learners at one level, free at the same hour, seldom live near one another. Online groups give each the right class.' }
  },

  fees: {
    h2: 'Blackpool fees',
    intro: 'Blackpool families pay the fee we use in every country outside India.',
    first: 'A full lesson free, ending with a course suggestion.',
    group: 'Around eight live group lessons per month.',
    private: 'Around eight live private lessons per month.',
    closer: 'Prices are in US dollars, never sterling. No charge is made before the trial has matched the learner to a course and a fixed weekly slot. Holidays, absences and moving between group and private tuition are covered on the pricing page.'
  },

  reviewsH2: 'Reviews on Google, in families\' own words',

  book: {
    h2: 'Book a free Blackpool lesson',
    intro: 'An age or year group plus one interest is all we need. Possible trials: a Scratch tower drawing, a first Python script, a small AI build, or measuring the Tower with trigonometry.',
    success: 'Thank you. Your Blackpool request has reached us.'
  },

  faq: {
    h2: 'Blackpool questions',
    intro: 'Tower maths, local figures and lesson logistics.',
    items: [
      { q: 'What is the population of Blackpool?', a: 'The 2021 census counted 141,036 in Blackpool borough; the ONS gives 149,070 for the Blackpool built-up area.' },
      { q: 'Can Blackpool learners take coding and Python classes online?', a: 'Yes. Learners aged 6 to 67 in Blackpool join live online coding, Python, AI and maths lessons.' },
      { q: 'What is the Blackpool Tower project?', a: 'Learners use trigonometry in Python to estimate the 380 foot Tower Top from an angle of elevation and find where to stand for the smallest error.' },
      { q: 'What is an angle of elevation?', a: 'The angle between flat ground and your line of sight up to the top of something.' },
      { q: 'Where should you stand for the smallest error?', a: 'In our model, about as far away as the target is high, where the angle is 45 degrees; here about 117 metres.' },
      { q: 'Are lessons in person?', a: 'No, all lessons run live online.' },
      { q: 'Do you help with GCSE and A level?', a: 'For maths and computing, yes; the aim is genuine understanding, and no grade is ever guaranteed.' },
      { q: 'What ages can join?', a: 'From 6 to 67.' },
      { q: 'How much do lessons cost?', a: 'Zero for the opening lesson, then USD 100 monthly in a class or USD 150 monthly with a private tutor.' },
      { q: 'Do lessons pause in school holidays?', a: 'Yes, once you tell us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Blackpool',
    html: 'County options are on our <a class="cg-inline-link" href="/coding-classes-in-lancashire">Lancashire</a> page; <a class="cg-inline-link" href="/ai-and-programming-classes-in-blackburn">Blackburn</a> puts error bars on an 18th-century estimate; <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a> covers the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Blackpool and Lancashire',
  footerPlaces: [
    { href: '/coding-classes-in-lancashire', label: 'Lancashire' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bpl .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.2vw, 2.7rem); }
.cg-root.cg-bpl .cg-hero h1 { font-weight: 800; letter-spacing: -0.03em; line-height: 1.02; }
.cg-root.cg-bpl .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-bpl .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bpl .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.022em; }
.cg-root.cg-bpl .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-bpl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bpl .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-bpl .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-bpl .cg-callout { border-radius: 0 12px 12px 0; border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Blackpool (E06000009). Nomis Census 2021 TS007A: total 141,036; 5 to 9 7,905 (5.6%, England 5.9%); 20 to 24 7,446 (5.3%, 6.0%); 40 to 44 7,718 (5.5%, 6.3%); 55 to 59 10,993 (7.8%, 6.7%); 60 to 64 9,418 (6.7%, 5.8%); 75 to 79 5,821 (4.1%, 3.6%). ONS 2021 BUA Blackpool 149,070. The Blackpool Tower website: opened 1894; circus first opened 14 May 1894; ballroom interior by Frank Matcham completed 1900; "Take a trip 380ft into the sky to the top of The Blackpool Tower"; FY1 4BJ (postcodes.io: Blackpool).',
    localProject: 'Angle of elevation: h = d tan t for h = 115.8 m (380 ft); worst error at plus or minus 0.5 degrees: 20 m 6.3 m (5.5%); 50 m 2.8 m; 115.8 m 2.0 m (1.8%); 200 m 2.3 m; 400 m 3.8 m; 1,000 m 8.9 m (7.6%); best whole-metre distance 117 m; relative error about angle error x 2 / sin(2t). Lesson family: trigonometry with sensitivity and an optimum.',
    requiredMentions: [
      '149,070',
      '141,036',
      '380 feet',
      'Tower Top',
      'angle of elevation',
      'FY1 4BJ',
      'clinometer',
      '115.8',
      'Frank Matcham'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Blackpool and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'The Blackpool Tower, history page.', url: 'https://www.theblackpooltower.com/history/' },
      { claim: 'The Blackpool Tower, Tower Top page (380 ft).', url: 'https://www.theblackpooltower.com/our-attractions/the-blackpool-tower-top/' }
    ],
    rejectedClaims: [
      'The Tower\'s total height to the flagpole: not claimed; only the site\'s 380 feet for the Tower Top trip.',
      'Illuminations: the Lancashire page anchor; not reused.',
      'Admission prices, then or now: not repeated.',
      'Named schools and school term dates: none named or read.',
      'Distances between real Promenade spots and the Tower: not claimed; distances are model inputs.',
      'Sterling prices: none.'
    ]
  }
};
