'use strict';
// Maynooth (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 Small Area Population town tables for "Maynooth, Co Kildare", read 17
// September 2026, plus Irish Rail's Maynooth station page and Maynooth
// University's own About page. Spine: who is missing from the table? The
// census table of highest level of education completed does not cover everyone
// aged fifteen and over. It covers only people whose education has ceased. In
// Maynooth, 13,839 residents are aged fifteen and over, and 3,771 of them, 2,622
// still at school or college plus 1,149 others whose education has not ceased,
// are absent, leaving the table's 10,068. Verified: 13,839 minus 3,771 is exactly
// 10,068, and the same identity holds for the all-towns row. So degree-level
// qualifications are 47.2% of the table but 34.4% of everyone aged fifteen and
// over, by our arithmetic. In a university town the excluded group is large, 27.2%.
// Distinct from Swords, where a total row's label misleads: here the table's
// population quietly excludes a group. Kildare owns Maynooth's total population
// 17,259 as a mention, so it is not used as one here. Every "all towns" figure is
// described as such, never as the State.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'MAYNOOTH', blurb: 'The university town in north Kildare, with a project on a census table that quietly leaves out everyone still studying.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-maynooth',
  code: 'myn',
  accent: '#265C4A',
  accentRationale: 'Maynooth: a college green from the solver, set apart from the Kildare county page and from the midland greens',
  pageType: 'city',
  place: {
    name: 'Maynooth',
    eyebrow: 'Maynooth, County Kildare',
    schemaType: 'Place',
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
  routeLabel: 'Maynooth, County Kildare, Ireland',
  title: 'Best Coding Class in Maynooth | Modern Age Coders',
  description: 'Live online coding, Python and AI classes for Maynooth, from school pupils to university students and working adults, ages 6 to 67. The first lesson is always free.',
  ogDescription: 'Coding and AI classes for Maynooth, with a project on the census education table that leaves out more than a quarter of the town\'s adults.',
  twitterDescription: 'Coding and AI classes for Maynooth, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '17 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Maynooth',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers, students and adults in Maynooth, County Kildare, taught live in English.'
  },

  h1: 'Coding classes in Maynooth',
  capsuleQ: 'What is the best coding class in Maynooth?',
  capsule: 'Maynooth is a university town with 16,981 usual residents in the census town tables, 5,721 households, and 2,622 residents aged fifteen and over whose main occupation is study. Among its residents, 428 hold a doctorate. Modern Age Coders works here the way it works everywhere: no campus and no drive, just a live teacher on video for two lessons in a typical week, alongside five to ten learners at the same level or one to one, from age six to sixty-seven. There is no charge for the first lesson; afterwards USD 100 a month buys a group place and USD 150 a private one.',
  lead: 'Here is a table that looks complete and is not. The census publishes, for every town, the highest level of education its residents have completed, and in Maynooth that table adds up to 10,068 people. But Maynooth has 13,839 residents aged fifteen and over. The missing 3,771 are the people whose education has not finished yet: 2,622 still at school or college, and 1,149 more. Across all towns combined the missing group is about 19.4% of adults. In this university town it is more than a quarter, and it changes the answer to the obvious question. Degree holders are 47.2% of the education table but 34.4% of everyone aged fifteen and over. Both are correct. Only one describes the town, and nothing in the table\'s title warns you which.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Maynooth.',

  picks: {
    eyebrow: 'Course picks for Maynooth',
    h2: 'From primary school to postgraduate',
    intro: 'Maynooth has every kind of learner, so choose by age and goal. Each course starts with a free lesson taught by its own teacher, with no card details needed.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects where some players are still mid-game, and the scoreboard has to decide whether to count them.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the start through to Leaving Certificate level, with real data along the way.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University students', note: 'Python for students on any degree who want programming that their course does not teach.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults and researchers', note: 'For adults whose reports depend on knowing exactly who a dataset leaves out.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Who is missing from the table?',
      intro: 'Maynooth\'s education figures, and the population the census table actually covers. Counts are published; percentages are our arithmetic.',
      body: [
        { kind: 'table', caption: 'Residents aged fifteen and over in Maynooth, Census 2022 town tables', head: ['Group', 'People', 'In the education table?'], rows: [
          ['All residents aged fifteen and over', '13,839', 'No, only some of them'],
          ['Still at school or college', '2,622', 'No'],
          ['Education not ceased, other', '1,149', 'No'],
          ['Education ceased, the table\'s population', '10,068', 'Yes'],
          ['Honours degree, postgraduate or doctorate', '4,756', '47.2% of the table, 34.4% of all aged fifteen and over']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'How we proved it', p: 'Subtract the 3,771 people whose education has not ceased from the 13,839 aged fifteen and over and you get exactly 10,068, the education table\'s total. The same subtraction works for the figures across all towns combined, so this is how the table is built, not a quirk of one town.' },
          { h3: 'Why Maynooth shows it so clearly', p: 'Students aged fifteen and over are 18.9% of Maynooth\'s adults against 11.2% across all towns combined, by our arithmetic, so the group left out of the table is unusually large here.' },
          { h3: 'What a learner writes', p: 'The subtraction that reveals the table\'s real population, both degree-level percentages, and a sentence saying which one answers the question being asked.' }
        ] },
        { kind: 'callout', h3: 'Every dataset has a population, and it is rarely in the title', p: 'A customer survey covers only people who stayed customers. A school\'s exam statistics cover only pupils who sat the exam. A table of highest qualification completed covers only people who have finished. None of those is dishonest, and all of them change the answer if you forget who is outside. The habit that protects against it is simple: before using any table, find its total and compare it with the population you think it describes. In Maynooth that comparison takes one subtraction and reveals 3,771 missing people.' },
        { kind: 'p', text: 'One more comparison worth keeping honest. Maynooth University says it has over 17,000 students from more than 100 countries, which is close to the town\'s whole census population. The census counts 2,622 residents aged fifteen and over whose principal status is student, a figure that includes secondary school pupils. A university\'s enrolment and a town\'s residents are different populations, and neither number can be read as the other.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Maynooth in the town tables',
      h2: 'A young, highly qualified town',
      intro: 'Published figures for the built-up area Maynooth, Co Kildare, from the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Maynooth at the 2022 census', head: ['Item', 'Maynooth'], rows: [
          ['Usual residents', '16,981'],
          ['Households, and those with broadband', '5,721 and 5,084'],
          ['Aged 20 to 24', '1,902'],
          ['Postgraduate diploma or degree holders', '2,244'],
          ['Honours bachelor degree holders', '2,084'],
          ['Doctorate holders', '428']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'More at home than not', p: 'Of 8,356 working residents, 3,836 work from home at least some of the time and 3,812 never do, with the rest not stating, so those who work from home at least sometimes slightly outnumber those who never do.' },
          { h3: 'Where people were born', p: 'Besides the 12,284 born in Ireland, 1,698 residents were born outside Europe and the United Kingdom, 1,161 elsewhere in the European Union, 964 in the United Kingdom, 445 in Poland and 429 in India.' },
          { h3: 'What people work in', p: 'Of 8,451 residents at work, 2,235 are in professional services and 2,213 in commerce and trade, the census\'s broad industry groups.' }
        ] },
        { kind: 'p', text: 'Doctorate holders are about 4.3% of the education table here, against about 1.3% across all towns combined, both by our arithmetic and both using the table\'s own population, which is the only fair way to compare two places on that table.' }
      ]
    },
    {
      id: 'travel', tint: 'tint', eyebrow: 'Getting about',
      h2: 'A walking town with a railway',
      intro: 'How Maynooth residents travel, from the census, and the station\'s own details from Irish Rail.',
      body: [
        { kind: 'table', caption: 'Travel to work and to school or college, Maynooth residents', head: ['Journey', 'Residents'], rows: [
          ['To work by car, as driver', '3,838'],
          ['Working mainly at or from home', '1,343'],
          ['To work by train, DART or Luas', '830'],
          ['To work on foot', '640'],
          ['To school, college or childcare on foot', '2,400'],
          ['To school, college or childcare as a car passenger', '1,465']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The station', p: 'Irish Rail lists Maynooth station at W23 N2F8, served by the Dublin Connolly to Sligo route and the Dublin to Maynooth, Longford and M3 Parkway services, with a 222-space car park open 24 hours.' },
          { h3: 'Walking to learn', p: 'About 44% of residents travelling to school, college or childcare go on foot, by our arithmetic, 2,400 of 5,415.' },
          { h3: 'The university', p: 'Maynooth University traces its origins to the Royal College of St Patrick in 1795 and was established as an autonomous university in 1997, according to its own site.' }
        ] },
        { kind: 'spec', title: 'Why online still fits a town with a campus', p: 'A university on the doorstep does not teach an eleven year old to program, and a degree timetable rarely leaves room for a subject a student wants to add. A live online class at a fixed weekly hour sits alongside both, without a trip anywhere.' }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'For students and families',
      h2: 'Learners at every stage',
      intro: 'Maynooth\'s mix of school pupils, undergraduates, researchers and commuters is unusually wide, and the teaching adapts to that.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'School pupils', p: 'Primary, Junior Cycle, Transition Year and the Leaving Certificate years, with lessons timed around the Irish school calendar.' },
          { h3: 'University students', p: 'Programming for students whose degree does not include it, from first principles, alongside their course rather than instead of it.' },
          { h3: 'Working adults', p: 'For the thousands of Maynooth residents who work from home at least some of the week, a lesson in the evening or at the weekend fits easily.' }
        ] },
        { kind: 'p', text: 'We have no connection with Maynooth University, Irish Rail or any school in the town. Census figures are quoted exactly as published in the town tables, every percentage is our own arithmetic, and all comparisons are with all towns combined, which is what the row labelled State in those tables actually covers, not with the State as a whole.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting everyone to checking who counts',
    intro: 'The ages are a rough guide; the first lesson decides the starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Who is still playing', p: 'Games that must decide whether unfinished players belong on the scoreboard yet.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Totals that do not match', p: 'Comparing two totals for the same place and finding the group that explains the gap.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'A dataset\'s population', p: 'Establishing exactly who a table covers before calculating anything from it.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Coverage at work', p: 'Reading surveys, registers and reports with the question of who is left out always in mind.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask what share of Maynooth adults have a degree',
    intro: 'The quick answer will divide by whatever total the table offers.',
    p1: 'Give a tool the census education table and ask the question, and the share of degree holders comes out at 47.2%. The arithmetic is right. The population is not what the question meant, because the table silently leaves out more than a quarter of the town\'s adults, and nothing in the question or the table title flags it.',
    p2: 'A learner who has done the subtraction asks what population a table covers before dividing by its total. That instinct takes seconds to apply and it is the difference between a number and an answer.',
    closer: 'Tools will always divide by the total they are handed. Knowing whether it is the right total is the part worth learning, and why coding and data skills matter more, not less, in 2026.',
    blogAnchor: 'why coding skills still pay off in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How a Maynooth learner joins',
    intro: 'The practical details, which are the same for a nine year old and a PhD student.',
    cells: [
      { h3: 'A real teacher, live', p: 'Lessons are taught as they happen, with questions and answers flowing both ways.' },
      { h3: 'Matched on level', p: 'Groups of five to ten are formed by ability, from Maynooth, the rest of Ireland and other countries.' },
      { h3: 'Two lessons a week', p: 'About eight a month, at a time agreed at the start around school, lectures or work.' },
      { h3: 'Terms and exams', p: 'Irish school stages and the university year are both planned around, including exam periods.' },
      { h3: 'At a desk at home', p: 'A laptop or desktop, working audio and a connection that carries video, which almost nine in ten Maynooth households have on broadband.' },
      { h3: 'Private if preferred', p: 'Where no group at the right level meets at a workable hour, the course is taught one to one.' }
    ],
    spec: { title: 'For researchers and postgraduates', p: 'With 2,244 residents holding a postgraduate qualification and 428 a doctorate, many Maynooth adults already know a subject deeply. For any of them who want programming for their own field, a private or small-group course can be pointed straight at that goal.' }
  },

  fees: {
    h2: 'Maynooth class fees',
    intro: 'Three figures, for every age.',
    first: 'The first lesson, in full, free, ending with a level and a suggested course.',
    group: 'A month in a group of five to ten at one level, around eight lessons.',
    private: 'A month of one to one teaching on the same weekly schedule.',
    closer: 'Fees are billed monthly in US dollars at the single rate we charge outside India, the same for a Maynooth student as for anyone else in Ireland, and no euro price list exists. No payment is taken until the free lesson has agreed a course and a time, and the pricing page covers pauses, missed lessons and switching between group and private.'
  },

  reviewsH2: 'In their own words: six Google reviews from families we teach',

  book: {
    h2: 'Ask for a free first lesson',
    intro: 'Let us know who is learning and what they want from it, whether that is a first Scratch game, Leaving Certificate preparation or programming for a thesis, and the first hour is planned around it.',
    success: 'Thank you. Somebody will be in touch about the Maynooth class shortly.'
  },

  faq: {
    h2: 'Maynooth coding class questions',
    intro: 'What people in Maynooth ask us first.',
    items: [
      { q: 'How many people live in Maynooth?', a: 'The census small area tables count 16,981 usual residents in the built-up area of Maynooth, in 5,721 households. The census town list gives a slightly higher total population, which our Kildare page quotes.' },
      { q: 'What is the Maynooth data project?', a: 'Learners discover that the census table of highest education completed covers only people whose education has finished, leaving out 3,771 of Maynooth\'s 13,839 residents aged fifteen and over, and see the share with a degree fall from 47.2% to 34.4% once they are counted.' },
      { q: 'Do you teach university students?', a: 'Yes. Learners range from six to sixty-seven, and university students often take Python or data courses alongside a degree that does not include programming.' },
      { q: 'Is Maynooth well connected for online lessons?', a: 'The census records 5,084 of Maynooth\'s 5,721 households with broadband. The free lesson tests your own connection directly.' },
      { q: 'When are lessons held?', a: 'Evenings, after school and weekend mornings. The teaching team is based in India, four and a half hours ahead of Ireland in summer and five and a half in winter, so Irish evening hours fall within its working day. The slot is chosen in the free lesson.' },
      { q: 'Can a lesson fit around lectures?', a: 'Yes. The weekly time is agreed with the learner at the start, and exam periods can be planned for in advance.' },
      { q: 'Is there a train from Maynooth?', a: 'Yes. Irish Rail lists Maynooth station on the Dublin to Sligo route and the Dublin to Maynooth, Longford and M3 Parkway services, and 830 residents travel to work by train, DART or Luas.' },
      { q: 'Is there a Modern Age Coders classroom in Maynooth?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Maynooth cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'North Kildare and beyond',
    html: 'Maynooth is covered within <a class="cg-inline-link" href="/coding-classes-in-county-kildare">County Kildare</a>, part of the province of <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>, and on the railway line to <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a>. Students weighing up options can read <a class="cg-inline-link" href="/coding-for-college-students-ireland">coding for college students in Ireland</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Maynooth, Kildare and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-kildare', label: 'County Kildare' },
    { href: '/coding-for-college-students-ireland', label: 'College students' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-myn .cg-hero-grid { align-items: start; gap: clamp(1.12rem, 3.18vw, 2.65rem); }
.cg-root.cg-myn .cg-hero h1 { font-weight: 700; letter-spacing: -0.0183em; line-height: 1.068; }
.cg-root.cg-myn .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.13rem; }
.cg-root.cg-myn .cg-eyebrow { letter-spacing: 0.167em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-myn .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0131em; }
.cg-root.cg-myn .cg-grid-3 { gap: clamp(1.05rem, 2.6vw, 2.06rem); }
.cg-root.cg-myn .cg-table caption { letter-spacing: 0.032em; font-weight: 700; }
.cg-root.cg-myn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-myn .cg-table tr:nth-child(4) td { font-weight: 600; }
.cg-root.cg-myn .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.06rem; }
.cg-root.cg-myn .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Maynooth, the built-up area "Maynooth, Co Kildare", from the CSO Census 2022 Small Area Population town tables, read 17 September 2026. SAP2022T2T1TOWN22: usual residents 16,981; born Ireland 12,284, United Kingdom 964, Poland 445, India 429, other EU 1,161, rest of world 1,698. SAP2022T15T2TOWN22: households 5,721, broadband 5,084, no internet 138, not stated 443. SAP2022T8T1TOWN22 principal economic status, aged 15 and over, total 13,839: at work 8,451, student 2,622, retired 1,271. SAP2022T10T2TOWN22 education not ceased: still at school or college 2,622, other 1,149. SAP2022T10T4TOWN22 highest level of education completed, total 10,068: honours bachelor degree 2,084, postgraduate diploma or degree 2,244, doctorate 428, upper secondary 1,307, not stated 695. Identity verified: 13,839 less 3,771 equals 10,068, and for the all-towns row 2,921,013 less 567,559 equals 2,353,454, the education table total. SAP2022T1T1TOWN22: aged 20 to 24, 1,902; total population 17,259. SAP2022T11T4TOWN22: 8,356 working persons, 3,836 work from home, 3,812 never, 708 not stated. SAP2022T11T1TOWN22: to work, car driver 3,838, work mainly at or from home 1,343, train DART or Luas 830, on foot 640, total 8,356; to school, college or childcare, on foot 2,400, car passenger 1,465, total 5,415. SAP2022T14T1TOWN22 at work 8,451: professional services 2,235, commerce and trade 2,213. In TOWN22 tables the row labelled State is all 867 towns combined and is described as such. Irish Rail: "Iarnrod Eireann, Maynooth, Co. Kildare, Eircode W23 N2F8", routes "Dublin Connolly - Sligo" and "Dublin - Maynooth, Longford and M3 Parkway", car park operated by APCOA with 222 spaces, open 24 hours. Maynooth University About page: "formally established as an autonomous university in 1997", tracing "its origins to the foundation of the Royal College of St. Patrick in 1795", "With over 17,000 students from more than 100 countries".',
    localProject: 'Who is missing from the table? The CSO Census 2022 table of highest level of education completed, SAP2022T10T4TOWN22, covers only residents aged 15 and over whose education has ceased. In Maynooth that is 10,068 people, while SAP2022T8T1TOWN22 counts 13,839 residents aged 15 and over; the difference of 3,771 equals exactly the 2,622 still at school or college plus 1,149 others whose education has not ceased, from SAP2022T10T2TOWN22. The same identity holds for the all-towns row (2,921,013 less 326,901 and 240,658 equals 2,353,454). By our arithmetic, degree-level qualifications, honours bachelor 2,084, postgraduate 2,244 and doctorate 428, together 4,756, are 47.2 percent of the education table but 34.4 percent of all residents aged 15 and over, and the excluded group is 27.2 percent of Maynooth\'s adults. Students aged 15 and over are 18.9 percent of adults in Maynooth against 11.2 percent across all towns combined, which is why the effect is large here. Output: the subtraction that reveals the table\'s population, both percentages, and a sentence choosing the one that answers the question. Distinct from Swords, where a total row\'s label misleads; here the table\'s universe quietly excludes a group. The university\'s own figure of over 17,000 students is not compared with census residents as if they were the same population.',
    requiredMentions: [
      '16,981',
      '13,839',
      '10,068',
      '3,771',
      '2,622',
      '4,756',
      '2,244',
      '3,836',
      '3,812',
      'W23 N2F8',
      '5,721',
      '5,084'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T10T4TOWN22, highest level of education completed, Maynooth, Co Kildare, both sexes: total 10,068, honours bachelor degree 2,084, postgraduate diploma or degree 2,244, doctorate 428; all-towns row total 2,353,454, doctorate 30,117.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T10T4TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T10T2TOWN22, population aged 15 and over whose education has not ceased, Maynooth, Co Kildare: still at school or college 2,622, other 1,149; all-towns row 326,901 and 240,658.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T10T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T8T1TOWN22, principal economic status aged 15 and over, Maynooth, Co Kildare: total 13,839, at work 8,451, student 2,622; all-towns row total 2,921,013, student 326,901.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T8T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22 and SAP2022T15T2TOWN22, Maynooth, Co Kildare: usual residents 16,981, born Ireland 12,284, United Kingdom 964, Poland 445, India 429, other EU 1,161, rest of world 1,698; households 5,721, broadband 5,084.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T11T1TOWN22, SAP2022T11T4TOWN22, SAP2022T14T1TOWN22 and SAP2022T1T1TOWN22, Maynooth, Co Kildare: travel to work car driver 3,838, from home 1,343, train DART or Luas 830, on foot 640; to school, college or childcare on foot 2,400, car passenger 1,465, total 5,415; 8,356 working persons, 3,836 work from home, 3,812 never; at work 8,451, professional services 2,235, commerce and trade 2,213; aged 20 to 24, 1,902.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T4TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Maynooth station: "Iarnrod Eireann, Maynooth, Co. Kildare, Eircode W23 N2F8"; routes serviced "Dublin Connolly - Sligo" and "Dublin - Maynooth, Longford and M3 Parkway"; car park operated by APCOA, "Spaces : 222", "Operating Hours : 24hrs".', url: 'https://www.irishrail.ie/en-ie/station/maynooth' },
      { claim: 'Maynooth University About page: "formally established as an autonomous university in 1997. Yet, it traces its origins to the foundation of the Royal College of St. Patrick in 1795"; "With over 17,000 students from more than 100 countries".', url: 'https://www.maynoothuniversity.ie/about-us' }
    ],
    rejectedClaims: [
      'Treating the education table total of 10,068 as all Maynooth adults: it covers only people whose education has ceased.',
      'Comparing the university\'s over 17,000 students with census residents as if they were the same population.',
      'Using Maynooth\'s total population 17,259 as a mention: the County Kildare page owns it.',
      'Calling the TOWN22 row labelled State the national figure: it is all 867 towns combined.',
      'Any claim about how many Maynooth University students live in the town: the census does not say.',
      'Any ranking of Maynooth against every Irish town on qualifications: only comparisons with all towns combined are made.'
    ]
  }
};
