'use strict';
// OCR B (MEI) A level Mathematics H640 help (ag- exam door, UK and US exams cluster Phase 2, row UK034).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/ocr-mei-a-level-maths-h640-help/):
//  - Cambridge OCR Level 3 Advanced GCE in Mathematics B (MEI) (H640) specification, Version 3.1, "© Cambridge OCR
//    2026" (PDF 308740 linked from ocr.org.uk mathematics-b-mei-h630-h640-from-2017). Verbatim: "Learners must complete
//    components 01, 02 and 03 to be awarded OCR A Level in Mathematics B (MEI)."; Component 01 "Pure Mathematics and
//    Mechanics", 100 marks, 2 hour written paper, 36.4%; 02 "Pure Mathematics and Statistics", 100 marks, 2 hours,
//    36.4%; 03 "Pure Mathematics and Comprehension", 75 marks, 2 hours, 27.3%, "assesses content from area 1 (areas 2 and
//    3 are assumed knowledge)"; "Percentages in the table above are rounded to 1 decimal place"; exact proportions 4/11,
//    4/11, 3/11; "Section A consists of shorter questions with minimal reading and interpretation; the aim of this is to
//    ensure that all students feel as though they can do some of the questions on the paper."; "Section B includes
//    longer questions and more problem solving. Section B has a gradient of difficulty."; "41 to 47 of the marks are for
//    mechanics"; "50 to 60 of the marks are for statistics with some of these being for questions based on the
//    pre-release data set"; "Section A will have 20 to 25 marks"; component 03 "Section A will have 60 marks on the pure
//    mathematics content." and "Section B will have 15 marks worth of questions on a previously unseen comprehension
//    passage based on the pure mathematics content of the specification, rather than on mechanics or statistics content,
//    to ensure that mechanics and statistics are not over-assessed in some years."; "The mechanics and statistics content
//    of the specification is assumed knowledge for component 03 but this assumed knowledge will not be the focus of any
//    of the questions."; pre-release: "relevant to some (but not all) of the questions in component 02", "It is
//    comparable to a set text for a literature course.", "Three different LDS have been created", "From September 2026
//    all students following a two year AS/A Level Mathematics B (MEI) programme of study will use a single Large Data
//    Set."; "Learners will NOT have a printout of the pre-release data set"; AO marks per component: 01 AO1 47 to 53, AO2
//    18 to 24, AO3 26 to 32; 02 AO1 47 to 53, AO2 22 to 28, AO3 22 to 28; 03 AO1 35 to 39, AO2 21 to 25, AO3 13 to 17;
//    calculators "An iterative function such as an ANS key" and binomial and Normal probabilities; formulae "on pages 2
//    and 3 of the question paper"; key features "Includes mathematical comprehension in the assessment to help to
//    prepare learners to use mathematics in a variety of contexts in higher education and future employment."; retake
//    all components; private candidates must be based in the UK; QN 603/1002/9; August 2026 version 3.1 changes to the
//    large data set wording.
// Our own material, labelled on the page: a 120-word comprehension passage we wrote on Heron's square-root method with
// three questions and model answers (x1 = 2.25, x2 = 2.236111..., errors 0.0139, 0.0000431, 0.00000000042 for root 5),
// a Paper 1 connected-particles example (3 kg and 2 kg, a = 3.92 m s^-2, T = 11.76 N), the AO arithmetic as fractions of
// 275, and a six-question practice set, all checked in Python on 31 October 2026. No OCR or MEI question is reproduced.
// Spine: the comprehension paper. H640's third paper is 75 marks and its Section B is an unseen passage of pure
// mathematics, so reading and explaining mathematics is examined, not just doing it. Also quoted: "has been developed
// in partnership with Mathematics in Education and Industry (MEI)"; "a long established, independent curriculum
// development body".
// Lesson family: reading a mathematical argument and writing about it.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'OCR MEI H640', blurb: 'The third MEI paper is 75 marks, and 15 of them come from an unseen passage of pure maths. Reading mathematics is tested as a skill.' },
  slug: 'ocr-mei-a-level-maths-h640-help',
  code: 'oml',
  accent: '#454E00',
  accentRationale: 'OCR B (MEI) H640: a dark olive #454E00 from the cluster allocation, 8.46:1 on #FBF8F2, earthier than the steel blue on the OCR A page so the two OCR specifications never look like one page',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'OCR MEI A level Maths H640 help',
  title: 'OCR MEI A Level Maths H640 Help: Comprehension Paper',
  description: 'OCR MEI A level Maths H640 help: the 75-mark comprehension paper, the pre-release data set, how the three papers split their marks, and live online lessons.',
  ogDescription: 'OCR B (MEI) A level Mathematics H640, from the specification: pure with mechanics, pure with statistics, and a pure paper ending in an unseen comprehension passage.',
  twitterDescription: 'MEI H640 explained: why Paper 3 is 75 marks, what the comprehension section asks, and how to practise reading mathematics.',
  pageName: 'OCR MEI A Level Maths H640 Help',
  webPageDescription: 'Live online teaching for OCR B (MEI) A level Mathematics H640 students in Years 12 and 13, written from the OCR specification.',
  courseDescription: 'Live online classes for OCR B (MEI) A level Mathematics H640: pure, mechanics and statistics, plus regular practice reading and explaining unseen mathematical passages.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'OCR MEI A level Maths H640',
  navLinks: [
    { href: '#structure', label: 'Paper structure' },
    { href: '#comprehension', label: 'Comprehension' },
    { href: '#prerelease', label: 'Pre-release data' },
    { href: '#passage', label: 'Our passage' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'OCR B (MEI) &middot; A level Mathematics H640 &middot; Years 12 and 13',
  h1: 'OCR MEI A level Maths H640 help',
  lede: 'OCR B (MEI) A level Mathematics, code H640, looks at first like any other A level Maths: pure, mechanics and statistics over three papers. The difference is the third paper. It is shorter, 75 marks rather than 100, and it ends with questions on a passage of mathematics the student has never seen. This page explains how H640 is put together, what the comprehension section asks for, how the pre-release data set fits in, and how we prepare students for both.',
  secondaryCta: { href: '#comprehension', label: 'The comprehension section' },
  wa: 'Hello Modern Age Coders, I would like a free first class for OCR MEI A level Maths H640.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Not connected with OCR or MEI',
  spec: [
    ['Qualification', 'OCR A level Mathematics B (MEI)'],
    ['Code', 'H640'],
    ['Paper 1', 'Pure and Mechanics, 100 marks'],
    ['Paper 2', 'Pure and Statistics, 100 marks'],
    ['Paper 3', 'Pure and Comprehension, 75 marks'],
    ['Each paper', '2 hours'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'What H640 is',
  capsule: 'OCR B (MEI) A level Mathematics (H640) is a Cambridge OCR A level taken as three 2-hour papers: Pure Mathematics and Mechanics (100 marks), Pure Mathematics and Statistics (100 marks), and Pure Mathematics and Comprehension (75 marks), whose last 15 marks are questions on an unseen passage. Modern Age Coders teaches H640 live online in the A Level Maths course, either in a batch of 15 to 20 or 1-on-1, starting with a free class.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Courses an MEI student tends to use',
    lede: 'The A level course covers H640. Maths through coding builds the habit of explaining a method, and Further Maths serves students taking both.',
    items: [
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'ME / 01', title: 'A Level Maths', note: 'Every H640 topic, with fortnightly passage practice for Paper 3.' },
      { course: 'maths-through-coding', code: 'ME / 02', title: 'Maths through coding', note: 'Iterative methods written as short programs, then explained in words.' },
      { course: 'a-level-further-maths-course', code: 'ME / 03', title: 'A Level Further Maths', note: 'For MEI students who also take Further Maths.' }
    ]
  },

  sections: [
    {
      id: 'structure', tint: 'tint', eyebrow: 'Paper structure',
      h2: 'How are the three OCR MEI A level Maths papers structured?',
      lede: 'Two 100-mark papers each join pure to one applied area. A 75-mark paper is pure alone, with the comprehension section at the end. All three last two hours.',
      body: [
        { kind: 'p', html: 'OCR says H640 "has been developed in partnership with Mathematics in Education and Industry (MEI)", which it describes as "a long established, independent curriculum development body". The specification sets out the components plainly: "Learners must complete components 01, 02 and 03 to be awarded OCR A Level in Mathematics B (MEI)." Unlike H240, OCR\'s other A level Maths, mechanics comes first: it is paired with pure on component 01, and statistics with pure on component 02.' },
        { kind: 'table', caption: 'OCR B (MEI) A level Mathematics H640: components and weights', head: ['Component', 'Content', 'Marks', 'Time', 'Share of the A level'], rows: [
          ['01', 'Pure Mathematics and Mechanics; 41 to 47 marks are mechanics', '100', '2 hours', '36.4%, exactly 4/11'],
          ['02', 'Pure Mathematics and Statistics; 50 to 60 marks are statistics, some on the pre-release data', '100', '2 hours', '36.4%, exactly 4/11'],
          ['03', 'Pure Mathematics and Comprehension; mechanics and statistics assumed but not the focus', '75', '2 hours', '27.3%, exactly 3/11']
        ] },
        { kind: 'source', html: 'Source: Cambridge OCR A Level in Mathematics B (MEI) (H640) specification, Version 3.1, sections 1 and 3a, via the <a class="ag-inline-link" href="https://www.ocr.org.uk/qualifications/as-and-a-level/mathematics-b-mei-h630-h640-from-2017/" rel="noopener" target="_blank">OCR H630 and H640 page</a>. OCR notes the percentages are rounded to one decimal place.' },
        { kind: 'two', mt: true,
          leftH3: 'Section A and Section B on Papers 1 and 2',
          left: [
            'Each 100-mark paper opens with Section A, worth 20 to 25 marks, which OCR describes as "shorter questions with minimal reading and interpretation; the aim of this is to ensure that all students feel as though they can do some of the questions on the paper."',
            'Section B "includes longer questions and more problem solving" and "has a gradient of difficulty". Applied questions can sit in either section, so mechanics may appear in the first five minutes.'
          ],
          rightH3: 'Why Paper 3 is shorter',
          right: [
            'Component 03 gives 75 marks in the same two hours as the 100-mark papers. That is 1.6 minutes a mark, against 1.2 on Papers 1 and 2, by our arithmetic.',
            'The extra time is there for reading. The comprehension passage has to be read and understood before any of its 15 marks can be earned.'
          ] }
      ]
    },
    {
      id: 'comprehension', tint: 'deep', eyebrow: 'Comprehension',
      h2: 'What is the MEI comprehension paper, and what does it ask?',
      lede: 'It is Section B of Paper 3: 15 marks of questions on a passage of pure mathematics the student has not seen before, worked through in the exam.',
      body: [
        { kind: 'p', html: 'The specification states that component 03 Section A "will have 60 marks on the pure mathematics content" and that "Section B will have 15 marks worth of questions on a previously unseen comprehension passage based on the pure mathematics content of the specification, rather than on mechanics or statistics content, to ensure that mechanics and statistics are not over-assessed in some years." It adds that "The passage may include examples of applications of the pure content", other than those in the applied sections.' },
        { kind: 'p', mt: true, html: 'OCR lists the reason for including it among the key features of H640: it "Includes mathematical comprehension in the assessment to help to prepare learners to use mathematics in a variety of contexts in higher education and future employment." In other words, the paper asks what a university lecture or a technical report asks: read an argument you did not write, follow its notation, check one of its steps, and extend it a little.' },
        { kind: 'table', mt: true, caption: 'The kinds of task a comprehension section can set, as we group them for teaching (our categories, not OCR\'s)', head: ['Task type', 'What the student does', 'Skill behind it'], rows: [
          ['Check a claim', 'Verify a number or a line of algebra stated in the passage', 'Accurate pure technique'],
          ['Fill a gap', 'Supply a step the author skipped, such as a derivative or a rearrangement', 'Following someone else\'s argument'],
          ['Apply the idea', 'Use the method from the passage on new numbers', 'Transferring a method'],
          ['Explain', 'Say in words why a result holds, or when a method fails', 'Reasoning and communication'],
          ['Extend', 'Generalise the passage\'s result one step further', 'Problem solving']
        ] },
        { kind: 'p', mt: true, html: 'The AO weightings show the tilt. OCR\'s table gives component 03 between 21 and 25 marks of AO2, reasoning and communicating, out of 75, a larger share than on either 100-mark paper, where AO2 is 18 to 24 on component 01 and 22 to 28 on component 02. Across the whole A level the three objectives still land at 48 to 52, 23 to 27 and 23 to 27 per cent.' }
      ]
    },
    {
      id: 'prerelease', tint: '', eyebrow: 'Pre-release data',
      h2: 'What is the MEI pre-release large data set, and what changed in 2026?',
      lede: 'A real data set published before the course and used through it, assumed by some Paper 2 questions. From September 2026 there is one data set for every two-year cohort.',
      body: [
        { kind: 'p', html: 'OCR says the pre-release material "will be relevant to some (but not all) of the questions in component 02" and calls it "comparable to a set text for a literature course." Questions assume the student knows its contexts and has explored it with a spreadsheet or statistics software; in the exam there is no printout, though selected data or summaries may be printed in the paper.' },
        { kind: 'p', mt: true, html: 'The arrangement changed in the August 2026 version of the specification. OCR explains that "Three different LDS have been created", that before September 2026 the exams cycled through them in sequence, and that "From September 2026 all students following a two year AS/A Level Mathematics B (MEI) programme of study will use a single Large Data Set." Students starting Year 12 in September 2026 should therefore check which data set their teacher is using, and not rely on revision guides written for the older cycle.' },
        { kind: 'ol', mt: true, items: [
          'Download the data set and its notes from OCR\'s H640 resources, not from a third-party site.',
          'List every variable with its units and what a typical value looks like.',
          'Draw two or three diagrams in a spreadsheet and write one sentence on what each shows.',
          'Take a small random sample, test a claim about it, then compare with the whole data set, as OCR\'s suggested activities describe.',
          'Before the exam, practise reading printed summaries from the data and deciding what they cannot tell you.'
        ] }
      ]
    },
    {
      id: 'passage', tint: 'tint', eyebrow: 'A passage we wrote',
      h2: 'Practise the comprehension section: a short passage and questions, ours',
      lede: 'This is a passage we wrote in the style of a comprehension task, with our own questions and answers. It is not an OCR or MEI passage.',
      body: [
        { kind: 'p', html: '<strong>Our passage: square roots by averaging.</strong> To estimate &radic;a for a positive number a, start with any positive guess x<sub>0</sub>. If x<sub>0</sub> is too large, then a/x<sub>0</sub> is too small, and the truth lies between them. A sensible next guess is their mean, x<sub>1</sub> = &frac12;(x<sub>0</sub> + a/x<sub>0</sub>), and the process repeats as x<sub>n+1</sub> = &frac12;(x<sub>n</sub> + a/x<sub>n</sub>). After the first step every estimate is at least &radic;a, by the inequality between the arithmetic and geometric means (1). The method improves very quickly: once an estimate is close, each step roughly doubles the number of correct decimal places (2).' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Question 1, check', p: 'With a = 5 and x<sub>0</sub> = 2, find x<sub>1</sub> and x<sub>2</sub>. Answer: x<sub>1</sub> = &frac12;(2 + 2.5) = 2.25, and x<sub>2</sub> = &frac12;(2.25 + 5/2.25) = 2.236111..., already within 0.00005 of &radic;5 = 2.236068...' },
          { h3: 'Question 2, fill the gap at (1)', p: 'Show x<sub>n+1</sub> &ge; &radic;a. Answer: x<sub>n+1</sub> &minus; &radic;a = (x<sub>n</sub><sup>2</sup> &minus; 2x<sub>n</sub>&radic;a + a) &divide; 2x<sub>n</sub> = (x<sub>n</sub> &minus; &radic;a)<sup>2</sup> &divide; 2x<sub>n</sub>, which is never negative for x<sub>n</sub> &gt; 0.' },
          { h3: 'Question 3, explain (2)', p: 'The same identity shows the new error is the old error squared, divided by 2x<sub>n</sub>. For &radic;5 the errors run 0.0139, then 0.0000431, then about 0.0000000004: squaring a small error roughly doubles its count of zeros.' }
        ] },
        { kind: 'p', mt: true, html: 'Notice what the questions reward. Question 1 is routine technique. Question 2 asks the student to supply algebra the passage only asserted, which means reading the reference marker, finding the claim, and proving it in two lines. Question 3 asks for an explanation in words, backed by the algebra from Question 2. That is the pattern we drill: technique, then argument, then explanation, in that order, on a fresh passage roughly every fortnight in Year 13.' },
        { kind: 'p', mt: true, html: '<strong>Our Paper 1 example.</strong> A 3 kg block on a smooth horizontal table is joined by a light inextensible string over a smooth pulley to a 2 kg mass hanging freely. Taking g = 9.8 m s<sup>&minus;2</sup>, the equation for the whole system is 2g = 5a, so a = 3.92 m s<sup>&minus;2</sup>, and for the block alone T = 3a = 11.76 N. The words smooth, light and inextensible are modelling assumptions, and naming them is part of the answer.' },
        { kind: 'table', mt: true, caption: 'Six practice questions we wrote for H640 students (answers checked in Python)', head: ['#', 'Our question', 'Paper', 'Answer'], rows: [
          ['1', 'Express (5x + 1)/((x &minus; 1)(x + 2)) in partial fractions.', '1, 2 or 3', '2/(x &minus; 1) + 3/(x + 2)'],
          ['2', 'Find the sum of 3r &minus; 1 for r = 1 to 20.', 'Any', '610'],
          ['3', 'Solve cos 2x = 0.5 for 0&deg; &le; x &le; 360&deg;.', 'Any', '30&deg;, 150&deg;, 210&deg;, 330&deg;'],
          ['4', 'A particle has velocity v = 6t &minus; t<sup>2</sup> m s<sup>&minus;1</sup>. How far does it travel between t = 0 and t = 6?', '1', '36 m'],
          ['5', 'X ~ B(15, 0.35). Find P(X &ge; 8).', '2', '0.113'],
          ['6', 'Using x<sub>n+1</sub> = &frac12;(x<sub>n</sub> + 7/x<sub>n</sub>) with x<sub>0</sub> = 3, find x<sub>1</sub>.', '3', '8/3, about 2.667']
        ] },
        { kind: 'source', html: 'The passage, questions, examples and practice set were written by us on 31 October 2026. OCR publishes past papers, including comprehension papers, on its <a class="ag-inline-link" href="https://www.ocr.org.uk/qualifications/as-and-a-level/mathematics-b-mei-h630-h640-from-2017/" rel="noopener" target="_blank">H640 qualification page</a>.' }
      ]
    },
    {
      id: 'rules', tint: 'deep', eyebrow: 'Rules and entry',
      h2: 'What else should an H640 student know before the exams?',
      lede: 'Formulae are printed in the paper, the calculator needs two features, every paper is retaken together, and private candidates must be UK-based.',
      body: [
        { kind: 'table', caption: 'H640 rules from the specification, in brief', head: ['Topic', 'What the specification says'], rows: [
          ['Formulae', 'Given on pages 2 and 3 of each question paper; the list is in section 5d'],
          ['Calculator', 'Must comply with the JCQ Instructions for conducting examinations; expected features are an iterative function such as an ANS key, and summary statistics with binomial and Normal probabilities'],
          ['Retakes', 'Learners can retake as many times as they wish, but must retake all components'],
          ['Private candidates', 'May enter through an OCR approved centre; must be based in the UK'],
          ['Accreditation', 'Ofqual QN 603/1002/9'],
          ['Command words', 'The same OCR list as H240, including show detailed reasoning']
        ] },
        { kind: 'p', mt: true, html: 'That last row matters for Paper 3 in particular. The comprehension section often asks the student to show a result, and OCR\'s meaning of "show that" is that every step must be covered because the answer is already given. A passage question is lost more often to a skipped line than to a wrong one.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'How the two years build towards Paper 3',
    lede: 'Reading mathematics is taught as a skill from Year 12, not left to the final term.',
    table: { caption: 'Stages through OCR MEI H640', head: ['Stage', 'Usually', 'Sign that it is done'], rows: [
      ['1. Secure algebra', 'Start of Year 12', 'Fractions, indices and factorising done accurately at speed'],
      ['2. Pure with explanation', 'Year 12', 'Each pure topic ends with a written sentence explaining why the method works'],
      ['3. Applied and data', 'Late Year 12 into Year 13', 'Mechanics with named assumptions; statistics on the single 2026 data set'],
      ['4. Passages and papers', 'Year 13', 'An unseen passage every fortnight, plus timed full papers']
    ] },
    left: { h3: 'Why explanation starts early', ps: [
      'Students who only ever compute find their first passage strange. Students who have written a sentence after every method do not.',
      'It costs a few minutes a lesson.'
    ] },
    right: { h3: 'Where our passages come from', ps: [
      'We write them ourselves, on iteration, sequences, proof and applications of calculus.',
      'OCR\'s own past comprehension papers are used as published, for timed practice.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses near OCR MEI A level Maths',
    lede: 'Arranged by purpose. The free lesson helps us point to the right one.',
    bands: [
      { num: 'I', h3: 'Core', sub: 'For H640 itself', courses: [
        { code: 'UK / ME1 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, mechanics and statistics, with passage practice.' },
        { code: 'UK / ME1 / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Extra depth for Paper 2 and the data set.' },
        { code: 'UK / ME1 / 03', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'Core pure and options for Further Maths students.' }
      ] },
      { num: 'II', h3: 'Support', sub: 'Shoring up the basics', courses: [
        { code: 'UK / ME2 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'Higher GCSE secured before Year 12.' },
        { code: 'UK / ME2 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For the student whose algebra trips every topic.' },
        { code: 'UK / ME2 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python versions of the iterative methods in the passage above.' }
      ] },
      { num: 'III', h3: 'Stretch', sub: 'Beyond the specification', courses: [
        { code: 'UK / ME3 / 01', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP', blurb: 'For applicants to maths, computing and economics degrees.' },
        { code: 'UK / ME3 / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Problem solving at olympiad level.' },
        { code: 'UK / ME3 / 03', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'A look ahead at first-year university maths.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'A passage on the table every other week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We book every lesson in UK time; our team teaches from India, which has no clock change, so winter and summer slots differ by an hour on our side only.',
    slots: [
      { time: 'Late afternoon', l: 'A common choice for Year 12.' },
      { time: 'Evening', l: 'After homework and part-time work.' },
      { time: 'Saturday or Sunday morning', l: 'Long enough for a whole Paper 3.' }
    ],
    cells: [
      { h3: 'Fortnightly passages', p: 'An unseen piece of pure maths, read and questioned in class.' },
      { h3: 'Written reasons', p: 'Every method closes with a sentence saying why it works.' },
      { h3: 'The 2026 data set', p: 'Spreadsheet work on the single data set now in use.' },
      { h3: 'Named assumptions', p: 'Smooth, light and inextensible written into mechanics answers.' },
      { h3: 'Section A speed', p: 'Short questions timed so the long ones get the minutes.' },
      { h3: 'Batch or 1-on-1', p: 'A batch of 15 to 20 students, or one-to-one teaching.' }
    ]
  },

  projectsH2: 'Projects students built in lessons',
  projectsLede: 'Made in class for practice, not for an exam. A wider set is on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, unchanged.',

  fees: {
    h2: 'Fees for OCR MEI H640 classes',
    lede: 'Outside India we charge a single monthly fee in US dollars. You try a lesson free first, and pay only once the course and a regular slot are agreed.',
    free: ['A free H640 lesson, passage or topic', 'An honest view of Paper 3 readiness', 'Arranged by phone or WhatsApp'],
    group: ['A batch of 15 to 20 sixth formers', 'One teacher across Year 12 and Year 13', 'Fortnightly comprehension practice', 'A quieter timetable during exams'],
    one: ['A teacher for one student', 'Built around mocks and other subjects', 'Suits a student retaking all three papers']
  },

  faq: {
    eyebrow: 'H640 questions',
    h2: 'Common questions about OCR MEI A level Maths',
    items: [
      { q: 'What is the MEI A level Maths comprehension paper?', a: 'It is the last section of Paper 3, Pure Mathematics and Comprehension. It carries 15 marks of questions on an unseen passage based on the pure content, after 60 marks of ordinary pure questions.' },
      { q: 'How long is OCR MEI A level Maths Paper 3?', a: 'Two hours, the same as Papers 1 and 2, but for 75 marks instead of 100. The extra time per mark allows for reading the passage.' },
      { q: 'Is OCR MEI the same as OCR A?', a: 'No. Both are Cambridge OCR A levels in Mathematics, but MEI (H640) pairs pure with mechanics on Paper 1 and with statistics on Paper 2, and has the comprehension paper. OCR A (H240) has three 100-mark papers and no comprehension section.' },
      { q: 'What percentage is each MEI paper worth?', a: 'Papers 1 and 2 are each 36.4 per cent of the A level and Paper 3 is 27.3 per cent. OCR gives the exact shares as four elevenths, four elevenths and three elevenths.' },
      { q: 'Which large data set does MEI use from 2026?', a: 'OCR says that from September 2026 every student on a two-year course uses a single large data set, replacing the earlier cycle through three. Check the current file on OCR\'s H640 page with your teacher.' },
      { q: 'Can you revise for an unseen passage?', a: 'Yes, by practising the skills rather than the content: checking a stated step, filling a gap in an argument, applying a method to new numbers and explaining a result in words. Past comprehension papers from OCR are useful timed practice.' },
      { q: 'Are formulae given in OCR MEI exams?', a: 'Yes, on pages 2 and 3 of each question paper. Results not on that list must be known.' },
      { q: 'Can I resit one MEI paper?', a: 'No. OCR says learners who retake must retake all components of the qualification.' },
      { q: 'When are your MEI classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is given in UK time.' },
      { q: 'Are you connected with MEI or OCR?', a: 'No. Modern Age Coders is independent of MEI, OCR and Cambridge University Press and Assessment. Our passage and questions on this page are our own.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for A level mathematicians',
    lede: 'The other OCR specification, Further Maths and admissions tests.',
    items: [
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition online', p: 'Our page for every board.' },
      { href: '/further-maths-tuition-online', label: 'Further maths tuition online', p: 'For students taking the second maths A level.' },
      { href: '/tmua-preparation', label: 'TMUA preparation', p: 'The admissions test for many maths degrees.' },
      { href: '/is-a-level-further-maths-worth-it', label: 'Is A level Further Maths worth it?', p: 'A plain view of the extra commitment.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages in one list.' }
    ]
  },

  start: {
    h2: 'Book a free MEI class',
    lede: 'Give us a number and we will call at a UK time you choose. In the first lesson the student reads a short passage of ours and answers two questions on it, so we both see how Paper 3 is likely to go.',
    readFirst: 'Reading before you book? Each <a class="ag-inline-link" href="/courses">course</a> lists its topics, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> sets out our method, and <a class="ag-inline-link" href="/student-labs">student labs</a> has work from class.',
    note: 'For the fastest answer use WhatsApp, which costs nothing from a UK number. Our replies come from a +91 number in India.',
    formNote: 'No fee and no commitment: we simply reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'A level maths', links: [
        { href: '/is-a-level-further-maths-worth-it', label: 'Is Further Maths worth it?' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'Next steps', links: [
        { href: '/tmua-preparation', label: 'TMUA preparation' },
        { href: '/a-level-maths-tutor-cost-uk', label: 'Tutor costs' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'OCR MEI H640 lessons, run on UK time'
  },

  personalityCss: `
.ag-root.ag-oml .ag-hero h1 { letter-spacing: -0.015em; font-weight: 700; }
.ag-root.ag-oml .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-oml .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-oml .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-oml .ag-grid-3 h3 { font-size: 1.02rem; }
.ag-root.ag-oml .ag-steps li { padding-bottom: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Cambridge OCR A Level in Mathematics B (MEI) (H640) specification, Version 3.1 (2026): component 01 Pure and Mechanics (100 marks, 2 hours, 36.4%, 41 to 47 mechanics marks), 02 Pure and Statistics (100 marks, 2 hours, 36.4%, 50 to 60 statistics marks, some on the pre-release data), 03 Pure and Comprehension (75 marks, 2 hours, 27.3%, Section A 60 marks pure, Section B 15 marks on an unseen passage); Section A on 01 and 02 has 20 to 25 marks of shorter questions; AO marks per component; single large data set from September 2026 after a three-set cycle; formulae on pages 2 and 3; calculator features; retake all components; UK-based private candidates; QN 603/1002/9.',
    localProject: 'The comprehension paper. The page tabulates the three H640 components with exact elevenths, explains Section A and B on the 100-mark papers, sets out what the comprehension section is and why OCR includes it, groups comprehension tasks into five types (our categories), explains the 2026 single data set change with a five-step plan, then gives a passage we wrote on Heron\'s square-root method with three questions and model answers, a connected-particles example (a = 3.92, T = 11.76 N) and a six-question practice set.',
    requiredMentions: ['rather than on mechanics or statistics content, to ensure that mechanics and statistics are not over-assessed in some years', 'comparable to a set text for a literature course', 'Three different LDS have been created', 'will use a single Large Data Set', 'shorter questions with minimal reading and interpretation', '41 to 47 marks are mechanics', '603/1002/9', 'x<sub>1</sub> = &frac12;(2 + 2.5) = 2.25', 'T = 3a = 11.76 N', '36.4%, exactly 4/11'],
    sources: [
      { claim: 'Cambridge OCR A Level in Mathematics B (MEI) (H640) specification, Version 3.1: components, marks, weights, sections, comprehension, pre-release data set and 2026 change, AO marks, formulae, calculators, retakes, private candidates and accreditation.', url: 'https://www.ocr.org.uk/Images/308740-specification-accredited-a-level-gce-mathematics-b-mei-h640.pdf' },
      { claim: 'OCR AS and A Level Mathematics B (MEI) (H630, H640) qualification page linking the specification and past papers.', url: 'https://www.ocr.org.uk/qualifications/as-and-a-level/mathematics-b-mei-h630-h640-from-2017/' },
      { claim: 'Cambridge OCR A Level in Mathematics A (H240) specification, Version 3.1: the H240 structure used in the FAQ comparison.', url: 'https://www.ocr.org.uk/Images/308723-specification-accredited-a-level-gce-mathematics-a-h240.pdf' }
    ],
    rejectedClaims: [
      'Anything from mei.org.uk: the site returned HTTP 403 to a plain curl on 31 October 2026 and was not retried or worked around; MEI is described only as named in the OCR specification.',
      'The name and topic of the single large data set from September 2026: not downloaded, not named.',
      'Any past comprehension passage or question: not reproduced; the passage on this page is ours.',
      'June 2027 dates and grade boundaries: not read at a primary source, not printed.',
      'That MEI is harder or easier than OCR A or another board: not claimed.',
      'Any grade promise or any link with OCR or MEI: both declined.'
    ]
  }
};
