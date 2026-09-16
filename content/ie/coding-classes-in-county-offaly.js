'use strict';
// County Offaly (cg- county page, Ireland cluster, Phase 4). Spine: resolution
// depends on the instrument. The CSO's annual internet survey reports household
// connectivity no finer than the four-county Midland region, and this page first
// said, wrongly, that no Offaly figure therefore existed. Census 2022 table
// SAP2022T15T2CTY publishes household internet access for every county, and
// also by town, electoral division and small area: in Offaly 21,841 of 28,702
// households had broadband. Corrected 17 September 2026, and the correction is
// now the lesson: ask more than one instrument before writing that a figure does
// not exist. Two real limits remain: no single county density figure in the
// tables checked, and seven council dataset records that resolve to web pages.
// Birr's Great Telescope gives the image. NOT USED: the Portarlington straddle
// as a project (Louth and Carlow own it). Facts read at primary sources on
// 16 and 17 September 2026: the Offaly Summary, Profile 1, 5, 7 and 8 press
// statements; PxStat F1013, F1015, F1016 and SAP2022T15T2CTY; the CSO internet
// coverage release; gov.ie's January 2018 list; birrcastle.com; offaly.ie;
// data.gov.ie.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY OFFALY', blurb: 'Tullamore, Birr and the midlands, with a project on checking a second source before saying a figure does not exist.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-offaly',
  code: 'ofy',
  accent: '#3B5E1C',
  accentRationale: 'County Offaly: a midland green from the solver, kept apart from the greens used on the western county pages',
  pageType: 'governorate',
  place: {
    name: 'County Offaly',
    eyebrow: 'County Offaly, Leinster',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-westmeath', name: 'County Westmeath' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Westmeath', href: '/coding-classes-in-county-westmeath' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'County Offaly, Ireland',
  title: 'Coding Classes in County Offaly | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Offaly, from Tullamore and Birr to Edenderry, Clara and Banagher, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for County Offaly, with a project on why one official source stops at the region while another reaches individual neighbourhoods.',
  twitterDescription: 'Coding classes across County Offaly, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '17 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Offaly Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Offaly, taught live in English.'
  },

  h1: 'Coding classes in County Offaly',
  capsuleQ: 'What are the best coding classes in County Offaly?',
  capsule: 'There are 83,150 people in County Offaly and 17,167 of them are aged 15 or under. Tullamore is the county town with 15,598 residents, Birr is next with 4,726, and the rest of the county lives in smaller places between the two. Nearly 21,000 people here drive to work and their journeys are among the longer ones in the country. What we run is simple: live classes, one fixed hour a week, ability groups of five to ten or one to one, from age six to sixty-seven. Try the first lesson at no cost, then a group place is USD 100 a month, a private one USD 150.',
  lead: 'For seventy years the largest telescope on earth stood in Birr, and everything a telescope does comes down to resolution: how small a thing it can separate from the thing beside it. Statistics has the same limit, and it depends on the instrument. The figure we most wanted here was the share of Offaly homes with broadband, since our classes need a connection. The source most often quoted, the statistics office\'s annual internet survey, reports no finer than the Midland region, four counties at once, and this page once said that no Offaly figure therefore existed. That was wrong. The census is a different instrument, and it publishes internet access for every county, town and small neighbourhood: in Offaly, 21,841 of 28,702 households had broadband in April 2022. The data was not missing. We had asked only one instrument.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Offaly.',

  picks: {
    eyebrow: 'Course picks for County Offaly',
    h2: 'Four starting points',
    intro: 'Every one opens with a free lesson taught by the teacher who would take the course. No card details are collected before a family has decided.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects that zoom in and out, where what you can see depends on how close you are.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python, plus the difference between a fact about a group and a fact about one person in it.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Working out which questions the available data can answer, and which need a finer measurement than exists.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults asked for a local number when only a national one has been published.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'One question, two instruments',
      intro: 'Household internet in Offaly, asked of two official sources, alongside two limits that are genuinely real.',
      body: [
        { kind: 'table', caption: 'What we wanted for Offaly, and where it actually exists', head: ['The question', 'Annual internet survey', 'Census 2022'], rows: [
          ['Households on broadband', 'Midland region only, 82% on fixed broadband in 2023', 'Offaly itself: 21,841 of 28,702 households, about 76% by our arithmetic'],
          ['Households with no internet', 'Not published for Offaly', '3,413 households, with a further 2,063 not stating'],
          ['Finest geography reached', 'NUTS3 region, four counties together', 'County, town, electoral division and small area'],
          ['Population density', 'Not covered', 'No single county figure in the tables we checked, only towns and electoral areas'],
          ['Town populations', 'Not covered', 'Built-up areas one row each, with Portarlington spanning Laois and Offaly']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The mistake with a name', p: 'Taking a fact about a large area and applying it to a small one inside it. The census shows the cost plainly: across the State about 79% of households had broadband, in Offaly about 76%, both by our arithmetic on the published counts. Quote the national figure for Offaly and you overstate it with a number that is perfectly true of somewhere else.' },
          { h3: 'The mistake we made first', p: 'Stopping at the first source. The annual survey is the one most articles cite and it genuinely stops at the region, which made it sound true that no county figure existed. That was only ever true of the survey.' },
          { h3: 'What a learner produces', p: 'A table like the one above: the question, each source asked, the finest geography each reaches, and the year and method behind each figure. A survey sample from 2023 and a full count from 2022 giving different numbers is not a contradiction once that is written down.' }
        ] },
        { kind: 'callout', h3: 'Why a telescope is the right way to think about it', p: 'Birr Castle Demesne still holds the Great Telescope, which its owners describe as having remained the largest reflecting telescope in the world for over seventy years. A small telescope shows a bright smudge where a bigger one shows two separate stars. Neither is lying; they differ in resolution. The regional internet survey is the smaller instrument, a four-county smudge. The census is the bigger one, and it separates Offaly from Laois, Tullamore from Birr and one neighbourhood from the next. Before anyone writes that a detail cannot be seen, they should check whether a bigger telescope has already been pointed at it.' },
        { kind: 'p', text: 'The county\'s own data adds a smaller version of the same lesson. Offaly County Council has seven dataset records on the national portal, all licensed for reuse, and we checked every one through the catalogue interface. All seven point at an ordinary web page rather than a file you could open. Seven records, zero files. That is not a complaint, it is a measurement, and it is exactly the sort of thing a learner should be able to establish for themselves in ten minutes rather than assume in either direction.' }
      ]
    },
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Two towns and the country between them',
      intro: 'Quoted from national statistics releases that name Offaly.',
      body: [
        { kind: 'table', caption: 'County Offaly at the 2022 census', head: ['Counted', 'Number'], rows: [
          ['People in the county', '83,150, up 5,189 since 2016'],
          ['Children aged 15 and under', '17,167'],
          ['Of those, in childcare', '5,623, or 33%, the same share as nationally'],
          ['Average age', '39 years, against a national 38.8'],
          ['Born in the county', '40,155 people, 49% of residents'],
          ['Holding dual Irish citizenship', '1,972, up from 1,130 in 2016'],
          ['Able to speak Irish, aged three and over', '28,231, up by more than 400, or 37.3% of that group']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Tullamore', p: '15,598 people over 10.9 square kilometres, an average age of 38.1 and 20.9% of residents under 15, which makes it one of the younger towns in the midlands.' },
          { h3: 'Birr', p: '4,726 people over 6.4 square kilometres at a much lower density of 738.1, with an average age of 39.8 and 18.9% under 15.' },
          { h3: 'The areas behind the names', p: 'As electoral areas, Tullamore covers 30,958 people and Birr 27,004. Both are several times the towns they are named after, which is the same resolution problem in a different costume.' }
        ] },
        { kind: 'p', text: 'Among towns of at least 500 people, Daingean has the youngest average age at 35.5 years and Shinrone the oldest at 43.7. Non-Irish citizens make up 9% of the county, the largest groups being Polish at 1,560, UK at 990, Lithuanian at 883 and Romanian at 612. One further labelling note, since this page is about exactly that: the statistics office records Portarlington as a single town spanning Laois and Offaly, so adding up Offaly town rows without noticing will pull in residents of another county.' }
      ]
    },
    {
      id: 'work', tint: 'tint', eyebrow: 'Work, school and the road',
      h2: 'Long journeys, and no school on the first list',
      intro: 'Two facts about Offaly that bear directly on how a family can fit a class into a week.',
      body: [
        { kind: 'table', caption: 'Working and travelling in Offaly, Census 2022', head: ['Measured', 'Count'], rows: [
          ['People at work', '35,248, an increase of 4,961 or 16% since 2016'],
          ['Unemployment rate', '9%, down from 16% in 2016'],
          ['Driving to work', '21,143'],
          ['Walking and cycling', '2,367 and 504'],
          ['Average journey time', '30.2 minutes, up from 28.9 minutes in 2016'],
          ['Working from home at least one day a week', '8,324 people, 24% of the workforce against 32% nationally']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Half an hour each way', p: 'An average commute of 30.2 minutes is among the longer ones in the country. For a parent, adding an evening run to Tullamore and back on top of that is not a small request.' },
          { h3: 'The 2018 list', p: 'No Offaly school appears on the forty-school first-phase list for Leaving Certificate Computer Science. We re-parsed the published table row by row to be sure of it. That describes 2018 and nothing about any school now.' },
          { h3: 'Third level', p: 'Nearly 20,200 people in the county hold a third level qualification, up from almost 15,500 in 2016, which is 37% against 45% nationally.' }
        ] },
        { kind: 'spec', title: 'The honest version of our own argument', p: 'We would like to tell you that Offaly homes are well connected, because that is what makes our classes possible. The census gives the honest picture: in April 2022, 21,841 of the county\'s 28,702 households had broadband, 1,385 had another kind of connection, 3,413 had no internet at all and 2,063 did not say. By our arithmetic that is about 76% on broadband, a little below the national share. Whether a particular house outside Banagher is one of the connected ones is exactly what the free lesson finds out, before anybody pays anything.' }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Two Offaly addresses',
      h2: 'Quoted from the people who own them',
      intro: 'Both checked on the organisation\'s own site rather than taken from a directory.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Birr Castle Demesne', p: 'Its own site gives the address as Rosse Row, Birr, County Offaly, eircode R42 VO27, and describes 120 acres of parkland with over 5,000 species of trees and plants.' },
          { h3: 'The Great Telescope', p: 'The same site records that the reflecting telescope there remained the largest in the world for over seventy years, which is why this page borrowed it to explain resolution.' },
          { h3: 'The county council', p: 'Offaly County Council publishes its own address as Aras an Chontae, Charleville Road, Tullamore, eircode R35 F893.' }
        ] },
        { kind: 'p', text: 'We are not connected with Offaly County Council, Birr Castle Demesne or any school mentioned here. Population, work and education figures are quoted from Central Statistics Office releases naming Offaly; household internet figures come from the census table of internet access by county, any regional survey figure is labelled as regional, and every percentage is marked as our own arithmetic; the count of seven dataset records resolving to web pages rather than files is our own, made through the national portal\'s catalogue interface; and the absence of an Offaly school from the 2018 list comes from re-reading that published table in full.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From zooming in to naming the limit',
    intro: 'Ages guide the grouping; the free lesson decides it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Near and far', p: 'Programs where detail appears and disappears depending on how close you look.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Groups and individuals', p: 'Why a fact about a class of thirty says little about any one pupil in it.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Matching question to data', p: 'Finding the finest geography a figure exists at, and writing what it does and does not support.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Answering anyway', p: 'Giving a useful answer from coarse data without overclaiming, which is most of professional analysis.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask for the Offaly broadband figure and you may be given the wrong one',
    intro: 'Often the regional survey number, relabelled, while the real county figure sits in a different table.',
    p1: 'The survey figure is the one quoted most, so it is the one most likely to come back, with the region\'s name quietly swapped for the county\'s. That is not quite a lie. It is a statistic reported at a finer resolution than it was measured at, while the census figure that actually describes Offaly goes unmentioned because fewer people have repeated it.',
    p2: 'A learner who has done this project asks two questions before repeating any local figure: what area does this number really cover, and does another source measure this place directly. We had to ask the second question ourselves, and the answer changed what this page says.',
    closer: 'Knowing the limits of your instrument is not a small technical point. In Birr of all places, it is the whole tradition.',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How it works from Edenderry to Banagher',
    intro: 'Six practical points, none of them buried.',
    cells: [
      { h3: 'Taught live by a person', p: 'A teacher for the full hour who expects the learner to speak, not a video with a comment box.' },
      { h3: 'Nothing to drive to', p: 'With commutes here averaging over half an hour, the journey a class does not require is the reason it survives past February.' },
      { h3: 'Grouped by ability', p: 'Five to ten learners working at one level, gathered from Offaly and several other countries so a real peer group exists.' },
      { h3: 'What you need', p: 'A laptop or desktop, sound that works and a connection steady enough for video. The free lesson tests exactly that.' },
      { h3: 'Built around Irish terms', p: 'Junior Cycle, Transition Year and senior cycle, with mid-terms and exam weeks planned for in advance.' },
      { h3: 'Hours that work here', p: 'Afternoons, evenings and weekend mornings, taught by a team several hours ahead of Irish time, which is what keeps those slots staffed.' }
    ],
    spec: { title: 'For families between the towns', p: 'Offaly has two towns of any size and a great deal of country between and beyond them. Clara, Ferbane, Kilcormac, Daingean and Shinrone are each a real drive from Tullamore, and 21,143 people in this county are already making a daily drive. A class that arrives at the kitchen table instead is not a lesser version of the thing. For most of this county it is the only version that fits a school week.' }
  },

  fees: {
    h2: 'What it costs in Offaly',
    intro: 'Three numbers and the conditions in plain sight.',
    first: 'A complete opening lesson at no charge, which also proves the connection works.',
    group: 'A month of group classes, around eight lessons, five to ten learners at one level.',
    private: 'A month of one to one teaching on the same weekly rhythm.',
    closer: 'We charge monthly in US dollars, the single rate used outside India, so a family in Birr pays what a family in Tullamore pays and no euro list exists alongside it. Nothing is charged until a course and an hour have been agreed. Pauses, missed lessons and changes of format are all written down on the pricing page instead of being discovered later.'
  },

  reviewsH2: 'Six Google reviews left by our families, printed as written',

  book: {
    h2: 'Try the first lesson',
    intro: 'Send the learner\'s age and what interests them. We build the first hour around it, and for a family who is unsure about their connection, that hour answers the question better than any published statistic could.',
    success: 'Thank you. Somebody will be in touch about your County Offaly class shortly.'
  },

  faq: {
    h2: 'County Offaly coding class questions',
    intro: 'What Offaly families ask us first.',
    items: [
      { q: 'How many people live in County Offaly?', a: 'The 2022 census recorded 83,150, an increase of 5,189 on 2016, including 17,167 children aged 15 and under.' },
      { q: 'Is broadband good enough in Offaly for live classes?', a: 'The census gives a county answer: in April 2022, 21,841 of Offaly\'s 28,702 households had broadband and 3,413 had no internet. Your own connection is what matters, and the free lesson tests it directly.' },
      { q: 'What is the Offaly data project?', a: 'Students ask the same question of two official sources, find that one stops at the region while the census reaches individual neighbourhoods, and learn to name the source, year and area behind every figure they quote.' },
      { q: 'How big are Tullamore and Birr?', a: 'Tullamore held 15,598 people in 2022 and Birr 4,726. The electoral areas named after them are much larger at 30,958 and 27,004, because they take in the countryside around each town.' },
      { q: 'Did an Offaly school offer Leaving Certificate Computer Science from the start?', a: 'No Offaly school appears on the forty-school first-phase list published in January 2018. We re-read the published table row by row. That is a statement about 2018, not about schools today.' },
      { q: 'Do you teach children outside Tullamore?', a: 'Yes, and it changes nothing about the class. Edenderry, Clara, Ferbane, Kilcormac and Banagher all get the same teacher at the same hour as anywhere else.' },
      { q: 'When do classes run?', a: 'Afternoons, evenings and weekend mornings, at a slot agreed in the free lesson. Our teaching team works several hours ahead of Irish time, which makes those hours easy to staff.' },
      { q: 'Is there a Modern Age Coders classroom in County Offaly?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do County Offaly coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The midlands and beyond',
    html: 'Offaly\'s neighbours with pages of their own include <a class="cg-inline-link" href="/coding-classes-in-county-westmeath">County Westmeath</a>, <a class="cg-inline-link" href="/coding-classes-in-county-laois">County Laois</a>, <a class="cg-inline-link" href="/coding-classes-in-county-tipperary">County Tipperary</a> and <a class="cg-inline-link" href="/coding-classes-in-county-galway">County Galway</a>. To compare online schools, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>. Everything else is indexed on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Offaly and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-westmeath', label: 'County Westmeath' },
    { href: '/coding-classes-in-county-laois', label: 'County Laois' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-ofy .cg-hero-grid { align-items: start; gap: clamp(1.07rem, 3.27vw, 2.72rem); }
.cg-root.cg-ofy .cg-hero h1 { font-weight: 700; letter-spacing: -0.0198em; line-height: 1.059; }
.cg-root.cg-ofy .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.19rem; }
.cg-root.cg-ofy .cg-eyebrow { letter-spacing: 0.152em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ofy .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.0119em; }
.cg-root.cg-ofy .cg-grid-3 { gap: clamp(1.09rem, 2.59vw, 2.06rem); }
.cg-root.cg-ofy .cg-table caption { letter-spacing: 0.026em; font-weight: 700; }
.cg-root.cg-ofy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ofy .cg-table td:last-child { color: inherit; }
.cg-root.cg-ofy .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.17rem; }
.cg-root.cg-ofy .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'County Offaly, whose council area is the county, Census 2022 (CSO Offaly releases): population 83,150, up 5,189 (7 percent) since 2016; average age 39 against 37.2 in 2016 and a national 38.8; 17,167 children aged 15 and under, of whom 5,623 (33 percent) were in childcare, the same share as nationally. Birthplace: 40,155 people (49 percent) born in the county, 30,601 (37 percent) elsewhere in the State and 11,881 (14 percent) outside the State, up from 12 percent in 2016. Towns: Tullamore 15,598 at 1,426.8 per sq km over 10.9 sq km, average age 38.1 with 20.9 percent under 15; Birr 4,726 at 738.1 over 6.4 sq km, average age 39.8 with 18.9 percent under 15. Local electoral areas: Tullamore 30,958 and Birr 27,004. Among towns of at least 500 people, Daingean is youngest at average age 35.5 and Shinrone oldest at 43.7. Citizenship: non-Irish citizens 9 percent of the county, largest groups Polish 1,560, UK 990, Lithuanian 883, Romanian 612; dual Irish citizens up from 1,130 in 2016 to 1,972. Work and travel: 35,248 people at work, an increase of 4,961 or 16 percent since 2016; unemployment 9 percent against 16 percent in 2016; 8,324 people working from home at least one day a week, 24 percent of the workforce against 32 percent nationally; 21,143 driving to work, 2,367 walking and 504 cycling; average journey time 30.2 minutes against 28.9 in 2016. Education: third level qualifications up from almost 15,500 in 2016 to nearly 20,200, a rate of 37 percent against 45 percent nationally; 28,231 people aged three and over could speak Irish, up by more than 400, which is 37.3 percent of that group against 38.2 percent in 2016. FINDING: no County Offaly school appears on the forty-school first-phase Leaving Certificate Computer Science list of 4 January 2018, established by re-parsing the published table row by row. Addresses from their owners: Birr Castle Demesne, Rosse Row, Birr, County Offaly, R42 VO27, describing 120 acres of parkland with over 5,000 species of trees and plants and a reflecting telescope that "remained the largest in the world for over 70 years"; Offaly County Council, Aras an Chontae, Charleville Road, Tullamore, R35 F893. Household internet, Census 2022 table SAP2022T15T2CTY: of 28,702 households in Offaly County Council, 21,841 had broadband, 1,385 another connection, 3,413 no internet and 2,063 did not state; across the State 1,457,883 of 1,836,728 households had broadband.',
    localProject: 'Resolution depends on the instrument. Household internet access in Offaly asked of two official sources. The CSO Internet Coverage and Usage in Ireland 2023 release, a sample survey, reports no finer than NUTS3 region: 91 percent of Midland households with an internet connection and 82 percent on fixed broadband, covering Laois, Longford, Offaly and Westmeath together. Census 2022 table SAP2022T15T2CTY, a full count, reports every administrative county and is also published by town, local electoral area, electoral division and small area: of 28,702 households in Offaly County Council, 21,841 had broadband, 1,385 another connection, 3,413 no internet and 2,063 did not state, while across the State 1,457,883 of 1,836,728 households had broadband, so about 76 percent in Offaly against about 79 percent nationally by our arithmetic. This page first stated that no Offaly figure existed, relying on the survey alone; it was corrected on 17 September 2026 and the correction is the lesson: ask more than one instrument before writing that a figure does not exist, and record the source, year, method and geography behind every number. The ecological fallacy is demonstrated inside one instrument, since quoting the national census share for Offaly overstates it. Two genuine limits remain: no single county population density row in PxStat F1010, F1011, F1013, F1015 or F1016, and seven Offaly County Council dataset records on data.gov.ie, each CC BY 4.0, that all resolve to an ordinary web page rather than a file. Birr\'s Great Telescope supplies the image: a smaller instrument shows a smudge where a larger one separates two stars.',
    requiredMentions: [
      '83,150',
      '15,598',
      '4,726',
      '17,167',
      '28,231',
      '21,143',
      '30.2 minutes',
      'R42 VO27',
      'R35 F893',
      '30,958',
      '1,972',
      '5,623'
    ],
    sources: [
      { claim: 'CSO Offaly summary press statement, 30 May 2023: "the population of Offaly grew by 7% to 83,150, which means the number of people in the county rose by 5,189 between April 2016 and April 2022"; average age 39 against 37.2, with a national 38.8; "There were 17,167 children aged 15 and under in Offaly in April 2022. Of these, 5,623 (33%) were in childcare, compared with 33% nationally"; "In Offaly, 8,324 people (aged 15 and over) worked from home at least one day a week in 2022. This represented 24% of the workforce. The national figure was 32%."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultsoffaly/' },
      { claim: 'CSO Profile 1 Offaly: "Tullamore was the largest town, with a population of 15,598 in April 2022"; Daingean the youngest town at average age 35.5 and Shinrone the oldest at 43.7; 49 percent (40,155) born in the county, 37 percent (30,601) elsewhere in the State and 14 percent (11,881) outside it.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementsoffaly/' },
      { claim: 'CSO PxStat tables F1013 and F1015: Birr 4,726 at 738.1 per sq km over 6.4 sq km, average age 39.8 with 18.9 percent under 15; Tullamore at 1,426.8 per sq km over 10.9 sq km, average age 38.1 with 20.9 percent under 15. Table F1016: Tullamore LEA 30,958 and Birr LEA 27,004. The same table series records Portarlington as a single row spanning Counties Laois and Offaly.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1013/JSON-stat/2.0/en' },
      { claim: 'CSO Profile 5 Offaly: non-Irish citizens 9 percent of the county, Polish 1,560, UK 990, Lithuanian 883, Romanian 612; dual Irish citizens up from 1,130 in 2016 to 1,972.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionoffaly/' },
      { claim: 'CSO Profile 7 Offaly: "There were 35,248 people (aged 15 and over) at work in Offaly, an increase of 4,961 people (+16%) between 2016 and 2022"; unemployment 9 percent against 16 percent in 2016; "an average journey time of 30.2 minutes compared with 28.9 minutes in 2016"; 21,143 driving, 2,367 walking, 504 cycling.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingoffaly/' },
      { claim: 'CSO Profile 8 Offaly: third level qualifications up from almost 15,500 in 2016 to nearly 20,200, a rate of 37 percent against 45 percent nationally; "The number of people (aged three and over) who could speak Irish in Offaly increased by more than 400 to 28,231 in Census 2022. This was 37.3% of the county\'s population aged three and over."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationoffaly/' },
      { claim: 'CSO Internet Coverage and Usage in Ireland 2023: "In 2023, 94% of households have an internet connection... Household internet connectivity was highest for the Dublin region (96%), compared with the Border and Midland regions (91% of households in these regions)", with the Midland region, comprising Laois, Longford, Offaly and Westmeath, at 82 percent on fixed broadband against 91 percent in Dublin. The survey itself publishes no county-level figure.', url: 'https://www.cso.ie/en/releasesandpublications/ep/p-isshict/internetcoverageandusageinireland2023/householdinternetconnectivity/' },
      { claim: 'Department of Education, 4 January 2018: the forty-school first-phase Leaving Certificate Computer Science list, re-parsed from the raw table as 41 rows including the header, contains no school with a County Offaly address.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Birr Castle Demesne: "Birr Castle Demesne spans 120 acres of stunning parklands and gardens, featuring over 5,000 species of trees and plants", the Great Telescope "remained the largest in the world for over 70 years", and the contact page address "Birr Castle Demesne, Rosse Row, Birr County Offaly, R42 VO27".', url: 'https://birrcastle.com/contact/' },
      { claim: 'Offaly County Council\'s own contact page: "Offaly County Council, Aras an Chontae, Charleville Road, Tullamore, Co. Offaly R35 F893."', url: 'https://www.offaly.ie/map-to-council-building/' },
      { claim: 'data.gov.ie: Offaly County Council has seven dataset records, each licensed Creative Commons Attribution 4.0, and every one resolves its only resource to an HTML page rather than a downloadable data file, checked individually through the catalogue interface.', url: 'https://data.gov.ie/organization/offaly-county-council' },
      { claim: 'CSO Census 2022 table SAP2022T15T2CTY, Households with Internet access by administrative county: Offaly County Council 28,702 households, of which 21,841 broadband, 1,385 other connection, 3,413 no internet and 2,063 not stated; State total 1,836,728 households, of which 1,457,883 broadband. The same table is published by town, local electoral area, electoral division and small area.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2CTY/JSON-stat/2.0/en' }
    ],
    rejectedClaims: [
      'Presenting the Midland region survey figures as Offaly figures: the county figure comes from the census table, and the regional figure is labelled as regional.',
      'The statement on an earlier version of this page that no county internet figure existed: the census table of internet access by county disproves it.',
      'A county land area or population density figure for Offaly: no such row exists in the CSO tables checked.',
      'The Portarlington cross-county filter trap as a project: the County Louth and County Carlow pages already own it, so it appears here only as a one-line labelling note.',
      'Any address or quotation for the Tullamore whiskey visitor centre: its own pages returned errors when checked, and addresses are not taken from third parties.',
      'Any claim linking the Technological University of the Shannon to Offaly: its own site does not mention Offaly, Tullamore or Birr.',
      'Any suggestion that Offaly schools do not teach computer science today: the finding concerns the January 2018 first-phase list only.'
    ]
  }
};
