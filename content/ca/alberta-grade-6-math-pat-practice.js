'use strict';
// Alberta Grade 6 math PAT practice (ag- assessment door; Canada cluster Plan 2, row 34, CONDITIONAL: 8+ verified facts reached).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/alberta-grade-6-math-pat-practice/).
// Times printed "9 AM–9:30 AM" in the PDFs are written "9 AM to 9:30 AM" here (house rule: no en dash).
//  - 2026-2027 Grade 6 Mathematics Subject Bulletin (alberta.ca/system/files/edc-math-6-subject-bulletin-2026-27.pdf): Part A "consists
//    of 15 questions from Organizing Idea: Number in two reporting categories: integers, decimals, and powers; and fractions, rates, and
//    ratios", designed for 30 minutes, up to 60; Part B "consists of 40 questions" "from all organizing ideas in the Grade 6 mathematics
//    curriculum", 75 minutes, up to 150; "The use of a calculator is not permitted in Part A or Part B."; "If a student requires the use
//    of a calculator to complete Part A and Part B, the student should be excused from the provincial achievement test."; 12 x 12
//    multiplication table as a regular accommodation in both parts; manipulatives listed "(e.g., a protractor, a ruler, tracing paper,
//    pattern blocks ...)"; blueprint Part A 15 (20%), Part B 40 (80%); Part B reporting categories Number: Integers, Decimals, and Powers
//    20-30%; Number: Fractions, Rates, and Ratios 20-30%; Algebra and Patterns 20-30%; Geometry and Coordinate Geometry 5-15%;
//    Measurement and Statistics 10-20%; complexity Part A low 100%, Part B low 30-40%, moderate 45-55%, high 10-20%; standards quoted
//    ("apply appropriate strategies and standard algorithms to solve routine one-step problems"; "apply appropriate and efficient
//    strategies and standard algorithms fluently and accurately to solve multi-step novel problems"); raw scores for Part A and Part B
//    "are not to be combined into a total test score"; "many of the questions on the mathematics test are placed in real-life contexts".
//  - General Information Bulletin 2026-2027, PAT schedules (page 14): Grade 6 Science Friday 11 June 2027, 9 AM to 10 AM; Grade 6
//    Mathematics Part(ie) A Monday 14 June 2027, 9 AM to 9:30 AM; Part(ie) B Wednesday 16 June 2027, 9 AM to 10:15 AM; "up to double
//    the official scheduled time"; "No tests scheduled on June 21, National Indigenous Peoples Day." (rows confirmed by PyMuPDF word
//    positions and a weekday check). Significant dates: detailed reports and ISPs "Late September 2027".
//  - alberta.ca/provincial-achievement-tests: "administered annually to all Alberta students in grades 6 and 9"; "The tests occur in June
//    for grade 6 curriculum in the following subjects:" (Mathematics and Science listed); digital environment.
//  - 2026-2027 Grade 6 Parent Guide: "All students registered in grades 6 and 9 or those in their sixth or ninth year of schooling are
//    expected to write the tests for their grades."; "Alberta Education and Childcare discourages test rehearsal and coaching."; Grade 6
//    Science PAT "consists of 50 questions", 60 minutes, reporting categories "Matter and Energy Resources, Interactions, Climate and
//    Ecosystems, Solar Systems, Computational Thinking, and Scientific Method."; ISP "In late September".
//  - alberta.ca/curriculum-mathematics: Grade 6 snapshot ("Add, subtract, multiply and divide using standard procedures (algorithms) to
//    solve problems.", "Multiply fractions by natural numbers.", "Calculate area and volume.", "Solve algebraic equations.", "Collect,
//    graph and interpret data."); K to 6 "focus on numeracy skills". alberta.ca/curriculum-subject-areas: "New grades 4 to 6
//    mathematics" implemented 2023-24 school year.
// Our own material, labelled "not Alberta Education questions": two worked problems (6 x 3/4 = 4 1/2 cups; 3 x 2 x 0.5 = 3 cubic m,
// 3 / 0.25 = 12 bags), the Python pattern program (prints terms 3 to 39 and "Shortcut for term 10: 39"; run in Python 3.13), ten Part A
// and eight Part B practice questions with answers (5; -6; 7.35; 15.6; 16; 1000; 3/5; 6/7; 2:3; 50 km per hour / 24; 9; 39; (2, 7);
// 30; 60; 8; width 6 and area 54), all checked with exact fractions, the five-week review and the ladder.
// Lesson family: number sense with no calculator, explained aloud.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SRC_B6 = '<a class="ag-inline-link" href="https://www.alberta.ca/system/files/edc-math-6-subject-bulletin-2026-27.pdf" rel="noopener" target="_blank">2026-2027 Grade 6 Mathematics Subject Bulletin</a>';

