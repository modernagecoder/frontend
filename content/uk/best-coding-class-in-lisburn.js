'use strict';
// Lisburn (cg- city page, UK cluster Phase 4, Northern Ireland). Spine: did the fire of 1707 leave a gap in Lisburn's
// listed buildings? A Mann-Whitney U (rank-sum) test on construction-date bands in the Department for Communities
// Historic Environment Division's Listed Buildings Northern Ireland dataset (OpenDataNI GeoJSON of 10 September 2026,
// 15,862 records; read 23 September 2026; scratchpad lis/mw.py). Lisburn group: records with Lisburn as the post town in
// the address (389, of which 275 have a construction band); rest of Northern Ireland 15,473 (9,866 dated). Bands before
// 1800, Lisburn vs rest: pre-1600 0 vs 103; 1600-1649 0 vs 37; 1650-1699 9 vs 48; 1700-1719 5 vs 24; 1720-1739 3 vs 71;
// 1740-1759 5 vs 104; 1760-1779 6 vs 188; 1780-1799 9 vs 399. Share before 1700: Lisburn 9 of 275 (3.27 percent), rest
// 188 of 9,866 (1.91); before 1720: 14 (5.09) vs 212 (2.15); before 1800: 37 (13.45) vs 974 (9.87). Median band 1840-1859
// in both. Mann-Whitney with tie correction: U 1,322,956 against an expected 1,356,575, z -0.71, p 0.48; probability a
// Lisburn building's band is later than a random other building's: 0.488. Castle Street records: Cathedral of Christ
// Church (HB19/16/001 A), Grade A, 1700-1719; 24 Castle Street, B2, 1700-1719; Gateway, Castle Gardens, Record Only,
// 1650-1699; Old Masonic Hall, B1, 1800-1819.
// Lesson family: Mann-Whitney U / Wilcoxon rank-sum test with ties, ordinal data, absence of evidence. Screened 23
// September 2026: Mann-Whitney and rank-sum 0 hits in src/pages and content/uk.
// Lisburn Cathedral history page (read raw): about 1609 a Welsh officer settled in Lisnagarvey (as the district was then
// called) and built or rebuilt a castle overlooking the River Lagan, in what is now Castle Gardens park; 1623 a church of
// St Thomas on the site; destroyed in 1641; rebuilding from 1642 took 23 years; 1662 Charles II established it as Christ
// Church Cathedral; April 1707 town, church and castle destroyed in a disastrous fire; foundation of the new church laid
// 20 August 1708; present building completed 1719.
// Census: NISRA Census 2021 MS-A01 and MS-A02: settlements LISBURN CITY 51,447 and METROPOLITAN LISBURN 32,643; DEAs
// Lisburn North 23,449, Lisburn South 24,321; LGD Lisburn and Castlereagh 149,106; Northern Ireland 1,903,175. Lisburn
// City age shares: 0-4 6.5 percent, 30-34 7.6, 90+ 0.7; Northern Ireland 0-4 6.0, 30-34 6.6, 90+ 0.7. Stations in the
// Translink timetable near Lisburn: Hilden, Lambeg, Derriaghy, Dunmurry, Moira.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'LISBURN', blurb: 'The Lagan valley city rebuilt after the fire of 1707, with a project that asks whether the fire left a gap in its listed buildings.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-lisburn',
  code: 'lsb',
  accent: '#6B6B2E',
  accentRationale: 'Lisburn: a flax olive, a nod to the Irish Linen Centre in Market Square; from the solver (4.52:1 on every paper tint, dE 7.2 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Lisburn',
    eyebrow: 'Lisburn, Northern Ireland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Lisburn and Castlereagh' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Lisburn',
  title: 'Best Coding Classes in Lisburn | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Lisburn learners aged 6 to 67, from Hilden and Lambeg to Derriaghy and Dunmurry. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Lisburn, on a page that runs a Mann-Whitney test on Northern Ireland\'s listed buildings to look for a gap left by the fire of 1707.',
  twitterDescription: 'Lisburn learners from six to sixty-seven can study coding, Python, maths and AI with us in live online lessons, beginning with a free one.',
  ogImageCourse: 'statistics-probability-maths-course',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Lisburn Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, statistics and heritage data, mathematics and AI taught live online in English to Lisburn children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Lisburn',
  capsuleQ: 'What are the best coding classes in Lisburn?',
  capsule: 'The settlement NISRA calls Lisburn City had 51,447 usual residents at the 2021 census, with Metropolitan Lisburn a further 32,643, in the council area of Lisburn and Castlereagh. Lisburn Cathedral records that in April 1707 the town, church and castle were destroyed in a disastrous fire. Lisburn learners aged six to sixty-seven meet teachers based in India in live video lessons, one to one or in a class of five to ten at the same level, at times planned around the Northern Ireland school day and working hours. There is no charge for the first lesson; after it a group place is USD 100 a month and a private teacher USD 150 a month.',
  lead: 'Lisburn Cathedral records that in April 1707 a fire destroyed the town, its church and its castle, and that the new church was begun in August 1708 and finished in 1719. If a fire flattened a town, you might expect its surviving old buildings to be rarer than elsewhere. Our Lisburn project tests that with the Historic Environment Division\'s record of every listed building in Northern Ireland, 15,862 entries, comparing when Lisburn\'s were built with the rest. The Mann-Whitney test, which compares two groups by ranking them together, finds no real difference: a Lisburn building is later than a random other one only 48.8% of the time, almost exactly a coin toss.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Lisburn.',

  picks: {
    eyebrow: 'Course picks for Lisburn',
    h2: 'Four courses for the city on the Lagan',
    intro: 'Start from what the learner already enjoys and pick the nearest course. Every one begins with a free live lesson, with no card needed to book.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, from games to a timeline that sorts old buildings into order.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First Python with lists and sorting, enough to rank a set of dates and find the middle one.' },
      { course: 'statistics-probability-maths-course', band: 'Ages 14 to 18', note: 'Statistics and probability, including tests that compare two groups by rank rather than by average.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Data analysis for adults who compare groups using categories and ranges rather than neat numbers.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Lisburn today',
      h2: 'A city in two census settlements',
      intro: 'Census 2021 counts from the Northern Ireland Statistics and Research Agency (NISRA), which counts Lisburn City and Metropolitan Lisburn as separate settlements, alongside the district electoral areas, council area and Northern Ireland.',
      body: [
        { kind: 'table', caption: 'Lisburn in the 2021 census, usual residents (NISRA)', head: ['Area', 'What it is', 'Usual residents'], rows: [
          ['Lisburn City', 'Settlement', '51,447'],
          ['Metropolitan Lisburn', 'Settlement', '32,643'],
          ['Lisburn North', 'District electoral area', '23,449'],
          ['Lisburn South', 'District electoral area', '24,321'],
          ['Lisburn and Castlereagh', 'Council area', '149,106'],
          ['Northern Ireland', 'Country', '1,903,175']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Young families', p: 'Children under five made up 6.5% of Lisburn City\'s residents in 2021, and adults aged 30 to 34 made up 7.6%, against 6.0% and 6.6% across Northern Ireland.' },
          { h3: 'Two settlements', p: 'NISRA counts Lisburn City and Metropolitan Lisburn separately; we quote each exactly as published and do not add them together.' },
          { h3: 'Oldest residents', p: 'People aged 90 or over were 0.7% of Lisburn City\'s residents, the same share as in Northern Ireland as a whole.' }
        ] },
        { kind: 'p', text: 'All figures are NISRA\'s own, taken table by table. Our Lisburn classes draw on the city and the places along the Lagan and the railway. A Lambeg nine-year-old coding a first game, a Year 13 student from Hilden taking CCEA A level Software Systems Development and a Derriaghy adult learning Python for a change of career could each join a class at a different level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Fire and rebuilding',
      h2: 'A cathedral rebuilt three times',
      intro: 'From Lisburn Cathedral\'s own history page, and from the Historic Environment Division\'s listed buildings record.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'About 1609', p: 'The cathedral records that a Welsh officer in the English army settled in Lisnagarvey, as the district was then called, and built or rebuilt a castle above the River Lagan, where Castle Gardens park is now.' },
          { h3: '1623 to 1662', p: 'A church of St Thomas was built in 1623, destroyed in 1641 and rebuilt over 23 years from 1642. In 1662, the cathedral says, Charles II established it as Christ Church Cathedral.' },
          { h3: '1707 to 1719', p: 'In April 1707 the town, church and castle were destroyed by fire. The foundation of the new church was laid on 20 August 1708, and the present building, the third on the site, was completed in 1719.' }
        ] },
        { kind: 'p', text: 'The Historic Environment Division lists the Cathedral of Christ Church at Grade A with a construction band of 1700 to 1719, matching the cathedral\'s own account of its rebuilding, and records a gateway in Castle Gardens from 1650 to 1699. We have no connection with Lisburn Cathedral, the Department for Communities or Lisburn and Castlereagh City Council, and the dates here are theirs.' },
        { kind: 'spec', title: 'Where the listing data comes from', p: 'The Department for Communities publishes Listed Buildings Northern Ireland on OpenDataNI: 15,862 records, each with a reference, grade, address and, for most, a construction band of twenty or fifty years. The version used here is dated 10 September 2026.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Did the fire of 1707 leave a gap?',
      intro: 'The Mann-Whitney test lines up every building from both groups in order of construction band, ties and all, and asks whether one group tends to sit higher. It suits data like this, which comes in ordered bands rather than exact years.',
      body: [
        { kind: 'table', caption: 'Listed buildings with a construction band, by the date the band begins: Lisburn post-town addresses against the rest of Northern Ireland', head: ['Built before', 'Lisburn (275 dated)', 'Rest of Northern Ireland (9,866 dated)'], rows: [
          ['1700', '9 (3.27%)', '188 (1.91%)'],
          ['1720', '14 (5.09%)', '212 (2.15%)'],
          ['1760', '22 (8.00%)', '387 (3.92%)'],
          ['1800', '37 (13.45%)', '974 (9.87%)']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Choose the groups', p: 'Take the 389 records whose address has Lisburn as the post town, 275 of them with a construction band, and compare them with the 9,866 dated records elsewhere in Northern Ireland.' },
          { h3: '2. Rank everything', p: 'Put all 10,141 dated buildings in order by band. Many share a band, so tied buildings share the average of their ranks, and the test is corrected for the ties.' },
          { h3: '3. Compare the ranks', p: 'Add up the Lisburn ranks and compare the total with what chance would give. The result, z of minus 0.71 and a p-value of 0.48, is well within the range of ordinary chance.' }
        ] },
        { kind: 'callout', h3: 'No gap to find', p: 'If anything, Lisburn\'s list leans slightly older: 3.27% of its dated listings began before 1700, against 1.91% elsewhere, and both groups have the same middle band, 1840 to 1859. The test finds no real difference. A fire that destroyed the town in 1707 does not show up as a hole, perhaps because most listed buildings everywhere in Northern Ireland date from the 1800s, long after it. The record even includes a Castle Gardens gateway from 1650 to 1699.' },
        { kind: 'p', text: 'This is a lesson in what a test can and cannot say. A p-value of 0.48 means the data give no sign of a difference; it does not prove the fire had no effect. The grouping by post town takes in villages and farms around the city, and a third of records nationwide have no construction band at all. A finer test would need exact addresses inside the old town, which the data do not mark. Saying all of that plainly is part of the answer.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Comparing groups',
      h2: 'Five checks before comparing two groups of dates',
      intro: 'Learned on Lisburn\'s listed buildings, then used for survey answers, grades, ratings, customer ages and any data that comes in ordered categories.',
      body: [
        { kind: 'table', caption: 'Decisions behind the Lisburn listings study', head: ['Question', 'For the listed buildings', 'What goes wrong if you skip it'], rows: [
          ['What kind of data is it?', 'Ordered bands, not exact years', 'Averages taken of categories'],
          ['How are ties handled?', 'Shared average ranks, with a tie correction', 'A p-value that is far too small'],
          ['Who is in each group?', 'Lisburn as post town, stated plainly', 'A town boundary assumed that the data lack'],
          ['What is missing?', 'Undated records left out and counted', 'Gaps in the record read as gaps in history'],
          ['What does no difference mean?', 'No sign of an effect, not proof of none', 'Absence of evidence read as evidence of absence']
        ] },
        { kind: 'p', text: 'The last row matters most. Many studies that find nothing are reported as if they proved nothing happened. Here the honest summary is that the listing record, at the level of detail it offers, shows no trace of the 1707 fire, and that the question needs finer data to settle.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Lining up cards with dates on them, mixing two piles and seeing whether one pile ends up mostly at the start.' },
          { h3: 'Teenagers', p: 'Sorting, ranks, the Mann-Whitney test and tie corrections in Python, on 15,862 real listing records.' },
          { h3: 'Adults', p: 'Comparing groups measured in categories or scales, and reporting a null result honestly.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Department for Communities, NISRA, Lisburn Cathedral or Lisburn and Castlereagh City Council. The listing data, census tables and cathedral history are published openly; the grouping, ranking and test on this page are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From lining up cards to the Mann-Whitney test',
    intro: 'Ages are only a guide; the free lesson finds where each learner should start.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Putting things in order', p: 'Sorting cards, dates and numbers in block code, and spotting which pile comes first.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Sorting in Python', p: 'Lists, sorting and medians in Python, with a program that ranks a set of dates.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Rank-based tests', p: 'The Mann-Whitney test, tied ranks and p-values on real Historic Environment Division records.', courses: ['statistics-probability-maths-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Categories at work', p: 'Comparing survey answers, grades and bands between groups, and reporting results that find nothing.', courses: ['data-analysis-mastery-course-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI loves a confident finding. Why should a Lisburn teenager learn to report a null result?',
    intro: 'Because a well-run test that finds nothing is still a real answer, and it is the kind of answer automated summaries tend to bury.',
    p1: 'Ask an AI assistant whether the 1707 fire shows in Lisburn\'s listed buildings and it may tell a tidy story either way. The data say something more careful: no detectable difference, with clear reasons why the test might miss a real effect. A learner who has run the test knows to ask for the p-value, the groups and the missing data before accepting a story.',
    p2: 'The project also teaches choosing the right tool. Construction bands are ordered categories with thousands of ties, and averaging them would be meaningless. Knowing which method fits which data is judgement that comes from doing, not from being told.',
    closer: 'So a Lisburn teenager should keep learning to code in 2026, beside a cathedral finished in 1719 after a town burned: AI can produce a finding in seconds, but people still have to say honestly when there is nothing to find.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Hilden, Lambeg or Dunmurry, and one class',
    intro: 'Lisburn learners live along the Lagan and the railway to Belfast, and out across the council area. Online, a village is as close to the lesson as Market Square.',
    cells: [
      { h3: 'Along the Lagan', p: 'A learner in Derriaghy and another in Moira can share a class without either of them needing a lift.' },
      { h3: 'Northern Ireland stages', p: 'We follow Northern Ireland schooling from P1 to Year 14, including the transfer test years and CCEA GCSE and A level courses, and teach in English.' },
      { h3: 'A free, hands-on start', p: 'The first lesson is real coding with a teacher, and ends with a recommended level, course and regular weekly time. There is no card to hand over.' },
      { h3: 'Level, not age', p: 'Five to ten learners at one stage, from Lisburn, the rest of the UK and further afield, so each level has good times.' },
      { h3: 'Twice a week', p: 'Two set lessons weekly, around eight a month, with holidays and exam study planned together with the teacher.' },
      { h3: 'Teachers\' time', p: 'Our teachers work on Indian time, which never changes, so a 5 pm Lisburn class is at half past nine at night for them in summer and half past ten in winter.' }
    ],
    spec: { title: 'Across the council area and beyond', p: 'Learners in Hillsborough, Dromore, Moira or south Belfast join exactly the same classes, since every lesson is online and classes are formed by level.' }
  },

  fees: {
    h2: 'Lisburn lesson fees',
    intro: 'A free first lesson, then one fee a month.',
    first: 'A full lesson at no cost, finishing with a suggested level, course and weekly time.',
    group: 'About eight live lessons a month, in a class of five to ten learners at one level.',
    private: 'About eight live lessons a month, with a teacher focused on your learner alone.',
    closer: 'Families in Lambeg or Hilden pay in US dollars, as every family outside India does, and our site shows no pound prices. Charging starts only after the free lesson, once a course and weekly time are agreed with us; the pricing page covers pausing, missed lessons and moving between group and one-to-one teaching.'
  },

  reviewsH2: 'Six Google reviews from families, word for word',

  book: {
    h2: 'Book a free lesson for a Lisburn learner',
    intro: 'The first lesson suits the learner: a date-card sorting game for a young child, a short Python program that finds the middle of a list for a beginner, or Northern Ireland\'s listed buildings and the Mann-Whitney test for a teenager ready for real statistics.',
    success: 'Thank you. We will be in touch soon to arrange the lesson for your Lisburn learner.'
  },

  faq: {
    h2: 'Lisburn coding class questions',
    intro: 'What Lisburn families most often ask us.',
    items: [
      { q: 'How many people live in Lisburn?', a: 'NISRA\'s Census 2021 counted 51,447 usual residents in the settlement it calls Lisburn City and 32,643 in Metropolitan Lisburn. The council area of Lisburn and Castlereagh had 149,106.' },
      { q: 'How does Lisburn compare with Northern Ireland?', a: 'Lisburn City has a slightly younger profile on NISRA\'s figures: 6.5% of its residents were under five in 2021, against 6.0% across Northern Ireland, and 7.6% were aged 30 to 34, against 6.6%.' },
      { q: 'What is the Mann-Whitney test?', a: 'A way to compare two groups by ranking every item together and checking whether one group tends to rank higher. It works for ordered categories, such as construction bands, where averages make no sense.' },
      { q: 'Did the 1707 fire leave a gap in Lisburn\'s listed buildings?', a: 'Not one that the data can detect. Comparing 275 dated Lisburn listings with 9,866 elsewhere gives a p-value of 0.48, and a Lisburn building is later than a random other one only 48.8% of the time.' },
      { q: 'Where does the listing data come from?', a: 'From Listed Buildings Northern Ireland, published by the Department for Communities\' Historic Environment Division on OpenDataNI. We are not connected with the Department for Communities.' },
      { q: 'When was Lisburn Cathedral built?', a: 'The cathedral records that the foundation of the present church was laid on 20 August 1708, after the fire of April 1707, and that it was completed in 1719. It is listed at Grade A.' },
      { q: 'When do Lisburn lessons take place?', a: 'Lisburn families usually choose a time after school, on a weekday evening or at the weekend, set in the free lesson. For our teachers in India that is late evening: four and a half hours ahead of Northern Ireland in summer, five and a half in winter.' },
      { q: 'Is there a centre in Lisburn?', a: 'No. We have no Lisburn centre and no premises anywhere in the UK, because every lesson is live online. Learners need a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do Lisburn lessons cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than by age or address, with five to ten learners at the same stage. If no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Northern Ireland and the UK',
    h2: 'Northern Ireland and beyond',
    html: 'Up the line, the <a class="cg-inline-link" href="/best-coding-class-in-belfast">Belfast page</a> runs PageRank over the city\'s Metro and Glider stops, and on the coast <a class="cg-inline-link" href="/best-coding-class-in-bangor-northern-ireland">Bangor</a> shows why passengers wait longer than half the gap between trains. CCEA students have help for <a class="cg-inline-link" href="/ccea-gcse-digital-technology-programming-help">GCSE Digital Technology programming</a> and <a class="cg-inline-link" href="/ccea-a-level-software-systems-development-help">A level Software Systems Development</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland guide</a> explains how our stages fit local schooling, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> reaches every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Lisburn and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-belfast', label: 'Belfast' },
    { href: '/best-coding-class-in-bangor-northern-ireland', label: 'Bangor' },
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-lsb .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.45rem); }
.cg-root.cg-lsb .cg-hero h1 { font-weight: 755; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-lsb .cg-capsule { border-left: 3px solid var(--cg-accent); border-top: 1px solid var(--cg-accent); padding: 0.9rem 0 0 1rem; }
.cg-root.cg-lsb .cg-eyebrow { letter-spacing: 0.13em; font-weight: 690; text-transform: uppercase; }
.cg-root.cg-lsb .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.014em; }
.cg-root.cg-lsb .cg-grid-3 { gap: clamp(1rem, 2.7vw, 2.2rem); }
.cg-root.cg-lsb .cg-table th { letter-spacing: 0.025em; }
.cg-root.cg-lsb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lsb .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-lsb .cg-callout { border-left-width: 5px; border-radius: 2px; }
`,

  dossier: {
    curriculumAuthority: 'NISRA Census 2021 MS-A01: settlements LISBURN CITY 51,447, METROPOLITAN LISBURN 32,643; DEAs Lisburn North 23,449, Lisburn South 24,321; LGD Lisburn and Castlereagh 149,106; Northern Ireland 1,903,175. MS-A02 shares: Lisburn City 0-4 6.5, 30-34 7.6, 90+ 0.7 percent; Northern Ireland 6.0, 6.6, 0.7. Lisburn Cathedral history: about 1609 castle at Lisnagarvey; 1623 St Thomas; 1641 destroyed; 1642 rebuilding over 23 years; 1662 Christ Church Cathedral; April 1707 fire; 20 August 1708 foundation; completed 1719. HED: Cathedral of Christ Church, Grade A, 1700-1719; Castle Gardens gateway, Record Only, 1650-1699.',
    localProject: 'Did the fire of 1707 leave a gap? HED Listed Buildings NI (15,862 records, 10 September 2026). Lisburn post town 389 records, 275 dated; rest 9,866 dated. Before 1700: 3.27 vs 1.91 percent; before 1800: 13.45 vs 9.87. Median band 1840-1859 in both. Mann-Whitney with ties: z -0.71, p 0.48; P(Lisburn later) 0.488. No detectable gap; limits stated. Lesson family: Mann-Whitney U.',
    requiredMentions: [
      '51,447',
      'Mann-Whitney',
      'Lisnagarvey',
      'Castle Gardens',
      'Christ Church Cathedral',
      'Hilden',
      'Lambeg',
      'Derriaghy',
      'Dunmurry',
      'Lisburn and Castlereagh',
      'tie correction',
      'Market Square'
    ],
    sources: [
      { claim: 'NISRA, Census 2021 MS-A01 usual resident population: settlement, DEA, LGD and Northern Ireland tables.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'NISRA, Census 2021 MS-A02 usual residents by age: Lisburn City and Northern Ireland.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a02.xlsx' },
      { claim: 'Lisburn Cathedral, History: Lisnagarvey, 1623, 1641, 1662, fire of April 1707, 20 August 1708, completed 1719.', url: 'https://www.lisburncathedral.org/history' },
      { claim: 'OpenDataNI, Listed Buildings Northern Ireland (Department for Communities, Historic Environment Division), GeoJSON of 10 September 2026.', url: 'https://www.opendatani.gov.uk/@department-for-communities-historic-environment-division/listed-buildings-northern-ireland' },
      { claim: 'OpenDataNI, Translink Northern Ireland Rail Timetable Data: station names Hilden, Lambeg, Derriaghy, Dunmurry, Moira.', url: 'https://www.opendatani.gov.uk/@translink/nir20160126v2' }
    ],
    rejectedClaims: [
      'That the fire had no effect on Lisburn\'s buildings: the test finds no detectable difference, which the page says is not proof of no effect.',
      'The name of the officer who settled at Lisnagarvey: the cathedral page\'s spelling could not be checked against a second source, so he is described, not named.',
      'Linen industry history: the Irish Linen Centre site was read only for its name and address, so no linen history is claimed.',
      'Adding Lisburn City and Metropolitan Lisburn together: NISRA figures are quoted as published.',
      'Nationality, ethnicity, religion, birthplace, national identity and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Department for Communities, NISRA, Lisburn Cathedral, the Irish Linen Centre or Lisburn and Castlereagh City Council.'
    ]
  }
};
