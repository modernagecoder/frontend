'use strict';
// MOEMS math olympiad preparation (ag- competition door; UK and US exams cluster Phase 2, row US065). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from
// moems.org (Math Olympiads for Elementary and Middle Schools, Inc.); copies in
// keyword-research-2026-09/uk-us-gap/src/moems-math-olympiad-preparation/:
//  - /pages/about-the-program: "MOEMS® provides five monthly problem-solving contests for elementary and middle school
//    students."; "the Elementary is for grades 4, 5 and 6, and the Middle School for grades 6, 7 and 8"; "You may enroll
//    up to 35 students per team."; "FIVE MONTHLY CONTESTS with detailed solutions (5 questions each)"; solution videos;
//    "100 PRACTICE PROBLEMS and step by step video solutions from the previous two years"; awards (certificates for all,
//    one highest individual scorer medal, patches top 50%, gold pin top 2%, silver pin top 3-10%, a medallion for a
//    perfect score; team plaque top 10%, certificates top 11-20%; "Institute teams are not eligible for team awards");
//    "should be administered to all students on the same day at the same time."; open to "public, private, parochial,
//    home schools, institutes, and, with restrictions, individuals."; program goals; flexible structure list; the five
//    administration windows (November 9, 2026 to March 29, 2027) and score deadline "March 31, 2027, 11:59pm (PT)" (the
//    line under the table reads "March 31, 2026", an apparent typo; the page follows the table).
//  - /pages/contests-tournaments: "Five Olympiad Contests, each consisting of five questions, and limited to 30 minutes
//    are held monthly from November through March."; "an approximately 4-week window"; tournaments one-day, grades 4-6
//    and 6-8, Individual Round and Team Round, tiebreakers; "Tournaments may be administered April through December".
//  - /pages/tips-for-picos: "PICO stands for Person In Charge of Olympiads."; "our problems are decidedly not routine
//    problems"; "Students must compete individually on Olympiads, but practices are best done in small interactive
//    groups."; "downplay the computational aspects and promote personal growth"; "The Sample Contest and problems of the
//    week are available to everyone online."; "Under NO CIRCUMSTANCES may the actual contests or the individual problems
//    and/or solutions be published in any form, including the internet."; contests printable "one week before the
//    beginning date"; "The contests must be given under strict test conditions."
//  - /pages/resources: Problem of the Week 2025-2026 and archive; sample contests for Division E and Division M.
// Fees on the resources page not used (rule 4). Board member names not used (rule 7).
// Weekdays checked in Python: every window opens and closes on a Monday; March 31, 2027 is a Wednesday.
// Our own material, labelled: 6 minutes per problem (30 / 5), the 25-problem season arithmetic (5 x 5), three worked
// examples (the 12th triangular number; 7 coins; working backward to 23), ten practice problems (five Division E level,
// five Division M level) with answers checked in Python, the season plan. Lesson family: six minutes per problem, and
// the strategy toolkit (draw, list, work backward, find the pattern). No MOEMS contest or sample item reproduced.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'competition', tag: 'COMPETITION', blurb: 'MOEMS for grades 4 to 8: five monthly contests of five problems in 30 minutes, the 2026 to 2027 windows, awards, and a strategy toolkit with original problems.' },
  slug: 'moems-math-olympiad-preparation',
  code: 'mop',
  accent: '#216E45',
  accentRationale: 'MOEMS math olympiad preparation: a forest green #216E45 from the US allocation table, about 6.1:1 on paper #FBF8F2, clear of the NYC G&T garden green',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'MOEMS math olympiad preparation',
  title: 'MOEMS Preparation: Math Olympiad Practice for Grades 4 to 8',
  description: 'MOEMS preparation for grades 4 to 8: Division E and M, five contests of five problems in 30 minutes, the 2026 to 2027 windows, awards and ten original problems.',
  ogDescription: 'MOEMS runs five monthly contests of five problems, 30 minutes each, from November 2026 to March 2027. How it works, how to practice, and a strategy toolkit with original problems.',
  twitterDescription: 'MOEMS for grades 4 to 8, explained from moems.org, with original practice.',
  pageName: 'MOEMS Math Olympiad Preparation',
  webPageDescription: 'A guide for students, parents and PICOs to the Math Olympiads for Elementary and Middle Schools (MOEMS) in 2026 to 2027, from moems.org: divisions, contest format, windows, awards and teams, with strategy lessons and original practice problems.',
  courseDescription: 'Live online math olympiad classes for students in grades 4 to 8, in a batch of 15 to 20 or one to one, built around non-routine problems and strategies for MOEMS-style contests.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'MOEMS preparation',
  navLinks: [
    { href: '#format', label: 'Format' },
    { href: '#windows', label: '2026 to 2027' },
    { href: '#awards', label: 'Awards' },
    { href: '#toolkit', label: 'Strategies' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Grades 4 to 8 &middot; Division E and Division M &middot; November 2026 to March 2027',
  h1: 'MOEMS preparation: math olympiad practice for grades 4 to 8',
  lede: 'MOEMS, the Math Olympiads for Elementary and Middle Schools, sets five short contests across the school year: five problems each, 30 minutes, one contest a month from November to March. The problems are deliberately not routine, so the preparation is a set of thinking strategies rather than a list of topics. This page explains the program from moems.org as published on 31 October 2026, then teaches the toolkit we use: drawing, making a list, working backward and finding the pattern, with three worked examples and ten problems of our own.',
  secondaryCta: { href: '#toolkit', label: 'The strategy toolkit' },
  wa: 'Hello Modern Age Coders, my child is taking part in MOEMS this year. Could we book a free first math olympiad class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; original problems, never contest items',
  spec: [
    ['Organiser', 'MOEMS, Inc.'],
    ['Divisions', 'E for grades 4 to 6; M for grades 6 to 8'],
    ['Contests', 'Five, monthly, November to March'],
    ['Each contest', '5 problems, 30 minutes'],
    ['Team size', 'Up to 35 students'],
    ['First window', 'November 9 to 30, 2026'],
    ['Score deadline', 'March 31, 2027'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'MOEMS (Math Olympiads for Elementary and Middle Schools) runs five monthly problem-solving contests, each of five questions in 30 minutes, in Division E for grades 4 to 6 and Division M for grades 6 to 8. Schools, homeschools and institutes enter teams of up to 35. Modern Age Coders teaches MOEMS-style problem solving live online, in a batch or 1-on-1, in our Middle School Math Competitions course.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses for MOEMS problem solvers',
    lede: 'Our contest course first, then an elementary course for Division E students and a younger problem-solving course.',
    items: [
      { course: 'middle-school-math-competitions-course', code: 'MOP / 01', title: 'Middle school math competitions', note: 'Non-routine problems and contest strategy for grades 5 to 8.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'MOP / 02', title: 'Elementary math', note: 'The number sense Division E problems lean on, grades 4 and 5.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'MOP / 03', title: 'Problem solving for kids', note: 'Logic, lists and patterns for younger olympians.' }
    ]
  },

  sections: [
    {
      id: 'format', tint: 'tint', eyebrow: 'The contests',
      h2: 'What is MOEMS and how does each contest work?',
      lede: 'MOEMS says it provides "five monthly problem-solving contests for elementary and middle school students." Each contest has five questions and a 30 minute limit, and every student works alone, though practice can be done in groups.',
      body: [
        { kind: 'table', caption: 'MOEMS at a glance for 2026 to 2027 (moems.org About the Program, Contests and Tournaments, and Tips for PICOs pages, read 31 October 2026)', head: ['Feature', 'What MOEMS publishes'], rows: [
          ['Divisions', 'Elementary (Division E) for grades 4, 5 and 6; Middle School (Division M) for grades 6, 7 and 8'],
          ['Contests', 'Five Olympiad contests, held monthly from November through March'],
          ['Each contest', 'Five questions, limited to 30 minutes'],
          ['Window', 'Each contest can be given on a date the PICO picks within an approximately 4-week window'],
          ['Conditions', 'Strict test conditions; all students on the same day at the same time'],
          ['Who enters', 'Public, private, parochial and home schools, institutes, and individuals with restrictions'],
          ['Team size', 'Up to 35 students per team'],
          ['Materials', 'Detailed solutions and solution videos for each contest; 100 practice problems from the previous two years'],
          ['Free online', 'A sample contest for each division and the problems of the week']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Six minutes a problem',
          left: [
            'Thirty minutes for five problems is six minutes each, by our arithmetic. That is generous for a school worksheet and tight for a genuinely new problem, which is the point: a student has time to think, try an idea and check, but not time to flounder.',
            'Across five contests, a student meets 25 problems in the season (5 x 5, again our arithmetic). Every one of them is a chance to learn a strategy, whatever the score.'
          ],
          rightH3: 'Who runs it at school',
          right: [
            'MOEMS calls the adult in charge a PICO: "PICO stands for Person In Charge of Olympiads." The PICO enrolls the team, downloads each contest a week before its window opens, gives it under strict conditions and enters scores.',
            'If your child&rsquo;s school does not take part, ask whether a teacher, homeschool group or institute might run a team. MOEMS allows individuals only with restrictions, so check with MOEMS directly.'
          ] },
        { kind: 'source', html: 'Sources: MOEMS <a class="ag-inline-link" href="https://www.moems.org/pages/about-the-program" rel="noopener" target="_blank">About the Program</a>, <a class="ag-inline-link" href="https://www.moems.org/pages/contests-tournaments" rel="noopener" target="_blank">Contests &amp; Tournaments</a> and <a class="ag-inline-link" href="https://www.moems.org/pages/tips-for-picos" rel="noopener" target="_blank">Tips for PICOs</a>, read 31 October 2026. MOEMS is a registered trademark of Math Olympiads for Elementary and Middle Schools, Inc.; Modern Age Coders is not connected with it.' }
      ]
    },
    {
      id: 'windows', tint: 'deep', eyebrow: 'The season',
      h2: 'When are the MOEMS contests in 2026 to 2027?',
      lede: 'The five administration windows run from November 9, 2026 to March 29, 2027, each opening and closing on a Monday. All scores must be entered by March 31, 2027 at 11:59 pm Pacific time.',
      body: [
        { kind: 'table', caption: 'MOEMS 2026 to 2027 administration windows (moems.org About the Program and Tips for PICOs, read 31 October 2026; weekdays checked against the calendar)', head: ['Contest', 'Administration window', 'Score entry deadline'], rows: [
          ['1', 'Monday, November 9 to Monday, November 30, 2026', 'March 31, 2027, 11:59 pm PT'],
          ['2', 'Monday, December 7 to Monday, December 28, 2026', 'March 31, 2027, 11:59 pm PT'],
          ['3', 'Monday, January 4 to Monday, January 25, 2027', 'March 31, 2027, 11:59 pm PT'],
          ['4', 'Monday, February 1 to Monday, February 22, 2027', 'March 31, 2027, 11:59 pm PT'],
          ['5', 'Monday, March 1 to Monday, March 29, 2027', 'March 31, 2027, 11:59 pm PT']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The date is the PICO&rsquo;s choice',
          left: [
            'MOEMS sets an earliest date, the same for every team, division and format, and a latest date after which the contest may no longer be given. The PICO picks the actual day inside the window. Ask your child&rsquo;s PICO for the five dates early.',
            'The page notes, under the table, that all scores must be entered by March 31, 2026. The table itself shows March 31, 2027, which fits the season, so we follow the table.'
          ],
          rightH3: 'Tournaments outside the season',
          right: [
            'MOEMS also supports one-day local or regional tournaments for grades 4 to 6 and 6 to 8, with an Individual Round, a Team Round and tiebreakers, run by a hosting school or organisation.',
            'MOEMS says tournaments may be held April through December, and students do not need to have taken part in the monthly contests. They make a good next step after the season ends.'
          ] },
        { kind: 'source', html: 'Source: MOEMS <a class="ag-inline-link" href="https://www.moems.org/pages/about-the-program" rel="noopener" target="_blank">About the Program</a> and Contests &amp; Tournaments pages, read 31 October 2026.' }
      ]
    },
    {
      id: 'awards', tint: 'tint', eyebrow: 'Awards',
      h2: 'What awards does MOEMS give?',
      lede: 'Every student gets a certificate. Patches, pins and a medallion recognise individual results across the season, and teams can earn a plaque or certificates.',
      body: [
        { kind: 'table', caption: 'MOEMS awards (moems.org About the Program, read 31 October 2026)', head: ['Award', 'Who receives it'], rows: [
          ['Certificate', 'All students'],
          ['Highest Individual Scorer medal', 'One student per team'],
          ['Award patch', 'Top 50 percent'],
          ['Silver pin', 'Top 3 to 10 percent'],
          ['Gold pin', 'Top 2 percent'],
          ['Medallion', 'A perfect score'],
          ['Team plaque', 'Top 10 percent of teams'],
          ['Team certificates', 'Teams in the top 11 to 20 percent'],
          ['Note', 'Institute teams are not eligible for team awards']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Recognition for half the field',
          left: [
            'Because the patch goes to the top half, a student who improves steadily through the season has a real goal within reach. That design suits younger students meeting contest math for the first time.',
            'MOEMS&rsquo;s own advice to PICOs is to "downplay the computational aspects and promote personal growth instead." We agree, and we track growth in strategies, not just scores.'
          ],
          rightH3: 'What we will not promise',
          right: [
            'No teacher can promise a pin or a medallion, because awards depend on every participant&rsquo;s results. We teach the strategies and tell families honestly how their child is thinking.',
            'A student who learns to draw, list and check on 25 problems has gained something lasting, whichever award arrives.'
          ] }
      ]
    },
    {
      id: 'practice-rules', tint: 'deep', eyebrow: 'Practice honestly',
      h2: 'Where can you find MOEMS practice problems?',
      lede: 'MOEMS makes a sample contest for each division and its problems of the week free online. Teams also get 100 practice problems with solutions, and MOEMS sells problem books. Everything else must stay private.',
      body: [
        { kind: 'p', html: 'MOEMS is unusually clear about copyright. Its PICO guidance says: "Under NO CIRCUMSTANCES may the actual contests or the individual problems and/or solutions be published in any form, including the internet." That is why you will not find real MOEMS problems on this page, and why we never reproduce them in class. We write our own problems in the same spirit and send families to the free official samples and problems of the week.' },
        { kind: 'table', mt: true, caption: 'Official MOEMS practice routes (moems.org Resources and Tips for PICOs, read 31 October 2026)', head: ['Material', 'Who can use it'], rows: [
          ['Sample contest, Division E and Division M', 'Everyone, free online'],
          ['Problem of the Week, 2025 to 2026 and archive', 'Everyone, free online, with solutions'],
          ['100 practice problems with solutions', 'Enrolled teams, with a password'],
          ['Problem books', 'Sold through the MOEMS store'],
          ['The five contests and their solutions', 'The PICO only, until after each contest']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Practice in groups, compete alone',
          left: [
            'MOEMS advises that "practices are best done in small interactive groups", with each group presenting its method to the others. Seeing three different solutions to one problem teaches more than solving three problems alone.',
            'Our group batches use exactly that pattern: one problem, several methods, and the students explain theirs before the teacher speaks.'
          ],
          rightH3: 'Try before the first contest',
          right: [
            'MOEMS calls its problems "decidedly not routine" and recommends that students explore some before sitting the first contest. A first-time student who opens a contest cold often freezes on problem 1.',
            'Start with the sample contest for the right division, untimed, then try one problem of the week each week until November.'
          ] }
      ]
    },
    {
      id: 'toolkit', tint: 'tint', eyebrow: 'Strategies',
      h2: 'Which strategies help most on MOEMS problems?',
      lede: 'Four strategies cover most non-routine problems at this level: draw a picture, make an organised list, work backward, and look for a pattern. The toolkit and the cue words are ours.',
      body: [
        { kind: 'table', caption: 'Our strategy toolkit for MOEMS-style problems', head: ['Strategy', 'Cue in the problem', 'First move'], rows: [
          ['Draw a picture', 'Shapes, positions, a path, people in a line', 'Sketch it, label every number'],
          ['Make an organised list', '"How many ways", combinations, coins', 'Fix the biggest item first, then count down'],
          ['Work backward', 'An end value after several steps', 'Start at the end and undo each step'],
          ['Look for a pattern', 'A sequence, "the 50th", a repeating cycle', 'Write the first five cases, then find the rule'],
          ['Guess and check, then refine', 'Two unknowns with a total', 'Try a sensible guess, adjust by the error'],
          ['Simplify', 'Big numbers, many steps', 'Solve a smaller version first']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why strategies, not topics',
          left: [
            'Division E problems use little beyond grade 4 to 6 arithmetic, and Division M little beyond grade 8. What makes them hard is that the method is not given. A student with six strategies to try is rarely stuck for long.',
            'So each class takes one strategy, shows it on our problems, and then mixes problems so the student must choose.'
          ],
          rightH3: 'Using the six minutes',
          right: [
            'Our rule of thumb: one minute to read and pick a strategy, four to work, one to check the answer against the question. If nothing works after three minutes, switch strategy rather than pushing harder.',
            'The check matters most. Many MOEMS-style answers are whole numbers that can be tested directly in the story.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples',
      h2: 'Three worked MOEMS-style examples',
      lede: 'Our own problems, one per strategy, at the level of Division E and Division M. They are not MOEMS problems and are not taken from any MOEMS sample, book or contest.',
      body: [
        { kind: 'p', html: '<b>Example 1: look for a pattern (Division E level).</b> Dots are arranged in triangles: 1 dot, then 3 dots, then 6, then 10. How many dots are in the 12th triangle? List and look: 1, 3, 6, 10 add 2, 3, 4 each time, so the nth triangle is 1 + 2 + ... + n. The 12th is 1 + 2 + ... + 12. Pair the ends: 1 + 12, 2 + 11 and so on, six pairs of 13, which is 78. The pairing trick turns a long sum into one multiplication.' },
        { kind: 'p', html: '<b>Example 2: make an organised list (Division E level).</b> In how many ways can you make 25 cents using pennies, nickels and dimes, if you must use at least one dime? Fix the dimes first. Two dimes: 5 cents left, made as one nickel or five pennies, 2 ways. One dime: 15 cents left, made with 3, 2, 1 or 0 nickels and pennies for the rest, 4 ways. Total 6 ways; rereading the condition confirms two dimes are allowed, since it says at least one. Listing in order of the biggest coin is what makes the count trustworthy.' },
        { kind: 'p', html: '<b>Example 3: work backward (Division M level).</b> Maya thinks of a number, doubles it, subtracts 5, then divides by 3 and gets 7. What was her number? Undo from the end: 7 x 3 = 21, then 21 + 5 = 26, then 26 / 2 = 13. Check forward: 13 doubled is 26, minus 5 is 21, divided by 3 is 7. Correct, the number is 13. Undoing each step in reverse order, with the opposite operation, is the whole strategy.' },
        { kind: 'two', mt: true,
          leftH3: 'What the checks show',
          left: [
            'In example 2 the student pauses to reread the condition, and in example 3 they check forward. Both habits catch the kind of slip that loses a point on a five-problem contest, where one point is a fifth of the score.',
            'We ask for a written check on every practice problem until it becomes automatic.'
          ],
          rightH3: 'Changing the problem',
          right: [
            'After each example we change it: the 20th triangle, 30 cents, a different final number. If the student can redo it without help, the strategy has stuck.',
            'Then we ask which strategy fits a problem before anyone solves it. Choosing is the real contest skill.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice set',
      h2: 'Ten original practice problems for MOEMS students',
      lede: 'Problems 1 to 5 are at a Division E level and 6 to 10 at a Division M level. Written by our teachers. Try five in 30 minutes to feel the pace.',
      body: [
        { kind: 'ol', items: [
          '<b>A tiled path has rows of 1, 3, 5, 7 tiles and so on, two more each row. How many tiles are in the first 10 rows together?</b>',
          '<b>The sum of two numbers is 30 and their difference is 8. What is the larger number?</b>',
          '<b>How many rectangles of any size are in a 1 by 4 strip of squares?</b>',
          '<b>A frog climbs 3 feet up a 10-foot wall each day and slips back 2 feet each night. On which day does it reach the top?</b>',
          '<b>What is the ones digit of 2 multiplied by itself 20 times?</b>',
          '<b>How many two-digit numbers have digits that add to 9?</b>',
          '<b>The average of five consecutive odd numbers is 21. What is the largest?</b>',
          '<b>A square has the same perimeter as a 9 by 5 rectangle. Which has the greater area, and by how much?</b>',
          '<b>How many factors does 36 have?</b>',
          '<b>I start with a number, add 4, multiply by 3, subtract 6 and get 30. What was the number?</b>'
        ] },
        { kind: 'table', mt: true, caption: 'Answers and the strategy behind each (ours; checked in Python)', head: ['No.', 'Answer', 'Strategy'], rows: [
          ['1', '100', 'Pattern: totals 1, 4, 9, 16 are square numbers; 10 x 10'],
          ['2', '19', 'Guess and check, or (30 + 8) / 2'],
          ['3', '10', 'Organised list: 4 + 3 + 2 + 1 by length'],
          ['4', 'Day 8', 'Picture: 7 feet after 7 nights, then 3 more by day'],
          ['5', '6', 'Pattern: ones digits cycle 2, 4, 8, 6'],
          ['6', '9', '18, 27, 36, 45, 54, 63, 72, 81, 90'],
          ['7', '25', 'The middle number is 21; then 23 and 25'],
          ['8', 'The square, by 4', 'Side 7, area 49, against 45'],
          ['9', '9', 'Pairs 1 and 36, 2 and 18, 3 and 12, 4 and 9, then 6'],
          ['10', '8', 'Work backward: 36, 12, 8']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where students slip',
          left: [
            'Problem 4 traps students who divide 10 by 1 foot a day and answer day 10; the frog escapes during the day before slipping. Problem 9 catches those who count 6 twice.',
            'Problem 6 is easy to undercount by forgetting 90, whose digits also add to 9.'
          ],
          rightH3: 'From here to the samples',
          right: [
            'Once these feel comfortable, take the free MOEMS sample contest for your division in exactly 30 minutes.',
            'In class we sort the problems a student missed by strategy and set fresh ones of our own on that strategy.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Season plan',
      h2: 'A MOEMS season plan from November 2026 to March 2027',
      lede: 'Our plan for a student with one live class a week, lined up with the five published windows.',
      body: [
        { kind: 'table', caption: 'One strategy per month (our plan)', head: ['Month', 'Window', 'Strategy focus'], rows: [
          ['November 2026', 'Contest 1, November 9 to 30', 'Draw a picture; the free sample contest untimed'],
          ['December 2026', 'Contest 2, December 7 to 28', 'Organised lists and counting'],
          ['January 2027', 'Contest 3, January 4 to 25', 'Patterns and sequences'],
          ['February 2027', 'Contest 4, February 1 to 22', 'Working backward; guess and check'],
          ['March 2027', 'Contest 5, March 1 to 29', 'Mixed problems, choosing the strategy']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Before', p: 'One problem of the week each week.' },
          { h3: 'During', p: 'Five-problem, 30 minute sets, never real contests.' },
          { h3: 'After', p: 'A tournament in spring, or the next contest up.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four stages of a growing olympian',
    lede: 'Our description of how problem solving develops across a season. It is not a MOEMS measure.',
    table: { caption: 'From first contest to confident solver (our stages)', head: ['Stage', 'What a teacher sees'], rows: [
      ['1. Starts', 'Writes something down instead of freezing'],
      ['2. Chooses', 'Names a strategy before calculating'],
      ['3. Checks', 'Tests every answer against the question'],
      ['4. Explains', 'Shows a classmate a second method']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child which strategy they used on each contest problem, not how many they got. The answer tells you far more.',
      'A score that dips in a hard month is normal. The season is long, and the patch goes to the top half overall.'
    ] },
    right: { h3: 'For students', ps: [
      'Stuck? Draw it, or try a smaller version. Both work surprisingly often.',
      'Read the last sentence again before you write an answer. It is the one that says what to find.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for young problem solvers',
    lede: 'Each course is live online with a regular teacher, in a group batch or privately.',
    bands: [
      { num: 'I', h3: 'Contest years', sub: 'Grades 4 to 8', courses: [
        { code: 'MOP / CON / 01', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'MOEMS-style and MATHCOUNTS problems.' },
        { code: 'MOP / CON / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Number sense for Division E.' },
        { code: 'MOP / CON / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'The base for Division M.' }
      ] },
      { num: 'II', h3: 'Thinking tools', sub: 'Alongside the contests', courses: [
        { code: 'MOP / TLS / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Logic and patterns.' },
        { code: 'MOP / TLS / 02', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Mental arithmetic', blurb: 'Faster, cleaner calculation.' },
        { code: 'MOP / TLS / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Checking patterns in Python.' }
      ] },
      { num: 'III', h3: 'The next contests', sub: 'Grade 8 and up', courses: [
        { code: 'MOP / NXT / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'AMC to AIME.' },
        { code: 'MOP / NXT / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The algebra contests assume.' },
        { code: 'MOP / NXT / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and chance.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live olympiad classes that fit the school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in every US time zone.' },
      { time: 'Weekends', l: 'Longer problem sessions.' },
      { time: '1-on-1', l: 'Built on one student&rsquo;s strategies.' }
    ],
    cells: [
      { h3: 'One strategy a week', p: 'Taught, then mixed in.' },
      { h3: 'Methods shared', p: 'Students explain before the teacher.' },
      { h3: 'Timed fives', p: 'Five problems in 30 minutes, ours.' },
      { h3: 'Written checks', p: 'Every answer tested in the story.' },
      { h3: 'Any state', p: 'Live online across the US.' },
      { h3: 'Group size', p: 'Batches of 15 to 20, or private.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Patterns found in contests often turn into code; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows some.',
  reviewsLede: 'Parents&rsquo; reviews from Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'MOEMS team entry is arranged by your school or PICO directly with MOEMS; our fee is only for classes. We bill monthly, so families can follow the season and stop in March.',
    free: ['A free first class', 'A short strategy check', 'No card needed'],
    group: ['A batch of 15 to 20', 'The same teacher weekly', 'Choose your batch', 'Monthly billing'],
    one: ['A private coach', 'Problems chosen for one student', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'MOEMS: what parents and students ask',
    items: [
      { q: 'What is MOEMS?', a: 'MOEMS stands for Math Olympiads for Elementary and Middle Schools. It runs five monthly problem-solving contests from November to March, each with five questions and a 30 minute limit.' },
      { q: 'What grades are MOEMS Division E and Division M?', a: 'MOEMS says Division E, the Elementary division, is for grades 4, 5 and 6, and Division M, the Middle School division, is for grades 6, 7 and 8. Grade 6 students can be in either.' },
      { q: 'When are the MOEMS contests in 2026 to 2027?', a: 'The windows are November 9 to 30, 2026; December 7 to 28, 2026; January 4 to 25, 2027; February 1 to 22, 2027; and March 1 to 29, 2027. The PICO picks the day within each window.' },
      { q: 'How many students can be on a MOEMS team?', a: 'MOEMS allows up to 35 students per team. Public, private, parochial and home schools and institutes can enter, and individuals can take part with restrictions.' },
      { q: 'Where can I find MOEMS practice problems?', a: 'MOEMS publishes a free sample contest for each division and its problems of the week online. Enrolled teams also receive 100 practice problems with solutions, and MOEMS sells problem books.' },
      { q: 'Do you use real MOEMS problems in class?', a: 'No. MOEMS says its contests and problems may not be published in any form, so we write our own problems and send students to the free official samples.' },
      { q: 'What does a gold pin mean in MOEMS?', a: 'MOEMS gives a gold pin to the top 2 percent, a silver pin to the top 3 to 10 percent and a patch to the top 50 percent. A perfect score earns a medallion, and every student gets a certificate.' },
      { q: 'Can my child do MOEMS if their school does not take part?', a: 'MOEMS is open to home schools and institutes as well as schools, and to individuals with restrictions. Ask MOEMS directly about the individual route, or ask a local group to run a team.' },
      { q: 'What days and times are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of MOEMS?', a: 'No. Modern Age Coders is an independent online school and is not connected with Math Olympiads for Elementary and Middle Schools, Inc. MOEMS is its registered trademark.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More contests and math help',
    lede: 'Other competitions for the same ages, the season calendar, and help by grade.',
    items: [
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'MATHCOUNTS, Kangaroo and MOEMS side by side.' },
      { href: '/us-coding-math-and-ai-competitions-calendar', label: 'US competitions calendar', p: 'Every contest date in one place.' },
      { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo USA', p: 'A spring contest for grades 1 to 12.' },
      { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation', p: 'The next team contest for middle schoolers.' },
      { href: '/online-math-tutor-5th-grade', label: '5th grade math tutor', p: 'School math for Division E students.' },
      { href: '/math-olympiad-amc-tutoring', label: 'AMC and olympiad tutoring', p: 'Where MOEMS students often go next.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child&rsquo;s grade and division. The teacher works through two of our problems with them and tells you which strategy to build first.',
    readFirst: 'To see a lesson in action, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Classes are taught live from India at times set for US afternoons and weekend mornings. Families often find WhatsApp the easiest way to reach us.',
    formNote: 'The first class is free; no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/math-competitions-for-middle-school-students', label: 'Middle school competitions' },
        { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo USA' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation' },
        { href: '/us-coding-math-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-4th-grade', label: '4th grade math tutor' },
        { href: '/online-math-tutor-6th-grade', label: '6th grade math tutor' },
        { href: '/online-math-tutor-8th-grade', label: '8th grade math tutor' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Five problems, thirty minutes'
  },

  personalityCss: `
.ag-root.ag-mop .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-mop .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-mop .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-mop .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mop .ag-steps li { line-height: 1.6; }
.ag-root.ag-mop .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Math Olympiads for Elementary and Middle Schools, Inc. (moems.org), read raw on 31 October 2026: About the Program (five monthly contests, divisions E and M, teams of up to 35, materials, awards, same-day administration, eligibility, 2026 to 2027 windows and score deadline), Contests and Tournaments (five questions, 30 minutes, approximately 4-week window, tournaments April through December), Tips for PICOs (PICO definition, non-routine problems, group practice, copyright rule, strict conditions), Resources (problem of the week, sample contests).',
    localProject: 'Our arithmetic of 6 minutes per problem and 25 problems a season, the strategy toolkit table, three original worked examples (78 dots, 6 ways to make 25 cents with a dime, the number 13), ten original practice problems with answers checked in Python, a five-month season plan. Lesson family: six minutes per problem and the strategy toolkit.',
    requiredMentions: ['PICO stands for Person In Charge of Olympiads.', 'Under NO CIRCUMSTANCES may the actual contests or the individual problems and/or solutions be published in any form, including the internet.', 'decidedly not routine', 'practices are best done in small interactive groups', 'downplay the computational aspects and promote personal growth instead', 'Institute teams are not eligible for team awards', 'Top 3 to 10 percent', 'six pairs of 13, which is 78', 'Picture: 7 feet after 7 nights, then 3 more by day', 'Monday, March 1 to Monday, March 29, 2027'],
    sources: [
      { claim: 'MOEMS program: divisions, five monthly contests, team size, materials, awards, eligibility, 2026 to 2027 windows and score deadline.', url: 'https://www.moems.org/pages/about-the-program' },
      { claim: 'Contest format (five questions, 30 minutes), administration window, tournaments.', url: 'https://www.moems.org/pages/contests-tournaments' },
      { claim: 'PICO guidance: practice advice, copyright rule, test conditions, free sample contest and problems of the week.', url: 'https://www.moems.org/pages/tips-for-picos' },
      { claim: 'Problem of the Week and sample contests for Division E and Division M.', url: 'https://www.moems.org/pages/resources' }
    ],
    rejectedClaims: [
      'Team fees and book prices on the resources page: not printed (no typed currency, never another provider\'s prices).',
      'The line "All scores must be entered by March 31, 2026": treated as a typo against the table\'s March 31, 2027; the page says so.',
      'Any sample, book or contest problem: not reproduced (MOEMS copyright rule); all problems are ours.',
      'Calculator rules: not found on the pages read; nothing printed.',
      'Names of board members and the person a medallion is named after: not used (private individuals).',
      'Any affiliation with MOEMS: none, stated on the page.'
    ]
  }
};
