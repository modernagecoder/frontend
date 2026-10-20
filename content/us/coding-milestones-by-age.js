'use strict';
// Coding milestones by age (ag- age door; US cluster Phase 2, row 17).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Search evidence: Search Console (US, 16 months) "coding milestones for 8-10 year olds" 3,098 impressions at position
// 8.2 and "coding for 8-10 year olds" 743 at 10.5; rows.tsv col 4 "coding milestones for 8-10 year olds (3.1K @8)";
// autocomplete_us.tsv "coding for 8 year olds", "coding for 9 year olds", "coding for 10 year olds" families.
// Existing pages this must not twin: /coding-for-8-year-olds, /coding-for-10-year-olds (which give "By 9 or 10 the
// milestones are a multi-level game, a first typed Python program and a simple webpage"; this page agrees and does not
// repeat that sentence), /best-age-to-start-coding, /blog/best-coding-languages-kids-10-18-beginner-advanced.
// Sources, read raw with curl on 17 October 2026 (copies in keyword-research-2026-09/us/src/coding-milestones-by-age/):
//  - k12cs.org/navigating-the-concepts/: "The concept statements in the framework describe conceptual milestones at
//    different grade-band endpoints: Grades 2, 5, 8, and 12."; "Boundary statements are included to clarify what is not
//    expected to be learned at that grade level."
//  - k12cs.org/navigating-the-practices/: "Rather than grade bands, the progressions use a narrative format";
//    "The practice statement describes what students should be able to do when exiting Grade 12."
//  - k12cs.org/framework-statements-by-grade-band/, "By the end of Grade 5" (the endpoint for ages 8 to 10, our mapping):
//    Algorithms "Different algorithms can achieve the same result. Some algorithms are more appropriate for a specific
//    context than others." and "noncomputer languages, including natural language, flowcharts, and pseudocode";
//    Variables "Programming languages provide variables, which are used to store and modify data." and the boundary "At
//    this level, understanding how to use variables is sufficient, without a fuller understanding of the technical
//    aspects of variables (such as identifiers and memory locations)."; Control "Conditionals selectively execute or skip
//    instructions under different conditions."; Modularity "Programs can be broken down into smaller parts to facilitate
//    their design, implementation, and review."; Program Development "People develop programs using an iterative process
//    involving design, implementation, and review." Grades 2, 8 and 12 are paraphrased here (quoted on rows 14 to 16).
//  - k12cs.org/faq/: "The framework is not a set of standards."
//  - nces.ed.gov/programs/statereform/tab1_3-2020.asp (NCES State Education Practices, Table 1.3, 2020): kindergarten
//    entrance age California, Texas and Florida "5 on or before 9/1"; Connecticut "5 on or before 1/1"; New York "LEA
//    option".
//  - code.org/en-US/curriculum pages: CS Fundamentals grades K to 5, CS Discoveries grades 6 to 10, CS Principles grades
//    9 to 12 (used as a cross-check of the age-to-grade mapping only).
// Blocked (not circumvented): csteachers.org (403), so CSTA's own age labels for its levels are not printed.
// Our own material, labelled: the age-to-grade arithmetic (a child who is 5 by September 1 starts kindergarten at 5, so
// 3rd grade at 8 and 5th grade at 10), the milestone table for ages 6 to 18, the ten-point checklist for ages 8 to 10,
// the draw-a-square table across five ages, and the times-table quiz (run with Python 3.13 before printing).
// Lesson family: one task at increasing levels of abstraction (steps, repeat, loop, function, general function).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const QUIZ = `# Times-table quiz (ours): variables, a loop and a condition together
import random

score = 0
for question in range(5):
    a = random.randint(2, 9)
    b = random.randint(2, 9)
    answer = input(f"What is {a} x {b}? ")
    if answer == str(a * b):
        score = score + 1
        print("Correct!")
    else:
        print("Not quite, it is", a * b)
