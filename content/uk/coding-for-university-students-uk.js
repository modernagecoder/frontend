'use strict';
// Coding for university students, UK (ag- age and career door; UK cluster Phase 3).
// Sources, read raw on 21 September 2026:
//  - Prospects Luminate, "What do graduates do? 2025/26", published November 2025, produced by Prospects with
//    the Graduate Futures Institute (formerly AGCAS), from HESA's Graduate Outcomes survey of UK-domiciled
//    first-degree graduates of 2022/23, about 15 months after graduation. The Luminate page gives the headline
//    figures (179,675 respondents; 56.4% full-time work; 6.2% unemployed against 5.6%; 71.9% professional-level
//    against 75.1%). The full report was read from the PDF copy hosted at
//    https://www.york.ac.uk/media/studenthome/workandvolunteering/otherpdfsanddocs/What-do-graduates-do-2025-26.pdf
//    Computer science page: 58.5% working full time, 12.9% part time, 9.3% working and studying, 3.9% further
//    study, 9.7% "Unemployed, including those due to start work", 5.6% other, 8,005 responses; 63.4% of those in
//    UK employment in IT occupations and 9.2% in retail, catering, waiting and bar work (5,430 in UK employment);
//    top professional job programmers and software development professionals, then IT user support
//    technicians, cyber security professionals; further study: 40.7% masters, 33.4% professional qualification.
//    TEM overview: "computer science graduates recorded an unemployment rate of 9.7% and mathematics graduates
//    7.5%, both higher than the overall graduate rate of 6.2%"; "63.4% of computer science graduates worked in
//    IT related occupations spread across many sectors". Salaries omitted (no pound figures on page).
//    Placements essay (Sheffield Hallam): "the classic model is 24 to 48 weeks' work"; placement after level 5.
//    ISE essay: 140 applications per graduate vacancy for the last two years, highest since 1991; competition
//    for internships and placements has risen. Digital skills essay (City St George's): "The concept of the
//    'digital native' is a myth"; the six Jisc digital capabilities elements; "SPSS for psychology students".
//  - HESA's own Graduate Outcomes 2023/24 pages returned HTTP 403; not circumvented, so the newer HESA year
//    (and any claim that computing had the highest unemployment of all subjects) is not used.
// Spine: two kinds of student, one gap. For computing students the degree is not the whole application:
// roughly one CS graduate in ten was unemployed or waiting to start work 15 months on, against 6.2% overall,
// though most who found work found IT work. For everyone else, "digital native" is a myth and coding is a
// skill to build on purpose. Projects, placements and interview practice alongside a degree, never assessed
// work. The ISE Student Development Survey belongs to the students agents page and is not repeated.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'UNIVERSITY', blurb: 'For UK university students in computing and every other subject: what the graduate outcomes data shows, and coding alongside a degree.' },
  slug: 'coding-for-university-students-uk',
  code: 'cus',
  accent: '#4A3659',
  accentRationale: 'Coding for university students, UK: a dusky academic violet from the solver (8.68:1 on every paper tint, dE 9.1 from the nearest used accent)',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Coding for university students, UK',
  title: 'Coding for University Students in the UK | Live Online',
  description: 'Coding for UK university students in computing and every other subject: what graduate outcomes show, plus projects and interview practice. First class free.',
  ogDescription: 'Computer science graduates had 9.7% unemployment 15 months on, against 6.2% for all graduates. Most who found work found IT work. What made the difference?',
  twitterDescription: 'Coding alongside a UK degree: portfolio projects, placement preparation and data skills for every subject, never your assessed work. First class free.',
  pageName: 'Coding for University Students in the UK',
  webPageDescription: 'Live online coding lessons for UK university students, with an honest reading of What do graduates do? 2025/26 for computer science and the digital skills every graduate needs.',
  courseDescription: 'Live online coding for UK university students: Python, Java, C++, data structures and algorithms, databases, web development and data analysis, alongside a degree and never on assessed work.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Coding for university students',
  navLinks: [
    { href: '#outcomes', label: 'Graduate outcomes' },
    { href: '#placements', label: 'Placements' },
    { href: '#other-subjects', label: 'Other subjects' },
    { href: '#alongside', label: 'Alongside a degree' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; University students &middot; Any subject',
  h1: 'Coding for university students in the UK',
  lede: 'Computer science graduates in the UK found the first year after university harder than graduates overall. In What do graduates do? 2025/26, which reads HESA\'s Graduate Outcomes survey for UK-domiciled first-degree graduates of 2022/23, 9.7% of computer science graduates were unemployed or waiting to start a job about 15 months after graduating, against 6.2% across all subjects. Yet 63.4% of those in work were in IT occupations, and the most common professional job was programming and software development. So the degree leads somewhere for most, but it is not the whole application. Students in every other subject hear a version of the same message from the other side: the report\'s guide to digital skills for non-tech graduates says flatly that "The concept of the \'digital native\' is a myth" and lists coding among the digital skills it recommends graduates build. This page is for both groups: computing students who want projects and interview practice beyond their modules, and students of economics, psychology, the sciences or history who want to code with data. Lessons run alongside a degree and never touch assessed work.',
  secondaryCta: { href: '#outcomes', label: 'The graduate figures' },
  wa: 'Hello Modern Age Coders, I am a university student in the UK and would like a free first coding class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; projects alongside a degree, never assessed work',
  spec: [
    ['For', 'UK university students, any subject'],
    ['CS graduates unemployed', '9.7% at 15 months, all subjects 6.2%'],
    ['CS graduates in IT work', '63.4% of those employed'],
    ['Builds', 'Projects, placement and interview readiness'],
    ['Languages', 'Python, Java, C++, SQL, JavaScript'],
    ['Never touches', 'Coursework, labs, dissertations'],
    ['Format', 'Evenings and weekends, live'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'According to What do graduates do? 2025/26, based on HESA\'s Graduate Outcomes survey, 9.7% of UK computer science graduates of 2022/23 were unemployed or due to start work about 15 months after graduating, compared with 6.2% of all first-degree graduates, while 63.4% of those in work held IT occupations. For students outside computing, the same report describes the "digital native" as a myth and recommends building digital skills deliberately, with coding among them. Modern Age Coders teaches UK university students live and online: Python, Java, C++, data structures and algorithms, SQL, web development and data analysis, through projects of their own and practice for technical interviews. We never work on coursework, lab reports, dissertations or anything assessed. The first class is free; afterwards a group place is USD 100 a month and one-to-one lessons USD 150 a month, and you can stop at the end of any month.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses university students often start with',
    lede: 'Interview preparation for computing students, Python from zero for everyone else, and data analysis for any subject. Each card opens a full syllabus.',
    items: [
      { course: 'data-structures-algorithms-masterclass-college', code: 'UNI / 01', title: 'Data Structures and Algorithms', note: 'The material technical interviews test, practised until you can explain it at a whiteboard.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'UNI / 02', title: 'Python from Zero', note: 'For students outside computing: the first language, taught properly from the first line.' },
      { course: 'data-analysis-mastery-course-college', code: 'UNI / 03', title: 'Data Analysis', note: 'Spreadsheets, SQL and Python for students whose degree runs on data.' }
    ]
  },

  sections: [
    {
      id: 'outcomes', tint: 'tint', eyebrow: 'Graduate outcomes',
      h2: 'What happened to computer science graduates',
      lede: 'From What do graduates do? 2025/26, published by Prospects Luminate with the Graduate Futures Institute in November 2025. It covers UK-domiciled first-degree graduates of 2022/23, surveyed about 15 months after graduating.',
      body: [
        { kind: 'table', caption: 'Computer science graduates of 2022/23, about 15 months on (8,005 responses)', head: ['Outcome', 'Share'], rows: [
          ['Working full time', '58.5%'],
          ['Working part time', '12.9%'],
          ['Working and studying', '9.3%'],
          ['Further study', '3.9%'],
          ['Unemployed, including those due to start work', '9.7%'],
          ['Other', '5.6%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The comparison that matters',
          left: [
            'The report\'s overview puts it plainly: "computer science graduates recorded an unemployment rate of 9.7% and mathematics graduates 7.5%, both higher than the overall graduate rate of 6.2%". Roughly one computer science graduate in ten was out of work or waiting to start a job.',
            'That is not a verdict on the subject. It says that a computing degree, on its own, did not carry every graduate into work within fifteen months, in a market the report describes as having begun to cool.'
          ],
          rightH3: 'When they did find work',
          right: [
            '63.4% of computer science graduates in UK employment worked in IT occupations, spread across many sectors. The most common professional jobs were programmers and software development professionals, then IT user support technicians, then cyber security professionals.',
            'At the other end, 9.2% of those in UK employment were working in retail, catering, waiting or bar jobs. The same degree led to very different places.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'A cooling market', p: 'Across all subjects, unemployment rose to 6.2% from 5.6% a year earlier, and the share of working graduates in professional-level jobs fell to 71.9% from 75.1%.' },
          { h3: 'Record competition', p: 'An Institute of Student Employers essay in the report notes 140 applications per graduate vacancy for the last two years, the highest since it began collecting the data in 1991.' },
          { h3: 'Further study', p: 'Of computer science graduates in further study, 40.7% were on a masters and 33.4% were working towards a professional qualification.' }
        ] },
        { kind: 'source', html: 'Source, read 21 September 2026: <a class="ag-inline-link" href="https://luminate.prospects.ac.uk/what-do-graduates-do" rel="noopener" target="_blank">Prospects Luminate, What do graduates do? 2025/26</a>, published November 2025, using HESA Graduate Outcomes data. Figures describe UK-domiciled first-degree graduates who responded to the survey. Salary figures in the report are left out here.' }
      ]
    },
    {
      id: 'placements', tint: 'deep', eyebrow: 'Placements',
      h2: 'Placements, projects and the evidence beyond a transcript',
      lede: 'The same report carries an essay from Sheffield Hallam University on work experience during a degree, and it is useful reading for anyone in their first or second year.',
      body: [
        { kind: 'p', html: 'It describes the classic placement: "the classic model is 24 to 48 weeks\' work, between or after different levels of study", with many undergraduates going out on placement after their level 5 year, the equivalent of two years of a bachelors degree, and bringing what they learned back into their final year. It also notes newer forms: consultancy projects on employer briefs, and placements that run within a semester. Elsewhere in the report, the ISE observes that competition for internships and placements has risen too.' },
        { kind: 'table', mt: true, caption: 'Evidence a student can build before applying, and how we teach it', head: ['Evidence', 'Why it helps', 'Where it is taught'], rows: [
          ['Two or three finished projects', 'Shows you can carry work from idea to a working result', 'Full stack, data or game projects of your choosing'],
          ['A tidy GitHub history', 'Lets anyone see the work happen over time', 'Git and GitHub, alongside every project'],
          ['Fluency in data structures', 'The subject of most technical interview questions', 'Data structures and algorithms, with timed practice'],
          ['One language known deeply', 'Depth reads better than a long list of names', 'Python, Java or C++ taken beyond module level'],
          ['A way of talking about code', 'Interviews test explanation as much as answers', 'Explaining your own solutions aloud in lessons']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we will not do',
          left: [
            'We never write, edit, debug or review coursework, lab submissions, group project code, dissertation work or take-home assessments. If a module\'s assignment is on the same topic as a lesson, the lesson uses a different problem.',
            'We also do not promise placements or jobs. We teach skills and help you build evidence; employers decide the rest.'
          ],
          rightH3: 'Where your university helps',
          right: [
            'University careers services usually offer application support and know your department\'s placement arrangements. Use them.',
            'What a careers service is not set up to do is teach code week by week, which is the gap lessons fill.'
          ] }
      ]
    },
    {
      id: 'other-subjects', tint: 'tint', eyebrow: 'Other subjects',
      h2: 'Coding for students outside computing',
      lede: 'The report\'s guide to digital skills for non-STEM and non-tech graduates, written by a work-based learning adviser at City St George\'s, University of London, starts from a blunt premise.',
      body: [
        { kind: 'p', html: 'That premise is that "The concept of the \'digital native\' is a myth". Growing up with a phone does not teach anyone to clean a dataset, automate a report or judge a chart. The guide organises what graduates need around the six elements of Jisc\'s digital capabilities framework, and coding sits under digital creation, problem solving and innovation, next to digital projects and portfolios.' },
        { kind: 'table', mt: true, caption: 'The six Jisc digital capability elements, as the guide lists them', head: ['Element', 'Where coding helps'], rows: [
          ['Digital proficiency and productivity', 'Automating repetitive tasks instead of doing them by hand'],
          ['Digital learning and development', 'Learning new tools quickly because the ideas underneath are familiar'],
          ['Digital creation, problem solving and innovation', 'Writing programs, building projects and portfolios'],
          ['Information, data and media literacies', 'Querying, cleaning and analysing data yourself'],
          ['Digital communication, collaboration and participation', 'Working in shared repositories and notebooks'],
          ['Digital identity and wellbeing', 'A public portfolio that shows what you can do']
        ] },
        { kind: 'table', mt: true, caption: 'Coding that often helps, by degree subject', head: ['If you study', 'Useful coding', 'A first project'], rows: [
          ['Economics or finance', 'Python with data libraries, SQL', 'Recreating a published chart from the original public data'],
          ['Psychology', 'Python or R-style analysis in Python, reproducible notebooks', 'Re-running a statistical analysis on an open dataset'],
          ['Biology, chemistry or physics', 'Python for data, simple simulations', 'Plotting and fitting experimental-style data'],
          ['Business or management', 'SQL, spreadsheets, dashboards', 'A small database with questions a manager would ask'],
          ['History, English or languages', 'Python for text analysis', 'Counting and comparing words across public-domain texts'],
          ['Engineering', 'Python, C++ and numerical methods', 'A small simulation checked against a hand calculation']
        ] },
        { kind: 'p', html: 'The guide itself gives "SPSS for psychology students" as an example of subject-specific tools, so the point is not to replace what your department uses. It is to understand data well enough that any tool, including an AI assistant, is something you direct rather than follow. None of the first projects above use your own course data or overlap with an assignment.' },
        { kind: 'source', html: 'Source: the digital skills and placements essays in <a class="ag-inline-link" href="https://luminate.prospects.ac.uk/what-do-graduates-do" rel="noopener" target="_blank">What do graduates do? 2025/26</a>. The subject table is our own teaching guidance, not taken from the report.' }
      ]
    },
    {
      id: 'alongside', tint: '', eyebrow: 'Alongside a degree',
      h2: 'Coding around a university timetable',
      lede: 'A degree already fills the week. Lessons have to fit around lectures, labs, part-time work and exams, not compete with them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Term time', p: 'One lesson a week, usually an evening, with a small project moving forward between lessons.' },
          { h3: 'Exam season', p: 'Billing is monthly, so you can pause for exams and restart the following month.' },
          { h3: 'Summer', p: 'A good time to finish a larger project or prepare for placement interviews in the autumn.' }
        ] },
        { kind: 'table', mt: true, caption: 'Which route fits which student', head: ['You are', 'A sensible route'], rows: [
          ['First-year computing student', 'Take one language beyond the module, then start data structures'],
          ['Second-year computing student applying for placements', 'Data structures and algorithms, plus one finished project on GitHub'],
          ['Final-year computing student', 'Interview practice and a portfolio project in the area you want to work in'],
          ['Student in another subject, new to code', 'Python from zero, then data analysis on public data'],
          ['Postgraduate with a data-heavy project', 'Python and SQL for research-style analysis, kept apart from your thesis code']
        ] },
        { kind: 'p', mt: true, html: 'Your university\'s rules on AI and academic conduct apply to everything you submit, and they differ by module; the <a class="ag-inline-link" href="/ai-agents-course-for-students-uk">AI agents course for students</a> explains how we keep portfolio work apart from assessed work. If you are drawn to competitions, <a class="ag-inline-link" href="/student-hackathons-uk">student hackathons in the UK</a> are a good place to take a finished project, and <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-uk">understanding the code rather than copying it</a> is the habit every interviewer checks for.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages across a degree',
    lede: 'The pace depends on your starting point and your timetable; placement is by what you can already do.',
    table: { caption: 'From first program to interview-ready', head: ['Stage', 'What should be true'], rows: [
      ['1. Fluent basics', 'You can write, run and debug small programs in one language without looking everything up'],
      ['2. Structures and data', 'You choose sensible data structures and can query and clean a real dataset'],
      ['3. A finished project', 'One project is complete, documented and on GitHub with a readable history'],
      ['4. Interview ready', 'You can solve a typical interview problem aloud and explain your project in depth']
    ] },
    left: { h3: 'Stage three is the hinge', ps: [
      'A finished project turns a list of modules into something an employer can look at.',
      'The full order of topics is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Not a replacement for modules', ps: [
      'Lessons add depth and practice; your degree remains the qualification.',
      'Where a lesson and a module cover the same idea, the lesson uses different problems.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for university students',
    lede: 'Grouped by purpose. The free class settles where to begin.',
    bands: [
      { num: 'I', h3: 'Languages in depth', sub: 'Beyond module level', courses: [
        { code: 'UNI / LNG / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'From first line to confident, idiomatic code.' },
        { code: 'UNI / LNG / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java Masterclass', blurb: 'Object-oriented design, the way large systems use it.' },
        { code: 'UNI / LNG / 03', slug: 'cpp-programming-complete-masterclass-college', title: 'C++ Masterclass', blurb: 'Memory, performance and the language beneath much engineering.' }
      ] },
      { num: 'II', h3: 'Interviews and foundations', sub: 'For placement and graduate applications', courses: [
        { code: 'UNI / INT / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data Structures and Algorithms', blurb: 'The core of technical interviews.' },
        { code: 'UNI / INT / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL Databases', blurb: 'Relational design and SQL that real applications use.' },
        { code: 'UNI / INT / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'The workflow every team expects you to know.' }
      ] },
      { num: 'III', h3: 'Applied projects', sub: 'Portfolio work in any subject', courses: [
        { code: 'UNI / APP / 01', slug: 'full-stack-web-development-masterclass-college', title: 'Full Stack Web Development', blurb: 'A complete web application, front to back.' },
        { code: 'UNI / APP / 02', slug: 'data-analysis-mastery-course-college', title: 'Data Analysis', blurb: 'Excel, SQL and Python on real data.' },
        { code: 'UNI / APP / 03', slug: 'data-science-complete-masterclass-college', title: 'Data Science', blurb: 'Statistics and machine learning with Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Live teaching that works around lectures',
    lede: 'Our teachers are in India, where clocks stay the same all year; UK time is four and a half hours behind India in British Summer Time and five and a half hours behind in winter. Evenings and weekends in the UK suit both sides.',
    slots: [
      { time: 'Weekday evening', l: 'After lectures and labs.' },
      { time: 'Weekend morning', l: 'For students who work evening shifts.' },
      { time: 'Weekend afternoon', l: 'A longer block for project work.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'We look at where you are, what you want and which route fits.' },
      { h3: 'Groups of five to ten', p: 'University students at the same level, from the UK and elsewhere.' },
      { h3: 'One to one', p: 'For a faster pace or a specific interview deadline.' },
      { h3: 'Projects you choose', p: 'The portfolio is built from your interests, not a fixed template.' },
      { h3: 'Code read closely', p: 'A teacher reads your program and explains exactly what to improve.' },
      { h3: 'Assessed work stays yours', p: 'Nothing you submit to your university is ever touched in a lesson.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Four finished projects by our students. More, from every age group, are gathered in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from our students and their families on Google, copied exactly.',

  fees: {
    h2: 'Fees for university students',
    lede: 'One monthly fee in US dollars, identical in every country outside India, with no enrolment fee and no commitment beyond the month, so a heavy term or exam season never locks you in.',
    free: ['A look at your level and goals', 'A route suggested for your year and subject', 'No payment details needed'],
    group: ['Five to ten students at one level', 'The same teacher each week', 'Project and interview practice', 'Stop at the end of any month'],
    one: ['A teacher for you alone', 'Paced around your deadlines', 'Suits a specific interview date']
  },

  faq: {
    eyebrow: 'Questions from students',
    h2: 'What UK university students ask',
    items: [
      { q: 'Is it harder for computer science graduates to find work?', a: 'In What do graduates do? 2025/26, 9.7% of computer science graduates of 2022/23 were unemployed or due to start work about 15 months after graduating, against 6.2% for all graduates. Most who found work, 63.4%, were in IT occupations.' },
      { q: 'Can you help with my coursework or dissertation?', a: 'No. We never write, edit, debug or review anything you submit for assessment, including lab work, group projects and dissertation code.' },
      { q: 'Will lessons get me a placement?', a: 'We cannot promise that. We help you build the evidence applications and interviews ask about: finished projects, a clean GitHub history, and fluency in data structures and algorithms.' },
      { q: 'I study economics, not computing. Is coding worth it?', a: 'Often, yes. Data work runs through economics, psychology, the sciences and business, and the report\'s guide to digital skills lists coding among the skills it recommends for graduates outside tech.' },
      { q: 'Which language should I learn?', a: 'Computing students usually deepen the language their degree uses. Students in other subjects usually start with Python, because it is readable and strong for data.' },
      { q: 'What is a placement year?', a: 'Typically 24 to 48 weeks of work, often taken after the second year of a bachelors degree. Your department and careers service will explain the arrangements at your university.' },
      { q: 'Do you prepare students for technical interviews?', a: 'Yes, through data structures and algorithms practice and by having you explain solutions aloud. We do not claim inside knowledge of any employer\'s process.' },
      { q: 'Can I pause during exams?', a: 'Yes. Billing is monthly, so you can stop at the end of a month and restart when exams are over.' },
      { q: 'What does it cost?', a: 'The first class is free. After that a group place is USD 100 a month and one-to-one lessons USD 150 a month, with no enrolment fee.' },
      { q: 'When are lessons?', a: 'Weekday evenings or weekends in UK time, agreed in the free class. Our teachers are four and a half hours ahead of the UK in summer and five and a half in winter.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Agents, competitions, Python in depth, and the habit of understanding code.',
    items: [
      { href: '/ai-agents-course-for-students-uk', label: 'AI agents course for students', p: 'Building an agent as portfolio evidence.' },
      { href: '/student-hackathons-uk', label: 'Student hackathons in the UK', p: 'Where to take a finished project.' },
      { href: '/best-python-classes-online-uk', label: 'Python classes online', p: 'How we teach Python properly.' },
      { href: '/understand-the-code-dont-copy-paste-uk', label: 'Understand the code, do not copy and paste', p: 'What interviewers are really checking.' },
      { href: '/problem-solving-skills-through-coding-uk', label: 'Problem solving through coding', p: 'The thinking behind every interview question.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page in one place.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Leave a number and we will call at a UK time that fits your timetable. Tell us your year and subject; the class works out where you are and ends with a route for the term.',
    readFirst: 'Would you rather read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains the method, each <a class="ag-inline-link" href="/courses">course page</a> has its syllabus, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows finished work.',
    note: 'Messaging us on WhatsApp from a UK number is usually fastest. The team is in India, so the number begins +91, and there is no UK office.',
    formNote: 'Free, no card, one call.'
  },

  footer: {
    cols: [
      { h4: 'University', links: [
        { href: '/ai-agents-course-for-students-uk', label: 'AI agents for students' },
        { href: '/student-hackathons-uk', label: 'Student hackathons' },
        { href: '/problem-solving-skills-through-coding-uk', label: 'Problem solving' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'UK', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' },
        { href: '/best-python-classes-online-uk', label: 'Python classes online' },
        { href: '/best-coding-classes-for-adults-uk', label: 'Coding for adults' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'A degree, plus evidence you can show'
  },

  personalityCss: `
.ag-root.ag-cus .ag-hero h1 { letter-spacing: -0.026em; font-weight: 690; }
.ag-root.ag-cus .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-cus .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-cus .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cus .ag-table th:first-child { width: 34%; }
.ag-root.ag-cus .ag-band-head h3 { letter-spacing: -0.012em; }
`,

  mustMention: ['9.7%', '6.2%', '63.4%', '58.5%', '8,005', 'digital native', 'placement', '24 to 48 weeks', 'Graduate Outcomes', 'data structures', 'assessed work'],

  dossier: {
    curriculumAuthority: 'United Kingdom, university students. Prospects Luminate with the Graduate Futures Institute, What do graduates do? 2025/26, published November 2025, from HESA Graduate Outcomes (UK-domiciled first-degree graduates of 2022/23, about 15 months on; 179,675 respondents): all subjects 56.4% full-time work, 6.2% unemployed (5.6% the year before), 71.9% professional-level (75.1%). Computer science (8,005 responses): 58.5% full time, 12.9% part time, 9.3% working and studying, 3.9% further study, 9.7% unemployed including those due to start work, 5.6% other; 63.4% of those in UK employment in IT occupations, 9.2% in retail, catering, waiting and bar work; top professional jobs programmers and software development professionals, IT user support technicians, cyber security professionals; further study 40.7% masters, 33.4% professional qualification. Overview: "computer science graduates recorded an unemployment rate of 9.7% and mathematics graduates 7.5%, both higher than the overall graduate rate of 6.2%". Placements essay: "the classic model is 24 to 48 weeks\' work, between or after different levels of study". ISE essay: 140 applications per graduate vacancy, highest since 1991. Digital skills essay: "The concept of the \'digital native\' is a myth"; six Jisc elements; "SPSS for psychology students".',
    localProject: 'Two kinds of student, one gap. The page reads What do graduates do? 2025/26 for computer science honestly (9.7% unemployed or due to start work against 6.2% overall, yet 63.4% of those employed in IT occupations and 9.2% in retail and hospitality), draws on the report\'s placements essay, and uses its digital skills essay (the digital native is a myth; the six Jisc elements) to address students in every other subject, with a subject-by-subject table of useful coding. Lessons run alongside a degree and never touch assessed work. Lesson family: graduate destination data read as a guide to what to build during a degree.',
    requiredMentions: ['9.7%', '6.2%', '63.4%', 'digital native'],
    sources: [
      { claim: 'Prospects Luminate, What do graduates do? 2025/26: headline outcomes, publication date and producers, HESA Graduate Outcomes basis.', url: 'https://luminate.prospects.ac.uk/what-do-graduates-do' },
      { claim: 'What do graduates do? 2025/26 full report (PDF copy hosted by the University of York): computer science outcomes, occupations and jobs, TEM overview, placements, ISE and digital skills essays.', url: 'https://www.york.ac.uk/media/studenthome/workandvolunteering/otherpdfsanddocs/What-do-graduates-do-2025-26.pdf' }
    ],
    rejectedClaims: [
      'HESA Graduate Outcomes 2023/24 figures, including an 11% computing unemployment rate seen in a search summary: HESA returned HTTP 403, so the page uses only the 2022/23 cohort as read in the report.',
      'That computing had the highest unemployment of any subject: not checked across every subject page, so not claimed.',
      'Graduate salary figures: omitted to keep pound amounts off the page.',
      'Any promise of placements, interviews or jobs: none made.',
      'Any help with coursework, labs, group projects or dissertations: explicitly refused.'
    ]
  }
};
