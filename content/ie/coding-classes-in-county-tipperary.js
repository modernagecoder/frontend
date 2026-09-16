'use strict';
// County Tipperary (cg- county page, Ireland cluster, Phase 4). Spine: the
// difference between no data and no access, and what an honest person does
// about a locked door. Tipperary County Council publishes zero datasets on the
// national portal, verified on its own publisher page, and its two open data
// pages on tipperarycoco.ie returned a bot-protection block page on every
// attempt, so no content behind them is claimed here and no attempt was made to
// work around the block. The page teaches that a block is an answer: record it,
// say so, use a source that permits you. Facts read at primary sources on
// 16 September 2026: the Tipperary Summary, Profile 1, 5, 7 and 8 press
// statements; PxStat F1013 and F1016; gov.ie's January 2018 LCCS list; tus.ie;
// heritageireland.ie; data.gov.ie. Clonmel's built-up area is registered by the
// CSO as spanning Tipperary and Waterford and is labelled that way here.
// EXCLUDED: the F1010 doubling trap, which the County Kerry page owns; any
// county density figure, which the CSO does not publish at council level; and
// any address for the Clonmel drinks manufacturer, whose own site did not
// resolve.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY TIPPERARY', blurb: 'Clonmel, Nenagh and Thurles, with a project on what to do when the data is locked.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-tipperary',
  code: 'tip',
  accent: '#5E3B76',
  accentRationale: 'County Tipperary: a muted violet from the solver, distinct from the purples already used on the Leinster doors',
  pageType: 'governorate',
  place: {
    name: 'County Tipperary',
    eyebrow: 'County Tipperary, Munster',
    schemaType: 'AdministrativeArea',
    chain: [
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
  routeLabel: 'County Tipperary, Ireland',
  title: 'Coding Classes in County Tipperary | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Tipperary, from Clonmel and Nenagh to Thurles, Cashel and Roscrea, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for County Tipperary, built around a project on the difference between data that does not exist and data you are not allowed to read.',
  twitterDescription: 'Coding classes across County Tipperary, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Tipperary Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Tipperary, taught live in English.'
  },

  h1: 'Coding classes in County Tipperary',
  capsuleQ: 'What are the best coding classes in County Tipperary?',
  capsule: 'County Tipperary holds 167,895 people, 8,342 more than in 2016, including 33,286 children aged 15 and under. Clonmel is the largest town at 18,369, with Nenagh at 9,895 and Thurles at 8,185, and the county has run as a single council since the North and South Riding councils merged. Its third level rate is 38% against 45% nationally, one of several counties where that gap is wide. We teach ages 6 to 67 live online at a fixed weekly hour, in groups of five to ten placed by ability or one to one, starting with a free lesson and then USD 100 a month in a group or USD 150 privately.',
  lead: 'We went looking for Tipperary council data for this page and found something more interesting than a spreadsheet. The council publishes nothing at all on the national data portal, which its own publisher page states plainly: zero datasets. It does run open data pages on its own website, and every attempt to read them returned a security block instead, the kind that stops automated requests. So the data may well exist and we cannot see it. At that point there are two kinds of person. One goes looking for a way around the block. The other writes down exactly what happened, quotes the message, and uses a source that gives permission. We are teaching children to be the second kind, and this page explains why that is the more valuable habit in a career, not just the more polite one.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Tipperary.',

  picks: {
    eyebrow: 'Course picks for County Tipperary',
    h2: 'Four ways into this',
    intro: 'Choose by age and by what the learner wants to make. A free lesson with the teacher who would take the course settles it properly.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects with a locked door in them, and a character who has to find the key rather than break the wall.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first principles, aimed squarely at the Junior Cycle and Transition Year.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 15 to 18', note: 'Projects that use only sources which permit it, and say so in writing.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who need figures from systems they do not own, without stepping over a line.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'No data, or no permission?',
      intro: 'A short, real investigation with an uncomfortable ending, which is what makes it worth doing.',
      body: [
        { kind: 'table', caption: 'What we found looking for Tipperary council data, 16 September 2026', head: ['Step', 'Result'], rows: [
          ['The national open data portal', 'The council\'s publisher page lists zero datasets'],
          ['The council\'s own open data page', 'A security block page instead of the content'],
          ['A second council data page', 'The same block'],
          ['What the block said', 'That access was refused and the site uses a security service to protect itself'],
          ['What we did next', 'Stopped, wrote it down, and used national statistics that permit reuse']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why not go around it', p: 'Because the block is a statement of terms by the people who own the site. Getting past it is not clever. It moves the work from research into something a school, a university or an employer would treat as a disciplinary matter.' },
          { h3: 'Why write it down', p: 'A project that says we could not read this, here is the exact message we got and here is what we used instead, is stronger than one that pretends the question never arose.' },
          { h3: 'The distinction that matters', p: 'Absent and forbidden are different findings. One means nobody published it. The other means somebody published it and does not want it scraped. Reporting them as the same thing is sloppy.' }
        ] },
        { kind: 'callout', h3: 'The version of this that turns up at work', p: 'Every organisation has a system somebody cannot query, an export that a supplier will not enable, a report locked behind a licence. Careers are shaped by what people do at that moment. The ones who quietly find a workaround create a risk that surfaces later, usually for somebody else. The ones who document the obstacle and propose a legitimate route get asked to handle bigger things. A teenager can practise this in an afternoon on a county council website, and it costs nothing to learn now rather than at twenty-five.' },
        { kind: 'p', text: 'So the Tipperary project has no downloaded file in it at all. The output is a short written record, an exact quotation of the refusal, a named alternative source with its licence, and a paragraph on what could be answered and what could not. It is the least glamorous project in this cluster and one of the most useful.' }
      ]
    },
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Tipperary in the 2022 census',
      intro: 'These come from national statistics releases, which do permit reuse, and each names Tipperary.',
      body: [
        { kind: 'table', caption: 'County Tipperary, Census 2022, Central Statistics Office', head: ['Measure', 'Figure'], rows: [
          ['Population', '167,895, up 8,342 since 2016'],
          ['Women and men', '84,256 female and 83,639 male, or 99 males for every 100 females'],
          ['Average age', '40.3 years, against 38.6 in 2016'],
          ['Children aged 15 and under', '33,286'],
          ['Born in the county', '100,745 people, 60% of residents'],
          ['People aged three and over who can speak Irish', '66,003, up by 612, or 43% of that population']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The three towns', p: 'Clonmel at 18,369, Nenagh at 9,895 and Thurles at 8,185. Thurles is the densest of the three at 1,362.1 people per square kilometre across six square kilometres.' },
          { h3: 'Towns and their hinterlands', p: 'As electoral areas the same names cover much more ground: Clonmel 25,003, Nenagh 23,354 and Thurles 19,980, the difference being countryside.' },
          { h3: 'Youngest and oldest', p: 'Among places of at least 500 people, Newport has the youngest average age at 34.5 years and Clogheen the oldest at 43.4.' }
        ] },
        { kind: 'p', text: 'Clonmel deserves a footnote that most write-ups skip. The statistics office registers its built-up area as spanning Counties Tipperary and Waterford, because the town boundary crosses the county line. The 18,369 figure is the whole town, not the Tipperary part of it, and anyone adding town populations to reach a county total will overshoot if they forget that. Non-Irish citizens make up 9% of the county, led by Polish at 3,255, UK at 2,926, Romanian at 1,187 and Lithuanian at 848.' }
      ]
    },
    {
      id: 'access', tint: 'tint', eyebrow: 'Access, in every sense',
      h2: 'The county with the lowest bus share in Ireland',
      intro: 'Tipperary\'s travel figures make an unusually direct argument for teaching this subject online.',
      body: [
        { kind: 'table', caption: 'Getting to work in Tipperary, Census 2022', head: ['Measure', 'Figure'], rows: [
          ['People travelling to work', '65,656'],
          ['Driving by car', '44,595'],
          ['Travelling by bus', '528 people, a rate of 1%, the lowest in the country'],
          ['Travelling by train', '312'],
          ['Average journey time', '27.1 minutes, up from 25.6 minutes in 2016'],
          ['Largest sector', 'Manufacturing, at more than 10,400 workers']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What that means for an evening class', p: 'A 16 year old in Cahir or Borrisokane cannot get to a class in Clonmel and home again without an adult driving them. One in a hundred commuters here uses a bus, and school-age learners have fewer options than commuters.' },
          { h3: 'Third level, and the gap', p: 'More than 43,200 people in the county hold a third level qualification, up from almost 34,900 in 2016, but that is 38% against 45% nationally, a gap of seven percentage points.' },
          { h3: 'What the county does have', p: 'TUS runs two campuses here, at Nenagh Road in Thurles, eircode E41 PC92, and in Clonmel, eircode E91 D896, so higher education in Tipperary is not concentrated in one place.' }
        ] },
        { kind: 'spec', title: 'Working from home is least common here too', p: 'More than 73,200 people work in Tipperary. Over 47,300 of them never work from home, and almost 17,700 do at least some of the time, which the statistics office puts at 24% of the workforce against 32% nationally. A county that travels for almost everything gains the most from a class that requires no travel at all.' }
      ]
    },
    {
      id: 'schools', tint: '', eyebrow: 'Schools and landmarks',
      h2: 'One listed school, and a very old lesson in documentation',
      intro: 'Two Tipperary places, both checked at the source that owns them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The listed school', p: 'Presentation Secondary school in Clonmel was the only Tipperary entry on the national first-phase list for Leaving Certificate Computer Science published in January 2018, and we quote its name as the department wrote it, lower-case s and all.' },
          { h3: 'The Rock of Cashel', p: 'The Office of Public Works describes it as holding the most impressive cluster of medieval buildings in Ireland, including a round tower, a high cross, a Romanesque chapel, a Gothic cathedral and a fifteenth-century tower house, at eircode E25 KX44.' },
          { h3: 'Why quote exactly', p: 'Because a name retyped from memory is a name that will not match a search, a database or a list. Copying precisely is not pedantry. It is what makes work checkable by somebody else.' }
        ] },
        { kind: 'p', text: 'We are not connected with Tipperary County Council, the Technological University of the Shannon, the Office of Public Works or any school named here. Population, education and travel figures are quoted from Central Statistics Office releases naming Tipperary; the zero dataset count is from the national portal\'s own publisher page; the description of the block is a plain account of what we received when we asked, with no attempt made to get around it. One well known Clonmel manufacturer is not named with an address here because its own site did not respond when we checked, and we do not take addresses from third parties.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From asking permission to documenting a refusal',
    intro: 'Ages are a guide only. The free lesson sets the real starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Rules in a game', p: 'Programs where a door is locked on purpose, and the answer is the key rather than the wall.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Whose data is it', p: 'Reading who owns a file and what the licence says before touching it.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Projects with clean hands', p: 'Research where every source is quoted, licensed and permitted, including the ones that said no.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Legitimate routes', p: 'Getting the figures you need from systems you do not own, the way an auditor would accept.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will describe a dataset it has never opened',
    intro: 'Ask what is in the county council\'s data and you will get a fluent, structured, entirely imagined answer.',
    p1: 'This is the failure mode worth understanding, because it does not look like a failure. A summary of a dataset that cannot be reached will still arrive formatted, plausible and complete, assembled from what similar councils publish. Nothing in the reply says the door was locked, because the reply was never generated by opening the door.',
    p2: 'A learner who has personally hit the block knows the shape of the ground truth. They ask what the source actually said, whether anybody opened it, and what happens to the conclusion if the file turns out to be different. Those questions are cheap, and they are the entire difference between research and confident decoration.',
    closer: 'Coding in 2026 is less about typing and more about knowing which claims have been checked. A child who learns that on a real locked door will not forget it.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'What a Tipperary family signs up to',
    intro: 'Six things that are true of every class we run, so there is nothing to discover later.',
    cells: [
      { h3: 'A teacher, live, every week', p: 'Not a video library with a chat box. Someone is there for the hour and expects the learner to speak.' },
      { h3: 'Zero travel', p: 'In a county where one commuter in a hundred takes a bus, that is the whole argument.' },
      { h3: 'Placed on ability', p: 'Groups of five to ten at one level, drawn from Tipperary and other countries so a suitable class exists at a workable hour.' },
      { h3: 'Irish school shape', p: 'Junior Cycle, Transition Year, fifth and sixth year, with mid-terms and exams planned around.' },
      { h3: 'Same hour, every week', p: 'Two lessons in most weeks, about eight a month, agreed once and then kept.' },
      { h3: 'A time zone ahead', p: 'Teachers work from India, four and a half hours ahead of Ireland in summer and five and a half in winter.' }
    ],
    spec: { title: 'For families in the smaller towns', p: 'Roscrea, Cahir, Carrick-on-Suir, Templemore and Borrisokane are each a serious drive from the nearest evening option, and 44,595 people in this county already drive to work every day. Adding a second round trip to that week is what makes families quietly give up a subject in November. Removing the journey is not a concession here. It is the reason it lasts past Christmas.' }
  },

  fees: {
    h2: 'Tipperary class fees',
    intro: 'Three figures, and the conditions stated up front rather than in a footnote.',
    first: 'A full first lesson at no cost, ending with a level and a recommendation.',
    group: 'A month of group classes, normally eight lessons, five to ten learners at one level.',
    private: 'A month of one to one classes on the same weekly pattern.',
    closer: 'We bill monthly in US dollars at the single rate charged outside India, so Nenagh and Carrick-on-Suir pay the same and there is no euro list to compare against. Nothing is charged before the free lesson has agreed a course and an hour, and pauses, missed lessons and moves between formats are set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from our families, printed exactly as written',

  book: {
    h2: 'Start with the free lesson',
    intro: 'Tell us the learner\'s age and what they are drawn to. The first hour is shaped around that, whether it is a puzzle with a locked door, a first Python program, or the question of which sources a project is allowed to use.',
    success: 'Thank you. Somebody will be in touch about your County Tipperary class shortly.'
  },

  faq: {
    h2: 'County Tipperary coding class questions',
    intro: 'What Tipperary families ask before they start.',
    items: [
      { q: 'How many people live in County Tipperary?', a: 'The 2022 census recorded 167,895 people, up 8,342 since 2016, including 33,286 children aged 15 and under.' },
      { q: 'What is the Tipperary data project?', a: 'An investigation with an honest ending. The council publishes nothing on the national portal and its own data pages returned a security block, so learners document the refusal and use a source that permits reuse instead of trying to get around it.' },
      { q: 'Which Tipperary school first offered Leaving Certificate Computer Science?', a: 'Presentation Secondary school in Clonmel, the county\'s only entry on the national first-phase list published in January 2018.' },
      { q: 'How big are Clonmel, Nenagh and Thurles?', a: 'Clonmel had 18,369 people in 2022, Nenagh 9,895 and Thurles 8,185. Clonmel\'s built-up area is registered as spanning Tipperary and Waterford, so that figure covers the whole town rather than the Tipperary part.' },
      { q: 'Why does this page talk so much about travel?', a: 'Because 44,595 people here drive to work and only 528 take a bus, a 1% share that is the lowest in the country. That decides what kind of evening class is realistic for a teenager.' },
      { q: 'Is there anywhere to study computing in the county?', a: 'TUS runs campuses in Thurles and Clonmel. Our classes are separate from those and are not a route to any qualification from them.' },
      { q: 'What hours do classes run?', a: 'Afternoons, evenings and weekend mornings. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter, and the weekly hour is agreed in the free lesson.' },
      { q: 'Is there a Modern Age Coders classroom in County Tipperary?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do County Tipperary coding classes cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The counties and cities around Tipperary',
    html: 'Tipperary borders more counties than most. Nearby pages include <a class="cg-inline-link" href="/best-coding-class-in-waterford">Waterford</a>, <a class="cg-inline-link" href="/best-coding-class-in-limerick">Limerick</a>, <a class="cg-inline-link" href="/coding-classes-in-county-clare">County Clare</a> and <a class="cg-inline-link" href="/coding-classes-in-county-cork">County Cork</a>. To compare providers, read <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, and everything is listed on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Tipperary and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-waterford', label: 'Waterford' },
    { href: '/best-coding-class-in-limerick', label: 'Limerick' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-tip .cg-hero-grid { align-items: start; gap: clamp(1.04rem, 3.19vw, 2.66rem); }
.cg-root.cg-tip .cg-hero h1 { font-weight: 700; letter-spacing: -0.0189em; line-height: 1.066; }
.cg-root.cg-tip .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.16rem; }
.cg-root.cg-tip .cg-eyebrow { letter-spacing: 0.168em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-tip .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0133em; }
.cg-root.cg-tip .cg-grid-3 { gap: clamp(1.05rem, 2.48vw, 1.99rem); }
.cg-root.cg-tip .cg-table caption { letter-spacing: 0.029em; font-weight: 700; }
.cg-root.cg-tip .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tip .cg-table td:first-child { font-weight: 600; letter-spacing: -0.004em; }
.cg-root.cg-tip .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.04rem; }
.cg-root.cg-tip .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'County Tipperary, a single council area since the former North and South Riding councils merged, Census 2022 (CSO Tipperary releases): population 167,895, up 8,342 (5 percent) since 2016; 84,256 female and 83,639 male, 99 males per 100 females; average age 40.3 against 38.6 in 2016; 33,286 children aged 15 and under. Birthplace: 100,745 people (60 percent) born in the county, 42,013 (25 percent) elsewhere in the State and 24,223 (15 percent) outside the State, up from 13 percent in 2016. Towns (F1013): Clonmel 18,369 at 986.8 per sq km over 18.6 sq km, registered by the CSO as "Clonmel, Counties Tipperary & Waterford" because its built-up area crosses the county line; Nenagh 9,895 at 1,143.5 over 8.7 sq km; Thurles 8,185 at 1,362.1 over 6.0 sq km. Local electoral areas (F1016): Clonmel 25,003, Nenagh 23,354, Thurles 19,980. Among places of at least 500 people, Newport is youngest at average age 34.5 and Clogheen oldest at 43.4. Citizenship: non-Irish citizens 9 percent of the county, largest groups Polish 3,255, UK 2,926, Romanian 1,187, Lithuanian 848; dual Irish citizens up from 2,329 in 2016 to 3,904. Irish language: 66,003 people aged three and over could speak Irish, an increase of 612, which is 43 percent of that population against 43.6 percent in 2016, with no Gaeltacht area in the county. Education: third level qualifications up from almost 34,900 in 2016 to slightly more than 43,200, a rate of 38 percent against 45 percent nationally. Work and travel (Profile 7): more than 73,200 at work; more than 47,300 never working from home against almost 17,700 who do at least some of the time, 24 percent of the workforce against 32 percent nationally, including almost 3,900 five days a week, 3,068 one day and 2,553 two days; 65,656 travelling to work, of whom 44,595 drive, 528 take the bus, "a rate of 1%, the lowest in the country", and 312 the train; average journey time 27.1 minutes against 25.6 in 2016; manufacturing the largest sector at more than 10,400 workers. Schools and sites: Presentation Secondary school, Clonmel, the only Tipperary entry on the gov.ie first-phase Leaving Certificate Computer Science list of 4 January 2018, quoted with the department\'s own lower-case spelling; TUS Thurles Campus, Nenagh Road, eircode E41 PC92, and TUS Clonmel Campus, eircode E91 D896; the Rock of Cashel, described by the Office of Public Works as possessing "the most impressive cluster of medieval buildings in Ireland", including a round tower, a high cross, a Romanesque chapel, a Gothic cathedral, an abbey, the Hall of the Vicars Choral and a fifteenth-century Tower House, at eircode E25 KX44.',
    localProject: 'The difference between no data and no permission. Tipperary County Council\'s publisher page on data.gov.ie states zero datasets, read 16 September 2026. Its two open data pages on its own site returned a bot-protection block page instead of content on every attempt, stating that access was refused and that the site uses a security service to protect itself from online attacks. No attempt was made to work around that block and no content behind it is claimed. The project therefore contains no downloaded file. Learners produce a written record instead: what was sought, where, what was returned, an exact quotation of the refusal, the alternative source used with its licence, and a paragraph separating what could be answered from what could not. The teaching point is that absent and forbidden are different findings, that a block is a statement of terms by the owner rather than an obstacle to be defeated, and that documenting an obstacle and proposing a legitimate route is what distinguishes professional research from a workaround that becomes somebody else\'s problem later.',
    requiredMentions: [
      '167,895',
      '18,369',
      '9,895',
      '100,745',
      '33,286',
      '66,003',
      '44,595',
      '27.1 minutes',
      'E41 PC92',
      'E91 D896',
      '43,200',
      '10,400'
    ],
    sources: [
      { claim: 'CSO Tipperary summary press statement, 30 May 2023: "the population of Tipperary grew by 5% to 167,895, which means the number of people in the county rose by 8,342 between April 2016 and April 2022"; "84,256 were female and 83,639 were male"; average age 40.3 against 38.6; "There were 33,286 children aged 15 and under in Tipperary in April 2022."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultstipperary/' },
      { claim: 'CSO Profile 1 Tipperary: "Clonmel was the largest town, with a population of 18,369 in April 2022"; Newport the youngest town at average age 34.5 and Clogheen the oldest at 43.4; 60 percent (100,745) born in the county, 25 percent (42,013) elsewhere in the State and 15 percent (24,223) outside it.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementstipperary/' },
      { claim: 'CSO PxStat table F1013: the Clonmel row is labelled "Clonmel, Counties Tipperary & Waterford", population 18,369 at 986.8 per sq km over 18.6 sq km; Nenagh 9,895 at 1,143.5 over 8.7 sq km; Thurles 8,185 at 1,362.1 over 6.0 sq km. Table F1016: Clonmel LEA 25,003, Nenagh LEA 23,354, Thurles LEA 19,980.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/F1013/JSON-stat/2.0/en' },
      { claim: 'CSO Profile 5 Tipperary: non-Irish citizens 9 percent of the county, Polish 3,255, UK 2,926, Romanian 1,187, Lithuanian 848; dual Irish citizens up from 2,329 in 2016 to 3,904.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligiontipperary' },
      { claim: 'CSO Profile 7 Tipperary: "There were more than 73,200 people at work in Tipperary in April 2022. More than 47,300 never worked from home, while almost 17,700 people worked from home at least some of the time"; "There were 65,656 people travelling to work in the county"; 44,595 driving; "There were 528 people travelling by bus, a rate of 1%, the lowest in the country"; 312 by train; average journey time 27.1 minutes against 25.6 in 2016; "Manufacturing accounted for the largest number of workers in the county at more than 10,400."', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutingtipperary/' },
      { claim: 'CSO Profile 8 Tipperary: "The number of people (aged three and over) who could speak Irish in Tipperary increased by 612 to 66,003 in Census 2022. This was 43% of the county\'s population aged three and over"; third level up from almost 34,900 in 2016 to slightly more than 43,200, a rate of 38 percent against 45 percent nationally.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationtipperary' },
      { claim: 'Department of Education, 4 January 2018: the first-phase Leaving Certificate Computer Science list includes "Presentation Secondary school / Clonmel, Co. Tipperary", the only Tipperary entry, reproduced with the source\'s own lower-case spelling.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Technological University of the Shannon contact page: "TUS Thurles Campus, Nenagh Road, Thurles, Co. Tipperary E41 PC92" and "TUS Clonmel Campus... Clonmel, Co. Tipperary E91 D896".', url: 'https://tus.ie/contact-us/' },
      { claim: 'Office of Public Works, Heritage Ireland: the Rock of Cashel "possesses the most impressive cluster of medieval buildings in Ireland. Among the monuments to be found there is a round tower, a high cross, a Romanesque chapel, a Gothic cathedral, an abbey, the Hall of the Vicars Choral and a fifteenth-century Tower House", at "St. Patrick\'s Rock of Cashel, Cashel, Co. Tipperary, E25 KX44".', url: 'https://www.heritageireland.ie/places-to-visit/rock-of-cashel/' },
      { claim: 'data.gov.ie, Tipperary County Council publisher page: "Datasets 0. Total Views 0 ... No results."', url: 'https://data.gov.ie/organization/tipperary-county-council' },
      { claim: 'Tipperary County Council\'s own open data pages returned a bot-protection block page on every attempt on 16 September 2026, stating that access was refused and that the site uses a security service to protect itself from online attacks. No content behind the block is claimed and no attempt was made to circumvent it.', url: 'https://www.tipperarycoco.ie/information-technology/geographic-information-systems-data-access/tipperary-county-council-open' }
    ],
    rejectedClaims: [
      'Any description of what Tipperary County Council\'s own open data pages contain: they returned a block page, so their contents are unknown.',
      'The F1010 totals-that-are-also-rows doubling trap, which the County Kerry page already carries.',
      'A county land area or population density figure for Tipperary: the CSO publishes density only at electoral division and town level.',
      'Any county-to-county commuting destination figure: no such table was found at a primary source.',
      'An address for the well known Clonmel drinks manufacturer: its own site did not resolve when checked, and addresses are not taken from third parties.',
      'Treating Clonmel\'s 18,369 as a wholly Tipperary figure: the CSO registers the built-up area as spanning Tipperary and Waterford.'
    ]
  }
};
