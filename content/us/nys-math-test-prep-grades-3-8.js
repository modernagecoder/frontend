'use strict';
// NYS math test prep, grades 3 to 8 (ag- state-test door; UK and US exams cluster, row US016).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from the
// New York State Education Department (nysed.gov, nysedregents.org); copies in
// keyword-research-2026-09/uk-us-gap/src/nys-math-test-prep-grades-3-8/:
//  - Educator Guide to the 2025 Grades 3–8 Mathematics Tests (the current guide linked from NYSED's manuals page):
//    "consist of two sessions that are administered over two days"; untimed, "as much time as necessary within the confines
//    of the regular school day"; average time table G3 55–65 / 60–70 minutes, G4 65–75 / 65–75, G5 80–90 / 70–80, G6 to G8
//    80–90 / 75–85 (dashes written "to" here); test design G3 S1 25 MC, S2 5 MC + 3 one-credit + 4 two-credit + 1 three-credit,
//    total 38 questions; G4 to G5 S1 30, S2 14, total 44; G6 S1 30, S2 16, total 46; G7 to G8 S1 32, S2 16, total 48;
//    "Embedded field test questions are included in the number of multiple-choice questions in Session 1"; "Session 1
//    consists of multiple-choice questions."; calculators: none in grades 3 to 5 or grade 6 session 1, four-function with a
//    square root key or scientific in grade 6 session 2, scientific in grades 7 to 8, "Graphing calculators are NOT
//    permitted."; rulers (grade 3) and rulers and protractors (grades 4 to 8); reference sheets for grades 5 to 8;
//    domain blueprints (G3 OA 31–43%, NBT 7–14%, NF 18–29%, MD 21–32%, G 2–8%; G4 15–25, 20–30, 20–30, 9–14, 13–23; G5 OA
//    "Post", NBT 25–35, NF 34–44, MD 22–32, G 2–7; G6 RP 21–30, NS 17–26, EE 25–43, G 14–24, SP "Post"; G7 RP 24–33, NS
//    16–25, EE 26–39, G 2–7, SP 12–21; G8 NS 2–9, EE 28–41, F 16–25, G 28–41, SP 4–11); "Pre-Test standard
//    (September-to-April/May)" and "Post-Test standard (May-to-June) from the prior grade level"; rubrics for 1-, 2- and
//    3-credit questions; the 3-credit question "may also assess student reasoning and the ability to critique the arguments
//    of others"; levels: Level 3 "proficient in standards for their grade"; Level 2 "considered on track to meet current
//    New York high school graduation requirements but are not yet proficient"; grade focus statements (grade 6 five areas).
//  - Final Dates for the 2026–27 Elementary- and Intermediate-level Testing (memo, October 2026): grades 3 to 8 ELA and
//    math "Monday, April 5 - Friday, May 14" (2027); schools "will select two consecutive days within the administration
//    window"; "Schools must test the entire grade on the same two consecutive school days for each subject"; scoring
//    completed by Sunday, May 23.
//  - Computer-Based Testing page: "In Spring 2026, students in Grades 3-8 will be required to participate in CBT."
//  - 2026 School Administrator's Manual: grades 6, 7 and 8 students in a commencement-level math course "who will be taking
//    a Regents Examination in mathematics in June 2026 may be exempted by the school from the respective Grade 6, 7, or 8
//    Mathematics Test."
//  - nysedregents.org/elementary-intermediate.html: "Grades 3-8 Mathematics Released Test Questions" (ei/ei-math.html).
// No released item reproduced; the page links to NYSED's released questions. Totals quoted as NYSED prints them; no credit
// totals computed.
// Our own material, labelled: the grade 6 three-credit worked example (trail mix 3 : 5, 24 cups, 9 cups nuts and 15 raisins,
// then the critique of a classmate's 3 + 5 = 8 answer), the credit-by-credit commentary, the twelve-item practice set with
// answers, the April 2027 plan.
// Lesson family: showing work that earns partial credit (NYS 2- and 3-credit constructed response).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const OSA = 'https://www.nysed.gov/state-assessment';
const FILES = 'https://www.nysed.gov/sites/default/files/programs/state-assessment';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'NYS MATH TEST', blurb: 'The New York State grades 3 to 8 math tests from the NYSED educator guide: sessions, question counts, calculator rules, the April 5 to May 14, 2027 window and original practice.' },
  slug: 'nys-math-test-prep-grades-3-8',
  code: 'ntg',
  accent: '#823A22',
  accentRationale: 'NYS grades 3 to 8 math: a brick red #823A22 as allocated, 7.69:1 on paper #FBF8F2 and 6.61:1 on the deepest tint, a warm New York brick kept apart from the Texas pages',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-classes-in-new-york', name: 'New York' }],
  routeLabel: 'NYS math test prep, grades 3 to 8',
  title: 'NYS Math Test Prep, Grades 3 to 8: The 2027 State Test',
  description: 'NYS math test prep for grades 3 to 8: sessions, question counts, calculator rules and the April 5 to May 14, 2027 window, from NYSED, with original practice.',
  ogDescription: 'Two sessions on two days, no time limit, and constructed-response questions worth up to 3 credits. What NYSED publishes about the grades 3 to 8 math tests, and how to prepare.',
  twitterDescription: 'The NYS grades 3 to 8 math tests from NYSED, with original practice.',
  pageName: 'NYS Math Test Prep, Grades 3 to 8',
  webPageDescription: 'A guide for New York families to the New York State Grades 3 to 8 Mathematics Tests, built from the NYSED educator guide, the 2026 to 2027 testing schedule memo and computer-based testing pages, with an original worked constructed-response example and practice set.',
  courseDescription: 'Live online math classes for New York students in grades 3 to 8, taught to the Next Generation Mathematics Learning Standards, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'NYS math test, grades 3 to 8',
  navLinks: [
    { href: '#design', label: 'Test design' },
    { href: '#time', label: 'Time and tools' },
    { href: '#blueprint', label: 'Blueprint' },
    { href: '#credits', label: 'Credits' },
    { href: '#window', label: '2027 window' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New York &middot; Grades 3 to 8 &middot; From NYSED&rsquo;s own guide',
  h1: 'NYS math test prep for grades 3 to 8',
  lede: 'New York&rsquo;s grades 3 to 8 math test is unusual in three ways. It has no time limit. It is split across two days. And its second session asks children to write answers that are scored for their working, with some questions worth three credits. That last point decides how to prepare: a child who gets the right number but cannot show how loses credit that a clear explanation would have kept. This guide takes the structure straight from the New York State Education Department and then shows, with our own problem, what a full-credit answer looks like.',
  secondaryCta: { href: '#credits', label: 'See a 3-credit answer' },
  wa: 'Hello Modern Age Coders, my child in New York has the state math test in the spring. Could we book a free first class?',
  heroNote: 'Live math since 2020 &middot; 10,000+ students &middot; lessons on Eastern Time',
  spec: [
    ['Test', 'NYS Grades 3 to 8 Mathematics'],
    ['Run by', 'NYSED'],
    ['Sessions', 'Two, on two days'],
    ['Time limit', 'None'],
    ['Spring 2027 window', 'April 5 to May 14'],
    ['Format', 'Computer-based'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The New York State Grades 3 to 8 Mathematics Tests are NYSED&rsquo;s annual math tests, aligned to the Next Generation Mathematics Learning Standards and taken on computer in two untimed sessions on two consecutive days. Grade 3 has 38 questions and grades 7 and 8 have 48. The 2027 window is April 5 to May 14. Modern Age Coders teaches NYS math live online, in a batch or 1-on-1, through our Elementary Maths course and middle school math classes.',

  picks: {
    eyebrow: 'Courses for New York students',
    h2: 'Three courses that teach the math the state test checks',
    lede: 'Each follows the Next Generation standards closely enough that the test feels like a normal week.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'NTG / 01', title: 'Elementary math, grades 3 to 5', note: 'Multiplication, fractions and area, explained and written up.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'NTG / 02', title: 'Middle school math, grades 6 to 8', note: 'Ratios, expressions, equations, functions and geometry.' },
      { course: 'algebra-foundations-masterclass', code: 'NTG / 03', title: 'Algebra foundations', note: 'For accelerated students heading to Algebra I in grade 8.' }
    ]
  },

  sections: [
    {
      id: 'design', tint: 'tint', eyebrow: 'Test design',
      h2: 'How many questions are on the NYS math test for each grade?',
      lede: 'From 38 in grade 3 to 48 in grades 7 and 8, split across two sessions. NYSED&rsquo;s educator guide gives the exact mix.',
      body: [
        { kind: 'table', caption: 'NYS Grades 3 to 8 Mathematics test design (Educator Guide to the 2025 Grades 3 to 8 Mathematics Tests, NYSED, read 31 October 2026)', head: ['Grade', 'Session 1 (multiple choice)', 'Session 2 multiple choice', '1-credit CR', '2-credit CR', '3-credit CR', 'Total questions'], numCols: [1, 2, 3, 4, 5, 6], rows: [
          ['3', '25', '5', '3', '4', '1', '38'],
          ['4', '30', '5', '3', '5', '1', '44'],
          ['5', '30', '5', '3', '5', '1', '44'],
          ['6', '30', '6', '3', '6', '1', '46'],
          ['7', '32', '6', '3', '6', '1', '48'],
          ['8', '32', '6', '3', '6', '1', '48']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Session 1 and session 2',
          left: [
            'NYSED is plain about the split: &ldquo;Session 1 consists of multiple-choice questions.&rdquo; Session 2 mixes a few more multiple-choice questions with every constructed-response question, CR in the table above.',
            'Session 1&rsquo;s count includes embedded field-test questions that do not count toward the score. NYSED notes it will not be apparent to students which ones those are, so every question deserves full effort.'
          ],
          rightH3: 'Computer-based since 2026',
          right: [
            'NYSED&rsquo;s computer-based testing page states that in spring 2026 students in grades 3 to 8 were required to take part in computer-based testing. Children type and draw their constructed-response work in the testing platform.',
            'NYSED&rsquo;s question sampler previews the online tools, so a child meets the ruler, protractor and calculator tools before test day.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + FILES + '/3-8-educator-guide-math-2025.pdf" rel="noopener" target="_blank">Educator Guide to the 2025 Grades 3 to 8 Mathematics Tests</a> and <a class="ag-inline-link" href="' + OSA + '/computer-based-testing-cbt" rel="noopener" target="_blank">Computer-Based Testing</a>, NYSED, read 31 October 2026. We are not connected with NYSED or any New York district.' }
      ]
    },
    {
      id: 'time', tint: 'deep', eyebrow: 'Time and tools',
      h2: 'How long is the NYS math test, and are calculators allowed?',
      lede: 'There is no time limit. NYSED publishes average times for planning, and its calculator rules change by grade and even by session.',
      body: [
        { kind: 'table', caption: 'Average time to complete each session (NYSED educator guide; the tests themselves are untimed)', head: ['Grade', 'Session 1', 'Session 2', 'Calculator'], rows: [
          ['3', '55 to 65 minutes', '60 to 70 minutes', 'None'],
          ['4', '65 to 75 minutes', '65 to 75 minutes', 'None'],
          ['5', '80 to 90 minutes', '70 to 80 minutes', 'None'],
          ['6', '80 to 90 minutes', '75 to 85 minutes', 'None in session 1; four-function with square root key, or scientific, in session 2'],
          ['7', '80 to 90 minutes', '75 to 85 minutes', 'Scientific, both sessions'],
          ['8', '80 to 90 minutes', '75 to 85 minutes', 'Scientific, both sessions']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Untimed, within the school day',
          left: [
            'Students get &ldquo;as much time as necessary within the confines of the regular school day&rdquo; for each session, according to the educator guide. The averages above are there so schools and families can plan.',
            'Untimed does not mean unlimited stamina. A grade 5 student working steadily faces well over an hour of math in one sitting, so we build up to full-length practice sessions.'
          ],
          rightH3: 'Rulers, protractors and reference sheets',
          right: [
            'Grade 3 students must have a ruler for both sessions; grades 4 to 8 need a ruler and a protractor. The computer platform provides both tools. Graphing calculators are not permitted at any grade.',
            'Students in grades 5 to 8 receive a grade-level mathematics reference sheet for both sessions, and NYSED recommends teachers let students get familiar with it during the year. We use the real sheet in lessons from the autumn.'
          ] },
        { kind: 'source', html: 'NYSED publishes the <a class="ag-inline-link" href="' + OSA + '/grades-5-8-mathematics-reference-sheets" rel="noopener" target="_blank">Grades 5 to 8 Mathematics Reference Sheets</a> in English and several other languages.' }
      ]
    },
    {
      id: 'blueprint', tint: 'tint', eyebrow: 'Blueprint',
      h2: 'What math is on the NYS test at each grade?',
      lede: 'NYSED gives a percent range for each domain of the Next Generation standards. Some domains read &ldquo;Post&rdquo;: they are taught after the test and assessed the following year.',
      body: [
        { kind: 'table', caption: 'Domain-level blueprint, percent ranges (NYSED educator guide, read 31 October 2026)', head: ['Grade', 'Largest domains', 'Smaller domains'], rows: [
          ['3', 'Operations and Algebraic Thinking 31 to 43%; Measurement and Data 21 to 32%', 'Fractions 18 to 29%; Base Ten 7 to 14%; Geometry 2 to 8%'],
          ['4', 'Base Ten 20 to 30%; Fractions 20 to 30%', 'Operations and Algebraic Thinking 15 to 25%; Geometry 13 to 23%; Measurement and Data 9 to 14%'],
          ['5', 'Fractions 34 to 44%; Base Ten 25 to 35%', 'Measurement and Data 22 to 32%; Geometry 2 to 7%; Operations and Algebraic Thinking Post'],
          ['6', 'Expressions, Equations and Inequalities 25 to 43%; Ratios 21 to 30%', 'Number System 17 to 26%; Geometry 14 to 24%; Statistics and Probability Post'],
          ['7', 'Expressions, Equations and Inequalities 26 to 39%; Ratios 24 to 33%', 'Number System 16 to 25%; Statistics and Probability 12 to 21%; Geometry 2 to 7%'],
          ['8', 'Expressions, Equations and Inequalities 28 to 41%; Geometry 28 to 41%', 'Functions 16 to 25%; Statistics and Probability 4 to 11%; Number System 2 to 9%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Pre-test and post-test standards',
          left: [
            'Because the tests sit in April and May, NYSED splits each grade&rsquo;s standards. Every question is aligned to a &ldquo;Pre-Test standard (September-to-April/May)&rdquo; for the grade or a &ldquo;Post-Test standard (May-to-June)&rdquo; from the grade before.',
            'So a grade 6 test can include grade 5 material taught last June, such as the grade 5 operations and algebraic thinking standards, which are post-test in grade 5. A child who missed the end of last year can meet it again here.'
          ],
          rightH3: 'What each grade focuses on',
          right: [
            'The guide lists focus areas for each grade. Grade 6, for example, has five: ratio and rate, division of fractions and negative numbers, expressions and equations, area, surface area and volume, and simple probability and statistical thinking.',
            'Grade 8 is the geometry-heavy year: up to 41 percent, the same ceiling as expressions and equations, with the Pythagorean Theorem and transformations at its center.'
          ] }
      ]
    },
    {
      id: 'credits', tint: 'deep', eyebrow: 'How credit is earned',
      h2: 'How are NYS math constructed-response questions scored?',
      lede: 'By rubric. A 1-credit answer is scored only for the final answer; 2-credit and 3-credit answers are scored for the work as well.',
      body: [
        { kind: 'table', caption: 'What each kind of question asks for (NYSED educator guide, rubrics and question formats, read 31 October 2026)', head: ['Question type', 'What earns credit'], rows: [
          ['Multiple choice, 1 credit', 'The correct choice of four; wrong choices are based on plausible missteps'],
          ['Constructed response, 1 credit', 'The final answer only; work may be shown but is not scored'],
          ['Constructed response, 2 credits', 'The task completed with work shown or the answer explained; 1 credit for partial understanding'],
          ['Constructed response, 3 credits', 'Two or more tasks or a longer problem, with work or explanation; may ask the student to critique someone else&rsquo;s reasoning']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Our grade 6 problem, written in the style of a 3-credit question.</b> A trail mix uses nuts and raisins in the ratio 3 : 5. Part A: how many cups of each are in 24 cups of mix? Part B: Jordan says &ldquo;3 + 5 = 8, so a third of the mix is nuts.&rdquo; Is Jordan correct? Explain.',
          '<b>Part A, the reasoning.</b> The ratio 3 : 5 makes 8 equal parts. 24 / 8 = 3 cups per part. Nuts: 3 x 3 = 9 cups. Raisins: 5 x 3 = 15 cups. Check: 9 + 15 = 24.',
          '<b>Part B, the critique.</b> Jordan is not correct. Nuts are 3 of the 8 parts, so they are 3/8 of the mix, not 1/3. In 24 cups, 1/3 would be 8 cups, but we found 9 cups of nuts.',
          '<b>Where the credits come from, as we teach it.</b> The correct amounts with the part-size step shown cover the first task; a clear statement that Jordan is wrong, with 3/8 compared against 1/3, covers the second. Correct numbers with no working, or &ldquo;No, Jordan is wrong&rdquo; with no reason, leave credit on the table.'
        ] },
        { kind: 'p', mt: true, html: 'NYSED&rsquo;s rubric also gives zero credit to &ldquo;a correct solution obtained using an obviously incorrect procedure&rdquo;. A lucky right answer is not enough, which is the best argument we know for teaching children to write down how they think.' }
      ]
    },
    {
      id: 'levels', tint: 'tint', eyebrow: 'Results',
      h2: 'What do NYS math test levels 1 to 4 mean?',
      lede: 'Each child is placed in one of four performance levels. Level 3 is proficient.',
      body: [
        { kind: 'table', caption: 'NYS performance level definitions (NYSED educator guide, read 31 October 2026)', head: ['Level', 'NYSED&rsquo;s definition, in short'], rows: [
          ['Level 4', 'Excels in standards for the grade: more than sufficient for the grade&rsquo;s expectations'],
          ['Level 3', 'Proficient in standards for the grade: sufficient for the grade&rsquo;s expectations'],
          ['Level 2', 'Partially proficient; on track for current high school graduation requirements but not yet proficient'],
          ['Level 1', 'Below proficient; knowledge and skills insufficient for the grade']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading a Level 2',
          left: [
            'NYSED&rsquo;s own wording for Level 2 says these students are &ldquo;considered on track to meet current New York high school graduation requirements but are not yet proficient&rdquo;. It is a gap to close, not a verdict.',
            'NYSED posts sample student score reports for each year, so you can see what the report will look like before it arrives.'
          ],
          rightH3: 'Accelerated students',
          right: [
            'NYSED&rsquo;s 2026 School Administrator&rsquo;s Manual lets a school exempt grade 6, 7 or 8 students who are in a commencement-level math course and taking a math Regents exam in June from that grade&rsquo;s state math test.',
            'If your child is in Algebra I in middle school, ask the school which test they will sit.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + FILES + '/3-8-educator-guide-math-2025.pdf" rel="noopener" target="_blank">NYSED educator guide</a> and <a class="ag-inline-link" href="' + FILES + '/ei-sam-2026.pdf" rel="noopener" target="_blank">2026 School Administrator&rsquo;s Manual</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'window', tint: 'deep', eyebrow: 'Spring 2027',
      h2: 'When is the NYS math test in 2027?',
      lede: 'Between Monday, April 5 and Friday, May 14, 2027. Each school picks two consecutive days in that window for each grade.',
      body: [
        { kind: 'table', caption: '2026 to 2027 grades 3 to 8 testing schedule (NYSED memo, Final Dates for the 2026 to 2027 Elementary- and Intermediate-level Testing, October 2026)', head: ['Item', 'What NYSED sets'], rows: [
          ['Administration window', 'Monday, April 5 to Friday, May 14, 2027 (grades 3 to 8 ELA and math, grades 5 and 8 science)'],
          ['Days per subject', 'Two consecutive school days chosen by the school'],
          ['Whole grade together', 'The entire grade tests on the same two days for each subject'],
          ['Make-ups', 'Within the administration window'],
          ['Scoring complete by', 'Sunday, May 23, 2027']
        ] },
        { kind: 'p', mt: true, html: 'The rule is school by school, not district-wide, so two schools in the same district can test math on different days. Ask your child&rsquo;s school for its two dates as soon as they are set; our lesson plan counts back from them.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + FILES + '/ei-testing-schedule-2026-27.pdf" rel="noopener" target="_blank">Final Dates for the 2026 to 2027 Elementary- and Intermediate-level Testing</a>, NYSED Office of State Assessment, October 2026, read 31 October 2026.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice',
      h2: 'Twelve NYS-style math practice questions, grades 3 to 8',
      lede: 'Ours, two per grade, with the domain each one practises. The second question in each grade wants written work, like a session 2 question.',
      body: [
        { kind: 'table', caption: 'Original practice (ours, not NYSED items), with answers', head: ['Grade', 'Question', 'Domain', 'Answer'], rows: [
          ['3', 'What is 56 / 7?', 'Operations and Algebraic Thinking', '8'],
          ['3', 'A rug is 4 feet by 9 feet. Show two ways to find its area.', 'Measurement and Data', '36 square feet (4 x 9, or 9 + 9 + 9 + 9)'],
          ['4', 'Which is greater, 5/6 or 7/12? Explain.', 'Fractions', '5/6, because 5/6 = 10/12'],
          ['4', 'Multiply 46 x 23 and show your work.', 'Base Ten', '1,058'],
          ['5', 'What is 3/4 x 2/5?', 'Fractions', '6/20 = 3/10'],
          ['5', 'A tank is 10 by 6 by 4 inches. How many inch cubes fill it? Explain.', 'Measurement and Data', '240'],
          ['6', 'Write 18 : 24 in simplest form.', 'Ratios', '3 : 4'],
          ['6', 'Solve 5x - 4 = 26 and check your answer.', 'Expressions and Equations', 'x = 6'],
          ['7', 'Compute -3/4 + 5/8.', 'Number System', '-1/8'],
          ['7', 'A shirt costs 40 after a 20 percent discount. What was the original price? Explain.', 'Ratios', '50'],
          ['8', 'Is y = x&sup2; + 1 a linear function? Explain.', 'Functions', 'No: the rate of change is not constant'],
          ['8', 'Solve the system y = 2x + 1 and y = -x + 7. Show your work.', 'Expressions and Equations', '(2, 5)']
        ] },
        { kind: 'p', mt: true, html: 'NYSED publishes past questions with scoring guides on its <a class="ag-inline-link" href="https://www.nysedregents.org/ei/ei-math.html" rel="noopener" target="_blank">Grades 3 to 8 Mathematics Released Test Questions</a> page. We use those for rehearsal in the final weeks, and write our own problems for teaching.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan',
      h2: 'How to prepare for the NYS math test, step by step',
      lede: 'Our plan for the eight weeks before the school&rsquo;s first test day in the April 5 to May 14, 2027 window.',
      body: [
        { kind: 'ol', items: [
          '<b>Week 1: diagnose with released questions.</b> One session 1 and one session 2 from NYSED&rsquo;s released set, so we see both answer speed and written work.',
          '<b>Weeks 2 to 4: the two largest domains for the grade.</b> From the blueprint table: fractions and base ten in grade 5, expressions and ratios in grades 6 and 7, equations and geometry in grade 8.',
          '<b>Weeks 5 and 6: written answers.</b> One 2-credit and one 3-credit question every lesson. The child explains out loud first, then writes it down in full sentences and labelled steps.',
          '<b>Week 7: the tools.</b> Calculator rules for the grade, the reference sheet for grades 5 to 8, and the ruler and protractor tools in the online sampler.',
          '<b>Week 8: two full sessions on two days.</b> A dress rehearsal of the real format, then a light final week.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two habits that earn credit',
          left: [
            'Label every number in the working (&ldquo;3 cups per part&rdquo;), and end every explanation with a sentence that answers the question asked.'
          ],
          rightH3: 'One habit that loses it',
          right: [
            'Writing only the answer on a 2- or 3-credit question. The rubric cannot give credit for thinking it cannot see.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Grade by grade',
    h2: 'What to secure first in each grade before the NYS test',
    lede: 'Our reading of the NYSED blueprint and grade focus statements.',
    table: { caption: 'Priorities by grade (domain weights from NYSED; priorities ours)', head: ['Grade', 'Secure first', 'Then'], rows: [
      ['3', 'Multiplication and division within 100', 'Area and unit fractions'],
      ['4', 'Multi-digit multiplication and fraction equivalence', 'Angles and classifying shapes'],
      ['5', 'Adding and multiplying fractions', 'Decimals to hundredths and volume'],
      ['6', 'Ratios and rates', 'One-variable equations and negative numbers'],
      ['7', 'Proportional relationships', 'Rational number operations and linear equations'],
      ['8', 'Linear equations and systems', 'Pythagorean Theorem, transformations and functions']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask to see one of your child&rsquo;s written answers from class. If the working is missing, that is the fastest gain available before April.',
      'The test is untimed, so a careful, slower child is not at a disadvantage if they keep going.'
    ] },
    right: { h3: 'For students', ps: [
      'On session 2, pretend the reader cannot see inside your head. Write each step they would need.',
      'Check whether the question wants one answer or an explanation too. Many students lose a credit by answering half.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for New York students',
    lede: 'Live lessons from elementary school to Regents years.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Grades 3 to 5', courses: [
        { code: 'NTG / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5, written reasoning included.' },
        { code: 'NTG / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Number sense for calculator-free grades.' },
        { code: 'NTG / E / 03', slug: 'early-math-foundations', title: 'Early math', blurb: 'For younger siblings, ages 4 to 7.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'NTG / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratios to functions.' },
        { code: 'NTG / M / 02', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'MATHCOUNTS and AMC 8.' },
        { code: 'NTG / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Equations you can program.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Regents years', courses: [
        { code: 'NTG / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Toward the Algebra I Regents.' },
        { code: 'NTG / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry and Algebra II.' },
        { code: 'NTG / H / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'For later on.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons scheduled on Eastern Time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school ET', l: 'Weekday lessons that follow the class.' },
      { time: 'Weekends', l: 'Two-session rehearsals in March and April.' },
      { time: '1-on-1', l: 'Written-answer coaching, one question at a time.' }
    ],
    cells: [
      { h3: 'Work shown', p: 'Every 2- and 3-credit answer written up.' },
      { h3: 'Standards-aligned', p: 'Next Generation standards by grade.' },
      { h3: 'Right tools', p: 'Calculator rules practised per grade.' },
      { h3: 'Reference sheet', p: 'Used from autumn in grades 5 to 8.' },
      { h3: 'Released items late', p: 'NYSED&rsquo;s own questions for rehearsal.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Older students carry their math into code. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly billing in US dollars and no term contract: many New York families start in February and stop once the May window closes.',
    free: ['A free first class', 'Bring a recent written answer', 'No card details'],
    group: ['Fifteen to twenty students', 'One teacher all term', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Paced to the school&rsquo;s test days', 'Flexible times']
  },

  faq: {
    eyebrow: 'New York families ask',
    h2: 'NYS grades 3 to 8 math test: common questions',
    items: [
      { q: 'When is the NYS math test in 2027?', a: 'NYSED\'s window for the grades 3 to 8 math tests runs from Monday, April 5 to Friday, May 14, 2027. Each school picks two consecutive days in that window, so ask your school for its dates.' },
      { q: 'How long is the NYS math test?', a: 'It is untimed: students get as much time as they need within the school day. NYSED\'s average estimates range from 55 to 65 minutes for grade 3 session 1 up to 80 to 90 minutes for session 1 in grades 5 to 8.' },
      { q: 'How many questions are on the NYS math test?', a: 'NYSED\'s educator guide lists 38 questions in grade 3, 44 in grades 4 and 5, 46 in grade 6 and 48 in grades 7 and 8, across two sessions.' },
      { q: 'Can students use a calculator on the NYS math test?', a: 'Not in grades 3 to 5 or in grade 6 session 1. Grade 6 session 2 allows a four-function calculator with a square root key or a scientific calculator, grades 7 and 8 use a scientific calculator in both sessions, and graphing calculators are never permitted.' },
      { q: 'What does a level 3 mean on the NYS math test?', a: 'Level 3 means proficient in the standards for the grade. Level 4 means excelling; Level 2 means partially proficient, which NYSED describes as on track for current graduation requirements but not yet proficient.' },
      { q: 'How are the written math answers scored?', a: 'With NYSED rubrics. One-credit constructed-response questions score only the final answer, while 2-credit and 3-credit questions also score the work or explanation, with partial credit for partial understanding.' },
      { q: 'Is the NYS math test on the computer?', a: 'Yes. NYSED required computer-based testing for grades 3 to 8 from spring 2026, with ruler, protractor and calculator tools built into the platform where allowed.' },
      { q: 'Where can I find NYS math practice tests?', a: 'NYSED posts released questions with scoring material on nysedregents.org, and its question sampler previews the online tools. Our own practice set on this page gives two questions per grade.' },
      { q: 'Does my accelerated 8th grader take the grade 8 math test and the Regents?', a: 'Not necessarily. NYSED\'s administrator manual lets schools exempt grade 6 to 8 students in a commencement-level course who are taking a math Regents in June from that grade\'s math test.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are set on Eastern Time.' },
      { q: 'Are you part of NYSED?', a: 'No. Modern Age Coders is an independent online school with no connection to NYSED, New York City Public Schools or any district. We quote NYSED\'s public documents and link to them.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Grade pages and more for New York families.',
    items: [
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'The first state test year.' },
      { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math tutoring', p: 'Ratios, negative numbers and equations.' },
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'Functions, systems and the Pythagorean Theorem.' },
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core vs traditional math', p: 'Why homework asks children to explain.' },
      { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation', p: 'For middle schoolers who want more.' },
      { href: '/coding-classes-in-new-york', label: 'Coding classes in New York', p: 'Our New York page.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send a photo of one written math answer from school. In the first class the teacher shows your child how to turn it into a full-credit answer.',
    readFirst: 'Find out <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or see the full list of <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'Teachers join from India at times set on Eastern Time, after the New York school day or at weekends. WhatsApp gets the quickest answer.',
    formNote: 'Booking the first class is free, with no card required.'
  },

  footer: {
    cols: [
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-3rd-grade', label: 'Grade 3 math' },
        { href: '/online-math-tutor-6th-grade', label: 'Grade 6 math' },
        { href: '/online-math-tutor-8th-grade', label: 'Grade 8 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'New York and the US', links: [
        { href: '/coding-classes-in-new-york', label: 'New York' },
        { href: '/best-coding-classes-for-kids-in-new-york-city', label: 'New York City' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Two sessions, two days'
  },

  personalityCss: `
.ag-root.ag-ntg .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-ntg .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-ntg .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-ntg .ag-table td.ag-num { font-variant-numeric: tabular-nums; text-align: center; }
.ag-root.ag-ntg .ag-steps li { padding-bottom: 6px; }
`,

  dossier: {
    curriculumAuthority: 'New York State Education Department, read raw 31 October 2026: Educator Guide to the 2025 Grades 3 to 8 Mathematics Tests (sessions, test design, average times, calculators, tools, reference sheets, domain blueprints, pre-test and post-test standards, rubrics, performance levels); Final Dates for the 2026 to 2027 Elementary- and Intermediate-level Testing memo (April 5 to May 14, 2027, two consecutive days, scoring by May 23); Computer-Based Testing page; 2026 School Administrator\'s Manual (accelerated exemption); nysedregents.org released questions page.',
    localProject: 'Our grade 6 three-credit worked example: trail mix 3 : 5, 24 cups gives 3 cups per part, 9 cups nuts and 15 cups raisins, and the critique that nuts are 3/8, not 1/3. Our twelve-item practice set with domains and answers, our eight-week plan and priorities ladder. Lesson family: showing work that earns partial credit.',
    requiredMentions: ['Session 1 consists of multiple-choice questions.', 'as much time as necessary within the confines of the regular school day', 'Monday, April 5 to Friday, May 14, 2027', 'Pre-Test standard (September-to-April/May)', 'Post-Test standard (May-to-June)', 'considered on track to meet current New York high school graduation requirements but are not yet proficient', 'a correct solution obtained using an obviously incorrect procedure', 'so they are 3/8 of the mix, not 1/3', 'Sunday, May 23, 2027', 'Graphing calculators are not permitted at any grade.', 'four-function with square root key, or scientific, in session 2'],
    sources: [
      { claim: 'Educator Guide to the 2025 Grades 3 to 8 Mathematics Tests.', url: FILES + '/3-8-educator-guide-math-2025.pdf' },
      { claim: 'Final Dates for the 2026 to 2027 Elementary- and Intermediate-level Testing.', url: FILES + '/ei-testing-schedule-2026-27.pdf' },
      { claim: 'Computer-Based Testing for grades 3 to 8.', url: OSA + '/computer-based-testing-cbt' },
      { claim: '2026 School Administrator\'s Manual, grades 3 to 8.', url: FILES + '/ei-sam-2026.pdf' },
      { claim: 'Grades 3 to 8 Mathematics Released Test Questions.', url: 'https://www.nysedregents.org/ei/ei-math.html' },
      { claim: 'Grades 5 to 8 Mathematics Reference Sheets.', url: OSA + '/grades-5-8-mathematics-reference-sheets' }
    ],
    rejectedClaims: [
      'A 2026 or 2027 educator guide: NYSED\'s manuals page links the 2025 guide as current; nothing quoted from an unpublished edition.',
      'Credit totals per grade: not computed; NYSED prints question counts, and adding credits ourselves would be a derived total.',
      'Use of grades 3 to 8 scores in NYC middle school admissions screens: not stated; not verified at a primary source in this session.',
      'Scale score cut points for levels: not printed; they are set per year in technical reports not read here.',
      'Reproducing released NYSED items or scoring guides: refused; linked instead.',
      'Score or level promises for our classes: refused. Any affiliation with NYSED or NYC Public Schools: none.'
    ]
  }
};
