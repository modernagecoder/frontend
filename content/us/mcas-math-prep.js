'use strict';
// MCAS math prep (ag- state-test door; UK and US exams cluster Phase 2, row US024, group B10).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from the
// Massachusetts Department of Elementary and Secondary Education (doe.mass.edu); copies in
// keyword-research-2026-09/uk-us-gap/src/mcas-math-prep/:
//  - MCAS Test Information for Grades 3-8 Mathematics (g3-8-math.docx): "aligned to the 2017 Massachusetts Mathematics
//    Curriculum Framework"; "All mathematics tests have two sessions."; "Grades 3–6:No calculators are allowed for either
//    session." (written "grades 3 to 6" on the page); grades 7 and 8 no calculator in Session 1, allowed in Session 2; question
//    types and points (constructed response 3 points in grade 3, 4 points in grades 4 to 8); common question table: grade 3
//    36 one-point, 0 two-point, 4 CR, 48 total points; grades 4 to 8 34, 2, 4, 54; reporting category percentages (+/-5%)
//    G3 OA 30, NBT 15, NF 20, MD 25, G 10; G4 20, 20, 30, 20, 10; G5 15, 30, 25, 20, 10; G6 RP 20, NS 20, EE 30, G 15, SP 15;
//    G7 20, 20, 25, 15, 20; G8 NS and EE 40, F 20, G 30, SP 10; "Common questions count toward a student's score, while matrix
//    questions consist of both field-test and equating questions and do not count toward a student's score."; matrix counts
//    (grade 3 five 1-point and one CR; 4 to 6 five and one; 7 to 8 six and two).
//  - Next-Generation MCAS Test Information for Grade 10 Mathematics (g10-math-nextgen.docx): assesses "the standards that overlap
//    between the Model Algebra I and Model Geometry courses and the Model Mathematics I and Model Mathematics II courses";
//    "Standards coded with a (+) symbol are not assessed on the MCAS."; two sessions, no calculator in Session 1, allowed in
//    Session 2; 32 one-point, 6 two-point, 4 CR, 60 total points; Number & Quantity 15% (9 points), Algebra & Functions 35%
//    (21), Geometry 35% (21), Statistics & Probability 15% (9); matrix "ten additional 1- or 2-point questions and two
//    additional constructed-response questions". November test design document: same sessions and calculator rule.
//  - 2026–27 Initial Statewide Testing Schedule (2027schedule.docx, last updated September 1, 2026): November 2026 high school
//    math Session 1 November 10, Session 2 November 12, window November 10–17; spring 2027 grades 3–8 mathematics April 26–May
//    21; grade 10 mathematics Session 1 May 18, Session 2 May 19, window May 18–26 (dashes written "to" on the page).
//  - Mathematics achievement level descriptors (pld/math-nextgen-ald.html): Exceeding, Meeting, Partially Meeting, Not Meeting
//    Expectations, quoted in short; Meeting: "met grade-level expectations and is academically on-track to succeed in the
//    current grade in this subject".
//  - Graduation Requirements and Related Guidance (ccte/graduation): "In November 2024, Massachusetts voters approved a ballot
//    question that amended the Competency Determination CD requirement in the law."; class of 2027 and beyond mathematics
//    coursework "The equivalent of one year of both Algebra I and Geometry courses, or the equivalent of one year of both
//    Integrated Math I and Integrated Math II."; students who met the CD before January 3, 2025 retain that benefit.
//  - Reference sheets page (grades 5, 6, 7, 8 and 10, plus a grade 10 Spanish version); Released Test Questions and Practice
//    Tests page (MCAS Item Library by standard, "2025 and earlier"; practice tests on the MCAS Resource Center).
// No released item reproduced. Point totals quoted as DESE prints them; no totals computed.
// Our own material, labelled: the grade 10 four-point constructed-response worked example (a rectangular garden with a 2-foot
// path, area equation, quadratic solved by factoring, then a check), the session-split commentary, the twelve-item practice
// set, the November and May plans.
// Lesson family: building a four-point constructed response that survives a no-calculator session.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const DESE = 'https://www.doe.mass.edu';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MCAS MATH', blurb: 'Massachusetts MCAS math for grades 3 to 8 and grade 10 from DESE: sessions, points, calculator rules, the 2027 windows, the changed graduation rule and original practice.' },
  slug: 'mcas-math-prep',
  code: 'mcx',
  accent: '#865D58',
  accentRationale: 'MCAS math prep: a brick-and-brownstone #865D58 as allocated, about 5.4:1 on paper #FBF8F2 and above 4.5:1 on the deepest tint, a Boston brownstone tone distinct from the Pennsylvania browns',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-and-ai-classes-in-massachusetts', name: 'Massachusetts' }],
  routeLabel: 'MCAS math prep',
  title: 'MCAS Math Prep: Grades 3 to 8 and Grade 10, 2027 Guide',
  description: 'MCAS math prep for Massachusetts grades 3 to 8 and 10: sessions, points, calculator rules, the 2027 dates and the new graduation rule, from DESE, with practice.',
  ogDescription: 'Sixty points in grade 10, no calculator until session 2, and a graduation rule that changed in November 2024. Massachusetts MCAS math from DESE&rsquo;s own documents, with our practice.',
  twitterDescription: 'Massachusetts MCAS math from DESE&rsquo;s test designs, with original practice.',
  pageName: 'MCAS Math Prep',
  webPageDescription: 'A guide for Massachusetts families to the MCAS mathematics tests in grades 3 to 8 and grade 10, built from DESE test design documents, the 2026 to 2027 statewide testing schedule, achievement level descriptors and graduation guidance, with an original four-point worked example and practice set.',
  courseDescription: 'Live online math classes for Massachusetts students in grades 3 to 10, taught to the 2017 Massachusetts Mathematics Curriculum Framework, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'MCAS math prep',
  navLinks: [
    { href: '#points', label: 'Points' },
    { href: '#grade10', label: 'Grade 10' },
    { href: '#graduation', label: 'Graduation' },
    { href: '#dates', label: '2027 dates' },
    { href: '#cr', label: 'Four-pointer' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Massachusetts &middot; Grades 3 to 8 and 10 &middot; From DESE&rsquo;s test designs',
  h1: 'MCAS math prep for grades 3 to 8 and grade 10',
  lede: 'MCAS math has one rule that shapes everything else: in every grade, the first session is done without a calculator. Grades 3 to 6 never get one at all. Add a handful of four-point written questions and the test rewards children who can calculate by hand and then explain. The grade 10 test also changed meaning in November 2024, when voters altered the graduation requirement. This guide sets out what the Massachusetts Department of Elementary and Secondary Education publishes for 2026 to 2027, then works a grade 10 four-point question of our own.',
  secondaryCta: { href: '#cr', label: 'See a 4-point answer' },
  wa: 'Hello Modern Age Coders, my child in Massachusetts has MCAS math this year. Could we book a free first class?',
  heroNote: 'Live math since 2020 &middot; 10,000+ students &middot; lessons on Eastern Time',
  spec: [
    ['Test', 'MCAS Mathematics'],
    ['Run by', 'Massachusetts DESE'],
    ['Grades', '3 to 8 and 10'],
    ['Sessions', 'Two; session 1 never allows a calculator'],
    ['Grade 10 points', '60'],
    ['Spring 2027, grade 10', 'May 18 and 19'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'MCAS Mathematics is the Massachusetts state math test given by DESE in grades 3 to 8 and grade 10, aligned to the 2017 Massachusetts Mathematics Curriculum Framework. Every test has two sessions; grades 3 to 6 allow no calculator, and grades 7, 8 and 10 allow one only in session 2. Grade 10 is worth 60 points. Modern Age Coders teaches MCAS math live online, in a batch or 1-on-1, led by our High School Mathematics course for grade 10.',

  picks: {
    eyebrow: 'Courses for Massachusetts students',
    h2: 'Three courses that line up with the Massachusetts framework',
    lede: 'Hand calculation and written explanation come first in all three, because that is how MCAS is built.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'MCX / 01', title: 'High school math for grade 10 MCAS', note: 'Algebra and geometry, the two 35 percent categories.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MCX / 02', title: 'Grades 6 to 8 math', note: 'Ratios, expressions and the grade 8 geometry year.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'MCX / 03', title: 'Grades 3 to 5 math', note: 'Fractions and base ten, with no calculator in sight.' }
    ]
  },

  sections: [
    {
      id: 'points', tint: 'tint', eyebrow: 'Points',
      h2: 'How many points is the MCAS math test worth in each grade?',
      lede: 'Grade 3 is worth 48 points, grades 4 to 8 are worth 54, and grade 10 is worth 60. DESE builds each total from one-point questions, two-point questions and four constructed-response questions.',
      body: [
        { kind: 'table', caption: 'MCAS mathematics common questions by points (DESE test information documents for grades 3 to 8 and grade 10, read 31 October 2026)', head: ['Grade', '1-point questions', '2-point questions', 'Constructed response', 'Total points'], numCols: [1, 2, 3, 4], rows: [
          ['3', '36', '0', '4 (3 points each)', '48'],
          ['4 to 8', '34', '2', '4 (4 points each)', '54'],
          ['10', '32', '6', '4 (4 points each)', '60']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Common and matrix questions',
          left: [
            'Each test mixes two kinds of question. In DESE&rsquo;s words: &ldquo;Common questions count toward a student&rsquo;s score, while matrix questions consist of both field-test and equating questions and do not count toward a student&rsquo;s score.&rdquo;',
            'Students cannot tell which is which. In grades 7 and 8, for example, a student answers six extra 1- or 2-point questions and two extra constructed-response questions on top of the common set.'
          ],
          rightH3: 'Question types',
          right: [
            'DESE lists five types: multiple choice, multiple select (more than one correct option), technology enhanced such as drag-and-drop and hot spot, short answer or fill-in-the-blank, and constructed response.',
            'A constructed response is a multi-part item &ldquo;that includes calculations and explanations&rdquo;. Four of them make up a large share of the total, which is why we spend real lesson time on them.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + DESE + '/mcas/tdd/testdesign/g3-8-math.docx" rel="noopener" target="_blank">MCAS Test Information for Grades 3 to 8 Mathematics</a> and <a class="ag-inline-link" href="' + DESE + '/mcas/tdd/testdesign/g10-math-nextgen.docx" rel="noopener" target="_blank">Next-Generation MCAS Test Information for Grade 10 Mathematics</a>, DESE, read 31 October 2026. We are not connected with DESE or any Massachusetts district.' }
      ]
    },
    {
      id: 'calculators', tint: 'deep', eyebrow: 'Calculators',
      h2: 'Can you use a calculator on MCAS math?',
      lede: 'Not in grades 3 to 6, in either session. In grades 7, 8 and 10, session 1 is calculator-free and session 2 allows one.',
      body: [
        { kind: 'table', caption: 'MCAS mathematics calculator rules by grade (DESE test information documents, read 31 October 2026)', head: ['Grade', 'Session 1', 'Session 2'], rows: [
          ['3, 4, 5 and 6', 'No calculator', 'No calculator'],
          ['7 and 8', 'No calculator', 'Calculator allowed'],
          ['10 (spring and November)', 'No calculator', 'Calculator allowed']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why this matters more than it looks',
          left: [
            'Four full years of MCAS math, grades 3 to 6, are taken entirely by hand. Massachusetts goes further here than many states, so speed and accuracy with fractions, decimals and multi-digit arithmetic carry real weight.',
            'Even in grade 10, half the test arrives without a calculator, so simplifying radicals, solving linear equations and factoring must be comfortable on paper.'
          ],
          rightH3: 'Reference sheets help, but only so far',
          right: [
            'DESE publishes math reference sheets for grades 5, 6, 7, 8 and 10, with a Spanish version of the grade 10 sheet. We use the real sheet in class so it is familiar.',
            'A formula sheet gives the formula, not the method. Choosing which formula fits a problem, and rearranging it, is the skill we practise.'
          ] },
        { kind: 'source', html: 'The reference sheets are on DESE&rsquo;s <a class="ag-inline-link" href="' + DESE + '/mcas/tdd/math.html?section=reference" rel="noopener" target="_blank">Mathematics Test Design and Development page</a>, reference sheets section.' }
      ]
    },
    {
      id: 'blueprint', tint: 'tint', eyebrow: 'Reporting categories',
      h2: 'What math topics are on the MCAS test in grades 3 to 8?',
      lede: 'DESE gives a percentage for each reporting category, plus or minus 5 percent. The heaviest category changes almost every year.',
      body: [
        { kind: 'table', caption: 'MCAS grades 3 to 8 mathematics reporting category percentages, plus or minus 5% (DESE, read 31 October 2026)', head: ['Grade', 'Heaviest category', 'Other categories'], rows: [
          ['3', 'Operations and Algebraic Thinking 30%', 'Measurement and Data 25%; Fractions 20%; Base Ten 15%; Geometry 10%'],
          ['4', 'Fractions 30%', 'Operations and Algebraic Thinking 20%; Base Ten 20%; Measurement and Data 20%; Geometry 10%'],
          ['5', 'Base Ten 30%', 'Fractions 25%; Measurement and Data 20%; Operations and Algebraic Thinking 15%; Geometry 10%'],
          ['6', 'Expressions and Equations 30%', 'Ratios 20%; Number System 20%; Geometry 15%; Statistics and Probability 15%'],
          ['7', 'Expressions and Equations 25%', 'Ratios 20%; Number System 20%; Statistics and Probability 20%; Geometry 15%'],
          ['8', 'Number System with Expressions and Equations 40%', 'Geometry 30%; Functions 20%; Statistics and Probability 10%']
        ] },
        { kind: 'p', mt: true, html: 'Two patterns stand out. Grade 4 is the fraction year, at 30 percent. Grade 8 puts 30 percent on geometry, the Pythagorean Theorem, transformations and volume, which surprises families who expect it to be an algebra year. We plan the year&rsquo;s lessons from this table, not from the textbook order.' }
      ]
    },
    {
      id: 'grade10', tint: 'deep', eyebrow: 'Grade 10',
      h2: 'What is on the grade 10 MCAS math test?',
      lede: 'Algebra and geometry dominate, at 35 percent each. The test covers only the standards shared by the Algebra I and Geometry courses and the Integrated Math I and II courses.',
      body: [
        { kind: 'table', caption: 'Grade 10 MCAS mathematics reporting categories (Next-Generation MCAS Test Information for Grade 10 Mathematics, DESE, read 31 October 2026)', head: ['Reporting category', 'Percentage (plus or minus 5%)', 'Points'], numCols: [1, 2], rows: [
          ['Number and Quantity', '15%', '9'],
          ['Algebra and Functions', '35%', '21'],
          ['Geometry', '35%', '21'],
          ['Statistics and Probability', '15%', '9']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Which standards count',
          left: [
            'DESE&rsquo;s document says the test assesses &ldquo;the standards that overlap between the Model Algebra I and Model Geometry courses and the Model Mathematics I and Model Mathematics II courses&rdquo; in the 2017 framework.',
            'It adds that &ldquo;Standards coded with a (+) symbol are not assessed on the MCAS.&rdquo; So a student in either a traditional or an integrated sequence sits the same test.'
          ],
          rightH3: 'Extra questions in grade 10',
          right: [
            'On top of the 60-point common set, grade 10 students answer ten additional 1- or 2-point matrix questions and two additional constructed-response questions, which do not count.',
            'That makes the test longer than its point total suggests. We build stamina with full two-session rehearsals in the spring.'
          ] }
      ]
    },
    {
      id: 'graduation', tint: 'tint', eyebrow: 'Graduation',
      h2: 'Do you still have to pass the MCAS to graduate in Massachusetts?',
      lede: 'Not in the old way. In November 2024 voters approved a ballot question that amended the Competency Determination, and DESE&rsquo;s guidance now ties it to coursework rather than a passing MCAS score.',
      body: [
        { kind: 'two',
          leftH3: 'What DESE says now',
          left: [
            'DESE&rsquo;s graduation page states: &ldquo;In November 2024, Massachusetts voters approved a ballot question that amended the Competency Determination CD requirement in the law.&rdquo; The Board of Elementary and Secondary Education amended the regulations in May 2025.',
            'For mathematics, students in the class of 2027 and beyond must earn full credit, under the district&rsquo;s grading policy, in the equivalent of one year of both Algebra I and Geometry, or of both Integrated Math I and Integrated Math II.'
          ],
          rightH3: 'So why does grade 10 MCAS still matter?',
          right: [
            'Students still take the grade 10 test; DESE still schedules it in May and November. Results are reported to families and schools and used for school accountability.',
            'And the grade 10 test covers exactly the Algebra I and Geometry content that the coursework requirement names, so preparing for one supports the other.'
          ] },
        { kind: 'p', mt: true, html: 'DESE also notes that students who met the Competency Determination in math before January 3, 2025 retain that benefit. Local districts can add their own graduation requirements on top. If your teenager&rsquo;s situation is unusual, the school counselor is the right person to confirm what applies.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + DESE + '/ccte/graduation/default.html" rel="noopener" target="_blank">Graduation Requirements and Related Guidance</a>, DESE, read 31 October 2026.' }
      ]
    },
    {
      id: 'dates', tint: 'deep', eyebrow: '2026 to 2027',
      h2: 'When is MCAS math in 2027?',
      lede: 'Grades 3 to 8 test math between April 26 and May 21, 2027. Grade 10 has recommended session dates of May 18 and 19, 2027, with a November 2026 retest window too.',
      body: [
        { kind: 'table', caption: 'MCAS mathematics dates, 2026 to 2027 Initial Statewide Testing Schedule (DESE, last updated September 1, 2026, read 31 October 2026)', head: ['Test', 'Recommended dates', 'Administration window'], rows: [
          ['November 2026 high school math', 'Session 1 November 10; Session 2 November 12, 2026', 'November 10 to 17, 2026'],
          ['Spring 2027 grades 3 to 8 math', 'Set by the school within the window', 'April 26 to May 21, 2027'],
          ['Spring 2027 grade 10 math', 'Session 1 May 18; Session 2 May 19, 2027', 'May 18 to 26, 2027']
        ] },
        { kind: 'p', mt: true, html: 'DESE labels this the initial schedule and asks schools to check its website for updates, so confirm with the school in the spring. Note that grades 3 to 8 sit ELA first, from March 22 to April 16, 2027, so math lands a few weeks later.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + DESE + '/mcas/2027schedule.docx" rel="noopener" target="_blank">2026 to 2027 Initial Statewide Testing Schedule</a>, on DESE&rsquo;s <a class="ag-inline-link" href="' + DESE + '/mcas/cal.html" rel="noopener" target="_blank">Statewide Testing Schedule</a> page.' }
      ]
    },
    {
      id: 'cr', tint: 'tint', eyebrow: 'Constructed response',
      h2: 'How do you earn all four points on an MCAS math constructed response?',
      lede: 'Answer every part, show the calculation, and explain in words where the question asks. Here is a grade 10 problem we wrote, the kind that could sit in the no-calculator session.',
      body: [
        { kind: 'ol', items: [
          '<b>Our problem (not an MCAS item).</b> A rectangular garden is 3 feet longer than it is wide. A path 2 feet wide runs all the way around it, and the garden plus path covers 180 square feet. Part A: write an equation for the width w of the garden. Part B: solve it. Part C: find the area of the path alone, and explain why one solution of your equation must be rejected.',
          '<b>Part A.</b> The garden is w by w + 3. The path adds 2 feet on every side, so the outer rectangle is (w + 4) by (w + 7). The equation is (w + 4)(w + 7) = 180.',
          '<b>Part B.</b> Expand: w&sup2; + 11w + 28 = 180, so w&sup2; + 11w - 152 = 0. Look for two numbers with product -152 and sum 11: 19 and -8. So (w + 19)(w - 8) = 0, giving w = 8 or w = -19.',
          '<b>Part C.</b> A width cannot be negative, so w = -19 is rejected and w = 8. The garden is 8 by 11, which is 88 square feet. The path is 180 - 88 = 92 square feet. Check: the outer rectangle is 12 by 15, and 12 x 15 = 180.',
          '<b>Where the points come from, as we teach it.</b> A correct equation with the plus-4 and plus-7 explained; correct solving shown step by step, by hand; the rejected root with a reason in words; and the path area with its unit. Each part is visible, so partial credit is possible even if one step slips.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The no-calculator habit',
          left: [
            'Factoring 152 is quicker if you know 152 = 8 x 19. We drill factor pairs of three-digit numbers for exactly this reason, because session 1 offers no shortcut.'
          ],
          rightH3: 'The common mistake',
          right: [
            'Adding 2 to each dimension instead of 4. The path runs around both sides, so the width grows by 2 + 2. A sketch with the path labelled prevents it.'
          ] }
      ]
    },
    {
      id: 'levels', tint: 'deep', eyebrow: 'Results',
      h2: 'What do the MCAS achievement levels mean?',
      lede: 'There are four, in DESE&rsquo;s own words: Exceeding, Meeting, Partially Meeting and Not Meeting Expectations.',
      body: [
        { kind: 'table', caption: 'MCAS achievement level descriptors for mathematics (DESE, read 31 October 2026)', head: ['Level', 'DESE&rsquo;s description, in short'], rows: [
          ['Exceeding Expectations', 'Exceeded grade-level expectations by demonstrating mastery of the subject matter'],
          ['Meeting Expectations', 'Met grade-level expectations and is academically on-track to succeed in the current grade in this subject'],
          ['Partially Meeting Expectations', 'Partially met expectations; the school and family should consider whether extra academic help is needed'],
          ['Not Meeting Expectations', 'Did not meet expectations; the school and family should decide on coordinated assistance or extra instruction']
        ] },
        { kind: 'p', mt: true, html: 'The descriptors for the two lower levels ask the school to work with parents, which is worth knowing: a Partially Meeting result is a reason to start a conversation with the teacher, and DESE says so. Reading the report alongside the reporting category table above shows which part of the year needs attention.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice',
      h2: 'Twelve MCAS-style math practice questions with answers',
      lede: 'Ours, not DESE&rsquo;s. Those marked session 1 should be done with no calculator, as on the real test.',
      body: [
        { kind: 'table', caption: 'Original practice (ours, not MCAS items), with answers', head: ['Grade', 'Question', 'Session style', 'Answer'], rows: [
          ['3', 'Round 467 to the nearest hundred and to the nearest ten.', '1', '500; 470'],
          ['3', 'Draw a rectangle with area 12 square units in two different ways.', '1', '3 by 4 and 2 by 6 (or 1 by 12)'],
          ['4', 'Write 7/4 as a mixed number and place it between two whole numbers.', '1', '1 3/4, between 1 and 2'],
          ['5', 'Multiply 3.6 x 25 without a calculator.', '1', '90'],
          ['6', 'Find 35% of 80.', '1', '28'],
          ['6', 'A triangle has base 9 cm and height 6 cm. Find its area.', '1', '27 square cm'],
          ['7', 'A jacket costs 64 after a 20% discount. What was the original price?', '2', '80'],
          ['8', 'Find the hypotenuse of a right triangle whose legs are 8 and 15.', '1', '17'],
          ['8', 'Is the relation {(1, 2), (2, 4), (1, 5)} a function? Explain.', '1', 'No: input 1 has two outputs'],
          ['10', 'Simplify the square root of 72.', '1', '6 times the square root of 2'],
          ['10', 'Solve the system 3x + y = 14 and x - y = 2.', '1', '(4, 2)'],
          ['10', 'A cone has radius 3 and height 10. Find its volume to the nearest tenth.', '2', '94.2 cubic units']
        ] },
        { kind: 'p', mt: true, html: 'DESE&rsquo;s <a class="ag-inline-link" href="' + DESE + '/mcas/testitems.html" rel="noopener" target="_blank">Released Test Questions and Practice Tests</a> page links the MCAS Item Library, searchable by standard for computer-based questions from 2025 and earlier, and practice tests on the MCAS Resource Center. We save those for rehearsal and teach with our own problems first.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan',
      h2: 'How to prepare for grade 10 MCAS math, May or November',
      lede: 'Our plan for the twelve weeks before the May 18, 2027 session, or the November 10, 2026 retest for students who need it.',
      body: [
        { kind: 'ol', items: [
          '<b>Weeks 1 and 2: diagnose by category.</b> One released session from the Item Library, scored against the four reporting categories.',
          '<b>Weeks 3 to 6: Algebra and Functions, then Geometry.</b> The two 35 percent categories, by hand first: linear and quadratic equations, then similarity, right triangles and volume.',
          '<b>Weeks 7 and 8: Number and Quantity, Statistics and Probability.</b> Radicals, exponents, units, two-way tables and scatter plots.',
          '<b>Weeks 9 and 10: constructed responses.</b> One four-point problem every lesson, like our garden, written up in parts.',
          '<b>Week 11: the calculator session.</b> Practice tests on the MCAS Resource Center, session 2 with the calculator, session 1 without.',
          '<b>Week 12: two sessions on two days.</b> A rehearsal that mirrors May 18 and 19, then rest.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Grade by grade',
    h2: 'The year that needs the most attention in each band',
    lede: 'Our reading of DESE&rsquo;s reporting category percentages.',
    table: { caption: 'Priorities (category weights from DESE; priorities ours)', head: ['Grade', 'Secure first', 'Because'], rows: [
      ['3', 'Multiplication and division within 100', 'Operations and Algebraic Thinking is 30 percent'],
      ['4', 'Fraction equivalence and comparison', 'Fractions reach 30 percent'],
      ['5', 'Decimals and multi-digit arithmetic', 'Base ten is 30 percent, all by hand'],
      ['6', 'Expressions and one-step equations', 'Expressions and Equations is 30 percent'],
      ['7', 'Proportional reasoning and percent', 'First year with a calculator in session 2'],
      ['8', 'Pythagorean Theorem and transformations', 'Geometry is 30 percent'],
      ['10', 'Quadratics and right-triangle geometry', 'Two categories at 35 percent each']
    ] },
    left: { h3: 'For parents', ps: [
      'For grades 3 to 6, a few minutes of mental arithmetic most days is the best MCAS preparation available, since there is never a calculator.',
      'Read the achievement level together with the reporting category scores on the report to see which part of the year to revisit.'
    ] },
    right: { h3: 'For students', ps: [
      'On a constructed response, label each part A, B, C in your answer. It helps the scorer and it helps you not skip one.',
      'In session 1, estimate first. If your answer is far from the estimate, recheck before moving on.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for Massachusetts students',
    lede: 'Every grade MCAS covers, and some routes beyond it.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Grades 3 to 5', courses: [
        { code: 'MCX / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'All five grade 3 to 5 categories.' },
        { code: 'MCX / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'For the years with no calculator.' },
        { code: 'MCX / E / 03', slug: 'early-math-foundations', title: 'Early math', blurb: 'Ages 4 to 7, before MCAS begins.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'MCX / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Grade 6 to 8 framework topics.' },
        { code: 'MCX / M / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra I for grade 8 or 9.' },
        { code: 'MCX / M / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'MATHCOUNTS-style problem solving.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Grade 10 and after', courses: [
        { code: 'MCX / H / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra, geometry and beyond.' },
        { code: 'MCX / H / 02', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'For junior year.' },
        { code: 'MCX / H / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Functions you can program.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Classes timed for a Massachusetts school day',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school ET', l: 'Weekday lessons alongside the class unit.' },
      { time: 'Weekends', l: 'Two-session rehearsals in April and May.' },
      { time: '1-on-1', l: 'Four-point answers rebuilt part by part.' }
    ],
    cells: [
      { h3: 'By hand first', p: 'Session 1 skills before any calculator.' },
      { h3: 'Framework order', p: 'The 2017 Massachusetts standards.' },
      { h3: 'Four-pointers', p: 'Constructed responses most weeks.' },
      { h3: 'Reference sheets', p: 'DESE&rsquo;s own sheet in class.' },
      { h3: 'Item Library late', p: 'Released questions for rehearsal.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'Some of our older students take their math into code. Visit <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly fee in US dollars and no term commitment: grade 10 families often book from March to the May sessions, or September to the November retest.',
    free: ['A free first class', 'Bring a recent constructed response', 'No card asked for'],
    group: ['Fifteen to twenty students', 'A steady teacher', 'Choose your batch', 'Monthly'],
    one: ['One teacher, one student', 'Timed to May or November', 'Flexible slots']
  },

  faq: {
    eyebrow: 'Massachusetts families ask',
    h2: 'MCAS math: common questions',
    items: [
      { q: 'When is MCAS math in 2027?', a: 'DESE\'s initial schedule puts grades 3 to 8 math between April 26 and May 21, 2027. Grade 10 math has recommended dates of May 18 and 19, 2027, inside a window of May 18 to 26.' },
      { q: 'Is there a calculator on the MCAS math test?', a: 'Not in grades 3 to 6, in either session. In grades 7, 8 and 10, session 1 is calculator-free and calculators are allowed in session 2.' },
      { q: 'How many points is the grade 10 MCAS math test?', a: 'Sixty points from common questions: 32 one-point questions, 6 two-point questions and 4 constructed-response questions, according to DESE\'s grade 10 test information.' },
      { q: 'What is on the grade 10 MCAS math test?', a: 'Algebra and Functions and Geometry are 35 percent each, Number and Quantity and Statistics and Probability 15 percent each. It covers the standards shared by Algebra I and Geometry and by Integrated Math I and II.' },
      { q: 'Do you need to pass the MCAS to graduate in Massachusetts?', a: 'Not as before. After the November 2024 ballot question, DESE\'s guidance for the class of 2027 and beyond requires full credit in coursework such as Algebra I and Geometry; check local requirements with your school.' },
      { q: 'Is there a November MCAS math retest?', a: 'Yes. DESE\'s 2026 to 2027 schedule includes a November high school math test with recommended dates of November 10 and 12, 2026, in a window of November 10 to 17.' },
      { q: 'What does Meeting Expectations mean on MCAS?', a: 'DESE says a student at this level met grade-level expectations and is academically on-track to succeed in the current grade in that subject. Exceeding is above it, and Partially Meeting and Not Meeting are below.' },
      { q: 'Where can I find MCAS math practice tests?', a: 'DESE links practice tests on the MCAS Resource Center and released computer-based questions from 2025 and earlier in the MCAS Item Library. The questions on this page are our own extra practice.' },
      { q: 'Do matrix questions count on MCAS?', a: 'No. DESE says matrix questions are field-test and equating questions that do not count toward a student\'s score, but students cannot tell which ones they are.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Lessons are scheduled on Eastern Time.' },
      { q: 'Are you connected with DESE?', a: 'No. Modern Age Coders is an independent online school with no connection to the Massachusetts Department of Elementary and Secondary Education or any district. We quote DESE\'s public documents and link to them.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Grade pages and Massachusetts pages.',
    items: [
      { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math tutoring', p: 'The MCAS fraction year.' },
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'Geometry at 30 percent.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'For after grade 10.' },
      { href: '/psat-8-9-math-prep', label: 'PSAT 8/9 math prep', p: 'Another test in the same years.' },
      { href: '/coding-and-ai-classes-in-massachusetts', label: 'Coding and AI in Massachusetts', p: 'Our Massachusetts page.' },
      { href: '/ai-and-python-classes-for-teens-in-boston-massachusetts', label: 'Boston teen classes', p: 'Python and AI for older students.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send one constructed response your child wrote at school. In the first class the teacher rebuilds it with them, part by part, into a four-point answer.',
    readFirst: 'Learn <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or see the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'Teachers join from India at hours fixed on Eastern Time, after the school day in Massachusetts or at weekends. Message us on WhatsApp for the fastest reply.',
    formNote: 'Booking is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-3rd-grade', label: 'Grade 3 math' },
        { href: '/online-math-tutor-6th-grade', label: 'Grade 6 math' },
        { href: '/online-math-tutor-8th-grade', label: 'Grade 8 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'Massachusetts and the US', links: [
        { href: '/coding-and-ai-classes-in-massachusetts', label: 'Massachusetts' },
        { href: '/ai-and-python-classes-for-teens-in-boston-massachusetts', label: 'Boston' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Session 1, no calculator'
  },

  personalityCss: `
.ag-root.ag-mcx .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-mcx .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-mcx .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-mcx .ag-table td.ag-num { font-variant-numeric: tabular-nums; text-align: center; }
.ag-root.ag-mcx .ag-steps li { padding-bottom: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Massachusetts Department of Elementary and Secondary Education, read raw 31 October 2026: MCAS Test Information for Grades 3 to 8 Mathematics, Next-Generation MCAS Test Information for Grade 10 Mathematics and the November test design (sessions, calculators, question types, points, reporting categories, matrix questions); 2026 to 2027 Initial Statewide Testing Schedule (last updated September 1, 2026); mathematics achievement level descriptors; Graduation Requirements and Related Guidance (November 2024 ballot, class of 2027 coursework); reference sheets page; released questions and practice tests page.',
    localProject: 'Our grade 10 four-point worked example: a garden 3 feet longer than wide with a 2-foot path, (w + 4)(w + 7) = 180, factored as (w + 19)(w - 8) = 0, w = 8, garden 88 and path 92 square feet, with the negative root rejected. Our twelve-item practice set by session style, the twelve-week grade 10 plan and the grade ladder. Lesson family: four-point constructed responses without a calculator.',
    requiredMentions: ['matrix questions consist of both field-test and equating questions and do not count toward a student&rsquo;s score.', 'Standards coded with a (+) symbol are not assessed on the MCAS.', 'In November 2024, Massachusetts voters approved a ballot question that amended the Competency Determination CD requirement in the law.', 'academically on-track to succeed in the current grade in this subject', 'April 26 to May 21, 2027', 'Session 1 May 18; Session 2 May 19, 2027', 'November 10 to 17, 2026', '(w + 4)(w + 7) = 180', 'So (w + 19)(w - 8) = 0', 'Number System with Expressions and Equations 40%'],
    sources: [
      { claim: 'MCAS Test Information for Grades 3 to 8 Mathematics.', url: DESE + '/mcas/tdd/testdesign/g3-8-math.docx' },
      { claim: 'Next-Generation MCAS Test Information for Grade 10 Mathematics.', url: DESE + '/mcas/tdd/testdesign/g10-math-nextgen.docx' },
      { claim: '2026 to 2027 Initial Statewide Testing Schedule.', url: DESE + '/mcas/2027schedule.docx' },
      { claim: 'MCAS mathematics achievement level descriptors.', url: DESE + '/mcas/tdd/pld/math-nextgen-ald.html' },
      { claim: 'Graduation Requirements and Related Guidance.', url: DESE + '/ccte/graduation/default.html' },
      { claim: 'Released Test Questions and Practice Tests.', url: DESE + '/mcas/testitems.html' }
    ],
    rejectedClaims: [
      'Calculator type for grades 7, 8 and 10 (scientific or graphing, embedded or handheld): not stated in the test design documents read; only "calculators are allowed" in session 2 is printed.',
      'Scaled score ranges for the achievement levels: not found on the pages read; not printed.',
      'John and Abigail Adams Scholarship eligibility from MCAS: read on DESE\'s site but left out, as financial-aid content outside this page\'s scope.',
      'Timing per session: no official estimate located in the documents read; not printed.',
      'Reproducing released MCAS items or scoring guides: refused; linked instead.',
      'Score, level or graduation promises: refused. Affiliation with DESE: none.'
    ]
  }
};
