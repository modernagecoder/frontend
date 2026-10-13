'use strict';
// Darwin (cg- city page, Australia cluster Phase 6). Shaped page: online coding and Python for teenagers and
// adults; coding-classes-for-kids-darwin, if built later, owns the primary and lower-secondary intent.
// Spine: where does Darwin's half-hour time zone come from, and can a Python parser read the answer out of the
// file every computer uses? Data: the IANA time zone database, release 2026e (data.iana.org/time-zones/tzdb,
// public domain), files australasia and zone.tab, read raw on 7 October 2026. Raw lines: "Zone Australia/Darwin
// 8:43:20 - LMT 1895 Feb", "9:00 - ACST 1899 May", "9:30 Aus AC%sT"; zone.tab "AU -1228+13050 Australia/Darwin
// Northern Territory". Our recursive-descent parser (scratchpad au/c1/drw_tz.py) reads 39 Zone blocks and 179 Rule
// lines from australasia; zone.tab lists 12 Australian zones. Converting each zone's local mean time (LMT)
// offset to a longitude at 15 degrees per hour: Darwin 8:43:20 gives 130.8333 degrees east, exactly the 130 degrees
// 50 minutes in zone.tab; Perth, Adelaide, Brisbane, Sydney, Melbourne and Hobart also match to the second; Lindeman
// (Whitsunday Islands) gives 148 degrees 59 minutes against 149 degrees 00 minutes listed, about 1.74 km east-west
// at that latitude (our calculation). Python zoneinfo with the same rules: Darwin's clock changed in February 1895
// (UTC+9), May 1899 (UTC+9:30), and for daylight saving only in 1917 and from 1942 to 1944; the last change was in
// March 1944. Lesson family: a recursive-descent parser for a real data format; screened free site-wide on 7 October
// 2026 ("recursive descent": 0 page hits; claimed by AU-C1).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Greater Darwin (GCCSA 7GDAR): 139,902 people;
// median age 34 (Northern Territory 33, Australia 38); 34,687 families; 58,528 private dwellings; 2.6 people per
// household; separate house 29,937 (63.3%; NT 66.8%); flat or apartment 11,824 (25.0%; NT 17.9%; Australia
// 14.2%); Professionals 16,185 (21.7%; NT 22.0%; Australia 24.0%); Bachelor Degree level and above 29,016 (26.0%
// of people aged 15 and over; NT 21.5%; Australia 26.3%); aged 5 to 9 9,728 (7.0%); aged 15 to 19 7,651 (5.5%).
// Australia/Darwin is UTC+9:30 all year and Asia/Kolkata UTC+5:30, so Darwin is 4 hours ahead of India time all
// year. NT education and nt.gov.au pages returned 403 on 7 October 2026 and were not circumvented.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'DARWIN', label: 'Darwin', blurb: 'Online Python for Darwin teens and adults, and a parser that reads the time zone database to explain Darwin\'s half-hour offset.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-darwin',
  code: 'drw',
  accent: '#984868',
  accentRationale: 'Darwin: a dusk rose (HSV saturation 0.53, value 0.60, hue 337), chosen by hand at least 10 RGB units from every accent in content and the shared stylesheets, 6.1:1 on white and 4.9:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Darwin',
    eyebrow: 'Darwin, Northern Territory, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Northern Territory' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-northern-territory', name: 'Northern Territory' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Darwin, Northern Territory',
  title: 'Online Coding and Python Classes in Darwin | Live Teacher',
  description: 'Live online coding and Python classes for Darwin teenagers and adults: parsing real files, data and automation, taught by a real teacher. First lesson free.',
  ogDescription: 'Online coding and Python classes for Darwin, with a project that writes a parser for the world\'s time zone database and finds where 9:30 comes from.',
  twitterDescription: 'Darwin online coding and Python classes, live with a teacher, first lesson free.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Darwin Learners',
    description: 'Level-matched online Python, file parsing, data handling and automation for teenagers and adults across Greater Darwin, taught live in English.'
  },

  h1: 'Online coding and Python classes in Darwin',
  capsuleQ: 'What are the best online coding and Python classes in Darwin?',
  capsule: 'For Darwin teenagers and adults, online Python lessons with a live teacher who reads your code as you write it and sets projects on real files. Greater Darwin had 139,902 people at the 2021 Census, a median age of just 34, and a quarter of its occupied homes are flats or apartments. Classes run privately or with a few learners at your level, and the opening lesson is free.',
  lead: 'Darwin keeps its clocks nine and a half hours ahead of UTC, all year, and every phone and laptop knows it because of one shared file: the IANA time zone database. Our Darwin project opens that file and reads it with code. Learners write a recursive-descent parser in Python, a program that breaks lines of text into pieces and checks each piece against a small grammar, and use it to pull out Darwin\'s history. The first line says that before February 1895 Darwin ran on local mean time, 8 hours 43 minutes 20 seconds ahead of Greenwich. Turn those minutes into degrees and you land on 130 degrees 50 minutes east, exactly the longitude the same database lists for Darwin. One parser, one file, and a clock offset turns out to be a position on the map.',
  wa: 'Hello Modern Age Coders, I would like a free online coding or Python class for a learner in Darwin.',

  picks: {
    eyebrow: 'Course picks for Darwin',
    h2: 'Courses that fit a Darwin learner',
    intro: 'Four options that match the work on this page. The trial places you, with no fee and no card.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the beginning, including reading and splitting text files, which is where every parser starts.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'A complete Python course, from first programs to recursion, testing and working with real file formats.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults at work', note: 'Automating reports and data clean-up, with scripts that read whatever format the job hands you.' },
      { course: 'pcep-pcap-python-certification-course', band: 'Adults seeking a credential', note: 'Preparation for the Python Institute certificates, with every topic written and run before it is examined.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Greater Darwin in the Census',
      h2: 'A young capital, with a quarter of homes in apartments',
      intro: 'QuickStats from the 2021 Census for the Greater Darwin capital city area, set beside the Northern Territory and the national figures.',
      body: [
        { kind: 'table', caption: 'Greater Darwin compared, 2021 Census QuickStats', head: ['Measure', 'Greater Darwin', 'Northern Territory', 'Australia'], rows: [
          ['People', '139,902', 'Not compared', 'Not compared'],
          ['Median age', '34', '33', '38'],
          ['Families', '34,687', 'Not compared', 'Not compared'],
          ['Private dwellings', '58,528', 'Not compared', 'Not compared'],
          ['Occupied homes that are a flat or apartment', '11,824, or 25.0%', '17.9%', '14.2%'],
          ['Residents aged 15 and over with a bachelor degree or higher', '29,016, or 26.0%', '21.5%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A young city', p: 'Greater Darwin\'s median age of 34 is four years below Australia\'s 38, and its residents aged 5 to 9 made up 7.0% of the population.' },
          { h3: 'Apartment living', p: 'One in four occupied homes in Greater Darwin was a flat or apartment, well above the Northern Territory figure of 17.9%.' },
          { h3: 'Working professionals', p: '16,185 employed residents were professionals, 21.7% of the employed, close to the territory share of 22.0%.' }
        ] },
        { kind: 'p', text: 'On reading census tables: the bureau nudges every cell slightly so no individual can be identified, which means the pieces of a table seldom add up exactly to its total. We repeat only what the bureau prints and never build a fresh total by summing pieces.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Where does Darwin\'s half-hour time zone come from?',
      intro: 'A Python parser for the public IANA time zone database, release 2026e, aimed at the lines that describe Darwin and its neighbours.',
      body: [
        { kind: 'table', caption: 'Darwin\'s entry in the time zone database, read 7 October 2026', head: ['Until', 'Offset from UTC', 'Name used'], rows: [
          ['February 1895', '8 hours 43 minutes 20 seconds', 'LMT, local mean time'],
          ['May 1899', '9 hours', 'ACST'],
          ['Ever since', '9 hours 30 minutes', 'AC%sT, standard or daylight time by rule']
        ] },
        { kind: 'table', mt: true, caption: 'Local mean time turned back into longitude (our calculation)', head: ['Zone', 'Longitude implied by its LMT offset', 'Longitude listed in zone.tab'], rows: [
          ['Darwin', '130 degrees 50 minutes east', '130 degrees 50 minutes east'],
          ['Perth', '115 degrees 51 minutes east', '115 degrees 51 minutes east'],
          ['Adelaide', '138 degrees 35 minutes east', '138 degrees 35 minutes east'],
          ['Brisbane', '153 degrees 2 minutes east', '153 degrees 2 minutes east'],
          ['Lindeman, Whitsunday Islands', '148 degrees 59 minutes east', '149 degrees 0 minutes east']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Read the grammar', p: 'A Zone line is a name followed by an offset, a rule name, an abbreviation and an optional end date. Each piece gets its own small Python function, and the functions call one another: that is recursive descent.' },
          { h3: '2. Parse the file', p: 'The parser read 39 Zone blocks and 179 Rule lines from the australasia file without a single unrecognised line, which is the first test a parser must pass.' },
          { h3: '3. Turn time into place', p: 'The Earth turns 15 degrees an hour, so 8:43:20 means 130.8333 degrees east. Every Australian zone checked matched its listed longitude exactly, except Lindeman, one minute of arc out.' }
        ] },
        { kind: 'callout', h3: 'Darwin\'s summers on the record', p: 'Run the same rules through Python\'s built-in zoneinfo module and Darwin\'s clock history appears: a switch to standard time in 1895, the move to nine and a half hours in 1899, and daylight saving only in 1917 and from 1942 to 1944. The last time Darwin changed its clocks was March 1944. A learner who parsed the file can check zoneinfo\'s answers line by line.' },
        { kind: 'p', text: 'The longitudes and comparisons are ours, calculated from release 2026e of the database. The local mean time figures are historical: they describe clocks before standard time existed, and the database documents its own sources for them. Lindeman\'s one-minute difference is about 1.74 km east to west at its latitude, by our arithmetic.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Parsing in practice',
      h2: 'What writing one parser teaches about every data file',
      intro: 'The time zone database is only one of thousands of text formats a programmer will meet. The habits transfer.',
      body: [
        { kind: 'table', caption: 'From the Darwin parser to everyday Python', head: ['Parser habit', 'In the project', 'Where else it pays off'], rows: [
          ['Write the grammar down first', 'Zone line: name, offset, rules, format, optional until', 'Config files, logs, invoices, CSV exports'],
          ['One function per piece', 'offset(), zone_line(), parse_zone()', 'Code that is easy to test and change'],
          ['Fail loudly on surprises', 'Any unknown line raises an error', 'Silent mistakes in data pipelines'],
          ['Check against a second source', 'Implied longitude against zone.tab', 'Reports that would otherwise go unchecked'],
          ['Keep the raw line', 'Store the text alongside the parsed values', 'Debugging and audits later']
        ] },
        { kind: 'p', text: 'Many beginners reach for a long regular expression and hope. A small recursive-descent parser is slower to write and far easier to trust, because each function does one job and can be tested on its own. Once a learner has built one, a new file format stops being frightening and becomes a short grammar to write down.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Split lines into tokens, write the offset reader and the Zone reader, and print Darwin\'s history from the raw file.' },
          { h3: 'University students', p: 'Extend the parser to Rule lines, compute transitions, and compare every result with Python\'s zoneinfo.' },
          { h3: 'Adults', p: 'Write dependable readers for the odd formats work produces, with tests and clear errors instead of guesswork.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no tie to IANA, the time zone database maintainers, the Northern Territory Government or the statistics bureau. Census counts come from the bureau; the parsing results and longitude comparisons are our own work on the public database files.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Darwin',
      h2: 'A clock that never moves and a time gap that never changes',
      intro: 'Darwin\'s time zone shapes when a learner can study with us.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'No daylight saving', p: 'The Northern Territory has not changed its clocks since March 1944, according to the time zone database, so Darwin stays on UTC plus nine and a half hours all year.' },
          { h3: 'Four hours to India', p: 'India stays on UTC plus five and a half, so Darwin is exactly four hours ahead of our teachers every day of the year.' },
          { h3: 'A shared file', p: 'zone.tab lists 12 Australian zones, from Lord Howe Island to Perth, each with a coordinate and a short description.' }
        ] },
        { kind: 'spec', title: 'Why a fixed gap helps', p: 'With no clock changes at either end, a Darwin lesson set for 5pm is at 1pm for our teachers in January and in July alike. Lesson times are still confirmed in Darwin time when the course is agreed.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From splitting a line of text to writing a full parser',
    intro: 'Ages are only a starting hint; the trial shows the right first step.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Text and lists', p: 'Reading a file line by line, splitting on spaces and tabs, and turning pieces of text into numbers.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Functions and recursion', p: 'Small functions that call each other, recursion on nested data, and parsers for simple grammars.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'University', h3: 'Formats and testing', p: 'Grammars, tokenisers and parsers for real formats, tested against reference libraries.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Python on the job', p: 'Scripts that read the files a job produces, check them and turn them into clear reports.', courses: ['python-ai-automation-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI will write a regular expression in a second. Why should a Darwin student learn to write a parser?',
    intro: 'Because a generated pattern that works on ten lines can quietly misread the eleventh, and a parser built from a grammar tells you when it does.',
    p1: 'Ask an assistant to pull offsets out of the time zone file and you will probably get one long regular expression. It will handle 9:30 and 10:00 and look finished. Then it meets 8:43:20, or a negative offset, or a line that begins with a tab, and either skips it or reads it wrongly without a word. Nothing crashes; the answer is just missing a row, and nobody notices until a report is wrong.',
    p2: 'A learner who has written a recursive-descent parser knows to ask what grammar the data follows and what happens on a line that does not fit. They can read a generated pattern, list the cases it ignores and test them. That turns AI-written code from something to hope about into something to check.',
    closer: 'In 2026 the code arrives fast; the value lies in knowing what the data looks like and proving the code reads all of it, and a Darwin learner who has parsed the time zone database has that habit for good.',
    blogAnchor: 'should teenagers still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Palmerston, Nightcliff or the city, all on one screen',
    intro: 'Greater Darwin is spread along the harbour and out to Palmerston, and an online lesson reaches each home in the same way.',
    cells: [
      { h3: 'Lessons at home', p: 'A learner in Palmerston and another near the Esplanade can be in the same lesson without either one getting in a car.' },
      { h3: 'Territory year levels', p: 'Teachers use the year levels Darwin schools use and plan around the Northern Territory school terms. Everything is taught in English.' },
      { h3: 'Try before you commit', p: 'The first session is a real lesson with a real teacher; you leave with a suggested course and time and with nothing paid.' },
      { h3: 'Learners at your level', p: 'Groups of fifteen to twenty learners at the same stage, from Darwin and other cities, so there is a group even in a small capital.' },
      { h3: 'Twice a week', p: 'Usually two lessons a week, about eight a month, at a set time, with breaks for school holidays and exams arranged in advance.' },
      { h3: 'The same four hours, every day', p: 'Darwin runs four hours ahead of our teachers all year round, so 4:30pm in Darwin is always 12:30pm for them.' }
    ],
    spec: { title: 'Nothing to adjust', p: 'Neither the Northern Territory nor India uses daylight saving, so a Darwin lesson time is fixed for the whole year. We still state every time in Darwin time when it is agreed.' }
  },

  fees: {
    h2: 'What classes cost in Darwin',
    intro: 'Three prices, laid out simply.',
    first: 'The opening lesson in full, free, followed by a suggested level, course and time.',
    group: 'Monthly teaching of around eight lessons in a group of fifteen to twenty at your stage.',
    private: 'The same monthly rhythm of roughly eight lessons, taught one to one.',
    closer: 'Outside India, the fee is a single US dollar amount everywhere, so a learner in Stuart Park and one in Palmerston pay the same and there is no local price sheet. Nothing is charged until the trial has fixed a course and a time; the pricing page covers holiday pauses, missed sessions and changing between group and private lessons.'
  },

  reviewsH2: 'Reviews left on Google by our families',

  book: {
    h2: 'Tell us about the learner',
    intro: 'Share an age and an interest and we will set the opening task: splitting a file into words for a Year 8 student, or the full time zone parser for an older learner.',
    success: 'Thank you. The team will be in touch shortly about a Darwin class.'
  },

  faq: {
    h2: 'Darwin online coding and Python questions',
    intro: 'The questions Darwin families and learners raise first.',
    items: [
      { q: 'How many people live in Greater Darwin?', a: 'The 2021 Census QuickStats give Greater Darwin 139,902 residents, with a median age of 34, four years below the national median of 38.' },
      { q: 'What is a recursive-descent parser?', a: 'A recursive-descent parser reads structured text using a set of small functions, one for each part of the grammar. Each function reads its own piece and calls the others for the pieces inside it, so the code mirrors the structure of the text.' },
      { q: 'Why does Darwin use a half-hour time zone?', a: 'The time zone database records that Darwin moved from nine hours to nine and a half hours ahead of UTC in May 1899. The page reports what the database records rather than the reasons behind the decision.' },
      { q: 'What is the Darwin time zone project?', a: 'Learners write a Python parser for the public IANA time zone database, read Darwin\'s entries and convert its old local mean time of 8 hours 43 minutes 20 seconds into a longitude, 130 degrees 50 minutes east, which matches the longitude the database lists for Darwin.' },
      { q: 'Where do beginners start?', a: 'Beginners start with reading and splitting text, loops and functions. Learners who already code move on to recursion, parsers and real data formats, placed by the free lesson.' },
      { q: 'What time are lessons for Darwin learners?', a: 'Weekday afternoons, evenings or weekends, settled in the trial and stated in Darwin time. Darwin is always four hours ahead of India time, with no clock changes at either end.' },
      { q: 'Do you teach younger children in Darwin?', a: 'Yes, from age six, starting with Scratch and visual projects. The projects described here are aimed at teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Darwin?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Darwin coding classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Darwin and Australian learners',
    html: 'Learners who want to understand code rather than paste it should read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, do not copy and paste</a>. Anyone weighing up private lessons can see <a class="cg-inline-link" href="/one-on-one-coding-tutor-australia">one-on-one coding tutoring in Australia</a>, and the cost of classes is set out in <a class="cg-inline-link" href="/coding-classes-cost-australia">what coding classes cost in Australia</a>. All our Australian pages sit under the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Darwin and Australia',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/ai-and-programming-classes-in-adelaide', label: 'Adelaide' },
    { href: '/best-coding-classes-in-brisbane', label: 'Brisbane' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-drw .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.9vw, 2.4rem); }
.cg-root.cg-drw .cg-hero h1 { font-weight: 730; letter-spacing: -0.018em; line-height: 1.09; }
.cg-root.cg-drw .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-drw .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; }
.cg-root.cg-drw .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.011em; }
.cg-root.cg-drw .cg-grid-3 { gap: clamp(0.95rem, 2.2vw, 1.85rem); }
.cg-root.cg-drw .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-drw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-drw .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-drw .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Greater Darwin, ABS Census 2021 QuickStats, GCCSA 7GDAR (read 7 October 2026): 139,902 people; median age 34 (Northern Territory 33, Australia 38); 34,687 families; 58,528 private dwellings; average 2.6 people per household; dwelling structure, occupied private dwellings: separate house 29,937 (63.3 percent; Northern Territory 66.8), flat or apartment 11,824 (25.0 percent; Northern Territory 17.9; Australia 14.2); occupation, employed people aged 15 and over: Professionals 16,185 (21.7 percent; Northern Territory 22.0; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 29,016 (26.0 percent; Northern Territory 21.5; Australia 26.3); aged 5 to 9 9,728 (7.0 percent); aged 15 to 19 7,651 (5.5 percent). IANA tz database 2026e: Australia/Darwin UTC+9:30 all year; Asia/Kolkata UTC+5:30, so Darwin is 4 hours ahead of India time all year. NT Department of Education and nt.gov.au returned 403 on 7 October 2026 and were not circumvented, so no NT school dates or senior certificate facts are quoted.',
    localProject: 'Recursive-descent parser for the IANA time zone database. Release 2026e (data.iana.org/time-zones/tzdb/version), files australasia and zone.tab, public domain, read 7 October 2026. australasia: 39 Zone blocks, 179 Rule lines parsed with no unrecognised line. Darwin: "Zone Australia/Darwin 8:43:20 - LMT 1895 Feb", "9:00 - ACST 1899 May", "9:30 Aus AC%sT"; zone.tab "AU -1228+13050 Australia/Darwin Northern Territory"; zone.tab has 12 AU lines. LMT offset in seconds divided by 240 gives longitude in degrees: Darwin 31,400 s = 130.8333 (130 degrees 50 minutes, equal to zone.tab); Perth 7:43:24 = 115.85 (zone.tab 115 51); Adelaide 9:14:20 = 138.5833 (138 35); Brisbane 10:12:08 = 153.0333 (153 02); Sydney 10:04:52 = 151.2167; Melbourne 9:39:52 = 144.9667; Hobart 9:49:16 = 147.3167, all equal to zone.tab; Lindeman 9:55:56 = 148.9833 against zone.tab 149 00 at 20 degrees 16 minutes south, about 1.74 km. Python zoneinfo transitions for Australia/Darwin: 1895-02 to UTC+9, 1899-05 to UTC+9:30, daylight saving 1917 and 1942 to 1944 (rule Aus), last change March 1944. Lesson family: recursive-descent parsing of a real text format; distinct from the regular-expression and opening-hours parsing pages on the site.',
    requiredMentions: [
      '139,902',
      '34,687',
      '58,528',
      '29,016',
      '16,185',
      '11,824',
      '8 hours 43 minutes 20 seconds',
      '130 degrees 50 minutes east',
      '39 Zone blocks',
      '179 Rule lines'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Greater Darwin (7GDAR): people, median age, families, private dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/7GDAR' },
      { claim: 'IANA time zone database, australasia file (Zone Australia/Darwin and rule Aus), release 2026e, public domain.', url: 'https://data.iana.org/time-zones/tzdb/australasia' },
      { claim: 'IANA time zone database, zone.tab coordinates for Australian zones.', url: 'https://data.iana.org/time-zones/tzdb/zone.tab' },
      { claim: 'IANA time zone database version file (2026e).', url: 'https://data.iana.org/time-zones/tzdb/version' }
    ],
    rejectedClaims: [
      'Why Darwin chose a half-hour offset in 1899: the database records the change, and the reasons were not researched.',
      'Northern Territory school term dates and NTCET details: the NT Government sites returned 403 and were not circumvented.',
      'Bureau of Meteorology station names and weather: the observations feed returned 403 and was not circumvented.',
      'Any claim that the local mean time figures were measured historically: the page reports only that they match zone.tab coordinates.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with IANA, the Northern Territory Government or the ABS.'
    ]
  }
};
