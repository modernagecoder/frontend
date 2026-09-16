'use strict';
// County Carlow (cg- county page, Ireland cluster, Phase 4). Spine: a county
// town that is not entirely inside its own county, and a council that publishes
// no open data at all. Facts read at primary sources on 16 September 2026: CSO
// PxStat tables F1010, F1013, F1015 and F1016 and the Carlow summary and
// Profile 1, 5, 7 and 8 press statements; gov.ie's January 2018 LCCS list,
// where all 40 addresses were read and NONE is in County Carlow; setu.ie.
// GEOGRAPHY: Carlow town is published as "Carlow, Counties Carlow & Laois"
// because its Graiguecullen side lies in Laois, so its 27,351 is never written
// as a County Carlow figure. The Carlow-side 22,496 and Laois-side 4,855 are
// OUR OWN arithmetic from F1010 and F1013 and are labelled as derived. No
// county-level density or under-15 share is claimed, because the CSO publishes
// neither. Dataset finding: Carlow County Council has zero datasets registered
// on data.gov.ie, confirmed through the portal's own organisation API, so the
// substitute trap is measured in F1013, where a filter on labels ending "Co
// Carlow" returns 16 of 19 rows and drops the county town itself. Louth owns
// the same filter trap applied to Drogheda; this page uses the Carlow rows,
// the zero-dataset finding and a different framing throughout.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY CARLOW', blurb: 'The second smallest county, with a project on a county town that sits in two counties at once.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-carlow',
  code: 'clw',
  accent: '#1D5B5B',
  accentRationale: 'County Carlow: a dark slate teal from the solver, unused elsewhere in the Ireland cluster and clear of both Irish greens',
  pageType: 'governorate',
  place: {
    name: 'County Carlow',
    eyebrow: 'County Carlow, Leinster',
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
  routeLabel: 'County Carlow, Ireland',
  title: 'Coding Classes in County Carlow | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Carlow, from Carlow town to Tullow and Muinebeag, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for County Carlow, on a page about a county town that sits in two counties and a filter that deletes it.',
  twitterDescription: 'Coding classes across County Carlow, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Carlow Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Carlow, taught live in English.'
  },

  h1: 'Coding classes in County Carlow',
  capsuleQ: 'What are the best coding classes in County Carlow?',
  capsule: 'Carlow is a small county that grew quickly: 61,968 people, up 9% in six years, with employment up 22% and unemployment halved to 9%. Most of it is rural, with about 36% of residents in a town of ten thousand or more, and that town is Carlow itself. For coding, the county starts from behind: no Carlow school was on the first list of schools to teach Leaving Certificate Computer Science, and the county holds a third-level rate of 39% against 45% nationally. A live online class is a practical answer, because it reaches Hacketstown and Borris at the same hour it reaches Carlow town. We teach ages 6 to 67 in groups of five to ten set by ability, or one to one. The first lesson is free; after that it is USD 100 a month in a group, USD 150 privately.',
  lead: 'Ask the statistics office how many people live in Carlow town and it answers 27,351, then adds a detail that surprises people who live there: the town is recorded as "Carlow, Counties Carlow and Laois", because its Graiguecullen side lies across the river in County Laois. That is not a clerical oddity. It means the county town, which holds around 44% of everyone in the county, cannot be counted as a Carlow row at all. Write the obvious filter for Carlow towns, matching every label that ends with the county name, and you get sixteen rows out of nineteen, and the missing three include Carlow itself. No error appears. The total looks reasonable. It is short by more than a quarter of the county. Learning to catch that, on the place you actually live, is the best first data lesson this county can offer, and it is the one our teenage learners here start with.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Carlow.',

  picks: {
    eyebrow: 'Course picks for County Carlow',
    h2: 'Four courses for a small county',
    intro: 'Chosen by what a learner wants to build rather than by age alone. Each begins with a free lesson taught live, with no card details required.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Games and stories in Scratch, with a map of the county that has to decide which side of the river a place belongs to.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python across the Junior Cycle years, taught on real tables where matching a name is harder than it looks.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'The county town that a filter deletes, and how to write one that keeps it.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults working with lists and spreadsheets: matching records without losing the ones that belong to two categories.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Small, rural and growing quickly',
      intro: 'Carlow is among the smallest counties in the country, and between the last two censuses it was among the faster-growing.',
      body: [
        { kind: 'table', caption: 'County Carlow in Census 2022, Central Statistics Office', head: ['Measure', 'Figure'], rows: [
          ['Population', '61,968, up 9% or 5,036 since 2016'],
          ['Average age', '38.8 years, up from 36.9 in 2016'],
          ['Aged 65 and over', '9,304, an increase of 26%'],
          ['At work', '26,792 people aged 15 and over, up 4,819 or 22% since 2016'],
          ['Unemployment', '9%, down from 17% in 2016'],
          ['Third-level qualifications', 'Almost 16,000 people, a rate of 39% against 45% nationally']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'One town of any size', p: 'Carlow town holds 27,351 people at 2,333.9 per square kilometre, with an average age of 36.6. After it, Tullow has 5,138 and Muinebeag, also called Bagenalstown, has 2,945.' },
          { h3: 'Split across a county line', p: 'About 22,496 of Carlow town sits on the Carlow side and roughly 4,855 in County Laois. Those two figures are our own arithmetic from two published tables, not numbers the statistics office prints.' },
          { h3: 'Three electoral areas', p: 'Carlow has 25,168 people, Tullow 20,225 and Muinebeag 16,575, which is a fair picture of how evenly the rest of the county is spread outside the town.' }
        ] },
        { kind: 'p', text: 'Two figures matter for an evening class here. About 36% of the county lives in a town of ten thousand or more, so most families are in villages or open country, and 15,220 people drive to work with an average journey of 29.7 minutes, up from 28.5 in 2016. Meanwhile more than 6,300 people now work from home at least some of the time, roughly a quarter of the workforce. A household already used to a laptop at the kitchen table is a household where a live lesson works.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science in Carlow schools',
      h2: 'Not one school in the first phase',
      intro: 'We read all forty addresses on the Department\'s January 2018 list. None of them is in County Carlow.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A zero worth stating', p: 'When Leaving Certificate Computer Science began in September 2018, no Carlow school was among the named schools. This is a finding, not a gap in our reading: every address on the published list was checked.' },
          { h3: 'What it does not mean', p: 'It does not tell you where the subject is taught today. No current official list exists, so we make no claim about now; plenty can have changed in eight years.' },
          { h3: 'What we do', p: 'We teach programming, data and problem solving in a weekly live class. Not the examination subject, and never the assessed work, but the ground the subject assumes.' }
        ] },
        { kind: 'p', text: 'The county does have third level. South East Technological University\'s Carlow campus on the Kilkenny Road runs to about 30 hectares and sixteen buildings, some 37,500 square metres, with playing pitches and parking. Its oldest building, the Nore, is nearly fifty years old, while the newest went up in 2024, and a third-level institute has been on the site since 1970. Its published addresses are Kilkenny Road at R93 V960 and the south sports campus at Mortarstown Upper, R93 AYW9. For a student who wants to study computing without leaving the county, that is the local route, and the years before it are exactly when a weekly class pays off.' },
        { kind: 'spec', title: 'Who lives in the county', p: 'Non-Irish citizens make up 11% of Carlow. The largest groups are Polish at 1,875, then UK at 846, Romanian at 590 and Latvian at 550, and dual citizenship has risen from 943 to 1,491, most commonly Irish and UK. There were 573 Irish Travellers in the county, up 12% on 2016.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The county town that a filter deletes',
      intro: 'This project works because the learner knows the place. Losing an abstract row teaches nothing; losing your own town teaches a habit.',
      body: [
        { kind: 'table', caption: 'What we measured in the published table, read 16 September 2026', head: ['Step', 'Result'], rows: [
          ['Town labels in the table, nationally', '868'],
          ['Labels ending in the words Co Carlow', '16'],
          ['Labels mentioning Carlow at all', '19'],
          ['Rows the suffix filter misses', 'Carlow town, Graiguenamanagh and Tinnahinch, and Bunclody'],
          ['People in the missing county town alone', '27,351, about 44% of the county'],
          ['Warning given by the filter', 'None']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why three rows, not one', p: 'Every town whose built-up area crosses a county line carries both counties in its label. Carlow has three of them, because it is small and its towns sit on rivers that are also boundaries.' },
          { h3: 'The seductive part', p: 'The filter returns sixteen rows and a total that looks perfectly sensible for a small county. Nothing about the result signals that the county town is missing from it.' },
          { h3: 'What to do instead', p: 'Match the county name anywhere in the label, then read the rows you excluded before discarding them, and reconcile your total against a published one.' }
        ] },
        { kind: 'callout', h3: 'And a county with nothing to download', p: 'We also checked whether Carlow County Council publishes open data of its own, by querying the national portal\'s own organisation record. The council has zero datasets registered. Some Irish councils publish generously, some publish a little, and some publish none; Carlow is currently in the third group. That is worth knowing before a student plans a project around local data, and it is why this page uses a national table with a Carlow-shaped problem inside it instead. Checking the publisher first, rather than hoping, is the professional move.' },
        { kind: 'p', text: 'The project ends with two numbers: the naive total and the corrected one, and a sentence explaining the difference. Students who have written that sentence once tend to check every roll-up they are ever handed.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Matching without losing rows',
      h2: 'Five habits for joining and filtering data',
      intro: 'Learned on a table of Irish towns and used afterwards wherever records are matched by name.',
      body: [
        { kind: 'table', caption: 'Where name matching goes wrong', head: ['Habit', 'In practice', 'What it prevents'], rows: [
          ['Expect the exception', 'Ask which rows belong to two categories before writing the rule', 'Deleting the rows that matter most'],
          ['Inspect the rejects', 'Always print what a filter excluded', 'Silent losses with no error'],
          ['Count your matches', 'Compare matched rows against the number you expected', 'A plausible but short total'],
          ['Reconcile upward', 'Check a roll-up against an independently published total', 'Compounding one mistake into a report'],
          ['Check the publisher first', 'Confirm a source exists and is populated before planning work', 'Building on a dataset that is not there']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A sorting game where one place belongs to two boxes at once, and the program has to be told what that means.' },
          { h3: 'Teenagers', p: 'The real table in Python: write the naive filter, lose the town, fix it, and reconcile the result against the published figure.' },
          { h3: 'Adults', p: 'The same habits on work records, where customers, sites and products routinely belong to more than one category.' }
        ] },
        { kind: 'p', text: 'We are independent of Carlow County Council, South East Technological University and every school mentioned here, and nothing on this page implies a link. Census figures are the Central Statistics Office\'s for 2022; the filter measurements and the Carlow-side split are ours, and the split is labelled as derived wherever it appears.' }
      ]
    },
    {
      id: 'living', tint: '', eyebrow: 'Living in the county',
      h2: 'R93, the Barrow and a county that commutes',
      intro: 'A short tour of the things a Carlow family would expect a page about their county to know.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One routing key', p: 'R93 covers the county town\'s published addresses, including both South East Technological University campuses on the Kilkenny Road, at R93 V960 and R93 AYW9.' },
          { h3: 'A river that divides', p: 'The Barrow is why Carlow town straddles a county line: Graiguecullen, on the west bank, is in County Laois, which is exactly what the statistics office records in its town label.' },
          { h3: 'Work and home', p: '23,650 people travelled to work in the county in April 2022, 15,220 of them by car, while participation in the labour force sat at 60% against 61% nationally.' }
        ] },
        { kind: 'spec', title: 'The Irish language in Carlow', p: 'The census recorded 21,246 Irish speakers, 38.3% of everyone aged three and over, a little below the national rate. Classes here are taught in English, and programming keywords are English regardless of the language of a learner\'s school, so this makes no practical difference.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting places to totals that reconcile',
    intro: 'The bands below are typical. What decides a learner\'s start is the work they do in the free lesson.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Categories', p: 'First programs that group things, and what to do when something belongs in two groups.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Searching tables', p: 'Finding rows in real files and checking that the search found all of them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Filters and reconciliation', p: 'Writing filters, measuring what they lose, and proving a total against a published figure.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Sources and joins', p: 'Confirming a source is real and populated, then joining records without dropping the awkward ones.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant can write this filter in one line. Why should a Carlow teenager check what it kept?',
    intro: 'Because the wrong answer is short by a county town and says nothing about it.',
    p1: 'Give an AI tool the table and ask for the population of Carlow\'s towns. It will write a sensible filter, probably matching labels that end in the county name, and return a number. That number excludes Carlow town, because Carlow town is labelled with two counties. The tool has not malfunctioned: it applied the pattern that fits almost every row, which is exactly what makes the exception dangerous.',
    p2: 'What protects you is knowing the place, and asking the question a local would ask: where is Carlow town in this answer? A learner who has been surprised by their own home town once starts asking that of every dataset, including ones about places they have never been.',
    closer: 'So a Carlow child learning to code in 2026 is not learning it because the county is full of software firms. They are learning to notice when a confident number is missing something, which is a skill this county will keep needing.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Tullow, Borris, Hacketstown or the town itself',
    intro: 'Outside the county town, Carlow is villages and farmland, and an evening class in a room means a drive for nearly everyone.',
    cells: [
      { h3: 'No car needed', p: 'A learner in Rathvilly and one in Bagenalstown sit in the same group without either parent driving anywhere.' },
      { h3: 'The Irish school year, by name', p: 'First Year, the Junior Cycle, Transition Year and sixth year, used as they are in school here, so nothing needs explaining.' },
      { h3: 'A free lesson that is a lesson', p: 'Real work on a real task, then an honest recommendation on level, course and hour, with no card details taken.' },
      { h3: 'Grouped by ability', p: 'Five to ten learners at one level, drawn from Carlow and other countries, which is what makes a good hour possible in a small county.' },
      { h3: 'A weekly rhythm', p: 'Two lessons most weeks, about eight a month, at the same hour, pausing for mid-terms, exams and holidays by agreement.' },
      { h3: 'Teachers on a fixed clock', p: 'India does not change its clocks, so our teachers sit four and a half hours ahead of Ireland in summer and five and a half in winter.' }
    ],
    spec: { title: 'Why a small county benefits most', p: 'A town of 27,351 cannot fill an evening class at every level and every age. An online group draws its five to ten learners from several countries, which is how a child in Carlow gets a class at exactly their level rather than the nearest one running.' }
  },

  fees: {
    h2: 'What classes cost in County Carlow',
    intro: 'Three figures, stated plainly.',
    first: 'A full lesson at no charge, ending with a placement and a recommended course.',
    group: 'A month of teaching, usually eight lessons, with five to ten learners of similar ability.',
    private: 'The same month of roughly eight lessons, with one teacher and one learner.',
    closer: 'Everything is billed in US dollars at the single rate charged outside India, so Tullow pays what Carlow town pays and no euro list exists. Charging begins only after the free lesson has settled a course and a weekly hour, and the pricing page covers pauses, missed lessons and format changes.'
  },

  reviewsH2: 'Six Google reviews from our families, printed as written',

  book: {
    h2: 'Tell us where the learner is now',
    intro: 'The opening task fits the learner: a sorting game for a younger child, a first script that reads a table, or the filter that loses Carlow town for a teenager.',
    success: 'Thank you. We will be in touch shortly about your County Carlow class.'
  },

  faq: {
    h2: 'County Carlow coding class questions',
    intro: 'The county, its numbers and how classes run here.',
    items: [
      { q: 'How many people live in County Carlow?', a: 'Census 2022 counted 61,968, up 9% or 5,036 since 2016. About 36% of them live in a town of ten thousand or more, and that town is Carlow.' },
      { q: 'Why is Carlow town counted across two counties?', a: 'Because its built-up area crosses the Barrow into County Laois at Graiguecullen. The statistics office publishes it as Carlow, Counties Carlow and Laois, with 27,351 people in total.' },
      { q: 'Did any Carlow school offer Leaving Certificate Computer Science from the start?', a: 'No. We read all forty addresses on the January 2018 first-phase list and none is in County Carlow. That describes 2018, not today, and no current official list exists.' },
      { q: 'What is the Carlow data project?', a: 'Students write the obvious filter for Carlow towns, find it returns sixteen of nineteen rows and quietly drops the county town, then fix it and reconcile the total against a published figure.' },
      { q: 'Does the county publish open data?', a: 'Not at present. Carlow County Council has no datasets registered on the national portal, which we checked directly, so our project uses a national table with a Carlow problem in it instead.' },
      { q: 'Is there a third-level option in the county?', a: 'South East Technological University has a campus on the Kilkenny Road in Carlow town, with about thirty hectares and sixteen buildings. We are not connected with the university.' },
      { q: 'What hours do classes run?', a: 'Afternoons, evenings and weekend mornings. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter, and the weekly hour is agreed in the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in Carlow?', a: 'No, and we do not suggest one. Teaching is live online only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number on this page is an Indian one.', boiler: true },
      { q: 'What do County Carlow coding classes cost?', a: 'Nothing for the first lesson. After that a group place is USD 100 a month, which covers two live lessons a week and around eight a month with five to ten learners, or USD 150 a month taught privately. Course, format and hour are agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched by ability, pace and goal rather than by age or address. If no suitable group runs at a workable hour, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Across the river and around the country',
    html: 'Carlow town reaches into <a class="cg-inline-link" href="/coding-classes-in-county-laois">County Laois</a>, which has a page of its own, and the nearest city pages are <a class="cg-inline-link" href="/best-coding-class-in-waterford">Waterford</a> and <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a>. To compare online schools, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>. Everything else is on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Carlow and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-laois', label: 'County Laois' },
    { href: '/best-coding-class-in-waterford', label: 'Waterford' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-clw .cg-hero-grid { align-items: start; gap: clamp(1.02rem, 3.45vw, 2.85rem); }
.cg-root.cg-clw .cg-hero h1 { font-weight: 700; letter-spacing: -0.0175em; line-height: 1.07; }
.cg-root.cg-clw .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.02rem; }
.cg-root.cg-clw .cg-eyebrow { letter-spacing: 0.21em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-clw .cg-section-head h2 { max-width: 37ch; letter-spacing: -0.009em; }
.cg-root.cg-clw .cg-grid-3 { gap: clamp(1.12rem, 2.55vw, 2.05rem); }
.cg-root.cg-clw .cg-table caption { letter-spacing: 0.025em; font-weight: 700; }
.cg-root.cg-clw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-clw .cg-table td:first-child { font-weight: 600; }
.cg-root.cg-clw .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-clw .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'County Carlow, Census 2022 (CSO): population 61,968, up 9 percent or 5,036 since 2016, with 31,146 female and 30,822 male, 99 males for every 100 females; average age 38.8, up from 36.9; those aged 65 and over up 26 percent to 9,304; 65 percent of households owning and 29 percent renting; 26,792 people aged 15 and over at work, up 4,819 or 22 percent; unemployment 9 percent against 17 percent in 2016; labour force participation 60 percent against 61 percent nationally; 23,650 people travelling to work, 15,220 of them driving, with an average journey of 29.7 minutes against 28.5 in 2016; more than 6,300 people working from home at least some of the time. Towns: Carlow published as "Carlow, Counties Carlow & Laois" at 27,351, density 2,333.9 per sq km across 11.7 sq km, average age 36.6, 20.2 percent aged under 15; Tullow 5,138 and Muinebeag, also called Bagenalstown, 2,945. F1010 records 22,496 people, about 36 percent of the county, in towns of 10,000 or more. DERIVED, not published: since no other single-county Carlow town reaches 10,000, the Carlow side of Carlow town is 22,496 and the Laois side 4,855. Local electoral areas: Carlow 25,168, Tullow 20,225, Muinebeag 16,575. Citizenship: non-Irish citizens 11 percent, Polish 1,875, UK 846, Romanian 590, Latvian 550; dual citizenship 1,491, up from 943, most commonly Irish and UK at 282; almost 48,300 people of White Irish background; Catholics almost 45,200, 73 percent, down from 83 percent; more than 6,700 with no religion, up 74 percent; 573 Irish Travellers, up 12 percent. Education: almost 16,000 with a third-level qualification, 39 percent against 45 percent nationally. Irish speakers 21,246, 38.3 percent of those aged three and over. Gov.ie, 4 January 2018: all forty first-phase Leaving Certificate Computer Science addresses were read and none is in County Carlow. South East Technological University\'s Carlow campus on the Kilkenny Road spans about 30 hectares and 16 buildings, around 37,500 square metres, with the Nore Building nearly fifty years old and the newest building completed in 2024; addresses Kilkenny Road R93 V960 and Mortarstown Upper R93 AYW9.',
    localProject: 'A county town that a filter deletes, and a council that publishes nothing. Carlow County Council has zero datasets registered on data.gov.ie, confirmed through the portal\'s organisation API, so the trap is measured in CSO table F1013 instead. Of 868 national town labels, 16 end in the words Co Carlow while 19 mention Carlow at all, and the three rows a suffix filter misses are Carlow, Counties Carlow and Laois at 27,351, Graiguenamanagh and Tinnahinch across Kilkenny and Carlow, and Bunclody across Wexford and Carlow. The missing county town alone accounts for about 44 percent of the county population, and the filter raises no error. The fix is to match the county name anywhere in the label, inspect the excluded rows, count matches against expectation and reconcile the total against the published F1010 figure of 22,496.',
    requiredMentions: [
      '61,968',
      '27,351',
      '22,496',
      '4,855',
      '5,138',
      '2,945',
      '25,168',
      '1,875',
      '9,304',
      '21,246',
      'R93 V960',
      'Muinebeag'
    ],
    sources: [
      { claim: 'CSO summary results, Carlow: "the population of Carlow grew by 9% to 61,968, which means the number of people in the county rose by 5,036"; average age 38.8 against 36.9; those aged 65 and over up 26% to 9,304; 26,792 at work, up 22%; 65% owning and 29% renting.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultscarlow/' },
      { claim: 'CSO Profile 7, Carlow: unemployment 9% against 17% in 2016; participation 60% against 61% nationally; 23,650 travelling to work and 15,220 driving; average journey 29.7 minutes; more than 6,300 working from home at least some of the time.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingcarlow/' },
      { claim: 'CSO Profile 1, Carlow: "Carlow was the largest town, with a population of 27,351 in April 2022", published in F1013 as "Carlow, Counties Carlow & Laois".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementscarlow/' },
      { claim: 'CSO tables F1013 and F1015: Carlow town density 2,333.9 per sq km across 11.7 sq km, average age 36.6, 20.2% aged under 15; Tullow 5,138; Muinebeag 2,945.', url: 'https://data.cso.ie/table/F1013' },
      { claim: 'CSO table F1010: 22,496 people in County Carlow lived in towns of 10,000 population and over in April 2022.', url: 'https://data.cso.ie/table/F1010' },
      { claim: 'CSO table F1016: Carlow 25,168, Tullow 20,225, Muinebeag 16,575.', url: 'https://data.cso.ie/table/F1016' },
      { claim: 'CSO Profile 5, Carlow: non-Irish citizens 11% of the county, Polish 1,875, UK 846, Romanian 590, Latvian 550; dual citizenship 1,491, up from 943, Irish-UK largest at 282; 573 Irish Travellers, up 12%.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligioncarlow/' },
      { claim: 'CSO Profile 8, Carlow: third-level qualifications almost 16,000, "a rate of 39% compared with 45% nationally"; 21,246 Irish speakers, 38.3% of those aged three and over.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationcarlow/' },
      { claim: 'Department of Education, 4 January 2018: all forty first-phase Leaving Certificate Computer Science school addresses were read and none is in County Carlow.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'South East Technological University: the Carlow campus "spans approximately 30 hectares and includes 16 buildings, covering around 37,500m2", with the Nore Building "constructed nearly 50 years ago" and the newest building added in 2024.', url: 'https://www.setu.ie/about/setu-campuses/carlow-campus' },
      { claim: 'South East Technological University: "Kilkenny Road Campus Address: Kilkenny Road, Carlow. Eircode: R93 V960" and "South Sports Campus Address: Kilkenny Road, Mortarstown Upper, Carlow. Eircode: R93 AYW9".', url: 'https://www.setu.ie/about/setu-campuses/carlow-campus/visiting-the-carlow-campus' },
      { claim: 'data.gov.ie organisation record for Carlow County Council: package count zero, meaning no datasets are registered.', url: 'https://data.gov.ie/organization/carlow-county-council' }
    ],
    rejectedClaims: [
      'Presenting Carlow town\'s 27,351 as a County Carlow figure: the CSO publishes it across Carlow and Laois.',
      'Presenting the 22,496 Carlow-side and 4,855 Laois-side split as published: both are our own subtraction and are labelled as derived.',
      'A county-level density or under-15 share: the CSO publishes neither for Carlow, so town figures are used and labelled.',
      'A county-wide out-commuting total: not published in the profiles read.',
      'Any claim about which Carlow schools teach Leaving Certificate Computer Science today: no current official list exists.',
      'Anything owned by the Louth or Wexford county pages, including their datasets and figures.'
    ]
  }
};
