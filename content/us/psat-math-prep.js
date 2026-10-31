'use strict';
// PSAT/NMSQT math prep (ag- exam door; UK and US exams cluster, row US055). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from College
// Board's SAT Suite site; copies in keyword-research-2026-09/uk-us-gap/src/psat-math-prep/:
//  - satsuite.collegeboard.org/in-school-assessments/whats-on-the-test/psat-nmsqt/structure: "takes 2 hours and 14 minutes";
//    Reading and Writing 64 min, 54 questions; Math 70 min, 44 questions; College Board's own total 134 min, 98.
//  - .../psat-nmsqt/math: 44 questions "evenly divided between 2 modules", 35 minutes each "(~1 minute and 35 seconds per
//    question)"; questions "arranged from easiest to hardest" in each module; acceptable calculator on the whole section;
//    "Approximately 30% of Math questions are set in context"; four domains and their skill lists.
//  - Fall 2026 PSAT/NMSQT Student Guide (psat-nmsqt-student-guide.pdf): each module "20 operational questions and 2 pretest
//    questions"; "1.59 minutes per question"; domain distribution Algebra 13 to 15, Advanced Math 12 to 14, Problem-Solving
//    and Data Analysis 7 to 9, Geometry and Trigonometry 4 to 6; "Pretest questions don't count toward your score"; NMSC
//    section: "The 2026 PSAT/NMSQT is the qualifying test for entry to the 2028 National Merit Program"; "The PSAT 10 and
//    PSAT 8/9 will NOT be considered"; entry requirements; "you must take the qualifying test in your third year of high
//    school (grade 11, junior year)"; sophomores must test again in 2027; 1.3 million entrants, 50,000 high scorers, 34,000
//    Commended, 16,000 Semifinalists "the highest-scoring entrants in each state", 15,000 Finalists; program "began in 1955".
//  - .../scores/understanding-scores: PSAT/NMSQT total 320 to 1520, sections 160 to 760, "NMSC Selection Index Score on a
//    scale of 48 to 228"; index "calculated by doubling your Reading and Writing Score, adding it to your Math score, then
//    dividing that sum by 10".
//  - .../test-dates (SAT Suite Test Dates and Deadlines): "For Fall 2026: SAT School Day, PSAT/NMSQT, and PSAT 8/9 |
//    October 1-30, 2026"; in-school students "do not need to register on their own". Calendar flyer
//    (sat-suite-calendar-flyer.pdf): "Schools may also choose to offer the PSAT/NMSQT on Saturday, Oct. 17, 2026."
//  - .../calculator-policy: CAS calculators not allowed; Desmos embedded in Bluebook, graphing or scientific.
//  - .../homeschooled-away-students: contact participating schools "at least four weeks before the testing window begins".
//  - .../national-merit-scholarship-program: PSAT/NMSQT "is the qualifying test for the National Merit Scholarship Program";
//    "You cannot opt out of sending your scores to NMSC."
// nationalmerit.org returned HTTP 403 (Cloudflare); not retried. NMSC wording is taken from the NMSC section of College
// Board's student guide. Selection Index cutoffs by state are not printed (NMSC publishes them; not fetched).
// Our own material, labelled: Selection Index example (RW 690, Math 710 gives 209); the point-weight observation (one
// Math point moves the index 0.1, one RW point 0.2); three worked examples (vertex of y = x^2 - 6x + 5 at (3, -4);
// P(B | A) from a 120-student two-way table = 18/48 = 3/8; 7 + 3n <= 40 gives n <= 11); a ten-item practice set; a
// junior-year plan. Lesson family: reading the Selection Index and conditional probability from two-way tables.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST PREP', blurb: 'PSAT/NMSQT math for juniors: two 35-minute adaptive modules, the four math domains, the 48 to 228 Selection Index and how National Merit entry works.' },
  slug: 'psat-math-prep',
  code: 'psx',
  accent: '#8C4568',
  accentRationale: 'PSAT/NMSQT math prep: a mulberry #8C4568 from the US allocation table, 6.26:1 on paper #FBF8F2 and 5.38:1 on the deepest tint, distinct from the SAT and ACT pages and the olive PSAT 8/9 page',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'PSAT math prep',
  title: 'PSAT Math Prep: PSAT/NMSQT Math and National Merit',
  description: 'PSAT math prep for the PSAT/NMSQT: 44 questions in two 35-minute modules, the four domains, the Selection Index and National Merit entry, with original practice.',
  ogDescription: 'The PSAT/NMSQT Math section is 44 questions in two adaptive modules, and in grade 11 it feeds the National Merit Selection Index. What College Board publishes, the index arithmetic, and how to prepare.',
  twitterDescription: 'PSAT/NMSQT math, the Selection Index and National Merit entry, from College Board.',
  pageName: 'PSAT Math Prep',
  webPageDescription: 'A guide for US high school students and parents to the Math section of the digital PSAT/NMSQT and its role in the National Merit Scholarship Program, from College Board\'s own pages and the fall 2026 student guide, with worked examples and an original practice set.',
  courseDescription: 'PSAT/NMSQT math for sophomores and juniors over live video: the four domains, Desmos technique and module pacing, with a class of 15 to 20 or a private teacher.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'PSAT math prep',
  navLinks: [
    { href: '#section', label: 'Math section' },
    { href: '#domains', label: 'Domains' },
    { href: '#merit', label: 'National Merit' },
    { href: '#index', label: 'Selection Index' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 10 and 11 &middot; The digital PSAT/NMSQT',
  h1: 'PSAT math prep for the PSAT/NMSQT',
  lede: 'The PSAT/NMSQT is the October test most US high schools give in the fall, and for juniors it is also the entry test for the National Merit Scholarship Program. Its Math section is 44 questions in two 35-minute adaptive modules, with a built-in Desmos calculator throughout. For most students it is a practice run for the SAT; for a smaller group it is the score that decides National Merit recognition. This page explains, from College Board\'s own pages and student guide, what the Math section tests, how the Selection Index is built, who is eligible, and how to prepare, with problems we wrote.',
  secondaryCta: { href: '#index', label: 'See how the index works' },
  wa: 'Hello Modern Age Coders, my child is preparing for the PSAT/NMSQT math section. Could we book a free first class?',
  heroNote: 'Live math teaching since 2020 &middot; 10,000+ students &middot; reasoning first, no copied test items',
  spec: [
    ['Publisher', 'College Board, with NMSC'],
    ['Math questions', '44, in 2 modules'],
    ['Math time', '70 minutes'],
    ['Calculator', 'Desmos built in, whole section'],
    ['Math score', '160 to 760'],
    ['Selection Index', '48 to 228'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The PSAT/NMSQT is College Board\'s digital test, cosponsored by National Merit Scholarship Corporation (NMSC). Its Math section has 44 questions in two 35-minute adaptive modules, scored 160 to 760, with a Desmos calculator allowed throughout. Juniors\' scores feed the NMSC Selection Index (48 to 228). Our SAT Math Prep course teaches this section live online, so the same lessons carry a student from PSAT to SAT, in a batch or 1-on-1.',

  picks: {
    eyebrow: 'One preparation, two tests',
    h2: 'Three courses for PSAT/NMSQT math',
    lede: 'The PSAT and SAT share one math blueprint, so our SAT course is the core; the other two strengthen the algebra and functions beneath it.',
    items: [
      { course: 'sat-math-prep-course', code: 'PSX / 01', title: 'SAT and PSAT math', note: 'The digital SAT Suite math domains, Desmos and pacing.' },
      { course: 'algebra-foundations-masterclass', code: 'PSX / 02', title: 'Algebra foundations', note: 'Linear equations and inequalities, the largest PSAT domain.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'PSX / 03', title: 'High school math', note: 'Nonlinear functions, data and trigonometry in depth.' }
    ]
  },

  sections: [
    {
      id: 'section', tint: 'tint', eyebrow: 'The Math section',
      h2: 'How long is the PSAT math section, and how many questions are on it?',
      lede: 'Seventy minutes and 44 questions, split into two equal modules. College Board says the whole PSAT/NMSQT takes 2 hours and 14 minutes.',
      body: [
        { kind: 'table', caption: 'How the PSAT/NMSQT is structured (College Board, How the PSAT/NMSQT Is Structured, read 31 October 2026; the total row is College Board\'s own)', head: ['Section', 'Minutes', 'Questions'], rows: [
          ['Reading and Writing', '64', '54'],
          ['Math', '70', '44'],
          ['Total', '134', '98']
        ], numCols: [1, 2] },
        { kind: 'table', mt: true, caption: 'Inside the PSAT/NMSQT Math section (College Board Math section page and fall 2026 PSAT/NMSQT Student Guide)', head: ['Feature', 'What College Board says'], rows: [
          ['Modules', 'Two, each with 20 operational questions and 2 pretest questions'],
          ['Time per module', '35 minutes (about 1 minute 35 seconds per question)'],
          ['Order', 'Within each module, questions run from easiest to hardest'],
          ['Adaptive', 'The second module depends on how you did in the first'],
          ['Question types', 'Multiple choice and student-produced response'],
          ['In context', 'Approximately 30% of questions are word problems in science, social studies or real-world settings'],
          ['Calculator', 'An acceptable calculator, or the built-in Desmos calculator, on the entire section'],
          ['Pretest questions', 'Do not count toward the score']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://satsuite.collegeboard.org/in-school-assessments/whats-on-the-test/psat-nmsqt/math" rel="noopener" target="_blank">The PSAT/NMSQT Math Section</a>, <a class="ag-inline-link" href="https://satsuite.collegeboard.org/in-school-assessments/whats-on-the-test/psat-nmsqt/structure" rel="noopener" target="_blank">How the PSAT/NMSQT Is Structured</a> and the <a class="ag-inline-link" href="https://satsuite.collegeboard.org/media/pdf/psat-nmsqt-student-guide.pdf" rel="noopener" target="_blank">Fall 2026 PSAT/NMSQT Student Guide</a>, read 31 October 2026. PSAT/NMSQT is a registered trademark of College Board and National Merit Scholarship Corporation; we are not connected with either.' },
        { kind: 'two', mt: true,
          leftH3: 'The calculator rule changes the strategy',
          left: [
            'College Board\'s SAT Suite calculator policy allows the Desmos calculator in the Bluebook app, with graphing and scientific options, or an approved handheld calculator. Calculators with a computer algebra system (CAS) are not allowed.',
            'Graphing both sides of an equation and reading the intersection is legitimate on every PSAT math question. Students who practise this in Bluebook beforehand save real time.'
          ],
          rightH3: 'Easiest to hardest, twice',
          right: [
            'Because each module climbs from easier to harder questions, the last few in a module are usually the most demanding. A student who spends four minutes on question 5 is spending time the hard questions at the end will need.',
            'College Board also says it is better for most students to guess than leave a question blank, especially after ruling out one or two options.'
          ] }
      ]
    },
    {
      id: 'domains', tint: 'deep', eyebrow: 'Four domains',
      h2: 'What math is on the PSAT/NMSQT?',
      lede: 'Four content domains. Algebra and Advanced Math are the two largest in College Board\'s question distribution; geometry is the smallest.',
      body: [
        { kind: 'table', caption: 'PSAT/NMSQT Math domains and question distribution (Fall 2026 PSAT/NMSQT Student Guide; counts are of the 40 operational questions)', head: ['Domain', 'Questions', 'Skills College Board lists'], rows: [
          ['Algebra', '13 to 15', 'Linear equations in 1 and 2 variables; linear functions; systems of 2 linear equations; linear inequalities'],
          ['Advanced Math', '12 to 14', 'Equivalent expressions; nonlinear equations and systems; nonlinear functions'],
          ['Problem-Solving and Data Analysis', '7 to 9', 'Ratios, rates and units; percentages; 1-variable data; 2-variable data and scatterplots; probability and conditional probability; inference from sample statistics'],
          ['Geometry and Trigonometry', '4 to 6', 'Area and volume; lines, angles and triangles, including right triangle trigonometry']
        ], numCols: [1] },
        { kind: 'two', mt: true,
          leftH3: 'Why grade 10 and grade 11 feel different',
          left: [
            'Advanced Math, at 12 to 14 questions, covers quadratic, exponential, polynomial, rational and radical equations. A sophomore still in Geometry may not have met some of it in class yet; a junior in Algebra 2 usually has.',
            'So a grade 10 result is best read as a baseline: some of the Advanced Math on it may simply not have been taught yet.'
          ],
          rightH3: 'Geometry is small but not optional',
          right: [
            'Geometry and Trigonometry is 4 to 6 questions. That is too few to build a plan around but too many to ignore, because each one is a full question in a short section.',
            'A list of common formulas is available in the Math section, so the work is in knowing which formula applies, not in memorising it.'
          ] }
      ]
    },
    {
      id: 'merit', tint: 'tint', eyebrow: 'National Merit',
      h2: 'Does the PSAT count for National Merit, and in which grade?',
      lede: 'Only the PSAT/NMSQT counts, and for most students only the one taken in grade 11. The NMSC section of College Board\'s fall 2026 student guide spells out the rules.',
      body: [
        { kind: 'two',
          leftH3: 'Which test, which year',
          left: [
            'The guide says "The 2026 PSAT/NMSQT is the qualifying test for entry to the 2028 National Merit Program," and that the PSAT 10 and PSAT 8/9 "will NOT be considered for entry."',
            'For a student spending the usual four years in high school, the guide says "you must take the qualifying test in your third year of high school (grade 11, junior year)." Sophomores who sit the 2026 test and plan four years "must take the PSAT/NMSQT again in 2027" to enter.'
          ],
          rightH3: 'Who can enter',
          right: [
            'Entrants must be enrolled as a high school student, traditional or homeschooled, progressing normally toward graduation, and planning to accept admission to college no later than the fall after they finish. They must attend high school in the United States, DC or a US commonwealth or territory, or meet citizenship rules if studying abroad.',
            'College Board says you cannot opt out of sending PSAT/NMSQT scores to NMSC; a student who does not want to be considered contacts NMSC directly.'
          ] },
        { kind: 'table', mt: true, caption: 'Steps in the 2028 National Merit Scholarship competition (NMSC section of College Board\'s Fall 2026 PSAT/NMSQT Student Guide; approximate figures as NMSC gives them)', head: ['Stage', 'About how many', 'When'], rows: [
          ['Entrants who meet requirements', '1.3 million', 'October 2026 test'],
          ['High scorers identified by Selection Index', '50,000', 'Names sent to principals in April 2027'],
          ['Semifinalists, the highest-scoring entrants in each state', '16,000', 'Notified early September 2027'],
          ['Commended Students', '34,000', 'Notified late September 2027'],
          ['Finalists', '15,000', 'Notified February 2028'],
          ['Scholarships offered', '7,320', 'Winners notified from March 2028']
        ], numCols: [1] },
        { kind: 'source', html: 'Source: the National Merit Scholarship Program section of College Board\'s <a class="ag-inline-link" href="https://satsuite.collegeboard.org/media/pdf/psat-nmsqt-student-guide.pdf" rel="noopener" target="_blank">Fall 2026 PSAT/NMSQT Student Guide</a>, provided by NMSC, read 31 October 2026. nationalmerit.org refused our request (HTTP 403), so state-by-state Semifinalist cutoffs are not quoted here; NMSC publishes its own figures. We are not connected with NMSC and make no claim about any student\'s chance of recognition.' }
      ]
    },
    {
      id: 'index', tint: 'deep', eyebrow: 'The Selection Index',
      h2: 'How is the PSAT Selection Index calculated?',
      lede: 'College Board gives the formula: double the Reading and Writing score, add the Math score, and divide by 10. The result runs from 48 to 228.',
      body: [
        { kind: 'table', caption: 'PSAT/NMSQT scores (College Board, What Do My SAT Suite Scores Mean?, read 31 October 2026)', head: ['Score', 'Range'], rows: [
          ['Total score', '320 to 1520'],
          ['Reading and Writing section', '160 to 760'],
          ['Math section', '160 to 760'],
          ['NMSC Selection Index (PSAT/NMSQT only)', '48 to 228']
        ] },
        { kind: 'table', mt: true, caption: 'A Selection Index worked through (our example scores)', head: ['Step', 'Calculation'], rows: [
          ['1. Reading and Writing score', '690'],
          ['2. Double it', '690 x 2 = 1,380'],
          ['3. Add the Math score', '1,380 + 710 = 2,090'],
          ['4. Divide by 10', '2,090 / 10 = 209'],
          ['5. Check the range', '209 sits inside 48 to 228']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the formula means for math',
          left: [
            'Because Reading and Writing is doubled, each Math point moves the index by 0.1 and each Reading and Writing point by 0.2: our arithmetic from College Board\'s formula. Math still matters, but for National Merit it counts at half weight.',
            'A student whose math is already strong and whose reading is not may help their index more by working on Reading and Writing, even on a math page. We say so because it is true.'
          ],
          rightH3: 'What it does not mean',
          right: [
            'The index is a screening number, not a scholarship. College Board says NMSC uses Selection Index scores "to screen students who enter its scholarship programs", and NMSC sets the qualifying levels, which vary by state for Semifinalists.',
            'For most students, the PSAT\'s main value is the practice it gives for the SAT and the score report that shows which skills to work on next.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Three PSAT-level math problems, worked by reasoning',
      lede: 'Our own problems in three of the four domains. They are not College Board items, and the official practice is in Bluebook.',
      body: [
        { kind: 'table', caption: 'Advanced Math (ours): where is the minimum of y = x^2 - 6x + 5, and where does it cross the x-axis?', head: ['Step', 'Reasoning'], rows: [
          ['1. Complete the square', 'x^2 - 6x + 9 - 9 + 5 = (x - 3)^2 - 4'],
          ['2. Read the vertex', 'The minimum is at (3, -4), since (x - 3)^2 is never negative'],
          ['3. Find the zeros', '(x - 3)^2 = 4, so x - 3 = 2 or -2, giving x = 5 or x = 1'],
          ['4. Cross-check by factoring', 'x^2 - 6x + 5 = (x - 1)(x - 5), the same zeros'],
          ['5. Desmos check', 'Graph it: the vertex and both intercepts appear when you tap the curve']
        ] },
        { kind: 'table', mt: true, caption: 'Problem-Solving and Data Analysis (ours): 120 students were asked whether they take a bus (B) and whether they play a sport (S)', head: ['', 'Plays a sport', 'No sport', 'Total'], rows: [
          ['Takes a bus', '18', '30', '48'],
          ['No bus', '42', '30', '72'],
          ['Total', '60', '60', '120']
        ], numCols: [1, 2, 3] },
        { kind: 'p', html: 'Question (ours): a student is chosen at random from those who take a bus. What is the probability they play a sport? Restrict to the bus row only: 18 of 48, so 18/48 = 3/8. The trap is dividing by 120 or by 60. Conditional probability always shrinks the denominator to the group named after "given" or "from those who".' },
        { kind: 'table', mt: true, caption: 'Algebra (ours): an arcade card costs 7 credits to activate and 3 credits per game. With 40 credits, how many games can you play?', head: ['Step', 'Reasoning'], rows: [
          ['1. Write the inequality', '7 + 3n &lt;= 40, where n is the number of games'],
          ['2. Subtract the fixed part', '3n &lt;= 33'],
          ['3. Divide', 'n &lt;= 11'],
          ['4. Interpret', 'At most 11 games, since games come in whole numbers'],
          ['5. Check', '7 + 3 x 11 = 40 exactly; a 12th game would need 43 credits']
        ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice and a plan',
      h2: 'An original PSAT math practice set and a junior-year plan',
      lede: 'Ten problems we wrote across the four domains, with answers, then a plan for the months before an October test.',
      body: [
        { kind: 'table', caption: 'Ten PSAT-style problems of our own, answers alongside', head: ['#', 'Domain', 'Problem', 'Answer'], rows: [
          ['1', 'Algebra', 'Solve 4(x - 2) = 2x + 10', 'x = 9'],
          ['2', 'Algebra', 'A line has slope 3 and passes through (1, 5). Its y-intercept?', '2'],
          ['3', 'Algebra', 'Solve x + 2y = 10 and x - y = 1', 'x = 4, y = 3'],
          ['4', 'Advanced', 'Expand (2x - 3)^2', '4x^2 - 12x + 9'],
          ['5', 'Advanced', 'A value of 800 halves every 5 years. Value after 15 years?', '100'],
          ['6', 'Advanced', 'Solve x^2 = 5x', 'x = 0 or x = 5'],
          ['7', 'Data', '36 is what percent of 48?', '75%'],
          ['8', 'Data', 'A car uses 6 gallons for 192 miles. Miles per gallon?', '32'],
          ['9', 'Geometry', 'Right triangle legs 9 and 12: hypotenuse?', '15'],
          ['10', 'Geometry', 'Circle with area 49 pi: circumference?', '14 pi']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Spring of grade 10: baseline.</b> Take a full-length official practice test in Bluebook and note which domain each miss belongs to.',
          '<b>Summer: Advanced Math.</b> Quadratics, exponentials and equivalent expressions, the 12 to 14 questions most sophomores have seen least.',
          '<b>September: Algebra fluency and Desmos.</b> Linear equations and systems quickly and accurately, plus graphing to check.',
          '<b>Early October: rehearsal.</b> A second practice test under real timing: two 35-minute modules with a break between sections.',
          '<b>After scores arrive: read the report.</b> College Board\'s score report shows performance in each content area; that, not the total alone, sets the SAT plan.'
        ] },
        { kind: 'p', mt: true, html: 'Dates: College Board\'s 2026-27 calendar lists the fall 2026 PSAT/NMSQT testing window as October 1 to 30, 2026, and says schools may also offer it on Saturday, October 17, 2026. Students testing in school do not register themselves; the school handles it. Homeschooled students must contact a participating school at least four weeks before the window begins. At the time of writing, the 2027 PSAT/NMSQT window had not been published on the dates page we read.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your student is',
    h2: 'Four PSAT situations and the sensible next step',
    lede: 'Our guide for families, based on the rules College Board and NMSC publish.',
    table: { caption: 'PSAT situations (ours)', head: ['Situation', 'Sensible next step'], rows: [
      ['1. Grade 10, first PSAT/NMSQT', 'Treat it as practice; it does not enter National Merit for a four-year student'],
      ['2. Grade 11, aiming at National Merit', 'Balance Reading and Writing and Math, since RW counts double'],
      ['3. Grade 11, focused on the SAT', 'Use the score report\'s content areas to plan SAT practice'],
      ['4. Homeschooled', 'Find a participating school at least four weeks before the window']
    ] },
    left: { h3: 'For students', ps: [
      'Practise in Bluebook with Desmos so the tools are familiar on the day.',
      'In each module the hardest questions come last. Keep time for them.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask the school whether it gives the PSAT/NMSQT on a weekday in the window or on the Saturday option.',
      'National Merit recognition depends on NMSC\'s published levels; no class can promise it.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for high school students',
    lede: 'From Algebra 1 to AP Calculus, with the SAT Suite course at the center.',
    bands: [
      { num: 'I', h3: 'Core high school math', sub: 'Grades 9 and 10', courses: [
        { code: 'PSX / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra 1 in depth.' },
        { code: 'PSX / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Through precalculus.' },
        { code: 'PSX / H / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For the data domain.' }
      ] },
      { num: 'II', h3: 'Tests', sub: 'Grades 10 to 12', courses: [
        { code: 'PSX / T / 01', slug: 'sat-math-prep-course', title: 'SAT and PSAT math', blurb: 'The digital SAT Suite.' },
        { code: 'PSX / T / 02', slug: 'act-math-prep-course', title: 'ACT math', blurb: 'If you sit the ACT too.' },
        { code: 'PSX / T / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'AMC and beyond.' }
      ] },
      { num: 'III', h3: 'Advanced', sub: 'AP level', courses: [
        { code: 'PSX / A / 01', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Functions in depth.' },
        { code: 'PSX / A / 02', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'AB and BC.' },
        { code: 'PSX / A / 03', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'Data and inference.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'PSAT math lessons around the school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, alongside class math.' },
      { time: 'Weekends', l: 'Practice modules under real timing.' },
      { time: '1-on-1', l: 'Planned to your school\'s test day.' }
    ],
    cells: [
      { h3: 'Four domains', p: 'Weighted as College Board weights them.' },
      { h3: 'Desmos fluency', p: 'Graph, intersect, check.' },
      { h3: 'Module pacing', p: 'Time saved early for the hard end.' },
      { h3: 'Score report reading', p: 'We plan from your content areas.' },
      { h3: 'SAT continuity', p: 'The same blueprint, one plan.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Some students take their algebra into code and data projects. See <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly fee in US dollars covers PSAT math classes. Families can stop after the October test, or carry straight on into SAT preparation; neither needs a contract.',
    free: ['A free first class', 'Bring a practice score report', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Planned to your test window', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions families ask',
    h2: 'PSAT/NMSQT math: common questions',
    items: [
      { q: 'How many math questions are on the PSAT?', a: 'The PSAT/NMSQT Math section has 44 questions in two modules of 22. In each module, 20 questions are scored and 2 are unscored pretest questions.' },
      { q: 'How long is the PSAT math section?', a: 'Seventy minutes: two modules of 35 minutes each. College Board says the whole PSAT/NMSQT takes 2 hours and 14 minutes.' },
      { q: 'Can you use a calculator on the PSAT math?', a: 'Yes, on the entire Math section. You can use the Desmos calculator built into Bluebook or an approved handheld calculator; CAS calculators are not allowed.' },
      { q: 'What math is on the PSAT?', a: 'Four domains: Algebra (13 to 15 questions), Advanced Math (12 to 14), Problem-Solving and Data Analysis (7 to 9), and Geometry and Trigonometry (4 to 6), according to College Board\'s fall 2026 student guide.' },
      { q: 'How is the PSAT Selection Index calculated?', a: 'Double your Reading and Writing score, add your Math score, and divide by 10. The index runs from 48 to 228; for example, 690 and 710 give 209.' },
      { q: 'Does the sophomore PSAT count for National Merit?', a: 'Not for a student spending four years in high school. The NMSC section of College Board\'s guide says such students must take the PSAT/NMSQT in grade 11 to enter, and the PSAT 10 never counts.' },
      { q: 'When is the PSAT in 2026?', a: 'College Board lists the fall 2026 PSAT/NMSQT window as October 1 to 30, 2026, and schools could also offer it on Saturday, October 17, 2026. Schools register their own students.' },
      { q: 'Is PSAT math harder than SAT math?', a: 'No. College Board gives both Math sections 44 questions in two 35-minute modules across the same four domains, and the PSAT/NMSQT section scale tops out at 760 rather than the SAT\'s 800. Good PSAT preparation is good SAT preparation.' },
      { q: 'When are your PSAT math classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with College Board or National Merit?', a: 'No. We are an independent online school, not connected with College Board or National Merit Scholarship Corporation, and we cannot promise any score or recognition.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More math help for US high school students.',
    items: [
      { href: '/sat-math-tutoring-online', label: 'SAT math tutoring', p: 'The test the PSAT prepares for.' },
      { href: '/act-math-tutoring-online', label: 'ACT math tutoring', p: 'For students sitting both.' },
      { href: '/online-math-tutor-10th-grade', label: 'Tenth grade math', p: 'The first PSAT/NMSQT year for many.' },
      { href: '/online-math-tutor-11th-grade', label: 'Eleventh grade math', p: 'The National Merit year.' },
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'Where Advanced Math is taught.' },
      { href: '/online-math-tutor-cost', label: 'Math tutor cost', p: 'How tutoring is usually priced.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Share a recent practice score report if you have one. The teacher will look at the four math content areas and start where the most points are waiting.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look at <a class="ag-inline-link" href="/courses">our courses</a>.',
    note: 'Lessons are live from India, timed for after school and weekends across US time zones. WhatsApp gets the quickest answer.',
    formNote: 'There is no charge for the first class, and no card is asked for.'
  },

  footer: {
    cols: [
      { h4: 'High school tests', links: [
        { href: '/sat-math-tutoring-online', label: 'SAT math' },
        { href: '/act-math-tutoring-online', label: 'ACT math' },
        { href: '/algebra-2-tutoring-online', label: 'Algebra 2' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-math-tutor-10th-grade', label: 'Grade 10 math' },
        { href: '/online-math-tutor-11th-grade', label: 'Grade 11 math' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '(2 x 690 + 710) / 10 = 209'
  },

  personalityCss: `
.ag-root.ag-psx .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-psx .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-psx .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-psx .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-psx .ag-section-head h2 { max-width: 30ch; }
`,

  dossier: {
    curriculumAuthority: 'College Board SAT Suite pages, read raw 31 October 2026: How the PSAT/NMSQT Is Structured (2 hours 14 minutes; 64/54 and 70/44; total 134/98); The PSAT/NMSQT Math Section (two 35-minute modules, easiest to hardest, calculator throughout, about 30% in context, four domains); Fall 2026 PSAT/NMSQT Student Guide (20 operational plus 2 pretest per module; domain distribution 13-15, 12-14, 7-9, 4-6; NMSC section: 2026 test qualifies for 2028 program, PSAT 10 and 8/9 not considered, grade 11 rule, entry requirements, 1.3 million / 50,000 / 34,000 / 16,000 / 15,000); What Do My SAT Suite Scores Mean (320 to 1520; 160 to 760; Selection Index 48 to 228 and formula); Test Dates (fall 2026 window October 1 to 30); calendar flyer (Saturday October 17, 2026 option); Calculator Policy; Homeschooled and Away Students; National Merit Scholarship Program page.',
    localProject: 'Our Selection Index example (690 and 710 give 209) and point-weight observation (Math 0.1, RW 0.2 per point); worked examples: vertex of y = x^2 - 6x + 5 at (3, -4) with zeros 1 and 5; conditional probability 18/48 = 3/8 from our 120-student two-way table; 7 + 3n <= 40 gives n <= 11. Ten-item practice set and junior-year plan. Lesson family: the Selection Index and conditional probability.',
    requiredMentions: ['The 2026 PSAT/NMSQT is the qualifying test for entry to the 2028 National Merit Program', 'will NOT be considered for entry', 'you must take the qualifying test in your third year of high school (grade 11, junior year)', 'must take the PSAT/NMSQT again in 2027', 'schools may also offer it on Saturday, October 17, 2026', 'NMSC Selection Index (PSAT/NMSQT only)', 'to screen students who enter its scholarship programs', 'Two, each with 20 operational questions and 2 pretest questions', '1,380 + 710 = 2,090', 'so 18/48 = 3/8'],
    sources: [
      { claim: 'PSAT/NMSQT structure: 2 hours 14 minutes, section times and question counts.', url: 'https://satsuite.collegeboard.org/in-school-assessments/whats-on-the-test/psat-nmsqt/structure' },
      { claim: 'PSAT/NMSQT Math section: modules, timing, domains, calculator.', url: 'https://satsuite.collegeboard.org/in-school-assessments/whats-on-the-test/psat-nmsqt/math' },
      { claim: 'Fall 2026 PSAT/NMSQT Student Guide: domain distribution and National Merit program rules.', url: 'https://satsuite.collegeboard.org/media/pdf/psat-nmsqt-student-guide.pdf' },
      { claim: 'Score ranges and the Selection Index formula.', url: 'https://satsuite.collegeboard.org/scores/what-scores-mean' },
      { claim: 'SAT Suite 2026-27 test dates and in-school windows.', url: 'https://satsuite.collegeboard.org/sat/dates-deadlines' },
      { claim: 'How the SAT is structured: Math 70 minutes in two 35-minute modules, 44 questions.', url: 'https://satsuite.collegeboard.org/sat/whats-on-the-test/structure' }
    ],
    rejectedClaims: [
      'State Semifinalist Selection Index cutoffs: not printed; nationalmerit.org returned HTTP 403 and was not retried.',
      'Scholarship amounts in the student guide: not printed (no typed currency on US pages).',
      'A fall 2027 PSAT/NMSQT date: not printed; not yet listed on the dates page read on 31 October 2026.',
      'Released PSAT or SAT questions: not reproduced; examples and practice are ours.',
      'Score, Commended or Semifinalist promises: refused.',
      'Any affiliation with College Board or NMSC: none.'
    ]
  }
};
