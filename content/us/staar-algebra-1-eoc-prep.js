'use strict';
// STAAR Algebra I EOC prep (ag- state-test door; UK and US exams cluster, row US015).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from the
// Texas Education Agency (tea.texas.gov); copies in keyword-research-2026-09/uk-us-gap/src/staar-algebra-1-eoc-prep/ (and
// the shared calendar, calculator and HB 8 files in .../src/staar-math-tutoring/):
//  - Fall 2022 STAAR Algebra I Blueprint, "Effective as of Academic Year 2022–23": five reporting categories, questions and
//    points (1 Number and Algebraic Methods 9-11 / 9-14; 2 Describing and Graphing Linear Functions, Equations and
//    Inequalities 10-12 / 10-16; 3 Writing and Solving Linear Functions, Equations and Inequalities 12-14 / 12-18; 4 Quadratic
//    Functions and Equations 9-11 / 9-14; 5 Exponential Functions and Equations 5-7 / 5-9); 41 one-point and 9 two-point
//    questions; "Total 50 59". Readiness counts 2, 3, 5, 4, 2 (16 readiness standards).
//  - Algebra I Assessment Eligible TEKS (January 2014): readiness standards A.2A, A.2C, A.2I, A.3B, A.3C, A.3D, A.5A, A.5C,
//    A.6A, A.7A, A.7C, A.8A, A.9C, A.9D, A.10E, A.11B; A.8A "solve quadratic equations having real solutions by factoring,
//    taking square roots, completing the square, and applying the quadratic formula"; A.9C "write exponential functions in
//    the form f(x) = abx"; mathematical process standards "incorporated into test questions across reporting categories".
//  - DRAFT SST Algebra I Summative Blueprint, "Effective beginning with the Spring 2028 administration": "Total 39-41 48";
//    "Subscores will not be reported for the Strands."; "Question types: Inline choice, multiple choice, and multiselect."
//  - High school graduation requirements page: "Students must pass five end-of-course assessments to meet the testing
//    requirements for graduation. Those tests cover Algebra I, English I, English II, Biology and U.S. History."
//  - Updated HB 8 FAQ (08/20/2026): Q14 BOY and MOY for Algebra I are optional; Q16 "TEA will continue to provide testing
//    opportunities in December and June."; Q17 English II no longer a graduation requirement for students who graduate after
//    August 31, 2027; Q18 "HB 8 does not affect the use of TSIA2 as a substitute assessment for English I or Algebra I."
//  - What Families Should Know about STAAR: "Other assessments, such as PSAT, SAT, ACT, AP, or TSIA may be used to satisfy
//    graduation requirements in place of STAAR end-of-course assessments."
//  - 2026–2027 testing calendar: Algebra I windows Nov 30 to Dec 11, 2026 (results Jan 5, 2027), Apr 19 to Apr 30, 2027
//    (EOC results May 21, 2027), Jun 14 to Jun 25, 2027 (results Jul 20, 2027).
//  - STAAR EOC performance standards (19 TAC §101.3041(c)(1)): Algebra I Approaches 3550, Meets 4000, Masters 4345 (earlier
//    columns 3489 for 2012 to 2015 and 3541 for 2016 to 2022); "The standard in place when a student first takes an EOC
//    assessment is the standard that will be maintained throughout the student's school career."
//  - STAAR Calculator Policy: calculators required for Algebra I; "each student must have access to a graphing calculation
//    device throughout the entire test"; disabled functions include "polynomial root finders" and "simultaneous equation
//    solvers"; CAS not allowed unless disabled; memory cleared before and after.
// TEA en dashes written with "to" here. No released item is reproduced; the page links to TEA's released tests.
// Our own material, labelled: 2x^2 + 7x - 15 = (2x - 3)(x + 5), zeros 3/2 and -5; 8000(1.03)^5 is about 9,274; the ten-item
// practice set with answers; the three-window retake plan; the STAAR to SST comparison reading.
// Lesson family: one function, three representations (equation, table, graph) checked against each other.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TEA = 'https://tea.texas.gov/data-reports/staar';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'STAAR ALGEBRA I', blurb: 'The STAAR Algebra I end-of-course exam from the TEA blueprint: 50 questions, five reporting categories, three 2026 to 2027 windows, the graphing calculator rule and the SST version from 2028.' },
  slug: 'staar-algebra-1-eoc-prep',
  code: 'sae',
  accent: '#5C412C',
  accentRationale: 'STAAR Algebra I: a saddle brown #5C412C as allocated, 8.81:1 on paper #FBF8F2 and 7.58:1 on the deepest tint, warm and distinct from the grades 3 to 8 page green',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-classes-in-texas', name: 'Texas' }],
  routeLabel: 'STAAR Algebra 1 EOC prep',
  title: 'STAAR Algebra 1 EOC Prep: Live Online Classes in Texas',
  description: 'STAAR Algebra 1 EOC prep from the TEA blueprint: 50 questions, five reporting categories, the 2026 to 2027 windows, the graphing calculator rule and practice.',
  ogDescription: 'Algebra I is one of the five end-of-course exams a Texas student must pass to graduate. The blueprint, the December, April and June windows, the score to pass and how to prepare.',
  twitterDescription: 'STAAR Algebra I EOC from the TEA blueprint, with original practice.',
  pageName: 'STAAR Algebra 1 EOC Prep',
  webPageDescription: 'The STAAR Algebra I end-of-course exam explained for Texas high school and middle school students: blueprint, readiness TEKS, graphing calculator rules, the three 2026 to 2027 windows, the passing scale score and the SST version due in 2028.',
  courseDescription: 'Algebra I preparation, taught live online, for Texas students sitting the end-of-course exam: linear, quadratic and exponential functions, in a group batch or privately.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'STAAR Algebra 1 EOC',
  navLinks: [
    { href: '#blueprint', label: 'Blueprint' },
    { href: '#graduation', label: 'Graduation' },
    { href: '#windows', label: 'Windows' },
    { href: '#calculator', label: 'Calculator' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Texas &middot; Algebra I end-of-course &middot; Usually grade 8 or 9',
  h1: 'STAAR Algebra 1 EOC prep',
  lede: 'The STAAR Algebra I end-of-course (EOC) exam is the one math test a Texas student must pass to graduate. Most take it in grade 9, many in grade 8, and anyone who misses the bar can try again in December or June. The exam itself is predictable in shape: TEA publishes exactly how many questions come from linear functions, quadratics and exponentials. This guide sets out that blueprint, the 2026 to 2027 windows, the calculator rules and the new version arriving with the Student Success Tool, then works two problems the way our teachers do.',
  secondaryCta: { href: '#blueprint', label: 'See the blueprint' },
  wa: 'Hello Modern Age Coders, my child in Texas is taking the STAAR Algebra I EOC. Could we book a free first class?',
  heroNote: 'Algebra taught live since 2020 &middot; 10,000+ students &middot; our own problems, TEA&rsquo;s released tests for rehearsal',
  spec: [
    ['Exam', 'STAAR Algebra I EOC'],
    ['Questions', '50, worth 59 points'],
    ['Categories', 'Five'],
    ['Calculator', 'Graphing, required'],
    ['2026 to 2027 windows', 'December, April, June'],
    ['Graduation', 'One of five required EOCs'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The STAAR Algebra I EOC is the Texas Education Agency&rsquo;s end-of-course exam for Algebra I, one of five EOCs Texas students must pass to graduate. TEA&rsquo;s blueprint gives it 50 questions worth 59 points across five reporting categories, with a graphing calculator required throughout. In 2026 to 2027 it runs in December, April and June. Modern Age Coders teaches it live online, in a batch or 1-on-1, through our Algebra Foundations course.',

  picks: {
    eyebrow: 'Algebra I, taught properly',
    h2: 'Three courses for the Algebra I EOC',
    lede: 'Start with the course that matches where the student is, not where the calendar says they should be.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'SAE / 01', title: 'Algebra foundations', note: 'Pre-algebra through Algebra I: linear, quadratic and exponential functions.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'SAE / 02', title: 'Middle school math', note: 'For grade 8 students who need integers and equations secured first.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'SAE / 03', title: 'High school math', note: 'Algebra I review, then on to geometry and Algebra II.' }
    ]
  },

  sections: [
    {
      id: 'blueprint', tint: 'tint', eyebrow: 'The blueprint',
      h2: 'How many questions are on the STAAR Algebra 1 EOC?',
      lede: 'Fifty, worth 59 points. TEA&rsquo;s blueprint, effective since the 2022 to 2023 academic year, splits them across five reporting categories.',
      body: [
        { kind: 'table', caption: 'STAAR Algebra I by reporting category (TEA Fall 2022 STAAR Algebra I Blueprint, read 31 October 2026)', head: ['Reporting category', 'Readiness standards', 'Questions', 'Points'], rows: [
          ['1. Number and algebraic methods', '2', '9 to 11', '9 to 14'],
          ['2. Describing and graphing linear functions, equations and inequalities', '3', '10 to 12', '10 to 16'],
          ['3. Writing and solving linear functions, equations and inequalities', '5', '12 to 14', '12 to 18'],
          ['4. Quadratic functions and equations', '4', '9 to 11', '9 to 14'],
          ['5. Exponential functions and equations', '2', '5 to 7', '5 to 9'],
          ['Total (as published)', '16', '50', '59']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where the weight sits',
          left: [
            'Categories 2 and 3 are both about linear functions, and together they carry 22 to 26 of the 50 questions. Linear work is roughly half the exam before quadratics or exponentials appear.',
            'Of the 50 questions, 41 are worth one point and 9 are two-point questions that are not multiple choice, so the student types or plots the answer.'
          ],
          rightH3: 'The sixteen readiness standards',
          right: [
            'TEA&rsquo;s assessed-curriculum document marks sixteen Algebra I TEKS as readiness standards, from A.2A (domain and range of a linear function) to A.11B (laws of exponents). They include A.8A, which asks students to solve quadratics &ldquo;by factoring, taking square roots, completing the square, and applying the quadratic formula&rdquo;.',
            'The process standards, such as justifying a solution, are not a separate category: TEA builds them into questions across all five.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + TEA + '/2022-staar-algebra-i-blueprint-0.pdf" rel="noopener" target="_blank">STAAR Algebra I Blueprint</a> and <a class="ag-inline-link" href="' + TEA + '/2014-algebra-i-assessed-curriculum.pdf" rel="noopener" target="_blank">Algebra I assessed curriculum</a>, both published by TEA and read on 31 October 2026. Modern Age Coders has no link with TEA or any school district.' }
      ]
    },
    {
      id: 'graduation', tint: 'deep', eyebrow: 'Graduation',
      h2: 'Do you have to pass the Algebra 1 EOC to graduate in Texas?',
      lede: 'Yes, unless a substitute assessment or another route applies. TEA lists Algebra I among five end-of-course exams a student must pass for the testing part of graduation.',
      body: [
        { kind: 'two',
          leftH3: 'What TEA says',
          left: [
            'TEA&rsquo;s high school graduation page: &ldquo;Students must pass five end-of-course assessments to meet the testing requirements for graduation. Those tests cover Algebra I, English I, English II, Biology and U.S. History.&rdquo;',
            'House Bill 8 changes one of the five. The updated HB 8 FAQ says English II is no longer a graduation requirement for students who graduate after August 31, 2027. Nothing in it removes Algebra I.'
          ],
          rightH3: 'Substitutes and second chances',
          right: [
            'TEA&rsquo;s family guide notes that other assessments, &ldquo;such as PSAT, SAT, ACT, AP, or TSIA&rdquo;, may satisfy graduation requirements in place of STAAR EOCs, and the HB 8 FAQ confirms TSIA2 stays available as a substitute for Algebra I.',
            'A student who does not pass may, if eligible, use the individual graduation committee process the HB 8 FAQ describes. The school counselor knows which route fits a given student.'
          ] },
        { kind: 'table', mt: true, caption: 'STAAR Algebra I minimum scale scores (TEA STAAR EOC performance standards, 19 TAC 101.3041(c)(1), read 31 October 2026)', head: ['Level', 'Algebra I scale score', 'What it means'], numCols: [1], rows: [
          ['Approaches Grade Level', '3550', 'Passing'],
          ['Meets Grade Level', '4000', 'High likelihood of success in the next course'],
          ['Masters Grade Level', '4345', 'Success expected with little or no intervention']
        ] },
        { kind: 'p', mt: true, html: 'One detail on the same TEA table is worth knowing: &ldquo;The standard in place when a student first takes an EOC assessment is the standard that will be maintained throughout the student&rsquo;s school career.&rdquo; A student retaking Algebra I is measured against the bar that applied at the first attempt.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://tea.texas.gov/student-readiness-and-high-school/high-school-graduation-requirements" rel="noopener" target="_blank">High School Graduation Requirements</a>, <a class="ag-inline-link" href="' + TEA + '/2023-staar-eoc-performance-standards-2.pdf" rel="noopener" target="_blank">EOC performance standards</a> and <a class="ag-inline-link" href="' + TEA + '/hb-8-faq-update.pdf" rel="noopener" target="_blank">HB 8 FAQ</a>, TEA, read 31 October 2026.' }
      ]
    },
    {
      id: 'windows', tint: 'tint', eyebrow: 'Three windows',
      h2: 'When can you take the STAAR Algebra 1 EOC in 2026 to 2027?',
      lede: 'Three times. TEA&rsquo;s 2026 to 2027 testing calendar opens an Algebra I window in December, in April and in June.',
      body: [
        { kind: 'table', caption: 'STAAR Algebra I windows for 2026 to 2027 (TEA Student Assessment Testing Calendar, August 2026, read 31 October 2026)', head: ['Window', 'Dates', 'Results to districts'], rows: [
          ['December', 'November 30 to December 11, 2026', 'January 5, 2027'],
          ['Spring', 'April 19 to April 30, 2027', 'May 21, 2027'],
          ['Summer', 'June 14 to June 25, 2027', 'July 20, 2027']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Choosing a window',
          left: [
            'Most students sit the spring window at the end of their Algebra I course. December and June serve retakes and students who finished the course early or need another try.',
            'June 2027 comes a few weeks after spring results land on May 21, which leaves time for a short, focused block of lessons on the categories that cost the most points.'
          ],
          rightH3: 'From 2027 to 2028: SST Algebra I',
          right: [
            'Under House Bill 8, the Student Success Tool replaces STAAR from the 2027 to 2028 school year. TEA&rsquo;s draft SST Algebra I summative blueprint, effective from the spring 2028 administration, lists 39 to 41 questions worth 48 points.',
            'The HB 8 FAQ confirms that December and June testing opportunities continue, and that beginning-of-year and middle-of-year Algebra I tests will be optional for high schools.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://tea.texas.gov/assessment-and-accountability/student-assessment-testing-calendar-2026-2027-saft-update.pdf" rel="noopener" target="_blank">2026 to 2027 testing calendar</a> and <a class="ag-inline-link" href="' + TEA + '/sst-algebra-i-summative-blueprint.pdf" rel="noopener" target="_blank">draft SST Algebra I summative blueprint</a>, TEA, read 31 October 2026. Districts set the exact days.' }
      ]
    },
    {
      id: 'calculator', tint: 'deep', eyebrow: 'The calculator',
      h2: 'What calculator is allowed on the Algebra 1 STAAR test?',
      lede: 'A graphing calculator is required for the whole test, but with several of its functions switched off. Knowing which ones changes how a student should practise.',
      body: [
        { kind: 'table', caption: 'Graphing calculator rules for STAAR Algebra I (TEA STAAR Calculator Policy, read 31 October 2026)', head: ['Rule', 'What TEA requires'], rows: [
          ['Access', 'Each student must have a graphing calculator throughout the entire test'],
          ['Must be disabled', 'Polynomial root finders and simultaneous equation solvers'],
          ['Also disabled', 'Graphing of inequalities that reads the symbol automatically, graphing implicit equations, geometry functions'],
          ['Computer algebra (CAS)', 'Not allowed unless the CAS is disabled'],
          ['Memory', 'Cleared to factory default before and after testing'],
          ['Phones and watches', 'Calculator apps on smartphones and smartwatches not allowed']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why this matters',
          left: [
            'The two most tempting shortcuts, a polynomial solver for quadratics and a system solver for simultaneous equations, are exactly the ones that must be removed. A student who leans on them all year meets the exam without them.',
            'The calculator still graphs, so a student can draw a quadratic and look at where it meets the axis, or graph two lines and read the crossing point. That is a check, and it is allowed.'
          ],
          rightH3: 'Our rule in class',
          right: [
            'Solve by algebra first, then use the graph to confirm. If the two disagree, one of them is wrong and finding which one is the lesson.',
            'TEA also says students should use the same type of calculator they use in class. We teach on the model the student will carry into the exam room.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + TEA + '/staar-calculator-policy.pdf" rel="noopener" target="_blank">STAAR Calculator Policy</a>, TEA, read 31 October 2026. TEA also publishes <a class="ag-inline-link" href="' + TEA + '/staar-mathematics-resources" rel="noopener" target="_blank">Algebra I reference materials and graph paper</a> used during the test.' }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Two Algebra I problems, each checked three ways',
      lede: 'Our own problems at the level of the readiness standards A.8A and A.9C. They are not released STAAR items.',
      body: [
        { kind: 'ol', items: [
          '<b>A quadratic, our problem.</b> Solve 2x&sup2; + 7x - 15 = 0.',
          '<b>Equation.</b> Look for two numbers that multiply to 2 x (-15) = -30 and add to 7: they are 10 and -3. Split the middle: 2x&sup2; + 10x - 3x - 15 = 2x(x + 5) - 3(x + 5) = (2x - 3)(x + 5).',
          '<b>Solve.</b> 2x - 3 = 0 gives x = 3/2; x + 5 = 0 gives x = -5.',
          '<b>Table.</b> Substitute: 2(1.5)&sup2; + 7(1.5) - 15 = 4.5 + 10.5 - 15 = 0, and 2(25) - 35 - 15 = 0. Both work.',
          '<b>Graph.</b> On the graphing calculator, y = 2x&sup2; + 7x - 15 crosses the x-axis at -5 and 1.5, with the vertex between them. Three representations, one answer.'
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>An exponential, our problem.</b> A town of 8,000 people grows by 3 percent a year. Write a function and estimate the population after 5 years.',
          '<b>Equation.</b> Growing by 3 percent means multiplying by 1.03 each year, so f(x) = 8000(1.03)<sup>x</sup>, in the a times b to the x form A.9C describes.',
          '<b>Calculate.</b> 1.03<sup>5</sup> is about 1.1593, so f(5) is about 9,274 people.',
          '<b>Check the size.</b> Simple growth of 3 percent of 8,000 for 5 years would add 1,200, giving 9,200. Compound growth should be a little more, and 9,274 is.'
        ] },
        { kind: 'p', mt: true, html: 'STAAR rewards this habit because it asks the same idea in several dresses: a table in one question, a graph in the next, a word problem after that. A student who can move between the three never meets a question that looks new.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice set',
      h2: 'Ten Algebra I practice questions, one per readiness skill',
      lede: 'Our own questions, each tied to a readiness standard. Try them without the calculator first, then check with it.',
      body: [
        { kind: 'table', caption: 'Original practice (ours, not TEA items), with answers', head: ['TEKS', 'Question', 'Answer'], rows: [
          ['A.2C', 'Write the equation of the line through (0, 4) and (2, 10).', 'y = 3x + 4'],
          ['A.3B', 'A table shows (1, 5), (3, 11), (5, 17). What is the rate of change?', '3'],
          ['A.3C', 'What are the x-intercept and y-intercept of 2x + 5y = 20?', '(10, 0) and (0, 4)'],
          ['A.3D', 'Is (1, 1) in the solution set of y &lt; 2x - 3?', 'No: 1 is not less than -1'],
          ['A.5A', 'Solve 4(x - 2) = 2x + 6.', 'x = 7'],
          ['A.5C', 'Solve x + y = 10 and x - y = 4.', 'x = 7, y = 3'],
          ['A.7A', 'Where is the vertex of y = (x - 3)&sup2; - 4, and what are its zeros?', 'Vertex (3, -4); zeros 1 and 5'],
          ['A.8A', 'Solve x&sup2; - 9x + 20 = 0.', 'x = 4 or x = 5'],
          ['A.10E', 'Factor x&sup2; + 10x + 25.', '(x + 5)&sup2;'],
          ['A.11B', 'Simplify (x<sup>3</sup>)<sup>2</sup> / x<sup>4</sup>.', 'x&sup2;']
        ] },
        { kind: 'p', mt: true, html: 'TEA releases its own Algebra I tests with answer keys and rationales on the <a class="ag-inline-link" href="' + TEA + '/staar-released-test-questions" rel="noopener" target="_blank">STAAR Released Test Questions</a> page, and the <a class="ag-inline-link" href="https://txpt.cambiumtds.com/student/" rel="noopener" target="_blank">Practice Test Site</a> runs them in the real interface, calculator included. We use those for full rehearsals in the last three weeks.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'A plan',
      h2: 'How to prepare for the Algebra 1 EOC, step by step',
      lede: 'Our plan for a student starting about ten weeks before the April 19, 2027 window. Compress it for June.',
      body: [
        { kind: 'ol', items: [
          '<b>Weeks 1 and 2: one full released test, scored by category.</b> The five category scores decide the order of everything after.',
          '<b>Weeks 3 to 5: linear functions until they are automatic.</b> Slope from any representation, writing equations, inequalities on a graph, systems by elimination. This is roughly half the exam.',
          '<b>Weeks 6 and 7: quadratics.</b> Factoring, the quadratic formula, vertex and zeros, and how a, c and d move the parent graph (A.7C).',
          '<b>Week 8: exponentials.</b> Growth and decay written as a times b to the x, with the y-intercept and the asymptote read off the graph.',
          '<b>Weeks 9 and 10: rehearsal.</b> Two full tests on the Practice Test Site with the student&rsquo;s own calculator, then review of every two-point question missed.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If spring did not go to plan',
          left: [
            'The June window opens on June 14, 2027, about three weeks after spring results. Use the category breakdown from the score report and spend those weeks only on the two weakest categories.'
          ],
          rightH3: 'If the student is in grade 8',
          right: [
            'TEA&rsquo;s flowchart &ldquo;What STAAR Test Does a Student Take?&rdquo; says a grade 3 to 8 student in a high school course with an EOC takes that EOC instead of the grade-level test. Its footnote adds that accelerated students who passed an EOC in middle school &ldquo;are required to take the ACT or the SAT in high school to fulfill federal testing requirements.&rdquo;'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'STAAR now, SST next',
    h2: 'Algebra I on STAAR and on the Student Success Tool',
    lede: 'Two blueprints side by side: the current STAAR one and TEA&rsquo;s draft for the SST summative test from spring 2028.',
    table: { caption: 'STAAR Algebra I and draft SST Algebra I compared (TEA blueprints, read 31 October 2026)', head: ['Feature', 'STAAR Algebra I (now)', 'SST Algebra I (from spring 2028)'], rows: [
      ['Questions', '50', '39 to 41'],
      ['Points', '59', '48'],
      ['Reported groups', 'Five reporting categories', 'Five strands, no strand subscores'],
      ['Question types', 'Multiple choice plus non-multiple-choice types', 'Inline choice, multiple choice, multiselect'],
      ['December and June retakes', 'Yes', 'Yes, per the HB 8 FAQ']
    ] },
    left: { h3: 'For parents', ps: [
      'The algebra is the same: the five strands keep the names of today&rsquo;s categories. What changes is the length and the mix of question types.',
      'A student finishing Algebra I in 2026 to 2027 takes STAAR. One finishing in 2027 to 2028 takes SST.'
    ] },
    right: { h3: 'For students', ps: [
      'Linear functions are about half of either test. Get those right and the rest is far easier.',
      'Practise with the calculator you will use, and practise without the solver apps it will not have.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses from pre-algebra to calculus',
    lede: 'Live algebra and high school math for Texas students, before and after the EOC.',
    bands: [
      { num: 'I', h3: 'Before Algebra I', sub: 'Grades 6 to 8', courses: [
        { code: 'SAE / P / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Integers, ratios, equations.' },
        { code: 'SAE / P / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Functions you can run.' },
        { code: 'SAE / P / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'Problem solving for keen students.' }
      ] },
      { num: 'II', h3: 'Algebra I year', sub: 'Grade 8 or 9', courses: [
        { code: 'SAE / A / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The whole Algebra I course.' },
        { code: 'SAE / A / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and regression, in depth.' },
        { code: 'SAE / A / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Faster arithmetic for younger students.' }
      ] },
      { num: 'III', h3: 'After the EOC', sub: 'Grades 9 to 12', courses: [
        { code: 'SAE / H / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry, Algebra II, precalculus.' },
        { code: 'SAE / H / 02', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'A graduation substitute too.' },
        { code: 'SAE / H / 03', slug: 'act-math-prep-course', title: 'ACT Math', blurb: 'The ACT mathematics section.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Algebra lessons on Texas time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Evenings CT', l: 'After-school lessons during the week.' },
      { time: 'Weekends', l: 'Full rehearsal tests before a window.' },
      { time: '1-on-1', l: 'Built around the weakest category.' }
    ],
    cells: [
      { h3: 'Three representations', p: 'Equation, table and graph every lesson.' },
      { h3: 'Calculator as a check', p: 'Algebra first, graph second.' },
      { h3: 'Two-point questions', p: 'Typed and plotted answers practised.' },
      { h3: 'Retake plans', p: 'December and June windows covered.' },
      { h3: 'School-aligned', p: 'We follow the class&rsquo;s unit order.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Things our students have built',
  projectsLede: 'Algebra turns up in every app below. See more on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Algebra I EOC classes are monthly, in US dollars, with nothing to sign for the year: a student can join for one window and leave once the score is in.',
    free: ['A free first class', 'Bring the last score report', 'No card details'],
    group: ['Fifteen to twenty students', 'A regular algebra teacher', 'Choose your batch', 'Monthly'],
    one: ['One teacher, one student', 'Paced to the next window', 'Flexible times']
  },

  faq: {
    eyebrow: 'Algebra I EOC questions',
    h2: 'STAAR Algebra 1 EOC: what students and parents ask',
    items: [
      { q: 'How many questions are on the STAAR Algebra 1 EOC?', a: 'TEA\'s blueprint gives 50 questions worth 59 points: 41 one-point questions and 9 two-point questions that are not multiple choice. They come from five reporting categories.' },
      { q: 'What score do you need to pass the Algebra 1 EOC in Texas?', a: 'A scale score of 3550 reaches Approaches Grade Level, which counts as passing. Meets Grade Level starts at 4000 and Masters Grade Level at 4345, per TEA\'s EOC performance standards.' },
      { q: 'Is the Algebra 1 EOC required to graduate in Texas?', a: 'Yes. TEA lists Algebra I among the five end-of-course assessments students must pass for graduation testing, though approved substitutes such as TSIA2, SAT or ACT can satisfy it in some cases.' },
      { q: 'When is the Algebra 1 EOC in 2026 to 2027?', a: 'TEA\'s calendar has three windows: November 30 to December 11, 2026; April 19 to April 30, 2027; and June 14 to June 25, 2027. Your school picks the days within each window.' },
      { q: 'Can you use a calculator on the Algebra 1 STAAR?', a: 'Yes, a graphing calculator is required for the whole test. Polynomial root finders, simultaneous equation solvers and computer algebra features must be disabled.' },
      { q: 'What topics are on the Algebra 1 EOC?', a: 'Five categories: number and algebraic methods, describing and graphing linear functions, writing and solving linear functions, quadratic functions, and exponential functions. The two linear categories together make up roughly half the questions.' },
      { q: 'What happens if my child fails the Algebra 1 EOC?', a: 'They can retake it in a later window, and TEA keeps December and June windows under the new system too. The passing bar stays the one in force at the first attempt, and the counselor can explain substitutes or an individual graduation committee.' },
      { q: 'Is the Algebra 1 EOC changing?', a: 'From the 2027 to 2028 school year the Student Success Tool replaces STAAR. TEA\'s draft SST Algebra I summative blueprint has 39 to 41 questions worth 48 points, using inline choice, multiple choice and multiselect.' },
      { q: 'When are your Algebra I classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We schedule on Central Time.' },
      { q: 'Are you affiliated with TEA?', a: 'No. We are an independent online school. We teach the Algebra I TEKS, quote TEA\'s published documents and send students to TEA\'s own released tests for rehearsal.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More algebra and Texas pages.',
    items: [
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'Slope and functions, the ground Algebra I stands on.' },
      { href: '/act-math-tutoring-online', label: 'ACT math tutoring', p: 'One of the substitute routes TEA names.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'Why each algebra rule is allowed.' },
      { href: '/online-math-tutor-9th-grade', label: 'Ninth grade math tutoring', p: 'The usual Algebra I year.' },
      { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring', p: 'The course that usually comes next.' },
      { href: '/coding-classes-in-texas', label: 'Coding classes in Texas', p: 'Our Texas page.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the window the student is aiming for and, if there is one, the category breakdown from the last attempt. We will start on the category that cost the most points.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how our teachers work</a>, or look through all our <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'Lessons are taught live from India, booked on Central Time around a Texas school day. Message us on WhatsApp for the quickest reply.',
    formNote: 'There is no charge for the first class and no card is taken.'
  },

  footer: {
    cols: [
      { h4: 'Algebra help', links: [
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' },
        { href: '/online-math-tutor-9th-grade', label: 'Grade 9 math' },
        { href: '/online-math-tutor-8th-grade', label: 'Grade 8 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'Texas and the US', links: [
        { href: '/coding-classes-in-texas', label: 'Texas' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '50 questions, 59 points'
  },

  personalityCss: `
.ag-root.ag-sae .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-sae .ag-capsule { border-left-width: 3px; border-radius: 6px; }
.ag-root.ag-sae .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-sae .ag-table td.ag-num { font-variant-numeric: tabular-nums; }
.ag-root.ag-sae .ag-section-head h2 { max-width: 28ch; }
`,

  dossier: {
    curriculumAuthority: 'Texas Education Agency, read raw 31 October 2026: Fall 2022 STAAR Algebra I Blueprint (50 questions, 59 points, five categories, 16 readiness standards); Algebra I assessed curriculum (readiness TEKS, A.8A text); draft SST Algebra I summative blueprint (39 to 41 questions, 48 points, from spring 2028); graduation requirements page (five EOCs); updated HB 8 FAQ (questions 14, 16, 17, 18); What Families Should Know about STAAR (substitute assessments); 2026 to 2027 testing calendar (three Algebra I windows and result dates); EOC performance standards (3550, 4000, 4345 and the first-attempt rule); STAAR Calculator Policy.',
    localProject: 'Our worked examples: 2x^2 + 7x - 15 = (2x - 3)(x + 5) with zeros 3/2 and -5, checked by substitution and graph; f(x) = 8000(1.03)^x with f(5) about 9,274, checked against simple growth of 9,200. Our ten-item practice set keyed to readiness TEKS, our ten-week plan and the STAAR to SST comparison. Lesson family: one function, three representations.',
    requiredMentions: ['50 questions worth 59 points', 'Students must pass five end-of-course assessments to meet the testing requirements for graduation.', 'The standard in place when a student first takes an EOC assessment is the standard that will be maintained throughout the student&rsquo;s school career.', 'November 30 to December 11, 2026', 'June 14 to June 25, 2027', 'Polynomial root finders and simultaneous equation solvers', 'are required to take the ACT or the SAT in high school to fulfill federal testing requirements.', '39 to 41 questions worth 48 points', '(2x - 3)(x + 5)', '8000(1.03)', 'Five strands, no strand subscores', 'by factoring, taking square roots, completing the square, and applying the quadratic formula'],
    sources: [
      { claim: 'STAAR Algebra I Blueprint, effective 2022 to 2023.', url: TEA + '/2022-staar-algebra-i-blueprint-0.pdf' },
      { claim: 'Algebra I assessed curriculum (readiness and supporting TEKS).', url: TEA + '/2014-algebra-i-assessed-curriculum.pdf' },
      { claim: 'Draft SST Algebra I summative blueprint, from spring 2028.', url: TEA + '/sst-algebra-i-summative-blueprint.pdf' },
      { claim: 'High school graduation requirements: five EOCs.', url: 'https://tea.texas.gov/student-readiness-and-high-school/high-school-graduation-requirements' },
      { claim: 'Updated HB 8 FAQ, 20 August 2026.', url: TEA + '/hb-8-faq-update.pdf' },
      { claim: 'STAAR EOC performance standards.', url: TEA + '/2023-staar-eoc-performance-standards-2.pdf' },
      { claim: '2026 to 2027 Student Assessment Testing Calendar.', url: 'https://tea.texas.gov/assessment-and-accountability/student-assessment-testing-calendar-2026-2027-saft-update.pdf' },
      { claim: 'STAAR Calculator Policy.', url: TEA + '/staar-calculator-policy.pdf' },
      { claim: 'What STAAR Test Does a Student Take? (testing requirements flowchart, August 2025).', url: TEA + '/staar-testing-requirements.pdf' }
    ],
    rejectedClaims: [
      'Algebra I EOC pass rates by year: not printed; not needed and easy to misread.',
      'Exact substitute-assessment scores (SAT, ACT, TSIA2 cut points): not stated; the TEA page holding them was not fetched in this session, so the page sends families to the counselor.',
      'Individual graduation committee eligibility details: named only; criteria not quoted.',
      'Reproducing released STAAR Algebra I items: refused; linked instead.',
      'Score, pass or graduation promises for our classes: refused.',
      'Any affiliation with TEA or the STAAR contractor: none.'
    ]
  }
};
