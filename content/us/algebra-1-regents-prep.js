'use strict';
// Algebra I Regents prep (ag- state-exam door; UK and US exams cluster, row US017). One of three Regents pages: this one's
// spine is Part IV modelling and the reference sheet; Geometry's is proof and tools; Algebra II's is functions and the
// newest exam.
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from NYSED
// (nysed.gov, nysedregents.org); copies in keyword-research-2026-09/uk-us-gap/src/algebra-1-regents-prep/:
//  - Implementation Schedule for New Regents Examinations (memo, January 2023): the exams "will measure student achievement
//    in terms of the NYS Next Generation Learning Standards"; "the current Regents Examination in Algebra I will be offered
//    for the last time in January 2024 and the new exam measuring the NGLS will begin in June 2024."
//  - Algebra I Educator Guide (updated October 2023): blueprint by conceptual category, percent of test by credits: Number &
//    Quantity 4% - 10%, Algebra 48% - 61%, Functions 24% - 32%, Statistics & Probability 7% - 15%; "Students are permitted
//    three hours"; four answer choices; "Students must also have the exclusive use of a graphing calculator for the full
//    duration of the examination"; 2-, 4- and 6-credit constructed response; design Part I 24 x 2 = 48, Part II 6 x 2 = 12,
//    Part III 4 x 4 = 16, Part IV 1 x 6 = 6, "Total 35 - 82" (as published); "A detachable reference sheet will be included";
//    it "contains information that students are expected to apply, but not necessarily memorize"; five performance levels;
//    Level 3 "minimally meet the expectations ... They meet the content area requirements for a Regents diploma but may need
//    additional support to succeed in the next level of coursework."; October 2023 revision "with an updated Annual
//    Compound Interest formula".
//  - Reference Sheet for Algebra I (NGLS): conversions (1 mile = 5280 feet, 1 inch = 2.54 centimeters ...), quadratic
//    formula, axis of symmetry, exponential equation y = ab^x, annual compound interest A = P(1 + r)^n, arithmetic and
//    geometric sequences, IQR = Q3 - Q1, outlier boundaries Q1 - 1.5(IQR) and Q3 + 1.5(IQR).
//  - Final Dates memo (December 2025): January 2027 period "Tuesday, January 26 through Friday, January 29"; June 2027
//    "Tuesday, June 15 through Friday, June 25"; August 2027 "Tuesday, August 17 and Wednesday, August 18".
//  - June 2027 and August 2027 schedules (DET 504, layout-extracted): Algebra I Wednesday June 16, 1:15 p.m.; Tuesday August
//    17, 8:30 a.m. The January 2027 sheet is marked DRAFT, so no January day is printed.
//  - nysedregents.org/algebraone: for each administration, the exam, scoring key, rating guide, model response set and a
//    "Conversion Chart" (raw score, scale score, performance level; the June 2026 chart starts at raw 82).
//  - General Education and Diploma Requirements: Regents or local diploma requires passing "one mathematics Regents
//    Examination or NYSED-Approved Regents Examination Alternative"; advanced designation "three mathematics Regents
//    Examinations".
//  - NY Inspires transformation timeline and FAQ (September 2026): "Diploma assessment requirements would sunset in the Fall
//    of 2027"; students graduating beginning January 2028 "would not be required to pass Regents exams"; "NYSED is not
//    eliminating the Regents Examinations."; "The Board of Regents must approve any changes to the New York State graduation
//    requirements. Until such time, the existing requirements remain in effect for all students."
// Conversion chart values are described, never reproduced. No past exam question is reproduced.
// Our own material, labelled: the garden Part IV model (t + p <= 30, 3t + 2p <= 72, corner (12, 18), test points (14, 14)
// and (15, 14)); the IQR outlier example (Q1 12, Q3 20, fences 0 and 32); the video views model 200(3)^w; the practice set;
// the plan. Lesson family: Part IV modelling, define variables, write constraints, graph, interpret in context.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const FILES = 'https://www.nysed.gov/sites/default/files/programs/state-assessment';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'REGENTS ALGEBRA I', blurb: 'The Next Generation Algebra I Regents from NYSED: four parts, 82 credits, the reference sheet, the June 16, 2027 sitting and a Part IV model worked in full.' },
  slug: 'algebra-1-regents-prep',
  code: 'gaq',
  accent: '#026942',
  accentRationale: 'Algebra I Regents: an emerald #026942 as allocated, 6.39:1 on paper #FBF8F2 and 5.49:1 on the deepest tint, separate from the Geometry teal and the Algebra II green',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-classes-in-new-york', name: 'New York' }],
  routeLabel: 'Algebra 1 Regents prep',
  title: 'Algebra 1 Regents Prep: Live Online Classes for June 2027',
  description: 'Algebra 1 Regents prep from NYSED: the four-part, 82-credit Next Generation exam, the reference sheet, the June 16, 2027 date and a Part IV model worked in full.',
  ogDescription: 'Since June 2024 the Algebra I Regents measures the Next Generation standards. Its parts, its reference sheet, how conversion charts work, and a 6-credit modelling question solved step by step.',
  twitterDescription: 'The Next Generation Algebra I Regents from NYSED, with a Part IV model solved.',
  pageName: 'Algebra 1 Regents Prep',
  webPageDescription: 'A guide for New York students to the Regents Examination in Algebra I (Next Generation), built from the NYSED educator guide, reference sheet, 2027 examination schedules, diploma requirements and NY Inspires pages, with an original Part IV worked example and practice.',
  courseDescription: 'Live online Algebra I Regents preparation for New York students in grades 8 to 10, built on the Next Generation standards, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Algebra 1 Regents prep',
  navLinks: [
    { href: '#parts', label: 'Four parts' },
    { href: '#content', label: 'Content' },
    { href: '#sheet', label: 'Reference sheet' },
    { href: '#part-four', label: 'Part IV' },
    { href: '#dates', label: '2027 dates' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New York &middot; Regents Examination in Algebra I &middot; Next Generation, since June 2024',
  h1: 'Algebra 1 Regents prep',
  lede: 'The Algebra I Regents is the math exam most New York students sit first, usually in grade 9 and sometimes in grade 8. Since June 2024 it has been a new exam built on the Next Generation standards, so older review books and many online question banks no longer match it. The shape, though, is fixed and public: four parts, 35 questions, three hours, a graphing calculator and a printed reference sheet. This guide takes each of those from NYSED and then works through the single 6-credit question at the end of the paper, the one students most often leave blank.',
  secondaryCta: { href: '#part-four', label: 'See Part IV worked' },
  wa: 'Hello Modern Age Coders, my child in New York is taking the Algebra I Regents. Could we book a free first class?',
  heroNote: 'Algebra live online since 2020 &middot; 10,000+ students &middot; times on Eastern Time',
  spec: [
    ['Exam', 'Regents Examination in Algebra I'],
    ['Standards', 'Next Generation, since June 2024'],
    ['Questions', '35, worth 82 credits'],
    ['Time', 'Three hours'],
    ['Calculator', 'Graphing, whole exam'],
    ['June 2027', 'Wednesday June 16, 1:15 p.m.'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Algebra I Regents is the New York State Education Department&rsquo;s end-of-course exam in Algebra I, aligned since June 2024 to the Next Generation Learning Standards. It has 35 questions worth 82 credits in four parts, students get three hours with a graphing calculator, and the June 2027 sitting is Wednesday, June 16 at 1:15 p.m. Modern Age Coders teaches Algebra I Regents prep live online, in a batch or 1-on-1, through our Algebra Foundations course.',

  picks: {
    eyebrow: 'For the Algebra I Regents',
    h2: 'Three courses that build to the Algebra I Regents',
    lede: 'Choose by where the student is today: shaky on equations, in the course now, or already looking at Geometry.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'GAQ / 01', title: 'Algebra foundations', note: 'Pre-algebra through Algebra I, matched to the Next Generation course.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'GAQ / 02', title: 'Middle school math', note: 'Grade 7 and 8 ground for accelerated students.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'GAQ / 03', title: 'High school math', note: 'Algebra I, then Geometry and Algebra II.' }
    ]
  },

  sections: [
    {
      id: 'parts', tint: 'tint', eyebrow: 'Four parts',
      h2: 'How is the Algebra 1 Regents structured?',
      lede: 'Four parts in one booklet, 35 questions in all. Part I is multiple choice; Parts II to IV ask students to show their work, and the credit per question rises from 2 to 6.',
      body: [
        { kind: 'table', caption: 'Algebra I examination design (NYSED Algebra I Educator Guide, updated October 2023, read 31 October 2026)', head: ['Part', 'Questions', 'Credits each', 'Credits in the part'], numCols: [1, 2, 3], rows: [
          ['Part I (multiple choice)', '24', '2', '48'],
          ['Part II (constructed response)', '6', '2', '12'],
          ['Part III (constructed response)', '4', '4', '16'],
          ['Part IV (constructed response)', '1', '6', '6'],
          ['Total (as published)', '35', '', '82']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the parts reward',
          left: [
            'Part I carries 48 of the 82 credits, more than half, and each question has four answer choices. NYSED writes the wrong choices from &ldquo;plausible missteps&rdquo;, so a sign error usually leads straight to one of them.',
            'Parts II to IV are where working counts. NYSED asks students to show &ldquo;the necessary steps, including appropriate formula substitutions, diagrams, graphs, charts, etc.&rdquo;'
          ],
          rightH3: 'Three hours, one booklet',
          right: [
            'The educator guide says students are permitted three hours and that most will finish sooner. They may not leave before the uniform admission deadline, which on the June 2027 schedule is 2:00 p.m. for afternoon exams.',
            'A graphing calculator is required for the whole exam, and a straightedge must be available. Calculators that manipulate symbols or talk to other calculators are not allowed.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + FILES + '/algebra-one-educator-guide-2023.pdf" rel="noopener" target="_blank">Algebra I Educator Guide</a>, NYSED Office of State Assessment, read 31 October 2026. Modern Age Coders is not connected with NYSED, the Board of Regents or any New York district.' }
      ]
    },
    {
      id: 'content', tint: 'deep', eyebrow: 'Content',
      h2: 'What topics are on the Algebra 1 Regents?',
      lede: 'Four conceptual categories from the Next Generation standards. Algebra itself carries about half the credit or more.',
      body: [
        { kind: 'table', caption: 'Algebra I blueprint: percent of test by credits (NYSED Algebra I Educator Guide, read 31 October 2026)', head: ['Conceptual category', 'Percent of credits', 'Domains'], rows: [
          ['Number and Quantity', '4 to 10%', 'The Real Number System; Quantities'],
          ['Algebra', '48 to 61%', 'Seeing Structure in Expressions; Arithmetic with Polynomials and Rational Expressions; Creating Equations; Reasoning with Equations and Inequalities'],
          ['Functions', '24 to 32%', 'Interpreting Functions; Building Functions; Linear, Quadratic, and Exponential Models'],
          ['Statistics and Probability', '7 to 15%', 'Interpreting Categorical and Quantitative Data']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Modelling runs through everything',
          left: [
            'NYSED notes that Modeling is part of Algebra I but is &ldquo;best interpreted not as a collection of isolated topics but rather in relation to other standards.&rdquo; In practice that means word problems in every category, and above all in Part IV.',
            'Questions can also touch more than one standard at once, so the exam tests connected understanding rather than isolated drills.'
          ],
          rightH3: 'What that means for revision',
          right: [
            'Creating equations and reasoning with equations and inequalities together form the heart of the Algebra category. A student who can turn a sentence into an equation or inequality, and solve it, has most of the exam in hand.',
            'Statistics is small but reliable: a box plot, a regression, an interquartile range. These are some of the most learnable credits on the paper.'
          ] },
        { kind: 'p', mt: true, html: 'Why older materials mislead: NYSED&rsquo;s January 2023 implementation memo said &ldquo;the current Regents Examination in Algebra I will be offered for the last time in January 2024 and the new exam measuring the NGLS will begin in June 2024.&rdquo; Practice from before June 2024 was written for the previous standards, so some topics and question styles no longer match.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + FILES + '/memo-implementation-schedule-new-regents-exams.pdf" rel="noopener" target="_blank">Implementation Schedule for New Regents Examinations</a>, NYSED, January 2023, read 31 October 2026.' }
      ]
    },
    {
      id: 'sheet', tint: 'tint', eyebrow: 'Reference sheet',
      h2: 'What is on the Algebra 1 Regents reference sheet?',
      lede: 'A detachable sheet is bound into the end of the booklet. NYSED says it holds information students are expected to apply, &ldquo;but not necessarily memorize&rdquo;.',
      body: [
        { kind: 'table', caption: 'Contents of the Reference Sheet for Algebra I (NGLS), as listed by NYSED (read 31 October 2026)', head: ['Section', 'What it gives'], rows: [
          ['Conversions', 'Customary units (for example 1 mile = 5280 feet) and across systems (1 inch = 2.54 centimeters)'],
          ['Quadratics', 'The quadratic equation form, the quadratic formula and the equation of the axis of symmetry'],
          ['Exponentials', 'The exponential equation y = ab<sup>x</sup> and annual compound interest A = P(1 + r)<sup>n</sup>'],
          ['Sequences', 'Formulas for the nth term of arithmetic and geometric sequences'],
          ['Statistics', 'Interquartile range IQR = Q3 - Q1 and the lower and upper outlier boundaries']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Using the sheet well',
          left: [
            'The educator guide asks teachers to use the sheet in instruction all year, and we do: students look up the outlier boundary formula on the real sheet instead of a copy in their own handwriting.',
            'NYSED revised the sheet in October 2023 with an updated annual compound interest formula. Make sure any practice sheet in use is the current one.'
          ],
          rightH3: 'Our quick example with the sheet',
          right: [
            'A data set has Q1 = 12 and Q3 = 20. The sheet gives IQR = Q3 - Q1 = 8. The lower outlier boundary is Q1 - 1.5(IQR) = 12 - 12 = 0 and the upper is Q3 + 1.5(IQR) = 20 + 12 = 32. A value of 35 is an outlier; 30 is not.',
            'That is a reliable two credits for anyone who knows where to look.'
          ] },
        { kind: 'source', html: 'NYSED publishes the <a class="ag-inline-link" href="https://www.nysed.gov/state-assessment/next-generation-algebra-i-reference-sheet" rel="noopener" target="_blank">Next Generation Algebra I Reference Sheet</a> in English and several other languages.' }
      ]
    },
    {
      id: 'part-four', tint: 'deep', eyebrow: 'Part IV',
      h2: 'How to answer the 6-credit Part IV question',
      lede: 'Part IV is one longer modelling problem. Our example below is written in that style; it is not a past Regents question.',
      body: [
        { kind: 'ol', items: [
          '<b>The problem (ours).</b> A community garden has room for at most 30 plants. Each tomato plant needs 3 liters of water a day and each pepper plant 2 liters, and the garden can supply at most 72 liters a day. Write a system of inequalities, graph it, and decide whether 14 tomato plants and 14 pepper plants is possible. Then decide about 15 tomatoes and 14 peppers.',
          '<b>Define the variables in words.</b> Let t be the number of tomato plants and p the number of pepper plants. Graders look for this sentence; leaving it out costs clarity at the start.',
          '<b>Write the constraints.</b> Space: t + p &le; 30. Water: 3t + 2p &le; 72. Both t and p are at least 0.',
          '<b>Graph.</b> t + p = 30 passes through (30, 0) and (0, 30). 3t + 2p = 72 passes through (24, 0) and (0, 36). Shade below both lines in the first quadrant. The boundaries cross where t + p = 30 and 3t + 2p = 72: subtracting twice the first from the second gives t = 12, so p = 18.',
          '<b>Test the points.</b> (14, 14): 14 + 14 = 28 &le; 30 and 42 + 28 = 70 &le; 72, so it is possible. (15, 14): 29 &le; 30 but 45 + 28 = 73, which is more than 72, so it is not.',
          '<b>Answer in a sentence, in context.</b> &ldquo;14 tomato plants and 14 pepper plants fit the space and water limits; 15 tomatoes and 14 peppers would need 73 liters, one more than the garden can supply.&rdquo;'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why students lose Part IV credit',
          left: [
            'They solve correctly but never define t and p, label nothing on the graph, or stop at a number without answering the question in context. Each of those is avoidable.'
          ],
          rightH3: 'How we practise it',
          right: [
            'One Part IV-style problem a week from the start of the course, always in the same five moves: define, write, graph, test, conclude. By May the routine is automatic.'
          ] }
      ]
    },
    {
      id: 'scoring', tint: 'tint', eyebrow: 'Scoring',
      h2: 'How is the Algebra 1 Regents scored?',
      lede: 'Raw credits, up to 82, are turned into a scale score and a performance level with a conversion chart NYSED publishes for every administration.',
      body: [
        { kind: 'two',
          leftH3: 'Conversion charts',
          left: [
            'For each sitting, the Algebra I page on nysedregents.org posts the exam, the scoring key, the rating guide, a model response set and a conversion chart. The chart lists every raw score from 82 down, with its scale score and performance level.',
            'The chart is set for each exam form, so the raw score needed for a given scale score can differ from one June to the next. Use the chart that matches the exam you practise with, never one from another year.'
          ],
          rightH3: 'Five performance levels',
          right: [
            'Regents exams report five levels. For Level 3 the educator guide says students &ldquo;meet the content area requirements for a Regents diploma but may need additional support to succeed in the next level of coursework.&rdquo;',
            'Levels 4 and 5 describe stronger command of the course. NYSED publishes performance level descriptions for each one alongside the guide.'
          ] },
        { kind: 'p', mt: true, html: 'Scoring keys and rating guides are password protected until the day of each exam, then posted for schools, according to NYSED&rsquo;s high school scoring page. After that, they are a fine study aid: a student can mark their own practice paper with the official rating guide and see exactly where credit was lost.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.nysedregents.org/algebraone/" rel="noopener" target="_blank">Past Regents Examinations in Algebra I</a> and <a class="ag-inline-link" href="https://www.nysed.gov/state-assessment/high-school-scoring-information" rel="noopener" target="_blank">High School Scoring Information</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'dates', tint: 'deep', eyebrow: 'Dates and diplomas',
      h2: 'When is the Algebra 1 Regents in 2027, and is it still required?',
      lede: 'NYSED offers Algebra I in January, June and August. Whether passing it remains a diploma requirement depends on a proposal the Board of Regents has not yet approved.',
      body: [
        { kind: 'table', caption: 'Algebra I Regents sittings in 2027 (NYSED final dates memo, December 2025, and June and August 2027 examination schedules, read 31 October 2026)', head: ['Period', 'Algebra I', 'Note'], rows: [
          ['January 2027', 'Within Tuesday, January 26 to Friday, January 29', 'NYSED&rsquo;s January sheet was still marked draft; check the final version'],
          ['June 2027', 'Wednesday, June 16, 1:15 p.m.', 'Afternoon session'],
          ['August 2027', 'Tuesday, August 17, 8:30 a.m.', 'Morning session']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The diploma rule today',
          left: [
            'NYSED&rsquo;s diploma requirements page says a Regents or local diploma requires passing &ldquo;one mathematics Regents Examination or NYSED-Approved Regents Examination Alternative&rdquo;. For most students, that one is Algebra I.',
            'A Regents diploma with advanced designation needs three mathematics Regents exams, which is why Algebra I is usually only the first of three.'
          ],
          rightH3: 'NY Inspires: what is proposed',
          right: [
            'NYSED&rsquo;s NY Inspires timeline proposes that diploma assessment requirements &ldquo;sunset in the Fall of 2027&rdquo;, so students graduating from January 2028 would not need to pass Regents exams to graduate. Its FAQ is explicit that &ldquo;NYSED is not eliminating the Regents Examinations.&rdquo;',
            'NYSED adds: &ldquo;The Board of Regents must approve any changes to the New York State graduation requirements. Until such time, the existing requirements remain in effect for all students.&rdquo;'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + FILES + '/memo-regents-exam-dates-2027.pdf" rel="noopener" target="_blank">Final Dates for the 2027 Regents Examination Periods</a>, <a class="ag-inline-link" href="' + FILES + '/regents-exams-schedule-june-2027.pdf" rel="noopener" target="_blank">June 2027 schedule</a>, <a class="ag-inline-link" href="https://www.nysed.gov/curriculum-instruction/general-education-and-diploma-requirements" rel="noopener" target="_blank">Diploma Requirements</a> and <a class="ag-inline-link" href="https://www.nysed.gov/ny-inspires/transformation-timeline" rel="noopener" target="_blank">NY Inspires Transformation Timeline</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice',
      h2: 'Ten Algebra 1 Regents practice questions with answers',
      lede: 'Our own questions, tagged with the Next Generation domain they practise. Parts II to IV style questions say &ldquo;show your work&rdquo;.',
      body: [
        { kind: 'table', caption: 'Original practice (ours, not NYSED items), with answers', head: ['Domain', 'Question', 'Answer'], rows: [
          ['A-SSE', 'Factor completely: 3x&sup2; - 12.', '3(x - 2)(x + 2)'],
          ['A-APR', 'Expand (2x - 5)(x + 3).', '2x&sup2; + x - 15'],
          ['A-CED', 'A video has 200 views and the count triples each week. Write a model for views after w weeks.', 'V = 200(3)<sup>w</sup>'],
          ['A-REI', 'Solve 2(x - 4) + 3 = 5x + 7. Show your work.', 'x = -4'],
          ['A-REI', 'Solve x&sup2; - 6x - 7 = 0 by completing the square.', 'x = 7 or x = -1'],
          ['F-IF', 'f(x) = x&sup2; - 4x + 1. What is f(-2)?', '13'],
          ['F-IF', 'Over 1 &le; x &le; 3, what is the average rate of change of g(x) = 2<sup>x</sup>?', '3'],
          ['F-LE', 'Which grows faster over time, y = 50x or y = 2<sup>x</sup>? Explain.', 'y = 2<sup>x</sup>: exponential overtakes linear'],
          ['S-ID', 'Data: 4, 7, 7, 9, 12, 15. What is the median?', '8'],
          ['N-RN', 'Is the sum of the square root of 2 and 3 rational or irrational? Explain.', 'Irrational']
        ] },
        { kind: 'p', mt: true, html: 'For full rehearsal, NYSED&rsquo;s <a class="ag-inline-link" href="https://www.nysedregents.org/algebraone/" rel="noopener" target="_blank">past Algebra I exams</a> from June 2024 onward match the current Next Generation design. Earlier papers measure the old standards, so we use them only for selected topics.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan',
      h2: 'How to study for the Algebra 1 Regents in 10 weeks',
      lede: 'Our plan, counted back from Wednesday, June 16, 2027.',
      body: [
        { kind: 'ol', items: [
          '<b>Week 1: one recent Next Generation exam, marked with the rating guide.</b> Record credits lost by part, not just the total.',
          '<b>Weeks 2 to 4: equations and inequalities.</b> Creating and solving them, including systems and literal equations: the core of the Algebra category.',
          '<b>Weeks 5 and 6: functions.</b> Reading graphs and tables, average rate of change, and choosing linear, quadratic or exponential models.',
          '<b>Week 7: statistics and the reference sheet.</b> Box plots, regressions, residuals, IQR and outliers with the real sheet in hand.',
          '<b>Weeks 8 and 9: one Part IV problem every lesson.</b> Define, write, graph, test, conclude.',
          '<b>Week 10: two full three-hour papers.</b> On the graphing calculator the student will use, then a light final few days.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where the student is',
    h2: 'Four starting points for Algebra I Regents prep',
    lede: 'Our way of placing a student, and what to do first.',
    table: { caption: 'Starting points (ours)', head: ['Starting point', 'Typical sign', 'First move'], rows: [
      ['Rebuilding', 'Unsure with negative numbers and distributing', 'Middle school equations, then Algebra I'],
      ['In the course', 'Fine in class, slow on word problems', 'Weekly modelling and Part IV practice'],
      ['Close', 'Strong Part I, light Parts II to IV', 'Written work and rating-guide marking'],
      ['Aiming high', 'Few errors anywhere', 'Full papers under time and Geometry preview']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask for your child&rsquo;s last unit test and look at the written questions, not just the score. That shows the starting point fastest.',
      'If the June exam goes badly, August is an option, but it is far easier to prepare for June properly.'
    ] },
    right: { h3: 'For students', ps: [
      'More than half the credits are multiple choice. Check each choice you pick by substituting it back.',
      'In Parts II to IV, a correct answer with no work can still lose credit. Write the steps.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for New York high schoolers',
    lede: 'Live lessons through the three math Regents exams and beyond.',
    bands: [
      { num: 'I', h3: 'Before Algebra I', sub: 'Grades 7 and 8', courses: [
        { code: 'GAQ / P / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Expressions, equations, functions.' },
        { code: 'GAQ / P / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Functions you can run in Python.' },
        { code: 'GAQ / P / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'For students who like a challenge.' }
      ] },
      { num: 'II', h3: 'Regents years', sub: 'Grades 9 to 11', courses: [
        { code: 'GAQ / R / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra I in depth.' },
        { code: 'GAQ / R / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry and Algebra II next.' },
        { code: 'GAQ / R / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Beyond the S-ID domain.' }
      ] },
      { num: 'III', h3: 'Beyond', sub: 'Grades 11 and 12', courses: [
        { code: 'GAQ / B / 01', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'The digital SAT.' },
        { code: 'GAQ / B / 02', slug: 'act-math-prep-course', title: 'ACT Math', blurb: 'The ACT math section.' },
        { code: 'GAQ / B / 03', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'After Algebra II.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Algebra I lessons on New York time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Evenings ET', l: 'Weekday lessons after school.' },
      { time: 'Weekends', l: 'Three-hour practice papers in May and June.' },
      { time: '1-on-1', l: 'Paced to the student&rsquo;s weakest part.' }
    ],
    cells: [
      { h3: 'Next Generation only', p: 'Practice matched to the June 2024 design.' },
      { h3: 'Part IV weekly', p: 'Define, write, graph, test, conclude.' },
      { h3: 'Real reference sheet', p: 'Used in every lesson.' },
      { h3: 'Rating-guide marking', p: 'Students see where credit goes.' },
      { h3: 'Graphing calculator', p: 'Taught on the student&rsquo;s own model.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Functions and data show up in all of them. See more on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents&rsquo; words, as left on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Algebra I Regents classes are monthly in US dollars, with no contract: join in March, stop after June 16.',
    free: ['A free first class', 'Bring a recent unit test', 'No card details'],
    group: ['Fifteen to twenty students', 'The same algebra teacher', 'Choose your batch', 'Monthly'],
    one: ['One teacher, one student', 'Built around Parts II to IV', 'Flexible times']
  },

  faq: {
    eyebrow: 'Algebra I Regents questions',
    h2: 'Algebra 1 Regents: what students ask most',
    items: [
      { q: 'When is the Algebra 1 Regents in June 2027?', a: 'NYSED\'s June 2027 schedule puts the Algebra I Regents on Wednesday, June 16, 2027, at 1:15 p.m. The exam is also offered in the January period and on Tuesday, August 17, 2027.' },
      { q: 'How many questions are on the Algebra 1 Regents?', a: 'Thirty-five: 24 multiple-choice questions in Part I, then 6, 4 and 1 constructed-response questions in Parts II, III and IV. NYSED\'s educator guide gives the total as 82 credits.' },
      { q: 'How long is the Algebra 1 Regents?', a: 'Students are permitted three hours, according to NYSED. Most finish sooner, but nobody may leave before the uniform admission deadline.' },
      { q: 'What changed on the Algebra 1 Regents in 2024?', a: 'NYSED replaced the old exam with one measuring the Next Generation Learning Standards. The old version was given for the last time in January 2024 and the new one began in June 2024.' },
      { q: 'Is there a formula sheet on the Algebra 1 Regents?', a: 'Yes. A detachable reference sheet at the end of the booklet gives conversions, the quadratic formula, the axis of symmetry, exponential and compound interest formulas, sequence formulas and the outlier boundaries.' },
      { q: 'How is the Algebra 1 Regents curved?', a: 'It is not curved in the usual sense. NYSED publishes a conversion chart for each administration that turns the raw credit score into a scale score and a performance level, and the chart can differ between sittings.' },
      { q: 'Do you need the Algebra 1 Regents to graduate in New York?', a: 'Under current rules a Regents or local diploma needs one passed math Regents or approved alternative. NYSED has proposed ending diploma assessment requirements from fall 2027, but until the Board of Regents approves it, the current requirements stand.' },
      { q: 'What calculator is allowed on the Algebra 1 Regents?', a: 'A graphing calculator, which every student must have for the whole exam. Calculators that do symbol manipulation or communicate with other calculators are not allowed.' },
      { q: 'When do you run Algebra I classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We schedule on Eastern Time.' },
      { q: 'Are you connected to NYSED or the Board of Regents?', a: 'No. We are an independent online school. We teach the Algebra I course, quote NYSED\'s public guides and point students to NYSED\'s own past exams.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More algebra and New York help.',
    items: [
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'Where most accelerated students meet Algebra I.' },
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'The third math Regents course.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'The reasons behind each algebra rule.' },
      { href: '/online-math-tutor-9th-grade', label: 'Ninth grade math tutoring', p: 'The usual Algebra I year.' },
      { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring', p: 'What comes after Algebra I.' },
      { href: '/coding-classes-in-new-york', label: 'Coding classes in New York', p: 'Our page for New York families.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Bring a recent unit test or a practice Regents. The teacher will mark one constructed-response answer with you and show where the credits are.',
    readFirst: 'Read about <a class="ag-inline-link" href="/how-we-teach">our teaching</a>, or browse <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'Classes are taught live from India and booked on Eastern Time, after school or on weekends. WhatsApp is the quickest way to reach us.',
    formNote: 'No fee and no card for the first class.'
  },

  footer: {
    cols: [
      { h4: 'Algebra', links: [
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' },
        { href: '/online-math-tutor-9th-grade', label: 'Grade 9 math' },
        { href: '/online-math-tutor-8th-grade', label: 'Grade 8 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'New York and the US', links: [
        { href: '/coding-classes-in-new-york', label: 'New York' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Define, write, graph, test, conclude'
  },

  personalityCss: `
.ag-root.ag-gaq .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-gaq .ag-capsule { border-left-width: 4px; border-radius: 8px; }
.ag-root.ag-gaq .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-gaq .ag-table td.ag-num { font-variant-numeric: tabular-nums; }
.ag-root.ag-gaq .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'New York State Education Department, read raw 31 October 2026: Implementation Schedule for New Regents Examinations (January 2023 memo: Algebra I last old January 2024, new June 2024); Algebra I Educator Guide updated October 2023 (blueprint, three hours, graphing calculator, Parts I to IV design, total 35 questions and 82 credits, reference sheet, five levels and Level 3 wording); Reference Sheet for Algebra I (NGLS); Final Dates memo for 2027 Regents periods; June and August 2027 schedules; nysedregents.org Algebra I archive (conversion charts); High School Scoring Information; Diploma Requirements; NY Inspires timeline and FAQ.',
    localProject: 'Our Part IV garden model: t + p <= 30 and 3t + 2p <= 72, boundaries meeting at (12, 18), (14, 14) feasible at 70 liters and (15, 14) not at 73 liters. Our IQR example with fences 0 and 32, the 200(3)^w views model, a ten-item practice set with Next Generation domains, a ten-week plan to June 16, 2027. Lesson family: Part IV modelling.',
    requiredMentions: ['the new exam measuring the NGLS will begin in June 2024', 'Wednesday, June 16, 1:15 p.m.', 'Tuesday, August 17, 8:30 a.m.', '48 to 61%', 'but not necessarily memorize', 'meet the content area requirements for a Regents diploma but may need additional support to succeed in the next level of coursework.', 'one mathematics Regents Examination or NYSED-Approved Regents Examination Alternative', 'sunset in the Fall of 2027', 'NYSED is not eliminating the Regents Examinations.', '3t + 2p &le; 72', 'Q1 - 1.5(IQR) = 12 - 12 = 0'],
    sources: [
      { claim: 'Implementation Schedule for New Regents Examinations (January 2023).', url: FILES + '/memo-implementation-schedule-new-regents-exams.pdf' },
      { claim: 'Algebra I Educator Guide, updated October 2023.', url: FILES + '/algebra-one-educator-guide-2023.pdf' },
      { claim: 'Reference Sheet for Algebra I (NGLS).', url: FILES + '/a1-next-gen-reference-sheet.pdf' },
      { claim: 'Final dates for the January, June and August 2027 Regents periods.', url: FILES + '/memo-regents-exam-dates-2027.pdf' },
      { claim: 'June 2027 Regents examination schedule.', url: FILES + '/regents-exams-schedule-june-2027.pdf' },
      { claim: 'Past Regents Examinations in Algebra I, with conversion charts.', url: 'https://www.nysedregents.org/algebraone/' },
      { claim: 'General Education and Diploma Requirements.', url: 'https://www.nysed.gov/curriculum-instruction/general-education-and-diploma-requirements' },
      { claim: 'NY Inspires Transformation Timeline.', url: 'https://www.nysed.gov/ny-inspires/transformation-timeline' }
    ],
    rejectedClaims: [
      'A passing scale score of 65: not stated; the diploma pages read here describe passing and safety nets without a plain statement of the cut for this exam, so the page uses NYSED\'s Level 3 wording instead.',
      'The exact January 2027 day for Algebra I: not printed; NYSED\'s January 2027 schedule sheet was marked draft.',
      'Raw-to-scale numbers from any conversion chart: not reproduced; the chart is described and linked.',
      'Statewide pass rates: not printed.',
      'Past Regents questions: never reproduced; all practice is ours.',
      'Score or diploma promises for our classes: refused. Any affiliation with NYSED or the Board of Regents: none.'
    ]
  }
};
