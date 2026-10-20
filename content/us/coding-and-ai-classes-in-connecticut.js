'use strict';
// Connecticut (cg- state page, US cluster Phase 4, row 68). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Connecticut adopted the national CSTA K-12 standards in 2018 and lets computer science count inside the
// nine-credit STEM part of its graduation rule, but leaves the design of a program to each district. What do the
// standards levels mean for a family, what do the numbers show, and how does a student join two state tables?
// Sources read raw on 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-connecticut/):
//  - CSDE, Computer Science page (portal.ct.gov/SDE/Computer-Science/Computer-Science): CS "eligible as part of the STEM
//    credit pathway (9 credit minimum) required for graduation ( Sec 10-221a )"; "Connecticut Computer Science State Plan
//    (October 2020)"; "Adoption of Computer Science Standards (June 6, 2018)"; STEM position statement "Adopted by the State
//    Board of Education on October 3, 2018".
//  - State Board of Education, June 6, 2018 resolution: adopts "the Computer Science Teacher Association (CSTA) K-12
//    Standards and the International Society for Technology Education (ISTE) Standards for Students"; history: 2016
//    "Position Statement on Computer Science Education for All Students K-12"; "Public Act No. 17-67" (July 2017).
//  - CSDE, Computer Science Implementation Guidelines (2018): Level 1A end of grade 2 (ages 5-7), 1B end of grade 5
//    (ages 8-11), Level 2 end of grade 8 (ages 11-14), 3A end of grade 10 (ages 14-16), 3B beyond; "five Concepts" and
//    "sixteen Subconcepts"; sample pathways "Broad and Deep Exposure", "Moderate Exposure", "Basic Exposure"; "All high
//    schools should offer at least one rigorous computer science cours[e]".
//  - Connecticut Computer Science Plan (October 2020): advisory group formed "in 2014"; vision "By 2024, all K-12 schools
//    in Connecticut will offer computer science instruction aligned to the state approved standards and have a qualified
//    computer science teacher"; goal "By 2025, increase by 20% the number of students enrolled in AP level computer
//    science courses"; graduation goal "Allow Computer Science credits to count as part of the STEM requirement".
//  - cga.ct.gov (General Statutes chapter 170): connection failure twice; Sec 10-221a is cited only as CSDE quotes it.
//  - Code.org (2025), raw sheet (Access and Participation tabs only): CT access 67% (2018-19), 82%, 77%, 84%, 84.0%,
//    83.6% (2023-24), 2024-25 blank; Most Recent 173 of 207, 2023-2024, "State Education Agency"; participation 8.0%
//    (2021-22), 8.53%, 7.53% (2023-24); 12,411 of 164,921 (NCES Fall 2022 total).
//  - College Board, School Report of AP Exams by State 2023-24: Connecticut 279 (2023), 280 (2024); public 207, 207.
//  - IANA tzdb: Connecticut listed under US eastern time; zone1970.tab America/New_York "Eastern (most areas)".
//  - data.ct.gov (Socrata), "Public Libraries" (kf75-36tt, CT State Library, licence Public Domain), 5,278 rows,
//    fiscal years 1996 to 2024 (173 rows for 2024, 183 for 2023); "Connecticut Towns - Crosswalk with Tax Codes and FIPS
//    Codes" (5hqs-h5c3, Office of Policy and Management, Public Domain), 169 towns. Our join for fiscal 2024: 102 of 173
//    library keys match a town name exactly; 71 use a "Town - Library" form; after splitting on " - ", 173 of 173 match;
//    162 towns have at least one row, 7 towns have none, 8 towns have more than one (Groton, Windham, Woodstock 3 each);
//    one row keyed to Windham carries county Litchfield while the other Windham rows say Windham. Library names that
//    contain personal names and all money columns are not printed.
// Lesson family: joining two tables on a shared key, and repairing keys that do not match.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'CONNECTICUT', label: 'Connecticut', blurb: 'Coding and AI for Connecticut students on the CSTA-based standards, with a project joining state library and town tables.' },
  market: US,
  slug: 'coding-and-ai-classes-in-connecticut',
  code: 'aico',
  accent: '#124C1E',
  accentRationale: 'Connecticut: #124C1E, a deep muted charter-oak green, allocated in alloc.tsv row 68 and distinct from the other US accents; well above 4.5:1 on every paper in the accent gate',
  pageType: 'city',
  place: {
    name: 'Connecticut',
    eyebrow: 'Connecticut, United States',
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
  routeLabel: 'Connecticut',
  title: 'Coding and AI Classes in Connecticut | Live Online',
  description: 'Online coding and AI classes for Connecticut students: the 2018 CSTA standards levels, CS inside the STEM graduation credits, and a project joining state data.',
  ogDescription: 'Connecticut counts computer science inside its nine STEM graduation credits and teaches to the CSTA standards. Levels, numbers, a data project, and live online classes.',
  twitterDescription: 'Connecticut coding and AI classes, live online, mapped to the CSTA standards levels.',
  ogImageCourse: 'ap-computer-science-a-java-exam-prep-course',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Connecticut Students',
    description: 'Level-matched online Scratch, Python, data projects and AP Computer Science Principles and A for Connecticut students in grades K to 12, taught live in English.'
  },

  h1: 'Coding and AI classes in Connecticut',
  capsuleQ: 'Does computer science count toward graduation in Connecticut?',
  capsule: 'It can. The Connecticut State Department of Education says computer science aligned to the state standards is eligible as part of the STEM credit pathway, a 9 credit minimum required for graduation under Sec 10-221a. Modern Age Coders teaches coding, data and AP Computer Science live online for Connecticut students from kindergarten to twelfth grade, in level-matched batches or 1-on-1.',
  lead: 'Connecticut took the national route to computer science: in June 2018 its State Board adopted the Computer Science Teachers Association K-12 standards outright, alongside the ISTE Standards for Students. It then made room for the subject inside an existing rule rather than adding a new one, by letting aligned courses count toward the nine STEM credits every diploma needs. This page explains the standards levels in plain terms, quotes the state\'s 2020 plan and what it aimed for by 2024 and 2025, sets out the published access and enrollment counts, and walks through a data project that joins two of the state\'s own open tables.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Connecticut.',

  picks: {
    eyebrow: 'Course picks for Connecticut',
    h2: 'Four courses, one for each part of the CSTA ladder',
    intro: 'Arranged from Level 1A upward. The opening session with a teacher, which is free, decides which one fits.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades K to 5', note: 'Block programming for Levels 1A and 1B: sequences, loops, events and finished games.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 6 to 10', note: 'Python for Levels 2 and 3A, including the library and town join project on state data.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 9 to 12', note: 'AP CSP, the Create task and the exam, the course the state plan counts on growing.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Java and AP CS A for Level 3B students going beyond the core.' }
    ]
  },

  sections: [
    {
      id: 'levels', tint: '', eyebrow: 'The standards',
      h2: 'Connecticut\'s computer science levels, translated into grades',
      intro: 'Connecticut uses the CSTA K-12 standards, adopted by the State Board of Education on June 6, 2018. The CSDE implementation guidelines explain how the levels line up with grades.',
      body: [
        { kind: 'table', caption: 'CSTA levels as the 2018 Connecticut Computer Science Implementation Guidelines describe them', head: ['Level', 'Expected by', 'Ages given'], rows: [
          ['1A', 'The end of grade 2', '5 to 7'],
          ['1B', 'The end of grade 5', '8 to 11'],
          ['2', 'The end of grade 8', '11 to 14'],
          ['3A', 'The end of grade 10', '14 to 16'],
          ['3B', 'Beyond the level required for all students, for those who choose more computer science in high school', 'High school']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Five concepts', p: 'The guidelines organize the standards into five Concepts, Algorithms and Programming, Computing Systems, Data and Analysis, Impacts of Computing, and Networks and the Internet, broken into sixteen Subconcepts.' },
          { h3: 'Three ways to deliver', p: 'Districts choose a sample pathway: Broad and Deep Exposure, Moderate Exposure or Basic Exposure, from a weekly elementary special to computer science woven into math and science.' },
          { h3: 'High school expectation', p: 'For high schools the guidelines say all should offer at least one rigorous computer science course, with introductory courses leading on to AP and specialized classes.' }
        ] },
        { kind: 'p', text: 'Level 3A is the important one for families to notice. It is the level the standards expect of every student by the end of tenth grade, so a ninth or tenth grader who has had little computer science at school still has a defined target. Level 3B is optional depth, which is where AP Computer Science A and most competitive programming sit.' }
      ]
    },
    {
      id: 'policy', tint: 'tint', eyebrow: 'Graduation and the state plan',
      h2: 'Inside the STEM credits, not a separate requirement',
      intro: 'From the CSDE Computer Science page and the Connecticut Computer Science Plan of October 2020, read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'Connecticut computer science policy milestones, as CSDE publishes them', head: ['When', 'What happened'], rows: [
          ['2014', 'The State Board approved a CSDE Computer Science Advisory Group'],
          ['2016', 'The Board adopted its Position Statement on Computer Science Education for All Students K-12'],
          ['July 2017', 'Public Act No. 17-67 created a digital citizenship, internet safety and media literacy advisory council'],
          ['June 6, 2018', 'The Board adopted the CSTA K-12 Standards and the ISTE Standards for Students'],
          ['October 3, 2018', 'The Board adopted a Position Statement on Comprehensive STEM Education'],
          ['October 2020', 'The Connecticut Computer Science State Plan was published']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'How it counts', p: 'CSDE expects districts to align computer science courses to the state standards so that they are eligible within the STEM credit pathway, a minimum of 9 credits required for graduation.' },
          { h3: 'The 2024 vision', p: 'The plan\'s vision was that by 2024 every K-12 school would offer standards-aligned computer science and have a qualified computer science teacher to deliver it.' },
          { h3: 'An AP target', p: 'Among its goals, the plan aimed by 2025 to increase by 20% the number of students enrolled in AP level computer science courses.' }
        ] },
        { kind: 'p', text: 'Whether the 2024 vision was reached is not something the plan can tell us, and we have not seen a CSDE report that measures it. The access figures below are the closest public evidence: they show most, but not all, Connecticut high schools offering a course. We tried to read Sec 10-221a itself on the General Assembly site, but the connection failed, so the statute is quoted here only as CSDE describes it.' }
      ]
    },
    {
      id: 'counts', tint: '', eyebrow: 'The numbers',
      h2: 'Five in six Connecticut high schools offer computer science',
      intro: 'Code.org (2025) access and participation values for Connecticut and the College Board AP school count, as published.',
      body: [
        { kind: 'table', caption: 'Connecticut by school year, from the trend tabs of the Code.org (2025) sheet; enrollment is the share of high school students in a CS course', head: ['School year', 'High schools offering CS', 'Students enrolled'], rows: [
          ['2018 to 2019', '67%', 'No value'],
          ['2019 to 2020', '82%', 'No value'],
          ['2020 to 2021', '77%', 'No value'],
          ['2021 to 2022', '84%', '8.0%'],
          ['2022 to 2023', '84.0%', '8.53%'],
          ['2023 to 2024', '83.6%, or 173 of 207', '7.53%, or 12,411 of 164,921']
        ] },
        { kind: 'p', text: 'Access has hovered near 84% for three years, and enrollment slipped from 8.53% to 7.53% between the last two years with data. The student total behind the enrollment share is the NCES count for fall 2022, as Code.org notes. The College Board counts 279 Connecticut schools giving AP exams in 2023 and 280 in 2024, with 207 public schools in both years, so AP access was flat as well. Please cite these as Code.org (2025). 2025 State of AI + CS Education. This page lifts individual Connecticut cells, not the sheet.' }
      ]
    },
    {
      id: 'join', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Joining Connecticut\'s library data to its list of towns',
      intro: 'The state publishes two public-domain tables on data.ct.gov: the State Library\'s Public Libraries statistics and the Office of Policy and Management\'s list of 169 towns. Joining them looks trivial. It is not.',
      body: [
        { kind: 'table', caption: 'Our join of the fiscal 2024 Public Libraries rows to the 169-town crosswalk (data.ct.gov, downloaded 18 October 2026)', head: ['Step', 'Our result'], rows: [
          ['Fiscal 2024 rows in the library table', '173 (the table holds 5,278 rows from 1996 to 2024)'],
          ['Rows whose key matches a town name exactly', '102'],
          ['Rows keyed "Town - Library" instead', '71'],
          ['Matches after splitting the key on " - "', '173 of 173'],
          ['Towns with at least one 2024 row', '162'],
          ['Towns with no 2024 row', '7'],
          ['Towns with more than one row', '8, led by Groton, Windham and Woodstock with 3 each']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Pick the key', p: 'Both tables name towns, so the town name is the obvious join key. A first inner join keeps only 102 of 173 library rows, and a careless student reports that 71 libraries do not exist.' },
          { h3: '2. Fix the key', p: 'Looking at the unmatched rows shows the pattern: towns with more than one library are keyed as the town, a spaced dash, then the library. Splitting on " - " and keeping the first part brings every row home.' },
          { h3: '3. Check both directions', p: 'An outer join then shows the other side: 7 of the 169 towns have no 2024 row at all. That says nothing about whether those towns have library service; it only says this table has no row for them.' }
        ] },
        { kind: 'callout', h3: 'A disagreement the join exposes', p: 'Of the three 2024 rows keyed to Windham, two carry the county Windham and one carries Litchfield. A join on town would assign all three to one county. We do not know which value is right, and the honest output records the conflict rather than silently choosing. All figures here are ours, from one download of public-domain data.' },
        { kind: 'p', text: 'The table also carries finance columns, which we leave out, and library names, which sometimes honor people and which we do not print. A good extension uses the fiscal year column instead: 183 rows in 2023 against 173 in 2024 is a ten-row drop that a student should explain before comparing any total across the two years.' }
      ]
    },
    {
      id: 'eastern', tint: 'tint', eyebrow: 'Class times',
      h2: 'Eastern Time from Greenwich to Putnam',
      intro: 'All of Connecticut is on US Eastern time, America/New_York in the IANA database.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One zone', p: 'The IANA database lists Connecticut under US eastern time. Every class time we confirm for a Connecticut family is in Eastern Time.' },
          { h3: 'The India gap, our arithmetic', p: 'Our own subtraction: from spring to fall the teacher\'s clock in India reads nine and a half hours later than a Connecticut clock, and ten and a half hours later through the winter months.' },
          { h3: 'The next changes', p: 'Connecticut falls back on the first Sunday of November 2026 and springs forward on the second Sunday of March 2027. A reminder goes out to families the week before each switch.' }
        ] },
        { kind: 'spec', title: 'Joins and time zones meet', p: 'Library visit logs from two systems, one storing local time and one storing UTC, will not join on time stamps until both are converted to the same zone. Students who line them up in America/New_York learn that a join key must mean the same thing in both tables, which is the whole lesson of the library project.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Level 1A to Level 3B, at a pace that fits school',
    intro: 'Read the bands as approximate; a teacher places each student in the free first lesson.',
    cols: [
      { band: 'Grades K to 2', h3: 'Level 1A ideas', p: 'Following and writing step-by-step instructions, patterns and simple block programs.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 3 to 5', h3: 'Level 1B projects', p: 'Games and stories in blocks, then a first look at Python and how data is stored.', courses: ['python-ai-kids-masterclass', 'game-development-masterclass-for-kids'] },
      { band: 'Grades 6 to 10', h3: 'Levels 2 and 3A', p: 'Typed Python, web pages and data projects that reach the level every student should have by tenth grade.', courses: ['python-complete-masterclass-teens', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 10 to 12', h3: 'Level 3B and AP', p: 'AP Computer Science A in Java, or machine learning for students going past the core.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI assistant will happily join the wrong columns',
    intro: 'The library project shows exactly where automated answers go wrong, and why students need to understand the data first.',
    p1: 'Ask a chatbot to join the libraries table to the towns table and it will write a neat merge on the town name. Run it and you lose 71 rows without any error message. The code is correct; the assumption behind it is not.',
    p2: 'Students who have repaired the key themselves know to count rows before and after every join, to look at the rows that fall out, and to check whether one side holds duplicates. Those three checks turn an AI tool from a source of quiet mistakes into a fast assistant.',
    closer: 'Connecticut lets computer science sit among the STEM credits for good reason: it trains the habit of checking an answer against the data.',
    blogAnchor: 'why coding skills still matter next to AI'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Fairfield County or the Quiet Corner, the same classroom',
    intro: 'A live online class takes no driving and fits around school, sports and music.',
    cells: [
      { h3: 'Pick a rhythm', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group classes', p: 'Each batch seats between fifteen and twenty learners whose skills are close, drawn from Connecticut and the wider US, with one live teacher.' },
      { h3: 'Private teaching', p: 'A 1-on-1 plan for AP preparation, Level 3B depth or a student who wants to move faster than any group.' },
      { h3: 'Fits school courses', p: 'Teachers use US grades and can connect projects to a school course or the AP framework; graded school work stays the student\'s own.' },
      { h3: 'The first hour is on us', p: 'A complete trial session built around a real coding task, after which the teacher recommends a level and course. No payment card is needed.' },
      { h3: 'Equipment', p: 'A computer with a keyboard, sound and an internet connection that handles a video call.' }
    ],
    spec: { title: 'No Connecticut office', p: 'Teaching happens live online from India. Modern Age Coders has no Connecticut location, claims none, and is not connected with the Connecticut State Department of Education, the State Library or any district.' }
  },

  fees: {
    h2: 'Fees for Connecticut families',
    intro: 'The three numbers below are all there is, in US dollars.',
    first: 'An opening lesson free of charge, ending with our level and course advice.',
    group: 'A month of batch classes with fifteen to twenty students at the same level.',
    private: 'A month of 1-on-1 classes with a teacher to yourself.',
    closer: 'A family in Stamford pays the same as one in Norwich, one US rate in US dollars. Invoices begin after the trial session, when you have picked a course and a slot; school breaks and missed sessions are explained on our pricing page.'
  },

  reviewsH2: 'What families wrote on Google',

  book: {
    h2: 'Book a free lesson for a Connecticut student',
    intro: 'Share the grade and goal: a kindergartner\'s first block program, a seventh grader\'s first Python, or a junior working toward AP Computer Science A.',
    success: 'Thank you. We will be in touch soon about a class for your Connecticut student.'
  },

  faq: {
    h2: 'Connecticut questions, answered',
    intro: 'What Connecticut parents and students ask us first.',
    items: [
      { q: 'Which computer science standards does Connecticut use?', a: 'The CSTA K-12 Computer Science Standards, adopted by the State Board of Education on June 6, 2018, together with the ISTE Standards for Students.' },
      { q: 'Can computer science count toward a Connecticut diploma?', a: 'Yes. CSDE says courses aligned to the state standards are eligible within the STEM credit pathway, the 9 credit minimum required for graduation.' },
      { q: 'Is a computer science course required for every student?', a: 'Not as a separate requirement in what we read. It is one way to meet the STEM credits, and districts decide how to offer it.' },
      { q: 'What level should a tenth grader reach?', a: 'The guidelines expect Level 3A by the end of grade 10. Level 3B is extra depth for students who choose more computer science.' },
      { q: 'How many Connecticut high schools offer computer science?', a: 'For 2023 to 2024, the 2025 Code.org sheet reports 173 of 207, or 83.6%, using state education agency data.' },
      { q: 'What share of Connecticut students take computer science?', a: 'The same sheet reports 12,411 of 164,921 high school students, or 7.53%, for 2023 to 2024, against an NCES fall 2022 student total.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Eastern Time.' },
      { q: 'Will your classes give my child a STEM credit?', a: 'No. Credits come from district courses aligned to the state standards. Our classes add depth and AP preparation beside them.' },
      { q: 'Can we visit you in Hartford or New Haven?', a: 'There is nothing to visit: lessons run live over video with teachers based in India, and we have no Connecticut premises.' },
      { q: 'How do I find the prices?', a: 'In the fees section of this page: a free first lesson, then a monthly batch or 1-on-1 plan in US dollars, billed only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Connecticut students',
    html: 'Students planning for the AP exams will find detail in our pages on <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a> and <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>. Younger learners can start with <a class="cg-inline-link" href="/coding-classes-for-elementary-students">coding classes for elementary students</a>, and middle schoolers with <a class="cg-inline-link" href="/python-games-for-kids">Python games for kids</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Connecticut and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'Every US page' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/coding-classes-for-elementary-students', label: 'Elementary coding' },
    { href: '/python-games-for-kids', label: 'Python games for kids' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-aico .cg-hero-grid { align-items: stretch; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-aico .cg-hero h1 { font-weight: 700; letter-spacing: -0.014em; line-height: 1.09; }
.cg-root.cg-aico .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-aico .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-aico .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.009em; }
.cg-root.cg-aico .cg-grid-3 { gap: clamp(0.9rem, 2.3vw, 1.85rem); }
.cg-root.cg-aico .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-aico .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aico .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-aico .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Connecticut, read raw 18 October 2026. CSDE CS page (STEM credit pathway, 9 credit minimum, Sec 10-221a; plan October 2020; adoption June 6, 2018; STEM statement October 3, 2018). State Board resolution June 6, 2018 (CSTA K-12 and ISTE Standards for Students; 2016 position statement; Public Act No. 17-67). CSDE Implementation Guidelines 2018 (Levels 1A, 1B, 2, 3A, 3B with grades and ages; five Concepts, sixteen Subconcepts; three sample pathways; one rigorous HS course). CS Plan 2020 (2014 advisory group; 2024 vision; 20% AP goal by 2025). cga.ct.gov unreachable. Code.org (2025) access 67% to 83.6% (173 of 207); participation 8.0%, 8.53%, 7.53% (12,411 of 164,921). College Board 279, 280 (207 public). IANA America/New_York.',
    localProject: 'data.ct.gov Public Libraries (kf75-36tt, CT State Library, Public Domain; 5,278 rows, 1996 to 2024) joined to the Connecticut Towns crosswalk (5hqs-h5c3, OPM, Public Domain; 169 towns), downloaded 18 October 2026. Our fiscal 2024 join: 173 rows, 102 exact matches, 71 "Town - Library" keys, 173 of 173 after splitting, 162 towns with a row, 7 without, 8 with more than one; one Windham row in Litchfield County; 183 rows in 2023. Lesson family: table joins and key repair.',
    requiredMentions: [
      'STEM credit pathway',
      'June 6, 2018',
      'Public Act No. 17-67',
      'Broad and Deep Exposure',
      'sixteen Subconcepts',
      '173 of 207',
      '12,411 of 164,921',
      'increase by 20%',
      '102 of 173',
      '173 of 173',
      'Groton, Windham and Woodstock'
    ],
    sources: [
      { claim: 'CSDE: Computer Science page, STEM credit pathway and Sec 10-221a, standards adoption and plan links.', url: 'https://portal.ct.gov/SDE/Computer-Science/Computer-Science' },
      { claim: 'State Board of Education: adoption of the CSTA K-12 and ISTE Standards, June 6, 2018.', url: 'https://portal.ct.gov/-/media/sde/board/boardmaterials060618/adoption_of_the_computer_science_teacher_association_cstak12_standards.pdf' },
      { claim: 'CSDE: Connecticut Computer Science Implementation Guidelines (2018).', url: 'https://portal.ct.gov/-/media/sde/computer-science/connecticut_computer_science_implementation_guidelines.pdf' },
      { claim: 'CSDE: Connecticut Computer Science Plan (October 2020).', url: 'https://portal.ct.gov/-/media/sde/computer-science/connecticut_computer_science_state_plan_final.pdf' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Connecticut access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'data.ct.gov: Public Libraries (CT State Library).', url: 'https://data.ct.gov/d/kf75-36tt' },
      { claim: 'data.ct.gov: Connecticut Towns crosswalk (OPM).', url: 'https://data.ct.gov/d/5hqs-h5c3' },
      { claim: 'IANA tzdb: Connecticut on US eastern time, America/New_York.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'The text of Sec 10-221a and the total diploma credit count: cga.ct.gov did not connect on 18 October 2026, so only CSDE\'s description is printed.',
      'Whether the plan\'s 2024 vision was met: no CSDE report read; not claimed.',
      'The plan\'s gender, high-need and racial gap goals and the Code.org gender, race, geography and graduation figures: not used.',
      'Names of advisory group, workgroup and Board members: not printed.',
      'Library finance columns and library names that contain personal names: not printed; counts and town names only.',
      'Which county is correct for the Windham row: not decided; the conflict is reported.',
      'Any affiliation with CSDE, the State Library, OPM, Code.org or the College Board.'
    ]
  }
};
