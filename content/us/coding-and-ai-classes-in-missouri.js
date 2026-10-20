'use strict';
// Missouri (cg- state page, US cluster Phase 4, row 85). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: what the published numbers say about computer science access in Missouri high schools, read as a time series,
// and how a family adds depth with live classes. Sources read raw on 17 and 18 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-and-ai-classes-in-missouri/):
//  - Missouri state hosts: dese.mo.gov returned 403 (Incapsula) for its computer science page, search, sitemap and
//    learning standards page; revisor.mo.gov refused the connection (https) and returned 403 (http); house.mo.gov and
//    mo.gov 403. Not retried. No Missouri department policy, statute or standards wording is printed.
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet (Access and Participation tabs only): MO access 38%
//    (2018-19), 50%, 49%, 50%, 57.7% (2022-23), 56.3% (2023-24), no 2024-25 value; most recent 310 of 551 high schools,
//    2023-2024, source "State Education Agency"; national 60% (2023-24 and 2024-25). Participation 2.9% (2022-23), 2.86%
//    (2023-24), no 2024-25 value; count tab 7,804 of 273,338 (2.86%), denominator NCES Fall 2022; national 6.4% (2023-24).
//  - College Board, School Report of AP Exams by State 2023-24: MO AP schools 282 (2023), 306 (2024); public 212, 238;
//    non-public 70, 68.
//  - IANA tzdb northamerica: Missouri listed under "US central time, represented by Chicago"; US rule Sun>=8 Mar,
//    Sun>=1 Nov, so November 1, 2026 and March 14, 2027.
//  - City of Kansas City, Missouri open data, "Trees Trimmed And Removed Annually" (4947-rw26), licence Public Domain,
//    rows last updated 26 July 2016, CSV downloaded 18 October 2026: 16 quarterly rows FY 2012-2013 Q1 to FY 2015-2016 Q4,
//    stored out of order (FY 2012-2013 Q4 is the 15th line; FY 2014-2015 Q3 precedes Q1); second "Fiscal Year" column
//    empty. Ours: trimmed by fiscal year 2,853 / 5,834 / 5,766 / 7,222; removed 1,741 / 3,634 / 2,257 / 2,771; largest
//    trimmed quarter FY 2015-2016 Q4 (2,321); largest removed quarter FY 2013-2014 Q1 (1,710).
// Lesson family: year or date trend over time (sorting by period, aggregating by year, reading a gap honestly).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'MISSOURI', label: 'Missouri', blurb: 'Coding and AI for Missouri students, read through six years of published access figures, with a Kansas City tree-care trend project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-missouri',
  code: 'aiab',
  accent: '#805A32',
  accentRationale: 'Missouri: #805A32, a muted river-clay brown, as allocated in alloc.tsv for row 85, clearing 4.5:1 on every paper',
  pageType: 'city',
  place: {
    name: 'Missouri',
    eyebrow: 'Missouri, United States',
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
  routeLabel: 'Missouri',
  title: 'Coding and AI Classes in Missouri | Live Online',
  description: 'Live online coding and AI classes for Missouri students: how many high schools offer computer science, six years of published data, and a Kansas City data project.',
  ogDescription: 'Code.org counts 310 of 551 Missouri high schools offering computer science in 2023 to 2024. What the trend shows, what it hides, and live classes for Missouri students.',
  twitterDescription: 'Missouri coding and AI classes, live online, with the access data read year by year.',
  ogImageCourse: 'javascript-course-for-teens-beginners-interactive-web',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Missouri Students',
    description: 'Scratch, game building, JavaScript, Python data work and AP Computer Science A for Missouri students in elementary, middle and high school, taught live online in English.'
  },

  h1: 'Coding and AI classes in Missouri',
  capsuleQ: 'How many Missouri high schools offer computer science?',
  capsule: 'About 56%. Code.org&rsquo;s 2025 data counts 310 of 551 Missouri high schools offering computer science in 2023 to 2024, against 60% nationally, and 2.86% of high school students enrolled in it. Modern Age Coders fills the gap with live online classes for Missouri students: Scratch and games for younger children, JavaScript and Python for teens, and AP Computer Science A.',
  lead: 'Whether a Missouri teenager can take computer science at school still depends heavily on which school. The latest published count puts the share of high schools with a course at a little over half, and the share of students actually enrolled at under three in a hundred. This page lays out those figures exactly as published, year by year, and is open about what we could not check: Missouri&rsquo;s education department and statute sites refused our automated requests, so we print no state policy wording at all. What we can offer is the data, an honest reading of it, a Kansas City open data project that teaches the same skill of reading a trend, and live classes that do not depend on what the local timetable holds.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Missouri.',

  picks: {
    eyebrow: 'Course picks for Missouri',
    h2: 'Four courses for Missouri students, from first game to AP',
    intro: 'If the school schedule has no computer science slot, these are the usual first steps. The free class confirms the level before anything is booked.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades 2 to 5', note: 'Scratch from the first sprite to complete games, with a finished project every few weeks.' },
      { course: 'game-development-masterclass-for-kids', band: 'Grades 4 to 7', note: 'Game design across Scratch, Roblox and Minecraft, the bridge from playing games to building them.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', band: 'Grades 7 to 10', note: 'Interactive websites and browser games in JavaScript, typed code a teen can show to anyone with a browser.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Java and the full AP Computer Science A exam, for students whose school lists AP but has no CS teacher free.' }
    ]
  },

  sections: [
    {
      id: 'trend', tint: '', eyebrow: 'Six years of access',
      h2: 'Missouri high schools offering computer science, 2018 to 2024',
      intro: 'The share of Missouri public high schools offering foundational computer science, read cell by cell from the Code.org 2025 data download on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'Missouri, share of high schools offering CS (Code.org, 2025)', head: ['School year', 'Missouri', 'What changed'], rows: [
          ['2018 to 2019', '38%', 'Starting point in the series'],
          ['2019 to 2020', '50%', 'A jump of twelve points'],
          ['2020 to 2021', '49%', 'Flat'],
          ['2021 to 2022', '50%', 'Flat'],
          ['2022 to 2023', '57.7%', 'The highest value in the series'],
          ['2023 to 2024', '56.3%, 310 of 551 high schools', 'Slightly down; the data credits Missouri&rsquo;s own education agency'],
          ['2024 to 2025', 'No value published', 'Left blank in the data, not estimated here']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Read the shape', p: 'One big step between 2018 and 2020, three years of standing still, a second step in 2022 to 2023, then a small slip. That is not a steady climb, and a straight trend line through it would hide the plateau.' },
          { h3: 'Read the gap', p: 'Code.org prints the national share as 60% for 2023 to 2024. Missouri&rsquo;s 56.3% sits a few points below it, so the state&rsquo;s position is close to the middle rather than at either end.' },
          { h3: 'Read the blank', p: 'There is no Missouri figure for 2024 to 2025 in this release. We leave the cell empty. Filling it with a guess, even a sensible one, would turn a published series into our own invention.' }
        ] }
      ]
    },
    {
      id: 'seats', tint: 'tint', eyebrow: 'Students, not just schools',
      h2: 'How many Missouri students take computer science, and how many schools offer AP',
      intro: 'A course on the timetable and a student in the seat are different things. These are the participation and AP school figures for Missouri as published.',
      body: [
        { kind: 'table', caption: 'Participation and AP, Missouri (published values)', head: ['Measure', 'Missouri', 'Source'], rows: [
          ['Missouri high schoolers in a CS course, 2023 to 2024', '7,804 of 273,338, or 2.86%', 'Code.org (2025), which takes the enrollment base from NCES, Fall 2022'],
          ['Participation, 2022 to 2023', '2.9%', 'Code.org (2025), participation tab'],
          ['National participation, 2023 to 2024', '6.4%', 'Code.org (2025), national row'],
          ['Schools with AP exams, 2023 then 2024', '282, then 306', 'College Board, School Report of AP Exams by State'],
          ['Of those, public', '212, then 238', 'College Board, same report'],
          ['Of those, non-public', '70, then 68', 'College Board, same report']
        ] },
        { kind: 'p', text: 'Put the two halves side by side and a pattern appears. More than half of Missouri high schools list computer science, yet fewer than three students in a hundred were enrolled in it in 2023 to 2024, under half the national rate printed in the same release. Meanwhile the number of Missouri schools giving AP exams of any kind rose by 24 between 2023 and 2024, almost all of them public. For a motivated student that is a real opening: AP Computer Science A and Principles are exams anyone can prepare for, even where the school has no matching class.' },
        { kind: 'callout', h3: 'Citing the data', p: 'Code.org (2025). 2025 State of AI + CS Education. We quote individual Missouri values from its data download and do not republish the dataset. AP school counts are from the College Board School Report of AP Exams by State, 2023 to 2024.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Did Kansas City trim more trees each year? A trend project on city open data',
      intro: 'Kansas City, Missouri publishes a small public-domain table of trees its crews trimmed and removed, quarter by quarter. Sixteen rows are enough to teach the three habits every trend analysis needs.',
      body: [
        { kind: 'table', caption: 'Trees trimmed and removed per fiscal year (our sums of the four quarterly rows, from the city&rsquo;s file downloaded 18 October 2026)', head: ['Fiscal year label', 'Trimmed (our sum)', 'Removed (our sum)'], rows: [
          ['FY 2012-2013', '2,853', '1,741'],
          ['FY 2013-2014', '5,834', '3,634'],
          ['FY 2014-2015', '5,766', '2,257'],
          ['FY 2015-2016', '7,222', '2,771']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Put time in order', p: 'The file does not list quarters in sequence: FY 2012-2013 Q4 sits fifteenth of sixteen lines, and Q3 of 2014-2015 comes before Q1. Students parse the label into a year and a quarter and sort on both before drawing anything.' },
          { h3: '2. Aggregate by year', p: 'Summing four quarters per fiscal year gives the table above. Trimming rises from 2,853 to 7,222 across the four years by our arithmetic, while removals peak in FY 2013-2014 and fall back.' },
          { h3: '3. Ask what is missing', p: 'The rows stop in 2016, and a second column headed Fiscal Year is empty in every row. A trend that ends nine years ago says nothing about today, and a careful analyst writes that sentence before any conclusion.' }
        ] },
        { kind: 'p', text: 'Students then compare a single quarter with its year. The busiest quarter for trimming was FY 2015-2016 Q4, with 2,321 trees; the busiest for removals was FY 2013-2014 Q1, with 1,710. Plotting quarters instead of years shows how much the yearly totals smooth away, which is exactly the judgment they will need when they read a state access series like the one higher up this page.' },
        { kind: 'callout', h3: 'Whose numbers these are', p: 'The quarterly counts are the city&rsquo;s, published under a public domain licence. The yearly sums and every comparison are ours, made for teaching. We do not know how the city defines its fiscal year, so the page keeps the city&rsquo;s labels instead of converting them to calendar years.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Central Time from St. Louis to Joplin',
      intro: 'The IANA time zone database lists Missouri under US central time, the zone it calls America/Chicago.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Summer offset', p: 'During Central Daylight Time, India is 10 hours 30 minutes ahead of Springfield and Columbia. Our teachers absorb that gap; families simply pick a Central Time slot.' },
          { h3: 'Winter offset', p: 'Under Central Standard Time the gap is 11 hours 30 minutes. Bookings are always written in Central Time so no one has to convert anything.' },
          { h3: 'This year&rsquo;s changes', p: 'Missouri moves back an hour on November 1, 2026 and forward an hour on March 14, 2027. A class time confirmed in Central Time stays put for the family on both dates.' }
        ] },
        { kind: 'spec', title: 'The tree file and the clock teach one idea', p: 'Dates are data. A quarter label that sorts wrongly and a reminder that drifts by an hour in November are the same kind of bug: treating time as plain text or a fixed number instead of using a proper date or zone such as America/Chicago.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'A route through computer science that does not depend on the timetable',
    intro: 'Grade bands are guides; a free class sets the real starting point.',
    cols: [
      { band: 'Grades K to 4', h3: 'Blocks and stories', p: 'Sequences, loops and events through Scratch and block apps, ending in games a child can share.', courses: ['scratch-programming-complete-course', 'block-coding-app-development-masterclass'] },
      { band: 'Grades 5 to 8', h3: 'Games and first typed code', p: 'Game design, then Python, so a middle schooler arrives at high school already writing real code.', courses: ['game-development-masterclass-for-kids', 'python-ai-kids-masterclass'] },
      { band: 'Grades 9 to 10', h3: 'Web and data', p: 'JavaScript for the web and Python for data, including trend projects like the Kansas City file.', courses: ['javascript-course-for-teens-beginners-interactive-web', 'data-science-course-for-teens-python-data'] },
      { band: 'Grades 11 to 12', h3: 'AP and machine learning', p: 'AP Computer Science A in Java, and machine learning with models students build and test themselves.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool will draw the trend line. Will it notice the rows are out of order?',
    intro: 'Often it will not, and that is the case for learning to code yourself.',
    p1: 'Hand the Kansas City file to a chatbot and ask for a chart, and you may get a neat line that zigzags because the quarters were plotted in file order. Nothing in the output warns you. A student who has sorted dates by hand sees the problem at once.',
    p2: 'The same applies to the state figures above: a model asked for Missouri&rsquo;s 2024 to 2025 access rate might produce a confident number where the published data has none. Knowing what a dataset contains, and saying so, is a skill only practice builds.',
    closer: 'Missouri students who learn to check a trend before trusting it will use AI tools well; the ones who skip that step will be used by them.',
    blogAnchor: 'the case for coding skills when AI drafts the code'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for Missouri, whether the school has a CS teacher or not',
    intro: 'With roughly 44% of Missouri high schools showing no computer science course in the latest count, an online classroom is often the simplest way in.',
    cells: [
      { h3: 'From any Missouri town', p: 'A student in Cape Girardeau and one in St. Joseph can sit in the same live class, each at a kitchen table, without anyone driving to a campus.' },
      { h3: 'Planned around US school', p: 'Lessons follow US grade levels and the May AP calendar. When a teacher at school sets graded work, our role stops at explaining the concepts; the submission is written by the student alone.' },
      { h3: 'Free first lesson', p: 'One real class with a teacher, then a suggested level, course and time in writing. No card is requested.' },
      { h3: 'Level-matched batches', p: 'A batch is fifteen to twenty students at one level, from Missouri and other states.' },
      { h3: 'Private lessons', p: 'One teacher, one student, for AP preparation, competitions or a faster pace.' },
      { h3: 'Flexible times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'Online only, taught from India', p: 'There is no Modern Age Coders office in Missouri, and the page claims none. Students need a computer, sound and a dependable internet connection.' }
  },

  fees: {
    h2: 'What Missouri families pay',
    intro: 'Three figures, shown below in full.',
    first: 'A full first class without charge, ending in a recommended level, course and time slot.',
    group: 'A month of batch classes with fifteen to twenty students at the same level.',
    private: 'A month of one-to-one classes with a dedicated teacher.',
    closer: 'Families anywhere in the US pay one rate in US dollars, so a household in Kansas City pays what one in the Bootheel pays. Billing begins only after the free class, and the pricing page covers holidays and missed lessons.'
  },

  reviewsH2: 'Google reviews from parents and students',

  book: {
    h2: 'Book a free class for a Missouri student',
    intro: 'The first lesson fits the student: a Scratch game for a third grader, a browser game for an eighth grader, or the Kansas City trend project for a high schooler.',
    success: 'Thank you. We will be in touch shortly about a class for your Missouri student.'
  },

  faq: {
    h2: 'Missouri coding and AI questions',
    intro: 'Short answers based on the published figures.',
    items: [
      { q: 'What share of Missouri high schools offer computer science?', a: 'Code.org reports 310 of 551 Missouri high schools, or 56.3%, offering computer science in 2023 to 2024, up from 38% in 2018 to 2019. Its 2025 release has no Missouri value for 2024 to 2025.' },
      { q: 'How many Missouri students take computer science?', a: 'The same release counts 7,804 of 273,338 Missouri high school students, or 2.86%, enrolled in computer science in 2023 to 2024, against a national rate of 6.4%.' },
      { q: 'Is computer science a graduation requirement in Missouri?', a: 'We could not verify Missouri policy: the state education department and statute sites refused our requests in October 2026, so this page prints no requirement either way. Check your district\'s graduation handbook directly.' },
      { q: 'How many Missouri schools give AP exams?', a: 'The College Board counts 282 Missouri schools with AP exams in 2023 and 306 in 2024, of which 238 were public schools in 2024.' },
      { q: 'Can a Missouri student take AP Computer Science without a school course?', a: 'Our AP Computer Science A course teaches the full exam content whether or not the school runs the class. How and where the exam is booked is set by the College Board, so read its AP Students pages early in the school year; 306 Missouri schools gave AP exams in 2024.' },
      { q: 'What time zone are classes booked in?', a: 'Central Time. The IANA database lists Missouri under US central time, and Missouri clocks change on November 1, 2026 and March 14, 2027.' },
      { q: 'When can classes run for Missouri families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays, always confirmed in Central Time.' },
      { q: 'Do you have a center in St. Louis or Kansas City?', a: 'No. All teaching is live and online from India, so families in either city, or anywhere else in Missouri, join the same way.' },
      { q: 'What is the Kansas City tree project?', a: 'Students download the city\'s public-domain table of trees trimmed and removed from FY 2012-2013 to FY 2015-2016, sort the out-of-order quarters, total each year and explain why a trend ending in 2016 cannot describe today.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More reading for Missouri families',
    html: 'Teens aiming at the exam can start with <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>, and builders can look at <a class="cg-inline-link" href="/hackathons-for-high-school-students">hackathons for high school students</a>. For other states, the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a> lists every guide, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina page</a> shows a state with a CS graduation rule.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Missouri and beyond',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A classes' },
    { href: '/hackathons-for-high-school-students', label: 'High school hackathons' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-aiab .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.8vw, 2.2rem); }
.cg-root.cg-aiab .cg-hero h1 { font-weight: 700; letter-spacing: -0.01em; line-height: 1.1; }
.cg-root.cg-aiab .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-aiab .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; font-size: 0.76rem; }
.cg-root.cg-aiab .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.008em; }
.cg-root.cg-aiab .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-aiab .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aiab .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-aiab .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Missouri, 17 and 18 October 2026: dese.mo.gov 403 (Incapsula), revisor.mo.gov connection refused or 403, house.mo.gov and mo.gov 403; no state policy printed. Code.org (2025) State of AI + CS Education data: MO access 38% (2018-19), 50%, 49%, 50%, 57.7% (2022-23), 56.3% (2023-24, 310 of 551, State Education Agency), no 2024-25 value; national 60%; participation 2.9% (2022-23), 2.86% (2023-24), 7,804 of 273,338; national 6.4%. College Board AP schools 282 (2023), 306 (2024); public 212 and 238; non-public 70 and 68. IANA: Missouri in US central time (America/Chicago).',
    localProject: 'City of Kansas City, Missouri open data, Trees Trimmed And Removed Annually (4947-rw26), Public Domain, last updated 26 July 2016, CSV downloaded 18 October 2026: 16 quarterly rows FY 2012-2013 Q1 to FY 2015-2016 Q4, out of file order, empty second Fiscal Year column. Our yearly sums: trimmed 2,853, 5,834, 5,766, 7,222; removed 1,741, 3,634, 2,257, 2,771; peak quarters FY 2015-2016 Q4 (2,321 trimmed) and FY 2013-2014 Q1 (1,710 removed). Lesson family: year or date trend over time.',
    requiredMentions: [
      '310 of 551', 
      'No value published',
      '7,804 of 273,338',
      '282, then 306',
      '212, then 238', 
      'FY 2012-2013 Q4 sits fifteenth of sixteen lines',
      '7,222',
      '2,321',
      'November 1, 2026'
    ],
    sources: [
      { claim: 'Code.org (2025), State of AI + CS Education data: Missouri access and participation, national rows.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Kansas City, Missouri: Trees Trimmed And Removed Annually (public domain).', url: 'https://data.kcmo.org/d/4947-rw26' },
      { claim: 'IANA tzdb northamerica: Missouri under US central time (America/Chicago) and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Missouri DESE computer science policy, standards and course lists: dese.mo.gov returned 403 (Incapsula) on 17 October 2026, so nothing from the department is printed.',
      'Missouri statutes on computer science credit: revisor.mo.gov refused the connection and returned 403; no statute is quoted or paraphrased.',
      'Any statement that Missouri does or does not have a CS graduation requirement: not verifiable at source, so neither is claimed.',
      'A Missouri access value for 2024 to 2025: none is published in the Code.org release; not estimated.',
      'Code.org geography, school size, gender and race tabs, and the Code.org Missouri advocacy page: not used.',
      'Calendar-year dates for the Kansas City fiscal quarters: the city does not define its fiscal year in the file, so its labels are kept.',
      'Names of individual Missouri schools: not needed; counts only.',
      'That our classes earn Missouri school credit: refused.',
      'Any affiliation with Missouri DESE, the City of Kansas City, Code.org or the College Board.'
    ]
  }
};
