'use strict';
// Laytown-Bettystown (cg- town page, Ireland cluster, Phase 7). Facts from the CSO
// Census 2022 town tables for "Laytown-Bettystown-Mornington-Donacarney, Co
// Meath", read 19 September 2026, the Irish Rail station page for Laytown and
// Meath County Council's own list of municipal district meetings. Spine: build a
// search box that finds Bettystown. A constructive page rather than a pitfall:
// the learner designs a place-name search and tests three designs against the 867
// census town labels. Exact matching on "Bettystown, Co Meath" finds nothing;
// plain substring matching on "Meath" finds 58 labels including Omeath, Co Louth,
// and on "Kill" finds 23; matching whole words finds the town, 36 Meath labels
// with no Omeath, and exactly the two towns called Kill. All run in this session.
// The Longford page owns the substring false positive as a trap; here it is one
// failed test on the way to a working tool. Meath owns the town-list population
// and the council eircode; the county page's commuting point is not repeated.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'LAYTOWN-BETTYSTOWN', blurb: 'A town the census names four times over. The project: build a search box that still finds it when somebody types Bettystown.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-laytown-bettystown',
  code: 'lbt',
  accent: '#7A5A3A',
  accentRationale: 'Laytown-Bettystown: a strand-sand brown from the solver, set apart from the Meath county indigo and the Drogheda teal nearby',
  pageType: 'city',
  place: {
    name: 'Laytown-Bettystown',
    eyebrow: 'Laytown, Bettystown, Mornington and Donacarney, County Meath',
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
  routeLabel: 'Laytown-Bettystown, County Meath, Ireland',
  title: 'Best Coding Class in Laytown and Bettystown | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Laytown and Bettystown learners aged 6 to 67, taught live in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Laytown, Bettystown, Mornington and Donacarney, with a project to build a place-name search that actually works.',
  twitterDescription: 'Coding and AI classes for Laytown and Bettystown, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Laytown and Bettystown',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Laytown, Bettystown, Mornington and Donacarney, County Meath, taught live in English.'
  },

  h1: 'Coding classes in Laytown and Bettystown',
  capsuleQ: 'What is the best coding class in Laytown and Bettystown?',
  capsule: 'The census counts 15,542 usual residents in the built-up area it names Laytown-Bettystown-Mornington-Donacarney, in 5,055 households, 4,527 of them on broadband. Our lessons come to those homes over live video, twice in most weeks, with a teacher who works through the course with a few learners at the same level or with one learner alone, for anybody from six to sixty-seven. The first lesson costs nothing. After that a group place is USD 100 a month and private lessons are USD 150.',
  lead: 'The Central Statistics Office names this town Laytown-Bettystown-Mornington-Donacarney, Co Meath, one label for four places. Most people will type Bettystown, or Laytown, into a search box, and whether they find anything depends entirely on how the search was built. So this page is not about a mistake in data; it is about making something that works. The learner builds a place-name search for the 867 census towns, tries three designs, and keeps the one that passes every test. Exact matching fails on the first try. Matching any fragment of text drags in the wrong towns. Matching whole words finds Bettystown, finds only the two towns actually called Kill, and keeps Omeath in Louth out of a search for Meath. Every result below was produced by running the code.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Laytown or Bettystown.',

  picks: {
    eyebrow: 'Course picks for Laytown and Bettystown',
    h2: 'Where learners here usually begin',
    intro: 'Choose on age and interest. The first lesson, taught by that course\'s teacher, settles the right starting point.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects with a search or a guessing game, where matching words is the whole trick.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python strings and lists, splitting text into words and checking whether they match.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 14 to 18', note: 'Building real tools with tests: a search that has to pass cases before it counts as working.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults building lookups and matching rules at work, where the cost of a wrong match is real.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Build a search box that finds Bettystown',
      intro: 'Three designs for searching the 867 census town labels, and what each returned for six test queries. Every count was produced by running the search on 19 September 2026.',
      body: [
        { kind: 'table', caption: 'Test queries against three search designs', head: ['Query typed', 'Exact label match', 'Any matching text', 'All query words as whole words'], rows: [
          ['Bettystown, Co Meath', '0 found', '0 found', '1 found: the right town'],
          ['Bettystown', '0 found', '1 found', '1 found'],
          ['laytown-bettystown', '0 found', '1 found', '1 found'],
          ['Meath', '0 found', '58, including Omeath, Co Louth', '36, no Omeath'],
          ['Kill', '0 found', '23, including Killarney and Killorglin', '2: Kill, Co Waterford and Kill, Co Kildare'],
          ['Ross', '0 found', '14, including Rosslare', '1: New Ross']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Design one: exact match', p: 'Compare the whole query with the whole label. It never finds this town, because nobody types all four names in the census order. It is safe and useless, which is a common combination.' },
          { h3: 'Design two: any matching text', p: 'Find labels containing the query anywhere. Bettystown is found, and so is Omeath when somebody searches for Meath, because the letters happen to sit inside it. Generous searches are usually wrong in the direction nobody tests.' },
          { h3: 'Design three: whole words', p: 'Split the query and each label into words at spaces, commas, hyphens and brackets, and require every query word to appear as a whole word. It passes all six tests, and the hyphenated query works because both sides are split the same way.' }
        ] },
        { kind: 'callout', h3: 'A tool is finished when its tests pass, not when it runs', p: 'Every design above runs without an error. Only one of them does the job, and the only way to know which is to write down, before building, what a correct answer looks like for a handful of awkward cases, then check every design against them. Searches, form checks, price calculators, class timetables: the habit is the same. Write the tests from real examples, include the ones most likely to go wrong, keep them next to the code, and run them every time the code changes.',
        },
        { kind: 'p', text: 'The learner writes the three designs as three short functions, then a list of test cases like the table above, each with the answer it should return. A loop runs every design against every case and prints a pass or a fail. Design three should pass all six. The learner then adds a seventh case of their own choosing, perhaps a town with an accent in its name or a query with a spelling mistake, and decides whether the design needs to change. That last step is where a search box becomes a piece of software: the point at which the builder starts looking for the cases that break it.' }
      ]
    },
    {
      id: 'names', tint: 'tint', eyebrow: 'One place, several names',
      h2: 'Four names in the census, two at the council',
      intro: 'The same stretch of coast is named differently depending on who is doing the naming, which is exactly why a search has to be forgiving about words and strict about whole ones.',
      body: [
        { kind: 'table', caption: 'How official sources name the area', head: ['Source', 'Name used'], rows: [
          ['Census 2022 town tables', 'Laytown-Bettystown-Mornington-Donacarney, Co Meath'],
          ['Meath County Council, municipal district meetings', 'Laytown-Bettystown Municipal District'],
          ['Irish Rail', 'Laytown train station, Laytown, Co. Meath']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'None of these is wrong', p: 'Each body names the thing it is responsible for. The census names a built-up area, the council an administrative district, the railway a station. A search tool has to cope with all three habits at once.' },
          { h3: 'Search by words, store by identifier', p: 'A friendly search finds the place from whatever the user types. Once found, the program should hold on to the table\'s own identifier for that label, not the words, so every later step refers to exactly one thing.' },
          { h3: 'Tell the user what matched', p: 'When the search returns the four-name label for a query of Bettystown, the tool should show the full label, so nobody is surprised that the figures cover Laytown, Mornington and Donacarney too.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives the station as Laytown train station, Laytown, Co. Meath, Eircode A92 H102, and lists it as unstaffed with no booking office, tickets from a vending machine or a Leap card. We have no connection with Irish Rail.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'What the four-name label contains',
      intro: 'Published for the built-up area Laytown-Bettystown-Mornington-Donacarney, Co Meath, in the Census 2022 small area tables. Every figure covers all four places together.',
      body: [
        { kind: 'table', caption: 'Laytown-Bettystown-Mornington-Donacarney, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '15,542'],
          ['Households', '5,055'],
          ['Households reporting broadband', '4,527'],
          ['Working residents in the travel table', '6,985'],
          ['Residents travelling to school, college or childcare', '4,613'],
          ['Children under fifteen in childcare', '1,156']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The work journey', p: 'Of the 6,985 working residents, 4,050 drive, 935 give home as their main answer, 560 take a bus, 411 travel by van, 278 by train, 223 as a car passenger and 190 on foot.' },
          { h3: 'The school journey', p: 'Of 4,613 journeys to school, college or childcare, 1,845 are as a car passenger, 1,279 by bus, 904 on foot, 140 by train and 105 by bicycle.' },
          { h3: 'Working from home', p: 'Asked directly, 2,537 working residents do some work at home, 3,960 never do and 488 did not say.' }
        ] },
        { kind: 'spec', title: 'A figure that cannot be split', p: 'Because the census publishes one label for all four places, there is no Bettystown-only or Laytown-only count in these tables, and this page does not invent one.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'What lessons look like for these four places',
      intro: 'A regular hour, twice in most weeks, with a teacher who is there throughout.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary age', p: 'Block coding and games, including guessing and searching games where matching words is the puzzle.' },
          { h3: 'Secondary age', p: 'Python, working websites and AI projects, built with tests from the junior cycle onwards.' },
          { h3: 'Adults', p: 'Adults join at any level, and 2,537 working residents in the area already spend part of their week working from home.' }
        ] },
        { kind: 'p', text: 'Irish Rail and Meath County Council are named from their own published pages, and neither has any connection with us. The website of a secondary school in the area refused automated requests on 19 September 2026, so nothing is quoted from it. Census counts are Central Statistics Office figures printed as published, and every search result on this page came from running the three designs against the census town labels on that date.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a guessing game to a tested tool',
    intro: 'Treat the ages as a guide; the first lesson finds the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Does it match?', p: 'Guessing and searching games in block code, where a word either matches or it does not.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Words and strings', p: 'Splitting and comparing text in Python, and writing the first simple tests.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Tools with tests', p: 'Building a real search or lookup, and proving it works with awkward test cases.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Matching at work', p: 'Lookups and matching rules for real data, where a wrong match costs money or time.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant to write the search for you',
    intro: 'It will write one. Whether it finds Bettystown is up to the tests.',
    p1: 'A generated search function will usually be design two, match any text, because that is the shortest code that finds Bettystown. It will pass the example in the prompt and quietly return Omeath for Meath and Killarney for Kill. Nothing about the code looks wrong; the problem only shows up when somebody tests the cases nobody thought of.',
    p2: 'A learner who has done this project hands the assistant the test table along with the request, and checks the result against it before using it. The machine writes faster; the person decides what correct means and whether it has been reached.',
    closer: 'Code is cheap now. A good set of tests, and the judgement to write them, is where the value has moved.',
    blogAnchor: 'why learning to code is still worth doing'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons are arranged',
    intro: 'The practical details.',
    cells: [
      { h3: 'Taught live', p: 'The teacher is present for the whole lesson and works from what the learner is building.' },
      { h3: 'Grouped by level', p: 'Five to ten learners at the same point, from this coast, the rest of Ireland and abroad.' },
      { h3: 'Two lessons most weeks', p: 'Roughly eight a month, at an hour settled when the course starts.' },
      { h3: 'Around school', p: 'Holidays, mid-terms and exam weeks are allowed for in the plan.' },
      { h3: 'Needed at home', p: 'A proper computer, since a phone is too small to code on, working audio both ways, and internet steady enough for video.' },
      { h3: 'Private teaching', p: 'A private teacher is arranged when a matching group does not exist at a workable time.' }
    ],
    spec: { title: 'Found under any of its names', p: 'Book under Laytown, Bettystown, Mornington or Donacarney and it reaches the same people. Our own booking form is one search that has to work for this town.' }
  },

  fees: {
    h2: 'Fees for Laytown and Bettystown',
    intro: 'The complete price list.',
    first: 'A first lesson taught in full and assessed, free of charge.',
    group: 'A month in a group of five to ten at one level, about eight live lessons.',
    private: 'A month of private lessons at the same weekly frequency.',
    closer: 'Everyone outside India is charged the same amount each month in US dollars, with no euro figure alongside. The order never changes: free lesson, then a plan, then the first monthly charge, and the pricing page has a rule for holidays, missed lessons and a change of format.'
  },

  reviewsH2: 'Six families\' own words on Google, unedited',

  book: {
    h2: 'Book a free lesson for Laytown or Bettystown',
    intro: 'Share the learner\'s age and interests and we plan the first hour around them. It might finish with a game, a first program, or a search box that passes its tests on the second try.',
    success: 'Thank you. We will be in touch about the lesson shortly.'
  },

  faq: {
    h2: 'Laytown and Bettystown coding class questions',
    intro: 'What families along this stretch of coast ask first.',
    items: [
      { q: 'How many people live in Laytown and Bettystown?', a: 'The Census 2022 small area tables count 15,542 usual residents in the built-up area named Laytown-Bettystown-Mornington-Donacarney, in 5,055 households. There is no separate count for each of the four places in these tables.' },
      { q: 'What is the data project here?', a: 'Learners build a search for the 867 census town labels, test three designs against six awkward queries, and keep the one that passes them all: matching whole words, which finds this town from Bettystown, Laytown or the council\'s two-name form, and keeps Omeath out of a search for Meath.' },
      { q: 'Why not just search for any matching text?', a: 'Because it finds too much. In our tests a search for Meath also returned Omeath in Louth, and a search for Kill returned 23 towns, including Killarney, when only two towns are actually called Kill.' },
      { q: 'How do residents here travel to work?', a: 'Of the 6,985 working residents in the travel table, 4,050 drive, 935 give working mainly at or from home, 560 take a bus, 411 travel by van, 278 by train, 223 as a car passenger and 190 on foot.' },
      { q: 'When are lessons?', a: 'After school, in the evenings and at weekends. Irish daylight-saving months put India four and a half hours ahead, the darker months five and a half, and we fix a slot that works across both.' },
      { q: 'Can adults join?', a: 'Yes, up to sixty-seven, many from no experience at all. The first lesson decides whether an adult learns in a matched group or with a private teacher.' },
      { q: 'Does it matter which of the four names we book under?', a: 'No. Laytown, Bettystown, Mornington and Donacarney all reach the same teaching, and the lessons are online wherever the learner is.' },
      { q: 'Is there a Modern Age Coders classroom in Laytown or Bettystown?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Laytown and Bettystown cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Laytown and Bettystown',
    html: 'The county page is <a class="cg-inline-link" href="/coding-classes-in-county-meath">County Meath</a>, and the nearest large-town pages are <a class="cg-inline-link" href="/best-coding-class-in-drogheda">Drogheda</a> and <a class="cg-inline-link" href="/best-coding-class-in-navan">Navan</a>, all inside <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. A plain comparison of online coding schools is on <a class="cg-inline-link" href="/best-online-coding-classes-ireland">this page</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> links every town and county in the series.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Laytown-Bettystown, Meath and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-meath', label: 'County Meath' },
    { href: '/best-coding-class-in-drogheda', label: 'Drogheda' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-lbt .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.19vw, 2.6rem); }
.cg-root.cg-lbt .cg-hero h1 { font-weight: 700; letter-spacing: -0.0187em; line-height: 1.06; }
.cg-root.cg-lbt .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.14rem; }
.cg-root.cg-lbt .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lbt .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0136em; }
.cg-root.cg-lbt .cg-grid-3 { gap: clamp(1.08rem, 2.73vw, 2.12rem); }
.cg-root.cg-lbt .cg-table caption { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-lbt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lbt .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-lbt .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.04rem; }
.cg-root.cg-lbt .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Laytown-Bettystown-Mornington-Donacarney, Co Meath, CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 15,542, born in Ireland 12,028. SAP2022T15T2TOWN22: households 5,055, broadband 4,527, no internet 175, other 82, not stated 271. SAP2022T11T1TOWN22 to work total 6,985: car driver 4,050, work mainly at or from home 935, bus 560, van 411, not stated 273, train DART or Luas 278, car passenger 223, on foot 190, bicycle 29; to school, college or childcare total 4,613: car passenger 1,845, bus 1,279, on foot 904, not stated 207, train 140, bicycle 105, car driver 93. SAP2022T11T4TOWN22: 2,537 work from home at least some of the time, 3,960 never, 488 not stated. SAP2022T11T5TOWN22: 1,156 children under 15 in childcare. Search tests run in this session over the 867 town labels of SAP2022T15T2TOWN22 (the all-towns row excluded): exact label match finds 0 for every test query; substring matching, case-insensitive, finds 0 for "Bettystown, Co Meath", 1 for "Bettystown", 1 for "laytown-bettystown", 58 for "Meath" including Omeath, Co Louth, 23 for "Kill" and 14 for "Ross"; all-words matching, splitting on spaces, commas, hyphens, brackets and ampersands and requiring every query word as a whole word, finds 1 for "Bettystown, Co Meath", 1 for "Bettystown", 1 for "laytown-bettystown", 36 for "Meath" with no Omeath, 2 for "Kill" (Kill, Co Waterford and Kill, Co Kildare) and 1 for "Ross" (New Ross, Counties Wexford & Kilkenny). Each of Laytown, Bettystown, Mornington and Donacarney appears in exactly one label. Irish Rail, Laytown: "Laytown train station, Laytown, Co. Meath", "Eircode A92 H102", "This station is not staffed", "This station does not have a booking office". Meath County Council, own site navigation: "Laytown-Bettystown Municipal District Meetings".',
    localProject: 'Build a search box that finds Bettystown. The census names this built-up area Laytown-Bettystown-Mornington-Donacarney, Co Meath, so a user typing one of the four names depends entirely on how the search is designed. The learner implements three designs over the 867 census town labels and runs six test queries through each, all executed while writing the page. Exact label matching finds nothing for any query, including the natural "Bettystown, Co Meath". Case-insensitive substring matching finds the town from "Bettystown" but returns 58 labels for "Meath", including Omeath in County Louth, 23 for "Kill" and 14 for "Ross". Whole-word matching, splitting query and label on spaces, commas, hyphens, brackets and ampersands and requiring every query word to appear whole, passes all six: the town for "Bettystown, Co Meath" and for the hyphenated query, 36 Meath labels with no Omeath, exactly the two towns named Kill, and only New Ross. The page adds that the council names a two-word district and Irish Rail a single-name station for the same coast, that a found place should then be held by the table\'s identifier rather than its words, and that a tool is finished when its tests pass rather than when it runs. A constructive lesson by design, following a run of pitfall pages; the Longford page owns substring false positives as a trap, here they are one failed test on the way to a working tool. New family for the cluster: building and testing a tool.',
    requiredMentions: [
      '15,542',
      '5,055',
      '4,527',
      '6,985',
      '4,050',
      '935',
      '4,613',
      '1,845',
      '1,279',
      '2,537',
      '1,156',
      'A92 H102'
    ],
    sources: [
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T4TOWN22 and SAP2022T11T5TOWN22, Laytown-Bettystown-Mornington-Donacarney, Co Meath: usual residents 15,542; households 5,055, broadband 4,527; to work 6,985 with car driver 4,050, mainly at or from home 935, bus 560, van 411, train 278, car passenger 223, on foot 190; to school, college or childcare 4,613 with car passenger 1,845, bus 1,279, on foot 904, train 140, bicycle 105; 2,537 work from home at least some of the time; 1,156 children under 15 in childcare. The same table\'s town dimension holds 867 towns plus the all-towns row.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Laytown station: "Laytown train station, Laytown, Co. Meath", "Eircode A92 H102"; "This station is not staffed"; "This station does not have a booking office".', url: 'https://www.irishrail.ie/en-ie/station/laytown' },
      { claim: 'Meath County Council, own site navigation: "Laytown-Bettystown Municipal District Meetings".', url: 'https://www.meath.ie/council/your-council/your-elected-council/municipal-district-meetings/ashbourne-municipal-district-meetings' }
    ],
    rejectedClaims: [
      'Any separate figure for Laytown, Bettystown, Mornington or Donacarney: the census publishes one label for all four.',
      'Any search result quoted from reasoning rather than execution: all counts come from running the three designs.',
      'A secondary school in the area: its site refused automated requests on 19 September 2026, so nothing is quoted from it.',
      'The census town-list population and the Meath County Council eircode: the County Meath page owns both, and its commuting-time point is not repeated.',
      'Presenting substring matching as a data error: it is one design that fails tests, and the Longford page owns the false positive as a trap.',
      'Any reason for the area\'s travel shares.'
    ]
  }
};
