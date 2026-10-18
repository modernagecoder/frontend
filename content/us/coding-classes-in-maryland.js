'use strict';
// Maryland (cg- state page, US cluster Phase 4, row 80). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Maryland requires every public high school to offer computer science (Education Article 4-111.4, from
// 2021-2022) and, for students entering ninth grade from 2021-2022, a one-credit "Computer science, engineering, or
// technology education" graduation requirement (COMAR 13A.03.02.03 C). Sources read raw on 17 and 18 October 2026
// (copies in keyword-research-2026-09/us/src/coding-classes-in-maryland/):
//  - msde.maryland.gov (marylandpublicschools.org redirects there) returned 403 for home, sitemap and CS pages
//    (msde-403.txt); not retried. No MSDE page wording printed; standards adoption year not verified.
//  - Maryland General Assembly, Education Article 4-111.4 (ged-4-111.4.txt): "(a) Beginning in the 2021-2022 school
//    year, each county board shall require each public high school in the county to offer at least one computer
//    science course. (b) The computer science course shall be of high quality and meet or exceed the curriculum
//    standards and requirements established by the State Board." and (c)(1) efforts to "Incorporate instruction in
//    computer science in each public elementary and middle school in the county". (c)(2) demographic clause not used.
//  - Library of Maryland Regulations, COMAR 13A.03.02.03 (comar-13A.03.02.03.txt): B. students who entered 9th grade in
//    2020-2021 or earlier: "minimum of 21 credits", three maths credits, "(8) Technology education - one credit";
//    C. "Beginning with students entering the 9th grade class in the 2021-2022 school year": "minimum of 22 credits",
//    "Mathematics - four credits", "(8) Computer science, engineering, or technology education - one credit that
//    includes the study of computers and algorithmic processes or the application of knowledge, tools, and skills to
//    solve practical problems and extend human capabilities".
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet (codeorg-cb-extract.txt): MD access 83% (2018-19), 90%,
//    92%, 98%, 99%, 100% (2023-24), 100% (2024-25: 219 of 219, source "State Education Agency"); participation 14.5%
//    (2020-21), no 2021-22, 15.6% (2022-23), no 2023-24, 16.69% (2024-25: 46,157 of 276,484).
//  - College Board, School Report of AP Exams by State 2023-24: MD schools with AP exams 370 (2023), 374 (2024).
//  - IANA zone.tab: America/New_York; Rule US 2007: November 1, 2026 and March 14, 2027.
//  - Project: data.maryland.gov MARC Trains Stations (ida8-wrms; "Ridership data is based on MTA's Fiscal Year 2019")
//    and MARC Train Parking (x5r3-3hbx), MD iMAP / MTA, licence text on the MD iMAP item: provided "as is" without
//    warranty. Downloaded 17 October 2026. 44 station rows (MD 38, DC 3, WV 3; Brunswick 19, Penn 13, Camden 12); 44
//    parking rows; Union Station appears once per line in both tables. Our joins: name-only key gives 50 pairs (wrong);
//    composite key (name, line) matches 44 of 44. Our per-line sums: Penn 13 stations, 14,509 spaces, 12,110 average
//    weekday riders; Camden 12, 11,668, 1,913; Brunswick 19, 8,008, 2,862. Largest lots: Greenbelt 3,999 spaces (34
//    weekday riders), New Carrollton 3,519, BWI Airport 3,187; Union Station 2,194 on each of three rows; column sum 34,185.
// Lesson family: joining two tables on a shared key, and the duplicate key that breaks a naive join.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'MARYLAND', label: 'Maryland', blurb: 'Coding and AI for Maryland students under the CS offering law and the 22-credit diploma rule, with a MARC rail data join project.' },
  market: US,
  slug: 'coding-classes-in-maryland',
  code: 'aim',
  accent: '#3D5466',
  accentRationale: 'Maryland: #3D5466, a slate Chesapeake grey-blue from the allocation table, muted, distinct from the North Carolina green and the brighter US blues, with sound text contrast on the paper',
  pageType: 'city',
  place: {
    name: 'Maryland',
    eyebrow: 'Maryland, United States',
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
  routeLabel: 'Maryland',
  title: 'Coding and AI Classes in Maryland | Live Online',
  description: 'Live online coding and AI classes for Maryland students: the high school CS offering law, the CS credit slot in the diploma, state data, and a MARC rail project.',
  ogDescription: 'Every Maryland public high school must offer computer science, and newer students need a CS, engineering or technology credit. The rules, the figures and live classes.',
  twitterDescription: 'Maryland coding and AI classes, live online, built around the state CS rules and MARC data.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Maryland Students',
    description: 'Python, Java, AP Computer Science, web development and AI for Maryland students from elementary through high school, taught live online in level-matched batches or one to one.'
  },

  h1: 'Coding and AI classes in Maryland',
  capsuleQ: 'Do Maryland students need computer science to graduate?',
  capsule: 'Students who entered ninth grade from 2021 to 2022 need one credit in computer science, engineering, or technology education among 22 credits, under COMAR 13A.03.02.03, so computer science is one way to meet it rather than a must. Separately, Education Article 4-111.4 requires every public high school to offer at least one computer science course. Modern Age Coders runs live online classes for Maryland learners at every stage, with AP Computer Science A for juniors and seniors.',
  lead: 'Maryland wrote computer science into two layers of law. A statute tells every county board that each public high school must offer at least one computer science course, beginning in the 2021 to 2022 school year. A State Board regulation then rewrote the diploma itself for students entering ninth grade from that same year: 22 credits instead of 21, four of maths instead of three, and a credit slot that now reads computer science, engineering, or technology education where it used to read technology education alone. This page quotes both texts as published, sets out how far access and enrollment have moved since, and finishes with a rail data project that teaches Maryland students how two tables are joined, and how one repeated name can quietly break the join.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Maryland.',

  picks: {
    eyebrow: 'Course picks for Maryland',
    h2: 'Four Maryland starting points, chosen by grade',
    intro: 'The free first class places your student at the right level within any of these.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Grades K to 5', note: 'Block-based games and apps that build the habits the county elementary efforts aim for, a little ahead of schedule.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Python for teens, including the MARC station and parking join from this page, written line by line.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Java and the AP Computer Science A course and exam, for students taking it in school or on their own.' },
      { course: 'full-stack-web-development-teens-masterclass', band: 'Grades 9 to 12', note: 'React and Node.js projects for teens who want to build something people can actually use.' }
    ]
  },

  sections: [
    {
      id: 'law', tint: '', eyebrow: 'The law and the diploma',
      h2: 'Two Maryland rules: every high school offers CS, and the diploma has a CS credit slot',
      intro: 'The statute from the Maryland General Assembly and the regulation from the Library of Maryland Regulations, both read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'Maryland computer science rules as written in the statute and the regulation', head: ['Text', 'What it says'], rows: [
          ['Education Article 4-111.4 (a)', 'Beginning in the 2021 to 2022 school year, each county board shall require each public high school in the county to offer at least one computer science course'],
          ['Education Article 4-111.4 (b)', 'The course shall be of high quality and meet or exceed the curriculum standards and requirements established by the State Board'],
          ['Education Article 4-111.4 (c)(1)', 'County boards shall make efforts to incorporate computer science instruction in each public elementary and middle school'],
          ['COMAR 13A.03.02.03 C', 'Students entering 9th grade from the 2021 to 2022 school year need a minimum of 22 credits for a diploma'],
          ['COMAR 13A.03.02.03 C (8)', 'Computer science, engineering, or technology education: one credit that includes the study of computers and algorithmic processes, or applying knowledge, tools and skills to practical problems']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The older diploma', p: 'Students who entered 9th grade in 2020 to 2021 or earlier fall under clause B: a minimum of 21 credits, three in maths, and one credit in technology education, with no computer science wording at all.' },
          { h3: 'The newer diploma', p: 'Clause C raises the total to 22 credits, requires four maths credits, and widens the credit slot so that a computer science course is one of three named ways to fill it.' },
          { h3: 'A choice, not a mandate', p: 'Because the slot reads computer science, engineering, or technology education, a Maryland student can graduate without computer science. What changed is that every high school must now offer it.' }
        ] },
        { kind: 'p', text: 'We could not read the Maryland State Department of Education site, which refused our requests, so this page says nothing about the adoption date or the content of Maryland&rsquo;s computer science standards beyond what the statute says: that the high school course must meet the standards set by the State Board. A counselor can tell you which courses at your student&rsquo;s school count toward the credit slot.' }
      ]
    },
    {
      id: 'numbers', tint: 'deep', eyebrow: 'The published figures',
      h2: 'Full access in the count, and one student in six enrolled',
      intro: 'Values for Maryland only, each with the dataset and tab it came from.',
      body: [
        { kind: 'table', caption: 'Code.org (2025) access trend for Maryland high schools', head: ['Year', 'Maryland high schools offering CS'], rows: [
          ['2018 to 2019', '83%'],
          ['2019 to 2020', '90%'],
          ['2020 to 2021', '92%'],
          ['2021 to 2022', '98%'],
          ['2022 to 2023', '99%'],
          ['2023 to 2024', '100%'],
          ['2024 to 2025', '100%, which is 219 of 219 high schools in Code.org&rsquo;s count']
        ] },
        { kind: 'table', mt: true, caption: 'Enrollment and AP schools in Maryland', head: ['Measure', 'Maryland', 'Source'], rows: [
          ['High school students in CS, 2020 to 2021', '14.5%', 'Participation over the years tab, Code.org'],
          ['High school students in CS, 2022 to 2023', '15.6%', 'Participation over the years tab, Code.org'],
          ['High school students in CS, 2024 to 2025', '46,157 of 276,484, or 16.69%', 'Latest participation tab, Code.org'],
          ['Schools with AP exams, 2023', '370', 'College Board state AP school report'],
          ['Schools with AP exams, 2024', '374', 'College Board state AP school report']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The statute in the numbers', p: 'Access climbed from 83% in 2018 to 2019 to 98% in 2021 to 2022, the first year of the offering rule, and has stood at 100% in Code.org&rsquo;s count for the two latest years.' },
          { h3: 'Read 100% carefully', p: 'It means 219 of the 219 high schools Code.org counted, from state education agency data. It does not mean every course is full, or that every student can fit one in.' },
          { h3: 'Enrollment is the next step', p: 'With access complete, the participation line matters more: 14.5% to 16.69% over the years with values. Two school years have no Maryland value and are left blank.' }
        ] },
        { kind: 'callout', h3: 'How to cite these figures', p: 'Access and participation: Code.org (2025). 2025 State of AI + CS Education, published data sheet, Maryland rows. AP schools: College Board, School Report of AP Exams by State. We quote values; we do not republish either dataset.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'Signature project',
      h2: 'Joining MARC stations to MARC parking: a two-table project on Maryland open data',
      intro: 'Maryland publishes one table of MARC train stations with average ridership and another of MARC parking lots with space counts. Students join them to compare parking with riders, line by line.',
      body: [
        { kind: 'table', caption: 'MARC lines after joining stations to parking (our calculation from data.maryland.gov tables, downloaded 17 October 2026)', head: ['Line', 'Stations matched', 'Our sum of parking spaces', 'Our sum of average weekday riders'], rows: [
          ['Penn', '13', '14,509', '12,110'],
          ['Camden', '12', '11,668', '1,913'],
          ['Brunswick', '19', '8,008', '2,862']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Two tables, one key', p: 'The stations table has 44 rows: 38 in Maryland, 3 in the District of Columbia and 3 in West Virginia. The parking table also has 44. A first attempt joins on the station name alone.' },
          { h3: '2. The join that lies', p: 'Union Station appears three times in each table, once per line. Joining on name alone produces 50 pairs from 44 stations, with each Union Station row matched three times. Nothing errors; the totals are simply wrong.' },
          { h3: '3. A composite key', p: 'Joining on name and line together matches 44 of 44 rows exactly once. Students learn to count rows before and after every join, the cheapest test in data work.' }
        ] },
        { kind: 'spec', title: 'One garage, counted three times', p: 'Each Union Station parking row carries the same 2,194 spaces, so adding the whole column gives 34,185 spaces with that one facility counted three times. Spotting a repeated value that should be counted once is the second lesson hiding in the data.' },
        { kind: 'callout', h3: 'Our numbers, state data', p: 'The sums and matches above are ours. The station file says its ridership is based on the MTA&rsquo;s Fiscal Year 2019, so these are not current figures. MD iMAP provides the data as is, without warranty, and neither the MTA nor the state has checked our results. Greenbelt shows the largest lot, 3,999 spaces, against 34 average weekday riders in that file: a number worth questioning, not quoting.' }
      ]
    },
    {
      id: 'time', tint: 'deep', eyebrow: 'Class times',
      h2: 'Eastern Time from Garrett County to Ocean City',
      intro: 'All of Maryland keeps Eastern Time, America/New_York in the IANA database, while our teachers keep India time.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The gap', p: 'Through the summer India is 9 hours 30 minutes ahead of Baltimore; once the clocks change in November, the gap is 10 hours 30 minutes.' },
          { h3: 'The dates', p: 'This school year the US switch dates are November 1, 2026, back an hour, and March 14, 2027, forward an hour, from the IANA rule for the United States.' },
          { h3: 'Booked in Eastern', p: 'Every confirmation, reminder and change of time is written in Eastern Time, so a family in Frederick or Salisbury never converts anything.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Rungs from first loops to AP and AI',
    intro: 'Use the grades as a rough guide; the free class confirms the right rung.',
    cols: [
      { band: 'Grades K to 5', h3: 'Blocks and stories', p: 'Scratch animations and games, and a gentle first look at what AI is and is not.', courses: ['scratch-programming-complete-course', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 6 to 8', h3: 'Typed code', p: 'Python through games and turtle drawings, or a Roblox route into Luau for game-minded students.', courses: ['python-ai-kids-masterclass', 'roblox-game-coding-for-kids-lua-course'] },
      { band: 'Grades 9 to 10', h3: 'Toward the credit', p: 'Java or Python at depth, the kind of course that fits Maryland&rsquo;s computer science credit slot.', courses: ['java-programming-masterclass-for-teens', 'python-complete-masterclass-teens'] },
      { band: 'Grades 11 to 12', h3: 'AP and machine learning', p: 'AP Computer Science Principles, then machine learning built on data the student understands.', courses: ['ap-computer-science-principles-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool can write the join. Can it tell that the answer is wrong?',
    intro: 'The MARC project shows why Maryland&rsquo;s computer science credit still matters in the age of AI.',
    p1: 'Ask an AI assistant to merge the station and parking tables and it will happily produce code that joins on the station name. The code runs, the output looks tidy, and Union Station is counted three times over. Only someone who knows to check the row count before and after the join will notice.',
    p2: 'That check is the whole difference between using a tool and understanding it. Students who have written joins by hand can let an AI assistant draft the routine code, then test the result the way an analyst would, and explain to anyone why their totals can be trusted.',
    closer: 'Maryland now offers computer science in every high school; the students who get most from it are the ones who learn to test an answer, not just generate one.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the mountains to the Eastern Shore, one live class',
    intro: 'Maryland runs from the Appalachian west to the Atlantic coast; an online class reaches all of it on the same terms.',
    cells: [
      { h3: 'From home', p: 'A student in Cumberland and one in Annapolis can share the same batch, each at their own desk, with no evening drive after school.' },
      { h3: 'Fits the school program', p: 'Teachers use US grades and understand the Maryland credit slot, so a ninth grader can build depth alongside a school CS course. Graded school work remains the student&rsquo;s own.' },
      { h3: 'Matched groups', p: 'Fifteen to twenty learners per batch, all near the same level, joining from Maryland and other states.' },
      { h3: 'One to one', p: 'A private teacher for AP preparation, competitions, or a student who wants a quicker pace than a group allows.' },
      { h3: 'Your timetable', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'A free lesson first', p: 'One full class with a real teacher, then a suggested level, course and time. No payment details at that stage.' }
    ],
    spec: { title: 'Online only, from India', p: 'Modern Age Coders has no office or classroom in Maryland and claims none. Classes are live online from India; a student needs a computer, sound and a dependable connection.' }
  },

  fees: {
    h2: 'Fees for Maryland families',
    intro: 'Three options, each priced below.',
    first: 'A complete first lesson at no charge, with a recommended level, course and slot.',
    group: 'A month of classes in a batch of fifteen to twenty students at one level.',
    private: 'A month of classes with a dedicated teacher, one to one.',
    closer: 'Maryland families pay the single US rate in US dollars, the same in Bethesda as in Hagerstown. Billing starts only after the free lesson, once course and times are agreed; the pricing page covers holidays and missed classes.'
  },

  reviewsH2: 'Parents and students on Google',

  book: {
    h2: 'Book a free class for a Maryland student',
    intro: 'Tell us the grade and the goal: a first Scratch game for a third grader, Python for an eighth grader, or the MARC join for a sophomore.',
    success: 'Thank you. We will be in touch shortly about a class for your Maryland student.'
  },

  faq: {
    h2: 'Maryland coding and AI questions',
    intro: 'Answers from the Maryland statute and regulation, Code.org and the College Board, read in October 2026.',
    items: [
      { q: 'Is computer science required to graduate in Maryland?', a: 'Not by itself. COMAR 13A.03.02.03 C requires one credit in computer science, engineering, or technology education for students entering 9th grade from 2021 to 2022, so computer science is one of three ways to meet it.' },
      { q: 'Must every Maryland high school offer computer science?', a: 'Yes. Education Article 4-111.4 says that beginning in 2021 to 2022 each county board shall require each public high school to offer at least one computer science course.' },
      { q: 'How many credits does a Maryland diploma need?', a: 'A minimum of 22 credits for students entering 9th grade from 2021 to 2022, including four maths credits. Students who entered in 2020 to 2021 or earlier need a minimum of 21.' },
      { q: 'What about elementary and middle school?', a: 'The statute asks county boards to make efforts to incorporate computer science instruction in each public elementary and middle school; it does not set a required course at those levels.' },
      { q: 'How many Maryland high schools offer computer science?', a: 'The Code.org 2025 data shows 219 of 219 high schools in its count, or 100%, for 2024 to 2025.' },
      { q: 'How many Maryland students take computer science?', a: 'Code.org reports 46,157 of 276,484 high school students, or 16.69%, enrolled in computer science in 2024 to 2025.' },
      { q: 'When are classes for Maryland students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. Times are confirmed in Eastern Time, America/New_York.' },
      { q: 'Can your classes fill the Maryland credit slot?', a: 'No. Only school courses earn Maryland credit. Our classes add depth and projects alongside them, and anything a school grades remains the student\'s own work.' },
      { q: 'What does the MARC project teach?', a: 'Joining two tables. Station and parking tables each have 44 rows, and Union Station appears once per line, so a name-only join gives 50 pairs while a name-and-line join matches 44 of 44.' },
      { q: 'Is there a Modern Age Coders center in Maryland?', a: 'No. We have no premises in Maryland; all classes are live online from India.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Maryland students',
    html: 'For the exam route, see <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a> and <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>. Builders can enter the <a class="cg-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge</a> or look at <a class="cg-inline-link" href="/summer-research-programs-coding">summer research programs in coding</a>. All states start from the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Maryland and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
    { href: '/summer-research-programs-coding', label: 'Summer research in coding' }
  ],

  personalityCss: `
.cg-root.cg-aim .cg-hero-grid { align-items: center; gap: clamp(0.9rem, 2.6vw, 2.2rem); }
.cg-root.cg-aim .cg-hero h1 { font-weight: 700; letter-spacing: -0.015em; line-height: 1.07; }
.cg-root.cg-aim .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-aim .cg-eyebrow { letter-spacing: 0.13em; font-weight: 660; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-aim .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.009em; }
.cg-root.cg-aim .cg-grid-3 { gap: clamp(0.9rem, 2vw, 1.6rem); }
.cg-root.cg-aim .cg-table caption { font-weight: 660; text-align: left; }
.cg-root.cg-aim .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aim .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-aim .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Maryland, read raw 17 October 2026: msde.maryland.gov returned 403 (not retried; no MSDE wording printed). Maryland General Assembly, Education Article 4-111.4 (each public high school offers at least one CS course from 2021-2022; high quality, State Board standards; efforts in elementary and middle school). COMAR 13A.03.02.03 B (21 credits, three maths, technology education credit) and C (from 9th grade 2021-2022: 22 credits, four maths, one credit in computer science, engineering, or technology education). Code.org (2025): access 83% to 100% (219 of 219, 2024-25); participation 14.5%, 15.6%, 16.69% (46,157 of 276,484). College Board AP schools 370 and 374. IANA America/New_York and US DST rule.',
    localProject: 'data.maryland.gov MARC Trains Stations (ida8-wrms, ridership based on MTA FY2019) and MARC Train Parking (x5r3-3hbx), MD iMAP/MTA, provided as is; downloaded 17 October 2026. 44 stations (MD 38, DC 3, WV 3; Brunswick 19, Penn 13, Camden 12) and 44 parking rows; name-only join 50 pairs, composite join 44 of 44; our per-line sums Penn 14,509 spaces and 12,110 riders, Camden 11,668 and 1,913, Brunswick 8,008 and 2,862; Union Station 2,194 spaces on three rows, column sum 34,185; Greenbelt 3,999 spaces. Lesson family: two-table join on a composite key.',
    requiredMentions: [
      'Education Article 4-111.4',
      'COMAR 13A.03.02.03',
      'Computer science, engineering, or technology education',
      'a minimum of 22 credits',
      'minimum of 21 credits', 
      '46,157 of 276,484',
      '44 of 44',
      '34,185',
      'Fiscal Year 2019'],
    sources: [
      { claim: 'Maryland General Assembly: Education Article 4-111.4, high school computer science offering.', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&section=4-111.4' },
      { claim: 'Library of Maryland Regulations: COMAR 13A.03.02.03, Enrollment and Credit Requirements.', url: 'https://regs.maryland.gov/us/md/exec/comar/13A.03.02.03' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Maryland access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'Maryland open data: MARC Trains Stations.', url: 'https://data.maryland.gov/d/ida8-wrms' },
      { claim: 'Maryland open data: MARC Train Parking.', url: 'https://data.maryland.gov/d/x5r3-3hbx' },
      { claim: 'MD iMAP: MARC Trains Stations layer and licence text.', url: 'https://mdgeodata.md.gov/imap/rest/services/Transportation/MD_Transit/FeatureServer/6' },
      { claim: 'IANA tzdb: America/New_York and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Maryland CS standards content or adoption year: not printed; msde.maryland.gov returned 403 and was not retried.',
      'That computer science alone is a Maryland graduation requirement: refused; the credit slot names computer science, engineering, or technology education.',
      'Education Article 4-111.4 (c)(2) enrollment groups: not used (identity content).',
      '100% access as every student having a seat: refused; printed as 219 of 219 schools in Code.org\'s count.',
      'Code.org urban, rural, size, gender and race breakdowns: not used.',
      'Current MARC ridership: not claimed; the file states FY2019, and only our sums are printed, labelled as ours.',
      'That our classes earn Maryland credit: refused.',
      'Any affiliation with MSDE, the MTA, MD iMAP, Code.org or the College Board.'
    ]
  }
};
