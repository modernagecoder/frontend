'use strict';
// Broken Hill (cg- regional city page, Australia cluster Phase 7, row 192). Shaped page (online coding and Python).
// Spine: what does a computer actually store when it records that Broken Hill keeps South Australian time? Data: the
// IANA time zone database as compiled into TZif files and shipped in the Python tzdata package 2025.3 (IANA 2025c),
// read byte by byte with struct.unpack on 10 October 2026 (scratchpad au/r8/bhl_tzif.py, bhl_endian.py):
// Australia/Broken_Hill is 941 bytes, version 2, legacy first block 51 bytes, 85 transitions, 5 local time types
// (LMT 33,948 s; AEST 36,000; ACST 32,400; ACDT 37,800; ACST 34,200), 19 abbreviation characters, footer
// ACST-9:30ACDT,M10.1.0,M4.1.0/3. Read little-endian by mistake the counts become 1,426,063,360, 83,886,080 and
// 318,767,104; the first transition -2,364,110,748 (31 January 1895 14:34 UTC) becomes 7,244,064,688,097,460,223.
// Australia/Adelaide 921 bytes, 84 transitions; Australia/Sydney 904 bytes, 83 transitions. From 2000 all 17 stored
// Broken Hill transitions fall at the same instants as Adelaide's and none at Sydney's; 1971 to 1999 the two differ
// in 5 years (1982, 1990, 1992, 1994, 1995). Zone lines from the IANA australasia file (2026e). Lesson family:
// big-endian binary parsing with struct.unpack; screened free site-wide on 10 October 2026 and claimed by AU-R8.
// Place facts read raw on 10 October 2026: ABS Census 2021 QuickStats, Broken Hill Significant Urban Area (1007),
// with New South Wales and Australia: 17,588 people; median age 44; 4,505 families; 9,551 private dwellings; 2.2 people
// per household; separate house 6,910 (94.6 percent; NSW 65.6; Australia 72.3); flat or apartment 186 (2.5);
// Professionals 1,181 (16.5; NSW 25.8; Australia 24.0); Technicians and Trades Workers 1,115 (15.5; NSW 11.9);
// Bachelor Degree level and above 1,522 (10.4; NSW 27.8; Australia 26.3); aged 15 to 19: 971 (5.5); aged 20 to 24:
// 896 (5.1). ABS ERP Broken Hill LGA (11250) 30 June 2025: 17,515. NSW public schools master dataset (extracted
// 2 October 2026): 9 schools in the Broken Hill LGA. NSW 2027 term dates from education.nsw.gov.au. Excluded by the
// cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health; no mining figures used.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'BROKEN HILL', label: 'Broken Hill', blurb: 'Broken Hill, a New South Wales city on Adelaide time, read straight out of the bytes of a time zone file.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-broken-hill',
  code: 'brkh',
  accent: '#564022',
  accentRationale: 'Broken Hill: a dark red-earth brown (HSV saturation 0.60, value 0.34, hue 35), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 10.6:1 on white and 8.5:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Broken Hill',
    eyebrow: 'Broken Hill, far west New South Wales',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Broken Hill, New South Wales',
  title: 'Online Coding and Python Classes in Broken Hill | Live Lessons',
  description: 'Live online Python and coding classes for Broken Hill teenagers and adults, with a project that reads a real time zone file byte by byte to find the city\'s clock.',
  ogDescription: 'Python classes for Broken Hill, where learners open the binary file that tells every computer this NSW city runs on Adelaide time.',
  twitterDescription: 'Online Python for Broken Hill teens and adults, taught live, first lesson free.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Broken Hill Learners',
    description: 'Level-matched online Python, file formats, binary data and debugging for teenagers and adults in Broken Hill and far west New South Wales, taught live in English.'
  },

  h1: 'Online coding and Python classes in Broken Hill',
  capsuleQ: 'What are the best online coding and Python classes in Broken Hill?',
  capsule: 'Live Python lessons in which a Broken Hill teenager or adult opens real files, reads what is inside them and explains every byte to a teacher. At the 2021 Census the urban area held 17,588 residents. Classes run over video, one to one or in a small group at the learner\'s level, and the first one costs nothing.',
  lead: 'Broken Hill sits inside New South Wales but sets its clocks with Adelaide, half an hour behind Sydney. Every phone and laptop in town knows this because of a small binary file called Australia/Broken_Hill, 941 bytes long, that ships inside operating systems and inside Python. Open it as text and it is mostly gibberish. Open it with Python\'s struct module, read the numbers in the right byte order, and it lists 85 moments when the city\'s clock changed, back to January 1895. Read the same bytes in the wrong order and the file claims to hold more than 1.4 billion of them. Our Broken Hill learners find out why the order of bytes matters as much as the bytes themselves.',
  wa: 'Hello Modern Age Coders, I would like a free online Python class for a learner in Broken Hill.',

  picks: {
    eyebrow: 'Course picks for Broken Hill',
    h2: 'Four ways into Python from Broken Hill',
    intro: 'Each one leads towards the binary file project below. The free lesson decides the starting point, and nobody asks for a card.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Variables, loops and files, then opening a file in binary mode and printing its bytes.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Python from scratch to modules, file formats, struct and careful testing.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 14 to 18', note: 'Searching sorted lists of times, the job a clock library does on every lookup.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults automating work', note: 'Scripts that read awkward file formats and check their own output.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Broken Hill in the Census',
      h2: 'A far west city of 17,588 people',
      intro: 'The 2021 Census picture of the Broken Hill urban area, with New South Wales and national shares beside it.',
      body: [
        { kind: 'p', text: 'The bureau counted 17,588 residents, a median age of 44, and 4,505 families spread across 9,551 private dwellings, with an average of 2.2 people in each household.' },
        { kind: 'table', caption: 'How Broken Hill compares (2021 Census shares)', head: ['Measure', 'Broken Hill', 'NSW', 'Australia'], rows: [
          ['Separate houses (6,910 dwellings)', '94.6%', '65.6%', '72.3%'],
          ['Professionals among workers (1,181 people)', '16.5%', '25.8%', '24.0%'],
          ['Bachelor degree or higher (1,522 people)', '10.4%', '27.8%', '26.3%'],
          ['Technicians and trades workers (1,115 people)', '15.5%', '11.9%', '12.9%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Almost no flats', p: 'Only 186 dwellings, 2.5% of the total, were flats or apartments on Census night.' },
          { h3: 'Teenagers and twenties', p: 'There were 971 residents aged 15 to 19 and 896 aged 20 to 24.' },
          { h3: 'The latest estimate', p: 'The ABS puts the Broken Hill council area at 17,515 people on 30 June 2025, a different boundary and date from the Census count.' }
        ] },
        { kind: 'p', text: 'Census tables are slightly randomised by the ABS to protect privacy, so rows rarely add up exactly to a published total. We print each figure as published and never present a sum of rows as a total.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What does a computer store when Broken Hill keeps Adelaide time?',
      intro: 'The Australia/Broken_Hill file from the IANA time zone database, as shipped in Python\'s tzdata package, opened in binary mode and decoded with struct.unpack.',
      body: [
        { kind: 'table', caption: 'The same bytes read two ways (our decoding, 10 October 2026)', head: ['Field in the file', 'Read big-endian (correct)', 'Read little-endian (wrong)'], rows: [
          ['Number of clock changes', '85', '1,426,063,360'],
          ['Number of local time types', '5', '83,886,080'],
          ['Characters of abbreviations', '19', '318,767,104'],
          ['First clock change, in seconds from 1970', '-2,364,110,748 (31 January 1895)', 'About 230 billion years in the future'],
          ['Offset of the first time type', '33,948 seconds (9:25:48)', '-1,669,070,848']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Check the label', p: 'The first five bytes spell TZif2: the format name and its version. A parser that does not find them stops immediately rather than guessing.' },
          { h3: '2. State the byte order', p: 'Every count is a four-byte integer stored with the most significant byte first. In Python the format string \'>6l\' says so; leave out the \'>\' on a typical laptop and the numbers come out reversed.' },
          { h3: '3. Compare with neighbours', p: 'From 2000 onwards all 17 changes stored for Broken Hill fall at exactly the same instants as Adelaide\'s, and not one matches Sydney\'s.' }
        ] },
        { kind: 'callout', h3: 'A clock history written in bytes', p: 'The database gives Broken Hill its own local mean time of 9:25:48 ahead of Greenwich until February 1895, then ten hours, then nine from August 1896, and nine and a half since May 1899. From 1971 until 2000 its summer time followed New South Wales rules, so in 1982, 1990, 1992, 1994 and 1995 its clocks changed on different dates from Adelaide\'s. Since 2000 it follows South Australia, and the file\'s final line, ACST-9:30ACDT,M10.1.0,M4.1.0/3, is the rule both cities share.' },
        { kind: 'p', text: 'The decoding is our own, run against tzdata 2025.3 (IANA release 2025c); the zone history comes from the IANA australasia source file. For comparison, the Adelaide file is 921 bytes with 84 changes and the Sydney file 904 bytes with 83.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Reading binary safely',
      h2: 'Habits for opening any binary file',
      intro: 'Practised on 941 bytes from Broken Hill, then used on images, sound files, sensor logs and network packets.',
      body: [
        { kind: 'table', caption: 'What each habit caught in the Broken Hill file', head: ['Habit', 'In practice', 'What it caught'], rows: [
          ['Test the magic bytes first', 'Compare the opening bytes with b\'TZif\'', 'A wrong file is rejected before any number is trusted'],
          ['Write the byte order down', 'Use \'>\' in every struct format', 'The 1.4 billion transition count disappears'],
          ['Check lengths add up', 'Work out each block\'s size from the counts', 'The legacy first block is exactly 51 bytes'],
          ['Compare with a trusted reader', 'Check our times against Python\'s zoneinfo module', 'All 85 decoded changes agree with the library']
        ] },
        { kind: 'p', text: 'Text files forgive a lot; binary files forgive nothing. A single misplaced offset turns every later number into noise, and the program usually keeps running. The defence is to check something you already know, such as a file size or a date in history, before relying on anything you do not.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Open the file in binary mode, print the first 44 bytes in hexadecimal and decode the six header counts by hand and with struct.' },
          { h3: 'University students', p: 'Write a complete TZif reader, including the footer rule, and test it against the standard library on every Australian zone.' },
          { h3: 'Adults at work', p: 'The same care applies to any export, log or device format where a wrong byte order fails quietly.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no link with IANA, the ABS or the NSW Government. The time zone data and statistics belong to their publishers; the decoding and comparisons are our own work.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Broken Hill',
      h2: 'Adelaide time inside New South Wales',
      intro: 'The details that decide when a Broken Hill learner can join a live lesson.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Half an hour behind Sydney', p: 'Broken Hill runs on UTC plus 9:30, moving to 10:30 from the first Sunday in October to the first Sunday in April, exactly like Adelaide.' },
          { h3: 'NSW schools', p: 'The NSW public schools master dataset lists 9 schools in the Broken Hill council area.' },
          { h3: 'India time', p: 'India time is four hours behind Broken Hill in winter and five hours behind while daylight saving runs.' }
        ] },
        { kind: 'spec', title: 'Two possible Term 1 starts in 2027', p: 'The NSW Department of Education lists Term 1 of 2027 from Thursday 28 January for the Eastern division and from Thursday 4 February for the Western division, both ending on Friday 9 April. Term 2 runs from Tuesday 27 April to Friday 2 July, Term 3 from Monday 19 July to Friday 24 September and Term 4 from Monday 11 October to Monday 20 December. Families confirm their division with their own school.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From printing text to decoding bytes',
    intro: 'Bands are a guide only; the free lesson sets the real first step.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Text and files', p: 'Reading and writing text files, counting lines and finding patterns.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Bytes and number bases', p: 'Binary and hexadecimal, opening files in binary mode and decoding simple headers.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Real file formats', p: 'Parsers with tests, version handling and comparison against reference libraries.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Formats at work', p: 'Reading exports and device logs reliably, with checks that fail loudly.', courses: ['python-ai-automation-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Would an AI assistant notice the byte order?',
    intro: 'Sometimes, and when it misses, nothing crashes.',
    p1: 'Ask a chatbot for code to read a TZif header and it will usually write a struct format string. If that string drops the byte order character, the code still runs on a Broken Hill laptop and confidently reports more than 1.4 billion clock changes in a file of 941 bytes.',
    p2: 'Our Broken Hill learners let AI tools draft the parser, then test it against facts they can check by hand: the file size, the TZif label and the date of the first clock change in 1895. The assistant writes quickly; the learner decides whether to believe it.',
    closer: 'A Broken Hill learner who has caught a billion-fold error with one sanity check carries that habit into every file format and every AI tool that follows 2026.',
    blogAnchor: 'why every student should still learn to code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the far west, the same live class',
    intro: 'Distance from Sydney or Adelaide makes no difference to an online lesson.',
    cells: [
      { h3: 'Taught on your clock', p: 'Lesson times are fixed in Broken Hill time, which is half an hour behind most of New South Wales.' },
      { h3: 'Pitched to NSW stages', p: 'Teachers work with the NSW stage and Year system, HSC students included, and teach in English.' },
      { h3: 'Code before commitment', p: 'The first lesson is real programming with a teacher. Afterwards you receive a suggested course and time, and no payment details are taken.' },
      { h3: 'Fifteen to twenty per group', p: 'Learners at one level, drawn from across Australia and abroad, so each stage has a workable slot.' },
      { h3: 'Two lessons a week', p: 'Around eight a month. Holidays and exam weeks are planned with the teacher ahead of time.' },
      { h3: 'Daylight saving handled', p: 'When South Australian clocks change, Broken Hill lessons stay at the same local hour.' }
    ],
    spec: { title: 'One time zone on every message', p: 'Times are always written in Broken Hill time, the same as Adelaide, so there is never a Sydney time to convert.' }
  },

  fees: {
    h2: 'Fees for online Python in Broken Hill',
    intro: 'Three lines cover it.',
    first: 'One free lesson, ending in a recommended level, course and time.',
    group: 'A month of group lessons, normally eight, with fifteen to twenty learners at the same stage.',
    private: 'About eight private lessons a month with one teacher.',
    closer: 'Living far from a capital costs nothing extra: Broken Hill families pay the same US dollar rate as everyone else. Payment starts only after the trial settles a course and time, and the pricing page explains breaks, missed lessons and switching format.'
  },

  reviewsH2: 'Reviews left on Google by our learners',

  book: {
    h2: 'Tell us about the learner and we will prepare the first lesson',
    intro: 'We set the first task in advance: printing a file line by line for a Year 8 beginner, decoding the TZif header for a Year 11 student, or a full time zone reader for an adult.',
    success: 'Thank you. We will be in touch soon about an online Python class in Broken Hill.'
  },

  faq: {
    h2: 'Questions about Python classes in Broken Hill',
    intro: 'What Broken Hill families and adult learners usually ask before booking.',
    items: [
      { q: 'How many people live in Broken Hill?', a: 'The 2021 Census counted 17,588 people in the Broken Hill urban area. The ABS estimate for the council area on 30 June 2025 is 17,515.' },
      { q: 'What does big-endian mean?', a: 'Big-endian means a number stored across several bytes puts its most significant byte first. TZif files use big-endian order, while most laptops store numbers little-endian, so a program has to state the order explicitly or it will misread every number.' },
      { q: 'What is the Broken Hill time zone project?', a: 'Learners open the Australia/Broken_Hill file from the IANA time zone database in binary mode, decode its header and clock changes with Python\'s struct module, and compare the results with the Adelaide and Sydney files to see which city Broken Hill follows.' },
      { q: 'Why does Broken Hill use South Australian time?', a: 'The time zone database records Broken Hill on UTC plus 9:30 since 1899, the same standard time as Adelaide. Since 2000 it has also followed South Australian daylight saving dates; from 1971 to 1999 it followed New South Wales dates.' },
      { q: 'Can HSC students take part?', a: 'Yes. Senior students fit the weekly lessons around their HSC subjects, and any assessed school work remains entirely their own.' },
      { q: 'When are lessons held for Broken Hill learners?', a: 'After school, in the evening or at weekends, agreed in the trial and written in Broken Hill time. India time is four hours behind Broken Hill in winter and five in summer.' },
      { q: 'Is there anything for younger children?', a: 'Yes, from age 6 there are visual coding courses, though the binary file project on this page is meant for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders office in Broken Hill?', a: 'No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.', boiler: true },
      { q: 'What do online Python classes in Broken Hill cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How large are the groups?', a: 'Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'More in New South Wales',
    h2: 'Other pages for western New South Wales',
    html: 'Closer to the ranges there are <a class="cg-inline-link" href="/ai-and-programming-classes-in-dubbo">AI and programming classes in Dubbo</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-orange">vibe coding and AI agents classes in Orange</a>. Since Broken Hill shares Adelaide\'s clock, <a class="cg-inline-link" href="/ai-and-programming-classes-in-adelaide">the Adelaide page</a> may also help, and the statewide guide is <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Broken Hill and New South Wales',
  footerPlaces: [
    { href: '/ai-and-programming-classes-in-dubbo', label: 'Dubbo' },
    { href: '/vibe-coding-and-ai-agents-classes-in-orange', label: 'Orange' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-brkh .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-brkh .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.09; }
.cg-root.cg-brkh .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-brkh .cg-eyebrow { letter-spacing: 0.14em; font-weight: 650; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-brkh .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.01em; }
.cg-root.cg-brkh .cg-grid-3 { gap: clamp(0.9rem, 2.2vw, 1.7rem); }
.cg-root.cg-brkh .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-brkh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-brkh .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-brkh .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Broken Hill Significant Urban Area, ABS Census 2021 QuickStats, area code 1007, with New South Wales and Australia (read 10 October 2026): 17,588 people; median age 44; 4,505 families; 9,551 private dwellings; 2.2 people per household; separate house 6,910 (94.6 percent; NSW 65.6; Australia 72.3); flat or apartment 186 (2.5 percent); Professionals 1,181 (16.5 percent; NSW 25.8; Australia 24.0); Technicians and Trades Workers 1,115 (15.5 percent; NSW 11.9; Australia 12.9); Bachelor Degree level and above 1,522 (10.4 percent; NSW 27.8; Australia 26.3); aged 15 to 19: 971 (5.5 percent); aged 20 to 24: 896 (5.1 percent). ABS ERP Broken Hill LGA (11250) 30 June 2025: 17,515. NSW public schools master dataset (data.nsw, extracted 2 October 2026): 9 schools with LGA Broken Hill. NSW Department of Education term dates 2027: Term 1 Eastern Thursday 28 January, Western Thursday 4 February, to Friday 9 April; Term 2 Tuesday 27 April to Friday 2 July; Term 3 Monday 19 July to Friday 24 September; Term 4 Monday 11 October to Monday 20 December. IANA tz australasia (2026e): Australia/Broken_Hill LMT 9:25:48 to 1895 Feb; 10:00 to 1896 Aug 23; 9:00 to 1899 May; 9:30 Aus rules to 1971; 9:30 AN (NSW) rules to 2000; 9:30 AS (SA) rules since. Asia/Kolkata UTC+5:30.',
    localProject: 'Big-endian binary parsing with struct.unpack. Python tzdata package 2025.3 (IANA 2025c), file zoneinfo/Australia/Broken_Hill, read 10 October 2026: 941 bytes; magic TZif, version 2; legacy v1 block 51 bytes (counts 0,0,0,0,1,1); v2 header counts big-endian isutcnt 0, isstdcnt 0, leapcnt 0, timecnt 85, typecnt 5, charcnt 19; read little-endian 1,426,063,360, 83,886,080 and 318,767,104. First transition int64 big-endian -2,364,110,748 (1895-01-31 14:34 UTC), little-endian 7,244,064,688,097,460,223. Types: LMT 33,948 s; AEST 36,000; ACST 32,400; ACDT 37,800 (DST); ACST 34,200. First type offset read little-endian -1,669,070,848. Footer ACST-9:30ACDT,M10.1.0,M4.1.0/3. Australia/Adelaide 921 bytes, 84 transitions; Australia/Sydney 904 bytes, 83 transitions, footer AEST-10AEDT,M10.1.0,M4.1.0/3. Since 2000: 17 stored transitions each; Broken Hill equals Adelaide at all 17 instants and Sydney at 0. 1971 to 1999: Broken Hill transition years differing from Adelaide 1982, 1990, 1992, 1994, 1995.',
    requiredMentions: [
      '17,588',
      '17,515',
      '94.6%',
      '941 bytes',
      '1,426,063,360',
      '33,948 seconds',
      '-2,364,110,748',
      '85 moments',
      'From the far west, the same live class'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Broken Hill Significant Urban Area (1007): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1007' },
      { claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Broken Hill LGA 11250, total persons, 2025.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.11250.LGA2025.A?format=csvfilewithlabels' },
      { claim: 'IANA time zone database, australasia source file: Australia/Broken_Hill zone lines and rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' },
      { claim: 'RFC 9636, the TZif format: header layout and big-endian integer fields.', url: 'https://www.rfc-editor.org/rfc/rfc9636.html' },
      { claim: 'NSW Department of Education, future and past NSW term dates and school holidays (2027 dates).', url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-dates-and-school-holidays' },
      { claim: 'NSW public schools master dataset (Data.NSW), schools by local government area.', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' }
    ],
    rejectedClaims: [
      'Mining output, employment or company figures for Broken Hill: not part of the verified Census, ERP or time zone sources used here.',
      'Which NSW term division Broken Hill schools follow: the department page lists Eastern and Western dates without naming schools, so families are told to check.',
      'Any nickname for the city: none was verified in an official source used for this page.',
      'Industry of employment figures from QuickStats: the leading local industries were left out to avoid health and mining figures.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with IANA, the ABS or the NSW Government.'
    ]
  }
};
