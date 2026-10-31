'use strict';
// Algebra II Regents prep (ag- state-exam door; UK and US exams cluster, row US019). One of three Regents pages: this one's
// spine is the newest exam (first June 2026), functions and modelling, the long reference sheet and calculator regression;
// Algebra I's is Part IV modelling; Geometry's is proof and tools.
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from NYSED
// (nysed.gov, nysedregents.org); copies in keyword-research-2026-09/uk-us-gap/src/algebra-2-regents-prep/ (dates memo,
// schedules, implementation memo, diploma and NY Inspires files in .../src/algebra-1-regents-prep/):
//  - Implementation Schedule for New Regents Examinations (January 2023): Algebra II first administration of new exam "June
//    2026", last administration of current exam "January 2026".
//  - Algebra II Educator Guide (2025): blueprint, percent of test by credits: Number & Quantity 4% - 8% (N-RN, N-CN),
//    Algebra 30% - 39% (A-SSE, A-APR, A-CED, A-REI), Functions 38% - 45% (F-IF, F-BF, F-LE, F-TF), Statistics & Probability
//    14% - 22% (S-ID, S-IC, S-CP); three hours; "exclusive use of a graphing calculator for the full duration"; 2-, 4- and
//    6-credit constructed response; design Part I 24 x 2 = 48, Part II 8 x 2 = 16, Part III 3 x 4 = 12, Part IV 1 x 6 = 6,
//    "Total 36 - 82" (as published); detachable reference sheet; Level 3 "minimally meet the expectations of the Mathematics
//    Learning Standards for Algebra II. They meet the content area requirements for a Regents diploma but may need
//    additional support to succeed in the next level of coursework."
//  - Algebra II Reference Sheet (NGLS): quadratic formula; trigonometric identities (sin^2 + cos^2 = 1, tan, cot, csc, sec);
//    cubic factorizations (sum and difference of cubes); probability (addition rule, conditional probability,
//    independence); arithmetic sequence and series; geometric sequence and series (r not 1); exponential growth and decay
//    A = P(1 + r/n)^(nt), A = Pe^(rt), A = A0(1/2)^(t/h).
//  - IMPORTANT NOTICE, Scoring Clarification, Regents Examination in Algebra II, "Wednesday, June 10, 2026, 9:15 a.m.",
//    "Question 26, only": "certain graphing calculator models truncate the coefficient on the regression equation to fewer
//    digits than required by Question 26"; full credit allowed where the coefficient was truncated to two decimal places;
//    "the base must still be correctly rounded to the thousandth place to receive credit."
//  - June 2027 schedule (layout-extracted): Algebra II Thursday June 17, 1:15 p.m.; August 2027: Tuesday August 17, 12:30
//    p.m. Final dates memo: June 15 to 25, 2027; January 26 to 29, 2027 (January sheet marked DRAFT).
//  - Diploma requirements: advanced designation needs "three mathematics Regents Examinations or NYSED-Approved Regents
//    Examination Alternatives". NY Inspires timeline: "Advanced Designation will be available as a seal or endorsement."
//    under the proposal; "The Board of Regents must approve any changes".
// No past exam question (including the June 2026 question 26 itself) is reproduced.
// Our own material, labelled: 500(1.04)^t = 800, t = ln 1.6 / ln 1.04, about 12.0 hours; 3 + 6 + 12 + ... ten terms =
// 3(1 - 2^10)/(1 - 2) = 3069; 80(1/2)^(12/5), about 15.2 grams; the independence check 0.4 x 0.5 = 0.2; the practice set;
// the plan. Lesson family: functions as models, built, solved with logarithms, checked for digits and units.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const FILES = 'https://www.nysed.gov/sites/default/files/programs/state-assessment';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'REGENTS ALGEBRA II', blurb: 'The Next Generation Algebra II Regents, first given in June 2026: 36 questions, 82 credits, the long reference sheet, the June 17, 2027 sitting and modelling problems solved with logarithms.' },
  slug: 'algebra-2-regents-prep',
  code: 'gar',
  accent: '#007255',
  accentRationale: 'Algebra II Regents: a sea green #007255 as allocated, 5.60:1 on paper #FBF8F2 and 4.82:1 on the deepest tint, cooler than the Algebra I emerald so the two Regents algebra pages read apart',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-classes-in-new-york', name: 'New York' }],
  routeLabel: 'Algebra 2 Regents prep',
  title: 'Algebra 2 Regents Prep: The New Exam, June 2027',
  description: 'Algebra 2 Regents prep for the Next Generation exam first given in June 2026: 36 questions, 82 credits, the reference sheet, June 17, 2027 and worked models.',
  ogDescription: 'The new Algebra II Regents is only a year old, so practice material is thin. What NYSED publishes about it, the calculator lesson from its first sitting, and exponential models solved step by step.',
  twitterDescription: 'The new Algebra II Regents from NYSED, with worked exponential models.',
  pageName: 'Algebra 2 Regents Prep',
  webPageDescription: 'The Regents Examination in Algebra II as rebuilt for the Next Generation standards and first given in June 2026: NYSED&rsquo;s design, blueprint, reference sheet, the June 2026 scoring clarification, 2027 sittings and diploma rules, with original worked models and practice.',
  courseDescription: 'Algebra II Regents classes taught live online for New York students: polynomials, rational and radical equations, exponentials and logarithms, trigonometric functions, inference and probability, in a group or privately.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Algebra 2 Regents prep',
  navLinks: [
    { href: '#new', label: 'The new exam' },
    { href: '#weight', label: 'Weighting' },
    { href: '#sheet', label: 'Reference sheet' },
    { href: '#calculator', label: 'Calculator lesson' },
    { href: '#models', label: 'Worked models' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New York &middot; Regents Examination in Algebra II &middot; Next Generation, since June 2026',
  h1: 'Algebra 2 Regents prep',
  lede: 'The Algebra II Regents is the newest of New York&rsquo;s three math Regents. NYSED gave the old version for the last time in January 2026 and the Next Generation version for the first time in June 2026, so by spring 2027 only a handful of real papers exist in the new design. That makes understanding more valuable than drilling. This page covers what NYSED says the exam contains, the functions-heavy blueprint, a reference sheet far longer than in Geometry or Algebra I, a calculator lesson from the first June sitting, and three models solved the way a Part III or IV answer should be written.',
  secondaryCta: { href: '#models', label: 'See the worked models' },
  wa: 'Hello Modern Age Coders, my child in New York is taking the Algebra II Regents. Could we book a free first class?',
  heroNote: 'Advanced algebra taught live since 2020 &middot; 10,000+ students &middot; New York time slots',
  spec: [
    ['Exam', 'Regents Examination in Algebra II'],
    ['First new sitting', 'June 2026'],
    ['Questions', '36, worth 82 credits'],
    ['Largest category', 'Functions, 38 to 45%'],
    ['Calculator', 'Graphing, whole exam'],
    ['June 2027', 'Thursday June 17, 1:15 p.m.'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Algebra II Regents is NYSED&rsquo;s end-of-course exam for Algebra II, rebuilt on the Next Generation standards and first given in June 2026. Its four parts hold 36 questions for 82 credits; functions make up 38 to 45 percent; students have three hours, a graphing calculator and a reference sheet. June 2027 brings it on Thursday the 17th at 1:15 p.m. At Modern Age Coders our High School Mathematics course prepares for it in live online classes, as a batch or 1-on-1.',

  picks: {
    eyebrow: 'For the Algebra II Regents',
    h2: 'Three courses for Algebra II and beyond',
    lede: 'Algebra II leans on Algebra I and leads to precalculus. Pick the course that covers the gap the student actually has.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'GAR / 01', title: 'High school math', note: 'Algebra II in full: polynomials, logarithms, trigonometric functions, statistics.' },
      { course: 'ap-precalculus-exam-prep-course', code: 'GAR / 02', title: 'AP Precalculus', note: 'Function families in more depth, for students who want the next step.' },
      { course: 'statistics-probability-maths-course', code: 'GAR / 03', title: 'Statistics and probability', note: 'Inference and conditional probability, a fifth of the exam.' }
    ]
  },

  sections: [
    {
      id: 'new', tint: 'tint', eyebrow: 'The new exam',
      h2: 'What is on the new Algebra 2 Regents?',
      lede: 'Four parts, 36 questions, 82 credits. Part II is the longest of the three math Regents, with eight two-credit questions.',
      body: [
        { kind: 'table', caption: 'Algebra II examination design (NYSED Algebra II Educator Guide, 2025, read 31 October 2026)', head: ['Part', 'Questions', 'Credits each', 'Credits in the part'], numCols: [1, 2, 3], rows: [
          ['Part I (multiple choice)', '24', '2', '48'],
          ['Part II (constructed response)', '8', '2', '16'],
          ['Part III (constructed response)', '3', '4', '12'],
          ['Part IV (constructed response)', '1', '6', '6'],
          ['Total (as published)', '36', '', '82']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Old exam out, new exam in',
          left: [
            'NYSED&rsquo;s January 2023 implementation memo set the Algebra II switch: the previous exam was offered for the last time in January 2026, and the first Next Generation Algebra II exam was given in June 2026.',
            'Review books and question banks written before 2026 follow the previous standards. Some of their topics still appear; their question style and balance may not.'
          ],
          rightH3: 'How long, with what',
          right: [
            'The educator guide gives students three hours, a graphing calculator for their exclusive use throughout, and a straightedge.',
            'Constructed-response answers must show the steps, including formula substitutions and graphs. The 4- and 6-credit questions may ask students to justify or explain, not only solve.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + FILES + '/algebra-two-educator-guide-2025.pdf" rel="noopener" target="_blank">Algebra II Educator Guide</a> and <a class="ag-inline-link" href="' + FILES + '/memo-implementation-schedule-new-regents-exams.pdf" rel="noopener" target="_blank">implementation memo</a>, NYSED, read 31 October 2026. Modern Age Coders works independently of NYSED and New York schools.' }
      ]
    },
    {
      id: 'weight', tint: 'deep', eyebrow: 'Weighting',
      h2: 'Which Algebra 2 topics carry the most credit?',
      lede: 'Functions, by a distance. Statistics and probability matters far more here than on Algebra I.',
      body: [
        { kind: 'table', caption: 'Algebra II blueprint: percent of test by credits (NYSED Algebra II Educator Guide, read 31 October 2026)', head: ['Conceptual category', 'Percent of credits', 'Domains'], rows: [
          ['Functions', '38 to 45%', 'F-IF, F-BF, F-LE and F-TF: interpreting and building functions, exponential models, trigonometric functions'],
          ['Algebra', '30 to 39%', 'A-SSE, A-APR, A-CED and A-REI: structure, polynomial and rational expressions, building and solving equations'],
          ['Statistics and Probability', '14 to 22%', 'Interpreting Data; Making Inferences and Justifying Conclusions; Conditional Probability and the Rules of Probability'],
          ['Number and Quantity', '4 to 8%', 'The Real Number System; The Complex Number System']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Functions everywhere',
          left: [
            'With Trigonometric Functions (F-TF) and exponential models both in the Functions category, a student who sees every function family the same way (input, output, transformation, inverse) has the largest share of the exam covered.',
            'Logarithms sit where exponential models meet equation solving. They are the topic we most often find half-learned.'
          ],
          rightH3: 'Statistics is not optional',
          right: [
            'At 14 to 22 percent, statistics and probability can be worth as much as 18 of the 82 credits. Inference from samples and simulations (S-IC) and conditional probability (S-CP) are both in the blueprint.',
            'Complex numbers, under Number and Quantity, are a small slice, but quick credits for anyone who practises i&sup2; = -1 arithmetic.'
          ] }
      ]
    },
    {
      id: 'sheet', tint: 'tint', eyebrow: 'Reference sheet',
      h2: 'What formulas are on the Algebra 2 Regents reference sheet?',
      lede: 'More than on either other math Regents. Knowing what is printed, and what is not, changes what a student needs to memorize.',
      body: [
        { kind: 'table', caption: 'Algebra II Reference Sheet (NGLS) contents, as published by NYSED (read 31 October 2026)', head: ['Section', 'Given on the sheet'], rows: [
          ['Quadratic formula', 'x = (-b &plusmn; &radic;(b&sup2; - 4ac)) / 2a'],
          ['Trigonometric identities', 'sin&sup2;&theta; + cos&sup2;&theta; = 1, and tan, cot, csc and sec in terms of sin and cos'],
          ['Cubic factorizations', 'Sum and difference of two cubes'],
          ['Probability', 'The addition rule, conditional probability and the test for independence'],
          ['Sequences and series', 'Arithmetic sequence and series; geometric sequence and series, for r not equal to 1'],
          ['Exponential growth and decay', 'A = P(1 + r/n)<sup>nt</sup>, A = Pe<sup>rt</sup> and A = A<sub>0</sub>(1/2)<sup>t/h</sup>']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What still has to be known',
          left: [
            'Laws of logarithms, the unit circle values, the meaning of amplitude, period and midline, and how to transform a parent graph are not on the sheet. Nor is the change-of-base idea.',
            'We keep a one-page list of these and test it for two minutes at the start of every lesson from January.'
          ],
          rightH3: 'Using the sheet under pressure',
          right: [
            'The half-life formula A = A<sub>0</sub>(1/2)<sup>t/h</sup> and the compound interest forms are easy to mix up in a hurry. Before choosing one, write what each letter means in the problem.',
            'NYSED&rsquo;s guide asks teachers to use the sheet throughout the course; ours is open on screen in every Algebra II lesson.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + FILES + '/algebra2-next-gen-reference-sheet.pdf" rel="noopener" target="_blank">Next Generation Algebra II Reference Sheet</a>, NYSED, read 31 October 2026.' }
      ]
    },
    {
      id: 'calculator', tint: 'deep', eyebrow: 'A calculator lesson',
      h2: 'What happened with the calculator on the June 2026 Algebra 2 Regents?',
      lede: 'On the very first new exam, NYSED had to issue a scoring clarification because some calculators did not show enough digits for a regression question.',
      body: [
        { kind: 'two',
          leftH3: 'What NYSED said',
          left: [
            'NYSED&rsquo;s Important Notice for the exam given on Wednesday, June 10, 2026, covers question 26 only. It says that &ldquo;certain graphing calculator models truncate the coefficient on the regression equation to fewer digits than required by Question 26.&rdquo;',
            'Full credit could be given where a calculator had cut the coefficient to two decimal places, but the notice adds that &ldquo;the base must still be correctly rounded to the thousandth place to receive credit.&rdquo;'
          ],
          rightH3: 'What a student should take from it',
          right: [
            'Know your calculator before the exam. Check how many digits it displays for a regression, how to change the display setting, and how to read the full coefficient.',
            'Read the rounding instruction twice. NYSED kept the rounding requirement for the part of the answer the calculator did show correctly.'
          ] },
        { kind: 'p', mt: true, html: 'We do not reproduce the question; it is on NYSED&rsquo;s site with the rest of the June 2026 paper. In lessons, students run every regression on their own calculator model and write the full equation with the required rounding, so the habit is fixed long before June.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.nysedregents.org/algebratwo/626/special-notice-scoring-clarification-a2-exam-62026.pdf" rel="noopener" target="_blank">Scoring Clarification, Regents Examination in Algebra II, June 2026</a>, and <a class="ag-inline-link" href="https://www.nysedregents.org/algebratwo/" rel="noopener" target="_blank">Past Regents Examinations in Algebra II</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'models', tint: 'tint', eyebrow: 'Worked models',
      h2: 'Three Algebra 2 models, solved the way graders read them',
      lede: 'All three problems are ours. Each uses a formula from the reference sheet and ends with an answer in context.',
      body: [
        { kind: 'ol', items: [
          '<b>Growth, solved with logarithms (ours).</b> A culture of 500 cells grows by 4 percent per hour. After how many hours will it reach 800 cells, to the nearest tenth?',
          '<b>Model.</b> 500(1.04)<sup>t</sup> = 800, so (1.04)<sup>t</sup> = 1.6.',
          '<b>Take logarithms.</b> t = ln 1.6 / ln 1.04 = 0.4700... / 0.03922... = 11.98..., about 12.0 hours.',
          '<b>Answer in context.</b> &ldquo;The culture reaches 800 cells after about 12.0 hours.&rdquo; A graph of y = 500(1.04)<sup>x</sup> and y = 800 crossing near x = 12 confirms it.'
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>A geometric series from the sheet (ours).</b> Find the sum of the first 10 terms of 3 + 6 + 12 + ...',
          '<b>Identify.</b> a<sub>1</sub> = 3 and r = 2, and r is not 1, so the geometric series formula applies.',
          '<b>Substitute.</b> S<sub>10</sub> = 3(1 - 2<sup>10</sup>) / (1 - 2) = 3(-1023) / (-1) = 3069.'
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Half-life and independence (ours).</b> A sample of 80 grams of an isotope has a half-life of 5 days. How much is left after 12 days? Separately, if P(A) = 0.4, P(B) = 0.5 and P(A and B) = 0.2, are A and B independent?',
          '<b>Half-life.</b> A = 80(1/2)<sup>12/5</sup> = 80(0.1894...) = 15.2 grams, to the nearest tenth.',
          '<b>Independence.</b> P(A) x P(B) = 0.4 x 0.5 = 0.2, which equals P(A and B). By the sheet&rsquo;s independence rule, A and B are independent. Say so in a full sentence, with the multiplication shown.'
        ] }
      ]
    },
    {
      id: 'when', tint: 'deep', eyebrow: 'Dates and diploma',
      h2: 'When is the Algebra 2 Regents in 2027, and does it count for the advanced diploma?',
      lede: 'June 17, 2027 at 1:15 p.m., per NYSED&rsquo;s June schedule. Today, it is the usual third math Regents for a Regents diploma with advanced designation.',
      body: [
        { kind: 'table', caption: 'When Algebra II is given in 2027 (from NYSED&rsquo;s January, June and August period memo and schedules)', head: ['Period', 'Algebra II', 'Note'], rows: [
          ['January 2027', 'Within Tuesday, January 26 to Friday, January 29', 'NYSED&rsquo;s January sheet was still a draft'],
          ['June 2027', 'Thursday, June 17, 1:15 p.m.', 'The day after Algebra I'],
          ['August 2027', 'Tuesday, August 17, 12:30 p.m.', 'Same day as Algebra I, in the afternoon']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Advanced designation',
          left: [
            'NYSED&rsquo;s diploma page says a Regents diploma with advanced designation requires &ldquo;three mathematics Regents Examinations or NYSED-Approved Regents Examination Alternatives&rdquo;, along with other conditions. Algebra II is normally the third.',
            'For Level 3, the Algebra II guide says students &ldquo;minimally meet the expectations of the Mathematics Learning Standards for Algebra II&rdquo; and meet the content requirements for a Regents diploma.'
          ],
          rightH3: 'Under NY Inspires',
          right: [
            'NYSED&rsquo;s NY Inspires timeline proposes moving to one diploma in fall 2027, with &ldquo;Advanced Designation will be available as a seal or endorsement.&rdquo; Regents exams would still be given.',
            'None of this is settled until the Board of Regents approves it; NYSED says the existing requirements remain in effect until then.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + FILES + '/regents-exams-schedule-june-2027.pdf" rel="noopener" target="_blank">June 2027 schedule</a>, <a class="ag-inline-link" href="' + FILES + '/regents-exams-schedule-august-2027.pdf" rel="noopener" target="_blank">August 2027 schedule</a>, <a class="ag-inline-link" href="https://www.nysed.gov/curriculum-instruction/general-education-and-diploma-requirements" rel="noopener" target="_blank">Diploma Requirements</a> and <a class="ag-inline-link" href="https://www.nysed.gov/ny-inspires/transformation-timeline" rel="noopener" target="_blank">NY Inspires timeline</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice',
      h2: 'Twelve Algebra 2 Regents practice questions',
      lede: 'Our own, across the blueprint. Answers in the right-hand column.',
      body: [
        { kind: 'table', caption: 'Algebra II practice we wrote for this page, with answers', head: ['Domain', 'Question', 'Answer'], rows: [
          ['N-CN', 'Simplify (3 + 2i)(1 - 4i).', '11 - 10i'],
          ['N-RN', 'Write 8<sup>2/3</sup> as an integer.', '4'],
          ['A-SSE', 'Factor x&sup3; - 27 using the sheet.', '(x - 3)(x&sup2; + 3x + 9)'],
          ['A-APR', 'What is the remainder when x&sup3; - 2x + 5 is divided by x - 2?', '9'],
          ['A-REI', 'Solve &radic;(x + 7) = x - 5.', 'x = 9 (x = 2 is extraneous)'],
          ['A-REI', 'Solve 2<sup>x + 1</sup> = 48 to the nearest hundredth.', 'x = 4.58'],
          ['F-IF', 'State the period and amplitude of y = 3 sin(2x).', 'Period &pi;, amplitude 3'],
          ['F-BF', 'Find the inverse of f(x) = 4x - 7.', 'f<sup>-1</sup>(x) = (x + 7)/4'],
          ['F-LE', 'Write log<sub>2</sub> 32 = 5 in exponential form.', '2<sup>5</sup> = 32'],
          ['F-TF', 'If sin&theta; = 3/5 and &theta; is in quadrant II, find cos&theta;.', '-4/5'],
          ['S-CP', 'P(A) = 0.6, P(B) = 0.3, P(A or B) = 0.72. Find P(A and B).', '0.18'],
          ['S-IC', 'A survey of 400 gives a margin of error of 0.05. What interval goes with a sample proportion of 0.62?', '0.57 to 0.67']
        ] },
        { kind: 'p', mt: true, html: 'NYSED&rsquo;s <a class="ag-inline-link" href="https://www.nysedregents.org/algebratwo/" rel="noopener" target="_blank">Algebra II archive</a> holds the June 2026 paper and any later ones in the new design, with rating guides and model responses. Because there are so few, we save them for full rehearsals and teach from our own problems before that.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan',
      h2: 'How to study for the Algebra 2 Regents',
      lede: 'Our twelve-week plan back from Thursday, June 17, 2027.',
      body: [
        { kind: 'ol', items: [
          '<b>Weeks 1 and 2: the function families.</b> Linear, quadratic, polynomial, rational, radical, exponential, logarithmic and trigonometric, each graphed and transformed.',
          '<b>Weeks 3 and 4: equations.</b> Polynomial, rational and radical equations, with extraneous roots checked every time.',
          '<b>Weeks 5 and 6: exponentials and logarithms.</b> Models from the reference sheet, solved with logarithms and checked on the graph.',
          '<b>Week 7: trigonometric functions.</b> The unit circle, radians, amplitude, period and midline in context.',
          '<b>Weeks 8 and 9: statistics and probability.</b> Conditional probability, independence, simulations and margins of error.',
          '<b>Week 10: calculator regression.</b> Every regression type on the student&rsquo;s own model, with display digits checked.',
          '<b>Weeks 11 and 12: the real papers.</b> The new-design papers from NYSED under three-hour conditions, marked with the rating guide.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Three math Regents',
    h2: 'How Algebra II differs from Algebra I and Geometry',
    lede: 'Our comparison, using NYSED&rsquo;s published designs.',
    table: { caption: 'The three math Regents side by side (designs from NYSED educator guides; the last row is ours)', head: ['Feature', 'Algebra I', 'Geometry', 'Algebra II'], rows: [
      ['First Next Generation sitting', 'June 2024', 'June 2025', 'June 2026'],
      ['Questions', '35', '35', '36'],
      ['Credits', '82', '80', '82'],
      ['Two-credit questions in Part II', '6', '7', '8'],
      ['Main demand (our view)', 'Modelling and equations', 'Proof and construction', 'Function families and inference']
    ] },
    left: { h3: 'For parents', ps: [
      'Algebra II is where gaps from Algebra I come back. If factoring or exponent rules are shaky, fix them first.',
      'Very few new-design papers exist yet, so lean on the teacher&rsquo;s own problems through the year.'
    ] },
    right: { h3: 'For students', ps: [
      'Learn what is on the reference sheet so you do not waste time memorizing it, then learn what is not.',
      'Check your calculator&rsquo;s regression display before June, not in the exam room.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Advanced math courses for New York students',
    lede: 'Live lessons from Algebra II through calculus and college admissions tests.',
    bands: [
      { num: 'I', h3: 'Algebra II year', sub: 'Grades 10 and 11', courses: [
        { code: 'GAR / A / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra II in depth.' },
        { code: 'GAR / A / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Inference and probability.' },
        { code: 'GAR / A / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra I gaps, repaired.' }
      ] },
      { num: 'II', h3: 'Next', sub: 'Grades 11 and 12', courses: [
        { code: 'GAR / N / 01', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Units 1 to 3 and the exam.' },
        { code: 'GAR / N / 02', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'AB and BC.' },
        { code: 'GAR / N / 03', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'With the investigative task.' }
      ] },
      { num: 'III', h3: 'Admissions tests', sub: 'Grades 11 and 12', courses: [
        { code: 'GAR / T / 01', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'The digital SAT.' },
        { code: 'GAR / T / 02', slug: 'act-math-prep-course', title: 'ACT Math', blurb: 'The ACT math section.' },
        { code: 'GAR / T / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition math', blurb: 'AMC and beyond.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Algebra II lessons that fit a junior&rsquo;s week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Evenings ET', l: 'Weekday lessons around school and sports.' },
      { time: 'Weekends', l: 'Longer sessions for full papers in May and June.' },
      { time: '1-on-1', l: 'Function family by function family.' }
    ],
    cells: [
      { h3: 'Function families', p: 'One framework for every graph.' },
      { h3: 'Logs that make sense', p: 'Taught as questions about exponents.' },
      { h3: 'Sheet open', p: 'The real reference sheet every lesson.' },
      { h3: 'Calculator checked', p: 'Regression digits and settings.' },
      { h3: 'Statistics included', p: 'Up to a fifth of the credits.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'Exponential models and probability power several of these. See more on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parent reviews from Google, exactly as posted.',

  fees: {
    h2: 'Fees',
    lede: 'Billing is monthly in US dollars with no long contract, which suits a junior who wants help from spring until June 17 and then a break.',
    free: ['A free first class', 'Bring a recent Algebra II test', 'No card details'],
    group: ['Fifteen to twenty students', 'A dedicated Algebra II teacher', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Paced to the weakest family', 'Flexible times']
  },

  faq: {
    eyebrow: 'Algebra II Regents questions',
    h2: 'Algebra 2 Regents: what students and parents ask',
    items: [
      { q: 'When is the Algebra 2 Regents in June 2027?', a: 'The June 2027 schedule from NYSED lists Algebra II for the afternoon of Thursday, June 17, starting at 1:15 p.m. There is also a January sitting and an August one, on the afternoon of Tuesday, August 17.' },
      { q: 'Is the Algebra 2 Regents new?', a: 'Yes. NYSED gave the previous Algebra II exam for the last time in January 2026 and the first Next Generation Algebra II exam in June 2026, as its implementation memo planned.' },
      { q: 'How many questions are on the Algebra 2 Regents?', a: 'Thirty-six: 24 multiple choice in Part I, 8 two-credit questions in Part II, 3 four-credit questions in Part III and one six-credit question in Part IV, for 82 credits in all.' },
      { q: 'What is on the Algebra 2 Regents reference sheet?', a: 'The quadratic formula, trigonometric identities, sum and difference of cubes, probability rules, arithmetic and geometric sequences and series, and the exponential growth, continuous growth and half-life formulas.' },
      { q: 'What topics are most important for the Algebra 2 Regents?', a: 'Functions, at 38 to 45 percent of the credits in NYSED\'s blueprint, then algebra at 30 to 39 percent. Statistics and probability is 14 to 22 percent, much more than on Algebra I.' },
      { q: 'Do I need the Algebra 2 Regents for an advanced diploma?', a: 'Under current rules the Regents diploma with advanced designation requires three math Regents exams or approved alternatives, and Algebra II is usually the third. NYSED\'s NY Inspires proposal would turn advanced designation into a seal, but it still needs Board of Regents approval.' },
      { q: 'What calculator should I use on the Algebra 2 Regents?', a: 'A graphing calculator, required for the whole exam. After the June 2026 regression issue, check how many digits your model displays and how to change that setting.' },
      { q: 'Are there practice tests for the new Algebra 2 Regents?', a: 'Only a few so far, since the new exam began in June 2026. NYSED posts each paper with its rating guide and model responses on nysedregents.org; use them for rehearsal and learn from varied problems first.' },
      { q: 'When are your Algebra II classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We use Eastern Time.' },
      { q: 'Is Modern Age Coders connected with NYSED?', a: 'No. We are an independent online school teaching Algebra II live. Facts here come from NYSED\'s public documents, which we link, and all practice problems are our own.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More upper high school math.',
    items: [
      { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring', p: 'The course itself, family by family.' },
      { href: '/online-math-tutor-11th-grade', label: 'Eleventh grade math tutoring', p: 'The usual Algebra II year.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'Where Algebra II leads.' },
      { href: '/act-math-tutoring-online', label: 'ACT math tutoring', p: 'Algebra II content shows up here too.' },
      { href: '/coding-classes-in-new-york', label: 'Coding classes in New York', p: 'Our New York page.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us which function family causes the most trouble. The first class starts there, with the reference sheet open.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">our approach to teaching</a>, or browse the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'Lessons come live from our teachers in India, timed for New York evenings and weekends. A WhatsApp message is the quickest way to start.',
    formNote: 'Your first class is free; we do not take card details.'
  },

  footer: {
    cols: [
      { h4: 'Upper high school', links: [
        { href: '/algebra-2-tutoring-online', label: 'Algebra 2 tutoring' },
        { href: '/online-math-tutor-11th-grade', label: 'Grade 11 math' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'New York and the US', links: [
        { href: '/coding-classes-in-new-york', label: 'New York' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/act-math-tutoring-online', label: 'ACT math' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'ln 1.6 / ln 1.04'
  },

  personalityCss: `
.ag-root.ag-gar .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-gar .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-gar .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-gar .ag-table td.ag-num { font-variant-numeric: tabular-nums; }
.ag-root.ag-gar .ag-steps li { line-height: 1.6; padding-bottom: 4px; }
`,

  dossier: {
    curriculumAuthority: 'New York State Education Department, read raw 31 October 2026: Implementation Schedule for New Regents Examinations (Algebra II new June 2026, last old January 2026); Algebra II Educator Guide 2025 (blueprint, three hours, graphing calculator, design totalling 36 questions and 82 credits, Level 3 wording); Algebra II Reference Sheet (NGLS); Scoring Clarification notice for the June 10, 2026 exam, question 26; June and August 2027 schedules and final dates memo; Diploma Requirements (advanced designation); NY Inspires timeline (advanced designation as a seal or endorsement, Board approval needed).',
    localProject: 'Our worked models: 500(1.04)^t = 800 gives t = ln 1.6 / ln 1.04, about 12.0 hours; the first ten terms of 3 + 6 + 12 + ... sum to 3069 by the sheet formula; 80(1/2)^(12/5) is about 15.2 grams; 0.4 x 0.5 = 0.2 shows independence. Our twelve-item practice set across ten domains, a twelve-week plan and the three-Regents comparison. Lesson family: functions as models.',
    requiredMentions: ['the first Next Generation Algebra II exam was given in June 2026', 'Thursday, June 17, 1:15 p.m.', 'Tuesday, August 17, 12:30 p.m.', '38 to 45%', 'certain graphing calculator models truncate the coefficient on the regression equation to fewer digits than required by Question 26.', 'the base must still be correctly rounded to the thousandth place to receive credit.', 'three mathematics Regents Examinations or NYSED-Approved Regents Examination Alternatives', 'Advanced Designation will be available as a seal or endorsement.', 'minimally meet the expectations of the Mathematics Learning Standards for Algebra II', 't = ln 1.6 / ln 1.04', 'S<sub>10</sub> = 3(1 - 2<sup>10</sup>) / (1 - 2)'],
    sources: [
      { claim: 'Algebra II Educator Guide (NYSED, 2025).', url: FILES + '/algebra-two-educator-guide-2025.pdf' },
      { claim: 'Next Generation Algebra II Reference Sheet.', url: FILES + '/algebra2-next-gen-reference-sheet.pdf' },
      { claim: 'Scoring Clarification, June 2026 Algebra II, question 26.', url: 'https://www.nysedregents.org/algebratwo/626/special-notice-scoring-clarification-a2-exam-62026.pdf' },
      { claim: 'Implementation Schedule for New Regents Examinations.', url: FILES + '/memo-implementation-schedule-new-regents-exams.pdf' },
      { claim: 'June 2027 Regents examination schedule.', url: FILES + '/regents-exams-schedule-june-2027.pdf' },
      { claim: 'General Education and Diploma Requirements.', url: 'https://www.nysed.gov/curriculum-instruction/general-education-and-diploma-requirements' },
      { claim: 'NY Inspires Transformation Timeline.', url: 'https://www.nysed.gov/ny-inspires/transformation-timeline' }
    ],
    rejectedClaims: [
      'June 2026 Algebra II results or pass rates: not printed; no NYSED statistic read in this session.',
      'The text of June 2026 question 26: not reproduced; the notice is described and linked.',
      'The exact January 2027 day for Algebra II: not printed; the January 2027 schedule sheet was marked draft.',
      'That colleges require the Algebra II Regents: not stated; outside NYSED\'s documents.',
      'Score, level or diploma promises for our classes: refused. Any affiliation with NYSED: none.'
    ]
  }
};
