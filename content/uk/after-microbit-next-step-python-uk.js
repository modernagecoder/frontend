'use strict';
// After the micro:bit: the next step to Python, UK (ag- community door; UK cluster Phase 3).
// Sources, read raw on 21 September 2026 (microbit.org pages via curl):
//  - Micro:bit Educational Foundation, About us overview: "a non-profit organisation"; "73.5 million children
//    have learnt with micro:bit"; "85+ countries are learning with micro:bit"; "88% of students taught with
//    micro:bit say computing and technology is more fun than other subjects (UK)".
//  - microbit.org Code & AI page: MakeCode "colour-coded blocks are familiar to anyone who's previously used
//    Scratch"; "You can also switch to JavaScript to see the text-based code behind the blocks."; "Python is
//    a great way to deepen your programming skills through text-based coding."; "Our Python editor is
//    designed to help teachers and learners get the most out of text-based programming on the micro:bit."
//  - microbit.org news, 15 May 2023, "BBC micro:bit - the next gen: groundbreaking initiative announced":
//    free micro:bits to all UK primary schools; "The donation of almost 700,000 devices funded by the UK
//    registry, Nominet, provides 30 free devices per school"; devices delivered between September 2023 and
//    March 2024.
//  - microbit.org news, 11 January 2024, "Our reflections on 2023": "nearly 20k UK primary schools signed up
//    for kits"; "Over 1 million uses of our Python editor in the first year".
// Spine: the board already speaks Python. A child who met the micro:bit through MakeCode blocks at primary
// school can take the next step on the same device, in the official Python editor, before moving to
// Python on a computer for bigger programs. Honest limits: we run no micro:bit course and sell no boards;
// our blocks course uses a simulated micro:bit, and our Python teaching happens on the computer.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'AFTER MICRO:BIT', blurb: 'Every UK primary school was offered a class set of micro:bits. The same board runs Python, which makes it the gentlest next step.' },
  slug: 'after-microbit-next-step-python-uk',
  code: 'amb',
  accent: '#8B183F',
  accentRationale: 'After the micro:bit: a deep raspberry from the solver (7.41:1 on every paper tint, dE 8.6 from the nearest used accent), warm and distinct from the green of the Code Club page beside it',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'After the micro:bit: the step to Python',
  title: 'After the micro:bit: The Next Step to Python, UK',
  description: 'Your child used a micro:bit at school and wants more. The same board runs Python, which makes it the gentlest step from blocks to typed code. How to take it.',
  ogDescription: 'Every UK primary school was offered a class set of micro:bits in 2023, and the board runs Python. That makes the next step smaller than parents expect.',
  twitterDescription: 'After the micro:bit: from MakeCode blocks to Python on the same board, and then to Python on a computer.',
  pageName: 'After the micro:bit: The Next Step to Python',
  webPageDescription: 'Live online Python lessons for UK children who started coding on the BBC micro:bit, built on the Micro:bit Educational Foundation\'s published material.',
  courseDescription: 'Live online Python for children who started on the micro:bit: from blocks to typed code, with the concepts they met on the board carried into bigger programs.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'After the micro:bit',
  navLinks: [
    { href: '#board', label: 'The board at school' },
    { href: '#bridge', label: 'Blocks to Python' },
    { href: '#beyond', label: 'Beyond the board' },
    { href: '#home', label: 'At home' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'UK &middot; Ages 9 to 13 &middot; Physical computing',
  h1: 'After the micro:bit: the next step to Python',
  lede: 'If your child is in primary school in the UK, there is a good chance they have held a BBC micro:bit. In 2023 the BBC, the Micro:bit Educational Foundation and Nominet offered a free class set of 30 to every primary school, almost 700,000 devices, and nearly 20,000 schools signed up. Most children meet it through Microsoft MakeCode, whose colour-coded blocks, the Foundation notes, "are familiar to anyone who\'s previously used Scratch". What fewer families know is that the same little board also runs Python. The Foundation\'s own Python editor had over a million uses in its first year, and the Foundation calls Python "a great way to deepen your programming skills through text-based coding". So the step from blocks to real, typed code can start on a device your child already understands. This page explains that step, and the one after it.',
  secondaryCta: { href: '#bridge', label: 'Blocks to Python' },
  wa: 'Hello Modern Age Coders, my child has used a micro:bit and I would like a free first lesson in Python.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built on the Micro:bit Educational Foundation\'s published material',
  spec: [
    ['For', 'Children who started on the micro:bit'],
    ['Usual age', 'About 9 to 13'],
    ['UK primary giveaway', '30 per school, almost 700,000 devices'],
    ['Schools signed up', 'Nearly 20,000'],
    ['Next language', 'Python, on the board and then the computer'],
    ['Boards', 'We do not sell or ship them'],
    ['Group', 'Five to ten at one level'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The BBC micro:bit is a pocket-sized programmable board from the Micro:bit Educational Foundation, a non-profit. In 2023 the BBC micro:bit the next gen campaign offered every UK primary school a free class set of 30, almost 700,000 devices funded by Nominet, and nearly 20,000 schools signed up. Children usually program it with Microsoft MakeCode blocks, which feel like Scratch and can switch to show JavaScript. The board also runs Python through the Foundation\'s own Python editor, which had over a million uses in its first year. That makes the micro:bit a gentle bridge from blocks to typed code: the same sensors, buttons and display, driven by text instead of blocks. After that, Python on a computer opens up bigger programs, data and games. Modern Age Coders teaches that next step in live Python lessons. We do not run a micro:bit course or sell boards. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for micro:bit graduates',
    lede: 'Python first, blocks for the younger, and data for the curious. Each card opens its syllabus.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'MB / 01', title: 'Python for Kids', note: 'Typed Python for ages 10 to 13, the language the micro:bit can already run.' },
      { course: 'kids-coding-blocks-masterclass', code: 'MB / 02', title: 'Coding for Kids', note: 'For younger children: Scratch, MakeCode arcade and inventions on a simulated micro:bit, before typing.' },
      { course: 'data-science-course-for-teens-python-data', code: 'MB / 03', title: 'Data Science with Python', note: 'For teenagers who enjoyed logging sensor data and want to analyse real datasets.' }
    ]
  },

  sections: [
    {
      id: 'board', tint: 'tint', eyebrow: 'The board at school',
      h2: 'The board most UK primary children have met',
      lede: 'From the Micro:bit Educational Foundation\'s announcements and its review of 2023.',
      body: [
        { kind: 'table', caption: 'The micro:bit in UK schools, as published', head: ['Fact', 'Detail'], rows: [
          ['The campaign', 'BBC micro:bit the next gen, announced 15 May 2023 by BBC Education, the Foundation and Nominet'],
          ['The offer', 'A free class set of 30 micro:bits and teaching resources for every UK primary school'],
          ['Devices', 'Almost 700,000, funded by Nominet'],
          ['Take-up', 'Nearly 20,000 UK primary schools signed up for kits'],
          ['Delivery', 'Between September 2023 and March 2024'],
          ['Worldwide', '73.5 million children have learnt with micro:bit, in more than 85 countries']
        ] },
        { kind: 'p', html: 'The micro:bit has buttons, a small grid of lights, and sensors that detect movement, temperature, light and sound, plus a radio that lets boards talk to each other. That is why children love it: code does something visible and physical straight away. The Foundation reports that in the UK, "88% of students taught with micro:bit say computing and technology is more fun than other subjects", a survey finding worth reading as enthusiasm rather than proof of learning.' },
        { kind: 'two', mt: true,
          leftH3: 'How children usually code it',
          left: [
            'Microsoft MakeCode, with blocks that snap together much like Scratch. It is a very good start.',
            'MakeCode can also switch to JavaScript to show the text behind the blocks, a first glimpse of typed code.'
          ],
          rightH3: 'What the board can also do',
          right: [
            'Run Python, written in the Foundation\'s own Python editor, using the same buttons, lights and sensors.',
            'That means the move to typed code does not need new equipment, just a new way of instructing a familiar device.'
          ] },
        { kind: 'source', html: 'Source: the <a class="ag-inline-link" href="https://microbit.org/about/overview/" rel="noopener" target="_blank">Micro:bit Educational Foundation</a> About page and Code page, its news post of 15 May 2023 announcing the campaign, and its review of 2023 published on 11 January 2024. We have no connection with the Foundation, the BBC or Nominet.' }
      ]
    },
    {
      id: 'bridge', tint: 'deep', eyebrow: 'Blocks to Python',
      h2: 'The board already speaks Python',
      lede: 'Why the micro:bit makes the jump to typed code smaller than it looks.',
      body: [
        { kind: 'p', html: 'The Foundation describes Python as easy to start because of its "natural English-like structure", and says its Python editor "is designed to help teachers and learners get the most out of text-based programming on the micro:bit". The important thing for a child is continuity. A program that shows a heart when button A is pressed, or counts steps using the accelerometer, can be rebuilt in Python line by line. The idea is already understood; only the way of expressing it changes.' },
        { kind: 'table', mt: true, caption: 'The same ideas, in blocks and in Python', head: ['Idea met in MakeCode', 'What changes in Python'], rows: [
          ['On button A pressed', 'An if-statement checking the button, inside a loop that runs forever'],
          ['Show icon, show number', 'Calling functions by name, with brackets and exact spelling'],
          ['Variables for a score or count', 'Named variables, typed and updated in text'],
          ['Forever loop', 'A while loop, with indentation that matters'],
          ['Radio send and receive', 'Messages sent and read in code, as text or numbers']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Rebuild a favourite', p: 'Start by rewriting a project the child already made in blocks. Familiar behaviour makes the new syntax far less frightening.' },
          { h3: 'Read the errors', p: 'Typed code produces error messages. Learning to read them calmly is the single biggest new skill, and the board gives quick feedback.' },
          { h3: 'Peek at JavaScript', p: 'MakeCode\'s JavaScript view shows text behind blocks. Some children like seeing it before switching; it is not required for Python.' }
        ] }
      ]
    },
    {
      id: 'beyond', tint: '', eyebrow: 'Beyond the board',
      h2: 'Then Python on a computer',
      lede: 'The micro:bit is a bridge, not a destination. Bigger programs need a full computer.',
      body: [
        { kind: 'table', caption: 'On the board and beyond it', head: ['On the micro:bit', 'On a computer'], rows: [
          ['Small programs that react to buttons and sensors', 'Programs that grow over weeks, split into functions and files'],
          ['A five-by-five light display', 'Full screens: games, drawings and windows'],
          ['Sensor readings logged on the board', 'Real datasets analysed and charted'],
          ['Messages between boards by radio', 'Programs that talk to websites and files']
        ] },
        { kind: 'p', html: 'The Foundation notes that Python is "powerful enough to be used in areas like data science and machine learning", and that is exactly where Python on a computer leads. A child who logged temperature readings on a micro:bit is one step from analysing a real dataset; one who made a reaction game is one step from a full game with graphics. Our lessons take that step on the computer, where programs can grow.' },
        { kind: 'two', mt: true,
          leftH3: 'What we offer',
          left: [
            'Live Python lessons in small groups, starting from what children built on the micro:bit and moving to programs on the computer.',
            'Projects the children choose, with a teacher who reads their code and suggests what to try next.'
          ],
          rightH3: 'What we are not',
          right: [
            'A micro:bit course. We do not teach MicroPython on the board as a course, and we do not sell or ship micro:bits.',
            'Connected with the BBC, the Foundation or Nominet. We describe the micro:bit from their published material.'
          ] }
      ]
    },
    {
      id: 'home', tint: 'tint', eyebrow: 'At home',
      h2: 'If your family has a micro:bit at home',
      lede: 'Many families buy one after a child enjoys it at school. Here is how to use it well alongside lessons.',
      body: [
        { kind: 'table', caption: 'Using a home micro:bit well', head: ['Idea', 'Why it helps'], rows: [
          ['Try each new Python idea on the board', 'A button or light reacting to the child\'s own code makes an abstract idea concrete'],
          ['Use the official editors', 'The Foundation\'s MakeCode and Python editors are free and designed for learners'],
          ['Build something for the house', 'A doorbell, a plant-watering reminder or a step counter gives a real reason to finish'],
          ['Keep it playful', 'The board works well as a toy that teaches, not as homework']
        ] },
        { kind: 'p', html: 'None of this requires lessons. The Foundation\'s free resources are excellent for home use. Lessons help when a child wants to go further than the resources lead, gets stuck on their own idea, or is ready to move from the board to bigger programs on a computer.' },
        { kind: 'p', html: 'For children who love community clubs, see <a class="ag-inline-link" href="/after-code-club-next-step-coding-uk">the page on life after Code Club</a>; for Raspberry Pi computers, <a class="ag-inline-link" href="/raspberry-pi-coding-projects-uk">Raspberry Pi coding projects</a>; and for the curriculum, <a class="ag-inline-link" href="/ks2-coding-lessons-online">Key Stage 2 coding</a> and <a class="ag-inline-link" href="/ks3-computing-tuition-online">Key Stage 3 computing</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs after the micro:bit',
    lede: 'Placement follows what a child can build, which a first lesson shows quickly.',
    table: { caption: 'From blocks on a board to programs on a computer', head: ['Rung', 'Usually', 'What should be true'], rows: [
      ['1. Confident in blocks', 'Ages 8 to 10', 'MakeCode projects with buttons, sensors, variables and loops, designed by the child'],
      ['2. First Python', 'Ages 10 to 12', 'Familiar projects rebuilt in typed Python, errors read and fixed'],
      ['3. Python on the computer', 'Ages 11 to 13', 'Programs with functions, lists and files that grow over several weeks'],
      ['4. A real project', 'Ages 12 and up', 'A game, data project or tool planned and finished, reviewed by a teacher']
    ] },
    left: { h3: 'Rung two is the bridge', ps: [
      'Rebuilding a known project in Python is the gentlest way across. It works on the board or on screen.',
      'The wider sequence of topics is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Rung four is ownership', ps: [
      'A child who plans and finishes their own project has become a maker, not a follower.',
      'From there, GCSE computing and beyond are a natural path.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for young makers',
    lede: 'Grouped by stage. The free lesson places each child.',
    bands: [
      { num: 'I', h3: 'From blocks to Python', sub: 'Ages 8 to 13', courses: [
        { code: 'UK / MB1 / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks, MakeCode and a simulated micro:bit.' },
        { code: 'UK / MB1 / 02', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'The first typed language, step by step.' },
        { code: 'UK / MB1 / 03', slug: 'scratch-programming-complete-course', title: 'Scratch, complete', blurb: 'For younger makers still in blocks.' }
      ] },
      { num: 'II', h3: 'Making with code', sub: 'Games and data', courses: [
        { code: 'UK / MB2 / 01', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Reaction games grown into real ones.' },
        { code: 'UK / MB2 / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Number patterns and measurement, explored in programs.' },
        { code: 'UK / MB2 / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon prep for kids', blurb: 'Inventing, building and presenting a project.' }
      ] },
      { num: 'III', h3: 'Teenage makers', sub: 'Ages 13 and up', courses: [
        { code: 'UK / MB3 / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Programs, files and apps in Python.' },
        { code: 'UK / MB3 / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Real data, analysed and charted.' },
        { code: 'UK / MB3 / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Where Python meets machine learning.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'From a familiar board to bigger programs',
    lede: 'Teaching happens from India, which does not change its clocks, leaving the UK four and a half hours behind in summer and five and a half in winter. Every lesson is booked in UK time.',
    slots: [
      { time: 'After school', l: 'Short, practical sessions for this age.' },
      { time: 'Early evening', l: 'Time to try code on a home board afterwards.' },
      { time: 'Weekend', l: 'Longer project sessions for keen makers.' }
    ],
    cells: [
      { h3: 'Start from their projects', p: 'Lessons begin from what a child built on the micro:bit at school or home.' },
      { h3: 'Rebuild, then extend', p: 'Familiar projects rewritten in Python, then pushed further.' },
      { h3: 'Errors as clues', p: 'Error messages read together until they stop being scary.' },
      { h3: 'Code reviewed', p: 'A teacher reads every child\'s program and gives specific next steps.' },
      { h3: 'Their own ideas', p: 'Children choose projects; the teacher picks the skills each one needs.' },
      { h3: 'Small groups', p: 'Five to ten children at one level.' }
    ]
  },

  projectsH2: 'Projects built by our young students',
  projectsLede: 'Four projects from lessons, each made by the children. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' reviews on Google, reproduced as written.',

  fees: {
    h2: 'Fees for Python lessons',
    lede: 'Lessons are paid monthly in US dollars, one rate wherever you live outside India. Nothing is due for the first lesson, and no invoice follows until you pick a course and a regular weekly time. Hardware is never part of the fee; we do not sell boards.',
    free: ['A lesson starting from your child\'s micro:bit projects', 'A clear view of whether they are ready for Python', 'Only a phone number to book'],
    group: ['Five to ten children at one level', 'The same teacher each week', 'Code read and reviewed every lesson', 'Projects the children choose'],
    one: ['A teacher for one child', 'Paced to a fast-moving maker', 'Suits a child with a big idea']
  },

  faq: {
    eyebrow: 'Questions about life after the micro:bit',
    h2: 'What parents ask',
    items: [
      { q: 'What is the BBC micro:bit?', a: 'A pocket-sized programmable board with buttons, lights, sensors and a radio, from the Micro:bit Educational Foundation, a non-profit. Children usually program it with MakeCode blocks.' },
      { q: 'Did my child\'s school get micro:bits?', a: 'Very likely. In 2023 every UK primary school was offered a free class set of 30 through BBC micro:bit the next gen, and nearly 20,000 schools signed up.' },
      { q: 'Can the micro:bit run Python?', a: 'Yes. The Foundation has its own Python editor for the micro:bit, which had over a million uses in its first year.' },
      { q: 'Why move from blocks to Python?', a: 'Python is text-based and used far beyond school, in data science and machine learning. Moving to it lets children build bigger programs, and the micro:bit makes the first step gentle.' },
      { q: 'Does my child need a micro:bit at home?', a: 'No. Our lessons use Python on the computer. A home micro:bit is a nice extra for trying ideas, but not required.' },
      { q: 'Do you teach micro:bit lessons?', a: 'Not as a course. Our blocks course uses a simulated micro:bit, and our Python teaching happens on the computer. We do not sell or ship boards.' },
      { q: 'What age is right for Python?', a: 'Often around 10 to 12, once a child is confident in blocks and can plan a project. Some benefit from more time in blocks first.' },
      { q: 'Are you connected with the BBC or the Foundation?', a: 'No. We are independent and describe the micro:bit from the Foundation\'s published material.' },
      { q: 'Are lessons online?', a: 'Yes, live and online, in small groups or one to one, at UK times.' },
      { q: 'What does it cost?', a: 'A first lesson is free of charge. Continuing lessons are billed once a month in US dollars, cheaper in a group than one to one, as the fees section shows, and never paid ahead.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for young makers',
    lede: 'Clubs, computers and the curriculum.',
    items: [
      { href: '/after-code-club-next-step-coding-uk', label: 'After Code Club', p: 'The next step for children who outgrow the club guides.' },
      { href: '/raspberry-pi-coding-projects-uk', label: 'Raspberry Pi coding projects', p: 'What children can build with a Raspberry Pi computer.' },
      { href: '/ks2-coding-lessons-online', label: 'Key Stage 2 coding', p: 'The primary computing curriculum in England.' },
      { href: '/ks3-computing-tuition-online', label: 'Key Stage 3 computing', p: 'What secondary school computing asks next.' },
      { href: '/student-hackathons-uk', label: 'Student hackathons', p: 'Where young makers build to a deadline.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages in one place.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time that suits. Tell us what your child made on the micro:bit; the lesson starts there and ends with a plan.',
    readFirst: 'Want to look before you book? Browse the <a class="ag-inline-link" href="/courses">courses</a> and their syllabuses, read about <a class="ag-inline-link" href="/how-we-teach">our method</a> and who it suits, or see children\'s finished work in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
    note: 'For a fast answer, message us on WhatsApp, free from any UK phone. We are based in India, so our number has the +91 prefix.',
    formNote: 'No card and no contract; a single reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Young makers', links: [
        { href: '/after-code-club-next-step-coding-uk', label: 'After Code Club' },
        { href: '/raspberry-pi-coding-projects-uk', label: 'Raspberry Pi projects' },
        { href: '/ks2-coding-lessons-online', label: 'KS2 coding' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'More', links: [
        { href: '/student-hackathons-uk', label: 'Student hackathons' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Python after the micro:bit, live on UK time'
  },

  personalityCss: `
.ag-root.ag-amb .ag-hero h1 { letter-spacing: -0.023em; font-weight: 700; }
.ag-root.ag-amb .ag-capsule { border-left-width: 6px; border-top: 2px solid var(--ag-accent); }
.ag-root.ag-amb .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-amb .ag-table caption { text-align: left; font-weight: 670; }
.ag-root.ag-amb .ag-table td:first-child { font-weight: 610; }
.ag-root.ag-amb .ag-band-head h3 { letter-spacing: -0.009em; }
`,

  mustMention: ['micro:bit', 'the next gen', '700,000', 'nearly 20,000', 'MakeCode', 'Python editor', 'Micro:bit Educational Foundation', 'Nominet', 'do not sell', 'Python'],

  dossier: {
    curriculumAuthority: 'UK physical computing, BBC micro:bit. Micro:bit Educational Foundation About overview: "a non-profit organisation"; "73.5 million children have learnt with micro:bit"; "85+ countries are learning with micro:bit"; "88% of students taught with micro:bit say computing and technology is more fun than other subjects (UK)". Code and AI page: MakeCode blocks "are familiar to anyone who\'s previously used Scratch"; "You can also switch to JavaScript to see the text-based code behind the blocks."; "Python is a great way to deepen your programming skills through text-based coding."; "natural English-like structure"; "powerful enough to be used in areas like data science and machine learning"; "Our Python editor is designed to help teachers and learners get the most out of text-based programming on the micro:bit." News, 15 May 2023: BBC micro:bit the next gen, free micro:bits to all UK primary schools; "The donation of almost 700,000 devices funded by the UK registry, Nominet, provides 30 free devices per school"; delivery September 2023 to March 2024. News, 11 January 2024: "nearly 20k UK primary schools signed up for kits"; "Over 1 million uses of our Python editor in the first year".',
    localProject: 'The board already speaks Python. After the 2023 BBC micro:bit the next gen campaign offered every UK primary school a free class set of 30 (almost 700,000 devices; nearly 20,000 schools signed up), most UK primary children have met the micro:bit through MakeCode blocks. The page explains, from the Foundation\'s own material, that the same board runs Python in the Foundation\'s Python editor, maps the ideas children met in blocks onto Python, then describes the next step to Python on a computer for bigger programs and data, with advice for families who own a board. It states plainly that we run no micro:bit course, sell no boards, and have no connection with the BBC, the Foundation or Nominet. Lesson family: a national hardware giveaway as the bridge from blocks to typed code.',
    requiredMentions: ['700,000', 'nearly 20,000', 'Python editor', 'do not sell'],
    sources: [
      { claim: 'Micro:bit Educational Foundation About overview: non-profit status and reach figures, including the UK student survey finding.', url: 'https://microbit.org/about/overview/' },
      { claim: 'microbit.org Code and AI page: MakeCode, the JavaScript view, and the Foundation\'s description of Python and its Python editor.', url: 'https://microbit.org/code-ai/' },
      { claim: 'microbit.org news, 15 May 2023: BBC micro:bit the next gen announcement, almost 700,000 devices, 30 per school, delivery dates.', url: 'https://microbit.org/news/2023-05-15/bbc-microbit-the-next-gen-groundbreaking-initiative-announced/' },
      { claim: 'microbit.org news, 11 January 2024: nearly 20,000 UK primary schools signed up, and over 1 million Python editor uses in the first year.', url: 'https://microbit.org/news/2024-01-11/our-reflections-on-2023/' }
    ],
    rejectedClaims: [
      'That every school received micro:bits: the offer went to all primary schools and nearly 20,000 signed up; the page says so rather than claiming universal receipt.',
      'The 88% UK figure as proof of learning: presented as a survey of enjoyment, as the Foundation reports it.',
      'That we teach MicroPython on the board: we do not run a micro:bit course, and the page says so.',
      'Any affiliation with the BBC, the Foundation or Nominet: none.',
      'Any promise of progress, which we decline.'
    ]
  }
};
