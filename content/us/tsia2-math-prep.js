'use strict';
// TSIA2 math prep (ag- exam door; UK and US exams cluster, row US011). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/tsia2-math-prep/:
//  - College Board, accuplacer.collegeboard.org/students/free-tsia2-pre-assessment-and-practice-resources: TSIA2 "is a
//    series of placement tests for students enrolling in public colleges and universities in Texas"; "Not all Texas college
//    students have to take TSIA2"; "A Preassessment Activity (PAA) and TSIA2 testing are required"; free practice tests
//    after an account; TSIA2 Perspective Learning Resources.
//  - College Board, tsia2-student-informational-brochure.pdf (2020): TSI statute "(see TEC, 51.336)"; exemptions (SAT,
//    ACT or English III/Algebra II STAAR EOC benchmarks; College Preparatory Course; completed college-level courses;
//    Level-One certificate "(fewer than 43 semester credit hours)"; not seeking a degree; military); "The assessments are
//    untimed"; "save and finish later" within "14 calendar days"; mandatory PAA; Mathematics CRC Test "made up of 20
//    questions and covers 4 content categories" (Quantitative Reasoning; Algebraic Reasoning; Geometric and Spatial
//    Reasoning; Probabilistic and Statistical Reasoning, with their descriptions); Mathematics Diagnostic Test "made up of
//    48 questions. There are 12 questions from each of the content categories"; "Handheld calculators of any type are not
//    permitted for use with the online TSIA2 Mathematics Test"; pop-up calculators basic, square root, graphing (TI-84);
//    retake "at any time" with study strongly encouraged.
//  - College Board, tsia2-interpreting-your-scores.pdf (2020): dual credit counselors use TSIA2 scores; "Mathematics: A
//    score in the range of 950-990 on the Mathematics CRC Test or a Mathematics CRC Test score below 950 and a Mathematics
//    Diagnostic Test score of 6" (site dash written "950 to 990" here); Basic, Proficient, Advanced descriptors; Learning
//    Locator Code; developmental course, intervention or corequisite model.
//  - Texas Higher Education Coordinating Board, highered.texas.gov/texas-success-initiative/: TSI "is a legislatively
//    mandated program"; exemptions; "The TSI Assessment (TSIA2) is administered by all Texas public colleges and
//    universities"; PAA before initial testing; "As of January 11, 2021, the original version of the TSI assessment is no
//    longer available"; results "can be used up to five years from date of testing".
// Not printed: SAT, ACT or STAAR benchmark numbers for exemption (not on these pages); any college's local fee or
// schedule. Our own material, labelled: four worked examples, one per content category (a 20% off then 15% off price
// chain gives 68% of the original; 2x^2 - 3x - 5 = 0 gives x = 5/2 and -1; a 12 ft ladder at 70 degrees reaches about
// 11.28 ft; ranges 9 and 9 but different IQR); a twelve-item practice set; a three-week plan.
// Lesson family: the four TSIA2 content categories taken one at a time, with spread versus center in statistics.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST PREP', blurb: 'TSIA2 math for Texas dual credit and college entry: the 20-question CRC test, the 48-question diagnostic, the 950 benchmark and original practice.' },
  slug: 'tsia2-math-prep',
  code: 'tsx',
  accent: '#085023',
  accentRationale: 'TSIA2 math prep: a deep forest green #085023 from the US allocation table, 9.08:1 on paper #FBF8F2 and 7.81:1 on the deepest tint, darker than the ACCUPLACER pine so the two placement pages read apart',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'TSIA2 math prep',
  title: 'TSIA2 Math Prep: Texas College Readiness Test Help',
  description: 'TSIA2 math prep for Texas dual credit and college: the 20-question CRC test, the 48-question diagnostic, the 950 benchmark, exemptions and original practice.',
  ogDescription: 'Texas public colleges check math readiness with the TSIA2 unless you are exempt. The College Readiness Classification test, the diagnostic that follows it, the benchmark, and how to prepare.',
  twitterDescription: 'TSIA2 math explained from College Board and the Coordinating Board, with practice.',
  pageName: 'TSIA2 Math Prep',
  webPageDescription: 'A guide for Texas high school and college students to the Texas Success Initiative Assessment 2.0 (TSIA2) mathematics test, from College Board and Texas Higher Education Coordinating Board sources, with one worked example per content category and an original practice set.',
  courseDescription: 'All four TSIA2 mathematics categories, taught live to Texas students working toward dual credit or college-ready status, in groups of 15 to 20 or individually.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'TSIA2 math prep',
  navLinks: [
    { href: '#who', label: 'Who takes it' },
    { href: '#structure', label: 'CRC and diagnostic' },
    { href: '#benchmark', label: 'Benchmark' },
    { href: '#test-day', label: 'Test day' },
    { href: '#categories', label: 'Four categories' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Texas &middot; Dual credit and college entry &middot; Texas Success Initiative',
  h1: 'TSIA2 math prep',
  lede: 'In Texas, a student who wants dual credit in high school, or who enters a public college without an exemption, usually meets the TSIA2. Its math part starts with a 20-question test that either certifies you as college ready or sends you on to a longer diagnostic. The result decides whether your first college math course is credit-bearing or comes with developmental support. This page explains the test from College Board, which delivers it, and the Texas Higher Education Coordinating Board, which runs the program, and then works through each of the four content areas with problems we wrote.',
  secondaryCta: { href: '#benchmark', label: 'See the math benchmark' },
  wa: 'Hello Modern Age Coders, I need to take the TSIA2 math test in Texas for dual credit or college. Could I book a free first class?',
  heroNote: 'Live math teaching since 2020 &middot; 10,000+ students &middot; all four TSIA2 math categories',
  spec: [
    ['Program', 'Texas Success Initiative'],
    ['Delivered by', 'College Board'],
    ['First math test', 'CRC, 20 questions'],
    ['If needed', 'Diagnostic, 48 questions'],
    ['Math benchmark', '950 to 990 on the CRC'],
    ['Time limit', 'None'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The TSIA2 (Texas Success Initiative Assessment 2.0) is the placement test Texas public colleges use for students who are not exempt. Its mathematics part is a 20-question College Readiness Classification (CRC) test; a score of 950 to 990 means college ready, and below that a 48-question diagnostic follows. We prepare Texas students for it in live online classes, group or 1-on-1, inside our College Math Placement Test Prep course.',

  picks: {
    eyebrow: 'Ready for the CRC test',
    h2: 'Three courses for TSIA2 math',
    lede: 'The placement course follows the four TSIA2 categories; the others add depth when algebra or geometry needs rebuilding.',
    items: [
      { course: 'college-math-placement-test-prep-course', code: 'TSX / 01', title: 'College math placement test prep', note: 'TSIA2, ACCUPLACER, ALEKS PPL and CLEP College Algebra.' },
      { course: 'algebra-foundations-masterclass', code: 'TSX / 02', title: 'Algebra foundations', note: 'Quantitative and algebraic reasoning from the ground up.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'TSX / 03', title: 'High school math', note: 'Geometry, trigonometry and statistics to college level.' }
    ]
  },

  sections: [
    {
      id: 'who', tint: 'tint', eyebrow: 'Who takes it',
      h2: 'Who has to take the TSIA2 math test?',
      lede: 'Entering undergraduates at Texas public colleges and universities who are not exempt, plus high school students seeking dual credit. Many students are exempt, so check before you book.',
      body: [
        { kind: 'two',
          leftH3: 'The law behind it',
          left: [
            'The Texas Higher Education Coordinating Board describes the Texas Success Initiative as "a legislatively mandated program" that helps Texas public institutions decide whether entering, non-exempt students are ready for entry-level college work in English language arts and reading, and in mathematics.',
            'College Board\'s student brochure cites the statute as Texas Education Code 51.336 and says undergraduates who enter without an exemption are required to take the TSIA2. The Coordinating Board adds that the TSIA2 "is administered by all Texas public colleges and universities."'
          ],
          rightH3: 'Dual credit students',
          right: [
            'For high school students seeking dual credit, College Board\'s score guide says counselors use TSIA2 scores under the state\'s dual credit rules, and that references to developmental courses do not apply to dual credit students.',
            'College Board\'s brochure also notes that many public school districts and public charters administer the TSIA2, so a high school student may test on their own campus rather than at the college.'
          ] },
        { kind: 'table', mt: true, caption: 'Ways to be exempt from the TSIA2, as College Board\'s TSIA2 brochure lists them (your adviser confirms whether one applies to you)', head: ['Exemption route', 'In the brochure\'s words'], rows: [
          ['Test benchmarks', 'Met the minimum college readiness standard on the SAT, ACT, or the English III/Algebra II STAAR End-of-Course tests'],
          ['High school course', 'Successfully completed a high school College Preparatory Course'],
          ['College work', 'Successfully completed college-level course(s)'],
          ['Certificate', 'Enrolled in a Level-One certificate program (fewer than 43 semester credit hours)'],
          ['Not seeking a degree', 'Not seeking a degree'],
          ['Military', 'Have been, or currently are, in the military']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.highered.texas.gov/texas-success-initiative/" rel="noopener" target="_blank">Texas Success Initiative, Texas Higher Education Coordinating Board</a> and College Board\'s <a class="ag-inline-link" href="https://accuplacer.collegeboard.org/accuplacer/pdf/tsia2-student-informational-brochure.pdf" rel="noopener" target="_blank">TSIA2 Student Informational Brochure</a>, read 31 October 2026. The Coordinating Board links the complete exemption list in its rules. We do not print benchmark scores for the SAT, ACT or STAAR because those pages do not state them. We are not connected with College Board, the Coordinating Board or any Texas college.' }
      ]
    },
    {
      id: 'structure', tint: 'deep', eyebrow: 'CRC and diagnostic',
      h2: 'How many questions are on the TSIA2 math test?',
      lede: 'Twenty, to start. Everyone who is not exempt takes the 20-question College Readiness Classification test; only students below the benchmark go on to the 48-question diagnostic.',
      body: [
        { kind: 'table', caption: 'The two TSIA2 mathematics tests (College Board TSIA2 brochure and Interpreting Your Scores guide, read 31 October 2026)', head: ['Test', 'Questions', 'Who takes it', 'What it reports'], rows: [
          ['Mathematics College Readiness Classification (CRC) test', '20, across 4 content categories', 'Every non-exempt student', 'A score; 950 to 990 means college ready'],
          ['Mathematics Diagnostic test', '48, with 12 from each category', 'Students below the CRC benchmark', 'A diagnostic level, and Basic, Proficient or Advanced per category']
        ], numCols: [1] },
        { kind: 'table', mt: true, caption: 'The four TSIA2 mathematics content categories, as College Board describes them', head: ['Category', 'College Board\'s description'], rows: [
          ['Quantitative Reasoning', 'Calculating ratios, proportions, and percentages, as well as identifying, manipulating, and interpreting linear equations and expressions'],
          ['Algebraic Reasoning', 'Solving equations (linear, quadratic, polynomial, exponential, rational, and radical), evaluating functions, and solving algebraic problems in context'],
          ['Geometric and Spatial Reasoning', 'Converting units within measurement systems, solving geometric problems (perimeter, area, surface area, and volume), performing transformations, and applying right triangle trigonometry'],
          ['Probabilistic and Statistical Reasoning', 'Classifying data, constructing appropriate representations of data, computing and interpreting probability, and describing measures of center and spread of data']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A second chance built into the test',
          left: [
            'College Board says the diagnostic "provides you with a second opportunity to demonstrate your readiness in mathematics." A student who misses 950 on the CRC can still be classed college ready with a diagnostic level of 6.',
            'So a student routed to the diagnostic should not give up. The second test counts.'
          ],
          rightH3: 'Adaptive, and aligned to Texas standards',
          right: [
            'The multiple-choice tests are computer adaptive, which College Board explains means "questions increase or decrease in difficulty depending on how you respond."',
            'College Board says the questions are aligned to the Texas College and Career Readiness Standards, the Texas Essential Knowledge and Skills and adult education standards, so the content is the math of Texas high school courses, not anything exotic.'
          ] }
      ]
    },
    {
      id: 'benchmark', tint: 'tint', eyebrow: 'The benchmark',
      h2: 'What score do you need on the TSIA2 math test?',
      lede: 'College Board\'s score guide gives two routes to college ready in mathematics. Your college then uses the result, alongside other information, to place you.',
      body: [
        { kind: 'ol', items: [
          '<b>Score 950 to 990 on the Mathematics CRC test.</b> College Board calls this "a score in the range of 950 to 990 on the Mathematics CRC Test."',
          '<b>Or score below 950 on the CRC, then reach diagnostic level 6.</b> In College Board\'s words, "a Mathematics CRC Test score below 950 and a Mathematics Diagnostic Test score of 6."'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If you do not meet it yet',
          left: [
            'College Board says you "may be placed in a developmental course or provided with an appropriate intervention", or placed in a corequisite course, where you take the college-level class and support at the same time.',
            'The Coordinating Board says students below a benchmark "are required to receive developmental education academic support as determined by the institution." The exact form is the college\'s choice.'
          ],
          rightH3: 'Other things the college may weigh',
          right: [
            'College Board says an institution "may use additional factors to determine your placement, such as your high school grade point average/class ranking, other test scores, and courses from your high school or college transcripts", and will consider your major.',
            'Results last: the Coordinating Board says TSI assessment results "can be used up to five years from date of testing."'
          ] },
        { kind: 'p', mt: true, html: 'Retakes are allowed. College Board says "you may retake a TSIA2 test at any time", but "strongly encourage[s]" more study first because "your scores are unlikely to substantially improve otherwise." Ask your testing center about any local fee or waiting rule before you book a retest.' }
      ]
    },
    {
      id: 'test-day', tint: 'deep', eyebrow: 'Registering and test day',
      h2: 'How do you sign up for the TSIA2, and what happens on the day?',
      lede: 'Through the college or district that will test you, after a required Pre-Assessment Activity. The test is untimed and runs on a computer.',
      body: [
        { kind: 'ol', items: [
          '<b>Check whether you are exempt.</b> Ask a counselor or college adviser; College Board says to contact the college you will attend.',
          '<b>Complete the Pre-Assessment Activity (PAA).</b> College Board says the PAA "is required prior to taking your TSIA2 tests", and the Coordinating Board says each test taker must complete it before initial testing.',
          '<b>Contact the testing center to register.</b> The Coordinating Board tells students to ask about the institution\'s testing schedule, registration and cost.',
          '<b>Practice with the free official material.</b> After an account is created, College Board offers TSIA2 practice tests and the TSIA2 Perspective Learning Resources.',
          '<b>Plan for the calculator rules.</b> Handheld calculators are not permitted online; some questions offer a pop-up basic, square root or graphing (TI-84) calculator.',
          '<b>Use the time.</b> College Board says the assessments are untimed, and a "save and finish later" option lets you return within 14 calendar days.'
        ] },
        { kind: 'table', mt: true, caption: 'TSIA2 math test conditions (College Board TSIA2 brochure, read 31 October 2026)', head: ['Condition', 'What College Board says'], rows: [
          ['Time', '"The assessments are untimed"'],
          ['Breaks', '"Save and finish later", then complete within 14 calendar days'],
          ['Results', 'In most cases a score report immediately on completion'],
          ['Own calculator', '"Handheld calculators of any type are not permitted" on the online math test'],
          ['Pop-up calculators', 'Basic (four-function), square root, and/or graphing (TI-84), on some questions'],
          ['Original TSI test', 'No longer available since January 11, 2021 (Coordinating Board)']
        ] }
      ]
    },
    {
      id: 'categories', tint: 'tint', eyebrow: 'One problem per category',
      h2: 'Four TSIA2-level problems, one for each content category',
      lede: 'Our own problems, written to match College Board\'s category descriptions. They are not TSIA2 items, and the official sample questions are linked rather than copied.',
      body: [
        { kind: 'table', caption: 'Quantitative Reasoning (ours): a jacket is marked down 20%, then a further 15% off the sale price. What percent of the original price is paid?', head: ['Step', 'Reasoning'], rows: [
          ['1. Turn each discount into a multiplier', '20% off leaves 0.80; 15% off leaves 0.85'],
          ['2. Multiply, do not add', '0.80 x 0.85 = 0.68'],
          ['3. Answer', '68% of the original price, a total discount of 32%, not 35%'],
          ['4. Check with a price', 'From 100: 100 x 0.8 = 80, then 80 x 0.85 = 68']
        ] },
        { kind: 'table', mt: true, caption: 'Algebraic Reasoning (ours): solve 2x^2 - 3x - 5 = 0', head: ['Step', 'Reasoning'], rows: [
          ['1. Look for factors', 'ac = 2 x (-5) = -10; the pair -5 and 2 adds to -3'],
          ['2. Split the middle term', '2x^2 - 5x + 2x - 5 = x(2x - 5) + 1(2x - 5)'],
          ['3. Factor', '(2x - 5)(x + 1) = 0'],
          ['4. Solve', 'x = 5/2 or x = -1'],
          ['5. Check one', 'x = -1: 2 + 3 - 5 = 0']
        ] },
        { kind: 'table', mt: true, caption: 'Geometric and Spatial Reasoning (ours): a 12-foot ladder leans against a wall at 70 degrees to the ground. How high up the wall does it reach?', head: ['Step', 'Reasoning'], rows: [
          ['1. Draw it', 'Right triangle: ladder is the hypotenuse, wall height is opposite the 70-degree angle'],
          ['2. Choose the ratio', 'Opposite and hypotenuse: sine'],
          ['3. Set up', 'height = 12 x sin 70 degrees'],
          ['4. Calculate', 'sin 70 degrees is about 0.9397, so height is about 11.28 feet'],
          ['5. Sense check', 'Steep ladder, so the height should be close to 12 feet, and it is']
        ] },
        { kind: 'table', mt: true, caption: 'Probabilistic and Statistical Reasoning (ours): class A scores 2, 5, 5, 6, 11 and class B scores 2, 2, 6, 10, 11. Compare center and spread.', head: ['Measure', 'Class A', 'Class B'], rows: [
          ['Mean', '29 / 5 = 5.8', '31 / 5 = 6.2'],
          ['Median', '5', '6'],
          ['Range', '11 - 2 = 9', '11 - 2 = 9'],
          ['Quartiles (median of each half, ours)', 'Q1 = 3.5, Q3 = 8.5', 'Q1 = 2, Q3 = 10.5'],
          ['Interquartile range', '5', '8.5']
        ] },
        { kind: 'p', mt: true, html: 'The last example is the one students most often get wrong: the two classes have the same range, but class B\'s middle half is far more spread out. "Describing measures of center and spread" in College Board\'s category description means choosing the right measure, not only computing one.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice and a plan',
      h2: 'An original TSIA2 math practice set and a three-week plan',
      lede: 'Twelve problems we wrote, three per content category, then a plan that uses College Board\'s free practice tests.',
      body: [
        { kind: 'table', caption: 'Twelve original items, three per category, with solutions', head: ['#', 'Category', 'Problem', 'Answer'], rows: [
          ['1', 'Quantitative', 'A price rises from 40 to 46. Percent increase?', '15%'],
          ['2', 'Quantitative', 'Solve 3/x = 12/20', 'x = 5'],
          ['3', 'Quantitative', 'Slope of the line 4x - 2y = 6', '2'],
          ['4', 'Algebraic', 'Solve the square root of (x + 3) = 4', 'x = 13'],
          ['5', 'Algebraic', 'If h(t) = 2^t + 1, find h(3)', '9'],
          ['6', 'Algebraic', 'Solve (x + 2)/3 = (x - 1)/2', 'x = 7'],
          ['7', 'Geometric', 'How many inches are in 2.5 yards?', '90'],
          ['8', 'Geometric', 'Volume of a box 4 by 5 by 6 cm', '120 cubic cm'],
          ['9', 'Geometric', 'Reflect (3, -2) over the y-axis', '(-3, -2)'],
          ['10', 'Statistical', 'Median of 8, 3, 9, 4, 7, 10', '7.5'],
          ['11', 'Statistical', 'Two fair coins: P(at least one head)?', '3/4'],
          ['12', 'Statistical', 'Is "favorite color" categorical or quantitative?', 'Categorical']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Week 1: diagnose.</b> Complete the PAA, then take a free official TSIA2 practice test. Sort every miss into one of the four categories above.',
          '<b>Week 2: the two weakest categories.</b> For most students these are Algebraic Reasoning and Geometric and Spatial Reasoning, which carry quadratics, radicals and trigonometry.',
          '<b>Week 3: rehearse.</b> A second practice test in one sitting, using only the pop-up calculator style the real test offers, and checking every answer since the test is untimed.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where you stand',
    h2: 'Four TSIA2 math situations and what to do next',
    lede: 'Our guide to the routes College Board describes, from first test to retake.',
    table: { caption: 'TSIA2 math situations (ours; your college and the TSI rules decide the outcome)', head: ['Situation', 'Sensible next step'], rows: [
      ['1. Possibly exempt', 'Ask the counselor before booking any test'],
      ['2. Testing for the first time', 'Practice test, then the two weakest categories'],
      ['3. Below 950, diagnostic taken', 'Study by category using the Basic, Proficient, Advanced profile'],
      ['4. Planning a retest', 'Study first; College Board warns scores rarely move otherwise']
    ] },
    left: { h3: 'For dual credit students', ps: [
      'Ask your high school counselor which TSIA2 route your district uses and when the campus tests.',
      'A college-ready math result opens credit-bearing courses while you are still in high school.'
    ] },
    right: { h3: 'For parents', ps: [
      'The diagnostic is a second chance, not a failure. Its category profile tells you exactly what to work on.',
      'Keep the score report: results can be used for up to five years.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for Texas high school and college students',
    lede: 'Live classes from Algebra 1 to college calculus, taught to the reasoning the TSIA2 categories describe.',
    bands: [
      { num: 'I', h3: 'High school core', sub: 'Algebra 1 and geometry', courses: [
        { code: 'TSX / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations and functions.' },
        { code: 'TSX / H / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratio and percent first.' },
        { code: 'TSX / H / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Center, spread and chance.' }
      ] },
      { num: 'II', h3: 'Readiness and placement', sub: 'For the TSIA2 and dual credit', courses: [
        { code: 'TSX / R / 01', slug: 'college-math-placement-test-prep-course', title: 'Placement test prep', blurb: 'TSIA2 and similar tests.' },
        { code: 'TSX / R / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Through precalculus.' },
        { code: 'TSX / R / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'One exemption route.' }
      ] },
      { num: 'III', h3: 'College credit', sub: 'Once you are college ready', courses: [
        { code: 'TSX / C / 01', slug: 'college-mathematics-complete-masterclass', title: 'College math', blurb: 'Calculus onward.' },
        { code: 'TSX / C / 02', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'AB and BC.' },
        { code: 'TSX / C / 03', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'Data and inference.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'TSIA2 lessons on a Texas schedule',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in Central or Mountain time.' },
      { time: 'Weekends', l: 'Category reviews before a test date.' },
      { time: '1-on-1', l: 'Planned to your campus testing day.' }
    ],
    cells: [
      { h3: 'Four categories', p: 'Each taught and practised in turn.' },
      { h3: 'Diagnostic-aware', p: 'We read the Basic to Advanced profile with you.' },
      { h3: 'Pop-up calculator', p: 'Practice with the tools you will see.' },
      { h3: 'Dual credit ready', p: 'For high school students too.' },
      { h3: 'No clock pressure', p: 'We train careful checking.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Students who enjoy the statistics side sometimes take it into code. See <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from families, quoted as posted.',

  fees: {
    h2: 'Fees',
    lede: 'TSIA2 classes run on a monthly fee charged in US dollars. There is no term commitment, so preparing for a single campus test date is fine.',
    free: ['A free first class', 'Bring your practice test result', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Planned to your test date', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions Texas students ask',
    h2: 'TSIA2 math: common questions',
    items: [
      { q: 'What is the TSIA2 math test?', a: 'It is the mathematics part of the Texas Success Initiative Assessment 2.0, which Texas public colleges use to check whether non-exempt students are ready for college-level math. It starts with a 20-question College Readiness Classification test.' },
      { q: 'How many questions are on the TSIA2 math test?', a: 'The CRC test has 20 questions across four content categories. If you score below the benchmark, a diagnostic test of 48 questions follows, 12 from each category.' },
      { q: 'What is a passing score on the TSIA2 math?', a: 'College Board describes college ready in math as 950 to 990 on the CRC test, or a CRC score below 950 together with a diagnostic level of 6. Your college then places you using that result and other information.' },
      { q: 'Is the TSIA2 timed?', a: 'No. College Board says the assessments are untimed, and you can save and finish later within 14 calendar days, except on the essay.' },
      { q: 'Can I use a calculator on the TSIA2 math test?', a: 'Not your own: handheld calculators are not permitted on the online math test. Some questions offer a pop-up basic, square root or graphing calculator.' },
      { q: 'Who is exempt from the TSIA2?', a: 'College Board lists exemptions including college readiness benchmarks on the SAT, ACT or STAAR English III and Algebra II tests, a high school College Preparatory Course, completed college-level courses, some certificate programs, non-degree students and military service. Your adviser confirms whether one applies.' },
      { q: 'Can you retake the TSIA2?', a: 'Yes. College Board says you may retake it at any time but strongly encourages more study first, because scores are unlikely to improve much otherwise. Ask your testing center about local fees or rules.' },
      { q: 'How long are TSIA2 scores good for?', a: 'The Texas Higher Education Coordinating Board says TSI assessment results can be used up to five years from the date of testing.' },
      { q: 'When are your TSIA2 math classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with College Board or the State of Texas?', a: 'No. We are an independent online school, not connected with College Board, the Coordinating Board or any Texas college or district.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Texas students and families.',
    items: [
      { href: '/coding-classes-in-texas', label: 'Coding classes in Texas', p: 'Our classes for Texas students.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'Quantitative and algebraic reasoning.' },
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'Radical and rational equations.' },
      { href: '/online-math-tutor-10th-grade', label: 'Tenth grade math', p: 'Geometry and trigonometry year.' },
      { href: '/online-math-tutor-11th-grade', label: 'Eleventh grade math', p: 'A common dual credit year.' },
      { href: '/sat-math-tutoring-online', label: 'SAT math tutoring', p: 'An exemption route for some students.' },
      { href: '/online-math-tutor-cost', label: 'Math tutor cost', p: 'How tutoring is usually priced.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your TSIA2 date and whether it is for dual credit or college entry. The teacher will start with whichever of the four categories you find hardest.',
    readFirst: 'Read about <a class="ag-inline-link" href="/how-we-teach">our teaching method</a>, or browse <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'We teach live by video from India, with after-school and weekend times that suit Texas. Send a WhatsApp message for the fastest reply.',
    formNote: 'No card is needed for the free first class.'
  },

  footer: {
    cols: [
      { h4: 'Texas students', links: [
        { href: '/coding-classes-in-texas', label: 'Texas classes' },
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' },
        { href: '/algebra-2-tutoring-online', label: 'Algebra 2' },
        { href: '/online-math-tutor-11th-grade', label: 'Grade 11 math' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/sat-math-tutoring-online', label: 'SAT math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '0.80 x 0.85 = 0.68'
  },

  personalityCss: `
.ag-root.ag-tsx .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-tsx .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-tsx .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-tsx .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-tsx .ag-steps li { padding-bottom: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Texas Success Initiative: Texas Higher Education Coordinating Board TSI page (legislatively mandated program; exemptions; TSIA2 administered by all Texas public colleges and universities; PAA before initial testing; original TSIA retired January 11, 2021; results usable five years), read raw 31 October 2026. College Board TSIA2 pages and PDFs: Free TSIA2 PAA and Practice Resources; TSIA2 Student Informational Brochure (TEC 51.336; exemptions; untimed; save and finish later within 14 calendar days; Mathematics CRC 20 questions, four categories; Diagnostic 48 questions, 12 per category; handheld calculators not permitted; pop-up calculators); TSIA2 Interpreting Your Scores (950 to 990 CRC or below 950 plus diagnostic level 6; Basic, Proficient, Advanced; additional placement factors; retake at any time).',
    localProject: 'Our four worked examples, one per TSIA2 math category: 0.80 x 0.85 = 0.68 (68% of the price); 2x^2 - 3x - 5 = 0 gives 5/2 and -1; 12 x sin 70 degrees is about 11.28 feet; two classes with range 9 but IQR 5 and 8.5. Our twelve-item practice set (15%, 5, 2, 13, 9, 7, 90, 120, (-3, -2), 7.5, 3/4, categorical) and three-week plan. Lesson family: the four content categories, with spread versus center.',
    requiredMentions: ['a legislatively mandated program', 'is administered by all Texas public colleges and universities', 'Texas Education Code 51.336', 'fewer than 43 semester credit hours', 'provides you with a second opportunity to demonstrate your readiness in mathematics', 'a Mathematics CRC Test score below 950 and a Mathematics Diagnostic Test score of 6', 'can be used up to five years from date of testing', 'Handheld calculators of any type are not permitted', '0.80 x 0.85 = 0.68', 'Q1 = 2, Q3 = 10.5'],
    sources: [
      { claim: 'Texas Success Initiative program, exemptions, administration, five-year validity.', url: 'https://www.highered.texas.gov/texas-success-initiative/' },
      { claim: 'TSIA2 Student Informational Brochure: CRC and diagnostic, categories, calculators, untimed.', url: 'https://accuplacer.collegeboard.org/accuplacer/pdf/tsia2-student-informational-brochure.pdf' },
      { claim: 'TSIA2 Interpreting Your Scores: math benchmark and placement.', url: 'https://accuplacer.collegeboard.org/accuplacer/pdf/tsia2-interpreting-your-scores.pdf' },
      { claim: 'Free TSIA2 PAA and practice resources.', url: 'https://accuplacer.collegeboard.org/students/free-tsia2-pre-assessment-and-practice-resources' }
    ],
    rejectedClaims: [
      'SAT, ACT and STAAR scores that grant exemption: not printed; the pages read do not state them, and the rule text is linked instead.',
      'The full CRC score scale below 950: not printed; only the 950 to 990 benchmark range is stated in the source.',
      'TSIA2 sample questions: not reproduced; the four worked examples and practice set are ours.',
      'Local fees, testing schedules and retest waits: not printed; set by each institution.',
      'College-ready or score promises for our classes: refused.',
      'Any affiliation with College Board, the Coordinating Board or any Texas institution: none.'
    ]
  }
};
