'use strict';
// Kansas (cg- state page, US cluster Phase 4, row 76). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Kansas has one of the lowest published shares of high schools offering computer science, a state split
// across two time zones, and a public university system with its own CS pathway; the Kansas State Department of
// Education site rejected every request, so the page says so and rests on what could be read. Sources read raw
// 17 to 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-kansas/):
//  - KSDE (www.ksde.gov and www.ksde.org): both returned "Request Rejected" on 17 October 2026 (ksde-gov-rejected.html,
//    ksde-org-home.html). Not retried around. No KSDE standard or requirement is described.
//  - Kansas Board of Regents, Qualified Admissions page: criteria "set by the Kansas Board of Regents, the governing
//    body for the six state universities"; rules implement "K.S.A. 76-717"; "Qualified Admissions requirements have
//    changed for 2021 high school graduates."
//  - Kansas Board of Regents, Kansas Scholars Curriculum: English - 4 years, Mathematics - 4 years, Science - 3 years,
//    Social Studies - 3 years, World Language - 2 years (computer science not among them).
//  - Kansas Board of Regents, Computer Science Systemwide Transfer Degree: "provides a pathway from any Kansas public
//    community college offering an associate degree in computer science to any Kansas public university offering a
//    baccalaureate degree in that program."
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): KS 2023-2024,
//    153 of 404 high schools (37.9%), source "State Education Agency and School Catalogs"; trend 28% (2018-19) to
//    37.9%, no 2024-25 value; participation 3,654 of 146,266 (2.50%) matched to the 2023-24 trend value 0.025;
//    denominator NCES Fall 2022.
//  - College Board, School Report of AP Exams by State 2023-24: Kansas 132 (2023), 146 (2024).
//  - IANA tzdb northamerica: "most of Kansas" in US central time, "far western Kansas" in US mountain time; "Kearny
//    County, KS (put all of county on central; previously split between MST and CST) ... 1990-10".
//  - City of Lawrence open data: Parks (Park in Incorporated Douglas County, 106 records) and Current Bus Stops for
//    Interactive Routes app (453 records; layer description: "please be sure to filter out KU Stop 500"); City of
//    Lawrence public record disclaimer read (lawrence-licence.txt). Our nearest-stop results: our-nearest-stop.txt.
// Our calculations: our-derived-figures.txt. Lesson family: nearest-neighbour search.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'KANSAS', label: 'Kansas', blurb: 'Coding and AI for Kansas students where few high schools offer computer science, with a Lawrence park and bus stop project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-kansas',
  code: 'ak',
  accent: '#425231',
  accentRationale: 'Kansas: #425231, a muted prairie-grass olive green from the US allocation table (alloc.tsv row 76), dark enough for text contrast on the paper and distinct from the neighbouring state accents',
  pageType: 'city',
  place: {
    name: 'Kansas',
    eyebrow: 'Kansas, United States',
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
  routeLabel: 'Kansas',
  title: 'Coding and AI Classes in Kansas | Live Online for Grades K-12',
  description: 'Live online coding and AI classes for Kansas students: how many Kansas high schools offer computer science, two time zones, and a Lawrence nearest bus stop project.',
  ogDescription: 'About four in ten Kansas high schools offered computer science in the latest data. The numbers, the university pathway, and live online classes for Kansas students.',
  twitterDescription: 'Kansas coding and AI classes, live online, for students whose school offers little or no computer science.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Kansas Students',
    description: 'Online Scratch, Python, web development, AP Computer Science and AI for Kansas students from kindergarten to twelfth grade, placed by level and taught live in English.'
  },

  h1: 'Coding and AI classes in Kansas',
  capsuleQ: 'How many Kansas high schools offer computer science?',
  capsule: 'About 38%. Code.org (2025) counts 153 of 404 Kansas public high schools offering computer science in 2023 to 2024, and 3,654 high school students enrolled, roughly 2.5%. For a Kansas student whose school has no course, Modern Age Coders teaches live online, from Scratch in the early grades to Python, web projects and AP Computer Science.',
  lead: 'Kansas sits well below the national share of 60% that Code.org gives for 2023 to 2024. In the most recent Kansas count, fewer than four in ten public high schools offered a computer science course, and one high school student in forty was enrolled in one. That is not a judgement on Kansas teachers; it reflects the hard arithmetic of small rural schools and a subject that needs a trained teacher. This page sets out the numbers as published, what we could and could not verify about state policy, how a student can still move from a Kansas high school into a computer science degree, and a Python project on City of Lawrence open data that teaches one of the oldest ideas in computing: finding the nearest thing.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Kansas.',

  picks: {
    eyebrow: 'Course picks for Kansas',
    h2: 'Four courses for Kansas students, by grade',
    intro: 'Useful above all where the local school has no computer science on its schedule. A free trial lesson fixes the level.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Grades K to 5', note: 'Logic, loops and events in blocks, ending in games and stories a young student builds alone.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Python from first print statement to data projects, including the Lawrence nearest-stop search on this page.' },
      { course: 'full-stack-web-development-teens-masterclass', band: 'Grades 9 to 12', note: 'Websites that work: HTML, CSS, JavaScript and a back end, built and deployed by the student.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Java and the AP Computer Science A exam, for a Kansas junior or senior whose school does not run the course.' }
    ]
  },

  sections: [
    {
      id: 'access', tint: '', eyebrow: 'The published numbers',
      h2: 'Fewer than four in ten Kansas high schools offer computer science',
      intro: 'Kansas rows from the Code.org State of AI + CS Education sheet and the College Board AP report, read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'Kansas high schools with a computer science course, year by year (trend tab of the Code.org 2025 sheet)', head: ['Year', 'Kansas schools with a course'], rows: [
          ['2018 to 2019', '28%'],
          ['2019 to 2020', '27%'],
          ['2020 to 2021', '40%'],
          ['2021 to 2022', '36%'],
          ['2022 to 2023', '34.9%'],
          ['2023 to 2024', '37.9%, 153 of 404 high schools']
        ] },
        { kind: 'p', text: 'The line does not climb steadily. It jumped to 40% in 2020 to 2021, slipped back for two years and recovered to 37.9% in 2023 to 2024. The sheet has no Kansas value for 2024 to 2025, so 2023 to 2024 is the latest Kansas year we can print. Code.org lists the source of the Kansas count as &ldquo;State Education Agency and School Catalogs&rdquo;, meaning it combines state records with course catalogs, which is worth knowing before comparing Kansas with a state counted another way.' },
        { kind: 'table', mt: true, caption: 'Enrollment and AP in Kansas', head: ['Measure', 'Kansas', 'Where it comes from'], rows: [
          ['Students in a computer science class, 2023 to 2024', '3,654 of 146,266, which we calculate as 2.50%', 'Latest participation tab of the Code.org 2025 sheet; the student total is an NCES fall 2022 count'],
          ['Enrollment share in earlier years', '2.7% (2021 to 2022), 2.64% (2022 to 2023)', 'Participation trend tab, same sheet'],
          ['Kansas schools giving AP exams, 2023', '132', 'College Board AP report by state, 2023-24 edition'],
          ['Kansas schools giving AP exams, 2024', '146', 'The same College Board file']
        ] },
        { kind: 'callout', h3: 'What the gap means for one family', p: 'If roughly six Kansas high schools in ten have no computer science course, a student keen on coding often has nowhere at school to take it. The College Board figures moved the other way, from 132 schools giving AP exams in 2023 to 146 in 2024, but an AP program in English or history does not mean an AP computer science class. Code.org asks that its figures be cited as: Code.org (2025). 2025 State of AI + CS Education.' }
      ]
    },
    {
      id: 'policy', tint: 'tint', eyebrow: 'State policy',
      h2: 'What we could verify about Kansas rules, and what we could not',
      intro: 'We go to the state agency itself for standards and requirements. In Kansas that door was shut on the day we checked.',
      body: [
        { kind: 'callout', h3: 'The education department did not respond', p: 'On 17 October 2026 the Kansas State Department of Education&rsquo;s websites answered our requests with a &ldquo;Request Rejected&rdquo; page. We did not try to get around that block, so this page makes no statement about Kansas computer science standards, course requirements or graduation rules. Check those directly with the department or your district.' },
        { kind: 'p', text: 'What we could read comes from the Kansas Board of Regents, the governing body for the six state universities. Its pages cover what a Kansas student needs for university admission and how computer science credits travel between Kansas colleges, which matters to any high schooler thinking about the subject as a degree.' },
        { kind: 'table', mt: true, caption: 'Kansas Board of Regents pages read on 17 October 2026', head: ['Page', 'What it says'], rows: [
          ['Qualified Admissions', 'Criteria set by the Board for its six state universities, under rules that implement K.S.A. 76-717; the requirements changed for 2021 high school graduates'],
          ['Kansas Scholars Curriculum', 'English 4 years, Mathematics 4 years, Science 3 years, Social Studies 3 years, World Language 2 years; computer science is not among them'],
          ['Computer Science Systemwide Transfer Degree', 'A pathway from any Kansas public community college with a computer science associate degree to any Kansas public university offering the bachelor&rsquo;s degree']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Reading the curriculum list', p: 'The Kansas Scholars Curriculum is a Regents scholarship curriculum, not a graduation rule. Its five subject lines leave computer science out, so a student building that transcript fits coding in as an elective or outside school.' },
          { h3: 'The transfer route', p: 'A Kansas teenager can start a computer science associate degree at a public community college and carry it into a bachelor&rsquo;s program, according to the Regents. Arriving with real programming experience makes the first year far easier.' },
          { h3: 'What to ask your district', p: 'Whether the high school offers a computer science course this year, whether it counts as a math, science or elective credit locally, and whether online courses can earn credit. Answers vary across Kansas districts.' }
        ] }
      ]
    },
    {
      id: 'nearest', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which Lawrence park is closest to a bus stop? A nearest-neighbour search',
      intro: 'The City of Lawrence publishes its parks and its transit stops as open data. Students load both, compare every park with every stop, and keep the closest.',
      body: [
        { kind: 'table', caption: 'Distance from park centre to the nearest Lawrence Transit stop (our calculation from city data downloaded 17 October 2026)', head: ['Result', 'Our figure'], rows: [
          ['Park polygons labelled Lawrence, type Park', '84'],
          ['Bus stops used, after removing StopID 500', '452'],
          ['Median distance to the nearest stop', '408 metres'],
          ['Parks within 400 metres, about a quarter mile', '42 of 84'],
          ['Parks within 800 metres, about half a mile', '57 of 84'],
          ['Parks more than 1,600 metres, about a mile, from any stop', '15'],
          ['Closest pair: Chaparral Play Lot to its stop', '34 metres']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Clean before you search', p: 'The MUNICIPALITY column spells the city two ways: 76 records say Lawrence and 9 say LAWRENCE. Filter on one spelling and you lose nine parks without any error message. Lower-casing first fixes it.' },
          { h3: 'Brute force first', p: 'With 84 parks and 452 stops, a double loop makes 37,968 distance calculations, which Python finishes in well under a second. Students write that version, then learn why a city with millions of points needs a spatial index.' },
          { h3: 'Follow the data&rsquo;s own note', p: 'The city&rsquo;s description of the stops layer asks users to filter out KU Stop 500. Reading the metadata before the data is a habit professional analysts build early.' }
        ] },
        { kind: 'callout', h3: 'What the numbers do not say', p: 'Every figure above is ours. We measured from the centre of each park polygon, so a long riverside park can sit far from a stop on paper while its entrance is next to one, and a few parks the file assigns to Lawrence lie well outside the bus network. The city releases the data as is, without warranty, and changes it often, so the counts describe one download on one day.' },
        { kind: 'p', text: 'An extension for stronger students: switch the question around and ask which stop serves the most parks within a quarter mile, or redo the search with the true polygon edge instead of the centre point and compare the two medians. Both teach that the algorithm is only half the answer; the other half is deciding what &ldquo;closest&rdquo; should mean.' }
      ]
    },
    {
      id: 'zones', tint: '', eyebrow: 'Class times',
      h2: 'Most of Kansas is on Central Time, the far west on Mountain',
      intro: 'The IANA time zone database files most of Kansas under US central time and far western Kansas under US mountain time.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Book around your week', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'Two clocks, one state', p: 'A family near the Colorado line may run an hour behind one in Topeka. We confirm every class in the family&rsquo;s own zone, Central or Mountain, so nobody turns up an hour early.' },
          { h3: 'Seasonal changes', p: 'Both Kansas zones set clocks an hour earlier on November 1, 2026 and an hour later on March 14, 2027. By our arithmetic, India time is 10 hours 30 minutes ahead of Central Daylight Time and 11 hours 30 minutes ahead of Mountain Daylight Time.' }
        ] },
        { kind: 'spec', title: 'A boundary that moved', p: 'The tz database records that Kearny County, Kansas was put entirely on central time in October 1990, after being split between Mountain and Central. Students who write a program to label Kansas places by zone discover that the right answer depends on the date, which is exactly why software relies on the tz database rather than a hand-made list.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'A path through school for a Kansas student',
    intro: 'Each rung shows typical grades, but the placement lesson decides the real starting point.',
    cols: [
      { band: 'Grades K to 5', h3: 'Thinking in steps', p: 'Blocks, puzzles and short animations that teach order, repetition and choices before any typing.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 6 to 8', h3: 'Real languages', p: 'Python for logic and data, plus a first look at building web pages that run in a browser.', courses: ['python-ai-kids-masterclass', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 9 to 10', h3: 'Projects with purpose', p: 'Larger Python programs, data from Kansas cities and full websites, for students whose school timetable has no CS slot.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Grades 11 to 12', h3: 'College-level work', p: 'AP Computer Science A in Java, then machine learning, as preparation for a degree such as the Regents transfer route.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Can an AI tool replace a missing computer science class in Kansas?',
    intro: 'It can answer questions. It cannot tell a student which question to ask of the data.',
    p1: 'Ask a chatbot for the Lawrence park nearest a bus stop and it may answer confidently. But was the distance measured from the park edge or its centre? Were the nine parks spelled LAWRENCE counted? Was the stop the city told users to drop left in? A student who wrote the search knows; one who only read the answer does not.',
    p2: 'That is why AI tools pay off most for students who can already code. They speed up typing and suggest fixes, and the student checks every result against the data. In a state where many high schools have no computer science course, learning to code first is how a student gets the full benefit of AI rather than its mistakes.',
    closer: 'A Kansas student without a school course loses nothing by starting online, as long as the work is real code they understand line by line.',
    blogAnchor: 'why learning to code still matters now'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'From Wichita to the far west of Kansas, the same live class',
    intro: 'Distance stops mattering once the classroom is a screen.',
    cells: [
      { h3: 'Anywhere in Kansas', p: 'A student on a western Kansas farm and one in Overland Park can join the same class from home, with no long drive to a city program.' },
      { h3: 'US grades, US calendar', p: 'Teachers work with US grade levels and the school year, and help students link projects to school where a course exists. Graded school work is always done by the student alone.' },
      { h3: 'Try before you commit', p: 'The opening lesson is free: a short real task, then our suggestion for level, course and time. Payment details are not requested.' },
      { h3: 'Batches by level', p: 'Fifteen to twenty students at a similar stage, from Kansas and across the US.' },
      { h3: 'One-to-one teaching', p: 'A dedicated teacher for students preparing for AP, catching up fast or aiming higher.' },
      { h3: 'Your zone, stated', p: 'Every booking names Central or Mountain Time to match where the family lives.' }
    ],
    spec: { title: 'Online only, taught from India', p: 'Modern Age Coders runs no center in Kansas and claims none. All teaching is live online from India; a student needs a computer, audio and a dependable connection.' }
  },

  fees: {
    h2: 'Kansas class fees',
    intro: 'The same three prices in every Kansas county.',
    first: 'An opening lesson that costs nothing and ends with a recommended level, course and time.',
    group: 'Monthly live classes in a level-matched group of fifteen to twenty students.',
    private: 'Monthly live classes with one teacher and one student.',
    closer: 'Families outside India pay a single US dollars rate, so Garden City and Lawrence pay alike. We bill only after the free lesson, when the course and the time slot are settled; holidays and missed classes are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from parents and students',

  book: {
    h2: 'Request a free lesson for a Kansas student',
    intro: 'Share the grade and interests. A fourth grader might start a block game; a high schooler might open the Lawrence park and bus stop files and write the search above.',
    success: 'Thank you. We will reach out soon about a class for Kansas.'
  },

  faq: {
    h2: 'Kansas coding and AI questions',
    intro: 'Answers for Kansas families, with sources named.',
    items: [
      { q: 'How common is a computer science course in a Kansas high school?', a: 'In the Code.org 2025 sheet, 153 of 404 Kansas public high schools offering computer science in 2023 to 2024, or 37.9%. Its source label for Kansas is State Education Agency and School Catalogs.' },
      { q: 'How many Kansas high school students take computer science?', a: 'The same data shows 3,654 students enrolled in 2023 to 2024, set against an NCES count of 146,266 high school students, which we calculate as 2.50%.' },
      { q: 'Does Kansas require computer science to graduate?', a: 'We could not verify it. The Kansas State Department of Education websites rejected our requests on 17 October 2026, so we make no claim either way; please check with the department or your district.' },
      { q: 'Is computer science in the Kansas Scholars Curriculum?', a: 'No. The Kansas Board of Regents lists English, Mathematics, Science, Social Studies and World Language for that curriculum, and computer science is not among them.' },
      { q: 'Can a Kansas community college student move into a CS degree?', a: 'Yes, according to the Regents. The Computer Science Systemwide Transfer Degree links Kansas public community college associate degrees in computer science to Kansas public university bachelor\'s programs.' },
      { q: 'Which time zone are Kansas classes in?', a: 'Most of Kansas is on Central Time and far western Kansas on Mountain Time, per the tz database. We confirm each class in the zone where the family lives.' },
      { q: 'How are class times arranged?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Do your classes give Kansas school credit?', a: 'Not by themselves. Credit decisions belong to the school or district. Our lessons build skill and projects, and a student\'s graded school work stays their own.' },
      { q: 'Do you have a Kansas location?', a: 'No. We teach only online, live, from India, and do not claim any Kansas office or classroom.' },
      { q: 'How much do classes cost?', a: 'The fees panel lists three prices: nothing for the first lesson, then a monthly price for a group place or for private teaching. Billing waits until after that first lesson.' }
    ]
  },

  next: {
    eyebrow: 'Keep exploring',
    h2: 'More for Kansas students',
    html: 'Older students weighing the AP route can read about <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a> and look at <a class="cg-inline-link" href="/coding-classes-for-high-school-students">coding classes for high school students</a>. Students who like a challenge can start with the <a class="cg-inline-link" href="/acsl-competition-preparation">ACSL competition preparation guide</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a> links every US guide.',
    waLabel: 'WhatsApp the team'
  },

  footerHeading: 'Kansas and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'US hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/acsl-competition-preparation', label: 'ACSL preparation' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A classes' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-ak .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.2rem); }
.cg-root.cg-ak .cg-hero h1 { font-weight: 800; letter-spacing: -0.025em; line-height: 1.02; }
.cg-root.cg-ak .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-ak .cg-eyebrow { letter-spacing: 0.14em; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-ak .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.01em; }
.cg-root.cg-ak .cg-table caption { font-style: italic; text-align: left; }
.cg-root.cg-ak .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ak .cg-callout { border-left-width: 6px; }
.cg-root.cg-ak .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'Kansas, read raw 17 to 18 October 2026: KSDE (ksde.gov, ksde.org) returned Request Rejected and is not described. Kansas Board of Regents: Qualified Admissions (six state universities, K.S.A. 76-717, changed for 2021 graduates); Kansas Scholars Curriculum (English 4, Mathematics 4, Science 3, Social Studies 3, World Language 2; no computer science); Computer Science Systemwide Transfer Degree. Code.org (2025) access (153 of 404, 37.9%, 2023-24; trend 28% to 37.9%; source State Education Agency and School Catalogs) and participation (3,654 of 146,266, 2.50%, 2023-24); College Board AP schools 132 and 146; IANA tzdb: most of Kansas central, far western Kansas mountain, Kearny County all central 1990-10.',
    localProject: 'City of Lawrence open data, downloaded 17 October 2026: Parks (106 records; MUNICIPALITY Lawrence 76 and LAWRENCE 9; 84 of type Park) and Current Bus Stops for Interactive Routes app (453 records, 452 after removing StopID 500 as the layer asks); City public record disclaimer read. Our nearest-stop search from park centroids: median 408 metres, 42 within 400 metres, 57 within 800 metres, 15 beyond 1,600 metres, closest 34 metres; all labelled ours. Lesson family: nearest-neighbour search and data cleaning before it.',
    requiredMentions: [
      '153 of 404',
      '3,654 of 146,266',
      'Kansas Scholars Curriculum',
      'Request Rejected',
      'K.S.A. 76-717',
      'Computer Science Systemwide Transfer Degree',
      'Kearny County',
      'far western Kansas',
      '408 metres',
      'StopID 500',
      'Chaparral Play Lot'
    ],
    sources: [
      { claim: 'Kansas Board of Regents: Qualified Admissions.', url: 'https://www.kansasregents.org/academic_affairs/qualified_admissions' },
      { claim: 'Kansas Board of Regents: Kansas Scholars Curriculum.', url: 'https://www.kansasregents.org/students/student_financial_aid/kansas_scholars_curriculum' },
      { claim: 'Kansas Board of Regents: Computer Science Systemwide Transfer Degree.', url: 'https://www.kansasregents.org/academic_affairs/systemwide-transfer-degrees/computer-science-systemwide-transfer-degree' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Kansas access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Lawrence: Parks feature service.', url: 'https://services.arcgis.com/8O9UlSTnqjKptoda/arcgis/rest/services/Parks/FeatureServer' },
      { claim: 'City of Lawrence: Current Bus Stops for Interactive Routes app feature service.', url: 'https://services.arcgis.com/8O9UlSTnqjKptoda/arcgis/rest/services/Current_Bus_Stops_for_Interactive_Routes_app/FeatureServer' },
      { claim: 'IANA tzdb northamerica: Kansas central and mountain time, Kearny County change.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Kansas State Department of Education standard, course or graduation requirement: KSDE returned Request Rejected on 17 October 2026 and was not retried around; nothing from KSDE is printed.',
      'A 2024-25 Kansas access figure: the Code.org trend tab has none; 2023-24 is the latest printed.',
      'A list of Kansas counties on Mountain Time: the tzdb text says only far western Kansas, so no county list is printed beyond the Kearny County note.',
      'Names of the six Regents universities and the listed community colleges: not printed; individual institutions are not named.',
      'Code.org Graduation, Geography, Gender and Race tabs and the Code.org state policy summaries: not used.',
      'Bus stop names near health facilities and any address field: not printed.',
      'That our classes earn Kansas school credit or meet any Kansas requirement: refused.',
      'Any affiliation with KSDE, the Kansas Board of Regents, the City of Lawrence, Code.org or the College Board.'
    ]
  }
};
