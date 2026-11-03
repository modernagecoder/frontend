'use strict';
// Jugendwettbewerb Informatik preparation (ag- competition spoke, Germany cluster row DE047), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. We are not connected with BWINF. Round 3 of 2026 (the two junior tasks of the 45th
// Bundeswettbewerb) is open until 23 November 2026, so the page names no live task.
// Spine: trace the program before you run it. Two original programs (a spiral robot and a coin path), each predicted by
// hand in a trace table and then run, plus four predict-the-output exercises of our own.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/jugendwettbewerb-informatik-preparation/
// and facts-school/src/jwinf, jwinf2026; quoted strings grepped from the raw text, fetched 2 and 3 November 2026):
//  - bwinf.de/jugendwettbewerb/2027/: "Die 1. Runde läuft vom 22. Februar bis 7. März 2027"; "Der Probewettbewerb ist ab dem
//    1. Februar freigeschaltet"; "Die 2. Runde läuft vom 12. bis 25. April 2027. Der Probewettbewerb ist vom 22. März bis
//    25. April freigeschaltet."; "Die 3. Runde läuft vom 1. September bis 15. November 2027, gemeinsam mit der 1. Runde des
//    46. Bundeswettbewerbs Informatik."; "Neben Blockly ist die Bearbeitung in 2027 also auch in Python möglich."; "Eine
//    Qualifikation von Level zu Level gibt es nicht mehr."; "Wer in die 3. Runde will, braucht 26 Punkte aus zwei Leveln.
//    Gezählt wird entweder das beste Level der 1. Runde und das beste Level der 2. Runde oder zwei Level aus der 2. Runde
//    allein."
//  - bwinf.de/jugendwettbewerb/ and /2026/: Bronze 3 Aufgaben / 30 Minuten (Jg. 5/6), Silber 4 / 40 (Jg. 7/8/9), Gold 6 /
//    60 (ab Jg. 10) (FACTS 142); "In der 1. und 2. Runde kann ein Team aus maximal zwei Personen bestehen. In der 3. Runde
//    aus maximal vier Personen."; "73.272 Schülerinnen und Schüler haben an der 1. Runde ... teilgenommen" (2026);
//    "Einsendeschluss ist der 23. November 2026." (FACTS 143); "bereits zum 10. Mal".
//  - bwinf.de/jugendwettbewerb/faq/: "für Schülerinnen und Schüler mit wenig oder gar keiner Programmiererfahrung";
//    "Für die leichte Version gibt es zwei Punkte, für die mittlere drei Punkte und für die schwere vier Punkte. Die
//    Schülerinnen und Schüler erhalten nur die Punkte der gelösten Aufgabe mit höchstem Schwierigkeitsgrad."; concept lists
//    per level (Bronze, Silber, Gold; 2. Runde Silber, Gold); "Mit BWINF-Account (eigenständig)"; "Mit Gruppencode/Logincode
//    (über die Schule)"; address in the BWINF account for pupils who did not take part through a school.
//  - bwinf.de/jugendwettbewerb/teilnehmen/: "ab der Jahrgangsstufe 5 empfohlen, ist aber auch schon ab der 3. Klasse
//    möglich"; "in einer visuellen Umgebung programmiert"; training up to "Variablen und Logik - Einführung" for round 1.
//  - jwinf2026 newsletter 21.08.2026: Arbeitsheft Algorithmen "in zehn Kapiteln"; "Anzeige der aktuellen Variablenwerte
//    während der Programmausführung".
// Our own calculations: maximum points per level = tasks x 4 (Bronze 12, Silver 16, Gold 24), and the two-level maxima
// against the 26-point rule; programs jwinf1.py and jwinf2.py (scratchpad de/w/G8, python3 -I), output pasted exactly:
//   after side 1 robot at (1, 0) facing (0, 1) ... after side 4 robot at (-2, -2) facing (1, 0); coins: 4 longest run: 2
// Lesson family: trace the program by hand, then run it (prediction before execution).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const SPIRAL = [
  'x, y = 0, 0',
  'dx, dy = 1, 0          # start facing east',
  '',
  'def turn_left(dx, dy):',
  '    return -dy, dx',
  '',
  'for side in range(1, 5):',
  '    for _ in range(side):',
  '        x, y = x + dx, y + dy',
  '    dx, dy = turn_left(dx, dy)',
  '    print("after side", side, "robot at", (x, y), "facing", (dx, dy))'
].join('\n');

