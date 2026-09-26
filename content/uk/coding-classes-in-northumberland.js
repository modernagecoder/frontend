'use strict';
// Northumberland (cg- county index, UK cluster Phase 7, row 243). One unitary council. Spine: when can you drive to
// Holy Island? Northumberland County Council, Holy Island Safe Crossing Times (holyislandcrossingtimes.northumberland
// .gov.uk, twelve monthly tables September 2026 to August 2027 read raw 26 September 2026; earlier 2026 months show no
// table). Page text: times are for the Lindisfarne Causeway ROAD; "Always allow 30 minutes extra time"; the walking
// route over the sands is not covered; "NEVER CROSS DURING A RISING TIDE"; the council "can accept no responsibility".
// Clock-change rows are labelled in the table: 24/25 October 2026 unsafe "00:15 BST (Sun) until 05:05 GMT (Sun)".
// Our parse (scratchpad nbl/cross.py, Europe/London via zoneinfo): 365 day rows, 1,460 intervals as printed, 50
// printed twice (a night window at the end of one row and the start of the next), 1,410 distinct, no gaps or overlaps,
// labels always alternate. 705 safe windows, 5,244.8 of 8,758.2 hours = 59.9 per cent; window length 5.42 to 10.42 h,
// median 7.33 h. Clock changes: 25 October 2026 unsafe period naive 290 min, true 350; 27 to 28 March 2027 safe window
// 21:00 GMT to 05:25 summer time naive 505 min, true 445. A daytime visit (a safe window giving 4 h inside 09:00 to
// 18:00 local, with 30 min trimmed off the window's end): 242 of 365 days; 259 without the trim; by month 18 to 22.
// Lesson family: time intervals in code (crossing midnight, duplicates, clock changes, UTC storage), interval
// intersection; screened (Lindisfarne, Holy Island: 0 hits; interval as a word is common, no causeway or clock-change
// interval lesson found).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (Northumberland 320,567); ONS built-up areas, all
// inside, agree with our OA sums. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'NORTHUMBERLAND', blurb: 'One council from Blyth to Berwick, and a Holy Island lesson in handling times that cross midnight and clock changes.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-northumberland',
  code: 'nbl',
  accent: '#37567A',
  accentRationale: 'Northumberland: a cold North Sea steel blue from the solver (6.1:1 on the darkest paper tint), bluer than the Norfolk and Cumbria accents',
  pageType: 'governorate',
  place: {
    name: 'Northumberland',
    eyebrow: 'Northumberland',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'North East England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Newcastle', href: '/best-coding-class-in-newcastle-upon-tyne' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Northumberland',
  title: 'Coding Classes in Northumberland | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Northumberland, from Blyth, Cramlington and Ashington to Morpeth, Hexham, Alnwick and Berwick-upon-Tweed.',
  ogDescription: 'Coding classes for all of Northumberland, and a Holy Island project: turn a year of causeway safe crossing times into data and catch the two nights the clock change breaks a naive program.',
  twitterDescription: 'Northumberland coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Northumberland',
    description: 'Ability-placed online coding, Python, data and mathematics for children, teenagers and adults across Northumberland, taught live in English.'
  },

  h1: 'Coding classes in Northumberland',
  capsuleQ: 'What are the best coding classes in Northumberland?',
  capsule: 'Northumberland is a single council area, and at the 2021 Census it had 320,567 residents. Most live in the south-east towns of Blyth, Cramlington, Ashington and Bedlington, with Morpeth, Berwick-upon-Tweed, Hexham and Alnwick further out. Teaching happens live over video from India, and learners are grouped by the level they have reached, so age is never the deciding factor. We teach from age 6 up to 67, in small groups of five to ten or one-to-one, covering coding, Python, data and maths. The Northumberland project comes from the tide tables for the Holy Island causeway. Your first lesson costs nothing; if you continue, it is USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'Twice a day the North Sea covers the causeway to Holy Island, and Northumberland County Council publishes the safe crossing times a year and more ahead, with a warning to allow 30 minutes extra. Those tables are real data with every awkward feature a programmer meets in the wild: windows that run past midnight, the same window printed on two different days, and two nights a year when the clocks change in the middle of a window. This page\'s project reads twelve months of the council\'s tables into Python, checks them for gaps and overlaps, and answers a practical question: on how many days could a family fit a four-hour daytime visit?',
  wa: 'Hello Modern Age Coders, we are in Northumberland and would like to try a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Northumberland',
    h2: 'Where Northumberland learners start',
    intro: 'A six-year-old in Morpeth trying blocks for the first time, a Year 7 in Hexham who likes timetables and calendars, a Year 11 in Cramlington ready for proper Python, and an adult in Alnwick who wants to automate a spreadsheet. Each of them starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, with timers, clocks and countdowns.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, with games, puzzles and first steps with data and AI.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from beginner to advanced for teenagers, through games, automation, data and AI projects.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Python for adults who want to automate the dull parts of their work, from files to dates and schedules.' }
    ]
  },

  sections: [
    {
      id: 'northumberland', tint: '', eyebrow: 'Northumberland in figures',
      h2: '320,567 people from Blyth to Berwick',
      intro: 'The population is the 2021 Census count on Nomis. Towns are ONS built-up areas, and we checked each by adding up the census output areas it contains.',
      body: [
        { kind: 'table', caption: 'Northumberland built-up areas with at least 8,000 residents, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Blyth', '39,730', 'Berwick-upon-Tweed', '13,175'],
          ['Cramlington', '28,845', 'Hexham', '10,945'],
          ['Ashington', '28,280', 'Prudhoe', '10,280'],
          ['Bedlington', '16,185', 'Ponteland', '10,150'],
          ['Morpeth', '14,420', 'Alnwick', '8,435'],
          ['Stakeford', '8,190', 'Seaton Delaval', '8,010']
        ] },
        { kind: 'p', text: 'Northumberland is a county of contrasts: well over half of the people in the table live in the busy south-east corner near Tyneside, while the towns of the north and west are smaller and much further apart. Smaller places such as Newbiggin-by-the-Sea and Amble come next. Every published figure agrees with our own count, and every town sits wholly inside the county. Northumberland County Council and academy trusts set school holidays, which we did not read; each family tells us its dates.' },
        { kind: 'callout', h3: 'Tyneside is next door', p: 'For the city just south of the county, see our <a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle upon Tyne</a> page. Across the Border, our <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page covers families on the other side of the Tweed.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Northumberland project',
      h2: 'A year of Holy Island tides, read by a program',
      intro: 'The council\'s safe crossing tables, twelve months of them, and the traps they hold for anyone handling time in code.',
      body: [
        { kind: 'p', text: 'Each day in the council\'s table has four entries, alternating safe and unsafe, like "21:50 until 04:15 (Wed)". The learner writes a parser that turns every entry into a proper start and end moment, working out the right date when a window runs past midnight. For September 2026 to August 2027 that gives 365 rows and 1,460 entries. The first check finds that 50 of them are printed twice, because a night window ends one row and begins the next. Removing those leaves 1,410 distinct windows that fit together perfectly: no gaps, no overlaps, and safe and unsafe always taking turns.' },
        { kind: 'table', caption: 'Our analysis of the council\'s tables, September 2026 to August 2027', head: ['Question', 'Answer from our program'], rows: [
          ['Share of the year the road is safe', '59.9 per cent, in 705 separate windows'],
          ['Length of a safe window', 'From 5.42 to 10.42 hours; the middle value is 7.33'],
          ['25 October 2026, clocks go back', 'An unsafe period that looks like 4 h 50 min really lasts 5 h 50 min'],
          ['27 to 28 March 2027, clocks go forward', 'A safe window that looks like 8 h 25 min really lasts 7 h 25 min'],
          ['Days with a four-hour daytime visit', '242 of 365, or 259 if you ignore the 30-minute warning']
        ] },
        { kind: 'p', text: 'The clock-change rows are the heart of the lesson. The council labels them carefully, for example an unsafe period from 00:15 in summer time until 05:05 Greenwich Mean Time on 25 October 2026. A program that simply subtracts clock readings gets the length wrong by exactly an hour, in opposite directions in autumn and spring. The fix every professional uses is to convert each moment to universal time before doing arithmetic, and to convert back only for display. Python\'s zoneinfo module does this for the Europe/London time zone in a few lines.' },
        { kind: 'p', text: 'The last question is the practical one. We looked for days with a safe window that covers at least four hours between 09:00 and 18:00, after taking 30 minutes off the end of the window as a cautious reading of the council\'s advice. That is true on 242 days of the 365, and the monthly count ranges from 18 to 22. The 30-minute margin alone removes 17 days, a small rule with a visible effect.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw a week of safe and unsafe times as coloured bars on a 24-hour strip and spot the windows that cross midnight.' },
          { h3: 'Ages 11 to 15', p: 'Parse one month of the table in Python, fix the midnight dates, and add up the safe hours.' },
          { h3: 'Ages 15 and up', p: 'Parse the full year with time zones, remove duplicates, test that the windows join up, and find the clock-change errors a naive version makes.' }
        ] },
        { kind: 'callout', h3: 'Safety first, and whose data this is', p: 'The crossing times belong to Northumberland County Council, which says they apply only to the road, can be changed by weather, and should always be given 30 minutes extra; the walking route over the sands has its own dangers. Our counts and visit windows are a coding exercise. Anyone planning a crossing should check the council\'s own page on the day.' }
      ]
    },
    {
      id: 'causeway', tint: 'deep', eyebrow: 'Why Holy Island',
      h2: 'A road that the sea takes back twice a day',
      intro: 'The Northumberland link, in the council\'s own warnings.',
      body: [
        { kind: 'table', caption: 'What Northumberland County Council says about the safe crossing times', head: ['Point', 'The council\'s page'], rows: [
          ['What the times cover', 'The Lindisfarne Causeway road, for driving to or from Holy Island.'],
          ['Margin', 'Always allow 30 minutes extra time, as local weather such as high wind can change the times.'],
          ['Walking route', 'The marked route over the sands and mud is not covered by the times.'],
          ['Walkers', 'Never cross during a rising tide, and finish before the middle of the safe period.'],
          ['Responsibility', 'The times are given in good faith; the council accepts no responsibility for decisions based on errors.']
        ] },
        { kind: 'p', text: 'Holy Island shows that data about time is only useful when a program handles time correctly. Timetables, booking systems, alarms and medicine reminders all meet the same traps of midnight, duplicates and clock changes, and mistakes cost more than a late arrival. A Northumberland student who has made a year of causeway times add up exactly has learned habits that professional developers rely on.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Northumberland County Council. Its tables and warnings are its own; our program, our counts and any errors are ours, and nothing here replaces the council\'s published times.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle upon Tyne</a> is just south; <a class="cg-inline-link" href="/coding-classes-in-cumbria">Cumbria</a> and <a class="cg-inline-link" href="/best-coding-class-in-carlisle">Carlisle</a> lie west, and <a class="cg-inline-link" href="/coding-classes-in-county-durham">County Durham</a> beyond Tyneside.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From countdown timers to time-zone-proof code',
    intro: 'The free lesson shows where to begin. Age gives a clue, and ability decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Timers and clocks', p: 'Block coding with timers, countdowns and day-night games, where children first think about time in a program.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 to 13', h3: 'Reading tables', p: 'Typed Python that reads simple tables, adds up hours and draws bar charts.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Real messy data', p: 'Python with files, dates and time zones, checked with tests so the answers can be trusted.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Automate the calendar', p: 'Python for adults, from basic scripts to automating reports, rotas and schedules.', courses: ['python-ai-automation-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and time',
    h2: 'An AI can read a tide table. Will it notice the night the clocks change?',
    intro: 'Dates and times are where confident answers most often go quietly wrong.',
    p1: 'Paste a month of the causeway table into a chatbot and ask how long each window lasts, and it will usually do the subtraction without trouble, except perhaps on the one night a year when the clocks change, where a plain subtraction is an hour out. Code written by AI tools can carry the same flaw, and it only shows on two nights a year, long after anyone has stopped testing.',
    p2: 'A Northumberland student who has seen the 4 h 50 min window that is really 5 h 50 min knows to test the awkward dates on purpose: midnight, month ends, leap days and clock changes. That habit catches the bugs that neither people nor AI tools tend to look for.',
    closer: 'So a young person in Northumberland should learn to code in 2026 to catch the mistakes that only happen on rare days.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Day to day',
    h2: 'The Cheviots to the coast, without the drive',
    intro: 'Northumberland is big and thinly populated in the north and west, so a weekly class in one town is a long trip for many. Online lessons fix that.',
    cells: [
      { h3: 'Right where you are', p: 'A farmhouse near Rothbury, a semi in Blyth, a cottage in Wooler. Everyone sees the same screen, and the learner does the typing.' },
      { h3: 'School words you know', p: 'We use year groups, key stages, GCSEs and A levels as Northumberland schools do, and teach in English.' },
      { h3: 'No cost to try', p: 'A real first lesson, then honest advice on level and course. We do not ask for card details.' },
      { h3: 'A class at your stage', p: 'Five to ten learners at the same point, from Northumberland and many other places.' },
      { h3: 'Holidays kept', p: 'Two lessons a week suits most learners, and we pause for your school\'s breaks.' },
      { h3: 'A fixed UK time', p: 'We book you in UK time and it stays the same through the clock changes; the teacher works in India time, hours ahead, and does the adjusting.' }
    ],
    spec: { title: 'Why level comes first', p: 'In a county this spread out, five learners at one stage who are free on the same evening almost never live near each other. Level-based groups mean a learner in Wooler or Haltwhistle still joins a class that suits them.' }
  },

  fees: {
    h2: 'Fees in Northumberland',
    intro: 'Ashington or Alnwick, the price is the same, and it is the price in every country we teach outside India.',
    first: 'A full lesson with real work, then a clear recommendation for level and course.',
    group: 'About eight lessons a month, in a group of five to ten at the same level.',
    private: 'About eight lessons a month, just the learner and the teacher.',
    closer: 'Our prices are in US dollars, never pounds. We charge nothing until the free lesson has agreed a course and a weekly time; the pricing page explains pauses, missed lessons and changing between group and private.'
  },

  reviewsH2: 'Google reviews from families we have taught',

  book: {
    h2: 'Book a free lesson in Northumberland',
    intro: 'Share an age or school year and a favourite hobby. A first lesson could be a Scratch countdown, a Python table, or the causeway times on this page.',
    success: 'Thank you. We have your Northumberland request.'
  },

  faq: {
    h2: 'Northumberland questions',
    intro: 'The county, the Holy Island project and the everyday details.',
    items: [
      { q: 'How many people live in Northumberland?', a: 'Northumberland had 320,567 usual residents at the 2021 Census, from ONS figures on Nomis.' },
      { q: 'What are the largest towns in Northumberland?', a: 'By ONS built-up area: Blyth 39,730, Cramlington 28,845, Ashington 28,280, Bedlington 16,185 and Morpeth 14,420.' },
      { q: 'What is the Holy Island project?', a: 'Learners parse a year of Northumberland County Council safe crossing times into Python, remove the 50 repeated entries, check the 1,410 windows join up, fix the two clock-change nights, and count 242 days with a four-hour daytime visit.' },
      { q: 'Why do clock changes cause bugs?', a: 'Subtracting clock readings across a change gives an answer one hour out. Programs should convert each moment to universal time before doing arithmetic, and back to local time only for display.' },
      { q: 'Can I use this page to plan a crossing?', a: 'No. Always use Northumberland County Council\'s own safe crossing times on the day, allow the 30 minutes extra it asks for, and follow its warnings.' },
      { q: 'Is there a Northumberland classroom?', a: 'No. All lessons are live online, so learners join from home anywhere in the county.' },
      { q: 'Which ages do you teach?', a: 'Anyone aged 6 to 67. Blocks for young children, typed Python from about eight to ten, advanced Python and data for teenagers, and automation or Python for adults. The free lesson finds the level.' },
      { q: 'Do you teach Python to adults?', a: 'Yes. The adult automation course uses Python on real work tasks, including files, dates and schedules.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that it is USD 100 a month for a group place or USD 150 a month one-to-one, with no joining fee and no contract.' },
      { q: 'Do you stop for Northumberland school holidays?', a: 'If you want us to. Northumberland County Council and academy trusts publish their dates, and we pause around yours.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Pages close to Northumberland',
    html: 'Tyneside has <a class="cg-inline-link" href="/best-coding-class-in-newcastle-upon-tyne">Newcastle upon Tyne</a>; to the west are <a class="cg-inline-link" href="/coding-classes-in-cumbria">Cumbria</a> and <a class="cg-inline-link" href="/best-coding-class-in-carlisle">Carlisle</a>, and north of the Border is <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Northumberland and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-newcastle-upon-tyne', label: 'Newcastle' },
    { href: '/coding-classes-in-cumbria', label: 'Cumbria' }
  ],

  personalityCss: `
.cg-root.cg-nbl .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.7rem); }
.cg-root.cg-nbl .cg-hero h1 { font-weight: 700; letter-spacing: -0.022em; line-height: 1.05; }
.cg-root.cg-nbl .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-nbl .cg-eyebrow { letter-spacing: 0.18em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-nbl .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.019em; }
.cg-root.cg-nbl .cg-table caption { font-style: italic; text-align: left; }
.cg-root.cg-nbl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nbl .cg-table th { letter-spacing: 0.035em; font-weight: 700; }
.cg-root.cg-nbl .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 1rem; }
.cg-root.cg-nbl .cg-callout { border-left-width: 6px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Northumberland: one unitary council. ONS Census 2021 TS001 via Nomis: Northumberland 320,567. ONS built-up areas (published; agree with our OA sums, all inside): Blyth 39,730; Cramlington 28,845; Ashington 28,280; Bedlington 16,185; Morpeth 14,420; Berwick-upon-Tweed 13,175; Hexham 10,945; Prudhoe 10,280; Ponteland 10,150; Alnwick 8,435; Stakeford 8,190; Seaton Delaval 8,010; Newbiggin-by-the-Sea 5,950; Amble 5,860. Northumberland County Council, Holy Island Safe Crossing Times: "The times provided are for those people who wish to use the Lindisfarne Causeway ROAD"; "Always allow 30 minutes extra time to compensate for these variables"; walking route "THESE TIMES DO NOT APPLY TO IT"; "NEVER CROSS DURING A RISING TIDE"; "Northumberland County Council can accept no responsibility for decisions taken on the basis of any inaccuracies". October 2026 table: "17:45 until 00:15 BST (Sun)", "00:15 BST (Sun) until 05:05 GMT (Sun)", "05:05 GMT until 11:40".',
    localProject: 'Interval data with time zones. Parsed September 2026 to August 2027 tables: 365 rows, 1,460 intervals, 50 duplicates, 1,410 distinct, 0 gaps or overlaps, labels alternate. 705 safe windows, 5,244.8 of 8,758.2 hours (59.9 per cent); min 5.42 h, median 7.33 h, max 10.42 h. Clock changes via zoneinfo Europe/London: 25 October 2026 unsafe 00:15 summer time to 05:05 GMT, naive 290 min, true 350; 27 to 28 March 2027 safe 21:00 GMT to 05:25 summer time, naive 505, true 445. Daytime visit test (4 h inside 09:00 to 18:00 local, 30 min trimmed from window end): 242 of 365 days; 259 untrimmed; monthly 18 to 22. Page says to use the council page on the day. AI angle: naive subtraction across clock changes, test rare dates on purpose. Lesson family: time intervals in code (midnight, duplicates, clock changes, UTC), interval intersection.',
    requiredMentions: [
      '320,567',
      'Holy Island',
      'Lindisfarne',
      'safe crossing',
      '242 days',
      'zoneinfo',
      'Cramlington',
      'Bedlington',
      'Stakeford',
      'Seaton Delaval',
      'Newbiggin-by-the-Sea',
      'Ponteland'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Northumberland, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Northumberland towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Northumberland County Council: Holy Island safe crossing times and safety notes.', url: 'https://holyislandcrossingtimes.northumberland.gov.uk/' }
    ],
    rejectedClaims: [
      'Any advice on when to cross: the page sends readers to the council\'s own times and repeats its warnings.',
      'Tide heights, causeway length or refuge box details: not read, not claimed.',
      'January to August 2026 crossing times: the site showed no table for past months, so the analysis uses September 2026 to August 2027.',
      'Hadrian\'s Wall, Kielder and Bamburgh facts: not researched for this page, not used.',
      'Northumberland school term dates: none read.',
      'Named Northumberland schools: none named.'
    ]
  }
};
