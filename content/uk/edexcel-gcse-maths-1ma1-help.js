'use strict';
// Pearson Edexcel GCSE Maths 1MA1 help (ag- maths door, England; UK and US exams cluster, row UK019).
// Sources, read raw on 31 October 2026 (curl -sL from qualifications.pearson.com; PDFs through pypdf and macOS
// PDFKit; raw copies in keyword-research-2026-09/uk-us-gap/src/edexcel-gcse-maths-1ma1-help/):
//  - Pearson Edexcel Level 1/Level 2 GCSE (9-1) in Mathematics (1MA1) specification, "First certification from June
//    2017 Issue 2". Verbatim: "The qualification consists of three equally-weighted written examination papers at
//    either Foundation tier or Higher tier."; "Each paper is 1 hour and 30 minutes long."; "Each paper has 80
//    marks."; "Individual papers are not graded."; "Foundation tier: grades 1 to 5."; "Higher tier: grades 4 to 9
//    (grade 3 allowed)."; paper codes "1MA1/1F or 1MA1/1H"; topic weightings as ranges: Foundation Number 22 - 28%,
//    Algebra 17 - 23%, Ratio 22 - 28%, Geometry and Measures 12 - 18%, Statistics and Probability 12 - 18%; Higher
//    Number 12 - 18%, Algebra 27 - 33%, Ratio 17 - 23%, Geometry and Measures 17 - 23%, Statistics and Probability
//    12 - 18% (restated with "to" on the page); content "identified by standard type", "the standard and the
//    underlined type", "bold type"; AO1 strand 1 recall "Should be no more than 10% of AO1"; "4b - present proofs
//    (higher tier only)"; November: "Students who take GCSE Mathematics in a November series must be at least 16
//    years of age on the preceding 31st August."; QN "601/4700/3"; subject code 1MA1; discount code RB1;
//    progression: "Students are expected to continue with their study of GCSE Mathematics after the age of 16 if they
//    have not achieved the qualification at Key Stage 4."
//  - Pearson, GCSE (9-1) Mathematics Content Guidance, Issue 5 (2019). Verbatim: "The P (process) mark denotes those
//    questions that have been classified as AO3 (problem solving)"; "The P mark works in exactly the same way as the
//    M (method) mark."; "The exception will be in questions where candidates are specifically instructed to show
//    working. In these questions, the correct solution with no working will score no marks."; N2 commentary
//    "examiners will not be prescribing the method that candidates should use"; turning points "No use of calculus
//    is expected – however, if candidates use an AS/A level skill correctly then they will be awarded marks";
//    "When estimating area under a curve, a maximum of four equal intervals is expected."; suvat "no application of
//    these formulae is expected"; "Any necessary conversions from metric units to imperial units will be given
//    within the question."
//  - Pearson, Getting Started Guide for 1MA1 (v1, Aug 2024): "Shadow Papers – alternative versions of the past exam
//    papers with the numbers or contexts changed"; "Reordered papers – past exam papers where the questions have
//    been re-ordered in descending mean performance score for all students"; "Crossover question papers"; "Aiming
//    for practice tests – designed to support students in working towards their target grade"; "examWizard";
//    "ResultsPlus – our free online results analysis tool for teachers"; "Enhanced Tiering Support".
//  - Pearson Edexcel GCSE Summer 2027 Examination Timetable, FINAL, and November 2026 Examination Timetable, FINAL:
//    1MA1 1F and 1H Friday 14 May 2027, 2F and 2H Thursday 27 May 2027, 3F and 3H Monday 14 June 2027, all Morning
//    1h 30m; November 2026: Wednesday 04 November, Friday 06 November, Monday 09 November, Morning.
//  - Ofqual consultation outcome (gov.uk), formulae sheets in 2025, 2026 and 2027 including November.
// Our own: the three worked examples, the practice set, the tick sheet and the plan are ours. Pearson examiner
// reports (Principal Examiner Feedback) were not reachable as files on 31 October 2026 (the guessed URLs return an
// HTML page), so none are quoted.
// Spine: Edexcel marks the process. Problem-solving questions carry P marks for any valid route, examiners do not
// prescribe a method, and a "show your working" instruction turns a bare correct answer into zero. Lesson family: a
// board door built on how the mark scheme rewards working, distinct from the AQA door (content references).

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'EDEXCEL 1MA1', blurb: 'P marks reward any valid route through a problem. A bare answer where working was asked for scores nothing.' },
  slug: 'edexcel-gcse-maths-1ma1-help',
  code: 'eg',
  accent: '#224F55',
  accentRationale: 'Edexcel 1MA1 maths: a deep sea teal (#224F55, 8.55:1 on #FBF8F2 and 7.35:1 on the deepest paper tint), greener than the AQA slate and clearly apart from the navy and forest accents in the GCSE group',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Edexcel GCSE Maths 1MA1 help',
  title: 'Edexcel GCSE Maths 1MA1 Help | P Marks, Papers, 2027 Dates',
  description: 'Pearson Edexcel GCSE Maths 1MA1 help: three 80-mark papers, how P marks reward working, the 2027 timetable, and Pearson\'s own free practice materials.',
  ogDescription: 'On Edexcel GCSE Maths, problem-solving marks follow the route, not just the answer. How P marks work, and how to prepare for 1MA1.',
  twitterDescription: 'Edexcel GCSE Maths 1MA1: the papers, the tier grades, P marks, the November 2026 and June 2027 dates, and how to practise.',
  pageName: 'Edexcel GCSE Maths 1MA1 Help',
  webPageDescription: 'Live online help for Pearson Edexcel GCSE Mathematics 1MA1, Foundation and Higher, built from the Issue 2 specification, Pearson\'s content guidance and its 2026 to 2027 timetables.',
  courseDescription: 'Live online teaching for Pearson Edexcel GCSE Mathematics 1MA1 candidates at both tiers, with method and process marks practised on every question.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Edexcel GCSE Maths 1MA1',
  navLinks: [
    { href: '#structure', label: 'Structure' },
    { href: '#pmarks', label: 'P marks' },
    { href: '#guidance', label: 'What Pearson says' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Pearson Edexcel GCSE (9-1) Mathematics 1MA1 &middot; Years 10 and 11',
  h1: 'Edexcel GCSE Maths 1MA1 help',
  lede: 'Pearson\'s mark schemes for GCSE Maths use a letter most students never notice: P, for process. It sits beside the familiar M for method and A for accuracy, and it goes on the problem-solving questions, where there is more than one sensible way in. Pearson\'s content guidance says examiners must credit any valid route, and that a partly finished solution still earns the P marks it has reached. The same guidance has a sting: where a question says working must be shown, "the correct solution with no working will score no marks." This page sets out how 1MA1 is examined, what the P mark changes about revision, what Pearson itself says about method and calculus and graphs, and three worked problems of our own written to be marked the Edexcel way.',
  secondaryCta: { href: '#pmarks', label: 'How P marks work' },
  wa: 'Hello Modern Age Coders, I would like a free first class for Edexcel GCSE Maths 1MA1.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; From Pearson\'s 1MA1 specification, content guidance and timetables',
  spec: [
    ['Qualification', 'Pearson Edexcel GCSE (9-1) Mathematics 1MA1'],
    ['Foundation', 'Grades 1 to 5'],
    ['Higher', 'Grades 4 to 9, grade 3 allowed'],
    ['Papers', 'Three, 80 marks, 1 hour 30 minutes'],
    ['Paper 1', 'No calculator'],
    ['Classes', 'Group of 15 to 20, or 1-on-1'],
    ['When', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Pearson Edexcel GCSE (9-1) Mathematics, specification code 1MA1, is a GCSE Maths qualification taken in England, mostly at the end of Year 11. Students sit three equally weighted papers at Foundation tier (grades 1 to 5) or Higher tier (grades 4 to 9, with grade 3 allowed): Paper 1 without a calculator and Papers 2 and 3 with one, each 80 marks in 1 hour 30 minutes. Modern Age Coders teaches 1MA1 in live online classes, either a group of 15 to 20 or 1-on-1, through the GCSE Maths: Foundation and Higher course. Pearson\'s summer 2027 timetable puts the papers on 14 May, 27 May and 14 June 2027. We are independent of Pearson.',

  picks: {
    eyebrow: 'Courses',
    h2: 'Where an Edexcel 1MA1 student usually starts',
    lede: 'Most students join the GCSE course at their tier. The other two cards are for an algebra gap, and for a family whose school uses Pearson\'s International GCSE rather than 1MA1.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'EX / 01', title: 'GCSE Maths: Foundation and Higher', note: 'Every 1MA1 topic at the entered tier, practised on Pearson papers with full working.' },
      { course: 'algebra-foundations-masterclass', code: 'EX / 02', title: 'Algebra Foundations', note: 'Algebra carries 27 to 33 per cent of Higher marks on 1MA1. This rebuilds it.' },
      { course: 'igcse-mathematics-mastery', code: 'EX / 03', title: 'IGCSE Maths', note: 'For schools sitting Pearson Edexcel International GCSE instead of the England GCSE.' }
    ]
  },

  sections: [
    {
      id: 'structure', tint: 'tint', eyebrow: 'Structure',
      h2: 'What are the three Edexcel 1MA1 papers, and when are they in 2027?',
      lede: 'One tier, three papers, one series. Every figure below is from Pearson\'s Issue 2 specification or its final timetables for November 2026 and summer 2027.',
      body: [
        { kind: 'table', caption: 'Pearson Edexcel GCSE Mathematics 1MA1: papers and 2026 to 2027 dates', head: ['Paper and code', 'Calculator', 'Marks and time', 'November 2026', 'Summer 2027'], rows: [
          ['Paper 1, 1MA1/1F or 1MA1/1H', 'No', '80 marks, 1 hour 30 minutes', 'Wednesday 4 November, morning', 'Friday 14 May, morning'],
          ['Paper 2, 1MA1/2F or 1MA1/2H', 'Yes', '80 marks, 1 hour 30 minutes', 'Friday 6 November, morning', 'Thursday 27 May, morning'],
          ['Paper 3, 1MA1/3F or 1MA1/3H', 'Yes', '80 marks, 1 hour 30 minutes', 'Monday 9 November, morning', 'Monday 14 June, morning']
        ] },
        { kind: 'p', html: 'Pearson is explicit that "Individual papers are not graded." The grade comes from the total across all three, so a weaker non-calculator paper on 14 May 2027 can be made up on the calculator papers later in the series. November entry is restricted: the specification says a November candidate "must be at least 16 years of age on the preceding 31st August", which makes November a resit series for students past Year 11.' },
        { kind: 'two', mt: true,
          leftH3: 'Grade 3 allowed',
          left: [
            'Higher tier awards grades 4 to 9, and the specification adds "(grade 3 allowed)". A Higher student who falls just short of grade 4 can still be given a 3 rather than a U.',
            'It is a safety net, not a strategy. A student working securely at grade 3 normally has more to gain on Foundation, where grade 4 and grade 5 marks are spread across the whole paper.'
          ],
          rightH3: 'Topic shares, as ranges',
          right: [
            'Pearson prints its topic weightings as bands rather than single figures. On Foundation, number and ratio each take 22 to 28 per cent; on Higher, algebra takes 27 to 33 per cent and number drops to 12 to 18 per cent.',
            'A range means one paper can lean a little more on a topic than another. Practise whole papers, not just the biggest topic.'
          ] },
        { kind: 'table', mt: true, caption: 'Codes that identify the qualification (from Appendix 2 of the specification)', head: ['Code', 'Value', 'What it is for'], rows: [
          ['Subject code', '1MA1', 'The code schools use to enter students'],
          ['Qualification Number (QN)', '601/4700/3', 'The number printed on the final certificate'],
          ['Discount code', 'RB1', 'Groups GCSE Maths qualifications for performance tables']
        ] },
        { kind: 'source', html: 'Sources: Pearson Edexcel GCSE (9-1) Mathematics 1MA1 specification, Issue 2, and Pearson\'s final GCSE timetables for November 2026 and summer 2027, all from <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html" rel="noopener" target="_blank">Pearson\'s GCSE Mathematics pages</a>, read on 31 October 2026.' }
      ]
    },
    {
      id: 'pmarks', tint: 'deep', eyebrow: 'P marks',
      h2: 'What is a P mark in an Edexcel GCSE Maths mark scheme?',
      lede: 'A P mark is a process mark, given for a correct step in a problem-solving question, by whatever valid route the student chose. It is the part of the Edexcel mark scheme that rewards thinking on paper.',
      body: [
        { kind: 'p', html: 'Pearson\'s content guidance explains that "The P (process) mark denotes those questions that have been classified as AO3 (problem solving) and therefore may have a number of different methods of solution." The mark scheme shows the commonest methods, but examiners are told to apply it to other methods too. And, in Pearson\'s words, "The P mark works in exactly the same way as the M (method) mark": a partly correct solution earns the process marks it has reached, as long as the working shown is a possible route to the answer.' },
        { kind: 'table', mt: true, caption: 'Method and process marks, as Pearson\'s content guidance describes them', head: ['Mark', 'Used on', 'How it is earned'], rows: [
          ['M (method)', 'Questions testing a technique', 'A correct method shown, credited even when the final answer is wrong'],
          ['P (process)', 'Questions classified as AO3, problem solving', 'A correct step by any valid route; a partial solution earns the P marks it reaches'],
          ['No working shown', 'Questions that say working must be shown', 'Pearson: the correct solution with no working will score no marks']
        ] },
        { kind: 'p', html: 'What the P mark changes is the value of an unfinished answer. A student who has done two of four steps in a problem and stops has not scored zero: they have probably scored two process marks. A student who does all four steps in their head and writes only the answer may score full marks, or, if the question says "show your working", nothing at all.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Start every problem', p: 'Because process marks are cumulative, the first written step of a hard question is worth more than an empty space and a perfect attempt at the next one.' },
          { h3: 'Write the route', p: 'One line per step, with a word saying what it is: "total area", "cost per tin". Examiners can only credit a route they can see.' },
          { h3: 'Obey "show working"', p: 'Pearson is clear that in those questions "the correct solution with no working will score no marks". A calculator answer copied down is not working.' }
        ] }
      ]
    },
    {
      id: 'guidance', tint: '', eyebrow: 'What Pearson says',
      h2: 'What does Pearson\'s content guidance say about methods, calculus and graphs?',
      lede: 'Pearson\'s senior examiners wrote a commentary under every 1MA1 content statement. A few of their notes settle arguments students and tutors have every year.',
      body: [
        { kind: 'table', caption: 'From Pearson\'s GCSE (9-1) Mathematics Content Guidance, Issue 5', head: ['Topic', 'What the guidance says', 'What it means for practice'], rows: [
          ['Written calculation (N2)', 'Examiners "will not be prescribing the method that candidates should use"', 'Grid, column or any correct written method earns the marks'],
          ['Turning points of quadratics', '"No use of calculus is expected", but a correct AS or A level method "will be awarded marks"', 'Completing the square or symmetry is enough; calculus is allowed, not needed'],
          ['Area under a curve', '"a maximum of four equal intervals is expected"', 'Practise trapezium estimates with up to four strips, not ten'],
          ['Kinematics formulae', 'Students may rearrange or substitute into them, but "no application of these formulae is expected"', 'Treat suvat as algebra practice, not as mechanics'],
          ['Imperial units', 'Conversions from metric to imperial "will be given within the question"', 'Learn metric conversions; read imperial ones off the paper']
        ] },
        { kind: 'p', html: 'The specification adds two structural points. Content is printed in three styles: standard type for everyone, underlined type that is assessed for all students, and bold type that only Higher students are assessed on. And recalling facts is a small share of the marks: under the first assessment objective, the strand for recalling facts, terminology and definitions "Should be no more than 10% of AO1". Most marks go to using what is known, not to remembering it.' },
        { kind: 'two', mt: true,
          leftH3: 'Pearson\'s free practice material',
          left: [
            'Pearson\'s getting started guide lists resources schools can use alongside past papers. Two are unusually useful for revision. Shadow Papers are "alternative versions of the past exam papers with the numbers or contexts changed", so a student who has seen a paper can sit a fresh one of the same shape.',
            'Reordered papers are past papers "re-ordered in descending mean performance score for all students", so the questions run from the ones most students got right to the ones most got wrong.'
          ],
          rightH3: 'Ask the school for these',
          right: [
            'Crossover question papers collect the questions that appear on both tiers, which is where grades 4 and 5 are decided. "Aiming for" practice tests are built around a target grade.',
            'Several of these sit behind Pearson\'s teacher login. A school maths department can usually share them; we work from the public past papers and our own questions.'
          ] },
        { kind: 'source', html: 'Sources: Pearson, GCSE (9-1) Mathematics Content Guidance, Issue 5, and Getting Started Guide for 1MA1 (v1, August 2024), both linked from <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html" rel="noopener" target="_blank">Pearson\'s 1MA1 page</a>.' }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Three problems of our own, marked the Edexcel way',
      lede: 'Written by us to practise the habits Pearson\'s guidance describes, and not taken from any Pearson paper. The bracketed notes are our guess at where process or method marks would sit, not a Pearson mark scheme.',
      body: [
        { kind: 'two',
          leftH3: 'Problem 1, both tiers: a process question',
          left: [
            '<strong>Problem (ours).</strong> A garden fence has 14 panels. Each panel needs 0.6 litres of wood stain for one coat, and the fence needs two coats. Stain is sold in 2.5 litre tins. How many tins are needed?',
            '<strong>Step 1, stain per coat.</strong> 14 × 0.6 = 8.4 litres [process].',
            '<strong>Step 2, two coats.</strong> 8.4 × 2 = 16.8 litres [process].',
            '<strong>Step 3, tins.</strong> 16.8 ÷ 2.5 = 6.72 [process], so <strong>7 tins</strong>, because 6 tins hold only 15 litres [final answer, with the reason].'
          ],
          rightH3: 'What the steps protect',
          right: [
            'A student who gets step 2 wrong (forgetting the second coat) but divides correctly has still shown two valid process steps. A student who writes "7" with no working has bet every mark on the final number.',
            'Rounding up, not to the nearest whole number, is the classic accuracy trap in this kind of question: 6.72 tins means 7 must be bought.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Problem 2, Higher: a turning point without calculus',
          left: [
            '<strong>Problem (ours).</strong> Find the coordinates of the turning point of y = x² + 6x + 4.',
            '<strong>Complete the square.</strong> x² + 6x + 4 = (x + 3)² &minus; 9 + 4 = (x + 3)² &minus; 5 [method].',
            '<strong>Read it off.</strong> (x + 3)² is never negative and is zero when x = &minus;3, so the minimum value of y is &minus;5.',
            '<strong>Answer.</strong> The turning point is (&minus;3, &minus;5), and it is a minimum.'
          ],
          rightH3: 'Why this route',
          right: [
            'Pearson\'s guidance says no calculus is expected here. Completing the square is the GCSE route, and it gives the minimum value and its position in one line.',
            'A student who already knows differentiation from extra study may use it and will be credited, but should still be able to complete the square, because other questions ask for that form directly.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Problem 3, Higher: area under a curve',
          left: [
            '<strong>Problem (ours).</strong> A car\'s speed in m/s at times 0, 2, 4, 6 and 8 seconds is 0, 5, 8, 9 and 9. Use four equal strips to estimate the distance travelled in the 8 seconds.',
            '<strong>Trapezia, width 2.</strong> ½ × 2 × (0 + 5) = 5; ½ × 2 × (5 + 8) = 13; ½ × 2 × (8 + 9) = 17; ½ × 2 × (9 + 9) = 18 [method].',
            '<strong>Total.</strong> 5 + 13 + 17 + 18 = 53, so about <strong>53 metres</strong>.',
            '<strong>Interpret.</strong> The speed rises more and more slowly, so the curve bows above each straight-topped strip and 53 m is an underestimate.'
          ],
          rightH3: 'Four strips, as expected',
          right: [
            'Pearson\'s guidance says "a maximum of four equal intervals is expected" when estimating area under a curve, so this is the full scale of the task at GCSE.',
            'The last line, saying whether the estimate is too high or too low and why, is the reasoning part of the question and is often where Higher students drop the final mark.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, with answers).</strong> (1) A recipe for 6 people uses 450 g of flour; how much for 10 people? Show each step. (2) Write x² &minus; 8x + 3 in the form (x &minus; a)² &minus; b and state the turning point. (3) Show that 0.4 m³ is 400 000 cm³. (4) A rectangle has a perimeter of 30 cm and its length is twice its width; find its area. <strong>Answers:</strong> (1) 75 g per person, so 750 g; (2) (x &minus; 4)² &minus; 13, turning point (4, &minus;13); (3) 1 m³ = 100 × 100 × 100 = 1 000 000 cm³, and 0.4 × 1 000 000 = 400 000; (4) width 5 cm, length 10 cm, area 50 cm².' }
      ]
    },
    {
      id: 'routine', tint: '', eyebrow: 'A weekly routine',
      h2: 'How do you revise for Edexcel GCSE Maths 1MA1?',
      lede: 'A weekly routine we use with 1MA1 students from Year 10, written around how Pearson marks. Steps are ours; the papers are Pearson\'s.',
      body: [
        { kind: 'ol', items: [
          '<strong>One timed section a week.</strong> Twenty questions from a Pearson past paper at the right tier, under time, rather than whole papers too early.',
          '<strong>Mark with the scheme, letter by letter.</strong> Student and teacher go through the M, P, A and B marks together, so the student sees where each mark came from.',
          '<strong>Tick sheet for working.</strong> Our own checklist: every step written, units on the answer, rounding stated, a final sentence where the question asks why.',
          '<strong>One problem-solving question, three routes.</strong> Each week, one P-mark question solved in more than one valid way, so the student stops looking for "the" method.',
          '<strong>Non-calculator fluency, ten minutes a day.</strong> Fractions, percentages and written multiplication for Paper 1, which comes first in both series.',
          '<strong>Full papers from spring.</strong> From March of Year 11, one full paper a week, alternating calculator and non-calculator, ready for 14 May 2027.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we do',
          left: [
            'Teach the 1MA1 content at the student\'s tier, live, with Pearson\'s public past papers and mark schemes, and our own original problems.',
            'Make written working a habit that survives exam nerves, because on Edexcel it is where the problem-solving marks are.'
          ],
          rightH3: 'What we do not do',
          right: [
            'Promise a grade, or claim any connection with Pearson. We are independent tutors teaching to the published specification.',
            'Reproduce secure or teacher-only Pearson material. Where a school can share it, we use it alongside our own work.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four steps through Edexcel 1MA1',
    lede: 'Each step is measured on Pearson papers at the student\'s tier.',
    table: { caption: 'What a 1MA1 student should be able to show', head: ['Step', 'When', 'What should be true'], rows: [
      ['1. Knows the paper', 'Year 10', 'Can name the three papers, which has no calculator, and what bold type in the specification means'],
      ['2. Writes the route', 'Year 10', 'Every multi-step answer laid out one step per line, with a word for each step'],
      ['3. Starts every problem', 'Autumn of Year 11', 'No problem-solving question left blank; process marks earned even when unfinished'],
      ['4. Paces three papers', 'Spring of Year 11', 'Full timed papers finished, with time to check the last third']
    ] },
    left: { h3: 'Step two is the biggest win', ps: [
      'Writing the route is quick to teach and pays on every paper, at both tiers.',
      'Students who also take computing may want the <a class="ag-inline-link" href="/edexcel-gcse-computer-science-1cp2-help">Edexcel GCSE Computer Science 1CP2 page</a>.'
    ] },
    right: { h3: 'Step four comes last', ps: [
      'Pace follows fluency. Timed full papers before the content is secure mostly measure panic.',
      'Class load drops in the exam weeks.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for Edexcel GCSE students',
    lede: 'Arranged by where a student is: on the GCSE now, filling gaps, or looking past it.',
    bands: [
      { num: 'I', h3: '1MA1 itself', sub: 'Both tiers', courses: [
        { code: 'UK / EX1 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE Maths', blurb: 'The full 1MA1 content at Foundation or Higher.' },
        { code: 'UK / EX1 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'For the area worth the most marks on Higher.' },
        { code: 'UK / EX1 / 03', slug: 'gcse-maths-resit-course', title: 'GCSE Maths Resit', blurb: 'For the November series or a post-16 retake.' }
      ] },
      { num: 'II', h3: 'Related routes', sub: 'Other Pearson and Level 2 options', courses: [
        { code: 'UK / EX2 / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE Maths', blurb: 'Pearson Edexcel International GCSE and Cambridge routes.' },
        { code: 'UK / EX2 / 02', slug: 'functional-skills-maths-course', title: 'Functional Skills Maths', blurb: 'Level 1 and Level 2 for learners who need a practical route.' },
        { code: 'UK / EX2 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Twelve to eighteen per cent of 1MA1 on either tier.' }
      ] },
      { num: 'III', h3: 'After a strong Higher', sub: 'Years 11 to 13', courses: [
        { code: 'UK / EX3 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pearson Edexcel and AQA A level content.' },
        { code: 'UK / EX3 / 02', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'For students who want the most maths sixth form offers.' },
        { code: 'UK / EX3 / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Non-routine problems, the natural next step after P marks.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Classes',
    h2: 'How 1MA1 classes run',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teachers are based in India; every time we offer is in UK time.',
    slots: [
      { time: 'Late afternoon', l: 'Straight after school, Years 10 and 11.' },
      { time: 'Evening', l: 'After clubs and homework.' },
      { time: 'Weekend morning', l: 'Long enough for a full paper.' }
    ],
    cells: [
      { h3: 'Pearson papers', p: 'Public past papers and mark schemes at the student\'s tier, marked letter by letter.' },
      { h3: 'Route on the page', p: 'Every step written with a label, so process marks can be seen and given.' },
      { h3: 'More than one way', p: 'Problem-solving questions solved by two or three valid routes each week.' },
      { h3: 'Paper 1 fluency', p: 'Short daily non-calculator practice, because Paper 1 opens both series.' },
      { h3: 'First class free', p: 'One live class to see the student\'s work before anything is agreed.' },
      { h3: 'Group or 1-on-1', p: 'A batch of 15 to 20 at one tier, or a single student with their own plan.' }
    ]
  },

  projectsH2: 'Work from our students\' classes',
  projectsLede: 'Things students made during normal lessons, not marked or entered anywhere. There is more in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, exactly as posted.',

  fees: {
    h2: 'What Edexcel GCSE Maths classes cost',
    lede: 'A free first class, then a single monthly fee: lower for a group place, higher for 1-on-1. Nothing is charged until a course and a weekly slot are fixed, and there is no contract to sign.',
    free: ['A live class at the student\'s tier', 'A first look at how they lay out working', 'Only a phone number to book'],
    group: ['15 to 20 students on one tier', 'The same teacher to the summer exams', 'Pearson past papers marked by letter', 'A short monthly update for parents'],
    one: ['One teacher, one student', 'Built around the student\'s own papers', 'Useful for resits and late joiners']
  },

  faq: {
    eyebrow: 'Edexcel 1MA1 questions',
    h2: 'What students and parents ask about Edexcel GCSE Maths',
    items: [
      { q: 'What is the Edexcel GCSE Maths specification code?', a: 'It is 1MA1, for Pearson Edexcel Level 1/Level 2 GCSE (9-1) in Mathematics. The papers are coded 1MA1/1F to 1MA1/3F at Foundation and 1MA1/1H to 1MA1/3H at Higher.' },
      { q: 'How many marks is each Edexcel GCSE Maths paper?', a: 'Each of the three papers is worth 80 marks and lasts 1 hour 30 minutes, at both tiers. The papers are equally weighted, and the grade comes from the total across all three.' },
      { q: 'When are the Edexcel GCSE Maths exams in 2027?', a: 'Pearson\'s final summer 2027 timetable lists Paper 1 on Friday 14 May, Paper 2 on Thursday 27 May and Paper 3 on Monday 14 June 2027, all in the morning. The November 2026 papers are on 4, 6 and 9 November.' },
      { q: 'What does grade 3 allowed mean on Higher tier?', a: 'Higher tier awards grades 4 to 9, but a student who narrowly misses grade 4 can be awarded a 3 instead of a U. Below that, the result is unclassified.' },
      { q: 'What is a P mark in Edexcel maths?', a: 'A process mark, used on problem-solving questions. Pearson says it works like a method mark: any valid route is credited, and a partly correct solution earns the process marks it reaches.' },
      { q: 'Do I lose marks for not showing working?', a: 'Often you lose the chance of part marks, and where a question tells you to show working, Pearson\'s guidance says a correct answer with no working scores no marks. Writing each step is the safest habit.' },
      { q: 'Do I need calculus for Edexcel GCSE Maths?', a: 'No. Pearson\'s guidance says no calculus is expected for turning points; completing the square or symmetry is enough. A correct calculus method would still be credited.' },
      { q: 'Is there a formulae sheet in the Edexcel GCSE Maths exams?', a: 'Yes. Ofqual requires a formulae sheet in GCSE Maths exams in 2025, 2026 and 2027, including the November series, and Pearson provides a clean copy with each paper.' },
      { q: 'When can we have classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All class times are given in UK time.' },
      { q: 'Are you part of Pearson or Edexcel?', a: 'No. We are an independent online school with no connection to Pearson. We teach to the published 1MA1 specification, use Pearson\'s public past papers, and do not promise grades.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Other GCSE Maths help',
    lede: 'The other boards, the tier choice and the grades.',
    items: [
      { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'AQA, Edexcel and OCR compared', p: 'What differs between the three boards and what does not.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition online', p: 'Our main GCSE Maths page, for every board.' },
      { href: '/gcse-maths-foundation-vs-higher', label: 'Foundation or Higher', p: 'The evidence that should settle the tier.' },
      { href: '/gcse-maths-calculator-vs-non-calculator-papers', label: 'Calculator and non-calculator papers', p: 'Getting ready for Paper 1 and for Papers 2 and 3.' },
      { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition', p: 'For students on the International GCSE instead.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Every UK page, maths and coding, in one place.' }
    ]
  },

  start: {
    h2: 'Book a free Edexcel maths class',
    lede: 'Give us a number and we will call at a UK time you choose. The class works through Pearson-style questions at the student\'s tier and looks at how their working is laid out.',
    readFirst: 'Want to look around first? The <a class="ag-inline-link" href="/courses/gcse-mathematics-mastery">GCSE Maths course</a> lists every unit, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a typical lesson.',
    note: 'WhatsApp reaches us fastest and costs nothing from a UK phone. Our India team replies from a +91 number.',
    formNote: 'Nothing to pay and nothing to sign. We reply once, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Edexcel and GCSE', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/gcse-maths-grades-explained', label: 'Grades 1 to 9' },
        { href: '/gcse-maths-resit-explained', label: 'Resits' },
        { href: '/edexcel-gcse-computer-science-1cp2-help', label: 'Edexcel Computer Science 1CP2' }
      ] },
      { h4: 'Next steps', links: [
        { href: '/a-level-maths-tuition-online', label: 'A level maths' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Edexcel 1MA1, live classes in UK time'
  },

  personalityCss: `
.ag-root.ag-eg .ag-hero h1 { letter-spacing: -0.018em; font-weight: 720; }
.ag-root.ag-eg .ag-capsule { border-left-width: 7px; border-radius: 4px; }
.ag-root.ag-eg .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-eg .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-eg .ag-table th:first-child { width: 26%; }
.ag-root.ag-eg .ag-grid-3 h3 { letter-spacing: -0.005em; }
`,

  dossier: {
    curriculumAuthority: 'England, Pearson Edexcel GCSE (9-1) Mathematics 1MA1, specification Issue 2: three equally weighted papers, 80 marks and 1 hour 30 minutes each; Paper 1 non-calculator; Foundation grades 1 to 5, Higher 4 to 9 with grade 3 allowed; individual papers not graded; topic weightings as ranges; standard, underlined and bold type; recall no more than 10% of AO1; proofs Higher only; November entry at least 16 on the preceding 31 August; QN 601/4700/3, discount code RB1. Pearson Content Guidance Issue 5: P (process) marks for AO3 questions, any valid method, no marks for a correct answer without working where working is required; no prescribed written method; no calculus expected for turning points; at most four intervals for area under a curve; suvat not applied; imperial conversions given. Getting Started Guide: Shadow Papers, Reordered papers, Crossover papers, Aiming for tests, examWizard, ResultsPlus. Pearson final timetables: 4, 6 and 9 November 2026; 14 May, 27 May and 14 June 2027.',
    localProject: 'Edexcel marks the process. The page sets out the three 1MA1 papers with Pearson\'s own November 2026 and summer 2027 dates and the qualification codes, then explains the P (process) mark from Pearson\'s content guidance: any valid route is credited, partial solutions earn process marks, and a bare answer where working is demanded scores nothing. It tabulates the guidance\'s rulings on written methods, calculus, area under a curve, kinematics formulae and imperial units, describes Pearson\'s Shadow and Reordered papers, and works three original problems (a stain-and-tins process question, a turning point by completing the square, and a four-strip trapezium estimate) plus an original practice set, closing with a weekly routine. Lesson family: a board door built on how the mark scheme rewards working.',
    requiredMentions: [
      'Individual papers are not graded.',
      '601/4700/3',
      'The P mark works in exactly the same way as the M (method) mark',
      'the correct solution with no working will score no marks',
      'will not be prescribing the method that candidates should use',
      'a maximum of four equal intervals is expected',
      'Should be no more than 10% of AO1',
      'alternative versions of the past exam papers with the numbers or contexts changed',
      'Thursday 27 May, morning',
      'Wednesday 4 November, morning'
    ],
    sources: [
      { claim: 'Pearson Edexcel GCSE (9-1) Mathematics 1MA1 specification, Issue 2: papers, tiers, grade 3 allowed, weightings, content type styles, AO strands, November rule, codes.', url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/mathematics/2015/specification-and-sample-assesment/gcse-maths-2015-specification.pdf' },
      { claim: 'Pearson GCSE (9-1) Mathematics Content Guidance, Issue 5: P marks, show-working rule, methods, calculus, area under a curve, kinematics, imperial units.', url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/mathematics/2015/teaching-and-learning-materials/GCSE_(9-1)_Mathematics_Content_Guidance.pdf' },
      { claim: 'Pearson Getting Started Guide for 1MA1: Shadow Papers, Reordered papers, Crossover papers, Aiming for tests, examWizard, ResultsPlus.', url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/mathematics/2015/teaching-and-learning-materials/1ma1-gcse-mathematics-getting-started.pdf' },
      { claim: 'Pearson Edexcel GCSE Summer 2027 Examination Timetable, FINAL: 1MA1 dates.', url: 'https://qualifications.pearson.com/content/dam/pdf/Support/Examination-timetables-for-UK-Edexcel-GCSE/gcse-summer-2027final.pdf' },
      { claim: 'Pearson Edexcel GCSE November 2026 Examination Timetable, FINAL: 1MA1 dates.', url: 'https://qualifications.pearson.com/content/dam/pdf/Support/Examination-timetables-for-UK-Edexcel-GCSE/gcse-nov2026-final.pdf' },
      { claim: 'Ofqual decision: formulae sheets in GCSE mathematics in 2025, 2026 and 2027, including November.', url: 'https://www.gov.uk/government/consultations/proposed-changes-to-the-assessment-of-mathematics-physics-and-combined-science-gcses-in-2025-2026-and-2027' }
    ],
    rejectedClaims: [
      'Pearson Principal Examiner Feedback for June 2025: the files could not be located at a public URL (guessed paths return an HTML page), so no examiner comments are quoted.',
      'Definitions of A (accuracy) and B marks: not found in the Pearson documents read, so the page explains only M and P marks.',
      'JCQ common timetable: jcq.org.uk returned 403, so dates come from Pearson\'s own final timetables.',
      'Grade boundaries and entry numbers: not read at a primary source, not quoted.',
      'Any promised grade: declined.'
    ]
  }
};
