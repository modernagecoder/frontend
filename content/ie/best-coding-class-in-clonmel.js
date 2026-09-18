'use strict';
// Clonmel (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Clonmel, Counties Tipperary & Waterford", read 19
// September 2026, CSO table MDSI07 Average distance to the nearest service for
// individuals and households by Towns (year 2026, updated 21 July 2026), the Irish
// Rail station page for Clonmel and the HSE page for Tipperary University
// Hospital. Spine: the average of the nearest is not the nearest of the averages.
// MDSI07 gives each area's mean distance to an emergency department, to an injury
// unit, and to whichever of the two is nearer. For Clonmel those are 2.3, 23.7
// and 2.3 km, so the combined figure equals the smaller mean. In nine of the 223
// rows it is strictly lower, Limerick city and suburbs 4.8, 3.1 and 2.5 and the
// State 18.9, 35.3 and 15.6, and it is never higher, all checked in this session.
// New family for the cluster: order of operations when aggregating. The table
// names no facility, so no distance is attributed to any named hospital.
// Tipperary owns the town-list population 18,369 and the TUS Clonmel eircode.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'CLONMEL', blurb: 'Nearest of two services, averaged: why that figure cannot be rebuilt from the two averages, shown with Clonmel, Limerick and the whole State.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-clonmel',
  code: 'cml',
  accent: '#4A3A2E',
  accentRationale: 'Clonmel: a Suir-bank umber from the solver, distinct from the Tipperary county accent and the Waterford and Kilkenny pages nearby',
  pageType: 'city',
  place: {
    name: 'Clonmel',
    eyebrow: 'Clonmel, Tipperary and Waterford',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Tipperary' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-tipperary', name: 'County Tipperary' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Tipperary', href: '/coding-classes-in-county-tipperary' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Clonmel, County Tipperary, Ireland',
  title: 'Best Coding Class in Clonmel | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Clonmel learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Clonmel, with a project on why the average distance to the nearest of two services cannot be worked out from two averages.',
  twitterDescription: 'Coding and AI classes for Clonmel, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Clonmel',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Clonmel, taught live in English.'
  },

  h1: 'Coding classes in Clonmel',
  capsuleQ: 'What is the best coding class in Clonmel?',
  capsule: 'Clonmel has 18,224 usual residents in the census town tables and 7,178 households, 5,626 of which report broadband. Its learners can study with us without travelling anywhere: a live teacher on video, twice in most weeks, in a small group at one level or one to one, for any age from six to sixty-seven. The first lesson costs nothing, and from then on the fee is USD 100 a month for a group place or USD 150 for private lessons.',
  lead: 'A CSO table published in 2026 measures how far people live from nine kinds of service, town by town. For Clonmel, the average person lives 2.3 km from an emergency department, 23.7 km from an injury unit, and 2.3 km from whichever of the two is nearer. That last figure looks as though it could be worked out from the first two: just take the smaller. For Clonmel it can. For Limerick city and suburbs it cannot: 4.8 km to an emergency department, 3.1 km to an injury unit, and 2.5 km to the nearer of the two, which is less than either. The reason is the whole lesson on this page: the nearest facility is chosen person by person, before anybody averages anything, and some people are closer to one kind and some to the other.',
  wa: 'Hello Modern Age Coders, I would like to arrange a free coding lesson for a learner in Clonmel.',

  picks: {
    eyebrow: 'Course picks for Clonmel',
    h2: 'Starting courses for Clonmel learners',
    intro: 'The age and interest point to a course, and the free lesson with its own teacher settles where to begin.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with nearest and furthest, smallest and largest, and the order in which you work them out.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Minimums, averages and the order of operations, tested on real distances rather than textbook ones.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Aggregating real data in Python, and knowing which summaries can be combined and which cannot.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults building reports from pre-aggregated figures who need to know when that is safe.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The average of the nearest is not the nearest of the averages',
      intro: 'Mean distance for persons, in kilometres, from CSO table MDSI07, for an emergency department, an injury unit, and whichever of the two is nearer. The distances are published; the last column is our arithmetic.',
      body: [
        { kind: 'table', caption: 'Three rows of the same table, 2026', head: ['Area as labelled', 'Emergency department', 'Injury unit', 'Nearer of the two', 'Smaller of the first two'], rows: [
          ['Clonmel, Counties Tipperary & Waterford', '2.3', '23.7', '2.3', '2.3'],
          ['Limerick city and suburbs, Counties Limerick & Clare', '4.8', '3.1', '2.5', '3.1'],
          ['Dublin city and suburbs, Counties Dublin & Meath', '4.7', '7.4', '4.4', '4.7'],
          ['State', '18.9', '35.3', '15.6', '18.9']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why Clonmel matches', p: 'For every Clonmel resident the emergency department is nearer than any injury unit, so the nearer-of-two distance is always the emergency department distance, and its average is the same 2.3 km. When one option wins for everybody, the shortcut happens to work.' },
          { h3: 'Why Limerick does not', p: 'In Limerick some people are closer to an emergency department and others to an injury unit. Each takes their own nearer option, so the average of those choices, 2.5 km, beats both 4.8 and 3.1. Taking the smaller of the two averages would overstate the distance by 0.6 km.' },
          { h3: 'The rule, checked against the whole table', p: 'Across all 223 rows the nearer-of-two figure is never higher than the smaller of the two means, as the arithmetic requires. It equals it in 214 rows and is strictly lower in nine, two of those by a tenth of a kilometre, within rounding.' }
        ] },
        { kind: 'callout', h3: 'Aggregate last, not first', p: 'The general version of this appears everywhere summaries are reused. The average of each customer\'s cheapest option is not the cheaper of two average prices. The average of each pupil\'s best subject is not the best of the subject averages. The typical fastest route is not the faster of two typical routes. Whenever a calculation involves choosing, ranking or combining for each person, it has to be done on the individual records first and summarised afterwards; summaries of the parts cannot be stitched back into a summary of the choice.',
        },
        { kind: 'p', text: 'The learner builds a small simulation to prove it to themselves: a list of made-up residents, each with a distance to service A and service B, then two calculations, the average of each person\'s smaller distance and the smaller of the two averages. They arrange the residents so that one service always wins and watch the two answers agree, then mix them so that different people prefer different services and watch the first answer fall below the second. Finally they load the real MDSI07 table and write the check we ran: across 223 rows, is the nearer-of-two figure ever above the smaller mean? It never is.' }
      ]
    },
    {
      id: 'clonmel', tint: 'tint', eyebrow: 'Clonmel in the distances table',
      h2: 'Five services, four summaries each',
      intro: 'MDSI07 figures for persons in Clonmel, in kilometres: the mean, the median, and the distances within which the nearest quarter and nearest three quarters of residents live. All published.',
      body: [
        { kind: 'table', caption: 'Distance to services, persons, Clonmel, 2026', head: ['Service', 'Mean', 'Median', 'Nearest 25% within', 'Nearest 75% within'], rows: [
          ['Pharmacy', '1.1', '1.0', '0.5', '1.6'],
          ['General practitioner', '1.3', '1.3', '0.8', '1.8'],
          ['HSE emergency department', '2.3', '2.2', '1.7', '2.9'],
          ['HSE injury unit', '23.7', '23.7', '22.9', '24.3'],
          ['Emergency department or injury unit, whichever is nearer', '2.3', '2.2', '1.7', '2.9']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Reading the quarter columns', p: 'Nearest 25% within 0.8 km for a GP means a quarter of Clonmel residents live within 0.8 km of one. Nearest 75% within 1.8 km means three quarters live within 1.8 km, so a quarter live further than that.' },
          { h3: 'Every summary obeys the rule', p: 'The nearer-of-two row matches the emergency department row in all four columns, which is what happens when one option is nearest for everybody. The rule holds for medians and quarters as well as means.' },
          { h3: 'What the table does not say', p: 'It gives distances, not names. Nothing in it says which emergency department or injury unit is nearest, and this page does not attribute any figure to a particular hospital.' }
        ] },
        { kind: 'spec', title: 'The hospital and the station', p: 'The HSE lists Tipperary University Hospital at Western Road, Clonmel, E91 VY40, and Irish Rail gives Clonmel station as Thomas Street, Clonmel, Co. Tipperary, E91 N9C4. Both are named from their own published listings; we have no connection with either, and the distance table above names no facility.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Clonmel in the town tables',
      h2: 'The census town, for context',
      intro: 'Published for the built-up area Clonmel, Counties Tipperary and Waterford, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Clonmel, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '18,224'],
          ['Households', '7,178'],
          ['Households reporting broadband', '5,626'],
          ['Working residents in the travel table', '7,900'],
          ['Residents travelling to school, college or childcare', '4,177'],
          ['Children under fifteen in childcare', '1,207']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The work journey', p: 'Of the 7,900 working residents, 4,636 drive, 967 walk, 544 travel as a car passenger, 440 give home as their main answer, 331 by van and 132 by bicycle, with 755 not stating.' },
          { h3: 'The school journey', p: 'Of 4,177 journeys to school, college or childcare, 2,570 are as a car passenger, 667 on foot, 334 by bus and 137 driving.' },
          { h3: 'Working from home', p: 'A separate question records 1,439 working residents doing some work at home, 5,334 who never do and 1,127 who did not state.' }
        ] },
        { kind: 'spec', title: 'A town in two counties', p: 'The CSO publishes the built-up area as Clonmel, Counties Tipperary and Waterford, because the town reaches across the county line. That is stated here as a fact about the label; the County Tipperary page deals with what it means for county figures.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Clonmel',
      h2: 'How lessons run from here',
      intro: 'Twice in most weeks, a fixed hour, and a teacher who is present for all of it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Block coding and small games, where finding the smallest or the nearest is an early puzzle.' },
          { h3: 'Teenagers', p: 'Python, websites and AI projects through the junior and senior cycles, with real data along the way.' },
          { h3: 'Adults', p: 'Adults begin from whatever point they are at, and 1,439 working residents here already work from home some of the week.' }
        ] },
        { kind: 'p', text: 'The HSE and Irish Rail are quoted from their own published pages, and neither, nor Tipperary County Council, has any connection with us. Census counts and service distances are Central Statistics Office figures printed as published. The comparison of the nearer-of-two figure with the smaller of the two means, and the count of rows where they differ, are our own checks on the full MDSI07 table, run on 19 September 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From finding the smallest to summarising properly',
    intro: 'Ages are a guide; the free lesson finds the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Nearest and furthest', p: 'Block projects that find the smallest and largest, and do it in a sensible order.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Order of operations', p: 'Minimums and averages in Python, and proving with a small example that the order changes the answer.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Aggregating real data', p: 'Working from individual records, summarising last, and checking a rule across a whole table.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Reusing summaries safely', p: 'Knowing when pre-aggregated figures can be combined at work and when the raw records are needed.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask a model to combine two averages',
    intro: 'It will, and it will not warn you.',
    p1: 'Give an assistant the average distance to an emergency department and to an injury unit and ask how far people live from the nearer one, and it will usually take the smaller average. For Clonmel that is right. For Limerick it overstates the answer, and nothing in the reply signals that the method only works when one option is nearest for everybody.',
    p2: 'A learner who has run the simulation recognises the shape of the question: a choice made per person, then averaged. They ask for the individual records, or for the combined figure the publisher already computed, rather than stitching one together from summaries. That is the difference between an answer that looks reasonable and one that is right.',
    closer: 'Arithmetic on summaries is instant. Knowing when summaries can be combined at all is a person\'s job, and this table is a good place to learn it.',
    blogAnchor: 'why coding still matters for young people'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons work for Clonmel households',
    intro: 'The practical side, in six lines.',
    cells: [
      { h3: 'Live lessons', p: 'A teacher on the call for the full hour, responding to what the learner does.' },
      { h3: 'Level-matched groups', p: 'Five to ten learners at the same stage, joining from Clonmel, around Ireland and abroad.' },
      { h3: 'Two a week, most weeks', p: 'About eight lessons a month, at an hour agreed when the course begins.' },
      { h3: 'School year', p: 'Holidays and exam weeks are planned into the timetable before it starts.' },
      { h3: 'What to bring', p: 'A computer that can run a video call for an hour, sound you can hear, and a microphone that works.' },
      { h3: 'Taught alone', p: 'Some learners are taught one to one, when no group matches both their level and their evenings.' }
    ],
    spec: { title: 'A distance of zero', p: 'On the distance table, every service has a figure. A coding lesson taken at home is the one that measures nothing at all, which is rather the point.' }
  },

  fees: {
    h2: 'Clonmel class fees',
    intro: 'What it costs.',
    first: 'The first lesson, taught in full and assessed, at no charge.',
    group: 'A month in a group of five to ten at one level, about eight live lessons.',
    private: 'A month of private lessons on the same weekly pattern.',
    closer: 'One monthly price, in US dollars, for every household outside India, with no euro version shown beside it. Billing begins with the first paid month, once the free lesson has fixed what will be taught and when, and the pricing page covers the exceptions: holidays, absences and a change from group to private teaching or back.'
  },

  reviewsH2: 'Six of our families on Google, reproduced exactly',

  book: {
    h2: 'Book a free Clonmel lesson',
    intro: 'Let us know the learner\'s age and interests. The first hour is planned around those, and could finish with a game, a working script, or a proof on screen that the order of a calculation changes its answer.',
    success: 'Thank you. We will be in touch about the Clonmel lesson shortly.'
  },

  faq: {
    h2: 'Clonmel coding class questions',
    intro: 'What families in Clonmel ask first.',
    items: [
      { q: 'How many people live in Clonmel?', a: 'The Census 2022 small area tables count 18,224 usual residents in the built-up area, published as Clonmel, Counties Tipperary and Waterford, in 7,178 households. The Tipperary page uses the census town list, which counts on a slightly different basis.' },
      { q: 'What is the Clonmel data project?', a: 'Learners compare two ways of finding the average distance to the nearer of two services: averaging each person\'s nearer distance, and taking the smaller of two averages. Using CSO table MDSI07 they show the two agree for Clonmel, 2.3 km, but not for Limerick, 2.5 km against 3.1 km, and check the rule across 223 rows.' },
      { q: 'Why can the combined distance be lower than both averages?', a: 'Because each person picks their own nearer option before any averaging happens. When some people are nearer to one service and others to the other, the average of those individual choices beats both separate averages.' },
      { q: 'How do Clonmel residents travel to work?', a: 'Of the 7,900 working residents in the travel table, 4,636 drive, 967 walk, 544 travel as a car passenger, 440 give working mainly at or from home, 331 by van and 132 by bicycle, with 755 not stating.' },
      { q: 'What times are lessons?', a: 'After school, in the evening and on weekend mornings. Put the two clocks side by side and India is four and a half hours ahead from late March to late October and five and a half for the rest of the year, and we choose a slot that sits sensibly inside both days.' },
      { q: 'Do you teach adults in Clonmel?', a: 'Yes, up to sixty-seven. Plenty of adults start from nothing, and the free lesson settles whether they join a group or learn one to one.' },
      { q: 'Which hospital is 2.3 km from Clonmel residents?', a: 'The table does not say. It publishes distances to the nearest facility of each type without naming the facility, so this page does not attribute the figure to any particular hospital.' },
      { q: 'Is there a Modern Age Coders classroom in Clonmel?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Clonmel cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Clonmel',
    html: 'The rest of the county is on the <a class="cg-inline-link" href="/coding-classes-in-county-tipperary">County Tipperary</a> page, and the city pages for <a class="cg-inline-link" href="/best-coding-class-in-waterford">Waterford</a> and for <a class="cg-inline-link" href="/best-coding-class-in-limerick">Limerick</a>, the other place in this page\'s comparison, sit in the same province of <a class="cg-inline-link" href="/coding-and-ai-classes-in-munster">Munster</a>. To weigh up online providers, <a class="cg-inline-link" href="/best-online-coding-classes-ireland">see this comparison</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> gathers every place.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Clonmel, Tipperary and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-tipperary', label: 'County Tipperary' },
    { href: '/best-coding-class-in-limerick', label: 'Limerick' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-cml .cg-hero-grid { align-items: start; gap: clamp(1.12rem, 3.28vw, 2.63rem); }
.cg-root.cg-cml .cg-hero h1 { font-weight: 700; letter-spacing: -0.0182em; line-height: 1.064; }
.cg-root.cg-cml .cg-capsule { border-top: 6px solid var(--cg-accent); padding-top: 1.13rem; }
.cg-root.cg-cml .cg-eyebrow { letter-spacing: 0.177em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cml .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0131em; }
.cg-root.cg-cml .cg-grid-3 { gap: clamp(1.07rem, 2.71vw, 2.13rem); }
.cg-root.cg-cml .cg-table caption { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-cml .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cml .cg-table td:nth-child(4) { font-weight: 700; }
.cg-root.cg-cml .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 1.06rem; }
.cg-root.cg-cml .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Clonmel, the built-up area "Clonmel, Counties Tipperary & Waterford", CSO Census 2022 Small Area Population town tables, read 19 September 2026, and CSO table MDSI07 Average distance to the nearest service for individuals and households by Towns, year 2026, updated 21 July 2026, units kilometres to one decimal, 223 rows of which 218 are towns and five are aggregates (State, Remainder of country, and three size bands of other towns). MDSI07 persons, Clonmel: pharmacy mean 1.1, median 1.0, nearest 25 percent within 0.5, nearest 75 percent within 1.6; general practitioner 1.3, 1.3, 0.8, 1.8; HSE emergency department 2.3, 2.2, 1.7, 2.9; HSE injury unit 23.7, 23.7, 22.9, 24.3; HSE emergency department or injury unit 2.3, 2.2, 1.7, 2.9. Mean distance for persons, emergency department, injury unit and the nearer of the two: Limerick city and suburbs 4.8, 3.1, 2.5; Dublin city and suburbs 4.7, 7.4, 4.4; State 18.9, 35.3, 15.6. Our check across all 223 rows: the nearer-of-two mean is never above the smaller of the two means; it equals it in 214 rows and is strictly lower in nine, namely Dublin city and suburbs, Limerick city and suburbs, Kilmallock (by 0.1), Cahir (by 0.1), the State, Remainder of country and the three size-band aggregates. Census town tables: SAP2022T2T1TOWN22 usual residents 18,224, born in Ireland 14,627; SAP2022T15T2TOWN22 households 7,178, broadband 5,626, none 691, not stated 698, other 163; SAP2022T11T1TOWN22 to work total 7,900 with car driver 4,636, on foot 967, car passenger 544, work mainly at or from home 440, van 331, bicycle 132, bus 44, train 8, not stated 755; to school, college or childcare total 4,177 with car passenger 2,570, on foot 667, bus 334, car driver 137, not stated 398; SAP2022T11T4TOWN22 1,439 work from home at least some of the time, 5,334 never, 1,127 not stated; SAP2022T11T5TOWN22 1,207 children under 15 in childcare. Irish Rail, Clonmel station: "Thomas Street Clonmel Co. Tipperary", "Eircode E91 N9C4". HSE: Tipperary University Hospital, "Western Road, Clonmel, Tipperary, E91 VY40".',
    localProject: 'The average of the nearest is not the nearest of the averages. CSO table MDSI07 gives, for every area, the mean distance from residents to an emergency department, to an injury unit, and to whichever of the two is nearer for each person. For Clonmel the three are 2.3, 23.7 and 2.3 km, so the nearer-of-two figure equals the smaller mean, because the emergency department is nearest for everybody. For Limerick city and suburbs they are 4.8, 3.1 and 2.5 km: the combined figure beats both, because different residents are nearer to different facility types and each chooses before any averaging. Mathematically the average of per-person minimums can never exceed the smaller of the two averages, and our check across all 223 rows confirms it: equal in 214, strictly lower in nine, never higher. The page generalises to any calculation that chooses or ranks per person, which must be done on individual records and summarised last. It reads the quarter columns correctly and states that the table names no facility, so no distance is attributed to any hospital. The learner builds a small simulation showing agreement when one option always wins and divergence when preferences mix, then runs the check on the real table. New family for the cluster: order of operations when aggregating.',
    requiredMentions: [
      '18,224',
      '7,178',
      '5,626',
      '7,900',
      '4,636',
      '4,177',
      '2,570',
      '1,439',
      '1,207',
      '23.7',
      'E91 N9C4',
      'E91 VY40'
    ],
    sources: [
      { claim: 'CSO table MDSI07 Average distance to the nearest service for individuals and households by Towns, 2026, persons: Clonmel emergency department mean 2.3 km, injury unit 23.7, emergency department or injury unit 2.3; GP 1.3; pharmacy 1.1; Limerick city and suburbs 4.8, 3.1, 2.5; Dublin city and suburbs 4.7, 7.4, 4.4; State 18.9, 35.3, 15.6.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/MDSI07/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T4TOWN22 and SAP2022T11T5TOWN22, Clonmel, Counties Tipperary & Waterford: usual residents 18,224; households 7,178, broadband 5,626; to work 7,900 with car driver 4,636, on foot 967, car passenger 544, mainly at or from home 440, van 331, bicycle 132; to school, college or childcare 4,177 with car passenger 2,570, on foot 667, bus 334, car driver 137; 1,439 work from home at least some of the time; 1,207 children under 15 in childcare.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Clonmel station: "Thomas Street Clonmel Co. Tipperary", "Eircode E91 N9C4".', url: 'https://www.irishrail.ie/en-ie/station/clonmel' },
      { claim: 'Health Service Executive: Tipperary University Hospital, "Western Road, Clonmel, Tipperary, E91 VY40".', url: 'https://www2.hse.ie/services/hospitals/tipperary-university-hospital/' }
    ],
    rejectedClaims: [
      'Attributing any MDSI07 distance to a named hospital or unit: the table names no facility.',
      'Any comment on the adequacy of health services in Clonmel or elsewhere: the page is about arithmetic on distances, not provision.',
      'The maternity and primary care rows for Clonmel: shown in the data, left out because they invite readings the table cannot support.',
      'Describing how MDSI07 measures distance, road or straight line: the glossary page did not yield that text, so the method is not stated.',
      'The census town-list population of Clonmel and the TUS Clonmel campus eircode: the County Tipperary page owns both.',
      'Any reason for Clonmel\'s travel shares.'
    ]
  }
};
