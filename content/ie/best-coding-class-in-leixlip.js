'use strict';
// Leixlip (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census
// 2022 town tables for "Leixlip, Co Kildare", read 17 and 18 September 2026, CSO
// table F7070 (town of usual residence by city of place of work), and Irish
// Rail's pages for Leixlip Confey and Leixlip Louisa Bridge stations. Spine: the
// census describes the people who live in a town, not the jobs located there.
// F7070 records 3,357 Leixlip residents working in Dublin city and suburbs,
// 42.9% of the 7,823 working residents in the census travel table, by our
// arithmetic, and a further 1,111 work mainly at or from home. So the town's
// industry figures, 930 residents in manufacturing for instance, describe what
// Leixlip people do wherever they do it, and cannot be read as a picture of
// the employers inside the town. No employer is named or sized on the page:
// the obvious candidate's own websites refused automated requests on 17
// September and no figure was taken from anywhere else. Spent traps avoided;
// residence against workplace is new to the cluster. Kildare owns its own
// town population mentions, so this page uses TOWN22 usual residents. The
// all-towns row in TOWN22 tables is described as all towns combined, never as
// the State.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'LEIXLIP', blurb: 'A two-station commuter town in County Kildare, with a project on why a town\'s census describes its residents and not its employers.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-leixlip',
  code: 'lxp',
  accent: '#3F6B3A',
  accentRationale: 'Leixlip: a Liffey valley green from the solver, distinct from the Kildare county page and from Maynooth next door',
  pageType: 'city',
  place: {
    name: 'Leixlip',
    eyebrow: 'Leixlip, County Kildare',
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
  routeLabel: 'Leixlip, County Kildare, Ireland',
  title: 'Best Coding Class in Leixlip | Modern Age Coders',
  description: 'Live online coding, Python and AI classes for Leixlip learners from Confey to Louisa Bridge, ages 6 to 67, with a real teacher and small groups. First lesson free.',
  ogDescription: 'Coding and AI classes for Leixlip, with a project on why a town\'s census figures describe the people who live there rather than the jobs located there.',
  twitterDescription: 'Coding and AI classes for Leixlip, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Leixlip',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Leixlip, County Kildare, taught live in English.'
  },

  h1: 'Coding classes in Leixlip',
  capsuleQ: 'What is the best coding class in Leixlip?',
  capsule: 'Leixlip, in County Kildare, has 16,587 usual residents, 5,715 households and two railway stations of its own. Of the 7,823 residents in work, 3,357 travel into Dublin city and its suburbs, and 3,328 work from home at least some of the time. For a Leixlip learner, Modern Age Coders means a live teacher on video, twice in a typical week, in a small group of five to ten at the same level or on a one to one basis, for anyone from six to sixty-seven. The first lesson is free. From then on the fee is USD 100 a month for a group place and USD 150 for private teaching.',
  lead: 'Look up what the people of Leixlip work at and the census will tell you: commerce and trade, professional services, then manufacturing, 930 residents. It is tempting to read that as a picture of the town\'s employers. It is not. The census counts people where they live. A separate census table follows workers from their town to the city they work in, and it shows 3,357 Leixlip residents working in Dublin city and suburbs, about 43% of the town\'s working residents. Another 1,111 work mainly from home. So Leixlip\'s job figures describe what Leixlip people do, wherever they do it. The jobs inside the town are a different question entirely, and this table cannot answer it. Mixing the two up is how a commuter town gets mistaken for an industrial one, or the reverse.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Leixlip.',

  picks: {
    eyebrow: 'Course picks for Leixlip',
    h2: 'Courses Leixlip learners start with',
    intro: 'Choose by age and interest. The first lesson, free and taught by the course\'s own teacher, confirms the fit, and no payment details are taken to book it.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects where characters live in one place and work in another, and the program has to keep both addresses straight.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First Python programs, and the habit of asking what a table is really counting.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Joining a town\'s own census figures to a commuting table and seeing what each can and cannot say.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults whose reports mix up where customers or staff live with where they are served or employed.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Where Leixlip lives, and where it works',
      intro: 'Two census tables about the same residents, answering different questions. Counts are published; percentages are our arithmetic.',
      body: [
        { kind: 'table', caption: 'Leixlip\'s working residents, Census 2022', head: ['Group', 'People', 'Source table'], rows: [
          ['Residents in work, travel table', '7,823', 'Town travel table'],
          ['Working in Dublin city and suburbs', '3,357, about 42.9%', 'F7070, town of residence by city of work'],
          ['Working mainly at or from home', '1,111, about 14.2%', 'Town travel table'],
          ['Everywhere else, including the 36 below, or not stated', '3,355, about 42.9%, our subtraction', 'Derived'],
          ['Working in Cork, Limerick, Galway or Waterford cities', '36 in total', 'F7070']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What the town tables describe', p: 'Every town table in the census counts residents: their age, schooling, travel, and the industry they work in. None of it says where those jobs are. Manufacturing\'s 930 Leixlip residents may work in Leixlip or in Dublin, and the table does not distinguish.' },
          { h3: 'What the commuting table adds', p: 'F7070 follows residents to the city where they work, for the five cities only. It shows that thousands of Leixlip residents leave the town for work, which is exactly why the town\'s job figures cannot stand in for its employers.' },
          { h3: 'What a learner writes', p: 'A two-column note: questions the residence tables can answer, and questions they cannot, with the commuting table as the evidence for the line between them.' }
        ] },
        { kind: 'callout', h3: 'Residence and workplace are two different maps', p: 'Health statistics by home address, school results by the school\'s location, spending by where people live or where they shop: the same activity can be counted in two places, and each gives a true picture of a different thing. The mistake is not choosing one. The mistake is forgetting which one you chose and drawing a conclusion that only the other could support. Leixlip is a clean example because its commuting is large and measured, and a teenager who works through it will read every regional statistic afterwards asking which map it came from.' },
        { kind: 'p', text: 'The industry split, for the record, from the town table of persons at work, 7,896 residents in all: commerce and trade 2,122, professional services 1,950, manufacturing 930 and transport and communications 871. Manufacturing is about 11.8% of those at work, close to the 11.2% across all towns combined. The census table of principal economic status counts 7,896 residents at work, while the travel table counts 7,823; the two tables are titled differently, and each figure on this page is used only with its own table.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Leixlip in the town tables',
      h2: 'A settled commuter town',
      intro: 'Figures published for the built-up area Leixlip, Co Kildare, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Leixlip at a glance, April 2022', head: ['Counted', 'Leixlip'], rows: [
          ['Usual residents', '16,587'],
          ['Born in Ireland', '13,555'],
          ['Households, and those with broadband', '5,715 and 5,189'],
          ['Retired residents aged fifteen and over', '2,415'],
          ['Students aged fifteen and over', '1,366'],
          ['Children under fifteen in childcare', '1,205']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Home working', p: 'Of the 7,823 working residents, 3,328 work from home at least some of the time and 3,980 never do, with the rest not stating.' },
          { h3: 'Qualifications', p: 'Among residents whose education has finished, 1,916 hold an honours degree, 1,528 a postgraduate qualification and 119 a doctorate.' },
          { h3: 'Born elsewhere', p: 'Beyond the 13,555 born in Ireland, 1,179 residents were born outside Europe and the United Kingdom, 688 in the United Kingdom, 605 elsewhere in the European Union, 330 in India and 230 in Poland.' }
        ] },
        { kind: 'p', text: 'Broadband reaches 5,189 of the town\'s 5,715 households, about 90.8% by our arithmetic, with 171 recording no internet at all. That is well above the figure across all towns combined, and almost every Leixlip home has what a live online lesson needs.' }
      ]
    },
    {
      id: 'travel', tint: 'tint', eyebrow: 'Getting about',
      h2: 'Two stations and a car-heavy commute',
      intro: 'How residents travel, and what Irish Rail publishes about the town\'s two stations.',
      body: [
        { kind: 'table', caption: 'How Leixlip residents travel to work, Census 2022', head: ['Mode', 'Residents'], rows: [
          ['Driving a car', '3,865'],
          ['Working mainly at or from home', '1,111'],
          ['Train, DART or Luas', '667'],
          ['Bus, minibus or coach', '630'],
          ['On foot', '439'],
          ['Bicycle', '159']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Leixlip Louisa Bridge', p: 'Irish Rail gives it eircode W23 NH33, on the Dublin Connolly to Sligo route and the Maynooth, Longford and M3 Parkway services, with 309 parking spaces and two electric charging points.' },
          { h3: 'Leixlip Confey', p: 'On Captain\'s Hill, eircode W23 FV59, served by the Dublin to Maynooth, Longford and M3 Parkway services, with a 29-space car park.' },
          { h3: 'The school run', p: 'Of 4,156 residents travelling to school, college or childcare, 1,521 walk, 1,348 go as car passengers, 488 take a bus and 254 a train.' }
        ] },
        { kind: 'spec', title: 'Time spent travelling', p: 'Of residents who stated a journey time to work, school or college, 1,226 travel an hour or more, and 806 leave home before half past six. For households like those, a lesson that begins at home at a fixed hour is the one that keeps happening through the school year.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Leixlip',
      h2: 'Close to the city, without the trip',
      intro: 'Plenty is within reach of Leixlip; an evening coding class does not have to mean another journey.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'For school pupils', p: 'Lessons follow the Irish school stages, from primary through Junior Cycle, Transition Year and the Leaving Certificate years.' },
          { h3: 'For commuting parents', p: 'A weekly slot fixed around the family\'s own timetable, so nobody has to leave work early to drive to a class.' },
          { h3: 'For adults', p: 'Python, data and AI courses for adults who want programming for their own work, taught live in the evening or at the weekend.' }
        ] },
        { kind: 'p', text: 'We have no connection with Irish Rail, Kildare County Council or any school or employer in Leixlip. Census figures are quoted exactly as published; every percentage is our arithmetic; comparisons are with all towns combined, which is what the town tables\' row labelled State actually covers. No employer in the town is named or sized on this page, because the one we would have described did not allow its own figures to be read automatically, and we do not take such figures from anywhere else.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From one address to two',
    intro: 'The age bands are a starting point; the first lesson settles the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Home and away', p: 'Programs where each character has a home and a place they go, and both have to be tracked.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Which question a table answers', p: 'Reading a table\'s title and working out what it can and cannot tell you.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Joining two tables honestly', p: 'Combining residence and commuting data without claiming more than either supports.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Two maps at work', p: 'Keeping customer, staff and service locations straight in real reporting.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask what Leixlip\'s economy is built on',
    intro: 'A quick answer will summarise the town\'s industry table and call it the local economy.',
    p1: 'The industry table is the obvious place to look, and a generated summary will read it as a description of the businesses in Leixlip. That is the natural reading and the wrong one: the table describes residents, thousands of whom work in Dublin. Nothing in the numbers themselves reveals that; it takes a second table to see it.',
    p2: 'A learner who has put the commuting table beside the town table asks, of any local statistic, whether it counts people where they live or where they go. That question is simple, and it is what stops a true figure being used to support a false story.',
    closer: 'Summaries will keep getting faster. Knowing which map a number belongs to is still a human judgement, and a good reason to learn this properly in 2026.',
    blogAnchor: 'why learning to code is still worth it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Classes that fit a Leixlip week',
    intro: 'The practical arrangements, stated plainly.',
    cells: [
      { h3: 'Taught live', p: 'A teacher leads every lesson in real time, and the learner speaks, asks and tries things during it.' },
      { h3: 'By level', p: 'Groups of five to ten learners at one ability level, drawn from Leixlip, elsewhere in Ireland and other countries.' },
      { h3: 'A set weekly pattern', p: 'Usually two lessons a week, about eight a month, at a time chosen at the start.' },
      { h3: 'School calendar in mind', p: 'Mid-terms, holidays and exam weeks are planned around rather than discovered late.' },
      { h3: 'What is needed', p: 'A computer, sound that works and a video-capable connection, all confirmed in the free lesson.' },
      { h3: 'Private option', p: 'Where no group at the right level meets at a workable hour, the course is taught one to one.' }
    ],
    spec: { title: 'For households that already work from home', p: 'With 3,328 Leixlip residents working from home at least some of the time, many homes already have the desk, the connection and the habit of a video call at a fixed hour. Adding a child\'s lesson to that routine is a small step.' }
  },

  fees: {
    h2: 'Leixlip class fees',
    intro: 'Three prices, stated once.',
    first: 'A full first lesson at no cost, ending with a level and a recommended course.',
    group: 'A month in a group of five to ten at one level, about eight lessons.',
    private: 'A month of one to one teaching on the same weekly schedule.',
    closer: 'Fees are charged monthly in US dollars, the single rate for families outside India, identical in Leixlip and everywhere else in Ireland, with no euro price list. Nothing is paid before the free lesson has agreed a course and an hour, and pauses, missed lessons and switching between group and private are covered on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, as our families wrote them',

  book: {
    h2: 'Book the free lesson',
    intro: 'Tell us the learner\'s age and interests, and the first hour will be planned for them, whether a first Scratch game or census tables about where a town lives and where it works.',
    success: 'Thank you. Somebody will be in touch about the Leixlip class shortly.'
  },

  faq: {
    h2: 'Leixlip coding class questions',
    intro: 'What Leixlip families ask first.',
    items: [
      { q: 'How many people live in Leixlip?', a: 'The census small area tables count 16,587 usual residents in the built-up area of Leixlip, in 5,715 households. Our Kildare page quotes the census town list, which uses a different population measure.' },
      { q: 'What is the Leixlip data project?', a: 'Learners compare the town\'s own census job figures with a commuting table showing 3,357 residents working in Dublin city and suburbs, and work out why a town\'s census describes its residents rather than its employers.' },
      { q: 'How many Leixlip residents work from home?', a: 'The census counts 3,328 of the town\'s 7,823 working residents working from home at least some of the time, and 1,111 working mainly at or from home.' },
      { q: 'Which Leixlip stations are there?', a: 'Irish Rail lists two: Leixlip Louisa Bridge, W23 NH33, and Leixlip Confey on Captain\'s Hill, W23 FV59.' },
      { q: 'When do lessons take place?', a: 'After school, in the evening and on weekend mornings. Teaching is done from India, where the clock is four and a half hours ahead of Ireland in summer and five and a half in winter, so Irish evenings fall inside the working day there. The time is fixed in the free lesson.' },
      { q: 'Do you teach adults as well as children?', a: 'Yes. Learners run from six to sixty-seven, and adults are placed by level and goal in the free lesson, in a group or privately.' },
      { q: 'Does a learner need any experience?', a: 'No. The free lesson finds the real starting point, and the course begins there.' },
      { q: 'Is there a Modern Age Coders classroom in Leixlip?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Leixlip cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Near Leixlip',
    html: 'Next door is <a class="cg-inline-link" href="/best-coding-class-in-maynooth">Maynooth</a>, and the town sits within <a class="cg-inline-link" href="/coding-classes-in-county-kildare">County Kildare</a> and the province of <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. Many residents work in <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a>, which has its own page. For a comparison of online coding schools see <a class="cg-inline-link" href="/best-online-coding-classes-ireland">this guide</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists everything else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Leixlip, Kildare and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-maynooth', label: 'Maynooth' },
    { href: '/coding-classes-in-county-kildare', label: 'County Kildare' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-lxp .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.07vw, 2.57rem); }
.cg-root.cg-lxp .cg-hero h1 { font-weight: 700; letter-spacing: -0.0188em; line-height: 1.065; }
.cg-root.cg-lxp .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-lxp .cg-eyebrow { letter-spacing: 0.173em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lxp .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0136em; }
.cg-root.cg-lxp .cg-grid-3 { gap: clamp(1.04rem, 2.56vw, 2.04rem); }
.cg-root.cg-lxp .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-lxp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lxp .cg-table tr:nth-child(2) td { font-weight: 600; }
.cg-root.cg-lxp .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.02rem; }
.cg-root.cg-lxp .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Leixlip, the built-up area "Leixlip, Co Kildare", CSO Census 2022 Small Area Population town tables, read 17 and 18 September 2026. SAP2022T2T1TOWN22: usual residents 16,587; born Ireland 13,555, United Kingdom 688, Poland 230, India 330, other EU 605, rest of world 1,179. SAP2022T15T2TOWN22: households 5,715, broadband 5,189, no internet 171, not stated 299. SAP2022T11T1TOWN22 travel to work, total 7,823: car driver 3,865, work mainly at or from home 1,111, train DART or Luas 667, bus 630, on foot 439, van 370, bicycle 159, not stated 330; travel to school, college or childcare, total 4,156: on foot 1,521, car passenger 1,348, bus 488, train 254. SAP2022T11T2TOWN22: before 06:30, 806 of 10,265 with 673 not stated. SAP2022T11T3TOWN22: 1 hour to under 1.5 hours 986, 1.5 hours and over 240. SAP2022T11T4TOWN22: 7,823 working persons, 3,328 work from home, 3,980 never, 515 not stated. SAP2022T11T5TOWN22: 1,205 children under 15 in childcare. SAP2022T14T1TOWN22 persons at work, total 7,896: commerce and trade 2,122, professional services 1,950, manufacturing 930, transport and communications 871; all-towns row manufacturing 183,909 of 1,644,493. SAP2022T8T1TOWN22 principal economic status: at work 7,896, student 1,366, retired 2,415. SAP2022T10T4TOWN22 education ceased: honours bachelor 1,916, postgraduate 1,528, doctorate 119, total 11,116. CSO table F7070, population usually resident and present in the State by town of usual residence and city of place of work, Leixlip, Co Kildare: Dublin city and suburbs 3,357, Cork city and suburbs 15, Limerick city and suburbs 13, Galway city and suburbs 5, Waterford city and suburbs 3. Irish Rail: Leixlip Louisa Bridge Station, Leixlip, Co. Kildare, Eircode W23 NH33, routes Dublin Connolly to Sligo and Dublin to Maynooth, Longford and M3 Parkway, car park 309 spaces, 3 disabled, 2 electric car charging points, 24 hours; Leixlip Confey Station, Captain\'s Hill, Leixlip, Co. Kildare, Eircode W23 FV59, route Dublin to Maynooth, Longford and M3 Parkway, car park 29 spaces, 1 disabled.',
    localProject: 'The census describes where people live, not where the jobs are. Leixlip\'s town tables report the industries of its residents, including 930 in manufacturing of 7,896 at work, about 11.8 percent against 11.2 percent across all towns combined. CSO table F7070, town of usual residence by city of place of work, shows 3,357 Leixlip residents working in Dublin city and suburbs, which is 42.9 percent of the 7,823 working residents in the town travel table by our arithmetic, with a further 1,111, 14.2 percent, working mainly at or from home, and 36 working in the other four cities combined. By subtraction, 3,355 work somewhere other than Dublin city and suburbs or did not state a mode. Because so many residents work outside the town, the residence-based industry table cannot describe the employers located in Leixlip, which the census town tables do not measure at all. Output: a two-column note separating questions the residence tables answer from those they cannot, using the commuting table as evidence. No employer is named or sized: the website of the large manufacturer most associated with the town refused automated requests on 17 September 2026 and no figure was taken from any other source. The principal economic status table counts 7,896 at work and the travel table 7,823; the tables are titled differently and each figure is used only with its own table, with no cause asserted for the difference.',
    requiredMentions: [
      '16,587',
      '13,555',
      '5,715',
      '5,189',
      '7,823',
      '3,865',
      '3,357',
      '3,328',
      '3,980',
      '2,415',
      'W23 FV59',
      'W23 NH33'
    ],
    sources: [
      { claim: 'CSO Census 2022 table F7070, population usually resident and present in the State by town of usual residence and city of place of work: Leixlip, Co Kildare to Dublin city and suburbs 3,357; to Cork city and suburbs 15; to Limerick city and suburbs 13; to Galway city and suburbs 5; to Waterford city and suburbs 3.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F7070/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, means of travel, Leixlip, Co Kildare: to work total 7,823, car driver 3,865, mainly at or from home 1,111, train DART or Luas 667, bus 630, on foot 439, bicycle 159; to school, college or childcare total 4,156, on foot 1,521, car passenger 1,348, bus 488, train 254.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T14T1TOWN22 and SAP2022T8T1TOWN22, Leixlip, Co Kildare: persons at work 7,896, commerce and trade 2,122, professional services 1,950, manufacturing 930, transport and communications 871; all-towns row manufacturing 183,909 of 1,644,493; retired 2,415, students 1,366.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T14T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22 and SAP2022T15T2TOWN22, Leixlip, Co Kildare: usual residents 16,587, born Ireland 13,555, rest of world 1,179, United Kingdom 688, other EU 605, India 330, Poland 230; households 5,715, broadband 5,189, no internet 171.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T11T2TOWN22, SAP2022T11T3TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T10T4TOWN22, Leixlip, Co Kildare: 806 leaving before 06:30; 986 travelling 1 hour to under 1.5 hours and 240 for 1.5 hours or more; 7,823 working persons, 3,328 work from home, 3,980 never; 1,205 children in childcare; honours degree 1,916, postgraduate 1,528, doctorate 119.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T4TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Leixlip Louisa Bridge: "Iarnrod Eireann, Leixlip Louisa Bridge Station, Leixlip, Co. Kildare Eircode W23 NH33"; routes Dublin Connolly to Sligo and Dublin to Maynooth, Longford and M3 Parkway; "Spaces : 309 Disabled Parking : 3 Electric Car Charging : 2".', url: 'https://www.irishrail.ie/en-ie/station/leixlip-louisa-bridge' },
      { claim: 'Irish Rail, Leixlip Confey: "Iarnrod Eireann, Leixlip Confey Station, Captain\'s Hill Leixlip, Co.Kildare Eircode W23 FV59"; route Dublin to Maynooth, Longford and M3 Parkway; "Spaces : 29 Disabled Parking : 1".', url: 'https://www.irishrail.ie/en-ie/station/leixlip-confey' }
    ],
    rejectedClaims: [
      'Any figure for the size or workforce of any employer in Leixlip: the most relevant company website refused automated requests and no figure was taken from elsewhere.',
      'Reading the town industry table as a description of employers located in Leixlip: it describes residents wherever they work.',
      'Any claim about where the 3,355 residents not working in Dublin city and suburbs or at home actually work: F7070 covers the five cities only.',
      'Any cause for the difference between 7,896 at work and 7,823 working persons: the two tables are titled differently and no definition was checked.',
      'Calling the TOWN22 row labelled State the national figure: it is all 867 towns combined.',
      'Using the Kildare page\'s town-list population for Leixlip as a mention.'
    ]
  }
};
