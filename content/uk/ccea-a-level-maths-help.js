'use strict';
// CCEA GCE AS and A level Mathematics help (ag- exam door, Northern Ireland; UK and US exams cluster Phase 2, row UK036).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/ccea-a-level-maths-help/). The CCEA subject web page returned HTTP 403 to
// curl and was not worked around; the two PDFs below, on CCEA's own downloads path, returned 200 to a single request.
//  - CCEA GCE Specification in Mathematics, "For first teaching from September 2018", "Subject Code: 2210", QAN AS
//    603/1761/9, A level 603/1717/6. Verbatim: "The full Advanced GCE award is based on students' marks from the AS (40
//    percent) and the A2 (60 percent)."; guided learning hours "180 hours" AS and "360 hours" A level; "This
//    specification assumes knowledge of Higher Tier GCSE Mathematics."; AS 1 Pure Mathematics "1 hour 45 mins", "60% of
//    AS", "24% of A level"; AS 2 Applied Mathematics "1 hour 15 mins", "40% of AS", "16% of A level"; A2 1 Pure
//    Mathematics "2 hours 30 mins", "36% of A level"; A2 2 Applied Mathematics "1 hour 30 mins", "24% of A level";
//    section 6: AS 1 "6–10 questions worth 100 raw marks", AS 2 "5–10 questions worth 70 raw marks", A2 1 "7–12
//    questions worth 150 raw marks", A2 2 "6–10 questions worth 100 raw marks" (ranges restated without dashes); AS 2
//    and A2 2: "Section A assesses mechanics and Section B assesses statistics", each "worth 50 percent of the
//    available raw marks"; "The statistical content of this unit should be taught through the use and interrogation
//    of a large data set."; "We will not set questions that directly test students' ability to construct such tables
//    and diagrams and calculate such measures, but students will be expected to interpret and draw inferences from
//    them."; "Students must not have access to technology with a computer algebra system function during
//    examinations."; calculators "an iterative function" and statistics; "It is possible to resit individual AS and A2
//    assessment units once and count the better result for each unit towards an AS or A level qualification."; results
//    "can count towards a qualification until we withdraw the specification"; AO1 50, AO2 25, AO3 25 per unit
//    ("tolerance of ±3%", restated as plus or minus 3); "To be awarded an A*, candidates need to achieve a grade A on
//    their full A level qualification and at least 90 percent of the maximum uniform marks available for the A2
//    units."; classification code note ("may take the view that they have achieved only one of the two GCEs").
//  - CCEA GCE Chief Examiner's Report, Mathematics, Summer Series 2025. Verbatim: "There was evidence of an
//    over-reliance in using past examination papers for preparation for these examinations.  This was particularly
//    evident in questions requiring proofs and graphs."; "candidates must remember to adhere to the 'Instructions to
//    Candidates' written on the front cover of each paper in which candidates are instructed to show clearly the full
//    development of their answers."; AS 1: "many candidates failed to see the disguised quadratic within the equation",
//    "Large numbers tried to use logs and scored no marks."; A2 1: "many candidates continue to heavily focus their
//    revision on recent past papers; a significant number of candidates demonstrated little understanding in areas of
//    the specification that have not been asked in recent years such as sketching reciprocal trigonometric functions
//    and dealing with improper partial fractions."; A2 2: "some candidates did not attempt the last part of the last
//    question"; AS 2: "The more unfamiliar lift question (Question 3) proved most problematic"; AS 1: "There was no
//    evidence of timing issues."
// Our own material, labelled on the page: a disguised quadratic (4^x - 6(2^x) + 8 = 0, x = 1 or 2), an improper partial
// fraction ((x^2 + 3x + 5)/((x + 1)(x + 2)) = 1 + 3/(x + 1) - 3/(x + 2)), a lift problem (400 kg, 0.5 m s^-2 up, T =
// 4120 N), a weighting check (24 + 16 + 36 + 24 = 100, our arithmetic on the published unit shares), and a six-question
// practice set, all checked in Python on 31 October 2026. No CCEA question is reproduced.
// Spine: revise the whole specification, not recent papers. CCEA's own 2025 examiners say candidates leaned on past
// papers and missed topics not asked lately; the page builds the year around full specification coverage across the
// AS and A2 units. Lesson family: covering the gaps past papers leave.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'CCEA A LEVEL', blurb: 'CCEA\'s 2025 examiners warned against revising from recent past papers alone. Four units, AS worth 40 per cent, each unit resittable once.' },
  slug: 'ccea-a-level-maths-help',
  code: 'cl',
  accent: '#704D6F',
  accentRationale: 'CCEA A level Maths: a muted mulberry #704D6F from the cluster allocation, 6.65:1 on #FBF8F2, softer than the brick red of the CCEA GCSE maths page so the two Northern Ireland maths pages stay distinct',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'CCEA A level Maths help',
  title: 'CCEA A Level Maths Help: AS 1 to A2 2 Units Explained',
  description: 'CCEA A level Maths help for Northern Ireland: the four units, timings and raw marks, the resit rule, what 2025 examiners flagged, and live online classes.',
  ogDescription: 'CCEA GCE Mathematics (2210) from the specification and the 2025 Chief Examiner\'s report: AS 1, AS 2, A2 1 and A2 2, how they are weighted, and what examiners asked students to do differently.',
  twitterDescription: 'CCEA A level Maths: four units across Years 13 and 14, AS worth 40 per cent, and a 2025 examiners\' warning about past-paper revision.',
  pageName: 'CCEA A Level Maths Help',
  webPageDescription: 'Live online teaching for CCEA GCE Mathematics students in Years 13 and 14 in Northern Ireland, written from the CCEA specification and 2025 examiners\' report.',
  courseDescription: 'Live online classes for CCEA GCE Mathematics: AS 1 and A2 1 pure, AS 2 and A2 2 mechanics and statistics, covering the whole specification rather than recent papers only.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'CCEA A level Maths',
  navLinks: [
    { href: '#units', label: 'The four units' },
    { href: '#examiners', label: '2025 report' },
    { href: '#resit', label: 'Resits and A*' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'CCEA &middot; GCE Mathematics 2210 &middot; Years 13 and 14',
  h1: 'CCEA A level Maths help',
  lede: 'In Northern Ireland, A level Mathematics is usually CCEA\'s GCE Mathematics, taken across Years 13 and 14 as four units. Two are sat at AS and count for 40 per cent; two follow at A2. The most practical advice about it comes from CCEA\'s own examiners, who reported in 2025 that many students revised from recent past papers and were caught out by topics not asked lately. This page sets out the units, the rules and that report, and how we teach CCEA maths.',
  secondaryCta: { href: '#examiners', label: 'What examiners said' },
  wa: 'Hello Modern Age Coders, I would like a free first class for CCEA A level Maths.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Not connected with CCEA',
  spec: [
    ['Qualification', 'CCEA GCE Mathematics'],
    ['Subject code', '2210'],
    ['Years', '13 and 14'],
    ['AS units', 'AS 1 Pure, AS 2 Applied: 40%'],
    ['A2 units', 'A2 1 Pure, A2 2 Applied: 60%'],
    ['Resits', 'Each unit once, better result counts'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'At a glance',
  capsule: 'CCEA GCE Mathematics (subject code 2210) is the Northern Ireland A level in maths, first taught in September 2018. It has four externally examined units: AS 1 Pure Mathematics and AS 2 Applied Mathematics, together 40 per cent, and A2 1 Pure Mathematics and A2 2 Applied Mathematics, 60 per cent. Each applied unit is half mechanics, half statistics. Modern Age Coders teaches CCEA maths live online in the A Level Maths course, in a batch of 15 to 20 or 1-on-1, from a free first lesson.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Courses a CCEA maths student usually needs',
    lede: 'The A level course follows the four CCEA units. Statistics adds depth for the Section B halves of AS 2 and A2 2; Further Maths is for students taking CCEA Further Mathematics too.',
    items: [
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'CC / 01', title: 'A Level Maths', note: 'AS 1 to A2 2, taught across the full specification, not the recent papers.' },
      { course: 'statistics-probability-maths-course', code: 'CC / 02', title: 'Statistics and Probability', note: 'Half of each applied unit, including inference from data.' },
      { course: 'a-level-further-maths-course', code: 'CC / 03', title: 'A Level Further Maths', note: 'For students sitting CCEA Further Mathematics alongside.' }
    ]
  },

  sections: [
    {
      id: 'units', tint: 'tint', eyebrow: 'The four units',
      h2: 'What are the four CCEA A level Maths units?',
      lede: 'AS 1 and A2 1 are pure; AS 2 and A2 2 split evenly between mechanics and statistics. Students answer every question on every paper.',
      body: [
        { kind: 'p', html: 'CCEA describes the structure simply: "We have divided this course into four units: two units at AS level and two units at A2." It adds that "The full Advanced GCE award is based on students\' marks from the AS (40 percent) and the A2 (60 percent)." The specification "assumes knowledge of Higher Tier GCSE Mathematics", and sets guided learning at 180 hours for AS and 360 for the A level.' },
        { kind: 'table', caption: 'CCEA GCE Mathematics (2210): units, timings, questions and weights', head: ['Unit', 'Content', 'Time', 'Questions and raw marks', 'Weight'], rows: [
          ['AS 1', 'Pure Mathematics', '1 hour 45 minutes', '6 to 10 questions, 100 raw marks', '60% of AS, 24% of A level'],
          ['AS 2', 'Applied: Section A mechanics, Section B statistics, half each', '1 hour 15 minutes', '5 to 10 questions, 70 raw marks', '40% of AS, 16% of A level'],
          ['A2 1', 'Pure Mathematics', '2 hours 30 minutes', '7 to 12 questions, 150 raw marks', '36% of A level'],
          ['A2 2', 'Applied: Section A mechanics, Section B statistics, half each', '1 hour 30 minutes', '6 to 10 questions, 100 raw marks', '24% of A level']
        ] },
        { kind: 'source', html: 'Source: CCEA GCE Specification in Mathematics (from September 2018), sections 2 and 6, from <a class="ag-inline-link" href="https://ccea.org.uk/downloads/docs/Specifications/GCE/GCE%20Mathematics%20(2018)/GCE%20Mathematics%20(2018)-specification-Standard.pdf" rel="noopener" target="_blank">CCEA\'s published specification</a>. Ranges are restated with "to".' },
        { kind: 'two', mt: true,
          leftH3: 'What the applied units expect',
          left: [
            'The statistics in both applied units "should be taught through the use and interrogation of a large data set." CCEA does not name one in the specification; schools choose how to meet the requirement.',
            'CCEA also says it "will not set questions that directly test students\' ability to construct such tables and diagrams and calculate such measures", meaning box plots, stem-and-leaf and averages, but will expect students "to interpret and draw inferences from them."'
          ],
          rightH3: 'What the A2 units add',
          right: [
            'A2 units include synoptic assessment, building on AS material and "bringing together and making connections" across the course.',
            'CCEA also promises "more demanding unstructured questions" at A2. A2 1 is the longest paper, at 150 raw marks in two and a half hours.'
          ] }
      ]
    },
    {
      id: 'examiners', tint: 'deep', eyebrow: '2025 report',
      h2: 'What did CCEA examiners say about A level Maths in 2025?',
      lede: 'That students were well prepared in many ways, but leaned too heavily on recent past papers, under-showed working when using calculators, and missed topics not asked lately.',
      body: [
        { kind: 'p', html: 'CCEA publishes a Chief Examiner\'s report after each summer series. The 2025 report for GCE Mathematics opens warmly, commending "diligent preparation", and then names its concerns. In the subject overview it says: "There was evidence of an over-reliance in using past examination papers for preparation for these examinations. This was particularly evident in questions requiring proofs and graphs." On A2 1 it is more specific still: many candidates "continue to heavily focus their revision on recent past papers", and "a significant number of candidates demonstrated little understanding in areas of the specification that have not been asked in recent years such as sketching reciprocal trigonometric functions and dealing with improper partial fractions."' },
        { kind: 'table', mt: true, caption: 'Points from the CCEA GCE Mathematics Chief Examiner\'s Report, Summer 2025, and how we respond', head: ['Unit', 'What the examiners reported', 'What we do about it'], rows: [
          ['All', 'Calculator use "continues to cause issues"; candidates must "show clearly the full development of their answers"', 'Every calculator result is written with the expression that produced it'],
          ['AS 1', '"many candidates failed to see the disguised quadratic"; "Large numbers tried to use logs and scored no marks."', 'Substitution spotting drilled with our own exponential equations'],
          ['AS 1', 'Proofs in certain topics and calculator use for quadratics and definite integrals need attention', 'Short proof tasks each week; calculator use checked against written working'],
          ['AS 2', 'The unfamiliar lift question proved most problematic', 'Mechanics taught from free-body diagrams, so new settings feel familiar'],
          ['A2 1', 'Reciprocal trigonometric graphs and improper partial fractions poorly understood', 'Every specification line is taught, recent paper or not'],
          ['A2 2', 'Some candidates did not attempt the last part of the last question', 'Timed A2 2 practice with a rule for moving on']
        ] },
        { kind: 'source', html: 'Source: CCEA GCE Chief Examiner\'s Report, Mathematics, Summer Series 2025, from <a class="ag-inline-link" href="https://ccea.org.uk/downloads/docs/ExamMod-Reports/GCE/GCE%20Mathematics%20(2018)/2025/GCE%20Mathematics%20(2018)-Summer2025-Report.pdf" rel="noopener" target="_blank">CCEA\'s report library</a>. The right-hand column is ours.' },
        { kind: 'p', mt: true, html: 'Read together, these comments describe one habit and its cost. Past papers show what was asked; they do not show what can be asked. The specification is the list of what can be asked, so our scheme of work is built from its learning outcomes, and past papers are used for timing and style once the content is secure.' }
      ]
    },
    {
      id: 'resit', tint: '', eyebrow: 'Resits and A*',
      h2: 'Can you resit CCEA A level Maths units, and how is A* awarded?',
      lede: 'Each AS and A2 unit can be resat once, with the better result counting. An A* needs an overall A and 90 per cent of the A2 uniform marks.',
      body: [
        { kind: 'p', html: 'The specification says: "It is possible to resit individual AS and A2 assessment units once and count the better result for each unit towards an AS or A level qualification." Every unit is available "in summer each year", and unit results "can count towards a qualification until we withdraw the specification." Results are reported on a uniform mark scale reflecting each unit\'s weighting, and grades come from adding the uniform marks.' },
        { kind: 'p', mt: true, html: 'On the top grade CCEA states: "To be awarded an A*, candidates need to achieve a grade A on their full A level qualification and at least 90 percent of the maximum uniform marks available for the A2 units." AS is graded A to E; A level is graded A* to E, with U below E. As with any unitised A level, the A* condition sits on the A2 units, so a strong AS year is necessary for the A but cannot by itself deliver the A*.' },
        { kind: 'ol', mt: true, items: [
          'After AS results in August, compare each unit result with the grade you need for the A level as a whole.',
          'If a resit makes sense, remember it is the only one: each unit can be resat once.',
          'Plan the resit for the following summer alongside A2 1 and A2 2, which together carry 60 per cent.',
          'Give A2 1 the most time. At 36 per cent it is the single heaviest unit, and A* depends on it.',
          'Check subject combinations early if you are also taking Further Mathematics, as CCEA warns that universities may treat overlapping qualifications as one.'
        ] }
      ]
    },
    {
      id: 'room', tint: 'tint', eyebrow: 'Calculator',
      h2: 'Which calculator is allowed in CCEA A level Maths?',
      lede: 'One with an iterative function and statistical distributions, and without a computer algebra system.',
      body: [
        { kind: 'p', html: 'CCEA requires that calculators include "an iterative function" and "the ability to compute summary statistics and access probabilities from standard statistical distributions", and states: "Students must not have access to technology with a computer algebra system function during examinations." The assessment objectives are weighted the same on every unit: 50 per cent AO1 technique, 25 per cent AO2 reasoning, 25 per cent AO3 problem solving, each within a tolerance of plus or minus 3 per cent.' },
        { kind: 'p', mt: true, html: 'The 2025 report shows why the calculator rule and the working rule must be taught together. A calculator that solves a quadratic or evaluates a definite integral is allowed, but the front cover of every paper tells candidates to show the full development of their answers, and examiners noted many did not. Our rule in class is simple: if the calculator did a step, the line it replaced is still written down.' }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples, ours',
      h2: 'Worked examples on the topics CCEA examiners flagged',
      lede: 'A disguised quadratic, an improper partial fraction and a lift, three of the areas named in the 2025 report. All three problems are ours.',
      body: [
        { kind: 'p', html: '<strong>Our AS 1 style problem: a disguised quadratic.</strong> Solve 4<sup>x</sup> &minus; 6(2<sup>x</sup>) + 8 = 0.' },
        { kind: 'two', mt: true,
          leftH3: 'Spot the substitution',
          left: [
            'Write 4<sup>x</sup> as (2<sup>x</sup>)<sup>2</sup> and let y = 2<sup>x</sup>. The equation becomes y<sup>2</sup> &minus; 6y + 8 = 0, which factorises as (y &minus; 2)(y &minus; 4) = 0.'
          ],
          rightH3: 'Return to x',
          right: [
            '2<sup>x</sup> = 2 gives x = 1, and 2<sup>x</sup> = 4 gives x = 2. Taking logarithms of the original equation first leads nowhere, because the log of a sum does not split, which is the trap the examiners described.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Our A2 1 style problem: an improper partial fraction.</strong> Express (x<sup>2</sup> + 3x + 5) &divide; ((x + 1)(x + 2)) in partial fractions. The numerator and denominator are both degree 2, so divide first: (x + 1)(x + 2) = x<sup>2</sup> + 3x + 2, leaving 1 + 3 &divide; ((x + 1)(x + 2)). Then 3 &divide; ((x + 1)(x + 2)) = A/(x + 1) + B/(x + 2) with A = 3 and B = &minus;3. The answer is 1 + 3/(x + 1) &minus; 3/(x + 2). Forgetting the leading 1 is the usual error.' },
        { kind: 'p', mt: true, html: '<strong>Our AS 2 style problem: a lift.</strong> A lift of mass 400 kg accelerates upwards at 0.5 m s<sup>&minus;2</sup>. Take g = 9.8 m s<sup>&minus;2</sup>. Draw the lift with tension T up and weight 400g down. Newton\'s second law upwards gives T &minus; 400g = 400 &times; 0.5, so T = 400 &times; 10.3 = 4120 N. If a 60 kg passenger stands inside while the lift accelerates downwards at 1.2 m s<sup>&minus;2</sup>, the floor\'s reaction is 60(9.8 &minus; 1.2) = 516 N. The diagram, not the formula, is what makes an unfamiliar setting manageable.' },
        { kind: 'table', mt: true, caption: 'Six practice questions we wrote for CCEA students (answers checked in Python)', head: ['#', 'Our question', 'Unit', 'Answer'], rows: [
          ['1', 'Solve 9<sup>x</sup> &minus; 10(3<sup>x</sup>) + 9 = 0.', 'AS 1', 'x = 0 or x = 2'],
          ['2', 'Find the sum of the first 25 terms of the arithmetic series 7 + 11 + 15 + ...', 'A2 1', '1375'],
          ['3', 'Evaluate the integral of sin<sup>2</sup> x from 0 to &pi;/2.', 'A2 1', '&pi;/4'],
          ['4', 'State the asymptotes of y = sec x for 0 &le; x &le; 2&pi;.', 'A2 1', 'x = &pi;/2 and x = 3&pi;/2'],
          ['5', 'X ~ N(250, 12<sup>2</sup>). Find P(X &gt; 270).', 'A2 2', '0.0478'],
          ['6', 'A 2 kg particle on a smooth slope at 30&deg; is released from rest. Find its acceleration, g = 9.8.', 'AS 2', '4.9 m s<sup>&minus;2</sup>']
        ] },
        { kind: 'source', html: 'Our problems and practice set were written on 31 October 2026; none is a CCEA question. The CCEA specification lists specimen assessment materials, past papers and mark schemes among the support on its Mathematics microsite.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Years 13 and 14, unit by unit',
    lede: 'The whole specification is taught in order, with past papers saved for timing practice.',
    table: { caption: 'Stages through CCEA GCE Mathematics', head: ['Stage', 'Usually', 'Sign that it is done'], rows: [
      ['1. AS 1 content', 'Year 13, autumn to spring', 'Algebra, trigonometry, logarithms and calculus with proofs written out'],
      ['2. AS 2 content', 'Year 13, spring', 'Forces and kinematics from diagrams; data interpreted, not just computed'],
      ['3. AS review', 'Year 14, September', 'Unit results read and the single resit chance considered'],
      ['4. A2 1 and A2 2', 'Year 14', 'Every learning outcome covered, then timed papers']
    ] },
    left: { h3: 'Why the checklist comes first', ps: [
      'We tick off CCEA learning outcomes, not past-paper questions. That is the gap the 2025 report describes.',
      'Students see the list too.'
    ] },
    right: { h3: 'When past papers come in', ps: [
      'Once content is secure, for timing and style.',
      'Never as the only revision.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for sixth formers in Northern Ireland',
    lede: 'Sorted by purpose. A free lesson tells us which fits.',
    bands: [
      { num: 'I', h3: 'For the four units', sub: 'Years 13 and 14', courses: [
        { code: 'UK / CC1 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'AS 1 through A2 2, learning outcome by learning outcome.' },
        { code: 'UK / CC1 / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For Section B of both applied units.' },
        { code: 'UK / CC1 / 03', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'For CCEA Further Mathematics students.' }
      ] },
      { num: 'II', h3: 'Foundations', sub: 'From GCSE', courses: [
        { code: 'UK / CC2 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'Higher Tier GCSE knowledge, which CCEA assumes.' },
        { code: 'UK / CC2 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For algebra that keeps undermining full solutions.' },
        { code: 'UK / CC2 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Iteration and data work in Python.' }
      ] },
      { num: 'III', h3: 'Further on', sub: 'University', courses: [
        { code: 'UK / CC3 / 01', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP', blurb: 'For students applying to maths-heavy degrees.' },
        { code: 'UK / CC3 / 02', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'A first look at university calculus and linear algebra.' },
        { code: 'UK / CC3 / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'For students heading towards data courses.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'The specification, not the last three papers',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set in UK time, which Northern Ireland uses; our teachers work from India and hold the slot steady through the clock changes.',
    slots: [
      { time: 'After school', l: 'Most Year 13 groups meet now.' },
      { time: 'Evening', l: 'Fits round part-time jobs.' },
      { time: 'Weekend morning', l: 'Long enough for A2 1 practice.' }
    ],
    cells: [
      { h3: 'Outcome checklist', p: 'CCEA learning outcomes ticked off one by one.' },
      { h3: 'Working shown', p: 'Calculator steps written out, as the front cover asks.' },
      { h3: 'Diagram first', p: 'Mechanics answered from a labelled force diagram.' },
      { h3: 'Interpreting data', p: 'Inference from tables and charts, not construction.' },
      { h3: 'Time rules', p: 'Moving on in A2 2 so the last question gets attempted.' },
      { h3: 'Batch or 1-on-1', p: 'A 15 to 20 student batch, or individual teaching.' }
    ]
  },

  projectsH2: 'Work from class',
  projectsLede: 'Made in lessons for practice, not for CCEA. More examples sit in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parent reviews from Google, as posted.',

  fees: {
    h2: 'Fees for CCEA A level Maths classes',
    lede: 'Families in Northern Ireland pay a single monthly fee in US dollars. A first lesson is free, and we take payment only after a course and a weekly time are agreed.',
    free: ['A free lesson on any CCEA unit', 'A check against the full learning outcome list', 'Booked by phone or WhatsApp'],
    group: ['A batch of 15 to 20 students', 'One teacher across Years 13 and 14', 'Mechanics and statistics in equal measure', 'Lighter weeks in the summer series'],
    one: ['One student with one teacher', 'Planned around a unit resit', 'Useful for a late start in Year 14']
  },

  faq: {
    eyebrow: 'CCEA maths questions',
    h2: 'What students in Northern Ireland ask about CCEA A level Maths',
    items: [
      { q: 'How many papers are in CCEA A level Maths?', a: 'Four, one per unit: AS 1 Pure, AS 2 Applied, A2 1 Pure and A2 2 Applied. AS 2 and A2 2 each have a mechanics section and a statistics section.' },
      { q: 'How much is AS worth in CCEA A level Maths?', a: 'The AS units count for 40 per cent of the A level: AS 1 is 24 per cent and AS 2 is 16 per cent. A2 1 is 36 per cent and A2 2 is 24 per cent.' },
      { q: 'How long is the CCEA A2 1 Pure exam?', a: 'Two hours and thirty minutes, with 7 to 12 questions worth 150 raw marks. It is the longest and heaviest of the four units.' },
      { q: 'Can I resit a CCEA A level Maths unit?', a: 'Yes, once. CCEA says each AS and A2 unit can be resat once, and the better result counts towards the qualification.' },
      { q: 'How do you get an A* in CCEA A level Maths?', a: 'You need an overall grade A and at least 90 per cent of the maximum uniform marks for the two A2 units. The A2 condition is separate from the overall total.' },
      { q: 'Can I use past papers to revise for CCEA maths?', a: 'Yes, but not on their own. CCEA\'s 2025 examiners reported an over-reliance on past papers and weak answers on topics not asked recently, so revise from the specification\'s learning outcomes first.' },
      { q: 'Is a graphical calculator allowed for CCEA A level Maths?', a: 'CCEA requires an iterative function and statistical distributions and bans any technology with a computer algebra system function. Check the specific model against current exam regulations with your school.' },
      { q: 'Does CCEA A level Maths have a large data set?', a: 'The specification says the statistics in both applied units should be taught through a large data set. Questions test interpretation and inference rather than constructing tables or diagrams.' },
      { q: 'When are your CCEA maths classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All lesson times are UK time.' },
      { q: 'Are you connected with CCEA?', a: 'No. Modern Age Coders is independent and has no link with CCEA. The problems and practice questions on this page are ours.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for students in Northern Ireland',
    lede: 'Local pages and other CCEA subjects.',
    items: [
      { href: '/ccea-gcse-maths-help', label: 'CCEA GCSE Maths help', p: 'The CCEA maths GCSE and its pathways.' },
      { href: '/maths-tuition-in-belfast', label: 'Maths tuition in Belfast', p: 'Our page for Belfast families.' },
      { href: '/ccea-a-level-software-systems-development-help', label: 'CCEA A level Software Systems Development', p: 'The CCEA programming A level.' },
      { href: '/further-maths-tuition-online', label: 'Further maths tuition online', p: 'For students adding Further Mathematics.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition online', p: 'Our page across every board.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page we publish.' }
    ]
  },

  start: {
    h2: 'Book a free CCEA maths class',
    lede: 'Give us a phone number and we will ring at a UK time that suits. The first lesson picks a learning outcome that recent papers have skipped, so we can see how a student copes with the unfamiliar.',
    readFirst: 'Looking around first? <a class="ag-inline-link" href="/courses">Every course</a> lists its topics, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains lessons, and <a class="ag-inline-link" href="/student-labs">student labs</a> holds class projects.',
    note: 'WhatsApp brings the quickest reply and is free from a Northern Ireland number. The answer comes from our team in India, on a +91 number.',
    formNote: 'Free to ask, nothing to sign; we send back one suggested time.'
  },

  footer: {
    cols: [
      { h4: 'Maths in Northern Ireland', links: [
        { href: '/ccea-gcse-maths-help', label: 'CCEA GCSE Maths' },
        { href: '/maths-tuition-in-belfast', label: 'Maths tuition in Belfast' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'CCEA and more', links: [
        { href: '/ccea-a-level-software-systems-development-help', label: 'CCEA Software Systems Development' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'CCEA A level Maths lessons, on UK time'
  },

  personalityCss: `
.ag-root.ag-cl .ag-hero h1 { letter-spacing: -0.017em; font-weight: 705; }
.ag-root.ag-cl .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-cl .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-cl .ag-table caption { text-align: left; font-weight: 660; }
.ag-root.ag-cl .ag-table td:last-child { font-style: normal; line-height: 1.5; }
.ag-root.ag-cl .ag-steps li { padding-bottom: 6px; }
`,

  dossier: {
    curriculumAuthority: 'CCEA GCE Specification in Mathematics, first teaching September 2018, subject code 2210 (QAN AS 603/1761/9, A level 603/1717/6): AS 40 per cent, A2 60 per cent; AS 1 Pure 1h45, 6 to 10 questions, 100 raw marks, 24%; AS 2 Applied 1h15, 5 to 10 questions, 70 raw marks, 16%; A2 1 Pure 2h30, 7 to 12 questions, 150 raw marks, 36%; A2 2 Applied 1h30, 6 to 10 questions, 100 raw marks, 24%; applied units half mechanics, half statistics, large data set in teaching; no CAS technology; each unit resittable once, better result counts; A* needs A and 90 per cent of A2 uniform marks; assumes Higher Tier GCSE. CCEA GCE Mathematics Chief Examiner\'s Report, Summer 2025: over-reliance on past papers, full development of answers, disguised quadratic, reciprocal trigonometric graphs and improper partial fractions, unfinished last question on A2 2.',
    localProject: 'Revise the whole specification, not recent papers. The page tabulates the four CCEA units with timings, question counts, raw marks and weights, sets the 2025 Chief Examiner\'s findings beside our response unit by unit, explains the single resit and the A* condition with a five-step plan, gives the calculator and working rules, and works three of our own problems on flagged topics (a disguised quadratic, an improper partial fraction, a lift giving 4120 N and 516 N) plus a six-question practice set.',
    requiredMentions: ['There was evidence of an over-reliance in using past examination papers for preparation for these examinations.', 'sketching reciprocal trigonometric functions and dealing with improper partial fractions', 'resit individual AS and A2 assessment units once and count the better result', 'Students must not have access to technology with a computer algebra system function during examinations.', 'assumes knowledge of Higher Tier GCSE Mathematics', '7 to 12 questions, 150 raw marks', 'Large numbers tried to use logs and scored no marks.', 'T = 400 &times; 10.3 = 4120 N', '1 + 3/(x + 1) &minus; 3/(x + 2)', '60% of AS, 24% of A level'],
    sources: [
      { claim: 'CCEA GCE Specification in Mathematics (from September 2018): units, timings, question counts, raw marks, weights, applied sections, large data set, calculators, resits, AO weightings, A* rule and prior attainment.', url: 'https://ccea.org.uk/downloads/docs/Specifications/GCE/GCE%20Mathematics%20(2018)/GCE%20Mathematics%20(2018)-specification-Standard.pdf' },
      { claim: 'CCEA GCE Chief Examiner\'s Report, Mathematics, Summer Series 2025: subject overview and unit-by-unit comments.', url: 'https://ccea.org.uk/downloads/docs/ExamMod-Reports/GCE/GCE%20Mathematics%20(2018)/2025/GCE%20Mathematics%20(2018)-Summer2025-Report.pdf' },
      { claim: 'CCEA GCE Mathematics subject page (returned HTTP 403 to curl on 31 October 2026; listed as the official home of the qualification, not quoted).', url: 'https://ccea.org.uk/post-16/gce/subjects/gce-mathematics-2018' }
    ],
    rejectedClaims: [
      'Anything from the CCEA GCE Mathematics web page: it returned HTTP 403 and was not worked around; only the two PDFs were read.',
      'CCEA grade boundaries for 2025 or 2026: searched for by families but not read at a primary source, so none is printed.',
      'Summer 2027 dates: the CCEA timetable was not read.',
      'Which large data set schools use: the specification does not name one, so none is named.',
      'Any CCEA past paper question: not reproduced; the report is quoted only in its general comments and topic names.',
      'Any grade promise, or any connection with CCEA: both declined.'
    ]
  }
};
