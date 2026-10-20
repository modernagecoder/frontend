'use strict';
// Northern Virginia (cg- metro page, US cluster Phase 5, row 134). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: a time series is the shape of most real data a teen will meet in AI work, and Arlington County publishes a tidy
// one with three classic traps inside: a wide table, a total row and gaps. Sources read raw on 18 October 2026 (copies in
// keyword-research-2026-09/us/src/ai-and-python-classes-for-teens-in-northern-virginia/):
//  - Arlington County Open Data Directory (data.arlingtonva.us), dataset "Outdoor Wireless Hotspot Usage": description in
//    the portal code, "Arlington County has multiple outdoor Wi-Fi hotspots offering free wireless internet
//    (ArlingtonWireless) at public spaces including community centers, libraries and parks." ... "Monthly usage counts are
//    the sum of unique, daily user connections to each hotspot." File download.data.arlingtonva.us/Uploads/AutomatedJobs/
//    Outdoor+Wireless+Usage+Stats.json, 147,177 bytes, 18 October 2026. Our reading: 28 rows (26 hotspots, one row named
//    "Total Authenticated Access By Month", one empty row); 75 monthly columns, July 2020 to September 2026, keyed by
//    JavaScript date strings; 137 of the 1,950 hotspot-month cells empty; 14 of 26 hotspots report all 75 months; the
//    total row equals the sum of the 26 hotspots in all 75 months; fractional counts in July and August 2022 for two
//    hotspots (for example 647.58); hotspot names include "Library" 8 times, "Community Center" 9 times, "Fire Station"
//    3 times. Our figures: highest month June 2022, 27,711; lowest December 2020, 8,155; July 2020, 12,280; September
//    2025, 23,454; September 2026, 25,468; 2021 to 2025 averages by calendar month, January 17,267 lowest, October 23,049
//    highest, May 22,561. Single hotspot peak: Central Library, November 2020, 3,292.
//  - Fairfax County Park Authority, About Us (fairfaxcounty.gov/parks/about-us): created "On December 6, 1950"; "420
//    parks on more than 23,000 acres of land"; "325 miles of trails, our most popular amenity"; "Eight golf courses";
//    "Five nature and visitor centers"; "263 athletic fields, including 39 synthetic turf fields"; "A 12-member citizen board".
//  - Fairfax County Public Library (fairfaxcounty.gov/library): "nine regional branches, 13 community branches, and our
//    Access Services branch".
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet, Most Recent Access Data: VA 2023-2024, 229 of 335
//    (68.4%). No 2024-2025 Virginia value is printed (the sheet repeats the 2023-2024 value).
//  - IANA tzdb northamerica: America/New_York; 1 November 2026 and 14 March 2027.
// Blocked (403, not retried): www.arlingtonva.us, topics.arlingtonva.us (open data terms page), library.arlingtonva.us,
// www.doe.virginia.gov. counters.bikearlington.com did not connect. No licence text could be read for the Arlington file.
// Virginia's CS rules are left to the live page /coding-classes-in-virginia.
// Lesson family: time series (reshape wide to long, group by calendar month, find seasonality, handle gaps and totals).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'NORTHERN VIRGINIA', label: 'Northern Virginia', blurb: 'AI and Python for Northern Virginia teens, with a time series project on Arlington&rsquo;s public Wi-Fi data.' },
  market: US,
  slug: 'ai-and-python-classes-for-teens-in-northern-virginia',
  code: 'aptn',
  accent: '#6B334A',
  accentRationale: 'Northern Virginia: a muted plum, #6B334A, as allocated in alloc.tsv for row 134, distinct from the other US metro accents and readable on the paper',
  pageType: 'city',
  place: {
    name: 'Northern Virginia',
    eyebrow: 'Northern Virginia',
    schemaType: 'Place',
    chain: [
      { type: 'State', name: 'Virginia' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Northern Virginia',
  title: 'AI and Python Classes for Teens in Northern Virginia | Live',
  description: 'AI and Python classes for teens in Arlington, Fairfax and Alexandria, taught live online on Eastern Time, with a time series project on Arlington public Wi-Fi data.',
  ogDescription: 'Live online AI and Python for Northern Virginia teenagers: reshape six years of Arlington Wi-Fi counts, find the seasons in the data, then build models on it.',
  twitterDescription: 'Northern Virginia teens: live online AI and Python with a real time series project.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online AI and Python Classes for Northern Virginia Teens',
    description: 'Python, data science, machine learning and AP Computer Science for teens in Arlington, Fairfax, Alexandria and Loudoun, taught live online in small level-matched groups or one to one.'
  },

  h1: 'AI and Python classes for teens in Northern Virginia',
  capsuleQ: 'Where can a Northern Virginia teen learn AI and Python from a live teacher?',
  capsule: 'Live, with a real teacher, online. Teens in Arlington, Fairfax, Alexandria and across Northern Virginia, grades 7 to 12, learn Python, data science and machine learning with Modern Age Coders, either in a small group matched to their stage or with a private teacher, on Eastern Time. They practise on real public data, such as six years of monthly Arlington Wi-Fi counts, before training a single model.',
  lead: 'Northern Virginia teens grow up surrounded by technology jobs, and many of them already know that AI runs on data. Fewer have handled the kind of data AI actually runs on: numbers that arrive month after month, with gaps, oddities and a column layout nobody would choose. Arlington County publishes exactly such a file, the monthly user counts for its free outdoor Wi-Fi hotspots since July 2020. This page uses it to show how our live classes teach Python and AI to teens, from reshaping a table to spotting seasons in a time series, and it points to our <a class="cg-inline-link" href="/coding-classes-in-virginia">Virginia page</a> for the state&rsquo;s computer science rules.',
  wa: 'Hello Modern Age Coders, I would like a free AI or Python class for a teenager in Northern Virginia.',

  picks: {
    eyebrow: 'Course picks for Northern Virginia teens',
    h2: 'Four courses for teens who want the real thing',
    intro: 'Matched to grade and goal; a free first lesson confirms the starting level.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 10', note: 'Python from the ground up, through files, dictionaries and the date handling every time series needs.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 8 to 12', note: 'pandas, reshaping and charts, built around projects like the Arlington Wi-Fi series.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 9 to 12', note: 'Machine learning with honest evaluation, including how to test a model on data from the future.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science A in Java, with timed practice that fits around a full school schedule.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: '', eyebrow: 'Signature project',
      h2: 'Six years of Arlington public Wi-Fi: a first real time series',
      intro: 'Arlington County&rsquo;s open data directory lists Outdoor Wireless Hotspot Usage, monthly counts for the free ArlingtonWireless network at community centers, libraries and parks. We downloaded the file on 18 October 2026; here is what a teen finds inside it.',
      body: [
        { kind: 'table', caption: 'Shape and traps of the Arlington Outdoor Wireless Hotspot Usage file (our reading of the download of 18 October 2026)', head: ['What the file holds', 'Our count', 'Why it matters'], rows: [
          ['Rows', '28: 26 hotspots, one row named Total Authenticated Access By Month, one empty row', 'Summing every row would count each user connection twice'],
          ['Columns', '75 months, July 2020 to September 2026, one column each', 'A wide table: dates are column names, not values'],
          ['Empty cells', '137 of the 1,950 hotspot-month cells', 'Missing is not zero; 14 hotspots report every month, 12 do not'],
          ['Total row check', 'Equals the sum of the 26 hotspots in all 75 months', 'A good sign, and a check worth automating'],
          ['Odd values', 'Fractional counts, such as 647.58, in July and August 2022 for two hotspots', 'Unique daily connections should be whole numbers, so flag and ask']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Wide to long', p: 'Each month is a column with a name like "Wed Jul 01 2020 00:00:00 GMT+0000". Teens use pandas melt to turn 75 columns into one date column, then parse those JavaScript-style strings into real dates.' },
          { h3: '2. Drop what is not data', p: 'The total row and the empty row come out before any sum. Keeping the total row aside lets students test their own sums against it, month by month.' },
          { h3: '3. Group by month', p: 'With the series long and clean, group by calendar month across 2021 to 2025. The averages show a clear low in January, 17,267, and a high in October, 23,049.' }
        ] },
        { kind: 'table', mt: true, caption: 'Arlington Wi-Fi monthly totals across all 26 hotspots, selected months (our reading of the county&rsquo;s total row)', head: ['Month', 'Unique daily connections, summed for the month'], rows: [
          ['July 2020, first month in the file', '12,280'],
          ['December 2020, lowest month', '8,155'],
          ['June 2022, highest month', '27,711'],
          ['September 2025', '23,454'],
          ['September 2026, latest month', '25,468']
        ] },
        { kind: 'callout', h3: 'A connection is not a person', p: 'The county explains that monthly usage counts are the sum of unique, daily user connections to each hotspot. Someone who connects on twenty days counts twenty times. So a month with 27,711 connections does not mean 27,711 people, and a teen who writes "27,711 users" has misread the data. Getting the unit right comes before any chart.' },
        { kind: 'p', text: 'All figures here are ours, computed from one download of the county&rsquo;s file on 18 October 2026; Arlington updates it over time. We could not read the county&rsquo;s open data terms page on that date, so we quote only a few counts with credit to Arlington County, do not republish the file, and ask students to download it themselves.' },
        { kind: 'p', text: 'Advanced students take the series further: a 12-month rolling average to separate trend from season, a simple forecast for the next three months, and then the most important step, testing that forecast only on months it never saw. Hotspot names tell their own story too: 8 contain the word Library, 9 Community Center and 3 Fire Station, a neat first exercise in grouping by a substring.' }
      ]
    },
    {
      id: 'region', tint: 'deep', eyebrow: 'Northern Virginia facts',
      h2: 'Parks, libraries and public Wi-Fi, by the official numbers',
      intro: 'Figures from Fairfax County&rsquo;s own pages and the Arlington County data file, read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'Northern Virginia public facilities, as the counties publish them', head: ['What', 'Figure', 'Source'], rows: [
          ['Fairfax County Park Authority created', 'December 6, 1950', 'Park Authority, About Us'],
          ['Fairfax County parks', '420 parks on more than 23,000 acres', 'Park Authority, About Us'],
          ['Fairfax County trails', '325 miles, the most popular amenity', 'Park Authority, About Us'],
          ['Fairfax athletic fields', '263, including 39 synthetic turf fields', 'Park Authority, About Us'],
          ['Fairfax nature and visitor centers', 'Five', 'Park Authority, About Us'],
          ['Fairfax County Public Library', 'Nine regional branches, 13 community branches and an Access Services branch', 'Fairfax County Public Library'],
          ['Arlington outdoor Wi-Fi hotspots in the file', '26 (our count)', 'Arlington County open data']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Libraries and Wi-Fi', p: 'Fairfax lists nine regional and 13 community library branches, and in Arlington 8 of the 26 Wi-Fi hotspots carry a library name. Free access is easy to find; structured, teacher-led coding is what we add.' },
          { h3: 'Data you can join', p: 'A strong extension project asks whether hotspots at libraries follow a different seasonal pattern from those at community centers. It needs a join, a group-by and a careful sentence about cause.' },
          { h3: 'Fields and seasons', p: 'With 263 athletic fields in Fairfax alone, many teens have practice most evenings. The time series lesson doubles as a way to plan a study week around the seasons of their own year.' }
        ] }
      ]
    },
    {
      id: 'virginia', tint: 'tint', eyebrow: 'Virginia schools',
      h2: 'Computer science in Virginia, briefly',
      intro: 'Our <a class="cg-inline-link" href="/coding-classes-in-virginia">Virginia page</a> covers the state&rsquo;s rules in full; here is the one figure a Northern Virginia family most often asks about.',
      body: [
        { kind: 'p', text: 'Code.org&rsquo;s 2025 State of AI + CS Education data lists 229 of 335 Virginia high schools, about 68.4%, offering a foundational computer science course in 2023 to 2024, the most recent Virginia year we can quote. Source line: Code.org (2025). 2025 State of AI + CS Education. The Virginia Department of Education site refused our requests on 18 October 2026, so nothing here is quoted from it; for teens, the practical question is less which rule applies and more which course to take next, and whether a school class leaves enough time for projects.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Eastern Time',
      h2: 'Class times around a Northern Virginia school week',
      intro: 'Northern Virginia follows America/New_York in the IANA time zone database, and India keeps one time all year.',
      body: [
        { kind: 'p', text: 'A worked example, ours rather than a fixed timetable: a Saturday class at 8:00 in the morning in Arlington begins at 5:30 in the evening in India until October 31, 2026. When Eastern Daylight Time, four hours behind UTC, gives way to Eastern Standard Time, five hours behind, the same class lands at 6:30 in the Indian evening from November 1, 2026, and slides back to 5:30 once March 14, 2027 arrives.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Pick the slot', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'A time series of your own', p: 'Daylight saving is itself a time series bug waiting to happen: a script that stores 9 hours 30 minutes breaks on November 1, 2026. Teens learn to store America/New_York and let the library do the work.' },
          { h3: 'Always in Eastern Time', p: 'Every slot we agree is written in Eastern Time and checked again before each clock change, so a teen never logs in an hour early.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first loop to a forecast you can trust',
    intro: 'Grades are guides; the first lesson with a teacher decides the starting point.',
    cols: [
      { band: 'Grades 6 to 8', h3: 'Python basics', p: 'Loops, lists and functions through small games and short data tasks.', courses: ['python-ai-kids-masterclass', 'python-complete-masterclass-teens'] },
      { band: 'Grades 8 to 10', h3: 'Data handling', p: 'Dates, reshaping and charts, with the Arlington Wi-Fi series as practice.', courses: ['data-science-course-for-teens-python-data', 'mysql-mastery-for-teens'] },
      { band: 'Grades 9 to 12', h3: 'Machine learning', p: 'Models, validation and forecasting, always tested on unseen data.', courses: ['ai-ml-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Grades 10 to 12', h3: 'AP and security', p: 'AP Computer Science A, plus defensive cybersecurity for teens who want both.', courses: ['ap-computer-science-a-java-exam-prep-course', 'cybersecurity-course-for-teens-ethical-defensive'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why a forecasting model must never see the future',
    intro: 'Time series teach the one AI mistake that fools even professionals.',
    p1: 'Shuffle the Arlington months at random, train a model on most of them and test on the rest, and it will look brilliant, because it has peeked at months on both sides of every test month. In real life a forecast only has the past. Teens who build the split themselves, training up to a date and testing after it, see their accuracy drop and understand why.',
    p2: 'That habit carries over to every AI project. In our classes, AI assistants may help teens draft code within each tool&rsquo;s own age terms, but every suggestion is run, read and tested against a result the teen can check by hand. Adult-only tools are never used with students under 18.',
    closer: 'A Northern Virginia teen who can explain why a shuffled test set lies is ready for serious AI work.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online, from Ashburn to Alexandria',
    intro: 'No Beltway traffic and no Orange Line transfers: teens log in from their own desk.',
    cells: [
      { h3: 'Taught in real time', p: 'A teacher leads each session live, watches code run on the teen&rsquo;s screen and answers questions on the spot.' },
      { h3: 'School-year aware', p: 'Teachers plan around US grades and the Virginia school calendar. Anything a school grades stays the teen&rsquo;s own work.' },
      { h3: 'A free first lesson', p: 'One full lesson, then a recommended level, course and time. Card details are not taken.' },
      { h3: 'Groups at one level', p: 'Fifteen to twenty teens at a similar stage, from Virginia and across the US.' },
      { h3: 'One-to-one teaching', p: 'A private teacher for AP preparation, a competition entry or a research-style project.' },
      { h3: 'Eastern Time', p: 'Weekdays or weekends, flexible, with each slot confirmed in Eastern Time.' }
    ],
    spec: { title: 'Online, with no local office', p: 'All teaching is live and online from India. Modern Age Coders has no office in Northern Virginia or anywhere in the state and claims none, and is not connected with Arlington County, Fairfax County, the City of Alexandria or the Virginia Department of Education.' }
  },

  fees: {
    h2: 'Fees for Northern Virginia families',
    intro: 'A free first lesson, then one monthly fee in US dollars.',
    first: 'A free lesson with a teacher, ending with a suggested level, course and Eastern Time slot.',
    group: 'A month of classes in a group of fifteen to twenty teens at one level.',
    private: 'A month of private classes with a single teacher.',
    closer: 'Arlington, Fairfax, Alexandria and Loudoun all pay the same US dollar fee. The first charge comes only after the free lesson and your choice of course, and the pricing page explains breaks and missed classes.'
  },

  reviewsH2: 'Google reviews from parents and teens',

  book: {
    h2: 'Reserve a trial lesson for a Northern Virginia teen',
    intro: 'Share the grade and what your teen enjoys. Seventh graders often begin with a Python game; juniors may jump straight to the Wi-Fi series or a forecasting model.',
    success: 'Thank you. We will be in touch soon to set up a free class for your teen in Northern Virginia.'
  },

  faq: {
    h2: 'Questions from Northern Virginia families',
    intro: 'What parents and teens in Arlington, Fairfax and Alexandria ask first.',
    items: [
      { q: 'What is the Arlington Wi-Fi time series project?', a: 'Teens download Arlington County\'s Outdoor Wireless Hotspot Usage file, reshape 75 monthly columns into one series, remove the total row, and find seasonal patterns across 2021 to 2025.' },
      { q: 'Why is a total row a problem?', a: 'The file includes a row that already sums all 26 hotspots. Add every row together and each connection is counted twice, so it must be set aside first.' },
      { q: 'Does 27,711 connections mean 27,711 people?', a: 'No. The county says monthly counts are the sum of unique daily connections, so a person who connects on many days is counted many times.' },
      { q: 'What share of Virginia high schools teach computer science?', a: 'According to Code.org (2025), 229 of 335, roughly 68.4%, in 2023 to 2024. The full state rules are on our Virginia page.' },
      { q: 'What time are classes for Northern Virginia teens?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Eastern Time.' },
      { q: 'What happens to class times on November 1?', a: 'US clocks go back on November 1, 2026 and forward on March 14, 2027 while India stays put, so we confirm each Eastern Time slot again before both dates.' },
      { q: 'My teen has never coded. Is that a problem?', a: 'Not at all. The teen Python course assumes no experience, and anyone who already codes is moved to a faster group after the trial.' },
      { q: 'Which AI tools will my teen use?', a: 'Tools are chosen by their published age rules, so nothing adult-only reaches an under-18 class, and the bulk of each lesson is Python the teen types and tests.' },
      { q: 'Do you have a center in Arlington or Fairfax?', a: 'No. There is no building to visit: teaching streams live from India to a laptop at home with a headset and a dependable connection.' },
      { q: 'Where do I see the fees?', a: 'In the fees section of this page: a free first lesson, then a monthly group or one-to-one fee in US dollars, charged only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Northern Virginia teens',
    html: 'For Virginia&rsquo;s computer science rules, read <a class="cg-inline-link" href="/coding-classes-in-virginia">coding classes in Virginia</a>. Teens aiming at AP can see <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>, and builders can try the <a class="cg-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Northern Virginia and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-classes-in-virginia', label: 'Virginia' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A classes' },
    { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' }
  ],

  personalityCss: `
.cg-root.cg-aptn .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.9vw, 2.4rem); }
.cg-root.cg-aptn .cg-hero h1 { font-weight: 710; letter-spacing: -0.019em; line-height: 1.05; }
.cg-root.cg-aptn .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-aptn .cg-eyebrow { letter-spacing: 0.12em; font-weight: 640; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-aptn .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.013em; }
.cg-root.cg-aptn .cg-grid-3 { gap: clamp(0.85rem, 2.3vw, 1.7rem); }
.cg-root.cg-aptn .cg-table caption { font-weight: 660; text-align: left; }
.cg-root.cg-aptn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aptn .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-aptn .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Virginia: rules left to /coding-classes-in-virginia; Code.org (2025) raw sheet Most Recent Access Data, VA 2023-2024, 229 of 335 (68.4%), no 2024-2025 figure printed; IANA America/New_York and the US DST rule. doe.virginia.gov returned 403.',
    localProject: 'Arlington County Open Data Directory, Outdoor Wireless Hotspot Usage (ArlingtonWireless), downloaded 18 October 2026: 28 rows (26 hotspots, a total row, an empty row), 75 monthly columns July 2020 to September 2026, 137 of 1,950 cells empty, total row equal to the hotspot sum every month, fractional values in July and August 2022; our figures June 2022 27,711 high, December 2020 8,155 low, 2021 to 2025 January average 17,267 and October 23,049. Lesson family: time series (wide to long, group by month, seasonality, gaps and totals).',
    requiredMentions: [
      '28: 26 hotspots',
      '75 months, July 2020 to September 2026',
      '137 of the 1,950 hotspot-month cells',
      '647.58',
      '27,711',
      '8,155',
      '17,267',
      '23,049',
      'December 6, 1950',
      '420 parks on more than 23,000 acres',
      '263, including 39 synthetic turf fields'
    ],
    sources: [
      { claim: 'Arlington County Open Data Directory: Outdoor Wireless Hotspot Usage, description and file.', url: 'https://download.data.arlingtonva.us/Uploads/AutomatedJobs/Outdoor+Wireless+Usage+Stats.json' },
      { claim: 'Arlington County Open Data Directory.', url: 'https://data.arlingtonva.us/' },
      { claim: 'Fairfax County Park Authority, About Us: founding date, parks, acres, trails, fields, centers, board.', url: 'https://www.fairfaxcounty.gov/parks/about-us' },
      { claim: 'Fairfax County Public Library: regional, community and Access Services branches.', url: 'https://www.fairfaxcounty.gov/library/' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Virginia access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb northamerica: America/New_York and the US DST rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Arlington County web pages, its open data terms page and Arlington Public Library: 403 on 18 October 2026, not retried; no licence text could be read, so only a few counts are quoted with credit and the file is not republished.',
      'Virginia Department of Education pages: 403, not retried; Virginia CS rules are left to the existing Virginia page.',
      'A 2024 to 2025 Virginia access figure: the sheet repeats the 2023 to 2024 value, so it is not printed.',
      'Arlington bike and pedestrian counters: counters.bikearlington.com did not connect; not used.',
      'Hotspot names that are names of people: not printed; only generic names such as Central Library.',
      'Yearly Wi-Fi totals: not printed; the page uses the county\'s monthly total row and our monthly averages, labelled as ours.',
      'Any affiliation with Arlington County, Fairfax County, the City of Alexandria or the Virginia Department of Education.'
    ]
  }
};
