'use strict';
// Carrigaline (cg- town page, Ireland cluster, Phase 7). Facts from the CSO
// Census 2022 town tables for "Carrigaline, Co Cork", read 18 September 2026,
// Cork County Council's own Carrigaline Municipal District page and the saved
// Department of Education first-phase Leaving Certificate Computer Science list
// of 4 January 2018. Spine: a percentage down a column is not the percentage
// across the row. Of the town's 3,555 car passengers, 3,232 are on education or
// childcare journeys, 90.9%; of the 5,583 education and childcare journeys,
// 3,232 are as a car passenger, 57.9%. Same cell, two denominators, two
// different sentences. New to the cluster: the converse error, conditional
// direction. Cork city owns the 2018 list as a set of schools, so here it is
// cited for the one school in this town.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'CARRIGALINE', blurb: 'A harbour-side town south of Cork city, with a project on two percentages from one number that mean opposite things.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-carrigaline',
  code: 'crg',
  accent: '#7A4A4A',
  accentRationale: 'Carrigaline: a brick red from the solver, unlike the Cork city and County Cork accents it sits between',
  pageType: 'city',
  place: {
    name: 'Carrigaline',
    eyebrow: 'Carrigaline, County Cork',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Cork' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-cork', name: 'County Cork' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Cork', href: '/coding-classes-in-county-cork' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Carrigaline, County Cork, Ireland',
  title: 'Best Coding Class in Carrigaline | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Carrigaline learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Carrigaline, with a project on why two percentages from the same census figure say opposite things.',
  twitterDescription: 'Coding and AI classes for Carrigaline, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Carrigaline',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Carrigaline, County Cork, taught live in English.'
  },

  h1: 'Coding classes in Carrigaline',
  capsuleQ: 'What is the best coding class in Carrigaline?',
  capsule: 'The census records 18,101 usual residents in Carrigaline and 6,047 households, 5,497 of them with broadband. Teaching happens in the house: a teacher live on video, twice in most weeks, with either five to ten learners at a single level or one learner on their own, across an age range from six to sixty-seven. No charge is made for the opening lesson. A group place is then USD 100 for the month, and private teaching USD 150.',
  lead: 'Here are two sentences about Carrigaline, built from one census figure. Nine in ten of the town\'s car passengers are travelling to school, college or childcare. Six in ten of its school, college and childcare journeys are made as a car passenger. Both come from the same 3,232, and they say different things: the first divides by all 3,555 car passengers, the second by all 5,583 education and childcare journeys. Swap them and you have claimed something the table never said. Getting the direction of a percentage right is a small habit that prevents a large class of wrong conclusions, and this page builds it out of the town\'s own travel table.',
  wa: 'Hello Modern Age Coders, I want to book a free coding lesson for a learner in Carrigaline.',

  picks: {
    eyebrow: 'Course picks for Carrigaline',
    h2: 'Good places to start in Carrigaline',
    intro: 'Choose by age and interest. The teacher who runs the course teaches the free lesson and sets the level from it.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with sorting and tallies, where the same pile can be counted two ways.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Fractions and percentages built in code, with the denominator always named.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Cross-tabulating real census data in Python and reading it in both directions.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults reading reports where a percentage arrives without its denominator.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Two percentages, one number',
      intro: 'The Carrigaline travel table, with its own published totals for work journeys, education and childcare journeys, and the two combined. The final two columns are our division.',
      body: [
        { kind: 'table', caption: 'Main means of travel, Carrigaline, Census 2022', head: ['Mode', 'To work', 'To school etc', 'Both', 'Share of that mode on education journeys', 'Share of education journeys using it'], rows: [
          ['Car driver', '5,742', '293', '6,035', '4.9%', '5.2%'],
          ['Car passenger', '323', '3,232', '3,555', '90.9%', '57.9%'],
          ['On foot', '285', '1,175', '1,460', '80.5%', '21.0%'],
          ['Bus, minibus or coach', '314', '584', '898', '65.0%', '10.5%'],
          ['Bicycle', '51', '65', '116', '56.0%', '1.2%'],
          ['Mainly at or from home', '1,026', '28', '1,054', '2.7%', '0.5%'],
          ['All modes', '8,426', '5,583', '14,009', '39.9%', '100%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Reading down the column', p: 'Of the 3,555 residents whose main means is car passenger, 3,232 are on education or childcare journeys. That is 90.9%, and it describes who the car passengers are.' },
          { h3: 'Reading across the row', p: 'Of the 5,583 education and childcare journeys, 3,232 are made as a car passenger. That is 57.9%, and it describes how those journeys are made. The cell is identical; the denominator is not.' },
          { h3: 'The car driver row shows why it matters', p: '5,742 of the town\'s 6,035 car drivers are travelling to work, 95.1%, while car driving accounts for 68.1% of work journeys. Neither figure can be swapped for the other, and the gap between them is not small.' }
        ] },
        { kind: 'callout', h3: 'The converse error, out in the wild', p: 'Most people who cancel contact support first, therefore most people who contact support cancel. Most burglaries happen through a window, therefore most windows get burgled. Most of our churn comes from small accounts, therefore most small accounts churn. Each pair sounds like one claim restated and is two claims with different denominators, one of which may be false. The only defence is boringly simple: every percentage gets written with the group it was divided by, in the code, the chart label and the sentence.',
        },
        { kind: 'p', text: 'The project builds the table above as a cross-tabulation and prints each cell twice, once as a share of its column and once as a share of its row, with the denominator named in the output rather than in a comment. The learner then writes the pair of English sentences each cell licenses and marks which of the two answers the question that was actually asked. A final check uses the published totals: the work column sums to 8,426, the education column to 5,583, and the combined column to the published 14,009, so the two columns and the total agree before any percentage is calculated.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Carrigaline in the town tables',
      h2: 'The town the census describes',
      intro: 'Published for the built-up area Carrigaline, Co Cork, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Carrigaline, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '18,101'],
          ['Households', '6,047'],
          ['Households with a broadband connection', '5,497'],
          ['Working residents in the travel table', '8,426'],
          ['Education and childcare journeys in the same table', '5,583'],
          ['Children under fifteen in childcare', '1,505']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The work commute', p: 'Of 8,426 working residents, 5,742 drive, 1,026 give home as their main answer, 424 travel by van, 323 go as a car passenger, 314 take a bus, 285 walk, 51 cycle and 9 take a train.' },
          { h3: 'Home working', p: 'A table asking about home working rather than journeys records 4,805 working residents who never work from home and 483 who did not state, with the rest doing at least some work at home.' },
          { h3: 'Households and connections', p: '233 households reported no internet access, 75 a connection other than broadband and 242 did not state, so the 5,497 broadband households are 90.9% of the 6,047 total by our arithmetic.' }
        ] },
        { kind: 'spec', title: 'The school on the 2018 list', p: 'When the Department of Education published the first-phase schools for Leaving Certificate Computer Science on 4 January 2018, Carrigaline Community School was on it. We keep a copy of that announcement because gov.ie now refuses automated requests, and we quote it rather than any school\'s own material. We have no connection with the school.' }
      ]
    },
    {
      id: 'scale', tint: 'tint', eyebrow: 'The same reading, nationally',
      h2: 'How the two directions differ elsewhere',
      intro: 'The identical pair of percentages calculated from the all-towns row of the same table, for comparison with Carrigaline.',
      body: [
        { kind: 'table', caption: 'Car passengers and education journeys, Carrigaline against all towns combined', head: ['Reading', 'Carrigaline', 'All towns combined'], rows: [
          ['Share of car passengers on education journeys', '90.9%', '85.1%'],
          ['Share of education journeys made as a car passenger', '57.9%', '39.6%'],
          ['Car passengers, count', '3,555', '428,388'],
          ['Education and childcare journeys, count', '5,583', '921,076']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Both directions move', p: 'Carrigaline is above the all-towns figure on each reading, by about six points on the first and eighteen on the second. A page quoting only one of them would describe the town very differently depending on which it picked.' },
          { h3: 'No cause offered', p: 'Why the town\'s figures sit where they do is not in this table, so this page does not say. Nothing here measures distance to school, bus provision or household timetables.' },
          { h3: 'What the comparison is for', p: 'Scale, and nothing else. A single town percentage cannot tell a reader whether it is ordinary or unusual, and the all-towns row is the nearest published benchmark.' }
        ] },
        { kind: 'spec', title: 'A district named after the town', p: 'Cork County Council publishes a Carrigaline Municipal District on its own site, with meeting agendas and minutes filed under that name. The town therefore lends its name to an administrative area wider than the built-up area counted above, and no figure on this page belongs to that district.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Carrigaline',
      h2: 'What a course looks like from here',
      intro: 'A weekly hour, a teacher present for all of it, and a level that fits the learner rather than the year group.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Younger learners', p: 'Block coding and small games first, moving to typed code when the learner is ready rather than at a fixed age.' },
          { h3: 'Exam years', p: 'Python, web projects and AI work that sit alongside the senior cycle without competing with it for time.' },
          { h3: 'Adults', p: 'Data, Python and AI for adults, including those already working from home part of the week.' }
        ] },
        { kind: 'p', text: 'No connection exists between us and Carrigaline Community School, Cork County Council or any other body named on this page. Every count comes from Central Statistics Office Census 2022 tables for this built-up area and appears exactly as published, including the table\'s own combined column. The percentages are ours, and each one is printed beside the group it was divided by, because a page about the direction of a percentage cannot afford a single loose one of its own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From percentages to cross-tabulations',
    intro: 'Bands are indicative; the free lesson finds the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Out of how many', p: 'Counting and comparing groups in block code, always saying out of what.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Percentages with names', p: 'Writing percentage calculations in Python where the denominator is a named variable.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Tables in two directions', p: 'Cross-tabulating real data and reading each cell down the column and across the row.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Numbers others will quote', p: 'Producing analysis where the reader cannot accidentally reverse a conditional.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A model will happily reverse the sentence for you',
    intro: 'Same words, different denominator.',
    p1: 'Give an assistant this table and ask about car passengers and the school run, and the reply will contain a percentage. Which of the two it picks depends on how the question was phrased, and the answer rarely names the group it divided by. Ask a follow-up in the opposite direction and the same figure is often repeated, which is the error this page exists to prevent.',
    p2: 'A learner who has built the cross-tabulation asks for the denominator every time, and supplies it when writing. That is the difference between a percentage a colleague can check and one that has to be taken on trust.',
    closer: 'Tools will keep producing percentages on demand. Knowing which one was asked for, and saying what it was divided by, is the part that stays with the person.',
    blogAnchor: 'the reasons coding still repays learning'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How it works for a Carrigaline household',
    intro: 'Six practical points.',
    cells: [
      { h3: 'Live, every time', p: 'The teacher is on the call for the whole hour and works from what the learner is doing on screen.' },
      { h3: 'Grouped by stage', p: 'Five to ten learners at one level, drawn from wherever in Ireland and abroad they happen to live.' },
      { h3: 'A weekly rhythm', p: 'Two lessons in most weeks, roughly eight in a month, at a slot agreed once at the start.' },
      { h3: 'Exam and term dates', p: 'Breaks, mid-terms and exam weeks are built into the schedule before the first lesson.' },
      { h3: 'What is needed', p: 'A computer with a keyboard, sound that works in both directions, and a connection that carries video.' },
      { h3: 'Private teaching', p: 'If no group at the right level meets at an hour that suits, the same course is taught one to one.' }
    ],
    spec: { title: 'One journey fewer', p: 'This is a town where 3,232 education and childcare journeys are made in the passenger seat. A lesson taken at home is the one appointment that needs no lift.' }
  },

  fees: {
    h2: 'Carrigaline class fees',
    intro: 'Three lines, fully listed.',
    first: 'A complete opening lesson, taught and assessed, at no charge.',
    group: 'A month in a group of five to ten at one level, about eight live lessons.',
    private: 'A month of one to one lessons on the same weekly rhythm.',
    closer: 'All fees are monthly, in US dollars, on the single rate for families outside India, which means a Carrigaline household sees the same figure as one in Cork city and there is no euro price list in sight. Billing starts once the opening lesson has settled a course and an hour, and the pricing page sets out breaks, missed lessons and changes between group and private teaching.'
  },

  reviewsH2: 'Six families of ours, quoted from Google word for word',

  book: {
    h2: 'Book a free Carrigaline lesson',
    intro: 'Tell us an age and an interest, and the first hour is planned from there, whether it becomes a game, a first program or a table read carefully in both directions.',
    success: 'Thank you. We will be in touch about the Carrigaline lesson shortly.'
  },

  faq: {
    h2: 'Carrigaline coding class questions',
    intro: 'The questions Carrigaline families put to us first.',
    items: [
      { q: 'How many people live in Carrigaline?', a: 'The Census 2022 small area tables count 18,101 usual residents in the built-up area of Carrigaline, in 6,047 households. Cork County Council also runs a wider Carrigaline Municipal District, and our County Cork page handles the several Cork geographies.' },
      { q: 'What is the Carrigaline data project?', a: 'Learners cross-tabulate the town travel table and print every cell twice, once as a share of its column and once as a share of its row, so that 3,232 car passenger journeys yield both 90.9% of all car passengers and 57.9% of all education and childcare journeys, with the denominator named each time.' },
      { q: 'Why does the direction of a percentage matter?', a: 'Because the two directions divide by different groups and can differ enormously. In Carrigaline 95.1% of car drivers are on work journeys, while car driving accounts for 68.1% of work journeys. Reversing such a pair produces a claim the data does not support.' },
      { q: 'How do Carrigaline residents travel to work?', a: 'Of the 8,426 working residents in the travel table, 5,742 drive, 1,026 give working mainly at or from home, 424 use a van, 323 travel as a car passenger, 314 take a bus, 285 walk, 51 cycle and 9 take a train.' },
      { q: 'When are the lessons?', a: 'After school, in the evenings and on weekend mornings. Our teachers are in India, running ahead of Irish time by four and a half hours in the summer months and five and a half through the winter, so we agree a weekly hour that works at both ends during the free lesson.' },
      { q: 'Are adults taught in Carrigaline?', a: 'Yes, up to sixty-seven and from no previous experience. After the free lesson an adult is put with a group at the same level or taught privately.' },
      { q: 'Can a learner switch course later?', a: 'Yes. Courses connect, and a learner who finds one too easy or too demanding is moved to the level that fits rather than being asked to persist.' },
      { q: 'Is there a Modern Age Coders classroom in Carrigaline?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Carrigaline cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Carrigaline',
    html: 'To the north is <a class="cg-inline-link" href="/best-coding-class-in-cork">Cork</a>, with <a class="cg-inline-link" href="/coding-classes-in-county-cork">County Cork</a> around it and the province of <a class="cg-inline-link" href="/coding-and-ai-classes-in-munster">Munster</a> beyond that. Our <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a> puts us beside other online schools, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists every page we have written.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Carrigaline, Cork and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-cork', label: 'Cork' },
    { href: '/coding-classes-in-county-cork', label: 'County Cork' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-crg .cg-hero-grid { align-items: start; gap: clamp(1.07rem, 3.24vw, 2.63rem); }
.cg-root.cg-crg .cg-hero h1 { font-weight: 700; letter-spacing: -0.0193em; line-height: 1.051; }
.cg-root.cg-crg .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.19rem; }
.cg-root.cg-crg .cg-eyebrow { letter-spacing: 0.161em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-crg .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0147em; }
.cg-root.cg-crg .cg-grid-3 { gap: clamp(1.03rem, 2.71vw, 2.07rem); }
.cg-root.cg-crg .cg-table caption { letter-spacing: 0.033em; font-weight: 700; }
.cg-root.cg-crg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-crg .cg-table td:nth-child(5), .cg-root.cg-crg .cg-table td:nth-child(6) { color: var(--cg-muted); font-weight: 600; }
.cg-root.cg-crg .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.09rem; }
.cg-root.cg-crg .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Carrigaline, the built-up area "Carrigaline, Co Cork", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T11T1TOWN22, three published blocks. To work, total 8,426: car driver 5,742, work mainly at or from home 1,026, van 424, car passenger 323, bus minibus or coach 314, on foot 285, not stated 197, bicycle 51, other including lorry 29, motorcycle 26, train DART or Luas 9. To school, college or childcare, total 5,583: car passenger 3,232, on foot 1,175, bus 584, car driver 293, not stated 186, bicycle 65, work mainly at or from home 28, van 10, train 4, motorcycle 3, other 3. Combined block published by the CSO, total 14,009: car driver 6,035, car passenger 3,555, on foot 1,460, mainly at or from home 1,054, bus 898, van 434, bicycle 116, other 32, motorcycle 29, train 13, not stated 383. Our division on those published rows: 3,232 of 3,555 car passengers on education journeys is 90.9 percent, and 3,232 of 5,583 education journeys by car passenger is 57.9 percent; 5,742 of 6,035 car drivers on work journeys is 95.1 percent, and 5,742 of 8,426 work journeys by car driver is 68.1 percent; on foot 1,175 of 1,460 is 80.5 percent and 1,175 of 5,583 is 21.0 percent; bus 584 of 898 is 65.0 percent and 584 of 5,583 is 10.5 percent. All-towns rows of the same table for scale: car passenger 364,345 education of 428,388 total, 85.1 percent, and 364,345 of 921,076 education journeys, 39.6 percent. SAP2022T2T1TOWN22: usual residents 18,101, born in Ireland 14,596. SAP2022T15T2TOWN22: households 6,047, broadband 5,497, other 75, none 233, not stated 242. SAP2022T11T4TOWN22: 8,426 working persons, 4,805 never work from home, 483 not stated. SAP2022T11T5TOWN22: 1,505 children under 15 in childcare, 649 aged 0 to 4 and 856 aged 5 to 14. SAP2022T8T1TOWN22: at work 8,494, students 1,802, retired 1,532, total aged 15 and over 13,899. Department of Education, 4 January 2018, first-phase Leaving Certificate Computer Science list: includes Carrigaline Community School. Cork County Council: publishes a Carrigaline Municipal District with meeting agendas and minutes under that name.',
    localProject: 'Two percentages, one number. The Carrigaline travel table publishes work journeys, education and childcare journeys and a combined column. The cell for car passenger on education journeys is 3,232. Divided by the 3,555 car passengers in the combined column it is 90.9 percent, a statement about who the car passengers are. Divided by the 5,583 education and childcare journeys it is 57.9 percent, a statement about how those journeys are made. Same cell, two denominators, two different English sentences, and swapping them asserts something the table never said. The car driver row makes the size of the trap clear: 5,742 of 6,035 car drivers are on work journeys, 95.1 percent, while car driving is 68.1 percent of work journeys. The learner builds the cross-tabulation, prints every cell as both a column share and a row share with the denominator named in the output, writes the two sentences each cell licenses, and checks the published totals first: 8,426 plus 5,583 equals the published combined 14,009. The all-towns row is used only for scale, at 85.1 and 39.6 percent on the same pair of readings. New to the cluster: the converse error and the direction of a conditional percentage.',
    requiredMentions: [
      '18,101',
      '6,047',
      '5,497',
      '8,426',
      '5,742',
      '5,583',
      '3,232',
      '1,175',
      '3,555',
      '6,035',
      '1,026',
      '1,505'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, means of travel, Carrigaline, Co Cork: to work 8,426 with car driver 5,742, mainly at or from home 1,026, van 424, car passenger 323, bus 314, on foot 285, bicycle 51, train 9; to school, college or childcare 5,583 with car passenger 3,232, on foot 1,175, bus 584, car driver 293, bicycle 65; published combined column 14,009 with car driver 6,035, car passenger 3,555, on foot 1,460, bus 898, mainly at or from home 1,054. All-towns rows: car passenger 428,388 combined and 364,345 on education journeys, of 921,076 education journeys.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T8T1TOWN22, Carrigaline: usual residents 18,101, born in Ireland 14,596; households 6,047, broadband 5,497, no internet 233, other 75, not stated 242; 4,805 never work from home, 483 not stated; 1,505 children under 15 in childcare; students 1,802, retired 1,532.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'Department of Education press release of 4 January 2018 naming the first-phase Leaving Certificate Computer Science schools, which include Carrigaline Community School. Quoted from a copy saved on 17 September 2026 because gov.ie refuses automated requests.', url: 'https://www.gov.ie/en/department-of-education/press-releases/' },
      { claim: 'Cork County Council publishes a Carrigaline Municipal District, with meeting agendas and minutes filed under that name.', url: 'https://www.corkcoco.ie/en/carrigaline-municipal-district' }
    ],
    rejectedClaims: [
      'Any sentence that swaps the two readings of a cell, such as treating the 90.9 percent of car passengers as a share of education journeys.',
      'Any reason for Carrigaline sitting above the all-towns figures on either reading: distance, bus provision and household timetables are not measured here.',
      'Any claim built on Carrigaline Community School beyond its presence on the 2018 first-phase list: its own site did not respond to requests.',
      'Any population or other figure for the Carrigaline Municipal District: the district is named only as an administrative area.',
      'Adding the work and education columns to describe one population: they count two different sets of journeys, and only the CSO\'s own combined column is used.',
      'Any percentage anywhere on the page without the group it was divided by.'
    ]
  }
};
