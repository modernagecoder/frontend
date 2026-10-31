'use strict';
// Stanford Online High School math prep (ag- guide door; UK and US exams cluster Phase 2, row US078, writer group B16).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl -A "Mozilla/5.0" on 31
// October 2026 at ohs.stanford.edu; copies in keyword-research-2026-09/uk-us-gap/src/stanford-online-high-school-math-prep/:
//  - Acceptance Criteria (admissions_acceptance-criteria.txt): "Admission to Stanford OHS is competitive"; "we are unable
//    to accept all qualified applicants"; holistic review, "no one item is the deciding component"; younger applicants:
//    "we typically encourage students to apply for grade 7 when they are in grade 6 or ages 11–12" (en dash, written
//    "ages 11 to 12"); "places students in particular courses by age, grade level, and demonstrated content knowledge";
//    standardized test required for applicants homeschooled, or at a non-English-language school, between September 2024
//    and December 2026; test date between September 2025 and December 2026; optional otherwise, "there will be no
//    advantage in the evaluation process"; suggested tests by grade band (grades 7 to 8: Middle SSAT or ISEE, PSAT 8/9,
//    PreACT 8/9; grades 9 to 10: Upper SSAT or ISEE, PSAT 8/9, PreACT 8/9, PSAT 10; grades 11 to 12: PSAT, PreACT, SAT,
//    or ACT, PSAT 10).
//  - How to Apply (admissions_apply.txt): 2027-28 entry; application deadline "January 7, 2027, at 11:59 pm Pacific
//    Time"; optional online interview deadline "November 11, 2026, 11:59 pm Pacific Time"; decisions March 2027;
//    enrollment contract due 10 days after decisions; "at least two recommendation forms (one Humanities/Social Science
//    teacher and one Mathematics/Science teacher)"; "All responses, essays, and work submitted in the application must be
//    the student's own."; decision types incl. "Admission Restricted to Mathematics/Science or Humanities".
//  - Enrollment Options (admissions_enrollment-options.txt): full-time 4 to 5 yearlong courses; part-time 2 to 3;
//    single course "1 yearlong course or 2 semester-long courses"; "8-10 hours per week, per course"; part-time "20-30
//    hours per week". Admissions FAQ: "We serve academically advanced students who are in grades 7–12".
//  - Mathematics (academics_mathematics.txt): "Focus on Proofs"; "Proof-writing enables students to present clear and
//    logical mathematical arguments."; the division head quoted by the school: courses "when they are ready to do so,
//    without the complication of their grade level" (quoted, not named).
//  - Course Catalog 2026-27, Mathematics filter (math-catalog-0.html): Prealgebra (JM007); Beginning Algebra (OM011),
//    prereq JM007; Intermediate Algebra (OM012), prereq OM011; Geometry and Foundations of Proof (OM015), prereq OM011;
//    Precalculus with Trigonometry (OM013), prereq OM012 and OM015; Single-Variable Calculus (OM045), prereq OM013;
//    Advanced Problem Solving and Proof Techniques (OM050), prereq OM013; Statistics and Data Analysis (OM061), prereq
//    OM013; Multivariable Calculus (UM150), prereq OM045 or Calculus C (OM42C) "with a grade of A- or better, or an AP
//    Calculus BC Exam score of 4 or 5"; catalog note: "we have replaced all of our Advanced Placement (AP) courses with
//    custom courses"; students may take AP Exams locally.
// Not used: tuition and financial aid figures (no prices), named staff, nondiscrimination contacts.
// Our own material, labelled on the page: the proof that the sum of the first n odd numbers is n squared (1 + 3 + ... + 19
// = 100), the odd-times-odd proof, the readiness self-check, the seven-problem practice set (x = 17, (x - 2)(x - 3),
// slope 3, 5-12-13, 100, sin 30 degrees = 1/2, the odd product) checked in Python, and the sixteen-week plan.
// Lesson family: writing a direct proof, claim then reasons then conclusion.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'ADMISSIONS PREP', blurb: 'Stanford Online High School math: the OHS math sequence and prerequisites, 2027-28 admission dates, testing rules, and how to build proof-ready math.' },
  slug: 'stanford-online-high-school-math-prep',
  code: 'sthi',
  accent: '#8A5F21',
  accentRationale: 'Stanford Online High School math prep: the allocated warm bronze #8A5F21, a library-desk brown; about 5.3:1 on the #FBF8F2 paper, above the 4.5:1 floor',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Stanford Online High School math prep',
  title: 'Stanford Online High School Math Prep: OHS Courses, Dates',
  description: 'Stanford Online High School math prep: the OHS math course sequence and prerequisites, 2027-28 admission dates and testing rules, and proof-ready practice.',
  ogDescription: 'Stanford OHS places students in math by demonstrated knowledge, not grade, and puts proof at the center. Here is its published course sequence, the 2027-28 admission timeline and testing rules, and how to build math that is ready for it.',
  twitterDescription: 'Stanford Online High School math: the OHS sequence, 2027-28 dates and proof-ready practice.',
  pageName: 'Stanford Online High School Math Prep',
  webPageDescription: 'A guide for families considering Stanford Online High School: its mathematics course sequence and prerequisites from the 2026-27 catalog, how placement works, the 2027-28 application deadlines, standardized testing rules, enrollment levels, and original proof and algebra practice.',
  courseDescription: 'Live online high school mathematics for US students in grades 7 to 12: algebra, geometry with proof, precalculus and calculus, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Stanford Online High School math prep',
  navLinks: [
    { href: '#ohs', label: 'Stanford OHS' },
    { href: '#sequence', label: 'Math sequence' },
    { href: '#apply', label: 'Dates and testing' },
    { href: '#proof', label: 'Proof' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 7 to 12 &middot; Stanford Online High School',
  h1: 'Stanford Online High School math prep',
  lede: 'Stanford Online High School is unusual in two ways that matter for math. It places students in a math course by what they know, not by their grade, and its math program puts written proof at the center. So the honest preparation is not a trick for an entrance test; it is solid algebra and geometry, and the habit of explaining why an answer is true. This guide sets out the OHS math sequence from its own 2026-27 catalog, the 2027-28 admission timeline and testing rules, and original practice in the style of thinking OHS asks for.',
  secondaryCta: { href: '#sequence', label: 'See the OHS math sequence' },
  wa: 'Hello Modern Age Coders, my child in the US is thinking about applying to Stanford Online High School and wants to strengthen their math. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; ages 6 to 67',
  spec: [
    ['School', 'Stanford Online High School (OHS)'],
    ['Grades served', '7 to 12'],
    ['2027-28 deadline', 'January 7, 2027'],
    ['Math placement', 'By demonstrated knowledge'],
    ['Math focus', 'Proof and problem solving'],
    ['Our lessons', 'Live online, batch or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Stanford Online High School is a selective online school for academically advanced students in grades 7 to 12. It places students in math by demonstrated content knowledge, runs a sequence from Prealgebra to university-level courses with a strong focus on proof, and takes 2027-28 applications until January 7, 2027. Modern Age Coders is not connected with Stanford. We teach the algebra, geometry and proof-writing that sequence builds on, live online in our high school mathematics course, as a group of 15 to 20 or one to one.',

  picks: {
    eyebrow: 'Math that is ready for OHS',
    h2: 'Three courses that build OHS-ready math',
    lede: 'Each one aims at understanding and clear written reasoning, the two things a proof-focused program expects.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'STHI / 01', title: 'High school math, algebra to calculus', note: 'The full sequence, taught with reasons, for grades 9 to 12.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'STHI / 02', title: 'Middle school math mastery', note: 'Pre-algebra and geometry for grade 6 to 8 applicants.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'STHI / 03', title: 'Olympiad and competition math', note: 'Problem solving and proof beyond the school syllabus.' }
    ]
  },

  sections: [
    {
      id: 'ohs', tint: 'tint', eyebrow: 'Stanford OHS',
      h2: 'What is Stanford Online High School, and who is it for?',
      lede: 'Stanford Online High School is an online middle and high school run by Stanford University. Its admissions FAQ says it serves academically advanced students in grades 7 to 12, and its criteria page says plainly that admission is competitive.',
      body: [
        { kind: 'two',
          leftH3: 'Admission, in the school\'s words',
          left: [
            'The Acceptance Criteria page says "Admission to Stanford OHS is competitive" and that, to keep classes small, "we are unable to accept all qualified applicants". The committee reviews each application holistically, and "no one item is the deciding component".',
            'For younger students, the school says it typically encourages students "to apply for grade 7 when they are in grade 6 or ages 11 to 12".'
          ],
          rightH3: 'Three ways to enroll',
          right: [
            'Stanford OHS offers three enrollment levels. Full-time students take 4 to 5 yearlong courses; part-time students take 2 to 3; a single-course student takes "1 yearlong course or 2 semester-long courses".',
            'The school estimates "8-10 hours per week, per course" for a high school course. Many families start with a single math course while staying at their current school; one of the admission decision types is even "Admission Restricted to Mathematics/Science or Humanities".'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ohs.stanford.edu/admissions/acceptance-criteria" rel="noopener" target="_blank">Stanford OHS Acceptance Criteria</a> and <a class="ag-inline-link" href="https://ohs.stanford.edu/admissions/enrollment-options" rel="noopener" target="_blank">Enrollment Options</a>, read 31 October 2026. Stanford and Stanford Online High School are names of Stanford University. Modern Age Coders is an independent online school with no connection to Stanford University or Stanford OHS, and we make no admission promise of any kind.' }
      ]
    },
    {
      id: 'sequence', tint: 'deep', eyebrow: 'Math sequence',
      h2: 'What math courses does Stanford OHS offer, and in what order?',
      lede: 'The 2026-27 OHS catalog lists a math ladder from Prealgebra to university-level analysis, each course with a stated prerequisite. The school says it places students "by age, grade level, and demonstrated content knowledge", so a strong grade 8 student may start well up the ladder.',
      body: [
        { kind: 'table', caption: 'Stanford OHS math courses and prerequisites, high school stage (Stanford OHS Course Catalog 2026-27, Mathematics, read 31 October 2026)', head: ['Course (code)', 'Level', 'Prerequisite as published'], rows: [
          ['Prealgebra (JM007)', 'Middle school', 'None listed'],
          ['Beginning Algebra (OM011)', 'High school', 'Prealgebra (JM007)'],
          ['Intermediate Algebra (OM012)', 'High school', 'Beginning Algebra (OM011)'],
          ['Geometry and Foundations of Proof (OM015)', 'High school', 'Beginning Algebra (OM011)'],
          ['Precalculus with Trigonometry (OM013)', 'High school', 'Intermediate Algebra (OM012) and Geometry and Foundations of Proof (OM015)'],
          ['Single-Variable Calculus (OM045)', 'High school', 'Precalculus with Trigonometry (OM013)'],
          ['Advanced Problem Solving and Proof Techniques (OM050)', 'High school', 'Precalculus with Trigonometry (OM013)'],
          ['Statistics and Data Analysis (OM061)', 'High school', 'Precalculus and Trigonometry (OM013)']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Beyond calculus',
          left: [
            'The catalog continues into university-level courses: Multivariable Calculus (UM150), Linear Algebra (UM51A), Number Theory (UM152), Discrete Mathematics (UM160), Real Analysis (UM115), Complex Analysis (UM106) and research seminars.',
            'For Multivariable Calculus the stated route in is Single-Variable Calculus or Calculus C "with a grade of A- or better, or an AP Calculus BC Exam score of 4 or 5, or consent of instructor".'
          ],
          rightH3: 'Two things to notice',
          right: [
            'First, geometry here is "Geometry and Foundations of Proof", and it sits before Precalculus. Proof is not an extra at OHS; it is on the main road.',
            'Second, the catalog says the school has "replaced all of our Advanced Placement (AP) courses with custom courses" and that students can still sit AP Exams locally. Preparation should aim at understanding, not at one exam\'s format.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://ohs.stanford.edu/academics/course-catalog" rel="noopener" target="_blank">Stanford OHS Course Catalog 2026-27</a>, Mathematics filter, and the <a class="ag-inline-link" href="https://ohs.stanford.edu/academics/mathematics" rel="noopener" target="_blank">OHS Mathematics page</a>, read 31 October 2026. Course titles and codes are the school\'s; check the live catalog before planning.' }
      ]
    },
    {
      id: 'apply', tint: 'tint', eyebrow: 'Dates and testing',
      h2: 'When is the Stanford OHS deadline, and is a test score required?',
      lede: 'For entry in the 2027-28 school year, the application deadline is January 7, 2027, at 11:59 pm Pacific Time. A standardized test score is required only for some applicants, mainly those who were homeschooled recently.',
      body: [
        { kind: 'table', caption: 'Stanford OHS 2027-28 admission timeline (How to Apply page, read 31 October 2026)', head: ['Step', 'Date as published'], rows: [
          ['Deadline to apply if you want the optional online interview', 'November 11, 2026, 11:59 pm Pacific Time'],
          ['Application deadline (standard timeline)', 'January 7, 2027, at 11:59 pm Pacific Time'],
          ['Decision notification', 'March 2027'],
          ['Enrollment contract due', '10 days after decisions are released']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Who must send a test score',
          left: [
            'The Acceptance Criteria page requires a score from an approved test for applicants who were homeschooled, or attended a school taught in a language other than English, between September 2024 and December 2026. The test must be taken between September 2025 and December 2026.',
            'For everyone else a score is optional, and the school says that if sent "there will be no advantage in the evaluation process".'
          ],
          rightH3: 'Which tests, by grade',
          right: [
            'OHS suggests the Middle SSAT or ISEE, PSAT 8/9 or PreACT 8/9 for grade 7 to 8 applicants; the Upper SSAT or ISEE, PSAT 8/9, PreACT 8/9 or PSAT 10 for grades 9 to 10; and the PSAT, PreACT, SAT, ACT or PSAT 10 for grades 11 to 12.',
            'Applications also need "at least two recommendation forms (one Humanities/Social Science teacher and one Mathematics/Science teacher)". A homeschooled applicant can ask any adult who has taught them math.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>Summer and early fall 2026 (our suggested order).</b> Read the OHS math catalog and decide which course your child is realistically ready for.',
          '<b>By early fall 2026.</b> If a test is required, book one from the permitted list for a date before December 2026.',
          '<b>By November 11, 2026.</b> Submit early if you want the optional online interview.',
          '<b>Before January 7, 2027.</b> Make sure both recommenders, including the math or science one, have submitted their forms.',
          '<b>March 2027.</b> Decisions arrive; the enrollment contract is due ten days later.'
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ohs.stanford.edu/admissions/apply" rel="noopener" target="_blank">Stanford OHS How to Apply</a> and <a class="ag-inline-link" href="https://ohs.stanford.edu/admissions/acceptance-criteria" rel="noopener" target="_blank">Acceptance Criteria</a>, read 31 October 2026. The school also says "All responses, essays, and work submitted in the application must be the student\'s own." We never write or edit any part of an application.' }
      ]
    },
    {
      id: 'proof', tint: 'deep', eyebrow: 'Proof',
      h2: 'How do you prepare for proof-based math like Stanford OHS?',
      lede: 'By practising short, complete arguments early. The OHS Mathematics page names a "Focus on Proofs" and says "Proof-writing enables students to present clear and logical mathematical arguments." Here is a first proof, worked in full. It is ours.',
      body: [
        { kind: 'two',
          leftH3: 'Notice a pattern (ours)',
          left: [
            'Add the odd numbers in order: 1 = 1, 1 + 3 = 4, 1 + 3 + 5 = 9, 1 + 3 + 5 + 7 = 16. Every total is a perfect square. A student who stops here has a guess, not a proof.',
            'The claim to prove: the sum of the first n odd numbers is n squared. For n = 10, that predicts 1 + 3 + ... + 19 = 100, and adding them confirms it.'
          ],
          rightH3: 'Prove it (ours)',
          right: [
            'The k-th odd number is 2k - 1. Pair the first and last terms: 1 + (2n - 1) = 2n. The second and second-to-last also make 2n, and so on. There are n terms, so n / 2 pairs, each worth 2n, giving (n / 2) x 2n = n squared.',
            'If n is odd the middle term has no partner, but the same total comes out by writing the sum forwards and backwards: twice the sum is n terms of 2n, so the sum is n squared. Either way the claim holds for every n.'
          ] },
        { kind: 'table', mt: true, caption: 'The three parts of a short proof, shown on a second example (ours)', head: ['Part', 'What to write', 'Example: odd x odd is odd'], rows: [
          ['Claim', 'State exactly what is true', 'The product of two odd numbers is odd'],
          ['Set-up', 'Name things with letters', 'Let the numbers be 2a + 1 and 2b + 1 for whole numbers a and b'],
          ['Reasons', 'Each line follows from the last', '(2a + 1)(2b + 1) = 4ab + 2a + 2b + 1 = 2(2ab + a + b) + 1'],
          ['Conclusion', 'Say why the claim follows', 'It is 2 times a whole number, plus 1, so it is odd']
        ] },
        { kind: 'p', mt: true, html: 'Notice what a proof is not: checking 3 x 5 = 15 and 7 x 9 = 63 shows examples, but only the letters cover every case. That shift, from examples to every case, is the habit to build before a course like Geometry and Foundations of Proof.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice',
      h2: 'What math should a student master before applying?',
      lede: 'Whatever course a student hopes to enter, the course before it should feel secure. This self-check and practice set are ours, written at the Beginning Algebra to Precalculus level, with answers checked in Python.',
      body: [
        { kind: 'table', caption: 'A readiness self-check (ours, not an OHS placement rule)', head: ['If your child can confidently...', 'They are probably ready to work on...'], rows: [
          ['Work with fractions, ratios and negative numbers', 'Beginning algebra'],
          ['Solve linear equations and graph lines', 'Intermediate algebra and geometry with proof'],
          ['Factor quadratics and write short proofs', 'Precalculus with trigonometry'],
          ['Use functions, logs and trigonometry fluently', 'Single-variable calculus and proof techniques']
        ] },
        { kind: 'table', mt: true, caption: 'Seven practice problems with answers (ours; checked in Python)', head: ['Problem', 'A good way in', 'Answer'], rows: [
          ['Solve 3(x - 4) = 2x + 5', 'Expand, then collect x on one side', 'x = 17'],
          ['Factor x squared - 5x + 6', 'Two numbers with product 6 and sum -5', '(x - 2)(x - 3)'],
          ['Slope of the line through (1, 2) and (4, 11)', 'Rise over run: 9 / 3', '3'],
          ['A right triangle has legs 5 and 12. Hypotenuse?', '25 + 144 = 169', '13'],
          ['1 + 3 + 5 + ... + 19', 'Ten odd numbers, so 10 squared', '100'],
          ['sin 30 degrees', 'Half an equilateral triangle', '1/2'],
          ['Prove odd x odd is odd', 'Write odds as 2a + 1 and 2b + 1', 'See the proof above']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Weeks 1 to 4 (ours).</b> Close gaps in the course below the target: one topic a week, with written explanations, not just answers.',
          '<b>Weeks 5 to 9.</b> Proof habits: even and odd, divisibility, simple geometry facts. One short proof every lesson.',
          '<b>Weeks 10 to 12.</b> Problem solving: multi-step problems that need a plan, written up neatly as if for a teacher who was not in the room.',
          '<b>Weeks 13 to 16.</b> Work through problems at the level of the target course and read the OHS course description for it on the catalog.'
        ] },
        { kind: 'p', mt: true, html: 'Related help: <a class="ag-inline-link" href="/algebra-2-tutoring-online">algebra 2 tutoring</a>, <a class="ag-inline-link" href="/precalculus-tutoring-online">precalculus tutoring</a>, <a class="ag-inline-link" href="/calculus-tutoring-online">calculus tutoring</a> and, for younger applicants, <a class="ag-inline-link" href="/accelerated-math-program-online">accelerated math online</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages of mathematical writing',
    lede: 'Our own description of how students grow from answers to arguments.',
    table: { caption: 'Stages of explaining math (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Answer only', 'Writes the final number, often correctly'],
      ['2. Shows working', 'Lists steps, but not why each is allowed'],
      ['3. Gives reasons', 'Each step is justified by a rule or fact'],
      ['4. Proves in general', 'Uses letters to cover every case and says why the claim follows']
    ] },
    left: { h3: 'For parents', ps: [
      'Many strong students sit at stage 2 because school never asked for more. Moving to stage 3 is the single most useful step before a proof-based course.',
      'Ask your child to explain one solution aloud each week. If they can say it, they can learn to write it.'
    ] },
    right: { h3: 'For students', ps: [
      'Write every proof for a reader who was not there. If a step needs you to explain it out loud, write that sentence down.',
      'Examples suggest; letters prove. Try your idea with numbers first, then with a and b.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for grades 6 to 12 and beyond',
    lede: 'Live courses that follow the same order the OHS ladder does, from pre-algebra to university topics.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Grades 6 to 8', courses: [
        { code: 'STHI / F / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Pre-algebra and geometry.' },
        { code: 'STHI / F / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Pre-algebra to Algebra 1.' },
        { code: 'STHI / F / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'MATHCOUNTS and AMC 8.' }
      ] },
      { num: 'II', h3: 'High school', sub: 'Grades 9 to 12', courses: [
        { code: 'STHI / H / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra to calculus.' },
        { code: 'STHI / H / 02', slug: 'ap-precalculus-exam-prep-course', title: 'Precalculus', blurb: 'Functions and trigonometry.' },
        { code: 'STHI / H / 03', slug: 'ap-calculus-exam-prep', title: 'Calculus', blurb: 'AB and BC content.' }
      ] },
      { num: 'III', h3: 'Beyond calculus', sub: 'Advanced students', courses: [
        { code: 'STHI / U / 01', slug: 'college-mathematics-complete-masterclass', title: 'College math', blurb: 'Linear algebra to analysis.' },
        { code: 'STHI / U / 02', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'Data to hypothesis tests.' },
        { code: 'STHI / U / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad math', blurb: 'Proof and hard problems.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live math lessons that ask for reasons',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening lessons after the school day.' },
      { time: 'Weekends', l: 'Longer sessions for proofs and problem sets.' },
      { time: '1-on-1', l: 'For a student working well above grade level.' }
    ],
    cells: [
      { h3: 'Why, not just how', p: 'Every method comes with its reason.' },
      { h3: 'Written arguments', p: 'Short proofs most weeks.' },
      { h3: 'Our own problems', p: 'Never copied from any school.' },
      { h3: 'Feedback on writing', p: 'Teachers mark the reasoning.' },
      { h3: 'No admission promises', p: 'We teach math; the school decides.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work from our high school students',
  projectsLede: 'Math investigations and code from older students in our classes. Browse <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Reviews from parents on Google, copied exactly.',

  fees: {
    h2: 'Fees',
    lede: 'High school math is billed month to month, so a family can strengthen one course across the application season without a long contract.',
    free: ['A free first class', 'Bring recent math work', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Built around one target course', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Stanford Online High School math: questions answered',
    items: [
      { q: 'What math courses does Stanford Online High School offer?', a: 'The 2026-27 catalog runs from Prealgebra through Beginning and Intermediate Algebra, Geometry and Foundations of Proof, Precalculus with Trigonometry and Single-Variable Calculus, then university-level courses such as Multivariable Calculus, Linear Algebra and Real Analysis.' },
      { q: 'How does Stanford OHS place students in math?', a: 'The school says it places students in courses by age, grade level and demonstrated content knowledge. Each course in the catalog lists a prerequisite, so the course before the target should be secure.' },
      { q: 'When is the Stanford OHS application deadline for 2027-28?', a: 'The How to Apply page gives January 7, 2027, at 11:59 pm Pacific Time. Families who want the optional online interview must apply by November 11, 2026, and decisions are released in March 2027.' },
      { q: 'Does Stanford OHS require a test score?', a: 'Only for some applicants: those homeschooled, or at a school taught in a language other than English, between September 2024 and December 2026. For others a score is optional and, the school says, gives no advantage.' },
      { q: 'Is it hard to get into Stanford Online High School?', a: 'The school says admission is competitive and that it cannot accept all qualified applicants. It reviews applications holistically, so no single grade or score decides.' },
      { q: 'What grade can you start Stanford OHS?', a: 'Stanford OHS serves grades 7 to 12 and typically encourages students to apply for grade 7 while in grade 6 or aged 11 to 12.' },
      { q: 'Can my child take just one math course at Stanford OHS?', a: 'Yes. Single-course enrollment means one yearlong course or two semester-long courses, and the school estimates 8 to 10 hours a week for a high school course.' },
      { q: 'Does Stanford OHS offer AP Calculus?', a: 'The catalog says the school has replaced its AP courses with custom courses, such as Single-Variable Calculus, and that students can still register for AP Exams in their local area.' },
      { q: 'What times are your math classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of Stanford?', a: 'No. Modern Age Coders is an independent online school and is not affiliated with Stanford University or Stanford Online High School. We teach math and never promise admission.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for advanced US math students.',
    items: [
      { href: '/accelerated-math-program-online', label: 'Accelerated math online', p: 'Working ahead of grade level.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'Functions and trigonometry.' },
      { href: '/calculus-tutoring-online', label: 'Calculus tutoring', p: 'Limits to integrals.' },
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'The bridge to precalculus.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'Problem solving for younger applicants.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'For homeschooled applicants.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child\'s grade, the last math course they finished and which OHS course they are aiming for. The teacher will check what is solid.',
    readFirst: 'It may help to read <a class="ag-inline-link" href="/how-we-teach">how our teachers work</a> or scan the <a class="ag-inline-link" href="/courses">full catalogue</a> beforehand.',
    note: 'All lessons are live online video, taught from India, timed to fit US evenings and weekends. WhatsApp is the fastest way to us.',
    formNote: 'Your first class is free; we do not take card details to book.'
  },

  footer: {
    cols: [
      { h4: 'Advanced math', links: [
        { href: '/accelerated-math-program-online', label: 'Accelerated math' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus' },
        { href: '/calculus-tutoring-online', label: 'Calculus' },
        { href: '/math-competitions-for-middle-school-students', label: 'Math competitions' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/online-math-tutor-cost', label: 'Tutoring costs' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '1 + 3 + 5 + ... + 19 = 100'
  },

  personalityCss: `
.ag-root.ag-sthi .ag-hero h1 { letter-spacing: -0.016em; max-width: 20ch; }
.ag-root.ag-sthi .ag-capsule { border-left-width: 3px; border-radius: 8px; }
.ag-root.ag-sthi .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-sthi .ag-section-head h2 { max-width: 30ch; }
`,

  dossier: {
    curriculumAuthority: 'Stanford Online High School pages read raw 31 October 2026: Acceptance Criteria (competitive, holistic, grade 7 entry advice, placement by demonstrated knowledge, testing rules and permitted tests), How to Apply (2027-28 timeline, two recommendations, own-work rule, decision types), Enrollment Options (levels, hours per course), Mathematics (proof focus) and the Course Catalog 2026-27 Mathematics filter (codes and prerequisites, AP replacement note).',
    localProject: 'Our proof that the first n odd numbers sum to n squared (1 + 3 + ... + 19 = 100), the odd-times-odd proof table, the readiness self-check, seven practice problems checked in Python (x = 17, (x - 2)(x - 3), slope 3, 13, 100, 1/2) and the sixteen-week plan. Lesson family: writing a direct proof, claim then reasons then conclusion.',
    requiredMentions: ['we are unable to accept all qualified applicants', 'no one item is the deciding component', 'Geometry and Foundations of Proof (OM015)', 'Advanced Problem Solving and Proof Techniques (OM050)', 'with a grade of A- or better, or an AP Calculus BC Exam score of 4 or 5', 'replaced all of our Advanced Placement (AP) courses with custom courses', 'Proof-writing enables students to present clear and logical mathematical arguments.', 'November 11, 2026, 11:59 pm Pacific Time', '1 + 3 + 5 + ... + 19 = 100'],
    sources: [
      { claim: 'Stanford OHS Acceptance Criteria: competitive admission, placement, testing rules, permitted tests.', url: 'https://ohs.stanford.edu/admissions/acceptance-criteria' },
      { claim: 'Stanford OHS How to Apply: 2027-28 dates, recommendations, decision types.', url: 'https://ohs.stanford.edu/admissions/apply' },
      { claim: 'Stanford OHS Enrollment Options: levels and hours per course.', url: 'https://ohs.stanford.edu/admissions/enrollment-options' },
      { claim: 'Stanford OHS Mathematics: proof focus.', url: 'https://ohs.stanford.edu/academics/mathematics' },
      { claim: 'Stanford OHS Course Catalog 2026-27: math course codes and prerequisites; AP replacement.', url: 'https://ohs.stanford.edu/academics/course-catalog' }
    ],
    rejectedClaims: [
      'Tuition, fees and financial aid figures from ohs.stanford.edu: not printed (no prices of other providers).',
      'Named OHS staff, including the mathematics division head quoted on the Mathematics page: not named (brief rule 7).',
      'Any internal OHS math placement assessment format: not described on the pages read, so none is described; our readiness table is labelled as ours, not an OHS rule.',
      'College acceptance outcomes and rankings: not used; no admission or outcome promise made.',
      'Middle school math courses beyond Prealgebra (JM007) and the second catalog page (economics): not listed.'
    ]
  }
};
