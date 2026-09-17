'use strict';
// Balbriggan (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Balbriggan, Co Dublin", read 18 September 2026, the CSO's
// own press statement quoting census day as 03 April 2022, and the Irish Rail
// station page for Balbriggan. Spine: a date is not a string. Every date claim on
// the page was executed in this session: 3 April 2022 was a Sunday; Europe/Dublin
// ran an hour ahead of UTC that day and an hour behind it on 26 March 2022;
// JavaScript reads new Date(2022, 3, 3) as 3 April because months count from
// zero, and Date.parse of 03/04/2022 as 4 March. New family for the cluster: time
// and date handling. Fingal owns Balbriggan's town-list population 24,322 and its
// average age, so neither appears. Two other local sites did not respond and are
// not quoted.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'BALBRIGGAN', blurb: 'The census date written as 03 April 2022, which a careless parser reads as the fourth of March. Dates, times and a north Dublin town.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-balbriggan',
  code: 'blb',
  accent: '#8A3A5A',
  accentRationale: 'Balbriggan: a harbour rose from the solver, kept apart from the Fingal page and from the Swords and Malahide accents in the same area',
  pageType: 'city',
  place: {
    name: 'Balbriggan',
    eyebrow: 'Balbriggan, Fingal, County Dublin',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Fingal' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-fingal', name: 'Fingal' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Fingal', href: '/coding-classes-in-fingal' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Balbriggan, Fingal, Ireland',
  title: 'Best Coding Class in Balbriggan | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Balbriggan learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Balbriggan, with a project on why dates break more programs than numbers do.',
  twitterDescription: 'Coding and AI classes for Balbriggan, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Balbriggan',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Balbriggan, County Dublin, taught live in English.'
  },

  h1: 'Coding classes in Balbriggan',
  capsuleQ: 'What is the best coding class in Balbriggan?',
  capsule: 'Balbriggan holds 24,145 usual residents in the census town tables, across 8,146 households, 6,979 of them reporting broadband. The lesson comes to the house: a teacher live on video at an agreed hour, twice in most weeks, with a group of five to ten at one stage or with the learner alone, from six years old to sixty-seven. The opening lesson is free. After it, a shared place costs USD 100 a month and private teaching USD 150.',
  lead: 'The Central Statistics Office writes census day as 03 April 2022. Hand that string to a program without thinking and the trouble starts. Ask JavaScript to parse 03/04/2022 and it answers the fourth of March, because it reads the month first. Build the date by hand instead, as new Date(2022, 3, 3), and you get 3 April, because months in JavaScript start at zero while days do not. That day was a Sunday, and Irish clocks had moved an hour forward the week before, so any timestamp stored without a zone shifts by an hour on either side of it. Every one of those was run while writing this page. Dates look like text, behave like arithmetic and break more programs than numbers ever do.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Balbriggan.',

  picks: {
    eyebrow: 'Course picks for Balbriggan',
    h2: 'Where Balbriggan learners begin',
    intro: 'Start from the age and the interest, and let the free hour with the course teacher place the learner properly.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects with timers and turns, where order and duration already matter.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python from the start, including dates as their own kind of value rather than text.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 14 to 18', note: 'Real programs that parse, store and compare dates across time zones without corrupting them.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults automating reports where a month boundary or a clock change quietly ruins a total.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A date is not a string',
      intro: 'Five things a program can get wrong about one published date. Each line was executed on 18 September 2026 against the date the CSO itself prints, not recalled.',
      body: [
        { kind: 'table', caption: 'What code does with 03 April 2022', head: ['What the program does', 'What comes back'], rows: [
          ['Parses the text 03/04/2022 in JavaScript', 'The fourth of March 2022, because the month is read first'],
          ['Builds it in JavaScript as new Date(2022, 3, 3)', '3 April 2022, because months count from zero and days from one'],
          ['Builds it in Python as datetime(2022, 4, 3)', '3 April 2022, because months count from one'],
          ['Asks which weekday it was', 'Sunday'],
          ['Asks what Irish clocks were doing', 'One hour ahead of UTC, having moved forward on 27 March 2022; a week earlier they were level with it'],
          ['Stores a local time with no zone attached', 'A value that silently shifts by an hour when the clocks change']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Ambiguity is the first problem', p: 'The same six digits mean two different days depending on the reader. The fix is boring and total: store and exchange dates as year, month, day in that order, and never hand a program a date it has to guess about.' },
          { h3: 'Off-by-one is the second', p: 'One popular language numbers months from zero and another from one. Nothing warns you. A date built from parts is a date that has to be tested, and the test is one line.' },
          { h3: 'The clock change is the third', p: 'Twice a year an hour appears or disappears. A stored local time without a zone is simply wrong for half the year, and the bug surfaces in late October when nobody is looking for it.' }
        ] },
        { kind: 'callout', h3: 'This one reaches us directly', p: 'Our teachers work from India and our learners are in Ireland, so every lesson in our timetable is a pair of local times with a gap between them that is four and a half hours for part of the year and five and a half for the rest. A booking system that stores only a wall-clock time, or only a UTC offset frozen when the booking was made, produces a lesson an hour adrift the week after the clocks go back, which is a real problem for a fourteen-year-old with homework. Store the zone, store the instant, convert on display, and test the last Sunday in October before it happens.',
        },
        { kind: 'p', text: 'The learner\'s project is a date drill rather than an essay. Parse an unambiguous date and an ambiguous one and show that the second cannot be trusted. Build the same date in two languages and check they agree. Print the weekday. Convert a lesson time between Ireland and India on a date in June and a date in December and note that the gap is not the same. Then write the three rules they will apply afterwards, which will be shorter than this paragraph and will save them a day of work within a year.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Balbriggan in the town tables',
      h2: 'The town on that Sunday',
      intro: 'Published for the built-up area Balbriggan, Co Dublin, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Balbriggan, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '24,145'],
          ['Residents born in Ireland', '16,705'],
          ['Households', '8,146'],
          ['Households reporting broadband', '6,979'],
          ['Working residents in the travel table', '10,373'],
          ['Children under fifteen in childcare', '1,495']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The work journey', p: 'Of 10,373 working residents, 5,332 drive, 1,000 give home as their main answer, 903 take a train, DART or Luas, 828 walk, 646 take a bus, 461 travel as a car passenger and 95 cycle.' },
          { h3: 'The education journey', p: 'A larger group than in most towns: 7,725 residents travel to school, college or childcare, of whom 3,168 walk, 2,311 go as a car passenger, 679 take a bus, 444 travel by rail and 343 cycle.' },
          { h3: 'Working from home', p: 'A separate table records working residents doing at least some work at home, those who never do and those who did not state, and it is a different question from the main means of travel.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives Balbriggan station as Station Road, Balbriggan, Co. Dublin, Eircode K32 YK59, with the station and booking office open from 06:00 to 20:00 Monday to Saturday and from 08:00 on Sunday, passenger shelters and a waiting room to the same hours. Timetables are the other place where a clock change has to be handled by somebody.' }
      ]
    },
    {
      id: 'dates', tint: 'tint', eyebrow: 'Dates in our own week',
      h2: 'What the clock change does to a timetable',
      intro: 'The teaching gap between Ireland and India in each half of the year, and what a scheduler has to store to survive it.',
      body: [
        { kind: 'table', caption: 'One weekly lesson, two halves of the year', head: ['Period', 'Gap between Irish and Indian clocks', 'What a naive system does'], rows: [
          ['Irish summer time, including 3 April 2022', 'Four and a half hours', 'Looks correct, because it was set up in this half'],
          ['After the clocks go back', 'Five and a half hours', 'Shows the lesson an hour out until somebody complains'],
          ['The changeover weekend itself', 'Both, depending on the hour', 'Produces a time that does not exist or happens twice']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Store the zone, not the offset', p: 'An offset is a fact about one instant; a zone is a rule that covers all of them. Storing the zone means the change is applied for you rather than remembered by somebody twice a year.' },
          { h3: 'Agree in local terms, store in absolute ones', p: 'A family agrees an hour in Irish time. The system should keep the instant and the zone, then show each party their own clock, which is how the same lesson stays correct on both sides of a change.' },
          { h3: 'Test the boundary deliberately', p: 'The last Sunday in October is a date a scheduler should be run against on purpose, before it arrives. That is one test, and it is cheaper than an apology to a household on a Monday evening.' }
        ] },
        { kind: 'spec', title: 'Why this page can say 3 April at all', p: 'The Central Statistics Office says so itself. Its own press statement on the Census 2022 results thanks everyone who completed their census form on 03 April 2022, and that published wording is what this page quotes rather than anybody\'s recollection.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Balbriggan',
      h2: 'How the teaching runs',
      intro: 'A fixed weekly hour, a teacher present for all of it, and a level that suits the learner.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary age', p: 'Block coding and small games, taught at an hour that suits a younger learner in a busy house.' },
          { h3: 'Secondary age', p: 'Python, websites and AI projects, through the junior cycle and into the exam years.' },
          { h3: 'Adults', p: 'The adult courses cover Python, data and AI, at whatever level somebody starts from.' }
        ] },
        { kind: 'p', text: 'Irish Rail is quoted from its own station page and the Central Statistics Office from its own press statement, and we are connected to neither, nor to Fingal County Council. Two other Balbriggan sites did not respond to requests on 18 September 2026, so nothing is quoted from them and nothing was substituted in their place. The census counts are printed as published, and every date and time claim on this page was produced by running the operation rather than by remembering the answer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From timers to time zones',
    intro: 'Ages guide the choice; the free hour settles the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Order and duration', p: 'Block projects with timers, turns and waits, where sequence is already a real idea.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Dates as values', p: 'Storing and comparing dates in Python instead of pushing text around.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Parsing and zones', p: 'Reading real date formats, handling zones, and testing the awkward boundaries.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Schedules that hold', p: 'Building reports and bookings that survive month ends, clock changes and other countries.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask for date handling code and check the zone',
    intro: 'It usually parses, rarely localises.',
    p1: 'Generated date code tends to look complete: it parses a string, formats an output and runs on the first example. What it frequently omits is the zone, the ambiguity of a format written day first or month first, and the behaviour on the two weekends a year when an hour appears or disappears. None of that surfaces in testing unless the test was written for it.',
    p2: 'A learner who has done this drill reads the code for three specific things before running it: is the input format unambiguous, are months numbered as this language numbers them, and is a zone attached to anything stored. Three questions, asked in a few seconds, and they catch the bugs that otherwise arrive in October.',
    closer: 'A computer can write the parser. Knowing which date it will get wrong is still a human contribution, and it is a good one to build early.',
    blogAnchor: 'why coding keeps paying off'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How it works for a Balbriggan family',
    intro: 'Six practical points.',
    cells: [
      { h3: 'Live teaching', p: 'A teacher on the call for the full hour, working from what the learner is building.' },
      { h3: 'Placed by stage', p: 'Five to ten learners at the same level, joining from Balbriggan, elsewhere in Ireland and abroad.' },
      { h3: 'A weekly slot', p: 'Two lessons in most weeks, about eight a month, at an hour agreed at the start.' },
      { h3: 'Clock changes handled', p: 'When the clocks move, the Irish hour stays the hour you agreed, and the shift is ours to absorb.' },
      { h3: 'Equipment', p: 'A computer with a keyboard, audio in both directions, and a connection that holds a video call.' },
      { h3: 'One to one', p: 'Some learners work alone with a teacher, because of their stage or because of the hours that suit them.' }
    ],
    spec: { title: 'The half hour in the middle', p: 'Indian clocks sit on a half-hour offset, so the gap to Ireland is four and a half hours or five and a half, never a round number. It is the sort of detail that breaks a scheduler and a good reason to be careful with both.' }
  },

  fees: {
    h2: 'Balbriggan class fees',
    intro: 'Three lines, complete.',
    first: 'The opening lesson, taught and assessed in full, at no charge.',
    group: 'A month in an ability group of five to ten, about eight live lessons.',
    private: 'A month of one to one teaching on the same weekly pattern.',
    closer: 'Fees are monthly, in US dollars, at the single rate for families outside India, so Balbriggan sees the same figure as Swords or Drogheda and no euro list appears beside it. The first invoice waits on two decisions, which course and which hour, both made during the lesson that costs nothing, and term breaks, an absence and a switch of format are set out on the pricing page.'
  },

  reviewsH2: 'Six of our families, quoted from Google as written',

  book: {
    h2: 'Book a free Balbriggan lesson',
    intro: 'Give us the age and what holds their attention, and the opening hour is built from those two things. It might end in a game, a first program, or a date that two languages disagree about.',
    success: 'Thank you. We will be in touch about the Balbriggan lesson shortly.'
  },

  faq: {
    h2: 'Balbriggan coding class questions',
    intro: 'What Balbriggan households ask first.',
    items: [
      { q: 'How many people live in Balbriggan?', a: 'The Census 2022 small area tables count 24,145 usual residents in the built-up area of Balbriggan, in 8,146 households. Our Fingal page quotes the census town list, which counts town populations on a slightly different basis.' },
      { q: 'What is the Balbriggan data project?', a: 'Learners take one published date, 03 April 2022, and run it through the mistakes programs actually make: an ambiguous format, months numbered from zero in one language and one in another, a missing time zone, and a clock change the week before. Each is executed rather than described.' },
      { q: 'Why is a date harder than a number?', a: 'Because it is a number written as text with rules attached. The same six digits mean two days in different conventions, languages disagree about how months are numbered, and an hour appears or disappears twice a year in this country.' },
      { q: 'How do Balbriggan residents travel to work?', a: 'Of the 10,373 working residents in the travel table, 5,332 drive, 1,000 give working mainly at or from home, 903 take a train, DART or Luas, 828 walk, 646 take a bus, 461 travel as a car passenger and 95 cycle.' },
      { q: 'What happens to our lesson when the clocks change?', a: 'Nothing on your side. The hour agreed in Irish time stays the hour, and our teachers absorb the shift, because the gap between the two countries is four and a half hours in summer and five and a half in winter.' },
      { q: 'Do you teach adults in Balbriggan?', a: 'Yes, to the age of sixty-seven and from no experience at all. Placement, in a group at the same stage or alone with a teacher, comes out of the opening hour.' },
      { q: 'Can lessons be rescheduled?', a: 'Where notice is given, yes, subject to a teacher being free at the new time. The pricing page sets out how missed lessons are treated.' },
      { q: 'Is there a Modern Age Coders classroom in Balbriggan?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Balbriggan cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Balbriggan',
    html: 'Down the coast are <a class="cg-inline-link" href="/best-coding-class-in-swords">Swords</a> and <a class="cg-inline-link" href="/best-coding-class-in-malahide">Malahide</a>, inside <a class="cg-inline-link" href="/coding-classes-in-fingal">Fingal</a>, with <a class="cg-inline-link" href="/best-coding-class-in-drogheda">Drogheda</a> to the north and <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a> around them. Online schools are compared on our <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Balbriggan, Fingal and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-swords', label: 'Swords' },
    { href: '/coding-classes-in-fingal', label: 'Fingal' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-blb .cg-hero-grid { align-items: start; gap: clamp(1.06rem, 3.35vw, 2.52rem); }
.cg-root.cg-blb .cg-hero h1 { font-weight: 700; letter-spacing: -0.0203em; line-height: 1.047; }
.cg-root.cg-blb .cg-capsule { border-top: 7px solid var(--cg-accent); padding-top: 1.2rem; }
.cg-root.cg-blb .cg-eyebrow { letter-spacing: 0.185em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-blb .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.0149em; }
.cg-root.cg-blb .cg-grid-3 { gap: clamp(1.17rem, 2.81vw, 2.19rem); }
.cg-root.cg-blb .cg-table caption { letter-spacing: 0.043em; font-weight: 700; }
.cg-root.cg-blb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-blb .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-blb .cg-ladder-col { border-left: 7px solid var(--cg-accent); padding-left: 1.09rem; }
.cg-root.cg-blb .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Balbriggan, the built-up area "Balbriggan, Co Dublin", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T2T1TOWN22: usual residents 24,145, born in Ireland 16,705. SAP2022T15T2TOWN22: households 8,146, broadband 6,979. SAP2022T11T1TOWN22 to work total 10,373: car driver 5,332, work mainly at or from home 1,000, train DART or Luas 903, on foot 828, bus 646, not stated 617, car passenger 461, van 431, bicycle 95, motorcycle 37, other including lorry 23; to school, college or childcare total 7,725: on foot 3,168, car passenger 2,311, bus 679, not stated 610, train 444, bicycle 343, car driver 114, work mainly at or from home 38, van 10, other 7, motorcycle 1. SAP2022T11T5TOWN22: 1,495 children under 15 in childcare, 652 aged 0 to 4 and 843 aged 5 to 14. SAP2022T8T1TOWN22: at work 10,430, students 2,433. Census date: the Central Statistics Office press statement on the Census 2022 summary results quotes its own Director General thanking "everyone who completed their census form on 03 April 2022". Date and time facts executed in this session rather than recalled: 3 April 2022 was a Sunday; in the Europe/Dublin zone that day ran one hour ahead of UTC, as did 27 March 2022, while 26 March 2022 and 3 January 2022 were level with UTC; JavaScript parses the string 03/04/2022 as 4 March 2022 and builds new Date(2022, 3, 3) as 3 April 2022 and new Date(2022, 4, 3) as 3 May 2022, months counting from zero; Python builds datetime(2022, 4, 3) as 3 April 2022, months counting from one. Irish Rail, Balbriggan station: "Station Road Balbriggan Co. Dublin", "Eircode K32 YK59", station and booking office "Monday to Friday: 06:00- 20:00", "Saturday : 06:00- 20:00", "Sunday : 08:00- 20:00". Two further Balbriggan sites returned no content on 18 September 2026 and are not quoted.',
    localProject: 'A date is not a string. The CSO prints census day as 03 April 2022, and that one published date is enough to demonstrate the whole family of date bugs, each executed while writing the page. JavaScript parses the text 03/04/2022 as the fourth of March, reading the month first. Built from parts as new Date(2022, 3, 3) the same language gives 3 April, because months count from zero there and from one in Python, where datetime(2022, 4, 3) is the same day. The day was a Sunday. Irish clocks moved forward on 27 March 2022, so census day ran an hour ahead of UTC while a week earlier it was level, which means any local time stored without a zone is wrong for half the year. The page ties this to our own timetable, where the gap between Irish and Indian clocks is four and a half hours in summer and five and a half in winter, never a round number, and sets out the rules: exchange dates as year, month, day; test dates built from parts; store the zone rather than an offset; and run the scheduler against the last Sunday in October before it arrives. New family for the cluster: time and date handling.',
    requiredMentions: [
      '24,145',
      '16,705',
      '8,146',
      '6,979',
      '10,373',
      '5,332',
      '903',
      '7,725',
      '3,168',
      '2,311',
      '1,495',
      'K32 YK59'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, Balbriggan, Co Dublin: to work 10,373 with car driver 5,332, mainly at or from home 1,000, train 903, on foot 828, bus 646, car passenger 461, bicycle 95, not stated 617; to school, college or childcare 7,725 with on foot 3,168, car passenger 2,311, bus 679, train 444, bicycle 343, car driver 114.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T5TOWN22 and SAP2022T8T1TOWN22, Balbriggan: usual residents 24,145, born in Ireland 16,705; households 8,146, broadband 6,979; 1,495 children under 15 in childcare; at work 10,430, students 2,433.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'Central Statistics Office press statement on the Census of Population 2022 summary results, quoting its Director General thanking "everyone who completed their census form on 03 April 2022".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultsclare/' },
      { claim: 'Irish Rail, Balbriggan station: "Station Road Balbriggan Co. Dublin", "Eircode K32 YK59"; station and booking office "Monday to Friday: 06:00- 20:00", "Saturday : 06:00- 20:00", "Sunday : 08:00- 20:00".', url: 'https://www.irishrail.ie/en-ie/station/balbriggan' }
    ],
    rejectedClaims: [
      'Any date or time-zone claim quoted from memory: each was executed in this session against the published date.',
      'Any claim about what the census form asked or how answers relate to that Sunday specifically.',
      'The census town-list population of Balbriggan and its average age: the Fingal page owns both.',
      'Two further Balbriggan institutions whose sites returned no content: nothing is quoted from them and no substitute was used.',
      'Any reason for the town\'s rail share or for the size of its education-travel group.',
      'Writing the summer-time abbreviation in place of the full phrase: the build rejects it, and the page says an hour ahead of UTC instead.'
    ]
  }
};
