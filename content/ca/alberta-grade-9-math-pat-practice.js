'use strict';
// Alberta Grade 9 math PAT practice (ag- assessment door; Canada cluster Plan 2, row 33).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/alberta-grade-9-math-pat-practice/).
// Alberta's PDFs print times as "9 AM–9:30 AM" with en dashes; the page writes "to".
//  - 2026-2027 Mathematics 9 Subject Bulletin (alberta.ca/system/files/edc-math-9-subject-bulletin-2026-27.pdf): Part A "contains 20
//    questions and assesses students' foundational skills and fluency in mental math, estimation, algebra, square roots, exponent laws,
//    and arithmetic operations on rational numbers without the use of calculators", designed for 30 minutes, up to 60; Part B "contains
//    40 questions" and "assesses students' ability to recall concepts and principles and to apply reasoning skills to solve problems",
//    80 minutes, up to 160; blueprint Part A 20 numerical response 20%, Part B 32 multiple choice and 8 numerical response 80%; strands
//    Number 70-80% / 25-35%, Patterns and Relations 20-30% / 35-45%, Shape and Space 20-30% (Part B), Statistics and Probability 5-10%
//    (Part B); complexity Part A low 80-90%, moderate 10-20%; Part B low 30-40%, moderate 45-55%, high 10-20%; "Part A: Manipulatives may
//    be used, but use of a calculator is not permitted." "Part B: Students may use calculators and manipulatives."; graphing calculator
//    not permitted; "Use of a protractor is not permitted."; pi button "or the approximate value 3.14"; 10 x 10 multiplication table
//    in Part A as a regular accommodation; "Raw scores achieved by students on Part A and Part B are to be reported separately to parents
//    and are not to be combined into a total test score."; pilot rule: "For the 2026/27 school year, classes in schools choosing to pilot
//    the new curriculum for Mathematics 9 will not be required to write the Grade 9 Mathematics Provincial Achievement Test." and the
//    others "will be required to write the provincial achievement test in June 2027"; "Note that many of the questions on the mathematics
//    test are placed in real-life contexts."; standards statements quoted ("solve routine problems", "solve novel problems"); low,
//    moderate and high complexity examples quoted ("Solve a one-step word problem.", "Solve a word problem requiring multiple steps.",
//    "Solve a problem in more than one way."); "It is important to remember that one test cannot measure all the components".
//  - General Information Bulletin 2026-2027, PAT schedules (ecc-pat-administration-schedules.pdf, pages 13 and 14): Grade 9 Mathematics
//    Part(ie) A Friday 22 January 2027, 9 AM to 9:30 AM; Part(ie) B Monday 25 January 2027, 9 AM to 10:20 AM; Part(ie) A Tuesday 15 June
//    2027, 9 AM to 9:30 AM; Part(ie) B Thursday 17 June 2027, 9 AM to 10:20 AM ("up to double the official scheduled time"; rows
//    confirmed with PyMuPDF word positions and a weekday check). Significant dates (Appendix 1): "Late September 2027" detailed reports
//    and Individual Student Profiles; "September 2026: Notify parents/guardians that their child/children will be writing PATs".
//  - alberta.ca/provincial-achievement-tests: "administered annually to all Alberta students in grades 6 and 9"; "PATs are written in
//    grade 9 and Knowledge and Employability (K&E) programs of study in January, and June"; purposes; digital environment; "PATs don't
//    replace daily teacher assessments but provide insights to complement ongoing classroom observations and evaluations."
//  - 2026-2027 Grade 9 Parent Guide: "Alberta Education and Childcare discourages test rehearsal and coaching."; "Provincial achievement
//    tests are like any other test students would normally write."; strands "Numbers, Patterns and Relations, Shape and Space, and
//    Statistics and Probability"; preliminary results reported "to parents in June"; ISP "In late September"; "Alberta Education and
//    Childcare does not support comparisons of schools or school authorities based on provincial achievement test scores."
//  - alberta.ca/diploma-exams-overview: the January 2026 diploma exams and "Grade 9 Provincial Achievement Tests (PATs)" were cancelled.
//  - alberta.ca/curriculum-mathematics: draft 7 to 9 curriculum "released in June 2025 for field testing"; optional piloting in 2026/27.
// Our own material, labelled "not Alberta Education questions": two worked problems ((-3/4) + (5/6)(-2/5) = -13/12; candle h = 24 - 1.5t,
// h < 9 when t > 10), the ten Part A and eight Part B questions and answers (4; 0; 64; 0.7; 7 and 8; 1/6; 0.6; -2; about 100 vs 102.9;
// x = 6 / 4n + 1 and 81; x = -5; x >= -5; 2x^2 - 6x + 6; 6x^2 - 8x; 3x - 2; 12 m; 6 m; 0.25), all checked in Python with exact fractions,
// the six-week review plan and the ladder. No released PAT item is reproduced or adapted.
// Lesson family: fluency without a calculator (number sense first).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SRC_B9 = '<a class="ag-inline-link" href="https://www.alberta.ca/system/files/edc-math-9-subject-bulletin-2026-27.pdf" rel="noopener" target="_blank">2026-2027 Mathematics 9 Subject Bulletin</a>';
const SRC_PAT = '<a class="ag-inline-link" href="https://www.alberta.ca/provincial-achievement-tests" rel="noopener" target="_blank">Provincial Achievement Tests</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'GRADE 9 PAT', blurb: 'The Alberta Grade 9 math PAT for 2026 to 2027: Part A and Part B, the January and June 2027 dates, the pilot exemption, and eighteen original practice questions.' },
  slug: 'alberta-grade-9-math-pat-practice',
  code: 'alg',
  accent: '#9E4249',
  accentRationale: 'Alberta Grade 9 math PAT: a muted brick rose, #9E4249, allocated for this row in alloc.tsv; 7.0 RGB units from the nearest site accent (#9E4242) and 26.9 from the nearest Canada page accent (#853848); contrast 5.95 on the paper #FBF8F2 and 5.12 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Alberta Grade 9 math PAT practice',
  title: 'Alberta Grade 9 Math PAT: Part A, Part B and Practice',
  description: 'The Alberta Grade 9 math PAT for 2026 to 2027: Part A without a calculator, Part B, the January and June 2027 dates, and eighteen practice questions with answers.',
  ogDescription: 'What the Grade 9 math PAT tests, part by part, from Alberta Education\'s 2026-2027 bulletin, the 2027 dates, who is exempt this year, and original practice in the style of each part.',
  twitterDescription: 'Alberta Grade 9 math PAT: Part A, Part B, 2027 dates and practice.',
  pageName: 'Alberta Grade 9 Math PAT Practice',
  webPageDescription: 'A guide for Alberta Grade 9 students and parents to the Mathematics Provincial Achievement Test in 2026 to 2027, built from Alberta Education and Childcare\'s subject bulletin, schedule and parent guide, with two worked problems and eighteen original practice questions.',
  courseDescription: 'Live online Grade 9 math classes for Alberta students, taught alongside the school course in a batch or one to one.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Alberta', href: '/coding-classes-in-alberta' }],
  crumbLabel: 'Grade 9 math PAT',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#test', label: 'The test' },
    { href: '#dates', label: '2027 dates' },
    { href: '#worked', label: 'Worked problems' },
    { href: '#parta', label: 'Part A practice' },
    { href: '#partb', label: 'Part B practice' }
  ],
  eyebrow: 'Alberta &middot; Grade 9 &middot; Provincial Achievement Test, mathematics',
  h1: 'Alberta Grade 9 math PAT: what it tests, and practice',
  lede: 'Every Grade 9 student in Alberta meets the Mathematics Provincial Achievement Test, usually in June, sometimes in January. It comes in two parts: a short, no-calculator Part A that checks number fluency, and a longer Part B of problems in real-life settings. Alberta Education says plainly that it &ldquo;discourages test rehearsal and coaching&rdquo;, and we agree with the spirit of that: the way to do well is to know Grade 9 math. So this page explains the test from Alberta&rsquo;s own bulletin, then gives practice that builds the math itself, written by us.',
  secondaryCta: { href: '#parta', label: 'Start the Part A practice' },
  wa: 'Hello Modern Age Coders, my child is in Grade 9 in Alberta and would like help with math before the PAT. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Grade 9 math, taught for understanding',
  spec: [
    ['For', 'Alberta Grade 9 students'],
    ['Test', 'Mathematics PAT, Part A and Part B'],
    ['Part A', '20 questions, no calculator'],
    ['Part B', '40 questions, calculator allowed'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Clock', 'Alberta time, UTC-6 all year'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Alberta Grade 9 math PAT has two parts: Part A, 20 questions on mental math, estimation, square roots, exponent laws and rational numbers with no calculator (30 minutes), and Part B, 40 questions across all four strands with a calculator (80 minutes). In 2027 it runs in January and June. Modern Age Coders teaches Grade 9 math live online, one to one or in a batch, through our Algebra Foundations course.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for a Grade 9 student',
    lede: 'The first rebuilds the algebra and number work Grade 9 rests on. The second covers the wider middle school program. The third is for students who want harder problems.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'ALG / 01', title: 'Algebra Foundations', note: 'Grades 7 to 9. Rational numbers, exponent laws, linear equations and polynomials, built step by step.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'ALG / 02', title: 'Middle school mathematics', note: 'Number, geometry, data and probability, the full spread of the junior high strands.' },
      { course: 'waterloo-math-contests-gauss-to-euclid-course', code: 'ALG / 03', title: 'Waterloo math contests', note: 'Grades 7 to 12. For Grade 9 students who find school math easy and want the Pascal contest.' }
    ]
  },

  sections: [
    {
      id: 'test', tint: 'tint', eyebrow: 'The test, part by part',
      h2: 'What the Grade 9 math PAT contains in 2026 to 2027',
      lede: 'Alberta&rsquo;s subject bulletin for 2026 to 2027 describes the test in detail. The two parts are written on separate days and they are deliberately different: one checks fluency, the other checks reasoning.',
      body: [
        { kind: 'table', caption: 'Grade 9 Mathematics PAT, 2026 to 2027, from Alberta&rsquo;s Mathematics 9 Subject Bulletin (read 22 October 2026)', head: ['', 'Part A', 'Part B'], rows: [
          ['Questions', '20, numerical response, one mark each', '40: 32 multiple choice and 8 numerical response'],
          ['Share of the test', '20%', '80%'],
          ['What it checks', '&ldquo;foundational skills and fluency in mental math, estimation, algebra, square roots, exponent laws, and arithmetic operations on rational numbers&rdquo;', '&ldquo;ability to recall concepts and principles and to apply reasoning skills to solve problems&rdquo;'],
          ['Calculator', 'Not permitted', 'Permitted, but not a graphing calculator'],
          ['Time', 'Designed for 30 minutes, up to 60', 'Designed for 80 minutes, up to 160'],
          ['Number strand', '70% to 80% of questions', '25% to 35%'],
          ['Patterns and Relations', '20% to 30%', '35% to 45%'],
          ['Shape and Space', 'None', '20% to 30%'],
          ['Statistics and Probability', 'None', '5% to 10%'],
          ['Complexity', 'Low 80% to 90%, moderate 10% to 20%', 'Low 30% to 40%, moderate 45% to 55%, high 10% to 20%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Part A is about fluency',
          left: [
            'Part A is short and has no calculator, and most of its questions are low complexity: Alberta describes low-complexity items as asking students to &ldquo;rely heavily on recalling and recognizing previously learned concepts and principles.&rdquo; Speed and accuracy with numbers decide it.',
            'Manipulatives such as a ruler or graph paper are allowed, and a 10 by 10 multiplication table may be used as a regular accommodation for students who use one in class, with its use recorded on the platform. It is not meant for everyone, and the bulletin says so.'
          ],
          rightH3: 'Part B is about reasoning',
          right: [
            'Part B allows a scientific calculator, but its blueprint puts low-complexity questions at only 30% to 40%; the rest are moderate or high. The bulletin&rsquo;s examples of moderate items include &ldquo;Solve a word problem requiring multiple steps.&rdquo;; high-complexity items may ask a student to &ldquo;Solve a problem in more than one way.&rdquo;',
            'It also warns that &ldquo;many of the questions on the mathematics test are placed in real-life contexts.&rdquo; So reading matters as much as arithmetic: a student has to turn a paragraph into a calculation. A protractor is not permitted, and for &pi; students may use the calculator button or 3.14.'
          ] },
        { kind: 'table', mt: true, caption: 'What Alberta expects at each standard in Grade 9 math, quoted from the subject bulletin (selected statements)', head: ['Acceptable standard: students are typically able to', 'Standard of excellence: students are typically able to'], rows: [
          ['&ldquo;use familiar problem-solving strategies to solve routine problems&rdquo;', '&ldquo;use a variety of problem-solving strategies to solve novel problems&rdquo;'],
          ['&ldquo;recognize and describe numerical and non-numerical patterns&rdquo;', '&ldquo;demonstrate fluency in working with patterns represented concretely, pictorially, or symbolically&rdquo;'],
          ['&ldquo;use semantic knowledge to construct correct mental representations of word problems&rdquo;', '&ldquo;use semantic knowledge to construct and reframe correct mental representations of word problems&rdquo;'],
          ['&ldquo;test generalizations from patterns to reach conclusions&rdquo;', '&ldquo;make generalizations from patterns to reach conclusions&rdquo;']
        ] },
        { kind: 'source', html: 'Source: Alberta Education and Childcare, ' + SRC_B9 + ', read 22 October 2026. The bulletin also reminds teachers that &ldquo;one test cannot measure all the components within the learning outcomes in the mathematics curriculum.&rdquo; Modern Age Coders has no connection with Alberta Education and Childcare.' }
      ]
    },
    {
      id: 'dates', tint: 'deep', eyebrow: 'When, and who writes it',
      h2: 'Grade 9 math PAT dates for 2027, and this year&rsquo;s exemption',
      lede: 'Alberta says PATs &ldquo;are administered annually to all Alberta students in grades 6 and 9&rdquo;, and that Grade 9 tests are written in January and in June. The 2026 to 2027 General Information Bulletin sets the mathematics sittings below.',
      body: [
        { kind: 'table', caption: 'Grade 9 Mathematics PAT schedule, 2026 to 2027, from Alberta&rsquo;s General Information Bulletin (read 22 October 2026)', head: ['Sitting', 'Part A', 'Part B'], rows: [
          ['January 2027', 'Friday 22 January 2027, 9 AM to 9:30 AM', 'Monday 25 January 2027, 9 AM to 10:20 AM'],
          ['June 2027', 'Tuesday 15 June 2027, 9 AM to 9:30 AM', 'Thursday 17 June 2027, 9 AM to 10:20 AM']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The pilot exemption for 2026 to 2027',
          left: [
            'Alberta is renewing its Grade 7 to 9 math curriculum, and schools may pilot the draft this year. The subject bulletin is direct about what that means for the PAT: &ldquo;For the 2026/27 school year, classes in schools choosing to pilot the new curriculum for Mathematics 9 will not be required to write the Grade 9 Mathematics Provincial Achievement Test.&rdquo;',
            'Classes that are not piloting &ldquo;will be required to write the provincial achievement test in June 2027.&rdquo; So the first question for a Grade 9 family this year is a simple one for the school: is my child&rsquo;s math class piloting the new curriculum?'
          ],
          rightH3: 'What happened in January 2026',
          right: [
            'Alberta&rsquo;s diploma page records that the government &ldquo;cancelled the January 2026 diploma examinations and Grade 9 Provincial Achievement Tests (PATs).&rdquo; The 2026 to 2027 schedule above includes a January sitting again.',
            'The tests are now digital. Alberta&rsquo;s PAT page says students write provincial assessments &ldquo;in a digital environment rather than pencil and paper&rdquo;, and its practice tests, with text-to-speech and a zoom feature, sit on the same digital assessment platform.'
          ] },
        { kind: 'table', mt: true, caption: 'After the test: how results reach families (Alberta&rsquo;s subject bulletin, parent guide and significant dates, 2026 to 2027)', head: ['Step', 'What Alberta says'], rows: [
          ['Raw scores', 'Teachers report Part A and Part B scores separately; they &ldquo;are not to be combined into a total test score&rdquo;'],
          ['Preliminary results', 'Teachers are expected to report preliminary results to parents in June'],
          ['Individual Student Profile', 'Released in late September 2027, through the school and on myPass'],
          ['School comparisons', 'Alberta &ldquo;does not support comparisons of schools or school authorities based on provincial achievement test scores&rdquo;']
        ] },
        { kind: 'source', html: 'Sources: Alberta Education and Childcare, General Information Bulletin 2026-2027 for Provincial Achievement Testing (schedules, significant dates); ' + SRC_B9 + '; 2026-2027 Grade 9 Parent Guide; ' + SRC_PAT + ' and Diploma exams overview pages. Read 22 October 2026.' }
      ]
    },
    {
      id: 'coaching', tint: 'tint', eyebrow: 'Practice without rehearsal',
      h2: 'Alberta discourages coaching. Here is what we do instead',
      lede: 'The Grade 9 Parent Guide says: &ldquo;Alberta Education and Childcare discourages test rehearsal and coaching. Provincial achievement tests are like any other test students would normally write.&rdquo; A page offering PAT practice should take that seriously.',
      body: [
        { kind: 'two',
          leftH3: 'What we will not do',
          left: [
            'We do not drill secured test items, imitate released questions or teach tricks for multiple choice. None of the practice on this page is taken from an Alberta test; it is written by us to the same strands.',
            'We also do not promise a result. The PAT gives a picture of one day&rsquo;s work, and Alberta itself says PATs &ldquo;don&rsquo;t replace daily teacher assessments but provide insights to complement ongoing classroom observations and evaluations.&rdquo;'
          ],
          rightH3: 'What we do',
          right: [
            'We teach Grade 9 math: the number fluency Part A checks and the problem solving Part B rewards. A student who can multiply fractions in their head and turn a paragraph into an equation needs no rehearsal.',
            'For familiarity with the screen, Alberta publishes its own practice tests on the digital assessment platform, and we point families to them. Ten minutes on the official format before test week is sensible; weeks of it are not.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked problems, ours',
      h2: 'One Part A problem and one Part B problem, worked',
      lede: 'Both problems are our own, written for this page; they are not Alberta Education questions. The first is the kind of fluency Part A asks for, done without a calculator. The second is a multi-step problem in a real-life setting, like much of Part B.',
      body: [
        { kind: 'p', html: '<b>Problem 1, no calculator.</b> Evaluate (&minus;3/4) + (5/6) &times; (&minus;2/5).' },
        { kind: 'ol', items: [
          '<b>Order of operations first.</b> Multiplication comes before addition, so work out (5/6) &times; (&minus;2/5) before touching the &minus;3/4.',
          '<b>Simplify before multiplying.</b> The 5 on top cancels with the 5 underneath, and the 2 cancels into the 6, leaving (1/3) &times; (&minus;1) = &minus;1/3. Cancelling first keeps the numbers small, which matters when there is no calculator.',
          '<b>Find a common denominator.</b> &minus;3/4 + (&minus;1/3) needs twelfths: &minus;9/12 + (&minus;4/12).',
          '<b>Add, and check the sign.</b> &minus;9/12 &minus; 4/12 = &minus;13/12. Both parts were negative, so a negative answer is expected; a positive answer would signal a sign slip.',
          '<b>Estimate to confirm.</b> &minus;0.75 plus about &minus;0.33 is about &minus;1.08, and &minus;13/12 is about &minus;1.08. The answer stands.'
        ] },
        { kind: 'p', mt: true, html: '<b>Problem 2, calculator allowed.</b> A candle 24 cm tall burns down 1.5 cm every hour. Write an equation for its height h after t hours, then find when it will be shorter than 9 cm.' },
        { kind: 'ol', items: [
          '<b>Name the starting value and the rate.</b> It starts at 24 cm and loses 1.5 cm per hour, so h = 24 &minus; 1.5t. A table of the first few hours (24, 22.5, 21, 19.5) confirms the pattern.',
          '<b>Translate &ldquo;shorter than 9 cm&rdquo; into symbols.</b> 24 &minus; 1.5t &lt; 9. Reading the question as an inequality, not an equation, is the step students most often skip.',
          '<b>Solve.</b> Subtract 24: &minus;1.5t &lt; &minus;15. Divide by &minus;1.5 and reverse the inequality sign, because dividing by a negative flips it: t &gt; 10.',
          '<b>Check with a value.</b> After 11 hours, h = 24 &minus; 16.5 = 7.5 cm, which is shorter than 9. After exactly 10 hours it is exactly 9 cm, not shorter.',
          '<b>Answer in context.</b> The candle is shorter than 9 cm at any time after 10 hours of burning.'
        ] },
        { kind: 'p', mt: true, html: 'Notice the habits in both: simplify early, check the sign, estimate, and finish with a sentence that answers the question asked. Those habits are what Alberta&rsquo;s standard of excellence describes when it mentions students who &ldquo;check and verify solutions to novel problems&rdquo;.' }
      ]
    },
    {
      id: 'parta', tint: 'tint', eyebrow: 'Part A style practice, ours',
      h2: 'Ten no-calculator questions in the style of Part A',
      lede: 'Our own questions, not Alberta Education questions, on the skills the bulletin lists for Part A. Set a timer for 15 minutes, put the calculator away, and write each answer as a number.',
      body: [
        { kind: 'ol', items: [
          'Simplify 2<sup>3</sup> &times; 2<sup>4</sup> &divide; 2<sup>5</sup> and give the value.',
          'Evaluate (&minus;3)<sup>2</sup> &minus; 3<sup>2</sup>.',
          'Evaluate (2<sup>3</sup>)<sup>2</sup>.',
          'Evaluate &radic;0.49.',
          '&radic;50 lies between which two consecutive whole numbers?',
          'Evaluate &minus;2/3 + 5/6.',
          'Evaluate (&minus;1.2) &times; (&minus;0.5).',
          'Evaluate (&minus;3/4) &divide; (3/8).',
          'Estimate 4.9 &times; 21 to the nearest ten, without working it out exactly.',
          'Solve 3x &minus; 7 = 11.'
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>4.</b> Add exponents when multiplying and subtract when dividing: 3 + 4 &minus; 5 = 2, and 2<sup>2</sup> = 4.',
          '<b>0.</b> (&minus;3)<sup>2</sup> = 9 because the brackets square the negative; &minus;3<sup>2</sup> would be &minus;9, but here it is 3<sup>2</sup> = 9 subtracted, so 9 &minus; 9 = 0.',
          '<b>64.</b> A power of a power multiplies the exponents: 2<sup>6</sup> = 64.',
          '<b>0.7.</b> 0.7 &times; 0.7 = 0.49.',
          '<b>7 and 8.</b> 7<sup>2</sup> = 49 and 8<sup>2</sup> = 64, and 50 is just above 49.',
          '<b>1/6.</b> &minus;4/6 + 5/6 = 1/6.',
          '<b>0.6.</b> A negative times a negative is positive, and 1.2 &times; 0.5 = 0.6.',
          '<b>&minus;2.</b> Multiply by the reciprocal: (&minus;3/4) &times; (8/3) = &minus;2.',
          '<b>About 100.</b> 5 &times; 20 = 100. (The exact product is 102.9, so the estimate is close.)',
          '<b>x = 6.</b> Add 7 to both sides to get 3x = 18, then divide by 3.'
        ] }
      ]
    },
    {
      id: 'partb', tint: 'deep', eyebrow: 'Part B style practice, ours',
      h2: 'Eight Part B style questions, calculator allowed',
      lede: 'Also ours, and not Alberta Education questions. These mix patterns and relations, polynomials, measurement and probability, the strands Part B draws on. Allow about 25 minutes.',
      body: [
        { kind: 'ol', items: [
          'The pattern 5, 9, 13, 17, ... continues. Write an expression for the nth term and find the 20th term.',
          'Solve 2(x &minus; 3) = 5x + 9.',
          'Solve &minus;3x + 4 &le; 19 and describe the solution on a number line.',
          'Simplify (3x<sup>2</sup> &minus; 2x + 5) &minus; (x<sup>2</sup> + 4x &minus; 1).',
          'Expand 2x(3x &minus; 4).',
          'Simplify (12x<sup>2</sup> &minus; 8x) &divide; 4x.',
          'A person 1.8 m tall casts a shadow 2.4 m long. At the same moment a tree casts a shadow 16 m long. How tall is the tree?',
          'A fair die is rolled and a coin is flipped. What is the probability of an even number and heads?'
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>4n + 1; 81.</b> The pattern goes up by 4 each time, and the first term is 4(1) + 1 = 5. The 20th term is 4(20) + 1 = 81.',
          '<b>x = &minus;5.</b> Expand: 2x &minus; 6 = 5x + 9. Then &minus;3x = 15, so x = &minus;5. Check: 2(&minus;8) = &minus;16 and 5(&minus;5) + 9 = &minus;16.',
          '<b>x &ge; &minus;5.</b> &minus;3x &le; 15, then divide by &minus;3 and reverse the sign. On a number line: a closed dot at &minus;5 with the arrow to the right.',
          '<b>2x<sup>2</sup> &minus; 6x + 6.</b> Distribute the subtraction to every term in the second bracket, then collect like terms.',
          '<b>6x<sup>2</sup> &minus; 8x.</b> Multiply 2x by each term.',
          '<b>3x &minus; 2.</b> Divide each term by 4x: 12x<sup>2</sup>/4x = 3x and 8x/4x = 2.',
          '<b>12 m.</b> The triangles are similar, so height and shadow are in the same ratio: 1.8/2.4 = h/16, so h = 1.8 &times; 16 / 2.4 = 12.',
          '<b>1/4, or 0.25.</b> The events are independent: P(even) = 1/2 and P(heads) = 1/2, so multiply them.'
        ] },
        { kind: 'p', mt: true, html: 'If questions 4 to 6 felt slow, polynomials are worth a focused week. If question 7 stalled, the problem was probably the reading, not the ratio: practise drawing a quick sketch before any calculation.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Six weeks of review, ours',
      h2: 'A six-week Grade 9 math review before June 2027',
      lede: 'Our plan for the weeks before the June sitting (Part A on Tuesday 15 June 2027). It is review of Grade 9 math, not test rehearsal, and about two short sessions a week on top of school is enough.',
      body: [
        { kind: 'table', caption: 'Six-week review before the June 2027 Grade 9 math PAT (ours)', head: ['Week starting', 'Focus', 'A good sign'], rows: [
          ['Monday 3 May 2027', 'Rational numbers: fractions and decimals with signs, no calculator', 'Ten mixed operations correct in ten minutes'],
          ['Monday 10 May 2027', 'Exponent laws, square roots and estimation', 'Can explain why (&minus;3)<sup>2</sup> and &minus;3<sup>2</sup> differ'],
          ['Monday 17 May 2027', 'Linear relations, patterns and graphs', 'Writes an equation from a table without guessing'],
          ['Monday 24 May 2027', 'Linear equations and inequalities, polynomials', 'Remembers to flip the sign when dividing by a negative'],
          ['Monday 31 May 2027', 'Measurement, similar shapes and probability in word problems', 'Sketches a diagram before calculating'],
          ['Monday 7 June 2027', 'Light mixed review; one look at Alberta&rsquo;s practice test on the platform', 'Calm, rested, and nothing new learned']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Habits that carry into Grade 10',
          left: [
            'Whatever the PAT shows, the number fluency in Part A is what Math 10C assumes from day one. A student who leaves Grade 9 comfortable with fractions, signs and exponent laws starts high school with a real advantage.',
            'That is why we teach Part A skills without a calculator even in classes that are not about the PAT. The calculator is for checking, not for thinking.'
          ],
          rightH3: 'For students in a pilot class',
          right: [
            'If your class is piloting Alberta&rsquo;s draft Grade 7 to 9 curriculum, you will not write this PAT in 2026 to 2027, and your course may include topics the current program does not, such as functions and simple quadratic equations named in Alberta&rsquo;s draft snapshot for Grade 9.',
            'The review above still helps: number fluency and linear relations sit underneath both versions. We plan from the class&rsquo;s own unit list either way.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is now',
    h2: 'Four stages of Grade 9 number sense',
    lede: 'Our own stages, from teaching Grade 9 students across Canada.',
    table: { caption: 'Grade 9 number sense (ours)', head: ['Stage', 'Typical signs'], rows: [
      ['1. Calculator-led', 'Reaches for the calculator for 6 &times; 7 or half of a fraction'],
      ['2. Accurate but slow', 'Gets fraction and integer questions right, given time'],
      ['3. Fluent', 'Simplifies before multiplying, estimates first, and spots a sign slip'],
      ['4. Flexible', 'Solves a word problem two ways and explains which is quicker']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to work out a fraction question aloud at the dinner table. Hesitation over signs or common denominators is the best clue to what to practise.',
      'Keep the PAT in proportion. Alberta treats it as one picture among many, and so should a Grade 9 student.'
    ] },
    right: { h3: 'For students', ps: [
      'Estimate before you calculate. If your answer is far from the estimate, one of them is wrong.',
      'On word problems, underline what the question actually asks for before you start. Then answer that, in a sentence.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for junior high students',
    lede: 'All live online with one regular teacher, in a group or individually.',
    bands: [
      { num: 'I', h3: 'Math that builds on Grade 9', sub: 'Grades 8 to 10', courses: [
        { code: 'ALG / M / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Grade 9 algebra tested in Python.' },
        { code: 'ALG / M / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'A head start on Math 10C.' },
        { code: 'ALG / M / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'For younger siblings building number sense.' }
      ] },
      { num: 'II', h3: 'Contests and puzzles', sub: 'Grades 7 to 10', courses: [
        { code: 'ALG / C / 01', slug: 'middle-school-math-competitions-course', title: 'Middle school math competitions', blurb: 'Contest problems a step beyond class.' },
        { code: 'ALG / C / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'For students who love a hard problem.' },
        { code: 'ALG / C / 03', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC preparation', blurb: 'Waterloo&rsquo;s programming contest.' }
      ] },
      { num: 'III', h3: 'Coding for teens', sub: 'Ages 13 to 18', courses: [
        { code: 'ALG / K / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A first real programming language.' },
        { code: 'ALG / K / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive pages and games.' },
        { code: 'ALG / K / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Patterns and data, put to work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live Grade 9 math classes',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in Alberta, with the time set by the batch.' },
      { time: 'Weekends', l: 'Weekend mornings on Alberta time.' },
      { time: '1-on-1', l: 'Booked around unit tests and the June sitting.' }
    ],
    cells: [
      { h3: 'No calculator first', p: 'Number sense before buttons.' },
      { h3: 'School units', p: 'Taught in the class&rsquo;s own order.' },
      { h3: 'Word problems', p: 'Read, sketch, then calculate.' },
      { h3: 'Original practice', p: 'Never copied from a test.' },
      { h3: 'Short sessions', p: 'Steady weekly work, no cramming.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty, or one child.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Older students turn the same number sense into programs and data projects. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from parents and students, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'The first class is on us. After that, a monthly fee buys eight live classes, shown below in your currency, and you can end it at any month&rsquo;s close without a penalty.',
    free: ['A free first class', 'Bring this week&rsquo;s homework', 'No card to book'],
    group: ['Fifteen to twenty children', 'The same teacher', 'Choose a batch time', 'Monthly payment'],
    one: ['One child, one teacher', 'Hours that fit Grade 9', 'Built from their own gaps']
  },

  faq: {
    eyebrow: 'Questions from Alberta parents',
    h2: 'Grade 9 math PAT: common questions',
    items: [
      { q: 'What is the Grade 9 math PAT in Alberta?', a: 'It is the Provincial Achievement Test in mathematics written by Alberta Grade 9 students. It has two parts: Part A, 20 questions on number fluency without a calculator, and Part B, 40 questions on problem solving with a calculator.' },
      { q: 'When is the Grade 9 math PAT in 2027?', a: 'In January, Part A is on Friday 22 January 2027 and Part B on Monday 25 January 2027. In June, Part A is on Tuesday 15 June 2027 and Part B on Thursday 17 June 2027. Each starts at 9 AM.' },
      { q: 'What is on Part A of the Grade 9 math PAT?', a: 'Alberta says Part A assesses foundational skills and fluency in mental math, estimation, algebra, square roots, exponent laws and arithmetic operations on rational numbers, without a calculator. It has 20 numerical-response questions, designed for 30 minutes.' },
      { q: 'Can my child use a calculator on the Grade 9 PAT?', a: 'Not on Part A. On Part B a calculator is allowed, but not a graphing calculator, and a protractor is not permitted on the test. For pi, students may use the calculator button or 3.14.' },
      { q: 'Does every Grade 9 student write the math PAT this year?', a: 'Not quite. For 2026 to 2027, classes in schools piloting the new Grade 9 math curriculum are not required to write it. Classes not piloting will write it in June 2027. Ask the school which applies.' },
      { q: 'How should my child prepare for the Grade 9 PAT?', a: 'By learning Grade 9 math well. Alberta discourages test rehearsal and coaching and says the tests are like any other test. Steady practice with fractions, integers, exponent laws, linear relations and word problems helps far more than drilling test items.' },
      { q: 'Is the Grade 9 PAT on a computer?', a: 'Yes. Alberta now delivers provincial assessments on a digital platform, and its own practice tests are on the same platform.' },
      { q: 'When do we get the results?', a: 'Teachers are expected to share preliminary results with parents in June, reporting Part A and Part B raw scores separately. The Individual Student Profile follows in late September 2027.' },
      { q: 'Do you give Grade 9 math classes in Alberta?', a: 'Yes, live online for students anywhere in Alberta. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'What do Grade 9 classes cost?', a: 'There is no charge for the first class. After it, a single monthly fee covers eight live classes and can be stopped between months. See the Fees panel on this page for the current amounts.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related reading',
    lede: 'For Alberta families with a Grade 9 student.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All our Canadian pages in one place.' },
      { href: '/coding-classes-in-alberta', label: 'Classes in Alberta', p: 'Coding and math for Alberta children and teens.' },
      { href: '/online-math-tutor-9th-grade', label: 'Grade 9 math tutor', p: 'One-to-one help through the Grade 9 year.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Math support for every grade.' },
      { href: '/pascal-contest-preparation', label: 'Pascal contest', p: 'Waterloo&rsquo;s contest for Grade 9 students.' },
      { href: '/blog/how-to-help-a-child-understand-fractions', label: 'Understanding fractions', p: 'Where Part A fluency begins.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'Equations and polynomials, one to one.' },
      { href: '/canada-coding-curriculum-by-province', label: 'Coding in each province', p: 'What Alberta and the others teach.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our approach to a live lesson.' }
    ]
  },

  start: {
    h2: 'Book a free Grade 9 math class',
    lede: 'Share the unit your child is on and one recent test. We will find the gaps in the first class and suggest a plan for the term.',
    readFirst: 'Curious first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains a lesson, and the <a class="ag-inline-link" href="/courses/algebra-foundations-masterclass">Algebra Foundations syllabus</a> shows the Grade 7 to 9 plan.',
    note: 'Lessons are live on video, with teachers working from India, so there is no commute for anyone. Families in Alberta usually reach us fastest on WhatsApp.',
    formNote: 'The free class needs no card details.'
  },

  footer: {
    cols: [
      { h4: 'Grade 9 math', links: [
        { href: '/courses/algebra-foundations-masterclass', label: 'Algebra Foundations' },
        { href: '/online-math-tutor-9th-grade', label: 'Grade 9 math tutor' },
        { href: '/pascal-contest-preparation', label: 'Pascal contest' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-alberta', label: 'Classes in Alberta' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
        { href: '/canada-coding-curriculum-by-province', label: 'Coding by province' }
      ] }
    ],
    bottomRight: 'Estimate first, then calculate'
  },

  personalityCss: `
.ag-root.ag-alg .ag-hero h1 { letter-spacing: -0.01em; max-width: 22ch; }
.ag-root.ag-alg .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-alg .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-alg .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-alg .ag-steps li { margin-bottom: 0.45rem; }
.ag-root.ag-alg .ag-table td { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'Alberta Education and Childcare: 2026-2027 Mathematics 9 Subject Bulletin (Part A and Part B descriptions, blueprints, calculator and manipulative rules, multiplication table accommodation, separate raw scores, pilot exemption, standards, complexity levels); General Information Bulletin 2026-2027 for PATs (January and June 2027 math dates, double time, significant dates); 2026-2027 Grade 9 Parent Guide (discourages rehearsal and coaching, strands, results timing, no school comparisons); alberta.ca Provincial Achievement Tests page (annual grades 6 and 9, January and June, digital, complements teacher assessment); Diploma exams overview (January 2026 cancellation); curriculum-mathematics page (draft 7 to 9 piloting).',
    localProject: 'Two original worked problems ((-3/4) + (5/6)(-2/5) = -13/12 without a calculator; candle h = 24 - 1.5t shorter than 9 cm when t > 10), ten original Part A style and eight original Part B style questions with checked answers, and a six-week review plan before Tuesday 15 June 2027. Lesson family: fluency without a calculator.',
    requiredMentions: ['Alberta discourages coaching. Here is what we do instead', 'Friday 22 January 2027', 'Monday 25 January 2027', 'Tuesday 15 June 2027', 'The pilot exemption for 2026 to 2027', 'are not to be combined into a total test score', 'many of the questions on the mathematics test are placed in real-life contexts', 'A protractor is not permitted', 'A candle 24 cm tall burns down 1.5 cm every hour', 'Evaluate (&minus;3/4) + (5/6) &times; (&minus;2/5)'],
    sources: [
      { claim: 'Part A and Part B content, blueprint, calculator rules, accommodation, separate raw scores, pilot exemption, standards, complexity levels.', url: 'https://www.alberta.ca/system/files/edc-math-9-subject-bulletin-2026-27.pdf' },
      { claim: 'Grade 9 math PAT dates for January and June 2027.', url: 'https://www.alberta.ca/system/files/ecc-pat-administration-schedules.pdf' },
      { claim: 'Coaching and rehearsal discouraged; strands; results timing; no school comparisons.', url: 'https://www.alberta.ca/system/files/edc-grade-9-parent-guide-2026-27.pdf' },
      { claim: 'PATs annual in grades 6 and 9, January and June for Grade 9, digital format, role beside teacher assessment.', url: 'https://www.alberta.ca/provincial-achievement-tests' },
      { claim: 'January 2026 Grade 9 PATs cancelled.', url: 'https://www.alberta.ca/diploma-exams-overview' }
    ],
    rejectedClaims: [
      'Released PAT items or practice-test questions: none reproduced or adapted; every question is ours and labelled so.',
      'Specific Grade 9 outcomes of the current program of studies: the program of studies could not be read (LearnAlberta is JavaScript only), so practice is built from the bulletin\'s Part A list and the four strand names.',
      'School or board results and rankings: Alberta does not support school comparisons on PAT scores, and none are mentioned.',
      'Any score or standard promised from our classes: none.',
      'The reason given for the January 2026 cancellation: left out.',
      'Any connection with Alberta Education and Childcare or a school authority: none, and the page says so.'
    ]
  }
};
