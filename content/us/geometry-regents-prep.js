'use strict';
// Geometry Regents prep (ag- state-exam door; UK and US exams cluster, row US018). One of three Regents pages: this one's
// spine is proof, construction tools, the pi rule and coordinate proof; Algebra I's is Part IV modelling; Algebra II's is
// functions and the newest exam.
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from NYSED
// (nysed.gov, nysedregents.org); copies in keyword-research-2026-09/uk-us-gap/src/geometry-regents-prep/ (dates memo,
// schedules, implementation memo, diploma and NY Inspires files in .../src/algebra-1-regents-prep/):
//  - Implementation Schedule for New Regents Examinations (January 2023): Geometry first administration of new exam "June
//    2025", last administration of current exam "January 2025".
//  - Geometry Educator Guide (2024): "Students are permitted three hours to complete the Regents Examination in Geometry";
//    graphing calculator for the full exam; "A compass and straightedge (ruler) must be available to all students";
//    "Schools are responsible for supplying the appropriate tools"; pi: "use of the approximate values of π, such as 3.1416,
//    3.14, or 22/7 are unacceptable" unless otherwise specified; constructed response "as well as demonstrating geometric
//    concepts through constructions"; 4-credit questions ask students to "explain, justify, and/or prove geometric
//    relationships"; "The 6-credit constructed-response question will require students to show their work by developing
//    multi-step, extended logical arguments and proofs involving geometric relationships."; design Part I 24 x 2 = 48,
//    Part II 7 x 2 = 14, Part III 3 x 4 = 12, Part IV 1 x 6 = 6, "Total 35 - 80" (as published); blueprint by domain,
//    percent of test by credit: G-CO 27% to 34%, G-SRT 29% to 37%, G-C 2% to 8%, G-GPE 12% to 18%, G-GMD 2% to 8%, G-MG 8% to
//    15%; clusters include "Prove geometric theorems" (G-CO.C) and "Make geometric constructions" (G-CO.D); detachable
//    reference sheet; five levels, Level 3 "meet the content area requirements for a Regents diploma".
//  - Reference Sheet for Geometry (NGLS): volume formulas only, cylinder and general prism V = Bh, sphere V = 4/3 pi r^3,
//    cone and pyramid V = 1/3 Bh.
//  - June 2027 schedule (layout-extracted): Geometry Tuesday June 22, 1:15 p.m.; August 2027: Wednesday August 18, 12:30 p.m.
//    Final dates memo: June 15 to June 25, 2027 period; January 26 to 29, 2027 period (January sheet marked DRAFT).
//  - nysedregents.org/geometryre: past exams, rating guides, model response sets and conversion charts per administration.
// The educator guide's sample construction question is not reproduced or paraphrased; no past exam item is reproduced.
// Our own material, labelled: the coordinate proof that A(-2, 1), B(2, 4), C(5, 0), D(1, -3) is a square (slopes 3/4 and
// -4/3, sides 5); the ramp angle tan(theta) = 1.2/9, about 7.6 degrees; the sphere of radius 10, 4188.79... with the pi key
// (4189) against 4186.67 with 3.14 (4187); the practice set; the plan.
// Lesson family: coordinate proof, claim, evidence by slope and distance, concluding sentence.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const FILES = 'https://www.nysed.gov/sites/default/files/programs/state-assessment';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'REGENTS GEOMETRY', blurb: 'The Next Generation Geometry Regents from NYSED: 35 questions, 80 credits, compass and straightedge, the pi rule, June 22, 2027 and a coordinate proof worked in full.' },
  slug: 'geometry-regents-prep',
  code: 'gr',
  accent: '#287181',
  accentRationale: 'Geometry Regents: a slate teal #287181 as allocated, 5.26:1 on paper #FBF8F2 and 4.52:1 on the deepest tint, a cool drafting blue apart from the two algebra greens',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-classes-in-new-york', name: 'New York' }],
  routeLabel: 'Geometry Regents prep',
  title: 'Geometry Regents Prep: Proofs, Tools and the June 2027 Exam',
  description: 'Geometry Regents prep from NYSED: the 35-question, 80-credit Next Generation exam, compass and pi rules, the June 22, 2027 date and a coordinate proof worked.',
  ogDescription: 'The Geometry Regents asks students to prove, not just compute: its 6-credit question is an extended proof. What NYSED requires, from the compass to the value of pi, and a proof worked line by line.',
  twitterDescription: 'The Next Generation Geometry Regents from NYSED, with a coordinate proof worked.',
  pageName: 'Geometry Regents Prep',
  webPageDescription: 'Everything NYSED publishes about the Next Generation Geometry Regents, first given in June 2025: its four parts, six domains, compass and pi rules, short reference sheet and 2027 sittings, plus a coordinate proof and practice we wrote ourselves.',
  courseDescription: 'Geometry Regents classes taught live online: congruence and similarity proofs, trigonometry, circles, constructions and coordinate proof, for New York high schoolers in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Geometry Regents prep',
  navLinks: [
    { href: '#exam', label: 'The exam' },
    { href: '#domains', label: 'Domains' },
    { href: '#tools', label: 'Tools and pi' },
    { href: '#proof', label: 'A proof' },
    { href: '#when', label: 'June 2027' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New York &middot; Regents Examination in Geometry &middot; Next Generation, since June 2025',
  h1: 'Geometry Regents prep',
  lede: 'Geometry is the Regents where a correct number is often not enough. NYSED&rsquo;s own guide says the final 6-credit question asks for &ldquo;multi-step, extended logical arguments and proofs&rdquo;, and constructions with a compass appear in the constructed-response parts. Students who did well in Algebra I by calculating carefully can find this a different subject. Since June 2025 the exam has measured the Next Generation standards. This page sets out its design, its tools and its one surprising rule about pi, then writes a coordinate proof the way a grader wants to read it.',
  secondaryCta: { href: '#proof', label: 'Read the worked proof' },
  wa: 'Hello Modern Age Coders, my child in New York is taking the Geometry Regents. Could we book a free first class?',
  heroNote: 'Geometry taught live since 2020 &middot; 10,000+ students &middot; Eastern Time lessons',
  spec: [
    ['Exam', 'Regents Examination in Geometry'],
    ['Standards', 'Next Generation, since June 2025'],
    ['Questions', '35, worth 80 credits'],
    ['Time', 'Three hours'],
    ['Tools', 'Compass, straightedge, graphing calculator'],
    ['June 2027', 'Tuesday June 22, 1:15 p.m.'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'New York&rsquo;s Regents Examination in Geometry, set by NYSED, tests the high school geometry course against the Next Generation standards, first in this form in June 2025. Students answer 35 questions for 80 credits over three hours, with compass, straightedge and graphing calculator, finishing on a six-credit proof. In June 2027 it falls on Tuesday the 22nd at 1:15 p.m. Modern Age Coders prepares students for it live online, in a batch or 1-on-1, through our High School Mathematics course.',

  picks: {
    eyebrow: 'For the Geometry Regents',
    h2: 'Three courses for geometry and the Regents',
    lede: 'Geometry rests on algebra, so the right starting course depends on how solid Algebra I is.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'GR / 01', title: 'High school math', note: 'The full geometry course: proof, similarity, trigonometry, circles.' },
      { course: 'algebra-foundations-masterclass', code: 'GR / 02', title: 'Algebra foundations', note: 'For students whose equations and slopes need repair first.' },
      { course: 'maths-through-coding', code: 'GR / 03', title: 'Math through coding', note: 'Transformations and coordinates, drawn in Python.' }
    ]
  },

  sections: [
    {
      id: 'exam', tint: 'tint', eyebrow: 'The exam',
      h2: 'What is the format of the Geometry Regents?',
      lede: 'Thirty-five questions in four parts, for 80 credits. It looks like the Algebra I design at first glance, but Part II is longer and Part III shorter.',
      body: [
        { kind: 'table', caption: 'Geometry examination design (NYSED Geometry Educator Guide, read 31 October 2026)', head: ['Part', 'Questions', 'Credits each', 'Credits in the part'], numCols: [1, 2, 3], rows: [
          ['Part I (multiple choice)', '24', '2', '48'],
          ['Part II (constructed response)', '7', '2', '14'],
          ['Part III (constructed response)', '3', '4', '12'],
          ['Part IV (constructed response)', '1', '6', '6'],
          ['Total (as published)', '35', '', '80']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What each part asks',
          left: [
            'Two-credit questions may involve several steps and ask students to show work or justify. Four-credit questions ask students to &ldquo;explain, justify, and/or prove geometric relationships&rdquo; and to reason quantitatively in real-world modelling.',
            'The single Part IV question is the proof. NYSED describes it as developing &ldquo;multi-step, extended logical arguments and proofs involving geometric relationships.&rdquo;'
          ],
          rightH3: 'Constructions count',
          right: [
            'NYSED says constructed-response questions require understanding &ldquo;as well as demonstrating geometric concepts through constructions&rdquo;. The standards include a cluster called Make geometric constructions (G-CO.D).',
            'A construction earns credit only when the arcs are visible. Practising with a real compass, not only with software, is part of preparation.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + FILES + '/geometry-educator-guide-2024.pdf" rel="noopener" target="_blank">Geometry Educator Guide</a>, published by NYSED&rsquo;s assessment office and read on 31 October 2026. Our school is independent of NYSED and of every New York district.' }
      ]
    },
    {
      id: 'domains', tint: 'deep', eyebrow: 'Domains',
      h2: 'What topics are on the Geometry Regents?',
      lede: 'Six domains. Similarity, right triangles and trigonometry is the largest; congruence, where most proofs live, is close behind.',
      body: [
        { kind: 'table', caption: 'Geometry blueprint: percent of test by credit (NYSED Geometry Educator Guide, read 31 October 2026)', head: ['Domain', 'Code', 'Percent of credits'], rows: [
          ['Similarity, Right Triangles, and Trigonometry', 'G-SRT', '29 to 37%'],
          ['Congruence', 'G-CO', '27 to 34%'],
          ['Expressing Geometric Properties with Equations', 'G-GPE', '12 to 18%'],
          ['Modeling with Geometry', 'G-MG', '8 to 15%'],
          ['Circles', 'G-C', '2 to 8%'],
          ['Geometric Measurement and Dimension', 'G-GMD', '2 to 8%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The two big domains',
          left: [
            'G-SRT and G-CO together carry well over half the credits. Similar triangles, the trigonometric ratios, rigid motions and triangle congruence are where a student&rsquo;s year should be spent.',
            'Congruence also holds the cluster Prove geometric theorems (G-CO.C): theorems about lines and angles, triangles and parallelograms.'
          ],
          rightH3: 'Coordinates and modelling',
          right: [
            'G-GPE is algebra in geometry&rsquo;s clothes: slopes, distances, midpoints, and proving that a shape is what it claims to be on a grid. Students who are good at Algebra I often find these their easiest credits.',
            'Circles and solid measurement are small on the blueprint, so they deserve attention in proportion: secure, but not at the cost of proof.'
          ] }
      ]
    },
    {
      id: 'tools', tint: 'tint', eyebrow: 'Tools and pi',
      h2: 'What tools and formulas can you use on the Geometry Regents?',
      lede: 'A compass, a straightedge and a graphing calculator. The reference sheet is short, and NYSED is strict about how pi is used.',
      body: [
        { kind: 'table', caption: 'Geometry Regents tools and rules (NYSED Geometry Educator Guide and Reference Sheet for Geometry, read 31 October 2026)', head: ['Item', 'What NYSED says'], rows: [
          ['Time', 'Three hours'],
          ['Calculator', 'Exclusive use of a graphing calculator for the full exam; no symbol manipulation'],
          ['Compass and straightedge', 'Must be available to every student; schools supply the tools'],
          ['Value of pi', 'Use the pi symbol or pi key; 3.1416, 3.14 or 22/7 are unacceptable unless the question says otherwise'],
          ['Reference sheet', 'Detachable, at the end of the booklet: volume of a cylinder, general prism, sphere, cone and pyramid']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the pi rule matters',
          left: [
            'Our example: the volume of a sphere of radius 10 is (4/3)&pi;(10)&sup3;. With the pi key that is 4188.79..., which rounds to 4189. With 3.14 it is 4186.67, which rounds to 4187. The second answer is wrong by NYSED&rsquo;s rule, even though the method is right.',
            'Students used to 3.14 from middle school need to unlearn it early in the year, not on exam day.'
          ],
          rightH3: 'What the sheet leaves out',
          right: [
            'The geometry reference sheet holds the volume formulas and nothing else. Area of a circle, circumference, the distance formula, the trigonometric ratios and the special right triangles are not on it.',
            'Those must be known. We drill them as short daily recall, a few minutes at the start of each lesson.'
          ] },
        { kind: 'source', html: 'NYSED publishes the <a class="ag-inline-link" href="' + FILES + '/geometry-next-gen-reference-sheet.pdf" rel="noopener" target="_blank">Next Generation Geometry Reference Sheet</a> and the <a class="ag-inline-link" href="https://www.nysed.gov/state-assessment/geometry" rel="noopener" target="_blank">Geometry resources page</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'proof', tint: 'deep', eyebrow: 'A proof',
      h2: 'How to write a coordinate geometry proof for the Regents',
      lede: 'Our own problem, in the G-GPE style. The method matters more than the answer: claim, evidence, and a sentence that ties them together.',
      body: [
        { kind: 'ol', items: [
          '<b>The problem (ours).</b> Quadrilateral ABCD has vertices A(-2, 1), B(2, 4), C(5, 0) and D(1, -3). Prove that ABCD is a square.',
          '<b>Plan before calculating.</b> A square is a rhombus with a right angle. So we will show all four sides are equal, then show one pair of adjacent sides is perpendicular.',
          '<b>Distances.</b> AB = &radic;((2 - (-2))&sup2; + (4 - 1)&sup2;) = &radic;(16 + 9) = 5. BC = &radic;(3&sup2; + (-4)&sup2;) = 5. CD = &radic;((-4)&sup2; + (-3)&sup2;) = 5. DA = &radic;((-3)&sup2; + 4&sup2;) = 5. All four sides are 5, so ABCD is a rhombus.',
          '<b>Slopes.</b> Slope of AB = (4 - 1)/(2 - (-2)) = 3/4. Slope of BC = (0 - 4)/(5 - 2) = -4/3. Their product is -1, so AB is perpendicular to BC and angle B is a right angle.',
          '<b>Concluding statement.</b> &ldquo;ABCD is a rhombus because all four sides are congruent, and a rhombus with a right angle is a square. Therefore ABCD is a square.&rdquo;'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where proof credit is lost',
          left: [
            'Calculating every slope and length correctly and then stopping. The question said prove, and a list of numbers is evidence without a conclusion.',
            'Using the wrong definition: four equal sides alone gives a rhombus, not a square. Name the property you are proving at each step.'
          ],
          rightH3: 'A second example, trigonometry (ours)',
          right: [
            'A wheelchair ramp rises 1.2 meters over a horizontal run of 9 meters. Find the angle it makes with the ground, to the nearest tenth of a degree.',
            'tan&theta; = 1.2/9, so &theta; = tan<sup>-1</sup>(0.1333...), about 7.6 degrees. Write the ratio first, then the inverse: the grader looks for both.'
          ] }
      ]
    },
    {
      id: 'when', tint: 'tint', eyebrow: 'June 2027',
      h2: 'When is the Geometry Regents in 2027?',
      lede: 'NYSED&rsquo;s June 2027 schedule puts Geometry on Tuesday, June 22 at 1:15 p.m. It is also offered in the January and August periods.',
      body: [
        { kind: 'table', caption: 'Geometry Regents sittings in 2027 (NYSED examination schedules and final dates memo, read 31 October 2026)', head: ['Period', 'Geometry', 'Note'], rows: [
          ['January 2027', 'Within Tuesday, January 26 to Friday, January 29', 'January sheet still marked draft by NYSED'],
          ['June 2027', 'Tuesday, June 22, 1:15 p.m.', 'One of the last exams of the June period'],
          ['August 2027', 'Wednesday, August 18, 12:30 p.m.', 'Afternoon of the second August day']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Scoring and levels',
          left: [
            'Results come in five levels. The geometry guide&rsquo;s Level 3 description says those students &ldquo;meet the content area requirements for a Regents diploma&rdquo;, with a warning that the next course may need extra support.',
            'Each sitting has its own conversion chart on nysedregents.org, turning raw credits out of 80 into a scale score and level.'
          ],
          rightH3: 'Where Geometry fits in a diploma',
          right: [
            'Under current NYSED rules a Regents diploma needs one math Regents, and the advanced designation needs three. For most students Geometry is the second of those three.',
            'Through its NY Inspires plan NYSED wants passing Regents exams to stop being a diploma condition from fall 2027. That needs a Board of Regents vote; today&rsquo;s rules hold for every student in the meantime.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + FILES + '/regents-exams-schedule-june-2027.pdf" rel="noopener" target="_blank">June 2027 Regents schedule</a>, <a class="ag-inline-link" href="' + FILES + '/regents-exams-schedule-august-2027.pdf" rel="noopener" target="_blank">August 2027 schedule</a>, <a class="ag-inline-link" href="' + FILES + '/memo-regents-exam-dates-2027.pdf" rel="noopener" target="_blank">final dates memo</a> and <a class="ag-inline-link" href="https://www.nysed.gov/ny-inspires/transformation-timeline" rel="noopener" target="_blank">NY Inspires timeline</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice',
      h2: 'Twelve Geometry Regents practice questions with answers',
      lede: 'Our own questions across all six domains. Use the pi key wherever pi appears.',
      body: [
        { kind: 'table', caption: 'Our practice questions, written for this page, with answers', head: ['Domain', 'Question', 'Answer'], rows: [
          ['G-CO', 'Point (3, -2) is reflected over the y-axis. Where does it land?', '(-3, -2)'],
          ['G-CO', 'Two angles of a triangle are 48 and 67 degrees. Find the third.', '65 degrees'],
          ['G-CO', 'Which rigid motion maps (x, y) to (-y, x)?', 'A rotation of 90 degrees counterclockwise about the origin'],
          ['G-SRT', 'Triangles with sides 6, 8, 10 and 9, 12, 15: similar? Give the scale factor.', 'Yes, 3/2'],
          ['G-SRT', 'In a right triangle, sin A = 5/13. What is cos A?', '12/13'],
          ['G-SRT', 'A 30-60-90 triangle has a short leg of 7. Find the hypotenuse.', '14'],
          ['G-GPE', 'Find the midpoint of (-4, 6) and (8, 2).', '(2, 4)'],
          ['G-GPE', 'Write the equation of the line through (1, 3) perpendicular to y = 2x - 5.', 'y = -x/2 + 7/2'],
          ['G-C', 'A circle has radius 6. Find the length of a 60-degree arc in terms of pi.', '2&pi;'],
          ['G-C', 'Complete the square to find the center and radius: x&sup2; + y&sup2; - 6x + 4y = 12.', 'Center (3, -2), radius 5'],
          ['G-GMD', 'A cylinder has radius 4 and height 10. Find its volume to the nearest tenth.', '502.7'],
          ['G-MG', 'A tank holds 1,000 cubic inches of water at 0.036 pounds per cubic inch. How heavy is the water?', '36 pounds']
        ] },
        { kind: 'p', mt: true, html: 'NYSED&rsquo;s <a class="ag-inline-link" href="https://www.nysedregents.org/geometryre/" rel="noopener" target="_blank">past Geometry exams</a> from June 2025 onward follow the current design, each with its rating guide and model responses. Marking a practice proof against a model response is one of the most useful hours a student can spend.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'A plan',
      h2: 'How to prepare for the Geometry Regents, week by week',
      lede: 'Our twelve-week plan counted back from Tuesday, June 22, 2027.',
      body: [
        { kind: 'ol', items: [
          '<b>Weeks 1 and 2: recall drill and a diagnostic.</b> Formulas not on the sheet, then one full recent exam marked with the rating guide.',
          '<b>Weeks 3 to 5: congruence and proof.</b> Rigid motions, triangle congruence criteria, and a two-column or paragraph proof every lesson.',
          '<b>Weeks 6 to 8: similarity and trigonometry.</b> Scale factors, the side-splitter idea, trigonometric ratios and their inverses, with a wording-to-diagram habit for word problems.',
          '<b>Week 9: coordinate geometry.</b> Slope, distance and midpoint proofs, finishing each with a concluding statement.',
          '<b>Week 10: constructions and circles.</b> Compass work by hand, arc length, sector area and the equation of a circle.',
          '<b>Weeks 11 and 12: full papers.</b> Two three-hour rehearsals with the student&rsquo;s own compass and calculator, and the pi key every time.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Proof readiness',
    h2: 'Four stages of writing a geometry proof',
    lede: 'How students usually grow into the 6-credit question, in our experience of teaching it.',
    table: { caption: 'Stages of proof writing (ours)', head: ['Stage', 'What it looks like', 'Next step'], rows: [
      ['1. Calculator', 'Finds numbers, never states why', 'Say the reason out loud for each step'],
      ['2. Listing', 'Writes true statements in no clear order', 'Start from the given, end at the claim'],
      ['3. Chaining', 'Each step follows from the last, with a reason', 'Name the theorem or definition used'],
      ['4. Concluding', 'Ends with a sentence that answers the question', 'Write proofs under time']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to explain one homework proof to you. If they can tell the story, they can usually write it.',
      'Geometry marks often drop from Algebra I marks in the first term. That is common and fixable, once proof writing clicks.'
    ] },
    right: { h3: 'For students', ps: [
      'Before writing a proof, say in one sentence what you are going to show and how.',
      'Use the pi key. Every time.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'High school math courses for New York',
    lede: 'Live lessons for each Regents year and after.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Grades 8 and 9', courses: [
        { code: 'GR / F / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra I, secured.' },
        { code: 'GR / F / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Angles, area and the Pythagorean theorem.' },
        { code: 'GR / F / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Draw transformations in code.' }
      ] },
      { num: 'II', h3: 'Geometry year', sub: 'Grades 9 and 10', courses: [
        { code: 'GR / G / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry through calculus.' },
        { code: 'GR / G / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'Proof for students who want more.' },
        { code: 'GR / G / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Ahead of Algebra II.' }
      ] },
      { num: 'III', h3: 'After Geometry', sub: 'Grades 10 to 12', courses: [
        { code: 'GR / A / 01', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Functions and trigonometry.' },
        { code: 'GR / A / 02', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'Geometry and trig included.' },
        { code: 'GR / A / 03', slug: 'act-math-prep-course', title: 'ACT Math', blurb: 'Heavier on geometry than the SAT.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Geometry lessons with a whiteboard and a compass',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Evenings ET', l: 'After-school lessons on New York time.' },
      { time: 'Weekends', l: 'Proof clinics and full practice papers.' },
      { time: '1-on-1', l: 'One proof at a time, written and rewritten.' }
    ],
    cells: [
      { h3: 'Proof every lesson', p: 'Short or long, always concluded.' },
      { h3: 'Real compass work', p: 'Arcs drawn by hand and shown.' },
      { h3: 'Pi key habit', p: 'No 3.14, ever.' },
      { h3: 'Recall drill', p: 'Formulas the sheet leaves out.' },
      { h3: 'Model responses', p: 'Our proofs marked against NYSED&rsquo;s.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Student work',
  projectsLede: 'Coordinates and shapes appear in every app our students build. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, quoted in full.',

  fees: {
    h2: 'Fees',
    lede: 'Geometry Regents classes are charged monthly in US dollars and can stop at any time, so a student can join for the spring proof units and finish after June 22.',
    free: ['A free first class', 'Bring a proof you got stuck on', 'No card details'],
    group: ['Fifteen to twenty students', 'One geometry teacher', 'Choose your batch', 'Monthly'],
    one: ['Your own teacher', 'Proof writing in depth', 'Flexible times']
  },

  faq: {
    eyebrow: 'Geometry Regents questions',
    h2: 'Geometry Regents: questions students ask',
    items: [
      { q: 'When is the Geometry Regents in June 2027?', a: 'Tuesday, June 22, 2027, at 1:15 p.m., on NYSED\'s June 2027 examination schedule. It is also given in the January period and on Wednesday, August 18, 2027, at 12:30 p.m.' },
      { q: 'How many questions are on the Geometry Regents?', a: 'Thirty-five, in four parts: 24 multiple choice, 7 two-credit questions, 3 four-credit questions and one six-credit question. NYSED\'s guide gives a total of 80 credits.' },
      { q: 'Is the Geometry Regents hard?', a: 'It is different rather than simply harder: it asks students to prove and construct, not only calculate. Students who practise written proofs and constructions all year usually find the exam far more manageable.' },
      { q: 'Do you need a compass for the Geometry Regents?', a: 'Yes. Every student must have access to a compass and a straightedge, which the school provides, and a graphing calculator for all three hours.' },
      { q: 'Can you use 3.14 for pi on the Geometry Regents?', a: 'No, unless a question says so. NYSED\'s guide says students should use the pi symbol or the pi key, and that 3.1416, 3.14 or 22/7 are unacceptable.' },
      { q: 'What formulas are given on the Geometry Regents?', a: 'Only volume formulas: cylinder, general prism, sphere, cone and pyramid, on a detachable reference sheet. Area, circumference, distance and the trigonometric ratios must be known.' },
      { q: 'What is the biggest topic on the Geometry Regents?', a: 'Similarity, right triangles and trigonometry, at 29 to 37 percent of the credits, followed by congruence at 27 to 34 percent, according to NYSED\'s blueprint.' },
      { q: 'When did the Geometry Regents change?', a: 'NYSED\'s implementation memo set the first new Next Generation Geometry exam for June 2025, with the previous exam given for the last time in January 2025.' },
      { q: 'When are your Geometry classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set in Eastern Time.' },
      { q: 'Are you affiliated with NYSED?', a: 'No. Modern Age Coders is an independent school that teaches geometry live online. We quote NYSED\'s public documents and send students to NYSED\'s own past exams.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More geometry and New York pages.',
    items: [
      { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring', p: 'Proof as a chain of reasons.' },
      { href: '/online-math-tutor-10th-grade', label: 'Tenth grade math tutoring', p: 'The usual geometry year.' },
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'The course after Geometry.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'Trigonometry carried further.' },
      { href: '/coding-classes-in-new-york', label: 'Coding classes in New York', p: 'Our New York page.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Bring a proof that went wrong in class. The teacher will rebuild it with your child, line by line, and show where the reasons belong.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how our lessons work</a>, or look at <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Teachers teach live from India on Eastern Time slots, weekday evenings or weekends. WhatsApp gets you the fastest reply.',
    formNote: 'The first class is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Geometry', links: [
        { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring' },
        { href: '/online-math-tutor-10th-grade', label: 'Grade 10 math' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'New York and the US', links: [
        { href: '/coding-classes-in-new-york', label: 'New York' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Claim, evidence, conclusion'
  },

  personalityCss: `
.ag-root.ag-gr .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-gr .ag-capsule { border-left-width: 2px; border-radius: 0; }
.ag-root.ag-gr .ag-table caption { text-align: left; font-weight: 600; text-transform: none; }
.ag-root.ag-gr .ag-table td.ag-num { font-variant-numeric: tabular-nums; }
.ag-root.ag-gr .ag-steps li { line-height: 1.7; }
.ag-root.ag-gr .ag-section-head h2 { max-width: 26ch; }
`,

  dossier: {
    curriculumAuthority: 'New York State Education Department, read raw 31 October 2026: Implementation Schedule for New Regents Examinations (Geometry new June 2025, last old January 2025); Geometry Educator Guide (three hours, graphing calculator, compass and straightedge, value of pi rule, question formats including constructions and the 6-credit proof, Parts I to IV design totalling 35 questions and 80 credits, domain blueprint, reference sheet, five levels); Reference Sheet for Geometry (NGLS); June and August 2027 schedules and final dates memo; nysedregents.org Geometry archive; Diploma Requirements; NY Inspires timeline.',
    localProject: 'Our coordinate proof that A(-2, 1), B(2, 4), C(5, 0), D(1, -3) is a square (all sides 5, slopes 3/4 and -4/3); our ramp angle example (tan theta = 1.2/9, about 7.6 degrees); our pi-rule sphere example (4189 with the pi key, 4187 with 3.14); a twelve-item practice set across six domains, a twelve-week plan and a four-stage proof ladder. Lesson family: coordinate proof.',
    requiredMentions: ['Make geometric constructions (G-CO.D)', 'Tuesday, June 22, 1:15 p.m.', 'Wednesday, August 18, 12:30 p.m.', 'multi-step, extended logical arguments and proofs involving geometric relationships.', 'explain, justify, and/or prove geometric relationships', 'as well as demonstrating geometric concepts through constructions', '3.1416, 3.14 or 22/7 are unacceptable', 'Similarity, right triangles and trigonometry is the largest', 'A(-2, 1), B(2, 4), C(5, 0) and D(1, -3)', 'With 3.14 it is 4186.67'],
    sources: [
      { claim: 'Geometry Educator Guide (NYSED, 2024).', url: FILES + '/geometry-educator-guide-2024.pdf' },
      { claim: 'Next Generation Geometry Reference Sheet.', url: FILES + '/geometry-next-gen-reference-sheet.pdf' },
      { claim: 'Implementation Schedule for New Regents Examinations (January 2023).', url: FILES + '/memo-implementation-schedule-new-regents-exams.pdf' },
      { claim: 'June 2027 Regents examination schedule.', url: FILES + '/regents-exams-schedule-june-2027.pdf' },
      { claim: 'August 2027 Regents examination schedule.', url: FILES + '/regents-exams-schedule-august-2027.pdf' },
      { claim: 'Past Regents Examinations in Geometry.', url: 'https://www.nysedregents.org/geometryre/' }
    ],
    rejectedClaims: [
      'That the Geometry Regents has the lowest pass rate of the math Regents: not printed; no NYSED statistic read in this session.',
      'The exact January 2027 day for Geometry: not printed; NYSED\'s January 2027 schedule sheet was marked draft.',
      'The educator guide\'s sample construction question and its rubric: not reproduced or paraphrased.',
      'Conversion chart numbers: not reproduced; described and linked.',
      'Score or diploma promises for our classes: refused. Any affiliation with NYSED: none.'
    ]
  }
};
