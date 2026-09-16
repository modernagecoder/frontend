'use strict';
// Best Python classes online, Ireland (ag- door, Ireland cluster, Phase 2).
// Facts read at primary sources on 16 September 2026: the CSO PxStat user guide
// (data.cso.ie is the CSO's statistical database and open data portal, powered
// by PxStat, serving JSON-stat, PX, XLSX and CSV through API queries); the CSO
// notice that PxStat replaced StatBank from 1 December 2020; the CSO's own
// PxStat GitHub wiki for the ReadDataset method; json-stat.org naming pyjstat
// and jsonstat.py; the CSO methodology page for Port Visits Using Real-Time
// Shipping Data, which states the CSO itself uses open-source Python libraries;
// python.ie (Python Ireland Developers CLG, CRO number 559983, monthly meetups
// on the second Wednesday) and 2026.pycon.ie (PyCon Ireland 2026 moved from 17
// October at Trinity College Dublin to Saturday 21 November 2026 in Dublin city
// centre, with tracks on Python Security and AI with Python; the "500+" and
// "largest gathering" lines are PyCon Ireland's own claims and are attributed).
// Signature dataset: PEA01, Population Estimates (Persons in April), pulled
// live and measured: 27 overlapping age groups mean the 2026 rows sum to
// 21,400.0 thousand against an official All ages figure of 5,525.6, and summing
// every row including both sexes gives 42,800.1; keeping only the 18
// non-overlapping bands returns 5,525.5, matching to rounding. 114 empty cells
// sit in 0 - 4 years across 38 years from 1950 to 1995. The table's own note on
// the 2017 to 2022 revision is quoted. No licence is claimed for PEA01, since
// the dossier could not verify one. CPM01 belongs to the data science page.

