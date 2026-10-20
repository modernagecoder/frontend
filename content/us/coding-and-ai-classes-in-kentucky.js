'use strict';
// Kentucky (cg- state page, US cluster Phase 4, row 77). Spine: Kentucky makes every graduate meet technology
// standards and demonstrate technology competency, while computer science itself is an elective with its own state
// standards; the regulations are read from the Legislative Research Commission because the Kentucky Department of
// Education site returned 403. Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources read raw 17 to
// 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-kentucky/):
//  - education.ky.gov: HTTP 403 on 17 October 2026 (kde-403.html). Not retried around.
//  - 704 KAR 3:305, Minimum requirements for high school graduation (apps.legislature.ky.gov): "at least
//    twenty-two (22) credits"; "ten (10) foundational credits": English/language arts 2, social studies 2,
//    mathematics 2 (Algebra I and Geometry), science 2, health 1/2, physical education 1/2, visual and performing
//    arts 1; "twelve (12) personalized credits" incl. "Academic and career interest standards-based learning
//    experiences - six (6) credits"; additional: "Successfully demonstrate performance-based competency in
//    technology", civics (KRS 158.141), financial literacy (KRS 158.1411); HISTORY ends "eff. 7-6-2026".
//  - 704 KAR 8:090, Required Kentucky Academic Standards for Technology: "Before graduating from a Kentucky public
//    high school, a student shall meet the minimum content requirements established in the Kentucky Academic
//    Standards for Technology."; edition "August 2020"; "eff. 3-2-2021".
//  - 704 KAR 8:010, Kentucky Academic Standards for Computer Science Elective: "Public schools offering a computer
//    science course or program shall meet the minimum content requirements"; edition "October 2018"; "eff. 2-1-2019".
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): KY 2024-2025,
//    270 of 358 (75.4%), source State Education Agency; trend 45% (2019-20), 51%, 63%, 79%, 75.9%, 75.4%;
//    participation 17,236 of 201,095 (8.57%) matched to the 2024-25 trend value; 11.46% in 2023-24; NCES Fall 2022.
//  - College Board, School Report of AP Exams by State 2023-24: Kentucky 266 (2023), 271 (2024).
//  - IANA tzdb northamerica: "eastern Kentucky" in US eastern time, "western Kentucky" in US central time;
//    America/Kentucky/Louisville; America/Kentucky/Monticello for Wayne County; "Wayne County, KY (from CST to EST)
//    ... 2000-10".
//  - Lexington-Fayette Urban County Government, Park feature service (LFUCG open data terms of use read,
//    lfucg-terms.txt): 110 park records. Our word counts: our-word-frequency.txt.
// Our calculations: our-derived-figures.txt. Lesson family: word frequency in a text column (tokenizing names).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'KENTUCKY', label: 'Kentucky', blurb: 'Kentucky requires technology competency to graduate and keeps computer science an elective; live classes and a Lexington park names project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-kentucky',
  code: 'aike',
  accent: '#367014',
  accentRationale: 'Kentucky: #367014, a bluegrass-pasture green from the US allocation table (alloc.tsv row 77), with enough contrast for text on the paper and clear of the other state accents',
  pageType: 'city',
  place: {
    name: 'Kentucky',
    eyebrow: 'Kentucky, United States',
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
  routeLabel: 'Kentucky',
  title: 'Coding and AI Classes in Kentucky | Live Online for Students',
  description: 'Live online coding and AI classes for Kentucky students: the technology rule every graduate meets, the computer science elective standards, and a Lexington data job.',
  ogDescription: 'Every Kentucky graduate must show technology competency; computer science stays an elective. The regulations, the access data and live online classes for Kentucky.',
  twitterDescription: 'Kentucky coding and AI classes, live online, built around the state technology rule and the CS elective.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Kentucky Students',
    description: 'Online block coding, Python, web development, AP Computer Science and AI for Kentucky students in grades K through 12, placed by level and taught live in English.'
  },

  h1: 'Coding and AI classes in Kentucky',
  capsuleQ: 'Is computer science required to graduate in Kentucky?',
  capsule: 'Not as a course. Under 704 KAR 3:305, every Kentucky graduate needs at least 22 credits and must demonstrate performance-based competency in technology, but computer science is not one of the ten foundational credits; it is an elective with its own state standards. Modern Age Coders teaches Kentucky students live online, from block coding to Python and AP Computer Science.',
  lead: 'Kentucky draws a line that many states blur. Technology is a graduation requirement: a separate regulation says no student leaves a Kentucky public high school without meeting the state&rsquo;s technology standards. Computer science, the part where students write programs, is optional, though any school that offers it must teach to the state&rsquo;s computer science elective standards. This page walks through both regulations as the Legislative Research Commission publishes them, the latest access and enrollment counts, the state&rsquo;s split between Eastern and Central Time, and a Python project that counts the words in the names of 110 Lexington parks.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Kentucky.',

  picks: {
    eyebrow: 'Course picks for Kentucky',
    h2: 'A first course for each stage of a Kentucky student&rsquo;s schooling',
    intro: 'Matched to grade and interest; the free lesson then confirms or changes the choice.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Grades K to 5', note: 'Drag-and-drop coding that turns sequences and loops into small games a child finishes and shares.' },
      { course: 'python-ai-kids-masterclass', band: 'Grades 5 to 8', note: 'Typed Python for younger learners, ending with small AI experiments they can explain.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 8 to 12', note: 'The computer science elective students may not find at school, including the Lexington park names project.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science Principles, its Create task and the May exam, taken alongside regular Kentucky coursework.' }
    ]
  },

  sections: [
    {
      id: 'rules', tint: '', eyebrow: 'The regulations',
      h2: 'Technology is required for every Kentucky graduate; computer science is an elective',
      intro: 'Kentucky&rsquo;s graduation rules live in the Kentucky Administrative Regulations. We read them on the Legislative Research Commission site on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'Three Kentucky regulations that shape computing in high school', head: ['Regulation', 'What it says', 'In force'], rows: [
          ['704 KAR 3:305, graduation', 'At least twenty-two (22) credits, including ten foundational and twelve personalized credits, plus technology competency, civics and financial literacy', 'Latest amendment effective July 6, 2026'],
          ['704 KAR 8:090, technology', 'Before graduating, a student shall meet the minimum content requirements of the Kentucky Academic Standards for Technology (August 2020 edition)', 'Effective March 2, 2021'],
          ['704 KAR 8:010, computer science', 'Public schools offering a computer science course or program shall meet the Kentucky Academic Standards for Computer Science Elective (October 2018 edition)', 'Effective February 1, 2019']
        ] },
        { kind: 'p', text: 'The ten foundational credits in 704 KAR 3:305 are English and language arts, social studies, mathematics (Algebra I and Geometry), science, health, physical education, and visual and performing arts. Computer science is not on that list. A student can still earn credit for it through the twelve personalized credits, which include six credits of academic and career interest learning experiences tied to the student&rsquo;s individual learning plan.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Technology, not coding', p: 'The regulation asks each student to &ldquo;successfully demonstrate performance-based competency in technology&rdquo;. That is a demonstration of skill, not a set course, and it does not require writing code.' },
          { h3: 'The elective standard', p: 'Kentucky does not order schools to offer computer science through these regulations. It says that if a school does offer it, the course must meet the state&rsquo;s elective standards, so quality has a floor wherever the course exists.' },
          { h3: 'A note on our sources', p: 'The Kentucky Department of Education site returned an access error to us on 17 October 2026. We quote only the regulation text published by the Legislative Research Commission and have not read the standards documents themselves.' }
        ] }
      ]
    },
    {
      id: 'counts', tint: 'tint', eyebrow: 'Access and enrollment',
      h2: 'Three Kentucky high schools in four offer computer science',
      intro: 'What two national datasets record for Kentucky: Code.org on courses and enrollment, the College Board on schools giving AP exams.',
      body: [
        { kind: 'table', caption: 'Kentucky public high schools with a computer science course, from the Code.org 2025 trend tab', head: ['Year', 'With a course'], rows: [
          ['2019 to 2020', '45%'],
          ['2020 to 2021', '51%'],
          ['2021 to 2022', '63%'],
          ['2022 to 2023', '79%'],
          ['2023 to 2024', '75.9%'],
          ['2024 to 2025', '75.4%, which is 270 of 358 schools']
        ] },
        { kind: 'table', mt: true, caption: 'How many Kentucky students take it, and AP schools', head: ['Measure', 'Kentucky', 'Source'], rows: [
          ['Students in a computer science class, 2024 to 2025', '17,236 of 201,095; we make that 8.57%', 'Code.org 2025, latest participation tab; total students from NCES, fall 2022'],
          ['Same share one year earlier, 2023 to 2024', '11.46%', 'Code.org 2025 participation trend'],
          ['Schools with AP exams, 2023 and 2024', '266, then 271', 'College Board report of AP exams by state, 2023-24']
        ] },
        { kind: 'p', text: 'Access climbed fast, from 45% to 79% in three years, then eased back slightly. Enrollment tells a sharper story: the share of high school students in a computer science class fell from 11.46% in 2023 to 2024 to 8.57% in 2024 to 2025. The data cannot say why. A change in how courses were counted could move the figure as easily as a change in student choices, so we print both years and leave the cause open. Code.org gives the state education agency as its source for the Kentucky access count, and asks to be cited as: Code.org (2025). 2025 State of AI + CS Education.' }
      ]
    },
    {
      id: 'names', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What word do Lexington park names share? Counting words in Python',
      intro: 'Lexington-Fayette Urban County Government publishes its park inventory as open data. Students take the NAME column, split every name into words and count them.',
      body: [
        { kind: 'table', caption: 'Word counts in the names of Lexington&rsquo;s 110 park records (our calculation, data downloaded 17 October 2026)', head: ['What we counted', 'Our result'], rows: [
          ['Park records, all with a name', '110'],
          ['Words after splitting on anything that is not a letter', '284 words, 168 different'],
          ['Names containing the word PARK', '91 of 110'],
          ['Next most common words', 'HILL 5, RUN 4'],
          ['Names containing the letters h-i-l-l anywhere', '8'],
          ['Names containing HILL as a whole word', '5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Split and count', p: 'Lower-case each name, cut it into words with a regular expression, and feed the words to a Counter. In five lines a student has a frequency table for a whole city&rsquo;s park system.' },
          { h3: 'Substring is not a word', p: 'Searching for &ldquo;hill&rdquo; as text finds 8 names, because it also catches SHILLITO PARK, WOODHILL PARK and MASTERSON HILLS PARK. Matching whole words finds 5. Students decide which question they were really asking.' },
          { h3: 'Apostrophes bite', p: 'A naive split turns CLAY&rsquo;S SPRING PARK into clay, s, spring and park, so a lone &ldquo;s&rdquo; shows up 3 times. Keeping the apostrophe inside the word fixes that; then SPRING and SPRINGS still count as two different words.' }
        ] },
        { kind: 'callout', h3: 'Whose numbers these are', p: 'Every count here is ours, from one download of the Lexington-Fayette Urban County Government park layer. The government&rsquo;s terms of use say the data comes as is and may contain errors, and the inventory changes over time. A school report that used these figures would need to say so, and so do we.' },
        { kind: 'p', text: 'The same file has a park-type column, which turns the project into a comparison. Our tally gives 45 neighborhood parks, 18 community parks, 11 special use sites and 11 natural areas. Does PARK appear less often in the names of natural areas? Answering that means grouping before counting, the step that turns a word list into an analysis.' }
      ]
    },
    {
      id: 'zones', tint: '', eyebrow: 'Class times',
      h2: 'Eastern Time in the east, Central Time in the west',
      intro: 'The IANA time zone database places eastern Kentucky in US eastern time and western Kentucky in US central time, and gives the state two zones of its own.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Your schedule, your choice', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'Kentucky&rsquo;s own zones', p: 'The database names America/Kentucky/Louisville for the Louisville area and America/Kentucky/Monticello for Wayne County, which it records moving from Central to Eastern Time in October 2000.' },
          { h3: 'India time, worked out', p: 'By our own count, noon on a summer day in Louisville is 9:30 p.m. in India, and noon in a western Kentucky town on Central Time is 10:30 p.m. there. US clocks change on November 1, 2026 and March 14, 2027.' }
        ] },
        { kind: 'spec', title: 'Why one county gets its own zone', p: 'If Wayne County had always been on Eastern Time it would not need a separate entry. Because it changed in 2000, a program that converts old timestamps there must know the history. That is the reason the tz database keeps a zone for a single Kentucky county, and a neat lesson in why programmers never hard-code offsets.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From technology skills to real programming',
    intro: 'Kentucky asks every student for technology competency; these steps go further, into code. Grades are approximate.',
    cols: [
      { band: 'Grades K to 5', h3: 'Logic in blocks', p: 'Ordering steps, repeating them and reacting to events, practised in games and animations.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 6 to 8', h3: 'Words become code', p: 'Python and JavaScript, small text and data programs, and a first web page of their own.', courses: ['python-ai-kids-masterclass', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 9 to 10', h3: 'An elective of their own', p: 'The computer science a school may not offer: functions, files, data and projects like the park word count.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Grades 11 to 12', h3: 'AP and AI', p: 'AP Computer Science Principles or A, then building and testing machine learning models.', courses: ['ap-computer-science-principles-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Kentucky requires technology skill. Is AI skill the same thing?',
    intro: 'Using a tool and understanding how it reaches an answer are two different abilities.',
    p1: 'Ask an AI model how many Lexington park names contain the word hill and it might say 8 or 5, and both can be defended. Which one is right depends on whether you meant a substring or a whole word. A student who has written the counting code sees the ambiguity at once; a student who has only used the tool may never notice it exists.',
    p2: 'Kentucky&rsquo;s technology requirement makes sure graduates can use digital tools. Programming adds the layer underneath: knowing what the tool actually did. With that, AI becomes a fast assistant whose answers a student can check, instead of an authority whose answers they must accept.',
    closer: 'The technology standard gets every Kentucky student to the door; writing code is how they look inside the machine.',
    blogAnchor: 'the case for learning to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Pikeville to Paducah, one live classroom',
    intro: 'A state that spans two time zones still fits in one online class.',
    cells: [
      { h3: 'Learn at home', p: 'Students in the mountains of eastern Kentucky and the river towns of the west attend from home, with no drive to a distant program.' },
      { h3: 'Aligned to US school life', p: 'Teachers use US grades and the school calendar, and can connect projects to a school elective where one exists. Graded school assignments remain the student&rsquo;s own.' },
      { h3: 'Free first session', p: 'A practical task with a teacher, then our recommendation of level, course and time. We take no card details for it.' },
      { h3: 'Level-matched groups', p: 'Fifteen to twenty students working at the same stage, from Kentucky and other states.' },
      { h3: 'Private lessons', p: 'Individual teaching for students who want speed, AP preparation or a particular project.' },
      { h3: 'Eastern or Central', p: 'Bookings name the zone where the family lives, so a household in the east and one in the west each see their own clock time.' }
    ],
    spec: { title: 'No Kentucky campus', p: 'Modern Age Coders has no office or classroom in Kentucky and does not claim one. All classes are live online, taught from India, and need only a computer, sound and a reliable internet connection.' }
  },

  fees: {
    h2: 'Fees for Kentucky students',
    intro: 'One price list for the whole Commonwealth.',
    first: 'A full first lesson with no charge, finishing with a suggested level, course and class time.',
    group: 'A month of live lessons in a group of fifteen to twenty learners at the same level.',
    private: 'A month of live lessons taught one to one.',
    closer: 'Every family outside India pays the same rate in US dollars, whether in Lexington or Hazard. Nothing is billed until after the free lesson and your agreement on the course and timing; the pricing page sets out holidays and missed lessons.'
  },

  reviewsH2: 'What families say in Google reviews',

  book: {
    h2: 'Arrange a free lesson for a Kentucky student',
    intro: 'Tell us the grade and what your student likes. A first grader might start a block puzzle; a sophomore might load the Lexington park names and build the word counter above.',
    success: 'Thank you. Someone from the team will be in touch about a class for Kentucky.'
  },

  faq: {
    h2: 'Kentucky families ask',
    intro: 'Answers grounded in Kentucky regulations and published data.',
    items: [
      { q: 'How many credits does a Kentucky diploma need?', a: 'At least twenty-two (22), under 704 KAR 3:305: ten foundational credits and twelve personalized credits, plus the technology, civics and financial literacy requirements.' },
      { q: 'Is computer science one of the Kentucky foundational credits?', a: 'No. The ten foundational credits cover English and language arts, social studies, mathematics, science, health, physical education, and visual and performing arts. Computer science is not among them.' },
      { q: 'What is the Kentucky technology requirement?', a: 'A graduate must demonstrate performance-based competency in technology, and 704 KAR 8:090 requires meeting the Kentucky Academic Standards for Technology before graduating.' },
      { q: 'Does Kentucky have computer science standards?', a: 'Yes. 704 KAR 8:010 incorporates the Kentucky Academic Standards for Computer Science Elective, October 2018, and public schools offering a computer science course must meet them.' },
      { q: 'How many Kentucky high schools offer computer science?', a: 'The Code.org 2025 sheet counts 270 of 358 Kentucky public high schools in 2024 to 2025, or 75.4%. That year 17,236 high school students were enrolled.' },
      { q: 'Which time zone do you use for Kentucky classes?', a: 'Eastern or Central, matching your part of the state. The tz database puts eastern Kentucky on Eastern Time and western Kentucky on Central Time.' },
      { q: 'What days and times can my student attend?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Will your classes count toward a Kentucky diploma?', a: 'Not directly. Credit is a school and district decision. We teach the skills and projects, and anything graded at school is the student\'s own work.' },
      { q: 'Are you based in Kentucky?', a: 'No. Our teachers work from India and every lesson happens live over the internet; there are no Kentucky premises.' },
      { q: 'What do lessons cost?', a: 'The fees panel shows a free first lesson, a monthly group price and a monthly private price. You are billed only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'Keep exploring',
    h2: 'More reading for Kentucky families',
    html: 'Younger coders can try <a class="cg-inline-link" href="/python-games-for-kids">Python games for kids</a> or browse <a class="cg-inline-link" href="/coding-classes-for-elementary-students">coding classes for elementary students</a>. Teens interested in security can read <a class="cg-inline-link" href="/cyberpatriot-preparation">CyberPatriot preparation</a>, and every US guide is listed on the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a>.',
    waLabel: 'Chat on WhatsApp'
  },

  footerHeading: 'Kentucky and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/cyberpatriot-preparation', label: 'CyberPatriot' },
    { href: '/python-games-for-kids', label: 'Python games' }
  ],

  personalityCss: `
.cg-root.cg-aike .cg-hero-grid { align-items: center; gap: clamp(0.9rem, 2.6vw, 2rem); }
.cg-root.cg-aike .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.1; }
.cg-root.cg-aike .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-aike .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.82rem; }
.cg-root.cg-aike .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.008em; }
.cg-root.cg-aike .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-aike .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aike .cg-grid-3 { gap: clamp(0.8rem, 2.2vw, 1.6rem); }
.cg-root.cg-aike .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
`,

  dossier: {
    curriculumAuthority: 'Kentucky, read raw 17 to 18 October 2026 on apps.legislature.ky.gov (education.ky.gov returned 403): 704 KAR 3:305 (22 credits; ten foundational and twelve personalized credits; technology competency, civics, financial literacy; eff. 7-6-2026); 704 KAR 8:090 (Kentucky Academic Standards for Technology, August 2020, required before graduating; eff. 3-2-2021); 704 KAR 8:010 (Computer Science Elective standards, October 2018; eff. 2-1-2019). Code.org (2025) access 270 of 358, 75.4%, 2024-25, trend 45% to 75.4%; participation 17,236 of 201,095, 8.57%, and 11.46% in 2023-24; College Board AP schools 266 and 271; IANA America/Kentucky/Louisville, America/Kentucky/Monticello, Wayne County CST to EST 2000-10.',
    localProject: 'Lexington-Fayette Urban County Government Park feature service (LFUCG open data terms of use), 110 records downloaded 17 October 2026 and checked against the count query. Our counts: 284 words, 168 distinct; PARK in 91 names; HILL 5 as a word, 8 as a substring; RUN 4; naive split leaves s 3 times; park types neighborhood 45, community 18, special use 11, natural area 11. Lesson family: word frequency and tokenizing names.',
    requiredMentions: [
      '704 KAR 3:305',
      'twenty-two (22) credits',
      'performance-based competency in technology',
      '704 KAR 8:090',
      '704 KAR 8:010',
      'Kentucky Academic Standards for Computer Science Elective',
      '270 of 358',
      '17,236 of 201,095',
      'America/Kentucky/Monticello',
      'SHILLITO PARK',
      '91 of 110'
    ],
    sources: [
      { claim: 'Kentucky Legislative Research Commission: 704 KAR 3:305, minimum requirements for high school graduation.', url: 'https://apps.legislature.ky.gov/law/kar/titles/704/003/305/' },
      { claim: 'Kentucky Legislative Research Commission: 704 KAR 8:090, Required Kentucky Academic Standards for Technology.', url: 'https://apps.legislature.ky.gov/law/kar/titles/704/008/090/' },
      { claim: 'Kentucky Legislative Research Commission: 704 KAR 8:010, Kentucky Academic Standards for Computer Science Elective.', url: 'https://apps.legislature.ky.gov/law/kar/titles/704/008/010/' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Kentucky access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'Lexington-Fayette Urban County Government: Park feature service.', url: 'https://services1.arcgis.com/Mg7DLdfYcSWIaDnu/arcgis/rest/services/Park/FeatureServer' },
      { claim: 'IANA tzdb northamerica: Kentucky eastern and central time, Louisville and Monticello zones.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Anything from the Kentucky Department of Education website: education.ky.gov returned HTTP 403 on 17 October 2026 and was not retried around; the standards documents themselves were not read.',
      'A reason for the fall in Kentucky participation from 11.46% to 8.57%: the data gives none, so none is offered.',
      'A county-by-county Kentucky time zone list: the tzdb text says only eastern and western Kentucky plus the named zones, so no list is printed.',
      'The 1999 newspaper quote about the Lake Cumberland counties in the tzdb comments: dated and second-hand, not used.',
      'Code.org Graduation, Geography, Gender and Race tabs and the Code.org state policy summaries: not used.',
      'Names of Kentucky schools and the park named for a school building: not printed.',
      'That our classes count toward 704 KAR 3:305 credits or meet the technology requirement: refused.',
      'Any affiliation with the Kentucky Department of Education, the Legislative Research Commission, LFUCG, Code.org or the College Board.'
    ]
  }
};
