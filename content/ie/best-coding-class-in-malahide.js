'use strict';
// Malahide (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Malahide, Co Dublin", read 18 September 2026, CSO table
// F7070, the Irish Rail station page for Malahide and the website of Malahide
// Community School. Spine: bands of unequal width. In the journey-time table
// the "1 hour to under 1 1/2 hours" band holds 1,348 residents against 1,208 in
// the band below it, so a plain bar chart rises at the end; that band is thirty
// minutes wide where the others are fifteen, which is 674 per quarter hour by
// our arithmetic, so the count per unit of time keeps falling. The same shape
// appears in the all-towns row. New to the cluster: nothing earlier is about
// bin width, density or open-ended bands. Fingal owns Malahide Castle and the
// town-list population, so the usual-resident count is used here and the castle
// is left alone. No reason is offered for any Malahide figure, and no employer
// or journey purpose is inferred.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'MALAHIDE', blurb: 'A coastal town in Fingal, with a project on a census chart that rises at the end only because one band is twice as wide.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-malahide',
  code: 'mlh',
  accent: '#4B5566',
  accentRationale: 'Malahide: a platform slate from the solver, set apart from the Swords estuary blue and the Fingal page',
  pageType: 'city',
  place: {
    name: 'Malahide',
    eyebrow: 'Malahide, Fingal, County Dublin',
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
  routeLabel: 'Malahide, Fingal, Ireland',
  title: 'Best Coding Class in Malahide | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Malahide learners aged 6 to 67, taught by a real teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Malahide, with a project on a census chart that rises at the end only because the last band is twice as wide.',
  twitterDescription: 'Coding and AI classes for Malahide, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Malahide',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Malahide, County Dublin, taught live in English.'
  },

  h1: 'Coding classes in Malahide',
  capsuleQ: 'What is the best coding class in Malahide?',
  capsule: 'The census town tables record 18,305 usual residents in Malahide, living in 6,521 households, of which 6,018 have a broadband connection. Learning here needs no journey: a teacher takes the lesson live on video twice in most weeks, either with a group of five to ten placed at one level or with a single learner, and ages run from six to sixty-seven. The first lesson costs nothing. After it, a group place is USD 100 a month and one to one is USD 150.',
  lead: 'Chart the Malahide journey-time figures and the bars fall away neatly until the second last one, which climbs again: 1,208 residents spend three quarters of an hour to an hour getting to work, school or college, and 1,348 spend an hour to an hour and a half. Read the labels rather than the bars and the climb disappears. Every earlier band covers fifteen minutes; that one covers thirty, so it has twice as long a stretch of the day to gather people from. Share it out evenly and it is 674 per quarter hour, roughly half the bar beside it. Nothing about Malahide caused the bump. The chart did, and a reader who checks band widths before believing a shape has learned something that applies to every histogram they will ever meet.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Malahide.',

  picks: {
    eyebrow: 'Course picks for Malahide',
    h2: 'Where Malahide learners usually begin',
    intro: 'Pick by age and interest; the free first lesson with that course\'s own teacher settles the level. We ask for nothing beyond contact details to book it.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding where children build and compare, so bigger and taller stop meaning the same thing.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Rates, division and units through small programs, which is exactly what this town\'s project needs.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real census tables charted properly in Python, band widths and all.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who present figures to other people and would rather not mislead them by accident.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Bands of different widths',
      intro: 'Journey times for the 11,031 Malahide residents counted in the Census 2022 travel tables. Counts are as published; shares and per-quarter-hour figures are our own division.',
      body: [
        { kind: 'table', caption: 'Journey time to work, school or college, Malahide, April 2022', head: ['Band as published', 'Width', 'Residents', 'Share of stated', 'Per quarter hour'], rows: [
          ['Under 15 mins', '15 minutes', '2,455', '23.6%', '2,455'],
          ['A quarter to under half an hour', '15 minutes', '2,819', '27.1%', '2,819'],
          ['Half an hour to under three quarters', '15 minutes', '2,307', '22.2%', '2,307'],
          ['Three quarters to under an hour', '15 minutes', '1,208', '11.6%', '1,208'],
          ['An hour to under an hour and a half', '30 minutes', '1,348', '13.0%', '674'],
          ['An hour and a half and over', 'No upper limit', '260', '2.5%', 'Not calculable']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Where the bump comes from', p: 'A bar chart drawn straight from the counts puts 1,348 above 1,208 and suggests journeys pile up again after an hour. Divide each count by the minutes its band covers and the sequence falls all the way: 1,208 in the last fifteen-minute band, then 674 per quarter hour in the thirty-minute one.' },
          { h3: 'It is not a Malahide effect', p: 'The all-towns row of the same table behaves identically: 132,200 in the three-quarters-to-an-hour band and 135,904 in the hour-to-ninety-minutes band, which is 67,952 per quarter hour. Whatever produces the shape produces it everywhere, because it is in the table design.' },
          { h3: 'The band you cannot divide', p: 'The top band has no upper limit, so it has no width, no rate per quarter hour and no midpoint. Any average journey time computed from these bands rests on a number somebody chose for that band, and the honest version says so out loud.' }
        ] },
        { kind: 'callout', h3: 'In a histogram the area carries the meaning, not the height', p: 'Bar charts of equal categories can be read by height. Bars over ranges of a measurement cannot, unless every range is the same size. Put frequency density on the vertical axis, meaning count divided by the width of the band, and the picture stops lying; leave raw counts there and the widest band always wins attention it has not earned. The same trap runs through age bands, income brackets, file-size buckets and response-time charts in every dashboard, which is why we teach it on a small table where the reader can check every line by hand.' },
        { kind: 'p', text: 'The learner writes a short program that takes each label as text, works out how many minutes the band covers, divides the count by it, and refuses to return a rate for the open band rather than inventing a limit. Then they redraw the chart with those rates and write two sentences on what changed. Of the 11,031 residents in the table, 634 did not state a journey time, so every share on this page is out of the 10,397 who did, and that denominator is stated wherever the percentages are.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Malahide in the town tables',
      h2: 'What the census records about the town',
      intro: 'Figures published for the built-up area called Malahide, Co Dublin, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Malahide, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '18,305'],
          ['Households, and those with a broadband connection', '6,521 and 6,018'],
          ['Working residents in the travel table', '8,236'],
          ['Whose main means of travel is train, DART or Luas', '1,070'],
          ['Working in Dublin city and suburbs', '3,553'],
          ['Retired', '2,932']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two separate questions about home', p: 'The travel table asks for the main means of travel and puts 1,609 residents at or working from home. A different table asks whether people work from home at all, and 4,700 do so at least some of the time, 3,057 never and 479 did not state. Both are published, both are right, and they answer different questions.' },
          { h3: 'Getting to work', p: 'Of those 8,236 working residents, 3,943 drive, 1,070 take a train, DART or Luas, 498 take a bus, 289 walk and 146 cycle.' },
          { h3: 'Getting to school or college', p: 'A second group of 5,044 residents travel to school, college or childcare: 1,869 as a car passenger, 1,571 on foot, 572 by train, DART or Luas and 507 by bus.' }
        ] },
        { kind: 'p', text: 'Broadband reaches about 92.3% of Malahide households by our arithmetic. The education table for the town counts 12,443 people and records 2,612 with an honours bachelor degree or professional qualification, 2,540 with a postgraduate diploma or degree and 272 with a doctorate. The population is spread widely by age, with 1,472 residents aged 45 to 49 and 1,421 aged 40 to 44.' }
      ]
    },
    {
      id: 'clock', tint: 'tint', eyebrow: 'The same people, a different table',
      h2: 'When Malahide leaves the house',
      intro: 'The identical 11,031 residents, this time counted by the time they left home, with shares out of the 10,398 who stated one.',
      body: [
        { kind: 'table', caption: 'Time leaving home to travel to work, school or college', head: ['Band as published', 'Residents', 'Share of stated'], rows: [
          ['Before 06:30', '507', '4.9%'],
          ['06:30 to 07:00', '1,026', '9.9%'],
          ['07:01 to 07:30', '1,386', '13.3%'],
          ['07:31 to 08:00', '2,523', '24.3%'],
          ['08:01 to 08:30', '3,112', '29.9%'],
          ['08:31 to 09:00', '1,093', '10.5%'],
          ['09:01 to 09:30', '232', '2.2%'],
          ['After 09:30', '519', '5.0%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Here the bands match', p: 'Every band between the two open ends covers half an hour, so these bars can be compared by height without any correction. Two tables about the same residents, built two different ways: that is the whole point of reading labels first.' },
          { h3: 'Boundaries are written differently too', p: 'This table runs a band to 07:00 and starts the next at 07:01. The journey table says under a quarter, under a half, under three quarters, so a journey of exactly half an hour falls in the band above, not below. Neither is wrong; they simply have to be read.' },
          { h3: 'One resident apart', p: 'Both tables cover 11,031 people. The journey table records 634 who did not state and this one 633, which is why the denominators here are 10,397 and 10,398. We use each table\'s own figure rather than smoothing the difference away.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail lists Malahide station at Eircode K36 HC92, served by the DART and Dublin commuter route and the Dublin to Dundalk commuter route, with a car park of 77 spaces including 4 accessible bays and 2 electric charging points, sheltered bicycle parking and 7 bicycle lockers, and level access to the city-centre platform with a lift and footbridge to the other.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Malahide',
      h2: 'Lessons that add nothing to the journey',
      intro: 'Whatever the household\'s travel pattern looks like, the coding lesson happens at home.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary and secondary', p: 'From first lessons in block coding to Junior Cycle, Transition Year and the Leaving Certificate years, with the school calendar built into the plan.' },
          { h3: 'Full-time students', p: 'The town counts 1,770 residents aged fifteen and over whose main status is student, so there are learners here between school and college as well as in it.' },
          { h3: 'Working adults', p: 'Python, data and AI for adults, including the 4,700 residents who already do at least part of their work from home.' }
        ] },
        { kind: 'spec', title: 'The school in the town', p: 'Malahide Community School gives its address as Broomfield, Malahide, Co. Dublin, K36 PR28, and describes itself as a co-educational, inclusive school that welcomes pupils of all religious denominations. We have no connection with it, and our lessons run outside school hours.' },
        { kind: 'p', text: 'We are not connected to Irish Rail, Fingal County Council or any school named on this page, and we quote each of them only from its own website. Counts come from Central Statistics Office Census 2022 tables exactly as published; the shares, the per-quarter-hour rates and the comparison with all towns combined are our own arithmetic, and the row we compare against is the one the town tables label State, which in these tables covers the towns rather than the country.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From reading a chart to drawing an honest one',
    intro: 'The ages are a guide only; the free lesson finds the real starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Taller is not always more', p: 'Counting, grouping and comparing in block code, where the picture has to match the count.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Per something', p: 'Division as a tool: per minute, per person, per band, and knowing which one a question wants.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Charts that do not mislead', p: 'Binning real data, handling open-ended groups, and choosing an axis that tells the truth.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Figures other people act on', p: 'Building reports and dashboards where the shape of a chart is defended, not just styled.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A chatbot will chart this table without blinking',
    intro: 'Correct code, wrong picture.',
    p1: 'Paste the Malahide journey bands into an assistant and it will hand back tidy plotting code in seconds. The code runs, the chart appears, and the bars sit at the published counts with the band labels along the bottom. Nothing in it notices that one band is thirty minutes wide, because nothing asked it to.',
    p2: 'A learner who has done this project asks the next question before writing any code: are these groups the same size, and what goes on the vertical axis if they are not? They then instruct the tool properly, or fix what it returned. The machine is quick at the drawing; the judgement about what the drawing claims stays with the person.',
    closer: 'That is the part worth building in a learner in 2026: not typing the plot, but knowing which plot would be honest.',
    blogAnchor: 'why coding is still worth learning'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons work for a Malahide family',
    intro: 'The practical details, kept short.',
    cells: [
      { h3: 'A real teacher, live', p: 'Nothing is pre-recorded. The teacher sees the learner\'s work as it happens and responds to it.' },
      { h3: 'Placed by ability', p: 'Groups hold five to ten learners working at the same level, wherever in Ireland or beyond they log in from.' },
      { h3: 'The same hour each week', p: 'Two lessons in most weeks, around eight a month, at a slot fixed once and then protected.' },
      { h3: 'Around the school term', p: 'Mid-terms, holidays and exam weeks are agreed in advance rather than patched over later.' },
      { h3: 'What is needed at home', p: 'A laptop or desktop, sound that works and a connection that holds video, all tested in the free lesson.' },
      { h3: 'Private where it fits better', p: 'When no group at the right level meets at an hour that suits, the same course runs one to one.' }
    ],
    spec: { title: 'Nothing added to the day', p: 'Malahide households already spend real time travelling, on foot, by car and on the DART. A lesson taken at the kitchen table adds learning to the week without adding another journey to it.' }
  },

  fees: {
    h2: 'What lessons cost in Malahide',
    intro: 'Three lines, and that is the whole list.',
    first: 'A full first lesson, taught properly and charged for at nothing, ending with a level and a recommended course.',
    group: 'One month in an ability group of five to ten, about eight live lessons.',
    private: 'One month of one to one lessons on the same weekly rhythm.',
    closer: 'We bill monthly in US dollars, at the one rate that applies to every family outside India, so Malahide pays what Cork or Sligo pays and there is no second list in another currency. Nothing is charged before the free lesson has settled a course and a time, and the pricing page sets out pauses, missed lessons and moving between group and private.'
  },

  reviewsH2: 'What six families said on Google, printed as written',

  book: {
    h2: 'Book the free Malahide lesson',
    intro: 'Send the learner\'s age and what interests them. The first hour is planned around that, whether it ends up being a block-code project or a census chart that needs fixing before anyone believes it.',
    success: 'Thank you. We will be in touch shortly about the Malahide lesson.'
  },

  faq: {
    h2: 'Questions from Malahide families',
    intro: 'The ones that come up before booking.',
    items: [
      { q: 'How many people live in Malahide?', a: 'The Census 2022 small area tables count 18,305 usual residents in the built-up area, in 6,521 households. Our Fingal page uses the census town list, which counts the population of towns on a slightly different basis, so the two figures differ a little.' },
      { q: 'What is the Malahide data project?', a: 'Learners take the town\'s journey-time table, notice that the bars rise again after an hour, discover that the band is twice as wide as the ones before it, and rewrite the chart as a rate per quarter hour. They also handle the open-ended top band honestly instead of inventing a limit for it.' },
      { q: 'How long do journeys take in Malahide?', a: 'Of the 10,397 residents who stated a journey time to work, school or college, 23.6% were under fifteen minutes and 27.1% were a quarter to under half an hour, while 15.5% took an hour or more, all by our arithmetic from the published counts.' },
      { q: 'How many Malahide residents work in Dublin?', a: 'A census table that follows residents to the city where they work records 3,553 Malahide residents working in Dublin city and suburbs.' },
      { q: 'What times do lessons run?', a: 'Late afternoons, evenings and weekend mornings. The teaching team is in India, which runs four and a half hours ahead of Ireland in summer and five and a half in winter, and a workable weekly hour is fixed during the free lesson.' },
      { q: 'Can an adult in Malahide join?', a: 'Yes. Our learners run from six to sixty-seven, and the free lesson places an adult either in a group working at the same level or with a teacher one to one.' },
      { q: 'Is any experience needed before starting?', a: 'None. The free lesson establishes what a learner can already do, and the course starts from there rather than from a fixed week one.' },
      { q: 'Is there a Modern Age Coders classroom in Malahide?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Malahide cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Near Malahide',
    html: 'Along the same coast and county are <a class="cg-inline-link" href="/best-coding-class-in-swords">Swords</a> and the wider <a class="cg-inline-link" href="/coding-classes-in-fingal">Fingal</a> area, with <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a> to the south and the province of <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a> around them. To compare online schools, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">our comparison page</a>, and everything is indexed on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Malahide, Fingal and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-swords', label: 'Swords' },
    { href: '/coding-classes-in-fingal', label: 'Fingal' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-mlh .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.4vw, 2.75rem); }
.cg-root.cg-mlh .cg-hero h1 { font-weight: 700; letter-spacing: -0.0207em; line-height: 1.048; }
.cg-root.cg-mlh .cg-capsule { border-top: 5px solid var(--cg-accent); padding-top: 1.09rem; }
.cg-root.cg-mlh .cg-eyebrow { letter-spacing: 0.183em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mlh .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.0144em; }
.cg-root.cg-mlh .cg-grid-3 { gap: clamp(1.12rem, 2.74vw, 2.18rem); }
.cg-root.cg-mlh .cg-table caption { letter-spacing: 0.034em; font-weight: 700; }
.cg-root.cg-mlh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mlh .cg-table td:last-child { font-family: var(--cg-mono); font-size: 0.86em; }
.cg-root.cg-mlh .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 1.07rem; }
.cg-root.cg-mlh .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Malahide, the built-up area "Malahide, Co Dublin", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T11T3TOWN22 journey time to work, school or college, total 11,031: under 15 mins 2,455; quarter to under half an hour 2,819; half to under three quarters 2,307; three quarters to under an hour 1,208; hour to under an hour and a half 1,348; an hour and a half and over 260; not stated 634. All-towns row of the same table: 641,922; 636,280; 388,959; 132,200; 135,904; 52,040; not stated 267,359 of 2,254,664. SAP2022T11T2TOWN22 time leaving home, total 11,031: before 06:30 507; 06:30 to 07:00 1,026; 07:01 to 07:30 1,386; 07:31 to 08:00 2,523; 08:01 to 08:30 3,112; 08:31 to 09:00 1,093; 09:01 to 09:30 232; after 09:30 519; not stated 633. SAP2022T2T1TOWN22 usual residents 18,305, born Ireland 14,947, United Kingdom 1,328. SAP2022T15T2TOWN22 households 6,521, broadband 6,018, other 65, none 169, not stated 269. SAP2022T11T1TOWN22 to work total 8,236: car driver 3,943, mainly at or from home 1,609, train DART or Luas 1,070, bus 498, on foot 289, van 212, car passenger 158, bicycle 146, not stated 271; to school, college or childcare total 5,044: car passenger 1,869, on foot 1,571, train 572, bus 507, car driver 166, bicycle 164. SAP2022T11T4TOWN22: 8,236 working persons, 4,700 work from home at least some of the time, 3,057 never, 479 not stated. SAP2022T10T4TOWN22 total 12,443: honours bachelor or professional 2,612, postgraduate diploma or degree 2,540, doctorate 272. SAP2022T8T1TOWN22: at work 8,400, students 1,770, retired 2,932, total aged 15 and over 14,896. SAP2022T1T1TOWN22: aged 45 to 49, 1,472; aged 40 to 44, 1,421. F7070: Malahide residents working in Dublin city and suburbs 3,553. Irish Rail station page for Malahide: Eircode K36 HC92, routes "Dublin - Dundalk commuter" and "DART and Dublin Commuter", car park operated by APCOA with 77 spaces, 4 disabled spaces and 2 electric car charging points, sheltered bicycle parking and 7 lockers, level access to platform 1 for the city centre with lift and footbridge to platform 2. Malahide Community School: "Malahide Community School, Broomfield, Malahide, Co. Dublin. K36 PR28"; "A co-educational, inclusive school that welcomes pupils of all religious denominations."',
    localProject: 'Bands of different widths. In the Malahide journey-time table, the band labelled an hour to under an hour and a half holds 1,348 residents against 1,208 in the three-quarters-to-an-hour band, so a chart drawn from raw counts rises at the end. That band covers thirty minutes where every band before it covers fifteen, which is 674 per quarter hour by our arithmetic, so the count per unit of time falls throughout. The all-towns row shows the same pattern, 132,200 against 135,904, which is 67,952 per quarter hour, proving the shape belongs to the table design and not to the town. The top band has no upper limit, so it has no width, no rate and no midpoint, and any mean journey time drawn from these bands depends on a value somebody assumed for it. The learner writes a program that parses each label, computes the band width in minutes, divides, refuses a rate for the open band, and redraws the chart as a frequency density. The time-leaving-home table for the same 11,031 residents is used as the contrast: its interior bands are all thirty minutes, and it writes its boundaries as clock ranges where the journey table writes them as under. New to the cluster: bin width, density and open-ended bands.',
    requiredMentions: [
      '18,305',
      '6,521',
      '6,018',
      '3,553',
      '4,700',
      '1,609',
      '1,070',
      '1,348',
      '1,208',
      '2,455',
      'K36 HC92',
      'K36 PR28'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T11T3TOWN22, journey time to work, school or college, Malahide, Co Dublin: under 15 mins 2,455; 1/4 hour to under 1/2 hour 2,819; 1/2 to under 3/4 2,307; 3/4 to under 1 hour 1,208; 1 hour to under 1 1/2 hours 1,348; 1 1/2 hours and over 260; not stated 634; total 11,031. All-towns row: 641,922; 636,280; 388,959; 132,200; 135,904; 52,040; not stated 267,359; total 2,254,664.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T3TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T11T2TOWN22, time leaving home, Malahide, Co Dublin: before 06:30 507; 06:30 to 07:00 1,026; 07:01 to 07:30 1,386; 07:31 to 08:00 2,523; 08:01 to 08:30 3,112; 08:31 to 09:00 1,093; 09:01 to 09:30 232; after 09:30 519; not stated 633; total 11,031.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22 and SAP2022T11T1TOWN22, Malahide, Co Dublin: usual residents 18,305, born in Ireland 14,947, born in the United Kingdom 1,328; households 6,521, broadband 6,018, no internet 169; to work 8,236 with car driver 3,943, mainly at or from home 1,609, train DART or Luas 1,070, bus 498, on foot 289, bicycle 146; to school, college or childcare 5,044 with car passenger 1,869, on foot 1,571, train 572, bus 507.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T11T4TOWN22, SAP2022T10T4TOWN22, SAP2022T8T1TOWN22 and SAP2022T1T1TOWN22, Malahide, Co Dublin: 4,700 work from home at least some of the time, 3,057 never, 479 not stated; education table 12,443 with 2,612 honours bachelor or professional, 2,540 postgraduate and 272 doctorate; 1,770 students, 2,932 retired; 1,472 aged 45 to 49 and 1,421 aged 40 to 44.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T4TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table F7070, town of usual residence by city of place of work: Malahide, Co Dublin to Dublin city and suburbs 3,553.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F7070/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Malahide station, address given as Malahide, Co. Dublin: "Eircode K36 HC92", routes "Dublin - Dundalk commuter" and "DART and Dublin Commuter", car park "Spaces : 77", "Disabled Parking : 4", "Electric Car Charging : 2", "Sheltered bike parking is available in Malahide station", "7 spaces are available" for lockers, "Level to platform 1 (City Centre)", "Lift and footbridge to platform 2".', url: 'https://www.irishrail.ie/en-ie/station/malahide' },
      { claim: 'Malahide Community School: "Malahide Community School, Broomfield, Malahide, Co. Dublin. K36 PR28"; "A co-educational, inclusive school that welcomes pupils of all religious denominations."', url: 'https://www.malahidecs.ie/' }
    ],
    rejectedClaims: [
      'Any reason for the share of Malahide residents with long journeys or for the rail share: the census records travel, not motives, and nothing was investigated.',
      'Malahide Castle and its eircode: the Fingal page owns them.',
      'The census town-list population of Malahide as a mention: the Fingal page owns that figure.',
      'Residence against workplace as a project: the Leixlip page owns it, so the F7070 count appears here only as a fact.',
      'Any mean or median journey time for Malahide: the top band is open-ended and no midpoint was assumed.',
      'Fingal County Council\'s description of the town as half an hour from the city centre: it describes a route, not the census journeys, and is not used to explain any figure here.'
    ]
  }
};
