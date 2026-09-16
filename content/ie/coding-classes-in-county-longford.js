'use strict';
// County Longford (cg- county page, Ireland cluster, Phase 4). Spine: a name is
// not an identifier. Measured in CSO table F1013: a case-sensitive substring
// filter for "Longford" returns 12 built-up areas, while the same filter run
// case-insensitively, which is the default in pandas str.contains and in SQL
// LIKE, returns 13, because Ballylongford in County Kerry contains the letters
// longford. One flag, one extra town, no error message. The page teaches
// matching on identifiers rather than on names. Longford also carries three
// CSO-stated superlatives, all quoted as the CSO states them: the highest rate
// of increase in employment in the country, the joint highest unemployment
// rate, and jointly with Monaghan the least likely workforce to work from home.
// NOT USED: the Lanesborough-Ballyleague two-county straddle as a project,
// because the Louth and Carlow pages own the cross-county filter trap, and the
// F1010 row labelled "Ireland" that is really the county total, which the Kerry
// page owns. Both appear as one-line notes only. The 13 versus 14 percent
// non-Irish citizen gap between two CSO releases is quoted as a range rather
// than resolved. Facts read at primary sources on 16 September 2026.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY LONGFORD', blurb: 'Longford town, Ballymahon and a mostly rural county, with a project on why names make bad keys.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-longford',
  code: 'lgf',
  accent: '#6E2440',
  accentRationale: 'County Longford: a deep claret from the solver, held apart from the wines used on the eastern county pages',
  pageType: 'governorate',
  place: {
    name: 'County Longford',
    eyebrow: 'County Longford, Leinster',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-westmeath', name: 'County Westmeath' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Westmeath', href: '/coding-classes-in-county-westmeath' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'County Longford, Ireland',
  title: 'Coding Classes in County Longford | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Longford, from Longford town and Ballymahon to Granard, Edgeworthstown and Lanesborough, ages 6 to 67.',
  ogDescription: 'Coding and AI classes for County Longford, with a project on how one careless search setting puts a Kerry town inside this county.',
  twitterDescription: 'Coding classes across County Longford, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Longford Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Longford, taught live in English.'
  },

  h1: 'Coding classes in County Longford',
  capsuleQ: 'What are the best coding classes in County Longford?',
  capsule: 'County Longford holds 46,751 people, having added 5,878 since 2016, and the statistics office recorded the fastest rise in employment of any county here over the same years. There are 9,728 children aged 15 and under here, and just over half the county lives outside any town at all. Longford town itself holds 10,952. Classes with us are live and weekly, grouped by ability in fives to tens or taught one to one, for ages six to sixty-seven. The first lesson is free; after that it is USD 100 a month in a group and USD 150 one to one.',
  lead: 'Type Longford into a search over the national list of Irish towns and you get twelve places. Change one setting, the one that decides whether capital letters matter, and you get thirteen. The extra one is Ballylongford, a town of 415 people in County Kerry, 250 kilometres away, which qualifies because the letters l-o-n-g-f-o-r-d happen to sit inside its name. No warning appears. No error is raised. Your Longford total is simply wrong, by one town, forever. This is the most common bug in data work that nobody teaches, and every learner here meets it in the first hour: a name is a label for humans, and the thing you should be matching on is an identifier.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Longford.',

  picks: {
    eyebrow: 'Course picks for County Longford',
    h2: 'Four ways to start',
    intro: 'Each one opens with a free lesson given by the teacher who would take the course, and no card details are asked for beforehand.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch games where two characters share part of a name and the program keeps confusing them until the child fixes it.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from scratch, including the day they learn why matching on text is a trap.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Real tables, real filters, and the difference between contains, equals and an identifier.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For adults whose reports depend on a lookup nobody has ever checked.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Ballylongford is not in Longford',
      intro: 'One filter, two settings, two different answers, and only one of them correct.',
      body: [
        { kind: 'table', caption: 'The same search over the national list of towns, run two ways', head: ['How the filter was written', 'Towns returned', 'What went wrong'], rows: [
          ['Matching the exact letters Longford', '12', 'Nothing, this is the right answer'],
          ['Ignoring capital letters, the common default', '13', 'Ballylongford in County Kerry joins the list'],
          ['Why it happens', '', 'The town name contains the county name as a substring'],
          ['Why nobody notices', '', 'No error, no warning, and a total that looks reasonable'],
          ['The fix', '', 'Match on an identifier, or on the whole field, never on part of a name']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Where this setting hides', p: 'The option that ignores capital letters is the default in several of the most used tools in the world, including the standard way of asking a database for text that looks like something. Most people have never chosen it. It was chosen for them.' },
          { h3: 'The scale of the error here', p: 'Ballylongford has 415 people. Adding them to a county of 46,751 shifts the total by under one per cent, which is exactly why this kind of mistake survives review. It is never big enough to look wrong.' },
          { h3: 'The habit it teaches', p: 'Before trusting a filter, ask what it would do to a name that contains another name. Then count the rows before and after and look at what changed.' }
        ] },
        { kind: 'callout', h3: 'The same idea, one step further', p: 'Names collide in every direction. Two towns share a name across counties. One town is spelled two ways in two government systems. A person changes their surname and the old records stay under the old one. A company trades as one thing and is registered as another. Every mature system solves this the same way, by giving each thing a number or a code that never changes and never means anything, and then treating the human-readable name as decoration. Eircodes do this for addresses. Course codes do it for courses. A teenager who understands why that is necessary has grasped something that a great many working adults never quite do.' },
        { kind: 'p', text: 'Two smaller labelling notes from the same county, mentioned because they are true rather than made into projects. Lanesborough-Ballyleague appears in the national town list as a single place spanning Roscommon and Longford, so it belongs wholly to neither county total. And inside the county population table there is a row labelled Ireland whose value is 46,751, which is Longford, not the country. Both are the same lesson as Ballylongford: read what the label points at, not what it reads like.' }
      ]
    },
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Small, rural and growing quickly',
      intro: 'Every figure below is quoted from a Central Statistics Office release naming Longford.',
      body: [
        { kind: 'table', caption: 'County Longford at the 2022 census', head: ['Counted', 'Number'], rows: [
          ['People in the county', '46,751, up 5,878 or 14% since 2016'],
          ['Children aged 15 and under', '9,728, of whom 3,044 were in childcare'],
          ['Average age', '38.8 years, exactly the national average'],
          ['Born in the county', '20,714 people, 45% of residents'],
          ['Born outside the State', '9,580 people, 21%, above the national 20%'],
          ['Holding dual Irish citizenship', '1,523, up from 752 in 2016'],
          ['Able to speak Irish, aged three and over', '14,993, up by more than 900, or 38% of that group']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The town', p: 'Longford town holds 10,952 people at 1,720.8 per square kilometre across 6.4 square kilometres, with an average age of 37.3 and 22.5% of residents under 15, a younger profile than the county as a whole.' },
          { h3: 'The electoral area', p: 'The area also called Longford holds 17,329, well over the town, which is the usual gap between a town and the countryside named after it.' },
          { h3: 'The rural majority', p: 'The population table records 26,007 people in what it calls the remainder of the county, outside every town of 500 or more. By our own arithmetic that is about 56 out of every 100 people here.' }
        ] },
        { kind: 'p', text: 'Among towns of at least 500 people, Keenagh has the youngest average age at 34.5 years and Lanesborough-Ballyleague the oldest at 40.3. Non-Irish citizens make up somewhere between 13% and 14% of the county depending on which of the two statistics office releases you read, and we quote the range rather than pick one. The largest groups are Polish at 1,508, UK at 886, Lithuanian at 559 and Slovakian at 523.' }
      ]
    },
    {
      id: 'work', tint: 'tint', eyebrow: 'Work in Longford',
      h2: 'Three things the statistics office says about this county',
      intro: 'All three are national comparisons made by the CSO itself, not by us.',
      body: [
        { kind: 'table', caption: 'Longford at work, Census 2022', head: ['What the CSO reported', 'Figure'], rows: [
          ['People at work', 'Almost 19,700, up 30% from almost 15,200 in 2016'],
          ['How that ranked', 'The highest rate of increase in the country'],
          ['Unemployment', '11%, down from 20% in 2016, and the joint highest rate in the country'],
          ['Working from home at least one day a week', '4,110 people, 21% of the workforce, against 32% nationally'],
          ['How that ranked', 'Workers here, along with those in Monaghan, were the least likely to work from home'],
          ['Average journey to work', '28.8 minutes, up from 26.4 minutes in 2016']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two facts that pull opposite ways', p: 'The fastest growth in employment in the country and the joint highest unemployment rate, in the same county in the same year. Both are true. A county can add jobs quickly and still have more people looking for one.' },
          { h3: 'What that means for a family', p: 'A teenager here is growing up somewhere the labour market is changing fast. What a young person can actually do is worth more in that setting than what their address is.' },
          { h3: 'Education', p: 'Almost 10,400 people in the county hold a third level qualification, up from just over 7,900 in 2016, a rate of 34% against 45% nationally.' }
        ] },
        { kind: 'spec', title: 'The least likely county to work from home', p: 'Only 21% of the workforce here works from home at any point in a week, the joint lowest share in the country. That cuts two ways. It means fewer households have the habit of a scheduled video call, and it also means an online class is not competing with anything else for the family broadband at six in the evening. What it does not tell us is whether any particular house has a good enough connection, because no county-level broadband figure is published at all. The free lesson answers that question directly, which is the only way to answer it.' }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Longford addresses',
      h2: 'Two places, quoted from their owners',
      intro: 'Both checked on the organisation\'s own website.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A forest resort', p: 'Center Parcs describes Longford Forest as set in 400 acres of historic forest, five kilometres from Ballymahon, and it is the company\'s first resort in Ireland.' },
          { h3: 'The county council', p: 'Longford County Council publishes its own address as Aras an Chontae, Great Water Street, Longford, eircode N39 NH56.' },
          { h3: 'The council\'s data', p: 'Its eight dataset records on the national portal are all licensed for reuse, and every one of the eight points at the same single web page rather than a file you could open.' }
        ] },
        { kind: 'p', text: 'One more thing this page does not claim. No Longford school appears on the forty-school first-phase list for Leaving Certificate Computer Science published in January 2018, which we established by reading the published table row by row. That is a fact about 2018 and about that list, and nothing at all about any school or pupil in the county today. We are not connected with Longford County Council, Center Parcs or any school. Population and employment figures are quoted from Central Statistics Office releases naming Longford; the filter counts and the rural share are our own, run on published tables.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From confusing two names to using an identifier',
    intro: 'Ages guide the grouping. The free lesson sets the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Two things, one name', p: 'Programs that keep mixing up characters with similar names, until the child gives them numbers.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Contains, starts with, equals', p: 'Three ways to search text, and what each one quietly lets through.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Keys and joins', p: 'Matching two real tables properly, and counting rows before and after to prove it worked.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Lookups that survive', p: 'Building reports that do not break when somebody renames a thing.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'The filter an assistant writes will usually ignore capital letters',
    intro: 'It is the friendlier default, it is what most examples use, and here it is wrong.',
    p1: 'Ask for code that finds the Longford towns and what comes back will very likely contain the option that treats upper and lower case as the same. That choice is sensible almost everywhere, which is exactly why it is dangerous here. The code runs, returns a tidy list and never mentions that one of the towns on it is in Kerry.',
    p2: 'The learner who catches it is not smarter or faster. They simply counted the rows, looked at the list, and recognised a name they did not expect. That is a two minute habit, and it is the one thing standing between a plausible answer and a correct one.',
    closer: 'Generated code is getting harder to fault by reading it. It is not getting any harder to check by running it and looking at what came out, which is why we teach the looking.',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Practical details for a Longford family',
    intro: 'Six things worth knowing before you book.',
    cells: [
      { h3: 'One hour, one teacher, live', p: 'A person teaches, asks questions and waits for answers. Recordings exist for revision, not instead of the class.' },
      { h3: 'Reaching the rural majority', p: 'With around 56 in every 100 people here living outside any town, a class that needs no journey reaches families that nothing else reaches.' },
      { h3: 'Grouped by what they can do', p: 'Five to ten learners at one level, drawn from Longford and several countries, so a real peer group exists at a sensible hour.' },
      { h3: 'Equipment and connection', p: 'A laptop or desktop, working sound and a steady line. The free lesson is the honest test of whether the line is good enough.' },
      { h3: 'Irish school calendar', p: 'Junior Cycle, Transition Year and senior cycle, with mid-terms and exam weeks written into the plan.' },
      { h3: 'Hours and time zones', p: 'Afternoons, evenings and weekend mornings, taught by a team several hours ahead of Irish time.' }
    ],
    spec: { title: 'Why this county in particular', p: 'Longford is the smallest county on this list by population and one of the most rural. Granard, Edgeworthstown, Ballymahon, Lanesborough and Drumlish are each a real drive from the county town, and there are not many of them. An online class does not care about any of that. It arrives at the kitchen table at the same hour whether the house is on the edge of Longford town or fifteen kilometres out a bog road.' }
  },

  fees: {
    h2: 'Longford class fees',
    intro: 'Three numbers, no conditions hidden behind them.',
    first: 'The opening lesson, taught in full, at no cost.',
    group: 'A month of group classes, around eight lessons, five to ten learners at one level.',
    private: 'A month of one to one classes on the same weekly rhythm.',
    closer: 'Fees are monthly and in US dollars, the one rate we use outside India, so Granard pays what Longford town pays and there is no euro list beside it. Nothing is charged until the free lesson has settled a course and an hour, and pauses, missed lessons and changes between group and private are written out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from our families, reproduced as written',

  book: {
    h2: 'Ask for the free lesson',
    intro: 'Tell us the learner\'s age and what they like. We match the first hour to it, whether that is a Scratch game with two confusable characters or a real table and a filter that lets the wrong town through.',
    success: 'Thank you. Somebody will be in touch about your County Longford class shortly.'
  },

  faq: {
    h2: 'County Longford coding class questions',
    intro: 'The questions Longford families ask first.',
    items: [
      { q: 'How many people live in County Longford?', a: 'The 2022 census counted 46,751, a rise of 5,878 or 14% since 2016, including 9,728 children aged 15 and under.' },
      { q: 'What is the Longford data project?', a: 'Students run the same search over the national list of towns twice, once matching capital letters and once ignoring them, and discover that the second version pulls Ballylongford in County Kerry into Longford.' },
      { q: 'How big is Longford town?', a: 'It held 10,952 people in 2022. The electoral area of the same name held 17,329, and 26,007 people across the county live outside any town of 500 or more.' },
      { q: 'Is it true Longford had the fastest growing employment in the country?', a: 'Yes, in the CSO\'s own words. Employment rose 30% to almost 19,700 between 2016 and 2022, the highest rate of increase in the country, while unemployment at 11% was the joint highest.' },
      { q: 'Did a Longford school offer Leaving Certificate Computer Science from the start?', a: 'No Longford school appears on the forty-school first-phase list published in January 2018. We read that published table row by row. It says nothing about schools today.' },
      { q: 'Do you teach children in the rural parts of the county?', a: 'That is most of the county, and yes. Around 56 in every 100 people here live outside any town of 500 or more, and the class is identical wherever the learner sits.' },
      { q: 'When do classes run?', a: 'Afternoons, evenings and weekend mornings, at an hour fixed in the free lesson. Our teaching team is several hours ahead of Irish time, which keeps those hours easy to staff.' },
      { q: 'Is there a Modern Age Coders classroom in County Longford?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do County Longford coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around the midlands',
    html: 'Longford\'s neighbours with their own pages are <a class="cg-inline-link" href="/coding-classes-in-county-westmeath">County Westmeath</a> and <a class="cg-inline-link" href="/coding-classes-in-county-offaly">County Offaly</a>, and the nearest cities are <a class="cg-inline-link" href="/best-coding-class-in-galway">Galway</a> and <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a>. For a comparison of online schools see <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, and everything is indexed on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Longford and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-westmeath', label: 'County Westmeath' },
    { href: '/coding-classes-in-county-offaly', label: 'County Offaly' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-lgf .cg-hero-grid { align-items: start; gap: clamp(1.13rem, 3.08vw, 2.58rem); }
.cg-root.cg-lgf .cg-hero h1 { font-weight: 700; letter-spacing: -0.0173em; line-height: 1.077; }
.cg-root.cg-lgf .cg-capsule { border-left: 7px solid var(--cg-accent); padding-left: 1.04rem; }
.cg-root.cg-lgf .cg-eyebrow { letter-spacing: 0.185em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lgf .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.0146em; }
.cg-root.cg-lgf .cg-grid-3 { gap: clamp(1.03rem, 2.67vw, 2.12rem); }
.cg-root.cg-lgf .cg-table caption { letter-spacing: 0.037em; font-weight: 700; }
.cg-root.cg-lgf .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lgf .cg-table tr:first-child td { font-weight: 600; }
.cg-root.cg-lgf .cg-ladder-col { border-top: 6px solid var(--cg-accent); padding-top: 0.96rem; }
.cg-root.cg-lgf .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'County Longford, whose council area is the county, Census 2022 (CSO Longford releases): population 46,751, up 5,878 (14 percent) since 2016; average age 38.8, identical to the national average; 9,728 children aged 15 and under, of whom 3,044 (31 percent) were in childcare against 33 percent nationally. Birthplace: 20,714 people (45 percent) born in the county, 15,401 (34 percent) elsewhere in the State and 9,580 (21 percent) outside the State, above the national 20 percent and up from 19.5 percent in 2016. Longford town: 10,952 people at 1,720.8 per sq km over 6.4 sq km, average age 37.3 with 22.5 percent under 15; the Longford local electoral area holds 17,329. Among towns of at least 500 people, Keenagh is youngest at average age 34.5 and Lanesborough-Ballyleague oldest at 40.3. From table F1010, the Longford County Council slice records 26,007 people in the remainder of the county outside every town of 500 or more, which by our own arithmetic is 55.6 percent of the county. Citizenship: the CSO\'s two releases give non-Irish citizens as 13 percent in the summary and 14 percent in Profile 5, so the range is quoted rather than one figure; largest groups Polish 1,508, UK 886, Lithuanian 559, Slovakian 523; dual Irish citizens up from 752 in 2016 to 1,523. Work, with the CSO\'s own national comparisons: almost 19,700 people at work, an increase of 30 percent from almost 15,200 in 2016, "the highest rate of increase in the country"; unemployment 11 percent against 20 percent in 2016, "the joint highest rate in the country"; 4,110 people working from home at least one day a week, 21 percent of the workforce against 32 percent nationally, with workers here "along with those in Monaghan" the least likely to work from home; average journey time 28.8 minutes against 26.4 in 2016. Education: third level qualifications up from just over 7,900 in 2016 to almost 10,400, a rate of 34 percent against 45 percent nationally; 14,993 people aged three and over could speak Irish, up by more than 900, which is 38 percent of that group against 36.9 percent in 2016. FINDING: no County Longford school appears on the forty-school first-phase Leaving Certificate Computer Science list of 4 January 2018, established by re-parsing the published table row by row. Sites: Center Parcs Longford Forest, described on the company\'s own site as set in 400 acres of historic forest five kilometres from Ballymahon and its first resort in Ireland; Longford County Council, Aras an Chontae, Great Water Street, Longford, N39 NH56.',
    localProject: 'A name is not an identifier. Measured in CSO table F1013, the national list of built-up areas: filtering on the literal substring "Longford" returns 12 rows, while the same filter run case-insensitively, the default behaviour of pandas str.contains with case set to false and of SQL LIKE, returns 13, the extra row being "Ballylongford, Co Kerry" with a population of 415, which qualifies only because its name contains the letters longford. No warning and no error accompanies the difference, and at 415 people against a county of 46,751 the resulting total is wrong by under one percent, which is precisely why such errors survive review. Learners run both versions, diff the row sets, and then write the rule: match on an identifier or on a whole field, never on part of a human-readable name. The follow-on lesson is why every mature system issues codes that never change and never mean anything, eircodes for addresses being the nearest example to hand. Two further labelling notes from the same county are stated but not made into projects, because other pages own them: Lanesborough-Ballyleague is recorded as a single built-up area spanning Roscommon and Longford, so it belongs wholly to neither county total, and within the Longford slice of table F1010 there is a row labelled "Ireland" whose value is 46,751, the county total rather than the national population.',
    requiredMentions: [
      '46,751',
      '10,952',
      '9,728',
      '14,993',
      '17,329',
      '26,007',
      '28.8 minutes',
      'N39 NH56',
      'Ballymahon',
      '1,523',
      '20,714',
      '3,044'
    ],
    sources: [
      { claim: 'CSO Longford summary press statement, 30 May 2023: "the population of Longford grew by 14% to 46,751, which means the number of people in the county rose by 5,878 between April 2016 and April 2022"; average age 38.8 against a national 38.8; "There were 9,728 children aged 15 and under in Longford in April 2022. Of these, 3,044 (31%) were in childcare, compared with 33% nationally"; "In Longford, 4,110 people (aged 15 and over) worked from home at least one day a week in 2022. This represented 21% of the workforce"; and, in its dual citizens section, non-Irish citizens at 13 percent.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultslongford/' },
      { claim: 'CSO Profile 1 Longford: "Longford was the largest town, with a population of 10,952 in April 2022"; Keenagh the youngest town at average age 34.5 and Lanesborough-Ballyleague the oldest at 40.3; 45 percent (20,714) born in the county, 34 percent (15,401) elsewhere in the State and 21 percent (9,580) outside it.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementslongford/' },
      { claim: 'CSO Profile 7 Longford: "almost 19,700 people were at work. This was an increase of 30% (from the almost 15,200 people recorded as working in Census 2016) - the highest rate of increase in the country"; "The unemployment rate was 11% compared with 20% in 2016. This was the joint highest rate in the country"; "Workers in the county, along with those in Monaghan, were the least likely to work from home, with 21% doing so"; "an average journey time of 28.8 minutes compared with 26.4 minutes in 2016".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutinglongford/' },
      { claim: 'CSO Profile 5 Longford: "In Longford non-Irish citizens accounted for 14% of the county\'s population. Among the non-Irish residents, the largest group were Polish citizens (1,508 people) followed by UK citizens (886), Lithuanian (559) and Slovakian (523)"; dual Irish citizens up from 752 in 2016 to 1,523. The summary release gives 13 percent for the same measure, and the page quotes the range.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionlongford/' },
      { claim: 'CSO Profile 8 Longford: third level qualifications up from just over 7,900 in 2016 to almost 10,400, a rate of 34 percent against 45 percent nationally; "The number of people (aged three and over) who could speak Irish in Longford increased by more than 900 to 14,993 in Census 2022. This was 38% of the county\'s population aged three and over."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationlongford/' },
      { claim: 'CSO PxStat table F1013: Longford town at 1,720.8 per sq km over 6.4 sq km; a case-sensitive substring filter for "Longford" returns 12 built-up area rows, a case-insensitive one returns 13 by additionally matching "Ballylongford, Co Kerry", population 415; and "Lanesborough-Ballyleague, Counties Roscommon & Longford" is recorded as a single two-county row.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1013/JSON-stat/2.0/en' },
      { claim: 'CSO PxStat tables F1015 and F1016: Longford town average age 37.3 with 22.5 percent under 15; the Longford local electoral area 17,329.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1015/JSON-stat/2.0/en' },
      { claim: 'CSO PxStat table F1010, Longford County Council slice: remainder of the county outside towns of 500 or more, 26,007 people, and a row labelled "Ireland" whose value is 46,751, the county total rather than the national population.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1010/JSON-stat/2.0/en' },
      { claim: 'Department of Education, 4 January 2018: the forty-school first-phase Leaving Certificate Computer Science list contains no school with a County Longford address, established by re-parsing the published table row by row.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Center Parcs: "Nestled in 400 acres of beautiful historic forest just five kilometres from Ballymahon, Longford Forest is our first resort in Ireland."', url: 'https://www.centerparcs.ie/discover-center-parcs/holiday-locations/longford-forest.html' },
      { claim: 'Longford County Council contact page: "Longford County Council, Aras an Chontae, Great Water Street, Longford N39 NH56", and eight dataset records on data.gov.ie, all licensed Creative Commons Attribution 4.0, every one resolving its only resource to the same council web page rather than a data file.', url: 'https://www.longfordcoco.ie/your-council/contact-us/' }
    ],
    rejectedClaims: [
      'Any claim that Longford has the highest share of non-Irish citizens in the country: no CSO statement ranks it, so only the 13 to 14 percent against a national 12 percent comparison is used.',
      'A single figure for non-Irish citizens: the CSO\'s two releases give 13 and 14 percent, so the range is quoted.',
      'The Lanesborough-Ballyleague two-county straddle as a project: the County Louth and County Carlow pages own the cross-county filter trap.',
      'The F1010 row labelled "Ireland" as a project: the County Kerry page owns that trap, so it appears here as a one-line note.',
      'Any Longford-specific broadband figure: the CSO publishes internet access no lower than the four-county Midland region.',
      'A county land area or density figure for Longford: no such row exists in the CSO tables checked.',
      'Any second named Longford employer: none could be verified at a primary source, so none is named.'
    ]
  }
};
