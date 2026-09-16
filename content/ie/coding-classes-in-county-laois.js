'use strict';
// County Laois (cg- county page, Ireland cluster, Phase 4). Spine: a catalogue
// of thirty-nine dataset titles with nothing behind the six we opened, and an
// official label with a stray space in it. Deliberately NOT the cross-county
// filter trap, which the Louth and Carlow pages already carry. Facts read at
// primary sources on 16 September 2026: CSO PxStat tables F1010, F1013, F1015
// and F1016 and the Laois summary and Profile 1, 5, 7 and 8 press statements;
// gov.ie's January 2018 LCCS list, where all forty addresses were read and NONE
// is in County Laois; laois.ie; heritageireland.ie for Emo Court and the Rock of
// Dunamase. The National Ploughing Championships are NOT used: their own site
// places the 2026 event at Screggan, Tullamore, County Offaly. Portarlington is
// published as "Portarlington, Counties Laois & Offaly", so its 9,288 is never
// written as a Laois figure, and the Laois-side 4,855 and Offaly-side 4,433 are
// OUR OWN arithmetic, labelled as derived. Dataset finding: Laois County
// Council has 39 dataset titles on the public sector catalogue, and all six we
// queried return an empty resource list and no licence.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'county', tag: 'COUNTY LAOIS', blurb: 'The longest commute in Ireland, and a project on a data catalogue whose entries are empty.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-county-laois',
  code: 'lao',
  accent: '#7A1F4B',
  accentRationale: 'County Laois: a deep berry from the solver, unused elsewhere in the Ireland cluster and clear of both Irish greens',
  pageType: 'governorate',
  place: {
    name: 'County Laois',
    eyebrow: 'County Laois, Leinster',
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
  routeLabel: 'County Laois, Ireland',
  title: 'Coding Classes in County Laois | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across County Laois, from Portlaoise to Mountmellick and Portarlington, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for County Laois, where commuters travel furthest in Ireland, built around a data catalogue with nothing inside its entries.',
  twitterDescription: 'Coding classes across County Laois, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '16 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for County Laois Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across County Laois, taught live in English.'
  },

  h1: 'Coding classes in County Laois',
  capsuleQ: 'What are the best coding classes in County Laois?',
  capsule: 'Laois has the longest average commute in Ireland: 25.3 km each way, taking 32.3 minutes. It is also young, at an average age of 37.3, and growing, up 8% to 91,877 people, with Portlaoise at 23,494 the largest town and the youngest of any town we have written about. Put those together and you have a county where parents are often on the road at the hour a class would start. Ours are live and online at a fixed weekly hour, which a household can build around, for ages 6 to 67, in ability groups of five to ten or one to one. The first lesson costs nothing. After it, a group place is USD 100 a month and private tuition USD 150.',
  lead: 'Laois County Council has thirty-nine datasets listed on the public sector data catalogue, more than several larger counties. Planning applications. Recycling locations. Rateable properties. The register of electors. The sales ledger. Purchase orders. It reads like a county that has taken open data seriously. We opened six of them through the catalogue\'s own interface and every one came back the same way: no attached files at all, and no licence stated. Thirty-nine promises, and behind the six we checked, nothing to download. This is not a scandal, and it is not unusual; catalogues fill up with entries faster than councils can publish the files behind them. But it is the single most useful thing a young data learner can discover early, because the alternative is planning a project around a title and finding out three weeks later. This page teaches that check first, and then gives Laois learners something real to work on.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in County Laois.',

  picks: {
    eyebrow: 'Course picks for County Laois',
    h2: 'Four courses for a commuting county',
    intro: 'Pick by what the learner wants to make. Each begins with one free lesson, taught live at an hour that suits the household, and no card details are asked for.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'First programs in blocks, where a list of places has to be checked before the game will run properly.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python through the Junior Cycle years, with the habit of opening a file before believing anything about it.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Catalogue entries with nothing inside them, labels with stray spaces, and the checks that catch both.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'For commuters and home workers: scripts that fetch a source, confirm it is real and complain loudly when it is not.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The county today',
      h2: 'Young, growing and on the road',
      intro: 'Laois sits in the middle of the country, which shapes its working life more than anything else about it.',
      body: [
        { kind: 'table', caption: 'County Laois in Census 2022, Central Statistics Office', head: ['Measure', 'Figure'], rows: [
          ['Population', '91,877, up 8% or 7,180 since 2016'],
          ['Average age', '37.3 years, up from 35.6 in 2016'],
          ['Average commuting distance', '25.3 km, the longest in the country, taking 32.3 minutes'],
          ['Aged 65 and over', '11,978, an increase of 25% since 2016'],
          ['At work', '39,934 people aged 15 and over, up 6,393 or 19% since 2016'],
          ['Unemployment', '9%, down from 15% in 2016, with participation at 61%, the same as nationally'],
          ['Third-level qualifications', 'Almost 23,000 people, a rate of 39% against 45% nationally']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Portlaoise, and then a gap', p: 'Portlaoise holds 23,494 people entirely within Laois, at 2,485.7 per square kilometre, with an average age of 35.1 and 23.4% aged under 15, the youngest town in this part of the country.' },
          { h3: 'A town in two counties', p: 'Portarlington is published as "Portarlington, Counties Laois and Offaly" with 9,288 people. By our own arithmetic, about 4,855 of it lies in Laois and roughly 4,433 in Offaly.' },
          { h3: 'More men than women', p: 'Laois recorded 46,278 males and 45,599 females, which is 101 males for every 100 females, an unusual balance among Irish counties.' }
        ] },
        { kind: 'p', text: 'The commuting figure is the one that shapes family life here. Laois commuters travel further than anyone else in the country, 23,944 of them by car, and roughly a third of the county lives in a town of ten thousand or more, meaning the rest are spread across villages and countryside. At the same time almost 10,100 people now work from home at least some of the time. A class that starts at a fixed hour in the learner\'s own house fits both halves of that pattern: the parent who has just got home, and the parent who never left.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Computer Science in Laois schools',
      h2: 'No Laois school in the first forty',
      intro: 'We read every address on the Department\'s January 2018 list. None of them is in County Laois.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The finding', p: 'When Leaving Certificate Computer Science started in September 2018, no school in the county was among those named. That is a checked result rather than a gap in our reading.' },
          { h3: 'What it does not say', p: 'Nothing about today. There is no current official list of schools offering the subject, so we describe how it began and stop there.' },
          { h3: 'Where we fit', p: 'We teach the programming, data handling and problem solving the subject assumes, in a weekly live class, and never the assessed work itself.' }
        ] },
        { kind: 'p', text: 'The county compensates in other ways. Emo Court, the great house designed by James Gandon from 1790 and not finished for another seventy years, was restored in the 1960s and given to the people of Ireland in 1994; the Office of Public Works records 350,000 visitors in 2022, making it the most visited heritage site it owns in the Midlands. A few miles away the Rock of Dunamase, whose name comes from Dún Másc, the fort of Masc, was attacked by Vikings in 845, became one of the most important Anglo-Norman fortifications in Ireland, and formed part of Aoife\'s dowry when she married Strongbow in 1170; excavations in the mid-1990s recovered over 5,500 objects. A county with that much recorded history is a good place to teach that records are made by people, and that people leave gaps.' },
        { kind: 'spec', title: 'Who lives here', p: 'Non-Irish citizens make up 10% of the county, led by Polish at 2,298, UK at 1,159, Lithuanian at 712 and Romanian at 569. Dual citizenship nearly doubled to 2,527, most commonly Irish and Polish. In the year before the census, 2,686 people moved into the county, 1,932 of them from elsewhere in Ireland.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Thirty-nine titles, and what is behind six of them',
      intro: 'This is a project about verification rather than analysis, and it takes about twenty minutes. Every learner who does it becomes harder to fool.',
      body: [
        { kind: 'table', caption: 'What we found when we opened the catalogue entries, read 16 September 2026', head: ['Dataset title', 'Files attached', 'Licence stated'], rows: [
          ['Planning applications', 'None', 'None'],
          ['Recycling locations', 'None', 'None'],
          ['Rateable properties', 'None', 'None'],
          ['Register of electors', 'None', 'None'],
          ['Sales ledger', 'None', 'None'],
          ['Purchase orders', 'None', 'None']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why this happens', p: 'A catalogue entry is a record about data, not the data itself. Entries get created when a publishing plan is made, and the files sometimes never follow, or move, or are withdrawn. The title survives either way.' },
          { h3: 'How to check in seconds', p: 'Every catalogue offers a machine-readable view of a record. Look for the resource list. If it is empty, there is nothing to download, whatever the description promises.' },
          { h3: 'Why it matters more than it sounds', p: 'A student who plans a Transition Year project around a title loses weeks. A council officer who cites one in a report has cited nothing. The check costs nothing and the omission is expensive.' }
        ] },
        { kind: 'callout', h3: 'And then a stray space, in an official label', p: 'For the real analysis, learners use the county\'s electoral areas, and immediately meet a smaller problem. The three areas are Portlaoise with 34,603 people, Borris-in-Ossory and Mountmellick with 26,452, and a third whose official label reads "Graiguecullen -Portarlington", with a space before the hyphen where no space belongs. Match that label against a tidy version of the same name and the match fails, silently, in exactly the way place names always do. The fix is to normalise text before comparing it: collapse repeated spaces, trim the ends, and standardise punctuation. The lesson is that official data is typed by people, and people leave fingerprints.' },
        { kind: 'p', text: 'The project ends with a short verification note listing which sources were checked, which were real, and which were titles with nothing behind them. It is the least glamorous artefact a student produces all year, and the one most likely to be used at work.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Verify before you analyse',
      h2: 'Five checks that decide whether a project is possible',
      intro: 'Run these before writing any analysis code, on any dataset, from any publisher.',
      body: [
        { kind: 'table', caption: 'Verifying a source in the first twenty minutes', head: ['Check', 'What you look for', 'What it saves'], rows: [
          ['Is there a file?', 'A resource list with something in it', 'Weeks spent on a title'],
          ['Is there a licence?', 'A stated licence, not silence', 'Publishing work you had no right to publish'],
          ['Does it cover what you need?', 'Dates and areas inside the file, not in the description', 'A year that turns out to be a week'],
          ['Is the text clean?', 'Stray spaces, odd punctuation, inconsistent capitals', 'Matches that fail without an error'],
          ['Can you reach it again?', 'A stable address you can fetch a second time', 'A result nobody can reproduce']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A treasure-hunt game where some of the boxes on the map turn out to be empty, and the program has to say so rather than pretend.' },
          { h3: 'Teenagers', p: 'The real catalogue in Python: check the six entries, normalise a set of area names, and write the verification note.' },
          { h3: 'Adults', p: 'The same routine applied at work, where most reporting failures start with a source that was assumed rather than checked.' }
        ] },
        { kind: 'p', text: 'None of this is a complaint about Laois County Council, which publishes as much as many of its neighbours and more than some. Catalogues run ahead of files everywhere, and the county\'s own contact address, Áras an Chontae on JFL Avenue in Portlaoise at R32 EHP9, is easy enough to write to if a learner wants to ask when a file might appear. That is a perfectly good next step for a school project, and we encourage it.' }
      ]
    },
    {
      id: 'living', tint: '', eyebrow: 'Living in the county',
      h2: 'R32, the motorway and a county in the middle',
      intro: 'Most of what is distinctive about Laois comes from its position: everyone passes through it, and a great many people commute out of it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One routing key', p: 'R32 covers the county\'s published addresses, from the council at Áras an Chontae, R32 EHP9, to Emo Court at R32 C44V.' },
          { h3: 'The furthest commute', p: 'Laois commuters travel an average of 25.3 km, the longest distance of any county, and take 32.3 minutes doing it. That is the practical reason an evening class in a room is difficult here.' },
          { h3: 'Who owns their home', p: '71% of households own, the highest share among the counties we have written about, with a further 24% renting. Families here tend to settle, which suits a course measured in years.' }
        ] },
        { kind: 'spec', title: 'Irish in Laois', p: 'The census recorded 33,538 Irish speakers, 40.2% of everyone aged three and over, down slightly from 41.5% in 2016 and close to the national rate. Our teaching is in English, and programming keywords are English whatever language a school teaches through.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From checking a box is full to verifying a source',
    intro: 'The bands are a guide only; the free lesson decides where a learner begins.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Is it really there?', p: 'Programs that look for something, find nothing, and say so instead of guessing.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Opening files', p: 'Fetching real files, checking they contain rows, and reading what the publisher claims.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Verification and cleaning', p: 'Checking resources and licences, normalising messy text, and writing the note that records it.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Automated checks', p: 'Code that fetches a source, verifies it and fails loudly, before any report depends on it.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An assistant will describe these datasets convincingly. Why should a Portlaoise teenager open them?',
    intro: 'Because a catalogue entry gives a language model plenty to describe, and the file behind it does not have to exist.',
    p1: 'Ask an AI tool what data Laois County Council publishes and it can answer at length, because the titles and descriptions are public and readable. Planning applications, the register of electors, purchase orders: it will list them, and it may well tell you what each contains. What it cannot do, unless it actually fetches them, is tell you that the six we opened carry no files and no licence. The description is the thing that got indexed; the emptiness is only visible to somebody who goes and looks.',
    p2: 'That gap between what is described and what exists is where a great deal of bad analysis is born. The defence is old-fashioned and cheap: open the source yourself before you build anything on it, and write down what you found.',
    closer: 'So a Laois child learning to code in 2026 is learning something more durable than a language. They are learning to ask whether the thing everyone is describing is actually there.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Portlaoise, Mountmellick, Abbeyleix or the Slieve Blooms',
    intro: 'In a county where the average commute is the longest in Ireland, the last thing a family needs is another journey at six in the evening.',
    cells: [
      { h3: 'The lesson comes to the house', p: 'A learner in Durrow and one in Portarlington are in the same group, and no parent drives either of them anywhere.' },
      { h3: 'School stages by their Irish names', p: 'First Year, the Junior Cycle, Transition Year and sixth year, used exactly as they are used locally.' },
      { h3: 'A free lesson with teaching in it', p: 'Real work on a real task, then a recommendation on level, course and hour, with no card details requested.' },
      { h3: 'Ability groups', p: 'Five to ten learners at one level, drawn from Laois and several other countries, so a good hour exists at every stage.' },
      { h3: 'Built around the commute', p: 'Two lessons most weeks, about eight a month, at a fixed hour chosen to fall after the drive home, with pauses agreed for exams and holidays.' },
      { h3: 'Teachers on Indian time', p: 'Their clock never shifts, leaving them four and a half hours ahead of Ireland in summer and five and a half in winter, which covers Laois evenings comfortably.' }
    ],
    spec: { title: 'Why the longest commute matters', p: 'A 25.3 km average each way, and 32.3 minutes of it, means an evening class in Portlaoise costs a family from Rathdowney well over an hour on top of the lesson. Online, the hour that used to be the journey becomes practice time.' }
  },

  fees: {
    h2: 'What classes cost in County Laois',
    intro: 'Three numbers, and nothing else afterwards.',
    first: 'A full lesson free of charge, ending in an honest placement and a recommended course.',
    group: 'A month of teaching, usually eight lessons, with five to ten learners of matching ability.',
    private: 'The same month of about eight lessons, with one teacher working with one learner.',
    closer: 'Fees are charged in US dollars at the one rate used outside India, so Portlaoise pays what Abbeyleix pays and there is no euro list. Nothing is charged until the free lesson has settled a course and a weekly hour, and the pricing page explains pauses, missed lessons and changes of format.'
  },

  reviewsH2: 'Six unedited Google reviews from our families',

  book: {
    h2: 'Tell us where the learner is now',
    intro: 'The first task suits the learner: a searching game for a younger child, a first script that fetches a file, or the catalogue verification exercise for a teenager.',
    success: 'Thank you. Somebody will contact you about your County Laois class shortly.'
  },

  faq: {
    h2: 'County Laois coding class questions',
    intro: 'The county, its data and how the classes run.',
    items: [
      { q: 'How many people live in County Laois?', a: 'Census 2022 counted 91,877, up 8% or 7,180 since 2016, with an average age of 37.3. Portlaoise is the largest town at 23,494.' },
      { q: 'Is it true Laois has the longest commute in Ireland?', a: 'Yes. The statistics office recorded an average commuting distance of 25.3 km, the longest in the country, with an average journey time of 32.3 minutes.' },
      { q: 'Did any Laois school offer Leaving Certificate Computer Science from the start?', a: 'No. We read all forty addresses on the January 2018 first-phase list and none is in County Laois. That describes 2018 only; no current official list exists.' },
      { q: 'What is the Laois data project?', a: 'Students check whether published datasets actually contain anything. The county has thirty-nine titles listed, and the six we opened had no files attached and no licence stated, which is a lesson in verification before analysis.' },
      { q: 'Is that a criticism of the council?', a: 'No. Catalogues everywhere run ahead of the files behind them. The point for a learner is to check first rather than assume, and writing to the council to ask when a file might appear is a perfectly good project step.' },
      { q: 'Why is Portarlington counted differently?', a: 'Because its built-up area crosses into County Offaly, so the statistics office publishes it as Portarlington, Counties Laois and Offaly, with 9,288 people in total.' },
      { q: 'What hours do classes run?', a: 'Afternoons, evenings and weekend mornings, with evening slots most popular here because of the commute. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.' },
      { q: 'Is there a Modern Age Coders classroom in Laois?', a: 'No, and we never imply one. All teaching is live online, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a reliable connection, and the number shown here is an Indian one.', boiler: true },
      { q: 'What do County Laois coding classes cost?', a: 'The first lesson is free. Continuing costs USD 100 a month for a group place, covering two live lessons a week and about eight a month with five to ten learners, or USD 150 a month privately on the same schedule. Everything is settled before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable runs at a workable hour, we offer one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'The neighbours, and the national page',
    html: 'Carlow town reaches into this county, and <a class="cg-inline-link" href="/coding-classes-in-county-carlow">County Carlow</a> has its own page, as does <a class="cg-inline-link" href="/coding-classes-in-county-louth">County Louth</a>. The nearest city page is <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a>. For comparing online schools there is <a class="cg-inline-link" href="/best-online-coding-classes-ireland">best online coding classes in Ireland</a>, and everything else sits on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'County Laois and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-carlow', label: 'County Carlow' },
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-lao .cg-hero-grid { align-items: start; gap: clamp(1.22rem, 3.05vw, 2.6rem); }
.cg-root.cg-lao .cg-hero h1 { font-weight: 700; letter-spacing: -0.0225em; line-height: 1.045; }
.cg-root.cg-lao .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.22rem; }
.cg-root.cg-lao .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lao .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0115em; }
.cg-root.cg-lao .cg-grid-3 { gap: clamp(1.08rem, 2.5vw, 1.98rem); }
.cg-root.cg-lao .cg-table caption { letter-spacing: 0.038em; font-weight: 700; }
.cg-root.cg-lao .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lao .cg-table th { letter-spacing: 0.012em; }
.cg-root.cg-lao .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-lao .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'County Laois, Census 2022 (CSO): population 91,877, up 8 percent or 7,180 since 2016, with 46,278 male and 45,599 female, 101 males for every 100 females; average age 37.3, up from 35.6; those aged 65 and over up 25 percent to 11,978; 71 percent of households owning and 24 percent renting; 39,934 people aged 15 and over at work, up 6,393 or 19 percent; unemployment 9 percent against 15 percent in 2016; labour force participation 61 percent, the same as nationally; commuters travelling an average of 25.3 km, the longest distance in the country, with an average journey of 32.3 minutes and 23,944 driving; almost 10,100 people working from home at least some of the time. Towns: Portlaoise 23,494 wholly within Laois, density 2,485.7 per sq km across 9.5 sq km, average age 35.1 and 23.4 percent aged under 15; Portarlington published as "Portarlington, Counties Laois & Offaly" at 9,288, density 1,679.4 per sq km, average age 35.4 and 24.4 percent under 15; Mountmellick 4,905. F1010 records 28,349 people, about 31 percent of the county, in towns of 10,000 or more. DERIVED, not published: Portarlington\'s Laois side is 4,855 and its Offaly side 4,433. Local electoral areas: Portlaoise 34,603, the CSO\'s own label "Graiguecullen -Portarlington" at 30,822 with an irregular space before the hyphen, and Borris-In-Ossory-Mountmellick at 26,452. Citizenship: non-Irish citizens 10 percent, Polish 2,298, UK 1,159, Lithuanian 712, Romanian 569; dual citizenship 2,527, up from 1,376, most commonly Irish and Polish at 450; 2,686 people moved into the county in the previous year, 1,932 from within Ireland and 754 from outside the State; Catholics 75 percent, down from 83 percent; more than 8,900 with no religion, up 88 percent; 812 Irish Travellers, up 4 percent. Education: almost 23,000 with a third-level qualification, 39 percent against 45 percent nationally. Irish speakers 33,538, 40.2 percent of those aged three and over, against 41.5 percent in 2016. Gov.ie, 4 January 2018: all forty first-phase Leaving Certificate Computer Science addresses were read and none is in County Laois. Laois County Council: Áras an Chontae, JFL Avenue, Portlaoise, R32 EHP9. Office of Public Works: Emo Court at R32 C44V, begun by James Gandon in 1790 and completed some seventy years later, restored in the 1960s and presented to the people of Ireland in 1994, with 350,000 visitors in 2022, the most visited OPW heritage site in the Midlands; the Rock of Dunamase, from Dún Másc meaning the fort of Masc, attacked by Vikings in 845, part of Aoife\'s dowry on her marriage to Strongbow in 1170, with over 5,500 objects recovered in mid-1990s excavations.',
    localProject: 'A catalogue of titles with nothing behind them, and a stray space in an official label. Laois County Council has 39 dataset titles registered on the public sector data catalogue. Six were queried directly through the catalogue API on 16 September 2026: planning applications, recycling locations, rateable properties, the register of electors, the sales ledger and purchase orders. Every one returned an empty resource list and a null licence, so there is no file to download and no licence to quote for any of them. The teaching point is verification before analysis: a catalogue entry is a record about data, not the data itself. The second, smaller trap is in CSO table F1016, where the county\'s middle electoral area is labelled "Graiguecullen -Portarlington" with a space before the hyphen, so matching it against a tidily written version of the same name fails silently unless text is normalised first by collapsing repeated spaces, trimming ends and standardising punctuation. The National Ploughing Championships were considered and excluded: their own site places the 2026 event at Screggan, Tullamore, County Offaly, not in Laois.',
    requiredMentions: [
      '91,877',
      '23,494',
      '9,288',
      '4,433',
      '34,603',
      '2,298',
      '11,978',
      '25.3 km',
      '33,538',
      'R32 C44V',
      'Emo Court',
      'Dunamase'
    ],
    sources: [
      { claim: 'CSO summary results, Laois: "The population of Laois grew by 8% to 91,877"; "The average age of Laois\'s population in April 2022 was 37.3 years"; 101 males for every 100 females; those aged 65 and over up 25% to 11,978; 39,934 at work, up 19%; 71% owning and 24% renting.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensusofpopulation2022-summaryresultslaois/' },
      { claim: 'CSO Profile 7, Laois: "Commuters in the county were travelling for an average distance of 25.3km, the longest in the country"; average journey 32.3 minutes; 23,944 driving to work; unemployment 9% against 15%; participation 61%, the same as nationally; almost 10,100 working from home at least some of the time.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile7-employmentoccupationsandcommutinglaois/' },
      { claim: 'CSO Profile 1, Laois: "Portlaoise was the largest town, with a population of 23,494 in April 2022".', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile1-populationdistributionandmovementslaois/' },
      { claim: 'CSO tables F1013 and F1015: Portlaoise density 2,485.7 per sq km, average age 35.1, 23.4% under 15; Portarlington published as "Portarlington, Counties Laois & Offaly" at 9,288, average age 35.4, 24.4% under 15; Mountmellick 4,905.', url: 'https://data.cso.ie/table/F1013' },
      { claim: 'CSO table F1010: 28,349 people in County Laois lived in towns of 10,000 population and over in April 2022.', url: 'https://data.cso.ie/table/F1010' },
      { claim: 'CSO table F1016: Portlaoise 34,603; the label "Graiguecullen -Portarlington" at 30,822, with an irregular space before the hyphen; Borris-In-Ossory-Mountmellick 26,452.', url: 'https://data.cso.ie/table/F1016' },
      { claim: 'CSO Profile 5, Laois: non-Irish citizens 10% of the county, Polish 2,298, UK 1,159, Lithuanian 712, Romanian 569; dual citizenship 2,527, up from 1,376, Irish-Polish largest at 450; 2,686 people moved into the county in the previous year.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile5-diversitymigrationethnicityirishtravellersreligionlaois/' },
      { claim: 'CSO Profile 8, Laois: third-level qualifications almost 23,000, "a rate of 39% compared with 45% nationally"; 33,538 Irish speakers, 40.2% of those aged three and over against 41.5% in 2016.', url: 'https://www.cso.ie/en/csolatestnews/pressreleases/2023pressreleases/pressstatementcensus2022resultsprofile8-theirishlanguageandeducationlaois/' },
      { claim: 'Department of Education, 4 January 2018: all forty first-phase Leaving Certificate Computer Science addresses were read and none is in County Laois.', url: 'https://www.gov.ie/en/department-of-education/press-releases/minister-bruton-announces-leaving-certificate-computer-science-subject/' },
      { claim: 'Laois County Council: "Áras an Chontae, JFL Ave., Portlaoise, Co. Laois R32 EHP9".', url: 'https://laois.ie/contact-us/' },
      { claim: 'Office of Public Works, Emo Court: address "Emo, Co. Laois, R32 C44V"; Gandon began work in 1790 and the building was not completed for some seventy years; presented to the people of Ireland in 1994; "Emo Court & Parklands received 350,000 visitors in 2022, making it the most visited OPW owned Heritage site in the Midlands Region".', url: 'https://heritageireland.ie/places-to-visit/emo-court-and-estate/' },
      { claim: 'Office of Public Works, Rock of Dunamase: "The name Dunamase originates from the Irish Dún Másc, meaning the Fort of Masc"; "In 845 the dún was attacked by Vikings"; part of Aoife\'s dowry on her marriage to Strongbow in 1170; "over 5,500 objects were recovered" in mid-1990s excavations.', url: 'https://heritageireland.ie/unguided-sites/rock-of-dunamase/' },
      { claim: 'Public sector data catalogue: Laois County Council lists 39 dataset titles, and the six queried on 16 September 2026 each returned an empty resource list and no stated licence.', url: 'https://datacatalogue.gov.ie/organization/laois-county-council' }
    ],
    rejectedClaims: [
      'The National Ploughing Championships as a Laois fact: their own site places the 2026 event at Screggan, Tullamore, County Offaly.',
      'Presenting Portarlington\'s 9,288 as a County Laois figure: the CSO publishes it across Laois and Offaly.',
      'Presenting the 4,855 Laois-side and 4,433 Offaly-side split as published: both are our own subtraction and are labelled as derived.',
      'A county-level density or under-15 share: the CSO publishes neither for Laois, so town figures are used and labelled.',
      'Any claim about which Laois schools teach Leaving Certificate Computer Science today: no current official list exists.',
      'Any claim that the council publishes no data at all: 39 titles exist, and only six were opened, so the finding is stated as exactly that.',
      'The cross-county filter trap used by the Louth and Carlow pages.'
    ]
  }
};
