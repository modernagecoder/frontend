'use strict';
// County Louth (cg- county page, Ireland cluster, Phase 4). Spine: a dataset
// that is only a link, and a one-line filter that loses the county's largest
// town. Facts read at primary sources on 16 September 2026: CSO PxStat tables
// F1010, F1013, F1015 and F1016 and the Louth summary and Profile 1, 5, 7 and 8
// press statements; gov.ie's January 2018 LCCS list (two Dundalk schools);
// dkit.ie; louthcoco.ie. GEOGRAPHY: Drogheda's built-up area is published by
// the CSO as "Drogheda, Counties Louth & Meath", so its 44,135 is never written
// as a County Louth figure. The Louth-side split of 35,990 and the Meath-side
// 8,145 are OUR OWN arithmetic from F1010 minus F1013 and are labelled as
// derived every time they appear. No county-level density or under-15 share is
// claimed, because the CSO publishes neither. Dataset finding: the council's
// Co. Louth Road Schedule is registered on data.gov.ie under Creative Commons
// Attribution 4.0, but its single resource is an HTML link to the council
// homepage rather than any road data, so nothing is downloadable. The
// substitute trap is measured in F1013 itself: filtering town labels that end
// in "Co Louth" returns 20 of the 21 Louth rows and silently drops Drogheda.
// Wexford owns its Gorey footfall counter; the city pages own their own data.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY LOUTH', blurb: 'The Wee County, Dundalk to Drogheda, with a project on a dataset that turns out not to exist.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-louth',
  code: 'lth',
  accent: '#7D5700',
  accentRationale: 'County Louth: a dark harvest gold from the solver, unused elsewhere in the Ireland cluster and clear of both Irish greens',
  pageType: 'governorate',
  place: {
    name: 'County Louth',
    eyebrow: 'County Louth, Leinster',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-ireland', name: 'Ireland' }],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'County Louth, Ireland',
  title: 'Coding Classes in County Louth | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Louth, from Dundalk and Drogheda to Ardee and Carlingford, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for County Louth, on a page about a published dataset that turns out to be a link, and a filter that loses Drogheda.',
  twitterDescription: 'Coding classes across County Louth, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Louth Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Louth, taught live in English.'
  },

  h1: 'Coding classes in County Louth',
  capsuleQ: 'What are the best coding classes in County Louth?',
  capsule: 'Louth is the smallest county in Ireland by area and among the most urban by population: 139,703 people, 57% of them in towns of ten thousand or more, split between two large towns that almost match each other in size. It also carries the joint highest unemployment rate in the country at 11%, and a third-level rate of 40% against a national 45%, which is the gap a good class can help a family close. Ours are live and online, so Dundalk, Drogheda, Ardee and Carlingford all sit the same distance from the teacher. We take learners aged 6 to 67, in groups of five to ten matched by ability or one to one, at a fixed weekly hour. The first lesson costs nothing; then it is USD 100 a month in a group or USD 150 privately.',
  lead: 'Search Ireland\'s open data portal for County Louth and you will find a road schedule: every road in the county, derived from Ordnance Survey centre lines and the councils\' own records, published under a Creative Commons licence. It sounds ideal. Open the record properly and the dataset has exactly one resource attached, and that resource is a link to the council\'s homepage. There is no file. Nothing to download, nothing to analyse, and no error message either: just a registered dataset with nothing inside it. That is a real and common experience in open data, and learning to check it in thirty seconds, before planning a project around something that is not there, is a genuine skill. So this page uses a different Louth problem instead, one that does contain data and does contain a trap: a single-line filter that quietly deletes the county\'s biggest town from the answer.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Louth.',

  picks: {
    eyebrow: 'Course picks for County Louth',
    h2: 'Four courses for the Wee County',
    intro: 'Pick by what a learner wants to build. Every one begins with a free lesson, taught live, and nobody is asked for card details to try it.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'First programs in blocks, where a list of places has to be complete before the game can do anything sensible with it.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python through the Junior Cycle years, with filtering and matching taught on real tables rather than on made-up rows.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'A filter that looks right, loses a town of 44,135 people, and reports no error at all.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults whose work depends on data arriving: checking that a source exists and is complete before building anything on it.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Two big towns and very little countryside',
      intro: 'Louth is unusual among Irish counties: most of its people live in towns, and its two largest are within a few hundred of each other in size.',
      body: [
        { kind: 'table', caption: 'County Louth in Census 2022, Central Statistics Office', head: ['Measure', 'Figure'], rows: [
          ['Population', '139,703, up 8% or 10,819 since 2016'],
          ['Average age', '38.2 years, up from 36.4 in 2016'],
          ['Aged 65 and over', '19,898, an increase of 24%'],
          ['Living in towns of 10,000 or more', '79,102 people, 57% of the county'],
          ['At work', '59,140 people aged 15 and over, up 8,823 or 18% since 2016'],
          ['Third-level qualifications', 'More than 35,600 people, a rate of 40% against 45% nationally']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Dundalk, cleanly counted', p: 'Dundalk holds 43,112 people entirely within County Louth, with an average age of 37.2 and 21.4% aged under 15, at 1,986.4 people per square kilometre across 21.7 square kilometres.' },
          { h3: 'Drogheda, counted across a border', p: 'Drogheda is published as "Drogheda, Counties Louth and Meath" with 44,135 people, because its built-up area crosses the county line. It is the larger town, and it is not a County Louth figure.' },
          { h3: 'How much of Drogheda is in Louth', p: 'By our own arithmetic, not a published figure: the county has 79,102 people in towns of ten thousand or more, Dundalk accounts for 43,112 of them, and no other single-county Louth town reaches that size, so about 35,990 of Drogheda sits on the Louth side and roughly 8,145 in Meath.' }
        ] },
        { kind: 'p', text: 'The work picture is harder than in most of Leinster. Unemployment stood at 11%, which the statistics office recorded as the joint highest rate in the country, with long-term unemployment at 6%, also joint highest. Employment still grew 18% between censuses, and almost 15,800 people did some work from home, more than 4,400 of them five days a week. For families here, a class that needs no travel and no second car is not a convenience; it is often the difference between doing it and not.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science in Louth schools',
      h2: 'Two schools, both in Dundalk',
      intro: 'The first phase of Leaving Certificate Computer Science reached County Louth in two places, and both of them are in the same town.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The two', p: 'Bush Post Primary at Riverstown and St Vincent\'s Secondary School on Seatown Place, both in Dundalk, were the county\'s first-phase schools when the subject began in September 2018.' },
          { h3: 'Drogheda\'s position', p: 'The county\'s largest town had no school on that list. We found no current official list of where the subject is taught now, so we say nothing about today, only about how it started.' },
          { h3: 'What we teach', p: 'Not the examination subject. Programming, data handling and problem solving in a weekly class, which can run alongside any school timetable.' }
        ] },
        { kind: 'p', text: 'After school, the county has a technological institute of its own. Dundalk Institute of Technology describes itself as "the leading higher education institute in the North East and cross-border region of Ireland", says more than 600 international students enrol each year, and notes that it is a 25 minute walk from Dundalk\'s Clarke station with the motorway three minutes away. For a student who wants to stay near home, that is the local route into computing, and the programming groundwork it assumes is exactly what a weekly class builds beforehand.' },
        { kind: 'spec', title: 'A county of many first languages', p: 'Non-Irish citizens make up 11% of the county. The largest groups are Lithuanian at 1,817, Polish at 1,734, UK at 1,688 and Latvian at 1,094, and 4,296 people recorded a Black or Black Irish African background, the largest such count of the counties we have written about. Dual citizenship rose to 4,271, and the most common combination here is Irish and Nigerian, which is unusual nationally.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The filter that loses Drogheda',
      intro: 'Every Irish town in the statistics office\'s tables is labelled with the county it sits in. Almost every one ends with a single county name. Two words break that pattern, and a one-line filter written in good faith deletes the results.',
      body: [
        { kind: 'table', caption: 'What we measured in the published table, read 16 September 2026', head: ['Step', 'Result'], rows: [
          ['Town labels in the table, nationally', '868'],
          ['Labels ending in the words Co Louth', '20'],
          ['Labels containing the word Louth at all', '21'],
          ['The one that a suffix filter misses', 'Drogheda, Counties Louth and Meath'],
          ['People in that missing row', '44,135, the county\'s largest town'],
          ['Error raised by the filter', 'None']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why it happens', p: 'Towns that straddle a county boundary are labelled with both counties, so their names end differently from every other town in the county. The pattern a learner reasonably assumes does not hold for exactly the rows that matter most.' },
          { h3: 'What it costs', p: 'A county roll-up built this way loses 44,135 people, which is more than the entire population of Dundalk. The total still looks plausible, which is what makes it dangerous.' },
          { h3: 'The fix, and the habit', p: 'Match on the county appearing anywhere in the label, then check the count of matched rows against what you expected, and look at the rows you excluded before you throw them away.' }
        ] },
        { kind: 'callout', h3: 'The other half of the lesson: a dataset that is not there', p: 'Before this exercise, students check the county\'s own open data. The Co. Louth Road Schedule is registered under a Creative Commons Attribution 4.0 licence, with a description promising road centre lines and roads-in-charge records for the whole county. Its single attached resource is a web link to the council\'s homepage. There is no file behind it. A student who plans a term project around that title discovers this in week three; a student who checks the resource list discovers it in thirty seconds. Checking first is the entire lesson, and it applies to every promising dataset title anyone ever sends you.' },
        { kind: 'p', text: 'We say this with no criticism of the council intended. Publishing open data is work, and registering something that later moves or breaks is ordinary. The point for a learner is simply that a title is not a file, and only opening it proves anything.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Before you write the filter',
      h2: 'Five checks for matching and filtering',
      intro: 'Learned on a table of Irish towns, and used afterwards on customer lists, product codes, school rolls and anything else where names are the key.',
      body: [
        { kind: 'table', caption: 'Filters that look right and are not', head: ['Check', 'What you do', 'What it catches'], rows: [
          ['Count before and after', 'Compare how many rows matched with how many you expected', 'A filter that quietly drops rows'],
          ['Look at what you excluded', 'Print the rows the filter rejected, not only the ones it kept', 'The one row that mattered'],
          ['Prefer contains to ends with', 'Match on the value appearing anywhere, then tighten deliberately', 'Labels with an unexpected suffix'],
          ['Find the shared entities', 'Ask which rows belong to two categories at once', 'Anything that straddles a boundary'],
          ['Check the total against a known one', 'Compare your roll-up against a published total', 'A plausible number that is wrong']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A sorting game where one item belongs in two boxes, and the program has to decide what to do about it.' },
          { h3: 'Teenagers', p: 'The real table in Python: write the naive filter, measure what it loses, fix it, and check the fixed total against the published one.' },
          { h3: 'Adults', p: 'The same discipline on work data, where the rows that belong to two categories are usually the biggest customers.' }
        ] },
        { kind: 'p', text: 'We are not connected with Louth County Council, Dundalk Institute of Technology or either school named above, and nothing here suggests otherwise. Census figures are the Central Statistics Office\'s for 2022. The filter measurements are ours, run against the published table, and the Drogheda split is our arithmetic rather than a published figure, which is why it is labelled that way everywhere it appears.' }
      ]
    },
    {
      id: 'living', tint: '', eyebrow: 'Living in the county',
      h2: 'Two routing keys, one motorway and a long commute',
      intro: 'Louth sits between two cities, and its daily rhythm shows it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A91 and A92', p: 'Louth County Council gives its address as County Hall, Millennium Centre, Dundalk, A91 KFW6, while Drogheda Library is at Stockwell Lane, A92 PY20. The two halves of the county have their own routing keys.' },
          { h3: 'Driving, mostly', p: '31,863 people drove to work in 2022, the average journey took 28.9 minutes, up from 27.7 in 2016, and 7,418 people travelled for an hour or more each way.' },
          { h3: 'Five electoral areas', p: 'Dundalk South has 38,195 people, Drogheda Urban 28,537, Ardee 27,034, Dundalk and Carlingford 26,092 and Drogheda Rural 19,845.' }
        ] },
        { kind: 'spec', title: 'The Irish language here', p: 'The county recorded 44,078 Irish speakers, 35.2% of everyone aged three and over, which the statistics office noted was the second lowest rate in the country after Dublin City. Our classes are taught in English, and programming keywords are English whatever a learner\'s school language is, so this changes nothing about how a child gets on.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting things to filters you can trust',
    intro: 'Bands are indicative only. The free lesson decides where a learner begins.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Sorting and matching', p: 'Programs that put things in categories, and what to do when something belongs in two.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Lists and lookups', p: 'Searching real tables, and checking that a search found everything it should have.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Filters and totals', p: 'Writing filters, measuring what they exclude, and reconciling a roll-up with a published total.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Sources that hold up', p: 'Verifying that a data source exists and is complete before any work is planned around it.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will write this filter instantly. Why should a Dundalk teenager check what it dropped?',
    intro: 'Because the wrong answer here is a number that looks entirely reasonable.',
    p1: 'Ask an AI tool to total the population of Louth\'s towns and it will write a filter, probably matching labels that end with the county name, and return a figure. The figure will be missing Drogheda, because Drogheda is labelled with two counties, and nothing about the result will look wrong: no error, no warning, just a total that is 44,135 people short. Tools are good at writing filters and poor at knowing which rows a filter should have caught.',
    p2: 'The defence is a habit rather than a technique: always ask what a filter excluded, and always reconcile a total against something published. A learner who has lost Drogheda once will do both automatically, on any dataset, for the rest of their working life.',
    closer: 'So the reason for a Louth child to learn to code in 2026 is not that they will be asked to write filters at work, though they may be. It is that they will be asked to trust numbers other people produced, and this is how you tell which ones deserve it.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Dundalk, Drogheda, Ardee and the peninsula',
    intro: 'The county is compact by Irish standards, and still splits into two towns that face different ways: one towards Belfast, one towards Dublin.',
    cells: [
      { h3: 'One class, both ends', p: 'A learner in Carlingford and one in Termonfeckin sit in the same group, which no room in either town could manage on a Tuesday evening.' },
      { h3: 'Stages named the Irish way', p: 'First Year, the Junior Cycle, Transition Year and sixth year are used as they are used in school here, so parents never have to translate.' },
      { h3: 'A free lesson that teaches', p: 'Real work on a real task, with a recommendation on level, course and hour afterwards, and no card details asked for at any point.' },
      { h3: 'Grouped by what they can do', p: 'Five to ten learners at one level, drawn from Louth and other countries, so every level has a group at a workable hour.' },
      { h3: 'Around a commuting household', p: 'Two lessons a week, roughly eight a month, at a fixed time, with pauses for mid-terms, exams and holidays agreed in advance.' },
      { h3: 'Teachers on Indian time', p: 'Their clock does not shift, so they sit four and a half hours ahead of Ireland in summer and five and a half in winter; Louth evenings fall comfortably inside their working day.' }
    ],
    spec: { title: 'Why the commute matters here', p: 'With 7,418 people already travelling an hour or more each way to work, an evening class that requires another journey is a hard sell in this county. Starting at the kitchen table, on the same evening every week, is what makes it stick.' }
  },

  fees: {
    h2: 'What classes cost in County Louth',
    intro: 'Three figures, and no additions later.',
    first: 'One full lesson at no cost, ending with an honest placement and a recommended course.',
    group: 'A month of teaching, generally eight lessons, with five to ten learners of similar ability.',
    private: 'The same month of about eight lessons, with a teacher working with one learner only.',
    closer: 'Fees are in US dollars on the single rate charged outside India, so Dundalk pays what Ardee pays and there is no euro list. Nothing is charged until the free lesson has settled a course and a weekly hour. Pauses, missed lessons and changes of format are set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, as our families wrote them',

  book: {
    h2: 'Tell us about the learner',
    intro: 'The opening task fits the person: a sorting game for a younger child, a first script that reads a table, or the filter puzzle that loses Drogheda for a teenager.',
    success: 'Thank you. Somebody will be in touch about your County Louth class shortly.'
  },

  faq: {
    h2: 'County Louth coding class questions',
    intro: 'The county, its numbers and how the classes work.',
    items: [
      { q: 'How many people live in County Louth?', a: 'Census 2022 counted 139,703, up 8% since 2016, with 57% of them living in towns of ten thousand people or more.' },
      { q: 'Is Drogheda or Dundalk the bigger town?', a: 'Drogheda, at 44,135, but that figure covers a built-up area crossing into County Meath. Dundalk\'s 43,112 sits entirely in Louth. By our own arithmetic, around 35,990 of Drogheda is on the Louth side.' },
      { q: 'Which Louth schools first offered Leaving Certificate Computer Science?', a: 'Bush Post Primary and St Vincent\'s Secondary School, both in Dundalk, were the county\'s two schools on the January 2018 first-phase list.' },
      { q: 'What is the Louth data project?', a: 'Students write the obvious filter for Louth\'s towns, discover it returns 20 of 21 rows and silently loses Drogheda, then fix it and reconcile the total against a published one.' },
      { q: 'Why not use the county road dataset?', a: 'Because there is no file behind it. The registered dataset\'s only resource is a link to the council\'s homepage, which is itself a useful thing for a learner to discover early.' },
      { q: 'Does the county have a third-level option?', a: 'Dundalk Institute of Technology is in the county and describes itself as the leading higher education institute in the North East and cross-border region of Ireland. We have no connection with it.' },
      { q: 'What hours do classes run?', a: 'Afternoons, evenings and weekend mornings. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter, and the weekly hour is set in the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in Louth?', a: 'No, and we never imply one. Teaching is live online only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number on this page is an Indian one.', boiler: true },
      { q: 'What do County Louth coding classes cost?', a: 'The first lesson is free. Continuing costs USD 100 a month for a group place, which covers two live lessons a week and about eight a month with five to ten learners, or USD 150 a month taught privately on the same schedule. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on ability, pace and goal rather than age or address. Where nothing suitable runs at a workable hour, we offer one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'South to the capital, and the rest of the country',
    html: 'The capital is covered at <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a>, and down the east coast there is <a class="cg-inline-link" href="/coding-classes-in-county-wexford">County Wexford</a>. To compare online schools, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>; for models and data, <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-ireland">AI and machine learning classes in Ireland</a>. Everything sits on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Louth and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-county-wexford', label: 'County Wexford' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-lth .cg-hero-grid { align-items: start; gap: clamp(1.18rem, 2.95vw, 2.5rem); }
.cg-root.cg-lth .cg-hero h1 { font-weight: 700; letter-spacing: -0.0215em; line-height: 1.05; }
.cg-root.cg-lth .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.18rem; }
.cg-root.cg-lth .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lth .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.016em; }
.cg-root.cg-lth .cg-grid-3 { gap: clamp(1rem, 2.35vw, 1.88rem); }
.cg-root.cg-lth .cg-table caption { letter-spacing: 0.045em; font-weight: 700; }
.cg-root.cg-lth .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lth .cg-table th { letter-spacing: 0.015em; }
.cg-root.cg-lth .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-lth .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'County Louth, Census 2022 (CSO): population 139,703, up 8 percent or 10,819 since 2016, with 70,796 female and 68,907 male; average age 38.2, up from 36.4; those aged 65 and over up 24 percent to 19,898; 67 percent of households owning and 28 percent renting; 59,140 people aged 15 and over at work, up 8,823 or 18 percent; unemployment 11 percent against 17 percent in 2016, recorded as the joint highest rate in the country, with long-term unemployment at 6 percent, also joint highest; almost 15,800 people working from home at least some of the time and more than 4,400 five days a week; 31,863 driving to work, an average journey of 28.9 minutes against 27.7 in 2016, and 7,418 people travelling an hour or more. Towns: Drogheda published as "Drogheda, Counties Louth & Meath" at 44,135, 2,486 per sq km across 17.8 sq km; Dundalk wholly within Louth at 43,112, average age 37.2, 21.4 percent aged under 15, 1,986.4 per sq km across 21.7 sq km; Ardee 5,478. F1010 records 79,102 people, 57 percent of the county, in towns of 10,000 or more. DERIVED, not published: with Dundalk at 43,112 and no other single-county Louth town above 10,000, about 35,990 of Drogheda lies on the Louth side and roughly 8,145 in Meath. Local electoral areas: Dundalk South 38,195, Drogheda Urban 28,537, Ardee 27,034, Dundalk and Carlingford 26,092, Drogheda Rural 19,845. Citizenship: non-Irish citizens 11 percent, Lithuanian 1,817, Polish 1,734, UK 1,688, Latvian 1,094; dual citizenship 4,271, up from 2,685, most commonly Irish and Nigerian at 760; almost 106,600 people of White Irish background and 4,296 of Black or Black Irish African background; Catholics more than 100,500, 72 percent; no religion almost 16,800, up 72 percent; 930 Irish Travellers, up 21 percent. Education: more than 35,600 with a third-level qualification, 40 percent against 45 percent nationally. Irish speakers 44,078, 35.2 percent of those aged three and over, the second lowest rate in the country behind Dublin City. Gov.ie, 4 January 2018: the county\'s first-phase Leaving Certificate Computer Science schools were Bush Post Primary, Riverstown, Dundalk and St Vincent\'s Secondary School, Seatown Place, Dundalk. Dundalk Institute of Technology calls itself the leading higher education institute in the North East and cross-border region of Ireland, reports more than 600 international students a year, and notes a 25 minute walk from Clarke station. Addresses: Louth County Council, County Hall, Millennium Centre, Dundalk A91 KFW6, and Drogheda Library, Stockwell Lane A92 PY20.',
    localProject: 'A registered dataset with no file, and a filter that deletes the largest town. The Co. Louth Road Schedule is listed on data.gov.ie under Creative Commons Attribution 4.0 with a description promising road centre lines and roads-in-charge records, but its package record carries exactly one resource, an HTML link to the council homepage, so no data is downloadable. The substitute trap is measured in CSO table F1013: of 868 national town labels, 20 end in the words Co Louth while 21 contain Louth at all, and the single row a suffix filter misses is Drogheda, Counties Louth and Meath, at 44,135 people, the county\'s largest town. A roll-up built with the naive filter understates the county\'s town population by more than the entire population of Dundalk, and raises no error while doing it. The fix is to match the county name anywhere in the label, count matched against expected rows, inspect the excluded rows, and reconcile the total against the published F1010 figure of 79,102.',
    requiredMentions: [
      '139,703',
      '44,135',
      '43,112',
      '35,990',
      '79,102',
      '1,817',
      '19,898',
      '35.2%',
      '4,296',
      '38,195',
      'A91 KFW6',
      'Bush Post Primary'
    ],
    sources: [
      { claim: 'CSO summary results, Louth: "The population of Louth grew by 8% to 139,703, which means the number of people in the county rose by 10,819"; average age 38.2 against 36.4; those aged 65 and over up 24% to 19,898; 59,140 at work, up 18%; 67% owning and 28% renting.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultslouth/' },
      { claim: 'CSO Profile 7, Louth: unemployment 11%, "the joint highest rate in the country", long-term unemployment 6%, also joint highest; 31,863 driving to work; average journey 28.9 minutes; 7,418 journeys of 60 minutes or more; almost 15,800 working from home at least some of the time, more than 4,400 for five days.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutinglouth/' },
      { claim: 'CSO Profile 1, Louth: "Drogheda was the largest town, with a population of 44,135 in April 2022", published in table F1013 as "Drogheda, Counties Louth & Meath".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementslouth/' },
      { claim: 'CSO tables F1013 and F1015: Dundalk, Co Louth 43,112, average age 37.2, 21.4% aged under 15, density 1,986.4 per sq km across 21.7 sq km; Drogheda density 2,486 per sq km across 17.8 sq km; Ardee 5,478.', url: 'https://data.cso.ie/table/F1013' },
      { claim: 'CSO table F1010: 79,102 people in County Louth lived in towns of 10,000 population and over in April 2022.', url: 'https://data.cso.ie/table/F1010' },
      { claim: 'CSO table F1016: Dundalk South 38,195, Drogheda Urban 28,537, Ardee 27,034, Dundalk-Carlingford 26,092, Drogheda Rural 19,845.', url: 'https://data.cso.ie/table/F1016' },
      { claim: 'CSO Profile 5, Louth: non-Irish citizens 11% of the county, Lithuanian 1,817, Polish 1,734, UK 1,688, Latvian 1,094; dual citizenship 4,271, up from 2,685, Irish-Nigerian the largest combination at 760; 4,296 people of Black or Black Irish African background; 930 Irish Travellers, up 21%.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionlouth/' },
      { claim: 'CSO Profile 8, Louth: third-level qualifications more than 35,600, "a rate of 40% compared with 45% nationally"; 44,078 Irish speakers, 35.2% of those aged three and over, "the second lowest rate of Irish speakers in the country behind Dublin City".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationlouth/' },
      { claim: 'Department of Education, 4 January 2018: the first-phase Leaving Certificate Computer Science list includes Bush Post Primary, Riverstown, Dundalk and St Vincent\'s Secondary School, Seatown Place, Dundalk.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Dundalk Institute of Technology: "DkIT is the leading higher education institute in the North East and cross-border region of Ireland"; "Every year more than 600 international students choose to study with us"; "The Institute is a 25 minute walk from Dundalk\'s Clarke Train station".', url: 'https://www.dkit.ie/' },
      { claim: 'Louth County Council: "Louth County Council, County Hall, Millennium Centre, Dundalk, A91 KFW6"; Drogheda Library, Stockwell Lane, Drogheda, A92 PY20.', url: 'https://www.louthcoco.ie/en/contact-us/' },
      { claim: 'data.gov.ie: the Co. Louth Road Schedule is registered under Creative Commons Attribution 4.0, and its package record lists a single resource, an HTML link to the council website, rather than any road data.', url: 'https://data.gov.ie/dataset/co-louth-road-schedule' }
    ],
    rejectedClaims: [
      'Presenting Drogheda\'s 44,135 as a County Louth figure: the CSO publishes it across Louth and Meath.',
      'Presenting the 35,990 Louth-side and 8,145 Meath-side split as published figures: both are our own subtraction and are labelled as derived wherever they appear.',
      'A county-level population density or under-15 share: the CSO publishes neither for Louth, so town-level figures are used and labelled.',
      'A county-wide out-commuting total: not published in the profiles read; only Drogheda\'s town-level net outflow exists, and it is not restated as a county figure.',
      'Any claim about which Louth schools teach Leaving Certificate Computer Science today: no current official list was found.',
      'Anything owned by the Wexford county page or by the city pages in this cluster.'
    ]
  }
};
