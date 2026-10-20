'use strict';
// Coding classes for elementary students (ag- grade-band door, K-5; US cluster Phase 2, row 14).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence (rows.tsv col 4 and autocomplete_us.tsv): "coding classes for 3rd/5th graders", "coding for
// elementary students", "coding classes for elementary students", "coding for 3rd graders", "coding for 5th graders",
// "coding activities for elementary students", "programming for elementary students".
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/coding-classes-for-elementary-students/):
//  - k12cs.org/framework-statements-by-grade-band/ (K-12 Computer Science Framework, CC BY-NC-SA 4.0), "By the end of
//    Grade 2": Algorithms "People follow and create processes as part of daily life. Many of these processes can be
//    expressed as algorithms that computers can follow."; Control "Computers follow precise sequences of instructions
//    that automate tasks."; Troubleshooting "Clearly describing a problem is the first step toward finding a solution.";
//    Modularity "Complex tasks can be broken down into simpler instructions, some of which can be broken down even
//    further."; Cybersecurity "strong passwords". "By the end of Grade 5": Troubleshooting "checking that power is
//    available, checking that physical and wireless connections are working, and clearing out the working memory by
//    restarting programs or devices"; Cybersecurity "Information can be protected using various security measures.
//    These measures can be physical and/or digital."; Visualization "People select aspects and subsets of data to be
//    transformed, organized, clustered, and categorized".
//  - k12cs.org/faq/: implemented "as standalone courses or integrated into other subject areas, particularly at the
//    elementary and middle school levels"; computer literacy definition is NOT used here (assigned to row 24).
//  - nces.ed.gov/programs/coe/glossary: Elementary school "A school that offers more of kindergarten through grade 4
//    than grades 5 through 8 and no grades 9 through 12."
//  - code.org/en-US/curriculum/computer-science-fundamentals (site now titled CodeAI): Grades K, 1, 2, 3, 4, 5;
//    Devices Computer, Chromebook, Tablet; Tools Sprite Lab, Play Lab; "Six comprehensive courses, one for each
//    elementary grade."; "Each course is approximately a month long."; Course A (K-1) "loops and events", Course B
//    (1-2) "create games in Play Lab", Course C (2-3) "sequencing, loops, and events", Course D (3-4) "algorithms,
//    conditionals", Course E (4-5) "Sprite Lab", Course F (4-5) "variables"; Pre-reader Express (K-3); Express Course
//    (3-8); CS Fundamentals Unplugged (K-5) "Learn computer science without computers."; aligned with K-5 CSTA standards.
//  - code.org/en-US/curriculum: Computer Science Connections "11 Units", Grades 3-5 pathway, connects CS with "math,
//    language arts, science, and social studies".
// Blocked (not circumvented): csteachers.org (Cloudflare 403), so no CSTA standard codes are printed.
// Our own material, labelled on the page: the grade and typical-age table (from a kindergarten start at 5), the
// grid-robot unplugged activity and its five puzzles with answers, the rocket countdown program (run with Python 3.13
// before printing; 10 passes x 10 units = 100), the five-stage ladder and the choosing checklist.
// Lesson family: sequencing and debugging (exact instructions, then find the step that went wrong).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const ROCKET = `# Rocket launch (ours): a loop, a variable and a condition
fuel = 0
for second in range(10, 0, -1):
    fuel = fuel + 10
    if second <= 3:
        print(second, "... engines on!")
    else:
        print(second)
