'use strict';
// Coding alongside informatica, havo and vwo (ag- topic door, national).
// Spine: the teacher shortage. "Personeelstekorten voortgezet onderwijs,
// peildatum 1 oktober 2024" (December 2024; Hendri Adriaens, Benjamin Feher,
// Suzan Elshout, Maartje Elshout): across vmbo, havo and vwo the shortage is
// 4.8 percent; the largest by percentage are NASK 10.3, informatica 10.0,
// Nederlands 8.1 and techniek 8.0; nationally informatica is about 433 fte of
// employment with a shortage estimated at 39 fte; in the per-subject table
// 8.5 of informatica's 10.0 points are hidden shortage; second-degree
// informatica is 11.6 percent, the highest of any subject; first-degree
// informatica 7.7 percent. The academy hub owns the SLO provision and uptake
// figures; they are linked, not repeated. The page sells classes that sit
// beside the subject, not instead of it.

module.exports = {
  cluster: 'ag',
  slug: 'coding-alongside-informatica-havo-vwo-netherlands',
  code: 'ifn',
  accent: '#5B301D',
  accentRationale: 'Informatica door: a dark walnut from the solver, twenty-five units from every page it links to, the academy hub, the teens, machine learning and Python doors and both Dutch oranges among them, with an unlinked academy elsewhere as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'Coding alongside informatica, havo and vwo',
  title: 'Coding Alongside Informatica, Havo and Vwo | Live Online',
  description: 'Coding alongside informatica for havo and vwo pupils in the Netherlands, a subject with one of the largest teacher shortages. Live online, first lesson free.',
  ogDescription: 'Informatica has one of the largest teacher shortages of any secondary subject, and most of it is hidden. Live online coding that sits beside the subject for havo and vwo pupils.',
  twitterDescription: 'Coding beside informatica for havo and vwo pupils, live online. First lesson free.',
  pageName: 'Coding Alongside Informatica for Havo and Vwo Pupils',
  webPageDescription: 'Live online coding classes for havo and vwo pupils in the Netherlands who take informatica, or whose school cannot staff it fully: Python, data, algorithms and projects alongside the school subject.',
  courseDescription: 'A live online programme for havo and vwo pupils in the Netherlands that runs beside the school subject informatica: Python, algorithms, data, databases and projects, placed by ability and taught in English.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and Python Academy, Netherlands', href: '/ai-and-python-academy-netherlands' }],
  crumbLabel: 'Alongside informatica',
  navLinks: [
    { href: '#shortage', label: 'The shortage' },
    { href: '#beside', label: 'Beside the subject' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; Havo and vwo &middot; Live online',
  h1: 'Coding alongside informatica for havo and vwo',
  lede: 'Informatica is a small subject in Dutch secondary schools, and it is hard to staff. In the national measurement of teacher shortages for October 2024, only one subject, NASK, had a larger shortage as a share of its teaching than informatica, at 10.0 percent. Most of that shortage does not show up as empty posts. It is hidden: lessons that go ahead, but not always with a fully qualified informatica teacher. For a pupil who chose informatica because they love programming, or whose school offers it with a teacher stretched thin, that can mean a subject that covers the programme without ever going deep. This page is for those pupils, in havo 4 and 5 and vwo 4 to 6, and for their parents. Our classes sit beside informatica, not instead of it: Python, algorithms, data and projects taught by a specialist, live online and in English, at a pace that fits the school year.',
  secondaryCta: { href: '#shortage', label: 'See the shortage figures' },
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a havo or vwo pupil who takes informatica.',
  heroNote: 'Teaching live since 2020 &middot; more than 10,000 students &middot; every lesson with a specialist teacher',
  spec: [
    ['For', 'Havo 4 to 5, vwo 4 to 6'],
    ['Beside', 'The school subject informatica'],
    ['Covers', 'Python, algorithms, data, databases'],
    ['Also for', 'Pupils whose school does not offer it'],
    ['Format', 'Live video with a teacher'],
    ['Groups', 'Five to ten, or one to one'],
    ['Language', 'English'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding live online to havo and vwo pupils in the Netherlands who take informatica, or who would like to but cannot at their school. The classes run beside the school subject: Python written properly, algorithms and data structures, data and databases, and projects that can support a profielwerkstuk, taught by a specialist teacher in groups of five to ten at one level or one to one. We do not replace the school\'s informatica or its assessment. A trial lesson costs nothing. Continuing costs USD 100 a month in a group or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that sit well beside informatica',
    lede: 'One for programming depth, one for data and databases, and one for the algorithms that informatica touches and university computing assumes. Each opens its own page.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'INF / 01', title: 'Python for Teens', note: 'Python taught in depth over two years, so a pupil\'s programming goes beyond what a stretched school timetable allows.' },
      { course: 'mysql-mastery-for-teens', code: 'INF / 02', title: 'MySQL for Teens', note: 'Databases and SQL from the first query, a topic informatica pupils meet and often want to go further in.' },
      { course: 'data-science-course-for-teens-python-data', code: 'INF / 03', title: 'Data Science for Teens', note: 'Real data in Python, from cleaning to a first model, a strong base for a profielwerkstuk with a technical side.' }
    ]
  },

  sections: [
    {
      id: 'shortage', tint: 'tint', eyebrow: 'The shortage',
      h2: 'Informatica has one of the largest teacher shortages of any secondary subject',
      lede: 'The figures below come from the national report "Personeelstekorten voortgezet onderwijs, peildatum 1 oktober 2024", published in December 2024 by Hendri Adriaens, Benjamin Feher, Suzan Elshout and Maartje Elshout for the education ministry\'s labour market reporting.',
      body: [
        { kind: 'table', caption: 'Teacher shortages in vmbo, havo and vwo, reference date 1 October 2024', head: ['Measure', 'Figure'], rows: [
          ['Shortage across all subjects in vmbo, havo and vwo', '4.8 percent'],
          ['NASK', '10.3 percent, the largest by share'],
          ['Informatica', '10.0 percent, the second largest by share'],
          ['Nederlands', '8.1 percent'],
          ['Techniek', '8.0 percent'],
          ['Informatica nationally, in full-time equivalents', 'about 433 fte of employment, with a shortage estimated at 39 fte'],
          ['Of informatica\'s 10.0 percent, hidden shortage', '8.5 percent'],
          ['Second-degree informatica teachers', '11.6 percent, the highest of any subject'],
          ['First-degree informatica teachers', '7.7 percent']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The headline is the second row of subjects: after NASK, informatica has the largest shortage as a share of the teaching it needs. In absolute numbers it is small, because informatica is a small subject; the largest shortages in full-time equivalents are in Nederlands, about 550 fte, and wiskunde, about 400.',
            'For a pupil, though, the percentage is what counts. A small subject with a large shortage is a subject where many schools struggle to find or keep a qualified teacher.'
          ],
          right: [
            'The report separates open vacancies from hidden shortage, such as lessons given by someone not fully qualified for the subject. For informatica, 8.5 of the 10.0 percentage points are hidden: the lessons happen, but not always as the subject intends. The report also finds the shortage of second-degree informatica teachers, at 11.6 percent, to be the largest of any subject.',
            'How many schools offer informatica at all, and how many pupils take it, is set out on the <a class="ag-inline-link" href="/ai-and-python-academy-netherlands">national academy page</a>; it is not repeated here.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.rijksoverheid.nl/binaries/rijksoverheid/documenten/rapporten/2024/12/17/rapporten-bij-trendrapportage-arbeidsmarkt-leraren-po-vo-en-mbo-2024/Personeelstekorten+voortgezet+onderwijs+2024.pdf" rel="noopener" target="_blank">Personeelstekorten voortgezet onderwijs, peildatum 1 oktober 2024 (December 2024)</a>, summary and tables 4, 20, 21 and 22. Read 15 September 2026; figures quoted as published. The report is in Dutch.' }
      ]
    },
    {
      id: 'beside', tint: 'deep', eyebrow: 'Beside the subject',
      h2: 'What classes beside informatica can do, and what they should not try to do',
      lede: 'Outside classes cannot fix a staffing shortage, and they should not compete with the school. They can add depth where a pupil wants it and a specialist where a school cannot always provide one.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Add depth in programming', p: 'Informatica covers programming among many other topics. A pupil who wants more can learn Python thoroughly with us, writing larger programs and reading their own errors, so that school assignments feel like practice rather than first contact.' },
          { h3: 'Support a profielwerkstuk', p: 'Every havo and vwo pupil writes a profielwerkstuk. A pupil with a technical topic can build the software or data analysis with a specialist teacher alongside. We teach the skills; the research and the writing remain the pupil\'s own, as school rules require.' },
          { h3: 'Stand in where the subject is missing', p: 'For a pupil whose school does not offer informatica, or cannot run it this year, our classes cover the programming, data and algorithms a future technical student will need. They do not give school credit, but they give real ability.' }
        ] },
        { kind: 'table', mt: true, caption: 'Topics informatica pupils often want to take further', head: ['Topic', 'What we add', 'Course'], rows: [
          ['Programming', 'Depth, larger programs, debugging on their own', 'Python for Teens'],
          ['Databases', 'SQL, design, queries on real data', 'MySQL for Teens'],
          ['Algorithms', 'Searching, sorting and their cost, reasoned out', 'AI and Machine Learning for Teens, then data structures'],
          ['Data', 'Cleaning, plotting and a first model', 'Data Science for Teens'],
          ['Web', 'Building a real site with a front and back end', 'Full Stack Web Development for Teens']
        ] },
        { kind: 'two', mt: true,
          left: [
            'A common pattern runs like this. A pupil in havo 4 or vwo 4 chooses informatica because they have enjoyed a little programming, and finds that the subject spends a term on something else entirely: how computers represent data, or how organisations use information. That breadth is the point of the subject, and it is valuable. But the pupil who came for programming can feel the programming arrive in small doses.',
            'Classes beside the subject let that pupil keep programming every week while the school covers the rest, so that when programming returns in the school programme they are already comfortable with it.'
          ],
          right: [
            'The opposite pattern matters too. Some pupils take informatica without much prior experience and find the programming parts hard to follow at the pace of a full class. An hour or two a week with a specialist, going over the same ideas slowly and with more practice, often turns the subject around.',
            'In both cases our teacher asks what the school is covering this term and fits the lessons around it, without doing the pupil\'s graded work for them.'
          ] },
        { kind: 'source', html: 'This section is our teaching plan. It makes no claim about any school\'s informatica provision and does not replace the school\'s programme or assessment.' }
      ]
    },
    {
      id: 'next', tint: '', eyebrow: 'Beyond school',
      h2: 'From informatica to a technical degree',
      lede: 'Many informatica pupils are heading for computing, AI or engineering at university. The step up is large, and preparation shows.',
      body: [
        { kind: 'two',
          left: [
            'The <a class="ag-inline-link" href="/ai-and-python-academy-groningen">Groningen academy page</a> sets out what a university AI first year asks, and the <a class="ag-inline-link" href="/coding-for-college-students-netherlands">college students page</a> covers the skills students add once they arrive.',
            'For pupils drawn to AI in particular, <a class="ag-inline-link" href="/machine-learning-for-school-students-netherlands">machine learning for school students</a> goes further while still at school.'
          ],
          right: [
            'The wider teenage route, including pupils not taking informatica, is on <a class="ag-inline-link" href="/coding-classes-for-teens-netherlands">coding classes for teens</a>. The language most pupils start with is covered on <a class="ag-inline-link" href="/python-classes-netherlands">Python classes in the Netherlands</a>.',
            'Projects that could support a profielwerkstuk are described on <a class="ag-inline-link" href="/build-real-ai-projects-netherlands">building real AI projects</a>.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The ladder',
    h2: 'The upper-school route, beside informatica',
    lede: 'The rungs follow the bovenbouw years. A pupil can join at any point; the free lesson decides where.',
    table: { caption: 'Coding beside informatica, havo 4 to vwo 6', head: ['Rung', 'Usually', 'What the pupil builds'], rows: [
      ['1. Python in depth', 'Havo 4, vwo 4', 'Larger programs written and debugged without help'],
      ['2. Data and databases', 'Havo 4 to 5, vwo 4 to 5', 'SQL queries and data analyses on real datasets'],
      ['3. Algorithms', 'Vwo 5, havo 5', 'Searching and sorting with their costs understood'],
      ['4. A project', 'Profielwerkstuk year', 'Software or analysis for a technical profielwerkstuk'],
      ['5. A portfolio', 'Throughout', 'A public repository for university applications']
    ] },
    left: { h3: 'Why depth before breadth', ps: [
      'Informatica is broad by design. Pupils who want to become strong programmers need one area, usually programming itself, taken deep. Everything else becomes easier after that.',
      'Our <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> shows how the programming, data and algorithms rungs connect to everything that follows them.'
    ] },
    right: { h3: 'Around toetsweken and the eindexamen', ps: [
      'Lessons usually pause during school test weeks and ease off in the exam year. The profielwerkstuk year is often the busiest, and one-to-one lessons fit it best.',
      'Pupils at international schools join the same route by ability.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Eight live courses for upper-school pupils',
    lede: 'Grouped by what informatica pupils most often want more of. A card leads to the full syllabus and timetable, and the trial lesson settles the starting point.',
    bands: [
      { num: 'I', h3: 'Programming', sub: 'Depth beyond the school programme', courses: [
        { code: 'INF / PROG / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Two years of Python, from variables to classes and files, with no topic rushed.' },
        { code: 'INF / PROG / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'A second, stricter language, useful for pupils heading into computing degrees.' },
        { code: 'INF / PROG / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'Version control and a public portfolio, from the first commit.' }
      ] },
      { num: 'II', h3: 'Data and databases', sub: 'Topics informatica pupils want to take further', courses: [
        { code: 'INF / DATA / 01', slug: 'mysql-mastery-for-teens', title: 'MySQL for Teens', blurb: 'SQL and database design on real data.' },
        { code: 'INF / DATA / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Data in Python from cleaning to a first model.' },
        { code: 'INF / DATA / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Models trained and tested properly, for pupils drawn to AI.' }
      ] },
      { num: 'III', h3: 'Building', sub: 'Projects and the web', courses: [
        { code: 'INF / BUILD / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full Stack Web Development for Teens', blurb: 'A working website with its own front end, back end and data.' },
        { code: 'INF / BUILD / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App Development for Teens', blurb: 'A real app, often a pupil\'s first public project.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'After school, beside the timetable',
    lede: 'Teachers work from India, where the clock stays the same all year, while the Netherlands switches between winter and summer time. That gives a gap of four and a half hours in winter and three and a half in summer, so upper-school pupils usually learn in the late afternoon, early evening or at the weekend. The regular slot is agreed with the family in the free lesson.',
    slots: [
      { time: 'After school', l: 'Late afternoon, Dutch time, the usual choice.' },
      { time: 'Early evening', l: 'By arrangement, for pupils with afternoon sport or work.' },
      { time: 'Weekend', l: 'Saturday or Sunday, useful in the profielwerkstuk year.' }
    ],
    cells: [
      { h3: 'A free first lesson', p: 'The pupil writes code with a specialist teacher, who sees how far they are beyond, or behind, the school programme.' },
      { h3: 'Groups of five to ten', p: 'Pupils at the same level from several countries, many of them also taking a school computing subject.' },
      { h3: 'One to one for projects', p: 'For a profielwerkstuk, an exam year or a pupil who prefers a teacher to themselves.' },
      { h3: 'Families in the loop', p: 'Nothing is arranged without a parent on the call, and parents hear what the pupil is building as the months go by.' },
      { h3: 'In English, with Dutch school terms', p: 'Lessons are in English; informatica, profielwerkstuk and toetsweek are used as pupils use them.' },
      { h3: 'Work kept', p: 'Every program goes into the pupil\'s own GitHub repository, ready for applications.' }
    ]
  },

  projectsH2: 'Projects our students built',
  projectsLede: 'Four live projects by our students. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'From Google, word for word. We do not write or pay for reviews.',

  fees: {
    h2: 'Fees',
    lede: 'Charged each month in US dollars, at one rate for every country outside India. There is nothing to pay to register and no year-long commitment.',
    free: ['A real lesson with a specialist', 'Places the pupil at the right rung', 'No card needed'],
    group: ['Five to ten pupils at one level', 'The same live teacher each week', 'Code reviewed every week', 'A certificate at the end'],
    one: ['A teacher for one pupil', 'Paced to the school year', 'Best for the profielwerkstuk year']
  },

  faq: {
    eyebrow: 'Questions from pupils and parents',
    h2: 'What informatica pupils and their parents ask',
    items: [
      { q: 'Is there really a shortage of informatica teachers?', a: 'Yes. In the national measurement for 1 October 2024, informatica had a shortage of 10.0 percent of its teaching, second only to NASK, and 8.5 of those percentage points were hidden shortage rather than open vacancies.' },
      { q: 'Do your classes replace informatica?', a: 'No. They sit beside the school subject and do not give school credit or replace its assessment. They add depth and a specialist teacher.' },
      { q: 'My school does not offer informatica. Is this useful?', a: 'Very. Our classes cover the programming, data and algorithms a pupil would otherwise miss, and they prepare a pupil well for a technical degree.' },
      { q: 'Can you help with a profielwerkstuk?', a: 'We teach the programming and data skills a technical profielwerkstuk needs. The research, conclusions and writing remain the pupil\'s own, as school rules require.' },
      { q: 'Which language should an informatica pupil learn?', a: 'Python for most, taught in depth. Java suits pupils heading for computing degrees who want a second, stricter language.' },
      { q: 'Is it suitable for havo as well as vwo?', a: 'Yes. Pupils are placed by ability, not by school type.' },
      { q: 'Will this help with informatica grades?', a: 'It often does, because a pupil who programs every week finds the programming parts of the subject easier. But we teach skills, not the school\'s assessments, and we never complete graded work for a pupil.' },
      { q: 'Are the lessons in English?', a: 'Yes, with Dutch school terms kept. Programming is written in English anyway.' },
      { q: 'What does it cost?', a: 'After a free trial lesson, a place in a small group is USD 100 per month and a private teacher USD 150 per month. Payment is in US dollars; you can stop at the end of any month, and there is no registration charge.' },
      { q: 'When are lessons held?', a: 'After school, in the early evening or at the weekend, Dutch time. The teacher is four and a half hours ahead in winter and three and a half in summer.' },
      { q: 'What happens after we send the form?', a: 'A member of our team rings the parent back, at a time that suits a Dutch evening, and fixes the trial lesson. You pay nothing unless the pupil carries on afterwards.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for upper-school pupils',
    lede: 'Pages for the wider route and for what comes after school.',
    items: [
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'How many schools offer informatica, and how many pupils take it.' },
      { href: '/coding-classes-for-teens-netherlands', label: 'Coding classes for teens', p: 'The wider teenage route.' },
      { href: '/machine-learning-for-school-students-netherlands', label: 'Machine learning for school students', p: 'For pupils drawn to AI.' },
      { href: '/python-classes-netherlands', label: 'Python classes in the Netherlands', p: 'The language most pupils start with.' },
      { href: '/ai-and-python-academy-groningen', label: 'AI and Python Academy, Groningen', p: 'What a university AI first year asks.' },
      { href: '/build-real-ai-projects-netherlands', label: 'Build real AI projects', p: 'Projects on real Dutch data.' }
    ]
  },

  start: {
    h2: 'Book a free lesson beside informatica',
    lede: 'Give us a parent\'s phone number and we ring back when it suits a Dutch household. During the trial lesson the pupil writes real code with a specialist, which shows exactly which rung to begin on.',
    readFirst: 'Prefer to look around before calling? Our <a class="ag-inline-link" href="/how-we-teach">teaching method</a>, the full <a class="ag-inline-link" href="/courses">list of courses</a> and the <a class="ag-inline-link" href="/coding-roadmap">roadmap of subjects</a> are all open to read.',
    note: 'WhatsApp from a Dutch phone is free and usually quickest. The number is Indian; we have no office or premises in the Netherlands.',
    formNote: 'No card, no commitment. One call with a parent.'
  },

  footer: {
    cols: [
      { h4: 'Netherlands', links: [
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/coding-classes-for-teens-netherlands', label: 'Coding for teens' },
        { href: '/python-classes-netherlands', label: 'Python classes' },
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' }
      ] },
      { h4: 'Upper school', links: [
        { href: '/machine-learning-for-school-students-netherlands', label: 'Machine learning for pupils' },
        { href: '/build-real-ai-projects-netherlands', label: 'Real AI projects' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching Dutch pupils on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-ifn .ag-hero-grid { gap: clamp(1.2rem, 3.1vw, 2.8rem); }
.ag-root.ag-ifn .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-ifn .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ifn .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-ifn .ag-band-head h3 { letter-spacing: -0.007em; }
.ag-root.ag-ifn .ag-table caption { text-align: left; }
.ag-root.ag-ifn .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-ifn .ag-slots { gap: 1.2rem; }
`,

  mustMention: ['peildatum 1 oktober 2024', 'Hendri Adriaens', '4.8 percent', '10.3 percent', '10.0 percent', 'about 433 fte', '39 fte', '8.5 percent', '11.6 percent', '7.7 percent']
};
