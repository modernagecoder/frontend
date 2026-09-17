'use strict';
// Swords (cg- town page, Ireland cluster, Phase 7, first town). Facts come from
// the CSO Census 2022 Small Area Population town tables (TOWN22) for the built-up
// area "Swords, Co Dublin", from Fingal County Council's own contact page, and
// from the Department of Education's January 2018 first-phase Leaving
// Certificate Computer Science list (copy saved on 16 September 2026; gov.ie now
// refuses automated requests and no attempt was made to get around that). Town
// tables read 17 September 2026. Spine: compared with what? In every TOWN22
// table the row labelled "State" is the sum of the 867 built-up areas, verified
// exactly, 3,582,870 usual residents, which is 70.5% of the State's 5,084,879.
// Comparing Swords with that row compares it with all towns combined. Household
// broadband in Swords is 89.7% by our arithmetic, 7.4 points above that row but
// 10.3 points above the real State figure from the county table. Kill gate: far
// more than eight Swords-specific facts. Fingal already owns the Swords town
// population 40,776 and LEA 48,739 as mentions, so this page uses the town
// tables' usual-resident count instead and repeats neither.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'SWORDS', blurb: 'A census row labelled State that leaves out a million and a half people, read in the county town of Fingal.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-swords',
  code: 'swd',
  accent: '#2E5E7E',
  accentRationale: 'Swords: an estuary blue from the solver, kept apart from the Fingal page and from the Dublin city blues',
  pageType: 'city',
  place: {
    name: 'Swords',
    eyebrow: 'Swords, Fingal, County Dublin',
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
  routeLabel: 'Swords, Fingal, Ireland',
  title: 'Best Coding Class in Swords | Modern Age Coders',
  description: 'Live online coding, Python and AI classes for families in Swords, County Dublin, with real teachers and small groups for ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Swords, with a project on a census row called State that actually covers only the towns.',
  twitterDescription: 'Coding and AI classes for Swords, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '17 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Swords',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Swords, County Dublin, taught live in English.'
  },

  h1: 'Coding classes in Swords',
  capsuleQ: 'What is the best coding class in Swords?',
  capsule: 'Swords is the county town of Fingal, with 40,458 usual residents in the census town tables, 13,643 households and 3,169 students aged fifteen and over. Two of its secondary schools, Loreto College and St Finian\'s Community College, were among the forty that began Leaving Certificate Computer Science in 2018. For families here, Modern Age Coders is a live alternative that needs no drive into the city: two video lessons in a normal week with a real teacher, a group of five to ten at the learner\'s level or a private place, for any age from six to sixty-seven. The first lesson is free of charge; after that it is USD 100 monthly in a group and USD 150 for one to one.',
  lead: 'Open any of the census tables published for Irish towns and you will find Swords, and at the bottom of the list a row called State. It is tempting to compare the two, and most people would. But that row is not the State. Add up all 867 towns in the table and you get exactly the number in it: 3,582,870 usual residents, about 70.5% of the 5,084,879 people who live in Ireland. The other million and a half live outside any town and are not in it at all. So Swords compared with that row is Swords compared with all towns combined, and the gap looks smaller than the gap between Swords and the country. On broadband it is 7.4 points against 10.3. A label saved somebody a few characters and quietly changed every comparison built on it.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Swords.',

  picks: {
    eyebrow: 'Course picks for Swords',
    h2: 'Where a Swords learner can start',
    intro: 'Pick by age and interest; the free first lesson with the course\'s own teacher confirms it, and nothing is asked for beyond contact details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects comparing two scores, and the moment a child realises the second score counted fewer players.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python basics and an early instinct for asking what a total actually includes.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real census town tables, and proving what a row contains before comparing anything with it.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults who compare results against targets and averages every week and need those benchmarks to mean what they say.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Compared with what?',
      intro: 'Household broadband in Swords set against two benchmarks that both carry the word State or Ireland. Counts are published; percentages are our arithmetic.',
      body: [
        { kind: 'table', caption: 'The same Swords figure against two different benchmarks, Census 2022', head: ['Measure', 'Swords', 'Row labelled State in the town tables', 'The State, from the county table'], rows: [
          ['Households with broadband', '12,233 of 13,643, about 89.7%', '1,083,309 of 1,317,616, about 82.2%', '1,457,883 of 1,836,728, about 79.4%'],
          ['Households with no internet', '405, about 3.0%', '95,677, about 7.3%', '159,866, about 8.7%'],
          ['Swords ahead on broadband by', '', '7.4 points', '10.3 points'],
          ['Who the benchmark covers', '', 'The 867 towns only, 3,582,870 residents', 'Everyone, 5,084,879 residents']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'How we know what the row is', p: 'We added every one of the 867 town rows in the birthplace table. The sum is exactly 3,582,870, the figure in the row labelled State. A national total would have been 5,084,879. The label is short for all towns in the State, and the table\'s own note does not say so.' },
          { h3: 'Why it moves the answer', p: 'The two benchmark rows themselves show that households outside towns are less likely to have broadband, so a benchmark made only of towns sits higher than the true national figure. Compare Swords with it and Swords looks less far ahead than it is.' },
          { h3: 'What a learner writes', p: 'The sum that proves what the row covers, both comparisons side by side, and one sentence that names the benchmark in full instead of trusting a one-word label.' }
        ] },
        { kind: 'callout', h3: 'A benchmark is a choice, and it should be named', p: 'School results are compared with a national average, salaries with a sector median, a shop with last year. Every one of those comparisons depends on exactly who is inside the benchmark. When the label is short, people fill in the meaning they expect, and the most natural reading of State is everyone in the country. A learner who has proved, with one addition, that a row called State leaves out a million and a half people will never again compare anything with a benchmark whose contents they have not checked.' },
        { kind: 'p', text: 'By our arithmetic on the same tables, 1,502,009 people and 519,112 households live outside the 867 built-up areas, which is why the town-table row and the true national figures differ on almost everything. This page quotes Swords from the town tables and the State from the county and province tables, and labels each one, so no comparison on it is made against the wrong benchmark.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Swords in the town tables',
      h2: 'A big town with a young working population',
      intro: 'Every figure below is published for the built-up area Swords, Co Dublin, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Swords, Census 2022 town tables', head: ['Counted in Swords', 'Number'], rows: [
          ['Usual residents', '40,458'],
          ['Born in Ireland', '30,184'],
          ['Households', '13,643'],
          ['People at work', '20,683'],
          ['Students aged fifteen and over', '3,169'],
          ['Children under fifteen in childcare', '2,843']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Where residents were born', p: 'Beyond the 30,184 born in Ireland, 3,364 were born elsewhere in the European Union, 3,289 elsewhere in the world, 1,559 in the United Kingdom, 1,337 in Poland and 725 in India.' },
          { h3: 'What people work in', p: 'Commerce and trade employs 5,755 Swords residents, professional services 4,667 and transport and communications 3,438, the census\'s own broad industry groups.' },
          { h3: 'Working from home', p: 'Of 20,536 working residents counted in the home-working table, 7,005 work from home at least some of the time.' }
        ] },
        { kind: 'p', text: 'A note on the two population figures in circulation for Swords. The census town list gives the total population counted there on census night, and our Fingal page quotes it. The small area tables used here count usual residents, people whose home is in Swords, which is a slightly different group. Neither is wrong; they answer slightly different questions, and this page sticks to one.' }
      ]
    },
    {
      id: 'travel', tint: 'tint', eyebrow: 'Getting about',
      h2: 'A bus town, not a train town',
      intro: 'How Swords residents travel, from the census, and what the county council itself tells visitors.',
      body: [
        { kind: 'table', caption: 'How Swords residents travel to work, Census 2022', head: ['Mode', 'Residents'], rows: [
          ['Driving a car', '10,438'],
          ['Bus, minibus or coach', '3,299'],
          ['Working mainly at or from home', '2,200'],
          ['On foot', '1,324'],
          ['Bicycle', '366'],
          ['Train, DART or Luas', '143']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The council\'s own directions', p: 'Fingal County Council\'s travel information for County Hall lists Dublin Bus routes 33, 33a, 33b, 41, 41b, 41c, 41x, 43 and 102, Swords Express from Eden Quay via the Port Tunnel, and LocalLink route 196, and no train, which matches the census closely.' },
          { h3: 'The school run', p: 'Of 10,560 residents travelling to school, college or childcare, 3,915 go as car passengers, 3,345 walk and 1,883 take a bus.' },
          { h3: 'Early starts', p: '2,668 Swords residents leave home before half past six in the morning, about 10.7% of those who stated a time, against about 7.5% across all towns combined, by our arithmetic.' }
        ] },
        { kind: 'spec', title: 'What early starts mean for learning', p: 'In a town where more than one resident in ten who stated a time is out of the door before 06:30, and 2,955 travel an hour or more, weekday evenings are short. A lesson that starts at home at a fixed hour, with no drive into Dublin and back, is the arrangement most likely to survive a school year.' }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Schools and the council',
      h2: 'Two first-wave schools and County Hall',
      intro: 'Named sources, each read at the organisation that published it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Loreto College, Swords', p: 'One of the forty schools on the Department of Education\'s January 2018 list to begin Leaving Certificate Computer Science that September.' },
          { h3: 'St Finian\'s Community College', p: 'Also in Swords and also on that first list, so two of the original forty schools are in this one town.' },
          { h3: 'County Hall', p: 'Fingal County Council gives its Swords office as County Hall, Main Street, Swords, K67 X8Y2, opposite Swords Castle at the northern end of Main Street.' }
        ] },
        { kind: 'p', text: 'We have no connection with Fingal County Council or with either school. Census figures are quoted exactly as published in the town tables and every percentage on this page is our own arithmetic. The first-phase school list was read on gov.ie on 16 September 2026; when we returned on 17 September the site refused automated requests, so the saved copy from the day before was used rather than any way around that refusal.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From comparing scores to choosing benchmarks',
    intro: 'Ages are only a guide; the first lesson sets the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Fair comparisons', p: 'Games that compare two teams and notice when one team had fewer players.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'What is in the total', p: 'Adding up the parts of a table to prove what a total row really covers.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Benchmarks in data', p: 'Comparing a place with two benchmarks and naming each one in full.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Honest comparisons at work', p: 'Reporting against averages and targets whose contents have actually been checked.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Give a tool the town table and it will read State as the country',
    intro: 'That is what the word means, and in this table it is wrong.',
    p1: 'Ask for Swords compared with the national figure using the town tables, and the row called State is the obvious choice. The comparison comes back cleanly, with a confident gap, and nothing mentions that the benchmark leaves out everyone outside a town. The label invited the error and the tool accepted the invitation.',
    p2: 'The learner who has added up the 867 rows knows to check what a total contains before using it. That check takes one line of code, and it is the difference between a comparison and a coincidence of labels.',
    closer: 'The machines will keep reading labels at face value. People who look underneath them are worth more every year, which is the real answer to whether coding is worth learning now.',
    blogAnchor: 'is it still worth learning to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lessons at home in Swords',
    intro: 'No drive into the city and no bus timetable to plan around.',
    cells: [
      { h3: 'Live teaching', p: 'Each lesson has a teacher present throughout, asking and answering, with the learner expected to take part.' },
      { h3: 'Level, not postcode', p: 'Groups of five to ten are formed by ability, drawing on Swords, the rest of Ireland and other countries.' },
      { h3: 'Two a week, usually', p: 'About eight lessons a month at an hour agreed once, around school and exams.' },
      { h3: 'Irish school stages', p: 'From primary through Junior Cycle, Transition Year and the Leaving Certificate years.' },
      { h3: 'What the learner needs', p: 'A laptop or desktop, working sound and a connection that carries video, which almost nine in ten Swords households have on broadband.' },
      { h3: 'Private where it suits', p: 'If no group at the right level meets at a workable hour, the course runs one to one.' }
    ],
    spec: { title: 'For families who start early', p: 'The census shows early departures are common in Swords. For those households a fixed evening or weekend lesson at the kitchen table is far easier to protect than a class across town.' }
  },

  fees: {
    h2: 'Fees in Swords',
    intro: 'Three prices, no extras.',
    first: 'The first lesson, free, finishing with a level and a course suggestion.',
    group: 'A month in a group of five to ten at one level, around eight lessons.',
    private: 'A month of one to one lessons at the same weekly pace.',
    closer: 'Invoices are monthly and in US dollars, at the single rate we use outside India, and they are the same in Swords as anywhere else in Ireland. Nothing is charged before the free lesson has settled a course and an hour; pauses, missed lessons and a change between group and private are explained on the pricing page.'
  },

  reviewsH2: 'Six families wrote these on Google; we have not changed a word',

  book: {
    h2: 'Book a free lesson for a Swords learner',
    intro: 'Tell us the age and the interests. The first hour is built around the learner, from a Scratch game about fair scores to a census table whose total is not what it says.',
    success: 'Thank you. Somebody will be in touch about the Swords class shortly.'
  },

  faq: {
    h2: 'Swords coding class questions',
    intro: 'Questions Swords parents and learners ask before starting.',
    items: [
      { q: 'How many people live in Swords?', a: 'The census small area tables count 40,458 usual residents in the built-up area of Swords, in 13,643 households. The census town list gives a slightly different total population, which our Fingal page quotes.' },
      { q: 'Which Swords schools offered Leaving Certificate Computer Science first?', a: 'Loreto College and St Finian\'s Community College, both on the January 2018 list of forty schools that began the subject that September.' },
      { q: 'What is the Swords data project?', a: 'Learners discover that the row labelled State in the census town tables is really all towns combined, prove it by adding 867 rows, and see Swords\' broadband lead grow from 7.4 to 10.3 points against the true national figure.' },
      { q: 'Is there a train to Swords?', a: 'The census counts 143 Swords residents travelling to work by train, DART or Luas, and Fingal County Council\'s own travel information for its Swords office lists bus routes only.' },
      { q: 'What times are lessons?', a: 'Weekday evenings, after school, and weekend mornings. Teaching is done from India, which runs four and a half hours ahead of Irish summer time and five and a half ahead in winter, so those Irish hours sit inside our normal day.' },
      { q: 'Does my child need to be good at maths first?', a: 'No. The first lesson finds each learner\'s real starting level, and the course begins from there.' },
      { q: 'Can adults in Swords join?', a: 'Yes. Learners run from six to sixty-seven, and the free lesson places an adult with a group that matches their level and goals, or with a private teacher.' },
      { q: 'Is there a Modern Age Coders classroom in Swords?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Swords cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Swords',
    html: 'Swords sits in <a class="cg-inline-link" href="/coding-classes-in-fingal">Fingal</a>, which has its own page, as do <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin city</a> and the wider <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">province of Leinster</a>. For a straight comparison of online coding schools, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">our guide</a>, and every Irish page is on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Swords, Fingal and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-fingal', label: 'Fingal' },
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-swd .cg-hero-grid { align-items: start; gap: clamp(1.15rem, 3.11vw, 2.6rem); }
.cg-root.cg-swd .cg-hero h1 { font-weight: 700; letter-spacing: -0.0197em; line-height: 1.057; }
.cg-root.cg-swd .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.17rem; }
.cg-root.cg-swd .cg-eyebrow { letter-spacing: 0.175em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-swd .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0139em; }
.cg-root.cg-swd .cg-grid-3 { gap: clamp(1.08rem, 2.53vw, 2.03rem); }
.cg-root.cg-swd .cg-table caption { letter-spacing: 0.028em; font-weight: 700; }
.cg-root.cg-swd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-swd .cg-table tr:nth-child(3) td { font-weight: 600; }
.cg-root.cg-swd .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.04rem; }
.cg-root.cg-swd .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Swords, the built-up area "Swords, Co Dublin" in Fingal, from the CSO Census 2022 Small Area Population town tables (TOWN22), read 17 September 2026. SAP2022T2T1TOWN22 by birthplace: usual residents 40,458; born Ireland 30,184, United Kingdom 1,559, Poland 1,337, India 725, other EU 3,364, rest of world 3,289. SAP2022T15T2TOWN22: households 13,643, broadband 12,233, other 153, no internet 405, not stated 852. SAP2022T11T1TOWN22 travel to work, total 20,536: car driver 10,438, bus minibus or coach 3,299, work mainly at or from home 2,200, on foot 1,324, bicycle 366, train DART or Luas 143, van 801, car passenger 748, motorcycle 138, other 38, not stated 1,041; travel to school, college or childcare, total 10,560: car passenger 3,915, on foot 3,345, bus 1,883. SAP2022T11T2TOWN22 time leaving home, aged 5 and over, total 27,496: before 06:30 2,668, not stated 2,492. SAP2022T11T3TOWN22 journey time: 1 hour to under 1.5 hours 2,252, 1.5 hours and over 703. SAP2022T11T4TOWN22: all working persons 20,536, work from home 7,005. SAP2022T11T5TOWN22: children under 15 in childcare 2,843. SAP2022T14T1TOWN22 persons at work, both sexes, total 20,683: commerce and trade 5,755, professional services 4,667, transport and communications 3,438. SAP2022T8T1TOWN22 principal economic status: student 3,169. In every TOWN22 table the row labelled State is the sum of the 867 built-up areas; in SAP2022T2T1TOWN22 the 867 rows sum exactly to 3,582,870 usual residents, against a State total of 5,084,879 in SAP2022T2T1PROV; in SAP2022T15T2TOWN22 that row gives 1,317,616 households with 1,083,309 broadband and 95,677 no internet, against the true State 1,836,728, 1,457,883 and 159,866 in SAP2022T15T2CTY. Fingal County Council contact page: "Fingal County Council County Hall, Main Street, Swords County Dublin K67 X8Y2", "County Hall is located opposite Swords Castle on the northern end of Main Street", served by Dublin Bus routes 33, 33a, 33b, 41, 41b, 41c, 41x, 43 and 102, Swords Express from Eden Quay via Port Tunnel and LocalLink route 196. Department of Education, 4 January 2018, saved copy read 16 September 2026: first-phase Leaving Certificate Computer Science schools include "Loreto College / Swords, Co. Dublin" and "St. Finian\'s Community College / Swords, Co. Dublin".',
    localProject: 'Compared with what? The row labelled State in the CSO Census 2022 town tables is not the State. Summing all 867 built-up area rows of SAP2022T2T1TOWN22 reproduces it exactly, 3,582,870 usual residents, which is 70.5 percent of the true State population of 5,084,879 from SAP2022T2T1PROV, so the row means all towns combined and excludes 1,502,009 people living outside built-up areas. Using household broadband, by our arithmetic: Swords 12,233 of 13,643, 89.7 percent; the town-table State row 1,083,309 of 1,317,616, 82.2 percent; the true State 1,457,883 of 1,836,728, 79.4 percent from SAP2022T15T2CTY. Swords\' lead is 7.4 points against the town row and 10.3 points against the real national figure. No internet: Swords 3.0 percent, town row 7.3, State 8.7. Output: the summation that proves what the row covers, both comparisons side by side, and a sentence naming each benchmark in full. The trap is a benchmark whose one-word label claims wider coverage than it has; it is distinct from the Kerry and Fingal doubling traps, where a total row is summed with its parts, because here the total is correct and only its label misleads.',
    requiredMentions: [
      '40,458',
      '30,184',
      '13,643',
      '12,233',
      '20,536',
      '10,438',
      '3,299',
      '2,668',
      '7,005',
      '3,169',
      'K67 X8Y2',
      '3,582,870'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T2T1TOWN22, usually resident population by birthplace for Swords, Co Dublin: total 40,458, Ireland 30,184, United Kingdom 1,559, Poland 1,337, India 725, other EU 3,364, rest of world 3,289; the row labelled State totals 3,582,870, equal to the sum of all 867 towns.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T15T2TOWN22, households with internet access for Swords, Co Dublin: total 13,643, broadband 12,233, other 153, no 405, not stated 852; State row 1,317,616 total, 1,083,309 broadband, 95,677 no.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T15T2CTY, households with internet access by administrative county, Ireland: total 1,836,728, broadband 1,457,883, no 159,866.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2CTY/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T2T1PROV, usually resident population, Ireland total 5,084,879.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1PROV/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, means of travel for Swords, Co Dublin: to work total 20,536, car driver 10,438, bus 3,299, mainly at or from home 2,200, on foot 1,324, bicycle 366, train DART or Luas 143; to school, college or childcare total 10,560, car passenger 3,915, on foot 3,345, bus 1,883.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T11T2TOWN22 and SAP2022T11T3TOWN22 for Swords, Co Dublin: before 06:30 2,668 of 27,496 with 2,492 not stated; State row before 06:30 150,256 of 2,254,664 with 258,435 not stated; journeys of 1 hour to under 1.5 hours 2,252 and 1.5 hours and over 703.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T11T4TOWN22, SAP2022T11T5TOWN22, SAP2022T14T1TOWN22 and SAP2022T8T1TOWN22 for Swords, Co Dublin: 20,536 working persons of whom 7,005 work from home; 2,843 children under 15 in childcare; 20,683 at work, commerce and trade 5,755, professional services 4,667, transport and communications 3,438; 3,169 students.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T14T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Fingal County Council contact page: "Fingal County Council County Hall, Main Street, Swords County Dublin K67 X8Y2"; "County Hall is located opposite Swords Castle on the northern end of Main Street"; Dublin Bus routes 33, 33a, 33b, 41, 41b, 41c, 41x, 43 and 102, "Swords Express from Eden Quay via Port Tunnel" and "LocalLink Route 196 from Knocksedan to Swords".', url: 'https://www.fingal.ie/contact-us' },
      { claim: 'Department of Education press release of 4 January 2018, saved copy read 16 September 2026: the forty first-phase Leaving Certificate Computer Science schools include "Loreto College / Swords, Co. Dublin" and "St. Finian\'s Community College / Swords, Co. Dublin".', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' }
    ],
    rejectedClaims: [
      'Treating the row labelled State in any TOWN22 table as the national figure: it is the sum of the 867 built-up areas.',
      'Repeating the Swords town population 40,776 or the Swords LEA figure 48,739 as mentions: the Fingal page owns them.',
      'Any claim that Dublin Airport or any named employer explains Swords\' industry mix: the census gives broad groups only, so no cause is asserted.',
      'Any figure fetched from gov.ie on 17 September 2026: automated requests were refused and no workaround was attempted.',
      'Any claim about Swords schools teaching computer science today: only the 2018 first-phase list is cited.'
    ]
  }
};
