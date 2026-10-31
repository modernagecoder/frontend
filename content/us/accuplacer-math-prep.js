'use strict';
// ACCUPLACER math prep (ag- exam door; UK and US exams cluster, row US009). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from College
// Board's ACCUPLACER site; copies in keyword-research-2026-09/uk-us-gap/src/accuplacer-math-prep/:
//  - accuplacer.collegeboard.org (home): "ACCUPLACER helps colleges and workforce training providers gauge student
//    readiness for required coursework"; free practice tests need an account; free sample questions to download.
//  - students/prepare-for-accuplacer/whats-on-tests: all tests multiple choice except WritePlacer; "There's no time limit
//    on the tests"; computer-adaptive, "Your response to each question determines the difficulty level of the next
//    question"; "No one passes or fails ACCUPLACER tests"; Arithmetic skills (Whole Number Operations, Fraction Operations,
//    Decimal Operations, Percent, Number Comparisons and Equivalents); QAS skills (Rational Numbers ... Geometry Concepts);
//    AAF skills (Linear Equations ... Trigonometry).
//  - students/scores/understanding-scores and educators/what-scores-mean: the five multiple-choice tests "each have a score
//    range of 200-300" (site uses a dash; written "200 to 300" here), seven score bands 200-220, 221-230, 231-240, 241-250,
//    251-260, 261-270, 271-300; College Readiness Skills Insight statements per band.
//  - educators/implementing-accuplacer/set-course-placement-scores: "Each college, university, or career and workforce
//    education and training provider should establish its own course placement scores"; "ACCUPLACER doesn't recommend
//    course placement scores or in any way mandate the scores that any school or state system should use"; Skills Insight
//    method; bookmark standard-setting method.
//  - students/before-test-day/test-day: some schools allow walk-in testing, contact the school about appointments; "In most
//    instances, the ACCUPLACER test is untimed"; photo ID, acceptable IDs include "Middle or High School ID"; onscreen
//    calculator on some questions with "a calculator icon in the top-right corner of the screen"; "You're not allowed to
//    bring a physical calculator into the test center"; vouchers come from the school or college.
//  - educators/whats-on-tests: "ACCUPLACER can house locally authored departmental exams".
//  - next-generation-test-specifications-manual.pdf: Arithmetic, QAS and AAF each "Total 20" questions with the note
//    "Values not final"; Arithmetic five categories at 3 to 5 questions each; QAS "suited for students entering many
//    non-STEM fields of study or for students who are undecided on a major"; AAF "suited for students entering STEM fields
//    of study, as well as students entering non-STEM fields of study that require some advanced math (e.g., medicine,
//    economics, accounting)"; AAF ranges (Linear equations 2 to 3, Functions 2 to 4, Trigonometry 1 to 3 ...);
//    no-calculator questions "assess fluency in rational number arithmetic"; pop-up calculators: basic, square root,
//    graphing (TI-84); "assess fluency with mathematical procedures and conceptual understanding with equal intensity".
// Not used: a list of colleges' cut scores (each college sets its own; none printed); the sample-question PDFs (not
// reproduced). Our own material, labelled: three worked examples (3/8 = 0.375 = 37.5%; 12 workers 15 days -> 9 workers
// 20 days; 2^(x+1) = 32 gives x = 4), a ten-item practice set with answers, a four-week plan.
// Lesson family: equivalent forms (fraction, decimal, percent) and matching bases in exponential equations.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST PREP', blurb: 'ACCUPLACER math for college and dual enrollment: the Arithmetic, QAS and AAF tests from College Board, the 200 to 300 scale, and original practice.' },
  slug: 'accuplacer-math-prep',
  code: 'acx',
  accent: '#37613C',
  accentRationale: 'ACCUPLACER math prep: a pine green #37613C from the US allocation table, 6.74:1 on paper #FBF8F2 and 5.80:1 on the deepest tint, kept apart from the SAT and ACT page blues',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'ACCUPLACER math prep',
  title: 'ACCUPLACER Math Prep: Arithmetic, QAS and AAF Tests',
  description: 'ACCUPLACER math prep for college and dual enrollment: the Arithmetic, QAS and AAF tests, the 200 to 300 scale, calculator rules and an original practice set.',
  ogDescription: 'No one passes or fails ACCUPLACER, but the math score decides which course you start in. What College Board publishes about the three math tests, and how to get ready for the one your college gives.',
  twitterDescription: 'ACCUPLACER Arithmetic, QAS and AAF explained from College Board, with practice.',
  pageName: 'ACCUPLACER Math Prep',
  webPageDescription: 'A guide for students and families to the ACCUPLACER math placement tests (Arithmetic; Quantitative Reasoning, Algebra, and Statistics; Advanced Algebra and Functions), built from College Board\'s own pages and test specifications, with worked examples and an original practice set.',
  courseDescription: 'ACCUPLACER Arithmetic, QAS and AAF taught live over video to high school, dual enrollment and returning adult students; join a group of 15 to 20 or learn one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'ACCUPLACER math prep',
  navLinks: [
    { href: '#tests', label: 'Three tests' },
    { href: '#which', label: 'Which one' },
    { href: '#format', label: 'Format' },
    { href: '#scores', label: 'Scores' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Dual enrollment and college entry &middot; College Board placement tests',
  h1: 'ACCUPLACER math prep',
  lede: 'ACCUPLACER is the College Board placement system that many community colleges, universities and training providers use to decide where a new student starts in math. It has three multiple-choice math tests, each adaptive and usually untimed, and none of them is pass or fail. What the score changes is the first course on your timetable, and with it how many semesters stand between you and the class your program actually needs. This page sets out what College Board says about each test, how scores work, and how to prepare, with problems we wrote ourselves.',
  secondaryCta: { href: '#which', label: 'Find out which test you take' },
  wa: 'Hello Modern Age Coders, I have an ACCUPLACER math placement test coming up for college or dual enrollment. Could I book a free first class?',
  heroNote: 'Live math teaching since 2020 &middot; 10,000+ students &middot; original practice, never copied test items',
  spec: [
    ['Publisher', 'College Board'],
    ['Math tests', 'Arithmetic, QAS, AAF'],
    ['Format', 'Multiple choice, adaptive'],
    ['Time limit', 'Usually none'],
    ['Score range', '200 to 300 per test'],
    ['Pass or fail', 'Neither'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'ACCUPLACER is College Board\'s computer-adaptive placement test used by colleges and workforce training providers. Its math side has three tests: Arithmetic; Quantitative Reasoning, Algebra, and Statistics (QAS); and Advanced Algebra and Functions (AAF). Each is scored 200 to 300, and each college sets its own placement scores. Our College Math Placement Test Prep course covers every one of them in live online classes, either in a group batch or 1-on-1.',

  picks: {
    eyebrow: 'Placement math, taught properly',
    h2: 'Three courses that get you ready for ACCUPLACER math',
    lede: 'Start with the placement course; the other two rebuild algebra in depth when a gap goes back further than a few weeks of review.',
    items: [
      { course: 'college-math-placement-test-prep-course', code: 'ACX / 01', title: 'College math placement test prep', note: 'ACCUPLACER, ALEKS PPL, TSIA2 and CLEP College Algebra, ages 15 and up.' },
      { course: 'algebra-foundations-masterclass', code: 'ACX / 02', title: 'Algebra foundations', note: 'For the QAS test: expressions, linear equations and graphs.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'ACX / 03', title: 'High school math', note: 'For AAF: quadratics, functions, logarithms and trigonometry.' }
    ]
  },

  sections: [
    {
      id: 'tests', tint: 'tint', eyebrow: 'The three math tests',
      h2: 'What is on the ACCUPLACER math test?',
      lede: 'There is no single ACCUPLACER math test. College Board publishes three, each with its own list of skills, and your college decides which one, or which sequence, you sit.',
      body: [
        { kind: 'table', caption: 'The ACCUPLACER math tests and the skills College Board lists for each (accuplacer.collegeboard.org, What\'s on the Tests, read 31 October 2026)', head: ['Test', 'Skills College Board lists', 'Usual level'], rows: [
          ['Arithmetic', 'Whole number operations; fraction operations; decimal operations; percent; number comparisons and equivalents', 'Middle school number work'],
          ['Quantitative Reasoning, Algebra, and Statistics (QAS)', 'Rational numbers; ratio and proportional relationships; exponents; algebraic expressions; linear equations; linear applications and graphs; probability and sets; descriptive statistics; geometry concepts', 'Pre-algebra to Algebra 1'],
          ['Advanced Algebra and Functions (AAF)', 'Linear equations; linear applications and graphs; factoring; quadratics; functions; radical and rational equations; polynomial equations; exponential and logarithmic equations; trigonometry', 'Algebra 1 to precalculus'],
        ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/whats-on-tests" rel="noopener" target="_blank">What\'s on the Tests, ACCUPLACER</a>, read 31 October 2026. The "usual level" column is our reading of the skill lists, not College Board\'s wording. We are not connected with College Board or ACCUPLACER.' },
        { kind: 'two', mt: true,
          leftH3: 'What Arithmetic really tests',
          left: [
            'College Board describes the Arithmetic test as focused on "computation, order of operations, estimation and rounding, comparing and ordering values in different formats, and recognizing equivalent values across formats." That last phrase matters: many questions ask whether a fraction, a decimal and a percent are the same number.',
            'The test specifications manual adds that no-calculator questions "assess fluency in rational number arithmetic", which is why students who lean on a phone calculator in class often find this test harder than its content looks.'
          ],
          rightH3: 'Where QAS and AAF overlap',
          right: [
            'Linear equations and linear applications and graphs appear on both the QAS and the AAF lists. The difference is what sits around them: QAS adds ratio, probability, statistics and basic geometry, while AAF adds factoring, quadratics, logarithms and trigonometry.',
            'A student who is solid on lines and slope therefore has a head start on either test. A student who is shaky there will feel it on both.'
          ] }
      ]
    },
    {
      id: 'which', tint: 'deep', eyebrow: 'Which test you sit',
      h2: 'Which ACCUPLACER math test will I take?',
      lede: 'Usually the one your planned major needs. College Board\'s test specifications describe who each test is built for, and colleges route students from there.',
      body: [
        { kind: 'two',
          leftH3: 'QAS for most non-STEM programs',
          left: [
            'The next-generation test specifications manual says the QAS test is "suited for students entering many non-STEM fields of study or for students who are undecided on a major." Think liberal arts, business support, many health certificates and general studies.',
            'For those students the gateway course is often statistics or quantitative reasoning rather than college algebra, which is why QAS leans on proportional reasoning, probability and reading data.'
          ],
          rightH3: 'AAF for STEM and math-heavy majors',
          right: [
            'The same manual says AAF is "suited for students entering STEM fields of study, as well as students entering non-STEM fields of study that require some advanced math (e.g., medicine, economics, accounting)."',
            'If you are heading for engineering, computer science, nursing tracks that need college algebra, or any calculus sequence, expect AAF, and expect it to decide whether you start in college algebra, precalculus or calculus.'
          ] },
        { kind: 'p', mt: true, html: 'Colleges can also add their own material: College Board\'s educator pages note that "ACCUPLACER can house locally authored departmental exams." So two colleges that both say "ACCUPLACER" may not give exactly the same sequence. The honest first step is always to ask your college\'s testing center which math test, or which combination, you will see.' },
        { kind: 'ol', mt: true, items: [
          '<b>Ask the testing center which math test you will sit.</b> Arithmetic, QAS, AAF, or a sequence that moves you between them.',
          '<b>Ask which course each score range places you into.</b> The placement table belongs to the college, not to College Board.',
          '<b>Ask whether you can retest, and when.</b> Get the answer in writing before you test, so a disappointing first score has a plan behind it.',
          '<b>Ask whether other evidence counts.</b> Some colleges also weigh high school grades or other scores; College Board\'s educator pages describe how multiple factors improve placement decisions.',
          '<b>Book the appointment.</b> College Board notes that some schools allow walk-in testing, but tells students to contact the school to see if an appointment is necessary.'
        ] }
      ]
    },
    {
      id: 'format', tint: 'tint', eyebrow: 'How the test runs',
      h2: 'Is the ACCUPLACER math test timed, and can you use a calculator?',
      lede: 'Usually it is not timed, and you cannot bring your own calculator. A calculator appears on screen only for questions that allow one.',
      body: [
        { kind: 'table', caption: 'How ACCUPLACER math is delivered (College Board student pages and the next-generation test specifications manual, read 31 October 2026)', head: ['Feature', 'What College Board says'], rows: [
          ['Question type', 'Multiple choice for all three math tests'],
          ['Adaptive', 'Your response to each question determines the difficulty of the next one'],
          ['Time limit', '"There\'s no time limit on the tests"; in most instances untimed, confirmed by the test center'],
          ['Questions per test', 'The specifications manual lists a total of 20 for each math test, marked "Values not final"'],
          ['Own calculator', 'Not allowed in the test center, except with an approved accommodation'],
          ['Onscreen calculator', 'On some questions only, shown by a calculator icon in the top-right corner'],
          ['Calculator types', 'Basic, square root, or graphing (TI-84), depending on the question'],
          ['Pass or fail', '"No one passes or fails ACCUPLACER tests"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Adaptive and untimed: what that means for you',
          left: [
            'Because each answer sets the difficulty of the next question, an early careless slip pulls the next question down a level. College Board\'s own advice is "to give each question as much thought as you can before selecting your answer."',
            'Untimed is a gift if you use it. Check each answer by substitution or estimation before you click; there is no clock rewarding speed.'
          ],
          rightH3: 'Calculator questions and no-calculator questions',
          right: [
            'The specifications manual explains that no-calculator questions check that "students who earn high scores ... do not lack the ability to perform calculations manually", while calculator questions check "strategic use of the tool."',
            'So practise both ways: fraction and percent arithmetic by hand, and a graphing calculator for the questions that offer one, so the TI-84 style tool is familiar on the day.'
          ] },
        { kind: 'table', mt: true, caption: 'Advanced Algebra and Functions: questions per skill area in the test specifications (next-generation ACCUPLACER test specifications manual; College Board marks these values "not final")', head: ['AAF skill area', 'Questions', 'Share of test'], rows: [
          ['Linear equations', '2 to 3', '10 to 15%'],
          ['Linear applications and graphs', '2 to 3', '10 to 15%'],
          ['Factoring', '1 to 2', '5 to 10%'],
          ['Quadratics', '2 to 3', '10 to 15%'],
          ['Functions', '2 to 4', '10 to 20%'],
          ['Radical and rational equations', '1 to 3', '5 to 15%'],
          ['Polynomial equations', '1 to 3', '5 to 15%'],
          ['Exponential and logarithmic equations', '1 to 3', '5 to 15%'],
          ['Geometry concepts for Algebra 1', '1 to 2', '5 to 10%'],
          ['Geometry concepts for Algebra 2', '1 to 2', '5 to 10%'],
          ['Trigonometry', '1 to 3', '5 to 15%']
        ], numCols: [1, 2] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://accuplacer.collegeboard.org/accuplacer/pdf/next-generation-test-specifications-manual.pdf" rel="noopener" target="_blank">Next-Generation ACCUPLACER Test Specifications</a> and <a class="ag-inline-link" href="https://accuplacer.collegeboard.org/students/before-test-day/test-day" rel="noopener" target="_blank">Get Ready for Test Day</a>, read 31 October 2026. College Board notes the percentages do not necessarily add up to 100.' }
      ]
    },
    {
      id: 'scores', tint: 'deep', eyebrow: 'Scores and placement',
      h2: 'What is a good ACCUPLACER math score?',
      lede: 'There is no national answer. Each math test is scored 200 to 300, and each college decides which score sends you to which course.',
      body: [
        { kind: 'two',
          leftH3: 'The scale and the seven bands',
          left: [
            'College Board says the Reading, Writing, Arithmetic, QAS and AAF tests "each have a score range of 200 to 300", broken into seven bands: 200 to 220, 221 to 230, 231 to 240, 241 to 250, 251 to 260, 261 to 270 and 271 to 300.',
            'For each band, a College Readiness Skills Insight statement describes what a student scoring there is likely to know and be able to do. Reading the statement one band above your practice score is the clearest study list College Board offers.'
          ],
          rightH3: 'Who sets the cut score',
          right: [
            'College Board\'s educator guidance is direct: "Each college, university, or career and workforce education and training provider should establish its own course placement scores." It adds that "ACCUPLACER doesn\'t recommend course placement scores or in any way mandate the scores that any school or state system should use."',
            'So a score that places you into college algebra at one campus may place you a course lower at another. Check the placement table at your own college before you set a target.'
          ] },
        { kind: 'p', mt: true, html: 'Colleges usually set those scores in one of two ways College Board describes: matching the skills a course needs to the Skills Insight statements, or a "bookmark" standard setting in which faculty review test items ordered from easiest to hardest and mark the point a successful student should reach. Either way, faculty at your college, not College Board, draw the line.' },
        { kind: 'ol', mt: true, items: [
          '<b>Find your college\'s placement table.</b> It is often on the testing center or math department page; if not, ask.',
          '<b>Take a free official practice test.</b> College Board offers practice tests that need a free account, plus downloadable sample questions.',
          '<b>Read the Skills Insight statement one band above your practice result.</b> Those skills are your first study list.',
          '<b>Study by skill, not by test.</b> Fix the two weakest skills from the list, then retake a practice test.',
          '<b>Bring the right ID.</b> College Board lists acceptable IDs, including a driver\'s license, a passport and a middle or high school ID.'
        ] }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Three ACCUPLACER-style problems, worked by reasoning',
      lede: 'These are our own problems, one at the level of each test. They are not College Board items and do not imitate any.',
      body: [
        { kind: 'table', caption: 'Worked example 1, Arithmetic level (ours): which is larger, 3/8 or 0.4, and by how many percentage points?', head: ['Step', 'Reasoning'], rows: [
          ['1. Pick one format', 'Turn everything into decimals: comparing like with like avoids mistakes'],
          ['2. Convert 3/8', '3 / 8 = 0.375, because 1/8 = 0.125 and 3 x 0.125 = 0.375'],
          ['3. Compare', '0.4 = 0.400, which is larger than 0.375'],
          ['4. Percentage points', '0.400 = 40% and 0.375 = 37.5%, a gap of 2.5 percentage points'],
          ['5. Sanity check', '3/8 is a little under 3/7.5 = 0.4, so 0.4 being larger makes sense']
        ] },
        { kind: 'table', mt: true, caption: 'Worked example 2, QAS level (ours): 12 workers finish a job in 15 days. At the same rate, how long do 9 workers take?', head: ['Step', 'Reasoning'], rows: [
          ['1. Spot the relationship', 'More workers means fewer days: this is inverse proportion, not direct'],
          ['2. Find the total work', '12 workers x 15 days = 180 worker-days'],
          ['3. Share it out', '180 worker-days / 9 workers = 20 days'],
          ['4. Sanity check', 'Fewer workers should take longer, and 20 is more than 15']
        ] },
        { kind: 'table', mt: true, caption: 'Worked example 3, AAF level (ours): solve 2^(x + 1) = 32', head: ['Step', 'Reasoning'], rows: [
          ['1. Write both sides with the same base', '32 = 2^5, so 2^(x + 1) = 2^5'],
          ['2. Match exponents', 'Equal powers of the same base have equal exponents: x + 1 = 5'],
          ['3. Solve', 'x = 4'],
          ['4. Check', '2^(4 + 1) = 2^5 = 32'],
          ['5. If the bases do not match', 'Take logs: x + 1 = log 32 / log 2, which still gives 5']
        ] },
        { kind: 'p', mt: true, html: 'The common thread is choosing a form before calculating. In example 1 the form is decimals; in example 2 it is total worker-days; in example 3 it is a shared base. ACCUPLACER rewards that habit because, with no clock, the student who chooses well and checks every answer gives the adaptive engine accurate signals from the first question.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice and a plan',
      h2: 'An original ACCUPLACER math practice set and a four-week plan',
      lede: 'Ten problems we wrote across the three levels, with answers, then a plan built around College Board\'s free official practice.',
      body: [
        { kind: 'table', caption: 'Ten practice problems written by us, answers on the right', head: ['#', 'Level', 'Problem', 'Answer'], rows: [
          ['1', 'Arithmetic', 'Write 0.06 as a fraction in lowest terms', '3/50'],
          ['2', 'Arithmetic', 'What is 15% of 240?', '36'],
          ['3', 'Arithmetic', '2 1/3 + 1 3/4', '4 1/12'],
          ['4', 'QAS', 'A map scale is 1 cm to 4 km. How many km is 6.5 cm?', '26 km'],
          ['5', 'QAS', 'Solve 5x - 7 = 3x + 9', 'x = 8'],
          ['6', 'QAS', 'Mean of 4, 9, 9, 10 and 13', '9'],
          ['7', 'QAS', 'A bag has 3 red and 5 blue counters. P(red)?', '3/8'],
          ['8', 'AAF', 'Factor x^2 - 5x - 14', '(x - 7)(x + 2)'],
          ['9', 'AAF', 'If f(x) = 3x - 2, find f(f(2))', '10'],
          ['10', 'AAF', 'Solve log base 3 of x = 4', 'x = 81']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Week 1: baseline.</b> Create a free College Board practice account and take a practice test at the level your college named. Sort every miss by skill using the lists on this page.',
          '<b>Week 2: number sense and lines.</b> Fractions, percents and equivalents by hand; slope, intercepts and linear word problems. These sit under every level.',
          '<b>Week 3: your test\'s own skills.</b> For QAS, ratio, probability and statistics; for AAF, factoring, functions, exponentials and logarithms, and right-triangle trigonometry.',
          '<b>Week 4: rehearsal.</b> A second practice test, untimed but in one sitting, checking each answer before moving on, exactly as you will on the day.'
        ] },
        { kind: 'p', mt: true, html: 'College Board also points students to its free ACCUPLACER Perspective Learning Resources and downloadable sample questions for each test. We use those official materials in class as they are, and teach the method with problems of our own, like the ones above.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where you are starting',
    h2: 'Four starting points we see before ACCUPLACER',
    lede: 'Our description of the students who come to us, and what each one usually needs first.',
    table: { caption: 'Starting points before an ACCUPLACER math test (ours)', head: ['Starting point', 'What usually helps first'], rows: [
      ['1. Years away from math', 'Fractions, percents and order of operations, then lines'],
      ['2. Finished Algebra 1, rusty', 'Linear equations and graphs, then ratio and statistics for QAS'],
      ['3. Through Algebra 2', 'Logarithms, rational equations and trigonometry for AAF'],
      ['4. Dual enrollment junior', 'Practice under test conditions and checking every answer']
    ] },
    left: { h3: 'For students', ps: [
      'The test has no clock, so the skill that matters most is checking. Substitute your answer back, or estimate, before you move on.',
      'Know which test you are sitting before you start studying; it saves weeks.'
    ] },
    right: { h3: 'For parents of dual enrollment students', ps: [
      'Ask the college for its placement table and retest rule early in the semester before the dual enrollment course.',
      'A placement one course higher can mean one fewer semester of prerequisites, which is why a few weeks of preparation is worth it.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses from pre-algebra to college level',
    lede: 'Live classes for students preparing to place well, and for those who want to keep going once they have.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Number and pre-algebra', courses: [
        { code: 'ACX / F / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Fractions, ratio and percent.' },
        { code: 'ACX / F / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Pre-algebra and Algebra 1.' },
        { code: 'ACX / F / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data, chance and spread.' }
      ] },
      { num: 'II', h3: 'Placement and high school', sub: 'Algebra 2 to precalculus', courses: [
        { code: 'ACX / P / 01', slug: 'college-math-placement-test-prep-course', title: 'Placement test prep', blurb: 'ACCUPLACER, ALEKS PPL, TSIA2.' },
        { code: 'ACX / P / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra to calculus.' },
        { code: 'ACX / P / 03', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Functions in depth.' }
      ] },
      { num: 'III', h3: 'College level', sub: 'After placement', courses: [
        { code: 'ACX / C / 01', slug: 'college-mathematics-complete-masterclass', title: 'College math', blurb: 'Calculus to linear algebra.' },
        { code: 'ACX / C / 02', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'AB and BC.' },
        { code: 'ACX / C / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Math in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Placement prep that fits around school or work',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening sessions after school or a shift.' },
      { time: 'Weekends', l: 'Longer practice blocks before a test date.' },
      { time: '1-on-1', l: 'Built around your college\'s test and date.' }
    ],
    cells: [
      { h3: 'Skill by skill', p: 'Lessons follow College Board\'s published skill lists.' },
      { h3: 'Check every answer', p: 'The untimed format rewards it.' },
      { h3: 'Hand and calculator', p: 'Both kinds of question, practised.' },
      { h3: 'Your college\'s rules', p: 'We plan to its placement table.' },
      { h3: 'Adults welcome', p: 'From age 15 to returning learners.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Some of our older students build math tools in code once they are placed. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents and students wrote on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly fee in US dollars, no contract: sign up for the weeks before your placement date and end it the month you test.',
    free: ['A free first class', 'Bring your college\'s test name', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Planned to your test date', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions students ask',
    h2: 'ACCUPLACER math: common questions',
    items: [
      { q: 'What kind of math questions are on the ACCUPLACER?', a: 'It depends on the test your college gives. Arithmetic covers whole numbers, fractions, decimals, percent and equivalent values; QAS covers ratio, exponents, linear equations, probability, statistics and basic geometry; AAF covers factoring, quadratics, functions, exponential and logarithmic equations and trigonometry.' },
      { q: 'Is the ACCUPLACER math test hard?', a: 'It is adaptive, so it gets harder as you answer correctly and easier after mistakes. Most students find it fair if they know which test they are taking and have reviewed its skill list. Because it is usually untimed, careful checking matters more than speed.' },
      { q: 'How many questions are on the ACCUPLACER math test?', a: 'College Board\'s test specifications list a total of 20 questions for each math test, with a note that the values are not final. Your college may give more than one math test in a sequence.' },
      { q: 'Can you use a calculator on the ACCUPLACER math test?', a: 'You cannot bring your own calculator, unless an accommodation allows it. Some questions show an onscreen calculator, marked by an icon in the top-right corner; others are deliberately no-calculator.' },
      { q: 'What is a passing score on the ACCUPLACER math test?', a: 'There is no pass or fail; College Board says so directly. Each math test is scored 200 to 300, and each college sets its own placement scores, so check your college\'s table.' },
      { q: 'Is the ACCUPLACER timed?', a: 'College Board says there is no time limit on the tests and that in most instances they are untimed, with the test center confirming. Plan for a full sitting anyway.' },
      { q: 'How do I prepare for the ACCUPLACER math test?', a: 'Find out which test you are taking, take a free official practice test, then study the skills you missed and retake a practice test. Review fractions, percents and linear equations first, because they support every level.' },
      { q: 'Can high school students take the ACCUPLACER?', a: 'Yes, where a college uses it for dual enrollment. College Board\'s list of acceptable IDs includes a middle or high school ID. Ask the college about appointments and any voucher.' },
      { q: 'When are your ACCUPLACER classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with College Board or ACCUPLACER?', a: 'No. We are an independent online school. We describe the tests from College Board\'s published pages and use its free practice materials as they are.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More help for US students between high school and college math.',
    items: [
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'The skill under QAS and AAF alike.' },
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'Logarithms and rational equations for AAF.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'For students aiming above college algebra.' },
      { href: '/online-math-tutor-11th-grade', label: 'Eleventh grade math', p: 'The dual enrollment year for many students.' },
      { href: '/online-math-tutor-12th-grade', label: 'Twelfth grade math', p: 'Senior year, before college placement.' },
      { href: '/sat-math-tutoring-online', label: 'SAT math tutoring', p: 'If your college accepts SAT scores instead.' },
      { href: '/online-math-tutor-cost', label: 'Math tutor cost', p: 'How online math tutoring is usually priced.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us which ACCUPLACER math test your college named and your test date. The teacher will find your weakest skills in the first class and plan from there.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or see the full list of <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'Our teachers work live from India and keep evening and weekend slots for students in every US time zone. WhatsApp reaches us fastest.',
    formNote: 'Your first class is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Placement math', links: [
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' },
        { href: '/algebra-2-tutoring-online', label: 'Algebra 2' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-math-tutor-12th-grade', label: 'Grade 12 math' },
        { href: '/sat-math-tutoring-online', label: 'SAT math' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '3/8 = 0.375 = 37.5%'
  },

  personalityCss: `
.ag-root.ag-acx .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-acx .ag-capsule { border-left-width: 3px; border-radius: 3px; }
.ag-root.ag-acx .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-acx .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-acx .ag-steps li { padding-bottom: 4px; }
`,

  dossier: {
    curriculumAuthority: 'College Board ACCUPLACER (accuplacer.collegeboard.org), read raw 31 October 2026: What\'s on the Tests (student and educator versions: Arithmetic, QAS and AAF skill lists; no time limit; adaptive; no pass or fail; locally authored departmental exams); Understand My Scores and What the Scores Mean (200 to 300 scale, seven bands, Skills Insight); Set Course Placement Scores (each institution sets its own; ACCUPLACER does not recommend or mandate scores; Skills Insight and bookmark methods); Get Ready for Test Day (appointments, untimed in most instances, IDs including middle or high school ID, onscreen calculator icon, no physical calculator, vouchers); Next-Generation ACCUPLACER Test Specifications manual (20 questions per math test, values not final; QAS for non-STEM, AAF for STEM; AAF question ranges; calculator types).',
    localProject: 'Our worked examples: 3/8 = 0.375 against 0.4 (2.5 percentage points); 12 workers 15 days = 180 worker-days so 9 workers take 20 days; 2^(x + 1) = 32 gives x = 4. Our ten-item practice set with answers (3/50, 36, 4 1/12, 26 km, x = 8, 9, 3/8, (x - 7)(x + 2), 10, x = 81) and a four-week plan. Lesson family: equivalent forms and matching bases.',
    requiredMentions: ['No one passes or fails ACCUPLACER tests', 'locally authored departmental exams', 'suited for students entering many non-STEM fields of study or for students who are undecided on a major', 'Each college, university, or career and workforce education and training provider should establish its own course placement scores.', 'ACCUPLACER doesn\'t recommend course placement scores', '221 to 230, 231 to 240, 241 to 250', 'assess fluency in rational number arithmetic', 'a calculator icon in the top-right corner', '180 worker-days / 9 workers = 20 days', '2^(4 + 1) = 2^5 = 32'],
    sources: [
      { claim: 'ACCUPLACER What\'s on the Tests: math test skill lists, no time limit, adaptive, no pass or fail.', url: 'https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/whats-on-tests' },
      { claim: 'ACCUPLACER score range 200 to 300 and seven score bands.', url: 'https://accuplacer.collegeboard.org/students/scores/understanding-scores' },
      { claim: 'Each institution sets its own course placement scores.', url: 'https://accuplacer.collegeboard.org/educators/implementing-accuplacer/set-course-placement-scores' },
      { claim: 'Test day: appointments, IDs, calculator policy, untimed in most instances.', url: 'https://accuplacer.collegeboard.org/students/before-test-day/test-day' },
      { claim: 'Next-Generation ACCUPLACER Test Specifications: question counts, QAS and AAF audiences, calculator types.', url: 'https://accuplacer.collegeboard.org/accuplacer/pdf/next-generation-test-specifications-manual.pdf' }
    ],
    rejectedClaims: [
      'Any college\'s ACCUPLACER cut scores or a "good score" number: not printed; College Board says each institution sets its own.',
      'Exact live question counts: only the specification manual\'s 20 per test, which College Board marks "Values not final".',
      'College Board sample questions: not reproduced; our problems are original and labelled ours.',
      'Score improvement or placement promises for our classes: refused.',
      'Any affiliation with College Board or ACCUPLACER: none.'
    ]
  }
};
