'use strict';
// Coding for college students, Netherlands (ag- age door, national).
// Spine: AI use is close to universal among Dutch students (CBS, 25 February
// 2026: 74 percent of 18-to-25-year-olds in education use AI for their
// studies), so the advantage lies in what AI cannot do for a student: data
// structures, debugging, reading code, version control, systems. Context:
// Nuffic (11 June 2026) counts 129,764 international students in 2025-26,
// the first decline since 2006, with 48,139 new enrolments and 16,709 in
// university engineering (up 11 percent); the Wet internationalisering in
// balans (36.555) on the language of teaching is still pending. The CBS 2024
// age table belongs to the teens door and is not repeated.

module.exports = {
  cluster: 'ag',
  slug: 'coding-for-college-students-netherlands',
  code: 'ccs',
  accent: '#0D5B45',
  accentRationale: 'College door: a deep sea green from the solver, more than twenty-two units from every page it links to, the academy pages, the teens and adults doors and both Dutch oranges among them, with an unlinked city as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'Coding for college students, Netherlands',
  title: 'Coding for College Students in the Netherlands | Live Online',
  description: 'Live online coding for students at Dutch universities and hogescholen: Python, algorithms, full stack, Git and AI, in English, around your timetable.',
  ogDescription: 'Three in four Dutch students already use AI for their studies. What sets a student apart is what AI cannot do for them: algorithms, debugging, systems and a real portfolio. Live online, first lesson free.',
  twitterDescription: 'Algorithms, full stack, Git and AI for students in the Netherlands, live online in English. First lesson free.',
  pageName: 'Coding for College and University Students in the Netherlands',
  webPageDescription: 'Live online coding classes for university and hogeschool students in the Netherlands: Python, data structures and algorithms, full stack development, Java, Git and GitHub, data science and AI.',
  courseDescription: 'A live online programme for students at Dutch universities and hogescholen, covering Python, data structures and algorithms, software development, Git and GitHub, data science and AI, taught in English in small groups or one to one around a study timetable.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the Netherlands', href: '/coding-classes-in-netherlands' }],
  crumbLabel: 'For students',
  navLinks: [
    { href: '#students', label: 'Students and AI' },
    { href: '#international', label: 'International students' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; University and hbo &middot; Live online',
  h1: 'Coding for college students in the Netherlands',
  lede: 'Three in four Dutch students aged 18 to 25 now use AI for their studies, the national statistics office reported in 2026. When nearly everyone has the same assistant, it stops being an advantage. What sets a student apart is what the assistant cannot do for them: understanding data structures and the cost of an algorithm, debugging code nobody else can see, reading a pull request, working in a team through Git, and building something real enough to show an employer. Those are the skills technical interviews and internships test, and many degree programmes teach them only in passing. This page is for students at Dutch universities and hogescholen, Dutch and international, who want those skills alongside their degree, taught live online in English, in the evenings, at weekends or one to one around a changing timetable.',
  secondaryCta: { href: '#catalogue', label: 'See the student courses' },
  wa: 'Hello Modern Age Coders, I am a student in the Netherlands and would like a free coding class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; every lesson taught in real time',
  spec: [
    ['For', 'University and hbo students'],
    ['Core', 'Algorithms, debugging, Git, systems'],
    ['Tracks', 'Software, data science, AI'],
    ['Format', 'Live video with a teacher'],
    ['Groups', '5 to 10 at one level, or one to one'],
    ['Times', 'Evenings, weekends, around your rooster'],
    ['Language', 'English'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding live online to students at universities and hogescholen in the Netherlands. The focus is on the skills an AI assistant cannot supply: data structures and algorithms, debugging and reading code, Git and team workflows, and projects that stand up in an interview, alongside software, data science and AI tracks for students heading into those fields. Students are placed by ability, in groups of five to ten or one to one, and lessons fit around lectures and exams. Your opening lesson costs nothing; from then on a seat in a group runs at USD 100 a month, and private tuition at USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses Dutch students most often take',
    lede: 'One for the interview, one for the portfolio, one for the student heading into AI. Each opens its own page with syllabus, timetable and fee.',
    items: [
      { course: 'data-structures-algorithms-masterclass-college', code: 'STUDENT / 01', title: 'Data Structures and Algorithms', note: 'The material technical interviews test, taught as reasoning: how structures behave, what an operation costs and how to explain a solution out loud.' },
      { course: 'full-stack-web-development-masterclass-college', code: 'STUDENT / 02', title: 'Full Stack Developer Course', note: 'A deployed application with a front end, a server and a database of its own, the kind of project an internship interviewer asks to see.' },
      { course: 'ai-ml-masterclass-complete-college', code: 'STUDENT / 03', title: 'AI and Machine Learning Masterclass', note: 'The complete machine learning route, with evaluation taken as seriously as training, for students whose degree touches AI only lightly.' }
    ]
  },

  sections: [
    {
      id: 'students', tint: 'tint', eyebrow: 'Students and AI',
      h2: 'Three in four Dutch students already use AI for their studies',
      lede: 'The figures come from CBS, the national statistics office, in its survey of AI in Dutch society published on 25 February 2026. They describe 2025.',
      body: [
        { kind: 'two',
          left: [
            'Of 18-to-25-year-olds in education, <strong>74 percent</strong> said they used AI for their studies. Across all adults the figure for education or training was 10 percent, and 43 percent of people in paid work used AI in their jobs. Students, in other words, are the heaviest users of AI for learning in the country by a wide margin.',
            'That changes what counts as an advantage. An essay drafted with AI, or code generated by it, is now the baseline. The student who stands out can explain why the code works, find the bug the assistant introduced, and design something the assistant was never asked to design.'
          ],
          right: [
            'The same survey found real doubts alongside the use: 62.5 percent of adults were worried about privacy risks from AI, and 69.5 percent about the spread of fake news. Students who hand their coursework to an AI tool without understanding it carry both risks into their degrees.',
            'Our student courses therefore start from understanding. A student writes the data structure before using the library, reads the generated code line by line before submitting it, and keeps every project in Git so the history shows the thinking, not only the result.'
          ] },
        { kind: 'table', mt: true, caption: 'What AI does well for a student, and what it cannot do for them', head: ['Task', 'AI assistant', 'Still the student\'s job'], rows: [
          ['Writing boilerplate code', 'Fast and usually right', 'Knowing whether it fits the design'],
          ['Explaining an error message', 'Often helpful', 'Finding the bug the error points away from'],
          ['Choosing a data structure', 'Suggests a common one', 'Knowing what each operation costs at scale'],
          ['Working in a team', 'Can draft a commit message', 'Branching, reviewing and resolving conflicts in Git'],
          ['A technical interview', 'Not in the room', 'Reasoning out loud, without help']
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.cbs.nl/nl-nl/longread/diversen/2026/ai-in-de-samenleving-ervaringen-en-opinies?onepage=true" rel="noopener" target="_blank">CBS, AI in de samenleving: ervaringen en opinies, 25 February 2026</a>, read 15 September 2026. The table is our own summary for students, not a CBS finding.' }
      ]
    },
    {
      id: 'international', tint: 'deep', eyebrow: 'International students',
      h2: 'A changing student body: 129,764 international students and a bill on the language of teaching',
      lede: 'Many of our student learners in the Netherlands came from abroad to study. Two recent documents describe their situation.',
      body: [
        { kind: 'table', caption: 'International students in Dutch higher education, 2025-26 (Nuffic, 11 June 2026)', head: ['Measure', 'Figure', 'Change on the year before'], rows: [
          ['International students enrolled, hbo and wo', '129,764', '133 fewer, down 0.1 percent'],
          ['New international students', '48,139', '180 fewer, down 0.4 percent'],
          ['New: university master\'s', '19,808', 'up 559'],
          ['New: university bachelor\'s', '16,852', 'down 669'],
          ['New: hbo bachelor\'s', '8,952', 'down 265'],
          ['New: hbo master\'s', '2,527', 'up 195'],
          ['International students in university engineering (Techniek)', '16,709', 'up 11 percent'],
          ['Largest country of origin, Germany', '18,241', '']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Nuffic, the Dutch organisation for internationalisation in education, reports that the number of international students fell for the first time since 2006, by a small margin, and calls it a break in the trend. New enrolments from China fell by 27.5 percent, to 1,993. Engineering at university level went the other way, up 11 percent. The four types of new enrolment in the table add up exactly to the 48,139 total.',
            'For a student from abroad, the practical point is that technical fields remain in demand even as overall numbers level off.'
          ],
          right: [
            'In parliament, the <strong>Wet internationalisering in balans</strong>, bill number <strong>36.555</strong>, would set rules on the language of teaching in higher education, on an efficient range of programmes and on access, including the principle that teaching is in Dutch unless there is good reason otherwise. At the time of reading it was still before the Tweede Kamer, with the latest step a government letter of 3 July 2025 on motions about the bill.',
            'Whatever the outcome, our classes are taught in English and are open to students of every nationality, with no connection to any institution\'s language policy.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.nuffic.nl/nieuws/voor-het-eerst-lichte-daling-internationale-studentenpopulatie" rel="noopener" target="_blank">Nuffic, Voor het eerst lichte daling internationale studentenpopulatie, 11 June 2026</a>; <a class="ag-inline-link" href="https://www.eerstekamer.nl/wetsvoorstel/36555_wet_internationalisering_in" rel="noopener" target="_blank">Eerste Kamer, wetsvoorstel 36.555</a>. Read 15 September 2026. The status of the bill may change after that date.' }
      ]
    },
    {
      id: 'skills', tint: '', eyebrow: 'Beyond the degree',
      h2: 'The skills students add alongside their programme',
      lede: 'Degree programmes differ widely in how much practical coding they teach. These are the gaps students most often ask us to fill.',
      body: [
        { kind: 'two',
          left: [
            'Data structures and algorithms come first for most, because they are what internship and graduate interviews test and what many non-computing degrees skip. They are taught here as reasoning, with every operation\'s cost worked out, not as a list of patterns to memorise.',
            'Git and GitHub come next. Almost every technical team works through them, and a student who can branch, review and resolve a conflict is ready for group projects and internships. The global page on <a class="ag-inline-link" href="/ai-ml-course-for-college-students">AI and ML for college students</a> covers the machine learning route in more depth.'
          ],
          right: [
            'Then a track: software development for students heading into engineering roles, data science for students in economics, the sciences or the social sciences, and AI for those who want to build models rather than use them. <a class="ag-inline-link" href="/c-plus-plus-classes-for-college-students">C++ for college students</a> covers the systems route.',
            'The city academy pages show how universities here approach AI, from <a class="ag-inline-link" href="/ai-and-python-academy-groningen">Groningen</a> and <a class="ag-inline-link" href="/ai-and-python-academy-utrecht">Utrecht</a> to <a class="ag-inline-link" href="/ai-and-python-academy-eindhoven">Eindhoven</a>.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs for students',
    h2: 'From solid foundations to work an employer can check',
    lede: 'Students often want to start at the top. The rungs below exist because each one makes the next honest: a model built without knowing data structures, or deployed without Git, falls apart under questions.',
    table: { caption: 'The route for students at Dutch universities and hogescholen', head: ['Rung', 'Usually', 'What the student can show afterwards'], rows: [
      ['1. Python or Java fluency', 'First year', 'Clean programs written without an assistant'],
      ['2. Data structures and algorithms', 'First or second year', 'Solutions reasoned out loud, with their costs'],
      ['3. Git and team workflow', 'Alongside rung 2', 'A repository history a reviewer can follow'],
      ['4. A track: software, data or AI', 'Second year onwards', 'An application, an analysis or a measured model'],
      ['5. Portfolio and interview practice', 'Before internships', 'Public work and the ability to explain it']
    ] },
    left: { h3: 'Why fluency without an assistant comes first', ps: [
      'A student who cannot write a loop, a function or a small class without help cannot judge what an assistant writes. The first rung is short for most students, but skipping it makes every later one shaky.',
      'The complete order of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Around blocks, deadlines and exams', ps: [
      'Dutch programmes run in blocks or periods with exams at the end of each. Most students take two lessons a week and pause in exam weeks, and one-to-one lessons can move with the timetable.',
      'Students writing a thesis with a technical part often take a short run of one-to-one lessons aimed at exactly that project.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Eleven live courses for students, grouped by track',
    lede: 'Each card opens the full course with its schedule and fee. The free first lesson places the student on the right rung.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'What every technical student needs', courses: [
        { code: 'STUDENT / CORE / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'Python from first principles to advanced features, for students whose degree assumed it or skipped it.' },
        { code: 'STUDENT / CORE / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data Structures and Algorithms', blurb: 'Arrays to graphs, sorting to dynamic programming, with the reasoning interviews look for.' },
        { code: 'STUDENT / CORE / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub for College Students', blurb: 'Branching, pull requests, reviews and conflicts, the team skills group projects and internships assume.' }
      ] },
      { num: 'II', h3: 'Software development', sub: 'For students heading into engineering roles', courses: [
        { code: 'STUDENT / SW / 01', slug: 'full-stack-web-development-masterclass-college', title: 'Full Stack Developer Course', blurb: 'Front end, back end and hosting together, finished as an application other people can actually use.' },
        { code: 'STUDENT / SW / 02', slug: 'react-js-complete-masterclass-college', title: 'React Masterclass', blurb: 'Modern front-end development from JavaScript fundamentals to production-ready React.' },
        { code: 'STUDENT / SW / 03', slug: 'complete-java-programming-masterclass-college', title: 'Java Course for College', blurb: 'Core Java to Spring Boot, for students on computing degrees and those heading for back-end roles.' },
        { code: 'STUDENT / SW / 04', slug: 'complete-flutter-app-development-masterclass-college', title: 'Flutter Course', blurb: 'Dart and Flutter for cross-platform apps, a strong portfolio piece for a mobile-minded student.' }
      ] },
      { num: 'III', h3: 'Data and AI', sub: 'For students who want to build models, not only use them', courses: [
        { code: 'STUDENT / AI / 01', slug: 'data-science-complete-masterclass-college', title: 'Data Science Course', blurb: 'Statistics, SQL, feature engineering and modelling, with a portfolio a hiring manager can assess quickly.' },
        { code: 'STUDENT / AI / 02', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'From classical methods to deep learning, with careful evaluation and deployment.' },
        { code: 'STUDENT / AI / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'Language models from the inside, retrieval over your own sources, and agents designed so their mistakes surface in logs rather than in production.' },
        { code: 'STUDENT / AI / 04', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Vibe Coding for College', blurb: 'Full stack, AI and algorithms built with AI assistance, and every line of the output read and tested.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Around lectures, labs and exam weeks',
    lede: 'Our teachers are based in India, where the clock never moves, so a student in Leiden or Enschede is three and a half hours behind them from the end of March to the end of October and four and a half behind for the rest of the year. Most students book an evening or weekend slot, set during the opening lesson and moved whenever a new block brings a new rooster.',
    slots: [
      { time: 'Evening', l: 'After lectures, Dutch time, arranged with the teacher. The most common choice for students.' },
      { time: 'Weekend', l: 'Saturday or Sunday. Useful in weeks full of practicals and group work.' },
      { time: 'Daytime gaps', l: 'Where a timetable leaves a free afternoon and a teacher is available, often for one-to-one lessons.' }
    ],
    cells: [
      { h3: 'A free first lesson', p: 'You solve a real problem while the teacher watches your approach. That shows where to start better than your year of study does.' },
      { h3: 'Groups of five to ten', p: 'Students from several countries at the same level, a useful rehearsal for the international teams many graduates join.' },
      { h3: 'One to one for thesis work', p: 'For a thesis with a technical part, a specific project, an interview deadline, or a timetable that changes every block.' },
      { h3: 'Pause for exams', p: 'Lessons can pause during exam weeks and resume afterwards without losing your place.' },
      { h3: 'In English', p: 'The language of programming, of most Dutch master\'s programmes in technical fields, and of the tech industry here.' },
      { h3: 'A portfolio in Git', p: 'Everything goes into your own GitHub repository, with a history an employer can read.' }
    ]
  },

  projectsH2: 'Work our students have published',
  projectsLede: 'A handful of the things our students have shipped and left running at public addresses. The full collection lives on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Straight from Google, in the words of the students and parents who left them; none were requested for payment or edited by us.',

  fees: {
    h2: 'What it costs a student',
    lede: 'Monthly, in US dollars, at the same rates as every country outside India. Students here pay the international rate like everyone else, with no registration charge and no annual commitment. Copilot Studio is taught privately, so it carries the private rate.',
    free: ['A real lesson, not a sales call', 'Places you on the right rung', 'No card or bank details'],
    group: ['Five to ten students at one level', 'The same live teacher each week', 'Code reviewed every week', 'A certificate at the end'],
    one: ['A teacher for you alone', 'Pace set by your project or deadline', 'The only format for Copilot Studio']
  },

  faq: {
    eyebrow: 'Questions from students',
    h2: 'What students in the Netherlands ask before starting',
    items: [
      { q: 'Everyone uses AI for coursework now. Why take coding lessons?', a: 'Because that is exactly why. CBS found 74 percent of Dutch 18-to-25-year-olds in education use AI for their studies. The advantage now lies in what AI cannot do for you: reasoning about algorithms, debugging, team workflows and explaining your work in an interview.' },
      { q: 'I study economics, not computer science. Is this for me?', a: 'Yes. Many students in economics, the sciences and the social sciences take Python and data science with us, because their degree uses data but teaches little programming.' },
      { q: 'Can you help with my thesis?', a: 'We can teach the programming and data skills a thesis needs, usually one to one and aimed at your project. We do not write coursework or theses for students.' },
      { q: 'I am an international student. Does the internationalisation bill affect these classes?', a: 'No. Our classes are independent of any university and are taught in English to students of every nationality. The bill, 36.555, concerns the language of teaching at Dutch institutions and was still before the Tweede Kamer at the time of writing.' },
      { q: 'Will this prepare me for technical interviews?', a: 'That is what the data structures and algorithms course is for: solving problems out loud, with their costs, the way interviews ask.' },
      { q: 'Can lessons fit around exam weeks?', a: 'Yes. Most students pause during exams and pick up afterwards, and one-to-one lessons can move with each new block.' },
      { q: 'Are you connected with any Dutch university?', a: 'No. We quote public figures and pages, but we have no relationship with any university, hogeschool or student organisation.' },
      { q: 'What does it cost?', a: 'A group seat is USD 100 per month and private lessons USD 150 per month, charged in dollars. Nobody signs up for a year, there is nothing to pay to join, and the opening lesson is free.' },
      { q: 'When are the lessons?', a: 'Usually after lectures or at the weekend. India is three and a half hours ahead of Dutch summer time and four and a half ahead of winter time.' },
      { q: 'What happens after I send the form?', a: 'A member of the team rings you back at a Dutch hour to fix the opening lesson. Payment and a regular slot only come up after you have sat that lesson and chosen to carry on.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for students in the Netherlands',
    lede: 'Pages that go deeper into one track or one place.',
    items: [
      { href: '/ai-ml-course-for-college-students', label: 'AI and ML for college students', p: 'The machine learning route for students, in more depth.' },
      { href: '/c-plus-plus-classes-for-college-students', label: 'C++ for college students', p: 'Systems programming for students on technical degrees.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The country-wide academy, with the informatica figures and the Groningen AI factory.' },
      { href: '/ai-and-python-academy-groningen', label: 'AI and Python Academy, Groningen', p: 'What a university AI first year asks of a student.' },
      { href: '/coding-and-ai-classes-for-adults-netherlands', label: 'Coding and AI classes for adults', p: 'For graduates and working adults.' },
      { href: '/coding-classes-in-netherlands', label: 'Coding classes in the Netherlands', p: 'Every Dutch city and province page in one place.' }
    ]
  },

  start: {
    h2: 'Try one lesson, free',
    lede: 'Send us a phone number and a member of our team rings back during Dutch working hours or early evening. In the lesson itself a teacher sets you a genuine problem, and when it ends you know which rung to begin on.',
    readFirst: 'Rather browse before booking? The <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> shows the order of subjects, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a lesson, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Messaging on WhatsApp costs a Dutch student nothing and is the quickest route to a reply. It is an Indian number: there is no campus, office or address of ours anywhere in the Netherlands.',
    formNote: 'Just a phone call to set a time. No card, nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Netherlands', links: [
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' },
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/coding-and-ai-classes-for-adults-netherlands', label: 'Coding for adults' },
        { href: '/coding-classes-for-teens-netherlands', label: 'Coding for teens' }
      ] },
      { h4: 'For students', links: [
        { href: '/ai-ml-course-for-college-students', label: 'AI and ML for students' },
        { href: '/c-plus-plus-classes-for-college-students', label: 'C++ for students' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching students in the Netherlands on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-ccs .ag-hero-grid { gap: clamp(1.25rem, 3.4vw, 3rem); }
.ag-root.ag-ccs .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-ccs .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ccs .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-ccs .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-ccs .ag-table caption { text-align: left; }
.ag-root.ag-ccs .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-ccs .ag-slots { gap: 1.3rem; }
`,

  mustMention: ['74 percent', '25 February 2026', 'Nuffic', '129,764', '48,139', '16,709', 'first time since 2006', '1,993', 'Wet internationalisering in balans', '36.555', '3 July 2025', '18,241']
};
