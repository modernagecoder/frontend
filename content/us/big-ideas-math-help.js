'use strict';
// Big Ideas Math help (ag- curriculum help door; UK and US exams cluster Phase 2, row US088, group B17).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md (writer brief, rule 10). Sources read raw with curl on
// 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/big-ideas-math-help/):
//  - bigideaslearning.com (home): "Big Ideas Learning designs research-backed K-12 & higher Ed curriculum"; "Our flagship
//    programs, Math & YOU K-8 and Math & YOU: Concepts & Connections , have earned all-green ratings from EdReports";
//    Career Exploration videos "Interwoven throughout Math & YOU"; partnership with Cengage School; trademark line
//    ("Big Ideas Learning" and related marks are registered trademarks of Larson Texts, Inc.).
//  - bigideaslearning.com/solutions: grade bands K-5, 6-8, 9-12, AP; Math & YOU described as "a brand-new comprehensive
//    K-12 program"; "meeting expectations across all review gateways, including focus and coherence, rigor and
//    mathematical practices, and teacher and student supports"; state customized programs aligned to each state's
//    standards; Didax as exclusive provider of K-5 manipulative kits; Newton and Descartes math musicals for elementary.
//  - bigideaslearning.com/difference: "Our lesson design begins with engaging, exploratory experiences to help students
//    build a solid, conceptual foundation."; learning culminates in reviewing and reinforcing and tying concepts together
//    through problem solving; focus list (Building Mathematical Rigor, Fostering Productive Mathematical Thinkers ...).
//  - bigideaslearning.com/blog/math-and-you-concepts-and-connectons-earns-all-green-from-edreports (published February 5,
//    2026): Concepts & Connections is the high school curriculum; "emphasizes conceptual understanding as the foundation
//    for procedural fluency and application"; supports "productive struggle"; Big Ideas Learning "founded in 2008", a
//    Larson Texts company; first Calculus edition 1978.
//  - bigideaslearning.com/precalculus-for-ap: new Precalculus for AP program; AP trademark disclaimer.
//  - bigideasmath.com (student login): "As a Big Ideas Math user, you have Easy Access to your Student Edition when you're
//    away from the classroom."; Family Program Access menu Kindergarten to Eighth grade, Algebra 1, Geometry, Algebra 2,
//    then state; "If you do not have an access code please contact your teacher, administrator, or BIL consultant";
//    "Big Ideas Math(R) and Big Ideas Learning(R) are registered trademarks of Larson Texts, Inc."
// Not used: efficacy figures, named authors and executives, district names, prices, any textbook exercise, answer or test.
// Our own material, labelled: the stall table, the unit-rate, two-sided equation, Pythagorean distance and elimination
// examples, the homework-honesty routine and the practice set.
// Lesson family: reading a problem for its structure before choosing a method (middle school to Algebra 1).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH', blurb: 'Help for students whose school uses Big Ideas Math or Math &amp; YOU: the grade map, home access to the book, and live lessons that explain the method.' },
  slug: 'big-ideas-math-help',
  code: 'bi',
  accent: '#6D2C00',
  accentRationale: 'Big Ideas Math help: a dark burnt sienna, #6D2C00 as allocated, warm like a well-used textbook, about 9.8:1 on the #FBF8F2 paper',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Big Ideas Math help',
  title: 'Big Ideas Math Help: Live Tutoring for Grades 6 to Algebra 2',
  description: 'Big Ideas Math help for families: how the program and Math & YOU fit together, how to open the book at home, and live tutoring from grade 6 through Algebra 2.',
  ogDescription: 'Your child\'s school uses Big Ideas Math and the homework has stalled. What the publisher says about its programs, how to reach the Student Edition at home, and how a live teacher explains the method without handing out answers.',
  twitterDescription: 'Live help for Big Ideas Math homework: the method explained, never the answer key.',
  pageName: 'Big Ideas Math Help',
  webPageDescription: 'A guide for US families whose children use Big Ideas Math, built from bigideaslearning.com and bigideasmath.com checked on 31 October 2026; the worked examples and stall points are written by Modern Age Coders.',
  courseDescription: 'Live online math lessons for students who use Big Ideas Math or Math & YOU at school, from grade 6 through Algebra 2, explaining methods with original problems, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Big Ideas Math help',
  navLinks: [
    { href: '#programs', label: 'Programs' },
    { href: '#grades', label: 'Grade map' },
    { href: '#home-access', label: 'Book at home' },
    { href: '#stuck', label: 'Stuck points' },
    { href: '#worked', label: 'Examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Big Ideas Math and Math &amp; YOU &middot; Grade 6 to Algebra 2',
  h1: 'Big Ideas Math help, from a teacher who explains the method',
  lede: 'Big Ideas Math is one of the textbook series families meet most often in US middle and high schools, and the homework can stall on a single unfamiliar step. Searching online usually turns up answer sites, which fill in the page but leave the next test just as hard. This page sets out what the publisher, Big Ideas Learning, says about its programs today, how to reach your child\'s Student Edition from home, and how a live tutor teaches the method behind each kind of problem.',
  secondaryCta: { href: '#worked', label: 'See the worked examples' },
  wa: 'Hello Modern Age Coders, my child uses Big Ideas Math at school and needs help with the homework. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['Publisher', 'Big Ideas Learning'],
    ['Programs', 'Big Ideas Math, Math &amp; YOU'],
    ['Range', 'K to 12 and AP'],
    ['Home access', 'Student Edition online'],
    ['Our help', 'Live online lessons'],
    ['Formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'Big Ideas Math is a K to 12 math textbook series from Big Ideas Learning, a Larson Texts company, used in many US districts for grades 6 to 8, Algebra 1, Geometry and Algebra 2; its newer programs are called Math &amp; YOU. Big Ideas Math help from a live tutor means learning the method, not copying answers. Modern Age Coders teaches it live online through its Middle School Mathematics Mastery course, in a batch or 1-on-1, with a free first class.',

  picks: {
    eyebrow: 'Matched to the textbook years',
    h2: 'Live courses for Big Ideas Math students',
    lede: 'The school book stays the curriculum. These classes give your child a teacher who explains each method on new problems.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'BIM / 01', title: 'Middle school math', note: 'Grades 6 to 8: ratios, expressions, equations, geometry and the first functions.' },
      { course: 'algebra-foundations-masterclass', code: 'BIM / 02', title: 'Algebra foundations', note: 'For Algebra 1 and the grade 8 work that leads into it.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'BIM / 03', title: 'High school math', note: 'Geometry and Algebra 2, with proofs and functions explained.' }
    ]
  },

  sections: [
    {
      id: 'programs', tint: 'tint', eyebrow: 'Programs',
      h2: 'Is Big Ideas Math the same as Math & YOU?',
      lede: 'They come from the same publisher. The student login site still greets users as Big Ideas Math users, while the publisher\'s own site now leads with its Math &amp; YOU programs. Check the cover or the login page to see which one your child has.',
      body: [
        { kind: 'table', caption: 'What Big Ideas Learning says about itself and its programs (bigideaslearning.com home, solutions and press pages, checked 31 October 2026)', head: ['Point', 'In the publisher\'s words or summary'], rows: [
          ['Who it is', 'Big Ideas Learning "designs research-backed K-12 &amp; higher Ed curriculum"; its press release says it was founded in 2008 and is a Larson Texts company'],
          ['Newest core programs', 'Math &amp; YOU K-8 and Math &amp; YOU: Concepts &amp; Connections, the high school curriculum'],
          ['Math &amp; YOU described as', '"a brand-new comprehensive K-12 program"'],
          ['Independent review', 'Both Math &amp; YOU programs earned all-green ratings from EdReports, "meeting expectations across all review gateways, including focus and coherence, rigor and mathematical practices, and teacher and student supports"'],
          ['State versions', 'State customized programs, each aligned to that state\'s math standards'],
          ['Advanced Placement', 'A new Precalculus for AP program'],
          ['Extras', 'Career Exploration videos throughout Math &amp; YOU; K-5 manipulative kits supplied through its partner Didax']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the name matters for homework',
          left: [
            'Older editions and newer programs share topics but not always page numbers, chapter order or lesson titles. When you tell a tutor "chapter 4, lesson 3", the edition decides what that means.',
            'Before the first class, photograph the cover and the table of contents. That lets us plan around the same sequence your child\'s teacher is following.'
          ],
          rightH3: 'What the publisher says about learning',
          right: [
            'The Concepts &amp; Connections press release, dated February 5, 2026, says the program "emphasizes conceptual understanding as the foundation for procedural fluency and application" and supports rich discourse and productive struggle.',
            'For a parent, that means some homework problems are meant to be puzzled over before a method is given. A tutor helps most by guiding that puzzling, not by short-cutting it.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.bigideaslearning.com/" rel="noopener" target="_blank">Big Ideas Learning</a>, its <a class="ag-inline-link" href="https://www.bigideaslearning.com/solutions" rel="noopener" target="_blank">solutions page</a> and <a class="ag-inline-link" href="https://www.bigideaslearning.com/blog/math-and-you-concepts-and-connectons-earns-all-green-from-edreports" rel="noopener" target="_blank">EdReports press release</a>, checked 31 October 2026. Big Ideas Math and Big Ideas Learning are registered trademarks of Larson Texts, Inc. Modern Age Coders is not affiliated with or endorsed by Big Ideas Learning.' }
      ]
    },
    {
      id: 'grades', tint: 'deep', eyebrow: 'Grade map',
      h2: 'Which grades and courses does Big Ideas Math cover?',
      lede: 'The publisher\'s solutions page groups its programs into four bands, and the student site lists every grade from kindergarten to grade 8 plus three high school courses.',
      body: [
        { kind: 'table', caption: 'Big Ideas grade bands (bigideaslearning.com/solutions) and the program list on the bigideasmath.com Family Program Access menu, checked 31 October 2026; the last column is our note', head: ['Band', 'Courses listed', 'Big ideas in that band (our summary)'], rows: [
          ['K-5', 'Kindergarten to fifth grade', 'Place value, the four operations, fractions'],
          ['6-8', 'Sixth, seventh and eighth grade', 'Ratios, rational numbers, expressions and equations, early functions'],
          ['9-12', 'Algebra 1, Geometry, Algebra 2', 'Linear and quadratic functions, proof, exponential and polynomial work'],
          ['AP', 'Precalculus for AP', 'Functions in depth before AP Calculus']
        ] },
        { kind: 'p', mt: true, html: 'Our classes for Big Ideas Math families concentrate on grades 6 to 8, Algebra 1, Geometry and Algebra 2, where the homework is most often a struggle. For younger siblings, our elementary classes follow the same idea: explain the method on fresh problems and let the school book stay in charge.' },
        { kind: 'two', mt: true,
          leftH3: 'How lessons are designed',
          left: [
            'Big Ideas Learning describes its approach this way: "Our lesson design begins with engaging, exploratory experiences to help students build a solid, conceptual foundation."',
            'It adds that new concepts and strategies build on that start, connect to earlier learning and real life, and finish with reviewing, reinforcing and problem solving.'
          ],
          rightH3: 'What that means at the kitchen table',
          right: [
            'The opening task of a lesson may look odd to a parent because no rule has been given yet. That is by design.',
            'The practice at the end is where homework usually lives. If your child cannot do it, the gap is often in the opening exploration, so that is where we restart in class.'
          ] }
      ]
    },
    {
      id: 'home-access', tint: 'tint', eyebrow: 'Book at home',
      h2: 'How can my child open the Big Ideas Math book at home?',
      lede: 'The student site tells families: "As a Big Ideas Math user, you have Easy Access to your Student Edition" outside school hours. The steps below follow the menus on that page.',
      body: [
        { kind: 'ol', items: [
          '<b>Go to bigideasmath.com.</b> The login page has a section called Family Program Access.',
          '<b>Choose the grade or course.</b> The menu lists Kindergarten to Eighth grade, then Algebra 1, Geometry and Algebra 2.',
          '<b>Choose your state.</b> State versions exist because programs are aligned to each state\'s standards.',
          '<b>Open the book.</b> This shows the Student Edition. A full student account needs a login from the school.',
          '<b>No access code?</b> The site says: "If you do not have an access code please contact your teacher, administrator, or BIL consultant".'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Use the book, not an answer site',
          left: [
            'The worked examples in the Student Edition are written by the people who set the homework. Reading the example just before a problem is the quickest legitimate help there is.',
            'Answer sites skip the reasoning, and tests at school are written so that the reasoning is what earns credit.'
          ],
          rightH3: 'What we will not do',
          right: [
            'We do not complete graded homework or tests for students, and we do not share textbook answer keys. Our teachers explain the method on new problems of our own, then your child returns to the school problem and does it.',
            'That keeps the work honest and keeps the teacher\'s picture of your child accurate.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.bigideasmath.com/" rel="noopener" target="_blank">bigideasmath.com</a> login and Family Program Access, checked 31 October 2026.' }
      ]
    },
    {
      id: 'stuck', tint: 'deep', eyebrow: 'Stuck points',
      h2: 'Where do students commonly get stuck in Big Ideas Math?',
      lede: 'These are the topics our teachers most often meet when middle and high school students bring textbook homework to class. They are general teaching guidance from our lessons, not figures about any program.',
      body: [
        { kind: 'table', caption: 'Common sticking points from grade 6 to Algebra 2 and what helps (our teaching notes)', head: ['Course', 'Where it sticks', 'What tends to help'], rows: [
          ['Grade 6', 'Ratios that are not written as fractions', 'Build a ratio table before any rule'],
          ['Grade 7', 'Proportional relationships and percent change', 'Find the constant first, then use it'],
          ['Grade 8', 'Equations with the variable on both sides', 'Collect the variable on one side, in words first'],
          ['Algebra 1', 'Systems of equations and function notation', 'Read f(x) aloud as "the output when the input is x"'],
          ['Geometry', 'Writing a proof in order', 'List what is given and what is wanted before any step'],
          ['Algebra 2', 'Exponent and logarithm rules mixed together', 'Test each rule with small numbers']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A sign worth noticing',
          left: [
            'A child who can do every problem in the lesson but freezes on the chapter review is usually matching problems to the example above them rather than recognizing what kind of problem it is.',
            'The fix is practice at choosing a method: mixed problems where the heading does not tell you what to do.'
          ],
          rightH3: 'Another sign',
          right: [
            'Long homework sessions with lots of erasing often mean the arithmetic underneath, such as fractions or negatives, is not yet automatic.',
            'We check that quickly in the first class, because repairing it makes every later chapter lighter.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'How does a tutor teach a Big Ideas Math topic without giving the answer?',
      lede: 'Four original examples on topics from grades 7 and 8 and Algebra 1, written by our teachers. The aim in each is the same: read the structure of the problem, then choose the method.',
      body: [
        { kind: 'table', caption: 'Solving 3(x - 4) = x + 6, a grade 8 topic, with the question the tutor asks at each line (our example)', head: ['Line', 'Working', 'Tutor\'s question'], rows: [
          ['1', '3x - 12 = x + 6', '"What does the 3 outside the bracket do to each term inside?"'],
          ['2', '3x - x - 12 = 6', '"Where should all the x terms live?"'],
          ['3', '2x - 12 = 6', '"What is 3x take away x?"'],
          ['4', '2x = 18', '"What undoes the minus 12?"'],
          ['5', 'x = 9', '"What undoes the times 2?"'],
          ['Check', '3(9 - 4) = 15 and 9 + 6 = 15', '"Do both sides really match?"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Unit rate and the constant (grade 7)',
          left: [
            'Our problem: 5 pounds of apples cost 7.50 dollars. Is cost proportional to weight, and what do 8 pounds cost? The unit rate is 7.50 / 5 = 1.50 dollars per pound, so the constant of proportionality is 1.5 and cost = 1.5 x weight.',
            'Eight pounds cost 1.5 x 8 = 12 dollars. The structure to notice: one quantity is always the same multiple of the other, and the graph is a straight line through zero.'
          ],
          rightH3: 'Distance with Pythagoras (grade 8)',
          right: [
            'Our problem: how far apart are (1, 2) and (7, 10)? Draw the right triangle. Across is 7 - 1 = 6 and up is 10 - 2 = 8. Then distance squared = 6 squared + 8 squared = 36 + 64 = 100, so the distance is 10.',
            'The structure to notice: any slanted distance on a grid is the long side of a right triangle you can draw yourself.'
          ] },
        { kind: 'table', mt: true, caption: 'Solving 2x + 3y = 12 and 4x - 3y = 6 by elimination, an Algebra 1 topic (our example)', head: ['Step', 'Working', 'Why'], rows: [
          ['Spot the structure', '+3y and -3y', 'Opposite y terms will cancel if the equations are added'],
          ['Add', '6x = 18', 'Left sides add, right sides add, so the equation stays true'],
          ['Solve', 'x = 3', 'Divide both sides by 6'],
          ['Substitute', '2(3) + 3y = 12, so 3y = 6 and y = 2', 'Either original equation works'],
          ['Check', '4(3) - 3(2) = 6', 'The second equation must also hold']
        ] },
        { kind: 'table', mt: true, caption: 'Mixed practice set: decide the method before you start (ours; answers in brackets)', head: ['Problem', 'Which method fits, and the answer'], rows: [
          ['4(x + 1) = 2x + 10', 'Expand, collect x on one side [x = 3]'],
          ['3 notebooks cost 4.50 dollars; cost of 10?', 'Unit rate [15 dollars]'],
          ['Distance from (0, 0) to (5, 12)', 'Right triangle [13]'],
          ['x + y = 9 and x - y = 3', 'Add to eliminate y [x = 6, y = 3]'],
          ['If f(x) = 2x - 5, find f(4)', 'Substitute the input [3]'],
          ['A price rises from 40 to 50 dollars; percent change?', 'Change over original [25 percent]']
        ] }
      ]
    },
    {
      id: 'together', tint: 'deep', eyebrow: 'Working together',
      h2: 'How does a live tutor fit around Big Ideas Math homework?',
      lede: 'The school teacher and the textbook set the pace. Our lessons sit around them: before a hard chapter, or after a homework night that went badly.',
      body: [
        { kind: 'ol', items: [
          '<b>Share the chapter and lesson.</b> Snap the contents page and note the homework problem numbers; that is all we need.',
          '<b>Find the step that broke.</b> The teacher asks your child to talk through the problem until the exact sticking line appears.',
          '<b>Teach on a fresh problem.</b> The teacher works a new problem of the same kind, written by us, asking your child to choose each step.',
          '<b>Return to the school problem.</b> Your child does the textbook problem alone, on camera if they like, and explains it.',
          '<b>Mix the methods.</b> Near a test, we set mixed problems so your child practises recognizing which method to use.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The textbook alone may do', p: 'For a student who reads the examples, finishes homework in reasonable time and does well on reviews.' },
          { h3: 'Book plus a batch may suit', p: 'For a student who learns from hearing others reason through the same topic, in a class of fifteen to twenty.' },
          { h3: 'Book plus 1-on-1 may suit', p: 'For a student with an older gap, or one who needs every lesson paced to the school calendar.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Recognizing problems',
    h2: 'From copying the example to choosing the method',
    lede: 'Our description of how textbook students grow more independent.',
    table: { caption: 'Stages of method choice (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Copying', 'Follows the worked example line by line'],
      ['2. Adapting', 'Changes the numbers but keeps the same steps'],
      ['3. Recognizing', 'Names the kind of problem without the heading'],
      ['4. Choosing', 'Picks a method on a mixed review and explains why']
    ] },
    left: { h3: 'For parents', ps: [
      'Homework scores show stage 1 and 2 well. Chapter tests show stage 3 and 4.',
      'Ask your child "what kind of problem is this?" before they start. The answer tells you a lot.'
    ] },
    right: { h3: 'For students', ps: [
      'Cover the heading, then decide what the problem is asking.',
      'If you can solve a problem two ways, you understand it.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'More math courses for Big Ideas families',
    lede: 'Grouped by the Big Ideas grade bands.',
    bands: [
      { num: 'I', h3: 'K to 5', sub: 'Younger siblings', courses: [
        { code: 'BIM / K / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5, explained live.' },
        { code: 'BIM / K / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Number sense for quicker homework.' }
      ] },
      { num: 'II', h3: '6 to 8', sub: 'Middle school', courses: [
        { code: 'BIM / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratios to functions.' },
        { code: 'BIM / M / 02', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'For students who want a stretch.' },
        { code: 'BIM / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Equations and graphs in Python.' }
      ] },
      { num: 'III', h3: '9 to 12 and AP', sub: 'High school', courses: [
        { code: 'BIM / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra 1 step by step.' },
        { code: 'BIM / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry and Algebra 2.' },
        { code: 'BIM / H / 03', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'For the AP course after Algebra 2.' },
        { code: 'BIM / H / 04', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'When the SAT is next.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class rhythm',
    h2: 'Live lessons built around the school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, before homework is due.' },
      { time: 'Weekends', l: 'A review before the next chapter test.' },
      { time: '1-on-1', l: 'Timed to your child\'s school calendar.' }
    ],
    cells: [
      { h3: 'School book first', p: 'We follow the chapter your teacher set.' },
      { h3: 'Method, not answers', p: 'Taught on new problems.' },
      { h3: 'Mixed review', p: 'Practice at choosing a method.' },
      { h3: 'Gaps repaired', p: 'Fractions and negatives checked.' },
      { h3: 'US time zones', p: 'Afternoon and evening slots.' },
      { h3: 'Batch or solo', p: 'Fifteen to twenty, or one student.' }
    ]
  },

  projectsH2: 'Student work',
  projectsLede: 'Some of our math students also learn to code. Their projects are collected on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Lessons for Big Ideas Math students are charged per month in US dollars, and a family can pause at the end of any month, for example after a difficult unit is behind them.',
    free: ['A free first class', 'Bring the homework that stalled', 'No card asked for'],
    group: ['Fifteen to twenty in a class', 'A regular teacher', 'Choose the batch time', 'Pay monthly'],
    one: ['One teacher for your child', 'Paced to the school chapter', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'Big Ideas Math help: common questions',
    items: [
      { q: 'Can I get live Big Ideas Math help online?', a: 'Yes. Students who use Big Ideas Math or Math & YOU at school join our teachers in live online classes. We explain the method behind the homework on fresh problems, in a batch of 15 to 20 or one to one.' },
      { q: 'Who publishes Big Ideas Math?', a: 'Big Ideas Learning, which describes itself as a Larson Texts company founded in 2008. Big Ideas Math and Big Ideas Learning are registered trademarks of Larson Texts, Inc.' },
      { q: 'Is Math & YOU the same as Big Ideas Math?', a: 'Both come from Big Ideas Learning. The student site still refers to Big Ideas Math users, while the publisher\'s main site leads with Math & YOU K-8 and Math & YOU: Concepts & Connections for high school. Check your child\'s cover or login to see which one the school uses.' },
      { q: 'How do I access the Big Ideas Math textbook at home?', a: 'Go to bigideasmath.com and use Family Program Access: choose the grade or course, then your state, to open the Student Edition. A full student login needs an access code from the school, which the site says to request from the teacher or administrator.' },
      { q: 'Do you give Big Ideas Math answers?', a: 'No. We do not complete graded homework or share answer keys. Our teachers teach the method on a new problem of our own, and your child then solves the school problem and explains it.' },
      { q: 'Are there Big Ideas Math practice tests?', a: 'Ask your child\'s teacher what the school provides, since tests and their practice versions come with the school\'s program. We write our own mixed practice sets on the same topics, which is how we prepare students for chapter tests.' },
      { q: 'Which grades use Big Ideas Math?', a: 'The student site lists kindergarten to grade 8, Algebra 1, Geometry and Algebra 2, and the publisher also offers Precalculus for AP. Our help focuses on grades 6 to 8 and the three high school courses.' },
      { q: 'Why is my child struggling with Big Ideas Math?', a: 'In our experience, students who struggle can usually copy the worked example but cannot yet tell which kind of problem they are looking at, or are still shaky on fraction and integer arithmetic from earlier grades. Both respond well to steady, explained practice.' },
      { q: 'When are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Big Ideas Learning?', a: 'No. We are an independent online school. We describe the programs only from the publisher\'s own pages and use our own problems in class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More US math help by grade and course.',
    items: [
      { href: '/online-math-tutor-7th-grade', label: 'Seventh grade math tutoring', p: 'Proportional relationships and equations.' },
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'Linear equations, functions and Pythagoras.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'For Algebra 1 and Algebra 2 students.' },
      { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring', p: 'Proof and reasoning about shapes.' },
      { href: '/common-core-math-tutor', label: 'Common Core math tutor', p: 'If your state follows the Common Core standards.' },
      { href: '/eureka-math-homework-help', label: 'Eureka Math homework help', p: 'For families whose school uses Eureka.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send us the program name from the cover, the chapter and lesson, and two homework problems that stopped your child. The first class starts with those.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look through <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'We are an online school whose teachers live in India; for US families that means after-school and evening class times in your own time zone. Message us on WhatsApp to set one up.',
    formNote: 'Nothing to pay for the first class, and no card details.'
  },

  footer: {
    cols: [
      { h4: 'Math help', links: [
        { href: '/online-math-tutor-6th-grade', label: 'Grade 6 math' },
        { href: '/online-math-tutor-8th-grade', label: 'Grade 8 math' },
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/common-core-math-tutor', label: 'Common Core help' },
        { href: '/middle-school-math-placement-test-prep', label: 'Placement test prep' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'What kind of problem is it?'
  },

  personalityCss: `
.ag-root.ag-bi .ag-hero h1 { letter-spacing: -0.012em; max-width: 21ch; }
.ag-root.ag-bi .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-bi .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-bi .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-bi .ag-section-head h2 { max-width: 28ch; }
`,

  dossier: {
    curriculumAuthority: 'Big Ideas Learning (a Larson Texts company), bigideaslearning.com home, solutions, difference, Precalculus for AP and February 5, 2026 press release, plus the bigideasmath.com student login, read raw 31 October 2026: Math & YOU K-8 and Concepts & Connections, all-green EdReports ratings on three gateways, founded 2008, grade bands K-5, 6-8, 9-12, AP, state customized programs, Didax K-5 kits, Career Exploration videos, lesson design beginning with exploratory experiences, conceptual understanding as the foundation for fluency, Family Program Access to the Student Edition with grades K to 8, Algebra 1, Geometry, Algebra 2, access codes from the school, trademark ownership.',
    localProject: 'Our worked solution of 3(x - 4) = x + 6 with a tutor question at each line; a unit-rate problem with constant 1.5; the distance from (1, 2) to (7, 10) by Pythagoras; elimination on 2x + 3y = 12 and 4x - 3y = 6; a stall table by course; a mixed method-choice practice set. Lesson family: reading a problem for its structure before choosing a method.',
    requiredMentions: [
      'designs research-backed K-12 &amp; higher Ed curriculum',
      'a brand-new comprehensive K-12 program',
      'meeting expectations across all review gateways, including focus and coherence, rigor and mathematical practices, and teacher and student supports',
      'Our lesson design begins with engaging, exploratory experiences to help students build a solid, conceptual foundation.',
      'emphasizes conceptual understanding as the foundation for procedural fluency and application',
      'As a Big Ideas Math user, you have Easy Access to your Student Edition',
      'If you do not have an access code please contact your teacher, administrator, or BIL consultant',
      'Big Ideas Math and Big Ideas Learning are registered trademarks of Larson Texts, Inc.',
      '3(9 - 4) = 15 and 9 + 6 = 15',
      'distance squared = 6 squared + 8 squared = 36 + 64 = 100'
    ],
    sources: [
      { claim: 'Big Ideas Learning programs, EdReports ratings, partners and trademark line.', url: 'https://www.bigideaslearning.com/' },
      { claim: 'Grade bands, Math & YOU description, state customized programs, Didax kits.', url: 'https://www.bigideaslearning.com/solutions' },
      { claim: 'Lesson design approach.', url: 'https://www.bigideaslearning.com/difference' },
      { claim: 'Concepts & Connections press release, February 5, 2026: founding year, conceptual-first approach.', url: 'https://www.bigideaslearning.com/blog/math-and-you-concepts-and-connectons-earns-all-green-from-edreports' },
      { claim: 'Student Edition home access, program list, access codes.', url: 'https://www.bigideasmath.com/' }
    ],
    rejectedClaims: [
      'Efficacy and sales figures (students reached, copies sold): not repeated as they cannot be checked independently and are not needed.',
      'Named authors, executives and districts: not used.',
      'Lesson features of particular editions not stated on the publisher\'s current pages: not described.',
      'Any textbook exercise, answer, test or answer key: not reproduced; all problems are ours.',
      'Prices: not used.',
      'That tutoring raises grades or test scores: refused.',
      'Any affiliation with Big Ideas Learning or Larson Texts, Inc.: none, stated on the page.'
    ]
  }
};
