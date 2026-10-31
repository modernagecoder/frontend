'use strict';
// Online math circle for kids (ag- guide door; UK and US exams cluster Phase 2, row US080, writer group B16). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl -A "Mozilla/5.0" on 31 October
// 2026; copies in keyword-research-2026-09/uk-us-gap/src/online-math-circle-for-kids/:
//  - Math Circle Network, mathcircles.org home (namc.txt): "A National Network of Local Math Communities Dedicated to
//    Student Engagement and Teacher Professional Learning"; "a project of the American Institute of Mathematics (AIM), a
//    nonprofit mathematical sciences research institute supported by the National Science Foundation"; MathCircular "a
//    free semi-annual magazine".
//  - mathcircles.org About (about.txt): "Math Circles are communities focused on the enjoyment of mathematical problem
//    solving."; meetings "often funstrating" (curly quotes in source, the word quoted alone); forms: Math Student Circles,
//    Math Teacher Circles, Family Math Circles; "There are hundreds of Math Circles around the U.S."; the model
//    "originated in Eastern Europe more than 100 years ago"; first US student circles "in Boston in 1994 and in the San
//    Francisco Bay Area (Berkeley and San Jose) in 1998"; first Math Teacher Circle founded in 2006 at AIM; in 2020 AIM
//    became host of the National Association of Math (Student) Circles, founded by SLMath; "Our network provides free
//    resources for all U.S.-based Math Circles."
//  - mathcircles.org Organizers (organizers.txt): toolkits; "2026 New Math Circle Training & Mentoring Cohort". Map
//    (map.txt): circles tagged by level, several tagged "Online". Grant figures not printed.
//  - Stanford Pre-Collegiate Studies, Stanford Math Circle (smc.txt): "quarter-long, after-school sessions" for elementary,
//    middle or high school students; weekly on "Tuesdays, Wednesdays, or Thursdays"; "emphasizes discussion and group
//    problem solving"; "Students from any geographic location are welcome to enroll in the online classes."
//  - Berkeley Math Circle (bmc.txt): "a weekly program for over 500 San Francisco Bay Area elementary, middle and high
//    school students"; "Wednesday evenings at the UC Berkeley campus"; "Emulating famous Eastern European models";
//    "BMC-Upper will not occur Fall 2026 and Spring 2027." Fees not printed.
// Our own material, labelled on the page: the 100-lockers exploration (10 open: the perfect squares, because only squares
// have an odd number of factors; 36 has 9 factors, 12 has 6), the circle-session plan, the five exploration problems (89
// ways up 10 stairs, 66 handshakes, the corner-cut chessboard cannot be tiled, 4051, the lockers) checked in Python, and
// the readiness stages. Lesson family: explore small cases, conjecture, then explain.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH ENRICHMENT', blurb: 'What a math circle is, where US math circles come from, how to find one near you or online, and an original circle-style exploration.' },
  slug: 'online-math-circle-for-kids',
  code: 'ck',
  accent: '#145E3D',
  accentRationale: 'Online math circle for kids: the allocated deep pine #145E3D, a chalkboard green; about 7.6:1 on the #FBF8F2 paper, far above the 4.5:1 floor',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Online math circle for kids',
  title: 'Online Math Circle for Kids: What It Is and How to Join',
  description: 'Online math circle for kids: what a math circle is, where US circles come from, how to find one near you or online, and an original circle-style puzzle.',
  ogDescription: 'Math circles are small groups where children explore hard, beautiful problems together. What a circle is, how the US network began, where to find one near you or online, and a full circle-style exploration to try at home.',
  twitterDescription: 'What a math circle is, how to find one near you or online, and a circle-style puzzle to try.',
  pageName: 'Online Math Circle for Kids',
  webPageDescription: 'A guide for US families to math circles: what they are in the Math Circle Network\'s own words, their history in the United States, how to find a local or online circle, how one meeting runs, and an original exploration in the circle style with full reasoning.',
  courseDescription: 'Live online problem-solving math classes for US children in grades 3 to 12, run in the spirit of a math circle: discussion, exploration and proof, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Online math circle for kids',
  navLinks: [
    { href: '#what', label: 'What a circle is' },
    { href: '#find', label: 'Find one' },
    { href: '#lockers', label: 'An exploration' },
    { href: '#session', label: 'A session' },
    { href: '#try', label: 'Try these' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 3 to 12 &middot; Math circles',
  h1: 'Online math circle for kids: explore, argue, discover',
  lede: 'A math circle is not a class and not a tutoring session. It is a small group of children and a mathematician working on one rich problem, arguing about it, getting stuck and finding a way through. Many children who find school math too easy discover in a circle that math is actually hard, and wonderful. This guide explains what math circles are, in the words of the US Math Circle Network, how to find one near you or online, and gives you a complete circle-style exploration to try at the kitchen table.',
  secondaryCta: { href: '#lockers', label: 'Try the locker exploration' },
  wa: 'Hello Modern Age Coders, my child in the US loves puzzles and we are looking for an online math circle or something like it. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; ages 6 to 67',
  spec: [
    ['What', 'Problem-solving math communities'],
    ['US network', 'Math Circle Network (AIM)'],
    ['Circles in the US', 'Hundreds, per the network'],
    ['Formats', 'Local, family and online'],
    ['Our classes', 'Circle-style, live online'],
    ['Ages', 'Grades 3 to 12'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'A math circle is a community focused on the enjoyment of mathematical problem solving, where students meet regularly with mathematicians to explore challenging problems together. In the US, the Math Circle Network, a project of the American Institute of Mathematics, maps hundreds of circles, some online. Modern Age Coders is not a math circle, but we teach in the same spirit: live online problem-solving classes in our olympiad and competition math course, as a group of 15 to 20 or one to one.',

  picks: {
    eyebrow: 'Problem solving, every week',
    h2: 'Three courses for a child who loves a hard problem',
    lede: 'Each puts discussion and reasoning ahead of speed, the way a good circle does.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'CK / 01', title: 'Olympiad and competition math', note: 'Rich problems, proof and contest skills for grades 6 and up.' },
      { course: 'middle-school-math-competitions-course', code: 'CK / 02', title: 'Middle school competition math', note: 'MATHCOUNTS and AMC 8 problem solving for grades 5 to 8.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'CK / 03', title: 'Problem solving for younger kids', note: 'Logic, patterns and puzzles for grades 3 to 6.' }
    ]
  },

  sections: [
    {
      id: 'what', tint: 'tint', eyebrow: 'What a circle is',
      h2: 'What is a math circle?',
      lede: 'The Math Circle Network defines it simply: "Math Circles are communities focused on the enjoyment of mathematical problem solving." Meetings, it says, are lively, interactive and often "funstrating": challenging, but rewarding.',
      body: [
        { kind: 'two',
          leftH3: 'Three kinds of circle',
          left: [
            'The network describes Math Student Circles (after-school programs for students), Math Teacher Circles (professional learning for teachers and mathematicians) and Family Math Circles for parents and families who want to do mathematics together.',
            'For children, a student circle is the usual door. Some circles welcome a parent alongside a younger child, which is a lovely way to start.'
          ],
          rightH3: 'Where the idea comes from',
          right: [
            'According to the network, the model of students meeting regularly with mathematics professionals to solve problems "originated in Eastern Europe more than 100 years ago".',
            'In the United States, the first student circles began "in Boston in 1994 and in the San Francisco Bay Area (Berkeley and San Jose) in 1998". The first Math Teacher Circle was founded in 2006 at the American Institute of Mathematics.'
          ] },
        { kind: 'table', mt: true, caption: 'Math circle, school class and tutoring compared (our summary)', head: ['Question', 'Math circle', 'School class', 'Tutoring'], rows: [
          ['Main aim', 'Enjoying hard problems', 'Covering the syllabus', 'Fixing gaps, homework'],
          ['Typical problem', 'One rich question for a whole session', 'Many short exercises', 'Whatever is due'],
          ['Who talks most', 'The students', 'The teacher', 'Both'],
          ['Getting stuck', 'Expected and welcome', 'Often a problem', 'The reason to book']
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://mathcircles.org/about/" rel="noopener" target="_blank">Math Circle Network, About</a>, read 31 October 2026. Modern Age Coders is not a math circle and has no connection with the Math Circle Network, the American Institute of Mathematics or any circle named on this page.' }
      ]
    },
    {
      id: 'find', tint: 'deep', eyebrow: 'Find one',
      h2: 'How do I find a math circle near me or online?',
      lede: 'Start with the Math Circle Network\'s map, which lists circles by level and marks those that meet online. University math departments run many of the longest-running circles too.',
      body: [
        { kind: 'two',
          leftH3: 'The national network',
          left: [
            'The Math Circle Network calls itself "A National Network of Local Math Communities". It is "a project of the American Institute of Mathematics (AIM), a nonprofit mathematical sciences research institute supported by the National Science Foundation".',
            'The network says "There are hundreds of Math Circles around the U.S." Its map lets you filter by elementary, middle and high school, and some entries are tagged Online. In 2020 AIM also became host of the National Association of Math (Student) Circles.'
          ],
          rightH3: 'Starting your own',
          right: [
            'If there is no circle nearby, the network helps people start one. Its organizer pages offer planning toolkits and a 2026 New Math Circle Training and Mentoring Cohort for new leadership teams.',
            'It also says "Our network provides free resources for all U.S.-based Math Circles", including an activities database and MathCircular, which it describes as "a free semi-annual magazine".'
          ] },
        { kind: 'table', mt: true, caption: 'Two university math circles, from their own pages (read 31 October 2026)', head: ['Circle', 'When and where', 'Online?', 'Note from its page'], rows: [
          ['Stanford Math Circle (Stanford Pre-Collegiate Studies)', 'Quarter-long, after-school sessions, weekly on Tuesdays, Wednesdays or Thursdays', 'Yes: "Students from any geographic location are welcome to enroll in the online classes."', 'Emphasizes "discussion and group problem solving"'],
          ['Berkeley Math Circle', 'Weekly on Wednesday evenings at UC Berkeley', 'Mainly in person', '"Emulating famous Eastern European models"; the BMC-Upper group will not run in fall 2026 and spring 2027']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://mathcircles.org/" rel="noopener" target="_blank">mathcircles.org</a> (home, map and organizer pages), <a class="ag-inline-link" href="https://spcs.stanford.edu/programs/stanford-math-circle" rel="noopener" target="_blank">Stanford Math Circle</a> and <a class="ag-inline-link" href="https://mathcircle.berkeley.edu/" rel="noopener" target="_blank">Berkeley Math Circle</a>, read 31 October 2026. Schedules change by term; check each circle before applying.' }
      ]
    },
    {
      id: 'lockers', tint: 'tint', eyebrow: 'An exploration',
      h2: 'What does a math circle problem look like? The hundred lockers',
      lede: 'A circle problem is easy to state, impossible to finish by guessing, and has a beautiful reason behind the answer. This one is a classic of the genre; the walkthrough and wording are ours.',
      body: [
        { kind: 'two',
          leftH3: 'The problem',
          left: [
            'A hallway has 100 closed lockers, numbered 1 to 100. Student 1 opens every locker. Student 2 changes every second locker (closes it if open, opens it if closed). Student 3 changes every third locker, and so on, up to student 100.',
            'When all 100 students have passed, which lockers are open? A circle leader would not let anyone answer yet. First: try it with 10 lockers.'
          ],
          rightH3: 'Explore small cases (ours)',
          right: [
            'With 10 lockers, children usually find that lockers 1, 4 and 9 end up open. Someone says "those are square numbers!" That is a conjecture, not yet an answer.',
            'Now the circle question: why squares? Locker 12 is changed by students 1, 2, 3, 4, 6 and 12, its six factors. Six changes means open, closed, open, closed, open, closed: it ends closed.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>The key idea (ours).</b> A locker ends open only if it is changed an odd number of times, so only if its number has an odd number of factors.',
          '<b>Why factors usually pair up.</b> Factors come in pairs: for 12, 1 with 12, 2 with 6, 3 with 4. Pairs make an even count.',
          '<b>The exception.</b> For 36, the pair 6 x 6 uses the same number twice, so 6 is counted once. 36 has 9 factors: an odd number. Only perfect squares have an unpaired factor.',
          '<b>The answer.</b> The open lockers are the squares 1, 4, 9, ..., 100: ten lockers. We checked it by simulating all 100 students in Python.',
          '<b>Extend it.</b> Which lockers are changed exactly twice? (The primes.) A good circle ends with a new question.'
        ] }
      ]
    },
    {
      id: 'session', tint: 'deep', eyebrow: 'A session',
      h2: 'What happens in a math circle session?',
      lede: 'Most circles follow a similar rhythm: a problem is posed, students work on it in small groups, ideas are shared and argued over, and the leader helps the group turn a pattern into an explanation. The timings below are our own sketch of a 75-minute session.',
      body: [
        { kind: 'table', caption: 'A 75-minute circle-style session (our sketch)', head: ['Part', 'Minutes', 'What happens'], numCols: [1], rows: [
          ['Warm-up', '10', 'A quick puzzle everyone can start'],
          ['The big problem', '5', 'Stated simply, with no method given'],
          ['Explore in pairs', '25', 'Small cases, drawings, tables'],
          ['Share and argue', '20', 'Groups present conjectures; others test them'],
          ['Why it works', '10', 'The group builds the explanation together'],
          ['One more question', '5', 'An extension to take home']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What makes it work',
          left: [
            'Silence is allowed. Leaders wait rather than rescue, because the stuck moment is where the learning happens.',
            'Wrong ideas are valuable. A conjecture that fails on the next case teaches the whole room why we test before we believe.'
          ],
          rightH3: 'Is my child ready?',
          right: [
            'Readiness is about attitude more than level. A child who enjoys a puzzle, can stay with it for twenty minutes and likes talking about ideas is ready, whatever their grade.',
            'Children who are used to always being right sometimes find the first circle hard. That is normal, and usually the start of something good.'
          ] }
      ]
    },
    {
      id: 'try', tint: 'tint', eyebrow: 'Try these',
      h2: 'What problems can we explore at home like a math circle?',
      lede: 'Pick one per evening. Explore small cases first, look for the pattern, then ask why. The problems and answers are ours, each checked in Python.',
      body: [
        { kind: 'table', caption: 'Five circle-style explorations with answers (ours)', head: ['Exploration', 'Start with', 'Answer'], rows: [
          ['You climb 10 stairs, taking 1 or 2 steps at a time. How many different ways?', 'Count for 1, 2, 3 and 4 stairs; each total is the sum of the two before', '89'],
          ['Twelve people each shake hands once with everyone else. How many handshakes?', 'Each person shakes 11 hands; every handshake is counted twice', '66'],
          ['Cut two opposite corners off a chessboard. Can 31 dominoes cover the rest?', 'Color the squares; each domino covers one black and one white', 'No'],
          ['What is the 2026th odd number?', 'The nth odd number is 2n - 1', '4051'],
          ['In the locker problem, how many lockers stay open with 100 students?', 'Count the perfect squares up to 100', '10']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Week 1 (our plan for families).</b> One exploration, done together, with paper and colored pens. No hints for the first ten minutes.',
          '<b>Week 2.</b> Your child explains the answer to someone who was not there. Explaining is half of mathematics.',
          '<b>Week 3.</b> Look on the Math Circle Network map for a local or online circle, and try a session.',
          '<b>Week 4.</b> Decide: a circle, a weekly problem-solving class, or both.'
        ] },
        { kind: 'p', mt: true, html: 'If your child also enjoys contests, see our <a class="ag-inline-link" href="/math-competitions-for-middle-school-students">middle school math competitions guide</a>, <a class="ag-inline-link" href="/mathcounts-preparation">MATHCOUNTS preparation</a> and <a class="ag-inline-link" href="/math-kangaroo-usa-preparation">Math Kangaroo USA</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages from puzzle fan to mathematician',
    lede: 'Our own way of describing how children grow in a circle.',
    table: { caption: 'Stages of mathematical exploring (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Answer hunter', 'Wants the answer fast, unsure what to do when stuck'],
      ['2. Case tryer', 'Tries examples and draws pictures without being told'],
      ['3. Conjecturer', 'Spots a pattern, says it clearly and tests it'],
      ['4. Explainer', 'Gives a reason the pattern must hold, and asks the next question']
    ] },
    left: { h3: 'For parents', ps: [
      'Praise the trying, not the speed. "I like how you made a table" does more than "you\'re so smart".',
      'If your child asks you the answer, ask them what they have tried. Then wait.'
    ] },
    right: { h3: 'For students', ps: [
      'When you are stuck, make the problem smaller: 10 lockers instead of 100.',
      'A pattern is a guess until you can say why. Always ask why.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Problem-solving math courses for grades 3 to 12',
    lede: 'Live courses that put exploration and reasoning first.',
    bands: [
      { num: 'I', h3: 'Young explorers', sub: 'Grades 3 to 5', courses: [
        { code: 'CK / Y / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Logic and patterns.' },
        { code: 'CK / Y / 02', slug: 'mental-maths-mastery-kids', title: 'Quick numbers', blurb: 'Playing with digits.' },
        { code: 'CK / Y / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5, deeply.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'CK / M / 01', slug: 'middle-school-math-competitions-course', title: 'Contest problems', blurb: 'Team rounds and sprints.' },
        { code: 'CK / M / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Pre-algebra and geometry.' },
        { code: 'CK / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Simulate the lockers.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Grades 9 to 12', courses: [
        { code: 'CK / H / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad problems', blurb: 'Where circles lead.' },
        { code: 'CK / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'Grades 9 to 12 math', blurb: 'The school core, deeply.' },
        { code: 'CK / H / 03', slug: 'college-mathematics-complete-masterclass', title: 'College math', blurb: 'Beyond the syllabus.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Circle-style problem solving, live online',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'An evening problem session after school.' },
      { time: 'Weekends', l: 'Longer explorations with time to argue.' },
      { time: '1-on-1', l: 'For a child who wants a personal mentor.' }
    ],
    cells: [
      { h3: 'One rich problem', p: 'Depth over a long worksheet.' },
      { h3: 'Students talk', p: 'Ideas shared and tested.' },
      { h3: 'Problems we chose', p: 'Original write-ups, never copied.' },
      { h3: 'Why, always', p: 'Every pattern gets a reason.' },
      { h3: 'No contest promises', p: 'We teach thinking; results are theirs.' },
      { h3: 'Size', p: 'A batch of 15 to 20, or just your child.' }
    ]
  },

  projectsH2: 'What our young mathematicians make',
  projectsLede: 'Explorations, simulations and puzzle games from students in our classes. More at <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from parents on Google, reproduced exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Problem-solving classes run month to month with no term contract, so a family can try circle-style math for a few weeks and stay only if the spark is there.',
    free: ['A free first class', 'A puzzle to start', 'No card needed'],
    group: ['Fifteen to twenty learners', 'The same teacher each week', 'Pick your batch', 'Monthly'],
    one: ['One teacher, one child', 'Problems chosen for them', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Math circles: questions answered',
    items: [
      { q: 'What is a math circle for kids?', a: 'It is a group where children meet regularly with mathematicians to explore challenging problems together. The Math Circle Network describes math circles as communities focused on the enjoyment of mathematical problem solving.' },
      { q: 'How do I find a math circle near me?', a: 'Use the map on mathcircles.org, run by the Math Circle Network. You can filter by elementary, middle and high school, and some circles are marked as meeting online.' },
      { q: 'Are there online math circles?', a: 'Yes. Some circles on the national map meet online, and the Stanford Math Circle says students from any geographic location are welcome to enroll in its online classes.' },
      { q: 'What age is a math circle for?', a: 'Circles exist for elementary, middle and high school students, and the network also describes family circles where parents join in. Readiness depends more on enjoying puzzles than on grade.' },
      { q: 'Where did math circles start?', a: 'The Math Circle Network says the model originated in Eastern Europe more than 100 years ago. The first US student circles began in Boston in 1994 and in the San Francisco Bay Area in 1998.' },
      { q: 'Is a math circle the same as math tutoring?', a: 'No. Tutoring usually fixes gaps or helps with homework, while a circle explores one rich problem for the joy of it. Many children benefit from both at different times.' },
      { q: 'How is your class different from a math circle?', a: 'We are an online school, not a community circle. Our problem-solving classes follow a planned course with the same teacher each week, but they borrow the circle habits of discussion, exploration and proof.' },
      { q: 'Can I start a math circle?', a: 'Yes. The Math Circle Network offers organizer toolkits, free resources for US-based circles and a 2026 training and mentoring cohort for new circle leadership teams.' },
      { q: 'What times are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with the Math Circle Network?', a: 'No. Modern Age Coders is independent and has no link to the Math Circle Network, the American Institute of Mathematics, Stanford or the Berkeley Math Circle.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More math enrichment for US children.',
    items: [
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'Contests for puzzle lovers.' },
      { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation', p: 'Contest problem solving for middle schoolers.' },
      { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo USA', p: 'A friendly first contest.' },
      { href: '/math-league-contest-preparation', label: 'Math League contests', p: 'School-based contests by grade.' },
      { href: '/accelerated-math-program-online', label: 'Accelerated math online', p: 'Working ahead with understanding.' },
      { href: '/beast-academy-tutor', label: 'Beast Academy help', p: 'For families using that curriculum.' }
    ]
  },

  start: {
    h2: 'Book a free problem-solving class',
    lede: 'Let us know what grade your child is in and the last puzzle they could not put down. The teacher will bring a problem pitched just above that.',
    readFirst: 'You could first read <a class="ag-inline-link" href="/how-we-teach">about our teaching</a> or look through <a class="ag-inline-link" href="/courses">our courses</a>.',
    note: 'Classes are live video sessions, taught from India, at hours that suit US families. WhatsApp gets the quickest response.',
    formNote: 'The first class is on us; booking does not need a card.'
  },

  footer: {
    cols: [
      { h4: 'Math enrichment', links: [
        { href: '/math-competitions-for-middle-school-students', label: 'Math competitions' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS' },
        { href: '/math-kangaroo-usa-preparation', label: 'Math Kangaroo USA' },
        { href: '/math-league-contest-preparation', label: 'Math League' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/accelerated-math-program-online', label: 'Accelerated math' },
        { href: '/online-math-tutor-cost', label: 'Tutoring costs' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Open lockers: 1, 4, 9, ..., 100'
  },

  personalityCss: `
.ag-root.ag-ck .ag-hero h1 { letter-spacing: -0.011em; max-width: 21ch; }
.ag-root.ag-ck .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-ck .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ck .ag-section-head h2 { max-width: 27ch; }
`,

  dossier: {
    curriculumAuthority: 'Math Circle Network (mathcircles.org) home, About, Organizers and map pages; Stanford Pre-Collegiate Studies, Stanford Math Circle; Berkeley Math Circle home. All read raw 31 October 2026.',
    localProject: 'Our walkthrough of the hundred-lockers problem (10 open, the perfect squares; 12 has 6 factors, 36 has 9), the comparison of circle, class and tutoring, the 75-minute session sketch, five explorations checked in Python (89, 66, no, 4051, 10) and the four-week family plan. Lesson family: explore small cases, conjecture, then explain.',
    requiredMentions: ['Math Circles are communities focused on the enjoyment of mathematical problem solving.', 'originated in Eastern Europe more than 100 years ago', 'in Boston in 1994 and in the San Francisco Bay Area (Berkeley and San Jose) in 1998', 'There are hundreds of Math Circles around the U.S.', 'a project of the American Institute of Mathematics (AIM), a nonprofit mathematical sciences research institute supported by the National Science Foundation', 'Students from any geographic location are welcome to enroll in the online classes.', 'Emulating famous Eastern European models', 'Open lockers: 1, 4, 9, ..., 100', '36 has 9 factors'],
    sources: [
      { claim: 'Math Circle Network home: national network, AIM and NSF, MathCircular.', url: 'https://mathcircles.org/' },
      { claim: 'Math Circle Network About: definition, kinds of circle, history, free resources.', url: 'https://mathcircles.org/about/' },
      { claim: 'Math Circle Network Organizers: toolkits and the 2026 new circle cohort.', url: 'https://mathcircles.org/organizers/' },
      { claim: 'Math Circle Network map: circles by level, some online.', url: 'https://mathcircles.org/map/' },
      { claim: 'Stanford Math Circle: schedule, method, online enrollment.', url: 'https://spcs.stanford.edu/programs/stanford-math-circle' },
      { claim: 'Berkeley Math Circle: weekly program, Eastern European model, 2026-27 BMC-Upper note.', url: 'https://mathcircle.berkeley.edu/' }
    ],
    rejectedClaims: [
      'A count of online circles on the network map: not printed, because the map is filtered live and our count of tagged entries would be our own and could change.',
      'Grant amounts on the organizer page and circle fees: not printed (no prices).',
      'Research claims about math circle outcomes: not used; the network summarizes research, but we did not read the underlying studies.',
      'Names of circle leaders and authors on mathcircles.org: not printed (brief rule 7).',
      'Any claim that our classes are a math circle or affiliated with one: none made.'
    ]
  }
};
