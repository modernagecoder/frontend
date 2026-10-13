'use strict';
// Geelong (cg- regional city page, Australia cluster Phase 7, row 140). Shaped page (online coding and Python): leads
// with teenagers and adults. Spine: why does a perfectly good government CSV file break the first line of your Python?
// Data: Victorian Department of Education, School Locations 2025 (dv402-SchoolLocations2025.csv, Creative Commons
// Attribution 4.0 International, listed on DataVic), downloaded 7 October 2026. Measured by us on 7 October 2026
// (scratchpad au/r1/gee_bom.py): 534,679 bytes; the first three bytes are EF BB BF, a UTF-8 byte order mark; 2,302
// lines ending in CRLF; 2,301 data rows. Decoded as 'utf-8', the first header is '\ufeffEducation_Sector' (17
// characters, not 16), so row['Education_Sector'] raises KeyError; decoded as 'utf-8-sig' it is 'Education_Sector'.
// Rows with LGA_Name 'Greater Geelong (C)': 85 schools; School_Type Primary 57, Secondary 15, Pri/Sec 8, Special 4,
// Language 1. Address_Town in those rows: 54 distinct spellings that collapse to 36 towns after strip() and
// casefold(); 18 towns are written two ways (for example 'NEWTOWN' 4 rows, 'Newtown' 3 rows); 29 rows give the town in
// capitals. Statewide: 1,303 town spellings, 942 after casefolding; 27 lines where line.split(',') gives the wrong
// number of fields because a quoted value contains a comma (none of them in Geelong rows); 4 school names contain a
// right single quotation mark (U+2019) instead of an apostrophe. Lesson family: text encodings, the UTF-8 byte order
// mark ('utf-8-sig') and normalising text with casefold; screened free site-wide on 7 October 2026 ("byte order mark",
// "utf-8-sig": 0 hits; claimed by AU-R1).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Geelong Significant Urban Area (2008), compared
// with Victoria and Australia: 289,630 people; median age 39; 76,918 families; 127,113 private dwellings; 2.5 people per
// household; separate house 94,723 (86.7%; Victoria 73.4%); flat or apartment 2,616 (2.4%; Victoria 12.1%; Australia
// 14.2%); Professionals 32,821 (23.5%; Victoria 25.0%; Australia 24.0%); Technicians and Trades Workers 20,021 (14.3%;
// Victoria 12.6%); Bachelor Degree level and above 60,585 (25.6%; Victoria 29.2%; Australia 26.3%); aged 15 to 19
// 16,313 (5.6%); aged 20 to 24 18,066 (6.2%). Victorian Government school term dates: 2026 Term 4 Monday 5 October to
// Friday 18 December. IANA tz: Australia/Melbourne daylight saving from the first Sunday in October to the first
// Sunday in April. Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion,
// health; the school file's sector column is not broken down on the page.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'GEELONG', label: 'Geelong', blurb: 'Geelong, a statewide schools file with three invisible bytes at the front, and a Python project on reading real data correctly.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-geelong',
  code: 'geep',
  accent: '#526292',
  accentRationale: 'Geelong: a bay slate blue (HSV saturation 0.44, value 0.57, hue 225), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 6.0:1 on white and 4.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Geelong',
    eyebrow: 'Geelong, Victoria, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Victoria', href: '/coding-and-ai-classes-in-victoria' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Geelong, Victoria',
  title: 'Online Coding and Python Classes in Geelong',
  description: 'Live online Python and coding classes for Geelong teens and adults, built on real Victorian data: files, text, cleaning and projects. Small groups or one to one.',
  ogDescription: 'Python classes for Geelong teens and adults, with a project on the three invisible bytes that break a Victorian schools file.',
  twitterDescription: 'Online Python and coding classes in Geelong, live, first lesson free.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Python and Coding Classes for Geelong Learners',
    description: 'Level-matched online Python, data handling, text processing and AI for teenagers and adults across Geelong and the Bellarine, taught live in English.'
  },

  h1: 'Online coding and Python classes in Geelong',
  capsuleQ: 'What is the best way to learn Python online from Geelong?',
  capsule: 'Work on real files beside a live teacher, since genuine data trips programs up in ways tidy exercises never will. Geelong had 289,630 residents in its urban area at the 2021 Census. Lessons run live on screen, one to one or with a small group at your stage, and the opening session is free.',
  lead: 'The Victorian Department of Education publishes the location of every school in the state as one open CSV file. Ask Python for the column called Education_Sector in that file and, on the first try, you get an error saying it does not exist. It does exist. The file begins with three invisible bytes, EF BB BF, a byte order mark that some programs write at the start of UTF-8 text, and Python has quietly glued them to the front of the first column name. Our Geelong learners find those bytes, fix the problem with one word, and then discover the file\'s second surprise: the 85 Geelong schools list their towns in 54 spellings, because the same town is sometimes written in capitals and sometimes not.',
  wa: 'Hello Modern Age Coders, I would like a free Python class for a learner in Geelong.',

  picks: {
    eyebrow: 'Python course picks for Geelong',
    h2: 'Four Python routes for Geelong teens and adults',
    intro: 'Pick by what you want Python for; the free lesson places you at the right stage. No card details are requested.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first variables to files and text, with real government data from the first month.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Files, encodings, modules and testing, the parts of Python that decide whether real programs work.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults working with data', note: 'Cleaning and checking messy files before anyone draws conclusions from them.' },
      { course: 'pcep-pcap-python-certification-course', band: 'Ages 15 and over', note: 'Python Institute certificate preparation, with every exam topic practised in working code.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Geelong in the Census',
      h2: 'An urban area of 289,630 people beside the bay',
      intro: 'Census 2021 QuickStats for the Geelong Significant Urban Area, printed beside Victoria and Australia as the bureau shows them.',
      body: [
        { kind: 'table', caption: 'How the 2021 Census describes Geelong', head: ['Topic', 'Geelong urban area', 'Across Victoria', 'Across Australia'], rows: [
          ['Residents counted', '289,630', 'Not shown', 'Not shown'],
          ['Middle age of residents', '39', 'Not shown', 'Not shown'],
          ['Family households', '76,918', 'Not shown', 'Not shown'],
          ['Private homes', '127,113', 'Not shown', 'Not shown'],
          ['Occupied dwellings that are separate houses', '94,723, or 86.7%', '73.4%', 'Not compared'],
          ['Professional workers', '32,821, or 23.5%', '25.0%', '24.0%'],
          ['People 15 and over with a bachelor degree or above', '60,585, or 25.6%', '29.2%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Almost all houses', p: '86.7% of occupied dwellings are separate houses and only 2.4% are flats or apartments, against 12.1% across Victoria.' },
          { h3: 'Technical work', p: 'The Census counted 20,021 technicians and trades workers, 14.3% of employed residents, above the state share of 12.6%.' },
          { h3: 'Late teens and early twenties', p: 'Geelong was home to 16,313 people aged 15 to 19 and 18,066 aged 20 to 24 on Census night.' }
        ] },
        { kind: 'p', text: 'A word on accuracy: the ABS lightly randomises small census cells to protect privacy, so pieces of a table may not total the published figure. We use published totals and shares exactly and never manufacture a total by summing rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Why does Python say a column that is clearly there does not exist?',
      intro: 'The Victorian School Locations 2025 file from the Department of Education, read the naive way and then the correct way.',
      body: [
        { kind: 'table', caption: 'What we found in the file (measured by us, 7 October 2026)', head: ['Check', 'Result'], rows: [
          ['File size', '534,679 bytes, 2,301 schools statewide'],
          ['First three bytes', 'EF BB BF, a UTF-8 byte order mark'],
          ['First column name read as utf-8', '\\ufeffEducation_Sector, 17 characters instead of 16'],
          ['First column name read as utf-8-sig', 'Education_Sector'],
          ['Schools in the Greater Geelong council area', '85'],
          ['Town spellings in Geelong rows', '54, which collapse to 36 towns'],
          ['Towns written two ways', '18, for example NEWTOWN in 4 rows and Newtown in 3']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Look at the bytes', p: 'Opening the file in binary and printing the first few bytes shows EF BB BF. No text editor displays them, which is why the bug feels impossible until you look.' },
          { h3: '2. Decode properly', p: 'Reading with encoding=\'utf-8-sig\' tells Python to remove a byte order mark if there is one. The KeyError disappears and the column names are exactly what they appear to be.' },
          { h3: '3. Normalise before counting', p: 'Town names come in capitals and in title case. Stripping spaces and calling casefold() before grouping turns 54 spellings into 36 real towns.' }
        ] },
        { kind: 'callout', h3: 'Two more traps in the same file', p: 'Splitting each line on commas looks simpler than using the csv module, but across the state it gives the wrong number of columns on 27 lines, because some values contain commas inside quotes. None of those lines are Geelong schools, which is exactly why a test on local rows alone would never catch it. And 4 school names statewide use a curly right quotation mark instead of a straight apostrophe, so a search for the straight one misses them.' },
        { kind: 'p', text: 'We took these counts ourselves from the 2025 file, downloaded on 7 October 2026. School types in the Geelong rows are 57 primary, 15 secondary, 8 combined primary and secondary, 4 special and 1 language school. We use the file only to teach reading data correctly and make no claims about any school.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reading real data',
      h2: 'Five checks before you trust a file you did not create',
      intro: 'Practised on the Victorian schools file, then used on spreadsheets, exports and anything someone else produced.',
      body: [
        { kind: 'table', caption: 'From "it opened" to "it is right"', head: ['Check', 'How', 'What it catches'], rows: [
          ['Inspect the first bytes', 'open(path, \'rb\').read(16)', 'Byte order marks and wrong encodings'],
          ['Use a real parser', 'The csv module, never split(\',\')', 'Commas inside quoted values'],
          ['Count columns on every row', 'Compare each row length with the header', 'Broken or shifted lines'],
          ['Normalise text before grouping', 'strip() and casefold()', 'Same value written several ways'],
          ['Test on the whole file', 'Not just the rows you care about', 'Problems that live in other parts of the data']
        ] },
        { kind: 'p', text: 'The last check is the one that surprises learners. Every quoted-comma line in the file belongs to a school outside Geelong, so code tested only on Geelong rows would pass and then fail the day it is run statewide. Testing on the complete file, even when you only need a slice of it, is a habit worth building early.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Read the file three ways, compare the results, and write a short report on what went wrong and why.' },
          { h3: 'University students', p: 'Unicode, encodings and data validation, the background that separates confident programmers from lucky ones.' },
          { h3: 'Adults at work', p: 'Build small checks into the scripts you use on exports, so a strange file announces itself instead of silently corrupting a report.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no tie to the Victorian Department of Education or the ABS. The census figures belong to the bureau and the school list to the department; the byte counts, spelling counts and line counts are measurements we made ourselves.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Geelong',
      h2: 'School terms, summer time and a city by the bay',
      intro: 'A few local details that matter when you write software for Geelong.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term 4 in Victoria', p: 'The Victorian Government lists Term 4 of 2026 as Monday 5 October to Friday 18 December.' },
          { h3: 'Daylight saving', p: 'Victoria moves its clocks forward on the first Sunday in October and back on the first Sunday in April, as recorded in the IANA time zone database.' },
          { h3: 'Fifty-four spellings, thirty-six towns', p: 'The Geelong rows of the schools file name 36 different towns, from Belmont to Ocean Grove, once capital letters stop being counted as different words.' }
        ] },
        { kind: 'spec', title: 'Text and time, the two classic traps', p: 'Encodings and time zones cause more real-world bugs than almost anything else in programming, and Geelong learners meet both early: the schools file teaches the first, and lesson times that shift twice a year relative to India teach the second.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first script to code that survives real files',
    intro: 'Ages are only signposts; the trial lesson finds the actual starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Reading files', p: 'Opening a CSV, printing rows, counting schools by type and noticing when something looks odd.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Text and encodings', p: 'Bytes, characters, UTF-8 and cleaning text, practised on the full statewide file.', courses: ['python-complete-masterclass-teens', 'pcep-pcap-python-certification-course'] },
      { band: 'University', h3: 'Robust data code', p: 'Validation, error handling, testing and packaging for programs that read data from others.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-science-complete-masterclass-college'] },
      { band: 'Adults', h3: 'Clean data at work', p: 'Scripts that check exports before reports are built on them.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Could an AI assistant have fixed the schools file for a Geelong student?',
    intro: 'Only if the student knew what to ask, because the error message points everywhere except at the cause.',
    p1: 'Paste the KeyError into a chatbot and it will usually suggest checking the spelling of the column, printing the keys, or adding a try and except. All reasonable, none of them the answer. The column name is spelled correctly; three invisible bytes are hiding in front of it. An assistant can name the fix in seconds once someone mentions a byte order mark, but recognising that this is the problem comes from having looked at raw bytes before.',
    p2: 'That is why our Geelong learners open the file in binary at least once and see EF BB BF for themselves. After that, the next mysterious data error sends them straight to the bytes, the encoding and the full file, and they can ask an assistant a precise question instead of a vague one.',
    closer: 'AI helps most when you already know where to look, and a Geelong learner who has hunted down three invisible bytes knows where to look in 2026.',
    blogAnchor: 'why coding still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lara to Ocean Grove, one Python class',
    intro: 'Geelong spreads around the bay and onto the Bellarine, and an online lesson joins every part of it.',
    cells: [
      { h3: 'Every suburb at once', p: 'A learner in Belmont and one in Ocean Grove can share a lesson in real time without either leaving home.' },
      { h3: 'Victorian year levels', p: 'Teachers refer to Year 7 through Year 12 and to the VCE years as Victorian schools do; lessons are in English.' },
      { h3: 'Free, and properly useful', p: 'In the trial you write actual Python while a teacher watches, then hear which stage, course and weekly slot would suit; card details are never requested.' },
      { h3: 'Groups of fifteen to twenty', p: 'Learners at one stage from Geelong, elsewhere in Australia and overseas, so each level finds a workable time.' },
      { h3: 'Twice a week', p: 'Usually two lessons a week, about eight a month, with holidays and exams planned ahead with the teacher.' },
      { h3: 'The October shift', p: 'When Victoria moves its clocks forward, a 5pm Geelong lesson moves from 12:30pm to 11:30am for our teachers, who stay on India time all year.' }
    ],
    spec: { title: 'Lesson times in Geelong time', p: 'Victoria changes its clocks and India does not, so every lesson is agreed in Geelong time and stays fixed for the learner through October and April.' }
  },

  fees: {
    h2: 'What Python classes cost in Geelong',
    intro: 'Three figures only.',
    first: 'A free first lesson that ends with a level, a course and a time.',
    group: 'A month of classes, usually eight, with fifteen to twenty learners at your stage.',
    private: 'Around eight private lessons each month with one teacher.',
    closer: 'Geelong families are charged in US dollars at one rate, the same on the Bellarine as in Corio, with no local price list. Nothing is billed until the trial has settled a course and time; the pricing page explains holidays, missed classes and changing format.'
  },

  reviewsH2: 'Word for word from Google: what families tell others',

  book: {
    h2: 'Tell us how far you have got with Python',
    intro: 'We choose a first task to match: reading a small file for a beginner in Year 8, a text-cleaning job for a Year 11 student, or the full statewide file and its traps for an adult.',
    success: 'Thank you. We will be in touch soon about a Python class in Geelong.'
  },

  faq: {
    h2: 'Geelong Python and coding questions',
    intro: 'What Geelong learners and parents usually ask first.',
    items: [
      { q: 'How many people does Geelong have?', a: 'The urban area counted 289,630 residents in 2021, with half aged 39 or younger.' },
      { q: 'What is a byte order mark?', a: 'A byte order mark is a short invisible sequence at the very start of a text file. In UTF-8 it is the three bytes EF BB BF. Some programs add it, and if code does not expect it, it ends up attached to the first word of the file.' },
      { q: 'What does encoding=\'utf-8-sig\' do in Python?', a: 'It reads UTF-8 text and removes a byte order mark from the start of the file if one is present. With it, the first column of the Victorian schools file is read as Education_Sector instead of a 17-character name with a hidden character in front.' },
      { q: 'What is the Geelong schools project?', a: 'Learners read the Victorian School Locations 2025 file, hit the KeyError caused by its byte order mark, fix it, and then clean the 85 Geelong rows, where 54 town spellings turn out to be 36 towns written in different capitals.' },
      { q: 'Do VCE students join these classes?', a: 'Yes. VCE students fit weekly Python around their subjects, with breaks lined up against Victorian holidays. Any school-assessed work stays the student\'s own.' },
      { q: 'When do Geelong lessons run?', a: 'After school, in the evening or at weekends, agreed in the trial and written in Geelong time. India time is 4 hours 30 minutes behind in winter and 5 hours 30 minutes behind during daylight saving.' },
      { q: 'Can younger children learn with you in Geelong?', a: 'Yes, from age 6, usually starting with Scratch and visual projects. This page is written for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Geelong?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Geelong coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Geelong and Victorian learners',
    html: 'VCE students can look at <a class="cg-inline-link" href="/vce-applied-computing-software-development-help">VCE Applied Computing: Software Development help</a> and <a class="cg-inline-link" href="/vce-applied-computing-data-analytics-help">VCE Data Analytics help</a>. Up the highway there is <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">a Melbourne page on vibe coding and AI agents</a>, and the state guide is <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">coding and AI classes in Victoria</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Geelong and Victoria',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/vce-algorithmics-hess-help', label: 'VCE Algorithmics' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-geep .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.45rem); }
.cg-root.cg-geep .cg-hero h1 { font-weight: 735; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-geep .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-geep .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-geep .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.012em; }
.cg-root.cg-geep .cg-grid-3 { gap: clamp(0.95rem, 2.1vw, 1.75rem); }
.cg-root.cg-geep .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-geep .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-geep .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-geep .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Geelong Significant Urban Area, ABS Census 2021 QuickStats, area code 2008, compared with Victoria and Australia (read 7 October 2026): 289,630 people; median age 39; 76,918 families; 127,113 private dwellings; average 2.5 people per household; dwelling structure: separate house 94,723 (86.7 percent; Victoria 73.4), flat or apartment 2,616 (2.4 percent; Victoria 12.1; Australia 14.2); occupation: Professionals 32,821 (23.5 percent; Victoria 25.0; Australia 24.0), Technicians and Trades Workers 20,021 (14.3 percent; Victoria 12.6); Bachelor Degree level and above 60,585 (25.6 percent; Victoria 29.2; Australia 26.3); aged 15 to 19: 16,313 (5.6 percent); aged 20 to 24: 18,066 (6.2 percent). Victorian Government school term dates: 2026 Term 4 Monday 5 October to Friday 18 December. IANA tz database: Australia/Melbourne daylight saving from the first Sunday in October to the first Sunday in April; Asia/Kolkata UTC+5:30.',
    localProject: 'UTF-8 byte order mark and text normalisation. Victorian Department of Education School Locations 2025 (dv402-SchoolLocations2025.csv), CC BY 4.0 on DataVic, downloaded 7 October 2026: 534,679 bytes; bytes 0 to 2 = EF BB BF; 2,302 CRLF line endings; 2,301 data rows via csv.DictReader. Decoded with utf-8: first header repr \'\\ufeffEducation_Sector\', length 17; DictReader row[\'Education_Sector\'] raises KeyError. Decoded with utf-8-sig: \'Education_Sector\'. LGA_Name \'Greater Geelong (C)\': 85 rows, School_Status all \'O\'; School_Type Primary 57, Secondary 15, Pri/Sec 8, Special 4, Language 1. Address_Town in Geelong rows: 54 distinct raw values, 36 after strip().casefold(); 18 towns appear in two spellings (newtown, drysdale, geelong, geelong west, geelong east, bell park, manifold heights, newcomb, corio, grovedale, ocean grove, lara, belmont, whittington, armstrong creek, highton, ceres, bell post hill); 29 rows have an all-capitals town; NEWTOWN 4 rows, Newtown 3 rows. Statewide: 1,303 raw town values, 942 after casefold; 27 data lines where str.split(\',\') yields a different field count from the header (quoted commas), 0 of them in Geelong rows; 4 School_Name values contain U+2019. Lesson family: encodings, BOM, utf-8-sig, casefold normalisation, using a real CSV parser.',
    requiredMentions: [
      '289,630',
      '76,918',
      '127,113',
      '94,723',
      '60,585',
      '32,821',
      'EF BB BF',
      '54 town spellings',
      'Lara to Ocean Grove',
      '534,679 bytes'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Geelong Significant Urban Area (2008): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2008' },
      { claim: 'Victorian Department of Education, School Locations 2025, Creative Commons Attribution 4.0 International, on DataVic.', url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025' },
      { claim: 'Victorian Government, school term dates and holidays: 2026 Term 4.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'IANA time zone database, australasia file: Australia/Melbourne daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'A breakdown of Geelong schools by sector: available in the file but not shown, to keep the page about reading data rather than comparing school systems.',
      'Any claim about why the file contains a byte order mark or mixed capitals: the cause is not documented, so only the effect is described.',
      'The Victorian Curriculum and Assessment Authority study details for VCE computing: covered on the dedicated VCE pages and not repeated here.',
      'OpenStreetMap data and Bureau of Meteorology observations: Overpass returned 406 and the observations feed 403 on 7 October 2026; neither was circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the Victorian Department of Education or the ABS.'
    ]
  }
};
