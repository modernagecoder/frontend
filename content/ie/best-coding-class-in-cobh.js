'use strict';
// Cobh (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census 2022
// town tables for "Cobh, Co Cork", the CSO Population and Migration Estimates for
// April 2022, read 19 September 2026, the Irish Rail station page for Cobh and the
// Cobh Heritage Centre's own site. Spine: survivorship. The one-year-ago table
// (SAP2022T2T3TOWN22) counts who arrived: of 13,843 usual residents aged 1 and
// over, 13,008 were at the same address, 598 elsewhere in the county, 92 elsewhere
// in Ireland and 145 outside Ireland; 835 moved, 6.03 percent, 22nd lowest of 94
// towns of 5,000 or more (median 7.08). It can never count who left. Two made-up
// towns, 980 and 1,100 people a year earlier, produce identical tables. Internal
// leavers turn up in other rows as "elsewhere"; emigrants in none, and the CSO
// estimates them separately (59,600 in the year to April 2022). The heritage
// centre is quoted as the town's own statement about the people who left. The
// Cork county page owns the census-night count and density; not used here.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'COBH', blurb: 'A census table can count everyone who moved to Cobh last year and no one who left. Two made-up towns with identical tables show why that matters.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-cobh',
  code: 'cbh',
  accent: '#313349',
  accentRationale: 'Cobh: a harbour-night slate from the solver, apart from the Cork county and Carrigaline accents across the water',
  pageType: 'city',
  place: {
    name: 'Cobh',
    eyebrow: 'Cobh, County Cork',
    schemaType: 'City',
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
  routeLabel: 'Cobh, County Cork, Ireland',
  title: 'Best Coding Class in Cobh | Modern Age Coders',
  description: 'Coding, Python, data and AI lessons for Cobh learners aged 6 to 67, taught live online in small groups at one level or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Cobh, with a data project on the one thing a census table of new arrivals can never show: who left.',
  twitterDescription: 'Live online coding, Python and AI classes for Cobh, ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Cobh',
    description: 'Stage-matched online coding, Python, AI, data and mathematics for children, teenagers and adults in Cobh, County Cork, taught live in English.'
  },

  h1: 'Coding classes in Cobh',
  capsuleQ: 'What is the best coding class in Cobh?',
  capsule: 'The census finds 14,000 usual residents in Cobh, in 5,253 households, of which 4,489 have broadband. That connection is all our lessons travel over: a live teacher on video with a handful of learners at the same stage, or with a single learner, about twice a week, at any age from six to sixty-seven. The first lesson is free, and after it a group place costs USD 100 a month and private teaching USD 150.',
  lead: 'Census 2022 asked everybody where they had lived a year earlier, and for Cobh the answers make a tidy table of arrivals: 835 of the 13,843 residents aged one and over were at a different address twelve months before. It is tempting to read that as a measure of how much the town is changing. It is not, because a table of the people who are here can never include the people who left. This page makes that blind spot concrete. The learner reads Cobh\'s real row, then builds two imaginary towns, one growing and one shrinking, whose census tables come out exactly the same. In a town whose heritage centre tells the story of the people who sailed away, it is a fitting thing to learn.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Cobh.',

  picks: {
    eyebrow: 'Course picks for Cobh',
    h2: 'Good first courses for Cobh learners',
    intro: 'Match the course to age and interest; the first lesson, with that course\'s teacher, checks the level.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with games about who is in and who is out, the simplest version of a missing-data puzzle.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python lists of people and places, and small programs that turn records into a table.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Machine learning with an eye on the data it never saw, because a model learns only from what was recorded.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults working with customer, member or staff lists, where the people who left are exactly the ones missing.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Count who arrived in Cobh, then find who the table cannot see',
      intro: 'The one-year-ago question sorts every resident aged one and over into four groups. The learner reads Cobh\'s row, compares it with other towns and then asks what is missing from it.',
      body: [
        { kind: 'table', caption: 'Cobh, Co Cork: usual residents aged 1 and over by where they lived a year before Census Day 2022', head: ['Lived a year earlier', 'People'], rows: [
          ['At the same address', '13,008'],
          ['At another address in the county', '598'],
          ['Elsewhere in Ireland', '92'],
          ['Outside Ireland', '145'],
          ['Total aged 1 and over', '13,843']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What the row counts', p: '835 people, 6.03 percent, were living somewhere else a year before. Only 237 of them came from outside the county, and a move from one Cobh street to the next lands in the same county category as a move from Mallow.' },
          { h3: 'Against other towns', p: 'Among the 94 towns with 5,000 or more residents aged one and over, the median share at a different address is 7.08 percent, and Cobh is 22nd lowest. Buncrana is lowest at 4.21 and Maynooth highest at 13.72.' },
          { h3: 'What the row leaves out', p: 'Everyone who lived in Cobh a year earlier and has gone. Those who moved within Ireland appear in some other row, described only as elsewhere; those who emigrated appear in no row at all. Babies born during the year are outside the table too, since it starts at age one.' }
        ] },
        { kind: 'table', mt: true, caption: 'Two made-up towns with the same census table and opposite years. Births and deaths are left out to keep the arithmetic plain', head: ['', 'Town A', 'Town B'], rows: [
          ['People a year before', '980', '1,100'],
          ['Stayed at the same address', '940', '940'],
          ['Moved house within the town', '20', '20'],
          ['Left the town', '20', '140'],
          ['Arrived: 20 from the county, 12 from elsewhere in Ireland, 8 from abroad', '40', '40'],
          ['Census table: same address / county / Ireland / abroad', '940 / 40 / 12 / 8', '940 / 40 / 12 / 8'],
          ['People now', '1,000', '1,000'],
          ['Change over the year', 'up 20', 'down 100']
        ] },
        { kind: 'callout', h3: 'A table of the people who are here cannot count the people who are not', p: 'This is survivorship, and it is everywhere. A list of current customers shows who signed up, never who cancelled. A class register shows who enrolled, not who dropped out. A study of successful companies leaves out every company that closed. In each case the missing group is not a random slice; it is exactly the group whose story would change the conclusion. The defence is always the same question, asked before any analysis: who could not have ended up in this table, and where would I have to look to find them?' },
        { kind: 'p', text: 'The learner builds both towns person by person: each person is a small record holding last year\'s address and this year\'s, or a note that they left. One function turns a list of people into the census-style table by counting only those present now, which is exactly what a census can do. Run on Town A and Town B it returns the same four numbers, and a single assert statement proves the two tables identical while the populations a year earlier differ by 120. The follow-up asks what extra data would tell the towns apart: last year\'s total, or a record of departures, and which organisation could possibly hold each one.' }
      ]
    },
    {
      id: 'departures', tint: 'tint', eyebrow: 'The invisible side',
      h2: 'The people no census form reaches',
      intro: 'Leavers are not all equally invisible. People who moved within Ireland are still counted, just in the wrong place for Cobh\'s purposes. People who emigrated are not counted anywhere in the census.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Moved within Ireland', p: 'Every move inside the country is an arrival somewhere, so these leavers do appear, in the row for wherever they went, with an origin no finer than elsewhere in the county or elsewhere in Ireland. No table used here traces them back to Cobh.' },
          { h3: 'Moved abroad', p: 'Someone who emigrated was not in Ireland on census night and so fills in no Irish form. The CSO publishes emigration as an estimate in a separate series, Population and Migration Estimates, which put it at 59,600 people in the year to April 2022, against 120,700 immigrants.' },
          { h3: 'The town\'s own story', p: 'The Cobh Heritage Centre, housed in the restored Victorian railway station, describes Cobh as the port where 3 million of our people left from, and says that from 1848 to 1950 over six million adults and children emigrated from Ireland.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'It does not say how many people left Cobh in the year before the census, because no table used here can say it. It does not set the town rows beside the national migration estimates as if they measured the same thing: one counts residents of towns, the other estimates flows for the whole State.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'Cobh in the resident tables',
      intro: 'Published for the town Cobh, Co Cork, in the Census 2022 small area tables, all counting usual residents.',
      body: [
        { kind: 'table', caption: 'Cobh, Co Cork, Census 2022', head: ['Counted', 'Number'], rows: [
          ['Usual residents', '14,000'],
          ['Households', '5,253'],
          ['Households with broadband', '4,489'],
          ['Working residents in the travel table', '6,263'],
          ['Journeys to school, college or childcare', '3,721'],
          ['Children under fifteen in childcare', '891'],
          ['Residents aged one and over at the same address as a year before', '13,008']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Commuting to work', p: 'Of 6,263 working residents, 3,687 drive. After them come 651 who work mainly at or from home, 456 who walk, 330 car passengers, 300 on the bus, 293 by van and 213 on the train.' },
          { h3: 'Getting to school', p: 'Of 3,721 journeys to school, college or childcare, 1,740 are as a car passenger and 1,171 on foot, with 399 by bus, 110 learners driving and 90 taking the train.' },
          { h3: 'Working from home', p: 'Asked the direct question, 1,814 working residents work from home for at least part of the week, 3,999 never do and 450 did not answer.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives the address as Cobh Railway Station, Cobh, Co. Cork, Eircode P24 A462, and notes that there are no bike facilities at the station. Neither Irish Rail nor the Cobh Heritage Centre has any connection with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Cobh learners',
      intro: 'Two fixed lessons in most weeks, with the teacher live throughout.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary school', p: 'The census-night age table counts 1,488 children aged six to twelve in Cobh. They start with blocks, games and stories, and find out that a program only knows what it was told.' },
          { h3: 'Secondary school', p: 'For the 1,341 aged thirteen to eighteen: Python, websites, AI and data projects on real tables, through the junior cycle and on to the Leaving Cert.' },
          { h3: 'Adults', p: 'Adults come with every kind of background, and many with none in code. The opening lesson finds the level, then the teaching starts from there.' }
        ] },
        { kind: 'p', text: 'Census counts are Central Statistics Office figures printed as published; the shares, ranks and both made-up towns were worked out on 19 September 2026. The emigration estimate is quoted from the CSO\'s Population and Migration Estimates for April 2022, and the heritage centre and Irish Rail from their own pages.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From who is in the game to who is missing from the data',
    intro: 'Use the ages as a guide; the first lesson finds the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'In and out', p: 'Block-coded games that keep track of who has joined and who has left, and notice when a count goes wrong.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Records to tables', p: 'Python records for people and a function that counts them into a table, then checking what the table lost.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Blind spots', p: 'Survivorship and missing groups in real datasets, and why a model trained on them inherits the gap.', courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Churn and leavers', p: 'Customer, member and staff data where departures matter most and are recorded least.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant whether Cobh is growing',
    intro: 'Hand it the one-year-ago table and the question sounds answerable. It is not.',
    p1: 'Give an AI assistant Cobh\'s row and ask whether people are moving in or moving out, and it has only arrivals to work with. An assistant that answers anyway is filling the empty departures column with a guess, and nothing in its reply need show that a column was empty.',
    p2: 'A learner who has built Town A and Town B spots the problem at once: the same table fits a town that grew and a town that shrank. The useful reply to the question is a list of what would be needed to answer it, and where each piece of data could come from.',
    closer: 'Machine learning inherits every blind spot in its data. Seeing the blind spot is still a human skill, and a teachable one.',
    blogAnchor: 'why learning to code still earns its place'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Cobh',
    intro: 'Practical points.',
    cells: [
      { h3: 'Live every time', p: 'A teacher is present for the full lesson and works from whatever the learner is building.' },
      { h3: 'Groups of a level', p: 'Five to ten learners at the same stage of a course, from Cork, the rest of Ireland and further afield.' },
      { h3: 'About twice weekly', p: 'Roughly eight lessons a month, on days and times agreed at the start.' },
      { h3: 'School calendar', p: 'Breaks, mid-terms and exam weeks are built into the plan from the beginning.' },
      { h3: 'At home', p: 'A computer the learner can type on, a microphone and speakers or a headset that work, and a broadband line. A phone is not enough for writing code.' },
      { h3: 'One to one', p: 'Private teaching is for the learner a group cannot serve well: well ahead, well behind, or free only when no group at their stage meets.' }
    ],
    spec: { title: 'No classroom on the island', p: 'Cobh learners take every lesson over video. We have no premises in the town or anywhere in Ireland, and the lesson is the same from any house with a connection.' }
  },

  fees: {
    h2: 'Fees for Cobh',
    intro: 'Every price we charge.',
    first: 'A complete first lesson, with the level assessed, at no cost.',
    group: 'A month in a group of five to ten at one level, around eight live lessons.',
    private: 'A month of private lessons on the same weekly pattern.',
    closer: 'Monthly fees are billed in US dollars and are identical for every family outside India. The free lesson is never billed, and the first month is charged only once a group place or a private slot has actually been arranged; the pricing page covers holidays, missed lessons and switching format.'
  },

  reviewsH2: 'Six reviews from our families on Google, left exactly as written',

  book: {
    h2: 'Book a free first lesson in Cobh',
    intro: 'Say how old the learner is and what they enjoy, and the first hour is built around that. It might end with a game, a first working program, or a table with an honest note about who is missing.',
    success: 'Thank you. We will get back to you about the lesson soon.'
  },

  faq: {
    h2: 'Cobh coding class questions',
    intro: 'The first things Cobh families ask us.',
    items: [
      { q: 'How many people live in Cobh?', a: 'The Census 2022 resident tables count 14,000 usual residents in Cobh, living in 5,253 households, 4,489 of which have broadband.' },
      { q: 'What is the data project on this page?', a: 'Reading Cobh\'s one-year-ago table, where 835 of 13,843 residents aged one and over had moved in the previous year, then proving with two made-up towns that the same table fits a town that grew and one that shrank, because nobody who left can appear in it.' },
      { q: 'So how many people left Cobh?', a: 'No census table can say. People who moved elsewhere in Ireland are counted where they went, labelled only as coming from elsewhere, and people who emigrated are not counted in the census at all. The CSO estimates national emigration separately, at 59,600 in the year to April 2022.' },
      { q: 'How do Cobh residents get to work?', a: 'Of 6,263 working residents, 3,687 drive, 651 work mainly at or from home, 456 walk, 330 are car passengers, 300 take the bus, 293 use a van and 213 take the train.' },
      { q: 'When are lessons?', a: 'After school, in the evenings and at weekends. Cobh\'s afternoon is our teachers\' evening in India, four and a half hours on while Ireland keeps summer time and five and a half through the winter, so after-school slots suit both ends.' },
      { q: 'Is coding worth starting as an adult?', a: 'Yes, and people join up to sixty-seven, many with no programming behind them. The first lesson settles whether an adult learns in a group at the right level or one to one.' },
      { q: 'Will a Cobh learner be in a group with other Cobh learners?', a: 'Not necessarily. Groups are built by level, so a learner here may share lessons with others in Cork, elsewhere in Ireland or abroad, all at the same point in the course.' },
      { q: 'Is there a Modern Age Coders classroom in Cobh?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Cobh cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Elsewhere around Cork',
    html: 'Cork\'s pages in the series start with <a class="cg-inline-link" href="/coding-classes-in-county-cork">County Cork</a> and <a class="cg-inline-link" href="/best-coding-class-in-cork">Cork city</a>, with <a class="cg-inline-link" href="/best-coding-class-in-carrigaline">Carrigaline</a> the largest town page so far, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-munster">Munster</a> covering the province. To compare online coding schools there is <a class="cg-inline-link" href="/best-online-coding-classes-ireland">one plain comparison</a>, and every page in the series hangs off the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Cobh, Cork and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-cork', label: 'County Cork' },
    { href: '/best-coding-class-in-cork', label: 'Cork city' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-cbh .cg-hero-grid { align-items: start; gap: clamp(1.08rem, 3.12vw, 2.5rem); }
.cg-root.cg-cbh .cg-hero h1 { font-weight: 700; letter-spacing: -0.0195em; line-height: 1.08; }
.cg-root.cg-cbh .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.18rem; }
.cg-root.cg-cbh .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cbh .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0127em; }
.cg-root.cg-cbh .cg-grid-3 { gap: clamp(1.06rem, 2.68vw, 2.14rem); }
.cg-root.cg-cbh .cg-table caption { letter-spacing: 0.025em; font-weight: 700; }
.cg-root.cg-cbh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cbh .cg-table tr:last-child td { font-weight: 600; }
.cg-root.cg-cbh .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.06rem; }
.cg-root.cg-cbh .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Cobh, Co Cork, CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T2T3TOWN22 (usually resident population aged 1 year and over by usual residence 1 year before Census Day): Same Address 13,008, Elsewhere in county 598, Elsewhere in Ireland 92, Outside Ireland 145, Total 13,843; the four categories sum to the total in all 867 towns. Our arithmetic: 835 at a different address, 6.03 percent; 237 from outside the county. Across the 94 towns with a total of 5,000 or more in this table: median share at a different address 7.08 percent, Cobh 22nd lowest, lowest Buncrana 4.21, highest Maynooth 13.72. SAP2022T2T1TOWN22: usual residents 14,000. SAP2022T15T2TOWN22: households 5,253, broadband 4,489, no internet 377, other 137, not stated 250. SAP2022T11T1TOWN22 to work total 6,263: car driver 3,687, work mainly at or from home 651, on foot 456, car passenger 330, bus 300, van 293, train DART or Luas 213, bicycle 36, not stated 231; to school, college or childcare total 3,721: car passenger 1,740, on foot 1,171, bus 399, car driver 110, train 90, not stated 177. SAP2022T11T4TOWN22: 1,814 work from home at least some of the time, 3,999 never, 450 not stated. SAP2022T11T5TOWN22: 891 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,488, ages 13 to 18 to 1,341. CSO Population and Migration Estimates, April 2022: "Net migration of +61,100 comprised of 120,700 immigrants and 59,600 emigrants". Cobh Heritage Centre, own site: "the port where 3 million of our people left from"; "From 1848 to 1950, over six million adults and children emigrated from Ireland"; the exhibition "is situated within Cobh\'s beautifully restored Victorian railway station". Irish Rail, Cobh: "Cobh Railway Station Cobh Co. Cork", "Eircode P24 A462", "There are no bike facilities at the station". The two made-up towns are our own illustration, stated as such on the page.',
    localProject: 'Survivorship: who can never appear in the table. Census 2022\'s one-year-ago question sorts Cobh\'s 13,843 residents aged one and over into 13,008 at the same address, 598 elsewhere in the county, 92 elsewhere in Ireland and 145 outside Ireland, so 835, 6.03 percent, had moved; only 237 came from outside the county, and a move within Cobh sits in the county category. Against the 94 towns of 5,000 or more the median is 7.08 percent and Cobh is 22nd lowest. The row counts arrivals and can never count departures. The learner builds two made-up towns person by person, Town A with 980 people a year earlier and Town B with 1,100, each with 940 staying put, 20 moving within the town and 40 arriving (20 from the county, 12 from elsewhere in Ireland, 8 from abroad), Town A losing 20 leavers and Town B 140; both produce the identical table 940 / 40 / 12 / 8 and both now hold 1,000, one up 20 and one down 100. Internal leavers do appear, in the row for wherever they went, labelled only elsewhere; emigrants appear in no census table, and the CSO estimates them in a separate series, 59,600 emigrants and 120,700 immigrants in the year to April 2022. The Cobh Heritage Centre\'s statement that 3 million people left from the port is quoted as the Centre\'s own. New family for the cluster: survivorship and selection.',
    requiredMentions: [
      '14,000',
      '13,008',
      '13,843',
      '835',
      '145',
      '59,600',
      '5,253',
      '4,489',
      '6,263',
      '3,687',
      '1,740',
      'P24 A462'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T2T3TOWN22, Cobh, Co Cork, usually resident population aged 1 year and over by usual residence 1 year before Census Day: Same Address 13,008, Elsewhere in county 598, Elsewhere in Ireland 92, Outside Ireland 145, Total 13,843; the same table for every town gives the comparison (Buncrana, Maynooth and the 94 towns of 5,000 or more).', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T3TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T1T1TOWN22, Cobh, Co Cork: usual residents 14,000; households 5,253, broadband 4,489; to work 6,263 with car driver 3,687, mainly at or from home 651, on foot 456, car passenger 330, bus 300, van 293, train 213; to school, college or childcare 3,721 with car passenger 1,740, on foot 1,171, bus 399, car driver 110, train 90; 1,814 work from home at least some of the time, 3,999 never, 450 not stated; 891 children under 15 in childcare; 1,488 aged 6 to 12 and 1,341 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO, Population and Migration Estimates, April 2022: "Net migration of +61,100 comprised of 120,700 immigrants and 59,600 emigrants".', url: 'https://www.cso.ie/en/releasesandpublications/ep/p-pme/populationandmigrationestimatesapril2022/' },
      { claim: 'Cobh Heritage Centre, own site: "the port where 3 million of our people left from"; "From 1848 to 1950, over six million adults and children emigrated from Ireland"; the exhibition "is situated within Cobh\'s beautifully restored Victorian railway station".', url: 'https://www.cobhheritage.com/' },
      { claim: 'Irish Rail, Cobh station: "Cobh Railway Station Cobh Co. Cork", "Eircode P24 A462", "There are no bike facilities at the station".', url: 'https://www.irishrail.ie/en-ie/station/cobh' }
    ],
    rejectedClaims: [
      'Any figure for the number of people who left Cobh: no table used here contains it.',
      'Comparing the town rows with the national migration estimates as like for like: one counts residents of towns, the other estimates flows for the State.',
      'The heritage centre\'s emigration figures as verified statistics: they are quoted as the Centre\'s own statement.',
      'The census-night population and density for Cobh: the County Cork page owns them, and the difference between census-night and resident counts belongs to the Killarney page.',
      'Any reason for Cobh\'s share of movers being below the median.',
      'Any claim that the two made-up towns resemble Cobh: they are an illustration of the arithmetic.'
    ]
  }
};
