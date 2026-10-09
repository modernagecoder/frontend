'use strict';
// Kalgoorlie-Boulder (cg- regional city page, Australia cluster Phase 7, row 171). Shaped page (best): leads with
// teenagers and adults. Spine: how big is the deep hollow beside Kalgoorlie on a 2000 elevation grid, and why do
// counting squares and Pick's theorem give different areas? Data: NASA SRTM 1 arc-second elevation (SRTMGL1 version 3,
// LP DAAC: flown 11 to 21 February 2000; voids in version 3 filled from ASTER GDEM v2, GMTED2010 or NED), sampled
// through the OpenTopoData srtm30m service on 8 October 2026 at points 0.0004 degrees apart, latitude -30.800 to
// -30.752, longitude 121.480 to 121.532 (121 by 131 points; spacing 38.26 m east-west by 44.23 m north-south). Lowest
// sample 145 m at -30.7844, 121.5044; median of all samples 365 m. Region = points below a height that connect
// (8-neighbour) to the lowest point, holes filled. Measured by us (scratchpad au/r5/kal_pick.py): below 200 m: 129
// points, boundary B 47, interior I 82, Pick 104.5 = shoelace; 250 m: 338/81/257, 296.5; 280 m: 532/101/431, 480.5;
// 300 m: 735/106/629, 681.0 (124.37 ha counting cells, 115.23 ha by Pick); 320 m: 851/115/738, Pick 794.5 but
// shoelace 792.5 because the traced boundary touches itself (not a simple polygon); 330 m: 905/114/791, 847.0;
// 340 m: 964/115/849, 905.5; 350 m: 1,032/119/913, 971.5. Cells minus Pick = B/2 + 1 whenever the polygon is simple.
// Reading the hollow as the Fimiston open pit is our interpretation, supported by Northern Star Resources' KCGM page
// (read 8 October 2026): "Adjacent to the City of Kalgoorlie-Boulder", "1989 Commenced gold production", and "KCGM
// Operations include the Fimiston open pit (Super Pit)". Lesson family: Pick's theorem against cell counting on a grid
// polygon; screened free site-wide on 9 October 2026 and claimed by AU-R5.
// Place facts read raw on 8 October 2026: ABS Census 2021 QuickStats, Kalgoorlie - Boulder Significant Urban Area
// (5007), with Western Australia and Australia: 29,072 people; median age 34 (WA 38; Australia 38); 7,026 families;
// 13,141 private dwellings; 2.6 people per household; separate house 8,106 (81.3 percent; WA 79.7; Australia 72.3);
// flat or apartment 125 (1.3; WA 6.5); Technicians and Trades Workers 3,366 (22.2; WA 15.3; Australia 12.9); Machinery
// Operators and Drivers 2,499 (16.5; WA 7.7; Australia 6.3); Professionals 2,233 (14.7; WA 22.0); Bachelor Degree level
// and above 3,123 (13.8; WA 23.8; Australia 26.3); aged 5 to 9: 2,216 (7.6; WA 6.5); aged 10 to 14: 2,033 (7.0; WA
// 6.4); aged 20 to 24: 1,961 (6.7); industry: Gold Ore Mining 3,082 (20.3; WA 1.3; Australia 0.2). WA Department of
// Education 2027 term dates: Term 3 Monday 19 July to Friday 24 September; break Saturday 25 September to Sunday 10
// October; Term 4 Monday 11 October to Thursday 16 December. IANA tz: Australia/Perth UTC+8, no daylight saving.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'KALGOORLIE', label: 'Kalgoorlie-Boulder', blurb: 'Kalgoorlie-Boulder, a deep hollow on a 2000 elevation grid, and two ways of measuring its area that disagree.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'best-coding-classes-in-kalgoorlie',
  code: 'kalg',
  accent: '#54102A',
  accentRationale: 'Kalgoorlie: a deep red-earth maroon (HSV saturation 0.81, value 0.33, hue 337), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 14.1:1 on white and 11.5:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Kalgoorlie-Boulder',
    eyebrow: 'Kalgoorlie-Boulder, Western Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Western Australia', href: '/coding-and-ai-classes-in-western-australia' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kalgoorlie-Boulder, Western Australia',
  title: 'Best Coding Classes in Kalgoorlie | Live Online, Teens and Adults',
  description: 'Live online coding and Python classes for Kalgoorlie-Boulder teenagers and adults: geometry, grids and real elevation data, taught in small groups or one to one.',
  ogDescription: 'Coding classes for Kalgoorlie teens and adults, with a project that measures a deep hollow on a 2000 elevation grid two ways and gets two answers.',
  twitterDescription: 'Kalgoorlie-Boulder coding classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '9 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Kalgoorlie-Boulder Learners',
    description: 'Level-matched online Python, computational geometry, grid data and problem solving for teenagers and adults in Kalgoorlie-Boulder and the Goldfields, taught live in English.'
  },

  h1: 'Coding classes in Kalgoorlie',
  capsuleQ: 'What do the best coding classes in Kalgoorlie look like?',
  capsule: 'A Kalgoorlie-Boulder teenager or adult writes working Python on real data, explains each decision aloud, and a teacher questions the reasoning as well as the answer. The urban area counted 29,072 people in 2021. Every lesson is live and online, one to one or in a small group at the learner\'s level, and the first one is free.',
  lead: 'NASA\'s radar elevation survey of February 2000 shows a deep hollow on the edge of Kalgoorlie-Boulder, its lowest sample at 145 metres while the median across our grid is 365. Take every grid point below 300 metres that links to that lowest point and ask for the area. Counting grid squares gives 735 cells. Drawing a polygon through the outer points and applying Pick\'s theorem, area equals interior points plus half the boundary points minus one, gives 681. Both are honest arithmetic, and they disagree by exactly 54. Working out why, and then finding the one height where Pick\'s theorem stops working altogether, is a real lesson in geometry and in code.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Kalgoorlie-Boulder.',

  picks: {
    eyebrow: 'Course picks for Kalgoorlie',
    h2: 'Courses a Kalgoorlie learner could begin with',
    intro: 'Four courses that sit closest to the project below. Which one fits is decided in the free trial, and no payment details are taken.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first variables to reading a grid of heights and looping over it.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Area, coordinates and proofs like Pick\'s theorem, tested by writing code that checks them.' },
      { course: 'competitive-programming-for-teens-course', band: 'Ages 14 to 18', note: 'Flood fill, boundary tracing and the edge cases contest problems love.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Grid search, polygon algorithms and the conditions each one needs to be correct.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Kalgoorlie-Boulder in the Census',
      h2: 'A Goldfields city of 29,072 with a young median age',
      intro: 'The ABS 2021 QuickStats for the Kalgoorlie-Boulder urban area, next to Western Australia and Australia.',
      body: [
        { kind: 'table', caption: 'Kalgoorlie-Boulder, 2021 Census', head: ['Item', 'Kalgoorlie-Boulder', 'Western Australia', 'Australia'], rows: [
          ['Residents', '29,072', 'Not listed here', 'Not listed here'],
          ['Median age', '34', '38', '38'],
          ['Families', '7,026', 'Not listed here', 'Not listed here'],
          ['Private dwellings', '13,141', 'Not listed here', 'Not listed here'],
          ['Separate houses among occupied dwellings', '8,106, or 81.3%', '79.7%', '72.3%'],
          ['Machinery operators and drivers', '2,499, or 16.5%', '7.7%', '6.3%'],
          ['Technicians and trades workers', '3,366, or 22.2%', '15.3%', '12.9%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Gold in the workforce', p: 'Gold ore mining was the leading industry, employing 20.3% of working residents against 1.3% across WA and 0.2% nationally.' },
          { h3: 'Plenty of school-age children', p: 'There were 2,216 children aged 5 to 9 and 2,033 aged 10 to 14, both above the state shares.' },
          { h3: 'Degrees less common', p: 'A bachelor degree or higher was held by 3,123 residents aged 15 and over, 13.8%, against 23.8% in WA.' }
        ] },
        { kind: 'p', text: 'To protect privacy the ABS makes small random changes to census cells, so components of a table may not add exactly to its total. We print each figure as published and never present our own sum as a census result.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Why do 735 squares and Pick\'s theorem give different areas for the same hollow?',
      intro: 'NASA\'s SRTM elevation grid around Kalgoorlie-Boulder, sampled every 0.0004 degrees, and the region below a chosen height.',
      body: [
        { kind: 'table', caption: 'Region linked to the lowest point (our measurement, 8 October 2026)', head: ['Below', 'Grid points (cells)', 'Boundary B', 'Interior I', 'Pick: I + B/2 - 1'], rows: [
          ['200 m', '129', '47', '82', '104.5'],
          ['250 m', '338', '81', '257', '296.5'],
          ['300 m', '735', '106', '629', '681.0'],
          ['320 m', '851', '115', '738', '794.5, wrong'],
          ['350 m', '1,032', '119', '913', '971.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Flood from the bottom', p: 'Starting at the 145 m low point, a flood fill collects every neighbouring point below the chosen height. That set is the region, one grid point per cell.' },
          { h3: '2. Trace the outline', p: 'A boundary-following routine walks the outer points in order, giving a polygon whose corners are grid points. Its area comes from the shoelace formula or from Pick\'s theorem.' },
          { h3: '3. Explain the gap', p: 'Counting cells treats each boundary point as a whole square, while the polygon cuts through them. For a simple polygon the gap is always B/2 + 1: 106 boundary points give the 54 at 300 m.' }
        ] },
        { kind: 'callout', h3: 'The height where the theorem breaks', p: 'At 320 m the traced outline passes through one point twice, pinching the region where it touches itself diagonally. Pick\'s theorem needs a simple polygon, so its 794.5 now disagrees with the shoelace result of 792.5. At 330 m the pinch has filled in and the two agree again on 847.0. A learner who checks both methods side by side finds this in seconds; one who trusts a single formula never notices.' },
        { kind: 'p', text: 'At 300 m the 735 cells cover about 124.37 hectares on our 38.26 by 44.23 metre spacing, and the polygon about 115.23. We read the hollow as the Fimiston open pit, which Northern Star Resources describes as part of operations adjacent to the City of Kalgoorlie-Boulder, but the grid itself carries no labels, and it shows the ground as surveyed in February 2000, not today.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Measuring area on a grid',
      h2: 'Three ways to measure the same shape, and what each assumes',
      intro: 'Worked on the Kalgoorlie grid, then reused for floor plans, paddocks, images or any shape stored as points.',
      body: [
        { kind: 'table', caption: 'Methods compared at 300 m', head: ['Method', 'Result', 'What it assumes'], rows: [
          ['Count the cells', '735', 'Each point owns a full rectangle around it'],
          ['Pick\'s theorem', '681.0', 'The outline is a simple polygon on grid points'],
          ['Shoelace formula', '681.0', 'The outline is listed in order without crossing'],
          ['Convert to hectares', '124.37 or 115.23', 'A flat, even spacing between samples']
        ] },
        { kind: 'p', text: 'No method here is the true area. The grid is coarse, the survey is a quarter of a century old and the edge of a hollow is a matter of where you draw the height line. The skill is knowing what each calculation assumes, checking two against each other, and reporting the range rather than a single confident number.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Prove Pick\'s theorem on small hand-drawn shapes, then write a checker and run it on the real grid.' },
          { h3: 'University students', p: 'Boundary tracing, flood fill and polygon validity tests, with careful handling of pinch points.' },
          { h3: 'Adults at work', p: 'Area estimates from survey or drone grids, with the habit of cross-checking methods before a figure goes in a report.' }
        ] },
        { kind: 'p', text: 'SRTM version 3 fills gaps from other elevation models, so a few samples on steep ground may not come from the 2000 radar itself. Modern Age Coders has no link with NASA, Northern Star Resources or the ABS; the counts, areas and comparisons on this page are our own analysis.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Kalgoorlie-Boulder',
      h2: 'WA school terms and Perth time all year',
      intro: 'Dates and clocks that affect when Goldfields learners study.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term 3 in 2027', p: 'The WA Department of Education sets Term 3 from Monday 19 July to Friday 24 September 2027.' },
          { h3: 'The spring break', p: 'Students are then off from Saturday 25 September to Sunday 10 October, with Term 4 starting Monday 11 October.' },
          { h3: 'Perth time, no changes', p: 'Kalgoorlie-Boulder keeps UTC plus 8 through the year, since Western Australia does not use daylight saving.' }
        ] },
        { kind: 'spec', title: 'The gap to our teachers', p: 'India is two and a half hours behind Kalgoorlie-Boulder in every season. A 4:30pm lesson in Kalgoorlie starts at 2pm for the teacher, winter or summer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting squares to proving why a formula fails',
    intro: 'Age bands are only a guide. The trial lesson places each learner properly.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Grids and loops', p: 'Storing heights in lists, finding the lowest point and counting squares in Python.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Geometry in code', p: 'Flood fill, outline tracing, Pick\'s theorem and the shoelace formula, checked against each other.', courses: ['competitive-programming-for-teens-course', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Robust algorithms', p: 'Polygon validity, degenerate cases and proofs of correctness for grid algorithms.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] },
      { band: 'Adults', h3: 'Measuring from data', p: 'Turning survey or sensor grids into areas and volumes that hold up to scrutiny.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would a chatbot have caught the pinch at 320 metres?',
    intro: 'Only if someone asked it to check the polygon first.',
    p1: 'Ask an AI assistant for the area of a traced grid outline using Pick\'s theorem and it will produce tidy code that counts boundary and interior points. At 320 m on the Kalgoorlie grid that code returns 794.5 without complaint. The formula is right; the shape just breaks its one condition, and the assistant has no reason to look.',
    p2: 'Our Kalgoorlie learners are taught to state a method\'s assumptions before running it, then to compute the same quantity a second way. When the shoelace answer comes back as 792.5, the two-point disagreement is the clue that sends them looking for the pinch.',
    closer: 'A Kalgoorlie learner who has found a hidden assumption in a famous theorem will question an AI\'s confident output in 2026, which is the habit that makes coding worth learning.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Kalgoorlie to Boulder, one live lesson',
    intro: 'The twin towns are a short drive apart, and an online lesson makes the distance irrelevant.',
    cells: [
      { h3: 'From either town', p: 'A learner in Kalgoorlie and one in Boulder log in to the same live class from home.' },
      { h3: 'WA year levels', p: 'Teaching follows Western Australian year levels through to Years 11 and 12, in English.' },
      { h3: 'Trial lesson first', p: 'You code something real with a teacher, then hear a suggested level, course and time; no card is needed.' },
      { h3: 'Five to ten per group', p: 'Learners at one level from across Australia and beyond, so there is always a workable slot.' },
      { h3: 'About eight a month', p: 'Usually two lessons a week, with WA holidays and exam periods planned in advance.' },
      { h3: 'Shift-friendly times', p: 'Weekend and after-school slots suit families working rosters, agreed in the trial.' }
    ],
    spec: { title: 'Booked in Kalgoorlie time', p: 'Every confirmed time is written in Western Australian time, so nothing needs converting at home.' }
  },

  fees: {
    h2: 'What coding classes cost in Kalgoorlie-Boulder',
    intro: 'Three prices cover everything.',
    first: 'A trial lesson at no charge that ends with a level, course and time.',
    group: 'A month in a group of five to ten learners, usually eight lessons.',
    private: 'Around eight private lessons a month with the same teacher.',
    closer: 'Goldfields families pay the same US dollar rate as the rest of Australia, with no remote surcharge. Billing starts only after the trial has agreed a course and slot; the pricing page explains holidays, missed lessons and changing between group and private.'
  },

  reviewsH2: 'Google reviews from families, quoted as written',

  book: {
    h2: 'Tell us what the learner already knows',
    intro: 'The first task is chosen to suit: counting squares on a small grid for a Year 7 beginner, flood fill and Pick\'s theorem for a Year 11 student, or the full elevation grid and the 320 m pinch for an adult.',
    success: 'Thank you. We will be in touch soon about a coding class in Kalgoorlie-Boulder.'
  },

  faq: {
    h2: 'Kalgoorlie-Boulder coding class questions',
    intro: 'What Kalgoorlie learners and parents most often want to know first.',
    items: [
      { q: 'How many people live in Kalgoorlie-Boulder?', a: 'The urban area counted 29,072 residents at the 2021 Census, with a median age of 34.' },
      { q: 'What is Pick\'s theorem?', a: 'Pick\'s theorem gives the area of a simple polygon whose corners are grid points: area equals the number of interior grid points plus half the boundary points, minus one. It fails when the outline touches or crosses itself.' },
      { q: 'What is the Kalgoorlie elevation project?', a: 'Learners load a NASA SRTM elevation grid around Kalgoorlie-Boulder, flood fill from the lowest point below a chosen height, and measure the area by counting cells, by Pick\'s theorem and by the shoelace formula, then explain every disagreement.' },
      { q: 'Is the hollow really the Super Pit?', a: 'That is our reading, not a label in the data. The grid shows the ground in February 2000, and Northern Star Resources lists the Fimiston open pit among operations adjacent to the city.' },
      { q: 'Do senior students fit lessons around ATAR?', a: 'Yes. Year 11 and 12 learners plan weekly lessons around WA term dates and assessments, and their school work stays their own.' },
      { q: 'Which times suit Kalgoorlie learners?', a: 'After school or at weekends, settled in the trial and written in WA time. India time is two and a half hours behind Kalgoorlie-Boulder all year round.' },
      { q: 'Do you teach children under 13?', a: 'Yes, from age 6, often starting with Scratch and simple games. This page focuses on teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Kalgoorlie-Boulder?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Kalgoorlie-Boulder coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Western Australia',
    h2: 'More for Goldfields and WA learners',
    html: 'West of the Goldfields there are <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">online Python classes in Perth</a> and <a class="cg-inline-link" href="/coding-classes-for-kids-perth">coding for Perth kids</a>, useful for younger Kalgoorlie siblings. Students sitting selective entry tests can try <a class="cg-inline-link" href="/wa-gate-aset-maths-practice">WA GATE ASET maths practice</a>, and the state overview is at <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">coding and AI classes in Western Australia</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Kalgoorlie-Boulder and Western Australia',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-classes-for-kids-perth', label: 'Perth kids' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-kalg .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.1vw, 2.55rem); }
.cg-root.cg-kalg .cg-hero h1 { font-weight: 745; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-kalg .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-kalg .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-kalg .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.014em; }
.cg-root.cg-kalg .cg-grid-3 { gap: clamp(0.95rem, 2.1vw, 1.75rem); }
.cg-root.cg-kalg .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-kalg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kalg .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-kalg .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Kalgoorlie - Boulder Significant Urban Area, ABS Census 2021 QuickStats, area code 5007, with Western Australia and Australia (read 8 October 2026): 29,072 people; median age 34 (WA 38; Australia 38); 7,026 families; 13,141 private dwellings; 2.6 people per household; separate house 8,106 (81.3 percent; WA 79.7; Australia 72.3); flat or apartment 125 (1.3 percent; WA 6.5); Technicians and Trades Workers 3,366 (22.2 percent; WA 15.3; Australia 12.9); Machinery Operators and Drivers 2,499 (16.5 percent; WA 7.7; Australia 6.3); Professionals 2,233 (14.7 percent; WA 22.0); Bachelor Degree level and above 3,123 (13.8 percent; WA 23.8; Australia 26.3); aged 5 to 9: 2,216 (7.6 percent; WA 6.5); aged 10 to 14: 2,033 (7.0 percent; WA 6.4); industry: Gold Ore Mining 3,082 (20.3 percent; WA 1.3; Australia 0.2). WA Department of Education 2027 term dates: Term 3 Monday 19 July to Friday 24 September; break Saturday 25 September to Sunday 10 October; Term 4 Monday 11 October to Thursday 16 December. IANA tz database: Australia/Perth UTC+8, no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Pick\'s theorem against cell counting on a grid polygon. NASA SRTMGL1 version 3 (LP DAAC; acquired 11 to 21 February 2000; voids filled from ASTER GDEM v2, GMTED2010 or NED) sampled via OpenTopoData srtm30m on 8 October 2026, points every 0.0004 degrees, latitude -30.800 to -30.752, longitude 121.480 to 121.532, 121 by 131 points, spacing 38.26 m by 44.23 m. Lowest sample 145 m at -30.7844, 121.5044; grid median 365 m. Region: points below T connected (8-neighbour) to the lowest point, holes filled; outline by Moore boundary tracing. T 200: cells 129, B 47, I 82, Pick 104.5, shoelace 104.5. T 250: 338, 81, 257, 296.5. T 280: 532, 101, 431, 480.5. T 300: 735, 106, 629, 681.0 (124.37 ha cells, 115.23 ha Pick). T 320: 851, 115, 738, Pick 794.5, shoelace 792.5, outline not simple. T 330: 905, 114, 791, 847.0. T 340: 964, 115, 849, 905.5. T 350: 1,032, 119, 913, 971.5. Identification of the hollow with the Fimiston open pit is our interpretation; Northern Star Resources KCGM page: "Adjacent to the City of Kalgoorlie-Boulder", "1989 Commenced gold production", "KCGM Operations include the Fimiston open pit (Super Pit)".',
    requiredMentions: [
      '29,072',
      '7,026',
      '13,141',
      '8,106',
      '3,366',
      '2,499',
      '735 cells',
      'B/2 + 1',
      'Kalgoorlie to Boulder'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Kalgoorlie - Boulder Significant Urban Area (5007): people, median age, families, dwellings, dwelling structure, occupation, education, age, industry.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/5007' },
      { claim: 'NASA LP DAAC, SRTMGL1 version 3: acquisition dates February 2000 and void filling sources.', url: 'https://lpdaac.usgs.gov/products/srtmgl1v003/' },
      { claim: 'Northern Star Resources, KCGM Operations: location adjacent to the City of Kalgoorlie-Boulder, production from 1989, Fimiston open pit.', url: 'https://www.nsrltd.com/our-assets/kcgm-operations/' },
      { claim: 'WA Department of Education, future term dates: 2027 Terms 3 and 4.', url: 'https://www.education.wa.edu.au/future-term-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Perth offset and absence of daylight saving.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Present-day size, depth or production of the Super Pit: the grid is from February 2000, and production and resource figures are excluded as money-adjacent company data.',
      'Stating that the hollow on the grid is the pit as fact: the data carries no labels, so the identification is presented as our reading.',
      'Any area figure as the true area of the hollow: every method shown depends on the chosen height, grid spacing and assumptions.',
      'Geoscience Australia elevation services, OpenStreetMap and Bureau of Meteorology data: Overpass returned 406 and BOM 403 to this machine in October 2026; neither was circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with NASA, Northern Star Resources, the WA Department of Education or the ABS.'
    ]
  }
};
