'use strict';
// GCSE Foundation maths tutor online (ag- maths door, England; UK and US exams cluster, row UK021).
// A tutoring door for the Foundation tier: how to secure grade 4 and push to 5. Not another tier comparison
// (that is /gcse-maths-foundation-vs-higher).
// Sources, read raw on 31 October 2026 (curl -sL; PDFs through macOS PDFKit and pypdf; raw copies in
// keyword-research-2026-09/uk-us-gap/src/gcse-foundation-maths-tutor-online/ and the AQA and Pearson folders):
//  - Ofqual, "Setting standards for new GCSEs in 2017" (gov.uk news, 12 September 2014). Verbatim: "Broadly the same
//    proportion of students will achieve a grade 4 and above as currently achieve a grade C and above"; "Grade 5
//    will be positioned in the top third of the marks for a current Grade C and bottom third of the marks for a
//    current Grade B."; "The new maths GCSE will be tiered, with grades 4 and 5 available through both tiers";
//    "it is not right to say simply that a new grade 4 will equal a current grade C."
//  - DfE, Mathematics GCSE subject content and assessment objectives (gov.uk PDF): "All students will be assessed on
//    the content identified by the standard and the underlined type"; "Only the more highly attaining students will
//    be assessed on the content identified by bold type."
//  - Pearson Edexcel 1MA1 specification, Issue 2: "Foundation tier: grades 1 to 5."; Foundation AO weightings AO1 50,
//    AO2 25, AO3 25; Foundation topic weightings Number 22 - 28%, Algebra 17 - 23%, Ratio 22 - 28%, Geometry and
//    Measures 12 - 18%, Statistics and Probability 12 - 18%; "Students are expected to continue with their study of
//    GCSE Mathematics after the age of 16 if they have not achieved the qualification at Key Stage 4."
//  - AQA Reports on the examination, June 2025: 8300/2F: "The paper was accessible to most students and the vast
//    majority had sufficient time to complete the paper."; "There were a number of questions in which students used
//    non-calculator methods instead of using a calculator, as a consequence some marks were lost due to arithmetical
//    errors being made."; struggled "Angles in similar shapes", "Finding the probability of combined events",
//    "Working with bounds"; Q10 "Only 25% of the cohort appreciated that the angle remained constant"; Q11 "Less than
//    one third were able to successfully show the two expressions were equivalent"; Q8 "A common error here was to
//    use 100 instead of 1000."; Q12 unitary method "just over 80% completing the question successfully"; Q19 tree
//    "others thought they needed to add the probabilities"; Q1 "Some gave embedded answers". 8300/3F: "Some of the
//    questions that were common with the Higher tier proved challenging for students on this tier."; "Students did
//    not always show working when instructed to do so and some used non-calculator methods, particularly in
//    percentage questions."; Q16 forming a linear equation for an equilateral triangle's perimeter "was answered very
//    poorly"; Q17 relative frequency, students "calculated 132 correctly but then were unsure how to answer".
//  - Ofqual decision, formulae sheets in 2025, 2026 and 2027 GCSE maths exams, including November.
// Our own: the grade 4 plan, the "bank, build, stretch" split, the four worked examples and the practice set.
// Spine: grade 4 on Foundation is won on the paper's common ground, not its last page. The marks a Foundation student
// loses most cheaply (calculator not used, working not shown, units, an angle wrongly scaled) are habit marks.
// Lesson family: a tier tutoring door built on the June 2025 Foundation examiner reports.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'FOUNDATION TIER', blurb: 'Grade 4 is won on the common ground of the paper. What AQA\'s June 2025 Foundation examiners saw, and a plan built from it.' },
  slug: 'gcse-foundation-maths-tutor-online',
  code: 'gf',
  accent: '#2A4A6C',
  accentRationale: 'GCSE Foundation maths: a steady navy (#2A4A6C, 8.63:1 on #FBF8F2 and 7.43:1 on the deepest paper tint), bluer than the AQA slate and clearly apart from the Higher tier green',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'GCSE Foundation maths tutor online',
  title: 'GCSE Foundation Maths Tutor Online | Secure Grade 4 and 5',
  description: 'A GCSE Foundation maths tutor online for grade 4 and 5: where June 2025 Foundation students lost marks, a plan to bank them, and live classes on any board.',
  ogDescription: 'Foundation tier GCSE Maths tops out at grade 5, and the grade 4 is won on the common ground of the paper. How we tutor for it.',
  twitterDescription: 'GCSE Foundation maths tutoring: the grade 4 and 5 targets, the June 2025 examiner findings, and a weekly plan.',
  pageName: 'GCSE Foundation Maths Tutor Online',
  webPageDescription: 'Live online tutoring for GCSE Maths Foundation tier students on AQA, Edexcel or OCR, aimed at a secure grade 4 and a push to grade 5.',
  courseDescription: 'Live online teaching for GCSE Maths Foundation tier: number, ratio, algebra, geometry and statistics at grades 1 to 5, with exam habits practised every week.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'GCSE Foundation maths tutor',
  navLinks: [
    { href: '#target', label: 'Grade 4 and 5' },
    { href: '#lost', label: 'Where marks go' },
    { href: '#plan', label: 'The plan' },
    { href: '#practice', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; GCSE Maths Foundation tier &middot; AQA, Edexcel and OCR',
  h1: 'GCSE Foundation maths tutor online',
  lede: 'A Foundation tier student does not need the hardest question on the paper to pass GCSE Maths. Grade 4 is earned on the common ground: percentages, ratio, equations, area, probability, done accurately and written down. AQA\'s examiners said as much about the June 2025 Foundation papers. Most students had time to finish, and many marks were lost not to difficult maths but to habits: working out by hand on a calculator paper, leaving out steps the question asked for, multiplying by 100 instead of 1000. This page explains what grades 4 and 5 mean, sets out where Foundation students lost marks in 2025, and gives the plan we tutor to, with four worked examples of our own.',
  secondaryCta: { href: '#lost', label: 'Where the marks go' },
  wa: 'Hello Modern Age Coders, I would like a free first class with a GCSE Foundation maths tutor.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from Ofqual\'s grading rules and AQA\'s June 2025 Foundation reports',
  spec: [
    ['Tier', 'GCSE Maths Foundation'],
    ['Grades', '1 to 5'],
    ['Target', 'A secure 4, then a 5'],
    ['Boards', 'AQA, Edexcel, OCR'],
    ['Papers', 'Three, one without a calculator'],
    ['Classes', 'Group of 15 to 20 or 1-on-1'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'GCSE Maths Foundation tier is the entry level of the GCSE Maths exam in England, awarding grades 1 to 5, and it is sat by students in Years 10 and 11 and by resit students on AQA, Pearson Edexcel or OCR. A Foundation maths tutor helps a student secure grade 4 and push for grade 5 by fixing the common-ground topics and exam habits that carry most marks. Modern Age Coders tutors Foundation tier live online, in a group of 15 to 20 or 1-on-1, through its GCSE Maths: Foundation and Higher course, on the student\'s own board. Our first class is free, and we are not connected with any exam board.',

  picks: {
    eyebrow: 'Courses for Foundation',
    h2: 'Three ways in for a Foundation student',
    lede: 'Most Foundation students join the GCSE course. Some need algebra rebuilt first. A few, especially post-16, are better served by Functional Skills.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'GF / 01', title: 'GCSE Maths: Foundation and Higher', note: 'The Foundation content on the student\'s own board, with past papers and weekly habits.' },
      { course: 'algebra-foundations-masterclass', code: 'GF / 02', title: 'Algebra Foundations', note: 'For students who lose marks forming and solving equations, the weakest area in 2025.' },
      { course: 'functional-skills-maths-course', code: 'GF / 03', title: 'Functional Skills Maths', note: 'Level 1 and Level 2, a practical alternative for some post-16 learners and adults.' }
    ]
  },

  sections: [
    {
      id: 'target', tint: 'tint', eyebrow: 'Grade 4 and 5',
      h2: 'What is the highest grade on GCSE Foundation maths, and what does grade 4 mean?',
      lede: 'The highest grade on Foundation tier is 5. Grade 4 is the line most students, schools and colleges watch, and Ofqual set it with a particular meaning.',
      body: [
        { kind: 'p', html: 'Every board awards Foundation tier grades from 1 to 5; Pearson\'s specification says simply "Foundation tier: grades 1 to 5." When Ofqual set up the 9 to 1 scale for the first awards in 2017, it fixed two anchor points that matter for Foundation students. "Broadly the same proportion of students will achieve a grade 4 and above as currently achieve a grade C and above." And "Grade 5 will be positioned in the top third of the marks for a current Grade C and bottom third of the marks for a current Grade B." Ofqual also cautioned that "it is not right to say simply that a new grade 4 will equal a current grade C": the match is at the bottom of the grade.' },
        { kind: 'table', mt: true, caption: 'What Foundation papers are made of (Pearson Edexcel 1MA1 specification, Foundation tier)', head: ['Part of the paper', 'Share of Foundation marks', 'What it asks for'], rows: [
          ['AO1: use and apply standard techniques', '50 per cent', 'Recall, notation, routine methods and multi-step tasks'],
          ['AO2: reason, interpret and communicate', '25 per cent', 'Deductions, chains of reasoning, explanations'],
          ['AO3: solve problems', '25 per cent', 'Turning a situation into maths and interpreting the answer'],
          ['Number', '22 to 28 per cent', 'The biggest topic areas on Foundation, with ratio'],
          ['Ratio, proportion and rates of change', '22 to 28 per cent', 'Percentages, value for money, scales, speed'],
          ['Algebra', '17 to 23 per cent', 'Expressions, equations, sequences, graphs']
        ] },
        { kind: 'p', html: 'Half of the Foundation marks go to standard techniques, and number and ratio together take nearly half of the content. That is the arithmetic of a grade 4. A student who is fluent and accurate on routine number, ratio and equations has most of the marks they need before the problem-solving questions begin. Ofqual\'s 2014 statement also confirmed that "grades 4 and 5 available through both tiers", so a Foundation student is not sitting a lesser exam for those grades.' },
        { kind: 'two', mt: true,
          leftH3: 'Why grade 4 carries weight after Year 11',
          left: [
            'Pearson\'s specification states that "Students are expected to continue with their study of GCSE Mathematics after the age of 16 if they have not achieved the qualification at Key Stage 4."',
            'In practice, a student who leaves Year 11 below grade 4 usually keeps studying maths in sixth form or college. Our <a class="ag-inline-link" href="/gcse-maths-resit-explained">resit page</a> sets out the post-16 rule in full.'
          ],
          rightH3: 'Is grade 5 realistic on Foundation?',
          right: [
            'Yes, for a student who is secure at grade 4 by the spring of Year 11. Grade 5 sits higher up the same paper, so the route is accuracy on the later, longer questions rather than new Higher-only content.',
            'If a student is scoring well into grade 5 on full Foundation papers, the tier question is worth reopening with the school; our <a class="ag-inline-link" href="/gcse-maths-foundation-vs-higher">Foundation vs Higher page</a> explains how.'
          ] },
        { kind: 'source', html: 'Sources: Ofqual, <a class="ag-inline-link" href="https://www.gov.uk/government/news/setting-standards-for-new-gcses-in-2017" rel="noopener" target="_blank">Setting standards for new GCSEs in 2017</a> (12 September 2014), and the Pearson Edexcel GCSE (9-1) Mathematics 1MA1 specification, Issue 2. Read on 31 October 2026.' }
      ]
    },
    {
      id: 'lost', tint: 'deep', eyebrow: 'Where marks go',
      h2: 'Where did Foundation students lose marks in the June 2025 GCSE Maths papers?',
      lede: 'AQA publishes a report on every paper. Its June 2025 Foundation calculator reports (8300/2F and 8300/3F) are unusually blunt, and most of what they describe is fixable in weeks.',
      body: [
        { kind: 'table', caption: 'From AQA\'s June 2025 Foundation reports (8300/2F and 8300/3F), summarised', head: ['What happened', 'What AQA wrote', 'Type of loss'], rows: [
          ['Calculator left unused', '"some marks were lost due to arithmetical errors being made" when students worked by hand on a calculator paper', 'Habit'],
          ['Working not shown', '"Students did not always show working when instructed to do so"', 'Habit'],
          ['Angles in similar shapes', '"Only 25% of the cohort appreciated that the angle remained constant"', 'Knowledge'],
          ['Showing expressions are equivalent', '"Less than one third were able to successfully show the two expressions were equivalent"', 'Algebra'],
          ['Unit conversions', '"A common error here was to use 100 instead of 1000."', 'Recall'],
          ['Probability trees', 'Some "thought they needed to add the probabilities" instead of multiplying', 'Knowledge'],
          ['Forming an equation from a perimeter', 'Described as "answered very poorly"', 'Algebra']
        ] },
        { kind: 'p', html: 'Read the right-hand column. Of the seven losses, two are pure habit and one is a single fact (there are 1000 metres in a kilometre, 1000 grams in a kilogram). None of those three needs new mathematics. They need practice in the way the paper is sat. The 2F report also recorded that "the vast majority had sufficient time to complete the paper", so speed is rarely the problem. Accuracy and layout are.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Higher-crossover questions', p: 'The 3F report noted that "Some of the questions that were common with the Higher tier proved challenging for students on this tier." These are the grade 4 and 5 questions, and they reward secure algebra.' },
          { h3: 'Good news on routine work', p: 'On a unitary method question, AQA recorded "just over 80% completing the question successfully". Foundation students can do this mathematics; the gaps are narrow and named.' },
          { h3: 'Answer what was asked', p: 'On a relative frequency question, many students "calculated 132 correctly but then were unsure how to answer". A correct number is not the answer if the question wants a fraction or decimal.' }
        ] },
        { kind: 'source', html: 'Source: AQA, GCSE Mathematics 8300/2F and 8300/3F, Reports on the examination, June 2025, from the <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/assessment-resources" rel="noopener" target="_blank">AQA 8300 assessment resources</a>. The findings come from AQA papers, but the topics are common to every board\'s Foundation tier.' }
      ]
    },
    {
      id: 'plan', tint: '', eyebrow: 'The plan',
      h2: 'How do you get a grade 4 in GCSE Foundation maths?',
      lede: 'Bank the routine marks, build the common-ground topics, and only then stretch to the last questions. The split and the steps are our own; the evidence for them is above.',
      body: [
        { kind: 'table', caption: 'Our "bank, build, stretch" split for a Foundation student', head: ['Stage', 'What it covers', 'How we practise it'], rows: [
          ['Bank', 'Habit and recall marks: calculator use on Papers 2 and 3, units, working on every line, answering in the form asked', 'A five-point checklist on every question for six weeks, until it is automatic'],
          ['Build', 'The common ground: percentages, ratio, equations, area and perimeter, angles, probability', 'Short topic sets, then the same topic inside a mixed paper'],
          ['Stretch', 'The longer questions near the end, including those shared with Higher', 'One crossover question per lesson, worked slowly and then retried a week later']
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Find the starting grade.</strong> One full past paper on the student\'s board, timed, marked against the scheme. That is the honest baseline.',
          '<strong>Sort every lost mark.</strong> Habit, recall, or understanding. Habit and recall losses are fixed first, because they are fastest.',
          '<strong>Put a calculator in the hand.</strong> On Papers 2 and 3, every calculation that can go into a calculator does. AQA\'s 2025 reports show this alone saves marks.',
          '<strong>Learn the short recall list.</strong> Metric conversions, angle facts, area formulae, fraction, decimal and percentage equivalents. Five minutes a day.',
          '<strong>Build the common ground.</strong> One topic a week from number, ratio and algebra, tested in a mixed paper the week after.',
          '<strong>Add one stretch question a lesson.</strong> Crossover questions are where grade 4 becomes grade 5.',
          '<strong>Full papers from February of Year 11.</strong> Timed, marked, logged, so the summer papers feel ordinary.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Group or 1-on-1 for Foundation?',
          left: [
            'A group of 15 to 20 Foundation students suits a learner who is close to grade 4 and needs steady practice and the push of a class.',
            '1-on-1 suits a student well below grade 4, a student who freezes in class, or a resit student with a few months and a very specific list of gaps.'
          ],
          rightH3: 'What a tutor cannot do',
          right: [
            'Promise a grade. We tell families what the papers show, month by month, and what would move the result.',
            'Replace the practice between lessons. Twenty minutes a day on the recall list does more than an extra hour once a week.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Four Foundation questions we wrote, worked step by step',
      lede: 'Our own questions on the topics AQA\'s June 2025 Foundation reports flagged. They are not taken from any board\'s papers.',
      body: [
        { kind: 'two',
          leftH3: '1. Similar shapes: the angle does not change',
          left: [
            '<strong>Question (ours).</strong> Triangle Q is an enlargement of triangle P with scale factor 3. In P, one angle is 40° and the side opposite it is 5 cm. Find the matching angle and side in Q.',
            '<strong>Side.</strong> Lengths scale: 5 × 3 = 15 cm.',
            '<strong>Angle.</strong> Angles do not scale. An enlargement keeps the shape, so the angle is still 40°.',
            '<strong>Check.</strong> If angles tripled, a triangle\'s angles would add to 540°, which is impossible. That one-line check is worth teaching.'
          ],
          rightH3: '2. Forming an equation from a perimeter',
          right: [
            '<strong>Question (ours).</strong> An equilateral triangle has sides 3x + 2, 5x &minus; 6 and another side. Find x and the perimeter.',
            '<strong>Use the fact.</strong> Equilateral means all sides are equal, so 3x + 2 = 5x &minus; 6.',
            '<strong>Solve.</strong> 2 + 6 = 5x &minus; 3x, so 8 = 2x and x = 4. Each side is 3 × 4 + 2 = 14 cm.',
            '<strong>Perimeter.</strong> 3 × 14 = 42 cm. The equation comes from the shape\'s property, not from adding the expressions together.'
          ] },
        { kind: 'two', mt: true,
          leftH3: '3. A probability tree: multiply along, add between',
          left: [
            '<strong>Question (ours).</strong> The probability that a bus is late is 0.2, and independently that a train is late is 0.3. Find the probability that both are late, and that exactly one is late.',
            '<strong>Both late.</strong> Along one branch, multiply: 0.2 × 0.3 = 0.06.',
            '<strong>Exactly one.</strong> Bus late and train on time: 0.2 × 0.7 = 0.14. Bus on time and train late: 0.8 × 0.3 = 0.24. Two separate outcomes, so add: 0.14 + 0.24 = 0.38.',
            '<strong>Rule.</strong> Multiply along a path; add different paths. That sentence fixes the error AQA described.'
          ],
          rightH3: '4. A best buy, compared fairly',
          right: [
            '<strong>Question (ours).</strong> Cereal A is 750 g for 3.15 (in pounds). Cereal B is 500 g for 2.20. Which is better value?',
            '<strong>Same quantity.</strong> Price per 100 g. A: 3.15 ÷ 7.5 = 0.42. B: 2.20 ÷ 5 = 0.44.',
            '<strong>Answer with a reason.</strong> A is better value, because 100 g of A costs 42p and 100 g of B costs 44p.',
            '<strong>Habit.</strong> The calculator does the division, and the answer is written as a sentence with both figures in it.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, answers below).</strong> (1) Convert 3.4 km to metres. (2) Increase 60 by 35 per cent. (3) Share 72 in the ratio 5 : 3. (4) Solve 4x &minus; 7 = 2x + 9. (5) A spinner lands on red with probability 0.35; it is spun 200 times; how many reds would you expect? (6) A square has the same perimeter as a rectangle measuring 9 cm by 5 cm; find the side of the square. <strong>Answers:</strong> (1) 3400 m; (2) 81; (3) 45 and 27; (4) x = 8; (5) 70; (6) the perimeter is 28 cm, so the side is 7 cm.' }
      ]
    },
    {
      id: 'checklist', tint: '', eyebrow: 'Exam habits',
      h2: 'The five-point checklist we use on every Foundation question',
      lede: 'Our own checklist, written from the losses AQA described. Students tick it on practice papers until they stop needing it.',
      body: [
        { kind: 'ol', items: [
          '<strong>Is a calculator allowed?</strong> If so, use it for every calculation, including the easy-looking ones.',
          '<strong>Have I written the working?</strong> One step per line, especially where the question says "show".',
          '<strong>Are the units right?</strong> Metres or kilometres, grams or kilograms, pence or pounds, and 1000 not 100.',
          '<strong>Is the answer in the form asked for?</strong> A fraction, a decimal, a percentage, a sentence, a ratio in its simplest form.',
          '<strong>Does it make sense?</strong> A probability between 0 and 1, angles that add up properly, a price that is not absurd.'
        ] },
        { kind: 'p', mt: true, html: 'Formulae help too. Ofqual requires a formulae sheet in the 2025, 2026 and 2027 GCSE Maths exams, on every board and in the November series. It lists formulae students would otherwise have to memorise, so Foundation students should practise with a copy of their own board\'s sheet beside them, and know where each formula is on it before the exam.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four steps from grade 3 to grade 5',
    lede: 'Each step is shown on full Foundation papers from the student\'s own board.',
    table: { caption: 'Where a Foundation student should be, and when', head: ['Step', 'Usually by', 'What the papers should show'], rows: [
      ['1. Habits banked', 'Six weeks in', 'Calculator used, working shown, units right on almost every question'],
      ['2. Recall secure', 'Two months in', 'Conversions, angle facts and equivalences correct without thinking'],
      ['3. Grade 4 on full papers', 'Spring of Year 11', 'Grade 4 marks reached on two or three papers in a row'],
      ['4. Grade 5 within reach', 'Before the summer series', 'Crossover questions started and partly or fully solved']
    ] },
    left: { h3: 'Step one is the fastest', ps: [
      'Habit marks come back in weeks, and the student feels the difference in the next mock.',
      'Younger students still at Key Stage 3 may be better served by our <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3 maths page</a>.'
    ] },
    right: { h3: 'Step four is earned', ps: [
      'We only call grade 5 realistic when the full papers say so.',
      'Lessons are lighter in exam weeks.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catalogue',
    h2: 'Nine courses for students on Foundation',
    lede: 'From number gaps to life after the GCSE.',
    bands: [
      { num: 'I', h3: 'The GCSE', sub: 'Foundation tier', courses: [
        { code: 'UK / GF1 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE Maths', blurb: 'Foundation content on AQA, Edexcel or OCR.' },
        { code: 'UK / GF1 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'Forming and solving equations, step by step.' },
        { code: 'UK / GF1 / 03', slug: 'gcse-maths-resit-course', title: 'GCSE Maths Resit', blurb: 'For students retaking after Year 11.' }
      ] },
      { num: 'II', h3: 'Number first', sub: 'Gaps from earlier years', courses: [
        { code: 'UK / GF2 / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Fractions, negatives and place value made secure.' },
        { code: 'UK / GF2 / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for younger siblings and early starters.' },
        { code: 'UK / GF2 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Trees, relative frequency and averages.' }
      ] },
      { num: 'III', h3: 'Other routes', sub: 'Post-16 and beyond', courses: [
        { code: 'UK / GF3 / 01', slug: 'functional-skills-maths-course', title: 'Functional Skills Maths', blurb: 'Level 1 and Level 2 for work and college.' },
        { code: 'UK / GF3 / 02', slug: 'complete-business-finance-mathematics-mastery', title: 'Business and finance maths', blurb: 'Percentages and interest in real contexts.' },
        { code: 'UK / GF3 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Number practice through short Python programs.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lessons',
    h2: 'How Foundation tutoring runs',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. The teachers work from India and every slot is in UK time.',
    slots: [
      { time: 'After school', l: 'The common slot for Years 10 and 11.' },
      { time: 'Evening', l: 'For resit students with college or work.' },
      { time: 'Weekend morning', l: 'For a full timed paper.' }
    ],
    cells: [
      { h3: 'Your own board', p: 'AQA, Edexcel or OCR past papers at Foundation tier, never a generic mix.' },
      { h3: 'Checklist on every question', p: 'Calculator, working, units, form, sense, ticked until automatic.' },
      { h3: 'Common ground first', p: 'Number, ratio and equations before the longer problem questions.' },
      { h3: 'Monthly honesty', p: 'A short note to parents on what the papers show and what to fix next.' },
      { h3: 'Free first class', p: 'One live class to see the student work, with nothing to pay.' },
      { h3: 'Two formats', p: 'A Foundation group of 15 to 20, or 1-on-1 at a time that suits.' }
    ]
  },

  projectsH2: 'What students made in our classes',
  projectsLede: 'A few things built in everyday lessons, unmarked. See <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Parents on Google, in their own words.',

  fees: {
    h2: 'Fees for Foundation maths tutoring',
    lede: 'Start with a free class. Then a monthly fee, lower in a group than 1-on-1, billed only after a course and a weekly time are agreed, and with no contract.',
    free: ['A live class at Foundation tier', 'A baseline from a real paper', 'A phone number is all it takes'],
    group: ['15 to 20 Foundation students', 'One teacher through to the summer', 'A past paper most weeks', 'A monthly note for parents'],
    one: ['One teacher for one student', 'Built around the student\'s own gaps', 'Good for resits and big gaps']
  },

  faq: {
    eyebrow: 'Foundation questions',
    h2: 'What families ask about Foundation maths tutoring',
    items: [
      { q: 'What is the highest grade on GCSE Foundation maths?', a: 'Grade 5. Foundation tier awards grades 1 to 5 on every board, and Ofqual set the scale so that grades 4 and 5 are available on both tiers.' },
      { q: 'Is a grade 4 the same as a C?', a: 'Not exactly. Ofqual set grade 4 so that broadly the same proportion of students get a 4 or above as used to get a C or above, but it warned against saying a 4 simply equals a C.' },
      { q: 'How many marks do you need for a grade 4 on Foundation?', a: 'It changes every year and by board, because grade boundaries are set after each series is marked. The safe approach is to aim for a comfortable margin above recent boundaries on full past papers.' },
      { q: 'What topics come up most on Foundation papers?', a: 'Number and ratio, proportion and rates of change are the biggest areas: Pearson gives each 22 to 28 per cent of Foundation marks. Algebra takes 17 to 23 per cent, and geometry and statistics the rest.' },
      { q: 'Why do Foundation students lose easy marks?', a: 'AQA\'s June 2025 reports name habits: working by hand on calculator papers, not showing working when asked, unit slips such as using 100 instead of 1000, and answering in the wrong form.' },
      { q: 'Can my child get a grade 5 on Foundation?', a: 'Yes. Grade 5 is the top of the Foundation scale, reached by accuracy on the later questions, including ones shared with Higher. A student securely in grade 5 might discuss the tier with their school.' },
      { q: 'Is there a formula sheet for Foundation maths?', a: 'Yes. Ofqual requires a formulae sheet in GCSE Maths in 2025, 2026 and 2027, at both tiers and in the November series. Practise with your own board\'s sheet.' },
      { q: 'Do you tutor AQA, Edexcel and OCR Foundation?', a: 'Yes. The Foundation content is the same on every board, and we practise with the past papers of the board your school uses.' },
      { q: 'When are lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are UK time.' },
      { q: 'Can you guarantee a grade 4?', a: 'No, and nobody honestly can. We show families what each full paper says, month by month, and we are not connected with any exam board.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More help around Foundation maths',
    lede: 'The tier decision, the papers, the grades and what comes after.',
    items: [
      { href: '/gcse-maths-foundation-vs-higher', label: 'Foundation vs Higher', p: 'How the tier is decided, and the risks either way.' },
      { href: '/gcse-maths-grades-explained', label: 'GCSE maths grades explained', p: 'Grades 1 to 9 and where 4 and 5 sit.' },
      { href: '/gcse-maths-calculator-vs-non-calculator-papers', label: 'Calculator and non-calculator papers', p: 'Getting the most from each kind of paper.' },
      { href: '/gcse-maths-resit-explained', label: 'GCSE maths resits', p: 'What happens after a result below grade 4.' },
      { href: '/functional-skills-maths-vs-gcse-maths', label: 'Functional Skills or GCSE', p: 'Two routes to a Level 2 maths qualification.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The hub for all our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free Foundation maths class',
    lede: 'Leave a number and we will phone at a UK time you pick. The class uses Foundation questions from your board and ends with a first view of where the marks are.',
    readFirst: 'Rather read first? The <a class="ag-inline-link" href="/courses/gcse-mathematics-mastery">GCSE Maths course</a> lists every topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows what a class is like.',
    note: 'WhatsApp is the fastest way to reach us and free from a UK phone. Replies come from our team in India, on a +91 number.',
    formNote: 'No payment details and no commitment. You get one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'GCSE Maths', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'The three boards' },
        { href: '/gcse-maths-tutor-cost-uk', label: 'Tutor costs in the UK' },
        { href: '/gcse-maths-resit-explained', label: 'Resits' }
      ] },
      { h4: 'Other routes', links: [
        { href: '/functional-skills-maths-vs-gcse-maths', label: 'Functional Skills' },
        { href: '/ks3-maths-tuition-online', label: 'KS3 maths' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Foundation tier maths, tutored live in UK time'
  },

  personalityCss: `
.ag-root.ag-gf .ag-hero h1 { letter-spacing: -0.015em; font-weight: 690; }
.ag-root.ag-gf .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-gf .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-gf .ag-table caption { text-align: left; font-weight: 620; }
.ag-root.ag-gf .ag-table td:last-child { font-weight: 600; }
.ag-root.ag-gf .ag-steps li { margin-bottom: 8px; line-height: 1.55; }
`,

  dossier: {
    curriculumAuthority: 'England, GCSE Mathematics Foundation tier (all boards), grades 1 to 5. Ofqual, Setting standards for new GCSEs in 2017 (12 September 2014): grade 4 and above broadly the same proportion as C and above; grade 5 in the top third of C and bottom third of B marks; grades 4 and 5 available through both tiers; grade 4 not simply equal to C. DfE subject content: standard, underlined and bold type. Pearson Edexcel 1MA1 Issue 2: Foundation grades 1 to 5; Foundation AO1 50, AO2 25, AO3 25; Foundation topic ranges; continuing maths after 16 without the qualification. AQA June 2025 reports on 8300/2F and 3F: time sufficient; non-calculator methods on calculator papers; working not shown when instructed; similar shapes angle (25%); showing equivalence (under a third); 100 instead of 1000; adding probabilities on a tree; equilateral perimeter equation answered very poorly; relative frequency; Higher-crossover questions challenging. Ofqual formulae sheets 2025 to 2027.',
    localProject: 'Grade 4 is won on the common ground. A Foundation tutoring door: what grades 4 and 5 mean under Ofqual\'s 2014 anchors, how Foundation marks split by objective and topic in Pearson\'s specification, and a table of seven losses from AQA\'s June 2025 Foundation calculator reports sorted into habit, recall and understanding. It then gives our own "bank, build, stretch" plan with seven numbered steps, a group or 1-on-1 guide, four original worked examples (similar-shape angles, an equilateral perimeter equation, a probability tree and a best buy) with an original practice set, and our five-point checklist. Lesson family: a tier tutoring door built from examiner reports, distinct from the tier comparison.',
    requiredMentions: [
      'Grade 5 will be positioned in the top third of the marks for a current Grade C and bottom third of the marks for a current Grade B.',
      'it is not right to say simply that a new grade 4 will equal a current grade C',
      'Only 25% of the cohort appreciated that the angle remained constant',
      'Less than one third were able to successfully show the two expressions were equivalent',
      'A common error here was to use 100 instead of 1000.',
      'Some of the questions that were common with the Higher tier proved challenging for students on this tier.',
      'just over 80% completing the question successfully',
      'bank, build, stretch',
      'calculated 132 correctly but then were unsure how to answer'
    ],
    sources: [
      { claim: 'Ofqual, Setting standards for new GCSEs in 2017: grade 4 and grade 5 anchors, both tiers, grade 4 not equal to C.', url: 'https://www.gov.uk/government/news/setting-standards-for-new-gcses-in-2017' },
      { claim: 'AQA Reports on the examination, June 2025, 8300/2F and 8300/3F: Foundation findings.', url: 'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/assessment-resources' },
      { claim: 'Pearson Edexcel 1MA1 specification, Issue 2: Foundation grades, AO and topic weightings, post-16 expectation.', url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/mathematics/2015/specification-and-sample-assesment/gcse-maths-2015-specification.pdf' },
      { claim: 'DfE, Mathematics GCSE subject content and assessment objectives: standard, underlined and bold content.', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' },
      { claim: 'Ofqual decision: formulae sheets in GCSE maths 2025, 2026 and 2027, including November.', url: 'https://www.gov.uk/government/consultations/proposed-changes-to-the-assessment-of-mathematics-physics-and-combined-science-gcses-in-2025-2026-and-2027' }
    ],
    rejectedClaims: [
      'Grade boundaries for Foundation grade 4 or 5: they vary by board and series and were not read at a primary source, so no mark figure is quoted.',
      'The DfE post-16 condition of funding wording: not re-read for this page; the Pearson specification sentence is quoted instead and the resit page is linked.',
      'Any claim that most of our students reach grade 4: we cannot show it, so it is not made.',
      'Any promised grade: declined.'
    ]
  }
};
