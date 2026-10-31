'use strict';
// Bebras Challenge practice, USA (ag- competition guide; UK and US exams cluster Phase 2, row US077, writer group B16).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md, rule 8 (never reproduce tasks). Every fact read raw
// with curl -A "Mozilla/5.0" on 31 October 2026; copies in keyword-research-2026-09/uk-us-gap/src/bebras-challenge-practice/:
//  - USA Bebras Computing Challenge home (https:__www.bebraschallenge.org_, home.txt): "The Bebras Challenge USA 2026 is
//    scheduled for November 9–20!" (en dash in source, written "November 9 to 20, 2026"); "Participating in the challenge
//    is free, and the tasks can all be completed without any preparation or studying."; "Students aged 6 to 18"; "45
//    minutes to complete as many tasks as they can, they are not expected to finish them all"; six age categories with
//    easy, medium and hard task counts (Kits 6-8: 3/3/3; Castors 8-10: 4/4/4; Benjamins 10-12, Cadets 12-14, Juniors
//    14-16, Seniors 16-18: 5/5/5); skills "breaking down complex tasks, algorithm design, pattern recognition,
//    generalization, and abstraction"; "World-wide Bebras week for task solving occurs during the second week of November."
//  - Students page (students.txt): teacher registers as coordinator; "You will participate online in your own school
//    building. A teacher will supervise and it will take 45 minutes."; "You get 15 multiple-choice questions and the
//    maximum score is 180."; "you can use pen, paper and any calculator you want"; categories A, B, C; "You start with 45
//    points"; A +6 / 0 / -2, B +9 / 0 / -3, C +12 / 0 / -4; teacher downloads PDF certificates.
//  - Teachers page (teachers.txt): needs internet and computers or tablets with Windows, Mac or Linux; recommends entering
//    all students in a year group "because one of the objectives of this challenge is to discover aptitude"; "one of the
//    ten days during the weeks of the challenge"; solutions online after participation.
//  - Registration page (registration.txt): processing "may take 1-3 business days"; homeschool teachers pick a distinctive
//    name such as "Home School [initials]".
//  - Examples page (examples.txt): "Though there is no need to prepare for the contest, you might want to get a feel for
//    the style of the Bebras tasks."; sample questions by age group and a practice challenge.
//  - bebras.org (bebras.org.html): meta description "organizer of the International Challenge on Informatics and
//    Computational Thinking" (the page itself is a JavaScript app; only the meta description is used).
// Our own material, labelled on the page: the rail-siding stack puzzle (5 of the 6 orders of three cars possible, 3-1-2
// impossible; 14 of 24 for four cars, enumerated by us in Python), the scoring arithmetic (floor of 0 = 45 - 10 - 15 - 20;
// blind-guess expected value 0 on four choices, 2/3, 1 and 4/3 points after ruling one out, computed with fractions), the
// practice set (lamps 8 + 4 + 1 = 13, the 20th shape, shortest road 5, two neighbour swaps, 14 orders), the six-week plan.
// No Bebras task reproduced or imitated; no beaver-themed look-alike. Lesson family: a stack, last in first out.
// Rejected: the teachers page says the challenge "is graded out of a total of 90 marks", which conflicts with the students
// page maximum of 180; only the students page figure is printed.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SIDING = `# siding.py (ours): which orders can three rail cars leave in, using one dead-end siding?
from itertools import permutations

def possible(order, n):
    siding, next_car = [], 1
    for wanted in order:
        # push cars into the siding until the wanted car is on top
        while (not siding or siding[-1] != wanted) and next_car <= n:
            siding.append(next_car)
            next_car += 1
        if siding and siding[-1] == wanted:
            siding.pop()          # the top car leaves first: last in, first out
        else:
            return False
    return True

