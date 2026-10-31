'use strict';
// Beast Academy tutor (ag- curriculum help door; UK and US exams cluster Phase 1, row US084).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md (writer brief, rule 10). Sources read raw with curl on
// 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/beast-academy-tutor/):
//  - beastacademy.com (home): "Beast Academy is the elementary school math program created by Art of Problem Solving
//    (AoPS)"; "20,000+ problems, puzzles, and skill games"; live virtual campus where students "learn alongside 10-16
//    curious peers" (video-based classes for Levels 2-5); "1000+ lessons and videos".
//  - beastacademy.com/faq: "a full math program from Art of Problem Solving for kids ages 6-13"; "loosely based on the
//    Common Core standards"; start "about a level &lsquo;behind&rsquo; their current grade level" (8 or 9 year old: Level 2); "Aim to
//    spend 12-15 days teaching a chapter" to finish a level in 180 days; assign Practice "by time and not by pages"; "some
//    pages in the Practice books may take more than an hour"; "we don't expect students to complete every single problem";
//    stuck advice (re-read the Guide, examples at the top of Practice pages, try something new, "guiding questions at the
//    back of the Practice book" for starred problems, take a break); Levels 4 and 5 "also cover many middle-grades
//    standards"; "A student who has completed Level 5 of Beast Academy Online has the mathematical background necessary
//    for Art of Problem Solving (AoPS) prealgebra"; can be used "as a stand-alone curriculum or as a supplement".
//  - beastacademy.com/books: "Each level 1-5 is split into four units, A-D"; Level 1 "does not have separate Guide and
//    Practice books"; Levels 2 to 5 have 4 Guide and 4 Practice books; level ages (1: 6-8, 2: 7-9, 3: 8-10, 4: 9-12,
//    5: 10-13); unit topics (e.g. 3B Multiplication, Perfect Squares, The Distributive Property; 4C Factors, Fractions,
//    Integers; 5C Sequences, Ratios & Rates, Decimals); Practice materials provide "step-by-step solutions" and "Many
//    solutions feature more than one approach."; books and BA Online "cover the same concepts in the same order of units
//    and chapters"; Practice books "contain completely different problems from the ones found in BA Online".
//  - beastacademy.com/online: "more than 1,000 lessons"; parent dashboard and progress reports.
// En dashes and non-breaking hyphens inside quoted ranges (12-15, 10-16, 6-13) are written as plain hyphens (copy rule 4).
// Not used: prices, satisfaction percentage, testimonials, staff and puzzle-author names.
// Our own material, labelled: the neighbor-squares example (13 x 13 = 169, 12 x 14 = 168), the Python check (11 to 15),
// the factor-pair rectangles of area 36 (five shapes), the sequence 4, 7, 10 (50th term 151), the hint ladder and
// practice set.
// Lesson family: neighbor squares, (n - 1)(n + 1) = n x n - 1, through the distributive property.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH', blurb: 'A tutor alongside Beast Academy: the levels and units, pacing, what to do on a starred problem, and live help.' },
  slug: 'beast-academy-tutor',
  code: 'ba',
  accent: '#7E4F6C',
  accentRationale: 'Beast Academy tutor: a dusky plum, #7E4F6C as allocated, softer than the Saxon mulberry and still well above contrast on the #FBF8F2 paper',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Beast Academy tutor',
  title: 'Beast Academy Tutor: Live Help With Levels 1 to 5',
  description: 'A Beast Academy tutor for families using the books or BA Online: the levels and units, pacing, getting unstuck on starred problems, and live help.',
  ogDescription: 'Beast Academy is meant to be hard. Its own FAQ says some Practice pages take more than an hour. What the levels contain, how its makers suggest pacing it, and how a tutor helps without giving answers away.',
  twitterDescription: 'Live help for children using Beast Academy, with hints rather than answers.',
  pageName: 'Beast Academy Tutor',
  webPageDescription: 'A guide for US families using Beast Academy from Art of Problem Solving, built from beastacademy.com as read on 31 October 2026, with our own worked puzzles and a hint ladder for live tutoring.',
  courseDescription: 'Live online math classes for children aged 6 to 12 who use Beast Academy, teaching problem solving with hints rather than answers, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Beast Academy tutor',
  navLinks: [
    { href: '#what', label: 'What it is' },
    { href: '#levels', label: 'Levels and units' },
    { href: '#pace', label: 'Pacing' },
    { href: '#stuck', label: 'When stuck' },
    { href: '#puzzles', label: 'Worked puzzles' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Beast Academy Levels 1 to 5 &middot; Hints, not answers',
  h1: 'Beast Academy tutor: live help for Levels 1 to 5',
  lede: 'Families choose Beast Academy because it asks more of a child than a typical elementary book: comic-style Guides, long Practice pages and starred problems that can take a whole afternoon. That is the point of it, and also why some children stop enjoying it. A good tutor for Beast Academy does not make it easier. They keep a child inside the hard problem long enough to crack it, with the right hint at the right moment. This page sets out how the program is organised, from its own site, and how live help fits beside it.',
  secondaryCta: { href: '#puzzles', label: 'Try the worked puzzles' },
  wa: 'Hello Modern Age Coders, my child uses Beast Academy and gets stuck on the harder problems. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['Made by', 'Art of Problem Solving (AoPS)'],
    ['Ages', '6 to 13, Levels 1 to 5'],
    ['Units', 'Four per level, A to D'],
    ['Pacing', '12 to 15 days a chapter, per its FAQ'],
    ['Our help', 'Live online, beside the books'],
    ['Formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Beast Academy is an elementary math program from Art of Problem Solving for ages 6 to 13, in five levels of four units each, taught through comic-style Guide books, Practice books and BA Online. A Beast Academy tutor helps a child work through its challenging problems with hints instead of answers. Modern Age Coders teaches live online for US families, in a batch or 1-on-1, through its Elementary Math course, and the first class is free.',

  picks: {
    eyebrow: 'Live courses for Beast Academy families',
    h2: 'Three courses that work beside Beast Academy',
    lede: 'Each keeps the Beast Academy book or online level in front of the child and adds a teacher who knows when to hint and when to wait.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'BA / 01', title: 'Elementary math, grades 1 to 5', note: 'Our main course for Levels 1 to 4: number sense, multiplication, fractions, taught for depth.' },
      { course: 'middle-school-math-competitions-course', code: 'BA / 02', title: 'Math competitions', note: 'For Level 4 and 5 students who love the puzzles and want MATHCOUNTS or AMC 8 problems.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'BA / 03', title: 'Middle school math', note: 'For the step after Level 5: prealgebra, ratios and equations.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What it is',
      h2: 'What is Beast Academy, and who is it for?',
      lede: 'Beast Academy is the elementary math program of Art of Problem Solving. Its FAQ calls it a full math program for ages 6 to 13 that covers grade-level standards in more depth than most elementary curricula.',
      body: [
        { kind: 'table', caption: 'Beast Academy at a glance (beastacademy.com home, FAQ and books pages, checked 31 October 2026)', head: ['Question', 'What Beast Academy says'], rows: [
          ['Who makes it?', '"the elementary school math program created by Art of Problem Solving (AoPS)"'],
          ['Ages', 'A full math program "for kids ages 6-13"'],
          ['Standards', '"loosely based on the Common Core standards"'],
          ['Formats', 'Physical books, BA Online, or a mix of both'],
          ['Size', '"20,000+ problems, puzzles, and skill games" across books and online lessons'],
          ['Live classes', 'Video-based classes for Levels 2 to 5, learning "alongside 10-16 curious peers"'],
          ['Full or supplement?', 'Either: "a stand-alone curriculum or as a supplement to another program"'],
          ['What comes next', 'Level 5 of BA Online gives the background for AoPS prealgebra']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Guide and Practice',
          left: [
            'The books page explains the pairing. Guide books teach in an illustrated, comic-style format. Practice books "contain exercises, problems, and puzzles that reinforce the lessons taught in the Guides", with step-by-step solutions, and "Many solutions feature more than one approach."',
            'Books and BA Online "cover the same concepts in the same order of units and chapters", but the Practice books contain completely different problems from the online ones, so a child can use both without repeating work.'
          ],
          rightH3: 'Not only for advanced children',
          right: [
            'The FAQ says the program was created with accelerated learners in mind but is flexible, and that children with a wide range of abilities have used it.',
            'It also says honestly that some children use it independently while others "might need greater support as they encounter new topics and work through challenging problems." That second group is who this page is for.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://beastacademy.com/" rel="noopener" target="_blank">Beast Academy</a>, its <a class="ag-inline-link" href="https://beastacademy.com/faq" rel="noopener" target="_blank">FAQ</a> and <a class="ag-inline-link" href="https://beastacademy.com/books" rel="noopener" target="_blank">books page</a>, checked 31 October 2026. Beast Academy and Art of Problem Solving are trademarks of their owner. Modern Age Coders is not affiliated with or endorsed by Art of Problem Solving.' }
      ]
    },
    {
      id: 'levels', tint: 'deep', eyebrow: 'Levels and units',
      h2: 'What do Beast Academy Levels 1 to 5 cover?',
      lede: 'Each of the five levels is split into four units, A to D. Once a child finishes unit D of a level, the books page says they are ready for unit A of the next.',
      body: [
        { kind: 'table', caption: 'Beast Academy levels, ages and unit topics (beastacademy.com/books, checked 31 October 2026)', head: ['Level', 'Ages', 'Unit A', 'Unit B', 'Unit C', 'Unit D'], rows: [
          ['1', '6 to 8', 'Counting, shapes, comparing', 'Addition, subtraction, categories', 'Addition and subtraction, comparing, patterns', 'Big numbers, measurement, problem solving'],
          ['2', '7 to 9', 'Place value, comparing, addition', 'Subtraction, expressions, problem solving', 'Measurement, strategies, odds and evens', 'Big numbers, algorithms, problem solving'],
          ['3', '8 to 10', 'Shapes, skip-counting, perimeter and area', 'Multiplication, perfect squares, the distributive property', 'Variables, division, measurement', 'Fractions, estimation, area'],
          ['4', '9 to 12', 'Shapes, multiplication, exponents', 'Counting, division, logic', 'Factors, fractions, integers', 'Fractions, decimals, probability'],
          ['5', '10 to 13', '3D solids, integers, expressions and equations', 'Statistics, factors and multiples, fractions', 'Sequences, ratios and rates, decimals', 'Percents, square roots, exponents']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Starting a level behind',
          left: [
            'The FAQ recommends that students start "about a level &lsquo;behind&rsquo; their current grade level", because the problems are demanding. Its example: a child who is 8 or 9 should likely start with Level 2.',
            'Beast Academy also offers a placement test, which we suggest before any tutoring starts, so the teacher and the book agree on where the child is.'
          ],
          rightH3: 'Level 1 is different',
          right: [
            'Level 1 does not have separate Guide and Practice books; all of its material is combined into a single book per unit. Levels 2 to 5 each have four Guide books and four Practice books.',
            'The FAQ adds that Levels 4 and 5 "also cover many middle-grades standards", which is why some older children use them in grades 6 and 7.'
          ] }
      ]
    },
    {
      id: 'pace', tint: 'tint', eyebrow: 'Pacing',
      h2: 'How fast should a child move through Beast Academy?',
      lede: 'Slower than parents expect. The FAQ suggests 12 to 15 days per chapter, so that one level fills a 180-day school year, and it says children are not meant to do every problem.',
      body: [
        { kind: 'table', caption: 'Beast Academy&rsquo;s own pacing advice (beastacademy.com/faq, checked 31 October 2026) and what it means in practice (our reading)', head: ['What the FAQ says', 'What it means at home'], rows: [
          ['"Aim to spend 12-15 days teaching a chapter"', 'Two to three school weeks per chapter is normal, not slow'],
          ['Finish one level in 180 days', 'One level is roughly one school year'],
          ['Assign Practice "by time and not by pages"', 'Set 30 or 40 minutes, not "do pages 12 to 18"'],
          ['"some pages in the Practice books may take more than an hour"', 'A long page is not a sign of failure'],
          ['"we don\'t expect students to complete every single problem"', 'Skipping some problems is part of the design']
        ] },
        { kind: 'p', mt: true, html: 'In our experience the families who struggle most with Beast Academy are not the ones whose children find it hard. They are the ones trying to finish a set number of pages a day. Switching to a timed session, with the hardest starred problems saved for a class with the teacher, usually changes the mood within a couple of weeks.' }
      ]
    },
    {
      id: 'stuck', tint: 'deep', eyebrow: 'When stuck',
      h2: 'What should a child do when stuck on a Beast Academy problem?',
      lede: 'Beast Academy publishes its own advice, and it is good. A tutor adds a second layer: a hint ladder that gives the least help that still moves the child forward.',
      body: [
        { kind: 'two',
          leftH3: 'Beast Academy&rsquo;s advice',
          left: [
            'The FAQ says children should know that hard problems take time, and that taking a long time "does not mean that they&rsquo;re bad at math." It suggests re-reading the lesson in the Guide and the examples at the top of the Practice pages, trying something new, and using "the guiding questions at the back of the Practice book" for starred problems.',
            'And: "it&rsquo;s always okay to take a break and come back later with fresh eyes."'
          ],
          rightH3: 'What a tutor adds',
          right: [
            'A book&rsquo;s hint is the same for every child. A teacher watching the child work can see whether they misread the question, chose a poor first step or simply ran out of patience, and hint at exactly that.',
            'The aim is the same as the book&rsquo;s: the child solves it. The tutor just makes the gap between stuck and solved smaller.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>Rung 1, restate.</b> "Tell me what the problem is asking, in your own words." Many stalls end here.',
          '<b>Rung 2, smaller case.</b> "Try it with smaller numbers first." A pattern in small cases often reveals the method.',
          '<b>Rung 3, a picture.</b> "Can you draw it?" Dots, a number line or a grid.',
          '<b>Rung 4, a first step.</b> The teacher suggests one move, not the whole route.',
          '<b>Rung 5, a parked problem.</b> If it is still stuck, it goes in a notebook and comes back next class. Nobody gives the answer.'
        ] },
        { kind: 'p', mt: true, html: 'This ladder is ours; it is how our teachers work with any challenging curriculum. It sits comfortably beside Beast Academy&rsquo;s own suggestions.' }
      ]
    },
    {
      id: 'puzzles', tint: 'tint', eyebrow: 'Worked puzzles',
      h2: 'Worked puzzles in Beast Academy&rsquo;s topics, written by us',
      lede: 'Three original problems on topics the books page lists for Levels 3 to 5, worked the way we would in class. They are ours, not copied from any Beast Academy book.',
      body: [
        { kind: 'table', caption: 'Neighbor squares, a Level 3 style topic: perfect squares and the distributive property (our example)', head: ['Step', 'What the child does', 'What they notice'], rows: [
          ['1', 'Work out 13 x 13 = 169 and 12 x 14 = 168', 'They differ by exactly 1'],
          ['2', 'Try 9 x 9 = 81 and 8 x 10 = 80', 'Again 1 apart'],
          ['3', 'Draw a 13 by 13 square of dots, then move one column to make 12 by 14', 'One dot is left over'],
          ['4', 'Use the distributive property: 12 x 14 = 12 x 12 + 12 x 2 = 144 + 24 = 168', 'The algebra agrees with the drawing'],
          ['5', 'Predict 19 x 21 from 20 x 20 = 400', '399, before multiplying']
        ] },
        { kind: 'code', mt: true, label: 'neighbor_squares.py (our example)', lang: 'Python 3', code: 'for n in range(11, 16):\n    print(n, n * n, (n - 1) * (n + 1))', note: 'Output: 11 121 120, then 12 144 143, 13 169 168, 14 196 195, 15 225 224. A parent can use this to check the pattern quickly; the child should find it with dots and the distributive property first.' },
        { kind: 'two', mt: true,
          leftH3: 'Factor rectangles (a Level 4 topic)',
          left: [
            'How many different rectangles with whole-number sides have an area of 36 square units? Our worked answer: list factor pairs in order, 1 x 36, 2 x 18, 3 x 12, 4 x 9, 6 x 6, and stop when the pairs start repeating. Five rectangles, if a 4 by 9 and a 9 by 4 count as the same shape.',
            'The thinking move is the stopping rule: once the first factor passes the square root, every pair has already appeared.'
          ],
          rightH3: 'A growing sequence (a Level 5 topic)',
          right: [
            'What is the 50th term of 4, 7, 10, 13, and so on? Our worked answer: each step adds 3, and the 50th term is 49 steps after the first, so 4 + 49 x 3 = 151.',
            'The common slip is 50 x 3 + 4 = 154: counting terms instead of steps. Asking "how many jumps from the 1st to the 3rd term?" fixes it.'
          ] },
        { kind: 'table', mt: true, caption: 'Practice set in the same spirit (ours; answers in brackets)', head: ['Problem', 'Hint if stuck'], rows: [
          ['21 x 19 without a calculator', 'Start from 20 x 20 (399)'],
          ['Which is bigger, 30 x 30 or 29 x 31? By how much?', 'Neighbor squares (30 x 30, by 1)'],
          ['How many rectangles with whole-number sides have area 24?', 'List factor pairs (4)'],
          ['The 50th term of 2, 7, 12, 17, and so on', 'Count the jumps (247)'],
          ['99 x 101', 'Neighbor squares around 100 (9,999)']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages of working with a challenging curriculum',
    lede: 'Our description of how children grow into Beast Academy-style problems.',
    table: { caption: 'Stages of problem-solving stamina (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Answer-seeking', 'Wants the method before trying; upset by a long problem'],
      ['2. Trying', 'Makes an attempt, gives up after a few minutes'],
      ['3. Exploring', 'Tries small cases and drawings without being asked'],
      ['4. Enjoying', 'Chooses the starred problems first']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 is where most families ask for a tutor. The goal is time on the problem, not speed.',
      'Praise the attempt and the drawing, not only the answer.'
    ] },
    right: { h3: 'For children', ps: [
      'Being stuck is part of the problem. It means you are at the interesting bit.',
      'Try the problem with smaller numbers. It works surprisingly often.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for curious young mathematicians',
    lede: 'From early number sense to competitions, taught live with plenty of thinking time.',
    bands: [
      { num: 'I', h3: 'Early years', sub: 'Ages 6 to 8', courses: [
        { code: 'BA / E / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Hands-on number sense.' },
        { code: 'BA / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Patterns, not tricks.' },
        { code: 'BA / E / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5 in depth.' }
      ] },
      { num: 'II', h3: 'Problem solvers', sub: 'Ages 9 to 12', courses: [
        { code: 'BA / P / 01', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'MATHCOUNTS and AMC 8.' },
        { code: 'BA / P / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Test patterns in Python.' },
        { code: 'BA / P / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Prealgebra and beyond.' }
      ] },
      { num: 'III', h3: 'Further on', sub: 'Ages 12 and up', courses: [
        { code: 'BA / F / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'AMC 10 and higher.' },
        { code: 'BA / F / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra 1 properly.' },
        { code: 'BA / F / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Through to calculus.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes with room to think',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, with the week&rsquo;s parked problems.' },
      { time: 'Weekends', l: 'Longer sessions for the starred pages.' },
      { time: '1-on-1', l: 'Paced to your level and unit.' }
    ],
    cells: [
      { h3: 'Hint ladder', p: 'The smallest hint that still helps.' },
      { h3: 'Book stays central', p: 'Guide and Practice on the desk.' },
      { h3: 'Original puzzles', p: 'Extra problems written by our teachers.' },
      { h3: 'No answer sheets', p: 'The child solves it.' },
      { h3: 'All US time zones', p: 'Times around school and homeschool.' },
      { h3: 'Batch or private', p: 'A class of fifteen to twenty, or one child.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Some puzzle lovers go on to code. See a few of their projects on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Live classes alongside Beast Academy are billed monthly in US dollars, with no annual commitment, so families can add help for a demanding level and pause afterwards.',
    free: ['A free first class', 'Bring a starred problem', 'No card needed'],
    group: ['Fifteen to twenty children', 'A steady teacher', 'Choose your batch', 'Billed monthly'],
    one: ['Your child and one teacher', 'Matched to their unit', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Beast Academy tutoring: common questions',
    items: [
      { q: 'Do you offer a Beast Academy tutor online?', a: 'Yes. Our teachers work live by video with your child\'s Beast Academy Guide and Practice books or BA Online, using hints rather than answers. Classes run as a batch of 15 to 20 or one to one.' },
      { q: 'Who makes Beast Academy?', a: 'Beast Academy is the elementary math program created by Art of Problem Solving (AoPS). Its FAQ describes it as a full math program for ages 6 to 13. We are independent and not affiliated with AoPS.' },
      { q: 'What level of Beast Academy should my child start?', a: 'The Beast Academy FAQ suggests starting about a level behind the child\'s current grade, so a child of 8 or 9 would usually begin at Level 2. It also offers a placement test, which we recommend.' },
      { q: 'How long should a Beast Academy chapter take?', a: 'The FAQ suggests 12 to 15 days per chapter, so that one level fills a 180-day school year. It recommends assigning Practice by time rather than by pages.' },
      { q: 'Does my child need to do every Beast Academy problem?', a: 'No. The FAQ says the curriculum has a lot of material and children are not expected to complete every problem. Some Practice pages can take more than an hour.' },
      { q: 'My child gets upset on hard problems. What helps?', a: 'Beast Academy advises re-reading the Guide, using the guiding questions at the back of the Practice book and taking breaks. A tutor adds hints tailored to the exact point where your child is stuck.' },
      { q: 'Is Beast Academy aligned to Common Core?', a: 'Its FAQ says Beast Academy is loosely based on the Common Core standards and covers the key topics for grades 1 to 5 in greater depth, with Levels 4 and 5 also covering many middle-grade standards.' },
      { q: 'What comes after Beast Academy Level 5?', a: 'Beast Academy says a child who completes Level 5 of BA Online has the background for AoPS prealgebra. Our middle school and competitions courses are also a natural next step.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Will the tutor give my child the answers?', a: 'No. Our teachers use a hint ladder that gives the least help needed. A problem that is still unsolved is parked for next time rather than answered.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families of children who love a hard problem.',
    items: [
      { href: '/math-competitions-for-middle-school-students', label: 'Math competitions for middle school', p: 'Contests to try after Level 5.' },
      { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation', p: 'Team and individual problem solving.' },
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'Multiplication and early fractions.' },
      { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math tutoring', p: 'Factors, fractions and multi-digit work.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'Building a math plan for home learning.' },
      { href: '/math-olympiad-amc-tutoring', label: 'Olympiad and AMC tutoring', p: 'For older students who want the hardest problems.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the Beast Academy level and unit, and send a photo of a problem that beat your child this week. The teacher will start there.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how our teachers guide a lesson</a>, or browse <a class="ag-inline-link" href="/courses">every course we teach</a>.',
    note: 'Our teachers work from India and teach American children live, at hours that fit school evenings and weekend mornings across the US. WhatsApp reaches us fastest.',
    formNote: 'The first class costs nothing and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Math help', links: [
        { href: '/online-math-tutor-3rd-grade', label: 'Third grade math' },
        { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math' },
        { href: '/online-math-tutor-5th-grade', label: 'Fifth grade math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS' },
        { href: '/math-competitions-for-middle-school-students', label: 'Math competitions' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '13 x 13, one more than 12 x 14'
  },

  personalityCss: `
.ag-root.ag-ba .ag-hero h1 { letter-spacing: -0.015em; max-width: 20ch; }
.ag-root.ag-ba .ag-capsule { border-left-width: 6px; border-radius: 8px; }
.ag-root.ag-ba .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ba .ag-table td { font-variant-numeric: tabular-nums; line-height: 1.5; }
.ag-root.ag-ba .ag-steps li { margin-bottom: 10px; }
`,

  dossier: {
    curriculumAuthority: 'Beast Academy (Art of Problem Solving), beastacademy.com home, FAQ, books and online pages, read raw 31 October 2026: created by AoPS; ages 6 to 13; loosely based on Common Core; start about a level behind (8 or 9 year old, Level 2); 12 to 15 days a chapter, a level in 180 days; Practice by time not pages; some pages over an hour; not every problem expected; stuck advice and guiding questions at the back of the Practice book; Levels 1 to 5 split into units A to D with ages and unit topics; Level 1 combined books; Guide and Practice roles; books and online in the same order with different Practice problems; 20,000+ problems; live classes for Levels 2 to 5 with 10 to 16 peers; Level 5 leads to AoPS prealgebra.',
    localProject: 'Our neighbor-squares lesson (13 x 13 = 169 against 12 x 14 = 168 by dots and the distributive property, 19 x 21 = 399 predicted), a Python check for n = 11 to 15, the factor rectangles of area 36 (five), the 50th term of 4, 7, 10 (151), a five-rung hint ladder and a practice set. Lesson family: neighbor squares through the distributive property.',
    requiredMentions: [
      'the elementary school math program created by Art of Problem Solving (AoPS)',
      'loosely based on the Common Core standards',
      'Aim to spend 12-15 days teaching a chapter',
      'some pages in the Practice books may take more than an hour',
      'the guiding questions at the back of the Practice book',
      'Many solutions feature more than one approach.',
      'cover the same concepts in the same order of units and chapters',
      'alongside 10-16 curious peers',
      '12 x 14 = 12 x 12 + 12 x 2 = 144 + 24 = 168',
      '4 + 49 x 3 = 151'
    ],
    sources: [
      { claim: 'Beast Academy overview, AoPS, problem count, live classes.', url: 'https://beastacademy.com/' },
      { claim: 'Beast Academy FAQ: ages, standards, placement, pacing, getting stuck, next steps.', url: 'https://beastacademy.com/faq' },
      { claim: 'Beast Academy books: levels, ages, units A to D and topics.', url: 'https://beastacademy.com/books' },
      { claim: 'Beast Academy Online: lessons and parent reporting.', url: 'https://beastacademy.com/online' }
    ],
    rejectedClaims: [
      'Beast Academy prices, subscription and bundle terms: not used.',
      'The customer satisfaction percentage and testimonials on beastacademy.com: not repeated.',
      'Names of AoPS staff, video hosts and puzzle authors: not used.',
      'That a tutor makes a child gifted, raises test scores or speeds up a level: refused.',
      'Any affiliation with Art of Problem Solving or Beast Academy: none, stated on the page.',
      'Beast Academy placement test content: not reproduced; the page links to Beast Academy instead.'
    ]
  }
};
