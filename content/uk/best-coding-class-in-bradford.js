'use strict';
// Bradford (cg- city page, UK cluster Phase 4). Spine: a walk through 115 years of Bradford rain. Met Office
// historic station data, Bradford (134 m amsl; monthly from January 1908), read 21 September 2026 (scratchpad
// bfd/walk.py, bridge.py): 1,424 months to a provisional August 2026; rain flags 7 estimated, 36 missing (all of
// 1908 to 1910), 8 provisional months. Walk: January 1911 to December 2025, 1,380 complete months; step +1 if the
// month's rainfall is above that calendar month's 1911-2025 median, -1 if below, 0 if equal (684 up, 684 down, 12
// level, so the walk ends at 0 by construction). Highest 28 in June 1969; lowest -12 in November 2011; January
// positions: 1920 -2, 1930 7, 1950 8, 1970 25, 1990 15, 2010 0, 2020 -8. Months above zero 1,132 (82.0%), below 202,
// at zero 46. Ten thousand shuffles of the same 1,380 steps (seed 20260921; every shuffle also ends at 0): median
// farthest distance from zero 30 (10th percentile 21, 90th 45); 62.1% reach 28 or more; 33.4% spend at least 82.0%
// of months on one side. Unconstrained coin walks of 1,380 steps are not used on the page (they need not end at 0).
// sqrt(1,380) = 37.1. Lesson family: random walks (cumulative steps, square-root spread, long one-sided stays,
// comparison with shuffled walks). Screened free site-wide on 21 September 2026 (famcheck.js: random walk 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 for Bradford E08000032 (546,412 usual
// residents; 540,549 in households, 98.9%; 5,863 in communal establishments, 1.1%), TS007A (36,096 aged under 5,
// 6.6%; 39,556 aged 5 to 9, 7.2%; 41,350 aged 10 to 14, 7.6%; 37,779 aged 15 to 19, 6.9%; England 5.4, 5.9, 6.0
// and 5.7%), TS068 (124,422 schoolchildren and full-time students of 510,315 aged 5 and over, 24.4%; England
// 20.4%). Bradford UNESCO City of Film, About (the world's first UNESCO City of Film; history in film dating back to
// the birth of cinema). UNESCO World Heritage List 1028, Saltaire (date of inscription 2001; complete and
// well-preserved industrial village of the second half of the 19th century). University of Bradford, About (in
// 1966 the UK's fortieth university, Harold Wilson its first Chancellor; 10,887 students in 2024/25, 8,037
// undergraduate). Bradford Culture Company, About (delivered Bradford 2025 UK City of Culture; more than 5,000
// events). The National Science and Media Museum about page returned HTTP 405 and was not used.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'BRADFORD', blurb: 'The world\'s first UNESCO City of Film, with a project that takes a random walk through 115 years of the district\'s rain.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-bradford',
  code: 'bfd',
  accent: '#5C1F3D',
  accentRationale: 'Bradford: a deep claret from the solver (9.92:1 on every paper tint, dE 7.6 from the nearest used accent), a nod to the district\'s claret, and far from the Derby and Nottingham greens',
  pageType: 'city',
  place: {
    name: 'Bradford',
    eyebrow: 'Bradford, West Yorkshire, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'West Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Bradford, England',
  title: 'Best Coding Classes in Bradford | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Bradford district learners aged 6 to 67, from Keighley and Ilkley to Shipley and Heaton. First lesson free.',
  ogDescription: 'Coding and AI lessons for Bradford, the world\'s first UNESCO City of Film, on a page that takes a random walk through 115 years of the district\'s rain.',
  twitterDescription: 'Coding and AI for Bradford learners aged six to sixty-seven, taught live online, and the first lesson costs nothing.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Bradford Live Online Coding and Maths Lessons',
    description: 'Coding, Python, AI, data and mathematics for Bradford district children, teenagers and adults, taught live online in English in level-based groups or one to one.'
  },

  h1: 'Coding classes in Bradford',
  capsuleQ: 'What are the best coding classes in Bradford?',
  capsule: 'Bradford district had 546,412 usual residents at the 2021 Census, with children aged 10 to 14 making up 7.6% of them against 6.0% across England. It is the world\'s first UNESCO City of Film, and Saltaire, within the district, has been a World Heritage Site since 2001. Modern Age Coders teaches Bradford learners aged six to sixty-seven live online, in groups of five to ten sorted by level or one to one, with teachers in India and lesson times set in UK hours. The first lesson is free of charge; after that it is USD 100 a month for a group place or USD 150 a month for private lessons.',
  lead: 'Here is a walk anyone can take through Bradford\'s weather. The Met Office has kept monthly rainfall for its Bradford station, 134 metres up, since 1908, with the rainfall column complete from 1911. For every month from January 1911 to December 2025, take one step up if it was wetter than usual for that time of year and one step down if it was drier. The walker climbs to 28 steps up by June 1969, then drifts down to 12 below by November 2011. It looks like a story: wet decades, then a drying trend. But shuffle the same 1,380 steps into a random order and walk again, ten thousand times, and the typical shuffled walk strays about 30 steps from zero. A third of them spend at least 82% of their months on one side, just as the real walk did. That is a random walk, and learning not to read stories into one is the lesson Bradford\'s rain gives our teenage learners.',
  wa: 'Hello Modern Age Coders, we would like a free coding lesson for a learner in Bradford, please.',

  picks: {
    eyebrow: 'Course picks for Bradford',
    h2: 'Four courses for the City of Film',
    intro: 'Choose by what the learner likes most. Each course opens with a free live lesson, and booking needs no card.',
    items: [
      { course: 'mental-maths-mastery-kids', band: 'Ages 5 to 10', note: 'Number sense built around the number line, where counting steps up and down is the whole idea of a walk.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Probability and algebra built in Python, where a coin-toss walk makes a natural early project.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', band: 'A level years', note: 'Pure, mechanics and statistics for A level, including the hypothesis tests that ask whether a pattern could be chance.' },
      { course: 'statistics-probability-maths-course', band: 'University and adult', note: 'Probability, conditional probability and hypothesis testing for adults, the grammar behind any claim that a trend is real.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bradford today',
      h2: 'A district full of children and teenagers',
      intro: 'Census 2021 for the Bradford metropolitan district, from the Office for National Statistics tables on Nomis.',
      body: [
        { kind: 'table', caption: 'Bradford district, Census 2021', head: ['Census 2021', 'Bradford', 'England'], rows: [
          ['Usual residents', '546,412', 'Not compared'],
          ['In households', '540,549, 98.9%', 'Not compared'],
          ['In communal establishments', '5,863, 1.1%', 'Not compared'],
          ['Aged under 5', '36,096, 6.6%', '5.4%'],
          ['Aged 5 to 9', '39,556, 7.2%', '5.9%'],
          ['Aged 10 to 14', '41,350, 7.6%', '6.0%'],
          ['Aged 15 to 19', '37,779, 6.9%', '5.7%'],
          ['Schoolchildren and full-time students, of 510,315 aged five and over', '124,422, 24.4%', '20.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Every young band above England', p: 'Each five-year age band from birth to 19 made up a larger share of Bradford\'s residents than of England\'s; ages 10 to 14 reached 7.6% against 6.0%.' },
          { h3: 'Homes, not halls', p: 'Some 98.9% of residents lived in households and just 1.1% in communal establishments, so almost everyone lives in an ordinary household.' },
          { h3: 'Students across the district', p: 'In 2021, 24.4% of residents aged five and over were schoolchildren or full-time students, compared with 20.4% in England.' }
        ] },
        { kind: 'p', text: 'The practical point for families is choice at every level. A nine-year-old in Keighley starting with blocks, a GCSE student in Heaton who wants more than the syllabus and an adult in Ilkley returning to learning can each join five to ten others at exactly their stage, which a single local class could rarely offer all three.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Film, mills and a university',
      h2: 'The world\'s first City of Film',
      intro: 'From Bradford UNESCO City of Film, UNESCO\'s World Heritage List, the University of Bradford and Bradford Culture Company.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'City of Film', p: 'Bradford UNESCO City of Film describes Bradford as the world\'s first UNESCO City of Film, with a history in film and filmmaking going back to the birth of cinema.' },
          { h3: '2001', p: 'UNESCO inscribed Saltaire that year as a complete, well-preserved industrial village of the later 19th century, whose mills, public buildings and workers\' housing share one style and whose street plan survives intact.' },
          { h3: '1966', p: 'The University of Bradford says it became the UK\'s fortieth university that year, with the Prime Minister, Harold Wilson, installed as its first Chancellor.' }
        ] },
        { kind: 'p', text: 'The University reports 10,887 students for 2024/25, of whom 8,037 are undergraduates. Bradford was also UK City of Culture for 2025, a year-long programme of more than 5,000 events delivered by the charity Bradford Culture Company. We have no connection with any of these organisations. We name them because film, textiles and a technical university all depend on patterns, and this page is about telling a real pattern from an accidental one.' },
        { kind: 'spec', title: 'The weather file itself', p: 'The Met Office publishes the Bradford record as a plain text file: estimates carry an asterisk, missing months show three dashes and recent months are marked provisional. Rainfall is missing for all of 1908 to 1910, so the walk starts in January 1911 and stops at December 2025, before the provisional 2026 months.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A walk through 115 years of Bradford rain',
      intro: 'A random walk adds up a string of steps up and down. We built one from the Met Office Bradford rainfall record and set it beside ten thousand shuffled copies of itself.',
      body: [
        { kind: 'table', caption: 'Where the Bradford rain walk stood, January 1911 start, one step per month', head: ['Date', 'Position'], rows: [
          ['January 1920', '2 below the start'],
          ['January 1930', '7 above'],
          ['January 1950', '8 above'],
          ['June 1969', '28 above, the highest point'],
          ['January 1990', '15 above'],
          ['January 2010', 'Level with the start'],
          ['November 2011', '12 below, the lowest point'],
          ['January 2020', '8 below']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Decide what usual means', p: 'For each calendar month, find the median rainfall from 1911 to 2025. A month above its median is a step up and one below is a step down; the 12 months exactly on it stay put.' },
          { h3: '2. Take the walk', p: 'Add the steps in date order. The walk ends exactly where it began, because by definition half the Januaries sit above the January median and half below, and the same for every month.' },
          { h3: '3. Shuffle and compare', p: 'Put the same 1,380 steps in a random order and walk again, ten thousand times. Every shuffled walk also ends at zero, which makes it a fair comparison with the real one.' }
        ] },
        { kind: 'callout', h3: 'The story that chance tells', p: 'The real walk spent 82.0% of its months above zero and reached 28 steps up. Among the shuffled walks, 62.1% strayed at least 28 steps from zero at some point and 33.4% spent at least 82% of their months on one side. The wet middle of the century and the drift down since are exactly the kind of shape pure chance produces. That does not prove Bradford\'s rain has no pattern; it shows that this picture is not evidence of one.' },
        { kind: 'p', text: 'This is the surprising heart of random walks. People expect a fair walk to hover near zero, crossing back and forth; in fact long stays on one side are normal, and the typical distance a walk strays grows with the square root of its length. For 1,380 steps that square root is about 37. Learners who understand this stop seeing trends in every wandering line, whether it is rainfall, a game score or a league position.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reading a wandering line',
      h2: 'Five checks before calling something a trend',
      intro: 'Learned on rainfall, used afterwards on sales figures, game statistics, marks across a school year and any chart that seems to tell a story.',
      body: [
        { kind: 'table', caption: 'Testing a trend against chance', head: ['Check', 'What it looks like', 'What it prevents'], rows: [
          ['Say what a step is', 'Define up and down against a stated baseline, here each month\'s own median', 'A walk that drifts only because the baseline was wrong'],
          ['Notice built-in endings', 'Recognise that a median baseline forces the walk back to zero', 'Reading a forced return as a real recovery'],
          ['Compare with a fair baseline', 'Shuffle the same steps many times and walk each copy', 'Mistaking an ordinary wander for a signal'],
          ['Report how surprising it is', 'Give the share of shuffled walks at least as extreme as the real one', 'Striking charts with no measure of surprise'],
          ['Handle the gaps', 'Start after missing years and stop before provisional months', 'Missing months quietly treated as dry ones']
        ] },
        { kind: 'p', text: 'The last check matters because the file marks missing months with three dashes. A careless parser that turns them into zero millimetres adds three years of false dry steps at the very start of the record, and the whole walk shifts.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A coin-toss walk along a number line in the playground, then the same walk drawn step by step by a short program.' },
          { h3: 'Teenagers', p: 'The Met Office file parsed flag by flag, the rain walk built in Python, ten thousand shuffles run and the verdict written up.' },
          { h3: 'Adults', p: 'Trend claims at work tested against shuffled versions of the same data before anyone puts them in a report.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Met Office, Bradford UNESCO City of Film, UNESCO, the University of Bradford or Bradford Culture Company. The station record is published for public use; the walk, the shuffles and the percentages are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a coin-toss walk to a trend you can test',
    intro: 'The age bands are a starting guess; the free lesson sets the level properly.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Coin-toss walks', p: 'Steps up and down a number line decided by a coin, and the surprise of how far a fair walk can wander.', courses: ['mental-maths-mastery-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Positive and negative steps', p: 'Running totals, negative numbers and a first loop that draws a walk on screen.', courses: ['maths-through-coding', 'comprehensive-middle-school-mathematics-mastery'] },
      { band: 'Ages 14 to 18', h3: 'Random walks in Python', p: 'Real records turned into walks, shuffles run by the thousand and the square-root spread checked.', courses: ['python-complete-masterclass-teens', 'a-level-maths-course-pure-mechanics-statistics'] },
      { band: 'Ages 18 to 67', h3: 'Signal or noise at work', p: 'Hypothesis tests, simulation and honest reporting for anyone who has to say whether a trend is real.', courses: ['statistics-probability-maths-course', 'data-analytics-mathematics-masterclass'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will happily find a trend in any chart. Why should a Bradford teenager build a random walk?',
    intro: 'Because a random walk is the surest defence against trends that are not there.',
    p1: 'Show an AI tool the Bradford rain walk and ask what it shows, and it may well describe wet decades followed by a drying trend, in fluent and persuasive language. Nothing in the chart supports that more strongly than chance would. A learner who has shuffled the steps ten thousand times knows to ask how often luck alone draws the same picture.',
    p2: 'Random walks also run through a great deal of computing. They drive the simulations behind games and physics, one famous way of ranking web pages imagines a surfer clicking links at random, and they appear in methods for learning from networks of data. Building one by hand is a small first step into all of that.',
    closer: 'That is why a Bradford teenager should still learn to program in 2026, in the world\'s first City of Film: machines can spin a story out of any chart, and knowing when the story is only chance is a skill worth keeping for life.',
    blogAnchor: 'the case for learning to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Keighley, Shipley or Ilkley, joined from home',
    intro: 'Bradford district runs from the city centre out to Keighley, Haworth and Ilkley; a live online lesson makes the distance irrelevant.',
    cells: [
      { h3: 'Town or moorland, one lesson', p: 'A learner in Haworth and another in Manningham can share a lesson without either of them travelling across the district.' },
      { h3: 'Stages Bradford schools use', p: 'From Reception through Key Stages 1 to 4, Year 9 options, GCSEs and A levels, we use the same stages as local schools, and teach in English.' },
      { h3: 'A proper first lesson', p: 'We teach a real task in the free lesson, then recommend a level, a course and a weekly slot. Booking it asks for no card.' },
      { h3: 'Levels decide the group', p: 'Five to ten learners at one stage, drawn from Bradford, the rest of the UK and overseas, so every level can meet at a time that works.' },
      { h3: 'Two lessons a week', p: 'The same two weekly times, about eight lessons a month, with holiday and exam breaks agreed with the teacher beforehand.' },
      { h3: 'India-based teachers', p: 'Our teachers work on India Standard Time, which never shifts: four and a half hours ahead of Bradford in summer and five and a half in winter, so after-school and evening lessons sit inside their working hours.' }
    ],
    spec: { title: 'Starting young', p: 'Bradford has a large share of children, and our youngest learners start at six with block coding in groups at their level, moving to Python when they are ready rather than on a fixed date.' }
  },

  fees: {
    h2: 'What Bradford lessons cost',
    intro: 'Two monthly prices after one free lesson.',
    first: 'A complete lesson at no charge, closing with a recommended level, course and weekly time.',
    group: 'Around eight live lessons a month in a group of five to ten learners at one level.',
    private: 'Around eight live lessons a month with a teacher who teaches only your learner.',
    closer: 'Families outside India all pay one US dollar fee, so a household in Bingley pays the same as one in Queensbury, and we do not quote prices in pounds. Charges begin only after the free lesson has agreed a course and a time; our pricing page explains pauses, missed lessons and changes between group and private teaching.'
  },

  reviewsH2: 'Google reviews from six families, as posted',

  book: {
    h2: 'Set up a free lesson for a Bradford learner',
    intro: 'We match the first task to the learner: a coin-toss walk for a young child, a first Python program that draws one, or the Met Office Bradford record and ten thousand shuffles for a teenager ready for real data.',
    success: 'Thank you. We will contact you soon to arrange a Bradford lesson.'
  },

  faq: {
    h2: 'Bradford coding class questions',
    intro: 'What Bradford families most often want to know.',
    items: [
      { q: 'How many people live in Bradford district?', a: 'The 2021 Census counted 546,412 usual residents: 540,549 in households and 5,863, or 1.1%, in communal establishments.' },
      { q: 'Is Bradford a young district?', a: 'Its age profile is younger than England\'s. In 2021 every five-year band from birth to 19 made up a larger share of residents than nationally; those aged 10 to 14, for example, were 7.6% against 6.0%.' },
      { q: 'What does City of Film mean?', a: 'Bradford UNESCO City of Film describes Bradford as the world\'s first UNESCO City of Film, part of UNESCO\'s Creative Cities Network. We are not connected with the organisation.' },
      { q: 'What is a random walk?', a: 'A path built by adding up random steps, such as one step up or down for each coin toss. The Bradford project builds one from monthly rainfall and compares it with shuffled copies of itself.' },
      { q: 'Has Bradford been getting drier?', a: 'The rain walk falls from 28 steps up in June 1969 to 12 below by November 2011, but a third of walks made from the same steps in random order are at least as lopsided, so this picture alone is not evidence of a trend.' },
      { q: 'What is Saltaire?', a: 'A 19th-century industrial village in Bradford district, inscribed by UNESCO as a World Heritage Site in 2001 as a complete and well-preserved example of its kind.' },
      { q: 'When are lessons for Bradford learners?', a: 'After school, in the evening or at weekends, at a UK time fixed during the free lesson. Our teachers are four and a half hours ahead of Bradford in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders centre in Bradford?', a: 'No. We have no centre in Bradford and no premises in the UK; every lesson runs live online. Learners need a computer with sound and a steady connection, and our phone line is in India.', boiler: true },
      { q: 'What do Bradford lessons cost?', a: 'The first lesson is free. Then a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same pattern cost USD 150 a month. Course, format and time are agreed before anything is charged.', boiler: true },
      { q: 'How are Bradford groups arranged?', a: 'By level, pace and goals, not by age or postcode, with five to ten learners at one stage. If no group suits the learner\'s times, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'Yorkshire neighbours and other cities',
    html: 'Next door, the <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds page</a> samples a footfall record fairly. Over the Pennines, <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a> times a rise travelling down the River Medlock, and the <a class="cg-inline-link" href="/best-coding-class-in-oxford">Oxford page</a> builds a Markov chain from two centuries of rain. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out the school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> lists every UK page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bradford and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-leeds', label: 'Leeds' },
    { href: '/best-coding-class-in-manchester', label: 'Manchester' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-bfd .cg-hero-grid { align-items: end; gap: clamp(1.05rem, 3.3vw, 2.75rem); }
.cg-root.cg-bfd .cg-hero h1 { font-weight: 700; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-bfd .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-bfd .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bfd .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.014em; }
.cg-root.cg-bfd .cg-grid-3 { gap: clamp(1.1rem, 2.9vw, 2.35rem); }
.cg-root.cg-bfd .cg-table caption { font-weight: 700; letter-spacing: 0.012em; }
.cg-root.cg-bfd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bfd .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-bfd .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Bradford, Census 2021 via Nomis: TS001 Bradford metropolitan district (E08000032) 546,412 usual residents, 540,549 in households (98.9 percent), 5,863 in communal establishments (1.1 percent); TS007A 36,096 aged under 5 (6.6 percent), 39,556 aged 5 to 9 (7.2 percent), 41,350 aged 10 to 14 (7.6 percent), 37,779 aged 15 to 19 (6.9 percent), against England 5.4, 5.9, 6.0 and 5.7 percent; TS068 124,422 schoolchildren and full-time students of 510,315 residents aged 5 and over, 24.4 percent, against 20.4 percent in England. Bradford UNESCO City of Film: the world\'s first UNESCO City of Film, with a history in film dating back to the birth of cinema. UNESCO World Heritage List 1028, Saltaire: inscribed 2001; a complete and well-preserved industrial village of the second half of the 19th century. University of Bradford: the UK\'s fortieth university in 1966, Harold Wilson first Chancellor; 10,887 students in 2024/25 (8,037 undergraduate). Bradford Culture Company: delivered Bradford 2025 UK City of Culture, more than 5,000 events.',
    localProject: 'A walk through 115 years of Bradford rain. Met Office historic station data, Bradford, 134 m amsl, read 21 September 2026: 1,424 months, rain 7 estimated, 36 missing (1908 to 1910), 8 provisional. Walk January 1911 to December 2025, 1,380 months; step against each calendar month\'s 1911-2025 median: 684 up, 684 down, 12 level; ends at 0 by construction. Highest 28 (June 1969), lowest -12 (November 2011). Above zero 1,132 months (82.0 percent). Ten thousand shuffles of the same steps: median farthest distance 30; 62.1 percent reach 28 or more; 33.4 percent at least 82 percent on one side. sqrt(1,380) about 37. Lesson family: random walks (cumulative steps, square-root spread, long one-sided stays, shuffled comparison); distinct from Markov chains, bootstrap confidence intervals and regression to the mean.',
    requiredMentions: [
      '546,412',
      '540,549',
      '5,863',
      '124,422',
      '510,315',
      '41,350',
      '39,556',
      '10,887',
      'Saltaire',
      'City of Film',
      'Harold Wilson',
      'June 1969'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Bradford: 546,412 usual residents; 540,549 in households; 5,863 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E08000032' },
      { claim: 'Nomis, Census 2021 TS007A: Bradford and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E08000032,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Bradford 124,422 students of 510,315 aged 5 and over (24.4 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E08000032,E92000001' },
      { claim: 'Met Office historic station data, Bradford: monthly rainfall from 1908, flags and provisional months.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/bradforddata.txt' },
      { claim: 'Bradford UNESCO City of Film, About: the world\'s first UNESCO City of Film.', url: 'https://www.bradford-city-of-film.com/about/' },
      { claim: 'UNESCO World Heritage List, Saltaire: inscribed 2001.', url: 'https://whc.unesco.org/en/list/1028/' },
      { claim: 'University of Bradford, About: fortieth UK university in 1966; 10,887 students in 2024/25.', url: 'https://www.bradford.ac.uk/about/' },
      { claim: 'Bradford Culture Company, About: Bradford 2025 UK City of Culture, more than 5,000 events.', url: 'https://bradford2025.co.uk/about/' }
    ],
    rejectedClaims: [
      'National Science and Media Museum facts: the about page returned HTTP 405, so nothing from it is stated.',
      'The year Bradford became a City of Film: not given on the page read, so not stated.',
      'That Bradford is getting drier or wetter: the page shows the walk is consistent with chance and makes no trend claim.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Met Office, Bradford UNESCO City of Film, UNESCO, the University of Bradford or Bradford Culture Company.'
    ]
  }
};