print("You scored", score, "out of 5")`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MILESTONES', blurb: 'Coding milestones by age, 6 to 18, mapped to the K-12 CS Framework grade endpoints, with a ten-point checklist for 8 to 10 year olds.' },
  slug: 'coding-milestones-by-age',
  code: 'mba',
  accent: '#0D4C0B',
  accentRationale: 'Coding milestones door, US: #0D4C0B, a deep muted chalkboard green chosen with the accent picker (hue 118, s .86, v .30), allocated in alloc.tsv row 17 away from the other US accents, contrast 9.64 on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Coding milestones by age',
  title: 'Coding Milestones by Age: What Kids Can Do from 6 to 18',
  description: 'Coding milestones by age, 6 to 18, mapped to the K-12 CS Framework endpoints at grades 2, 5, 8 and 12, with a ten-point checklist for 8 to 10 year olds.',
  ogDescription: 'What should an 8, 9 or 10 year old be able to code? Milestones by age from 6 to 18, tied to the K-12 Computer Science Framework, with an at-home checklist and a real program.',
  twitterDescription: 'Coding milestones by age, with a checklist for 8 to 10 year olds.',
  pageName: 'Coding Milestones by Age',
  webPageDescription: 'A milestone guide for US parents showing what children can typically do in coding at each age from 6 to 18, mapped to the K-12 Computer Science Framework grade endpoints and US kindergarten entry ages.',
  courseDescription: 'Live online coding classes for children and teenagers in the United States, paced to age-appropriate milestones from block coding to Python and Java, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Coding milestones by age',
  navLinks: [
    { href: '#eight-to-ten', label: 'Ages 8 to 10' },
    { href: '#table', label: 'Ages 6 to 18' },
    { href: '#grades', label: 'Ages and grades' },
    { href: '#square', label: 'One task, five ages' },
    { href: '#program', label: 'A milestone program' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 6 to 18 &middot; Focus on ages 8 to 10',
  h1: 'Coding milestones by age',
  lede: 'From Modern Age Coders, who teach live online coding to children aged 6 to 18 in a batch or one to one: by age 8 a child can typically build a block-coded game with events, loops and a score; by 10, the milestones are planning a project, debugging it alone and writing a first typed Python program. The full milestones by age are below.',
  secondaryCta: { href: '#eight-to-ten', label: 'Checklist for ages 8 to 10' },
  wa: 'Hello Modern Age Coders, I would like to know what coding milestones my child should reach for their age. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Ages 6 to 18, placed by level',
  spec: [
    ['Ages', '6 to 18'],
    ['Ages 6 to 7', 'Steps, blocks, puzzles'],
    ['Ages 8 to 10', 'Scratch games, first Python'],
    ['Ages 11 to 14', 'Functions, real users'],
    ['Ages 15 to 18', 'Java, AP, specialisms'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short: milestones for 8 to 10 year olds',
  capsule: 'Coding milestones for 8 to 10 year olds: build a Scratch game that uses events, loops, a condition and a score variable; plan it first on paper; find and fix their own bugs; explain that two different programs can solve the same problem; and, by about 10, type a short Python program. These match the K-12 CS Framework endpoint for the end of grade 5. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.',

  picks: {
    eyebrow: 'Matched to the milestones',
    h2: 'Three courses for the 8 to 10 milestones',
    lede: 'Most children in this age range sit in one of these, chosen in a free first lesson.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'MBA / 01', title: 'Scratch coding course', note: 'For 6 to 12. The events, loops and score milestones.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'MBA / 02', title: 'Thinking like a programmer', note: 'For 7 to 12. Planning, patterns and debugging habits.' },
      { course: 'python-ai-kids-masterclass', code: 'MBA / 03', title: 'First Python', note: 'For 9 to 12. The typed-code milestone at about 10.' }
    ]
  },

  sections: [
    {
      id: 'eight-to-ten', tint: 'tint', eyebrow: 'Ages 8 to 10',
      h2: 'Ten coding milestones for 8, 9 and 10 year olds',
      lede: 'This is the age range parents ask us about most. The checklist below is ours, written so you can check each point at home by watching or asking, without knowing how to code yourself.',
      body: [
        { kind: 'table', caption: 'A ten-point milestone checklist for ages 8 to 10, with a way to check each one (ours)', head: ['#', 'Milestone', 'How a parent can check'], rows: [
          ['1', 'Gives exact instructions and fixes the one that is wrong', 'Ask them to direct you to draw a house, step by step'],
          ['2', 'Uses a repeat or loop instead of copying the same block', 'Ask where in their project something happens more than once'],
          ['3', 'Makes something happen when an event occurs', 'Click, press a key, or touch a sprite in their game'],
          ['4', 'Uses a condition to decide what happens', 'Ask: what makes the player win or lose?'],
          ['5', 'Keeps a score or timer in a variable', 'Watch the number change while they play'],
          ['6', 'Plans a project before building it', 'Look for a sketch, a list or a storyboard'],
          ['7', 'Breaks a project into parts and builds one at a time', 'Ask which part they are working on this week'],
          ['8', 'Finds and fixes their own bugs, at least sometimes', 'Ask about the last thing that went wrong'],
          ['9', 'Knows two programs can solve the same problem differently', 'Ask if there was another way to do it'],
          ['10', 'Around 10: types and changes a short Python program', 'Ask them to change one number and predict the result']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Eight, nine and ten are not the same',
          left: [
            'Our own plan: milestones 1 to 5 at 8, usually in block code; planning and splitting work into parts at 9; and at 10, aiming for milestones 8 and 9 to become reliable, with typed Python for children who are ready.',
            'Reading and typing set the pace more than raw age. A strong reader of 8 can be ahead of a reluctant reader of 10, and that is fine; the order of the milestones matters more than the speed.'
          ],
          rightH3: 'If your child is not there yet',
          right: [
            'None of these is a deadline. A child who starts coding at 9 can move through the first five milestones quickly, because reading and concentration are already in place.',
            'If a child has been coding for a while and seems stuck, a common sticking point is milestone 6, planning. Children who jump straight into building tend to make the same half-finished project repeatedly. A teacher who insists on a two-minute sketch first often unblocks them.'
          ] }
      ]
    },
    {
      id: 'framework', tint: 'deep', eyebrow: 'Where milestones come from',
      h2: 'The framework milestone for ages 8 to 10: the end of grade 5',
      lede: 'The K-12 Computer Science Framework, which its authors say informs state- and district-level decisions, describes its concept statements as "conceptual milestones at different grade-band endpoints: Grades 2, 5, 8, and 12." For a child of 8 to 10, the endpoint ahead is the end of fifth grade.',
      body: [
        { kind: 'table', caption: 'End of grade 5, programming strand, in the framework&rsquo;s exact words (k12cs.org, accessed 17 October 2026)', head: ['Area', 'What the framework says by the end of grade 5', 'Matching checklist point'], rows: [
          ['Algorithms', '"Different algorithms can achieve the same result. Some algorithms are more appropriate for a specific context than others."', '9'],
          ['Variables', '"Programming languages provide variables, which are used to store and modify data."', '5'],
          ['Control', '"Conditionals selectively execute or skip instructions under different conditions."', '3 and 4'],
          ['Modularity', '"Programs can be broken down into smaller parts to facilitate their design, implementation, and review."', '7'],
          ['Program development', '"People develop programs using an iterative process involving design, implementation, and review."', '6 and 8']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What is not expected yet',
          left: [
            'The framework also includes boundary statements, which it says "clarify what is not expected to be learned at that grade level." For variables at grade 5, it says "understanding how to use variables is sufficient, without a fuller understanding of the technical aspects of variables (such as identifiers and memory locations)."',
            'That is reassuring for parents. A 9 year old who keeps a score in Scratch has met the milestone, even if they could not explain what a variable is in technical terms.'
          ],
          rightH3: 'Algorithms without a computer',
          right: [
            'The grade 5 description notes that algorithms "can be expressed in noncomputer languages, including natural language, flowcharts, and pseudocode", using examples such as choosing a route home. A child who can explain two routes and why one is faster is practising milestone 9.',
            'The framework is careful to say it "is not a set of standards"; states may use it to develop their own. Treat these as directions of travel, not a test.'
          ] },
        { kind: 'source', html: 'Sources, all on k12cs.org and read 17 October 2026: <a class="ag-inline-link" href="https://k12cs.org/navigating-the-concepts/" rel="noopener" target="_blank">Navigating the Concepts</a>, <a class="ag-inline-link" href="https://k12cs.org/framework-statements-by-grade-band/" rel="noopener" target="_blank">statements by grade band</a> and the <a class="ag-inline-link" href="https://k12cs.org/faq/" rel="noopener" target="_blank">FAQ</a>. The checklist matching is ours. The framework is licensed CC BY-NC-SA 4.0; we quote short extracts and have no connection with its authors.' }
      ]
    },
    {
      id: 'table', tint: 'tint', eyebrow: 'Ages 6 to 18',
      h2: 'Coding milestones at every age from 6 to 18',
      lede: 'The same thread runs from first grade to senior year: exact steps, then patterns, then organisation, then judgement. This table is our summary, with the nearest framework endpoint for each age.',
      body: [
        { kind: 'table', caption: 'Coding milestones by age, with the nearest framework endpoint (ours)', head: ['Age', 'A milestone you can see', 'Usually working in', 'Nearest framework endpoint'], rows: [
          ['6', 'Follows and gives step-by-step instructions; fixes a wrong step when it is pointed out', 'Unplugged games, picture blocks', 'End of grade 2'],
          ['7', 'Repeats a pattern with a loop; makes a sprite react to a click', 'Block coding', 'End of grade 2'],
          ['8', 'Builds a small game with events, a loop, a condition and a score', 'Scratch', 'End of grade 5'],
          ['9', 'Plans on paper first; splits a project into scenes or parts', 'Scratch, longer projects', 'End of grade 5'],
          ['10', 'Debugs alone; compares two solutions; types a first Python program', 'Scratch and Python', 'End of grade 5'],
          ['11 to 12', 'Writes typed programs with loops and conditions; uses lists', 'Python', 'End of grade 8'],
          ['13 to 14', 'Organises code into functions with parameters; builds for a real user', 'Python, JavaScript', 'End of grade 8'],
          ['15 to 16', 'Writes classes; chooses data structures; traces code by hand', 'Java, Python', 'End of grade 12'],
          ['17 to 18', 'Weighs trade-offs in algorithms and design; finishes a substantial project', 'Java, Python, a specialism', 'End of grade 12']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table',
          left: [
            'The ages are typical, not targets. A teenager who starts at 14 will pass through the early milestones in weeks, because reading, typing and patience are already in place.',
            'What does not change is the order. In our teaching, functions and parameters always come after loops and conditions feel comfortable, never before.'
          ],
          rightH3: 'How it relates to our other pages',
          right: [
            'For a close look at single ages, see <a class="ag-inline-link" href="/coding-for-8-year-olds">coding for 8 year olds</a>, <a class="ag-inline-link" href="/coding-for-9-year-olds">9 year olds</a> and <a class="ag-inline-link" href="/coding-for-10-year-olds">10 year olds</a>. For younger children, read about <a class="ag-inline-link" href="/blog/coding-for-5-year-olds-young-kids-start-learning-programming">coding at 5</a>.',
            'For language choices by age, our <a class="ag-inline-link" href="/blog/best-coding-languages-kids-10-18-beginner-advanced">guide to coding languages from 10 to 18</a> goes deeper, and the question of when to begin is covered in <a class="ag-inline-link" href="/best-age-to-start-coding">starting age</a>.'
          ] }
      ]
    },
    {
      id: 'grades', tint: 'deep', eyebrow: 'Ages and US grades',
      h2: 'Turning an age into a US grade',
      lede: 'US schools and the framework talk in grades, while parents search by age. The link between the two depends on each state&rsquo;s kindergarten entrance age, which NCES tracks state by state.',
      body: [
        { kind: 'table', caption: 'Kindergarten entrance age in selected states, NCES State Education Practices, Table 1.3, 2020', head: ['State', 'Kindergarten entrance age as listed'], rows: [
          ['California', '5 on or before 9/1'],
          ['Texas', '5 on or before 9/1'],
          ['Florida', '5 on or before 9/1'],
          ['Connecticut', '5 on or before 1/1'],
          ['New York', 'LEA option (set by the local education agency)']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our arithmetic',
          left: [
            'Where a child must be 5 by September 1, they start kindergarten at 5, first grade at 6, third grade at 8 and fifth grade at 10. So, by our reckoning, 8 to 10 year olds are mostly in grades 3 to 5, and the end of grade 5 is the framework milestone ahead of them.',
            'In a state with a later cut-off, such as Connecticut&rsquo;s January 1 in the 2020 table, some children are a few months younger for their grade. Where the local district decides, as in New York, it varies by district.'
          ],
          rightH3: 'A cross-check from school courses',
          right: [
            'Code.org&rsquo;s course catalogue lines up with the same mapping: its CS Fundamentals series runs from kindergarten to grade 5, CS Discoveries is listed for grades 6 to 10, and CS Principles for grades 9 to 12.',
            'Those are curriculum choices, not rules, but they show the same broad shape as the milestone table: blocks through fifth grade, typed code from middle school, and formal computer science in high school.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://nces.ed.gov/programs/statereform/tab1_3-2020.asp" rel="noopener" target="_blank">NCES Table 1.3, kindergarten entrance and attendance, by state: 2020</a> (which itself draws on the Education Commission of the States) and the <a class="ag-inline-link" href="https://code.org/en-US/curriculum" rel="noopener" target="_blank">Code.org curriculum catalogue</a>, both read 17 October 2026. Check your own district for current rules. We are not connected with NCES or Code.org.' }
      ]
    },
    {
      id: 'square', tint: 'tint', eyebrow: 'One task, five ages',
      h2: 'The same task at five ages: drawing a square',
      lede: 'The clearest way to see milestones is to give children of different ages the same job. Here is what drawing a square looks like as children grow, from our own classes. Each step is the previous one with one more idea added.',
      body: [
        { kind: 'table', caption: 'Drawing a square at five ages (ours)', head: ['Age', 'What the child produces', 'The new idea'], rows: [
          ['6', 'Four spoken steps: forward, turn, forward, turn, forward, turn, forward, turn', 'Sequence'],
          ['8', 'A Scratch script: repeat 4 times, move 100 steps, turn 90 degrees', 'Loop'],
          ['10', 'Typed Python: a for loop that repeats forward and turn four times', 'Typed syntax'],
          ['13', 'A function square(size) that draws a square of any size', 'Parameters'],
          ['16', 'A function polygon(sides, size) that turns 360 / sides degrees each time, tested for 3, 4 and 6 sides', 'Generalising and testing']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why this works as a check',
          left: [
            'Ask your child to tell you how to draw a square, and listen for which version you get. A 9 year old who says "repeat four times" without prompting has made the jump from sequence to loop.',
            'The 16 year old version is worth a second look. Turning 360 / sides degrees works for any regular polygon, so a single idea replaces endless special cases. That move, from one answer to a general rule, is what the grade 12 framework statements are about.'
          ],
          rightH3: 'Try the next step up',
          right: [
            'Whatever version your child produces, ask for the next one. A 6 year old can try to spot the repeat. An 8 year old can try changing the 4 and the 90 to make a triangle (3 and 120).',
            'Students enjoy discovering that 3 sides need 120 degrees, 6 sides need 60, and that the numbers always multiply to 360. That is a maths milestone hiding inside a coding one.'
          ] }
      ]
    },
    {
      id: 'program', tint: 'deep', eyebrow: 'A milestone program',
      h2: 'What the age 10 milestone looks like in typed code',
      lede: 'This is a program a 10 year old in our Python class can write, change and explain after a few weeks. It pulls milestones 3 to 5 together in typed form: a loop, a condition and a variable that keeps the score.',
      body: [
        { kind: 'code', label: 'Python &middot; a times-table quiz', lang: 'python', code: QUIZ, note: 'Ours. We ran it with Python 3.13 before printing, giving it typed answers. Each question picks two numbers from 2 to 9, so every run asks something different; the score counts correct answers out of 5.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'The variable', p: '<b>score</b> starts at 0 and goes up by one for each correct answer: milestone 5.' },
          { h3: 'The loop', p: '<b>for question in range(5)</b> asks exactly five questions: milestone 2, in typed form.' },
          { h3: 'The condition', p: '<b>if answer == str(a * b)</b> decides between two replies: milestone 4.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Changes a 10 year old can make',
          left: [
            'Ask ten questions instead of five, use numbers up to 12, or print a different message for a perfect score. Each change is one or two lines, and each one shows whether the child understands the line they are changing.',
            'The test we use: before running a change, the child predicts what will happen. A correct prediction is the milestone; the running program only confirms it.'
          ],
          rightH3: 'The same program at 8',
          right: [
            'An 8 year old builds the same quiz in Scratch with an ask block, a repeat block, an if block and a score variable. It is the same thinking without the typing.',
            'That is why we do not rush children into Python. The milestone is the idea, and blocks let younger children reach it while their typing catches up.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Four big steps',
    h2: 'The four big shifts between 6 and 18',
    lede: 'Underneath the age-by-age detail, children make four big changes in how they think about code.',
    table: { caption: 'Four shifts in coding thinking (ours)', head: ['Shift', 'Typical age', 'From, to'], rows: [
      ['1. Steps to patterns', '7 to 8', 'From listing every step to noticing repeats'],
      ['2. Doing to planning', '9 to 10', 'From building straight away to sketching first'],
      ['3. One program to reusable parts', '12 to 14', 'From one long script to functions with parameters'],
      ['4. Working code to good code', '15 to 18', 'From "it runs" to "it is the right design, and here is why"']
    ] },
    left: { h3: 'For parents', ps: [
      'Shifts 1 and 2 are the ones to watch for between 8 and 10. Both show up in conversation before they show up in code.',
      'Praise the plan, not just the finished game. Planning is the milestone most children skip.'
    ] },
    right: { h3: 'For kids', ps: [
      'If you are copying the same blocks again and again, there is probably a loop hiding in there.',
      'Draw your game on paper before you build it. Two minutes of planning saves twenty minutes of fixing.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses for every milestone, 6 to 18',
    lede: 'Nine of our live courses, grouped by the milestones they build. Every one runs in a batch or one to one with a regular teacher.',
    bands: [
      { num: 'I', h3: 'First milestones', sub: 'Ages 6 to 9', courses: [
        { code: 'MBA / A / 01', slug: 'kids-coding-blocks-masterclass', title: 'Block coding', blurb: 'From 6. Steps, repeats and events.' },
        { code: 'MBA / A / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'From 7. Loops in a world they love.' },
        { code: 'MBA / A / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'From 8. Events with a real audience.' }
      ] },
      { num: 'II', h3: 'Middle milestones', sub: 'Ages 9 to 14', courses: [
        { code: 'MBA / B / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: '8 to 14. How machines learn from data.' },
        { code: 'MBA / B / 02', slug: 'kids-ai-web-development-course', title: 'Web and AI for kids', blurb: '9 to 12. Pages that react.' },
        { code: 'MBA / B / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'From 13. Functions on the web.' }
      ] },
      { num: 'III', h3: 'Later milestones', sub: 'Ages 13 to 18', courses: [
        { code: 'MBA / C / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Real projects, start to finish.' },
        { code: 'MBA / C / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Classes, objects and AP CSA.' },
        { code: 'MBA / C / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'From Python to real models.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes paced to each child&rsquo;s milestones',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Batches set for US time zones after school.' },
      { time: 'Weekends', l: 'Morning classes for younger learners.' },
      { time: '1-on-1', l: 'For a plan built around one child.' }
    ],
    cells: [
      { h3: 'Placed by milestone', p: 'Children join where they are, not where their age says.' },
      { h3: 'A teacher who tracks it', p: 'The same teacher notices each step forward.' },
      { h3: 'Predict, then run', p: 'Our routine for checking real understanding.' },
      { h3: 'Plans before projects', p: 'Every project starts with a sketch.' },
      { h3: 'Shown at home', p: 'Finished work to share with the family.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one to one.' }
    ]
  },

  projectsH2: 'Where the milestones lead',
  projectsLede: 'Projects from our older students, who passed the same early milestones. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'From Google reviews, exactly as parents wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Teaching is billed one month at a time in US dollars. There is no long commitment; reaching a milestone, or deciding coding is not for your child, are both good reasons to review at the end of a month.',
    free: ['A free first lesson', 'A milestone check for your child', 'No card details'],
    group: ['Fifteen to twenty learners', 'Placed by level', 'One regular teacher', 'Monthly'],
    one: ['A teacher to yourself', 'Paced to your child', 'Times you choose']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'Coding milestones: common questions',
    items: [
      { q: 'What coding milestones should an 8 to 10 year old reach?', a: 'By 8, a block-coded game with events, a loop, a condition and a score. By 9, planning a project first and building it in parts. By 10, debugging alone, comparing two solutions and typing a short Python program. These match the K-12 CS Framework endpoint for the end of grade 5.' },
      { q: 'Can an 8 year old learn to code?', a: 'Yes. Most 8 year olds can build Scratch games with events, loops and a score. Typed languages usually come a little later, around 9 or 10, once reading and typing are comfortable.' },
      { q: 'What grade is a 9 year old in?', a: 'Usually third or fourth grade. Where a child must be 5 by September 1 to start kindergarten, as NCES lists for California, Texas and Florida in 2020, children are 8 when third grade starts and turn 9 during it, so a child who is already 9 in September is usually starting fourth grade.' },
      { q: 'What are the K-12 CS Framework milestones?', a: 'The framework describes its concept statements as conceptual milestones at four grade-band endpoints: the ends of grades 2, 5, 8 and 12. States may use it to develop their own standards, so it is a guide rather than a test.' },
      { q: 'At what age can a child learn Python?', a: 'Around 9 or 10 for most children, after they have built a few projects in block code. Teenagers starting from scratch can begin with Python straight away.' },
      { q: 'Is my child behind if they cannot code at 10?', a: 'No. Children who start later often move quickly through the early milestones because they read and concentrate well. The order of the milestones matters more than the age they are reached.' },
      { q: 'How can I check my child\'s coding level at home?', a: 'Ask them to tell you how to draw a square. Four separate steps, a repeat four times, a typed loop, or a function with a size are each a different milestone. The ten-point checklist on this page gives more ways to check.' },
      { q: 'What should a 6 year old be able to do in coding?', a: 'Follow and give exact step-by-step instructions, use simple picture blocks, and fix a wrong step when it is pointed out. Many 6 year olds also enjoy making a character move with a click.' },
      { q: 'What times are classes for US families?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do coding classes cost?', a: 'The first lesson, which includes a milestone check, is free. After that, classes are paid monthly and the fees section on this page gives the amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More on ages and stages for US families.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Start of our US section.' },
      { href: '/coding-for-8-year-olds', label: 'Coding for 8 year olds', p: 'The first Scratch games in detail.' },
      { href: '/coding-for-10-year-olds', label: 'Coding for 10 year olds', p: 'From Scratch towards Python.' },
      { href: '/blog/coding-for-7-year-olds-what-how-kids-should-learn-programming', label: 'Coding for 7 year olds', p: 'What to learn and how.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'The first typed language.' },
      { href: '/online-coding-classes-for-kids-usa', label: 'Online coding for US kids', p: 'All kids courses together.' },
      { href: '/ai-literacy-for-elementary-students', label: 'AI literacy for elementary students', p: 'AI literacy for K-5: what it means, what standards expect, and two activities.' },
      { href: '/c-plus-plus-for-kids', label: 'C++ for kids', p: 'C++ for kids: an honest age guide, three real programs and the USACO path.' },
      { href: '/javascript-for-kids', label: 'JavaScript for kids', p: 'JavaScript for kids: an age guide, the Console, and three real programs to try today.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your child&rsquo;s age and what they have tried. The teacher uses the first lesson as a friendly milestone check and suggests where to begin.',
    readFirst: 'To see the approach before you book, read <a class="ag-inline-link" href="/how-we-teach">our teaching method</a> or look through <a class="ag-inline-link" href="/courses">each course outline</a>.',
    note: 'Every class is live on video, taught by our teachers in India, so where you live in the US makes no difference. Send us a WhatsApp message for the fastest response.',
    formNote: 'Free first lesson; card details are never requested.'
  },

  footer: {
    cols: [
      { h4: 'Ages and stages', links: [
        { href: '/coding-for-8-year-olds', label: 'Coding for 8 year olds' },
        { href: '/coding-for-9-year-olds', label: 'Coding for 9 year olds' },
        { href: '/coding-for-10-year-olds', label: 'Coding for 10 year olds' },
        { href: '/coding-for-12-year-olds', label: 'Coding for 12 year olds' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/blog/coding-for-6-year-olds', label: 'Coding for 6 year olds' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Steps, then repeats, then functions, then judgement'
  },

  personalityCss: `
