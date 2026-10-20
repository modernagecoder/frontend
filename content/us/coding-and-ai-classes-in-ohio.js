'use strict';
// Ohio (cg- state page, US cluster Phase 4, row 93). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: about six in ten Ohio high schools offer computer science, but only about three in a hundred students take
// it. What do the published figures say, and what can a family do about the gap? Sources read raw on 17 October 2026
// (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-ohio/):
//  - Ohio Department of Education and Workforce (education.ohio.gov): every request, including / and /sitemap.xml,
//    returned an F5 "Request Rejected" page. Host treated as blocked, no retry (dept-blocked.txt). codes.ohio.gov and
//    legislature.ohio.gov timed out. So this page prints no Ohio graduation rule and no standards claim.
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): OH access
//    42% (2018-19), 50%, 48%, 62%, 61.3% (0.6126), 60.8% (2023-24), 2024-25 "-"; most recent 635 of 1,045 high
//    schools (2023-2024, "State Education Agency and School Catalogs"); participation 15,883 of 535,556 (2.97%),
//    matched to the 2023-24 column (0.0297); denominator NCES fall 2022. National row: 60% access 2023-24 and 2024-25,
//    participation 6.4% (2023-24). Code.org's own state narrative is not used for any figure.
//  - College Board, School Report of AP Exams by State 2023-24: Ohio 721 (2023), 712 (2024); public 578, 572;
//    non-public 143, 140.
//  - IANA tzdb northamerica: the Eastern list names "North Carolina, Ohio,"; zone1970.tab America/New_York
//    "Eastern (most areas)"; Rule US 2007 max Mar Sun>=8 2:00 and Nov Sun>=1 2:00, so November 1, 2026 and March 14, 2027.
//  - City of Columbus, Public Owned Trees (Recreation and Parks Department, Urban Forestry), MapServer/1, licence
//    "dedicated to the public domain under the Creative Commons Universal License (CC0)". Server-side counts on
//    17 October 2026 (our queries): 316,529 records; RETIRED not null 55,904; RETIRED null 260,625; vacant site codes
//    VSL/VSM/VSS 86,157 overall, 86,152 among non-retired; 2TREE "Unlnown or other live tree" (typo as published) 2,936
//    non-retired; 306 codes in the SP_CODE domain, 287 present, 3 codes (6 records) not in the domain. Non-retired
//    species: Maple, Red 13,296; Honeylocust 8,602; Pear, Callery 8,552; Maple, Sugar 7,278; Maple, Freeman 6,507;
//    Planetree, London 5,761. Our sums by name prefix: Maple 46,387 non-retired; Ash 18,598 all records, 2,274 non-retired.
//    Our arithmetic: 174,473 non-retired non-vacant; 171,537 with a named species; maples 27.0% of those.
// Lesson family: cleaning categories before counting (what a record is, filters, coded values, unknown codes).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'OHIO', label: 'Ohio', blurb: 'Coding and AI for Ohio students, built around the gap between schools that offer computer science and students who take it, with a Columbus tree data project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-ohio',
  code: 'ao',
  accent: '#852C1C',
  accentRationale: 'Ohio: #852C1C, a dark buckeye-husk brown red, allocated in alloc.tsv row 93 and checked by the build for 4.5:1 contrast on every paper',
  pageType: 'city',
  place: {
    name: 'Ohio',
    eyebrow: 'Ohio, United States',
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
  routeLabel: 'Ohio',
  title: 'Coding and AI Classes in Ohio | Live Online for Grades 1 to 12',
  description: 'Coding and AI classes for Ohio students, live online: how many Ohio high schools offer computer science, how few students take it, and a Columbus tree data project.',
  ogDescription: 'Six in ten Ohio high schools offer computer science; about three in a hundred students take it. The published figures, and live online classes that close the gap.',
  twitterDescription: 'Ohio coding and AI classes, live online, with a Columbus open data project.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '17 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Ohio Students',
    description: 'Scratch, Python, data science, AP Computer Science A and AI for Ohio students from first grade to twelfth, taught live online in English in small level-matched batches or one to one.'
  },

  h1: 'Coding and AI classes in Ohio',
  capsuleQ: 'How many Ohio high schools offer computer science, and how many students take it?',
  capsule: 'In 2023 to 2024, 635 of 1,045 Ohio high schools (60.8%) offered computer science, but only 15,883 of 535,556 high school students, about 2.97%, were enrolled in it, according to Code.org (2025). Modern Age Coders teaches Ohio students live online from first grade to twelfth, from Scratch to Python, data science and AP Computer Science A, in batches or one to one.',
  lead: 'Ohio is one of the larger school systems in the country, with more than a thousand high schools in the Code.org count, and the course list is not the main problem: most schools have a computer science class somewhere on the timetable. The harder question for an Ohio family is whether their own student ever sits in one. This page sets out the published access and enrollment figures for Ohio, compares them with the national numbers, shows what a student can do with real Columbus city data, and explains how our live online classes fit around the school day from Toledo to Cincinnati.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Ohio.',

  picks: {
    eyebrow: 'Course picks for Ohio',
    h2: 'Four starting points for Ohio students',
    intro: 'Each card is a full course with its own syllabus. The free first lesson decides the level, so a younger student who already codes is not held back.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades 1 to 5', note: 'Animations and games in Scratch, then the first ideas of loops, events and variables, finished as projects a child can show at home.' },
      { course: 'python-ai-kids-masterclass', band: 'Grades 4 to 8', note: 'The move from blocks to typed Python, with small AI experiments a middle schooler can explain rather than just run.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 8 to 12', note: 'Python with real tables: cleaning, counting and charting, the same work as the Columbus tree project on this page.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Java for AP Computer Science A, the free-response questions and the exam, for students whose school schedule has no room for it.' }
    ]
  },

  sections: [
    {
      id: 'access', tint: '', eyebrow: 'Access over seven years',
      h2: 'Ohio high schools offering computer science, year by year',
      intro: 'Seven school years of Ohio access figures from the Code.org (2025) State of AI + CS Education sheet. Where the sheet has a dash for Ohio we write Not reported instead of estimating.',
      body: [
        { kind: 'table', caption: 'Share of Ohio high schools with a foundational CS course, from the Access Percent over the Years tab', head: ['Year', 'Ohio share', 'What stands out'], rows: [
          ['2018 to 2019', '42%', ''],
          ['2019 to 2020', '50%', ''],
          ['2020 to 2021', '48%', 'The only year-on-year fall before 2022'],
          ['2021 to 2022', '62%', 'The largest single rise in the series'],
          ['2022 to 2023', '61.3%', ''],
          ['2023 to 2024', '60.8%, or 635 of 1,045', 'Latest Ohio figure; source given as the state education agency and school catalogs'],
          ['2024 to 2025', 'Not reported', 'The sheet shows a dash for Ohio']
        ] },
        { kind: 'table', mt: true, caption: 'Ohio beside the national figures, and the College Board AP count', head: ['Measure', 'Ohio', 'National or detail', 'Source'], rows: [
          ['High schools offering CS, 2023 to 2024', '60.8%', '60% nationally', 'Code.org (2025)'],
          ['High school students enrolled in CS, 2023 to 2024', '15,883 of 535,556, or 2.97%', '6.4% nationally', 'Code.org (2025); student total from NCES, fall 2022'],
          ['Schools with AP exams, 2023', '721', '578 public, 143 non-public', 'College Board, School Report of AP Exams by State'],
          ['Schools with AP exams, 2024', '712', '572 public, 140 non-public', 'College Board, School Report of AP Exams by State']
        ] },
        { kind: 'p', text: 'Read the two tables together and a pattern appears. On access, Ohio sits almost exactly on the national line: 60.8% of its high schools against 60% across the country. On participation it does not. In 2023 to 2024 fewer than three Ohio high school students in every hundred were in a computer science class, less than half the national share of 6.4%. The enrollment total in that calculation comes from the NCES count for fall 2022, as the Code.org sheet notes, so the percentage is a close estimate rather than an exact census.' },
        { kind: 'p', text: 'Suggested citation: Code.org (2025). 2025 State of AI + CS Education. We quote Ohio values from the published Access and Participation tabs and do not republish the dataset.' }
      ]
    },
    {
      id: 'gap', tint: 'deep', eyebrow: 'Offered is not taken',
      h2: 'Why a course on the timetable can still leave a student out',
      intro: 'The figures do not explain themselves, and the sources give no reason for the gap, so we do not invent one. What we can do is list the practical questions an Ohio family can ask.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Is it at my student&rsquo;s school?', p: 'A state percentage hides the school in front of you. Six in ten schools offering a course means four in ten do not, and the published Ohio figures do not tell you which group your building falls in. The counselor or the course catalog will.' },
          { h3: 'Does it fit the schedule?', p: 'An elective that clashes with band, a language or a required course is offered on paper and closed in practice. Asking which period it runs in, and whether it runs every year, settles that quickly.' },
          { h3: 'Is it the right level?', p: 'One introductory class is a start, not a pathway. Students who want AP Computer Science A, or data and AI work, often find that the next step is not on their school&rsquo;s list at all.' }
        ] },
        { kind: 'table', mt: true, caption: 'Questions worth asking at an Ohio school, and what to do with the answer (this column of advice is ours)', head: ['Ask the school', 'If the answer is no'], rows: [
          ['Is there a computer science course in grades 9 to 12 here?', 'Start with an outside course at the matching level so the skills are in place if a class opens later'],
          ['Is AP Computer Science A or Principles taught, and in which grade?', 'Study the course content outside school; the College Board explains on its own site how students register for an exam'],
          ['Can a middle schooler take an introductory class?', 'Begin with Scratch or Python at home so ninth grade is not the first contact with code'],
          ['Is there a coding club or a competition team?', 'Look at national contests such as the Congressional App Challenge, which a student can enter from home']
        ] },
        { kind: 'p', text: 'None of this replaces the school. Our classes are an addition for students who want more than one course can hold, or who cannot get into the course their school offers. We make no claim that a class with us earns Ohio high school credit; that decision belongs to the school district.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'Signature project',
      h2: 'How many trees does Columbus actually look after? A record is not a tree',
      intro: 'The City of Columbus publishes its Public Owned Trees layer as open data under a CC0 public domain dedication. A first count looks easy. The lesson is in discovering how many rows are not trees at all.',
      body: [
        { kind: 'table', caption: 'From raw records to named trees, step by step (our counts from the City of Columbus Public Owned Trees layer, queried 17 October 2026)', head: ['Step', 'Filter applied', 'Records left'], rows: [
          ['1', 'Every record in the layer', '316,529'],
          ['2', 'Drop records with a RETIRED date (55,904 of them)', '260,625'],
          ['3', 'Drop vacant planting sites, codes VSL, VSM and VSS (86,152 left after step 2)', '174,473'],
          ['4', 'Drop the catch-all code labelled &ldquo;Unlnown or other live tree&rdquo; (2,936)', '171,537']
        ] },
        { kind: 'table', mt: true, caption: 'The most common named species after step 2, by the city&rsquo;s own SP_CODE labels (our counts)', head: ['City label', 'Records without a RETIRED date'], rows: [
          ['Maple, Red', '13,296'],
          ['Honeylocust', '8,602'],
          ['Pear, Callery', '8,552'],
          ['Maple, Sugar', '7,278'],
          ['Maple, Freeman', '6,507'],
          ['Planetree, London', '5,761']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Coded values', p: 'Species arrive as short codes such as ACRU and GLTR. The layer&rsquo;s own domain lists 306 codes with their names; 287 of them appear in the records, and three codes covering six records are missing from the list entirely, which a careful script has to report rather than drop silently.' },
          { h3: 'Categories inside categories', p: 'There is no single maple code. Students match every label that begins with Maple and get 46,387 records without a RETIRED date, about 27.0% of the 171,537 named trees: a genus count the city does not publish, built by the student.' },
          { h3: 'Filters change rankings', p: 'Ash shows the danger of skipping step 2. Across all records, labels beginning with Ash number 18,598; once retired records are removed, 2,274 remain. The data does not say why records were retired, so neither do we.' }
        ] },
        { kind: 'p', text: 'In Python the core of step 3 fits on one line: <code>live = [r for r in rows if r["RETIRED"] is None and r["SP_CODE"] not in ("VSL", "VSM", "VSS")]</code>. Students write it, then test it against a count the server returns, so they learn to trust a filter only after checking it. The typo in &ldquo;Unlnown&rdquo; is left exactly as the city published it, a small reminder that real labels are typed by people.' },
        { kind: 'callout', h3: 'These counts are ours, not the city&rsquo;s', p: 'Every number in this section is our own query or arithmetic on one day&rsquo;s copy of the layer. The City of Columbus does not publish a tree total in this form, and a record count is not an official inventory. Saying precisely which filter produced which number is the habit the project exists to build.' }
      ]
    },
    {
      id: 'grades', tint: '', eyebrow: 'A plan by grade',
      h2: 'What an Ohio student can build at each stage',
      intro: 'Our suggested sequence, not a state curriculum. Students move faster or slower depending on the placement lesson.',
      body: [
        { kind: 'table', caption: 'A grade-by-grade route for Ohio students (our plan)', head: ['Grades', 'What they build', 'Where it leads'], rows: [
          ['1 to 3', 'Short Scratch stories and a first game with a score', 'Confidence with sequences, loops and events'],
          ['4 to 6', 'Bigger Scratch games, then the first typed Python programs', 'Reading and fixing error messages without panic'],
          ['7 to 8', 'Python projects with lists, files and simple charts', 'Ready for a high school course on day one'],
          ['9 to 10', 'Data projects like the Columbus trees, web pages, version control', 'A portfolio, whether or not the school offers CS'],
          ['11 to 12', 'AP Computer Science A in Java, or machine learning in Python', 'Exam readiness and larger independent projects']
        ] },
        { kind: 'p', text: 'Families in rural districts and in the big city systems use the same route, because a live online class reaches a farmhouse near Findlay and an apartment in Cleveland in the same way. The only thing that changes is the clock, covered next.' }
      ]
    },
    {
      id: 'clock', tint: 'deep', eyebrow: 'Class times',
      h2: 'Ohio is on Eastern Time, and our teachers are in India',
      intro: 'The IANA time zone database lists Ohio among the Eastern Time states, kept under the America/New_York zone.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'An example after school', p: 'A 4:30 p.m. class in Dayton during daylight saving starts at 2:00 a.m. the next day in India; after the clocks go back it is 3:00 a.m. in India. Our teachers work those hours so the class sits in the Ohio afternoon or evening.' },
          { h3: 'Why the gap changes', p: 'India keeps one offset all year, UTC plus 5 hours 30 minutes. Ohio moves between UTC minus 4 in summer and UTC minus 5 in winter, so the difference is 9 hours 30 minutes or 10 hours 30 minutes.' },
          { h3: 'The two Sundays to watch', p: 'Under the US rule in the IANA data, clocks fall back at 2 a.m. on Sunday, November 1, 2026 and spring forward on Sunday, March 14, 2027. We confirm every class time in Eastern Time around both dates.' }
        ] },
        { kind: 'spec', title: 'A bug worth meeting early', p: 'A reminder app that stores the offset as a fixed number of hours drifts by one hour twice a year in Ohio. Students who write their own scheduler with the America/New_York zone name, rather than a typed offset, have learned something many working programmers learn the hard way.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first Scratch story to AP Computer Science A',
    intro: 'Grade bands are a guide only. The placement lesson sets the real starting rung.',
    cols: [
      { band: 'Grades 1 to 4', h3: 'Play with logic', p: 'Characters that move, talk and keep score, built in blocks and explained aloud.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Grades 5 to 8', h3: 'Typed code and small AI', p: 'Python basics, simple games and a first look at how a model makes a guess.', courses: ['python-ai-kids-masterclass', 'game-development-masterclass-for-kids'] },
      { band: 'Grades 9 to 10', h3: 'Data and the web', p: 'Cleaning real tables, charting them and putting a project online for others to use.', courses: ['data-science-course-for-teens-python-data', 'frontend-development-masterclass-for-teens'] },
      { band: 'Grades 11 to 12', h3: 'AP and machine learning', p: 'Java for AP Computer Science A, or models trained and tested on data the student understands.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Could an AI tool have counted the Columbus trees?',
    intro: 'It could have produced a number. Whether the number meant anything is a different question.',
    p1: 'Ask a chatbot to count trees in a downloaded file and it will happily return 316,529, the number of rows. Nothing in that answer warns that more than eighty thousand of those rows are empty planting sites, or that tens of thousands are retired. The tool did what it was told; the instruction was the problem.',
    p2: 'A student who has written the filters by hand knows which questions to ask before trusting any total, from their own script or from an AI assistant. That is the skill we teach alongside the syntax: read the field descriptions, check the codes, compare against a second count, and say exactly what the number is.',
    closer: 'Ohio students who learn to question a result will use AI tools well; students who only learn to prompt will repeat whatever the first answer said.',
    blogAnchor: 'whether coding is still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'One live class for every corner of Ohio',
    intro: 'From Lake Erie to the Ohio River, the class is the same: a real teacher, a shared screen and a project the student owns.',
    cells: [
      { h3: 'Taught from home', p: 'No drive to a center after practice. A student in Akron and one in Athens can join the same lesson from their own desks.' },
      { h3: 'US grades, Ohio calendar', p: 'Teachers plan around American grade levels and the school year, and keep homework light in exam weeks. Assessed school work is always the student&rsquo;s own.' },
      { h3: 'Placement first', p: 'The first lesson is a real coding task that shows us the right level. It costs nothing and needs no payment details.' },
      { h3: 'Batches by level', p: 'Groups of fifteen to twenty, placed together because they code at a similar stage, whatever their age or Ohio county.' },
      { h3: 'One to one', p: 'A single student with a single teacher, suited to AP preparation or a student far ahead of their grade.' },
      { h3: 'Flexible timing', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' }
    ],
    spec: { title: 'Online only, said plainly', p: 'All teaching is live over the internet from India. There is no Modern Age Coders building in Ohio and we do not suggest otherwise. A laptop or desktop, a headset or speakers and a steady connection are all a student needs.' }
  },

  fees: {
    h2: 'Fees for Ohio families',
    intro: 'Three numbers, shown in US dollars.',
    first: 'One complete placement lesson at no charge, with a recommended course and class time at the end.',
    group: 'A month of live lessons in a level-matched batch of fifteen to twenty students.',
    private: 'A month of live lessons with a teacher working with your student alone.',
    closer: 'Every family in the United States pays the same rate in US dollars, whether they live in Cincinnati or a small town in Appalachian Ohio. Nothing is billed before the free lesson and an agreed plan; the pricing page covers holidays and missed lessons.'
  },

  reviewsH2: 'Google reviewers on learning with us',

  book: {
    h2: 'Request a free first lesson from Ohio',
    intro: 'Share the grade and one thing your student likes doing on a computer, and the first task is chosen to fit: a Scratch game for a second grader, a Python puzzle for a sixth grader, or the Columbus tree filters for a high school junior.',
    success: 'Thank you. Our team will contact you shortly to arrange a lesson for your Ohio student.'
  },

  faq: {
    h2: 'Ohio coding and AI questions',
    intro: 'Answers drawn from the published figures, and from how our classes work.',
    items: [
      { q: 'How many Ohio high schools offer computer science?', a: 'Code.org (2025) reports 635 of 1,045 Ohio high schools, or 60.8%, offering a foundational computer science course in 2023 to 2024, the latest Ohio year in its data.' },
      { q: 'How many Ohio high school students take computer science?', a: 'The same data reports 15,883 of 535,556 high school students enrolled in computer science in 2023 to 2024, about 2.97%, against 6.4% nationally that year.' },
      { q: 'Has access to computer science grown in Ohio?', a: 'Yes, though not steadily. The share of high schools offering it rose from 42% in 2018 to 2019 to 62% in 2021 to 2022, then stayed close to 61% for the next two years.' },
      { q: 'How many Ohio schools give AP exams?', a: 'The College Board School Report of AP Exams by State lists 721 Ohio schools with AP exams in 2023 and 712 in 2024, counting public and non-public schools together.' },
      { q: 'Does Ohio require computer science to graduate?', a: 'We do not answer that here, because the Ohio Department of Education and Workforce website refused our automated request when we checked on 17 October 2026. Please confirm current rules with your school counselor or the department.' },
      { q: 'Will a class with you count for Ohio high school credit?', a: 'We make no such claim. Credit decisions belong to the school district. Our classes add skills, projects and AP preparation alongside school.' },
      { q: 'What does the Columbus tree project teach?', a: 'Filtering and cleaning before counting. Students start with 316,529 records, remove retired records and vacant planting sites, and end with 171,537 named trees, all clearly labelled as their own counts.' },
      { q: 'What time zone are classes scheduled in for Ohio?', a: 'Eastern Time. Ohio uses the America/New_York zone, and we reconfirm times around the clock changes on November 1, 2026 and March 14, 2027.' },
      { q: 'When can my student take classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.', boiler: true },
      { q: 'Do you have a center in Ohio?', a: 'No. Every class is live online from India, so there is no Ohio address to visit, and none is claimed anywhere on this page.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'Next steps beyond this page',
    html: 'For an exam route, there is a page on <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>; students who enjoy contest problems usually want <a class="cg-inline-link" href="/usaco-preparation-online-coaching">USACO preparation</a>. For a contest you can enter from home, see the <a class="cg-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a>; for wider choices by age, the <a class="cg-inline-link" href="/coding-classes-for-high-school-students">high school coding classes</a> page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ohio and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A' },
    { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' }
  ],

  personalityCss: `
.cg-root.cg-ao .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.2vw, 2.6rem); }
.cg-root.cg-ao .cg-hero h1 { font-weight: 720; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-ao .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-ao .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-ao .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.01em; }
.cg-root.cg-ao .cg-table caption { font-weight: 650; text-align: left; font-style: italic; }
.cg-root.cg-ao .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ao .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-ao .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Ohio, read raw on 17 October 2026: Ohio Department of Education and Workforce blocked (F5 Request Rejected), codes.ohio.gov and legislature.ohio.gov timed out, so no Ohio rule is printed; Code.org (2025) State of AI + CS Education data (access 42%, 50%, 48%, 62%, 61.3%, 60.8%; 635 of 1,045 in 2023-24; 15,883 of 535,556, 2.97%, 2023-24; national 60% and 6.4%); College Board AP schools 721 (2023), 712 (2024), public 578/572, non-public 143/140; IANA America/New_York and US DST rule.',
    localProject: 'City of Columbus Public Owned Trees (Recreation and Parks, Urban Forestry, CC0), server-side counts 17 October 2026: 316,529 records; 55,904 retired; 260,625 not retired; 86,152 vacant sites among those; 174,473 non-vacant; 2,936 "Unlnown or other live tree"; 171,537 named; Maple, Red 13,296, Honeylocust 8,602, Pear, Callery 8,552; maples 46,387 (27.0%); Ash 18,598 all vs 2,274 not retired; 306 domain codes, 287 present, 3 codes (6 records) not in the domain. All ours. Lesson family: cleaning categories before counting.',
    requiredMentions: [
      '635 of 1,045',
      '15,883 of 535,556',
      '60.8%',
      '721',
      '316,529',
      '86,152',
      '171,537',
      '46,387',
      'Unlnown or other live tree'
    ],
    sources: [
      { claim: 'Code.org (2025), State of AI + CS Education data: Ohio and national access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'City of Columbus: Public Owned Trees layer, CC0.', url: 'https://maps2.columbus.gov/arcgis/rest/services/Schemas/RecreationParks/MapServer/1' },
      { claim: 'City of Columbus open data hub item for Public Owned Trees.', url: 'https://opendata.columbus.gov/' },
      { claim: 'IANA tzdb northamerica: Ohio in the Eastern list, America/New_York, US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Ohio graduation requirement, CS standards adoption year or required offering: education.ohio.gov returned an F5 "Request Rejected" page and the statute sites timed out on 17 October 2026, so none is printed.',
      'Code.org state narrative text (including its participation year and AI policy sentences): not the raw sheet, not used.',
      'Code.org geography, school size, gender and race figures for Ohio: not used.',
      'A 2024 to 2025 Ohio access figure: the sheet shows a dash, so none is printed.',
      'Any cause for the retired ash records or for the access and participation figures: no source states one.',
      'An official Columbus tree total: not published in this form; only our labelled counts appear.',
      'Addresses or locations of individual trees: counts only.',
      'That our classes earn Ohio credit, and any affiliation with the Ohio Department of Education and Workforce, the City of Columbus, Code.org or the College Board.'
    ]
  }
};
