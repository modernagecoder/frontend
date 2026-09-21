'use strict';
// Key Stage 3 computing tuition online (ag- door, England; UK cluster Phase 3).
// Source: GOV.UK, "National curriculum in England: computing programmes of study", statutory guidance
// first published 11 September 2013, read raw from gov.uk. The key stage 3 programme of study, verbatim
// and in full. Pupils should be taught to:
//  - "design, use and evaluate computational abstractions that model the state and behaviour of
//    real-world problems and physical systems"
//  - "understand several key algorithms that reflect computational thinking [for example, ones for
//    sorting and searching]; use logical reasoning to compare the utility of alternative algorithms for
//    the same problem"
//  - "use 2 or more programming languages, at least one of which is textual, to solve a variety of
//    computational problems; make appropriate use of data structures [for example, lists, tables or
//    arrays]; design and develop modular programs that use procedures or functions"
//  - "understand simple Boolean logic [for example, AND, OR and NOT] and some of its uses in circuits and
//    programming; understand how numbers can be represented in binary, and be able to carry out simple
//    operations on binary numbers [for example, binary addition, and conversion between binary and
//    decimal]"
//  - "understand the hardware and software components that make up computer systems, and how they
//    communicate with one another and with other systems"
//  - "understand how instructions are stored and executed within a computer system; understand how data
//    of various types (including text, sounds and pictures) can be represented and manipulated
//    digitally, in the form of binary digits"
//  - "undertake creative projects that involve selecting, using, and combining multiple applications,
//    preferably across a range of devices, to achieve challenging goals, including collecting and
//    analysing data and meeting the needs of known users"
//  - "create, reuse, revise and repurpose digital artefacts for a given audience, with attention to
//    trustworthiness, design and usability"
//  - "understand a range of ways to use technology safely, respectfully, responsibly and securely,
//    including protecting their online identity and privacy; recognise inappropriate content, contact
//    and conduct, and know how to report concerns"
// Key stage 3 covers Years 7 to 9, ages 11 to 14.
// Spine: the two lines nobody teaches. The first line of the programme asks pupils to design, use and
// evaluate computational abstractions that model state and behaviour; the second asks them to compare
// the utility of alternative algorithms for the same problem. Both are statutory, both are hard, both
// produce nothing a class can show off, and both are exactly what GCSE Computer Science assumes a
// student has already met. The textual-language requirement is handled briefly, because it is the
// spine of the England page.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'KEY STAGE 3', blurb: 'Two statutory lines in Years 7 to 9 ask for modelling and for comparing algorithms. They are the two most often skipped, and GCSE assumes both.' },
  slug: 'ks3-computing-tuition-online',
  code: 'ksth',
  accent: '#1D36A5',
  accentRationale: 'Key Stage 3: a saturated royal blue from the solver (8.03:1 on every paper tint), deeper and cooler than the UK hub blue and nothing like the brown on the Key Stage 2 page beside it',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Key Stage 3 computing tuition online',
  title: 'Key Stage 3 Computing Tuition Online | Years 7 to 9',
  description: 'Key Stage 3 computing tuition for Years 7 to 9: modelling problems, comparing algorithms, binary and Boolean logic, taught live. First class free.',
  ogDescription: 'Two statutory lines in Years 7 to 9 ask pupils to model state and to compare algorithms. They are the two most often skipped.',
  twitterDescription: 'Live Key Stage 3 computing tuition for Years 7 to 9, taught to the curriculum. First class free.',
  pageName: 'Key Stage 3 Computing Tuition Online',
  webPageDescription: 'Live online computing tuition for students in Years 7 to 9 in England, taught against the statutory key stage 3 computing programme of study.',
  courseDescription: 'Live online computing teaching for students aged 11 to 14, covering abstraction, algorithms, a textual programming language, data structures, binary and Boolean logic.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Key Stage 3 computing',
  navLinks: [
    { href: '#two', label: 'The two lines' },
    { href: '#rest', label: 'The rest of it' },
    { href: '#bridge', label: 'The bridge to GCSE' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Years 7 to 9 &middot; Ages 11 to 14',
  h1: 'Key Stage 3 computing tuition online',
  lede: 'The statutory computing curriculum for Years 7 to 9 opens with two lines that almost nobody teaches properly. The first asks pupils to "design, use and evaluate computational abstractions that model the state and behaviour of real-world problems and physical systems". The second asks them to "use logical reasoning to compare the utility of alternative algorithms for the same problem". Modelling state, and choosing between algorithms. Neither produces a colourful result to show at a parents\' evening, both take real thought to teach, and both are exactly what a GCSE Computer Science course will assume a student has already met. This page sets out the whole programme of study, those two lines in particular, and what a student who has genuinely done key stage 3 can do when they walk into Year 10.',
  secondaryCta: { href: '#bridge', label: 'The bridge to GCSE' },
  wa: 'Hello Modern Age Coders, I would like a free first class for a Key Stage 3 student in the UK.',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students &middot; Every statutory line, not only the visible ones',
  spec: [
    ['For', 'Years 7 to 9, ages 11 to 14'],
    ['Curriculum', 'Statutory key stage 3 computing'],
    ['Often skipped', 'Modelling state, comparing algorithms'],
    ['Also required', 'A textual language, data structures'],
    ['And', 'Binary arithmetic, Boolean logic'],
    ['Group', 'Five to ten at one level'],
    ['Or', 'One to one'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Key stage 3 computing is where the subject stops being about making things and starts being about systems. The statutory programme asks Years 7 to 9 to model the state and behaviour of real problems, to understand sorting and searching and compare alternative algorithms for the same task, to use at least one textual programming language with proper data structures and modular code, and to handle Boolean logic, binary arithmetic and how data and instructions are stored. The two lines most often skipped are the first two, modelling and comparing, because they are slow to teach and produce nothing visible, and they are precisely what GCSE Computer Science assumes. We teach the whole programme live online, in groups of five to ten at one level or one to one. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for Years 7 to 9',
    lede: 'A textual language, the algorithms, and the thinking underneath both. Cards open the full syllabus.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'KS3 / 01', title: 'First Python', note: 'The textual language key stage 3 requires, for students arriving in Year 7 having only used blocks.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'KS3 / 02', title: 'Algorithms and Data Structures', note: 'Sorting, searching and comparing methods for the same job, which is the second statutory line almost word for word.' },
      { course: 'python-complete-masterclass-teens', code: 'KS3 / 03', title: 'Python for Teens', note: 'Lists, functions and modular programs, for Year 8 and 9 students ready to go well beyond the minimum.' }
    ]
  },

  sections: [
    {
      id: 'two', tint: 'tint', eyebrow: 'The two lines',
      h2: 'Modelling state, and choosing between algorithms',
      lede: 'The first two statutory lines of key stage 3, and why they so rarely survive into a real timetable.',
      body: [
        { kind: 'two',
          leftH3: '"Model the state and behaviour"',
          left: [
            'The full line asks pupils to "design, use and evaluate computational abstractions that model the state and behaviour of real-world problems and physical systems". In plain terms: take something real, a traffic light, a vending machine, a queue at a till, and describe it precisely enough that a computer could follow it.',
            'That means deciding what to keep and what to ignore, naming the states the thing can be in, and saying what moves it from one state to another. It is the most important idea in the whole subject, and it is almost invisible when done well.'
          ],
          rightH3: '"Compare the utility of alternative algorithms"',
          right: [
            'The second asks pupils to "understand several key algorithms that reflect computational thinking [for example, ones for sorting and searching]" and then to "use logical reasoning to compare the utility of alternative algorithms for the same problem".',
            'Knowing one way to sort a list is programming. Knowing two, and being able to say which is better for this list and why, is computer science. The curriculum asks for the second, at thirteen.'
          ] },
        { kind: 'table', mt: true, caption: 'Why these two lines get skipped', head: ['The line', 'What it produces', 'Why it survives badly'], rows: [
          ['Modelling state and behaviour', 'A diagram and a precise description', 'Nothing runs, nothing moves, and it looks like maths rather than computing'],
          ['Comparing algorithms', 'An argument about which method is better and why', 'It needs two working methods first, and a class that has barely finished one'],
          ['Everything else in key stage 3', 'A program, a website, a calculation, a finished task', 'Visible, finishable, easy to assess in a single lesson']
        ] },
        { kind: 'p', html: 'Neither line is beyond an eleven-year-old. A child who can say that a vending machine is either waiting for money, holding some money, or dispensing, and who can say what moves it between those, is modelling state. A child who notices that checking every item in a list is slow and that halving the list each time is faster has compared two algorithms. The ideas are simple. Teaching them takes patience rather than cleverness.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-computing-programmes-of-study/national-curriculum-in-england-computing-programmes-of-study" rel="noopener" target="_blank">National curriculum in England: computing programmes of study</a>, statutory guidance first published 11 September 2013. Key stage 3 covers Years 7 to 9, ages 11 to 14.' }
      ]
    },
    {
      id: 'rest', tint: 'deep', eyebrow: 'The rest of it',
      h2: 'Everything else Years 7 to 9 are supposed to cover',
      lede: 'The remaining statutory lines, grouped by what a student ends up able to do.',
      body: [
        { kind: 'table', caption: 'The rest of the key stage 3 programme, as written', head: ['Area', 'What the programme of study says', 'What a student can do'], rows: [
          ['Programming', '"Use 2 or more programming languages, at least one of which is textual"; "make appropriate use of data structures [for example, lists, tables or arrays]"; "design and develop modular programs that use procedures or functions"', 'Write typed code, store collections of things properly, and split a program into named parts'],
          ['Logic and numbers', '"Understand simple Boolean logic [for example, AND, OR and NOT]"; "carry out simple operations on binary numbers [for example, binary addition, and conversion between binary and decimal]"', 'Work out a logic expression by hand, and add and convert binary numbers without a calculator'],
          ['How computers work', '"Understand the hardware and software components that make up computer systems"; "understand how instructions are stored and executed within a computer system"', 'Explain what happens inside a machine when a program runs'],
          ['Representing data', '"Understand how data of various types (including text, sounds and pictures) can be represented and manipulated digitally, in the form of binary digits"', 'Say how a letter, a sound and a photograph all end up as ones and zeros'],
          ['Projects', '"Undertake creative projects that involve selecting, using, and combining multiple applications ... meeting the needs of known users"', 'Build something for a real person, and find out whether it actually suits them'],
          ['Safety', '"Understand a range of ways to use technology safely, respectfully, responsibly and securely, including protecting their online identity and privacy"', 'Protect their own accounts and recognise what should be reported']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The textual language line',
          left: [
            'This is the one parents can check most easily, and it is covered in detail on <a class="ag-inline-link" href="/coding-and-ai-classes-in-england">the England page</a>: ask which two languages a child will use by the end of Year 9, and which of them is typed.',
            'If the answer is only a block language, the student reaches Year 10 without having met the medium every GCSE board examines.'
          ],
          rightH3: 'The binary and logic lines',
          right: [
            'Binary addition and Boolean logic by hand are the key stage 3 content that GCSE papers lean on hardest, and several of them are non-calculator throughout.',
            'They are also purely a matter of practice. A student who has done fifty binary additions finds them trivial, and one who has done five finds them frightening.'
          ] },
        { kind: 'p', html: 'A reminder that applies to every English school page on this site: academies are not required to follow the national curriculum, and most secondary schools are academies. For a great many students this programme of study describes what they are entitled to be offered rather than what they will certainly receive, which is why it is worth knowing in detail.' }
      ]
    },
    {
      id: 'bridge', tint: '', eyebrow: 'The bridge to GCSE',
      h2: 'What a student who has really done key stage 3 can do',
      lede: 'Every English GCSE board assumes this foundation. The gap shows up in the first term of Year 10, and it is much cheaper to close in Year 8.',
      body: [
        { kind: 'table', caption: 'Key stage 3 content and where GCSE picks it up', head: ['Key stage 3 asks for', 'GCSE then expects', 'If it was skipped'], rows: [
          ['Modelling state and behaviour', 'Decomposition and abstraction in every programming question', 'Students write code before they understand the problem, and cannot plan'],
          ['Comparing sorting and searching algorithms', 'Named algorithms explained, traced and compared', 'The comparison questions become memorisation of phrases rather than reasoning'],
          ['A textual language and data structures', 'Programs written by hand or at a keyboard, with lists and functions', 'The first term of Year 10 is spent on syntax while the content moves on'],
          ['Binary and Boolean logic by hand', 'Non-calculator conversions, arithmetic and truth tables', 'Easy marks lost to hesitation rather than to difficulty'],
          ['How data and instructions are stored', 'Systems architecture and data representation topics', 'Topics that feel new when they should feel like revision']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How we teach the two hard lines',
          left: [
            'Modelling first, on paper, with real things a student already knows. Draw the states, name the transitions, then write the program. A student who has drawn the model never has to guess what the code should do.',
            'Then two algorithms for the same job, both written, both timed on growing inputs, and a written sentence saying which is better and when. That sentence is the whole point of the exercise.'
          ],
          rightH3: 'And why prediction runs through all of it',
          right: [
            'Before anything runs, the student says what it will do. For modelling, that means predicting the next state. For algorithms, it means predicting which will be faster before measuring.',
            'Being wrong out loud and then finding out why is the mechanism, and it is what the statutory phrase "use logical reasoning" actually describes in practice.'
          ] },
        { kind: 'p', html: 'For the step before this, <a class="ag-inline-link" href="/ks2-coding-lessons-online">the key stage 2 page</a> sets out what Years 3 to 6 are supposed to reach. For the step after, <a class="ag-inline-link" href="/choosing-gcse-computer-science-year-9-options">the Year 9 options page</a> covers the decision itself, and the three board pages cover what each English GCSE asks.' },
        { kind: 'p', html: 'The research behind teaching this way, including why problem-solving skill comes from accumulated subject knowledge rather than generic training, is set out on <a class="ag-inline-link" href="/problem-solving-skills-through-coding-uk">the problem-solving page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs across Years 7 to 9',
    lede: 'A student is placed by what they can do unaided, not by their year group.',
    table: { caption: 'What each rung looks like finished', head: ['Rung', 'What is being learnt', 'How you can tell'], rows: [
      ['1. Into typed code', 'A textual language, variables, selection and loops', 'Short programs written from an empty file without copying an example'],
      ['2. Structure', 'Lists, functions and modular programs', 'A longer program split into named parts that each do one job'],
      ['3. Models and algorithms', 'State and behaviour, sorting and searching, comparing methods', 'A drawn model of a real system, and a reasoned choice between two algorithms'],
      ['4. How it all works', 'Binary, Boolean logic, data representation and systems', 'Binary sums and truth tables done by hand, and an explanation of what happens when code runs']
    ] },
    left: { h3: 'Rung three is the one that is missed', ps: [
      'It is also the rung that separates a student who can program from one who can think about programs, and GCSE rewards the second.',
      'The full topic order runs down the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Rung one is non-negotiable', ps: [
      'Nothing on rungs two to four is available to a student who cannot yet type code comfortably, which is why it comes first regardless of age.',
      'The free lesson is where the starting rung is decided honestly.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Years 7 to 9',
    lede: 'Grouped by which part of key stage 3 they serve. The free lesson settles where to start.',
    bands: [
      { num: 'I', h3: 'The textual language', sub: 'Rungs one and two', courses: [
        { code: 'UK / K31 / 01', slug: 'python-ai-kids-masterclass', title: 'First Python', blurb: 'The crossing from blocks to typed code, taken slowly enough to stick.' },
        { code: 'UK / K31 / 02', slug: 'python-complete-masterclass-teens', title: 'Python in full', blurb: 'Lists, functions and files, which is where key stage 3 programming is meant to end up.' },
        { code: 'UK / K31 / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding in Lua', blurb: 'A second typed language inside a game, for students who need a reason to type.' }
      ] },
      { num: 'II', h3: 'Models and algorithms', sub: 'The two lines that get skipped', courses: [
        { code: 'UK / K32 / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Sorting and searching, written twice and compared, which is the statutory line in practice.' },
        { code: 'UK / K32 / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Modelling real systems on paper before any code, for students who find this the hard part.' },
        { code: 'UK / K32 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Binary, logic and number work done by writing programs, which makes the arithmetic stick.' }
      ] },
      { num: 'III', h3: 'Projects and further', sub: 'For students ahead of the programme', courses: [
        { code: 'UK / K33 / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'A site built for a real user, which is exactly what the project line in key stage 3 asks for.' },
        { code: 'UK / K33 / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Training and testing models, for students who have finished the programme and want more.' },
        { code: 'UK / K33 / 03', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'For Year 9 students who have chosen the subject and want to arrive in Year 10 ahead.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Draw it, predict it, then write it',
    lede: 'Our teachers work from India on a clock that never shifts, so the UK runs five and a half hours behind from October and four and a half from March. Slots are agreed in UK time.',
    slots: [
      { time: 'After school', l: 'Where most Year 7 to 9 students settle.' },
      { time: 'Early evening', l: 'Once football, music or the bus home is out of the way.' },
      { time: 'Weekend morning', l: 'Good for a longer build or a model drawn out properly.' }
    ],
    cells: [
      { h3: 'Models on paper first', p: 'States and transitions drawn before any code, so the program is a translation rather than a guess.' },
      { h3: 'Two ways to do it', p: 'Every algorithm topic ends with two working methods and a written reason for choosing one.' },
      { h3: 'Arithmetic by hand', p: 'Binary and logic practised without a calculator from the start, because GCSE papers will demand it.' },
      { h3: 'Predict before running', p: 'The student states the output first. The gap between expectation and result is the lesson.' },
      { h3: 'Groups by level', p: 'Five to ten students at the same rung, arguing about whose model is more accurate.' },
      { h3: 'Work you can see', p: 'Finished projects saved where a family can open them, which is usually how a parent learns it is working.' }
    ]
  },

  projectsH2: 'What Key Stage 3 students have built',
  projectsLede: 'Four projects from students of about this age. More sit in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'From Google, word for word, by families nobody asked.',

  fees: {
    h2: 'What Key Stage 3 tuition costs',
    lede: 'A flat monthly charge in US dollars, the rate everywhere outside India. The free lesson comes first and nothing is taken until a course and a weekly time are agreed.',
    free: ['A real lesson on real key stage 3 material', 'An honest view of the starting rung', 'Only a phone number needed'],
    group: ['Five to ten students at one rung', 'One named teacher across the course', 'Written feedback on work every week', 'A certificate when a course finishes'],
    one: ['One student and one teacher', 'Useful for a student far ahead or far behind', 'Fitted around clubs and homework']
  },

  faq: {
    eyebrow: 'Questions about Key Stage 3 computing',
    h2: 'What parents of Years 7 to 9 ask',
    items: [
      { q: 'What should a Year 9 student be able to do in computing?', a: 'The statutory programme expects them to model real systems, understand and compare sorting and searching algorithms, program in at least one textual language with data structures and functions, and handle binary arithmetic and Boolean logic.' },
      { q: 'What does modelling state and behaviour mean?', a: 'Describing a real thing, such as a vending machine or a traffic light, precisely enough that a computer could follow it: the states it can be in and what moves it between them.' },
      { q: 'Why does comparing algorithms matter?', a: 'Because knowing one way to do something is programming, while knowing two and being able to say which suits a given problem is computer science. The curriculum asks for the second.' },
      { q: 'Does my child need to type code by Year 9?', a: 'The programme of study requires two or more programming languages, at least one of which is textual. A student who has only used blocks has not met that requirement.' },
      { q: 'Is binary really on the syllabus at this age?', a: 'Yes. Pupils should be able to carry out simple operations on binary numbers, including binary addition and conversion between binary and decimal, by the end of key stage 3.' },
      { q: 'Does every school teach all of this?', a: 'Not necessarily. Academies are not required to follow the national curriculum, and most secondary schools in England are academies.' },
      { q: 'How does this connect to GCSE?', a: 'Every English GCSE board assumes this foundation. The commonest gaps are typed code, the algorithm comparisons and binary done by hand, and they show up in the first term of Year 10.' },
      { q: 'My child is well ahead. What then?', a: 'Harder problems rather than more of the same, and often an early start on GCSE content, competitions or a real project for a real user.' },
      { q: 'How long does it take to catch up?', a: 'For typed code, usually about a term of weekly lessons. The algorithm and modelling work takes longer, because it is thinking rather than syntax.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that a group place is USD 100 a month and one-to-one teaching USD 150, charged monthly with nothing in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related reading',
    lede: 'Each takes a different part of this further.',
    items: [
      { href: '/ks2-coding-lessons-online', label: 'Key Stage 2 coding lessons', p: 'What Years 3 to 6 are supposed to reach, including variables and selection.' },
      { href: '/choosing-gcse-computer-science-year-9-options', label: 'Choosing GCSE Computer Science', p: 'The Year 9 options decision, and when it is really made.' },
      { href: '/coding-and-ai-classes-in-england', label: 'Coding and AI classes in England', p: 'The national curriculum, and the 83.9 per cent of secondaries outside it.' },
      { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA GCSE Computer Science 8525', p: 'The first of the three English boards, and what it asks.' },
      { href: '/problem-solving-skills-through-coding-uk', label: 'Problem-solving skills through coding', p: 'What the research says builds skill, and the claim we refuse to make.' },
      { href: '/best-coding-classes-for-teens-uk', label: 'Coding classes for teens in the UK', p: 'Why checking a program beats trusting a chatbot, with Ofcom’s 2026 figures.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Send a number and we will reply at a British hour you choose. The lesson is real teaching on real key stage 3 material, and it ends with a straight view of the starting rung.',
    readFirst: 'Would you rather read first? Syllabuses sit on each <a class="ag-inline-link" href="/courses">course page</a>, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> is honest about who the method does not suit, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> lays out the order.',
    note: 'WhatsApp gets the quickest reply and costs nothing from a British mobile. The number is registered in India, which we say here rather than leave you to discover.',
    formNote: 'Nothing to pay and nothing to sign. We come back once, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Secondary years', links: [
        { href: '/ks2-coding-lessons-online', label: 'Key Stage 2' },
        { href: '/choosing-gcse-computer-science-year-9-options', label: 'Year 9 options' },
        { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA 8525' },
        { href: '/coding-and-ai-classes-in-england', label: 'The English system' }
      ] },
      { h4: 'More', links: [
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' }
      ] }
    ],
    bottomRight: 'Live Key Stage 3 teaching, on UK time'
  },

  personalityCss: `
.ag-root.ag-ksth .ag-hero h1 { letter-spacing: -0.027em; font-weight: 700; }
.ag-root.ag-ksth .ag-capsule { border-left-width: 6px; }
.ag-root.ag-ksth .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-ksth .ag-table caption { text-align: left; font-weight: 700; letter-spacing: 0.01em; }
.ag-root.ag-ksth .ag-table th:first-child { width: 22%; }
.ag-root.ag-ksth .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-ksth .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  mustMention: ['model the state and behaviour', 'compare the utility of alternative algorithms', 'at least one of which is textual', 'binary addition', 'Boolean logic', 'modular programs', 'Years 7 to 9', 'sorting and searching', 'known users', '11 September 2013'],

  dossier: {
    curriculumAuthority: 'England, key stage 3 computing. GOV.UK, "National curriculum in England: computing programmes of study", statutory guidance first published 11 September 2013, read raw from gov.uk. Key stage 3 covers Years 7 to 9, ages 11 to 14. The programme of study, verbatim: pupils should be taught to "design, use and evaluate computational abstractions that model the state and behaviour of real-world problems and physical systems"; "understand several key algorithms that reflect computational thinking [for example, ones for sorting and searching]; use logical reasoning to compare the utility of alternative algorithms for the same problem"; "use 2 or more programming languages, at least one of which is textual, to solve a variety of computational problems; make appropriate use of data structures [for example, lists, tables or arrays]; design and develop modular programs that use procedures or functions"; "understand simple Boolean logic [for example, AND, OR and NOT] and some of its uses in circuits and programming; understand how numbers can be represented in binary, and be able to carry out simple operations on binary numbers [for example, binary addition, and conversion between binary and decimal]"; "understand the hardware and software components that make up computer systems, and how they communicate with one another and with other systems"; "understand how instructions are stored and executed within a computer system; understand how data of various types (including text, sounds and pictures) can be represented and manipulated digitally, in the form of binary digits"; "undertake creative projects that involve selecting, using, and combining multiple applications, preferably across a range of devices, to achieve challenging goals, including collecting and analysing data and meeting the needs of known users"; "create, reuse, revise and repurpose digital artefacts for a given audience, with attention to trustworthiness, design and usability"; "understand a range of ways to use technology safely, respectfully, responsibly and securely, including protecting their online identity and privacy; recognise inappropriate content, contact and conduct, and know how to report concerns".',
    localProject: 'The two lines nobody teaches. The key stage 3 programme opens with modelling the state and behaviour of real systems and then with comparing the utility of alternative algorithms for the same problem, and the page argues that these are the two most often skipped because neither produces anything a class can show off: one yields a diagram, the other an argument, and the comparison needs two working methods from a class that has barely finished one. It shows both are within reach of an eleven-year-old with concrete examples, a vending machine\'s states and the difference between checking every item and halving the list, then prints the rest of the programme grouped by what a student can do. The third section maps each key stage 3 line to where GCSE picks it up and what happens in Year 10 if it was skipped. The textual-language requirement is kept brief and linked, since it is the spine of the England page. Lesson family: statutory content that survives badly because it is invisible when taught well.',
    requiredMentions: ['model the state and behaviour', 'compare the utility of alternative algorithms', 'binary addition', '11 September 2013'],
    sources: [
      { claim: 'GOV.UK, National curriculum in England: computing programmes of study, statutory guidance first published 11 September 2013: the full key stage 3 programme of study.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-computing-programmes-of-study/national-curriculum-in-england-computing-programmes-of-study' },
      { claim: 'GOV.UK, The national curriculum: key stage 3 covers Years 7 to 9, ages 11 to 14, and academies do not have to follow the national curriculum.', url: 'https://www.gov.uk/national-curriculum' }
    ],
    rejectedClaims: [
      'Any figure for how many schools teach the modelling or algorithm-comparison lines: nothing measures it, and the page argues from the structure of the task rather than from data.',
      'Criticism of secondary teachers: the page explains why the lines survive badly in a timetable and does not assign blame.',
      'The academy percentages: sourced and printed on the England page and referenced here rather than repeated.',
      'Any claim that key stage 3 study improves results in other subjects: refused across this cluster.',
      'Board-specific GCSE detail: carried by the three board pages and linked.',
      'That any child can reach every line by Year 9: readiness varies and placement is by what a student can do.'
    ]
  }
};
