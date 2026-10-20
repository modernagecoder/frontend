'use strict';
// Coding summer camp for middle schoolers (ag- topic door; US cluster Phase 2, row 26).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/coding-summer-camp-for-middle-schoolers/):
//  - Code.org, Computer Science Discoveries (code.org/educate/csd): "Grades 6-10"; "Code.org's most flexible course,
//    allowing each unit to be taught alone, combined into collections that focus on specific areas, or as a full year
//    course. The free curriculum introduces students to building their own websites, apps, animations, games, and
//    physical computing systems."; "Each collection is approximately one semester or slightly less than one semester.";
//    tools "Game Lab, App Lab, AI Lab, Web Lab"; Duration "Month, Semester, School Year"; unit headings with grade bands:
//    Problem Solving and Computing (Grades 6-12), Web Development (Grades 6-12), Interactive Animations and Games
//    (Grades 6-10), The Design Process (Grades 6-12), Data and Society (Grades 6-10), AI and Machine Learning (Grades 6-12).
//  - Microsoft MakeCode, About (makecode.com/about): "The blocks map directly to actual lines of code in a programming
//    language."; goal to introduce programming in a way that is "approachable and inviting". MakeCode Arcade About
//    (arcade.makecode.com/about): "MakeCode Arcade is a code editor to build Retro Arcade games for the browser"; Arcade
//    docs: "Example games developed entirely in Blocks", "Example games developed in JavaScript".
//  - Scratch Foundation (scratch.mit.edu/about): "200 million kids create on Scratch for free".
//  - Congressional App Challenge 2026 rulebook (pilot copy 2026-CAC-Rules.norm.txt): "Students must be enrolled in
//    middle school or high school on October 26th, 2026."; middle school "typically encompasses 6th-8th" grades;
//    "block-based coding languages" allowed; "teams of up to four (4) students".
//  - Contrasts (copies of the row 25 files): COSMOS home page, "students completing grades 8-12" and "COSMOS is Limited
//    to California High-School Students Only"; CMU Pre-College CS Scholars, "Be at least 16 years old by the program
//    start date."; BWSI FAQ, "nor do we accept students below 10th grade".
// Our own material, labelled on the page: the four-week camp-at-home plan (2 live hours + 2 practice hours a week =
// 16 hours), the readiness checklist, the guessing-game program and its arithmetic (halving 100 needs at most 7
// guesses because 2 to the 7th is 128; 2 to the 6th is only 64), and the age-line table's last column.
// Lesson family: halving and search (binary search through a guessing game).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const GUESS = `import random

hidden_number = random.randint(1, 100)
attempts = 0
print("Camp challenge: find my number between 1 and 100.")

found = False
while not found:
    pick = int(input("Type a number: "))
    attempts += 1
    if pick == hidden_number:
        found = True
    elif pick < hidden_number:
        print(pick, "is too small.")
    else:
        print(pick, "is too big.")

print("Solved after", attempts, "attempts.")`;

const SOLVER = `# Day 4: now the computer guesses YOUR number by halving.
low = 1
high = 100
tries = 0

