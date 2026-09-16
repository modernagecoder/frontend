'use strict';
// County Sligo (cg- county page, Ireland cluster, Phase 4). Spine: an average
// describes a county and almost none of the places in it. Sligo's average age is
// 40.7, and its towns run from Coolaney at 31.8 to Rosses Point and Enniscrone
// at 45.3. The largest town has the smallest share of children, 16.4 per cent
// under 15 against Coolaney's 30.6 per cent, so where the children actually are
// is not where the population is. That is a lesson about spread rather than
// about numerator and denominator, which is the County Mayo page's territory.
// NOT USED: the F1010 "Ireland" row that doubles a naive sum, which the County
// Kerry page owns, even though Sligo's dossier measures it cleanly. Sligo County
// Council publishes zero datasets, stated in one line rather than made into a
// project, since Tipperary, Kerry, Offaly and Mayo already cover four different
// ways of failing to reach council data. Facts read at primary sources on
// 16 September 2026: the Sligo Summary, Profile 1, 5, 7 and 8 press statements;
// PxStat F1013 and F1015; gov.ie's January 2018 list, which contains no Sligo
// school; atu.ie; hawkswell.com; irishrail.ie; sligococo.ie; data.gov.ie.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY SLIGO', blurb: 'Sligo town, Tubbercurry and the coast, with a project on why an average age describes nowhere.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-sligo',
  code: 'sgo',
  accent: '#0E6154',
  accentRationale: 'County Sligo: a north western teal from the solver, distinct from the greens used in Munster and the midlands',
  pageType: 'governorate',
  place: {
    name: 'County Sligo',
    eyebrow: 'County Sligo, Connacht',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-mayo', name: 'County Mayo' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'County Mayo', href: '/coding-classes-in-county-mayo' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'County Sligo, Ireland',
  title: 'Coding Classes in County Sligo | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Sligo, from Sligo town and Tubbercurry to Ballymote, Strandhill and Coolaney, ages 6 to 67.',
  ogDescription: 'Coding and AI classes for County Sligo, with a project on why the county average age of 40.7 years describes almost none of its towns.',
  twitterDescription: 'Coding classes across County Sligo, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Sligo Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Sligo, taught live in English.'
  },

  h1: 'Coding classes in County Sligo',
  capsuleQ: 'What are the best coding classes in County Sligo?',
  capsule: 'County Sligo holds 70,198 people, 4,663 more than in 2016. Sligo town accounts for 20,608 of them and the rest are spread thinly, from Tubbercurry at 2,307 down to villages of a few hundred. The county has an older profile than most, with 12,903 people aged 65 or over, and no Gaeltacht. Our teaching runs live, one hour a week at a fixed time, in ability groups of five to ten or one to one, from age six through to sixty-seven. The first lesson is free, then USD 100 a month in a group or USD 150 privately.',
  lead: 'The average age in County Sligo is 40.7 years. Now look at its towns. Coolaney averages 31.8. Rosses Point and Enniscrone both average 45.3. That is a spread of thirteen and a half years inside one small county, and the county figure sits in the middle describing none of them. Push a little further and it gets stranger. Sligo town is the biggest place here by a wide margin, and only 16.4 per cent of its residents are under 15. In Coolaney, a village of 1,155 people, the figure is 30.6 per cent, nearly double. The children of this county are not, proportionally, where the county keeps its population. An average told you none of that, and an average is usually all anybody quotes.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Sligo.',

  picks: {
    eyebrow: 'Course picks for County Sligo',
    h2: 'Four ways to begin',
    intro: 'Each starts with a free lesson from the teacher who would take the course. No card details are collected first.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects that show the average of a set of numbers and how little it says about any one of them.' },
      { course: 'maths-through-coding', band: 'Ages 9 to 13', note: 'Averages, ranges and spread, taught by writing the programs that calculate them.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real town-level tables, and the difference between a summary and a distribution.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who have to report on a region without flattening the places inside it.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'An average describes nowhere',
      intro: 'Eight Sligo places, one county figure, and the gap between them.',
      body: [
        { kind: 'table', caption: 'Average age and share of children, by Sligo town, Census 2022', head: ['Place', 'Average age', 'What stands out'], rows: [
          ['County Sligo as a whole', '40.7', 'Up from 39.2 in 2016, against a national 38.8'],
          ['Sligo town, 20,608 people', '39.8', 'Only 16.4% under 15, the smallest share of children of the towns checked'],
          ['Coolaney, 1,155 people', '31.8', '30.6% under 15, nearly double the town\'s share'],
          ['Rosses Point, 883 people', '45.3', '28.2% aged 65 or over'],
          ['Enniscrone, 1,291 people', '45.3', '26.8% aged 65 or over'],
          ['The spread', '31.8 to 45.3', 'Thirteen and a half years between two places in one county']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What the average conceals', p: 'A single number for a county is a centre of gravity. It tells you nothing about how far apart the things being averaged are, and in Sligo they are very far apart indeed. Two places here differ by more than a decade of average age and both are inside the same small county.' },
          { h3: 'The counter-intuitive part', p: 'The biggest town has the smallest proportion of children. Where the people are and where the children are turn out to be two different maps, and only one of them is obvious from a population table.' },
          { h3: 'What a learner does with it', p: 'Rebuild the county from its parts, plot the eight places, calculate the range and the spread, and then write one sentence about what the county average is actually good for and what it is not.' }
        ] },
        { kind: 'callout', h3: 'Why this is the most practical statistics lesson there is', p: 'Almost every decision made about a place is made from a summary figure. Average income, average age, average class size, average waiting time. In each case the summary is easy to produce and easy to quote, and in each case the thing that matters to an actual person is where in the spread they sit. A learner who has seen a thirteen year gap hiding behind one county average will, ever afterwards, ask to see the range. That single question is worth more in an argument than any amount of technique, and it is available to a twelve year old.' },
        { kind: 'p', text: 'The extension is a real question rather than an exercise. If you were starting a class for twelve year olds in this county, and you only had the county average to go on, where would you put it? Then look at the town figures and answer again. The two answers are different, and understanding why is the point of the whole project.' }
      ]
    },
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'A small county with a big town in it',
      intro: 'Quoted from Central Statistics Office releases that name Sligo.',
      body: [
        { kind: 'table', caption: 'County Sligo at the 2022 census', head: ['Counted', 'Number'], rows: [
          ['People in the county', '70,198, up 4,663 since 2016, growing slightly slower than the State'],
          ['Aged 65 or over', '12,903, an increase of 21%'],
          ['Able to speak Irish, aged three and over', '26,506, up from 25,196, or 41.5% of that group'],
          ['Third level qualifications', 'Just under 21,000 people, up from almost 16,600, a rate of 44% against 45% nationally'],
          ['Travellers', '418, up from 386 in 2016'],
          ['Stating no religion', 'Almost 8,700 people, up 64% from almost 5,300 in 2016']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The towns', p: 'After Sligo town at 20,608 the county drops sharply: Tubbercurry 2,307, Strandhill 1,982, Collooney 1,797, Ballymote 1,711, Enniscrone 1,291, Coolaney 1,155 and Rosses Point 883.' },
          { h3: 'Density', p: 'Sligo town holds 1,649.6 people per square kilometre over 12.5 square kilometres, which is urban by Irish standards and unlike anywhere else in the county.' },
          { h3: 'Who lives here', p: 'Non-Irish citizens make up 9% of the county, led by UK citizens at 1,599 and Polish at 1,124, then Indian at 317 and German at 222.' }
        ] },
        { kind: 'p', text: 'Sligo has no Gaeltacht area. The statistics office defines the Gaeltacht as a set of electoral divisions in seven named counties and Sligo is not among them, so no part of this county is classified that way. That matters for a page like this only because it is the kind of detail people assume rather than check, and the check takes about a minute in the source itself.' }
      ]
    },
    {
      id: 'work', tint: 'tint', eyebrow: 'Work, study and travel',
      h2: 'Health, manufacturing and a short commute',
      intro: 'What Sligo does for a living, and how long it takes to get there.',
      body: [
        { kind: 'table', caption: 'Working in Sligo, Census 2022', head: ['What the CSO reported', 'Figure'], rows: [
          ['Largest employment sector', 'Human health and social work, with almost 4,600 workers'],
          ['Next two', 'Manufacturing at just over 3,600 and wholesale and retail at almost 3,500'],
          ['Unemployment', '8%, down from 14% in 2016'],
          ['Driving to work', '17,154 people, with 372 on the bus and 71 by train'],
          ['Walking and cycling', '2,400 walked, up from 2,092 in 2016, and 359 cycled'],
          ['Average journey', '23.4 minutes, with 7,668 commuters under 15 minutes and 8,859 between 15 and 30']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Working from home', p: '8,216 people worked from home at least one day a week, which is 27% of the workforce against 32% nationally, and almost 2,200 did so all five days.' },
          { h3: 'Staying in education', p: 'The average age at which people finished full time education rose from 19.9 years to 21, a bigger rise than the national move from 19.9 to 20.8.' },
          { h3: 'The 2018 school list', p: 'No County Sligo school appears among the forty on the first national list for Leaving Certificate Computer Science. We read the full table and searched it. The nearest entries are in Mayo and Galway.' }
        ] },
        { kind: 'spec', title: 'Why the short commute still argues for online', p: 'Sligo commutes are not long by Irish standards, at 23.4 minutes on average, and nearly 7,700 people travel under fifteen minutes. That is a genuine advantage for anything happening in Sligo town. It is no help at all in Coolaney, Ballymote, Enniscrone or Tubbercurry, where the children are proportionally more numerous and the options are fewer. An online class does not care which of those two situations a family is in, which is the entire point of it.' }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Sligo addresses',
      h2: 'Four places, one routing key',
      intro: 'Each address below was read on the organisation\'s own website, and they share something.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'ATU Sligo', p: 'Ash Lane, eircode F91 YW50, described by the university as a 72 acre green campus ten minutes\' walk from the centre, with almost 10,000 students studying full time, part time or online.' },
          { h3: 'Hawk\'s Well Theatre', p: 'Temple Street, eircode F91 CFY7, a registered charity which says it has been bringing the arts to the north west since it opened in 1982.' },
          { h3: 'The station and the council', p: 'Sligo MacDiarmada station on Lord Edward Street is F91 K752, open 24 hours with 34 parking spaces including two electric charging points, and the council sits at County Hall, Riverside, F91 Y763.' }
        ] },
        { kind: 'p', text: 'All four share the routing key F91, which is the part of an eircode identifying the principal post town rather than the individual building. It is a small, checkable thing, and it is the sort of pattern worth noticing before assuming: four independent organisations, four separate websites, one key. We are not connected with any of them, nor with Sligo County Council, nor with any school. Population, work and education figures are quoted from Central Statistics Office releases naming Sligo, and the spread calculations in the project are our own, made on published town-level tables. Sligo County Council publishes no datasets on the national portal, which we checked directly, so nothing in this page depends on council data.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From one number to the whole shape',
    intro: 'Ages guide the grouping; the free lesson decides it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Middles and extremes', p: 'Programs that find the average of a list and then show what the list actually looks like.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Range and spread', p: 'Why two very different sets of numbers can share an average, using real Sligo towns.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Distributions in code', p: 'Building the picture behind a summary and writing what the summary is good for.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Reporting without flattening', p: 'Presenting a regional figure while making the variation inside it visible.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask how old County Sligo is and you will be told 40.7',
    intro: 'It is the correct answer to the question asked, and it hides everything interesting.',
    p1: 'A single figure is what a question about a county invites, and 40.7 years is exactly right. It is also true that two towns here sit four and a half years above it and one sits almost nine years below it. The answer is accurate and the picture it leaves in your head is wrong.',
    p2: 'The fix is not a better tool. It is a better second question: what is the range, and which places sit at the ends of it. Anyone who has once plotted eight towns against a county average asks that automatically, because they have seen how much a single number can swallow.',
    closer: 'That habit of asking for the shape rather than the summary is most of what separates somebody who uses data from somebody who is used by it.',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How the class runs, from Ballymote to Strandhill',
    intro: 'Six plain facts about the format.',
    cells: [
      { h3: 'One live hour a week', p: 'A teacher is present throughout and the learner is expected to talk, not to watch.' },
      { h3: 'Reaching the small places', p: 'Coolaney, Ballymote and Tubbercurry have proportionally more children and fewer options than Sligo town. Online removes that difference entirely.' },
      { h3: 'Ability groups of five to ten', p: 'Learners placed at one level, gathered across Sligo and several other countries, so a proper peer group exists at a workable hour.' },
      { h3: 'What is needed', p: 'A laptop or desktop, working sound and a connection good enough for video, which the free lesson tests directly.' },
      { h3: 'Irish school stages', p: 'Junior Cycle, Transition Year and senior cycle, with exam weeks and mid-terms planned around.' },
      { h3: 'Our hours', p: 'Afternoons, evenings and weekend mornings, taught by a team working several hours ahead of Irish time.' }
    ],
    spec: { title: 'Small numbers, real consequence', p: 'Rosses Point has 883 people and Coolaney 1,155. In places that size there may be two or three children in a given school year with a serious interest in programming, and they may not be in the same year or the same school. That is not enough for a class in a room anywhere, at any price. Gathering those learners with others at the same level, from across the county and beyond it, is the only way the right group ever comes into existence.' }
  },

  fees: {
    h2: 'What Sligo families pay',
    intro: 'Three figures, with the terms in plain sight.',
    first: 'A complete first lesson at no cost, which ends with a level and a recommendation.',
    group: 'A month of group classes, about eight lessons, five to ten learners at one level.',
    private: 'A month of one to one teaching on the same weekly pattern.',
    closer: 'We bill monthly in US dollars at the single rate charged outside India, so Enniscrone pays what Sligo town pays and no second price list exists. Nothing is charged until a course and an hour have been agreed in the free lesson, and the pricing page sets out pauses, missed lessons and changes of format.'
  },

  reviewsH2: 'Six Google reviews left by our families, printed as they were written',

  book: {
    h2: 'Ask for a free lesson',
    intro: 'Tell us the learner\'s age and what draws them. The first hour is shaped around it, from a Scratch project about averages to a real set of town figures that refuse to agree with each other.',
    success: 'Thank you. Somebody will be in touch about your County Sligo class shortly.'
  },

  faq: {
    h2: 'County Sligo coding class questions',
    intro: 'What Sligo families ask before starting.',
    items: [
      { q: 'How many people live in County Sligo?', a: 'The 2022 census counted 70,198, an increase of 4,663 since 2016, which is slightly slower growth than the State as a whole.' },
      { q: 'What is the Sligo data project?', a: 'Students compare the county average age of 40.7 years with its towns, which run from 31.8 in Coolaney to 45.3 in Rosses Point and Enniscrone, and work out what a county average is and is not good for.' },
      { q: 'How big is Sligo town?', a: 'It held 20,608 people in 2022 at 1,649.6 per square kilometre. Only 16.4% of its residents are under 15, a smaller share than the villages around it.' },
      { q: 'Does County Sligo have a Gaeltacht?', a: 'No. The statistics office defines the Gaeltacht as electoral divisions within seven named counties and Sligo is not one of them.' },
      { q: 'Did a Sligo school offer Leaving Certificate Computer Science from the start?', a: 'No Sligo school appears on the forty-school first-phase list published in January 2018. We read the full table and searched it. That says nothing about schools here today.' },
      { q: 'Do you teach children outside Sligo town?', a: 'Yes, and it is where this format earns its place. Tubbercurry, Ballymote, Coolaney, Collooney and Enniscrone all get the same teacher at the same hour as anyone in town.' },
      { q: 'When do classes run?', a: 'Afternoons, evenings and weekend mornings, at an hour fixed in the free lesson. Our teaching team works several hours ahead of Irish time.' },
      { q: 'Is there a Modern Age Coders classroom in County Sligo?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do County Sligo coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The north west and Connacht',
    html: 'Sligo\'s neighbours with their own pages are <a class="cg-inline-link" href="/coding-classes-in-county-mayo">County Mayo</a>, <a class="cg-inline-link" href="/coding-classes-in-county-donegal">County Donegal</a> and <a class="cg-inline-link" href="/coding-classes-in-county-galway">County Galway</a>. To compare online schools, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, and the whole cluster is indexed on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Sligo and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-mayo', label: 'County Mayo' },
    { href: '/coding-classes-in-county-donegal', label: 'County Donegal' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-sgo .cg-hero-grid { align-items: start; gap: clamp(1.08rem, 3.14vw, 2.63rem); }
.cg-root.cg-sgo .cg-hero h1 { font-weight: 700; letter-spacing: -0.0186em; line-height: 1.072; }
.cg-root.cg-sgo .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.21rem; }
.cg-root.cg-sgo .cg-eyebrow { letter-spacing: 0.179em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sgo .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0132em; }
.cg-root.cg-sgo .cg-grid-3 { gap: clamp(1.01rem, 2.62vw, 2.08rem); }
.cg-root.cg-sgo .cg-table caption { letter-spacing: 0.034em; font-weight: 700; }
.cg-root.cg-sgo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sgo .cg-table td:nth-child(3) { font-style: normal; }
.cg-root.cg-sgo .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.09rem; }
.cg-root.cg-sgo .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'County Sligo, a single-tier local authority whose council area is the county, Census 2022 (CSO Sligo releases): population 70,198, up 4,663 (7 percent) since 2016, against national growth of 8 percent from 4,761,865 to 5,149,139; average age 40.7 against 39.2 in 2016 and a national 38.8; people aged 65 or over up 21 percent to 12,903, against a national rise of 22 percent to 776,315. Towns: Sligo town 20,608 at 1,649.6 per sq km over 12.5 sq km, average age 39.8 with 16.4 percent under 15 and 16.7 percent aged 65 or over; Tubbercurry 2,307; Strandhill 1,982; Collooney 1,797; Ballymote 1,711; Enniscrone 1,291 with 26.8 percent aged 65 or over and an average age of 45.3; Coolaney 1,155 with 30.6 percent under 15 and the youngest average age at 31.8; Rosses Point 883 with 28.2 percent aged 65 or over and an average age of 45.3, tied with Enniscrone as the oldest. Citizenship: non-Irish citizens 9 percent of the county, largest group UK at 1,599, then Polish 1,124, Indian 317 and German 222. Religion and ethnicity: 418 Travellers, up from 386 in 2016; more than 51,500 Catholics, 73 percent; almost 8,700 people stating no religion, up 64 percent from almost 5,300; Church of Ireland 2,485, Islam 1,021, Orthodox 434. Work and travel: human health and social work the largest sector at almost 4,600 workers, then manufacturing at just over 3,600 and wholesale and retail at almost 3,500; unemployment 8 percent against 14 percent in 2016; 8,216 people working from home at least one day a week, 27 percent of the workforce against 32 percent nationally, with almost 2,200 doing so five days, 1,550 one day and 1,367 two days, and almost 18,800 never; 17,154 driving to work, 372 by bus, 71 by train, 2,400 walking up from 2,092, and 359 cycling; average journey time 23.4 minutes against 22.1 in 2016, with 7,668 commuters under 15 minutes and 8,859 between 15 and 30. Education and Irish: third level qualifications up from almost 16,600 in 2016 to just under 21,000, a rate of 44 percent just below the national 45 percent; the average age of completing full time education up from 19.9 to 21 years, against a national move from 19.9 to 20.8; 26,506 people aged three and over could speak Irish, up from 25,196, which is 41.5 percent of that group against 41 percent in 2016. County Sligo has no Gaeltacht: the CSO defines the Gaeltacht as electoral divisions in Cork, Donegal, Galway, Kerry, Mayo, Meath and Waterford, and Sligo is not among them. FINDING: no County Sligo school appears on the forty-school first-phase Leaving Certificate Computer Science list of 4 January 2018, established by reading the full table. Addresses from their owners, all sharing the F91 routing key: ATU Sligo, Ash Lane, F91 YW50, described as a 72 acre green campus ten minutes\' walk from the centre with almost 10,000 students; Hawk\'s Well Theatre, Temple Street, F91 CFY7, open since 1982 and a registered charity; Sligo MacDiarmada station, Lord Edward Street, F91 K752, open 24 hours with 34 parking spaces including two electric charging points; Sligo County Council, County Hall, Riverside, F91 Y763.',
    localProject: 'A county average describes the county and almost none of the places in it. Sligo\'s average age is 40.7 years, while its towns run from Coolaney at 31.8 to Rosses Point and Enniscrone at 45.3, a spread of thirteen and a half years inside one small county. The sharper finding concerns children: Sligo town, by far the largest place at 20,608 people, has the smallest share of under-15s of the towns checked at 16.4 percent, while Coolaney, a village of 1,155, has 30.6 percent, nearly double. Where the population is and where the children are proportionally are two different maps, and a population table shows only the first. Learners rebuild the county from its towns, plot the eight places against the county average, compute the range, and write one sentence on what a county average is good for and what it is not. The extension is a real decision rather than an exercise: where would you start a class for twelve year olds using only the county average, and where would you start one after seeing the town figures. NOT USED: the F1010 "Ireland" pseudo-category, measured in this county\'s research as doubling both Sligo\'s own total of 70,198 and the national figure for any band, because the County Kerry and Fingal pages already carry that trap.',
    requiredMentions: [
      '70,198',
      '20,608',
      '12,903',
      '26,506',
      '17,154',
      '2,307',
      '1,155',
      '30.6%',
      'F91 YW50',
      'F91 CFY7',
      '8,216',
      '23.4 minutes'
    ],
    sources: [
      { claim: 'CSO Sligo summary press statement, 30 May 2023: "Census 2022 shows that the population of Sligo grew by 7% to 70,198" and "the number of people in the county rose by 4,663 between April 2016 and April 2022", against "Ireland\'s population grew by 8% from 4,761,865 to 5,149,139"; "The average age of Sligo\'s population in April 2022 was 40.7 years, compared with 39.2 years in April 2016"; "This age group increased by 21% to 12,903 in Sligo"; "In Sligo, 8,216 people (aged 15 and over) worked from home at least one day a week in 2022. This represented 27% of the workforce."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultssligo/' },
      { claim: 'CSO Profile 1 Sligo: "Sligo was the largest town, with a population of 20,608 in April 2022"; "Coolaney was the youngest, with an average age of 31.8 years"; "The oldest were Rosses Point and Enniscrone, with both having an average age of 45.3 years."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementssligo/' },
      { claim: 'CSO PxStat tables F1013 and F1015: Sligo town 20,608 at 1,649.6 per sq km over 12.5 sq km, average age 39.8, 16.4 percent under 15 and 16.7 percent aged 65 or over; Tubbercurry 2,307; Strandhill 1,982; Collooney 1,797; Ballymote 1,711; Enniscrone 1,291 with 26.8 percent aged 65 or over; Coolaney 1,155 with 30.6 percent under 15; Rosses Point 883 with 28.2 percent aged 65 or over.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1015/JSON-stat/2.0/en' },
      { claim: 'CSO Profile 5 Sligo: "Non-Irish citizens accounted for 9% of the county\'s population"; "The largest group were UK citizens (1,599 people) followed by Poland citizens (1,124), Indian (317) and German (222)"; "There were 418 Travellers in Sligo in Census 2022, compared with 386 in 2016 (+8%)"; "More than 51,500 people in the county were Catholic (73%)"; "There were almost 8,700 people who stated they did not have a religion, which was up from almost 5,300 in Census 2016, up 64%."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionsligo/' },
      { claim: 'CSO Profile 7 Sligo: "Human Health and Social Work Activities sector accounted for the largest number of workers in the county at almost 4,600"; manufacturing "just over 3,600" and wholesale and retail "almost 3,500"; "The unemployment rate was 8% compared with 14% in 2016"; "17,154 people driving to work by car in 2022. There were 372 people travelling by bus and 71 by train"; "2,400 people walked to work, up from 2,092 in 2016, while 359 people cycled"; "an average journey time of 23.4 minutes compared with 22.1 minutes in 2016"; "7,668 Sligo commuters who had a journey time of less than 15 minutes, while 8,859 people had a journey time of 15 to 30 minutes."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingsligo/' },
      { claim: 'CSO Profile 8 Sligo: "The number of people with a third level qualification in the county rose from almost 16,600 in 2016 to just under 21,000 in 2022. This was a rate of 44%, just below that at national level (45%)"; "In Sligo the average age rose from 19.9 years to 21 years"; "Of these 26,506 people could speak Irish... Irish speakers made up 41.5% of the county\'s population aged three and over, compared with 41% in Census 2016"; and the editor\'s note defining the Gaeltacht as electoral divisions "in the counties of Cork, Donegal, Galway, Kerry, Mayo, Meath and Waterford", which does not include Sligo.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationsligo/' },
      { claim: 'Department of Education, 4 January 2018: the forty-school first-phase Leaving Certificate Computer Science table contains no County Sligo address, established by reading and searching the full list.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Atlantic Technological University: "ATU Sligo, Ash Lane, Co. Sligo, F91 YW50, Ireland", "almost 10,000 students who study full-time, part-time or online", "a 72-acre Green Campus", "a ten-minute walk from the centre".', url: 'https://www.atu.ie/campus/sligo' },
      { claim: 'Hawk\'s Well Theatre: "Hawk\'s Well Theatre Temple Street Sligo F91 CFY7" and "Since opening in 1982, Hawk\'s Well Theatre has been bringing the joy of the Arts to the people of the North West", registered charity number 17611.', url: 'https://www.hawkswell.com/' },
      { claim: 'Iarnrod Eireann: Sligo MacDiarmada station, Lord Edward Street, eircode F91 K752, "34 parking spaces managed by APCOA, including 3 disabled spaces and 2 electric car charging points", operating hours 24hrs.', url: 'https://www.irishrail.ie/en-ie/station/sligo-macdiarmada' },
      { claim: 'Sligo County Council: "County Hall, Riverside, Sligo, Ireland, F91 Y763". Its publisher page on data.gov.ie lists zero datasets, and a filtered dataset search for it returns no results.', url: 'https://www.sligococo.ie/' }
    ],
    rejectedClaims: [
      'The F1010 "Ireland" pseudo-category doubling trap, measured cleanly in this county\'s research but owned by the County Kerry and Fingal pages.',
      'A county-level population density or land area figure for Sligo: neither the Summary nor Profile 1 states one, and no CSO table publishes a whole-county row.',
      'A county-level percentage aged under 15 for Sligo: only the 65 and over share and the average age are published at county level, with under-15 shares available only by town.',
      'Any address or eircode for The Model arts centre: its site was unreachable, and addresses are not taken from third parties.',
      'ATU Sligo\'s St Angela\'s campus address: not opened at a primary page, so not claimed.',
      'Any claim that Sligo has a Gaeltacht: the CSO\'s own definition names seven counties and Sligo is not among them.',
      'Council data of any kind: Sligo County Council publishes zero datasets on the national portal.'
    ]
  }
};
