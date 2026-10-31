'use strict';
// Trigonometry tutoring online (ag- maths door; UK and US exams cluster, row US002, priority A).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Sources read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/trigonometry-tutoring-online/):
//  - thecorestandards.org High School Functions, Trigonometric Functions (F-TF.A.1 to C.9): radian measure "as the length of
//    the arc on the unit circle subtended by the angle"; unit circle extends trig functions "to all real numbers"; model
//    periodic phenomena "with specified amplitude, frequency, and midline"; "Prove the Pythagorean identity"; (+) items:
//    special triangles for pi/3, pi/4, pi/6; symmetry and periodicity; inverse functions; addition formulas.
//  - High School Geometry, Similarity, Right Triangles, and Trigonometry (G-SRT.C.6 to D.11): "side ratios in right
//    triangles are properties of the angles in the triangle"; sine and cosine of complementary angles; solve right
//    triangles "in applied problems"; (+) A = 1/2 ab sin(C), Laws of Sines and Cosines.
//  - High School Geometry introduction: "The definitions of sine, cosine, and tangent for acute angles are founded on right
//    triangles and similarity"; Laws of Sines and Cosines "yield two possible solutions in the ambiguous case, illustrating
//    that Side-Side-Angle is not a congruence criterion."
//  - CCSS mathematics PDF (learning.ccsso.org), page 57: "Additional mathematics that students should learn in order to take
//    advanced courses such as calculus, advanced statistics, or discrete mathematics is indicated by (+)".
//  - College Board AP Precalculus Course and Exam Description (2026 edition, PDF): Unit 3 "Trigonometric and Polar
//    Functions", topics 3.1 Periodic Phenomena to 3.15 Rates of Change in Polar Functions; multiple-choice weighting 30 to 35
//    percent; Unit 4 "Not assessed on the AP Exam".
//  - AP Central AP Precalculus exam page: "Tue, May 11, 2027"; Section I 42 questions, Section II four questions; Part A no
//    calculator 29 questions, 65 minutes; Free-Response Question 3: Modeling a Periodic Context; hybrid digital exam in
//    Bluebook with handwritten free responses.
//  - SAT Suite, Geometry and Trigonometry page: domain topics include "Right triangles and trigonometry".
// Our own material, labelled: ladder 20 sin 70 deg = 18.79 ft; shadow 30 tan 35 deg = 21.01 ft; 8-15-17 triangle angle
// 28.07 deg; sin 25 deg = cos 65 deg = 0.4226; 225 deg = 5pi/4; sin = -3/5 in quadrant III gives cos -4/5, tan 3/4;
// 2 sin x - 1 = 0 on [0, 2pi) gives pi/6 and 5pi/6; Ferris wheel h(t) = 60 - 50 cos(pi t/4), h = 85 at t = 8/3 and 16/3;
// Law of Cosines sides 7, 9, 60 deg gives sqrt 67 = 8.19 and area 27.28; the Python check; mistakes table; plan; practice.
// Lesson family: one triangle, three readings (ratio, unit-circle point, graph).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH', blurb: 'Live trigonometry tutoring for US high school students, from right triangles and the unit circle to identities and AP Precalculus Unit 3.' },
  slug: 'trigonometry-tutoring-online',
  code: 'tt',
  accent: '#784E14',
  accentRationale: 'Trigonometry tutoring: a burnt sienna ink, #784E14 as allocated, 6.83:1 on #FBF8F2 and 5.88:1 on #EDE7DA, warm like a drafting pencil and apart from the amber of the brand buttons',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'Trigonometry tutoring online',
  title: 'Trigonometry Tutoring Online: Unit Circle to Identities',
  description: 'Live trigonometry tutoring online for US high school students: right triangles, radians and the unit circle, identities, sinusoidal models and AP Precalculus Unit 3.',
  ogDescription: 'Trigonometry tutoring built on the standards: where trig sits in Geometry, Algebra 2 and Precalculus, what AP Precalculus Unit 3 asks, and fully worked examples by our teachers.',
  twitterDescription: 'Live online trigonometry tutoring, with worked examples from right triangles to the unit circle.',
  pageName: 'Trigonometry Tutoring Online',
  webPageDescription: 'A guide for US high school students and parents to trigonometry tutoring: the Common Core trigonometry standards in geometry and functions, the AP Precalculus trigonometry unit and exam format, the SAT geometry and trigonometry domain, and original worked examples.',
  courseDescription: 'Live online trigonometry lessons for US high school students, inside our high school math course, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Trigonometry tutoring',
  navLinks: [
    { href: '#where', label: 'Where trig is taught' },
    { href: '#triangles', label: 'Right triangles' },
    { href: '#circle', label: 'Unit circle' },
    { href: '#models', label: 'Graphs and models' },
    { href: '#exams', label: 'AP and SAT' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; Live online tutoring',
  h1: 'Trigonometry tutoring online',
  lede: 'Trigonometry is where many strong algebra students first feel lost. The ratios look simple in a triangle, then the angles grow past 90 degrees, switch to radians, wrap around a circle and turn into waves. The trouble is rarely the arithmetic. It is that the same idea is being shown in three different pictures, and nobody has joined them up. Our tutors teach trigonometry as one idea seen three ways, the ratio in a triangle, the point on a unit circle and the graph of a function, so each new unit builds on the last instead of starting again.',
  secondaryCta: { href: '#triangles', label: 'Start with a worked example' },
  wa: 'Hello Modern Age Coders, my high schooler in the US needs help with trigonometry. Could we book a free first class?',
  heroNote: 'Live math and coding teaching since 2020 &middot; 10,000+ students &middot; high school to AP',
  spec: [
    ['Covers', 'Right triangles to identities'],
    ['Courses it sits in', 'Geometry, Algebra 2, Precalculus'],
    ['AP link', 'AP Precalculus Unit 3'],
    ['Exam date', 'AP Precalculus, May 11, 2027'],
    ['Lessons', 'Live, online'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Trigonometry in US high schools is taught in two places: right-triangle ratios in Geometry, under the Common Core standards G-SRT, and trigonometric functions on the unit circle in Algebra 2 or Precalculus, under F-TF, which AP Precalculus covers in Unit 3. Modern Age Coders teaches trigonometry live online, in a group of 15 to 20 or one to one, through our High School Mathematics course, with AP Precalculus preparation for exam students. The first class is free.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses that teach trigonometry properly',
    lede: 'Choose by goal: the school course, the AP exam or the SAT.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'TT / 01', title: 'High school math, grades 9 to 12', note: 'Right triangles in Geometry, the unit circle in Algebra 2 and Precalculus.' },
      { course: 'ap-precalculus-exam-prep-course', code: 'TT / 02', title: 'AP Precalculus', note: 'Units 1 to 3, including trigonometric and polar functions.' },
      { course: 'sat-math-prep-course', code: 'TT / 03', title: 'SAT Math', note: 'Right triangles and trigonometry within the geometry domain.' }
    ]
  },

  sections: [
    {
      id: 'where', tint: 'tint', eyebrow: 'Where trig is taught',
      h2: 'Which high school course teaches trigonometry?',
      lede: 'Usually two of them. The Common Core high school standards put right-triangle trigonometry in the geometry category and the trigonometric functions in the functions category, so most students meet sine twice: once in Geometry and again in Algebra 2 or Precalculus.',
      body: [
        { kind: 'table', caption: 'Trigonometry in the Common Core high school standards (thecorestandards.org, read 31 October 2026; summaries ours, quoted words in quotation marks)', head: ['Code', 'Strand', 'What the standard asks', 'Marked (+)?'], rows: [
          ['G-SRT.C.6', 'Geometry', 'By similarity, "side ratios in right triangles are properties of the angles in the triangle", which defines the trig ratios', 'No'],
          ['G-SRT.C.7', 'Geometry', 'Explain and use the link between sine and cosine of complementary angles', 'No'],
          ['G-SRT.C.8', 'Geometry', 'Solve right triangles "in applied problems" with trig ratios and the Pythagorean Theorem', 'No'],
          ['G-SRT.D.9 to D.11', 'Geometry', 'Area as 1/2 ab sin(C); prove and use the Laws of Sines and Cosines', 'Yes'],
          ['F-TF.A.1 and A.2', 'Functions', 'Radian measure; the unit circle extends trig functions "to all real numbers"', 'No'],
          ['F-TF.A.3 and A.4', 'Functions', 'Exact values for pi/3, pi/4 and pi/6; symmetry and periodicity', 'Yes'],
          ['F-TF.B.5', 'Functions', 'Model periodic situations "with specified amplitude, frequency, and midline"', 'No'],
          ['F-TF.B.6 and B.7', 'Functions', 'Inverse trig functions and solving trig equations in context', 'Yes'],
          ['F-TF.C.8', 'Functions', '"Prove the Pythagorean identity" and use it to find one ratio from another', 'No'],
          ['F-TF.C.9', 'Functions', 'Prove and use the addition and subtraction formulas', 'Yes']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the (+) means',
          left: [
            'The standards document explains the mark on page 57: "Additional mathematics that students should learn in order to take advanced courses such as calculus, advanced statistics, or discrete mathematics is indicated by (+)". Standards without it are meant for every college-ready student.',
            'In practice, a student heading for calculus needs the (+) items too: exact values from special triangles, inverse functions, the Laws of Sines and Cosines and the addition formulas. That is where most of our trigonometry tutoring hours go.'
          ],
          rightH3: 'Why triangles come first',
          right: [
            'The geometry introduction says "The definitions of sine, cosine, and tangent for acute angles are founded on right triangles and similarity". Two similar right triangles share the same angle and the same ratios, whatever their size, and that is why sin 35&deg; is a single number.',
            'A student who has seen that argument does not need SOH CAH TOA as a spell. They know the ratio is fixed by the angle, and the memory aid becomes a label for something they already understand.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.thecorestandards.org/Math/Content/HSG/SRT/" rel="noopener" target="_blank">Similarity, Right Triangles, and Trigonometry</a>, <a class="ag-inline-link" href="https://www.thecorestandards.org/Math/Content/HSF/TF/" rel="noopener" target="_blank">Trigonometric Functions</a> and the high school geometry introduction at thecorestandards.org, and the <a class="ag-inline-link" href="https://learning.ccsso.org/wp-content/uploads/2022/11/ADA-Compliant-Math-Standards.pdf" rel="noopener" target="_blank">standards PDF</a>, read 31 October 2026. Some states use their own standards with different codes. We are not connected with the Common Core initiative, the College Board or any state or district.' }
      ]
    },
    {
      id: 'triangles', tint: 'deep', eyebrow: 'Right triangles',
      h2: 'How do you solve a right triangle with trigonometry?',
      lede: 'Name the angle you know, label the sides from that angle (opposite, adjacent, hypotenuse), pick the one ratio that links what you have to what you want, and solve. Here are four of our own examples at Geometry level.',
      body: [
        { kind: 'table', caption: 'Right-triangle examples (ours; answers rounded to two decimal places)', head: ['Problem', 'Sides from the angle', 'Ratio chosen', 'Working and answer'], rows: [
          ['A 20-foot ladder leans on a wall at 70&deg; to the ground. How high does it reach?', 'Hypotenuse 20, want opposite', 'Sine', 'height = 20 sin 70&deg; = 18.79 feet'],
          ['A tree\'s shadow is 30 feet long when the sun is 35&deg; above the horizon. How tall is the tree?', 'Adjacent 30, want opposite', 'Tangent', 'height = 30 tan 35&deg; = 21.01 feet'],
          ['A right triangle has legs 8 and 15. Find the smaller acute angle.', 'Opposite 8, adjacent 15', 'Inverse tangent', 'angle = tan<sup>-1</sup>(8/15) = 28.07&deg;; hypotenuse 17'],
          ['Show that sin 25&deg; equals cos 65&deg;.', 'The same triangle, read from each acute angle', 'Complementary angles (G-SRT.C.7)', 'Both are 0.4226, because the side opposite 25&deg; is adjacent to 65&deg;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The step students skip',
          left: [
            'Labeling the sides from the chosen angle is the step most errors come from. "Opposite" and "adjacent" are not fixed names for sides; they change when you look from the other acute angle. In the 8-15-17 triangle, the side of length 8 is opposite one angle and adjacent to the other.',
            'We have students mark the angle with a dot and write O, A and H on the sides every time, until they no longer need to. It takes ten seconds and removes most wrong-ratio mistakes.'
          ],
          rightH3: 'Check with a second fact',
          right: [
            'Every right-triangle answer can be checked another way. For the ladder, the foot of the ladder is 20 cos 70&deg; = 6.84 feet from the wall, and 6.84 squared plus 18.79 squared comes to about 400, which is 20 squared.',
            'For the 8-15-17 triangle, the two acute angles must add to 90&deg;, so the other angle is 61.93&deg;. Small checks like these are what make a student confident on a test without anyone marking the work.'
          ] }
      ]
    },
    {
      id: 'circle', tint: 'tint', eyebrow: 'The unit circle',
      h2: 'How do you learn the unit circle without memorizing it?',
      lede: 'Learn three triangles and four sign rules, then rebuild any point. Standard F-TF.A.1 defines a radian as "the length of the arc on the unit circle subtended by the angle", so the circle and radians arrive together.',
      body: [
        { kind: 'two',
          leftH3: 'Radians as a length',
          left: [
            'On a circle of radius 1, an angle of 1 radian cuts off an arc of length 1. A full turn is the whole circumference, 2&pi;, so 360&deg; equals 2&pi; radians and 180&deg; equals &pi;. Every conversion follows from that one line.',
            'Our example: 225&deg; is 225/180 of &pi;, which is 5&pi;/4. It is &pi;/4 past the half turn, so it sits in quadrant III, with reference angle 45&deg;.'
          ],
          rightH3: 'Rebuilding a point',
          right: [
            'The 45&deg; triangle on the unit circle has both legs &radic;2/2. In quadrant III both coordinates are negative, so the point at 5&pi;/4 is (&minus;&radic;2/2, &minus;&radic;2/2). Cosine is the x coordinate and sine is the y coordinate, so both equal &minus;&radic;2/2 and the tangent is 1.',
            'The same three steps, reference angle, triangle, signs, give every special value. Students who learn the steps can answer for 7&pi;/6 or 5&pi;/3 just as quickly as for angles they drilled.'
          ] },
        { kind: 'table', mt: true, caption: 'Signs of sine, cosine and tangent by quadrant (ours, from the coordinates of the unit circle)', head: ['Quadrant', 'Angles in radians', 'sin (y)', 'cos (x)', 'tan (y/x)'], rows: [
          ['I', '0 to &pi;/2', 'Positive', 'Positive', 'Positive'],
          ['II', '&pi;/2 to &pi;', 'Positive', 'Negative', 'Negative'],
          ['III', '&pi; to 3&pi;/2', 'Negative', 'Negative', 'Positive'],
          ['IV', '3&pi;/2 to 2&pi;', 'Negative', 'Positive', 'Negative']
        ] },
        { kind: 'p', mt: true, html: 'Our identity example for F-TF.C.8: if sin &theta; = &minus;3/5 and &theta; is in quadrant III, the Pythagorean identity sin<sup>2</sup>&theta; + cos<sup>2</sup>&theta; = 1 gives cos<sup>2</sup>&theta; = 1 &minus; 9/25 = 16/25, so cos &theta; = &plusmn;4/5. Quadrant III makes cosine negative, so cos &theta; = &minus;4/5, and tan &theta; = (&minus;3/5)/(&minus;4/5) = 3/4. The identity gives the size; the quadrant gives the sign.' }
      ]
    },
    {
      id: 'models', tint: 'deep', eyebrow: 'Graphs and models',
      h2: 'How are trigonometric functions used to model real situations?',
      lede: 'Anything that repeats can be modeled with a sine or cosine. Standard F-TF.B.5 asks students to choose a trig function for a situation with a given amplitude, frequency and midline. Our Ferris wheel example shows how each number in the equation comes from the story.',
      body: [
        { kind: 'table', caption: 'A Ferris wheel modeled with cosine (our example): diameter 100 feet, center 60 feet above the ground, one turn every 8 minutes, rider starts at the bottom', head: ['Feature', 'From the story', 'In h(t) = 60 &minus; 50 cos(&pi;t/4)'], rows: [
          ['Midline', 'Height of the center', '60'],
          ['Amplitude', 'Radius, half the diameter', '50'],
          ['Period', 'One turn every 8 minutes', '2&pi; divided by &pi;/4 is 8'],
          ['Starting point', 'Rider begins at the lowest point', 'Minus cosine starts at its minimum: h(0) = 10'],
          ['Check', 'Top of the wheel after half a turn', 'h(4) = 60 + 50 = 110']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Solving with the model',
          left: [
            'When is the rider 85 feet up? Set 60 &minus; 50 cos(&pi;t/4) = 85, so cos(&pi;t/4) = &minus;1/2. On one turn, &pi;t/4 = 2&pi;/3 or 4&pi;/3, giving t = 8/3 and t = 16/3 minutes, about 2.67 and 5.33 minutes.',
            'Two answers in one turn is the point. The rider passes 85 feet on the way up and again on the way down, and a student who stops at the first answer has missed half the question.'
          ],
          rightH3: 'The same idea without a story',
          right: [
            'Our equation example: solve 2 sin x &minus; 1 = 0 for 0 &le; x &lt; 2&pi;. Then sin x = 1/2. The reference angle is &pi;/6, and sine is positive in quadrants I and II, so x = &pi;/6 or x = 5&pi;/6.',
            'A calculator\'s inverse sine gives only &pi;/6. Standard F-TF.B.6 is about exactly that: inverse functions exist only on a restricted domain, so the other solutions come from the circle, not the button.'
          ] },
        { kind: 'code', mt: true, label: 'check_trig.py (our example)', lang: 'Python 3', code: 'import math\n\n# Ferris wheel: h(t) = 60 - 50 cos(pi t / 4)\nh = lambda t: 60 - 50 * math.cos(math.pi * t / 4)\nprint([round(h(t), 2) for t in (0, 2, 4, 8/3, 16/3)])\n\n# Law of Cosines: sides 7 and 9 with a 60 degree angle between them\nc = math.sqrt(7**2 + 9**2 - 2 * 7 * 9 * math.cos(math.radians(60)))\narea = 0.5 * 7 * 9 * math.sin(math.radians(60))\nprint(round(c, 2), round(area, 2))', note: 'Output: [10.0, 60.0, 110.0, 85.0, 85.0], then 8.19 27.28. The third side is &radic;67 because 49 + 81 &minus; 63 = 67, and the area uses 1/2 ab sin(C) from G-SRT.D.9. Checking a hand answer with three lines of code is a habit we teach, never a replacement for the working.' }
      ]
    },
    {
      id: 'exams', tint: 'tint', eyebrow: 'AP and SAT',
      h2: 'How much trigonometry is on AP Precalculus and the SAT?',
      lede: 'A lot on AP Precalculus, a little on the SAT. In the College Board\'s AP Precalculus Course and Exam Description, Unit 3, Trigonometric and Polar Functions, carries 30 to 35 percent of the multiple-choice section. On the SAT, trigonometry sits inside the Geometry and Trigonometry domain.',
      body: [
        { kind: 'table', caption: 'The AP Precalculus Exam, as listed on AP Central for the May 2027 exam (read 31 October 2026)', head: ['Section', 'Questions', 'Time', 'Share of score', 'Calculator'], rows: [
          ['I, Part A: multiple choice', '29', '65 minutes', '43.75%', 'Not permitted'],
          ['I, Part B: multiple choice', '13', '40 minutes', '18.75%', 'Graphing calculator required'],
          ['II, Part A: free response', '2', '35 minutes', '18.75%', 'Graphing calculator required'],
          ['II, Part B: free response', '2', '35 minutes', '18.75%', 'Not permitted']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What Unit 3 contains',
          left: [
            'The Course and Exam Description lists 15 topics in Unit 3, from 3.1 Periodic Phenomena through sine, cosine and tangent, sinusoidal transformations and modeling, the tangent function, inverse trigonometric functions, equations and inequalities, secant, cosecant and cotangent, equivalent representations, to 3.13 to 3.15 on polar coordinates, polar graphs and rates of change in polar functions.',
            'AP Central lists the 2027 exam for Tue, May 11, 2027, and names Free-Response Question 3 as Modeling a Periodic Context, which is the Ferris wheel kind of problem above. Unit 4 is "Not assessed on the AP Exam".'
          ],
          rightH3: 'Trigonometry on the SAT',
          right: [
            'The College Board\'s SAT Suite page lists four topics in its Geometry and Trigonometry domain, one of which is "Right triangles and trigonometry". Expect right-triangle ratios, complementary angles and radian conversions rather than identities or graphs.',
            'For SAT students we keep trigonometry tight: the right-triangle work in the second section of this page, plus degrees and radians, practiced in the digital format alongside the rest of the math section.'
          ] },
        { kind: 'source', html: 'Sources: the <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-precalculus/exam" rel="noopener" target="_blank">AP Precalculus exam page</a> and the AP Precalculus Course and Exam Description on AP Central, and the <a class="ag-inline-link" href="https://satsuite.collegeboard.org/sat/whats-on-the-test/math/types/geometry-trigonometry" rel="noopener" target="_blank">SAT Geometry and Trigonometry page</a>, read 31 October 2026. AP and SAT are College Board trademarks; we are not affiliated with the College Board. For official practice, use the free questions the College Board publishes.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan that works',
      h2: 'What is the fastest way to learn trigonometry for beginners?',
      lede: 'Learn it in the order the ideas depend on each other, and do not move on until the previous step is automatic. This is the order our tutors use for a student starting from scratch.',
      body: [
        { kind: 'ol', items: [
          '<b>Similar triangles and the three ratios.</b> Why a ratio depends only on the angle; labeling sides from an angle.',
          '<b>Solving right triangles.</b> Missing sides, then missing angles with inverse functions; angles of elevation and depression.',
          '<b>Special triangles.</b> The 30-60-90 and 45-45-90 triangles, built from a square and an equilateral triangle, not memorized.',
          '<b>Radians and the unit circle.</b> Arc length, conversions, reference angles and signs by quadrant.',
          '<b>Graphs.</b> Sine and cosine as the unit circle unrolled; amplitude, period, midline and phase shift.',
          '<b>Equations and identities.</b> The Pythagorean identity first, then solving on an interval, then addition formulas.',
          '<b>Non-right triangles.</b> The Laws of Sines and Cosines, including the ambiguous case.'
        ] },
        { kind: 'table', mt: true, caption: 'The trigonometry mistakes we correct most often (ours)', head: ['Mistake', 'What it looks like', 'The fix we teach'], rows: [
          ['Calculator in the wrong mode', 'sin 30 gives &minus;0.99 instead of 0.5', 'Check the mode before every test; know sin 30&deg; = 1/2 as a sense check'],
          ['Wrong ratio', 'Uses cosine for the opposite side', 'Mark the angle, label O, A, H, then choose'],
          ['Sign lost', 'cos 5&pi;/4 written as positive', 'Find the quadrant before the value'],
          ['One solution only', 'Stops at x = &pi;/6', 'Ask which other quadrant shares the sign'],
          ['Ambiguous case missed', 'One triangle found where two exist', 'Sketch both possible triangles for side-side-angle']
        ] },
        { kind: 'p', mt: true, html: 'The last row is in the standards too. The geometry introduction notes that the Laws of Sines and Cosines "yield two possible solutions in the ambiguous case, illustrating that Side-Side-Angle is not a congruence criterion." A quick sketch of both triangles is the habit that catches it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where the student is',
    h2: 'Four levels of trigonometry understanding',
    lede: 'Our way of placing a student at the first class, so lessons start at the right point.',
    table: { caption: 'Levels we use when placing a trigonometry student (ours)', head: ['Level', 'Can do', 'Next step'], rows: [
      ['1. Ratios', 'Solves a right triangle with a calculator', 'Special triangles and exact values'],
      ['2. Circle', 'Finds exact values on the unit circle', 'Graphs and transformations'],
      ['3. Functions', 'Graphs and models with sine and cosine', 'Equations on an interval, identities'],
      ['4. Fluent', 'Proves identities, uses the Laws of Sines and Cosines', 'Polar functions, AP free response, calculus']
    ] },
    left: { h3: 'For parents', ps: [
      'A student who is fine at level 1 can still fall apart at level 2, because the unit circle is where memorizing stops working. That is the most common time families contact us.',
      'Ask which course and unit your teen is in. It tells us whether to start with triangles or with the circle.'
    ] },
    right: { h3: 'For students', ps: [
      'If you cannot rebuild a value from a triangle, you do not know it yet, even if you remember it.',
      'Draw the picture first. Every trig question has one.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around trigonometry',
    lede: 'What comes before trig, what includes it, and where it leads.',
    bands: [
      { num: 'I', h3: 'Before trigonometry', sub: 'Grades 8 to 10', courses: [
        { code: 'TT / B / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations and functions, solid.' },
        { code: 'TT / B / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Similarity and the Pythagorean Theorem.' },
        { code: 'TT / B / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Angles and graphs in Python.' }
      ] },
      { num: 'II', h3: 'With trigonometry', sub: 'Grades 10 to 12', courses: [
        { code: 'TT / W / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry through Precalculus.' },
        { code: 'TT / W / 02', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Unit 3 and the full exam.' },
        { code: 'TT / W / 03', slug: 'act-math-prep-course', title: 'ACT Math', blurb: 'Includes trigonometry questions.' }
      ] },
      { num: 'III', h3: 'After trigonometry', sub: 'Grade 11 and up', courses: [
        { code: 'TT / A / 01', slug: 'ap-calculus-exam-prep', title: 'AP Calculus AB and BC', blurb: 'Derivatives of sine and cosine.' },
        { code: 'TT / A / 02', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'The digital SAT math section.' },
        { code: 'TT / A / 03', slug: 'college-mathematics-complete-masterclass', title: 'College math', blurb: 'Calculus and linear algebra.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live trigonometry lessons that join the pictures up',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Lessons that track the current unit.' },
      { time: 'Weekends', l: 'Longer sessions before a test.' },
      { time: '1-on-1', l: 'Paced to your course or AP timeline.' }
    ],
    cells: [
      { h3: 'Triangle, circle, graph', p: 'Every topic shown in all three pictures.' },
      { h3: 'Exact before decimal', p: 'Special values rebuilt, not looked up.' },
      { h3: 'Both calculator modes', p: 'Degrees and radians checked every lesson.' },
      { h3: 'Your own work', p: 'We teach the method; graded work stays yours.' },
      { h3: 'Exam aware', p: 'AP and SAT formats when they apply.' },
      { h3: 'Batch or private', p: 'A class of 15 to 20, or one to one.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Some students animate sine waves or draw polar roses in code. See them on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Trigonometry lessons are billed month by month with no long contract, so a student can add support for the unit circle unit and stop once it clicks.',
    free: ['A free first class', 'Bring a recent test or worksheet', 'No card needed'],
    group: ['15 to 20 students', 'One regular teacher', 'Choose a batch time', 'Monthly billing'],
    one: ['Private lessons', 'Matched to your course', 'Flexible scheduling']
  },

  faq: {
    eyebrow: 'Questions from students and parents',
    h2: 'Trigonometry tutoring: common questions',
    items: [
      { q: 'Is there trigonometry tutoring near me?', a: 'Our trigonometry tutoring is live online, so location does not matter. Students join by video from home and work with the same teacher each week, in a group of 15 to 20 or one to one.' },
      { q: 'What grade is trigonometry taught in?', a: 'Usually grade 10 for right-triangle trigonometry in Geometry, then grades 11 or 12 for trigonometric functions in Algebra 2 or Precalculus. Course order varies by district, and some states use their own standards.' },
      { q: 'Is trigonometry hard?', a: 'Right-triangle trigonometry is usually manageable. The unit circle, radians and graphs feel harder because the same idea appears in new forms, which is why we teach the triangle, the circle and the graph together.' },
      { q: 'How do I memorize the unit circle?', a: 'Learn the 30-60-90 and 45-45-90 triangles and the signs in each quadrant instead. With a reference angle, a triangle and a sign, any special value can be rebuilt in seconds, and nothing has to be memorized point by point.' },
      { q: 'Is trigonometry on the AP Precalculus exam?', a: 'Yes. Unit 3, Trigonometric and Polar Functions, makes up 30 to 35 percent of the multiple-choice section according to the College Board\'s Course and Exam Description, and one free-response question models a periodic context. AP Central lists the 2027 exam for May 11, 2027.' },
      { q: 'Is trigonometry on the SAT?', a: 'Yes, a small part. The College Board lists right triangles and trigonometry as one of four topics in the Geometry and Trigonometry domain of the SAT math section.' },
      { q: 'Should my calculator be in degrees or radians?', a: 'Whichever the question uses. If angles are written with a degree symbol use degrees; if they are written with pi or as plain real numbers use radians. Check the mode before every test.' },
      { q: 'Can you help with my trigonometry homework?', a: 'Yes. The teacher works through a similar problem with you and checks your reasoning, but you write your own homework and graded work. We never complete assignments for students.' },
      { q: 'When are your trigonometry classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with the College Board or my school?', a: 'No. Modern Age Coders is an independent online school, not affiliated with the College Board, the Common Core initiative, any state or any district. We quote their published documents and link to them.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related math pages',
    lede: 'The courses around trigonometry.',
    items: [
      { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring', p: 'Similarity and right triangles, where trig begins.' },
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'Functions, then the trig functions.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'Functions in depth, with trigonometry inside.' },
      { href: '/ap-calculus-tutoring-online', label: 'AP Calculus tutoring', p: 'Where sine and cosine get derivatives.' },
      { href: '/sat-math-tutoring-online', label: 'SAT math tutoring', p: 'The digital SAT math section.' },
      { href: '/act-math-tutoring-online', label: 'ACT math tutoring', p: 'Timed math, trigonometry included.' },
      { href: '/online-math-tutor-10th-grade', label: 'Tenth grade math tutoring', p: 'The Geometry year.' },
      { href: '/online-math-tutor-11th-grade', label: 'Eleventh grade math tutoring', p: 'Algebra 2 and Precalculus.' }
    ]
  },

  start: {
    h2: 'Book a free first trigonometry class',
    lede: 'Tell us the course and unit, and share a recent quiz if you have one. The teacher will place the student on our four levels and work through a fresh problem from the current unit.',
    readFirst: 'Read about <a class="ag-inline-link" href="/how-we-teach">how our lessons work</a>, or look through our <a class="ag-inline-link" href="/courses">full course list</a>.',
    note: 'Teachers join live by video from India, with lesson times set around US time zones and the school day. WhatsApp is the quickest way to arrange one.',
    formNote: 'The first class costs nothing, and we do not ask for card details.'
  },

  footer: {
    cols: [
      { h4: 'High school math', links: [
        { href: '/geometry-tutoring-online-usa', label: 'Geometry' },
        { href: '/algebra-2-tutoring-online', label: 'Algebra 2' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus' },
        { href: '/ap-calculus-tutoring-online', label: 'AP Calculus' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-math-tutor-12th-grade', label: 'Twelfth grade math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Triangle, circle, wave'
  },

  personalityCss: `
.ag-root.ag-tt .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-tt .ag-capsule { border-left-width: 3px; border-radius: 6px; }
.ag-root.ag-tt .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-tt .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-tt .ag-section-head h2 { max-width: 26ch; }
`,

  dossier: {
    curriculumAuthority: 'Common Core high school standards (thecorestandards.org and the CCSSO PDF), read raw 31 October 2026: F-TF.A.1 to C.9 and G-SRT.C.6 to D.11 with their (+) marks; the page 57 definition of (+); the high school geometry introduction on right triangles, similarity and the ambiguous case. College Board: AP Precalculus Course and Exam Description (2026 edition) Unit 3 topics 3.1 to 3.15 and the 30 to 35 percent weighting; AP Central exam page (May 11, 2027; section structure; FRQ 3 Modeling a Periodic Context); SAT Suite Geometry and Trigonometry page.',
    localProject: 'Our examples: ladder 20 sin 70 deg = 18.79 ft; shadow 30 tan 35 deg = 21.01 ft; 8-15-17 triangle angle 28.07 deg; sin 25 deg = cos 65 deg; 225 deg = 5pi/4 and its point; sin = -3/5 in quadrant III; 2 sin x - 1 = 0 gives pi/6 and 5pi/6; Ferris wheel h(t) = 60 - 50 cos(pi t/4) with h = 85 at t = 8/3 and 16/3; Law of Cosines sqrt 67 = 8.19 and area 27.28; our Python check, mistakes table and seven-step plan. Lesson family: triangle, circle and graph read as one idea.',
    requiredMentions: ['side ratios in right triangles are properties of the angles in the triangle', 'the length of the arc on the unit circle subtended by the angle', 'with specified amplitude, frequency, and midline', 'Additional mathematics that students should learn in order to take advanced courses such as calculus, advanced statistics, or discrete mathematics is indicated by (+)', 'The definitions of sine, cosine, and tangent for acute angles are founded on right triangles and similarity', 'illustrating that Side-Side-Angle is not a congruence criterion.', 'Tue, May 11, 2027', 'Right triangles and trigonometry', 'height = 20 sin 70&deg; = 18.79 feet', 'h(t) = 60 &minus; 50 cos(&pi;t/4)', 'x = &pi;/6 or x = 5&pi;/6'],
    sources: [
      { claim: 'Common Core High School Functions: Trigonometric Functions (F-TF).', url: 'https://www.thecorestandards.org/Math/Content/HSF/TF/' },
      { claim: 'Common Core High School Geometry: Similarity, Right Triangles, and Trigonometry (G-SRT).', url: 'https://www.thecorestandards.org/Math/Content/HSG/SRT/' },
      { claim: 'High school geometry introduction: right triangles, similarity, ambiguous case.', url: 'https://www.thecorestandards.org/Math/Content/HSG/introduction/' },
      { claim: 'CCSS mathematics PDF, page 57: meaning of (+).', url: 'https://learning.ccsso.org/wp-content/uploads/2022/11/ADA-Compliant-Math-Standards.pdf' },
      { claim: 'AP Precalculus exam page: date, sections, timing, calculator rules, FRQ 3.', url: 'https://apcentral.collegeboard.org/courses/ap-precalculus/exam' },
      { claim: 'AP Precalculus Course and Exam Description: Unit 3 topics and weighting.', url: 'https://apcentral.collegeboard.org/media/pdf/ap-precalculus-course-and-exam-description.pdf' },
      { claim: 'SAT Geometry and Trigonometry domain topics.', url: 'https://satsuite.collegeboard.org/sat/whats-on-the-test/math/types/geometry-trigonometry' }
    ],
    rejectedClaims: [
      'AP score or grade promises for our students: refused.',
      'Released AP Precalculus free-response questions or SAT items: not reproduced; every example on the page is ours and we point to the College Board\'s free practice.',
      'The exact share of SAT questions that are trigonometry: not published on the page read, so no figure is given.',
      'Which grade every district teaches trigonometry in: varies; given as usual practice only, labelled as such.',
      'Any affiliation with the College Board, the Common Core initiative, a state or a district: none.'
    ]
  }
};
