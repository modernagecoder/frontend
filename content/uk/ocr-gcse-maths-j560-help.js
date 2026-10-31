'use strict';
// OCR GCSE Maths J560 help (ag- maths door, England; UK and US exams cluster Phase 2, row UK020).
// Sources, read raw on 31 October 2026 (curl -sL; PDFs through PyPDF; raw copies in
// keyword-research-2026-09/uk-us-gap/src/ocr-gcse-maths-j560-help/):
//  - Cambridge OCR Level 1/Level 2 GCSE (9-1) in Mathematics J560 specification, "Version 2.1 (August 2026)"
//    (ocr.org.uk/Images/168982-specification-gcse-mathematics.pdf). Verbatim: "Learners are entered for either
//    Foundation tier (Paper 1, Paper 2 and Paper 3) or Higher tier (Paper 4, Paper 5 and Paper 6)."; each paper
//    "100 marks", "1 hour 30 minutes"; Papers 1, 3, 4, 6 "Calculator permitted", Papers 2 and 5 "Calculator not
//    permitted"; "Foundation tier, grades 5 to 1"; "Higher tier, grades 9 to 4"; "An allowed grade 3 may be awarded on
//    the Higher tier option for learners who are a small number of marks below the grade 3/4 boundary."; "The
//    content of this specification is presented in three columns"; "the expectation of a Foundation tier learner is
//    exemplified by the first two columns and that of a Higher tier learner is the sum of the statements in all three
//    columns."; "Knowledge of the content of Key Stages 1 and 2 is therefore assumed, but will not be assessed
//    directly."; "All content may be assessed on either the calculator or non-calculator papers."; "The assessment
//    for this specification will not include a formula sheet." (superseded for 2025 to 2027 and from 2028 by Ofqual's
//    decisions, below); twelve areas "OCR 1 Number Operations and Integers" to "OCR 12 Statistics"; reference 6.02d
//    "Recall and use standard formulae"; AO mark distribution per paper Foundation 50, 25, 25 of 100; Higher 40, 30,
//    30 of 100; November series "available only to learners who have reached at least the age of 16 on or before
//    31st August of that calendar year"; entry options J560F and J560H; "QN 601/4606/0"; private candidates "must be
//    based in the UK"; "ExamBuilder – our free online past papers service" (dash removed on the page).
//  - OCR June 2027 and November 2026 final GCSE timetables: J560/01 and /04 (calculator) Fri 14 May 2027 am, /02
//    and /05 (non-calculator) Thu 27 May 2027 am, /03 and /06 (calculator) Mon 14 June 2027 am; November 2026: /01
//    and /04 Wed 4 Nov, /02 and /05 Fri 6 Nov, /03 and /06 Mon 9 Nov, all am, 1 h 30 min.
//  - OCR J560 assessment page: formulae sheets listed for "2027 - June series" and "2027 - November series", for
//    Foundation tier and Higher tier.
//  - OCR Examiners' report J560/01 Summer 2025: "Candidates are expected to use a calculator on this paper."; "many
//    used non-calculator methods that often lead to arithmetical errors."; challenging topics "equations of straight
//    lines, trigonometry, population density, inverse proportionality, bearings and identifying types of graphs";
//    "there was no evidence to suggest that lack of time was a factor"; less successful candidates "did not know the
//    correct formulae or use the formulae sheet". J560/04 Summer 2025: "Candidates should be aware that even on a
//    calculator paper, not every single question will require them to use their calculator."; "Many candidates
//    truncated figures in their working, which often led to an inaccurate answer."; "the most common problem was the
//    lack of use of brackets to show the order of operations"; "Questions with 'Show that' in them require working to
//    be shown"; weaker candidates "could not form equations describing proportionality".
//  - Ofqual decisions on GCSE formulae sheets for 2025, 2026 and 2027 and from 2028 (gov.uk content API).
// Our own: the calculator decision rule, the three worked examples and the practice set, the plan.
// Spine: OCR puts a calculator paper first. J560 is the only English GCSE Maths whose first paper in each tier is a
// calculator paper, with 100-mark papers and a three-column specification; OCR's own 2025 examiners criticise
// candidates both for not using a calculator on Paper 1 and for over-using it on Paper 4. The page teaches when to
// reach for the calculator. Lesson family: a board door built on a paper-order and tool-use decision.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'OCR J560', blurb: 'Calculator first. Six 100-mark papers, and OCR examiners who flag both too little and too much calculator use.' },
  slug: 'ocr-gcse-maths-j560-help',
  code: 'ogj',
  accent: '#74452C',
  accentRationale: 'OCR J560 maths: a burnt umber brown (#74452C, 7.53:1 on #FBF8F2), warm and earthy, clearly apart from the slate AQA and teal Edexcel doors and the brick red of CCEA',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'OCR GCSE Maths J560 help',
  title: 'OCR GCSE Maths J560 Help | Papers, 2027 Dates, Calculator',
  description: 'OCR GCSE Maths J560 help: six 100-mark papers, why Paper 1 allows a calculator, the June 2027 dates, the three-column spec and what OCR examiners said in 2025.',
  ogDescription: 'OCR J560 starts with a calculator paper. Learn when to use the calculator and when not to, from OCR\'s own specification and 2025 examiners\' reports.',
  twitterDescription: 'OCR GCSE Maths J560: six 100-mark papers, the 2027 dates, the three columns and the calculator decision OCR examiners keep writing about.',
  pageName: 'OCR GCSE Maths J560 Help',
  webPageDescription: 'Live online help for OCR GCSE (9-1) Mathematics J560, Foundation and Higher, built from the version 2.1 specification and OCR\'s Summer 2025 examiners\' reports.',
  courseDescription: 'Live online teaching for OCR GCSE Mathematics J560 candidates at Foundation and Higher tier, including the calculator decision on every paper.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'OCR GCSE Maths J560',
  navLinks: [
    { href: '#papers', label: 'Six papers' },
    { href: '#calculator', label: 'The calculator' },
    { href: '#columns', label: 'Three columns' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; OCR GCSE (9-1) Mathematics J560 &middot; Years 10 and 11',
  h1: 'OCR GCSE Maths J560 help',
  lede: 'OCR\'s GCSE Maths looks like the other English boards from a distance: two tiers, three papers each, 90 minutes a paper. Up close it has its own habits. Its papers are marked out of 100, not 80. It numbers the Foundation papers 1 to 3 and the Higher papers 4 to 6. And it starts each tier with a calculator paper, putting the non-calculator paper in the middle. That last choice shapes how a student should practise, and OCR\'s own examiners wrote about it in 2025 from both directions: Foundation students who would not use a calculator when they should, and Higher students who used one where it made the question harder. This page sets out the papers with the dates from OCR\'s own November 2026 and June 2027 timetables, explains the three-column specification, and works three original questions around the calculator decision.',
  secondaryCta: { href: '#calculator', label: 'The calculator decision' },
  wa: 'Hello Modern Age Coders, I would like a free first class for OCR GCSE Maths J560.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from OCR\'s J560 specification v2.1 and Summer 2025 examiners\' reports',
  spec: [
    ['Qualification', 'OCR GCSE (9-1) Mathematics J560'],
    ['Tiers', 'Foundation 5 to 1, Higher 9 to 4'],
    ['Papers', 'Three per tier, 100 marks, 1 hour 30 minutes'],
    ['No calculator', 'Paper 2 (Foundation), Paper 5 (Higher)'],
    ['June 2027', '14 May, 27 May, 14 June'],
    ['Format', 'Group of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'In short',
  capsule: 'OCR GCSE (9-1) Mathematics J560 is the GCSE Maths qualification from Cambridge OCR, sat in England at the end of Year 11. Foundation (grades 5 to 1) is Papers 1 to 3 and Higher (grades 9 to 4) is Papers 4 to 6, each 100 marks and 1 hour 30 minutes, with a calculator allowed on the first and third paper of each tier. OCR\'s June 2027 papers fall on Friday 14 May 2027, then Thursday 27 May, then Monday 14 June. Modern Age Coders teaches J560 live online, tier by tier, in the course GCSE Maths: Foundation and Higher; families choose 1-on-1 lessons or a batch of 15 to 20. We are independent of OCR.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for an OCR J560 student',
    lede: 'Most J560 students join the first. The second is for the indices, surds and algebra that OCR\'s Higher report flagged; the third is for students retaking J560 once school is over.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'OJ / 01', title: 'GCSE Maths: Foundation and Higher', note: 'All twelve OCR content areas at the student\'s tier, with OCR papers in OCR\'s calculator order.' },
      { course: 'algebra-foundations-masterclass', code: 'OJ / 02', title: 'Algebra Foundations', note: 'Brackets, order of operations and setting algebra out cleanly, the habits OCR\'s Paper 4 report asked for.' },
      { course: 'gcse-maths-resit-course', code: 'OJ / 03', title: 'GCSE Maths Resit', note: 'For a J560 resit, including OCR\'s November series for students aged 16 or over.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'The six papers',
      h2: 'How is OCR GCSE Maths J560 structured?',
      lede: 'Two tiers, three papers in each, every paper worth 100 marks over 1 hour 30 minutes. The table follows the specification and OCR\'s final timetables.',
      body: [
        { kind: 'table', caption: 'OCR GCSE Mathematics J560: the papers, calculator rule and 2026 to 2027 dates (specification version 2.1 and OCR\'s final timetables for November 2026 and June 2027)', head: ['Paper', 'Tier', 'Calculator', 'Marks', 'November 2026', 'June 2027'], rows: [
          ['J560/01', 'Foundation', 'Permitted', '100', 'Wed 4 Nov, morning', 'Fri 14 May, morning'],
          ['J560/02', 'Foundation', 'Not permitted', '100', 'Fri 6 Nov, morning', 'Thu 27 May, morning'],
          ['J560/03', 'Foundation', 'Permitted', '100', 'Mon 9 Nov, morning', 'Mon 14 June, morning'],
          ['J560/04', 'Higher', 'Permitted', '100', 'Wed 4 Nov, morning', 'Fri 14 May, morning'],
          ['J560/05', 'Higher', 'Not permitted', '100', 'Fri 6 Nov, morning', 'Thu 27 May, morning'],
          ['J560/06', 'Higher', 'Permitted', '100', 'Mon 9 Nov, morning', 'Mon 14 June, morning']
        ] },
        { kind: 'p', html: 'A school enters each student for one of two entry options, J560F or J560H, and the student sits all three papers of that tier in the same series. OCR adds the three paper marks together and compares the total with the grade boundaries for that tier and series; no single paper carries a grade. The specification lists Foundation as "grades 5 to 1" and Higher as "grades 9 to 4", with a safety net on Higher: "An allowed grade 3 may be awarded on the Higher tier option for learners who are a small number of marks below the grade 3/4 boundary."' },
        { kind: 'p', html: 'On 14 May 2027, students at AQA and Pearson Edexcel schools face a paper without a calculator while OCR students have one on the desk, so a student who borrows a revision timetable from a friend at another school can easily prepare for the wrong kind of paper. The safe habit is to write the OCR order on the wall: calculator, then non-calculator, then calculator.' },
        { kind: 'two', mt: true,
          leftH3: 'November and resits',
          left: [
            'OCR runs a November series, but only for "learners who have reached at least the age of 16 on or before 31st August of that calendar year". In practice it is a resit route for students past Year 11.',
            'For November 2026, OCR\'s final timetable puts J560 on the 4th, 6th and 9th of the month, keeping the June calculator order.'
          ],
          rightH3: 'Codes worth knowing',
          right: [
            'The Ofqual qualification number is QN 601/4606/0, which is the code to give a college that asks exactly which GCSE was sat.',
            'Private candidates may enter, but the specification says they "must be based in the UK" and need an OCR-approved centre willing to host them.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ocr.org.uk/qualifications/gcse/mathematics-j560-from-2015/" rel="noopener" target="_blank">OCR GCSE Mathematics J560 specification</a> (version 2.1, August 2026) and the <a class="ag-inline-link" href="https://www.ocr.org.uk/administration/key-dates-and-timetables/" rel="noopener" target="_blank">OCR key dates and timetables page</a> (final November 2026 and June 2027 GCSE timetables), read on 31 October 2026.' }
      ]
    },
    {
      id: 'calculator', tint: 'deep', eyebrow: 'The calculator decision',
      h2: 'Why is OCR J560 Paper 1 a calculator paper, and how should students use it?',
      lede: 'OCR simply orders its papers that way; the specification says all content can appear on either kind. What matters is the judgement OCR\'s 2025 examiners kept returning to: when the calculator helps, and when it gets in the way.',
      body: [
        { kind: 'p', html: 'The J560 specification is direct about calculators: "All content may be assessed on either the calculator or non-calculator papers." There is no list of calculator topics and non-calculator topics. Instead, each paper tests the same content with a different tool on the desk, and a student has to decide, question by question, whether to use it.' },
        { kind: 'table', mt: true, caption: 'What OCR\'s Summer 2025 examiners\' reports said about calculators (quoted and summarised from the J560/01 and J560/04 reports)', head: ['Paper', 'The calculator problem', 'Other points the examiners made'], rows: [
          ['J560/01, Foundation, calculator', '"Candidates are expected to use a calculator on this paper." Yet "many used non-calculator methods that often lead to arithmetical errors."', 'Challenging topics included straight-line equations, trigonometry, population density, inverse proportion and bearings; no evidence that time ran short'],
          ['J560/04, Higher, calculator', '"even on a calculator paper, not every single question will require them to use their calculator." Using one on an indices question produced unmanageable numbers.', 'Truncated figures in working; missing brackets in algebra; "Show that" questions need working; proportionality equations not formed']
        ] },
        { kind: 'p', html: 'Read together, the two reports describe one skill seen from opposite ends. On Foundation Paper 1, students who did long multiplication by hand when the calculator was allowed made avoidable slips. On Higher Paper 4, students who pressed buttons on an index-laws question found themselves with enormous numbers and no way to show the method being tested. The Paper 4 report also lists "Many candidates truncated figures in their working, which often led to an inaccurate answer", a calculator habit of a different kind: copying four digits off the screen and carrying them forward.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Use it: arithmetic', p: 'On a calculator paper, any multi-digit arithmetic, any trigonometry and any compound calculation goes on the calculator. Hand methods there are a risk with no reward.' },
          { h3: 'Pause: structure', p: 'If a question is about index laws, surds, algebraic proof or exact values, the method is the point. Work it by hand, then use the calculator only to check.' },
          { h3: 'Keep it: accuracy', p: 'Store intermediate values in the calculator memory, or write them to several more figures than the answer needs. Round once, at the end, as asked.' }
        ] },
        { kind: 'p', mt: true, html: 'That three-part rule is ours, built from the two reports. We teach it explicitly because it is not something students pick up from practice alone: a student who has only ever sat AQA or Edexcel mocks will usually have practised the non-calculator paper first and the calculator papers later, and comes to OCR\'s order with the wrong instincts.' },
        { kind: 'source', html: 'Source: OCR, J560/01 and J560/04 Examiners\' reports, Summer 2025 series, linked from the <a class="ag-inline-link" href="https://www.ocr.org.uk/qualifications/gcse/mathematics-j560-from-2015/assessment/" rel="noopener" target="_blank">J560 assessment page</a>. We summarise and quote the reports and do not reproduce any question.' }
      ]
    },
    {
      id: 'columns', tint: '', eyebrow: 'Three columns',
      h2: 'What is in the OCR J560 specification, and how do the columns work?',
      lede: 'Twelve numbered content areas, each written in three columns that build on each other. Foundation is the first two columns; Higher is all three.',
      body: [
        { kind: 'p', html: 'OCR lays out the content in a way that differs from AQA\'s numbered references and from Pearson\'s typefaces. "The content of this specification is presented in three columns, representing a progression within the content strands." The columns are cumulative: "the expectation of a Foundation tier learner is exemplified by the first two columns and that of a Higher tier learner is the sum of the statements in all three columns." Each statement also carries an OCR reference such as 1.01a and the matching DfE reference, so a teacher can trace any line back to the national subject content.' },
        { kind: 'table', mt: true, caption: 'The twelve content areas of OCR J560, as numbered in the specification', head: ['Area', 'Title in the specification', 'Area', 'Title in the specification'], rows: [
          ['OCR 1', 'Number Operations and Integers', 'OCR 7', 'Graphs of Equations and Functions'],
          ['OCR 2', 'Fractions, Decimals and Percentages', 'OCR 8', 'Basic Geometry'],
          ['OCR 3', 'Indices and Surds', 'OCR 9', 'Congruence and Similarity'],
          ['OCR 4', 'Approximation and Estimation', 'OCR 10', 'Mensuration'],
          ['OCR 5', 'Ratio, Proportion and Rates Of Change', 'OCR 11', 'Probability'],
          ['OCR 6', 'Algebra', 'OCR 12', 'Statistics']
        ] },
        { kind: 'p', html: 'Two notes in the content section are worth knowing. First, "Knowledge of the content of Key Stages 1 and 2 is therefore assumed, but will not be assessed directly", so primary arithmetic is never the topic of a question but is needed in almost every one. Second, OCR separates sketching from plotting: a sketch "does not have to be to scale" and is "drawn freehand", while a plot is drawn on graph paper from calculated points. Students who plot when asked to sketch waste minutes; students who sketch when asked to plot lose accuracy marks.' },
        { kind: 'table', mt: true, caption: 'Marks per paper by assessment objective, from the J560 specification', head: ['Tier', 'AO1 standard techniques', 'AO2 reasoning and communication', 'AO3 problem solving', 'Paper total'], rows: [
          ['Foundation (Papers 1 to 3)', '50', '25', '25', '100'],
          ['Higher (Papers 4 to 6)', '40', '30', '30', '100']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The formulae sheet',
          left: [
            'The specification still says "The assessment for this specification will not include a formula sheet", listing the formulae to recall under reference 6.02d.',
            'That line has been overtaken. Ofqual requires formulae sheets in GCSE Maths for 2025 to 2027 and again for every series from 2028 while this specification lasts, and OCR\'s J560 assessment page lists Foundation and Higher formulae sheets for the June 2027 and November 2027 series.'
          ],
          rightH3: 'Use the sheet, know the sheet',
          right: [
            'OCR\'s Paper 1 report lists among weaker candidates those who "did not know the correct formulae or use the formulae sheet".',
            'Ofqual has also told the boards not to set a question a student could finish by copying from the sheet, so recall of 6.02d still pays: the sheet is a backstop, not a method.'
          ] },
        { kind: 'source', html: 'Sources: OCR J560 specification version 2.1 (content sections 2b and 3g); OCR J560 assessment page, formulae sheets for 2027; <a class="ag-inline-link" href="https://www.gov.uk/government/consultations/proposed-changes-to-the-assessment-of-mathematics-physics-and-combined-science-gcses" rel="noopener" target="_blank">Ofqual decisions on formulae sheets</a>. Read on 31 October 2026.' }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Three J560-style questions we wrote, built around the calculator',
      lede: 'Our own questions, not OCR\'s, on three habits the 2025 reports named: indices by hand, proportionality as an equation, and keeping accuracy through a calculation.',
      body: [
        { kind: 'two',
          leftH3: 'Example 1, indices: put the calculator down (Higher)',
          left: [
            '<strong>Question (ours).</strong> Find x if 2<sup>x + 1</sup> = 8<sup>3</sup> ÷ 4.',
            '<strong>Think first.</strong> Every number here is a power of 2. Writing them that way is the whole method; a calculator gives 128 and hides the structure.',
            '<strong>Working.</strong> 8 = 2<sup>3</sup>, so 8<sup>3</sup> = 2<sup>9</sup>. 4 = 2<sup>2</sup>. So 8<sup>3</sup> ÷ 4 = 2<sup>9 &minus; 2</sup> = 2<sup>7</sup>.',
            '<strong>Answer.</strong> x + 1 = 7, so x = 6. Check: 2<sup>7</sup> = 128, and 512 ÷ 4 = 128. The calculator is used only for that check.'
          ],
          rightH3: 'Example 2, proportionality as an equation (Higher)',
          right: [
            '<strong>Question (ours).</strong> y is inversely proportional to the square of x. When x = 2, y = 15. Find y when x = 5.',
            '<strong>Set up.</strong> Turn the words into an equation with a constant: y = k ÷ x². The report\'s weaker candidates left the proportion symbol in place; it has to go.',
            '<strong>Working.</strong> 15 = k ÷ 4, so k = 60 and y = 60 ÷ x². When x = 5, y = 60 ÷ 25 = 2.4.',
            '<strong>Sense check.</strong> x has grown, so y should shrink, and faster than x grows. From 15 to 2.4 fits.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Example 3, keep the accuracy (Foundation and Higher)',
          left: [
            '<strong>Question (ours).</strong> A cylinder has radius 3.7 cm and height 12.5 cm. A cone with the same radius has the same volume. Find the cone\'s height, to 3 significant figures.',
            '<strong>Working.</strong> Cylinder volume = π × 3.7² × 12.5 = 537.6... cm³. Keep this in the calculator memory rather than writing 537.',
            '<strong>Cone.</strong> Volume = ⅓ × π × 3.7² × h. Setting equal: ⅓ × π × 3.7² × h = π × 3.7² × 12.5, so h = 3 × 12.5 = 37.5 cm.',
            '<strong>The lesson.</strong> The algebra cancels π × 3.7² entirely. A student who rounds the first volume to 538 and divides gets 37.53..., and has to hope it rounds the right way. Spotting the cancellation needs no calculator at all.'
          ],
          rightH3: 'The rule behind all three',
          right: [
            'Example 1 rewards putting the calculator down. Example 2 rewards writing the equation before calculating. Example 3 rewards algebra before arithmetic, then full accuracy if arithmetic is needed.',
            'That is the judgement OCR\'s examiners describe, and it is a better use of revision time than another unmarked past paper.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, answers at the end).</strong> (1) Without a calculator, write 9<sup>4</sup> × 3<sup>&minus;2</sup> as a power of 3. (2) p is directly proportional to the cube of q; p = 54 when q = 3; find p when q = 5. (3) With a calculator, work out (4.6² + 2.9) ÷ (1.85 &minus; 0.37) to 3 significant figures. (4) Simplify √12 + √27 without a calculator. (5) Sketch y = x² &minus; 4 and label where it crosses the axes. <strong>Answers:</strong> (1) 3<sup>6</sup>; (2) 250; (3) 16.3; (4) 5√3; (5) a parabola with its minimum at (0, &minus;4), cutting the x-axis at &minus;2 and 2.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan to June 2027',
      h2: 'How should a student revise for OCR J560 before May 2027?',
      lede: 'Our seven-month outline from November 2026 to Paper 3 or 6 on 14 June 2027, built around OCR\'s calculator order.',
      body: [
        { kind: 'ol', items: [
          '<strong>November 2026: confirm the entry.</strong> J560F or J560H, and write the order on the wall: calculator on 14 May, non-calculator on 27 May, calculator on 14 June 2027.',
          '<strong>December 2026: one calculator paper first.</strong> Sit an OCR Paper 1 or 4 timed. Mark every question as "should have used the calculator", "should not have", or "fine".',
          '<strong>January 2027: mocks and the twelve areas.</strong> Log lost marks against OCR 1 to OCR 12 and pick the three areas that cost most.',
          '<strong>February 2027: non-calculator fluency.</strong> Daily short sets of fractions, indices and surds by hand, ready for Paper 2 or 5.',
          '<strong>March 2027: the 2027 formulae sheet.</strong> Practise with OCR\'s sheet for the June 2027 series beside every paper, and recall the 6.02d list anyway.',
          '<strong>April 2027: papers in OCR order.</strong> Calculator, non-calculator, calculator, each marked with OCR\'s scheme. ExamBuilder, OCR\'s free past-question service for centres, is worth asking the school about.',
          '<strong>May and June 2027: review between mornings.</strong> Use the 13 days after 14 May to fix what Paper 1 or 4 exposed, then the 18 days before 14 June for the last calculator paper.'
        ] },
        { kind: 'p', mt: true, html: 'The plan is ours and is a template, not a promise of any grade. A Foundation student near grade 4 spends longer on OCR 2 and OCR 5, fractions and ratio; a Higher student aiming at 8 or 9 spends the spring on OCR 3, OCR 6 and OCR 7, where the indices, algebra and graphs sit. For a wider view of the boards, see our <a class="ag-inline-link" href="/aqa-vs-edexcel-vs-ocr-gcse-maths">comparison of AQA, Edexcel and OCR</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs for an OCR J560 student',
    lede: 'Each rung is observable on a real OCR paper.',
    table: { caption: 'The four checks, in order', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Order known', 'On joining', 'Can say which J560 papers are calculator papers and on which mornings'],
      ['2. Calculator judgement', 'Year 10 summer', 'Chooses correctly between calculator and hand methods on a full Paper 1 or 4'],
      ['3. Accuracy kept', 'Spring of Year 11', 'No truncated intermediate values across a whole paper'],
      ['4. Working laid out', 'Before 14 May 2027', 'Brackets, equations and "show that" steps written in order, top to bottom']
    ] },
    left: { h3: 'The quickest win', ps: [
      'Rung one costs nothing and stops the commonest mismatch: revising for a non-calculator first morning that OCR students will not sit.',
      'If computing is also on the timetable, see our <a class="ag-inline-link" href="/ocr-gcse-computer-science-j277-help">OCR GCSE Computer Science J277 page</a>.'
    ] },
    right: { h3: 'The slowest rung', ps: [
      'Laying out working is a habit built over months. We mark layout as well as answers on every OCR paper.',
      'Families receive a monthly note.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around OCR GCSE Maths',
    lede: 'Grouped by when a J560 student usually needs them.',
    bands: [
      { num: 'I', h3: 'The GCSE', sub: 'Foundation and Higher', courses: [
        { code: 'UK / OJ1 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE Maths', blurb: 'OCR 1 to OCR 12 at the student\'s tier.' },
        { code: 'UK / OJ1 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'Brackets, order of operations and clean algebra.' },
        { code: 'UK / OJ1 / 03', slug: 'gcse-maths-resit-course', title: 'GCSE Maths Resit', blurb: 'A J560 resit planned from the first attempt.' }
      ] },
      { num: 'II', h3: 'Strands', sub: 'Depth on one area', courses: [
        { code: 'UK / OJ2 / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'OCR 11 and OCR 12 taken further.' },
        { code: 'UK / OJ2 / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Hand arithmetic for Paper 2 or Paper 5.' },
        { code: 'UK / OJ2 / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Fractions and ratio for students below grade 4.' }
      ] },
      { num: 'III', h3: 'After J560', sub: 'Post-16 maths', courses: [
        { code: 'UK / OJ3 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, statistics and mechanics, for a confident Higher student.' },
        { code: 'UK / OJ3 / 02', slug: 'a-level-further-maths-course', title: 'A level Further Maths', blurb: 'A second maths A level, for the keenest J560 students.' },
        { code: 'UK / OJ3 / 03', slug: 'functional-skills-maths-course', title: 'Functional Skills Maths', blurb: 'An alternative Level 2 route after 16.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Live J560 classes in OCR\'s paper order',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Classes are taught from India and timetabled in UK time.',
    slots: [
      { time: 'After school', l: 'A regular slot for Years 10 and 11.' },
      { time: 'Evenings', l: 'Around homework and clubs.' },
      { time: 'Weekend mornings', l: 'Time for a full 100-mark paper.' }
    ],
    cells: [
      { h3: 'OCR papers only', p: 'OCR past papers and mark schemes, in OCR\'s own calculator order.' },
      { h3: 'Calculator judgement', p: 'Every question marked for the tool choice as well as the answer.' },
      { h3: 'Accuracy habits', p: 'Values kept in memory and rounded once, at the end.' },
      { h3: 'Layout taught', p: 'Brackets, equations and "show that" working written in order.' },
      { h3: 'Free first class', p: 'A live class before any payment, to agree the starting point.' },
      { h3: 'Two formats', p: 'A batch of 15 to 20 J560 students at one tier, or 1-on-1.' }
    ]
  },

  projectsH2: 'Projects from our classes',
  projectsLede: 'Made in ordinary lessons and never assessed. See more in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' reviews on Google, unchanged.',

  fees: {
    h2: 'Fees for OCR GCSE Maths classes',
    lede: 'We charge nothing for the first class. After that it is a monthly fee, cheaper for a group seat than for 1-on-1, with no contract, and no payment is taken until a weekly time is settled.',
    free: ['A live class at the student\'s OCR tier', 'A first paper marked for calculator choices', 'Booked with a phone number'],
    group: ['15 to 20 students at one tier', 'One teacher through to June 2027', 'An OCR paper marked most weeks', 'A monthly note for parents'],
    one: ['A teacher for one student', 'Planned around that student\'s OCR papers', 'Suits resits and late joiners']
  },

  faq: {
    eyebrow: 'Questions about OCR J560',
    h2: 'What families ask about OCR GCSE Maths',
    items: [
      { q: 'How many papers are in OCR GCSE Maths J560?', a: 'Three at each tier: Papers 1, 2 and 3 for Foundation and Papers 4, 5 and 6 for Higher. Every paper runs for 90 minutes and carries 100 marks, and a student takes the three together in one series.' },
      { q: 'Is OCR GCSE Maths Paper 1 calculator or non-calculator?', a: 'Calculator. OCR allows a calculator on Papers 1 and 3 (Foundation) and Papers 4 and 6 (Higher); Papers 2 and 5 are the non-calculator papers. This is the opposite of AQA and Edexcel, whose Paper 1 is non-calculator.' },
      { q: 'When are the OCR GCSE Maths exams in 2027?', a: 'OCR\'s final June 2027 timetable places J560 on Friday 14 May 2027, then Thursday 27 May, then Monday 14 June, each in the morning session. The November 2026 papers fall on 4 November, 6 November and 9 November 2026.' },
      { q: 'Is OCR GCSE Maths harder than AQA or Edexcel?', a: 'All three boards teach the same DfE content and award the same grades, so none is officially harder. OCR differs in layout: 100-mark papers, a three-column specification and a calculator paper first, which some students find suits them better and others less.' },
      { q: 'Does OCR GCSE Maths have a formula sheet?', a: 'For the 2027 exams, yes. The specification still says there is no formula sheet, but Ofqual now requires formulae sheets in GCSE Maths, and OCR\'s J560 assessment page lists Foundation and Higher sheets for the June 2027 series.' },
      { q: 'What grades can you get on OCR Foundation and Higher?', a: 'Foundation awards grades 5 to 1 and Higher awards 9 to 4. On Higher, an allowed grade 3 may be given to a student a small number of marks below the grade 3/4 boundary.' },
      { q: 'Where can I find OCR GCSE Maths past papers?', a: 'OCR publishes some recent papers, mark schemes and examiners\' reports on its J560 assessment page, and more through Teach Cambridge for schools. OCR also runs ExamBuilder, a free past-question service for centres.' },
      { q: 'Can my child sit OCR J560 in November?', a: 'Only students aged 16 or over by 31 August of that calendar year can enter, according to the specification. That makes November a route for students who have already left Year 11.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set in UK time.' },
      { q: 'Are you connected with OCR?', a: 'No. Modern Age Coders is independent of Cambridge OCR. We teach to the published J560 specification, use OCR\'s freely available papers and reports, and never promise a grade.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages for J560 students',
    lede: 'Comparisons, paper types, and life after the exam.',
    items: [
      { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'AQA vs Edexcel vs OCR', p: 'The three English boards compared.' },
      { href: '/gcse-maths-calculator-vs-non-calculator-papers', label: 'Calculator and non-calculator papers', p: 'Preparing for both kinds.' },
      { href: '/gcse-maths-foundation-vs-higher', label: 'Foundation or Higher', p: 'How the tier is chosen.' },
      { href: '/gcse-maths-grades-explained', label: 'The 9 to 1 scale', p: 'How OCR grades map onto the national scale.' },
      { href: '/gcse-maths-resit-explained', label: 'Resits', p: 'The November series and the post-16 rules.' },
      { href: '/coding-classes-in-united-kingdom', label: 'UK hub', p: 'Every UK maths and computing page.' }
    ]
  },

  start: {
    h2: 'Book a free OCR J560 class',
    lede: 'Leave your number and a teacher will phone at a UK time you choose. The class uses an OCR calculator paper at the student\'s tier and marks the tool choices as well as the answers.',
    readFirst: 'Want to read before booking? The <a class="ag-inline-link" href="/courses/gcse-mathematics-mastery">GCSE Maths course page</a> has the full syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the method.',
    note: 'WhatsApp is our fastest channel and free from a UK mobile. The reply comes from our India office, on a number starting +91.',
    formNote: 'No card, no contract. We send one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'GCSE Maths', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'Board comparison' },
        { href: '/gcse-maths-calculator-vs-non-calculator-papers', label: 'Calculator papers' },
        { href: '/gcse-maths-resit-explained', label: 'Resits' }
      ] },
      { h4: 'Also OCR', links: [
        { href: '/ocr-gcse-computer-science-j277-help', label: 'OCR Computer Science J277' },
        { href: '/ocr-a-level-computer-science-h446-help', label: 'OCR A level Computer Science' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'OCR J560 maths, live in UK time'
  },

  personalityCss: `
.ag-root.ag-ogj .ag-hero h1 { letter-spacing: -0.012em; font-weight: 700; }
.ag-root.ag-ogj .ag-capsule { border-left-width: 6px; border-radius: 1px; }
.ag-root.ag-ogj .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-ogj .ag-table caption { text-align: left; font-weight: 640; }
.ag-root.ag-ogj .ag-table td:first-child { font-family: 'JetBrains Mono', monospace; font-size: 0.92em; }
.ag-root.ag-ogj .ag-steps li { margin-bottom: 10px; }
`,

  dossier: {
    curriculumAuthority: 'England, Cambridge OCR GCSE (9-1) Mathematics J560, specification version 2.1 August 2026: Foundation Papers 1 to 3 grades 5 to 1, Higher Papers 4 to 6 grades 9 to 4 with allowed grade 3; each paper 100 marks, 1 hour 30 minutes; Papers 1, 3, 4, 6 calculator, 2 and 5 non-calculator; three cumulative columns; twelve areas OCR 1 to OCR 12; KS1 and KS2 assumed not assessed directly; all content on either paper type; sketch versus plot; spec line on no formula sheet (overtaken by Ofqual); 6.02d formulae; AO marks per paper 50/25/25 and 40/30/30; November only at 16 by 31 August; J560F and J560H; QN 601/4606/0; private candidates UK-based; ExamBuilder. OCR final timetables November 2026 and June 2027. OCR J560 assessment page: formulae sheets for June and November 2027. OCR Summer 2025 examiners\' reports J560/01 and J560/04. Ofqual formulae sheet decisions.',
    localProject: 'OCR puts a calculator paper first. The page tables all six J560 papers with calculator rule, marks and OCR\'s own November 2026 and June 2027 dates, contrasts OCR\'s 14 May calculator paper with AQA and Edexcel\'s non-calculator one, and builds a calculator decision rule (use it for arithmetic, pause for structure, keep accuracy) from OCR\'s Summer 2025 J560/01 and J560/04 examiners\' reports. It explains the three cumulative columns and the twelve OCR content areas, the AO marks per 100-mark paper, and the overtaken no-formula-sheet line. Three original worked examples (2 to the x + 1 equals 8 cubed over 4, an inverse square proportion, a cylinder and cone where pi times r squared cancels), a practice set and a plan to June 2027 follow. Lesson family: a board door built on a paper-order and tool-use decision.',
    requiredMentions: [
      'QN 601/4606/0',
      'An allowed grade 3 may be awarded on the Higher tier option for learners who are a small number of marks below the grade 3/4 boundary.',
      'All content may be assessed on either the calculator or non-calculator papers.',
      'Candidates are expected to use a calculator on this paper.',
      'even on a calculator paper, not every single question will require them to use their calculator.',
      'Many candidates truncated figures in their working, which often led to an inaccurate answer',
      'The assessment for this specification will not include a formula sheet',
      'Knowledge of the content of Key Stages 1 and 2 is therefore assumed, but will not be assessed directly',
      'A cylinder has radius 3.7 cm and height 12.5 cm.'
    ],
    sources: [
      { claim: 'OCR GCSE (9-1) Mathematics J560 specification, version 2.1 August 2026: papers, tiers, grades, columns, content areas, AO marks, November rule, entry options, QN, private candidates.', url: 'https://www.ocr.org.uk/Images/168982-specification-gcse-mathematics.pdf' },
      { claim: 'OCR final examination timetables, November 2026 and June 2027 GCSE: J560 paper dates and calculator labels.', url: 'https://www.ocr.org.uk/administration/key-dates-and-timetables/' },
      { claim: 'OCR J560 assessment page: formulae sheets for the 2027 June and November series; Summer 2025 examiners\' reports.', url: 'https://www.ocr.org.uk/qualifications/gcse/mathematics-j560-from-2015/assessment/' },
      { claim: 'OCR Examiners\' report J560/04 Summer 2025.', url: 'https://www.ocr.org.uk/Images/753164-examiners-report-paper-4.pdf' },
      { claim: 'OCR Examiners\' report J560/01 Summer 2025.', url: 'https://www.ocr.org.uk/Images/753167-examiners-report-paper-1.pdf' },
      { claim: 'Ofqual decisions on formulae sheets in GCSE maths from 2028.', url: 'https://www.gov.uk/government/consultations/proposed-changes-to-the-assessment-of-mathematics-physics-and-combined-science-gcses' }
    ],
    rejectedClaims: [
      'OCR grade boundaries for 2025 or 2026: autocomplete asks for them, but they were not read at a primary source for this build, so none are quoted.',
      'OCR entry numbers and market share: not read at a primary source; the page says nothing about board size.',
      'The specification line that there is no formula sheet is reported as overtaken, not repeated as current, because Ofqual\'s decisions and OCR\'s own 2027 formulae sheets supersede it.',
      'Any claim that OCR is easier or harder than other boards: declined.',
      'Past paper questions: OCR\'s Question 10 and Question 19 described only in general terms; our examples are original.',
      'Any promised grade: declined.'
    ]
  }
};
