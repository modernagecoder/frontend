'use strict';
// County Offaly (cg- county page, Ireland cluster, Phase 4). Spine: resolution.
// The figure this page most wants, how many Offaly homes have broadband, is not
// published for Offaly at all. The CSO's internet survey reports no lower than
// the four-county Midland region, so the honest answer is a regional figure
// labelled as one, and the page says so against its own commercial interest.
// The same limit applies to county population density, which the CSO publishes
// only at electoral division, town and local electoral area level. Birr's Great
// Telescope, the largest in the world for over seventy years, gives the idea its
// image. NOT USED: the Portarlington straddle in F1013, because the Louth and
// Carlow pages already own the cross-county filter trap; it appears here as a
// one-line labelling note only. Facts read at primary sources on 16 September
// 2026: the Offaly Summary, Profile 1, 5, 7 and 8 press statements; PxStat
// F1013, F1015 and F1016; the CSO internet coverage release; gov.ie's January
// 2018 list, re-parsed from the raw table and containing no Offaly school;
// birrcastle.com; offaly.ie; data.gov.ie.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY OFFALY', blurb: 'Tullamore, Birr and the midlands, with a project on statistics that do not exist at the size you need.' },
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
  ogDescription: 'Coding and AI classes for County Offaly, with a project on what to do when the statistic you need is only published for a much bigger area.',
  twitterDescription: 'Coding classes across County Offaly, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Offaly Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Offaly, taught live in English.'
  },

  h1: 'Coding classes in County Offaly',
  capsuleQ: 'What are the best coding classes in County Offaly?',
  capsule: 'There are 83,150 people in County Offaly and 17,167 of them are aged 15 or under. Tullamore is the county town with 15,598 residents, Birr is next with 4,726, and the rest of the county lives in smaller places between the two. Nearly 21,000 people here drive to work and their journeys are among the longer ones in the country. What we run is simple: live classes, one fixed hour a week, ability groups of five to ten or one to one, from age six to sixty-seven. Try the first lesson at no cost, then a group place is USD 100 a month, a private one USD 150.',
  lead: 'For seventy years the largest telescope on earth stood in Birr. Everything a telescope does comes down to resolution: how small a thing it can separate from the thing beside it. Statistics has the same limit, and this page runs headlong into it. The figure we would most like to put in front of an Offaly family is the share of homes here with a good broadband connection, since our classes need one. That figure does not exist. The national statistics office publishes internet access no finer than the Midland region, four counties at once, and so the only honest sentence we can write is a regional one, clearly labelled as regional. Stating that costs us something, and it is the right way round.',
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
      h2: 'The number that is not published at your size',
      intro: 'Three real examples from this county, and one mistake that has its own name in statistics.',
      body: [
        { kind: 'table', caption: 'What we wanted for Offaly, and what actually exists', head: ['The question', 'Finest published answer', 'What that stops you saying'], rows: [
          ['Homes with internet access', 'The Midland region: Laois, Longford, Offaly and Westmeath together, at 91%', 'Anything specific to Offaly'],
          ['Homes on fixed broadband', 'The same four counties, at 82%, against 91% in Dublin', 'That any Offaly town is above or below that'],
          ['Population density', 'Electoral divisions, towns and electoral areas', 'A single density figure for the county'],
          ['Town populations', 'Built-up areas, one row each', 'A clean county total by adding towns, since Portarlington sits in two counties at once']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The mistake with a name', p: 'Taking a fact about a large area and applying it to a small one inside it. If the Midland region is 82% on fixed broadband, it does not follow that Tullamore is, or that any particular house is. The error is old enough to have a formal name and common enough to appear in newspapers weekly.' },
          { h3: 'The opposite mistake', p: 'Refusing to use the regional figure at all, on the grounds that it is not exact. It is still the best available evidence. The requirement is to label it, not to bin it.' },
          { h3: 'What a learner produces', p: 'A short table like the one above: question, finest available geography, and the sentence that geography does and does not support. It is the most professional-looking page of work a fifteen year old can make in an afternoon.' }
        ] },
        { kind: 'callout', h3: 'Why a telescope is the right way to think about it', p: 'Birr Castle Demesne still holds the Great Telescope, which its owners describe as having remained the largest reflecting telescope in the world for over seventy years. A telescope with a wide field and poor resolution shows you a bright smudge where two stars are. You can describe the smudge honestly and usefully, and you cannot say anything at all about the two stars, because at that resolution they are one object. A four-county broadband figure is a smudge. It is real, it is measured, it is the best instrument available, and the two stars inside it stay invisible no matter how confidently anyone writes about them.' },
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
        { kind: 'spec', title: 'The honest version of our own argument', p: 'We would like to tell you that Offaly homes are well connected, because that is what makes our classes possible. What we can say is that 91% of households across the four midland counties have an internet connection and 82% have fixed broadband, against 91% on fixed broadband in Dublin. Whether a particular house outside Banagher clears that bar is a question the published data cannot answer, and the free lesson is the only real test of it. That is also why the first lesson is free: it settles the connection question before anybody pays anything.' }
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
        { kind: 'p', text: 'We are not connected with Offaly County Council, Birr Castle Demesne or any school mentioned here. Population, work and education figures are quoted from Central Statistics Office releases naming Offaly; the internet figures are the CSO\'s Midland regional figures and are labelled as regional every time they appear; the count of seven dataset records resolving to web pages rather than files is our own, made through the national portal\'s catalogue interface; and the absence of an Offaly school from the 2018 list comes from re-reading that published table in full.' }
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
    h2: 'Ask for the Offaly broadband figure and you will be given one',
    intro: 'It will be specific, it will sound researched, and no such figure has been published.',
    p1: 'What usually comes back is the regional number with the region\'s name quietly swapped for the county\'s, or a national number rounded to look local. Neither is a lie exactly. Both are the same error: a statistic reported at a finer resolution than it was ever measured at. The generated sentence contains no trace of the smudge it came from.',
    p2: 'A learner who has gone looking for that figure knows it is not there. They ask what area a number covers before repeating it, and they write the area\'s name beside it. That single habit would prevent a large share of the confident nonsense published about small places every week.',
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
      { q: 'Is broadband good enough in Offaly for live classes?', a: 'No county-level figure is published. The statistics office reports 91% of midland households with an internet connection and 82% with fixed broadband, across four counties together. The free lesson tests your own connection, which is the only test that matters.' },
      { q: 'What is the Offaly data project?', a: 'Students find out which questions the published data can answer at county size and which it cannot, then write the difference down. Broadband, density and town totals each fail in a different way.' },
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
    curriculumAuthority: 'County Offaly, whose council area is the county, Census 2022 (CSO Offaly releases): population 83,150, up 5,189 (7 percent) since 2016; average age 39 against 37.2 in 2016 and a national 38.8; 17,167 children aged 15 and under, of whom 5,623 (33 percent) were in childcare, the same share as nationally. Birthplace: 40,155 people (49 percent) born in the county, 30,601 (37 percent) elsewhere in the State and 11,881 (14 percent) outside the State, up from 12 percent in 2016. Towns: Tullamore 15,598 at 1,426.8 per sq km over 10.9 sq km, average age 38.1 with 20.9 percent under 15; Birr 4,726 at 738.1 over 6.4 sq km, average age 39.8 with 18.9 percent under 15. Local electoral areas: Tullamore 30,958 and Birr 27,004. Among towns of at least 500 people, Daingean is youngest at average age 35.5 and Shinrone oldest at 43.7. Citizenship: non-Irish citizens 9 percent of the county, largest groups Polish 1,560, UK 990, Lithuanian 883, Romanian 612; dual Irish citizens up from 1,130 in 2016 to 1,972. Work and travel: 35,248 people at work, an increase of 4,961 or 16 percent since 2016; unemployment 9 percent against 16 percent in 2016; 8,324 people working from home at least one day a week, 24 percent of the workforce against 32 percent nationally; 21,143 driving to work, 2,367 walking and 504 cycling; average journey time 30.2 minutes against 28.9 in 2016. Education: third level qualifications up from almost 15,500 in 2016 to nearly 20,200, a rate of 37 percent against 45 percent nationally; 28,231 people aged three and over could speak Irish, up by more than 400, which is 37.3 percent of that group against 38.2 percent in 2016. FINDING: no County Offaly school appears on the forty-school first-phase Leaving Certificate Computer Science list of 4 January 2018, established by re-parsing the published table row by row. Addresses from their owners: Birr Castle Demesne, Rosse Row, Birr, County Offaly, R42 VO27, describing 120 acres of parkland with over 5,000 species of trees and plants and a reflecting telescope that "remained the largest in the world for over 70 years"; Offaly County Council, Aras an Chontae, Charleville Road, Tullamore, R35 F893.',
    localProject: 'Resolution: what to do when the statistic you need is not published at the size you need it. Three worked examples from this county. One, household internet: the CSO\'s internet coverage release publishes no finer than NUTS3 region, so the only available figures are 91 percent of Midland households with an internet connection and 82 percent with fixed broadband, covering Laois, Longford, Offaly and Westmeath together, against 91 percent on fixed broadband in Dublin. No Offaly figure exists, and the page states this against its own commercial interest rather than borrowing the regional number and relabelling it. Two, population density: no county-level density or area row exists for Offaly in PxStat tables F1010, F1011, F1013, F1015 or F1016, which publish density only at electoral division, built-up area and local electoral area level. Three, the council\'s own data: all seven Offaly County Council dataset records on the national portal, each licensed Creative Commons Attribution 4.0, resolve their only resource to an ordinary web page rather than a downloadable file, checked one by one through the catalogue interface, so seven records yield zero files. The taught error is applying a fact about a large area to a small one inside it, and the taught output is a three-column table of question, finest available geography, and the sentence that geography does and does not support. Birr\'s Great Telescope supplies the image: a coarse instrument shows a single bright smudge where two stars are, and describing the smudge honestly is the only available truth.',
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
      { claim: 'CSO Internet Coverage and Usage in Ireland 2023: "In 2023, 94% of households have an internet connection... Household internet connectivity was highest for the Dublin region (96%), compared with the Border and Midland regions (91% of households in these regions)", with the Midland region, comprising Laois, Longford, Offaly and Westmeath, at 82 percent on fixed broadband against 91 percent in Dublin. No county-level figure is published.', url: 'https://www.cso.ie/en/releasesandpublications/ep/p-isshict/internetcoverageandusageinireland2023/householdinternetconnectivity/' },
      { claim: 'Department of Education, 4 January 2018: the forty-school first-phase Leaving Certificate Computer Science list, re-parsed from the raw table as 41 rows including the header, contains no school with a County Offaly address.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Birr Castle Demesne: "Birr Castle Demesne spans 120 acres of stunning parklands and gardens, featuring over 5,000 species of trees and plants", the Great Telescope "remained the largest in the world for over 70 years", and the contact page address "Birr Castle Demesne, Rosse Row, Birr County Offaly, R42 VO27".', url: 'https://birrcastle.com/contact/' },
      { claim: 'Offaly County Council\'s own contact page: "Offaly County Council, Aras an Chontae, Charleville Road, Tullamore, Co. Offaly R35 F893."', url: 'https://www.offaly.ie/map-to-council-building/' },
      { claim: 'data.gov.ie: Offaly County Council has seven dataset records, each licensed Creative Commons Attribution 4.0, and every one resolves its only resource to an HTML page rather than a downloadable data file, checked individually through the catalogue interface.', url: 'https://data.gov.ie/organization/offaly-county-council' }
    ],
    rejectedClaims: [
      'Any Offaly-specific broadband or internet access figure: the CSO publishes no lower than the four-county Midland region, and the regional figure is labelled as regional every time it appears.',
      'A county land area or population density figure for Offaly: no such row exists in the CSO tables checked.',
      'The Portarlington cross-county filter trap as a project: the County Louth and County Carlow pages already own it, so it appears here only as a one-line labelling note.',
      'Any address or quotation for the Tullamore whiskey visitor centre: its own pages returned errors when checked, and addresses are not taken from third parties.',
      'Any claim linking the Technological University of the Shannon to Offaly: its own site does not mention Offaly, Tullamore or Birr.',
      'Any suggestion that Offaly schools do not teach computer science today: the finding concerns the January 2018 first-phase list only.'
    ]
  }
};
