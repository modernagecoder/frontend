'use strict';
// STAAR math tutoring, grades 3 to 8 (ag- state-test door; UK and US exams cluster, row US014).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from the
// Texas Education Agency (tea.texas.gov); copies in keyword-research-2026-09/uk-us-gap/src/staar-math-tutoring/:
//  - data-reports/staar/staar-resources: "STAAR is an online assessment in mathematics, reading language arts (RLA), science,
//    and social studies for students in grades 3–8 and high school" (written "grades 3 to 8" here); "All students enrolled in
//    Texas public schools and open-enrollment charter schools in grades 3–8 and specific high school courses are required by
//    both federal and state law to participate in STAAR."; links to the Practice Test Site and STAAR Released Test Questions.
//  - STAAR grade 3 to 8 math blueprints, each "Effective as of School Year 2022–23": totals G3 30 questions 37 points (23
//    one-point, 7 two-point); G4 32 / 40 (24, 8); G5 34 / 42 (26, 8); G6 36 / 43 (29, 7); G7 38 / 46 (30, 8); G8 40 / 48
//    (32, 8). Reporting categories and ranges (G3 cat 2 "11-13" questions "13-17" points; G5 cat 2 15-17 / 17-21; G8 cat 2
//    15-17 / 17-22, cat 3 14-16 / 15-20; G7 cat 1 is "Probability and Numerical Representations"). Readiness standards
//    "make up approximately 55-70% of the total points"; supporting "approximately 30-45%"; "All TEKS, whether identified as
//    readiness or supporting, are required to be taught in their entirety".
//  - STAAR Calculator Policy: "Calculators are not permitted for students taking the STAAR grades 3–7 mathematics assessments";
//    calculators "are required" for grade 8 mathematics; grade 8 "each student must have access to a graphing calculation
//    device throughout the entire test"; "Calculation applications on smartphones and smartwatches are not allowed."
//  - New Question Types by Grade Level and Content Area (Jan 2022): from spring 2023 online testers see new types; math
//    column (layout-extracted): Equation Editor, Text Entry, Graphing, Inline Choice, Hot Spot, Drag and Drop, Multiselect
//    (grades 3 to 8), Number Line and Match Table Grid (grades 6 to 8), Fraction Model (grades 3 to 5). Multipart and
//    constructed response are not in the math column.
//  - What Families Should Know about STAAR (2023 one-pager): "STAAR is not a high-stakes test for students."; "Recent
//    changes in Texas law have eliminated student-level promotion consequences associated with STAAR."; "Students who do
//    not take STAAR earn a score of zero"; "All STAAR test questions and answers are made available".
//  - 2026–2027 Student Assessment Testing Calendar (August 2026): STAAR grades 3 to 8 mathematics and Algebra I "Apr 19–Apr
//    30" 2027, "Friday, Apr 30, 2027, is the last day to complete make-up tests"; grades 3 to 8 assessment results May 28,
//    2027; SST Stand-Alone Field Test Feb 1 to 5, 2027, mathematics grades 3 to 8 and Algebra I.
//  - House Bill 8 page and Updated HB 8 FAQ (08/20/2026): HB 8 "was passed in September 2025"; it replaces STAAR "with a new
//    instructionally supportive assessment program, the Student Success Tool (SST)" beginning in 2027 to 2028; BOY and MOY
//    adaptive, EOY "static and linear"; time frames grades 3 and 4 60 minutes BOY/MOY and 90 EOY, grades 5 to 8 75 and 105;
//    windows BOY "Between the fourth Monday in August and September 30", MOY "Between January 2 and February 21", EOY
//    "Between May 1 and May 30"; SST item types multiple choice, multiple select (2 points), inline choice (2 points),
//    multi-part; BOY and MOY questions "will not be released"; "The practice test site will be updated and will continue to
//    be available."; results "no later than two business days after the close of the applicable testing window"; SST keeps
//    Masters, Meets, Approaches and Did Not Meet Grade Level, with cut points "set at an equivalent level of rigor".
//  - 2027–2028 testing calendar (April 2026): SST EOY grades 3 to 8 mathematics priority May 8 to 12, extended May 15 to 19,
//    2028; BOY Aug 23 to Sep 30 (2027); MOY Jan 3 to Feb 21 (2028).
//  - STAAR Performance Standards page: four categories; "Students who achieve Approaches Grade Level or higher on STAAR have
//    passed the test."; 2023 grades 3 to 8 performance standards (19 TAC §101.3041(b)(1)): math Approaches / Meets / Masters
//    G3 1360 1471 1600; G4 1462 1557 1690; G5 1515 1634 1776; G6 1616 1745 1889; G7 1703 1793 1965; G8 1754 1859 2009.
// TEA dates use en dashes; written with "to" here. No released item is reproduced; the page links to TEA's released tests.
// Our own material, labelled: the grade 5 worked example (3/4 of 2 1/2 pounds, 1 7/8, then 1 7/8 split 3 ways is 5/8), the
// grade 7 no-calculator proportion example (6 for 4.50, so 15 for 11.25 by the unit rate 0.75), the twelve-item practice
// set with answers, the six-week plan, the "heaviest category" ladder reading of the blueprints.
// Lesson family: multi-step problems answered in exact form (STAAR equation-editor and two-point items).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TEA = 'https://tea.texas.gov/data-reports/staar';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'STAAR MATH', blurb: 'STAAR math for grades 3 to 8 from the TEA blueprints: questions and points by grade, the April 2027 window, the move to the Student Success Tool and original practice.' },
  slug: 'staar-math-tutoring',
  code: 'sttu',
  accent: '#254B3D',
  accentRationale: 'STAAR math: a deep pine #254B3D as allocated, 9.20:1 on paper #FBF8F2 and 7.92:1 on the deepest tint, calm and far from the coding-page blues',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-classes-in-texas', name: 'Texas' }],
  routeLabel: 'STAAR math tutoring',
  title: 'STAAR Math Tutoring and Practice, Grades 3 to 8 (2027)',
  description: 'STAAR math tutoring for grades 3 to 8: questions and points per grade from the TEA blueprints, the April 2027 window, calculator rules and original practice.',
  ogDescription: 'Spring 2027 is the last STAAR before Texas moves to the Student Success Tool. What the TEA blueprints say about each grade, and how to prepare without drilling copied items.',
  twitterDescription: 'STAAR math grades 3 to 8 from the TEA blueprints, with original practice.',
  pageName: 'STAAR Math Tutoring, Grades 3 to 8',
  webPageDescription: 'A guide for Texas families to the STAAR mathematics tests in grades 3 to 8, built from the Texas Education Agency blueprints, calculator policy, testing calendar and House Bill 8 FAQ, with original worked examples and a practice set.',
  courseDescription: 'Live online math classes for Texas students in grades 3 to 8, teaching the TEKS behind every STAAR reporting category, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'STAAR math tutoring',
  navLinks: [
    { href: '#by-grade', label: 'By grade' },
    { href: '#categories', label: 'Categories' },
    { href: '#calendar', label: '2027 dates' },
    { href: '#screen', label: 'On screen' },
    { href: '#scores', label: 'Scores' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Texas &middot; Grades 3 to 8 &middot; From the TEA blueprints',
  h1: 'STAAR math tutoring and practice for grades 3 to 8',
  lede: 'Every Texas public school student in grades 3 to 8 sits the STAAR mathematics test each spring, online, against the TEKS for their grade. In 2027 that test runs from April 19 to April 30, and it is the last spring of STAAR as families know it: from the 2027 to 2028 school year the state switches to a new program called the Student Success Tool. This page sets out what the Texas Education Agency publishes about the math test at each grade, what changes next year, and how a child can prepare by understanding the math rather than memorizing old questions.',
  secondaryCta: { href: '#by-grade', label: 'See your child&rsquo;s grade' },
  wa: 'Hello Modern Age Coders, my child in Texas has the STAAR math test this spring. Could we book a free first class?',
  heroNote: 'Teaching math live since 2020 &middot; 10,000+ students &middot; original practice, never copied test items',
  spec: [
    ['Test', 'STAAR mathematics'],
    ['Run by', 'Texas Education Agency'],
    ['Grades', '3 to 8'],
    ['Spring 2027 window', 'April 19 to 30'],
    ['Calculator', 'Grade 8 only'],
    ['From 2027 to 2028', 'Student Success Tool'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'STAAR (State of Texas Assessments of Academic Readiness) is the Texas Education Agency&rsquo;s online math test for every public school student in grades 3 to 8, written to the TEKS. Grade 3 has 30 questions worth 37 points and grade 8 has 40 worth 48. The spring 2027 window is April 19 to 30. Modern Age Coders teaches STAAR math live online, in a batch or 1-on-1, through our Elementary Maths course and middle school math classes.',

  picks: {
    eyebrow: 'Math that the blueprint rewards',
    h2: 'Three courses that teach the TEKS behind STAAR math',
    lede: 'Each one teaches the grade&rsquo;s math properly, so the test becomes a check of what a child already understands.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'STTU / 01', title: 'Elementary math, grades 3 to 5', note: 'Fractions, place value, area and data, built from the ground up.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'STTU / 02', title: 'Middle school math, grades 6 to 8', note: 'Ratios, rational numbers, equations and geometry.' },
      { course: 'mental-maths-mastery-kids', code: 'STTU / 03', title: 'Mental math', note: 'Number sense for grades 3 to 7, where no calculator is allowed.' }
    ]
  },

  sections: [
    {
      id: 'by-grade', tint: 'tint', eyebrow: 'Questions by grade',
      h2: 'How many questions are on the STAAR math test in each grade?',
      lede: 'Between 30 and 40, depending on the grade. TEA&rsquo;s blueprints, effective since the 2022 to 2023 school year, give the totals and split them into one-point and two-point questions.',
      body: [
        { kind: 'table', caption: 'STAAR mathematics by grade (TEA grade 3 to 8 math blueprints, effective as of school year 2022 to 2023, read 31 October 2026)', head: ['Grade', 'Questions', 'Points', 'One-point questions', 'Two-point questions'], numCols: [1, 2, 3, 4], rows: [
          ['3', '30', '37', '23', '7'],
          ['4', '32', '40', '24', '8'],
          ['5', '34', '42', '26', '8'],
          ['6', '36', '43', '29', '7'],
          ['7', '38', '46', '30', '8'],
          ['8', '40', '48', '32', '8']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What a two-point question is',
          left: [
            'The blueprints label every two-point question &ldquo;non-multiple choice&rdquo;. On screen that means the child builds the answer: types a fraction into an equation editor, plots points on a grid or drags values into place. There are no answer choices to eliminate.',
            'In grade 5, eight two-point questions carry 16 of the 42 points. That is more than a third of the score coming from questions where guessing does not help.'
          ],
          rightH3: 'Who sits it',
          right: [
            'TEA&rsquo;s STAAR resources page states that all students enrolled in Texas public schools and open-enrollment charter schools in grades 3 to 8 are required by both federal and state law to take part. A child taking an above-grade course may sit the matching higher test instead, as TEA&rsquo;s testing requirements flowchart shows.',
            'The test is online. Spanish versions of the math test exist for grades 3 to 5.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + TEA + '/staar-mathematics-resources" rel="noopener" target="_blank">STAAR Mathematics Resources</a> (blueprints for each grade) and <a class="ag-inline-link" href="' + TEA + '/staar-resources" rel="noopener" target="_blank">STAAR Resources</a>, Texas Education Agency, read 31 October 2026. We are not connected with TEA, any Texas district or the test contractor.' }
      ]
    },
    {
      id: 'categories', tint: 'deep', eyebrow: 'Reporting categories',
      h2: 'What do the four STAAR math reporting categories cover?',
      lede: 'Every grade reports math in four categories. The names stay almost the same from grade 3 to grade 8; the weight moves steadily toward algebra and geometry.',
      body: [
        { kind: 'table', caption: 'Points available in each reporting category, three grades compared (TEA math blueprints, read 31 October 2026)', head: ['Reporting category', 'Grade 3 points', 'Grade 5 points', 'Grade 8 points'], rows: [
          ['1. Numerical representations and relationships', '10 to 12', '5 to 9', '2 to 5'],
          ['2. Computations and algebraic relationships', '13 to 17', '17 to 21', '17 to 22'],
          ['3. Geometry and measurement', '6 to 10', '8 to 12', '15 to 20'],
          ['4. Data analysis and personal financial literacy', '3 to 6', '3 to 7', '5 to 9']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the shift',
          left: [
            'In grade 3, number sense (category 1) is worth up to 12 points. By grade 8 it is worth at most 5, while geometry and measurement climbs to as many as 20. A child who was strong at place value in grade 3 can still struggle in grade 8 if volume, the Pythagorean theorem and transformations were never secure.',
            'Grade 7 renames category 1 &ldquo;Probability and Numerical Representations&rdquo;, the one year where probability sits inside it.'
          ],
          rightH3: 'Readiness and supporting standards',
          right: [
            'The blueprints mark each TEKS as readiness or supporting. Readiness standards &ldquo;make up approximately 55-70% of the total points on the base test&rdquo;; supporting standards make up the rest.',
            'TEA adds that all TEKS, readiness or supporting, &ldquo;are required to be taught in their entirety&rdquo;. So a tutor who teaches only the readiness list is gambling with up to 45 percent of the points.'
          ] }
      ]
    },
    {
      id: 'calendar', tint: 'tint', eyebrow: '2027 and after',
      h2: 'When is the STAAR math test in 2027, and what replaces it?',
      lede: 'Grades 3 to 8 math runs April 19 to 30, 2027, according to TEA&rsquo;s 2026 to 2027 testing calendar. It is the final spring before House Bill 8 replaces STAAR with the Student Success Tool.',
      body: [
        { kind: 'table', caption: 'Dates that matter for a grade 3 to 8 math student (TEA 2026 to 2027 and 2027 to 2028 testing calendars and HB 8 FAQ, read 31 October 2026)', head: ['When', 'What happens', 'Source'], rows: [
          ['February 1 to 5, 2027', 'SST stand-alone field test, math grades 3 to 8 and Algebra I (selected schools, items for the new program)', '2026 to 2027 calendar'],
          ['April 19 to 30, 2027', 'STAAR grades 3 to 8 mathematics; April 30 is the last make-up day', '2026 to 2027 calendar'],
          ['May 28, 2027', 'Grades 3 to 8 assessment results', '2026 to 2027 calendar'],
          ['August 23 to September 30, 2027', 'First SST beginning-of-year (BOY) test, math grades 3 to 8', '2027 to 2028 calendar'],
          ['January 3 to February 21, 2028', 'SST middle-of-year (MOY) test', '2027 to 2028 calendar'],
          ['May 8 to 12, 2028 (extended May 15 to 19)', 'SST end-of-year (EOY) test, math grades 3 to 8', '2027 to 2028 calendar']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What House Bill 8 changes',
          left: [
            'TEA&rsquo;s HB 8 FAQ, updated 20 August 2026, says the bill was passed in September 2025 and replaces STAAR, beginning in the 2027 to 2028 school year, with the Student Success Tool (SST): a beginning-of-year, a middle-of-year and an end-of-year test.',
            'The BOY and MOY tests will be adaptive, so each child sees different questions and those questions will not be released. The EOY test will be &ldquo;static and linear&rdquo;, the same for every student.'
          ],
          rightH3: 'Shorter sittings',
          right: [
            'The FAQ sets expected time frames. Grades 3 and 4: 60 minutes for BOY and MOY, 90 minutes for EOY. Grades 5 to 8: 75 minutes and 105 minutes.',
            'The four performance levels stay, and TEA must set SST cut points &ldquo;at an equivalent level of rigor&rdquo; to STAAR. Results are due no later than two business days after each window closes.'
          ] },
        { kind: 'p', mt: true, html: 'For a family, the practical point is continuity. The TEKS do not change because the test changes, and HB 8 FAQ question 13 confirms that TEA&rsquo;s practice test site will be updated and kept. A child who learns grade-level math well in 2026 to 2027 is ready for either format.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://tea.texas.gov/assessment-and-accountability/student-assessment-testing-calendar-2026-2027-saft-update.pdf" rel="noopener" target="_blank">2026 to 2027 Student Assessment Testing Calendar</a>, <a class="ag-inline-link" href="https://tea.texas.gov/data-reports/test-administration/2027-2028-testing-calendar-sst-final.pdf" rel="noopener" target="_blank">2027 to 2028 calendar</a> and <a class="ag-inline-link" href="' + TEA + '/hb-8-faq-update.pdf" rel="noopener" target="_blank">Updated HB 8 FAQ</a>, Texas Education Agency, read 31 October 2026. Your district sets the exact day inside each window.' }
      ]
    },
    {
      id: 'screen', tint: 'deep', eyebrow: 'On screen',
      h2: 'What kinds of questions and tools does STAAR math use?',
      lede: 'Since spring 2023, online STAAR math has mixed multiple choice with question types where the student builds the answer. Calculators are allowed only in grade 8.',
      body: [
        { kind: 'table', caption: 'Question types TEA lists for STAAR math (New Question Types by Grade Level and Content Area, January 2022, read 31 October 2026)', head: ['Question type', 'What the student does', 'Math grades'], rows: [
          ['Equation editor', 'Types a fraction, expression, equation or inequality', '3 to 8'],
          ['Text entry', 'Types a short answer such as a number', '3 to 8'],
          ['Graphing', 'Plots points, draws lines, builds bar graphs', '3 to 8'],
          ['Fraction model', 'Splits a shape into equal parts and shades the fraction', '3 to 5'],
          ['Number line', 'Marks a point or an open or closed circle with a direction arrow', '6 to 8'],
          ['Match table grid', 'Sorts statements into categories in a grid', '6 to 8'],
          ['Inline choice, hot spot, drag and drop, multiselect', 'Picks from menus, clicks regions, drags values, or picks more than one answer', '3 to 8']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The calculator rule',
          left: [
            'TEA&rsquo;s STAAR Calculator Policy says calculators &ldquo;are not permitted&rdquo; for students taking the grades 3 to 7 STAAR mathematics tests unless a student qualifies for one as an accommodation. In grade 8 a calculator is required, and each student must have a graphing calculator for the entire test.',
            'Calculator apps on smartphones and smartwatches are not allowed, and the policy asks that students use the same kind of device they use in class.'
          ],
          rightH3: 'What this means for practice',
          right: [
            'Five years of STAAR math, grades 3 to 7, are pencil and number sense. Practising with a calculator at home in those grades trains the wrong habit.',
            'The equation editor rewards exact answers. A child who writes 0.6 when the question wants a fraction, or 1 7/8 when the box needs 15/8, loses a point that understanding had already earned. We practise entering answers in the form asked.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + TEA + '/staar-calculator-policy.pdf" rel="noopener" target="_blank">STAAR Calculator Policy</a> and <a class="ag-inline-link" href="https://tea.texas.gov/student-assessment/new-question-types-jan-2022.pdf" rel="noopener" target="_blank">New Question Types</a>, TEA, read 31 October 2026. Try the real interface on TEA&rsquo;s <a class="ag-inline-link" href="https://txpt.cambiumtds.com/student/" rel="noopener" target="_blank">Practice Test Site</a>.' }
      ]
    },
    {
      id: 'scores', tint: 'tint', eyebrow: 'Scores',
      h2: 'What score passes STAAR math, and what do the levels mean?',
      lede: 'TEA reports four categories. Approaches Grade Level or above counts as passing; the scale score needed for each level is published for every grade.',
      body: [
        { kind: 'table', caption: 'Minimum scale scores for STAAR mathematics, grades 3 to 8 (TEA 2023 grades 3 to 8 performance standards, 19 TAC 101.3041(b)(1), read 31 October 2026)', head: ['Grade', 'Approaches Grade Level', 'Meets Grade Level', 'Masters Grade Level'], numCols: [1, 2, 3], rows: [
          ['3', '1360', '1471', '1600'],
          ['4', '1462', '1557', '1690'],
          ['5', '1515', '1634', '1776'],
          ['6', '1616', '1745', '1889'],
          ['7', '1703', '1793', '1965'],
          ['8', '1754', '1859', '2009']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How TEA defines the levels',
          left: [
            'TEA&rsquo;s performance standards page puts it plainly: &ldquo;Students who achieve Approaches Grade Level or higher on STAAR have passed the test.&rdquo; Meets Grade Level means a high likelihood of success next year with perhaps some short-term support; Masters Grade Level means success expected with little or no intervention.',
            'The scale scores are not percentages. They convert from raw points through tables TEA publishes after each administration.'
          ],
          rightH3: 'How much rides on it',
          right: [
            'TEA&rsquo;s one-page guide for families says &ldquo;STAAR is not a high-stakes test for students&rdquo; and that recent changes in Texas law removed student-level promotion consequences. A student who does not test earns a score of zero, and the school must then provide extra support.',
            'Schools are rated partly on STAAR, which is why the pressure in March can feel bigger than the stakes for the child. Our aim is a child who is calm because they understand the math.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://tea.texas.gov/data-reports/student-assessment-results/staar-performance-standards" rel="noopener" target="_blank">STAAR Performance Standards</a> and <a class="ag-inline-link" href="' + TEA + '/staar-2023-parent-one-pager-english.pdf" rel="noopener" target="_blank">What Families Should Know about STAAR</a>, TEA, read 31 October 2026.' }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples',
      h2: 'Two STAAR-level problems, worked the way we teach them',
      lede: 'Both problems are ours, written at the level of the grade 5 and grade 7 TEKS. Neither is a released STAAR item; those are on TEA&rsquo;s own site.',
      body: [
        { kind: 'ol', items: [
          '<b>Grade 5, our problem.</b> A recipe needs 2 1/2 pounds of flour. Maya makes 3/4 of the recipe and shares the flour she uses equally among 3 mixing bowls. How much flour goes in each bowl? Type the answer as a fraction.',
          '<b>Step 1: name the two operations before calculating.</b> &ldquo;3/4 of&rdquo; is multiplication; &ldquo;shares equally among 3&rdquo; is division. Children who skip this step often add.',
          '<b>Step 2: multiply with improper fractions.</b> 2 1/2 = 5/2, and 3/4 x 5/2 = 15/8, which is 1 7/8 pounds.',
          '<b>Step 3: divide by 3.</b> 15/8 / 3 = 15/24 = 5/8. Each bowl gets 5/8 of a pound.',
          '<b>Step 4: check the size.</b> 1 7/8 pounds split three ways should be a bit more than half a pound each. 5/8 is a little over 1/2, so the answer is reasonable. The box wants a fraction, so we enter 5/8, not 0.625.'
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Grade 7, our problem, no calculator.</b> A store sells 6 notebooks for 4.50. At the same price, how much do 15 notebooks cost?',
          '<b>Find the unit rate in your head.</b> 4.50 / 6 = 0.75, so each notebook costs 0.75.',
          '<b>Scale up.</b> 15 x 0.75 = 11.25, which we get as 10 x 0.75 + 5 x 0.75 = 7.50 + 3.75.',
          '<b>Check with a second route.</b> 15 is 2.5 times 6, and 2.5 x 4.50 = 11.25. Two routes agree, so we trust it.'
        ] },
        { kind: 'p', mt: true, html: 'The pattern matters more than the numbers: say what each phrase means, calculate exactly, then test the answer against common sense and a second method. That habit is what turns a two-point question from a coin toss into two points.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice set',
      h2: 'A twelve-question STAAR math practice set, grades 3 to 8',
      lede: 'Our own questions, two per grade, mapped to the blueprint category they practise. Answers in the last column; cover it first.',
      body: [
        { kind: 'table', caption: 'Original STAAR-style practice (ours, not TEA items), with answers', head: ['Grade', 'Question', 'Category', 'Answer'], rows: [
          ['3', 'Which is greater, 3/8 or 3/4 of the same pizza? Explain with a drawing.', '1', '3/4 (bigger pieces)'],
          ['3', 'A garden is 7 feet by 6 feet. What is its area?', '3', '42 square feet'],
          ['4', 'Round 48,651 to the nearest thousand.', '1', '49,000'],
          ['4', 'An angle is 3/8 of a full turn. How many degrees is it?', '3', '135 degrees'],
          ['5', 'What is 2.4 x 0.3?', '2', '0.72'],
          ['5', 'A box is 4 cm by 3 cm by 5 cm. What is its volume?', '3', '60 cubic centimeters'],
          ['6', 'Order from least to greatest: -2, 1/2, -0.75, 0.6.', '1', '-2, -0.75, 1/2, 0.6'],
          ['6', 'Solve 3x + 7 = 31.', '2', 'x = 8'],
          ['7', 'A spinner has 5 equal parts, 2 red. What is P(red) as a percent?', '1', '40 percent'],
          ['7', 'A jacket priced at 60 is marked 25 percent off. What is the sale price?', '2', '45'],
          ['8', 'A right triangle has legs 9 and 12. How long is the hypotenuse?', '3', '15'],
          ['8', 'Which point lies on y = 2x - 3: (4, 5) or (5, 4)?', '2', '(4, 5)']
        ] },
        { kind: 'p', mt: true, html: 'For the real thing, TEA publishes every STAAR question and answer from past administrations. Use them on TEA&rsquo;s <a class="ag-inline-link" href="https://txpt.cambiumtds.com/student/" rel="noopener" target="_blank">Practice Test Site</a> in the actual interface, and find answer keys and rationales on the <a class="ag-inline-link" href="' + TEA + '/staar-released-test-questions" rel="noopener" target="_blank">STAAR Released Test Questions</a> page. We use them for timed rehearsal near the end, never as the way to learn.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Six weeks out',
      h2: 'A six-week plan to the April 2027 STAAR math window',
      lede: 'Our plan, counted back from April 19, 2027. It assumes two lessons a week plus short practice at home.',
      body: [
        { kind: 'ol', items: [
          '<b>Week of March 8: diagnose by category.</b> One released test from TEA&rsquo;s site, scored by reporting category, not just in total. The weakest category gets the next three weeks.',
          '<b>Weeks of March 15 and 22: rebuild the weak category.</b> Teach the ideas again from scratch with drawings and real objects, then short mixed sets. No timed tests yet.',
          '<b>Week of March 29: two-point questions only.</b> Equation editor, graphing and fraction model practice on the Practice Test Site, so the format holds no surprises.',
          '<b>Week of April 5: mixed review and one full timed test.</b> Grades 3 to 7 without a calculator, grade 8 with the same graphing calculator the child will use on the day.',
          '<b>Week of April 12: light and confident.</b> Ten-minute sets of mental math, a good night&rsquo;s sleep before the district&rsquo;s test day, and no new topics.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If the test is weeks away, not months',
          left: [
            'Focus on the category with the most points in your child&rsquo;s grade. From the blueprints, that is computations and algebraic relationships in every grade except grade 8, where geometry and measurement nearly matches it.'
          ],
          rightH3: 'If it is a year away',
          right: [
            'Learn the grade properly. With STAAR giving way to the SST beginning-of-year test in late summer 2027, steady understanding through the year will show up three times, not once.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where the points are',
    h2: 'The heaviest STAAR math category in each grade',
    lede: 'Our reading of TEA&rsquo;s blueprints: the reporting category with the most points available, and what we would secure first.',
    table: { caption: 'Largest reporting category by grade (points from TEA blueprints; the focus column is ours)', head: ['Grade', 'Heaviest category, points', 'Secure first'], rows: [
      ['3', 'Computations and algebraic relationships, 13 to 17', 'Multiplication and division within 100'],
      ['4', 'Computations and algebraic relationships, 12 to 16', 'Multi-digit multiplication, fraction addition'],
      ['5', 'Computations and algebraic relationships, 17 to 21', 'Fraction and decimal operations'],
      ['6', 'Computations and algebraic relationships, 14 to 19', 'Ratios, integers, one-step equations'],
      ['7', 'Computations and algebraic relationships, 16 to 21', 'Proportions, percents, two-step equations'],
      ['8', 'Computations and algebraic relationships, 17 to 22 (geometry 15 to 20)', 'Slope, linear equations, Pythagorean theorem']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask the teacher for the category breakdown on your child&rsquo;s last STAAR or benchmark report. One weak category is a much smaller problem than &ldquo;bad at math&rdquo;.',
      'The TEKS for the grade are on TEA&rsquo;s site; the assessed curriculum document lists exactly which ones can appear.'
    ] },
    right: { h3: 'For students', ps: [
      'Two-point questions have no choices to guess from. That is good news if you check your answer, because nobody can trick you with a wrong option.',
      'Read the box: fraction, decimal or whole number. Give it what it asks for.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for Texas students, grade 3 to high school',
    lede: 'Live lessons built on understanding, which is what the TEKS and every STAAR reporting category ask for.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Grades 3 to 5', courses: [
        { code: 'STTU / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5, TEKS-aware.' },
        { code: 'STTU / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Calculator-free confidence.' },
        { code: 'STTU / E / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental math', blurb: 'Fast, visual arithmetic.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'STTU / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratios to the Pythagorean theorem.' },
        { code: 'STTU / M / 02', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'For students who want a stretch.' },
        { code: 'STTU / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Patterns and functions in Python.' }
      ] },
      { num: 'III', h3: 'Toward high school', sub: 'Grade 8 and up', courses: [
        { code: 'STTU / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Pre-algebra into Algebra I.' },
        { code: 'STTU / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra to calculus.' },
        { code: 'STTU / H / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'The digital SAT, later on.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons that fit a Texas school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school CT', l: 'Weekday evening lessons on Texas time.' },
      { time: 'Weekends', l: 'Longer review sessions before the April window.' },
      { time: '1-on-1', l: 'Paced to one reporting category at a time.' }
    ],
    cells: [
      { h3: 'TEKS first', p: 'We teach the standard, not the trick.' },
      { h3: 'No calculator habit', p: 'Grades 3 to 7 practise by hand.' },
      { h3: 'Exact answers', p: 'Fractions typed the way the box wants.' },
      { h3: 'Released tests late', p: 'Rehearsal at the end, on TEA&rsquo;s site.' },
      { h3: 'Ready for SST too', p: 'Understanding carries into 2027 to 2028.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Some of our older students turn their math into working apps. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents&rsquo; Google reviews, copied exactly.',

  fees: {
    h2: 'Fees',
    lede: 'STAAR math classes are billed month by month in US dollars with no contract, so a family can start in January for the April window and stop after results come home.',
    free: ['A free first class', 'Bring a recent benchmark report', 'No card needed'],
    group: ['Fifteen to twenty students', 'The same teacher each week', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'One category at a time', 'Times on Texas time']
  },

  faq: {
    eyebrow: 'Questions from Texas families',
    h2: 'STAAR math: common questions',
    items: [
      { q: 'When is the STAAR math test in 2027?', a: 'TEA\'s 2026 to 2027 testing calendar sets grades 3 to 8 mathematics for April 19 to April 30, 2027, with April 30 the last day for make-ups. Your district chooses the exact day inside that window, so ask the school.' },
      { q: 'How many questions are on the STAAR math test?', a: 'It depends on the grade. TEA\'s blueprints give 30 questions in grade 3, 32 in grade 4, 34 in grade 5, 36 in grade 6, 38 in grade 7 and 40 in grade 8, each with some two-point questions.' },
      { q: 'Can my child use a calculator on STAAR math?', a: 'Only in grade 8. TEA\'s calculator policy does not permit calculators on the grades 3 to 7 math tests unless a student qualifies for one as an accommodation, and it requires a graphing calculator throughout the grade 8 test.' },
      { q: 'What score do you need to pass STAAR math?', a: 'Approaches Grade Level or higher counts as passing. TEA publishes the minimum scale score for each grade: for example 1360 in grade 3 and 1754 in grade 8.' },
      { q: 'Is STAAR being replaced?', a: 'Yes. Under House Bill 8, passed in September 2025, TEA replaces STAAR with the Student Success Tool from the 2027 to 2028 school year, with beginning, middle and end-of-year tests. Spring 2027 is the last STAAR administration for grades 3 to 8.' },
      { q: 'Does failing STAAR math mean my child repeats the grade?', a: 'TEA\'s family guide says STAAR is not a high-stakes test for students and that recent changes in Texas law removed student-level promotion consequences. Schools do use results to plan extra support.' },
      { q: 'Where can we find STAAR math practice tests?', a: 'TEA releases its tests. Use the Practice Test Site to try them in the real online interface, and the STAAR Released Test Questions page for answer keys and rationales.' },
      { q: 'What is a two-point question on STAAR math?', a: 'A non-multiple-choice question, such as typing an answer in an equation editor or drawing on a graph, worth two points. In grade 5, eight of them carry 16 of the 42 points.' },
      { q: 'When are your STAAR math classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Lessons are scheduled on Central Time for Texas families.' },
      { q: 'Are you connected with TEA or STAAR?', a: 'No. Modern Age Coders is an independent online school. We teach the TEKS, quote TEA\'s published documents and link to TEA\'s own practice material; we never copy released questions.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More math help for Texas and US families.',
    items: [
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'The first STAAR year, grade by grade.' },
      { href: '/online-math-tutor-5th-grade', label: 'Fifth grade math tutoring', p: 'Fractions and decimals before middle school.' },
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'Slope, functions and the calculator year.' },
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core vs traditional math', p: 'Why Texas, with its TEKS, is a different case.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Math competitions for middle school', p: 'For children who finish STAAR early.' },
      { href: '/coding-classes-in-texas', label: 'Coding classes in Texas', p: 'Our page for Texas families.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the grade and, if you have it, the category breakdown from the last STAAR or district benchmark. The teacher will start with the weakest category.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse every <a class="ag-inline-link" href="/courses">math and coding course</a>.',
    note: 'Our teachers work from India and schedule lessons on Central Time for Texas, after school or on weekends. WhatsApp reaches us fastest.',
    formNote: 'The first class is free, and we never ask for card details to book it.'
  },

  footer: {
    cols: [
      { h4: 'Grade help', links: [
        { href: '/online-math-tutor-3rd-grade', label: 'Grade 3 math' },
        { href: '/online-math-tutor-5th-grade', label: 'Grade 5 math' },
        { href: '/online-math-tutor-8th-grade', label: 'Grade 8 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'Texas and the US', links: [
        { href: '/coding-classes-in-texas', label: 'Texas' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'April 19 to 30, 2027'
  },

  personalityCss: `
.ag-root.ag-sttu .ag-hero h1 { letter-spacing: -0.012em; max-width: 22ch; }
.ag-root.ag-sttu .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-sttu .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-sttu .ag-table td.ag-num { font-variant-numeric: tabular-nums; text-align: right; }
.ag-root.ag-sttu .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Texas Education Agency, read raw 31 October 2026: STAAR resources (online test, grades 3 to 8, who must participate); grade 3 to 8 math blueprints effective 2022 to 2023 (questions, points, one and two-point split, reporting categories, readiness 55 to 70 percent); STAAR Calculator Policy; New Question Types (January 2022); What Families Should Know about STAAR; 2026 to 2027 and 2027 to 2028 testing calendars; House Bill 8 page and updated HB 8 FAQ (20 August 2026); STAAR performance standards page and 2023 grades 3 to 8 cut scores.',
    localProject: 'Our worked examples: 3/4 of 2 1/2 pounds is 15/8, shared among 3 bowls is 5/8 pound each; 6 notebooks for 4.50 gives a unit rate of 0.75 and 15 notebooks for 11.25. Our twelve-item practice set mapped to blueprint categories, our six-week plan to April 19, 2027, and our heaviest-category ladder. Lesson family: multi-step problems answered in exact form.',
    requiredMentions: ['30 questions worth 37 points', 'April 19 to 30, 2027', 'Students who achieve Approaches Grade Level or higher on STAAR have passed the test.', 'STAAR is not a high-stakes test for students', 'make up approximately 55-70% of the total points on the base test', 'calculators &ldquo;are not permitted&rdquo; for students taking the grades 3 to 7 STAAR mathematics tests', 'Student Success Tool (SST)', 'static and linear', '15/8 / 3 = 15/24 = 5/8', 'Probability and Numerical Representations', 'Grades 5 to 8: 75 minutes and 105 minutes'],
    sources: [
      { claim: 'STAAR grade 3 to 8 math blueprints, assessed curriculum and reference materials.', url: TEA + '/staar-mathematics-resources' },
      { claim: 'STAAR resources: online test, who is tested, practice and released tests.', url: TEA + '/staar-resources' },
      { claim: 'STAAR Calculator Policy.', url: TEA + '/staar-calculator-policy.pdf' },
      { claim: '2026 to 2027 Student Assessment Testing Calendar.', url: 'https://tea.texas.gov/assessment-and-accountability/student-assessment-testing-calendar-2026-2027-saft-update.pdf' },
      { claim: 'Updated House Bill 8 FAQ, 20 August 2026.', url: TEA + '/hb-8-faq-update.pdf' },
      { claim: 'STAAR performance standards and level definitions.', url: 'https://tea.texas.gov/data-reports/student-assessment-results/staar-performance-standards' },
      { claim: 'New question types by grade and content area.', url: 'https://tea.texas.gov/student-assessment/new-question-types-jan-2022.pdf' }
    ],
    rejectedClaims: [
      'Accelerated instruction rules after a low STAAR score (HB 4545 and later amendments): not stated; not verified at a TEA primary source in this session.',
      'Pass rates or district rankings: not printed; outside the brief and not needed.',
      'texasassessment.gov family pages (FAQ, score guide): render by JavaScript and returned no text to curl; nothing quoted from them.',
      'Reproducing released STAAR items or answer keys: refused; the page links to TEA instead.',
      'Score or grade promises for our classes: refused.',
      'Any affiliation with TEA, Texas districts or the STAAR contractor: none.'
    ]
  }
};
