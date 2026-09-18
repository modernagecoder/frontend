'use strict';
// Newbridge (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Newbridge, Co Kildare", read 18 September 2026, the Irish
// Rail station page for Newbridge and Newbridge College's own site. Spine: a
// count of one is a person. The same travel table that gives Newbridge 11,031
// working residents carries 868 town labels, 360 of them with fewer than 200
// working residents, the smallest at 33, and 260 towns whose bicycle or train
// cell holds exactly one person. Counted in this session from the table itself.
// New family for the cluster: small cells and disclosure risk, framed as the
// reader's duty when joining or cross-tabulating, with no claim about what the
// CSO does. Kildare owns the town-list population 24,366 and the library eircode,
// so neither appears. Riverbank Arts Centre refused automated requests, so
// Newbridge College is the second named source.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'NEWBRIDGE', blurb: 'In 260 of the 867 towns in one census column, a cell holds exactly one person. What that means for anyone building with data.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-newbridge',
  code: 'nwb',
  accent: '#2E6B8A',
  accentRationale: 'Newbridge: a Liffey blue from the solver, kept apart from the Kildare county accent and the four other Kildare town pages',
  pageType: 'city',
  place: {
    name: 'Newbridge',
    eyebrow: 'Newbridge, County Kildare',
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
  routeLabel: 'Newbridge, County Kildare, Ireland',
  title: 'Best Coding Class in Newbridge | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Newbridge learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Newbridge, with a project on what a census cell of one person means for anyone who builds with data.',
  twitterDescription: 'Coding and AI classes for Newbridge, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-and-ai-analytics-for-non-programmers-course',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Newbridge',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Newbridge, County Kildare, taught live in English.'
  },

  h1: 'Coding classes in Newbridge',
  capsuleQ: 'What is the best coding class in Newbridge?',
  capsule: 'Newbridge counts 24,253 usual residents in the census town tables and 8,308 households, 7,184 of them reporting broadband. Two evenings in a normal week, a teacher appears on video at the hour the household picked, and the learner works through the course either with a handful of others at the same stage or with nobody else present. Ages six to sixty-seven. The opening lesson is free. USD 100 a month buys a shared place after that, USD 150 a private one.',
  lead: 'Newbridge is a large town: 594 of its 11,031 working residents give a train as their main means of travel, and every figure on this page describes hundreds or thousands of people. The same column of the same table, read across all 867 towns in it, looks very different at the other end. In 260 of those towns, either the bicycle cell or the train cell holds exactly one person. The smallest town in the column has 33 working residents in total. One is not a statistic, it is somebody, and the moment a reader joins that table to anything else, or splits it by one more variable, the arithmetic stops being anonymous. That is the project on this page, and it is the part of data work most likely to matter in a learner\'s first job.',
  wa: 'Hello Modern Age Coders, I want to book a free coding lesson for a learner in Newbridge.',

  picks: {
    eyebrow: 'Course picks for Newbridge',
    h2: 'Where Newbridge learners start',
    intro: 'Age and interest give a starting point; the free hour with the course teacher confirms it.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding where a project decides what it is fair to show about other people.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python from the start, including what a program should and should not store.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real data, small groups, and the habit of aggregating before publishing anything.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults handling customer or staff data where a small group is a named person.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A count of one is a person',
      intro: 'The Newbridge column beside the smallest entries in the same table. Counts are published; the tallies across all 867 towns were computed by us on 18 September 2026.',
      body: [
        { kind: 'table', caption: 'The two ends of one census column', head: ['Area as labelled', 'Working residents', 'Cycling', 'Train, DART or Luas'], rows: [
          ['Newbridge, Co Kildare', '11,031', '201', '594'],
          ['Dumha Thuama, Co Mayo', '33', '0', '1'],
          ['Ballindrait, Co Donegal', '37', '0', '0'],
          ['Malin, Co Donegal', '39', '0', '0'],
          ['Dromineer, Co Tipperary', '43', '0', '0'],
          ['Towns in the column with fewer than 200 working residents', '360 of 867', '', ''],
          ['Towns whose cycling or train cell is exactly one person', '260 of 867', '', '']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What a cell of one means', p: 'In a place with 33 working residents, a row saying one person travels by train is a description of somebody a neighbour could name. The published table gives one variable at a time, which is what keeps it a count rather than a profile.' },
          { h3: 'Where the risk actually appears', p: 'Not in reading the table, but in combining it. Split that one person by age, or by industry, or join the row to a second dataset, and a learner has built a record about an identifiable individual out of public files, usually without noticing.' },
          { h3: 'The rule to work by', p: 'Decide a minimum group size before publishing anything, aggregate or merge cells that fall below it, and never map or plot a group so small that a reader could point at a house. The threshold is a judgement; having one at all is not.' }
        ] },
        { kind: 'callout', h3: 'The same duty, at every scale a learner will meet', p: 'A class project that charts survey answers from one school year. A club dashboard showing who has not renewed. A shop report broken down by staff member and hour. A school app showing how many pupils took a particular route home. Each is a small-numbers problem wearing ordinary clothes, and in each the fix is the same: aggregate to groups large enough that no row describes one identifiable person, keep raw records out of anything published, and ask whether the person counted would recognise themselves in the output. That question is worth more than any privacy policy a young coder will ever be handed.',
        },
        { kind: 'p', text: 'The project is a guard rather than an analysis. The learner writes a function that takes a table and a minimum group size, returns the rows it would publish and the rows it would suppress, and prints a one-line reason for every suppression. Run across this census column at a threshold of five, it flags hundreds of rows in the smallest towns and none in Newbridge. The learner then applies the same function to a dataset of their own, which is where the lesson stops being about Mayo and Donegal and starts being about the people in their own file.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Newbridge in the town tables',
      h2: 'The town itself',
      intro: 'Published for the built-up area Newbridge, Co Kildare, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Newbridge, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '24,253'],
          ['Households', '8,308'],
          ['Households reporting broadband', '7,184'],
          ['Working residents in the travel table', '11,031'],
          ['Working residents who drive', '5,841'],
          ['Children under fifteen in childcare', '1,521']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The work journey', p: 'Of 11,031 working residents, 5,841 drive, 1,092 walk, 1,036 give home as their main answer, 611 travel by van, 594 by train, DART or Luas, 593 as a car passenger, 424 by bus and 201 cycle.' },
          { h3: 'The education journey', p: 'Of 6,603 journeys to school, college or childcare, 2,786 are as a car passenger, 2,148 on foot, 494 by bus, 274 by train and 203 by bicycle.' },
          { h3: 'Home working', p: 'A separate table records 3,082 working residents doing at least some work at home, 6,916 who never do and 1,033 who did not state.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives Newbridge station as Station Road, Newbridge, Co. Kildare, Eircode W12 CP28, with the station and booking office open from 06:00 to midnight Monday to Saturday and from 09:00 to 23:00 on Sunday, a ticket machine, passenger shelters, and toilets listed as closed until further notice.' }
      ]
    },
    {
      id: 'threshold', tint: 'tint', eyebrow: 'Choosing a threshold',
      h2: 'What a minimum group size costs and buys',
      intro: 'The same column, counted at four candidate thresholds. Every figure here is our tally across the 868 town labels.',
      body: [
        { kind: 'table', caption: 'How many towns fall below a threshold on working residents', head: ['Minimum group size', 'Towns below it', 'What is lost'],
          rows: [
            ['33', 'None, this is the smallest town in the column', 'Nothing, and nothing is protected either'],
            ['50', 'A handful at the very bottom', 'Almost nothing, and the thinnest cells are still published'],
            ['200', '360 of 867 towns', 'Detail for two fifths of the places in the column'],
            ['1,000', 'Most of the column', 'Almost all small-town detail, for near-complete safety']
          ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'There is no free threshold', p: 'Every level protects someone and hides something. Naming the trade-off is the work; pretending a number is obvious is how it gets set badly.' },
          { h3: 'Newbridge is never the problem', p: 'At 11,031 working residents, no cell on this page comes close to identifying anybody. Pages about large towns are the easy case, and the rule still has to be written for the hard one.' },
          { h3: 'Nothing here judges the CSO', p: 'The published table gives single-variable counts and nothing on this page claims to know how it was prepared. The duty being described is the reader\'s, from the moment they combine it with anything else.' }
        ] },
        { kind: 'spec', title: 'A school in the town', p: 'Newbridge College gives its address as Newbridge, Co. Kildare, eircode W12C241, and describes itself as a co-educational voluntary secondary school established by the Dominican order in 1852, under the trusteeship of the Provincial of the Irish Province of Dominicans. We have no connection with it.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Newbridge',
      h2: 'How the lessons work',
      intro: 'A weekly hour, a live teacher, and projects built on data the learner is allowed to use.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Younger learners', p: 'Block coding and games, where the first question about any data is whose it is.' },
          { h3: 'Teenagers', p: 'Python, websites and AI projects, with public datasets rather than classmates\' details.' },
          { h3: 'Adults', p: 'The adult courses cover Python, data and AI, and 3,082 working residents in this town already spend part of the week at a desk at home.' }
        ] },
        { kind: 'p', text: 'Irish Rail and Newbridge College are quoted from their own published pages, and we have no connection with either, nor with Kildare County Council. Riverbank Arts Centre refused automated requests on 18 September 2026, so nothing is quoted from it rather than taken from somewhere else. Census counts are Central Statistics Office figures printed as published, and the tallies across 868 town labels were computed by us from the same table on that date.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From using data to handling it responsibly',
    intro: 'Ages are a guide; the free hour sets the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Whose information is it', p: 'Projects that use made-up or public data rather than details about classmates.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Counting groups', p: 'Grouping and summarising in Python, and noticing when a group gets too small to show.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Publishing safely', p: 'Aggregation thresholds, suppression and what a join can accidentally reveal.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Data you are trusted with', p: 'Reporting on customers, staff or pupils without turning a summary into a profile.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Assistants will happily break a small group down further',
    intro: 'The request sounds analytical. The output is a person.',
    p1: 'Ask a model to break a small dataset down by two or three variables and it will do it without comment, because nothing in the request looks like a privacy question. The result can be a row describing one individual, produced from files that were perfectly safe a moment earlier, and no warning appears anywhere in the answer.',
    p2: 'A learner who has written the suppression guard adds the group size to the prompt, checks the smallest cell in whatever comes back, and refuses to publish rows below the line. It takes one extra look and it is the difference between a summary and an accidental disclosure.',
    closer: 'Tools will keep making analysis easier. Deciding what should not be published stays with the person, and it is worth learning early.',
    blogAnchor: 'why coding is a skill worth building'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Practical points for Newbridge families',
    intro: 'Six lines.',
    cells: [
      { h3: 'Live teaching', p: 'A teacher present for the whole hour, working from what the learner is doing.' },
      { h3: 'Grouped by stage', p: 'Five to ten learners at one level, from Newbridge, the rest of Ireland and beyond.' },
      { h3: 'Two lessons weekly', p: 'About eight a month, at an hour agreed once at the start.' },
      { h3: 'Term dates', p: 'Mid-terms, holidays and exam weeks are planned in before lessons begin.' },
      { h3: 'What is needed', p: 'Something with a proper keyboard, a microphone the teacher can hear, and a connection that holds video.' },
      { h3: 'Private teaching', p: 'Some learners end up alone with a teacher, either because their stage is unusual or because the only suitable group meets at an impossible hour.' }
    ],
    spec: { title: 'What we keep about a learner', p: 'A name, a contact, an age band and a level. We do not need more than that to teach somebody, and a page about small cells would look odd holding anything else.' }
  },

  fees: {
    h2: 'Newbridge class fees',
    intro: 'Three lines, all of it.',
    first: 'A full opening lesson, taught and assessed, at no charge.',
    group: 'A month in an ability group of five to ten, about eight live lessons.',
    private: 'A month of private teaching on the same weekly pattern.',
    closer: 'Fees are monthly, in US dollars, at the single rate for families outside India, so Newbridge sees the same figure as Naas or Celbridge with no euro list beside it. The first invoice waits on two decisions, which course and which hour, and both are made during the lesson that costs nothing. Term breaks, an absence and a switch from a group to private tuition are each written up on the pricing page.'
  },

  reviewsH2: 'Six of our families, printed from Google as they wrote it',

  book: {
    h2: 'Book a free Newbridge lesson',
    intro: 'Give us the age and what holds their attention. We plan the opening hour from those two things, and it might end in a working game, a short program or a table nobody should publish as it stands.',
    success: 'Thank you. We will be in touch about the Newbridge lesson shortly.'
  },

  faq: {
    h2: 'Newbridge coding class questions',
    intro: 'What Newbridge families ask us first.',
    items: [
      { q: 'How many people live in Newbridge?', a: 'The Census 2022 small area tables count 24,253 usual residents in the built-up area of Newbridge, in 8,308 households. Our Kildare page quotes the census town list, which measures town populations on a slightly different basis.' },
      { q: 'What is the Newbridge data project?', a: 'Learners write a suppression guard: a function that takes a table and a minimum group size, publishes the rows above it, suppresses the rest and gives a reason for each. Run on the census travel column it flags hundreds of rows in the smallest towns and none in Newbridge.' },
      { q: 'Why does a cell of one person matter?', a: 'Because it describes somebody rather than a group. The published table gives one variable at a time, but a reader who joins it to another dataset or splits it further can build a record about an identifiable individual from public files.' },
      { q: 'How do Newbridge residents travel to work?', a: 'Of the 11,031 working residents in the travel table, 5,841 drive, 1,092 walk, 1,036 give working mainly at or from home, 611 use a van, 594 take a train, DART or Luas, 593 travel as a car passenger, 424 take a bus and 201 cycle.' },
      { q: 'What times do lessons run?', a: 'After school, in the evenings and on weekend mornings. Lessons land in our teachers\' evening in India, four and a half hours after yours in summer and five and a half in winter, and the weekly slot is agreed in the free hour.' },
      { q: 'Do you teach adults in Newbridge?', a: 'Yes. Sixty-seven is the oldest we have taught, complete beginners are ordinary here, and placement, whether alongside peers or alone with a teacher, comes out of the first hour rather than a form.' },
      { q: 'What data do you hold about a learner?', a: 'A name, a contact, an age band and an assessed level, and nothing beyond what teaching requires.' },
      { q: 'Is there a Modern Age Coders classroom in Newbridge?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Newbridge cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Newbridge',
    html: 'Other Kildare pages cover <a class="cg-inline-link" href="/best-coding-class-in-naas">Naas</a>, <a class="cg-inline-link" href="/best-coding-class-in-celbridge">Celbridge</a> and <a class="cg-inline-link" href="/best-coding-class-in-maynooth">Maynooth</a>, inside <a class="cg-inline-link" href="/coding-classes-in-county-kildare">County Kildare</a> and the province of <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. Online schools are compared on our <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Newbridge, Kildare and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-naas', label: 'Naas' },
    { href: '/coding-classes-in-county-kildare', label: 'County Kildare' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-nwb .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.09vw, 2.55rem); }
.cg-root.cg-nwb .cg-hero h1 { font-weight: 700; letter-spacing: -0.0171em; line-height: 1.072; }
.cg-root.cg-nwb .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.18rem; }
.cg-root.cg-nwb .cg-eyebrow { letter-spacing: 0.155em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-nwb .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0115em; }
.cg-root.cg-nwb .cg-grid-3 { gap: clamp(1.01rem, 2.56vw, 2.0rem); }
.cg-root.cg-nwb .cg-table caption { letter-spacing: 0.042em; font-weight: 700; }
.cg-root.cg-nwb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nwb .cg-table tr:first-child td { border-bottom: 2px solid var(--cg-accent); }
.cg-root.cg-nwb .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-nwb .cg-callout { border-left-width: 10px; }
`,

  dossier: {
    curriculumAuthority: 'Newbridge, the built-up area "Newbridge, Co Kildare", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T11T1TOWN22 to work total 11,031: car driver 5,841, on foot 1,092, work mainly at or from home 1,036, van 611, train DART or Luas 594, car passenger 593, not stated 566, bus 424, bicycle 201, motorcycle 47, other including lorry 26; to school, college or childcare total 6,603: car passenger 2,786, on foot 2,148, bus 494, not stated 453, train 274, bicycle 203, car driver 201, work mainly at or from home 32, other 7, van 5, motorcycle 0. Counted by us across the same table on the same date: the town dimension holds 868 labels, 867 towns plus the all-towns row labelled State; 360 of the towns have fewer than 200 working residents; the smallest is Dumha Thuama, Co Mayo with 33, followed by Ballindrait, Co Donegal 37, Malin, Co Donegal 39 and Dromineer, Co Tipperary 43; in 260 towns either the bicycle cell or the train cell of the work block holds exactly one person; in 307 towns the bicycle cell is zero. Dumha Thuama has 33 working residents, 0 cycling and 1 by train. SAP2022T2T1TOWN22: usual residents 24,253, born in Ireland 18,530. SAP2022T15T2TOWN22: households 8,308, broadband 7,184, other 146, none 497, not stated 481. SAP2022T11T4TOWN22: 11,031 working persons, 3,082 work from home at least some of the time, 6,916 never, 1,033 not stated. SAP2022T11T5TOWN22: 1,521 children under 15 in childcare, 620 aged 0 to 4 and 901 aged 5 to 14. SAP2022T8T1TOWN22: at work 11,082, students 2,120, retired 2,501, total aged 15 and over 19,229. Irish Rail, Newbridge station: "Station Road, Newbridge, Co. Kildare", "Eircode W12 CP28", station and booking office "Monday to Saturday: 06:00 - 00:00", "Sunday : 09:00- 23:00", "The toilets at this station are closed until further notice". Newbridge College: "Newbridge, Co. Kildare, W12C241", "a co-educational voluntary secondary school established by the Dominican order in 1852", "under the trusteeship of the Provincial of the Irish Province of Dominicans". Riverbank Arts Centre returned a refusal to automated requests on 18 September 2026 and is not quoted.',
    localProject: 'A count of one is a person. Newbridge is large, 11,031 working residents with 594 giving a train as their main means and 201 cycling, so no cell on the page comes near identifying anybody. The same column across all 867 towns, 868 labels once the all-towns row labelled State is counted, is different: 360 towns have fewer than 200 working residents, the smallest being Dumha Thuama, Co Mayo at 33, and in 260 towns either the bicycle or the train cell holds exactly one person. A published single-variable count stays a count; the risk appears when a reader splits it by another variable or joins it to a second dataset, at which point a record about an identifiable individual has been built out of public files. The page therefore teaches a minimum group size, states that every threshold protects someone and hides something, and sets out four candidate levels with what each costs. Nothing on the page claims to know how the CSO prepares its tables; the duty described is the reader\'s. The learner writes a suppression guard, a function taking a table and a minimum group size that returns publishable rows, suppressed rows and a reason for each, runs it over the census column at a threshold of five, then over a dataset of their own. New family for the cluster: small cells and disclosure risk.',
    requiredMentions: [
      '24,253',
      '8,308',
      '7,184',
      '11,031',
      '5,841',
      '6,603',
      '2,786',
      '2,148',
      '3,082',
      '1,521',
      'W12 CP28',
      'W12C241'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, means of travel: Newbridge, Co Kildare to work 11,031 with car driver 5,841, on foot 1,092, mainly at or from home 1,036, van 611, train 594, car passenger 593, bus 424, bicycle 201, not stated 566; to school, college or childcare 6,603 with car passenger 2,786, on foot 2,148, bus 494, train 274, bicycle 203, car driver 201. Across the same table: 867 towns plus the all-towns row, 360 towns with fewer than 200 working residents, smallest Dumha Thuama, Co Mayo at 33 with 1 travelling by train, and 260 towns whose bicycle or train cell is exactly 1.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T8T1TOWN22, Newbridge: usual residents 24,253, born in Ireland 18,530; households 8,308, broadband 7,184, no internet 497, not stated 481; 3,082 work from home at least some of the time, 6,916 never, 1,033 not stated; 1,521 children under 15 in childcare; at work 11,082, students 2,120, retired 2,501.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Newbridge station: "Station Road, Newbridge, Co. Kildare", "Eircode W12 CP28"; station and booking office "Monday to Saturday: 06:00 - 00:00" and "Sunday : 09:00- 23:00"; "The toilets at this station are closed until further notice".', url: 'https://www.irishrail.ie/en-ie/station/newbridge' },
      { claim: 'Newbridge College: "Newbridge, Co. Kildare, W12C241"; "Newbridge College is a co-educational voluntary secondary school established by the Dominican order in 1852"; "under the trusteeship of the Provincial of the Irish Province of Dominicans".', url: 'https://www.newbridge-college.ie/' }
    ],
    rejectedClaims: [
      'Any claim about how the Central Statistics Office prepares, checks or protects its tables: nothing on the page knows that, and the duty described is the reader\'s.',
      'Any cross-tabulation or join that would produce a cell describing an identifiable person, including for the small towns named.',
      'Presenting any threshold as the correct one: each is shown with what it costs and what it protects.',
      'Riverbank Arts Centre: it refused automated requests on 18 September 2026, so nothing is quoted from it and no substitute source was used in its place.',
      'The census town-list population of Newbridge and the Kildare library eircode: the County Kildare page owns both.',
      'Any reason for the town\'s rail or cycling shares.'
    ]
  }
};
