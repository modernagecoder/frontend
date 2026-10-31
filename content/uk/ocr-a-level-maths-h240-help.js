'use strict';
// OCR A Level Mathematics A H240 help (ag- exam door, UK and US exams cluster Phase 2, row UK033).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/ocr-a-level-maths-h240-help/):
//  - Cambridge OCR Level 3 Advanced GCE in Mathematics A (H240) specification, Version 3.1, "© Cambridge OCR 2026",
//    "For first assessment in 2018" (PDF 308723 linked from ocr.org.uk mathematics-a-h230-h240-from-2017).
//    Verbatim: "Component 01 assesses content from Pure Mathematics in a single section of 100 marks."; "Component 02
//    assesses content from Pure Mathematics and Statistics in two separate sections of approximately 50 marks each.";
//    "Some of the assessment items in the Statistics section will be set in the context of the pre-release large data
//    set."; Component 03 "Pure Mathematics and Mechanics in two separate sections of approximately 50 marks each"; each
//    "100 marks", "2 hour written paper", "33⅓%"; "Learners will be given formulae in each assessment on pages 2 and 3 of
//    the question paper"; "Each section has a gradient of difficulty and consists of a mix of long and short
//    questions."; "Learners are permitted to use a scientific or graphical calculator for all papers."; features "an
//    iterative function such as an ANS key" and "the ability to compute summary statistics and access probabilities from
//    the binomial and normal distributions"; "Allowable calculators can be used for any function they can perform.";
//    "Separate Question Papers and Answer Booklets so that students can always see the whole of a question at one
//    time"; "Applied content (statistics and mechanics) assessed on separate papers so that the content domains assessed
//    on any given paper don't cover both at once."; LDS: "Knowledge of the actual data within the data set(s) will not
//    be required in the examination"; "Learners will NOT have a printout of the pre-release data set"; "Any change to
//    the data set will be made before the beginning of any given two year course and centres will be notified a year in
//    advance."; command words "Find, Solve, Calculate" (no justification required), "Determine" ("justification should
//    be given"), "Give, State, Write down", "In this question you must show detailed reasoning." ("a restriction on what
//    will be accepted as evidence of a complete method"), "Hence", "Hence or otherwise", "You may use the result",
//    "Exact"; calculator advice "write down explicitly any expressions, including integrals, that they use the
//    calculator to evaluate", "Correct mathematical notation (rather than "calculator notation") should be used;
//    incorrect notation may result in loss of marks."; "Learners can retake the qualification as many times as they
//    wish. They must retake all components of the qualification."; "All examined components must be taken in the same
//    examination series at the end of the course."; grades A* to E, U; private candidates "must be based in the UK";
//    accreditation number 603/1038/8; summary of updates: October 2025 covers updated "to reflect the new Cambridge OCR
//    brand"; AO1 50%, AO2 25%, AO3 25%.
// Our own material, labelled on the page: one curve answered under Find, Determine and detailed-reasoning rules
// (y = x e^(-2x), stationary point (1/2, 1/(2e)) about (0.5, 0.184)); a detailed-reasoning logarithm equation
// (5^(x+1) = 3^(2x), x = ln 5 / (2 ln 3 - ln 5) = 2.74); a definite integral of 3 root x + ... giving 12.5; a projectile
// example (25 m/s at 35 degrees, g = 9.8: time 2.93 s, range 59.9 m); a binomial check (B(25, 0.2), P(X <= 2) = 0.0982);
// and a six-question practice set, all checked in Python on 31 October 2026. No OCR question is reproduced.
// Spine: the command word sets the method. OCR prints a list of command words with meanings, and "show detailed
// reasoning" removes calculator shortcuts as evidence. Paper 2 is pure with statistics, Paper 3 pure with mechanics.
// Lesson family: reading the instruction before choosing the method.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'OCR H240', blurb: 'OCR prints what Find, Determine and show detailed reasoning each demand. On H240 the command word decides which method earns the marks.' },
  slug: 'ocr-a-level-maths-h240-help',
  code: 'ocl',
  accent: '#326384',
  accentRationale: 'OCR A level Maths A H240: a steel blue #326384 from the cluster allocation, 6.09:1 on #FBF8F2, cooler and greyer than the navy accents on the computing pages, so it reads as a calm exam-board page',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'OCR A level Maths H240 help',
  title: 'OCR A Level Maths H240 Help: Papers and Command Words',
  description: 'OCR A level Maths A H240 help: what Papers 1, 2 and 3 test, how Find, Determine and show detailed reasoning change the method, and live online classes.',
  ogDescription: 'OCR A level Mathematics A H240 from the specification: three papers, the pre-release large data set, the calculator rules and the command words that decide what counts as working.',
  twitterDescription: 'OCR H240: Paper 1 pure, Paper 2 pure and statistics, Paper 3 pure and mechanics, and why the command word matters as much as the topic.',
  pageName: 'OCR A Level Maths H240 Help',
  webPageDescription: 'Live online teaching for OCR A level Mathematics A H240 students in Years 12 and 13, written from the OCR specification.',
  courseDescription: 'Live online classes for OCR A level Mathematics A H240: pure, statistics and mechanics, taught with the command words OCR uses to judge a complete method.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'OCR A level Maths H240',
  navLinks: [
    { href: '#papers', label: 'Three papers' },
    { href: '#commands', label: 'Command words' },
    { href: '#lds', label: 'Large data set' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'OCR &middot; A level Mathematics A H240 &middot; Years 12 and 13',
  h1: 'OCR A level Maths H240 help',
  lede: 'OCR A level Mathematics A, code H240, is three two-hour papers sat together at the end of Year 13. Its quirk is not the topic list, which is shared with every board, but the instructions in front of each question. OCR publishes what "Find", "Determine" and "show detailed reasoning" each demand, and a correct answer reached the wrong way can score nothing. This page covers the papers, the data set, the calculator and those command words.',
  secondaryCta: { href: '#commands', label: 'The command words' },
  wa: 'Hello Modern Age Coders, I would like a free first class for OCR A level Maths H240.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Not connected with OCR',
  spec: [
    ['Qualification', 'OCR A level Mathematics A'],
    ['Code', 'H240'],
    ['Paper 1', 'Pure, 100 marks, 2 hours'],
    ['Paper 2', 'Pure and Statistics'],
    ['Paper 3', 'Pure and Mechanics'],
    ['Calculator', 'Scientific or graphical, all papers'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'OCR A level Mathematics A (H240) is a linear A level from Cambridge OCR, examined by three 2-hour papers of 100 marks each: Paper 1 Pure Mathematics, Paper 2 Pure Mathematics and Statistics, and Paper 3 Pure Mathematics and Mechanics. Formulae are printed in each question paper and a scientific or graphical calculator is allowed throughout. Modern Age Coders runs live online H240 lessons through its A Level Maths course; families pick a 15 to 20 student batch or 1-on-1, and the opening lesson is free.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Where an H240 student usually starts',
    lede: 'The A level course carries H240 itself. Statistics adds depth for Paper 2; the admissions course is for students also sitting the TMUA.',
    items: [
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'OC / 01', title: 'A Level Maths', note: 'All of H240, with OCR\'s command words practised from the first week.' },
      { course: 'statistics-probability-maths-course', code: 'OC / 02', title: 'Statistics and Probability', note: 'Sampling, distributions and tests for the second half of Paper 2.' },
      { course: 'tmua-mat-step-preparation-course', code: 'OC / 03', title: 'TMUA and STEP preparation', note: 'For H240 students applying to maths-heavy university courses.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'Three papers',
      h2: 'What is on each OCR H240 paper?',
      lede: 'Paper 1 is pure on its own. Paper 2 puts pure beside statistics; Paper 3 puts pure beside mechanics. Each applied paper is split into two sections of roughly 50 marks.',
      body: [
        { kind: 'p', html: 'The H240 specification divides the subject into three areas, Pure Mathematics, Statistics and Mechanics, and gives each applied area a paper of its own, shared with pure. OCR lists this among the key features: "Applied content (statistics and mechanics) assessed on separate papers so that the content domains assessed on any given paper don\'t cover both at once." So a Paper 2 script never contains a forces question, and a Paper 3 script never contains a hypothesis test.' },
        { kind: 'table', caption: 'OCR A level Mathematics A H240: the three components', head: ['Component', 'What it assesses', 'Layout', 'Marks and time', 'Weight'], rows: [
          ['01 Pure Mathematics', 'Pure content only', 'A single section of 100 marks', '100 marks, 2 hours', 'One third'],
          ['02 Pure Mathematics and Statistics', 'Pure, then statistics, some items set in the pre-release large data set', 'Two sections of approximately 50 marks each', '100 marks, 2 hours', 'One third'],
          ['03 Pure Mathematics and Mechanics', 'Pure, then mechanics', 'Two sections of approximately 50 marks each', '100 marks, 2 hours', 'One third']
        ] },
        { kind: 'source', html: 'Source: Cambridge OCR A Level in Mathematics A (H240) specification, Version 3.1, section 1, from the <a class="ag-inline-link" href="https://www.ocr.org.uk/qualifications/as-and-a-level/mathematics-a-h230-h240-from-2017/" rel="noopener" target="_blank">OCR H230 and H240 page</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'Rules that shape the exam room',
          left: [
            'OCR\'s specification says formulae are given "in each assessment on pages 2 and 3 of the question paper", so students do not bring a booklet. It also promises "Separate Question Papers and Answer Booklets so that students can always see the whole of a question at one time".',
            'Each section "has a gradient of difficulty and consists of a mix of long and short questions." In practice that means the hardest marks in Paper 2 sit near the end of the pure section and again near the end of the statistics section, not just at the back of the paper.'
          ],
          rightH3: 'Rules that shape the course',
          right: [
            'H240 is linear: "All examined components must be taken in the same examination series at the end of the course." There is no banking of a Year 12 paper.',
            'If a student retakes, OCR says "They must retake all components of the qualification." That is worth knowing before anyone suggests resitting only the paper that went badly.'
          ] }
      ]
    },
    {
      id: 'commands', tint: 'deep', eyebrow: 'Command words',
      h2: 'What do Find, Determine and show detailed reasoning mean on OCR papers?',
      lede: 'They tell you how much working must appear. "Find" accepts an efficient calculator route; "Determine" wants justification; "show detailed reasoning" refuses calculator shortcuts as evidence of method.',
      body: [
        { kind: 'p', html: 'Section 2d of the specification prints OCR\'s meanings for its command words with examples, which is unusual and very useful. Under "Find, Solve, Calculate" OCR says working may be necessary but "no justification is required" and "A solution could be obtained from the efficient use of a calculator". Under "Determine" it says "justification should be given for any results found, including working where appropriate." The strongest instruction is the sentence "In this question you must show detailed reasoning." which OCR describes as "a restriction on what will be accepted as evidence of a complete method."' },
        { kind: 'table', mt: true, caption: 'OCR command words for H240, with what each asks of the student (restated from section 2d)', head: ['Instruction', 'What OCR expects', 'Calculator use as evidence'], rows: [
          ['Give, State, Write down', 'Neither working nor justification is required', 'Fine'],
          ['Find, Solve, Calculate', 'Working may help, but no justification is required', 'An efficient calculator method is acceptable'],
          ['Determine', 'Justification for any results, with working where appropriate', 'Results must be backed by reasoning'],
          ['Show that', 'A given result, so every step must be covered', 'The steps are the answer'],
          ['Verify', 'A clear substitution of the given value', 'Substitution must be shown'],
          ['Prove', 'A formal argument with variables defined and a conclusion', 'Not a substitute for argument'],
          ['Show detailed reasoning', 'A detailed and complete analytical method the reader can follow', 'May check, but cannot replace the method'],
          ['Hence; Hence or otherwise', 'Start from the previous result; or use it unless you have a valid alternative', 'Depends on the step'],
          ['Exact', 'No rounding; surds, e and pi kept in that form', 'Decimal answers lose the mark']
        ] },
        { kind: 'source', html: 'Source: H240 specification, Version 3.1, section 2d Command words. The wording in the middle column is our restatement except where quoted above.' },
        { kind: 'p', mt: true, html: 'OCR also says learners should simplify final answers "even if the examination question does not explicitly ask them to do so", and that a straight line should be given as y = mx + c or ax + by = c unless the question says otherwise. These are small habits, but they are stated rules, and we mark homework against them so they become automatic before Year 13 mocks.' },
        { kind: 'ol', mt: true, items: [
          'Read the instruction before the mathematics. Circle Find, Determine, Show that, Exact or detailed reasoning.',
          'Decide what evidence the instruction needs: an answer, a justified answer, every step, or a full analytical method.',
          'Choose the method that produces that evidence. A calculator equation solver suits Find; it does not satisfy detailed reasoning.',
          'Write the expression you put into the calculator, as OCR advises, with correct notation rather than "calculator notation".',
          'Finish in the requested form: exact, simplified, or to the stated accuracy.'
        ] }
      ]
    },
    {
      id: 'lds', tint: '', eyebrow: 'Large data set',
      h2: 'How does the OCR H240 large data set work?',
      lede: 'It is pre-released teaching material. Questions on Paper 2 reward familiarity with its context, but nobody is asked to remember the numbers.',
      body: [
        { kind: 'p', html: 'OCR describes the large data set as "a pre-released set or sets of data that should be used as teaching material throughout the course", published on the OCR website with its sources and metadata. The specification adds that "Any change to the data set will be made before the beginning of any given two year course and centres will be notified a year in advance." It is examined only on component 02.' },
        { kind: 'two', mt: true,
          leftH3: 'What the exam can assume',
          left: [
            'OCR says questions on Paper 2 will "give a material advantage to learners who have studied, and are familiar with, the large data set". They may use terms from the data without explaining them, or show summary statistics and diagrams drawn from it.',
            'They can also ask for interpretation "in ways which would be too demanding in an unfamiliar context". That is the real test: reading a chart about a familiar data set quickly and sensibly.'
          ],
          rightH3: 'What the exam will not do',
          right: [
            '"Knowledge of the actual data within the data set(s) will not be required in the examination", and there is no need "to enter large amounts of data into a calculator".',
            '"Learners will NOT have a printout of the pre-release data set available to them in the examination", although selected data or summaries may be printed in the paper.'
          ] },
        { kind: 'p', mt: true, html: 'OCR suggests seven classroom activities with the data: sampling, creating diagrams with spreadsheets, calculations, hypothesis testing against the data as a population, repeated sampling, modelling probabilities, and exploratory analysis. We follow that list in Year 12 using a spreadsheet, then in Year 13 we switch to the exam\'s angle: a printed summary from the data, and a question about what it does and does not show.' }
      ]
    },
    {
      id: 'calculator', tint: 'tint', eyebrow: 'Calculator',
      h2: 'Can you use a graphical calculator in OCR A level Maths?',
      lede: 'Yes. OCR permits a scientific or graphical calculator on all three papers, within the JCQ rules, and expects working alongside any result.',
      body: [
        { kind: 'p', html: 'The specification reads: "Learners are permitted to use a scientific or graphical calculator for all papers." It expects two features as a minimum, "an iterative function such as an ANS key" and "the ability to compute summary statistics and access probabilities from the binomial and normal distributions", and states that "Allowable calculators can be used for any function they can perform." Which models are allowed is set by the JCQ document Instructions for Conducting Examinations, which OCR names.' },
        { kind: 'table', mt: true, caption: 'OCR\'s three pieces of calculator advice, and the habit we teach for each', head: ['OCR advice (section 2c)', 'Habit we build'], rows: [
          ['Write down explicitly any expressions, including integrals, evaluated on the calculator', 'Write the integral with limits before giving its value'],
          ['Write down the values of any parameters and variables input', 'State B(n, p) or N(&mu;, &sigma;<sup>2</sup>) with numbers before a probability'],
          ['Use correct mathematical notation, not calculator notation', 'Write 2.4 &times; 10<sup>&minus;3</sup>, never 2.4E-3; write P(X &le; 2), not binomcdf']
        ] },
        { kind: 'p', mt: true, html: 'The permission and the command words work together. A graphical calculator can find a stationary point in seconds, and on a "Find" question that may be all that is needed. On a "show detailed reasoning" question the same screen earns nothing on its own. Students who learn both tools and both modes are not surprised in June.' }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples, ours',
      h2: 'One curve, three command words: worked examples we wrote',
      lede: 'The same mathematics, asked three ways, needs three different amounts of writing. These problems are ours, not OCR\'s.',
      body: [
        { kind: 'p', html: '<strong>Our curve.</strong> Take y = x e<sup>&minus;2x</sup>. We ask for its stationary point under three different instructions.' },
        { kind: 'three', mt: true, cells: [
          { h3: '"Find the coordinates"', p: 'A graphical calculator\'s maximum function gives (0.5, 0.184). Under OCR\'s meaning of Find, that is a complete answer, though writing dy/dx = 0 first costs only a line.' },
          { h3: '"Determine the coordinates"', p: 'Justify it: dy/dx = e<sup>&minus;2x</sup> &minus; 2x e<sup>&minus;2x</sup> = e<sup>&minus;2x</sup>(1 &minus; 2x). Since e<sup>&minus;2x</sup> &gt; 0, dy/dx = 0 only when x = 1/2, so y = 1/(2e), about 0.184.' },
          { h3: '"Exact coordinates"', p: 'The answer must be (1/2, 1/(2e)). Giving 0.184 here loses the final mark, because OCR defines exact as not rounded.' }
        ] },
        { kind: 'p', mt: true, html: '<strong>Our second problem, detailed reasoning.</strong> In this question you are told to show detailed reasoning. Solve 5<sup>x+1</sup> = 3<sup>2x</sup>, giving x to 3 significant figures.' },
        { kind: 'ol', mt: true, items: [
          'Take natural logarithms of both sides: (x + 1) ln 5 = 2x ln 3.',
          'Collect the x terms: x(2 ln 3 &minus; ln 5) = ln 5.',
          'So x = ln 5 &divide; (2 ln 3 &minus; ln 5) = 1.6094... &divide; 0.5878... ',
          'x = 2.74 to 3 significant figures. The intermediate evaluation in step 3 is shown on purpose: a solver key alone would not count as a complete analytical method.'
        ] },
        { kind: 'p', mt: true, html: '<strong>Our third problem, detailed reasoning with an integral.</strong> Evaluate the integral from 1 to 4 of (3&radic;x &minus; 2/x<sup>2</sup>) dx. Integrating gives [2x<sup>3/2</sup> + 2/x] from 1 to 4. At 4 this is 16 + 0.5 = 16.5; at 1 it is 2 + 2 = 4. The value is 12.5. Under detailed reasoning the antiderivative and both substitutions must be on the page; the calculator\'s integral key may only be used to check.' },
        { kind: 'p', mt: true, html: '<strong>Our fourth problem, Paper 3 style.</strong> A stone leaves flat ground at 25 m s<sup>&minus;1</sup>, 35&deg; up from the horizontal. With g = 9.8 m s<sup>&minus;2</sup>, its upward speed starts at 25 sin 35&deg; = 14.34 m s<sup>&minus;1</sup>, so it lands after 2 &times; 14.34 &divide; 9.8 = 2.93 s, having travelled 25 cos 35&deg; &times; 2.93 = 59.9 m sideways. The modelling sentence earns its own credit: the stone is a particle and air resistance is ignored, so a real stone would fall short.' },
        { kind: 'table', mt: true, caption: 'Six practice questions we wrote for H240 students (answers checked in Python)', head: ['#', 'Our question', 'Paper', 'Answer'], rows: [
          ['1', 'Solve 2 cos<sup>2</sup> x + 3 sin x = 3 for 0&deg; &le; x &le; 360&deg;, showing detailed reasoning.', '1 or any pure section', 'x = 30&deg;, 90&deg;, 150&deg;'],
          ['2', 'Find the sum to infinity of 6 + 3 + 1.5 + ...', 'Pure', '12'],
          ['3', 'Differentiate x<sup>3</sup> ln x and evaluate the derivative at x = e, exactly.', 'Pure', '4e<sup>2</sup>'],
          ['4', 'X ~ B(25, 0.2). Find P(X &le; 2).', '2', '0.0982'],
          ['5', 'T ~ N(64, 5<sup>2</sup>). Find P(60 &lt; T &lt; 72).', '2', '0.733'],
          ['6', 'A 4 kg block is pulled across a rough floor (&mu; = 0.4) by a horizontal 30 N force. Find its acceleration, g = 9.8.', '3', '3.58 m s<sup>&minus;2</sup>']
        ] },
        { kind: 'source', html: 'All examples and practice questions above were written by us on 31 October 2026; none is an OCR question. OCR publishes sample assessment material and past papers on its <a class="ag-inline-link" href="https://www.ocr.org.uk/qualifications/as-and-a-level/mathematics-a-h230-h240-from-2017/" rel="noopener" target="_blank">H240 qualification page</a>.' }
      ]
    },
    {
      id: 'grades', tint: '', eyebrow: 'Grades and entries',
      h2: 'How is OCR A level Maths graded, and who can enter?',
      lede: 'A* to E on the three papers together; anyone UK-based can enter privately through an OCR approved centre.',
      body: [
        { kind: 'p', html: 'OCR states that "A Level qualifications are graded on the scale: A*, A, B, C, D, E, where A* is the highest", and a learner below E is Unclassified, with only A* to E recorded on certificates. The assessment objectives are weighted as on every board: AO1 using standard techniques 50 per cent, AO2 reasoning and communicating 25 per cent, AO3 problem solving 25 per cent.' },
        { kind: 'table', mt: true, caption: 'Practical facts about H240 entry, from section 4 of the specification', head: ['Question', 'What OCR says'], rows: [
          ['Who can sit it privately?', 'Private candidates may enter; a private candidate "may be a part-time student, someone taking a distance learning course, or someone being tutored privately", and must be based in the UK'],
          ['How do they arrange it?', 'By contacting OCR approved centres, which may charge; OCR recommends arranging this early in the course'],
          ['Can papers be split across years?', 'No. All examined components are taken in the same series at the end of the course'],
          ['Accreditation', 'Ofqual accreditation number 603/1038/8'],
          ['Board name', 'The October 2025 issue updated covers and certificate titles "to reflect the new Cambridge OCR brand"']
        ] },
        { kind: 'p', mt: true, html: 'For a home-educated or privately entered student, our advice is to secure a centre place during Year 12, because the specification itself says to arrange it early. We are not an exam centre and cannot enter anyone for H240.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four stages from GCSE to the June papers',
    lede: 'Content and command words are taught together from the start rather than as a revision add-on.',
    table: { caption: 'Stages through OCR H240', head: ['Stage', 'Usually', 'Sign that it is done'], rows: [
      ['1. Algebra bridge', 'First half-term of Year 12', 'Rearranging, factorising and inequality work done fast and without slips'],
      ['2. Pure with instructions', 'Year 12', 'Calculus, logarithms and trigonometry answered under Find, Determine and Exact'],
      ['3. Applied pairs', 'Late Year 12 into Year 13', 'Statistics with the large data set; mechanics with modelling sentences'],
      ['4. Paper practice', 'Final two terms', 'Timed papers marked against the command words, not only the final answers']
    ] },
    left: { h3: 'Why stage two names the instruction', ps: [
      'A student who always uses the solver key may find a detailed reasoning question in June impossible to finish fully.',
      'So every pure homework mixes instructions on purpose.'
    ] },
    right: { h3: 'Why stage four marks the method', ps: [
      'Our feedback on a mock lists method marks lost to the instruction separately from marks lost to errors.',
      'Those two lists need different fixes.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around OCR A level Maths',
    lede: 'Grouped by when a sixth former tends to use them. A free class tells us which to suggest.',
    bands: [
      { num: 'I', h3: 'The A level itself', sub: 'Years 12 and 13', courses: [
        { code: 'UK / OC1 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, statistics and mechanics as H240 pairs them.' },
        { code: 'UK / OC1 / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'More depth on the Paper 2 applied section.' },
        { code: 'UK / OC1 / 03', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'For students adding Further Maths to H240.' }
      ] },
      { num: 'II', h3: 'Before and alongside', sub: 'Shoring up foundations', courses: [
        { code: 'UK / OC2 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'Higher-tier algebra secured before the sixth form.' },
        { code: 'UK / OC2 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Targeted repair when manipulation keeps slowing a student down.' },
        { code: 'UK / OC2 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Iteration and data explored in Python, matching OCR\'s technology suggestions.' }
      ] },
      { num: 'III', h3: 'After and beyond', sub: 'University preparation', courses: [
        { code: 'UK / OC3 / 01', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP', blurb: 'Admissions maths for applicants to selective degrees.' },
        { code: 'UK / OC3 / 02', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'First-year university calculus and linear algebra.' },
        { code: 'UK / OC3 / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'Statistics carried towards data and machine learning courses.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Every homework names its instruction',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Lessons are scheduled in UK time; our teachers work from India, whose clock does not change for summer time.',
    slots: [
      { time: 'After school', l: 'Most Year 12 groups meet here.' },
      { time: 'Later evening', l: 'Suits students with jobs or sport.' },
      { time: 'Weekend morning', l: 'Room for a full 2-hour paper.' }
    ],
    cells: [
      { h3: 'Mixed instructions', p: 'Find, Determine, Exact and detailed reasoning set side by side.' },
      { h3: 'Two modes of calculator', p: 'When the screen is enough, and when it only checks.' },
      { h3: 'Data set in context', p: 'Printed summaries from OCR\'s data, read and questioned.' },
      { h3: 'Modelling sentences', p: 'Assumptions written for every mechanics answer.' },
      { h3: 'Method feedback', p: 'Marks lost to the instruction listed apart from slips.' },
      { h3: 'Batch or 1-on-1', p: 'A group of 15 to 20, or a single student with one teacher.' }
    ]
  },

  projectsH2: 'Things students made in class',
  projectsLede: 'Built during lessons and not marked for any exam board. See more in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, shown unedited.',

  fees: {
    h2: 'Fees for OCR H240 classes',
    lede: 'Families outside India pay one monthly fee in US dollars. The opening class costs nothing, and we ask for payment only after you have chosen a course and a weekly slot.',
    free: ['A free H240 class on a topic you choose', 'A view of which command words cost marks', 'Booked by phone or WhatsApp'],
    group: ['15 to 20 sixth formers in one group', 'The same teacher through both years', 'Large data set tasks in Year 13', 'Lighter timetable in exam weeks'],
    one: ['A single student, one teacher', 'Paced around mocks and coursework in other subjects', 'Good for a full H240 retake']
  },

  faq: {
    eyebrow: 'H240 questions',
    h2: 'What students ask about OCR A level Maths',
    items: [
      { q: 'What is the difference between OCR A and OCR B (MEI) A level Maths?', a: 'Both are Cambridge OCR A levels. OCR A, H240, pairs pure with statistics on Paper 2 and with mechanics on Paper 3. OCR B (MEI), H640, pairs them the other way round and adds a pure paper with a comprehension section.' },
      { q: 'What is on OCR A level Maths Paper 2?', a: 'Pure mathematics in one section and statistics in the other, about 50 marks each. Some statistics items are set in the context of the pre-release large data set.' },
      { q: 'What is on OCR A level Maths Paper 3?', a: 'Pure mathematics and mechanics, again in two sections of about 50 marks. There is no statistics on Paper 3, because OCR keeps the two applied areas on separate papers.' },
      { q: 'Are formulae given in OCR A level Maths exams?', a: 'Yes. OCR prints formulae on pages 2 and 3 of each question paper. Anything not on that list, such as the standard derivatives in the specification, has to be known.' },
      { q: 'What does show detailed reasoning mean?', a: 'It means the solution must contain a complete analytical method that can be followed line by line. A calculator may be used to check, but its answer alone is not accepted as evidence of method.' },
      { q: 'Can I use a graphical calculator for OCR H240?', a: 'Yes. OCR allows a scientific or graphical calculator on all papers, within the JCQ rules. It must at least have an iterative function and binomial and normal probabilities.' },
      { q: 'Do I need to memorise the OCR large data set?', a: 'No. OCR says knowledge of the actual data will not be required, and you will not have a printout in the exam. What helps is familiarity with its context, gained by working with it during the course.' },
      { q: 'Can I resit just one OCR A level Maths paper?', a: 'No. OCR says learners retaking the qualification must retake all components, and all three papers are sat in the same series.' },
      { q: 'When are your H240 classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are shown in UK time.' },
      { q: 'Are you part of OCR?', a: 'No. Modern Age Coders is independent and has no link with OCR or Cambridge University Press and Assessment. The practice questions here are our own.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages for sixth formers',
    lede: 'Other boards, Further Maths and costs.',
    items: [
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition online', p: 'Our board-neutral A level page.' },
      { href: '/further-maths-tuition-online', label: 'Further maths tuition online', p: 'If H240 is paired with Further Maths.' },
      { href: '/tmua-preparation', label: 'TMUA preparation', p: 'The admissions test many maths applicants now sit.' },
      { href: '/a-level-maths-tutor-cost-uk', label: 'A level maths tutor cost in the UK', p: 'How families compare tuition options.' },
      { href: '/ocr-a-level-computer-science-h446-help', label: 'OCR A level Computer Science H446', p: 'The OCR computing A level, often taken with maths.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'An index of our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free H240 class',
    lede: 'Send a number and we will ring at a UK time that suits. The first lesson takes one topic under two different command words, which shows quickly where marks are slipping.',
    readFirst: 'Prefer to look around first? Our <a class="ag-inline-link" href="/courses">course list</a> gives each syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains lessons, and <a class="ag-inline-link" href="/student-labs">student labs</a> collects class projects.',
    note: 'WhatsApp is quickest and free from a UK phone. Replies come from our India team on a +91 number.',
    formNote: 'Nothing to pay and nothing to sign; we reply with a suggested time.'
  },

  footer: {
    cols: [
      { h4: 'Sixth-form maths', links: [
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/tmua-preparation', label: 'TMUA preparation' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'OCR and more', links: [
        { href: '/ocr-a-level-computer-science-h446-help', label: 'OCR Computer Science H446' },
        { href: '/a-level-maths-tutor-cost-uk', label: 'Tutor costs' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'OCR H240 classes, timed for UK evenings'
  },

  personalityCss: `
.ag-root.ag-ocl .ag-hero h1 { letter-spacing: -0.018em; font-weight: 690; }
.ag-root.ag-ocl .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-ocl .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-ocl .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ocl .ag-table td:first-child { font-weight: 640; }
.ag-root.ag-ocl .ag-steps li { padding-bottom: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Cambridge OCR A Level in Mathematics A (H240) specification, Version 3.1 (2026), first assessment 2018: component 01 Pure (single section, 100 marks), 02 Pure and Statistics and 03 Pure and Mechanics (two sections of about 50 marks each), each 2 hours and one third; formulae on pages 2 and 3 of each paper; separate question papers and answer booklets; scientific or graphical calculator on all papers with iterative function and binomial and normal probabilities; pre-release large data set examined on 02, data knowledge not required, no printout; command words in section 2d including show detailed reasoning; linear, all components in one series, retake all components; A* to E; UK-based private candidates; accreditation 603/1038/8; Cambridge OCR brand from October 2025.',
    localProject: 'The command word sets the method. The page tabulates the three H240 components, restates OCR\'s nine command words with what each demands of a calculator, gives a five-step reading routine, explains the pre-release data set rules and the calculator advice, then works one curve (y = x e^(-2x)) under Find, Determine and Exact, a detailed-reasoning logarithm equation (x = 2.74), a detailed-reasoning integral (12.5), a projectile (range 59.9 m) and a six-question practice set, all written by us.',
    requiredMentions: ['don\'t cover both at once', 'a restriction on what will be accepted as evidence of a complete method', 'Learners are permitted to use a scientific or graphical calculator for all papers.', 'centres will be notified a year in advance', 'an iterative function such as an ANS key', 'to reflect the new Cambridge OCR brand', '603/1038/8', 'x = ln 5 &divide; (2 ln 3 &minus; ln 5)', 'y = x e<sup>&minus;2x</sup>', 'They must retake all components of the qualification.'],
    sources: [
      { claim: 'Cambridge OCR A Level in Mathematics A (H240) specification, Version 3.1: components, marks, timings, formulae, calculators, large data set, command words, retakes, grading, private candidates and accreditation.', url: 'https://www.ocr.org.uk/Images/308723-specification-accredited-a-level-gce-mathematics-a-h240.pdf' },
      { claim: 'OCR AS and A Level Mathematics A (H230, H240) qualification page linking the specification and assessment materials.', url: 'https://www.ocr.org.uk/qualifications/as-and-a-level/mathematics-a-h230-h240-from-2017/' },
      { claim: 'Cambridge OCR A Level in Mathematics B (MEI) (H640) specification, Version 3.1: the comparison of the two OCR A level Maths specifications printed in section 1b of both documents.', url: 'https://www.ocr.org.uk/Images/308740-specification-accredited-a-level-gce-mathematics-b-mei-h640.pdf' }
    ],
    rejectedClaims: [
      'The name and contents of the current OCR A large data set: the specification describes the rules but the data file was not downloaded, so no topic is named.',
      'June 2027 exam dates for H240: OCR and JCQ timetables were not read (jcq.org.uk returned HTTP 403 to earlier checks), so no date is printed.',
      'Grade boundaries and results statistics: not read at a primary source and not printed.',
      'That OCR A is easier or harder than another board: not claimed; only structural differences are described.',
      'Any OCR past paper, sample paper or specification example question: not reproduced; the specification\'s own command-word examples are described in our words and every worked problem is ours.',
      'Any grade promise, or any connection with OCR: both declined on the page.'
    ]
  }
};
