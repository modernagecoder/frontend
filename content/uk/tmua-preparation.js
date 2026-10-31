'use strict';
// TMUA preparation (ag- exam door, UK and US exams cluster, row UK071).
// UAT-UK (uat-uk.org), which administers the TMUA, did not resolve from here on 31 October 2026 (curl exit 6); not
// worked around. Every TMUA fact on the page therefore comes from a university that requires the test, read raw with
// curl on 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/tmua-preparation/):
//  - Imperial College London, TMUA page: computer-based; required for "Department of Computing, including joint
//    Mathematics and Computer Science programmes", "Department of Mathematics" and "BSc Economics, Finance and Data
//    Science"; Test window 1: 12 to 16 October 2026 (China, Hong Kong, Macau 15 to 16 October); Test window 2: 4 to 8
//    January 2027 (China, Hong Kong, Macau 8 January); booking window 1 opens 20 July 2026 at 15.00 (UK time), closes 28
//    September 2026 at 18.00 (UK time); window 2 opens 28 October 2026 at 15.00, closes 21 December 2026 at 18.00;
//    "Booking for the January test sitting is now open"; managed by UAT-UK, Pearson test centres; fees "determined by
//    the test centre location"; two parts of 75 minutes and 20 multiple choice questions: "Applications of Mathematical
//    Knowledge" and "Mathematical Reasoning"; "You do not lose marks for wrong answers"; users listed: Imperial,
//    Cambridge, Durham, LSE, UCL, Oxford, Warwick; "you need to take the TMUA only once per application cycle"; "Only
//    your first test score will be considered."; Cambridge and Oxford applicants must sit October; bursary for UK
//    candidates in financial need; access arrangements 1 June to 14 September 2026 (window 1), 5 October to 7 December
//    2026 (window 2).
//  - Imperial, Understanding your ESAT and TMUA scores: "reported on a scale that runs from 1 (low) to 9 (high)",
//    "recorded to one decimal place", "There aren't any grade boundaries or pass marks", "Scores are statistically
//    equated", "For the TMUA, you will receive a single overall score".
//  - University of Cambridge, TMUA page: required for Computer Science, Economics, Mathematics; 12 to 16 October 2026;
//    January 4 to 8 2027 for mature January applicants; "there is no need to take a preparation course or to do much
//    preparation beyond familiarising yourself with the test format and style of questions"; read the specification and
//    notes on Logic and Proof.
//  - University of Warwick, admissions tests page: TMUA required for Computer Science (G400, G403, GN42, G190, G4G3),
//    TMUA or STEP for Mathematics (G100, G103), optional for Economics and Statistics; "In the last admissions cycle (2025
//    entry), the majority of offers were made to applicants with a TMUA score of 5.0 and above."; CS requirement "will
//    not be published"; final Mathematics threshold "around April"; Statistics "either 5.0 in TMUA, or grade 2 in any
//    STEP"; the same no-preparation-course sentence as Cambridge; MEI free online TMUA course for Year 13 state-school
//    students; Warwick Mathematics Institute past paper walkthroughs; "We will only accept the results from one test in
//    each admissions cycle".
//  - University of Oxford Mathematical Institute, TMUA page: content specification "covers mathematics usually taught at
//    AS-level or Higher Level GCSE, plus a small number of topics from the full A-level Mathematics"; "the second section
//    only applying to Paper 2"; Notes on Mathematics and Notes on Logic and Proof on the UAT-UK site.
// Durham's admissions tests page returned HTTP 403; LSE's guessed URL returned 404; UCL not read. They are named only as
// Imperial lists them. No TMUA question is reproduced.
// Our own material, labelled on the page: 75 minutes / 20 = 3 minutes 45 seconds per question; the two-pass plan; the
// quadratic with roots differing by 2 (k = 8); the necessary-and-sufficient pair x > 2 and x^2 > 4; the converse and
// contrapositive of "if n is a multiple of 6 then n is even"; a flawed proof that x^2 >= x for all real x (missing case
// 0 < x < 1, counterexample x = 1/2); and a six-question practice set, answers checked. Lesson family: reading a
// mathematical statement exactly.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'TMUA', blurb: 'Forty multiple-choice questions, half of them about logic rather than numbers. The 2026 to 2027 windows, who requires the TMUA, and how scores are reported.' },
  slug: 'tmua-preparation',
  code: 'tp',
  accent: '#386C59',
  accentRationale: 'TMUA preparation: a pine green #386C59 from the cluster allocation, about 5.9:1 on #FBF8F2 and above 4.5:1 on every paper tint, greener than the Oxford teal so the two admissions-test pages stay apart',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'TMUA preparation',
  title: 'TMUA Preparation: Format, 2026 to 2027 Dates and Who Needs It',
  description: 'TMUA preparation for 2027 entry: two 75-minute papers, the October 2026 and January 2027 windows, the universities that require it, and a logic lesson of ours.',
  ogDescription: 'The TMUA is forty multiple-choice questions in two papers, and the second is about logic. Windows, scores on the 1 to 9 scale, which universities ask for it, and how to read a statement exactly.',
  twitterDescription: 'TMUA preparation: format, windows, universities and the logic paper, from university admissions pages.',
  pageName: 'TMUA Preparation',
  webPageDescription: 'A guide to the Test of Mathematics for University Admission for 2027 entry, built from the admissions pages of Imperial College London, the University of Cambridge, the University of Warwick and the University of Oxford, with original practice on Paper 2 logic.',
  courseDescription: 'Live online TMUA preparation for Year 13 applicants to mathematics, computer science and economics: the content specification, the logic and proof of Paper 2, and timed practice at three minutes forty-five a question.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'TMUA preparation',
  navLinks: [
    { href: '#format', label: 'Format' },
    { href: '#who', label: 'Who requires it' },
    { href: '#windows', label: 'Windows' },
    { href: '#logic', label: 'Paper 2 logic' },
    { href: '#scores', label: 'Scores' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Year 13 &middot; 12 to 16 October 2026 and 4 to 8 January 2027',
  h1: 'TMUA preparation: the Test of Mathematics for University Admission',
  lede: 'The TMUA looks like a maths test and is half a logic test. Its first paper asks you to apply school mathematics in unfamiliar ways; its second, Mathematical Reasoning, asks whether a statement follows, whether a condition is necessary or sufficient, and where an argument breaks. Both papers are 75 minutes for 20 multiple-choice questions, with no calculator. Cambridge, Imperial, Oxford and Warwick use it, among others, for mathematics, computer science and some economics courses. This page sets out the format and windows for 2027 entry from those universities\' own admissions pages, explains how the scaled score works, works through the kind of logic Paper 2 tests with examples of our own, and is honest about how much preparation the universities say you need.',
  secondaryCta: { href: '#logic', label: 'Try the Paper 2 logic lesson' },
  wa: 'Hello Modern Age Coders, I am taking the TMUA and would like a free class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; TMUA facts from Imperial, Cambridge, Warwick and Oxford pages',
  spec: [
    ['Full name', 'Test of Mathematics for University Admission'],
    ['Run by', 'UAT-UK, at Pearson VUE test centres'],
    ['Paper 1', 'Applications of Mathematical Knowledge'],
    ['Paper 2', 'Mathematical Reasoning'],
    ['Each paper', '20 multiple-choice questions, 75 minutes'],
    ['Score', '1 to 9, to one decimal place'],
    ['Windows', '12 to 16 October 2026; 4 to 8 January 2027'],
    ['Start', 'One free class']
  ],
  capsuleQ: 'In short',
  capsule: 'The TMUA (Test of Mathematics for University Admission) is a computer-based admissions test run by UAT-UK at Pearson VUE centres. It has two papers, Applications of Mathematical Knowledge and Mathematical Reasoning, each with 20 multiple-choice questions in 75 minutes, no calculator, and no marks lost for wrong answers. Imperial lists seven universities that use it for some courses: Imperial, Cambridge, Durham, LSE, UCL, Oxford and Warwick. Windows for 2027 entry are 12 to 16 October 2026 and 4 to 8 January 2027. Modern Age Coders runs live online TMUA classes, in groups of 15 to 20 or one-to-one.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a TMUA candidate',
    lede: 'One for the test, and the two A Levels its questions draw on.',
    items: [
      { course: 'tmua-mat-step-preparation-course', code: 'TP / 01', title: 'TMUA course', note: 'Sixth formers aged 16 to 18: both papers, the logic of Paper 2, and timed sets.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'TP / 02', title: 'A Level Maths', note: 'Paper 1 lives mostly in AS-level and GCSE Higher content, plus some of the full A Level.' },
      { course: 'a-level-further-maths-course', code: 'TP / 03', title: 'A Level Further Maths', note: 'Not needed for the TMUA, but expected for many of the courses that set it.' }
    ]
  },

  sections: [
    {
      id: 'format', tint: 'tint', eyebrow: 'The two papers',
      h2: 'What is on the TMUA, and how long is it?',
      lede: 'Two papers of 75 minutes, each with 20 multiple-choice questions, two and a half hours in total. Imperial and Warwick describe Paper 1 as applying mathematics in new situations and Paper 2 as reasoning and simple ideas from elementary logic.',
      body: [
        { kind: 'table', caption: 'TMUA format, from the Imperial, Warwick and Cambridge admissions pages (read 31 October 2026)', head: ['', 'Paper 1', 'Paper 2'], rows: [
          ['Name', 'Applications of Mathematical Knowledge', 'Mathematical Reasoning'],
          ['What it assesses', 'Your ability to apply your knowledge of mathematics in new situations', 'Your ability to deal with mathematical reasoning, and simple ideas from elementary logic'],
          ['Questions', '20 multiple-choice', '20 multiple-choice'],
          ['Time', '75 minutes', '75 minutes'],
          ['Aids', 'No calculator or dictionary', 'No calculator or dictionary'],
          ['Wrong answers', 'Cost nothing', 'Cost nothing'],
          ['Content', 'Section 1 of the content specification', 'Sections 1 and 2; Section 2 covers logic and proof']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The content is school mathematics',
          left: [
            'Oxford\'s Mathematical Institute summarises the content specification as mathematics "usually taught at AS-level or Higher Level GCSE, plus a small number of topics from the full A-level Mathematics". There is no Further Maths in it, which is why the test can be set to applicants from many school systems.',
            'What makes it hard is the setting. A Paper 1 question rarely announces its topic; a student has to recognise that a question about areas is really about a quadratic, or that a sequence question is really about inequalities.'
          ],
          rightH3: 'Paper 2 is the unusual one',
          right: [
            'The second section of the specification applies only to Paper 2, Oxford says, and covers logic and proof: what a statement means, what follows from it, and how arguments go wrong. Most A Level courses touch these ideas lightly, if at all.',
            'Cambridge and Warwick both recommend reading the specification and the notes on Logic and Proof that UAT-UK publishes. For most applicants, those notes are the single most useful document, and they are free.'
          ] },
        { kind: 'table', mt: true, caption: 'Pacing, our arithmetic from the published format', head: ['Measure', 'Value', 'What it means'], rows: [
          ['Time per question', '75 minutes / 20 = 3 minutes 45 seconds', 'A question that has taken six minutes is costing another'],
          ['Marks lost for a wrong answer', 'None, per Cambridge and Imperial', 'Never leave a blank; a guess cannot lower the score'],
          ['Our two-pass plan', 'First pass about 50 minutes, second about 25', 'Answer what is quick, flag and guess the rest, then return to the flags']
        ] },
        { kind: 'source', html: 'Sources: Imperial College London <a class="ag-inline-link" href="https://www.imperial.ac.uk/study/apply/undergraduate/process/admissions-tests/tmua/" rel="noopener" target="_blank">TMUA page</a>, the University of Warwick <a class="ag-inline-link" href="https://warwick.ac.uk/study/undergraduate/applying/admissions-tests/" rel="noopener" target="_blank">admissions tests page</a>, the University of Cambridge <a class="ag-inline-link" href="https://www.undergraduate.study.cam.ac.uk/apply/how/maths-admission-test" rel="noopener" target="_blank">TMUA page</a> and the Oxford Mathematical Institute <a class="ag-inline-link" href="https://www.maths.ox.ac.uk/study-here/undergraduate-study/tmua" rel="noopener" target="_blank">TMUA page</a>, read 31 October 2026. The UAT-UK website could not be reached from our side that day, so no fact here is taken from it directly. Pacing and the two-pass plan are ours. We are not connected with UAT-UK, Pearson VUE or any university named.' }
      ]
    },
    {
      id: 'who', tint: 'deep', eyebrow: 'Who asks for it',
      h2: 'Which universities require the TMUA?',
      lede: 'Imperial lists seven: Imperial, Cambridge, Durham, LSE, UCL, Oxford and Warwick, for certain courses in mathematics, economics and computer science. Each university decides which of its courses require it, so the course page is the authority.',
      body: [
        { kind: 'table', caption: 'Courses that use the TMUA, from each university\'s own admissions page where we could read it (31 October 2026)', head: ['University', 'Courses', 'Required or optional', 'Window'], rows: [
          ['University of Cambridge', 'Computer Science, Economics, Mathematics', 'Required', 'October; January only for mature applicants in the January round'],
          ['University of Oxford', 'Mathematics, Computer Science and joint honours', 'Required (it replaced the MAT from 2026)', 'October only'],
          ['Imperial College London', 'Department of Computing, including joint Mathematics and Computer Science; Department of Mathematics; BSc Economics, Finance and Data Science', 'Required', 'October or January'],
          ['University of Warwick', 'Computer Science (G400, G403, GN42) and Discrete Mathematics (G190, G4G3)', 'Required, except for contextual offers', 'October or January'],
          ['University of Warwick', 'Mathematics (G100, G103)', 'TMUA or STEP', 'October or January'],
          ['University of Warwick', 'Economics; Mathematics and Statistics, MORSE, Data Science', 'Optional', 'October or January'],
          ['Durham, LSE, UCL', 'Some mathematics, economics or computer science courses', 'Named as users by Imperial; check each course page', 'Not verified by us']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Sit it once',
          left: [
            'A student applying to several of these universities takes the test once per cycle. Imperial says "Only your first test score will be considered", and Warwick says it accepts the results from one test in each admissions cycle. A student who sits in October cannot sit again in January to improve.',
            'Because Oxford and Cambridge require the October window, anyone applying to either must sit in October, and that score is the one every other university sees too.'
          ],
          rightH3: 'Read the course, not the list',
          right: [
            'Warwick shows why. Computer Science requires the TMUA; Mathematics accepts TMUA or STEP; Economics and Statistics make it optional, with Warwick saying applicants who skip it are not at a disadvantage for Statistics. The same university, four different rules.',
            'For computer science applicants, note that Warwick excludes Computer Systems Engineering (G406, G408) from the requirement. Course codes matter, and each university lists them.'
          ] },
        { kind: 'source', html: 'Course lists from the Cambridge, Imperial and Warwick pages above, and the Oxford <a class="ag-inline-link" href="https://www.cs.ox.ac.uk/admissions/undergraduate/how_to_apply/" rel="noopener" target="_blank">Computer Science how to apply page</a>. Durham\'s admissions tests page refused our request on 31 October 2026 and we did not retry it; LSE and UCL are named as Imperial lists them.' }
      ]
    },
    {
      id: 'windows', tint: 'tint', eyebrow: 'Dates for 2027 entry',
      h2: 'When is the TMUA in 2026 and 2027?',
      lede: 'There are two windows: 12 to 16 October 2026 and 4 to 8 January 2027. Booking for October closed on 28 September 2026; booking for January opened on 28 October 2026 and closes on 21 December 2026 at 18.00 UK time.',
      body: [
        { kind: 'table', caption: 'TMUA windows and deadlines for 2027 entry, from Imperial\'s TMUA page', head: ['', 'Window 1', 'Window 2'], rows: [
          ['Test dates', '12 to 16 October 2026', '4 to 8 January 2027'],
          ['China, Hong Kong and Macau', '15 to 16 October 2026 only', '8 January 2027 only'],
          ['Booking opens', '20 July 2026, 15.00 UK time', '28 October 2026, 15.00 UK time'],
          ['Booking closes', '28 September 2026, 18.00 UK time', '21 December 2026, 18.00 UK time'],
          ['Access arrangement requests', '1 June to 14 September 2026', '5 October to 7 December 2026'],
          ['Who must use it', 'All Oxford and Cambridge applicants', 'Others who did not sit in October']
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Create a UAT-UK account.</strong> Imperial says one account is enough even for a student who sits more than once across cycles.',
          '<strong>Apply for a bursary first, if eligible.</strong> UK candidates in financial need can sit free, but Imperial says the bursary must be approved before booking.',
          '<strong>Request access arrangements in their window.</strong> Rest breaks or extra time are available for learning difficulties, disabilities, sensory impairments and medical conditions.',
          '<strong>Book the date and the Pearson centre.</strong> Imperial says the fee depends on the test centre location, not on nationality or residence.',
          '<strong>Sit the test.</strong> Two 75-minute papers on screen, no calculator or dictionary.',
          '<strong>Wait for the university.</strong> Warwick releases Mathematics decisions in batches from November and sets its final threshold around April.'
        ] },
        { kind: 'source', html: 'Windows, booking times and access arrangement dates from Imperial\'s TMUA page; the October requirement for Oxford and Cambridge from Imperial and Cambridge; Warwick\'s decision timing from its admissions tests page; all read 31 October 2026. Fees are set by UAT-UK and are not printed here.' }
      ]
    },
    {
      id: 'logic', tint: 'plain', eyebrow: 'Paper 2, ours',
      h2: 'How do you answer TMUA Paper 2 logic questions?',
      lede: 'By reading the statement before doing any mathematics. Most Paper 2 errors are not calculation errors; they are a converse taken for the original, a condition called sufficient when it is only necessary, or a proof accepted because its conclusion is true. These four examples are ours, written for this page.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Converse and contrapositive', p: 'Take "if n is a multiple of 6, then n is even". True. Its converse, "if n is even, then n is a multiple of 6", is false: n = 4. Its contrapositive, "if n is odd, then n is not a multiple of 6", is true, and always agrees with the original.' },
          { h3: 'Necessary or sufficient', p: 'Is x &gt; 2 sufficient for x<sup>2</sup> &gt; 4? Yes: any x above 2 has a square above 4. Is it necessary? No: x = &minus;3 gives x<sup>2</sup> = 9 without x &gt; 2. The exact condition is x &gt; 2 or x &lt; &minus;2.' },
          { h3: 'Negating "for all"', p: 'The negation of "every student passed some test" is not "no student passed any test". It is "some student passed no test". Swap each quantifier and negate what is left.' }
        ] },
        { kind: 'p', mt: true, html: '<strong>Our flawed proof.</strong> Claim: x<sup>2</sup> &ge; x for every real number x. "Proof": x<sup>2</sup> &minus; x = x(x &minus; 1). If x &ge; 1, both factors are at least zero, so the product is too. If x &le; 0, both factors are at most zero, so the product is at least zero. Therefore x<sup>2</sup> &ge; x always.' },
        { kind: 'two', mt: true,
          leftH3: 'Where it fails',
          left: [
            'Each case is argued correctly. The error is in what is missing: the cases x &ge; 1 and x &le; 0 do not cover the numbers strictly between 0 and 1. There, x is positive and x &minus; 1 is negative, so the product is negative. Try x = 1/2: x<sup>2</sup> = 1/4, which is less than 1/2. The claim is false.',
            'Paper 2 questions of this kind usually offer options such as "the proof is correct", "the error is in line 2" or "the error is that a case is omitted". Reading each line for truth will not find this mistake; asking "have all possibilities been covered?" will.'
          ],
          rightH3: 'A Paper 1 contrast',
          right: [
            'Paper 1 rewards spotting structure quickly. Our example: the roots of x<sup>2</sup> &minus; 6x + k = 0 differ by 2. Find k. Call the roots r and r + 2; their sum is 6, so 2r + 2 = 6 and r = 2. The roots are 2 and 4 and k is their product, 8. No quadratic formula needed.',
            'In the test, that is a forty-second question if the student thinks about sum and product first and a four-minute one if they do not. The time saved goes to a Paper 2 question that needs it.'
          ] },
        { kind: 'table', mt: true, caption: 'Six practice questions of our own, with answers', head: ['#', 'Our question', 'Answer'], rows: [
          ['1', 'True or false: x<sup>2</sup> &minus; 4x + 5 &gt; 0 for every real x.', 'True: it equals (x &minus; 2)<sup>2</sup> + 1'],
          ['2', 'What is the least value of x<sup>2</sup> &minus; 6x + 13, and where?', '4, at x = 3'],
          ['3', 'What is the sum of the first 20 odd numbers?', '400'],
          ['4', 'True or false: if ab is irrational, then at least one of a and b is irrational.', 'True: its contrapositive is that two rationals multiply to a rational'],
          ['5', 'How many integers n satisfy n<sup>2</sup> &lt; 50?', '15: from &minus;7 to 7'],
          ['6', 'Is "n<sup>2</sup> is a multiple of 4" necessary, sufficient, both or neither for "n is even"?', 'Both, for integers n']
        ] },
        { kind: 'source', html: 'All examples and practice questions are ours, written on 31 October 2026, and are not TMUA questions. UAT-UK publishes official practice papers, and Warwick\'s Mathematics Institute publishes walkthroughs of selected past questions; Oxford also ran free TMUA webinars in the summer of 2026, with recordings.' }
      ]
    },
    {
      id: 'scores', tint: 'deep', eyebrow: 'Scores and preparation',
      h2: 'How is the TMUA scored, and what is a good score?',
      lede: 'Scores run from 1 to 9 to one decimal place, with no pass mark and no grade boundaries. Universities read them alongside the rest of the application, and only Warwick, among the pages we read, has published anything like a figure.',
      body: [
        { kind: 'table', caption: 'What the universities say about TMUA scores (read 31 October 2026)', head: ['Source', 'What it says'], rows: [
          ['Imperial', 'Scores are "reported on a scale that runs from 1 (low) to 9 (high)", "recorded to one decimal place" and "statistically equated" across test versions; the TMUA gives a single overall score'],
          ['Imperial', 'A high score does not mean an application will succeed, and a low score does not mean it will fail'],
          ['Warwick', 'For 2025 entry, "the majority of offers were made to applicants with a TMUA score of 5.0 and above" for Mathematics, with some below 5.0 after holistic assessment'],
          ['Warwick', 'Computer Science: the exact requirement is set once all results are in and "will not be published"'],
          ['Warwick', 'Statistics and related courses: offers may be met by 5.0 in TMUA, or grade 2 in any STEP, or by A Level or IB grades'],
          ['Cambridge', 'There is no pass or fail; the final score is based on the number of correct answers']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the universities say about preparing',
          left: [
            'Cambridge and Warwick use the same sentence, and it belongs on any page selling TMUA classes: "there is no need to take a preparation course or to do much preparation beyond familiarising yourself with the test format and style of questions." Both recommend the specification and the Logic and Proof notes.',
            'There is also free structured help. Warwick points to MEI, an education charity, which runs a free online TMUA course for Year 13 students at state-funded schools, academies and colleges.'
          ],
          rightH3: 'Where a class still helps',
          right: [
            'A student whose school course never mentioned contrapositives or necessary conditions may find Paper 2 genuinely new, and some international curricula reach AS-level topics in a different order. A few weeks of teaching can close that gap faster than reading alone.',
            'Some students simply work better with a teacher and a group. That is a fair reason too, provided nobody pretends the test needs coaching to pass. It has no pass mark, and we promise no score.'
          ] },
        { kind: 'source', html: 'Score statements from Imperial\'s <a class="ag-inline-link" href="https://www.imperial.ac.uk/study/apply/undergraduate/process/admissions-tests/understanding-your-esat-and-tmua-scores/" rel="noopener" target="_blank">Understanding your ESAT and TMUA scores</a> page and Warwick\'s and Cambridge\'s admissions pages, read 31 October 2026. Warwick\'s 5.0 describes its own 2025 offers and is not a requirement elsewhere.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A route to the October window',
    h2: 'Four stages before the test',
    lede: 'Our suggested order for a Year 12 student sitting next autumn, compressed for anyone sitting in January 2027. Each stage ends with something the student can do, not a date.',
    table: { caption: 'Our TMUA plan', head: ['When', 'Stage', 'The sign it is secure'], rows: [
      ['Year 12, spring', '1. AS-level pure in place', 'Algebra, coordinate geometry, sequences, logs and basic calculus are automatic'],
      ['Year 12, summer', '2. Logic and proof learned', 'Can state the converse, contrapositive and negation of any statement without hesitating'],
      ['Year 13, early autumn', '3. Untimed official practice', 'Gets most questions right with no clock, and knows why the wrong ones were wrong'],
      ['Final four weeks', '4. Timed papers, two passes', 'Finishes both papers with no blanks and time to check the flagged questions']
    ] },
    left: { h3: 'If January is the window', ps: [
      'Booking is open until 21 December 2026. Spend the first fortnight on the Logic and Proof notes and the rest on timed practice papers.',
      'Remember that a January score cannot be used for Oxford or Cambridge. It is the right window only for applicants who are not applying to either.'
    ] },
    right: { h3: 'If the test is next October', ps: [
      'Use Year 12 to make A Level pure fluent and to learn logic properly. Neither needs test papers yet.',
      'Applicants also sitting STEP for Cambridge or Warwick will find the two complement each other: the TMUA rewards speed and precision, STEP rewards stamina and depth.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'What we teach a TMUA candidate',
    lede: 'Four groups, sorted by the course the student is applying for.',
    bands: [
      { num: 'I', h3: 'The test', sub: 'Both papers', courses: [
        { code: 'TP / T / 01', slug: 'tmua-mat-step-preparation-course', title: 'TMUA, MAT and STEP preparation', blurb: 'Logic, proof and timed sets.' },
        { code: 'TP / T / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Harder problems for spare evenings.' },
        { code: 'TP / T / 03', slug: 'gre-gmat-quant-maths-prep-course', title: 'Quantitative reasoning', blurb: 'Fast multiple-choice technique.' }
      ] },
      { num: 'II', h3: 'Mathematics applicants', sub: 'A Level and IB', courses: [
        { code: 'TP / M / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A Level Maths', blurb: 'The source of Paper 1.' },
        { code: 'TP / M / 02', slug: 'a-level-further-maths-course', title: 'A Level Further Maths', blurb: 'Expected by most courses that set the TMUA.' },
        { code: 'TP / M / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'For Diploma students applying in the UK.' }
      ] },
      { num: 'III', h3: 'Computer science applicants', sub: 'Cambridge, Imperial, Oxford, Warwick', courses: [
        { code: 'TP / C / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'Reasoning about programs.' },
        { code: 'TP / C / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Logic under a time limit.' },
        { code: 'TP / C / 03', slug: 'cambridge-a-level-computer-science-9618-course', title: 'Cambridge A Level Computer Science', blurb: 'For 9618 students.' }
      ] },
      { num: 'IV', h3: 'Economics applicants', sub: 'Cambridge, Imperial, Warwick', courses: [
        { code: 'TP / E / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The mathematics of economic data.' },
        { code: 'TP / E / 02', slug: 'complete-business-finance-mathematics-mastery', title: 'Business and finance mathematics', blurb: 'Growth, interest and optimisation.' },
        { code: 'TP / E / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Data analytics mathematics', blurb: 'Working with real datasets.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live TMUA classes through the autumn and winter',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday evenings', l: 'Logic and content, after sixth form.' },
      { time: 'Weekend mornings', l: 'Full timed papers, both halves.' },
      { time: '1-on-1', l: 'A single applicant with a single gap.' }
    ],
    cells: [
      { h3: 'Statements first', p: 'Every Paper 2 lesson starts by rewriting a statement three ways before any algebra.' },
      { h3: 'The clock, later', p: 'Accuracy without time pressure comes first; the 3 minutes 45 seconds arrive in the final weeks.' },
      { h3: 'Error log', p: 'Each wrong answer is labelled: content gap, misread statement or pacing.' },
      { h3: 'Groups of 15 to 20', p: 'Wrong answers are compared openly, which is how logic errors become visible.' },
      { h3: 'Original questions', p: 'We write our own practice; students sit UAT-UK\'s papers themselves.' },
      { h3: 'No score promised', p: 'The TMUA has no pass mark and we promise no number on its scale.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'A selection of projects our students have published in maths, code and machine learning. See the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Verbatim reviews from our Google business profile.',

  fees: {
    h2: 'Fees',
    lede: 'The test fee goes to UAT-UK and depends on the test centre; bursaries exist for UK candidates in financial need. Our classes are billed monthly with nothing to join, and most TMUA students stop after their window.',
    free: ['A free first class', 'Five Paper 2 statements, read together', 'No card details'],
    group: ['Groups of 15 to 20', 'A steady teacher', 'Timed sets reviewed', 'Monthly, cancel when done'],
    one: ['One student, one teacher', 'Built on the error log', 'For a near window']
  },

  faq: {
    eyebrow: 'TMUA questions',
    h2: 'What TMUA candidates and parents ask',
    items: [
      { q: 'What is the TMUA?', a: 'The Test of Mathematics for University Admission, a computer-based admissions test administered by UAT-UK at Pearson VUE centres. Universities use it for certain mathematics, computer science and economics courses.' },
      { q: 'How long is the TMUA?', a: 'Two and a half hours: two papers, each of 75 minutes with 20 multiple-choice questions. Paper 1 is Applications of Mathematical Knowledge and Paper 2 is Mathematical Reasoning.' },
      { q: 'When is the TMUA for 2027 entry?', a: 'Imperial lists two windows: 12 to 16 October 2026 and 4 to 8 January 2027. Booking for January opened on 28 October 2026 and closes on 21 December 2026 at 18.00 UK time.' },
      { q: 'Which universities use the TMUA?', a: 'Imperial lists Imperial, Cambridge, Durham, LSE, UCL, Oxford and Warwick. Each decides which courses need it, so check the course page; at Warwick, for example, it is required for Computer Science and optional for Economics.' },
      { q: 'Can I use a calculator in the TMUA?', a: 'No. Cambridge and Warwick say you will not be able to use a calculator or dictionary, and Oxford says no calculators are permitted for the test.' },
      { q: 'Is there negative marking in the TMUA?', a: 'No. Cambridge and Imperial say you do not lose marks for wrong answers, so it is worth answering every question, even with a guess.' },
      { q: 'What is a good TMUA score?', a: 'Scores run from 1 to 9 to one decimal place and there is no pass mark. Warwick says most of its 2025-entry Mathematics offers went to applicants scoring 5.0 or above, but that figure is Warwick\'s own and not a target elsewhere.' },
      { q: 'Can I take the TMUA twice?', a: 'Only once per admissions cycle counts. Imperial says only your first test score will be considered, and Oxford and Cambridge applicants must sit the October window.' },
      { q: 'Do I need a TMUA tutor?', a: 'Cambridge and Warwick say there is no need for a preparation course beyond knowing the format and question style. A class helps most when logic and proof are new, or when a student wants a teacher to practise with.' },
      { q: 'What days are classes on?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with UAT-UK?', a: 'No. Our classes are entirely separate from UAT-UK, Pearson VUE and every university on this page. Students register and book the test themselves.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Other pages for TMUA applicants',
    lede: 'The school courses the test draws on, and pages for computer science applicants.',
    items: [
      { href: '/a-level-maths-tuition-online', label: 'A Level Maths tuition online', p: 'Paper 1 content, taught at depth.' },
      { href: '/ib-maths-tuition-online', label: 'IB Maths tuition online', p: 'For Diploma students heading to UK universities.' },
      { href: '/further-maths-tuition-online', label: 'Further Maths tuition online', p: 'Often expected alongside the test, never examined in it.' },
      { href: '/ocr-a-level-computer-science-h446-help', label: 'OCR A Level Computer Science H446', p: 'For computer science applicants on the OCR course.' },
      { href: '/aqa-a-level-computer-science-7517-help', label: 'AQA A Level Computer Science 7517', p: 'The AQA route, paper by paper.' },
      { href: '/maths-tuition-in-london', label: 'Maths tuition in London', p: 'For families near LSE, UCL and Imperial.' }
    ]
  },

  start: {
    h2: 'Book a free TMUA class',
    lede: 'Say which window you are sitting and which courses you are applying for. The free class reads five Paper 2 statements with you and shows where your reasoning is solid and where it slips.',
    readFirst: 'Before booking, you can browse <a class="ag-inline-link" href="/courses">our courses</a> or read about <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'Lessons are live from India at a time fixed in UK time. WhatsApp tends to be the quickest way to reach us from a UK number.',
    formNote: 'Nothing to pay and no card; we answer once to set a time.'
  },

  footer: {
    cols: [
      { h4: 'Before university', links: [
        { href: '/a-level-maths-tuition-online', label: 'A Level Maths tuition' },
        { href: '/further-maths-tuition-online', label: 'Further Maths tuition' },
        { href: '/ib-maths-tuition-online', label: 'IB Maths tuition' },
        { href: '/aqa-a-level-computer-science-7517-help', label: 'AQA Computer Science 7517' }
      ] },
      { h4: 'Courses', links: [
        { href: '/courses/a-level-maths-course-pure-mechanics-statistics', label: 'A Level Maths' },
        { href: '/courses/a-level-further-maths-course', label: 'A Level Further Maths' },
        { href: '/courses/problem-solving-dsa-masterclass-teens', label: 'Problem solving and algorithms' },
        { href: '/coding-classes-in-united-kingdom', label: 'All UK pages' }
      ] }
    ],
    bottomRight: 'Read the statement before the sum'
  },

  personalityCss: `
.ag-root.ag-tp .ag-hero h1 { letter-spacing: -0.015em; max-width: 25ch; }
.ag-root.ag-tp .ag-capsule { border-left-width: 4px; padding-left: 1.25rem; }
.ag-root.ag-tp .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-tp .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-tp .ag-table th:first-child { width: 20%; }
.ag-root.ag-tp .ag-three h3 { letter-spacing: -0.006em; }
.ag-root.ag-tp .ag-steps li { line-height: 1.6; }
.ag-root.ag-tp .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'TMUA facts from the universities that require it, read raw on 31 October 2026, because uat-uk.org did not resolve: Imperial TMUA page (courses; windows 12 to 16 October 2026 and 4 to 8 January 2027; China, Hong Kong and Macau dates; booking 20 July to 28 September 2026 and 28 October to 21 December 2026; access arrangement windows; fee by test centre location; two 75-minute parts of 20 questions, Applications of Mathematical Knowledge and Mathematical Reasoning; no marks lost for wrong answers; seven user universities; only the first score considered; Oxford and Cambridge in October; bursaries). Imperial scores page (1 to 9, one decimal place, statistically equated, single overall score, no pass marks). Cambridge TMUA page (Computer Science, Economics, Mathematics; no need for a preparation course). Warwick admissions tests page (course codes and rules; 2025-entry majority of Mathematics offers at 5.0 and above; CS requirement not published; Statistics 5.0 or STEP grade 2; MEI free course). Oxford Mathematical Institute TMUA page (content at AS-level or Higher GCSE plus a few A Level topics; Section 2 only in Paper 2).',
    localProject: 'A Paper 2 logic lesson of our own: the converse and contrapositive of "if n is a multiple of 6 then n is even" (converse fails at n = 4); x > 2 as sufficient but not necessary for x^2 > 4 (x = -3); negating "every student passed some test"; and a flawed proof that x^2 >= x for all real x whose cases omit 0 < x < 1 (counterexample x = 1/2). Contrasted with a Paper 1 sum-and-product shortcut (roots differing by 2, k = 8), our pacing arithmetic of 3 minutes 45 seconds a question with a two-pass plan, and six original practice questions. Lesson family: reading a mathematical statement exactly.',
    requiredMentions: ['Applications of Mathematical Knowledge', 'Paper 2 is Mathematical Reasoning', '4 to 8 January 2027', '21 December 2026, 18.00 UK time', 'Only your first test score will be considered', 'statistically equated', 'TMUA score of 5.0 and above', 'there is no need to take a preparation course', 'Computer Systems Engineering (G406, G408)', 'have all possibilities been covered?', 'Try x = 1/2'],
    sources: [
      { claim: 'TMUA courses at Imperial, windows, booking, fees by centre, format, user universities, first score only, bursaries and access arrangements.', url: 'https://www.imperial.ac.uk/study/apply/undergraduate/process/admissions-tests/tmua/' },
      { claim: 'Score scale, decimal place, equating and no pass marks.', url: 'https://www.imperial.ac.uk/study/apply/undergraduate/process/admissions-tests/understanding-your-esat-and-tmua-scores/' },
      { claim: 'Cambridge courses requiring TMUA, October window and preparation advice.', url: 'https://www.undergraduate.study.cam.ac.uk/apply/how/maths-admission-test' },
      { claim: 'Warwick course rules, 2025-entry offers, STEP alternative and MEI course.', url: 'https://warwick.ac.uk/study/undergraduate/applying/admissions-tests/' },
      { claim: 'Content specification summary and the Paper 2 logic section.', url: 'https://www.maths.ox.ac.uk/study-here/undergraduate-study/tmua' }
    ],
    rejectedClaims: [
      'Anything taken directly from uat-uk.org: the host did not resolve on 31 October 2026; every TMUA fact is attributed to a university page instead, and the page says so.',
      'Durham\'s TMUA requirements: its admissions tests page returned HTTP 403; not retried. LSE and UCL requirements: not read; all three are named only as Imperial lists them.',
      'Test fees: set by UAT-UK by test centre location; not printed, and no currency is typed on the page.',
      'Warwick\'s 5.0 as a general target: described as Warwick\'s 2025-entry Mathematics figure only.',
      'Any TMUA question: not reproduced; official practice papers and Warwick walkthroughs are pointed to, and our questions are labelled ours.',
      'Any score promise: declined on the page.',
      'Any affiliation with UAT-UK, Pearson VUE or any university: none, stated on the page.'
    ]
  }
};
