'use strict';
// MCR3U Functions tutor (ag- school course door; Canada cluster Plan 2, row 14).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/mcr3u-functions-tutor/):
//  - The Ontario Curriculum, Grades 11 and 12: Mathematics (2007), www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf
//    (math1112currb.pdf, pdftotext math1112currb-raw.txt). MCR3U description: "This course introduces the mathematical concept of
//    the function by extending students' experiences with linear and quadratic relations."; "investigate inverse functions; and
//    develop facility in determining equivalent algebraic expressions"; "Prerequisite: Principles of Mathematics, Grade 10, Academic";
//    programme overview "builds on the concepts and skills developed in the Grade 9 and 10 academic mathematics courses" and "including
//    science, engineering, social sciences, liberal arts, and education"; strands A Characteristics of Functions, B Exponential
//    Functions, C Discrete Functions, D Trigonometric Functions; overall expectations in plain-word fragments (A1 "demonstrate an
//    understanding of functions, their representations, and their inverses", A3 "simplifying polynomial, radical, and rational
//    expressions", B1 "evaluate powers with rational exponents", C1 "make connections to Pascal's triangle", C3 "solve problems
//    involving compound interest and ordinary annuities", D1 "prove simple trigonometric identities", D2 "periodic relationships and
//    sinusoidal functions"); specific expectations A1.1 "explain the meaning of the term function", A1.4 "relate the process of
//    determining the inverse of a function to their understanding of reverse processes", A2.1 "calculating the discriminant", A3.3
//    "state the restrictions on the variable values", strand A3 footnote "are to be introduced as needed, and applied and consolidated,
//    as appropriate, in solving problems throughout the course.", D1.6 "(including the ambiguous case)", B2.1 "identifying a constant
//    ratio in a table of values"; the course pages of MHF4U, MDM4U and MCT4C, each naming "Functions, Grade 11, University Preparation"
//    in its prerequisite; "Each of the courses listed above is worth one credit."
//  - Ontario curriculum content API (facts-schools-contests.md facts 38 and 41, ontario/api-senior-math-courses.json): MCR3U "Functions",
//    2007, Grade 11, University Preparation; prerequisite field "Principles of Mathematics, Grade 10, Academic".
//  - ontario.ca/page/high-school-graduation-requirements (facts 45 and 48, ontario/ossd-graduation-requirements.html, updated September
//    02, 2026): "3 credits in mathematics (Grade 9, Grade 10 and 1 credit in Grade 11 or 12)" and "3 credits in mathematics (at least
//    1 credit in Grade 11 or 12)".
//  - uwaterloo.ca/future-students/programs/mathematics (raw copy): recommended course "Grade 11 U Introduction to Computer Science";
//    Advanced Functions and Calculus and Vectors among the six Grade 12 courses.
//  - Time: facts-geo.md section 3 (tzdb 2026e).
// Our own material, labelled on the page and checked in verify_ours.py (SymPy 1.14, Python 3.13): worked problem 1 (inverse of
// f(x) = 2(x - 3)^2 + 1 restricted to x >= 3: f^-1(x) = 3 + root((x - 1)/2), f(5) = 9 and f^-1(9) = 5, f(f^-1(x)) = x); worked problem 2
// (ambiguous case a = 8, b = 10, A = 40 degrees: sin B about 0.8035, B about 53.46 or 126.54 degrees, c about 12.42 or 2.90, height
// b sin A about 6.43); twelve practice questions and answers; the struggle table; the exam checklist; the ladder.
// Lesson family: one input, one output (decide what counts as a function, then work backwards from outputs to inputs).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CURR = '<a class="ag-inline-link" href="https://www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf" rel="noopener" target="_blank">Ontario Grades 11 and 12 mathematics curriculum (2007)</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'MCR3U TUTOR', blurb: 'Grade 11 Functions from the 2007 Ontario curriculum, with an inverse function and an ambiguous-case triangle solved, twelve practice questions and a final exam checklist.' },
  slug: 'mcr3u-functions-tutor',
  code: 'mft',
  accent: '#4C1919',
  accentRationale: 'MCR3U tutor, Canada: a deep oxblood, #4C1919, allocated for this row; 6.3 RGB units from the nearest site accent (#4C131B), 20.1 from the nearest other alloc.tsv accent (#522A22) and 21.8 from the nearest built Canada page (#611614); contrast 13.57 on the paper #FBF8F2 and 11.67 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  courseCodePage: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'MCR3U Functions tutor',
  title: 'MCR3U Functions Tutor: Grade 11 Help and Final Exam Prep',
  description: 'MCR3U tutor for Ontario Grade 11 Functions: the four strands from the curriculum, an inverse and a sine law case worked out, twelve questions, an exam checklist.',
  ogDescription: 'Grade 11 Functions, strand by strand, from the 2007 Ontario curriculum: functions and inverses, exponentials, sequences and series, trigonometry. Two worked problems, twelve original practice questions and a final exam checklist.',
  twitterDescription: 'MCR3U Grade 11 Functions explained from the Ontario curriculum, with practice.',
  pageName: 'MCR3U Functions Tutor',
  webPageDescription: 'A guide for Ontario Grade 11 students and parents to MCR3U, Functions, built from the 2007 curriculum document, with an inverse-function problem, an ambiguous-case triangle, twelve original practice questions and a final exam checklist.',
  courseDescription: 'Live online MCR3U help for Ontario Grade 11 students, in a batch or one to one, taught alongside the school course. No Ontario credit is granted.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'MCR3U tutor',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#covers', label: 'The strands' },
    { href: '#leads', label: 'What it unlocks' },
    { href: '#worked', label: 'Worked problems' },
    { href: '#practice', label: 'Practice' },
    { href: '#exam', label: 'Final exam' }
  ],
  eyebrow: 'Ontario &middot; Grade 11 &middot; MCR3U Functions',
  h1: 'MCR3U Functions tutor for Ontario Grade 11',
  lede: 'MCR3U is the Grade 11 course that opens the door to every Grade 12 university math course, and the one where function notation, inverses and the sine law first appear together. We set it out here from the ministry&rsquo;s 2007 curriculum, solve an inverse function and an ambiguous-case triangle with every decision explained, and add twelve practice questions we wrote ourselves. Our teaching runs next to the school course; we do not grant Ontario credits, and the credit itself comes only from the school.',
  secondaryCta: { href: '#practice', label: 'Go to the twelve questions' },
  wa: 'Hello Modern Age Coders, my teen in Ontario is taking MCR3U Functions in Grade 11 and needs help alongside school. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Following the school&rsquo;s MCR3U outline',
  spec: [
    ['Course', 'MCR3U, Functions'],
    ['Grade', '11, university preparation'],
    ['Before it', 'MPM2D, Grade 10 Academic'],
    ['Opens', 'MHF4U, MDM4U and MCT4C'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Credit', 'None granted: the school grants it'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'Quick answer',
  capsule: 'MCR3U is Functions, Ontario&rsquo;s Grade 11 university-preparation math course: functions and their inverses, exponential functions, sequences and series, and trigonometry with sinusoidal graphs. It follows MPM2D and is the prerequisite for MHF4U. Modern Age Coders teaches MCR3U live online, in a batch or one to one, through our course High School Mathematics: Algebra to Calculus, then on to Grade 12.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Courses for a Grade 11 Functions student',
    lede: 'Our Ontario course covers the Grade 12 sequence that MCR3U unlocks; the other two strengthen the Grade 11 base itself.',
    items: [
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', code: 'MFT / 01', title: 'Ontario Grade 12 University Math', note: 'Advanced Functions and Calculus and Vectors, for students planning past MCR3U, with Grade 11 gaps fixed along the way.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'MFT / 02', title: 'High school math, Grades 9 to 12', note: 'Quadratics, exponent laws and trigonometry rebuilt in order, at the pace of the student.' },
      { course: 'ap-precalculus-exam-prep-course', code: 'MFT / 03', title: 'Precalculus', note: 'Function families, inverses and sinusoids, taught a second way for students who want more practice.' }
    ]
  },

  sections: [
    {
      id: 'covers', tint: 'tint', eyebrow: 'The Ontario curriculum',
      h2: 'What Grade 11 Functions covers',
      lede: 'The course description in the 2007 curriculum starts: &ldquo;This course introduces the mathematical concept of the function by extending students&rsquo; experiences with linear and quadratic relations.&rdquo; Later it adds that students &ldquo;investigate inverse functions; and develop facility in determining equivalent algebraic expressions&rdquo;. Four strands carry the expectations.',
      body: [
        { kind: 'table', caption: 'MCR3U strands with fragments of their overall expectations, from the 2007 Ontario curriculum for Grades 11 and 12 (read 22 October 2026)', head: ['Strand', 'From the expectations', 'What students actually do (our reading)'], rows: [
          ['A. Characteristics of Functions', '&ldquo;demonstrate an understanding of functions, their representations, and their inverses&rdquo;; equivalence when &ldquo;simplifying polynomial, radical, and rational expressions&rdquo;', 'Function notation, domain and range, inverses, transformations of parent functions, quadratics in every form, and rational expressions with restrictions'],
          ['B. Exponential Functions', '&ldquo;evaluate powers with rational exponents&rdquo;, then represent and solve problems with exponential functions', 'Exponent laws with fractional and negative exponents, growth and decay graphs, and spotting a constant ratio in a table'],
          ['C. Discrete Functions', 'recursive sequences that &ldquo;make connections to Pascal&rsquo;s triangle&rdquo;; arithmetic and geometric series; &ldquo;solve problems involving compound interest and ordinary annuities&rdquo;', 'Recursive and explicit formulas, sums of series, and the financial strand that most other provinces teach elsewhere'],
          ['D. Trigonometric Functions', '&ldquo;prove simple trigonometric identities&rdquo;; the sine law and cosine law; &ldquo;periodic relationships and sinusoidal functions&rdquo;', 'Angles up to 360 degrees, exact values, oblique triangles, the ambiguous case, and transformed sine and cosine graphs, all in degrees']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Small phrases that change what is tested',
          left: [
            'The first specific expectation asks students to &ldquo;explain the meaning of the term function&rdquo;, not just use one. Expect a test question that shows a relation as a table or a mapping diagram and asks for a reason, in words, why it is or is not a function.',
            'Inverses are tied to an idea students already have. The curriculum asks them to &ldquo;relate the process of determining the inverse of a function to their understanding of reverse processes&rdquo;: undoing each operation in reverse order. Our first worked problem uses exactly that framing.'
          ],
          rightH3: 'Algebra that runs through every unit',
          right: [
            'Strand A&rsquo;s algebra expectations carry a footnote: the skills &ldquo;are to be introduced as needed, and applied and consolidated, as appropriate, in solving problems throughout the course.&rdquo; In practice, factoring and rational expressions are not one unit that ends; they are tested all year.',
            'Rational expressions come with a specific demand: students simplify them and &ldquo;state the restrictions on the variable values&rdquo;. A correct simplification with the restrictions missing loses marks on almost every Ontario test we see.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the course exists',
          left: [
            'According to the programme overview, Functions &ldquo;builds on the concepts and skills developed in the Grade 9 and 10 academic mathematics courses&rdquo; and prepares students for Grade 12 courses leading to university programs, &ldquo;including science, engineering, social sciences, liberal arts, and education.&rdquo;',
            'That range is the point. MCR3U is not only for future engineers; it is the general-purpose university math course of Grade 11.'
          ],
          rightH3: 'Prerequisite and credit',
          right: [
            'The course page gives &ldquo;Prerequisite: Principles of Mathematics, Grade 10, Academic&rdquo;, which is MPM2D, and the ministry&rsquo;s current online record carries the same prerequisite and the year 2007.',
            'Functions is a one-credit course. Ontario&rsquo;s diploma rules ask for three math credits, one of them in Grade 11 or 12, so for many students MCR3U is also the course that completes the math requirement for graduation.'
          ] },
        { kind: 'source', html: 'Source: ' + CURR + ', programme overview and MCR3U pages, read 22 October 2026, with the MCR3U record on the ministry curriculum website checked the same day. Expectations that rely on symbols are summarised in our own words. Modern Age Coders works independently of the Ontario Ministry of Education.' }
      ]
    },
    {
      id: 'leads', tint: 'deep', eyebrow: 'What MCR3U unlocks',
      h2: 'The Grade 12 courses that list MCR3U as a prerequisite',
      lede: 'Every Grade 12 university-preparation math course in Ontario traces back to Functions. These are the prerequisite lines printed on each course page of the 2007 document.',
      body: [
        { kind: 'table', caption: 'Grade 12 math courses whose prerequisite names Functions, Grade 11, from the 2007 Ontario curriculum course pages (read 22 October 2026)', head: ['Grade 12 course', 'Type', 'Prerequisite as printed'], rows: [
          ['MHF4U, Advanced Functions', 'University', '&ldquo;Functions, Grade 11, University Preparation, or Mathematics for College Technology, Grade 12, College Preparation&rdquo;'],
          ['MCV4U, Calculus and Vectors', 'University', 'No Grade 11 course named; Advanced Functions must come first or alongside, so MCR3U sits underneath it'],
          ['MDM4U, Mathematics of Data Management', 'University', '&ldquo;Functions, Grade 11, University Preparation, or Functions and Applications, Grade 11, University/College Preparation&rdquo;'],
          ['MCT4C, Mathematics for College Technology', 'College', '&ldquo;Functions and Applications, Grade 11, University/College Preparation, or Functions, Grade 11, University Preparation&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the table means for Grade 11 planning',
          left: [
            'A student who passes MCR3U can take any of the four courses above. A student aiming at a university program that lists Advanced Functions or Calculus and Vectors needs MCR3U in Grade 11, because the alternative route to Advanced Functions goes through a Grade 12 college course first.',
            'So the Grade 11 choice is the real decision point. Families who are unsure whether to choose MCR3U or the university/college course should look at the Grade 12 courses their teen might need, then work backwards.'
          ],
          rightH3: 'What universities list in Grade 11',
          right: [
            'University admission pages mostly list Grade 12 courses, so MCR3U rarely appears by name. It appears through them. Waterloo&rsquo;s Mathematics program, for example, lists Advanced Functions and Calculus and Vectors among six Grade 12 courses, both of which depend on Functions.',
            'The same Waterloo page names one Grade 11 course as recommended: &ldquo;Grade 11 U Introduction to Computer Science&rdquo;. For a Grade 11 student with Waterloo in mind, that is ICS3U alongside MCR3U. Our <a class="ag-inline-link" href="/ics3u-computer-science-help">ICS3U help page</a> covers the computer science side.'
          ] },
        { kind: 'source', html: 'Sources, read 22 October 2026: ' + CURR + ', course pages for MHF4U, MCV4U, MDM4U and MCT4C; <a class="ag-inline-link" href="https://uwaterloo.ca/future-students/programs/mathematics" rel="noopener" target="_blank">University of Waterloo, Mathematics</a>. Admission requirements change from year to year; read the university&rsquo;s own page when your teen applies. Waterloo has no connection with this page.' }
      ]
    },
    {
      id: 'stuck', tint: 'tint', eyebrow: 'Where marks go',
      h2: 'Where Grade 11 Functions students lose marks',
      lede: 'These are patterns from our own MCR3U classes, written as a table so a student can check their last test against it. Each comes with the habit that fixes it.',
      body: [
        { kind: 'table', caption: 'Frequent MCR3U errors and the fix for each (ours)', head: ['Topic', 'What goes wrong', 'The habit that fixes it'], rows: [
          ['Function notation', 'Reading f<sup>&minus;1</sup>(x) as 1/f(x)', 'Say &ldquo;f inverse&rdquo; aloud; the reciprocal is written 1/f(x)'],
          ['Domain and range', 'Giving the domain of a quadratic as its x-intercepts', 'Ask which inputs are allowed, not where the graph crosses an axis'],
          ['Transformations', 'Applying a horizontal stretch and shift to y = f(2x &minus; 6) without factoring', 'Factor first: f(2(x &minus; 3)), so the shift is 3, not 6'],
          ['Quadratics', 'Completing the square and losing the factor in front', 'Factor the leading coefficient out of both x terms before adding anything'],
          ['Rational expressions', 'Cancelling terms instead of factors', 'Only whole factors cancel; write restrictions before cancelling'],
          ['Exponents', 'Treating 8<sup>2/3</sup> as 8 &times; 2/3', 'Root first, then power: the cube root of 8 is 2, squared is 4'],
          ['Sequences', 'Mixing up the recursive and the general term', 'Recursive uses the previous term; general uses n'],
          ['Sine law', 'Giving one triangle when two exist', 'Compare a with b sin A every time the angle is not between the given sides']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The jump from Grade 10',
          left: [
            'Grade 10 students work with relations: graphs and equations, mostly of lines and parabolas. Grade 11 asks them to step back and talk about the object itself: what a function is, what its domain is, what its inverse does. Students who were strong at Grade 10 calculation can stumble here because the questions now ask for explanation.',
            'We spend the first weeks making students say things in sentences: &ldquo;this is a function because each input has exactly one output&rdquo;. It feels slow, and it pays back through the whole year.'
          ],
          rightH3: 'Why trigonometry lands at the end',
          right: [
            'Trigonometry is strand D, the last of the four in the curriculum, and a school that follows that order reaches it right before the exam. It is also the strand with the most new vocabulary: reference angles, the CAST rule, the ambiguous case, period, amplitude, phase shift. Students meet it tired and with the least time to practise.',
            'Starting trigonometry practice early, even ten minutes a week, changes the final exam more than any other single adjustment we suggest.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked problems, ours',
      h2: 'An inverse function and an ambiguous-case triangle, worked out',
      lede: 'Two problems we wrote, both at MCR3U test level: one from the first strand, one from the last. Each step states the reason for the step. Computer algebra confirmed the results.',
      body: [
        { kind: 'p', html: '<b>Problem 1, an inverse.</b> Let f(x) = 2(x &minus; 3)<sup>2</sup> + 1 with domain x &ge; 3. Find f<sup>&minus;1</sup>(x), state its domain and range, and check your answer.' },
        { kind: 'ol', items: [
          '<b>Ask why the domain is restricted.</b> A full parabola fails the horizontal line test: two inputs share each output, so its inverse would not be a function. Keeping only x &ge; 3, the right half from the vertex, makes f one-to-one.',
          '<b>List what f does, in order.</b> Subtract 3, square, multiply by 2, add 1. The inverse must undo these in reverse order: subtract 1, divide by 2, take the square root, add 3.',
          '<b>Write that as a formula.</b> f<sup>&minus;1</sup>(x) = 3 + &radic;((x &minus; 1)/2). Only the positive root is used, because the outputs of the inverse are the inputs of f, and those are all at least 3.',
          '<b>Swap domain and range.</b> f has domain x &ge; 3 and range y &ge; 1, because the vertex is (3, 1) and the parabola opens up. So f<sup>&minus;1</sup> has domain x &ge; 1 and range y &ge; 3.',
          '<b>Check with a number.</b> f(5) = 2(2)<sup>2</sup> + 1 = 9. Then f<sup>&minus;1</sup>(9) = 3 + &radic;(8/2) = 3 + 2 = 5. The inverse returns the original input.',
          '<b>Check with the graph.</b> The inverse is the reflection of f in the line y = x. The point (5, 9) on f becomes (9, 5) on the inverse, and the vertex (3, 1) becomes the starting point (1, 3).'
        ] },
        { kind: 'p', html: 'The swap-x-and-y method gives the same answer, but students who use it mechanically often keep the &plusmn; sign and never decide between roots. The reverse-process method forces that decision, because it asks what the original inputs were.' },
        { kind: 'p', mt: true, html: '<b>Problem 2, the ambiguous case.</b> In triangle ABC, angle A = 40&deg;, side a = 8 cm (opposite A) and side b = 10 cm. Find every possible value of angle B and side c, to two decimal places.' },
        { kind: 'ol', items: [
          '<b>Notice the warning sign.</b> The given angle is not between the two given sides. That is the side-side-angle situation, where zero, one or two triangles can exist.',
          '<b>Count the triangles before solving.</b> The height from C to the line AB is b sin A = 10 sin 40&deg;, about 6.43 cm. Side a is 8 cm: longer than the height but shorter than b. So a can swing to two positions, and there are two triangles.',
          '<b>Use the sine law for B.</b> sin B / 10 = sin 40&deg; / 8, so sin B = 10 sin 40&deg; / 8, about 0.8035.',
          '<b>Find both angles with that sine.</b> The calculator gives B = 53.46&deg;. Sine is also positive in the second quadrant, so B = 180&deg; &minus; 53.46&deg; = 126.54&deg; is the other candidate. Both are allowed because 40&deg; + 126.54&deg; is still less than 180&deg;.',
          '<b>Finish each triangle.</b> If B = 53.46&deg;, then C = 86.54&deg; and c = 8 sin C / sin 40&deg;, about 12.42 cm. If B = 126.54&deg;, then C = 13.46&deg; and c is about 2.90 cm.',
          '<b>Report both.</b> The answer is two triangles: B is about 53.46&deg; with c about 12.42 cm, or B is about 126.54&deg; with c about 2.90 cm.'
        ] },
        { kind: 'table', mt: true, caption: 'How many triangles? The side-side-angle test when angle A is acute (ours)', head: ['If side a is', 'Triangles', 'Reason'], rows: [
          ['shorter than b sin A', 'None', 'a cannot reach the third side'],
          ['equal to b sin A', 'One (a right triangle)', 'a just touches the third side'],
          ['between b sin A and b', 'Two', 'a can lean two ways, as in problem 2'],
          ['at least as long as b', 'One', 'the second position would put the angle on the wrong side']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The common thread',
          left: [
            'In both problems the risky moment is a choice between two answers: the positive or negative root in the first, the acute or obtuse angle in the second. A student who knows where that choice hides stops losing marks to it.',
            'The checks also match. A number in, a number back out for the inverse; the angle sum and the height comparison for the triangle. A check is part of the solution, not decoration.'
          ],
          rightH3: 'How to practise these',
          right: [
            'For inverses, practise with linear, quadratic and simple square root functions, always writing the domain restriction first. For the ambiguous case, practise the height comparison on its own until it is automatic, then add the solving.',
            'Questions 3 and 11 in the practice set below come from the same two families.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice, ours',
      h2: 'Twelve MCR3U practice questions',
      lede: 'We wrote these twelve questions for this page, three per strand, and checked each with a computer. They are not from any textbook, school or board. Use degrees throughout, as MCR3U does.',
      body: [
        { kind: 'ol', items: [
          '<b>Functions.</b> The relation {(1, 4), (2, 5), (3, 4), (1, 6)} is given. Is it a function? Explain in one sentence.',
          '<b>Domain and range.</b> State the domain and range of y = &minus;(x + 1)<sup>2</sup> + 4.',
          '<b>Inverses.</b> Find the inverse of f(x) = 3x &minus; 5 and check it with one number.',
          '<b>Quadratics.</b> Write f(x) = &minus;2x<sup>2</sup> + 12x &minus; 7 in vertex form and give its maximum value.',
          '<b>Number of zeros.</b> How many zeros does 3x<sup>2</sup> &minus; 4x + 2 have? Use the discriminant.',
          '<b>Rational expressions.</b> Simplify (x<sup>2</sup> &minus; 9)/(x<sup>2</sup> + x &minus; 6) &times; (x &minus; 2)/(x + 3) and state the restrictions.',
          '<b>Rational exponents.</b> Evaluate 27<sup>2/3</sup> &times; 16<sup>&minus;1/2</sup> without a calculator.',
          '<b>Exponential models.</b> A table shows x = 0, 1, 2, 3 and y = 5, 15, 45, 135. Write the function and find y when x = 6.',
          '<b>Recursive sequences.</b> t<sub>1</sub> = 4 and t<sub>n</sub> = 2t<sub>n&minus;1</sub> &minus; 3. Write the first five terms.',
          '<b>Series.</b> Find the sum of the first 20 terms of 7 + 11 + 15 + &hellip;',
          '<b>Exact values.</b> Find the exact value of sin 120&deg; &times; cos 315&deg; &times; tan 225&deg;.',
          '<b>Sinusoidal functions.</b> For y = 2 sin(3(x &minus; 30&deg;)) &minus; 1, state the amplitude, period, phase shift and range.'
        ] }
      ]
    },
    {
      id: 'answers', tint: 'deep', eyebrow: 'Answers, ours',
      h2: 'Answers, each with its reason',
      lede: 'The reasons are the part to study. An MCR3U marker looks for them, and they are what transfers to the next question.',
      body: [
        { kind: 'ol', items: [
          '<b>Not a function.</b> The input 1 is paired with two different outputs, 4 and 6. Repeated outputs (4 appears twice) are fine; repeated inputs with different outputs are not.',
          '<b>Domain: all real numbers. Range: y &le; 4.</b> Any x can be squared. The parabola opens down from its vertex (&minus;1, 4), so 4 is the largest output.',
          '<b>f<sup>&minus;1</sup>(x) = (x + 5)/3.</b> Undo in reverse: add 5, then divide by 3. Check: f(2) = 1, and f<sup>&minus;1</sup>(1) = 6/3 = 2.',
          '<b>f(x) = &minus;2(x &minus; 3)<sup>2</sup> + 11, maximum 11.</b> Factor &minus;2 from the x terms: &minus;2(x<sup>2</sup> &minus; 6x) &minus; 7. Add and subtract 9 inside: &minus;2((x &minus; 3)<sup>2</sup> &minus; 9) &minus; 7 = &minus;2(x &minus; 3)<sup>2</sup> + 18 &minus; 7.',
          '<b>None.</b> The discriminant is (&minus;4)<sup>2</sup> &minus; 4(3)(2) = 16 &minus; 24 = &minus;8. A negative discriminant means the parabola never meets the x-axis.',
          '<b>(x &minus; 3)/(x + 3), with x &ne; &minus;3 and x &ne; 2.</b> Factor: (x &minus; 3)(x + 3) over (x + 3)(x &minus; 2), times (x &minus; 2) over (x + 3). One (x + 3) and the (x &minus; 2) cancel. The restrictions come from every original denominator, including the factors that cancelled.',
          '<b>9/4.</b> 27<sup>2/3</sup>: the cube root of 27 is 3, squared is 9. 16<sup>&minus;1/2</sup>: the square root of 16 is 4, and the negative exponent makes it 1/4. 9 &times; 1/4 = 9/4.',
          '<b>y = 5(3)<sup>x</sup>; when x = 6, y = 3645.</b> Each y is 3 times the last, a constant ratio, so the function is exponential with base 3 and starting value 5. 3<sup>6</sup> = 729 and 5 &times; 729 = 3645.',
          '<b>4, 5, 7, 11, 19.</b> Double the previous term and subtract 3 each time: 2(4) &minus; 3 = 5, 2(5) &minus; 3 = 7, and so on.',
          '<b>900.</b> The common difference is 4, so t<sub>20</sub> = 7 + 19(4) = 83. The sum is 20(7 + 83)/2 = 900.',
          '<b>&radic;6/4.</b> sin 120&deg; = &radic;3/2 (second quadrant, positive). cos 315&deg; = &radic;2/2 (fourth quadrant, positive). tan 225&deg; = 1 (third quadrant, positive). The product is &radic;6/4.',
          '<b>Amplitude 2, period 120&deg;, phase shift 30&deg; to the right, range from &minus;3 to 1.</b> The period is 360&deg; divided by 3. The centre line is y = &minus;1, so the graph reaches 2 above and 2 below it.'
        ] }
      ]
    },
    {
      id: 'exam', tint: 'tint', eyebrow: 'Final exam, ours',
      h2: 'An MCR3U final exam checklist',
      lede: 'Our checklist for the month before the Grade 11 Functions exam. Tick each line only when you can do it without notes. Ask the teacher first what share of the course mark the exam carries and which calculator is allowed.',
      body: [
        { kind: 'table', caption: 'Can you do each of these without notes? (ours)', head: ['Strand', 'Skill', 'Self-test'], rows: [
          ['A', 'Decide whether a relation is a function, and say why', 'Question 1 above, plus one graph and one equation of your own'],
          ['A', 'Find an inverse and its domain and range', 'Problem 1 above, with a new restriction'],
          ['A', 'Graph y = af(k(x &minus; d)) + c from a parent function', 'Two transformations of a square root function'],
          ['A', 'Simplify a rational expression with restrictions', 'Question 6 above, restrictions first'],
          ['B', 'Evaluate rational exponents and graph an exponential', 'Question 7, then sketch y = 2(0.5)<sup>x</sup>'],
          ['C', 'Move between recursive and general formulas', 'Question 9, then write its general term'],
          ['C', 'Sum arithmetic and geometric series', 'Question 10, then a geometric series of your own'],
          ['D', 'Exact values and angles up to 360&deg;', 'Question 11 with three new angles'],
          ['D', 'Sine law, cosine law and the ambiguous case', 'Problem 2 above, then one with no triangle'],
          ['D', 'Graph and model a sinusoidal function', 'Question 12, then write an equation from a graph']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Four weeks out: audit.</b> Sort every lost mark from the semester by the rows above. Two or three rows will hold most of them.',
          '<b>Three weeks out: fix the heaviest rows.</b> One row a day, with a fresh problem each time.',
          '<b>Two weeks out: trigonometry, even if it feels fine.</b> It is the last strand in the curriculum&rsquo;s order, so it tends to get the least practice.',
          '<b>One week out: two full practice tests.</b> Time them. Mark them against the reasons in the answers above, not just the numbers.',
          '<b>The night before: the error list only.</b> Read it, sleep, and trust the checklist.'
        ] }
      ]
    },
    {
      id: 'credit', tint: 'deep', eyebrow: 'Credit and timing',
      h2: 'MCR3U online and in summer school: help, not the credit',
      lede: 'Families searching for MCR3U online are sometimes after the credit and sometimes after a teacher. We provide the second.',
      body: [
        { kind: 'two',
          leftH3: 'Who grants an MCR3U credit',
          left: [
            'The credit belongs to the institution that teaches and evaluates the course: the student&rsquo;s secondary school, a board&rsquo;s summer or night program, or a private school approved to grant Ontario credits. Modern Age Coders is a tutoring service. We teach alongside the course and do not grant Ontario credits.',
            'For the diploma, the graduation requirements page lists &ldquo;3 credits in mathematics (Grade 9, Grade 10 and 1 credit in Grade 11 or 12)&rdquo; for students who started Grade 9 in 2024 or later, and &ldquo;3 credits in mathematics (at least 1 credit in Grade 11 or 12)&rdquo; for earlier starters (page updated September 02, 2026).'
          ],
          rightH3: 'When outside help makes most sense',
          right: [
            'Three moments come up again and again: the first test on functions and inverses, when the course suddenly asks for explanations; the trigonometry unit near the end; and the summer before Grade 12, when a shaky Grade 11 base threatens Advanced Functions.',
            'Students retaking MCR3U, at school or in summer school, also benefit from a second teacher who starts from the marks they lost the first time.'
          ] },
        { kind: 'p', mt: true, html: 'Ontario families book class times in Eastern time: UTC-4 until 1 November 2026, then UTC-5 through the winter until 14 March 2027. India time, where our teachers are based, is UTC+5:30, so India sits 10 hours 30 minutes ahead of Eastern time in winter and 9 hours 30 minutes ahead in summer. Northwestern Ontario families on a different local clock should tell us their zone when they book.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is now',
    h2: 'Four stages in Grade 11 Functions',
    lede: 'Our own stages, from teaching MCR3U. They help a parent see what kind of help a student needs right now.',
    table: { caption: 'Stages of an MCR3U student (ours)', head: ['Stage', 'How it shows'], rows: [
      ['1. Calculator', 'Gets numerical answers from Grade 10 methods but cannot explain what a function or a domain is'],
      ['2. Translator', 'Moves between a table, a graph and an equation for the same function'],
      ['3. Reverser', 'Finds inverses by undoing steps, chooses the right root, catches the second triangle'],
      ['4. Ready for Grade 12', 'Explains every step in words and checks every answer a second way']
    ] },
    left: { h3: 'For parents', ps: [
      'Pick a question from your teen&rsquo;s homework and ask: what would make this not a function? A student who can answer has understood the first unit.',
      'A strong Grade 10 mark does not guarantee an easy Grade 11. The course changes from computing answers to explaining them, and that shift takes some students a few weeks.'
    ] },
    right: { h3: 'For students', ps: [
      'Write the domain before you do anything else with a function. It decides which answers you keep.',
      'When two answers appear, a root or an angle, stop and decide between them on purpose.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for Grade 11 students',
    lede: 'Every course here runs live online with one regular teacher, as a batch or as private lessons.',
    bands: [
      { num: 'I', h3: 'Building the base', sub: 'Grades 9 to 11', courses: [
        { code: 'MFT / BAS / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Factoring and exponent laws, the tools every MCR3U unit uses.' },
        { code: 'MFT / BAS / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'For younger siblings, or gaps that go back further.' },
        { code: 'MFT / BAS / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'A head start on the Grade 12 Data Management course.' }
      ] },
      { num: 'II', h3: 'Stretch and contests', sub: 'Grades 9 to 12', courses: [
        { code: 'MFT / CON / 01', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Preparation for the CEMC math contests.' },
        { code: 'MFT / CON / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'Problem solving well beyond the course.' },
        { code: 'MFT / CON / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'For Grade 11 students also looking at US universities.' }
      ] },
      { num: 'III', h3: 'Math with code', sub: 'Teens', courses: [
        { code: 'MFT / COD / 01', slug: 'ics3u-ics4u-computer-science-companion-course', title: 'Ontario computer science companion', blurb: 'For the Grade 11 timetable that pairs Functions with ICS3U.' },
        { code: 'MFT / COD / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Generate sequences and graph functions in code.' },
        { code: 'MFT / COD / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'For younger learners who like to think with a computer.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes alongside the Grade 11 timetable',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school on Eastern time, set when the batch is chosen.' },
      { time: 'Weekends', l: 'Morning classes on Eastern time, popular before unit tests.' },
      { time: '1-on-1', l: 'Planned around the trig unit, the exam and summer school.' }
    ],
    cells: [
      { h3: 'The school outline', p: 'Units in the same order as class.' },
      { h3: 'Sentences, not just numbers', p: 'Explaining is practised every week.' },
      { h3: 'Old tests used', p: 'Each lost mark becomes a short drill.' },
      { h3: 'Graphs drawn live', p: 'Transformations shown step by step.' },
      { h3: 'Practice between classes', p: 'Short sets, marked with comments.' },
      { h3: 'Group or private', p: 'Fifteen to twenty per batch, or one student.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Some of our math students also learn to code; here are a few of their projects. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Google reviews from families and students, quoted exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Your first class is free. Afterwards, eight live classes a month are billed monthly with the currency code printed beside the fee, and you can leave after any month: there is no term to sign up for.',
    free: ['First class free', 'Bring the latest MCR3U test', 'No card details'],
    group: ['Batches of fifteen to twenty', 'The same teacher every week', 'Choose your batch', 'Paid month by month'],
    one: ['Private lessons for one student', 'Fitted around tests', 'Built from the school course']
  },

  faq: {
    eyebrow: 'Questions from Ontario families',
    h2: 'MCR3U: questions families ask',
    items: [
      { q: 'What is MCR3U?', a: 'MCR3U is Functions, Grade 11, University Preparation, in Ontario\'s 2007 mathematics curriculum for Grades 11 and 12. Its four strands cover characteristics of functions, exponential functions, discrete functions such as sequences and series, and trigonometric functions.' },
      { q: 'Do you grant the MCR3U credit?', a: 'No. We teach alongside the student\'s school course and do not grant Ontario credits. The credit comes from the school or program that teaches and evaluates MCR3U. Our classes give the explanations and practice around it.' },
      { q: 'What is the prerequisite for MCR3U?', a: 'Principles of Mathematics, Grade 10, Academic, which is MPM2D. That is the prerequisite printed on the MCR3U page of the 2007 curriculum, and the ministry\'s current online record shows the same.' },
      { q: 'Which Grade 12 courses need MCR3U?', a: 'Advanced Functions (MHF4U) lists Functions, Grade 11, or the college course Mathematics for College Technology as its prerequisite. Data Management (MDM4U) and Mathematics for College Technology (MCT4C) both accept Functions. Calculus and Vectors needs Advanced Functions, so it depends on MCR3U too.' },
      { q: 'Is MCR3U hard?', a: 'It is a real step up from Grade 10, mostly because it asks students to explain, not just calculate: what a function is, why an inverse needs a restricted domain, why a triangle has two solutions. Those are skills that improve with practice. We never promise a particular mark.' },
      { q: 'Does MCR3U count toward the diploma?', a: 'Yes. MCR3U is one credit, and the Ontario graduation requirements include three math credits with at least one in Grade 11 or 12. For many students, MCR3U is the course that meets that Grade 11 or 12 requirement.' },
      { q: 'What should my teen review for the MCR3U final exam?', a: 'All four strands, with extra time on trigonometry, because it is the last strand in the curriculum\'s order. Our checklist on this page lists ten skills to test without notes, from inverses and rational expressions to the ambiguous case and sinusoidal graphs.' },
      { q: 'Can you help a student retaking MCR3U?', a: 'Yes. A retake is a good time for a second teacher, because the lost marks from the first attempt show exactly where to start. We work alongside whatever school or summer program is delivering the course.' },
      { q: 'When do classes take place?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most Ontario families book in Eastern time, and the clocks change on 1 November 2026 and 14 March 2027.' },
      { q: 'How are MCR3U classes priced?', a: 'The first class is free. After that, families pay a monthly fee for eight live classes, with no long contract. The current figures for a batch and for private lessons are shown in the fees section of this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More reading for Ontario Grade 11 students.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Everything we have written for Canada.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor for Canada', p: 'Math help for every Canadian grade.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U computer science help', p: 'The Grade 11 course Waterloo recommends.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Live programming classes across the province.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests', p: 'Contests for Grade 11 students, explained.' },
      { href: '/online-math-tutor-11th-grade', label: 'Grade 11 math tutoring', p: 'One-to-one help in the eleventh grade.' },
      { href: '/blog/sohcahtoa-trigonometry-for-beginners', label: 'Trigonometry basics', p: 'The right-triangle ratios, before the sine law.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in one of our live classes.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Let us know which MCR3U unit your teen is on and when the next test falls. If you can, send a photo of the last test; the first class will start from it.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains our method, and the <a class="ag-inline-link" href="/online-math-tutor-canada">Canada math tutoring page</a> covers the grades before and after.',
    note: 'Lessons happen live over video, with teachers working from India; nobody travels and no one visits your home. WhatsApp is the quickest way to reach us from Ontario.',
    formNote: 'No card is needed to book the free class.'
  },

  footer: {
    cols: [
      { h4: 'Grade 11 math', links: [
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'High school math course' },
        { href: '/courses/algebra-foundations-masterclass', label: 'Algebra foundations' },
        { href: '/online-math-tutor-11th-grade', label: 'Grade 11 math tutoring' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
        { href: '/ics3u-computer-science-help', label: 'ICS3U help' }
      ] }
    ],
    bottomRight: 'One input, one output, then work backwards'
  },

  personalityCss: `
.ag-root.ag-mft .ag-hero h1 { letter-spacing: -0.015em; max-width: 20ch; }
.ag-root.ag-mft .ag-capsule { border-left-width: 5px; border-radius: 1px; }
.ag-root.ag-mft .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-mft .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-mft .ag-steps li { margin-bottom: 0.65rem; }
`,

  dossier: {
    curriculumAuthority: 'The Ontario Curriculum, Grades 11 and 12: Mathematics (2007), fetched raw 22 October 2026: programme overview for Functions; MCR3U description and prerequisite; strands A to D (plain-word fragments of overall expectations); specific expectations A1.1, A1.4, A2.1, A3.3, B2.1, D1.6 and the strand A3 footnote; the prerequisite lines of MHF4U, MDM4U and MCT4C. Ontario curriculum content API record for MCR3U. Ontario graduation requirements page (math credits for both start-year groups). Waterloo Mathematics admission page.',
    localProject: 'Our two worked problems: the inverse of f(x) = 2(x - 3)^2 + 1 on x >= 3 by reversing its steps, f^-1(x) = 3 + root((x - 1)/2), checked with f(5) = 9 and the reflection in y = x; and an ambiguous-case triangle (A = 40 degrees, a = 8, b = 10) with the height test b sin A of about 6.43, giving two triangles, B about 53.46 or 126.54 degrees and c about 12.42 or 2.90 cm. Twelve original practice questions with SymPy-checked answers, a strand error table, a ten-row exam checklist. Lesson family: one input, one output, then work backwards.',
    requiredMentions: ['This course introduces the mathematical concept of the function by extending students&rsquo; experiences with linear and quadratic relations.', 'relate the process of determining the inverse of a function to their understanding of reverse processes', 'state the restrictions on the variable values', 'make connections to Pascal&rsquo;s triangle', 'Prerequisite: Principles of Mathematics, Grade 10, Academic', '3 credits in mathematics (Grade 9, Grade 10 and 1 credit in Grade 11 or 12)', 'f<sup>&minus;1</sup>(x) = 3 + &radic;((x &minus; 1)/2)', 'b sin A = 10 sin 40&deg;', 'about 2.90 cm', 'The side-side-angle test when angle A is acute', 'Can you do each of these without notes?', 'One input, one output, then work backwards'],
    sources: [
      { claim: 'MCR3U description, prerequisite, strands and expectations; programme overview; prerequisite lines of MHF4U, MDM4U and MCT4C; one credit.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf' },
      { claim: 'The MCR3U course record: Functions, 2007, Grade 11 University Preparation, prerequisite Principles of Mathematics, Grade 10, Academic.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=MCR3U,MHF4U,MCV4U,MDM4U,MPM2D,MTH1W,MCF3M,MAP4C,MEL4E&depth=0' },
      { claim: 'OSSD math credits for students who started Grade 9 in 2024 or later and for earlier starters.', url: 'https://www.ontario.ca/page/high-school-graduation-requirements' },
      { claim: 'Waterloo Mathematics: Advanced Functions and Calculus and Vectors required; Grade 11 U Introduction to Computer Science recommended.', url: 'https://uwaterloo.ca/future-students/programs/mathematics' }
    ],
    rejectedClaims: [
      'That universities list MCR3U by name: the pages read list Grade 12 courses, so the page says MCR3U appears through them.',
      'That schools teach trigonometry last: the page says only that it is strand D, last in the curriculum order.',
      'Quoting expectations with notation lost in extraction (degree signs, inequality signs): summarised instead.',
      'A worked example about money: the financial strand is described from the curriculum but not modelled with figures.',
      'Any mark or admission outcome from our classes: none promised.',
      'Named credit providers, summer schools or individual Ontario schools: none named.',
      'That Grade 10 Academic math is still offered under the name MPM2D everywhere: the page names the prerequisite as printed and the current record.',
      'Any affiliation with the Ontario Ministry of Education or Waterloo: none, and the page says so.'
    ]
  }
};
