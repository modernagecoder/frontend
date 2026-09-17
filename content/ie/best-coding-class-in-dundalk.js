'use strict';
// Dundalk (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Dundalk, Co Louth", read 18 September 2026, the Irish
// Rail station page for Dundalk (Clarke) and An Tain Arts Centre's own site.
// Spine: a count of connections is not a measure of quality. The internet access
// table records one reported answer per household from four possible ones, so
// Dundalk's 12,686 broadband households out of 15,923 says nothing about speed,
// reliability or whether a household can carry a live video lesson, which is the
// thing we actually need. New family for the cluster, deliberately not another
// denominator lesson: measurement validity and proxy variables. Louth owns the
// DkIT self-description and the county figures, so neither is reused. Northern
// Ireland stays out of scope, so the station's cross-border route is not
// discussed.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'DUNDALK', blurb: 'Four possible answers about the internet, none of them about speed. A Louth town, and the difference between a category and a measurement.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-dundalk',
  code: 'dnk',
  accent: '#6B3A2E',
  accentRationale: 'Dundalk: a rust red from the solver, clear of the Louth county ochre and the Drogheda teal further down the coast',
  pageType: 'city',
  place: {
    name: 'Dundalk',
    eyebrow: 'Dundalk, County Louth',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Louth' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-louth', name: 'County Louth' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Louth', href: '/coding-classes-in-county-louth' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Dundalk, County Louth, Ireland',
  title: 'Best Coding Class in Dundalk | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Dundalk learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Dundalk, with a project on why counting broadband connections measures nothing about speed.',
  twitterDescription: 'Coding and AI classes for Dundalk, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Dundalk',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Dundalk, County Louth, taught live in English.'
  },

  h1: 'Coding classes in Dundalk',
  capsuleQ: 'What is the best coding class in Dundalk?',
  capsule: 'Dundalk holds 42,735 usual residents in the census town tables, spread across 15,923 households. Lessons are taught into the house: a teacher live on video, twice in most weeks, with either an ability group of five to ten learners or one learner on their own, anywhere between the ages of six and sixty-seven. The opening lesson is not charged for. A shared place then runs at USD 100 a month, and private teaching at USD 150.',
  lead: 'Our own lessons need a connection that carries live video, so the census figure looks like exactly the right one to quote: 12,686 of Dundalk\'s 15,923 households report broadband. It answers a different question than it appears to. The census asked each household which kind of internet access it has and offered four answers, and the count that comes back is a count of reported categories. It contains no speed, no reliability, no measure of what happens at seven in the evening when several people are online at once, and no information about the rooms a signal reaches. A household with a slow line and a household with a fast one are the same row. We use the figure for what it is, and we test the actual connection in the free lesson, because a category is not a measurement.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Dundalk.',

  picks: {
    eyebrow: 'Course picks for Dundalk',
    h2: 'Starting courses for Dundalk learners',
    intro: 'Pick by age and interest. The course teacher takes the free lesson and sets the level from what the learner does in it.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding where a program has to be tested rather than assumed to work.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python from the beginning, with measurements taken instead of guessed at.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real data in Python, and the question of whether a column measures what its name suggests.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults choosing metrics at work, where the easy number is rarely the right one.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A category is not a measurement',
      intro: 'Internet access in Dundalk, Census 2022, with every answer the table offers. Counts are published and shares are ours.',
      body: [
        { kind: 'table', caption: 'Household internet access, Dundalk and all towns combined', head: ['Answer as published', 'Dundalk households', 'Share', 'All towns combined'], rows: [
          ['Broadband', '12,686', '79.7%', '82.2%'],
          ['Other', '310', '1.9%', '1.8%'],
          ['No', '1,454', '9.1%', '7.3%'],
          ['Not stated', '1,473', '9.3%', '8.7%'],
          ['Total households', '15,923', '100%', '1,317,616']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What the variable holds', p: 'One answer for each household, chosen from four, recorded on one day in April 2022, about the household rather than the people in it. That is the whole of it, and the four rows sum exactly to the 15,923 households in the town.' },
          { h3: 'What it cannot hold', p: 'Speed. Reliability. Behaviour at busy times. Whether the signal reaches the room a learner works in. Cost. Whether the household would call the connection good. None of those questions was asked, so none has an answer here, for Dundalk or anywhere else.' },
          { h3: 'What would answer it', p: 'Measurements rather than categories: recorded speeds over time, for identified locations. We have not gathered any such data for this town, and so this page makes no claim at all about how fast anything in Dundalk is.' }
        ] },
        { kind: 'callout', h3: 'The proxy problem', p: 'Page views standing in for interest. Time in the building standing in for work done. Tickets closed standing in for customers helped. Exam marks standing in for understanding. Lines of code standing in for progress. Each proxy is easier to collect than the thing it represents, which is why it gets collected, and each one drifts away from that thing the moment somebody starts managing the proxy instead. Naming what a column measures, and naming what it was chosen to stand in for, is the difference between a number that informs a decision and one that quietly replaces it.',
        },
        { kind: 'p', text: 'The project is a data dictionary rather than a chart. For this one variable the learner writes down the question asked, the four permitted answers, the unit counted, the date, and then three questions the variable cannot answer, each with the kind of data that could. They finish by taking a measurement of their own, the connection test we run in the free lesson, and writing one paragraph on what the measurement tells them that the census category does not. It is the shortest project in this cluster and the one that travels furthest, because every dataset a learner meets later will have a column whose name promises more than the column contains.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Dundalk in the town tables',
      h2: 'The town as the census records it',
      intro: 'Published for the built-up area Dundalk, Co Louth, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Dundalk, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '42,735'],
          ['Households', '15,923'],
          ['Households reporting broadband', '12,686'],
          ['Residents born in Ireland', '31,283'],
          ['Residents born in the United Kingdom', '3,946'],
          ['Children under fifteen in childcare', '2,426']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Working residents', p: 'The travel table counts 17,180 working residents in the town, and a separate table records 4,792 of them doing at least some work from home, 10,164 who never do and 2,224 who did not state.' },
          { h3: 'Another reported category', p: 'That home-working table has the same shape as the internet one: a status reported by a person, not a measurement of hours or days. It tells you how many said yes, not how much work moved home.' },
          { h3: 'Childcare split', p: 'Of the 2,426 children under fifteen in childcare, 1,053 are four or under and 1,373 are between five and fourteen.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives Dundalk (Clarke) as Carrickmacross Road, Dundalk, Co. Louth, Eircode A91 TD61. It lists the station as staffed around the clock, open from 05.00 to 01:30, with toilets, an enclosed waiting room, a booking office on weekdays and Saturdays, a filtered water refill unit, a car park of 200 spaces, and among its routes the Dublin to Dundalk commuter service and the DART and Dublin commuter timetable. The same page lists no Wi-Fi at the station, which is a useful reminder that a place being well connected in one sense says nothing about another.' }
      ]
    },
    {
      id: 'reading', tint: 'tint', eyebrow: 'Reading the same table honestly',
      h2: 'Three sentences this table supports',
      intro: 'Written out in full, with the parts that make each one true.',
      body: [
        { kind: 'table', caption: 'Claims and whether the table carries them', head: ['Sentence', 'Supported'], rows: [
          ['12,686 Dundalk households reported broadband in April 2022', 'Yes, this is the published count'],
          ['79.7% of the town\'s households reported broadband', 'Yes, our division of 12,686 by 15,923'],
          ['1,454 households reported no internet access at all', 'Yes, this is the published count'],
          ['Most homes in Dundalk have fast internet', 'No, speed was never asked'],
          ['A learner in Dundalk can stream a lesson', 'No, that is a measurement we take ourselves'],
          ['Internet access in Dundalk improved', 'No, this is one census with no comparison made here']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two counts, one share', p: 'Everything in the supported column is either a number printed by the CSO or one division of two such numbers, with the denominator named. That is the whole budget of claims a single table gives you.' },
          { h3: 'The 1,473 who did not state', p: 'They are kept as their own row rather than folded into any other. The share of households reporting broadband is calculated over all 15,923, and the page says so wherever the figure appears.' },
          { h3: 'No reasons, no direction', p: 'Nothing here explains why Dundalk sits below the all-towns broadband share or above it on no internet access, and nothing compares the town with an earlier census.' }
        ] },
        { kind: 'spec', title: 'The arts centre', p: 'An Tain Arts Centre describes itself on its own site as an independent arts space in Dundalk, Co. Louth, with two theatres, a gallery, artist studios and a production house, at Crowe St, Townparks, Dundalk, A91 W20C, company registration 537097. We have no connection with it and reproduce none of its prices.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Dundalk',
      h2: 'What we check before a course starts',
      intro: 'One weekly hour, a live teacher, and a connection tested rather than assumed.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The connection test', p: 'In the free lesson we run the actual video call the course will use, on the actual machine, at the actual hour. That is a measurement, and it settles what no census table can.' },
          { h3: 'School-age learners', p: 'Block coding for younger children, then Python, web projects and AI work through the junior and senior cycle years.' },
          { h3: 'Adults', p: 'Data, Python and AI for adults at any level, including the 4,792 working residents already doing some of their work at home.' }
        ] },
        { kind: 'p', text: 'Irish Rail and An Tain Arts Centre are quoted from their own published pages and neither is connected with us, nor is Louth County Council. Every count on this page is a Central Statistics Office Census 2022 figure for this built-up area, printed as published, and the three percentages are our own division with the denominator named beside each. Where a reader might expect a claim about internet speed in the town, there is none, because we have not measured it and the census did not ask.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From measuring to knowing what you measured',
    intro: 'Ages are a guide; the free lesson decides the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Test it, do not guess', p: 'Small programs in block code that have to be run and checked rather than assumed correct.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Taking a reading', p: 'Writing code that measures something real, then asking how good the measurement is.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'What the column means', p: 'Documenting real datasets, including what each variable stands in for and what it misses.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Choosing a metric', p: 'Picking measures at work that survive being used, rather than proxies that drift.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask whether Dundalk has good internet',
    intro: 'An answer will arrive, built from a table that never asked.',
    p1: 'A model handed this table and asked about internet quality will usually convert 79.7% into a verdict, sometimes with words like strong or solid attached. The number is right and the verdict is unsupported, because the underlying question was about a category and the answer is about performance. Nothing in the reply marks the swap.',
    p2: 'A learner who has written the data dictionary answers in two parts instead: here is what the census counted, and here is the measurement you would need for the question you asked. They can also say which one we run before a course starts, and why it is the one that matters for a live lesson.',
    closer: 'The interesting skill in 2026 is not getting a number out of a tool. It is knowing what the number was ever able to mean.',
    blogAnchor: 'why learning to code holds its value'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Dundalk households',
    intro: 'Six practical points.',
    cells: [
      { h3: 'A live teacher', p: 'Present for the whole lesson, working from what appears on the learner\'s screen.' },
      { h3: 'Ability grouping', p: 'Five to ten learners at one level, joining from Dundalk, the rest of Ireland and other countries.' },
      { h3: 'Two lessons a week', p: 'About eight in a month, at an hour agreed once and then kept.' },
      { h3: 'Term dates', p: 'Mid-terms, holidays and exam weeks are planned into the schedule before it starts.' },
      { h3: 'Tested, not assumed', p: 'Machine, sound and connection are all tried in the free lesson rather than taken on trust.' },
      { h3: 'One to one', p: 'Where no group at the right level meets at a workable hour, the course runs privately.' }
    ],
    spec: { title: 'If the connection is the problem', p: 'Sometimes the free lesson shows that a household connection will not hold a class. We say so plainly, suggest what would need to change, and do not take a payment in the meantime.' }
  },

  fees: {
    h2: 'Dundalk class fees',
    intro: 'Three lines, complete.',
    first: 'A full opening lesson, taught and assessed, with no charge and no obligation.',
    group: 'One month in an ability group of five to ten, about eight live lessons.',
    private: 'One month of private teaching on the same weekly pattern.',
    closer: 'Charges are monthly and in US dollars, at the single rate for families outside India, so Dundalk sees the same figure as Drogheda and no euro list appears beside it. Nothing is billed until the opening lesson has settled a course, an hour and a working connection, and the pricing page covers breaks, missed weeks and moves between group and private teaching.'
  },

  reviewsH2: 'Six families, quoted from Google exactly as they wrote it',

  book: {
    h2: 'Book a free Dundalk lesson',
    intro: 'Send an age and an interest. The first hour is planned around it, and it doubles as the test of whether the machine and the line at home are up to the course.',
    success: 'Thank you. We will be in touch about the Dundalk lesson shortly.'
  },

  faq: {
    h2: 'Dundalk coding class questions',
    intro: 'What Dundalk families ask before booking.',
    items: [
      { q: 'How many people live in Dundalk?', a: 'The Census 2022 small area tables count 42,735 usual residents in the built-up area of Dundalk, living in 15,923 households. Our Louth page covers the county figures and how the towns sit inside them.' },
      { q: 'What is the Dundalk data project?', a: 'Learners write a data dictionary for one census variable, household internet access, listing the question asked, its four permitted answers, the unit and the date, then three questions it cannot answer. They finish by taking a real measurement, the connection test from the free lesson, and comparing the two.' },
      { q: 'Does the census say internet in Dundalk is fast?', a: 'No. It records which kind of access each household reported, and 12,686 of 15,923 reported broadband. Speed, reliability and behaviour at busy times were not asked, so no figure here describes them.' },
      { q: 'How do you know our connection will work for a lesson?', a: 'We test it. The free lesson runs on the same video system, the same machine and the same hour as the course, and if it will not hold we say so before anything is paid.' },
      { q: 'What times are lessons taught?', a: 'After school, in the evenings and on weekend mornings. Our teachers work in India, ahead of Irish clocks by four and a half hours in summer and by five and a half once the clocks change, and the weekly hour is agreed in the free lesson.' },
      { q: 'Do you teach adults in Dundalk?', a: 'Yes, up to sixty-seven and from no experience whatever. The free lesson decides whether an adult joins a group at the same level or is taught one to one.' },
      { q: 'What if the household has no broadband?', a: 'Then we talk about what is possible rather than pretending. Some households manage on a mobile connection and some cannot, and the free lesson is where that gets established rather than guessed.' },
      { q: 'Is there a Modern Age Coders classroom in Dundalk?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Dundalk cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Dundalk',
    html: 'Down the coast is <a class="cg-inline-link" href="/best-coding-class-in-drogheda">Drogheda</a>, with <a class="cg-inline-link" href="/coding-classes-in-county-louth">County Louth</a> around both and the province of <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a> beyond. Our <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a> puts us beside other online schools, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dundalk, Louth and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-drogheda', label: 'Drogheda' },
    { href: '/coding-classes-in-county-louth', label: 'County Louth' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-dnk .cg-hero-grid { align-items: start; gap: clamp(1.09rem, 3.36vw, 2.47rem); }
.cg-root.cg-dnk .cg-hero h1 { font-weight: 700; letter-spacing: -0.0176em; line-height: 1.063; }
.cg-root.cg-dnk .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.13rem; }
.cg-root.cg-dnk .cg-eyebrow { letter-spacing: 0.169em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dnk .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.0136em; }
.cg-root.cg-dnk .cg-grid-3 { gap: clamp(1.07rem, 2.66vw, 2.13rem); }
.cg-root.cg-dnk .cg-table caption { letter-spacing: 0.036em; font-weight: 700; }
.cg-root.cg-dnk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dnk .cg-table td:last-child { color: var(--cg-muted); }
.cg-root.cg-dnk .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.04rem; }
.cg-root.cg-dnk .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Dundalk, the built-up area "Dundalk, Co Louth", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T15T2TOWN22, household internet access, total 15,923: broadband 12,686, other 310, no internet 1,454, not stated 1,473; the four answers sum to the 15,923 households. All-towns row of the same table: total 1,317,616 with broadband 1,083,309, other 24,119, none 95,677, not stated 114,511, giving 82.2, 1.8, 7.3 and 8.7 percent against Dundalk\'s 79.7, 1.9, 9.1 and 9.3 percent, all by our division. SAP2022T2T1TOWN22: usual residents 42,735, born in Ireland 31,283, United Kingdom 3,946, rest of world 3,719, other EU 2,821, Poland 629, India 337. SAP2022T11T4TOWN22: 17,180 working persons, 4,792 work from home at least some of the time, 10,164 never, 2,224 not stated. SAP2022T11T5TOWN22: 2,426 children under 15 in childcare, 1,053 aged 0 to 4 and 1,373 aged 5 to 14. Irish Rail, Dundalk (Clarke): "Carrickmacross Road Dundalk Co. Louth", "Eircode A91 TD61", "Monday to Sunday : 05.00 - 01:30", staffing "Monday to Sunday : 24/7", booking office open Monday to Saturday, "Ecofill Triple filtered water refill unit", "Spaces : 200", Wi-Fi listed as "No", routes including "Dublin - Dundalk commuter" and "DART and Dublin Commuter". An Tain Arts Centre: "An independent arts space in Dundalk, Co. Louth", "a venue with two theatres, a gallery, artist studios, a production house", "Crowe St, Townparks, Dundalk, Co. Louth, A91 W20C", "CRN: 537097".',
    localProject: 'A category is not a measurement. The census internet access table records one answer per household chosen from four, broadband, other, no internet and not stated, about the household rather than its occupants, on one day in April 2022. For Dundalk that gives 12,686 broadband of 15,923 households, 79.7 percent by our division, with 310 other, 1,454 none and 1,473 not stated, and the four rows sum exactly to the town total. What the variable cannot carry is speed, reliability, behaviour at busy times, indoor coverage, cost or whether the household would call the connection good, none of which the census asked, so the page makes no claim about internet performance in the town. Answering that would need measurements rather than categories, recorded speeds over time for identified locations, which we have not gathered. The learner writes a data dictionary for the one variable, the question asked, the four permitted answers, the unit, the date, then three questions it cannot answer with the data that could, and finally takes a measurement of their own, the connection test from our free lesson, comparing what it tells them with what the category does not. A second table on the page lists six candidate sentences and marks which three the table supports. New family for the cluster, chosen deliberately to avoid a fourth denominator lesson: measurement validity and proxy variables.',
    requiredMentions: [
      '42,735',
      '15,923',
      '12,686',
      '1,473',
      '310',
      '17,180',
      '4,792',
      '10,164',
      '2,426',
      '3,946',
      'A91 TD61',
      'A91 W20C'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T15T2TOWN22, household internet access, Dundalk, Co Louth: broadband 12,686, other 310, no internet 1,454, not stated 1,473, total 15,923. All-towns row: broadband 1,083,309, other 24,119, none 95,677, not stated 114,511, total 1,317,616.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T11T4TOWN22 and SAP2022T11T5TOWN22, Dundalk: usual residents 42,735, born in Ireland 31,283, born in the United Kingdom 3,946; 17,180 working persons with 4,792 working from home at least some of the time, 10,164 never and 2,224 not stated; 2,426 children under 15 in childcare, 1,053 aged 0 to 4 and 1,373 aged 5 to 14.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T4TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Dundalk (Clarke) station: "Carrickmacross Road Dundalk Co. Louth", "Eircode A91 TD61"; "Monday to Sunday : 05.00 - 01:30"; staffing "Monday to Sunday : 24/7"; "Ecofill Triple filtered water refill unit"; "Spaces : 200"; Wi-Fi and Internet Access listed as "No"; routes including "Dublin - Dundalk commuter" and "DART and Dublin Commuter".', url: 'https://www.irishrail.ie/en-ie/station/dundalk-clarke' },
      { claim: 'An Tain Arts Centre: "An Tain Arts Centre is an independent arts space in Dundalk, Co. Louth. We are a venue with two theatres, a gallery, artist studios, a production house"; "Crowe St, Townparks, Dundalk, Co. Louth, A91 W20C"; "CRN: 537097".', url: 'https://www.antain.ie/' }
    ],
    rejectedClaims: [
      'Any claim about internet speed, reliability or quality in Dundalk: the census recorded a reported category and we have measured nothing.',
      'Any reason for Dundalk sitting below the all-towns broadband share or above it on no internet access.',
      'Any comparison with an earlier census, since none is made on the page.',
      'Folding the 1,473 not-stated households into another row: the share is taken over all 15,923 and says so.',
      'Dundalk Institute of Technology\'s self-description and the county figures: the County Louth page owns both.',
      'The cross-border route listed on the station page: Northern Ireland is outside this cluster\'s scope and is not discussed.'
    ]
  }
};
