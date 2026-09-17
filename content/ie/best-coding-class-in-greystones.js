'use strict';
// Greystones (cg- town page, Ireland cluster, Phase 7). Facts from the CSO
// Census 2022 town tables published for "Greystones-Delgany, Co Wicklow", read
// 18 September 2026, the Irish Rail station page for Greystones and Temple
// Carrig School's own site. Spine: birthplace and citizenship are two different
// questions. The same 21,701 usual residents are counted twice in one table:
// 17,313 born in Ireland against 18,813 Irish citizens, and 1,553 born in the
// United Kingdom against 543 United Kingdom citizens. The two blocks cannot be
// matched person by person, so no movement between them is calculated here. New
// to the cluster: conflating two variables that look interchangeable. Wicklow
// owns the town-list population 22,009 and the Glendalough eircode, so the
// usual-resident count is used and neither appears. Naas owns the residual
// column lesson, so the unnamed headings are quoted without that project.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'GREYSTONES', blurb: 'Born in one country, citizen of another: at the end of the DART line, one table counts the same 21,701 people twice.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-greystones',
  code: 'gry',
  accent: '#56506A',
  accentRationale: 'Greystones: a sea-slate violet from the solver, kept clear of the Wicklow county green and the Dublin coastal blues',
  pageType: 'city',
  place: {
    name: 'Greystones',
    eyebrow: 'Greystones and Delgany, County Wicklow',
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
  routeLabel: 'Greystones, County Wicklow, Ireland',
  title: 'Best Coding Class in Greystones | Modern Age Coders',
  description: 'Live online coding, Python and AI classes for Greystones learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Greystones, with a project on the difference between where residents were born and which country they are citizens of.',
  twitterDescription: 'Coding and AI classes for Greystones, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Greystones',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Greystones and Delgany, County Wicklow, taught live in English.'
  },

  h1: 'Coding classes in Greystones',
  capsuleQ: 'What is the best coding class in Greystones?',
  capsule: 'Census 2022 puts 21,701 usual residents in this built-up area, which it publishes under the joined name Greystones-Delgany, spread across 7,634 households, 6,826 of them on broadband. Teaching reaches them at home, twice in most weeks, with a live teacher and either a small ability group of five to ten or a single learner, anywhere from age six to age sixty-seven. There is no charge for the opening lesson. From then on a shared place runs at USD 100 monthly and private tuition at USD 150.',
  lead: 'One census table counts the people of Greystones twice, and the two counts disagree on purpose. Asked where residents were born, it records 17,313 in Ireland and 1,553 in the United Kingdom. Asked which country they are citizens of, the same 21,701 residents produce 18,813 Irish and 543 British. Neither figure corrects the other. Birthplace is a fact about one day in the past; citizenship is a legal status that can change and can be held more than once, and the census asks about them separately because they are separate. Mix them up and a sentence about the town becomes wrong by about fifteen hundred people. This page is about keeping them apart.',
  wa: 'Hello Modern Age Coders, I want to arrange a free coding lesson for a learner in Greystones.',

  picks: {
    eyebrow: 'Course picks for Greystones',
    h2: 'Sensible starting points in Greystones',
    intro: 'Choose by age and by what the learner already enjoys. The free lesson is taught by the course teacher and sets the level.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects where every piece of information the program stores has to be named precisely.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python from the start, with variables that mean one thing each and are named accordingly.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Two census tables, two questions, and code that keeps the difference visible.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults joining data from different systems, where two similar fields are rarely the same field.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Born where, citizen of where',
      intro: 'The same 21,701 usual residents of Greystones and Delgany, counted twice in Census 2022 table T2T1. Headings are the table\'s; shares are ours.',
      body: [
        { kind: 'table', caption: 'Birthplace and citizenship side by side, April 2022', head: ['Place as published', 'Born there', 'Citizens of there'], rows: [
          ['Ireland', '17,313', '18,813'],
          ['United Kingdom', '1,553', '543'],
          ['Poland', '291', '279'],
          ['India', '178', '99'],
          ['Other EU countries', '892', '820'],
          ['Rest of World', '1,474', '707'],
          ['Not stated', 'No value returned', '440']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two answers to "how Irish is the town"', p: '17,313 of 21,701 residents were born in Ireland, which is 79.8%. 18,813 are Irish citizens, which is 86.7%. Both are correct, they answer different questions, and any sentence using one of them should say which.' },
          { h3: 'What cannot be worked out', p: 'The blocks are separate counts of the same population, not a before and after. Subtracting one row from another does not reveal how many people changed status, and this page does not attempt it.' },
          { h3: 'Even the missing answers differ', p: 'The citizenship block records 440 residents who did not state one. The birthplace block carries the same heading and returns no value against it, so the two are not even incomplete in the same way.' }
        ] },
        { kind: 'callout', h3: 'The everyday version of this mistake', p: 'Two fields with similar names arrive from different systems and somebody treats them as one. Country of birth and nationality on a form. Sign-up date and first purchase date. Order date and dispatch date. Account created and subscription started. Each pair looks close enough to join, each join quietly changes what the report means, and nothing breaks loudly enough to notice. The habit that prevents it is dull and it works: write down the exact question each column answers before using it in a calculation, and keep that note beside the code.',
        },
        { kind: 'p', text: 'The project is small and precise. The learner loads both blocks, checks that each sums to 21,701, prints the two Irish shares side by side, and then writes a short note on the largest gap: 1,553 residents born in the United Kingdom against 543 holding its citizenship, a difference of 1,010 people that the table records and does not explain. The program ends by refusing a request: asked for the number of residents who became Irish citizens, it prints that this table cannot answer that, which is the correct output.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Greystones in the town tables',
      h2: 'One built-up area, two names',
      intro: 'The CSO publishes this area as Greystones-Delgany, Co Wicklow, so every figure here covers the two together, as the census counts them.',
      body: [
        { kind: 'table', caption: 'Greystones and Delgany, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '21,701'],
          ['Households', '7,634'],
          ['Households with a broadband connection', '6,826'],
          ['Working residents in the travel table', '9,852'],
          ['Residents travelling to school, college or childcare', '6,416'],
          ['Children under fifteen in childcare', '1,724']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Home working is high here', p: 'A table that asks directly records 5,392 working residents doing at least some work from home, 54.7% of the 9,852 in the travel table by our arithmetic, against 3,744 who never do and 716 who did not state.' },
          { h3: 'Broadband', p: 'Broadband reaches about 89.4% of the area\'s households, with 237 recording no internet access, 110 another kind of connection and 461 not stating.' },
          { h3: 'Childcare split', p: 'Of the 1,724 children under fifteen in childcare, 864 are aged four or under and 860 are between five and fourteen, which is an unusually even split between the two groups.' }
        ] },
        { kind: 'spec', title: 'The station at the end of the line', p: 'Irish Rail gives Greystones station as Church Road, Greystones, Co. Wicklow, Eircode A63 H928, on the Dublin Connolly to Rosslare route as well as the DART and Dublin commuter services. It lists the station as unstaffed with no booking office, a ticket vending machine, passenger shelters and free Wi-Fi, and a car park of 400 spaces operated by Wicklow County Council and shown as free, open around the clock.' }
      ]
    },
    {
      id: 'travel', tint: 'tint', eyebrow: 'How the town moves',
      h2: 'Rail, road and the school gate',
      intro: 'Main means of travel for the 9,852 working residents and the 6,416 travelling to school, college or childcare. Shares are our arithmetic on each group.',
      body: [
        { kind: 'table', caption: 'Main means of travel, Greystones and Delgany residents', head: ['Mode', 'To work', 'To school, college or childcare'], rows: [
          ['Car driver', '4,911', '194'],
          ['Car passenger', '223', '2,904'],
          ['On foot', '373', '1,614'],
          ['Work mainly at or from home', '2,127', '58'],
          ['Train, DART or Luas', '857', '480'],
          ['Bus, minibus or coach', '395', '591'],
          ['Bicycle', '86', '271']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Rail carries more here than in most towns', p: '857 working residents give train, DART or Luas as their main means, 8.7% of the work group, against 3.6% across all towns combined. For school, college and childcare journeys it is 480, or 7.5%, against 2.3%.' },
          { h3: 'The two groups behave differently', p: 'Driving accounts for 4,911 of the work journeys and only 194 of the school ones, while car passenger runs the other way, 223 against 2,904. They are different populations doing different journeys, so the columns are kept apart rather than added.' },
          { h3: 'Home as a main answer', p: '2,127 working residents give working mainly at or from home as their main means of travel, which is a different figure from the 5,392 who do some work from home, because the two tables ask different questions.' }
        ] },
        { kind: 'spec', title: 'A school in the town', p: 'Temple Carrig School gives its address as Blacklion, Greystones, Co. Wicklow, A63 KT20, and publishes roll number 68081J and charity number 20148591. We have no connection with the school, and we name it only from its own contact page.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Greystones',
      h2: 'What the lessons look like',
      intro: 'Live teaching, a level that fits, and a schedule the household sets.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Primary and post-primary', p: 'Block coding for the youngest, then Python, web projects and AI work through Junior Cycle, Transition Year and the senior cycle.' },
          { h3: 'Naming things precisely', p: 'Every course teaches variables, and this page shows why: a column badly understood becomes a sentence quietly wrong.' },
          { h3: 'Adults at home', p: 'Python, data and AI for adults, including the 5,392 residents who already do some of their work from home.' }
        ] },
        { kind: 'p', text: 'Two institutions are named on this page, Irish Rail and Temple Carrig School, each quoted from its own published contact information, and we are connected to neither, nor to Wicklow County Council. Where a count appears it is reproduced from the relevant Census 2022 table for this built-up area without adjustment; where a percentage appears we divided one published count by another; and where two tables ask different questions their figures stay in separate columns here rather than being reconciled into one.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From naming things to joining data safely',
    intro: 'Ages guide the choice; the free lesson confirms it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'One name, one thing', p: 'Variables and lists in block code, where a badly named box causes a visible bug.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Reading a table properly', p: 'Loading small real datasets in Python and describing each column before using it.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Two sources, one answer', p: 'Comparing and combining datasets without letting similar columns blur together.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Definitions that travel', p: 'Documenting what each field means so a report survives being handed to somebody else.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Assistants will merge these two questions for you',
    intro: 'Helpfully, fluently, and wrongly.',
    p1: 'Ask a model how many people in the town are Irish and it will pick one of these figures and present it as the answer. Ask it to work out how many residents became citizens and it will often produce a subtraction, because the numbers are there and subtraction is available. Both replies read well. One answers a question that was never specified; the other invents a quantity the table does not contain.',
    p2: 'A learner who has done this project specifies the question first, names the column that answers it, and says out loud when a request cannot be met from the data in front of them. That is not a limitation of the learner. It is the difference between a result and a guess.',
    closer: 'Machines are excellent at combining columns. Deciding which columns may be combined is still the part that has to be understood by a person.',
    blogAnchor: 'why coding remains worth learning'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Practical details for Greystones households',
    intro: 'Six lines, no small print.',
    cells: [
      { h3: 'A teacher, live', p: 'Real-time teaching for the full lesson, with the learner talking, trying and being corrected as they go.' },
      { h3: 'Five to ten at one level', p: 'Groups are formed by ability rather than address, and draw learners from Ireland and beyond.' },
      { h3: 'Two lessons a week', p: 'About eight in a month, in a weekly slot the family chooses once and keeps.' },
      { h3: 'Built around the term', p: 'Mid-terms, holidays and exam weeks are planned into the schedule from the beginning.' },
      { h3: 'What is needed', p: 'A desktop or laptop rather than a tablet, sound that works both ways, and bandwidth enough for video. All three get tested during the free lesson.' },
      { h3: 'Private if the timing demands', p: 'Where no suitable group meets at a workable hour, the course runs one to one instead.' }
    ],
    spec: { title: 'No commute for this class', p: 'A town where 857 residents take the train to work and 2,904 young people ride to school as passengers does not need another journey. The lesson happens at the kitchen table.' }
  },

  fees: {
    h2: 'Greystones class fees',
    intro: 'Three lines and nothing else.',
    first: 'A complete first lesson, taught and assessed, at no cost.',
    group: 'One month in an ability group of five to ten, about eight live lessons.',
    private: 'One month of one to one lessons, same weekly pattern.',
    closer: 'Charges are monthly and in US dollars, on the single rate used for every family outside India, so a Greystones household sees the same figure as one in Athlone and no euro list beside it. Invoicing starts only after a course and a weekly hour have both been settled in the opening lesson, and the pricing page covers what happens with breaks, a missed week, or a move between a group and private tuition.'
  },

  reviewsH2: 'Six of our families, in their own words from Google',

  book: {
    h2: 'Book a free Greystones lesson',
    intro: 'Send an age and an interest. We plan the first hour around it, whether that is a game to build, a bug to hunt or a table that asks two questions at once.',
    success: 'Thank you. We will be in touch about the Greystones lesson shortly.'
  },

  faq: {
    h2: 'Greystones coding class questions',
    intro: 'What families here ask before the first lesson.',
    items: [
      { q: 'How many people live in Greystones?', a: 'The Census 2022 small area tables count 21,701 usual residents in the built-up area, which the CSO publishes as Greystones-Delgany because the two settlements are counted together. Our Wicklow page quotes the census town list, which measures the same area on a different basis.' },
      { q: 'What is the Greystones data project?', a: 'Learners work with one table that counts the town twice, by birthplace and by citizenship, confirm both blocks sum to 21,701, compare 79.8% born in Ireland with 86.7% holding Irish citizenship, and write down which questions the table can and cannot answer.' },
      { q: 'Why are birthplace and citizenship different?', a: 'They are different questions. Birthplace records where a person was born; citizenship records a legal status that can change and can be held for more than one country. The census asks them separately, and the two blocks cannot be matched person by person.' },
      { q: 'How do Greystones residents get to work?', a: 'Of the 9,852 working residents in the travel table, 4,911 drive, 2,127 give working mainly at or from home, 857 take a train, DART or Luas, 395 take a bus, 373 walk and 86 cycle.' },
      { q: 'What time are the lessons?', a: 'After school, early evening and on weekend mornings. The teaching team sits in India, ahead of Irish clocks by four and a half hours through the summer and by five and a half once they go back in October, and the free lesson is where a workable hour gets fixed for the term.' },
      { q: 'Are adult learners welcome in Greystones?', a: 'Yes, right up to sixty-seven, beginners included. After the free lesson an adult is placed either in a group at the same level or with a teacher one to one.' },
      { q: 'Which software has to be installed first?', a: 'None before the free lesson. The teacher sets up whatever the course needs during it, and everything we use runs in a browser or installs free.' },
      { q: 'Is there a Modern Age Coders classroom in Greystones?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Greystones cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Greystones',
    html: 'The county page for <a class="cg-inline-link" href="/coding-classes-in-county-wicklow">County Wicklow</a> covers the coast and the mountains, and <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a> sits at the other end of the same line, inside the province of <a class="cg-inline-link" href="/coding-and-ai-classes-in-leinster">Leinster</a>. Our <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a> weighs us against other online schools, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Greystones, Wicklow and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-wicklow', label: 'County Wicklow' },
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-gry .cg-hero-grid { align-items: start; gap: clamp(1.13rem, 3.19vw, 2.66rem); }
.cg-root.cg-gry .cg-hero h1 { font-weight: 700; letter-spacing: -0.0198em; line-height: 1.066; }
.cg-root.cg-gry .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.07rem; }
.cg-root.cg-gry .cg-eyebrow { letter-spacing: 0.174em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-gry .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.0139em; }
.cg-root.cg-gry .cg-grid-3 { gap: clamp(1.05rem, 2.68vw, 2.09rem); }
.cg-root.cg-gry .cg-table caption { letter-spacing: 0.031em; font-weight: 700; }
.cg-root.cg-gry .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gry .cg-table td:nth-child(3) { font-family: var(--cg-mono); font-size: 0.88em; }
.cg-root.cg-gry .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 1.11rem; }
.cg-root.cg-gry .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Greystones, the built-up area published as "Greystones-Delgany, Co Wicklow", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T2T1TOWN22, usually resident population, total 21,701 on both blocks. By birthplace: Ireland 17,313, United Kingdom 1,553, Rest of World 1,474, "Other EU272020 (Exec Ireland & Poland)" 892, Poland 291, India 178, with no value returned against not stated. By citizenship: Ireland 18,813, "Other EU272020 (Exec Ireland & Poland)" 820, Rest of World 707, United Kingdom 543, Poland 279, India 99, not stated 440. Our arithmetic: 79.8 percent born in Ireland, 86.7 percent Irish citizens, and a gap of 1,010 between the 1,553 born in the United Kingdom and the 543 holding its citizenship. SAP2022T15T2TOWN22: households 7,634, broadband 6,826, other 110, none 237, not stated 461. SAP2022T11T1TOWN22 to work total 9,852: car driver 4,911, mainly at or from home 2,127, train DART or Luas 857, not stated 519, bus 395, on foot 373, van 278, car passenger 223, bicycle 86, motorcycle 48, other including lorry 35; to school, college or childcare total 6,416: car passenger 2,904, on foot 1,614, bus 591, train DART or Luas 480, not stated 294, bicycle 271, car driver 194. All-towns comparison from the same table: train to work 57,714 of 1,625,104 and train to school 21,586 of 921,076. SAP2022T11T4TOWN22: 9,852 working persons, 5,392 work from home at least some of the time, 3,744 never, 716 not stated. SAP2022T11T5TOWN22: 1,724 children under 15 in childcare, 864 aged 0 to 4 and 860 aged 5 to 14. Irish Rail, Greystones station: "Church Road Greystones Co. Wicklow", "Eircode A63 H928", routes "Dublin Connolly - Rosslare" and "DART and Dublin Commuter", "This station is not staffed", "This station does not have a booking office", "There is Free Wi-fi at the station", car park "Operated by Wicklow County Council", "Spaces: 400", "Price: Free", "Opening Hours: 24hrs". Temple Carrig School: "Temple Carrig School, Blacklion, Greystones, Co. Wicklow A63 KT20", "Charity No: 20148591", "Roll No: 68081J".',
    localProject: 'Born where, citizen of where. One census table counts the 21,701 usual residents of Greystones and Delgany twice. By birthplace it records 17,313 in Ireland, 1,553 in the United Kingdom, 1,474 in the rest of the world, 892 elsewhere in the European Union, 291 in Poland and 178 in India, with no value returned against not stated. By citizenship it records 18,813 Irish, 820 other European Union, 707 rest of world, 543 United Kingdom, 279 Polish, 99 Indian and 440 not stated. Both blocks sum to 21,701. So the question "how Irish is the town" has two correct answers, 79.8 percent by birth and 86.7 percent by citizenship, and the largest single gap is the United Kingdom, 1,553 against 543, a difference of 1,010 people. The page states plainly that the blocks are two counts of one population rather than a before and after, so no figure for people changing status is calculated, and a request for one is refused as unanswerable from this table. The learner\'s program checks both totals, prints the two shares together, documents the question each column answers, and outputs the refusal. New to the cluster: conflating two variables that look interchangeable.',
    requiredMentions: [
      '21,701',
      '17,313',
      '18,813',
      '1,553',
      '1,474',
      '7,634',
      '6,826',
      '9,852',
      '4,911',
      '2,904',
      'A63 H928',
      'A63 KT20'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T2T1TOWN22, Greystones-Delgany, Co Wicklow, total 21,701 on both blocks. Birthplace: Ireland 17,313, United Kingdom 1,553, Rest of World 1,474, Other EU 892, Poland 291, India 178, not stated returns no value. Citizenship: Ireland 18,813, Other EU 820, Rest of World 707, United Kingdom 543, Poland 279, India 99, not stated 440.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T2T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 table SAP2022T11T1TOWN22, Greystones-Delgany: to work 9,852 with car driver 4,911, mainly at or from home 2,127, train DART or Luas 857, bus 395, on foot 373, bicycle 86, not stated 519; to school, college or childcare 6,416 with car passenger 2,904, on foot 1,614, bus 591, train 480, bicycle 271, car driver 194. All-towns row: train to work 57,714 of 1,625,104, train to school 21,586 of 921,076.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T15T2TOWN22, SAP2022T11T4TOWN22 and SAP2022T11T5TOWN22, Greystones-Delgany: households 7,634, broadband 6,826, no internet 237, not stated 461; 5,392 work from home at least some of the time, 3,744 never, 716 not stated; 1,724 children under 15 in childcare, 864 aged 0 to 4 and 860 aged 5 to 14.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T4TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Greystones station: "Church Road Greystones Co. Wicklow", "Eircode A63 H928"; routes "Dublin Connolly - Rosslare", "DART and Dublin Commuter"; "This station is not staffed"; "This station does not have a booking office"; "There is Free Wi-fi at the station"; car park "Operated by Wicklow County Council", "Spaces: 400", "Price: Free", "Opening Hours: 24hrs".', url: 'https://www.irishrail.ie/en-ie/station/greystones' },
      { claim: 'Temple Carrig School: "Temple Carrig School, Blacklion, Greystones, Co. Wicklow A63 KT20"; "Charity No: 20148591"; "Roll No: 68081J".', url: 'https://www.templecarrigschool.ie/' }
    ],
    rejectedClaims: [
      'Any figure for residents who changed citizenship, naturalised or moved between the two blocks: the table is two counts of one population and cannot support it.',
      'Treating birthplace and citizenship as interchangeable anywhere on the page, including in the meta description and the FAQ.',
      'A residual-column project from the Rest of World and Other EU headings: the Naas page owns that lesson, so those headings are quoted as published only.',
      'The census town-list population of Greystones and the Glendalough eircode: the County Wicklow page owns both.',
      'Any reason for the town\'s high rail or home-working shares, or for the size of any gap between the two blocks.',
      'Any claim that Greystones figures can be separated from Delgany: the CSO publishes the two as one built-up area.'
    ]
  }
};
