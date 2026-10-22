'use strict';
// CEMC free resources guide (ag- contest door; Canada cluster Plan 2, row 55).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src/cemc/ and
// src-pilots/cemc-free-resources-guide/):
//  - cemc.uwaterloo.ca/resources (resources.txt): "There is no registration or fee required to access these
//    materials."; free resources "provide both introductory lessons and enrichment opportunities to students from
//    Grades 3 to 12"; the list with grade bands (POTW 3 to 12; past contests 5 to 12; Problem Set Generator 7 to 12;
//    Courseware 4 to 12; Problem of the Month 11 to 12; CS and Society 9 to 12; CSMC and Euclid preparation material
//    11 to 12; Problems with Purpose 4 to 12).
//  - cemc.uwaterloo.ca/resources/potw (potw.txt): "e-mailed to educators for use with their students from Grades 3 to
//    12"; "New problems are sent every Thursday, and their solutions are sent one week later."; five levels (Problem A
//    Grade 3/4 to Problem E Grade 11/12); five themes incl. "Computational Thinking (C)" covering "Logic, Coding";
//    archive booklets for the last two years. The stale "wrapped up for the 2024-2025 school year" banner is NOT used.
//  - cemc.uwaterloo.ca/resources/potm (potm.txt): "intended to challenge enthusiastic high school mathematics
//    students"; "a solid understanding of Grade 11 math"; "a new problem will be posted on the first Tuesday of every
//    month. A hint will follow roughly 10 days later, and a solution another 10 days after that."
//  - cemc.uwaterloo.ca/resources/problem-set-generator (problem-set-generator.txt): Topic Generator "Randomly chooses
//    up to 30 problems according to contest, level of difficulty (Part A/B/C), and topic."; Contest Generator
//    "Randomly chooses 25 problems (one each at #1, #2, #3, and so on)"; past Gauss, Pascal, Cayley and Fermat only.
//  - cemc.uwaterloo.ca/resources/courseware (courseware.txt): "Covering topics from Grades 4 to12 mathematics and
//    computer science" (the missing space is CEMC's); "No registration is required to access these resources."; the
//    eleven courses listed (six math, five computer science) with grade tags; "there is no certificate or other form
//    of credential awarded"; "There is no feature that allows you to track your own personal progress"; "We do not
//    provide additional instruction beyond the lessons and activities included."
//  - cemc.uwaterloo.ca/resources/courseware/cs-circles (cs-circles-courseware.txt): "a text-based introduction to
//    programming in Python, intended for students with little to no programming experience"; topic list ending
//    "Recursion" and "Efficiency"; "All lessons are text-based, so there are no videos to watch."
//  - cscircles.cemc.uwaterloo.ca (cscircles.txt): site title "Computer Science Circles", "[Python Programming
//    Tutorials]". The original author and contact details on the page are not reproduced.
//  - cemc.uwaterloo.ca/resources/past-contests (past-contests.txt): "Below you will find resources from the last 10
//    years."; the Problem Set Generator line for Gauss and PCF.
// Our own material, labelled on the page: the "which resource for which job" column; the weekly routines by grade
// band; the count of eleven courseware courses (six math, five computer science); the bridge exercise Mirror Plates
// with a Python solution run on its sample (output 3) under CPython 3.13 on 22 October 2026, parsed as Python 3.8.
// Lesson family: building a self-study routine from free material.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PLATES = "# Our bridge exercise: Mirror Plates (not a CEMC problem)\n# Needs only input, a loop and string slicing: beginner Python.\nn = int(input())\nmirror = 0\nfor _ in range(n):\n    plate = input().replace(\" \", \"\")   # spaces do not count\n    if plate == plate[::-1]:           # reads the same backwards\n        mirror += 1\nprint(mirror)";

