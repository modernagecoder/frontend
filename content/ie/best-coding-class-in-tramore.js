'use strict';
// Tramore (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census 2022
// town tables for "Tramore, Co Waterford", CSO table F1015 and the CSO press
// statement "Census 2022 Results Profile 1 - Population Distribution and Movements
// Waterford", read 19 September 2026. Tramore Racecourse's site timed out and the
// council's Tramore library page returned 404; neither is quoted. Spine: verify a
// named claim and write down the rule that makes it true. The CSO statement: "Looking
// at Waterford, we can see that Tramore was the largest town, with a population of
// 11,277 in April 2022." F1015: Waterford city and suburbs, Counties Waterford &
// Kilkenny 60,079; Clonmel, Counties Tipperary & Waterford 18,369; Tramore, Co
// Waterford 11,277; Dungarvan 10,081. The claim holds for towns wholly in the county
// with the city set aside. 18 town labels name two counties. The same statement's
// youngest (Ballinroad 33.6) and oldest (Cappoquin 43.1) reproduce. The Waterford city
// page owns 60,079 and the commuter-town claim; Tipperary owns 18,369 as mentions.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'TRAMORE', blurb: 'The CSO says Tramore is County Waterford\'s largest town. It is, under one rule the sentence never states. The project finds the rule.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-tramore',
  code: 'trm',
  accent: '#2A3A9D',
  accentRationale: 'Tramore: a strand-and-sea blue from a widened solver search, far from the Waterford city olive and the purples of other pages',
  pageType: 'city',
  place: {
    name: 'Tramore',
    eyebrow: 'Tramore, County Waterford',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'County Waterford' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-waterford', name: 'Waterford' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Waterford', href: '/best-coding-class-in-waterford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Tramore, County Waterford, Ireland',
  title: 'Best Coding Class in Tramore | Modern Age Coders',
  description: 'Coding, Python, AI and data classes for Tramore learners aged 6 to 67, taught live online in small groups at one level or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Tramore, with a data project that checks an official claim about the town and finds the rule that makes it true.',
  twitterDescription: 'Live online coding, Python and AI lessons for Tramore, ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Tramore',
    description: 'Online coding, Python, AI, data and mathematics in same-level groups for children, teenagers and adults in Tramore, County Waterford, taught live in English.'
  },

  h1: 'Coding classes in Tramore',
  capsuleQ: 'What is the best coding class in Tramore?',
  capsule: 'Tramore\'s 11,176 usual residents live in 4,176 households, and 3,512 of those households have broadband, which carries our lessons in full. Each lesson is live on video: a teacher with a small group sharing one level, or with a single learner, roughly two times a week, for ages six to sixty-seven. The first lesson is on the house; from then on a group place is USD 100 a month and private teaching USD 150.',
  lead: 'The Central Statistics Office\'s statement on County Waterford contains a clear, checkable sentence: "Looking at Waterford, we can see that Tramore was the largest town, with a population of 11,277 in April 2022." The learner sets out to verify it from the published town list. The number is exactly right. Whether Tramore is the largest town, though, depends on a rule the sentence never states, because the same list puts two bigger places in County Waterford: Waterford city and its suburbs, and Clonmel, whose label names both Tipperary and Waterford. Checking the claim turns out to mean finding the definition under which it is true, and writing it down.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Tramore.',

  picks: {
    eyebrow: 'Course picks for Tramore',
    h2: 'Courses Tramore learners often start on',
    intro: 'Match the course to the learner\'s age and interests; the teacher of that course sets the level in the free first lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Block coding with sorting games, where "the biggest" depends on which things are allowed into the game.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python filters and sorting on real lists, and checking a sentence against the data.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 14 to 18', note: 'Complete programs that test claims, with the rules behind each test written into the code.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who quote or check statistics at work and need the definition behind every superlative.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Check a claim about Tramore, and find the rule that makes it true',
      intro: 'The CSO\'s town list gives a population for every town, city and suburb in the State. The learner filters it for County Waterford three different ways and asks which town comes first each time.',
      body: [
        { kind: 'table', caption: 'The largest places whose census label mentions Waterford, population in April 2022', head: ['Label in the town list', 'Population'], rows: [
          ['Waterford city and suburbs, Counties Waterford & Kilkenny', '60,079'],
          ['Clonmel, Counties Tipperary & Waterford', '18,369'],
          ['Tramore, Co Waterford', '11,277'],
          ['Dungarvan, Co Waterford', '10,081'],
          ['Portlaw, Co Waterford', '1,881']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Rule one: anything in the list', p: 'If every row that mentions Waterford counts, Waterford city and suburbs comes first at 60,079. The town list includes cities with their suburbs, so on this reading the sentence is false.' },
          { h3: 'Rule two: cities set aside', p: 'Leave the city out and Clonmel, at 18,369, comes first, because its label names Tipperary and Waterford. On this reading the sentence is false again.' },
          { h3: 'Rule three: wholly in the county', p: 'Keep only towns labelled Co Waterford alone, cities apart, and Tramore comes first at 11,277, exactly the figure stated. This is the reading under which the CSO sentence is true.' }
        ] },
        { kind: 'table', mt: true, caption: 'The rest of the same statement, checked against the same list', head: ['Claim in the statement', 'Reproduced?'], rows: [
          ['Tramore largest, 11,277', 'Yes, under rule three'],
          ['Youngest town of 500 or more: Ballinroad, average age 33.6', 'Yes'],
          ['Oldest town of 500 or more: Cappoquin, average age 43.1', 'Yes'],
          ['Town labels that name two counties, anywhere in the State', '18 of them']
        ] },
        { kind: 'callout', h3: 'Reproduce the claim, then write down the rule', p: 'A claim that checks out is not the end of verification. "Largest town" hides at least two decisions, whether a city counts as a town and what to do with a town that straddles a county boundary, and the answer changes with each. The useful output of checking is the rule under which the claim holds, written down so the next reader does not have to rediscover it. Here that is: the largest town lying wholly in County Waterford, with Waterford city and its suburbs treated separately.' },
        { kind: 'p', text: 'The learner loads the town list and writes three small filter functions, one for each rule, then a function that returns the largest town under a given filter. Running all three on the Waterford rows reproduces the city, then Clonmel, then Tramore. The same code checks the youngest and oldest claims in the statement and, with one more line, lists every town whose label names two counties. The finished program prints each claim alongside the rule that makes it true, which is the kind of output a careful fact-checker actually needs.' }
      ]
    },
    {
      id: 'wording', tint: 'tint', eyebrow: 'Why the wording matters',
      h2: 'Cities, borders and the word "town"',
      intro: 'None of this makes the CSO statement wrong. It shows how much an ordinary word can carry.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Is a city a town?', p: 'In the town list, cities appear as rows with their suburbs. In everyday speech many people would not call Waterford a town. A claim about the largest town has to pick one of those meanings.' },
          { h3: 'Towns across borders', p: 'Eighteen labels in the list name two counties, from Carlow to Roosky. A filter that looks for "Co Waterford" exactly drops Clonmel; one that looks for the word Waterford keeps it. Both are reasonable, and they give different answers.' },
          { h3: 'Writing it checkably', p: '"The largest town wholly in County Waterford, leaving aside Waterford city" is longer than the original, but anyone can check it without guessing. Precision in a sentence is what makes verification possible.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'It does not say the CSO statement is wrong: under its natural reading it is right to the last person. It points out only that the reading is unstated. The town-list population of 11,277 is the census-night count; the resident tables used below give 11,176.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in the census',
      h2: 'Tramore in census figures',
      intro: 'Census 2022 small area counts for the town of Tramore, Co Waterford, covering its usual residents and their households.',
      body: [
        { kind: 'table', caption: 'Tramore: a few census counts', head: ['Counted for Tramore', 'Figure'], rows: [
          ['Usual residents', '11,176'],
          ['Households', '4,176'],
          ['Households with broadband', '3,512'],
          ['Working residents in the travel table', '4,919'],
          ['Journeys to school, college or childcare', '3,061'],
          ['Children under fifteen in childcare', '780'],
          ['Journeys of 15 to 30 minutes', '2,695']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Work journeys', p: 'Of 4,919 working residents, 3,094 drive. Next come 525 working mainly at or from home, 292 on foot, 269 by van, 206 as a car passenger, 160 by bus, 39 by bicycle and 14 by train.' },
          { h3: 'School journeys', p: 'Of 3,061 journeys to school, college or childcare, 1,598 are made as a car passenger and 734 on foot; 249 go by bus, 126 learners drive and 124 cycle.' },
          { h3: 'Home-working', p: 'On the home-working question, 1,442 Tramore workers said they work from home at least some of the time, 2,988 said they never do, and 489 gave no answer.' }
        ] },
        { kind: 'spec', title: 'Sources we tried', p: 'The claim is quoted from the CSO\'s own statement. Tramore Racecourse\'s website did not respond and the council\'s Tramore library page returned an error on 19 September 2026, so neither is quoted.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Lessons for Tramore learners',
      intro: 'Expect two lessons in a normal week, each one taught live.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Younger learners', p: 'The census-night age table counts 1,155 children aged six to twelve in Tramore. They start with blocks and games, sorting and comparing things by rules they choose.' },
          { h3: 'Teenagers', p: 'For Tramore\'s 1,095 residents aged thirteen to eighteen, Python, their own websites, AI projects and data work with checkable claims are all within reach.' },
          { h3: 'Adults', p: 'Adults come with every level of experience, including none, and the course is set from the first lesson.' }
        ] },
        { kind: 'p', text: 'Census counts are given exactly as the Central Statistics Office released them, and the CSO\'s statement is quoted word for word. The three filters and the checks of the statement were run on the published town list on 19 September 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From "the biggest" to "the biggest under which rule"',
    intro: 'Ages here are approximate; lesson one decides where each learner starts.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Sorting games', p: 'Block-coded games that pick the biggest or fastest, and change the winner by changing the rules.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Filters', p: 'Python that filters a real list in different ways and compares the answers.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Checking claims', p: 'Programs that test statements against data and print the rule each one depends on.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Fact-checking at work', p: 'Verifying figures in reports and press releases, and writing claims others can check.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant to fact-check the sentence',
    intro: 'It will probably confirm it. Whether it notices the hidden rule is the real test.',
    p1: 'Ask an AI assistant whether Tramore is the largest town in County Waterford and it is likely to agree, because the claim is published and widely repeated. That agreement is correct under one reading and wrong under two others, and a confirmation that does not say which reading it used has not really checked anything.',
    p2: 'Someone who has worked through this project asks the assistant for the rule: does a city count, and what happens to towns across county lines? With the rule on the table, a yes or a no finally means something.',
    closer: 'Assistants repeat what they have read. Checking what a sentence actually claims remains a human skill.',
    blogAnchor: 'why learning to code keeps paying off'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How Tramore lessons are run',
    intro: 'The practicalities.',
    cells: [
      { h3: 'Live, start to finish', p: 'The teacher runs each lesson in real time and works with whatever the learner is building.' },
      { h3: 'Who is in the group', p: 'Between five and ten learners, all at the same point in the course, joining from Waterford, other parts of Ireland and further away.' },
      { h3: 'Rhythm', p: 'Lessons usually land on two fixed days each week, around eight a month, with the days chosen together before the course begins.' },
      { h3: 'School calendar', p: 'Holidays, mid-terms and exam weeks are planned in from the beginning.' },
      { h3: 'What is needed', p: 'A laptop or desktop rather than a phone, something to hear the teacher through, a microphone, and a connection good enough for video.' },
      { h3: 'Private lessons', p: 'Private lessons fit learners with an unusual pace or an unusual timetable.' }
    ],
    spec: { title: 'No premises by the strand', p: 'Tramore learners take every lesson over video. We have no classroom in Tramore or anywhere in Ireland, and the lesson is the same from any home with a connection.' }
  },

  fees: {
    h2: 'Fees for Tramore',
    intro: 'All of the prices.',
    first: 'A full first lesson with a level assessment, at no cost.',
    group: 'A month in a group of five to ten at one stage, about eight live lessons.',
    private: 'A month of one-to-one teaching on the same weekly pattern.',
    closer: 'Outside India every family pays the same monthly price, in US dollars. The first lesson costs nothing and commits you to nothing, payments start with the course itself, and holidays, missed lessons and a move between group and private lessons are covered on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from families we teach, word for word',

  book: {
    h2: 'Book a free first lesson in Tramore',
    intro: 'Tell us a little about the learner, their age and what they enjoy, and we will plan their first hour. It may end with a game, a small working program, or a claim checked from the data up.',
    success: 'Thank you. We will be in touch about the lesson soon.'
  },

  faq: {
    h2: 'Tramore coding class questions',
    intro: 'What Tramore families usually ask first.',
    items: [
      { q: 'How many people live in Tramore?', a: 'The Census 2022 small area tables count 11,176 usual residents in Tramore, in 4,176 households, 3,512 of them with broadband. The CSO\'s county statement gives 11,277 for the town, the census-night count from the town list.' },
      { q: 'What is the data project on this page?', a: 'Checking the CSO\'s statement that Tramore was County Waterford\'s largest town, at 11,277. The number reproduces exactly, but the claim is true only for towns lying wholly in the county with Waterford city set aside; count the city, or Clonmel across the Tipperary border, and the answer changes.' },
      { q: 'So is Tramore the largest town in County Waterford?', a: 'Yes, if "town" means a town wholly within the county and Waterford city is treated separately, which is the natural reading of the CSO statement. The point of the project is that the reading has to be stated for the claim to be checkable.' },
      { q: 'How do Tramore residents get to work?', a: 'Of 4,919 working residents, 3,094 drive, 525 work mainly at or from home, 292 walk, 269 use a van, 206 travel as a car passenger and 160 take the bus.' },
      { q: 'When are lessons?', a: 'Mostly after school and in the evenings, plus weekends. Tramore lessons are set on Irish time; the difference to India, where our teachers are, is four and a half hours during Irish summer time and five and a half in winter, and we offer only slots that suit both.' },
      { q: 'Can adults learn too?', a: 'They can, at any age to sixty-seven, with or without experience. One free lesson is usually enough for an adult to see whether a same-level group or a private teacher suits them better.' },
      { q: 'Will a Tramore learner be with other local learners?', a: 'Groups are formed by level, so a learner here may share lessons with others in Waterford, elsewhere in Ireland or abroad.' },
      { q: 'Is there a Modern Age Coders classroom in Tramore?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Tramore cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Tramore',
    html: 'The city next door has its own page, <a class="cg-inline-link" href="/best-coding-class-in-waterford">Waterford</a>, and <a class="cg-inline-link" href="/best-coding-class-in-clonmel">Clonmel</a> is the cross-county town the claim leaves out. Both sit within <a class="cg-inline-link" href="/coding-and-ai-classes-in-munster">Munster</a>. Online coding schools are set side by side on <a class="cg-inline-link" href="/best-online-coding-classes-ireland">one comparison page</a>, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> leads everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Tramore, Waterford and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-waterford', label: 'Waterford' },
    { href: '/best-coding-class-in-clonmel', label: 'Clonmel' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-trm .cg-hero-grid { align-items: start; gap: clamp(1.14rem, 3.24vw, 2.63rem); }
.cg-root.cg-trm .cg-hero h1 { font-weight: 700; letter-spacing: -0.0172em; line-height: 1.07; }
.cg-root.cg-trm .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.19rem; }
.cg-root.cg-trm .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-trm .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0128em; }
.cg-root.cg-trm .cg-grid-3 { gap: clamp(1.02rem, 2.78vw, 2.18rem); }
.cg-root.cg-trm .cg-table caption { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-trm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-trm .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-trm .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.09rem; }
.cg-root.cg-trm .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Tramore, Co Waterford, CSO Census 2022, read 19 September 2026. CSO press statement, Census 2022 Results Profile 1, Population Distribution and Movements, Waterford: "Looking at Waterford, we can see that Tramore was the largest town, with a population of 11,277 in April 2022."; "Of those towns with a population of at least 500 people in April 2022, Ballinroad was the youngest with an average age of 33.6 years. The oldest was Cappoquin, with an average age of 43.1 years." CSO F1015 (Population, Average Age, by town): Waterford city and suburbs, Counties Waterford & Kilkenny 60,079 (38.7); Clonmel, Counties Tipperary & Waterford 18,369 (40.8); Tramore, Co Waterford 11,277 (39.6); Dungarvan, Co Waterford 10,081 (40.5); Portlaw, Co Waterford 1,881; Ballinroad 33.6; Cappoquin 43.1. Town labels naming two counties: 18. SAP2022T2T1TOWN22: usual residents 11,176. SAP2022T15T2TOWN22: households 4,176, broadband 3,512, not stated 262. SAP2022T11T1TOWN22 to work total 4,919: car driver 3,094, work mainly at or from home 525, on foot 292, van 269, car passenger 206, bus 160, bicycle 39, train 14, not stated 300; to school, college or childcare total 3,061: car passenger 1,598, on foot 734, bus 249, car driver 126, bicycle 124, not stated 185. SAP2022T11T3TOWN22: under 15 minutes 2,623, 15 to under 30 minutes 2,695. SAP2022T11T4TOWN22: 1,442 work from home at least some of the time, 2,988 never, 489 not stated. SAP2022T11T5TOWN22: 780 children under 15 in childcare. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 1,155, ages 13 to 18 to 1,095. Tramore Racecourse website: no response on 19 September 2026. Waterford City and County Council Tramore library branch page: HTTP 404 on 19 September 2026.',
    localProject: 'Verify a named claim and write down the rule that makes it true. The CSO\'s Waterford statement says Tramore was the largest town, with a population of 11,277 in April 2022. The learner filters the CSO town list three ways. Counting every row that mentions Waterford, Waterford city and suburbs comes first at 60,079; setting cities aside, Clonmel, Counties Tipperary & Waterford, comes first at 18,369; keeping only towns labelled Co Waterford alone, with the city apart, Tramore comes first at exactly 11,277. The statement is true under the third reading, which it never states. The same program reproduces the statement\'s youngest (Ballinroad, 33.6) and oldest (Cappoquin, 43.1) towns of 500 or more and lists the 18 town labels that name two counties. Output: each claim printed with the rule under which it holds. Distinct from Tullamore, which rebuilt a published average from its table; here the figure matches and the definition is what has to be found. New family for the cluster: verifying claims by making their definitions explicit.',
    requiredMentions: [
      '11,277',
      '11,176',
      '4,176',
      '3,512',
      '4,919',
      '3,094',
      '525',
      '1,442',
      '1,598',
      '780',
      '2,695',
      '33.6'
    ],
    sources: [
      { claim: 'CSO press statement, Census 2022 Results Profile 1 Waterford: "Looking at Waterford, we can see that Tramore was the largest town, with a population of 11,277 in April 2022."; Ballinroad youngest at 33.6 and Cappoquin oldest at 43.1 among towns of at least 500.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementswaterford/' },
      { claim: 'CSO table F1015, Population and Average Age by town: Waterford city and suburbs, Counties Waterford & Kilkenny 60,079; Clonmel, Counties Tipperary & Waterford 18,369; Tramore, Co Waterford 11,277; Dungarvan, Co Waterford 10,081; Portlaw 1,881; 18 labels naming two counties.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1015/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T3TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T1T1TOWN22, Tramore, Co Waterford: usual residents 11,176; households 4,176, broadband 3,512; to work 4,919 with car driver 3,094, mainly at or from home 525, on foot 292, van 269, car passenger 206, bus 160, bicycle 39, train 14; to school, college or childcare 3,061 with car passenger 1,598, on foot 734, bus 249, car driver 126, bicycle 124; 2,695 journeys of 15 to under 30 minutes; 1,442 work from home at least some of the time, 2,988 never, 489 not stated; 780 children under 15 in childcare; 1,155 aged 6 to 12 and 1,095 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' }
    ],
    rejectedClaims: [
      'Any suggestion that the CSO statement is wrong: it is right under its natural reading.',
      'The Waterford city commuter-town figure and the city\'s population as mentions: the Waterford page owns them.',
      'Clonmel\'s population as a mention: the County Tipperary page owns it.',
      'Tramore Racecourse and the Tramore library branch: the racecourse site did not respond and the library page returned 404 on 19 September 2026.',
      'Any explanation of why the CSO labels towns across county lines as it does.'
    ]
  }
};
