'use strict';
// PSSA math practice (ag- state-test door; UK and US exams cluster Phase 2, row US025, group B10).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from the
// Pennsylvania Department of Education (pa.gov/agencies/education); copies in
// keyword-research-2026-09/uk-us-gap/src/pssa-math-practice/:
//  - PSSA page (pennsylvania-system-of-school-assessment-pssa): "Every Pennsylvania student in grades 3 through 8 is assessed
//    in English Language Arts and Math."; "standards-based, criterion-referenced assessment"; State Board approved "specific
//    criteria for advanced, proficient, basic and below basic levels of performance."; "Individual student scores, provided
//    only to their respective schools"; 2026-2027 windows: ELA April 26 - 30, 2027; Mathematics, Science and Make-ups May 3 -
//    7, 2027; Mathematics, Science, and Make-ups (Optional) May 10 - 14, 2027 (dashes written "to" on the page); make-up window
//    "concludes May 14, 2027"; "Early Reporting is not available in the 2026-2027 school year"; Firefly ELA, Mathematics,
//    Science October 5, 2026 to April 16, 2027.
//  - PSSA Mathematics Test Design (2025): per grade 40 core MC/TE, 2 psychometric, 6 embedded field test; 3 core OE, 1 field-test
//    OE; "40 core MC/TE items 40 points", "3 core 4 pt OE items 12 points", "Total 52 points"; reporting categories A-T, A-F,
//    A-N, A-R, B-O, B-E, B-F, C-G, D-M, D-S with grade associations; percent of core by category per grade (G3 A-T 14-17, A-F
//    14-17, B-O 26-32, C-G 14-17, D-M 26-32; G4 18-22, 20-25, 24-28, 14-17, 17-21; G5 24-28, 26-30, 14-17, 14-17, 17-21; G6 A-N
//    18-22, A-R 17-21, B-E 26-30, C-G 14-17, D-S 18-22; G7 14-17, 24-28, 24-28, 18-22, 14-17; G8 A-N 14-17, B-E 30-35, B-F 20-25,
//    C-G 17-21, D-S 14-17); "calculators are not allowed on the grade 3 test"; "At grades 4 through 8, only a portion of the
//    test is considered to be 'non-calc'."; section layout: 2 sections of 24 MC/TE and 2 OE, estimated 78 minutes each.
//  - 2026 Grades 3-8 Mathematics Online DFA (Spring 2026): "GRADES 4–8 ONLY: For questions 1 through 4 of Mathematics – Section
//    1, students may not use a calculator."; after confirming, "students will not be allowed to return to questions 1 through
//    4"; then calculators "including scientific and graphing calculators" if they meet the policy; "calculators are not
//    mandatory"; an online calculator is provided; students may not share calculators.
//  - Pennsylvania Calculator Policy (revised October 2023): not permitted list (phones, wireless, CAS, noise or paper tape,
//    shared calculators, add-on programs); memory cleared before and after each session by the Test Administrator.
//  - Grade 6 Math Scoring Guidelines and Formula Sheets (2025): General Description of Scoring Guidelines for open-ended
//    questions, 4 to 0, quoted in short ("thorough", "general", "partial", "minimal" understanding; a 4 "may contain a minor
//    'blemish' or omission"); special zero categories BLK, OT, LOE, IL; grade 6 reference sheet formulas.
// Not used: "PSSA and PSSA-M Performance Level Cut Scores" PDF (undated, still lists grade 11 PSSA); its numbers are not printed.
// No released item or item-and-scoring-sampler question reproduced; the samplers are linked. Ranges quoted as PDE prints them.
// Our own material, labelled: the grade 7 four-point open-ended worked example (school fun run, 3 laps in 4 minutes, 9 laps,
// 12 minutes, then 25 percent faster), the three sample responses scored against PDE's general guideline as we read it, the
// twelve-item practice set by reporting category, the five-week May plan.
// Lesson family: writing a four-point open-ended response, judged level by level against the state's own guideline.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PDE = 'https://www.pa.gov/agencies/education/programs-and-services/instruction/elementary-and-secondary-education/assessment-and-accountability';
const DOCS = 'https://www.pa.gov/content/dam/copapwp-pagov/en/education/documents/instruction/assessment-and-accountability/pssa';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'PSSA MATH', blurb: 'Pennsylvania&rsquo;s PSSA math test for grades 3 to 8 from PDE: 52 core points, the four-question no-calculator start, the May 2027 window, the open-ended scoring guideline and original practice.' },
  slug: 'pssa-math-practice',
  code: 'pspr',
  accent: '#6E4B43',
  accentRationale: 'PSSA math practice: a deep cocoa #6E4B43 as allocated, about 7.6:1 on paper #FBF8F2 and well above 4.5:1 on the deepest tint, a Pennsylvania brown kept warmer than the Keystone olive',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-and-ai-classes-in-pennsylvania', name: 'Pennsylvania' }],
  routeLabel: 'PSSA math practice',
  title: 'PSSA Math Practice, Grades 3 to 8: The May 2027 Test',
  description: 'PSSA math practice for Pennsylvania grades 3 to 8: 52 core points, calculator rules, open-ended scoring and the May 3 to 7, 2027 window, from PDE, with practice.',
  ogDescription: 'Four questions with no calculator, then a gate you cannot go back through. Pennsylvania&rsquo;s PSSA math test from PDE&rsquo;s own design, with a four-point open-ended answer worked our way.',
  twitterDescription: 'Pennsylvania PSSA math from PDE&rsquo;s test design, with original practice.',
  pageName: 'PSSA Math Practice',
  webPageDescription: 'A guide for Pennsylvania families to the PSSA mathematics test in grades 3 to 8, built from the Pennsylvania Department of Education&rsquo;s PSSA page, 2025 Mathematics Test Design, spring 2026 Directions for Online Administration, calculator policy and scoring guidelines, with an original open-ended example and practice set.',
  courseDescription: 'Live online math classes for Pennsylvania students in grades 3 to 8, taught to the Pennsylvania Core Standards for mathematics, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'PSSA math practice',
  navLinks: [
    { href: '#design', label: 'Design' },
    { href: '#calc', label: 'Calculator gate' },
    { href: '#categories', label: 'Categories' },
    { href: '#oe', label: 'Open-ended' },
    { href: '#window', label: 'May 2027' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Pennsylvania &middot; Grades 3 to 8 &middot; From PDE&rsquo;s test design',
  h1: 'PSSA math practice for grades 3 to 8',
  lede: 'The PSSA math test starts in an unusual way. In grades 4 to 8, the first four questions must be answered without a calculator, and once a student confirms they are done, the test will not let them back. After that, any calculator that meets the state policy is allowed, graphing calculators included. Three open-ended questions, each scored out of 4, carry almost a quarter of the points. Below is the Pennsylvania Department of Education&rsquo;s own account of the 2026 to 2027 test, followed by what separates a 4 from a 2 on an open-ended answer, using a problem we wrote.',
  secondaryCta: { href: '#oe', label: 'See a 4-point answer' },
  wa: 'Hello Modern Age Coders, my child in Pennsylvania takes the PSSA math test in May. Could we book a free first class?',
  heroNote: 'Live math since 2020 &middot; 10,000+ students &middot; lessons on Eastern Time',
  spec: [
    ['Test', 'PSSA Mathematics'],
    ['Run by', 'Pennsylvania Department of Education'],
    ['Grades', '3 to 8'],
    ['Core points', '52 per grade'],
    ['Open-ended', '3 core questions, 4 points each'],
    ['Math window, 2027', 'May 3 to 7'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The PSSA (Pennsylvania System of School Assessment) math test is the state&rsquo;s annual test for every student in grades 3 to 8. Each grade has 52 core points: 40 multiple-choice and technology-enhanced items plus three 4-point open-ended questions, over two sections. Grade 3 allows no calculator; grades 4 to 8 open with four calculator-free questions. Math is tested May 3 to 7, 2027. Our live online PSSA lessons at Modern Age Coders run as a group batch or 1-on-1, beginning with the Elementary Maths course for younger children.',

  picks: {
    eyebrow: 'Courses for Pennsylvania students',
    h2: 'Three courses mapped to the PSSA reporting categories',
    lede: 'Each teaches the Pennsylvania Core Standards in the order schools use, with open-ended writing every week.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'PSPR / 01', title: 'PSSA years 3 to 5', note: 'Base ten, fractions and the grade 3 no-calculator test.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'PSPR / 02', title: 'PSSA years 6 to 8', note: 'Ratios, expressions and the grade 8 functions category.' },
      { course: 'algebra-foundations-masterclass', code: 'PSPR / 03', title: 'On to Algebra I', note: 'For eighth graders who will meet the Keystone next.' }
    ]
  },

  sections: [
    {
      id: 'design', tint: 'tint', eyebrow: 'Test design',
      h2: 'How is the PSSA math test built, and what is it worth?',
      lede: 'Every grade from 3 to 8 has the same shape: 40 core multiple-choice and technology-enhanced items worth 40 points, plus 3 core open-ended items worth 4 points each, for 52 core points. Field-test items sit alongside them.',
      body: [
        { kind: 'table', caption: 'PSSA Mathematics operational plan per form, grades 3 to 8 (PDE PSSA Mathematics Test Design, 2025, read 31 October 2026)', head: ['Item type', 'Core', 'Psychometric use', 'Embedded field test', 'Core points'], numCols: [1, 2, 3, 4], rows: [
          ['Multiple choice and technology enhanced', '40', '2', '6', '40'],
          ['Open-ended (4 points each)', '3', '0', '1', '12'],
          ['Total core, as PDE prints it', '40 MC/TE and 3 OE', '', '', '52']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two sections',
          left: [
            'PDE&rsquo;s layout plan has two sections, each with 24 multiple-choice or technology-enhanced items and 2 open-ended items, and an estimated testing time of 78 minutes per section.',
            'Those section counts include the non-scored items, so a child answers more questions than the core set that counts, and cannot tell which ones are field tests.'
          ],
          rightH3: 'Standards-based, not ranked',
          right: [
            'PDE describes the PSSA as &ldquo;a standards-based, criterion-referenced assessment&rdquo;. Children are measured against the Pennsylvania Core Standards, not against each other.',
            'PDE also notes that &ldquo;Individual student scores, provided only to their respective schools&rdquo; are used to help teachers spot students who need more support. Ask the school for your child&rsquo;s report.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + DOCS + '/test-designs/pssa%20mathematics%20test%20design.pdf" rel="noopener" target="_blank">PSSA Mathematics Test Design</a> (2025) and the <a class="ag-inline-link" href="' + PDE + '/pennsylvania-system-of-school-assessment-pssa" rel="noopener" target="_blank">PSSA page</a>, Pennsylvania Department of Education, read 31 October 2026. We are not connected with PDE, its test contractor or any Pennsylvania district.' }
      ]
    },
    {
      id: 'calc', tint: 'deep', eyebrow: 'The calculator gate',
      h2: 'Can you use a calculator on the PSSA math test?',
      lede: 'Not in grade 3 at all. In grades 4 to 8, questions 1 to 4 of section 1 are calculator-free, and after that a calculator is allowed, including scientific and graphing models that meet the state policy.',
      body: [
        { kind: 'table', caption: 'PSSA mathematics calculator rules (PSSA Mathematics Test Design 2025; 2026 Grades 3 to 8 Mathematics Directions for Online Administration; Pennsylvania Calculator Policy, revised October 2023)', head: ['Grade or part', 'Rule'], rows: [
          ['Grade 3', 'Calculators are not allowed on the test'],
          ['Grades 4 to 8, section 1, questions 1 to 4', 'No calculator; once the student confirms these are done, they cannot return to them'],
          ['Grades 4 to 8, the rest of the test', 'Calculators allowed, including scientific and graphing, if they meet the policy; an online calculator is provided'],
          ['Not permitted', 'Phones and other devices, wireless calculators unless disabled, computer algebra systems, calculators that print or talk, sharing'],
          ['Memory', 'Cleared before and after each session by the test administrator, not the student']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The four-question gate',
          left: [
            'The spring 2026 directions say students &ldquo;will be asked to confirm that they have finished answering questions 1 through 4. After confirming, students will not be allowed to return to questions 1 through 4.&rdquo;',
            'So those four answers must be checked before pressing on. We teach a ten-second habit: reread the question, re-estimate the answer, then confirm.'
          ],
          rightH3: 'Bring a familiar calculator, or none',
          right: [
            'The directions add that calculators are not mandatory. A child can use the online calculator, their own, or one from the school, provided it follows the Pennsylvania Calculator Policy.',
            'If your child brings their own, make sure it is one they use every day. A new graphing calculator on test day costs more time than it saves.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + DOCS + '/test-administration-materials/online-dfas/grade%203-8%20math%20online%20dfa.pdf" rel="noopener" target="_blank">Grades 3 to 8 Mathematics Directions for Online Administration</a> (spring 2026) and the <a class="ag-inline-link" href="' + DOCS + '/pennsylvania%20calculator%20policy.pdf" rel="noopener" target="_blank">Pennsylvania Calculator Policy</a>.' }
      ]
    },
    {
      id: 'categories', tint: 'tint', eyebrow: 'Reporting categories',
      h2: 'What is on the PSSA math test in each grade?',
      lede: 'PDE groups the content into four clusters, Numbers and Operations, Algebraic Concepts, Geometry, and Data Analysis and Probability, and gives each grade a percent range by reporting category.',
      body: [
        { kind: 'table', caption: 'PSSA Mathematics blueprint, percent of the core by reporting category (PDE PSSA Mathematics Test Design, 2025, read 31 October 2026)', head: ['Grade', 'Numbers and Operations', 'Algebraic Concepts', 'Geometry', 'Data and Probability'], rows: [
          ['3', 'Base ten 14 to 17%; fractions 14 to 17%', 'Operations and algebraic thinking 26 to 32%', '14 to 17%', 'Measurement and data 26 to 32%'],
          ['4', 'Base ten 18 to 22%; fractions 20 to 25%', 'Operations and algebraic thinking 24 to 28%', '14 to 17%', 'Measurement and data 17 to 21%'],
          ['5', 'Base ten 24 to 28%; fractions 26 to 30%', 'Operations and algebraic thinking 14 to 17%', '14 to 17%', 'Measurement and data 17 to 21%'],
          ['6', 'Number system 18 to 22%; ratios 17 to 21%', 'Expressions and equations 26 to 30%', '14 to 17%', 'Statistics and probability 18 to 22%'],
          ['7', 'Number system 14 to 17%; ratios 24 to 28%', 'Expressions and equations 24 to 28%', '18 to 22%', 'Statistics and probability 14 to 17%'],
          ['8', 'Number system 14 to 17%', 'Expressions and equations 30 to 35%; functions 20 to 25%', '17 to 21%', 'Statistics and probability 14 to 17%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What jumps out',
          left: [
            'Grade 5 is a heavy number year: fractions at 26 to 30 percent and base ten at 24 to 28 percent are its two largest shares. Grade 3 puts as much weight on measurement and data as on operations.',
            'Grade 8 is the algebra year. Expressions and equations reach 30 to 35 percent, and functions appear as their own category for the first time at 20 to 25 percent.'
          ],
          rightH3: 'In points',
          right: [
            'PDE also prints each range in points out of 52. Grade 8 expressions and equations, for example, is 16 to 18 points, while grade 3 measurement and data is 14 to 17 points.',
            'We plan a child&rsquo;s spring around the two largest categories for their grade, and keep the smaller ones ticking over.'
          ] }
      ]
    },
    {
      id: 'oe', tint: 'deep', eyebrow: 'Open-ended questions',
      h2: 'How are PSSA math open-ended questions scored?',
      lede: 'On a 0 to 4 scale. PDE&rsquo;s general guideline describes a 4 as showing a thorough understanding, with correct answers, clear and complete procedures, and a correct explanation where the task asks for one.',
      body: [
        { kind: 'table', caption: 'General Description of Scoring Guidelines for Mathematics Open-Ended Questions, in short (PDE grade 6 scoring guidelines and formula sheet, 2025, read 31 October 2026)', head: ['Score', 'Understanding shown', 'What PDE says the response looks like'], rows: [
          ['4', 'Thorough', 'Correct answers, clear and complete procedures, correct explanation; may contain a minor &ldquo;blemish&rdquo; or omission'],
          ['3', 'General', 'Mostly complete and correct; minor errors or omissions'],
          ['2', 'Partial', 'Somewhat correct; some work incomplete or unclear'],
          ['1', 'Minimal', 'Marginally correct; work undeveloped and rudimentary'],
          ['0', 'None shown', 'No correct answer and insufficient evidence; blank, off-task, other-language and illegible responses are reported separately']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Our grade 7 problem (not a PSSA item).</b> At a school fun run, Dev runs 3 laps every 4 minutes at a steady pace. Part A: how long will 9 laps take? Part B: write an equation for the time t in minutes for n laps. Part C: Priya runs 25% faster than Dev. How many laps does she run in 12 minutes? Explain.',
          '<b>Part A.</b> 9 laps is 3 groups of 3 laps, so 3 x 4 = 12 minutes.',
          '<b>Part B.</b> Each lap takes 4/3 minutes, so t = (4/3)n. Check with Part A: (4/3) x 9 = 12.',
          '<b>Part C.</b> Dev runs 9 laps in 12 minutes. 25% faster means 25% more laps in the same time: 9 x 1.25 = 11.25 laps. Priya runs 11 1/4 laps in 12 minutes.',
          '<b>Three responses, judged against PDE&rsquo;s general guideline as we read it.</b> Response 1 gives 12, t = (4/3)n and 11.25 with every step and the sentence about &ldquo;more laps in the same time&rdquo;: thorough, a 4. Response 2 gets Parts A and B right but writes 9.6 laps in Part C by dividing instead of multiplying, with working shown: general understanding, likely a 3. Response 3 writes only 12, 4/3 and 11, with no work: partial at best, likely a 2. Real scoring uses item-specific rubrics; these judgements are our teaching illustration.'
        ] },
        { kind: 'p', mt: true, html: 'The lesson from Response 3 is the one we repeat most: the guideline rewards &ldquo;clear and complete mathematical procedures shown&rdquo;, so a bare answer cannot reach the top score even when the number is right.' }
      ]
    },
    {
      id: 'window', tint: 'tint', eyebrow: 'Spring 2027',
      h2: 'When is the PSSA math test in 2027?',
      lede: 'Mathematics is scheduled for May 3 to 7, 2027, with an optional second week of May 10 to 14 for math, science and make-ups. ELA comes first, the week before.',
      body: [
        { kind: 'table', caption: 'PSSA testing windows, 2026 to 2027 school year (PDE PSSA page, read 31 October 2026)', head: ['Assessment', 'Dates', 'Grades'], rows: [
          ['English Language Arts', 'April 26 to 30, 2027', '3 to 8'],
          ['Mathematics, Science and Make-ups', 'May 3 to 7, 2027', '3 to 8'],
          ['Mathematics, Science, and Make-ups (Optional)', 'May 10 to 14, 2027', '3 to 8']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The make-up deadline',
          left: [
            'PDE states that the PSSA administration &ldquo;needs to be completed by the end of the make-up window, which concludes May 14, 2027.&rdquo; Schools pick their own days within these weeks.',
            'PDE also notes that Early Reporting is not available in the 2026 to 2027 school year, so results arrive on the normal schedule.'
          ],
          rightH3: 'Firefly during the year',
          right: [
            'The same PDE page lists Firefly windows for ELA, mathematics and science from October 5, 2026 to April 16, 2027. Some schools use it during the year; ask your school whether it does.',
            'For planning, count back from May 3, 2027. Our five-week plan below is built on that date.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + PDE + '/pennsylvania-system-of-school-assessment-pssa" rel="noopener" target="_blank">Pennsylvania System of School Assessment (PSSA)</a>, testing windows section, PDE.' }
      ]
    },
    {
      id: 'levels', tint: 'deep', eyebrow: 'Results',
      h2: 'What do PSSA math scores Advanced, Proficient, Basic and Below Basic mean?',
      lede: 'They are the four performance levels set by the State Board of Education. Proficient and Advanced mean a student has met or gone beyond the grade&rsquo;s standards.',
      body: [
        { kind: 'p', html: 'PDE&rsquo;s PSSA page says that, under the Pennsylvania School Code, the State Board of Education approved &ldquo;specific criteria for advanced, proficient, basic and below basic levels of performance.&rdquo; Each child&rsquo;s scaled score falls into one of those four bands for the grade.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Read the category scores', p: 'The report breaks results down by reporting category, so you can see whether the gap is in fractions, expressions or data.' },
          { h3: 'Compare to the blueprint', p: 'A weak result in a category worth 26 to 32 percent matters more than one in a 14 to 17 percent category.' },
          { h3: 'Talk to the teacher', p: 'PDE says scores help teachers identify students who may need extra support. That conversation is the useful next step.' }
        ] },
        { kind: 'p', mt: true, html: 'We do not print scaled-score cut points here. The only cut score table we found on PDE&rsquo;s site is undated and still lists a grade 11 PSSA, which Pennsylvania replaced with the Keystone Exams, so we would rather not quote it.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice',
      h2: 'Twelve PSSA-style math practice questions, grades 3 to 8',
      lede: 'Ours, two per grade, each tagged with the PDE reporting category it practises. The first in each grade suits the calculator-free start.',
      body: [
        { kind: 'table', caption: 'Original practice (ours, not PDE items), with answers', head: ['Grade', 'Question', 'Category', 'Answer'], rows: [
          ['3', 'What is 9 x 6?', 'B-O Operations and Algebraic Thinking', '54'],
          ['3', 'A movie starts at 2:15 and lasts 1 hour 50 minutes. When does it end?', 'D-M Measurement and Data', '4:05'],
          ['4', 'Write 0.7 as a fraction and as a number of hundredths.', 'A-F Fractions', '7/10; 70 hundredths'],
          ['4', 'A rectangle has perimeter 30 cm and length 9 cm. Find its width.', 'D-M Measurement and Data', '6 cm'],
          ['5', 'Compute 2 1/2 + 1 3/4.', 'A-F Fractions', '4 1/4'],
          ['5', 'Divide 1,248 by 6.', 'A-T Base Ten', '208'],
          ['6', 'What is the absolute value of -14?', 'A-N Number System', '14'],
          ['6', 'Find the mean of 4, 7, 9, 12 and 13.', 'D-S Statistics and Probability', '9'],
          ['7', 'Simplify 3(2x - 5) + 4x.', 'B-E Expressions and Equations', '10x - 15'],
          ['7', 'A circle has diameter 10 cm. Find its circumference to the nearest tenth.', 'C-G Geometry', '31.4 cm'],
          ['8', 'Write 0.000045 in scientific notation.', 'A-N Number System', '4.5 x 10^-5'],
          ['8', 'A function rule is y = -3x + 4. Find y when x = -2, and say whether the function is increasing.', 'B-F Functions', '10; decreasing']
        ] },
        { kind: 'p', mt: true, html: 'PDE publishes Item and Scoring Samplers for each grade, with released questions and scoring notes, on its <a class="ag-inline-link" href="' + PDE + '/pennsylvania-system-of-school-assessment-pssa" rel="noopener" target="_blank">PSSA page</a>, along with the grade-level formula sheets. We use the samplers for rehearsal and teach first with problems like these.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan',
      h2: 'A five-week PSSA math plan to May 3, 2027',
      lede: 'Our plan for the run-in to the math window, after the year&rsquo;s teaching is mostly done.',
      body: [
        { kind: 'ol', items: [
          '<b>Week 1: one sampler, scored by category.</b> We use a recent PDE Item and Scoring Sampler for the grade and sort errors by reporting category.',
          '<b>Week 2: the two heaviest categories.</b> From the blueprint table: base ten and fractions in grade 5, expressions and equations plus functions in grade 8, and so on.',
          '<b>Week 3: open-ended answers.</b> Two four-point problems a lesson, written in parts with labelled working, judged against PDE&rsquo;s general guideline.',
          '<b>Week 4: the calculator gate.</b> Four calculator-free questions to start every session, checked and confirmed, then the rest with the child&rsquo;s own calculator and the grade&rsquo;s formula sheet.',
          '<b>Week 5: one full section, then rest.</b> A 78-minute rehearsal of a section, then a lighter final few days before May 3.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Grade by grade',
    h2: 'Where PSSA points are won in each grade',
    lede: 'Our reading of PDE&rsquo;s blueprint percentages.',
    table: { caption: 'The largest categories by grade (weights from PDE; priorities ours)', head: ['Grade', 'Biggest categories', 'Our first focus'], rows: [
      ['3', 'Operations and algebraic thinking; measurement and data', 'Multiplication facts and telling time'],
      ['4', 'Operations and algebraic thinking; fractions', 'Equivalent fractions and multi-step word problems'],
      ['5', 'Fractions; base ten', 'Adding fractions and decimal place value'],
      ['6', 'Expressions and equations', 'Writing and solving one-variable equations'],
      ['7', 'Ratios; expressions and equations', 'Proportional relationships and percent'],
      ['8', 'Expressions and equations; functions', 'Linear equations, systems and function rules']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask for one open-ended answer your child wrote in class. If it is a bare number, that is the quickest place to gain points before May.',
      'Grade 3 has no calculator at all, so daily fact practice pays off directly.'
    ] },
    right: { h3: 'For students', ps: [
      'On questions 1 to 4, check each one before you confirm. You cannot go back.',
      'On open-ended questions, label Part A, Part B and Part C, and show every step even when it feels obvious.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for Pennsylvania students',
    lede: 'From the first PSSA in grade 3 to the Algebra I year.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Grades 3 to 5', courses: [
        { code: 'PSPR / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Every grade 3 to 5 reporting category.' },
        { code: 'PSPR / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'For grade 3 and the four-question start.' },
        { code: 'PSPR / E / 03', slug: 'early-math-foundations', title: 'Early math', blurb: 'Ages 4 to 7, before testing begins.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'PSPR / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Number system to functions.' },
        { code: 'PSPR / M / 02', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'For students who want harder problems.' },
        { code: 'PSPR / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Patterns and functions in Python.' }
      ] },
      { num: 'III', h3: 'After the PSSA', sub: 'Algebra I and beyond', courses: [
        { code: 'PSPR / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Toward the Keystone Algebra I.' },
        { code: 'PSPR / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry, Algebra II and more.' },
        { code: 'PSPR / H / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'Later in high school.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons that fit a Pennsylvania school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school ET', l: 'Weekday lessons in step with the class.' },
      { time: 'Weekends', l: 'Section rehearsals in April.' },
      { time: '1-on-1', l: 'Open-ended answers rewritten to a 4.' }
    ],
    cells: [
      { h3: 'Category-mapped', p: 'Lessons follow PDE&rsquo;s reporting categories.' },
      { h3: 'Four-question start', p: 'Calculator-free warm-ups every session.' },
      { h3: 'Open-ended weekly', p: 'Written in parts, judged to the guideline.' },
      { h3: 'Formula sheets', p: 'The grade&rsquo;s own sheet in class.' },
      { h3: 'Samplers late', p: 'PDE&rsquo;s released items for rehearsal.' },
      { h3: 'Two formats', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'From our students',
  projectsLede: 'Older students sometimes build their math into code. Look at <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parent reviews from Google, as written.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly fees in US dollars with nothing to sign for the year; Pennsylvania families often begin in March and finish when the May window closes.',
    free: ['A free first class', 'Bring an open-ended answer from school', 'No card details'],
    group: ['Fifteen to twenty students', 'The same teacher throughout', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Timed to the school&rsquo;s May days', 'Flexible hours']
  },

  faq: {
    eyebrow: 'Pennsylvania families ask',
    h2: 'PSSA math: common questions',
    items: [
      { q: 'When is the PSSA math test in 2027?', a: 'PDE schedules mathematics for May 3 to 7, 2027, with an optional week of May 10 to 14 for math, science and make-ups. ELA is tested first, April 26 to 30, 2027.' },
      { q: 'How many questions are on the PSSA math test?', a: 'Each grade has 52 core points: 40 multiple-choice or technology-enhanced items worth a point each, and 3 open-ended items worth 4 points each. Field-test items are added, so students answer more than that.' },
      { q: 'Can you use a calculator on the PSSA math test?', a: 'Not in grade 3. In grades 4 to 8 the first four questions of section 1 are calculator-free, and after that calculators are allowed, including scientific and graphing ones that meet the Pennsylvania Calculator Policy.' },
      { q: 'How long is the PSSA math test?', a: 'PDE\'s test design estimates 78 minutes for each of the two sections. Schools set the exact schedule within the May window.' },
      { q: 'How are PSSA open-ended math questions scored?', a: 'On a 0 to 4 scale. PDE\'s general guideline gives a 4 for thorough understanding with correct answers, complete procedures shown and a correct explanation, down to 1 for minimal understanding.' },
      { q: 'What does Proficient mean on the PSSA?', a: 'Proficient is one of four performance levels approved by the State Board of Education: Advanced, Proficient, Basic and Below Basic. Proficient and Advanced mean the student met or exceeded the grade\'s standards.' },
      { q: 'What is on the grade 8 PSSA math test?', a: 'Expressions and equations is the largest category at 30 to 35 percent, then functions at 20 to 25 percent, geometry at 17 to 21 percent, and the number system and statistics at 14 to 17 percent each.' },
      { q: 'Where can I find PSSA math practice?', a: 'PDE posts Item and Scoring Samplers for each grade and the grade-level formula sheets on its PSSA page. The questions on this page are our own extra practice, tagged by reporting category.' },
      { q: 'Is the PSSA taken on the computer?', a: 'PDE publishes Directions for Online Administration for the grades 3 to 8 math test, and an online calculator is provided during testing. Ask your school whether any students test on paper.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All lessons run on Eastern Time.' },
      { q: 'Are you connected with PDE?', a: 'No. Modern Age Coders is an independent online school with no connection to the Pennsylvania Department of Education, its test contractor or any district. We quote PDE\'s public documents and link to them.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Grade pages and Pennsylvania pages.',
    items: [
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'The calculator-free PSSA year.' },
      { href: '/online-math-tutor-5th-grade', label: 'Fifth grade math tutoring', p: 'Fractions and base ten.' },
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'Equations and functions.' },
      { href: '/middle-school-math-placement-test-prep', label: 'Middle school math placement', p: 'For the move into Algebra I.' },
      { href: '/coding-and-ai-classes-in-pennsylvania', label: 'Coding and AI in Pennsylvania', p: 'Our Pennsylvania page.' },
      { href: '/best-coding-classes-for-kids-in-philadelphia', label: 'Philadelphia classes', p: 'For families in Philadelphia.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send a photo of one open-ended math answer from school. In the first class the teacher takes it from its current level toward a 4, step by step.',
    readFirst: 'Read about <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or see all <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'Our teachers teach from India at times locked to Eastern Time, after Pennsylvania school hours or on weekends. WhatsApp reaches us fastest.',
    formNote: 'The first class is free, and booking it needs no card.'
  },

  footer: {
    cols: [
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-4th-grade', label: 'Grade 4 math' },
        { href: '/online-math-tutor-6th-grade', label: 'Grade 6 math' },
        { href: '/online-math-tutor-7th-grade', label: 'Grade 7 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'Pennsylvania and the US', links: [
        { href: '/coding-and-ai-classes-in-pennsylvania', label: 'Pennsylvania' },
        { href: '/best-coding-classes-for-kids-in-philadelphia', label: 'Philadelphia' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Four questions, then the gate'
  },

  personalityCss: `
.ag-root.ag-pspr .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-pspr .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-pspr .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pspr .ag-table td.ag-num { font-variant-numeric: tabular-nums; text-align: center; }
.ag-root.ag-pspr .ag-steps li { padding-bottom: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Pennsylvania Department of Education, read raw 31 October 2026: PSSA page (grades, criterion-referenced, performance levels, 2026 to 2027 windows, make-up deadline, no early reporting, Firefly windows); PSSA Mathematics Test Design 2025 (operational plan, reporting categories, blueprint percents and points, grade 3 no calculator, section layout and times); 2026 Grades 3 to 8 Mathematics Directions for Online Administration (questions 1 to 4 calculator-free and locked, calculators allowed afterwards); Pennsylvania Calculator Policy (October 2023); grade 6 scoring guidelines and formula sheet 2025.',
    localProject: 'Our grade 7 four-point open-ended example: 3 laps every 4 minutes, 9 laps in 12 minutes, t = (4/3)n, and 25 percent faster giving 11 1/4 laps in 12 minutes, with three sample responses judged against PDE\'s general guideline as we read it. Our twelve-item practice set by reporting category, five-week plan and grade ladder. Lesson family: four-point open-ended responses.',
    requiredMentions: ['questions 1 to 4 of section 1 are calculator-free', 'After confirming, students will not be allowed to return to questions 1 through 4.', 'specific criteria for advanced, proficient, basic and below basic levels of performance.', 'needs to be completed by the end of the make-up window, which concludes May 14, 2027.', 'a standards-based, criterion-referenced assessment', 'Expressions and equations 30 to 35%; functions 20 to 25%', 'Mathematics, Science, and Make-ups (Optional)', 'Priya runs 11 1/4 laps in 12 minutes', 'Individual student scores, provided only to their respective schools'],
    sources: [
      { claim: 'Pennsylvania System of School Assessment (PSSA) page, PDE.', url: PDE + '/pennsylvania-system-of-school-assessment-pssa' },
      { claim: 'PSSA Mathematics Test Design, 2025.', url: DOCS + '/test-designs/pssa%20mathematics%20test%20design.pdf' },
      { claim: 'Grades 3 to 8 Mathematics Directions for Online Administration, spring 2026.', url: DOCS + '/test-administration-materials/online-dfas/grade%203-8%20math%20online%20dfa.pdf' },
      { claim: 'Pennsylvania Calculator Policy, revised October 2023.', url: DOCS + '/pennsylvania%20calculator%20policy.pdf' },
      { claim: 'Grade 6 mathematics scoring guidelines and formula sheet, 2025.', url: DOCS + '/scoring-guidelines-and-formula-sheets/mathematics/grade%206%20-%20math%20scoring%20guidelines%20and%20formula%20sheets.pdf' }
    ],
    rejectedClaims: [
      'PSSA scaled-score cut points: the PDE "PSSA and PSSA-M Performance Level Cut Scores" PDF is undated and lists a grade 11 PSSA; not printed.',
      'PSSA scores used for gifted screening and placement (our research note): not stated in any PDE source read; not printed.',
      'Firefly as a replacement for the PSSA: PDE lists only its windows; nothing more claimed.',
      'Scores for our three sample responses are our teaching illustration, labelled as such, not official scoring.',
      'Reproducing Item and Scoring Sampler questions: refused; linked instead.',
      'Score or level promises: refused. Affiliation with PDE or its contractor: none.'
    ]
  }
};
