'use strict';
// enVision Math help (ag- curriculum help door; UK and US exams cluster Phase 2, row US089, group B17).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md (writer brief, rule 10). Sources read raw with curl on
// 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/envision-math-help/):
//  - savvas.com/solutions/mathematics/envision-mathematics-grades-k-12: band list "enVision+ Mathematics (C) 2027 Grades K-5",
//    "enVision+ Mathematics (C) 2027 Grades 6-8", enVision A|G|A (Algebra 1, Geometry, Algebra 2), "enVision+ Integrated
//    Mathematics (C) 2028" (I to III); 6-8 "brings math to life through real-world problem solving".
//  - savvas.com/.../envision-mathematics-grades-k-5: "develops deep math connections and lasting understanding through
//    student investigations and experiences that focus on the why, what, and how of mathematics"; lesson flow lines
//    ("Students take a deep-dive investigative approach, followed by connecting questions."; "Students explore new content
//    in a task using prior knowledge, followed by a visual learning example to connect the task to new knowledge.";
//    "Students apply newly learned content in an investigation by developing a model leading to a solution."); game boards
//    or digital games; digital manipulatives with 1-, 2- and 3-dimensional models; hands-on kits; components "Student
//    Editions, an Additional Practice Workbook, and Teacher's Editions"; Savvas Realize auto-assigned differentiation and
//    adaptive practice; Expanded Notes in Topic 1; "Procedural fluency development is a core instructional element that
//    builds confident problem solvers."; "Integrated daily routines empower students in building and refining mathematical
//    language."; "Savvas Realize provides access to all the enVision+ digital resources"; Spanish components; "Students
//    choose the project and the outcome in these real-world projects."; SuccessMaker and Momentum Math.
//  - savvas.com/.../envision-mathematics-grades-6-8: students "choose the solution strategies of their choice, and
//    collaborate with peers"; "productive struggle"; data literacy routines.
//  - savvas.com/.../envision-a-g-a: "enVision A|G|A (C)2024 (Algebra 1, Geometry, Algebra 2)".
// Not used: efficacy studies and their demographic breakdowns (race statistics barred by the brief), district case
// studies, author names, prices, and any textbook lesson, answer or test. No claim about the program's earlier publisher.
// Our own material, labelled: the explore-then-visual-learning walk-through for 6 x 14, 36 / 4 as sharing, 3/4 against
// 5/8 on a number line, prism volume by layers, the stall table and the practice set.
// Lesson family: start from what the child already knows, then connect it to the new model (explore, then visual learning).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH', blurb: 'Help for children whose school uses enVision Mathematics from Savvas: the grade bands, how a lesson flows, and live classes for grades K to 8.' },
  slug: 'envision-math-help',
  code: 'enx',
  accent: '#316A32',
  accentRationale: 'enVision Math help: a garden green, #316A32 as allocated, fresh for an elementary page and about 6.1:1 on the #FBF8F2 paper',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'enVision Math help',
  title: 'enVision Math Help: Live Tutoring for Grades K to 8 (Savvas)',
  description: 'enVision Math help for parents: how Savvas enVision+ lessons move from a task to a visual model, where children get stuck, and live tutoring for grades K to 8.',
  ogDescription: 'Your child\'s school uses enVision Mathematics from Savvas. How a lesson is meant to flow, what the Additional Practice Workbook is for, why homework can look unfamiliar, and how a live tutor helps.',
  twitterDescription: 'Live help for enVision Math homework, from a teacher who starts with what your child already knows.',
  pageName: 'enVision Math Help',
  webPageDescription: 'A guide for US parents whose children use enVision Mathematics from Savvas Learning Company, built from savvas.com checked on 31 October 2026; the worked examples and stall points are written by Modern Age Coders.',
  courseDescription: 'Live online math lessons for elementary and middle school students whose schools use enVision Mathematics, grades K to 8, teaching the models behind the homework, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'enVision Math help',
  navLinks: [
    { href: '#bands', label: 'Grade bands' },
    { href: '#flow', label: 'Lesson flow' },
    { href: '#materials', label: 'Materials' },
    { href: '#tricky', label: 'Tricky spots' },
    { href: '#models', label: 'Examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; enVision+ Mathematics from Savvas &middot; Grades K to 8',
  h1: 'enVision Math help for parents and kids, grades K to 8',
  lede: 'enVision Mathematics, from Savvas Learning Company, asks children to try a problem before they are shown a method, then connects their attempt to a picture or model. When it works, children understand why the method exists. When it does not, homework can arrive looking like a puzzle with no instructions, and parents taught a different way are not sure how to help. This page explains the lesson flow from the publisher\'s own description and shows how a live teacher builds on the same models.',
  secondaryCta: { href: '#models', label: 'See the worked examples' },
  wa: 'Hello Modern Age Coders, my child\'s school uses enVision Math and homework is a struggle. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; grades K to 12',
  spec: [
    ['Publisher', 'Savvas Learning Company'],
    ['Program', 'enVision+ Mathematics'],
    ['Bands', 'K-5, 6-8, high school'],
    ['Platform', 'Savvas Realize'],
    ['Our help', 'Live online lessons'],
    ['Formats', 'Batch of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'At a glance',
  capsule: 'enVision Mathematics is a K to 12 math curriculum from Savvas Learning Company; its current enVision+ Mathematics editions cover grades K-5 and 6-8, with enVision A|G|A and Integrated Mathematics for high school. Lessons start with an exploration task, then a visual learning example. For enVision Math help, Modern Age Coders teaches children live online (Elementary Mathematics course), either with a batch of classmates or 1-on-1, starting with a free class.',

  picks: {
    eyebrow: 'Courses beside the school program',
    h2: 'Live classes for children who learn with enVision',
    lede: 'Your child\'s school sets the topics. We teach the thinking behind them, using the same kinds of pictures and models.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'ENV / 01', title: 'Elementary math', note: 'Grades 1 to 5: place value, the four operations, fractions, measurement.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'ENV / 02', title: 'Middle school math', note: 'Grades 6 to 8: ratio, rational numbers, equations and geometry.' },
      { course: 'mental-maths-mastery-kids', code: 'ENV / 03', title: 'Mental math', note: 'Fact fluency and number sense that make each topic lighter.' }
    ]
  },

  sections: [
    {
      id: 'bands', tint: 'tint', eyebrow: 'Grade bands',
      h2: 'Which grades does enVision Math cover?',
      lede: 'Savvas lists four parts of the enVision family on its K-12 page. Elementary and middle school use enVision+ Mathematics; high schools use one of two course structures.',
      body: [
        { kind: 'table', caption: 'The enVision family as listed by Savvas (savvas.com enVision Mathematics K-12 page, checked 31 October 2026)', head: ['Program', 'Grades or courses', 'How Savvas describes it'], rows: [
          ['enVision+ Mathematics K-5 (2027 edition)', 'Kindergarten to grade 5', 'Develops "deep math connections and lasting understanding" through investigations focused on the why, what and how of math'],
          ['enVision+ Mathematics 6-8 (2027 edition)', 'Grades 6 to 8', '"brings math to life through real-world problem solving"'],
          ['enVision A|G|A (2024 edition)', 'Algebra 1, Geometry, Algebra 2', 'The traditional high school course sequence'],
          ['enVision+ Integrated Mathematics (2028 edition)', 'Integrated Mathematics I to III', 'A problem-based integrated high school sequence']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Topics, not chapters',
          left: [
            'Savvas refers to "Expanded Notes in Topic 1" in its teacher materials, and enVision books are organized by topics. When your child says "topic 8, lesson 3", that is the address of the homework.',
            'Note the edition on the cover too. A 2027 enVision+ book and an older enVision book may number the same idea differently.'
          ],
          rightH3: 'Where our classes focus',
          right: [
            'We work most with enVision students in grades 1 to 8, where homework support is most often needed and parents are most likely to have learned math another way.',
            'For high school students on enVision A|G|A, our algebra and high school courses follow the Algebra 1, Geometry and Algebra 2 sequence.'
          ] },
        { kind: 'source', html: 'Sources: Savvas <a class="ag-inline-link" href="https://www.savvas.com/solutions/mathematics/envision-mathematics-grades-k-12" rel="noopener" target="_blank">enVision Mathematics K-12</a>, <a class="ag-inline-link" href="https://www.savvas.com/solutions/mathematics/core-programs/envision-mathematics-grades-k-5" rel="noopener" target="_blank">K-5</a>, <a class="ag-inline-link" href="https://www.savvas.com/solutions/mathematics/core-programs/envision-mathematics-grades-6-8" rel="noopener" target="_blank">6-8</a> and <a class="ag-inline-link" href="https://www.savvas.com/solutions/mathematics/core-programs/envision-a-g-a" rel="noopener" target="_blank">A|G|A</a> pages, checked 31 October 2026. enVision and Savvas are trademarks of Savvas Learning Company LLC. Modern Age Coders is not affiliated with or endorsed by Savvas.' }
      ]
    },
    {
      id: 'flow', tint: 'deep', eyebrow: 'Lesson flow',
      h2: 'How is an enVision Math lesson structured?',
      lede: 'Savvas describes the lesson sequence in three sentences on its K-5 and 6-8 pages. Reading them helps a parent see why the first page of a lesson often has no rule on it.',
      body: [
        { kind: 'table', caption: 'enVision lesson flow in Savvas\'s words (K-5 and 6-8 program pages, checked 31 October 2026), with what a parent will notice (our reading)', head: ['Part', 'Savvas\'s description', 'What it looks like at home'], rows: [
          ['Investigate', '"Students take a deep-dive investigative approach, followed by connecting questions."', 'An open problem, often with no method shown'],
          ['Explore, then visual learning', '"Students explore new content in a task using prior knowledge, followed by a visual learning example to connect the task to new knowledge."', 'A worked picture or model after the try'],
          ['Apply', '"Students apply newly learned content in an investigation by developing a model leading to a solution."', 'Practice and homework problems that expect a drawn model']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Fluency', p: 'Savvas states that "Procedural fluency development is a core instructional element that builds confident problem solvers." Daily fluency routines sit alongside the problem solving.' },
          { h3: 'Language', p: 'It also says "Integrated daily routines empower students in building and refining mathematical language." Children are expected to explain, not only compute.' },
          { h3: 'Projects', p: 'Elementary students meet STEAM contexts, and the K-5 page says "Students choose the project and the outcome in these real-world projects."' }
        ] },
        { kind: 'p', mt: true, html: 'The design has a practical consequence for homework. A child who missed or misunderstood the exploration and the visual learning example can find the practice page baffling, because each problem assumes the model from earlier in the lesson. The repair is to go back to that model, not to teach a shortcut.' }
      ]
    },
    {
      id: 'materials', tint: 'tint', eyebrow: 'Materials',
      h2: 'What is the enVision Additional Practice Workbook, and what is on Savvas Realize?',
      lede: 'Families search often for the enVision practice book by grade. Savvas lists it as one of the core components, alongside the digital platform where most of the program lives.',
      body: [
        { kind: 'table', caption: 'enVision+ Mathematics components named on the Savvas K-5 and 6-8 pages (checked 31 October 2026)', head: ['Component', 'What Savvas says'], rows: [
          ['Print', 'Student Editions, an Additional Practice Workbook, and Teacher\'s Editions'],
          ['Digital platform', '"Savvas Realize provides access to all the enVision+ digital resources", including interactive tools and assignable print materials'],
          ['Differentiation', 'Savvas Realize auto-assigned differentiation, plus adaptive practice with a personalized pathway'],
          ['Manipulatives', 'Digital manipulatives with 1-, 2- and 3-dimensional models, and assembled hands-on kits'],
          ['Games', 'Game boards or digital games aligned with the topic'],
          ['Languages', 'Spanish components and multilingual strategies'],
          ['Related products', 'SuccessMaker adaptive math for K-8, and Momentum Math assessment, which Savvas says integrates with enVision+ Mathematics K-8']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Getting into Savvas Realize',
          left: [
            'Student logins for Savvas Realize are issued by the school. If your child cannot sign in from home, the class teacher is the person to ask.',
            'Inside, look for the topic and lesson your child is on. The visual learning example for that lesson is the best single page to review before homework.'
          ],
          rightH3: 'Using the practice book well',
          right: [
            'The Additional Practice Workbook is for practice after the lesson. If a page is hard, read the lesson\'s visual learning example first, then try the first problem together and let your child do the rest.',
            'We do not supply answer keys or complete assigned pages. In class our teachers write fresh problems on the same topic so the school work stays your child\'s own.'
          ] }
      ]
    },
    {
      id: 'tricky', tint: 'deep', eyebrow: 'Tricky spots',
      h2: 'Where do children commonly get stuck with enVision Math?',
      lede: 'From live lessons with elementary and middle school students, these are the places our teachers meet most often. They are general teaching guidance, not statistics about the program.',
      body: [
        { kind: 'table', caption: 'Common sticking points by grade and what helps (our teaching notes)', head: ['Grade', 'Where it sticks', 'What tends to help'], rows: [
          ['K to 2', 'Explaining how they counted, not just the number', 'Ask "show me how you knew"'],
          ['3', 'Multiplication as equal groups and as arrays', 'Draw the array, then split it'],
          ['4', 'Comparing and building equivalent fractions', 'Number lines with the same whole'],
          ['5', 'Volume and adding unlike fractions', 'Layers of cubes; common pieces'],
          ['6 and 7', 'Ratios, rates and negative numbers', 'Tables first, rules second'],
          ['8', 'Linear equations and functions', 'Connect table, graph and equation']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When the try comes back blank',
          left: [
            'Some children freeze on the opening task because there is no method to copy. That is often a confidence issue rather than a skill gap.',
            'We teach a simple start routine: write what you know, draw something, guess and check. Any start is better than a blank box.'
          ],
          rightH3: 'When the parent\'s method clashes',
          right: [
            'A parent may show the standard algorithm when the lesson is building toward it through a model. Both are correct; the school will ask for the model first.',
            'We show parents in a few minutes how the model leads to the method they know, so the help at home and the lesson in school point the same way.'
          ] }
      ]
    },
    {
      id: 'models', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'What do enVision-style models look like on real problems?',
      lede: 'Four original examples written by our teachers on grade 3 to 5 topics. Each follows the same path as an enVision lesson: try with what you know, then connect to a model. None is taken from a Savvas book.',
      body: [
        { kind: 'table', caption: '6 x 14, a grade 3 topic, from a first try to an area model (our example)', head: ['Stage', 'What the child does', 'What the teacher asks'], rows: [
          ['Try', 'Counts 14 six times, or adds 14 + 14 + 14 + 14 + 14 + 14', '"That works. Can we find it faster?"'],
          ['Connect', 'Draws a 6 by 14 rectangle and splits 14 into 10 and 4', '"Which part do you already know?"'],
          ['Model', '6 x 10 = 60 and 6 x 4 = 24', '"What are the two smaller rectangles worth?"'],
          ['Solve', '60 + 24 = 84', '"Why can we add the parts?"'],
          ['Explain', '"The big rectangle is the two small ones together."', '"Would splitting 14 into 7 and 7 also work?"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Sharing 36 among 4 (grade 3)',
          left: [
            'Our problem: 36 stickers shared equally among 4 friends. Try: deal them out one at a time. Connect: deal them 5 at a time, then 4 at a time. Model: 4 x 9 = 36, so each friend gets 9.',
            'The idea to say aloud: division asks for the missing factor. "Four times what makes 36?" is the same question as "36 shared by 4."'
          ],
          rightH3: 'Comparing 3/4 and 5/8 (grade 4)',
          right: [
            'Our problem: which is larger, 3/4 or 5/8? Draw two number lines from 0 to 1 of the same length. Split one into fourths and one into eighths. Three fourths lands at the same point as six eighths.',
            'Six eighths is past five eighths, so 3/4 is larger by one eighth. The idea to say aloud: fractions can only be compared fairly when the whole is the same size.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Volume by layers (grade 5)',
          left: [
            'Our problem: a box 4 cubes long, 3 cubes wide and 5 cubes tall. One layer holds 4 x 3 = 12 cubes. Five layers hold 12 x 5 = 60 cubes.',
            'The idea to say aloud: volume is the bottom layer times the number of layers, which is why length x width x height works.'
          ],
          rightH3: 'Adding 1/2 and 1/3 (grade 5)',
          right: [
            'Our problem: 1/2 + 1/3. Draw a rectangle, split it into 6 equal pieces. Half is 3 pieces and a third is 2 pieces, so together they are 5 of 6 pieces: 5/6.',
            'The idea to say aloud: you can only add pieces of the same size, so find a size both fractions can be made from.'
          ] },
        { kind: 'table', mt: true, caption: 'Practice set: try first, then draw the model (ours; answers in brackets)', head: ['Problem', 'Model to use'], rows: [
          ['7 x 16', 'Split 16 into 10 and 6 [112]'],
          ['48 shared among 6', 'Missing factor: 6 x ? = 48 [8]'],
          ['Which is larger, 2/3 or 7/12?', 'Number lines, same whole [2/3, by one twelfth]'],
          ['A box 5 by 2 by 6 cubes', 'Layers [60 cubes]'],
          ['1/4 + 1/6', 'Twelfths [5/12]'],
          ['A rate of 3 laps in 12 minutes; minutes for 5 laps?', 'Table of laps and minutes [20]']
        ] }
      ]
    },
    {
      id: 'alongside', tint: 'deep', eyebrow: 'With a tutor',
      h2: 'How can a live tutor support enVision Math at home?',
      lede: 'Our lessons do not replace the school program. They make the models in it feel natural, so homework and tests both get easier to start.',
      body: [
        { kind: 'ol', items: [
          '<b>Tell us the grade, topic and lesson.</b> A photo of the homework page header is enough.',
          '<b>Revisit the model.</b> The teacher rebuilds the lesson\'s picture or model with your child, using new numbers.',
          '<b>Let your child try first.</b> Just as enVision does, the teacher sets a fresh problem and waits for an attempt before guiding.',
          '<b>Connect to the homework.</b> Your child then does a school problem alone and explains which model they used.',
          '<b>Keep fluency ticking.</b> A few minutes of facts in each class, so the arithmetic does not slow the thinking.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'School alone may be enough', p: 'If homework is finished calmly and your child can explain the pictures they draw.' },
          { h3: 'A batch may suit', p: 'If your child likes hearing how others solved a problem, in a group of fifteen to twenty.' },
          { h3: 'One to one may suit', p: 'If a topic from a year or two back is missing, or confidence on open tasks is low.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Try, then connect',
    h2: 'How confidence grows in a model-first curriculum',
    lede: 'Our description of the stages children pass through.',
    table: { caption: 'Stages of working with models (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Waiting', 'Will not start without a method'],
      ['2. Trying', 'Makes an attempt, however slow'],
      ['3. Modelling', 'Draws the picture the lesson used'],
      ['4. Choosing', 'Picks a model or a method and says why']
    ] },
    left: { h3: 'For parents', ps: [
      'Praise the attempt at stage 2. It is the habit enVision is trying to build.',
      'Ask for the picture before the answer. It shows the thinking.'
    ] },
    right: { h3: 'For students', ps: [
      'Stuck? Write what you know and draw something.',
      'A picture that works is never wrong, even if it is slow.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for enVision students, K to 8',
    lede: 'Grouped like the enVision+ grade bands.',
    bands: [
      { num: 'I', h3: 'Kindergarten to grade 2', sub: 'Early years', courses: [
        { code: 'ENV / P / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Counting and shapes, hands on.' },
        { code: 'ENV / P / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Patterns and spatial play, ages 6 to 9.' },
        { code: 'ENV / P / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental math', blurb: 'Place value with beads.' }
      ] },
      { num: 'II', h3: 'Grades 3 to 5', sub: 'Elementary', courses: [
        { code: 'ENV / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Operations, fractions, measurement.' },
        { code: 'ENV / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Facts with understanding.' }
      ] },
      { num: 'III', h3: 'Grades 6 to 8', sub: 'Middle school', courses: [
        { code: 'ENV / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratio to linear equations.' },
        { code: 'ENV / M / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Patterns tested in Python.' },
        { code: 'ENV / M / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Ready for Algebra 1.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class time',
    h2: 'Live classes that build on the school\'s models',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, close to homework time.' },
      { time: 'Weekends', l: 'A calm review of the week\'s topic.' },
      { time: '1-on-1', l: 'Fitted around your family.' }
    ],
    cells: [
      { h3: 'Topic by topic', p: 'We follow the school order.' },
      { h3: 'Try first', p: 'Children attempt before guidance.' },
      { h3: 'Pictures count', p: 'Models drawn, then explained.' },
      { h3: 'Facts daily', p: 'Short fluency practice.' },
      { h3: 'Parents included', p: 'Quick notes on the model used.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one child.' }
    ]
  },

  projectsH2: 'Made by our students',
  projectsLede: 'Older students often add a little coding. See a few of their projects on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, shown exactly as posted.',

  fees: {
    h2: 'Fees',
    lede: 'enVision support is billed each month in US dollars. There is no term contract, so many families join for a difficult topic such as fractions and stop once homework is calm again.',
    free: ['First class free', 'Bring this week\'s topic', 'No card required'],
    group: ['Classes of fifteen to twenty', 'A steady teacher', 'You choose the batch', 'Billed monthly'],
    one: ['A teacher just for your child', 'Matched to the school topic', 'Your choice of times']
  },

  faq: {
    eyebrow: 'Parent questions',
    h2: 'enVision Math help: common questions',
    items: [
      { q: 'Can you help my child with enVision Math homework online?', a: 'Yes. We teach live online lessons for children whose schools use enVision Mathematics, from kindergarten to grade 8. Our teachers explain the lesson\'s model on fresh problems, in a batch of 15 to 20 or one to one.' },
      { q: 'Who publishes enVision Math?', a: 'Savvas Learning Company. Its current elementary and middle school editions are called enVision+ Mathematics, with enVision A|G|A and enVision+ Integrated Mathematics for high school.' },
      { q: 'Why does enVision homework look so different from how I learned math?', a: 'Savvas says students explore a task using prior knowledge first, then see a visual learning example that connects it to the new idea. So homework often asks for a drawn model before the standard method, which the program builds toward.' },
      { q: 'What is the enVision Additional Practice Workbook?', a: 'Savvas lists it as one of the print components, alongside the Student Editions and Teacher\'s Editions. It gives practice after each lesson; reading that lesson\'s visual learning example first usually makes it much easier.' },
      { q: 'Where can I find the enVision Math practice book for grade 3, 4 or 5?', a: 'Ask the school which edition your child uses and whether pages are assigned through Savvas Realize, where Savvas says all the enVision+ digital resources live. Our classes add fresh practice written by our teachers on the same topics.' },
      { q: 'Do you give enVision Math answers?', a: 'No. We do not hand out answer keys or complete assigned work. We teach the model on a new problem, and your child then does the school problem and explains it.' },
      { q: 'How do I log in to Savvas Realize at home?', a: 'Student logins come from the school, so the class teacher is the right person to ask if your child cannot sign in. Once inside, find the current topic and lesson.' },
      { q: 'What does an enVision math tutor actually do?', a: 'In our classes a tutor rebuilds the lesson\'s model with new numbers, lets your child try first, then connects the model to the homework. The goal is for your child to start problems alone.' },
      { q: 'When are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Savvas?', a: 'No. We are an independent online school. enVision and Savvas are trademarks of Savvas Learning Company LLC, and we describe the program only from its published pages.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Grade-by-grade math help in the US.',
    items: [
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'Multiplication, division and early fractions.' },
      { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math tutoring', p: 'Multi-digit work and equivalent fractions.' },
      { href: '/online-math-tutor-5th-grade', label: 'Fifth grade math tutoring', p: 'Fraction operations, decimals and volume.' },
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core vs traditional math', p: 'Why homework methods look new to parents.' },
      { href: '/eureka-math-homework-help', label: 'Eureka Math homework help', p: 'Another school program built on models.' },
      { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math tutoring', p: 'Ratios and the start of middle school.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child\'s grade and the enVision topic and lesson on this week\'s homework. We will start from the model that lesson uses.',
    readFirst: 'Learn <a class="ag-inline-link" href="/how-we-teach">how a live class works</a>, or browse <a class="ag-inline-link" href="/courses">our full course list</a>.',
    note: 'Lessons are taught by our teachers in India at times that fall after school across US time zones. A WhatsApp message starts the conversation.',
    formNote: 'No payment information is needed to book the free class.'
  },

  footer: {
    cols: [
      { h4: 'Math by grade', links: [
        { href: '/online-math-tutor-kindergarten', label: 'Kindergarten math' },
        { href: '/online-math-tutor-2nd-grade', label: 'Grade 2 math' },
        { href: '/online-math-tutor-5th-grade', label: 'Grade 5 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/common-core-math-tutor', label: 'Common Core help' },
        { href: '/khan-academy-math-vs-live-tutor', label: 'Khan Academy vs a tutor' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Try it, then draw it'
  },

  personalityCss: `
.ag-root.ag-enx .ag-hero h1 { letter-spacing: -0.01em; max-width: 20ch; }
.ag-root.ag-enx .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-enx .ag-table caption { text-align: left; font-weight: 500; font-style: italic; }
.ag-root.ag-enx .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-enx .ag-section-head h2 { max-width: 34ch; }
`,

  dossier: {
    curriculumAuthority: 'Savvas Learning Company, savvas.com enVision Mathematics K-12, enVision+ Mathematics K-5 and 6-8, and enVision A|G|A pages, read raw 31 October 2026: band list with editions (K-5 and 6-8 2027, A|G|A 2024, Integrated 2028); K-5 description; 6-8 real-world problem solving; three-sentence lesson flow; fluency and language routines; STEAM projects; Student Editions, Additional Practice Workbook, Teacher\'s Editions; Savvas Realize; differentiation and adaptive practice; digital manipulatives; game boards; Spanish components; SuccessMaker and Momentum Math.',
    localProject: 'Our walk-through of 6 x 14 from repeated addition to an area model; 36 shared by 4 as a missing factor; 3/4 against 5/8 on matched number lines; prism volume by layers; 1/2 + 1/3 in sixths; a stall table by grade; a six-item try-then-model practice set. Lesson family: start from what the child knows, then connect it to the model.',
    requiredMentions: [
      'brings math to life through real-world problem solving',
      'Students take a deep-dive investigative approach, followed by connecting questions.',
      'Students explore new content in a task using prior knowledge, followed by a visual learning example to connect the task to new knowledge.',
      'Students apply newly learned content in an investigation by developing a model leading to a solution.',
      'Procedural fluency development is a core instructional element that builds confident problem solvers.',
      'Integrated daily routines empower students in building and refining mathematical language.',
      'Savvas Realize provides access to all the enVision+ digital resources',
      'Students choose the project and the outcome in these real-world projects.',
      '6 x 10 = 60 and 6 x 4 = 24',
      'One layer holds 4 x 3 = 12 cubes'
    ],
    sources: [
      { claim: 'enVision family, editions and band descriptions.', url: 'https://www.savvas.com/solutions/mathematics/envision-mathematics-grades-k-12' },
      { claim: 'K-5 lesson flow, components, Savvas Realize, routines, projects.', url: 'https://www.savvas.com/solutions/mathematics/core-programs/envision-mathematics-grades-k-5' },
      { claim: 'Grades 6-8 description and lesson flow.', url: 'https://www.savvas.com/solutions/mathematics/core-programs/envision-mathematics-grades-6-8' },
      { claim: 'enVision A|G|A courses.', url: 'https://www.savvas.com/solutions/mathematics/core-programs/envision-a-g-a' }
    ],
    rejectedClaims: [
      'Savvas efficacy studies and their percentage gains: not repeated; their demographic breakdowns by race are barred by the brief.',
      'District case studies and author names: not used.',
      'Any statement about enVision\'s earlier publisher: not printed, as the Savvas pages read do not state it.',
      'Lesson content, Additional Practice Workbook pages, answers and tests: not reproduced; all problems are ours.',
      'Prices: not used.',
      'That tutoring raises grades or test results: refused.',
      'Any affiliation with Savvas Learning Company: none, stated on the page.'
    ]
  }
};
