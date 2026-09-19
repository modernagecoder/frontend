'use strict';
// Glanmire, Cork (cg- district page, Ireland cluster, Phase 6). Named sources only (owner rule for
// districts), read 20 September 2026: Met Eireann daily rainfall for station 3404 "GLANMIRE
// (NORTHESK)" (data.gov.ie "Glanmire (Northesk) Rainfall Data", clidata.met.ie dly3404.csv); Met
// Eireann's 30 Year Averages page; Cork City Libraries' Glanmire Library page and Cork City Council
// library open data; Glanmire Community College's own site; the OPW Glashaboy Flood Relief Scheme
// site on floodinfo.ie. Spine: how many years before an average can be trusted (standard error and
// the square-root law). Scratchpad glm/. File: 01-feb-1952 to 31-dec-1960, 3,134 rows; whole months
// absent (no rows): Jan 1952, Jan 1953, May 1957, Jun 1958, Mar 1959; one "not available" day
// (30-sep-1953). Complete years 1954 1008.2, 1955 1047.9, 1956 1080.7, 1960 1418.7 mm: mean 1,138.9,
// sd 188.9, se 94.4, 95% t(3) 838 to 1,439 (+/-26.4%). Naive mean of 1953-1960 totals including
// years with an absent month 1,079.8. Without 1960 the mean is 1,045.6 (a shift of 93.3). With 30
// years at the same spread: se 34.5, 95% half-width 68 (5.9%), 2.74 times narrower. About 42 years
// for +/-5% at 95%. Tallaght owns bootstrap intervals; this page owns the square-root law and
// sample-size planning. The 2019 city boundary move is owned by the County Cork page.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'GLANMIRE', blurb: 'A 1950s rain gauge with four complete years, and why an average from four years could be out by a quarter either way.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-glanmire-cork',
  code: 'glm',
  accent: '#1F2F7A',
  accentRationale: 'Glanmire: a rain-gauge blue from the widened solver search, clear of the Arklow and Donegal blues',
  pageType: 'district',
  place: {
    name: 'Glanmire',
    eyebrow: 'Glanmire, Cork',
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
    { label: 'Bishopstown', href: '/coding-classes-in-bishopstown-cork' }
  ],
  routeLabel: 'Glanmire, Cork, Ireland',
  title: 'Coding Classes in Glanmire, Cork | Modern Age Coders',
  description: 'Coding, Python, AI and maths lessons for Glanmire learners aged 6 to 67, taught live online in small same-level groups or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Glanmire, with a data project on an old rain gauge and how many years an average needs before it can be trusted.',
  twitterDescription: 'Live online coding, Python, AI and maths for Glanmire, ages 6 to 67. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Glanmire',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Glanmire, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Glanmire',
  capsuleQ: 'What are the best coding classes in Glanmire?',
  capsule: 'In Glanmire each lesson is taught live on a video call by a teacher, to a small group at one level or to one learner, on two days of most weeks, and learners from six up to sixty-seven are welcome. There is no journey. Lesson one is on us; afterwards the monthly fee is USD 100 for a group place or USD 150 for a private learner.',
  lead: 'Met Éireann kept a rain gauge at Northesk in Glanmire from 1952 to 1960, and its daily readings are open data. How much rain falls there in a year? The file has four complete years, and they average 1,138.9 millimetres. A careful learner then asks the next question: how sure can four years make us? The honest answer is not very. The likely range runs from 838 to 1,439 millimetres, a quarter either way, and one wet year, 1960, moves the average by 93 millimetres on its own. This page teaches a learner to measure that uncertainty, to see why it shrinks only with the square root of the number of years, and to work out how many years a trustworthy average would need.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Glanmire.',

  picks: {
    eyebrow: 'Courses for Glanmire',
    h2: 'Four first courses for Glanmire',
    intro: 'Start from the age band that fits; the teacher checks the level in the free first lesson and suggests a switch if another course would suit better.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and a dice game: how the average of a few rolls jumps about, and how it settles with more.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Averages, spread and square roots in code, and why four times the data only halves the uncertainty.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real rainfall records in Python: checking for missing months, standard errors and how many years a result needs.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who report averages from small samples and need to say how far to trust them.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many years does an average need? A 1950s rain gauge in Glanmire',
      intro: 'Readings come from the Northesk gauge in Glanmire, published by Met Éireann as a daily file that runs from February 1952 to the end of 1960. A year counts here only if every day of it is in the file.',
      body: [
        { kind: 'table', caption: 'Glanmire (Northesk) annual rainfall and what four years can tell us', head: ['Measure', 'Result'], rows: [
          ['Complete years in the file', '1954, 1955, 1956 and 1960'],
          ['Their annual totals (millimetres)', '1,008.2, 1,047.9, 1,080.7 and 1,418.7'],
          ['Average of the four', '1,138.9, with a standard error of 94.4'],
          ['Likely range for the true average (95 percent)', '838 to 1,439 millimetres'],
          ['Years needed for plus or minus 5 percent', 'about 42']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'How unsure is the average?', p: 'The standard error, the spread of the yearly totals divided by the square root of the number of years, comes to 94.4 millimetres. With only four years the usual 95 percent range is wide, from 838 to 1,439, so the average could be out by about a quarter in either direction.' },
          { h3: 'The square-root law', p: 'Uncertainty shrinks with the square root of the number of years, not the number itself. The World Meteorological Organization sets 30 years as the standard for climate averages, and 30 years instead of four, with the same spread, would make the standard error 2.74 times smaller, not 7.5 times.' },
          { h3: 'One wet year', p: '1960 was far wetter than the other three complete years, at 1,418.7 millimetres. Leave it out and the average drops to 1,045.6, a shift of 93 millimetres from a single year, which is exactly the fragility a short record has.' }
        ] },
        { kind: 'callout', h3: 'An average needs its uncertainty beside it', p: 'An average from a handful of years looks as precise as one from a century; the number itself carries no warning. The standard error supplies the warning, and the square-root law explains why more data helps slowly: to halve the uncertainty you need four times as many years. Turned round, the same rule plans a study. For this gauge\'s spread, pinning the yearly average to within 5 percent would take about 42 years of records, which is why the standard reference period for climate averages is three decades.' },
        { kind: 'p', text: 'Before any statistics, the learner\'s program tallies how many days of the calendar each year actually contains, and that simple count exposes the trap. Five whole months are missing without a trace, January 1952, January 1953, May 1957, June 1958 and March 1959: no rows, no flags, simply absent. A total built from those years is quietly short by a month, and averaging all eight calendar years gives 1,079.8 millimetres, too low for exactly that reason. Keeping only the four complete years, the program computes the mean, the standard deviation and the standard error, builds the 95 percent range, recomputes without 1960, and then asks the planning question: how many years would bring the uncertainty down to 5 percent of the average?' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Missing rows are silent', p: 'A daily file with a month removed still looks complete at a glance, because nothing marks the gap. Counting days per year against the calendar is the only way to catch it, and it takes one line of code.' },
          { h3: 'The gauge in context', p: 'Met Éireann lists the station at 5 metres above sea level. Its readings stop at the end of 1960, so the page makes no claim about Glanmire\'s rainfall today, only about what four years can and cannot show.' },
          { h3: 'Not a trend', p: 'Four complete years, and nine calendar years in all, are far too few to say whether rainfall was rising or falling. The one wet year at the end is a reason for caution, not a finding.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Glanmire, named',
      h2: 'Glanmire from its library, its college and its flood scheme',
      intro: 'Each fact below is quoted from the organisation responsible.',
      body: [
        { kind: 'table', caption: 'Named places and projects in Glanmire', head: ['Place', 'What its own source says'], rows: [
          ['Glanmire Library', 'Hazelwood Shopping Centre, Glanmire, T45 E033'],
          ['Glanmire Community College', 'Brooklodge, Glanmire, T45 W965'],
          ['Glashaboy Flood Relief Scheme', 'Protection for some 103 properties'],
          ['Met Éireann rain gauge', 'Glanmire (Northesk), readings 1952 to 1960']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The flood scheme', p: 'The scheme\'s own website says significant flooding occurred in June 2012 in the Glanmire and Sallybrook area, and that when complete the scheme will protect some 103 properties, 78 homes and 25 businesses, with walls and embankments, culvert upgrades, channel widening and road re-grading.' },
          { h3: 'The library', p: 'Cork City Libraries lists staffed hours of 10.00 am to 5.30 pm from Tuesday to Saturday, while the council\'s open data file gives 10am to 6pm; registered My Open Library members can use the branch from 8.00 am to 10.00 pm every day. Bus route 214 serves it.' },
          { h3: 'The college', p: 'Glanmire Community College gives its address as Brooklodge, Glanmire, with the eircode T45 W965.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is given for Glanmire, because the page prints only what named bodies publish about the place. The rainfall figures come from one gauge that closed in 1960, and the page says nothing about flood risk beyond what the scheme itself publishes.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Two lessons a week for a Glanmire learner',
      intro: 'Most weeks include two lessons, each led live by the teacher all the way through.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Younger learners begin in block code with dice and coin games, watching an average wobble and then settle.' },
          { h3: 'Teenagers', p: 'Older students take on Python, web projects, AI and real weather records, with statistics they can run and check.' },
          { h3: 'Adults', p: 'Grown-ups may start with no background; the first lesson picks the course.' }
        ] },
        { kind: 'p', text: 'Rainfall is Met Éireann\'s published daily record for its Glanmire (Northesk) station; the completeness check, averages, standard error, range and years needed are our own calculations from 20 September 2026. Library, college and flood scheme details come from their own websites.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a wobbling average to a planned study',
    intro: 'The bands guide a first choice; lesson one fixes the level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'More rolls, steadier', p: 'Block-coded dice games that track the running average of the rolls.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Spread and square roots', p: 'Python that measures how far values sit from their average and why square roots appear.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Standard errors', p: 'Real rainfall files, completeness checks and the sample size a claim needs.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Small samples at work', p: 'Reporting averages from few observations with an honest range beside them.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how much rain falls in Glanmire',
    intro: 'It will give an average. It may not give its uncertainty.',
    p1: 'Paste the Northesk file into an AI assistant with a request for Glanmire\'s typical yearly rain, and the quick route is to total each calendar year and take the mean, which lands near 1,080 millimetres. That includes years with a whole month missing, and it says nothing about how little eight short years can pin down.',
    p2: 'The learner who has done this project asks the assistant to count days per year first, keep only complete years, and report the average with its standard error and range. Then comes the question an assistant cannot answer for them: is a range of a quarter either way good enough for what they want to say?',
    closer: 'A number without its uncertainty is only half a result. Code makes the other half easy to add.',
    blogAnchor: 'the lasting value of learning to code, for any age'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Glanmire',
    intro: 'The essentials.',
    cells: [
      { h3: 'Teacher-led', p: 'Every lesson is live, and the teacher follows and helps with each learner\'s code as it grows.' },
      { h3: 'By level', p: 'Groups of five to ten at the same level, from Glanmire, the rest of Ireland or abroad.' },
      { h3: 'Two set days', p: 'The same two days every week, about eight lessons in a month.' },
      { h3: 'Built around school', p: 'The plan steps around Christmas, Easter, summer, mid-terms and exam season.' },
      { h3: 'Set-up at home', p: 'A computer with a keyboard, a microphone, headphones or speakers, and internet that can carry a video call without stalling.' },
      { h3: 'Single-learner classes', p: 'A teacher for one learner alone, suited to anyone who has overtaken the groups, prefers a gentler pace, or has an awkward timetable.' }
    ],
    spec: { title: 'Fully remote', p: 'Modern Age Coders has no premises in Glanmire or elsewhere in Ireland. Lessons are live on video and the same from any home.' }
  },

  fees: {
    h2: 'Fees for Glanmire',
    intro: 'In a nutshell.',
    first: 'A free first lesson, level check included.',
    group: 'A month in a group of five to ten at one level, roughly eight live lessons.',
    private: 'A month of one-to-one lessons at the same frequency.',
    closer: 'Every family outside India pays one fee in US dollars, charged monthly. The trial lesson carries no strings; the monthly charge begins on the course start date, and our pricing page deals with holiday weeks, sessions a learner misses, and moving between shared and private classes.'
  },

  reviewsH2: 'Reviews families posted on Google, unaltered',

  book: {
    h2: 'Book a free first lesson in Glanmire',
    intro: 'Share how old the learner is and what they enjoy, and we will design the opening lesson with that in mind. The hour might close with a small game, a program that works, or an average printed beside its honest margin of error.',
    success: 'Thank you. We will be in touch shortly to arrange the lesson.'
  },

  faq: {
    h2: 'Glanmire coding class questions',
    intro: 'Questions families in Glanmire ask most.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Glanmire?', a: 'No. We teach live on video and have no premises in Ireland. A learner needs a computer, a microphone and sound, and a steady connection. The phone number on this page is an Indian number.', boiler: true },
      { q: 'What is the rain gauge project?', a: 'The learner reads Met Éireann\'s daily file for the Glanmire (Northesk) gauge, finds five months missing without any flag, keeps the four complete years, and reports their average, 1,138.9 millimetres, with a standard error of 94.4 and a range of 838 to 1,439, then works out that about 42 years would be needed for plus or minus 5 percent.' },
      { q: 'Does the page describe rainfall in Glanmire today?', a: 'No. The gauge stopped in 1960, and four complete years say little even about the 1950s. The project is about uncertainty, not about present-day weather.' },
      { q: 'Why is there no population figure for Glanmire?', a: 'Our district pages stick to what identifiable organisations publish about the place. For Glanmire those are Met Éireann, Cork City Libraries, the community college and the flood relief scheme, and not one of them gives a resident count.' },
      { q: 'When do lessons take place?', a: 'After school on weekdays into the evening, and in the daytime at weekends. Every slot is in Irish time. Teachers work from India, where clocks run five and a half hours ahead of Glanmire from late October to late March and four and a half ahead the rest of the year; slots are picked to be sensible in both.' },
      { q: 'Can adults learn too?', a: 'Absolutely: learners up to sixty-seven join us, many of them complete beginners, and after the free lesson they choose a same-level group or one-to-one teaching.' },
      { q: 'Will my child be in a group with other Glanmire children?', a: 'It can happen, but level decides the grouping, so the rest of the class may just as easily be in Galway, Dublin or another country.' },
      { q: 'What do coding classes in Glanmire cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule cost USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How big are the groups?', a: 'Five to ten learners, matched by level, pace and goals rather than age or address. When no group fits a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Glanmire',
    html: 'Across the city, <a class="cg-inline-link" href="/coding-classes-in-bishopstown-cork">Bishopstown</a> has a project on library opening hours and <a class="cg-inline-link" href="/coding-classes-in-douglas-cork">Douglas</a> one on tide readings. Citywide information sits on the <a class="cg-inline-link" href="/best-coding-class-in-cork">Cork</a> page, and every other place is reached from the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Glanmire, Cork and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-cork', label: 'Cork' },
    { href: '/coding-classes-in-bishopstown-cork', label: 'Bishopstown' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-glm .cg-hero-grid { align-items: center; gap: clamp(1.09rem, 3.26vw, 2.57rem); }
.cg-root.cg-glm .cg-hero h1 { font-weight: 695; letter-spacing: -0.0183em; line-height: 1.08; }
.cg-root.cg-glm .cg-capsule { border-left: 6px double var(--cg-accent); padding-left: 1.16rem; }
.cg-root.cg-glm .cg-eyebrow { letter-spacing: 0.127em; font-weight: 645; text-transform: uppercase; }
.cg-root.cg-glm .cg-section-head h2 { max-width: 35ch; letter-spacing: -0.0121em; }
.cg-root.cg-glm .cg-grid-3 { gap: clamp(1.05rem, 2.79vw, 2.18rem); }
.cg-root.cg-glm .cg-table caption { letter-spacing: 0.029em; font-weight: 685; }
.cg-root.cg-glm .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-glm .cg-table tr:nth-child(4) td { font-weight: 650; }
.cg-root.cg-glm .cg-ladder-col { border-top: 5px double var(--cg-accent); padding-top: 1.0rem; }
.cg-root.cg-glm .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Glanmire, named sources only (owner rule for districts), read 20 September 2026. Met Eireann daily rainfall, station 3404 (https://clidata.met.ie/cli/climate_data/webdatac/dly3404.csv; data.gov.ie "Glanmire (Northesk) Rainfall Data"): header "Station Name: GLANMIRE (NORTHESK)", "Station Height: 5 M", "Latitude:51.904 ,Longitude: -8.381"; columns date, ind, rain; 3,134 rows from 01-feb-1952 to 31-dec-1960; indicators 0 (2,855), 1 (278), 8 (1, 30-sep-1953). No rows at all for January 1952, January 1953, May 1957, June 1958 and March 1959. Our arithmetic: complete years 1954 1,008.2 mm, 1955 1,047.9, 1956 1,080.7, 1960 1,418.7; mean 1,138.9, standard deviation 188.9, standard error 94.4, 95% range with t(3) = 3.182 from 838 to 1,439 (+/- 26.4%); mean without 1960 1,045.6; naive mean of 1953 to 1960 calendar-year totals 1,079.8; at the same spread, 30 years gives standard error 34.5 and 95% half-width 68 (5.9%), sqrt(30/4) = 2.74; years for +/- 5% at 95%: (1.96 x 188.9 / (0.05 x 1,138.9))^2 = 42.3. Met Eireann, 30 Year Averages: "Climate averages, sometimes referred to as \'climate normals\', are the mean or average values of a climate variable over a standard reference period. The World Meteorological Organization (WMO) established that the length of the reference period should be 30 years". Cork City Libraries, Glanmire Library: "Glanmire Library, Hazelwood Shopping Centre, Glanmire, Cork City T45 E033"; "Staffed Hours : Tuesday to Saturday 10.00 am - 5.30 pm"; "My Open Library Access is available to registered My Open Library members Monday to Sunday 8.00 am - 10.00 pm"; "Public Transport: Bus Route 214". Cork City Council library open data: Glanmire Tuesday to Saturday "10am - 6pm". Glanmire Community College: "Glanmire Community College, Brooklodge, Glanmire, Cork T45 W965". OPW Glashaboy Flood Relief Scheme (floodinfo.ie): "Significant flooding occurred on June 2012 in the Glanmire/Sallybrook area"; "The scheme, when complete, will provide flood protection to some 103 properties; 78 residential properties and 25 commercial premises. The scheme will include defences, such as walls and embankments; culvert upgrades; channel widening and road re-grading."; confirmation documents sent for ministerial approval October 2018.',
    localProject: 'How many years does an average need? From Met Eireann\'s daily file for the Glanmire (Northesk) gauge (1952 to 1960), the learner first counts days per year and finds five whole months absent without any flag, keeps the four complete years, and reports the average (1,138.9 mm) with its standard error (94.4) and 95% range (838 to 1,439, a quarter either way). One year (1960) moves the mean by 93 mm; the naive mean including incomplete years is 1,079.8. The square-root law: 30 years (the WMO reference period, quoted from Met Eireann) would shrink the standard error 2.74 times; about 42 years would give +/- 5%. Lessons: report uncertainty with an average; uncertainty falls with the square root of sample size; plan the sample size a claim needs; count rows against the calendar. New family site-wide: STANDARD ERROR, THE SQUARE-ROOT LAW AND SAMPLE-SIZE PLANNING (standard error, law of large numbers, running mean had no prior hits); Tallaght owns bootstrap intervals, Dundrum return periods from a short record.',
    requiredMentions: [
      '1,138.9',
      '94.4',
      '838 to 1,439',
      '42 years',
      '1,079.8',
      '2.74 times',
      'T45 E033',
      'T45 W965',
      '103 properties',
      'June 2012',
      'four complete years',
      'Brooklodge'
    ],
    sources: [
      { claim: 'Met Éireann, Glanmire (Northesk) daily rainfall, 1952 to 1960, with station height.', url: 'https://clidata.met.ie/cli/climate_data/webdatac/dly3404.csv' },
      { claim: 'Met Éireann, 30 Year Averages: the WMO reference period for climate averages is 30 years.', url: 'https://www.met.ie/climate/30-year-averages' },
      { claim: 'Cork City Libraries, Glanmire Library: Hazelwood Shopping Centre, T45 E033; staffed and My Open Library hours; bus route 214.', url: 'https://www.corkcitylibraries.ie/en/locations/glanmire-library/' },
      { claim: 'Cork City Council, library open data: Glanmire hours as listed in the file.', url: 'https://data.corkcity.ie/dataset/98f4a10c-7a31-49e2-bcd4-961bbbfa62d5/resource/db14a7fc-b9c8-4a24-b3f7-7987070dbb5e/download/library.csv' },
      { claim: 'Glanmire Community College: Brooklodge, Glanmire, T45 W965.', url: 'https://www.glanmirecc.ie/' },
      { claim: 'OPW Glashaboy Flood Relief Scheme: June 2012 flooding in Glanmire and Sallybrook; protection for some 103 properties, 78 residential and 25 commercial; types of works.', url: 'https://www.floodinfo.ie/frs/en/glashaboy/home/' }
    ],
    rejectedClaims: [
      'Any statement about present-day rainfall in Glanmire: the gauge closed in 1960.',
      'Any trend in the 1950s rainfall: four complete years cannot support one.',
      'The flood scheme\'s funding figure: given in euro.',
      'The 2019 city boundary change: owned by the County Cork page.',
      'Bootstrap intervals and return periods: Tallaght and Dundrum own them.',
      'Any population figure for Glanmire and any census small-area aggregation: owner rule for district pages.'
    ]
  }
};
