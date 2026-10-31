'use strict';
// NJSLA math practice (ag- state-test door; UK and US exams cluster, row US027). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from the New
// Jersey Department of Education (nj.gov/education); copies in keyword-research-2026-09/uk-us-gap/src/njsla-math-practice/:
//  - NJSLA-A, NJGPA-A and NJSLA-S page (assessment/adaptive): NJSLA-A "adaptive assessments aligned with the New Jersey
//    Student Learning Standards (NJSLS)"; links to the practice tests, blueprints, unit times and score guides.
//  - "New in 2026 ... Moving to Adaptive Testing" flyer: "Beginning in 2026, the NJSLA-A in ELA and Mathematics and NJGPA-A
//    will use Computer Adaptive Testing"; "All test questions measure the NJ Student Learning Standards."
//  - Overview 2025-2026 NJSLA-A: mathematics "Grades 3-8, Algebra I, Geometry, Algebra II"; computer-based on
//    district-supplied devices.
//  - NJSLA-A Mathematics Blueprints (page last updated 08/12/2026): total items grade 3 41, grade 4 41, grade 5 41, grade 6
//    46, grade 7 46, grade 8 43, Algebra I 43, Geometry 45, Algebra II 43; reporting-category minimum and maximum item counts
//    (grade 3 OA 12 to 14, NBT and NF 10 to 12, Measurement 10 to 12, Geometry and Data Literacy 5 to 7 "Aggregate reporting
//    only"; grade 4 NBT 10 to 13, NF 11 to 14, OA and Measurement 11 to 14, G and DL 6 to 8; grade 5 NBT 11 to 14, NF 11 to
//    14, OA and Measurement 10 to 12, G and DL 6 to 8; grade 6 RP 10 to 12, NS 11 to 14, EE 11 to 14, G and SP 11 to 11; grade
//    7 RP 10 to 13, NS 10 to 13, EE 10 to 13, G and SP 12 to 15; grade 8 EE and NS 14 to 16, G 14 to 17, F and SP 12 to 15).
//  - Units Testing Times: NJSLA-A Mathematics session 1 75, session 2 75, total 150 minutes.
//  - NJSLA-A and NJGPA-A FAQ (last updated 09/23/2026): "The Mathematics tests will include only machine-scorable item types
//    and will not include extended-response items."; item types list; calculator policy (grades 3 through 5 not permitted;
//    from grade 6 Desmos four-function and TI108; grade 8 Desmos scientific and TI34; end-of-course Desmos graphing and
//    TI84+); "The test begins with items of medium difficulty"; "The assessment does not adjust after a single item";
//    "Responses may be changed during the session, but answered items will not readapt."; "Students may change answers only
//    within the same session."; 25 to 30 minutes extra for logging on; Spanish math; "Only grade-level items count toward the
//    score."; five performance levels; reporting-category levels Above, Within, Below Expectations; result dates Fall Block
//    2026 NJSLA-A January 20, 2027 and Spring 2027 NJSLA-A June 30, 2027; 30-day ISR rule N.J.A.C. 6A:8-4.3(b).
//  - Performance Level Cut Scores memo, September 9, 2026: math cut scale scores Level 2 / 3 / 4 / 5 by grade (G3 1370 1389
//    1399 1421; G4 1391 1408 1431 1461; G5 1416 1438 1463 1499; G6 1428 1465 1500 1534; G7 1451 1485 1526 1574; G8 1504 1535
//    1577 1612; Algebra I 2430 2469 2500 2550; Geometry 2389 2454 2500 2538; Algebra II 2414 2470 2500 2524) and level names.
//  - Statewide Assessment Testing Schedule 2026-27: NJSLA-A ELA and Math Spring Administration "April 19, 2027 through May
//    21, 2027"; Fall Block math 9 through 12 "November 30, 2026 through December 16, 2026".
//  - Preparing Our Students for Success 2026 NJSLA-A flyer: 2026 window "April 27 to May 29, 2026"; "Specific testing dates
//    are determined by each school district."
//  - Practicing for the NJSLA-A flyer: practice tests "aren't meant for studying"; five steps (portal, Practice Tests,
//    Continue as Guest, grade, begin).
// Dashes in state ranges written "to" here. No practice-test item or released item reproduced.
// Our own material, labelled: the grade 4 multi-select fraction example and the grade 7 equation-entry example, the
// ten-item practice set, the eight-week plan, the per-grade priorities, the "medium-start" explanation in our words.
// Lesson family: careful first answers on an adaptive test (no rushing, no "come back later").

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const NJ = 'https://www.nj.gov/education/assessment';
const AD = NJ + '/adaptive';
const BC = 'https://www.nj.gov/education/broadcasts/2026';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'NJSLA MATH', blurb: 'The New Jersey NJSLA-A math test, adaptive since 2026: item counts per grade, calculator rules, the five levels and cut scores, the April 19 to May 21, 2027 window and original practice.' },
  slug: 'njsla-math-practice',
  code: 'np',
  accent: '#6C6285',
  accentRationale: 'NJSLA math practice: a dusk violet-grey #6C6285 as allocated, 5.32:1 on paper #FBF8F2, quiet enough for long tables and well apart from the New York brick and the Texas pages',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-classes-in-new-jersey', name: 'New Jersey' }],
  routeLabel: 'NJSLA math practice',
  title: 'NJSLA Math Practice: The 2027 Adaptive Test, Grades 3 to 8',
  description: 'NJSLA math practice for grades 3 to 8: the adaptive NJSLA-A, item counts, calculators, cut scores and the April 19 to May 21, 2027 window, with practice.',
  ogDescription: 'New Jersey&rsquo;s math test went computer-adaptive in 2026. What NJDOE publishes about the NJSLA-A: items per grade, two 75-minute sessions, calculators by grade, five levels and new cut scores.',
  twitterDescription: 'The adaptive NJSLA-A math test from NJDOE&rsquo;s own pages, with original practice.',
  pageName: 'NJSLA Math Practice',
  webPageDescription: 'A guide for New Jersey families to the New Jersey Student Learning Assessment-Adaptive in mathematics, grades 3 to 8, built from NJDOE&rsquo;s blueprints, testing times, FAQ, cut-score memo and 2026 to 2027 schedule, with original worked examples and a practice set.',
  courseDescription: 'Live online math for New Jersey students in grades 3 to 8, taught to the New Jersey Student Learning Standards, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'NJSLA math practice',
  navLinks: [
    { href: '#adaptive', label: 'Adaptive' },
    { href: '#blueprint', label: 'Blueprint' },
    { href: '#tools', label: 'Calculators' },
    { href: '#levels', label: 'Levels' },
    { href: '#window', label: '2027 dates' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New Jersey &middot; Grades 3 to 8 &middot; From NJDOE&rsquo;s own pages',
  h1: 'NJSLA math practice for the 2027 test',
  lede: 'If an older sibling took the NJSLA a few years ago, forget most of what they remember. Since spring 2026 New Jersey&rsquo;s grades 3 to 8 math test has been the NJSLA-A, where the A stands for adaptive. The computer chooses the next group of questions from how your child answered the last group, every question is machine-scored, and the scores sit on a brand new scale with new cut points approved in September 2026. Preparing well now means two things: solid grade-level math, and the habit of getting each answer right the first time.',
  secondaryCta: { href: '#adaptive', label: 'How the adaptive test works' },
  wa: 'Hello Modern Age Coders, my child in New Jersey takes the NJSLA math test in the spring. Could we book a free first class?',
  heroNote: 'Live math since 2020 &middot; 10,000+ students &middot; lessons on Eastern Time',
  spec: [
    ['Test', 'NJSLA-A Mathematics'],
    ['Run by', 'NJ Department of Education'],
    ['Grades', '3 to 8, plus Algebra I, Geometry, Algebra II'],
    ['Format', 'Computer-adaptive'],
    ['Math time', 'Two sessions of 75 minutes'],
    ['Spring 2027', 'April 19 to May 21'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The NJSLA-A (New Jersey Student Learning Assessment-Adaptive) is the New Jersey Department of Education&rsquo;s annual math test for grades 3 to 8, computer-adaptive since 2026, with 41 to 46 items per grade over two 75-minute sessions. The spring 2027 window runs April 19 to May 21, 2027. Modern Age Coders teaches that math live online, as a group batch or 1-on-1, in our Elementary Mathematics course.',

  picks: {
    eyebrow: 'Courses for New Jersey students',
    h2: 'Three courses built around the New Jersey standards',
    lede: 'Grade-level math first; the test format comes second and takes far less time to learn.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'NP / 01', title: 'Elementary math, grades 3 to 5', note: 'Operations, place value, fractions and measurement, the four largest NJSLA-A categories.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'NP / 02', title: 'Grades 6, 7 and 8', note: 'Ratios, the number system, equations, functions and geometry.' },
      { course: 'algebra-foundations-masterclass', code: 'NP / 03', title: 'Algebra foundations', note: 'For eighth graders sitting the Algebra I test instead of grade 8 math.' }
    ]
  },

  sections: [
    {
      id: 'adaptive', tint: 'tint', eyebrow: 'What changed in 2026',
      h2: 'What is the NJSLA-A, and how is it different from the old NJSLA?',
      lede: 'It is the same standards on a new kind of test. NJDOE&rsquo;s flyer says that beginning in 2026 the NJSLA-A in ELA and mathematics uses computer adaptive testing, and that all test questions measure the NJ Student Learning Standards.',
      body: [
        { kind: 'table', caption: 'Old NJSLA against the NJSLA-A, as NJDOE describes the adaptive test (NJSLA-A and NJGPA-A FAQ, last updated September 23, 2026, read 31 October 2026)', head: ['Question', 'NJSLA-A mathematics'], rows: [
          ['Does every student see the same questions?', 'No. The test adjusts difficulty to the student&rsquo;s answers, but the content and the grade-level standards stay the same'],
          ['How does it start?', 'With items of medium difficulty, then harder or easier groups of items'],
          ['Does it change after each question?', 'No. It adjusts after groups of questions, not after a single item'],
          ['Are there written, extended answers?', 'No. Math uses only machine-scorable item types, with no extended-response items'],
          ['Which items count?', 'Only grade-level items count toward the score'],
          ['Can answers be changed?', 'Within the same session only; answered items will not readapt'],
          ['Is it in Spanish?', 'The mathematics assessment is available in English and Spanish']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the first answer matters more now',
          left: [
            'NJDOE&rsquo;s FAQ gives a piece of advice that changes how we coach: &ldquo;Responses may be changed during the session, but answered items will not readapt.&rdquo; In plain terms, a careless answer early on can steer the next group of questions, and fixing it later does not steer them back.',
            'The same FAQ tells students not to rush through with the intention of returning later, because that prevents the assessment from adapting appropriately. The old trick of skipping hard questions and circling back does not fit this test.'
          ],
          rightH3: 'Mark for Review still exists',
          right: [
            'Students can still flag an item with the Mark for Review tool, but only after giving their best answer, since every question must be answered before moving to the next one.',
            'There is one more rule families rarely hear about. Once the second session begins, answers from the first session are locked, even if they were flagged. Our practice sessions copy that rule so nobody is surprised.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + AD + '/faq.shtml" rel="noopener" target="_blank">NJSLA-Adaptive and NJGPA-Adaptive FAQs</a> and <a class="ag-inline-link" href="' + AD + '/docs/2026_AdaptiveAssessments_Overview.pdf" rel="noopener" target="_blank">Moving to Adaptive Testing</a>, New Jersey Department of Education, read 31 October 2026. Modern Age Coders has no tie to NJDOE or its testing contractor.' }
      ]
    },
    {
      id: 'blueprint', tint: 'deep', eyebrow: 'Blueprint',
      h2: 'How many questions are on the NJSLA math test, and what do they cover?',
      lede: 'Between 41 and 46 items, depending on the grade. NJDOE&rsquo;s blueprint gives a minimum and maximum number of items for each reporting category, which is the clearest map of where the points sit.',
      body: [
        { kind: 'table', caption: 'NJSLA-A Mathematics Blueprints, grades 3 to 8 (NJDOE, page last updated August 12, 2026, read 31 October 2026)', head: ['Grade', 'Total items', 'Reporting categories, minimum to maximum items'], numCols: [1], rows: [
          ['3', '41', 'Operations and Algebraic Thinking 12 to 14; Base Ten and Fractions 10 to 12; Measurement 10 to 12; Geometry and Data Literacy 5 to 7'],
          ['4', '41', 'Base Ten 10 to 13; Fractions 11 to 14; Operations and Algebraic Thinking and Measurement 11 to 14; Geometry and Data Literacy 6 to 8'],
          ['5', '41', 'Base Ten 11 to 14; Fractions 11 to 14; Operations and Algebraic Thinking and Measurement 10 to 12; Geometry and Data Literacy 6 to 8'],
          ['6', '46', 'Ratios and Proportional Relationships 10 to 12; The Number System 11 to 14; Expressions and Equations 11 to 14; Geometry and Statistics and Probability 11'],
          ['7', '46', 'Ratios and Proportional Relationships 10 to 13; The Number System 10 to 13; Expressions and Equations 10 to 13; Geometry and Statistics and Probability 12 to 15'],
          ['8', '43', 'Expressions and Equations and the Number System 14 to 16; Geometry 14 to 17; Functions and Statistics and Probability 12 to 15']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the blueprint as a parent',
          left: [
            'In grades 3 to 5, Geometry and Data Literacy is marked &ldquo;Aggregate reporting only&rdquo;. It still carries items, but the report will not give your child a separate rating for it. Fractions and place value carry the weight.',
            'Grade 8 is balanced three ways, and geometry alone can reach 17 items. That is the year when transformations, the Pythagorean Theorem and volume deserve real time, not a single review week.'
          ],
          rightH3: 'High school courses on the same test',
          right: [
            'The blueprint page also covers the course tests: Algebra I with 43 items, Geometry with 45 and Algebra II with 43. NJDOE&rsquo;s overview lists mathematics for grades 3 to 8, Algebra I, Geometry and Algebra II.',
            'So a seventh or eighth grader in Algebra I may sit the Algebra I test rather than the grade-level one. Ask the school which form your child is registered for.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + AD + '/mathblueprints.shtml" rel="noopener" target="_blank">NJSLA-A Mathematics Blueprints</a>, NJDOE, read 31 October 2026. Category names shortened; the counts are NJDOE&rsquo;s.' }
      ]
    },
    {
      id: 'tools', tint: 'tint', eyebrow: 'Time and tools',
      h2: 'How long is the NJSLA math test, and can you use a calculator?',
      lede: 'Math is one unit of 150 minutes, split into two sessions of 75 minutes. Calculators depend on the grade: none in grades 3 to 5, a four-function calculator in grades 6 and 7, a scientific one in grade 8.',
      body: [
        { kind: 'table', caption: 'NJSLA-A mathematics timing and calculator policy (NJDOE Units Testing Times page and FAQ, read 31 October 2026)', head: ['Grade or test', 'Session 1', 'Session 2', 'Calculator in the platform'], rows: [
          ['Grades 3 to 5', '75 minutes', '75 minutes', 'Not permitted'],
          ['Grades 6 and 7', '75 minutes', '75 minutes', 'Desmos four-function and TI108'],
          ['Grade 8', '75 minutes', '75 minutes', 'Desmos scientific and TI34'],
          ['Algebra I, Geometry, Algebra II', '75 minutes', '75 minutes', 'Desmos graphing and TI84+']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Session time is not the whole morning',
          left: [
            'NJDOE notes that the listed times do not include the recommended 25 to 30 minutes for logging students on, reading directions and logging off. Plan for a long morning on each test day.',
            'Students move at their own pace, and NJDOE says the second session begins where the student stopped at the end of the first. The test is one continuous unit cut in two, not two separate tests.'
          ],
          rightH3: 'A middle schooler in Algebra I',
          right: [
            'The FAQ says middle school students enrolled in and taking a high school end-of-course math test get the calculator for that course. An eighth grader on the Algebra I test uses the graphing calculator, not the grade 8 scientific one.',
            'For grades 3 to 5 the honest preparation is fluency: multiplication facts, fraction equivalence and place value done by hand, because there is no calculator to lean on.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + AD + '/unit_test_times.shtml" rel="noopener" target="_blank">NJGPA-A and NJSLA-A Units Testing Times</a> and the <a class="ag-inline-link" href="' + AD + '/faq.shtml" rel="noopener" target="_blank">FAQ</a>, NJDOE, read 31 October 2026.' }
      ]
    },
    {
      id: 'items', tint: 'deep', eyebrow: 'Question types',
      h2: 'What kinds of questions are on the NJSLA-A math test?',
      lede: 'All of them are scored by machine. NJDOE lists item types such as multiple choice, multi-select, table match, equation, bar chart, graphing and hot text.',
      body: [
        { kind: 'ol', items: [
          '<b>Our grade 4 multi-select example.</b> Select every fraction equal to 3/4: 6/8, 9/12, 3/8, 12/16, 4/3. The reasoning we teach: multiply 3 and 4 by the same number. 3 x 2 over 4 x 2 gives 6/8; 3 x 3 over 4 x 3 gives 9/12; 3 x 4 over 4 x 4 gives 12/16. 3/8 has the same top but a bigger bottom, so it is smaller. 4/3 is more than 1. Answer: 6/8, 9/12 and 12/16.',
          '<b>Why multi-select is unforgiving.</b> On a machine-scored item there is no partial-credit essay to rescue a near miss. Picking two of the three correct fractions, or adding 3/8 by mistake, is the kind of slip that careful checking prevents.',
          '<b>Our grade 7 equation-entry example.</b> A phone plan charges a fixed 12 dollars plus 0.05 dollars per text. The bill is 19.50 dollars. Enter the number of texts. Working: 12 + 0.05t = 19.50, so 0.05t = 7.50 and t = 150. Check: 0.05 x 150 = 7.50, and 12 + 7.50 = 19.50.',
          '<b>The check is the habit.</b> On an equation item the child types a number into a box. Substituting the answer back takes ten seconds and catches most errors before they lock in.'
        ] },
        { kind: 'p', mt: true, html: 'Both examples are ours, written in the spirit of the item types NJDOE lists, not copied from any New Jersey test or practice test. Dollar amounts are written in words here only because they are part of a math problem.' }
      ]
    },
    {
      id: 'levels', tint: 'tint', eyebrow: 'Results',
      h2: 'What are the NJSLA-A performance levels and cut scores for math?',
      lede: 'Five levels, from Did Not Yet Meet Expectations to Exceeded Expectations. The New Jersey State Board of Education approved the new cut scores on September 9, 2026.',
      body: [
        { kind: 'table', caption: 'NJSLA-A Mathematics performance level cut scores, scale scores (NJDOE memo, Performance Level Cut Scores Established for the NJSLA-A, September 9, 2026)', head: ['Grade or course', 'Partially Met Expectations (Level 2)', 'Approaching Expectations (Level 3)', 'Met Expectations (Level 4)', 'Exceeded Expectations (Level 5)'], numCols: [1, 2, 3, 4], rows: [
          ['3', '1370', '1389', '1399', '1421'],
          ['4', '1391', '1408', '1431', '1461'],
          ['5', '1416', '1438', '1463', '1499'],
          ['6', '1428', '1465', '1500', '1534'],
          ['7', '1451', '1485', '1526', '1574'],
          ['8', '1504', '1535', '1577', '1612'],
          ['Algebra I', '2430', '2469', '2500', '2550'],
          ['Geometry', '2389', '2454', '2500', '2538'],
          ['Algebra II', '2414', '2470', '2500', '2524']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Five overall levels, three category ratings',
          left: [
            'Below the Level 2 cut a student is at Level 1, Did Not Yet Meet Expectations. Level 4, Met Expectations, is the level that says the student meets grade-level expectations in New Jersey&rsquo;s terms.',
            'Each reporting category from the blueprint gets its own rating of Above, Within or Below Expectations. That is the part of the report we read first, because it tells us which category to teach.'
          ],
          rightH3: 'Do not compare with older scores',
          right: [
            'These cut scores belong to the new adaptive scale. A score from the old fixed-form NJSLA sits on a different scale, so last year&rsquo;s number and this year&rsquo;s number cannot be set side by side.',
            'NJDOE&rsquo;s FAQ is candid that one test is a one-time snapshot and should be read with classroom work, projects and teacher observations. We agree, and we ask parents to bring both.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + BC + '/sep/9/PerformanceLevelCutScoresEstablishedfortheNewJerseyStudentLearningAssessmentAdaptive.pdf" rel="noopener" target="_blank">NJSLA-A cut score memo</a>, September 9, 2026, and the NJDOE FAQ, read 31 October 2026.' }
      ]
    },
    {
      id: 'window', tint: 'deep', eyebrow: '2026 to 2027',
      h2: 'When is the NJSLA math test in 2027?',
      lede: 'NJDOE&rsquo;s 2026 to 2027 schedule sets the spring NJSLA-A ELA and math window from April 19, 2027 through May 21, 2027. Each district picks its own dates inside it.',
      body: [
        { kind: 'table', caption: 'NJSLA-A dates for 2026 to 2027 (NJDOE Statewide Assessment Testing Schedule 2026-27, last updated July 16, 2026; FAQ reporting schedule)', head: ['Event', 'Dates NJDOE publishes'], rows: [
          ['Fall Block NJSLA-A, high school math (Algebra I, Geometry or Algebra II)', 'November 30, 2026 through December 16, 2026'],
          ['Fall Block results to districts', 'January 20, 2027'],
          ['Spring NJSLA-A, ELA grades 3 to 9 and math grades 3 through high school', 'April 19, 2027 through May 21, 2027'],
          ['Spring 2027 NJSLA-A results to districts', 'June 30, 2027'],
          ['Report to families', 'Within 30 days of the district receiving it, under N.J.A.C. 6A:8-4.3(b)']
        ] },
        { kind: 'p', mt: true, html: 'For comparison, the 2026 flyer gave a window of April 27 to May 29, 2026 and said specific testing dates are determined by each school district. The 2027 window starts about a week earlier, so a plan built on last spring&rsquo;s timing will be a week late.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + NJ + '/resources/district/statewide_schedule_2627.shtml" rel="noopener" target="_blank">Statewide Assessment Testing Schedule 2026-27</a>, NJDOE, read 31 October 2026.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice',
      h2: 'NJSLA math practice: ten questions we wrote, grades 3 to 8',
      lede: 'Ours, written to the New Jersey standards and the machine-scored formats. Answer each one fully before looking at the key, the way the adaptive test expects.',
      body: [
        { kind: 'table', caption: 'Original practice set (ours, not NJDOE items), with answers', head: ['Grade', 'Question', 'Format we imitate', 'Answer'], rows: [
          ['3', 'A tray holds 6 rows of 7 muffins. How many muffins?', 'Equation entry', '42'],
          ['3', 'Which shows one fourth of a rectangle: 1 of 4 equal parts, or 1 of 4 unequal parts?', 'Multiple choice', '1 of 4 equal parts'],
          ['4', 'Round 48,562 to the nearest thousand.', 'Equation entry', '49,000'],
          ['4', 'Select all multiples of 6: 12, 16, 24, 30, 34.', 'Multi-select', '12, 24, 30'],
          ['5', 'What is 2/3 + 1/4?', 'Equation entry', '11/12'],
          ['5', 'A box is 5 cm by 4 cm by 3 cm. What is its volume?', 'Equation entry', '60 cubic cm'],
          ['6', 'A car travels 210 miles in 3.5 hours. What is the unit rate?', 'Equation entry', '60 miles per hour'],
          ['6', 'Order from least to greatest: -2, 1.5, -3.5, 0.', 'Drag to order', '-3.5, -2, 0, 1.5'],
          ['7', 'Solve 3(x - 4) = 21.', 'Equation entry', 'x = 11'],
          ['8', 'What is the slope of the line through (1, 3) and (5, 11)?', 'Equation entry', '2']
        ] },
        { kind: 'p', mt: true, html: 'For the real platform, NJDOE offers free online practice tests on the New Jersey Assessments Portal: open Practice Tests, choose Continue as Guest and Guest Session, then pick the grade. NJDOE says these practice tests aren&rsquo;t meant for studying; they exist so students feel confident with the tools. We use them for exactly that, in the last fortnight.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan',
      h2: 'How to prepare for the NJSLA-A math test, step by step',
      lede: 'Our eight-week plan, counted back from the district&rsquo;s first math day in the April 19 to May 21, 2027 window.',
      body: [
        { kind: 'ol', items: [
          '<b>Week 1: find the categories.</b> If you have a 2026 score report, read the Above, Within and Below ratings. If not, we run a short diagnostic of our own across the blueprint categories for the grade.',
          '<b>Weeks 2 to 4: the two heaviest categories.</b> Fractions and base ten in grades 4 and 5; the number system and equations in grade 6; geometry and expressions in grade 8.',
          '<b>Week 5: answer-once discipline.</b> Short sets where the child must commit to each answer and check it before the next one appears, as the adaptive test requires.',
          '<b>Week 6: the formats.</b> Multi-select, equation entry, graphing and table match, so the item type never costs a point.',
          '<b>Week 7: the tools.</b> The calculator for the grade, or none for grades 3 to 5, and the official practice test on the portal as a guest.',
          '<b>Week 8: two 75-minute sessions.</b> A full rehearsal in two sittings, with first-session answers locked before the second begins.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A habit that pays on this test',
          left: [
            'Read the question twice, answer, then check by a different route: estimate, substitute, or draw it. On an adaptive test the check protects the questions that come next as well as this one.'
          ],
          rightH3: 'A habit that costs on this test',
          right: [
            'Guessing quickly to save time for later. There is no later for an answered item; NJDOE says so in its own advice to students.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Grade by grade',
    h2: 'Where each grade&rsquo;s NJSLA-A points are won',
    lede: 'Our reading of NJDOE&rsquo;s blueprint categories, turned into teaching priorities.',
    table: { caption: 'Priorities by grade (category counts from NJDOE; priorities ours)', head: ['Grade', 'Secure first', 'Then'], rows: [
      ['3', 'Times tables to 10 x 10 and their division facts', 'Unit fractions, area and time'],
      ['4', 'Fraction equivalence and comparing fractions', 'Multi-digit multiplication and measurement conversions'],
      ['5', 'Adding and multiplying fractions', 'Decimals and volume'],
      ['6', 'Negative numbers and dividing fractions', 'Ratios, unit rates and one-step equations'],
      ['7', 'Operations with rational numbers', 'Proportional relationships, probability and scale drawings'],
      ['8', 'Linear equations and systems', 'Transformations, the Pythagorean Theorem and functions']
    ] },
    left: { h3: 'For parents', ps: [
      'The report&rsquo;s category ratings are more useful than the scale score. Bring them to the first class.',
      'Ask the school which days your district has chosen within the window, and whether your child sits the grade-level form or a course test.'
    ] },
    right: { h3: 'For students', ps: [
      'Answer every question as if you cannot come back, because on this test you mostly cannot.',
      'In grades 3 to 5 there is no calculator, so estimate before you work and compare at the end.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for New Jersey students',
    lede: 'From third-grade number sense to the high school course tests.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Grades 3 to 5', courses: [
        { code: 'NP / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5, fractions included.' },
        { code: 'NP / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Fluency for the calculator-free grades.' },
        { code: 'NP / E / 03', slug: 'early-math-foundations', title: 'Early math', blurb: 'For younger brothers and sisters.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'NP / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Rational numbers to functions.' },
        { code: 'NP / M / 02', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'For children who want harder problems.' },
        { code: 'NP / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Slopes and patterns in Python.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Course tests', courses: [
        { code: 'NP / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For the Algebra I form.' },
        { code: 'NP / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry and Algebra II.' },
        { code: 'NP / H / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data skills across the grades.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons set on Eastern Time for New Jersey',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school ET', l: 'A regular weekly lesson alongside the school year.' },
      { time: 'Saturday or Sunday', l: 'A pair of 75-minute mock sessions each April weekend.' },
      { time: '1-on-1', l: 'Category by category, from the score report.' }
    ],
    cells: [
      { h3: 'Answer once', p: 'Checking before committing, as the adaptive test needs.' },
      { h3: 'NJSLS aligned', p: 'Lessons follow New Jersey&rsquo;s own standards.' },
      { h3: 'Every format', p: 'Multi-select, equation entry and graphing items.' },
      { h3: 'Calculator rules', p: 'None in grades 3 to 5, the right one after.' },
      { h3: 'Portal practice', p: 'The guest practice test, late in the plan.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty in a group, or one to one.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Some of our math students also code; a few of their projects are on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents reviewing us on Google, as written.',

  fees: {
    h2: 'Fees',
    lede: 'Paid month by month in US dollars, with no contract: plenty of New Jersey families begin in February and stop after the district&rsquo;s last math day.',
    free: ['A free first class', 'Bring the latest score report', 'No card details asked'],
    group: ['Fifteen to twenty students', 'The same teacher each week', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Paced to your district&rsquo;s test days', 'Flexible times']
  },

  faq: {
    eyebrow: 'New Jersey families ask',
    h2: 'NJSLA-A math: what parents ask us',
    items: [
      { q: 'When is the NJSLA math test in 2027?', a: 'NJDOE\'s 2026 to 2027 schedule sets the spring NJSLA-A ELA and math window from April 19, 2027 through May 21, 2027. Each district chooses its own testing days inside that window, so the school office is the place to get them.' },
      { q: 'Is the NJSLA now adaptive?', a: 'Yes. Beginning in 2026, New Jersey moved its ELA and math tests to computer adaptive testing and renamed them NJSLA-A. The test starts with medium-difficulty items and adjusts after groups of questions, while still measuring grade-level standards.' },
      { q: 'How many questions are on the NJSLA math test?', a: 'NJDOE\'s blueprint lists 41 items in grades 3, 4 and 5, 46 in grades 6 and 7, and 43 in grade 8. The course tests have 43 items for Algebra I, 45 for Geometry and 43 for Algebra II.' },
      { q: 'How long is the NJSLA math test?', a: 'The math unit is 150 minutes in two sessions of 75 minutes. NJDOE recommends allowing another 25 to 30 minutes for logging on, directions and logging off.' },
      { q: 'Can you use a calculator on the NJSLA math test?', a: 'Grades 3 to 5 have none. Grades 6 and 7 get a four-function calculator in the platform, grade 8 a scientific one, and the Algebra I, Geometry and Algebra II tests a graphing calculator.' },
      { q: 'What score do you need to pass the NJSLA math test?', a: 'There is no pass mark for grades 3 to 8; students are placed in five levels. Met Expectations (Level 4) in grade 5 math starts at a scale score of 1463 under the cut scores approved on September 9, 2026.' },
      { q: 'Are there written answers on the NJSLA math test?', a: 'No. NJDOE says the math tests include only machine-scorable item types such as multiple choice, multi-select, equation and graphing items, with no extended-response items.' },
      { q: 'Where can I find an NJSLA math practice test?', a: 'On the New Jersey Assessments Portal, under Practice Tests, using Continue as Guest. NJDOE describes them as a way to learn the platform and tools rather than study material, so pair them with real teaching.' },
      { q: 'Can my child go back and change answers?', a: 'Only within the same session, and answered items do not readapt. Once the second session starts, first-session answers are locked even if they were marked for review.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set on Eastern Time for New Jersey families.' },
      { q: 'Are you connected with the New Jersey Department of Education?', a: 'No. We are a private online teaching company. NJDOE, New Jersey districts and the state\'s testing contractor have no part in our classes; we simply quote NJDOE\'s public pages and send families to the originals.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Pages by grade, plus our New Jersey hub.',
    items: [
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'The first NJSLA-A year, no calculator.' },
      { href: '/online-math-tutor-5th-grade', label: 'Fifth grade math tutoring', p: 'Fractions, decimals and volume.' },
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'Linear equations and geometry.' },
      { href: '/common-core-math-tutor', label: 'Common Core math tutor', p: 'Help with standards-based homework.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'For students who want a stretch.' },
      { href: '/coding-classes-in-new-jersey', label: 'Coding classes in New Jersey', p: 'Our New Jersey page.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Share your child&rsquo;s most recent NJSLA-A report or a recent math test from school. The teacher picks the weakest category and teaches one lesson on it in the first class.',
    readFirst: 'Read about <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse every <a class="ag-inline-link" href="/courses">course</a>.',
    note: 'Our teachers are based in India and teach at hours set on Eastern Time, so lessons land after the New Jersey school day or on weekends. A WhatsApp message is the fastest way to reach us.',
    formNote: 'The first class costs nothing and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-4th-grade', label: 'Grade 4 math' },
        { href: '/online-math-tutor-6th-grade', label: 'Grade 6 math' },
        { href: '/online-math-tutor-7th-grade', label: 'Grade 7 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'New Jersey and the US', links: [
        { href: '/coding-classes-in-new-jersey', label: 'New Jersey' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/common-core-math-vs-traditional-math', label: 'Common Core explained' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Adaptive since 2026'
  },

  personalityCss: `
.ag-root.ag-np .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-np .ag-capsule { border-left-width: 5px; }
.ag-root.ag-np .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-np .ag-table td.ag-num { font-variant-numeric: tabular-nums; text-align: right; }
.ag-root.ag-np .ag-steps li { padding-bottom: 8px; }
`,

  dossier: {
    curriculumAuthority: 'New Jersey Department of Education, read raw 31 October 2026: NJSLA-A, NJGPA-A and NJSLA-S page; Moving to Adaptive Testing flyer; Overview 2025-2026 NJSLA-A; NJSLA-A Mathematics Blueprints; Units Testing Times; NJSLA-A and NJGPA-A FAQ (item types, calculator policy, adaptivity, sessions, reporting dates, levels); Performance Level Cut Scores memo of September 9, 2026; Statewide Assessment Testing Schedule 2026-27; 2026 NJSLA-A testing dates flyer; Practicing for the NJSLA-A flyer.',
    localProject: 'Our grade 4 multi-select example (6/8, 9/12 and 12/16 equal 3/4; 3/8 and 4/3 do not), our grade 7 equation-entry example (12 + 0.05t = 19.50 gives t = 150, checked by substitution), our ten-item practice set, eight-week plan and grade priorities. Lesson family: careful first answers on an adaptive test.',
    requiredMentions: ['answered items will not readapt', 'April 19, 2027 through May 21, 2027', 'November 30, 2026 through December 16, 2026', 'Aggregate reporting only', 'Desmos four-function and TI108', 'Desmos scientific and TI34', 'Partially Met Expectations (Level 2)', 'Exceeded Expectations (Level 5)', 'With items of medium difficulty', 'Only grade-level items count toward the score', 'Answer: 6/8, 9/12 and 12/16.', 'Spring 2027 NJSLA-A results to districts'],
    sources: [
      { claim: 'NJSLA-A Mathematics Blueprints.', url: AD + '/mathblueprints.shtml' },
      { claim: 'NJSLA-A and NJGPA-A FAQs.', url: AD + '/faq.shtml' },
      { claim: 'Units Testing Times for NJSLA-A and NJGPA-A.', url: AD + '/unit_test_times.shtml' },
      { claim: 'Performance Level Cut Scores memo, September 9, 2026.', url: BC + '/sep/9/PerformanceLevelCutScoresEstablishedfortheNewJerseyStudentLearningAssessmentAdaptive.pdf' },
      { claim: 'Statewide Assessment Testing Schedule 2026-27.', url: NJ + '/resources/district/statewide_schedule_2627.shtml' },
      { claim: 'Moving to Adaptive Testing flyer.', url: AD + '/docs/2026_AdaptiveAssessments_Overview.pdf' }
    ],
    rejectedClaims: [
      'The New Jersey Assessments Portal (nj.portal.cambiumast.com) calculator policy PDF returned an HTML shell, not the document; nothing quoted from it. The calculator rules come from the NJDOE FAQ on nj.gov.',
      'Statewide results for spring 2026: not quoted; we read the reporting memo only for dates and procedures.',
      'Use of NJSLA-A scores for placement or gifted decisions: stated in our research map, not verified at NJDOE; not printed.',
      'A comparison of old NJSLA scale scores with NJSLA-A scale scores: not made; NJDOE set new cut scores for the new test.',
      'Reproducing NJDOE practice-test items: refused; the portal is linked by description instead.',
      'Level or score promises for our classes: refused. Any affiliation with NJDOE, a district or the testing contractor: none.'
    ]
  }
};
