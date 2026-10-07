'use strict';
// Choosing Year 11 computing subjects in Australia (ag- door, Australia cluster Phase 3, row 85).
// Facts read raw on 7 October 2026: NSW Curriculum course enrolment details for Software Engineering
// 11-12 (2022) (Year 11 11345 and Year 12 15365, 120 hours, 2 units, exclusions Computing Technology Life
// Skills 16623 and Technology Life Skills 16686, Year 11 as prerequisite) and Enterprise Computing 11-12
// (2022) (11175 and 15175, same exclusions); Mathematics Standard and Advanced Year 11 exclusions; VCAA
// pages for Algorithmics (HESS) (Units 3 and 4, accreditation from 2023) and Applied Computing (Units 1
// to 4 from 2025, with Data Analytics and Software Development administration and examination pages);
// the VCAA 2026 VCE examination timetable (Algorithmics (HESS) Wednesday 4 November 11:45 am to 2:00 pm;
// Applied Computing: Data Analytics Monday 9 November 11:45 am to 2:00 pm; Applied Computing: Software
// Development Friday 13 November 3:00 pm to 5:15 pm; reading time included). QCAA, SCSA and SACE pages
// were blocked or missing for us, so other states are not described. Spine: an exclusion-pair conflict
// check over a candidate subject list, checked free site-wide on 7 October 2026. No advice framed as
// improving an ATAR or guaranteeing an outcome.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'CHOOSING COMPUTING SUBJECTS', label: 'Choosing Year 11 computing subjects', blurb: 'What the senior computing subjects in NSW and Victoria actually are, how their rules fit together, and how to check a subject list for clashes before enrolment.' },
  slug: 'choosing-year-11-computing-subjects-australia',
  code: 'csub',
  accent: '#2D695D',
  accentRationale: 'Choosing computing subjects: a muted deep teal at hue 169, contrast above 4.9:1 on #EDE7DA, at least 10 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Choosing Year 11 computing subjects',
  title: 'Choosing Year 11 Computing Subjects | NSW and Victoria',
  description: 'Choosing Year 11 computing subjects: NSW Software Engineering and Enterprise Computing, VCE Algorithmics and Applied Computing, and how the rules fit together.',
  ogDescription: 'A clear guide to the senior computing subjects in NSW and Victoria, read from NESA and VCAA: what each course is, its structure and exams, the enrolment rules that matter, and a simple way to check a subject list for exclusions.',
  twitterDescription: 'Senior computing subjects in NSW and Victoria, explained from NESA and VCAA, with no ATAR spin.',
  pageName: 'Choosing Year 11 Computing Subjects',
  webPageDescription: 'A guide for Year 10 students and families choosing senior computing subjects: NSW Software Engineering and Enterprise Computing, VCE Algorithmics (HESS) and Applied Computing, enrolment and exclusion rules, 2026 VCE exam dates, and a lesson on checking a subject list for clashes.',
  courseDescription: 'Live online programming and computing lessons for Australian Year 10 and Year 11 students preparing for senior computing subjects in any state.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Choosing computing subjects',
  navLinks: [
    { href: '#nsw', label: 'New South Wales' },
    { href: '#vic', label: 'Victoria' },
    { href: '#clash', label: 'Checking for clashes' },
    { href: '#thinking', label: 'How to decide' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Year 10 into Year 11 &middot; Computing subjects',
  h1: 'Choosing Year 11 computing subjects',
  lede: 'Subject selection in Year 10 can feel like a decision about the rest of a student\'s life. For computing, it is simpler than it looks once you know what each subject actually contains. This guide sets out the senior computing courses in New South Wales and Victoria from the authorities\' own pages, explains the enrolment rules that trip students up, and leaves the ATAR guesswork out entirely.',
  secondaryCta: { href: '#clash', label: 'Check a subject list for clashes' },
  wa: 'Hello Modern Age Coders, I would like a free class to prepare for a senior computing subject.',
  heroNote: 'From NESA and VCAA pages &middot; No ATAR spin &middot; For Year 10 students and families',
  spec: [
    ['NSW programming course', 'Software Engineering 11-12'],
    ['NSW data and systems course', 'Enterprise Computing 11-12'],
    ['VCE algorithms study', 'Algorithmics (HESS), Units 3 and 4'],
    ['VCE computing study', 'Applied Computing, Units 1 to 4'],
    ['NSW course size', '2 units, 120 hours a year'],
    ['Other states', 'Check your authority directly'],
    ['We teach', 'Programming before and during'],
    ['We never', 'Advise picking for the ATAR']
  ],
  capsuleQ: 'In short',
  capsule: 'In NSW, the senior computing courses are Software Engineering 11-12, centred on programming, and Enterprise Computing 11-12, centred on data and systems; each is 2 units over Year 11 and Year 12. In Victoria, VCE Applied Computing runs across Units 1 to 4 with Data Analytics and Software Development in Year 12, and Algorithmics (HESS) is a Units 3 and 4 study. Choose by interest, then check enrolment rules.',

  picks: {
    eyebrow: 'Before Year 11 starts',
    h2: 'Three courses that make any choice easier',
    lede: 'Real programming fluency, the data skills behind the systems courses, and algorithmic thinking.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'CSUB / 01', title: 'Python from scratch', note: 'Writing, testing and debugging real programs, so a Year 11 computing course starts from strength rather than from zero.' },
      { course: 'data-science-course-for-teens-python-data', code: 'CSUB / 02', title: 'Working with data', note: 'Cleaning and charting data in Python, a head start for Enterprise Computing or VCE Data Analytics.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'CSUB / 03', title: 'Algorithmic thinking', note: 'Searching, sorting and graph problems reasoned carefully, the territory of VCE Algorithmics and harder programming.' }
    ]
  },

  sections: [
    {
      id: 'nsw', tint: 'tint', eyebrow: 'New South Wales',
      h2: 'Two computing courses, both 2 units',
      lede: 'NESA\'s enrolment details for each course, from the NSW Curriculum site, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'NSW senior computing courses: enrolment details', head: ['Course', 'Year 11', 'Year 12', 'Size', 'Year 12 prerequisite'], rows: [
          ['Software Engineering 11-12 (2022)', '11345', '15365', '2 units, 120 hours each year', 'Software Engineering Year 11'],
          ['Enterprise Computing 11-12 (2022)', '11175', '15175', '2 units, 120 hours each year', 'Enterprise Computing Year 11']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Software Engineering is the programming course. Its Year 11 focus areas are programming fundamentals, the object-oriented paradigm and programming mechatronics; Year 12 covers secure software architecture, programming for the web, software automation and a software engineering project. Our <a class="ag-inline-link" href="/hsc-software-engineering-help">Software Engineering page</a> covers it in full.',
            'Enterprise Computing is the data and systems course. Year 11 covers interactive media and the user experience, networking and social computing, and cybersecurity; Year 12 covers data science, data visualisation, intelligent systems and an enterprise project. See our <a class="ag-inline-link" href="/hsc-enterprise-computing-help">Enterprise Computing page</a>.'
          ],
          right: [
            'Neither course lists a prerequisite for Year 11, so a student can start either without having studied computing before, although some programming experience makes Software Engineering far less stressful. Each Year 12 course requires its own Year 11 course.',
            'The two courses do not exclude each other in NESA\'s lists: each excludes only the Life Skills computing and technology courses. Whether a school can timetable both is a separate, local question, and the school\'s subject guide is the place to check.'
          ] },
        { kind: 'source', html: 'Sources: NSW Curriculum enrolment details for <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/tas/software-engineering-11-12-2022/overview/course" rel="noopener" target="_blank">Software Engineering 11-12</a> and <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/tas/enterprise-computing-11-12-2022/overview/course" rel="noopener" target="_blank">Enterprise Computing 11-12</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'vic', tint: 'deep', eyebrow: 'Victoria',
      h2: 'Applied Computing across four units, Algorithmics at the top',
      lede: 'The VCE structure differs from NSW. The details below come from VCAA\'s study design and examination pages, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'VCE computing studies and their 2026 examinations', head: ['Study', 'Units', 'Study design accredited from', '2026 VCE exam (times include reading)'], rows: [
          ['Applied Computing: Data Analytics', 'Units 1 and 2 Applied Computing, then Units 3 and 4 Data Analytics', '2025', 'Monday 9 November, 11:45 am to 2:00 pm'],
          ['Applied Computing: Software Development', 'Units 1 and 2 Applied Computing, then Units 3 and 4 Software Development', '2025', 'Friday 13 November, 3:00 pm to 5:15 pm'],
          ['Algorithmics (HESS)', 'Units 3 and 4', '2023', 'Wednesday 4 November, 11:45 am to 2:00 pm']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Applied Computing gives Victorian students a choice in Year 12 between Data Analytics and Software Development, each with its own school-assessed task and examination. The first is closer in spirit to NSW Enterprise Computing; the second is closer to NSW Software Engineering.',
            'Algorithmics (HESS) is a Units 3 and 4 study about designing and analysing algorithms. It suits students who enjoy the mathematical side of computing, such as graphs, searching and proving that an algorithm is correct and efficient.'
          ],
          right: [
            'The exam dates show how the three studies spread across the 2026 VCE examination period, from Algorithmics on 4 November to Software Development on 13 November. Students taking more than one computing study should plan revision around those gaps.',
            'VCAA\'s pages are the authority for any rule about combining studies or counting them towards the VCE. A school\'s VCE coordinator can explain how they work in that school\'s program.'
          ] },
        { kind: 'source', html: 'Sources: VCAA study pages for <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/algorithmics/vce-algorithmics-hess" rel="noopener" target="_blank">Algorithmics (HESS)</a> and <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/applied-computing/applied-computing" rel="noopener" target="_blank">Applied Computing</a>; <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/administration/Key-dates/Pages/VCE-exam-timetable.aspx" rel="noopener" target="_blank">VCAA 2026 VCE examination timetable</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'clash', tint: 'tint', eyebrow: 'A small computing problem',
      h2: 'Checking a subject list for exclusions',
      lede: 'NESA publishes, for every course, a list of other courses it excludes. Checking a candidate subject list against those lists is a neat little programming problem, and it catches mistakes before enrolment.',
      body: [
        { kind: 'p', text: 'A worked example, using NESA\'s published exclusions and an invented subject list. A Year 10 student in NSW drafts this list: Mathematics Standard Year 11, Mathematics Advanced Year 11, Software Engineering Year 11, Enterprise Computing Year 11 and Computing Technology Life Skills Year 11. A program checks every pair against the exclusion lists.' },
        { kind: 'table', caption: 'Pairs flagged by the exclusion check (NESA exclusion lists)', head: ['Pair', 'Excluded?', 'Which rule'], rows: [
          ['Mathematics Standard and Mathematics Advanced', 'Yes', 'Each lists the other as an exclusion'],
          ['Software Engineering and Computing Technology Life Skills', 'Yes', 'Software Engineering excludes course 16623'],
          ['Enterprise Computing and Computing Technology Life Skills', 'Yes', 'Enterprise Computing excludes course 16623'],
          ['Software Engineering and Enterprise Computing', 'No', 'Neither lists the other'],
          ['Mathematics Advanced and Software Engineering', 'No', 'Neither lists the other']
        ] },
        { kind: 'two', mt: true,
          left: [
            'With five subjects there are ten possible pairs, and three of them clash. The fix is a choice, not a calculation: keep one of the two mathematics courses, and drop the Life Skills course if the student is enrolling in either computing course.',
            'The check itself is a few lines of Python: store each course\'s exclusion list in a dictionary, loop over every pair of chosen courses, and report any pair where one appears in the other\'s list. Students who write it learn about pairs, dictionaries and symmetry in one go.'
          ],
          right: [
            'An exclusion check does not say whether a combination is wise or whether a school can timetable it. It only catches combinations NESA does not allow, which is exactly why it is useful: it removes impossible options so the real conversation can be about interests and goals.',
            'Victoria has its own rules for combining studies, set by VCAA. The same programming idea works there too, with VCAA\'s rules as the data.'
          ] }
      ]
    },
    {
      id: 'thinking', tint: '', eyebrow: 'Making the choice',
      h2: 'How to decide, honestly',
      lede: 'Our suggestions are about learning, not about ranks. Subject decisions belong with the student, the family and the school.',
      body: [
        { kind: 'table', caption: 'Questions that sort out most computing subject choices', head: ['Question', 'Points towards'], rows: [
          ['Do you enjoy writing programs and fixing them?', 'NSW Software Engineering, or VCE Software Development'],
          ['Do you enjoy asking questions of data?', 'NSW Enterprise Computing, or VCE Data Analytics'],
          ['Do you enjoy puzzles about efficient algorithms?', 'VCE Algorithmics (HESS), or harder programming alongside any course'],
          ['Do you want computing without a senior course?', 'Coding outside school, at your own pace']
        ] },
        { kind: 'p', text: 'We deliberately do not say which subject is "good for the ATAR". The admissions centres state that scaling is designed so students are neither advantaged nor disadvantaged by their pattern of study, and our <a class="ag-inline-link" href="/atar-explained-for-coding-students">ATAR page</a> explains that in their words. Choose computing because you want to learn it.' },
        { kind: 'p', text: 'Whatever the choice, the most useful preparation in Year 10 is the same: write real programs, read other people\'s code, and get comfortable with being stuck for a while before a bug gives way. That is what we teach, in any state.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four things to do in Year 10',
    lede: 'Preparation that helps whichever computing subject a student ends up taking.',
    table: { caption: 'Year 10 preparation for senior computing', head: ['Step', 'What to do', 'The sign it is working'], rows: [
      ['1', 'Learn one language properly', 'Writes a 100-line program without copying'],
      ['2', 'Read the subject guides', 'Can name the focus areas of each option'],
      ['3', 'Try a small data project', 'Has cleaned and charted one real data set'],
      ['4', 'Check the rules', 'Has run an exclusion check on the draft list']
    ] },
    left: { h3: 'If no computing subject fits', ps: [
      'Some schools do not offer every course, and some timetables do not allow it. Learning to code outside school keeps the door open for university computing courses, many of which teach programming from the start.',
      'Competitions are another route; the <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists coding contests for secondary students.'
    ] },
    right: { h3: 'Alongside mathematics', ps: [
      'Computing and mathematics support each other. NSW students choosing between mathematics courses can read our <a class="ag-inline-link" href="/preliminary-hsc-maths-year-11-help">Year 11 mathematics page</a>.',
      'Victorian students heading into Methods can start with our <a class="ag-inline-link" href="/year-10-maths-methods-preparation">Year 10 Methods preparation page</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for future computing students',
    lede: 'Grouped by the kind of senior subject they prepare for. Each opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'For programming courses', sub: 'Software Engineering, Software Development', courses: [
        { code: 'CSUB / P / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A complete first language, with testing from the start.' },
        { code: 'CSUB / P / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects and classes in a strongly typed language.' },
        { code: 'CSUB / P / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'Programming for the web, front end to back end.' }
      ] },
      { num: 'II', h3: 'For data and systems courses', sub: 'Enterprise Computing, Data Analytics', courses: [
        { code: 'CSUB / D / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Analysis and charts with Python.' },
        { code: 'CSUB / D / 02', slug: 'mysql-mastery-for-teens', title: 'MySQL for teens', blurb: 'Databases and SQL queries.' },
        { code: 'CSUB / D / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Security thinking for systems that hold data.' }
      ] },
      { num: 'III', h3: 'For algorithm-heavy study', sub: 'Algorithmics and beyond', courses: [
        { code: 'CSUB / A / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Data structures and algorithms, reasoned carefully.' },
        { code: 'CSUB / A / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Efficient solutions under time limits.' },
        { code: 'CSUB / A / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models built and evaluated in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How we work',
    h2: 'Weekly lessons for students in any state',
    lede: 'Our tutors are based in India. Sydney and Melbourne sit five and a half hours ahead of India time during daylight saving and four and a half hours ahead in winter; Perth is two and a half hours ahead all year. After-school hours across Australia therefore fall in the Indian working day.',
    slots: [
      { time: 'After school', l: 'A weekly lesson through Year 10 and Year 11.' },
      { time: 'Weekends', l: 'Longer project sessions.' },
      { time: 'Holidays', l: 'Short intensives before a new course starts.' }
    ],
    cells: [
      { h3: 'Programs, not slides', p: 'Students write and run code in every lesson.' },
      { h3: 'Any state', p: 'We prepare students for whichever course their school offers.' },
      { h3: 'No ATAR talk', p: 'Choices are about interests; ranks are left to the admissions centres.' },
      { h3: 'Groups of five to ten', p: 'Students at one level, each sharing their work.' },
      { h3: 'One-to-one option', p: 'Private lessons for a student with a specific aim.' },
      { h3: 'Honest throughout', p: 'We promise effort and clarity, never results.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Personal projects, separate from school. Explore more in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Exactly as students and parents posted them on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Billed monthly in US dollars, at one rate for every family outside India. Free to join, and you only pay for the current month.',
    free: ['A real programming lesson', 'An honest chat about options', 'No card required'],
    group: ['Five to ten students at one level', 'The same tutor each week', 'Code reviewed together', 'A certificate at the end'],
    one: ['A personal tutor', 'Shaped around your goals', 'Flexible timing']
  },

  faq: {
    eyebrow: 'Questions about computing subjects',
    h2: 'What Year 10 families ask us',
    items: [
      { q: 'What computing subjects can NSW students take in Year 11?', a: 'The NSW Board-developed computing courses are Software Engineering 11-12 and Enterprise Computing 11-12. Each is a 2-unit course of 120 hours in Year 11 and again in Year 12.' },
      { q: 'What is the difference between Software Engineering and Enterprise Computing?', a: 'Software Engineering is centred on programming: fundamentals, objects, mechatronics, web, security, automation and a software project. Enterprise Computing is centred on data and systems: user experience, networks, cybersecurity, data science, visualisation, intelligent systems and an enterprise project.' },
      { q: 'Can I take both NSW computing courses?', a: 'NESA\'s exclusion lists do not stop it: each course excludes only the Life Skills computing and technology courses. Whether your school can timetable both is a question for the school.' },
      { q: 'Do I need to have studied computing before Year 11?', a: 'NESA lists no prerequisite for Year 11 Software Engineering or Year 11 Enterprise Computing. Some programming experience still makes the courses much easier.' },
      { q: 'What computing studies are in the VCE?', a: 'VCE Applied Computing covers Units 1 to 4, with Data Analytics and Software Development as the Units 3 and 4 options, and Algorithmics (HESS) is a Units 3 and 4 study.' },
      { q: 'When are the 2026 VCE computing exams?', a: 'From the VCAA timetable: Algorithmics (HESS) on Wednesday 4 November, Applied Computing: Data Analytics on Monday 9 November, and Applied Computing: Software Development on Friday 13 November 2026.' },
      { q: 'What is a subject exclusion?', a: 'A rule that two courses cannot both be taken. NESA lists each course\'s exclusions; for example, Year 11 Mathematics Standard and Year 11 Mathematics Advanced exclude each other.' },
      { q: 'Which computing subject is good for my ATAR?', a: 'We do not advise on that. UAC states scaling is designed so students are neither advantaged nor disadvantaged by their choice of courses. Choose the subject you want to learn.' },
      { q: 'What about Queensland, WA, SA, Tasmania, the ACT and the NT?', a: 'Each has its own senior secondary authority and subjects. We could not read all of their pages for this guide, so please check your state\'s authority and your school\'s subject guide.' },
      { q: 'How can I prepare in Year 10?', a: 'Learn one programming language properly, try a small data project, read your school\'s subject guide, and check your draft subject list against the published rules.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Read more before choosing',
    lede: 'The courses in detail, how ranks work, and the mathematics alongside.',
    items: [
      { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering', p: 'The NSW programming course in full.' },
      { href: '/hsc-enterprise-computing-help', label: 'HSC Enterprise Computing', p: 'The NSW data and systems course.' },
      { href: '/atar-explained-for-coding-students', label: 'The ATAR explained', p: 'Ranks and scaling, from the sources.' },
      { href: '/coding-for-year-7-australia', label: 'Coding from Year 7', p: 'Where programming starts at secondary school.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every Australian page we have.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free taster lesson',
    lede: 'Tell us the state, the subjects being considered and how much coding the student has done. The free lesson gives a feel for real programming, which is often the deciding factor.',
    readFirst: 'Browsing first? Course outlines are on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, our teaching method is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and costs are set out on <a class="ag-inline-link" href="/coding-classes-cost-australia">what classes cost in Australia</a>.',
    note: 'WhatsApp brings the quickest reply. The +91 prefix is Indian since we teach from India; we have no Australian office.',
    formNote: 'No card, no commitment. One reply to arrange the taster.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
        { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
        { href: '/coding-classes-cost-australia', label: 'Class costs' }
      ] },
      { h4: 'Senior computing', links: [
        { href: '/hsc-software-engineering-help', label: 'Software Engineering' },
        { href: '/hsc-enterprise-computing-help', label: 'Enterprise Computing' },
        { href: '/atar-explained-for-coding-students', label: 'The ATAR explained' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Choose by interest, then check the rules'
  },

  personalityCss: `
.ag-root.ag-csub .ag-hero-grid { gap: clamp(1rem, 2.8vw, 2.5rem); }
.ag-root.ag-csub .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-csub .ag-capsule { border-left-width: 7px; }
.ag-root.ag-csub .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-csub .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-csub .ag-table th { letter-spacing: 0.018em; }
.ag-root.ag-csub .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-csub .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'NESA (NSW Curriculum enrolment details for Software Engineering 11-12 (2022): 11345, 15365; Enterprise Computing 11-12 (2022): 11175, 15175; exclusions; Mathematics Standard and Advanced Year 11 exclusions) and VCAA (Algorithmics (HESS) Units 3 and 4 from 2023; Applied Computing Units 1 to 4 from 2025 with Data Analytics and Software Development; 2026 VCE examination timetable), read on 7 October 2026. QCAA, SCSA and SACE not described (blocked or missing for us).',
    localProject: 'An exclusion-pair conflict check over an invented NSW subject list of five Year 11 courses: ten pairs, three clashes (Mathematics Standard with Advanced; Software Engineering and Enterprise Computing each with Computing Technology Life Skills 16623), using NESA\'s published exclusion lists; sketched as a short Python dictionary-and-pairs program. Written by us.',
    requiredMentions: ['11345', '15365', '16623', 'Applied Computing: Software Development', 'Applied Computing: Data Analytics', 'Algorithmics (HESS)', 'Wednesday 4 November', 'Friday 13 November', 'three of them clash'],
    sources: [
      { claim: 'NSW Curriculum, Software Engineering 11-12 course enrolment details: 11345 and 15365, 120 hours, 2 units, exclusions, Year 11 prerequisite for Year 12.', url: 'https://curriculum.nsw.edu.au/learning-areas/tas/software-engineering-11-12-2022/overview/course' },
      { claim: 'NSW Curriculum, Enterprise Computing 11-12 course enrolment details: 11175 and 15175, exclusions.', url: 'https://curriculum.nsw.edu.au/learning-areas/tas/enterprise-computing-11-12-2022/overview/course' },
      { claim: 'NSW Curriculum, Mathematics Standard and Advanced (2024) enrolment details: Year 11 exclusions.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-advanced-11-12-2024/overview/course' },
      { claim: 'VCAA, VCE Algorithmics (HESS): Units 3 and 4, accreditation from 2023.', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/algorithmics/vce-algorithmics-hess' },
      { claim: 'VCAA, VCE Applied Computing: Units 1 to 4 from 2025, Data Analytics and Software Development.', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/applied-computing/applied-computing' },
      { claim: 'VCAA, 2026 VCE examination timetable: computing study exam dates and times.', url: 'https://www.vcaa.vic.edu.au/administration/Key-dates/Pages/VCE-exam-timetable.aspx' }
    ],
    rejectedClaims: [
      'Senior computing subjects in Queensland, Western Australia, South Australia, Tasmania, the ACT and the NT: authority pages were blocked or missing for us, so none are named.',
      'What the HESS label stands for and how it counts: not stated on the pages read.',
      'VCAA rules on combining studies: not read, so not described.',
      'Any claim that a subject helps or hurts an ATAR: refused.',
      'Whether a given school offers or can timetable a course: left to schools.'
    ]
  }
};
