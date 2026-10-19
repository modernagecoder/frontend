'use strict';
// Arkansas (cg- state page, US cluster Phase 4, row 66). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Arkansas went further than almost any state: a course in every high school since 2015, a one-credit graduation
// requirement from the ninth graders of 2022 to 2023, and a certified teacher in every high school. What does that look
// like as a course map, what do the numbers show, and what can a student rank in the state's trail data?
// Sources read raw on 17 and 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-arkansas/):
//  - ADE Commissioner's Memo COM-21-105 (memo date 3/29/2021): Act 414 of 2021, the "Computer Science Education
//    Advancement Act of 2021", signed "March 23, 2021"; extends "Act 187 of 2015"; "Every student, beginning with the
//    9th grade class of 2022-2023, must earn one full high school computer science credit to graduate"; credit "may be
//    earned by the student in Grades 8-12"; course codes beginning "465 or 565"; "Computer Science Flex Credit" counts
//    toward "the existing 4th math, 3rd science, and/or career focus credit requirements"; "Each high school must employ
//    a computer science certified teacher by the 2023-2024 school year"; March 11, 2021 State Board approval of "nine
//    Arkansas Computer Science and Computing courses" for 8th graders; licensure codes 528, 5013, 5014, 5016.
//  - ADE DESE, Computer Science Standards and Courses: "K-4 Computer Science Embedded Standards", "5-8 Computer Science
//    Embedded Standards"; 5-8 courses Coding for Games (399380), Building with Data and AI (399400), Microcontrollers &
//    Circuits (399370), Technology Systems & Security (399390); four pathways (Software Development; Information
//    Technology and Security; Robotics and Automation Systems; Data Analytics and Machine Learning); AP Cybersecurity
//    (565210); CTE courses that "may count towards the one (1) credit": Business Intelligence (593640), Electronics II
//    (494820), Precision Agriculture (593650); A.C.A. 6-16-146: "Beginning in the 2015-2016 school year, a public high
//    school or public charter high school shall offer at least one (1) computer science course".
//  - ADE DESE, Arkansas State Coding Competition: "tenth annual", grades 8-12, public, private and homeschooled; 2026
//    event March 31, 2026, 12:30 p.m. to 3:30 p.m., Plumerville; each school one team of up to three; registration closed
//    February 20. (Award amounts are not printed.) Statewide CS Specialists page: seven specialists listed (names not printed).
//  - Code.org (2025), raw sheet (Access and Participation tabs only): AR access 78% (2018-19), 89%, 92%, 92%, 99%, 100%,
//    100% (2024-25), 301 of 301, "State Education Agency"; participation 7.2% (2020-21), 9.4%, 15%, 19.79%, 25.15%
//    (2024-25); 37,330 of 148,457 (NCES Fall 2022 total).
//  - College Board, School Report of AP Exams by State 2023-24: Arkansas 287 (2023), 292 (2024); public 259, 267.
//  - IANA tzdb northamerica: "Alabama, Arkansas, ..." under "US central time, represented by Chicago".
//  - Arkansas GIS Office, Arkansas Trails layer (gis.arkansas.gov FeatureServer 22; data "utilized by the Arkansas
//    Department of Parks & Tourism and the Arkansas Natural Heritage Commission"; no licence text; "subject to updates").
//    Count query 384; downloaded 18 October 2026 in two pages with outSR 4326. Our haversine lengths: total 636.3 miles,
//    median record 0.27, 308 records under 1 mile, 158 distinct names; longest records Ouachita Trail (Talimena to Queen
//    Wilhelmina) 156.08, Delta Heritage Trail 86.09, Ouachita Trail (Hwy 7 to Hwy 9) 30.06, (Hwy 9 to Pinnacle Mountain)
//    27.74, Hidden Diversity Multi-Use Trail 20.43; by name River Corridor Trail 24.41 over 6 records (longest single
//    record 12.46), Water Trail 23.19 over 23 records; surface_type mixes words and digit codes (2: 199, Natural 122).
// Lesson family: sorting and ranking a top-N list, and how the unit you rank changes the ranking.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'ARKANSAS', label: 'Arkansas', blurb: 'Coding and AI for Arkansas students under the one-credit CS graduation rule, with a project ranking the state\'s 384 trail records.' },
  market: US,
  slug: 'coding-and-ai-classes-in-arkansas',
  code: 'aara',
  accent: '#646622',
  accentRationale: 'Arkansas: #646622, a muted Ozark olive, allocated in alloc.tsv row 66 and apart from the other US accents; meets 4.5:1 on every paper in the accent gate',
  pageType: 'city',
  place: {
    name: 'Arkansas',
    eyebrow: 'Arkansas, United States',
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
  routeLabel: 'Arkansas',
  title: 'Coding and AI Classes in Arkansas | Live Online Help',
  description: 'Live online coding and AI classes for Arkansas students: the one-credit CS graduation rule, the four state course pathways, and a Python project on Arkansas trails.',
  ogDescription: 'Every Arkansas student since the ninth graders of 2022 to 2023 needs a computer science credit to graduate. The rule, the pathways, the numbers, and live online classes.',
  twitterDescription: 'Arkansas coding and AI classes, live online, mapped to the state\'s CS credit and pathways.',
  ogImageCourse: 'cybersecurity-course-for-teens-ethical-defensive',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Arkansas Students',
    description: 'Level-matched online game design, Python, data science, cybersecurity and AP Computer Science Principles for Arkansas students in grades K to 12, taught live in English.'
  },

  h1: 'Coding and AI classes in Arkansas',
  capsuleQ: 'Do Arkansas students need computer science to graduate?',
  capsule: 'Yes. Under Act 414 of 2021, every Arkansas student starting with the 9th grade class of 2022-2023 must earn one full high school computer science credit, which can be earned in grades 8 to 12. Modern Age Coders teaches live online classes that run alongside that credit, from middle school game coding to Python data work, cybersecurity and AP Computer Science Principles, in batches or 1-on-1.',
  lead: 'Arkansas built its computer science policy in layers. A 2015 law made every public high school offer at least one course; a 2021 law turned that offer into a graduation credit for every student and required a certified computer science teacher in every high school. The result shows in the published numbers: the share of Arkansas high schools with a course reached 100%, and a quarter of high school students were enrolled in 2024 to 2025. Below we set out the rules as the Arkansas Department of Education publishes them, the state\'s course pathways, the figures, and a data project that ranks the trails in the state\'s own open data.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Arkansas.',

  picks: {
    eyebrow: 'Course picks for Arkansas',
    h2: 'Four courses that line up with Arkansas pathways',
    intro: 'Matched to the department\'s middle school courses and high school pathways; the no-cost first session decides the level.',
    items: [
      { course: 'complete-game-development-masterclass-for-teens', band: 'Grades 6 to 10', note: 'Game logic, art and testing, the territory of the state\'s Coding for Games and Game Development and Design courses.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 8 to 12', note: 'Python and pandas on public data such as the Arkansas trails layer, close to the Data Analytics and Machine Learning pathway.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', band: 'Grades 8 to 12', note: 'Defensive, ethical security skills that sit beside the Information Technology and Security pathway.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 9 to 12', note: 'AP Computer Science Principles, one of the courses Arkansas lists as approved even for eighth graders.' }
    ]
  },

  sections: [
    {
      id: 'credit', tint: '', eyebrow: 'The graduation credit',
      h2: 'What Act 414 of 2021 requires, as the department explains it',
      intro: 'From the Arkansas Department of Education Commissioner\'s Memo COM-21-105, dated March 29, 2021, read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'The Computer Science Education Advancement Act of 2021 (Act 414), summarized from ADE memo COM-21-105', head: ['Rule', 'What the memo says'], rows: [
          ['Signed into law', 'March 23, 2021, as an extension of Act 187 of 2015, which required every high school to make a computer science course available'],
          ['Graduation credit', 'Every student, beginning with the 9th grade class of 2022-2023, must earn one full high school computer science credit to graduate'],
          ['When it can be earned', 'Any time in grades 8 to 12; the credit is found on the transcript by course codes beginning 465 or 565'],
          ['Flex credit', 'A computer science credit can count toward the existing fourth math, third science or career focus credit requirements'],
          ['Teachers', 'Each high school must employ a computer science certified teacher by the 2023-2024 school year'],
          ['Eighth grade', 'On March 11, 2021 the State Board approved nine computer science and computing courses that districts may teach to 8th graders for high school credit']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Not an extra credit', p: 'The memo says the requirement does not necessarily increase the number of credits a diploma needs, because a computer science course can also fill a math, science or career focus slot.' },
          { h3: 'The 2015 foundation', p: 'State law, A.C.A. 6-16-146, has required every public and public charter high school to offer at least one computer science course since the 2015 to 2016 school year, in class, blended or online.' },
          { h3: 'Four ways to certify', p: 'The memo lists licensure codes 528, 5013, 5014 and 5016 as meeting the teacher requirement, and the department funds seven statewide specialists to train teachers.' }
        ] },
        { kind: 'p', text: 'So the first Arkansas students who had to hold the credit entered ninth grade in fall 2022 and finished high school in spring 2026. Families with younger children can plan for it from middle school, since a credit-bearing course taken in eighth grade counts.' }
      ]
    },
    {
      id: 'pathways', tint: 'deep', eyebrow: 'The course map',
      h2: 'Arkansas computer science courses, from embedded standards to four pathways',
      intro: 'The department\'s Computer Science Standards and Courses page lays out what is taught at each stage. Course codes are the state\'s.',
      body: [
        { kind: 'table', caption: 'Arkansas computer science standards and courses by stage (ADE DESE, read 17 October 2026); the right column is our suggestion', head: ['Stage', 'What the state lists', 'A matching Modern Age Coders course'], rows: [
          ['Grades K-4', 'Computer Science Embedded Standards, taught inside other subjects', 'Coding for Kids, blocks to games'],
          ['Grades 5-8', 'Embedded standards, plus Coding for Games (399380), Building with Data and AI (399400), Microcontrollers & Circuits (399370), Technology Systems & Security (399390)', 'Game development, Python and AI for kids'],
          ['High school, Software Development', 'Software Development, AP Computer Science A, Mobile App Development, Game Development and Design, Web Development and more', 'Java, app and web courses for teens'],
          ['High school, IT and Security', 'Information Technology and Security, AP Cybersecurity (565210), Networking, Cybersecurity, Cloud Computing and Security', 'Teen cybersecurity'],
          ['High school, Robotics and Automation', 'Physical Computing with Embedded Systems, Robotics, Computer Engineering', 'Python foundations first'],
          ['High school, Data Analytics and ML', 'Computing with Data, Data Science, Artificial Intelligence', 'Teen data science, then AI and machine learning']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Every pathway starts the same', p: 'Introduction to Computer Science (465000) and AP Computer Science Principles (565000) open the high school map, and both are on the list of courses approved for 8th grade.' },
          { h3: 'Some CTE courses count', p: 'The page names Business Intelligence (593640), Electronics II (494820) and Precision Agriculture (593650) as courses that may count toward the one required credit.' },
          { h3: 'Depth beyond Level 3', p: 'At Level 4 students can take an unfinished Level 3 course, an independent study in one of the four pathways, or a computer science internship.' }
        ] }
      ]
    },
    {
      id: 'figures', tint: 'tint', eyebrow: 'The published figures',
      h2: 'Every Arkansas high school, and a quarter of its students',
      intro: 'Arkansas rows from the 2025 Code.org data sheet, with the College Board AP school totals added in the text below.',
      body: [
        { kind: 'table', caption: 'Arkansas high schools offering computer science and students enrolled, by school year (Code.org, 2025, trend tabs)', head: ['School year', 'High schools offering CS', 'High school students enrolled'], rows: [
          ['2018 to 2019', '78%', 'Not reported'],
          ['2019 to 2020', '89%', 'Not reported'],
          ['2020 to 2021', '92%', '7.2%'],
          ['2021 to 2022', '92%', '9.4%'],
          ['2022 to 2023', '99%', '15%'],
          ['2023 to 2024', '100%', '19.79%'],
          ['2024 to 2025', '100%, or 301 of 301', '25.15%, or 37,330 of 148,457']
        ] },
        { kind: 'p', text: 'Enrollment more than tripled in four years, from 7.2% to 25.15%, which is the pattern a graduation credit should produce as each new ninth-grade class moves through. The student total behind the 2024 to 2025 share is the NCES count for fall 2022, so the percentage is an approximation as Code.org computes it. Schools giving AP exams numbered 287 in 2023 and 292 in 2024, of which 259 and 267 were public (College Board, School Report of AP Exams by State 2023-24).' },
        { kind: 'p', text: 'Suggested citation for the access and participation figures: Code.org (2025). 2025 State of AI + CS Education. Individual Arkansas values are quoted here; the dataset is not reproduced.' }
      ]
    },
    {
      id: 'trails', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Ranking Arkansas trails: why "the longest" depends on what you count',
      intro: 'The Arkansas GIS Office publishes a statewide trails layer, compiled for the state parks and natural heritage agencies. Students measure every line and rank them, then rank them a second way and compare.',
      body: [
        { kind: 'table', caption: 'Longest single records in the Arkansas Trails layer (our haversine lengths in miles, from a download on 18 October 2026)', head: ['Rank', 'Trail record', 'Our length'], rows: [
          ['1', 'Ouachita Trail (Talimena to Queen Wilhelmina)', '156.08'],
          ['2', 'Delta Heritage Trail', '86.09'],
          ['3', 'Ouachita Trail (Hwy 7 to Hwy 9)', '30.06'],
          ['4', 'Ouachita Trail (Hwy 9 to Pinnacle Mountain)', '27.74'],
          ['5', 'Hidden Diversity Multi-Use Trail', '20.43']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Get every record', p: 'The service hands out 200 records per request, but its count query says 384. Students page through with an offset until they hold all 384, then check for repeats. Ranking a partial download ranks the wrong list.' },
          { h3: '2. Measure, then sort', p: 'Each trail is a polyline of coordinates. Summing haversine distances between consecutive points gives a length; sorting descending and slicing the first five gives a top-five list, and 308 of the 384 records turn out to be under one mile.' },
          { h3: '3. Rank again by name', p: 'Group by trail name first and the order changes. River Corridor Trail is 12.46 miles as one record but 24.41 miles across 6 records, and Water Trail adds up to 23.19 miles from 23 short pieces.' }
        ] },
        { kind: 'callout', h3: 'Our miles, not the state\'s', p: 'These lengths are ours, measured from the layer\'s geometry on one day. The layer carries no licence text and says its completeness depends on the resources available when it was produced, so the figures are a teaching result, not official trail mileage. The Ouachita Trail also appears as several records, so "longest trail" and "longest record" are different questions.' },
        { kind: 'p', text: 'A third exercise hides in the surface_type column, which mixes words such as Natural, Gravel and Asphalt with bare digits such as 2 and 6: 199 records simply say "2". Without the codebook, a student cannot rank trails by surface, and saying so is the right answer. That is the Data Analytics and Machine Learning pathway in miniature: measure carefully, rank honestly, and refuse to invent meanings.' }
      ]
    },
    {
      id: 'compete', tint: '', eyebrow: 'State competition and class times',
      h2: 'The Arkansas State Coding Competition, and classes on Central Time',
      intro: 'The department runs its own coding contest for grades 8 to 12, and Arkansas sits entirely in one time zone.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The 2026 competition', p: 'The department\'s page describes the tenth annual competition, held March 31, 2026, from 12:30 to 3:30 p.m. in Plumerville, open to public, private and homeschooled students in grades 8 to 12.' },
          { h3: 'One team per school', p: 'Each school with any of grades 8 to 12 could enter one team of no more than three students, and 2026 registration closed on February 20. Check the official page for the next cycle.' },
          { h3: 'Central Time, India time', p: 'The IANA database lists Arkansas with US Central time, America/Chicago. India runs ten and a half hours ahead of Arkansas in summer and eleven and a half in winter, by our count; the change dates are November 1, 2026 and March 14, 2027.' }
        ] },
        { kind: 'spec', title: 'Competition practice, not competition help', p: 'Timed problem sets in Python or Java build the speed a three-person contest needs. We coach practice problems only; nothing we write goes into a competition entry, and we are not connected with the Arkansas Department of Education or the competition.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From embedded K-4 lessons to a Level 4 pathway',
    intro: 'Use the grade ranges as a starting guess. A first session with a teacher settles where a student really begins.',
    cols: [
      { band: 'Grades K to 4', h3: 'Blocks and patterns', p: 'Short block programs and puzzles that echo the embedded K-4 standards, at home and at a gentle pace.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 5 to 8', h3: 'Games, data and AI', p: 'Game projects and a first taste of data and AI, the ground covered by the state\'s 5-8 course list.', courses: ['game-development-masterclass-for-kids', 'python-ai-kids-masterclass'] },
      { band: 'Grades 8 to 10', h3: 'Toward the credit', p: 'Python, web and game development in depth, so the required high school credit comes easily.', courses: ['python-complete-masterclass-teens', 'complete-game-development-masterclass-for-teens'] },
      { band: 'Grades 10 to 12', h3: 'Pathway depth', p: 'Data science, cybersecurity or AP, matching the Level 2 to Level 4 courses a school may offer.', courses: ['data-science-course-for-teens-python-data', 'cybersecurity-course-for-teens-ethical-defensive'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Arkansas teaches AI as a course. Here is what using it well looks like.',
    intro: 'The state lists Artificial Intelligence in its Data Analytics and Machine Learning pathway. Judgment is the part a tool cannot supply.',
    p1: 'Ask an AI assistant for "the longest trail in Arkansas" from this layer and it may sort the records and name the first one, never noticing that one trail is split across several records or that its lengths depend on the projection used to measure them.',
    p2: 'A student who has written the ranking code knows to ask what is being ranked and how it was measured. That habit transfers to every AI output they will see: check the unit, check the source, check whether the question asked is the question answered.',
    closer: 'Arkansas made sure every student meets computer science; the students who get the most from it learn to question a confident answer.',
    blogAnchor: 'why we still teach coding in an AI world'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Fayetteville to the Delta, classes at home',
    intro: 'An online class reaches the Ozarks, the river towns and Little Rock in exactly the same way.',
    cells: [
      { h3: 'Times that fit', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Level-matched batches', p: 'Fifteen to twenty students at the same stage, from Arkansas and other states, taught live by one teacher.' },
      { h3: 'Private lessons', p: 'A 1-on-1 plan suits students working toward AP, a pathway course or the state coding competition at their own pace.' },
      { h3: 'Alongside the credit', p: 'Teachers know US grade levels and can link projects to a student\'s school course, but graded school work stays the student\'s own.' },
      { h3: 'A free first session', p: 'A complete lesson with a real task, followed by a suggested level and course. No card details are taken.' },
      { h3: 'What a student needs', p: 'A laptop or desktop, a headset or speakers, and an internet connection reliable enough for a video call.' }
    ],
    spec: { title: 'Online from India, nowhere else', p: 'Modern Age Coders teaches live over the internet from India. There is no Modern Age Coders site in Arkansas, none is claimed, and our classes do not by themselves earn the state graduation credit.' }
  },

  fees: {
    h2: 'Fees for Arkansas students',
    intro: 'Three prices, quoted in US dollars.',
    first: 'A no-charge first lesson that finishes with a level and course recommendation.',
    group: 'A month of live batch classes with fifteen to twenty students at your level.',
    private: 'A month of private 1-on-1 classes on the same weekly rhythm.',
    closer: 'Families in Jonesboro and Texarkana pay the same single US rate, in US dollars. Billing starts only after the free first lesson and an agreed plan; the pricing page explains breaks and missed classes.'
  },

  reviewsH2: 'Reviews from families on Google',

  book: {
    h2: 'Set up a free lesson for an Arkansas student',
    intro: 'Tell us the grade and the pathway that interests them. An eighth grader might start with a game project, a tenth grader with the trails ranking, and a junior with AP Computer Science Principles practice.',
    success: 'Thank you. We will contact you shortly about a class for your Arkansas student.'
  },

  faq: {
    h2: 'Arkansas computer science questions',
    intro: 'Questions Arkansas families ask us most often.',
    items: [
      { q: 'Which Arkansas students need a computer science credit?', a: 'According to ADE memo COM-21-105, every student beginning with the 9th grade class of 2022-2023 must earn one full high school computer science credit to graduate.' },
      { q: 'Can an eighth grader earn the credit?', a: 'Yes. The memo says the credit may be earned in grades 8 to 12, and the State Board approved nine courses that districts may teach to 8th graders for high school credit.' },
      { q: 'Does the credit add to the total a diploma needs?', a: 'Not necessarily. A computer science flex credit can count toward the fourth math, third science or career focus requirement, so it can fill an existing slot.' },
      { q: 'Do all Arkansas high schools offer computer science?', a: 'Code.org (2025) reports 301 of 301 Arkansas high schools offering it in 2024 to 2025, and state law has required at least one course in every public high school since 2015 to 2016.' },
      { q: 'How many Arkansas students take computer science?', a: 'For 2024 to 2025 the Code.org sheet reports 37,330 of 148,457 high school students, or 25.15%, up from 7.2% in 2020 to 2021.' },
      { q: 'Will your classes count as the Arkansas credit?', a: 'No. The credit comes from state-approved school courses with codes beginning 465 or 565. Our classes add depth and practice alongside them.' },
      { q: 'Can you prepare a student for the Arkansas State Coding Competition?', a: 'We can coach timed practice problems in Python or Java. Teams register through their school, and everything submitted on the day is the team\'s own work.' },
      { q: 'What are the class times?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We confirm times in Central Time.' },
      { q: 'Are classes in person anywhere in Arkansas?', a: 'No. All teaching is live online with teachers in India, and no Arkansas classroom is claimed.' },
      { q: 'How do I see the fees?', a: 'The fees section of this page shows the free first lesson and the monthly batch and 1-on-1 options in US dollars, billed only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More reading for Arkansas families',
    html: 'Pathway students can read <a class="cg-inline-link" href="/cybersecurity-classes-for-teens">cybersecurity classes for teens</a> or <a class="cg-inline-link" href="/game-design-classes-for-teens">game design classes for teens</a>. Competitive students can scan <a class="cg-inline-link" href="/coding-competitions-for-high-school-students">coding competitions for high school students</a>, and AP candidates can read about <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Arkansas and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/game-design-classes-for-teens', label: 'Teen game design' },
    { href: '/cybersecurity-classes-for-teens', label: 'Teen cybersecurity' }
  ],

  personalityCss: `
.cg-root.cg-aara .cg-hero-grid { align-items: start; gap: clamp(0.9rem, 2.8vw, 2.2rem); }
.cg-root.cg-aara .cg-hero h1 { font-weight: 740; letter-spacing: -0.016em; line-height: 1.06; }
.cg-root.cg-aara .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-aara .cg-eyebrow { letter-spacing: 0.14em; font-weight: 600; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-aara .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.011em; }
.cg-root.cg-aara .cg-grid-3 { gap: clamp(0.95rem, 2.1vw, 1.75rem); }
.cg-root.cg-aara .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-aara .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aara .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-aara .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Arkansas, read raw 17 and 18 October 2026. ADE memo COM-21-105 (3/29/2021): Act 414 of 2021 signed March 23, 2021, extends Act 187 of 2015; one full HS CS credit from the 9th grade class of 2022-2023, earned in grades 8-12, codes 465 or 565; flex credit toward 4th math, 3rd science or career focus; CS certified teacher in each high school by 2023-2024; nine courses approved for 8th grade on March 11, 2021; licensure codes 528, 5013, 5014, 5016. ADE DESE standards page: K-4 and 5-8 embedded standards, four 5-8 courses with codes, four HS pathways, AP Cybersecurity (565210), CTE courses that may count, A.C.A. 6-16-146. State Coding Competition 2026 (tenth annual, March 31, 2026, Plumerville, one team of up to three). Code.org (2025) access 78% to 100% (301 of 301), participation 7.2% to 25.15% (37,330 of 148,457). College Board 287, 292. IANA America/Chicago.',
    localProject: 'Arkansas GIS Office, Arkansas Trails layer (FeatureServer 22, no licence text), count 384, downloaded 18 October 2026 in two pages: our haversine total 636.3 miles, median 0.27, 308 under 1 mile, 158 names; top records 156.08, 86.09, 30.06, 27.74, 20.43; River Corridor Trail 24.41 over 6 records, Water Trail 23.19 over 23; surface_type mixes words and digit codes (199 records "2"). Lesson family: sorting and ranking top-N.',
    requiredMentions: [
      'Act 414 of 2021',
      'Act 187 of 2015',
      '9th grade class of 2022-2023',
      '465 or 565',
      'Building with Data and AI (399400)',
      'AP Cybersecurity (565210)',
      'Precision Agriculture (593650)',
      'Business Intelligence (593640)',
      '37,330 of 148,457',
      '156.08',
      '24.41 miles across 6 records',
      'March 31, 2026'
    ],
    sources: [
      { claim: 'ADE Commissioner\'s Memo COM-21-105: Act 414 of 2021, graduation credit, flex credit, teacher requirement, 8th grade courses.', url: 'https://adecm.ade.arkansas.gov/ViewApprovedMemo.aspx?Id=4716' },
      { claim: 'ADE DESE: Computer Science Standards and Courses, pathways, CTE courses, A.C.A. 6-16-146.', url: 'https://dese.ade.arkansas.gov/Offices/arkansas-computer-science-initiative/computer-science-standards-and-courses' },
      { claim: 'ADE DESE: Arkansas State Coding Competition 2026.', url: 'https://dese.ade.arkansas.gov/Offices/arkansas-computer-science-initiative/arkansas-state-coding-competition' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Arkansas access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'Arkansas GIS Office: Arkansas Trails feature layer.', url: 'https://gis.arkansas.gov/arcgis/rest/services/FEATURESERVICES/Environment/FeatureServer/22' },
      { claim: 'IANA tzdb northamerica: Arkansas on US Central, America/Chicago.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Competition award amounts (529 deposits and school awards): not printed (no money figures).',
      'Names, emails and phone numbers of ADE staff and the seven statewide specialists: not printed; only the count.',
      'The name of the governor who signed Act 414: not needed; the act is cited by number and date.',
      'Code.org gender, race, geography and graduation figures and the Code.org Arkansas summary text: not used.',
      'Official trail mileage: not read; only our haversine lengths are printed, labelled as ours. The layer carries no licence text.',
      'Meanings of the digit codes in surface_type and accessibility: no codebook found, so not interpreted.',
      'That our classes earn the Arkansas CS credit: refused; only state-approved school courses do.',
      'Any affiliation with the Arkansas Department of Education, the Arkansas GIS Office, Code.org or the College Board.'
    ]
  }
};
