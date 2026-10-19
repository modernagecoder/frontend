'use strict';
// Montana (cg- state page, US cluster Phase 4, row 86). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Montana adopted grade-by-grade computer science standards in 2021, including AI in high school, yet fewer than
// four in ten high schools offer a course; what the standards say, what the numbers say, and how live classes reach a
// big, thinly populated state. Sources read raw on 17 and 18 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-and-ai-classes-in-montana/):
//  - Montana Office of Public Instruction (OPI), Computer Science page (found via opi.mt.gov/sitemap.xml):
//    "2021 Montana Content Standards for Computer Science"; Class 4 Computer Coding endorsement "[10S CC]"; workshops "may
//    be taken to earn the 80 hours of professional development required"; "CyberMontana is a statewide
//    Legislature-funded initiative"; goal to reach all "56 counties".
//  - OPI, Montana Content Standards for Computer Science for K-12 (CS K12.pdf): "Document Created April 5, 2021";
//    "The following standards will go into effect on July 1, 2021."; five content areas AP, CS, DA, IC, NI; seven skills
//    from "fostering an inclusive computing culture" to "communicating about computing", which apply "When a district
//    incorporates or integrates computer science content into district curriculum or offers a course in computer
//    science"; standards for K, each grade 1 to 5, 6-8 and 9-12; CS.DA.K.1 "collect and categorize data"; CS.DA.1.1
//    "collect and categorize data in up to three categories"; CS.DA.6-8.1 "collect data using computational tools and
//    transform the data to make it more useful and reliable"; CS.AP.9-12.2 "describe how artificial intelligence drives
//    many software and physical systems"; CS.AP.9-12.3 "implement an artificial intelligence algorithm to play a game
//    against a human opponent or solve a problem".
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet (Access and Participation tabs only): MT access 31%
//    (2018-19), 36%, 37%, 36%, 34%, 31.4% (2023-24), 38.4% (2024-25); most recent 66 of 172 high schools, 2024-2025,
//    source "State Education Agency"; national 60%. Participation 3.5% (2020-21), 3.7% (2023-24); count tab 1,655 of
//    45,378 (3.6%), NCES Fall 2022 denominator.
//  - College Board, School Report of AP Exams by State 2023-24: MT AP schools 81 (2023), 101 (2024); public 69, 87.
//  - IANA tzdb northamerica: Montana listed under "US mountain time, represented by Denver"; no second Montana zone named.
//  - Montana Fish, Wildlife & Parks, Montana State Parks Trailheads (licence text: provided "as is" without warranty),
//    attributes queried 18 October 2026: 108 trailheads in 37 parks; latitude 45.16 to 48.61, longitude -115.39 to -104.10;
//    Makoshika 16 (the most); elevation 1,962 ft (Brush Lake) to 6,188 ft (Lost Creek); MARKED 68, UNMARKED 39, 1 blank.
//    Ours: west of 110 degrees W 78, east 30; box 47.6 to 48.1 N, 114.5 to 113.9 W holds 21 trailheads in 5 parks
//    (West Shore 7, Wayfarers 5, Big Arm 4, Lake Mary Ronan 3, Wild Horse Island 2); box 46.9 to 47.4 N, 105.0 to 104.5 W
//    holds 16, all Makoshika; Brush Lake northernmost and easternmost, Thompson Falls westernmost, Bannack southernmost.
// Lesson family: latitude and longitude bounding-box filter.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'MONTANA', label: 'Montana', blurb: 'Coding and AI for Montana students under the 2021 state CS standards, with a state parks trailhead mapping project in Python.' },
  market: US,
  slug: 'coding-and-ai-classes-in-montana',
  code: 'aimo',
  accent: '#51612C',
  accentRationale: 'Montana: #51612C, a muted sagebrush olive, as allocated in alloc.tsv for row 86, above 4.5:1 on every paper',
  pageType: 'city',
  place: {
    name: 'Montana',
    eyebrow: 'Montana, United States',
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
  routeLabel: 'Montana',
  title: 'Coding and AI Classes in Montana | Live Online',
  description: 'Live online coding and AI classes for Montana students: the 2021 Montana computer science standards, published access figures, and a state parks mapping project.',
  ogDescription: 'Montana wrote AI into its 2021 high school CS standards, yet Code.org counts 66 of 172 high schools offering the subject. The standards, the data, and live classes statewide.',
  twitterDescription: 'Montana coding and AI classes, live online, built on the 2021 state CS standards.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Montana Students',
    description: 'Block coding, Python, web development, AI and AP Computer Science for Montana students from kindergarten to twelfth grade, taught live online in English.'
  },

  h1: 'Coding and AI classes in Montana',
  capsuleQ: 'What computer science do Montana schools teach?',
  capsule: 'Montana&rsquo;s Office of Public Instruction adopted K-12 computer science standards that took effect on July 1, 2021, covering five content areas and, in high school, artificial intelligence. Code.org&rsquo;s 2025 data counts 66 of 172 Montana high schools offering a course. Modern Age Coders teaches the same content live online, from kindergarten blocks to Python and AI.',
  lead: 'Montana has some of the most detailed computer science standards in the country and some of the thinnest access to them. The state&rsquo;s 2021 standards spell out what a kindergartner, a third grader and a high school senior should be able to do, down to asking older students to implement an artificial intelligence algorithm that plays a game. Yet in the latest published count, fewer than four in ten Montana high schools offered a computer science course, and the standards apply only where a district chooses to teach the subject. This page reads the standards directly from the state&rsquo;s PDF, sets out the access, enrollment and AP figures, and shows how a student in Glendive or Libby can work through the same material live online, starting with a Python project on the state&rsquo;s own park trailheads.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Montana.',

  picks: {
    eyebrow: 'Course picks for Montana',
    h2: 'Four courses that follow Montana&rsquo;s grade bands',
    intro: 'Montana writes separate standards for each elementary grade, then for grades 6 to 8 and 9 to 12. These four courses line up with that structure; the free class fixes the starting level.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Kindergarten to grade 5', note: 'Step-by-step instructions, loops and data sorting in blocks, the elementary strands of the Montana standards, through games and apps.' },
      { course: 'python-ai-kids-masterclass', band: 'Grades 5 to 8', note: 'Typed Python for the 6-8 band, including the data skill Montana lists for middle school: collecting data with code and transforming it.' },
      { course: 'frontend-development-masterclass-for-teens', band: 'Grades 8 to 11', note: 'Building and refining web interfaces for real users, close to the 9-12 standards on design, feedback and accessibility.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 10 to 12', note: 'Python, then machine learning and game-playing algorithms, matching the two AI standards in Montana&rsquo;s high school band.' }
    ]
  },

  sections: [
    {
      id: 'standards', tint: '', eyebrow: 'The 2021 standards',
      h2: 'Montana&rsquo;s computer science standards, read from the state&rsquo;s own document',
      intro: 'From the Montana Content Standards for Computer Science for K-12, downloaded from the Office of Public Instruction (OPI) on 17 October 2026. The PDF footer reads Document Created April 5, 2021.',
      body: [
        { kind: 'table', caption: 'Montana CS standards: one data strand followed through the grades (OPI, 2021)', head: ['Standard code', 'Grade', 'Each student will'], rows: [
          ['CS.DA.K.1', 'Kindergarten', 'collect and categorize data'],
          ['CS.DA.1.1', 'First grade', 'collect and categorize data in up to three categories'],
          ['CS.DA.6-8.1', 'Grades 6 to 8', 'collect data using computational tools and transform the data to make it more useful and reliable'],
          ['CS.AP.9-12.2', 'Grades 9 to 12', 'describe how artificial intelligence drives many software and physical systems'],
          ['CS.AP.9-12.3', 'Grades 9 to 12', 'implement an artificial intelligence algorithm to play a game against a human opponent or solve a problem']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Five content areas', p: 'Every code starts with CS and an area: AP for algorithms and programming, CS for computing systems, DA for data and analysis, IC for impacts of computing, NI for networks and the internet.' },
          { h3: 'Seven practices', p: 'Alongside content, the document lists seven skills, from fostering an inclusive computing culture to communicating about computing, which apply at each grade level.' },
          { h3: 'A conditional rule', p: 'Those skills apply when a district incorporates or integrates computer science content into district curriculum or offers a course in computer science. The standards describe what to teach where CS is taught; they do not order every school to teach it.' }
        ] },
        { kind: 'p', text: 'The document states that the standards went into effect on July 1, 2021. OPI&rsquo;s computer science page also points teachers to a Class 4 Computer Coding endorsement, listed as 10S CC, and says certain workshops may be taken to earn the 80 hours of professional development required to apply for it. For families this matters in one practical way: a Montana school can add a coding class by training a teacher it already has, so the course list at a small high school may change faster than published data shows.' }
      ]
    },
    {
      id: 'numbers', tint: 'tint', eyebrow: 'Published figures',
      h2: 'How many Montana high schools offer computer science',
      intro: 'Access, enrollment and AP figures for Montana, quoted as published by Code.org and the College Board.',
      body: [
        { kind: 'table', caption: 'Share of Montana high schools offering CS, by school year (Code.org, 2025)', head: ['School year', 'Montana'], rows: [
          ['2018 to 2019', '31%'],
          ['2019 to 2020', '36%'],
          ['2020 to 2021', '37%'],
          ['2021 to 2022', '36%'],
          ['2022 to 2023', '34%'],
          ['2023 to 2024', '31.4%'],
          ['2024 to 2025', '38.4%, 66 of 172 high schools']
        ] },
        { kind: 'table', mt: true, caption: 'Montana enrollment and AP schools, as published', head: ['Measure', 'Montana', 'Source'], rows: [
          ['High schoolers enrolled in CS (count tab)', '1,655 of 45,378, about 3.6%', 'Code.org (2025); enrollment base NCES Fall 2022'],
          ['Participation, 2020 to 2021 and 2023 to 2024', '3.5%, then 3.7%', 'Code.org (2025), participation tab'],
          ['Share of high schools offering CS nationally, 2024 to 2025', '60%', 'Code.org (2025), national row'],
          ['Schools giving AP exams, 2023 and 2024', '81, then 101 (public: 69, then 87)', 'College Board, School Report of AP Exams by State']
        ] },
        { kind: 'p', text: 'For five years the Montana line barely moved, drifting between 31% and 37%, before a rise to 38.4% in 2024 to 2025. Even after that rise, 106 of the 172 high schools in the count had no computer science course, by our subtraction. Enrollment tells the same story from the student side: roughly one Montana high schooler in 28 was in a CS class. The AP figure moves the other way, with twenty more Montana schools giving AP exams in 2024 than in 2023, which gives students in smaller towns a route to AP Computer Science through independent preparation.' },
        { kind: 'callout', h3: 'Citation for these figures', p: 'Code.org (2025). 2025 State of AI + CS Education. Montana values are quoted one by one from its data download, not republished. AP counts come from the College Board School Report of AP Exams by State, 2023 to 2024.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which trailheads sit inside a box on the map? A Montana State Parks project',
      intro: 'Montana Fish, Wildlife &amp; Parks publishes the location of every state park trailhead with latitude, longitude and elevation. Filtering those points by a rectangle of coordinates is the first real geographic algorithm most students write.',
      body: [
        { kind: 'table', caption: 'Bounding-box results on 108 state park trailheads (our filters on FWP data queried 18 October 2026)', head: ['Box we drew', 'Rule in code', 'Trailheads inside'], rows: [
          ['West of the 110th meridian', 'longitude below -110', '78 of 108'],
          ['Flathead Lake area', 'latitude 47.6 to 48.1, longitude -114.5 to -113.9', '21, from 5 parks'],
          ['Around Glendive', 'latitude 46.9 to 47.4, longitude -105.0 to -104.5', '16, all at Makoshika']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Read the points', p: 'The FWP layer held 108 trailheads in 37 parks. Makoshika had the most, 16, and elevations ran from 1,962 feet at Brush Lake to 6,188 feet at Lost Creek.' },
          { h3: '2. Write the filter', p: 'A point is inside a box when its latitude lies between two values and its longitude between two more. Students write that test with four comparisons, then run it on every row and count the matches.' },
          { h3: '3. Check the edges', p: 'Western longitudes are negative, so the smaller number is farther west, which trips up nearly everyone once. The Flathead box also catches Lake Mary Ronan, a different lake: a rectangle never follows a shoreline.' }
        ] },
        { kind: 'p', text: 'Extreme points make a good warm-up before any box: Brush Lake turns out to be both the northernmost and the easternmost trailhead in the file, Thompson Falls the westernmost and Bannack the southernmost. A second task counts the MARKED field, where 68 trailheads are marked, 39 unmarked and one is blank. Deciding what to do with that blank row, and saying so in the write-up, is the habit Montana&rsquo;s middle school standard means by transforming data to make it more useful and reliable.' },
        { kind: 'callout', h3: 'Our filters, their data', p: 'The boxes, counts and extreme points are our results from one download, drawn for teaching. FWP provides the trailhead layer as is, without warranty, and its own maps remain the reference for anyone planning a visit.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Mountain Time, from Missoula to Miles City',
      intro: 'The IANA time zone database places Montana in US mountain time, represented by America/Denver, and names no second zone for the state.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Daylight months', p: 'On Mountain Daylight Time, India is 11 hours 30 minutes ahead of Montana. Our teachers plan around that difference so a family only ever sees a Mountain Time slot.' },
          { h3: 'Standard months', p: 'From November to March, on Mountain Standard Time, the gap widens to 12 hours 30 minutes. Booking in Mountain Time means the family never has to do that arithmetic.' },
          { h3: 'This school year', p: 'Montana sets clocks back on November 1, 2026 and ahead on March 14, 2027. Confirmed class times are always given in Mountain Time.' }
        ] },
        { kind: 'spec', title: 'Coordinates and clocks', p: 'The trailhead file and the clock share a lesson: numbers that look simple carry hidden rules. A longitude of -115 is farther west than -104, and an offset of minus seven hours is only right in winter. Students who use the America/Denver zone instead of a fixed offset never have to remember which season it is.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Montana&rsquo;s grade bands, one live step at a time',
    intro: 'The bands follow the structure of the state standards; the free class places each student.',
    cols: [
      { band: 'Kindergarten to grade 2', h3: 'Instructions and patterns', p: 'Following and writing step-by-step instructions, sorting data, spotting patterns, the opening K-2 standards.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 3 to 5', h3: 'Programs with purpose', p: 'Loops, events and small games, then simple data projects with charts.', courses: ['problem-solving-and-computational-thinking-for-kids', 'game-development-masterclass-for-kids'] },
      { band: 'Grades 6 to 8', h3: 'Typed code and real data', p: 'Python with collected data, the 6-8 band, including the trailhead filter on this page.', courses: ['python-ai-kids-masterclass', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 9 to 12', h3: 'AI and AP', p: 'Game-playing algorithms and machine learning, plus AP Computer Science Principles or A.', courses: ['ai-ml-masterclass-teens', 'ap-computer-science-principles-exam-prep-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Montana asks high schoolers to build an AI, not just use one',
    intro: 'Standard CS.AP.9-12.3 is about implementation, which means understanding the algorithm well enough to write it.',
    p1: 'An AI chatbot can write a tic-tac-toe opponent in seconds. Montana&rsquo;s standard asks for more: a student who implements the algorithm learns why the program chooses one move over another, and can explain what happens when the search is cut short.',
    p2: 'The same judgment shows up in the trailhead project. A tool may filter a box for you, but only a student who wrote the four comparisons knows the rectangle swallowed a lake it was never meant to include, and can say so plainly.',
    closer: 'Montana&rsquo;s standards point toward students who understand AI from the inside; that understanding comes from writing code, then using tools on top of it.',
    blogAnchor: 'why we still teach hand-written code in the age of AI'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'A live class that reaches every corner of a very big state',
    intro: 'Montana spans more than eleven degrees of longitude in the FWP trailhead file alone. Online teaching makes that distance irrelevant.',
    cells: [
      { h3: 'Ranch, town or city', p: 'A student near Plentywood and one in Bozeman can be in the same live lesson, each at home, with no long drive on winter roads.' },
      { h3: 'US grades, Montana pace', p: 'Teachers use US grade levels and the American school calendar, including the May AP exams. Assignments a Montana school will grade remain the student&rsquo;s own work.' },
      { h3: 'A free first lesson', p: 'A full class with a real teacher, then a written recommendation for level, course and slot. Card details are not requested.' },
      { h3: 'Group batches', p: 'Fifteen to twenty students per batch, grouped by level, from Montana and other states.' },
      { h3: 'One teacher, one student', p: 'Private lessons suit a student racing ahead, or one who wants every session spent on their own questions.' },
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'Taught from India, online only', p: 'Modern Age Coders runs no Montana campus and claims none. A student needs a laptop or desktop, audio and a reliable internet connection, which matters more than distance in rural areas.' }
  },

  fees: {
    h2: 'Fees for families in Montana',
    intro: 'Three figures, all shown here.',
    first: 'A complete first lesson at no cost, with a suggested level, course and time afterward.',
    group: 'A month of classes in a batch of fifteen to twenty students at a shared level.',
    private: 'A month of classes with one teacher for one student.',
    closer: 'All US families are charged one rate in US dollars, so Billings and Havre pay alike. Nothing is billed until after the free lesson; holiday weeks and missed sessions are covered on the pricing page.'
  },

  reviewsH2: 'What families have written about us on Google',

  book: {
    h2: 'Book a free class for a Montana student',
    intro: 'We match the first lesson to the student: a pattern game for a kindergartner, a first Python script for a seventh grader, or the trailhead bounding-box task for a high schooler.',
    success: 'Thank you. We will contact you shortly about a class for your Montana student.'
  },

  faq: {
    h2: 'Montana coding and AI questions',
    intro: 'Answers based on OPI documents and published data.',
    items: [
      { q: 'Does Montana have computer science standards?', a: 'Yes. The Montana Content Standards for Computer Science for K-12 took effect on July 1, 2021. They cover algorithms and programming, computing systems, data and analysis, impacts of computing, and networks and the internet.' },
      { q: 'Do Montana schools have to teach computer science?', a: 'The standards say their skills apply when a district incorporates computer science into its curriculum or offers a course. We found no OPI page making a CS course compulsory, so this page claims no requirement.' },
      { q: 'Do the Montana standards include artificial intelligence?', a: 'Yes. In grades 9 to 12, CS.AP.9-12.2 asks students to describe how AI drives software and physical systems, and CS.AP.9-12.3 to implement an AI algorithm that plays a game or solves a problem.' },
      { q: 'How many Montana high schools offer computer science?', a: 'Code.org reports 66 of 172 Montana high schools, or 38.4%, offering computer science in 2024 to 2025, and 1,655 high school students enrolled in CS in its count tab.' },
      { q: 'Who can teach computer science in a Montana school?', a: 'OPI lists several licence and endorsement routes, including a Class 4 Computer Coding endorsement (10S CC) for which teachers need 80 hours of professional development.' },
      { q: 'How many Montana schools give AP exams?', a: 'The College Board counts 81 Montana schools with AP exams in 2023 and 101 in 2024, including 87 public schools in 2024.' },
      { q: 'Which time zone are classes in for Montana?', a: 'Mountain Time. The IANA database lists Montana under US mountain time (America/Denver), and clocks change on November 1, 2026 and March 14, 2027.' },
      { q: 'When can Montana students take classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays, booked in Mountain Time.' },
      { q: 'Is there a Modern Age Coders office in Montana?', a: 'No. All classes are live and online from India, so a student in any of Montana\'s 56 counties joins in exactly the same way.' },
      { q: 'What is the trailhead project?', a: 'Students download the Montana Fish, Wildlife and Parks trailhead points, write a latitude and longitude bounding-box filter, count the 108 trailheads inside boxes they choose, and explain why a rectangle catches places it was not meant to.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Next reads for Montana students',
    html: 'High schoolers interested in the AI standards can browse <a class="cg-inline-link" href="/ai-projects-for-high-school-students">AI projects for high school students</a>, and those planning AP can read about <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a> links every state guide, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina page</a> shows how a graduation requirement works.',
    waLabel: 'Message the team on WhatsApp'
  },

  footerHeading: 'Montana and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers' },
    { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' }
  ],

  personalityCss: `
.cg-root.cg-aimo .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.5vw, 2.8rem); }
.cg-root.cg-aimo .cg-hero h1 { font-weight: 780; letter-spacing: -0.025em; line-height: 1.02; }
.cg-root.cg-aimo .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-aimo .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-aimo .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.015em; }
.cg-root.cg-aimo .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-aimo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aimo .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-aimo .cg-grid-3 { gap: clamp(0.8rem, 2vw, 1.6rem); }
`,

  dossier: {
    curriculumAuthority: 'Montana, read raw 17 and 18 October 2026: OPI Computer Science page (2021 Montana Content Standards for Computer Science; Class 4 Computer Coding endorsement 10S CC; 80 hours of professional development; CyberMontana, Legislature-funded; 56 counties); OPI Montana Content Standards for Computer Science for K-12 PDF (created April 5, 2021; effective July 1, 2021; five content areas; seven skills, conditional on a district teaching CS; CS.DA.K.1, CS.DA.1.1, CS.DA.6-8.1, CS.AP.9-12.2, CS.AP.9-12.3). Code.org (2025): 66 of 172 (38.4%) 2024-25, trend 31% to 38.4%; 1,655 of 45,378; national 60%. College Board AP schools 81 and 101, public 69 and 87. IANA: Montana in US mountain time (America/Denver).',
    localProject: 'Montana Fish, Wildlife & Parks, Montana State Parks Trailheads (provided as is, without warranty), queried 18 October 2026: 108 trailheads in 37 parks; Makoshika 16; elevation 1,962 ft (Brush Lake) to 6,188 ft (Lost Creek); MARKED 68, UNMARKED 39, one blank. Our bounding boxes: west of -110 longitude 78; Flathead Lake area box 21 in 5 parks incl. Lake Mary Ronan; Glendive box 16, all Makoshika; extremes Brush Lake (north, east), Thompson Falls (west), Bannack (south). Lesson family: latitude and longitude bounding-box filter.',
    requiredMentions: [
      'Document Created April 5, 2021',
      'July 1, 2021',
      'collect and categorize data in up to three categories',
      'implement an artificial intelligence algorithm to play a game against a human opponent or solve a problem',
      'incorporates or integrates computer science content into district curriculum',
      '10S CC',
      '80 hours of professional development',
      '66 of 172',
      '1,655 of 45,378',
      '81, then 101',
      '78 of 108'],
    sources: [
      { claim: 'Montana OPI: Computer Science page (standards links, Class 4 Computer Coding endorsement, CyberMontana).', url: 'https://opi.mt.gov/Educators/Teaching-Learning/K-12-Content-Standards/Computer-Science' },
      { claim: 'Montana OPI: Montana Content Standards for Computer Science for K-12 (PDF, effective July 1, 2021).', url: 'https://opifiles.mt.gov/Portals/182/Page%20Files/K-12%20Content%20Standards%20%26%20Revision/Computer%20Science/CS%20K12.pdf' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Montana access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'Montana Fish, Wildlife & Parks: Montana State Parks Trailheads feature service.', url: 'https://services3.arcgis.com/Cdxz8r11hT0MGzg1/arcgis/rest/services/Montana_State_Parks_Trailheads/FeatureServer' },
      { claim: 'IANA tzdb northamerica: Montana under US mountain time (America/Denver) and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'That Montana requires a computer science course for graduation or in every school: no OPI page saying so was found; the standards are quoted as conditional on a district teaching CS.',
      'A second Montana time zone: the tzdb names only US mountain time for Montana.',
      'Code.org geography, school size, gender and race tabs, and the Code.org Montana advocacy page: not used.',
      'Trailhead names that reference historic violence and battlefield sites: not printed; only neutral park names are used.',
      'Official trail or park guidance from our counts: refused; FWP maps remain the reference.',
      'Names of individual Montana schools: not needed; counts only.',
      'That our classes satisfy any Montana standard, credit or endorsement: refused.',
      'Any affiliation with Montana OPI, Montana Fish, Wildlife and Parks, CyberMontana, Code.org or the College Board.'
    ]
  }
};
