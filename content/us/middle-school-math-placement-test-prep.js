'use strict';
// Middle school math placement test prep (ag- maths door; UK and US exams cluster, row US008, priority A). Merges the
// "8th grade Algebra 1 placement test" row: covers both moves (end of grade 5 into an accelerated grade 6 track; grade 6
// or 7 into Algebra 1).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Sources read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/middle-school-math-placement-test-prep/):
//  - Texas Education Agency, Middle School Advanced Mathematics Program FAQ: automatic enrollment for the top 40 percent on
//    STAAR Grade 5 Math or a local measure; "Students whose scores place them in the top 40% of scores (60th percentile)
//    across the state"; "TEA will provide the scale score which indicates that a student is in the 60th percentile
//    annually"; "STAAR results are available in late May and early June each year"; local measure examples "a summative
//    assessment, the average of unit assessments over the year, or a performance-based portfolio of student work"; 19 TAC
//    74.2101 "A local measure shall be used to determine enrollment of Grade 6 students for whom there are no results on the
//    state Grade 5 mathematics assessment."; summer attendance cannot be required; the rule "is focused on students entering
//    sixth grade"; districts may set policy for later grades.
//  - TEA program page: parent or guardian opt-out.
//  - Seattle Public Schools, Highly Capable Summer Math Program page: "Eligibility is determined by math MAP (RIT) scores.";
//    direct enrollment for students who "demonstrate exceptional math achievement via the MAP assessment during fifth grade";
//    families of eligible students told details on "Thursday, April 23" for the 2026 program (individual schools not named).
//  - NWEA MAP Growth page: "computer-adaptive MAP Growth assessments"; "the grade-level independent RIT scale";
//    "from kindergarten through twelfth grade".
//  - SFUSD announcement, 26 March 2026: eligible students automatically enrolled in Math 8 and Algebra I; others "can choose to
//    take Algebra I as an elective"; Algebra I as the sole math class needs "additional academic eligibility criteria" and
//    "a meeting with the school counselor and formal written consent from parents or guardians".
//  - Montgomery County Public Schools (MD) mathematics page: "Proficiency with all grade level math standards from
//    Kindergarten through grade 8 ensures success in Algebra I."
//  - CCSS mathematics PDF: 5.NBT.B.6, 5.NF.B.7, 6.NS.A.1 (incl. its own example (2/3) / (3/4) = 8/9, not reused), 6.NS.C.5,
//    6.EE.B.7, 7.EE.B.4, 8.EE.A.1, 8.EE.C.8, 8.F.A.1, 8.G.B.7.
//  - Blocked, not retried: Hillsborough County (FL) schools (bot challenge page), Kentucky education.ky.gov (403), Pearson
//    Orleans-Hanna page (404), California leginfo (403), CDE (303 loop).
// Our own material, labelled: two practice sets (grade 5 to 6 move; Algebra 1 readiness), two worked solutions
// (4,368 / 24 = 182; 4x - 7 < 9 gives x < 4), the content table, the six-step plan and the timeline.
// Lesson family: diagnose by domain, then fix the earliest broken link.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MATH', blurb: 'Preparing for a middle school math placement or Algebra 1 placement test, with real district criteria and original practice problems.' },
  slug: 'middle-school-math-placement-test-prep',
  code: 'msp',
  accent: '#5A6416',
  accentRationale: 'Middle school math placement test prep: an olive ink, #5A6416 as allocated, 6.06:1 on #FBF8F2 and 5.21:1 on #EDE7DA, quiet and steady for a page parents read before a decision',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'Middle school math placement test prep',
  title: 'Middle School Math Placement Test Prep: Grade 6 to Algebra 1',
  description: 'Math placement test prep for middle school: how districts place students into accelerated grade 6 math or Algebra 1, what the tests cover, and original practice.',
  ogDescription: 'There is no national middle school math placement test. Each district decides. How Texas, Seattle and San Francisco place students, what the tests cover, and practice problems written by our teachers.',
  twitterDescription: 'Middle school and Algebra 1 math placement, explained from district rules, with practice.',
  pageName: 'Middle School Math Placement Test Prep',
  webPageDescription: 'A guide for US families to middle school math placement: the two placement moves (into an accelerated grade 6 track and into Algebra 1), the criteria Texas and named districts publish, the kinds of tests used, and original practice problems with full solutions.',
  courseDescription: 'Readiness lessons for US students in grades 5 to 8 facing a math placement decision, either into an accelerated grade 6 course or into Algebra 1, taught live by video in batches or privately.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Math placement test prep',
  navLinks: [
    { href: '#moves', label: 'Two placement moves' },
    { href: '#criteria', label: 'How districts decide' },
    { href: '#tests', label: 'The tests' },
    { href: '#practice', label: 'Practice' },
    { href: '#prepare', label: 'How to prepare' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 5 to 8 &middot; Placement and Algebra 1 readiness',
  h1: 'Middle school math placement test prep',
  lede: 'Two decisions shape a child\'s middle school math: whether they start grade 6 on an accelerated track, and when they take Algebra 1. In many districts both decisions rest partly on a test, and families understandably want to prepare. The honest way to prepare is not to guess the questions. It is to find out exactly what your district measures, check the math that test is built on, and close the gaps properly. This page shows how placement works in published state and district rules, what the tests cover, and gives two original practice sets, one for each move.',
  secondaryCta: { href: '#practice', label: 'Try the practice sets' },
  wa: 'Hi, we are in the US and a math placement decision is coming up for our middle schooler. Is a free diagnostic class available?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students &middot; math and coding',
  spec: [
    ['Move 1', 'Grade 5 to accelerated grade 6'],
    ['Move 2', 'Grade 6 or 7 to Algebra 1'],
    ['Who decides', 'Your state or district'],
    ['Our approach', 'Readiness, not item drilling'],
    ['Lessons', 'Live, online'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Middle school math placement means deciding whether a student starts an accelerated grade 6 course or takes Algebra 1 in grade 7 or 8. Each district or state picks the evidence: last spring\'s state test, an adaptive screener such as MAP Growth, a district exam or class grades. Modern Age Coders prepares students for it with live online lessons, in batches of 15 to 20 or privately, using our Middle School Mathematics and Algebra Foundations courses. Your first class costs nothing.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses that build placement readiness',
    lede: 'Choose by the move your child is facing.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MSP / 01', title: 'Middle school math, grades 6 to 8', note: 'Ratios, rational numbers and equations, the core of most placement measures.' },
      { course: 'algebra-foundations-masterclass', code: 'MSP / 02', title: 'Algebra foundations', note: 'Pre-algebra into Algebra 1, for the Algebra 1 placement move.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'MSP / 03', title: 'Elementary math, grades 1 to 5', note: 'Grade 5 fractions and division, for the move into grade 6.' }
    ]
  },

  sections: [
    {
      id: 'moves', tint: 'tint', eyebrow: 'Two placement moves',
      h2: 'What is on a middle school math placement test?',
      lede: 'There is no single national test. What it covers depends on the move: a placement at the end of grade 5 looks at grade 5 and early grade 6 math, while an Algebra 1 placement looks at the grade 7 and grade 8 standards that Algebra 1 is built on.',
      body: [
        { kind: 'table', caption: 'The two placement moves and the standards they usually draw on (standard codes from the Common Core mathematics standards; the grouping is ours)', head: ['Move', 'Usual timing', 'Math it checks', 'Example standards'], rows: [
          ['Move 1: into an accelerated grade 6 track', 'Spring of grade 5', 'Multi-digit division, fractions, decimals, early ratio and negatives', '5.NBT.B.6 division with two-digit divisors; 5.NF.B.7 dividing unit fractions; 6.NS.C.5 positive and negative numbers'],
          ['Move 2: into Algebra 1 in grade 8', 'Spring of grade 7', 'Rational numbers, equations, proportional reasoning, first linear functions', '7.EE.B.4 equations of the form px + q = r; 8.F.A.1 what a function is; 8.EE.C.8 pairs of linear equations'],
          ['Move 2, early: into Algebra 1 in grade 7', 'Spring of grade 6', 'All of the above, often after a compacted course', '6.NS.A.1 dividing fractions by fractions; 8.EE.A.1 integer exponents; 8.G.B.7 Pythagorean Theorem']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why Algebra 1 placement looks back',
          left: [
            'Montgomery County Public Schools in Maryland states it directly: "Proficiency with all grade level math standards from Kindergarten through grade 8 ensures success in Algebra I." Whatever a district calls its test, the content it checks is the content Algebra 1 depends on.',
            'That is good news for preparation. The skills are public, listed grade by grade, so a family can find them without ever seeing a test.'
          ],
          rightH3: 'Why the move into grade 6 is different',
          right: [
            'A grade 5 placement is often a test of fluency as much as knowledge: can the child divide 4,368 by 24 accurately, add fractions with unlike denominators and reason with a ratio table without slowing down? Children who know the ideas but work slowly can be placed below what they understand.',
            'So for this move, we split preparation between closing content gaps and building calm, accurate speed on the grade 5 essentials.'
          ] },
        { kind: 'source', html: 'Sources: the <a class="ag-inline-link" href="https://learning.ccsso.org/wp-content/uploads/2022/11/ADA-Compliant-Math-Standards.pdf" rel="noopener" target="_blank">Common Core mathematics standards</a> and <a class="ag-inline-link" href="https://www.montgomeryschoolsmd.org/curriculum/math/" rel="noopener" target="_blank">MCPS mathematics</a>, read 31 October 2026. States with their own standards use other codes for the same ideas. Modern Age Coders is independent and not connected with any state, district or test publisher.' }
      ]
    },
    {
      id: 'criteria', tint: 'deep', eyebrow: 'How districts decide',
      h2: 'How do schools decide middle school math placement?',
      lede: 'Usually with more than one measure. Texas sets a statewide rule with automatic enrollment; Seattle Public Schools uses MAP scores; San Francisco Unified uses eligibility criteria with routes for students who miss them. Here is what each publishes.',
      body: [
        { kind: 'table', caption: 'Published placement rules from one state and two districts (read 31 October 2026)', head: ['Who', 'Measure', 'What happens', 'Family role'], rows: [
          ['Texas (statewide)', 'STAAR Grade 5 Math, top 40% of scores statewide (60th percentile), or the top 40% on a local measure', 'Automatic enrollment in a grade 6 advanced math program aimed at Algebra I in grade 8', 'Parents can decline the automatic place'],
          ['Seattle Public Schools', '"Eligibility is determined by math MAP (RIT) scores."', 'Three sixth-grade options, including direct enrollment in Compacted Math 7/8', 'Families of eligible students choose an option with the district'],
          ['San Francisco Unified', 'District eligibility criteria for grade 8 Algebra I', 'At most schools, eligible students automatically enrolled in Math 8 and Algebra I from 2026 to 2027', 'Others "can choose to take Algebra I as an elective"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Texas: the details families ask about',
          left: [
            'The TEA FAQ says the cut is statewide, not set by each district: "Students whose scores place them in the top 40% of scores (60th percentile) across the state" must be automatically enrolled. It adds that "TEA will provide the scale score which indicates that a student is in the 60th percentile annually."',
            'Timing matters too: "STAAR results are available in late May and early June each year." For a student with no grade 5 STAAR result, 19 TAC section 74.2101 says "A local measure shall be used to determine enrollment of Grade 6 students for whom there are no results on the state Grade 5 mathematics assessment."'
          ],
          rightH3: 'What a local measure can be',
          right: [
            'TEA leaves the local measure to districts and lists examples from districts: "a summative assessment, the average of unit assessments over the year, or a performance-based portfolio of student work." So in Texas, steady class work in grade 5 can count as much as one test day.',
            'TEA also says a district cannot make a summer course a condition: every qualifying student must have the opportunity to participate "regardless of whether or not they are available to attend classes in the summer."'
          ] },
        { kind: 'p', mt: true, html: 'San Francisco\'s 26 March 2026 announcement adds a second path for strong students: families can request Algebra I as the only math class, skipping Math 8, "if they meet additional academic eligibility criteria", and this "requires a meeting with the school counselor and formal written consent from parents or guardians." For its 2026 program, now closed, Seattle said families of eligible students would receive details on Thursday, April 23.' },
        { kind: 'source', html: 'Sources: TEA <a class="ag-inline-link" href="https://tea.texas.gov/educators/subject-areas/middle-school-advanced-mathematics-program-faq" rel="noopener" target="_blank">Middle School Advanced Mathematics Program FAQ</a> and <a class="ag-inline-link" href="https://tea.texas.gov/educators/subject-areas/middle-school-advanced-mathematics-program" rel="noopener" target="_blank">program page</a>; <a class="ag-inline-link" href="https://www.seattleschools.org/departments/highly-capable/highly-capable-summer-math-program/" rel="noopener" target="_blank">Seattle Public Schools</a>; <a class="ag-inline-link" href="https://www.sfusd.edu/announcements/2026-03-26-board-education-approves-revised-math-placement-policy" rel="noopener" target="_blank">SFUSD</a>; read 31 October 2026. Rules change; always check your district\'s current page.' }
      ]
    },
    {
      id: 'tests', tint: 'tint', eyebrow: 'The tests',
      h2: 'What kinds of tests are used for math placement?',
      lede: 'Three kinds turn up most often: a state test score from the previous spring, a computer-adaptive screener taken during the year, and a test or set of unit exams written by the district. Many districts combine one of these with grades and teacher input.',
      body: [
        { kind: 'table', caption: 'Common placement measures (our summary; publisher and district wording quoted where used)', head: ['Measure', 'What it is', 'What preparation makes sense'], rows: [
          ['State test score', 'For example, STAAR Grade 5 Math in Texas, taken in spring of the year before', 'Solid grade-level skills across the whole year; the state publishes its own practice tests'],
          ['Adaptive screener', 'For example, NWEA MAP Growth: "computer-adaptive MAP Growth assessments" reported on "the grade-level independent RIT scale"', 'Breadth and accuracy; questions adjust to the student, so cramming one topic helps little'],
          ['District placement exam', 'A test the district writes, often near the end of the year', 'Ask the district which standards it covers and whether a calculator is allowed'],
          ['Course grades and unit tests', 'Class performance over the year, sometimes as a local measure', 'Consistent work and corrections all year, not a last-minute push']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Can you use a calculator on a math placement test?',
          left: [
            'It depends entirely on the test. Some district exams allow a basic calculator for one part and not another, and an adaptive screener may show an on-screen calculator only on some questions. There is no general rule, so ask the school for the test\'s own instructions.',
            'We prepare students to work without one either way. Fluent fractions and division are what placement measures are really checking, and a student who relies on a calculator for 4,368 divided by 24 will be slower everywhere else.'
          ],
          rightH3: 'Is the math placement test hard?',
          right: [
            'It is meant to separate students, so it will feel harder than a normal unit test, and an adaptive test is designed to reach questions the student finds difficult. Getting questions wrong is expected and is not a sign of failure.',
            'What helps most is a calm student who reads carefully and checks answers. We practice that directly: estimate first, solve, then check by a second route.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice',
      h2: 'Math placement test examples to practice with',
      lede: 'Two original practice sets written by our teachers, one for each move. They are not copied from or modeled on any real district or publisher test; they check the standards those tests are built on. Answers are in brackets.',
      body: [
        { kind: 'table', caption: 'Practice set 1: the move into an accelerated grade 6 track (ours)', head: ['#', 'Problem', 'Skill', 'Answer'], rows: [
          ['1', '4,368 &divide; 24', 'Division with a two-digit divisor', '(182)'],
          ['2', '3/4 + 5/6', 'Unlike denominators', '(19/12, or 1 7/12)'],
          ['3', '1/3 &divide; 4', 'Unit fraction divided by a whole number', '(1/12)'],
          ['4', '2.5 &times; 0.4', 'Decimal multiplication', '(1)'],
          ['5', 'A drink uses 4 cups of juice for 6 cups of water. Water for 10 cups of juice?', 'Ratio reasoning', '(15 cups)'],
          ['6', 'What is 20% of 45?', 'Percent as a rate per 100', '(9)'],
          ['7', '&minus;8 + 13', 'Positive and negative numbers', '(5)'],
          ['8', 'Volume of a box 3 by 4 by 5 units', 'Volume', '(60 cubic units)']
        ] },
        { kind: 'table', mt: true, caption: 'Practice set 2: Algebra 1 placement readiness (ours)', head: ['#', 'Problem', 'Skill', 'Answer'], rows: [
          ['1', '2/3 &divide; 5/6', 'Dividing fractions', '(4/5)'],
          ['2', '&minus;2.5 &times; 4', 'Rational number operations', '(&minus;10)'],
          ['3', '3(x + 4) = 27', 'Two-step equation', '(x = 5)'],
          ['4', '4x &minus; 7 &lt; 9', 'Inequality', '(x &lt; 4)'],
          ['5', 'A class of 40 students grows by 15%. New size?', 'Percent increase', '(46)'],
          ['6', 'Slope through (&minus;1, 4) and (3, &minus;4)', 'Linear functions', '(&minus;2)'],
          ['7', '3<sup>2</sup> &times; 3<sup>&minus;4</sup>', 'Integer exponents', '(1/9)'],
          ['8', 'x + y = 12 and x &minus; y = 4', 'System of equations', '(x = 8, y = 4)'],
          ['9', 'Right triangle with legs 5 and 12: hypotenuse?', 'Pythagorean Theorem', '(13)']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Worked: 4,368 divided by 24',
          left: [
            'Estimate first: 24 is close to 25, and 4,368 divided by 25 is a little under 175, so the answer is around 180. Then divide: 24 goes into 43 once, remainder 19; bring down 6 to make 196, and 24 goes in 8 times (192), remainder 4; bring down 8 to make 48, and 24 goes in exactly 2 times. The answer is 182.',
            'Check: 24 &times; 182 = 24 &times; 180 + 24 &times; 2 = 4,320 + 48 = 4,368. The estimate, the working and the check all agree.'
          ],
          rightH3: 'Worked: 4x &minus; 7 &lt; 9',
          right: [
            'Add 7 to both sides: 4x &lt; 16. Divide both sides by 4, a positive number, so the sign stays the same: x &lt; 4. The solution is every number less than 4, drawn as an open circle at 4 with the arrow pointing left.',
            'Check with a number on each side. If x = 3, then 12 &minus; 7 = 5, which is less than 9. If x = 5, then 20 &minus; 7 = 13, which is not. Students who check like this rarely lose marks on inequalities.'
          ] },
        { kind: 'p', mt: true, html: 'How to use the sets: give the matching set without a calculator and without a time limit first, then look at which skills went wrong rather than the total. A wrong answer on problem 2 of set 2 and on problem 7 of set 1 points to the same thing, signs with negative numbers, and that is the domain to fix first. For official practice, use the free practice tests your state or the test publisher provides.' }
      ]
    },
    {
      id: 'prepare', tint: 'tint', eyebrow: 'How to prepare',
      h2: 'How should my child prepare for a math placement test?',
      lede: 'Start early, prepare for the math rather than the test, and keep it low pressure. This is the plan our teachers follow.',
      body: [
        { kind: 'ol', items: [
          '<b>Find your district\'s published rule.</b> Which measure, which grade, which date, and whether there is an appeal or a second route.',
          '<b>Check the content.</b> List the standards for the year being tested and the year before; the tables above are a starting point.',
          '<b>Diagnose by domain.</b> Use a set like ours to find which domain breaks: fractions, negatives, ratio or equations.',
          '<b>Fix the earliest broken link.</b> A grade 7 equation problem often fails because of a grade 6 fraction skill.',
          '<b>Build accuracy, then speed.</b> Untimed and correct first; then shorter, mixed sets with a gentle time limit.',
          '<b>Keep the week before calm.</b> Light review, normal sleep, no new topics. A rested child shows what they know.'
        ] },
        { kind: 'table', mt: true, caption: 'A preparation timeline for a spring placement (ours)', head: ['When', 'Focus'], rows: [
          ['Fall', 'Read the district rule; first diagnostic; start on the weakest domain'],
          ['Winter', 'Close gaps one domain at a time; keep up with class work, which may count'],
          ['Early spring', 'Mixed practice across the whole year\'s content'],
          ['Final weeks', 'Short mixed sets, checking habits, rest']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we will not do',
          left: [
            'We do not obtain, copy or imitate real placement tests, and we do not teach test-taking tricks in place of math. Placement is meant to find the right course for a child, and a placement won by drilling can leave a student in a course they are not ready for.',
            'We also never promise a placement. That decision belongs to the school, using its own measures.'
          ],
          rightH3: 'If your child does not place',
          right: [
            'It is rarely the end of the road. SFUSD lets students who miss automatic enrollment take Algebra I as an elective, and TEA notes that the Texas rule "is focused on students entering sixth grade" while districts can set policy for advancement in later grades.',
            'A year of strong work at grade level, with gaps closed, often puts a student in a better position for the next decision point than a rushed placement would have.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Four readiness levels before a placement decision',
    lede: 'How we describe a student after the first diagnostic class.',
    table: { caption: 'Readiness levels we use (ours; not a district scale)', head: ['Level', 'On our practice set', 'What we suggest'], rows: [
      ['1. Not yet', 'Under half right; several domains weak', 'Grade-level work first; plan for the next decision point'],
      ['2. Close', 'Half to three quarters right; one or two weak domains', 'Focused work on those domains for a term'],
      ['3. Ready', 'Most right, with clear explanations', 'Mixed practice and checking habits'],
      ['4. Well ahead', 'All right, quickly, with reasons', 'Depth: competition-style problems, not more speed']
    ] },
    left: { h3: 'For parents', ps: [
      'Placement measures differ, so treat our levels as a guide to what to work on, not a prediction of a result.',
      'Ask the school what happens after placement, too. How the course is taught matters as much as which course it is.'
    ] },
    right: { h3: 'For students', ps: [
      'Getting hard questions wrong on an adaptive test is normal. It means the test is doing its job.',
      'Estimate before you calculate. It catches more mistakes than anything else.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses from grade 4 to Algebra 1 and beyond',
    lede: 'Live lessons that build the math every placement measure checks.',
    bands: [
      { num: 'I', h3: 'Before grade 6', sub: 'Grades 4 and 5', courses: [
        { code: 'MSP / A / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grade 5 fractions and division.' },
        { code: 'MSP / A / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Accurate, calm speed.' },
        { code: 'MSP / A / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental math', blurb: 'Place value and number sense.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'MSP / B / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratio, rational numbers and equations.' },
        { code: 'MSP / B / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Readiness for Algebra 1 and the course itself.' },
        { code: 'MSP / B / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Functions and patterns in Python.' }
      ] },
      { num: 'III', h3: 'Beyond Algebra 1', sub: 'Grades 7 to 10', courses: [
        { code: 'MSP / C / 01', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'For students who are well ahead.' },
        { code: 'MSP / C / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry and Algebra 2 next.' },
        { code: 'MSP / C / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data skills alongside algebra.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live lessons that build real placement readiness',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Fall and winter', l: 'Steady weekly work on weak domains.' },
      { time: 'Spring', l: 'Mixed review before the placement window.' },
      { time: '1-on-1', l: 'Planned around your district\'s dates.' }
    ],
    cells: [
      { h3: 'Diagnose first', p: 'A free class finds the domain that breaks.' },
      { h3: 'Earliest gap first', p: 'Fix the skill the others depend on.' },
      { h3: 'Accuracy, then speed', p: 'Correct and calm before fast.' },
      { h3: 'No copied items', p: 'Original problems only, built on the standards.' },
      { h3: 'No promises', p: 'Placement stays the school\'s decision.' },
      { h3: 'Two formats', p: 'Join a batch, or book a teacher just for your child.' }
    ]
  },

  projectsH2: 'Student work',
  projectsLede: 'Some of our middle schoolers build small math programs as they learn. See a few on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'Placement readiness lessons are paid monthly with no long commitment, so a family can plan a term of focused work before a spring decision and stop afterwards.',
    free: ['A free diagnostic first class', 'Tell us your district', 'No card required'],
    group: ['15 to 20 students', 'One steady teacher', 'Choose your batch', 'Monthly fee'],
    one: ['Private lessons', 'Built around district dates', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Middle school math placement: common questions',
    items: [
      { q: 'What is on a middle school math placement test?', a: 'It depends on the district and the move. A placement at the end of grade 5 usually checks grade 5 division, fractions and decimals plus early ratio work, while an Algebra 1 placement checks grade 7 and 8 skills such as rational numbers, equations and linear functions.' },
      { q: 'Is there math placement test tutoring near me?', a: 'Wherever you live in the US, the teacher comes to you by video. A free diagnostic class comes first, then weekly lessons with one consistent teacher.' },
      { q: 'How do I find my district\'s placement rules?', a: 'Look on the district website for its math pathways or advanced math page, or ask the school counselor. The rule should say which measure is used, in which grade, and whether families can request a review.' },
      { q: 'Can you use a calculator on the math placement test?', a: 'It depends on the test, so check its own instructions with the school. We prepare students to work accurately without one, since fluent fractions and division are what most placement measures check.' },
      { q: 'Is there an Algebra 1 placement test practice PDF?', a: 'Some states and publishers post free official practice, and those are the right place for real-format questions. The practice sets on this page are our own, built on the grade 7 and 8 standards, and we do not copy any district test.' },
      { q: 'How are students placed into advanced math in Texas?', a: 'By a state rule. A grade 5 student whose STAAR math score falls at or above the statewide 60th percentile, or who ranks high enough on the district\'s own measure, such as a year-end assessment or a portfolio, goes into the grade 6 advanced program automatically. Families can still decline the place.' },
      { q: 'What if my child misses the placement cut?', a: 'Many districts offer later routes. SFUSD, for example, lets students who are not automatically enrolled take Algebra I as an elective, and Texas allows districts to set their own policies for advancement after grade 6.' },
      { q: 'Can tutoring guarantee a higher placement?', a: 'No. Placement is the school\'s decision, made with its own measures. We build genuine readiness in the math those measures check, and we tell you honestly where your child stands.' },
      { q: 'When are your placement prep classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with any district or test publisher?', a: 'No. We run independently of every state, district, NWEA and other test publisher. Their pages are quoted here with links so you can read the originals.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related math pages',
    lede: 'More for families facing a placement decision.',
    items: [
      { href: '/accelerated-math-program-online', label: 'Accelerated math program', p: 'How compacted tracks work after placement.' },
      { href: '/online-math-tutor-5th-grade', label: 'Fifth grade math tutoring', p: 'The year before the first placement move.' },
      { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math tutoring', p: 'Ratios, negatives and expressions.' },
      { href: '/online-math-tutor-7th-grade', label: 'Seventh grade math tutoring', p: 'The year before Algebra 1 placement.' },
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'Functions, systems and exponents.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'Support once Algebra 1 begins.' },
      { href: '/common-core-math-tutor', label: 'Common Core math tutor', p: 'Grade-level help from kindergarten to grade 8.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'For students already well ahead.' }
    ]
  },

  start: {
    h2: 'Book a free diagnostic class',
    lede: 'Tell us the grade, the district and the placement date if you know it. The teacher will run a short diagnostic, show you which domain needs work, and suggest a plan for the time you have.',
    readFirst: 'Learn <a class="ag-inline-link" href="/how-we-teach">how we teach math</a>, or see <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'Lessons are taught live by video from India and scheduled around US school days and time zones. WhatsApp gets the quickest reply.',
    formNote: 'There is no charge for the diagnostic class and no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'Grades 5 to 8', links: [
        { href: '/online-math-tutor-5th-grade', label: 'Fifth grade math' },
        { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math' },
        { href: '/online-math-tutor-7th-grade', label: 'Seventh grade math' },
        { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/accelerated-math-program-online', label: 'Accelerated math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Estimate, solve, check'
  },

  personalityCss: `
.ag-root.ag-msp .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-msp .ag-capsule { border-left-width: 4px; border-radius: 4px; }
.ag-root.ag-msp .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-msp .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-msp .ag-section-head h2 { max-width: 29ch; }
`,

  dossier: {
    curriculumAuthority: 'TEA Middle School Advanced Mathematics Program FAQ and page (top 40 percent statewide, 60th percentile scale score published annually, results in late May and early June, local measure examples, 19 TAC 74.2101 local measure for students without results, no summer requirement, rule focused on students entering grade 6, parent opt-out). Seattle Public Schools Highly Capable Summer Math Program (MAP RIT eligibility, 2026 notification date). NWEA MAP Growth (computer-adaptive, RIT scale, K-12). SFUSD 26 March 2026 policy (automatic enrollment, elective route, opt-out of Math 8 with counselor meeting and written consent). MCPS mathematics (K to 8 proficiency and Algebra I). CCSS standard codes for grades 5 to 8. All read raw 31 October 2026.',
    localProject: 'Our two practice sets (8 problems for the grade 5 to 6 move; 9 for Algebra 1 readiness), worked solutions for 4,368 / 24 = 182 and 4x - 7 < 9 giving x < 4, the moves and standards table, the six-step plan, the spring timeline and the readiness levels. Lesson family: diagnose by domain, fix the earliest broken link.',
    requiredMentions: ['Students whose scores place them in the top 40% of scores (60th percentile)', 'TEA will provide the scale score which indicates that a student is in the 60th percentile annually.', 'STAAR results are available in late May and early June each year.', 'a summative assessment, the average of unit assessments over the year, or a performance-based portfolio of student work.', 'A local measure shall be used to determine enrollment of Grade 6 students for whom there are no results on the state Grade 5 mathematics assessment.', 'Eligibility is determined by math MAP (RIT) scores.', 'the grade-level independent RIT scale', 'can choose to take Algebra I as an elective', 'requires a meeting with the school counselor and formal written consent from parents or guardians.', 'Proficiency with all grade level math standards from Kindergarten through grade 8 ensures success in Algebra I.', '24 &times; 182 = 24 &times; 180 + 24 &times; 2 = 4,320 + 48 = 4,368', 'Add 7 to both sides: 4x &lt; 16.'],
    sources: [
      { claim: 'TEA Middle School Advanced Mathematics Program FAQ.', url: 'https://tea.texas.gov/educators/subject-areas/middle-school-advanced-mathematics-program-faq' },
      { claim: 'TEA Middle School Advanced Mathematics Program page.', url: 'https://tea.texas.gov/educators/subject-areas/middle-school-advanced-mathematics-program' },
      { claim: 'Seattle Public Schools Highly Capable Summer Math Program.', url: 'https://www.seattleschools.org/departments/highly-capable/highly-capable-summer-math-program/' },
      { claim: 'NWEA MAP Growth.', url: 'https://www.nwea.org/map-growth/' },
      { claim: 'SFUSD revised Math Placement Policy, 26 March 2026.', url: 'https://www.sfusd.edu/announcements/2026-03-26-board-education-approves-revised-math-placement-policy' },
      { claim: 'Montgomery County Public Schools mathematics.', url: 'https://www.montgomeryschoolsmd.org/curriculum/math/' },
      { claim: 'Common Core mathematics standards, grades 5 to 8 codes.', url: 'https://learning.ccsso.org/wp-content/uploads/2022/11/ADA-Compliant-Math-Standards.pdf' }
    ],
    rejectedClaims: [
      'Placement promises or score promises: refused; placement is the school\'s decision.',
      'Real or imitation district placement test items, ALEKS or MAP items: not reproduced; both practice sets are ours and built on the standards.',
      'A general calculator rule for placement tests: none exists; we tell families to check the test\'s own instructions.',
      'Orleans-Hanna Algebra Prognosis Test details: the Pearson page returned 404, so the test is not described.',
      'Hillsborough County (FL) placement-test criteria: the district site returned a bot challenge; Kentucky education.ky.gov returned 403; California leginfo 403 and CDE a 303 loop. Not retried, not used.',
      'Individual school names on the Seattle and SFUSD pages: not repeated.',
      'Any affiliation with a state, district, NWEA or another publisher: none.'
    ]
  }
};
