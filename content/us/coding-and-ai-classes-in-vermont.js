'use strict';
// Vermont (cg- state page, US cluster Phase 4, row 102). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Vermont builds high school around flexible, personalized pathways rather than a fixed CS course. With access
// that rose and fell and few students enrolled, where does coding fit, and what can
// a student learn from cleaning the names of Vermont's 191 public libraries?
// Sources read raw 17 to 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-vermont/):
//  - Vermont Agency of Education (AOE), Digital Learning: "The Vermont State Board of Education adopted the
//    International Standards for Technology Education (ISTE) Standards for student learning" (AOE's wording; the page
//    prints only "ISTE Standards"); aligned with the Education Quality Standards; the AOE lists the Vermont Virtual
//    Learning Cooperative (VTVLC): "over 300 online courses", "on average supports 1500 student learners per year",
//    "more than 70 schools and organizations". The host technical center is not named on the page.
//  - AOE, Flexible Pathways: "created by Act 77 of 2013 and found in statute under 16 V.S.A. § 941"; Dual Enrollment
//    "16 V.S.A. § 944" with "up to two college courses"; Early College lets eligible 12th grade students "enroll
//    full-time for one academic year"; work-based learning; virtual and blended learning.
//  - AOE, Personalized Learning: Act 77 charged secondary educators to create "personalized learning environments that
//    offer flexible pathways to graduation".
//  - AOE, Education Quality Standards: approved by the State Board "in 2013, going into effect on April 5, 2014".
//  - AOE site search for "computer science" returned no computer science page; no CS graduation course found.
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): VT access 27%
//    (2018-19), 60%, 64%, 76%, 73.3% (2022-23), 60% (2023-24), no 2024-25 value; most recent 33 of 55 high schools,
//    2023-24, "State Education Agency and School Catalogs"; participation 3.7% (2021-22), 3.68% (2022-23), 3.14%
//    (2023-24); 766 of 24,384 (2023-24; denominator NCES fall 2022).
//  - College Board, School Report of AP Exams by State 2023-24: VT 65 (2023), 69 (2024); public 53 and 51;
//    non-public 12 and 18.
//  - IANA tzdb northamerica: Vermont under US eastern time, America/New_York; US DST rule.
//  - VCGI open data, VT Data - Public Libraries (list from the Department of Libraries, April 3, 2024; geocoded with
//    the VT E911 geocoder; VCGI no-warranty statement), fetched 17 to 18 October 2026: returnCountOnly 191 = rows.
//    Our results: 191 distinct names, 14 counties (Windsor 24, Rutland 21), 176 towns; last word Public 67,
//    Memorial 45, Free 22, Community 10, Town 8, Library 7; "Free" anywhere 34; 8 names include "Library";
//    4 names carry stray spaces.
// Lesson family: text cleaning and normalization of names (strip, tokenize, standardize), then counting tokens.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'VERMONT', label: 'Vermont', blurb: 'Coding and AI for Vermont students on flexible pathways, with a text-cleaning project on the names of Vermont public libraries.' },
  market: US,
  slug: 'coding-and-ai-classes-in-vermont',
  code: 'av',
  accent: '#1C354C',
  accentRationale: 'Vermont: #1C354C, a dark Green Mountain dusk blue allocated for row 102 in alloc.tsv, high contrast on the paper',
  pageType: 'city',
  place: {
    name: 'Vermont',
    eyebrow: 'Vermont, United States',
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
  routeLabel: 'Vermont',
  title: 'Coding and AI Classes in Vermont | Live Online',
  description: 'Live online coding and AI classes for Vermont students: where CS fits flexible pathways, the published access figures, and a Vermont public library data project.',
  ogDescription: 'Vermont has no required CS course, but Act 77 flexible pathways leave room for one. The numbers, the ISTE standards and live online classes for Vermont students.',
  twitterDescription: 'Vermont coding and AI classes, live online, alongside flexible pathways.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Vermont Students',
    description: 'Scratch, Python, web development, AP Computer Science and AI for Vermont students from first grade to twelfth, taught live online in English in small level-matched groups or one to one.'
  },

  h1: 'Coding and AI classes in Vermont',
  capsuleQ: 'Is computer science required in Vermont schools?',
  capsule: 'No single CS course is required. Vermont&rsquo;s State Board adopted the ISTE Standards for student technology learning, and Act 77 of 2013 lets students reach graduation through flexible, personalized pathways. Code.org (2025) counts 33 of 55 Vermont high schools offering CS in 2023 to 2024. Modern Age Coders teaches Vermont students live online, ages 6 to 18.',
  lead: 'In Vermont, a high school schedule is meant to bend around the student. Personalized learning plans, dual enrollment, early college and work-based learning all came out of the same 2013 law, and the Agency of Education points students to online courses when a class they want is not offered nearby. Computer science sits inside that flexibility rather than on a fixed list: some schools offer it, many do not, and only about three in every hundred high schoolers were enrolled in a CS course in the most recent year counted. For a student in a small rural district, that can mean no coding teacher down the hall at all. This page sets out what the state says, the published numbers, a text-cleaning project on Vermont&rsquo;s own library list, and how live online lessons fill the gap.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Vermont.',

  picks: {
    eyebrow: 'Course picks for Vermont',
    h2: 'Four ways to start, wherever the school is',
    intro: 'Pick by grade and interest; the free first lesson checks the fit before anything is agreed.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades 1 to 5', note: 'Stories, animations and games in Scratch, ideal when the elementary school has no computing class.' },
      { course: 'html-css-course-for-beginners-build-real-websites', band: 'Grades 6 to 9', note: 'Real websites from scratch: structure, style and publishing, the kind of digital creation the ISTE Standards ask for.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 8 to 12', note: 'Python from first program to data projects, including the library-name cleaning task described on this page.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'AP Computer Science A in Java for students whose school does not offer the course or wants extra support.' }
    ]
  },

  sections: [
    {
      id: 'pathways', tint: '', eyebrow: 'Flexible pathways',
      h2: 'How Vermont&rsquo;s graduation model leaves room for coding',
      intro: 'From Agency of Education pages read on 17 and 18 October 2026. A search of the agency site for computer science returned no dedicated CS page.',
      body: [
        { kind: 'table', caption: 'Vermont flexible pathways and related rules, as the Agency of Education describes them', head: ['Element', 'What the agency says'], rows: [
          ['The law', 'The Flexible Pathways Initiative was created by Act 77 of 2013 and sits in statute at 16 V.S.A. § 941'],
          ['Personalized learning', 'Act 77 charged secondary educators to create personalized learning environments offering flexible pathways to graduation'],
          ['Dual enrollment', 'Under 16 V.S.A. § 944, eligible high school students can take up to two college courses'],
          ['Early college', 'Eligible twelfth graders can enroll full-time for one academic year at an approved college'],
          ['Virtual and blended learning', 'Listed as a way to reach coursework beyond the traditional classroom'],
          ['Quality rules', 'The Education Quality Standards, approved in 2013, took effect on April 5, 2014']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'No CS course mandate', p: 'We found no statewide rule that every Vermont student takes computer science. What counts toward a diploma is set locally inside the proficiency and pathway framework.' },
          { h3: 'Room to personalize', p: 'A personalized learning plan is exactly where a student can name coding as a goal, then show evidence of what they built, whether inside or outside school.' },
          { h3: 'Ask before assuming', p: 'Whether any outside class earns credit is the district&rsquo;s decision, never ours. Our classes are not an approved Vermont course provider, and we do not say otherwise.' }
        ] }
      ]
    },
    {
      id: 'libraries', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Cleaning the names of Vermont&rsquo;s 191 public libraries',
      intro: 'Vermont&rsquo;s geodata portal (VCGI) publishes a list of public libraries supplied by the state Department of Libraries on April 3, 2024. The names look simple. They are not, which makes them a perfect first lesson in text cleaning.',
      body: [
        { kind: 'table', caption: 'VT Data, Public Libraries: our counts from the VCGI download (191 records, count check matched)', head: ['What we checked', 'Our result'], rows: [
          ['Records and distinct names', '191 and 191'],
          ['Counties and towns represented', 'All 14 counties; 176 town names, with Hartford appearing four times'],
          ['Counties with the most libraries', 'Windsor 24, Rutland 21, Windham 19'],
          ['Most common final word of a name', 'Public 67, Memorial 45, Free 22, Community 10, Town 8'],
          ['Names that contain the word Free anywhere', '34'],
          ['Names that still include the word Library', '8, while the rest have it trimmed off'],
          ['Names with a stray space at the start or end', '4']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Spot the mess', p: 'Most names end before the word Library, a few keep it, and four carry an invisible trailing space. Two names that look identical on screen can fail an equality test in Python for that reason alone.' },
          { h3: 'Clean it', p: 'Students write a small function: strip spaces, drop a final Library, standardize case, then split each name into words. They test it on ten tricky names before running it on all 191.' },
          { h3: 'Count the words', p: 'With clean names, counting final words becomes one line. Students find that Public and Memorial dominate, and that Free shows up somewhere in 34 names, which only a word-level count reveals.' }
        ] },
        { kind: 'callout', h3: 'Our counts, their data', p: 'The figures in the table are ours, from one download. VCGI and the State of Vermont state that they make no warranty about the data, and the list reflects the Department of Libraries file of April 2024, so a library opened or renamed since may be missing. Contact details in the file are never printed or used in class.' },
        { kind: 'p', text: 'A fifth grader can do the counting by hand on twenty names and see why a computer helps. A high schooler can go on to match library towns against another state list, where one town name, Hartford, sits behind four separate library records and the next question is how to tell them apart.' }
      ]
    },
    {
      id: 'figures', tint: 'tint', eyebrow: 'Published figures',
      h2: 'Vermont computer science access and enrollment',
      intro: 'Values from Code.org and the College Board, quoted as published. A dash in the source means no data, and we leave it blank.',
      body: [
        { kind: 'table', caption: 'Vermont public high schools with foundational CS, Code.org (2025), by school year', head: ['Year', 'Share offering CS'], rows: [
          ['2018 to 2019', '27%'],
          ['2019 to 2020', '60%'],
          ['2020 to 2021', '64%'],
          ['2021 to 2022', '76%'],
          ['2022 to 2023', '73.3%'],
          ['2023 to 2024', '60%, or 33 of 55 high schools'],
          ['2024 to 2025', 'No Vermont value']
        ] },
        { kind: 'table', mt: true, caption: 'Enrollment and AP in Vermont', head: ['Measure', 'Value', 'Source'], rows: [
          ['High schoolers enrolled in CS, 2023 to 2024', '766 of 24,384, or 3.14%', 'Code.org (2025); NCES fall 2022 base'],
          ['Enrollment share, 2021 to 2022 and 2022 to 2023', '3.7% and 3.68%', 'Code.org (2025)'],
          ['Schools giving any AP exam, 2023 and 2024', '65 and 69', 'College Board'],
          ['Of which public', '53 and 51', 'College Board'],
          ['Of which non-public', '12 and 18', 'College Board']
        ] },
        { kind: 'p', text: 'Two things stand out. The access line rose steeply after 2018 to 2019 and then fell back to 60%, and with only 55 high schools in the count, a handful of schools adding or dropping a course moves the percentage a long way. Enrollment has stayed between about 3% and 4% in every year reported. Cite these figures as Code.org (2025). 2025 State of AI + CS Education; we print single values only.' }
      ]
    },
    {
      id: 'standards', tint: 'deep', eyebrow: 'Technology standards',
      h2: 'Vermont&rsquo;s ISTE Standards and what they ask of students',
      intro: 'The Agency of Education says the State Board adopted the ISTE Standards for student learning, aligned with the Education Quality Standards, to describe what students should know and do with information technology.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'What they are', p: 'The ISTE Standards describe how students use technology to learn, create and communicate. They are a technology framework, not a programming course, so a school can meet them without teaching a language.' },
          { h3: 'Where coding fits', p: 'Building a website, a game or a data analysis is one of the most direct ways to show creative and computational use of technology. That is the work our classes are built around.' },
          { h3: 'Online options', p: 'The agency also lists the Vermont Virtual Learning Cooperative, which it says offers over 300 online courses, supports on average 1500 learners a year and works with more than 70 schools and organizations.' }
        ] },
        { kind: 'spec', title: 'A note on the agency wording', p: 'The agency page expands ISTE in its own words. We quote only the name ISTE Standards and the facts above, as published, and make no claim about any provider listed there. We are not connected with the Agency of Education or the cooperative.' }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Time zone',
      h2: 'Eastern Time from Burlington to Brattleboro',
      intro: 'The IANA time zone database places Vermont in the US eastern group, America/New_York.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Through October', p: 'Vermont is on daylight time, and the clock in India reads nine and a half hours later.' },
          { h3: 'November 1, 2026', p: 'Standard time begins and the gap with India widens by an hour, to ten and a half, until the spring.' },
          { h3: 'March 14, 2027', p: 'Daylight time returns. Lesson times never move on the Vermont clock; we handle the change on our side.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'A Vermont student&rsquo;s path from first program to AP',
    intro: 'Grade bands are rough guides. The placement lesson sets the real starting point.',
    cols: [
      { band: 'Grades 1 to 4', h3: 'Tinker', p: 'Block programs, patterns and characters that move, built and debugged by the child.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Grades 5 to 8', h3: 'Make and publish', p: 'Web pages and first Python programs, shared with family and friends.', courses: ['html-css-course-for-beginners-build-real-websites', 'python-ai-kids-masterclass'] },
      { band: 'Grades 9 to 10', h3: 'Handle real data', p: 'Python in depth, text cleaning, charts and a portfolio piece for a learning plan.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Grades 11 to 12', h3: 'Go further', p: 'AP Computer Science A, and AI models trained on data the student has prepared.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool can clean a list. Can it tell you what it changed?',
    intro: 'The library project is a quick test of why students should understand code before handing work to AI.',
    p1: 'Give an AI assistant the 191 library names and ask it to tidy them, and it may quietly merge names, drop words or invent a missing Library. The output looks neat. Without a cleaning function of their own and a few test cases, a student has no way of knowing what was altered.',
    p2: 'We teach the opposite habit: write the rule, test it, then let AI help with the parts you already understand and can check. Students under 18 use only AI tools whose terms permit their age, and school assignments remain their own.',
    closer: 'Flexible pathways reward students who can show what they made and explain how; that starts with code they wrote.',
    blogAnchor: 'whether coding is still worth learning'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'A coding teacher for every Vermont town, online',
    intro: 'Distance and small enrollments make specialist teachers hard to share in rural Vermont. A live online class does not depend on either.',
    cells: [
      { h3: 'Real-time teaching', p: 'Each lesson is live: the teacher watches the student code, asks questions and corrects course as it happens.' },
      { h3: 'Fits a learning plan', p: 'We use US grade levels and can document projects for a personalized learning plan. Credit decisions belong to the school, and school work stays the student&rsquo;s own.' },
      { h3: 'Times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Batches', p: 'Groups of fifteen to twenty peers at a similar level, from Vermont and across the US, so a student in a tiny school still has classmates.' },
      { h3: 'One to one', p: 'Private lessons for a student who wants to move quickly, prepare for AP or build a specific project.' },
      { h3: 'First lesson free', p: 'A full lesson with a real task and a real teacher, then a suggested course and time. No card is asked for.' }
    ],
    spec: { title: 'Online from India, with no Vermont site', p: 'There is no Modern Age Coders center in Vermont and we claim none. Lessons are taught live online from India, so a computer, working audio and a reliable connection are all that is needed.' }
  },

  fees: {
    h2: 'Fees for Vermont families',
    intro: 'One clear set of figures for the whole state.',
    first: 'A complete lesson free of charge, followed by advice on level, course and time.',
    group: 'A month of live lessons in a batch of fifteen to twenty learners at the same level.',
    private: 'The same monthly pattern with one teacher for one learner.',
    closer: 'Vermont families pay a single rate in US dollars, from the Northeast Kingdom to Bennington. Billing only starts after the free lesson, once a course and time are agreed, and the pricing page explains breaks and missed lessons.'
  },

  reviewsH2: 'Google reviews from parents and students',

  book: {
    h2: 'Request a free lesson for a Vermont student',
    intro: 'Let us know the grade and what they hope to make. A third grader might start with a Scratch story, a teenager with the library names or a first website.',
    success: 'Thank you. We will reach out soon to set up a class for your Vermont student.'
  },

  faq: {
    h2: 'Vermont coding and AI questions',
    intro: 'Answers sourced to the Agency of Education, Code.org and the College Board. Our own suggestions are labelled.',
    items: [
      { q: 'Does Vermont require computer science to graduate?', a: 'We found no statewide computer science course requirement. Vermont graduation runs through local proficiency requirements and the flexible pathways created by Act 77 of 2013.' },
      { q: 'What technology standards does Vermont use?', a: 'The Agency of Education says the State Board of Education adopted the ISTE Standards for student learning, aligned with the Education Quality Standards.' },
      { q: 'What is Act 77?', a: 'Act 77 of 2013 created the Flexible Pathways Initiative, found at 16 V.S.A. § 941. It covers personalized learning plans, dual enrollment, early college, work-based learning and virtual learning.' },
      { q: 'How many Vermont high schools offer computer science?', a: 'Code.org (2025) counts 33 of 55 Vermont high schools, or 60%, offering foundational computer science in 2023 to 2024.' },
      { q: 'How many Vermont students take computer science?', a: 'In 2023 to 2024 Code.org reports 766 of 24,384 high school students, or 3.14%, enrolled in a computer science course.' },
      { q: 'Can a Vermont student take college courses in high school?', a: 'Yes, through dual enrollment. The agency says eligible students can take up to two college courses under 16 V.S.A. § 944, and eligible twelfth graders can attend early college full-time for a year.' },
      { q: 'Will your classes earn Vermont school credit?', a: 'Not from us. Any credit is the school district\'s decision. We teach skills and help students build projects they can describe in a learning plan, and graded school work stays their own.' },
      { q: 'What times are classes for Vermont students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are shown in Eastern Time.', boiler: true },
      { q: 'Is there a Vermont classroom?', a: 'No. We have no premises in Vermont. Every lesson is taught live and online from India.', boiler: true },
      { q: 'How much do classes cost?', a: 'See the fees section on this page for the free first lesson, the monthly group rate and the monthly private rate. You pay nothing until after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'Related pages',
    h2: 'Other reading for Vermont families',
    html: 'Homeschooling families can read about <a class="cg-inline-link" href="/homeschool-computer-science-high-school-credit">homeschool computer science credit</a>, and students without a CS teacher at school may like <a class="cg-inline-link" href="/free-coding-programs-for-high-school-students">free coding programs for high school students</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina page</a> shows a state that took the opposite route and required a CS course.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Vermont and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/homeschool-coding-curriculum', label: 'Homeschool coding' },
    { href: '/coding-classes-for-elementary-students', label: 'Elementary coding' }
  ],

  personalityCss: `
.cg-root.cg-av .cg-hero-grid { align-items: center; gap: clamp(0.9rem, 2.6vw, 2rem); }
.cg-root.cg-av .cg-hero h1 { font-weight: 640; letter-spacing: -0.01em; line-height: 1.1; }
.cg-root.cg-av .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-av .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-av .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.005em; }
.cg-root.cg-av .cg-table caption { text-align: left; }
.cg-root.cg-av .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-av .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-av .cg-grid-3 { gap: clamp(0.8rem, 1.8vw, 1.5rem); }
`,

  dossier: {
    curriculumAuthority: 'Vermont, read raw 17 to 18 October 2026: AOE Digital Learning (State Board adopted the ISTE Standards; VTVLC over 300 online courses, about 1500 learners a year, more than 70 schools and organizations); AOE Flexible Pathways (Act 77 of 2013, 16 V.S.A. § 941; dual enrollment 16 V.S.A. § 944, up to two college courses; early college for eligible twelfth graders); AOE Personalized Learning; AOE Education Quality Standards (approved 2013, effective April 5, 2014); AOE site search found no CS page; Code.org (2025) access 27%, 60%, 64%, 76%, 73.3%, 60%, 33 of 55 in 2023-24, participation 3.7%, 3.68%, 3.14%, 766 of 24,384; College Board AP schools 65 and 69 (public 53 and 51, non-public 12 and 18); IANA America/New_York.',
    localProject: 'VCGI VT Data - Public Libraries (Department of Libraries list of April 3, 2024; VCGI no-warranty statement), fetched 17 to 18 October 2026: 191 records (count matched), 191 distinct names, 14 counties (Windsor 24, Rutland 21, Windham 19), 176 towns; our final-word counts Public 67, Memorial 45, Free 22, Community 10, Town 8; Free anywhere 34; 8 names include Library; 4 with stray spaces. Lesson family: text cleaning and normalization.',
    requiredMentions: [
      'Act 77 of 2013',
      '16 V.S.A. § 941',
      'up to two college courses',
      'April 5, 2014',
      'ISTE Standards',
      'over 300 online courses',
      '33 of 55',
      '766 of 24,384',
      '65 and 69',
      '191 and 191',
      'Public 67, Memorial 45'
    ],
    sources: [
      { claim: 'Vermont AOE: Digital Learning, ISTE Standards adoption, VTVLC.', url: 'https://education.vermont.gov/learning/content-areas/digital-learning' },
      { claim: 'Vermont AOE: Flexible Pathways, Act 77, dual enrollment, early college.', url: 'https://education.vermont.gov/learning/flexible-pathways' },
      { claim: 'Vermont AOE: Personalized Learning.', url: 'https://education.vermont.gov/learning/personalized-learning' },
      { claim: 'Vermont AOE: Education Quality Standards, effective April 5, 2014.', url: 'https://education.vermont.gov/accountability-data/school-improvement/education-quality-standards' },
      { claim: 'Code.org (2025), State of AI + CS Education data: VT access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'VCGI: VT Data - Public Libraries feature service.', url: 'https://services1.arcgis.com/BkFxaEFNwHqX3tAw/arcgis/rest/services/FS_VCGI_OPENDATA_Facilities_VTPUBLIB_point_SP_v1/FeatureServer' },
      { claim: 'IANA tzdb northamerica: US rule and America/New_York.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'A Vermont K-12 computer science standards adoption: no AOE computer science page found by site search, so none is claimed.',
      'The ISTE expansion as written on the AOE page: not reproduced; only the name ISTE Standards is used.',
      'The host technical center of VTVLC and the list of outside online providers: not named.',
      'That outside online classes earn Vermont credit: not claimed; credit is a district decision.',
      'Library addresses, phone numbers and emails from the dataset: never printed.',
      'A reason for the fall in Vermont access to 60% in 2023-24: none given by the source; only the small-denominator effect is noted, as our reading.',
      'Any affiliation with the Vermont AOE, VTVLC, VCGI, the Department of Libraries, Code.org or the College Board.'
    ]
  }
};
