'use strict';
// Tralee (cg- town page, Ireland cluster, Phase 7). Facts from the CSO Census 2022
// town tables for "Tralee, Co Kerry", read 18 September 2026, the Irish Rail
// station page for Tralee Casement and Siamsa Tire's own site. Spine: names are
// data too. The town dimension of the census table carries 868 labels and 16 of
// them contain characters outside ASCII, one being Dingle-Daingean Ui Chuis in
// this county. Every encoding claim on the page was executed in this session
// against that exact label: 24 characters, 25 bytes in UTF-8, misread as Latin-1
// it becomes UA-mangled text, stripped to ASCII it loses a letter, and its NFC
// and NFD forms are unequal at 24 and 25 code points. New family for the cluster:
// text handling and character encoding. Kerry owns the town-list population
// 26,079 and the V92 HD4V eircode, so neither appears here.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'town', tag: 'TRALEE', blurb: 'Sixteen of the 868 town names in one census table break a careless pipeline. A Kerry page about text as data.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'best-coding-class-in-tralee',
  code: 'tre',
  accent: '#2F6B6B',
  accentRationale: 'Tralee: a bay teal from the solver, apart from the Kerry county accent and the Limerick and Cork blues along the coast',
  pageType: 'city',
  place: {
    name: 'Tralee',
    eyebrow: 'Tralee, County Kerry',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'County Kerry' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-county-kerry', name: 'County Kerry' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Kerry', href: '/coding-classes-in-county-kerry' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Tralee, County Kerry, Ireland',
  title: 'Best Coding Class in Tralee | Modern Age Coders',
  description: 'Live online coding, Python and AI lessons for Tralee learners aged 6 to 67, taught live by a teacher in small ability groups or one to one. First lesson free.',
  ogDescription: 'Coding and AI classes for Tralee, with a project on why place names break data pipelines before numbers do.',
  twitterDescription: 'Coding and AI classes for Tralee, ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Tralee',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Tralee, County Kerry, taught live in English.'
  },

  h1: 'Coding classes in Tralee',
  capsuleQ: 'What is the best coding class in Tralee?',
  capsule: 'Tralee holds 25,675 usual residents in the census town tables, living in 10,185 households, 7,622 of which report broadband. The teaching comes to the house over video, twice in most weeks, with a live teacher and either a group of five to ten learners at one stage or nobody else at all, from age six to sixty-seven. The opening lesson costs nothing. A shared place is USD 100 a month afterwards, and private teaching USD 150.',
  lead: 'The census table we use for these pages carries 868 town names, and 16 of them contain a character that is not in the plain English alphabet. One is in this county: Dingle-Daingean Ui Chuis, which the file spells with a fada on the i. Nothing about that is exotic, and it is enough to break a data pipeline written carelessly. Read the file as though it were Latin-1 and the name comes back as mangled punctuation. Strip it to ASCII and a letter vanishes. Compare two versions that look identical on screen and the computer says they differ, because one stores the accent as part of the letter and the other keeps it separately. Every one of those was run against that exact label while writing this page. Numbers get all the attention in data work, and text is where the day is usually lost.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Tralee.',

  picks: {
    eyebrow: 'Course picks for Tralee',
    h2: 'Where Tralee learners begin',
    intro: 'Pick by age and by interest, then let the opening hour with the course teacher settle the level.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects that handle words as carefully as scores.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python from the beginning, where a string and a number stop being the same kind of thing.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 14 to 18', note: 'Text handling in earnest: encodings, files, and names that will not fit in ASCII.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults whose spreadsheets arrive with question marks where letters used to be.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Names are data too',
      intro: 'One census town label, put through four ordinary mistakes. Each line below was executed against the label itself on 18 September 2026, not recalled.',
      body: [
        { kind: 'table', caption: 'What four common errors do to a single place name', head: ['Operation', 'Result'], rows: [
          ['The label as published', 'Dingle-Daingean Ui Chuis, with a fada on the i'],
          ['Counted as characters, then as UTF-8 bytes', '24 characters, 25 bytes, so a byte count is not a letter count'],
          ['Read as Latin-1 instead of UTF-8', 'The accented letter becomes two characters of visual rubbish'],
          ['Forced into plain ASCII', 'Dingle-Daingean U Chuis, one letter silently gone'],
          ['Composed form against decomposed form', '24 code points against 25, and the two are not equal despite looking identical'],
          ['Sorted with a plain sort', 'A name beginning with an accented capital lands after Zoo']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why a join fails', p: 'Match census towns against any other list by name and the 16 accented labels are where it breaks. They do not raise an error; they simply find no partner, so those places quietly disappear from the result and the total looks fine.' },
          { h3: 'Why it works on one machine', p: 'A program that does not state its encoding borrows one from the system it runs on. The same code then reads the same file correctly on one laptop and produces nonsense on another, which is why the encoding belongs in the code rather than in the environment.' },
          { h3: 'Why looking identical is not enough', p: 'An accented letter can be stored as one character or as a letter plus a mark. Both display the same. A comparison, a lookup key and a deduplication all treat them as different, and normalising before comparing is the fix.' }
        ] },
        { kind: 'callout', h3: 'The version of this that matters most is people', p: 'A system that cannot hold a fada cannot hold the names of the people using it. Forms that reject an accent, letters that arrive addressed to a mangled surname, accounts that cannot be found because the search box normalises differently from the database: these are ordinary and they are avoidable. The habit is small. Declare the encoding when reading and writing, normalise before comparing, store text as it was given, and test with a name that is not plain English before shipping anything that takes names at all.',
        },
        { kind: 'p', text: 'The learner\'s project is a checker rather than an essay. It reads the list of 868 town labels, reports how many contain characters outside ASCII, prints those rows, compares each one against its own normalised form, and flags any that would not match themselves. Run on this table it returns 16, and the learner then writes the one-line rule they would put at the top of any file-reading code they write afterwards. It is fifteen minutes of work and it prevents a category of bug that survives into production in real companies.' }
      ]
    },
    {
      id: 'town', tint: '', eyebrow: 'Tralee in the town tables',
      h2: 'The town, counted',
      intro: 'Published for the built-up area Tralee, Co Kerry, in the Census 2022 small area tables.',
      body: [
        { kind: 'table', caption: 'Tralee, Census 2022', head: ['Measured', 'Count'], rows: [
          ['Usual residents', '25,675'],
          ['Households', '10,185'],
          ['Households reporting broadband', '7,622'],
          ['Working residents in the travel table', '10,208'],
          ['Residents travelling to school, college or childcare', '6,277'],
          ['Children under fifteen in childcare', '1,315']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The work journey', p: 'Of 10,208 working residents, 5,066 drive, 1,459 walk, 717 give home as their main answer, 570 travel as a car passenger, 567 by van, 289 cycle, 69 take a bus and 23 a train.' },
          { h3: 'The education journey', p: 'Of 6,277 journeys to school, college or childcare, 3,134 go as a car passenger, 1,244 on foot, 490 by bus, 347 driving and 142 by bicycle.' },
          { h3: 'Home working', p: 'A separate table records 1,974 working residents doing at least some work at home and 6,383 who never do, with the remainder not stating.' }
        ] },
        { kind: 'spec', title: 'The station', p: 'Irish Rail gives Tralee as Casement Station, John Joe Sheehy Road, Tralee, Co. Kerry, Eircode V92 X201. It lists the station as unstaffed, with a booking office from Tuesday to Saturday in the mornings and early afternoon, and toilets opened for twenty minutes before each departure.' }
      ]
    },
    {
      id: 'labels', tint: 'tint', eyebrow: 'The rest of the list',
      h2: 'Sixteen labels out of 868',
      intro: 'The town names in this one census table that carry a character outside the plain English alphabet, grouped by county as the table labels them.',
      body: [
        { kind: 'table', caption: 'Where the accented labels are', head: ['County as labelled', 'Labels'], rows: [
          ['Co Donegal', 'Na Dunaibh, An Fal Carrach, Min Larach, Doiri Beaga, Loch An Iuir, An Clochan Liath, Ailt An Chorrain'],
          ['Co Galway', 'Baile Chlair, Cluain Bu, An Spideal, An Cheathru Rua, Cill Ronain'],
          ['Co Cork', 'Baile Mhic Ire, Beal Atha An Ghaorthaidh'],
          ['Co Kerry', 'Dingle-Daingean Ui Chuis'],
          ['Co Mayo', 'Beal An Mhuirthead']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Written here without their marks', p: 'This table prints the names without their accents on purpose, because the page is about what happens when marks are lost. The source file carries them correctly, and any pipeline that reads it properly will too.' },
          { h3: 'Tralee is not one of them', p: 'The label for this town is plain English letters, which is exactly why a pipeline can run for months looking healthy. The 16 that break it are elsewhere in the same column, including one in this county.' },
          { h3: 'Two per cent of rows is enough', p: 'Sixteen labels in 868 is under two per cent. That is small enough to survive a spot check and large enough to make a national total wrong, which is the combination that keeps this kind of bug alive.' }
        ] },
        { kind: 'spec', title: 'A name with a fada in it', p: 'Siamsa Tire, the theatre and arts centre at Town Park, Tralee, Co Kerry, writes its own name with an accent on the i, and publishes registered charity numbers 20009403 and CHY5842. We have no connection with it, and it is named here because a page about handling names should point at one in the town.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning in Tralee',
      h2: 'What the courses cover',
      intro: 'A weekly hour, a live teacher, and code that has to work on somebody else\'s machine.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Younger learners', p: 'Block coding and first games, where words and numbers are already different kinds of thing.' },
          { h3: 'Teenagers', p: 'Python and web projects that read and write real files, which is where encoding stops being theory.' },
          { h3: 'Adults', p: 'Adult learners take the same Python, data and AI courses; 1,974 working residents here already spend part of the week working at home.' }
        ] },
        { kind: 'p', text: 'Irish Rail and Siamsa Tire are quoted from their own published pages, and neither is connected with us, nor is Kerry County Council. The census counts are Central Statistics Office figures for this built-up area, printed as published. The encoding results on this page were produced by running each operation against the actual census label on 18 September 2026 rather than quoted from memory, which is the same standard we ask of a learner reporting what their own code did.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From words in a program to text in the wild',
    intro: 'Ages are a guide; the opening lesson decides the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Words are things too', p: 'Block projects that store, compare and print names as carefully as scores.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Strings in Python', p: 'Slicing, joining and comparing text, and finding out that length can mean two things.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Files and encodings', p: 'Reading and writing files properly, declaring the encoding, and normalising before comparing.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Systems that hold names', p: 'Building tools that accept the names people actually have, and testing them that way.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Generated code rarely mentions the encoding',
    intro: 'It runs on the machine that wrote it.',
    p1: 'Ask a model for code that reads a data file and the usual answer opens the file with no encoding stated. On a modern machine that often works, and on a colleague\'s laptop or a server with different defaults the same code reads accented names as nonsense. The failure appears later, in a report, and rarely points back at the line that caused it.',
    p2: 'A learner who has run this project reads the generated code, adds the encoding, adds the normalisation before any comparison, and tests with a name that has an accent in it. That is a small edit and it is the difference between code that works and code that works everywhere.',
    closer: 'Producing code is now cheap. Knowing the three lines it is missing is the part a person still supplies.',
    blogAnchor: 'why coding still repays the hours'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Practical points for Tralee households',
    intro: 'Six lines.',
    cells: [
      { h3: 'A live teacher', p: 'Present for the whole lesson, watching the work and correcting it as it is written.' },
      { h3: 'Grouped by level', p: 'Five to ten learners at one stage, joining from Tralee, the rest of Ireland and beyond.' },
      { h3: 'Two lessons weekly', p: 'About eight a month, in an hour agreed at the start and then kept.' },
      { h3: 'Around the school year', p: 'Mid-terms, holidays and exam weeks are planned in before the first lesson.' },
      { h3: 'Equipment', p: 'A computer with a keyboard, sound that carries, and a connection that holds video.' },
      { h3: 'Private teaching', p: 'When the level and the timetable cannot both be satisfied in a group, we teach the course privately instead.' }
    ],
    spec: { title: 'Names spelled the way you spell them', p: 'If a learner or a parent has an accent or a fada in their name, it goes into our records as written. That is a low bar, and it is one plenty of systems fail.' }
  },

  fees: {
    h2: 'Tralee class fees',
    intro: 'Three lines, complete.',
    first: 'A full opening lesson, taught and assessed, at no charge.',
    group: 'A month in an ability group of five to ten, about eight live lessons.',
    private: 'A month of one to one teaching on the same weekly pattern.',
    closer: 'Fees are monthly and quoted in US dollars, on the single rate for families outside India, so Tralee sees what Killarney or Ennis sees and no euro list sits beside it. No charge arises before the free hour has produced both a course and a time, and holidays, a missed week and a change of format are each covered on the pricing page.'
  },

  reviewsH2: 'Six of our families, as they wrote it on Google',

  book: {
    h2: 'Book a free Tralee lesson',
    intro: 'Send an age and an interest and we plan the first hour around it, whether that becomes a game, a first program or a file that refuses to read until the encoding is declared.',
    success: 'Thank you. We will be in touch about the Tralee lesson shortly.'
  },

  faq: {
    h2: 'Tralee coding class questions',
    intro: 'What Tralee families ask us first.',
    items: [
      { q: 'How many people live in Tralee?', a: 'The Census 2022 small area tables count 25,675 usual residents in the built-up area of Tralee, in 10,185 households. Our Kerry page quotes the census town list, which counts town populations on a slightly different basis.' },
      { q: 'What is the Tralee data project?', a: 'Learners write a checker that reads the 868 town labels in a census table, reports the 16 carrying characters outside plain English letters, and flags any label that would not match its own normalised form, then write the rule they will apply to every file they read afterwards.' },
      { q: 'Why does a place name break a program?', a: 'Because text is stored as bytes and a program has to be told how to read them. Read with the wrong assumption, an accented letter becomes nonsense; stripped to ASCII it disappears; and two spellings that look identical can compare as different.' },
      { q: 'How do Tralee residents travel to work?', a: 'Of the 10,208 working residents in the travel table, 5,066 drive, 1,459 walk, 717 give working mainly at or from home, 570 travel as a car passenger, 567 by van, 289 cycle, 69 take a bus and 23 a train.' },
      { q: 'What hours do lessons run?', a: 'After school, in the evening and on weekend mornings. The teaching team sits in India, where the working evening begins while Ireland is still mid-afternoon; the gap is four and a half hours in summer, five and a half in winter, and the weekly slot is chosen around it.' },
      { q: 'Do you teach adults in Tralee?', a: 'Yes, to sixty-seven, beginners included. The opening lesson decides whether an adult joins a group at the same stage or is taught one to one.' },
      { q: 'Do the courses use Irish at all?', a: 'Teaching is in English. Irish-language names and text are handled properly in the code we write, which is a different thing and is part of what this page is about.' },
      { q: 'Is there a Modern Age Coders classroom in Tralee?', a: 'No, and we never imply one. Teaching is live over video only, with no premises in Ireland. A learner needs a laptop or desktop, working sound and a steady connection, and the number shown here belongs to India.', boiler: true },
      { q: 'What do coding classes in Tralee cost?', a: 'The first lesson is free. After that a shared place costs USD 100 a month and brings two live lessons a week, about eight monthly, with five to ten learners; one to one on the same schedule is USD 150 a month. Everything is agreed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by ability, pace and goal rather than age or address. Where nothing suitable meets at a workable hour, we teach one to one instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Tralee',
    html: 'The county page is <a class="cg-inline-link" href="/coding-classes-in-county-kerry">County Kerry</a>, with <a class="cg-inline-link" href="/best-coding-class-in-limerick">Limerick</a> and <a class="cg-inline-link" href="/best-coding-class-in-cork">Cork</a> further along the coast and the province of <a class="cg-inline-link" href="/coding-and-ai-classes-in-munster">Munster</a> around them. Online schools are compared on our <a class="cg-inline-link" href="/best-online-coding-classes-ireland">comparison page</a>, and every page here is listed on the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Tralee, Kerry and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-county-kerry', label: 'County Kerry' },
    { href: '/best-coding-class-in-cork', label: 'Cork' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-tre .cg-hero-grid { align-items: start; gap: clamp(1.16rem, 3.3vw, 2.67rem); }
.cg-root.cg-tre .cg-hero h1 { font-weight: 700; letter-spacing: -0.0196em; line-height: 1.056; }
.cg-root.cg-tre .cg-capsule { border-bottom: 5px solid var(--cg-accent); padding-bottom: 1.15rem; }
.cg-root.cg-tre .cg-eyebrow { letter-spacing: 0.167em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-tre .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0141em; }
.cg-root.cg-tre .cg-grid-3 { gap: clamp(1.1rem, 2.72vw, 2.16rem); }
.cg-root.cg-tre .cg-table caption { letter-spacing: 0.029em; font-weight: 700; }
.cg-root.cg-tre .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tre .cg-table td:first-child { color: var(--cg-muted); }
.cg-root.cg-tre .cg-ladder-col { border-right: 5px solid var(--cg-accent); padding-right: 1.12rem; }
.cg-root.cg-tre .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Tralee, the built-up area "Tralee, Co Kerry", CSO Census 2022 Small Area Population town tables, read 18 September 2026. SAP2022T2T1TOWN22: usual residents 25,675, born in Ireland 19,377. SAP2022T15T2TOWN22: households 10,185, broadband 7,622, other 217, none 1,100, not stated 1,246. SAP2022T11T1TOWN22 to work total 10,208: car driver 5,066, on foot 1,459, not stated 1,399, work mainly at or from home 717, car passenger 570, van 567, bicycle 289, bus 69, motorcycle 24, other including lorry 25, train DART or Luas 23; to school, college or childcare total 6,277: car passenger 3,134, on foot 1,244, not stated 838, bus 490, car driver 347, bicycle 142, train 22, work mainly at or from home 39, van 11, other 10, motorcycle 0. SAP2022T11T4TOWN22: 10,208 working persons, 1,974 work from home at least some of the time, 6,383 never, 1,851 not stated. SAP2022T11T5TOWN22: 1,315 children under 15 in childcare, 649 aged 0 to 4 and 666 aged 5 to 14. SAP2022T8T1TOWN22: at work 10,355, students 2,419, retired 3,713, total aged 15 and over 21,299. Encoding facts established by running each operation in this session against the census label for the Kerry town published as Dingle-Daingean Ui Chuis, spelled in the file with a fada: 24 characters against 25 bytes in UTF-8; the UTF-8 bytes read as Latin-1 produce a two-character mangling of the accented letter; encoding to ASCII with errors ignored drops the accented letter entirely; the composed form is 24 code points and the decomposed form 25, and the two are not equal; a plain sort places a name beginning with an accented capital after Zoo. The town dimension of SAP2022T15T2TOWN22 holds 868 labels, of which 16 contain characters outside ASCII: seven in Co Donegal, five in Co Galway, two in Co Cork, one in Co Kerry and one in Co Mayo. Irish Rail, Tralee: "Casement Station, John Joe Sheehy Road, Tralee, Co. Kerry", "Eircode V92 X201", "This station is not staffed", booking office "Tuesday to Saturday: 06:30 - 13:05 only", toilets opened for twenty minutes before each departure. Siamsa Tire: "Town Park, Tralee, Co Kerry", "Registered Charity Number (RCN): 20009403. CHY5842".',
    localProject: 'Names are data too. The town dimension of the census table carries 868 labels and 16 of them contain characters outside ASCII, seven in Donegal, five in Galway, two in Cork, one in Mayo and one in Kerry, the last being the town published as Dingle-Daingean Ui Chuis. Four ordinary mistakes were executed against that exact label while writing the page: counting bytes rather than characters gives 25 against 24; reading UTF-8 bytes as Latin-1 turns the accented letter into visual rubbish; forcing the label into ASCII drops a letter without raising an error; and the composed and decomposed forms, which display identically, compare as unequal at 24 and 25 code points. A plain sort also places an accented capital after Zoo. The consequence is that a join on names loses exactly those 16 places, silently, while the total still looks plausible, and that sixteen in 868 is small enough to pass a spot check and large enough to make a national figure wrong. The learner writes a checker that reads the labels, reports the count outside ASCII, prints those rows and flags any label that would not match its own normalised form, returning 16 on this table. New family for the cluster: text handling and character encoding.',
    requiredMentions: [
      '25,675',
      '10,185',
      '7,622',
      '10,208',
      '5,066',
      '1,459',
      '6,277',
      '3,134',
      '1,974',
      '1,315',
      '868',
      'V92 X201'
    ],
    sources: [
      { claim: 'CSO Census 2022 table SAP2022T15T2TOWN22, Tralee, Co Kerry: households 10,185, broadband 7,622, other 217, no internet 1,100, not stated 1,246. The same table\'s town dimension holds 868 labels, 16 of which contain characters outside ASCII, including Dingle-Daingean Ui Chuis in Co Kerry.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T15T2TOWN22/JSON-stat/2.0/en' },
      { claim: 'CSO Census 2022 tables SAP2022T11T1TOWN22, SAP2022T2T1TOWN22, SAP2022T11T4TOWN22, SAP2022T11T5TOWN22 and SAP2022T8T1TOWN22, Tralee: to work 10,208 with car driver 5,066, on foot 1,459, mainly at or from home 717, car passenger 570, van 567, bicycle 289, bus 69, train 23, not stated 1,399; to school, college or childcare 6,277 with car passenger 3,134, on foot 1,244, bus 490, car driver 347, bicycle 142; usual residents 25,675; 1,974 work from home at least some of the time, 6,383 never; 1,315 children under 15 in childcare; at work 10,355, students 2,419, retired 3,713.', url: 'https://ws.cso.ie/public/api.restful/PxStat.Data.Cube_API.ReadDataset/SAP2022T11T1TOWN22/JSON-stat/2.0/en' },
      { claim: 'Irish Rail, Tralee station: "Casement Station, John Joe Sheehy Road, Tralee, Co. Kerry", "Eircode V92 X201"; "This station is not staffed"; booking office "Tuesday to Saturday: 06:30 - 13:05 only"; toilets opened for twenty minutes before each train departs.', url: 'https://www.irishrail.ie/en-ie/station/tralee-casement' },
      { claim: 'Siamsa Tire, theatre and arts centre: "Town Park, Tralee, Co Kerry"; "Registered Charity Number (RCN): 20009403. CHY5842".', url: 'https://www.siamsatire.com/' }
    ],
    rejectedClaims: [
      'Any encoding claim quoted from memory: every operation on the page was executed against the actual census label in this session.',
      'The Irish-language form of Tralee: the Placenames Database served a bot-verification page rather than content, and no substitute source was used.',
      'Any claim about how the CSO stores or serves its files beyond what reading them showed.',
      'The census town-list population of Tralee and the Kerry County Council eircode: the County Kerry page owns both.',
      'Any reason for the town\'s travel shares or its level of non-response.',
      'Reproducing the accented spellings in the sixteen-label table: they are printed without marks deliberately, because the page is about what is lost when marks go missing.'
    ]
  }
};
