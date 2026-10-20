'use strict';
// Pennsylvania (cg- state page, US cluster Phase 4, row 96). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Pennsylvania has no computer science graduation course, yet about three in four of its high schools offer
// CS. What do the published numbers, the graduation pathways and the new 2025 standards mean for a student who wants
// more? Sources read raw on 17 October 2026 (copies in keyword-research-2026-09/us/src/coding-and-ai-classes-in-pennsylvania/):
//  - PDE, Statewide High School Graduation Requirements (grad.html): "Effective with the graduating class of 2023,
//    Pennsylvania high school students have the option to demonstrate their postsecondary preparedness and meet
//    statewide requirements through one of five Pathways to Graduation."; Keystone Exams "(end-of-course assessments in
//    Algebra I, Literature, and Biology)". No computer science course appears among the statewide requirements.
//  - 22 Pa. Code 4.12 (regulation, pacodeandbulletin.gov, pacode-4-12.html): "Effective July 1, 2025 : Pennsylvania
//    Integrated Standards for Science, Environment, Ecology, Technology and Engineering (Grades K-5)"; "Pennsylvania
//    Technology and Engineering Standards (Grades 6-12)" with "Four core disciplinary standards" and benchmarks for
//    grade bands 6-8 and 9-12. Source dashes in the regulation are rewritten as "to" on the page.
//  - PDE, STEM in PA (stem-in-pa.html): "computational thinking" in the STEM definition; "Pennsylvania has nine
//    nationally-recognized STEM ecosystems"; the page's computer science link points to PaTTAN. Jobs and salary lines
//    on that page are deliberately not used.
//  - PDE, Keystone STEM Competition (keystone-stem-competition.html): "free, one-day statewide challenge open to
//    students in grades 5-12"; "teams of up to five students"; regional events across "Pennsylvania's 29 Intermediate
//    Units (IUs)"; grade bands 5-6, 7-8 and 9-12; "no preparation required".
//  - PDE, AI in K-12 Education (ai-ai-in-k-12-education.html): "Do not use AI as a final source of facts."; "Do not use
//    AI as the only grader. Teachers must review and make final decisions."
//  - Code.org (2025), 2025 State of AI + CS Education, raw sheet (Access and Participation tabs only): PA access 59%
//    (2018-19), 63%, 67%, 71%, 75%, 78% (2023-24), no 2024-25 value; most recent 530 of 684 high schools (77.5%),
//    2023-24, source "State Education Agency"; participation 5.3% (2020-21), 5.4%, 5.9%, 3.53% (2023-24); 19,506 of
//    551,996 high school students (denominator NCES fall 2022).
//  - College Board, School Report of AP Exams by State 2023-24: PA schools with AP exams 770 (2023), 771 (2024);
//    public 585 and 601; non-public 185 and 170.
//  - IANA tzdb northamerica: Pennsylvania listed under US eastern time, represented by America/New_York; US rule
//    Mar Sun>=8 and Nov Sun>=1, so November 1, 2026 and March 14, 2027.
//  - WPRDC, City of Pittsburgh Steps (CC BY, publisher City of Pittsburgh), datastore dump fetched 17 October 2026:
//    datastore total 1,134 = rows fetched. Our counts: 80 neighborhoods (South Side Slopes 109, Mount Washington 54,
//    Perry North 48); material Concrete 858, Wood 121, Stone 85; number_of_steps filled for 1,022, blank 112, zero 16;
//    113 stairways of 100 steps or more, 11 of 200 or more; most steps 378 (Ray Ave from Fair Ave to Woodward Ave,
//    Brookline). The published data dictionary lists 17 fields and omits number_of_steps.
// Lesson family: filtering and counting by category, plus missing values and reading a data dictionary.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'PENNSYLVANIA', label: 'Pennsylvania', blurb: 'Coding and AI for Pennsylvania students: the published CS access numbers, the 2025 standards and a Pittsburgh city steps data project.' },
  market: US,
  slug: 'coding-and-ai-classes-in-pennsylvania',
  code: 'ap',
  accent: '#155A8F',
  accentRationale: 'Pennsylvania: #155A8F, a deep river-slate blue for the three rivers at Pittsburgh, allocated in alloc.tsv for row 96 and kept muted against the paper',
  pageType: 'city',
  place: {
    name: 'Pennsylvania',
    eyebrow: 'Pennsylvania, United States',
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
  routeLabel: 'Pennsylvania',
  title: 'Coding and AI Classes in Pennsylvania | Live Online',
  description: 'Live online coding and AI classes for Pennsylvania students: how many PA high schools offer CS, the 2025 technology standards, and a Pittsburgh steps data project.',
  ogDescription: 'About three in four Pennsylvania high schools offer computer science, yet few students take it. The numbers, the 2025 standards and live classes for PA students.',
  twitterDescription: 'Pennsylvania coding and AI classes, live online, built on PA data and the 2025 standards.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '17 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Pennsylvania Students',
    description: 'Scratch, Python, AP Computer Science A, data science and AI for Pennsylvania students in elementary, middle and high school, taught live online in English in level-matched batches or one to one.'
  },

  h1: 'Coding and AI classes in Pennsylvania',
  capsuleQ: 'Do Pennsylvania high schools teach computer science, and is it required?',
  capsule: 'Most offer it, but no statewide course is required. Code.org (2025) reports 530 of 684 Pennsylvania high schools offering computer science in 2023 to 2024, while the state&rsquo;s graduation rules run through Keystone Exams and five Pathways to Graduation. Modern Age Coders teaches Pennsylvania students live online, ages 6 to 18, from Scratch to AP Computer Science A.',
  lead: 'Pennsylvania sits in an unusual position. Its high schools offer computer science more widely than the national figure, yet in the latest year Code.org reports, only about one high school student in twenty-eight was enrolled in a CS course. There is no state rule that every teenager must take one, and the new technology and engineering standards that took effect on July 1, 2025 are written for grades 6 to 12 as a whole rather than as a programming course. So whether a Pennsylvania student learns to code properly depends a great deal on the school, the timetable and the student&rsquo;s own push. This page lays out the published numbers, what the state actually requires, a data project on Pittsburgh&rsquo;s famous public stairways, and how our live classes fit beside school.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in Pennsylvania.',

  picks: {
    eyebrow: 'Course picks for Pennsylvania',
    h2: 'Where a Pennsylvania student usually starts',
    intro: 'Four starting points matched to grade and ambition. The free first lesson confirms the level before anything is agreed.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Grades 1 to 5', note: 'Animations, games and stories in Scratch, with the habit of testing an idea, spotting the bug and fixing it.' },
      { course: 'python-ai-kids-masterclass', band: 'Grades 5 to 8', note: 'The jump from blocks to typed Python, with small AI experiments a middle schooler can explain to a parent.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', band: 'Grades 10 to 12', note: 'Java, object-oriented design and free-response practice for AP Computer Science A, at the pace of the school year.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 9 to 12', note: 'Python with real tables: cleaning, counting and charting open data such as the Pittsburgh steps inventory below.' }
    ]
  },

  sections: [
    {
      id: 'numbers', tint: '', eyebrow: 'Access and enrollment',
      h2: 'Pennsylvania computer science by the numbers',
      intro: 'Every figure below is quoted from its publisher. Where a year has no value in the source, the table says so rather than filling the gap.',
      body: [
        { kind: 'table', caption: 'Pennsylvania trend: the percentage of public high schools with a foundational CS course, year by year, per Code.org (2025)', head: ['Year', 'Percent with CS'], rows: [
          ['2018 to 2019', '59%'],
          ['2019 to 2020', '63%'],
          ['2020 to 2021', '67%'],
          ['2021 to 2022', '71%'],
          ['2022 to 2023', '75%'],
          ['2023 to 2024', '78% in the trend tab; 530 of 684 high schools in the most recent count'],
          ['2024 to 2025', 'No value published for Pennsylvania']
        ] },
        { kind: 'table', mt: true, caption: 'Students in the seat and schools giving AP exams', head: ['Measure', 'Pennsylvania figure', 'Publisher'], rows: [
          ['High school students enrolled in CS, 2023 to 2024', '19,506 of 551,996, or 3.53%', 'Code.org (2025), state education agency data; enrollment base from NCES, fall 2022'],
          ['CS participation, 2020 to 2021, 2021 to 2022, 2022 to 2023', '5.3%, 5.4%, 5.9%', 'Code.org (2025), participation tab'],
          ['Schools with AP exams, 2023 and 2024', '770, then 771', 'College Board, School Report of AP Exams by State'],
          ['Public schools with AP exams, 2023 and 2024', '585, then 601', 'College Board'],
          ['Non-public schools with AP exams, 2023 and 2024', '185, then 170', 'College Board']
        ] },
        { kind: 'p', text: 'Read the two tables together and a pattern appears. Access climbed every year Code.org measured, from 59% to roughly 78% of high schools, so a Pennsylvania teenager is more likely than not to find a CS course in the catalog. Enrollment did not follow. The 2023 to 2024 participation value, 3.53%, is lower than the 5.9% recorded the year before; the sheet gives no reason for the drop and we do not offer one. What it does say plainly is that availability and uptake are different things.' },
        { kind: 'p', text: 'On AP, the College Board counts one more Pennsylvania school giving exams in 2024 than in 2023, with public schools up by sixteen and non-public schools down by fifteen. Those counts cover every AP subject, not only computer science, so they describe the reach of AP in the state rather than the reach of AP CS. Cite the access and participation figures as Code.org (2025). 2025 State of AI + CS Education; we quote single values and do not republish the dataset.' }
      ]
    },
    {
      id: 'rules', tint: 'deep', eyebrow: 'What the state requires',
      h2: 'Keystone Exams, five pathways and no compulsory CS course',
      intro: 'From the Pennsylvania Department of Education (PDE) page on statewide high school graduation requirements, read on 17 October 2026.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The Keystone Exams', p: 'PDE describes the Keystones as end-of-course assessments in Algebra I, Literature, and Biology. Students in Commonwealth public schools take part in them for federal accountability.' },
          { h3: 'Five pathways', p: 'Effective with the class of 2023, students can meet statewide requirements through one of five Pathways to Graduation, combining Keystone results, local requirements and evidence from other courses or programs.' },
          { h3: 'Where CS fits', p: 'Computer science is not one of the statewide requirements on that page. Districts set their own local course requirements, so what counts toward a diploma beyond the state floor is a question for the school.' }
        ] },
        { kind: 'callout', h3: 'What this means for a family', p: 'Because the state does not require CS, a student can graduate from many Pennsylvania high schools without writing a line of code. The course may well be on offer; the student has to choose it, or learn outside school. That choice is the gap our classes are built for.' },
        { kind: 'p', text: 'The legal basis PDE links to is Title 22, Chapter 4 of the Pennsylvania Code and the Public School Code sections on Keystone Exams and graduation. We quote the department&rsquo;s summary and do not interpret the statutes ourselves; for a specific student, the district&rsquo;s course guide is the authority.' }
      ]
    },
    {
      id: 'standards', tint: 'tint', eyebrow: 'The 2025 standards',
      h2: 'Where coding lives in Pennsylvania&rsquo;s new standards',
      intro: 'Section 4.12 of Title 22 of the Pennsylvania Code replaced the old science and technology standards on July 1, 2025.',
      body: [
        { kind: 'table', caption: 'Standards effective July 1, 2025 under 22 Pa. Code 4.12 (summarised from the regulation), and the matching work in our classes (right-hand column ours)', head: ['Standards set', 'Grades', 'What our classes add'], rows: [
          ['Pennsylvania Integrated Standards for Science, Environment, Ecology, Technology and Engineering', 'K to 5', 'Block coding projects that model a simple system, then test and improve it'],
          ['Pennsylvania Integrated Standards for Science, Environment and Ecology', '6 to 12', 'Python data work on real environmental and city datasets'],
          ['Pennsylvania Technology and Engineering Standards', '6 to 12, with bands 6 to 8 and 9 to 12', 'Design, build and debug cycles in Python, web and app projects']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Four core standards', p: 'The regulation says four core disciplinary standards describe practices in technology and engineering, with specific benchmarks for grade bands 6 to 8 and 9 to 12.' },
          { h3: 'Computational thinking', p: 'PDE&rsquo;s own definition of STEM education lists computational thinking beside design thinking and problem solving, which is the habit of mind every coding lesson trains.' },
          { h3: 'Not a programming syllabus', p: 'None of these sets is a stand-alone computer science course. They make room for coding; they do not guarantee a student will learn a language to any depth.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Counting Pittsburgh&rsquo;s public stairways in Python',
      intro: 'Pittsburgh is built on hills, and the city publishes its inventory of public steps through the Western Pennsylvania Regional Data Center (WPRDC) under a Creative Commons Attribution licence. It is an ideal first real dataset.',
      body: [
        { kind: 'table', caption: 'City of Pittsburgh Steps: our counts from the WPRDC download of 17 October 2026 (1,134 records)', head: ['Question a student asks', 'Our answer from the data'], rows: [
          ['How many stairways are listed?', '1,134 records across 80 neighborhoods'],
          ['Which neighborhood has the most?', 'South Side Slopes with 109, then Mount Washington with 54 and Perry North with 48'],
          ['What are most of them made of?', 'Concrete 858, wood 121, stone 85, with mixed and other materials making up the rest'],
          ['How many have 100 steps or more?', '113, and 11 of those have 200 or more'],
          ['Which has the most steps?', 'Ray Ave from Fair Ave to Woodward Ave in Brookline, at 378 steps'],
          ['How complete is the step count?', 'Filled for 1,022 records, blank for 112, and zero for 16']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Filter', p: 'Students load the CSV, keep only rows where the step count is filled in, and print how many survive. That single filter teaches more about real data than a week of textbook lists.' },
          { h3: '2. Count by category', p: 'A Counter over the material column, then over neighborhood, gives the two tallies above. A bar chart of the top ten neighborhoods makes the hills of the South Side visible at a glance.' },
          { h3: '3. Check the documentation', p: 'The published data dictionary lists 17 fields, but the download carries more columns, including the step count. Students learn to compare a file with its documentation before trusting either.' }
        ] },
        { kind: 'callout', h3: 'Our numbers, not the city&rsquo;s', p: 'Every count in the table is our own, from one download on one day. The city updates the data, records can be blank or zero for reasons the file does not give, and a zero may mean unmeasured rather than flat. Saying exactly what a number is, and what it is not, is the point of the exercise.' },
        { kind: 'p', text: 'A middle schooler can finish the filter and the material count in a lesson. A high schooler goes further: binning stairways by step count, plotting them on a map from the latitude and longitude columns, and asking whether neighborhoods with many stairways cluster along the steepest slopes. The licence asks only that the city be credited, which is a good first lesson in data ethics too.' }
      ]
    },
    {
      id: 'grades', tint: '', eyebrow: 'Grade by grade',
      h2: 'What to aim for in elementary, middle and high school',
      intro: 'A practical map for Pennsylvania families, using state events and the AP route as markers. The plan is ours; the event facts are PDE&rsquo;s.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Grades K to 4', p: 'Sequencing, loops and events in blocks. The goal is a child who can build a small game, break it on purpose and explain the fix.' },
          { h3: 'Grades 5 to 8', p: 'Typed Python and a first real dataset. PDE&rsquo;s Keystone STEM Competition is open from grade 5, so this is also the age to try a team design challenge.' },
          { h3: 'Grades 9 to 12', p: 'A school CS course if the timetable allows, AP Computer Science A or Principles, and a portfolio of projects a student built and can defend.' }
        ] },
        { kind: 'spec', title: 'The Keystone STEM Competition, as PDE describes it', p: 'A free, one-day statewide challenge for grades 5 to 12, with teams of up to five students, grade bands of 5 to 6, 7 to 8 and 9 to 12, regional events across Pennsylvania&rsquo;s 29 Intermediate Units, and no preparation required. We are not connected with the competition.' },
        { kind: 'p', text: 'PDE also notes that Pennsylvania has nine nationally recognized STEM ecosystems linking schools, employers and community groups. Those networks run local events; our classes are a way to build the coding depth a student brings to them.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Clock and calendar',
      h2: 'Eastern Time, from Erie to Philadelphia',
      intro: 'The whole state keeps one zone. The IANA time zone database lists Pennsylvania under US eastern time, represented by America/New_York.',
      body: [
        { kind: 'table', caption: 'Eastern Time against India time, 2026 to 2027 (our arithmetic from the IANA rules)', head: ['Period', 'Pennsylvania clock', 'India time is ahead by'], rows: [
          ['Until November 1, 2026', 'Eastern Daylight Time, UTC minus 4', '9 hours 30 minutes'],
          ['November 1, 2026 to March 14, 2027', 'Eastern Standard Time, UTC minus 5', '10 hours 30 minutes'],
          ['From March 14, 2027', 'Eastern Daylight Time again', '9 hours 30 minutes']
        ] },
        { kind: 'p', text: 'Our teachers work from India, which keeps the same clock all year, so the gap with Pittsburgh or Harrisburg changes twice a year while lesson times stay put on the Eastern clock. Families see every time in Eastern Time first.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Course path',
    h2: 'Four steps from blocks to AP',
    intro: 'Grades are starting guides. Placement after the free lesson decides where a student actually begins.',
    cols: [
      { band: 'Grades K to 4', h3: 'Play with logic', p: 'Block programs, puzzles and the first finished games.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 5 to 8', h3: 'Type real code', p: 'Python fundamentals, simple web pages and a first look at AI.', courses: ['python-ai-kids-masterclass', 'kids-ai-web-development-course'] },
      { band: 'Grades 9 to 10', h3: 'Work with data', p: 'Python in depth, datasets, charts and larger projects.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Grades 11 to 12', h3: 'AP and machine learning', p: 'AP Computer Science A in Java and models trained on data the student has cleaned.', courses: ['ap-computer-science-a-java-exam-prep-course', 'ai-ml-masterclass-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Pennsylvania&rsquo;s own advice on AI points back to coding',
    intro: 'PDE publishes guidance on AI in K-12 education. Two of its lines explain why students still need to understand the code underneath.',
    p1: 'Among the department&rsquo;s cautions: &ldquo;Do not use AI as a final source of facts.&rdquo; and &ldquo;Do not use AI as the only grader. Teachers must review and make final decisions.&rdquo; Both assume a person who can check what a machine produced. In the stairway project, a careless summary would say all 1,134 stairways have a known step count. That is wrong: 112 records are blank, and nobody notices unless they look.',
    p2: 'A student who wrote the filter knows why that answer fails. That is the skill we teach alongside every AI tool: read the output, test it against the data, and decide whether to trust it. Students under 18 use only tools whose terms allow their age.',
    closer: 'AI makes code cheap to produce and judgment more valuable, and judgment comes from having built things yourself.',
    blogAnchor: 'why coding still matters when AI writes code'
  },

  delivery: {
    eyebrow: 'How classes run',
    h2: 'One live classroom for every corner of the Commonwealth',
    intro: 'A student in State College and a student in Scranton join the same lesson from home.',
    cells: [
      { h3: 'Live, not recorded', p: 'A teacher speaks, shares a screen and reads the student&rsquo;s code in real time, so mistakes are caught in the lesson rather than at the end of a video.' },
      { h3: 'Pennsylvania calendar', p: 'Teachers plan around US grade levels, Keystone season and AP exam weeks. School assignments remain the student&rsquo;s own work; we teach the ideas behind them.' },
      { h3: 'Your schedule', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Level-matched groups', p: 'Fifteen to twenty classmates per batch, grouped by skill, some from Pennsylvania and some from elsewhere in the country.' },
      { h3: 'Private lessons', p: 'One teacher and one student, for faster progress, AP Computer Science A preparation or a specific project.' },
      { h3: 'A free first lesson', p: 'The first class is a real lesson with a real task, followed by a placement suggestion. No card details are requested.' }
    ],
    spec: { title: 'Online only, and said plainly', p: 'Modern Age Coders has no center in Pennsylvania and claims none. Classes are taught live online from India; a student needs a computer, a microphone or working sound, and a steady connection.' }
  },

  fees: {
    h2: 'Fees for Pennsylvania families',
    intro: 'The same three figures apply everywhere in the state.',
    first: 'One complete lesson at no charge, ending with a recommended course, level and class time.',
    group: 'A month of live lessons in a level-matched batch of fifteen to twenty students.',
    private: 'A month on the same rhythm with a teacher for one student only.',
    closer: 'Families in Pennsylvania pay in US dollars at a single rate, whether they live in Allentown or Altoona. Nothing is billed until after the free lesson, and the pricing page sets out how holidays and missed lessons are handled.'
  },

  reviewsH2: 'What families say about us on Google',

  book: {
    h2: 'Reserve a free lesson for your Pennsylvania learner',
    intro: 'Share a grade and a goal with us. A fourth grader might start with a Scratch game; a junior might start with the Pittsburgh steps dataset or an AP Computer Science A problem.',
    success: 'Thank you. We will be in touch shortly to arrange a class for your Pennsylvania student.'
  },

  faq: {
    h2: 'Pennsylvania coding and AI questions',
    intro: 'Short answers sourced to PDE, Code.org and the College Board; anything that is our opinion says so.',
    items: [
      { q: 'Is computer science required to graduate in Pennsylvania?', a: 'Not as a statewide course. PDE says students meet statewide requirements through the Keystone Exams or one of five Pathways to Graduation, effective with the class of 2023. Districts may add local requirements.' },
      { q: 'How many Pennsylvania high schools offer computer science?', a: 'Code.org (2025) reports 530 of 684 Pennsylvania high schools offering foundational computer science in 2023 to 2024, about 77.5%.' },
      { q: 'How many Pennsylvania students take computer science?', a: 'For 2023 to 2024, Code.org reports 19,506 of 551,996 high school students, or 3.53%, enrolled in a computer science course.' },
      { q: 'Which subjects are the Keystone Exams?', a: 'PDE lists Algebra I, Literature, and Biology as the three end-of-course Keystone Exams.' },
      { q: 'What changed in the Pennsylvania standards in 2025?', a: 'From July 1, 2025, 22 Pa. Code 4.12 introduced integrated science, environment, ecology, technology and engineering standards for grades K to 5, and separate technology and engineering standards for grades 6 to 12.' },
      { q: 'Who can enter the Keystone STEM Competition?', a: 'PDE describes it as a free, one-day challenge for grades 5 to 12, with teams of up to five students and regional events across the 29 Intermediate Units. We are not connected with it.' },
      { q: 'Will your classes count toward a Pennsylvania diploma?', a: 'No. Credit comes from the student\'s school. Our classes add depth, projects and AP preparation, and graded school work stays the student\'s own.' },
      { q: 'When are classes held for Pennsylvania students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Eastern Time.', boiler: true },
      { q: 'Do you have a Pennsylvania location?', a: 'No. There is no Modern Age Coders center in Pennsylvania. Every class is live and online, taught from India.', boiler: true },
      { q: 'Where can I see the fees?', a: 'The fees section above lists the free first lesson, the monthly batch and the monthly one-to-one option. Billing begins only after the free lesson.' }
    ]
  },

  next: {
    eyebrow: 'Keep exploring',
    h2: 'Next steps beyond this page',
    html: 'Juniors and seniors weighing AP should see <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>, while contest fans can try <a class="cg-inline-link" href="/usaco-preparation-online-coaching">USACO preparation</a>. For activities beyond class, see <a class="cg-inline-link" href="/computer-science-extracurriculars">computer science extracurriculars</a>, or compare with our page for <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-carolina">North Carolina</a>, where CS is now a graduation requirement.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Pennsylvania and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A' },
    { href: '/coding-classes-for-high-school-students', label: 'High school coding' },
    { href: '/computer-science-graduation-requirements-by-state', label: 'CS graduation requirements by state' },
    { href: '/high-school-computer-science-access-by-state', label: 'High school CS access by state' }
  ],

  personalityCss: `
.cg-root.cg-ap .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.2vw, 2.6rem); }
.cg-root.cg-ap .cg-hero h1 { font-weight: 720; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-ap .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-ap .cg-eyebrow { letter-spacing: 0.09em; font-weight: 650; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-ap .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.01em; }
.cg-root.cg-ap .cg-table caption { text-align: left; font-style: italic; }
.cg-root.cg-ap .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ap .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-ap .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
`,

  dossier: {
    curriculumAuthority: 'Pennsylvania, read raw on 17 October 2026: PDE Statewide High School Graduation Requirements (class of 2023, five Pathways to Graduation, Keystone Exams in Algebra I, Literature, and Biology; no statewide CS course); 22 Pa. Code 4.12 (standards effective July 1, 2025: integrated K-5 set, integrated 6-12 science set, Technology and Engineering 6-12 with four core disciplinary standards and bands 6-8 and 9-12); PDE STEM in PA (computational thinking, nine STEM ecosystems); PDE Keystone STEM Competition (free, one day, grades 5-12, teams up to five, 29 Intermediate Units); PDE AI in K-12 Education (two quoted cautions); Code.org (2025) access trend 59% to 78%, 530 of 684 in 2023-24, participation 5.3%, 5.4%, 5.9%, 3.53%, 19,506 of 551,996; College Board AP schools 770 and 771 (public 585 and 601, non-public 185 and 170); IANA America/New_York.',
    localProject: 'WPRDC City of Pittsburgh Steps (CC BY, City of Pittsburgh), fetched 17 October 2026: 1,134 records (datastore total matched), 80 neighborhoods; our counts South Side Slopes 109, Mount Washington 54, Perry North 48; Concrete 858, Wood 121, Stone 85; step count filled 1,022, blank 112, zero 16; 113 with 100 or more steps, 11 with 200 or more; most 378 steps (Ray Ave, Brookline); dictionary lists 17 fields and omits number_of_steps. Lesson family: filtering, counting by category, missing values, reading documentation.',
    requiredMentions: [
      '530 of 684',
      '19,506 of 551,996',
      'five Pathways to Graduation',
      'Algebra I, Literature, and Biology',
      'July 1, 2025',
      '29 Intermediate Units',
      '1,134 records',
      '378 steps',
      'Do not use AI as a final source of facts.',
      '770, then 771',
      'nine nationally recognized STEM ecosystems'
    ],
    sources: [
      { claim: 'PDE: Statewide High School Graduation Requirements, Keystone Exams and five Pathways to Graduation.', url: 'https://www.pa.gov/agencies/education/programs-and-services/instruction/elementary-and-secondary-education/assessment-and-accountability/graduation-requirements' },
      { claim: '22 Pa. Code 4.12, academic standards effective July 1, 2025.', url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/022/chapter4/s4.12.html' },
      { claim: 'PDE: STEM in PA, computational thinking and nine STEM ecosystems.', url: 'https://www.pa.gov/agencies/education/programs-and-services/instruction/elementary-and-secondary-education/stem-in-pa' },
      { claim: 'PDE: Keystone STEM Competition.', url: 'https://www.pa.gov/agencies/education/programs-and-services/instruction/elementary-and-secondary-education/stem-in-pa/keystone-stem-competition' },
      { claim: 'PDE: AI in K-12 Education guidance.', url: 'https://www.pa.gov/agencies/education/ai-digital-media-literacy/ai-in-k-12-education' },
      { claim: 'Code.org (2025), State of AI + CS Education data: PA access and participation.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'College Board: School Report of AP Exams by State, 2023-24.', url: 'https://reports.collegeboard.org/media/xlsx/school-report-of-ap-exams-by-state-2023-24.xlsx' },
      { claim: 'WPRDC: City of Pittsburgh Steps (CC BY).', url: 'https://data.wprdc.org/dataset/city-steps' },
      { claim: 'IANA tzdb northamerica: US rule and America/New_York.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'PDE STEM page job counts and computing salary figures: money and job claims are out of scope, not used.',
      'A Pennsylvania K-12 computer science standards adoption year: not found on a PDE page that could be read raw, so not printed.',
      'A cause for the drop in participation from 5.9% to 3.53%: the source gives none, so none is offered.',
      'Code.org 2024-25 access for Pennsylvania: the trend tab shows no value, so no figure is printed.',
      'Code.org state summary narrative, gender, geography and school-size figures: not used.',
      'Installed dates in the steps data: sparse and possibly placeholders, not used.',
      'That our classes satisfy any Pennsylvania graduation requirement: refused.',
      'Any affiliation with PDE, the Keystone STEM Competition, WPRDC, the City of Pittsburgh, Code.org or the College Board.'
    ]
  }
};