while low <= high:
    middle = (low + high) // 2
    tries = tries + 1
    answer = input("Is it " + str(middle) + "? (h = higher, l = lower, y = yes) ")
    if answer == "h":
        low = middle + 1
    elif answer == "l":
        high = middle - 1
    else:
        print("Found it in", tries, "tries.")
        break`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'SUMMER', blurb: 'Coding summer camps for grades 6 to 8: why middle school falls between the big programs, how to move from blocks to typed code, and a four-week plan.' },
  slug: 'coding-summer-camp-for-middle-schoolers',
  code: 'scms',
  accent: '#3B5222',
  accentRationale: 'Coding summer camp for middle schoolers: #3B5222, a dark olive from the allocation sheet, apart from the neighbouring summer accents and readable on every paper colour',
  pageType: 'market',
  market: US,
  routeLabel: 'Coding summer camp for middle schoolers',
  title: 'Coding Summer Camp for Middle Schoolers: Grades 6 to 8',
  description: 'A coding summer camp for middle schoolers, grades 6 to 8: the age lines big programs set, blocks to Python, a real guessing-game program and a four-week plan.',
  ogDescription: 'Grades 6 to 8 sit between kids camps and high school programs. What the age rules actually say, how blocks turn into typed code, one real Python project and a four-week summer plan.',
  twitterDescription: 'Coding summer camp for grades 6 to 8: blocks to Python in four weeks.',
  pageName: 'Coding Summer Camp for Middle Schoolers',
  webPageDescription: 'A guide for US families with a child in grades 6 to 8 who wants a coding summer camp, built from program and curriculum pages read raw, with real code and our own plan.',
  courseDescription: 'Live online coding classes for US middle school students over the summer, from Scratch and MakeCode to first Python programs, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Coding summer camp for middle schoolers',
  navLinks: [
    { href: '#gap', label: 'The age gap' },
    { href: '#blocks', label: 'Blocks to text' },
    { href: '#units', label: 'A summer menu' },
    { href: '#project', label: 'A real project' },
    { href: '#weeks', label: 'Four-week plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 6 to 8 &middot; Summer coding',
  h1: 'Coding summer camp for middle schoolers',
  lede: 'Middle school is the awkward age for summer coding. Many famous computer science programs start at 16 or at tenth grade, while most kids camps are pitched at elementary students. A sixth, seventh or eighth grader needs something in between: real problem solving, a first typed language, and projects that feel grown up without being out of reach. This page shows where the age lines actually sit, how block coding turns into typed code, a small Python project a middle schooler can finish in one camp week, and the four-week plan our teachers use online.',
  secondaryCta: { href: '#weeks', label: 'See the four-week plan' },
  wa: 'Hello Modern Age Coders, my middle schooler in the US would like a coding camp this summer. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; first Python programs in week one',
  spec: [
    ['Grades', '6 to 8'],
    ['Start', 'Blocks or a first typed language'],
    ['Languages', 'Scratch, MakeCode, Python'],
    ['Length', 'Four weeks, or the whole summer'],
    ['Format', 'Live online classes'],
    ['Group', 'A batch, or one to one'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Try it', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'A coding summer camp for middle schoolers should move a grade 6 to 8 student from block coding to a first typed language such as Python, with one small project finished each week. Many selective high school programs set floors of age 16 or tenth grade, so middle schoolers rarely qualify. Modern Age Coders runs live online classes for this age, in a batch or one to one, with a four-week summer plan.',

  picks: {
    eyebrow: 'Start with a teacher',
    h2: 'Three courses that suit a middle school summer',
    lede: 'Choose by where the student is now: still on blocks, ready to type, or keen on games they already play.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'SCMS / 01', title: 'Python for kids', note: 'The first typed language, through small games and puzzles.' },
      { course: 'scratch-programming-complete-course', code: 'SCMS / 02', title: 'Scratch coding', note: 'For students who want stronger block projects first.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'SCMS / 03', title: 'Roblox in Luau', note: 'Typed scripts inside a game they already know.' }
    ]
  },

  sections: [
    {
      id: 'gap', tint: 'tint', eyebrow: 'The age gap',
      h2: 'Why grades 6 to 8 fall between the big summer programs',
      lede: 'Families who search for a middle school coding camp often find well-known names first, then discover their child is too young. Here is what three of those programs say on their own pages, quoted as written.',
      body: [
        { kind: 'table', caption: 'Age and grade lines for three well-known summer programs, as each page states it on 17 October 2026, with our note on the right', head: ['Program', 'What its page says', 'Our note for middle schoolers'], rows: [
          ['COSMOS (University of California)', 'Open to "students completing grades 8-12"; "COSMOS is Limited to California High-School Students Only"', 'An eighth grader in California can look ahead to it; elsewhere it does not apply'],
          ['Carnegie Mellon CS Scholars', '"Be at least 16 years old by the program start date."', 'A target for later high school, not for this summer'],
          ['MIT Beaver Works Summer Institute', 'The FAQ says "nor do we accept students below 10th grade"', 'Same: a goal two or three summers away']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the gap means in practice',
          left: [
            'The research-style and residential programs are built for older teens who already code. A twelve year old is not behind; they are simply early, and the best use of their summer is to become the student those programs look for later.',
            'That means learning to finish things: a small program that works, then a slightly bigger one, with the habits of testing and explaining built in from the start.'
          ],
          rightH3: 'What to look for instead',
          right: [
            'A camp for this age should still feel serious. Students at eleven to fourteen notice quickly when material is pitched too young, and they lose interest just as fast when it is all lecture.',
            'Look for typed code by the second week, a project finished each week, and a teacher who reads the student&rsquo;s own code, not only a shared example.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cosmos-ucop.ucdavis.edu/" rel="noopener" target="_blank">COSMOS home page</a>, <a class="ag-inline-link" href="https://www.cmu.edu/pre-college/academic-programs/computer-science-scholars.html" rel="noopener" target="_blank">Carnegie Mellon CS Scholars</a>, <a class="ag-inline-link" href="https://bwsi.mit.edu/faq/" rel="noopener" target="_blank">BWSI FAQ</a>, each checked on 17 October 2026. None of these programs is connected with us.' }
      ]
    },
    {
      id: 'blocks', tint: 'deep', eyebrow: 'Blocks to text',
      h2: 'How block coding turns into typed code',
      lede: 'Most middle schoolers arrive with some block coding from school or from Scratch. The question is not whether blocks are &ldquo;real&rdquo; coding but how to make the jump to typing without losing the fun.',
      body: [
        { kind: 'table', caption: 'Three free block tools, described from their own pages (read 17 October 2026)', head: ['Tool', 'What its makers say', 'Where it leads'], rows: [
          ['Scratch', '"200 million kids create on Scratch for free"', 'Events, loops and variables, which carry straight into Python'],
          ['Microsoft MakeCode', '"The blocks map directly to actual lines of code in a programming language."', 'Switch the same project between blocks and code'],
          ['MakeCode Arcade', '"MakeCode Arcade is a code editor to build Retro Arcade games for the browser"; its docs show games built in Blocks and games built in JavaScript', 'Arcade games, then JavaScript'],
          ['Code.org CS Discoveries', 'A free curriculum for grades 6 to 10 using Game Lab, App Lab, AI Lab and Web Lab', 'Websites, apps, games and physical computing']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The MakeCode idea, in plain words',
          left: [
            'MakeCode says its aim is to introduce programming in a way that is "approachable and inviting", with blocks that correspond to lines of real code. A student can build a game in blocks, then open the code view and see the same program typed out.',
            'That side-by-side view is the bridge. Students stop thinking of typed code as a different subject and start seeing it as the same instructions written faster.'
          ],
          rightH3: 'When a student is ready to type',
          right: [
            'One signal we look for is frustration with dragging: a student who wants to change ten similar blocks at once is ready for a loop they can type.',
            'Another sign is a project idea that blocks make clumsy, such as a quiz with many questions, a calculator, or a game that keeps score across rounds.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://scratch.mit.edu/about" rel="noopener" target="_blank">Scratch about page</a>, <a class="ag-inline-link" href="https://makecode.com/about" rel="noopener" target="_blank">Microsoft MakeCode about page</a>, <a class="ag-inline-link" href="https://arcade.makecode.com/about" rel="noopener" target="_blank">MakeCode Arcade about page</a>, <a class="ag-inline-link" href="https://code.org/educate/csd" rel="noopener" target="_blank">Code.org CS Discoveries</a>. We are not connected with Scratch, Microsoft or Code.org.' }
      ]
    },
    {
      id: 'units', tint: 'tint', eyebrow: 'A summer menu',
      h2: 'Using CS Discoveries units as a summer menu',
      lede: 'Code.org calls CS Discoveries its "most flexible course": each unit can be taught alone, in collections, or as a full year. That flexibility makes its unit list a handy menu for planning a summer, even outside a classroom.',
      body: [
        { kind: 'table', caption: 'Computer Science Discoveries units and grade bands, as listed on Code.org&rsquo;s page (read 17 October 2026)', head: ['Unit', 'Grade band on the page', 'A summer use (our suggestion)'], rows: [
          ['Problem Solving and Computing', 'Grades 6-12', 'Week one for a student new to code'],
          ['Web Development', 'Grades 6-12', 'A personal site by the end of a week'],
          ['Interactive Animations and Games', 'Grades 6-10', 'The natural choice for game lovers'],
          ['The Design Process', 'Grades 6-12', 'Designing an app for a real user'],
          ['Data and Society', 'Grades 6-10', 'Pairs well with a maths-minded student'],
          ['AI and Machine Learning', 'Grades 6-12', 'How AI makes predictions, without needing an adult-only tool']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Months, semesters, a year',
          left: [
            'The course snapshot lists the duration options as Month, Semester and School Year, and says each collection is "approximately one semester or slightly less than one semester".',
            'A summer is shorter than a semester, so a single unit is the right size: one unit, done well, with a finished project at the end.'
          ],
          rightH3: 'Why we teach alongside it, not instead of it',
          right: [
            'If your child&rsquo;s school uses Code.org materials, a summer unit means the same ideas feel familiar in the fall, which is exactly what we want.',
            'Our summer classes add what a self-paced unit cannot: a teacher who reads the code, asks the student to explain it, and pushes one step further when the student is ready.'
          ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'A real project',
      h2: 'One camp week, one finished program: a Python guessing game',
      lede: 'This is the project we use in the second week for many middle schoolers. It is short enough to type in one lesson and rich enough to teach loops, conditions and a real computer science idea. Both programs are ours and run in standard Python 3.',
      body: [
        { kind: 'code', label: 'Program 1 &middot; the player guesses', lang: 'python', code: GUESS, note: 'Day one and two: random numbers, a while loop, if, elif and else, and a counter. The student plays it, then plays a friend&rsquo;s copy.' },
        { kind: 'code', label: 'Program 2 &middot; the computer guesses by halving', lang: 'python', code: SOLVER, note: 'Day four: the same game turned around. Each answer cuts the range in half, which is the idea behind binary search.' },
        { kind: 'two', mt: true,
          leftH3: 'The arithmetic, ours',
          left: [
            'Halving 100 numbers: 100, then 50, 25, 13, 7, 4, 2 and 1. That is at most 7 guesses. The reason is that 2 to the 7th power is 128, which is more than 100, while 2 to the 6th power is only 64.',
            'For numbers from 1 to 1,000 the answer is 10 guesses, because 2 to the 10th power is 1,024. Ten times as many numbers needs only three more guesses, which surprises almost every student.'
          ],
          rightH3: 'What the week teaches',
          right: [
            'Program 1 teaches the building blocks. Program 2 teaches a way of thinking: never guess at random when you can rule out half the possibilities at once.',
            'That same halving idea appears later in searching sorted lists, in debugging (cut the program in half to find the broken line) and in competition problems in high school.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>Extension 1.</b> Tell the player when they are within five of the secret number.',
          '<b>Extension 2.</b> Limit the player to 7 tries, and explain why 7 is fair.',
          '<b>Extension 3.</b> Keep the lowest score across several rounds.',
          '<b>Extension 4.</b> Make Program 2 catch a player who changes their number halfway.'
        ] }
      ]
    },
    {
      id: 'weeks', tint: 'tint', eyebrow: 'Four weeks',
      h2: 'Our four-week summer plan for grades 6 to 8',
      lede: 'This is our plan for a middle schooler learning from home. It assumes two live lessons of an hour each per week plus about two hours of practice, so 4 hours a week and 16 hours over the month.',
      body: [
        { kind: 'table', caption: 'Four weeks from blocks to a first Python project (our plan)', head: ['Week', 'Focus', 'Finished when'], rows: [
          ['1', 'One block project, rebuilt as typed code', 'The same small game works in blocks and in Python'],
          ['2', 'The guessing game above', 'Both programs run and the student explains why 7 guesses is enough'],
          ['3', 'A project of their choosing', 'A quiz, a story game or a calculator that a friend has tried'],
          ['4', 'Polish and show', 'The code is tidy, named well, and shown to the family in a short demo']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 6', p: 'More time on week one. Blocks next to code until the switch feels natural.' },
          { h3: 'Grade 7', p: 'The full plan as written, with one extension each week.' },
          { h3: 'Grade 8', p: 'Faster through weeks one and two, and a bigger week-three project.' }
        ] },
        { kind: 'p', mt: true, html: 'Our arithmetic for parents: 16 hours is about the time of two school days, spread over a month so the ideas have time to settle. Students who want more continue into a second month rather than doubling the hours, because short, regular sessions suit this age better than long ones.' }
      ]
    },
    {
      id: 'ready', tint: 'deep', eyebrow: 'Readiness',
      h2: 'Is my middle schooler ready for typed code? A quick check',
      lede: 'This is the checklist our teachers run in a first lesson. In our view, three or more yes answers point to starting in Python; fewer point to a stronger block project first.',
      body: [
        { kind: 'ol', items: [
          '<b>Typing.</b> Can they type a full sentence without hunting for every key?',
          '<b>Patience with errors.</b> Will they read a message on the screen before asking for help?',
          '<b>Blocks behind them.</b> Have they finished at least one Scratch or MakeCode project of their own?',
          '<b>Numbers.</b> Are they comfortable with negative numbers and simple multiplication?',
          '<b>An idea.</b> Do they have something they want to make, even a silly one?'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If the answer is mostly no',
          left: [
            'That is fine and common in grade 6. A summer of stronger block projects, with loops and variables used on purpose, sets up the switch for the fall.',
            'The Scratch course on this page is built for exactly that.'
          ],
          rightH3: 'If the answer is mostly yes',
          right: [
            'Start in Python straight away. The first week will feel fast, and that pace keeps this age group interested.',
            'For a student who loves Roblox, Luau is another typed first language, and the game gives them an audience.'
          ] }
      ]
    },
    {
      id: 'fall', tint: 'tint', eyebrow: 'After the summer',
      h2: 'A fall goal for middle schoolers: the Congressional App Challenge',
      lede: 'The Congressional App Challenge is a national coding competition, run district by district, that is open to middle school students. Its 2026 rulebook gives a summer coder a clear next target.',
      body: [
        { kind: 'table', caption: 'Middle school rules in the 2026 Congressional App Challenge rulebook', head: ['Rule', 'What the 2026 rulebook says'], rows: [
          ['Who', '"Students must be enrolled in middle school or high school on October 26th, 2026."'],
          ['Middle school', 'Described as one that "typically encompasses 6th-8th" grades'],
          ['Languages', 'Any language, including "block-based coding languages"'],
          ['Teams', 'Alone, or "teams of up to four (4) students"']
        ] },
        { kind: 'p', mt: true, html: 'A summer guessing game is not an app entry, but the habits are the same: finish, test with real people, explain your code. Our <a class="ag-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a> has the full rules and a ten-week plan. Those dates belong to the 2026 cycle, and each new cycle brings its own rulebook. Modern Age Coders has no link to the Challenge.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is now',
    h2: 'Four steps from block coder to independent programmer',
    lede: 'The steps we see middle schoolers climb, usually one or two per summer.',
    table: { caption: 'Middle school coding steps (ours)', head: ['Step', 'What it looks like'], rows: [
      ['1. Block maker', 'Builds Scratch or MakeCode projects with help'],
      ['2. Code reader', 'Can follow a short typed program and predict what it prints'],
      ['3. Code writer', 'Writes a small program alone and fixes its own errors'],
      ['4. Problem solver', 'Plans a program on paper first, then builds and tests it']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to read their code out loud to you. If they can explain each line, the learning is real.',
      'Praise finished small programs more than ambitious unfinished ones.'
    ] },
    right: { h3: 'For students', ps: [
      'Error messages are clues, not insults. Read the last line first.',
      'Keep every program you write in one folder. In a year it becomes your portfolio.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students in grades 6 to 8',
    lede: 'All of them are live online lessons with the same teacher each week, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Blocks and first code', sub: 'Grade 6', courses: [
        { code: 'SCMS / BLOCK / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Loops and variables on purpose.' },
        { code: 'SCMS / BLOCK / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks to small apps.' },
        { code: 'SCMS / BLOCK / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code inside a world they know.' }
      ] },
      { num: 'II', h3: 'Typed languages', sub: 'Grades 7 and 8', courses: [
        { code: 'SCMS / TEXT / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Games, puzzles and turtle art.' },
        { code: 'SCMS / TEXT / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox in Luau', blurb: 'Scripts with an audience.' },
        { code: 'SCMS / TEXT / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript', blurb: 'For eighth graders who like the web.' }
      ] },
      { num: 'III', h3: 'Looking ahead', sub: 'Strong eighth graders', courses: [
        { code: 'SCMS / NEXT / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The next step after kids Python.' },
        { code: 'SCMS / NEXT / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving', blurb: 'More halving, sorting and searching.' },
        { code: 'SCMS / NEXT / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon prep', blurb: 'Building as a team, on a clock.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Summer lessons sized for a middle schooler',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Late mornings or afternoons in your time zone.' },
      { time: 'Weekends', l: 'Handy around sports, trips and family visits.' },
      { time: '1-on-1', l: 'Paced to one student, start to finish.' }
    ],
    cells: [
      { h3: 'Hour-long lessons', p: 'Long enough to finish, short enough to focus.' },
      { h3: 'A project a week', p: 'Something finished to show every Friday.' },
      { h3: 'Code read aloud', p: 'Students explain their own lines.' },
      { h3: 'Parent update', p: 'A short note on what was built.' },
      { h3: 'At home', p: 'Any state, any laptop that runs a browser.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty in a batch, or one to one.' }
    ]
  },

  projectsH2: 'Projects from our younger coders',
  projectsLede: 'Work by our students, from first block games to typed programs. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more of it.',
  reviewsLede: 'Parents&rsquo; Google reviews, copied as written.',

  fees: {
    h2: 'Fees',
    lede: 'Summer classes are charged monthly in US dollars. Book one summer month to try it, carry on into the school year if your child wants to, or stop, with nothing to cancel.',
    free: ['A free first lesson', 'A quick level check', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to themselves', 'Paced to your child', 'Around summer plans']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Coding summer camp for middle schoolers: common questions',
    items: [
      { q: 'What should a middle schooler learn at a coding summer camp?', a: 'How to finish small programs, and ideally the move from block coding to a first typed language such as Python. One finished project each week is a good sign the camp is working.' },
      { q: 'Is my seventh grader too young for well-known programs like CS Scholars or BWSI?', a: 'Usually yes for now. Carnegie Mellon\'s CS Scholars page asks for age 16 by the start date, and the BWSI FAQ says it does not accept students below 10th grade. They are good targets for later.' },
      { q: 'Can an eighth grader apply to COSMOS?', a: 'The COSMOS home page says it is for students completing grades 8 to 12 and is limited to California high school students only. Check the current page for the year you apply.' },
      { q: 'Is block coding enough at this age?', a: 'Blocks teach real ideas, and Microsoft says MakeCode blocks map directly to lines of code. In our view many middle schoolers are ready to start typing during a summer, and the first lesson is where we check.' },
      { q: 'What is Code.org CS Discoveries?', a: 'A free Code.org curriculum listed for grades 6 to 10. Its units can be taught alone, in collections of about a semester, or as a full year, using Game Lab, App Lab, AI Lab and Web Lab.' },
      { q: 'Which first typed language is right for grades 6 to 8?', a: 'Python for most students, because it reads almost like English. Luau inside Roblox Studio suits students who love Roblox. JavaScript suits eighth graders interested in websites.' },
      { q: 'How many hours a week does your summer plan take?', a: 'About four: two live lessons of an hour each and around two hours of practice. Over four weeks that is 16 hours, which suits this age better than long daily sessions.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Can middle schoolers enter coding competitions?', a: 'Yes. The 2026 Congressional App Challenge rulebook includes students enrolled in middle school, allows block-based languages, and allows teams of up to four students.' },
      { q: 'How is this different from your other summer camp pages?', a: 'Our kids and teens summer camp pages cover the full age ranges. This page is only about grades 6 to 8, the years between elementary block coding and high school programs.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families of eleven to fourteen year olds.',
    items: [
      { href: '/summer-coding-camp-kids', label: 'Summer coding camp for kids', p: 'Our camp for younger children.' },
      { href: '/summer-coding-camp-teens', label: 'Summer coding camp for teens', p: 'For high school students.' },
      { href: '/online-coding-summer-camp', label: 'Online coding summer camp', p: 'Tracks across ages 6 to 16.' },
      { href: '/coding-for-12-year-olds', label: 'Coding for 12 year olds', p: 'What this age can build.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'A fall goal for grades 6 to 8.' },
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'Luau scripts for Roblox fans.' },
      { href: '/game-design-summer-camp-for-teens', label: 'Game design summer camp for teens', p: 'Game design summer camp for teens: engines, a real script, a six-week plan.' },
      { href: '/free-coding-programs-for-high-school-students', label: 'Free coding programs for high school students', p: 'Free coding programs for high schoolers, checked at the source, with a 16-week plan.' },
      { href: '/computer-science-internships-for-high-school-students', label: 'CS internships for high school students', p: 'CS internships for high schoolers: real 2027 rules, age lines and a readiness plan.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'In the first lesson the teacher runs the readiness check with your child, finds out what they want to make, and suggests whether to start in blocks or in Python.',
    readFirst: 'If you would like to see how lessons are structured first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or open any syllabus from the <a class="ag-inline-link" href="/courses">courses page</a>.',
    note: 'Our teachers work from India and teach entirely by video call. US parents usually reach us fastest on WhatsApp.',
    formNote: 'Free first lesson, and no payment details asked.'
  },

  footer: {
    cols: [
      { h4: 'Grades 6 to 8', links: [
        { href: '/coding-for-11-year-olds', label: 'Coding for 11 year olds' },
        { href: '/coding-for-12-year-olds', label: 'Coding for 12 year olds' },
        { href: '/coding-for-13-year-olds', label: 'Coding for 13 year olds' },
        { href: '/summer-coding-camp-kids', label: 'Kids summer camp' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online coding for US kids' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Halve the range'
  },

  personalityCss: `
