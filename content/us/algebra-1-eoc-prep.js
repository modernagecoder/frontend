'use strict';
// Algebra 1 EOC prep, state by state (ag- state-test door; UK and US exams cluster, row US042). Generic page: every fact is
// taken from the state's own education department, read raw with curl on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/algebra-1-eoc-prep/ (Texas and New York files shared with the STAAR Algebra I and
// Algebra I Regents folders):
//  - Texas (tea.texas.gov): STAAR Algebra I Blueprint "Total 50 59"; graduation page "Students must pass five end-of-course
//    assessments ... Algebra I, English I, English II, Biology and U.S. History."; Calculator Policy: graphing calculator
//    "throughout the entire test", polynomial root finders and simultaneous equation solvers disabled; 2026 to 2027 windows
//    Nov 30 to Dec 11, 2026, Apr 19 to 30 and Jun 14 to 25, 2027.
//  - North Carolina (dpi.nc.gov): State Tests page "The EOC assessments are available for Biology, English II, NC Math 1, and
//    NC Math 3"; "Per SBE policy TEST-003, schools are to use results from all EOC assessments as at least twenty (20)
//    percent of the student's final grade"; "All EOC assessments are required to be administered online" (with exceptions);
//    EOC NC Math 1 and NC Math 3 Test Specifications (April 2026): operational items 50, field test items 10, "Total Items
//    60"; NC Math 1 "calculator inactive" 15 and "calculator active" 35 operational items; "All items will be worth one
//    point each."; "three hours (180 minutes) for most students"; maximum "four hours (240 minutes)" except documented
//    accommodations; domain weights for NC Math 1: Number and Quantity and Algebra 36–40%, Functions 32–36%, Geometry 8–12%,
//    Statistics and Probability 18–20%; administered in "the last five days (4x4/semester courses/summer school) or the last
//    ten days (traditional yearlong schedule)"; students "must be provided a graphing calculator".
//  - Pennsylvania (pa.gov, Department of Education): Keystone Exams page: end-of-course assessments "in the subject areas of
//    Algebra I, Literature, and Biology"; 2026 to 2027 windows Winter Wave 1 December 7 to 18, 2026, Winter Wave 2 January 4
//    to 15, 2027, Spring May 17 to 28, 2027, Summer July 26 to 30, 2027; Keystone Exams Test Definition, Algebra I: Module 1
//    "Operations and Linear Equations & Inequalities", Module 2 "Linear Functions and Data Organization", each "Total 30
//    points", "a total of 60 points (Module 1 and Module 2 combined)"; Spring 2026 parent FAQ: "Beginning with the class of
//    2022–2023, students must demonstrate proficiency on the Algebra I, Literature, and Biology Keystone Exams to graduate or
//    fulfill one of the other pathways provided to graduate."; "There is no time limit"; "should take the typical student two
//    to three hours"; Graduation Requirements page: "one of five Pathways to Graduation".
//  - New York (nysed.gov): Algebra I Regents design "Total 35 - 82", three hours, graphing calculator; June 2027 Algebra I
//    Wednesday June 16, 1:15 p.m.; one math Regents for a Regents or local diploma under current rules.
// Blocked or rejected on 31 October 2026, not retried, nothing said about them: Maryland (marylandpublicschools.org 403),
// Louisiana (louisianabelieves.com 403), Mississippi (mdek12.org 403), Missouri (dese.mo.gov 403), Ohio
// (education.ohio.gov "Request Rejected"). Florida, Virginia, Georgia and Tennessee were recorded as blocked in the research
// map (fldoe.org 403, doe.virginia.gov 403, gadoe.org and tn.gov no response) and not fetched again.
// State dashes written with "to" here. No released item from any state is reproduced.
// Our own material, labelled: the plant and vine table (20 + 5w against 2(1.5)^w, vine passes in week 9: 65 against about
// 76.9); the slope and intercept interpretation (C = 12 + 3h); the ten-item practice set; the five-step "find your state's
// documents" method; the cross-state content reading.
// Lesson family: linear against exponential growth, compared in a table before any formula.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const TEA = 'https://tea.texas.gov/data-reports/staar';
const NCDPI = 'https://www.dpi.nc.gov/districts-schools/testing-and-school-accountability/state-tests';
const PDE = 'https://www.pa.gov/agencies/education/programs-and-services/instruction/elementary-and-secondary-education/assessment-and-accountability';
const NYSED = 'https://www.nysed.gov/sites/default/files/programs/state-assessment';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'ALGEBRA 1 EOC', blurb: 'Algebra 1 end-of-course exams compared across Texas, North Carolina, Pennsylvania and New York, each from the state&rsquo;s own documents, with the content they share and original practice.' },
  slug: 'algebra-1-eoc-prep',
  code: 'aeoc',
  accent: '#44460D',
  accentRationale: 'Algebra 1 EOC, all states: a dark olive #44460D as allocated, 9.31:1 on paper #FBF8F2 and 8.01:1 on the deepest tint, neutral enough to sit above any one state&rsquo;s page',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  routeLabel: 'Algebra 1 EOC prep',
  title: 'Algebra 1 EOC Prep: How the Exam Works in Each State',
  description: 'Algebra 1 EOC prep, state by state: questions, time, calculator rules and stakes in Texas, North Carolina, Pennsylvania and New York, with original practice.',
  ogDescription: 'Fifty questions in Texas, sixty items in North Carolina, two modules in Pennsylvania, four parts in New York. The Algebra 1 end-of-course exam compared from each state&rsquo;s own documents.',
  twitterDescription: 'Algebra 1 end-of-course exams compared across four states, from official sources.',
  pageName: 'Algebra 1 EOC Prep',
  webPageDescription: 'A comparison of Algebra 1 end-of-course exams in four states, Texas (STAAR Algebra I), North Carolina (NC Math 1), Pennsylvania (Keystone Algebra I) and New York (Algebra I Regents), built from each state department&rsquo;s own pages, with the shared content, original examples and a method for finding any state&rsquo;s documents.',
  courseDescription: 'Algebra I taught live online for students in any US state preparing for an end-of-course exam, from linear equations to exponential models, in a batch of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Algebra 1 EOC prep',
  navLinks: [
    { href: '#compare', label: 'Four states' },
    { href: '#stakes', label: 'What it counts for' },
    { href: '#content', label: 'Shared content' },
    { href: '#dates', label: '2026 to 2027' },
    { href: '#worked', label: 'Worked example' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Algebra I end-of-course exams &middot; Four states compared',
  h1: 'Algebra 1 EOC prep, state by state',
  lede: '&ldquo;The Algebra 1 EOC&rdquo; sounds like one exam. It is really a family of state exams that share a subject and little else. Texas gives 50 questions and ties it to graduation. North Carolina gives 60 items and counts the result in the course grade. Pennsylvania splits it into two modules. New York calls it a Regents. This page lays four of them side by side, each fact taken from that state&rsquo;s own education department, then shows what they all test and how to prepare for whichever one your child faces.',
  secondaryCta: { href: '#compare', label: 'Compare the four states' },
  wa: 'Hello Modern Age Coders, my child has an Algebra 1 end-of-course exam this year. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students taught &middot; lessons set in your US time zone',
  spec: [
    ['Subject', 'Algebra I'],
    ['Taken', 'At the end of the course'],
    ['States compared', 'TX, NC, PA, NY'],
    ['Length', '35 to 60 questions'],
    ['Calculator', 'Graphing, in all four'],
    ['Stakes', 'Graduation or course grade'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'An Algebra 1 EOC (end-of-course) exam is a state test taken when a student finishes Algebra I. Its form depends on the state: Texas&rsquo;s STAAR Algebra I has 50 questions, North Carolina&rsquo;s NC Math 1 has 60 items, Pennsylvania&rsquo;s Keystone Algebra I has two modules worth 60 points, and New York&rsquo;s Algebra I Regents has 35 questions. Modern Age Coders teaches Algebra I for any state&rsquo;s EOC, live online, in a batch or 1-on-1, through our Algebra Foundations course.',

  picks: {
    eyebrow: 'Algebra I for any state',
    h2: 'Three courses for an Algebra 1 end-of-course exam',
    lede: 'The algebra is the same everywhere; the test wrapper is what changes. These courses teach the algebra.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'AE / 01', title: 'Algebra foundations', note: 'The full Algebra I course: linear, quadratic and exponential functions, data.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'AE / 02', title: 'Middle school math', note: 'Integers, ratios and one-variable equations, if those are the gap.' },
      { course: 'statistics-probability-maths-course', code: 'AE / 03', title: 'Statistics and probability', note: 'Data and regression, a fifth of North Carolina&rsquo;s exam.' }
    ]
  },

  sections: [
    {
      id: 'compare', tint: 'tint', eyebrow: 'Four states',
      h2: 'How many questions are on the Algebra 1 EOC?',
      lede: 'It depends on the state: 35 in New York, 50 in Texas, 60 items in North Carolina, and two modules worth 60 points in Pennsylvania. The table sets out what each state publishes.',
      body: [
        { kind: 'table', caption: 'Algebra I end-of-course exams in four states (each row from that state&rsquo;s education department, read 31 October 2026)', head: ['State and exam', 'Length', 'Time', 'Calculator'], rows: [
          ['Texas: STAAR Algebra I', '50 questions, 59 points', 'Not given in the blueprint; ask the school', 'Graphing, required throughout; solver functions disabled'],
          ['North Carolina: NC Math 1 EOC', '60 items (50 operational, 10 field test), one point each', 'About 3 hours for most; up to 4 hours', 'Graphing; 15 operational items calculator inactive, 35 active'],
          ['Pennsylvania: Keystone Algebra I', 'Two modules of 30 points, 60 points in all', 'No time limit; typically 2 to 3 hours', 'See PDE&rsquo;s administration materials'],
          ['New York: Algebra I Regents', '35 questions, 82 credits', 'Three hours', 'Graphing, for the whole exam']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the numbers differ',
          left: [
            'Each state writes its own standards and its own test. Texas tests the Texas Essential Knowledge and Skills; North Carolina its Standard Course of Study, adopted in June 2016; Pennsylvania its Core Standards; New York its Next Generation standards.',
            'Field-test questions also vary. North Carolina says plainly that 10 of its 60 items are field test items that do not count toward the score.'
          ],
          rightH3: 'What does not differ',
          right: [
            'All four require or provide a graphing calculator, all four mix multiple choice with questions where the student produces the answer, and all four are built around linear functions.',
            'A student who truly understands Algebra I is ready for any of them with a few weeks spent on the local format.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + TEA + '/2022-staar-algebra-i-blueprint-0.pdf" rel="noopener" target="_blank">TEA STAAR Algebra I Blueprint</a>; <a class="ag-inline-link" href="https://www.dpi.nc.gov/documents/accountability/testing/eoc/eoc-nc-math-1-and-nc-math-3-test-specifications/open" rel="noopener" target="_blank">NCDPI NC Math 1 and NC Math 3 Test Specifications</a> (April 2026); <a class="ag-inline-link" href="' + PDE + '/keystone-exams" rel="noopener" target="_blank">PDE Keystone Exams</a> and its Algebra I test definition; <a class="ag-inline-link" href="' + NYSED + '/algebra-one-educator-guide-2023.pdf" rel="noopener" target="_blank">NYSED Algebra I Educator Guide</a>. All read 31 October 2026. We are not connected with any of these departments.' }
      ]
    },
    {
      id: 'stakes', tint: 'deep', eyebrow: 'What it counts for',
      h2: 'Does the Algebra 1 EOC count toward graduation or grades?',
      lede: 'In some states it is a graduation test, in others part of the course grade. Here is what each of the four says about itself.',
      body: [
        { kind: 'table', caption: 'What the Algebra I EOC counts for (each state&rsquo;s own wording, read 31 October 2026)', head: ['State', 'What the state says'], rows: [
          ['Texas', 'Algebra I is among the five EOCs TEA lists for graduation testing, with approved substitute tests as an alternative'],
          ['North Carolina', 'Per State Board policy TEST-003, EOC results count as at least 20 percent of the student&rsquo;s final course grade'],
          ['Pennsylvania', 'From the class of 2022 to 2023, proficiency on the Algebra I, Literature and Biology Keystones or another of five Pathways to Graduation'],
          ['New York', 'Under current rules, one math Regents or approved alternative for a Regents or local diploma; a proposal to end this from fall 2027 awaits approval']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Pennsylvania&rsquo;s pathways',
          left: [
            'Pennsylvania&rsquo;s spring 2026 parent FAQ says that beginning with the class of 2022 to 2023, students &ldquo;must demonstrate proficiency on the Algebra I, Literature, and Biology Keystone Exams to graduate or fulfill one of the other pathways provided to graduate.&rdquo;',
            'The same FAQ says results are banked until senior year for graduation purposes. PDE&rsquo;s graduation page adds that students who do not reach proficiency or a minimum composite score can show proficiency through locally set requirements under the pathways.'
          ],
          rightH3: 'North Carolina&rsquo;s grade weight',
          right: [
            'NCDPI&rsquo;s state tests page: &ldquo;schools are to use results from all EOC assessments as at least twenty (20) percent of the student&rsquo;s final grade for each respective course.&rdquo;',
            'So a North Carolina student who does well all year but poorly on the EOC sees it in the report card, even though the test is not a stand-alone graduation hurdle on that page.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://tea.texas.gov/student-readiness-and-high-school/high-school-graduation-requirements" rel="noopener" target="_blank">TEA graduation requirements</a>; <a class="ag-inline-link" href="' + NCDPI + '" rel="noopener" target="_blank">NCDPI State Tests</a>; <a class="ag-inline-link" href="' + PDE + '/graduation-requirements" rel="noopener" target="_blank">PDE Pathways to Graduation</a>; <a class="ag-inline-link" href="https://www.nysed.gov/curriculum-instruction/general-education-and-diploma-requirements" rel="noopener" target="_blank">NYSED diploma requirements</a>. Read 31 October 2026.' }
      ]
    },
    {
      id: 'content', tint: 'tint', eyebrow: 'Shared content',
      h2: 'What is on the Algebra 1 EOC in every state?',
      lede: 'Linear functions, everywhere. Beyond that, the states group the content differently, but the same ideas keep appearing.',
      body: [
        { kind: 'table', caption: 'How four states organize Algebra I content (each state&rsquo;s blueprint or test definition, read 31 October 2026)', head: ['State', 'How content is grouped'], rows: [
          ['Texas', 'Five reporting categories, two of them linear (one on graphing and describing, one on writing and solving), plus number and algebraic methods, quadratics and exponentials'],
          ['North Carolina', 'Domain weights: Number and Quantity and Algebra 36 to 40%; Functions 32 to 36%; Statistics and Probability 18 to 20%; Geometry 8 to 12%'],
          ['Pennsylvania', 'Module 1, Operations and Linear Equations and Inequalities; Module 2, Linear Functions and Data Organization; 50 percent of points each'],
          ['New York', 'Algebra 48 to 61%; Functions 24 to 32%; Statistics and Probability 7 to 15%; Number and Quantity 4 to 10%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The common core of the subject',
          left: [
            'Our reading across the four: every exam tests writing and solving linear equations and inequalities, slope and rate of change, graphing lines, systems of two equations, and interpreting data. That is the part of Algebra I a student cannot afford to be shaky on anywhere.',
            'Texas and New York also give real weight to quadratic and exponential functions. North Carolina&rsquo;s Math 1 includes a geometry domain worth 8 to 12 percent.'
          ],
          rightH3: 'Statistics matters more than students expect',
          right: [
            'North Carolina puts 18 to 20 percent of NC Math 1 on statistics and probability, and Pennsylvania gives half a module to data organization. Scatter plots, lines of fit and reading box plots are worth practising early.',
            'These are also some of the quickest topics to improve, because they reward careful reading more than long calculation.'
          ] }
      ]
    },
    {
      id: 'dates', tint: 'deep', eyebrow: '2026 to 2027',
      h2: 'When is the Algebra 1 EOC in 2026 to 2027?',
      lede: 'Most states test near the end of the course, and several offer retake windows in winter or summer. These are the published windows for the four states.',
      body: [
        { kind: 'table', caption: 'Algebra I end-of-course windows, 2026 to 2027 (each state&rsquo;s calendar or schedule, read 31 October 2026)', head: ['State', 'Windows', 'Source'], rows: [
          ['Texas', 'Three windows: from November 30, 2026 (two weeks), from April 19, 2027 (two weeks) and from June 14, 2027 (two weeks)', 'TEA 2026 to 2027 testing calendar'],
          ['North Carolina', 'The last five days of a semester or summer course, or the last ten days of a yearlong course', 'NCDPI test specifications'],
          ['Pennsylvania', 'December 7 to 18, 2026; January 4 to 15, 2027; May 17 to 28, 2027; July 26 to 30, 2027', 'PDE Keystone testing windows'],
          ['New York', 'January period (January 26 to 29, 2027); Wednesday, June 16, 2027, 1:15 p.m.; Tuesday, August 17, 2027', 'NYSED final dates memo and schedules']
        ] },
        { kind: 'p', mt: true, html: 'Schools choose the actual day inside each window, so the date that matters is the one the school gives you. Our plans start from that date and count back about ten weeks.' }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked example',
      h2: 'Linear or exponential? The comparison every Algebra 1 EOC asks',
      lede: 'Our own problem. Some version of it appears in every state&rsquo;s content, because it tests whether a student understands what the two kinds of growth mean.',
      body: [
        { kind: 'ol', items: [
          '<b>The problem (ours).</b> A sunflower is 20 cm tall and grows 5 cm each week. A vine is 2 cm long and grows by 50 percent each week. In which week does the vine first become longer than the sunflower?',
          '<b>Name the growth.</b> Adding 5 each week is linear: S = 20 + 5w. Multiplying by 1.5 each week is exponential: V = 2(1.5)<sup>w</sup>.',
          '<b>Build a table before any algebra.</b> Week 0: 20 and 2. Week 4: 40 and about 10.1. Week 6: 50 and about 22.8. Week 8: 60 and about 51.3. Week 9: 65 and about 76.9.',
          '<b>Read it.</b> The vine is still shorter in week 8 and longer in week 9, so it first passes the sunflower in week 9.',
          '<b>Check with the graphing calculator.</b> Graph y = 20 + 5x and y = 2(1.5)<sup>x</sup>; they cross between x = 8 and x = 9. The table and the graph agree.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A second skill: reading slope in context (ours)',
          left: [
            'A bike rental costs C = 12 + 3h for h hours. The 3 is the rate of change, 3 per hour; the 12 is the starting amount when h = 0, a fixed fee. Every state&rsquo;s exam asks students to say what slope and intercept mean in words.',
            'Answer with units and with the situation, not just &ldquo;slope is 3&rdquo;.'
          ],
          rightH3: 'Why we teach tables first',
          right: [
            'A table shows the difference between adding and multiplying before the formula hides it. Students who see that pattern rarely confuse 20 + 5w with 20(5)<sup>w</sup> on test day.',
            'It also works without a calculator, which matters in North Carolina&rsquo;s calculator-inactive section.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice',
      h2: 'Ten Algebra 1 EOC practice questions for any state',
      lede: 'Our questions, chosen from content all four states test. Answers on the right.',
      body: [
        { kind: 'table', caption: 'Algebra I practice we wrote for this page, with answers', head: ['Skill', 'Question', 'Answer'], rows: [
          ['Linear equations', 'Solve 7 - 2(x + 3) = 3x - 14.', 'x = 3'],
          ['Inequalities', 'Solve -4x + 9 &gt; 21 and describe the solution.', 'x &lt; -3'],
          ['Slope', 'Find the slope through (-1, 4) and (3, -8).', '-3'],
          ['Writing lines', 'Write the line with slope 1/2 through (4, 1).', 'y = x/2 - 1'],
          ['Systems', 'Solve 2x + y = 11 and x - y = 1.', 'x = 4, y = 3'],
          ['Functions', 'Is {(1, 2), (2, 2), (3, 5)} a function? Why?', 'Yes: each input has one output'],
          ['Exponents', 'Simplify 2x<sup>3</sup> x 4x<sup>2</sup>.', '8x<sup>5</sup>'],
          ['Quadratics', 'Solve x&sup2; = 49.', 'x = 7 or x = -7'],
          ['Exponential models', 'Does y = 300(0.9)<sup>x</sup> show growth or decay? At what rate?', 'Decay, 10 percent per step'],
          ['Statistics', 'A line of fit is y = 2.5x + 40. Predict y when x = 12.', '70']
        ] },
        { kind: 'p', mt: true, html: 'Each state publishes its own practice: TEA&rsquo;s <a class="ag-inline-link" href="' + TEA + '/staar-released-test-questions" rel="noopener" target="_blank">STAAR released tests</a>, NCDPI&rsquo;s <a class="ag-inline-link" href="https://www.dpi.nc.gov/documents/accountability/testing/eoc/eoc-nc-math-1-released-form" rel="noopener" target="_blank">NC Math 1 released form</a>, PDE&rsquo;s Keystone item and scoring samplers on its <a class="ag-inline-link" href="' + PDE + '/keystone-exams" rel="noopener" target="_blank">Keystone Exams page</a>, and NYSED&rsquo;s <a class="ag-inline-link" href="https://www.nysedregents.org/algebraone/" rel="noopener" target="_blank">past Algebra I Regents</a>. Use your own state&rsquo;s set for rehearsal; another state&rsquo;s items train the wrong format.' }
      ]
    },
    {
      id: 'find', tint: 'tint', eyebrow: 'Any other state',
      h2: 'How to find your own state&rsquo;s Algebra 1 EOC documents',
      lede: 'If your state is not one of the four above, these five steps find the documents that matter. It is the method we use ourselves.',
      body: [
        { kind: 'ol', items: [
          '<b>Get the exam&rsquo;s exact name.</b> Ask the school or check the course syllabus: it might be an EOC, a Keystone, a Regents or a state-specific name.',
          '<b>Go to the state education department, not a prep site.</b> Search the department&rsquo;s own website for that name plus &ldquo;blueprint&rdquo; or &ldquo;test specifications&rdquo;.',
          '<b>Find three documents.</b> The blueprint or test specifications (questions and weights), the calculator policy, and the testing calendar for 2026 to 2027.',
          '<b>Find the official practice.</b> Most states release items or a practice form, often inside the online testing platform.',
          '<b>Map it to the class.</b> Line up the blueprint categories with the units in your child&rsquo;s course so revision follows the weights.'
        ] },
        { kind: 'p', mt: true, html: 'We could not read several state department sites for this page on 31 October 2026, so it says nothing about their exams. If your family is in one of those states, bring the documents to the first class and we will read them with you.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where to start',
    h2: 'Four common starting points for Algebra 1 EOC prep',
    lede: 'Our way of placing a student, whichever state they are in.',
    table: { caption: 'Starting points (ours)', head: ['Starting point', 'What we see', 'First move'], rows: [
      ['Pre-algebra gaps', 'Negative numbers and fractions cause errors', 'Two to three weeks of middle school foundations'],
      ['Linear but not fluent', 'Can solve, struggles to write equations from words', 'Daily translation of sentences into equations'],
      ['Solid linear, weak nonlinear', 'Quadratics and exponentials feel random', 'Tables first, then graphs, then formulas'],
      ['Ready', 'Few errors anywhere', 'Full practice forms in the state&rsquo;s format']
    ] },
    left: { h3: 'For parents', ps: [
      'Find out what the EOC counts for in your state: graduation, a share of the grade, or both. It changes how much time is worth spending.',
      'Ask the school for the exact testing day. Windows are wide; the date is local.'
    ] },
    right: { h3: 'For students', ps: [
      'Linear functions are on every version of this exam. Master them first.',
      'Practise on the calculator your state allows, in the format your state uses.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses around Algebra I',
    lede: 'Live lessons before, during and after the Algebra I year.',
    bands: [
      { num: 'I', h3: 'Before', sub: 'Grades 6 to 8', courses: [
        { code: 'AE / P / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'The pre-algebra base.' },
        { code: 'AE / P / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Variables and functions in Python.' },
        { code: 'AE / P / 03', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'For calculator-free sections.' }
      ] },
      { num: 'II', h3: 'During', sub: 'Grade 8 or 9', courses: [
        { code: 'AE / A / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'All of Algebra I.' },
        { code: 'AE / A / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and lines of fit.' },
        { code: 'AE / A / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'Stretch for strong students.' }
      ] },
      { num: 'III', h3: 'After', sub: 'Grades 9 to 12', courses: [
        { code: 'AE / H / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry and Algebra II.' },
        { code: 'AE / H / 02', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'Algebra-heavy, like the EOC.' },
        { code: 'AE / H / 03', slug: 'act-math-prep-course', title: 'ACT Math', blurb: 'The ACT math section.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Algebra lessons in your own time zone',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'ET, CT, MT, PT', l: 'After-school slots in every US time zone.' },
      { time: 'Weekends', l: 'Full practice forms before a window.' },
      { time: '1-on-1', l: 'Built on your state&rsquo;s blueprint.' }
    ],
    cells: [
      { h3: 'Algebra first', p: 'The subject before the format.' },
      { h3: 'Your state&rsquo;s format', p: 'Practised in the last weeks.' },
      { h3: 'Tables before formulas', p: 'Linear and exponential, side by side.' },
      { h3: 'Calculator fluency', p: 'Graphing, and without it.' },
      { h3: 'Official practice', p: 'Each state&rsquo;s own released items.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Built by students who learned algebra',
  projectsLede: 'Variables and functions run all of these. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents said on Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'We bill Algebra I classes monthly in US dollars, with no annual commitment, so a student can join for the months before their state&rsquo;s window.',
    free: ['A free first class', 'Bring the state&rsquo;s blueprint if you have it', 'No card details'],
    group: ['Fifteen to twenty students', 'One algebra teacher', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Your state&rsquo;s format', 'Flexible times']
  },

  faq: {
    eyebrow: 'Algebra 1 EOC questions',
    h2: 'Algebra 1 EOC: what families ask',
    items: [
      { q: 'How many questions are on the Algebra 1 EOC?', a: 'It varies by state. Texas\'s STAAR Algebra I has 50 questions, North Carolina\'s NC Math 1 has 60 items of which 50 count, Pennsylvania\'s Keystone Algebra I has two modules worth 60 points in all, and New York\'s Algebra I Regents has 35 questions.' },
      { q: 'How long is the Algebra 1 EOC?', a: 'North Carolina estimates about three hours for most students, with four as the maximum; New York allows three hours; Pennsylvania sets no time limit and expects two to three hours. Check your own state\'s administration rules.' },
      { q: 'Can you use a calculator on the Algebra 1 EOC?', a: 'In all four states compared here, a graphing calculator is part of the exam. North Carolina also has a calculator-inactive section, and Texas requires solver functions to be switched off.' },
      { q: 'What happens if you fail the Algebra 1 EOC?', a: 'It depends on the state. Texas offers December and June retakes and approved substitutes, Pennsylvania has other pathways to graduation, and in North Carolina the score counts as at least 20 percent of the course grade. Ask the school counselor what applies.' },
      { q: 'What is on the Algebra 1 EOC?', a: 'Every version tests linear equations, inequalities and functions heavily. Texas and New York add quadratic and exponential functions, North Carolina includes some geometry and a large statistics share, and Pennsylvania focuses its two modules on linear work and data.' },
      { q: 'Is the Algebra 1 EOC hard?', a: 'It is a fair test of the course: students who understand linear functions and practise the format usually find it manageable. The hardest part is often the written or typed answers, where guessing does not help.' },
      { q: 'Do you cover the Florida Algebra 1 EOC?', a: 'We teach Algebra I to students in Florida and every other state. This page does not describe Florida\'s exam because we could not read the state department\'s site when writing it; bring the official documents and we will plan from them.' },
      { q: 'Where can I find Algebra 1 EOC practice tests?', a: 'On your state education department\'s site: Texas, North Carolina, Pennsylvania and New York all publish released items or practice forms. Use your own state\'s, since formats differ.' },
      { q: 'When are your Algebra I classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We schedule in ET, CT, MT or PT.' },
      { q: 'Are you connected with any state education department?', a: 'No. Modern Age Coders is an independent online school. We quote each state\'s public documents and link to them, and we write our own practice problems.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More algebra help for US students.',
    items: [
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'Every algebra rule, with its reason.' },
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'The year before Algebra I for many.' },
      { href: '/online-math-tutor-9th-grade', label: 'Ninth grade math tutoring', p: 'The usual Algebra I year.' },
      { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina', p: 'Our page for North Carolina families.' },
      { href: '/coding-and-ai-classes-in-pennsylvania', label: 'Pennsylvania', p: 'Our page for Pennsylvania families.' },
      { href: '/coding-classes-in-texas', label: 'Texas', p: 'Our page for Texas families.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your state and the exam&rsquo;s name. The first class starts with the topic your state weights most and your child finds hardest.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or see <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'Classes are live from India and booked in your local US time zone, after school or at weekends. WhatsApp is the quickest way to arrange one.',
    formNote: 'The first class costs nothing, and booking it asks for no card.'
  },

  footer: {
    cols: [
      { h4: 'Algebra', links: [
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' },
        { href: '/online-math-tutor-9th-grade', label: 'Grade 9 math' },
        { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'States', links: [
        { href: '/coding-classes-in-texas', label: 'Texas' },
        { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
        { href: '/coding-and-ai-classes-in-pennsylvania', label: 'Pennsylvania' },
        { href: '/coding-classes-in-new-york', label: 'New York' }
      ] }
    ],
    bottomRight: 'Week 9: 65 against 76.9'
  },

  personalityCss: `
.ag-root.ag-aeoc .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-aeoc .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-aeoc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-aeoc .ag-table td { line-height: 1.5; }
.ag-root.ag-aeoc .ag-section-head h2 { max-width: 30ch; }
`,

  dossier: {
    curriculumAuthority: 'Four state education departments, each read raw 31 October 2026. Texas Education Agency: STAAR Algebra I Blueprint, graduation requirements, Calculator Policy, 2026 to 2027 testing calendar. North Carolina DPI: State Tests page (EOC list, TEST-003 20 percent, online administration) and EOC NC Math 1 and NC Math 3 Test Specifications, April 2026 (items, calculator sections, timing, domain weights, administration days, graphing calculator). Pennsylvania Department of Education: Keystone Exams page (subjects, 2026 to 2027 windows), Algebra I Test Definition (two modules, 60 points), spring 2026 parent FAQ (class of 2022 to 2023 rule, no time limit), Graduation Requirements (five pathways). NYSED: Algebra I Educator Guide, 2027 schedules, diploma requirements.',
    localProject: 'Our sunflower and vine comparison: S = 20 + 5w against V = 2(1.5)^w, the vine first longer in week 9 (65 against about 76.9), confirmed by graphing; our bike-rental slope reading C = 12 + 3h; a ten-item cross-state practice set; the five-step method for finding any state\'s documents. Lesson family: linear against exponential growth.',
    requiredMentions: ['60 items (50 operational, 10 field test), one point each', 'schools are to use results from all EOC assessments as at least twenty (20) percent of the student&rsquo;s final grade for each respective course.', 'must demonstrate proficiency on the Algebra I, Literature, and Biology Keystone Exams to graduate or fulfill one of the other pathways provided to graduate.', 'Module 1, Operations and Linear Equations and Inequalities', 'December 7 to 18, 2026; January 4 to 15, 2027; May 17 to 28, 2027; July 26 to 30, 2027', 'The last five days of a semester or summer course, or the last ten days of a yearlong course', '15 operational items calculator inactive, 35 active', 'S = 20 + 5w', 'Week 9: 65 and about 76.9', 'No time limit; typically 2 to 3 hours'],
    sources: [
      { claim: 'NCDPI EOC NC Math 1 and NC Math 3 Test Specifications, April 2026.', url: 'https://www.dpi.nc.gov/documents/accountability/testing/eoc/eoc-nc-math-1-and-nc-math-3-test-specifications/open' },
      { claim: 'NCDPI State Tests: EOC list and TEST-003 grade weight.', url: NCDPI },
      { claim: 'PDE Keystone Exams: subjects, windows, test definitions.', url: PDE + '/keystone-exams' },
      { claim: 'PDE Pathways to Graduation.', url: PDE + '/graduation-requirements' },
      { claim: 'TEA STAAR Algebra I Blueprint.', url: TEA + '/2022-staar-algebra-i-blueprint-0.pdf' },
      { claim: 'TEA high school graduation requirements.', url: 'https://tea.texas.gov/student-readiness-and-high-school/high-school-graduation-requirements' },
      { claim: 'NYSED Algebra I Educator Guide.', url: NYSED + '/algebra-one-educator-guide-2023.pdf' }
    ],
    rejectedClaims: [
      'Florida, Virginia, Maryland, Louisiana, Mississippi, Missouri, Ohio, Georgia and Tennessee Algebra I exam details: not stated; each department site returned 403, rejected the request or did not respond, and none was retried.',
      'A list of every state with an Algebra I EOC: not printed; it could not be verified state by state.',
      'Passing or cut scores for North Carolina, Pennsylvania or New York: not printed; not read at a primary source in this session.',
      'Pennsylvania Keystone calculator rules: not stated; PDE\'s administration manual was not read.',
      'Any state\'s released items: not reproduced; linked instead.',
      'Score or graduation promises: refused. Any affiliation with any state department: none.'
    ]
  }
};
