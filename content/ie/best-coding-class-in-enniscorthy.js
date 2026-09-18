'use strict';
// Enniscorthy (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Enniscorthy, Co Wexford" and the Irish Rail station page,
// read 19 September 2026. Enniscorthy Castle and the National 1798 Rebellion Centre
// sites both returned 403 and are not quoted. Spine: what two separately published
// tables can prove about the same people (Frechet bounds). SAP2022T11T2TOWN22 (time
// leaving home) and SAP2022T11T3TOWN22 (journey time) both count the 6,909
// residents aged 5 and over; no cross-table is published for the town. Overlap of
// A and B lies between max(0, A + B - 6,909) and min(A, B). Left after 07:00 (4,791)
// and journey under 45 minutes (5,235): at least 3,117, at most 4,791. Left after
// 08:00 (3,291) and under 30 minutes (4,337): 719 to 3,291. Left before 07:00
// (1,219) and 45 minutes or more (729): 0 to 729. Computed in this session
// (scratchpad eco/frechet.js). Clonmel owns "a combined figure cannot be rebuilt
// from two averages"; this page proves bounds from two counts. The Wexford county
// page owns the census-night population, average age, LEA and St Mary's CBS.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'ENNISCORTHY', blurb: 'Two census tables describe the same trips but are never cross-tabulated. What they can still prove together, and where they prove nothing.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-enniscorthy',
  code: 'ecy',
  accent: '#576845',
  accentRationale: 'Enniscorthy: a moss green from the solver, distinct from the Wexford county and Wexford town accents and from Arklow across the county line',
  pageType: 'city',
  place: {
    name: 'Enniscorthy',
    eyebrow: 'Enniscorthy, County Wexford',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Wexford' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-wexford', name: 'County Wexford' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Wexford', href: '/coding-classes-in-county-wexford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Enniscorthy, County Wexford, Ireland',
  title: 'Best Coding Class in Enniscorthy | Modern Age Coders',
  description: 'Coding, Python, AI and data lessons for Enniscorthy learners aged 6 to 67, taught live online in small groups at one level or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Enniscorthy, with a data project on what two separately published census tables can prove about the same people.',
  twitterDescription: 'Live online coding, Python and AI for Enniscorthy, ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Enniscorthy',
    description: 'Level-grouped online coding, Python, AI, data and mathematics for children, teenagers and adults in Enniscorthy, County Wexford, taught live in English.'
  },

  h1: 'Coding classes in Enniscorthy',
  capsuleQ: 'What is the best coding class in Enniscorthy?',
  capsule: 'Enniscorthy has 12,147 usual residents in 4,656 households, and 3,508 of those households report broadband, which is all our lessons travel on. Each is run live on video by a teacher, either with a handful of learners who share a level or with a single learner, usually twice a week, for anyone aged six to sixty-seven. The opening lesson is free. After it, groups are charged at USD 100 a month and one-to-one teaching at USD 150.',
  lead: 'For the 6,909 people in Enniscorthy aged five and over, the census records two things about the trip to work, school or college: what time they leave home, and how long the journey takes. The two answers are published in separate tables, and no table for the town puts them side by side. So how many people leave after seven and arrive within three quarters of an hour? Nobody outside the CSO can say exactly. What anybody can do is prove limits. From the two tables alone, at least 3,117 people fall in both groups and at most 4,791. For a different question the same method proves nothing at all: the answer could be anywhere from 0 to 729. This page builds the calculator and shows when two separate facts are worth combining.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Enniscorthy.',

  picks: {
    eyebrow: 'Course picks for Enniscorthy',
    h2: 'Courses Enniscorthy learners start with',
    intro: 'Choose by age and interest; the first lesson, taught by that course\'s teacher, settles the level.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with sorting games, including puzzles where two clues together narrow down an answer.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Sets, overlaps and Venn diagrams worked out by a program, then checked with real counts.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Combining published tables correctly, and knowing when a question needs data that was never published.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who put separate reports together at work and need to know what the combination can support.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Two tables about the same trips, and what they prove together',
      intro: 'Both tables count the same 6,909 residents aged five and over. Each table adds up on its own. What neither says is how the rows of one line up with the rows of the other.',
      body: [
        { kind: 'table', caption: 'The two published tables for Enniscorthy, side by side', head: ['Left home', 'People', 'Journey took', 'People'], rows: [
          ['Before 06:30', '683', 'Under 15 minutes', '2,644'],
          ['06:30 to 07:00', '536', '15 to under 30 minutes', '1,693'],
          ['07:01 to 07:30', '535', '30 to under 45 minutes', '898'],
          ['07:31 to 08:00', '965', '45 minutes to under an hour', '176'],
          ['08:01 to 08:30', '1,472', '1 hour to under 1.5 hours', '284'],
          ['08:31 to 09:00', '1,241', '1.5 hours and over', '269'],
          ['09:01 to 09:30', '115', 'Not stated', '945'],
          ['After 09:30', '463', '', ''],
          ['Not stated', '899', 'Total', '6,909']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The rule', p: 'If A people are in one group and B in another, out of a total of n, the overlap is at least A plus B minus n, and never below zero, and at most the smaller of A and B. People who did not answer sit in neither group, which keeps the rule honest.' },
          { h3: 'A guarantee worth having', p: '4,791 people left after seven and 5,235 had a journey under 45 minutes. Together that is more than the 6,909 people there are, so at least 3,117 must be in both: 45.1 percent of the total, proved without a single extra number.' },
          { h3: 'A guarantee worth nothing', p: '1,219 left before seven and 729 had a journey of 45 minutes or more. The tables are consistent with none of the early starters making a long trip, and with every long trip starting early. The honest answer is anywhere from 0 to 729.' }
        ] },
        { kind: 'table', mt: true, caption: 'What the two tables prove about four overlaps', head: ['People who...', 'At least', 'At most'], rows: [
          ['Left after 07:00 and took under 45 minutes', '3,117', '4,791'],
          ['Left after 08:00 and took under 30 minutes', '719', '3,291'],
          ['Left before 07:00 and took 45 minutes or more', '0', '729'],
          ['Left before 07:00 and took under 15 minutes', '0', '1,219']
        ] },
        { kind: 'callout', h3: 'Separate tables can prove limits, not an answer', p: 'When two facts about the same people are published separately, the exact overlap is lost, but it is not unknowable in every sense. There is always a smallest and a largest overlap the two facts allow, and sometimes the smallest is large enough to say something real. The mistake runs both ways: inventing an exact overlap by assuming the two things are unrelated, or giving up entirely when the limits would have settled the question. Work out the limits first; they tell you whether the published tables can answer the question or whether it needs data that was never released.' },
        { kind: 'p', text: 'The learner writes a function that takes the two tables, a list of rows from each, and the total, and returns the lowest and highest possible overlap. Then they write a second function that actually builds a table of 6,909 imaginary trips matching both published tables, arranged first to make the overlap as small as possible and then as large as possible. Seeing both extremes built for real, from the same two published columns, is what makes the rule believable. The exercise that follows asks the learner to find the question about Enniscorthy trips where the limits are tightest, and to explain why.' }
      ]
    },
    {
      id: 'margins', tint: 'tint', eyebrow: 'Two columns, one population',
      h2: 'Why combining tables needs care',
      intro: 'The rule on this page is simple, and it is easy to get wrong in both directions.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The tempting shortcut', p: 'Multiply the two shares together and call it the overlap. That assumes leaving time and journey length have nothing to do with each other, which is exactly what the tables cannot tell you.' },
          { h3: 'Same people, or not', p: 'The rule only works because both tables count the same 6,909 residents aged five and over. Two tables about different populations, such as households and people, cannot be combined this way at all.' },
          { h3: 'When to ask for more', p: 'If the limits are too wide to answer the question, the answer needs a table that shows both at once, for this place or a larger one. Knowing that is itself a result.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'It gives no exact number of people in any of the four overlaps, because the tables used cannot supply one, and it offers no reason why the CSO publishes these two questions as separate town tables.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'Enniscorthy\'s census counts',
      intro: 'Figures for the town of Enniscorthy, Co Wexford, taken from the small area tables of Census 2022. The people counted are usual residents, and the homes are theirs.',
      body: [
        { kind: 'table', caption: 'Selected counts for Enniscorthy', head: ['What was counted', 'Result'], rows: [
          ['Usual residents', '12,147'],
          ['Households', '4,656'],
          ['Households with broadband', '3,508'],
          ['Working residents in the travel table', '4,649'],
          ['Journeys to school, college or childcare', '2,848'],
          ['Children under fifteen in childcare', '677'],
          ['Residents aged five and over in the journey tables', '6,909']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Work', p: 'Of 4,649 working residents, 2,508 drive and 637 walk. Then come 388 car passengers, 345 by van, 226 working mainly at or from home, 82 by bus, 28 by bicycle and 7 by train.' },
          { h3: 'School', p: 'Of 2,848 journeys to school, college or childcare, 1,309 are made as a car passenger and 804 on foot; 284 go by bus and 70 learners drive themselves.' },
          { h3: 'Home', p: 'On the direct question, 698 working residents said they work from home at least part of the time, 3,326 said never, and 625 gave no answer.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives the station address as Iarnród Éireann, Enniscorthy, Co. Wexford, Eircode Y21 N289, and has no connection with us. The websites of Enniscorthy Castle and the National 1798 Rebellion Centre refused automated requests on 19 September 2026, so nothing is quoted from either.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Enniscorthy learners',
      intro: 'Two regular lessons in most weeks, taught live throughout.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'The census-night age table counts 1,264 children aged six to twelve in Enniscorthy. They start with blocks and games, including puzzles solved by putting two clues together.' },
          { h3: 'Teenagers', p: 'Enniscorthy counts 988 people aged thirteen to eighteen, the age at which Python, website building, AI and data projects come into their own.' },
          { h3: 'Adults', p: 'Adults of any background join, with or without experience in code, and the first lesson finds the starting point.' }
        ] },
        { kind: 'p', text: 'Where a census figure appears, it is the Central Statistics Office\'s published number. The overlaps and their limits were worked out from the two journey tables on 19 September 2026. Irish Rail is quoted from its own station page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two clues to proved limits',
    intro: 'Ages are a guide; the first lesson finds the actual level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Two clues', p: 'Block-coded puzzles where two separate hints together pin down the answer, or fail to.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Overlaps', p: 'Programs that count what is in one group, the other, and both, and draw the Venn diagram.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Combining tables', p: 'Joining, cross-tabulating and bounding real tables, and saying what a combination cannot show.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Reports that meet', p: 'Putting separate reports together at work without inventing the parts neither report contains.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how many people leave early and travel far',
    intro: 'It may well give a single figure. The tables only support a range.',
    p1: 'Give an AI assistant both Enniscorthy tables and ask how many people leave before seven and travel for 45 minutes or more, and a common move is to multiply the two shares and report the product as if the questions were unrelated. The result looks precise. The published data are consistent with any number from 0 to 729, so the precision is invented.',
    p2: 'A learner who has built the calculator asks for the limits first and the estimate second, with the assumption behind the estimate written out. If the limits are wide, the right answer says so, and names the table that would narrow them.',
    closer: 'An assistant fills gaps fluently. Knowing which gaps the data cannot fill is the skill worth keeping.',
    blogAnchor: 'why learning to code is still a good use of time'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Enniscorthy lessons run',
    intro: 'The essentials.',
    cells: [
      { h3: 'Teacher present', p: 'Each lesson is taught live, and the teacher works from what the learner is building that day.' },
      { h3: 'Same-level groups', p: 'Five to ten learners at the same stage, from Wexford, the rest of Ireland and other countries.' },
      { h3: 'Two most weeks', p: 'About eight lessons a month, on days and times fixed at the start.' },
      { h3: 'Term planning', p: 'Holidays, mid-term breaks and exams are built into the course plan.' },
      { h3: 'Equipment', p: 'Any laptop or desktop that runs a browser well, a headset or a microphone with speakers, and broadband that carries video without dropping.' },
      { h3: 'One to one', p: 'Private lessons are for learners who move faster or slower than a group would, or who can only make an hour no group uses.' }
    ],
    spec: { title: 'No premises in the town', p: 'Every Enniscorthy lesson is taught on video. We have no classroom in Enniscorthy or elsewhere in Ireland, and the lesson is the same from any room with a connection.' }
  },

  fees: {
    h2: 'Fees for Enniscorthy',
    intro: 'Everything we charge.',
    first: 'A full first lesson with the level assessed, at no cost.',
    group: 'A month in a group of five to ten at one level, around eight live lessons.',
    private: 'A month of one-to-one teaching at the same weekly frequency.',
    closer: 'Families outside India all pay one monthly price in US dollars. The first lesson is free and nobody is charged until a course starts; holidays, missed lessons and swapping between group and private teaching are covered on the pricing page.'
  },

  reviewsH2: 'Six of our families\' Google reviews, in full',

  book: {
    h2: 'Book a free first lesson in Enniscorthy',
    intro: 'Send the learner\'s age and a line about their interests, and the first hour is shaped to suit. Some first lessons finish with a small game, some with a working program, and some with a Venn diagram built from two clues.',
    success: 'Thank you. We will contact you about the lesson shortly.'
  },

  faq: {
    h2: 'Enniscorthy coding class questions',
    intro: 'What Enniscorthy families ask before booking.',
    items: [
      { q: 'How many people live in Enniscorthy?', a: 'Census 2022 counts 12,147 usual residents in Enniscorthy in the small area tables, living in 4,656 households; 3,508 of the households have broadband.' },
      { q: 'What is the data project on this page?', a: 'Working out what two separately published tables, time leaving home and journey time, prove about the same 6,909 residents. For some questions the limits are useful, such as at least 3,117 people leaving after seven with a journey under 45 minutes; for others the tables allow anything from 0 to 729.' },
      { q: 'Why not just estimate the exact number?', a: 'An estimate needs an assumption about how leaving time and journey length are related, and the published tables do not contain that relationship. The limits are what the data prove; any single figure inside them rests on a guess.' },
      { q: 'How do Enniscorthy residents travel to work?', a: 'Of 4,649 working residents in the travel table, 2,508 drive, 637 walk, 388 travel as a car passenger, 345 by van, 226 work mainly at or from home and 82 go by bus.' },
      { q: 'When are lessons?', a: 'After school, in the evenings and at weekends. All lessons are booked in Irish time; with India four and a half hours ahead during Irish summer time and five and a half ahead in winter, the slots we run are Irish ones that fall in a normal Indian working evening.' },
      { q: 'Is it too late for an adult to learn?', a: 'No. Adults up to sixty-seven join, often from scratch. The first lesson tells us, and the learner, whether a same-level group or a private teacher is the better route.' },
      { q: 'Will a learner from Enniscorthy be with local learners?', a: 'Groups are formed by level rather than town, so the others in a lesson may be in Wexford, elsewhere in Ireland or abroad.' },
      { q: 'Is there a Modern Age Coders classroom in Enniscorthy?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Enniscorthy cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Nearby in the series',
    html: 'Enniscorthy sits under the <a class="cg-inline-link" href="/coding-classes-in-county-wexford">County Wexford</a> page, alongside <a class="cg-inline-link" href="/best-coding-class-in-wexford">Wexford town</a>, with <a class="cg-inline-link" href="/best-coding-class-in-arklow">Arklow</a> just over the county boundary in Wicklow and <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a> above them all. Online coding schools are laid side by side on <a class="cg-inline-link" href="/best-online-coding-classes-ireland">a comparison page</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> leads to everything else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Enniscorthy, Wexford and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-wexford', label: 'County Wexford' },
    { href: '/best-coding-class-in-wexford', label: 'Wexford town' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-ecy .cg-hero-grid { align-items: start; gap: clamp(1.13rem, 3.15vw, 2.56rem); }
.cg-root.cg-ecy .cg-hero h1 { font-weight: 700; letter-spacing: -0.0169em; line-height: 1.08; }
.cg-root.cg-ecy .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.24rem; }
.cg-root.cg-ecy .cg-eyebrow { letter-spacing: 0.14em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-ecy .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0126em; }
.cg-root.cg-ecy .cg-grid-3 { gap: clamp(1.03rem, 2.66vw, 2.09rem); }
.cg-root.cg-ecy .cg-table caption { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-ecy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ecy .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-ecy .cg-ladder-col { border-top: 6px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-ecy .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Enniscorthy, Co Wexford, CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 12,147. SAP2022T15T2TOWN22: households 4,656, broadband 3,508, not stated 393. SAP2022T11T1TOWN22 to work total 4,649: car driver 2,508, on foot 637, car passenger 388, van 345, work mainly at or from home 226, bus 82, bicycle 28, train 7, not stated 402; to school, college or childcare total 2,848: car passenger 1,309, on foot 804, bus 284, car driver 70, not stated 347. SAP2022T11T2TOWN22 (time leaving home, aged 5 and over): before 06:30 683, 06:30-07:00 536, 07:01-07:30 535, 07:31-08:00 965, 08:01-08:30 1,472, 08:31-09:00 1,241, 09:01-09:30 115, after 09:30 463, not stated 899, total 6,909. SAP2022T11T3TOWN22 (journey time, aged 5 and over): under 15 minutes 2,644, 15 to under 30 1,693, 30 to under 45 898, 45 to under 60 176, 1 to under 1.5 hours 284, 1.5 hours and over 269, not stated 945, total 6,909. SAP2022T11T4TOWN22: 698 work from home at least some of the time, 3,326 never, 625 not stated. SAP2022T11T5TOWN22: 677 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,264, ages 13 to 18 to 988. Bounds computed in this session with lower = max(0, A + B - 6,909) and upper = min(A, B): left after 07:00 (4,791) and under 45 minutes (5,235), 3,117 to 4,791; left after 08:00 (3,291) and under 30 minutes (4,337), 719 to 3,291; left before 07:00 (1,219) and 45 minutes or more (729), 0 to 729; left before 07:00 and under 15 minutes (2,644), 0 to 1,219. Irish Rail, Enniscorthy: "Station Address Iarnród Éireann Enniscorthy Co. Wexford", "Eircode Y21 N289". Enniscorthy Castle and National 1798 Rebellion Centre websites: HTTP 403 to automated requests on 19 September 2026, not quoted.',
    localProject: 'What two separately published tables can prove about the same people. For Enniscorthy\'s 6,909 residents aged five and over, the census publishes time leaving home and journey time as separate town tables, with no cross-table. The learner applies the overlap limits, at least A + B - n and never below zero, at most the smaller of A and B, with non-response in neither group. Left after 07:00 (4,791) and a journey under 45 minutes (5,235) must overlap by at least 3,117, 45.1 percent of all 6,909, and by at most 4,791; left after 08:00 and under 30 minutes, 719 to 3,291; left before 07:00 and 45 minutes or more, 0 to 729, which proves nothing. A second function builds 6,909 imaginary trips matching both tables at each extreme. The page warns against the product-of-shares shortcut, which assumes the two questions are unrelated, and notes that the rule needs both tables to count the same population. Clonmel owns the point that a combined figure cannot be rebuilt from two averages; here the limits are proved from two counts. New family for the cluster: bounds from margins.',
    requiredMentions: [
      '12,147',
      '4,656',
      '3,508',
      '4,649',
      '2,508',
      '698',
      '1,309',
      '677',
      '6,909',
      '3,117',
      '4,791',
      'Y21 N289'
    ],
    sources: [
      { claim: 'CSO Census 2022 tables SAP2022T11T2TOWN22 and SAP2022T11T3TOWN22, Enniscorthy, Co Wexford: time leaving home (before 06:30 683, 06:30-07:00 536, 07:01-07:30 535, 07:31-08:00 965, 08:01-08:30 1,472, 08:31-09:00 1,241, 09:01-09:30 115, after 09:30 463, not stated 899) and journey time (under 15 minutes 2,644, 15 to under 30 1,693, 30 to under 45 898, 45 to under 60 176, 1 to under 1.5 hours 284, 1.5 hours and over 269, not stated 945), each totalling 6,909 residents aged 5 and over.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T1T1TOWN22, Enniscorthy, Co Wexford: usual residents 12,147; households 4,656, broadband 3,508; to work 4,649 with car driver 2,508, on foot 637, car passenger 388, van 345, mainly at or from home 226, bus 82, bicycle 28, train 7; to school, college or childcare 2,848 with car passenger 1,309, on foot 804, bus 284, car driver 70; 698 work from home at least some of the time, 3,326 never, 625 not stated; 677 children under 15 in childcare; 1,264 aged 6 to 12 and 988 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Enniscorthy station: "Station Address Iarnród Éireann Enniscorthy Co. Wexford", "Eircode Y21 N289".', url: 'https://www.irishrail.ie/en-ie/station/enniscorthy' }
    ],
    rejectedClaims: [
      'Any exact count for any of the four overlaps: the published town tables cannot supply one.',
      'The product of the two shares as an estimate of the overlap: it assumes the questions are unrelated.',
      'Any reason why the CSO publishes these two questions as separate town tables.',
      'Enniscorthy Castle and the National 1798 Rebellion Centre: both sites returned 403 to automated requests on 19 September 2026, so nothing is quoted.',
      'The census-night population, average age and local electoral area figure for Enniscorthy, and St Mary\'s CBS: the County Wexford page owns them.'
    ]
  }
};
