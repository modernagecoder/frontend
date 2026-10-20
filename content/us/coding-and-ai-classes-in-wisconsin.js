'use strict';
// Wisconsin (cg- state page, US cluster Phase 4, row 106). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: just over half of Wisconsin high schools offer computer science and about three students in a hundred take
// it. A percentage only means something once you know what it is a share of, so the page is built on shares: of
// schools, of students, and in the project, of parks and of park land. Sources read raw on 18 October 2026 (copies
// in keyword-research-2026-09/us/src/coding-and-ai-classes-in-wisconsin/):
//  - Wisconsin DPI (dpi.wi.gov): no connection on 17 October and once more on 18 October 2026; docs.legis.wisconsin.gov
//    did not resolve either. Recorded as unreachable (dept-unreachable.txt). No Wisconsin rule is printed.
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): WI access 42%
//    (2018-19), 49%, 51%, 56%, 52.3% (2022-23), 54.4% (2023-24), 2024-25 "-"; most recent 318 of 585 (2023-2024,
//    "State Education Agency"); participation 4.9% (2020-21), 3.6%, 3.5%, 3.19% (2023-24), 2024-25 "-"; most recent
//    8,377 of 262,627, matched to 2023-24; denominator NCES fall 2022. National 2023-24: access 60%, participation 6.4%.
//  - College Board, School Report of AP Exams by State 2023-24: Wisconsin 484 (2023), 483 (2024); public 396, 406;
//    non-public 88, 77.
//  - IANA tzdb northamerica: Central list ends "western Tennessee, most of Texas, Wisconsin"; zone1970.tab
//    America/Chicago "Central (most areas)"; Rule US 2007 max Mar Sun>=8, Nov Sun>=1.
//  - City of Madison open data, Parks Land Polygons (MapServer/24, "City of Madison Data Policy": public data sets
//    "are provided for informational purposes" and "The City does not warranty the completeness, accuracy"), 297
//    records, fetched 18 October 2026, 297 distinct Park_ID, no empty Acreage. Our counts by Type: MINI 102,
//    NEIGHBORHOOD 84, COMMUNITY 33, TRAFFICWAY 23, OPEN SPACE 21, CONSERVATION 21, SPECIAL 10, SPORTS COMPLEX 2,
//    OTHER 1. Our sums of Acreage: COMMUNITY 2,168.5, CONSERVATION 1,850.1, NEIGHBORHOOD 825.6, SPECIAL 786.9,
//    MINI 202.5, OPEN SPACE 112.3, TRAFFICWAY 27.9, SPORTS COMPLEX 27.9, OTHER 0.6; all records 6,002.45. Shares
//    (ours): MINI 34.3% of records, 3.4% of acreage; COMMUNITY 11.1% and 36.1%; CONSERVATION 7.1% and 30.8%.
// Lesson family: percent share, choosing the denominator, and pie versus bar charts.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'WISCONSIN', label: 'Wisconsin', blurb: 'Coding and AI for Wisconsin students, read through the published shares of schools and students, with a Madison parks percentages project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-wisconsin',
  code: 'aw',
  accent: '#855944',
  accentRationale: 'Wisconsin: #855944, a warm aged-cheddar rind brown, allocated in alloc.tsv row 106 and checked by the build for 4.5:1 contrast on every paper',
  pageType: 'city',
  place: {
    name: 'Wisconsin',
    eyebrow: 'Wisconsin, United States',
    schemaType: 'State',
    chain: [
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Wisconsin',
  title: 'Coding and AI Classes in Wisconsin | Live Online, Central Time',
  description: 'Live online coding and AI classes for Wisconsin students: how many high schools offer computer science, how many students take it, and a Madison parks data project.',
  ogDescription: 'In 2023 to 2024, 318 of 585 Wisconsin high schools offered computer science and 3.19% of students took it. The figures, and live online classes in Central Time.',
  twitterDescription: 'Wisconsin coding and AI classes, live online in Central Time.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Wisconsin Students',
    description: 'Computational thinking, Roblox game coding, Python and machine learning for Wisconsin students from second grade to twelfth, taught live online in English and scheduled in Central Time.'
  },

  h1: 'Coding and AI classes in Wisconsin',
  capsuleQ: 'How many Wisconsin high schools offer computer science?',
  capsule: 'In 2023 to 2024, 318 of 585 Wisconsin high schools (54.4%) offered computer science, and 8,377 of 262,627 high school students (3.19%) were enrolled in it, according to Code.org (2025). Both figures sit below the national 60% and 6.4%. Modern Age Coders teaches Wisconsin students live online in Central Time, from computational thinking and Roblox to Python and machine learning.',
  lead: 'Every number on this page is a share of something, and the first skill we teach Wisconsin students is to ask of what. Just over half of the state&rsquo;s high schools offered computer science in the latest Code.org year, but a little over three in every hundred high school students were enrolled. Same state, same year, two very different percentages, because one counts buildings and the other counts people. Below are both series as published, a Madison open data project that turns the same idea into a chart a student can defend, and the practical details of live classes for families from Superior to Kenosha.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Wisconsin.',

  picks: {
    eyebrow: 'Course picks for Wisconsin',
    h2: 'Where Wisconsin students usually begin',
    intro: 'A grade band is only a starting guess. The free lesson tests the real level, and we move a student up or down from there.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Grades 2 to 5', note: 'Puzzles, patterns and step-by-step thinking, with and without a screen, so programming makes sense from the first lesson.' },
      { course: 'roblox-game-coding-for-kids-lua-course', band: 'Grades 4 to 8', note: 'Real Luau scripts inside Roblox Studio: doors that open, scores that count and obstacle courses friends can play.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Python from variables to files and charts, including the percentages and plots from the Madison parks project.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 10 to 12', note: 'Machine learning built in Python and tested on data, with attention to what a model&rsquo;s accuracy figure is a share of.' }
    ]
  },

  sections: [
    {
      id: 'shares', tint: '', eyebrow: 'Two different shares',
      h2: 'Share of schools, share of students: Wisconsin&rsquo;s two series',
      intro: 'Left column: buildings. Right column: people. Each value is copied from Code.org&rsquo;s 2025 spreadsheet, and where it holds a dash for Wisconsin we write that nothing was reported.',
      body: [
        { kind: 'table', caption: 'Wisconsin: high schools offering CS, and high school students enrolled in CS (Code.org, 2025)', head: ['Year', 'Share of high schools', 'Share of students'], rows: [
          ['2018 to 2019', '42%', 'No figure yet'],
          ['2019 to 2020', '49%', 'No figure yet'],
          ['2020 to 2021', '51%', '4.9%'],
          ['2021 to 2022', '56%', '3.6%'],
          ['2022 to 2023', '52.3%', '3.5%'],
          ['2023 to 2024', '54.4%, or 318 of 585', '3.19%, or 8,377 of 262,627'],
          ['2024 to 2025', 'Not reported', 'Not reported']
        ] },
        { kind: 'table', mt: true, caption: 'Wisconsin against the national row for 2023 to 2024, with College Board AP school counts', head: ['Measure', 'Wisconsin', 'Comparison'], rows: [
          ['High schools offering CS', '54.4%', '60% nationally'],
          ['High school students enrolled in CS', '3.19%', '6.4% nationally'],
          ['Schools with AP exams, 2023', '484', '396 public, 88 non-public'],
          ['Schools with AP exams, 2024', '483', '406 public, 77 non-public']
        ] },
        { kind: 'p', text: 'The two series moved in different directions. Between 2020 to 2021 and 2023 to 2024 the share of schools offering computer science rose a few points, while the share of students enrolled drifted down from 4.9% to 3.19%. A school can add a course without many more students taking it; the sheet records what happened and not why, so we make no claim about the cause.' },
        { kind: 'p', text: 'One more denominator note: the student total of 262,627 is the NCES fall 2022 count, as the Code.org tab states, so 3.19% is an estimate built from two different years. Citation: Code.org (2025). 2025 State of AI + CS Education.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Most Madison parks are small. Most Madison park land is not',
      intro: 'The City of Madison publishes every park parcel as open data, each with a Type and an Acreage. Students compute two sets of percentages from the same 297 records and discover that they tell opposite stories.',
      body: [
        { kind: 'table', caption: 'Madison park parcels by Type: share of records and share of summed acreage (our calculations from Parks Land Polygons, 18 October 2026)', head: ['Type', 'Records', 'Share of records', 'Summed acres', 'Share of acres'], rows: [
          ['MINI', '102', '34.3%', '202.5', '3.4%'],
          ['NEIGHBORHOOD', '84', '28.3%', '825.6', '13.8%'],
          ['COMMUNITY', '33', '11.1%', '2,168.5', '36.1%'],
          ['CONSERVATION', '21', '7.1%', '1,850.1', '30.8%'],
          ['OPEN SPACE', '21', '7.1%', '112.3', '1.9%'],
          ['TRAFFICWAY', '23', '7.7%', '27.9', '0.5%'],
          ['SPECIAL', '10', '3.4%', '786.9', '13.1%'],
          ['SPORTS COMPLEX and OTHER', '3', '1.0%', '28.5', '0.5%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Choose the denominator', p: 'Mini parks are a third of all records but only 3.4% of the acreage. Community parks are about a ninth of the records and more than a third of the land. Neither percentage is wrong; each answers a different question.' },
          { h3: 'Pie or bar?', p: 'With nine categories, two of them tiny, a pie chart turns into slivers nobody can compare. Students draw both and usually choose a sorted horizontal bar chart, with records and acres side by side.' },
          { h3: 'Check the parts', p: 'Our acreage figures are sums of one field across 297 rows, 6,002.45 acres in all. Rounded shares may not add to exactly 100%, which is a rounding effect and a good thing to say out loud in a write-up.' }
        ] },
        { kind: 'p', text: 'The code is short and the thinking is not. In pandas, <code>df.groupby("Type")["Acreage"].sum() / df["Acreage"].sum()</code> gives the land shares, and <code>df["Type"].value_counts(normalize=True)</code> gives the record shares. The city&rsquo;s own description adds a twist worth reading: SPECIAL parcels include golf courses, maintenance facilities, a botanical garden and the zoo, so a student must decide whether those belong in a chart about parks at all, and say which choice they made.' },
        { kind: 'callout', h3: 'Our sums, not the city&rsquo;s', p: 'All counts, acreage sums and percentages above are our calculations from one download. The City of Madison publishes the parcels for informational purposes and states that it does not warrant their completeness or accuracy, so 6,002.45 acres is a property of this file, not an official figure for Madison parkland.' }
      ]
    },
    {
      id: 'options', tint: 'tint', eyebrow: 'If the school has no class',
      h2: 'Four in ten Wisconsin high schools had no CS offering in the data. What then?',
      intro: 'In 2023 to 2024, 267 of the 585 high schools in the Code.org count did not report a computer science offering (our subtraction). For a student in one of them, these are the practical options, in the order we suggest them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Ask first', p: 'Course lists change. A counselor can say whether a class is planned, offered at a nearby school, or available online through the district, before a family looks elsewhere.' },
          { h3: 'Learn the content', p: 'Outside classes can teach the same foundations a school course would: programming, data, networks and the impact of computing, so the student is ready whenever a class appears.' },
          { h3: 'Build in public', p: 'A small portfolio of finished projects, such as the Madison parks chart or a Roblox game, shows ability in a way a transcript line cannot.' }
        ] },
        { kind: 'table', mt: true, caption: 'A first year of computer science outside school, by starting grade (our plan)', head: ['Starting grade', 'First term', 'Second term'], rows: [
          ['2 to 4', 'Computational thinking puzzles and block programs', 'A first Scratch or Roblox game'],
          ['5 to 8', 'Roblox scripting or Python basics', 'A game or tool shared with friends'],
          ['9 to 10', 'Python, files and charts', 'The Madison parks project and a short write-up'],
          ['11 to 12', 'Python and data, quickly', 'Machine learning or AP Computer Science preparation']
        ] },
        { kind: 'p', text: 'We do not claim that a class with us earns Wisconsin high school credit. Credit is decided by the school district; our role is the learning itself.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Wisconsin is on Central Time',
      intro: 'The IANA time zone database lists Wisconsin among the Central Time states, kept under the America/Chicago zone.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'After school in Madison', p: 'A 5:00 p.m. class in Madison begins at 3:30 a.m. the next day in India during daylight saving time, and at 4:30 a.m. after the November change.' },
          { h3: 'The size of the gap', p: 'India stays at UTC plus 5 hours 30 minutes. Wisconsin is UTC minus 5 in summer and UTC minus 6 in winter, so India is 10 hours 30 minutes or 11 hours 30 minutes ahead.' },
          { h3: 'Dates for 2026 to 2027', p: 'Under the US rule in the IANA data, clocks go back on Sunday, November 1, 2026 and forward on Sunday, March 14, 2027, each at 2 a.m. We restate class times in Central Time before both.' }
        ] },
        { kind: 'spec', title: 'A percentage of a day', p: 'Time zones make a neat percent problem too: an 11 hour 30 minute gap is almost half a day. Students who write a converter with America/Chicago and Asia/Kolkata, instead of typed offsets, see the gap change by itself in November.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first puzzles to machine learning',
    intro: 'Usual starting rungs by grade. The placement lesson can move a student in either direction.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Thinking in steps', p: 'Unplugged puzzles and block programs that make sequences and loops feel obvious.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Grades 4 to 7', h3: 'Games that work', p: 'Roblox scripting and Scratch games with scores, levels and rules.', courses: ['roblox-game-coding-for-kids-lua-course', 'scratch-programming-complete-course'] },
      { band: 'Grades 8 to 10', h3: 'Python and data', p: 'Typed code, files, charts and the habit of checking what a number is a share of.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Grades 11 to 12', h3: 'AI and AP', p: 'Machine learning projects, or Java for AP Computer Science A.', courses: ['ai-ml-masterclass-teens', 'ap-computer-science-a-java-exam-prep-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI model is 90% accurate. Ninety percent of what?',
    intro: 'The question students learn to ask about park percentages is the same one they need for every AI claim.',
    p1: 'A claim that a model is 90% accurate sounds clear until you ask what the 90% is a share of: all cases, the easy ones, or a test set the model has already seen. The Madison exercise trains exactly that reflex, because the same 297 parcels give 34.3% or 3.4% for mini parks depending on the denominator.',
    p2: 'In our AI course, students build small models themselves and report results with the denominator stated, then use AI assistants to speed up the code while checking every figure they print. That combination, fluent with the tools and sceptical of the numbers, is what we aim for.',
    closer: 'Wisconsin students who can say what a percentage is a share of will read both school statistics and AI marketing more clearly than most adults.',
    blogAnchor: 'is coding still worth it in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lake Superior to Lake Michigan, one live class',
    intro: 'Distance stops mattering when the class is online; a farm near Eau Claire and a flat in Milwaukee get the same lesson.',
    cells: [
      { h3: 'Join from home', p: 'Students in Milwaukee, Madison, Green Bay, La Crosse or a small town sign in from their own computer.' },
      { h3: 'US grades throughout', p: 'Lessons follow US grade levels and fit around the school year; any graded school assignment remains the student&rsquo;s own work.' },
      { h3: 'Free placement', p: 'The first lesson costs nothing and needs no payment details. It ends with a suggested level, course and time.' },
      { h3: 'Batches of fifteen to twenty', p: 'Students grouped by coding stage, from Wisconsin and other states, so nobody is bored or lost.' },
      { h3: 'One-to-one option', p: 'A private teacher for students who want to move faster, prepare for AP or build a specific project.' },
      { h3: 'Schedules', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'No Wisconsin office', p: 'All teaching happens live online from India. We have no premises in Wisconsin and make no claim to one. A laptop or desktop, sound and a reliable internet connection are all that is needed.' }
  },

  fees: {
    h2: 'What classes cost in Wisconsin',
    intro: 'Three figures, each in US dollars.',
    first: 'A full first lesson, free, which ends with a recommended course, level and time.',
    group: 'One month of live lessons in a batch of fifteen to twenty students at a similar stage.',
    private: 'One month of live lessons with a teacher for a single student.',
    closer: 'Every Wisconsin family pays the same US dollar rate, in a city or a rural county. Billing begins once the free lesson is done and you have agreed a plan, and our pricing page explains how holidays and missed lessons work.'
  },

  reviewsH2: 'Google reviews from parents and students',

  book: {
    h2: 'Book a free first lesson from Wisconsin',
    intro: 'Tell us the grade and any coding the student has done. A third grader gets a logic puzzle, a sixth grader a Roblox script, and a sophomore the Madison parks percentages.',
    success: 'Thank you. We will be in touch shortly to set up a lesson in Central Time.'
  },

  faq: {
    h2: 'Wisconsin coding and AI questions',
    intro: 'Answers based on the published data and on how our classes run.',
    items: [
      { q: 'How many Wisconsin high schools offer computer science?', a: 'Code.org (2025) reports 318 of 585 Wisconsin high schools, or 54.4%, offering computer science in 2023 to 2024, against 60% nationally.' },
      { q: 'What share of Wisconsin students take computer science?', a: 'The same data reports 8,377 of 262,627 high school students, or 3.19%, enrolled in 2023 to 2024. The national share that year was 6.4%.' },
      { q: 'Is the Wisconsin trend going up?', a: 'For schools, broadly yes: 42% in 2018 to 2019 and 54.4% in 2023 to 2024. For students, no: 4.9% in 2020 to 2021 and 3.19% in 2023 to 2024.' },
      { q: 'How many Wisconsin schools give AP exams?', a: 'The College Board lists 484 Wisconsin schools with AP exams in 2023 and 483 in 2024, public and non-public together.' },
      { q: 'Does Wisconsin require computer science to graduate?', a: 'We print no Wisconsin rule here because the Department of Public Instruction and state statute websites did not respond when we checked on 17 and 18 October 2026. Please ask your school counselor.' },
      { q: 'Will your classes count for Wisconsin credit?', a: 'We do not claim so. Credit belongs to the school district. Our classes add skills and projects alongside school.' },
      { q: 'What does the Madison parks project teach?', a: 'Percent share and chart choice. Students find that mini parks are 34.3% of 297 park records but 3.4% of the summed acreage, and learn to state which denominator they used.' },
      { q: 'Which time zone are classes in for Wisconsin?', a: 'Central Time, the America/Chicago zone. We restate times before the clock changes on November 1, 2026 and March 14, 2027.' },
      { q: 'When do classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.', boiler: true },
      { q: 'Is there a Wisconsin center I can visit?', a: 'No. Every class is live online from India, and there are no Wisconsin premises, nor any claim of them.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Related pages for Wisconsin students',
    html: 'Roblox fans can read <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a> or join <a class="cg-inline-link" href="/roblox-coding-classes-for-kids">Roblox coding classes</a>. Older students interested in AI can browse <a class="cg-inline-link" href="/ai-projects-for-high-school-students">AI projects for high school students</a>, and families comparing options can start at <a class="cg-inline-link" href="/online-coding-classes-for-kids-usa">online coding classes for kids in the USA</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wisconsin and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding' },
    { href: '/ai-projects-for-high-school-students', label: 'AI projects' }
  ],

  personalityCss: `
.cg-root.cg-aw .cg-hero-grid { align-items: start; gap: clamp(0.9rem, 2.6vw, 2.2rem); }
.cg-root.cg-aw .cg-hero h1 { font-weight: 750; letter-spacing: -0.02em; line-height: 1.04; }
.cg-root.cg-aw .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-aw .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-aw .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.008em; }
.cg-root.cg-aw .cg-grid-3 { gap: clamp(0.8rem, 1.8vw, 1.5rem); }
.cg-root.cg-aw .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-aw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aw .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'Wisconsin, read raw on 18 October 2026: dpi.wi.gov unreachable twice and docs.legis.wisconsin.gov unresolvable, so no Wisconsin rule is printed; Code.org (2025) State of AI + CS Education data (access 42%, 49%, 51%, 56%, 52.3%, 54.4%; 318 of 585 in 2023-24; participation 4.9%, 3.6%, 3.5%, 3.19%; 8,377 of 262,627; national 60% and 6.4%); College Board AP schools 484 (2023), 483 (2024), public 396/406, non-public 88/77; IANA Central list includes Wisconsin, America/Chicago, US DST rule.',
    localProject: 'City of Madison Parks Land Polygons (City of Madison Data Policy, informational, no warranty), 297 records fetched 18 October 2026: Type counts MINI 102, NEIGHBORHOOD 84, COMMUNITY 33, TRAFFICWAY 23, OPEN SPACE 21, CONSERVATION 21, SPECIAL 10, SPORTS COMPLEX 2, OTHER 1; our acreage sums COMMUNITY 2,168.5, CONSERVATION 1,850.1, NEIGHBORHOOD 825.6, SPECIAL 786.9, MINI 202.5; total 6,002.45; shares MINI 34.3% of records vs 3.4% of acres. All ours. Lesson family: percent share, denominators, pie versus bar.',
    requiredMentions: [
      '318 of 585',
      '8,377 of 262,627',
      '54.4%',
      '3.19%',
      '484',
      '297 records',
      '6,002.45',
      '34.3%',
      '2,168.5'
    ],
    sources: [
      { claim: 'Code.org (2025), State of AI + CS Education data: Wisconsin and national access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Madison: Parks Land Polygons layer.', url: 'https://maps.cityofmadison.com/arcgis/rest/services/Public/OPEN_DATA/MapServer/24' },
      { claim: 'City of Madison Data Policy (terms for the open data portal).', url: 'https://www.cityofmadison.com/policy/data' },
      { claim: 'IANA tzdb northamerica: Wisconsin in the Central list, US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Wisconsin graduation requirement, standards adoption year or required offering: dpi.wi.gov and docs.legis.wisconsin.gov could not be reached on 17 and 18 October 2026, so none is printed.',
      'Any cause for the falling share of students enrolled: not stated by the source.',
      'A 2024 to 2025 Wisconsin figure: the sheet shows dashes.',
      'Code.org state narrative, geography, size, gender and race figures: not used.',
      'An official total of Madison parkland: the 6,002.45 acres is our sum of one field.',
      'Park names and addresses: counts by type only.',
      'That our classes earn Wisconsin credit, and any affiliation with the Wisconsin DPI, the City of Madison, Code.org or the College Board.'
    ]
  }
};
