'use strict';
// Bray (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census 2022
// town tables published for "Bray, Counties Wicklow & Dublin", read 18 September
// 2026, the Irish Rail station page for Bray (Daly) and Loreto Secondary School
// Bray's own site. Spine: age is not a time series. The single-year age table
// counts 1,704 residents aged four or under against 2,245 aged ten to fourteen,
// which reads like a decline and is not one: a census is one day, the two groups
// are different people, and the all-towns row falls the same way. New to the
// cluster: reading a cross-section as history, and what would be needed to show
// change. Wicklow owns Bray's population 33,512 and the "which Bray" geography
// question, so the usual-resident count is used and no boundary lesson is drawn.
// Greystones owns birthplace against citizenship, so that table is left alone.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'BRAY', blurb: 'The largest town in Wicklow, with a project on an age table that looks like a trend and is not one.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-bray',
  code: 'bry',
  accent: '#2F4A5E',
  accentRationale: 'Bray: a seafront steel blue from the solver, apart from the Wicklow county green and the Greystones violet',
  pageType: 'city',
  place: {
    name: 'Bray',
    eyebrow: 'Bray, County Wicklow',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Wicklow' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-wicklow', name: 'County Wicklow' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Wicklow', href: '/coding-classes-in-county-wicklow' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bray, County Wicklow, Ireland',
  title: 'Best Coding Class in Bray | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Bray learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Bray, with a project on why a census age table cannot tell you whether anything is rising or falling.',
  twitterDescription: 'Coding and AI classes for Bray, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Bray',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Bray, County Wicklow, taught live in English.'
  },

  h1: 'Coding classes in Bray',
  capsuleQ: 'What is the best coding class in Bray?',
  capsule: 'Bray is the biggest town in County Wicklow, with 33,165 usual residents recorded in the census town tables and 11,835 households, 10,217 of which report broadband. Lessons with us happen at home: a live teacher, twice in most weeks, in an ability group of five to ten or one to one, for learners from six to sixty-seven years old. The first lesson costs nothing, and after it a group place is USD 100 a month while one to one is USD 150.',
  lead: 'Line up Bray by single years of age and something looks like news. The census counts 2,245 residents aged ten to fourteen and only 1,704 aged four or under, a quarter fewer, and the obvious headline writes itself: fewer children in Bray. The headline is not supported. One census is one day, and those two groups are two different sets of people, not the same children photographed twice. Families arrive and leave, houses change hands, and the youngest band has had less time to be added to. Look at the row for all towns combined and it slopes the same way, 211,241 against 257,812, which is a pattern in the country rather than a story about this town. To say whether anything in Bray is rising or falling you need two censuses of the same area, and this page shows what that would take.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Bray.',

  picks: {
    eyebrow: 'Course picks for Bray',
    h2: 'Where a Bray learner begins',
    intro: 'Choose on age and interest; the free lesson with the course teacher fixes the level and the pace.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with counting and comparing, where a picture has to match what was actually measured.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Programs that compare groups, and the difference between a group and the same group later.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Census data in Python, including why a snapshot cannot answer a question about change.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults who build reports and get asked whether a number is going up.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Age is not a time series',
      intro: 'Bray residents by five-year age band, from the single-year Census 2022 table, beside the row for all towns combined. The bands are our sums of the published single years.',
      body: [
        { kind: 'table', caption: 'Younger age bands, Bray and all towns combined, April 2022', head: ['Age band', 'Bray', 'All towns combined'], rows: [
          ['Under 5', '1,704', '211,241'],
          ['5 to 9', '2,056', '240,435'],
          ['10 to 14', '2,245', '257,812'],
          ['15 to 19', '2,131', '230,877']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What the table is', p: 'A count of who lived in Bray on one day in April 2022, sorted by how old each person was. Age runs left to right like time, which is exactly what makes it so easy to misread as a history of the town.' },
          { h3: 'Why the slope is not a trend', p: 'The 2,245 residents aged ten to fourteen were never the same people as the 1,704 aged under five. Nobody moved between those rows. A smaller younger band can come from fewer births, from families moving out, from families with older children moving in, or from all three at once, and this table separates none of them.' },
          { h3: 'The comparison that settles it', p: 'All towns combined show the same shape, 211,241 under five against 257,812 aged ten to fourteen. Bray at 1,704 against 2,245 is close to that national proportion by our arithmetic, so a Bray-specific explanation is being invented for a national pattern.' }
        ] },
        { kind: 'callout', h3: 'Cross-section, not history', p: 'A single snapshot sorted by any quantity that grows with time will look like a trend. Customers by tenure. Employees by years of service. Files by age. Accounts by signup month. In each case the oldest group has survived something the newest group has not yet faced, and the ones who left are simply absent from the picture. The fix is to name the question first: if the question is about change, one snapshot cannot answer it, and no amount of clever plotting inside that snapshot will help.',
        },
        { kind: 'p', text: 'The project has two halves. First the learner reproduces the table honestly from the published single years, writing a function that sums a band and checking the four bands against the table row by row. Then they write the plan for the real question: pull the same bands from an earlier census, confirm first whether the published area for Bray covered the same ground both times, and only then compare. We have not run that comparison here, and the page says so rather than implying a trend we have not measured.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Bray in the town tables',
      h2: 'The town as the census found it',
      intro: 'The CSO publishes this built-up area as Bray, Counties Wicklow and Dublin, because the town reaches across the county boundary. Figures below are for the area as published.',
      body: [
        { kind: 'table', caption: 'Bray, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '33,165'],
          ['Households', '11,835'],
          ['Households with a broadband connection', '10,217'],
          ['Working residents in the travel table', '14,989'],
          ['Residents travelling to school, college or childcare', '8,051'],
          ['Residents aged three and over able to speak Irish', '11,329']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Getting to work', p: 'Of 14,989 working residents, 6,813 drive, 1,822 give home as their main answer, 1,386 walk, 1,236 take a train, DART or Luas, 1,209 take a bus and 304 cycle.' },
          { h3: 'Getting to school or college', p: 'Among the 8,051 travelling to school, college or childcare, 3,044 go as a car passenger, 2,464 walk, 1,021 take a bus, 444 travel by rail and 263 cycle.' },
          { h3: 'Working from home', p: 'Asked directly, 5,358 working residents do at least some work from home, 8,171 never do and 1,460 did not state, which is a different question from the main means of travel.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives Bray (Daly) as Florence Road, Bray, Co. Wicklow, Eircode A98 C8X4, served by the DART and Dublin commuter services, the Dublin to Dundalk commuter route and Dublin Connolly to Rosslare. It is staffed from early morning until after midnight, with a booking office on weekday daytimes, toilets, an enclosed waiting room, free Wi-Fi, a convenience store and coffee dock at the main entrance, a filtered water refill unit on the platform, and a car park of 100 spaces.' }
      ]
    },
    {
      id: 'years', tint: 'tint', eyebrow: 'A closer look at the same table',
      h2: 'Single years wobble',
      intro: 'The same Bray age table, read one year at a time rather than in bands.',
      body: [
        { kind: 'table', caption: 'Bray residents at each age from five to fourteen', head: ['Age', 'Residents'], rows: [
          ['5', '355'],
          ['6', '366'],
          ['7', '418'],
          ['8', '418'],
          ['9', '499'],
          ['10', '448'],
          ['11', '461'],
          ['12', '446'],
          ['13', '442'],
          ['14', '448']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The nine-year-olds', p: 'There are 499 residents aged nine and 448 aged ten, a gap of 51 between neighbouring years. A single year of age in one town is a small number, and small numbers move around for reasons that have nothing to do with anything worth reporting.' },
          { h3: 'Why we banded them', p: 'Grouping five years at a time steadies the count, which is why the project above uses bands. The cost is detail: the bands cannot show the nine-year-old bump, and the page has to state that the banding was our choice.' },
          { h3: 'What this means for a class', p: 'Nothing about learning. It is here because a learner who has seen a real table wobble stops treating every difference between two adjacent numbers as a finding.' }
        ] },
        { kind: 'spec', title: 'A school in the town', p: 'Loreto Secondary School Bray gives its address as Vevay Road, Bray, Co Wicklow, on its own contact page. We have no connection with the school, and our lessons run outside school hours and alongside whatever the school is teaching.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Bray',
      h2: 'How Bray families use us',
      intro: 'A fixed weekly hour, a real teacher, and a level that matches the learner.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children and teenagers', p: 'Block coding first, then Python, web and AI projects through Junior Cycle, Transition Year and the senior cycle years.' },
          { h3: 'The questions courses answer', p: 'Every course here ends with learners able to say what their own numbers do and do not show, which is a skill schools rarely have time to drill.' },
          { h3: 'Adults', p: 'Python, data and AI for adults at any starting point, including the 5,358 residents already doing part of their work from home.' }
        ] },
        { kind: 'p', text: 'Neither Irish Rail nor Loreto Secondary School Bray has any connection with us; both are quoted from their own published pages because a page about a town should name real things in it. All counts here come from Central Statistics Office Census 2022 tables for this built-up area and are printed unchanged. The five-year bands, the percentages and the comparison with all towns combined are ours, and where this page could have implied a trend it says instead what a trend would require.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting to comparing over time',
    intro: 'Ages are a guide; the free lesson sets the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Count it properly', p: 'Tallies and groups in block code, and checking that the picture matches the count.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Same thing, later', p: 'Programs that compare two measurements of one thing, and spot when they are not the same thing.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Snapshots and series', p: 'Working with real published data and choosing the dataset the question actually needs.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Is it going up?', p: 'Answering that at work with the right comparison, or saying clearly that the data cannot.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask a chatbot whether Bray has fewer children now',
    intro: 'The answer will arrive with a trend in it.',
    p1: 'Give a model this age table and ask what is happening to the town and it will usually describe a decline, because the numbers slope and a slope invites a story. It may even name causes. Nothing in the table supports either move, and nothing in the reply flags that the table is a single day rather than a sequence of years.',
    p2: 'A learner who has worked through this page answers in a different order: the question is about change, the data is a snapshot, so here is what a snapshot can show and here is the second dataset that would be needed. It is a shorter answer with nothing invented in it.',
    closer: 'Producing a plausible trend is now free. Knowing when there is no trend to produce is the part worth learning.',
    blogAnchor: 'the long case for learning to code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'The practical side in Bray',
    intro: 'Six things worth knowing before booking.',
    cells: [
      { h3: 'Always live', p: 'A teacher is present for the whole lesson, watching the work and correcting it as it happens.' },
      { h3: 'Levels, not ages', p: 'Five to ten learners who are at the same stage, whether they log in from Bray, elsewhere in Ireland or abroad.' },
      { h3: 'Twice most weeks', p: 'Around eight lessons a month, in an hour the household picks once and then keeps.' },
      { h3: 'Term aware', p: 'Mid-terms, holidays and exam weeks go into the plan at the start rather than being worked around later.' },
      { h3: 'Equipment', p: 'A desktop or laptop, sound in both directions and a connection that holds video, all tried out in the free lesson.' },
      { h3: 'One to one', p: 'Where no group at the right level meets at a workable hour, the same course runs privately.' }
    ],
    spec: { title: 'A journey the town skips', p: 'Bray sends 3,044 young people to school as car passengers and 2,464 on foot. The coding lesson is the one that does not need a route at all.' }
  },

  fees: {
    h2: 'Bray class fees',
    intro: 'Three lines cover it.',
    first: 'The first lesson in full, taught and assessed, with nothing to pay.',
    group: 'A month in an ability group of five to ten learners, about eight live lessons.',
    private: 'A month of one to one teaching on the same weekly pattern.',
    closer: 'Fees are charged monthly in US dollars on the one rate that applies to families outside India, so a household in Bray sees exactly what a household in Greystones sees, with no euro list beside it. Nothing is charged before a course and an hour have been agreed in the free lesson, and the pricing page explains breaks, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'Google reviews from six families, printed as they were written',

  book: {
    h2: 'Book a free lesson in Bray',
    intro: 'Tell us the learner\'s age and what they like doing. The first hour is planned from that, whether it becomes a game, a small program or a table that refuses to answer the question it was asked.',
    success: 'Thank you. We will be in touch about the Bray lesson shortly.'
  },

  faq: {
    h2: 'Bray coding class questions',
    intro: 'What Bray parents and adult learners ask first.',
    items: [
      { q: 'How many people live in Bray?', a: 'The Census 2022 small area tables record 33,165 usual residents in the built-up area, which the CSO publishes as Bray, Counties Wicklow and Dublin, in 11,835 households. Our Wicklow page works through the several different areas that answer to the name Bray.' },
      { q: 'What is the Bray data project?', a: 'Learners rebuild the town\'s age bands from the published single years, see that 1,704 residents are under five against 2,245 aged ten to fourteen, and work out why that slope is not a decline: one census is one day, the two groups are different people, and all towns combined slope the same way.' },
      { q: 'Could the census show whether Bray has fewer children than before?', a: 'Not on its own. That needs the same bands from an earlier census plus a check that the published area covered the same ground both times. We have not run that comparison, so this page does not claim a direction.' },
      { q: 'How do Bray residents travel to work?', a: 'Of the 14,989 working residents in the travel table, 6,813 drive, 1,822 give working mainly at or from home, 1,386 walk, 1,236 take a train, DART or Luas, 1,209 take a bus and 304 cycle.' },
      { q: 'When do the lessons happen?', a: 'Late afternoons, evenings and weekend mornings. Our teachers work from India, which sits four and a half hours in front of Irish clocks in summer and five and a half in winter, and the weekly hour is settled during the free lesson.' },
      { q: 'Do you teach adults in Bray?', a: 'Yes, from complete beginners up to the age of sixty-seven. The free lesson decides whether an adult joins a group at the same level or is taught privately.' },
      { q: 'Can two children in one family learn together?', a: 'They can share one lesson if they are genuinely at the same level, but usually they are not, and each learns faster in the group that matches them. The free lesson makes that clear quickly.' },
      { q: 'Is there a Modern Age Coders classroom in Bray?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Bray cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Bray',
    html: 'Next along the coast is <a class="cg-inline-link" href="/best-coding-class-in-greystones">Greystones</a>, with <a class="cg-inline-link" href="/coding-classes-in-county-wicklow">County Wicklow</a> inland, <a class="cg-inline-link" href="/coding-classes-in-dun-laoghaire-rathdown">Dun Laoghaire-Rathdown</a> to the north and the province of <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a> around them all. Our <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a> sets us beside other online schools, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> indexes every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bray, Wicklow and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-greystones', label: 'Greystones' },
    { href: '/coding-classes-in-county-wicklow', label: 'County Wicklow' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-bry .cg-hero-grid { align-items: start; gap: clamp(1.19rem, 3.33vw, 2.71rem); }
.cg-root.cg-bry .cg-hero h1 { font-weight: 700; letter-spacing: -0.0204em; line-height: 1.044; }
.cg-root.cg-bry .cg-capsule { border-top: 6px solid var(--cg-accent); padding-top: 1.18rem; }
.cg-root.cg-bry .cg-eyebrow { letter-spacing: 0.189em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bry .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.0151em; }
.cg-root.cg-bry .cg-grid-3 { gap: clamp(1.16rem, 2.79vw, 2.23rem); }
.cg-root.cg-bry .cg-table caption { letter-spacing: 0.037em; font-weight: 700; }
.cg-root.cg-bry .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bry .cg-table tr:last-child td { border-bottom: 2px solid var(--cg-accent); }
.cg-root.cg-bry .cg-ladder-col { border-bottom: 5px solid var(--cg-accent); padding-bottom: 1.04rem; }
.cg-root.cg-bry .cg-callout { border-left-width: 10px; }
`,

  dossier: {
    curriculumAuthority: 'Bray, the built-up area published as "Bray, Counties Wicklow & Dublin", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T1T1TOWN22 single years of age, Bray: age 0 340, 1 324, 2 354, 3 343, 4 343, 5 355, 6 366, 7 418, 8 418, 9 499, 10 448, 11 461, 12 446, 13 442, 14 448, 15 461, 16 395, 17 452, 18 418, 19 405. Our five-year sums: under 5 1,704; 5 to 9 2,056; 10 to 14 2,245; 15 to 19 2,131. All-towns row of the same table, summed the same way: under 5 211,241; 5 to 9 240,435; 10 to 14 257,812; 15 to 19 230,877. SAP2022T2T1TOWN22: usual residents 33,165. SAP2022T15T2TOWN22: households 11,835, broadband 10,217, other 175, none 718, not stated 725. SAP2022T11T1TOWN22 to work total 14,989: car driver 6,813, mainly at or from home 1,822, on foot 1,386, train DART or Luas 1,236, bus 1,209, not stated 892, van 662, car passenger 542, bicycle 304, motorcycle 78, other including lorry 45; to school, college or childcare total 8,051: car passenger 3,044, on foot 2,464, bus 1,021, not stated 524, train 444, bicycle 263, car driver 216. SAP2022T11T4TOWN22: 14,989 working persons, 5,358 work from home at least some of the time, 8,171 never, 1,460 not stated. SAP2022T11T5TOWN22: 1,817 children under 15 in childcare, 823 aged 0 to 4 and 994 aged 5 to 14. SAP2022T3T1TOWN22, aged 3 and over: able to speak Irish 11,329, not able 19,297, not stated 1,868, total 32,494. SAP2022T10T4TOWN22 total 22,702: honours bachelor or professional 3,103, postgraduate 2,747, doctorate 322, not stated 1,169. Irish Rail, Bray (Daly) station: "Florence Road Bray Co. Wicklow", "Eircode A98 C8X4", routes "Dublin - Dundalk commuter", "Dublin Connolly - Rosslare", "DART and Dublin Commuter", staffing "Monday to Saturday: 05:30 - 00:30", booking office "Staffed Mon-Fri 07:00-15:00", "Small convenience store and coffee dock located at the main entrance", "Ecofill Triple filtered water refill unit", "Free wifi available", car park "Spaces: 100". Loreto Secondary School Bray: "Vevay Road, Bray, Co Wicklow".',
    localProject: 'Age is not a time series. Bray\'s single-year age table, summed into five-year bands, gives 1,704 residents under five, 2,056 aged five to nine, 2,245 aged ten to fourteen and 2,131 aged fifteen to nineteen. Sorted that way the counts slope, and the slope invites the claim that the town has fewer children than it used to. The claim does not follow: the census counts one day, the bands hold different people rather than the same cohort observed twice, and a smaller youngest band is consistent with fewer births, with families leaving, with families of older children arriving, or with any mixture. The all-towns row summed identically gives 211,241 under five against 257,812 aged ten to fourteen, so the shape is national and a Bray-specific explanation would be invented. The learner reproduces the bands from the published single years, verifies each sum, and then writes the plan for the question that was actually asked: take the same bands from an earlier census, check first whether the published Bray area covered the same ground, and only then compare. No such comparison is made on the page. A second table reads the same data one year at a time, where 499 nine-year-olds sit beside 448 ten-year-olds, to show why the bands were used and what the banding hides. New to the cluster: reading a cross-section as history.',
    requiredMentions: [
      '33,165',
      '11,835',
      '10,217',
      '14,989',
      '8,051',
      '1,704',
      '2,056',
      '2,245',
      '6,813',
      '1,236',
      '11,329',
      'A98 C8X4'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T1T1TOWN22, single years of age, Bray, Counties Wicklow & Dublin: 340, 324, 354, 343, 343 at ages 0 to 4; 355, 366, 418, 418, 499 at ages 5 to 9; 448, 461, 446, 442, 448 at ages 10 to 14; 461, 395, 452, 418, 405 at ages 15 to 19. All-towns row for the same ages: 41,809, 40,426, 42,406, 42,865, 43,735; 44,996, 46,858, 48,635, 49,676, 50,270; 51,750, 51,984, 52,710, 51,524, 49,844; 47,466, 45,221, 45,568, 45,572, 47,050.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T1T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22 and SAP2022T3T1TOWN22, Bray: usual residents 33,165; households 11,835, broadband 10,217, no internet 718, not stated 725; aged 3 and over able to speak Irish 11,329, not able 19,297, not stated 1,868, total 32,494.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T11T1TOWN22, SAP2022T11T4TOWN22 and SAP2022T11T5TOWN22, Bray: to work 14,989 with car driver 6,813, mainly at or from home 1,822, on foot 1,386, train 1,236, bus 1,209, bicycle 304; to school, college or childcare 8,051 with car passenger 3,044, on foot 2,464, bus 1,021, train 444, bicycle 263; 5,358 work from home at least some of the time, 8,171 never, 1,460 not stated; 1,817 children under 15 in childcare.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Bray (Daly) station: "Florence Road Bray Co. Wicklow", "Eircode A98 C8X4"; routes "Dublin - Dundalk commuter", "Dublin Connolly - Rosslare", "DART and Dublin Commuter"; "Monday to Saturday: 05:30 - 00:30"; booking office "Staffed Mon-Fri 07:00-15:00"; "Small convenience store and coffee dock located at the main entrance"; "Ecofill Triple filtered water refill unit"; "Spaces: 100".', url: 'https://www.irishrail.ie/en-ie/station/bray-daly' },
      { claim: 'Loreto Secondary School Bray, contact page: "Vevay Road, Bray, Co Wicklow".', url: 'https://www.loretobray.com/' }
    ],
    rejectedClaims: [
      'Any statement that the number of children in Bray is rising or falling: that needs two censuses of the same area, which this page has not compared.',
      'Any cause for the smaller youngest age band, whether births, housing or migration: the table separates none of them.',
      'The population figure 33,512 and the several areas answering to the name Bray: the County Wicklow page owns both.',
      'Birthplace against citizenship for Bray: the Greystones page owns that project.',
      'Reading the 499 nine-year-olds as a finding: a single year of age in one town is a small number.',
      'Any claim about the Dublin side of the built-up area separately: the CSO publishes Bray as one area across the boundary.'
    ]
  }
};
