'use strict';
// TACHS math prep (ag- exam door; UK and US exams cluster, row US054). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from the
// official TACHS site (tachsinfo.com, run by Riverside Insights for the three participating dioceses); the site is a
// JavaScript app, so its public content was read from its own content API (tachsinfo.com:8443/api/...) and its PDFs.
// Copies in keyword-research-2026-09/uk-us-gap/src/tachs-math-prep/:
//  - api/RegistrationAccordion: eligibility "enrolled in eighth grade during the 2026 to 2027 school year" for Fall 2027
//    admission in the Archdiocese of New York, Diocese of Brooklyn/Queens, Diocese of Rockville Centre; registration
//    "opens on August 24, 2026" and "closes on October 28, 2026"; internet or telephone registration. (Fee not printed.)
//  - api/FaqAccordion: Archdiocese of New York testing "Friday, November 6, 2026"; Brooklyn/Queens and Rockville Centre
//    "Saturday, November 7, 2026"; sessions at 8:30 AM or 10:00 AM; "approximately 2 hours and 10 minutes"; "online,
//    remote, at-home test", used "since 2020"; extended time "(time and a half)" the only accommodation, requests by
//    October 2, 2026; Mathematics strands "number sense and operations, algebraic patterns and connections, data
//    analysis/probability/statistics, geometry, and measurement"; Ability "spatial and figural content"; "New in 2026: A
//    basic 4-function calculator will be provided within the testing platform"; personal calculators disqualify;
//    "Official TACHS practice tests are not published or provided"; Riverside and the dioceses "does not encourage or
//    endorse coaching or tutoring programs"; prep materials "not published, supported, or endorsed by TACHS"; "Students
//    who perform well in their elementary school coursework can reasonably expect to perform well"; Home Report "January
//    22, 2027"; selection by "A combination of TACHS results, the Applicant Record from the student's school, and state
//    testing results"; reports to three high school choices only.
//  - Student Handbook 2026 PDF (pdf/HandBook.pdf): "The TACHS measures academic achievement in reading, written
//    expression, and mathematics, along with general reasoning skills."; "A student may take the TACHS examination only
//    once."; "No reviewing, rescoring, or retesting will be done."; Local and National percentile ranks; "Four answers
//    are given for each question"; "You will not be penalized for incorrect answers"; "After you submit your answers for
//    a subtest, you may not go back to it."; scores to choices "on or before December 7, 2026"; make-up info November
//    11 and 18, 2026; Applicant Records due December 11, 2026; sample questions in the back (not reproduced).
//  - Parent Guide 2026 PDF (pdf/ParentGuide.pdf): "There are 6 timed subtests"; 5-minute breaks after the first three,
//    one-minute pauses after 4 and 5; scratch paper only for Reading, Written Expression and Mathematics; "skip and mark
//    items"; "It is not uncommon for a student to run out of time"; extended time "about ~3 hours, 15 minutes"; webcam.
// Our own material, labelled on the page: the calculator-judgment table, three worked examples (23 not 35; about 60
// for 19.8 x 3.1, exact 61.38; the 3n + 1 tile pattern, 61), twelve practice items checked in Python (5/8, 4,800, 49, 11,
// 3/8, 12, 23, 30, 165, 44, 12, 25), the grade 7 year plan. Lesson family: estimation and calculator judgment.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST PREP', blurb: 'TACHS math for New York eighth graders: the five math strands, the new in-test calculator, the November 2026 dates and twelve original practice items.' },
  slug: 'tachs-math-prep',
  code: 'tax',
  accent: '#5E6082',
  accentRationale: 'TACHS math prep: a slate blue-grey #5E6082 from the US allocation table, 5.71:1 on paper #FBF8F2, distinct from the SHSAT olive and the HSPT green',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'TACHS math prep',
  title: 'TACHS Math Prep and Tutoring: 2026 Test, Calculator',
  description: 'TACHS math for New York eighth graders: the five math strands, the new 2026 in-test calculator, the November 2026 dates and twelve original practice items.',
  ogDescription: 'The TACHS is an online, at-home test for New York Catholic high school admission. What its organizers publish about the math, the new calculator rule, and how to build the skills honestly.',
  twitterDescription: 'TACHS math 2026: strands, calculator and dates from the official site.',
  pageName: 'TACHS Math Prep',
  webPageDescription: 'A guide for New York families to the math part of the Test for Admission into Catholic High Schools (TACHS) in 2026, from the official TACHS site, Student Handbook and Parent Guide, with worked examples and original practice items.',
  courseDescription: 'Live online math classes for New York students in grades 7 and 8 sitting the TACHS, built on school math strands and estimation, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'TACHS math prep',
  navLinks: [
    { href: '#test', label: 'The test' },
    { href: '#math', label: 'Math strands' },
    { href: '#calculator', label: 'Calculator' },
    { href: '#dates', label: 'Dates' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New York &middot; Grade 8 &middot; The TACHS, November 2026',
  h1: 'TACHS math prep and tutoring',
  lede: 'The TACHS, the Test for Admission into Catholic High Schools, is taken by eighth graders applying to Catholic high schools in the Archdiocese of New York, the Diocese of Brooklyn/Queens and the Diocese of Rockville Centre. It is an online test taken at home, and for 2026 it adds a basic calculator inside the platform. This page sets out what the official TACHS site says about the math, read on 31 October 2026, including its candid view of tutoring, and then teaches the five math strands with worked examples and practice items of our own.',
  secondaryCta: { href: '#calculator', label: 'The new calculator rule' },
  wa: 'Hello Modern Age Coders, my child in New York is in grade 7 or 8 and will sit the TACHS. Could we book a free first math class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; school math made strong, not test tricks',
  spec: [
    ['Who sits it', 'Eighth graders, once only'],
    ['Dioceses', 'New York, Brooklyn/Queens, Rockville Centre'],
    ['Format', 'Online, at home, proctored'],
    ['Length', 'About 2 hours 10 minutes'],
    ['Subtests', '6 timed subtests'],
    ['Calculator', 'Basic 4-function, in the platform'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The TACHS (Test for Admission into Catholic High Schools) is given by Riverside Insights for three New York dioceses to eighth graders applying for ninth grade. It tests reading, written expression, mathematics and reasoning, online at home, in about 2 hours 10 minutes. Modern Age Coders teaches the underlying math live online, in a batch or 1-on-1.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses that build TACHS math',
    lede: 'School math done thoroughly, which is what the TACHS organizers themselves say counts.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'TAX / 01', title: 'Middle school mathematics', note: 'Grades 6 to 8. All five TACHS math strands in depth.' },
      { course: 'algebra-foundations-masterclass', code: 'TAX / 02', title: 'Algebra foundations', note: 'Patterns, expressions and equations, the algebraic strand.' },
      { course: 'vedic-maths-course-speed-calculation-mastery', code: 'TAX / 03', title: 'Speed calculation', note: 'Number sense and estimation that keep a calculator honest.' }
    ]
  },

  sections: [
    {
      id: 'test', tint: 'tint', eyebrow: 'The test',
      h2: 'What is the TACHS, and what does it test?',
      lede: 'The TACHS tests academic achievement in reading, written expression and mathematics, plus general reasoning. Its results go to three high schools the student chooses, together with school records.',
      body: [
        { kind: 'table', caption: 'TACHS content areas (official TACHS site and 2026 Student Handbook, read 31 October 2026)', head: ['Area', 'What the organizers say it covers'], rows: [
          ['Reading', 'Factual, interpretative and evaluative comprehension of informational and literary texts'],
          ['Written Expression', 'Standard English: organization, sentence structure, clarity, and finding the line with an error'],
          ['Mathematics', 'Number sense and operations, algebraic patterns and connections, data analysis, probability and statistics, geometry, and measurement'],
          ['Ability', 'Learned reasoning with somewhat novel questions using spatial and figural content']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How the day is built',
          left: [
            'The 2026 Parent Guide says "There are 6 timed subtests". After each of the first three a student may take a 5-minute break; after the fourth and fifth there is only a one-minute pause.',
            'Testing time is about 2 hours 10 minutes for most students, or about 3 hours 15 minutes with approved extended time, which is the only accommodation offered. Each question has four answer choices.'
          ],
          rightH3: 'What is not published',
          right: [
            'The organizers do not publish how many math questions there are or how long the math subtest lasts, and they say they cannot give tutors or families more detail than the site and official materials.',
            'So any prep course claiming to mirror the exact TACHS format is guessing. The site warns that outside practice tests may not match "the number of questions, exam format, and allotted testing time".'
          ] },
        { kind: 'source', html: 'Sources: the official <a class="ag-inline-link" href="https://tachsinfo.com/" rel="noopener" target="_blank">TACHS site</a> (exam FAQs) with its 2026 Student Handbook and 2026 Parent Guide, read 31 October 2026. Modern Age Coders is not connected with Riverside Insights, TACHS or any diocese or school.' }
      ]
    },
    {
      id: 'honest', tint: 'deep', eyebrow: 'A straight answer',
      h2: 'Do TACHS tutoring and prep courses help?',
      lede: 'The organizers say plainly that they do not encourage or endorse coaching for the TACHS. Their view is that students who do well in school math can expect to do well on the test, and we build our classes around that.',
      body: [
        { kind: 'p', text: 'On its practice-test FAQ the official site states that Riverside Insights, together with the Archdiocese of New York, the Diocese of Brooklyn/Queens and the Diocese of Rockville Centre, "does not encourage or endorse coaching or tutoring programs for the TACHS Examination." It adds that "Official TACHS practice tests are not published or provided" and that outside practice tests "are not fully representative of the actual TACHS Examination".' },
        { kind: 'p', text: 'We think families deserve to read that before paying anyone, including us. So we do not sell TACHS question drills or claim inside knowledge of the test. What we teach is the middle school math the organizers list, the estimation habits that make the new calculator safe to use, and the pacing that keeps a student moving across a timed subtest. Those skills serve a student in ninth grade math too, whatever the result.' },
        { kind: 'table', mt: true, caption: 'What we do and do not offer for the TACHS (our policy)', head: ['We do', 'We do not'], rows: [
          ['Teach the five math strands the organizers name', 'Sell copies or imitations of TACHS items'],
          ['Use the free sample questions in the Student Handbook as a format check only', 'Reproduce the handbook&rsquo;s sample questions'],
          ['Build estimation and calculator judgment for 2026', 'Claim to know the number or timing of math questions'],
          ['Report progress against school grade-level math', 'Predict a percentile, an acceptance or a scholarship']
        ] },
        { kind: 'source', html: 'Source: TACHS site FAQ, &ldquo;Where can I find a practice test?&rdquo; and &ldquo;What is the content of the exam?&rdquo;, read 31 October 2026.' }
      ]
    },
    {
      id: 'math', tint: 'tint', eyebrow: 'Math strands',
      h2: 'What math is on the TACHS?',
      lede: 'The Mathematics subtest draws on five strands: number sense and operations; algebraic patterns and connections; data analysis, probability and statistics; geometry; and measurement. All five sit inside a normal grade 6 to 8 course.',
      body: [
        { kind: 'table', caption: 'The five TACHS math strands and what they usually mean at grade 8 (strand names from the TACHS Student Handbook; the middle column is ours)', head: ['Strand', 'Typical grade 8 skills (our reading)', 'One habit we drill'], rows: [
          ['Number sense and operations', 'Fractions, decimals, percents, integers, rounding, order of operations', 'Estimate before computing'],
          ['Algebraic patterns and connections', 'Number and shape patterns, expressions, one-step and two-step equations', 'Write the rule as a formula in n'],
          ['Data analysis, probability and statistics', 'Mean, median, range, reading tables and graphs, simple probability', 'Sort the data first'],
          ['Geometry', 'Perimeter, area, angles, properties of shapes', 'Label every known length'],
          ['Measurement', 'Units of length, time, weight and capacity, and converting between them', 'Write units on every line']
        ] },
        { kind: 'p', mt: true, html: '<b>Worked example 1, a pattern turned into a rule (ours).</b> A row of tile squares uses 4 tiles for one square, 7 for two joined squares and 10 for three. How many tiles for 20 joined squares? Each new square adds 3 tiles, so the count is 3n + 1, where n is the number of squares. Check: n = 1 gives 4. For n = 20 the answer is 3 x 20 + 1 = 61 tiles. A student who extends the list 4, 7, 10, 13 by hand gets there too, but the rule takes ten seconds and cannot drift.' },
        { kind: 'two', mt: true,
          leftH3: 'Patterns are the strand to watch',
          left: [
            '&ldquo;Algebraic patterns and connections&rdquo; can get less direct attention in grade 8 classes than equations do. Some students can solve 2n + 9 = 31 but freeze when asked for the 12th term of a pattern.',
            'We teach one move for both: find what changes each step, write it as a number times n, then fix the starting value.'
          ],
          rightH3: 'Measurement needs facts',
          right: [
            'Converting 2.75 hours to minutes or 3 feet 8 inches to inches is easy only when the unit facts are automatic: 60 minutes, 12 inches, 3 feet, 16 ounces, 4 quarts.',
            'We test those facts in the first minutes of class until a student never has to pause on them.'
          ] }
      ]
    },
    {
      id: 'calculator', tint: 'deep', eyebrow: 'New in 2026',
      h2: 'Can you use a calculator on the TACHS?',
      lede: 'Yes, from 2026, but only the basic 4-function calculator built into the testing platform. A student found using their own calculator is disqualified.',
      body: [
        { kind: 'p', text: 'The official FAQ says: "New in 2026: A basic 4-function calculator will be provided within the testing platform for use on applicable questions." It opens from the calculator icon in the Proctorio toolbar. The site points families to a free basic calculator practice page so students can get used to it before test day.' },
        { kind: 'table', mt: true, caption: 'When to reach for a basic calculator, and when not to (our classroom rule of thumb)', head: ['Situation', 'Our advice', 'Why'], rows: [
          ['Multiplying decimals such as 19.8 x 3.1', 'Estimate first (20 x 3 = 60), then use the calculator', 'The estimate catches a mistyped decimal point'],
          ['A mixed expression such as 3 + 4 x 5', 'Do the multiplication first, then add', 'Many basic calculators work left to right and would show 35'],
          ['Fractions such as 3/5 against 5/8', 'Convert by division, or cross-multiply by hand', 'A 4-function calculator has no fraction key'],
          ['Easy facts such as 25 percent of 48', 'Mental math: a quarter of 48 is 12', 'Opening the calculator takes longer than the answer'],
          ['Choosing between four answers', 'Estimate and eliminate before computing', 'Two choices are often far from the estimate']
        ] },
        { kind: 'p', mt: true, html: '<b>Worked example 2, order of operations (ours).</b> Evaluate 3 + 4 x 5. The correct value is 23: multiply 4 x 5 = 20, then add 3. On a calculator that applies each key as it is pressed, typing 3 + 4 x 5 in that order gives 7 x 5 = 35. The fix is to enter 4 x 5 first and add 3 afterwards. Try this on the practice calculator before test day to see how it behaves.' },
        { kind: 'p', html: '<b>Worked example 3, estimation as a check (ours).</b> A rectangle is 19.8 cm by 3.1 cm. What is its area? Estimate first: about 20 x 3 = 60 square centimeters. The exact product is 61.38. If the calculator shows 6.138 or 613.8, a decimal point slipped, and the estimate exposes it at once. Among four answer choices, only one is likely to sit near 60.' },
        { kind: 'source', html: 'Sources: TACHS site FAQ &ldquo;Are students allowed to use calculators?&rdquo; and the 2026 Parent Guide, page on the in-exam calculator, read 31 October 2026. Our advice table and examples are our own.' }
      ]
    },
    {
      id: 'dates', tint: 'tint', eyebrow: 'Dates',
      h2: 'When is the TACHS in 2026?',
      lede: 'The 2026 TACHS is on Friday, November 6, 2026 for the Archdiocese of New York and Saturday, November 7, 2026 for Brooklyn/Queens and Rockville Centre. Registration closed on October 28, 2026.',
      body: [
        { kind: 'table', caption: 'The 2026 to 2027 TACHS calendar (official TACHS site and 2026 Student Handbook, read 31 October 2026)', head: ['Date', 'What happens'], rows: [
          ['August 24, 2026', 'Registration opened online and by phone'],
          ['October 2, 2026', 'Deadline for extended time requests to the student&rsquo;s diocese'],
          ['October 28, 2026', 'Registration closed'],
          ['November 4, 2026', 'Test session code, date and time emailed after 1:00 PM'],
          ['Friday, November 6, 2026', 'TACHS for the Archdiocese of New York'],
          ['Saturday, November 7, 2026', 'TACHS for the Diocese of Brooklyn/Queens and the Diocese of Rockville Centre'],
          ['November 11 and 18, 2026', 'Make-up session details posted for students who missed the test or had approved technical problems'],
          ['December 7, 2026', 'Scores provided to the three high school choices, on or before this date'],
          ['December 11, 2026', 'Paper Applicant Records for public school students due at the high schools'],
          ['January 22, 2027', 'Home Report available to families online from 3:00 PM']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'One attempt only',
          left: [
            'The Student Handbook is firm: "A student may take the TACHS examination only once." It also says results are final, with no reviewing, rescoring or retesting.',
            'That makes grade 7 the real preparation year. A student who strengthens all five math strands then sits the test once, in the fall of grade 8.'
          ],
          rightH3: 'How results are used',
          right: [
            'The site says high schools use a combination of TACHS results, the Applicant Record from the student&rsquo;s school and state testing results. Families see local and national percentile ranks in the Home Report.',
            'Scholarship and financial aid decisions are made by each high school. Questions about admission go to the high schools directly, not to the testing company.'
          ] },
        { kind: 'source', html: 'Sources: the <a class="ag-inline-link" href="https://tachsinfo.com/" rel="noopener" target="_blank">TACHS site</a> registration and exam FAQs and the 2026 Student Handbook calendar, read 31 October 2026. Confirm every date on the official site; it is the organizers&rsquo; to change.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice set',
      h2: 'Twelve original TACHS-style math practice items',
      lede: 'Our own items, across the five strands, with four-choice thinking in mind. They are not TACHS items. Use the calculator only where our table above says it helps.',
      body: [
        { kind: 'ol', items: [
          '<b>Which is greater, 3/5 or 5/8?</b>',
          '<b>Round 4,768 to the nearest hundred.</b>',
          '<b>A pattern starts 5, 9, 13, 17. What is the 12th term?</b>',
          '<b>If 2n + 9 = 31, what is n?</b>',
          '<b>A spinner has 8 equal sections and 3 are blue. What is the probability of landing on blue?</b>',
          '<b>What is the range of 14, 9, 21, 17 and 9?</b>',
          '<b>What is the perimeter of a rectangle 7.5 units long and 4 units wide?</b>',
          '<b>A triangle has a base of 10 cm and a height of 6 cm. What is its area?</b>',
          '<b>How many minutes are in 2.75 hours?</b>',
          '<b>How many inches are in 3 feet 8 inches?</b>',
          '<b>What is 25 percent of 48? Try it without the calculator.</b>',
          '<b>In a table, x = 1, 2, 3 gives y = 4, 7, 10. What is y when x = 8?</b>'
        ] },
        { kind: 'table', mt: true, caption: 'Answers and the idea (ours; every answer checked in Python)', head: ['Item', 'Answer', 'Idea'], rows: [
          ['1', '5/8', '0.625 against 0.6, or cross-multiply: 25 against 24'],
          ['2', '4,800', 'The tens digit 6 rounds the hundreds up'],
          ['3', '49', '5 + 11 x 4: the 12th term is eleven steps past the first'],
          ['4', '11', '2n = 22'],
          ['5', '3/8', 'Favorable sections over total sections'],
          ['6', '12', 'Largest 21 minus smallest 9'],
          ['7', '23 units', '2 x (7.5 + 4)'],
          ['8', '30 square cm', 'Half of base times height'],
          ['9', '165 minutes', '2 hours is 120, three quarters of an hour is 45'],
          ['10', '44 inches', '3 x 12 + 8'],
          ['11', '12', 'A quarter of 48'],
          ['12', '25', 'y = 3x + 1, the same rule as the tile pattern']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The off-by-one trap',
          left: [
            'A common wrong answer to item 3 is 53, from multiplying 12 x 4 and add 5. The 12th term is only eleven steps past the first, so it is 5 + 11 x 4 = 49.',
            'Writing the rule as 4n + 1 and checking n = 1 gives 5 avoids the slip every time.'
          ],
          rightH3: 'Using the handbook samples',
          right: [
            'The free Student Handbook on the TACHS site ends with sample questions and an answer key. Use them once, untimed, to see the screen-style layout and the four choices.',
            'Then come back to strand work. The organizers say there is no official practice test, so the samples show format, not difficulty.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'A year plan',
      h2: 'A grade 7 math plan for the fall 2027 TACHS',
      lede: 'Our plan for a student in grade 7 now, with one live class a week. Dates for the 2027 test are not yet published; the 2026 pattern was registration in late summer and the test in early November.',
      body: [
        { kind: 'table', caption: 'November 2026 to November 2027 (our plan)', head: ['Months', 'Strand focus', 'Habit'], rows: [
          ['November 2026 to January 2027', 'Number sense and operations', 'Estimate before computing'],
          ['February to March 2027', 'Algebraic patterns and connections', 'Rules in n, checked at n = 1'],
          ['April to May 2027', 'Data analysis, probability and statistics', 'Sort data before any average'],
          ['June to July 2027', 'Geometry and measurement', 'Units on every line'],
          ['August to September 2027', 'Mixed review; basic calculator practice', 'Calculator only where it helps'],
          ['October 2027', 'Timed mixed sets of our own; handbook samples once', 'Keep moving, mark and return within a subtest']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 6', p: 'Strong fractions and percents now make grade 8 easy.' },
          { h3: 'Grade 7', p: 'The plan above: one strand at a time.' },
          { h3: 'Grade 8', p: 'Mixed review and the calculator habit in the fall.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four signs a student is ready for TACHS math',
    lede: 'The organizers link TACHS success to school coursework. These are the signs we look for in that coursework.',
    table: { caption: 'From school math to TACHS-ready (our steps)', head: ['Step', 'What it looks like'], rows: [
      ['1. Accurate', 'Grade 7 and 8 problems right on homework and quizzes'],
      ['2. Estimating', 'Knows roughly what an answer should be before working it out'],
      ['3. Judicious', 'Uses the calculator for messy arithmetic only'],
      ['4. Steady', 'Marks a hard item and moves on, then returns before the subtest ends']
    ] },
    left: { h3: 'For parents', ps: [
      'Look at your child&rsquo;s school math grades and state test results first; the site says high schools consider them alongside the TACHS.',
      'If the school math is solid, a few weeks on estimation and the calculator may be all that is needed. If it is shaky, fix the school math.'
    ] },
    right: { h3: 'For students', ps: [
      'Practice the basic calculator before test day, so it is a tool and not a surprise.',
      'On the day, you can skip and mark items inside a subtest. Once you finish a subtest you cannot go back, so use the marks.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for New York middle schoolers',
    lede: 'Live online classes with one regular teacher, as a group or one to one.',
    bands: [
      { num: 'I', h3: 'Core math', sub: 'Grades 6 to 8', courses: [
        { code: 'TAX / CORE / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'All five strands.' },
        { code: 'TAX / CORE / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Patterns into equations.' },
        { code: 'TAX / CORE / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and chance.' }
      ] },
      { num: 'II', h3: 'Number sense', sub: 'Speed and confidence', courses: [
        { code: 'TAX / NUM / 01', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Speed calculation', blurb: 'Mental arithmetic.' },
        { code: 'TAX / NUM / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Reasoning and logic.' },
        { code: 'TAX / NUM / 03', slug: 'middle-school-math-competitions-course', title: 'Middle school competitions', blurb: 'For extra challenge.' }
      ] },
      { num: 'III', h3: 'Ninth grade and beyond', sub: 'After the test', courses: [
        { code: 'TAX / HS / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra 1 onward.' },
        { code: 'TAX / HS / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Python for math.' },
        { code: 'TAX / HS / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Coding from zero.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live math classes for New York families, around school and sports',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Late afternoon or evening, Eastern Time.' },
      { time: 'Weekends', l: 'Saturday and Sunday mornings work for many families.' },
      { time: '1-on-1', l: 'Focused on one student&rsquo;s weakest strand.' }
    ],
    cells: [
      { h3: 'Strand by strand', p: 'Five strands, tracked separately.' },
      { h3: 'Estimate first', p: 'Every answer sized before it is computed.' },
      { h3: 'Calculator sense', p: 'A basic calculator used with judgment.' },
      { h3: 'Unit facts', p: 'Measurement conversions made automatic.' },
      { h3: 'Five boroughs and Long Island', p: 'Live online, no travel.' },
      { h3: 'Batch size', p: 'Fifteen to twenty students, or one.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Our learners also put math to work in code. Browse the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'The TACHS registration fee is paid to the TACHS program, not to us; our fee is for classes only. We bill monthly, so a family can study through grade 7 and stop whenever they choose.',
    free: ['A free first class', 'A short strand-by-strand check', 'No card details'],
    group: ['Fifteen to twenty learners', 'The same teacher each week', 'Choose your batch', 'Monthly'],
    one: ['A private math teacher', 'Built around school math gaps', 'Practice set for one child']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'TACHS math: what New York parents ask',
    items: [
      { q: 'What math is on the TACHS?', a: 'The official site lists number sense and operations, algebraic patterns and connections, data analysis, probability and statistics, geometry, and measurement. These are standard middle school topics.' },
      { q: 'Is a calculator allowed on the TACHS in 2026?', a: 'Yes. New in 2026, a basic 4-function calculator is provided inside the testing platform for applicable questions. Personal calculators are not allowed, and a student using one is disqualified.' },
      { q: 'When is the TACHS in 2026?', a: 'The Archdiocese of New York tests on Friday, November 6, 2026, and the Diocese of Brooklyn/Queens and the Diocese of Rockville Centre on Saturday, November 7, 2026. Sessions begin at 8:30 AM or 10:00 AM.' },
      { q: 'How long is the TACHS?', a: 'About 2 hours 10 minutes for most students, including directions, across 6 timed subtests. With approved extended time it is about 3 hours 15 minutes.' },
      { q: 'Is the TACHS taken at home?', a: 'Yes. The 2026 TACHS is an online, remote, at-home test with Proctorio proctoring and a webcam, a format the site says has been used since 2020.' },
      { q: 'Is there an official TACHS practice test?', a: 'No. The site says official practice tests are not published or provided, though the Student Handbook includes sample questions and an answer key.' },
      { q: 'Do the organizers recommend TACHS tutoring?', a: 'No. The site says Riverside Insights and the three dioceses do not encourage or endorse coaching or tutoring programs, and that students who do well in school coursework can expect to do well. We teach school math, not TACHS drills.' },
      { q: 'Can my child take the TACHS twice?', a: 'No. The Student Handbook says a student may take the TACHS only once, and results are final with no rescoring or retesting.' },
      { q: 'When do we get TACHS results?', a: 'Scores go to the three high school choices on or before December 7, 2026. Families can view the Home Report online from 3:00 PM on January 22, 2027.' },
      { q: 'What days and times are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with TACHS or the dioceses?', a: 'No. Modern Age Coders is independent and has no tie to Riverside Insights, the TACHS program, any diocese or any high school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for New York eighth graders',
    lede: 'Other entrance tests and help by grade.',
    items: [
      { href: '/isee-ssat-math-prep', label: 'ISEE and SSAT math', p: 'For independent schools.' },
      { href: '/online-math-tutor-7th-grade', label: '7th grade math tutor', p: 'The preparation year.' },
      { href: '/online-math-tutor-8th-grade', label: '8th grade math tutor', p: 'Support through the test year.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'Patterns and equations, one to one.' },
      { href: '/best-coding-classes-for-kids-in-new-york-city', label: 'Coding classes in NYC', p: 'For students who like to build.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child&rsquo;s grade and how school math is going. The teacher runs a short check across the five strands and tells you honestly whether extra classes are worth it.',
    readFirst: 'To see a lesson&rsquo;s shape first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look through the <a class="ag-inline-link" href="/courses">course catalogue</a>.',
    note: 'We teach live over video from India, at New York after-school and weekend times. Families usually find WhatsApp the fastest way to reach us.',
    formNote: 'The first class costs nothing, and we do not ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'Entrance tests', links: [
        { href: '/math-olympiad-amc-tutoring', label: 'AMC and olympiad tutoring' },
        { href: '/isee-ssat-math-prep', label: 'ISEE and SSAT math' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation' },
        { href: '/math-competitions-for-middle-school-students', label: 'Middle school competitions' }
      ] },
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-6th-grade', label: '6th grade math tutor' },
        { href: '/online-math-tutor-7th-grade', label: '7th grade math tutor' },
        { href: '/online-math-tutor-8th-grade', label: '8th grade math tutor' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Estimate, then press equals'
  },

  personalityCss: `
.ag-root.ag-tax .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-tax .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-tax .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-tax .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-tax .ag-steps li { line-height: 1.58; }
.ag-root.ag-tax .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'The official TACHS site (tachsinfo.com, Riverside Insights for the Archdiocese of New York, the Diocese of Brooklyn/Queens and the Diocese of Rockville Centre), read raw on 31 October 2026 through its public content API and PDFs: registration FAQs (eligibility, August 24 to October 28 2026); exam FAQs (November 6 and 7 2026, sessions, about 2 hours 10 minutes, online at home since 2020, extended time the only accommodation, content areas and math strands, the new 2026 4-function calculator, no official practice tests, no endorsement of coaching, school coursework statement, Home Report January 22 2027, selection by TACHS plus Applicant Record plus state tests); 2026 Student Handbook (facts about the TACHS, once only, results final, four answers per question, no penalty, calendar, December 7 and 11 2026); 2026 Parent Guide (6 timed subtests, breaks, scratch paper, skip and mark, extended time about 3 hours 15 minutes, calculator page).',
    localProject: 'Our calculator-judgment table, three original worked examples (3n + 1 tiles gives 61; 3 + 4 x 5 is 23 not 35; 19.8 x 3.1 estimated at 60, exact 61.38), twelve original practice items checked in Python, a grade 7 year plan. Lesson family: estimation and calculator judgment.',
    requiredMentions: ['does not encourage or endorse coaching or tutoring programs for the TACHS Examination.', 'New in 2026: A basic 4-function calculator will be provided within the testing platform for use on applicable questions.', 'Official TACHS practice tests are not published or provided', 'There are 6 timed subtests', 'A student may take the TACHS examination only once.', 'Friday, November 6, 2026', 'algebraic patterns and connections', 'about 3 hours 15 minutes', 'Many basic calculators work left to right and would show 35', '5 + 11 x 4 = 49', 'Estimate, then press equals'],
    sources: [
      { claim: 'TACHS eligibility, 2026 registration window, test dates and times, length, at-home format, accommodations, content areas, calculator, practice tests, coaching statement and results.', url: 'https://tachsinfo.com/' },
      { claim: '2026 TACHS Student Handbook: facts about the test, once-only rule, final results, four answer choices, no penalty, 2026 to 2027 calendar.', url: 'https://tachsinfo.com:8443/pdf/HandBook.pdf' },
      { claim: '2026 TACHS Parent Guide: six timed subtests, breaks, scratch paper, skip and mark, extended time length, in-exam calculator.', url: 'https://tachsinfo.com:8443/pdf/ParentGuide.pdf' }
    ],
    rejectedClaims: [
      'The TACHS registration fee: published by the program but not printed (no typed prices).',
      'Number of math questions and math subtest length: not published by the organizers; the page says so.',
      'The Student Handbook sample questions and answer key: not reproduced; all items on the page are ours.',
      'The deadline to enter high school choices: the site gives November 7, 2026 in one place and November 21, 2026 in another (and a stale 2025 line); not printed, families are told to check the site.',
      'Catholic school outcome statistics on the TACHS FAQ (scholarship totals, college-going and graduation rates): not repeated.',
      'Fall 2027 TACHS dates: not yet published; the page gives only the 2026 pattern.',
      'Any affiliation with Riverside Insights, the TACHS program, a diocese or a school: none, stated on the page.'
    ]
  }
};
