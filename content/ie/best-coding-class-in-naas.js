'use strict';
// Naas (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census 2022
// town tables for "Naas, Co Kildare", read 18 September 2026, the Irish Rail
// station page for Sallins and Naas and the HSE page for Naas General Hospital.
// Spine: the leftover column. Of the 25,991 usual residents, 19,599 were born in
// Ireland and the largest of the remaining groups is the residual "Rest of
// World" at 2,674, which is 41.8% of everyone born outside Ireland by our
// arithmetic, so the table cannot name the second most common birthplace. In the
// industry table "Other" holds 1,356 people, exactly level with transport and
// communications, so a ranking of sectors puts a leftover beside a real
// category. New to the cluster: residual categories, and how they differ from
// non-response. F7070 carries no Naas row, so no commuting flow is quoted.
// Kildare owns the town-list population 26,180 and the council eircode
// W91 X77F, so neither appears here.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'NAAS', blurb: 'Kildare\'s county town, where the second most common birthplace cannot be named because the table calls it Rest of World.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-naas',
  code: 'nas',
  accent: '#5C3F52',
  accentRationale: 'Naas: a dyed-wool plum from the solver, unlike the Kildare county page and the three Kildare town pages already built',
  pageType: 'city',
  place: {
    name: 'Naas',
    eyebrow: 'Naas, County Kildare',
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
  routeLabel: 'Naas, County Kildare, Ireland',
  title: 'Best Coding Class in Naas | Modern Age Coders',
  description: 'Live online coding, Python and AI classes for learners in Naas aged 6 to 67, taught in real time by a teacher, in ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Naas, with a project on the census column marked Other and what a table can never tell you.',
  twitterDescription: 'Coding and AI classes for Naas, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Naas',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Naas, County Kildare, taught live in English.'
  },

  h1: 'Coding classes in Naas',
  capsuleQ: 'What is the best coding class in Naas?',
  capsule: 'Naas holds 25,991 usual residents in the census town tables, in 8,817 households, and 2,034 of its children under fifteen are in some form of childcare. Our teaching reaches all of them without anyone leaving the house: live video lessons twice in most weeks, in a group of five to ten placed at the same level or one to one, for learners aged six to sixty-seven. We charge nothing for the first lesson, then USD 100 a month for a group place or USD 150 for one to one.',
  lead: 'Ask the census where people in Naas were born and it answers most of the question. Of 25,991 usual residents, 19,599 were born in Ireland, 1,131 in the United Kingdom, 1,008 in Poland and 368 in India. Then it stops answering: the next largest group, 2,674 people, sits under the heading Rest of World, and one more, 1,211 people, under a heading for the other EU countries. Rest of World on its own is 41.8% of everyone in the town born outside Ireland, and with the regional heading added the two cover 3,885 people, or 60.8%, by our arithmetic. So the town learns its second most common birthplace only by asking something other than the census. That is not an error in the table. It is the shape every classification ends up with, and learning to spot it is worth more than any single figure in the row.',
  wa: 'Hello Modern Age Coders, I am looking for a free coding lesson for a learner in Naas.',

  picks: {
    eyebrow: 'Course picks for Naas',
    h2: 'Good first courses for Naas learners',
    intro: 'Choose on age and interest. The free lesson is taught by the teacher who runs that course, and it is the lesson, not a sales call.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Sorting and grouping in Scratch, where a bucket called everything else quickly becomes a nuisance.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python lists and counting, with early practice at naming categories honestly.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Grouping real census data, and deciding what belongs in a category and what does not.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults whose reports have an Other row nobody has ever opened.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The leftover column',
      intro: 'Birthplace of the 25,991 usual residents of Naas, Census 2022, with the headings exactly as the table publishes them. Shares are ours.',
      body: [
        { kind: 'table', caption: 'Where Naas residents were born, April 2022', head: ['Heading as published', 'Kind of heading', 'Residents', 'Share of town'], rows: [
          ['Ireland', 'A named place', '19,599', '75.4%'],
          ['Rest of World', 'Everything left over', '2,674', '10.3%'],
          ['Other EU272020 (Exec Ireland & Poland)', 'Everything left over inside a region', '1,211', '4.7%'],
          ['United Kingdom', 'A named place', '1,131', '4.4%'],
          ['Poland', 'A named place', '1,008', '3.9%'],
          ['India', 'A named place', '368', '1.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Three different kinds of column', p: 'A named column counts a place somebody chose to publish. A residual column counts whoever is left once the named ones are done. A not stated column counts people who did not answer at all. Adding the three together is fine; treating them as the same kind of thing is not.' },
          { h3: 'What the table can and cannot say', p: 'It can say 1,131 Naas residents were born in the United Kingdom. It cannot say which country is second most common overall, because 2,674 residents are recorded only as being from somewhere the table does not name.' },
          { h3: 'The heading has to be read too', p: 'The third row above is printed as Other EU272020 (Exec Ireland & Poland). Before any figure from it is used, a reader has to establish which countries that covers and on what date, and say so when quoting it.' }
        ] },
        { kind: 'callout', h3: 'Every real dataset has a column like this', p: 'Other in a dropdown. Miscellaneous in a ledger. Unknown in a web analytics report. Uncategorised in a support queue. The leftover grows quietly, because everything that does not fit anywhere is fitted there, and a dashboard will happily rank it against real categories and hand somebody a decision. The discipline is small and it is teachable in an afternoon: find the residual columns, work out what share of the data sits in them, refuse to rank them, and say plainly which questions the dataset therefore cannot answer.',
        },
        { kind: 'p', text: 'The project is a short program over this table. It marks each heading as named, residual or not stated, adds up the residual share, prints the ranking of named groups only, and then prints the one sentence that matters: with 2,674 of the 6,392 residents born outside Ireland in a single heading that names nowhere, no second place can be awarded. The learner then goes looking for the same shape in the other Naas tables, and finds it quickly.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Naas in the town tables',
      h2: 'The county town, counted',
      intro: 'Published for the built-up area called Naas, Co Kildare, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Naas, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '25,991'],
          ['Households', '8,817'],
          ['Households with a broadband connection', '8,019'],
          ['Working residents in the travel table', '12,713'],
          ['Residents travelling to school, college or childcare', '6,924'],
          ['Children under fifteen in childcare', '2,034']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The drive to work', p: 'Of 12,713 working residents, 7,408 drive, 1,588 give home as their main answer, 947 walk, 536 take a train, 519 travel by van, 468 take a bus and 269 cycle.' },
          { h3: 'The school run', p: 'Of the 6,924 travelling to school, college or childcare, 3,088 go as a car passenger, 1,805 walk, 842 take a bus, 348 cycle and 214 take a train.' },
          { h3: 'Working from home', p: 'A separate table asks about home working directly: 4,895 working residents do some of their work at home, 7,008 never do and 810 did not state.' }
        ] },
        { kind: 'spec', title: 'The hospital in the town', p: 'The HSE lists Naas General Hospital at Craddockstown Road, Naas East, Naas, Kildare, W91 AE76. We have no connection with it, and it appears here only as a named institution with a published address.' },
        { kind: 'p', text: 'Broadband reaches about 90.9% of Naas households by our arithmetic, with 332 households recording no internet access and 364 not stating. In the town education table of 16,505 people, 3,124 hold an honours bachelor degree or professional qualification and 2,731 a postgraduate diploma or degree, while 787 did not state, which is the non-response column rather than a residual.' }
      ]
    },
    {
      id: 'sectors', tint: 'tint', eyebrow: 'The same trap, a second table',
      h2: 'Where Other ties with a real category',
      intro: 'The eight industry groups published for the 12,802 Naas residents at work. Shares are our arithmetic and the groups are the table\'s own.',
      body: [
        { kind: 'table', caption: 'Industry groups, Naas residents at work', head: ['Group as published', 'Residents', 'Share'], rows: [
          ['Commerce and trade', '3,654', '28.5%'],
          ['Professional services', '3,300', '25.8%'],
          ['Manufacturing industries', '1,638', '12.8%'],
          ['Transport and communications', '1,356', '10.6%'],
          ['Other', '1,356', '10.6%'],
          ['Public administration', '791', '6.2%'],
          ['Building and construction', '614', '4.8%'],
          ['Agriculture, forestry and fishing', '93', '0.7%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A tie nobody should report', p: 'Other and transport and communications both hold 1,356 residents. One of those is a description of work; the other is a statement that 1,356 people do work the eight groups do not name. Ranking them against each other produces a sentence that cannot be defended.' },
          { h3: 'Residuals that tell you one thing', p: 'The travel table is more generous: its leftover is labelled Other (incl. lorry), and 32 working residents plus 6 school or college travellers sit in it. That is still a residual, but at least one thing inside it is named.' },
          { h3: 'Coarse groups hide detail', p: 'Eight groups for every job in a town of this size means each one covers a great deal. The published figure is right; a sentence built on it has to stay inside what a group of that width can support.' }
        ] },
        { kind: 'spec', title: 'The station is not in the town', p: 'Irish Rail names the station serving the area Sallins and Naas, and gives its address as Sallins, Co. Kildare, Eircode W91 XY28. It lists the station as unstaffed with no booking office and a ticket vending machine, access to both platforms by ramps from the car parks, sheltered bicycle parking with 20 lockers, and an additional 200 commuter parking spaces beside it in the Waterways development. A name that carries two places is worth noticing before any figure is attached to either.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Naas',
      h2: 'Lessons at the kitchen table',
      intro: 'The town travels a lot for work and school. This is one thing it does not have to travel for.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children and teenagers', p: 'From first block-code projects through Junior Cycle and Transition Year to the Leaving Certificate years, planned around the school calendar.' },
          { h3: 'Students', p: 'The town records 2,166 residents aged fifteen and over whose main status is student, so lessons here run alongside college as often as school.' },
          { h3: 'Adults at work', p: 'Python, data and AI for adults, including the 4,895 residents who already do part of their work at home.' }
        ] },
        { kind: 'p', text: 'Nothing on this page implies a connection with the Health Service Executive, Irish Rail, Kildare County Council or any employer in Naas; each is quoted from its own published page and named for that reason alone. The counts are Central Statistics Office Census 2022 figures reproduced as published, the shares are our own division, and where a heading is a leftover or a non-response column this page says which it is rather than quietly treating it as a place or a trade.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting things to defining categories',
    intro: 'The age bands are indicative; the free lesson sets the real starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'What goes where', p: 'Sorting and grouping in block code, and noticing when the leftover pile grows bigger than the piles you named.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Counting by group', p: 'Loops, dictionaries and tallies in Python, with categories the learner has to define before counting.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Honest grouping', p: 'Working with published classifications, residual groups and missing answers, and reporting each correctly.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Reports that hold up', p: 'Building analysis for other people to act on, including the part that says what the data cannot show.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant to rank these groups',
    intro: 'It will, and the ranking will be wrong in a way that is hard to see.',
    p1: 'Hand a model the Naas industry table and ask for the top sectors, and back comes a tidy list with Other sitting in it as though it meant something, or quietly dropped without a word about the 1,356 people in it. Ask for the second most common birthplace and it will pick a named country, because the named countries are the only things in the table that look like an answer.',
    p2: 'A learner who has done this project asks a different question of the tool, and checks the answer against the headings. They know a residual cannot be ranked, that a not stated column is a separate problem, and that the correct reply to some questions is that this table cannot tell you.',
    closer: 'Tools will keep getting better at producing answers. The value of knowing which questions have no answer in the data keeps going up with them.',
    blogAnchor: 'the case for learning to code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How a Naas family uses the classes',
    intro: 'The logistics in six lines.',
    cells: [
      { h3: 'Taught live', p: 'A teacher on video, watching the work happen and correcting it in the moment. No recordings standing in for teaching.' },
      { h3: 'Grouped by level', p: 'Five to ten learners of the same ability, joining from Naas, elsewhere in Ireland and other countries.' },
      { h3: 'A fixed weekly hour', p: 'Two lessons most weeks, about eight in a month, in a slot chosen once and then left alone.' },
      { h3: 'Term dates respected', p: 'Mid-terms, holidays and exam periods are worked into the plan when the schedule is set.' },
      { h3: 'Equipment', p: 'A laptop or desktop, sound that works and a connection steady enough for video, all checked during the free lesson.' },
      { h3: 'One to one when it suits better', p: 'Where no group at the right level meets at a workable time, the same course is taught privately.' }
    ],
    spec: { title: 'No journey attached', p: 'A town where 7,408 residents drive to work does not need another trip in the diary. The lesson happens where the learner already is, at an hour the household picked.' }
  },

  fees: {
    h2: 'Naas class fees',
    intro: 'Everything we charge, in three lines.',
    first: 'A complete first lesson at no charge, ending with an assessed level and a course recommendation.',
    group: 'A month in an ability group of five to ten learners, roughly eight live lessons.',
    private: 'A month of private lessons, same frequency, one learner and one teacher.',
    closer: 'Fees are monthly, in US dollars, at the single rate for families outside India, which means Naas sees the same figure as every other Irish town and no second price list in another currency. Payment starts only once the free lesson has fixed a course and an hour, and pauses, missed lessons and moves between group and private are set out on the pricing page.'
  },

  reviewsH2: 'Six of our families, quoted from Google without edits',

  book: {
    h2: 'Book a free lesson in Naas',
    intro: 'Give us an age and an interest and we will plan the first hour around it, whether that turns out to be a game to build or a census table to take apart.',
    success: 'Thank you. We will contact you shortly about the Naas lesson.'
  },

  faq: {
    h2: 'Naas coding class questions',
    intro: 'What parents and adult learners in Naas ask us first.',
    items: [
      { q: 'How many people live in Naas?', a: 'The Census 2022 small area tables record 25,991 usual residents in the built-up area of Naas, living in 8,817 households. The figure on our Kildare page comes from the census town list, which measures town populations on a slightly different basis.' },
      { q: 'What is the Naas data project?', a: 'Learners take the town birthplace table, separate the named headings from the leftover ones, work out that 41.8% of residents born outside Ireland sit in the Rest of World heading alone, and write the sentence that follows: this table cannot give a second most common birthplace. They then find the same pattern in the industry table.' },
      { q: 'Why does a column called Other matter?', a: 'Because it is not a category. It holds whatever the named categories did not cover, so it cannot be described, compared or ranked, and in the Naas industry table it is level with transport and communications at 1,356 people.' },
      { q: 'How do people in Naas get to work?', a: 'Of the 12,713 working residents in the travel table, 7,408 drive, 1,588 give working at or from home as their main answer, 947 walk, 536 take a train and 269 cycle.' },
      { q: 'What hours do lessons run?', a: 'Afternoons after school, evenings and weekend mornings. Our teachers work from India, four and a half hours ahead of Irish time in summer and five and a half in winter, and the weekly hour is agreed in the free lesson.' },
      { q: 'Do you take adult beginners in Naas?', a: 'Yes. The range runs from six to sixty-seven, and an adult who has never programmed is placed after the free lesson, either in a group at the same level or with a teacher privately.' },
      { q: 'What does a learner need to start?', a: 'A laptop or desktop rather than a phone, working sound and a connection that carries video. No prior coding and no software purchase.' },
      { q: 'Is there a Modern Age Coders classroom in Naas?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Naas cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Naas',
    html: 'Other Kildare pages cover <a class="cg-inline-link" href="/best-coding-class-in-celbridge">Celbridge</a>, <a class="cg-inline-link" href="/best-coding-class-in-maynooth">Maynooth</a> and <a class="cg-inline-link" href="/best-coding-class-in-leixlip">Leixlip</a>, inside <a class="cg-inline-link" href="/coding-classes-in-county-kildare">County Kildare</a> and the province of <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. Our <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a> sets us beside other online schools, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Naas, Kildare and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-celbridge', label: 'Celbridge' },
    { href: '/coding-classes-in-county-kildare', label: 'County Kildare' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-nas .cg-hero-grid { align-items: start; gap: clamp(1.08rem, 3.28vw, 2.42rem); }
.cg-root.cg-nas .cg-hero h1 { font-weight: 700; letter-spacing: -0.0173em; line-height: 1.071; }
.cg-root.cg-nas .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.22rem; }
.cg-root.cg-nas .cg-eyebrow { letter-spacing: 0.158em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-nas .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.0118em; }
.cg-root.cg-nas .cg-grid-3 { gap: clamp(1.02rem, 2.46vw, 1.94rem); }
.cg-root.cg-nas .cg-table caption { letter-spacing: 0.041em; font-weight: 700; }
.cg-root.cg-nas .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nas .cg-table td:nth-child(2) { color: var(--cg-muted); }
.cg-root.cg-nas .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.96rem; }
.cg-root.cg-nas .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Naas, the built-up area "Naas, Co Kildare", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T2T1TOWN22 usual residents by birthplace, total 25,991: Ireland 19,599, Rest of World 2,674, "Other EU272020 (Exec Ireland & Poland)" 1,211, United Kingdom 1,131, Poland 1,008, India 368. SAP2022T15T2TOWN22: households 8,817, broadband 8,019, other 102, none 332, not stated 364. SAP2022T11T1TOWN22 to work total 12,713: car driver 7,408, mainly at or from home 1,588, on foot 947, train DART or Luas 536, van 519, bus 468, car passenger 487, bicycle 269, motorcycle 63, other including lorry 32, not stated 396; to school, college or childcare total 6,924: car passenger 3,088, on foot 1,805, bus 842, bicycle 348, car driver 235, train 214, other including lorry 6, not stated 340. SAP2022T11T4TOWN22: 12,713 working persons, 4,895 work from home at least some of the time, 7,008 never, 810 not stated. SAP2022T14T1TOWN22 at work 12,802: commerce and trade 3,654, professional services 3,300, manufacturing industries 1,638, transport and communications 1,356, Other 1,356, public administration 791, building and construction 614, agriculture forestry and fishing 93, summing exactly to 12,802. SAP2022T8T1TOWN22: at work 12,802, students 2,166, retired 2,559, looking after home or family 1,324, total aged 15 and over 20,545. SAP2022T10T4TOWN22 total 16,505: honours bachelor or professional 3,124, postgraduate diploma or degree 2,731, doctorate 201, not stated 787. SAP2022T11T5TOWN22: 2,034 children under 15 in childcare, 1,044 aged 0 to 4 and 990 aged 5 to 14. SAP2022T1T1TOWN22: aged 35 to 39, 2,353; aged 40 to 44, 2,275. CSO table F7070 has no row for Naas, so no city-of-work flow is quoted. Health Service Executive: "Naas General Hospital", "Craddockstown Road, Naas East, Naas, Kildare, W91 AE76". Irish Rail, Sallins and Naas station: address "Sallins, Co. Kildare", "Eircode W91 XY28", "This station is not staffed", "This station does not have a booking office", "Access to both platforms via ramps from car parks", "We have 20 lockers at the moment", "There are an additional 200 spaces for commuters" in "the Waterways Development".',
    localProject: 'The leftover column. In the Naas birthplace table, 19,599 of 25,991 usual residents were born in Ireland, and the largest remaining heading is the residual Rest of World at 2,674, ahead of the United Kingdom at 1,131, Poland at 1,008 and India at 368. With the regional residual of 1,211 added, 3,885 of the 6,392 residents born outside Ireland are in headings that name no country, and the residual alone is 41.8 percent of them by our arithmetic, so the table cannot supply a second most common birthplace. The page separates three kinds of heading, a named place, a residual and a non-response column, and shows the same pattern in the industry table, where Other holds 1,356 residents, exactly level with transport and communications, so any ranking of sectors places a leftover beside a real category. The travel table\'s leftover is labelled Other (incl. lorry) and holds 32 working residents and 6 school or college travellers, which names one thing inside it. The learner writes a program that tags each heading, totals the residual share, ranks only the named groups and states which questions the table cannot answer. New to the cluster: residual categories and their difference from non-response.',
    requiredMentions: [
      '25,991',
      '19,599',
      '2,674',
      '1,131',
      '8,817',
      '8,019',
      '12,713',
      '7,408',
      '3,088',
      '1,356',
      'W91 XY28',
      'W91 AE76'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T2T1TOWN22, usually resident population by birthplace, Naas, Co Kildare: total 25,991; Ireland 19,599; Rest of World 2,674; "Other EU272020 (Exec Ireland & Poland)" 1,211; United Kingdom 1,131; Poland 1,008; India 368.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T14T1TOWN22, persons at work, Naas, Co Kildare: commerce and trade 3,654; professional services 3,300; manufacturing industries 1,638; transport and communications 1,356; Other 1,356; public administration 791; building and construction 614; agriculture, forestry and fishing 93; total 12,802.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T14T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T11T1TOWN22 and SAP2022T11T4TOWN22, Naas, Co Kildare: to work 12,713 with car driver 7,408, mainly at or from home 1,588, on foot 947, train 536, van 519, bus 468, bicycle 269, other including lorry 32; to school, college or childcare 6,924 with car passenger 3,088, on foot 1,805, bus 842, bicycle 348, train 214; 4,895 work from home at least some of the time, 7,008 never, 810 not stated.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T15T2TOWN22, SAP2022T8T1TOWN22, SAP2022T10T4TOWN22 and SAP2022T11T5TOWN22, Naas, Co Kildare: households 8,817, broadband 8,019, no internet 332, not stated 364; students 2,166, retired 2,559, total aged 15 and over 20,545; education table 16,505 with 3,124 honours bachelor or professional, 2,731 postgraduate, 201 doctorate and 787 not stated; 2,034 children under 15 in childcare.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'Health Service Executive: "Naas General Hospital", address "Craddockstown Road, Naas East, Naas, Kildare, W91 AE76".', url: 'https://www2.hse.ie/services/hospitals/naas-general-hospital/' },
      { claim: 'Irish Rail, Sallins and Naas station: address "Sallins, Co. Kildare", "Eircode W91 XY28"; "This station is not staffed"; "This station does not have a booking office"; "Access to both platforms via ramps from car parks"; "We have 20 lockers at the moment"; "There are an additional 200 spaces for commuters" in "the Waterways Development".', url: 'https://www.irishrail.ie/en-ie/station/sallins-and-naas' }
    ],
    rejectedClaims: [
      'Any statement about what the Rest of World or Other headings contain beyond what the table names: that is exactly what a residual withholds.',
      'A reading of the abbreviated heading Other EU272020 (Exec Ireland & Poland) as a typing error: it is quoted as published and its scope is left to be checked.',
      'The census town-list population of Naas and the Kildare County Council eircode: the County Kildare page owns both.',
      'Any commuting flow for Naas: CSO table F7070 carries no Naas row.',
      'Any reason for the share of Naas residents who drive to work, or for the size of any group in these tables.',
      'Naas Racecourse: its site returned a rate-limit response rather than content, so nothing is quoted from it.'
    ]
  }
};
