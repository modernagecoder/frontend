'use strict';
// Stanford 10 math practice (ag- achievement test door; UK and US exams cluster Phase 2, row US081, writer group B16).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md, rule 8 (never reproduce items; Pearson's sample-item
// PDFs were not opened for copying). Every fact read raw with curl -A "Mozilla/5.0" on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/stanford-10-math-practice/:
//  - Pearson Assessments, SAT10 product page (pearson-sat10.html, pearson.txt): Stanford Achievement Test Series, Tenth
//    Edition; achievement "for students in grades K-12" (written "K to 12"); "Co-normed with the OLSAT8"; "multiple-choice
//    assessment that has national norms and is available in print and digital formats"; program attributes: publication
//    date 2018; "Grades K-12 paper, Grades 3-12 online"; scores "Percentile Rank, Stanine, GE, and NCE by grade" and Scaled
//    Scores; completion time "2.25-5.5 hours (untimed)"; "Form A with 13 levels; Form D with 13 levels for hand scoring
//    only"; qualification level B (level A described as requiring no professional degree); "Fall and Spring grade-based
//    norms".
//  - Pearson SAT10 overview flyer PDF (sat10-overview-flyer.pdf): "2018 Stanford 10 norms update"; "Easy-hard-easy
//    question format"; "Complete, Basic, and Abbreviated test battery options"; Lexile Measures; Achievement/Ability
//    Comparison with the OLSAT 8. The flyer's "more than 80 years" and the product page's "more than a century" conflict,
//    so neither is printed.
//  - Pearson SAT10 Scope & Sequence chart PDF (sat10-scope-sequence.pdf): 13 levels with grade ranges (SESAT 1 K.0-K.5 ...
//    TASK 3 11.0-12.9; hyphens written "to"); Complete Battery math items and minutes: SESAT 1 and 2 Mathematics 40 items
//    30 minutes; Primary 1 Problem Solving 42/50, Procedures 30/30, Total 72/80; Primary 2 44/50, 30/30, 74/80; Primary 3
//    46/50, 30/30, 76/80; Intermediate 1 to Advanced 2 48/50, 32/30, 80/80; TASK 1 to 3 Mathematics 50/50; "Stanford 10
//    allows flexible testing times. The testing times indicated above are guidelines".
//  - Code of Virginia section 22.1-254.1 (va-code.html): "evidence that the child has attained a composite score in or
//    above the fourth stanine on any nationally normed standardized achievement test", by August 1, or an evaluation.
//  - NYSED Home Instruction Questions and Answers (ny-qa.txt): probation only if the composite "is below the thirty-third
//    percentile on national norms or the score fails to reflect one academic year of growth"; "Alternative forms of
//    evaluation may be used every other year for pupils in grades 4 though 8" (source typo kept in the code comment only);
//    "With the consent of the superintendent, a parent may perform these actions" (administer a test).
//  - Washington RCW 28A.200.010 (wa-rcw.html): "a standardized achievement test approved by the state board of education
//    is administered annually to the child by a qualified individual" or an annual assessment by a certificated person.
// Blocked, not retried: doe.virginia.gov, ospi.k12.wa.us, gadoe.org, tn.gov (403 or no response); NYCRR on Westlaw (403).
// Our own material, labelled on the page: the stanine band summary (standard 4-7-12-17-20-17-12-7-4 convention), the
// pacing arithmetic (62.5 and 56.25 seconds an item), the procedure-versus-problem-solving pair (3/4 + 1/8 = 7/8; the
// 12 by 8 garden, perimeter 40, area 96), the practice set (85, 54, 7/8, 10, 12, 96, 19, 4,800) checked in Python, and the
// six-week plan. Lesson family: procedure versus problem solving, compute then apply.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST PREP', blurb: 'Stanford 10 (SAT10) math explained from Pearson: levels by grade, Problem Solving and Procedures items and minutes, scores, homeschool testing laws and original practice.' },
  slug: 'stanford-10-math-practice',
  code: 'gav',
  accent: '#415D18',
  accentRationale: 'Stanford 10 math practice: the allocated olive green #415D18, a schoolyard green; about 7.0:1 on the #FBF8F2 paper, well above the 4.5:1 floor',
  pageType: 'market',
  market: US,
  priceSubject: 'maths',
  routeLabel: 'Stanford 10 math practice',
  title: 'Stanford 10 Math Practice (SAT10): Levels, Subtests, Scores',
  description: 'Stanford 10 math practice: SAT10 levels by grade, Problem Solving and Procedures items and minutes, how scores work, homeschool testing rules and practice.',
  ogDescription: 'The Stanford 10 measures what a child has learned, so good math is the real preparation. SAT10 levels by grade, the two math subtests, what stanines and percentiles mean, how three states use the scores, and original practice.',
  twitterDescription: 'Stanford 10 math, from Pearson\'s own chart: levels, subtests, scores and original practice.',
  pageName: 'Stanford 10 Math Practice (SAT10)',
  webPageDescription: 'A parent and homeschool guide to the math tests in the Stanford Achievement Test Series, Tenth Edition (Stanford 10, SAT10) from Pearson: the 13 levels and their grade ranges, Mathematics Problem Solving and Procedures items and minutes, score types, how Virginia, New York and Washington home instruction rules use achievement tests, and original practice.',
  courseDescription: 'Live online elementary and middle school math for US children in grades K to 8: computation, problem solving, measurement, geometry and data, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Stanford 10 math practice',
  navLinks: [
    { href: '#sat10', label: 'The Stanford 10' },
    { href: '#levels', label: 'Levels and math' },
    { href: '#scores', label: 'Scores' },
    { href: '#homeschool', label: 'Homeschool rules' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades K to 12 &middot; Stanford 10 and achievement tests',
  h1: 'Stanford 10 math practice: compute, then apply',
  lede: 'The Stanford 10 is an achievement test: it checks what a child has learned, against children across the country. For homeschooling families it is often the test that satisfies a state rule; for schools it tracks progress. Either way, the honest preparation is good math. The Stanford 10 splits math into two parts from first grade up, computing and applying, and a child strong in both is ready. This guide explains the test from Pearson\'s own materials, shows how three states use achievement scores, and gives original practice.',
  secondaryCta: { href: '#practice', label: 'Go to the practice set' },
  wa: 'Hello Modern Age Coders, my child in the US is taking the Stanford 10 this year and we would like help with grade-level math. Could we book a free first class?',
  heroNote: 'Teaching math and coding live since 2020 &middot; 10,000+ students &middot; ages 6 to 67',
  spec: [
    ['Publisher', 'Pearson'],
    ['Full name', 'Stanford Achievement Test Series, Tenth Edition'],
    ['Grades', 'K to 12 on paper, 3 to 12 online'],
    ['Levels', '13, from SESAT 1 to TASK 3'],
    ['Math subtests', 'Problem Solving and Procedures'],
    ['Our lessons', 'Live online, batch or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Stanford 10 (SAT10), Pearson\'s Stanford Achievement Test Series, Tenth Edition, is a nationally normed, multiple-choice achievement test for grades K to 12, with 2018 norms. From Primary 1 to Advanced 2 its math has two subtests, Mathematics Problem Solving and Mathematics Procedures. Many homeschoolers use it for state testing rules. Modern Age Coders, not connected with Pearson, teaches the grade-level math it measures, live online in our elementary math course, as a group of 15 to 20 or one to one.',

  picks: {
    eyebrow: 'Math that shows on any achievement test',
    h2: 'Three courses that build what the Stanford 10 measures',
    lede: 'Each one teaches both halves of the test: accurate computing and confident problem solving.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'GAV / 01', title: 'Elementary math, grades 1 to 5', note: 'The full grade sequence, computing and applying side by side.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'GAV / 02', title: 'Middle school math, grades 6 to 8', note: 'For the Intermediate 3 and Advanced levels.' },
      { course: 'mental-maths-mastery-kids', code: 'GAV / 03', title: 'Number fluency, ages 5 to 10', note: 'Quick, sure number work for the Procedures subtest.' }
    ]
  },

  sections: [
    {
      id: 'sat10', tint: 'tint', eyebrow: 'The Stanford 10',
      h2: 'What is the Stanford 10 test?',
      lede: 'The Stanford 10 is Pearson\'s Stanford Achievement Test Series, Tenth Edition, often shortened to SAT10. It is not the college-admissions SAT. Pearson describes it as a multiple-choice achievement test with national norms for grades K to 12.',
      body: [
        { kind: 'two',
          leftH3: 'From Pearson',
          left: [
            'Pearson\'s product page says the SAT10 spans "language, reading, math, science, and social science domains", is "Co-normed with the OLSAT8", and is a "multiple-choice assessment that has national norms and is available in print and digital formats".',
            'Its program details give "Grades K-12 paper, Grades 3-12 online", a publication date of 2018, and "Fall and Spring grade-based norms". The overview flyer refers to the "2018 Stanford 10 norms update".'
          ],
          rightH3: 'How the test is built',
          right: [
            'Pearson lists "Form A with 13 levels; Form D with 13 levels for hand scoring only". Schools and testers can choose "Complete, Basic, and Abbreviated test battery options", and the flyer describes an "Easy-hard-easy question format".',
            'The test is untimed in principle. Pearson gives a completion time of "2.25-5.5 hours (untimed)", and its scope chart adds: "Stanford 10 allows flexible testing times. The testing times indicated above are guidelines".'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.pearsonassessments.com/store/usassessments/en/Store/Professional-Assessments/Academic-Learning/Brief/Stanford-Achievement-Test-Series-%7C-Tenth-Edition/p/100000415.html" rel="noopener" target="_blank">Pearson SAT10 product page</a> and the <a class="ag-inline-link" href="https://www.pearsonassessments.com/content/dam/school/global/clinical/us/assets/sat10/sat10-overview-flyer.pdf" rel="noopener" target="_blank">SAT10 overview flyer</a>, read 31 October 2026. Stanford Achievement Test and OLSAT are trademarks of Pearson. Modern Age Coders is not connected with Pearson, Stanford University or any state agency.' }
      ]
    },
    {
      id: 'levels', tint: 'deep', eyebrow: 'Levels and math',
      h2: 'Which Stanford 10 level is right for my child\'s grade, and how many math items are there?',
      lede: 'Each of the 13 levels covers about one grade, and the math changes shape across them. Kindergarten levels have a single Mathematics test; Primary 1 to Advanced 2 split it into Problem Solving and Procedures; the high school TASK levels return to one Mathematics test.',
      body: [
        { kind: 'table', caption: 'Stanford 10 levels and Complete Battery math tests: items and guideline minutes (Pearson SAT10 Scope and Sequence chart, read 31 October 2026)', head: ['Level', 'Grade range', 'Problem Solving', 'Procedures', 'Total math'], rows: [
          ['SESAT 1', 'K.0 to K.5', 'One Mathematics test: 40 items, 30 min', '', ''],
          ['SESAT 2', 'K.5 to 1.5', 'One Mathematics test: 40 items, 30 min', '', ''],
          ['Primary 1', '1.5 to 2.5', '42 items, 50 min', '30 items, 30 min', '72 items, 80 min'],
          ['Primary 2', '2.5 to 3.5', '44 items, 50 min', '30 items, 30 min', '74 items, 80 min'],
          ['Primary 3', '3.5 to 4.5', '46 items, 50 min', '30 items, 30 min', '76 items, 80 min'],
          ['Intermediate 1, 2 and 3', '4.5 to 7.5', '48 items, 50 min', '32 items, 30 min', '80 items, 80 min'],
          ['Advanced 1 and 2', '7.5 to 9.9', '48 items, 50 min', '32 items, 30 min', '80 items, 80 min'],
          ['TASK 1, 2 and 3', '9.0 to 12.9', 'One Mathematics test: 50 items, 50 min', '', '']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the grade ranges',
          left: [
            'Grade ranges are written as grade and month: 2.5 means the middle of grade 2. So a child tested in the spring of grade 2 usually takes Primary 2, and in the fall of grade 2 Primary 1. The tester or school picks the level.',
            'The Abbreviated Battery is shorter: at Intermediate 1, the chart lists 30 Problem Solving items and 20 Procedures items. Ask which battery your child will sit.'
          ],
          rightH3: 'What the pacing means (ours)',
          right: [
            'At Intermediate 1, 48 Problem Solving items in 50 minutes is 62.5 seconds an item, our arithmetic; 32 Procedures items in 30 minutes is about 56 seconds each.',
            'Because Pearson calls the times guidelines, a child is rarely rushed. Accuracy matters far more than speed: careful setting out beats racing.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.pearsonassessments.com/content/dam/school/global/clinical/us/assets/sat10/sat10-scope-sequence.pdf" rel="noopener" target="_blank">Pearson SAT10 Scope and Sequence chart (PDF)</a>, read 31 October 2026. Items and minutes are the chart\'s Complete Battery figures; the Basic Battery omits Science and Social Science, not math.' }
      ]
    },
    {
      id: 'scores', tint: 'tint', eyebrow: 'Scores',
      h2: 'How is the Stanford 10 scored, and what is a stanine?',
      lede: 'Pearson lists "Percentile Rank, Stanine, GE, and NCE by grade", plus Scaled Scores on a continuous growth scale. For homeschool families the stanine and the percentile matter most, because state rules are written in those terms.',
      body: [
        { kind: 'table', caption: 'Stanines and the percentiles they cover, by the standard stanine convention (our summary; check your own score report)', head: ['Stanine', 'Percentile range (approx.)', 'Usual description'], rows: [
          ['1', '1 to 4', 'Well below average'],
          ['2', '4 to 11', 'Below average'],
          ['3', '11 to 23', 'Below average'],
          ['4', '23 to 40', 'Average'],
          ['5', '40 to 60', 'Average'],
          ['6', '60 to 77', 'Average'],
          ['7', '77 to 89', 'Above average'],
          ['8', '89 to 96', 'Above average'],
          ['9', '96 to 99', 'Well above average']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What each score tells you',
          left: [
            'A percentile rank compares your child with a national group in the same grade: the 60th percentile means doing as well as or better than about 60 percent of that group. A stanine squeezes the same idea into nine bands.',
            'GE, the grade equivalent, is easy to misread. A grade 3 child with a GE of 5.2 has not learned grade 5 math; they did as well on the grade 3 test as a typical early grade 5 student might.'
          ],
          rightH3: 'Composite or subtest?',
          right: [
            'State rules usually look at the composite (overall) score. New York\'s guidance is explicit: "The student\'s score on individual test subscores should not be considered in determining whether the program should be placed on probation."',
            'For teaching, the subtests are the useful part. A child strong in Procedures but weaker in Problem Solving needs more word problems, not more drill.'
          ] }
      ]
    },
    {
      id: 'homeschool', tint: 'deep', eyebrow: 'Homeschool rules',
      h2: 'Can the Stanford 10 be used for homeschool testing requirements?',
      lede: 'In many states, yes, because state laws ask for a nationally normed or approved standardized achievement test rather than naming one. The rules differ, so here are three states, each from its own law or guidance.',
      body: [
        { kind: 'table', caption: 'How three states use achievement tests for home instruction (state sources, read 31 October 2026)', head: ['State', 'What the rule says', 'Source'], rows: [
          ['Virginia', 'By August 1, "evidence that the child has attained a composite score in or above the fourth stanine on any nationally normed standardized achievement test", or an evaluation instead', 'Code of Virginia, section 22.1-254.1'],
          ['New York', 'Probation only if the composite "is below the thirty-third percentile on national norms" or shows less than one year of growth; alternative evaluations allowed every other year in grades 4 to 8', 'NYSED Home Instruction Questions and Answers'],
          ['Washington', '"a standardized achievement test approved by the state board of education is administered annually to the child by a qualified individual", or an annual assessment by a certificated person', 'RCW 28A.200.010']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Who may give the test',
          left: [
            'Pearson lists the SAT10 at qualification level B; its level A, by contrast, covers assessments needing no professional degree or license. Many homeschool families therefore test through a qualified tester or group.',
            'In New York, the state\'s guidance says that with the superintendent\'s consent "a parent may perform these actions", meaning give the standardized test or prepare the written narrative.'
          ],
          rightH3: 'Before you choose a test',
          right: [
            'Read your own state\'s rule first. A test that satisfies Virginia\'s stanine rule may need different paperwork in New York, and Washington asks for a test approved by its state board.',
            'Other tests, such as the Iowa Assessments or the California Achievement Test, are also nationally normed achievement tests. Our <a class="ag-inline-link" href="/iowa-assessments-math-prep">Iowa Assessments guide</a> covers the Iowa test; we have not verified current CAT details at a primary source, so we do not describe the CAT here.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://law.lis.virginia.gov/vacode/title22.1/chapter14/section22.1-254.1/" rel="noopener" target="_blank">Code of Virginia 22.1-254.1</a>, <a class="ag-inline-link" href="https://www.nysed.gov/nonpublic-schools/home-instruction-questions-and-answers" rel="noopener" target="_blank">NYSED Home Instruction Questions and Answers</a> and <a class="ag-inline-link" href="https://app.leg.wa.gov/RCW/default.aspx?cite=28A.200.010" rel="noopener" target="_blank">Washington RCW 28A.200.010</a>, read 31 October 2026. This is not legal advice; confirm with your state or district.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice',
      h2: 'What is the right way to get ready for Stanford 10 math?',
      lede: 'By working on both halves of the test: computing accurately (Procedures) and choosing what to compute (Problem Solving). Here is one pair that shows the difference, a short set and a plan, all ours.',
      body: [
        { kind: 'two',
          leftH3: 'A Procedures-style task (ours, grade 4 to 5)',
          left: [
            'Work out 3/4 + 1/8. The fractions need a common denominator. Eighths work: 3/4 is 6/8. Then 6/8 + 1/8 = 7/8.',
            'Check by sense: 3/4 is a little less than 1, and adding a small eighth keeps it below 1. 7/8 fits. Procedures rewards exactly this: a known method, done carefully.'
          ],
          rightH3: 'A Problem Solving-style task (ours)',
          right: [
            'A garden is 12 feet long and 8 feet wide. How much fencing goes all the way around it, and how much ground is inside? The hard part is choosing: fencing around means perimeter, ground inside means area.',
            'Perimeter: 12 + 8 + 12 + 8 = 40 feet. Area: 12 x 8 = 96 square feet. A child who computes perfectly but picks area for the fence gets it wrong, which is why both halves need practice.'
          ] },
        { kind: 'table', mt: true, caption: 'Eight warm-up problems for grades 1 to 6, labelled by subtest (ours; answers checked in Python)', head: ['Problem', 'Type', 'A good way in', 'Answer'], rows: [
          ['47 + 38', 'Procedures', 'Make 50: 47 + 3, then 35 more', '85'],
          ['9 x 6', 'Procedures', 'Ten sixes minus one six', '54'],
          ['3/4 + 1/8', 'Procedures', 'Change 3/4 to 6/8', '7/8'],
          ['2.5 x 4', 'Procedures', 'Two lots of 4 is 8, half of 4 is 2', '10'],
          ['144 pencils packed 12 to a box. How many boxes?', 'Problem Solving', 'Sharing equally means divide', '12'],
          ['Area of a 12 by 8 garden', 'Problem Solving', 'Inside means area', '96 square feet'],
          ['Next number: 3, 7, 11, 15, ...', 'Problem Solving', 'Find the rule: add 4', '19'],
          ['Round 4,768 to the nearest hundred', 'Procedures', 'Look at the tens digit', '4,800']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Weeks 1 to 2 (ours).</b> Find out the level and battery. Look through recent schoolwork and mark what is shaky, separately for computing and for word problems.',
          '<b>Weeks 3 to 4.</b> Repair weak computing, meaning before speed: tens and ones, related facts, fractions, decimals.',
          '<b>Week 5.</b> Word problems daily: read twice, decide the operation, estimate, then compute.',
          '<b>Week 6.</b> If your tester offers it, look once at Pearson\'s practice test so the answer format is familiar. Then rest; never cram the night before.'
        ] },
        { kind: 'p', mt: true, html: 'Grade-by-grade help: <a class="ag-inline-link" href="/online-math-tutor-1st-grade">first grade</a>, <a class="ag-inline-link" href="/online-math-tutor-3rd-grade">third grade</a>, <a class="ag-inline-link" href="/online-math-tutor-6th-grade">sixth grade</a> and <a class="ag-inline-link" href="/online-math-tutor-8th-grade">eighth grade</a> math tutoring, and our <a class="ag-inline-link" href="/homeschool-math-curriculum-usa">homeschool math curriculum guide</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four stages from computing to problem solving',
    lede: 'Our own description of how children connect the two halves of math.',
    table: { caption: 'Stages of using math (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Computes when told', 'Accurate on a bare sum, unsure in a story'],
      ['2. Spots key words', 'Picks an operation from words like "total", sometimes wrongly'],
      ['3. Pictures the situation', 'Draws or imagines the problem, then chooses'],
      ['4. Checks for sense', 'Estimates first and asks if the answer is reasonable']
    ] },
    left: { h3: 'For parents', ps: [
      'Key-word tricks work until they do not: "how many more" can mean add or subtract. Asking "what is happening in the story?" moves a child to stage 3.',
      'Look at the two math subtests separately when results arrive. They point to different kinds of help.'
    ] },
    right: { h3: 'For children', ps: [
      'Before you calculate, say what the answer will roughly be.',
      'Draw it. A quick sketch of the garden shows the fence goes around the outside.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for grades K to 8',
    lede: 'Live courses covering the math a school year expects, with stretch for children ready for more.',
    bands: [
      { num: 'I', h3: 'Kindergarten to grade 1', sub: 'SESAT levels', courses: [
        { code: 'GAV / K / 01', slug: 'early-math-foundations', title: 'First numbers', blurb: 'Hands-on counting for SESAT ages.' },
        { code: 'GAV / K / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Young thinkers', blurb: 'Spotting rules in sequences.' },
        { code: 'GAV / K / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus', blurb: 'Beads that show tens and ones.' }
      ] },
      { num: 'II', h3: 'Grades 1 to 5', sub: 'Primary and Intermediate', courses: [
        { code: 'GAV / P / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Grades 1 to 5 math', blurb: 'Both subtests, every week.' },
        { code: 'GAV / P / 02', slug: 'mental-maths-mastery-kids', title: 'Number fluency', blurb: 'For the Procedures half.' },
        { code: 'GAV / P / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Story problems', blurb: 'For the Problem Solving half.' }
      ] },
      { num: 'III', h3: 'Grades 6 to 8', sub: 'Intermediate 3 and Advanced', courses: [
        { code: 'GAV / A / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Grades 6 to 8 math', blurb: 'Ratio, geometry, equations.' },
        { code: 'GAV / A / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Into Algebra 1.' },
        { code: 'GAV / A / 03', slug: 'maths-through-coding', title: 'Coding with numbers', blurb: 'Python that checks answers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Grade-level math lessons, all year round',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After-school lessons that fit a homeschool week.' },
      { time: 'Weekends', l: 'Review sessions, one topic at a time.' },
      { time: '1-on-1', l: 'For a gap found on a score report.' }
    ],
    cells: [
      { h3: 'Both halves', p: 'Computing and problem solving each week.' },
      { h3: 'Estimate first', p: 'Sense checks become a habit.' },
      { h3: 'Our own problems', p: 'Never copied test items.' },
      { h3: 'Homeschool friendly', p: 'Fits around your curriculum.' },
      { h3: 'Honest about results', p: 'We never forecast a score.' },
      { h3: 'Batch size', p: 'Fifteen to twenty, or private lessons.' }
    ]
  },

  projectsH2: 'Made by children in our math classes',
  projectsLede: 'Math projects and early programs from children in our classes. See <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Parent reviews from Google, as they were written.',

  fees: {
    h2: 'Fees',
    lede: 'Math lessons are billed by the month with no yearly contract, so a homeschool family can add support ahead of testing season and stop when it has done its job.',
    free: ['A free first class', 'Bring a recent score report', 'No card details'],
    group: ['Fifteen to twenty learners', 'A regular teacher', 'Pick your batch', 'Monthly'],
    one: ['A private teacher', 'Aimed at the weaker subtest', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'Stanford 10 math practice: questions answered',
    items: [
      { q: 'What is the Stanford 10 test?', a: 'The Stanford 10, or SAT10, is Pearson\'s Stanford Achievement Test Series, Tenth Edition. It is a nationally normed, multiple-choice achievement test for grades K to 12, with 2018 norms, covering reading, math, language, science and social science.' },
      { q: 'Is the Stanford 10 the same as the SAT?', a: 'No. SAT10 is Pearson\'s short name for the Stanford Achievement Test, Tenth Edition, an achievement test for grades K to 12. The SAT used for college admissions is a different test from a different organization.' },
      { q: 'What math is on the Stanford 10?', a: 'From Primary 1 to Advanced 2 there are two math subtests: Mathematics Problem Solving and Mathematics Procedures. Kindergarten levels and the high school TASK levels have a single Mathematics test.' },
      { q: 'How long is the Stanford 10 math test?', a: 'On Pearson\'s scope chart, the Complete Battery math at Intermediate 1 is 48 Problem Solving items in about 50 minutes and 32 Procedures items in about 30 minutes. Pearson says the times are guidelines and the test is untimed.' },
      { q: 'What Stanford 10 level is for grade 3?', a: 'Pearson\'s chart gives Primary 2 for grades 2.5 to 3.5 and Primary 3 for grades 3.5 to 4.5. A child tested early in grade 3 usually sits Primary 2, and later in the year Primary 3.' },
      { q: 'What is a good Stanford 10 score for homeschool?', a: 'It depends on your state. Virginia accepts a composite in or above the fourth stanine, while New York places a program on probation only if the composite is below the 33rd percentile or shows less than a year of growth.' },
      { q: 'Can a parent give the Stanford 10 at home?', a: 'Pearson sells the SAT10 at qualification level B, and state rules decide who may administer it. In New York, a parent may give the test with the superintendent\'s consent; other states have their own rules.' },
      { q: 'How can my child practice for the Stanford 10?', a: 'Practice both halves of math: accurate computation and word problems where your child decides what to calculate. Look once at Pearson\'s practice test if your tester offers it, but do not drill look-alike questions.' },
      { q: 'When can lessons be scheduled?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Pearson?', a: 'No. Modern Age Coders is an independent online school with no link to Pearson, Stanford University or any state. We teach math and never promise a score.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More help for US families testing at home or at school.',
    items: [
      { href: '/iowa-assessments-math-prep', label: 'Iowa Assessments math prep', p: 'The other common achievement test.' },
      { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math curriculum', p: 'Choosing books and a weekly rhythm.' },
      { href: '/olsat-test-prep', label: 'OLSAT explained', p: 'The ability test co-normed with the SAT10.' },
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'Primary 2 and 3 math, taught well.' },
      { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math tutoring', p: 'Ratios, fractions and early algebra.' },
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core vs traditional math', p: 'Why methods at school look different.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child\'s grade, the Stanford 10 level if you know it, and any recent score report. The teacher will look at the two math subtests and start where it helps most.',
    readFirst: 'If useful, read <a class="ag-inline-link" href="/how-we-teach">how lessons work</a> or browse <a class="ag-inline-link" href="/courses">the courses</a> before booking.',
    note: 'Teaching is live online video from India, timed for US homeschool and after-school hours. WhatsApp is the fastest way to reach us.',
    formNote: 'Booking the first class costs nothing and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Testing at home', links: [
        { href: '/iowa-assessments-math-prep', label: 'Iowa Assessments' },
        { href: '/olsat-test-prep', label: 'OLSAT' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' },
        { href: '/homeschool-coding-curriculum', label: 'Homeschool coding' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-math-tutor-3rd-grade', label: 'Third grade math' },
        { href: '/online-math-tutor-cost', label: 'Tutoring costs' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Fence around: 40 feet. Ground inside: 96 square feet.'
  },

  personalityCss: `
.ag-root.ag-gav .ag-hero h1 { letter-spacing: -0.015em; max-width: 21ch; }
.ag-root.ag-gav .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-gav .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-gav .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-gav .ag-section-head h2 { max-width: 30ch; }
`,

  dossier: {
    curriculumAuthority: 'Pearson SAT10 product page (domains, co-norming with OLSAT8, formats, grades K to 12 paper and 3 to 12 online, 2018, score types, completion time, Forms A and D, qualification level B, fall and spring norms), SAT10 overview flyer (2018 norms update, easy-hard-easy, battery options) and SAT10 Scope and Sequence chart (13 levels, grade ranges, math items and minutes). Code of Virginia 22.1-254.1, NYSED Home Instruction Q and A, Washington RCW 28A.200.010. All read raw 31 October 2026.',
    localProject: 'Our stanine band summary, pacing arithmetic (62.5 and about 56 seconds an item), the Procedures and Problem Solving pair (3/4 + 1/8 = 7/8; garden perimeter 40 and area 96), an eight-problem practice set checked in Python and the six-week plan. Lesson family: procedure versus problem solving, compute then apply.',
    requiredMentions: ['Co-normed with the OLSAT8', 'Grades K-12 paper, Grades 3-12 online', 'Percentile Rank, Stanine, GE, and NCE by grade', '2.25-5.5 hours (untimed)', 'Form A with 13 levels; Form D with 13 levels for hand scoring only', 'Stanford 10 allows flexible testing times.', 'composite score in or above the fourth stanine on any nationally normed standardized achievement test', 'is below the thirty-third percentile on national norms', 'Fence around: 40 feet. Ground inside: 96 square feet.'],
    sources: [
      { claim: 'Pearson SAT10 product page: description and program details.', url: 'https://www.pearsonassessments.com/store/usassessments/en/Store/Professional-Assessments/Academic-Learning/Brief/Stanford-Achievement-Test-Series-%7C-Tenth-Edition/p/100000415.html' },
      { claim: 'Pearson SAT10 overview flyer: 2018 norms, question format, batteries.', url: 'https://www.pearsonassessments.com/content/dam/school/global/clinical/us/assets/sat10/sat10-overview-flyer.pdf' },
      { claim: 'Pearson SAT10 Scope and Sequence chart: levels, grade ranges, items and minutes.', url: 'https://www.pearsonassessments.com/content/dam/school/global/clinical/us/assets/sat10/sat10-scope-sequence.pdf' },
      { claim: 'Code of Virginia 22.1-254.1: fourth stanine evidence rule.', url: 'https://law.lis.virginia.gov/vacode/title22.1/chapter14/section22.1-254.1/' },
      { claim: 'NYSED Home Instruction Q and A: 33rd percentile, alternate years, parent administration.', url: 'https://www.nysed.gov/nonpublic-schools/home-instruction-questions-and-answers' },
      { claim: 'Washington RCW 28A.200.010: annual approved standardized achievement test.', url: 'https://app.leg.wa.gov/RCW/default.aspx?cite=28A.200.010' }
    ],
    rejectedClaims: [
      'The SAT10 history line: the product page says "more than a century" and the flyer "more than 80 years"; they conflict, so neither is printed.',
      'California Achievement Test (CAT) details: no current publisher page verified (datarecognitioncorp.com lists TerraNova, not the CAT), so the CAT is named but not described.',
      'Pearson SAT10 prices and sample-item PDFs: not printed or reproduced (rule 8 and no prices).',
      'State education agency pages for Virginia (doe.virginia.gov), Washington (ospi.k12.wa.us), Georgia and Tennessee: 403 or no response on 31 October 2026, not retried; the statutes and NYSED guidance were used instead. The NYCRR text on Westlaw returned 403.',
      'The stanine-to-percentile bands are the standard statistical convention, labelled as our summary; Pearson\'s own norm tables were not read.',
      'Any score or pass promise: none made.'
    ]
  }
};