for order in permutations([1, 2, 3]):
    print(order, possible(order, 3))`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'The USA Bebras Computing Challenge, November 9 to 20, 2026: age groups, the 45-minute format, how scoring works, and original computational thinking practice.' },
  slug: 'bebras-challenge-practice',
  code: 'bcp',
  accent: '#2F5004',
  accentRationale: 'Bebras Challenge practice: the allocated deep moss green #2F5004, calm and outdoorsy; about 9.4:1 on the #FBF8F2 paper, far above the 4.5:1 floor',
  pageType: 'market',
  market: US,
  routeLabel: 'Bebras Challenge practice',
  title: 'Bebras Challenge Practice (USA 2026): Format, Scoring, Puzzles',
  description: 'Bebras Challenge practice for the USA 2026 challenge, November 9 to 20: age groups, the 45-minute format, how scoring works and original thinking puzzles.',
  ogDescription: 'The USA Bebras Computing Challenge needs no study, but knowing the format and how the scoring works helps. Dates, age groups, the plus and minus points, and original computational thinking puzzles with answers.',
  twitterDescription: 'Bebras USA 2026, November 9 to 20: format, scoring and original practice puzzles.',
  pageName: 'Bebras Challenge Practice (USA)',
  webPageDescription: 'A guide for US students, parents and homeschool teachers to the USA Bebras Computing Challenge: 2026 dates, the six age categories, the 45-minute online format, the A, B and C scoring rules, how to register, and original computational thinking puzzles labelled as ours.',
  courseDescription: 'Live online problem-solving and computational thinking classes for US children aged 6 to 14: patterns, algorithms, logic and first code, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Bebras Challenge practice',
  navLinks: [
    { href: '#what', label: 'Bebras USA' },
    { href: '#groups', label: 'Age groups' },
    { href: '#scoring', label: 'Scoring' },
    { href: '#siding', label: 'A puzzle' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 6 to 18 &middot; Bebras Computing Challenge',
  h1: 'Bebras Challenge practice for US students',
  lede: 'The organizers of the USA Bebras Computing Challenge say something most contests never would: students do not need to prepare. They are right, and this page will not pretend otherwise. What helps is knowing the format, understanding how the plus and minus points work, and having met the big ideas of computational thinking before, in puzzles of your own. Here are the 2026 facts from bebraschallenge.org, the scoring explained with our own arithmetic, and original puzzles with full reasoning.',
  secondaryCta: { href: '#practice', label: 'Jump to the practice puzzles' },
  wa: 'Hello Modern Age Coders, my child in the US is taking part in the Bebras Challenge and loves logic puzzles. Could we book a free first class?',
  heroNote: 'Teaching coding and math live since 2020 &middot; 10,000+ students &middot; ages 6 to 67',
  spec: [
    ['Organizer', 'USA Bebras Computing Challenge'],
    ['2026 dates', 'November 9 to 20, 2026'],
    ['Ages', '6 to 18, six categories'],
    ['Time', '45 minutes, online at school'],
    ['Cost', 'Free'],
    ['Our lessons', 'Live online, batch or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The USA Bebras Computing Challenge is a free, 45-minute online contest in computational thinking for students aged 6 to 18, held in schools; in 2026 it runs from November 9 to 20. A teacher or homeschool parent signs up as coordinator. No study is required, but puzzle practice builds the thinking it rewards. Our live online course, Problem Solving and Computational Thinking for Kids, teaches exactly that, with a group of 15 to 20 or one to one, and a free trial lesson.',

  picks: {
    eyebrow: 'Thinking, then code',
    h2: 'Three courses that grow the thinking Bebras rewards',
    lede: 'Each one teaches children to break a problem down, spot the pattern and plan the steps before acting.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'BCP / 01', title: 'Problem solving and computational thinking', note: 'Logic, patterns and algorithms for ages 8 to 14.' },
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'BCP / 02', title: 'Young thinkers, 6 to 9', note: 'For Kits and Castors: patterns and spatial play.' },
      { course: 'python-ai-kids-masterclass', code: 'BCP / 03', title: 'Python and AI for kids', note: 'Turn the puzzle ideas into real programs.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'Bebras USA',
      h2: 'What is the Bebras Computing Challenge in the USA?',
      lede: 'It is a short, free online challenge of computational thinking tasks, taken at school under a teacher\'s supervision. It is part of an international initiative; bebras.org describes its organization as the "organizer of the International Challenge on Informatics and Computational Thinking".',
      body: [
        { kind: 'two',
          leftH3: 'From the US organizer',
          left: [
            'For this year the US organizer gives a two-week window, November 9 to 20, 2026, and its home page stresses two things: entry costs nothing, and children need no special preparation or study to tackle the tasks.',
            'Students aged 6 to 18 get 45 minutes "to complete as many tasks as they can, they are not expected to finish them all." The site adds that the worldwide Bebras week for task solving "occurs during the second week of November."'
          ],
          rightH3: 'What computational thinking means here',
          right: [
            'The organizer describes computational thinking as problem-solving skills that software engineers apply in programming, and lists "breaking down complex tasks, algorithm design, pattern recognition, generalization, and abstraction".',
            'No coding is needed to take part. The tasks are short puzzles that use those ideas, which is why a child who has never programmed can still do well.'
          ] },
        { kind: 'table', mt: true, caption: 'How to take part in Bebras USA (bebraschallenge.org Students, Teachers and Registration pages, read 31 October 2026)', head: ['Step', 'Who', 'What the organizer says'], rows: [
          ['1. Register', 'Teacher or homeschool parent', 'Register as a coordinator; approval "may take 1-3 business days"'],
          ['2. Enter students', 'Coordinator', 'Creates a log-in for each student'],
          ['3. Set up devices', 'School', 'An internet connection and computers or tablets with Windows, Mac or Linux'],
          ['4. Run the challenge', 'Teacher supervises', 'On one of the ten school days of the challenge weeks; 45 minutes each'],
          ['5. Results', 'Coordinator', 'Downloads certificates with each score; solutions go online afterward']
        ] },
        { kind: 'p', mt: true, html: 'Homeschool families can take part: the registration page asks a homeschool teacher to "select a distinctive name for your homeschool (e.g., Home School [initials], Home School [number], etc.)". Students cannot register themselves; their teacher or parent coordinator does it.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.bebraschallenge.org/" rel="noopener" target="_blank">USA Bebras Computing Challenge</a> (home, Students, Teachers, Registration and Examples pages) and <a class="ag-inline-link" href="https://www.bebras.org/" rel="noopener" target="_blank">bebras.org</a>, read 31 October 2026. Bebras is a registered trademark of its owner. Modern Age Coders is not connected with Bebras USA, the international Bebras organization or any school.' }
      ]
    },
    {
      id: 'groups', tint: 'deep', eyebrow: 'Age groups',
      h2: 'Which Bebras age group is my child in, and how many tasks are there?',
      lede: 'Bebras USA has six age categories, each with its own tasks split into easy, medium and hard. The youngest groups get fewer tasks in the same 45 minutes.',
      body: [
        { kind: 'table', caption: 'The six Bebras USA groups, youngest first, with the task mix the organizer lists for each (bebraschallenge.org home page, read 31 October 2026)', head: ['Bebras group', 'Age band', 'Task mix by difficulty', 'Typical US grades (our rough guide)'], rows: [
          ['Kits', 'Ages 6 to 8', 'Three easy, three medium, three hard', 'Grades 1 to 2'],
          ['Castors', 'Ages 8 to 10', 'Four of each difficulty', 'Grades 3 to 4'],
          ['Benjamins', 'Ages 10 to 12', 'Five of each difficulty', 'Grades 5 to 6'],
          ['Cadets', 'Ages 12 to 14', 'Five of each difficulty', 'Grades 7 to 8'],
          ['Juniors', 'Ages 14 to 16', 'Five of each difficulty', 'Grades 9 to 10'],
          ['Seniors', 'Ages 16 to 18', 'Five of each difficulty', 'Grades 11 to 12']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table',
          left: [
            'From Benjamins up, the students page describes the familiar format: "You get 15 multiple-choice questions and the maximum score is 180." The Kits and Castors groups have fewer tasks, so there is more time for each one.',
            'Ages overlap at the edges (8 appears for both Kits and Castors). The coordinator places each student; when in doubt, ask the teacher which group they chose.'
          ],
          rightH3: 'On the day',
          right: [
            'The students page says "You will participate online in your own school building. A teacher will supervise and it will take 45 minutes." It also says "you can use pen, paper and any calculator you want".',
            'That pen-and-paper permission matters. Many tasks become easy once you draw the situation, and children who sketch tend to make fewer slips.'
          ] }
      ]
    },
    {
      id: 'scoring', tint: 'tint', eyebrow: 'Scoring',
      h2: 'How is the Bebras Challenge scored, and should you guess?',
      lede: 'Every student starts with 45 points. Right answers add points, wrong answers take some away, and a blank costs nothing. That design changes how a sensible student should treat a question she cannot solve.',
      body: [
        { kind: 'table', caption: 'Bebras USA scoring rules (bebraschallenge.org Students page, read 31 October 2026)', head: ['Category', 'Tasks', 'Correct', 'No answer', 'Incorrect'], numCols: [1, 2, 3, 4], rows: [
          ['A (easier)', '5', '+6', '0', '-2'],
          ['B (medium)', '5', '+9', '0', '-3'],
          ['C (harder)', '5', '+12', '0', '-4'],
          ['Starting score', '', '45', '', '']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why start at 45? (our arithmetic)',
          left: [
            'If a student answered all 15 questions wrongly she would lose 5 x 2 + 5 x 3 + 5 x 4 = 10 + 15 + 20 = 45 points. Starting at 45 means the lowest possible score is exactly 0, never negative. The published maximum is 180.',
            'In each category the penalty is one third of the reward: 2 of 6, 3 of 9, 4 of 12. That ratio is what makes the guessing question interesting.'
          ],
          rightH3: 'To guess or not (our arithmetic)',
          right: [
            'Suppose a question has four choices and you have no idea. A blind guess in category A is right one time in four: on average 6 / 4 - 2 x 3 / 4 = 1.5 - 1.5 = 0. Guessing blind gains nothing on average, in every category.',
            'Now rule out one choice. With three left, category A averages 6 / 3 - 2 x 2 / 3 = 2/3 of a point, B averages 1 point, and C averages 4/3. So: skip what you cannot touch, but guess once you can eliminate even one answer.'
          ] },
        { kind: 'source', html: 'Scoring rules from the <a class="ag-inline-link" href="https://bebraschallenge.org/students/" rel="noopener" target="_blank">Bebras USA Students page</a>, read 31 October 2026. The four-choice assumption and the averages are our own calculations, checked with exact fractions in Python; the number of choices can differ from task to task.' }
      ]
    },
    {
      id: 'siding', tint: 'deep', eyebrow: 'A puzzle',
      h2: 'What does a computational thinking puzzle look like? A worked example',
      lede: 'Here is an original puzzle of ours about a stack, one of the most useful ideas in computer science. It is not a Bebras task and does not imitate one; it simply uses the same kind of thinking.',
      body: [
        { kind: 'two',
          leftH3: 'The puzzle (ours)',
          left: [
            'Three rail cars, numbered 1, 2 and 3, arrive from the right in that order. Each car can either roll straight on to the left track or back into a short dead-end siding. A car can only leave the siding if it is the one nearest the exit, so the last car in is the first car out.',
            'The left track must end up with the cars in a chosen order. Which of the six possible orders can be made? One of them cannot. Which, and why?'
          ],
          rightH3: 'The reasoning',
          right: [
            'Try 3, 1, 2. To send car 3 first, cars 1 and 2 must both wait in the siding, with car 2 nearest the exit. The next car out of the siding must therefore be 2, not 1. So 3, 1, 2 is impossible.',
            'Every other order works. For 2, 3, 1: park 1, send 2, send 3, then release 1. Five of the six orders are possible. Our Python check below confirms it, and for four cars it finds 14 possible orders out of 24.'
          ] },
        { kind: 'code', label: 'siding.py (ours)', lang: 'Python', code: SIDING, note: 'Run by us with Python 3: every order prints True except (3, 1, 2), which prints False.' },
        { kind: 'ol', mt: true, items: [
          '<b>Draw it.</b> Sketch the tracks and move numbered scraps of paper. A puzzle that is hard in your head is often easy on paper.',
          '<b>Name the rule.</b> "Last in, first out" is the whole puzzle. Computer scientists call a structure with this rule a stack.',
          '<b>Look for the blocker.</b> An order fails when a smaller car is trapped behind a bigger one that has to leave later.',
          '<b>Generalize.</b> Ask what happens with four cars. Generalization is one of the skills the organizer names.'
        ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice',
      h2: 'How can my child practice for Bebras without drilling?',
      lede: 'Try the organizer\'s own practice challenge once to meet the format, then spend the rest of the time on varied puzzles and a little code. The Examples page itself says there is "no need to prepare", only to get a feel for the style.',
      body: [
        { kind: 'table', caption: 'Five original practice puzzles with answers (ours; answers checked in Python)', head: ['Puzzle', 'Idea', 'Answer'], rows: [
          ['Five lamps are worth 16, 8, 4, 2 and 1. Which lamps are on to show 13?', 'Binary: biggest first', '8, 4 and 1'],
          ['Shapes go circle, square, square, circle, square, square ... What is the 20th?', 'Pattern of length 3; 20 leaves remainder 2', 'Square'],
          ['Roads: A to B 2, B to C 1, C to D 2, A to C 4, B to D 5. Shortest A to D?', 'Compare every route', '5, via B and C'],
          ['Cards read 3, 1, 2. Swapping only neighbors, fewest swaps to reach 1, 2, 3?', 'Count pairs out of order', '2'],
          ['With four rail cars and one siding, how many leaving orders are possible?', 'The stack rule again', '14 of 24']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Weeks 1 to 2 (ours).</b> Patterns and sequences: repeating shapes, number patterns, spotting the rule.',
          '<b>Weeks 3 to 4.</b> Algorithms: following and writing step-by-step instructions, shortest routes, sorting cards by hand.',
          '<b>Week 5.</b> Data and abstraction: binary lamps, maps that keep only what matters, stacks and queues.',
          '<b>Week 6.</b> Try the official practice challenge from the Examples page once, timed, then talk through what was hard. Rest before the real day.'
        ] },
        { kind: 'p', mt: true, html: 'Taking Bebras in another country? See our <a class="ag-inline-link" href="/bebras-computational-thinking-challenge-practice-uk">UK Bebras guide</a> or our <a class="ag-inline-link" href="/bebras-challenge-australia-practice">Bebras Australia guide</a>. For the whole US season of contests, see the <a class="ag-inline-link" href="/us-coding-math-and-ai-competitions-calendar">US competitions calendar</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages of puzzle thinking',
    lede: 'Our own description of how children grow as problem solvers.',
    table: { caption: 'Stages of solving a logic puzzle (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Guesses', 'Picks the answer that looks right without testing it'],
      ['2. Tries cases', 'Tests choices one at a time until one works'],
      ['3. Finds the rule', 'Spots the constraint that rules choices out quickly'],
      ['4. Explains and extends', 'Can say why an answer must be right, and what happens with bigger cases']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 is a fine place to be at age 8. The step to stage 3 comes from talking about puzzles, not from doing more of them silently.',
      'Ask "how do you know?" more often than "what is the answer?".'
    ] },
    right: { h3: 'For students', ps: [
      'If a puzzle feels stuck, draw it, or try the smallest version first: two cars before three.',
      'A blank costs nothing in Bebras. Come back to hard questions at the end.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Thinking, math and coding courses for ages 6 to 18',
    lede: 'Live courses that build logic first and code second, for every Bebras age group.',
    bands: [
      { num: 'I', h3: 'Kits and Castors', sub: 'Ages 6 to 10', courses: [
        { code: 'BCP / K / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Patterns and spatial play.' },
        { code: 'BCP / K / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Algorithms in blocks.' },
        { code: 'BCP / K / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Quick number sense.' }
      ] },
      { num: 'II', h3: 'Benjamins and Cadets', sub: 'Ages 10 to 14', courses: [
        { code: 'BCP / B / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Logic and algorithms.' },
        { code: 'BCP / B / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Puzzles in Python.' },
        { code: 'BCP / B / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'MATHCOUNTS and AMC 8.' }
      ] },
      { num: 'III', h3: 'Juniors and Seniors', sub: 'Ages 14 to 18', courses: [
        { code: 'BCP / S / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Beginner to advanced.' },
        { code: 'BCP / S / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Classes and data structures.' },
        { code: 'BCP / S / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad math', blurb: 'AMC and beyond.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live problem-solving lessons, any time of the school year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, one puzzle theme per lesson.' },
      { time: 'Weekends', l: 'Longer sessions mixing puzzles and code.' },
      { time: '1-on-1', l: 'For a child who wants more stretch.' }
    ],
    cells: [
      { h3: 'Think aloud', p: 'Students explain, not just answer.' },
      { h3: 'Draw first', p: 'Sketching is taught as a skill.' },
      { h3: 'Puzzles we wrote', p: 'Never copied contest tasks.' },
      { h3: 'Then code it', p: 'Ideas become small programs.' },
      { h3: 'No prize promises', p: 'We teach thinking; results are theirs.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'What our young problem solvers build',
  projectsLede: 'Puzzle games and first programs made in our classes. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, shown as written.',

  fees: {
    h2: 'Fees',
    lede: 'Problem-solving lessons are billed monthly with nothing locked in, so a family can try a term of puzzles around challenge season and carry on only if it is useful.',
    free: ['A free first class', 'A puzzle-based trial', 'No card details'],
    group: ['Fifteen to twenty learners', 'A steady teacher', 'Choose a batch time', 'Monthly'],
    one: ['A private teacher', 'Paced to your child', 'Flexible scheduling']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Bebras Challenge practice: questions answered',
    items: [
      { q: 'When is the Bebras Challenge 2026 in the USA?', a: 'The USA Bebras site says the 2026 challenge is scheduled for November 9 to 20, 2026. Schools choose one of the ten school days in that window to run it.' },
      { q: 'How do you prepare for the Bebras Challenge?', a: 'The organizer says no preparation or studying is needed. The useful step is trying the official practice challenge once to meet the format, plus regular logic puzzles that build pattern spotting, step-by-step planning and abstraction.' },
      { q: 'How long is the Bebras Challenge?', a: 'It lasts 45 minutes. Students try as many tasks as they can, and the organizer says they are not expected to finish them all.' },
      { q: 'How is Bebras scored?', a: 'Every student starts with 45 points. Easier A tasks give 6 points for a right answer and take 2 for a wrong one, B tasks give 9 or take 3, C tasks give 12 or take 4, and a blank scores 0. The students page gives a maximum of 180.' },
      { q: 'Should my child guess on Bebras?', a: 'By our own calculation, a blind guess among four choices gains nothing on average because of the penalty. Once one choice can be ruled out, guessing becomes worthwhile on average, so leave blanks only where nothing can be eliminated.' },
      { q: 'Is the Bebras Challenge free?', a: 'Yes. The USA Bebras site says participating in the challenge is free.' },
      { q: 'Can homeschoolers take part in Bebras?', a: 'Yes. A homeschool parent registers as a coordinator, and the registration page asks for a distinctive name such as Home School followed by your initials. Approval may take 1 to 3 business days.' },
      { q: 'Which Bebras group is for a 9-year-old?', a: 'Bebras USA lists Castors for ages 8 to 10, with four easy, four medium and four hard tasks. The coordinator makes the final placement.' },
      { q: 'What times are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Bebras?', a: 'No. We are an independent online school with no link to Bebras USA or the international Bebras organization. Our puzzles are our own, and we never reproduce Bebras tasks.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More contests and thinking skills for US students.',
    items: [
      { href: '/us-coding-math-and-ai-competitions-calendar', label: 'US competitions calendar', p: 'Every 2026 to 2027 date in one place.' },
      { href: '/coding-competitions-for-middle-school-students', label: 'Coding competitions for middle school', p: 'What comes after Bebras.' },
      { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo USA', p: 'Another friendly first contest.' },
      { href: '/computer-science-extracurriculars', label: 'Computer science extracurriculars', p: 'Clubs, contests and projects.' },
      { href: '/coding-classes-for-elementary-students', label: 'Coding for elementary students', p: 'Algorithms for young learners.' },
      { href: '/bebras-computational-thinking-challenge-practice-uk', label: 'Bebras in the UK', p: 'The UK challenge and its follow-on round.' }
    ]
  },

  start: {
    h2: 'Book a free problem-solving class',
    lede: 'Tell us your child\'s age and which Bebras group they are in. The teacher will start with a puzzle at the right level and see how they think.',
    readFirst: 'You may want to look at <a class="ag-inline-link" href="/how-we-teach">the way we teach</a> or the full <a class="ag-inline-link" href="/courses">course list</a> first.',
    note: 'Lessons are live on video, taught from India, at hours that fit US time zones. Send us a WhatsApp for the quickest reply.',
    formNote: 'There is no charge for the first class and no card is requested.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/us-coding-math-and-ai-competitions-calendar', label: 'US contest calendar' },
        { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo USA' },
        { href: '/coding-competitions-for-middle-school-students', label: 'Middle school coding contests' },
        { href: '/coding-competitions-for-high-school-students', label: 'High school coding contests' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/coding-classes-for-elementary-students', label: 'Elementary coding' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '3, 1, 2 cannot leave the siding'
  },

  personalityCss: `