const PIO = "Sample input:\n4\nABC CBA\nHOCKEY\n12 21\nX\n\nSample output:\n3";

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'RESOURCES', blurb: 'CEMC\'s free resources explained from CEMC\'s own pages: Problem of the Week, CS Circles, Courseware, past contests and the Problem Set Generator, and a weekly routine for each.' },
  slug: 'cemc-free-resources-guide',
  code: 'cfrg',
  accent: '#574A0D',
  accentRationale: 'CEMC free resources guide, Canada: a dark olive bronze #574A0D, allocated for this row and at least 6 RGB units from every site accent and 14 from every other Canada accent, contrast 8.29 on the paper #FBF8F2 and above 7.1 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'CEMC free resources guide',
  title: 'CEMC Free Resources: Problem of the Week, CS Circles, More',
  description: 'What each free CEMC resource is for, in CEMC\'s words: Problem of the Week, CS Circles, Courseware, past contests and the Problem Set Generator, by grade.',
  ogDescription: 'The University of Waterloo\'s CEMC gives away more math and computing material than most families know about. Here is what each resource is, who it suits, how often it updates, and how to use them together.',
  twitterDescription: 'CEMC\'s free math and computing resources, explained from CEMC\'s pages, with weekly routines by grade.',
  pageName: 'CEMC Free Resources Guide',
  webPageDescription: 'A guide for Canadian students, parents and teachers to the free mathematics and computer science resources published by CEMC at the University of Waterloo, built from CEMC\'s own pages, with routines by grade.',
  courseDescription: 'Live online math and coding classes for students in Grades 3 to 12 across Canada that build on CEMC\'s free material, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'CEMC free resources guide',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#map', label: 'All resources' },
    { href: '#potw', label: 'Problem of the Week' },
    { href: '#circles', label: 'CS Circles' },
    { href: '#courseware', label: 'Courseware' },
    { href: '#routines', label: 'Routines' }
  ],
  eyebrow: 'Canada &middot; CEMC tools and resources &middot; Grades 3 to 12',
  h1: 'CEMC\'s free resources, and what each one is for',
  lede: 'Many Canadian families know the University of Waterloo\'s Centre for Education in Mathematics and Computing for its contests. Fewer know that CEMC also publishes a whole shelf of free material: a weekly math problem at five grade levels, a monthly problem for strong senior students, online courses in math and computer science, a Python tutorial, ten years of past contests, and a tool that builds practice sets from old papers. This guide describes each one in CEMC\'s own words, says what it is good for and what it does not do, and ends with weekly routines that combine them for different grades.',
  secondaryCta: { href: '#map', label: 'See all the resources' },
  wa: 'Hello Modern Age Coders, my child in Canada uses CEMC\'s free resources. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; every resource here is CEMC\'s and free; we only point to it',
  spec: [
    ['Publisher', 'CEMC, University of Waterloo'],
    ['Cost', 'Free, no registration'],
    ['Grades', '3 to 12'],
    ['Weekly', 'Problem of the Week'],
    ['Monthly', 'Problem of the Month'],
    ['Python course', 'CS Circles'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'CEMC at the University of Waterloo offers free math and computing resources for Grades 3 to 12 with no registration: Problem of the Week, Problem of the Month, Courseware, the CS Circles Python course, past contests and a Problem Set Generator. Modern Age Coders teaches alongside them live online, in a batch or one to one, in courses such as Maths Through Coding.',

  picks: {
    eyebrow: 'Add a teacher',
    h2: 'Three courses that build on CEMC\'s free material',
    lede: 'CEMC\'s resources are self-study; CEMC says it gives no extra instruction. These courses add a live teacher for the same kind of work.',
    items: [
      { course: 'maths-through-coding', code: 'FREE / 01', title: 'Maths Through Coding', note: 'Ages 10 to 15. Problem-of-the-week style math explored in Python, with a teacher to talk it through.' },
      { course: 'python-complete-masterclass-teens', code: 'FREE / 02', title: 'Python for teens', note: 'Ages 13 to 18. Picks up where CS Circles leaves off, with projects and contest-style problems.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', code: 'FREE / 03', title: 'Waterloo Math Contests: Gauss to Euclid', note: 'Grades 7 to 12. Uses CEMC\'s past papers the way they are meant to be used: attempted first, then reviewed.' }
    ]
  },

  sections: [
    {
      id: 'map', tint: 'tint', eyebrow: 'Everything at once',
      h2: 'Every free CEMC resource, with its grades and rhythm',
      lede: 'CEMC lists its tools and resources on one page and says "There is no registration or fee required to access these materials." The table gathers them with CEMC\'s grade bands. The last column, the job each one does, is our summary.',
      body: [
        { kind: 'table', caption: 'CEMC\'s free resources (grades and descriptions from CEMC\'s pages, read 22 October 2026; the last column is ours)', head: ['Resource', 'Grades (CEMC)', 'How it arrives', 'The job it does well (ours)'], rows: [
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/potw" rel="noopener" target="_blank">Problem of the Week</a>', '3 to 12, in five levels', 'A new problem every Thursday; solution a week later', 'A steady weekly habit of thinking hard about one problem'],
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/potm" rel="noopener" target="_blank">Problem of the Month</a>', '11 to 12', 'First Tuesday of each month, hint after about 10 days, solution about 10 days later', 'Stretch for strong senior math students'],
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/courseware" rel="noopener" target="_blank">Courseware</a>', '4 to 12', 'Self-paced online courses with quizzes', 'Reviewing or getting ahead in school math and first programming'],
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/courseware/cs-circles" rel="noopener" target="_blank">CS Circles</a>', 'Tagged Grade 9', 'Self-paced, text-based Python lessons', 'A first programming language, typed and run in the browser'],
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/past-contests" rel="noopener" target="_blank">Past contests, solutions and results</a>', '5 to 12', 'An archive covering the last ten years', 'Contest practice with official solutions'],
          ['<a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources/problem-set-generator" rel="noopener" target="_blank">Problem Set Generator</a>', '7 to 12', 'Random sets from past Gauss, Pascal, Cayley and Fermat papers', 'Targeted practice on one topic or one part of a paper'],
          ['CSMC and Euclid preparation material', '11 to 12', 'Practice problems and study material', 'Getting ready for the two senior full-solution contests'],
          ['Problems with Purpose', '4 to 12', 'Problems linked to real-world uses of school math', 'Showing a student why a topic matters'],
          ['CS and Society', '9 to 12', 'Resources for educators', 'Classroom discussion of technology in society']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What "free" covers',
          left: [
            'CEMC\'s resources page says the materials are "free to use without the need for registration", and the Courseware page repeats: "No registration is required to access these resources." There is no account to make for most of them and nothing to pay.',
            'The one exception in practice is the CCC Online Grader, which needs a school number to register; it belongs with the contests rather than the resource shelf.'
          ],
          rightH3: 'What free does not include',
          right: [
            'CEMC is honest about the limits. Its Courseware page says "there is no certificate or other form of credential awarded", "There is no feature that allows you to track your own personal progress", and "We do not provide additional instruction beyond the lessons and activities included."',
            'In other words, the material is excellent, and the structure, encouragement and feedback are up to the family, the school or a teacher.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/resources" rel="noopener" target="_blank">CEMC, Tools and resources</a>, and each resource page linked in the table, read 22 October 2026. Modern Age Coders is not connected with CEMC or the University of Waterloo and charges nothing for any CEMC material.' }
      ]
    },
    {
      id: 'potw', tint: 'deep', eyebrow: 'Weekly',
      h2: 'Problem of the Week: five levels, every Thursday',
      lede: 'CEMC describes the Problem of the Week as problems "e-mailed to educators for use with their students from Grades 3 to 12". Anyone can also open the current problems on CEMC\'s site or subscribe by email. CEMC adds: "New problems are sent every Thursday, and their solutions are sent one week later."',
      body: [
        { kind: 'table', caption: 'Problem of the Week levels, from CEMC\'s Problem of the Week page (read 22 October 2026)', head: ['Level', 'Grades'], rows: [
          ['Problem A', 'Grade 3/4'],
          ['Problem B', 'Grade 5/6'],
          ['Problem C', 'Grade 7/8'],
          ['Problem D', 'Grade 9/10'],
          ['Problem E', 'Grade 11/12']
        ] },
        { kind: 'table', mt: true, caption: 'The five Problem of the Week themes and their broad topics, as CEMC lists them (read 22 October 2026)', head: ['Theme', 'Broad topics'], rows: [
          ['Algebra (A)', 'Patterning, relations, sequences, functions'],
          ['Computational Thinking (C)', 'Logic, coding'],
          ['Data Management (D)', 'Probability, statistics, counting'],
          ['Geometry and Measurement (G)', 'Spatial sense, shape and space, trigonometry'],
          ['Number Sense (N)', 'Numeration, numbers, number theory, financial literacy']
        ] },
        { kind: 'p', mt: true, html: 'Themes run across every level, and CEMC notes that "A problem may have more than one theme." The Computational Thinking theme, with logic and coding as its topics, is the one that leads most naturally towards CEMC\'s computing contests.' },
        { kind: 'two', mt: true,
          leftH3: 'How to use it at home (our advice)',
          left: [
            'Thursday evening: print or open the problem at the student\'s level. Give it twenty minutes, then put it away. Come back on the weekend with fresh eyes.',
            'The following Thursday, the solution arrives with the next problem. Compare the student\'s method with CEMC\'s, not just the answer. Then start the new one.'
          ],
          rightH3: 'Going one level up',
          right: [
            'A student who solves their own level comfortably can try the level above the same week. Because all five levels arrive together, this costs nothing and shows how the same theme deepens with age.',
            'CEMC keeps an archive page with booklets of problems and solutions from the last two years, organised by theme, which suits a student who wants to work through one theme at a time.'
          ] }
      ]
    },
    {
      id: 'potm', tint: 'tint', eyebrow: 'Monthly',
      h2: 'Problem of the Month, for strong senior students',
      lede: 'The Problem of the Month is CEMC\'s stretch problem for older students. CEMC says it "is intended to challenge enthusiastic high school mathematics students" and that "Most problems are designed with the assumption that students attempting them have a solid understanding of Grade 11 math".',
      body: [
        { kind: 'two',
          leftH3: 'The monthly rhythm',
          left: [
            'CEMC posts the first problem in September, then "a new problem will be posted on the first Tuesday of every month. A hint will follow roughly 10 days later, and a solution another 10 days after that."',
            'That three-stage release is a gift for a student learning to persevere: ten days alone with the problem, then a nudge, then the full answer.'
          ],
          rightH3: 'Who should try it',
          right: [
            'Students in Grades 11 and 12 who enjoy the Euclid or the CSMC, and younger students CEMC describes as motivated. We suggest attempting it before the hint every month, and writing the solution out in full before reading CEMC\'s.',
            'It pairs well with CEMC\'s CSMC and Euclid preparation material, which is also free and aimed at the same grades.'
          ] }
      ]
    },
    {
      id: 'circles', tint: 'deep', eyebrow: 'Python',
      h2: 'CS Circles: CEMC\'s free Python course',
      lede: 'Computer Science Circles, tagged on its own site as "[Python Programming Tutorials]", is the resource most relevant to a student heading for the Canadian Computing Competition. CEMC\'s Courseware page describes it as "a text-based introduction to programming in Python, intended for students with little to no programming experience."',
      body: [
        { kind: 'table', caption: 'What CS Circles covers, from CEMC\'s CS Circles Courseware page (read 22 October 2026), with our note on why each matters for contests', head: ['Topics CEMC lists', 'Why it matters later (ours)'], rows: [
          ['Variables, Functions, Types, Input', 'Reading a contest\'s input correctly'],
          ['If Statements; Else, And, Or, Not', 'The conditions behind every early CCC Junior problem'],
          ['Debugging', 'Finding the bug before the grader does'],
          ['Defining a Function', 'Breaking a long solution into parts'],
          ['Strings, Lists, Methods', 'The data most Junior problems are made of'],
          ['Recursion', 'A tool for the last Junior question and many Senior ones'],
          ['Efficiency', 'The idea that separates Junior and Senior marks']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How the lessons work',
          left: [
            'CEMC says students "read simple explanations, run example code, and have an opportunity to practice what they have learned through coding exercises", some fixing existing code and some writing programs from scratch. Code runs in the browser, so nothing needs installing.',
            'CEMC also notes: "All lessons are text-based, so there are no videos to watch." That suits readers well and video-learners less well.'
          ],
          rightH3: 'Where CS Circles ends',
          right: [
            'The course stops at recursion and efficiency, which is roughly where contest preparation begins. A student who finishes it can start on past CCC Junior problems, using the method in our practice guide.',
            'What CS Circles cannot do is notice that a student has misunderstood something. That is the gap a teacher fills, and it is the one we are asked about most.'
          ] },
        { kind: 'p', mt: true, html: '<b>Our bridge exercise: Mirror Plates.</b> To show the step from CS Circles to a first contest-style problem, here is a short exercise we wrote; it is ours, not CEMC\'s. Read N, then N licence plates. Ignoring spaces, count how many read the same backwards as forwards. <b>Input:</b> N, then N lines of capital letters, digits and spaces. <b>Output:</b> one integer.' },
        { kind: 'code', label: 'Mirror Plates &middot; sample', lang: 'text', code: PIO },
        { kind: 'code', label: 'Mirror Plates &middot; our solution (Python)', lang: 'python', code: PLATES, note: 'Three of the four sample plates qualify: ABC CBA becomes ABCCBA, 12 21 becomes 1221, and a single letter is always its own mirror. The trap is the space: a plate such as "AB CBA" only reads the same backwards once the space is removed, as ABCBA. Every piece here (input, a loop, string methods, slicing) sits inside a first Python course.' }
      ]
    },
    {
      id: 'courseware', tint: 'tint', eyebrow: 'Courseware',
      h2: 'CEMC Courseware: eleven free courses, Grades 4 to 12',
      lede: 'CEMC describes its Courseware as lessons, interactive activities, enrichment challenges and practice with immediate feedback, "Covering topics from Grades 4 to12 mathematics and computer science". We counted eleven courses on its list, six in math and five in computer science.',
      body: [
        { kind: 'table', caption: 'The CEMC Courseware list with CEMC\'s grade tags (read 22 October 2026)', head: ['Course', 'Subject', 'Grade tag'], rows: [
          ['Grade 4/5/6 Mathematics Courseware', 'Math', '4 to 6'],
          ['Grade 7/8 Mathematics Courseware', 'Math', '7 to 8'],
          ['Grade 9/10/11 Mathematics Courseware', 'Math', '9 to 11'],
          ['Grade 12 Advanced Functions and Pre-Calculus Courseware', 'Math', '12'],
          ['Grade 12 Calculus and Vectors Courseware', 'Math', '12'],
          ['Problem Solving and Mathematical Discovery Courseware', 'Math', '10 to 11'],
          ['CS Circles Courseware', 'Computer science', '9'],
          ['Python from Scratch Courseware', 'Computer science', '10'],
          ['Language Independent Lessons Courseware', 'Computer science', '10'],
          ['Web Basics Courseware', 'Computer science', '10'],
          ['Web Programming Courseware', 'Computer science', '10']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Ways CEMC suggests using it',
          left: [
            'For students, CEMC names self-paced learning and refresher material. For parents, it suggests keeping "current with the material their children are learning at school" and supporting learning at home with lessons and extra practice.',
            'The two Grade 12 courses carry the titles of Ontario\'s university-preparation math courses, Advanced Functions and Calculus and Vectors, which makes them a natural companion for students taking those courses in any province.'
          ],
          rightH3: 'What to keep in mind',
          right: [
            'It is a resource, not a course you enrol in. CEMC says plainly that it should not be viewed as "a Massive Open Online Course", that no certificate is given, and that progress is not tracked.',
            'So a student who works through it needs their own record of what is done. A notebook with dates and quiz scores is enough.'
          ] }
      ]
    },
    {
      id: 'archive', tint: 'deep', eyebrow: 'Contests',
      h2: 'Past contests and the Problem Set Generator',
      lede: 'Two resources turn CEMC\'s contest history into practice. The archive holds whole papers; the generator mixes individual questions from four of the math contests.',
      body: [
        { kind: 'table', caption: 'Contest practice tools, from CEMC\'s past contests and Problem Set Generator pages (read 22 October 2026)', head: ['Tool', 'What CEMC says', 'Use it when (ours)'], rows: [
          ['Past contests archive', '"Below you will find resources from the last 10 years." Papers, solutions and results, filtered by grade, year and contest', 'Practising a whole paper under time, then checking it'],
          ['Problem Set Generator: Topic Generator', '"Randomly chooses up to 30 problems according to contest, level of difficulty (Part A/B/C), and topic."', 'A student is weak on one topic, such as geometry, in the Gauss or PCF'],
          ['Problem Set Generator: Contest Generator', '"Randomly chooses 25 problems (one each at #1, #2, #3, and so on) according to the contest selected."', 'A fresh mock paper made of real past questions'],
          ['Which contests the generator uses', 'Past Gauss, Pascal, Cayley and Fermat Contests', 'Not the full-solution contests or the CCC']
        ] },
        { kind: 'p', mt: true, html: 'Each problem in a generated set can be swapped for another of the same contest, level and topic, and the set can be printed in a printer-friendly version, according to CEMC\'s page. For computing contests, the archive and the CCC Online Grader do the same job; our <a class="ag-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> covers how to use them for the February 2027 contest.' }
      ]
    },
    {
      id: 'routines', tint: 'tint', eyebrow: 'Putting it together',
      h2: 'Weekly routines built from CEMC\'s free resources',
      lede: 'A shelf of good material helps only if it is used regularly. These routines are ours: about an hour a week of CEMC material for each grade band, in the order we would use it. Adjust freely.',
      body: [
        { kind: 'table', caption: 'About an hour a week of free CEMC material, by grade band (our routines)', head: ['Grades', 'Weekly', 'Every few weeks', 'Before a contest'], rows: [
          ['3 and 4', 'Problem of the Week, Problem A', 'One Courseware lesson from Grade 4/5/6 math', 'None needed'],
          ['5 and 6', 'Problem of the Week, Problem B', 'Courseware lessons on the current school topic', 'One past Beaver Computing Challenge paper'],
          ['7 and 8', 'Problem of the Week, Problem C', 'A Topic Generator set of ten Gauss questions', 'Two past Gauss papers, timed'],
          ['9 and 10', 'Problem of the Week, Problem D, plus one CS Circles lesson', 'A Contest Generator set for Pascal or Cayley', 'Past Pascal or Cayley papers, and past CCC Junior problems'],
          ['11 and 12', 'Problem of the Week, Problem E', 'Problem of the Month, before the hint', 'CSMC and Euclid preparation material, past Euclid papers']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why one problem a week beats ten',
          left: [
            'The Problem of the Week works because it is a single problem with a week to think. Students who rush through a stack of problems learn the answers; students who live with one learn the method.',
            'Keep a folder of finished problems with the student\'s own working, not just CEMC\'s solutions. Looking back through it in June is encouraging.'
          ],
          rightH3: 'Where a teacher adds most',
          right: [
            'In explaining why a method works, in spotting the misunderstanding behind a wrong answer, and in choosing the next problem at the right level. These are the three things CEMC\'s self-study resources cannot do, by design.',
            'Our classes use CEMC\'s past papers in exactly this spirit, alongside problems we write ourselves, and we never charge for access to anything CEMC gives away.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where a student starts',
    h2: 'Four stages of using free resources well',
    lede: 'How we see students\' independent study develop. The stages are ours.',
    table: { caption: 'From browsing to a routine (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Browsing', 'Opens resources now and then, finishes few'],
      ['2. Weekly habit', 'Attempts the Problem of the Week every Thursday'],
      ['3. Checking', 'Compares methods with CEMC\'s solutions, not just answers'],
      ['4. Self-directed', 'Chooses the next resource for a reason and keeps a record']
    ] },
    left: { h3: 'For parents', ps: [
      'Put the Problem of the Week on the fridge on Thursday. The routine matters more than the level.',
      'Ask your child to explain one CEMC solution to you each week. Teaching it back is how it sticks.'
    ] },
    right: { h3: 'For students', ps: [
      'Give a problem twenty honest minutes before any hint or solution.',
      'Try the level above sometimes. It is free, and it shows you where you are heading.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses that pair well with CEMC\'s free shelf',
    lede: 'Every course runs live online with the same teacher each week, in a batch or one to one, for families anywhere in Canada.',
    bands: [
      { num: 'I', h3: 'Grades 3 to 6', sub: 'Alongside Problems A and B', courses: [
        { code: 'FREE / YOUNG / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5, at the student\'s pace.' },
        { code: 'FREE / YOUNG / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking for kids', blurb: 'Logic puzzles like the Computational Thinking theme.' },
        { code: 'FREE / YOUNG / 03', slug: 'scratch-programming-complete-course', title: 'Scratch coding for kids', blurb: 'First programs, before Python.' }
      ] },
      { num: 'II', h3: 'Grades 6 to 9', sub: 'Alongside Problems C and D', courses: [
        { code: 'FREE / MID / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'The ground under the Gauss.' },
        { code: 'FREE / MID / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A younger route into what CS Circles teaches.' },
        { code: 'FREE / MID / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'For students who finish the weekly problem early.' }
      ] },
      { num: 'III', h3: 'Grades 9 to 12', sub: 'Alongside Problem E and the archive', courses: [
        { code: 'FREE / HIGH / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'From algebra to calculus, Grades 9 to 12.' },
        { code: 'FREE / HIGH / 02', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior Preparation', blurb: 'The step after CS Circles.' },
        { code: 'FREE / HIGH / 03', slug: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', title: 'Grade 12 university math, Ontario', blurb: 'Advanced Functions and Calculus and Vectors, taught live.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes that sit beside free self-study',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school sessions, shown in your provincial time.' },
      { time: 'Weekends', l: 'Weekend mornings, handy after a Thursday problem.' },
      { time: '1-on-1', l: 'Built around the resources the student already uses.' }
    ],
    cells: [
      { h3: 'CEMC stays free', p: 'We never charge for CEMC\'s material.' },
      { h3: 'Method, not answers', p: 'Every solution explained, step by step.' },
      { h3: 'Right level', p: 'A teacher picks the next problem with the student.' },
      { h3: 'Math and Python', p: 'Both halves of CEMC\'s shelf, taught live.' },
      { h3: 'Any province', p: 'Families join from every part of Canada.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty in a batch, or a single student.' }
    ]
  },

  projectsH2: 'What our students make',
  projectsLede: 'Alongside problem solving, our learners build projects of their own. A few are shown here; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Parents\' words from Google reviews, unaltered.',

  fees: {
    h2: 'Fees',
    lede: 'Everything CEMC publishes is free, and we keep it that way. Our monthly fee is for live teaching only, without a long contract, so a family can use our classes for a term and return to self-study.',
    free: ['A free first class', 'A look at the student\'s current CEMC work', 'No card needed'],
    group: ['Fifteen to twenty students in a batch', 'The same teacher weekly', 'A batch time of your choice', 'Monthly fee'],
    one: ['A teacher for one student', 'Fitted around the student\'s routine', 'Problems chosen to the level']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'CEMC free resources: common questions',
    items: [
      { q: 'Are CEMC\'s resources really free?', a: 'Yes. CEMC says there is no registration or fee required to access its tools and resources, and its Courseware page adds that no registration is needed. That covers the Problem of the Week, the Problem of the Month, Courseware, CS Circles, past contests and the Problem Set Generator.' },
      { q: 'What is the CEMC Problem of the Week?', a: 'A free weekly math problem at five levels, from Grade 3/4 to Grade 11/12, sent to educators and posted on CEMC\'s site. New problems go out every Thursday, and the solutions follow one week later.' },
      { q: 'Can students get the Problem of the Week without a teacher?', a: 'Yes. CEMC posts the current problems on its Problem of the Week page and offers an email subscription, so families can follow it at home.' },
      { q: 'What is CS Circles?', a: 'Computer Science Circles is CEMC\'s free, text-based introduction to programming in Python, for students with little or no experience. It runs in the browser and covers topics from variables and if statements to recursion and efficiency.' },
      { q: 'Is CEMC Courseware a course with a certificate?', a: 'No. CEMC says no certificate or other credential is awarded, progress is not tracked, and it gives no extra instruction beyond the lessons. It is free material to use at your own pace.' },
      { q: 'Where are CEMC past contests?', a: 'On CEMC\'s past contests, solutions and results page, which covers the last ten years and can be filtered by grade, year and contest. The Problem Set Generator also builds random sets from past Gauss, Pascal, Cayley and Fermat questions.' },
      { q: 'What is the Problem of the Month?', a: 'A monthly challenge for enthusiastic high school students, mostly assuming a solid understanding of Grade 11 math. A new problem appears on the first Tuesday of each month, with a hint about ten days later and a solution about ten days after that.' },
      { q: 'Which CEMC resource should a beginner programmer start with?', a: 'CS Circles, which CEMC writes for students with little to no programming experience. CEMC\'s Courseware list also includes Python from Scratch and Language Independent Lessons for students who want another approach.' },
      { q: 'Do you charge for CEMC material in your classes?', a: 'No. CEMC\'s resources are free and we never charge for access to them. Our fee covers live teaching, and we write our own practice problems for anything we publish.' },
      { q: 'When are your classes for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Class times are set in Eastern time and converted for each province.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Where to go next from CEMC\'s free shelf.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'The full set of our Canada pages.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'CEMC Waterloo contests', p: 'Preparing for the contests behind the archive.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'The contest a CS Circles graduate can try next.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Live help with the math Courseware covers.' },
      { href: '/how-to-actually-learn-to-code', label: 'How to actually learn to code', p: 'Getting more from any self-study course.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'The habit behind every good solution.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Show us what your child is doing with CEMC\'s resources, a Problem of the Week, a CS Circles lesson, a past paper. The teacher works through the next step with them live, and suggests a routine that fits.',
    readFirst: 'Want to read more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a live lesson, and the <a class="ag-inline-link" href="/courses">course catalogue</a> lists every course.',
    note: 'Teaching is live online, by teachers based in India; there is no office to visit in Canada. A WhatsApp message is the fastest way to ask us anything.',
    formNote: 'There is no charge for the first class, and no card is asked for.'
  },

  footer: {
    cols: [
      { h4: 'Contests and practice', links: [
        { href: '/cemc-waterloo-contests-preparation', label: 'CEMC math contests' },
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
        { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' },
        { href: '/maths-olympiad-classes-online', label: 'Math olympiad classes' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'One problem, one week'
  },

  personalityCss: `
.ag-root.ag-cfrg .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-cfrg .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-cfrg .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-cfrg .ag-table caption { text-align: left; font-weight: 500; font-style: italic; }
.ag-root.ag-cfrg .ag-band-head h3 { letter-spacing: -0.003em; }
.ag-root.ag-cfrg .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'CEMC (University of Waterloo) Tools and resources page, Problem of the Week, Problem of the Month, Problem Set Generator, Courseware, CS Circles Courseware, CS Circles site and past contests pages, read raw on 22 October 2026: no registration or fee; grade bands for each resource; POTW for Grades 3 to 12, new every Thursday, solutions a week later, five levels and five themes; POTM for enthusiastic high school students with Grade 11 math, first Tuesday monthly, hint about 10 days later, solution 10 days after; Topic Generator up to 30 problems, Contest Generator 25 problems, from Gauss and PCF; Courseware Grades 4 to 12, eleven courses, no certificate, no progress tracking, no extra instruction; CS Circles text-based Python for beginners, topics to recursion and efficiency; past contests from the last 10 years.',
    localProject: 'A one-table map of every free CEMC resource with our "job it does" column; weekly routines for five grade bands; our count of eleven Courseware courses (six math, five computer science); an original bridge exercise, Mirror Plates, with a Python solution run on its sample. Lesson family: building a self-study routine from free material.',
    requiredMentions: ['New problems are sent every Thursday, and their solutions are sent one week later', 'a new problem will be posted on the first Tuesday of every month', 'Covering topics from Grades 4 to12 mathematics and computer science', 'Randomly chooses 25 problems (one each at #1, #2, #3, and so on)', 'There is no feature that allows you to track your own personal progress', 'All lessons are text-based, so there are no videos to watch', 'Mirror Plates', 'eleven courses on its list, six in math and five in computer science', 'Grade 12 Calculus and Vectors Courseware'],
    sources: [
      { claim: 'No registration or fee; the resource list and grade bands.', url: 'https://cemc.uwaterloo.ca/resources' },
      { claim: 'Problem of the Week: Grades 3 to 12, every Thursday, solutions a week later, five levels, five themes, two-year archive.', url: 'https://cemc.uwaterloo.ca/resources/potw' },
      { claim: 'Problem of the Month: audience, Grade 11 assumption, monthly schedule with hint and solution.', url: 'https://cemc.uwaterloo.ca/resources/potm' },
      { claim: 'Problem Set Generator: Topic Generator and Contest Generator.', url: 'https://cemc.uwaterloo.ca/resources/problem-set-generator' },
      { claim: 'Courseware: Grades 4 to 12, eleven courses, no registration, no certificate, no tracking, no extra instruction.', url: 'https://cemc.uwaterloo.ca/resources/courseware' },
      { claim: 'CS Circles: text-based Python introduction for beginners, topic list, no videos.', url: 'https://cemc.uwaterloo.ca/resources/courseware/cs-circles' },
      { claim: 'Past contests from the last 10 years.', url: 'https://cemc.uwaterloo.ca/resources/past-contests' }
    ],
    rejectedClaims: [
      'The Problem of the Week banner saying it has wrapped up for 2024-2025: stale, contradicted by the current problem on the same page, so not used.',
      'CS Circles author and contact details: not reproduced.',
      'Any CEMC problem text: never reproduced; the page links to CEMC and uses an original exercise.',
      'That CEMC resources lead to marks or credits: refused; CEMC says Courseware carries no credential.',
      'Any affiliation with CEMC or the University of Waterloo: none, and the page says so.'
    ]
  }
};
