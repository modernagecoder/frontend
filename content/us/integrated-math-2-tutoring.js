'use strict';
// Integrated Math II tutoring (ag- guide door; UK and US exams cluster, row US005). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/integrated-math-2-tutoring/:
//  - Utah State Board of Education, Utah Core State Standards for Mathematics, High School PDF (ADA May 2021), Secondary
//    Mathematics II: "THE FOCUS OF SECONDARY MATHEMATICS II is on quadratic expressions, equations, and functions"; "real
//    and complex numbers are introduced so that all quadratic equations can be solved"; "The link between probability and
//    data is explored through conditional probability and counting methods"; "The study of similarity leads to an
//    understanding of right triangle trigonometry and connects to quadratics through Pythagorean relationships"; "Circles,
//    with their quadratic algebraic representations, round out the course"; Area 1 "The guiding principle is that equations
//    with no solutions in one number system may have solutions in a larger number system"; Area 2 "the graph of the related
//    quadratic function does not cross the horizontal axis"; "absolute value, step, and those that are piecewise-defined";
//    Area 4 "Students should make use of geometric probability models wherever possible"; Area 5 "It is in this unit that
//    students develop facility with geometric proof"; Area 6 circle equation and parabola from focus and directrix.
//  - USBE Graduation Pathways (2021): Secondary Math II topics; Secondary Math II Plus "Depth in Complex Numbers",
//    "Trigonometric Identities", "Conic Sections"; Alternative Selections need Secondary Math II as prerequisite.
//  - NC DPI Standard Course of Study page: an exempted student "will be required to pass: NC Math 1 and Math 2 plus two
//    additional courses identified on the NC DPI Math options chart."
//  - CCSS mathematics PDF page 84 on traditional and integrated sequences (Mathematics 1, 2, 3).
//  - NWEA MAP Growth features page: course-specific tests include Integrated Math 1, 2 and 3.
// Our own material, labelled: one quadratic in three forms (x^2 - 6x + 8 = (x - 2)(x - 4) = (x - 3)^2 - 1), complex roots
// -2 +/- 3i of x^2 + 4x + 13 = 0, 27^(2/3) = 9, a 30-60-90 triangle with short leg 5, a circle completed to centre (3, -2)
// radius 5, a dartboard probability 9 pi / 100 with an independence twist, 7C3 = 35, a twelve-item practice set and a plan.
// Lesson family: one quadratic, many representations.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COURSE HELP', blurb: 'Integrated Math II explained: quadratics in three forms, complex numbers, similarity and right-triangle trig, circles and conditional probability.' },
  slug: 'integrated-math-2-tutoring',
  code: 'int',
  accent: '#5F4518',
  accentRationale: 'Integrated Math II tutoring: a dark walnut #5F4518 from the US allocation table, 8.43:1 on paper #FBF8F2 and 7.25:1 on the deepest tint, warm and clearly apart from the blue Integrated Math I page',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'Integrated Math 2 tutoring',
  title: 'Integrated Math 2 Tutoring: Integrated Math II Help Online',
  description: 'Integrated Math 2 tutoring online: quadratics, complex numbers, similarity, right triangle trig, circles and probability in Integrated Math II, with worked examples.',
  ogDescription: 'Integrated Math II is the quadratics year, with geometry proof, trig and probability woven in. What the course holds, where students stall, and our own practice.',
  twitterDescription: 'Integrated Math II explained from state course documents, with original practice.',
  pageName: 'Integrated Math 2 Tutoring',
  webPageDescription: 'A guide to Integrated Math II (Math 2, Secondary Mathematics II) for students and families, drawn from state course documents and the Common Core note on integrated sequences, with original worked examples and practice.',
  courseDescription: 'Integrated Math II taught live online for grade 10 students: quadratic functions, the complex numbers, similarity and trigonometry, circles and probability, as a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Integrated Math 2 tutoring',
  navLinks: [
    { href: '#focus', label: 'The focus' },
    { href: '#areas', label: 'Six areas' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#practice', label: 'Practice' },
    { href: '#ladder', label: 'Moving schools' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grade 10 math &middot; Integrated pathway',
  h1: 'Integrated Math 2 tutoring: help with Integrated Math II',
  lede: 'Integrated Math II is the year quadratics take over. A tenth grader factors, completes the square and graphs parabolas, then finds that some quadratics have no real solutions at all and meets the complex numbers. Between those algebra units sit similarity, the first trigonometry, circle theorems and a probability unit. Students who changed schools between Algebra 1 and Geometry and an integrated course often arrive missing one piece. This page shows what the course holds and teaches its core skill.',
  secondaryCta: { href: '#areas', label: 'See the six areas' },
  wa: 'Hello Modern Age Coders, my child is in Integrated Math 2 and is finding quadratics hard. Could we try a free first class?',
  heroNote: 'Live math teaching since 2020 &middot; 10,000+ students &middot; grade 10 and up',
  spec: [
    ['Course', 'Integrated Math II, also Math 2 or Secondary Math II'],
    ['Usual grade', 'Grade 10'],
    ['Focus', 'Quadratic expressions, equations, functions'],
    ['Also in it', 'Similarity, trig, circles, probability'],
    ['Comes after', 'Integrated Math I'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Integrated Math II is the second course of the integrated high school pathway, usually taken in grade 10. Utah, which calls it Secondary Mathematics II, says its focus "is on quadratic expressions, equations, and functions", alongside complex numbers, conditional probability, similarity, right triangle trigonometry and circles. We teach it live online through our High School Mathematics course, either as a 15 to 20 student batch or in private 1-on-1 lessons.',

  picks: {
    eyebrow: 'Integrated Math II',
    h2: 'Three courses for Integrated Math II',
    lede: 'The high school course covers every unit of the year; the other two strengthen the algebra below it and the probability inside it.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'INT / 01', title: 'High school math', note: 'Quadratics, similarity, trigonometry and circles.' },
      { course: 'algebra-foundations-masterclass', code: 'INT / 02', title: 'Algebra foundations', note: 'Factoring and exponent rules, if they are shaky.' },
      { course: 'statistics-probability-maths-course', code: 'INT / 03', title: 'Statistics and probability', note: 'Conditional probability and counting.' }
    ]
  },

  sections: [
    {
      id: 'focus', tint: 'tint', eyebrow: 'The focus',
      h2: 'What is taught in Integrated Math 2?',
      lede: 'Quadratics first, with four other threads tied to them. Utah\'s course description spells out the links in a single paragraph, quoted here in parts.',
      body: [
        { kind: 'table', caption: 'How Secondary Mathematics II ties its topics together (Utah Core State Standards for Mathematics, High School, read 31 October 2026)', head: ['Thread', 'Utah\'s own words'], rows: [
          ['Quadratics', '"THE FOCUS OF SECONDARY MATHEMATICS II is on quadratic expressions, equations, and functions and on comparing their characteristics and behavior to those of linear and exponential relationships"'],
          ['Number system', '"real and complex numbers are introduced so that all quadratic equations can be solved"'],
          ['Probability', '"The link between probability and data is explored through conditional probability and counting methods"'],
          ['Similarity and trig', '"The study of similarity leads to an understanding of right triangle trigonometry and connects to quadratics through Pythagorean relationships"'],
          ['Circles', '"Circles, with their quadratic algebraic representations, round out the course"']
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.schools.utah.gov/curr/mathematics/_mathematics_/_core/_utah_core_standards_tab_/CoreStandardsHighSchool.pdf" rel="noopener" target="_blank">Utah Core State Standards for Mathematics, High School</a> (Utah State Board of Education). Other states and districts that teach an integrated pathway use their own course names and unit orders.' },
        { kind: 'two', mt: true,
          leftH3: 'Why quadratics sit at the center',
          left: [
            'Almost every unit returns to a squared term. Right triangles bring a^2 + b^2 = c^2; a circle centered at the origin is x^2 + y^2 = r^2; the complex numbers exist, in this course, to finish off quadratics that have no real roots.',
            'So a student who is weak at factoring and completing the square tends to struggle all year, not just in the first unit. That is where our lessons usually begin.'
          ],
          rightH3: 'Where Integrated Math II sits',
          right: [
            'The Common Core lists an "integrated course sequence (Mathematics 1, Mathematics 2, Mathematics 3)" as one model alongside Algebra I, Geometry and Algebra II.',
            'North Carolina treats the second course as close to essential: even a student exempted from its standard sequence "will be required to pass: NC Math 1 and Math 2 plus two additional courses identified on the NC DPI Math options chart."'
          ] }
      ]
    },
    {
      id: 'areas', tint: 'deep', eyebrow: 'Six areas',
      h2: 'What are the units of Integrated Math II?',
      lede: 'Utah divides the course into six critical areas. The right-hand column is our summary of what a student actually does in each.',
      body: [
        { kind: 'table', caption: 'Secondary Mathematics II critical areas (Utah Core State Standards for Mathematics, High School; summary column ours)', head: ['Area', 'Utah\'s description, shortened', 'What the student does (ours)'], rows: [
          ['1. Number systems', 'Rational exponents; rational and irrational numbers; "equations with no solutions in one number system may have solutions in a larger number system"', 'Simplify 27^(2/3); meet i, the square root of -1'],
          ['2. Quadratic functions', 'Compare with linear and exponential; read graphs from forms; when there are no real solutions, the graph "does not cross the horizontal axis"; absolute value, step and piecewise functions', 'Read zeros, vertex and intercept from three forms'],
          ['3. Expressions and equations', 'Rewrite expressions to reveal structure; solve equations and systems with exponential and quadratic expressions', 'Factor, complete the square, use the quadratic formula'],
          ['4. Probability', 'Compound events, independence, conditional probability; "Students should make use of geometric probability models wherever possible"', 'Area models, tree diagrams, combinations'],
          ['5. Similarity and trig', 'Similarity criteria, right triangle trigonometry, special right triangles; "It is in this unit that students develop facility with geometric proof"', 'Prove triangles similar; find sides with sine, cosine, tangent'],
          ['6. Circles', 'Circle theorems; equation of a circle from center and radius; a parabola from focus and directrix; intersections of lines and circles', 'Complete the square to find center and radius']
        ] },
        { kind: 'p', mt: true, html: 'Utah also offers an extended version, Secondary Math II Plus, which its 2021 pathways chart says adds "Depth in Complex Numbers", "Trigonometric Identities" and "Conic Sections." Students on the extended track need the core skills on this page first, then the extra topics.' }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'How do you find the vertex and zeros of a quadratic?',
      lede: 'Rewrite it in the form that shows what you need. Factored form shows the zeros, vertex form shows the turning point, and standard form shows the y-intercept. Every example below is our own.',
      body: [
        { kind: 'table', caption: 'One quadratic in three forms (ours): f(x) = x^2 - 6x + 8', head: ['Form', 'Expression', 'What it shows at a glance'], rows: [
          ['Standard', 'x^2 - 6x + 8', 'y-intercept (0, 8)'],
          ['Factored', '(x - 2)(x - 4)', 'Zeros at x = 2 and x = 4'],
          ['Vertex', '(x - 3)^2 - 1', 'Vertex (3, -1), a minimum, axis x = 3']
        ] },
        { kind: 'table', mt: true, caption: 'A quadratic with no real roots (ours): solve x^2 + 4x + 13 = 0', head: ['Step', 'Working'], rows: [
          ['1. Complete the square', 'x^2 + 4x + 4 = -13 + 4, so (x + 2)^2 = -9'],
          ['2. Notice the problem', 'No real number squares to -9, so there are no real roots'],
          ['3. Extend the number system', 'x + 2 = 3i or x + 2 = -3i, since (3i)^2 = -9'],
          ['4. Solve', 'x = -2 + 3i or x = -2 - 3i'],
          ['5. Check with the graph', 'Vertex form (x + 2)^2 + 9 has vertex (-2, 9), above the x-axis, so the parabola never crosses it']
        ] },
        { kind: 'table', mt: true, caption: 'Geometry and probability, worked by us', head: ['Problem', 'Reasoning', 'Result'], rows: [
          ['A 30-60-90 triangle has a short leg of 5. Find the other sides.', 'Sides are in the ratio 1 : root 3 : 2', 'Long leg 5 root 3, hypotenuse 10'],
          ['Find sin 60 degrees from that triangle', 'Opposite over hypotenuse: 5 root 3 over 10', 'root 3 over 2'],
          ['Center and radius of x^2 + y^2 - 6x + 4y - 12 = 0', 'Complete the square twice: (x - 3)^2 + (y + 2)^2 = 12 + 9 + 4', 'Center (3, -2), radius 5'],
          ['A dart lands at random on a 10 by 10 board with a centered circle of radius 3. P(inside the circle)?', 'Area of circle over area of board: 9 pi / 100', 'About 0.28'],
          ['Same board: P(inside the circle, given the dart is in the left half)?', 'Half the circle is in the left half: (9 pi / 2) / 50', '9 pi / 100 again, so the events are independent'],
          ['How many 3-person teams can be chosen from 7 students?', '7C3 = (7 x 6 x 5) / (3 x 2 x 1)', '35']
        ] },
        { kind: 'p', mt: true, html: 'The dartboard pair is our favorite way to teach independence with a geometric model, as Utah suggests. Because the circle is centered, knowing the dart is on the left tells you nothing about whether it hit the circle. Move the circle off center and the two probabilities split apart.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice',
      h2: 'Integrated Math 2 practice problems with answers',
      lede: 'Twelve problems written by our teachers, two from each area. They are a quick check, not a substitute for the student\'s own course review.',
      body: [
        { kind: 'table', caption: 'Integrated Math II practice from Modern Age Coders, with answers', head: ['#', 'Area', 'Problem', 'Answer'], rows: [
          ['1', 'Number', 'Simplify 16^(3/4)', '8'],
          ['2', 'Number', 'Simplify (2 + i)(2 - i)', '5'],
          ['3', 'Quadratics', 'Vertex of y = 2(x + 1)^2 - 7', '(-1, -7)'],
          ['4', 'Quadratics', 'Zeros of y = x^2 - x - 12', 'x = 4 and x = -3'],
          ['5', 'Equations', 'Solve x^2 = 6x - 9', 'x = 3 (a repeated root)'],
          ['6', 'Equations', 'Discriminant of 2x^2 + 3x + 5. How many real roots?', '-31; none'],
          ['7', 'Probability', 'Two fair coins: P(at least one head)?', '3/4'],
          ['8', 'Probability', 'Ways to arrange the letters of MATH', '24'],
          ['9', 'Similarity', 'Triangles with sides 3, 4, 5 and 6, 8, 10: similar?', 'Yes, scale factor 2'],
          ['10', 'Trig', 'Right triangle, angle 30 degrees, hypotenuse 12. Opposite side?', '6'],
          ['11', 'Circles', 'Equation of the circle with center (0, 4) and radius 3', 'x^2 + (y - 4)^2 = 9'],
          ['12', 'Circles', 'Does the line y = 5 meet x^2 + y^2 = 16?', 'No, 5 is more than the radius 4']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>First quarter: exponents and number systems.</b> Rational exponents, irrational numbers and the arithmetic of i.',
          '<b>First to second quarter: quadratic functions.</b> Three forms, graphs, and comparison with linear and exponential models.',
          '<b>Second quarter: solving.</b> Factoring, completing the square, the quadratic formula and the discriminant.',
          '<b>Third quarter: probability.</b> Two-way and area models, independence, and counting with permutations and combinations.',
          '<b>Third to fourth quarter: similarity and trig.</b> Dilations, similarity proofs, special right triangles and the three ratios.',
          '<b>Fourth quarter: circles.</b> Theorems, equations from center and radius, and intersections, then review.'
        ] },
        { kind: 'p', mt: true, html: 'The quarter-by-quarter order is our reading of Utah\'s six areas. Your school may teach similarity before probability or start with quadratics; in the first class the teacher maps our plan onto your child\'s actual calendar.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Moving schools',
    h2: 'Is Integrated Math 2 the same as Geometry?',
    lede: 'No. It mixes the quadratic algebra of a traditional Algebra 2 year with part of a traditional Geometry year. Here is what a transferring student usually needs, in our experience.',
    table: { caption: 'Common gaps when a student switches pathway around grade 10 (our teaching notes, not an official list)', head: ['Coming from', 'Going into', 'Usual gap to close'], rows: [
      ['Algebra 1', 'Integrated Math II', 'Congruence by transformations and descriptive statistics from Integrated Math I'],
      ['Algebra 1 and Geometry', 'Integrated Math II', 'Complex numbers and some probability; much of the geometry repeats'],
      ['Integrated Math I', 'Geometry', 'Little; but quadratics will be needed before Algebra 2'],
      ['Integrated Math II', 'Algebra 2', 'Polynomials beyond degree 2, logarithms, and trigonometry beyond right triangles']
    ] },
    left: { h3: 'Ask for the course map early', ps: [
      'Each district publishes or can share its scope and sequence. Comparing it with the old school\'s course is the quickest way to find gaps.',
      'A gap of one unit usually closes in three or four lessons when it is found at the start of the year.'
    ] },
    right: { h3: 'Before Integrated Math III', ps: [
      'Integrated Math III builds on quadratics with polynomial, rational and radical functions, so the forms of a quadratic need to be secure by spring.',
      'Utah lists Secondary Math II as the prerequisite for its alternative math courses, which shows how much later work depends on this year.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Courses around Integrated Math II',
    lede: 'Live courses for the skills this year relies on and the tests and courses that follow it.',
    bands: [
      { num: 'I', h3: 'Underneath', sub: 'Algebra and grade 9', courses: [
        { code: 'INT / U / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Factoring and exponents.' },
        { code: 'INT / U / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Pythagoras and ratio.' },
        { code: 'INT / U / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Graph parabolas in Python.' }
      ] },
      { num: 'II', h3: 'This year', sub: 'Grade 10', courses: [
        { code: 'INT / Y / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Every unit of the year.' },
        { code: 'INT / Y / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and chance.' },
        { code: 'INT / Y / 03', slug: 'sat-math-prep-course', title: 'SAT math', blurb: 'Quadratics on the test.' }
      ] },
      { num: 'III', h3: 'Next', sub: 'Grades 11 and 12', courses: [
        { code: 'INT / N / 01', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Functions in depth.' },
        { code: 'INT / N / 02', slug: 'act-math-prep-course', title: 'ACT math', blurb: 'Trig and circles appear.' },
        { code: 'INT / N / 03', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'The long-run goal.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Integrated Math II lessons alongside the school year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Short sessions before each school test.' },
      { time: 'Weekends', l: 'Time to rebuild factoring from scratch.' },
      { time: '1-on-1', l: 'For gaps left by a change of school.' }
    ],
    cells: [
      { h3: 'Three forms drilled', p: 'Standard, factored and vertex.' },
      { h3: 'Graph and algebra', p: 'Every root checked on a sketch.' },
      { h3: 'Proof written out', p: 'Two-column and paragraph styles.' },
      { h3: 'Area models', p: 'Probability you can draw.' },
      { h3: 'Unit order matched', p: 'We follow your district.' },
      { h3: 'Group or private', p: 'A batch of 15 to 20, or one student.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Parabolas and circles turn up in the games students build. Look through <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Families\' Google reviews, shown as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Lessons carry a monthly fee in US dollars. You can stop at the end of any month, which suits families who want help only through the quadratics units.',
    free: ['First class free', 'Share a recent test', 'Nothing to pay up front'],
    group: ['Batch of fifteen to twenty', 'Same teacher throughout', 'Your choice of slot', 'Paid monthly'],
    one: ['Private teacher', 'Paced to your child\'s unit', 'Times you choose']
  },

  faq: {
    eyebrow: 'Questions families ask',
    h2: 'Integrated Math 2: common questions',
    items: [
      { q: 'What do you learn in Integrated Math 2?', a: 'Integrated Math II centers on quadratic expressions, equations and functions. It also introduces complex numbers, conditional probability and counting, similarity with right triangle trigonometry, and circles, as Utah\'s Secondary Mathematics II course description sets out.' },
      { q: 'Is Integrated Math 2 the same as Geometry or Algebra 2?', a: 'Neither. It combines the quadratics usually found in Algebra 1 and Algebra 2 with the similarity, trigonometry and circle work of a Geometry course, so a student switching pathways may meet some topics twice and miss others.' },
      { q: 'Is Integrated Math 2 hard?', a: 'In our teaching, students often find it the most demanding of the three, because so much depends on factoring and completing the square. When those two skills are secure, the rest of the course becomes far more manageable.' },
      { q: 'Why are complex numbers in Integrated Math 2?', a: 'Because some quadratic equations have no real solutions. Utah says real and complex numbers are introduced "so that all quadratic equations can be solved", and the graph of such a quadratic never crosses the x-axis.' },
      { q: 'What grade is Integrated Math 2?', a: 'Usually grade 10, after Integrated Math I in grade 9. Accelerated students may take it in grade 9, and some districts place it in grade 11.' },
      { q: 'Where can I find Integrated Math 2 practice tests?', a: 'Start with the student\'s textbook and teacher, since tests follow the school course. This page has twelve practice problems we wrote, with answers. We do not copy end-of-course test items or publisher answer keys.' },
      { q: 'Can you help with proofs in Integrated Math 2?', a: 'Yes. Utah says the similarity unit is where students develop facility with geometric proof. We teach how to choose the right criterion and set out each reason, then the student writes their own proof.' },
      { q: 'Will you do my child\'s Integrated Math homework?', a: 'No. We teach the method and check the student\'s reasoning, but graded work has to be their own. That way they can handle the test, where no tutor is present.' },
      { q: 'When are your Integrated Math 2 classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of a school district or textbook company?', a: 'No. We are an independent online school with no link to any state, district or textbook publisher. Course names and documents on this page belong to their owners.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Other pages for grade 10 math and the integrated pathway.',
    items: [
      { href: '/psat-math-prep', label: 'PSAT math prep', p: 'Grade 10 testing with quadratics.' },
      { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring', p: 'For the traditional pathway.' },
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'Quadratics and beyond.' },
      { href: '/trigonometry-tutoring-online', label: 'Trigonometry tutoring', p: 'Right triangles onward.' },
      { href: '/online-math-tutor-10th-grade', label: 'Tenth grade math', p: 'The usual Integrated Math II year.' },
      { href: '/online-math-tutor-cost', label: 'Math tutor cost', p: 'A guide to typical tutoring fees.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send us the name of the course, the chapter in front of your child and their last test score if you have it. The teacher will start with one quadratic in all three forms.',
    readFirst: 'Find out <a class="ag-inline-link" href="/how-we-teach">how we run lessons</a>, or explore <a class="ag-inline-link" href="/courses">our courses</a>.',
    note: 'Teachers work from India and run sessions that land after school in every mainland US time zone. Message us on WhatsApp for the fastest reply.',
    formNote: 'No charge for the first class and no card required.'
  },

  footer: {
    cols: [
      { h4: 'Grade 10 and 11 math', links: [
        { href: '/precalculus-tutoring-online', label: 'Precalculus' },
        { href: '/geometry-tutoring-online-usa', label: 'Geometry' },
        { href: '/algebra-2-tutoring-online', label: 'Algebra 2' },
        { href: '/trigonometry-tutoring-online', label: 'Trigonometry' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-math-tutor-10th-grade', label: 'Grade 10 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '(x + 2)^2 = -9, so x = -2 +/- 3i'
  },

  personalityCss: `
.ag-root.ag-int .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-int .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-int .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-int .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-int .ag-section-head h2 { max-width: 26ch; }
`,

  dossier: {
    curriculumAuthority: 'Utah Core State Standards for Mathematics High School (Secondary Mathematics II focus paragraph and six critical areas), USBE Graduation Pathways (2021), NC DPI Standard Course of Study page, Common Core mathematics PDF page 84, NWEA MAP Growth features; read raw 31 October 2026.',
    localProject: 'Our worked examples: x^2 - 6x + 8 in standard, factored and vertex forms; x^2 + 4x + 13 = 0 solved to -2 +/- 3i with vertex (-2, 9); a 30-60-90 triangle with short leg 5; a circle completed to center (3, -2) and radius 5; a dartboard probability 9 pi / 100 showing independence; 7C3 = 35. Twelve-item practice set and a quarter plan. Lesson family: one quadratic, many representations.',
    requiredMentions: ['THE FOCUS OF SECONDARY MATHEMATICS II is on quadratic expressions, equations, and functions', 'real and complex numbers are introduced so that all quadratic equations can be solved', 'The link between probability and data is explored through conditional probability and counting methods', 'connects to quadratics through Pythagorean relationships', 'Circles, with their quadratic algebraic representations, round out the course', 'equations with no solutions in one number system may have solutions in a larger number system', 'Students should make use of geometric probability models wherever possible', 'It is in this unit that students develop facility with geometric proof', 'NC Math 1 and Math 2 plus two additional courses identified on the NC DPI Math options chart'],
    sources: [
      { claim: 'Utah Secondary Mathematics II focus and critical areas.', url: 'https://www.schools.utah.gov/curr/mathematics/_mathematics_/_core/_utah_core_standards_tab_/CoreStandardsHighSchool.pdf' },
      { claim: 'Utah Secondary Math II and II Plus topics on the 2021 pathways chart.', url: 'https://www.schools.utah.gov/curr/mathematics/_mathematics_/_core/CoreStandardsGraduationPathways.pdf' },
      { claim: 'North Carolina: NC Math 1 and Math 2 required even under exemption.', url: 'https://www.dpi.nc.gov/districts-schools/classroom-resources/office-teaching-and-learning/standard-course-study/mathematics/standard-course-study-supporting-resources' },
      { claim: 'Common Core model sequences, traditional and integrated.', url: 'https://corestandards.org/wp-content/uploads/2023/09/Math_Standards1.pdf' }
    ],
    rejectedClaims: [
      'Common Core Appendix A Mathematics II description: the official link now redirects to the main standards document; not quoted.',
      'California and West Virginia integrated course documents: blocked (firewall, 403); not retried.',
      'End-of-course test items and textbook answer keys: not reproduced.',
      'Grade or placement promises: refused.',
      'Any affiliation with a state, district or publisher: none.'
    ]
  }
};