const COINS = [
  'path = "..*.**..*"',
  'coins = 0',
  'streak = 0',
  'longest = 0',
  'for cell in path:',
  '    if cell == "*":',
  '        coins += 1',
  '        streak += 1',
  '        longest = max(longest, streak)',
  '    else:',
  '        streak = 0',
  'print("coins:", coins, "longest run:", longest)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'competition', label: 'Jugendwettbewerb Informatik' },
  slug: 'jugendwettbewerb-informatik-preparation',
  code: 'jip',
  accent: '#345F8D',
  accentRationale: 'Jugendwettbewerb Informatik: a clear cornflower blue #345F8D, lighter and younger than the Bundeswettbewerb steel blue it leads to; contrast 5.38 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Jugendwettbewerb Informatik preparation',
  title: 'Jugendwettbewerb Informatik 2027 Preparation in English',
  description: 'Jugendwettbewerb Informatik 2027: round dates, Bronze, Silver and Gold levels, the new 26-point rule, Python from 2027, and our own tracing practice, in English.',
  ogDescription: 'Everything a family in Germany needs for the Jugendwettbewerb Informatik 2027 from BWINF\'s own pages: dates, levels, what each level tests, how points add up to round 3, and practice programs of our own that pupils trace by hand before running.',
  twitterDescription: 'Jugendwettbewerb Informatik 2027 explained, with original tracing practice in Python, taught live in English.',
  pageName: 'Jugendwettbewerb Informatik Preparation',
  webPageDescription: 'A guide for pupils in Germany from Klasse 5 and their parents to the Jugendwettbewerb Informatik run by BWINF: the 2027 rounds and practice contests, the three levels and the programming ideas in each, the 26-point rule for round 3, how to sign up, and original practice in reading and tracing programs.',
  courseDescription: 'Live online preparation in English for the Jugendwettbewerb Informatik: loops, conditions, variables, functions and lists, practised by tracing programs by hand and then running them in Python, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Jugendwettbewerb Informatik',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#dates', label: '2027 dates' },
    { href: '#levels', label: 'Levels' },
    { href: '#points', label: 'Points' },
    { href: '#trace', label: 'Practice' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Jugendwettbewerb Informatik &middot; From Klasse 5',
  h1: 'Jugendwettbewerb Informatik preparation',
  lede: 'The Jugendwettbewerb Informatik is where many pupils in Germany write their first real programs under a clock. Its online rounds use a block editor, and from 2027 Python as well, with three levels that pupils choose for themselves. This page sets out the 2027 dates, what each level tests, how the new 26-point rule for round 3 works, and the one habit that helps most in every level: tracing a program by hand before pressing run.',
  secondaryCta: { href: '#trace', label: 'Try the tracing practice' },
  wa: 'Hello Modern Age Coders, my child is at school in Germany and wants to prepare for the Jugendwettbewerb Informatik in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; programs predicted on paper, then run',
  spec: [
    ['School years', 'Klasse 5 and up, younger by choice'],
    ['Editors', 'Blocks first, then Python'],
    ['Focus', 'Loops, conditions, variables, functions'],
    ['German times', 'Afternoons and weekend mornings'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders prepares pupils in Germany for the Jugendwettbewerb Informatik in live online classes taught in English, from about Klasse 5, within our German Informatics Competitions course. Children practise the loops, conditions, variables, functions and lists of the Bronze, Silver and Gold levels, and trace every program by hand before running it. A regular mentor follows each child\'s pace and accent, with groups of fifteen to twenty or one child alone.',

  picks: {
    eyebrow: 'Where Jugendwettbewerb pupils start',
    h2: 'Courses that lead into the Jugendwettbewerb',
    lede: 'One built around the German contests, one for children who want typed Python early, and one for those who want a gentle start with blocks.',
    items: [
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'JIP / 01', title: 'German Informatics Competitions', note: 'Ages 9 to 19. Puzzle thinking, then the programming ideas of all three levels, then the junior tasks of round 3, with a monthly mock round.' },
      { course: 'python-ai-kids-masterclass', code: 'JIP / 02', title: 'Python and AI for Kids', note: 'Ages 9 to 12. Typed Python from the first lesson, useful now that the 2027 online rounds also accept Python.' },
      { course: 'scratch-programming-complete-course', code: 'JIP / 03', title: 'Scratch Coding for Kids', note: 'Ages 6 to 12. Blocks, loops and conditions in a friendly editor, close in feel to the block editor the contest uses.' }
    ]
  },

  sections: [
    {
      id: 'what',
      eyebrow: 'The contest',
      h2: 'What is the Jugendwettbewerb Informatik?',
      lede: 'A national programming contest from BWINF for pupils with little or no programming experience, run in three rounds, with training material free all year on jwinf.de.',
      body: [
        { kind: 'two',
          leftH3: 'How it works',
          left: [
            'Rounds 1 and 2 are online on jwinf.de. Unlike the Informatik-Biber, BWINF says, the pupil programs here, in a visual environment: blocks that move a figure, repeat, decide and remember. From 2027 the same tasks can also be solved in Python.',
            'Round 3 is different. Pupils who qualify solve two harder tasks at home with their own programming tools, alone or in a team of up to four. These are the two junior tasks of the Bundeswettbewerb Informatik, and the work can be handed in to both contests.'
          ],
          rightH3: 'Who takes part',
          right: [
            'BWINF recommends the contest from Klasse 5 and allows it from Klasse 3. In rounds 1 and 2 pupils may work alone or in pairs.',
            'The 2026 edition was the 10th. BWINF reports that 73,272 pupils took part in round 1 of 2026. In round 2, 25,777 pupils took the Silver level and 4,725 the Gold level.'
          ] },
        { kind: 'p', mt: true, html: 'The 2026 round 3 is running now, together with round 1 of the 45th Bundeswettbewerb, and closes on 23 November 2026. BWINF\'s rules keep solution ideas private until that deadline, so those two tasks stay out of our classes until it has passed.' }
      ]
    },
    {
      id: 'dates',
      tint: 'tint',
      eyebrow: '2027',
      h2: 'When is the Jugendwettbewerb Informatik 2027?',
      lede: 'BWINF has already published the 2027 calendar. Each online round has a practice contest that opens first.',
      body: [
        { kind: 'table', numCols: [], caption: 'Jugendwettbewerb Informatik 2027: rounds and practice contests', head: ['Round', 'Practice contest', 'Contest', 'Format'], rows: [
          ['Round 1', 'From 1 February 2027', '22 February to 7 March 2027', 'Online; Bronze, Silver and Gold, all open'],
          ['Round 2', '22 March to 25 April 2027', '12 to 25 April 2027', 'Online; Silver and Gold, both open'],
          ['Round 3', 'None', '1 September to 15 November 2027', 'Two junior tasks of the 46th Bundeswettbewerb, at home']
        ] },
        { kind: 'source', html: 'Source: BWINF, Jugendwettbewerb Informatik 2027 page (bwinf.de/jugendwettbewerb/2027/), read on 3 November 2026. From 2027 rounds 1 and 2 can be solved in Blockly or Python.' },
        { kind: 'two', mt: true,
          leftH3: 'What changes in 2027',
          left: [
            'Two things. Python joins Blockly as a language for the online rounds. And the step-by-step unlocking of levels is gone: in 2027 every level of rounds 1 and 2 is open to everyone, including pupils who missed round 1.',
            'BWINF says the recommended school years, the number of tasks, the times and the maximum points stay as they were.'
          ],
          rightH3: 'A sensible plan from now (ours)',
          right: [
            'November to January: the core ideas of the level your child is aiming at, on jwinf.de\'s training area and in class. February: the practice contest, then round 1. March and April: functions, and lists for Gold, before round 2.',
            'This plan is our suggestion. The dates in the table are BWINF\'s.'
          ] }
      ]
    },
    {
      id: 'levels',
      eyebrow: 'Bronze, Silver, Gold',
      h2: 'Which level should my child choose, and what does each one test?',
      lede: 'The levels build on each other: Silver includes everything in Bronze, and Gold everything in Silver. BWINF links each to a school year as a guide, not a rule.',
      body: [
        { kind: 'table', numCols: [], caption: 'The three levels and the programming ideas BWINF lists for each', head: ['Level', 'Suggested for', 'Tasks and time', 'Ideas added at this level'], rows: [
          ['Bronze', 'Klasse 5 and 6', '3 tasks, 30 minutes', 'Simple instructions, loops with a fixed count or a condition, nested loops, simple conditions, numbers and comparisons, reading text; set variables in the hardest versions'],
          ['Silver', 'Klasse 7 to 9', '4 tasks, 40 minutes', 'Counting loops, editing text, decisions with several branches'],
          ['Gold', 'From Klasse 10', '6 tasks, 60 minutes', 'Conditions joined with AND and OR, and negated with NOT'],
          ['Round 2, Silver', 'As above', '4 tasks, 40 minutes', 'Own variables, functions, functions with parameters'],
          ['Round 2, Gold', 'As above', '6 tasks, 60 minutes', 'Lists: create them, add items, read single items']
        ] },
        { kind: 'source', html: 'Source: BWINF, Jugendwettbewerb FAQ and main page (bwinf.de/jugendwettbewerb/faq/), read on 3 November 2026. The English wording is our translation.' },
        { kind: 'p', mt: true, html: 'Because a pupil may now try more than one level, the choice is less risky than it looks. A child in Klasse 6 who is comfortable with nested loops can attempt Bronze and then Silver in the same round. Our advice is to start a level below where you think you are, finish it calmly, and climb. Every task also comes in three versions, so even a hard level has an easy first step.' }
      ]
    },
    {
      id: 'points',
      tint: 'tint',
      eyebrow: 'Points and round 3',
      h2: 'How many points does a pupil need for round 3 in 2027?',
      lede: 'Twenty-six, from two levels added together. Here is how the counting works, and what it means in practice.',
      body: [
        { kind: 'two',
          leftH3: 'The rule, from BWINF',
          left: [
            'Each task has an easy, a medium and a hard version, worth 2, 3 and 4 points, and only the hardest version a pupil solves counts. For 2027, round 3 needs at least 26 points from two levels: either the highest-scoring level of round 1 plus the highest-scoring level of round 2, or the Silver and Gold levels of round 2 together.'
          ],
          rightH3: 'What that adds up to (our arithmetic)',
          right: [
            'With 4 points as the top score per task, Bronze can give at most 12 points, Silver 16 and Gold 24. No single level reaches 26, which is why two levels count. A pupil who does Bronze in round 1 and Silver in round 2 can reach 28 at most, so needs almost every hard version. Two Gold levels allow up to 48.'
          ] },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Two-level combinations and their maximum, against the 26-point rule (our calculation)', head: ['Two levels counted', 'Maximum points', 'Points to spare above 26'], rows: [
          ['Bronze (round 1) and Silver (round 2)', '28', '2'],
          ['Silver (round 1) and Silver (round 2)', '32', '6'],
          ['Silver and Gold, both in round 2', '40', '14'],
          ['Gold (round 1) and Gold (round 2)', '48', '22']
        ] },
        { kind: 'source', html: 'Rule and points per version: BWINF, Jugendwettbewerb FAQ and 2027 page, read on 3 November 2026. Maximum points are our own arithmetic, tasks multiplied by 4, on BWINF\'s statement that maximum scores are unchanged for 2027.' },
        { kind: 'p', mt: true, html: 'The table explains our advice for an ambitious pupil: aim to be ready for Silver in round 1 and Gold in round 2. That route leaves room for mistakes; the Bronze route leaves almost none. For a younger child the point is different. Bronze is a real achievement, and round 3 can wait a year.' }
      ]
    },
    {
      id: 'trace',
      eyebrow: 'Practice, ours',
      h2: 'How should a pupil practise? Trace the program before running it',
      lede: 'The two programs and four exercises below are our own, made for this page; none comes from a BWINF contest. Every one is solved the same way: write down what each variable holds after each step, predict the result, and only then run it. BWINF\'s own platform now shows variable values while a program runs; a pupil who can do that in their head is ready for Silver and beyond.',
      body: [
        { kind: 'two',
          leftH3: 'Program 1: the spiral robot (ours)',
          left: [
            'A robot starts at (0, 0) facing east. On side 1 it moves 1 step, on side 2 it moves 2, and so on to side 4, turning left after each side. Before running the code, fill in the robot\'s position after every side.',
            '<strong>Worked solution.</strong> Side 1: one step east to (1, 0), turn to face north. Side 2: two steps north to (1, 2), face west. Side 3: three steps west to (-2, 2), face south. Side 4: four steps south to (-2, -2), face east again.'
          ],
          rightH3: 'Why the turn works',
          right: [
            'A direction is stored as a pair: east is (1, 0), north is (0, 1). Turning left swaps the two numbers and changes the sign of the new first one, so (1, 0) becomes (0, 1), and (0, 1) becomes (-1, 0), which is west.',
            'The nested loop is the Bronze idea: the outer loop counts sides, the inner loop repeats steps, and the inner count depends on the outer one.'
          ] },
        { kind: 'code', label: 'Program 1: run it after you have traced it', lang: 'Python', code: SPIRAL, note: 'It prints <code>after side 1 robot at (1, 0) facing (0, 1)</code>, <code>after side 2 robot at (1, 2) facing (-1, 0)</code>, <code>after side 3 robot at (-2, 2) facing (0, -1)</code> and <code>after side 4 robot at (-2, -2) facing (1, 0)</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Trace table for Program 2, the coin path (our worked solution)', head: ['Cell', 'coins after', 'streak after', 'longest after'], rows: [
          ['.', '0', '0', '0'],
          ['.', '0', '0', '0'],
          ['*', '1', '1', '1'],
          ['.', '1', '0', '1'],
          ['*', '2', '1', '1'],
          ['*', '3', '2', '2'],
          ['.', '3', '0', '2'],
          ['.', '3', '0', '2'],
          ['*', '4', '1', '2']
        ] },
        { kind: 'code', label: 'Program 2: the coin path (ours)', lang: 'Python', code: COINS, note: 'It prints <code>coins: 4 longest run: 2</code>, which matches the last row of the trace table.' },
        { kind: 'p', mt: true, html: 'Program 2 uses three variables that change at different moments, the Silver and Gold idea in miniature. The common mistake is to forget that streak goes back to zero on an empty cell, which would make longest come out as 4. The trace table catches that before the computer does, and in a timed round that saves minutes.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Exercise 1 (Bronze idea).</strong> Change Program 1 to run for 6 sides. Where does the robot end, and which way does it face? (Answer: at (3, 4) facing west. Side 5 takes five steps east to (3, -2) and turns north; side 6 takes six steps north to (3, 4) and turns west.)',
          '<strong>Exercise 2 (Silver idea).</strong> In Program 2, change the path to "**.***.*". Predict coins and longest run. (Answer: coins 6, longest run 3.)',
          '<strong>Exercise 3 (round 2 Silver idea).</strong> Turn Program 2 into a function that takes the path as a parameter and returns both numbers. Call it on two different paths.',
          '<strong>Exercise 4 (round 2 Gold idea).</strong> Store the position of every coin in a list while you walk, then print the list. For the original path it should be [2, 4, 5, 8].'
        ] }
      ]
    },
    {
      id: 'signup',
      tint: 'tint',
      eyebrow: 'Signing up',
      h2: 'How does a pupil sign up, with or without the school?',
      lede: 'Either way works. Unlike the Informatik-Biber, the Jugendwettbewerb lets pupils register themselves.',
      body: [
        { kind: 'two',
          leftH3: 'Through the school',
          left: [
            'A teacher registers on BWINF\'s system and creates a group on jwinf.de. Pupils join with a group code once, then always log in with their personal login code, which BWINF advises them to note down and keep safe.',
            'There is no separate entry form: a pupil with a login code simply takes part during the contest dates.'
          ],
          rightH3: 'On your own',
          right: [
            'A pupil creates a BWINF account at login.bwinf.de and logs in to jwinf.de with it. BWINF says pupils who did not take part through a school must enter their postal address in that account to receive a certificate and prize.',
            'For a team of two, each member needs their own login code.'
          ] },
        { kind: 'p', mt: true, html: 'We are not connected with BWINF and we do not register pupils or enter anyone in the contest. A pupil who prepares with us signs up in one of the two ways above, and does every contest task alone or with their own teammate, exactly as BWINF\'s rules expect.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When can Jugendwettbewerb classes run in German time?',
      lede: 'After school or on a weekend morning. Our mentors teach from India, which is ahead of Germany all year.',
      body: [
        { kind: 'table', numCols: [], caption: 'Possible class times in Germany and the time in India', head: ['German start time', 'In India, winter (to 27 March 2027)', 'In India, summer (from 28 March 2027)'], rows: [
          ['15:15', '19:45', '18:45'],
          ['17:15', '21:45', '20:45'],
          ['Saturday 12:00', '16:30', '15:30'],
          ['Sunday 09:45', '14:15', '13:15']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz Germany keeps UTC+1 through the winter and moves to UTC+2 for summer; the change back happened on 25 October 2026 and the next change forward is on 28 March 2027. India has no summer time and stays at UTC+5:30, four and a half hours ahead now.' },
        { kind: 'p', mt: true, html: 'None of these is a fixed batch slot. You pick the trial lesson in your own time zone; groups and one-to-one lessons are arranged around school, and can be moved in the weeks of round 1 and round 2.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From a first loop to the junior tasks of round 3',
    lede: 'Our own milestones for Jugendwettbewerb pupils. The mentor uses them to pick a starting level and to report to parents.',
    table: { caption: 'Jugendwettbewerb milestones (ours)', head: ['Stage', 'Typical school years', 'The pupil can'], rows: [
      ['1. Moving the figure', 'Klasse 4 to 5', 'Write instructions and simple loops that move and turn a figure'],
      ['2. Loops in loops', 'Klasse 5 to 6', 'Use nested loops and simple conditions, the core of Bronze'],
      ['3. Tracing', 'Klasse 6 to 7', 'Fill in a trace table for a program with two or three variables'],
      ['4. Functions and lists', 'Klasse 7 to 9', 'Write functions with parameters and use lists, the ideas of round 2'],
      ['5. Junior tasks', 'Klasse 8 and up', 'Read an input file, solve a junior task in Python and document it']
    ] },
    left: { h3: 'For pupils', ps: [
      'Predict first, run second. If the computer surprises you, find the line where your trace went wrong.',
      'An easy version solved is two points. Do not leave a task blank while you chase the hard one.'
    ] },
    right: { h3: 'For parents', ps: [
      'The practice contests are free and open early. A child who has sat one is calmer on the real day.',
      'Ask what the variable called streak does in Program 2. If your child can explain it, the tracing has worked.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for young programmers in Germany',
    lede: 'Live, in English, with one mentor who stays with the pupil; every course can be taken in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Starting out', sub: 'Ages 6 to 10', courses: [
        { code: 'JIP / START / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'From blocks to small apps over a school year.' },
        { code: 'JIP / START / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'The thinking behind every program.' },
        { code: 'JIP / START / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary maths', blurb: 'Number and pattern skills for young coders.' }
      ] },
      { num: 'II', h3: 'Typed code', sub: 'Ages 9 to 14', courses: [
        { code: 'JIP / CODE / 01', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'A second typed language, 9 to 12.' },
        { code: 'JIP / CODE / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Loops and variables used on real maths.' },
        { code: 'JIP / CODE / 03', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik companion', blurb: 'School Informatik, Klasse 5 to 10.' }
      ] },
      { num: 'III', h3: 'Towards round 3', sub: 'Ages 13 and up', courses: [
        { code: 'JIP / NEXT / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Files, functions and lists in depth.' },
        { code: 'JIP / NEXT / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Algorithms for the junior tasks.' },
        { code: 'JIP / NEXT / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'For pupils heading to the Bundeswettbewerb.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live Jugendwettbewerb classes work',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoon', l: 'After school, mid to late afternoon German time.' },
      { time: 'Weekend morning', l: 'Saturday or Sunday, good for longer tracing sessions.' },
      { time: 'One to one', l: 'Agreed with the mentor, busier around the rounds.' }
    ],
    cells: [
      { h3: 'Blocks and Python', p: 'Both editors the 2027 rounds accept.' },
      { h3: 'Trace tables', p: 'Every program predicted before it runs.' },
      { h3: 'Our own tasks', p: 'Written for class, never the live round.' },
      { h3: 'Level by level', p: 'Bronze ideas first, Gold ideas last.' },
      { h3: 'English at your pace', p: 'Clear words, rephrased until they land.' },
      { h3: 'Steady mentor', p: 'The same teacher every week, who knows the code.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Some work by our younger students in many countries; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Reviews our students and parents posted on Google, without edits.',

  fees: {
    h2: 'Fees for Jugendwettbewerb classes',
    lede: 'Eight live classes make up one month. The fee shown is in euro, worked out at the reference rate of the European Central Bank; payment is collected in US dollars, so your bank converts it and the euro amount it reports can be a little different.',
    free: ['A free first class', 'A short tracing task at your child\'s level', 'No card needed'],
    group: ['Fifteen to twenty pupils of a similar level', 'One regular mentor', 'Two classes a week', 'Monthly, stop at any point'],
    one: ['One pupil, one mentor', 'The level your child is aiming at', 'Times arranged together']
  },

  faq: {
    eyebrow: 'Families in Germany ask',
    h2: 'Jugendwettbewerb Informatik preparation: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons are live and given in English only; the mentor follows your child\'s pace and accent. Blockly and Python both use simple English words, so the contest itself is easy to follow.' },
      { q: 'When is round 1 of the Jugendwettbewerb Informatik 2027?', a: 'BWINF gives 22 February to 7 March 2027, with a practice contest from 1 February 2027. Round 2 runs from 12 to 25 April 2027 and round 3 from 1 September to 15 November 2027.' },
      { q: 'Can my child use Python in the contest?', a: 'From 2027, yes. BWINF says rounds 1 and 2 can be solved in Blockly or in Python. Round 3 is solved at home with any programming tools.' },
      { q: 'How many points are needed for round 3?', a: 'For 2027, at least 26 points from two levels: the top-scoring level of round 1 plus the top-scoring level of round 2, or Silver and Gold of round 2 together. Each task gives 2, 3 or 4 points depending on the hardest version solved.' },
      { q: 'Does my child have to enter through school?', a: 'No. Pupils can create their own BWINF account, or join a group their teacher sets up. Pupils who enter on their own add their postal address to receive a certificate.' },
      { q: 'Which level should my child start with?', a: 'BWINF suggests Bronze for Klasse 5 and 6, Silver for 7 to 9 and Gold from Klasse 10, and all levels are open. We usually advise starting one level lower and climbing, since several levels may be attempted.' },
      { q: 'Can you go through this year\'s round 3 tasks with my child?', a: 'Not before the deadline of 23 November 2026, because BWINF wants solution ideas kept private until then. Until that date we teach with tasks we write ourselves. We are not connected with BWINF.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most pupils come after school or on a weekend morning.' },
      { q: 'What currency are the fees in?', a: 'The euro figure on this page comes from the European Central Bank\'s reference rate; the actual charge is in US dollars, and your bank does the conversion. The trial class is free and asks for no card.' },
      { q: 'Is the Jugendwettbewerb a good step after the Biber?', a: 'Yes. BWINF describes it as the programming contest for pupils with little or no experience, and its round 3 shares tasks with the Bundeswettbewerb Informatik, the next step up.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for young programmers in Germany and their parents.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for learners in Germany.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'Berlin schools and a real data project.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'School Informatik help, written in German.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'The next step for older teenagers.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class, step by step.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects by our students.' }
    ]
  },

  start: {
    h2: 'Book a free Jugendwettbewerb class',
    lede: 'In the first class the mentor gives your child a short program to trace, sees how far they get, and suggests a level to aim for and the course that fits, in English and at your child\'s pace.',
    readFirst: 'You can also read <a class="ag-inline-link" href="/how-we-teach">how a class with us runs</a>, or look at <a class="ag-inline-link" href="/courses">the courses</a> first.',
    note: 'Our classes are live, online and in English; the mentors work from India. Send us a WhatsApp message in English for the quickest answer.',
    formNote: 'The first class is free, and no card details are taken.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/courses/german-informatics-competitions-course-biber-bwinf-bwki', label: 'German informatics competitions' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python and AI for kids' },
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch for kids' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' }
      ] }
    ],
    bottomRight: 'Predict first, then press run'
  },

  personalityCss: `
.ag-root.ag-jip .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-jip .ag-capsule { border-left-width: 6px; }
.ag-root.ag-jip .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-jip .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-jip .ag-steps li { margin-bottom: 10px; }
`,

  dossier: {
    curriculumAuthority: 'Bundesweite Informatikwettbewerbe (BWINF): Jugendwettbewerb Informatik main, 2026, 2027, FAQ, Teilnehmen and Aufgaben pages and the 2026 newsletters on the 2026 page; Einheitenzeitgesetz. Read 2 and 3 November 2026.',
    localProject: 'Trace before you run: two original Python programs, a spiral robot (ends at (-2, -2) facing east) and a coin path (4 coins, longest run 2), each predicted in a trace table and then run, plus four exercises of our own mapped to Bronze, Silver and the two round 2 levels; and our arithmetic of two-level maxima against the 2027 26-point rule. Lesson family: trace the program by hand, then run it.',
    requiredMentions: ['after side 4 robot at (-2, -2) facing (1, 0)', 'coins: 4 longest run: 2', '22 February to 7 March 2027', '1 September to 15 November 2027', '73,272 pupils took part in round 1 of 2026', 'Bronze (round 1) and Silver (round 2)', 'For the original path it should be [2, 4, 5, 8]', 'Predict first, then press run'],
    sources: [
      { claim: '2027 dates, Python from 2027, all levels open, 26 points from two levels.', url: 'https://bwinf.de/jugendwettbewerb/2027/' },
      { claim: 'Levels, team sizes, 2026 participation, round 3 deadline 23 November 2026.', url: 'https://bwinf.de/jugendwettbewerb/2026/' },
      { claim: 'Points per version, concepts per level, self or school registration.', url: 'https://bwinf.de/jugendwettbewerb/faq/' },
      { claim: 'Recommended from Klasse 5, possible from Klasse 3, visual environment.', url: 'https://bwinf.de/jugendwettbewerb/teilnehmen/' }
    ],
    rejectedClaims: [
      'Total round 2 participants for 2026: BWINF gives 30,502 on one page and 28,862 in a newsletter; neither total used, and the Silver and Gold figures are not added.',
      'Maximum points per level as a BWINF figure: not published on the pages read; the page gives tasks x 4 as our own arithmetic.',
      'Any hint on the live 2026 round 3 junior tasks: none before 23 November 2026.',
      'Any affiliation with BWINF: none.',
      'German-language teaching: we teach in English only.'
    ]
  }
};
