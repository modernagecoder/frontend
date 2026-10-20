'use strict';
// Iowa (cg- state page, US cluster Phase 4, row 75). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Iowa makes every school OFFER computer science at three levels, but no Iowa student has to TAKE it to
// graduate; the state is now rewriting its standards to add data science and AI. Sources read raw 17 to 18 October
// 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-iowa/):
//  - Iowa Department of Education, Guidance for House File 2629, January 24, 2022 (hf2629-guidance.pdf/.txt):
//    "On June 29, 2020, Governor Reynolds signed House File (HF) 2629 into law"; K-12 CS plan by July 1, 2022
//    (281--IAC 12.11(4)); grades 1-6 instruction "in at least one grade level" from July 1, 2023; grades 7-8 "in
//    seventh or eighth grade" from July 1, 2023; high schools "at least one high-quality one-semester course" from
//    July 1, 2022; FAQ 10: "This is an offer-and-teach requirement for districts and accredited nonpublic schools,
//    not a graduation requirement."; FAQ 5: one-half unit = "taught for at least 100 minutes per week for 18 weeks"
//    or "the equivalent of 60 hours of instruction"; FAQ 8: "A computer science endorsement is not required, at any
//    grade level, to teach computer science."; FAQ 1: concurrent enrollment may not meet the half unit; FAQ 9: no
//    spreading standards across other classes; FAQ 12/13: grades 1-8 "stand-alone, integrated or a combination".
//  - Iowa DE, Computer Science Instruction page: standards are "the CSTA K-12 Computer Science Standards", "approved
//    and adopted by the Iowa State Board of Education in June 2018"; CSEd Week 2026, Dec. 7-12.
//  - Iowa Computer Science Standards PDF: Level 1A Grades K-2, 1B Grades 3-5, 2 Grades 6-8, 3A Grades 9-10,
//    3B Grades 11-12; standard code 1A-DA-05.
//  - Iowa DE headline 2025-11-17: committee to review CS standards "and establish standards for data science and
//    artificial intelligence (AI) education"; "Starting in January 2026"; public comment, then State Board.
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): IA 2024-2025,
//    306 of 355 high schools (86.2%), source State Education Agency; trend 58% (2018-19) to 86.2%; participation
//    8,124 of 156,342 (5.20%), year matched to the 2024-2025 trend value, denominator NCES Fall 2022.
//  - College Board, School Report of AP Exams by State 2023-24: Iowa 190 (2023), 198 (2024).
//  - IANA tzdb northamerica: Iowa listed under US central time (America/Chicago); US rule Mar Sun>=8, Nov Sun>=1.
//  - Iowa DOT open data, Trail feature service (CC BY 4.0, Iowa DOT GIS Data Terms of Use), 3,219 records (count
//    query 3,219, downloaded 2,000 + 1,219); our FAC_DESC x SURF_DESC crosstab in our-crosstab.txt.
// Our calculations: our-derived-figures.txt. Lesson family: two-key crosstab (pivot) and what an "Unknown" cell means.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'IOWA', label: 'Iowa', blurb: 'Iowa schools must offer computer science but students need not take it; live classes plus a statewide trail data crosstab.' },
  market: US,
  slug: 'coding-and-ai-classes-in-iowa',
  code: 'aiio',
  accent: '#523920',
  accentRationale: 'Iowa: #523920, a deep plowed-soil brown from the US allocation table (alloc.tsv row 75), dark enough for body-text contrast on the paper and well apart from the other state accents',
  pageType: 'city',
  place: {
    name: 'Iowa',
    eyebrow: 'Iowa, United States',
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
  routeLabel: 'Iowa',
  title: 'Coding and AI Classes in Iowa | Live Online, Grades K to 12',
  description: 'Coding and AI classes for Iowa students, live online: what House File 2629 makes schools offer, the CSTA standards Iowa adopted, and a Python trail data project.',
  ogDescription: 'Every Iowa school must offer computer science, yet no student has to take it to graduate. The rules, the standards, the access figures and live classes for Iowa.',
  twitterDescription: 'Iowa coding and AI classes, live online, built around what HF 2629 does and does not require.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Iowa Students',
    description: 'Online Scratch, Python, data science, AP Computer Science and AI for Iowa students in kindergarten through twelfth grade, matched to level and taught live in English.'
  },

  h1: 'Coding and AI classes in Iowa',
  capsuleQ: 'Does Iowa require computer science to graduate from high school?',
  capsule: 'No. House File 2629, signed on June 29, 2020, makes every Iowa district and accredited nonpublic school offer computer science in elementary, middle and high school, but the Iowa Department of Education calls it an offer-and-teach requirement, not a graduation requirement. Modern Age Coders teaches Iowa students live online, from Scratch in second grade to Python data projects and AP Computer Science.',
  lead: 'Iowa wrote a computer science law that reaches elementary, middle and high school, and then stopped one step short of making students take the course. Schools have to put computer science on the timetable at every level; whether a particular student ever sits in that class is left to the student and the family. This page sets out what House File 2629 asks of schools, the CSTA standards Iowa adopted in 2018 and is now rewriting to include data science and artificial intelligence, the published counts of who offers and who enrolls, and a Python project built on the Iowa Department of Transportation&rsquo;s own statewide trail inventory.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Iowa.',

  picks: {
    eyebrow: 'Course picks for Iowa',
    h2: 'Where an Iowa student usually begins',
    intro: 'Four starting points, sorted by grade. A short free lesson confirms the right one before anything is booked.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades 2 to 5', note: 'Animations and games in blocks, the same Level 1A and 1B ideas Iowa elementary schools now teach in at least one grade.' },
      { course: 'python-ai-kids-masterclass', band: 'Grades 6 to 8', note: 'A first typed language for the seventh or eighth grade year in which every Iowa middle school must teach computer science.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 9 to 12', note: 'Python, tables and charts on real public data, the kind of work Iowa&rsquo;s coming data science standards point toward.' },
      { course: 'ap-computer-science-principles-exam-prep-course', band: 'Grades 10 to 12', note: 'The AP course and exam for students whose high school offers only the one required semester, or none that fits their timetable.' }
    ]
  },

  sections: [
    {
      id: 'offer', tint: '', eyebrow: 'House File 2629',
      h2: 'Iowa&rsquo;s rule: every school offers it, no student is forced to take it',
      intro: 'The Iowa Department of Education summarized the law in guidance dated January 24, 2022. These are its requirements, read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'What House File 2629 requires of Iowa districts and accredited nonpublic schools, per the Department&rsquo;s guidance', head: ['Level', 'What must happen', 'Start date'], rows: [
          ['Whole district', 'Develop and implement a standards-aligned K-12 computer science plan', 'July 1, 2022'],
          ['Grades 1 to 6', 'High-quality computer science instruction in at least one grade level', 'July 1, 2023'],
          ['Grades 7 and 8', 'High-quality computer science instruction in seventh or eighth grade', 'July 1, 2023'],
          ['Grades 9 to 12', 'At least one high-quality one-semester course, offered and taught', 'July 1, 2022']
        ] },
        { kind: 'p', text: 'The law itself dates from June 29, 2020, when the governor signed House File 2629. The guidance then answers fourteen practical questions, and question ten is the one families ask most. Do all high school students have to take a computer science class? The Department&rsquo;s answer is a flat no: &ldquo;This is an offer-and-teach requirement for districts and accredited nonpublic schools, not a graduation requirement.&rdquo;' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'How long is a semester?', p: 'The required high school course is one-half unit. The guidance defines that as at least 100 minutes per week for 18 weeks, or the equivalent of 60 hours, so a short trimester course does not qualify.' },
          { h3: 'What cannot count', p: 'A concurrent enrollment college course may not fill the half unit, and a high school may not scatter the standards across other subjects instead of running a real computer science course.' },
          { h3: 'Who may teach it', p: 'According to the guidance, a computer science endorsement is not required at any grade level; a teacher needs only an endorsement for the grade being taught. Training quality therefore varies from school to school.' }
        ] },
        { kind: 'callout', h3: 'What that means at home', p: 'Every Iowa student will meet some computer science before ninth grade, because elementary and middle schools must teach it. After that the subject becomes optional. A tenth grader who skips the one-semester course can graduate without writing another line of code, which is why some families look for classes outside school.' }
      ]
    },
    {
      id: 'trails', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What are Iowa&rsquo;s trails made of? A crosstab on state open data',
      intro: 'The Iowa Department of Transportation publishes its recreational trail inventory under a Creative Commons Attribution 4.0 licence. Students pull every record with Python and count them by two columns at once.',
      body: [
        { kind: 'table', caption: 'Iowa DOT trail records by facility type and surface (our crosstab of the 3,219 records downloaded 17 October 2026; selected columns)', head: ['Facility type', 'Concrete', 'Asphalt/Concrete', 'Asphalt', 'Granular', 'Crushed Limestone', 'Unknown'], rows: [
          ['Path', '634', '587', '509', '122', '69', '56'],
          ['Widened Sidewalk', '391', '260', '104', '2', '0', '16'],
          ['Shoulder', '20', '45', '33', '0', '0', '141'],
          ['Lane', '43', '118', '34', '2', '0', '0']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Step 1: get all of it', p: 'The service hands back at most 2,000 records per request. A count query said 3,219, so students page through with an offset, collect 2,000 and then 1,219, and check that every OBJECTID appears once before trusting any total.' },
          { h3: 'Step 2: count by two keys', p: 'A crosstab counts pairs. Students loop over the records and tally each combination of FAC_DESC and SURF_DESC, first with a dictionary keyed by a tuple, then with pandas.crosstab, and compare the two answers.' },
          { h3: 'Step 3: read the cells', p: 'Every one of the 69 Crushed Limestone records is a path, never a lane or a sidewalk. That pattern only appears when two columns are read together, which is the whole point of a two-way table.' }
        ] },
        { kind: 'callout', h3: 'The cell that teaches the most', p: 'Of 240 shoulder records, 141 have the surface Unknown. A careless reader concludes that Iowa road shoulders have mystery surfaces. A careful one says only that the inventory does not record them, and asks why. These counts are ours, from one download; the Iowa DOT does not publish this table, and its data can change after the date we read it.' },
        { kind: 'p', text: 'A second exercise adds up LENGTH_MILE by facility type. Our sum for paths is 2,281.3 miles and for all records 3,607.5 miles, but a sum of digitized segments is not an official trail mileage, so students write that caveat beside the number before they chart it. Another quirk worth spotting: 192 records carry no county name, so a county ranking built from this file would quietly leave them out.' }
      ]
    },
    {
      id: 'standards', tint: 'tint', eyebrow: 'Standards, old and new',
      h2: 'Iowa teaches the CSTA standards, and is now writing data science and AI standards',
      intro: 'Iowa did not write its own computer science standards from scratch. It adopted the national ones, and a state committee is reviewing them during 2026.',
      body: [
        { kind: 'table', caption: 'How Iowa&rsquo;s computer science standards are grouped, with one standard from each level (Iowa Computer Science Standards document, wording shortened by us)', head: ['CSTA level', 'Grades', 'One standard at that level'], rows: [
          ['Level 1A', 'Grades K-2', '1A-DA-05: store, copy, search, retrieve, modify and delete information on a computing device'],
          ['Level 1B', 'Grades 3-5', '1B-NI-04: model how information is broken into packets, sent across networks and reassembled'],
          ['Level 2', 'Grades 6-8', '2-DA-07: represent data using multiple encoding schemes'],
          ['Level 3A', 'Grades 9-10', '3A-DA-11: create interactive data visualizations that help others understand real-world phenomena'],
          ['Level 3B', 'Grades 11-12', '3B-AP-08: describe how artificial intelligence drives many software and physical systems']
        ] },
        { kind: 'p', text: 'The Department says the standards were approved and adopted by the Iowa State Board of Education in June 2018 on an Iowa team&rsquo;s recommendation, and that they are the CSTA K-12 Computer Science Standards developed by the Computer Science Teachers Association. Schools must align instruction to them; the guidance notes that the law sets no minimum number of standards a course has to cover.' },
        { kind: 'callout', h3: 'The 2026 rewrite', p: 'In November 2025 the Department invited applications for a committee to review the computer science standards and establish standards for data science and artificial intelligence. It said the committee would begin meeting in January 2026, that draft standards would go out for public comment, and that a final proposal would go to the State Board. Until a vote, the 2018 standards remain the ones schools follow.' }
      ]
    },
    {
      id: 'numbers', tint: '', eyebrow: 'Access and enrollment',
      h2: 'Most Iowa high schools now offer computer science. Far fewer students take it',
      intro: 'Two national datasets carry Iowa rows: Code.org counts schools and enrolled students, and the College Board counts schools giving AP exams. Percentages we worked out ourselves are marked.',
      body: [
        { kind: 'table', caption: 'Share of Iowa public high schools offering computer science (Code.org, 2025, Access Percent over the Years)', head: ['School year', 'Offering CS'], rows: [
          ['2018 to 2019', '58%'],
          ['2020 to 2021', '64%'],
          ['2022 to 2023', '84%'],
          ['2023 to 2024', '84.4%'],
          ['2024 to 2025', '86.2%, 306 of 355 high schools']
        ] },
        { kind: 'table', mt: true, caption: 'Enrollment and AP in Iowa', head: ['Measure', 'Value', 'Where it comes from'], rows: [
          ['Iowa teens in a CS class during 2024 to 2025', '8,124 of 156,342, which we work out as 5.20%', 'Code.org (2025), Most Recent Participation Data; the student total is from NCES, fall 2022'],
          ['Iowa schools with AP exams, 2023', '190', 'College Board, School Report of AP Exams by State'],
          ['Iowa schools with AP exams, 2024', '198', 'College Board, School Report of AP Exams by State']
        ] },
        { kind: 'p', text: 'Read side by side, those rows show the offer-and-teach model at work. The share of high schools offering a course climbed from 58% to 86.2% in six years, roughly the period in which the law took effect, while about one high school student in twenty was enrolled in computer science in 2024 to 2025. Code.org gives the state education agency as the source of the access count. For citation, Code.org asks for: Code.org (2025). 2025 State of AI + CS Education. Only individual Iowa values appear on this page; the full sheet is theirs to publish.' }
      ]
    },
    {
      id: 'clock', tint: 'deep', eyebrow: 'Class times',
      h2: 'One time zone for the whole state: Central Time',
      intro: 'The IANA time zone database lists Iowa, whole, in US central time, which it represents with the America/Chicago zone.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Pick your slot', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'The gap to India', p: 'Our teachers work on India time, which never shifts. By our arithmetic India runs 10 hours 30 minutes ahead of Iowa in summer and 11 hours 30 minutes ahead in winter.' },
          { h3: 'This school year', p: 'Iowa clocks fall back on November 1, 2026 and spring forward on March 14, 2027, so every class time we send is written in Central Time, never as a bare offset.' }
        ] },
        { kind: 'spec', title: 'Code that survives November', p: 'Students who build a homework reminder app learn to store times with the America/Chicago zone from the tz database rather than a fixed minus six or minus five. The test is simple: schedule an event across November 1, 2026 and check that it still fires at the right local hour.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Four rungs that line up with Iowa&rsquo;s CSTA levels',
    intro: 'Grades are a guide; a short placement task settles where a student actually starts.',
    cols: [
      { band: 'Grades K to 5', h3: 'Blocks and patterns', p: 'Sequences, loops and simple data in Scratch, the Level 1A and 1B ideas, finished as games a child can show off.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Grades 6 to 8', h3: 'Typed code arrives', p: 'Python and the web for Level 2, timed to support the middle school year in which Iowa schools must teach computer science.', courses: ['python-ai-kids-masterclass', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 9 to 10', h3: 'Beyond one semester', p: 'Data tables, functions and larger programs, for students whose school offers one course and who want a second year of depth.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Grades 11 to 12', h3: 'AP and machine learning', p: 'AP Computer Science Principles or A, then models trained and tested on data the student has cleaned.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Iowa wants AI standards. Why still learn to code?',
    intro: 'Because the state&rsquo;s own plan puts data science beside AI, and both start with knowing what a table really says.',
    p1: 'A chatbot asked about Iowa trails might announce that shoulders have unknown surfaces. The crosstab shows something different: the inventory leaves that field blank for 141 shoulder records. Only a student who has counted the rows can tell a property of the world from a gap in the data.',
    p2: 'That distinction is the backbone of data science and of trustworthy AI, which is why Iowa is drafting standards for both. Students who write their own counting code can use AI assistants to speed up the boring parts and still catch the moment a confident answer rests on missing values.',
    closer: 'Whatever the new Iowa standards say when the State Board votes, the habit they will reward is checking the data before believing the summary.',
    blogAnchor: 'whether coding still pays off in an AI decade'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Live classes for Iowa homes, from Sioux City to Davenport',
    intro: 'A rural district with one computer science teacher and a city school with five get the same class online.',
    cells: [
      { h3: 'No commute', p: 'Class happens at the kitchen table or the bedroom desk, which matters in a state where the nearest coding club can be a county away.' },
      { h3: 'Iowa school calendar', p: 'Teachers plan around US grades and Iowa school terms, and can tie projects to the semester course a student is taking. Graded school work stays the student&rsquo;s own.' },
      { h3: 'Placement first', p: 'The first session is free and practical: the student builds something small, and we suggest a level, a course and a time afterwards. No card is requested.' },
      { h3: 'Small batches by level', p: 'Groups of fifteen to twenty learners at a similar stage, drawn from Iowa and other states.' },
      { h3: 'Private option', p: 'One teacher, one student, for anyone aiming at AP, a competition or simply a faster pace.' },
      { h3: 'Central Time always', p: 'Every confirmation names the time in Central Time, so nobody has to convert.' }
    ],
    spec: { title: 'Taught from India, not from Iowa', p: 'Modern Age Coders has no office or classroom in Iowa and does not claim one. Lessons are live and online, taught from India. A student needs a computer, a headset or speakers and a stable connection.' }
  },

  fees: {
    h2: 'Fees for Iowa families',
    intro: 'Three numbers, the same for every family in the state.',
    first: 'One complete lesson at no cost, followed by a suggested course, level and class time.',
    group: 'A month of live classes in a level-matched batch of fifteen to twenty learners.',
    private: 'A month of live classes with a teacher working only with your student.',
    closer: 'All families outside India are billed in US dollars at one rate, so Ames pays what Dubuque pays. Nothing is charged until the free lesson is done and you have agreed a course and time; the pricing page covers holidays and missed sessions.'
  },

  reviewsH2: 'Reviews parents and students left on Google',

  book: {
    h2: 'Book a free first lesson for your Iowa student',
    intro: 'Tell us the grade and what your student enjoys. A second grader might start a Scratch animation; a junior might open the Iowa DOT trail file and build the crosstab above.',
    success: 'Thank you. The team will contact you shortly about a class for Iowa.'
  },

  faq: {
    h2: 'Questions Iowa families ask',
    intro: 'Short answers about Iowa&rsquo;s rules and about our classes.',
    items: [
      { q: 'Must Iowa high school students take computer science to graduate?', a: 'No. The Iowa Department of Education describes House File 2629 as an offer-and-teach requirement for districts and accredited nonpublic schools, not a graduation requirement.' },
      { q: 'What does House File 2629 make Iowa schools do?', a: 'Adopt a K-12 computer science plan by July 1, 2022, offer a one-semester high school course from July 1, 2022, and teach computer science in one elementary grade and in seventh or eighth grade from July 1, 2023.' },
      { q: 'Which standards does Iowa use for computer science?', a: 'The CSTA K-12 Computer Science Standards, which the Iowa State Board of Education adopted in June 2018. They run from Level 1A in grades K-2 to Level 3B in grades 11-12.' },
      { q: 'Is Iowa adding AI to its standards?', a: 'The Department began a review in 2026 to update the computer science standards and establish standards for data science and artificial intelligence. Any change still needs public comment and a State Board vote.' },
      { q: 'What share of Iowa high schools teach computer science?', a: 'Code.org (2025) reports 306 of 355 Iowa public high schools offering it in 2024 to 2025, or 86.2%. In the same year 8,124 high school students were enrolled.' },
      { q: 'Does a college course count toward the Iowa requirement?', a: 'Not for the required half unit. The guidance says a concurrent enrollment course may not be used to meet it, although it can sit alongside it.' },
      { q: 'Can your lessons stand in for the school course?', a: 'No. Only a school course meets the Iowa requirement. What we add is extra practice, bigger projects and AP coaching, while any graded school assignment remains the student\'s own work.' },
      { q: 'When are classes held for Iowa students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Central Time.' },
      { q: 'Where are your teachers based?', a: 'In India. Modern Age Coders runs no Iowa location; every lesson is live online, so a computer, sound and a steady connection are all a student needs.' },
      { q: 'Where can I find what classes cost?', a: 'Scroll to the fees panel: it shows a no-cost opening lesson, a monthly group rate and a monthly private rate. Billing begins only after that opening lesson.' }
    ]
  },

  next: {
    eyebrow: 'Keep exploring',
    h2: 'More reading for Iowa students and parents',
    html: 'Middle schoolers can browse <a class="cg-inline-link" href="/coding-classes-for-middle-school-students">coding classes for middle school students</a>, and high schoolers can compare <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>. Builders looking for a goal can read the <a class="cg-inline-link" href="/presidential-ai-challenge-guide">Presidential AI Challenge guide</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a> lists every US guide.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'Iowa and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'All US pages' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/presidential-ai-challenge-guide', label: 'Presidential AI Challenge' },
    { href: '/coding-classes-for-high-school-students', label: 'High school coding' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-aiio .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.4vw, 2.6rem); }
.cg-root.cg-aiio .cg-hero h1 { font-weight: 720; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-aiio .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-aiio .cg-eyebrow { letter-spacing: 0.08em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-aiio .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-aiio .cg-table th { text-align: left; font-weight: 700; }
.cg-root.cg-aiio .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aiio .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.9rem); }
.cg-root.cg-aiio .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'Iowa, read raw 17 to 18 October 2026: Iowa Department of Education Guidance for House File 2629 (January 24, 2022): signed June 29, 2020; K-12 plan by July 1, 2022; grades 1-6 one grade level and grades 7-8 seventh or eighth grade from July 1, 2023; high school one-semester course from July 1, 2022; offer-and-teach, not a graduation requirement; half unit 100 minutes per week for 18 weeks or 60 hours; no endorsement required; concurrent enrollment excluded. Computer Science Instruction page: CSTA standards adopted June 2018. Standards PDF levels 1A to 3B. Headline 2025-11-17: data science and AI standards, committee from January 2026. Code.org (2025) access and participation tabs; College Board AP schools 190 and 198; IANA America/Chicago.',
    localProject: 'Iowa DOT Trail feature service (CC BY 4.0 plus Iowa DOT GIS Data Terms of Use), 3,219 records downloaded 17 October 2026 and checked against the count query; our FAC_DESC by SURF_DESC crosstab (Path 1,986 records; Crushed Limestone 69, all paths; Shoulder 141 of 240 Unknown); our LENGTH_MILE sums Path 2,281.3 and all 3,607.5, labelled as ours and not official; 192 records without a county name. Lesson family: two-key crosstab and reading Unknown cells.',
    requiredMentions: [
      'House File 2629',
      'June 29, 2020',
      'offer-and-teach requirement',
      '100 minutes per week for 18 weeks',
      'data science and artificial intelligence',
      '306 of 355',
      '8,124 of 156,342',
      'Crushed Limestone',
      '2,281.3'
    ],
    sources: [
      { claim: 'Iowa Department of Education: Guidance for House File 2629, Computer Science Instruction and Requirements (January 24, 2022).', url: 'https://educate.iowa.gov/media/7861/download?inline' },
      { claim: 'Iowa Department of Education: Computer Science Instruction page, CSTA standards adopted June 2018.', url: 'https://educate.iowa.gov/pk-12/standards/instruction/computer-science' },
      { claim: 'Iowa Department of Education: Iowa Computer Science Standards document, levels 1A to 3B.', url: 'https://educate.iowa.gov/media/5191/download?inline' },
      { claim: 'Iowa Department of Education, 17 November 2025: committee for computer science, data science and AI standards.', url: 'https://educate.iowa.gov/headline-story/2025-11-17/department-seeks-committee-members-computer-science-data-science-and-ai-standards' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Iowa access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'Iowa DOT open data: Trail feature service (CC BY 4.0).', url: 'https://services.arcgis.com/8lRhdTsQyJpO52F1/arcgis/rest/services/Trail_View/FeatureServer' },
      { claim: 'IANA tzdb northamerica: Iowa in US central time, America/Chicago, US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'That Iowa requires computer science to graduate: refused; the Department guidance says it is not a graduation requirement.',
      'The Iowa Department of Education 2024 news item citing an 84 percent figure and a top-10 ranking: not used; the page quotes the Code.org sheet directly instead of a ranking.',
      'Code.org Graduation, Geography, Gender and Race tabs and the Code.org state policy summaries: not used.',
      'Names of individual Iowa schools, districts and committee members: not printed; counts only.',
      'Official Iowa trail mileage: not read; only our segment sums, labelled as ours.',
      'That our classes satisfy HF 2629 or replace the school course: refused.',
      'Any affiliation with the Iowa Department of Education, the Iowa DOT, Code.org, CSTA or the College Board.'
    ]
  }
};
