'use strict';
// Hillingdon (cg- London borough page, UK cluster Phase 5, row 159). Named sources only.
// Spine: a straight line through 78 years hides when the change happened. Learners fit LOESS (locally weighted
// regression, tricube weights, local linear) to annual mean temperature at the Met Office's Heathrow station
// (stationdata heathrowdata.txt: "Heathrow (London Airport)", 507800E 176700N, 25 m amsl; the point lies inside
// the ONS December 2024 BFC boundary of Hillingdon, E09000017). Annual mean = mean of the twelve monthly values of
// (tmax + tmin) / 2; complete years 1948 to 2025 (78), provisional 2026 months excluded; no estimated values.
// Span chosen by leave-one-out cross-validation over 0.15..1.0: RMSE 0.536 C at spans 0.3 and 0.4 (tie; the smaller
// span kept), straight line 0.564 C, so LOESS predicts left-out years only slightly better. What it adds is shape:
// straight line 0.307 C per decade throughout; LOESS +0.25 C from 1949 to 1985 (0.069 per decade) and +1.94 C from
// 1985 to 2025 (0.486 per decade). Warmest years 2022 (12.84), 2025 (12.77), 2023 (12.70); coolest 1963 (9.32),
// 1962 (9.37), 1956 (9.45). One station only; its surroundings changed over the period and the page says so.
// Lesson family: LOESS / local regression smoothing with cross-validated span. Screened 25 September 2026
// (loess, lowess, local regression: 0). Distinct from least squares (Sheffield), quantile regression (Ripon),
// isotonic regression (Wrexham), Mann-Kendall (Chichester), Kalman (Hereford) and forecast baselines (Dundee).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'HILLINGDON', blurb: 'Sixteen libraries, the Heathrow weather record and a project on when the warming happened.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-hillingdon-london',
  code: 'hlg',
  accent: '#6A4339',
  accentRationale: 'Hillingdon: a brick brown from the solver (6.89:1 on every paper tint), well away from the Harrow violet next door and the Hounslow green',
  pageType: 'governorate',
  place: {
    name: 'Hillingdon',
    eyebrow: 'London Borough of Hillingdon',
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
  routeLabel: 'Hillingdon, London',
  title: 'Coding Classes in Hillingdon, Uxbridge, Hayes | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Hillingdon: Uxbridge, Hayes, Ruislip, Northwood, West Drayton and Harefield, ages 6 to 67. First lesson free.',
  ogDescription: 'Coding and Python classes for Hillingdon, on a page that smooths 78 years of Heathrow temperatures to find when the warming happened.',
  twitterDescription: 'Hillingdon coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Hillingdon Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Hillingdon, taught live in English.'
  },

  h1: 'Coding classes in Hillingdon',
  capsuleQ: 'What are the best coding classes in Hillingdon?',
  capsule: 'Hillingdon is London\'s far-western borough, from Harefield and Northwood down through Ruislip, Uxbridge and Hayes to West Drayton and Heathrow, and 305,909 people lived there at the 2021 Census. Its council lists sixteen libraries, and Uxbridge station is served by both the Metropolitan and Piccadilly lines. A good class for a Hillingdon learner should teach them to ask what a chart is hiding, and this page\'s project does it with the Met Office weather record kept at Heathrow since 1948. Our teachers work live over video from India, one to one or with five to ten learners at the same level, for ages 6 to 67. The first lesson is free, and after it a group place costs USD 100 a month and private lessons USD 150 a month.',
  lead: 'Draw a straight line through 78 years of Heathrow temperatures and it tells a calm story: about 0.31 degrees of warming every decade, steady from 1948 to today. Let a program bend the line to follow the data, using a method called LOESS, and a different story appears. From 1949 to 1985 the smoothed curve barely moves, a quarter of a degree in 36 years. From 1985 to 2025 it climbs almost two degrees. Same data, same station, and a completely different answer to the question most people actually ask: when did it happen? Choosing how much to bend the line is its own lesson. Bend too little and you hide the change; bend too much and you chase every hot summer. Our learners let the data choose, by leaving out one year at a time and testing which setting predicts it most closely.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Hillingdon.',

  picks: {
    eyebrow: 'Course picks for Hillingdon',
    h2: 'Four courses for Hillingdon learners',
    intro: 'Think of a Year 3 child in Yiewsley who keeps a weather diary, a Year 9 pupil in Ruislip choosing options, a Year 13 student in Uxbridge who wants a data project that means something, and a grandparent in Harefield curious about what all the climate charts are showing. Each starts with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects that record a reading every day and draw it as a line, the first step towards seeing a trend.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with real numbers: reading a file of temperatures, averaging a year and finding the warmest one.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 and 4 and beyond, with this page\'s LOESS project on the Met Office Heathrow record.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For grown-ups who read trend charts at work and want to know when a straight line is hiding the real shape.' }
    ]
  },

  sections: [
    {
      id: 'hillingdon', tint: '', eyebrow: 'Hillingdon counted',
      h2: '305,909 people, sixteen libraries and 432 listed buildings',
      intro: 'Every number below is published by the organisation in the right-hand column.',
      body: [
        { kind: 'table', caption: 'The borough in its publishers\' figures', head: ['Figure', 'Value', 'Publisher'], rows: [
          ['Residents counted at the 2021 Census', '305,909', 'ONS Census table TS001, via Nomis'],
          ['Libraries on the council\'s branch list', '16, including a pop-up in Northwood', 'Hillingdon Council'],
          ['Listed entries inside the borough', '432: 9 Grade I, 30 Grade II*, 393 Grade II', 'Historic England list data, counted 25 September 2026'],
          ['Lines at Uxbridge station', 'Metropolitan and Piccadilly', 'TfL open data, checked 25 September 2026'],
          ['Complete years in the Heathrow weather record', '78, from 1948 to 2025', 'Met Office historic station data']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Nine at Grade I', p: 'Hillingdon\'s Grade I entries include the Group Operations Room at Uxbridge, The Great Barn at Harmondsworth, Swakeleys, Breakspear House and Ickenham Manor, alongside several parish churches.' },
          { h3: 'Among the Grade II*', p: 'The borough\'s 30 Grade II* entries range from the Polish Air Force Memorial to the Heinz administrative headquarters and former research laboratories at Hayes.' },
          { h3: 'The weather station', p: 'The Met Office gives its Heathrow station a grid position of 507800E 176700N, 25 m above sea level. We checked that point against the ONS boundary: it falls inside Hillingdon.' }
        ] }
      ]
    },
    {
      id: 'libraries', tint: 'tint', eyebrow: 'Hillingdon libraries',
      h2: 'Sixteen libraries from Harefield to West Drayton',
      intro: 'The names as Hillingdon Council lists them on its branch page. The council also runs a mobile library.',
      body: [
        { kind: 'table', caption: 'Hillingdon Council\'s library branches', head: ['North and centre', 'South and west'], rows: [
          ['Harefield Library', 'Botwell Green Library'],
          ['Northwood Hills Library', 'Charville Library'],
          ['Northwood Pop-up Library', 'Hayes End Library'],
          ['Eastcote Library', 'Yeading Library'],
          ['Ruislip Manor Library', 'Oak Farm Library'],
          ['South Ruislip Library', 'West Drayton Library'],
          ['Manor Farm Library', 'Yiewsley Library'],
          ['Ickenham Library', 'Uxbridge Library']
        ] },
        { kind: 'p', text: 'The two-column split is ours, to make the list easier to scan, and is only rough geography. A library table and a headset make a fair backup for an online lesson; for the project on this page a learner needs Python and one free text file from the Met Office.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Seventy-eight years at Heathrow: a straight line against a curve that listens',
      intro: 'Learners turn the Met Office\'s monthly Heathrow figures into yearly averages, fit a straight line and a LOESS curve, and let cross-validation decide how much the curve may bend.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Build the yearly series', p: 'For every month the file gives an average daily maximum and minimum. The mean of the two, averaged over twelve months, gives one figure a year. Complete years run from 1948 to 2025; this year\'s months are still marked provisional and are left out.' },
          { h3: '2. Fit locally', p: 'LOESS fits a small straight line around each year, using only the nearest years and giving the closest the most weight. The span sets how many years each small line sees, and so how smooth the result is.' },
          { h3: '3. Let the data pick the span', p: 'Leave one year out, fit without it, predict it, repeat for all 78 years, and measure the typical miss. Spans of 0.3 and 0.4 tied for the smallest miss; we kept the smaller one.' }
        ] },
        { kind: 'table', caption: 'Our run, 25 September 2026: annual mean temperature at Heathrow, degrees Celsius', head: ['Year', 'That year', 'LOESS curve', 'Straight line'], rows: [
          ['1949', '11.32', '10.52', '9.96'],
          ['1960', '10.60', '10.28', '10.30'],
          ['1970', '10.68', '10.48', '10.61'],
          ['1980', '10.38', '10.61', '10.92'],
          ['1990', '12.05', '11.08', '11.22'],
          ['2000', '11.58', '11.67', '11.53'],
          ['2010', '10.59', '11.80', '11.84'],
          ['2020', '12.59', '12.34', '12.14'],
          ['2025', '12.77', '12.71', '12.30']
        ] },
        { kind: 'p', text: 'Measured by leaving out one year at a time, the curve misses by 0.536 degrees on average and the straight line by 0.564, so the curve is only slightly better at prediction. Its value is in what it shows. The straight line spreads the warming evenly at 0.31 degrees a decade. The curve puts a quarter of a degree between 1949 and 1985 and 1.94 degrees between 1985 and 2025, close to half a degree a decade. The warmest years in the record are 2022, 2025 and 2023; the coolest are 1963, 1962 and 1956.' },
        { kind: 'callout', h3: 'Why an AI does not settle this for you', p: 'Ask an assistant for the warming trend at Heathrow and you may well get a single number per decade from a straight line, stated with confidence. It is not false, but it answers a question nobody asked. A learner who has fitted both, and compared them fairly by leaving years out, knows to ask whether a trend is steady or whether it changed, and to be careful at the very ends of a smoothed curve, where it has the fewest neighbours to lean on.' }
      ]
    },
    {
      id: 'caveats', tint: 'tint', eyebrow: 'Reading it honestly',
      h2: 'One station, seventy-eight years, and what that can tell you',
      intro: 'Good data projects say what they cannot show. These are the limits our learners write down alongside their curve.',
      body: [
        { kind: 'table', caption: 'What this record does and does not show', head: ['Question', 'Can the Heathrow record answer it?'], rows: [
          ['How warm has it been at this station, year by year?', 'Yes, from the Met Office\'s own monthly figures'],
          ['Did the rate of warming change over time?', 'It suggests so: the curve is flat to the mid-1980s and steep after'],
          ['How much is due to the station\'s surroundings changing?', 'Not from this file alone; it would need nearby stations to compare'],
          ['Is this the trend for the whole UK?', 'No. It is one place; a national picture needs many stations, not one'],
          ['What will next year be?', 'No. A smoother describes the past; it is not a forecast']
        ] },
        { kind: 'p', text: 'Modern Age Coders is not linked to Hillingdon Council, the Met Office, Historic England, Transport for London or the Office for National Statistics, and does not suggest otherwise. The library names are the council\'s, the weather figures the Met Office\'s; the yearly averages, the curve, the cross-validation and the boundary checks are our own work, run on 25 September 2026.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'North to south',
      h2: 'From Harefield to West Drayton, one online classroom',
      intro: 'Hillingdon is a long borough, nearly twenty kilometres from its northern tip to Heathrow. None of that distance applies online.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Uxbridge', p: 'TfL\'s open data lists the Metropolitan and Piccadilly lines at Uxbridge station, in the same town centre as Uxbridge Library.' },
          { h3: 'Top to bottom', p: 'A learner near Harefield Library and one near West Drayton Library can share a group, each at their own desk.' },
          { h3: 'A link to Hounslow', p: 'By our calculation from the published positions, the Heathrow weather station sits about 120 metres from the monument at the north-western end of General Roy\'s 1784 base line, the story told on our <a class="cg-inline-link" href="/coding-classes-in-hounslow-london">Hounslow page</a>.' }
        ] },
        { kind: 'spec', title: 'Hillingdon and the rest of London', p: 'Hillingdon is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists them all and links each as its page appears, including <a class="cg-inline-link" href="/coding-classes-in-harrow-london">Harrow</a> to the east.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a weather diary to a cross-validated curve',
    intro: 'We place each learner by what they can already do in the first lesson, which may not match their school year.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Record and draw', p: 'Children log a reading each day and draw it, then talk about what goes up, what goes down and what just wobbles.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Average and compare', p: 'Python that reads a file, averages each year and compares decades, with charts that label their axes honestly.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Smooth and test', p: 'Straight lines, LOESS and cross-validation on real open data: the core of a strong statistics or computing project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Question the trend line', p: 'Adults learn to ask whether a trend is steady or changing, and what a single series can and cannot support.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can draw a trend line through Heathrow\'s weather in a second. Why should a Hillingdon teenager learn to question it?',
    intro: 'Because the neatest line is often the least informative one.',
    p1: 'A straight trend line is the default in spreadsheets, dashboards and AI summaries. On the Heathrow record it gives about 0.31 degrees a decade, a tidy and quotable figure. It also flattens a record in which, by our curve, almost all the warming came after the mid-1980s. Business reports, school league charts and health statistics are summarised the same way every day, and the straight line rarely comes with a warning.',
    p2: 'A learner who has fitted a curve that listens to the data, and tested it fairly against the line, learns three habits: look at the shape before the slope, choose settings by testing rather than by taste, and distrust the ends of any smoothed curve. The software will draw whatever it is told. Deciding what to draw, and what to say about it, is the skill.',
    closer: 'A computer will always draw the line faster. The reason for a Hillingdon child to learn to code is to be the person who notices that the line is the wrong shape, and can prove it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Northwood to Heathrow\'s edge, taught at home',
    intro: 'Every postcode in Hillingdon is the same distance from an online lesson: none at all.',
    cells: [
      { h3: 'Wherever the laptop is', p: 'Most learners join from home; a library table with headphones is a good plan B.' },
      { h3: 'Stages by their English names', p: 'Reception to Year 13, SATs, Year 9 options, GCSEs, A levels and T Levels are named as English schools name them. Teaching is in English.' },
      { h3: 'Try first, pay later', p: 'The first lesson is a real task with a teacher, ending with a suggested level and course. We ask for no card.' },
      { h3: 'Matched, small groups', p: 'Five to ten learners at one level, from Hillingdon and far beyond, so a group exists at a workable hour.' },
      { h3: 'Two a week, school permitting', p: 'Most groups meet twice weekly, pausing for half terms, holidays and exams by agreement.' },
      { h3: 'Always in UK time', p: 'Teachers are in India, but the time on every invitation and reminder is the time on your own clock.' }
    ],
    spec: { title: 'Sixteen libraries, one matched group', p: 'Hillingdon has sixteen libraries and many schools, yet a good coding group needs five learners at the same level and hour, so ours reach well beyond the borough.' }
  },

  fees: {
    h2: 'Fees for Hillingdon families',
    intro: 'A free first lesson, then a single monthly fee, the same in every part of the borough.',
    first: 'A full first lesson with a teacher at no charge, ending with a suggested level, course and weekly time.',
    group: 'Close to eight live lessons each month, in a group of five to ten at one level.',
    private: 'Close to eight live lessons each month, one teacher, one learner.',
    closer: 'Hillingdon families, from Harefield to Hayes, are billed in US dollars like every family outside India, and pound prices appear nowhere on our site. Payment starts only after the free lesson, when a course and weekly time are settled; the pricing page explains how pauses, missed lessons and moves between group and one-to-one work.'
  },

  reviewsH2: 'Six Google reviews, copied without changes',

  book: {
    h2: 'Tell us about your learner',
    intro: 'Their age or school year and what they like doing is enough. The first task could be a Scratch weather chart, a first Python program, or the Heathrow curve on this page.',
    success: 'Thank you. Your Hillingdon class request is on its way to our team.'
  },

  faq: {
    h2: 'Hillingdon coding class questions',
    intro: 'About the borough, the Heathrow project and our lessons.',
    items: [
      { q: 'How many people live in Hillingdon?', a: 'The 2021 Census counted 305,909 usual residents in the London Borough of Hillingdon, according to Office for National Statistics table TS001.' },
      { q: 'What libraries does Hillingdon have?', a: 'Hillingdon Council lists sixteen on its branch page, from Harefield, Northwood Hills, Eastcote and the Ruislip libraries to Uxbridge, Hayes End, Botwell Green, Charville, Yeading, Oak Farm, West Drayton and Yiewsley, plus a pop-up in Northwood and a mobile library.' },
      { q: 'Is the Heathrow weather station in Hillingdon?', a: 'Yes. The Met Office gives it a grid position of 507800E 176700N, 25 m above sea level, and that point falls inside the ONS boundary of Hillingdon.' },
      { q: 'What is the Heathrow temperature project?', a: 'Learners average the Met Office\'s monthly Heathrow figures into 78 yearly values from 1948 to 2025, fit a straight line and a LOESS curve, and compare them by leaving out one year at a time. The line says 0.31 degrees a decade; the curve shows a quarter of a degree before 1985 and 1.94 degrees after.' },
      { q: 'What is LOESS?', a: 'A way of drawing a smooth curve through data by fitting many small straight lines, each using only nearby points and giving the closest ones most weight. A setting called the span controls how smooth it is; we choose it by cross-validation.' },
      { q: 'When are lessons for Hillingdon learners?', a: 'We settle a regular time after the free lesson, from the groups at the learner\'s level with a free place. The teacher works on India time, but every time we send you is written in UK time, whatever the season.' },
      { q: 'Can my child join from a Hillingdon library?', a: 'Yes, if the library\'s computers and connection allow it, with headphones. Most learners find home quieter.' },
      { q: 'Does Modern Age Coders have a centre in Hillingdon?', a: 'No. There is no centre in Hillingdon or anywhere else in the UK, because all our teaching happens live online. A learner needs a computer with sound and a steady connection, and our phone number is an Indian one.', boiler: true },
      { q: 'What do coding classes in Hillingdon cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than by age or postcode, in groups of five to ten at one stage. Where no group fits the learner\'s week, one-to-one lessons are available instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Further into London, and across the UK',
    html: 'Neighbouring <a class="cg-inline-link" href="/coding-classes-in-hounslow-london">Hounslow</a> and <a class="cg-inline-link" href="/coding-classes-in-harrow-london">Harrow</a> have their own pages, and the <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> collects every borough and the City as their pages are published. For machine learning in the capital, see <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a>; for the school stages of all four nations, the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hillingdon and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-hounslow-london', label: 'Hounslow' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-hlg .cg-hero-grid { align-items: end; gap: clamp(1.2rem, 3.4vw, 2.8rem); }
.cg-root.cg-hlg .cg-hero h1 { font-weight: 800; letter-spacing: -0.022em; line-height: 1.02; }
.cg-root.cg-hlg .cg-capsule { background: color-mix(in srgb, var(--cg-accent) 6%, transparent); padding: 1rem 1.1rem; border-radius: 6px; }
.cg-root.cg-hlg .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hlg .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.014em; }
.cg-root.cg-hlg .cg-grid-3 { gap: clamp(0.9rem, 2.6vw, 1.9rem); }
.cg-root.cg-hlg .cg-table caption { font-weight: 700; }
.cg-root.cg-hlg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hlg .cg-table tbody tr:nth-child(even) td { background: color-mix(in srgb, var(--cg-accent) 4%, transparent); }
.cg-root.cg-hlg .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-hlg .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Hillingdon. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000017): 305,909 usual residents (300,420 households, 5,489 communal). Hillingdon Council, Library branches page, names read 25 September 2026: Botwell Green Library, Charville Library, Eastcote Library, Harefield Library, Hayes End Library, Ickenham Library, Manor Farm Library, Northwood Hills Library, Northwood Pop-up Library, Oak Farm Library, Ruislip Manor Library, South Ruislip Library, Uxbridge Library, West Drayton Library, Yeading Library, Yiewsley Library (16); mobile library page linked from the libraries page. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 432 (I 9, II* 30, II 393); Grade I 1392556 GROUP OPERATIONS ROOM, 1194332 The Great Barn, Harmondsworth, 1080295 SWAKELEYS, 1080262 BREAKSPEAR HOUSE, 1080187 ICKENHAM MANOR; II* 1088113 Polish Air Force Memorial, 1242724 Heinz Administrative Headquarters and Former Research Laboratories. TfL Unified API StopPoint 940GZZLUUXB (Uxbridge), 25 September 2026: Metropolitan, Piccadilly. Met Office historic station data, heathrowdata.txt: "Heathrow (London Airport) Location 507800E 176700N, Lat 51.479 Lon -0.449, 25m amsl"; point-in-polygon: inside Hillingdon.',
    localProject: 'LOESS on Heathrow annual mean temperature. heathrowdata.txt read 25 September 2026: 944 months 1948-01 to 2026-08; 8 provisional (2026) excluded; no estimated tmax/tmin values; complete years 1948-2025 (78). Annual mean = mean over 12 months of (tmax+tmin)/2. LOESS: local linear, tricube weights, k = ceil(span x n) nearest years. LOOCV RMSE: 0.15 0.543, 0.2 0.549, 0.25 0.542, 0.3 0.536, 0.4 0.536, 0.5 0.540, 0.6 0.541, 0.75 0.543, 0.9 0.546, 1.0 0.548; straight line 0.564; tie at 0.3/0.4 broken to the smaller span. Straight line slope 0.307 C/decade. LOESS (0.3): 1949 10.52, 1960 10.28, 1970 10.48, 1980 10.61, 1990 11.08, 2000 11.67, 2010 11.80, 2020 12.34, 2025 12.71; change 1949-1985 +0.25 (0.069/decade), 1985-2025 +1.94 (0.486/decade). Annual values: 1949 11.32, 1960 10.60, 1970 10.68, 1980 10.38, 1990 12.05, 2000 11.58, 2010 10.59, 2020 12.59, 2025 12.77. Warmest 2022 12.84, 2025 12.77, 2023 12.70; coolest 1963 9.32, 1962 9.37, 1956 9.45. Station to NHLE 1119717 (Roy base NW end, 507714,176789): about 124 m. Lesson family: LOESS with cross-validated span, screened free 25 September 2026.',
    requiredMentions: [
      '305,909',
      'Botwell Green',
      'Charville',
      'Yiewsley',
      'Oak Farm Library',
      'Group Operations Room',
      'Great Barn',
      'LOESS',
      '507800E 176700N'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Hillingdon E09000017: 305,909 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000017&measures=20100' },
      { claim: 'Hillingdon Council: library branches, sixteen names including Northwood Pop-up Library.', url: 'https://www.hillingdon.gov.uk/library-branches' },
      { claim: 'Historic England NHLE listed building points, inside the ONS boundary of Hillingdon on 25 September 2026: 432 (9 I, 30 II*, 393 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'Met Office historic station data, Heathrow: monthly tmax, tmin, air frost, rain and sun from 1948; location 507800E 176700N, 25 m amsl.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/heathrowdata.txt' },
      { claim: 'ONS Local Authority Districts December 2024 boundaries (BFC), Hillingdon E09000017.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_December_2024_Boundaries_UK_BFC/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint 940GZZLUUXB (Uxbridge), 25 September 2026: Metropolitan and Piccadilly lines.', url: 'https://api.tfl.gov.uk/StopPoint/940GZZLUUXB' }
    ],
    rejectedClaims: [
      'Heathrow Airport passenger or flight statistics: not read at a primary source for this build and not needed.',
      'Any statement that the station\'s warming is due to airport growth or urban heat: not testable from one station\'s file, so the page lists it as an open question.',
      'Library addresses: the branch page lists names; addresses were not read for every branch, so the page gives names only.',
      'Individual Hillingdon state schools: not read at their own sites for this build, so none is named.',
      'Census ethnicity, religion or country of birth for Hillingdon: never a standout; used only to order the build.'
    ]
  }
};