.ag-root.ag-bcp .ag-hero h1 { letter-spacing: -0.01em; max-width: 20ch; }
.ag-root.ag-bcp .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-bcp .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-bcp .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-bcp .ag-section-head h2 { max-width: 30ch; }
`,

  dossier: {
    curriculumAuthority: 'USA Bebras Computing Challenge pages read raw 31 October 2026: home (2026 dates November 9 to 20, free, no preparation needed, ages 6 to 18, 45 minutes, six age categories with task counts, computational thinking skills, second week of November), Students (format, 15 questions, maximum 180, pen and paper, scoring rules, certificates), Teachers (devices, whole year group, ten days, solutions), Registration (1 to 3 business days, homeschool naming), Examples (practice challenge); bebras.org meta description.',
    localProject: 'Our rail-siding stack puzzle (3, 1, 2 impossible; 5 of 6 orders, 14 of 24 for four cars, enumerated in Python), the scoring arithmetic (floor 0, blind guess average 0, 2/3, 1 and 4/3 after eliminating one of four), five practice puzzles with answers and the six-week plan. Lesson family: a stack, last in first out.',
    requiredMentions: ['Three easy, three medium, three hard', 'Typical US grades (our rough guide)', 'they are not expected to finish them all', 'breaking down complex tasks, algorithm design, pattern recognition, generalization, and abstraction', 'You get 15 multiple-choice questions and the maximum score is 180.', 'you can use pen, paper and any calculator you want', 'Home School [initials]', 'siding.py (ours)', '3, 1, 2 is impossible'],
    sources: [
      { claim: 'USA Bebras home: 2026 dates, free, ages, 45 minutes, age categories, skills.', url: 'https://www.bebraschallenge.org/' },
      { claim: 'USA Bebras Students: format, maximum score, scoring rules, certificates.', url: 'https://bebraschallenge.org/students/' },
      { claim: 'USA Bebras Teachers: devices, whole year group, ten days, solutions.', url: 'https://www.bebraschallenge.org/teachers' },
      { claim: 'USA Bebras Registration: processing time, homeschool naming.', url: 'https://bebraschallenge.org/registration/' },
      { claim: 'USA Bebras Examples: no need to prepare, practice challenge.', url: 'https://bebraschallenge.org/examples/' },
      { claim: 'bebras.org: international organizer description.', url: 'https://www.bebras.org/' }
    ],
    rejectedClaims: [
      'The Teachers page states the challenge "is graded out of a total of 90 marks", which conflicts with the Students page maximum of 180; only the Students page figure is printed.',
      'The number of answer choices per task is not published on these pages; our guessing averages assume four choices and say so.',
      'Bebras sample questions and the practice challenge: linked, never reproduced or imitated; our puzzles avoid the Bebras beaver theme.',
      'bebras.org content beyond its meta description: the site is a JavaScript app with no readable text in the raw HTML.',
      'Award levels and percentile cut-offs: not published on the pages read, so none printed; no score or award promise made.'
    ]
  }
};
