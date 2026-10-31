'use strict';
// Year 11 maths tutor online (ag- maths door, England; UK and US exams cluster Phase 2, row UK017).
// Sources, read raw on 31 October 2026 (curl -sL; PDFs through PyPDF; raw copies in
// keyword-research-2026-09/uk-us-gap/src/year-11-maths-tutor-online/, src/aqa-gcse-maths-8300-help/,
// src/edexcel-gcse-maths-1ma1-help/ and src/ocr-gcse-maths-j560-help/):
//  - AQA 8300 key dates page: June 2027 series 8300/1F and 1H 14 May, 2F and 2H 27 May, 3F and 3H 14 Jun, each
//    "Start time: AM | Duration: 1h 30m".
//  - Pearson Edexcel GCSE Summer 2027 Examination Timetable FINAL: "Friday 14 May 1MA1 1F Mathematics Paper 1
//    (Non-Calculator) Foundation Tier Morning 1h 30m"; "Thursday 27 May 1MA1 2F Mathematics Paper 2 (Calculator)";
//    "Monday 14 June 1MA1 3F Mathematics Paper 3 (Calculator)" (and the H papers on the same mornings).
//  - Cambridge OCR Final Examination Timetable June 2027, GCSE and Cambridge Nationals: "J560/01 Paper 1 (Foundation
//    – calculator) 1 h 30 min Fri 14 May am"; "J560/02 Paper 2 (Foundation – non-calculator) 1 h 30 min Thu 27 May
//    am"; "J560/03 Paper 3 (Foundation – calculator) 1 h 30 min Mon 14 June am"; J560/04 to /06 Higher on the same
//    mornings in the same calculator order. Notes: "The awarding bodies have designated the morning and afternoon
//    sessions of Wednesday 23 June 2027 as 'contingency sessions'"; "candidates that they must remain available
//    until Wednesday 23 June 2027"; "The published starting time of all examinations is either 9.00 am or 1.30
//    pm."; "candidates must start morning examinations no earlier than 8.30 am and by 9.30 am"; "Candidates must
//    remain under supervision until 10.00 am for morning examinations".
//  - AQA results days page: June 2027 GCSE results day "19 August 2027"; November 2026 GCSE "13 January 2027".
//  - Ofqual, Decisions on changes to the assessment of mathematics, physics and combined science GCSEs in 2025,
//    2026 and 2027 (gov.uk content API): boards must "publish the formulae and equations sheets for the exams in
//    2026 and 2027 by 1 September 2025 and 1 September 2026 respectively" and "provide clean copies with their 2025,
//    2026 and 2027 exam papers"; "For GCSE mathematics this will also apply to exams taken in November 2025, 2026
//    and 2027."
//  - DfE, 2026 to 2027 academic year: 16 to 19 funding, maths and English condition of funding (gov.uk, updated 24
//    July 2026). Verbatim: applies to students who "do not hold a GCSE grade 9 to 4 (a level 2 pass grade) or
//    equivalent qualification in these maths and/or English, by the end of year 11"; "Full-time students who have a
//    GCSE grade 3 must study towards a maths and/or English GCSE"; "the minimum planned teaching hours requirement is
//    100 hours for maths".
//  - gov.uk, The national curriculum: Year 11 "15 to 16", "Most children take GCSEs or other national tests".
// Our own: the countdown plan from November 2026, the gap counts between papers (13 days and 18 days, counted by us
// from the published dates), the three worked examples and the practice set.
// Spine: Year 11 is the exam year. For 2026 to 2027 the page lays the three English boards' June 2027 maths dates
// side by side from each board's own timetable, shows that OCR's calculator order differs on the same mornings, adds
// the exam-day rules and the contingency day, the results day, and what grade 4 means for the year after. Lesson
// family: a year-group door built on the final series of a course.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'YEAR 11', blurb: 'The exam year. The June 2027 maths mornings from each board\'s own timetable, the contingency day, and results on 19 August.' },
  slug: 'year-11-maths-tutor-online',
  code: 'gaj',
  accent: '#145153',
  accentRationale: 'Year 11 maths: a dark sea teal (#145153, 8.5:1 on #FBF8F2), the steadiest of the three year-group colours, chosen to sit apart from the Year 9 fern and the Year 10 heather',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Year 11 maths tutor online',
  title: 'Year 11 Maths Tutor Online | 2027 GCSE Dates and a Plan',
  description: 'Year 11 maths tutor online: the June 2027 GCSE maths dates from AQA, Edexcel and OCR, the calculator order, exam-day rules, results day and a countdown plan.',
  ogDescription: 'Year 11 is the GCSE year. Here are the June 2027 maths mornings from each board, the contingency day, results day and a plan from November to June.',
  twitterDescription: 'Year 11 maths in 2027: three mornings in May and June, a contingency day, results on 19 August, and a countdown plan.',
  pageName: 'Year 11 Maths Tutor Online',
  webPageDescription: 'Live online maths teaching for Year 11 students in England preparing for the June 2027 GCSE Mathematics series with AQA, Pearson Edexcel or OCR.',
  courseDescription: 'Live online GCSE Maths classes for Year 11, planned backwards from the June 2027 exam mornings.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Year 11 maths',
  navLinks: [
    { href: '#dates', label: '2027 dates' },
    { href: '#examday', label: 'Exam day' },
    { href: '#after', label: 'After results' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; Key Stage 4 &middot; Year 11, ages 15 to 16',
  h1: 'Year 11 maths tutor online',
  lede: 'Year 11 is the year the maths is finally examined. For students in Year 11 during 2026 to 2027, GCSE Mathematics comes down to three mornings: Friday 14 May, Thursday 27 May and Monday 14 June 2027, the same three dates whichever of the English boards the school uses. What differs is the order of the papers, and one board flips the calculator rule on the first morning. This page sets out the June 2027 maths dates from each board\'s own timetable, the rules for the exam mornings and the contingency day, when results arrive, and what a grade 4 changes for the year after. It ends with a countdown plan from November 2026 and three original Year 11 questions worked in full.',
  secondaryCta: { href: '#dates', label: 'See the 2027 dates' },
  wa: 'Hello Modern Age Coders, I would like a free first maths class for my child in Year 11.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Dates from the AQA, Pearson and OCR June 2027 timetables',
  spec: [
    ['Year group', 'Year 11, ages 15 to 16'],
    ['Exam', 'GCSE Mathematics, June 2027 series'],
    ['Maths mornings', '14 May, 27 May, 14 June 2027'],
    ['Results day', '19 August 2027'],
    ['Course', 'GCSE Maths: Foundation and Higher'],
    ['Format', 'Group of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'In short',
  capsule: 'Year 11 maths in England is the final year of GCSE Mathematics, for students aged 15 to 16. In the June 2027 series, AQA, Pearson Edexcel and OCR all sit their three GCSE maths papers on the mornings of 14 May, 27 May and 14 June 2027, and AQA lists GCSE results day as 19 August 2027. Modern Age Coders teaches Year 11 maths live online through its GCSE Maths: Foundation and Higher course, 1-on-1 or in a batch of 15 to 20, planned back from those dates. We have no connection with any exam board.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for a Year 11 student',
    lede: 'Nearly every Year 11 joins the first. The second is for algebra that still leaks marks this late; the third is the safety net if the summer does not go to plan.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'Y11 / 01', title: 'GCSE Maths: Foundation and Higher', note: 'Past papers at the student\'s tier, timed and marked, through to 14 June 2027.' },
      { course: 'algebra-foundations-masterclass', code: 'Y11 / 02', title: 'Algebra Foundations', note: 'A short, focused repair of equations and expressions for a Year 11 still unsure of them.' },
      { course: 'gcse-maths-resit-course', code: 'Y11 / 03', title: 'GCSE Maths Resit', note: 'For the year after Year 11, if a grade 4 is still needed.' }
    ]
  },

  sections: [
    {
      id: 'dates', tint: 'tint', eyebrow: 'June 2027',
      h2: 'When are the GCSE maths exams in 2027?',
      lede: 'Friday 14 May, Thursday 27 May and Monday 14 June 2027, all in the morning, for AQA, Pearson Edexcel and OCR alike. Each board publishes these in its own timetable; the table takes each row from the board itself.',
      body: [
        { kind: 'table', caption: 'GCSE Mathematics, June 2027 series: which paper each board sits on each morning (from the AQA key dates page, the Pearson Edexcel Summer 2027 final timetable and the OCR June 2027 final timetable)', head: ['Morning', 'AQA 8300', 'Pearson Edexcel 1MA1', 'OCR J560'], rows: [
          ['Friday 14 May 2027', 'Paper 1, non-calculator', 'Paper 1, non-calculator', 'Paper 1 (Foundation) or 4 (Higher), calculator'],
          ['Thursday 27 May 2027', 'Paper 2, calculator', 'Paper 2, calculator', 'Paper 2 (Foundation) or 5 (Higher), non-calculator'],
          ['Monday 14 June 2027', 'Paper 3, calculator', 'Paper 3, calculator', 'Paper 3 (Foundation) or 6 (Higher), calculator']
        ] },
        { kind: 'p', html: 'Every paper in the table lasts 1 hour 30 minutes. The detail that catches families out is in the OCR column. OCR numbers its Foundation papers 1 to 3 and its Higher papers 4 to 6, and its timetable lists J560/01, the Foundation calculator paper, and J560/04, the Higher calculator paper, on Friday 14 May 2027, with the non-calculator paper on Thursday 27 May. So on the first maths morning, AQA and Edexcel students sit their non-calculator paper while OCR students sit a calculator paper. A student who has revised from a friend\'s timetable at a different school can prepare for the wrong paper.' },
        { kind: 'p', html: 'The gaps are generous. Counting from the published dates, there are 13 days between the first and second mornings and 18 days between the second and third; those counts are ours. That spacing means Year 11 maths revision does not have to be a single final cram. A student can review the first paper\'s weak areas before the second, and the second\'s before the third.' },
        { kind: 'two', mt: true,
          leftH3: 'The formulae sheet for 2027',
          left: [
            'Ofqual required the boards to publish the sheets for the 2027 exams "by 1 September 2026" and to "provide clean copies" with the papers. Students sitting in June 2027 should already be practising with their board\'s sheet.',
            'The decision also covers the November series: "For GCSE mathematics this will also apply to exams taken in November 2025, 2026 and 2027."'
          ],
          rightH3: 'Which board, which tier',
          right: [
            'The school chooses the board and enters the student for one tier. Ask the exams office which board and which tier before the spring, so revision uses the right papers.',
            'Foundation awards grades 1 to 5 and Higher grades 4 to 9 on all three boards.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/key-dates" rel="noopener" target="_blank">AQA 8300 key dates</a>, <a class="ag-inline-link" href="https://qualifications.pearson.com/content/dam/pdf/Support/Examination-timetables-for-UK-Edexcel-GCSE/gcse-summer-2027final.pdf" rel="noopener" target="_blank">Pearson Edexcel GCSE Summer 2027 final timetable</a> and <a class="ag-inline-link" href="https://www.ocr.org.uk/administration/key-dates-and-timetables/" rel="noopener" target="_blank">OCR June 2027 final timetable</a>, all read on 31 October 2026; <a class="ag-inline-link" href="https://www.gov.uk/government/consultations/proposed-changes-to-the-assessment-of-mathematics-physics-and-combined-science-gcses-in-2025-2026-and-2027" rel="noopener" target="_blank">Ofqual decisions on formulae sheets for 2025 to 2027</a>. Check the school\'s own timetable as well; Wales and Northern Ireland use other boards.' }
      ]
    },
    {
      id: 'examday', tint: 'deep', eyebrow: 'The exam mornings',
      h2: 'What time do GCSE maths exams start, and what is the contingency day?',
      lede: 'Morning papers are published to start at 9.00 am, and every student must stay available until Wednesday 23 June 2027 in case a paper has to move. Both rules come from the notes printed at the front of OCR\'s June 2027 timetable.',
      body: [
        { kind: 'p', html: 'OCR\'s final timetable sets out the shared rules plainly. "The published starting time of all examinations is either 9.00 am or 1.30 pm." Schools may move the start within the session, but "candidates must start morning examinations no earlier than 8.30 am and by 9.30 am", and they "must remain under supervision until 10.00 am for morning examinations". For a 90-minute maths paper starting at 9.00 am, a student should expect to finish around 10.30 am, later with any agreed extra time.' },
        { kind: 'table', mt: true, caption: 'Exam-morning rules for June 2027, from the notes in OCR\'s final GCSE timetable', head: ['Rule', 'What the timetable says'], rows: [
          ['Published start, morning', '9.00 am'],
          ['Earliest and latest start', 'No earlier than 8.30 am and by 9.30 am'],
          ['Supervision', 'Until 10.00 am for morning papers'],
          ['Contingency sessions', 'Morning and afternoon of Wednesday 23 June 2027'],
          ['Availability', 'Candidates must remain available until Wednesday 23 June 2027']
        ] },
        { kind: 'p', html: 'The contingency day exists, in the timetable\'s words, "in the event of national or significant local disruption to examinations in the United Kingdom". It is rarely used, but it is the reason schools ask Year 11 students not to book a family holiday before the end of the exam period. The awarding bodies designate it together, so it applies to AQA and Pearson students as well as OCR\'s.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'The night before', p: 'Pack a ruler, a pair of compasses, a protractor, pencils and black pens. Pack the calculator only for the calculator papers, and check which morning that is on your board.' },
          { h3: 'The first ten minutes', p: 'Read the front cover, then the formulae sheet. Note where the long questions sit. The first page is where quick marks are banked.' },
          { h3: 'The last ten minutes', p: 'Go back to any blank answer line and write something: a method line can earn a mark even when the answer is wrong.' }
        ] }
      ]
    },
    {
      id: 'after', tint: '', eyebrow: 'After results',
      h2: 'When are GCSE results in 2027, and what if a student does not get a 4?',
      lede: 'AQA lists GCSE results day for the June 2027 series as 19 August 2027. A student who finishes Year 11 without a grade 4 in maths keeps studying it after 16, under a DfE funding rule.',
      body: [
        { kind: 'p', html: 'AQA\'s results days page gives 19 August 2027 for June 2027 GCSEs, and 13 January 2027 for the November 2026 GCSE series. The boards share results days, so a student with papers from more than one board receives everything on the same morning.' },
        { kind: 'p', html: 'Grade 4 matters beyond Year 11 because of the DfE\'s 16 to 19 condition of funding. Its 2026 to 2027 guidance applies to students who "do not hold a GCSE grade 9 to 4 (a level 2 pass grade) or equivalent qualification in these maths and/or English, by the end of year 11". For them, maths continues: "Full-time students who have a GCSE grade 3 must study towards a maths and/or English GCSE", and the minimum planned teaching is "100 hours for maths". Students with grade 2 or below may take Functional Skills level 2 instead, or GCSE.' },
        { kind: 'table', mt: true, caption: 'What happens in maths after Year 11, by GCSE grade, from the DfE condition of funding guidance for 2026 to 2027 (summarised)', head: ['Grade at the end of Year 11', 'Maths after 16 on a full-time study programme'], rows: [
          ['9 to 4', 'Condition of funding met; maths optional (A level, Core Maths and so on)'],
          ['3', 'Must study towards GCSE maths'],
          ['2 or below', 'GCSE maths or Functional Skills level 2, possibly via a level 1 or entry level step']
        ] },
        { kind: 'p', html: 'This is why many Year 11 teachers talk about grade 4 so much. It is not a pass mark in the old sense, but it is the line that decides whether maths continues as a requirement. For students near that line, Year 11 is the cheapest place to cross it: a grade 4 in August 2027 saves a year of compulsory resit lessons. Our <a class="ag-inline-link" href="/gcse-maths-resit-explained">GCSE maths resits page</a> covers the other side of the line.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.aqa.org.uk/exams-administration/results-days" rel="noopener" target="_blank">AQA results days</a> and <a class="ag-inline-link" href="https://www.gov.uk/government/publications/16-to-19-funding-maths-and-english-condition-of-funding" rel="noopener" target="_blank">DfE, 16 to 19 funding: maths and English condition of funding, 2026 to 2027</a>, read on 31 October 2026. The table is our summary of the DfE text.' }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Three Year 11 questions we wrote, worked line by line',
      lede: 'Original questions at the level of the June papers, on three topics that sit near the grade 4 and grade 7 lines. None is a board question.',
      body: [
        { kind: 'two',
          leftH3: 'Example 1, bounds (both tiers, harder end)',
          left: [
            '<strong>Question (ours).</strong> A runner covers 400 m, measured to the nearest 10 m, in 52 seconds, measured to the nearest second. Find the upper bound of her average speed.',
            '<strong>Think first.</strong> Speed is distance divided by time. The largest speed comes from the largest distance divided by the smallest time, not the largest of both.',
            '<strong>Bounds.</strong> Distance lies between 395 m and 405 m. Time lies between 51.5 s and 52.5 s.',
            '<strong>Working.</strong> Upper bound of speed = 405 ÷ 51.5 = 7.864... m/s, about 7.86 m/s. Using 405 ÷ 52.5 gives 7.71, which is a common wrong answer.'
          ],
          rightH3: 'Example 2, similar solids (Higher)',
          right: [
            '<strong>Question (ours).</strong> Two mathematically similar jugs have heights 12 cm and 18 cm. The small jug holds 640 ml. How much does the large jug hold?',
            '<strong>Think.</strong> Lengths scale by 18 ÷ 12 = 1.5. Areas scale by 1.5², volumes by 1.5³. Capacity is a volume.',
            '<strong>Working.</strong> 1.5³ = 3.375, and 640 × 3.375 = 2160 ml.',
            '<strong>Check.</strong> Scaling by 1.5 alone would give 960 ml, which is far too small: a jug half as tall again holds more than three times as much.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Example 3, a "show that" (Higher)',
          left: [
            '<strong>Question (ours).</strong> Show that (n + 3)² &minus; (n &minus; 3)² is a multiple of 12 for every integer n.',
            '<strong>Working.</strong> (n + 3)² = n² + 6n + 9 and (n &minus; 3)² = n² &minus; 6n + 9. Subtracting: n² + 6n + 9 &minus; n² + 6n &minus; 9 = 12n.',
            '<strong>Conclusion.</strong> 12n is 12 times an integer, so the expression is always a multiple of 12. The last sentence is the answer to the question; without it the algebra has not finished the job.'
          ],
          rightH3: 'Where the marks hide',
          right: [
            'In Example 1, the mark is in choosing which bound to divide by. In Example 2, it is in cubing. In Example 3, it is in the sign of the subtracted bracket and the closing sentence.',
            'Each is a decision a student can rehearse in Year 11 until it is automatic, which is the point of past-paper practice: not the questions, but the decisions inside them.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, answers at the end).</strong> (1) A length is 8.4 cm to one decimal place; write its error interval. (2) Two similar cylinders have radii 3 cm and 6 cm; the small one has volume 50 cm³; find the volume of the large one. (3) Solve x² &minus; 5x &minus; 14 = 0. (4) Show that the sum of three consecutive integers is a multiple of 3. (5) A 600 ml drink is shared between two people in the ratio 3 : 5; how much does each get? (6) Work out 2 ⅓ × 1 ½ without a calculator, as a mixed number. <strong>Answers:</strong> (1) 8.35 &le; length &lt; 8.45; (2) 400 cm³; (3) x = 7 or x = &minus;2; (4) n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1), a multiple of 3; (5) 225 ml and 375 ml; (6) 3 ½.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'The countdown',
      h2: 'How should a Year 11 student revise for GCSE maths before May 2027?',
      lede: 'Our seven-step countdown from November 2026 to the last paper on 14 June 2027, built on the published dates. It assumes a weekly live class plus two short sessions at home.',
      body: [
        { kind: 'ol', items: [
          '<strong>November 2026: confirm three facts.</strong> The board, the tier and the paper order. Write the three June 2027 mornings on the calendar with the calculator rule for each.',
          '<strong>December 2026: one full paper, honestly timed.</strong> Ninety minutes, the correct tier, marked with the board\'s scheme. List every lost mark by topic.',
          '<strong>January to February 2027: the mock and the top five.</strong> Most schools run Year 11 mocks now. Add the mock\'s lost marks to the list and teach the five topics that appear most.',
          '<strong>March 2027: the formulae sheet and recall.</strong> Practise with the board\'s 2027 sheet open, and drill the facts that are not on it until they are automatic.',
          '<strong>April 2027: paper a week, in exam order.</strong> Follow your own board\'s order: non-calculator first for AQA and Edexcel, calculator first for OCR.',
          '<strong>May 2027: first paper, then review.</strong> Sit the paper on Friday 14 May, then spend the 13 days before 27 May on the topics it exposed, not on the ones that went well.',
          '<strong>Late May to June 2027: the last stretch.</strong> One timed paper in the 18 days before 14 June, light recall the evening before, and nothing new in the final 48 hours.'
        ] },
        { kind: 'p', mt: true, html: 'The countdown is ours and promises nothing about grades. It is a shape that fits the 2027 calendar. A student starting in March rather than November compresses the first three steps into a fortnight of diagnosis; a student near the grade 4 line spends longer on Foundation number and ratio; a student aiming at grades 8 and 9 spends the spring on proof and problem solving. For the top end, see <a class="ag-inline-link" href="/further-maths-tuition-online">further maths</a>; for tier questions, <a class="ag-inline-link" href="/gcse-maths-foundation-vs-higher">Foundation or Higher</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through Year 11',
    lede: 'Each is a fact about the student\'s papers, dated against the 2027 calendar.',
    table: { caption: 'What should be true at each point', head: ['Rung', 'By when', 'What should be true'], rows: [
      ['1. Facts confirmed', 'End of November 2026', 'Board, tier and paper order known and written down'],
      ['2. Lost-mark list', 'After the January mocks', 'A ranked list of the topics that cost most marks'],
      ['3. Sheet fluent', 'End of March 2027', 'Practising with the 2027 formulae sheet, and recall secure for the rest'],
      ['4. Exam rhythm', 'Before 14 May 2027', 'A full timed paper finished, with time to check']
    ] },
    left: { h3: 'The first rung is free', ps: [
      'It costs one conversation with the exams office, and it prevents the commonest Year 11 mistake: revising for the wrong paper.',
      'Our <a class="ag-inline-link" href="/aqa-vs-edexcel-vs-ocr-gcse-maths">board comparison</a> explains the differences.'
    ] },
    right: { h3: 'The last rung is practice', ps: [
      'Exam rhythm only comes from sitting full papers. We aim for at least four timed papers before May.',
      'Families get a short monthly note on the lost-mark list.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around Year 11 maths',
    lede: 'Grouped by the three situations we meet most in Year 11: the exam itself, a late gap, and the year after.',
    bands: [
      { num: 'I', h3: 'The June 2027 exams', sub: 'Both tiers', courses: [
        { code: 'UK / Y11A / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE Maths', blurb: 'Timed papers and mark schemes for the student\'s own board.' },
        { code: 'UK / Y11A / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quicker arithmetic for the non-calculator morning.' },
        { code: 'UK / Y11A / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Tree diagrams, histograms and cumulative frequency revised fast.' }
      ] },
      { num: 'II', h3: 'Late gaps', sub: 'Repair in weeks, not terms', courses: [
        { code: 'UK / Y11B / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'Equations and expressions, the base of most Higher marks.' },
        { code: 'UK / Y11B / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Fractions, ratio and angles for a student near grade 4.' },
        { code: 'UK / Y11B / 03', slug: 'functional-skills-maths-course', title: 'Functional Skills Maths', blurb: 'A Level 2 route some students take after 16.' }
      ] },
      { num: 'III', h3: 'The year after', sub: 'From September 2027', courses: [
        { code: 'UK / Y11C / 01', slug: 'gcse-maths-resit-course', title: 'GCSE Maths Resit', blurb: 'Planned from the August 2027 result.' },
        { code: 'UK / Y11C / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'For a strong Higher student continuing maths.' },
        { code: 'UK / Y11C / 03', slug: 'a-level-further-maths-course', title: 'A level Further Maths', blurb: 'For students who want two maths A levels.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Live Year 11 maths classes in UK time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Lessons are taught from India and timed in UK time, and they ease off during the exam weeks themselves.',
    slots: [
      { time: 'After school', l: 'The usual Year 11 slot.' },
      { time: 'Evenings', l: 'After revision sessions at school.' },
      { time: 'Weekend mornings', l: 'Matches the 9.00 am start of the real papers.' }
    ],
    cells: [
      { h3: 'Your board\'s papers', p: 'Past papers from the student\'s own board and tier, in that board\'s calculator order.' },
      { h3: 'The 2027 sheet', p: 'Practice with the board\'s published formulae sheet on the desk.' },
      { h3: 'A ranked list', p: 'Lost marks counted by topic after every paper, so revision follows evidence.' },
      { h3: 'Written methods', p: 'A method line on every question, because method marks need one.' },
      { h3: 'Free first lesson', p: 'One live lesson before anything is paid, with a first paper reviewed.' },
      { h3: 'Batch or 1-on-1', p: 'A group of 15 to 20 Year 11 students at one tier, or a teacher for one.' }
    ]
  },

  projectsH2: 'What students have made with us',
  projectsLede: 'Everyday class work, nothing assessed. <a class="ag-inline-link" href="/student-labs">Student labs</a> shows more.',
  reviewsLede: 'Parents\' words from Google, left as they wrote them.',

  fees: {
    h2: 'Fees for Year 11 maths classes',
    lede: 'Your first lesson is free. Then one monthly fee applies, smaller for a seat in a group than for 1-on-1. Nothing is signed, and we take no money until a weekly lesson time is fixed.',
    free: ['A live Year 11 lesson', 'A first paper reviewed by topic', 'Book with a phone number'],
    group: ['15 to 20 students at one tier', 'One teacher to the June papers', 'A timed paper marked most weeks', 'A monthly note on the lost-mark list'],
    one: ['A teacher for one student', 'Planned around that student\'s own papers', 'Suits late starters and grade 4 borderlines']
  },

  faq: {
    eyebrow: 'Questions about Year 11 maths',
    h2: 'What families ask about Year 11 maths',
    items: [
      { q: 'When are the GCSE maths exams in 2027?', a: 'On the mornings of Friday 14 May, Thursday 27 May and Monday 14 June 2027, according to the AQA, Pearson Edexcel and OCR timetables. Each paper lasts 1 hour 30 minutes.' },
      { q: 'Is the first GCSE maths paper in 2027 calculator or non-calculator?', a: 'It depends on the board. AQA and Pearson Edexcel sit their non-calculator Paper 1 on 14 May 2027. OCR sits a calculator paper that morning and its non-calculator paper on 27 May 2027.' },
      { q: 'What time do GCSE maths exams start?', a: 'Morning exams have a published start of 9.00 am. OCR\'s timetable notes say schools must start them no earlier than 8.30 am and by 9.30 am, and keep candidates supervised until 10.00 am.' },
      { q: 'What is the contingency day in 2027?', a: 'The awarding bodies have set aside the morning and afternoon of Wednesday 23 June 2027 in case national or significant local disruption moves an exam. Students must stay available until then.' },
      { q: 'When is GCSE results day 2027?', a: 'AQA lists 19 August 2027 as GCSE results day for the June 2027 series. Results for the November 2026 GCSE series come on 13 January 2027.' },
      { q: 'Will there be a formulae sheet in the 2027 GCSE maths exams?', a: 'Yes. Ofqual required the boards to publish the 2027 sheets by 1 September 2026 and to give students clean copies in the exam. It also applies to the November 2027 maths series.' },
      { q: 'What happens if my child does not get a grade 4 in maths?', a: 'Under the DfE condition of funding, a full-time student aged 16 to 18 with grade 3 must keep studying towards GCSE maths, with at least 100 planned hours of maths teaching a year. Students on grade 2 or below can take Functional Skills level 2 or GCSE.' },
      { q: 'Is it too late to get a tutor in Year 11?', a: 'Not if the time is used well. Even from March, there are several weeks before 14 May 2027 to find the topics costing most marks and practise them. A late start simply means less time on the plan\'s early steps.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is given in UK time.' },
      { q: 'Are you connected with AQA, Edexcel or OCR?', a: 'No. Modern Age Coders is independent of every exam board and of schools. We teach from the published specifications and timetables, use the boards\' freely available past papers, and promise no grade.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for the exam year',
    lede: 'The boards, the tiers, the papers and the year after.',
    items: [
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Our main GCSE maths page.' },
      { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'The three boards compared', p: 'Including why OCR\'s paper order differs.' },
      { href: '/gcse-maths-calculator-vs-non-calculator-papers', label: 'Calculator and non-calculator', p: 'Preparing for each kind of morning.' },
      { href: '/gcse-maths-grades-explained', label: 'Grades explained', p: 'What 4, 7 and 9 mean.' },
      { href: '/gcse-maths-resit-explained', label: 'Resits after Year 11', p: 'The post-16 rules in full.' },
      { href: '/coding-classes-in-united-kingdom', label: 'UK hub', p: 'All our UK maths and computing pages.' }
    ]
  },

  start: {
    h2: 'Book a free Year 11 maths class',
    lede: 'Give us a number and a teacher will call at a UK time that suits. Bring a recent mock or past paper; the class begins the lost-mark list from it.',
    readFirst: 'Reading before booking? The <a class="ag-inline-link" href="/courses/gcse-mathematics-mastery">GCSE Maths course page</a> has the syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a lesson.',
    note: 'WhatsApp gets the fastest answer and is free from UK phones. Our India team replies, from a +91 number.',
    formNote: 'Nothing to pay and no card. One reply with a suggested time.'
  },

  footer: {
    cols: [
      { h4: 'The exam year', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/gcse-maths-foundation-vs-higher', label: 'Foundation or Higher' },
        { href: '/gcse-maths-calculator-vs-non-calculator-papers', label: 'The two kinds of paper' },
        { href: '/gcse-maths-tutor-cost-uk', label: 'GCSE tutor costs' }
      ] },
      { h4: 'After Year 11', links: [
        { href: '/gcse-maths-resit-explained', label: 'Resits' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Year 11 maths, live online in UK time'
  },

  personalityCss: `
.ag-root.ag-gaj .ag-hero h1 { letter-spacing: -0.02em; font-weight: 730; }
.ag-root.ag-gaj .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-gaj .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-gaj .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-gaj .ag-table td:first-child { font-weight: 650; white-space: nowrap; }
.ag-root.ag-gaj .ag-steps li { margin-bottom: 8px; }
`,

  dossier: {
    curriculumAuthority: 'England, GCSE Mathematics June 2027 series. AQA 8300 key dates (14 May, 27 May, 14 June 2027, AM, 1h 30m); Pearson Edexcel GCSE Summer 2027 final timetable (1MA1 Paper 1 non-calculator 14 May, Papers 2 and 3 calculator 27 May and 14 June); OCR June 2027 final timetable (J560/01 and /04 calculator 14 May, /02 and /05 non-calculator 27 May, /03 and /06 calculator 14 June; contingency sessions Wednesday 23 June 2027; start times 9.00 am or 1.30 pm; morning start no earlier than 8.30 am and by 9.30 am; supervision until 10.00 am). AQA results days: GCSE 19 August 2027; November 2026 GCSE 13 January 2027. Ofqual: 2027 formulae sheets published by 1 September 2026, clean copies, November series included. DfE 16 to 19 condition of funding 2026 to 2027: no grade 9 to 4 by end of Year 11; grade 3 full-time must study GCSE; 100 hours minimum for maths. gov.uk: Year 11 ages 15 to 16.',
    localProject: 'Year 11 is the exam year. For 2026 to 2027 the page tables the three English boards\' June 2027 GCSE maths mornings from each board\'s own timetable, showing that OCR sits a calculator paper on 14 May 2027 while AQA and Edexcel sit non-calculator, counts the 13-day and 18-day gaps (ours), sets out OCR\'s exam-morning rules and the 23 June 2027 contingency sessions, gives results day (19 August 2027) and explains what grade 4 decides under the DfE condition of funding. Three original worked examples (an upper bound of speed, similar jugs scaled by 1.5 cubed, a show-that giving 12n), a practice set and a seven-step countdown from November 2026 follow. Lesson family: a year-group door built on the final series of a course.',
    requiredMentions: [
      'J560/01, the Foundation calculator paper',
      'Wednesday 23 June 2027',
      'candidates must start morning examinations no earlier than 8.30 am and by 9.30 am',
      'must remain under supervision until 10.00 am for morning examinations',
      'there are 13 days between the first and second mornings and 18 days between the second and third',
      'Full-time students who have a GCSE grade 3 must study towards a maths and/or English GCSE',
      'do not hold a GCSE grade 9 to 4 (a level 2 pass grade)',
      '13 January 2027 for the November 2026 GCSE series',
      'Two mathematically similar jugs have heights 12 cm and 18 cm.'
    ],
    sources: [
      { claim: 'AQA 8300 key dates: June 2027 series paper dates, morning starts, 1h 30m.', url: 'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/key-dates' },
      { claim: 'Pearson Edexcel GCSE Summer 2027 final examination timetable: 1MA1 papers and dates.', url: 'https://qualifications.pearson.com/content/dam/pdf/Support/Examination-timetables-for-UK-Edexcel-GCSE/gcse-summer-2027final.pdf' },
      { claim: 'OCR June 2027 final examination timetable, GCSE: J560 papers, contingency sessions, start and supervision rules.', url: 'https://www.ocr.org.uk/Images/758618-june-2027-final-exam-timetable-gcse-and-cambridge-nationals.pdf' },
      { claim: 'AQA results days: GCSE June 2027 on 19 August 2027; November 2026 on 13 January 2027.', url: 'https://www.aqa.org.uk/exams-administration/results-days' },
      { claim: 'Ofqual decisions on formulae sheets in GCSE maths for 2025, 2026 and 2027.', url: 'https://www.gov.uk/government/consultations/proposed-changes-to-the-assessment-of-mathematics-physics-and-combined-science-gcses-in-2025-2026-and-2027' },
      { claim: 'DfE 16 to 19 funding: maths and English condition of funding, 2026 to 2027.', url: 'https://www.gov.uk/government/publications/16-to-19-funding-maths-and-english-condition-of-funding' }
    ],
    rejectedClaims: [
      'JCQ common timetable: jcq.org.uk returned 403 to other writers, so dates come from each board\'s own timetable only.',
      'Grade boundaries for June 2027: not set until after the series, so none are given.',
      'WJEC and CCEA dates: Wales and Northern Ireland use other qualifications, outside this page.',
      'Any promised grade or improvement: declined.',
      'Past paper questions: never reproduced; all examples are ours.'
    ]
  }
};