.ag-root.ag-mba .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-mba .ag-capsule { border-left-width: 7px; border-radius: 3px; }
.ag-root.ag-mba .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-mba .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-mba .ag-table td { line-height: 1.5; }
.ag-root.ag-mba .ag-band-head h3 { letter-spacing: -0.005em; }
`,

  dossier: {
    curriculumAuthority: 'K-12 Computer Science Framework (k12cs.org, CC BY-NC-SA 4.0), read raw 17 October 2026: Navigating the Concepts (milestones at grades 2, 5, 8 and 12; boundary statements), Navigating the Practices (narrative progressions), grade 5 programming statements and descriptions (algorithms, variables incl. boundary, control, modularity, program development), FAQ ("not a set of standards"). NCES State Education Practices Table 1.3 (2020) kindergarten entrance ages for CA, TX, FL, CT, NY. Code.org catalogue grade spans for CS Fundamentals, CS Discoveries and CS Principles.',
    localProject: 'A ten-point milestone checklist for ages 8 to 10 with at-home checks, a milestone table for ages 6 to 18, a draw-a-square progression across five ages (360 / sides), and a Python times-table quiz (ours, run with Python 3.13). Lesson family: one task at rising levels of abstraction.',
    requiredMentions: ['conceptual milestones at different grade-band endpoints: Grades 2, 5, 8, and 12', 'clarify what is not expected to be learned at that grade level', 'Different algorithms can achieve the same result', 'without a fuller understanding of the technical aspects of variables (such as identifiers and memory locations)', 'noncomputer languages, including natural language, flowcharts, and pseudocode', 'is not a set of standards', '5 on or before 9/1', '5 on or before 1/1', 'LEA option', 'polygon(sides, size)', 'for question in range(5)'],
    sources: [
      { claim: 'Concept statements as milestones at grades 2, 5, 8 and 12; boundary statements.', url: 'https://k12cs.org/navigating-the-concepts/' },
      { claim: 'Grade 5 programming statements, the variables boundary and noncomputer algorithms.', url: 'https://k12cs.org/framework-statements-by-grade-band/' },
      { claim: 'The framework is not a set of standards.', url: 'https://k12cs.org/faq/' },
      { claim: 'Kindergarten entrance ages for California, Texas, Florida, Connecticut and New York (2020).', url: 'https://nces.ed.gov/programs/statereform/tab1_3-2020.asp' },
      { claim: 'Grade spans of CS Fundamentals, CS Discoveries and CS Principles.', url: 'https://code.org/en-US/curriculum' }
    ],
    rejectedClaims: [
      'CSTA level labels and their age ranges: csteachers.org returned a Cloudflare 403, not circumvented, so no CSTA level or age band is printed.',
      'A single national kindergarten cut-off date: NCES lists state-by-state rules, so the page gives five states as listed and labels the age-to-grade arithmetic as ours.',
      'Developmental or medical claims about what children of a given age can do: none made; the milestones are our teaching observations, labelled.',
      'Any claim that reaching milestones leads to grades, scores or admissions: none.',
      'Any affiliation with k12cs.org, NCES or Code.org: none, and the page says so.'
    ]
  }
};
