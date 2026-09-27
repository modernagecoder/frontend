'use strict';
// Loughborough (cg- town page, UK cluster Phase 8, towns band A, row 326). Keyword slug per the owner's 2026-09-27
// instruction. Spine: how many high-flow episodes did the Soar have? Anchors (read raw 27 September 2026): EA Hydrology API
// station Pillings Lock (7e5119f6-fa25-41ec-bc7a-85dfab1ad3c4; lat 52.757189, long -1.1635; opened 1986-08-01), daily mean
// flow measure ...-flow-m-86400-m3s-qualified; postcodes.io reverse lookup: nearest postcodes LE12 8FE (Quorn parish) and
// LE12 8QW (Barrow upon Soar parish), both Charnwood. NRFA station 28093 "Soar at Pillings Lock": catchment 1108.36 km2;
// gdf-q10-flow 21.8; gdf-mean-flow 9.884; "12 cross path ultrasonic gauge set in Soar Navigation (merges with Grand Union
// Canal) 100m upstream of Pillings Lock"; "Multipath US gauge on the Soar Navigation Canal, subject to significant flow
// modification"; "Very substantial flow modification from WRW and reservoirs in Charnwood Forest".
// Our run (scratchpad lgh/pot.py, 27 September 2026): water years 1991-10-01 to 2025-09-30, 12,419 days, none missing
// (earlier record has a 245-day gap in 1990, so excluded); quality flags Good 9,590, Suspect 808, Estimated 352, Unchecked
// 1,669 (all used, stated as a limitation). Threshold = NRFA Q10 21.8 m3/s: 1,268 days above (10.2%); 334 separate runs
// (9.8 a year), 73 of them a single day; merging runs closer than 3 days 264, 7 days 190 (5.6 a year), 14 days 139, 30 days
// 88 (2.6 a year). Longest single run 29 days (2021-01-12 to 2021-02-09). Every water year has at least one episode.
// Lesson family: peaks over threshold with declustering (event definition, separation rule, debounce); screened
// (declustering, peaks over threshold, run length, debounce: 0 hits). Winchester used Lyne-Hollick baseflow on EA data, a
// different operation. No flood dates, damage or named storms are mentioned.
// Place facts: Nomis Census 2021 TS007A, Charnwood E07000130: total 183,968; 15 to 19 13,739 (7.5%; England 5.7%); 20 to 24
// 16,048 (8.7%; 6.0%); 5 to 9 9,860 (5.4%; 5.9%); 30 to 34 11,784 (6.4%; 7.0%); 65 to 69 9,324 (5.1%; 4.9%); 85+ 4,486
// (2.4%; 2.4%). ONS 2021 BUAs wholly in Charnwood: Loughborough 64,860; Shepshed 14,870; Birstall 14,315; Syston 13,620;
// Mountsorrel 12,885 (the Leicester BUA spills in; not quoted).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'LOUGHBOROUGH', label: 'Loughborough', blurb: 'Coding and AI classes for Loughborough and Charnwood, with a project that counts high-flow episodes on the River Soar.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-loughborough',
  code: 'lgh',
  accent: '#3F1B4C',
  accentRationale: 'Loughborough: a deep damson for Charnwood (11.49:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Loughborough',
    eyebrow: 'Loughborough, Leicestershire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Leicestershire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-midlands', name: 'East Midlands' }],
  nav: [
    { label: 'Leicestershire', href: '/coding-classes-in-leicestershire' },
    { label: 'East Midlands', href: '/coding-and-ai-classes-in-east-midlands' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Loughborough, England',
  title: 'Coding and AI Classes in Loughborough | Python Online, 6 to 67',
  description: 'Online coding, AI and Python classes for Loughborough, Shepshed, Syston and Charnwood learners aged 6 to 67, taught live and matched to level. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Loughborough, and a Python project on River Soar flow data that shows why counting events depends on the rule.',
  twitterDescription: 'Loughborough coding, AI and Python classes online for ages 6 to 67. Your first lesson is free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Loughborough',
    description: 'Online coding, AI, Python and mathematics for children, teenagers and adults in Loughborough and Charnwood, taught live at a suitable level.'
  },

  h1: 'Coding and AI classes in Loughborough',
  capsuleQ: 'Where should Loughborough learners look for the best coding and AI classes?',
  capsule: 'Charnwood borough, home to Loughborough, had 183,968 residents in the 2021 census, and the Loughborough built-up area 64,860. Students shape it: 20 to 24 year olds are 8.7 per cent of the borough against 6.0 per cent in England, and 15 to 19 year olds 7.5 against 5.7. For every age from 6 to 67 we teach coding, AI, Python and maths in live lessons over video, with our teachers in India working one-to-one or with five to ten learners at a common level. Your first lesson costs nothing and decides the course. The Loughborough project asks a question about the River Soar that has several honest answers. After the trial, group places cost USD 100 a month and private lessons USD 150 a month.',
  lead: 'The Environment Agency has measured the River Soar at Pillings Lock, in Charnwood, every day since 1986, using an ultrasonic gauge set in the Soar Navigation. The National River Flow Archive says the river runs above 21.8 cubic metres per second on only one day in ten. So how many high-flow episodes did the Soar have between 1991 and 2025? It sounds like a question with one answer. It is not. Count every crossing of the line and you get 334; merge crossings that are less than a month apart and you get 88. Both are honest. A Loughborough learner can write the Python that shows why, and meet an idea programmers call debouncing on the way.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a learner in Loughborough.',

  picks: {
    eyebrow: 'Starting points',
    h2: 'Loughborough\'s popular first courses',
    intro: 'Pick one that suits the learner\'s age. All of them open with a free live lesson, and booking needs no card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding, including a game that counts button presses properly.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Beginner Python with simple AI experiments.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Complete Python for teenagers, including real river data.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Python from first principles for adults and university students.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Charnwood today',
      h2: 'A student-shaped borough',
      intro: 'Charnwood borough in census table TS007A (2021) from Nomis: six bands, each set against England.',
      body: [
        { kind: 'table', caption: 'Charnwood borough and England, six age bands, Census 2021 TS007A', head: ['Ages', 'Charnwood count', 'Charnwood share', 'England share'], rows: [
          ['5 to 9', '9,860', '5.4%', '5.9%'],
          ['15 to 19', '13,739', '7.5%', '5.7%'],
          ['20 to 24', '16,048', '8.7%', '6.0%'],
          ['30 to 34', '11,784', '6.4%', '7.0%'],
          ['65 to 69', '9,324', '5.1%', '4.9%'],
          ['85 and over', '4,486', '2.4%', '2.4%']
        ] },
        { kind: 'p', text: 'Late teens and early twenties stand well above England, while younger children and people in their early thirties sit a little below. The ONS counts several built-up areas wholly inside Charnwood besides Loughborough, including Shepshed at 14,870, Birstall at 14,315, Syston at 13,620 and Mountsorrel at 12,885. Schools teach the national curriculum for England; send us your holiday dates and lessons stop for them.' },
        { kind: 'callout', h3: 'Related pages', p: 'The <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">East Midlands</a> page links the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Loughborough project',
      h2: 'Counting high flows on the Soar',
      intro: 'The data is fixed; the count depends on the rule you choose.',
      body: [
        { kind: 'p', text: 'The learner downloads 12,419 daily mean flows for Pillings Lock from the Environment Agency, covering the water years from October 1991 to September 2025, with no missing days. The line is the National River Flow Archive\'s Q10 figure of 21.8 cubic metres per second. Python marks each day as above or below the line. 1,268 days are above it, 10.2 per cent, just as a Q10 should give. The first trap is to call those 1,268 days "high-flow episodes". They are days, and most of them belong to the same few spells.' },
        { kind: 'table', caption: 'Our Python count of high-flow episodes at Pillings Lock, water years 1992 to 2025', head: ['Rule for separating episodes', 'Episodes', 'Per year', 'What changed'], rows: [
          ['Every separate run above 21.8', '334', '9.8', 'Includes 73 one-day blips'],
          ['Merge runs less than 3 days apart', '264', '7.8', 'Short dips no longer split a spell'],
          ['Merge runs less than 7 days apart', '190', '5.6', 'Spells a week apart stay separate'],
          ['Merge runs less than 14 days apart', '139', '4.1', 'Wet fortnights become one spell'],
          ['Merge runs less than 30 days apart', '88', '2.6', 'Close to a season count']
        ] },
        { kind: 'p', text: 'The second step is declustering. Rivers wobble around a line: a day just above, one just below, then above again. Treating each wobble as a new episode inflates the count, so the program merges runs that are closer together than a chosen gap. The answer moves from 334 all the way down to 88. None of these is wrong; each answers a slightly different question. The learner has to state the rule beside the number, every time.' },
        { kind: 'p', text: 'The same idea, under the name debouncing, lives in every keyboard and game controller. A physical button bounces for a few milliseconds when pressed, and without a debounce rule one press registers as several. The learner writes one function, count_episodes(flows, line, gap), and tests it on a made-up series where the correct answer is known, then on a button trace. Finally they note the limits: 808 of the days are flagged suspect and 352 estimated by the Agency, and the archive warns that reservoirs and water recycling works change the river\'s flow substantially.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Colour a paper strip of daily numbers above or below a line and count the coloured blocks.' },
          { h3: 'Ages 11 to 15', p: 'Write count_episodes() in Python and try gaps of 1, 7 and 30 days.' },
          { h3: 'Ages 15 and up', p: 'Plot episodes per year for each rule and debounce a noisy button signal.' }
        ] },
        { kind: 'callout', h3: 'Agency data, our counting', p: 'The daily flows come from the Environment Agency hydrology service and the Q10 figure and gauge notes from the National River Flow Archive. The runs, rules and counts are ours.' }
      ]
    },
    {
      id: 'soar', tint: 'deep', eyebrow: 'Why Pillings Lock',
      h2: 'A gauge in the Soar Navigation',
      intro: 'What the National River Flow Archive records about station 28093.',
      body: [
        { kind: 'table', caption: 'Soar at Pillings Lock, from the National River Flow Archive', head: ['Detail', 'Recorded value'], rows: [
          ['Station', '28093, Soar at Pillings Lock'],
          ['Catchment area', '1,108.36 square kilometres'],
          ['Gauge', 'A 12-path ultrasonic gauge in the Soar Navigation, 100 m upstream of the lock'],
          ['Mean flow', '9.884 cubic metres per second'],
          ['Q10 flow', '21.8 cubic metres per second, exceeded on one day in ten'],
          ['Flow regime', 'Very substantial modification from water recycling works and Charnwood Forest reservoirs']
        ] },
        { kind: 'p', text: 'Defining an event is one of the quiet decisions behind a lot of software. Fraud systems decide when several card payments count as one burst, fitness apps decide when a pause ends a run, and web analytics decide when a visit becomes a new session. Change the gap and the headline number changes. A Loughborough learner who has counted the Soar three ways will always ask how an event was defined.' },
        { kind: 'p', text: 'Modern Age Coders has no link with the Environment Agency, the National River Flow Archive or the ONS. The data is theirs; the counting, and any mistake in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From paper strips to real data pipelines',
    intro: 'School years are approximate; the free trial sets the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Games and counting', p: 'Block coding with counters, events and simple rules.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and lists', p: 'Typed Python working through lists of numbers.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Data and AI', p: 'Real datasets and AI beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data skills', p: 'Python and data analysis for adult learners.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and definitions',
    h2: 'Will an AI tell you how it counted?',
    intro: 'A count without its rule is only half an answer.',
    p1: 'Ask a chatbot how many high-flow events a river had and it may return one confident figure. Whether it counted days, runs or merged spells is usually left unsaid.',
    p2: 'A Loughborough learner who has written count_episodes() asks for the rule first, and knows the answer can move by a factor of almost four.',
    closer: 'Asking how things were counted is a good reason for Loughborough teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practical details',
    h2: 'Shepshed to Syston, one live class',
    intro: 'Any home in Charnwood joins by video.',
    cells: [
      { h3: 'Code by the learner', p: 'Learners write every line; the tutor watches the screen share and guides with questions.' },
      { h3: 'Matched to school year', p: 'From Year 2 to Year 13, each learner starts at the point their year and trial suggest, using their exam board.' },
      { h3: 'Trial lesson free', p: 'A full first lesson without charge, and a frank recommendation.' },
      { h3: 'Classes at one level', p: 'Groups of five to ten learners at the same stage, from across the UK.' },
      { h3: 'Two a week', p: 'Two lessons weekly in term, and none in the holidays.' },
      { h3: 'Unmoved by clock changes', p: 'Our teachers shift when UK clocks go forward or back, so your slot does not.' }
    ],
    spec: { title: 'The reason for online groups', p: 'Five Loughborough learners at one level who share a free hour seldom live on one street. Online groups fix that.' }
  },

  fees: {
    h2: 'Loughborough fees',
    intro: 'Loughborough families pay the same as families in any country outside India.',
    first: 'A full lesson free of charge, with a clear course suggestion.',
    group: 'Around eight live group lessons each month.',
    private: 'Around eight live one-to-one lessons each month.',
    closer: 'We charge in US dollars, not sterling. There is no bill until the trial has fixed a course and a weekly slot; the pricing page covers holidays, missed lessons and changing format.'
  },

  reviewsH2: 'Google reviews left by families',

  book: {
    h2: 'Book a free Loughborough lesson',
    intro: 'Let us know the learner\'s age or year and something they enjoy. A trial might be a Scratch button game, a first Python script, an AI experiment, or the Soar counting puzzle.',
    success: 'Thank you. Your Loughborough request is with us.'
  },

  faq: {
    h2: 'Loughborough questions',
    intro: 'The borough, the river project and lesson basics.',
    items: [
      { q: 'How many people live in Loughborough?', a: 'The ONS counted 64,860 in the Loughborough built-up area in 2021; the wider Charnwood borough had 183,968.' },
      { q: 'Can Loughborough learners take coding and AI classes online?', a: 'Yes. Learners aged 6 to 67 in Loughborough and across Charnwood join live online coding, AI, Python and maths classes.' },
      { q: 'What is the River Soar project?', a: 'Learners use Environment Agency daily flows from Pillings Lock to show how the number of high-flow episodes depends on the rule used to separate them.' },
      { q: 'What is declustering?', a: 'Merging threshold crossings that are close together, so one long spell is not counted as many separate events.' },
      { q: 'What is debouncing?', a: 'The same idea in electronics and software: ignoring the rapid bounces of a button so one press counts once.' },
      { q: 'Are lessons in person?', a: 'No, they are online, so Loughborough, Shepshed, Syston and Birstall are all covered.' },
      { q: 'Do you cover GCSE and A level?', a: 'Yes, maths and computing, aiming at understanding rather than promised grades.' },
      { q: 'What ages do you teach?', a: 'Everyone from 6 to 67, students and adults included.' },
      { q: 'What are the prices?', a: 'The first lesson is free; then USD 100 a month for groups or USD 150 a month one-to-one.' },
      { q: 'Do you teach in the school holidays?', a: 'No. Tell us the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Loughborough',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a> page covers the county and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">East Midlands</a> page lists the region. Every UK page appears on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Loughborough and Leicestershire',
  footerPlaces: [
    { href: '/coding-classes-in-leicestershire', label: 'Leicestershire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-lgh .cg-hero-grid { align-items: stretch; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-lgh .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.07; }
.cg-root.cg-lgh .cg-capsule { border: 2px solid var(--cg-accent); border-radius: 12px; padding: 1rem 1.1rem; }
.cg-root.cg-lgh .cg-eyebrow { letter-spacing: 0.15em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-lgh .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.017em; }
.cg-root.cg-lgh .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-lgh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lgh .cg-table th { letter-spacing: 0.03em; font-weight: 700; font-size: 0.8rem; }
.cg-root.cg-lgh .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-lgh .cg-callout { border-radius: 8px; border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Charnwood (E07000130). Nomis Census 2021 TS007A: total 183,968; 5 to 9 9,860 (5.4%, England 5.9%); 15 to 19 13,739 (7.5%, 5.7%); 20 to 24 16,048 (8.7%, 6.0%); 30 to 34 11,784 (6.4%, 7.0%); 65 to 69 9,324 (5.1%, 4.9%); 85+ 4,486 (2.4%, 2.4%). ONS 2021 BUAs: Loughborough 64,860; Shepshed 14,870; Birstall 14,315; Syston 13,620; Mountsorrel 12,885. EA Hydrology Pillings Lock daily mean flow (station 7e5119f6-fa25-41ec-bc7a-85dfab1ad3c4; postcodes.io nearest LE12 8FE Quorn, LE12 8QW Barrow upon Soar, both Charnwood). NRFA 28093 Soar at Pillings Lock: catchment 1108.36 km2; Q10 21.8; mean 9.884; "12 cross path ultrasonic gauge set in Soar Navigation"; "Very substantial flow modification from WRW and reservoirs in Charnwood Forest".',
    localProject: 'Peaks over threshold + declustering: 12,419 days (WY 1992 to 2025, none missing); 1,268 days above 21.8 (10.2%); runs 334 (73 one-day); merge gap 3 days 264, 7 days 190, 14 days 139, 30 days 88; longest run 29 days. Flags Good 9,590, Suspect 808, Estimated 352, Unchecked 1,669. Lesson family: event definition, declustering, debounce.',
    requiredMentions: [
      '64,860',
      'Shepshed',
      'Mountsorrel',
      'Syston',
      'Pillings Lock',
      'Soar Navigation',
      'declustering',
      'debounce',
      '1,268'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Charnwood and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Environment Agency hydrology data, Pillings Lock daily mean flow.', url: 'https://environment.data.gov.uk/hydrology/' },
      { claim: 'National River Flow Archive, station 28093 Soar at Pillings Lock.', url: 'https://nrfa.ceh.ac.uk/data/station/info/28093' }
    ],
    rejectedClaims: [
      'Flood dates, named storms and damage: not mentioned.',
      'That the gauge is in Loughborough town: not claimed; it is in Charnwood borough.',
      'University names and student numbers: not claimed; the age table is the evidence.',
      'Taylor bellfoundry: already the Leicestershire page anchor; not reused.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
