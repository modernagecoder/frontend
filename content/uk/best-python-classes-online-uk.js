'use strict';
// Best Python classes online in the UK (ag- door, national; UK cluster Phase 3, Best group).
// Facts read at primary sources on 20 September 2026:
//  - Pearson Edexcel, GCSE (9-1) Computer Science (1CP2) specification, read from Pearson's PDF:
//    * "We have adopted Python programming language as the vehicle to explore, learn and assess the
//      aspects of problem solving and programming covered in this qualification. Python is popular and
//      commonly used in education."
//    * "The requirements of this qualification can be met using the Python 3 programming language.
//      Centres are advised to choose the most up-to-date version of an interpreter that supports
//      Python 3."
//    * Paper 2, Application of Computational Thinking: "Students will complete this assessment onscreen
//      using their Integrated Development Environment (IDE) of choice"; they are given coding files, a
//      hard copy of the question paper and the Programming Language Subset document; "Students should
//      then answer the questions onscreen using Python 3"; "This assessment consists of six compulsory
//      questions"; "Students must not have access to the internet."
//    * The Practical Programming Statement: "Centres are required to complete a Practical Programming
//      Statement (PPS), which confirms they have taken reasonable steps to ensure that each student
//      sitting our GCSE in Computer Science has had the opportunity to demonstrate their programming
//      skills in terms of design, write, test and refine programs in Python during their course of
//      study. The PPS should be completed by a member of the senior leadership team at the centre.
//      Failure by a centre to provide a completed PPS to us in a timely manner will result in potential
//      malpractice and/or maladministration."
//  - Pearson Edexcel, 1CP2/02 Programming Language Subset, Version 6, PLS Booklet, 18 pages:
//    * "The Programming Language Subset (PLS) is a document that specifies which parts of Python 3 are
//      required in order that the assessments can be undertaken with confidence. Students familiar with
//      everything in this document will be able to access all parts of the Paper 2 assessment. This does
//      not stop a teacher/student from going beyond the scope of the PLS into techniques and approaches
//      that they may consider to be more efficient or engaging."
//    * "Pearson will not go beyond the scope of the PLS when setting assessment tasks. Any student
//      successfully using more esoteric or complex constructs or approaches not included in this
//      document will still be awarded marks in Paper 2 if the solution is valid."
//    * Contents include comments, identifiers, data types and conversion, constants, structured data
//      types, dimensions, operators, and library modules: random, math, time and turtle graphics.
// Cross-references to sibling pages rather than restating them: Wales names Python in its rules
// (coding-and-ai-classes-in-wales), CCEA permits "Python, Java or C#" (northern-ireland).
// Spine: the examined Python is a published subset, and it is eighteen pages long. Nobody in the UK
// mandated Python nationally; the boards, the schools and one nation's rules arrived at it separately,
// and the one board that built its whole practical paper around it also published exactly which parts
// of the language it will use. A student who has met those parts has met the paper.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'PYTHON', blurb: 'The examined Python is a published subset. What is in it, who mandated the language and who merely chose it, and how we teach past the edges.' },
  slug: 'best-python-classes-online-uk',
  code: 'bpu',
  accent: '#115F12',
  accentRationale: 'Python, UK: a deep forest green from the solver (6.38:1 on every paper tint), the widest gap left and distinct from the olive on the best-online page',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Best Python classes online in the UK',
  title: 'Best Python Classes Online in the UK | Live, All Ages',
  description: 'Python classes online for UK learners of every age, taught live against what the exam boards actually examine, with a teacher who reads the code. First class free.',
  ogDescription: 'One UK board publishes exactly which parts of Python 3 its practical paper will use. It runs to eighteen pages. Here is what is in it.',
  twitterDescription: 'Live online Python classes for UK learners, children to adults. First class free.',
  pageName: 'Best Python Classes Online in the UK',
  webPageDescription: 'Live online Python classes for learners in the UK, set against the published programming language subset one exam board uses and against what each nation mandates.',
  courseDescription: 'Live online Python teaching for UK learners from primary school to adult, covering the constructs UK qualifications examine and the work that goes well beyond them.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Python classes, UK',
  navLinks: [
    { href: '#subset', label: 'The examined subset' },
    { href: '#who', label: 'Who mandates Python' },
    { href: '#beyond', label: 'Past the edges' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Python &middot; Primary school to adult',
  h1: 'Best Python classes online in the UK',
  lede: 'Here is something most UK parents never discover. One of the exam boards has published a document that states exactly which parts of Python 3 its practical paper will draw on. It runs to eighteen pages, it names the library modules it will use, and the board commits in writing not to go beyond it. That changes what a Python class for a British learner should look like: there is a known floor, it is public, and the interesting work begins above it rather than inside it. This page sets out what is in that subset, which UK qualifications actually require Python and which merely allow it, and how we teach so that a learner is fluent well past the edges of any published list.',
  secondaryCta: { href: '#who', label: 'Who mandates Python' },
  wa: 'Hello Modern Age Coders, I would like a free first Python class for a learner in the UK.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Python from age 10 to adult',
  spec: [
    ['Language', 'Python 3'],
    ['Ages', 'About 10 upwards'],
    ['Level', 'First program to advanced'],
    ['Exams', 'English boards, WJEC, CCEA, Qualifications Scotland'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Habit', 'Predict, run, compare'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Python became the default language of British school computing without anybody legislating for it. Wales names it in the rules of its new GCSE. Northern Ireland permits it alongside Java and C#. In England the boards choose, and one of them, Pearson Edexcel, adopted Python as what it calls the vehicle for the whole qualification and then published a Programming Language Subset stating which parts of Python 3 its on-screen paper will use, with a written commitment not to exceed it. Knowing that list exists is useful. Building a year of teaching around only that list is not, because the subset is a floor and every interesting problem sits above it. We teach Python live online to learners from about ten upwards, in groups of five to ten at one level or one to one. The first lesson is free; after that it is USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three Python courses for UK learners',
    lede: 'The same language at three different starting points. Each card opens a full syllabus.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PY / 01', title: 'Python for Younger Learners', note: 'The first crossing from blocks to a keyboard, usually somewhere between Year 5 and Year 8, taken slowly enough that nothing is guessed at.' },
      { course: 'python-complete-masterclass-teens', code: 'PY / 02', title: 'Python for Teens', note: 'The whole language for secondary students, well past whatever subset an exam board has published.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PY / 03', title: 'Python for Adults, Zero to Advanced', note: 'A complete route for an adult who has never programmed and wants to end up somewhere genuinely useful.' }
    ]
  },

  sections: [
    {
      id: 'subset', tint: 'tint', eyebrow: 'The examined subset',
      h2: 'Eighteen pages that tell you what the paper will use',
      lede: 'Pearson Edexcel publishes a Programming Language Subset for its on-screen paper. Everything quoted here comes from version 6 of that booklet and from the specification itself.',
      body: [
        { kind: 'two',
          left: [
            'The board states its purpose plainly. The subset "specifies which parts of Python 3 are required in order that the assessments can be undertaken with confidence", and "students familiar with everything in this document will be able to access all parts of the Paper 2 assessment". Then it makes a promise that is rarer than it should be: "Pearson will not go beyond the scope of the PLS when setting assessment tasks."',
            'It also refuses to turn the list into a cage. Going further is explicitly allowed, and "any student successfully using more esoteric or complex constructs or approaches not included in this document will still be awarded marks in Paper 2 if the solution is valid".'
          ],
          right: [
            'The paper it governs is unusual in England. Candidates sit it on screen, using "their Integrated Development Environment (IDE) of choice", with coding files supplied, a printed question paper, the subset booklet as an insert, and six compulsory questions. They answer "onscreen using Python 3", and they "must not have access to the internet".',
            'So the assessment is a person and an IDE and nothing else, which is a fair description of what programming actually is.'
          ] },
        { kind: 'table', mt: true, caption: 'What the subset booklet covers, from its own contents page', head: ['Area', 'What is listed'], rows: [
          ['The basics', 'Comments, identifiers, primitive data types and conversion, constants, and combining declaration with initialisation'],
          ['Data', 'Structured data types and dimensions'],
          ['Operators', 'Arithmetic and the rest, set out explicitly'],
          ['Library modules', 'Random, math, time, and turtle graphics'],
          ['Turtle in detail', 'Window and canvas, creation and movement, positioning and direction, filling shapes, pen control, circles and colours']
        ] },
        { kind: 'p', text: 'The turtle section is the giveaway. Several pages of an eighteen-page booklet are devoted to drawing on a canvas, which tells you the paper expects visible output that a student can look at and judge. That is a good way to assess a sixteen-year-old and a poor way to prepare one, because a learner who can only draw squares has learnt the booklet rather than the language.' },
        { kind: 'source', html: 'Sources, read 20 September 2026: <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/edexcel-gcses/computer-science-2020.html" rel="noopener" target="_blank">Pearson Edexcel GCSE (9-1) Computer Science (1CP2)</a>, the specification and the 1CP2/02 Programming Language Subset booklet, version 6.' }
      ]
    },
    {
      id: 'who', tint: 'deep', eyebrow: 'Who mandates Python',
      h2: 'Nobody legislated for it, and almost everybody uses it',
      lede: 'Four school systems, four different answers, and a language that won without a decision ever being taken nationally.',
      body: [
        { kind: 'table', caption: 'Where Python stands in each UK nation', head: ['Nation', 'What the rules say', 'What that means for a learner'], rows: [
          ['Wales', 'The new Made-for-Wales GCSE names Python in its own rules for the programming examination', 'No choice, and no ambiguity. See <a class="ag-inline-link" href="/coding-and-ai-classes-in-wales">coding and AI classes in Wales</a>'],
          ['Northern Ireland', 'CCEA permits one of three languages in the practical unit', 'The school picks. See <a class="ag-inline-link" href="/coding-and-ai-classes-in-northern-ireland">coding and AI classes in Northern Ireland</a>'],
          ['England', 'The boards decide; Pearson Edexcel adopted Python "as the vehicle" for its whole qualification', 'Ask which board, then which language. See <a class="ag-inline-link" href="/coding-and-ai-classes-in-england">coding and AI classes in England</a>'],
          ['Scotland', 'Qualifications are written around concepts rather than a named language', 'In practice most schools teach Python. See <a class="ag-inline-link" href="/coding-and-ai-classes-in-scotland">coding and AI classes in Scotland</a>']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Pearson\'s reasoning is worth quoting because it is refreshingly unromantic: "Python is popular and commonly used in education." Not fastest, not most rigorous, not most employable. Popular, and already in the building.',
            'The board is equally clear that the language is not the subject. "Mastering programming involves much more than simply learning the syntax and semantics of a programming language", it says, before listing problem solving, treating mistakes as material to learn from, and working with others.'
          ],
          right: [
            'There is one more requirement in that specification that most families never hear about, and it exists because practical programming is easy to quietly drop. Centres must complete a Practical Programming Statement confirming they have taken reasonable steps to ensure each candidate "has had the opportunity to demonstrate their programming skills in terms of design, write, test and refine programs in Python during their course of study".',
            'It has to be signed by a member of the senior leadership team, and failing to send one in on time counts as "potential malpractice and/or maladministration". A board does not build a mechanism like that unless it has reason to.'
          ] },
        { kind: 'p', text: 'That single requirement tells a parent something useful. The board considers it a real risk that a school might teach the theory and skimp the programming. If a family wants to know whether their own school is skimping, the honest test is simple: ask the child to show you something they wrote themselves this term.' }
      ]
    },
    {
      id: 'beyond', tint: '', eyebrow: 'Past the edges',
      h2: 'Teaching the language, not the booklet',
      lede: 'A published subset is a floor to clear, not a syllabus to sit inside.',
      body: [
        { kind: 'table', caption: 'Where our Python teaching goes beyond what any UK subset lists', head: ['In the exam subsets', 'What we also teach', 'Why it matters'], rows: [
          ['Lists and simple structures', 'Dictionaries used properly, nesting, and choosing the structure before writing the loop', 'Most real problems are lookups, and a student who only knows lists solves them badly'],
          ['Reading and writing text files', 'Structured formats, error handling and what happens when the file is missing', 'Programs that only work on a perfect day are not programs'],
          ['Functions and parameters', 'Modules, imports and writing code that another person can reuse', 'This is the difference between a script and something worth keeping'],
          ['Turtle graphics', 'Real libraries for data and charts, and the judgement to say what a chart does not show', 'Visible output is a good teaching device and a poor final destination'],
          ['Test your solution', 'Writing tests before the code, and deliberately breaking your own work', 'The habit that separates a student who checks from one who hopes']
        ] },
        { kind: 'two', mt: true,
          left: [
            'None of this is at the expense of the exam. A learner who can use a dictionary sensibly will use a list correctly, and a learner who writes tests will not lose marks for an untested edge case. Teaching upwards covers the paper on the way past.',
            'The method is the same at every level. A student says what the code will do before running it, runs it, and compares. Being wrong out loud in a small group, week after week, is what produces someone who checks by reflex rather than by instruction.'
          ],
          right: [
            'For younger learners the entry point is different but the destination is not. A ten-year-old moving from blocks to typed Python needs patience and short programs with visible results, which is exactly what the <a class="ag-inline-link" href="/courses/python-ai-kids-masterclass">Python course for younger learners</a> is built around.',
            'For adults, the useful first target is usually automating something tedious from their own work rather than a toy exercise. The <a class="ag-inline-link" href="/best-coding-classes-for-adults-uk">adults page</a> covers how that works alongside a job.'
          ] },
        { kind: 'p', text: 'One honest limit. We teach Python, and we teach it well; we do not teach C# and we do not run a Java course aimed at CCEA candidates. If a school has chosen one of those, say so in the free lesson and we will tell you straight whether we are the right fit, because the constructs transfer but the syntax practice does not.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Five steps through Python',
    lede: 'The step a learner starts on is decided by what they can already write unaided, not by their age or school year.',
    table: { caption: 'The Python ladder, and what each step looks like finished', head: ['Step', 'What is being learnt', 'What the learner can show'], rows: [
      ['1. First programs', 'Input, output, variables and the idea that order matters', 'A short program written from an empty file, and an error message read rather than feared'],
      ['2. Decisions and repetition', 'Conditions, loops, and when each is the right tool', 'A program that behaves differently on different input, and a prediction made before running it'],
      ['3. Structure', 'Functions, lists, dictionaries and files', 'Something long enough to need planning, split into parts that each do one job'],
      ['4. Real libraries', 'Working with data, charts and external code', 'A published dataset loaded, questioned and charted, with the limits of the chart stated'],
      ['5. Judgement', 'Testing, refactoring and reviewing code including code from an AI tool', 'A review of somebody else\'s program with reasons, and their own work deliberately broken and fixed']
    ] },
    left: { h3: 'Exams sit around step three', ps: [
      'Most UK qualifications assess somewhere between steps two and three, which is why a learner working at step four finds the paper straightforward rather than stressful.',
      'The full topic order past school is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Nobody repeats a step they own', ps: [
      'A student who arrives already writing functions starts at step three. Placement follows the work, and the free lesson is where it is decided.',
      'Moving up happens when the evidence in a learner\'s code says so, not on a fixed schedule.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine Python and Python-adjacent courses',
    lede: 'Grouped by where a learner is when they begin. Every syllabus sits behind its card.',
    bands: [
      { num: 'I', h3: 'Learning the language', sub: 'First programs to full fluency', courses: [
        { code: 'UK / PY1 / 01', slug: 'python-ai-kids-masterclass', title: 'Python for younger learners', blurb: 'The move from blocks to a keyboard, with short programs whose results can be seen immediately.' },
        { code: 'UK / PY1 / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens, in full', blurb: 'The whole language for secondary students, taught by predicting before running.' },
        { code: 'UK / PY1 / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python for adults', blurb: 'A complete beginner route written for people with jobs and limited evenings.' }
      ] },
      { num: 'II', h3: 'Doing something with it', sub: 'Data, the web and automation', courses: [
        { code: 'UK / PY2 / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Published datasets cleaned, charted and argued with, base lines included.' },
        { code: 'UK / PY2 / 02', slug: 'python-web-development-django-flask-course', title: 'Web development with Python', blurb: 'A working site with data behind it, deployed where other people can use it.' },
        { code: 'UK / PY2 / 03', slug: 'python-ai-automation-masterclass-college', title: 'Automation with Python', blurb: 'The repetitive parts of a real week turned into something that runs on its own.' }
      ] },
      { num: 'III', h3: 'Exams and depth', sub: 'For candidates and for people going further', courses: [
        { code: 'UK / PY3 / 01', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'Theory and programming taught to whichever board a school has actually chosen.' },
        { code: 'UK / PY3 / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'The problems more typing will not solve, worked on paper before any code appears.' },
        { code: 'UK / PY3 / 03', slug: 'pcep-pcap-python-certification-course', title: 'Python certification preparation', blurb: 'For learners who want an independent credential in the language alongside school or work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'One teacher, one slot, and code read every week',
    lede: 'Teachers work from India, where the clocks do not move, so the UK is five and a half hours behind in winter and four and a half in summer. Families pick a slot and keep it.',
    slots: [
      { time: 'After school', l: 'The usual choice for school-age learners.' },
      { time: 'Evening', l: 'For sixth formers and for adults once the day is over.' },
      { time: 'Weekend morning', l: 'The right slot for a long build that should not be interrupted.' }
    ],
    cells: [
      { h3: 'Predict before you run', p: 'Nothing is executed until the learner has said what they expect. It is the fastest way to find out what they actually believe.' },
      { h3: 'Code read by a person', p: 'Every week, with reasons. A recorded course cannot tell a learner why their working program is badly built.' },
      { h3: 'Boards named, not guessed', p: 'Teachers work to the qualification a school has chosen, whether that is an English board, WJEC, CCEA or Qualifications Scotland, which replaced SQA in February 2026.' },
      { h3: 'AI used openly', p: 'Permitted once a learner can predict the answer, and logged: what the tool offered, what was kept, and why.' },
      { h3: 'Groups by level', p: 'Five to ten learners at the same stage, reading each other\'s code and disagreeing about it.' },
      { h3: 'Work kept publicly', p: 'Projects go to the learner\'s own repository, which is what a school, university or employer can actually open.' }
    ]
  },

  projectsH2: 'Python projects our learners have published',
  projectsLede: 'Four examples built in lessons. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Lifted from Google word for word. No review here was paid for or requested.',

  fees: {
    h2: 'What Python classes cost in the UK',
    lede: 'One monthly charge, quoted in US dollars for every family outside India. The free lesson comes first and nothing is taken until a course and a slot are agreed.',
    free: ['A full lesson with a teacher', 'An honest view of the right starting step', 'No card details requested'],
    group: ['Five to ten learners at one step', 'The same teacher throughout', 'Code read and commented on weekly', 'A certificate when a course finishes'],
    one: ['One teacher and one learner', 'Planned around exam dates or a specific target', 'Right for deadlines and for learners well ahead']
  },

  faq: {
    eyebrow: 'Questions about Python in the UK',
    h2: 'What UK families ask about Python',
    items: [
      { q: 'Is Python required for GCSE Computer Science?', a: 'It depends on the board and the nation. Pearson Edexcel adopted Python as the vehicle for its qualification and examines Paper 2 on screen in Python 3. Wales names Python in the rules of its new GCSE. CCEA in Northern Ireland permits one of three languages. Scottish qualifications are written around concepts rather than a named language.' },
      { q: 'What is the Programming Language Subset?', a: 'A booklet from Pearson Edexcel stating which parts of Python 3 its Paper 2 will use. Version 6 runs to eighteen pages, and the board commits not to go beyond it when setting assessment tasks.' },
      { q: 'Can a student use features outside the subset?', a: 'Yes. Pearson states that a student using more complex constructs not in the document will still be awarded marks if the solution is valid.' },
      { q: 'What does the on-screen paper actually involve?', a: 'Six compulsory questions answered on screen in the student\'s own IDE, with coding files supplied, a printed question paper, the subset booklet as an insert, and no access to the internet.' },
      { q: 'What is a Practical Programming Statement?', a: 'A declaration a centre must complete, signed by a member of its senior leadership team, confirming each candidate had the opportunity to design, write, test and refine programs in Python during the course. Not returning one on time counts as potential malpractice or maladministration.' },
      { q: 'Should we only learn what is in the subset?', a: 'No. The subset is a floor. Dictionaries, error handling, real libraries and testing all sit above it, and a learner who has them finds the paper straightforward rather than tight.' },
      { q: 'At what age can a child start Python?', a: 'Around ten for most children, after a year or two of block-based coding. Some are ready earlier; the free lesson is where that is judged rather than guessed.' },
      { q: 'Do you teach Java or C# for CCEA?', a: 'No. We teach Python. The constructs transfer between the three languages but the syntax practice does not, so we will say plainly in the free lesson if we are the wrong fit.' },
      { q: 'Is Python enough for A level or Higher?', a: 'It is the usual language for both and it is enough to do well, though at that level the subject is algorithms and data structures rather than syntax, and we teach those on paper first.' },
      { q: 'What does it cost?', a: 'The opening lesson is free. A group place afterwards runs at USD 100 each month, and a teacher to yourself at USD 150, charged month by month with nothing taken in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Each takes one part of this further.',
    items: [
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The national page, and the index of every UK page we publish.' },
      { href: '/coding-and-ai-classes-in-wales', label: 'Coding and AI classes in Wales', p: 'The one UK nation that names Python in its own rules.' },
      { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Coding and AI classes in Northern Ireland', p: 'Where Python is one of three permitted languages and the school chooses.' },
      { href: '/best-coding-classes-for-teens-uk', label: 'Coding classes for teens in the UK', p: 'What Ofcom found about British teenagers and AI this year.' },
      { href: '/best-coding-classes-for-adults-uk', label: 'Coding classes for adults in the UK', p: 'Where the funded routes stop, and what is left.' },
      { href: '/coding-roadmap', label: 'The coding roadmap', p: 'What order topics come in, well past school.' }
    ]
  },

  start: {
    h2: 'Try a Python lesson, free',
    lede: 'Leave a number and we will come back at a UK time that suits. The lesson is real teaching on a real problem, and it ends with a straight view of the right starting step.',
    readFirst: 'Happier reading than talking? Each <a class="ag-inline-link" href="/courses">course page</a> carries its own syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the method and its limits, and the sequence of topics runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.',
    note: 'Most people reach us fastest on WhatsApp, which costs a UK mobile nothing. The number is registered in India and we would rather say that up front than have you spot it later.',
    formNote: 'No card, no contract. We come back once, with a time.'
  },

  footer: {
    cols: [
      { h4: 'United Kingdom', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/coding-and-ai-classes-in-england', label: 'England' },
        { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
        { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' }
      ] },
      { h4: 'Python', links: [
        { href: '/best-coding-classes-for-teens-uk', label: 'Python for teens' },
        { href: '/best-coding-classes-for-adults-uk', label: 'Python for adults' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live Python lessons for UK learners, on UK time'
  },

  personalityCss: `
.ag-root.ag-bpu .ag-hero h1 { letter-spacing: -0.026em; font-weight: 700; }
.ag-root.ag-bpu .ag-capsule { border-left-width: 5px; border-top: 2px solid var(--ag-accent); }
.ag-root.ag-bpu .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-bpu .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-bpu .ag-table th { letter-spacing: 0.015em; }
.ag-root.ag-bpu .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-bpu .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  mustMention: ['Programming Language Subset', 'eighteen pages', 'will not go beyond the scope', 'Practical Programming Statement', 'senior leadership team', 'six compulsory questions', 'must not have access to the internet', 'as the vehicle', 'turtle graphics', 'Python 3'],

  dossier: {
    curriculumAuthority: 'United Kingdom, Python. Pearson Edexcel, GCSE (9-1) Computer Science (1CP2) specification, read from Pearson\'s own PDF on 20 September 2026: "We have adopted Python programming language as the vehicle to explore, learn and assess the aspects of problem solving and programming covered in this qualification. Python is popular and commonly used in education."; "The requirements of this qualification can be met using the Python 3 programming language. Centres are advised to choose the most up-to-date version of an interpreter that supports Python 3."; "Mastering programming involves much more than simply learning the syntax/semantics of a programming language." Paper 2, Application of Computational Thinking: "Students will complete this assessment onscreen using their Integrated Development Environment (IDE) of choice"; coding files, a hard copy of the question paper and the Programming Language Subset are supplied; "Students should then answer the questions onscreen using Python 3"; "This assessment consists of six compulsory questions"; "Students must not have access to the internet." Practical Programming Statement: "Centres are required to complete a Practical Programming Statement (PPS), which confirms they have taken reasonable steps to ensure that each student sitting our GCSE in Computer Science has had the opportunity to demonstrate their programming skills in terms of design, write, test and refine programs in Python during their course of study. The PPS should be completed by a member of the senior leadership team at the centre. Failure by a centre to provide a completed PPS to us in a timely manner will result in potential malpractice and/or maladministration." Pearson Edexcel 1CP2/02 Programming Language Subset, Version 6, PLS Booklet, 18 pages: "The Programming Language Subset (PLS) is a document that specifies which parts of Python 3 are required in order that the assessments can be undertaken with confidence. Students familiar with everything in this document will be able to access all parts of the Paper 2 assessment. This does not stop a teacher/student from going beyond the scope of the PLS into techniques and approaches that they may consider to be more efficient or engaging."; "Pearson will not go beyond the scope of the PLS when setting assessment tasks. Any student successfully using more esoteric or complex constructs or approaches not included in this document will still be awarded marks in Paper 2 if the solution is valid." Contents: comments, identifiers, data types and conversion, primitive types, conversion, constants, combining declaration and initialisation, structured data types, dimensions, operators including arithmetic, and library modules random, math, time and turtle graphics, with turtle broken into window and canvas, creation, visibility and movement, positioning and direction, filling shapes, controlling the pen, circles and colours.',
    localProject: 'The examined Python is a published subset, and it is eighteen pages long. No UK authority mandated Python nationally: Wales named it in the rules of one qualification, CCEA listed it among three, the English boards each chose, and Scottish qualifications name no language at all, yet it became the default everywhere. Pearson Edexcel went furthest, adopting it as "the vehicle" for the whole qualification and then publishing exactly which parts of Python 3 its on-screen paper will draw on, with a written promise not to exceed that scope and an explicit allowance for students who go beyond it. The page treats the subset as a floor rather than a syllabus, and the turtle section is used to make the argument: several pages of an eighteen-page booklet on drawing means the paper wants visible output, which is a good way to assess a teenager and a poor way to prepare one. A second find, the Practical Programming Statement, shows a board building a signed declaration from a senior leader because it considers skimped practical programming a real risk. Lesson family: a published floor that a class should clear rather than occupy; distinct from the teens page (base lines), the adults page (a regression against age) and the best-online page (seven checks).',
    requiredMentions: ['Programming Language Subset', 'will not go beyond the scope', 'Practical Programming Statement', 'six compulsory questions', 'turtle graphics'],
    sources: [
      { claim: 'Pearson Edexcel GCSE (9-1) Computer Science (1CP2) specification: Python adopted as the vehicle, Python 3 requirement, the on-screen Paper 2 arrangements, and the Practical Programming Statement.', url: 'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/computer-science-2020.html' },
      { claim: 'Pearson Edexcel 1CP2/02 Programming Language Subset, Version 6: what the subset is for, the commitment not to exceed it, the allowance for going beyond it, and the contents including the library modules.', url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/Computer%20Science/2020/exam-materials/1cp2-02-programming-language-subset-pls-version-6-summer-2025.pdf' }
    ],
    rejectedClaims: [
      'Which programming languages AQA and OCR permit at GCSE: their specifications were not read for this build, so the page says only that the English boards choose and names the one board whose documents it read.',
      'The share of UK schools teaching Python: no primary source was found measuring it, so the page says Python became the default without quantifying it.',
      'Entry numbers or results for any qualification: those belong to the best-online page and to JCQ, whose site blocks automated reads.',
      'That learning Python guarantees an exam outcome: the page claims a floor cleared, not a grade.',
      'Anything about Scottish qualification content beyond that they are written around concepts rather than a named language: the SQA documents were not read for this build.',
      'Examination entry fees: published in pounds, and this site prices in one currency.'
    ]
  }
};