module.exports = {
  cluster: 'ag',
  clusterName: 'Ireland',
  hub: { group: 'guide', tag: 'PYTHON', blurb: 'Python taught on Ireland\'s own public data, from a child\'s first program to the CSO statistical tables professionals actually use.' },
  slug: 'best-python-classes-online-ireland',
  code: 'bpi',
  accent: '#094E3E',
  accentRationale: 'Python, Ireland: a deep pine green from the solver, separated from the Irish flag greens and from every other Ireland page',
  pageType: 'market',
  market: { name: 'Ireland', iso: 'IE', dial: '+353', lang: 'en-IE', locale: 'en_IE', geoRegion: 'IE', brandTag: 'Ireland', phonePlaceholder: '87 123 4567', minDigits: 7 },
  routeLabel: 'Best Python classes online, Ireland',
  title: 'Best Python Classes Online in Ireland | All Ages',
  description: 'Python classes online for learners in Ireland, ages 6 to 67: taught live on real Irish public data, from first programs to APIs and analysis. First class free.',
  ogDescription: 'Ireland publishes its statistics in formats built for Python. Learning the language on your own country\'s data beats another tutorial about fruit prices.',
  twitterDescription: 'Live online Python classes for learners in Ireland, taught on real Irish open data. First class free.',
  pageName: 'Best Python Classes Online in Ireland',
  webPageDescription: 'Python classes for learners in Ireland at every age, taught live online using Ireland\'s own open data: the CSO statistical portal, its API, and a population table whose overlapping categories teach the most valuable lesson in data work.',
  courseDescription: 'Live online Python classes for learners in Ireland from age 6 to adult: first programs, functions and files, then APIs, data analysis, automation and AI, taught on Irish public datasets.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Ireland', href: '/coding-classes-in-ireland' }],
  crumbLabel: 'Python classes, Ireland',
  navLinks: [
    { href: '#why', label: 'Why Python here' },
    { href: '#data', label: 'Irish data in Python' },
    { href: '#trap', label: 'The lesson that sticks' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Ireland &middot; Python &middot; Ages 6 to 67',
  h1: 'Best Python classes online in Ireland',
  lede: 'Python is the language most people in Ireland should learn first, and the reason is not fashion. It reads almost like English, it is what the machine learning world runs on, and, usefully for anyone here, it is the language Ireland\'s own public data is built for. The Central Statistics Office publishes its statistics through a portal that hands out data in formats designed to be read by code, and the CSO itself says it uses open-source Python libraries in statistical production. So an Irish learner does not have to practise on invented examples. They can pull real population figures into a program in their first month, and discover, in their second, why those figures are harder to add up than they look. This page explains how we teach Python, live and in small groups, from six year olds writing their first lines to adults automating a working week.',
  secondaryCta: { href: '#trap', label: 'The lesson that sticks' },
  wa: 'Hello Modern Age Coders, I would like a free first Python class for a learner in Ireland.',
  heroNote: 'Live Python teaching since 2020 &middot; 10,000+ students &middot; taught on real data, not toy examples',
  spec: [
    ['For', 'Ages 6 to 67'],
    ['Starts', 'No experience needed'],
    ['Reaches', 'APIs, analysis, automation, AI'],
    ['Practises on', 'Irish open data'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Hours', 'After school and evenings, Irish time'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Python suits Irish learners of any age: readable enough for a nine year old, powerful enough for professional data work, and the language Ireland\'s public statistics are served up for. We teach it live online in groups of five to ten placed by level, or one to one, from first programs through functions and files to reading data straight from the Central Statistics Office and training a first model. Learners practise on real Irish datasets, which is where the important lessons live, and the traps in them are taught deliberately. The first class is free; a place afterwards is USD 100 a month in a group or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three Python courses, by age',
    lede: 'The same language taught three ways, because a nine year old and a working adult need different first hours. Each card opens its syllabus.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PYTHON / 01', title: 'Python and AI for Kids', note: 'For children of about nine and up: typed Python through puzzles and small games, with a first program that learns from examples.' },
      { course: 'python-complete-masterclass-teens', code: 'PYTHON / 02', title: 'Python for Teens', note: 'The whole language for secondary students, until writing a program from a blank file feels ordinary rather than daunting.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PYTHON / 03', title: 'Python Masterclass', note: 'For college students and adults: from the first line to files, APIs, testing and the habits that make code worth keeping.' }
    ]
  },

  sections: [
    {
      id: 'why', tint: 'tint', eyebrow: 'Why Python here',
      h2: 'Why Python is the right first language in Ireland',
      lede: 'Three practical reasons, one of them specific to this country.',
      body: [
        { kind: 'three', cells: [
          { h3: 'It reads like English', p: 'A line of Python usually says what it does. Children can read a program aloud and make sense of it, which matters enormously at the start.' },
          { h3: 'It goes all the way', p: 'The same language covers a first game, a data analysis, a website and a machine learning model, so nothing has to be unlearned at the next step.' },
          { h3: 'Irish data expects it', p: 'The CSO\'s portal serves data in formats meant to be read by code, and the CSO says its own statistical work uses open-source Python libraries.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The CSO describes data.cso.ie as "the CSO\'s statistical database and open data portal, powered by PxStat", and says it lets users "automate your processes by reading data via API queries", offering JSON-stat, PX, XLSX and CSV.',
            'That system replaced the older StatBank from 1 December 2020, which is worth knowing because plenty of blog posts and textbook examples still point at the retired one.'
          ],
          right: [
            'There is a live community here too. Python Ireland, registered as Python Ireland Developers CLG with CRO number 559983, runs meetups on the second Wednesday of every month.',
            'Its conference, PyCon Ireland 2026, takes place in Dublin on Saturday 21 November 2026, with tracks on Python Security and on AI with Python. The date moved: it had been set for 17 October at Trinity College Dublin until the venue could no longer host it. PyCon Ireland describes itself as "Ireland\'s largest gathering of Python enthusiasts".'
          ] },
        { kind: 'source', html: 'Sources, read 16 September 2026: <a class="ag-inline-link" href="https://www.cso.ie/en/databases/userguides/pxstatuserguide/" rel="noopener" target="_blank">CSO PxStat user guide</a>; <a class="ag-inline-link" href="https://www.cso.ie/en/releasesandpublications/fp/fp-pvrts/portvisitsusingreal-timeshippingdata/datasourcemethodsandquality/" rel="noopener" target="_blank">CSO, Port Visits Using Real-Time Shipping Data, methods</a>; <a class="ag-inline-link" href="https://python.ie/" rel="noopener" target="_blank">python.ie</a> and <a class="ag-inline-link" href="https://2026.pycon.ie/" rel="noopener" target="_blank">2026.pycon.ie</a>. We have no connection with Python Ireland.' }
      ]
    },
    {
      id: 'data', tint: 'deep', eyebrow: 'Irish data in Python',
      h2: 'Pulling real Irish statistics into a program',
      lede: 'This is a lesson our students reach within a few months, and it changes how they see the language.',
      body: [
        { kind: 'table', caption: 'How Ireland publishes statistics for code', head: ['Thing', 'Detail'], rows: [
          ['Portal', 'data.cso.ie, the CSO\'s open data portal, running on PxStat'],
          ['Formats', 'JSON-stat, PX, XLSX and CSV, chosen by one segment of the web address'],
          ['Method', 'ReadDataset, documented on the CSO\'s own PxStat wiki, with anonymous access'],
          ['Reading it in Python', 'The JSON-stat site names two libraries, pyjstat and jsonstat.py; plain requests and pandas also work'],
          ['History', 'PxStat replaced StatBank from 1 December 2020']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The exercise is small: fetch one table, print the population of Ireland, then plot it by year. Learners who have only ever opened a spreadsheet find it startling that four lines of code can reach a national statistical office and come back with the answer.',
            'It also introduces a real format. JSON-stat stores its numbers in one long flat list, with the dimensions described separately, so the learner has to work out how the position of a value maps to a year, an age group and a sex. That is a proper piece of programming, and it is not made up.'
          ],
          right: [
            'From there the work becomes ordinary professional practice: cache the file rather than hammering the API, check what changed when the table is updated, and read the notes attached to it.',
            'The population table carries one such note, and it is a good example of why they matter: "The figures for 2017 - 2022 have been revised following a detailed analysis of the Census 2022."'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://github.com/CSOIreland/PxStat/wiki/API-Cube-RESTful" rel="noopener" target="_blank">the CSO\'s PxStat API wiki</a>, <a class="ag-inline-link" href="https://json-stat.org/tools/" rel="noopener" target="_blank">json-stat.org tools</a>, and the <a class="ag-inline-link" href="https://data.cso.ie/table/PEA01" rel="noopener" target="_blank">PEA01 table</a> itself, read 16 September 2026.' }
      ]
    },
    {
      id: 'trap', tint: 'tint', eyebrow: 'The lesson that sticks',
      h2: 'Ireland has 42.8 million people, and other things a computer will tell you',
      lede: 'Table PEA01 gives population estimates each April. Load it, group by year, add up the values, and for 2026 you get 42,800.1 thousand people. Ireland has about five and a half million. Nothing is broken; the learner asked the wrong question.',
      body: [
        { kind: 'table', caption: 'Adding up CSO table PEA01 for 2026, in thousands of persons', head: ['What you add', 'Result', 'Comment'], rows: [
          ['The official All ages row, both sexes', '5,525.6', 'The right answer'],
          ['All 27 age rows, both sexes', '21,400.0', 'Nearly four times too big'],
          ['Every row, all ages by all three sex categories', '42,800.1', 'Almost eight times too big'],
          ['Only the 18 non-overlapping five-year bands', '5,525.5', 'Matches the official figure, to rounding']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The categories overlap', p: 'The table holds totals, broad bands and five-year bands together: Under 1 and 1 to 4 both sit inside 0 to 4, and 15 years and over covers most of the rest. Adding them counts the same people repeatedly.' },
          { h3: 'So does the sex column', p: 'Both sexes is not a third group; it is the sum of male and female. Include it and every person is counted twice again, which is how four times becomes eight.' },
          { h3: 'And blanks are not zeros', p: 'The table has 114 empty cells, all in the 0 to 4 years band, across 38 years between 1950 and 1995. In those years only the Under 1 and 1 to 4 rows carry values.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Our students do this deliberately. They write the naive version, get an absurd answer, then work out which rows are subtotals and rebuild the sum from the eighteen bands that do not overlap. When the total lands on 5,525.5 against the official 5,525.6, the lesson is done.',
            'Teenagers and adults go further and write a check into the code: if the reconstructed total does not match the published one, the program stops rather than publishing a chart.'
          ],
          right: [
            'This is the single most transferable hour in the course. Every real dataset has subtotals hiding among its rows, and no library will warn you.',
            'It is also why we teach on public data. A learner who has been burned once by a table like this reads the notes on every dataset afterwards, which is exactly the habit we want.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://data.cso.ie/table/PEA01" rel="noopener" target="_blank">CSO table PEA01, Population Estimates (Persons in April)</a>, read through the CSO API on 16 September 2026. The sums above are our own arithmetic on the published table, which is exactly the exercise students repeat.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs',
    h2: 'Five rungs of Python',
    lede: 'Ages vary enormously; the order does not. Children take the first rungs slowly and adults take them in weeks.',
    table: { caption: 'The Python route', head: ['Rung', 'The learner can'], rows: [
      ['1. First programs', 'Write, run and fix programs with variables, loops and conditions'],
      ['2. Structure', 'Use functions, lists and dictionaries, and split a program into parts'],
      ['3. The outside world', 'Read and write files, handle errors, and fetch data from an API'],
      ['4. Analysis', 'Clean a real dataset, check it against a known total, and chart it'],
      ['5. Beyond', 'Train a first model, automate a task, or build a small web application']
    ] },
    left: { h3: 'When does it get useful?', ps: [
      'Around rung three for most adults, because that is where Python starts doing real jobs: renaming a thousand files, pulling a report, checking a spreadsheet.',
      'Where each rung leads next is set out on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Certifications', ps: [
      'Some adult learners want a certificate at the end. We teach towards the standard Python certifications, though we are honest that a portfolio matters more to most employers.',
      'For where Python leads in analysis, see <a class="ag-inline-link" href="/data-science-course-ireland">data science in Ireland</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine live Python courses',
    lede: 'Grouped by stage. The free first class decides which course and which rung.',
    bands: [
      { num: 'I', h3: 'Young learners', sub: 'First typed code', courses: [
        { code: 'PY / YOUNG / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python and a first learning program.' },
        { code: 'PY / YOUNG / 02', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The language in full, over the school years.' },
        { code: 'PY / YOUNG / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe Coding for Teens', blurb: 'Python projects built with AI help, read line by line.' }
      ] },
      { num: 'II', h3: 'College and adults', sub: 'Python that does real work', courses: [
        { code: 'PY / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'Zero to confident, including files and APIs.' },
        { code: 'PY / ADULT / 02', slug: 'python-web-development-django-flask-course', title: 'Python Web Development with Django and Flask', blurb: 'Web applications in the language you know.' },
        { code: 'PY / ADULT / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI Automation', blurb: 'Scripts that take the repetition out of a week.' }
      ] },
      { num: 'III', h3: 'Proof and depth', sub: 'Certificates and analysis', courses: [
        { code: 'PY / DEPTH / 01', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP Certification', blurb: 'The standard Python certifications, prepared properly.' },
        { code: 'PY / DEPTH / 02', slug: 'pcap-python-certification-prep-course', title: 'PCAP Certification Prep', blurb: 'The associate level, for people who want the badge.' },
        { code: 'PY / DEPTH / 03', slug: 'data-science-complete-masterclass-college', title: 'Data Science Masterclass', blurb: 'Where Python meets real analysis.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Live Python, at an hour that suits Ireland',
    lede: 'Teaching is live rather than recorded, with teachers working from India at a weekly hour fixed in Irish time. India runs one clock all year and Ireland runs two, so the difference is four and a half hours in the Irish summer and five and a half in the winter. Children usually take an after-school slot and adults an evening one.',
    slots: [
      { time: 'After school', l: 'Children and teenagers, Irish time.' },
      { time: 'Evening', l: 'Adults and college students.' },
      { time: 'Weekend', l: 'Longer sessions for data projects.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'The learner writes actual Python with a teacher, who then recommends a rung and a course.' },
      { h3: 'Five to ten per group', p: 'Learners at the same rung, so nobody is lost and nobody is bored.' },
      { h3: 'One to one', p: 'For a focused goal, an unusual schedule, or a learner who prefers privacy.' },
      { h3: 'Real datasets early', p: 'Irish public data appears as soon as a learner can read a file, because it teaches more than invented examples.' },
      { h3: 'Checks in the code', p: 'Students learn to make a program verify its own totals rather than trusting them.' },
      { h3: 'Work that is kept', p: 'Programs live in the learner\'s own repository, so a year of progress is visible.' }
    ]
  },

  projectsH2: 'Python projects our students published',
  projectsLede: 'Four things our students built and put online. The full collection is on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Our reviews on Google, unaltered and unpaid, from students and parents.',

  fees: {
    h2: 'Python class fees',
    lede: 'One monthly price in US dollars, the same in every country apart from India, whatever the age of the learner or the course. No registration fee and nothing to commit to beyond the month.',
    free: ['Real Python written with a teacher', 'An honest view of the right rung', 'No card needed'],
    group: ['Five to ten learners at one rung', 'The same teacher each week', 'Code read and corrected weekly', 'A certificate at the end'],
    one: ['A teacher for one learner', 'Built around a goal or deadline', 'Good for certification work']
  },

  faq: {
    eyebrow: 'Questions',
    h2: 'What learners in Ireland ask about Python',
    items: [
      { q: 'What age can a child start Python?', a: 'Usually around nine or ten, once typing and reading are comfortable. Younger children start with block coding and move across when they are ready.' },
      { q: 'Is Python a good first language for an adult?', a: 'For most people, yes. It is readable, it does useful work quickly, and it leads directly into data analysis, automation and AI.' },
      { q: 'Why teach on Irish public data?', a: 'Because real data has problems invented examples do not, and the CSO publishes plenty of it in formats built for code. Learners meet subtotals, blanks and revisions early.' },
      { q: 'Do I need to install anything?', a: 'Nothing complicated. Beginners can start in the browser, and your teacher will set up Python properly on your own machine when the time comes.' },
      { q: 'Does Python need strong maths?', a: 'Not to start. Ordinary school arithmetic carries you a long way, and the maths that matters later is taught as it is needed.' },
      { q: 'Can Python be used for websites and apps?', a: 'Yes. Django and Flask are widely used for web applications, and our web course teaches one of them properly rather than in outline.' },
      { q: 'Are Python certifications worth it?', a: 'They can help for some jobs, and we prepare students for the standard ones. Most employers still ask what you have built before they ask about certificates.' },
      { q: 'What does it cost?', a: 'The first class is free. Then a group place is USD 100 a month and one-to-one lessons are USD 150 a month, in US dollars, with no registration fee.' },
      { q: 'When do classes run?', a: 'After school, in the evening or at weekends, at a weekly hour set in the free class. Our teachers are four and a half hours ahead of Irish time in summer and five and a half in winter.' },
      { q: 'What happens after I send the form?', a: 'We ring you at a sensible Irish hour and arrange the free first class. Nothing is charged unless the learner continues.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Where Python leads',
    lede: 'Pages that build on the language.',
    items: [
      { href: '/data-science-course-ireland', label: 'Data science course in Ireland', p: 'Analysis on Irish open data.' },
      { href: '/build-real-ai-projects-ireland', label: 'Build real AI projects in Ireland', p: 'Models that actually get evaluated.' },
      { href: '/full-stack-software-development-course-ireland', label: 'Full stack software development', p: 'When Python meets the web.' },
      { href: '/best-coding-classes-for-teens-ireland', label: 'Best coding classes for teens in Ireland', p: 'Python in the school years.' },
      { href: '/best-coding-classes-for-adults-ireland', label: 'Best coding classes for adults in Ireland', p: 'Starting as an adult.' },
      { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland', p: 'The national page.' }
    ]
  },

  start: {
    h2: 'Write real Python in a free first class',
    lede: 'Leave a number and we will ring at a time that works in Ireland. In the free class the learner writes actual Python with a teacher and finds out which rung to start on.',
    readFirst: 'Want to look around first? There is <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, every <a class="ag-inline-link" href="/courses">course syllabus</a>, and <a class="ag-inline-link" href="/student-labs">projects our students published</a>.',
    note: 'WhatsApp is free from an Irish phone and usually the quickest way to us. The number is Indian, as our teachers are based in India; we keep no office in Ireland.',
    formNote: 'No card, no obligation, one phone call.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/data-science-course-ireland', label: 'Data science' },
        { href: '/build-real-ai-projects-ireland', label: 'Build real AI projects' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Ireland', links: [
        { href: '/coding-classes-in-ireland', label: 'Coding classes in Ireland' },
        { href: '/best-coding-classes-for-teens-ireland', label: 'Coding for teens' },
        { href: '/best-coding-classes-for-adults-ireland', label: 'Coding for adults' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Python taught on Ireland\'s own data'
  },

  personalityCss: `
.ag-root.ag-bpi .ag-hero-grid { gap: clamp(1.22rem, 3.28vw, 2.78rem); }
.ag-root.ag-bpi .ag-hero h1 { letter-spacing: -0.0175em; }
.ag-root.ag-bpi .ag-capsule { border-left-width: 7px; }
.ag-root.ag-bpi .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-bpi .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-bpi .ag-band-head h3 { letter-spacing: -0.0075em; }
.ag-root.ag-bpi .ag-spec dt { letter-spacing: 0.108em; }
.ag-root.ag-bpi .ag-slots { gap: 1.14rem; }
`,

  mustMention: ['PxStat', '1 December 2020', 'JSON-stat', 'pyjstat', 'PEA01', '5,525.6', '21,400.0', '42,800.1', '5,525.5', '114 empty cells', '559983', '21 November 2026']
};
