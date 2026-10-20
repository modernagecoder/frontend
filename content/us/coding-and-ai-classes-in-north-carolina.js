'use strict';
// North Carolina (cg- state page, US cluster Phase 1 pilot, row 3). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: North Carolina made computer science a graduation requirement, so what does the law ask for, what do the
// state standards cover, and what do the published numbers say about access? Sources read raw on 17 October 2026
// (copies in keyword-research-2026-09/us/src-pilots/nc/):
//  - NC DPI, Computer Science Graduation Requirement: "G.S.115C-12(9d)" adopted "September 21, 2023" and "signed into
//    law on September 29, 2023"; every Public School Unit offers CS course(s) for the graduation requirement by the
//    2026 to 2027 school year (as early as 2024-25); a middle school introductory CS elective by 2025 to 2026; waivers
//    only for 2024-25 and 2025-26, none from 2026-27; exemptions for students entering public high school "after
//    completing the eleventh grade" and IEP students whose disability would prevent completion; "Courses were
//    considered aligned if at least 80% of their content focused on three or more of these core concepts."; the
//    2026-27 review broadened to the CSTA Computer Science Framework.
//  - NC DPI press release, 2 October 2023 (House Bill 8): "required for all students entering high school in the
//    2026-27 school year"; "North Carolina would be the eighth state to require a computer science course upon
//    graduation."; Deputy Superintendent Michael Maher: "We haven't added a content area to the graduation
//    requirements for North Carolina students in a century".
//  - NC DPI, NC Computer Science Standards: grade bands "K-2, 3-5, and 6-8", high school "Introduction to Computer
//    Science (ICS)"; five core concepts; "93% of parents in NC want schools to teach computer science".
//  - Code.org (2025), 2025 State of AI + CS Education, raw data sheet (cited, not republished): NC 2024-2025, 513 of
//    735 high schools offer CS (69.8%), source "State Education Agency"; access 51% (2019-20), 59%, 61%, 71%, 69%,
//    69.8% (2024-25); 27,384 of 481,741 high school students enrolled in CS (5.68%). Geography tab not used.
//  - College Board, School Report of AP Exams by State 2023-24: NC schools with AP exams 642 (2023), 639 (2024).
//  - IANA tzdb northamerica: US daylight saving from the second Sunday in March to the first Sunday in November
//    (Sun>=8 / Sun>=1), so 1 November 2026 and 14 March 2027.
//  - City of Raleigh open data, Greenway Trails feature service (Open Raleigh Data Policy), attributes downloaded
//    17 October 2026: 1,266 segments (TYPE: Trail 701, Structure 365, Crossing 114); MATERIAL: Asphalt 756, Wood
//    Decking 230, Concrete 142; 26 named trails; our sums of MAP_MILES by TRAIL_NAME: Neuse River Trail 33.61,
//    Walnut Creek Trail 20.27, Crabtree Creek Trail 18.63, Mine Creek Trail 6.54.
// Lesson family: group-by and aggregation on open data (and why segment sums are not official totals).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'NORTH CAROLINA', label: 'North Carolina', blurb: 'Coding and AI for North Carolina students now that computer science is a graduation requirement, with a Raleigh greenway data project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-north-carolina',
  code: 'ncar',
  accent: '#276910',
  accentRationale: 'North Carolina: a muted longleaf-pine green chosen with the accent picker (hue 104, s .85, v .41), 89+ RGB units from the other US accents and 9 from every other site colour, contrast 5.47 on the paper',
  pageType: 'city',
  place: {
    name: 'North Carolina',
    eyebrow: 'North Carolina, United States',
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
  routeLabel: 'North Carolina',
  title: 'Coding and AI Classes in North Carolina | Live Online',
  description: 'Coding and AI classes for North Carolina students, live online: the new CS graduation requirement explained, the state standards, and Python projects on NC data.',
  ogDescription: 'North Carolina now requires computer science to graduate. The law, the five core concepts, the published access figures, and live online classes for NC students.',
  twitterDescription: 'North Carolina coding and AI classes, live online, built around the CS graduation rule.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '17 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for North Carolina Students',
    description: 'Level-matched online Python, AP Computer Science, AI and web development for North Carolina students from elementary to high school, taught live in English.'
  },

  h1: 'Coding and AI classes in North Carolina',
  capsuleQ: 'Do North Carolina students have to take computer science to graduate?',
  capsule: 'Yes. Under G.S. 115C-12(9d), signed into law on September 29, 2023, every North Carolina public school unit must offer computer science courses that meet a new high school graduation requirement, in full from the 2026 to 2027 school year, and an introductory middle school elective from 2025 to 2026. We teach the same five core concepts live online, from Scratch to AP Computer Science.',
  lead: 'North Carolina has done something it had not done in a hundred years: added a new content area to what every student needs to graduate. In the words of the state&rsquo;s own deputy superintendent in 2023, &ldquo;We haven&rsquo;t added a content area to the graduation requirements for North Carolina students in a century.&rdquo; This page explains the requirement as the Department of Public Instruction publishes it, the five core concepts the state standards are built on, what the published figures say about how many high schools offer computer science and how many students take it, and how our live online classes fit around school, from a first Scratch game in elementary school to AP Computer Science in eleventh grade.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in North Carolina.',

  picks: {
    eyebrow: 'Course picks for North Carolina',
    h2: 'Four ways into computer science for NC students',
    intro: 'Chosen by grade and goal, then pitched at the right level in the free lesson. Starting costs nothing and needs no card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Grades K to 5', note: 'Blocks to small games and apps: algorithms and programming at the K-2 and 3-5 bands, with real finished projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'The typed-code foundation for a middle school elective or a high school CS course, with data projects on NC open data.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science Principles, the Create performance task and the exam, alongside a school CS course.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 9 to 12', note: 'Python first, then machine learning models trained and tested on data the student can inspect and question.' }
    ]
  },

  sections: [
    {
      id: 'law', tint: '', eyebrow: 'The graduation requirement',
      h2: 'What North Carolina&rsquo;s computer science law requires',
      intro: 'The requirements as the North Carolina Department of Public Instruction (NC DPI) sets them out for G.S. 115C-12(9d), read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'G.S. 115C-12(9d), Computer Science, as summarized by NC DPI', head: ['Requirement', 'What NC DPI says'], rows: [
          ['When it became law', 'Adopted by the legislature on September 21, 2023 and signed into law on September 29, 2023'],
          ['High school', 'Every public school unit must offer computer science course(s) that fulfill the graduation requirement by the 2026 to 2027 school year, and as early as 2024 to 2025'],
          ['Middle school', 'Every public school unit must offer an elective introductory computer science course in middle school by the 2025 to 2026 school year'],
          ['Middle school credit', 'Courses that meet the graduation requirement may be offered to middle school students and would fulfill it'],
          ['Waivers', 'Local delay waivers were available only for 2024 to 2025 and 2025 to 2026; none are permitted for full implementation from 2026 to 2027'],
          ['Delivery', 'Courses in person when practicable, with remote enrollment options allowed under state law']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Who it applies to', p: 'NC DPI&rsquo;s 2023 announcement says the requirement applies to all students entering high school in the 2026 to 2027 school year, so the incoming ninth graders of fall 2026 are the first full class.' },
          { h3: 'Two exemptions', p: 'Students who enter a public high school after completing eleventh grade are exempt, and students on an IEP may be exempted if their disability would prevent them from completing the requirement.' },
          { h3: 'Which courses count', p: 'NC DPI reviewed courses against the state&rsquo;s core concepts: a course was aligned if at least 80% of its content focused on three or more of them. The 2026 to 2027 review was broadened to the CSTA framework.' }
        ] },
        { kind: 'p', text: 'At the time the bill passed, NC DPI wrote that North Carolina would be the eighth state to require a computer science course to graduate. That was the count in 2023; other states have changed their rules since, so the number is quoted here as the department stated it then, not as a current ranking.' }
      ]
    },
    {
      id: 'standards', tint: 'deep', eyebrow: 'The state standards',
      h2: 'The five core concepts North Carolina teaches, grade band by grade band',
      intro: 'NC DPI says the K-12 computer science standards were derived from the national CSTA standards and are organized by grade band in K-8 and by course in high school.',
      body: [
        { kind: 'table', caption: 'The five core concepts of the NC K-12 Computer Science Standards, and how our classes cover each (the right-hand column is ours)', head: ['Core concept', 'What it means in practice', 'Where it shows up in our classes'], rows: [
          ['Computing Systems', 'Devices, hardware and software, and how they work together', 'Kids classes start with how a computer runs a program; teens debug on real machines'],
          ['Networks and the Internet', 'How data moves between computers, and how it is kept safe', 'Web projects, APIs and the cybersecurity course'],
          ['Data and Analysis', 'Collecting, cleaning and drawing conclusions from data', 'The Raleigh greenway project below, then data science'],
          ['Algorithms and Programming', 'Writing and testing step-by-step solutions in code', 'Every course, from Scratch to AP Computer Science A'],
          ['Impacts of Computing', 'How computing affects people, society and careers', 'Discussed in every AI unit: who a model helps and who it misses']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'K-2 and 3-5', p: 'The standards group elementary grades into two bands. At this age the concepts are taught with blocks, unplugged puzzles and short programs a child can explain out loud.' },
          { h3: '6-8', p: 'The middle school band lines up with the new introductory elective. Students move from blocks to typed code and start working with real data.' },
          { h3: 'High school', p: 'High school standards are written by course, starting with Introduction to Computer Science (ICS) and continuing into discipline-specific courses.' }
        ] },
        { kind: 'callout', h3: 'What parents told the state', p: 'The standards page reports that 93% of parents in North Carolina want schools to teach computer science. The requirement turns that wish into a course every student takes; outside classes are for students who want more depth, more speed or more projects than one course can hold.' }
      ]
    },
    {
      id: 'numbers', tint: 'tint', eyebrow: 'The published numbers',
      h2: 'How many North Carolina high schools offer computer science',
      intro: 'Figures for North Carolina from the Code.org State of AI + CS Education data and the College Board, quoted as published.',
      body: [
        { kind: 'table', caption: 'North Carolina high schools offering computer science, by school year (Code.org, 2025, State of AI + CS Education)', head: ['School year', 'High schools offering CS'], rows: [
          ['2019 to 2020', '51%'],
          ['2020 to 2021', '59%'],
          ['2021 to 2022', '61%'],
          ['2022 to 2023', '71%'],
          ['2023 to 2024', '69%'],
          ['2024 to 2025', '69.8%, 513 of 735 high schools']
        ] },
        { kind: 'table', mt: true, caption: 'Participation and AP, as published', head: ['Measure', 'North Carolina', 'Source'], rows: [
          ['High school students enrolled in CS, 2024 to 2025', '27,384 of 481,741, or 5.68%', 'Code.org (2025), from the state education agency'],
          ['Schools with AP exams, 2023', '642', 'College Board, School Report of AP Exams by State'],
          ['Schools with AP exams, 2024', '639', 'College Board, School Report of AP Exams by State']
        ] },
        { kind: 'p', text: 'Two numbers tell different stories. By 2024 to 2025, about seven in ten North Carolina high schools offered computer science, but only 5.68% of high school students were enrolled in it that year. A course on the timetable is not the same as a student in the seat, which is exactly the gap the graduation requirement is meant to close. These are the latest figures we could read on 17 October 2026; they predate full implementation in 2026 to 2027.' },
        { kind: 'p', text: 'Suggested citation for the access and participation figures: Code.org (2025). 2025 State of AI + CS Education. We quote individual North Carolina values from its published data; we do not republish the dataset.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which Raleigh greenway trail is longest? A data project on city open data',
      intro: 'The City of Raleigh publishes its greenway trail inventory as open data. Students download it, group it and sum it in Python, then learn why their answer is not the official one.',
      body: [
        { kind: 'table', caption: 'Raleigh greenway trails by summed map miles (our calculation from the city&rsquo;s Greenway Trails data, downloaded 17 October 2026)', head: ['Trail name', 'Our sum of MAP_MILES'], rows: [
          ['Neuse River Trail', '33.61'],
          ['Walnut Creek Trail', '20.27'],
          ['Crabtree Creek Trail', '18.63'],
          ['Mine Creek Trail', '6.54']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Read the data', p: 'The city&rsquo;s feature service held 1,266 records on the day we downloaded it: 701 trail segments, 365 structures such as boardwalks and bridges, and 114 crossings, among other types.' },
          { h3: '2. Group and sum', p: 'Students group the records by TRAIL_NAME and add up MAP_MILES for each of the 26 named trails, the first real use of a dictionary or a pandas groupby.' },
          { h3: '3. Question the answer', p: 'Then the hard part: does a summed map length equal the trail&rsquo;s official length? Not necessarily. Segments can overlap, structures may carry their own mileage, and the city may measure differently.' }
        ] },
        { kind: 'callout', h3: 'Why our numbers are not official', p: 'The sums above are ours, from segment lengths in one download. They are a teaching result, not the City of Raleigh&rsquo;s published trail lengths, and the city says it makes no warranty about the data. Learning to say exactly what a number is, and what it is not, is the most valuable lesson in the project.' },
        { kind: 'p', text: 'The surface types make a second exercise: 756 records are asphalt, 230 wood decking and 142 concrete. A student who charts those counts, then asks which surfaces are structures rather than trail, has practised the Data and Analysis concept from the state standards on a dataset from their own state.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Classes on Eastern Time, at a time that suits your family',
      intro: 'North Carolina runs on Eastern Time, and our teachers are in India, so here is how the clocks line up.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Flexible batches', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'Eastern and India time', p: 'India is 9 hours 30 minutes ahead of Eastern Daylight Time and 10 hours 30 minutes ahead of Eastern Standard Time, because India does not change its clocks.' },
          { h3: 'The 2026 to 2027 switch', p: 'US clocks go back on November 1, 2026 and forward on March 14, 2027, the first Sunday in November and the second Sunday in March. Class times are always confirmed in Eastern Time.' }
        ] },
        { kind: 'spec', title: 'A programming lesson hiding in the calendar', p: 'Time zones are a classic source of bugs: code that stores a fixed offset breaks twice a year in North Carolina. Students who schedule their own reminders across the November 1, 2026 change learn to use the America/New_York zone from the IANA database instead of a hard-coded number.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first block program to AP Computer Science',
    intro: 'The grade ranges are guides only; the free lesson sets the actual level.',
    cols: [
      { band: 'Grades K to 5', h3: 'Blocks and logic', p: 'Sequences, loops and events in blocks, then small games: the K-2 and 3-5 bands of the state standards.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 6 to 8', h3: 'First typed code', p: 'Python or JavaScript alongside the middle school elective, with data and simple web projects.', courses: ['python-ai-kids-masterclass', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 9 to 10', h3: 'The required course and beyond', p: 'The core concepts in depth, larger projects and the habits that make a CS course easy rather than stressful.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Grades 11 to 12', h3: 'AP and real AI', p: 'AP Computer Science Principles or A, and machine learning built and tested from scratch.', courses: ['ap-computer-science-principles-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If AI can write code, why does North Carolina now require computer science?',
    intro: 'Because judging code, data and AI output is a skill, and it is learned by building.',
    p1: 'An AI assistant can produce a working Python script in seconds. What it will not do on its own is ask whether the answer means what it seems to mean. In the Raleigh project, the summed miles look like trail lengths, and a student who has not built the calculation has no way of knowing they are not quite that.',
    p2: 'That is the Impacts of Computing and Data and Analysis concepts at work. Students who write the code themselves learn to ask what each number is, where it came from and what it leaves out, and they can then use AI tools as helpers rather than as oracles.',
    closer: 'The new requirement gives every North Carolina student one course; the students who go further are the ones who learn to question a result, not just produce one.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Asheville to the Outer Banks, one live class',
    intro: 'North Carolina is a long state, and an online class reaches every part of it the same way.',
    cells: [
      { h3: 'From home, anywhere in NC', p: 'A student in Charlotte and one in Wilmington can share a class, each from home, with no driving across town after school.' },
      { h3: 'NC grades and courses', p: 'Teachers use US grade levels and plan around the school year; high school students can link projects to their required CS course and to AP. Assessed school work always stays the student&rsquo;s own.' },
      { h3: 'Start with a free lesson', p: 'A real task with a real teacher, then a recommended level, course and time. We never ask for card details at this stage.' },
      { h3: 'Batches matched by level', p: 'Fifteen to twenty students at the same stage, from North Carolina and elsewhere in the US.' },
      { h3: 'Or one to one', p: 'A teacher to yourself, at times you choose, for students who want to go faster or prepare for AP.' },
      { h3: 'Times that work', p: 'Weekdays or weekends, flexible, always confirmed in Eastern Time.' }
    ],
    spec: { title: 'No office, no travel', p: 'Every class is live and online, taught from India; there is no Modern Age Coders center in North Carolina, and none is claimed. A student needs a laptop or desktop, working sound and a reliable connection.' }
  },

  fees: {
    h2: 'What classes cost for North Carolina families',
    intro: 'Three figures and nothing hidden.',
    first: 'A full lesson free of charge, ending with a suggested level, course and class time.',
    group: 'A month of classes in a batch of fifteen to twenty students at the same stage.',
    private: 'The same monthly rhythm, with one teacher for one student.',
    closer: 'Families outside India pay one rate in US dollars, so Raleigh and Boone pay the same. Billing starts only after the free lesson, once the course and time are agreed; the pricing page explains holidays and missed classes.'
  },

  reviewsH2: 'What parents and students have written on Google',

  book: {
    h2: 'Tell us what your student wants to learn',
    intro: 'We match the first task to your student: a block game for a third grader, a first Python program for a seventh grader, or the Raleigh greenway project for a high schooler.',
    success: 'Thank you. The team will be in touch shortly about a class for North Carolina.'
  },

  faq: {
    h2: 'North Carolina coding and AI questions',
    intro: 'What North Carolina parents and students ask before they begin.',
    items: [
      { q: 'Is computer science a graduation requirement in North Carolina?', a: 'Yes. NC DPI says G.S. 115C-12(9d) requires every public school unit to offer computer science courses that fulfill a graduation requirement, in full from the 2026 to 2027 school year.' },
      { q: 'Who is the first class that must take computer science?', a: 'The 2023 NC DPI announcement says the requirement applies to students entering high school in the 2026 to 2027 school year, so ninth graders starting in fall 2026.' },
      { q: 'Are any students exempt?', a: 'Two groups, according to NC DPI: students entering a public high school after completing eleventh grade, and students on an IEP whose disability would prevent them from completing the requirement.' },
      { q: 'Do middle schools have to offer computer science?', a: 'Yes. Every public school unit must offer an introductory computer science elective in middle school by the 2025 to 2026 school year, and graduation-requirement courses may be offered to middle schoolers.' },
      { q: 'What do the NC computer science standards cover?', a: 'Five core concepts: Computing Systems, Networks and the Internet, Data and Analysis, Algorithms and Programming, and Impacts of Computing, in bands K-2, 3-5 and 6-8 and by course in high school.' },
      { q: 'How many NC high schools offer computer science?', a: 'The 2025 Code.org data reports 513 of 735 North Carolina high schools, or 69.8%, offering computer science in 2024 to 2025, with 5.68% of high school students enrolled.' },
      { q: 'Can your classes replace the school requirement?', a: 'No. The requirement is met through approved school courses. Our classes add depth, projects and AP preparation alongside them, and assessed school work is always the student\'s own.' },
      { q: 'What time are classes for North Carolina families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. Times are always confirmed in Eastern Time.' },
      { q: 'Is there a Modern Age Coders center in North Carolina?', a: 'No, and none is claimed. All teaching is live and online from India, so a student only needs a computer, sound and a reliable connection.' },
      { q: 'How do I see the fees?', a: 'The fees section on this page shows the free first lesson, the monthly batch and the monthly one-to-one option, and billing starts only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for North Carolina and US students',
    html: 'Students heading for AP can read <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a> and <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>. Builders can try the <a class="cg-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a>, and younger game makers can start with <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'North Carolina and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-classes-in-georgia', label: 'Georgia' },
    { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
    { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-ncar .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-ncar .cg-hero h1 { font-weight: 760; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-ncar .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-ncar .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-ncar .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-ncar .cg-grid-3 { gap: clamp(0.9rem, 2vw, 1.7rem); }
.cg-root.cg-ncar .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-ncar .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ncar .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-ncar .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'North Carolina, read raw on 17 October 2026: NC DPI Computer Science Graduation Requirement (G.S. 115C-12(9d), adopted September 21, 2023, signed September 29, 2023; HS courses by 2026-27, as early as 2024-25; MS elective by 2025-26; waivers only 2024-25 and 2025-26; two exemptions; 80% on three or more core concepts; 2026-27 review broadened to the CSTA framework); NC DPI press release 2 October 2023 (students entering high school in 2026-27; eighth state, 2023 wording; Maher, a century); NC Computer Science Standards (grade bands K-2, 3-5, 6-8; ICS; five core concepts; 93% of parents); Code.org (2025) State of AI + CS Education data (513 of 735, 69.8%; trend 51% to 69.8%; 27,384 of 481,741, 5.68%); College Board AP schools 642 (2023), 639 (2024); IANA America/New_York and US DST rule.',
    localProject: 'City of Raleigh Greenway Trails open data (Open Raleigh Data Policy), downloaded 17 October 2026: 1,266 records (701 trail, 365 structure, 114 crossing); materials asphalt 756, wood decking 230, concrete 142; 26 named trails; our MAP_MILES sums by TRAIL_NAME: Neuse River Trail 33.61, Walnut Creek Trail 20.27, Crabtree Creek Trail 18.63, Mine Creek Trail 6.54, labelled as ours and not official. Lesson family: group-by and aggregation, and why segment sums are not official totals.',
    requiredMentions: [
      'G.S. 115C-12(9d)',
      'September 29, 2023',
      'after completing eleventh grade',
      'at least 80% of its content',
      '513 of 735',
      '27,384 of 481,741',
      'Introduction to Computer Science (ICS)',
      '93% of parents',
      '33.61',
      '1,266 records',
      'March 14, 2027'
    ],
    sources: [
      { claim: 'NC DPI: Computer Science Graduation Requirement, G.S. 115C-12(9d), dates, exemptions, waivers, course alignment.', url: 'https://www.dpi.nc.gov/districts-schools/classroom-resources/computer-science-it-and-technology-education/computer-science-graduation-requirement' },
      { claim: 'NC DPI press release, 2 October 2023: House Bill 8, entering high school in 2026-27, eighth state, a century.', url: 'https://www.dpi.nc.gov/news/press-releases/2023/10/02/nc-students-gain-computer-science-skills-passage-house-bill-8' },
      { claim: 'NC DPI: NC Computer Science Standards, grade bands, ICS, five core concepts, 93% of parents.', url: 'https://www.dpi.nc.gov/districts-schools/classroom-resources/computer-science-it-and-technology-education/nc-computer-science-standards' },
      { claim: 'Code.org (2025), State of AI + CS Education data: NC access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Raleigh: Greenway Trails feature service.', url: 'https://services.arcgis.com/v400IkDOw1ad7Yad/arcgis/rest/services/Greenway_Trails_All/FeatureServer' },
      { claim: 'IANA tzdb northamerica: US daylight saving rule and America/New_York.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Code.org urban, suburban and rural figures for North Carolina: the published counts and percentages did not agree, so they are not used.',
      'A current national count of states requiring CS: only the 2023 DPI wording ("eighth state") is quoted, dated.',
      'Names of individual North Carolina schools: not needed; counts only.',
      'Official Raleigh trail lengths: not read; the page prints only our segment sums, labelled as ours.',
      'That our classes satisfy the graduation requirement: refused; only approved school courses do.',
      'Any affiliation with NC DPI, the City of Raleigh, Code.org or the College Board.'
    ]
  }
};
