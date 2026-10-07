'use strict';
// After Scratch: the next step to Python, Australia (ag- topic door; AU cluster Phase 2, row 35).
// Demand: our Search Console, Australia, 16 months: "python vs scratch for kids" 111 impressions at position 11.8.
// Sources, read raw on 7 October 2026 (curl, default agent):
//  - Scratch Foundation, scratch-blocks msg/json/en.json: "ask %1 and wait", "answer", "pick random %1 to %2",
//    "repeat until %1", "if %1 then", "else", "say %1", "set %1 to %2", "when %1 clicked", "join %1 %2".
//  - Python documentation, random module: randint "Return a random integer N such that a <= N <= b. Alias for
//    randrange(a, b+1)."
//  - python.org: "Latest: Python 3.14.8".
//  - ACARA, Australian Curriculum v9, Digital Technologies content F-6 and 7-10 (.docx): AC9TDI6P05 (visual
//    programs with variables and input) and AC9TDI8P09 (general-purpose language).
// Lesson family: a Scratch-to-Python translation table, block by block, for one guess-the-number game; the
// condition flip from "repeat until guess = secret" to "while guess != secret"; our halving check (worst case
// 7 guesses for 1 to 100, since 2 to the power 7 is 128) computed in Python by us.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'SCRATCH TO PYTHON', blurb: 'What comes after Scratch for Australian kids: when to move to Python, a block-by-block translation of one real game, and the four traps that catch new Python programmers.' },
  slug: 'after-scratch-next-step-python-australia',
  code: 'aspy',
  accent: '#99335A',
  accentRationale: 'After Scratch, the next step to Python, Australia: a deep waratah red chosen by hand, muted, at least 10 RGB units from every accent in use and 40 from every Australian page',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'After Scratch: Python, Australia',
  title: 'After Scratch: Moving to Python, for Australian Kids',
  description: 'What comes after Scratch? When Australian kids are ready for Python, a block-by-block translation of a real Scratch game, and the four traps that catch beginners.',
  ogDescription: 'Your child has outgrown Scratch. When to move to Python, one game translated block by block, and the four traps that catch every new Python programmer.',
  twitterDescription: 'After Scratch, Python: when Australian kids are ready, and one game translated block by block.',
  pageName: 'After Scratch: Moving to Python',
  webPageDescription: 'A guide for Australian families to the step from Scratch to Python: readiness signs, a block-by-block translation of a guess-the-number game, common beginner traps and live online lessons.',
  courseDescription: 'Live online lessons that take Australian children from Scratch to confident Python, translating their own Scratch projects into text code.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'After Scratch: Python',
  navLinks: [
    { href: '#ready', label: 'Ready?' },
    { href: '#translate', label: 'Block by block' },
    { href: '#traps', label: 'Four traps' },
    { href: '#compare', label: 'Scratch and Python' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 9 to 14 &middot; Live online',
  h1: 'After Scratch: moving to Python',
  lede: 'Sooner or later most keen Scratch coders hit a wall. Their projects have grown so large that scrolling around the blocks is a chore, they want something Scratch cannot easily do, or an older cousin has shown them "real code" and they want in. That moment is the right time to move to Python, and it is far gentler than parents fear. Almost every idea a child has used in Scratch has a direct Python equivalent; what changes is that they now type it. This page explains how to tell when a child is ready, translates one complete Scratch game into Python block by block, and lists the four traps that catch almost every new Python programmer so you can spot them coming.',
  secondaryCta: { href: '#translate', label: 'See a game translated' },
  wa: 'Hello Modern Age Coders, our child in Australia knows Scratch and wants to learn Python. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; every Scratch idea carried into Python',
  spec: [
    ['For', 'Scratch coders, about 9 to 14'],
    ['Moving to', 'Python'],
    ['Usual timing', 'After a year or so of Scratch'],
    ['First project', 'A game they already built'],
    ['Biggest change', 'Typing instead of snapping'],
    ['Format', 'Live online lessons'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The usual next step after Scratch is Python, a text language that keeps every idea a child already knows (loops, variables, decisions, input) but asks them to type it. Most children are ready somewhere between nine and twelve, once their Scratch projects feel cramped and they can type short words comfortably. The smoothest way across is to rebuild a game they already made in Scratch, line by line, in Python.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Courses for the move from Scratch to Python',
    lede: 'Choose by age. Each one starts by connecting Python to what the child already knows from Scratch.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'ASPY / 01', title: 'Python and AI for Kids', note: 'Ages 9 to 12 in the course\'s own words. Games, turtle drawings and small AI projects, starting from Scratch ideas.' },
      { course: 'python-complete-masterclass-teens', code: 'ASPY / 02', title: 'Python for Teens', note: 'Ages 13 to 18. A full year from first programs to confident, well-structured Python.' },
      { course: 'maths-through-coding', code: 'ASPY / 03', title: 'Maths Through Coding', note: 'Ages 10 to 15. Python used as a tool for school maths, for children who enjoy numbers.' }
    ]
  },

  sections: [
    {
      id: 'ready', tint: 'tint', eyebrow: 'Readiness',
      h2: 'Five signs a child is ready to leave Scratch',
      lede: 'Age matters less than these signs. A nine year old who shows four of them is often more ready than a twelve year old who shows one.',
      body: [
        { kind: 'table', caption: 'Signs of readiness for Python (our teaching experience)', head: ['Sign', 'What you might notice'], rows: [
          ['Big projects', 'Their Scratch projects have many sprites and long scripts that are hard to scroll through'],
          ['Variables used freely', 'They invent variables of their own for scores, speeds and timers'],
          ['Frustration with blocks', 'They complain that something would be easier "if I could just type it"'],
          ['Comfortable typing', 'They type short words and numbers without hunting for every key'],
          ['Curiosity about real code', 'They ask what professional programmers use, or try copying code they have seen']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Do not rush it',
          left: [
            'A child who moves to Python too early can lose confidence: every error message feels like failure. A few more months of ambitious Scratch projects is never wasted, because the ideas carry over.',
            'If a child shows only one or two signs, we often suggest a bigger Scratch project first, or Roblox Studio, which introduces text coding inside a familiar world.'
          ],
          rightH3: 'Do not wait too long either',
          right: [
            'Children who stay in Scratch long after they are ready can start to see coding as something for little kids. Moving to Python at that point re-energises them.',
            'The free first class is a good test: the teacher tries a few lines of Python and watches whether the child is excited or deflated.'
          ] },
        { kind: 'p', mt: true, html: 'The Australian Curriculum makes the same move. Years 5 and 6 build "visual programs" with variables and input (AC9TDI6P05); from Years 7 and 8, students write programs "in a general-purpose programming language" (AC9TDI8P09). Doing it a little earlier at home just means school feels familiar. Families still deciding between languages can compare them on our page about <a class="ag-inline-link" href="/kids-coding-languages-australia">kids coding languages</a>.' }
      ]
    },
    {
      id: 'translate', tint: 'deep', eyebrow: 'A worked example',
      h2: 'One Scratch game, translated block by block',
      lede: 'Our favourite bridge project is a guess-the-number game. The computer picks a secret number from 1 to 100, the player guesses, and the computer answers "Higher!" or "Lower!" until the guess is right. Most children have built something like it in Scratch.',
      body: [
        { kind: 'table', caption: 'The translation table: Scratch block to Python line (block names from the Scratch Foundation\'s own block definitions)', head: ['Scratch block', 'Python', 'What changes'], rows: [
          ['when green flag clicked', 'the program starts at the top of the file', 'No start block: Python runs from the first line'],
          ['set secret to (pick random 1 to 100)', 'secret = random.randint(1, 100)', 'Needs import random at the top'],
          ['set guess to 0', 'guess = 0', 'Exactly the same idea, typed'],
          ['repeat until (guess = secret)', 'while guess != secret:', 'The condition flips: until equal becomes while not equal'],
          ['ask (Guess a number) and wait', 'input("Guess a number: ")', 'The question is typed in quotation marks'],
          ['set guess to (answer)', 'guess = int(input(...))', 'int() turns the typed text into a number'],
          ['if (guess &lt; secret) then say Higher!', 'if guess &lt; secret: print("Higher!")', 'A colon and indentation replace the C-shaped block'],
          ['if (guess &gt; secret) then say Lower!', 'elif guess &gt; secret: print("Lower!")', 'elif means "otherwise, if"'],
          ['say You got it!', 'print("You got it!")', 'Output goes to the screen as text']
        ] },
        { kind: 'p', mt: true, html: 'Put together, the Python version is ten lines long, and we ran it to check it behaves exactly like the Scratch game. Python\'s documentation describes <code>random.randint(a, b)</code> as returning "a random integer N such that a &lt;= N &lt;= b", so 1 and 100 are both possible, just like Scratch\'s <em>pick random 1 to 100</em>.' },
        { kind: 'two', mt: true,
          leftH3: 'The flip that catches everyone',
          left: [
            'Scratch says <em>repeat until</em> the guess equals the secret. Python\'s loop says <em>while</em> the guess does not equal the secret. They mean the same thing, but the condition is turned inside out.',
            'Children who copy the Scratch condition straight across write <code>while guess == secret</code>, and the loop never runs. Spotting why is one of the most valuable ten minutes in the whole course.'
          ],
          rightH3: 'A bonus question for keen players',
          right: [
            'How many guesses does a clever player need at most? If they always guess the middle of what is left, each answer halves the possibilities. Seven halvings cover 128 numbers, so 7 guesses are always enough for 1 to 100.',
            'We checked this by running the halving strategy for all 100 secret numbers in Python. The worst case was exactly 7. Children love testing it against a friend.'
          ] },
        { kind: 'source', html: 'Sources, read 7 October 2026: block labels from the Scratch Foundation\'s <a class="ag-inline-link" href="https://github.com/scratchfoundation/scratch-blocks" rel="noopener" target="_blank">scratch-blocks</a> repository (msg/json/en.json); <a class="ag-inline-link" href="https://docs.python.org/3/library/random.html" rel="noopener" target="_blank">Python documentation for the random module</a>. The ten-line game and the halving check are our own code.' }
      ]
    },
    {
      id: 'traps', tint: 'tint', eyebrow: 'Four traps',
      h2: 'The four traps that catch new Python programmers',
      lede: 'Every Scratch coder who moves to Python meets these. None of them is a sign of a weak student; they are features of typed code that blocks protected them from.',
      body: [
        { kind: 'table', caption: 'Beginner traps when moving from Scratch to Python', head: ['Trap', 'What happens', 'How we teach past it'], rows: [
          ['Indentation', 'Code inside a loop or if is not indented, so Python complains or runs it at the wrong time', 'Children colour the indented lines on paper first, matching each to the C-shaped block it replaces'],
          ['= and ==', 'They write if guess = secret, and Python reports an error', 'One equals sign stores a value; two compare. We say "becomes" and "is equal to" aloud'],
          ['Text is not a number', 'input() gives text, so comparing it with a number fails', 'We print the type of the value so they see "str" and know to use int()'],
          ['Flipped conditions', 'A Scratch "repeat until" is copied straight into a while loop', 'Translating the guessing game, where the flip is unavoidable']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Read the error', p: 'Python error messages name the line and the kind of problem. Reading them slowly, aloud, is the habit we build in the first week.' },
          { h3: 'Change one thing', p: 'When something breaks, change one thing and run again. Changing five things at once hides which one mattered.' },
          { h3: 'Predict, then run', p: 'Before pressing run, say what should happen. The gap between the prediction and the result is where the learning is.' }
        ] }
      ]
    },
    {
      id: 'compare', tint: '', eyebrow: 'Scratch and Python',
      h2: 'Python vs Scratch for kids: what each does well',
      lede: 'The comparison parents ask about most. They are not rivals; they are stages. But each has real strengths.',
      body: [
        { kind: 'table', caption: 'Scratch and Python side by side', head: ['', 'Scratch', 'Python'], rows: [
          ['How you code', 'Drag and snap blocks', 'Type text'],
          ['Typing errors', 'Impossible', 'Common at first, then rare'],
          ['Graphics and sound', 'Built in from the first minute', 'Needs a library such as turtle or Pygame'],
          ['Large projects', 'Hard to organise beyond a few screens', 'Split into functions and files'],
          ['What it leads to', 'Mainly more Scratch', 'Web, data, AI, games, school and university computing'],
          ['Cost', 'Free, in a browser', 'Free to download; the current release on python.org is 3.14.8']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What children miss from Scratch',
          left: [
            'Instant graphics. A Scratch cat moves the moment you click; a first Python program prints text. We bring graphics back early with the turtle library, so children draw spirals and stars within their first few lessons.',
            'Sharing. Scratch has its own community site. Python projects are shared differently, by running them for family or, later, publishing them on the web.'
          ],
          rightH3: 'What children gain',
          right: [
            'Freedom. Python can read files, talk to websites, crunch numbers and run AI models. The ceiling is gone.',
            'Respect. Many children find it deeply motivating to write the same language used by professional programmers. Our <a class="ag-inline-link" href="/blog/scratch-vs-python-which-better-young-learners">longer Scratch and Python comparison</a> covers the decision for younger learners.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Four stages from Scratch coder to Python coder',
    lede: 'With a weekly lesson, most children who arrive confident in Scratch reach the third stage within two terms.',
    table: { caption: 'Crossing from Scratch to Python', head: ['Stage', 'What your child can do'], rows: [
      ['1. Translate', 'Rebuild a small Scratch game in Python with help, using a translation table'],
      ['2. Write', 'Write a new Python program from a blank file, fixing their own error messages'],
      ['3. Organise', 'Split a program into functions and reuse them, which Scratch made awkward'],
      ['4. Extend', 'Use libraries for graphics, data or AI to build something Scratch could not']
    ] },
    left: { h3: 'Should they keep using Scratch?', ps: [
      'For fun, absolutely. Many children keep a Scratch project going alongside Python for months, and switching between them strengthens both.',
      'In lessons we focus on Python once the move starts, so the new habits stick.'
    ] },
    right: { h3: 'School terms and holidays', ps: [
      'Lessons run through the four school terms if you wish and can pause in holidays. Billing is monthly.',
      'The day and time are agreed in the free first class, in your own state\'s time.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses after Scratch',
    lede: 'Grouped by where a child wants their Python to take them.',
    bands: [
      { num: 'I', h3: 'First Python', sub: 'The core step', courses: [
        { code: 'ASPY / FIRST / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'From Scratch ideas to Python games and AI.' },
        { code: 'ASPY / FIRST / 02', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Beginner to advanced across a full year.' },
        { code: 'ASPY / FIRST / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem Solving for Kids', blurb: 'Logic and algorithms to sharpen thinking first.' }
      ] },
      { num: 'II', h3: 'Python for making', sub: 'Games and web', courses: [
        { code: 'ASPY / MAKE / 01', slug: 'game-development-masterclass-for-kids', title: 'Game Development for Kids', blurb: 'Bigger games across Scratch, Roblox and beyond.' },
        { code: 'ASPY / MAKE / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Game Coding', blurb: 'Another text language, inside Roblox Studio.' },
        { code: 'ASPY / MAKE / 03', slug: 'kids-ai-web-development-course', title: 'Web Development for Kids', blurb: 'Web pages, the other common next step.' }
      ] },
      { num: 'III', h3: 'Python for thinking', sub: 'Maths and data', courses: [
        { code: 'ASPY / THINK / 01', slug: 'maths-through-coding', title: 'Maths Through Coding', blurb: 'School maths explored with Python.' },
        { code: 'ASPY / THINK / 02', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How machine learning works, ages 8 to 14.' },
        { code: 'ASPY / THINK / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive Programming', blurb: 'Algorithm puzzles for confident teens.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons for new Python coders in Australia',
    lede: 'We teach from India, a few hours behind every Australian state, so after-school and weekend lessons in Australia fall comfortably in our working day.',
    slots: [
      { time: 'Weekday, after school', l: 'The usual choice for primary-age coders.' },
      { time: 'Weekday, early evening', l: 'Popular with high school students.' },
      { time: 'Weekend', l: 'Longer sessions for translating bigger projects.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'Your child translates a few Scratch blocks into Python with a teacher, which shows quickly whether they are ready.' },
      { h3: 'Small groups', p: 'Five to ten children making the same move from blocks to text.' },
      { h3: 'One to one', p: 'For a child who wants to bring a big Scratch project across.' },
      { h3: 'Their keyboard', p: 'The child types every line; teachers point, question and explain.' },
      { h3: 'Parents can see', p: 'Lessons are live, so you can watch the first Python steps.' },
      { h3: 'Bring a project', p: 'Children can bring their own Scratch game to translate.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Finished projects by students who once started in Scratch. Browse more in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Taken verbatim from reviews on our Google profile.',

  fees: {
    h2: 'Fees for Python lessons',
    lede: 'Australian families pay a monthly fee in US dollars. There is nothing to pay to join and no fixed term.',
    free: ['A few Scratch blocks turned into Python', 'An honest view on readiness', 'No card or bank details'],
    group: ['Five to ten children per class', 'One teacher across the months', 'Classmates making the same move', 'Stop after any month'],
    one: ['Focused on your child\'s own projects', 'Pace set by them', 'Good for translating a big game']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'What parents ask about the step after Scratch',
    items: [
      { q: 'What comes after Scratch?', a: 'For most children, Python. It keeps every idea from Scratch, such as loops, variables and decisions, but is typed as text and can build much larger and more varied projects. JavaScript and Roblox Luau are other common next steps.' },
      { q: 'Python vs Scratch for kids: which is easier?', a: 'Scratch is easier to start because there are no typing errors. Python is easier for large projects because code can be organised into functions and files. Children usually do Scratch first, then Python.' },
      { q: 'At what age should a child move from Scratch to Python?', a: 'Usually between nine and twelve, depending on how big their Scratch projects are and how comfortably they type. Readiness matters more than age.' },
      { q: 'What is the hardest part of moving to Python?', a: 'Usually indentation, mixing up = and ==, and remembering that typed input is text. These are new because Scratch blocks quietly prevented them.' },
      { q: 'Is Python free?', a: 'Yes. Python is free to download from python.org, and beginners can also use free online editors.' },
      { q: 'Can my child keep using Scratch while learning Python?', a: 'Yes, for fun. Many children keep a Scratch project going alongside, and moving between the two strengthens both.' },
      { q: 'How long does it take to switch from Scratch to Python?', a: 'A confident Scratch coder can usually rebuild their own small games in Python within a few weeks of weekly lessons, and write new programs independently within a term or two.' },
      { q: 'What should my child build first in Python?', a: 'Something they already built in Scratch, such as a guessing game or a quiz. Translating a known game means only the language is new, not the idea.' },
      { q: 'Does the Australian Curriculum use Python?', a: 'It does not require one language, but expects a general-purpose language from Years 7 and 8 and gives Python, JavaScript or C# as examples. Python is a common choice.' },
      { q: 'What does it cost?', a: 'The opening lesson is free and needs no card. After that there is a monthly fee for a group place or for private lessons, both shown under Fees, with no joining charge.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Australian families making the move to text coding.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our hub page for Australian families.' },
      { href: '/kids-coding-languages-australia', label: 'Kids coding languages', p: 'Python, JavaScript and Luau compared.' },
      { href: '/coding-for-year-7-australia', label: 'Coding for Year 7', p: 'When school starts using a typed language.' },
      { href: '/coding-classes-for-9-and-10-year-olds-australia', label: 'Coding for 9 and 10 year olds', p: 'The age when many children make the move.' },
      { href: '/game-development-for-kids-australia', label: 'Game development for kids', p: 'Python games and what follows.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'A first Python course at ten.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send your details and we will ring at a time that suits. In the free class your child turns a few of their own Scratch blocks into Python with a teacher, and you hear honestly whether now is the moment to move.',
    readFirst: 'Reading before you book? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a lesson in detail, and the <a class="ag-inline-link" href="/courses">courses</a> page maps out what follows Python.',
    note: 'WhatsApp is the quickest way to reach us from most Australian phones. The +91 prefix reflects our India-based team; we have no Australian office.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Scratch to Python', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/python-for-10-year-olds', label: 'Python for 10 year olds' },
        { href: '/python-for-12-year-olds', label: 'Python for 12 year olds' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/kids-coding-languages-australia', label: 'Kids coding languages' },
        { href: '/coding-for-year-7-australia', label: 'Coding for Year 7' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Repeat until becomes while not'
  },

  personalityCss: `
.ag-root.ag-aspy .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-aspy .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-aspy .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-aspy .ag-table td:nth-child(2) { font-family: 'JetBrains Mono', monospace; font-size: 0.9em; }
.ag-root.ag-aspy .ag-grid-3 h3 { letter-spacing: -0.008em; }
.ag-root.ag-aspy .ag-pick-body h3 { font-weight: 640; }
`,

  dossier: {
    curriculumAuthority: 'Australia, Years 5 to 8. ACARA, Australian Curriculum v9, Digital Technologies: AC9TDI6P05 visual programs with variables and input; AC9TDI8P09 "implement, modify and debug programs involving control structures and functions in a general-purpose programming language", elaboration "such as Python, JavaScript or C#".',
    localProject: 'A Scratch-to-Python translation table for one guess-the-number game: when green flag clicked, pick random 1 to 100 (random.randint(1, 100)), repeat until guess = secret (while guess != secret), ask and wait plus answer (int(input(...))), if then (if, elif), say (print); the Python version is ten lines and was run by us. Halving check: guessing the middle each time needs at most 7 guesses for 1 to 100 (2 to the power 7 is 128), confirmed by running all 100 cases in Python. Lesson family: block-by-block Scratch-to-Python translation.',
    requiredMentions: ['translation table', 'repeat until', 'while guess != secret', 'random.randint(1, 100)', 'a random integer N such that a', 'four traps', 'guess-the-number', 'halving', 'int() turns the typed text into a number'],
    sources: [
      { claim: 'Scratch Foundation, scratch-blocks msg/json/en.json: "ask %1 and wait", "answer", "pick random %1 to %2", "repeat until %1", "if %1 then", "else", "say %1", "set %1 to %2", "when %1 clicked".', url: 'https://github.com/scratchfoundation/scratch-blocks' },
      { claim: 'Python documentation, random module: randint "Return a random integer N such that a <= N <= b. Alias for randrange(a, b+1)."', url: 'https://docs.python.org/3/library/random.html' },
      { claim: 'python.org home page: "Latest: Python 3.14.8".', url: 'https://www.python.org/' },
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies content F-6 and 7-10: AC9TDI6P05 and AC9TDI8P09 with the Python, JavaScript or C# elaboration.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' }
    ],
    rejectedClaims: [
      'How many Scratch users move on to Python: no primary source, so no figure is given.',
      'A fixed age for switching: refused; the page gives readiness signs instead.',
      'Claims about Scratch community size or sharing rules: the Scratch site renders by script and was not read raw.',
      'That Python is "the" language of AI or of jobs: replaced by a factual list of what Python can do.',
      'Lesson length in minutes: not in our brand facts, so not stated.'
    ]
  }
};
