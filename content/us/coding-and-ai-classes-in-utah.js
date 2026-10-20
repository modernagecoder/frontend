'use strict';
// Utah (cg- state page, US cluster Phase 4, row 101). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Utah set itself a 2022 goal of computer science access for every student, wrote K-5 and 6-12 standards in
// 2019, and now reports one of the higher access shares in the Code.org data. What do the standards ask, what do the
// figures show, and what can a student build? Sources read raw on 18 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-and-ai-classes-in-utah/):
//  - USBE, Utah K-5 Computer Science Standards (2019, "ADA Compliant: October 2019"): Taskforce priorities
//    "presented to and subsequently accepted by the USBE" in "June 2018"; "the 30+ computer science and IT courses
//    currently offered (popular courses include Computer Programming 1, Computer Science Principles, Exploring Computer
//    Science, Web Development 1, and Game Development)"; educators "worked with the USBE in March 2019 to develop K-5
//    Computer Science Standards"; core concepts "Computing Systems Networks & the Internet Data and Analysis Algorithms
//    and Processing Impacts of Computing Computational Thinking"; example "Standard 2.DA.1 - Demonstrate how to store,
//    copy, search, retrieve, modify and delete information using a computing device".
//  - USBE, Utah 6-12 Computer Science Standards, dated "November 8, 2019": vision "Each student in secondary public
//    schools will have access to robust and varied computer science courses by 2022."; "This begins in our elementary
//    schools with competencies in keyboarding, appropriate and responsible use of technology, and basic coding
//    principles."; example "Standard 6.NI.1 Explain potential security threats and practice practical measures to
//    reduce these threats."
//  - USBE, Utah Computer Science Education Master Plan summary ("ADA Compliant: July 2019"): "To give every student
//    access to robust computer science education by 2022"; Governor's goal of "computer science taught in every school
//    by 2022"; "HB227, the Utah Computer Science Grant Act"; "Only 16 percent of Utah's high schools offer intermediate
//    and advanced computer science." (2019 statement, quoted as dated).
//  - USBE, Graduation Requirements page: "A student in grades 9-12 is required to earn a minimum of 24 units of credit
//    through course completion or through competency assessment consistent with R277-705"; "an LEA shall recognize
//    high school credits earned before grade 9"; "Districts may add additional credit requirements."
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): UT access 66%
//    (2018-19), 70%, 74%, 73%, 77%, 80.5% (2023-24), 82.2% (2024-25); most recent 175 of 213 (2024-2025, "State
//    Education Agency"); participation 12.9% (2020-21), 14.1%, 12.5%, 12.64%, 11.38% (2024-25); most recent 24,445 of
//    214,800; denominator NCES fall 2022. National 2024-25: 60% and 6.1%.
//  - College Board, School Report of AP Exams by State 2023-24: Utah 196 (2023), 203 (2024); public 164, 181;
//    non-public 32, 22.
//  - IANA tzdb: Mountain list "... Utah, Wyoming"; zone1970.tab America/Denver "Mountain (most areas)".
//  - UGRC (Utah Geospatial Resource Center), Utah Trailheads, open data item 9c21cc1f95ba40468deb36bb6fd94943,
//    "licensed under a Creative Commons Attribution 4.0 International License"; description: the layer "features many
//    of Utah's trailheads but is not yet complete". Fetched 18 October 2026: 568 records, all with geometry; DataSource
//    "OrbitalView" 559, blank 9; PrimaryMaintenance, SeasonalRestriction and Features empty in all 568. Our boxes: 50
//    inside lat 40.5 to 40.9, lon -112.1 to -111.7; 317 north of 40.0; 136 south of 38.0; one point at latitude
//    36.99999, just south of 37.
// Lesson family: geographic bounding-box filtering and boundary conditions.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'UTAH', label: 'Utah', blurb: 'Coding and AI for Utah students, built on the 2019 K-5 and 6-12 computer science standards, with a statewide trailhead mapping project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-utah',
  code: 'aiu',
  accent: '#704714',
  accentRationale: 'Utah: #704714, a canyon sandstone brown, allocated in alloc.tsv row 101 and checked by the build for 4.5:1 contrast on every paper',
  pageType: 'city',
  place: {
    name: 'Utah',
    eyebrow: 'Utah, United States',
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
  routeLabel: 'Utah',
  title: 'Coding and AI Classes in Utah | Live Online, Mountain Time',
  description: 'Live online coding and AI classes for Utah students: the 2019 K-5 and 6-12 computer science standards, the published access figures, and a trailhead map project.',
  ogDescription: 'Utah aimed for computer science access for every student by 2022 and wrote K-12 standards in 2019. What they ask, what the numbers show, and live online classes.',
  twitterDescription: 'Utah coding and AI classes, live online in Mountain Time.',
  ogImageCourse: 'game-development-masterclass-for-kids',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Utah Students',
    description: 'Block coding, game development, web development and AP Computer Science Principles for Utah students from kindergarten to twelfth grade, taught live online in English and scheduled in Mountain Time.'
  },

  h1: 'Coding and AI classes in Utah',
  capsuleQ: 'What computer science standards does Utah use?',
  capsule: 'Utah has its own K-5 Computer Science Standards (2019) and 6-12 Computer Science Standards (November 8, 2019) from the Utah State Board of Education, built on strands such as Data and Analysis and Impacts of Computing. Code.org (2025) counts 175 of 213 Utah high schools (82.2%) with a computer science course in 2024 to 2025. We teach Utah students live online in Mountain Time, from block coding to game development and AP Computer Science Principles.',
  lead: 'Utah approached computer science as a planned project rather than a single law. A state taskforce set priorities in 2018, standards for kindergarten through fifth grade and for sixth through twelfth grade followed in 2019, and a master plan aimed at access for every student by 2022. The published figures since then put Utah well above the national share of high schools offering computer science. This page sets out what the standards ask at each level, what the graduation rules say about credit, the access and participation numbers, and a mapping project on the state&rsquo;s own trailhead data that teaches one of the most practical skills in geographic coding: drawing a box and counting what falls inside it.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Utah.',

  picks: {
    eyebrow: 'Course picks for Utah',
    h2: 'Courses that line up with Utah&rsquo;s popular CS classes',
    intro: 'The 2019 standards documents name Game Development, Web Development 1 and Computer Science Principles among Utah&rsquo;s popular courses. These picks build toward the same areas, with the level set in a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Kindergarten to grade 3', note: 'Block programs, patterns and short animations, matching the early K-5 work on algorithms and computational thinking.' },
      { course: 'game-development-masterclass-for-kids', band: 'Grades 4 to 7', note: 'Games with levels, scores and characters, an early start on the kind of project a Game Development course expects.' },
      { course: 'html-css-course-for-beginners-build-real-websites', band: 'Grades 7 to 10', note: 'Real websites built from HTML and CSS, the foundation that a Web Development 1 class assumes.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science Principles, the Create performance task and exam practice, alongside a school course.' }
    ]
  },

  sections: [
    {
      id: 'standards', tint: '', eyebrow: 'The state standards',
      h2: 'Utah&rsquo;s two sets of computer science standards, both from 2019',
      intro: 'The Utah State Board of Education (USBE) publishes separate K-5 and 6-12 computer science standards. Both documents open with the same history, quoted here as written.',
      body: [
        { kind: 'table', caption: 'Utah computer science standards at a glance, from the USBE documents', head: ['Item', 'K-5 standards', '6-12 standards'], rows: [
          ['Date on the document', '2019, developed with educators in March 2019', 'November 8, 2019'],
          ['Organized by', 'Strands, each containing standards', 'Strands, each containing standards'],
          ['Example standard', '2.DA.1: demonstrate how to store, copy, search, retrieve, modify and delete information using a computing device', '6.NI.1: explain potential security threats and practice practical measures to reduce them'],
          ['Stated aim', 'Start early by engaging students at the elementary level', 'Each student in secondary public schools will have access to robust and varied computer science courses by 2022']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The core concepts', p: 'The K-5 document lists Computing Systems, Networks and the Internet, Data and Analysis, Algorithms and Processing, Impacts of Computing, and Computational Thinking. A standard code such as 2.DA.1 names the grade and the strand.' },
          { h3: 'Elementary groundwork', p: 'The 6-12 standards say secondary readiness begins in elementary school with keyboarding, appropriate and responsible use of technology, and basic coding principles. That is a useful checklist for parents of younger children.' },
          { h3: 'Thirty-plus courses', p: 'Both documents note more than thirty computer science and IT courses offered in Utah, naming Computer Programming 1, Computer Science Principles, Exploring Computer Science, Web Development 1 and Game Development as popular.' }
        ] },
        { kind: 'p', text: 'The standards trace back to a USBE Computer Science Taskforce, whose strategic priorities were presented to and accepted by the Board in June 2018. One of those priorities was to ensure students can access a majority of the state&rsquo;s computer science and IT courses regardless of location, which is the same problem online classes solve from the family side.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'The 2022 goal and the diploma',
      h2: 'A master plan for access, and a diploma built on 24 credits',
      intro: 'Utah&rsquo;s Computer Science Education Master Plan summary, dated July 2019, and the USBE graduation requirements page, read on 18 October 2026.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The goal', p: 'The master plan is subtitled To give every student access to robust computer science education by 2022, and records a goal set by the governor at the time of computer science taught in every school by 2022.' },
          { h3: 'Where Utah started', p: 'Writing in 2019, the plan stated that only 16 percent of Utah&rsquo;s high schools offered intermediate and advanced computer science. That figure is the plan&rsquo;s own, dated 2019, and measured something narrower than the access figures below.' },
          { h3: 'Funding for teachers', p: 'The plan names HB227, the Utah Computer Science Grant Act, as the route for grants to districts, including professional development and more teacher endorsements in computer science.' }
        ] },
        { kind: 'table', mt: true, caption: 'Utah graduation credit rules, as the USBE graduation requirements page states them', head: ['Rule', 'What USBE says'], rows: [
          ['Minimum credit', 'A student in grades 9 to 12 must earn a minimum of 24 units of credit to graduate'],
          ['Two routes', 'Credit through course completion or through competency assessment consistent with R277-705'],
          ['Earlier credit', 'An LEA shall recognize high school credits earned before grade 9'],
          ['Local additions', 'Districts may add additional credit requirements'],
          ['Detail', 'High school requirements are set out in R277-700-6']
        ] },
        { kind: 'p', text: 'The graduation page itself does not list a separate computer science credit, and we have not read R277-700-6 in full, so we make no claim about whether or how a computer science course counts toward a specific Utah credit area. A school counselor can answer that for a particular course.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'Signature project',
      h2: 'Which Utah trailheads fall inside a box? Mapping with code',
      intro: 'The Utah Geospatial Resource Center (UGRC) publishes a statewide trailhead layer under a Creative Commons Attribution 4.0 licence. Students download every point with its latitude and longitude, then filter by drawing boxes.',
      body: [
        { kind: 'table', caption: 'Bounding-box counts on the UGRC Utah Trailheads layer (our boxes and counts, 18 October 2026)', head: ['Box, our choice', 'Trailheads inside'], rows: [
          ['Whole layer', '568'],
          ['Latitude 40.5 to 40.9, longitude -112.1 to -111.7, roughly the Salt Lake Valley', '50'],
          ['North of latitude 40.0', '317'],
          ['South of latitude 38.0', '136'],
          ['Outside a rough Utah box of latitude 37 to 42', '1']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Four comparisons', p: 'A point is inside a box when its latitude sits between the south and north edges and its longitude between the west and east edges. Students write that test once, as a function, and reuse it for every box.' },
          { h3: 'The edge case', p: 'One trailhead sits at latitude 36.99999, a hair south of 37, so a box that starts exactly at 37 misses it. Is that point really outside Utah, or is the box edge too tidy? Students decide and say why.' },
          { h3: 'Empty columns', p: 'The layer has fields for maintenance, seasonal restrictions and features, but all 568 records leave them empty, and 559 name OrbitalView as the data source. Checking for empty fields first saves an afternoon of puzzled charts.' }
        ] },
        { kind: 'p', text: 'In Python the core test is one line: <code>inside = [p for p in points if s &lt;= p["lat"] &lt;= n and w &lt;= p["lon"] &lt;= e]</code>. Students then change the inequality from &lt;= to &lt; and watch the count change for points that lie exactly on an edge. UGRC&rsquo;s own description says the layer features many of Utah&rsquo;s trailheads but is not yet complete, so a count from it is a count of this layer, never of every trailhead in the state.' },
        { kind: 'callout', h3: 'Our boxes, our counts', p: 'The boxes were chosen by us for teaching and the counts are ours, from one download. UGRC provides the data as is, with no guarantees of completeness or accuracy, under CC BY 4.0, so these numbers credit UGRC and describe the layer, not Utah&rsquo;s official trail network.' }
      ]
    },
    {
      id: 'numbers', tint: 'deep', eyebrow: 'The published figures',
      h2: 'Eight in ten Utah high schools offer computer science',
      intro: 'Two Utah series from Code.org, one counting high schools and one counting students, then the AP school totals that the College Board reports for 2023 and 2024.',
      body: [
        { kind: 'table', caption: 'Utah access and enrollment, seven school years (from the Code.org 2025 sheet)', head: ['School year', 'Utah schools with CS', 'Utah students in CS'], rows: [
          ['2018 to 2019', '66%', 'Column starts later'],
          ['2019 to 2020', '70%', 'Column starts later'],
          ['2020 to 2021', '74%', '12.9%'],
          ['2021 to 2022', '73%', '14.1%'],
          ['2022 to 2023', '77%', '12.5%'],
          ['2023 to 2024', '80.5%', '12.64%'],
          ['2024 to 2025', '82.2%, or 175 of 213', '11.38%, or 24,445 of 214,800']
        ] },
        { kind: 'table', mt: true, caption: 'Utah against the national 2024 to 2025 row, and AP school counts', head: ['Measure', 'Utah', 'Comparison or split'], rows: [
          ['High schools offering CS, 2024 to 2025', '82.2%', '60% nationally'],
          ['Students enrolled in CS, 2024 to 2025', '11.38%', '6.1% nationally'],
          ['Schools with AP exams, 2023', '196', '164 public, 32 non-public'],
          ['Schools with AP exams, 2024', '203', '181 public, 22 non-public']
        ] },
        { kind: 'p', text: 'Both Utah series sit well above the national line: about four in five high schools offering computer science and close to twice the national enrolled share. Access has risen in almost every year shown, while enrollment peaked at 14.1% in 2021 to 2022. The student total in the enrollment calculation is the NCES count for fall 2022, and the sheet does not explain either trend, so neither do we.' },
        { kind: 'p', text: 'Citation for these values: Code.org (2025). 2025 State of AI + CS Education. Only Utah&rsquo;s cells are quoted here.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Utah keeps Mountain Time, and so do our Utah timetables',
      intro: 'In the IANA time zone database, Utah is in the US Mountain list, served by the America/Denver zone, described as Mountain for most areas.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'An afternoon class', p: 'A 4:00 p.m. class in Salt Lake City starts at 3:30 a.m. the next morning in India under daylight saving time, and at 4:30 a.m. once Mountain Standard Time returns.' },
          { h3: 'The gap in hours', p: 'India is UTC plus 5:30 all year. Utah is UTC minus 6 in summer and minus 7 in winter, so India runs 11 hours 30 minutes or 12 hours 30 minutes ahead.' },
          { h3: 'Changeover Sundays', p: 'The US rule moves Utah&rsquo;s clocks back on November 1, 2026 and forward on March 14, 2027. We send every family the class time in Mountain Time before each change.' }
        ] },
        { kind: 'spec', title: 'A boundary problem in time, too', p: 'Like the trailhead at latitude 36.99999, a class at 2:30 a.m. on March 14, 2027 does not exist on a Utah clock, because the hour is skipped. Students who test their scheduler on that date with the America/Denver zone meet the same kind of edge case in time.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From block coding to AP Computer Science Principles',
    intro: 'Typical starting points. A free lesson decides each student&rsquo;s actual rung.',
    cols: [
      { band: 'Grades K to 3', h3: 'First algorithms', p: 'Block programs and puzzles that build sequencing, loops and the habit of testing.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 7', h3: 'Games and Python', p: 'Game projects with real rules, then first typed Python with small AI experiments.', courses: ['game-development-masterclass-for-kids', 'python-ai-kids-masterclass'] },
      { band: 'Grades 7 to 10', h3: 'Web and data', p: 'Websites from scratch and Python with real data, including maps and filters.', courses: ['html-css-course-for-beginners-build-real-websites', 'python-complete-masterclass-teens'] },
      { band: 'Grades 10 to 12', h3: 'AP and AI', p: 'AP Computer Science Principles, or machine learning built and tested on data.', courses: ['ap-computer-science-principles-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write the box filter. Can it choose the box?',
    intro: 'The code takes a minute. The decisions around it are the real work.',
    p1: 'Ask an AI assistant for code that counts trailheads in the Salt Lake Valley and it will produce a neat filter in seconds. It will also quietly choose the edges of the valley, decide whether points on the line count, and ignore the trailhead at 36.99999. None of those choices will be mentioned unless the student asks.',
    p2: 'Students who have written the filter themselves know which questions to put to the assistant and to their own code. That is the Impacts of Computing and Data and Analysis thinking Utah&rsquo;s standards describe, practised on a real map, with AI as a fast helper rather than the decision maker.',
    closer: 'Utah set out to give every student access to computer science; the habit of questioning a tidy answer is what turns access into skill.',
    blogAnchor: 'whether coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Logan to St. George, one live classroom',
    intro: 'Utah is big and its towns are far apart. Online classes put every student in the same room.',
    cells: [
      { h3: 'From home', p: 'Students in Salt Lake City, Provo, Ogden, St. George, Moab or a rural county join from their own computer.' },
      { h3: 'US grades and calendar', p: 'Teachers work in American grade levels and around the Utah school year. School coursework and assessments stay the student&rsquo;s own.' },
      { h3: 'First lesson free', p: 'A real coding task in the first lesson shows the right level. It is free, and no payment details are asked for.' },
      { h3: 'Batches by level', p: 'Fifteen to twenty students at about the same stage, from Utah and other states.' },
      { h3: 'Personal tuition', p: 'One teacher and one student, for AP preparation, a faster pace or a specific project.' },
      { h3: 'Timing', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'No local branch', p: 'Lessons are live online from India. Modern Age Coders has no Utah premises and claims none. A computer, sound and a reliable connection are the only requirements.' }
  },

  fees: {
    h2: 'Fees for Utah families',
    intro: 'Three amounts, in US dollars, the same statewide.',
    first: 'A full first lesson at no cost, ending with a suggested course, level and class time.',
    group: 'A month of live classes in a level-matched batch of fifteen to twenty students.',
    private: 'A month of live classes with one teacher and one student.',
    closer: 'Utah families pay one US dollar rate, in the Wasatch Front or the most remote town. Charges start only after the free lesson and an agreed plan, and the pricing page covers holidays and missed sessions.'
  },

  reviewsH2: 'Families and students on Google',

  book: {
    h2: 'Request a free first lesson for a Utah student',
    intro: 'Tell us the grade and what the student likes. A first grader starts with blocks, a sixth grader with a game, and a high schooler with the trailhead map filter.',
    success: 'Thank you. We will contact you soon to arrange a lesson in Mountain Time.'
  },

  faq: {
    h2: 'Utah coding and AI questions',
    intro: 'Answers drawn from USBE documents, the published data and how our classes run.',
    items: [
      { q: 'Does Utah have computer science standards?', a: 'Yes. The Utah State Board of Education publishes K-5 Computer Science Standards from 2019 and 6-12 Computer Science Standards dated November 8, 2019.' },
      { q: 'What do the Utah K-5 standards cover?', a: 'Core concepts listed in the K-5 document are Computing Systems, Networks and the Internet, Data and Analysis, Algorithms and Processing, Impacts of Computing, and Computational Thinking.' },
      { q: 'What was Utah\'s 2022 computer science goal?', a: 'The 2019 master plan aimed to give every student access to robust computer science education by 2022, and the 6-12 standards say every secondary student will have access to computer science courses by 2022.' },
      { q: 'How many credits does a Utah diploma need?', a: 'USBE says a student in grades 9 to 12 must earn a minimum of 24 units of credit, through course completion or competency assessment, and districts may add requirements.' },
      { q: 'How many Utah high schools offer computer science?', a: 'Code.org (2025) reports 175 of 213 Utah high schools, or 82.2%, offering computer science in 2024 to 2025, against 60% nationally.' },
      { q: 'How many Utah students take computer science?', a: 'The same data reports 24,445 of 214,800 high school students, or 11.38%, enrolled in 2024 to 2025.' },
      { q: 'Do your classes earn Utah credit?', a: 'We make no such claim. Credit, including competency assessment, is decided by schools and districts under USBE rules.' },
      { q: 'What does the trailhead project teach?', a: 'Bounding-box filtering. Students count which of 568 UGRC trailheads fall inside boxes they define, and handle the point that sits just south of latitude 37.' },
      { q: 'What time zone are Utah classes in?', a: 'Mountain Time, the America/Denver zone. Times are restated before November 1, 2026 and March 14, 2027.' },
      { q: 'When can my student join?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.', boiler: true },
      { q: 'Is there a Utah center?', a: 'No. All classes are live online from India, and no Utah center exists or is claimed.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Next reads for Utah students',
    html: 'Game makers can start with <a class="cg-inline-link" href="/game-design-summer-camp-for-teens">the game design summer camp for teens</a> or <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a>. Older students can compare <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>, and families planning ahead can use <a class="cg-inline-link" href="/coding-classes-for-middle-school-students">coding classes for middle school students</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Utah and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/game-design-summer-camp-for-teens', label: 'Game design camp' },
    { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-aiu .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-aiu .cg-hero h1 { font-weight: 780; letter-spacing: -0.024em; line-height: 1.03; }
.cg-root.cg-aiu .cg-capsule { border-left: 4px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 0 0 0.8rem 1rem; }
.cg-root.cg-aiu .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-aiu .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.012em; }
.cg-root.cg-aiu .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-aiu .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aiu .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-aiu .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Utah, read raw on 18 October 2026: USBE K-5 CS Standards (2019; March 2019 development; core concepts; 2.DA.1; 30+ courses incl. Game Development, Web Development 1, CS Principles; Taskforce priorities accepted June 2018); USBE 6-12 CS Standards (November 8, 2019; access by 2022 vision; keyboarding and basic coding in elementary; 6.NI.1); CS Master Plan summary (July 2019; access by 2022; 16 percent of high schools offering intermediate and advanced CS, 2019; HB227); USBE graduation page (24 units; R277-705 competency; credits before grade 9; districts may add; R277-700-6); Code.org (2025) (access 66% to 82.2%, 175 of 213; participation 12.9% to 11.38%, 24,445 of 214,800; national 60% and 6.1%); College Board AP 196/203, public 164/181, non-public 32/22; IANA Mountain list, America/Denver.',
    localProject: 'UGRC Utah Trailheads (CC BY 4.0; "not yet complete"), fetched 18 October 2026: 568 points, all with geometry; DataSource OrbitalView 559, blank 9; maintenance, seasonal and features fields empty in all 568; our boxes: 50 in lat 40.5 to 40.9 by lon -112.1 to -111.7, 317 north of 40.0, 136 south of 38.0, 1 outside lat 37 to 42 (latitude 36.99999). All ours. Lesson family: bounding-box filtering and boundary conditions.',
    requiredMentions: [
      'November 8, 2019',
      '2.DA.1',
      '6.NI.1',
      'HB227',
      '16 percent',
      '24 units of credit',
      '175 of 213',
      '24,445 of 214,800',
      '568',
      '36.99999'
    ],
    sources: [
      { claim: 'USBE: Utah K-5 Computer Science Standards (2019).', url: 'https://schools.utah.gov/cte/_cte/computer/K5ComputerScienceStandards.pdf' },
      { claim: 'USBE: Utah 6-12 Computer Science Standards (November 8, 2019).', url: 'https://schools.utah.gov/cte/_cte/computer/612ComputerScienceStandards.pdf' },
      { claim: 'USBE: Utah Computer Science Education Master Plan summary (2019).', url: 'https://schools.utah.gov/cte/_cte/computer/ComputerScienceMasterPlanSummary.pdf' },
      { claim: 'USBE: Graduation Requirements.', url: 'https://schools.utah.gov/curr/graduationrequirements.php' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Utah and national access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'UGRC: Utah Trailheads, CC BY 4.0.', url: 'https://services1.arcgis.com/99lidPhWCzftIe9K/arcgis/rest/services/UtahTrailheads/FeatureServer/0' },
      { claim: 'IANA tzdb northamerica: Utah in the Mountain list.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Whether a computer science course counts toward a specific Utah credit area: R277-700-6 was not read in full, so no claim is made.',
      'Master plan salary and job-count statements and its demographic sentences: not used (no money or identity content).',
      'That the 2022 goal was met: no USBE source read says so; the Code.org figures are printed as published.',
      'Any cause for the access or participation trends: not stated by the sources.',
      'Trailhead names and an official count of Utah trailheads: the layer is incomplete by UGRC\'s own description; counts only.',
      'That our classes earn Utah credit, and any affiliation with USBE, UGRC, Code.org or the College Board.'
    ]
  }
};
