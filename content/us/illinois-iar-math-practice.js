'use strict';
// Illinois IAR math practice (ag- state-test door; UK and US exams cluster, row US030). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. isbe.net timed out on 31 October 2026 (no connection on www or
// bare host); not retried. Every fact below was read raw with curl on 31 October 2026 from the official Illinois testing
// portal run for ISBE, il.mypearsonsupport.com ("Illinois Support Page"); copies in
// keyword-research-2026-09/uk-us-gap/src/illinois-iar-math-practice/:
//  - Portal home: "the Illinois Assessment of Readiness and Illinois Science Assessment"; "The Illinois Administration
//    Platform, formerly PearsonAccess next". The name in current use is Illinois Assessment of Readiness (IAR).
//  - IAR Summative Resources: "IAR Spring 2027 Testing Window - Online Testing 3/1/27 - 4/16/27"; "Paper Testing 3/1/27 -
//    4/2/27".
//  - IAR Unit Testing Times PDF: math grades 3-5 units 1 to 3 non-calculator, 60 each; grades 6 and 7 unit 1 non-calculator
//    and calculator parts, units 2 and 3 calculator, 60; grade 8 unit 1 non-calculator, units 2 and 3 calculator, 60 each.
//  - 2026 Test Coordinator Manual: "strictly timed, and no additional time may be permitted (with the exception of an
//    extended time accommodation"; section times table "Mathematics Grade 3-8 60 60 60"; calculators: grades 3-5
//    accommodation only, grades 6-7 "four-function calculators with square root and percentage functions", grade 8
//    "scientific calculators", embedded in TestNav; computer-based, paper only for students who need it; "one of the
//    mathematics sections is split into two parts: a non-calculator part and a calculator part (Grade 6 and Grade 7)".
//  - 2026 Computer-Based Mathematics proctor script: "Each section of the Mathematics assessment is a 60 minute timed
//    test."; "Once you start the calculator section, you cannot return to Part A."; "Text-to-Speech is embedded on all math
//    tests."
//  - Math and ELA Tools guide: calculator policy by grade; rulers, protractors (grades 4 to 7 provided, grade 8 optional);
//    grade 8 optional geometry tools (tracing paper, reflection tools, straight edges, compasses).
//  - ISBE Math Test Scoring Expectations (2.28.25): reference sheets grades 5 to 8 only, none in grades 3 and 4; "The
//    correct answer, with no work shown or explanation provided, will not receive the top score point."; "Simply stating
//    that one used a calculator to find the answer is not sufficient"; "Avoid run-on equations." with its own Do/Don't.
//  - IAR Parent Score Report Interpretation Guide (May 2026): grades 3-8, Illinois Learning Standards; "IAR scale scores
//    range from 650 to 850 for all tests."; four levels "Level 4: Above Proficient", "Level 3: Proficient", "Level 2:
//    Approaching Proficient", "Level 1: Below Proficient"; "Students performing at levels 3 and 4 were proficient or above
//    proficient and have demonstrated readiness for the next grade level/course."; Higher, Middle and Lower readiness
//    indicators; math focus statement; Appendix A math cuts (G3 705/732/781, G4 708/740/784, G5 709/740/782, G6 705/742/773,
//    G7 712/745/781, G8 705/745/791 for Levels 2/3/4).
//  - 2026 Math ISR mockup: four Areas of Readiness (Major Content; Additional and Supporting Content; Expressing
//    Mathematical Reasoning; Modeling & Application) with grade-level expected skills.
//  - Practice Items page: practice items per grade on TestNav, the Student Readiness Tool.
// Dashes written "to". No practice item or released item reproduced; the state's own Do/Don't lines quoted are scoring
// guidance, not test items.
// Our own material, labelled: the grade 5 garden-bed constructed-response example (two answers compared), the grade 7
// discount example, the ten-item practice set, the eight-week plan, the per-grade priorities.
// Lesson family: writing an explanation that earns the top score point on a timed test.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const IL = 'https://il.mypearsonsupport.com';
const TR = IL + '/resources/training-resources';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'ILLINOIS IAR MATH', blurb: 'The Illinois Assessment of Readiness math test, grades 3 to 8: three timed 60-minute units, calculator rules by grade, four levels on a 650 to 850 scale, the spring 2027 window and original practice.' },
  slug: 'illinois-iar-math-practice',
  code: 'iip',
  accent: '#93504F',
  accentRationale: 'Illinois IAR math practice: a prairie brick rose #93504F as allocated, 5.66:1 on paper #FBF8F2, warm without echoing the New York brick or the Texas pages',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-classes-in-illinois', name: 'Illinois' }],
  routeLabel: 'Illinois IAR math practice',
  title: 'Illinois IAR Math Practice: The Spring 2027 Test, Grades 3 to 8',
  description: 'Illinois IAR math practice, grades 3 to 8: three timed units, calculator rules, four levels, cut scores and the March 1 to April 16, 2027 window, with practice.',
  ogDescription: 'Three units of exactly 60 minutes, a calculator part you cannot leave and come back from, and written answers that need their working. The Illinois Assessment of Readiness math test, from the state portal.',
  twitterDescription: 'The Illinois Assessment of Readiness math test from the official portal, with original practice.',
  pageName: 'Illinois IAR Math Practice',
  webPageDescription: 'A guide for Illinois families to the Illinois Assessment of Readiness in mathematics, grades 3 to 8, built from the official Illinois testing portal&rsquo;s manuals, proctor script, unit testing times, scoring expectations and parent score guide, with original worked examples and a practice set.',
  courseDescription: 'Live online math for Illinois students in grades 3 to 8, taught to the Illinois Learning Standards, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Illinois IAR math practice',
  navLinks: [
    { href: '#units', label: 'Units and timing' },
    { href: '#calculators', label: 'Calculators' },
    { href: '#written', label: 'Written answers' },
    { href: '#levels', label: 'Levels' },
    { href: '#window', label: '2027 window' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Illinois &middot; Grades 3 to 8 &middot; From the state testing portal',
  h1: 'Illinois IAR math practice for spring 2027',
  lede: 'The Illinois Assessment of Readiness tests math in three units, and every one of them stops at 60 minutes. The state&rsquo;s coordinator manual calls the test strictly timed. That single fact shapes how an Illinois child should prepare: knowing the math is necessary, but so is finishing, and so is writing an explanation that a scorer can credit, because the state&rsquo;s own scoring guidance says a right answer with no work shown will not get the top score point.',
  secondaryCta: { href: '#written', label: 'See a top-score explanation' },
  wa: 'Hello Modern Age Coders, my child in Illinois takes the IAR math test in the spring. Could we book a free first class?',
  heroNote: 'Live math since 2020 &middot; 10,000+ students &middot; lessons on Central Time',
  spec: [
    ['Test', 'Illinois Assessment of Readiness, math'],
    ['For', 'ISBE, grades 3 to 8'],
    ['Units', 'Three, each 60 minutes'],
    ['Timing', 'Strictly timed'],
    ['Scale', '650 to 850'],
    ['Online window 2027', 'March 1 to April 16'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Illinois Assessment of Readiness (IAR) is the Illinois State Board of Education&rsquo;s math and ELA test for grades 3 to 8, taken on computer in three strictly timed 60-minute math units and scored from 650 to 850 in four levels. The spring 2027 online window is March 1 to April 16, 2027. Modern Age Coders prepares Illinois children for it live online, as a group batch or 1-on-1, in our Elementary Mathematics course.',

  picks: {
    eyebrow: 'Courses for Illinois students',
    h2: 'Three courses matched to the Illinois Learning Standards',
    lede: 'Each one practises the timed, explain-your-thinking style of the IAR from the first month.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'IIP / 01', title: 'Third to fifth grade', note: 'Times tables, fractions and volume, with no calculator in sight.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'IIP / 02', title: 'Middle school, grades 6 to 8', note: 'Ratios, rational numbers, equations and functions.' },
      { course: 'mental-maths-mastery-kids', code: 'IIP / 03', title: 'Mental math', note: 'Speed and accuracy for the non-calculator units.' }
    ]
  },

  sections: [
    {
      id: 'units', tint: 'tint', eyebrow: 'Units and timing',
      h2: 'How long is the IAR math test, and how is it split up?',
      lede: 'Three units of 60 minutes each in every grade from 3 to 8. The time is fixed: the proctor script says each section is a 60 minute timed test and the proctor stops students when time is reached.',
      body: [
        { kind: 'table', caption: 'IAR mathematics units by grade (IAR Unit Testing Times and 2026 Test Coordinator Manual, Illinois testing portal, read 31 October 2026)', head: ['Grade', 'Unit 1', 'Unit 2', 'Unit 3'], rows: [
          ['3, 4 and 5', 'Non-calculator, 60 minutes', 'Non-calculator, 60 minutes', 'Non-calculator, 60 minutes'],
          ['6 and 7', 'Non-calculator part, then calculator part, 60 minutes in total', 'Calculator, 60 minutes', 'Calculator, 60 minutes'],
          ['8', 'Non-calculator, 60 minutes', 'Calculator, 60 minutes', 'Calculator, 60 minutes']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Strictly timed means strictly',
          left: [
            'The 2026 Test Coordinator Manual states that the IAR ELA and math tests are &ldquo;strictly timed, and no additional time may be permitted&rdquo;, with the exception of a documented extended time accommodation.',
            'So pacing is a skill we teach directly. A child who spends twelve minutes on one hard question in a 60-minute unit has borrowed that time from every question after it.'
          ],
          rightH3: 'The grade 6 and 7 trap',
          right: [
            'In grades 6 and 7, unit 1 has a Part A without a calculator and a Part B with one, sharing the same 60 minutes. The proctor script warns students: &ldquo;Once you start the calculator section, you cannot return to Part A.&rdquo;',
            'We practise the switch: finish and check Part A, decide, then move on. Leaving Part A half done to grab the calculator is a mistake a child only needs to make once in practice.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + IL + '/resources/training-resources/IARUnitTestingTimes.pdf" rel="noopener" target="_blank">IAR Unit Testing Times</a> and <a class="ag-inline-link" href="' + IL + '/iar-summative-resources/" rel="noopener" target="_blank">IAR Summative Resources</a>, Illinois Support Page, read 31 October 2026. The ISBE website did not respond when we tried it. We have no connection with ISBE or its testing contractor.' }
      ]
    },
    {
      id: 'calculators', tint: 'deep', eyebrow: 'Tools',
      h2: 'Can you use a calculator on the IAR math test?',
      lede: 'Not in grades 3 to 5. Grades 6 and 7 get a four-function calculator with square root and percentage keys in the calculator parts; grade 8 gets a scientific calculator.',
      body: [
        { kind: 'table', caption: 'IAR calculators, reference sheets and tools by grade (Math and ELA Tools guide, Test Coordinator Manual and ISBE Math Test Scoring Expectations, Illinois testing portal)', head: ['Grade', 'Calculator', 'Reference sheet', 'Other tools'], rows: [
          ['3', 'None, except as an accommodation', 'None provided', 'Ruler'],
          ['4', 'None, except as an accommodation', 'None provided', 'Ruler and protractor'],
          ['5', 'None, except as an accommodation', 'Illinois grade 5 sheet', 'Ruler and protractor'],
          ['6 and 7', 'Four-function with square root and percentage, calculator parts only', 'Illinois grade sheet', 'Ruler and protractor'],
          ['8', 'Scientific, calculator units only', 'Illinois grade 8 sheet', 'Ruler; protractor, tracing paper, reflection tools, straight edges and compasses optional']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The practice-item reference sheet is different',
          left: [
            'ISBE&rsquo;s scoring expectations document points out that the reference sheets inside the practice item sets are not the Illinois sheets used on the IAR. A grade 4 practice set shows a reference sheet, but the grade 4 IAR has none.',
            'For a fourth grader that matters: perimeter and area formulas have to be known, not looked up. We drill them as facts in grades 3 and 4.'
          ],
          rightH3: 'Built into the platform',
          right: [
            'The calculator sits in the TestNav toolbar during calculator units. Schools may also allow hand-held calculators that meet the policy, with memory cleared before and after testing.',
            'Text-to-speech is embedded on all math tests, according to the proctor script, so a child who wants questions read aloud needs working headphones.'
          ] }
      ]
    },
    {
      id: 'written', tint: 'tint', eyebrow: 'Written answers',
      h2: 'How are IAR math constructed-response answers scored?',
      lede: 'For the reasoning as well as the number. ISBE&rsquo;s scoring expectations say the correct answer with no work shown or explanation provided will not receive the top score point.',
      body: [
        { kind: 'ol', items: [
          '<b>Our grade 5 problem.</b> A garden bed is 3/4 of a yard wide and 2 2/3 yards long. What is its area? Explain how you found it.',
          '<b>Answer A, which we would expect to fall short.</b> &ldquo;2 square yards. I used the calculator.&rdquo; The number is right, but there is no work, and ISBE&rsquo;s guidance says that simply stating that one used a calculator is not sufficient. In grade 5 there is no calculator anyway.',
          '<b>Answer B, written to the guidance.</b> &ldquo;Area = width x length. 2 2/3 = 8/3. 3/4 x 8/3 = 24/12 = 2. The area is 2 square yards.&rdquo; Each step is a separate, true equation, the mixed number is converted openly, and the answer carries its unit.',
          '<b>Why we avoid run-on equations.</b> ISBE gives the example &ldquo;3+4=7, and 7+5= 12&rdquo; as the right way and &ldquo;3+4=7+5=12&rdquo; as the wrong way, because the second line claims that 7 equals 12. Children write run-ons all the time in class; on the IAR it can cost a point.',
          '<b>Every bullet answered.</b> The guidance tells students that the entire question, including every bullet, must be addressed for full credit. We teach children to tick off each bullet in the question as they answer it.'
        ] },
        { kind: 'p', mt: true, html: 'The garden-bed problem and both answers are ours, written to illustrate ISBE&rsquo;s public scoring expectations. They are not IAR items and we make no claim about how any real response would be scored.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + TR + '/ISBE%20Math%20Test%20Scoring%20Expectations_2.28.25_Final_1.2.pdf" rel="noopener" target="_blank">ISBE Math Test Scoring Expectations for Constructed Response Questions and Reference Sheets</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'readiness', tint: 'deep', eyebrow: 'What is reported',
      h2: 'What does the IAR math test measure?',
      lede: 'The Illinois Learning Standards for the grade, reported in four Areas of Readiness. The parent guide says the math tests focus on applying skills and concepts, multi-step problems that need abstract reasoning, and modeling real-world problems.',
      body: [
        { kind: 'table', caption: 'IAR mathematics Areas of Readiness, with examples from the 2026 Math ISR expected skills (Illinois testing portal, read 31 October 2026)', head: ['Area of Readiness', 'What it means', 'Grade 3 example', 'Grade 6 example'], rows: [
          ['Major Content', 'The most important grade-level concepts', 'Multiplication and division within 100; area and multiplication; fractions', 'Ratios and unit rates; dividing fractions by fractions; expressions and equations'],
          ['Additional and Supporting Content', 'Supporting skills that strengthen the major work', 'Place value, perimeter, scaled graphs', 'Statistical variability, distributions, area and surface area'],
          ['Expressing Mathematical Reasoning', 'Explaining thinking and why a solution makes sense', 'Equal groups, data tables, properties of operations', 'Variable relationships, positive and negative numbers'],
          ['Modeling and Application', 'Solving real-world problems with numbers, symbols or models', 'One-step measurement and estimation problems', 'Percentage, ratio and signed-number problems']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Higher, Middle, Lower',
          left: [
            'Each Area of Readiness gets a gauge on the report pointing to Higher, Middle or Lower. The guide explains these compare the student with students who were proficient or approaching proficient.',
            'A Lower on Expressing Mathematical Reasoning is the most fixable rating on the report. It usually means the math is there and the writing is not.'
          ],
          rightH3: 'Item types',
          right: [
            'The parent guide says students also answered selected-response and fill-in-the-blank items, alongside the constructed responses. The Student Readiness Tool on the portal walks children through the TestNav tools and item types.',
            'We use it once, early, so the platform is familiar; after that, lesson time goes to math.'
          ] }
      ]
    },
    {
      id: 'levels', tint: 'tint', eyebrow: 'Results',
      h2: 'What are the IAR performance levels and cut scores for math?',
      lede: 'Four levels on a scale from 650 to 850: Below Proficient, Approaching Proficient, Proficient and Above Proficient. Levels 3 and 4 mean the student has demonstrated readiness for the next grade.',
      body: [
        { kind: 'table', caption: 'IAR mathematics cut scores by grade (IAR Parent Score Report Interpretation Guide, Appendix A, updated May 2026)', head: ['Grade', 'Level 2 Approaching Proficient from', 'Level 3 Proficient from', 'Level 4 Above Proficient from'], numCols: [1, 2, 3], rows: [
          ['3', '705', '732', '781'],
          ['4', '708', '740', '784'],
          ['5', '709', '740', '782'],
          ['6', '705', '742', '773'],
          ['7', '712', '745', '781'],
          ['8', '705', '745', '791']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the levels say',
          left: [
            'The parent guide&rsquo;s wording is direct: students at levels 3 and 4 &ldquo;were proficient or above proficient and have demonstrated readiness for the next grade level/course.&rdquo; Level 1 starts at 650, the bottom of the scale.',
            'The guide adds that a scale score of 800 on one form of the grade 8 test should mean the same as 800 on any other form, which is why the cut points are fixed by grade.'
          ],
          rightH3: 'Reading a near miss',
          right: [
            'A grade 6 student on 738 is four points under Proficient. In our experience the quickest gains at that distance come from finishing every unit and writing complete explanations, not from new topics.',
            'Reports reach families through the Family Portal, which, when we read it, said the PDF student reports would be available on August 10.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + IL + '/resources/reporting/parent/IAR%20Scoring%20Interpretation%20Guide%20for%20Parents%20Final.pdf" rel="noopener" target="_blank">IAR Parent Score Report Interpretation Guide</a>, Illinois testing portal, read 31 October 2026 from the portal.' }
      ]
    },
    {
      id: 'window', tint: 'deep', eyebrow: 'Spring 2027',
      h2: 'When is the IAR test in 2027?',
      lede: 'The online testing window for spring 2027 runs from March 1 to April 16, 2027. Paper testing, used only by students who need it, closes earlier, on April 2, 2027.',
      body: [
        { kind: 'table', caption: 'IAR key dates, spring 2027 (IAR Summative Resources, Illinois testing portal, read 31 October 2026)', head: ['Event', 'Dates'], rows: [
          ['IAR spring 2027 testing window, online', 'March 1, 2027 to April 16, 2027'],
          ['IAR spring 2027 testing window, paper', 'March 1, 2027 to April 2, 2027'],
          ['Training administration live', 'December 22, 2026'],
          ['Manuals due in districts', 'January 11 to January 14, 2027']
        ] },
        { kind: 'p', mt: true, html: 'The manual says sections may be scheduled at any time on regular school days during the testing window, and all sections, including make-ups, must finish inside it. Because the window opens on March 1, a plan that starts after spring break is too late. Ask the school which week your child&rsquo;s math units fall in.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice',
      h2: 'IAR math practice: ten questions we wrote, grades 3 to 8',
      lede: 'Ours, at grade level. The starred ones want a written explanation, like a constructed-response item; the rest want a number.',
      body: [
        { kind: 'table', caption: 'Original practice set (ours, not IAR items), with answers', head: ['Grade', 'Question', 'Calculator?', 'Answer'], rows: [
          ['3', 'What is 8 x 7?', 'No', '56'],
          ['3', 'Is 1/2 of a small pizza the same amount as 1/2 of a large pizza? Explain.*', 'No', 'No: the halves are of different wholes'],
          ['4', 'Find the perimeter of a rectangle 9 cm by 14 cm.', 'No', '46 cm'],
          ['4', 'Write 0.7 as a fraction and as hundredths.', 'No', '7/10 and 70/100'],
          ['5', 'What is 4.6 x 3?', 'No', '13.8'],
          ['5', 'How many 1/3-cup scoops are in 4 cups? Show your work.*', 'No', '12'],
          ['6', 'What is 15 percent of 80?', 'Calculator part', '12'],
          ['6', 'Evaluate 3x&sup2; when x = 4.', 'Non-calculator part', '48'],
          ['7', 'After 25 percent off, a jacket costs 48. Find the price before the sale and explain.*', 'Calculator', '64'],
          ['8', 'Is (2, 7) a solution of y = 3x + 1? Explain.*', 'Either', 'Yes: 3 x 2 + 1 = 7']
        ] },
        { kind: 'p', mt: true, html: 'The official practice items for each grade, with their answer keys, are on the <a class="ag-inline-link" href="' + IL + '/practice-items/" rel="noopener" target="_blank">Practice Items page</a> of the Illinois portal. The portal notes they let students experience sample items in an environment like the real test. We save them for the final weeks and teach with our own problems before that.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan',
      h2: 'How to prepare for the IAR math test in eight weeks',
      lede: 'Our plan, counted back from the start of the March 1 to April 16, 2027 window, so it begins in early January.',
      body: [
        { kind: 'ol', items: [
          '<b>Week 1: one timed unit.</b> Sixty minutes of our own grade-level questions, to see both accuracy and how far the child gets.',
          '<b>Weeks 2 and 3: Major Content.</b> The grade&rsquo;s most important concepts from the Areas of Readiness table.',
          '<b>Week 4: explanations.</b> Two constructed-response questions every lesson, written to ISBE&rsquo;s scoring expectations: separate equations, labels and units, every bullet answered.',
          '<b>Week 5: the calculator rule for the grade.</b> No calculator at all for grades 3 to 5; the Part A to Part B switch for grades 6 and 7; scientific calculator fluency for grade 8.',
          '<b>Week 6: pacing.</b> Timed half-units, with a rule for when to move on from a hard question.',
          '<b>Week 7: the official practice items.</b> The grade&rsquo;s set on the portal, plus the Student Readiness Tool if not done yet.',
          '<b>Week 8: three units on three days.</b> A full rehearsal at 60 minutes each, then a light week.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two habits that earn points',
          left: [
            'One equation per line, and a final sentence that answers the question with a unit. Both come straight from ISBE&rsquo;s guidance.'
          ],
          rightH3: 'One habit that loses them',
          right: [
            'Running out of time with easy questions unanswered at the end of a unit. Pacing practice fixes this faster than anything else.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Grade by grade',
    h2: 'The IAR math topics we put first, grade by grade',
    lede: 'Our reading of the state&rsquo;s Major Content statements for each grade.',
    table: { caption: 'Priorities by grade (expected skills from the 2026 Math ISR; priorities ours)', head: ['Grade', 'Put first', 'Then'], rows: [
      ['3', 'All the times-table facts to 10 x 10', 'Area as multiplication and unit fractions'],
      ['4', 'Long multiplication and division with remainders', 'Fraction equivalence and adding fractions'],
      ['5', 'Adding and subtracting unlike fractions', 'Decimal operations and volume'],
      ['6', 'Ratios and unit rates', 'Dividing fractions and one-variable equations'],
      ['7', 'Operations with negative numbers and fractions', 'Proportional relationships and probability'],
      ['8', 'Linear equations and functions', 'Transformations and the Pythagorean Theorem']
    ] },
    left: { h3: 'For parents', ps: [
      'Look at the Higher, Middle and Lower gauges on last year&rsquo;s report, especially Expressing Mathematical Reasoning.',
      'Ask the school for the week of the math units; the window is wide and schools choose.'
    ] },
    right: { h3: 'For students', ps: [
      'Watch the clock at 20 and 40 minutes. If you are behind, skip ahead and come back.',
      'Write the answer as a sentence with its unit. It takes five seconds.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for Illinois families',
    lede: 'From third-grade facts to algebra in eighth grade.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Grades 3 to 5', courses: [
        { code: 'IIP / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'The full grades 1 to 5 sequence.' },
        { code: 'IIP / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'For three calculator-free units.' },
        { code: 'IIP / E / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus mental math', blurb: 'Number sense for younger children.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'IIP / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Pre-algebra and geometry.' },
        { code: 'IIP / M / 02', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'Contest problems for keen students.' },
        { code: 'IIP / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Python for patterns and graphs.' }
      ] },
      { num: 'III', h3: 'Next', sub: 'High school', courses: [
        { code: 'IIP / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra 1 in grade 8 or 9.' },
        { code: 'IIP / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry to calculus.' },
        { code: 'IIP / H / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'For the Illinois junior year later on.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons set on Central Time for Illinois',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school CT', l: 'Weekly lessons through the school year.' },
      { time: 'Weekends', l: 'Timed 60-minute units in February.' },
      { time: '1-on-1', l: 'Explanation coaching, one answer at a time.' }
    ],
    cells: [
      { h3: 'Timed units', p: 'Sixty minutes, practised until it feels normal.' },
      { h3: 'Illinois standards', p: 'Lessons follow the grade&rsquo;s Major Content.' },
      { h3: 'Written reasoning', p: 'To ISBE&rsquo;s scoring expectations.' },
      { h3: 'Calculator rules', p: 'Part A and Part B practised in grades 6 and 7.' },
      { h3: 'Official items late', p: 'The portal practice items, for rehearsal.' },
      { h3: 'Two formats', p: 'A batch of 15 to 20 students, or private lessons.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Some of our students turn math into small programs; a few are on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, exactly as posted.',

  fees: {
    h2: 'Fees',
    lede: 'Monthly fees in US dollars and no long contract: Illinois families often start in January and stop once the April window closes.',
    free: ['A free first class', 'Bring last year&rsquo;s IAR report', 'No card details'],
    group: ['Fifteen to twenty students', 'One teacher all spring', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Timed to your school&rsquo;s test week', 'Flexible times']
  },

  faq: {
    eyebrow: 'Illinois families ask',
    h2: 'Illinois IAR math: questions from parents',
    items: [
      { q: 'When is the IAR test in 2027?', a: 'The Illinois testing portal lists the spring 2027 online window as March 1 to April 16, 2027, and paper testing from March 1 to April 2, 2027. Schools schedule their own units inside the window.' },
      { q: 'Is the IAR still called the IAR?', a: 'Yes. The official Illinois testing portal, which hosts the 2027 key dates, calls it the Illinois Assessment of Readiness. It covers ELA and math in grades 3 to 8.' },
      { q: 'How long is the IAR math test?', a: 'Three units of 60 minutes each in every grade from 3 to 8. The coordinator manual says the test is strictly timed and no additional time may be given beyond a documented extended time accommodation.' },
      { q: 'Is a calculator allowed on the IAR math?', a: 'Third, fourth and fifth graders have no calculator unless it is an accommodation. Grades 6 and 7 use a four-function calculator with square root and percentage in calculator parts, and grade 8 a scientific calculator.' },
      { q: 'What is a good score on the IAR math?', a: 'Level 3, Proficient, is the target the state treats as ready for the next grade. In grade 5 math, Proficient starts at 740 and Above Proficient at 782, on a scale from 650 to 850.' },
      { q: 'What are the four IAR levels?', a: 'Level 1 Below Proficient, Level 2 Approaching Proficient, Level 3 Proficient and Level 4 Above Proficient. The parent guide says levels 3 and 4 show readiness for the next grade level or course.' },
      { q: 'Does my child need to show work on the IAR math?', a: 'On constructed-response questions, yes. ISBE\'s scoring expectations say a correct answer with no work or explanation will not receive the top score point, and saying you used a calculator is not enough.' },
      { q: 'Is there a reference sheet on the IAR math test?', a: 'In grades 5 to 8 there is an Illinois reference sheet. Grades 3 and 4 have none, even though some practice sets show one, so those formulas need to be known.' },
      { q: 'Where can I find IAR math practice tests?', a: 'The Illinois portal\'s Practice Items page has items for each grade from 3 to 8 with answer keys, plus the Student Readiness Tool for the TestNav platform.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set on Central Time.' },
      { q: 'Are you connected with ISBE?', a: 'No. Modern Age Coders is a private online school and has no relationship with the Illinois State Board of Education, any district or the testing contractor. Our facts come from the state\'s public testing documents, each one named on this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Illinois parents, by grade and by city.',
    items: [
      { href: '/online-math-tutor-4th-grade', label: 'Fourth grade math tutoring', p: 'No reference sheet, no calculator.' },
      { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math tutoring', p: 'The first year with a calculator part.' },
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'Functions and the scientific calculator.' },
      { href: '/common-core-math-vs-traditional-math', label: 'Common Core vs traditional math', p: 'Why explanations are graded.' },
      { href: '/best-coding-classes-for-kids-in-chicago', label: 'Coding classes in Chicago', p: 'Our Chicago page.' },
      { href: '/coding-classes-in-illinois', label: 'Coding classes in Illinois', p: 'Our Illinois page.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Share last year&rsquo;s IAR report, or a photo of homework where your child had to explain an answer. Teacher and child rewrite it together, to the state&rsquo;s scoring expectations, during that first lesson.',
    readFirst: 'Learn <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or see every <a class="ag-inline-link" href="/courses">course</a> we run.',
    note: 'Our teachers teach from India on a timetable fixed in Central Time, so lessons fit after an Illinois school day or on weekends. WhatsApp is the quickest way to ask us anything.',
    formNote: 'The first class is free and no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-3rd-grade', label: 'Grade 3 math' },
        { href: '/online-math-tutor-5th-grade', label: 'Grade 5 math' },
        { href: '/online-math-tutor-7th-grade', label: 'Grade 7 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'Illinois and the US', links: [
        { href: '/coding-classes-in-illinois', label: 'Illinois' },
        { href: '/best-coding-classes-for-kids-in-chicago', label: 'Chicago' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Three units, sixty minutes each'
  },

  personalityCss: `
.ag-root.ag-iip .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-iip .ag-capsule { border-left-width: 6px; }
.ag-root.ag-iip .ag-table caption { text-align: left; font-weight: 500; font-style: italic; }
.ag-root.ag-iip .ag-table td.ag-num { font-variant-numeric: tabular-nums; text-align: center; }
.ag-root.ag-iip .ag-steps li { padding-bottom: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Illinois testing portal for ISBE (il.mypearsonsupport.com), read raw 31 October 2026, because isbe.net did not respond: portal home; IAR Summative Resources with spring 2027 key dates; IAR Unit Testing Times; 2026 Test Coordinator Manual; 2026 Computer-Based Mathematics proctor script; Math and ELA Tools guide; ISBE Math Test Scoring Expectations; IAR Parent Score Report Interpretation Guide (May 2026); 2026 Math ISR mockup; Practice Items page.',
    localProject: 'Our grade 5 garden-bed example (3/4 x 8/3 = 2 square yards) with two answers compared against ISBE&rsquo;s scoring expectations, our grade 7 discount question, our ten-item practice set with calculator status, our eight-week plan and grade priorities. Lesson family: an explanation that earns the top score point on a timed test.',
    requiredMentions: ['strictly timed, and no additional time may be permitted', 'Once you start the calculator section, you cannot return to Part A.', 'will not receive the top score point', 'were proficient or above proficient and have demonstrated readiness for the next grade level/course.', 'March 1, 2027 to April 16, 2027', 'March 1, 2027 to April 2, 2027', 'Four-function with square root and percentage, calculator parts only', 'Expressing Mathematical Reasoning', 'Level 3 Proficient from', '3/4 x 8/3 = 24/12 = 2'],
    sources: [
      { claim: 'IAR Summative Resources and spring 2027 key dates.', url: IL + '/iar-summative-resources/' },
      { claim: 'IAR Unit Testing Times.', url: IL + '/resources/training-resources/IARUnitTestingTimes.pdf' },
      { claim: '2026 IAR Test Coordinator Manual.', url: TR + '/IL1164973_ILTCM_Sp26_Webtag.pdf' },
      { claim: 'ISBE Math Test Scoring Expectations.', url: TR + '/ISBE%20Math%20Test%20Scoring%20Expectations_2.28.25_Final_1.2.pdf' },
      { claim: 'IAR Parent Score Report Interpretation Guide.', url: IL + '/resources/reporting/parent/IAR%20Scoring%20Interpretation%20Guide%20for%20Parents%20Final.pdf' },
      { claim: 'IAR Practice Items.', url: IL + '/practice-items/' }
    ],
    rejectedClaims: [
      'isbe.net (www and bare host) timed out on 31 October 2026; not retried. Nothing is quoted from ISBE pages, including the Performance Level Descriptors and evidence statements, which the portal links there.',
      'A renaming or replacement of the IAR from 2025: not found; the official portal still names the Illinois Assessment of Readiness for spring 2027, so the page uses that name.',
      'Item counts per grade and a points blueprint: not published on the portal pages read; not printed.',
      'Use of IAR scores for promotion or placement: in our research map only, not verified at a primary source; not printed.',
      'Reproducing practice items or their answer keys: refused; the Practice Items page is linked.',
      'Score or level promises for our classes: refused. Any affiliation with ISBE, a district or the testing contractor: none.'
    ]
  }
};