print("Lift off with", fuel, "units of fuel")`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GRADES 1 TO 5', blurb: 'Coding for elementary students, grade by grade: what the K-12 CS Framework expects by grades 2 and 5, what schools use, and a first program.' },
  slug: 'coding-classes-for-elementary-students',
  code: 'ele',
  accent: '#804213',
  accentRationale: 'Elementary grades door, US: #804213, a muted crayon-box brown chosen with the accent picker (hue 26, s .85, v .50), allocated in alloc.tsv row 14 away from the other US accents, contrast 7.32 on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Coding classes for elementary students',
  title: 'Coding Classes for Elementary Students: Grades 1 to 5',
  description: 'Live coding classes for elementary students in grades 1 to 5: what the K-12 CS Framework expects by grades 2 and 5, what schools teach, and a first program.',
  ogDescription: 'Grades 1 to 5, ages 6 to 11: block coding and unplugged puzzles first, then Scratch games, then a first typed Python program around fourth or fifth grade. Taught live, batch or 1-on-1.',
  twitterDescription: 'Coding for elementary students, grade by grade, with a first program and an at-home activity.',
  pageName: 'Coding Classes for Elementary Students',
  webPageDescription: 'A grade-by-grade guide for US parents of elementary students to learning to code, built from the K-12 Computer Science Framework, NCES school definitions and the Code.org CS Fundamentals catalogue.',
  courseDescription: 'Live online coding classes for US elementary students in grades 1 to 5, from block coding and Scratch to a first Python program, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Coding for elementary students',
  navLinks: [
    { href: '#grades', label: 'Grades and ages' },
    { href: '#framework', label: 'By grade 2 and 5' },
    { href: '#school', label: 'At school' },
    { href: '#unplugged', label: 'Try at home' },
    { href: '#first-program', label: 'First program' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 1 to 5 &middot; Ages 6 to 11',
  h1: 'Coding classes for elementary students',
  lede: 'Modern Age Coders runs live online coding classes for elementary students in grades 1 to 5, ages 6 to 11, in a batch or one to one. Younger children start with block coding and puzzles; third to fifth graders build Scratch games, and many write a first Python program by fifth grade. Here is what to expect at each grade.',
  secondaryCta: { href: '#framework', label: 'What each grade learns' },
  wa: 'Hello Modern Age Coders, my child is in elementary school in the US and we would like to try a coding class. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Laptop, desktop or Chromebook',
  spec: [
    ['Grades', '1 to 5'],
    ['Ages', '6 to 11'],
    ['Grades 1 and 2', 'Blocks and puzzles'],
    ['Grades 3 to 5', 'Scratch, then Python'],
    ['Device', 'A computer with a keyboard'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'A good coding class for an elementary student matches the grade. In grades 1 and 2, children give exact step-by-step instructions, use loops and events in block code, and learn to describe a bug. In grades 3 to 5 they add conditions and variables, build Scratch games, and around age 9 or 10 can start typed Python. Keep classes live and short.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses built for the elementary years',
    lede: 'Each is taught live by a regular teacher who adjusts the pace to the grade your child is in.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'ELE / 01', title: 'Block coding for kids', note: 'From age 6. Puzzles, stories and first games in blocks.' },
      { course: 'scratch-programming-complete-course', code: 'ELE / 02', title: 'Scratch coding', note: 'Ages 6 to 12. Games with events, loops and scores.' },
      { course: 'python-ai-kids-masterclass', code: 'ELE / 03', title: 'Python for kids', note: 'Ages 9 to 12. The first typed code, in fourth or fifth grade.' }
    ]
  },

  sections: [
    {
      id: 'grades', tint: 'tint', eyebrow: 'Grades and ages',
      h2: 'What counts as elementary school in the US, and how old the children are',
      lede: 'Families searching for coding classes for a third grader or a fifth grader are really asking about a grade band, so it helps to start with how US schools define one.',
      body: [
        { kind: 'two',
          leftH3: 'The federal definition',
          left: [
            'The National Center for Education Statistics, which collects school data for the US Department of Education, defines an elementary school as "A school that offers more of kindergarten through grade 4 than grades 5 through 8 and no grades 9 through 12."',
            'That wording explains a common source of confusion. Many districts run kindergarten to grade 5 under one roof, while others move fifth graders, and sometimes fourth graders, into a middle or intermediate school. A fifth grader can therefore be in an elementary school in one town and a middle school in the next.'
          ],
          rightH3: 'Why the grade matters more than the building',
          right: [
            'For learning to code, what matters is reading level, typing comfort and attention span, which track the grade far better than the name on the school sign. We place children by grade and by a short look at what they can already do.',
            'Our classes start at age 6, which is first grade for most children. Kindergarten-age children are usually better served by unplugged games at home, a few of which appear further down this page.'
          ] },
        { kind: 'table', mt: true, caption: 'Elementary grades, typical ages and a sensible coding focus (ours; ages assume a child who started kindergarten at 5)', head: ['Grade', 'Typical age during the year', 'A sensible coding focus'], rows: [
          ['1st grade', '6 to 7', 'Picture blocks, arrows, short sequences, puzzles solved aloud'],
          ['2nd grade', '7 to 8', 'Loops and events in blocks, simple stories and animations'],
          ['3rd grade', '8 to 9', 'Scratch projects with a score, conditions and simple debugging'],
          ['4th grade', '9 to 10', 'Longer Scratch games, variables, first look at typed code'],
          ['5th grade', '10 to 11', 'Python basics, functions in Scratch, small projects they plan themselves']
        ] },
        { kind: 'source', html: 'Source for the definition: <a class="ag-inline-link" href="https://nces.ed.gov/programs/coe/glossary" rel="noopener" target="_blank">NCES Condition of Education glossary</a>, read 17 October 2026. The age column and the coding focus are our own guide, not a federal standard. Neither NCES nor the Department of Education has any link with us.' }
      ]
    },
    {
      id: 'framework', tint: 'deep', eyebrow: 'By grade 2 and by grade 5',
      h2: 'What US students are expected to understand by second and fifth grade',
      lede: 'The K-12 Computer Science Framework is the shared reference behind much US computer science teaching: its site says it informs state- and district-level decisions, and it was developed by the Association for Computing Machinery, Code.org, the Computer Science Teachers Association and other partners working with states and districts. It describes what students should understand at the end of grade 2 and at the end of grade 5.',
      body: [
        { kind: 'table', caption: 'Grade 2 and grade 5 endpoints in the framework&rsquo;s own words, taken from k12cs.org on 17 October 2026', head: ['Idea', 'End of grade 2', 'End of grade 5'], rows: [
          ['Algorithms', '"People follow and create processes as part of daily life. Many of these processes can be expressed as algorithms that computers can follow."', 'Comparing different ways to reach the same result'],
          ['Control', '"Computers follow precise sequences of instructions that automate tasks."', 'Loops, event handlers and conditionals (see the program below)'],
          ['Troubleshooting', '"Clearly describing a problem is the first step toward finding a solution."', 'Common strategies such as "checking that power is available, checking that physical and wireless connections are working, and clearing out the working memory by restarting programs or devices"'],
          ['Breaking tasks down', '"Complex tasks can be broken down into simpler instructions, some of which can be broken down even further."', 'Programs split into smaller parts that are easier to design and review'],
          ['Cybersecurity', 'Using authentication such as strong passwords to protect devices and information', '"Information can be protected using various security measures. These measures can be physical and/or digital."'],
          ['Working with data', 'Showing data as charts and picture graphs', '"People select aspects and subsets of data to be transformed, organized, clustered, and categorized" to give different views of it']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What this means at home',
          left: [
            'The grade 2 expectations are about precision and patience: a child who can tell a friend exactly how to draw a square, step by step, and then spot the step that went wrong, is doing the work the framework describes.',
            'By grade 5 the list grows up. Children are expected to choose how to organize data, keep accounts safe and work through a broken device or program methodically instead of giving up after the first try.'
          ],
          rightH3: 'What the framework is not',
          right: [
            'It is not a test and it does not set a lesson for each grade. It gives grade-band endpoints, and states may use it to develop their own standards, so your child&rsquo;s school may cover these ideas earlier, later or inside another subject.',
            'The framework itself says it can be taught as standalone courses or folded into other subjects, "particularly at the elementary and middle school levels". That is why some children meet coding in a library period and others in a math lesson.'
          ] },
        { kind: 'source', html: 'Where these lines come from: the <a class="ag-inline-link" href="https://k12cs.org/framework-statements-by-grade-band/" rel="noopener" target="_blank">grade-band statements on k12cs.org</a> and its <a class="ag-inline-link" href="https://k12cs.org/faq/" rel="noopener" target="_blank">questions and answers page</a>, both checked on 17 October 2026. The framework is published under a Creative Commons licence (CC BY-NC-SA 4.0); we quote short statements and do not republish it. The CSTA standards site returned an error page to our request, so this page prints no CSTA standard codes.' }
      ]
    },
    {
      id: 'school', tint: 'tint', eyebrow: 'What schools use',
      h2: 'Code.org CS Fundamentals: the course many elementary classrooms run',
      lede: 'If your child has done coding at school, there is a fair chance it was a Code.org course (the organisation now presents its site under the name CodeAI). Its elementary series is free and organised by grade, which makes it a useful map of what a child has already seen.',
      body: [
        { kind: 'table', caption: 'Code.org CS Fundamentals courses by grade, as listed on its curriculum page (read 17 October 2026)', head: ['Course', 'Grades', 'What the course description says it covers'], rows: [
          ['Course A', 'K to 1', 'Problem-solving and programming with commands like loops and events'],
          ['Course B', '1 to 2', 'Programming basics, persistence and critical thinking; games in Play Lab'],
          ['Course C', '2 to 3', 'Programs with sequencing, loops and events; interactive games'],
          ['Course D', '3 to 4', 'Loops and events again, then algorithms and conditionals'],
          ['Course E', '4 to 5', 'The Sprite Lab environment; a game or drawing made with code'],
          ['Course F', '4 to 5', 'Variables, with more choice in an interactive project'],
          ['Pre-reader Express', 'K to 3', 'A self-paced version for children not yet reading'],
          ['Express Course', '3 to 8', 'A self-paced version for older beginners'],
          ['CS Fundamentals Unplugged', 'K to 5', '"Learn computer science without computers."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Useful facts from the catalogue',
          left: [
            'Code.org describes the series as "Six comprehensive courses, one for each elementary grade." It says each course is approximately a month long and lists computers, Chromebooks and tablets as supported devices.',
            'A separate Code.org pathway, Computer Science Connections, has 11 units for grades 3 to 5 that link coding with math, language arts, science and social studies, for example coding an interactive book cover or a geometric star quilt.'
          ],
          rightH3: 'Where a live class fits alongside it',
          right: [
            'A month-long course inside a busy school year gives a good taste, and then often stops. Children who enjoyed it tend to ask for more, and that is where a weekly class with a regular teacher helps: the same ideas, taken further, with someone who notices exactly where your child gets stuck.',
            'When a new student tells us they did Course C or Course D at school, we start from there rather than repeating it. We have no tie to Code.org or CodeAI; we simply find their catalogue a clear record of what US classrooms cover.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://code.org/en-US/curriculum/computer-science-fundamentals" rel="noopener" target="_blank">Code.org CS Fundamentals</a> and the <a class="ag-inline-link" href="https://code.org/en-US/curriculum" rel="noopener" target="_blank">Code.org curriculum catalogue</a>, read 17 October 2026. Code.org also states the courses are aligned with K-5 CSTA standards.' }
      ]
    },
    {
      id: 'unplugged', tint: 'deep', eyebrow: 'Try it tonight',
      h2: 'A fifteen-minute unplugged activity for any elementary grade',
      lede: 'You do not need a computer to see whether your child enjoys this kind of thinking. This is the grid-robot game we use in first lessons, written out so you can run it at the kitchen table with paper, a pencil and a coin.',
      body: [
        { kind: 'ol', items: [
          '<b>Draw a 4 by 4 grid</b> on paper. Put a coin, the robot, in the bottom-left square, facing up the page. Draw a star in any other square.',
          '<b>Agree on four commands</b> and nothing else: F (forward one square), L (turn left), R (turn right) and P (pick up).',
          '<b>Your child writes the program</b> as a row of letters on a strip of paper, without touching the coin.',
          '<b>You are the computer.</b> Follow the strip exactly, even when it is obviously wrong. A computer does not guess what you meant, and this is the moment children understand that.',
          '<b>If the robot misses the star, debug together.</b> Ask your child to point at the first letter where the robot went somewhere unexpected, and describe the problem in one sentence before fixing it.',
          '<b>Make it harder</b> with a wall square the robot must go around, or a rule that the program can be no longer than eight letters.'
        ] },
        { kind: 'table', mt: true, caption: 'Five practice puzzles for the grid robot, robot starting bottom-left facing up (ours)', head: ['Puzzle', 'Star position', 'One working program', 'The idea it teaches'], rows: [
          ['1', '3 squares straight up', 'F F F P', 'Sequence'],
          ['2', '2 up, then 1 to the right', 'F F R F P', 'Turning changes what "forward" means'],
          ['3', 'Top-right corner', 'F F F R F F F P', 'Spotting a repeat: "F three times"'],
          ['4', '1 to the right, on the bottom row', 'R F P', 'The shortest path is not always straight ahead'],
          ['5', 'Top-right, with a wall in the second square up', 'R F F F L F F F P', 'Planning around an obstacle before writing']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What to listen for',
          left: [
            'In first and second grade, the win is a child who says "the robot turned the wrong way at the third letter" instead of "it does not work". That sentence is the whole skill of debugging in miniature.',
            'In third grade and up, listen for "I could say F three times" on puzzle 3. That is a child inventing the idea of a loop before anyone names it.'
          ],
          rightH3: 'If it goes badly',
          right: [
            'Some children find it frustrating to be followed literally. Swap roles: let them be the computer while you write a slightly wrong program, and enjoy watching them catch you out.',
            'Keep it short. Fifteen minutes that ends with a solved puzzle beats forty minutes that ends in tears, and the game is just as good tomorrow.'
          ] }
      ]
    },
    {
      id: 'first-program', tint: 'tint', eyebrow: 'Grades 4 and 5',
      h2: 'A first typed program for fourth and fifth graders',
      lede: 'Somewhere around age 9 or 10, many children who have built Scratch games are ready to type real code. This is the kind of first Python program we write with them: short, readable, and built from the same three ideas they already know from blocks.',
      body: [
        { kind: 'code', label: 'Python &middot; a rocket countdown', lang: 'python', code: ROCKET, note: 'We tested this in Python 3.13 first. The loop runs ten times and adds 10 each time, so the last line reports 100 units of fuel (10 x 10 = 100, our arithmetic). The numbers 3, 2 and 1 print with "engines on!" because of the condition.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'A variable', p: '<b>fuel</b> remembers a number and changes as the program runs, just like a score in Scratch.' },
          { h3: 'A loop', p: '<b>for second in range(10, 0, -1)</b> counts down from 10 to 1, the typed version of a repeat block.' },
          { h3: 'A condition', p: '<b>if second &lt;= 3</b> decides what to print, like an if block that checks the timer.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How we teach it',
          left: [
            'Children type it themselves, line by line, and run it after every two or three lines. Typing slowly is fine; copying and pasting is not, because the typing is where they notice the colon, the indentation and the brackets.',
            'Then we change one thing at a time. What happens if the count starts at 20? What if fuel goes up by 5? A child who can predict the new last line before running it has understood the loop.'
          ],
          rightH3: 'Is my child ready for typed code?',
          right: [
            'Three signs: they read instructions without help, they can type a short sentence in under a minute, and they have finished at least one block-coding project of their own design. Age matters less than those three.',
            'If they are not there yet, Scratch has plenty of depth left. Our Python course for kids is built for ages 9 to 12, and nobody is rushed into it.'
          ] }
      ]
    },
    {
      id: 'school-day', tint: 'deep', eyebrow: 'Across the school day',
      h2: 'How coding shows up in reading, math and science lessons',
      lede: 'Elementary teachers often weave coding into other subjects rather than teaching it alone, which is also how the framework imagines it. These are the links we draw in class, so a child sees that the same thinking works everywhere.',
      body: [
        { kind: 'table', caption: 'Where elementary coding meets other subjects (ours)', head: ['Subject', 'The coding idea', 'A small task we give'], rows: [
          ['Reading', 'Sequence: events happen in order', 'Code a three-scene story where each scene waits for a click'],
          ['Math, grades 1 and 2', 'Repetition and counting', 'Draw a row of five squares with one repeat block instead of five moves'],
          ['Math, grades 3 to 5', 'Variables that change', 'Keep score in a game and double it when a bonus is caught'],
          ['Science', 'Data from observations', 'Record the class weather for a week and turn it into a bar chart'],
          ['Social studies', 'Breaking a big task into parts', 'Plan an interactive map with one clickable sprite per landmark'],
          ['Art', 'Patterns and symmetry', 'Repeat a shape while turning, until it makes a star']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the links help',
          left: [
            'A seven-year-old who has just counted five moves and replaced them with one repeat block has learned something about multiplication as well as loops. Children enjoy noticing that two subjects are secretly the same idea.',
            'It also helps children who are not yet confident readers. A story told in code, scene by scene, gives them a reason to read short sentences carefully and in order.'
          ],
          rightH3: 'What we avoid',
          right: [
            'We do not turn coding into extra homework. If a school project already needs a chart or a story, a child can choose to build it in code with us, but nothing is assigned on top of school.',
            'We also keep screens in proportion. Some lessons for first and second graders are half unplugged, with paper, cards and the grid robot, because the thinking matters more than the device.'
          ] }
      ]
    },
    {
      id: 'choose', tint: 'tint', eyebrow: 'Choosing a class',
      h2: 'Six questions to ask before you sign up for any elementary coding class',
      lede: 'There are many options in the US, from after-school clubs to apps to live online classes. These are the questions we would ask as parents, and our own answers to them.',
      body: [
        { kind: 'table', caption: 'Questions to ask a coding provider, with our answers (ours)', head: ['Question', 'Why it matters for a 6 to 11 year old', 'Our answer'], rows: [
          ['Is it live, or recorded videos?', 'Young children rarely ask a video for help; they stop instead', 'Live, on video, every class'],
          ['Who is the teacher, and do they stay?', 'A familiar teacher notices patterns in a child&rsquo;s mistakes', 'A regular teacher each week'],
          ['How many children are in a class?', 'Group size decides how often your child gets attention', 'Fifteen to twenty in a batch, or one to one'],
          ['What will my child make?', 'Finished projects keep young learners motivated', 'A small project every few weeks, shown to the family'],
          ['How long is each class?', 'Attention spans in grades 1 and 2 are short', 'Paced by grade, with breaks for younger children'],
          ['What happens if it is not working?', 'You should not be locked in', 'Monthly, and you can stop when a month ends']
        ] },
        { kind: 'p', mt: true, html: 'For more on ages, see our pages on <a class="ag-inline-link" href="/coding-for-8-year-olds">coding for 8 year olds</a> and <a class="ag-inline-link" href="/coding-for-10-year-olds">coding for 10 year olds</a>, the guides to <a class="ag-inline-link" href="/blog/coding-for-6-year-olds">coding at 6</a> and <a class="ag-inline-link" href="/blog/coding-for-7-year-olds-what-how-kids-should-learn-programming">coding at 7</a>, and our answer to <a class="ag-inline-link" href="/best-age-to-start-coding">what age to start coding</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Grade by grade',
    h2: 'Five stages through the elementary years',
    lede: 'A rough route, not a timetable. Children arrive at different stages and move at their own speed.',
    table: { caption: 'Stages of an elementary coder (ours)', head: ['Stage', 'You will notice'], rows: [
      ['1. Instruction giver', 'Gives exact steps aloud or with arrows, fixes a wrong step when shown'],
      ['2. Block builder', 'Snaps together sequences, repeats and events to make a sprite move'],
      ['3. Game maker', 'Builds a Scratch game with a score, a timer and a win or lose rule'],
      ['4. Planner', 'Sketches a project on paper first, breaks it into parts, tests each one'],
      ['5. First typist', 'Writes and changes a short Python program, predicts what it will print']
    ] },
    left: { h3: 'For parents', ps: [
      'Stages 1 and 2 often take longer than parents expect, and that is healthy. Precision is the foundation everything else stands on.',
      'Ask to see the project, and ask your child to explain one part of it. Explaining is where the learning sticks.'
    ] },
    right: { h3: 'For kids', ps: [
      'Every coder writes programs that do not work the first time. Finding the broken step is the fun part.',
      'Make something you would actually want to play, then show it to someone at home.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for elementary-age learners',
    lede: 'Every one is live, with the same teacher each week; the ages shown are the ages each course was written for.',
    bands: [
      { num: 'I', h3: 'Puzzles and blocks', sub: 'From age 7', courses: [
        { code: 'ELE / BLK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Ages 7 to 12. Logic puzzles and plans.' },
        { code: 'ELE / BLK / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Ages 7 to 12. Code inside a world they know.' },
        { code: 'ELE / BLK / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Ages 8 to 12. Several engines, one plan.' }
      ] },
      { num: 'II', h3: 'Making real things', sub: 'From age 8', courses: [
        { code: 'ELE / MAK / 01', slug: 'block-coding-app-development-masterclass', title: 'App building in blocks', blurb: 'Ages 8 to 12. Phone apps without typing.' },
        { code: 'ELE / MAK / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Ages 8 to 14. Luau scripts in Studio.' },
        { code: 'ELE / MAK / 03', slug: 'html-css-course-for-beginners-build-real-websites', title: 'First websites', blurb: 'From age 10. HTML and CSS by hand.' }
      ] },
      { num: 'III', h3: 'Understanding AI', sub: 'From age 8', courses: [
        { code: 'ELE / AI / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'Ages 8 to 14. How AI learns and fails.' },
        { code: 'ELE / AI / 02', slug: 'kids-ai-web-development-course', title: 'AI and the web for kids', blurb: 'Ages 9 to 12. Pages that do clever things.' },
        { code: 'ELE / AI / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Ages 8 to 12. Ideas first, code explained.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes that fit around the school day',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Weekday batches that suit US time zones.' },
      { time: 'Weekends', l: 'Weekend mornings work well for younger children.' },
      { time: '1-on-1', l: 'Times set around your family calendar.' }
    ],
    cells: [
      { h3: 'One familiar teacher', p: 'Your child learns with the same person each week.' },
      { h3: 'Grouped by grade', p: 'First graders are not mixed with fifth graders.' },
      { h3: 'Screen shared', p: 'The teacher sees the project as your child builds it.' },
      { h3: 'Short and focused', p: 'Paced for elementary attention spans.' },
      { h3: 'Projects to show', p: 'Something finished every few weeks.' },
      { h3: 'Group or private', p: 'A batch of fifteen to twenty, or private lessons.' }
    ]
  },

  projectsH2: 'Projects made by our students',
  projectsLede: 'Older students built these; elementary learners are on the same road. See more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents in their own words, copied from Google.',

  fees: {
    h2: 'Fees',
    lede: 'You pay for teaching one month at a time, shown in US dollars. There is no contract for the school year, and if coding is not clicking you can stop when the month ends.',
    free: ['A free first lesson', 'A short look at your child&rsquo;s level', 'No card details'],
    group: ['Fifteen to twenty learners', 'Grouped by grade', 'One regular teacher', 'Monthly'],
    one: ['A teacher to yourself', 'Your schedule', 'A plan built around your child']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'Coding for elementary students: common questions',
    items: [
      { q: 'What grade should a child start coding?', a: 'First grade, around age 6, is a comfortable start for block coding and puzzles. Typed code such as Python usually suits fourth or fifth grade, around age 9 or 10, once a child reads and types with some ease.' },
      { q: 'What should an elementary student learn in coding?', a: 'The K-12 Computer Science Framework expects children by the end of grade 2 to follow and create step-by-step processes, use sequences, loops and events, and describe a problem clearly. By the end of grade 5 they add conditionals, variables and breaking programs into parts.' },
      { q: 'Is Scratch good for elementary students?', a: 'Yes for most children from second or third grade. It teaches events, loops, conditions and variables with blocks, so children can build real games before they can type quickly.' },
      { q: 'Can a 3rd grader learn Python?', a: 'Some can, but most third graders do better finishing Scratch projects first. We usually introduce Python in fourth or fifth grade, and our Python course for kids is built for ages 9 to 12.' },
      { q: 'What coding do elementary schools teach?', a: 'It varies by state and district. Many US classrooms use Code.org CS Fundamentals, a free series with one course for each elementary grade from kindergarten to grade 5, each about a month long.' },
      { q: 'Does my child need a computer for coding classes?', a: 'Yes, a laptop, desktop or Chromebook with a keyboard. Tablets can run some block-coding apps, but a keyboard makes typed code and longer projects much easier.' },
      { q: 'How many children are in a class?', a: 'Batches hold fifteen to twenty children of a similar grade with one regular teacher. Private 1-on-1 lessons are the other option.' },
      { q: 'What times are classes for US families?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Can we try coding at home before signing up?', a: 'Yes. Try the grid-robot game on this page: draw a 4 by 4 grid, agree on four commands, and let your child write a program for you to follow exactly. You can also book a free first lesson.' },
      { q: 'How much do coding classes for elementary students cost?', a: 'Nothing for the first lesson. Fees are then paid month by month, and the fees section further up shows the monthly amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for parents of US elementary students.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Our hub for families across the US.' },
      { href: '/online-coding-classes-for-kids-usa', label: 'Online coding for US kids', p: 'The full kids catalogue in one place.' },
      { href: '/coding-for-9-year-olds', label: 'Coding for 9 year olds', p: 'A closer look at third and fourth grade.' },
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'For the Roblox fan in the family.' },
      { href: '/online-math-tutor-3rd-grade', label: '3rd grade math tutoring', p: 'Coding and math grow together.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live class.' },
      { href: '/coding-classes-for-middle-school-students', label: 'Coding classes for middle school students', p: 'Coding for middle schoolers: grade 8 expectations, a real Python program, and how to choose a language.' },
      { href: '/coding-classes-for-high-school-students', label: 'Coding classes for high school students', p: 'Coding for high schoolers: CS access data, AP CSP and AP CSA in 2027, and a four-year plan.' },
      { href: '/coding-milestones-by-age', label: 'Coding milestones by age', p: 'Coding milestones by age, with a checklist for 8 to 10 year olds.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Let us know which grade your child is in and anything they have tried already, at school or at home. The teacher plans the first lesson around that, so it feels like a step forward, not a repeat.',
    readFirst: 'Curious about the method first? Our page on <a class="ag-inline-link" href="/how-we-teach">how a class works</a> shows a lesson from start to finish, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Classes are taught live on video by our teachers in India, so nothing depends on where in the US you live. WhatsApp is the quickest way to reach us.',
    formNote: 'The first lesson is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Elementary coding', links: [
        { href: '/coding-for-8-year-olds', label: 'Coding for 8 year olds' },
        { href: '/coding-for-10-year-olds', label: 'Coding for 10 year olds' },
        { href: '/coding-for-11-year-olds', label: 'Coding for 11 year olds' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/python-for-10-year-olds', label: 'Python for 10 year olds' },
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes' }
      ] }
    ],
    bottomRight: 'Exact steps first, then find the one that broke'
  },

  personalityCss: `