const PATTERN_PY = `# Growing pattern: start at 3, add 4 each step (ours)

term = 3
for step in range(1, 11):
    print("Term", step, "=", term)
    term = term + 4

# Check the shortcut rule: term n = 4n - 1
n = 10
print("Shortcut for term 10:", 4 * n - 1)`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'GRADE 6 PAT', blurb: 'The Alberta Grade 6 math PAT in June 2027: Part A and Part B, no calculator in either, the new curriculum\'s categories, and eighteen original practice questions.' },
  slug: 'alberta-grade-6-math-pat-practice',
  code: 'albe',
  accent: '#80321B',
  accentRationale: 'Alberta Grade 6 math PAT: a deep red-earth brown, #80321B, allocated for this row in alloc.tsv; 7.9 RGB units from the nearest site accent (#852C1C) and 31.0 from the nearest Canada page accent (#9E3918); contrast 8.29 on the paper #FBF8F2 and 7.13 on the deepest tint #EDE7DA',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Alberta Grade 6 math PAT practice',
  title: 'Alberta Grade 6 Math PAT 2027: What It Tests, With Practice',
  description: 'The Alberta Grade 6 math PAT for June 2027: Part A and Part B with no calculator, the new curriculum\'s reporting categories, and eighteen practice questions.',
  ogDescription: 'What the Grade 6 math PAT tests in 2027, from Alberta Education\'s own bulletin: two no-calculator parts built on the new K to 6 curriculum, the June dates, and practice written by us.',
  twitterDescription: 'Alberta Grade 6 math PAT, June 2027: parts, dates and practice.',
  pageName: 'Alberta Grade 6 Math PAT Practice',
  webPageDescription: 'A guide for Alberta Grade 6 families to the Mathematics Provincial Achievement Test in June 2027, built from Alberta Education and Childcare\'s subject bulletin, schedule and parent guide, with two worked problems, a short Python pattern program and eighteen original practice questions.',
  courseDescription: 'Live online Grade 6 math classes for Alberta children, taught alongside the school year in a batch or one to one.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Alberta', href: '/coding-classes-in-alberta' }],
  crumbLabel: 'Grade 6 math PAT',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#parts', label: 'The two parts' },
    { href: '#june', label: 'June 2027' },
    { href: '#worked', label: 'Worked problems' },
    { href: '#practice-a', label: 'Part A practice' },
    { href: '#practice-b', label: 'Part B practice' }
  ],
  eyebrow: 'Alberta &middot; Grade 6 &middot; Provincial Achievement Test, mathematics',
  h1: 'Alberta Grade 6 math PAT: a parent&rsquo;s guide, with practice',
  lede: 'In June, Alberta&rsquo;s Grade 6 students write a Provincial Achievement Test in mathematics, in two parts and without a calculator in either. It is built on the new Kindergarten to Grade 6 math curriculum, so its sections use that curriculum&rsquo;s language: integers, decimals and powers; fractions, rates and ratios. Below, we walk through Alberta&rsquo;s 2026 to 2027 bulletin, solve two problems the way a Grade 6 teacher would, and gives practice we wrote ourselves, aimed at the math rather than at the test.',
  secondaryCta: { href: '#practice-a', label: 'Go to the Part A practice' },
  wa: 'Hello Modern Age Coders, my child is in Grade 6 in Alberta and I would like help with math before the June PAT. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Grade 6 math with no calculator in sight',
  spec: [
    ['For', 'Alberta Grade 6 students'],
    ['Test', 'Mathematics PAT, June 2027'],
    ['Part A', '15 questions on Number'],
    ['Part B', '40 questions on every organizing idea'],
    ['Calculator', 'Not allowed in either part'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Alberta Grade 6 math PAT is written in June in two parts, with no calculator: Part A, 15 questions on integers, decimals, powers, fractions, rates and ratios (30 minutes), and Part B, 40 questions across the whole Grade 6 math curriculum (75 minutes). In 2027 the parts fall on 14 and 16 June. Modern Age Coders teaches Grade 6 math live online, one to one or in a batch, through our Middle School Mathematics course.',

  picks: {
    eyebrow: 'Teacher-led courses',
    h2: 'Courses we suggest for Grade 6',
    lede: 'The first covers the Grade 6 to 8 math program. The second makes patterns and fractions concrete through code. The third builds the computational thinking Alberta&rsquo;s Grade 6 science test reports on.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'ALBE / 01', title: 'Middle School Mathematics', note: 'Grades 6 to 8. The Grade 6 content in order, then on toward junior high, with every method done by hand.' },
      { course: 'maths-through-coding', code: 'ALBE / 02', title: 'Maths through coding', note: 'Ages 10 to 15. Patterns, fractions and graphs explored in small Python programs.' },
      { course: 'python-ai-kids-masterclass', code: 'ALBE / 03', title: 'Python and AI for kids', note: 'Ages 9 to 12. A first real programming language, with loops, patterns and small projects.' }
    ]
  },

  sections: [
    {
      id: 'parts', tint: 'tint', eyebrow: 'The two parts',
      h2: 'What the Grade 6 math PAT contains',
      lede: 'Alberta&rsquo;s 2026 to 2027 Grade 6 Mathematics Subject Bulletin sets out the test. The first thing families notice is the calculator rule: &ldquo;The use of a calculator is not permitted in Part A or Part B.&rdquo; Everything is done by hand, with standard methods.',
      body: [
        { kind: 'table', caption: 'Grade 6 Mathematics PAT, 2026 to 2027, from Alberta&rsquo;s Grade 6 Mathematics Subject Bulletin (read 22 October 2026)', head: ['', 'Part A', 'Part B'], rows: [
          ['Questions', '15, one mark each', '40, one mark each'],
          ['Share of the test', '20%', '80%'],
          ['Content', '&ldquo;Organizing Idea: Number&rdquo;, in two reporting categories: integers, decimals and powers; fractions, rates and ratios', '&ldquo;all organizing ideas in the Grade 6 mathematics curriculum&rdquo;'],
          ['Time', '30 minutes by design; 60 at most', '75 minutes by design; 150 at most'],
          ['Calculator', 'Not permitted', 'Not permitted'],
          ['Complexity', 'Every question rated low', 'Moderate items are the largest group (45% to 55%); high items 10% to 20%']
        ] },
        { kind: 'table', mt: true, caption: 'Part B reporting categories, share of questions (Grade 6 Mathematics Subject Bulletin, 2026 to 2027)', head: ['Reporting category', 'Part B questions'], numCols: [1], rows: [
          ['Number: Integers, Decimals, and Powers', '20% to 30%'],
          ['Number: Fractions, Rates, and Ratios', '20% to 30%'],
          ['Algebra and Patterns', '20% to 30%'],
          ['Geometry and Coordinate Geometry', '5% to 15%'],
          ['Measurement and Statistics', '10% to 20%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Tools that are allowed',
          left: [
            'Manipulatives are welcome in both parts. The bulletin&rsquo;s list includes &ldquo;a protractor, a ruler, tracing paper, pattern blocks, tiles and cubes, geoboards, tangrams, counters, spinners, unlabeled number lines, graph paper&rdquo;, with one condition: the tool &ldquo;cannot perform the mental conversion or provide the solution to a problem.&rdquo;',
            'A 12 by 12 multiplication grid may be used in both parts as a regular accommodation for children who use one in class, recorded on the platform. And the bulletin is firm on calculators: &ldquo;If a student requires the use of a calculator to complete Part A and Part B, the student should be excused from the provincial achievement test.&rdquo;'
          ],
          rightH3: 'What Alberta expects at each standard',
          right: [
            'At the acceptable standard, the bulletin says students can typically &ldquo;apply appropriate strategies and standard algorithms to solve routine one-step problems&rdquo;. At the standard of excellence they can &ldquo;apply appropriate and efficient strategies and standard algorithms fluently and accurately to solve multi-step novel problems&rdquo;.',
            'The difference between those two sentences is a good map for practice: first one-step accuracy with the standard methods, then several steps chained together, then problems the child has not seen in that form before.'
          ] },
        { kind: 'source', html: 'Source: Alberta Education and Childcare, ' + SRC_B6 + ', read 22 October 2026. We are independent of Alberta Education and Childcare and of every Alberta school authority.' }
      ]
    },
    {
      id: 'june', tint: 'deep', eyebrow: 'June 2027',
      h2: 'When the Grade 6 PATs happen in June 2027',
      lede: 'Alberta&rsquo;s PAT page says &ldquo;The tests occur in June for grade 6 curriculum&rdquo;, in language arts, mathematics, science and social studies. The 2026 to 2027 General Information Bulletin fixes the days. Mathematics and science, the two this page touches on, fall within one week.',
      body: [
        { kind: 'table', caption: 'June 2027 sittings for Grade 6 math and science (2026-2027 PAT General Information Bulletin, as read on 22 October 2026)', head: ['Test', 'Day and date', 'Official time'], rows: [
          ['Grade 6 Science', 'Friday 11 June 2027', '9 AM to 10 AM'],
          ['Grade 6 Mathematics, Part A', 'Monday 14 June 2027', '9 AM to 9:30 AM'],
          ['Grade 6 Mathematics, Part B', 'Wednesday 16 June 2027', '9 AM to 10:15 AM']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Who writes it, and how',
          left: [
            'Alberta&rsquo;s Grade 6 Parent Guide says &ldquo;All students registered in grades 6 and 9 or those in their sixth or ninth year of schooling are expected to write the tests for their grades.&rdquo; Under each schedule Alberta adds that every student may have up to double the official time.',
            'Grade 6 children now sit the PATs on a screen through Alberta&rsquo;s digital assessment platform, the same place Alberta keeps its practice tests, which offer read-aloud, coloured backgrounds and enlarged text.'
          ],
          rightH3: 'Results',
          right: [
            'Parents hear two raw scores, one per part, never added together: Alberta&rsquo;s bulletin forbids combining them into one total. A fuller report, the Individual Student Profile, is due in late September 2027 under the bulletin&rsquo;s timetable of significant dates.',
            'The same parent guide asks parents to keep the test in perspective: children&rsquo;s feelings about a test &ldquo;are very much influenced by what adults close to them say about those tests.&rdquo; A calm week before the test is worth more than an anxious one.'
          ] },
        { kind: 'p', mt: true, html: '<b>A note on the new curriculum.</b> Alberta&rsquo;s renewal timeline records that &ldquo;New grades 4 to 6 mathematics&rdquo; was implemented across the province in the 2023-24 school year. A child in Grade 6 in 2026 to 2027 has therefore been taught from the new curriculum since Grade 3 or Grade 4, and the PAT now uses its organizing ideas. Alberta&rsquo;s summary of Grade 6 math includes &ldquo;Multiply fractions by natural numbers.&rdquo;, &ldquo;Calculate area and volume.&rdquo;, &ldquo;Solve algebraic equations.&rdquo; and &ldquo;Collect, graph and interpret data.&rdquo;' },
        { kind: 'source', html: 'Read 22 October 2026: the PAT General Information Bulletin for 2026-2027 (schedule pages and appendix); Alberta&rsquo;s Grade 6 Parent Guide for the same year; <a class="ag-inline-link" href="https://www.alberta.ca/provincial-achievement-tests" rel="noopener" target="_blank">Provincial Achievement Tests</a>; <a class="ag-inline-link" href="https://www.alberta.ca/curriculum-mathematics" rel="noopener" target="_blank">Mathematics curriculum highlights</a> and the subject-areas timeline on alberta.ca. Read 22 October 2026.' }
      ]
    },
    {
      id: 'approach', tint: 'tint', eyebrow: 'Learning, not rehearsing',
      h2: 'How we help with the Grade 6 PAT without coaching to it',
      lede: 'One line in Alberta&rsquo;s Grade 6 Parent Guide shapes how we work: the province &ldquo;discourages test rehearsal and coaching.&rdquo; We take that at face value. A Grade 6 child who understands the math does not need rehearsal; one who does not understand it is not helped by it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Standard methods, understood', p: 'Column addition, long multiplication and division, done by hand and explained aloud. The new curriculum names these &ldquo;standard procedures (algorithms)&rdquo;, and the PAT allows no calculator.' },
          { h3: 'Fractions as numbers', p: 'Placing fractions on a number line, comparing them and multiplying them by whole numbers, so that 3 &times; 2/7 is a picture before it is a rule.' },
          { h3: 'Reading the question', p: 'Alberta notes that many questions are &ldquo;placed in real-life contexts&rdquo;. We practise turning a short paragraph into a calculation, and writing the answer back in words.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we leave out',
          left: [
            'No released test items, no question-spotting and no multiple-choice tricks. Every question on this page was written by us for the Grade 6 content, and none is copied or adapted from an Alberta test.',
            'And no promises about results. The PAT is one picture of one week; Alberta itself says it is part of a larger picture that teachers build all year.'
          ],
          rightH3: 'Where computational thinking comes in',
          right: [
            'The Grade 6 science PAT, written the Friday before the math test, has six reporting categories, and one of them is &ldquo;Computational Thinking&rdquo;. Patterns, step-by-step instructions and checking a rule are where math and early coding meet.',
            'The short program in the worked section shows the idea: a growing pattern produced by a loop, then checked against a rule. Children who build the pattern themselves remember the rule.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked problems, ours',
      h2: 'Two Grade 6 problems, solved without a calculator',
      lede: 'Our own problems, not Alberta Education questions. The first is a one-step fraction problem like Part A; the second is a multi-step measurement problem like Part B. Both are done by hand, as the test requires.',
      body: [
        { kind: 'p', html: '<b>Problem 1.</b> A recipe uses 3/4 of a cup of oats for one tray of granola. How many cups are needed for 6 trays?' },
        { kind: 'ol', items: [
          '<b>Choose the operation.</b> Six trays of 3/4 each means 6 &times; 3/4, a fraction multiplied by a natural number, which is on Alberta&rsquo;s Grade 6 list.',
          '<b>Multiply the numerator only.</b> 6 &times; 3 = 18, so the product is 18/4. The denominator stays 4 because the pieces are still quarters.',
          '<b>Simplify.</b> 18/4 = 9/2 = 4 1/2.',
          '<b>Check with a picture.</b> Two trays use 3/4 + 3/4 = 1 1/2 cups, so six trays use three times that: 4 1/2 cups.',
          '<b>Answer in words.</b> Six trays need 4 1/2 cups of oats.'
        ] },
        { kind: 'p', mt: true, html: '<b>Problem 2.</b> A garden bed is 3 m long and 2 m wide, and it will be filled with soil 0.5 m deep. Soil comes in bags of 0.25 cubic metres. How many bags are needed?' },
        { kind: 'ol', items: [
          '<b>Find the volume.</b> Volume = length &times; width &times; depth = 3 &times; 2 &times; 0.5. Work it as 6 &times; 0.5 = 3, so the bed holds 3 cubic metres of soil.',
          '<b>Decide the next operation.</b> The question asks how many bags of 0.25 fit into 3, which is a division: 3 &divide; 0.25.',
          '<b>Divide without a calculator.</b> 0.25 is one quarter, and there are 4 quarters in 1, so there are 4 &times; 3 = 12 quarters in 3.',
          '<b>Check.</b> 12 bags &times; 0.25 = 3 cubic metres, exactly the volume of the bed.',
          '<b>Answer in words.</b> 12 bags of soil are needed. A real gardener might buy one more for settling; on the test, the answer is 12.'
        ] },
        { kind: 'code', label: 'Python &middot; a growing pattern, checked against a rule (ours)', lang: 'python', code: PATTERN_PY, note: 'Output: Term 1 = 3 through Term 10 = 39, then &ldquo;Shortcut for term 10: 39&rdquo;. The loop builds the pattern by adding 4; the rule 4n &minus; 1 jumps straight to any term. Question 3 in the Part B practice asks the same thing on paper.' }
      ]
    },
    {
      id: 'practice-a', tint: 'tint', eyebrow: 'Number practice, ours',
      h2: 'Ten Part A style questions: number, no calculator',
      lede: 'Our own questions on the two Part A categories: integers, decimals and powers; fractions, rates and ratios. They are not Alberta Education questions. Give it a quarter of an hour, pencil only.',
      body: [
        { kind: 'ol', items: [
          'Evaluate &minus;7 + 12.',
          'Evaluate 3 &minus; 9.',
          'Add 4.6 + 2.75.',
          'Multiply 5.2 &times; 3.',
          'Evaluate 2<sup>4</sup>.',
          'Write 10<sup>3</sup> as a whole number.',
          'Add 2/5 + 1/5.',
          'Multiply 3 &times; 2/7.',
          'A bag holds 12 red counters and 18 blue counters. Write the ratio of red to blue in lowest terms.',
          'A train travels 150 km in 3 hours at a steady speed. What is its rate in kilometres per hour?'
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>5.</b> On a number line, start at &minus;7 and move 12 to the right.',
          '<b>&minus;6.</b> Start at 3 and move 9 to the left, passing zero.',
          '<b>7.35.</b> Line up the decimal points: 4.60 + 2.75.',
          '<b>15.6.</b> 5 &times; 3 = 15 and 0.2 &times; 3 = 0.6.',
          '<b>16.</b> 2 &times; 2 &times; 2 &times; 2. A power means repeated multiplication, not 2 &times; 4.',
          '<b>1000.</b> 10 &times; 10 &times; 10.',
          '<b>3/5.</b> Same denominator, so add the numerators.',
          '<b>6/7.</b> 3 &times; 2 = 6 sevenths.',
          '<b>2:3.</b> 12:18, then divide both by 6.',
          '<b>50 km per hour.</b> 150 &divide; 3 = 50.'
        ] }
      ]
    },
    {
      id: 'practice-b', tint: 'deep', eyebrow: 'Wider practice, ours',
      h2: 'Eight questions in the spirit of Part B',
      lede: 'Also ours and not from Alberta: algebra and patterns, geometry and coordinates, measurement and data, still with no calculator. Allow about 25 minutes.',
      body: [
        { kind: 'ol', items: [
          'Solve n + 17 = 41.',
          'Solve 4m = 36.',
          'A pattern starts 3, 7, 11, 15, ... Describe the rule and find the 10th term.',
          'Points A(2, 3), B(6, 3) and C(6, 7) are three corners of a square. What are the coordinates of the fourth corner?',
          'A triangle has a base of 10 cm and a height of 6 cm. What is its area?',
          'A box measures 5 cm by 4 cm by 3 cm. What is its volume?',
          'Find the mean of 4, 7, 9, 10 and 10.',
          'A rectangle has a perimeter of 30 cm and a length of 9 cm. Find its width and its area.'
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>n = 24.</b> Subtract 17 from both sides: 41 &minus; 17 = 24. Check: 24 + 17 = 41.',
          '<b>m = 9.</b> Divide both sides by 4.',
          '<b>Start at 3 and add 4 each time; the 10th term is 39.</b> From the 1st term to the 10th there are 9 steps of 4: 3 + 36 = 39. The program above prints the same value.',
          '<b>(2, 7).</b> AB and BC are each 4 units long, so the fourth corner is 4 units above A.',
          '<b>30 cm<sup>2</sup>.</b> Half of base times height: (10 &times; 6) &divide; 2.',
          '<b>60 cm<sup>3</sup>.</b> 5 &times; 4 &times; 3.',
          '<b>8.</b> The total is 40, and 40 &divide; 5 = 8.',
          '<b>Width 6 cm, area 54 cm<sup>2</sup>.</b> Two lengths make 18 cm, leaving 12 cm for two widths, so each width is 6 cm. Area = 9 &times; 6 = 54.'
        ] },
        { kind: 'p', mt: true, html: 'If the fraction or ratio questions caused trouble, that is the place to spend the next few weeks, because the two Number categories together carry a large part of both parts. If the word problems were the trouble, read each one aloud and draw a quick sketch before calculating.' }
      ]
    },
    {
      id: 'weeks', tint: 'tint', eyebrow: 'Five weeks of review, ours',
      h2: 'A calm five-week review before 14 June 2027',
      lede: 'Our plan for the weeks before Part A on Monday 14 June 2027. It reviews Grade 6 math rather than rehearsing the test, in two short sessions a week.',
      body: [
        { kind: 'table', caption: 'Five-week Grade 6 math review (ours)', head: ['From', 'Topic', 'You will notice'], rows: [
          ['Monday 10 May 2027', 'Integers on a number line; decimals added, subtracted and multiplied by hand', 'Explains why 3 &minus; 9 is negative'],
          ['Monday 17 May 2027', 'Fractions: equivalent, added with like denominators, multiplied by whole numbers', 'Draws 3 &times; 2/7 before calculating it'],
          ['Monday 24 May 2027', 'Ratios, rates and powers', 'Simplifies a ratio and says what it means'],
          ['Monday 31 May 2027', 'Equations, patterns, coordinates, area, volume and the mean', 'Checks an equation by substituting back'],
          ['Monday 7 June 2027', 'Gentle mixed review, plus a single try of the official practice test', 'Relaxed, rested, nothing new']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why short sessions work',
          left: [
            'Twenty focused minutes, twice a week, with a few questions from earlier weeks mixed in, does more for a Grade 6 child than a long session the weekend before. Mixing old and new is what makes the methods stick.',
            'Each session ends with the child explaining one answer aloud. If they can teach it, they know it.'
          ],
          rightH3: 'After Grade 6',
          right: [
            'The PAT is a checkpoint, not the finish. Grade 7 brings integer operations of every kind and equations with letters on both sides in Alberta&rsquo;s draft junior high curriculum, and the fraction and decimal fluency built now carries straight into that.',
            'Our classes keep going past June for the same reason: the summer after Grade 6 is a good time to make fractions and negative numbers automatic.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A quick self-check',
    h2: 'How confident is your child with numbers?',
    lede: 'Our own stages, from teaching Grade 5 to 7 children online.',
    table: { caption: 'Number confidence in Grade 6 (ours)', head: ['Stage', 'What it looks like at the table'], rows: [
      ['1. Counting on fingers', 'Gets there, slowly, with lots of rubbing out'],
      ['2. Method follower', 'Uses column methods correctly but cannot say why they work'],
      ['3. Explainer', 'Explains a method aloud and spots their own slips'],
      ['4. Flexible thinker', 'Chooses a quicker route when one exists, and checks by estimating']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask for an explanation, not an answer. &ldquo;How did you know?&rdquo; tells you more than any worksheet score.',
      'Keep June calm. Alberta&rsquo;s own guide notes how much children pick up from the adults around them about a test.'
    ] },
    right: { h3: 'For students', ps: [
      'Estimate first. If 5.2 &times; 3 comes out as 156, the estimate of about 15 tells you something slipped.',
      'Draw it. Fractions, areas and coordinates are all easier on paper than in your head.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for children aged 9 to 13',
    lede: 'Each runs live online; the teacher stays the same from week to week.',
    bands: [
      { num: 'I', h3: 'Math', sub: 'Grades 4 to 8', courses: [
        { code: 'ALBE / M / 01', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Number facts and strategies, ages 5 to 10.' },
        { code: 'ALBE / M / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'The next step, from Grade 7.' },
        { code: 'ALBE / M / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'For children who want a challenge.' }
      ] },
      { num: 'II', h3: 'Contests', sub: 'Grades 6 to 8', courses: [
        { code: 'ALBE / C / 01', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'The Gauss track, Grades 7 and 8.' },
        { code: 'ALBE / C / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'For strong problem solvers.' },
        { code: 'ALBE / C / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Fast mental calculation methods.' }
      ] },
      { num: 'III', h3: 'Coding', sub: 'Ages 6 to 12', courses: [
        { code: 'ALBE / K / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Block coding, from loops to small games.' },
        { code: 'ALBE / K / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Games with AI help, ages 8 to 12.' },
        { code: 'ALBE / K / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'For older siblings, from 13.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live Grade 6 math classes',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in Alberta, at the batch&rsquo;s time.' },
      { time: 'Weekends', l: 'Weekend mornings, Alberta time.' },
      { time: '1-on-1', l: 'Around the school calendar and June.' }
    ],
    cells: [
      { h3: 'By hand', p: 'No calculator, as on the test.' },
      { h3: 'Said aloud', p: 'Every method explained.' },
      { h3: 'Pictures first', p: 'Fractions and areas drawn.' },
      { h3: 'Our own questions', p: 'Never copied from a test.' },
      { h3: 'Short and steady', p: 'Twice a week beats cramming.' },
      { h3: 'Class size', p: 'A batch of fifteen to twenty, or 1-on-1.' }
    ]
  },

  projectsH2: 'What older students build',
  projectsLede: 'Number sense grows into projects like these. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Parents and students on Google, in full.',

  fees: {
    h2: 'Fees',
    lede: 'Start with a free class. If you continue, one monthly fee covers eight live classes, shown below in your own currency, and you can stop when any month finishes.',
    free: ['Trial class at no cost', 'Bring the worksheet that stumped them', 'No card needed'],
    group: ['Fifteen to twenty children', 'One familiar teacher', 'A batch time you pick', 'Paid monthly'],
    one: ['Your child and a teacher', 'Times around the school week', 'Planned from their worksheets']
  },

  faq: {
    eyebrow: 'Questions from Grade 6 parents',
    h2: 'Grade 6 math PAT: common questions',
    items: [
      { q: 'What is the Grade 6 math PAT in Alberta?', a: 'Every June, Alberta\'s Grade 6 classes sit a provincial math test called a Provincial Achievement Test, or PAT. It has two parts: Part A, 15 questions on number, and Part B, 40 questions on the whole Grade 6 math curriculum.' },
      { q: 'When is the Grade 6 math PAT in 2027?', a: 'Part A is on Monday 14 June 2027 from 9 AM to 9:30 AM, and Part B on Wednesday 16 June 2027 from 9 AM to 10:15 AM. Every student may take up to double the official time.' },
      { q: 'Are calculators allowed on the Grade 6 math test?', a: 'No. Alberta\'s bulletin says a calculator is not permitted in Part A or Part B. Manipulatives such as a ruler, a protractor or graph paper are allowed.' },
      { q: 'What is on Part A?', a: 'Part A has 15 questions from the organizing idea Number, in two reporting categories: integers, decimals and powers, and fractions, rates and ratios. It is designed for 30 minutes, with up to 60 allowed.' },
      { q: 'What is on Part B?', a: 'Part B has 40 questions from all organizing ideas in Grade 6 math: number, algebra and patterns, geometry and coordinate geometry, and measurement and statistics. It is designed for 75 minutes, with up to 150 allowed.' },
      { q: 'Is the Grade 6 PAT based on the new curriculum?', a: 'Yes. Alberta implemented new Grades 4 to 6 math in the 2023-24 school year, and the 2026 to 2027 Grade 6 math bulletin describes the test in the new curriculum\'s terms of organizing ideas and reporting categories.' },
      { q: 'What is a sensible way to get ready for the Grade 6 PAT?', a: 'Know the Grade 6 math, done by hand. The province does not want PATs rehearsed or coached, so two short sessions a week on fractions, decimals, ratios and word problems beat any last-minute cramming.' },
      { q: 'Is there coding on the Grade 6 PATs?', a: 'Not on the math test. The Grade 6 science PAT reports on six categories, one of which is Computational Thinking.' },
      { q: 'When are lessons available for Alberta families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are agreed in Alberta time.' },
      { q: 'What do Grade 6 math classes cost?', a: 'Nothing for the trial class. After that, eight live lessons a month are billed as one monthly fee, cancellable when a month closes; the Fees panel here lists the current amounts.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Where to go next',
    lede: 'For Alberta families with a child in the upper elementary grades.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every page we have for Canada.' },
      { href: '/coding-classes-in-alberta', label: 'Classes in Alberta', p: 'Our main Alberta page, for every age.' },
      { href: '/online-math-tutor-6th-grade', label: 'Grade 6 math tutor', p: 'Private lessons for the PAT year.' },
      { href: '/online-math-tutor-5th-grade', label: 'Grade 5 math tutor', p: 'For the year before the PAT.' },
      { href: '/blog/how-to-help-a-child-understand-fractions', label: 'Understanding fractions', p: 'The idea under half of Part A.' },
      { href: '/gauss-contest-preparation', label: 'Gauss contest', p: 'Waterloo&rsquo;s contest from Grade 7.' },
      { href: '/canada-coding-curriculum-by-province', label: 'Coding in each province', p: 'How Canadian schools teach coding.' },
      { href: '/online-math-tutor-canada', label: 'Math tutor for Canada', p: 'Help for any grade.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free Grade 6 math class',
    lede: 'Send us one worksheet your child found hard this month. The first class starts from it and ends with a short plan to June.',
    readFirst: 'Reading before booking? Start with <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, then see the <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">Middle School Mathematics syllabus</a> for the Grade 6 to 8 route.',
    note: 'Lessons are live on video, with teachers in India, so no driving and no visitors. Alberta families usually find WhatsApp the quickest way to reach us.',
    formNote: 'We never need a card to book the free class.'
  },

  footer: {
    cols: [
      { h4: 'Grade 6 math', links: [
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle School Mathematics' },
        { href: '/courses/maths-through-coding', label: 'Maths through coding' },
        { href: '/online-math-tutor-6th-grade', label: 'Grade 6 math tutor' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-alberta', label: 'Classes in Alberta' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' },
        { href: '/canada-coding-curriculum-by-province', label: 'Coding by province' }
      ] }
    ],
    bottomRight: 'By hand, out loud, then checked'
  },

  personalityCss: `
.ag-root.ag-albe .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-albe .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-albe .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-albe .ag-table caption { text-align: left; font-style: normal; }
.ag-root.ag-albe .ag-steps li { margin-bottom: 0.5rem; line-height: 1.6; }
.ag-root.ag-albe .ag-code-head span { text-transform: uppercase; letter-spacing: 0.04em; }
`,

  dossier: {
    curriculumAuthority: 'Alberta Education and Childcare: 2026-2027 Grade 6 Mathematics Subject Bulletin (Part A and Part B content, no calculator, excusal rule, manipulatives, 12 x 12 accommodation, blueprint and reporting categories, complexity, standards, separate raw scores); General Information Bulletin 2026-2027 for PATs (Science 11 June, Mathematics 14 and 16 June 2027, double time, ISPs late September 2027); 2026-2027 Grade 6 Parent Guide (who writes, discourages rehearsal and coaching, science PAT categories including Computational Thinking); alberta.ca Provincial Achievement Tests (June for Grade 6, digital); alberta.ca curriculum-mathematics (Grade 6 snapshot) and curriculum-subject-areas (Grades 4 to 6 math 2023-24).',
    localProject: 'Two original worked problems done by hand (6 x 3/4 = 4 1/2 cups; a 3 m by 2 m bed 0.5 m deep holds 3 cubic metres, so 12 bags of 0.25), a Python loop that prints the pattern 3, 7, 11, ... to 39 and checks the rule 4n - 1, ten original Part A style and eight original Part B style questions with checked answers, and a five-week review to Monday 14 June 2027. Lesson family: number sense, explained aloud.',
    requiredMentions: ['Number: Integers, Decimals, and Powers', 'The use of a calculator is not permitted in Part A or Part B.', 'the student should be excused from the provincial achievement test', 'Monday 14 June 2027', 'Wednesday 16 June 2027', 'Number: Fractions, Rates, and Ratios', 'Geometry and Coordinate Geometry', 'Where computational thinking comes in', 'A garden bed is 3 m long and 2 m wide', 'Shortcut for term 10: 39'],
    sources: [
      { claim: 'Part A and Part B content, calculator rule, accommodations, blueprint, reporting categories, complexity, standards, raw scores.', url: 'https://www.alberta.ca/system/files/edc-math-6-subject-bulletin-2026-27.pdf' },
      { claim: 'Grade 6 science and mathematics PAT dates for June 2027; ISPs late September 2027.', url: 'https://www.alberta.ca/system/files/ecc-pat-administration-schedules.pdf' },
      { claim: 'Who writes the tests; coaching discouraged; science PAT categories.', url: 'https://www.alberta.ca/system/files/edc-grade-6-parent-guide-2026-27.pdf' },
      { claim: 'PATs annual in grades 6 and 9; June for Grade 6; digital format.', url: 'https://www.alberta.ca/provincial-achievement-tests' },
      { claim: 'Grade 6 math snapshot; new Grades 4 to 6 math in 2023-24.', url: 'https://www.alberta.ca/curriculum-mathematics' }
    ],
    rejectedClaims: [
      'Released Grade 6 items or practice-test questions: none reproduced or adapted; every question is ours.',
      'Specific Grade 6 learning outcomes beyond alberta.ca\'s snapshot: the curriculum on LearnAlberta needs JavaScript, so only Alberta\'s summary and the bulletin are quoted.',
      'That coding is on the math PAT: it is not; the page says Computational Thinking is a science PAT category only.',
      'School results or rankings: none mentioned.',
      'Any connection with Alberta Education and Childcare or a school authority: none, and the page says so.'
    ]
  }
};
