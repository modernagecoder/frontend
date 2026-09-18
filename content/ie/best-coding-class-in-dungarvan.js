'use strict';
// Dungarvan (cg- town page, Ireland cluster, Phase 7, last town). Facts from the CSO
// Census 2022 town tables for "Dungarvan, Co Waterford", the CSO press statement
// Census 2022 Profile 8 (The Irish Language and Education) for Waterford, Heritage
// Ireland's Dungarvan Castle page and Waterford City and County Council's contact page,
// read 19 September 2026. Spine: decoding a tick-all-that-apply question. The census
// Irish-frequency question had five boxes and allowed box (i) "daily, within the
// education system" with one other; SAP2022T3T2TOWN22 publishes eleven exclusive
// combination labels. Decoded Dungarvan boxes: (i) 1,150, (ii) 182, (iii) 300,
// (iv) 1,308, (v) 949, not stated 100; sum 3,989 against 3,925 speakers; the gap of
// 64 equals the double-tick labels (46 + 11 + 6 + 1). The label "daily only outside"
// (136) misses 46 of box (ii), 25.3%; all 867 towns combined miss 12,480 of 42,402
// (29.4%); median of the 94 towns of 5,000+ 32.5%; highest Clane 32 of 60 (53.3%).
// All 868 rows: the ten labels sum exactly to "All Irish Speakers". Scratchpad
// dgv/irish.js. Connacht owns the "able to speak vs daily use" definition lesson;
// this page owns multi-response decoding. The Waterford page owns the Gaeltacht
// growth figures and the county's 48,106 speakers; Tramore owns F1015 town sizes.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'DUNGARVAN', blurb: 'A census question that allowed two ticks, published as eleven categories. A page on decoding them back into the boxes people actually ticked.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-dungarvan',
  code: 'dgv',
  accent: '#9B3227',
  accentRationale: 'Dungarvan: a castle-brick red from the widened solver search, apart from the Waterford olive, the Tramore blue and the Kildare rust',
  pageType: 'city',
  place: {
    name: 'Dungarvan',
    eyebrow: 'Dungarvan, County Waterford',
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
  routeLabel: 'Dungarvan, County Waterford, Ireland',
  title: 'Best Coding Class in Dungarvan | Modern Age Coders',
  description: 'Coding, Python, AI and data lessons for Dungarvan learners aged 6 to 67, live online with a teacher in same-level groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Dungarvan, with a data project that decodes a tick-all-that-apply census question back into its boxes.',
  twitterDescription: 'Live online coding, Python and AI for Dungarvan, Co Waterford, ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '19 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Dungarvan',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Dungarvan, County Waterford, taught live in English to same-level groups or one to one.'
  },

  h1: 'Coding classes in Dungarvan',
  capsuleQ: 'What is the best coding class in Dungarvan?',
  capsule: 'Dungarvan has 9,944 usual residents across 3,907 households, 3,112 of them with broadband, enough for a video lesson. Every lesson is taught live by a teacher, to a small group working at one level or to a single learner, typically on two set days each week, and anyone from six to sixty-seven may join. The first lesson costs nothing; afterwards a group place is USD 100 per month and one-to-one teaching USD 150 per month.',
  lead: 'On the 2022 census form, anyone who could speak Irish was asked how often they spoke it, with five boxes to choose from, and a student could tick "daily, within the education system" as well as one of the other four. The statistics office publishes the answers as eleven separate categories, one for each combination that could be ticked. Read one of those categories on its own and it can pass for the whole answer: in Dungarvan the category "daily only outside the education system" holds 136 people, yet 182 ticked the daily-outside box. This page teaches the step that makes such tables usable, decoding a list of combinations back into one yes-or-no column per box, and then proving the decoding right with a single subtraction.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Dungarvan.',

  picks: {
    eyebrow: 'Where to start in Dungarvan',
    h2: 'Four first courses for Dungarvan',
    intro: 'Each age band has its own opening course, and the teacher confirms or adjusts it during the free first lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and on-off switches: a sprite that reacts when two buttons are pressed together.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python with true-and-false values, lists and counting, the tools behind the decoding on this page.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real survey tables in Python: splitting labels, one column per answer, and checks that prove the result.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who handle form or survey exports with multi-select questions and need totals that add up.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Turn eleven census categories back into the five boxes people ticked',
      intro: 'The Census 2022 small area table for Irish speakers in Dungarvan, first as published and then decoded. The middle column is the category that names one box alone; the last column counts everyone who ticked that box.',
      body: [
        { kind: 'table', caption: 'Dungarvan Irish speakers aged three and over, by box ticked', head: ['Box on the form', 'Only-label count', 'Decoded total'], rows: [
          ['Daily, within education', '1,086', '1,150'],
          ['Daily, outside education', '136', '182'],
          ['Weekly', '289', '300'],
          ['Less often', '1,302', '1,308'],
          ['Never', '948', '949'],
          ['Not stated', '100', '100']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The check that proves it', p: 'The ten published categories add up exactly to Dungarvan\'s 3,925 Irish speakers. The decoded box totals add up to 3,989. The difference, 64, is the number of people in the four categories that name two boxes, which is exactly what a correct decoding must produce.' },
          { h3: 'What an only-label misses', p: 'Reading "daily only outside the education system" as the daily-outside figure leaves out the 46 people who also ticked the daily-within box, a quarter of the 182. Across all 867 towns combined, the same shortcut misses 12,480 of 42,402, or 29.4 percent.' },
          { h3: 'A never that is not quite never', p: 'One Dungarvan resident ticked both "daily, within the education system" and "never"; across all towns combined, 1,285 people did. The category "Never speaks Irish" leaves them out and the Never box takes them in. Both readings are accurate, and they answer different questions.' }
        ] },
        { kind: 'callout', h3: 'Tick-all-that-apply answers are not slices of one pie', p: 'When people may tick more than one box, the boxes overlap, so their totals add up to more than the number of people and cannot be drawn as shares of a single whole. Publishers handle this by listing every combination as its own category, which keeps the categories separate and the total right, at the price of spreading each box across several labels. The statistics office says as much in its notes: the categories for daily outside, weekly, less often and never "may include people who also speak Irish within the education system". The analyst\'s job is to read that sentence, decode the combinations, and say plainly which of the two numbers a claim is using.' },
        { kind: 'p', text: 'The learner\'s code is short. A dictionary maps each of the eleven labels to the boxes it names: "Daily within and weekly outside the education system" to boxes one and three, "Weekly only outside the education system" to box three alone, and so on. A loop then runs through all 868 rows of the town table, the 867 towns plus the row that combines them, and applies two tests to each. First, the ten categories must sum to the published total of Irish speakers. Second, the decoded box totals, minus the speakers, must equal the people in two-box categories. Every row passes both. For all towns combined the boxes add to 1,251,491 against 1,231,469 speakers, a gap of 20,022 that matches the double ticks exactly.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The press release convention', p: 'The statistics office\'s Waterford release for this census reports 1,196 people in the county speaking Irish daily "outside the education system only". That is the only-label reading, clearly marked. Quoting it later without the word "only" changes its meaning.' },
          { h3: 'Dungarvan against other towns', p: 'Dungarvan\'s only-label misses 25.3 percent of its daily-outside box, below the 32.5 percent median of the 94 towns of 5,000 or more. The largest miss among them is in Clane, 32 of 60, where a small count makes the percentage jump.' },
          { h3: 'Speaking it daily, outside school', p: 'Of Dungarvan\'s 3,925 speakers, 182 ticked the daily-outside box, 4.6 percent, the fifth highest share among the 94 towns of 5,000 or more. Of the 1,150 who speak it daily in education, 46 also speak it daily outside.' }
        ] }
      ]
    },
    {
      id: 'uses', tint: 'tint', eyebrow: 'Where this turns up',
      h2: 'Multi-select answers in forms, surveys and apps',
      intro: 'The same structure appears whenever a question lets someone choose more than one option, and so does the same mistake.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Survey exports', p: 'Online survey tools export multi-select questions either as one column per option or as a single cell of choices joined with commas. Splitting that cell into columns is the same decoding done on this page.' },
          { h3: 'Tags and categories', p: 'A post filed under three tags is counted in three tag totals, so tag counts add up to more than the number of posts. A chart that shows them as shares of a whole is wrong from the start.' },
          { h3: 'Writing it up', p: 'Say whether a figure means "ticked this box" or "ticked only this box", and give the number of people as well as the number of ticks. Anyone checking the figure can then rebuild it.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'The census records what people said about their own Irish, not a test of it, and how often someone speaks a language is their own estimate. Every figure here is for Dungarvan town or for all towns combined; the statistics office counts the Waterford Gaeltacht separately, and its figures are not used. Nothing on this page rates anyone\'s Irish.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'The town in figures',
      h2: 'Counting Dungarvan in 2022',
      intro: 'Every figure below is a published Census 2022 small area count for the town of Dungarvan, Co Waterford, for people at their usual address.',
      body: [
        { kind: 'table', caption: 'Dungarvan census figures, 2022', head: ['Figure', 'Dungarvan'], rows: [
          ['Usual residents', '9,944'],
          ['Households', '3,907'],
          ['Households with broadband', '3,112'],
          ['Households with no internet', '418'],
          ['Working residents, travel table', '4,072'],
          ['Journeys to school, college or childcare', '2,334'],
          ['Children under fifteen in childcare', '594']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Getting to work', p: 'Of 4,072 working residents, 2,281 drive themselves, 647 walk, 327 work mainly at or from home, 203 travel by van, 190 as a car passenger, 152 cycle and 34 take the bus.' },
          { h3: 'Getting to school', p: 'Of 2,334 journeys to school, college or childcare, 1,148 are made as a car passenger and 595 on foot. Another 175 are by bicycle, 7.5 percent against 3.7 percent across all 867 towns combined.' },
          { h3: 'Long days', p: 'The census counts 390 Dungarvan residents whose journey to work, school or college takes an hour or more, and 359 who leave home before 06:30.' }
        ] },
        { kind: 'p', text: 'The home-working question drew 858 answers of yes, for at least some of the time, from Dungarvan workers, 2,815 answers of never and 399 blanks. By industry, the 4,124 in work divide most heavily into professional services at 1,006, commerce and trade at 984, and manufacturing at 708.' },
        { kind: 'spec', title: 'Two named places', p: 'Heritage Ireland dates Dungarvan Castle to about 1209, built to guard the entrance to Dungarvan Harbour, gives its eircode as X35 DV58, and calls its polygonal shell keep "a rare building type in Ireland". Waterford City and County Council lists its Civic Offices at Davitt\'s Quay, Dungarvan, X35 Y326, open Monday to Friday from 9:30am to 4pm. Neither has any connection with us.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'What lessons look like from Dungarvan',
      intro: 'A week usually holds two sessions, and in each one the teacher is present and teaching the whole time.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'The census-night age table counts 918 Dungarvan children from six to twelve. They start with block code and on-off switches, building games that respond to more than one button at once.' },
          { h3: 'Teenagers', p: 'Its 762 residents aged thirteen to eighteen can take on Python, websites, AI projects and data work such as decoding this census table.' },
          { h3: 'Adults', p: 'Adults are welcome from a standing start, and lesson one decides which course fits.' }
        ] },
        { kind: 'p', text: 'The Central Statistics Office published every census count used here; the decoding into boxes is our own arithmetic, done on 19 September 2026. Heritage Ireland and the council are quoted from their own pages.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two switches to a decoded survey',
    intro: 'Each age range is approximate, and the teacher settles the real starting rung in the first lesson.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'On and off', p: 'Block code where sprites react to switches, including two pressed together.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'True or false', p: 'Python booleans and counting, turning yes-or-no answers into totals.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Survey data', p: 'Splitting labels, one column per option, and tests that prove a table was decoded correctly.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Forms at work', p: 'Multi-select questions in real survey exports, reported with the right denominators.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how many speak Irish daily outside school',
    intro: 'It will usually find the row whose label matches and stop there.',
    p1: 'Given the Dungarvan table, an AI assistant asked how many residents speak Irish daily outside the education system will often quote the row whose wording matches the question, 136, and move on. The row is real, and the answer is still short by 46, because the people who also ticked the daily-within box sit in a different row.',
    p2: 'After writing the decoder, the learner asks the assistant three things: whether the question allowed more than one answer, which rows name the box being counted, and whether the box totals add up to more than the number of people. An assistant that cannot answer those has not really read the table.',
    closer: 'Finding a matching row is easy for any tool. Knowing that the row is only part of the answer is the skill.',
    blogAnchor: 'why learning to code still rewards the effort'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Dungarvan',
    intro: 'The arrangements.',
    cells: [
      { h3: 'Teacher present throughout', p: 'The teacher stays on the call for the whole lesson, looking at each learner\'s screen and code as they work.' },
      { h3: 'One level per group', p: 'Five to ten learners who are at the same point, whether they join from Dungarvan, another Irish town or abroad.' },
      { h3: 'Two fixed days', p: 'Roughly eight lessons a month on two days agreed at enrolment, weekdays or weekends.' },
      { h3: 'Built around the school year', p: 'Term breaks, holidays and exam periods are part of the plan rather than interruptions to it.' },
      { h3: 'Kit needed', p: 'A computer with a keyboard, sound in and out, and an internet connection strong enough for video.' },
      { h3: 'One-to-one option', p: 'Learners who are far ahead, want more time on each step, or need an hour no group has, can be taught alone.' }
    ],
    spec: { title: 'No classroom', p: 'Lessons reach Dungarvan over video only. We have no office or classroom in the town, the county or the country, and a lesson runs the same way from any home with a connection.' }
  },

  fees: {
    h2: 'The cost of lessons in Dungarvan',
    intro: 'Everything, in three lines.',
    first: 'An opening lesson with a level check, free.',
    group: 'A month in a group of five to ten at the same stage: about eight live lessons.',
    private: 'A month of one-to-one teaching on the same schedule.',
    closer: 'Any family living outside India pays one flat fee in US dollars. The opening lesson commits nobody to anything, payment starts only when the course does, and the pricing page explains what happens over holidays, after a missed lesson, or on a move from group to private lessons.'
  },

  reviewsH2: 'What six families wrote on Google, left exactly as posted',

  book: {
    h2: 'Book a free first lesson in Dungarvan',
    intro: 'Say how old the learner is and what they are into, and the first hour will be built from that. It may end with a small game, a first program, or a census table decoded box by box.',
    success: 'Thanks. We will be in touch to set up the lesson.'
  },

  faq: {
    h2: 'Questions from Dungarvan families',
    intro: 'The ones that come up most.',
    items: [
      { q: 'What is the population of Dungarvan?', a: 'The Census 2022 small area tables count 9,944 usual residents in Dungarvan, Co Waterford, in 3,907 households, and 3,112 of those households have broadband.' },
      { q: 'What is the data project on this page?', a: 'Decoding a tick-all-that-apply census question. The table of how often people speak Irish lists eleven combinations; learners turn them back into five boxes, check the result with one subtraction, and show that a label ending in "only" misses everyone who ticked two boxes.' },
      { q: 'How many people in Dungarvan speak Irish?', a: 'In the census, 3,925 of the town\'s 9,739 residents aged three and over said they could speak Irish, 5,274 said they could not and 540 did not answer. Of the speakers, 1,150 ticked the box for speaking it daily within the education system and 182 the box for daily outside it.' },
      { q: 'How do people in Dungarvan get to work?', a: 'Of 4,072 working residents, 2,281 drive, 647 walk, 327 work mainly at or from home, 203 go by van, 190 as a car passenger and 152 by bicycle.' },
      { q: 'When are lessons?', a: 'Late afternoons and evenings on weekdays, and daytime at weekends. Every time is agreed in Irish time. Our teachers are in India, which runs four and a half hours ahead of Ireland in summer and five and a half in winter, and only hours that suit both sides are offered.' },
      { q: 'Is it too late to start as an adult?', a: 'No. Learners up to sixty-seven join, complete beginners included, and each adult decides after the first lesson whether a same-level group or one-to-one teaching suits them.' },
      { q: 'Are the groups made up of Dungarvan learners?', a: 'Rarely all of them. Groups are built on level alone, so a Dungarvan learner may share lessons with people from other counties or other countries.' },
      { q: 'Does Modern Age Coders have a classroom in Dungarvan?', a: 'No. Lessons are live on video and we have no premises anywhere in Ireland. A computer, working sound and a reliable connection are all that is needed, and the phone number on this page is an Indian one.', boiler: true },
      { q: 'How much do coding classes in Dungarvan cost?', a: 'Nothing for the first lesson. After that, USD 100 a month for a group place, which means around eight live lessons, two each week, alongside four to nine other learners; or USD 150 a month for one-to-one lessons on the same timetable. The terms are agreed before anything is paid.', boiler: true },
      { q: 'How many learners share a lesson?', a: 'From five to ten, sorted by level, pace and goals rather than by age or where they live. When no suitable group meets at a time that works, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Dungarvan and west Waterford',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-waterford">Waterford</a> page covers the city and county, <a class="cg-inline-link" href="/best-coding-class-in-tramore">Tramore</a> is along the coast to the east, and <a class="cg-inline-link" href="/best-coding-class-in-clonmel">Clonmel</a> lies to the north, all within <a class="cg-inline-link" href="/coding-and-ai-classes-in-munster">Munster</a>. Learners who enjoyed the decoding project may like the <a class="cg-inline-link" href="/data-science-course-ireland">data science course</a> page, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> is where every other page begins.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dungarvan, County Waterford and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-waterford', label: 'Waterford' },
    { href: '/best-coding-class-in-tramore', label: 'Tramore' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-dgv .cg-hero-grid { align-items: center; gap: clamp(1.02rem, 3.41vw, 2.55rem); }
.cg-root.cg-dgv .cg-hero h1 { font-weight: 700; letter-spacing: -0.0169em; line-height: 1.09; }
.cg-root.cg-dgv .cg-capsule { border-left: 5px double var(--cg-accent); padding-left: 1.21rem; }
.cg-root.cg-dgv .cg-eyebrow { letter-spacing: 0.118em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dgv .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.0141em; }
.cg-root.cg-dgv .cg-grid-3 { gap: clamp(1.01rem, 2.64vw, 2.09rem); }
.cg-root.cg-dgv .cg-table caption { letter-spacing: 0.041em; font-weight: 600; }
.cg-root.cg-dgv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dgv .cg-table th { letter-spacing: 0.012em; }
.cg-root.cg-dgv .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 1.04rem; }
.cg-root.cg-dgv .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Dungarvan, Co Waterford, CSO Census 2022 Small Area Population town tables, read 19 September 2026. SAP2022T2T1TOWN22: usual residents 9,944. SAP2022T15T2TOWN22: households 3,907, broadband 3,112, other 114, no internet 418, not stated 263. SAP2022T11T1TOWN22 to work total 4,072: car driver 2,281, on foot 647, work mainly at or from home 327, van 203, car passenger 190, bicycle 152, bus 34, train 3, not stated 216; to school, college or childcare total 2,334: car passenger 1,148, on foot 595, bicycle 175 (all 867 towns combined 34,354 of 921,076, 3.7 percent), bus 129, car driver 98, not stated 176. SAP2022T11T3TOWN22: one hour to under one and a half 278, one and a half hours and over 112. SAP2022T11T2TOWN22: 359 leave before 06:30. SAP2022T11T4TOWN22: 858 work from home at least some of the time, 2,815 never, 399 not stated. SAP2022T11T5TOWN22: 594 children under 15 in childcare. SAP2022T14T1TOWN22 persons at work 4,124: professional services 1,006, commerce and trade 984, manufacturing 708. SAP2022T1T1TOWN22 (census-night age table): ages 6 to 12 sum to 918, ages 13 to 18 to 762. SAP2022T3T1TOWN22 aged 3 and over 9,739: able to speak Irish 3,925, no 5,274, not stated 540. SAP2022T3T2TOWN22 Irish speakers by frequency, both sexes: daily only within the education system 1,086; daily within and daily outside 46; daily within and weekly outside 11; daily within and less often outside 6; daily within and never outside 1; daily only outside 136; weekly only outside 289; less often only outside 1,302; never speaks Irish 948; not stated 100; all Irish speakers 3,925. Decoded boxes: (i) daily within 1,150, (ii) daily outside 182, (iii) weekly 300, (iv) less often 1,308, (v) never 949, not stated 100; sum 3,989; minus 3,925 speakers = 64 = two-box categories 46 + 11 + 6 + 1. All 867 towns combined: box (ii) 42,402, daily only outside 29,922, missed 12,480 (29.4 percent); daily within and never outside 1,285; boxes 1,251,491 against 1,231,469 speakers, gap 20,022 = two-box categories. All 868 rows: ten categories sum exactly to All Irish Speakers and the box identity holds. The 94 towns of 5,000 or more usual residents: only-label miss on box (ii) median 32.5 percent, Dungarvan 25.3, highest Clane 32 of 60 (53.3); box (ii) share of speakers Dungarvan 4.64 percent, 5th of 94, median 2.82. CSO press statement, Census 2022 Profile 8, Waterford (19 December 2023): "those people who stated that they could speak Irish were asked how frequently they spoke it, with five answer options provided", listed as "(i) Daily, within the education system; (ii) Daily, outside the education system; (iii) Weekly; (iv) Less often; (v) Never", and "Categories (ii) to (v) may include people who also speak Irish within the education system"; "There were 1,196 people speaking Irish daily (outside the education system only)" in Waterford. Heritage Ireland, Dungarvan Castle: "Dungarvan X35 DV58", "It was built c.1209 to safeguard the entrance to Dungarvan Harbour"; the polygonal shell keep is "a rare building type in Ireland" and "is the earliest structure on the site" Waterford City and County Council contact page: "Civic Offices, Davitt\'s Quay, Dungarvan X35 Y326", "Monday to Friday: 9:30 AM to 4 PM".',
    localProject: 'Decoding a tick-all-that-apply question. The census Irish-frequency question had five boxes and let a speaker tick "daily, within the education system" together with one other; the town table publishes eleven exclusive combination labels. The learner maps each label to its boxes, sums per box (Dungarvan: daily within 1,150, daily outside 182, weekly 300, less often 1,308, never 949, not stated 100), and proves the mapping with two tests on all 868 rows: the ten labels sum to the published speaker total (3,925), and box totals minus speakers equal the two-box categories (3,989 minus 3,925 = 64). The "only" label for daily outside (136) misses 46 of 182, 25.3 percent; all towns combined miss 12,480 of 42,402. Lessons: multi-response boxes overlap, so box totals exceed people and cannot be pie slices; always say whether a figure is "ticked this box" or "ticked only this box". New family for the cluster: multi-response decoding (Connacht owns the definition of an Irish speaker).',
    requiredMentions: [
      '9,944',
      '3,907',
      '3,112',
      '4,072',
      '3,925',
      '1,150',
      '3,989',
      '1,308',
      '2,334',
      '918',
      'X35 DV58',
      'X35 Y326'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T3T2TOWN22, Irish speakers aged 3 and over by frequency of speaking Irish, Dungarvan, Co Waterford, both sexes: daily only within the education system 1,086; daily within and daily outside 46; daily within and weekly outside 11; daily within and less often outside 6; daily within and never outside 1; daily only outside 136; weekly only outside 289; less often only outside 1,302; never 948; not stated 100; all Irish speakers 3,925. All towns combined: daily only outside 29,922, daily within and daily outside 12,480, daily within and never outside 1,285, all Irish speakers 1,231,469.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T3T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T3T1TOWN22, Dungarvan, Co Waterford: aged 3 and over 9,739; able to speak Irish 3,925; not able 5,274; not stated 540.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T3T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO press statement, Census 2022 Results Profile 8, The Irish Language and Education, Waterford: speakers "were asked how frequently they spoke it, with five answer options provided", listed as "(i) Daily, within the education system; (ii) Daily, outside the education system; (iii) Weekly; (iv) Less often; (v) Never", and "Categories (ii) to (v) may include people who also speak Irish within the education system"; "There were 1,196 people speaking Irish daily (outside the education system only)".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationwaterford' },
      { claim: 'CSO Census 2022 tables SAP2022T2T1TOWN22, SAP2022T15T2TOWN22, SAP2022T11T1TOWN22, SAP2022T11T2TOWN22, SAP2022T11T3TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22, SAP2022T14T1TOWN22 and SAP2022T1T1TOWN22, Dungarvan, Co Waterford: usual residents 9,944; households 3,907, broadband 3,112, no internet 418; to work 4,072 with car driver 2,281, on foot 647; to school, college or childcare 2,334 with car passenger 1,148, on foot 595, bicycle 175; journeys of an hour or more 390; 359 leave before 06:30; 858 work from home at least some of the time; 594 children under 15 in childcare; persons at work 4,124; 918 aged 6 to 12 and 762 aged 13 to 18 in the census-night age table.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Heritage Ireland, Dungarvan Castle: "Dungarvan X35 DV58"; "It was built c.1209 to safeguard the entrance to Dungarvan Harbour"; the polygonal shell keep is "a rare building type in Ireland" and "is the earliest structure on the site"', url: 'https://heritageireland.ie/places-to-visit/dungarvan-castle/' },
      { claim: 'Waterford City and County Council, contact page: "Civic Offices, Davitt\'s Quay, Dungarvan X35 Y326"; "Monday to Friday: 9:30 AM to 4 PM".', url: 'https://waterfordcouncil.ie/contact-us/' }
    ],
    rejectedClaims: [
      'Any Waterford Gaeltacht figure, including its population growth, and the county total of 48,106 Irish speakers: the Waterford page owns them.',
      'Any statement that Dungarvan is or is not in the Gaeltacht: not needed for the lesson and not verified here.',
      'The contrast between being able to speak Irish and speaking it daily as the lesson: the Connacht page owns the definition of an Irish speaker.',
      'Any judgement of anyone\'s Irish: the census records self-reported ability and frequency.',
      'Town population from F1015 and the "largest town" comparison: the Tramore page owns them.',
      'Birthplace, citizenship and ethnic background counts from SAP2022T2T1TOWN22 and SAP2022T2T2TOWN22: excluded from this page by rule.'
    ]
  }
};
