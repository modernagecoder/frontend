'use strict';
// Oklahoma (cg- state page, US cluster Phase 4, row 94). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Oklahoma requires schools to offer computer science at every level from 2024 to 2025. What must an elementary,
// middle and high school provide, what do the 2023 standards ask for, and how many high schools offered CS in the latest
// data? Sources read raw on 17 and 18 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-oklahoma/):
//  - Oklahoma State Department of Education (oklahoma.gov/education), Computer Science page (found through the site
//    sitemap): "Recent legislation (70 O.S. § 11-103.6m) states that beginning in the 2024-2025 school year, all Oklahoma
//    public elementary and middle schools and public elementary and middle charter schools will be required to offer
//    instruction aligned to the Oklahoma Academic Standards for Computer Science (OAS-CS)."; "all public high schools and
//    public charter high schools must offer at least one standalone computer science course."; AI guidance published.
//  - OSDE, Computer Science Standards page (Last Modified Feb 20, 2026): "The 2023 Oklahoma Academic Standards for Computer
//    Science (OAS-CS) were developed by a committee composed of educators representing K-12 public schools, Career Tech,
//    higher education, and education non-profit organizations."; "Feedback was provided in two public comment periods";
//    includes / does not include lists ("Teaching students to type or use a mouse", "Learning to use applications (e.g.,
//    word processing program or slides)", "Playing video games", "Building or repairing a computer"); Emerging Technologies
//    and AI competencies "intended to complement, not replace" the OAS-CS; "has not yet adopted additional AI standards
//    legislatively"; Pre-K guidance with "A concise Unplugged Idea".
//  - OSDE, 2023 Oklahoma Academic Standards for Computer Science (PDF, dated February 2023): "five core concepts";
//    Computing Systems, Networks and the Internet, Data Analysis, Algorithms and Programming, Impacts of Computing;
//    "Grades K-8 and Level 1 standards are for all Oklahoma students, while the Level 2 standards are designed for those
//    students intending to specialize in computer science careers or higher education pathways."; "informed by the 2018
//    Oklahoma Academic Standards for Computer Science"; standard codes such as 3.AP.A.01.
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): no 2018-19 figure;
//    37% (2019-20), 53%, 64%, no figure 2022-23, 71.5% (2023-24: 334 of 467, "State Education Agency"), no 2024-25 figure.
//    Participation 7.3% (2020-21), 4.7%, dash, 7.57% (2023-24: 15,486 of 204,594; denominator NCES fall 2022).
//  - College Board, School Report of AP Exams by State 2023-24: Oklahoma schools with AP exams 273 (2023), 297 (2024);
//    public 244 and 268; non-public 29 and 29.
//  - IANA tzdb: America/Chicago "Central (most areas)"; US rule, November 1, 2026 and March 14, 2027.
//  - City of Oklahoma City, Parks feature service (licence "Open Data Policy"; "Park Acres - Approximate size of park in
//    acres"; "Private parks are not included"), 169 rows, count verified, downloaded 18 October 2026. Ours: Park_Acres
//    total 6,463.0; largest Stinchcomb Wildlife Refuge 967.9 (15.0% of total), Open Space - K 404.4, Hefner Golf Course
//    363.0, Trosper Park 356.6, Earlywine Golf Course 335.4; top 10 hold 3,562.9 acres (55.1%); median 7.45 acres; ParkType
//    'Special Use' 19 rows and 'Special Use ' (trailing space) 2 rows; 9 names with trailing spaces; Neighborhood 87 parks,
//    712.1 acres; largest Neighborhood park Lone Oak Park 122.5.
// Lesson family: sorting and top-N, then concentration (how much of the total the top few hold).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'OKLAHOMA', label: 'Oklahoma', blurb: 'Coding and AI for Oklahoma students now that every school level must offer computer science, with an Oklahoma City parks data project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-oklahoma',
  code: 'aio',
  accent: '#52481D',
  accentRationale: 'Oklahoma: a muted prairie olive, #52481D, allocated in alloc.tsv for row 94, dark enough to hold contrast on the paper without reading as black',
  pageType: 'city',
  place: {
    name: 'Oklahoma',
    eyebrow: 'Oklahoma, United States',
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
  routeLabel: 'Oklahoma',
  title: 'Coding and AI Classes in Oklahoma | Live Online',
  description: 'Live online coding and AI classes for Oklahoma students: the 2024 law on offering CS in every school, the 2023 OAS-CS standards and an Oklahoma City parks project.',
  ogDescription: 'Since 2024 to 2025, every Oklahoma public school level must offer computer science. The law, the 2023 standards, the figures and live online classes.',
  twitterDescription: 'Oklahoma coding and AI classes, live online, built on the OAS-CS standards.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Oklahoma Students',
    description: 'Live online Scratch, Python, JavaScript, AP Computer Science and AI for Oklahoma students from pre-kindergarten readiness to twelfth grade, placed by a free first lesson.'
  },

  h1: 'Coding and AI classes in Oklahoma',
  capsuleQ: 'Do Oklahoma public schools have to offer computer science?',
  capsule: 'Yes. Under 70 O.S. &sect; 11-103.6m, from the 2024 to 2025 school year every public elementary and middle school must offer instruction aligned to the Oklahoma Academic Standards for Computer Science, and every public high school must offer at least one standalone computer science course. We teach the same standards live online, from block coding to AP Computer Science.',
  lead: 'Oklahoma placed its requirement on schools rather than on students: the law, as the State Department of Education summarizes it, is about what every school must offer. That puts weight on the 2023 standards, which divide high school work into a Level 1 for everyone and a Level 2 for students heading toward computing careers or further study. Below are the requirement and the standards as the department publishes them, the access and enrollment figures for the most recent year reported, and a sorting project on Oklahoma City&rsquo;s parks that turns one city dataset into a lesson about the biggest few and the long tail.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Oklahoma.',

  picks: {
    eyebrow: 'Course picks for Oklahoma',
    h2: 'Where an Oklahoma student can pick up the thread',
    intro: 'Four full courses matched to the OAS-CS bands. One free lesson tells us which one to open first.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Grades K to 5', note: 'Block programs and puzzles that practise the elementary Algorithms and Programming standards.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', band: 'Grades 6 to 9', note: 'Interactive web pages in JavaScript, a natural next step after middle school CS instruction.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 8 to 12', note: 'Python from first programs to data work, including the Oklahoma City parks project below.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Java and AP Computer Science A, for students aiming at the Level 2 end of the standards.' }
    ]
  },

  sections: [
    {
      id: 'offer', tint: '', eyebrow: 'The offering law',
      h2: 'What every Oklahoma school must provide under 70 O.S. &sect; 11-103.6m',
      intro: 'As set out on the Oklahoma State Department of Education&rsquo;s computer science page, read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'The computer science offering requirement, from the 2024 to 2025 school year (department summary of 70 O.S. &sect; 11-103.6m)', head: ['School level', 'What must be offered', 'What a family can ask (ours)'], rows: [
          ['Public elementary schools, including charters', 'Instruction aligned to the Oklahoma Academic Standards for Computer Science (OAS-CS)', 'In which subject or block is CS taught, and how often?'],
          ['Public middle schools, including charters', 'Instruction aligned to the OAS-CS', 'Is it a course of its own or woven into other classes?'],
          ['Public high schools, including charters', 'At least one standalone computer science course', 'Which course is it, and does a second, more advanced one exist?']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Offered, not required', p: 'The summary places the duty on schools to offer. Whether a student takes the high school course is a separate choice, which is why enrollment figures matter as much as access figures.' },
          { h3: 'Every level, not only high school', p: 'Elementary and middle schools are included explicitly. A child can meet computer science in third grade, which is where habits such as debugging are easiest to build.' },
          { h3: 'Read the department FAQ', p: 'The department links a frequently asked questions document on the legislation. Families with questions about their own school should start there and with the district.' }
        ] },
        { kind: 'callout', h3: 'Where outside classes fit', p: 'One standalone high school course gives a student a start. Students who want a second language, a larger project or AP preparation often need more time than that course has. That is the gap our live classes fill, alongside school and never in place of it.' }
      ]
    },
    {
      id: 'numbers', tint: 'deep', eyebrow: 'The published figures',
      h2: 'Oklahoma&rsquo;s computer science access almost doubled in four reported years',
      intro: 'Two published sources, quoted without adjustment: a raw Code.org sheet released in 2025 and a College Board count of schools with AP exams.',
      body: [
        { kind: 'table', caption: 'Sooner State high schools with a CS course available, as a percentage, year by year in the 2025 Code.org sheet', head: ['Year', 'Percent', 'Comment'], rows: [
          ['2018 to 2019', 'Dash (no value)', ''],
          ['2019 to 2020', '37%', 'First value in the series'],
          ['2020 to 2021', '53%', ''],
          ['2021 to 2022', '64%', ''],
          ['2022 to 2023', 'Dash (no value)', ''],
          ['2023 to 2024', '71.5%', '334 of 467 high schools, reported by the State Education Agency'],
          ['2024 to 2025', 'Dash (no value)', 'The first year under the offering law has no figure yet']
        ] },
        { kind: 'table', mt: true, caption: 'Oklahoma enrollment and AP, as published', head: ['Measure', 'Value', 'Source'], rows: [
          ['High school students enrolled in CS, 2023 to 2024', '15,486 of 204,594, or 7.57%', 'Code.org (2025); student total from NCES, fall 2022'],
          ['Earlier enrollment shares', '7.3% (2020 to 2021), 4.7% (2021 to 2022), no figure for 2022 to 2023', 'Code.org (2025)'],
          ['Schools with AP exams', '273 in 2023, 297 in 2024', 'College Board, School Report of AP Exams by State 2023-24'],
          ['Public and non-public', '244 and 29 in 2023; 268 and 29 in 2024', 'College Board']
        ] },
        { kind: 'p', text: 'From 37% to 71.5% between 2019 to 2020 and 2023 to 2024 is close to a doubling, by our arithmetic. Two cautions. Every value predates the 2024 to 2025 offering requirement, so none of them measures its effect. And enrollment did not follow a straight line: 7.3%, then 4.7%, a missing year, then 7.57%. The sheet reports those values without explaining them, and so do we.' },
        { kind: 'p', text: 'To cite these figures, use Code.org (2025). 2025 State of AI + CS Education. Oklahoma values on this page come from its raw sheet&rsquo;s access and participation tabs; the dataset itself is not reproduced here.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'Signature project',
      h2: 'Sort Oklahoma City&rsquo;s parks by size and watch the top ten swallow half the acres',
      intro: 'The City of Oklahoma City publishes its parks layer under its Open Data Policy. We downloaded all 169 parks on 18 October 2026 and used the Park_Acres field, which the city describes as the approximate size of each park.',
      body: [
        { kind: 'table', caption: 'The five largest parks by Park_Acres after sorting (our calculation from the city layer; acreage approximate)', head: ['Rank', 'Park name in the data', 'ParkType', 'Acres', 'Share of all park acres (ours)'], rows: [
          ['1', 'Stinchcomb Wildlife Refuge', 'Nature', '967.9', '15.0%'],
          ['2', 'Open Space - K', 'Green Space', '404.4', '6.3%'],
          ['3', 'Hefner Golf Course', 'Special Use', '363.0', '5.6%'],
          ['4', 'Trosper Park', 'Metropolitan', '356.6', '5.5%'],
          ['5', 'Earlywine Golf Course', 'Special Use', '335.4', '5.2%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Sort, then slice', p: 'Students sort the 169 rows by Park_Acres from largest to smallest and take the first ten. Our ten largest hold 3,562.9 of the 6,463.0 acres in the layer, or 55.1%. About six percent of the parks, by count, cover more than half the area.' },
          { h3: 'Mean against median', p: 'The median park in our sort is just 7.45 acres. A few huge sites pull the average far above what a typical neighborhood park looks like, the same pattern students meet later with file sizes, song play counts and city populations.' },
          { h3: 'Group, then sort again', p: 'Neighborhood parks are the most common type, 87 of 169, yet together they cover 712.1 acres. The largest of them, Lone Oak Park, has 122.5 acres on its own. Sorting within a group answers a different question from sorting the whole list.' }
        ] },
        { kind: 'p', text: 'The data has traps a sort will not reveal by itself. Two rows carry the type &ldquo;Special Use &rdquo; with a trailing space, so a naive count reports 19 Special Use parks instead of 21. Nine park names also end in a stray space, which matters the moment a student tries to join this table to another. Stripping whitespace before grouping is the fix, and checking the count of distinct labels before and after is the proof.' },
        { kind: 'p', text: 'A final judgment call: is a golf course a park? The city&rsquo;s own data classes four golf courses among its ten largest sites as Special Use. A student ranking &ldquo;the biggest parks in Oklahoma City&rdquo; has to decide whether to filter them out and say so in writing. The city notes that private parks are not included, so every number here covers city-listed parks only. All acres and shares in this section are our calculations from one download, not official city statistics.' }
      ]
    },
    {
      id: 'standards', tint: 'deep', eyebrow: 'The 2023 standards',
      h2: 'Level 1 for everyone, Level 2 for future specialists',
      intro: 'The 2023 Oklahoma Academic Standards for Computer Science, dated February 2023 and informed by the 2018 edition, as the department publishes them.',
      body: [
        { kind: 'table', caption: 'How the OAS-CS are organized (from the 2023 standards document; the right-hand column is ours)', head: ['Feature', 'What the standards say', 'In our classes'], rows: [
          ['Five core concepts', 'Computing Systems; Networks and the Internet; Data Analysis; Algorithms and Programming; Impacts of Computing', 'Each course names the concept a lesson serves'],
          ['Elementary and middle', 'Grade-level standards from kindergarten through eighth grade, coded by grade, concept and subconcept, for example 3.AP.A.01', 'Block coding and first typed code, mapped to grade'],
          ['High school Level 1', 'Grades K-8 and Level 1 standards are for all Oklahoma students', 'Python and web courses at foundation level'],
          ['High school Level 2', 'Designed for students intending to specialize in computer science careers or higher education pathways', 'AP Computer Science A, data science and AI'],
          ['Development', 'Written by a committee of K-12, Career Tech, higher education and non-profit educators, with feedback from two public comment periods', '']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What the department counts', p: 'Its page lists the study of computers, analyzing and creating programming and software designs, studying hardware designs, researching usage in local and national context, and evaluating the impact on society.' },
          { h3: 'What it does not count', p: 'Teaching students to type or use a mouse, learning applications such as a word processor or slides, playing video games, and building or repairing a computer are listed as outside computer science education.' },
          { h3: 'AI alongside, not instead', p: 'The department publishes Emerging Technologies and AI competencies meant to complement, not replace, the OAS-CS, and notes it has not yet adopted additional AI standards legislatively. There is also Pre-K guidance with unplugged ideas.' }
        ] }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Class times',
      h2: 'Central Time from Tulsa to Lawton',
      intro: 'Oklahoma follows the IANA zone America/Chicago, which the tz database labels &ldquo;Central (most areas)&rdquo;.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One hour behind the East Coast', p: 'Central Time sits an hour behind Eastern, so a batch that suits a New Jersey family in the late afternoon reaches an Oklahoma student an hour earlier. We confirm each Oklahoma class in Central Time.' },
          { h3: 'Teachers on India time', p: 'India keeps one clock all year, and that is where our teachers sit. Twice a year the US change moves the gap by an hour, and our schedules absorb it.' },
          { h3: 'The 2026 to 2027 change dates', p: 'Under the US rule in the tz database, clocks go back on November 1, 2026 and forward on March 14, 2027, in Oklahoma as in every other state that observes daylight saving.' }
        ] },
        { kind: 'spec', title: 'Code it to see it', p: 'A short Python exercise prints the same class time in America/Chicago and America/New_York across November 1, 2026. The one-hour difference between the two zones holds steady, while the gap to India time moves.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'An Oklahoma route from Pre-K puzzles to Level 2',
    intro: 'Bands follow the OAS-CS shape loosely. The free first lesson sets the real starting rung.',
    cols: [
      { band: 'Grades K to 5', h3: 'Unplugged to blocks', p: 'Patterns, sequences and loops, first away from the screen and then in blocks.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 6 to 8', h3: 'First typed code', p: 'Python with small AI projects and interactive web pages.', courses: ['python-ai-kids-masterclass', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Grades 9 to 10', h3: 'Level 1 and beyond', p: 'Python programs on real data, version control and the foundations every student needs.', courses: ['python-complete-masterclass-teens', 'git-github-version-control-course-for-teens'] },
      { band: 'Grades 11 to 12', h3: 'Level 2 depth', p: 'AP Computer Science A in Java, or machine learning built and evaluated with care.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Oklahoma kept AI as a complement to computer science, and so do we',
    intro: 'The department&rsquo;s own framing is a useful rule for families too.',
    p1: 'Ask an AI tool for the largest parks in Oklahoma City and it may answer from memory, from a web page, or from the data you paste in, and it will rarely say which. It will not notice the trailing space in &ldquo;Special Use &rdquo; or ask whether golf courses belong in the ranking. A student who has sorted the 169 rows by hand knows exactly where those decisions sit.',
    p2: 'That matches the department&rsquo;s position that its AI competencies complement rather than replace the computer science standards. In our AI units, students first write the sort themselves, then compare an assistant&rsquo;s version line by line and explain every difference.',
    closer: 'An assistant that sorts faster is useful; a student who can tell whether it sorted the right thing is the goal.',
    blogAnchor: 'why learning to code still pays off'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Guymon to Broken Bow, one live online classroom',
    intro: 'Oklahoma is wide, and distance should not decide who can take an advanced coding class.',
    cells: [
      { h3: 'From home', p: 'Lawton and Stillwater students can share a lesson without either family getting in the car.' },
      { h3: 'Oklahoma school year', p: 'Teachers use US grades, follow the school calendar and connect projects to the OAS-CS. Graded school tasks are always done by the student.' },
      { h3: 'Free first lesson', p: 'Students code something small with a teacher; we then propose a course and a slot. Card details are never requested here.' },
      { h3: 'Level-based batches', p: 'Fifteen to twenty classmates per batch, grouped by what they can already code.' },
      { h3: 'Private option', p: 'A teacher for one student, suited to AP preparation, Level 2 depth or a faster pace.' },
      { h3: 'Your schedule', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'Online, with no Oklahoma office', p: 'Modern Age Coders teaches live over video from India and has no center or classroom in Oklahoma. A student needs a computer, a headset and a stable connection.' }
  },

  fees: {
    h2: 'Fees for Oklahoma families',
    intro: 'Three lines cover it.',
    first: 'A full lesson at no charge, closing with a suggested course, level and time.',
    group: 'A month of live classes in a group of fifteen to twenty at a similar stage.',
    private: 'A month of live classes with one teacher for one student.',
    closer: 'Fees are in US dollars and identical across the state, from Enid to Ardmore. Nobody is invoiced until the trial lesson is over and a plan has been chosen, and the pricing page sets out what happens on holidays or after a missed session.'
  },

  reviewsH2: 'Parents and students reviewing us on Google',

  book: {
    h2: 'Request a free first lesson for an Oklahoma student',
    intro: 'Share the grade and interests. A second grader might start with a block puzzle, a seventh grader with an interactive web page, and a high schooler with the Oklahoma City parks sort.',
    success: 'Thank you. The team will reach out soon about a class for your Oklahoma student.'
  },

  faq: {
    h2: 'Oklahoma coding and AI questions',
    intro: 'Answers drawn from the department, Code.org and the College Board sources above.',
    items: [
      { q: 'Do Oklahoma high schools have to offer computer science?', a: 'Yes. The department says that from the 2024 to 2025 school year all public high schools and public charter high schools must offer at least one standalone computer science course under 70 O.S. section 11-103.6m.' },
      { q: 'What about elementary and middle schools?', a: 'From 2024 to 2025, public elementary and middle schools, including charters, must offer instruction aligned to the Oklahoma Academic Standards for Computer Science.' },
      { q: 'What are the OAS-CS?', a: 'The 2023 Oklahoma Academic Standards for Computer Science, built on five core concepts: Computing Systems, Networks and the Internet, Data Analysis, Algorithms and Programming, and Impacts of Computing.' },
      { q: 'What is the difference between Level 1 and Level 2?', a: 'The standards say grades K-8 and Level 1 are for all Oklahoma students, while Level 2 is designed for students intending to specialize in computer science careers or higher education pathways.' },
      { q: 'Does playing video games count as computer science in Oklahoma?', a: 'No. The department lists playing video games, typing practice, using applications such as slides, and building or repairing a computer as outside computer science education.' },
      { q: 'How many Oklahoma high schools offered computer science?', a: 'Code.org reports 334 of 467 Oklahoma high schools, or 71.5%, in 2023 to 2024, the year before the offering law began.' },
      { q: 'Can your classes stand in for the school course?', a: 'No. Schools provide the required offering. Our classes add depth, projects and AP preparation outside school, and graded school work is the student\'s own.' },
      { q: 'What time zone are Oklahoma classes in?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Oklahoma times are confirmed in Central Time.', boiler: true },
      { q: 'Is there a Modern Age Coders office in Oklahoma?', a: 'No. All classes are live online from India, and no Oklahoma office or classroom is claimed.', boiler: true },
      { q: 'How can I check the fees?', a: 'They sit in the fees panel higher up: one trial lesson at no cost, then a choice between a monthly group plan and monthly private teaching.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Further reading for Oklahoma students',
    html: 'Level 2 students can look at <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a> or <a class="cg-inline-link" href="/usaco-preparation-online-coaching">USACO preparation</a>. Middle schoolers can browse <a class="cg-inline-link" href="/coding-classes-for-middle-school-students">coding classes for middle school students</a>, and younger game makers can try <a class="cg-inline-link" href="/how-to-make-a-roblox-game">how to make a Roblox game</a>. To compare a state with a graduation requirement, read about <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina</a>, or visit the <a class="cg-inline-link" href="/coding-classes-in-united-states">United States hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Oklahoma and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' },
    { href: '/coding-classes-for-middle-school-students', label: 'Middle school coding' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-aio .cg-hero-grid { align-items: stretch; gap: clamp(1rem, 3.4vw, 2.5rem); }
.cg-root.cg-aio .cg-hero h1 { font-weight: 740; letter-spacing: -0.016em; line-height: 1.07; }
.cg-root.cg-aio .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-aio .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.011em; }
.cg-root.cg-aio .cg-table caption { font-weight: 680; text-align: left; }
.cg-root.cg-aio .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aio .cg-table th { letter-spacing: 0.04em; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-aio .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.9rem); }
.cg-root.cg-aio .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-aio .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Oklahoma, read raw 17 and 18 October 2026. OSDE Computer Science page (70 O.S. 11-103.6m: from 2024-2025 elementary and middle schools, including charters, offer OAS-CS-aligned instruction; high schools offer at least one standalone CS course; AI guidance). OSDE Computer Science Standards page (2023 OAS-CS committee; two public comment periods; includes and excludes lists; Emerging Technologies and AI competencies complement, not replace; no additional AI standards adopted legislatively; Pre-K guidance). 2023 OAS-CS PDF, February 2023 (five core concepts; K-8 and Level 1 for all, Level 2 for specialists; informed by 2018 OAS-CS; codes such as 3.AP.A.01). Code.org (2025) access 37%, 53%, 64%, dash, 71.5% (334 of 467, 2023-24); participation 7.3%, 4.7%, dash, 7.57% (15,486 of 204,594). College Board AP schools 273 and 297; public 244 and 268; non-public 29 and 29. IANA America/Chicago, Central (most areas).',
    localProject: 'City of Oklahoma City Parks layer (Open Data Policy; acres approximate; private parks excluded), 169 rows downloaded 18 October 2026, count verified. Ours: total 6,463.0 acres; Stinchcomb Wildlife Refuge 967.9 (15.0%), Open Space - K 404.4, Hefner Golf Course 363.0, Trosper Park 356.6, Earlywine Golf Course 335.4; top ten 3,562.9 acres (55.1%); median 7.45; Special Use with trailing space 2 rows; 9 names with trailing spaces; Neighborhood 87 parks, 712.1 acres; Lone Oak Park 122.5, labelled ours. Lesson family: sorting and top-N, then concentration.',
    requiredMentions: [
      '11-103.6m',
      'at least one standalone computer science course',
      'Oklahoma Academic Standards for Computer Science',
      'two public comment periods',
      'Level 2',
      '3.AP.A.01',
      'playing video games',
      '334 of 467',
      '15,486 of 204,594',
      '273 in 2023, 297 in 2024',
      '169 parks',
      '3,562.9 of the 6,463.0 acres'
    ],
    sources: [
      { claim: 'Oklahoma State Department of Education: Computer Science page, 70 O.S. 11-103.6m summary.', url: 'https://oklahoma.gov/education/services/standards-learning/computer-science.html' },
      { claim: 'Oklahoma State Department of Education: Computer Science Standards page.', url: 'https://oklahoma.gov/education/services/standards-learning/computer-science/computer-science-standards.html' },
      { claim: 'Oklahoma State Department of Education: 2023 Oklahoma Academic Standards for Computer Science (PDF).', url: 'https://oklahoma.gov/content/dam/ok/en/osde/documents/services/standards-learning/computer-science/2023%20Computer%20Science%20Standards.pdf' },
      { claim: 'Code.org (2025), 2025 State of AI + CS Education data: Oklahoma access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Oklahoma City: Parks feature service (Open Data Policy).', url: 'https://utility.arcgis.com/usrsvcs/servers/fe9dc8e85f9c43b7950e32b69edf28fc/rest/services/OpenData/Recreation_Parks/FeatureServer/4' },
      { claim: 'IANA tzdb northamerica and zone1970.tab: US rule and America/Chicago.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'That Oklahoma requires students to take computer science to graduate: not asserted; the department summary read describes an offering requirement on schools, and the graduation requirements page linked to documents we did not read.',
      'The statute text of 70 O.S. 11-103.6m itself: quoted only through the department summary.',
      'Any effect of the 2024-2025 offering law on access: no post-law figure in the sheet.',
      'Any cause for the enrollment changes between years: not in the source.',
      'The name of the department contact listed on its CS pages: not needed.',
      'Official park acreage rankings: the city calls acres approximate; all ranks and shares are ours.',
      'Code.org geography, size, gender or race figures and the Code.org state narrative page: not used.',
      'That our classes satisfy the school offering: refused.',
      'Any affiliation with the Oklahoma State Department of Education, the City of Oklahoma City, Code.org or the College Board.'
    ]
  }
};