.ag-root.ag-scms .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-scms .ag-capsule { border-left-width: 3px; border-radius: 6px; }
.ag-root.ag-scms .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-scms .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-scms .ag-steps { gap: 0.75rem; }
.ag-root.ag-scms .ag-band-head h3 { letter-spacing: 0.002em; }
`,

  dossier: {
    curriculumAuthority: 'Code.org Computer Science Discoveries page (Grades 6-10; free; units alone, collections or full year; collections about a semester; Month, Semester, School Year; Game Lab, App Lab, AI Lab, Web Lab; unit grade bands); Microsoft MakeCode about and MakeCode Arcade about and docs; Scratch about page; Congressional App Challenge 2026 rulebook (middle school eligibility, 6th-8th, block-based languages, teams of four); COSMOS home page; Carnegie Mellon CS Scholars page; BWSI FAQ. All read raw on 17 October 2026.',
    localProject: 'Our four-week plan (4 hours a week, 16 hours), our readiness checklist, and our Python guessing game with its arithmetic: at most 7 guesses for 1 to 100 because 2 to the 7th is 128; 10 guesses for 1 to 1,000 because 2 to the 10th is 1,024. Lesson family: halving and search.',
    requiredMentions: ['students completing grades 8-12', 'COSMOS is Limited to California High-School Students Only', 'Be at least 16 years old by the program start date.', 'nor do we accept students below 10th grade', '200 million kids create on Scratch for free', 'The blocks map directly to actual lines of code in a programming language.', 'MakeCode Arcade is a code editor to build Retro Arcade games for the browser', 'Interactive Animations and Games', 'approximately one semester or slightly less than one semester', 'Students must be enrolled in middle school or high school on October 26th, 2026.', '2 to the 7th power is 128', 'middle = (low + high) // 2'],
    sources: [
      { claim: 'CS Discoveries: grades, free curriculum, flexible units, collections, durations, labs, unit grade bands.', url: 'https://code.org/educate/csd' },
      { claim: 'MakeCode: blocks map directly to lines of code; approachable and inviting.', url: 'https://makecode.com/about' },
      { claim: 'MakeCode Arcade: retro arcade games for the browser.', url: 'https://arcade.makecode.com/about' },
      { claim: 'Scratch: 200 million kids create for free.', url: 'https://scratch.mit.edu/about' },
      { claim: 'Congressional App Challenge 2026: middle school eligibility, block languages, teams of four.', url: 'https://www.congressionalappchallenge.us/wp-content/uploads/2026/05/2026-CAC-Rules.pdf' },
      { claim: 'COSMOS: grades 8 to 12, California only.', url: 'https://cosmos-ucop.ucdavis.edu/' },
      { claim: 'CMU CS Scholars: at least 16 by the start date.', url: 'https://www.cmu.edu/pre-college/academic-programs/computer-science-scholars.html' },
      { claim: 'BWSI: no students below 10th grade.', url: 'https://bwsi.mit.edu/faq/' }
    ],
    rejectedClaims: [
      'CSTA K-12 standards for grades 6 to 8: csteachers.org returned 403, so the standards are not quoted.',
      'FTC COPPA guidance on under-13 accounts: ftc.gov returned an error page to a plain request, so no COPPA claim is printed.',
      'Scratch recommended age range: the Scratch FAQ and parents pages render only with JavaScript, so no age range is quoted.',
      'Johns Hopkins CTY summer programs: 403, not used.',
      'Fees, dates or class sizes for any outside camp: not printed.',
      'Any claim that our classes lead to admission to a selective program: refused.'
    ]
  }
};
