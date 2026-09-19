'use strict';
// Bishopstown, Cork (cg- district page, Ireland cluster, Phase 6). Named sources only (owner rule
// for districts), read 20 September 2026: Cork City Council open data "Library" (data.corkcity.ie,
// Cork City Libraries CSV, 10 branches, modified 30 May 2025); Cork City Libraries' Bishopstown
// Library page; Bishopstown Community School's own site. Spine: opening hours are data written as
// text; parse them, keep the exceptions, and define what "open" means. Scratchpad bsh/hours.py.
// CSV has Opening_Hours_Monday to _Saturday, no Sunday field. 50 open day-entries in 11 formats
// (shapes with digits as 9: '99.99 a.m. - 9.99 p.m' x10, '99.99 a.m. to 9.99 p.m' x6,
// '99.99 a.m. - 9.99 p.m.' x6, en dash forms x5 and x5, '9:99am-9:99pm' x5, '99.99am - 9.99pm .'
// x5, '99am - 9pm' x4, '99.99 am - 9.99 pm' x2, '9.99 pm - 9.99 pm' x1, '99am- 9pm' x1). Regular
// weekly hours: Cork City Library 45.0, Bishopstown 45.0, Ballyphehane 40.0, Ballincollig 40.0,
// Glanmire 40.0, Hollyhill 37.5, Blackpool 32.5, Frank O'Connor 32.5, Blarney 32.5, one branch
// 14.0 (not named: lowest in a ranking); mean 35.9. Bishopstown notes: Wednesday "10.30 a.m. on
// the first Wednesday of each month"; Thursday "with later closing at 8:00 p.m. on Thursdays
// (September to June)". So 45.0 regular, 47.5 in weeks September to June, 44.5 in a first-week
// of July/August. Library page: staffed Monday to Saturday 10.00 am to 5.30 pm; My Open Library
// Monday to Sunday 8.00 am to 10.00 pm for registered members = 98 hours; Thursday late closing
// not mentioned on the page. MTU facts are owned by the Cork city page and not used.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'BISHOPSTOWN', blurb: 'One library\'s opening hours written eleven ways across a council file, and a week that is 45 hours long or 98, depending on what open means.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-bishopstown-cork',
  code: 'bsh',
  accent: '#5A3B2B',
  accentRationale: 'Bishopstown: a library-shelf brown from the widened solver search, clear of the Athlone and Castletroy browns',
  pageType: 'district',
  place: {
    name: 'Bishopstown',
    eyebrow: 'Bishopstown, Cork',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Cork City' },
      { type: 'AdministrativeArea', name: 'County Cork' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-cork', name: 'Cork' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Cork', href: '/best-coding-class-in-cork' },
    { label: 'Douglas', href: '/coding-classes-in-douglas-cork' }
  ],
  routeLabel: 'Bishopstown, Cork, Ireland',
  title: 'Coding Classes in Bishopstown, Cork | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Bishopstown learners aged 6 to 67, in small same-level groups or one to one. Your first lesson costs nothing.',
  ogDescription: 'Coding and AI classes for Bishopstown, with a data project on library opening hours written as text and what counts as open.',
  twitterDescription: 'Live online coding, Python, AI and maths for Bishopstown, ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Bishopstown',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Bishopstown, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Bishopstown',
  capsuleQ: 'What are the best coding classes in Bishopstown?',
  capsule: 'Bishopstown learners are taught live on video by a teacher, in a small group at one level or on their own, usually two lessons a week, and anyone from six to sixty-seven can enrol. No travel is needed. The first lesson costs nothing; each month after that is USD 100 in a group or USD 150 for one-to-one lessons.',
  lead: 'Cork City Council publishes its ten library branches as open data, with a column for each weekday\'s opening hours. How many hours a week is Bishopstown Library open? The file holds the answer as text, and across the branches the same kind of fact is written in 11 different formats, from "10.00 a.m. - 5.30 p.m" to "9:30am-5:30pm" to "10am - 6pm". Bishopstown\'s own entries add footnotes inside the times. Parse them carefully and the regular week comes to 45 hours; read the library\'s web page and members of its self-service scheme can use the building 98 hours a week. This page teaches a learner to turn text into numbers without losing the parts that do not fit.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Bishopstown.',

  picks: {
    eyebrow: 'Courses for Bishopstown',
    h2: 'Four first courses for Bishopstown',
    intro: 'Let the age band suggest where to start; the free first lesson is when the teacher confirms the level or recommends another course.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and a timetable game: reading times from a board and adding up how long something stays open.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python strings: finding numbers inside text and turning 5.30 p.m. into 17.5 hours.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Patterns in Python for messy real text: times, ranges, split sessions and the exceptions that do not fit.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who clean spreadsheets full of free text and need numbers they can defend.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How long is the library open? Turning written hours into numbers',
      intro: 'The data is Cork City Council\'s open file of its library branches, with one text field per weekday from Monday to Saturday. The program reads every field, recognises the time ranges inside it, and adds them up.',
      body: [
        { kind: 'table', caption: 'Bishopstown Library: one question, several honest answers', head: ['Which hours', 'Hours a week', 'Source'], rows: [
          ['Regular hours in the council file', '45', 'Monday to Saturday, 10:00 to 17:30'],
          ['Weeks from September to June', '47.5', 'Later closing at 8:00 p.m. on Thursdays'],
          ['A first week of the month in summer', '44.5', 'Opening at 10.30 on the first Wednesday'],
          ['Self-service access for registered members', '98', 'Library page: 8.00 am to 10.00 pm, seven days']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Eleven ways to write a time', p: 'Across the 50 day-entries in the file where a branch is open, the hours appear in 11 different formats: dots or colons, a.m. with or without full stops, hyphens, en dashes or the word to, and sometimes a stray full stop at the end. A pattern that expects one format silently skips the rest.' },
          { h3: 'Split days', p: 'Several branches close for lunch, so one day holds two ranges, such as a morning session and an afternoon one separated by a comma. The program has to find every range in a field and add them, not just the first.' },
          { h3: 'Footnotes inside the data', p: 'Bishopstown\'s Wednesday field adds that it opens at 10.30 a.m. on the first Wednesday of each month, and its Thursday field adds later closing at 8:00 p.m. from September to June. Those are not ranges to add; they are exceptions to keep.' }
        ] },
        { kind: 'callout', h3: 'Parse what you can, keep what you cannot', p: 'Free text almost never parses completely. A good program pulls out every value it can recognise, sets aside everything it cannot, and reports both, rather than guessing or dropping the leftovers quietly. Before any of that, it needs a definition: open to whom, staffed or self-service, in which season. Bishopstown\'s honest answer runs from 44.5 to 98 hours a week, depending on the question.' },
        { kind: 'p', text: 'The learner\'s program reads the council\'s CSV and checks its columns first, which shows there is no Sunday field at all, so Sunday is unknown in this file rather than closed. For each weekday it looks for a time range with a pattern that accepts every format found: an hour, optional minutes after a dot or colon, an optional a.m. or p.m. in any spelling, a hyphen, en dash or the word to, and the same again. It converts each end to decimal hours, adds the ranges for the day, and whatever text is left over goes into a notes list. Across the ten branches the regular weeks come out between 14 and 45 hours, with Bishopstown level with the central library at 45. Finally the program compares the council file with the library\'s own page, which describes staffed hours and a separate self-service scheme, and does not mention the later Thursday closing.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two official sources', p: 'The council\'s file was last updated in May 2025; the library\'s page is live. They agree on 10.00 to 5.30 from Monday to Saturday and differ on the details. When two official sources disagree, say which one each number came from.' },
          { h3: 'What open means', p: 'Staffed hours tell you when to find a librarian. Self-service hours tell a registered member when the doors open. A total without a definition answers neither question well.' },
          { h3: 'Holidays', p: 'The library page adds that the branch is closed on public holidays and bank holiday weekends, while registered self-service members can still visit. No weekly total captures that on its own.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Bishopstown, named',
      h2: 'Bishopstown by its library and its school',
      intro: 'Each fact is taken from the organisation it describes.',
      body: [
        { kind: 'table', caption: 'Named places in Bishopstown', head: ['Place', 'What its own source says'], rows: [
          ['Bishopstown Library', 'Wilton, Cork, T12 RR84'],
          ['Library bus routes', '208, 214 and 219'],
          ['Self-service hours', '8.00 am to 10.00 pm, Monday to Sunday'],
          ['Bishopstown Community School', 'Westgate Road, Bishopstown, Cork']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Inside the library', p: 'The library lists a 3D printer, community rooms, self-service kiosks, charging stations, a hearing loop and wheelchair access, and the council file adds a PC with voice recognition software and some PCs with large keyboards and trackball mice.' },
          { h3: 'Self-service', p: 'Its web page says My Open Library access is available to registered members from 8.00 am to 10.00 pm every day, and that those members can continue to visit on public holidays and bank holiday weekends.' },
          { h3: 'The school', p: 'Bishopstown Community School gives its address as Westgate Road, and its website carries sections on its Deaf Facility, Irish Sign Language and adult education.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is given for Bishopstown, because the page prints only what named bodies publish about the place. The hours are those published by Cork City Council and the library at the dates shown, and they change; check with the library before a visit.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'A week for a learner in Bishopstown',
      intro: 'Usually two lessons a week, each one taught live by the teacher throughout.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'The youngest learners start with block code and time-telling games that add up how long things last.' },
          { h3: 'Teenagers', p: 'Teenage learners go on to Python, web building, AI projects and genuine council files, where text must become numbers before the maths begins.' },
          { h3: 'Adults', p: 'Adults can start from scratch; the first lesson finds the course.' }
        ] },
        { kind: 'p', text: 'Branch hours are Cork City Council\'s open data and the Bishopstown Library page; the parsing, weekly totals and format counts are our own work from 20 September 2026. School details come from the school\'s own website.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From reading a clock to parsing text',
    intro: 'The bands are a guide; lesson one decides the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'How long is it open?', p: 'Block-coded games that read a start and an end time and count the hours between.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Numbers in words', p: 'Python that finds numbers hidden in sentences and converts them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Patterns and leftovers', p: 'Regular expressions on real council text, with exceptions kept rather than dropped.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Cleaning at work', p: 'Turning free-text fields in business files into numbers with an audit trail.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how many hours the library opens',
    intro: 'It will give one number. The question needs more than one.',
    p1: 'Paste the Bishopstown row into an AI assistant and ask for its weekly opening hours, and it will probably answer 45, which is the regular staffed figure. It may skip the September to June Thursdays, the first Wednesday of the month and the self-service scheme altogether, because a single number is what the question seemed to want.',
    p2: 'The learner who has built this project asks which hours are meant, asks the assistant to list anything in the field it could not turn into a number, and checks the file against the library\'s own page. The assistant does the tedious parsing; the learner decides what the answer should mean.',
    closer: 'Text that looks like data usually hides a few exceptions. Code that keeps them is code you can trust.',
    blogAnchor: 'coding as a skill that outlasts any single AI tool'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Bishopstown',
    intro: 'Quickly.',
    cells: [
      { h3: 'Taught in real time', p: 'Every lesson is live, with the teacher checking each learner\'s code and helping as they go.' },
      { h3: 'Level first', p: 'Groups of five to ten learners at the same level, from Bishopstown, around Ireland or abroad.' },
      { h3: 'Regular slots', p: 'Two fixed days each week, around eight lessons a month.' },
      { h3: 'Term planning', p: 'Holidays, mid-terms and exam periods are built into the course plan.' },
      { h3: 'At home', p: 'A laptop or desktop, a microphone, headphones or speakers, and a connection strong enough for video.' },
      { h3: 'Private teaching', p: 'Lessons for a single learner, for anyone moving faster than the groups, needing a slower pace, or only free outside group times.' }
    ],
    spec: { title: 'Nothing to visit', p: 'We have no premises in Bishopstown, in Cork or anywhere in Ireland. Lessons are live on video and identical from any home.' }
  },

  fees: {
    h2: 'Fees for Bishopstown',
    intro: 'Straight to it.',
    first: 'A free opening lesson with a level check.',
    group: 'A month in a group of five to ten at one level, around eight live lessons.',
    private: 'A month of one-to-one lessons at the same frequency.',
    closer: 'Families outside India all pay the same fee in US dollars, a month at a time. Booking the free lesson is not an agreement to continue; payment begins with the course itself, and our pricing page answers the usual questions on holiday weeks, missed sessions and moving from a group to private lessons or back.'
  },

  reviewsH2: 'What families wrote on Google, unchanged',

  book: {
    h2: 'Book a free first lesson in Bishopstown',
    intro: 'Let us know the learner\'s age and interests, and the first lesson will be shaped around them. It might end with a small game, a program that runs, or a messy line of text turned into clean numbers.',
    success: 'Thank you. We will be in touch soon to arrange the lesson.'
  },

  faq: {
    h2: 'Bishopstown coding class questions',
    intro: 'What Bishopstown families ask most.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Bishopstown?', a: 'No. We teach live on video and have no premises in Ireland. A learner needs a computer, a microphone and sound, and a reliable connection. The phone number on the page is Indian.', boiler: true },
      { q: 'What is the library hours project?', a: 'The learner reads Cork City Council\'s file of library branches, where opening hours are written as text in 11 different formats, and turns them into weekly totals: 45 regular hours for Bishopstown, 47.5 in weeks with the later Thursday, and 98 hours of self-service access for registered members.' },
      { q: 'Are these the library\'s current hours?', a: 'They are the hours in the council\'s file and on the library\'s page when we read them, which differ in detail. Hours change, so check with the library before going.' },
      { q: 'Why is there no population figure for Bishopstown?', a: 'The page prints only what named organisations publish about Bishopstown itself, here Cork City Council, the library and the community school, and none of them gives a head count.' },
      { q: 'What times are lessons?', a: 'Weekdays after school through the evening, and weekend daytimes. We schedule in Irish time. Our teachers are in India, which is four and a half hours ahead of Bishopstown in the Irish summer and five and a half in winter, so the times we offer are ones that work in both countries.' },
      { q: 'Are lessons open to adults?', a: 'Yes, up to sixty-seven and at any starting level. Once the free lesson is over, a grown-up learner decides whether a group at their level or teaching on their own suits them better.' },
      { q: 'Will my child be grouped with other Bishopstown children?', a: 'Sometimes, though we build groups around ability rather than area, so the other learners could be in another county or another country.' },
      { q: 'What do coding classes in Bishopstown cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule cost USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched by level, pace and goals rather than age or address. If no group runs at a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Bishopstown',
    html: 'East across the city, <a class="cg-inline-link" href="/coding-classes-in-douglas-cork">Douglas</a> has a project on tide readings, and west along the river <a class="cg-inline-link" href="/coding-classes-in-ballincollig-cork">Ballincollig</a> one on water levels. The <a class="cg-inline-link" href="/best-coding-class-in-cork">Cork</a> page covers the city, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> lists everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bishopstown, Cork and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-cork', label: 'Cork' },
    { href: '/coding-classes-in-douglas-cork', label: 'Douglas' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-bsh .cg-hero-grid { align-items: start; gap: clamp(1.12rem, 3.19vw, 2.52rem); }
.cg-root.cg-bsh .cg-hero h1 { font-weight: 705; letter-spacing: -0.0179em; line-height: 1.07; }
.cg-root.cg-bsh .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.19rem; }
.cg-root.cg-bsh .cg-eyebrow { letter-spacing: 0.132em; font-weight: 635; text-transform: uppercase; }
.cg-root.cg-bsh .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0126em; }
.cg-root.cg-bsh .cg-grid-3 { gap: clamp(1.07rem, 2.85vw, 2.23rem); }
.cg-root.cg-bsh .cg-table caption { letter-spacing: 0.032em; font-weight: 665; }
.cg-root.cg-bsh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bsh .cg-table td:nth-child(2) { font-weight: 650; }
.cg-root.cg-bsh .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-bsh .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Bishopstown, named sources only (owner rule for districts), read 20 September 2026. Cork City Council open data, "Library" (data.corkcity.ie dataset 98f4a10c..., CSV library.csv, metadata_modified 2025-05-30): columns OBJECTID, Administrative_Authority, Name, Address1, Address2, Town, Eircode, Services_Available, Contact_Phone, Contact_Email, Website, Opening_Hours_Monday to Opening_Hours_Saturday (no Sunday column), Latitude, Longitude; 10 branches. Bishopstown row: "Bishopstown Library, Sarsfield Road, Wilton, Cork, T12RR84"; Services_Available "Internet, Wifi, Public Access PCs, Photocopying, Printing, Digital Scanning Facilities, PC with voice recognition software and some PCs have large keyboards and trackball mice."; Monday "10.00 a.m. - 5.30 p.m"; Wednesday "10.00 a.m. - 5.30 p.m, 10.30 a.m. on the first Wednesday of each month"; Thursday "10.00 a.m. - 5.30 p.m.,with later closing at 8:00 p.m. on Thursdays (September to June)". Our arithmetic (bsh/hours.py): 50 open day-entries in 11 format shapes; regular weekly hours 45.0 (Cork City Library and Bishopstown), 40.0 x3, 37.5, 32.5 x3, 14.0; mean 35.9; Bishopstown 47.5 in weeks with the later Thursday, 44.5 in a first week of the month without it. Cork City Libraries, Bishopstown Library page: "Address: Bishopstown Library, Wilton, Cork T12 RR84"; "Staffed Hours : Monday to Saturday 10.00 am - 5.30 pm"; "My Open Library Access is available to registered My Open Library members Monday to Sunday 8.00 am - 10.00 pm" (98 hours a week); "Public Transport: Bus routes 208, 214 and 219"; "Bishopstown Library is closed on Public Holidays and Bank Holiday Weekends Registered My Open Library users can continue to visit Bishopstown Library on Public Holidays and Bank Holiday Weekends"; facilities "My Open Library ... Wheelchair Accessible Charging stations Hublets Loop System Toilet Facilities Self-service kiosks Community Rooms Wi-Fi and Public Internet ... 3D Printer". Bishopstown Community School site: "Westgate Road, Bishopstown, Cork"; menu sections "Deaf Facility", "ISL", "Adult Education".',
    localProject: 'Opening hours are data written as text. From Cork City Council\'s library file, the learner parses each weekday field with one pattern that accepts the 11 formats found, sums split sessions, converts to decimal hours and routes anything unparsed into a notes list, which catches Bishopstown\'s first-Wednesday late opening and September-to-June Thursday late closing. Answers: 45 regular hours, 47.5 in term-time weeks, 44.5 in a summer first week, 98 self-service hours for registered members per the library page; no Sunday column means Sunday is unknown, not closed. Lessons: parse what you can, keep what you cannot; define the question (staffed or self-service); name the source of each number when official sources differ. New family site-wide: PARSING NUMBERS OUT OF FREE TEXT WITH EXCEPTIONS (opening hours parsing had no prior hits; Roermond owns patterns matching letters not meaning, Al Qabil spelling variants, Waterford invisible characters).',
    requiredMentions: [
      '45 hours',
      '98 hours',
      '47.5',
      '44.5',
      '11 different formats',
      'T12 RR84',
      '208, 214 and 219',
      '8.00 am to 10.00 pm',
      'September to June',
      'first Wednesday',
      'Westgate Road',
      '3D printer'
    ],
    sources: [
      { claim: 'Cork City Council, Library open data: ten branches with addresses, services and weekday opening hours as text; no Sunday field.', url: 'https://data.corkcity.ie/dataset/98f4a10c-7a31-49e2-bcd4-961bbbfa62d5/resource/db14a7fc-b9c8-4a24-b3f7-7987070dbb5e/download/library.csv' },
      { claim: 'Cork City Libraries, Bishopstown Library: T12 RR84; staffed hours; My Open Library 8.00 am to 10.00 pm daily for registered members; bus routes 208, 214 and 219; facilities; holiday closures.', url: 'https://www.corkcitylibraries.ie/en/locations/bishopstown-library/' },
      { claim: 'Bishopstown Community School: Westgate Road, Bishopstown, Cork; Deaf Facility, Irish Sign Language and adult education sections.', url: 'http://www.bishopstowncs.ie' }
    ],
    rejectedClaims: [
      'MTU Bishopstown campus facts: the Cork city page owns them.',
      'Naming the branch with the fewest regular hours: not needed, and the owner rule avoids naming the bottom of a ranking.',
      'Bishopstown GAA: its website did not load, so nothing from it is used.',
      'Cork City Council neighbourhood profile tables: census-derived; owner rule for district pages.',
      'Any population figure for Bishopstown.'
    ]
  }
};
