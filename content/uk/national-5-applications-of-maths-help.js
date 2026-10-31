'use strict';
// National 5 Applications of Mathematics help (ag- exam door, Scotland; UK and US exams cluster Phase 2, row UK045).
// Sources, read raw on 31 October 2026 (sqa.org.uk via curl; PDF text through the scratchpad pdftext helper; raw
// copies in keyword-research-2026-09/uk-us-gap/src/national-5-applications-of-maths-help/):
//  - Qualifications Scotland / SQA, National 5 Applications of Mathematics course page (sqa.org.uk/sqa/81281.html):
//    "On 1 February 2026, Qualifications Scotland replaced SQA and became Scotland's new national awarding body. The
//    documents on this page remain current and you can continue to use them."
//  - National 5 Applications of Mathematics Course Specification, May 2023, version 3.0 (files_ccc/n5-course-spec-
//    applications-mathematics.pdf). Verbatim: "Course code: C844 75"; "Course assessment code: X844 75"; "SCQF: level 5
//    (24 SCQF credit points)"; "Valid from: session 2023–24"; "The notional length of time for a candidate to complete
//    the course is 160 hours."; paper 1 (non-calculator) 35 marks, 50 minutes; paper 2 55 marks, "1 hour and 40
//    minutes (including time to read and absorb case study information)"; "This question paper has 35 marks out of a
//    total of 90 marks."; "most of which are in context"; "short-answer questions, extended-response questions and case
//    studies"; "Entry to this course is at the discretion of the centre."; "Candidates should have achieved the fourth
//    curriculum level or the National 4 Applications of Mathematics course"; "Numeracy at SCQF level 5"; "explores the
//    applications of mathematical techniques and skills in everyday situations, including financial matters,
//    statistics, and measurement"; "This course is particularly suitable for learners who wish to develop the
//    mathematical reasoning and numerical skills which are useful in other curriculum areas and workplaces."; skills
//    list: precedence tables, "Carrying out efficient container packing", "Planning a navigation course", tolerance,
//    gradient "Using vertical distances and horizontal distances", "Using Pythagoras' theorem  Within a two-stage
//    calculation", boxplots, scattergraphs, standard deviation, interquartile range, line of best fit, "Calculating
//    compound percentage increase and decrease", "working across time zones", "Converting between currencies in either
//    direction; involving the use of at least three currencies in a multi-stage task".
//  - Course report 2026, National 5 Applications of Mathematics (files_ccc/2026-n5-course-report-app-of-maths.pdf).
//    Verbatim: resulted entries 27,706 in 2025 and 30,078 in 2026; A 9,609, 31.9 per cent, minimum mark 65; B 56; C
//    cumulative 63.0, minimum 48; D 39; No award 23.2; "We've not applied rounding to these statistics."; "Question paper
//    2 was less demanding than intended."; "Many candidates did not answer this question correctly." (critical path);
//    "Some candidates simply added all the times."; "Most candidates made no attempt to give the height and horizontal
//    distance in consistent units."; "Most candidates did not successfully calculate the arc length of the quarter
//    circle."; "Some candidates used a year-by-year approach rather than the multiplier and power strategy."; "Few
//    candidates successfully compared the mean and standard deviation."; "A few candidates used volume calculations
//    instead of finding the number of boxes that would fit in each direction."; "Most candidates did not accurately
//    construct a diagram of the entire course."; "increasing the number of workers should not increase the time taken to
//    complete a job"; "Candidates should understand that they do not need to include a numerical comparison when making
//    statements about data sets."; "Practise probability questions in a range of contexts, not just those featured in
//    past papers."; "Make sure candidates understand the difference between direct and inverse proportion."
//  - Course report 2025 (files_ccc/2025-n5-course-report-applications-mathematics.pdf): resulted entries 24,285 in 2024.
//  - Formulae list (files_ccc/applications-mathematics-sqp-national-5-formulae-list.pdf): circle, Pythagoras, cylinder,
//    prism, cone, sphere, standard deviation, gradient.
// Our own: the "every answer ends in a decision" framing, the five worked examples (a video project critical path, a
// ramp gradient, crate packing, a puffin colony multiplier, a flight across a time zone), the practice set and the
// comparison with National 5 Mathematics. Spine: Applications of Mathematics marks the decision as well as the sum.
// Lesson family: a Scottish senior phase exam door, distinct from National 5 Mathematics (algebra-led) and Higher.

