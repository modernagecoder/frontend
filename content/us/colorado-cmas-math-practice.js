'use strict';
// Colorado CMAS math practice, grades 3 to 8 (ag- state-test door; UK and US exams cluster, row US038, writer group B12).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. www.cde.state.co.us timed out (HTTP 000) once and was not
// retried; every fact below was read raw with curl on 31 October 2026 from the Colorado Department of Education's current
// host ed.cde.state.co.us and its official practice portal coassessments.com (run for CDE by Pearson). Copies in
// keyword-research-2026-09/uk-us-gap/src/colorado-cmas-math-practice/:
//  - assessment/cmas: CMAS "are based on the Colorado Academic Standards and measure how well students have mastered
//    grade-level expectations in math, English language arts, science, and social studies"; "Students in grades 3 through 8
//    take the grade level math assessment for their enrolled grade."; "CMAS tests are developed by Colorado teachers with CDE
//    and Pearson."; "Teaching the standards throughout the year is the best preparation for CMAS."; the practice resources
//    "are the only state-sanctioned CMAS practice resources".
//  - assessment/generalinfo/importantdates: "Tentative 2027 Colorado State Assessment Windows": CMAS "April 5 through April
//    23, 2027"; CO PSAT/SAT "April 12 through April 23, 2027"; WIDA ACCESS January 11 to February 12, 2027. Targeted 2026
//    reporting timeline: CMAS Student Performance Summary May 27 via Family Portal; Detailed CMAS Student Performance June 11;
//    growth public release August 19.
//  - generalinfo/factsheetsandfaqs: 2026 CMAS window "April 6 through 24"; sessions "lasting between 50 and 90 minutes";
//    students may pause "for up to three minutes"; 2025-26 table: math 3h 15m in each of grades 3 to 8; sample questions
//    "most of which are "released""; scoring guides "(with answer keys and scoring rubrics)"; "Colorado law allows parents to
//    excuse their children from state content assessments."; districts "cannot impose negative consequences"; scorers for
//    math "hold at least a four-year degree in a related field"; rangefinding; PSAT/SAT suite in grades 9, 10 and 11; in
//    2025 educators from "more than 90 Colorado school districts" took part in development.
//  - Calculator Policy for Calculator Units and Sections of CMAS Mathematics Assessments (PDF, resource a0c6675f): grades
//    3 to 5 "No calculators allowed, except for students approved for use of a unique accommodation"; grades 6 to 7
//    "Five-function (includes square root and percentage functions)"; grade 8 "Scientific"; no CAS "including graphing
//    calculators"; no tablet, laptop or phone calculators; no sharing; memory cleared; FAQ 4 "Assessment items do not require
//    calculations above the level of the specified calculator."; FAQ 5 an online calculator is provided in the computer-based
//    platform; hand-held allowed "on any section where a calculator is allowable (grades 6 through 8)".
//  - CMAS Performance Levels and Policy Claims (May 2026 PDF, resource a36459a4): five levels and policy claims; "Overall
//    scale scores range from 650 to 850."; "math and ELA/CSLA cut scores were set in 2015"; Met and Exceeded "considered on
//    track to being college and career ready"; math Met begins at 750 in every grade; Exceeded from G3 790, G4 796, G5 790,
//    G6 788, G7 786, G8 801; the grade 5 row prints 650-699, 700-724, 725-749 for the three lower levels.
//  - CMAS Test Design page and the six CMAS Mathematics Frameworks (2020, "Summative Assessment Framework-FINAL"): Subclaim A
//    Major Content G3 43-44% 22 pts, G4 47-48% 24, G5 45-46% 23, G6 39-40% 20, G7 45-46% 23, G8 47-48% 24; Subclaim B
//    Supporting Content G3 18% 9, G4 14% 7, G5 16% 8, G6 22% 11, G7 16% 8, G8 13-14% 7; Subclaim C Expressing Mathematical
//    Reasoning 20-22% 10-11 every grade; Subclaim D Modeling and Application 18% 9 every grade; published total "100 50-51".
//    Reasoning tasks reflect "SMP 3, Construct Viable Arguments and Critique the Reasoning of Others, and SMP 6, Attend to
//    Precision"; modeling "SMP 4, Model with Mathematics"; tasks use "grade-level math standards and securely held knowledge
//    from the previous grade level"; "Each Content Standard is assessed in each grade level."; Subclaim A expectations listed
//    per grade (used in the ladder).
//  - coassessments.com/practice-tests: TestNav 8 tutorials; math practice resources for grades 3 to 8; Math Scoring Guide per
//    grade; Math Reference Sheets for grades 5, 6, 7 and 8; sample sets "are not intended to be representative of a complete
//    section or test".
// CDE ranges use en dashes; written with "to" here. No released item is reproduced; the page links to CDE's practice portal.
// Our own material, labelled: the grade 4 reasoning example (5/8 against 3/4 by eighths), the grade 7 modeling example
// (mulch for a 12 by 8 foot bed at 3 inches deep is 24 cubic feet, 12 bags of 2 cubic feet, then the spill question), the
// twelve-item practice set tagged by subclaim, the four-checkpoint plan to April 5, 2027, and the subclaim A ladder.
// Lesson family: explain-and-critique answers (CMAS subclaim C reasoning and subclaim D modeling).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CDE = 'https://ed.cde.state.co.us';
const PRACTICE = 'https://coassessments.com/practice-tests/';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'CMAS MATH', blurb: 'Colorado CMAS math for grades 3 to 8 from the CDE frameworks: the four subclaims, the April 2027 window, calculator rules by grade, the 650 to 850 scale and original practice.' },
  slug: 'colorado-cmas-math-practice',
  code: 'coc',
  accent: '#7A5E7A',
  accentRationale: 'CMAS math: a muted mountain plum #7A5E7A as allocated, 5.34:1 on paper #FBF8F2, readable for body links and quiet beside the warm editorial palette',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-and-ai-classes-in-colorado', name: 'Colorado' }],
  routeLabel: 'CMAS math practice',
  title: 'CMAS Math Practice for Colorado Grades 3 to 8 (2027 Test)',
  description: 'CMAS math practice for Colorado grades 3 to 8: the four subclaims from the CDE frameworks, the April 2027 window, calculator rules by grade and our own practice.',
  ogDescription: 'Almost two fifths of a CMAS math score comes from reasoning and modeling tasks. What the Colorado frameworks say, grade by grade, and how to practice the explaining, not just the answers.',
  twitterDescription: 'Colorado CMAS math, grades 3 to 8, from the CDE frameworks, with original practice.',
  pageName: 'CMAS Math Practice, Colorado Grades 3 to 8',
  webPageDescription: 'A guide for Colorado families to the CMAS mathematics tests in grades 3 to 8, built from the Colorado Department of Education frameworks, calculator policy, testing windows, performance levels and FAQ, with original worked examples and a practice set.',
  courseDescription: 'Live online math classes for Colorado students in grades 3 to 8, teaching the Colorado Academic Standards behind every CMAS subclaim, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'CMAS math practice',
  navLinks: [
    { href: '#subclaims', label: 'Subclaims' },
    { href: '#reasoning', label: 'Reasoning' },
    { href: '#window', label: '2027 window' },
    { href: '#calculators', label: 'Calculators' },
    { href: '#levels', label: 'Levels' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Colorado &middot; Grades 3 to 8 &middot; From the CDE math frameworks',
  h1: 'CMAS math practice for Colorado grades 3 to 8',
  lede: 'Each spring, Colorado public school students in grades 3 through 8 sit the CMAS mathematics test for the grade they are enrolled in. The Colorado Department of Education has set a tentative 2027 window of April 5 through April 23. Read the frameworks CDE publishes for each grade and one thing stands out: a large share of the points sits in two subclaims that score how a child explains and models, not only whether the final number is right. This page lays out what CDE publishes, grade by grade, and how to practice for the test a child will actually meet.',
  secondaryCta: { href: '#subclaims', label: 'See the four subclaims' },
  wa: 'Hello Modern Age Coders, my child in Colorado takes the CMAS math test this spring. Could we book a free first class?',
  heroNote: 'Teaching math live since 2020 &middot; 10,000+ students &middot; our own practice, never CDE test items',
  spec: [
    ['Test', 'CMAS mathematics'],
    ['Run by', 'Colorado Department of Education'],
    ['Grades', '3 to 8'],
    ['Tentative 2027 window', 'April 5 to 23'],
    ['Scale', '650 to 850'],
    ['Calculator', 'Grades 6 to 8, by type'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'CMAS (Colorado Measures of Academic Success) is the Colorado Department of Education&rsquo;s spring mathematics assessment, taken by Colorado public school children from grade 3 through grade 8 and written to the Colorado Academic Standards with Pearson. Scores run from 650 to 850, and 750 is the start of Met Expectations. The tentative 2027 window is April 5 to 23. Modern Age Coders teaches CMAS math live online, in a batch or 1-on-1, through our Elementary Maths course and middle school math classes.',

  picks: {
    eyebrow: 'Built for the subclaims',
    h2: 'Three courses that prepare a child for CMAS math',
    lede: 'Each course teaches the grade properly and asks the child to say why, which is exactly what two of the four CMAS subclaims score.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'COC / 01', title: 'Elementary math, grades 3 to 5', note: 'Place value, fractions and area, with spoken reasoning every lesson.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'COC / 02', title: 'Middle school math, grades 6 to 8', note: 'Ratios, equations, functions and the Pythagorean theorem.' },
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'COC / 03', title: 'Reasoning for young thinkers', note: 'Ages 6 to 9: patterns and arguments before the first CMAS year.' }
    ]
  },

  sections: [
    {
      id: 'subclaims', tint: 'tint', eyebrow: 'The four subclaims',
      h2: 'How is the CMAS math test built in each grade?',
      lede: 'Around four subclaims. CDE&rsquo;s math frameworks give each subclaim a share of the score and a number of points, and every grade from 3 to 8 lands on a published total of 50 to 51 points.',
      body: [
        { kind: 'table', caption: 'CMAS mathematics score points by subclaim and grade (CDE CMAS Mathematics Frameworks, Summative Assessment Framework, 2020 editions, read 31 October 2026). Percent of score, then points.', head: ['Grade', 'A: Major content', 'B: Supporting content', 'C: Expressing mathematical reasoning', 'D: Modeling and application', 'Published total'], rows: [
          ['3', '43 to 44%, 22', '18%, 9', '20 to 22%, 10 to 11', '18%, 9', '50 to 51'],
          ['4', '47 to 48%, 24', '14%, 7', '20 to 22%, 10 to 11', '18%, 9', '50 to 51'],
          ['5', '45 to 46%, 23', '16%, 8', '20 to 22%, 10 to 11', '18%, 9', '50 to 51'],
          ['6', '39 to 40%, 20', '22%, 11', '20 to 22%, 10 to 11', '18%, 9', '50 to 51'],
          ['7', '45 to 46%, 23', '16%, 8', '20 to 22%, 10 to 11', '18%, 9', '50 to 51'],
          ['8', '47 to 48%, 24', '13 to 14%, 7', '20 to 22%, 10 to 11', '18%, 9', '50 to 51']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What A and B measure',
          left: [
            'Subclaims A and B are content. Major content holds the clusters the standards treat as the heart of the grade: in grade 3, multiplying and dividing within 100, fractions as numbers and area; in grade 8, linear equations, functions and the Pythagorean theorem. Supporting content holds everything else that is still tested.',
            'Grade 6 is the year the balance shifts most. CDE&rsquo;s grade 6 framework gives supporting content 22 percent of the score, its largest share in any grade, because statistics, area and volume carry real weight there.'
          ],
          rightH3: 'What C and D measure',
          right: [
            'Subclaims C and D look the same in every grade: Expressing Mathematical Reasoning at 20 to 22 percent, and Modeling and Application at 18 percent. The math inside them changes with the grade, but the kind of thinking they reward does not.',
            'The frameworks also say that &ldquo;Each Content Standard is assessed in each grade level.&rdquo; Nothing in the grade can be safely skipped.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + CDE + '/fs/pages/2249" rel="noopener" target="_blank">CMAS Test Design</a> (the math frameworks and evidence statement tables for grades 3 to 8), Colorado Department of Education, read 31 October 2026. We are not connected with CDE, any Colorado district or Pearson.' }
      ]
    },
    {
      id: 'reasoning', tint: 'deep', eyebrow: 'Reasoning and modeling',
      h2: 'What are the reasoning and modeling tasks on CMAS math?',
      lede: 'They are tasks where the explanation is the answer. CDE ties reasoning tasks to three of the Standards for Mathematical Practice and modeling tasks to a fourth, and builds both from grade-level standards plus what a child should already have secured the year before.',
      body: [
        { kind: 'table', caption: 'How the CMAS math frameworks describe subclaims C and D (CDE CMAS Mathematics Frameworks, read 31 October 2026)', head: ['Subclaim', 'Practice standards CDE names', 'What the child does'], rows: [
          ['C: Expressing mathematical reasoning', 'SMP 3, Construct Viable Arguments and Critique the Reasoning of Others; SMP 6, Attend to Precision', 'Justifies a claim, finds the flaw in someone else&rsquo;s work, states the answer with exact units and language'],
          ['D: Modeling and application', 'SMP 4, Model with Mathematics', 'Turns a real situation into math, solves it, and checks that the result makes sense in the situation'],
          ['Both', 'Grade-level standards and securely held knowledge from the previous grade level', 'Uses last year&rsquo;s math as a tool, so old gaps show up here first']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why last year matters',
          left: [
            'The phrase &ldquo;securely held knowledge from the previous grade level&rdquo; is worth reading twice. A grade 6 modeling task may need grade 5 fraction division as a tool while it tests grade 6 ratio reasoning. A child with a soft spot from last year loses points on this year&rsquo;s test.',
            'So when a CMAS report shows a weak modeling score, the repair can be a year back, not where the parent first looks.'
          ],
          rightH3: 'How these are scored',
          right: [
            'Written responses are scored by people against rubrics. CDE&rsquo;s FAQ says scorers for the mathematics assessments hold at least a four-year degree in a related field, and that Colorado educators set the acceptable range of responses for each rubric score point through a process called rangefinding.',
            'In practice a rubric pays for a clear, complete chain of reasoning. A right number with no reason given usually earns less than the work deserved.'
          ] },
        { kind: 'p', mt: true, html: 'This is the spine of how we teach CMAS math. Every lesson ends with the child saying, in a sentence or two, why the answer is right, and at least once a week they critique a wrong solution we have written on purpose. That is SMP 3 practised directly, without copying a single test item.' },
        { kind: 'source', html: 'Sources: CMAS Mathematics Frameworks for grades 3 to 8 via <a class="ag-inline-link" href="' + CDE + '/fs/pages/2249" rel="noopener" target="_blank">CMAS Test Design</a>, and <a class="ag-inline-link" href="' + CDE + '/assessment/generalinfo/factsheetsandfaqs" rel="noopener" target="_blank">Fact Sheets and FAQs</a> (scoring), CDE, read 31 October 2026.' }
      ]
    },
    {
      id: 'window', tint: 'tint', eyebrow: '2027 dates',
      h2: 'When is CMAS math in 2027, and when do results come back?',
      lede: 'CDE lists a tentative 2027 CMAS window of April 5 through April 23, 2027, for math and the other CMAS subjects together. Your school picks the actual days inside it.',
      body: [
        { kind: 'table', caption: 'Dates for a grade 3 to 8 CMAS math student (CDE Test Windows and Reporting Timeline and FAQ, read 31 October 2026)', head: ['When', 'What happens', 'Status in CDE&rsquo;s pages'], rows: [
          ['April 6 to 24, 2026', 'CMAS window last spring (ELA, math, science, social studies)', 'Given in the FAQ for 2026'],
          ['May 27, 2026', 'CMAS Student Performance Summary in the Family Portal', '2026 targeted timeline'],
          ['June 11, 2026', 'Detailed CMAS Student Performance in the Family Portal', '2026 targeted timeline'],
          ['April 5 to 23, 2027', 'CMAS window, all CMAS subjects including math', 'Tentative 2027 window'],
          ['April 12 to 23, 2027', 'Colorado PSAT and SAT window for high school', 'Tentative 2027 window']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How long the math test takes',
          left: [
            'CDE&rsquo;s FAQ table for 2025 to 2026 gives math 3 hours 15 minutes in every grade from 3 to 8. The tests are split into sessions that last between 50 and 90 minutes.',
            'Every student may pause the test for up to three minutes for a break without losing testing time, which CDE suggests families mention when helping a nervous child.'
          ],
          rightH3: 'Who takes it, and can a family opt out',
          right: [
            'Students in grades 3 through 8 take the math test for their enrolled grade, according to CDE&rsquo;s CMAS page. High school students take the PSAT and SAT suite in grades 9, 10 and 11 instead.',
            'CDE&rsquo;s FAQ states that Colorado law allows parents to excuse their children from state content assessments, and that districts cannot impose negative consequences on students or parents who do. Your District Assessment Coordinator handles the request.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + CDE + '/assessment/generalinfo/importantdates" rel="noopener" target="_blank">Test Windows and Reporting Timeline</a> and <a class="ag-inline-link" href="' + CDE + '/assessment/generalinfo/factsheetsandfaqs" rel="noopener" target="_blank">Fact Sheets and FAQs</a>, CDE, read 31 October 2026. The 2027 window is marked tentative by CDE, and the 2027 reporting dates are not yet published.' }
      ]
    },
    {
      id: 'calculators', tint: 'deep', eyebrow: 'Calculators and tools',
      h2: 'Can you use a calculator on CMAS math?',
      lede: 'Not in grades 3 to 5. From grade 6 a calculator is allowed on the calculator sections only, and the type is fixed by grade: five-function in grades 6 and 7, scientific in grade 8.',
      body: [
        { kind: 'table', caption: 'Allowable calculators on CMAS math (CDE Calculator Policy for Calculator Units and Sections of CMAS Mathematics Assessments, read 31 October 2026)', head: ['Grade', 'Calculator sections', 'Notes from the policy'], rows: [
          ['3 to 5', 'No calculators allowed', 'Except students approved for a unique accommodation'],
          ['6 and 7', 'Five-function', 'Includes square root and percentage functions'],
          ['8', 'Scientific', 'Graphing and CAS calculators are not allowed'],
          ['Every grade', 'Non-calculator sections', 'No calculator unless CDE approved one as an accommodation']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The rules that catch families out',
          left: [
            'The policy bans calculators with Computer Algebra System features, &ldquo;including graphing calculators&rdquo;, and any tablet, laptop or phone calculator. Calculators cannot be shared during a session, and memory is cleared before and after each one.',
            'A student may not use a calculator meant for a higher grade. CDE explains why in its FAQ: &ldquo;Assessment items do not require calculations above the level of the specified calculator.&rdquo;'
          ],
          rightH3: 'On screen',
          right: [
            'Students testing online get a calculator inside the testing platform on the sections where one is allowed. A child in grades 6 to 8 may bring a hand-held one instead if it meets the policy.',
            'Pearson&rsquo;s Colorado practice portal also posts math reference sheets for grades 5, 6, 7 and 8. Use the one for your child&rsquo;s grade during practice so the formulas on it are familiar, not a surprise.'
          ] },
        { kind: 'p', mt: true, html: 'What this means for home practice: a grade 4 child should do every problem by hand, and a grade 7 child should practise with a plain five-function calculator, not the graphing app on a phone. A grade 8 child who leans on graphing to solve systems of equations needs to be fluent with algebra by hand and a scientific calculator before April.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + CDE + '/fs/resource-manager/view/a0c6675f-d4e5-4752-a9b2-3c9dc7e719a4" rel="noopener" target="_blank">CMAS Calculator Policy</a> (PDF), CDE, and the <a class="ag-inline-link" href="' + PRACTICE + '" rel="noopener" target="_blank">Colorado Practice Resources</a> portal, both read 31 October 2026.' }
      ]
    },
    {
      id: 'levels', tint: 'tint', eyebrow: 'Scores and levels',
      h2: 'What is a good CMAS math score, and what do the five levels mean?',
      lede: 'CMAS math scores run from 650 to 850. In every grade, 750 is where Met Expectations begins, and CDE treats Met and Exceeded as on track to being college and career ready.',
      body: [
        { kind: 'table', caption: 'CMAS mathematics: where the top two levels begin, by grade (CDE CMAS Performance Levels and Policy Claims, May 2026, read 31 October 2026)', head: ['Grade', 'Met Expectations', 'Exceeded Expectations'], numCols: [1, 2], rows: [
          ['3', '750 to 789', '790 to 850'],
          ['4', '750 to 795', '796 to 850'],
          ['5', '750 to 789', '790 to 850'],
          ['6', '750 to 787', '788 to 850'],
          ['7', '750 to 785', '786 to 850'],
          ['8', '750 to 800', '801 to 850']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The five levels in CDE&rsquo;s words',
          left: [
            'CDE&rsquo;s policy claims run from Exceeded Expectations, a &ldquo;distinguished command&rdquo; of the standards, through Met (&ldquo;strong command&rdquo;), Approached (&ldquo;moderate command&rdquo;) and Partially Met (&ldquo;limited command&rdquo;), to Did Not Yet Meet Expectations.',
            'The grade 5 row of the cut score table prints all five ranges: 650 to 699, 700 to 724, 725 to 749, then 750 to 789 and 790 to 850. CDE notes that the math cut scores were set in 2015.'
          ],
          rightH3: 'How to read a report',
          right: [
            'The overall scale score is not a percentage. A child on 745 is five points under Met, not &ldquo;74 percent&rdquo;. Ask the school for the subclaim results too: a report that is strong on A and weak on C points to explanation, not content.',
            'CDE&rsquo;s FAQ suggests families use scores to start a conversation with the teacher about strengths and areas to improve. That is the right use, and it is how we use a report in a first class.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + CDE + '/fs/resource-manager/view/a36459a4-6427-48e3-97c7-6857d254ed60" rel="noopener" target="_blank">CMAS Performance Levels and Policy Claims</a> (PDF, May 2026), CDE, read 31 October 2026. Results for families arrive through the <a class="ag-inline-link" href="https://familyportal.pearson.com/CO" rel="noopener" target="_blank">Family Portal</a> using the student&rsquo;s SASID.' }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples, ours',
      h2: 'Two CMAS-style tasks, one reasoning and one modeling, worked step by step',
      lede: 'Both are our own problems, written to the grade 4 and grade 7 Colorado standards. Neither is a CMAS item; CDE&rsquo;s released samples are on its practice portal.',
      body: [
        { kind: 'ol', items: [
          '<b>Grade 4 reasoning, our task.</b> Jordan says 5/8 is greater than 3/4 &ldquo;because 5 is bigger than 3&rdquo;. Is Jordan correct? Explain with numbers or a model.',
          '<b>Step 1: decide before you calculate.</b> Jordan compared numerators only. That works only when the pieces are the same size, and eighths and fourths are not.',
          '<b>Step 2: make the pieces match.</b> 3/4 = 6/8, because each fourth splits into two eighths. Now both fractions count eighths.',
          '<b>Step 3: compare and answer the claim.</b> 6/8 is more than 5/8, so 3/4 is greater. Jordan is not correct.',
          '<b>Step 4: name the flaw in one sentence.</b> &ldquo;Jordan compared the tops without checking that the pieces were the same size; eighths are smaller than fourths.&rdquo; That sentence is what a reasoning rubric is looking for, and it is the step children leave out.'
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Grade 7 modeling, our task, five-function calculator allowed.</b> A school garden bed is 12 feet long and 8 feet wide. Mulch should be 3 inches deep. One bag holds 2 cubic feet. How many bags should the class buy?',
          '<b>Model it.</b> The mulch is a rectangular prism. 3 inches is 3/12 = 0.25 feet, so units match before multiplying.',
          '<b>Solve.</b> 12 x 8 x 0.25 = 24 cubic feet. 24 / 2 = 12 bags.',
          '<b>Interpret.</b> Exactly 12 bags covers it with nothing to spare. Some mulch always spills or settles, so a careful answer says 12 is the minimum and 13 gives a margin. Either answer earns credit only with the reason attached.',
          '<b>Check.</b> A bed of 96 square feet at a quarter foot deep is a quarter of 96, which is 24. The estimate agrees.'
        ] },
        { kind: 'p', mt: true, html: 'The common thread is the last step. In the reasoning task, the child names the mistake; in the modeling task, the child says what the number means for the garden. CMAS gives those last steps their own subclaims, so we practise them as seriously as the arithmetic.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice set, ours',
      h2: 'Twelve CMAS math practice questions for grades 3 to 8',
      lede: 'Our own questions, two per grade, each tagged with the subclaim it practises. Answers are in the last column; hide it while working. These are not CDE or Pearson items.',
      body: [
        { kind: 'table', caption: 'Original CMAS-style math practice (ours, not CDE items), tagged by subclaim, with answers', head: ['Grade', 'Question', 'Subclaim', 'Answer'], rows: [
          ['3', 'A sticker sheet has 6 rows of 7 stickers. Mia uses 15. How many are left?', 'A', '27'],
          ['3', 'Leo says a 2 by 9 rectangle and a 3 by 6 rectangle have the same area. Is he right? Why?', 'C', 'Yes: both are 18 square units'],
          ['4', 'Write 0.7 as a fraction in tenths and in hundredths.', 'A', '7/10 and 70/100'],
          ['4', 'A rope is 5 meters long. How many centimeters is that?', 'B', '500 centimeters'],
          ['5', 'What is 2/3 + 3/4?', 'A', '17/12, or 1 5/12'],
          ['5', 'Four friends share 3 pizzas equally. How much does each get? Explain.', 'D', '3/4 of a pizza (3 divided by 4)'],
          ['6', 'A recipe uses 2 cups of oats for every 3 cups of flour. How much oats for 12 cups of flour?', 'A', '8 cups'],
          ['6', 'Find the area of a triangle with base 10 cm and height 7 cm.', 'B', '35 square centimeters'],
          ['7', 'What is -3.5 + 6.25?', 'A', '2.75'],
          ['7', 'A bike is 280 after a 20 percent discount. Sam says the original price was 336. Check his reasoning.', 'C', 'Wrong: 280 / 0.8 = 350'],
          ['8', 'Write 3.2 x 10^-3 in standard form.', 'A', '0.0032'],
          ['8', 'A taxi charges 3 to start plus 2 per mile. Write the cost C for m miles and find the cost of 9 miles.', 'D', 'C = 2m + 3; 21']
        ] },
        { kind: 'p', mt: true, html: 'For real CMAS questions, go to CDE&rsquo;s <a class="ag-inline-link" href="' + PRACTICE + '" rel="noopener" target="_blank">Colorado Practice Resources</a>. CDE describes them as the only state-sanctioned CMAS practice resources; most of the sample questions are released items from past tests, and the math scoring guides include answer keys and rubrics. Try the TestNav 8 tutorial first so the on-screen tools feel ordinary. We save those sets for rehearsal near the window and keep teaching from our own problems.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Counting back from April 5',
      h2: 'How should a child prepare for CMAS math in spring 2027?',
      lede: 'By learning the grade well and practising the explaining. CDE&rsquo;s own advice is that teaching the standards throughout the year is the best preparation for CMAS. Our four checkpoints, counted back from April 5, 2027, put that into a calendar.',
      body: [
        { kind: 'ol', items: [
          '<b>Early January 2027: find the weak subclaim.</b> Look at last spring&rsquo;s CMAS report or a school benchmark. If there is none, we run one short diagnostic of our own across the four subclaims in the first class.',
          '<b>January to February: repair content from the root.</b> If A or B is weak, reteach the grade&rsquo;s major clusters, and check last year&rsquo;s too, since reasoning and modeling tasks lean on securely held prior-grade knowledge.',
          '<b>March: one explanation every lesson.</b> Each session ends with a written reason, and once a week the child critiques a wrong solution. Modeling tasks get a fourth step: say what the answer means in the situation.',
          '<b>Late March: the real interface.</b> Work through the TestNav tutorial and one grade-level practice set on the Colorado portal with the correct calculator rule and reference sheet. Score it with CDE&rsquo;s scoring guide.',
          '<b>The week before April 5: rest and routine.</b> Short mixed sets, no new topics, and a word about the three-minute pause so a tired child knows a break is allowed.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If your child scored Approached',
          left: [
            'A report just under 750 usually means the content is mostly there and one subclaim is pulling the score down. Two months of focused work on that subclaim is a sensible plan; a full restart is rarely needed.'
          ],
          rightH3: 'If your child scored Exceeded',
          right: [
            'Keep the explaining habit and add stretch. Contest problems build exactly the argument-writing that subclaim C rewards; see our page on <a class="ag-inline-link" href="/math-competitions-for-middle-school-students">math competitions for middle school</a>.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Subclaim A, grade by grade',
    h2: 'The major content CMAS checks in each grade',
    lede: 'From the Subclaim A sections of CDE&rsquo;s frameworks, with the one idea we would make secure first. The first two columns are CDE&rsquo;s; the last column is our teaching choice.',
    table: { caption: 'CMAS math Subclaim A by grade (expectations from the CDE frameworks; the focus column is ours)', head: ['Grade', 'Subclaim A share and points', 'Major content areas in the framework', 'We secure first'], rows: [
      ['3', '43 to 44%, 22', 'Fractions as numbers; multiplication and division within 100; area', 'Multiplication facts with their meaning'],
      ['4', '47 to 48%, 24', 'Multi-digit place value and operations; fraction equivalence; decimals for fractions', 'Equivalent fractions'],
      ['5', '45 to 46%, 23', 'Place value to thousandths; multi-digit and decimal operations; fraction operations', 'Adding unlike fractions'],
      ['6', '39 to 40%, 20', 'Ratios; the number system; expressions and one-variable equations', 'Ratio tables and unit rates'],
      ['7', '45 to 46%, 23', 'Proportional relationships; rational number operations; expressions and equations', 'Negative numbers in all four operations'],
      ['8', '47 to 48%, 24', 'Exponents and radicals; linear equations and systems; functions; congruence, similarity, Pythagorean theorem', 'Slope as a rate of change']
    ] },
    left: { h3: 'For parents', ps: [
      'The frameworks are public and short. Reading your child&rsquo;s grade takes ten minutes and tells you exactly which topics CMAS can test.',
      'Ask the teacher for the subclaim results, not only the overall score. They are where the useful information sits.'
    ] },
    right: { h3: 'For students', ps: [
      'When a question says &ldquo;explain&rdquo;, write the reason as a full sentence, the way you would tell a friend.',
      'Before you move on, read your answer back against the question. Did you give the units? Did you say yes or no to the claim?'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for Colorado students, grade 3 to high school',
    lede: 'Live classes that teach the Colorado Academic Standards with understanding, from the first CMAS year to the PSAT and SAT.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Grades 3 to 5', courses: [
        { code: 'COC / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5, standards first.' },
        { code: 'COC / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Hand calculation for the no-calculator years.' },
        { code: 'COC / E / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Patterns and arguments, ages 6 to 9.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'COC / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratios through functions.' },
        { code: 'COC / M / 02', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'Proof-style thinking for strong students.' },
        { code: 'COC / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Model situations in Python.' }
      ] },
      { num: 'III', h3: 'After CMAS', sub: 'Grade 8 and high school', courses: [
        { code: 'COC / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Linear equations into Algebra I.' },
        { code: 'COC / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra to calculus.' },
        { code: 'COC / H / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'Colorado tests the SAT in grade 11.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons around a Colorado school day',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school MT', l: 'Weekday evening classes on Mountain Time.' },
      { time: 'Weekends', l: 'Longer sessions for explaining and modeling.' },
      { time: '1-on-1', l: 'Built around one weak subclaim.' }
    ],
    cells: [
      { h3: 'Reasons out loud', p: 'Every answer comes with a why.' },
      { h3: 'Wrong work to fix', p: 'Weekly critique of a flawed solution.' },
      { h3: 'Right calculator', p: 'None to grade 5, then the grade&rsquo;s type.' },
      { h3: 'Last year checked', p: 'Prior-grade gaps found and closed.' },
      { h3: 'Portal practice late', p: 'CDE sets used for rehearsal in spring.' },
      { h3: 'Group or private', p: 'A class of 15 to 20, or a tutor alone.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Older students often turn a modeling problem into a small program that answers it for any size. See them on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'CMAS math classes are paid monthly in US dollars with no long contract, so a Colorado family can start after winter break and stop once April&rsquo;s window has closed.',
    free: ['A free first class', 'Share last spring&rsquo;s CMAS report if you have it', 'No card details'],
    group: ['Fifteen to twenty students', 'One steady teacher', 'Choose your batch', 'Billed monthly'],
    one: ['One student, one teacher', 'The weak subclaim first', 'Times on Mountain Time']
  },

  faq: {
    eyebrow: 'Questions from Colorado families',
    h2: 'CMAS math: common questions',
    items: [
      { q: 'When is the CMAS math test in 2027?', a: 'CDE lists a tentative 2027 window of April 5 through April 23, 2027, for all CMAS subjects including math. Each school sets its own testing days inside that window, so ask your school for the exact dates.' },
      { q: 'How many points is the CMAS math test?', a: 'CDE\'s math frameworks give a published total of 50 to 51 points in every grade from 3 to 8. The points are split across four subclaims: major content, supporting content, expressing mathematical reasoning, and modeling and application.' },
      { q: 'Are calculators allowed on CMAS math?', a: 'Not in grades 3 to 5, unless a student has an approved accommodation. On the calculator sections, grades 6 and 7 may use a five-function calculator and grade 8 a scientific one; graphing and CAS calculators and phone or tablet calculators are not allowed.' },
      { q: 'What is a passing score on CMAS math?', a: 'CMAS does not use the word pass. Scores run from 650 to 850, and 750 is where Met Expectations begins in every grade; CDE considers students at Met or Exceeded on track to being college and career ready.' },
      { q: 'How long is the CMAS math test?', a: 'CDE\'s FAQ gives math 3 hours 15 minutes in each of grades 3 to 8 for 2025 to 2026, split into sessions of 50 to 90 minutes. Students may pause for up to three minutes for a break without losing testing time.' },
      { q: 'Where can I find a CMAS math practice test?', a: 'On the Colorado Practice Resources portal at coassessments.com, which CDE calls the only state-sanctioned CMAS practice resources. It has grade 3 to 8 math sets, a TestNav tutorial, scoring guides with answer keys and reference sheets for grades 5 to 8.' },
      { q: 'What are the reasoning questions on CMAS math?', a: 'They belong to subclaim C, Expressing Mathematical Reasoning, worth 20 to 22 percent of the score in each grade. The child justifies a claim or finds the mistake in someone else\'s work, and human scorers mark the explanation against a rubric.' },
      { q: 'Can I opt my child out of CMAS?', a: 'CDE\'s FAQ says Colorado law allows parents to excuse their children from state content assessments, and districts cannot impose negative consequences for doing so. Contact your District Assessment Coordinator to make the request.' },
      { q: 'When do CMAS math results come out?', a: 'For 2026, CDE\'s targeted timeline put the CMAS Student Performance Summary in the Family Portal on May 27 and the detailed report on June 11. The 2027 reporting dates had not been published when we checked on 31 October 2026.' },
      { q: 'When are your CMAS math classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We schedule on Mountain Time for Colorado families.' },
      { q: 'Are you part of CDE or Pearson?', a: 'No. Modern Age Coders is an independent online school with no connection to the Colorado Department of Education, any district or Pearson. We teach the Colorado Academic Standards, quote CDE\'s public documents and send families to CDE\'s own practice portal for real test items.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Colorado families and for students in the CMAS grades.',
    items: [
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'The first year a Colorado child sits CMAS math.' },
      { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math tutoring', p: 'Ratios, and the first calculator sections.' },
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'Functions, systems and the scientific calculator.' },
      { href: '/common-core-math-tutor', label: 'Common Core math tutor', p: 'The practice standards CMAS builds its reasoning tasks on.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Math competitions for middle school', p: 'Stretch for students already at Exceeded.' },
      { href: '/coding-and-ai-classes-in-colorado', label: 'Coding and AI classes in Colorado', p: 'Our main page for Colorado families.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child&rsquo;s grade and, if you have one, last spring&rsquo;s CMAS report with the subclaim results. The teacher starts where the report shows the gap.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through every <a class="ag-inline-link" href="/courses">course we run</a>.',
    note: 'Our teachers are based in India and teach Colorado students on Mountain Time, after school or at weekends. A WhatsApp message gets the quickest reply.',
    formNote: 'Booking the free first class never needs a card.'
  },

  footer: {
    cols: [
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-4th-grade', label: 'Grade 4 math' },
        { href: '/online-math-tutor-6th-grade', label: 'Grade 6 math' },
        { href: '/online-math-tutor-7th-grade', label: 'Grade 7 math' },
        { href: '/online-math-tutor-cost', label: 'What a math tutor costs' }
      ] },
      { h4: 'Colorado and the US', links: [
        { href: '/coding-and-ai-classes-in-colorado', label: 'Colorado' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/student-labs', label: 'Student work' }
      ] }
    ],
    bottomRight: 'CMAS window April 5 to 23, 2027'
  },

  personalityCss: `
.ag-root.ag-coc .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-coc .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-coc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-coc .ag-table td.ag-num { font-variant-numeric: tabular-nums; }
.ag-root.ag-coc .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'Colorado Department of Education, read raw 31 October 2026 at ed.cde.state.co.us: CMAS page (grades 3 to 8 math, developed with Pearson, best preparation quote, state-sanctioned practice); Test Windows and Reporting Timeline (tentative 2027 window, 2026 targeted reporting); Fact Sheets and FAQs (2026 window, session lengths, pause, math time 3h 15m, released samples, excusal law, scoring); Calculator Policy PDF; Performance Levels and Policy Claims PDF (May 2026); CMAS Mathematics Frameworks grades 3 to 8 (subclaims, percents, points, SMP links). Pearson-run official practice portal coassessments.com (reference sheets grades 5 to 8, scoring guides, TestNav tutorial).',
    localProject: 'Our worked examples: 5/8 against 3/4 by rewriting 3/4 as 6/8; mulch for a 12 by 8 foot bed at 0.25 feet deep is 24 cubic feet and 12 bags of 2 cubic feet, then the spill margin. Our twelve-item practice set tagged by subclaim, our four-checkpoint plan to April 5, 2027, and our Subclaim A ladder. Lesson family: explain-and-critique answers.',
    requiredMentions: ['April 5 through April 23, 2027', 'Expressing Mathematical Reasoning at 20 to 22 percent', 'securely held knowledge from the previous grade level', 'Assessment items do not require calculations above the level of the specified calculator.', 'CMAS math scores run from 650 to 850', 'math 3 hours 15 minutes in every grade from 3 to 8', 'math reference sheets for grades 5, 6, 7 and 8', 'Colorado law allows parents to excuse their children from state content assessments', '12 x 8 x 0.25 = 24 cubic feet', 'the math cut scores were set in 2015'],
    sources: [
      { claim: 'CMAS overview: grades 3 to 8 math, developed with Pearson, practice resources.', url: CDE + '/assessment/cmas' },
      { claim: 'CMAS test design and the grade 3 to 8 mathematics frameworks.', url: CDE + '/fs/pages/2249' },
      { claim: 'Tentative 2027 windows and 2026 reporting timeline.', url: CDE + '/assessment/generalinfo/importantdates' },
      { claim: 'CMAS FAQ: 2026 window, test time, released samples, excusal, scoring.', url: CDE + '/assessment/generalinfo/factsheetsandfaqs' },
      { claim: 'Calculator Policy for CMAS mathematics.', url: CDE + '/fs/resource-manager/view/a0c6675f-d4e5-4752-a9b2-3c9dc7e719a4' },
      { claim: 'CMAS Performance Levels and Policy Claims, May 2026.', url: CDE + '/fs/resource-manager/view/a36459a4-6427-48e3-97c7-6857d254ed60' },
      { claim: 'Colorado Practice Resources portal (Pearson for CDE).', url: PRACTICE }
    ],
    rejectedClaims: [
      'www.cde.state.co.us/assessment/cmas timed out (HTTP 000) on one attempt; not retried. Facts taken from CDE\'s current host ed.cde.state.co.us instead.',
      'CMAS math used in Colorado gifted and talented identification (from the research row): not verified at a CDE page in this session; not printed.',
      'Cut score ranges below Met for grades other than 5: the PDF text prints them only in the grade 5 row; we print only the grade 5 ranges and the Met and Exceeded starts for every grade.',
      'A combined percentage for subclaims C and D: not printed, because CDE publishes the subclaims separately and we never add published parts.',
      '2027 reporting dates: not yet published by CDE; the 2026 targeted dates are labelled as 2026.',
      'Reproducing released CMAS items or scoring guide answers: refused; the page links to the practice portal instead.',
      'Score or level promises for our classes: refused. Any affiliation with CDE, Colorado districts or Pearson: none.'
    ]
  }
};
