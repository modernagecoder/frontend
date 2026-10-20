'use strict';
// Washington State (cg- state page, US cluster Phase 4, row 104). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Washington law guarantees every high school student access to an elective computer science course and lets
// a CS course stand in for a third year of math or science, yet about half of Washington high schools offer CS and
// under five in a hundred students take it. What does the law say, what do the numbers say, and how does a student
// use the options? Sources read raw on 18 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-classes-in-washington/):
//  - OSPI (ospi.k12.wa.us): HTTP 403 on 17 October 2026, host treated as blocked (dept-blocked.txt). Statute used
//    instead, from the Washington State Legislature (app.leg.wa.gov), labelled as statute on the page.
//  - RCW 28A.230.300 Computer science: "(1) Beginning no later than the 2022-23 school year, each school district that
//    operates a high school must, at a minimum, provide an opportunity to access an elective computer science course
//    that is available to all high school students."; course "must be aligned to the state learning standards for
//    computer science or mathematics"; (2) from "the 2019-20 school year" districts "may award academic credit for
//    computer science" on a competency examination; (4)(a) a student "may substitute a computer science course aligned
//    to state computer science learning standards as an alternative to a third year mathematics or third year science
//    course" if the counselor gives "written notification of the consequences of the substitution on postsecondary
//    opportunities", the student, parent and counselor or principal agree, and it is aligned with "the student's high
//    school and beyond plan"; (4)(b) "may only be used once per student"; history [2024 c 66 s 8; 2021 c 307 s 1;
//    2019 c 180 s 2]; finding: "By providing more opportunities to take courses and earn credit in computer science,
//    Washington can better prepare students to excel both in school and after graduation."
//  - RCW 28A.230.097: "Boards of directors must approve AP computer science courses as equivalent to high school
//    mathematics or science, and must denote on a student's transcript that AP computer science qualifies as a
//    math-based quantitative course for students who take the course in their senior year."
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): WA access 38%
//    (2018-19), 40%, 41%, 44%, 48%, 50.2% (2023-24), 51.2% (2024-25); most recent 396 of 774 (2024-2025, "State
//    Education Agency"); participation 4.7% (2020-21), 5.5%, 5.8%, 5.1%, 4.54% (2024-25); most recent 15,821 of
//    348,814; denominator NCES fall 2022. National 2024-25: access 60%, participation 6.1%.
//  - College Board, School Report of AP Exams by State 2023-24: Washington 395 (2023), 400 (2024); public 320, 323;
//    non-public 75, 77.
//  - IANA tzdb northamerica: Pacific list "Nevada (except West Wendover), Oregon (except the northern ¾ of Malheur
//    county), and Washington"; zone1970.tab America/Los_Angeles "Pacific"; Rule US 2007 max Mar Sun>=8, Nov Sun>=1.
//  - City of Seattle, SDOT Trees (open data item db783659194f47ef8fbd8e010c102809; licence text "The City of Seattle
//    makes no representation or warranty as to its accuracy"; description recommends the query CURRENT_STATUS =
//    INSVC). Server-side counts 18 October 2026: 276,685 records; INSVC 215,696; REMOVED 58,149; PLANNED 2,607. Among
//    INSVC (ours): 778 SCIENTIFIC_NAME values; 35 reach half the trees; top 10 hold 24.4%; 46 appear once; 135 five
//    times or fewer; 59 end in "sp."; Acer palmatum 8,534, Acer rubrum 6,361, Malus sp. 6,081; 176 GENUS values
//    including a blank (702 trees); 6 genera reach half; Acer 45,966 (21.3%), Prunus 32,812, Malus 10,450.
// Lesson family: frequency tables, cumulative share and the long tail.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'WASHINGTON STATE', label: 'Washington State', blurb: 'Coding and AI for Washington State students, with the state law on CS access and math or science substitution, and a Seattle street tree project.' },
  market: US,
  slug: 'coding-classes-in-washington',
  code: 'aws',
  accent: '#5F538A',
  accentRationale: 'Washington State: #5F538A, a dusky lupine violet, allocated in alloc.tsv row 104 and checked by the build for 4.5:1 contrast on every paper',
  pageType: 'city',
  place: {
    name: 'Washington',
    eyebrow: 'Washington State, United States',
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
  routeLabel: 'Washington State',
  title: 'Coding and AI Classes in Washington State | Live Online',
  description: 'Coding and AI classes for Washington State students, live online: the law on CS access, swapping a third math or science year, the data, and a Seattle tree project.',
  ogDescription: 'Washington law guarantees access to an elective CS course and lets CS replace a third year of math or science. The rules, the numbers, and live online classes.',
  twitterDescription: 'Washington State coding and AI classes, live online in Pacific Time.',
  ogImageCourse: 'ap-computer-science-a-java-exam-prep-course',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Washington State Students',
    description: 'AI literacy, Python, data science and AP Computer Science A for Washington State students from second grade to twelfth, taught live online in English and scheduled in Pacific Time.'
  },

  h1: 'Coding and AI classes in Washington State',
  capsuleQ: 'What does Washington State law say about computer science in high school?',
  capsule: 'Under RCW 28A.230.300, since the 2022 to 2023 school year every Washington school district that operates a high school must give all high school students access to an elective computer science course, and a student may substitute one computer science course for a third year of math or science, once. In 2024 to 2025, 396 of 774 Washington high schools offered CS, according to Code.org (2025). We teach Washington students live online in Pacific Time. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.',
  lead: 'Washington is one of the most code-literate economies in the country, and its school law reflects that: the Legislature has written computer science access, competency-based credit and a math or science substitution into the Revised Code of Washington. The published figures show the gap that remains, with about half of the state&rsquo;s high schools offering a computer science course and fewer than five students in a hundred taking one. This page reads the statute line by line, sets out the numbers, explains how a family can use the substitution and AP equivalency rules well, and walks through a Seattle street tree project that teaches one of the most useful ideas in data work, the long tail.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Washington State.',

  picks: {
    eyebrow: 'Course picks for Washington State',
    h2: 'Four courses matched to Washington&rsquo;s options',
    intro: 'Picked with the state rules in mind, from first AI lessons to AP Computer Science A, which Washington districts must treat as equivalent to math or science. The free lesson sets the level.',
    items: [
      { course: 'ai-literacy-for-kids-course', band: 'Grades 2 to 5', note: 'What AI is, how it learns from examples and where it goes wrong, taught with games and simple experiments suited to young children.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 12', note: 'Python from first lines to files and data, a solid base for any computer science course a Washington high school offers.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 9 to 12', note: 'Frequency tables, cumulative shares and charts on real public data, the method behind the Seattle tree project on this page.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Java for AP Computer Science A: object-oriented design, the free-response section and full exam practice.' }
    ]
  },

  sections: [
    {
      id: 'law', tint: '', eyebrow: 'The statute',
      h2: 'Computer science in the Revised Code of Washington',
      intro: 'We could not read the Office of Superintendent of Public Instruction website, which refused our request, so this section quotes the law itself as the Washington State Legislature publishes it, read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'RCW 28A.230.300, Computer science, and RCW 28A.230.097, as published by the Legislature', head: ['Provision', 'What the statute says'], rows: [
          ['Access, RCW 28A.230.300(1)', 'Beginning no later than the 2022 to 2023 school year, each school district that operates a high school must, at a minimum, provide an opportunity to access an elective computer science course available to all high school students'],
          ['Alignment', 'Any such course must be aligned to the state learning standards for computer science or mathematics'],
          ['Credit by competency, (2)', 'Beginning in the 2019 to 2020 school year, districts may award academic credit for computer science on completion of a competency examination aligned with the standards'],
          ['Substitution, (4)(a)', 'A student may substitute a computer science course aligned to state standards as an alternative to a third year mathematics or third year science course, under conditions'],
          ['Once only, (4)(b)', 'The substitution may only be used once per student'],
          ['AP equivalency, RCW 28A.230.097', 'Boards must approve AP computer science courses as equivalent to high school mathematics or science, and mark AP computer science on the transcript as a math-based quantitative course for seniors who take it']
        ] },
        { kind: 'p', text: 'The section&rsquo;s history line cites the session laws of 2019, 2021 and 2024. The 2019 findings explain the purpose in the Legislature&rsquo;s own words: &ldquo;By providing more opportunities to take courses and earn credit in computer science, Washington can better prepare students to excel both in school and after graduation.&rdquo;' },
        { kind: 'p', text: 'Note what the access rule does and does not require. It is written at the level of the school district and promises an opportunity to access an elective course; it does not make computer science a graduation requirement, and it does not say every building must teach its own class. We report the law as written and leave district practice to each district.' }
      ]
    },
    {
      id: 'swap', tint: 'deep', eyebrow: 'Using the substitution',
      h2: 'Swapping a third year of math or science for computer science',
      intro: 'RCW 28A.230.300(4) sets three conditions before a student can make the swap. Each one is a conversation worth having early, not in the spring of senior year.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Written notice first', p: 'Before the swap, the school counselor must give the student and parent or guardian written notification of the consequences of the substitution on postsecondary opportunities. Read it carefully; that is its purpose.' },
          { h3: 'Three-way agreement', p: 'The student, the parent or guardian, and the school counselor or principal must all agree. A student cannot make the change alone, and neither can the school.' },
          { h3: 'Fits the plan', p: 'The substitution must align with the student&rsquo;s High School and Beyond Plan, the Washington planning document that follows a student through high school.' }
        ] },
        { kind: 'table', mt: true, caption: 'Questions a Washington family might weigh before using the swap (the questions are ours, not the statute&rsquo;s)', head: ['Question', 'Why it matters'], rows: [
          ['Which year is being replaced, math or science?', 'The law allows either, but only once, so the choice is worth making deliberately'],
          ['Is the computer science course aligned to state standards?', 'Only an aligned course qualifies under subsection (4)(a)'],
          ['Would AP Computer Science work instead?', 'RCW 28A.230.097 already requires boards to treat AP computer science as equivalent to math or science'],
          ['What do the colleges on the student&rsquo;s list expect?', 'The counselor&rsquo;s written notice exists because postsecondary expectations vary']
        ] },
        { kind: 'callout', h3: 'Where outside classes fit', p: 'Our classes do not create credit and do not count as the course in the statute. What they can do is make the school course, the competency examination route or AP Computer Science A far more comfortable, because the student arrives already writing real code.' }
      ]
    },
    {
      id: 'numbers', tint: 'tint', eyebrow: 'The published figures',
      h2: 'About half of Washington high schools offer computer science',
      intro: 'Unusually, Washington&rsquo;s row in the Code.org 2025 spreadsheet has an access value for all seven years, so the whole trend is visible. AP school counts come from the College Board file.',
      body: [
        { kind: 'table', caption: 'Seven years of Washington access and five of participation, as printed by Code.org (2025)', head: ['Year', 'Share of high schools', 'Share of students'], rows: [
          ['2018 to 2019', '38%', 'No participation figure'],
          ['2019 to 2020', '40%', 'No participation figure'],
          ['2020 to 2021', '41%', '4.7%'],
          ['2021 to 2022', '44%', '5.5%'],
          ['2022 to 2023', '48%', '5.8%'],
          ['2023 to 2024', '50.2%', '5.1%'],
          ['2024 to 2025', '51.2%, or 396 of 774', '4.54%, or 15,821 of 348,814']
        ] },
        { kind: 'table', mt: true, caption: 'Washington against the 2024 to 2025 national row, and AP school counts from the College Board', head: ['Measure', 'Washington', 'Comparison or detail'], rows: [
          ['High schools offering CS, 2024 to 2025', '51.2%', '60% nationally'],
          ['Students enrolled in CS, 2024 to 2025', '4.54%', '6.1% nationally'],
          ['Schools with AP exams, 2023', '395', '320 public, 75 non-public'],
          ['Schools with AP exams, 2024', '400', '323 public, 77 non-public']
        ] },
        { kind: 'p', text: 'Access has climbed every single year in the series, from 38% to 51.2%, a steady line few states can show. Participation tells a flatter story, peaking at 5.8% in 2022 to 2023 and easing to 4.54%. One series counts buildings and the other counts people; for the second, the sheet divides by an NCES student total from fall 2022. The source gives no explanation for either trend, and we offer none.' },
        { kind: 'p', text: 'Please cite these values as Code.org (2025). 2025 State of AI + CS Education. This page repeats only the Washington cells, never the full dataset.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Seattle&rsquo;s street trees and the long tail',
      intro: 'The City of Seattle publishes its Department of Transportation street tree inventory as open data, and its own description recommends filtering to trees in service. Students build a frequency table and find out how a few names dominate and hundreds barely appear.',
      body: [
        { kind: 'table', caption: 'From records to the trees in service (server-side counts on the SDOT Trees layer, 18 October 2026; our queries)', head: ['Filter', 'Records'], rows: [
          ['All records', '276,685'],
          ['CURRENT_STATUS is INSVC (in service)', '215,696'],
          ['Marked REMOVED', '58,149'],
          ['Marked PLANNED', '2,607']
        ] },
        { kind: 'table', mt: true, caption: 'The long tail among in-service trees (our calculations from the city&rsquo;s SCIENTIFIC_NAME and GENUS fields)', head: ['Measure', 'By scientific name', 'By genus'], rows: [
          ['Distinct values', '778', '176, one of them blank (702 trees)'],
          ['Values needed to cover half the trees', '35', '6'],
          ['Share held by the top 10 values', '24.4%', '62.0%'],
          ['Values that appear exactly once', '46', '14'],
          ['Values that appear five times or fewer', '135', '35']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The head', p: 'Acer, the maples, is the largest genus with 45,966 in-service trees, 21.3% of the total, followed by Prunus with 32,812 and Malus with 10,450. Acer palmatum leads the scientific names with 8,534.' },
          { h3: 'The tail', p: 'At the other end, 46 scientific names occur exactly once. Students plot names in descending order, then the cumulative share, and watch the curve flatten long before it reaches 778.' },
          { h3: 'Names that are not species', p: 'Fifty-nine scientific names end in sp., meaning only the genus was recorded, such as Malus sp. with 6,081 trees. Whether to merge them is a decision the student must state.' }
        ] },
        { kind: 'p', text: 'The level of grouping changes the picture entirely: 35 names cover half the trees, but just 6 genera do. In pandas the whole analysis is three lines, <code>counts = df["GENUS"].value_counts()</code>, then <code>share = counts.cumsum() / counts.sum()</code>, then a count of how many values sit below 0.5. The harder part is the write-up, where students explain why the filter, the blank genus and the sp. names each change the answer.' },
        { kind: 'callout', h3: 'Our figures, clearly labelled', p: 'All counts and shares here are our own queries and arithmetic on the layer as it stood on 18 October 2026, and the city refreshes it daily. The City of Seattle says it makes no representation or warranty as to the data&rsquo;s accuracy, and these figures are not an official tree census.' }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Class times',
      h2: 'Pacific Time classes, taught from India',
      intro: 'The IANA time zone database lists Washington in the US Pacific group, kept under America/Los_Angeles, the zone our scheduling uses for every Washington family.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A Seattle afternoon', p: 'A 4:00 p.m. class in Seattle starts at 4:30 a.m. the following day in India while Pacific Daylight Time is in force, and at 5:30 a.m. once Pacific Standard Time returns.' },
          { h3: 'The widest US gap we teach', p: 'India sits at UTC plus 5:30 all year. Washington is UTC minus 7 in summer and minus 8 in winter, which puts India 12 hours 30 minutes or 13 hours 30 minutes ahead.' },
          { h3: 'This year&rsquo;s changes', p: 'Following the US rule in the IANA data, Washington clocks fall back on November 1, 2026 and spring forward on March 14, 2027. We restate class times in Pacific Time before each change.' }
        ] },
        { kind: 'spec', title: 'A date-line puzzle for students', p: 'Because India is more than twelve hours ahead, a Washington evening is already the next calendar day for the teacher. Students who build a schedule converter with America/Los_Angeles and Asia/Kolkata see the date change in their output, a neat test that their code handles days as well as hours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From AI basics to AP Computer Science A',
    intro: 'Typical starting points only. The free placement lesson decides where a student really begins.',
    cols: [
      { band: 'Grades K to 3', h3: 'First logic and AI ideas', p: 'Block programs and gentle activities on how computers follow rules and learn from examples.', courses: ['kids-coding-blocks-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 4 to 7', h3: 'Games and first Python', p: 'Scratch and Python projects with scores, menus and small simulations.', courses: ['scratch-programming-complete-course', 'python-ai-kids-masterclass'] },
      { band: 'Grades 8 to 10', h3: 'Python with data', p: 'Files, frequency tables and charts, ready for a school CS course or a competency exam.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Grades 11 to 12', h3: 'AP and machine learning', p: 'Java for AP Computer Science A, or machine learning projects tested on real data.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI tools are trained on long tails too',
    intro: 'The Seattle tree table is a small model of a big problem in machine learning.',
    p1: 'A dataset where a few categories dominate and hundreds are rare is exactly the kind on which an AI model can look accurate while failing on the rare cases. A classifier that guessed Acer for every Seattle street tree would be right about one time in five and useless for the 46 names that appear only once.',
    p2: 'Students who have built the frequency table themselves understand why accuracy alone is not enough, and why a good evaluation looks at the tail as well as the head. That is the kind of judgement we teach alongside the code, so that AI tools become something a student can question rather than simply trust.',
    closer: 'Washington has written computer science into its school law; the students who get most from it will be the ones who learn to look past the average.',
    blogAnchor: 'is learning to code still worth it in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the Olympic Peninsula to Spokane, one live class',
    intro: 'The Cascades split the state in two; an online class does not notice.',
    cells: [
      { h3: 'From home, east or west', p: 'Students in Seattle, Tacoma, Spokane, Vancouver, Yakima or a small town join from their own laptop or desktop.' },
      { h3: 'Aligned with US school', p: 'Teachers plan in US grade levels around the Washington school year. Coursework for school, including any competency examination, stays the student&rsquo;s own.' },
      { h3: 'A free first lesson', p: 'We start with a real coding task to find the right level. No card or payment details are needed for it.' },
      { h3: 'Grouped by ability', p: 'Each batch holds fifteen to twenty learners who code at roughly the same level, some from Washington and some from other states.' },
      { h3: 'One-to-one', p: 'A private teacher for AP Computer Science A, an independent project or a faster pace.' },
      { h3: 'Your schedule', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'Online from India, nothing local', p: 'Classes are live online and taught from India. Modern Age Coders has no Washington office or classroom and claims none. A computer, working audio and a steady connection are all a student needs.' }
  },

  fees: {
    h2: 'Fees for Washington families',
    intro: 'In US dollars, the same in Seattle and in the smallest town.',
    first: 'A full first lesson free of charge, ending with a recommendation for course, level and time.',
    group: 'A month of live classes in a level-matched batch of fifteen to twenty students.',
    private: 'A month of live classes with one teacher and one student.',
    closer: 'One US dollar rate applies across Washington State. You are billed only after the free lesson, when the plan is agreed; the pricing page covers holidays and missed sessions.'
  },

  reviewsH2: 'What our Google reviewers say',

  book: {
    h2: 'Request a free lesson for a Washington student',
    intro: 'Share the student&rsquo;s grade and interests. A third grader gets a first AI game, a seventh grader a Python program, and a junior the Seattle long-tail analysis.',
    success: 'Thank you. We will be in touch soon to arrange a lesson in Pacific Time.'
  },

  faq: {
    h2: 'Washington State coding and AI questions',
    intro: 'Answers from the statute, the published data and how our classes work.',
    items: [
      { q: 'Do Washington high schools have to offer computer science?', a: 'RCW 28A.230.300 says that since the 2022 to 2023 school year each school district operating a high school must provide an opportunity to access an elective computer science course available to all high school students.' },
      { q: 'Is computer science a graduation requirement in Washington?', a: 'Not under RCW 28A.230.300. The statute guarantees access to an elective course and allows a substitution; it does not require every student to take computer science.' },
      { q: 'Can computer science replace a third year of math or science?', a: 'Yes, once. A student may substitute an aligned computer science course for a third year math or science course after written notice from the counselor, with agreement and in line with the High School and Beyond Plan.' },
      { q: 'Does AP Computer Science count as math or science in Washington?', a: 'RCW 28A.230.097 requires district boards to approve AP computer science courses as equivalent to high school mathematics or science.' },
      { q: 'Can students earn CS credit by examination?', a: 'Since the 2019 to 2020 school year, districts may award computer science credit for a competency examination aligned with state standards, under a written district policy.' },
      { q: 'How many Washington high schools offer computer science?', a: 'Code.org (2025) reports 396 of 774 Washington high schools, or 51.2%, offering computer science in 2024 to 2025, with 4.54% of high school students enrolled.' },
      { q: 'How many Washington schools give AP exams?', a: 'The College Board lists 395 Washington schools with AP exams in 2023 and 400 in 2024.' },
      { q: 'Do your classes count for Washington credit?', a: 'We make no such claim. Credit and competency examinations are handled by districts; our classes build the skills alongside school.' },
      { q: 'What time zone are classes in?', a: 'Pacific Time, the America/Los_Angeles zone. We restate times before November 1, 2026 and March 14, 2027.' },
      { q: 'When can my student attend?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.', boiler: true },
      { q: 'Is there a center in Washington State?', a: 'No. All teaching is live online from India, and there is no Washington location, nor any claim of one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Washington students',
    html: 'Seniors weighing the AP route can read about <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a> and <a class="cg-inline-link" href="/ap-computer-science-principles-online-coaching">AP Computer Science Principles coaching</a>. Students looking for experience outside school can explore <a class="cg-inline-link" href="/computer-science-internships-for-high-school-students">computer science internships for high school students</a> or <a class="cg-inline-link" href="/usaco-preparation-online-coaching">USACO preparation</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Washington State and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A' },
    { href: '/computer-science-internships-for-high-school-students', label: 'CS internships' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-aws .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.4vw, 2.8rem); }
.cg-root.cg-aws .cg-hero h1 { font-weight: 690; letter-spacing: -0.022em; line-height: 1.07; }
.cg-root.cg-aws .cg-capsule { border-left: 4px solid var(--cg-accent); border-top: 1px solid var(--cg-accent); padding: 0.8rem 0 0 1rem; }
.cg-root.cg-aws .cg-eyebrow { letter-spacing: 0.13em; font-weight: 650; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-aws .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.014em; }
.cg-root.cg-aws .cg-grid-3 { gap: clamp(0.9rem, 2.4vw, 1.8rem); }
.cg-root.cg-aws .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-aws .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aws .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-aws .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Washington State, read raw on 18 October 2026: OSPI 403 (blocked), so statute from the Washington State Legislature: RCW 28A.230.300 (access to an elective CS course no later than 2022-23 in each district operating a high school; alignment; competency credit from 2019-20; substitution for a third year of math or science with written notice, agreement and High School and Beyond Plan; once per student; 2019, 2021, 2024 session laws; 2019 findings) and RCW 28A.230.097 (AP computer science equivalent to math or science; transcript note for seniors); Code.org (2025) data (access 38% to 51.2%, 396 of 774 in 2024-25; participation 4.7% to 4.54%, 15,821 of 348,814; national 60% and 6.1%); College Board AP schools 395/400, public 320/323, non-public 75/77; IANA Pacific list includes Washington.',
    localProject: 'City of Seattle SDOT Trees (no-warranty licence text; recommended filter CURRENT_STATUS = INSVC), server-side counts 18 October 2026: 276,685 records, 215,696 INSVC, 58,149 REMOVED, 2,607 PLANNED; among INSVC 778 scientific names (35 reach half, top 10 hold 24.4%, 46 singletons, 135 at five or fewer, 59 sp. names), 176 genus values incl. blank (702), 6 genera reach half, top 10 genera 62.0%, Acer 45,966 (21.3%). All ours. Lesson family: frequency tables, cumulative share, long tail.',
    requiredMentions: [
      'RCW 28A.230.300',
      'RCW 28A.230.097',
      'third year mathematics or third year science',
      'once per student',
      'High School and Beyond Plan',
      '396 of 774',
      '15,821 of 348,814',
      '276,685',
      '215,696',
      '45,966'
    ],
    sources: [
      { claim: 'RCW 28A.230.300, Computer science (Washington State Legislature).', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=28A.230.300' },
      { claim: 'RCW 28A.230.097, course equivalencies incl. AP computer science.', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=28A.230.097' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Washington and national access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Seattle: SDOT Trees feature service.', url: 'https://services.arcgis.com/ZOyb2t4B0UYuYNYH/arcgis/rest/services/SDOT_Trees_CDL/FeatureServer/0' },
      { claim: 'IANA tzdb northamerica: Washington in the Pacific list, US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'OSPI pages (standards adoption year, course lists, guidance): ospi.k12.wa.us returned 403, so only statute text is used.',
      'That Washington requires computer science for graduation: the statute does not say so; refused.',
      'Any cause for the access or participation trends: not stated by the source.',
      'Code.org state narrative, geography, size, gender and race figures: not used.',
      'An official Seattle tree count: the layer is refreshed daily and the city gives no warranty; only our labelled counts appear.',
      'Tree locations, addresses and condition ratings: not used.',
      'That our classes earn Washington credit or count as the statute course, and any affiliation with OSPI, the Legislature, the City of Seattle, Code.org or the College Board.'
    ]
  }
};
