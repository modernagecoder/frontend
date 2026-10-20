'use strict';
// Florida (cg- state page, US cluster Phase 4, row 70). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Florida's statutes require computer science courses in every district's middle and high schools, route any
// gap through Florida Virtual School, and let a computer science credit stand in for one math or one science credit.
// Yet the published access share is under four in ten high schools. What does the law say, what do the numbers say,
// and how does a student parse the messy dates and opening hours in Miami-Dade's library data?
// Sources read raw on 17 to 19 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-florida/):
//  - fldoe.org: 403 Access Denied (Akamai) on 17 October 2026 for sitemap, CS and graduation pages; not retried.
//  - Florida Statutes 1007.2616 (leg.state.fl.us), "Computer science and technology instruction": definition of
//    "computer science"; "(2)(a) Public schools shall provide students in grades K-12 opportunities for learning computer
//    science"; opportunities "must include courses in computer science in middle school and high school, including
//    earning-related industry certifications" and "must be integrated into each school district's middle and high
//    schools, including combination schools in which any of grades 6 through 12 are taught"; (2)(b) courses in the
//    Course Code Directory "no later than July 1, 2018"; (3) "The Florida Virtual School shall offer computer science
//    courses"; a district that does not offer one "must provide students access to the course through the Florida
//    Virtual School or through other means"; (4) teacher training funding; (5) elementary and middle "digital
//    classrooms"; (6) CS courses and certifications toward graduation under 1003.4282(3); (7) teacher bonuses (amounts
//    not printed); History "s. 19, ch. 2014-56; s. 3, ch. 2018-150; s. 26, ch. 2019-119; s. 29, ch. 2024-5".
//  - Florida Statutes 1003.4282, "Requirements for a standard high school diploma": "Beginning with students entering
//    grade 9 in the 2013-2014 school year", "24 credits"; "Four credits in mathematics" with Algebra I and Geometry; "A
//    student who earns a computer science credit may substitute the credit for up to one credit of the mathematics
//    requirement, with the exception of Algebra I and Geometry, if the commissioner identifies the computer science
//    credit as being equivalent in rigor"; the same for "up to one credit of the science requirement, with the exception
//    of Biology I"; "An identified computer science credit may not be used to substitute for both a mathematics and a
//    science credit"; an industry certification "in 3D rapid prototype printing may satisfy up to two credits of the
//    mathematics requirement, with the exception of Algebra I".
//  - Code.org (2025), raw sheet (Access and Participation tabs only): FL access 30% (2018-19), 33%, 38%, 40% (2021-22),
//    blank 2022-23, 38.4% (2023-24, trend tab), 2024-25 blank; Most Recent 463 of 1,192, 2023-2024, "State Education
//    Agency" (463/1,192 = 38.8%, our division; the tabs differ slightly). Participation 2.7% (2020-21), 3.0%, blank,
//    2.2% (2023-24); Most Recent 20,233 of 894,064 (NCES Fall 2022 total).
//  - College Board, School Report of AP Exams by State 2023-24: Florida 1,084 (2023), 1,086 (2024); public 764, 828.
//  - IANA tzdb northamerica: "most of Florida" under US eastern time; "Florida panhandle (Bay, Calhoun, Escambia, Gulf,
//    Holmes, Jackson, Okaloosa, Santa Rosa, Walton, and Washington counties)" under US central time.
//  - Tampa (arcgis.tampagov.net): geo-blocked "outside the United States" on 17 October 2026; not retried.
//  - Miami-Dade County, "County Library" feature layer (owner MDPublisher; "libraries operated/managed by the Miami-Dade
//    County Public Library System"; data provided "as is"). Count query 50, downloaded 19 October 2026. Our results:
//    OPERHOUR has 8 distinct raw strings that reduce to 3 real schedules plus 2 unusable values: 09:30 to 20:00 for 44
//    records (written 4 ways, e.g. "9:30 a.m. - 8 p.m." 16, "9:30 am. - 8 p.m." 12, "9:30 am - 8 p.m." 9,
//    "9:30 am - 8 p.m" 7), 09:30 to 18:00 for 3, 07:00 to 18:00 for 1, one blank, one literal "null"; WKDAY 7 raw
//    strings, 5 after removing spaces ("Mon,Tue,Wed,Thu" 44); CREATEDDATE epoch ms: 49 in 2018, 1 in 2022 (first
//    1528203344000 = 2018-06-05 12:55:44 UTC = 08:55:44 Eastern); MODIFIEDDATE 33 in 2022, 17 in 2025; for these 100
//    time stamps the UTC date and the Eastern date never differ. Addresses and phones not printed.
// Lesson family: parsing dates and times (epoch milliseconds, time zones, free-text hours).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'FLORIDA', label: 'Florida', blurb: 'Coding and AI for Florida students under F.S. 1007.2616 and the CS credit swap, with a date-parsing project on Miami-Dade libraries.' },
  market: US,
  slug: 'coding-and-ai-classes-in-florida',
  code: 'af',
  accent: '#213F5C',
  accentRationale: 'Florida: #213F5C, a muted Gulf-water slate blue, allocated in alloc.tsv row 70 and distinct from the other US accents; comfortably over 4.5:1 on every paper in the accent gate',
  pageType: 'city',
  place: {
    name: 'Florida',
    eyebrow: 'Florida, United States',
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
  routeLabel: 'Florida',
  title: 'Coding and AI Classes in Florida | Live Online, K to 12',
  description: 'Coding and AI classes for Florida students: the K-12 computer science statute, the CS math or science credit swap, access counts, and a Miami-Dade data project.',
  ogDescription: 'Florida law requires CS courses in every district\'s middle and high schools and lets a CS credit replace one math or science credit. The rules, numbers and live classes.',
  twitterDescription: 'Florida coding and AI classes, live online, built around the state\'s computer science statutes.',
  ogImageCourse: 'cybersecurity-course-for-teens-ethical-defensive',
  verifiedOn: '19 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Florida Students',
    description: 'Level-matched online web building, Python, cybersecurity and AP Computer Science for Florida students in grades K to 12, taught live in English.'
  },

  h1: 'Coding and AI classes in Florida',
  capsuleQ: 'Can a computer science class count toward a Florida diploma?',
  capsule: 'Yes. Under Florida Statutes 1003.4282, a computer science credit the commissioner identifies as equal in rigor may replace up to one math credit (not Algebra I or Geometry) or one science credit (not Biology I), but not both. Modern Age Coders teaches coding, AI and AP Computer Science live online for Florida students in grades K to 12, in batches or 1-on-1.',
  lead: 'Florida\'s computer science rules are spread across two statutes, and together they are unusually specific. One requires public schools to give students in grades K-12 opportunities to learn computer science, puts courses into every district\'s middle and high schools, and names Florida Virtual School as the fallback when a district does not offer a listed course. The other sets the 24-credit diploma and the terms on which a computer science credit can stand in for math or science. The published numbers, though, show fewer than four in ten Florida high schools offering the subject. This page reads both statutes, sets out the figures, works through a Miami-Dade library dataset whose dates and hours need real parsing, and explains the two time zones families live in.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Florida.',

  picks: {
    eyebrow: 'Course picks for Florida',
    h2: 'Courses that line up with Florida\'s K-12 rules',
    intro: 'From elementary web projects to the certification-minded topics the statute mentions. The trial lesson, free of charge, settles the level.',
    items: [
      { course: 'kids-ai-web-development-course', band: 'Grades 4 to 7', note: 'Web pages and small AI-assisted projects, the digital-skills work the statute imagines for elementary and middle school.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Python from basics to data parsing, including the Miami-Dade library dates and hours project.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', band: 'Grades 8 to 12', note: 'Defensive security skills, a common area for the technology-related industry certifications Florida law refers to.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science A in Java, a rigorous course of the kind used for the math credit option.' }
    ]
  },

  sections: [
    {
      id: 'k12', tint: '', eyebrow: 'The K-12 statute',
      h2: 'What Florida Statutes 1007.2616 requires of public schools',
      intro: 'From section 1007.2616, Computer science and technology instruction, on the Florida Legislature\'s official statutes site, read 17 October 2026. The Department of Education\'s own site refused our requests, so the statute text is our source.',
      body: [
        { kind: 'table', caption: 'Florida Statutes 1007.2616, summarized by subsection', head: ['Subsection', 'What it provides'], rows: [
          ['(1) Definition', 'Computer science means the study of computers and algorithmic processes, their principles, designs, applications and impact on society, and includes coding and programming'],
          ['(2)(a) Opportunities', 'Public schools shall provide students in grades K-12 opportunities to learn computer science, which must include middle and high school courses, including ones that earn industry certifications'],
          ['(2)(a) Every district', 'Those courses must be integrated into each district\'s middle and high schools, including combination schools teaching any of grades 6 through 12'],
          ['(2)(b) Course list', 'Computer science courses were to be identified in the Course Code Directory and published by the department no later than July 1, 2018'],
          ['(3) The fallback', 'Florida Virtual School shall offer the listed courses; a district that does not offer one must give students access through Florida Virtual School or other means'],
          ['(5) Digital classrooms', 'Elementary and middle schools may set up digital classrooms for coding, media and graphics skills and grade-appropriate certifications']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A rule about opportunity', p: 'The statute obliges schools to provide opportunities and courses; it does not require every student to take computer science. That is why access and enrollment figures can stay low while the law is met.' },
          { h3: 'Teachers are funded', p: 'Subject to appropriation, districts can apply for funding to train teachers toward a computer science certificate or a course-linked industry certification, and qualifying teachers can receive a bonus.' },
          { h3: 'A decade of amendments', p: 'The section\'s history line runs from chapter 2014-56 through chapter 2018-150 and chapter 2019-119 to chapter 2024-5, so older summaries of Florida law may be out of date.' }
        ] },
        { kind: 'p', text: 'Subsection (3) matters most to a family whose school lists no computer science course. The law does not leave that student without an option: the district must provide access to the course, through Florida Virtual School or another route. Ask the school counselor how your district meets that duty.' }
      ]
    },
    {
      id: 'diploma', tint: 'tint', eyebrow: 'The diploma statute',
      h2: 'Swapping a math or science credit for computer science',
      intro: 'From Florida Statutes 1003.4282, Requirements for a standard high school diploma, read 17 October 2026.',
      body: [
        { kind: 'table', caption: 'Computer science and the standard diploma under F.S. 1003.4282', head: ['Rule', 'What the statute says'], rows: [
          ['Credits required', '24 credits for students entering grade 9 in the 2013-2014 school year and later, or an IB or AICE curriculum'],
          ['Math swap', 'A computer science credit may replace up to one math credit, except Algebra I and Geometry, if the commissioner identifies it as equivalent in rigor'],
          ['Science swap', 'A computer science credit may replace up to one science credit, except Biology I, on the same rigor condition'],
          ['Not both', 'One identified computer science credit may not be used for both a math and a science credit'],
          ['3D printing certification', 'An industry certification in 3D rapid prototype printing may satisfy up to two math credits, except Algebra I, if identified as equivalent in rigor']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The commissioner decides', p: 'Only computer science credits the commissioner has identified as equivalent in rigor can be swapped. The list of eligible courses sits in the Course Code Directory, which section 1007.2616(6) says must include them.' },
          { h3: 'Algebra and geometry stay', p: 'Algebra I and Geometry are protected in the math requirement, and Biology I in science, so the swap only reaches the third or fourth math credit or the second or third science credit.' },
          { h3: 'Check before you plan', p: 'Because eligibility depends on a published list we could not read on the Department site, confirm with your school which computer science courses your student can use for the swap.' }
        ] }
      ]
    },
    {
      id: 'access', tint: '', eyebrow: 'The numbers',
      h2: 'Under four in ten Florida high schools list a computer science course',
      intro: 'Florida values from the Code.org (2025) data sheet and the College Board, as published.',
      body: [
        { kind: 'table', caption: 'Florida high schools offering computer science and students enrolled, from the trend tabs of the Code.org (2025) sheet', head: ['School year', 'Schools offering CS', 'Students in CS'], rows: [
          ['2018 to 2019', '30%', 'No value'],
          ['2019 to 2020', '33%', 'No value'],
          ['2020 to 2021', '38%', '2.7%'],
          ['2021 to 2022', '40%', '3.0%'],
          ['2022 to 2023', 'Blank', 'Blank'],
          ['2023 to 2024', '38.4% on the trend tab; 463 of 1,192 on the Most Recent tab', '2.2%; 20,233 of 894,064 on the Most Recent tab']
        ] },
        { kind: 'p', text: 'The two tabs do not quite match for 2023 to 2024: 463 divided by 1,192 is 38.8% by our division, against 38.4% on the trend tab. The gap is small, but it is a reminder to quote the count and the tab rather than a bare percentage. Either way, the shape is clear. Florida\'s access share has sat between 30% and 40% for five published years, and about one high school student in forty-four was enrolled in 2023 to 2024, by our arithmetic. No 2024 to 2025 Florida values appear in the sheet.' },
        { kind: 'p', text: 'Advanced Placement tells a different story. College Board counts 1,084 Florida schools giving AP exams in 2023 and 1,086 in 2024, and the public school count rose from 764 to 828. Many Florida students meet rigorous coursework through AP even where a computer science course is missing. Cite access and enrollment as Code.org (2025). 2025 State of AI + CS Education.' }
      ]
    },
    {
      id: 'parsing', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Parsing the dates and hours in Miami-Dade\'s library data',
      intro: 'Miami-Dade County publishes the branches of its public library system as an open map layer. The data looks simple until a student tries to answer "which libraries are open at 7 pm on a Thursday?"',
      body: [
        { kind: 'table', caption: 'Opening-hour text in the County Library layer, 50 records, and what it means once parsed (our work, download of 19 October 2026)', head: ['Raw OPERHOUR text', 'Records', 'Parsed schedule'], rows: [
          ['9:30 a.m. - 8 p.m.', '16', '09:30 to 20:00'],
          ['9:30 am. - 8 p.m.', '12', '09:30 to 20:00'],
          ['9:30 am - 8 p.m.', '9', '09:30 to 20:00'],
          ['9:30 am - 8 p.m', '7', '09:30 to 20:00'],
          ['9:30 am. - 6 p.m.', '3', '09:30 to 18:00'],
          ['7 a.m. - 6 p.m.', '1', '07:00 to 18:00'],
          ['Blank, or the word "null"', '2', 'Unknown']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Normalize the text', p: 'Eight different strings describe three real schedules. Lower-casing, removing dots and spaces, then reading hour, minute and am or pm with one pattern turns 44 records into the same 09:30 to 20:00 window.' },
          { h3: '2. Decode the time stamps', p: 'The CREATEDDATE and MODIFIEDDATE fields arrive as milliseconds since 1970 in UTC. The first record\'s 1528203344000 becomes June 5, 2018 at 12:55:44 UTC, which is 8:55:44 in the morning, Eastern daylight time.' },
          { h3: '3. Group by year', p: 'Once decoded, 49 records were created in 2018 and 1 in 2022, while 33 were last modified in 2022 and 17 in 2025. Students should also check whether converting UTC to Eastern ever changes the date; here it does not, for all 100 stamps.' }
        ] },
        { kind: 'callout', h3: 'Our parsing, the county\'s data', p: 'The schedules and counts are ours, from one download. Miami-Dade County provides the layer "as is" and says it is not guaranteed to be accurate, correct or complete, so this is a teaching exercise, not a current timetable. Addresses and phone numbers in the layer are not printed.' },
        { kind: 'p', text: 'The weekday field needs the same care: seven raw strings collapse to five once spaces are removed, with "Mon,Tue,Wed,Thu" covering 44 records and one branch listed as temporarily closed. After both fields are parsed, the 7 pm Thursday question has a defensible answer, and the student can say exactly which records were left out and why.' }
      ]
    },
    {
      id: 'zones', tint: 'tint', eyebrow: 'Class times',
      h2: 'Eastern for most of Florida, Central for the western panhandle',
      intro: 'Florida is split between two US time zones, and the IANA database names the counties on Central time.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Most of the state', p: 'The IANA database places most of Florida on US eastern time. For Miami, Orlando, Tampa or Jacksonville families we confirm every slot in Eastern Time.' },
          { h3: 'The ten panhandle counties', p: 'The same database lists Bay, Calhoun, Escambia, Gulf, Holmes, Jackson, Okaloosa, Santa Rosa, Walton and Washington counties on US central time. Pensacola-area families get times in Central Time.' },
          { h3: 'The gap to India, ours', p: 'India is nine and a half hours ahead of Florida\'s Eastern summer clock and ten and a half in winter; on the Central panhandle add one more hour to each.' }
        ] },
        { kind: 'spec', title: 'Why the parsing lesson needs time zones', p: 'A library time stamp stored in UTC and a branch\'s opening hours written in local time cannot be compared until both are in the same zone. A student who parses "8 p.m." as a local Eastern time and converts the UTC stamps to match has done the same job a real scheduling system does every day.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first web pages to AP Java and industry-style skills',
    intro: 'Use these bands as a first guess; the free trial lesson places each student properly.',
    cols: [
      { band: 'Grades K to 3', h3: 'Coding as play', p: 'Block programs, patterns and short animations, the coding instruction the statute allows in elementary school.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 7', h3: 'Web and AI basics', p: 'Simple websites, first Python and safe, age-appropriate AI activities.', courses: ['kids-ai-web-development-course', 'python-ai-kids-masterclass'] },
      { band: 'Grades 7 to 10', h3: 'Data and security', p: 'Python with real data such as the library hours project, and the foundations of cybersecurity.', courses: ['python-complete-masterclass-teens', 'cybersecurity-course-for-teens-ethical-defensive'] },
      { band: 'Grades 10 to 12', h3: 'AP and beyond', p: 'AP Computer Science A or Principles, the rigorous courses families ask about for the credit swap.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ap-computer-science-principles-exam-prep-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI which Miami-Dade libraries open at 9:30 and see how it counts',
    intro: 'Free-text data is where AI tools sound most confident and are easiest to fool.',
    p1: 'A model reading the hours column may treat "9:30 a.m." and "9:30 am." as different, or merge "8 p.m" with something else entirely, and still report a neat number. Without parsing the strings yourself, there is no way to know whether 44 is the right count or just a plausible one.',
    p2: 'Students who wrote the parser know the four spellings, the blank and the literal "null". They can hand an AI assistant the cleaned table and get useful help, because the hard, judgment-heavy step is already theirs.',
    closer: 'Florida requires computer science opportunities in every district; the students who learn to clean messy real data are the ones who make the most of them.',
    blogAnchor: 'why it still makes sense to learn coding next to AI'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Key West to Pensacola, the same live teacher',
    intro: 'Florida is long and its families are busy; an online class removes the drive.',
    cells: [
      { h3: 'Choose your times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Batches that fit the level', p: 'Each group has fifteen to twenty students at close to the same stage, from Florida and the rest of the US, with one live teacher.' },
      { h3: 'Private sessions', p: 'A 1-on-1 plan works for AP students, those aiming at a certification topic, or anyone wanting a faster or slower pace.' },
      { h3: 'Beside FLVS or school', p: 'Our classes run alongside a school or Florida Virtual School course. Teachers know US grades, and graded course work stays the student\'s own.' },
      { h3: 'Start free', p: 'One full trial lesson on a real task, then a candid level and course recommendation. Nothing is charged and no card is stored.' },
      { h3: 'What you need', p: 'A computer with a keyboard, headphones or speakers, and home internet that copes with video.' }
    ],
    spec: { title: 'No Florida location', p: 'All lessons are taught live online from India. Modern Age Coders has no Florida office or learning center and claims none, and we are not connected with the Florida Department of Education, Florida Virtual School, Miami-Dade County or any district.' }
  },

  fees: {
    h2: 'What Florida families pay',
    intro: 'Three amounts, all in US dollars.',
    first: 'A trial lesson without charge, ending with a level and course suggestion.',
    group: 'A month of classes in a level-matched batch of fifteen to twenty students.',
    private: 'A month of private classes, one teacher and one student.',
    closer: 'Tallahassee and Fort Lauderdale pay one identical US rate, in US dollars. Nothing is billed before the trial ends and you have agreed a plan; school holidays and missed classes are explained on our pricing page.'
  },

  reviewsH2: 'Google reviews from families',

  book: {
    h2: 'Request a free lesson for a Florida student',
    intro: 'Tell us the grade and the goal, whether a first website for a fourth grader, Python data work for a ninth grader, or AP Computer Science A for a junior planning the credit swap.',
    success: 'Thank you. We will be in touch shortly about a class for your Florida student.'
  },

  faq: {
    h2: 'Florida coding questions',
    intro: 'What Florida parents and students ask us before starting.',
    items: [
      { q: 'Do Florida public schools have to offer computer science?', a: 'Florida Statutes 1007.2616 requires opportunities for K-12 students and computer science courses integrated into each district\'s middle and high schools.' },
      { q: 'What if my child\'s school has no computer science course?', a: 'The statute says a district that does not offer a listed course must give students access through Florida Virtual School or other means. Ask your counselor.' },
      { q: 'Can computer science replace a math credit in Florida?', a: 'Up to one math credit, other than Algebra I and Geometry, if the commissioner identifies the computer science credit as equivalent in rigor.' },
      { q: 'Can it replace a science credit instead?', a: 'Yes, up to one science credit other than Biology I, on the same condition, but one computer science credit cannot be used for both math and science.' },
      { q: 'How many Florida high schools offer computer science?', a: 'The 2025 Code.org sheet lists 463 of 1,192 for 2023 to 2024 on its Most Recent tab, from state education agency data.' },
      { q: 'How many Florida students take computer science?', a: 'For 2023 to 2024 the sheet gives 20,233 of 894,064 high school students, a total taken from NCES for fall 2022.' },
      { q: 'What time zone are classes in?', a: 'Eastern Time for most of Florida, and Central Time for families in the ten western panhandle counties the tz database lists.' },
      { q: 'When can lessons happen?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Do your classes count as Florida course credit?', a: 'No. Credit comes from school or Florida Virtual School courses in the Course Code Directory. Our lessons add depth and practice alongside them.' },
      { q: 'Where can I read the prices?', a: 'Further up this page, in the fees block: a free trial, then a monthly group or private plan in US dollars, billed only after the trial.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Florida families',
    html: 'Teens interested in security can read <a class="cg-inline-link" href="/cybersecurity-classes-for-teens">cybersecurity classes for teens</a>, and AP planners <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>. Younger coders can start with <a class="cg-inline-link" href="/coding-classes-for-elementary-students">coding classes for elementary students</a> or <a class="cg-inline-link" href="/how-to-make-a-video-game-for-kids">how to make a video game for kids</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Florida and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'The US hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/how-to-make-a-video-game-for-kids', label: 'Make a video game' },
    { href: '/coding-classes-for-elementary-students', label: 'Elementary coding classes' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-af .cg-hero-grid { align-items: center; gap: clamp(1.15rem, 3.3vw, 2.6rem); }
.cg-root.cg-af .cg-hero h1 { font-weight: 710; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-af .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-af .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-af .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.012em; }
.cg-root.cg-af .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
.cg-root.cg-af .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-af .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-af .cg-ladder-col { border-top: 3px dotted var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-af .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Florida, read raw 17 to 19 October 2026. fldoe.org 403 (Akamai), not retried. F.S. 1007.2616: definition; K-12 opportunities; MS and HS courses incl. industry certifications integrated in each district incl. combination schools; Course Code Directory by July 1, 2018; Florida Virtual School offers listed courses and is the access route; teacher training funding; digital classrooms; history ch. 2014-56, 2018-150, 2019-119, 2024-5. F.S. 1003.4282: 24 credits from grade 9 entrants in 2013-2014; CS credit for one math credit except Algebra I and Geometry, or one science credit except Biology I, if equivalent in rigor, not both; 3D rapid prototype printing certification up to two math credits. Code.org (2025): 30%, 33%, 38%, 40%, blank, 38.4% vs 463 of 1,192; participation 2.7%, 3.0%, 2.2%, 20,233 of 894,064. College Board 1,084, 1,086 (public 764, 828). IANA: most of Florida eastern, ten panhandle counties central.',
    localProject: 'Miami-Dade County, County Library layer (MDPublisher, "as is"), count 50, downloaded 19 October 2026: OPERHOUR 8 raw strings, 44 records 09:30 to 20:00 written 4 ways, 3 at 09:30 to 18:00, 1 at 07:00 to 18:00, 1 blank, 1 "null"; WKDAY 7 raw, 5 normalized; CREATEDDATE 49 in 2018, 1 in 2022; MODIFIEDDATE 33 in 2022, 17 in 2025; 1528203344000 = June 5, 2018 12:55:44 UTC. Lesson family: date and time parsing.',
    requiredMentions: [
      'chapter 2024-5',
      'combination schools teaching any of grades 6 through 12',
      'IB or AICE curriculum',
      '3D rapid prototype printing',
      'except Biology I',
      '463 of 1,192',
      '20,233 of 894,064',
      '1528203344000',
      '9:30 am. - 8 p.m.',
      'Okaloosa, Santa Rosa, Walton and Washington'
    ],
    sources: [
      { claim: 'Florida Statutes 1007.2616, Computer science and technology instruction.', url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=1000-1099/1007/Sections/1007.2616.html' },
      { claim: 'Florida Statutes 1003.4282, Requirements for a standard high school diploma.', url: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=1000-1099/1003/Sections/1003.4282.html' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Florida access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'Miami-Dade County: County Library feature layer.', url: 'https://services.arcgis.com/8Pc9XBTAsYuxx9Ny/arcgis/rest/services/Library_gdb/FeatureServer' },
      { claim: 'IANA tzdb northamerica: Florida eastern and the panhandle counties on central time.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'FLDOE pages (CS standards, Course Code Directory lists, graduation guidance): fldoe.org returned 403 on 17 October 2026; not retried around.',
      'City of Tampa open data: geo-blocked for requests from outside the United States; not used.',
      'Teacher bonus amounts in 1007.2616(7) and the personal financial literacy credit details: not printed (no money figures).',
      'A single reconciled 2023-24 Florida access percentage: the trend tab (38.4%) and the Most Recent tab (463 of 1,192, 38.8%) differ; the count is quoted with its tab.',
      'Code.org gender, race, geography and graduation figures and the Code.org Florida summary text: not used.',
      'Library addresses, phone numbers and current opening hours: not printed as a timetable; only our parsed counts.',
      'Any affiliation with the Florida Department of Education, Florida Virtual School, Miami-Dade County, Code.org or the College Board.'
    ]
  }
};
