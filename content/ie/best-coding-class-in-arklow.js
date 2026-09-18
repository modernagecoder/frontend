'use strict';
// Arklow (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census 2022
// town tables for "Arklow, Co Wicklow", SSE Renewables' own page for Arklow Bank
// Wind Park 2, the CRU Fuel Mix Disclosure and CO2 Emissions 2022 report and the
// Irish Rail station page for Arklow, read 19 September 2026. Spine: units in
// physical measurement, as a constructive check of a named claim. SSE's footnote:
// "834,286 homes powered based on projected installed capacity, typical projected
// wind load factor of 50%, and typical annual consumption 4,200kWh. Quoted
// 826,944,000 kilos of carbon emissions abated based on projected annual MWh output
// and latest average CO2 Emissions (0.236g/kWh)". Rebuilt: 800 MW x 8,760 h x 0.5 =
// 3,504,000 MWh; / 4,200 kWh = 834,286 exactly (a leap year would give 836,571).
// 3,504,000,000 kWh x 0.236 g/kWh = 826,944 kg, a thousand times below the quoted
// 826,944,000 kg, which needs 0.236 kg/kWh (236 g). CRU reports the all-island
// average in g/kWh: 258 in 2021, 234 in 2022. The page says the arithmetic is
// consistent and the printed unit label is the slip; it assesses nothing else.
// The Wicklow county page owns the census-night population and the LEA figure.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'ARKLOW', blurb: 'The wind farm planned off Arklow publishes its homes and carbon arithmetic. Rebuild it with the units attached and one label gives itself away.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-arklow',
  code: 'akw',
  accent: '#2F2966',
  accentRationale: 'Arklow: a deep sea-indigo from the solver, clear of the Wicklow county accent and of Greystones and Bray up the coast',
  pageType: 'city',
  place: {
    name: 'Arklow',
    eyebrow: 'Arklow, County Wicklow',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Wicklow' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-wicklow', name: 'County Wicklow' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Wicklow', href: '/coding-classes-in-county-wicklow' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Arklow, County Wicklow, Ireland',
  title: 'Best Coding Class in Arklow | Modern Age Coders',
  description: 'Live online coding, Python, data and AI lessons for Arklow learners aged 6 to 67, in small groups of the same level or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Arklow, with a data project that rebuilds the wind farm\'s published arithmetic and keeps every unit attached.',
  twitterDescription: 'Coding, Python, data and AI for Arklow, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Arklow',
    description: 'Level-grouped online coding, Python, AI, data and mathematics for children, teenagers and adults in Arklow, County Wicklow, taught live in English.'
  },

  h1: 'Coding classes in Arklow',
  capsuleQ: 'What is the best coding class in Arklow?',
  capsule: 'Arklow has 13,316 usual residents, and most of its households are on broadband, which is all a live lesson from us needs. A teacher works on video with a small group at one level, or with one learner, about twice a week, for anyone from six to sixty-seven. Monthly fees are in US dollars: USD 100 for a group place and USD 150 for private lessons, after a free first lesson.',
  lead: 'Off the coast from Arklow, SSE Renewables is developing Arklow Bank Wind Park 2, and its web page makes two large claims: that the wind farm would power 834,286 homes, and that it would abate 826,944,000 kilos of carbon emissions a year. Unusually, and to its credit, it prints a footnote showing how both were worked out. That makes them checkable. The learner rebuilds each figure step by step, writing every number with its unit. The homes figure reproduces exactly. The carbon figure reproduces too, but only once a unit printed in the footnote is read as kilograms rather than grams, a factor of a thousand that nobody notices by reading and everybody notices by calculating.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Arklow.',

  picks: {
    eyebrow: 'Course picks for Arklow',
    h2: 'Courses Arklow learners often choose first',
    intro: 'Choose by age and interest; the course teacher uses the first lesson to fix the starting level.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects with timers and speeds, where a number only makes sense with its unit.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Rates, conversions and multi-step calculations done in code, with the units checked at every line.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 14 to 18', note: 'Python for science and engineering problems: energy, power, time and the conversions between them.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who read project claims, reports and bills, and want to check the arithmetic behind them.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Check the wind farm\'s arithmetic, units and all',
      intro: 'SSE Renewables states its assumptions in a footnote: 800 megawatts of capacity, a wind load factor of 50 percent and 4,200 kilowatt-hours a year for a typical home. The learner rebuilds the homes figure from those three numbers.',
      body: [
        { kind: 'table', caption: 'Rebuilding the homes figure, one unit at a time', head: ['Step', 'Unit', 'Value'], rows: [
          ['Proposed installed capacity', 'megawatts', '800'],
          ['Hours in a 365-day year', 'hours', '8,760'],
          ['Output if it ran flat out all year', 'megawatt-hours', '7,008,000'],
          ['At the stated load factor of 50%', 'megawatt-hours', '3,504,000'],
          ['The same energy in kilowatt-hours', 'kilowatt-hours', '3,504,000,000'],
          ['Divided by 4,200 kWh per home', 'homes', '834,286']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Power is not energy', p: 'A megawatt measures how fast energy is produced; a megawatt-hour measures how much. Multiplying by hours turns one into the other, and it is the step most often skipped when a capacity is quoted as if it were an output.' },
          { h3: 'It reproduces exactly', p: 'The rebuild lands on 834,286, the footnote\'s own figure, to the last home. That also reveals a detail the footnote leaves out: a 365-day year was used. With the 8,784 hours of a leap year the answer would be 836,571.' },
          { h3: 'The assumption carries the claim', p: 'Change the load factor and the homes move with it: 667,429 at 40 percent, 584,000 at 35. This page does not say which figure is right. It notes that a claim which states its assumption is one a reader can test, which is exactly why this one can be checked at all.' }
        ] },
        { kind: 'table', mt: true, caption: 'The carbon figure, with the unit as printed and as the arithmetic needs it', head: ['Rate used', 'Result for 3,504,000,000 kWh'], rows: [
          ['0.236 grams per kWh, as printed in the footnote', '826,944 kilograms'],
          ['0.236 kilograms per kWh, which is 236 grams', '826,944,000 kilograms'],
          ['Total quoted in the footnote', '826,944,000 kilos']
        ] },
        { kind: 'callout', h3: 'Carry the unit through every step and a slip has nowhere to hide', p: 'The footnote prints the emissions rate as 0.236 grams per kilowatt-hour. At that rate the answer is 826,944 kilograms, a thousand times smaller than the total the footnote quotes. The quoted total matches 0.236 kilograms per kilowatt-hour, which is 236 grams, and the Commission for Regulation of Utilities reports the all-island average in grams per kilowatt-hour on exactly that scale: 258 in 2021 and 234 in 2022. So the arithmetic is consistent and the label beside the rate is the slip. Reading the footnote will not find it. Writing every number with its unit, and multiplying the units along with the numbers, finds it immediately.' },
        { kind: 'p', text: 'In code, the learner stores each quantity as a value with a unit attached and writes three small rules: power times time gives energy, a thousand kilowatt-hours make a megawatt-hour, and a thousand grams make a kilogram. Anything else, such as adding a power to an energy, stops the program with an error. Fed the footnote\'s inputs, the program prints 834,286 homes, and fed the printed emissions rate it prints a carbon total whose unit and size cannot both match the quoted one. The follow-up is to write a one-line note to the publisher that points out the label politely, with the calculation attached.' }
      ]
    },
    {
      id: 'claims', tint: 'tint', eyebrow: 'Reading a big number',
      h2: 'What the headline figures do and do not say',
      intro: 'A reproduced number is a checked calculation, not a checked outcome. Three things are worth keeping in view.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Homes over a year', p: 'The homes figure is a year\'s energy divided by a typical home\'s yearly use. It says nothing about any particular hour; wind varies, and the calculation averages that away by design.' },
          { h3: 'A proposal, not a power station', p: 'SSE describes a proposed capacity of 800MW from between 47 and 56 turbines, with construction that could begin towards the end of the decade if consented, and a maintenance base with around 80 full-time local jobs at Arklow Harbour\'s South Dock.' },
          { h3: 'A moving comparison', p: 'Carbon abated depends on the grid it displaces, and that grid is changing: the all-island average fell from 258 to 234 grams per kilowatt-hour between 2021 and 2022. Any carbon figure is tied to the year of the rate it uses.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'It does not judge whether a 50 percent load factor is realistic, whether the project will be built, or anything about SSE beyond the arithmetic on its own page, where the unit printed beside one rate does not match the total it produces. Neither SSE nor the CRU has any connection with us.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'Arklow in figures',
      intro: 'From the Census 2022 small area tables for the town Arklow, Co Wicklow. Each count below is of usual residents or their households.',
      body: [
        { kind: 'table', caption: 'Arklow counted in April 2022', head: ['What', 'How many'], rows: [
          ['Usual residents', '13,316'],
          ['Households', '5,012'],
          ['Households with broadband', '4,079'],
          ['Working residents in the travel table', '5,498'],
          ['Journeys to school, college or childcare', '3,498'],
          ['Children under fifteen in childcare', '751'],
          ['Leaving home before 06:30', '812']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'To work', p: 'Of 5,498 working residents, 3,119 drive and 636 walk. After them come 439 working mainly at or from home, 379 by van, 327 as a car passenger, 118 by bus, 71 by bicycle and 49 by train.' },
          { h3: 'To school', p: 'Of 3,498 journeys to school, college or childcare, 1,718 are made as a car passenger and 1,069 on foot; 206 go by bus, 113 learners drive, 78 cycle and 39 take the train.' },
          { h3: 'At home', p: 'Asked the direct question, 1,267 working residents do some of their work from home, 3,659 never do, and 572 did not say.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives the address as St. Mary\'s Road, Arklow, Co. Wicklow, Eircode Y14 YD89, with sheltered bike parking available. It has no connection with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Arklow learners',
      intro: 'Two regular lessons in most weeks, with the teacher there live throughout.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children aged six to twelve begin with blocks, games and animations, and meet units early: a sprite that moves ten steps a second is a rate, not a distance.' },
          { h3: 'Teenagers', p: 'Arklow\'s 1,206 young people aged thirteen to eighteen are the age for Python, building websites, AI projects and data analysis that runs on real figures like the ones on this page.' },
          { h3: 'Adults', p: 'Adults come in at every level, from none upwards. The first lesson places them and the course is shaped from there.' }
        ] },
        { kind: 'p', text: 'Census numbers on this page are taken unchanged from the Central Statistics Office. The wind farm figures are quoted from SSE Renewables\' own project page and rebuilt on 19 September 2026; the grid averages are from the CRU\'s Fuel Mix Disclosure and CO2 Emissions report for 2022. Irish Rail is quoted from its station page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From steps per second to megawatt-hours',
    intro: 'The ages are guides; the first lesson finds the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Speed and time', p: 'Block-coded animations where speed, distance and time have to agree.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Rates in code', p: 'Programs that convert units and multiply rates by time, checked against a calculation by hand.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Units as types', p: 'Python quantities that carry their units and refuse impossible arithmetic, used on real claims.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Checking claims', p: 'Rebuilding the numbers in reports, business cases and bills before relying on them.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant to check the footnote',
    intro: 'It can do the sums. Whether it notices the unit depends on how it is asked.',
    p1: 'An AI assistant given the footnote and asked whether the figures add up may multiply 3,504,000,000 by 0.236 and declare the total confirmed, carrying the number across and never the unit. The result looks like verification. It is a number check that skipped the one step where the discrepancy lives.',
    p2: 'A learner who has done this project asks for the calculation with units written at every line, then reads the units first and the numbers second. The label shows up straight away, and the question for the assistant becomes a better one: which of the two, the rate or the total, carries the wrong unit.',
    closer: 'An assistant is a fast calculator. Insisting that every number keeps its unit is still up to the person asking.',
    blogAnchor: 'why coding is worth learning even now'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Arklow lessons are run',
    intro: 'The details.',
    cells: [
      { h3: 'Live lessons', p: 'The teacher is on the call for the whole lesson and works from what the learner is making.' },
      { h3: 'Level groups', p: 'Five to ten learners at one stage of a course, from Wicklow, the rest of Ireland and abroad.' },
      { h3: 'Twice a week, usually', p: 'Eight or so lessons in a month, at hours set when the course begins.' },
      { h3: 'Term-time friendly', p: 'Holidays, mid-term breaks and exam weeks are planned in from the outset.' },
      { h3: 'Needed at home', p: 'A laptop or desktop rather than a phone, speakers or a headset plus a microphone, and a home connection good enough for live video.' },
      { h3: 'One to one', p: 'Private lessons take over when the groups running do not suit a learner\'s level, speed or week.' }
    ],
    spec: { title: 'Nothing on Main Street', p: 'Lessons reach Arklow over video only. We have no premises in the town or elsewhere in Ireland, and a lesson is the same from any room with a connection.' }
  },

  fees: {
    h2: 'Fees for Arklow',
    intro: 'All the prices.',
    first: 'A full first lesson with the level assessed, free of charge.',
    group: 'A month in a group of five to ten at one stage, around eight live lessons.',
    private: 'A month of one-to-one lessons on the same weekly pattern.',
    closer: 'Every family outside India pays the same US dollar amount each month. Nothing is due for the free lesson, the monthly fee starts with the course, and the rules on holidays, missed lessons and changing format are set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from families we teach, unaltered',

  book: {
    h2: 'Book a free first lesson from Arklow',
    intro: 'Tell us the learner\'s age and what they like, and we will plan the first hour around that. It might end with a game, a first program, or a calculation where every unit adds up.',
    success: 'Thank you. We will be in touch about the lesson soon.'
  },

  faq: {
    h2: 'Arklow coding class questions',
    intro: 'The questions Arklow families ask most.',
    items: [
      { q: 'How many people live in Arklow?', a: 'The Census 2022 small area tables put Arklow\'s usual residents at 13,316, in 5,012 households, and 4,079 of those households have broadband.' },
      { q: 'What is the data project on this page?', a: 'Rebuilding the published arithmetic for Arklow Bank Wind Park 2 with units attached. The homes figure, 834,286, reproduces exactly from 800MW, a 50 percent load factor and 4,200 kWh per home; the carbon figure, 826,944,000 kilos, reproduces only with the emissions rate read in kilograms rather than the grams printed.' },
      { q: 'Is the wind farm\'s carbon figure wrong?', a: 'The total is consistent with a rate of 236 grams per kilowatt-hour, which is the scale the CRU reports. The unit printed beside the rate in the footnote is the part that does not fit. This page checks arithmetic only; it does not assess the project.' },
      { q: 'How do Arklow residents get to work?', a: 'Of 5,498 working residents in the travel table, 3,119 drive, 636 walk, 439 work mainly at or from home, 379 use a van, 327 go as a car passenger and 118 by bus.' },
      { q: 'When are lessons?', a: 'After school, in the evenings and at weekends. The clocks differ by four and a half hours in the Irish summer and five and a half in winter, India being ahead, so the slots offered are Irish afternoons and evenings that fall at sensible hours for teachers there.' },
      { q: 'Can adults take part?', a: 'Yes, up to sixty-seven, starting from any point. Whether an adult learns with a small group at the same level or with a private teacher is decided in the first lesson, from what they already know.' },
      { q: 'Are Arklow learners taught together?', a: 'Not necessarily. Groups are made by level, so an Arklow learner could share lessons with others in Wicklow, Wexford or another country.' },
      { q: 'Is there a Modern Age Coders classroom in Arklow?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Arklow cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Along the east coast',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-county-wicklow">County Wicklow</a> page covers the whole county, with <a class="cg-inline-link" href="/best-coding-class-in-greystones">Greystones</a> and <a class="cg-inline-link" href="/best-coding-class-in-bray">Bray</a> further up the coast and <a class="cg-inline-link" href="/best-coding-class-in-wexford">Wexford</a> to the south, all within <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. Online coding schools are compared, plainly, on <a class="cg-inline-link" href="/best-online-coding-classes-ireland">a single page</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> connects the lot.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Arklow, Wicklow and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-wicklow', label: 'County Wicklow' },
    { href: '/best-coding-class-in-greystones', label: 'Greystones' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-akw .cg-hero-grid { align-items: start; gap: clamp(1.16rem, 3.18vw, 2.58rem); }
.cg-root.cg-akw .cg-hero h1 { font-weight: 700; letter-spacing: -0.0191em; line-height: 1.06; }
.cg-root.cg-akw .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-akw .cg-eyebrow { letter-spacing: 0.145em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-akw .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0122em; }
.cg-root.cg-akw .cg-grid-3 { gap: clamp(1.09rem, 2.64vw, 2.1rem); }
.cg-root.cg-akw .cg-table caption { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-akw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-akw .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-akw .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.03rem; }
.cg-root.cg-akw .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Arklow, Co Wicklow, CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 13,316. SAP2022T15T2TOWN22: households 5,012, broadband 4,079, no internet 472, other 98, not stated 363. SAP2022T11T1TOWN22 to work total 5,498: car driver 3,119, on foot 636, work mainly at or from home 439, van 379, car passenger 327, bus 118, bicycle 71, train DART or Luas 49, not stated 335; to school, college or childcare total 3,498: car passenger 1,718, on foot 1,069, bus 206, car driver 113, bicycle 78, train 39, not stated 247. SAP2022T11T2TOWN22: before 06:30 812. SAP2022T11T4TOWN22: 1,267 work from home at least some of the time, 3,659 never, 572 not stated. SAP2022T11T5TOWN22: 751 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 13 to 18 sum to 1,206. SSE Renewables, Arklow Bank Wind Park project page: "Arklow Bank Wind Park 2 is SSE\'s flagship offshore wind farm project in development in Ireland with a proposed installed capacity of 800MW"; "Between 47 - 56 wind turbines" (printed with a dash); "Arklow Bank 2 would create around 80 full-time, locally based jobs ... based out of a new state-of-the-art purpose-built Operations and Maintenance Facility at Arklow Harbour\'s South Dock"; construction could "commence construction towards the end of the decade" if consented; footnote: "834,286 homes powered based on projected installed capacity, typical projected wind load factor of 50%, and typical annual consumption 4,200kWh. Quoted 826,944,000 kilos of carbon emissions abated based on projected annual MWh output and latest average CO2 Emissions (0.236g/kWh)". Our arithmetic: 800 MW x 8,760 h = 7,008,000 MWh; x 0.5 = 3,504,000 MWh = 3,504,000,000 kWh; / 4,200 = 834,285.7, rounds to 834,286; with 8,784 hours 836,571; at 40 percent 667,429, at 35 percent 584,000; 3,504,000,000 kWh x 0.236 g = 826,944,000 g = 826,944 kg; x 0.236 kg = 826,944,000 kg. CRU, Fuel Mix Disclosure and CO2 Emissions 2022: "the unit of measure for emissions intensity in this information paper is g/kWh"; "from 258 g/kWh in 2021 to 234 g/kWh in 2022". Irish Rail, Arklow: "Station Address St. Mary\'s Road Arklow Co. Wicklow", "Eircode Y14 YD89", "Sheltered bike parking available".',
    localProject: 'Units in physical measurement, as a constructive check of a named claim. SSE Renewables\' page for Arklow Bank Wind Park 2 prints a footnote giving its assumptions: 800MW installed capacity, a 50 percent load factor and 4,200 kWh a year per home. The learner rebuilds the homes figure with every unit attached: 800 MW x 8,760 hours = 7,008,000 MWh; at 50 percent 3,504,000 MWh, or 3,504,000,000 kWh; divided by 4,200 kWh gives 834,286, the footnote\'s figure exactly, which also shows a 365-day year was used (a leap year gives 836,571). The claim moves with its assumption: 667,429 homes at 40 percent, 584,000 at 35. The carbon figure, 826,944,000 kilos, reproduces only if the printed rate of 0.236g/kWh is read as 0.236 kg/kWh (236 g): at the printed unit the total is 826,944 kg, a thousand times smaller. The CRU reports the all-island average in g/kWh at that scale, 258 in 2021 and 234 in 2022, so the arithmetic is consistent and the printed unit label is the slip. The program stores value and unit together and refuses to add a power to an energy. New family for the cluster: units in physical measurement.',
    requiredMentions: [
      '13,316',
      '5,498',
      '3,119',
      '1,267',
      '3,498',
      '1,718',
      '751',
      '834,286',
      '3,504,000',
      '826,944',
      '812',
      'Y14 YD89'
    ],
    sources: [
      { claim: 'SSE Renewables, Arklow Bank Wind Park project page: proposed installed capacity of 800MW; between 47 and 56 wind turbines; around 80 full-time local jobs at an Operations and Maintenance Facility at Arklow Harbour\'s South Dock; footnote "834,286 homes powered based on projected installed capacity, typical projected wind load factor of 50%, and typical annual consumption 4,200kWh. Quoted 826,944,000 kilos of carbon emissions abated based on projected annual MWh output and latest average CO2 Emissions (0.236g/kWh)".', url: 'https://www.sserenewables.com/offshore-wind/projects/arklow-bank-wind-park/' },
      { claim: 'Commission for Regulation of Utilities, Fuel Mix Disclosure and CO2 Emissions 2022: "the unit of measure for emissions intensity in this information paper is g/kWh"; the average all-island CO2 emissions per kWh fell "from 258 g/kWh in 2021 to 234 g/kWh in 2022".', url: 'https://cruie-live-96ca64acab2247eca8a850a7e54b-5b34f62.divio-media.com/documents/Fuel-Mix-Disclosure-and-Emissions-2022.pdf' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T2TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T1T1TOWN22, Arklow, Co Wicklow: usual residents 13,316; households 5,012, broadband 4,079; to work 5,498 with car driver 3,119, on foot 636, mainly at or from home 439, van 379, car passenger 327, bus 118, bicycle 71, train 49; to school, college or childcare 3,498 with car passenger 1,718, on foot 1,069, bus 206, car driver 113, bicycle 78, train 39; 812 leave home before 06:30; 1,267 work from home at least some of the time, 3,659 never, 572 not stated; 751 children under 15 in childcare; 1,206 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Arklow station: "Station Address St. Mary\'s Road Arklow Co. Wicklow", "Eircode Y14 YD89", "Sheltered bike parking available".', url: 'https://www.irishrail.ie/en-ie/station/arklow' }
    ],
    rejectedClaims: [
      'Any judgement on whether a 50 percent load factor is realistic for the project.',
      'Any statement that the project will or will not be built, or on its planning status beyond SSE\'s own wording.',
      'Any claim that SSE\'s carbon total is wrong: the total is consistent with 236 g/kWh; only the printed unit label does not match.',
      'Which year\'s CRU rate SSE used: the footnote says "latest average" and the page does not say which year.',
      'The census-night population and local electoral area figure for Arklow: the County Wicklow page owns them.',
      'Any figure for Arklow Bank phase 1: not on the source page.'
    ]
  }
};