.ag-root.ag-ele .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ele .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-ele .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-ele .ag-table caption { text-align: left; }
.ag-root.ag-ele .ag-steps li { line-height: 1.6; }
.ag-root.ag-ele .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  dossier: {
    curriculumAuthority: 'K-12 Computer Science Framework (k12cs.org, CC BY-NC-SA 4.0), statements by grade band read raw 17 October 2026: grade 2 Algorithms, Control, Troubleshooting, Modularity, Cybersecurity; grade 5 Troubleshooting, Cybersecurity, Visualization; FAQ on integration at elementary and middle school levels. NCES glossary definition of an elementary school. Code.org CS Fundamentals catalogue (Courses A to F by grade, Pre-reader Express K-3, Express 3-8, Unplugged K-5, devices, month-long courses) and CS Connections (11 units, grades 3-5).',
    localProject: 'Grid-robot unplugged activity with five practice puzzles and answers (ours), and a Python rocket countdown with a variable, a loop and a condition (ours, run with Python 3.13; 10 x 10 = 100). Lesson family: sequencing and debugging.',
    requiredMentions: ['A school that offers more of kindergarten through grade 4 than grades 5 through 8 and no grades 9 through 12', 'Clearly describing a problem is the first step toward finding a solution', 'Computers follow precise sequences of instructions that automate tasks', 'These measures can be physical and/or digital', 'particularly at the elementary and middle school levels', 'Six comprehensive courses, one for each elementary grade', 'CS Fundamentals Unplugged', 'Pre-reader Express', 'Computer Science Connections, has 11 units', 'R F F F L F F F P', '10 x 10 = 100'],
    sources: [
      { claim: 'Grade 2 and grade 5 concept statements quoted in the framework table.', url: 'https://k12cs.org/framework-statements-by-grade-band/' },
      { claim: 'The framework can be integrated into other subjects, particularly at elementary and middle school levels; it is not a test or lesson plan.', url: 'https://k12cs.org/faq/' },
      { claim: 'NCES definition of an elementary school.', url: 'https://nces.ed.gov/programs/coe/glossary' },
      { claim: 'CS Fundamentals Courses A to F with grades, express and unplugged versions, devices, course length, CSTA alignment.', url: 'https://code.org/en-US/curriculum/computer-science-fundamentals' },
      { claim: 'Computer Science Connections: 11 units, grades 3 to 5, linked to other subjects.', url: 'https://code.org/en-US/curriculum' }
    ],
    rejectedClaims: [
      'CSTA K-12 standard codes and their wording: csteachers.org returned a Cloudflare 403 page, not circumvented, so no CSTA standard text is printed; CSTA is named only as a framework partner and through Code.org&rsquo;s alignment statement.',
      'Scratch age ranges from MIT: scratch.mit.edu and scratchjr.org returned script-only pages with no readable text, so no Scratch or ScratchJr age claim is quoted.',
      'How many US elementary schools teach coding: no national elementary access figure was found at a primary source (the Code.org data sheet covers high schools), so none is printed.',
      'That any grade or test result follows from our classes: no outcome promises are made.',
      'Any affiliation with NCES, the US Department of Education, k12cs.org, Code.org (CodeAI) or CSTA: none, and the page says so.'
    ]
  }
};
