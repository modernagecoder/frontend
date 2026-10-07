'use strict';
// Kids coding languages, Australia (ag- topic door; AU cluster Phase 2, row 20).
// Demand: our Search Console, Australia, 16 months: "kids coding languages" 78 impressions at position 9.0.
// Sources, read raw on 7 October 2026 (curl, default agent):
//  - Scratch Foundation, scratch-blocks repository, msg/json/en.json: block labels "repeat %1", "say %1 for %2
//    seconds", "change %1 by %2", "set %1 to %2", "when %1 clicked".
//  - python.org home page: "Python is a programming language that lets you work quickly and integrate systems
//    more effectively"; "Latest: Python 3.14.8".
//  - MDN Web Docs, JavaScript: "a lightweight interpreted (or just-in-time compiled) programming language with
//    first-class functions"; "most well-known as the scripting language for Web pages".
//  - lua.org/about.html: "Lua is a powerful, efficient, lightweight, embeddable scripting language"; designed,
//    implemented and maintained "by a team at PUC-Rio".
//  - luau.org: "a small, fast, and embeddable programming language based on Lua with a gradual type system";
//    Luau README (github.com/luau-lang/luau): "Luau is used by Roblox game developers to write game code".
//  - ACARA, Australian Curriculum v9, Digital Technologies content F-6 and 7-10 (.docx): AC9TDI6P02,
//    AC9TDI8P05, AC9TDI8P09 elaboration "such as Python, JavaScript or C#".
// Lesson family: typing load, the number of characters and symbols a child must type to write the same small
// program (a countdown) in Scratch, Python, JavaScript and Lua. Counts are our own arithmetic on our own code.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'KIDS CODING LANGUAGES', blurb: 'Which coding language suits an Australian child at each age: Scratch, Python, JavaScript, Lua and Luau compared on what they are for and how much typing they ask of small hands.' },
  slug: 'kids-coding-languages-australia',
  code: 'klng',
  accent: '#274569',
  accentRationale: 'Kids coding languages, Australia: a slate harbour blue chosen by hand, muted, at least 10 RGB units from every accent in use and 40 from every Australian page',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Kids coding languages, Australia',
  title: 'Kids Coding Languages: Which One First? Australia Guide',
  description: 'Kids coding languages compared for Australian families: Scratch, Python, JavaScript, Lua and Luau, what each is for, and which suits each age. Live online classes.',
  ogDescription: 'Scratch, Python, JavaScript, Lua and Luau compared for Australian kids: what each language is for, how much typing it asks of a child, and which to start with at each age.',
  twitterDescription: 'Which coding language should an Australian child learn first? Scratch, Python, JavaScript, Lua and Luau compared, age by age.',
  pageName: 'Kids Coding Languages in Australia',
  webPageDescription: 'A guide for Australian parents to the coding languages children learn, what each one is for, how much typing each demands, and how they map to the Australian Curriculum v9.',
  courseDescription: 'Live online coding for Australian children in Scratch, Python, JavaScript and Roblox Luau, matched to the child\'s age and what they want to build.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Kids coding languages',
  navLinks: [
    { href: '#languages', label: 'The languages' },
    { href: '#typing', label: 'Typing load' },
    { href: '#school', label: 'At school' },
    { href: '#choose', label: 'Choosing' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Ages 6 to 18 &middot; Live online',
  h1: 'Kids coding languages',
  lede: 'Parents usually ask the language question first, and it is a fair one: there are dozens of programming languages, every one has fans, and a child only has so many afternoons. The good news is that the choice matters less than it looks. Every language a child is likely to meet does the same few things underneath: it stores values, repeats steps, makes decisions and responds to input. What changes from one language to the next is how much a child must type, how forgiving it is of small mistakes, and what kind of thing it is good at making. This guide compares the five languages Australian children most often start with, shows exactly how much typing one tiny program needs in each, and suggests an order that fits both a child\'s age and what they want to build.',
  secondaryCta: { href: '#languages', label: 'Compare the languages' },
  wa: 'Hello Modern Age Coders, we live in Australia and are trying to choose a first coding language for our child. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; one language at a time, chosen for the child',
  spec: [
    ['For', 'Children and teens, 6 to 18'],
    ['Youngest start', 'Scratch, with blocks'],
    ['First text language', 'Usually Python'],
    ['For the web', 'JavaScript'],
    ['For Roblox', 'Luau, a dialect of Lua'],
    ['Format', 'Live online lessons'],
    ['Group', 'Five to ten, or one to one'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'A kids coding language is any programming language a child can realistically learn and use to make things: a visual block language such as Scratch, or a text language such as Python, JavaScript or Lua. For most Australian children the sensible order is Scratch from about six, Python from about nine or ten, then JavaScript or Luau depending on whether they want websites or Roblox games. The Australian Curriculum follows the same shape, moving from visual programs in primary school to a general-purpose language in Years 7 and 8.',

  picks: {
    eyebrow: 'Start here',
    h2: 'One course per language stage',
    lede: 'Choose by age first and interest second. The free first class confirms the starting point.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'KLNG / 01', title: 'Scratch Coding for Kids', note: 'Ages 6 to 12. The block language, taken all the way to finished games and animations.' },
      { course: 'python-ai-kids-masterclass', code: 'KLNG / 02', title: 'Python and AI for Kids', note: 'For 9 to 12 year olds ready to type: games, turtle drawings and small AI projects.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'KLNG / 03', title: 'Roblox Game Coding for Kids', note: 'Ages 8 to 14. Luau inside Roblox Studio, up to a game other players can join.' }
    ]
  },

  sections: [
    {
      id: 'languages', tint: 'tint', eyebrow: 'The languages',
      h2: 'Five languages Australian children actually start with',
      lede: 'Each entry quotes how the language describes itself, then says plainly what a child can make with it and roughly when it suits them. Ages are our teaching guidance, not rules.',
      body: [
        { kind: 'table', caption: 'Kids coding languages at a glance', head: ['Language', 'Kind', 'Typical starting age', 'What children make with it'], rows: [
          ['Scratch', 'Visual blocks that snap together', 'About 6 and up', 'Animations, stories and simple games on screen'],
          ['Python', 'Text, read almost like short English sentences', 'About 9 or 10 and up', 'Text games, drawings, quizzes, data and AI projects'],
          ['JavaScript', 'Text, built into every web browser', 'About 12 and up', 'Interactive web pages and browser games'],
          ['Lua', 'Small text language for scripting', 'About 10 and up', 'Scripts inside other programs, including some games'],
          ['Luau', 'A dialect of Lua with optional types', 'About 8 and up, via Roblox Studio', 'Roblox games and worlds other people can join']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'In their own words',
          left: [
            'Python\'s home page calls it "a programming language that lets you work quickly and integrate systems more effectively". The current release named there is Python 3.14.8, which is the version a child would download today.',
            'MDN, the reference most web developers use, describes JavaScript as "a lightweight interpreted (or just-in-time compiled) programming language with first-class functions" that is "most well-known as the scripting language for Web pages".'
          ],
          rightH3: 'Lua and its Roblox cousin',
          right: [
            'Lua describes itself as "a powerful, efficient, lightweight, embeddable scripting language", built and maintained by a team at PUC-Rio, a university in Rio de Janeiro. Embeddable means it is designed to live inside another program.',
            'Luau is "a small, fast, and embeddable programming language based on Lua with a gradual type system", and its own documentation says it "is used by Roblox game developers to write game code". When a child says they want to code Roblox games, Luau is what they will be typing.'
          ] },
        { kind: 'p', mt: true, html: 'Scratch is different in kind. Instead of typing, a child drags blocks such as <em>repeat</em>, <em>say ... for ... seconds</em> and <em>change ... by ...</em> into a stack, and the blocks only fit together in ways that make sense. That design removes spelling and punctuation errors entirely, which is exactly why it works for six and seven year olds and exactly why children eventually outgrow it. Our page on <a class="ag-inline-link" href="/after-scratch-next-step-python-australia">moving from Scratch to Python</a> covers that handover in detail.' },
        { kind: 'source', html: 'Sources, read 7 October 2026: <a class="ag-inline-link" href="https://www.python.org/" rel="noopener" target="_blank">python.org</a>; <a class="ag-inline-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noopener" target="_blank">MDN Web Docs, JavaScript</a>; <a class="ag-inline-link" href="https://www.lua.org/about.html" rel="noopener" target="_blank">lua.org, About</a>; <a class="ag-inline-link" href="https://luau.org/" rel="noopener" target="_blank">luau.org</a> and the Luau README on GitHub; block labels from the Scratch Foundation\'s <a class="ag-inline-link" href="https://github.com/scratchfoundation/scratch-blocks" rel="noopener" target="_blank">scratch-blocks</a> repository.' }
      ]
    },
    {
      id: 'typing', tint: 'deep', eyebrow: 'A worked comparison',
      h2: 'Typing load: one countdown, four languages',
      lede: 'The cleanest way to compare languages for children is to write the same tiny program in each and count what a child has to type, which we call its typing load. Our program counts down from 3 and then announces lift-off.',
      body: [
        { kind: 'p', html: 'Here is the program in the three text languages, exactly as we would teach it. Each version prints 3, 2, 1 and then <code>Lift off!</code>, and we ran the Python and JavaScript versions to check the output.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Python', p: '<code>for n in range(3, 0, -1):</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;print(n)</code><br><code>print("Lift off!")</code>' },
          { h3: 'JavaScript', p: '<code>for (let n = 3; n &gt; 0; n--) {</code><br><code>&nbsp;&nbsp;console.log(n);</code><br><code>}</code><br><code>console.log("Lift off!");</code>' },
          { h3: 'Lua', p: '<code>for n = 3, 1, -1 do</code><br><code>&nbsp;&nbsp;print(n)</code><br><code>end</code><br><code>print("Lift off!")</code>' }
        ] },
        { kind: 'table', mt: true, caption: 'How much a child types for the same countdown (our count, ignoring indentation)', head: ['Language', 'Lines', 'Characters typed', 'Symbols typed', 'What the symbols are'], numCols: [1, 2, 3], rows: [
          ['Scratch', '6 blocks', '14', '2', 'A minus sign and an exclamation mark, typed into block slots'],
          ['Lua', '4', '48', '11', 'Commas, brackets, quotation marks, a minus sign'],
          ['Python', '3', '51', '13', 'Brackets, commas, a colon, quotation marks'],
          ['JavaScript', '4', '70', '21', 'Braces, semicolons, comparison and decrement operators']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers say',
          left: [
            'For the same idea, JavaScript asks for 21 symbols and Scratch asks for 2. Symbols are where young children stumble: a missing bracket or an extra semicolon stops a program, and a seven year old cannot yet tell which one it was.',
            'Python and Lua sit in the middle. Python\'s count is close to Lua\'s, but Python adds one rule Lua does not: the indentation before <code>print(n)</code> is part of the meaning. Children learn that rule quickly, and it trains them to lay code out neatly for life.'
          ],
          rightH3: 'What the numbers do not say',
          right: [
            'Typing load measures friction, not value. JavaScript\'s extra symbols buy it a home in every web browser on earth, which matters enormously to a teenager who wants to share a website with friends.',
            'So the comparison does not crown a winner. It explains an order: blocks while fingers and spelling are still developing, Python once a child types comfortably, and JavaScript when the web is the goal and the symbols no longer scare them.'
          ] },
        { kind: 'p', mt: true, html: 'In class, older children do this exercise themselves: they write a program in two languages, count the symbols, and argue about which version is easier to read. It turns an abstract question ("which language is easier?") into one they can answer with evidence.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'The Australian Curriculum',
      h2: 'Which languages Australian schools expect, and when',
      lede: 'The Australian Curriculum v9 does not name a required language, but its Digital Technologies content descriptions make the order clear: visual programs in primary school, a general-purpose language from Year 7.',
      body: [
        { kind: 'table', caption: 'Programming expectations in Digital Technologies, Australian Curriculum v9 (quoted)', head: ['Band', 'Code', 'What students learn to do'], rows: [
          ['Years 5 and 6', 'AC9TDI6P02', '"design algorithms involving multiple alternatives (branching) and iteration"'],
          ['Years 7 and 8', 'AC9TDI8P05', '"design algorithms involving nested control structures and represent them using flowcharts and pseudocode"'],
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The three named languages',
          left: [
            'In the same Years 7 and 8 band, the description that asks students to program in a general-purpose language comes with an example list: "such as Python, JavaScript or C#". Python and JavaScript are both in the table above; C# is the language of the Unity game engine, which older students meet later.',
            'States and territories put the curriculum into practice in their own ways, and some write their own syllabuses, so a particular school may choose any one of these.'
          ],
          rightH3: 'What this means for a family',
          right: [
            'A child who reaches Year 7 already comfortable in Python is not ahead of the curriculum so much as ready for it. The ideas their teacher will introduce, such as functions and nested loops, will already have names and uses.',
            'A child who has only used Scratch is not behind either. The jump from blocks to text is the moment our page on <a class="ag-inline-link" href="/coding-for-year-7-australia">coding in Year 7</a> is written for.'
          ] },
        { kind: 'source', html: 'Where the quotations come from, checked on 7 October 2026: ACARA publishes the Digital Technologies content as two Word files, one for <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-f-6-v9.docx" rel="noopener" target="_blank">Foundation to Year 6</a> and one for <a class="ag-inline-link" href="https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx" rel="noopener" target="_blank">Years 7 to 10</a>.' }
      ]
    },
    {
      id: 'choose', tint: '', eyebrow: 'Choosing',
      h2: 'Choosing a first language by age and by goal',
      lede: 'Age decides how much typing a child can handle. Goal decides which language keeps them coming back. Put the two together and the choice usually makes itself.',
      body: [
        { kind: 'table', caption: 'A practical starting point', head: ['If your child is', 'And wants to', 'Start with'], rows: [
          ['6 to 8', 'Make anything at all', 'Scratch'],
          ['8 to 11', 'Make Roblox games', 'Scratch for a few weeks, then Luau in Roblox Studio'],
          ['9 to 12', 'Make games, quizzes or AI projects', 'Python, after Scratch if they have never coded'],
          ['12 and up', 'Make websites or browser games', 'JavaScript, often alongside HTML and CSS'],
          ['13 and up', 'Get ready for senior computing or university', 'Python first, then a second language for contrast']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Two languages is normal', p: 'By early high school many children use two: Python for problems and JavaScript or Luau for things they want to share. Learning the second is far faster than the first.' },
          { h3: 'Avoid starting three at once', p: 'Children who sample several languages in their first term often finish none. One language, one finished project, then the next.' },
          { h3: 'Interest beats popularity', p: 'A child who loves Roblox will practise Luau every evening. That practice is worth more than choosing the language with the most job adverts.' }
        ] },
        { kind: 'p', mt: true, html: 'If you are still unsure, the free first class settles it with the child at the keyboard: the teacher tries a small task in blocks and a small task in text, watches which one frustrates and which one excites, and recommends from there. Our wider guide to <a class="ag-inline-link" href="/blog/best-coding-languages-kids-10-18-beginner-advanced">coding languages for ages 10 to 18</a> goes further into the teenage years.' }
      ]
    },
    {
      id: 'concepts', tint: 'deep', eyebrow: 'What carries over',
      h2: 'The ideas that move with a child from language to language',
      lede: 'A language is a set of words for ideas. Once a child owns the ideas, a new language is mostly new spelling.',
      body: [
        { kind: 'table', caption: 'One idea, four spellings', head: ['Idea', 'Scratch block', 'Python', 'JavaScript'], rows: [
          ['Repeat a fixed number of times', 'repeat (10)', 'for i in range(10):', 'for (let i = 0; i &lt; 10; i++)'],
          ['Remember a value', 'set (score) to (0)', 'score = 0', 'let score = 0;'],
          ['Make a decision', 'if &lt;&gt; then', 'if score &gt; 10:', 'if (score &gt; 10) { }'],
          ['Show a message', 'say (Hello!) for (2) seconds', 'print("Hello!")', 'console.log("Hello!");']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why we teach the idea first',
          left: [
            'Before writing any loop, children predict what it will do: how many times, in what order, what the screen will show at the end. Only then do they run it. A child who can predict a loop in Scratch can predict one in Python.',
            'That habit of predicting before running is the single most transferable skill in programming, and it does not belong to any language.'
          ],
          rightH3: 'Where languages really differ',
          right: [
            'Some differences are deep, not cosmetic. JavaScript runs inside a web page and reacts to clicks; Luau runs inside a Roblox world shared with other players; Python is happiest working through a list of data.',
            'Those differences shape what a child builds, which is why goal matters so much when choosing a second language.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From blocks to a second text language',
    lede: 'Most children move through these stages over two to three years of regular lessons, faster if they practise between them.',
    table: { caption: 'A language pathway for Australian children', head: ['Stage', 'What your child can do'], rows: [
      ['1. Blocks', 'Build and explain a Scratch project with loops, decisions and a variable'],
      ['2. First text', 'Write a working Python program from a blank file and fix their own error messages'],
      ['3. Fluent', 'Use functions and lists to organise a larger program, and read someone else\'s code'],
      ['4. Second language', 'Rebuild an earlier project in JavaScript or Luau and explain what changed and why']
    ] },
    left: { h3: 'Does typing speed matter?', ps: [
      'More than people expect, for younger children. A child who hunts for every key spends their energy on the keyboard instead of the logic, which is one more reason blocks come first.',
      'Typing improves fastest through real projects, so we never hold a child back from text for the sake of a typing test.'
    ] },
    right: { h3: 'Around the school year', ps: [
      'Australian schools run four terms. Lessons continue through the year if families want, and billing is monthly, so pausing over the summer holidays is simple.',
      'Weekly lesson times are agreed in the free first class, in your own state\'s time.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses by language',
    lede: 'Grouped by the language each course teaches first.',
    bands: [
      { num: 'I', h3: 'Blocks', sub: 'Ages 6 to 12', courses: [
        { code: 'KLNG / BLK / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'The block language from first sprite to finished game.' },
        { code: 'KLNG / BLK / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'A year-long path from Scratch to apps and first Python.' },
        { code: 'KLNG / BLK / 03', slug: 'block-coding-app-development-masterclass', title: 'App Making for Kids', blurb: 'Real phone apps built with blocks, ages 8 to 12.' }
      ] },
      { num: 'II', h3: 'First text languages', sub: 'Ages 8 to 14', courses: [
        { code: 'KLNG / TXT / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Python from first lines to games and small AI projects.' },
        { code: 'KLNG / TXT / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Game Coding', blurb: 'Luau in Roblox Studio, up to a published game.' },
        { code: 'KLNG / TXT / 03', slug: 'kids-ai-web-development-course', title: 'Web Development for Kids', blurb: 'HTML, CSS and a first taste of JavaScript, ages 9 to 12.' }
      ] },
      { num: 'III', h3: 'Teen languages', sub: 'Ages 13 to 18', courses: [
        { code: 'KLNG / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Beginner to advanced Python over a full year.' },
        { code: 'KLNG / TEEN / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for Teens', blurb: 'The language of the web, from buttons that respond to small browser games.' },
        { code: 'KLNG / TEEN / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'A strongly typed language for teens heading towards university computing.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons at Australian times',
    lede: 'Our teachers are in India, which sits behind every Australian state: by two and a half hours against Perth, and by up to five and a half against Sydney in summer. That puts an Australian afternoon inside the Indian working day.',
    slots: [
      { time: 'Weekday, after school', l: 'The usual time for primary students.' },
      { time: 'Weekday, early evening', l: 'Often chosen by high school students after sport.' },
      { time: 'Weekend', l: 'Longer project sessions for keen coders.' }
    ],
    cells: [
      { h3: 'A free first class', p: 'The teacher tries blocks and text with your child and recommends a language from what they see.' },
      { h3: 'Small groups', p: 'Five to ten children at a similar level and learning the same language.' },
      { h3: 'One to one', p: 'Useful when a child already knows one language and wants to move quickly to a second.' },
      { h3: 'Code they type', p: 'Teachers explain and question. The child types or snaps in every line.' },
      { h3: 'Watch a lesson', p: 'Every class happens live, so a parent can pull up a chair whenever they like.' },
      { h3: 'Schoolwork stays theirs', p: 'Assessment tasks are off limits for our teachers; the language skills simply make class easier.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'A few finished projects across several languages. More sit in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reproduced word for word from reviews left on our Google profile by parents and students.',

  fees: {
    h2: 'Fees for coding classes',
    lede: 'Families outside India pay one monthly price in US dollars, whichever language their child learns. There is no enrolment charge and no term contract.',
    free: ['A short task in blocks and in text', 'A recommended first language', 'No card or bank details'],
    group: ['Five to ten children per class', 'One teacher across the months', 'Classmates learning the same language', 'Stop after any month'],
    one: ['All the attention on your child', 'Pace set by the child', 'Easy to switch language when ready']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'What Australian parents ask about coding languages',
    items: [
      { q: 'What is a coding language?', a: 'A coding language, or programming language, is a set of words and rules for giving a computer instructions. Some, like Scratch, use blocks that snap together; others, like Python and JavaScript, are typed as text.' },
      { q: 'What is the easiest coding language for kids?', a: 'For children under about nine, a block language such as Scratch, because it removes typing and punctuation errors. For older children starting text, Python is usually the gentlest because it uses few symbols and reads close to English.' },
      { q: 'Should my child learn Python or JavaScript first?', a: 'Python first for most children, because it needs fewer symbols and suits games, quizzes and AI projects. JavaScript makes sense first for a teenager whose main goal is building websites.' },
      { q: 'What language is used in Roblox?', a: 'Roblox games are written in Luau, a language based on Lua. Luau\'s own documentation says it is used by Roblox game developers to write game code.' },
      { q: 'What is Lua?', a: 'Lua is a small scripting language designed to be embedded inside other programs. It was created and is maintained by a team at PUC-Rio, a university in Brazil.' },
      { q: 'Which coding language do Australian schools use?', a: 'The Australian Curriculum v9 does not require one. It expects visual programs in primary school and a general-purpose language from Years 7 and 8, giving Python, JavaScript or C# as examples.' },
      { q: 'Is Scratch a real coding language?', a: 'Yes. Scratch has loops, variables, decisions and events like any other language. It is designed for learning, so children eventually move to a text language for larger projects.' },
      { q: 'Can my child learn two languages at once?', a: 'It is possible, but rarely helpful at the start. Children make faster progress finishing projects in one language, then learning a second, which usually takes a fraction of the time.' },
      { q: 'Does my child need to type quickly?', a: 'Not for blocks. For text languages, comfortable typing helps a great deal, and it improves fastest by writing real programs rather than drills.' },
      { q: 'What does it cost?', a: 'Nothing for the trial lesson, and no card is asked for. After that, a monthly fee applies for either a group place or private lessons; both are set out under Fees, and there is no sign-up charge.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Next steps after choosing a language.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our full set of Australian guides, by place and topic.' },
      { href: '/after-scratch-next-step-python-australia', label: 'After Scratch: Python', p: 'How the move from blocks to text works.' },
      { href: '/coding-for-year-7-australia', label: 'Coding in Year 7', p: 'The first year of general-purpose programming.' },
      { href: '/game-development-for-kids-australia', label: 'Game development for kids', p: 'Scratch games to Python to a real engine.' },
      { href: '/blog/scratch-vs-python-which-better-young-learners', label: 'Scratch or Python?', p: 'A longer comparison for young learners.' },
      { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes', p: 'Luau and Roblox Studio in depth.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Leave your details and we will ring at a time that suits you. In the free class your child tries a little block coding and a little text coding, and you leave with a clear recommendation for which language to start with.',
    readFirst: 'Want to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a lesson, and the <a class="ag-inline-link" href="/courses">course list</a> covers every age.',
    note: 'A WhatsApp message from an Australian mobile usually gets the fastest reply. The +91 prefix is there because the team is based in India; there is no Australian office.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Languages', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox and Luau' },
        { href: '/java-programming-for-kids-teens', label: 'Java for kids and teens' },
        { href: '/coding-roadmap', label: 'The coding roadmap' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-coding-classes-for-kids-australia', label: 'Online coding for kids' },
        { href: '/game-development-for-kids-australia', label: 'Game development for kids' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'The idea outlasts the language it was first written in'
  },

  personalityCss: `
.ag-root.ag-klng .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-klng .ag-capsule { border-left-width: 4px; }
.ag-root.ag-klng .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-klng .ag-table td code { font-size: 0.95em; }
.ag-root.ag-klng .ag-grid-3 code { font-size: 0.9em; }
.ag-root.ag-klng .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  dossier: {
    curriculumAuthority: 'Australia, Years 5 to 8. ACARA, Australian Curriculum v9, Digital Technologies: AC9TDI6P02 "design algorithms involving multiple alternatives (branching) and iteration"; AC9TDI8P05 "design algorithms involving nested control structures and represent them using flowcharts and pseudocode"; AC9TDI8P09 "implement, modify and debug programs involving control structures and functions in a general-purpose programming language", elaboration "such as Python, JavaScript or C#".',
    localProject: 'Typing load: the same countdown (3, 2, 1, Lift off!) written in Python (3 lines, 51 characters typed, 13 symbols), JavaScript (4 lines, 70 characters, 21 symbols), Lua (4 lines, 48 characters, 11 symbols) and Scratch (6 blocks, 14 characters typed into slots, 2 symbols), counted by us ignoring indentation; Python and JavaScript versions run and checked. Lesson family: comparing languages by the characters and symbols a child must type for one program.',
    requiredMentions: ['typing load', 'Python 3.14.8', 'PUC-Rio', 'first-class functions', 'gradual type system', 'scratch-blocks', 'AC9TDI8P05', '21 symbols', 'Lift off!'],
    sources: [
      { claim: 'python.org: "Python is a programming language that lets you work quickly and integrate systems more effectively"; "Latest: Python 3.14.8".', url: 'https://www.python.org/' },
      { claim: 'MDN Web Docs, JavaScript: "a lightweight interpreted (or just-in-time compiled) programming language with first-class functions"; "most well-known as the scripting language for Web pages".', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { claim: 'lua.org, About: "Lua is a powerful, efficient, lightweight, embeddable scripting language"; maintained by a team at PUC-Rio.', url: 'https://www.lua.org/about.html' },
      { claim: 'luau.org: "a small, fast, and embeddable programming language based on Lua with a gradual type system"; Luau README: "Luau is used by Roblox game developers to write game code".', url: 'https://luau.org/' },
      { claim: 'Scratch Foundation, scratch-blocks msg/json/en.json: block labels "repeat %1", "say %1 for %2 seconds", "set %1 to %2", "change %1 by %2".', url: 'https://github.com/scratchfoundation/scratch-blocks' },
      { claim: 'ACARA, Australian Curriculum v9, Digital Technologies 7-10: AC9TDI8P05, AC9TDI8P09 and the Python, JavaScript or C# elaboration.', url: 'https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx' }
    ],
    rejectedClaims: [
      'Language popularity rankings (TIOBE, Stack Overflow survey): not fetched raw and not needed for a child\'s first choice, so none quoted.',
      'ScratchJr\'s stated age range: scratchjr.org renders by script and could not be read raw, so no age is quoted for it.',
      'Scratch user counts: the Scratch site renders by script; not quoted.',
      'A claim that any one language is "the easiest": replaced by our measured typing load, which is labelled as our own count.',
      'Which language a particular Australian school or state uses: states implement the curriculum differently, so no school-level claim is made.'
    ]
  }
};
