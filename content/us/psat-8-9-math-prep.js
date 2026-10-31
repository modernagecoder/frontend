'use strict';
// PSAT 8/9 and PSAT 10 math prep (ag- exam door; UK and US exams cluster, row US056). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from College
// Board; copies in keyword-research-2026-09/uk-us-gap/src/psat-8-9-math-prep/ (and psat-math-prep/ for shared pages):
//  - 2026-27 PSAT 8/9 Student Guide (psat-8-9-student-guide.pdf): "designed to be taken as you start your high school
//    journey"; "Your results will help establish a baseline"; "scored on a 240-1440 scale" (dash written "240 to 1440");
//    multistage adaptive, two modules per section; Reading and Writing 64 min/54, Math 70 min/44; "follows the same timing
//    as all other tests in the SAT Suite"; Desmos built in for the entire Math section; reference sheet "a list of common
//    formulas"; testing windows "October 1-30, 2026 and March 1-April 30, 2027"; "each student can only obtain one valid
//    score during the testing window"; Math each module "20 operational questions and 2 pretest questions"; domain
//    distribution Algebra 16 to 18, Advanced Math 7 to 9, Problem-Solving and Data Analysis 9 to 11, Geometry 4 to 6
//    ("Area and volume; Lines, angles, and triangles, including right triangles"); section scores 120 to 720; One-Time
//    Supports "for PSAT 8/9 only"; Connections not available to 8th graders.
//  - Spring 2026 PSAT 10 Student Guide (official-student-guide-psat-10.pdf): PSAT 10 Math domains Algebra 13 to 15,
//    Advanced Math 12 to 14, PSDA 7 to 9, Geometry and Trigonometry 4 to 6; reference sheet. (Its spring 2026 window and
//    fee are not used; the 2027 window comes from the dates page.)
//  - satsuite.collegeboard.org PSAT 10 and PSAT 8/9 structure and math pages: 2 hours 14 minutes; 44 math questions, two
//    35-minute modules; "Approximately 30% of Math questions are set in context".
//  - SAT Suite Test Dates and Deadlines: "For Spring 2027: SAT School Day, PSAT 10, and PSAT 8/9 | March 1-April 30, 2027";
//    fall 2026 PSAT 8/9 with the PSAT/NMSQT, October 1 to 30, 2026; schools register students.
//  - What Do My SAT Suite Scores Mean: PSAT 10 total 320 to 1520, sections 160 to 760; PSAT 8/9 240 to 1440 and 120 to 720.
//  - Fall 2026 PSAT/NMSQT Student Guide, NMSC section: "The PSAT 10 and PSAT 8/9 will NOT be considered for entry".
// Our own material, labelled: the domain comparison reading (8/9 has 16 to 18 Algebra questions against 13 to 15 on the
// PSAT 10); three worked examples (a phone plan table: slope 4 per GB, y = 4x + 15; a 25% rise then 20% fall returns to
// the start; supplementary angles 3x + 15 and 2x + 40 give x = 25); a ten-item practice set; grade 8 and grade 10 plans.
// Lesson family: linear relationships from tables and percent change as a multiplier.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST PREP', blurb: 'PSAT 8/9 and PSAT 10 math compared from College Board: the same 44 questions and 70 minutes, different domain weights, 2026-27 windows and practice.' },
  slug: 'psat-8-9-math-prep',
  code: 'psa',
  accent: '#626D21',
  accentRationale: 'PSAT 8/9 and PSAT 10 math prep: an olive #626D21 from the US allocation table, 5.31:1 on paper #FBF8F2 and 4.57:1 on the deepest tint, clear of the mulberry PSAT/NMSQT page',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'PSAT 8/9 and PSAT 10 math prep',
  title: 'PSAT 8/9 Prep and PSAT 10 Math: Grades 8 to 10',
  description: 'PSAT 8/9 prep and PSAT 10 math for grades 8 to 10: the 44-question Math section, how the domain weights differ, 2026-27 testing windows, scores and practice.',
  ogDescription: 'The PSAT 8/9 and PSAT 10 share the SAT\'s timing but not its weights: the 8/9 leans on algebra and data. What College Board publishes for both, and how to use them as a baseline.',
  twitterDescription: 'PSAT 8/9 and PSAT 10 math compared, from College Board, with practice.',
  pageName: 'PSAT 8/9 and PSAT 10 Math Prep',
  webPageDescription: 'A guide for families of grade 8 to 10 students to the Math sections of the digital PSAT 8/9 and PSAT 10, from College Board\'s student guides, score pages and 2026-27 dates, with worked examples and an original practice set.',
  courseDescription: 'Eighth to tenth graders build the algebra, data skills and geometry behind the PSAT 8/9 and PSAT 10 in teacher-led video classes, grouped 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'PSAT 8/9 and PSAT 10 math',
  navLinks: [
    { href: '#compare', label: 'Side by side' },
    { href: '#weights', label: 'Domain weights' },
    { href: '#dates', label: '2026-27 dates' },
    { href: '#baseline', label: 'Using the score' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 8 to 10 &middot; College Board SAT Suite',
  h1: 'PSAT 8/9 prep and PSAT 10 math',
  lede: 'The PSAT 8/9 and PSAT 10 are the earliest tests in College Board\'s SAT Suite, given in school to eighth, ninth and tenth graders. Both have a 70-minute, 44-question Math section with Desmos built in, the same timing as the SAT itself. What differs is the mix: the PSAT 8/9 puts far more weight on algebra and data, and its geometry stops short of trigonometry. Neither counts for National Merit. This page compares the two from College Board\'s own guides and explains how families can use the results as a starting point, with problems we wrote at the right level.',
  secondaryCta: { href: '#weights', label: 'Compare the domain weights' },
  wa: 'Hi, our eighth, ninth or tenth grader has a PSAT 8/9 or PSAT 10 coming up at school. Is a free trial math lesson possible?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ learners &middot; problems written by us, never copied',
  spec: [
    ['Tests', 'PSAT 8/9 and PSAT 10'],
    ['Grades', '8 and 9, or 10'],
    ['Math questions', '44, in 2 modules'],
    ['Math time', '70 minutes'],
    ['Calculator', 'Desmos, whole section'],
    ['National Merit', 'Neither counts'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'College Board gives the PSAT 8/9 to students in grades 8 and 9 and the PSAT 10 to tenth graders, during the school day. On both, math means 70 minutes, 44 questions and the Desmos calculator. Total scores run 240 to 1440 on the PSAT 8/9 and 320 to 1520 on the PSAT 10; National Merit uses neither. Younger students learn this math with us live online, alone or in a batch, with the SAT Math Prep course as the test-format strand.',

  picks: {
    eyebrow: 'Building toward the SAT',
    h2: 'Three courses for PSAT 8/9 and PSAT 10 math',
    lede: 'Younger students usually need algebra and middle school foundations first; the SAT course brings in test format once those are steady.',
    items: [
      { course: 'sat-math-prep-course', code: 'PSA / 01', title: 'SAT Suite math', note: 'The digital format, Desmos and the four domains.' },
      { course: 'algebra-foundations-masterclass', code: 'PSA / 02', title: 'Algebra foundations', note: 'Algebra is the largest PSAT 8/9 domain.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'PSA / 03', title: 'Middle school math', note: 'Ratio, percent and geometry for eighth graders.' }
    ]
  },

  sections: [
    {
      id: 'compare', tint: 'tint', eyebrow: 'Side by side',
      h2: 'What is the difference between the PSAT 8/9 and the PSAT 10?',
      lede: 'Grade, score scale, testing window and domain weights. The timing and the number of math questions are the same.',
      body: [
        { kind: 'table', caption: 'PSAT 8/9 and PSAT 10 compared (College Board student guides, structure pages, score page and 2026-27 dates, read 31 October 2026)', head: ['Feature', 'PSAT 8/9', 'PSAT 10'], rows: [
          ['Usual grades', '8 and 9', '10'],
          ['Whole test', '2 hours 14 minutes', '2 hours 14 minutes'],
          ['Math section', '44 questions, 70 minutes, two modules', '44 questions, 70 minutes, two modules'],
          ['Calculator', 'Desmos or approved handheld, whole section', 'Desmos or approved handheld, whole section'],
          ['Total score', '240 to 1440', '320 to 1520'],
          ['Math score', '120 to 720', '160 to 760'],
          ['2026-27 windows', 'October 1 to 30, 2026; March 1 to April 30, 2027', 'March 1 to April 30, 2027'],
          ['National Merit entry', 'No', 'No']
        ] },
        { kind: 'source', html: 'Sources: College Board\'s <a class="ag-inline-link" href="https://satsuite.collegeboard.org/media/pdf/psat-8-9-student-guide.pdf" rel="noopener" target="_blank">2026-27 PSAT 8/9 Student Guide</a>, <a class="ag-inline-link" href="https://satsuite.collegeboard.org/media/pdf/official-student-guide-psat-10.pdf" rel="noopener" target="_blank">PSAT 10 Student Guide</a>, <a class="ag-inline-link" href="https://satsuite.collegeboard.org/scores/what-scores-mean" rel="noopener" target="_blank">What Do My SAT Suite Scores Mean?</a> and <a class="ag-inline-link" href="https://satsuite.collegeboard.org/sat/dates-deadlines" rel="noopener" target="_blank">SAT Suite Test Dates and Deadlines</a>, read 31 October 2026. We are not connected with College Board.' },
        { kind: 'two', mt: true,
          leftH3: 'What College Board says the PSAT 8/9 is for',
          left: [
            'The 2026-27 guide says the PSAT 8/9 "is designed to be taken as you start your high school journey" and that "Your results will help establish a baseline" and help teachers focus instruction.',
            'It also notes that the PSAT 8/9 "follows the same timing as all other tests in the SAT Suite, so you\'ll be preparing yourself for the same format as the PSAT 10 and the SAT."'
          ],
          rightH3: 'Neither one is the National Merit test',
          right: [
            'National Merit entry comes only through the PSAT/NMSQT, normally in grade 11. The NMSC pages in College Board\'s fall guide state it in capitals: "The PSAT 10 and PSAT 8/9 will NOT be considered for entry to the National Merit Scholarship Program."',
            'That takes the pressure off. A PSAT 8/9 or PSAT 10 score is information, not a verdict.'
          ] }
      ]
    },
    {
      id: 'weights', tint: 'deep', eyebrow: 'Domain weights',
      h2: 'What math is on the PSAT 8/9, and how is it different from the PSAT 10?',
      lede: 'Both tests use four content domains, but the PSAT 8/9 gives Algebra and data more questions and Advanced Math fewer, and its geometry domain leaves out trigonometry.',
      body: [
        { kind: 'table', caption: 'Math question distribution, PSAT 8/9 against PSAT 10 (2026-27 PSAT 8/9 Student Guide and spring 2026 PSAT 10 Student Guide; counts are of the 40 operational questions)', head: ['Domain', 'PSAT 8/9', 'PSAT 10'], rows: [
          ['Algebra', '16 to 18', '13 to 15'],
          ['Advanced Math', '7 to 9', '12 to 14'],
          ['Problem-Solving and Data Analysis', '9 to 11', '7 to 9'],
          ['Geometry (8/9) or Geometry and Trigonometry (10)', '4 to 6', '4 to 6']
        ], numCols: [1, 2] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the PSAT 8/9 column',
          left: [
            'On the PSAT 8/9, Algebra has 16 to 18 of the 40 scored questions and Problem-Solving and Data Analysis has 9 to 11, against 13 to 15 and 7 to 9 on the PSAT 10. That is the math of grade 7 to Algebra 1: linear equations and functions, systems, ratios, rates, percentages and data.',
            'The guide lists the PSAT 8/9 geometry skills as "Area and volume; Lines, angles, and triangles, including right triangles", without trigonometry.'
          ],
          rightH3: 'Reading the PSAT 10 column',
          right: [
            'On the PSAT 10, Advanced Math rises to 12 to 14 questions: equivalent expressions, nonlinear equations and functions such as quadratics and exponentials. Right triangle trigonometry joins the geometry domain.',
            'A tenth grader who has finished Algebra 1 but not yet started Algebra 2 will find the Advanced Math questions the least familiar part of the test.'
          ] },
        { kind: 'p', mt: true, html: 'Some things are identical across the two guides. A module holds 22 questions, 2 of them pretest items that are never scored; difficulty climbs through each module; and students can open a reference sheet, "a list of common formulas", during Math. Roughly 30% of math questions come with a real-world or science context, per College Board.' }
      ]
    },
    {
      id: 'dates', tint: 'tint', eyebrow: '2026-27 dates',
      h2: 'When is the PSAT 8/9 and the PSAT 10 in 2026-27?',
      lede: 'Your school chooses the day inside College Board\'s windows and registers you. Students do not sign up on their own.',
      body: [
        { kind: 'table', caption: 'In-school testing windows for 2026-27 (College Board, SAT Suite Test Dates and Deadlines, and the 2026-27 PSAT 8/9 Student Guide)', head: ['Term', 'Tests in the window', 'Window'], rows: [
          ['Fall 2026', 'SAT School Day, PSAT/NMSQT and PSAT 8/9', 'October 1 to 30, 2026'],
          ['Spring 2027', 'SAT School Day, PSAT 10 and PSAT 8/9', 'March 1 to April 30, 2027']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Ask the counselor which test and which window.</b> Some schools give the PSAT 8/9 in the fall, some in the spring.',
          '<b>Prepare the device.</b> Most schools use school-managed devices; if yours allows a personal device, Bluebook must be installed beforehand.',
          '<b>Request accommodations early.</b> The PSAT 8/9 guide says some requests can take 7 weeks to review, and that some One-Time Supports can be requested "for PSAT 8/9 only" when less time remains.',
          '<b>Homeschooled students, contact a participating school.</b> College Board asks away students to reach out at least four weeks before the window begins.',
          '<b>Know the retest rule.</b> The guide says each student "can only obtain one valid score during the testing window", with retests only for irregularities.'
        ] },
        { kind: 'p', mt: true, html: 'Some score features also differ by grade. The PSAT 8/9 guide says ninth graders may opt in to the Connections feature, "but it is not available to 8th graders taking the test." Your school will explain how and when scores are released.' }
      ]
    },
    {
      id: 'baseline', tint: 'deep', eyebrow: 'Using the score',
      h2: 'Do you need to study for the PSAT 8/9?',
      lede: 'Not in the cramming sense. College Board describes the PSAT 8/9 as a baseline. The useful preparation is familiarity with the format plus steady school math.',
      body: [
        { kind: 'two',
          leftH3: 'What a little preparation does',
          left: [
            'A student who has seen Bluebook, the Desmos calculator and the module structure once will spend test time on math rather than on the screen. College Board offers a test preview and full-length adaptive PSAT 8/9 practice tests in Bluebook.',
            'Beyond that, the best preparation for the PSAT 8/9 is the ordinary math of grades 7 to 9 done well, especially linear relationships and percentages.'
          ],
          rightH3: 'What the score report is for',
          right: [
            'The score report shows performance in each content area. College Board describes the knowledge and skills section as a way "to identify content areas you may want to focus on to practice and improve."',
            'A low Algebra area in grade 8 is a reason to strengthen Algebra 1, not to drill PSAT questions. A strong report is a reason to keep going, perhaps into competition math.'
          ] },
        { kind: 'table', mt: true, caption: 'Reading a PSAT 8/9 or PSAT 10 math result (ours; College Board publishes its own benchmarks in the score report)', head: ['What the report shows', 'What we would usually do next'], rows: [
          ['Algebra is the weakest area', 'Linear equations, functions and systems, steadily, over a term'],
          ['Problem-Solving and Data Analysis is weakest', 'Ratios, percentages and reading tables and graphs'],
          ['Advanced Math is weakest (PSAT 10)', 'Quadratics and exponentials, often ahead of Algebra 2'],
          ['Geometry is weakest', 'Angles, triangles, area and volume, with the reference sheet'],
          ['All areas strong', 'Keep up school math; consider competition math or early SAT practice']
        ] }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Three problems at PSAT 8/9 and PSAT 10 level',
      lede: 'Our own problems in the domains that carry the most PSAT 8/9 weight. They are not College Board items.',
      body: [
        { kind: 'table', caption: 'Algebra (ours): a phone plan\'s monthly bill depends on data used. Find the rule.', head: ['Data used (GB)', '0', '2', '5', '8'], rows: [
          ['Monthly bill (units)', '15', '23', '35', '47']
        ], numCols: [1, 2, 3, 4] },
        { kind: 'ol', items: [
          '<b>Check the rate is constant.</b> From 0 to 2 GB the bill rises 8, so 4 per GB; from 2 GB to 5 GB it rises 12, again 4 per GB, and the last step of 3 GB adds another 12. A constant rate means a linear rule.',
          '<b>Read the starting value.</b> At 0 GB the bill is 15, so the y-intercept is 15.',
          '<b>Write the rule.</b> y = 4x + 15, where x is gigabytes and y is the bill.',
          '<b>Use it.</b> At 12 GB, y = 4 x 12 + 15 = 63.'
        ] },
        { kind: 'table', mt: true, caption: 'Problem-Solving and Data Analysis (ours): a price rises 25%, then falls 20%. Where does it end up?', head: ['Step', 'Reasoning'], rows: [
          ['1. Rise as a multiplier', '25% up means x 1.25'],
          ['2. Fall as a multiplier', '20% down means x 0.80'],
          ['3. Combine', '1.25 x 0.80 = 1.00'],
          ['4. Conclusion', 'Back to exactly the starting price'],
          ['5. Why the intuition fails', 'The 20% is taken from a larger number, so it removes as much as the 25% added']
        ] },
        { kind: 'table', mt: true, caption: 'Geometry (ours): two angles on a straight line measure (3x + 15) degrees and (2x + 40) degrees. Find each angle.', head: ['Step', 'Reasoning'], rows: [
          ['1. Use the fact', 'Angles on a straight line add to 180 degrees'],
          ['2. Equation', '3x + 15 + 2x + 40 = 180, so 5x + 55 = 180'],
          ['3. Solve', '5x = 125, so x = 25'],
          ['4. The angles', '3(25) + 15 = 90 and 2(25) + 40 = 90'],
          ['5. Notice', 'Both are 90 degrees: the lines are perpendicular']
        ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice and plans',
      h2: 'An original practice set, and plans for grade 8 and grade 10',
      lede: 'Ten problems we wrote at PSAT 8/9 and PSAT 10 level, with answers, then two short plans.',
      body: [
        { kind: 'table', caption: 'Our grade 8 to 10 practice, answers listed at the end of each row', head: ['#', 'Domain', 'Problem', 'Answer'], rows: [
          ['1', 'Algebra', 'Solve 7 - 2x = 15', 'x = -4'],
          ['2', 'Algebra', 'Slope through (2, 3) and (6, 11)', '2'],
          ['3', 'Algebra', 'Solve 2x + y = 9 and x - y = 3', 'x = 4, y = 1'],
          ['4', 'Algebra', 'Solve 3x + 4 &gt; 19', 'x &gt; 5'],
          ['5', 'Data', 'A recipe uses 3 cups of flour for 4 loaves. Flour for 10 loaves?', '7.5 cups'],
          ['6', 'Data', 'A 60-minute show: 15 minutes are ads. Percent ads?', '25%'],
          ['7', 'Data', 'Mean of 12, 15, 18 and 23', '17'],
          ['8', 'Advanced (PSAT 10)', 'Factor x^2 + 7x + 12', '(x + 3)(x + 4)'],
          ['9', 'Geometry', 'Volume of a cube with edge 4 cm', '64 cubic cm'],
          ['10', 'Geometry and Trigonometry (PSAT 10)', 'Right triangle, hypotenuse 10, angle 30 degrees: opposite side?', '5']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Grade 8, a month before the window.</b> One Bluebook test preview, then weekly practice on linear relationships, percentages and angle facts alongside school math.',
          '<b>Grade 8, the week before.</b> One full-length adaptive practice test in Bluebook, mainly to get used to two modules and the Desmos calculator.',
          '<b>Grade 10, a term before the spring window.</b> A practice test, then quadratics and exponentials if Advanced Math is weak, since it carries 12 to 14 questions on the PSAT 10.',
          '<b>Grade 10, after scores.</b> Use the content areas to plan grade 11, when the PSAT/NMSQT and the SAT follow.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From grade 8 to grade 11',
    h2: 'How the SAT Suite steps up, year by year',
    lede: 'Our summary of the sequence, using the facts College Board publishes for each test.',
    table: { caption: 'The SAT Suite sequence (ours, from College Board\'s published scales and rules)', head: ['Year', 'Usual test', 'What it is for'], rows: [
      ['Grade 8 or 9', 'PSAT 8/9, scored 240 to 1440', 'A baseline at the start of high school'],
      ['Grade 10', 'PSAT 10 in spring, scored 320 to 1520', 'Progress check; no National Merit entry'],
      ['Grade 11', 'PSAT/NMSQT in fall', 'National Merit entry for most students'],
      ['Grade 11 or 12', 'SAT, scored 400 to 1600', 'College admission where required']
    ] },
    left: { h3: 'For parents of eighth graders', ps: [
      'Keep it light. A familiar format and solid Algebra 1 matter more than practice questions.',
      'Ask the school when results come back and how it uses them.'
    ] },
    right: { h3: 'For tenth graders', ps: [
      'Advanced Math is the domain that grows most from the PSAT 8/9. Start quadratics early if you can.',
      'Next year\'s PSAT/NMSQT is the one that counts for National Merit.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for grades 7 to 10',
    lede: 'Foundations, Algebra 1 and test format, taught live.',
    bands: [
      { num: 'I', h3: 'Middle school', sub: 'Grades 7 and 8', courses: [
        { code: 'PSA / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratio, percent, geometry.' },
        { code: 'PSA / M / 02', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'MATHCOUNTS and AMC 8.' },
        { code: 'PSA / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Functions in Python.' }
      ] },
      { num: 'II', h3: 'Early high school', sub: 'Grades 9 and 10', courses: [
        { code: 'PSA / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra 1 in depth.' },
        { code: 'PSA / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry to Algebra 2.' },
        { code: 'PSA / H / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and chance.' }
      ] },
      { num: 'III', h3: 'Tests ahead', sub: 'Grades 10 and 11', courses: [
        { code: 'PSA / T / 01', slug: 'sat-math-prep-course', title: 'SAT Suite math', blurb: 'PSAT and SAT.' },
        { code: 'PSA / T / 02', slug: 'act-math-prep-course', title: 'ACT math', blurb: 'For ACT schools.' },
        { code: 'PSA / T / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'AMC 10 and beyond.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Math lessons for younger test takers',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, paced with class math.' },
      { time: 'Weekends', l: 'Short practice and Bluebook familiarity.' },
      { time: '1-on-1', l: 'Planned around your school\'s window.' }
    ],
    cells: [
      { h3: 'School math first', p: 'Algebra 1 and data done well.' },
      { h3: 'Format once', p: 'Bluebook and Desmos, without drilling.' },
      { h3: 'Report-led', p: 'We plan from the content areas.' },
      { h3: 'Age-appropriate', p: 'Calm, short sessions for grade 8.' },
      { h3: 'Toward grade 11', p: 'The same blueprint as the SAT.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Younger students often meet functions first by coding them. See <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, reproduced as written.',

  fees: {
    h2: 'Fees',
    lede: 'Each month is paid for separately, in US dollars. A few weeks of help around the school\'s testing window, then a pause, is a perfectly normal way to use us.',
    free: ['A free first class', 'Bring the school\'s test date', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Matched to school math', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions families ask',
    h2: 'PSAT 8/9 and PSAT 10 math: common questions',
    items: [
      { q: 'What math is on the PSAT 8/9?', a: 'College Board\'s 2026-27 guide lists Algebra (16 to 18 questions), Advanced Math (7 to 9), Problem-Solving and Data Analysis (9 to 11) and Geometry (4 to 6). It is mostly the math of grades 7 to 9.' },
      { q: 'How many math questions are on the PSAT 8/9?', a: 'Forty-four, in two modules of 35 minutes each. Each module has 20 scored questions and 2 unscored pretest questions.' },
      { q: 'What is a good PSAT 8/9 score?', a: 'The PSAT 8/9 is scored 240 to 1440, with 120 to 720 for Math. College Board describes it as a baseline, so the content-area breakdown on the report is more useful than comparing totals.' },
      { q: 'Is the PSAT 10 harder than the PSAT 8/9?', a: 'It has the same length and timing, but more Advanced Math (12 to 14 questions against 7 to 9) and trigonometry in the geometry domain. Its scale is 320 to 1520.' },
      { q: 'Does the PSAT 10 count for National Merit?', a: 'No. College Board\'s PSAT/NMSQT guide says the PSAT 10 and PSAT 8/9 are not considered for entry to the National Merit Scholarship Program.' },
      { q: 'When is the PSAT 8/9 in 2026-27?', a: 'College Board lists two windows: October 1 to 30, 2026 and March 1 to April 30, 2027. Your school picks the day and registers you.' },
      { q: 'Can you use a calculator on the PSAT 8/9?', a: 'Yes, on the whole Math section. The Desmos calculator is built into Bluebook, or students can bring an approved calculator.' },
      { q: 'Should my eighth grader prepare for the PSAT 8/9?', a: 'A little: one look at the format in Bluebook and steady school math. Heavy drilling is not needed for a test College Board describes as a baseline.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with College Board?', a: 'No. We are an independent online school. We describe the tests from College Board\'s published guides and use its free practice in Bluebook as it is.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Grade-by-grade math support and the tests that come next.',
    items: [
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math', p: 'The first PSAT 8/9 year.' },
      { href: '/online-math-tutor-9th-grade', label: 'Ninth grade math', p: 'Algebra 1 and the start of high school.' },
      { href: '/online-math-tutor-10th-grade', label: 'Tenth grade math', p: 'The PSAT 10 year.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'The largest PSAT 8/9 domain.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'For strong eighth graders.' },
      { href: '/sat-math-tutoring-online', label: 'SAT math tutoring', p: 'Where the sequence leads.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child\'s grade, the test and the school\'s window. The teacher will check the algebra and data skills the test leans on and set a calm plan.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how we teach younger students</a>, or browse <a class="ag-inline-link" href="/courses">our courses</a>.',
    note: 'Every class is live, taught from India at hours that fit US school evenings and weekends. Message us on WhatsApp to get going.',
    formNote: 'The first class is free; we never ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'Grades 8 to 10', links: [
        { href: '/online-math-tutor-8th-grade', label: 'Grade 8 math' },
        { href: '/online-math-tutor-9th-grade', label: 'Grade 9 math' },
        { href: '/online-math-tutor-10th-grade', label: 'Grade 10 math' },
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/sat-math-tutoring-online', label: 'SAT math' },
        { href: '/math-competitions-for-middle-school-students', label: 'Math competitions' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '1.25 x 0.80 = 1.00'
  },

  personalityCss: `
.ag-root.ag-psa .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-psa .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-psa .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-psa .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-psa .ag-steps li { padding-bottom: 5px; }
`,

  dossier: {
    curriculumAuthority: 'College Board, read raw 31 October 2026: 2026-27 PSAT 8/9 Student Guide (baseline purpose; 240 to 1440; same timing as the SAT Suite; Desmos; reference sheet; windows October 1 to 30, 2026 and March 1 to April 30, 2027; one valid score per window; 20 operational plus 2 pretest per module; domains 16-18, 7-9, 9-11, 4-6; Geometry without trigonometry; section scores 120 to 720; One-Time Supports; Connections not for 8th graders); spring 2026 PSAT 10 Student Guide (domains 13-15, 12-14, 7-9, 4-6); PSAT 10 and PSAT 8/9 structure and math pages; SAT Suite Test Dates (spring 2027 window); What Do My SAT Suite Scores Mean (scales); Fall 2026 PSAT/NMSQT Student Guide NMSC section (PSAT 10 and 8/9 not considered).',
    localProject: 'Our reading of the two domain tables side by side; worked examples: phone plan table gives y = 4x + 15 (63 at 12 GB); 1.25 x 0.80 = 1.00; angles 3x + 15 and 2x + 40 on a line give x = 25 and two right angles. Ten-item practice set and grade 8 and grade 10 plans. Lesson family: linear relationships from tables and percent change as a multiplier.',
    requiredMentions: ['is designed to be taken as you start your high school journey', 'Your results will help establish a baseline', 'follows the same timing as all other tests in the SAT Suite', 'Area and volume; Lines, angles, and triangles, including right triangles', 'can only obtain one valid score during the testing window', 'but it is not available to 8th graders taking the test', 'October 1 to 30, 2026; March 1 to April 30, 2027', 'The PSAT 10 and PSAT 8/9 will NOT be considered for entry to the National Merit Scholarship Program.', 'y = 4 x 12 + 15 = 63', '3x + 15 + 2x + 40 = 180, so 5x + 55 = 180'],
    sources: [
      { claim: '2026-27 PSAT 8/9 Student Guide: purpose, timing, windows, domain distribution, scoring.', url: 'https://satsuite.collegeboard.org/media/pdf/psat-8-9-student-guide.pdf' },
      { claim: 'PSAT 10 Student Guide: PSAT 10 math domain distribution.', url: 'https://satsuite.collegeboard.org/media/pdf/official-student-guide-psat-10.pdf' },
      { claim: 'PSAT 8/9 Math section page: modules, timing, calculator.', url: 'https://satsuite.collegeboard.org/in-school-assessments/whats-on-the-test/psat-8-9/math' },
      { claim: 'SAT Suite score scales by test.', url: 'https://satsuite.collegeboard.org/scores/what-scores-mean' },
      { claim: 'SAT Suite 2026-27 in-school testing windows.', url: 'https://satsuite.collegeboard.org/sat/dates-deadlines' }
    ],
    rejectedClaims: [
      'PSAT 8/9 trigonometry: College Board\'s PSAT 8/9 web page mentions geometry and trigonometry, but the 2026-27 student guide\'s domain table lists Geometry without trigonometry; the guide is followed and the page says so.',
      'The spring 2026 PSAT 10 window and fee from the older guide: not used; the 2027 window comes from the current dates page.',
      'Benchmark scores for grade 8 to 10: not printed; College Board shows them on individual score reports.',
      'Released items: not reproduced; examples and practice are ours.',
      'Score promises for our classes: refused.',
      'Any affiliation with College Board: none.'
    ]
  }
};
