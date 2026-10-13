'use strict';
// Coding for Year 7, Australia (ag- topic door; AU cluster Phase 2, row 22).
// Demand: our Search Console, Australia, 16 months: "coding for year 7" 27 impressions at position 18.3.
// Sources, read raw on 7 October 2026 (curl, default agent):
//  - ACARA, Australian Curriculum v9, Digital Technologies curriculum content 7-10 (.docx): Years 7-8 band level
//    description and achievement standard; AC9TDI8K02 with the elaboration "exploring simple encryption and
//    decryption algorithms, for example ROT13 and XOR"; AC9TDI8P04, AC9TDI8P05, AC9TDI8P06 with the elaboration
//    "desk check with a table of input, variables and output"; AC9TDI8P09.
//  - ABS, Schools methodology, 2025: secondary school "from Year 7 to Year 12 in all states and territories";
//    2015 change in Queensland and Western Australia; 2022 "South Australia completed transition to year 7
//    secondary for all government and non-government schools".
// Lesson family: ROT13 and XOR as self-inverse functions, worked by hand (HELLO -> URYYB -> HELLO; H is 72,
// 72 XOR 42 is 98, 98 XOR 42 is 72) and checked in Python by us.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'YEAR 7 CODING', blurb: 'Coding in Year 7 in Australia: the first year of general-purpose programming in the Australian Curriculum, what students are expected to do, and how to prepare without doing their schoolwork for them.' },
  slug: 'coding-for-year-7-australia',
  code: 'yrsv',
  accent: '#723C4B',
  accentRationale: 'Coding for Year 7, Australia: a dusty rose chosen by hand, muted, at least 10 RGB units from every accent in use and 40 from every Australian page',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Coding for Year 7, Australia',
  title: 'Coding for Year 7 in Australia: From Blocks to Python',
  description: 'Coding for Year 7 in Australia: what Digital Technologies expects in the first year of high school, from tracing algorithms to Python, and how to get ready.',
  ogDescription: 'Year 7 is where Australian students meet a general-purpose programming language. What the curriculum asks, a worked example on simple ciphers, and how to prepare.',
  twitterDescription: 'Coding in Year 7, Australia: the jump from blocks to a real programming language, explained for families.',
  pageName: 'Coding for Year 7 in Australia',
  webPageDescription: 'A guide for Australian families to coding in Year 7: the Australian Curriculum v9 Digital Technologies expectations for Years 7 and 8, the move from visual to text programming, and live online preparation.',
  courseDescription: 'Live online coding for Australian Year 7 students: Python, algorithm tracing, functions and small projects that match the Digital Technologies curriculum for Years 7 and 8.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Coding for Year 7',
  navLinks: [
    { href: '#expects', label: 'What Year 7 expects' },
    { href: '#jump', label: 'The jump' },
    { href: '#cipher', label: 'Worked example' },
    { href: '#term', label: 'A first term' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Years 7 and 8 &middot; Live online',
  h1: 'Coding for Year 7',
  lede: 'Year 7 is a turning point for young programmers in Australia, and few families notice it happening. Through primary school, coding in class mostly means dragging blocks on a screen. From Year 7 the Australian Curriculum expects students to write programs in a general-purpose language, the kind professionals type every day, and to plan them first with flowcharts and pseudocode. At the same moment, students are changing schools, meeting new teachers and juggling a timetable full of subjects. This page explains exactly what the curriculum asks of Years 7 and 8, why the move from blocks to text catches some students out, and how a child can arrive in Year 7 already comfortable rather than scrambling to catch up.',
  secondaryCta: { href: '#expects', label: 'See what Year 7 expects' },
  wa: 'Hello Modern Age Coders, my child is starting or in Year 7 in Australia and we would like help with coding. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; preparation, never homework done for them',
  spec: [
    ['For', 'Years 6, 7 and 8'],
    ['Language', 'Usually Python'],
    ['Also covers', 'Flowcharts and pseudocode'],
    ['Skills', 'Tracing, debugging, functions'],
    ['Curriculum', 'Australian Curriculum v9'],
    ['Format', 'Live online lessons'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding for Year 7 means writing programs in a general-purpose language such as Python, after years of visual block coding in primary school. The Australian Curriculum v9 expects that by the end of Year 8 students "design and trace algorithms and implement them in a general-purpose programming language". The best preparation is a term or two of Python before or during Year 7, plus practice predicting what a program will do before running it.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three ways to get ready for Year 7',
    lede: 'Pick by how much coding your child has already done.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'YRSV / 01', title: 'Python and AI for Kids', note: 'For upper primary students, about 9 to 12, who want a head start in text coding before high school.' },
      { course: 'python-complete-masterclass-teens', code: 'YRSV / 02', title: 'Python for Teens', note: 'For students already in Year 7 or 8, from first lines of code to confident, well-organised programs.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'YRSV / 03', title: 'Problem Solving for Kids', note: 'For students who need the thinking first: breaking problems down, patterns and algorithms, ages 7 to 12.' }
    ]
  },

  sections: [
    {
      id: 'expects', tint: 'tint', eyebrow: 'The curriculum',
      h2: 'What Digital Technologies asks of Years 7 and 8',
      lede: 'The Australian Curriculum v9 groups Years 7 and 8 into one band. Its band description sets the scene in one sentence: students apply computational thinking by "designing and modifying algorithms, and implementing them in a general-purpose programming language".',
      body: [
        { kind: 'table', caption: 'Programming content descriptions for Years 7 and 8, Australian Curriculum v9 (quoted)', head: ['Code', 'Students learn to'], rows: [
          ['AC9TDI8P04', '"define and decompose real-world problems with design criteria and by creating user stories"'],
          ['AC9TDI8P05', 'design algorithms with nested control structures and show them as flowcharts and pseudocode'],
          ['AC9TDI8P06', '"trace algorithms to predict output for a given input and to identify errors"'],
          ['AC9TDI8P09', 'write, change and fix programs that use control structures and functions, in a general-purpose language']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The skill most students underrate',
          left: [
            'Tracing is the quiet star of the list. For AC9TDI8P06, ACARA suggests students might do a "desk check with a table of input, variables and output": writing down, line by line, what every variable holds as the program runs, before the computer runs it.',
            'Students who can trace find their own bugs. Students who cannot spend Year 7 changing things at random until the program works, and learning very little from it.'
          ],
          rightH3: 'Where the security ideas come in',
          right: [
            'The same band asks students to investigate how data is sent and secured on networks (AC9TDI8K02). One of ACARA\'s example activities is "exploring simple encryption and decryption algorithms, for example ROT13 and XOR".',
            'That suggestion is a gift to anyone teaching a new programmer, because both ciphers are short enough to write in a lesson and strange enough to be interesting. We work one through below.'
          ] },
        { kind: 'p', mt: true, html: 'The achievement standard for the end of Year 8 sums it up: students "design and trace algorithms and implement them in a general-purpose programming language". A child who leaves Year 6 able to read and predict simple Python is well placed to meet that standard on time.' },
        { kind: 'source', html: 'Checked on 7 October 2026 against ACARA\'s Word download of the <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Digital Technologies content for Years 7 to 10</a>. Quotation marks show ACARA\'s exact words; the other rows are close summaries. NSW and some other jurisdictions publish their own syllabuses, so a school\'s course may be organised differently.' }
      ]
    },
    {
      id: 'jump', tint: 'deep', eyebrow: 'Blocks to text',
      h2: 'Why the jump from blocks to text catches students out',
      lede: 'Most Year 7 students have coded before, usually in Scratch. The ideas carry over. The surprises are almost all about the medium.',
      body: [
        { kind: 'table', caption: 'What changes when a student moves from blocks to a typed language', head: ['In block coding', 'In Year 7 text coding', 'What helps'], rows: [
          ['Blocks only fit together in valid ways', 'One missing bracket stops the whole program', 'Reading error messages aloud and finding the line they name'],
          ['Everything is visible on one screen', 'Programs grow past what fits on screen', 'Splitting code into named functions'],
          ['A sprite shows what is happening', 'Output may be a single line of text', 'Printing values while the program runs'],
          ['Mistakes look obvious', 'Mistakes hide inside a correct-looking line', 'Tracing by hand before running']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The error message is a friend',
          left: [
            'The first time a Python program refuses to run, many students read the red text, panic and delete the last thing they typed. A better habit is to read the message slowly: it names a line number and usually the kind of mistake.',
            'We spend real lesson time on this, because a student who trusts error messages becomes independent within weeks.'
          ],
          rightH3: 'Functions are the big new idea',
          right: [
            'Scratch has custom blocks, but many primary students never use them. In Year 7, functions become central: naming a piece of code so it can be reused and tested on its own.',
            'Functions are also how a long program stays readable, which matters once a school task runs to a hundred lines.'
          ] },
        { kind: 'p', mt: true, html: 'Year 7 is the first year of secondary school across Australia; in the ABS\'s words, secondary school runs "from Year 7 to Year 12 in all states and territories". That was not always so: Queensland and Western Australia moved Year 7 into secondary school in 2015, and the ABS records that in 2022 South Australia "completed transition to year 7 secondary for all government and non-government schools". So a Year 7 student everywhere now meets text coding in a new school, often with a specialist teacher. Families still choosing a first language may find our guide to <a class="ag-inline-link" href="/kids-coding-languages-australia">kids coding languages</a> useful.' },
        { kind: 'source', html: 'Source, read 7 October 2026: <a class="ag-inline-link" href="https://www.abs.gov.au/methodologies/schools-methodology/2025" rel="noopener" target="_blank">ABS, Schools methodology, 2025</a>, schooling structure and the history of changes to the year in which secondary school begins.' }
      ]
    },
    {
      id: 'cipher', tint: 'tint', eyebrow: 'A worked example',
      h2: 'ROT13 and XOR: two ciphers that undo themselves',
      lede: 'Here is the kind of lesson we run with Year 7 students, built on ACARA\'s own suggestion. The surprising idea at its heart is a function that, applied twice, gives back exactly what you started with.',
      body: [
        { kind: 'p', html: '<strong>ROT13</strong> replaces each letter with the letter thirteen places further along the alphabet, wrapping round from Z back to A. Because the alphabet has 26 letters, moving thirteen places and then thirteen more is a full lap. So ROT13 is its own decoder: run it once to scramble a message, run it again to unscramble it. Mathematicians call a function like this <strong>self-inverse</strong>.' },
        { kind: 'table', mt: true, caption: 'ROT13 by hand (our worked example, checked in Python)', head: ['Step', 'H', 'E', 'L', 'L', 'O'], rows: [
          ['Original letter', 'H', 'E', 'L', 'L', 'O'],
          ['Thirteen places on', 'U', 'R', 'Y', 'Y', 'B'],
          ['Thirteen places again', 'H', 'E', 'L', 'L', 'O']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'XOR does the same with numbers',
          left: [
            'Computers store every letter as a number. In the code most systems use, capital H is 72. XOR (exclusive or) compares two numbers bit by bit and keeps a 1 wherever the bits differ.',
            'Take a secret key of 42. Then 72 XOR 42 gives 98, which happens to be the code for a lower-case b. Apply XOR with 42 to 98 and you get 72 again: H is back. XOR with the same key is self-inverse too, which is why it appears inside real encryption.'
          ],
          rightH3: 'What students write',
          right: [
            'In Python, ROT13 is a short function with a loop over the letters, a calculation with the remainder operator to wrap round the alphabet, and a test for whether each character is a letter at all.',
            'Students then write a second function that applies the first one twice and checks the result matches the original. That test is the real lesson: it turns "I think it works" into evidence.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Trace it first', p: 'Before running, students fill in a table: each letter, its position, its position plus thirteen, the wrapped position and the new letter.' },
          { h3: 'Then break it', p: 'What happens with a space, a full stop or a lower-case letter? Each answer is a small decision the student has to program.' },
          { h3: 'Then question it', p: 'ROT13 is easy to break, so why is it taught? Because it shows the shape of encryption without the maths of real ciphers.' }
        ] },
        { kind: 'p', mt: true, html: 'We check every worked example ourselves: <code>HELLO</code> becomes <code>URYYB</code> and back, and 72 XOR 42 is 98 and back to 72. Students are encouraged to check ours too.' }
      ]
    },
    {
      id: 'term', tint: '', eyebrow: 'A first term',
      h2: 'A ten-week plan for a Year 7 student new to text coding',
      lede: 'Australian school terms run roughly ten weeks. This is how we would use one with a student who has done some Scratch but no typed code.',
      body: [
        { kind: 'table', caption: 'Our ten-week starter plan (one or two live lessons a week)', head: ['Weeks', 'Focus', 'By the end the student can'], rows: [
          ['1 and 2', 'First programs, printing and input', 'Run a program, read an error message and fix a typo'],
          ['3 and 4', 'Variables and decisions', 'Write a small quiz that keeps score and reacts to answers'],
          ['5 and 6', 'Loops and tracing', 'Predict a loop\'s output in a desk check table before running it'],
          ['7 and 8', 'Functions', 'Split a program into named functions and test each one'],
          ['9 and 10', 'A small project', 'Build and explain a ROT13 message machine or a guessing game']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Flowcharts and pseudocode too',
          left: [
            'Because the curriculum asks for algorithms to be planned in flowcharts and pseudocode, students draw at least one plan before each project. It feels slow at first and saves time by week six.',
            'We keep the plans simple: boxes, diamonds and arrows on paper, photographed and shared in the lesson.'
          ],
          rightH3: 'Faster for some students',
          right: [
            'A student who has done Python before may cover this plan in five weeks and move on to lists, files and larger projects.',
            'A student who finds typing hard may spend longer on weeks one to four. The plan bends to the student, not the other way round.'
          ] }
      ]
    },
    {
      id: 'help', tint: 'deep', eyebrow: 'Helping at home',
      h2: 'How parents can help without knowing how to code',
      lede: 'You do not need to read Python to support a Year 7 coder. A few habits matter far more than technical knowledge.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ask for a prediction', p: 'Before they run a program, ask what they expect to happen. Matching the prediction to the result is the core habit of programming.' },
          { h3: 'Ask them to teach you', p: 'Explaining a program to someone who does not code exposes the parts the student only half understands.' },
          { h3: 'Protect the struggle', p: 'Being stuck for ten minutes on a bug is normal and useful. Resist fixing it for them, and resist letting an AI tool fix it for them too.' }
        ] },
        { kind: 'p', mt: true, html: 'About AI tools: many Year 7 students now have access to chatbots that write code. Used well, they explain error messages. Used badly, they hand over working code the student cannot explain, which collapses the moment a teacher asks a question. Our page on <a class="ag-inline-link" href="/how-we-teach">how we teach</a> sets out how lessons keep students explaining their own code, with or without an AI tool open.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages through Years 7 and 8',
    lede: 'With one or two lessons a week, most students reach the third stage during Year 7.',
    table: { caption: 'From first lines to confident programs', head: ['Stage', 'What your child can do'], rows: [
      ['1. Reads code', 'Predicts what a short program will print and explains each line'],
      ['2. Writes code', 'Writes a working program with variables, decisions and loops from a blank file'],
      ['3. Organises code', 'Splits a longer program into functions and tests each one separately'],
      ['4. Plans code', 'Plans a project in pseudocode, builds it, traces it and fixes it independently']
    ] },
    left: { h3: 'Is Year 7 too late to start?', ps: [
      'Not at all. Plenty of strong programmers wrote their first line in Year 7 or later. Starting in Year 7 just means pairing the text coding with the thinking skills primary school would otherwise have built.',
      'For those students we often add a few weeks of problem-solving work alongside Python.'
    ] },
    right: { h3: 'Fitting it round school', ps: [
      'Lessons are after school or at the weekend and continue across the four school terms if a family wants. Billing is monthly, so pausing in a busy term is easy.',
      'We do not do or check assessed school work; we build the skills that make it manageable.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses for Years 6 to 8',
    lede: 'Grouped by where a student is starting from.',
    bands: [
      { num: 'I', h3: 'Before Year 7', sub: 'Upper primary', courses: [
        { code: 'YRSV / PRE / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'A first text language with games and small AI projects.' },
        { code: 'YRSV / PRE / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem Solving for Kids', blurb: 'Decomposition, patterns and algorithms before code.' },
        { code: 'YRSV / PRE / 03', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'For students who have not yet coded with blocks.' }
      ] },
      { num: 'II', h3: 'During Years 7 and 8', sub: 'Lower secondary', courses: [
        { code: 'YRSV / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Python from first lines to organised, tested programs.' },
        { code: 'YRSV / SEC / 02', slug: 'kids-ai-web-development-course', title: 'Web Development for Kids', blurb: 'HTML, CSS and a first look at JavaScript.' },
        { code: 'YRSV / SEC / 03', slug: 'maths-through-coding', title: 'Maths Through Coding', blurb: 'Python used to explore the maths of Years 5 to 10.' }
      ] },
      { num: 'III', h3: 'Stretch', sub: 'Keen Year 8 students', courses: [
        { code: 'YRSV / EXT / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive Programming for Teens', blurb: 'Algorithm puzzles for students who love a challenge.' },
        { code: 'YRSV / EXT / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for Teens', blurb: 'A second language through interactive web pages.' },
        { code: 'YRSV / EXT / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for Teens', blurb: 'Ethical, defensive security for students drawn to ciphers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons around a Year 7 timetable',
    lede: 'Our teachers are based in India. Every Australian state is ahead of India time, by between two and a half hours (Perth) and five and a half (the eastern states in summer), so after-school lessons in Australia fall in the Indian afternoon.',
    slots: [
      { time: 'Weekday, late afternoon', l: 'Popular with Year 7 students who travel to a new school.' },
      { time: 'Weekday, early evening', l: 'Works around sport and homework.' },
      { time: 'Saturday or Sunday', l: 'A longer session for project work.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'The teacher checks what your child can already read and write in code.' },
      { h3: 'Groups', p: 'Fifteen to twenty students of a similar level, usually all in Years 6 to 8.' },
      { h3: 'One to one', p: 'Helpful for a student who is anxious about text coding or far ahead of their class.' },
      { h3: 'Their own code', p: 'The student types every line. Teachers explain, ask and point at errors.' },
      { h3: 'Parents can watch', p: 'Every lesson is live, so you can see exactly how your child is taught.' },
      { h3: 'No ghost-writing', p: 'Assessment tasks are never written or checked by our teachers.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'A few finished projects by our students, several of whom began text coding around Year 7. See more in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Word for word as parents and students wrote them on Google.',

  fees: {
    h2: 'Fees for Year 7 coding',
    lede: 'Australian families pay one monthly price in US dollars. Nothing is charged to join, and there is no term-long contract.',
    free: ['A short Python task with a teacher', 'A recommended starting course', 'No card or bank details'],
    group: ['Fifteen to twenty students per class', 'The same teacher each week', 'Classmates of a similar level', 'Stop after any month'],
    one: ['Lessons shaped around your child', 'A pace that suits them', 'Time for one ambitious project']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'What parents ask about coding in Year 7',
    items: [
      { q: 'What is coding in Year 7?', a: 'In Australia, Year 7 is usually when students move from block coding to writing programs in a typed, general-purpose language such as Python, and learn to plan programs with flowcharts and pseudocode.' },
      { q: 'What coding language is used in Year 7?', a: 'The Australian Curriculum does not require one language, but gives Python, JavaScript or C# as examples of a general-purpose language. Python is the most common choice for beginners.' },
      { q: 'What is a desk check?', a: 'A desk check is working through a program by hand, line by line, writing down what each variable holds and what the program outputs. ACARA suggests it for tracing algorithms in Years 7 and 8.' },
      { q: 'What is ROT13?', a: 'ROT13 is a simple cipher that replaces each letter with the letter thirteen places further along the alphabet. Applying it twice returns the original message, so the same function both scrambles and unscrambles.' },
      { q: 'Should my child learn Python before Year 7?', a: 'It helps. A term or two of Python in Year 5 or 6 means the ideas in Year 7 Digital Technologies arrive as revision rather than as a shock. It is not required, though.' },
      { q: 'My child loved Scratch but struggles with Python. Is that normal?', a: 'Very. The thinking carries over; the typing, punctuation and error messages are new. Most students settle within a few weeks with practice reading error messages.' },
      { q: 'Do you help with school coding assignments?', a: 'We teach the skills that school tasks draw on, but we never write, complete or check assessed work. That keeps the work honestly the student\'s own.' },
      { q: 'Is Year 7 the start of high school everywhere in Australia?', a: 'Yes. According to the ABS, secondary school runs from Year 7 to Year 12 in all states and territories, after Queensland and Western Australia changed in 2015 and South Australia completed its change in 2022.' },
      { q: 'How often should a Year 7 student have lessons?', a: 'Once a week is enough to make steady progress; twice a week suits a student preparing for a particular term or catching up quickly.' },
      { q: 'What does it cost?', a: 'The opening lesson is free with no card needed. Monthly prices for group places and private lessons are listed in the fees section further up this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Australian students around Years 6 to 8.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'The index of our pages for Australian students.' },
      { href: '/kids-coding-languages-australia', label: 'Kids coding languages', p: 'Which language to start with, and why.' },
      { href: '/after-scratch-next-step-python-australia', label: 'After Scratch: Python', p: 'The step from blocks to text.' },
      { href: '/coding-classes-for-11-and-12-year-olds-australia', label: 'Coding for 11 and 12 year olds', p: 'The last primary years, just before Year 7.' },
      { href: '/python-for-12-year-olds', label: 'Python for 12 year olds', p: 'A closer look at Python at this age.' },
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy practice', p: 'For the Year 7 NAPLAN tests in March.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send your details and we will call at a time that suits. In the free class your child reads and writes a little Python with a teacher, and you hear honestly whether they are ready for Year 7 coding and what would help.',
    readFirst: 'Curious how a lesson actually runs? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> breaks one down, and our <a class="ag-inline-link" href="/courses">courses</a> page lists what comes after Year 8.',
    note: 'Australian families often find WhatsApp the quickest way to reach us. Our number begins +91 because the team is in India, and we do not have an Australian office.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Years 6 to 8', links: [
        { href: '/kids-coding-languages-australia', label: 'Kids coding languages' },
        { href: '/after-scratch-next-step-python-australia', label: 'After Scratch: Python' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/python-for-12-year-olds', label: 'Python for 12 year olds' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering' },
        { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Predict it, run it, then explain the difference'
  },

  personalityCss: `
.ag-root.ag-yrsv .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-yrsv .ag-capsule { border-left-width: 6px; }
.ag-root.ag-yrsv .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-yrsv .ag-table caption { font-weight: 600; }
.ag-root.ag-yrsv .ag-grid-3 h3 { letter-spacing: -0.008em; }
.ag-root.ag-yrsv .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, Years 7 and 8. ACARA, Australian Curriculum v9, Digital Technologies 7-10: band description "designing and modifying algorithms, and implementing them in a general-purpose programming language"; achievement standard "design and trace algorithms and implement them in a general-purpose programming language"; AC9TDI8P04 "define and decompose real-world problems with design criteria and by creating user stories"; AC9TDI8P06 "trace algorithms to predict output for a given input and to identify errors", elaboration "desk check with a table of input, variables and output"; AC9TDI8K02 elaboration "exploring simple encryption and decryption algorithms, for example ROT13 and XOR". ABS Schools methodology 2025: secondary school "from Year 7 to Year 12 in all states and territories"; Queensland and Western Australia 2015; South Australia 2022 "completed transition to year 7 secondary for all government and non-government schools".',
    localProject: 'ROT13 and XOR as self-inverse functions: HELLO becomes URYYB and back; capital H is 72, 72 XOR 42 is 98 (lower-case b), 98 XOR 42 is 72; worked by hand and checked in Python by us. Lesson family: self-inverse functions through two ciphers ACARA names for Years 7 and 8.',
    requiredMentions: ['URYYB', 'self-inverse', 'ROT13 and XOR', 'AC9TDI8P06', 'AC9TDI8P04', 'desk check with a table of input, variables and output', 'completed transition to year 7 secondary', '72 XOR 42', 'design and trace algorithms'],
    sources: [
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies curriculum content 7-10: Years 7-8 band description and achievement standard; AC9TDI8K02, AC9TDI8P04, AC9TDI8P05, AC9TDI8P06 and AC9TDI8P09 with elaborations.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' },
      { claim: 'ABS, Schools methodology, 2025: secondary school from Year 7 to Year 12 in all states and territories; Queensland and Western Australia changed in 2015; South Australia completed the change in 2022.', url: 'https://www.abs.gov.au/methodologies/schools-methodology/2025' },
      { claim: 'ROT13 and XOR examples computed by us in Python on 7 October 2026: codecs rot13 of HELLO is URYYB; ord("H") is 72; 72 ^ 42 is 98; 98 ^ 42 is 72.', url: 'https://docs.python.org/3/library/codecs.html' }
    ],
    rejectedClaims: [
      'The language each state or school uses in Year 7: states implement the curriculum differently and NSW writes its own syllabuses, so no school-level claim is made.',
      'Percentages of students who find the move from blocks to text difficult: no primary source, so the page describes the difficulties without numbers.',
      'Any promise of better school results or marks: refused; the page offers preparation, never outcomes.',
      'ROT13 or XOR as secure encryption: refused; the page says ROT13 is easy to break and is taught for its shape.',
      'Fixed evening lesson hours: agreed in the free class (spec decision 7).'
    ]
  }
};
