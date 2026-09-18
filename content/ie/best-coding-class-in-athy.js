'use strict';
// Athy (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census 2022
// town tables for "Athy, Co Kildare", the Irish Rail station page for Athy and the
// Shackleton Experience site, read 19 September 2026. Spine: cohort ageing, the
// projection that needs no model. Everyone of primary age (6 to 12) in April 2028
// was aged 0 to 6 in the 2022 census-night age table: 154, 131, 134, 148, 139,
// 160, 152 = 1,018, against 1,253 aged 6 to 12 now (down 235, 18.8 percent). The
// 13 to 18 group of 2028 is today's 7 to 12: 1,101 against 1,074 (up 27, 2.5
// percent). Across the 95 towns of 5,000 or more on census night, the same method
// shrinks the primary group in 89 (median -14.2 percent; Athy 29th steepest) and
// grows the teen group in 79 (median +6.8); all 867 towns 351,883 to 303,095
// (-13.9). The assumption (nobody moves) is measured against SAP2022T2T3TOWN22:
// 678 of 10,838 aged 1+ lived elsewhere a year earlier, 312 outside Kildare or
// abroad. Wicklow owns out-of-sample testing of trend forecasts; Cobh owns the
// point that leavers are invisible. The Kildare county page owns the census-night
// population (11,035) and the LEA figure; neither used as a mention here.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'ATHY', blurb: 'The primary-school children of 2028 are already in the 2022 census. Age the table forward, then measure the one assumption that makes it work.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-athy',
  code: 'aty',
  accent: '#6C1D20',
  accentRationale: 'Athy: a muted oxblood from the widened solver search, apart from the Kildare county accent and the Naas, Newbridge and Maynooth pages',
  pageType: 'city',
  place: {
    name: 'Athy',
    eyebrow: 'Athy, County Kildare',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Kildare' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-kildare', name: 'County Kildare' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Kildare', href: '/coding-classes-in-county-kildare' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Athy, County Kildare, Ireland',
  title: 'Best Coding Class in Athy | Modern Age Coders',
  description: 'Live online coding, Python, data and AI classes for Athy learners aged 6 to 67, in small groups at one level or one to one. The first lesson is free of charge.',
  ogDescription: 'Coding and AI classes for Athy, with a data project that counts the primary-school children of 2028 from the census of 2022.',
  twitterDescription: 'Coding, Python and AI for Athy learners aged 6 to 67, taught live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Athy',
    description: 'Online coding, Python, AI, data and mathematics, taught in same-level groups, for children, teenagers and adults in Athy, County Kildare, live in English.'
  },

  h1: 'Coding classes in Athy',
  capsuleQ: 'What is the best coding class in Athy?',
  capsule: 'Athy has 10,992 usual residents, and 3,206 of its households report broadband, the one thing a lesson from us needs at home. A teacher leads each lesson live on video, either for a few learners at one level or for a single learner, twice in most weeks, for any age from six to sixty-seven. After a free first lesson, it is USD 100 a month for a group place or USD 150 for one-to-one.',
  lead: 'How many primary-school-age children will Athy have in April 2028? It sounds like a question for a model, but most of the answer is already written down. Every child who will be six to twelve in 2028 had been born by census night 2022, and the census counted them by single year of age. Move each year of the table up six rows and the answer is 1,018, against 1,253 of that age now. That is a projection with no trend line and no formula, only counting. It rests on one assumption, that nobody moves in or out, and the census has a table that measures how wrong that assumption is. This page builds the projection, compares Athy with 94 other towns, and then tests the assumption against the record of who moved.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Athy.',

  picks: {
    eyebrow: 'Course picks for Athy',
    h2: 'Courses Athy learners often begin with',
    intro: 'Go by age and interest; in the free first lesson the course teacher works out where the learner should begin.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects with counters that tick up each year, the simplest version of ageing a population forward.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Lists, shifting and summing in code, applied to real counts from the census.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Projections built from real tables, with every assumption stated and checked against data.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults planning places, staff or stock, who need a baseline before any forecast.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Count the pupils of 2028 from the census of 2022',
      intro: 'The census-night age table for Athy gives a count for every single year of age up to nineteen. The learner moves each year up six places and adds the rows that land in each school-age group.',
      body: [
        { kind: 'table', caption: 'Athy\'s school-age groups in 2022 and, if nobody moved, in 2028', head: ['Age group', 'April 2022', 'April 2028, same children', 'Change'], rows: [
          ['6 to 12', '1,253', '1,018', 'down 235, 18.8%'],
          ['13 to 18', '1,074', '1,101', 'up 27, 2.5%']
        ] },
        { kind: 'table', mt: true, caption: 'The single years behind the projection, census night 2022', head: ['Rows used', 'People in each single year'], rows: [
          ['Aged 0 to 6, the 6 to 12s of 2028', '154, 131, 134, 148, 139, 160, 152'],
          ['Aged 6 to 12 today', '152, 166, 157, 178, 199, 205, 196'],
          ['Aged 7 to 12, the 13 to 18s of 2028', '166, 157, 178, 199, 205, 196'],
          ['Aged 13 to 18 today', '205, 200, 178, 164, 180, 147']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The method', p: 'Demographers call this ageing a cohort forward. Each year of age moves up one row per year of time. No line is fitted and nothing is extrapolated; the children in the projection are real children, counted once already.' },
          { h3: 'Athy among 95 towns', p: 'Run on the 95 towns with 5,000 or more people on census night, the same method shrinks the primary-age group in 89 of them, with a median fall of 14.2 percent. Athy\'s 18.8 percent is the 29th steepest. The teen group grows in 79, with a median rise of 6.8.' },
          { h3: 'The assumption, measured', p: 'The projection assumes nobody arrives or leaves. The census\'s one-year-ago table shows 678 of Athy\'s 10,838 residents aged one and over had a different address a year before, 312 of them outside Kildare or abroad, and people who left appear in no Athy table at all.' }
        ] },
        { kind: 'callout', h3: 'Know which part of a projection is counted and which is assumed', p: 'Some of the future is already on paper. The school-age children of the next few years exist and have been counted, so a projection built from them is on firm ground for its counting part. The rest is assumption, and here the assumption is that no family moves in or out for six years, which the town\'s own data says is not true in any single year. The honest name for the 1,018 is a baseline: the number to compare real enrolments against when 2028 arrives, so the gap can be read as migration rather than mystery.' },
        { kind: 'p', text: 'In code the whole projection is a list shift. The learner reads the single years from 0 to 19 into a list, moves every entry six places to the right, drops what falls off the end, and sums the ranges for each school stage. The comparison with other towns is the same function in a loop over every town of 5,000 or more. A final function takes an assumed number of children arriving each year as a parameter and shows how far it moves the 2028 figure, which turns the hidden assumption into a dial the reader can see and set.' }
      ]
    },
    {
      id: 'movers', tint: 'tint', eyebrow: 'What the baseline leaves out',
      h2: 'What would move the 2028 number',
      intro: 'The counted part is fixed. Three things can still change the result, and none of them is in the age table.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Families arriving', p: 'New homes, new jobs and commuting families can add children of every age. Each arrival raises a future school-age group that the baseline cannot see.' },
          { h3: 'Families leaving', p: 'Families who move away lower the count, and because leavers vanish from a town\'s tables, the census alone cannot say how many do.' },
          { h3: 'A yardstick, not a verdict', p: 'Held against real numbers in 2028, the baseline turns into a measurement: whatever gap appears is, in large part, the net effect of people moving.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'It is not a forecast of school enrolments: Athy\'s schools draw pupils from beyond the town boundary, and enrolment depends on choices this table does not record. It takes no view on planning or school places. Deaths among children, very rare, are ignored.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'Athy in Census 2022 terms',
      intro: 'Numbers from the small area tables for the town of Athy, Co Kildare, all about usual residents and the homes they live in.',
      body: [
        { kind: 'table', caption: 'Census 2022: Athy in seven counts', head: ['Measure for Athy', 'Count'], rows: [
          ['Usual residents', '10,992'],
          ['Households', '4,045'],
          ['Households with broadband', '3,206'],
          ['Working residents in the travel table', '4,238'],
          ['Journeys to school, college or childcare', '3,026'],
          ['Children under fifteen in childcare', '671'],
          ['Leaving home before 06:30', '733']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'To work', p: 'Of 4,238 working residents, 2,403 drive and 417 walk; 300 go by van, 269 as a car passenger, 240 work mainly at or from home, 176 take the train, 67 cycle and 44 take the bus.' },
          { h3: 'To school', p: 'Of 3,026 journeys to school, college or childcare, 1,312 are made as a car passenger and 759 on foot, with 370 by bus, 124 by train, 85 learners driving and 83 cycling.' },
          { h3: 'From home', p: 'The census asked Athy\'s workers directly: 833 work from home some or all of the time, 2,921 never do, and 484 did not reply.' }
        ] },
        { kind: 'spec', title: 'Two named places', p: 'Irish Rail gives the station as Church Road, Athy, Co. Kildare, Eircode R14 XH64, with sheltered bike parking. The Shackleton Experience gives its address as Emily Square, Athy, Co. Kildare, R14 KW65. Neither has any connection with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Athy learners',
      intro: 'In a normal week there are two live lessons, with the teacher there from beginning to end.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary age', p: 'The census-night age table counts 1,253 children aged six to twelve in Athy. They start with blocks and games, and counting things that change year by year comes early.' },
          { h3: 'Secondary age', p: 'Athy\'s 1,074 residents aged thirteen to eighteen are at the stage for Python, building a website, first AI projects and data work of the kind on this page.' },
          { h3: 'Adults', p: 'Adults start at their own level, which can be no coding at all, and the first lesson sets the course.' }
        ] },
        { kind: 'p', text: 'The census figures are the Central Statistics Office\'s, reproduced without change. The projection and the comparison across 95 towns were computed from the published age table on 19 September 2026. Irish Rail and the Shackleton Experience are quoted from their own sites.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting birthdays to building a baseline',
    intro: 'Ages give a rough starting point, and the first lesson refines it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting on', p: 'Block-coded counters and timers that move things along one step at a time.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Lists that shift', p: 'Python lists shifted, sliced and summed, used on real single-year counts.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Projections', p: 'Baselines, stated assumptions and a dial for each one, built on census data.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Planning ahead', p: 'Baselines for places, staffing and demand at work, and keeping counted and assumed parts apart.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how many children Athy will have in 2028',
    intro: 'It may reach for a growth rate. The better answer is already counted.',
    p1: 'Asked for a future population, an AI assistant will often apply a growth rate or a trend and give one confident figure. For children who are already born, that throws away the most solid information there is: the census has counted them. A trend applied on top can even move the answer in the wrong direction, since the age table points down for primary age in 89 of 95 larger towns.',
    p2: 'Anyone who has built this projection asks the assistant to age the single-year counts forward first, report that as the baseline, and then name any adjustment for migration separately. The counted part and the guessed part stay visibly apart.',
    closer: 'An assistant can produce a number instantly. Knowing which part of it was counted and which was assumed is the part worth teaching.',
    blogAnchor: 'why learning to code still adds up'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons work for Athy',
    intro: 'The basics.',
    cells: [
      { h3: 'Taught in real time', p: 'Every lesson has a teacher on the call, responding to the learner\'s code as it is written.' },
      { h3: 'Matched by stage', p: 'Groups of five to ten, all at the same point in the course, drawn from Kildare, the rest of Ireland and beyond.' },
      { h3: 'Weekly pattern', p: 'Two lessons in most weeks, about eight a month, at hours settled before the course begins.' },
      { h3: 'School terms', p: 'The course plan builds in mid-term breaks, holidays and exam periods.' },
      { h3: 'What the learner needs', p: 'A laptop or desktop to type on, a working microphone with speakers or headphones, and home broadband reliable through a whole lesson.' },
      { h3: 'One to one', p: 'One-to-one lessons are arranged when a learner is ready to move faster, needs to go slower, or can only learn at an hour no group meets.' }
    ],
    spec: { title: 'No premises in Athy', p: 'Athy learners join every lesson by video. We have no classroom in Athy or anywhere in Ireland, and a lesson is the same from any home with a connection.' }
  },

  fees: {
    h2: 'Fees for Athy',
    intro: 'The price list in full.',
    first: 'A full first lesson with the level assessed, free.',
    group: 'A month in a group of five to ten at one stage, about eight live lessons.',
    private: 'A month of one-to-one lessons on the same weekly pattern.',
    closer: 'Families in every country except India pay the same monthly fee, in US dollars. The first lesson is free and the first month is charged only when the course starts; for holidays, missed lessons and switching between group and one-to-one, see the pricing page.'
  },

  reviewsH2: 'Six Google reviews from families we teach, as posted',

  book: {
    h2: 'Book a free first lesson in Athy',
    intro: 'Let us know the learner\'s age and what they are into, and the first hour will be built around that. It could end with a game, a first working program, or the class sizes of 2028 worked out from today\'s census.',
    success: 'Thank you. We will contact you about the lesson soon.'
  },

  faq: {
    h2: 'Athy coding class questions',
    intro: 'What Athy families ask before starting.',
    items: [
      { q: 'How many people live in Athy?', a: 'Athy\'s usual residents numbered 10,992 in Census 2022, in 4,045 households, 3,206 of which have broadband.' },
      { q: 'What is the data project on this page?', a: 'Projecting Athy\'s school-age groups for 2028 by ageing the 2022 single-year counts forward six years. If nobody moved, the six to twelves would number 1,018 against 1,253 now, and the thirteen to eighteens 1,101 against 1,074. The census\'s own record of movers shows why that is a baseline rather than a forecast.' },
      { q: 'Will Athy really have fewer primary-age children in 2028?', a: 'Only if few families move in. The children already born point that way, as they do in 89 of the 95 larger towns, but arrivals and departures could change the result, and the census cannot say in advance how many there will be.' },
      { q: 'How do Athy residents travel to work?', a: 'Of 4,238 working residents in the travel table, 2,403 drive, 417 walk, 300 use a van, 269 go as a car passenger, 240 work mainly at or from home and 176 take the train.' },
      { q: 'When are lessons?', a: 'Between the end of school and the evening, and at weekends. Athy lessons are set in Irish time; while Irish summer time runs, India is four and a half hours ahead, and five and a half for the rest of the year, so slots are picked to be sensible at both ends in both seasons.' },
      { q: 'Do you teach adults?', a: 'Yes, up to sixty-seven, including complete beginners. After the free first lesson, adults decide with the teacher between a group at their level and one-to-one lessons.' },
      { q: 'Will an Athy learner be in a group with other Athy learners?', a: 'Groups are formed by level rather than town, so classmates may be in Kildare, elsewhere in Ireland or abroad.' },
      { q: 'Is there a Modern Age Coders classroom in Athy?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Athy cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Elsewhere in Kildare',
    html: 'Athy sits under the <a class="cg-inline-link" href="/coding-classes-in-county-kildare">County Kildare</a> page, alongside the town pages for <a class="cg-inline-link" href="/best-coding-class-in-newbridge">Newbridge</a>, <a class="cg-inline-link" href="/best-coding-class-in-naas">Naas</a> and <a class="cg-inline-link" href="/best-coding-class-in-maynooth">Maynooth</a>, with <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a> above. Online coding schools are compared, without spin, on <a class="cg-inline-link" href="/best-online-coding-classes-ireland">their own page</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> connects every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Athy, Kildare and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-kildare', label: 'County Kildare' },
    { href: '/best-coding-class-in-newbridge', label: 'Newbridge' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-aty .cg-hero-grid { align-items: start; gap: clamp(1.11rem, 3.13vw, 2.54rem); }
.cg-root.cg-aty .cg-hero h1 { font-weight: 700; letter-spacing: -0.0193em; line-height: 1.06; }
.cg-root.cg-aty .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.21rem; }
.cg-root.cg-aty .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-aty .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0137em; }
.cg-root.cg-aty .cg-grid-3 { gap: clamp(1.09rem, 2.69vw, 2.15rem); }
.cg-root.cg-aty .cg-table caption { letter-spacing: 0.045em; font-weight: 700; }
.cg-root.cg-aty .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aty .cg-table td:nth-child(3) { font-weight: 600; }
.cg-root.cg-aty .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.01rem; }
.cg-root.cg-aty .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Athy, Co Kildare, CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T1T1TOWN22 (census-night age table, total 11,035): single years 0 to 19: 154, 131, 134, 148, 139, 160, 152, 166, 157, 178, 199, 205, 196, 205, 200, 178, 164, 180, 147, 152. Ages 6 to 12 sum to 1,253; ages 0 to 6 to 1,018; ages 13 to 18 to 1,074; ages 7 to 12 to 1,101. SAP2022T2T1TOWN22: usual residents 10,992. SAP2022T2T3TOWN22: aged 1 and over 10,838; same address 10,160; elsewhere in county 366; elsewhere in Ireland 207; outside Ireland 105 (678 at a different address, 312 from outside the county or abroad). SAP2022T15T2TOWN22: households 4,045, broadband 3,206, not stated 320. SAP2022T11T1TOWN22 to work total 4,238: car driver 2,403, on foot 417, van 300, car passenger 269, work mainly at or from home 240, train 176, bicycle 67, bus 44, not stated 293; to school, college or childcare total 3,026: car passenger 1,312, on foot 759, bus 370, train 124, car driver 85, bicycle 83, not stated 274. SAP2022T11T2TOWN22: before 06:30 733. SAP2022T11T4TOWN22: 833 work from home at least some of the time, 2,921 never, 484 not stated. SAP2022T11T5TOWN22: 671 children under 15 in childcare. Cohort ageing across the 95 towns with a census-night population of 5,000 or more (F1015/T1T1): primary group (6 to 12) shrinks in 89 by 2028 under no migration, median -14.2 percent, Athy -18.8 percent, 29th steepest; teen group (13 to 18) grows in 79, median +6.8 percent. All 867 towns: 351,883 aged 6 to 12 against 303,095 aged 0 to 6 (-13.9 percent). Irish Rail, Athy: "Station Address Church Road Athy Co. Kildare", "Eircode R14 XH64", "You can use sheltered bike parking in Athy station". Shackleton Experience, own site: "Emily Square, Athy, Co. Kildare, Ireland. R14 KW65".',
    localProject: 'Cohort ageing: a projection that needs no model, with its one assumption measured. Every child who will be six to twelve in Athy in April 2028 was aged nought to six on census night 2022; the single-year counts give 1,018 against 1,253 six-to-twelves now, down 235 or 18.8 percent, and the thirteen-to-eighteens of 2028, today\'s seven-to-twelves, number 1,101 against 1,074 now. Across the 95 towns of 5,000 or more the same method shrinks the primary group in 89 (median -14.2 percent, Athy 29th steepest) and grows the teen group in 79 (median +6.8); all 867 towns fall from 351,883 to 303,095. The assumption that nobody moves is set against the one-year-ago table: 678 of 10,838 residents aged one and over had a different address a year earlier, 312 from outside Kildare or abroad, and leavers are absent from every Athy table. The page names the result a baseline, to be compared with reality in 2028, and codes migration as an explicit dial. Distinct from Wicklow, which tested trend extrapolation out of sample; here nothing is extrapolated. New family for the cluster: cohort projection and demographic accounting.',
    requiredMentions: [
      '10,992',
      '3,206',
      '4,238',
      '2,403',
      '833',
      '3,026',
      '1,312',
      '671',
      '733',
      '1,018',
      '1,253',
      'R14 XH64'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T1T1TOWN22, population by single year of age, Athy, Co Kildare: 0 to 19 as 154, 131, 134, 148, 139, 160, 152, 166, 157, 178, 199, 205, 196, 205, 200, 178, 164, 180, 147, 152; the same table for every town is used for the 95-town comparison.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T1T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T2T3TOWN22, Athy, Co Kildare: usually resident aged 1 and over 10,838; same address 10,160; elsewhere in county 366; elsewhere in Ireland 207; outside Ireland 105.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T3TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T2TOWN22, SAP2022T11T4TOWN22 and SAP2022T11T5TOWN22, Athy, Co Kildare: usual residents 10,992; households 4,045, broadband 3,206; to work 4,238 with car driver 2,403, on foot 417, van 300, car passenger 269, mainly at or from home 240, train 176, bicycle 67, bus 44; to school, college or childcare 3,026 with car passenger 1,312, on foot 759, bus 370, train 124, car driver 85, bicycle 83; 733 leave home before 06:30; 833 work from home at least some of the time, 2,921 never, 484 not stated; 671 children under 15 in childcare.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Athy station: "Station Address Church Road Athy Co. Kildare", "Eircode R14 XH64", "You can use sheltered bike parking in Athy station".', url: 'https://www.irishrail.ie/en-ie/station/athy' },
      { claim: 'Shackleton Experience, own site: "Emily Square, Athy, Co. Kildare, Ireland. R14 KW65".', url: 'https://www.shackletonmuseum.com/' }
    ],
    rejectedClaims: [
      'Any forecast of school enrolments: schools draw from beyond the town, and enrolment depends on choices not in the table.',
      'Any statement that Athy will have fewer children in 2028: the page gives a no-migration baseline only.',
      'Any claim about Ernest Shackleton\'s life: the Shackleton Experience is quoted for its name and address only.',
      'The census-night population (11,035) and local electoral area figure: the County Kildare page owns them.',
      'Any view on housing or school planning in Athy.'
    ]
  }
};