const T = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'N5 APPLICATIONS OF MATHS', blurb: 'C844 75: two papers, 90 marks, almost every question in context. The 2026 report on critical paths, units and container packing.' },
  slug: 'national-5-applications-of-maths-help',
  code: 'na',
  accent: '#235D5B',
  accentRationale: 'National 5 Applications of Mathematics: a dark slate teal (#235D5B, 7.11:1 on #FBF8F2), bluer and deeper than the primary maths teal and clear of the National 5 Mathematics blue',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'National 5 Applications of Maths help',
  title: 'National 5 Applications of Maths Help | C844 75, Live Online',
  description: 'National 5 Applications of Maths help (C844 75): the two papers, what the 2026 course report says candidates missed, worked examples, and live online lessons.',
  ogDescription: 'Applications of Mathematics marks the decision as well as the sum. The C844 75 papers, the 2026 results, and where marks slipped away.',
  twitterDescription: 'N5 Applications of Maths: critical paths, gradient in consistent units, container packing, standard deviation, and live lessons in UK time.',
  pageName: 'National 5 Applications of Maths Help',
  webPageDescription: 'Live online help for National 5 Applications of Mathematics candidates in Scotland, built from the C844 75 course specification and the 2026 course report.',
  courseDescription: 'Live online teaching for National 5 Applications of Mathematics: numeracy without a calculator, measurement and scale drawing, precedence tables and critical paths, gradient, Pythagoras, statistics and probability, with every answer turned into a justified decision.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'N5 Applications of Maths',
  navLinks: [
    { href: '#papers', label: 'The papers' },
    { href: '#which', label: 'Which N5?' },
    { href: '#report', label: '2026 report' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Scotland &middot; National 5 &middot; Applications of Mathematics C844 75',
  h1: 'National 5 Applications of Maths help',
  lede: 'National 5 Applications of Mathematics is sometimes described as the easier National 5, and candidates who believe that tend to be surprised in the exam hall. It is a different course rather than a smaller one. Its algebra is lighter, but almost every question sits inside a real situation, and the marks often depend on what a candidate does after the arithmetic: choosing the critical path rather than adding every task, keeping units consistent before working out a gradient, trying both ways a box could sit in a crate. The 2026 course report shows exactly where those decisions went wrong. This page sets out the two papers, how to tell whether this course or National 5 Mathematics fits, what the report found, and how we teach it.',
  secondaryCta: { href: '#report', label: 'What the 2026 report found' },
  wa: 'Hello Modern Age Coders, I would like a free first lesson for National 5 Applications of Maths.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; From the C844 75 specification and the 2026 course report',
  spec: [
    ['Course', 'Applications of Mathematics C844 75'],
    ['Paper 1', 'No calculator, 35 marks, 50 minutes'],
    ['Paper 2', 'Calculator, 55 marks, 1 hour 40 minutes'],
    ['Coursework', 'None'],
    ['Entries in 2026', '30,078 resulted'],
    ['Also awards', 'Numeracy at SCQF level 5'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['First lesson', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'National 5 Applications of Mathematics (course code C844 75, SCQF level 5) is a Scottish qualification awarded by Qualifications Scotland, assessed by two papers: 35 marks without a calculator in 50 minutes and 55 marks with one in 1 hour 40 minutes, most questions set in real contexts such as finance, statistics and measurement. In 2026, 30,078 candidates received a result. Modern Age Coders gives National 5 Applications of Maths help live online, in a group of 15 to 20 or 1-on-1, through its National 5 and Higher Maths course, with the 2026 course report built into every lesson. The first lesson is free, and we have no connection with Qualifications Scotland or any school.',

  picks: {
    eyebrow: 'Courses for Applications of Maths',
    h2: 'Three courses for National 5 Applications of Mathematics',
    lede: 'Our National 5 course carries the shared numeracy, geometry and statistics. Statistics and Probability goes deeper on the data strand, and Middle School Mathematics rebuilds the number skills paper 1 depends on.',
    items: [
      { course: 'national-5-and-higher-maths-course', code: 'NA / 01', title: 'National 5 and Higher Maths', note: 'Numeracy, Pythagoras, gradient, circles and statistics at National 5 depth, taught against the Applications specification.' },
      { course: 'statistics-probability-maths-course', code: 'NA / 02', title: 'Statistics and Probability', note: 'Boxplots, standard deviation, scattergraphs and probability in context, for the data questions.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'NA / 03', title: 'Middle School Mathematics', note: 'Fractions, percentages, proportion and units, for candidates whose non-calculator number is shaky.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'The papers',
      h2: 'How is National 5 Applications of Maths assessed?',
      lede: 'By two question papers and nothing else: 90 marks in total, set and marked externally, with no coursework or unit tests. The figures below are from the course specification, version 3.0, valid from session 2023 to 24.',
      body: [
        { kind: 'table', caption: 'National 5 Applications of Mathematics C844 75: the two papers', head: ['Paper', 'Marks', 'Time', 'Calculator', 'Question types'], rows: [
          ['Paper 1', '35', '50 minutes', 'Not allowed', 'Short-answer and extended-response, most in context'],
          ['Paper 2', '55', '1 hour 40 minutes, including reading time for case studies', 'Allowed', 'Short-answer, extended-response and case studies']
        ] },
        { kind: 'p', html: 'The specification describes a course that "explores the applications of mathematical techniques and skills in everyday situations, including financial matters, statistics, and measurement", with a notional 160 hours of learning and 24 SCQF credit points. Passing it also brings automatic certification of the Core Skill of Numeracy at SCQF level 5. Entry is at the school\'s discretion; the recommended starting point is the fourth curriculum level or National 4 Applications of Mathematics.' },
        { kind: 'table', mt: true, caption: 'What the course assessment samples (summarised from the specification)', head: ['Skill area', 'Examples of what can be asked'], rows: [
          ['Numeracy', 'Fractions and mixed numbers, compound percentage change, speed, distance and time, ratio from scale drawings, direct and indirect proportion, reading scales'],
          ['Finance', 'Budgeting, pay and deductions, comparing at least three products, converting across at least three currencies'],
          ['Statistics', 'Probability and expected frequency, boxplots, scattergraphs and pie charts, mean, median, mode, range, interquartile range and standard deviation, a line of best fit'],
          ['Measurement', 'Scale drawings to the nearest millimetre and degree, navigation with bearings, container packing, precedence tables, time zones, tolerance'],
          ['Geometry', 'Gradient from vertical and horizontal distances, composite shapes with parts of circles, composite solids, Pythagoras within a two-stage calculation'],
          ['Graphical data and probability', 'Reading tables, charts and graphs with missing values or unclear scales, and justifying decisions from them']
        ] },
        { kind: 'table', mt: true, caption: 'The 2026 results, as published', head: ['Figure', 'National 5 Applications of Mathematics, 2026'], rows: [
          ['Resulted entries', '30,078 (27,706 in 2025 and 24,285 in 2024)'],
          ['Grade A', '31.9 per cent, minimum mark 65 of 90'],
          ['Grade C minimum mark', '48 of 90, with 63.0 per cent at C or above'],
          ['No award', '23.2 per cent']
        ] },
        { kind: 'source', html: 'Sources: the <a class="ag-inline-link" href="https://www.sqa.org.uk/sqa/files_ccc/n5-course-spec-applications-mathematics.pdf" rel="noopener" target="_blank">course specification</a> and the <a class="ag-inline-link" href="https://www.sqa.org.uk/sqa/files_ccc/2026-n5-course-report-app-of-maths.pdf" rel="noopener" target="_blank">2026 course report</a>, both on sqa.org.uk, read on 31 October 2026. Since 1 February 2026 the qualification is awarded by Qualifications Scotland, whose course page says the documents remain current. The report notes it has not applied rounding; boundaries change every year.' }
      ]
    },
    {
      id: 'which', tint: 'deep', eyebrow: 'Which N5?',
      h2: 'Should I take National 5 Applications of Maths or National 5 Maths?',
      lede: 'It depends on what comes next. Applications of Mathematics suits a learner whose strength is numerical reasoning in real situations; National 5 Mathematics is the usual route towards Higher Mathematics, because its algebra, trigonometry and quadratics are what Higher builds on. The school makes the final call on presentation.',
      body: [
        { kind: 'p', html: 'The specification puts the purpose plainly: "This course is particularly suitable for learners who wish to develop the mathematical reasoning and numerical skills which are useful in other curriculum areas and workplaces." That is a real strength, not a consolation prize. Applications of Mathematics asks candidates to read a situation, decide which skill applies, and justify a decision with the result, which many adults will recognise as most of the maths they actually use.' },
        { kind: 'table', mt: true, caption: 'The two National 5 maths courses side by side (our comparison from the two specifications)', head: ['Question', 'Applications of Mathematics C844 75', 'Mathematics'], rows: [
          ['Marks and papers', '35 non-calculator plus 55 calculator, 90 in all', '40 non-calculator plus 50 calculator, 90 in all'],
          ['Character', 'Almost every question in a real-life context, including case studies', 'More abstract algebra, functions and trigonometry'],
          ['Algebra', 'Light: formulae, gradient, proportion', 'Heavy: quadratics, simultaneous equations, algebraic fractions'],
          ['Distinctive topics', 'Precedence tables, container packing, navigation, tolerance, finance', 'Surds, indices, vectors, trigonometric graphs'],
          ['Common next step', 'Higher Applications of Mathematics, or other courses and work', 'Higher Mathematics']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Signs Applications of Maths fits',
          left: [
            'A learner who handles numbers and real problems well but loses confidence when letters replace numbers.',
            'A learner who wants maths for a practical subject, an apprenticeship, or a career where data and measurement matter more than algebra.'
          ],
          rightH3: 'Signs National 5 Maths fits',
          right: [
            'A learner aiming for Higher Mathematics, or a university course that will expect it.',
            'A learner comfortable with algebra who wants the more abstract route. Our <a class="ag-inline-link" href="/national-5-maths-tuition-online">National 5 Maths page</a> covers that course and its papers.'
          ] },
        { kind: 'p', mt: true, html: 'If you are unsure, ask the maths department which course they expect your child to be presented for and why; the decision often follows the level reached by the end of S3. For the step after National 5, <a class="ag-inline-link" href="/national-5-vs-higher-maths">National 5 vs Higher Maths</a> compares the two levels.' }
      ]
    },
    {
      id: 'report', tint: '', eyebrow: '2026 report',
      h2: 'Where did candidates lose marks in National 5 Applications of Maths in 2026?',
      lede: 'Mostly after the arithmetic. The 2026 course report records candidates who could calculate but then added every task instead of finding the critical path, mixed centimetres and metres in a gradient, or counted boxes by volume. In paper 1, it also says many lost marks on basic number skills.',
      body: [
        { kind: 'table', caption: 'Selected findings from the 2026 course report', head: ['Topic', 'What the report saw'], rows: [
          ['Critical path', '"Many candidates did not answer this question correctly." Some simply added all the times'],
          ['Gradient', '"Most candidates made no attempt to give the height and horizontal distance in consistent units."'],
          ['Quarter circle perimeter', '"Most candidates did not successfully calculate the arc length of the quarter circle."'],
          ['Direct proportion', 'Most did not use a valid strategy and gained no marks'],
          ['Compound percentage', 'Some worked year by year rather than with a multiplier and a power, and some did not round'],
          ['Scale drawing and bearings', '"Most candidates did not accurately construct a diagram of the entire course."'],
          ['Comparing statistics', '"Few candidates successfully compared the mean and standard deviation."'],
          ['Container packing', 'Some tried only one orientation; a few used volume instead of counting boxes in each direction']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Does it make sense?', p: 'The report\'s example is memorable: "increasing the number of workers should not increase the time taken to complete a job". Every answer gets a sense check against the context.' },
          { h3: 'Words, not numbers', p: 'When comparing data sets, candidates "do not need to include a numerical comparison". A clear statement about average and spread, in context, is what is asked.' },
          { h3: 'The efficient route', p: 'A multiplier and a power beats four separate years of percentage change: faster, and fewer chances for a slip.' }
        ] },
        { kind: 'p', mt: true, html: 'The report closes with advice for teachers that doubles as a revision list: practise number skills for the non-calculator paper, show all working, use the formulae list, give units for area and volume and am or pm for 12-hour times, score out working that is not part of the answer, and "Practise probability questions in a range of contexts, not just those featured in past papers." It also asks teachers to "Make sure candidates understand the difference between direct and inverse proportion", the topic that cost the most candidates every mark in 2026.' },
        { kind: 'p', html: 'The report also states that paper 2 "was less demanding than intended" and that this was taken into account in setting the boundaries. A minimum mark from 2026 says nothing about 2027, which is why we never set a target mark for a student.' }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Five Applications of Maths examples, worked through',
      lede: 'Every question here is ours, written in the style of the course but never copied from a paper. Each ends with a decision, because that is where the marks are.',
      body: [
        { kind: 'two',
          leftH3: '1. Critical path (paper 1 style)',
          left: [
            '<strong>Question (ours).</strong> A class makes a short video. A: write the script, 3 days. B: film, 2 days, after A. C: compose music, 4 days, can start at once. D: edit, 3 days, after both B and C. What is the shortest time to finish?',
            '<strong>Two routes to D.</strong> A then B takes 3 + 2 = 5 days. C alone takes 4 days. D cannot start until both are done, so it starts after 5 days.',
            '<strong>Finish.</strong> 5 + 3 = 8 days. The critical path is A, B, D.',
            '<strong>The trap.</strong> Adding every task gives 12 days, which ignores the fact that C runs alongside A and B.'
          ],
          rightH3: '2. Gradient in consistent units',
          right: [
            '<strong>Question (ours).</strong> A ramp rises 45 cm over a horizontal distance of 3.6 m. Find its gradient as a fraction in its simplest form. Building guidance says it must be no steeper than 1/12. Does it meet the guidance?',
            '<strong>Same units first.</strong> 3.6 m is 360 cm.',
            '<strong>Gradient.</strong> 45/360 = 1/8.',
            '<strong>Decide.</strong> 1/8 is steeper than 1/12 (0.125 is more than 0.083), so the ramp does not meet the guidance. The guidance figure is ours, for practice.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. Container packing',
          left: [
            '<strong>Question (ours).</strong> Boxes measure 30 cm by 20 cm by 15 cm. A crate measures 120 cm by 70 cm by 45 cm. Boxes must stand upright, 15 cm tall. How many fit?',
            '<strong>Orientation one.</strong> 120 &divide; 30 = 4 and 70 &divide; 20 = 3 (3.5 rounds down), with 45 &divide; 15 = 3 layers: 4 &times; 3 &times; 3 = 36.',
            '<strong>Orientation two.</strong> 120 &divide; 20 = 6 and 70 &divide; 30 = 2 (2.33 rounds down), 3 layers: 6 &times; 2 &times; 3 = 36.',
            '<strong>Decide.</strong> 36 boxes. Dividing the volumes (378 000 &divide; 9000 = 42) gives an impossible answer, because boxes cannot be cut.'
          ],
          rightH3: '4. Compound change with a multiplier',
          right: [
            '<strong>Question (ours).</strong> A puffin colony of 2400 birds falls by 3 per cent a year. Estimate its size after 4 years, to the nearest bird.',
            '<strong>Multiplier.</strong> A 3 per cent fall leaves 97 per cent, so multiply by 0.97 each year.',
            '<strong>Power.</strong> 2400 &times; 0.97<sup>4</sup> = 2400 &times; 0.885&hellip; = 2124.7.',
            '<strong>Round and check.</strong> About 2125 birds. Smaller than 2400, as a fall should be, and not as small as 2400 &minus; 12 per cent (2112), because each year\'s 3 per cent is taken from a smaller number.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '5. Speed and a time zone',
          left: [
            '<strong>Question (ours).</strong> A flight leaves Glasgow at 14:50 UK time and flies 1890 km at an average 840 km/h. Its destination is one hour ahead of the UK. What is the local arrival time?',
            '<strong>Time.</strong> 1890 &divide; 840 = 2.25 hours, which is 2 hours 15 minutes, not 2 hours 25.',
            '<strong>Arrive.</strong> 14:50 + 2 h 15 min = 17:05 UK time, so 18:05 local time.'
          ],
          rightH3: 'Comparing two data sets',
          right: [
            '<strong>Statements (ours).</strong> Group A\'s reaction times have a mean of 0.42 s and a standard deviation of 0.05 s; group B\'s have a mean of 0.47 s and a standard deviation of 0.11 s.',
            '<strong>Two valid comments.</strong> On average, group A reacted faster. Group A\'s times were more consistent.',
            '<strong>Not valid.</strong> "Group B was worse" says nothing about which measure shows it.'
          ] },
        { kind: 'p', mt: true, html: '<strong>A practice set (ours, with answers).</strong> (1) Without a calculator, find 2&frac34; &minus; 1&frac23;. (2) A part is made to 48 mm &plusmn; 0.5 mm; what are its limits? (3) 6 workers build a wall in 10 hours. How long would 4 workers take at the same rate? (4) Find the perimeter of a quarter circle of radius 8 cm, to 1 decimal place. (5) A probability of 0.15 applies to each of 240 days; how many days are expected? (6) A walker heads 060&deg;; what bearing takes them straight back? <strong>Answers:</strong> (1) 1 1/12; (2) 47.5 mm to 48.5 mm; (3) 15 hours, since fewer workers take longer (inverse proportion); (4) 28.6 cm, the arc 12.57 cm plus two radii of 8 cm; (5) 36 days; (6) 240&deg;.' }
      ]
    },
    {
      id: 'classes', tint: '', eyebrow: 'Our lessons',
      h2: 'How do your National 5 Applications of Maths lessons work?',
      lede: 'They are organised around the specification\'s skill areas, with paper 1 number practised from the first week and every problem ending in a written decision.',
      body: [
        { kind: 'ol', items: [
          '<strong>A free first lesson.</strong> A few short context questions, some without a calculator, to see how the candidate reads a situation as well as how they calculate.',
          '<strong>Number by hand, weekly.</strong> Fractions, percentages and proportion without a calculator, because the 2026 report says many paper 1 marks went to basic number.',
          '<strong>Skill areas in turn.</strong> Measurement and scale drawing, geometry, statistics, and the finance strand, each taught from the specification\'s list rather than from recent papers alone.',
          '<strong>Decision sentences.</strong> Every answer is followed by a sentence that states the decision and the evidence, in the context of the question.',
          '<strong>Case-study practice in spring.</strong> Longer paper 2 style problems under timing, including the reading time the specification builds in.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A group or one teacher?',
          left: [
            'A group of 15 to 20 candidates suits steady progress through the skill areas and the chance to hear how others justify a decision.',
            '1-on-1 suits a candidate repairing number skills for paper 1, or one moving across late from National 5 Mathematics.'
          ],
          rightH3: 'What we do not promise',
          right: [
            'A grade. The 2026 boundaries were set after paper 2 proved easier than intended, and next year\'s will differ.',
            'Any link with Qualifications Scotland, SQA or a school. We are independent and teach alongside the school course.'
          ] },
        { kind: 'p', mt: true, html: 'Official specimen papers, past papers and marking instructions are free on the Qualifications Scotland course page, and we point candidates to them for timed practice. Students who enjoy the data strand may also like <a class="ag-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a>, where spreadsheets and logic sit naturally beside it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four rungs through S4',
    lede: 'Placement depends on how a candidate reads a context as much as on what they can calculate.',
    table: { caption: 'Our progression for National 5 Applications of Mathematics', head: ['Rung', 'When', 'What a candidate can show'], rows: [
      ['1. Number by hand', 'Start of S4', 'Fractions, mixed numbers, percentages and proportion without a calculator'],
      ['2. Measurement and geometry', 'Autumn', 'Consistent units, gradient, circles and composite shapes, Pythagoras in two stages, scale drawings'],
      ['3. Planning and data', 'Winter', 'Precedence tables and critical paths, container packing, time zones, statistics and probability'],
      ['4. Decisions under timing', 'Spring', 'Case studies, written justifications and sense checks at exam pace']
    ] },
    left: { h3: 'Rung one carries paper 1', ps: [
      'Thirty-five marks are earned without a calculator. Most of them rest on everyday number.',
      'Students who also enjoy logic may like <a class="ag-inline-link" href="/coding-roadmap">the coding roadmap</a>.'
    ] },
    right: { h3: 'Rung four is where marks are kept', ps: [
      'A correct calculation followed by no decision leaves marks on the table.',
      'We ease off when the exams begin and pick up again for Higher afterwards if wanted.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for S4 candidates',
    lede: 'Grouped by what they strengthen. The free lesson chooses the order.',
    bands: [
      { num: 'I', h3: 'Applications core', sub: 'Number, measure and data', courses: [
        { code: 'UK / NA1 / 01', slug: 'national-5-and-higher-maths-course', title: 'National 5 and Higher', blurb: 'The shared National 5 skills, taught to the Applications specification.' },
        { code: 'UK / NA1 / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The data strand in depth.' },
        { code: 'UK / NA1 / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle School Mathematics', blurb: 'Number and proportion rebuilt for paper 1.' }
      ] },
      { num: 'II', h3: 'Wider maths', sub: 'For candidates going further', courses: [
        { code: 'UK / NA2 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE Mathematics', blurb: 'Overlapping content for families moving between systems.' },
        { code: 'UK / NA2 / 02', slug: 'mental-maths-mastery-kids', title: 'Mental Maths', blurb: 'Fast, secure number facts for the non-calculator paper.' },
        { code: 'UK / NA2 / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Mathematics for data', blurb: 'Where statistics meets real data sets.' }
      ] },
      { num: 'III', h3: 'Maths with code', sub: 'Practical computing', courses: [
        { code: 'UK / NA3 / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Statistics and measurement tested in Python.' },
        { code: 'UK / NA3 / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A first language for S4 students.' },
        { code: 'UK / NA3 / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Breaking a situation into steps, for younger siblings too.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'When Applications of Maths lessons run',
    lede: T + ' Our teachers sit in India, and we quote each slot to families in Scotland in UK time.',
    slots: [
      { time: 'After school', l: 'The most common choice in S4.' },
      { time: 'Evening', l: 'Around part-time work and clubs.' },
      { time: 'Weekend', l: 'Room for a full case study and its review.' }
    ],
    cells: [
      { h3: 'Specification order', p: 'Numeracy, finance, statistics, measurement and geometry, all covered.' },
      { h3: 'Paper 1 number', p: 'Non-calculator work in every lesson, never left until spring.' },
      { h3: 'Decision sentences', p: 'Each answer ends with a stated decision and its evidence.' },
      { h3: 'Sense checks', p: 'Could more workers really take longer? Every result tested against its context.' },
      { h3: 'Official materials', p: 'Specimen and past papers from the course page for timed practice.' },
      { h3: '15 to 20, or 1-on-1', p: 'A batch on one rung, or one candidate with one teacher.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Work from ordinary lessons, none of it assessed. There is more in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' reviews, as they appear on Google.',

  fees: {
    h2: 'Fees for Applications of Maths lessons',
    lede: 'You pay nothing for the first lesson. A monthly fee follows only once you have chosen a course and a weekly time: smaller for a group place, larger for 1-on-1, with no term contract.',
    free: ['Context questions, with and without a calculator', 'A straight view of which N5 fits', 'Booked with only a phone number'],
    group: ['15 to 20 candidates on one rung', 'One teacher through S4', 'Decision writing practised weekly', 'Timed case studies in spring'],
    one: ['One teacher for one candidate', 'A plan built back from the exam', 'Suits a late switch between N5 courses']
  },

  faq: {
    eyebrow: 'Applications of Maths questions',
    h2: 'What candidates and parents ask about N5 Applications of Maths',
    items: [
      { q: 'How many papers are in National 5 Applications of Maths?', a: 'Two. Paper 1 has 35 marks in 50 minutes without a calculator, and paper 2 has 55 marks in 1 hour 40 minutes with one. There is no coursework.' },
      { q: 'Is National 5 Applications of Maths easier than National 5 Maths?', a: 'It is different rather than simply easier. The algebra is lighter, but nearly every question is set in context and marks depend on interpreting and justifying, which the 2026 report shows many candidates found hard.' },
      { q: 'Can you do Higher Maths after National 5 Applications of Maths?', a: 'National 5 Mathematics is the usual route to Higher Mathematics, because Higher builds on its algebra and trigonometry. Applications of Mathematics leads naturally to Higher Applications of Mathematics; schools decide individual cases.' },
      { q: 'What was the pass mark for National 5 Applications of Maths in 2026?', a: 'The 2026 minimum mark for a C was 48 of 90, and for an A it was 65. Boundaries are set fresh each year, and the report says paper 2 was less demanding than intended in 2026.' },
      { q: 'How many people take National 5 Applications of Maths?', a: 'In 2026, 30,078 candidates received a result, up from 27,706 in 2025 and 24,285 in 2024.' },
      { q: 'What topics are in National 5 Applications of Maths?', a: 'Numeracy, finance, statistics, measurement, geometry, and graphical data and probability. Distinctive topics include precedence tables, container packing, navigation with bearings, tolerance and standard deviation.' },
      { q: 'Where can I find past papers?', a: 'Past papers, a specimen paper and marking instructions are free on the Qualifications Scotland course page for National 5 Applications of Mathematics. We use them for timed practice and write our own questions for teaching.' },
      { q: 'When are your lessons?', a: T + ' Times are always given in UK time.' },
      { q: 'Does the course give a Numeracy award?', a: 'Yes. The specification says achieving the course gives automatic certification of Numeracy at SCQF level 5.' },
      { q: 'Are you part of Qualifications Scotland or SQA?', a: 'No. Modern Age Coders is an independent online school and has no link with Qualifications Scotland, SQA or any school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere for Scotland',
    h2: 'Related pages for S4 and beyond',
    lede: 'The other National 5, the next level, and a partner subject.',
    items: [
      { href: '/national-5-maths-tuition-online', label: 'National 5 Maths tuition', p: 'The algebra-led National 5 and its two papers.' },
      { href: '/national-5-vs-higher-maths', label: 'National 5 vs Higher Maths', p: 'What changes between the two levels.' },
      { href: '/higher-maths-tuition-online', label: 'Higher Maths tuition', p: 'The S5 course for candidates continuing with mathematics.' },
      { href: '/national-5-computing-science-help', label: 'National 5 Computing Science', p: 'A practical partner subject with its own project.' },
      { href: '/maths-tutor-cost-scotland', label: 'Maths tutor cost in Scotland', p: 'Questions to ask before choosing help.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page in one place.' }
    ]
  },

  start: {
    h2: 'Book a free Applications of Maths lesson',
    lede: 'Leave a phone number and we will call at a UK time that suits. The lesson works through a few real-context questions and ends with an honest view of which National 5 fits and what to work on.',
    readFirst: 'Rather browse first? The <a class="ag-inline-link" href="/courses/national-5-and-higher-maths-course">National 5 and Higher syllabus</a> lists each topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our lessons.',
    note: 'WhatsApp is free from a UK mobile and usually the fastest. Replies come from our India office on a +91 number.',
    formNote: 'No card details and no commitment; we reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Senior phase maths', links: [
        { href: '/national-5-maths-tuition-online', label: 'National 5 Maths' },
        { href: '/higher-maths-tuition-online', label: 'Higher Maths' },
        { href: '/national-5-vs-higher-maths', label: 'N5 vs Higher' },
        { href: '/advanced-higher-maths-tuition-online', label: 'Advanced Higher Maths' }
      ] },
      { h4: 'Elsewhere', links: [
        { href: '/national-5-computing-science-help', label: 'N5 Computing Science' },
        { href: '/coding-and-ai-classes-in-scotland', label: 'Coding in Scotland' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'National 5 Applications of Maths, live in UK time'
  },

  personalityCss: `
.ag-root.ag-na .ag-hero h1 { letter-spacing: -0.022em; font-weight: 705; }
.ag-root.ag-na .ag-capsule { border-left-width: 3px; border-top: 3px solid var(--ag-accent); }
.ag-root.ag-na .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-na .ag-table caption { text-align: left; font-weight: 670; }
.ag-root.ag-na .ag-table td:first-child { font-weight: 640; width: 24%; }
.ag-root.ag-na .ag-steps li { margin-bottom: 10px; }
`,

  dossier: {
    curriculumAuthority: 'Scotland, National 5 Applications of Mathematics, course code C844 75, course assessment code X844 75, SCQF level 5 (24 credit points), specification version 3.0 May 2023, valid from session 2023-24: paper 1 non-calculator 35 marks 50 minutes; paper 2 55 marks 1 hour 40 minutes including case-study reading; 90 marks; most questions in context; notional 160 hours; entry at centre discretion, recommended fourth level or National 4 Applications of Mathematics; Numeracy at SCQF level 5. Skills: numeracy, finance, statistics, measurement, geometry, graphical data and probability. Course report 2026 (Qualifications Scotland): entries 27,706 (2025) and 30,078 (2026); A 31.9% minimum 65; C minimum 48, cumulative 63.0%; No award 23.2%; paper 2 less demanding than intended; question findings on critical path, gradient units, quarter circle arc, direct proportion, compound percentage, scale drawing, mean and standard deviation, container packing; advice to teachers. Course report 2025: entries 24,285 (2024).',
    localProject: 'Applications of Mathematics marks the decision as well as the sum. A National 5 Applications door: the two papers and the skill areas from the specification, the 2026 results, an honest comparison with National 5 Mathematics and what each leads to, the 2026 course report\'s findings set out as a table, and five original worked examples that each end in a decision (a video project critical path, a ramp gradient against a practice guideline, crate packing in two orientations, a puffin colony multiplier, a flight across a time zone) plus statements comparing two data sets and an original practice set. Lesson family: a Scottish senior phase exam door.',
    requiredMentions: [
      'C844 75',
      'This course is particularly suitable for learners who wish to develop the mathematical reasoning and numerical skills which are useful in other curriculum areas and workplaces.',
      'Most candidates made no attempt to give the height and horizontal distance in consistent units.',
      'Most candidates did not successfully calculate the arc length of the quarter circle.',
      'Few candidates successfully compared the mean and standard deviation.',
      'increasing the number of workers should not increase the time taken to complete a job',
      'Make sure candidates understand the difference between direct and inverse proportion',
      'A puffin colony of 2400 birds',
      '30,078'
    ],
    sources: [
      { claim: 'National 5 Applications of Mathematics Course Specification, version 3.0: codes, papers, marks, times, entry, Numeracy, skills.', url: 'https://www.sqa.org.uk/sqa/files_ccc/n5-course-spec-applications-mathematics.pdf' },
      { claim: 'Course report 2026: entries, grades and minimum marks, question findings, advice to teachers.', url: 'https://www.sqa.org.uk/sqa/files_ccc/2026-n5-course-report-app-of-maths.pdf' },
      { claim: 'Course report 2025: resulted entries for 2024.', url: 'https://www.sqa.org.uk/sqa/files_ccc/2025-n5-course-report-applications-mathematics.pdf' },
      { claim: 'Qualifications Scotland course page: documents remain current after 1 February 2026; past papers and specimen paper.', url: 'https://www.sqa.org.uk/sqa/81281.html' }
    ],
    rejectedClaims: [
      'Reproducing any 2026 question: described from the report only; every example on the page is ours.',
      'Worked finance examples on tax, National Insurance, loans or credit cards: the strand is named but not worked, under the page\'s money-content rule.',
      'That Applications of Mathematics bars a candidate from Higher Mathematics: no such rule was found; the page says schools decide.',
      'The 2027 exam date: not checked against a published 2027 timetable, so not stated.',
      'Any grade promise: declined.'
    ]
  }
};
