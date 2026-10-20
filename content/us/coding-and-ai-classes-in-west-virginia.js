'use strict';
// West Virginia (cg- state page, US cluster Phase 4, row 105). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: West Virginia has written a one-credit computer science graduation requirement into law, starting with the
// ninth graders of 2027 to 2028. What does the statute say, what counts as computer science, and what do the published
// figures show? Sources read raw on 17 and 18 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-and-ai-classes-in-west-virginia/):
//  - wvde.us (West Virginia Department of Education) returned 403 on 17 October 2026; code.wvlegislature.gov returned
//    403 on 18 October 2026. Neither retried (BLOCKED.txt). The enrolled bill was read from www.wvlegislature.gov instead,
//    as statute text, not department guidance.
//  - West Virginia Legislature, Enrolled Committee Substitute for House Bill 2411, 2025 Regular Session (hb2411 sub1 enr.pdf):
//    "[Passed April 11, 2025; in effect 90 days from passage (July 10, 2025)]"; amends 18-2-9; new subsection (g):
//    "Beginning with the entering ninth grade class in the 2027-2028 school year, a public high school student shall be
//    required to earn one unit of credit in a high school computer science course before the student graduates.";
//    definition "the study of computers, programming, and algorithms, including their principles, their hardware and
//    software designs, their implementation, and their impact on society", excluding "keyboarding, word processing,
//    digital literacy, or accessing the internet"; "may be earned in grades eight through twelve"; course must "Meet or
//    exceed the curriculum standards established by the State Board of Education" and be in a traditional classroom unless
//    not feasible; "substitute for one math credit or one personalized education plan credit"; approved for one CTE credit
//    if relevant to the program of study; math-equivalent transcript notation "for the purpose of admission to a higher
//    education institution in this state"; "Beginning in August of 2026, the State Board of Education shall make available
//    to all public schools a list of course options". Bill status page: "Approved by Governor 4/30/2025", "Chapter 96,
//    Acts, Regular Session, 2025".
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): access 46% (2018-19),
//    75%, 76%, 78%, 78%, then 77.7% in the 2023-24 column with a dash for 2024-25; the Most Recent tab gives the same 77.7%
//    as 94 of 121 and labels it 2024-2025 (disagreement recorded, no single year asserted). Participation 3.6% (2020-21),
//    5.6%, 4.2%, dash, 2.67% (2024-25: 2,051 of 76,900; denominator NCES fall 2022).
//  - College Board, School Report of AP Exams by State 2023-24: WV schools with AP exams 113 (2023), 111 (2024); public 98
//    and 99; non-public 15 and 12.
//  - IANA tzdb: America/New_York "Eastern (most areas)"; November 1, 2026 and March 14, 2027.
//  - WVDOT, West Virginia Trail Inventory feature service ("provided for general reference and is not warranted in any way";
//    item says "Data last updated: August 28, 2021" and "over 5,000 miles"), 3,454 records downloaded 18 October 2026 in two
//    pages, count verified. Ours: hike Yes 3,218 (93.2%), bike Yes 1,444 (41.8%), horse Yes 445 (12.9%), railtrail Yes 103
//    (3.0%), ada Yes 83 (2.4%); trailStatu Closed 14; motorized labels include ' No' and 'No' followed by a backspace character;
//    41 surface categories whose whole-number percentages sum to 99; Shape__Length (UTM metres) total 6,335.3 miles,
//    trailLengt field total 6,642.5.
// Lesson family: percentages, rounding and denominators (why rounded parts do not add to 100, and which total to divide by).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'WEST VIRGINIA', label: 'West Virginia', blurb: 'Coding and AI for West Virginia students ahead of the one-credit CS graduation rule, with a statewide trail inventory data project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-west-virginia',
  code: 'awv',
  accent: '#943543',
  accentRationale: 'West Virginia: a muted rhododendron red, #943543, allocated in alloc.tsv for row 105, deep enough to keep body-text contrast on the paper',
  pageType: 'city',
  place: {
    name: 'West Virginia',
    eyebrow: 'West Virginia, United States',
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
  routeLabel: 'West Virginia',
  title: 'Coding and AI Classes in West Virginia | Live Online',
  description: 'Live online coding and AI classes for West Virginia students: the one-credit CS graduation law from 2027 to 2028, the access figures and a statewide trails project.',
  ogDescription: 'From the ninth graders of 2027 to 2028, West Virginia students need one computer science credit to graduate. The law, the figures, and live online classes.',
  twitterDescription: 'West Virginia coding and AI classes, live online, ahead of the one-credit CS requirement.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for West Virginia Students',
    description: 'Live online Scratch, Python, web development, AP Computer Science and AI for West Virginia students, elementary through high school, placed by a free first lesson.'
  },

  h1: 'Coding and AI classes in West Virginia',
  capsuleQ: 'Will West Virginia students need computer science to graduate?',
  capsule: 'Yes, starting with the class that enters ninth grade in the 2027 to 2028 school year. House Bill 2411, passed April 11, 2025, requires one unit of credit in a high school computer science course, which may be earned in grades eight through twelve. Modern Age Coders teaches coding and AI live online to West Virginia students, from first blocks to AP.',
  lead: 'West Virginia&rsquo;s Legislature did not leave the definition loose. Its 2025 law says what computer science is (computers, programming and algorithms, how they are designed and built, and their impact on society) and, just as usefully, what it is not: keyboarding, word processing, digital literacy and getting online do not count. The first students covered are, by our arithmetic, the eighth graders of the 2026 to 2027 school year, and the State Board of Education was required to publish a list of qualifying courses from August 2026. This page sets out the statute as enrolled, the published access and enrollment figures with an honest note on where they disagree, and a statewide data project on the trail inventory the state transportation department publishes.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in West Virginia.',

  picks: {
    eyebrow: 'Course picks for West Virginia',
    h2: 'Four courses for a West Virginia student getting ready',
    intro: 'One credit is the minimum. These are routes to doing that credit well, or going far beyond it, with the level set in a free first lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades 2 to 6', note: 'Programs built from blocks that teach algorithms and debugging long before a high school course begins.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Real programming in Python, the kind of study of programming and algorithms the new law describes.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 9 to 12', note: 'AP Computer Science Principles, its Create task and exam, as preparation alongside a school course.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 10 to 12', note: 'Machine learning from first principles, including the impact on society that the statute names.' }
    ]
  },

  sections: [
    {
      id: 'law', tint: '', eyebrow: 'House Bill 2411',
      h2: 'The one-credit rule, line by line from the enrolled bill',
      intro: 'The Department of Education site turned our request away on 17 October 2026, so this is the statute itself, from the enrolled Committee Substitute for House Bill 2411 on the Legislature&rsquo;s website.',
      body: [
        { kind: 'table', caption: 'Computer science in West Virginia Code 18-2-9, subsection (g), as amended by House Bill 2411 (2025 Regular Session)', head: ['Provision', 'What the enrolled bill says'], rows: [
          ['Passage', 'Passed April 11, 2025; in effect 90 days from passage, July 10, 2025. The bill status page records approval by the Governor on April 30, 2025, as Chapter 96 of the 2025 Acts'],
          ['Who is covered', 'Beginning with the entering ninth grade class in the 2027-2028 school year, each public high school student must earn one unit of credit in a high school computer science course before graduating'],
          ['When it can be earned', 'In grades eight through twelve'],
          ['Course quality', 'High quality, meeting or exceeding the State Board of Education&rsquo;s curriculum standards'],
          ['Format', 'A traditional classroom setting, with blended or online formats only where a classroom is not feasible, without interfering with homeschool or virtual students&rsquo; schedules'],
          ['Substitution', 'The credit may substitute for one math credit or one personalized education plan credit'],
          ['Career Technical Education', 'The credit is approved for one CTE credit where it is relevant to the student&rsquo;s program of study'],
          ['Transcript', 'Where it replaces math, the district notes it as equivalent to a high school math course for admission to a West Virginia higher education institution'],
          ['Course list', 'Beginning in August of 2026, the State Board must make a list of qualifying course options available to all public schools and keep it updated']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'This year&rsquo;s eighth graders', p: 'Students entering ninth grade in fall 2027 are the first cohort. By our arithmetic most of them are in eighth grade during 2026 to 2027, a year in which the law already lets the credit be earned.' },
          { h3: 'An eighth-grade option', p: 'Because the credit counts from grade eight, a middle school student who takes a qualifying course early clears the requirement before high school begins, freeing a high school slot for AP or a second CS course.' },
          { h3: 'The list decides', p: 'Which courses qualify is set by the State Board&rsquo;s list. We have not read it, because the department site was unreachable for us; ask the school counselor for the current version.' }
        ] }
      ]
    },
    {
      id: 'definition', tint: 'deep', eyebrow: 'What counts',
      h2: 'Programming counts. Keyboarding does not.',
      intro: 'The statute&rsquo;s definition sorts activities sharply, which helps families judge any class, ours included.',
      body: [
        { kind: 'table', caption: 'The statutory definition of computer science, and examples of each side (the examples column is ours)', head: ['The law says', 'Wording in the bill', 'Example activities (ours)'], rows: [
          ['Included', 'The study of computers, programming, and algorithms, including their principles, their hardware and software designs, their implementation, and their impact on society', 'Writing and debugging a program, designing an algorithm, explaining how a processor runs code, judging who an AI model treats unfairly'],
          ['Not included', 'The study of everyday uses of computers and computer applications, such as keyboarding, word processing, digital literacy, or accessing the internet', 'Typing drills, formatting a document, building slides, searching the web']
        ] },
        { kind: 'p', text: 'The line is useful well beyond school. A summer &ldquo;tech camp&rdquo; that teaches slide design is a fine thing, but under this definition it is not computer science. A course where students write programs, test them against expected output and explain the algorithm is. When a West Virginia family compares options, asking &ldquo;how much of the time is spent writing and testing code?&rdquo; gets close to the statute&rsquo;s own test.' },
        { kind: 'callout', h3: 'Our classes are not the credit', p: 'The required credit comes from a high school computer science course that meets the State Board&rsquo;s standards. Modern Age Coders is not on any state list and does not award West Virginia credit. Our classes build the skill underneath, so the school course goes smoothly and students who want more get much more.' }
      ]
    },
    {
      id: 'numbers', tint: 'tint', eyebrow: 'The figures',
      h2: 'Access near three in four, enrollment under three in a hundred',
      intro: 'Statewide values drawn from two published sources: the Code.org (2025) raw sheet and the College Board school report on AP exams.',
      body: [
        { kind: 'table', caption: 'Mountain State high schools with a foundational CS course on offer, Code.org (2025) year-by-year values', head: ['Year', 'Reported', 'Comment'], rows: [
          ['Fall 2018 school year', '46%', 'Lowest value in the series'],
          ['Fall 2019 school year', '75%', ''],
          ['Fall 2020 school year', '76%', ''],
          ['Fall 2021 school year', '78%', ''],
          ['Fall 2022 school year', '78%', 'Same as the year before'],
          ['Latest in the 2025 data', '77.7%, which is 94 of 121 high schools', 'The year-by-year tab files it under 2023 to 2024; the most recent tab labels it 2024 to 2025']
        ] },
        { kind: 'table', mt: true, caption: 'Enrollment and AP in West Virginia, as published', head: ['Measure', 'West Virginia', 'Source'], rows: [
          ['High school students in CS, 2024 to 2025', '2,051 of 76,900, or 2.67%', 'Code.org (2025); student total from NCES, fall 2022'],
          ['Earlier enrollment shares', '3.6% (2020 to 2021), 5.6% (2021 to 2022), 4.2% (2022 to 2023), none for 2023 to 2024', 'Code.org (2025)'],
          ['Schools with AP exams', '113 in 2023, 111 in 2024', 'College Board, School Report of AP Exams by State 2023-24'],
          ['Public and non-public', '98 and 15 in 2023; 99 and 12 in 2024', 'College Board']
        ] },
        { kind: 'p', text: 'The gap between the two lines is the reason the new law exists, even if the law does not say so in those words: most West Virginia high schools offered a CS course in the latest figures, yet fewer than three in every hundred high school students were enrolled. We do not know why enrollment moved between years, and the data does not say, so we describe the numbers and stop there.' },
        { kind: 'p', text: 'One more caution, and it doubles as a lesson. The sheet&rsquo;s two tabs give the same 77.7% different school years. Rather than pick one, we print both labels. Readers can cite the figure as Code.org (2025). 2025 State of AI + CS Education; we quote West Virginia values from its raw sheet and do not republish the dataset.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What share of West Virginia&rsquo;s trails welcome a bike? Percentages that refuse to add up',
      intro: 'The West Virginia Division of Highways publishes a statewide Trail Inventory as open GIS data. We downloaded all 3,454 trail records on 18 October 2026 and used them to teach percentages properly.',
      body: [
        { kind: 'table', caption: 'Trail records marked Yes for each use, as a share of all 3,454 records (our calculation)', head: ['Use field', 'Records marked Yes', 'Our share, one decimal', 'Our share, whole number'], rows: [
          ['hike', '3,218', '93.2%', '93%'],
          ['bike', '1,444', '41.8%', '42%'],
          ['horse', '445', '12.9%', '13%'],
          ['railtrail', '103', '3.0%', '3%'],
          ['ada', '83', '2.4%', '2%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Pick the denominator first', p: 'Every share above divides by 3,454 records, not by trails or by miles. A long trail split into many segments counts many times, so &ldquo;41.8% of records allow bikes&rdquo; is not the same claim as &ldquo;41.8% of trail miles&rdquo;. Students write the denominator into every sentence.' },
          { h3: 'Rounding never sums cleanly', p: 'The surface field holds 41 different labels. Round each share to a whole percent and the 41 numbers add up to 99, not 100. Nothing is missing; rounding each part separately loses fractions. Students prove it in code, then learn why published tables often say &ldquo;may not sum to 100&rdquo;.' },
          { h3: 'Invisible characters', p: 'Most motorized values read Yes or No, but one reads &ldquo; No&rdquo; with a leading space and another is &ldquo;No&rdquo; followed by an invisible backspace character. A plain equality test misses both, so students strip and normalize text before counting.' }
        ] },
        { kind: 'p', text: 'Then a question with no tidy answer. The inventory&rsquo;s own description speaks of over 5,000 miles of trails. Our total of the geometry lengths, converted from metres, comes to 6,335.3 miles, and the separate trail length field adds up to 6,642.5. Three numbers for one network. Shared segments, measurement methods and the age of the data (the item says it was last updated on August 28, 2021) could all play a part; we cannot say which, and neither can a student without more evidence. Writing that down plainly is the point.' },
        { kind: 'callout', h3: 'Ours, not official', p: 'Every percentage and mile figure in this section is our calculation from one download. The Division of Highways says the map is provided for general reference and is not warranted in any way, and none of these numbers is an official trail statistic.' }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Class times',
      h2: 'From the Northern Panhandle to Bluefield, one Eastern clock',
      intro: 'West Virginia uses the IANA time zone America/New_York, the zone the tz database labels &ldquo;Eastern (most areas)&rdquo;.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Same time statewide', p: 'Wheeling, Charleston, Morgantown and Huntington keep one clock, so a West Virginia batch never has to reconcile two local times.' },
          { h3: 'Teachers in India', p: 'Our teachers keep India time all year. Because only the US side changes its clocks, the distance between the two shifts by an hour in November and again in March.' },
          { h3: 'Dates this year', p: 'Clocks fall back on November 1, 2026 and spring forward on March 14, 2027, following the US rule in the tz database. We confirm every class time in Eastern Time.' }
        ] },
        { kind: 'spec', title: 'Make the clock a coding exercise', p: 'A student who schedules reminders with Python&rsquo;s zoneinfo and America/New_York sees the November change handled automatically; one who adds a fixed number of hours sees the reminder arrive an hour off.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Building toward the credit, and past it',
    intro: 'Treat the grade bands loosely; a short placement task in the opening lesson decides the real starting point.',
    cols: [
      { band: 'Grades 2 to 5', h3: 'Logic through play', p: 'Blocks, sequences and loops in short games that make algorithms visible.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Grades 6 to 8', h3: 'First typed programs', p: 'Python and simple web pages, ready for an eighth-grade CS credit.', courses: ['python-ai-kids-masterclass', 'html-css-course-for-beginners-build-real-websites'] },
      { band: 'Grades 9 to 10', h3: 'The required credit and data', p: 'Deeper Python, data work on state datasets, and habits that make a CS course straightforward.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Grades 11 to 12', h3: 'AP and AI', p: 'AP Computer Science Principles or A, and machine learning built and checked by hand.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'The law counts programming, not prompting',
    intro: 'West Virginia&rsquo;s definition is a quiet answer to the question of whether AI makes coding obsolete.',
    p1: 'The statute names programming, algorithms and the impact of computing on society. An AI assistant can produce a trail-percentage script in seconds, but it will divide by whatever total it finds first, round however it likes, and miss the backspace hiding inside a label. Knowing that those choices exist is exactly the study of programming and algorithms the law describes.',
    p2: 'In our AI units students use assistants in the open, then check every line: what is the denominator, what happened in rounding, which rows were silently skipped? A student who can audit generated code is learning computer science; one who only accepts it is closer to the everyday computer use the statute excludes.',
    closer: 'The required credit ensures every student meets programming once; the habit of questioning output is what makes that meeting count.',
    blogAnchor: 'is learning to code still worth it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Mountain roads stay out of the timetable',
    intro: 'In a state where the next town can be a long drive away, a live online class reaches every student the same way.',
    cells: [
      { h3: 'Anywhere in the state', p: 'A student in Elkins and one in Parkersburg can join the same live session from home, with no evening drive to a city.' },
      { h3: 'Fits the school year', p: 'Teachers plan in US grades and around the West Virginia school calendar, and help students prepare for the required course. Anything the school marks is done by the student, never by us.' },
      { h3: 'Opening lesson at no cost', p: 'A first session of honest coding with a teacher tells us where to start; we then suggest a course and a slot. No card is requested.' },
      { h3: 'Groups by level', p: 'Batches of fifteen to twenty, sorted by skill rather than age, with classmates from many states.' },
      { h3: 'One to one', p: 'A teacher for one student, for those who want speed, AP preparation or support after a hard unit.' },
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'Taught online, from India', p: 'There is no Modern Age Coders site anywhere in West Virginia and we claim none. Every class is live over video, and a student needs a computer, sound and a dependable connection.' }
  },

  fees: {
    h2: 'Fees for West Virginia families',
    intro: 'The full list, with nothing added later.',
    first: 'A complete first lesson free, finishing with a recommended course, level and class time.',
    group: 'A month of live classes in a group of fifteen to twenty students at a similar stage.',
    private: 'A month of live classes with one teacher and one student.',
    closer: 'US families pay in US dollars, and the fee is the same in Martinsburg as in Logan. Nothing is charged before the free lesson and an agreed course and time; the pricing page explains holidays and missed classes.'
  },

  reviewsH2: 'What West Virginia families can read on our Google listing',

  book: {
    h2: 'Ask for a free first lesson in West Virginia',
    intro: 'Share a grade and an interest or two. A fourth grader might start with a Scratch game, an eighth grader with Python ahead of the new credit, and a high schooler with the trail inventory.',
    success: 'Thank you. The team will be in touch soon about a class for your West Virginia student.'
  },

  faq: {
    h2: 'West Virginia computer science questions',
    intro: 'What families ask now that the one-credit rule is law.',
    items: [
      { q: 'Is computer science required to graduate in West Virginia?', a: 'Yes, for students entering ninth grade in the 2027 to 2028 school year and after. House Bill 2411 requires one unit of credit in a high school computer science course before graduation.' },
      { q: 'When did the West Virginia CS law pass?', a: 'The enrolled bill says it passed April 11, 2025 and took effect July 10, 2025. The bill status page records approval by the Governor on April 30, 2025.' },
      { q: 'Can my child earn the CS credit in middle school?', a: 'The law allows the credit to be earned in grades eight through twelve, so an eighth grader can take a qualifying course.' },
      { q: 'Does the CS credit replace a math credit?', a: 'It may substitute for one math credit or one personalized education plan credit, and where it replaces math the transcript notes it as equivalent to a high school math course for West Virginia college admission.' },
      { q: 'Does typing or word processing count as computer science?', a: 'No. The law excludes everyday computer use such as keyboarding, word processing, digital literacy and accessing the internet.' },
      { q: 'How many West Virginia high schools offer computer science?', a: 'The latest Code.org figure is 94 of 121 high schools, or 77.7%. The 2025 sheet files it under 2023 to 2024 in one tab and 2024 to 2025 in another.' },
      { q: 'Will your classes count as the required credit?', a: 'No. Only qualifying high school courses on the State Board\'s list count. We teach the skills underneath it, and anything a school grades is completed by the student alone.' },
      { q: 'When are classes for West Virginia students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are confirmed in Eastern Time.', boiler: true },
      { q: 'Do you have a West Virginia location?', a: 'No. Teaching is live online from India, and no office or classroom in West Virginia is claimed.', boiler: true },
      { q: 'Where do I find the fees?', a: 'Scroll up to the fees panel. The opening lesson is free; after it, families choose a monthly group plan or monthly private lessons, and the first bill follows that choice.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Next reads for West Virginia students',
    html: 'Students planning ahead for AP can compare <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a> and <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>. Middle schoolers eyeing the eighth-grade option can read about <a class="cg-inline-link" href="/coding-classes-for-middle-school-students">coding classes for middle school students</a>, and homeschool families can see <a class="cg-inline-link" href="/homeschool-computer-science-high-school-credit">homeschool computer science and high school credit</a>. North Carolina has its own graduation rule, explained on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina page</a>, and every state links from the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'West Virginia and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/coding-classes-for-middle-school-students', label: 'Middle school coding' },
    { href: '/homeschool-computer-science-high-school-credit', label: 'Homeschool CS credit' }
  ],

  personalityCss: `
.cg-root.cg-awv .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.3rem); }
.cg-root.cg-awv .cg-hero h1 { font-weight: 780; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-awv .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-awv .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.014em; }
.cg-root.cg-awv .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-awv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-awv .cg-table th { font-weight: 700; }
.cg-root.cg-awv .cg-grid-3 { gap: clamp(0.9rem, 2.1vw, 1.6rem); }
.cg-root.cg-awv .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-awv .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'West Virginia, read raw 17 and 18 October 2026. wvde.us 403 and code.wvlegislature.gov 403 (not retried). West Virginia Legislature, Enrolled Committee Substitute for House Bill 2411, 2025 Regular Session, from www.wvlegislature.gov (passed April 11, 2025; effective July 10, 2025; amends 18-2-9; entering ninth grade class 2027-2028; one unit of CS credit; definition with exclusions; grades eight through twelve; State Board standards; classroom setting; substitute one math or PEP credit; CTE credit if relevant; transcript math equivalence for WV higher education admission; course list from August 2026); bill status page (Governor approval 4/30/2025; Chapter 96, Acts 2025). Code.org (2025) access 46%, 75%, 76%, 78%, 78%, 77.7% (94 of 121, year labels disagree); participation 3.6%, 5.6%, 4.2%, dash, 2.67% (2,051 of 76,900). College Board AP schools 113 and 111; public 98 and 99; non-public 15 and 12. IANA America/New_York.',
    localProject: 'WVDOT West Virginia Trail Inventory (general reference, not warranted; last updated August 28, 2021; "over 5,000 miles"), 3,454 records downloaded 18 October 2026, count verified. Ours: hike 3,218 (93.2%), bike 1,444 (41.8%), horse 445 (12.9%), railtrail 103 (3.0%), ada 83 (2.4%); 41 surface labels whose whole-number shares sum to 99; dirty motorized labels (leading space, backspace character); geometry total 6,335.3 miles and trailLengt total 6,642.5, labelled ours. Lesson family: percentages, rounding and denominators.',
    requiredMentions: [
      'House Bill 2411',
      'April 11, 2025',
      'July 10, 2025',
      'grades eight through twelve',
      'keyboarding, word processing, digital literacy',
      'one personalized education plan credit',
      '94 of 121',
      '2,051 of 76,900',
      '113 in 2023, 111 in 2024',
      '3,454 records',
      'add up to 99',
      '6,335.3 miles'
    ],
    sources: [
      { claim: 'West Virginia Legislature: Enrolled Committee Substitute for House Bill 2411 (2025 Regular Session), amending 18-2-9.', url: 'https://www.wvlegislature.gov/Bill_Text_HTML/2025_SESSIONS/RS/bills/hb2411%20sub1%20enr.pdf' },
      { claim: 'West Virginia Legislature: HB 2411 bill status, Governor approval and chapter number.', url: 'https://www.wvlegislature.gov/Bill_Status/Bills_history.cfm?input=2411&year=2025&sessiontype=RS&btype=bill' },
      { claim: 'Code.org (2025), 2025 State of AI + CS Education data: West Virginia access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'WVDOT: West Virginia Trail Inventory feature service.', url: 'https://services2.arcgis.com/xLpB90lOmCXYDAWo/arcgis/rest/services/GTI_PUB_UTM_DBO_WV_Trail_Inventory/FeatureServer' },
      { claim: 'IANA tzdb northamerica and zone1970.tab: US rule and America/New_York.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Anything from wvde.us or code.wvlegislature.gov: both returned 403; the State Board course list and WV CS standards are not quoted.',
      'A single school year for 94 of 121: the Code.org year-by-year tab says 2023 to 2024 and the most recent tab says 2024 to 2025; both labels printed, neither asserted.',
      'Any cause for enrollment changes, or a claim about why the Legislature acted: not in the sources.',
      'Names of the bill sponsors and of individuals in the trail inventory description: not needed.',
      'An official statewide trail mileage: the inventory text says over 5,000 miles; our two sums disagree with it and each other; none presented as official.',
      'Code.org geography, size, gender or race figures and the Code.org state narrative page: not used.',
      'That our classes earn the West Virginia CS credit: refused.',
      'Any affiliation with the West Virginia Department of Education, the Legislature, WVDOT, Code.org or the College Board.'
    ]
  }
};
