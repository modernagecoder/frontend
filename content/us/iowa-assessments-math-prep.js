'use strict';
// Iowa Assessments math prep (ag- achievement test door; UK and US exams cluster, row US046). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md, writer brief rule 9 (Iowa is listed with the gifted tests:
// teach real grade-level math and readiness, never test-item drilling). Every fact read raw with curl on 31 October
// 2026; copies in keyword-research-2026-09/uk-us-gap/src/iowa-assessments-math-prep/:
//  - Riverside Insights, Iowa Assessments page (iowa-page.txt): "Skill-Based Measures to Drive Student Growth"; with
//    CogAT, identifies "gaps between students' current academic skills and their readiness to learn"; vertical scale
//    "from kindergarten through high school". Marketing claims ("the only") not used.
//  - Riverside Insights, Iowa Assessments Overview Brochure PDF (iowa-overview-brochure.pdf; the 2024 campaign URL
//    serves the identical file, same MD5): "what students have learned"; "grades K–12" (en dash in source, written
//    "K to 12"); first developed in 1935 by researchers at the University of Iowa (extracted text has broken spacing,
//    so paraphrased, not quoted); "Forms E, F, and G are equivalent"; "Complete, Core, or Survey batteries or single
//    subjects"; "Items that align to one of three cognitive levels"; Lexile and Quantile measures; Level 9 to 14 table:
//    Math in two parts, 30 + 30 minutes, 50, 55, 60, 65, 70, 75 items; Computation 20 minutes, 25, 27, 29, 30, 31, 32
//    items; recommended levels by testing season (grade 1: 6, 6 to 7, 7; grade 2: 7, 8, 8; grade 3: 8 to 9, 9, 9;
//    grade 4: 10; grade 5: 11).
//  - Rock Hill Schools (SC) (rockhill-criteria.html): universal Grade 2 GT screening via CogAT and Iowa Assessment (IA);
//    "Both assessments are nationally normed and are used to provide initial data for GT qualification".
//  - Dorchester School District Two (SC) (ddtwo.html): Iowa Level 7 in grade 2; Mathematics "administered in two separate
//    sessions. All questions are read aloud."; Part 1 concepts "number sense and operations, algebraic patterns and
//    connections, geometry, and measurement"; Part 2 data "presented in graphs or tables" and brief word problems; NPR
//    and Standard Score; "The tests are not timed."
//  - North Carolina Division of Non-Public Education, home school standardized testing and testing FAQs
//    (ncdnpe-standardized-testing.html, ncdnpe-testing-faqs.html): annual nationally standardized test required; must
//    "Measure achievement" and cover "English grammar, reading, spelling and mathematics"; "Iowa Test of Basic Skills
//    (ITBS)" among commonly used tests; "It is the responsibility of the parent to confirm that a test meets the state
//    requirements."; no minimum score; results kept "for at least one year"; "makes no exemptions for any reason".
// Our own material, labelled on the page: the class-pet votes table (7, 12, 9; 5 more, 28 in all, Hamster 13 after 4
// more votes), 502 - 267 = 235 by counting up (3 + 30 + 200 + 2), the seating problem (24 / 4 = 6 tables, 8 tables, 32
// seats), the practice set with answers checked in Python (17, 235, 56 and 7, 27, 3:15 pm, 26, 614, 0.85), the
// eight-week plan. No Iowa Assessments item reproduced or imitated.
// Lesson family: reading a table or graph before calculating.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST PREP', blurb: 'Iowa Assessments (the old ITBS) math for grades 1 to 5: levels, math test lengths, how South Carolina and NC homeschoolers use it, and original practice.' },
  slug: 'iowa-assessments-math-prep',
  code: 'ia',
  accent: '#497061',
  accentRationale: 'Iowa Assessments math prep: a grey-teal, #497061 as allocated, steady and school-like; 5.25:1 on the #FBF8F2 paper, above the 4.5:1 floor',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Iowa Assessments math prep',
  title: 'Iowa Assessments Math Prep (ITBS) for Grades 1 to 5',
  description: 'Iowa Assessments math prep for grades 1 to 5: what the Iowa test (ITBS) measures, levels by grade, math test lengths, who uses it, and worked original practice.',
  ogDescription: 'The Iowa Assessments measure what a child has learned, so the honest preparation is simply good math. Levels, math test lengths, how districts and homeschoolers use the Iowa test, and a worked practice set.',
  twitterDescription: 'The Iowa Assessments math tests explained from Riverside Insights, with original grade 1 to 5 practice.',
  pageName: 'Iowa Assessments Math Prep (ITBS)',
  webPageDescription: 'A parent guide to the math tests in the Iowa Assessments from Riverside Insights (often still called the ITBS): levels by grade, items and minutes for the Math and Computation tests, how South Carolina districts and North Carolina home schools use the Iowa test, and original practice for grades 1 to 5.',
  courseDescription: 'Live online elementary math lessons for US children in grades 1 to 5: number sense, operations, measurement, geometry, data and word problems, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Iowa Assessments math prep',
  navLinks: [
    { href: '#iowa', label: 'The Iowa test' },
    { href: '#levels', label: 'Levels and lengths' },
    { href: '#math', label: 'What the math covers' },
    { href: '#who', label: 'Who uses it' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 1 to 5 &middot; Iowa Assessments and ITBS',
  h1: 'Iowa Assessments math prep: real math, not tricks',
  lede: 'Unlike the gifted screeners it is often paired with, the Iowa test is an achievement test. It asks what a child has learned in reading, language and math, and compares that with children across the country. That makes preparation refreshingly simple: a child who understands the math of their grade, reads a table carefully and checks an answer is ready. This guide explains the Iowa Assessments from Riverside Insights&rsquo; own brochure, shows how two South Carolina districts and North Carolina home schools use the test, and gives original practice with full working for grades 1 to 5.',
  secondaryCta: { href: '#practice', label: 'Go to the practice set' },
  wa: 'Hello Modern Age Coders, my child in the US is taking the Iowa test this year and I would like help with grade-level math. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; ages 6 to 67',
  spec: [
    ['Publisher', 'Riverside Insights'],
    ['Type', 'Achievement test'],
    ['Grades', 'K to 12'],
    ['Current forms', 'E, F and G'],
    ['Math, grade 3', '50 items, two 30-minute parts'],
    ['Our lessons', 'Live online, grades 1 to 5'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Iowa Assessments, published by Riverside Insights and long known as the Iowa Test of Basic Skills (ITBS), are achievement tests for grades K to 12 that measure what students have learned in reading, language, math and more. South Carolina uses them with the CogAT for grade 2 gifted screening, and North Carolina lists the ITBS among tests home schools commonly use. The honest preparation is solid grade-level math. Modern Age Coders teaches that live online in our elementary math course, in a batch or 1-on-1; the first class is free.',

  picks: {
    eyebrow: 'Grade-level math, understood',
    h2: 'Three courses that build what the Iowa math tests check',
    lede: 'Each teaches math a child keeps: understanding first, then fluency, then confident problem solving.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'IA / 01', title: 'Elementary math, grades 1 to 5', note: 'Number, operations, measurement, geometry and data, in school order.' },
      { course: 'mental-maths-mastery-kids', code: 'IA / 02', title: 'Mental math, ages 5 to 10', note: 'Fast, flexible arithmetic for the Computation test.' },
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'IA / 03', title: 'Reasoning and readiness, ages 6 to 9', note: 'For grade 2 families facing the Iowa test and the CogAT together.' }
    ]
  },

  sections: [
    {
      id: 'iowa', tint: 'tint', eyebrow: 'The Iowa test',
      h2: 'What is the Iowa test, and is it the same as the ITBS?',
      lede: 'The Iowa Assessments are the current form of the long-running Iowa tests, now published by Riverside Insights. Many parents, and some state agencies, still call them by the older name, the Iowa Test of Basic Skills (ITBS).',
      body: [
        { kind: 'two',
          leftH3: 'From the publisher',
          left: [
            'Riverside Insights&rsquo; overview brochure describes the Iowa Assessments as a source of information about "what students have learned", for grades K to 12. It says the tests were first developed in 1935 by researchers at the University of Iowa and have been renewed with new content and norms since.',
            'The brochure lists "Forms E, F, and G" as the current versions and says they "are equivalent", built to the same blueprint, so schools can test before and after a year with comparable results.'
          ],
          rightH3: 'What the test reports',
          right: [
            'Schools can give "Complete, Core, or Survey batteries or single subjects". Results use a vertical scale that runs, in the publisher&rsquo;s words, "from kindergarten through high school", so growth can be followed year to year.',
            'The brochure adds that items "align to one of three cognitive levels" and that reports include Lexile and Quantile measures. Dorchester School District Two tells parents that Iowa results include the National Percentile Rank and the Standard Score.'
          ] },
        { kind: 'table', mt: true, caption: 'The Iowa Assessments and the CogAT compared (Riverside Insights and Rock Hill Schools, read 31 October 2026)', head: ['Question', 'Iowa Assessments', 'CogAT'], rows: [
          ['What kind of test?', 'Achievement: what a child has learned', 'Ability: how a child reasons'],
          ['Subjects', 'Reading, language, math and more', 'Verbal, quantitative and nonverbal reasoning'],
          ['Can you study for it?', 'Yes, by learning the grade&rsquo;s math and reading', 'Only familiarity and broad reasoning'],
          ['Publisher', 'Riverside Insights', 'Riverside Insights']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://riversideinsights.com/k12-assessments/iowa-assessments" rel="noopener" target="_blank">Riverside Insights Iowa Assessments page</a> and its linked Iowa Assessments Overview Brochure, read 31 October 2026. Modern Age Coders is not connected with Riverside Insights, the University of Iowa, any state agency or any district named on this page.' }
      ]
    },
    {
      id: 'levels', tint: 'deep', eyebrow: 'Levels and lengths',
      h2: 'Which Iowa level does each grade take, and how long is the math?',
      lede: 'The Iowa Assessments use numbered levels, roughly one per grade, and the publisher recommends a level for each testing season. From Level 9, the math test grows by five items a level.',
      body: [
        { kind: 'table', caption: 'Recommended Iowa Assessments levels by testing season, grades 1 to 5 (Riverside Insights brochure, read 31 October 2026)', head: ['Grade', 'Fall', 'Midyear', 'Spring'], rows: [
          ['1', '6', '6 or 7', '7'],
          ['2', '7', '8', '8'],
          ['3', '8 or 9', '9', '9'],
          ['4', '10', '10', '10'],
          ['5', '11', '11', '11']
        ] },
        { kind: 'table', mt: true, caption: 'Math and Computation tests at Levels 9 to 11: number of items and approximate working minutes (Riverside Insights brochure, read 31 October 2026)', head: ['Level (usual grade)', 'Math items', 'Math minutes', 'Computation items', 'Computation minutes'], numCols: [1, 2, 3, 4], rows: [
          ['9 (grade 3)', '50', '30 + 30', '25', '20'],
          ['10 (grade 4)', '55', '30 + 30', '27', '20'],
          ['11 (grade 5)', '60', '30 + 30', '29', '20']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers mean for pacing (ours)',
          left: [
            'At Level 9, 50 math items in 60 minutes is about 72 seconds an item, our arithmetic. At Level 11, 60 items in the same hour is 60 seconds each. Computation is quicker still: 25 items in 20 minutes at Level 9 is 48 seconds each.',
            'Those are averages. Some items take ten seconds and some take two minutes, which is why calm, steady work beats rushing.'
          ],
          rightH3: 'Younger grades',
          right: [
            'For grades 1 and 2, the brochure lists the primary levels separately, and Dorchester School District Two describes Level 7 for its second graders. At that level, the district says, the math test is given in two sessions and "All questions are read aloud."',
            'Dorchester School District Two also tells parents that its grade 2 tests are not timed. Check your own district&rsquo;s letter, since schools choose the battery and the form.'
          ] }
      ]
    },
    {
      id: 'math', tint: 'tint', eyebrow: 'What the math covers',
      h2: 'What math is on the Iowa test?',
      lede: 'Number sense, operations, patterns, geometry, measurement and data, at the level of the child&rsquo;s grade. One district&rsquo;s parent page describes the grade 2 math test in useful detail.',
      body: [
        { kind: 'two',
          leftH3: 'Part 1: concepts',
          left: [
            'Dorchester School District Two explains that in Level 7 Part 1, students show understanding of "number sense and operations, algebraic patterns and connections, geometry, and measurement", with answer choices that are pictures or numbers.',
            'In plain terms: place value, adding and subtracting, simple patterns, shapes, length, time and money ideas. Nothing a good second-grade classroom does not already cover.'
          ],
          rightH3: 'Part 2: data and word problems',
          right: [
            'For Part 2, the district says "some questions involve the interpretation of data presented in graphs or tables", where students "locate data, compare amounts, or develop generalizations", and others are brief word problems.',
            'This is where careful reading pays most. A child who finds the right row of a table before calculating avoids the most common slip.'
          ] },
        { kind: 'table', mt: true, caption: 'Our worked example (grade 2 level): votes for a class pet', head: ['Pet', 'Votes'], numCols: [1], rows: [
          ['Fish', '7'],
          ['Rabbit', '12'],
          ['Hamster', '9']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>How many more votes did Rabbit get than Fish?</b> Find both rows first: Rabbit 12, Fish 7. "How many more" means compare, so 12 - 7 = 5. Five more.',
          '<b>How many children voted?</b> Add every row: 7 + 12 + 9. Make a ten first: 9 + 1 from the 7 gives 10, leaving 6, so 10 + 12 + 6 = 28.',
          '<b>If 4 more children vote Hamster, which pet wins?</b> Hamster becomes 9 + 4 = 13. Compare with the biggest other row, Rabbit at 12. 13 is more, so Hamster wins.',
          '<b>Check (ours).</b> The new total should be 28 + 4 = 32. Add the rows again: 7 + 12 + 13 = 32. It matches, so the answers are consistent.'
        ] }
      ]
    },
    {
      id: 'who', tint: 'deep', eyebrow: 'Who uses it',
      h2: 'Who uses the Iowa test, and what is it used for?',
      lede: 'Districts use the Iowa Assessments to track achievement and, in some states, to help screen for gifted programs. Home-educating families in states that require annual testing often choose it too.',
      body: [
        { kind: 'table', caption: 'Three public bodies that describe their use of the Iowa test (pages read 31 October 2026)', head: ['Body', 'Use', 'In their words'], rows: [
          ['Rock Hill Schools, South Carolina', 'Universal grade 2 gifted screening with the CogAT', '"Both assessments are nationally normed and are used to provide initial data for GT qualification"'],
          ['Dorchester School District Two, South Carolina', 'Grade 2 screening, Iowa Level 7 Reading and Mathematics', 'Results include the National Percentile Rank and the Standard Score'],
          ['North Carolina Division of Non-Public Education', 'Annual testing for home schools', 'Lists the "Iowa Test of Basic Skills (ITBS)" among tests commonly used']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'South Carolina: achievement beside ability',
          left: [
            'Rock Hill Schools explains that every grade 2 student in a South Carolina public school takes the CogAT and the Iowa Assessment for gifted screening, and that students will have additional opportunities to qualify later.',
            'Pairing the two lets a district see a child&rsquo;s reasoning and their classroom learning side by side. Riverside&rsquo;s page makes the same point: together they show gaps between current skills and readiness to learn.'
          ],
          rightH3: 'North Carolina home schools',
          right: [
            'The state&rsquo;s Division of Non-Public Education says a home school must give "a nationally standardized test or other nationally standardized equivalent measurement to each enrolled student each academic year", covering "English grammar, reading, spelling and mathematics".',
            'It adds: "It is the responsibility of the parent to confirm that a test meets the state requirements." There is no minimum score, results must be kept on file for at least one year, and its FAQ says the law "makes no exemptions for any reason".'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.rock-hill.k12.sc.us/departments/elementaryed/elementary-instruction/gifted-and-talented/elementary-identification-criteria" rel="noopener" target="_blank">Rock Hill Schools</a>, <a class="ag-inline-link" href="https://www.ddtwo.org/fs/pages/7033" rel="noopener" target="_blank">Dorchester School District Two</a>, <a class="ag-inline-link" href="https://doa.nc.gov/divisions/non-public-education/home-schools/standardized-testing" rel="noopener" target="_blank">NC DNPE standardized testing</a> and <a class="ag-inline-link" href="https://www.doa.nc.gov/divisions/non-public-education/home-schools/faqs/testing" rel="noopener" target="_blank">NC DNPE testing FAQs</a>, read 31 October 2026. Other states set their own home-school rules; check your state&rsquo;s education department.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice',
      h2: 'How should my child prepare for the Iowa math test?',
      lede: 'By learning the grade&rsquo;s math well, practising careful reading of tables and word problems, and building quick, accurate arithmetic. Here is a counting-up example, a word problem and a short mixed set, all ours.',
      body: [
        { kind: 'two',
          leftH3: 'Counting up: 502 - 267 (ours, grade 3)',
          left: [
            'Instead of borrowing across a zero, count up from 267 to 502 in friendly jumps: 267 to 270 is 3, 270 to 300 is 30, 300 to 500 is 200, and 500 to 502 is 2.',
            'Add the jumps: 3 + 30 + 200 + 2 = 235. Check by adding back: 267 + 235 = 502. A child who can subtract two ways can check every answer on the Computation test.'
          ],
          rightH3: 'Seats for visitors (ours, grade 4)',
          right: [
            'A class of 24 children sits at tables of 4. Two more tables of 4 are brought in for visitors. How many seats are there now? First, 24 / 4 = 6 tables. Add 2 tables: 8 tables. Then 8 x 4 = 32 seats.',
            'Or think of seats directly: 24 + 2 x 4 = 24 + 8 = 32. Two routes, one answer, and the habit of asking "what is the question really asking?"'
          ] },
        { kind: 'table', mt: true, caption: 'A short mixed practice set for grades 2 to 5 (ours; answers checked in Python)', head: ['Problem', 'A good way in', 'Answer'], rows: [
          ['6 + 7 + 4', 'Pair 6 and 4 to make 10 first', '17'],
          ['502 - 267', 'Count up in jumps', '235'],
          ['8 x 7, then 56 / 8', 'Use the fact family', '56, then 7'],
          ['Three quarters of 36', 'One quarter is 9, so three quarters is 27', '27'],
          ['45 minutes after 2:30 pm', '30 minutes to 3:00, then 15 more', '3:15 pm'],
          ['Perimeter of a 9 by 4 rectangle', 'Two lengths and two widths', '26'],
          ['1,000 - 386', 'Count up: 14 to 400, then 600', '614'],
          ['0.6 + 0.25', 'Write 0.6 as 0.60', '0.85']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Weeks 1 to 2 (ours).</b> Find the gaps: work through your child&rsquo;s recent school math together and note what feels shaky.',
          '<b>Weeks 3 to 5.</b> Fix one gap a week with understanding first: place value, fact families, fractions of a number, time.',
          '<b>Weeks 6 to 7.</b> Practise reading tables, bar graphs and short word problems aloud, finding the right numbers before calculating.',
          '<b>Week 8.</b> Look once at the publisher&rsquo;s or school&rsquo;s description of the format, then rest. Sleep and breakfast matter more than a final cram.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages of working a word problem',
    lede: 'Our description of how children grow from guessing to checking.',
    table: { caption: 'Stages of solving a word problem (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Grab the numbers', 'Adds whatever numbers appear in the problem'],
      ['2. Find the question', 'Knows what is being asked, may pick the wrong operation'],
      ['3. Plan, then calculate', 'Chooses the operation for a reason, finds the right data first'],
      ['4. Check another way', 'Confirms the answer with a second method or an estimate']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 1 is very common in grades 1 and 2 and is the root of most word-problem errors. Asking "what does the question want?" moves a child to stage 2.',
      'Praise the check, not just the answer. Checking is the habit that lifts scores honestly.'
    ] },
    right: { h3: 'For children', ps: [
      'Read the question twice. Underline what it is asking before you look for numbers.',
      'When you finish, ask: does my answer make sense? Would it be bigger or smaller than this?'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math and thinking courses for grades K to 6',
    lede: 'Live courses that teach the math a school year expects and stretch children who are ready for more.',
    bands: [
      { num: 'I', h3: 'Early years', sub: 'Ages 4 to 7', courses: [
        { code: 'IA / E / 01', slug: 'early-math-foundations', title: 'Early math foundations', blurb: 'Counting and shapes, hands on.' },
        { code: 'IA / E / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Patterns and number sense.' },
        { code: 'IA / E / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus math', blurb: 'Seeing place value.' }
      ] },
      { num: 'II', h3: 'Elementary', sub: 'Grades 1 to 5', courses: [
        { code: 'IA / M / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'The full grade sequence.' },
        { code: 'IA / M / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Quick, accurate arithmetic.' },
        { code: 'IA / M / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Word problems, step by step.' }
      ] },
      { num: 'III', h3: 'Beyond grade level', sub: 'Grades 4 to 8', courses: [
        { code: 'IA / B / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Fractions to pre-algebra.' },
        { code: 'IA / B / 02', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'MATHCOUNTS and AMC 8.' },
        { code: 'IA / B / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Math ideas in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Elementary math lessons that build the whole year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in step with what class is covering.' },
      { time: 'Weekends', l: 'Review sessions on one topic at a time.' },
      { time: '1-on-1', l: 'For gaps, or for a child working ahead.' }
    ],
    cells: [
      { h3: 'Understanding first', p: 'Models and reasons before speed.' },
      { h3: 'Reading the data', p: 'Tables and graphs every week.' },
      { h3: 'Practice we wrote', p: 'Original problems, never test items.' },
      { h3: 'Two-way checking', p: 'Every answer confirmed a second way.' },
      { h3: 'No score promises', p: 'We teach math; results are the child&rsquo;s.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work from our elementary students',
  projectsLede: 'Math projects and first programs from children in our classes. More at <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews parents left on Google, exactly as posted.',

  fees: {
    h2: 'Fees',
    lede: 'Elementary math is billed monthly with no annual commitment, so a family can add support before testing season and keep going only if it helps.',
    free: ['A free first class', 'Bring recent schoolwork', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher for your child alone', 'Built around their gaps', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'Iowa Assessments math prep: questions answered',
    items: [
      { q: 'What is the Iowa test used for?', a: 'The Iowa Assessments measure what a child has learned compared with children nationally. Districts use them to track growth, some states use them in gifted screening, and many home-schooling families use them to meet annual testing rules.' },
      { q: 'Is the Iowa Assessment the same as the ITBS?', a: 'The Iowa Assessments are the current form of the long-running Iowa tests, published by Riverside Insights. Many families and some agencies, such as North Carolina\'s Division of Non-Public Education, still use the older name, Iowa Test of Basic Skills (ITBS).' },
      { q: 'How long is the Iowa math test for grade 3?', a: 'Riverside Insights lists the Level 9 Math test at 50 items in two parts of about 30 minutes each, plus a separate Computation test of 25 items in about 20 minutes. Your school chooses which tests to give.' },
      { q: 'What level of the Iowa test does grade 2 take?', a: 'The publisher recommends Level 7 in the fall and Level 8 at midyear and spring. South Carolina districts such as Dorchester School District Two give Level 7 to second graders in the fall.' },
      { q: 'Can you study for the Iowa test?', a: 'Yes, in the honest sense: it measures learning, so learning the math of the grade is real preparation. Reading tables carefully and checking answers help too; memorising look-alike questions does not.' },
      { q: 'Is the Iowa test used for gifted programs?', a: 'In some places. Rock Hill Schools explains that every South Carolina grade 2 student takes the CogAT and the Iowa Assessment as initial data for gifted qualification, with later chances to qualify.' },
      { q: 'Do homeschoolers have to take the Iowa test?', a: 'It depends on the state. North Carolina requires an annual nationally standardized achievement test for home schools and lists the ITBS among tests commonly used, but it is the parent\'s job to confirm a test meets the rules.' },
      { q: 'What do your math lessons cover?', a: 'Our elementary course follows the grade 1 to 5 sequence: place value, operations, fractions, measurement, geometry and data, with word problems every week. We use our own practice, never copied test items.' },
      { q: 'What times do lessons run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Riverside Insights?', a: 'No. We are an independent online school, not linked to Riverside Insights, the University of Iowa or any state or district, and we never promise a score.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Grade-by-grade math help for US families.',
    items: [
      { href: '/online-math-tutor-2nd-grade', label: 'Second grade math tutoring', p: 'Level 7 and 8 math, taught properly.' },
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'Multiplication and fractions.' },
      { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math tutoring', p: 'Multi-digit work and measurement.' },
      { href: '/online-math-tutor-5th-grade', label: 'Fifth grade math tutoring', p: 'Decimals and fraction operations.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'Planning a year of math at home.' },
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core vs traditional math', p: 'Two routes to the same answer.' },
      { href: '/online-math-tutor-cost', label: 'What math tutoring costs', p: 'Comparing tutoring options.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child&rsquo;s grade and when the Iowa test is. Bring a recent worksheet, and the teacher will find what is solid and what needs work.',
    readFirst: 'Take a look at <a class="ag-inline-link" href="/how-we-teach">our teaching approach</a> or the <a class="ag-inline-link" href="/courses">course catalogue</a> before you book.',
    note: 'Lessons happen live by video, taught from India, at times that suit US school weeks. WhatsApp is the quickest way to reach us.',
    formNote: 'Booking the first class is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Grade by grade', links: [
        { href: '/online-math-tutor-2nd-grade', label: 'Second grade math' },
        { href: '/online-math-tutor-3rd-grade', label: 'Third grade math' },
        { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math' },
        { href: '/online-math-tutor-5th-grade', label: 'Fifth grade math' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/online-math-tutor-cost', label: 'Tutoring costs' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: '3 + 30 + 200 + 2 = 235'
  },

  personalityCss: `
.ag-root.ag-ia .ag-hero h1 { letter-spacing: -0.014em; max-width: 22ch; }
.ag-root.ag-ia .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-ia .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ia .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-ia .ag-section-head h2 { max-width: 29ch; }
`,

  dossier: {
    curriculumAuthority: 'Riverside Insights Iowa Assessments page and Overview Brochure, read raw 31 October 2026 (what students have learned; grades K to 12; first developed 1935 at the University of Iowa; Forms E, F and G equivalent; Complete, Core or Survey batteries; three cognitive levels; Lexile and Quantile; vertical scale; Level 9 to 11 Math and Computation items and minutes; recommended levels by season). Rock Hill Schools and Dorchester School District Two (SC grade 2 screening, Level 7 math description); North Carolina DNPE home school testing pages.',
    localProject: 'Our class-pet votes table (7, 12, 9: 5 more, 28 total, Hamster 13 wins, check 32), 502 - 267 = 235 by counting up, the seating problem (32 seats two ways), the mixed practice set checked in Python, the pacing arithmetic (72, 60 and 48 seconds an item) and the eight-week plan. Lesson family: reading a table or graph before calculating.',
    requiredMentions: ['Forms E, F, and G', 'Complete, Core, or Survey batteries or single subjects', 'align to one of three cognitive levels', 'number sense and operations, algebraic patterns and connections, geometry, and measurement', 'some questions involve the interpretation of data presented in graphs or tables', 'Both assessments are nationally normed and are used to provide initial data for GT qualification', 'Iowa Test of Basic Skills (ITBS)', 'It is the responsibility of the parent to confirm that a test meets the state requirements.', 'makes no exemptions for any reason', '3 + 30 + 200 + 2 = 235', 'Seats for visitors (ours, grade 4)'],
    sources: [
      { claim: 'Riverside Insights Iowa Assessments page.', url: 'https://riversideinsights.com/k12-assessments/iowa-assessments' },
      { claim: 'Riverside Insights Iowa Assessments Overview Brochure: history, forms, batteries, levels, items and minutes.', url: 'https://riversideinsights.com/hubfs/Iowa-Assessments_Overview-Brochure.pdf' },
      { claim: 'Rock Hill Schools: universal grade 2 CogAT and Iowa screening in South Carolina.', url: 'https://www.rock-hill.k12.sc.us/departments/elementaryed/elementary-instruction/gifted-and-talented/elementary-identification-criteria' },
      { claim: 'Dorchester School District Two: Iowa Level 7 Reading and Mathematics description, score types.', url: 'https://www.ddtwo.org/fs/pages/7033' },
      { claim: 'North Carolina DNPE: home school standardized testing rule and examples.', url: 'https://doa.nc.gov/divisions/non-public-education/home-schools/standardized-testing' },
      { claim: 'North Carolina DNPE testing FAQs: no exemptions, no minimum score.', url: 'https://www.doa.nc.gov/divisions/non-public-education/home-schools/faqs/testing' }
    ],
    rejectedClaims: [
      'Riverside marketing claims that the Iowa Assessments are the only assessment of their kind (item-level analysis, ACT/SAT readiness from grade 6): not used.',
      'The brochure sentence about 85 years and the 1935 origin are paraphrased, not quoted: the source contains an em dash and the PDF text has broken word spacing.',
      'Primary-level (Levels 5 to 8) item counts: the brochure table did not extract cleanly, so only Levels 9 to 11 are printed.',
      'Indiana Department of Education universal screening guidance (in.gov) and the South Carolina Department of Education grade 2 page (ed.sc.gov): connections failed on 31 October 2026, not retried.',
      'A state-by-state list of home-school testing rules: not printed; only North Carolina, from its own agency.',
      'Iowa Assessments items or look-alikes: none reproduced; any score promise or affiliation: none.'
    ]
  }
};
