'use strict';
// Ashbourne (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Ashbourne, Co Meath", read 18 September 2026, Ashbourne
// Educate Together National School's own site and Meath County Council's own
// list of municipal districts. Spine: the biggest share is not a majority, and
// the leader depends on how the categories are grouped. Of 4,662 residents
// travelling to school, college or childcare, 1,833 walk, which leads the table
// at 39.3% and is nowhere near half; grouping car passenger with car driver
// gives 1,777, only 56 behind; grouping walking with cycling gives 2,214, a
// majority of the 4,395 who stated a mode. New to the cluster: plurality against
// majority, and how a grouping choice picks the winner. Meath owns Ashbourne's
// population 15,680 and the council eircode C15 Y291, so the usual-resident
// count is used and neither appears. No cause is offered for any share.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'ASHBOURNE', blurb: 'Walking leads the Ashbourne school run without winning a majority. A south Meath town, and the words most and most common.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-ashbourne',
  code: 'asb',
  accent: '#3E6B55',
  accentRationale: 'Ashbourne: a hedgerow green from the solver, held apart from the Meath county indigo and the other Leinster town accents',
  pageType: 'city',
  place: {
    name: 'Ashbourne',
    eyebrow: 'Ashbourne, County Meath',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Meath' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-meath', name: 'County Meath' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Meath', href: '/coding-classes-in-county-meath' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ashbourne, County Meath, Ireland',
  title: 'Best Coding Class in Ashbourne | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Ashbourne learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Ashbourne, with a project on why the biggest number in a census table is not the majority.',
  twitterDescription: 'Coding and AI classes for Ashbourne, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Ashbourne',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Ashbourne, County Meath, taught live in English.'
  },

  h1: 'Coding classes in Ashbourne',
  capsuleQ: 'What is the best coding class in Ashbourne?',
  capsule: 'Ashbourne has 15,543 usual residents in the Census 2022 town tables and 5,012 households, of which 4,554 report broadband. Every one of those addresses can be taught at, with no journey involved: two live video lessons in most weeks, taken either with nine other learners at the same stage at most, or alone with the teacher, at any age from six up to sixty-seven. Nothing is charged for the opening lesson. A group place then costs USD 100 monthly, and private teaching USD 150.',
  lead: 'Ashbourne\'s school run has a most common answer, and it is walking: 1,833 of the 4,662 residents travelling to school, college or childcare go on foot. Say that out loud and somebody will hear "most children in Ashbourne walk", which the figure does not support. It is 39.3% of the group, so six in ten do something else. Group the two car rows together and you get 1,777, just 56 behind the walkers. Group walking with cycling instead and you get 2,214, which is more than half of everyone who stated a mode. Three groupings, three different answers, all from one column of published counts. Deciding what to group before looking at who wins is the whole discipline, and it is what this page teaches with the town\'s own figures.',
  wa: 'Hello Modern Age Coders, I want to arrange a free coding lesson for a learner in Ashbourne.',

  picks: {
    eyebrow: 'Course picks for Ashbourne',
    h2: 'First courses for Ashbourne learners',
    intro: 'Pick by age and by interest. The free lesson is taught by the course teacher and it sets the level.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with sorting and counting, where grouping things differently visibly changes the answer.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Fractions, shares and comparisons written as code, tested against real published counts.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Python over census tables, including how a category definition decides a result.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who present shares and segments and need them to survive a second look.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Biggest is not most',
      intro: 'The 4,662 Ashbourne residents travelling to school, college or childcare, by the main means each reported. Counts are published; groupings and shares are ours, and 267 did not state a mode.',
      body: [
        { kind: 'table', caption: 'Travel to school, college or childcare, Ashbourne, April 2022', head: ['Mode as published', 'Residents', 'Share of all 4,662', 'Share of the 4,395 who stated'], rows: [
          ['On foot', '1,833', '39.3%', '41.7%'],
          ['Car passenger', '1,667', '35.8%', '37.9%'],
          ['Bicycle', '381', '8.2%', '8.7%'],
          ['Bus, minibus or coach', '369', '7.9%', '8.4%'],
          ['Car driver', '110', '2.4%', '2.5%'],
          ['Train, DART or Luas', '10', '0.2%', '0.2%'],
          ['Not stated', '267', '5.7%', 'Excluded']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A plurality, not a majority', p: 'Walking leads every other single mode and still accounts for well under half. The English word that fits 1,833 out of 4,662 is most common, not most, and swapping one for the other turns a true sentence into a false one.' },
          { h3: 'Grouping decides the winner', p: 'Treat car passenger and car driver as one category and travelling by car reaches 1,777, within 56 of walking. Treat walking and cycling as one and active travel reaches 2,214, which is 50.4% of the 4,395 stated answers and a genuine majority of them.' },
          { h3: 'One answer each', p: 'This table records each person\'s main means of travel, not everything they use. A learner driven on wet mornings and walking otherwise appears once, under whichever they gave, so none of these rows counts how many people ever use that mode.' }
        ] },
        { kind: 'callout', h3: 'Where the same move gets made', p: 'A favourite product at 31% becomes "what most customers want". A leading browser at 42% becomes "the majority of users". Two payment methods stay separate in one chart and get merged in the next, and the ranking quietly changes with them. None of this requires bad faith; it happens because the grouping is decided after the numbers are seen, and whichever grouping tells the better story is the one that gets published. Writing the categories down first, before running the counts, is the cheapest safeguard in data work and one of the least used.',
        },
        { kind: 'p', text: 'The project is short and has a rule attached. The learner writes the category definitions first, in a comment at the top of the file, then counts: single modes, then a car group, then an active travel group, printing each with the denominator used. The output must state whether each leader is a plurality or a majority, and the final check is arithmetic: 1,833 plus 1,667 plus 381 plus 369 plus 110 plus 10 plus the smaller rows and the 267 not stated come back to the published 4,662, so nothing has been lost or double counted along the way.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Ashbourne in the town tables',
      h2: 'The town as the census counted it',
      intro: 'Figures published for the built-up area Ashbourne, Co Meath, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Ashbourne, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '15,543'],
          ['Households', '5,012'],
          ['Households with a broadband connection', '4,554'],
          ['Working residents in the travel table', '7,532'],
          ['Working residents who drive', '4,362'],
          ['Children under fifteen in childcare', '1,377']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The adult commute', p: 'Among working residents, 4,362 drive, 857 give home as their main answer, 676 take a bus, 598 walk, 395 travel by van and 79 cycle.' },
          { h3: 'Fourteen rail journeys', p: 'Fourteen working residents give train, DART or Luas as their main means. The table records the mode, not where a journey begins, so nothing here says how any of them reach a train, and we do not guess.' },
          { h3: 'Broadband', p: 'Broadband reaches about 90.9% of the town\'s households by our arithmetic, with 151 recording no internet access, 76 another kind of connection and 231 not stating.' }
        ] },
        { kind: 'spec', title: 'A school in the town', p: 'Ashbourne Educate Together National School gives its address as Killegland, Ashbourne, Co. Meath, A84 A4X6, with roll number 20396Q, and describes itself on its own site as a school of over 400 children with 16 mainstream classrooms and two special classes, co-educational, equality based and child centred under Educate Together patronage. We have no connection with it, and our lessons sit outside the school day.' }
      ]
    },
    {
      id: 'groups', tint: 'tint', eyebrow: 'The same trick with a bigger table',
      h2: 'Comparing with all towns combined',
      intro: 'The Ashbourne school, college and childcare shares beside the same rows for every census town added together. All shares here are out of the full group total, ours by division.',
      body: [
        { kind: 'table', caption: 'Ashbourne against all towns combined', head: ['Mode', 'Ashbourne share', 'All towns combined'], rows: [
          ['On foot', '39.3%', '28.3%'],
          ['Car passenger', '35.8%', '39.6%'],
          ['Bicycle', '8.2%', '3.7%'],
          ['Bus, minibus or coach', '7.9%', '13.0%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The order differs', p: 'Across all towns combined the car passenger row leads and walking is second. In Ashbourne those two swap, by 166 journeys. A league table of towns built on that ordering would be describing a gap of that size.' },
          { h3: 'Still no reason given', p: 'Why the shares differ is not in these tables, so this page does not say. Distance, footpaths, school locations and household choices are all candidates and none of them is measured here.' },
          { h3: 'What the comparison is worth', p: 'It puts the local figure in scale, which is exactly what a single town number cannot do on its own. That is the only claim made for it.' }
        ] },
        { kind: 'spec', title: 'A district named after the town', p: 'Meath County Council lists an Ashbourne Municipal District among the districts on its own site, alongside Laytown-Bettystown, Kells, Ratoath, Trim and Navan. The town gives its name to an administrative area larger than the built-up area counted above, which is worth knowing before any figure is attached to the word Ashbourne.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Ashbourne',
      h2: 'What lessons look like here',
      intro: 'A slot in the week, a teacher who is present, and work pitched where the learner actually is.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary age', p: 'Block coding and first projects for children who are still in primary school, at a pace that suits the age.' },
          { h3: 'Secondary age', p: 'Python, sites that actually run and AI work, carried from first year through Transition Year and on into the exam years.' },
          { h3: 'Adults', p: 'Data, Python and AI for adults, including the 857 working residents whose main answer to the travel question is home.' }
        ] },
        { kind: 'p', text: 'We are not connected to Ashbourne Educate Together National School, Meath County Council or any other body named here; each is quoted from its own published page. Counts on this page are Central Statistics Office Census 2022 figures for the built-up area, reproduced without change. Every share is our own division and every grouping of two or more published rows is described as ours at the point where it appears, with the denominator stated, because on this page those choices are the subject rather than a detail.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From grouping to defining',
    intro: 'Ages are a guide only; the free lesson decides the starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Sorting into boxes', p: 'Grouping and counting in block code, and seeing the total change when the boxes change.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Half, most, biggest', p: 'Fractions and shares in Python, with the vocabulary to say which is which.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Defining first', p: 'Writing category definitions before counting, then reporting results against them.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Segments that hold', p: 'Building groupings for work that a colleague can check and reproduce months later.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask a model how most Ashbourne children get to school',
    intro: 'The word most will come back, attached to the largest row.',
    p1: 'Assistants answer the question they were asked with the numbers they were given. Hand over this table and ask about most children and the reply will name walking, because walking has the biggest count, and the distinction between leading and exceeding half will usually go unmentioned. Ask again with the car rows combined and the same model will happily name cars instead.',
    p2: 'A learner who has done this project asks in the right order: what are the categories, what is the denominator, and is the leader over half. They will also notice that a tool can be steered to either answer, which is a useful thing to know before quoting one.',
    closer: 'Getting a number out of a machine is now trivial. Choosing the categories it counts is still the human job, and it decides what the number means.',
    blogAnchor: 'why coding still repays the effort'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'The practical arrangements',
    intro: 'Six lines of logistics.',
    cells: [
      { h3: 'Teaching in real time', p: 'A teacher is on the call throughout, reacting to the learner\'s own work rather than playing a recording.' },
      { h3: 'Groups of five to ten', p: 'Formed by level rather than by age or address, with learners joining from Ireland and further afield.' },
      { h3: 'Two lessons most weeks', p: 'About eight a month, at an hour the household chooses at the start and then keeps.' },
      { h3: 'Terms and exams', p: 'Mid-terms, holidays and exam weeks are planned in when the slot is agreed.' },
      { h3: 'What to have ready', p: 'A desktop or laptop, working sound both ways, and a connection that holds video. Checked in the free lesson.' },
      { h3: 'One to one when needed', p: 'If nothing at that stage is scheduled at an hour which works for the household, the same course is taught privately instead.' }
    ],
    spec: { title: 'The journey nobody makes', p: 'In a town where 1,833 young people walk to school and 4,362 adults drive to work, the coding lesson is the appointment that needs no route, no lift and no timetable.' }
  },

  fees: {
    h2: 'Ashbourne class fees',
    intro: 'Three lines, and that is the whole of it.',
    first: 'The first lesson in full, taught and assessed, with nothing to pay and nothing owed afterwards.',
    group: 'A month in an ability group of five to ten, around eight live lessons.',
    private: 'A month of one to one teaching on the same weekly rhythm.',
    closer: 'We charge monthly in US dollars at the one rate that applies to every family outside India, so Ashbourne sees the same figure as Bray or Naas and there is no second list in euro. The first payment falls due only after the free lesson has settled a course and an hour, and breaks, missed weeks and changes between group and private teaching are all described on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from our families, unaltered',

  book: {
    h2: 'Book a free Ashbourne lesson',
    intro: 'Send the learner\'s age and what they are interested in. We build the first hour from that, whether it becomes a game, a small Python program or a table that answers differently depending on how you group it.',
    success: 'Thank you. We will be in touch shortly about the Ashbourne lesson.'
  },

  faq: {
    h2: 'Ashbourne coding class questions',
    intro: 'The questions we get from Ashbourne households.',
    items: [
      { q: 'How many people live in Ashbourne?', a: 'The Census 2022 small area tables count 15,543 usual residents in the built-up area of Ashbourne, in 5,012 households. Our Meath page quotes the census town list, which counts the town on a slightly different basis, and the council also runs a larger Ashbourne Municipal District.' },
      { q: 'What is the Ashbourne data project?', a: 'Learners take the town\'s school travel column, define their categories before counting, and show that walking leads at 1,833 of 4,662 without being a majority, that grouping the two car rows gives 1,777, and that grouping walking with cycling gives 2,214, which is a majority of those who stated a mode.' },
      { q: 'What is the difference between most and most common?', a: 'Most common means bigger than every other single option. Most means more than half. In Ashbourne walking is the most common way to school, college or childcare at 39.3%, and it is not most.' },
      { q: 'How do adults in Ashbourne get to work?', a: 'Of the 7,532 working residents in the travel table, 4,362 drive, 857 give working mainly at or from home, 676 take a bus, 598 walk, 395 use a van, 79 cycle and 14 take a train, DART or Luas.' },
      { q: 'What hours do you teach?', a: 'Late afternoons, evenings and weekend mornings. Irish clocks sit behind our teachers in India, by four and a half hours while summer time is in force and five and a half after it ends, so a workable weekly slot is picked together during the free lesson.' },
      { q: 'Can an adult in Ashbourne start from scratch?', a: 'Yes. Learners here run to sixty-seven, and the free lesson places a complete beginner either in a group at the same level or with a teacher one to one.' },
      { q: 'How quickly can a learner start?', a: 'Usually within a week or two of the free lesson, depending on which group at the right level has a place at a workable hour.' },
      { q: 'Is there a Modern Age Coders classroom in Ashbourne?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Ashbourne cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Ashbourne',
    html: 'The county page for <a class="cg-inline-link" href="/coding-classes-in-county-meath">County Meath</a> covers the towns inland, <a class="cg-inline-link" href="/coding-classes-in-fingal">Fingal</a> and <a class="cg-inline-link" href="/best-coding-class-in-swords">Swords</a> lie across the boundary to the east, and all of it sits inside <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. Our <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a> puts us beside other online schools, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ashbourne, Meath and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-meath', label: 'County Meath' },
    { href: '/best-coding-class-in-swords', label: 'Swords' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-asb .cg-hero-grid { align-items: start; gap: clamp(1.04rem, 3.41vw, 2.49rem); }
.cg-root.cg-asb .cg-hero h1 { font-weight: 700; letter-spacing: -0.0181em; line-height: 1.059; }
.cg-root.cg-asb .cg-capsule { border-left: 8px solid var(--cg-accent); padding-left: 1.26rem; }
.cg-root.cg-asb .cg-eyebrow { letter-spacing: 0.152em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-asb .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.0109em; }
.cg-root.cg-asb .cg-grid-3 { gap: clamp(0.99rem, 2.51vw, 1.98rem); }
.cg-root.cg-asb .cg-table caption { letter-spacing: 0.044em; font-weight: 700; }
.cg-root.cg-asb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-asb .cg-table th { border-bottom: 3px solid var(--cg-accent); }
.cg-root.cg-asb .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.13rem; }
.cg-root.cg-asb .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Ashbourne, the built-up area "Ashbourne, Co Meath", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T11T1TOWN22, to school, college or childcare, total 4,662: on foot 1,833, car passenger 1,667, bicycle 381, bus minibus or coach 369, not stated 267, car driver 110, work mainly at or from home 16, train DART or Luas 10, motorcycle 4, other including lorry 4, van 1. Our groupings on that column: car passenger plus car driver 1,777; on foot plus bicycle 2,214; stated total 4,395; shares 39.3 and 41.7 percent for walking, 38.1 and 40.4 percent for the car group, 47.5 and 50.4 percent for the active travel group. All-towns row of the same table for comparison: on foot 260,527, car passenger 364,345, bicycle 34,354, bus 119,288 of 921,076, giving 28.3, 39.6, 3.7 and 13.0 percent. To work, total 7,532: car driver 4,362, work mainly at or from home 857, bus 676, on foot 598, van 395, car passenger 271, bicycle 79, motorcycle 38, train DART or Luas 14, other including lorry 14, not stated 228. SAP2022T2T1TOWN22: usual residents 15,543, born in Ireland 11,545, other EU 1,434, rest of world 1,281, Poland 596, United Kingdom 515, India 172. SAP2022T15T2TOWN22: households 5,012, broadband 4,554, other 76, none 151, not stated 231. SAP2022T11T4TOWN22: 7,532 working persons, 2,510 work from home at least some of the time, 4,513 never, 509 not stated. SAP2022T11T5TOWN22: 1,377 children under 15 in childcare, 595 aged 0 to 4 and 782 aged 5 to 14. SAP2022T8T1TOWN22: at work 7,594, students 1,143, retired 1,152, total aged 15 and over 11,575. Ashbourne Educate Together National School: "Ashbourne ETNS, Killegland, Ashbourne, Co. Meath, A84 A4X6", "Roll number: 20396Q", "over 400 children", "16 mainstream classrooms and 2 special classes", "co-educational, equality based, child-centred and democratically run school" under Educate Together patronage. Meath County Council, own site navigation: municipal districts listed as Laytown-Bettystown, Ashbourne, Kells, Ratoath, Trim and Navan.',
    localProject: 'Biggest is not most. In the Ashbourne travel table, 1,833 of the 4,662 residents travelling to school, college or childcare walk, which leads every other single mode and is 39.3 percent of the group, or 41.7 percent of the 4,395 who stated a mode, by our arithmetic. Grouping car passenger with car driver gives 1,777, within 56 of walking. Grouping walking with cycling gives 2,214, which is 50.4 percent of stated answers and therefore a real majority. Three groupings of one published column produce three different leaders, so the page teaches writing the category definitions before counting, always naming the denominator, and distinguishing a plurality from a majority in words. It also states that the table records one main means per person, so no row counts how many people ever use that mode, and it closes with an arithmetic check that every row including the 267 not stated returns the published 4,662. The all-towns row is used for scale, where car passenger leads at 39.6 percent and walking is second at 28.3, the reverse of the Ashbourne order. No cause is offered for any difference. New to the cluster: plurality against majority, and grouping choices deciding a result.',
    requiredMentions: [
      '15,543',
      '5,012',
      '4,554',
      '4,362',
      '4,662',
      '1,833',
      '1,777',
      '2,214',
      '381',
      '676',
      '857',
      'A84 A4X6'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, means of travel, Ashbourne, Co Meath: to school, college or childcare total 4,662 with on foot 1,833, car passenger 1,667, bicycle 381, bus 369, not stated 267, car driver 110, train 10; to work total 7,532 with car driver 4,362, mainly at or from home 857, bus 676, on foot 598, van 395, car passenger 271, bicycle 79, train 14, not stated 228. All-towns row: on foot 260,527, car passenger 364,345, bicycle 34,354, bus 119,288 of 921,076.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T8T1TOWN22, Ashbourne: usual residents 15,543, born in Ireland 11,545; households 5,012, broadband 4,554, no internet 151, not stated 231; 2,510 work from home at least some of the time, 4,513 never, 509 not stated; 1,377 children under 15 in childcare; students 1,143, retired 1,152.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'Ashbourne Educate Together National School: "Ashbourne ETNS, Killegland, Ashbourne, Co. Meath, A84 A4X6"; "Roll number: 20396Q"; "over 400 children"; "16 mainstream classrooms and 2 special classes"; "co-educational, equality based, child-centred and democratically run school".', url: 'https://ashbourneetns.ie/' },
      { claim: 'Meath County Council, own site: municipal districts listed as Laytown-Bettystown, Ashbourne, Kells, Ratoath, Trim and Navan.', url: 'https://www.meath.ie/council/your-council/your-elected-council/municipal-district-meetings/ashbourne-municipal-district-meetings' }
    ],
    rejectedClaims: [
      'Any sentence saying most Ashbourne children walk to school: 1,833 of 4,662 is a plurality of 39.3 percent, not a majority.',
      'Any reason for the town\'s walking, cycling or bus shares, or for the gap against all towns combined.',
      'Any inference about how the fourteen rail commuters reach a train, or about stations near the town: the table records the mode only.',
      'Any claim that a row counts people who use that mode: the table records one main means per person.',
      'The census town-list population of Ashbourne and the Meath County Council eircode: the County Meath page owns both.',
      'A figure for the Ashbourne Municipal District: the district is named as an administrative area only, with no population attached.'
    ]
  }
};
