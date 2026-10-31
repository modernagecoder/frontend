'use strict';
// US math placement and college readiness tests (ag- pillar/index page for the hub of the same name in
// content/exam-cluster-groups.json; UK and US exams cluster). Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md.
// Every figure below was re-grepped on 1 November 2026 in the raw copies the member pages saved (keyword-research-2026-09/
// uk-us-gap/src/<member-slug>/), plus four new raw pulls with curl in src/us-math-placement-and-college-readiness-tests/:
//  - NEW satsuite.collegeboard.org/scores/understanding-scores (sat_scores_understanding-scores.html): score report table
//    "Total Score 400-1600 400-1600 320-1520 320-1520 240-1440" for SAT, SAT with Essay, PSAT/NMSQT, PSAT 10, PSAT 8/9;
//    "Section Scores 200-800 ... 160-760 ... 120-720"; "NMSC Selection Index Score on a scale of 48-228" (dashes written "to").
//  - NEW act.org understanding-your-scores (act-scores.html): "1-36 Composite Score"; "Your Composite score is the average
//    of your English, math, and reading scores, rounded to the nearest whole number."
//  - NEW act.org test-day calculator-policy (act-calculator-policy.html): "You must bring your own permitted calculator.
//    Testing staff do not provide them."; "4-function, scientific, and graphing models are allowed unless prohibited".
//  - psat-math-prep/sat_sat-structure.html: SAT Math "70 (two 35-minute modules) 44"; total "2 hours and 14 minutes";
//    some math questions "ask you to enter the answer rather than select it".
//  - psat-math-prep/sat_in-school-assessments_calculator-policy.html: own approved handheld calculator or "the Desmos
//    calculator embedded in Bluebook"; graphing or scientific.
//  - psat-math-prep/guide.txt (fall 2026 PSAT/NMSQT guide): "The 2026 PSAT/NMSQT is the qualifying test for entry to the
//    2028 program"; entrants "must take the qualifying test in your third year of high school (grade 11, junior year)".
//  - psat-8-9-math-prep/psat-8-9-student-guide.txt: "scored on a 240-1440 scale"; "about 2 hours and 14 minutes"; "all
//    tests in the SAT Suite of Assessments, use multistage adaptive testing"; windows October 1 to 30, 2026 and
//    March 1 to April 30, 2027.
//  - preact-math-prep/www.act.org_preact.html: "PreACT assessments offer 8th, 9th, and 10th graders an early experience
//    with ACT test items, provides a predicted ACT test score"; "Aligned to the same 1-36 score scale as the ACT, PreACT 8/9
//    has a top score of 30"; PreACT "has a top score of 35". preact-faqs.html: PreACT new blueprint "Math 36 Items (32
//    scored) - 45 min."; enhanced ACT comparison row "Math 45 50 67" (ACT items, minutes, seconds per item).
//  - map-growth-math-test-prep/common-questions-families.txt: "Math: Grades K-12"; "Your child will answer around 43
//    questions"; fall, winter and spring; "We do not recommend using MAP Growth for grade-level advancement or
//    accountability purposes"; "is not tied to their grades". map-growth_features.txt: "Untimed"; "Every license of MAP
//    Growth includes tests for Algebra 1 and 2, Integrated Math 1, 2 and 3, and Geometry."
//  - i-ready-math-help: diagnostic page "The i-Ready Diagnostic Will Be Renamed i-Ready Inform and Get Shorter in School
//    Year 2026-2027"; "Grade(s):K-12"; family.txt "an assessment students complete up to three times a year";
//    understanding-student-data-families.txt: placement levels incl. "Needs Improvement".
//  - accuplacer-math-prep: 200 to 300 per test; "No one passes or fails ACCUPLACER tests"; adaptive; untimed in most
//    instances; each institution sets its own placement scores (all as quoted in that module's header, re-grepped).
//  - aleks-math-placement-test-prep/mh-k12.html: "open-response assessment covering 314 topics in 25 questions or less.
//    The entire assessment can be completed in 90 minutes"; "Many colleges and universities use ALEKS PPL's Assessment
//    results as their math placement exam." www.aleks.com_highered_ppl.html: "up to five assessment attempts".
//  - tsia2-math-prep/tsia2-student-informational-brochure.txt: CRC math "made up of 20 questions and covers 4 content
//    categories"; Diagnostic "made up of 48 questions"; "The assessments are untimed"; "Handheld calculators of any type
//    are not permitted"; tsia2-interpreting-your-scores.txt: "a score in the range of 950-990 on the Mathematics CRC Test
//    or a Mathematics CRC Test score below 950 and a Mathematics Diagnostic Test score of 6"; thecb-tsi.html: results "can
//    be used up to five years from date of testing".
//  - clep-college-algebra-prep: "approximately 60 questions to be answered in 90 minutes"; TI-30XS MultiView; scaled score
//    "ranges from 20 to 80"; ACE credit-granting score 50, 3 semester hours; "Each institution reserves the right to set
//    its own credit-granting policy". clep-calculus-prep/clep-exams_calculus.txt: "44 questions, in two sections";
//    Section 1 "No calculator is allowed for this section"; ACE 50, 4 semester hours.
//  - ap-precalculus-tutoring-online/exam.html: "Tue, May 11, 2027 | Session 1"; 42 multiple-choice and four free-response
//    questions; course overview PDF "designed to be the equivalent of a first semester college precalculus course".
//  - integrated-math-1-tutoring/ccss-math-standards_n.txt: standards "do not mandate the sequence of high school courses";
//    "integrated course sequence (Mathematics 1, Mathematics 2, Mathematics 3)". nc-math.html: "NC Math 1, 2, and 3 and a
//    fourth mathematics course".
//  - dual-enrollment-math-help: Running Start "allows 11th and 12th grade students to take college courses at Washington's
//    34 community and technical colleges"; HCC "must be assessed in Reading, Writing, and Mathematics prior to enrollment";
//    NACEP "the sole accrediting body for concurrent enrollment partnerships".
// Not printed: the AP score scale and the ALEKS PPL score scale (not in the raw copies; the table says "see" the owner);
// any college cut score; NMSC state cutoffs; any price. Our own material, labelled: the pace-per-question table (70 x 60 /
// 44 = 95.5 s; 50 x 60 / 45 = 66.7 s, which ACT itself rounds to 67; 90 x 60 / 60 = 90 s; 90 x 60 / 44 = 122.7 s; at least
// 90 x 60 / 25 = 216 s for ALEKS PPL), the grade-by-grade map, the one-skill-four-levels example (a 20% rise on 45 gives 54;
// solve 1.2x = 54 for x = 45; f(t) = 45(1.2)^t; f(2) = 64.8; t = ln 2 / ln 1.2, about 3.80), the five-question triage.
// Lesson family: one idea (multiplying by a growth factor) seen at four levels of the US ladder.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const L = (href, text) => `<a class="ag-inline-link" href="/${href}">${text}</a>`;
const X = (href, text) => `<a class="ag-inline-link" href="${href}" rel="noopener" target="_blank">${text}</a>`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'GUIDE', blurb: 'Every US math test from MAP Growth and i-Ready to the PSAT, SAT, ACT, ACCUPLACER, ALEKS PPL, TSIA2 and CLEP in one table: who runs it, who sits it, format and scale.' },
  slug: 'us-math-placement-and-college-readiness-tests',
  code: 'uspc',
  accent: '#3D5A80',
  accentRationale: 'Pillar page for US placement and readiness tests: a slate navy #3D5A80 not used by any sibling, 6.66:1 on paper #FBF8F2 and 5.73:1 on the deepest tint #EDE7DA, kept apart from the ACCUPLACER green and the PSAT mulberry',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'US math placement and college readiness tests',
  title: 'Math Placement Tests Explained: ACCUPLACER, ALEKS PPL, TSIA2',
  description: 'Math placement tests explained, from MAP Growth and i-Ready to PSAT, SAT, ACT, ACCUPLACER, ALEKS PPL, TSIA2 and CLEP: who runs each, format, calculator, scale.',
  ogDescription: 'A US student can meet a dozen math tests between kindergarten and a first college course. One table of all of them from the publishers\' own pages, then a route to the right one.',
  twitterDescription: 'Every US math placement and readiness test in one table, from MAP Growth to CLEP.',
  pageName: 'US Math Placement and College Readiness Tests',
  webPageDescription: 'A pillar guide for US families and students to the math tests that place, track and credit a learner from elementary school to college: MAP Growth, i-Ready, middle school placement, the SAT Suite, PreACT and ACT, ACCUPLACER, ALEKS PPL, TSIA2 and CLEP, built from each publisher\'s own pages.',
  courseDescription: 'Live online math teaching for the tests that place US students, from middle school tracks to college placement and credit, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Math placement and readiness tests',
  navLinks: [
    { href: '#table', label: 'All tests' },
    { href: '#school', label: 'School tests' },
    { href: '#courses', label: 'HS courses' },
    { href: '#psat', label: 'PSAT to ACT' },
    { href: '#college', label: 'College' },
    { href: '#choose', label: 'Choose' }
  ],
  eyebrow: 'United States &middot; Kindergarten to college &middot; Placement, readiness and credit',
  h1: 'Math placement tests explained: from MAP Growth to ACCUPLACER',
  lede: 'American math has no single exit exam. Instead a student passes through a chain of tests owned by different organizations: a growth test a few times a year in elementary and middle school, a placement decision before Algebra 1, the SAT Suite or the ACT family in high school, and then a college placement or credit exam. This guide puts the whole chain in one table, says what each test decides, and links the page for your test.',
  secondaryCta: { href: '#table', label: 'See every test in one table' },
  wa: 'Hello Modern Age Coders, I am trying to work out which US math placement or readiness test my child or I need to prepare for. Could I book a free first class?',
  heroNote: 'Live math teaching since 2020 &middot; 10,000+ students &middot; we teach the math, never leaked or copied items',
  spec: [
    ['Tests covered', 'Fourteen, K to college'],
    ['Growth tests', 'MAP Growth, i-Ready'],
    ['Readiness tests', 'PSAT, PreACT, SAT, ACT'],
    ['College placement', 'ACCUPLACER, ALEKS PPL, TSIA2'],
    ['College credit', 'CLEP, AP, dual enrollment'],
    ['Who sets cut scores', 'Usually the school or college'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'US math placement runs in stages. Schools use growth tests (NWEA MAP Growth, i-Ready) and local placement exams for middle school tracks; high schools give the PSAT 8/9, PSAT/NMSQT, PreACT, SAT and ACT; colleges place new students with ACCUPLACER, ALEKS PPL or, in Texas, TSIA2, and award credit through CLEP or AP. Modern Age Coders teaches the math behind each one live online, in a group batch or 1-on-1.',

  picks: {
    eyebrow: 'Three courses that cover the ladder',
    h2: 'Where we usually start a student',
    lede: 'One course for the college placement tests, one for the four years of high school math underneath them, and one for the SAT Math section that so many of those decisions lean on.',
    items: [
      { course: 'college-math-placement-test-prep-course', code: 'USPC / 01', title: 'College math placement test prep', note: 'ACCUPLACER, ALEKS PPL, TSIA2 and CLEP College Algebra, from age 15.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'USPC / 02', title: 'High school math, algebra to calculus', note: 'The courses every readiness test samples, grades 9 to 12.' },
      { course: 'sat-math-prep-course', code: 'USPC / 03', title: 'SAT math prep', note: 'The digital SAT Math section and its Desmos calculator.' }
    ]
  },

  sections: [
    {
      id: 'table', tint: 'tint', eyebrow: 'The master table',
      h2: 'Which math tests does a US student take, and who runs each one?',
      lede: 'Fourteen tests cover nearly every route from kindergarten to a first college math course. Every fact below comes from the organization that owns the test.',
      body: [
        { kind: 'table', caption: 'US math placement, readiness and credit tests compared (publishers\' own pages and guides, raw copies read 31 October and 1 November 2026)', head: ['Test', 'Run by', 'Who takes it', 'Format', 'Calculator', 'Score scale'], rows: [
          ['MAP Growth Math', 'NWEA', 'Grades K to 12, usually fall, winter and spring', 'Computer adaptive, untimed, around 43 questions', 'See NWEA and the school', 'RIT scale, the same meaning at every grade'],
          ['i-Ready Inform (formerly i-Ready Diagnostic)', 'Curriculum Associates', 'Grades K to 12, up to three times a year', 'Adaptive', 'See the school', 'Scale scores and placement levels such as Needs Improvement'],
          ['PSAT 8/9', 'College Board', 'Grades 8 and 9', 'Digital, multistage adaptive, two modules per section', 'Desmos built in, or an approved handheld', '240 to 1440 total, 120 to 720 per section'],
          ['PSAT 10', 'College Board', 'Grade 10, spring', 'Digital, multistage adaptive', 'Desmos built in, or an approved handheld', '320 to 1520 total, 160 to 760 per section'],
          ['PSAT/NMSQT', 'College Board with NMSC', 'Grades 10 and 11; grade 11 for National Merit entry', 'Digital, multistage adaptive', 'Desmos built in, or an approved handheld', '320 to 1520; Selection Index 48 to 228'],
          ['PreACT 8/9 and PreACT', 'ACT', 'Grades 8 to 10', 'Online, and paper for PreACT 8/9; Math 36 items, 32 scored, 45 minutes on the new PreACT blueprint', 'Ask the school', '1 to 36; top score 30 on PreACT 8/9, 35 on PreACT'],
          ['SAT', 'College Board', 'High school students, mostly grades 11 and 12', 'Digital, multistage adaptive; Math 44 questions in 70 minutes', 'Desmos built in, or an approved handheld', '400 to 1600 total, 200 to 800 for Math'],
          ['ACT', 'ACT', 'Grades 11 and 12', 'Math 45 items in 50 minutes (enhanced ACT)', 'Bring your own permitted calculator', '1 to 36; Composite is the average of English, math and reading'],
          ['ACCUPLACER math', 'College Board', 'New college and dual enrollment students', 'Three tests (Arithmetic, QAS, AAF), adaptive, untimed in most instances', 'Onscreen only, on some questions', '200 to 300 per test, no pass or fail'],
          ['ALEKS PPL', 'McGraw Hill', 'Students placing into college math', 'Open response, adaptive, 25 questions or fewer, up to five attempts', 'See the college\'s ALEKS instructions', 'See McGraw Hill and the college'],
          ['TSIA2 Mathematics', 'College Board for Texas public colleges', 'Students entering Texas public colleges unless exempt', 'Adaptive, untimed; 20-question CRC test, then a 48-question diagnostic if needed', 'No handheld calculator; pop-up calculators on some questions', 'Benchmark 950 to 990 on the CRC test, or below 950 with diagnostic level 6'],
          ['CLEP College Algebra', 'College Board', 'High school, homeschool and adult learners seeking credit', 'About 60 questions in 90 minutes', 'TI-30XS MultiView built in', '20 to 80; ACE recommends credit at 50'],
          ['CLEP Calculus', 'College Board', 'Learners seeking first-semester calculus credit', '44 questions in about 90 minutes, two sections', 'None in Section 1; online graphing in Section 2', '20 to 80; ACE recommends credit at 50'],
          ['AP Precalculus exam', 'College Board', 'Students in the AP Precalculus course', '42 multiple-choice and 4 free-response questions; Tuesday, May 11, 2027', 'Required on some parts, not permitted on others', 'See College Board\'s AP pages']
        ] },
        { kind: 'source', html: 'Sources: ' + X('https://www.nwea.org/the-map-suite/common-questions-families/', 'NWEA MAP Growth family questions') + '; ' + X('https://www.curriculumassociates.com/programs/i-ready-assessment/diagnostic', 'Curriculum Associates, i-Ready Inform') + '; ' + X('https://satsuite.collegeboard.org/scores/understanding-scores', 'College Board, understanding SAT Suite scores') + ' and the 2026 to 2027 PSAT student guides; ' + X('https://www.act.org/content/act/en/products-and-services/preact.html', 'ACT, PreACT') + ' and ACT\'s score and calculator pages; ' + X('https://accuplacer.collegeboard.org/students/prepare-for-accuplacer/whats-on-tests', 'ACCUPLACER') + '; ' + X('https://www.mheducation.com/highered/digital-products/aleksppl.html', 'McGraw Hill, ALEKS PPL') + '; College Board\'s TSIA2 brochure; ' + X('https://clep.collegeboard.org/clep-exams/college-algebra', 'CLEP College Algebra') + ' and ' + X('https://clep.collegeboard.org/clep-exams/calculus', 'CLEP Calculus') + '; ' + X('https://apcentral.collegeboard.org/courses/ap-precalculus/exam', 'AP Central, AP Precalculus exam') + '. A "see" cell means the owner\'s page did not state it. We are not connected with any of these organizations.' },
        { kind: 'two', mt: true,
          leftH3: 'Three kinds of test hide in that table',
          left: [
            'Growth tests (MAP Growth, i-Ready) follow a child through a school year. Readiness tests (the PSAT family, PreACT, SAT, ACT) report a scale score that colleges and scholarship programs read. Placement and credit tests (ACCUPLACER, ALEKS PPL, TSIA2, CLEP, AP) decide which college math course you may take, or let you skip one.'
          ],
          rightH3: 'Who draws the line',
          right: [
            'Publishers rarely set the line between tracks or courses. NWEA does not recommend MAP Growth "for grade-level advancement or accountability purposes", and CLEP says each institution "reserves the right to set its own credit-granting policy." So always ask: whose table turns my score into a decision?'
          ] }
      ]
    },
    {
      id: 'school', tint: 'deep', eyebrow: 'Elementary and middle school',
      h2: 'How do MAP Growth, i-Ready and placement tests shape a middle school math track?',
      lede: 'They give the school evidence, and the school decides, usually by adding a district rule or a local exam.',
      body: [
        { kind: 'two',
          leftH3: 'The two growth tests most districts use',
          left: [
            'NWEA describes MAP Growth Math as untimed and available from kindergarten to grade 12, with a child answering "around 43 questions" that adapt as they go. The RIT score means the same at every grade, which is how a teacher sees growth from fall to spring. Our ' + L('map-growth-math-test-prep', 'MAP Growth math page') + ' is for a parent holding a RIT report who wants home practice that is not item drilling.',
            'Curriculum Associates renames its diagnostic i-Ready Inform from the 2026 to 2027 school year. The family report places each math domain at a level, down to Needs Improvement, and ' + L('i-ready-math-help', 'our i-Ready page') + ' works from the weakest domain rather than the overall number.'
          ],
          rightH3: 'Where tracking actually happens',
          right: [
            'The fork comes around grades 5 to 7. Texas now enrolls sixth graders automatically in advanced math if they reach the top 40 percent on grade 5 STAAR math or a local measure; other districts use RIT scores, teacher input or a local exam. ' + L('middle-school-math-placement-test-prep', 'The placement test page') + ' covers the move into accelerated grade 6 and the move into Algebra 1.',
            'For a student already ahead, ' + L('accelerated-math-program-online', 'the accelerated math page') + ' shows which grade 7 and 8 ideas get compressed, so nothing is skipped on the way to early Algebra 1.'
          ] },
        { kind: 'p', mt: true, html: 'A word on preparation at this stage. NWEA calls its items secure test content and warns that helping a child answer compromises the data, and an adaptive test that is gamed simply places a child too high for the next unit. What helps is steady number sense: fractions, place value and word problems read slowly, which every later test on this page relies on.' }
      ]
    },
    {
      id: 'courses', tint: 'tint', eyebrow: 'Grades 9 to 12',
      h2: 'Which high school math courses sit underneath the readiness and placement tests?',
      lede: 'Every test from the PSAT onward samples the same three or four years of math, whatever the course names on the transcript.',
      body: [
        { kind: 'two',
          leftH3: 'Two routes through the same content',
          left: [
            'The Common Core standards "do not mandate the sequence of high school courses" and describe an "integrated course sequence (Mathematics 1, Mathematics 2, Mathematics 3)" beside the traditional one. North Carolina requires "NC Math 1, 2, and 3 and a fourth mathematics course", and NWEA offers MAP course tests for Integrated Math 1, 2 and 3.',
            'Our integrated pages split the years: ' + L('integrated-math-1-tutoring', 'Integrated Math 1') + ' sets linear against exponential change, ' + L('integrated-math-2-tutoring', 'Integrated Math 2') + ' is the quadratics year, and ' + L('integrated-math-3-tutoring', 'Integrated Math 3') + ' brings polynomials, logarithms and inference, the content college placement probes most.'
          ],
          rightH3: 'The courses that finish the ladder',
          right: [
            ' ' + L('trigonometry-tutoring-online', 'Trigonometry tutoring') + ' joins the right-triangle picture to the unit circle. ' + L('statistics-tutoring-online', 'Statistics tutoring') + ' is the non-AP course on variability and sampling, the data questions SAT and ACCUPLACER keep asking.',
            'At the top, College Board describes ' + L('ap-precalculus-tutoring-online', 'AP Precalculus') + ' as "designed to be the equivalent of a first semester college precalculus course"; its exam is on Tuesday, May 11, 2027, with 42 multiple-choice and four free-response questions.'
          ] }
      ]
    },
    {
      id: 'psat', tint: 'deep', eyebrow: 'The SAT Suite and the ACT family',
      h2: 'What is the difference between the PSAT 8/9, PSAT/NMSQT, PreACT, SAT and ACT?',
      lede: 'Two families, one ladder each. College Board runs the PSAT 8/9, PSAT 10, PSAT/NMSQT and SAT on linked scales; ACT runs PreACT 8/9, PreACT and the ACT on the 1 to 36 scale. Only the PSAT/NMSQT in grade 11 feeds National Merit.',
      body: [
        { kind: 'table', caption: 'Score scales in the two readiness families (College Board score report table; ACT PreACT and score pages; read 1 November 2026)', head: ['Test', 'Total scale', 'Math scale', 'Grades', 'What it is mainly for'], rows: [
          ['PSAT 8/9', '240 to 1440', '120 to 720', '8 and 9', 'A baseline at the start of high school'],
          ['PSAT 10', '320 to 1520', '160 to 760', '10', 'A spring check-in on the SAT scale'],
          ['PSAT/NMSQT', '320 to 1520', '160 to 760', '10 and 11', 'National Merit entry when taken in grade 11'],
          ['SAT', '400 to 1600', '200 to 800', '11 and 12', 'College admission and some placement'],
          ['PreACT 8/9', '1 to 36, top score 30', 'Same scale', '8 and 9', 'An early look at ACT-style items'],
          ['PreACT', '1 to 36, top score 35', 'Same scale', '9 to 11', 'A predicted ACT score'],
          ['ACT', '1 to 36', '1 to 36', '11 and 12', 'College admission and some placement']
        ] },
        { kind: 'source', html: 'Sources: ' + X('https://satsuite.collegeboard.org/scores/understanding-scores', 'College Board, understanding scores') + ' (the score report table), the ' + X('https://satsuite.collegeboard.org/media/pdf/psat-nmsqt-student-guide.pdf', 'fall 2026 PSAT/NMSQT student guide') + ', ' + X('https://www.act.org/content/act/en/products-and-services/preact.html', 'ACT PreACT page') + ' and ' + X('https://www.act.org/content/act/en/products-and-services/the-act/scores/understanding-your-scores.html', 'ACT, understanding your scores') + '. Grade bands for PreACT are ACT\'s; for the SAT Suite they follow College Board\'s test names and guides.' },
        { kind: 'two', mt: true,
          leftH3: 'The College Board ladder',
          left: [
            'All four College Board tests use "multistage adaptive testing" in the Bluebook app: the first module of each section sets the difficulty of the second. SAT Math is 44 questions in 70 minutes, with Desmos built in and an approved handheld allowed.',
            '' + L('psat-8-9-math-prep', 'Our PSAT 8/9 page') + ' treats the first test as a list of what to fix in grades 8 and 9; its windows are October 1 to 30, 2026 and March 1 to April 30, 2027. ' + L('psat-math-prep', 'The PSAT/NMSQT page') + ' covers the qualifying year, since entrants "must take the qualifying test in your third year of high school (grade 11, junior year)", and ' + L('sat-math-tutoring-online', 'SAT math tutoring') + ' covers the SAT itself.'
          ],
          rightH3: 'The ACT ladder',
          right: [
            'ACT says PreACT gives "8th, 9th, and 10th graders an early experience with ACT test items" and a predicted score; its new Math section has 36 items, 32 scored, in 45 minutes. ' + L('preact-math-prep', 'The PreACT page') + ' explains what that predicted range can tell a ninth grader.',
            'Enhanced ACT Math is 45 items in 50 minutes, and ACT\'s rule is "You must bring your own permitted calculator." ' + L('act-math-tutoring-online', 'ACT math tutoring') + ' is for students who have chosen that test.'
          ] }
      ]
    },
    {
      id: 'college', tint: 'tint', eyebrow: 'Placement and credit at college',
      h2: 'What are ACCUPLACER, ALEKS PPL and TSIA2, and how are they different from CLEP?',
      lede: 'ACCUPLACER, ALEKS PPL and TSIA2 are placement tests: they decide which math course a new college student starts in. College Board says no one passes or fails ACCUPLACER, and TSIA2 adds a Texas readiness benchmark on top of the placement. CLEP and AP are credit exams: a high enough score, by the college\'s own policy, replaces a course on the transcript.',
      body: [
        { kind: 'table', caption: 'College placement and credit routes (ACCUPLACER, McGraw Hill, College Board TSIA2 and CLEP pages, Texas Higher Education Coordinating Board; read 31 October and 1 November 2026)', head: ['Route', 'What it decides', 'Retakes and validity'], rows: [
          ['ACCUPLACER', 'Your first math course', 'Set by the college'],
          ['ALEKS PPL', 'Your first math course, Basic Math to Calculus 1', 'Up to five assessment attempts'],
          ['TSIA2', 'College-level readiness at a Texas public college', 'Results usable up to five years'],
          ['CLEP College Algebra or Calculus', 'Credit for the course, by college policy', 'No retake of the same title within three months'],
          ['AP Precalculus and AP Calculus', 'Credit or advanced standing', 'One exam each May'],
          ['Dual enrollment', 'A college course taken in high school', 'By program; usually needs placement first']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The three placement tests',
          left: [
            '' + L('accuplacer-math-prep', 'ACCUPLACER math') + ' is three separate College Board tests (Arithmetic; Quantitative Reasoning, Algebra, and Statistics; Advanced Algebra and Functions), each 200 to 300 and usually untimed, with a calculator only on screen.',
            'McGraw Hill\'s ' + L('aleks-math-placement-test-prep', 'ALEKS PPL') + ' is open response, covers 314 topics "in 25 questions or less" and "can be completed in 90 minutes"; retakes make the plan test, study, test again.',
            'Texas public colleges use ' + L('tsia2-math-prep', 'TSIA2') + ': a 20-question math test, a 48-question diagnostic for some, and no handheld calculator "of any type".'
          ],
          rightH3: 'Credit, and college math in high school',
          right: [
            ' ' + L('clep-college-algebra-prep', 'CLEP College Algebra') + ' is about 60 questions in 90 minutes with a TI-30XS MultiView built in; ' + L('clep-calculus-prep', 'CLEP Calculus') + ' is 44 questions with no calculator in Section 1. Both score 20 to 80, and ACE recommends credit at 50: 3 semester hours for College Algebra, 4 for Calculus.',
            'With ' + L('dual-enrollment-math-help', 'dual enrollment') + ' a high school student takes a real college course. Washington\'s Running Start "allows 11th and 12th grade students to take college courses" at 34 community and technical colleges, usually after placing first.'
          ] }
      ]
    },
    {
      id: 'grades', tint: 'deep', eyebrow: 'Grade by grade',
      h2: 'When does each math test happen, from kindergarten to college?',
      lede: 'A map to check against your own school calendar, not a schedule.',
      body: [
        { kind: 'table', caption: 'A typical US math testing path by grade (our map, built from the publishers\' stated grade ranges and windows; your district and college decide the details)', head: ['Grade', 'Tests a student may meet', 'What the result usually changes'], rows: [
          ['K to 5', 'MAP Growth or i-Ready, up to three times a year; the state test from grade 3', 'Small-group teaching and support'],
          ['5 to 7', 'District placement exam, MAP or state scores used for tracking', 'Standard, compacted or accelerated math'],
          ['8', 'PSAT 8/9 or PreACT 8/9 if the school offers it; Algebra 1 end-of-course test where taken', 'A baseline, and the high school starting course'],
          ['9 to 10', 'PSAT 8/9 (grade 9), PSAT 10, PreACT, PSAT/NMSQT for practice', 'Course choices and a study plan'],
          ['11', 'PSAT/NMSQT (the National Merit year), SAT or ACT, AP exams', 'Scholarship entry, college lists, credit'],
          ['11 to 12', 'ACCUPLACER, ALEKS PPL or TSIA2 for dual enrollment; SAT or ACT retakes', 'Eligibility for college courses in high school'],
          ['12 and after', 'College placement test, CLEP, AP exams', 'The first college math course, or credit for it']
        ] }
      ]
    },
    {
      id: 'choose', tint: 'tint', eyebrow: 'How to choose',
      h2: 'How do I find out which math placement test I need?',
      lede: 'Start from the decision, not the test. The same five steps suit a fifth grader\'s parent and an adult returning to college.',
      body: [
        { kind: 'ol', items: [
          '<b>Name the decision.</b> A middle school track, a scholarship entry, a first college course or credit: each is a different row of the table.',
          '<b>Find the owner of the decision.</b> A district office, a counselor or a college testing center. Ask which test they use, in writing.',
          '<b>Ask for the score-to-decision table.</b> The test publisher reports a score; the school or college turns it into a course. That table is the target, and it differs from campus to campus.',
          '<b>Check for exemptions and alternatives.</b> In Texas many students skip TSIA2 with other scores; colleges may accept SAT or ACT math for placement; some allow high school grades. One email can save weeks of study.',
          '<b>Take the owner\'s free practice, then plan.</b> Sit the publisher\'s free official practice once, sort the misses by skill, and study skills, not items.'
        ] },
        { kind: 'table', mt: true, caption: 'Pace per question on the timed tests (our arithmetic from each publisher\'s stated question count and time; untimed tests left out)', head: ['Test', 'Questions and time', 'Seconds per question, ours'], rows: [
          ['ACT Math', '45 in 50 minutes', '50 x 60 / 45 = 66.7, which ACT rounds to 67'],
          ['CLEP College Algebra', 'About 60 in 90 minutes', '90 x 60 / 60 = 90'],
          ['SAT Math', '44 in 70 minutes', '70 x 60 / 44 = 95.5'],
          ['CLEP Calculus', '44 in about 90 minutes', '90 x 60 / 44 = 122.7'],
          ['ALEKS PPL', '25 or fewer in about 90 minutes', 'At least 90 x 60 / 25 = 216'],
          ['ACCUPLACER, TSIA2, MAP Growth', 'Untimed', 'No clock: accuracy is the whole game']
        ] },
        { kind: 'p', mt: true, html: 'A student comfortable on an untimed ACCUPLACER can still run short on the ACT, at about a minute a question, so know the pace before you practise.' }
      ]
    },
    {
      id: 'example', tint: 'deep', eyebrow: 'Worked example, ours',
      h2: 'One idea, four tests: how the same math grows up the ladder',
      lede: 'Our own example, not a test item: one idea, multiplying by a growth factor, from middle school placement to college placement.',
      body: [
        { kind: 'table', caption: 'Worked example (ours): a club has 45 members and grows by 20 percent a year', head: ['Level', 'Question (ours)', 'Reasoning'], rows: [
          ['Middle school placement', 'How many members after one year?', 'A 20% rise means multiply by 1.2: 45 x 1.2 = 54'],
          ['Algebra 1 and the PSAT 8/9', 'After a 20% rise there are 54. How many were there before?', 'Undo the multiplier: 1.2x = 54, so x = 54 / 1.2 = 45 (not 54 minus 20%)'],
          ['SAT, PreACT and ACCUPLACER QAS', 'Write a model for members after t years and find year 2', 'f(t) = 45(1.2)^t, so f(2) = 45 x 1.44 = 64.8, about 65 members'],
          ['ACCUPLACER AAF, ALEKS PPL, CLEP College Algebra', 'When does the club double?', '1.2^t = 2, so t = ln 2 / ln 1.2, about 3.80 years'],
        ] },
        { kind: 'p', mt: true, html: 'The second row is the usual slip: taking 20 percent off 54 gives 43.2, not 45. Writing every change as a multiplier is a grade 7 habit that a college algebra placement test is still checking, so we look for that habit before drilling anything harder.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where students start',
    h2: 'Four families we hear from about placement tests',
    lede: 'Our own description of who contacts us and what we usually do first.',
    table: { caption: 'Starting points and first steps (ours)', head: ['Who', 'What we do first'], rows: [
      ['1. Parent of a grade 4 to 6 child with a MAP or i-Ready report', 'Read the domain or goal report together, then teach the weakest strand'],
      ['2. Parent facing a grade 6 or 7 Algebra 1 placement', 'Check grade 6 and 7 content against the district\'s list, gap by gap'],
      ['3. High school student between PSAT and SAT or ACT', 'One official practice test, then a skill plan to the test date'],
      ['4. Dual enrollment student, college freshman or adult', 'Confirm the college\'s test and table, then rebuild algebra to that level']
    ] },
    left: { h3: 'For parents', ps: [
      'Bring any report you have, a RIT score or a PSAT report; it tells the teacher more than a test name.'
    ] },
    right: { h3: 'For students and adults', ps: [
      'Confirm the exact test, and any exemption, before you open a practice book.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for every rung of the testing ladder',
    lede: 'Live classes from middle school foundations to college-level math, grouped by where a student is on the path.',
    bands: [
      { num: 'I', h3: 'Middle school tracks', sub: 'Before Algebra 1', courses: [
        { code: 'USPC / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratio, integers and early algebra.' },
        { code: 'USPC / M / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Pre-algebra into Algebra 1.' },
        { code: 'USPC / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Python for curious ages 10 to 15.' }
      ] },
      { num: 'II', h3: 'High school and readiness', sub: 'Grades 9 to 12', courses: [
        { code: 'USPC / H / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra 1 through calculus.' },
        { code: 'USPC / H / 02', slug: 'sat-math-prep-course', title: 'SAT math', blurb: 'The digital Math section.' },
        { code: 'USPC / H / 04', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Units 1 to 3 and the exam.' }
      ] },
      { num: 'III', h3: 'College placement and credit', sub: 'Age 15 and up', courses: [
        { code: 'USPC / C / 01', slug: 'college-math-placement-test-prep-course', title: 'Placement test prep', blurb: 'ACCUPLACER, ALEKS PPL, TSIA2, CLEP.' },
        { code: 'USPC / C / 03', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'AB and BC, toward CLEP Calculus too.' },
        { code: 'USPC / C / 04', slug: 'college-mathematics-complete-masterclass', title: 'College math', blurb: 'After placement: calculus onward.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes planned around your test and your date',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, or after work for adults.' },
      { time: 'Weekends', l: 'Longer sittings for full practice tests.' },
      { time: '1-on-1', l: 'Paced to one test and one deadline.' }
    ],
    cells: [
      { h3: 'Decision first', p: 'We ask what the score will change.' },
      { h3: 'Diagnose, then teach', p: 'One practice test, then lessons.' },
      { h3: 'Official practice', p: 'Owners\' free material, used as is.' },
      { h3: 'Our own problems', p: 'Written by us, never copied items.' },
      { h3: 'Ages 8 to adult', p: 'From MAP reports to college placement.' },
      { h3: 'Batch or private', p: 'A class of 15 to 20, or one to one.' }
    ]
  },

  projectsH2: 'What our students build with their math',
  projectsLede: 'Older students sometimes code a placement topic, such as a growth model. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews families and students left on Google, as written.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly fee in US dollars and no long contract, so a family can book the months before a placement date and stop once the test is behind them.',
    free: ['A free first class', 'Bring any score report you have', 'No card needed'],
    group: ['A class of 15 to 20', 'The same teacher each week', 'Choose your batch', 'Billed monthly'],
    one: ['Your own teacher', 'Planned to one test date', 'Times that suit you']
  },

  faq: {
    eyebrow: 'Common questions',
    h2: 'US math placement and readiness tests: questions families ask',
    items: [
      { q: 'What is a math placement test?', a: 'It is a test a school or college uses to decide which math course you start in. In middle school it may be a district exam or MAP and state scores; at college it is usually ACCUPLACER, ALEKS PPL or, in Texas, TSIA2. The score routes you to a course rather than giving a pass or a fail, though Texas sets a readiness benchmark on TSIA2.' },
      { q: 'What is the difference between ACCUPLACER, ALEKS and TSIA2?', a: 'ACCUPLACER is College Board\'s multiple-choice, adaptive system with three math tests scored 200 to 300. ALEKS PPL from McGraw Hill is open response, 25 questions or fewer, with up to five attempts. TSIA2 is the Texas Success Initiative test used by Texas public colleges, with a 20-question math test and a diagnostic if needed.' },
      { q: 'Which math placement test does my college use?', a: 'Only the college can tell you, so ask its testing center or math department. Ask also for its score-to-course table and its retake rule.' },
      { q: 'Can I use a calculator on math placement tests?', a: 'It varies. ACCUPLACER and TSIA2 do not allow your own calculator and show one on screen only for some questions. The SAT has Desmos built in and allows an approved handheld; the ACT asks you to bring your own permitted calculator.' },
      { q: 'Does the PSAT 8/9 or PSAT 10 count for National Merit?', a: 'No. College Board\'s 2026 student guide says only the PSAT/NMSQT counts, taken in the qualifying year, which for most students is grade 11. The earlier tests are useful baselines on the same family of scales.' },
      { q: 'Should my teenager take the SAT or the ACT?', a: 'Colleges that ask for scores generally accept either. Try one official practice test of each, check which one your school gives in the school day, then prepare for one.' },
      { q: 'How should I prepare for a math placement test?', a: 'Confirm the exact test and the college\'s placement table, take the owner\'s free practice test, and study the skills you missed rather than repeating practice tests.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with College Board, ACT, NWEA, Curriculum Associates or McGraw Hill?', a: 'No. Modern Age Coders is an independent online school. We describe each test from its owner\'s published pages, point you to their free practice, and teach with problems we write ourselves.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Other doors for US math students',
    lede: 'Courses and guides that sit next to the testing ladder rather than on it.',
    items: [
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'The subject almost every row of the table leans on.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'For students aiming to place straight into calculus.' },
      { href: '/calculus-tutoring-online', label: 'Calculus tutoring', p: 'After placement, or alongside CLEP Calculus.' },
      { href: '/gifted-and-talented-test-prep', label: 'Gifted and talented tests', p: 'Reasoning screens such as CogAT, a different kind of test.' },
      { href: '/common-core-math-tutor', label: 'Common Core math', p: 'The standards most of these tests are built around.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the test, or the decision you are facing, and the date. In the first class the teacher reads your report or a short check of our own and sets out a plan to that date.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse all our <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'Teachers work live from India and hold evening and weekend times for families in Eastern, Central, Mountain and Pacific time. WhatsApp is the quickest way to reach us.',
    formNote: 'The first class costs nothing and we never ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'Placement and credit', links: [
        { href: '/accuplacer-math-prep', label: 'ACCUPLACER math' },
        { href: '/aleks-math-placement-test-prep', label: 'ALEKS PPL' },
        { href: '/tsia2-math-prep', label: 'TSIA2 math' },
        { href: '/clep-college-algebra-prep', label: 'CLEP College Algebra' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/psat-math-prep', label: 'PSAT/NMSQT math' },
        { href: '/sat-math-tutoring-online', label: 'SAT math' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '45 x 1.2 = 54, and 54 / 1.2 = 45'
  },

  personalityCss: `
.ag-root.ag-uspc .ag-hero h1 { letter-spacing: -0.014em; text-wrap: balance; }
.ag-root.ag-uspc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-uspc .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-uspc .ag-table th { white-space: nowrap; }
.ag-root.ag-uspc .ag-capsule { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Each test\'s owner, read raw: NWEA (MAP Growth family questions and features), Curriculum Associates (i-Ready Inform diagnostic page, family center, family results PDF), College Board (SAT Suite score report table, SAT structure, calculator policy, PSAT 8/9 and PSAT/NMSQT 2026 to 2027 guides, ACCUPLACER, TSIA2 brochure and score guide, CLEP College Algebra and Calculus, AP Central AP Precalculus exam page and course overview), ACT (PreACT page and FAQ, understanding your scores, calculator policy), McGraw Hill (ALEKS PPL product and K-12 pages), Texas Higher Education Coordinating Board (TSI page), Common Core standards PDF, NC DPI, Washington SBCTC Running Start, Houston Community College dual credit, NACEP.',
    localProject: 'Our pace-per-question table (ACT 66.7 s, CLEP College Algebra 90 s, SAT 95.5 s, CLEP Calculus 122.7 s, ALEKS PPL at least 216 s) and our one-idea-four-tests worked example (45 x 1.2 = 54; 1.2x = 54 gives 45; f(t) = 45(1.2)^t, f(2) = 64.8; doubling at t = ln 2 / ln 1.2, about 3.80 years). Our grade-by-grade map and five-step triage. Lesson family: the growth factor across four levels.',
    requiredMentions: [
      'One idea, four tests',
      'Seconds per question, ours',
      '50 x 60 / 45 = 66.7, which ACT rounds to 67',
      'At least 90 x 60 / 25 = 216',
      't = ln 2 / ln 1.2, about 3.80 years',
      'Undo the multiplier: 1.2x = 54, so x = 54 / 1.2 = 45',
      'whose table turns my score into a decision',
      'Benchmark 950 to 990 on the CRC test, or below 950 with diagnostic level 6',
      '400 to 1600 total, 200 to 800 for Math',
      'Three kinds of test hide in that table'
    ],
    sources: [
      { claim: 'SAT Suite total and section score scales, NMSC Selection Index 48 to 228.', url: 'https://satsuite.collegeboard.org/scores/understanding-scores' },
      { claim: 'SAT structure: Math 44 questions in 70 minutes, two modules.', url: 'https://satsuite.collegeboard.org/sat/whats-on-the-test/structure' },
      { claim: 'ACT Composite 1 to 36 as the average of English, math and reading.', url: 'https://www.act.org/content/act/en/products-and-services/the-act/scores/understanding-your-scores.html' },
      { claim: 'ACT calculator policy: bring your own permitted calculator.', url: 'https://www.act.org/content/act/en/products-and-services/the-act/test-day/calculator-policy.html' },
      { claim: 'PreACT grades, 1 to 36 scale and top scores; blueprint item counts.', url: 'https://www.act.org/content/act/en/products-and-services/preact.html' },
      { claim: 'MAP Growth grades, question count, timing and use.', url: 'https://www.nwea.org/the-map-suite/common-questions-families/' },
      { claim: 'i-Ready Diagnostic renamed i-Ready Inform in 2026 to 2027.', url: 'https://www.curriculumassociates.com/programs/i-ready-assessment/diagnostic' },
      { claim: 'ALEKS PPL: 314 topics, 25 questions or fewer, 90 minutes, up to five attempts.', url: 'https://www.mheducation.com/highered/digital-products/aleksppl.html' },
      { claim: 'TSIA2 results valid up to five years.', url: 'https://www.highered.texas.gov/texas-success-initiative/' },
      { claim: 'CLEP College Algebra format, scale and ACE credit score.', url: 'https://clep.collegeboard.org/clep-exams/college-algebra' },
      { claim: 'AP Precalculus 2027 exam date and format.', url: 'https://apcentral.collegeboard.org/courses/ap-precalculus/exam' }
    ],
    rejectedClaims: [
      'AP score scale and ALEKS PPL score scale: not present in the raw copies read; the table says "see" the owner instead.',
      'Any college\'s or district\'s cut score, and NMSC state Selection Index cutoffs: not printed; owners set their own and nationalmerit.org returned 403 to other writers (not retried).',
      'ACT calculator rules for PreACT: not stated on ACT\'s PreACT pages, so the table says to ask the school.',
      'Sample or released items from any test: not reproduced; the worked example is ours.',
      'Score, placement, scholarship or credit promises for our classes: refused.',
      'Any affiliation with College Board, ACT, NWEA, Curriculum Associates, McGraw Hill or NMSC: none.'
    ]
  }
};
