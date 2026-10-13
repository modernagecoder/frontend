'use strict';
// HSC Enterprise Computing help (ag- exam door, Australia cluster Phase 3, row 51).
// Facts read raw on 7 October 2026 at the NSW Curriculum site (curriculum.nsw.edu.au, Enterprise
// Computing 11-12 Syllabus (2022): overview, course description and enrolment details, HSC
// examinations, school-based assessment). Year 11 (120 hours): Interactive Media and the User
// Experience 40, Networking Systems and Social Computing 40, Principles of Cybersecurity 40. Year 12
// (120 hours): Data Science 30, Data Visualisation 30, Intelligent Systems 30, Enterprise Project 30.
// Course numbers 11175 and 15175, 2 units each, Year 11 as prerequisite for Year 12. HSC exam: 80
// marks, on a computer, 2 hours 30 minutes including 10 minutes reading time, headphones for audio and
// video stimulus; objective-response approx. 20 marks (14 to 18 items, 1 to 4 marks each);
// short-answer approx. 60 marks (16 to 18 items, at least three worth 4 to 8 marks). School-based Year
// 12 components: knowledge and understanding 50, knowledge and skills in the practical application of
// the content 50; one take-home task worth no more than 15%. Spine: a truncated y-axis exaggerating a
// small difference (52 versus 55 drawn from a baseline of 50 looks 2.36 times more different than it
// is), checked free site-wide on 7 October 2026. The data in the example is invented for teaching.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'HSC ENTERPRISE COMPUTING', label: 'HSC Enterprise Computing help', blurb: 'The NSW computing course about data, users and systems: its seven focus areas, the online HSC exam, and how a chart can mislead.' },
  slug: 'hsc-enterprise-computing-help',
  code: 'hent',
  accent: '#845121',
  accentRationale: 'HSC Enterprise Computing: a muted tan brown, contrast above 4.9:1 on #EDE7DA, at least 11 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'HSC Enterprise Computing help',
  title: 'HSC Enterprise Computing Help | NSW Year 11 and 12 Online',
  description: 'HSC Enterprise Computing help for NSW Year 11 and 12: data science, visualisation, intelligent systems, security and the online HSC exam. We never write projects.',
  ogDescription: 'Enterprise Computing explained from the NSW syllabus: the Year 11 and Year 12 focus areas with their hours, the online HSC exam, school-based assessment, and a lesson on charts that mislead with a truncated axis.',
  twitterDescription: 'HSC Enterprise Computing from the NSW syllabus: data, users, security and an online exam.',
  pageName: 'HSC Enterprise Computing Help',
  webPageDescription: 'Support for NSW students in Enterprise Computing 11-12: what the course teaches, its focus areas and hours, enrolment details, the HSC examination format, school-based assessment requirements, and an original data visualisation lesson.',
  courseDescription: 'Live online teaching in data analysis, data visualisation, databases, networking concepts, cybersecurity and user experience for NSW Enterprise Computing students, without doing any assessed work.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'HSC Enterprise Computing',
  navLinks: [
    { href: '#what', label: 'What it is' },
    { href: '#structure', label: 'Focus areas' },
    { href: '#charts', label: 'Honest charts' },
    { href: '#assessment', label: 'Exam and tasks' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New South Wales &middot; Enterprise Computing 11-12 &middot; Live online',
  h1: 'HSC Enterprise Computing help',
  lede: 'Enterprise Computing is the NSW computing course about how organisations use data, networks and software. Where Software Engineering trains programmers, Enterprise Computing trains people who can collect data responsibly, analyse it, present it honestly and think about the systems and users around it. It suits curious students who like asking what the numbers really say.',
  secondaryCta: { href: '#charts', label: 'See the misleading chart lesson' },
  wa: 'Hello Modern Age Coders, I would like a free class about HSC Enterprise Computing in NSW.',
  heroNote: 'From the NSW syllabus &middot; Data skills taught for real &middot; Lessons at NSW after-school times',
  spec: [
    ['Course', 'Enterprise Computing 11-12 (2022)'],
    ['Year 11', 'Three focus areas, 120 hours'],
    ['Year 12', 'Four focus areas, 120 hours'],
    ['Course numbers', '11175 and 15175'],
    ['HSC exam', '80 marks, on a computer'],
    ['Exam length', '2 hours 30, reading time included'],
    ['We teach', 'Data, systems and security skills'],
    ['We never', 'Build the Enterprise Project']
  ],
  capsuleQ: 'In short',
  capsule: 'HSC Enterprise Computing is a two-unit NSW Stage 6 course set by the Enterprise Computing 11-12 Syllabus (2022). Year 11 covers interactive media and the user experience, networking and social computing, and cybersecurity. Year 12 covers data science, data visualisation, intelligent systems and an enterprise project. The HSC exam is an 80-mark paper sat on a computer.',

  picks: {
    eyebrow: 'Good starting points',
    h2: 'Three courses that match Enterprise Computing',
    lede: 'Data first, then databases, then the security thinking Year 11 introduces.',
    items: [
      { course: 'data-science-course-for-teens-python-data', code: 'HENT / 01', title: 'Data science with Python', note: 'Cleaning, analysing and charting real data, the core of the Year 12 Data Science and Data Visualisation areas.' },
      { course: 'mysql-mastery-for-teens', code: 'HENT / 02', title: 'Databases and SQL', note: 'How organisations store and query data, a practical skill that runs underneath the whole course.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', code: 'HENT / 03', title: 'Defensive cybersecurity', note: 'Threats, protections and safe data handling, matching the Year 11 Principles of Cybersecurity area.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What the course is for',
      h2: 'Data, users and systems inside organisations',
      lede: 'NESA\'s course description lists three things students learn, quoted here from the syllabus as published on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Enterprise Computing 11-12: what students learn, in NESA\'s words', head: ['Students learn to', 'What that looks like in practice'], rows: [
          ['"evaluate how data is safely and securely collected, stored, manipulated and used when developing enterprise computing systems"', 'Judging where data comes from, how it is kept, and who can see it'],
          ['"explain the social, ethical and legal implications of the application of enterprise computing systems on the individual, society and the environment"', 'Weighing what a system does to the people it touches'],
          ['"apply tools and resources to design, develop and evaluate enterprise computing systems"', 'Building and testing a working system in the Year 12 project']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The right-hand column is our plain-English reading, not NESA\'s. The left-hand column is the syllabus itself, and it is worth noticing the verbs: evaluate, explain, apply. Most marks go to students who can judge and justify, not just operate software.',
            'The syllabus also describes Year 12 as a chance to "extend their knowledge and understanding of enterprise computing systems" and apply it in "a major enterprise project using project management skills". That project is the student\'s own work, which shapes everything about how we help.'
          ],
          right: [
            'Enterprise Computing sits beside Software Engineering in the NSW technology courses, and both were written in 2022. Students sometimes ask which to choose. The short version is that Software Engineering is centred on programming, and Enterprise Computing is centred on data and systems; our <a class="ag-inline-link" href="/choosing-year-11-computing-subjects-australia">guide to choosing computing subjects</a> sets out both.',
            'NESA lists no prerequisite for Year 11 Enterprise Computing. Year 12 Enterprise Computing requires the Year 11 course, which NESA lists as number 11175; Year 12 is 15175. Both are two-unit courses of 120 indicative hours.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/tas/enterprise-computing-11-12-2022/overview/course" rel="noopener" target="_blank">NSW Curriculum, Enterprise Computing 11-12 Syllabus (2022), course description and enrolment details</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'structure', tint: 'deep', eyebrow: 'The focus areas',
      h2: 'Seven focus areas over two years',
      lede: 'NESA\'s indicative hours for each focus area, from the course structure. Checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Enterprise Computing 11-12 Syllabus (2022): focus areas and indicative hours', head: ['Year', 'Focus area', 'Hours'], rows: [
          ['Year 11', 'Interactive Media and the User Experience', '40'],
          ['Year 11', 'Networking Systems and Social Computing', '40'],
          ['Year 11', 'Principles of Cybersecurity', '40'],
          ['Year 12', 'Data Science', '30'],
          ['Year 12', 'Data Visualisation', '30'],
          ['Year 12', 'Intelligent Systems', '30'],
          ['Year 12', 'Enterprise Project', '30']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Year 11 is about people and connections: how users experience interactive media, how networks and social platforms work, and how systems are protected. Year 12 turns to data: analysing it, presenting it, building intelligent systems on it, and finishing with a project.',
            'NESA\'s diagram of the course puts "Learning through project work" at the centre, with skills wrapped around every focus area. In other words, the focus areas are not meant to be learned as separate lists of facts, but practised through making things.'
          ],
          right: [
            'For students, the Year 12 areas reward real fluency with data. A student who has cleaned a messy spreadsheet, queried a database and built a chart that tells the truth will find Data Science and Data Visualisation far easier than one who has only read about them.',
            'Intelligent Systems overlaps with the AI and machine learning ideas we teach elsewhere. We keep that teaching general and practical, so it supports the course without straying into a student\'s assessed work.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/tas/enterprise-computing-11-12-2022/overview" rel="noopener" target="_blank">NSW Curriculum, Enterprise Computing 11-12 overview and course structure</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'charts', tint: 'tint', eyebrow: 'Data Visualisation in practice',
      h2: 'How a truncated axis exaggerates a gap',
      lede: 'One of the most useful habits in Data Visualisation is spotting a chart that misleads without lying. The classic trick is a vertical axis that does not start at zero.',
      body: [
        { kind: 'p', text: 'A worked lesson, with invented data. Two school canteens run a student survey and report average satisfaction scores out of 100: Canteen A scores 52 and Canteen B scores 55. Draw them as bars two ways: once with the axis starting at 0, once with the axis starting at 50.' },
        { kind: 'table', caption: 'The same two scores drawn with two different baselines', head: ['Axis starts at', 'Bar A height', 'Bar B height', 'B looks bigger than A by'], rows: [
          ['0', '52', '55', 'about 5.8%'],
          ['50', '2', '5', '150%, two and a half times as tall']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The true difference is 3 points, about 5.8% of Canteen A\'s score. With the axis starting at 50, Canteen B\'s bar is 5 units tall against Canteen A\'s 2, so it looks two and a half times as large. Dividing the visual ratio of 2.5 by the true ratio of about 1.058 gives roughly 2.36: the chart exaggerates the gap by a factor of about 2.36.',
            'Nothing on the second chart is false. The scores are correct, and the axis is labelled. The distortion comes entirely from the choice of baseline, which is exactly why it is worth teaching: students learn to read charts critically and to draw their own honestly.'
          ],
          right: [
            'There are good reasons to start an axis above zero, for line charts of something like temperature where zero has no special meaning. Bars are different, because readers judge a bar by its length. The rule we teach is simple: bars start at zero, and any other choice needs a clear reason and a clear label.',
            'Students who code can make both charts in a few lines of Python and compare them side by side. That small experiment is good preparation for exam questions that show a chart and ask what is wrong with it, a natural fit for an online exam with stimulus material.'
          ] }
      ]
    },
    {
      id: 'assessment', tint: '', eyebrow: 'Exam and school tasks',
      h2: 'An online HSC exam and a school program beside it',
      lede: 'Both are described on NESA\'s assessment pages for the course, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Enterprise Computing assessment at a glance', head: ['Element', 'NESA requirement'], rows: [
          ['HSC exam', 'Sat online; 80 marks; two and a half hours, of which 10 minutes is reading'],
          ['Stimulus', 'Questions may contain stimulus; headphones are needed for audio and video questions'],
          ['Objective-response', 'Approximately 20 marks over 14 to 18 items, each worth 1 to 4 marks'],
          ['Short-answer', 'Approximately 60 marks over 16 to 18 items, at least three worth 4 to 8 marks'],
          ['Year 12 school components', 'Knowledge and understanding of course content 50%; Knowledge and skills in the practical application of the content 50%'],
          ['Task rules', 'One take-home task worth no more than 15%; individual tasks weighted between 10% and 40%']
        ] },
        { kind: 'p', text: 'The exam format matches the online format used for HSC Software Engineering, which our <a class="ag-inline-link" href="/hsc-software-engineering-help">Software Engineering page</a> covers in more detail. NESA also notes that schools can enrol students in an online sample exam for Enterprise Computing through Schools Online, which is the closest practice there is to the real conditions.' },
        { kind: 'p', text: 'Half of the school mark is for practical application, and the Enterprise Project is where that shows most. We teach data handling, charting, databases and security with our own examples and data sets. We do not build, write, edit or review any part of a student\'s project or other assessed work.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/tas/enterprise-computing-11-12-2022/assessment/hsc-examinations" rel="noopener" target="_blank">NSW Curriculum, Enterprise Computing HSC examinations</a>; <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/tas/enterprise-computing-11-12-2022/assessment/school-based-assessment" rel="noopener" target="_blank">school-based assessment</a>. Checked on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Building up',
    h2: 'Four stages through Enterprise Computing',
    lede: 'Stages describe skills a student can show, which is what the practical half of the course rewards.',
    table: { caption: 'From spreadsheet confidence to a finished enterprise project', head: ['Stage', 'Skill', 'The sign it is there'], rows: [
      ['1', 'Working with data', 'Cleans and sorts a messy data set without losing rows'],
      ['2', 'Asking questions of data', 'Writes a query or formula that answers a stated question'],
      ['3', 'Presenting data', 'Draws a chart that a stranger reads correctly'],
      ['4', 'Running a project', 'Plans and documents work with dated evidence']
    ] },
    left: { h3: 'If Year 11 feels abstract', ps: [
      'Networking and user experience can feel like theory. Building something small, a simple web page with a form or a home network diagram, makes the concepts concrete quickly.',
      'Cybersecurity sticks best through scenarios: what would an attacker try here, and what would stop them?'
    ] },
    right: { h3: 'Where it leads', ps: [
      'The data skills here feed directly into university data, business and information systems courses, and into any job that touches spreadsheets or dashboards.',
      'Students interested in the AI side can explore our <a class="ag-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens</a> alongside the course.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Enterprise Computing students',
    lede: 'Grouped by focus area. Each opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Year 11 areas', sub: 'Users, networks and security', courses: [
        { code: 'HENT / Y11 / 01', slug: 'frontend-development-masterclass-for-teens', title: 'Frontend development', blurb: 'Building interfaces that people can actually use.' },
        { code: 'HENT / Y11 / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Defence, risk and safe practice online.' },
        { code: 'HENT / Y11 / 03', slug: 'creative-media-design-masterclass-teens', title: 'Creative media', blurb: 'Images, video and layout for interactive media.' }
      ] },
      { num: 'II', h3: 'Year 12 areas', sub: 'Data, charts and intelligent systems', courses: [
        { code: 'HENT / Y12 / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python for cleaning, analysing and charting data.' },
        { code: 'HENT / Y12 / 02', slug: 'mysql-mastery-for-teens', title: 'MySQL for teens', blurb: 'Database design and SQL queries from scratch.' },
        { code: 'HENT / Y12 / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'How intelligent systems learn from data, built in Python.' }
      ] },
      { num: 'III', h3: 'Extra strength', sub: 'For students going further', courses: [
        { code: 'HENT / X / 01', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data analytics with spreadsheets', blurb: 'Analysis and dashboards without heavy coding.' },
        { code: 'HENT / X / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'General programming that makes every data task easier.' },
        { code: 'HENT / X / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Version control and dated history for any project.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How we teach it',
    h2: 'Weekly lessons in NSW afternoon hours',
    lede: 'Our tutors work from India. India time trails Sydney by four and a half hours in winter and five and a half hours from October to April, when NSW is on daylight saving. That puts a 5 pm Sydney lesson in summer at 11.30 am for the tutor, so after-school lessons are no trouble to arrange.',
    slots: [
      { time: 'Weekday after school', l: 'A regular weekly lesson through Year 11 and Year 12.' },
      { time: 'Weekend sessions', l: 'Longer blocks for hands-on data work.' },
      { time: 'Holiday intensives', l: 'Revision before trials and the HSC.' }
    ],
    cells: [
      { h3: 'Real data sets', p: 'We teach with public or invented data, never the student\'s project data.' },
      { h3: 'Charts read critically', p: 'Every lesson on visualisation includes spotting a misleading chart.' },
      { h3: 'Short-answer writing', p: 'Practice in answers that name a concept, apply it to the stimulus and conclude.' },
      { h3: 'Small classes', p: 'Five to ten Enterprise Computing students at one level, all speaking up.' },
      { h3: 'One-to-one sessions', p: 'Focused help on a single focus area before trials.' },
      { h3: 'Integrity first', p: 'We never write or review assessed work, and we never promise a band.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Personal projects, separate from any school assessment. See more in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'As written on Google by our students and parents.',

  fees: {
    h2: 'Fees',
    lede: 'Each month is charged in US dollars at one rate for every family outside India. There is nothing to pay to join, and no charge past the month you are in.',
    free: ['A full lesson on a real skill', 'Clear advice on next steps', 'No payment card needed'],
    group: ['Fifteen to twenty students together', 'The same tutor each week', 'Exercises reviewed in class', 'A certificate at the finish'],
    one: ['A tutor just for you', 'Aimed at your weakest area', 'Handy before trial exams']
  },

  faq: {
    eyebrow: 'Questions about the course',
    h2: 'What Enterprise Computing students ask',
    items: [
      { q: 'What is HSC Enterprise Computing?', a: 'A two-unit NSW Stage 6 course set by the Enterprise Computing 11-12 Syllabus (2022). Year 11 covers interactive media and the user experience, networking systems and social computing, and principles of cybersecurity. Year 12 covers data science, data visualisation, intelligent systems and an enterprise project.' },
      { q: 'How is it different from Software Engineering?', a: 'Software Engineering centres on programming and building software. Enterprise Computing centres on data, users and systems in organisations, with less emphasis on writing large programs.' },
      { q: 'How long is the Enterprise Computing exam?', a: '2 hours and 30 minutes including 10 minutes reading time. It is worth 80 marks and is completed on a computer, with headphones for audio and video questions.' },
      { q: 'How is the exam split?', a: 'Roughly a quarter of the marks come from short objective items worth up to 4 marks each; the other three quarters come from written answers, a few of which carry 4 to 8 marks.' },
      { q: 'What is a truncated axis?', a: 'A chart axis that starts above zero. On a bar chart it can make small differences look large, because readers compare bar lengths. In our example, scores of 52 and 55 drawn from a baseline of 50 look about 2.36 times more different than they are.' },
      { q: 'What are the school assessment components?', a: 'For Year 12, NESA sets knowledge and understanding of course content at 50% and knowledge and skills in the practical application of the content at 50%. Schools may set only one take-home task, worth no more than 15%.' },
      { q: 'Do I need to know how to code?', a: 'Some programming helps, especially for data science, but the course is not built around large programs. We can teach the Python and SQL that make the data work easier.' },
      { q: 'Will you help with my Enterprise Project?', a: 'We teach the skills a project needs, using our own examples. We do not build, write, edit or review any part of a project or other assessed work.' },
      { q: 'Can you promise a high band?', a: 'No. We teach thoroughly and honestly, and the result is earned by the student.' },
      { q: 'When are lessons for NSW students?', a: 'Usually after school or on weekends in NSW time, which is late morning or midday for our tutors. The weekly time is agreed after the free class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for NSW computing students',
    lede: 'The other NSW computing course, subject choice, and the data side of mathematics.',
    items: [
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering', p: 'The programming course beside this one.' },
      { href: '/choosing-year-11-computing-subjects-australia', label: 'Choosing Year 11 computing', p: 'Comparing the computing subjects on offer.' },
      { href: '/hsc-maths-standard-tutoring', label: 'HSC Maths Standard', p: 'Statistics and data in applied mathematics.' },
      { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning in Australia', p: 'For students drawn to intelligent systems.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every Australian page in one place.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our teaching method, laid out.' }
    ]
  },

  start: {
    h2: 'Book a free Enterprise Computing lesson',
    lede: 'Which year is the student in, which focus area is the class on, and where are marks going missing? The free lesson builds that skill with our own data and examples.',
    readFirst: 'Reading first? Course outlines are on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, our approach is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists coding contests for the year.',
    note: 'WhatsApp is the quickest route to us. The +91 prefix is Indian, as we teach from India; we keep no office in NSW.',
    formNote: 'No card, nothing to sign. We reply once to set the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/ai-and-machine-learning-classes-in-australia', label: 'AI and machine learning' },
        { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'NSW computing', links: [
        { href: '/hsc-software-engineering-help', label: 'Software Engineering' },
        { href: '/choosing-year-11-computing-subjects-australia', label: 'Choosing computing subjects' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Bars start at zero; projects stay the student\'s own'
  },

  personalityCss: `
.ag-root.ag-hent .ag-hero-grid { gap: clamp(1.1rem, 3vw, 2.5rem); }
.ag-root.ag-hent .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-hent .ag-capsule { border-left-width: 6px; }
.ag-root.ag-hent .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-hent .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-hent .ag-table th { letter-spacing: 0.025em; }
.ag-root.ag-hent .ag-spec dt { letter-spacing: 0.13em; }
.ag-root.ag-hent .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'NSW Education Standards Authority (NESA). Enterprise Computing 11-12 Syllabus (2022), read at curriculum.nsw.edu.au on 7 October 2026: what students learn (three outcomes quoted); Year 11 focus areas Interactive Media and the User Experience 40, Networking Systems and Social Computing 40, Principles of Cybersecurity 40; Year 12 Data Science 30, Data Visualisation 30, Intelligent Systems 30, Enterprise Project 30; courses 11175 and 15175, 2 units; HSC exam 80 marks on a computer, 2 hours 30 minutes including 10 minutes reading time; Year 12 school components 50/50; one take-home task worth no more than 15%.',
    localProject: 'A truncated y-axis on a bar chart: invented survey scores 52 and 55 look 5.8% apart from a zero baseline but two and a half times apart from a baseline of 50, an exaggeration factor of about 2.36 (2.5 divided by 55/52). Written by us with invented data.',
    requiredMentions: ['Enterprise Computing 11-12 Syllabus (2022)', 'Interactive Media and the User Experience', 'Networking Systems and Social Computing', 'Principles of Cybersecurity', 'Intelligent Systems', '15175', 'Knowledge and skills in the practical application of the content', 'truncated axis', 'about 2.36'],
    sources: [
      { claim: 'NSW Curriculum, Enterprise Computing 11-12 Syllabus (2022): course description, what students learn, course structure with indicative hours, enrolment details 11175 and 15175.', url: 'https://curriculum.nsw.edu.au/learning-areas/tas/enterprise-computing-11-12-2022/overview/course' },
      { claim: 'NSW Curriculum, Enterprise Computing 11-12 overview: organisation of content and learning through project work.', url: 'https://curriculum.nsw.edu.au/learning-areas/tas/enterprise-computing-11-12-2022/overview' },
      { claim: 'NSW Curriculum, Enterprise Computing HSC examination specifications and online sample exam.', url: 'https://curriculum.nsw.edu.au/learning-areas/tas/enterprise-computing-11-12-2022/assessment/hsc-examinations' },
      { claim: 'NSW Curriculum, Enterprise Computing school-based assessment requirements.', url: 'https://curriculum.nsw.edu.au/learning-areas/tas/enterprise-computing-11-12-2022/assessment/school-based-assessment' }
    ],
    rejectedClaims: [
      'The 2026 date of the Enterprise Computing exam: not tied to a day from the timetable PDF.',
      'Topic dot points inside each focus area: not read in full, so only names and hours are given.',
      'Any enrolment numbers or band statistics: not quoted.',
      'Any claim that the survey scores are real: the example data is invented and labelled.',
      'Any offer to build or review the Enterprise Project: refused on the page.'
    ]
  }
};
