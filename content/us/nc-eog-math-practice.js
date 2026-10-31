'use strict';
// NC EOG math practice (ag- state-test door; UK and US exams cluster, row US032). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from the North
// Carolina Department of Public Instruction (dpi.nc.gov); copies in keyword-research-2026-09/uk-us-gap/src/nc-eog-math-practice/:
//  - End-of-Grade Mathematics Tests at Grades 3-8, North Carolina Test Specifications (April 2026): NCSCOS for Mathematics
//    "adopted by the North Carolina State Board of Education in June 2017"; "2018-19: First operational administration of
//    EOG Mathematics Tests (Edition 5)"; Table 1 and 2 domain weights (G3 OA 32 to 36, NBT 9 to 13, NF 28 to 32, MD and G 23
//    to 27; G4 14 to 18, 25 to 29, 30 to 34, 23 to 27; G5 9 to 13, 25 to 29, 39 to 43, 19 to 23; G6 RP 24 to 28, NS 20 to 24,
//    EE 22 to 26, G 12 to 16, SP 12 to 16; G7 RP 24 to 28, NS 8 to 12, EE 20 to 24, G 16 to 20, SP 22 to 26; G8 NS and EE 24
//    to 28, F 28 to 32, G 24 to 28, SP 16 to 20); Table 3 DOK (G3 40 to 50 / 50 to 60 / none; G4 35 to 45 / 50 to 60 / 5; G5
//    30 to 40 / 50 to 60 / 8 to 10; G6 to G8 25 to 35 / 50 to 60 / 8 to 15); Table 4 operational 40 40 40 45 45 45, field
//    test 6 6 8 8 8 8, total 46 46 48 53 53 53; Table 5 calculator inactive 20 20 20 15 15 15, active 20 20 20 30 30 30;
//    "All items will be worth one point each."; "two hours (120 minutes) for most students"; maximum "three hours (180
//    minutes)"; "last ten days of the instructional year"; "provided only in English"; grades 3-8 "required to be
//    administered in online administrations" via NCTest; Online Assessment Tutorial at least once at school; calculators:
//    grades 3-5 "any four-function calculator with memory key", grades 6-8 four-function "with a square root function" and
//    pi "and algebraic logic"; Table 6 embedded calculators (3 to 5 four-function, 6 to 7 scientific, 8 scientific and
//    graphing); graph paper, scratch paper, writing utensil on request; released forms built to the same specifications;
//    released items "must not be used for personal or financial gain, are copyrighted to the NCDPI"; Achievement Level
//    Descriptors for Edition 5 adopted August 2019.
//  - State Tests page: "The EOG testing window is the last ten (10) days of the school year."
//  - North Carolina Test Coordinator's Policies and Procedures Handbook 2026-27: G.S. 115C-174.12(a)(4) "shall be
//    administered within the final ten instructional days of the school year"; "Schools are expected to complete testing
//    early in the window and reserve the final days for makeup testing."; ACCT-021 grade 8 students in NC Math 1 "Schools
//    shall not assess these students on the grade 8 mathematics EOG assessment."; off-level testing not permitted; online
//    tools include the online calculator.
// Blocked: simbli.eboardsolutions.com (State Board policy host for the Achievement Level Descriptors) returned an Incapsula
// "Request unsuccessful" page; not retried. The EOG achievement level ranges document link on dpi.nc.gov returned "Page not
// Found". So no achievement level names or cut scores are printed.
// Dashes written "to". No released-form item reproduced; percentages quoted as NCDPI prints them, never summed.
// Our own material, labelled: the grade 5 calculator-inactive fraction example (2/3 of 3/4 = 1/2), the grade 7 percent
// example done both ways, the ten-item practice set, the eight-week plan, the per-grade priorities.
// Lesson family: number sense for the calculator-inactive section.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const DPI = 'https://www.dpi.nc.gov';
const ST = DPI + '/districts-schools/accountability-and-testing/state-tests';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'NC EOG MATH', blurb: 'The North Carolina End-of-Grade math tests, grades 3 to 8: items per grade, the calculator-inactive and calculator-active split, domain weights, timing and original practice.' },
  slug: 'nc-eog-math-practice',
  code: 'nep',
  accent: '#5F613C',
  accentRationale: 'NC EOG math practice: a longleaf-pine olive #5F613C as allocated, 6.07:1 on paper #FBF8F2, earthy and distinct from the purple of the NC Math 1 page beside it',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-and-ai-classes-in-north-carolina', name: 'North Carolina' }],
  routeLabel: 'NC EOG math practice',
  title: 'NC EOG Math Practice: Grades 3 to 8, the 2027 Test',
  description: 'NC EOG math practice for grades 3 to 8: items per grade, calculator-inactive and active sections, domain weights and timing from NCDPI, with original practice.',
  ogDescription: 'Twenty questions without a calculator in grades 3 to 5, fifteen in grades 6 to 8, and every item worth one point. What NCDPI&rsquo;s April 2026 specifications say about the EOG math tests.',
  twitterDescription: 'The North Carolina EOG math tests from NCDPI&rsquo;s own specifications, with original practice.',
  pageName: 'NC EOG Math Practice',
  webPageDescription: 'A guide for North Carolina families to the End-of-Grade Mathematics Tests, grades 3 to 8, built from NCDPI&rsquo;s April 2026 test specifications, State Tests page and 2026 to 2027 Test Coordinator&rsquo;s Handbook, with original worked examples and a practice set.',
  courseDescription: 'Live online math for North Carolina students in grades 3 to 8, taught to the NC Standard Course of Study for Mathematics, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'NC EOG math practice',
  navLinks: [
    { href: '#items', label: 'Items' },
    { href: '#calculator', label: 'Calculator split' },
    { href: '#weights', label: 'Domain weights' },
    { href: '#rigor', label: 'Rigor' },
    { href: '#when', label: 'When' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'North Carolina &middot; Grades 3 to 8 &middot; From NCDPI&rsquo;s specifications',
  h1: 'NC EOG math practice for grades 3 to 8',
  lede: 'Every North Carolina End-of-Grade math test has a part where the calculator is switched off. In grades 3 to 5 that is half of the scored questions; in grades 6 to 8 it is a third. NCDPI publishes the exact counts, the weight of every domain and even the share of questions at each level of difficulty, which makes this one of the most transparent state tests to prepare for. The work is plain: number sense strong enough for the calculator-inactive section, and grade-level content weighted the way the state weights it.',
  secondaryCta: { href: '#calculator', label: 'See the calculator split' },
  wa: 'Hello Modern Age Coders, my child in North Carolina has the EOG math test at the end of the year. Could we book a free first class?',
  heroNote: 'Live math since 2020 &middot; 10,000+ students &middot; lessons on Eastern Time',
  spec: [
    ['Test', 'NC End-of-Grade Mathematics'],
    ['Run by', 'NCDPI'],
    ['Grades', '3 to 8'],
    ['Items', '46 to 53, one point each'],
    ['Time', 'About 2 hours; 3 at most'],
    ['When', 'Last ten days of the school year'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The North Carolina End-of-Grade (EOG) Mathematics Tests are NCDPI&rsquo;s annual math tests for grades 3 to 8, taken online in the last ten days of the school year. Each has 40 or 45 scored items, worth one point each, split into calculator-inactive and calculator-active sections, and most students need about two hours. Modern Age Coders teaches EOG math live online, in a batch or 1-on-1, through our Elementary Mathematics course.',

  picks: {
    eyebrow: 'Courses for North Carolina students',
    h2: 'Three courses weighted the way the EOG is weighted',
    lede: 'Fractions get the time they get on the test, and calculator-free fluency is practised every week.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'NEP / 01', title: 'Grades 3, 4 and 5', note: 'Fractions carry close to a third or more of the test in each of these grades.' },
      { course: 'mental-maths-mastery-kids', code: 'NEP / 02', title: 'Mental math', note: 'For the twenty calculator-inactive items in grades 3 to 5.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'NEP / 03', title: 'Grades 6, 7 and 8', note: 'Ratios, statistics, functions and geometry to the NC weights.' }
    ]
  },

  sections: [
    {
      id: 'items', tint: 'tint', eyebrow: 'Items per grade',
      h2: 'How many questions are on the NC EOG math test?',
      lede: 'Grades 3 and 4 have 46 items, grade 5 has 48, and grades 6 to 8 have 53. Some of these are field-test items that do not count toward the score.',
      body: [
        { kind: 'table', caption: 'EOG Mathematics total number of items (NCDPI, End-of-Grade Mathematics Tests at Grades 3 to 8, North Carolina Test Specifications, April 2026, Table 4)', head: ['Grade', '3', '4', '5', '6', '7', '8'], numCols: [1, 2, 3, 4, 5, 6], rows: [
          ['Operational items', '40', '40', '40', '45', '45', '45'],
          ['Field test items', '6', '6', '8', '8', '8', '8'],
          ['Total items', '46', '46', '48', '53', '53', '53']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'One point each, no essays',
          left: [
            'NCDPI says the items are four-response-option multiple choice, gridded response or numeric entry, and technology-enhanced types, and that &ldquo;All items will be worth one point each.&rdquo; There are no multi-point written responses.',
            'Gridded response means the child types or bubbles a number rather than choosing one. Without answer options to check against, a small arithmetic slip is simply wrong, which is why we drill accuracy.'
          ],
          rightH3: 'Field-test items',
          right: [
            'NCDPI explains that embedded field-test items are included in the totals but will not be part of the student&rsquo;s final score; they are trials for future tests.',
            'Students cannot tell which ones they are, so every item gets full effort. Practically, the child sees 46 to 53 questions even though the score comes from 40 or 45.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + DPI + '/documents/accountability/testing/eog/eog-mathematics-grades-3-8-test-specifications" rel="noopener" target="_blank">End-of-Grade Mathematics Tests at Grades 3 to 8, North Carolina Test Specifications</a>, NCDPI, April 2026, read 31 October 2026. Modern Age Coders is not connected with NCDPI.' }
      ]
    },
    {
      id: 'calculator', tint: 'deep', eyebrow: 'Calculator inactive and active',
      h2: 'Is there a calculator on the NC EOG math test?',
      lede: 'For part of it. Every grade has a calculator-inactive section and a calculator-active section. In grades 3 to 5 the split is 20 and 20; in grades 6 to 8 it is 15 and 30.',
      body: [
        { kind: 'table', caption: 'EOG Mathematics calculator inactive and active operational items, and the calculator provided (NCDPI test specifications, April 2026, Tables 5 and 6)', head: ['Grade', 'Calculator inactive items', 'Calculator active items', 'Embedded calculator in NCTest', 'Hand-held requirement'], rows: [
          ['3', '20', '20', 'Four-function', 'Any four-function with memory key'],
          ['4', '20', '20', 'Four-function', 'Any four-function with memory key'],
          ['5', '20', '20', 'Four-function', 'Any four-function with memory key'],
          ['6', '15', '30', 'Scientific', 'Four-function with square root, pi and algebraic logic'],
          ['7', '15', '30', 'Scientific', 'Four-function with square root, pi and algebraic logic'],
          ['8', '15', '30', 'Scientific and graphing', 'Four-function with square root, pi and algebraic logic']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Half the test with no calculator',
          left: [
            'For a third grader, 20 of the 40 scored items are calculator-inactive. That makes multiplication facts, place value and fraction sense worth half the score before a calculator ever appears.',
            'In grades 6 to 8 the inactive share drops to 15 of 45, and in our experience those are the questions where students miss the calculator most: negative numbers, fraction operations and percent.'
          ],
          rightH3: 'Practice with the real calculators',
          right: [
            'NCDPI links practice versions of the embedded Desmos calculators for North Carolina: four-function, scientific and graphing. A grade 8 student gets both the scientific and graphing calculators.',
            'Students must also be given graph paper, scratch paper and a pencil on request, according to the specifications. We tell children to ask for graph paper on any geometry question.'
          ] }
      ]
    },
    {
      id: 'example', tint: 'tint', eyebrow: 'Worked example',
      h2: 'What does a calculator-inactive question need from a child?',
      lede: 'Fast, reliable number sense. Here is the kind of reasoning we teach for a grade 5 gridded-response question, with no calculator and no answer choices to lean on.',
      body: [
        { kind: 'ol', items: [
          '<b>Our grade 5 problem.</b> A recipe uses 3/4 cup of oats. Maya makes 2/3 of the recipe. How many cups of oats does she use? Enter the answer as a fraction.',
          '<b>See it before computing it.</b> 2/3 of something is less than the whole, so the answer must be less than 3/4. A child who gets a number bigger than 3/4 knows straight away something has gone wrong.',
          '<b>Compute.</b> 2/3 x 3/4 = 6/12. Simplify by dividing top and bottom by 6: 1/2 cup. A shortcut we show: the 3 on top and the 3 on the bottom cancel first, leaving 2/4 = 1/2.',
          '<b>Check a second way.</b> 3/4 cup is three quarter-cups. Two thirds of three quarter-cups is two quarter-cups, which is 1/2 cup. Same answer, no algorithm needed.',
          '<b>Why this matters for the EOG.</b> In grade 5, NCDPI weights Number and Operations, Fractions at 39 to 43 percent, the largest single domain in any grade from 3 to 5. Fraction sense without a calculator is the single best use of preparation time.'
        ] },
        { kind: 'p', mt: true, html: 'The oats problem is ours, written for teaching. It is not taken from an NCDPI released form or any operational test.' }
      ]
    },
    {
      id: 'weights', tint: 'deep', eyebrow: 'Domain weights',
      h2: 'What math is on the NC EOG test in each grade?',
      lede: 'NCDPI publishes a percentage range for every domain of the NC Standard Course of Study. The ranges below are NCDPI&rsquo;s; the totals for each grade are 100 percent.',
      body: [
        { kind: 'table', caption: 'EOG Mathematics domain weight distributions, grades 3 to 5 (NCDPI test specifications, April 2026, Table 1)', head: ['Domain', 'Grade 3', 'Grade 4', 'Grade 5'], rows: [
          ['Operations and Algebraic Thinking', '32 to 36%', '14 to 18%', '9 to 13%'],
          ['Number and Operations in Base Ten', '9 to 13%', '25 to 29%', '25 to 29%'],
          ['Number and Operations, Fractions', '28 to 32%', '30 to 34%', '39 to 43%'],
          ['Measurement and Data, Geometry', '23 to 27%', '23 to 27%', '19 to 23%']
        ] },
        { kind: 'table', mt: true, caption: 'EOG Mathematics domain weight distributions, grades 6 to 8 (NCDPI test specifications, April 2026, Table 2)', head: ['Domain', 'Grade 6', 'Grade 7', 'Grade 8'], rows: [
          ['Ratios and Proportional Relationships', '24 to 28%', '24 to 28%', 'Not tested as a domain'],
          ['The Number System', '20 to 24%', '8 to 12%', 'With Expressions and Equations'],
          ['Expressions and Equations', '22 to 26%', '20 to 24%', 'With the Number System'],
          ['The Number System, Expressions and Equations', 'Not used', 'Not used', '24 to 28%'],
          ['Functions', 'Not tested', 'Not tested', '28 to 32%'],
          ['Geometry', '12 to 16%', '16 to 20%', '24 to 28%'],
          ['Statistics and Probability', '12 to 16%', '22 to 26%', '16 to 20%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Patterns worth noticing',
          left: [
            'Grade 3 is an operations year: Operations and Algebraic Thinking is 32 to 36 percent. By grade 5 the same domain is down to 9 to 13 percent and fractions dominate.',
            'Grade 7 gives Statistics and Probability 22 to 26 percent, more than in grade 6 or grade 8. Many children treat probability as a short unit; on the grade 7 EOG it is a quarter of the test.'
          ],
          rightH3: 'Grade 8 is about functions',
          right: [
            'Functions is the largest grade 8 domain at 28 to 32 percent. Reading slope from a table, comparing two functions and spotting a non-linear one are core skills.',
            'NCDPI also notes some standards will not be directly assessed, either because a limited-time test cannot assess them well or because another standard covers them.'
          ] }
      ]
    },
    {
      id: 'rigor', tint: 'tint', eyebrow: 'Rigor',
      h2: 'How hard are the NC EOG math questions?',
      lede: 'NCDPI classifies every item by Webb&rsquo;s Depth of Knowledge. About half or more of each test is DOK 2, and from grade 4 a small share is DOK 3, the most demanding level.',
      body: [
        { kind: 'table', caption: 'EOG Mathematics items by Depth of Knowledge (NCDPI test specifications, April 2026, Table 3)', head: ['Grade', 'DOK 1', 'DOK 2', 'DOK 3'], rows: [
          ['3', '40 to 50%', '50 to 60%', 'None'],
          ['4', '35 to 45%', '50 to 60%', '5%'],
          ['5', '30 to 40%', '50 to 60%', '8 to 10%'],
          ['6', '25 to 35%', '50 to 60%', '8 to 15%'],
          ['7', '25 to 35%', '50 to 60%', '8 to 15%'],
          ['8', '25 to 35%', '50 to 60%', '8 to 15%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the levels mean in practice',
          left: [
            'In our teaching terms, DOK 1 is recall and routine procedure: a multiplication fact, a conversion. DOK 2 asks for a decision or two steps: which operation, which representation. DOK 3 asks for reasoning across several steps.',
            'Because DOK 1 shrinks from up to 50 percent in grade 3 to at most 35 percent in grades 6 to 8, drilling facts alone gets less effective each year.'
          ],
          rightH3: 'Our grade 7 example, two ways',
          right: [
            'A game costs 40 and is 15 percent off. What is the sale price? Calculator-inactive route: 10 percent is 4, 5 percent is 2, so 15 percent is 6, and 40 - 6 = 34. Calculator-active route: 40 x 0.85 = 34.',
            'Teaching both routes means the child is ready whichever section the question lands in, and the mental route doubles as a check on the calculator route.'
          ] }
      ]
    },
    {
      id: 'when', tint: 'deep', eyebrow: 'Timing and dates',
      h2: 'When is the NC EOG math test, and how long does it take?',
      lede: 'In the last ten days of the school year. NCDPI estimates two hours for most students and allows up to three, except for students whose accommodations include extended time.',
      body: [
        { kind: 'table', caption: 'EOG Mathematics timing and administration (NCDPI test specifications, April 2026; State Tests page; 2026 to 2027 Test Coordinator&rsquo;s Policies and Procedures Handbook)', head: ['Item', 'What NCDPI sets'], rows: [
          ['Testing window', 'The last ten days of the school year, set by law as the final ten instructional days'],
          ['Estimated time', 'Two hours (120 minutes) for most students'],
          ['Maximum time', 'Three hours (180 minutes), except documented accommodations such as Scheduled Extended Time'],
          ['Mode', 'Online through NCTest; paper only for students with disabilities who need it'],
          ['Language', 'English only; native language versions are not available'],
          ['Before test day', 'Each student completes the Online Assessment Tutorial at least once at school'],
          ['Makeups', 'Schools are expected to test early in the window and keep the final days for makeups']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why there is no single 2027 date',
          left: [
            'North Carolina districts set their own calendars, so the last ten days of the school year fall on different dates from one district to the next. The handbook quotes the statute: annual assessments &ldquo;shall be administered within the final ten instructional days of the school year&rdquo; for yearlong courses.',
            'Find your district&rsquo;s last day of school for 2026 to 2027 and count back ten instructional days. That is the window, and our plan works back from it.'
          ],
          rightH3: 'Eighth graders in NC Math 1',
          right: [
            'The handbook quotes State Board policy ACCT-021: grade 8 students enrolled for credit in NC Math 1 take the NC Math 1 end-of-course test, and schools shall not assess them on the grade 8 mathematics EOG.',
            'So an accelerated eighth grader prepares for a different test, built on NC Math 1 content rather than the grade 8 standards.'
          ] },
        { kind: 'source', html: 'Sources: NCDPI <a class="ag-inline-link" href="' + ST + '" rel="noopener" target="_blank">State Tests</a> page and the <a class="ag-inline-link" href="' + DPI + '/documents/accountability/testing/north-carolina-test-coordinators-handbook" rel="noopener" target="_blank">North Carolina Test Coordinator&rsquo;s Policies and Procedures Handbook</a>, 2026 to 2027, read 31 October 2026.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice',
      h2: 'NC EOG math practice: ten questions of our own',
      lede: 'Written by us to the NC Standard Course of Study. The section column says whether we would practise it with the calculator off or on.',
      body: [
        { kind: 'table', caption: 'Original practice set (ours, not NCDPI items), with answers', head: ['Grade', 'Question', 'Section', 'Answer'], rows: [
          ['3', 'Sam has 4 bags with 8 marbles in each. How many marbles?', 'Inactive', '32'],
          ['3', 'Which is larger, 2/3 or 2/6? Explain with a picture in your head.', 'Inactive', '2/3: thirds are bigger pieces than sixths'],
          ['4', 'What is 3,406 - 1,879?', 'Inactive', '1,527'],
          ['4', 'An angle is 3/8 of a full turn. How many degrees is that?', 'Active', '135 degrees'],
          ['5', 'What is 1 1/2 - 3/4?', 'Inactive', '3/4'],
          ['5', 'A tank is 12 by 8 by 6 inches. What is its volume?', 'Active', '576 cubic inches'],
          ['6', 'Divide 3/4 by 1/8.', 'Inactive', '6'],
          ['7', 'A bag has 3 red and 5 blue counters. What is the probability of red?', 'Inactive', '3/8'],
          ['7', 'Simplify -4 - (-9) + 2.', 'Inactive', '7'],
          ['8', 'Is the table x = 1, 2, 3 and y = 2, 5, 10 linear? Explain.', 'Active', 'No: the y-values rise by 3, then by 5']
        ] },
        { kind: 'p', mt: true, html: 'NCDPI posts a released form for each grade on its <a class="ag-inline-link" href="' + ST + '/end-grade-eog" rel="noopener" target="_blank">End-of-Grade</a> page and inside NCTest. Its specifications say released items must not be used for personal or financial gain and are copyrighted to NCDPI, so we do not use them in our paid lessons. Families can work through them at home for free, and we recommend it in the final weeks.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan',
      h2: 'How to prepare for the NC EOG math test in eight weeks',
      lede: 'Our plan, counted back from the first day of your district&rsquo;s last-ten-days window.',
      body: [
        { kind: 'ol', items: [
          '<b>Week 1: a split diagnostic.</b> One short set with the calculator off and one with it on, so we see which section is costing more.',
          '<b>Weeks 2 to 4: the heaviest domain for the grade.</b> Operations in grade 3, fractions in grades 4 and 5, ratios in grades 6 and 7, functions in grade 8, sized to NCDPI&rsquo;s percentages.',
          '<b>Week 5: calculator-inactive fluency.</b> Daily ten-minute sets of facts, fractions and signed numbers, with no calculator in reach.',
          '<b>Week 6: the second-largest domain.</b> For grade 7 that is statistics and probability; for grade 8, geometry.',
          '<b>Week 7: the platform.</b> The NCTest Online Assessment Tutorial and the Desmos practice calculators for the grade, plus the released form at home.',
          '<b>Week 8: a full-length rehearsal.</b> About two hours with both sections, then a light final week.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A habit that pays',
          left: [
            'Estimate first. A child who knows the answer should be about 30 notices at once when the working gives 300.'
          ],
          rightH3: 'A habit that costs',
          right: [
            'Saving the calculator for everything. On a third of the grade 6 to 8 test, and half of the grade 3 to 5 test, it is not there.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Grade by grade',
    h2: 'The domains we teach first for each NC EOG grade',
    lede: 'NCDPI&rsquo;s weights, turned into an order of work.',
    table: { caption: 'Priorities by grade (weights from NCDPI; order ours)', head: ['Grade', 'Teach first', 'Then'], rows: [
      ['3', 'Multiplication and division, 32 to 36%', 'Fractions, 28 to 32%'],
      ['4', 'Fractions, 30 to 34%', 'Base ten, 25 to 29%'],
      ['5', 'Fractions, 39 to 43%', 'Base ten, 25 to 29%'],
      ['6', 'Ratios, 24 to 28%', 'Expressions and equations, 22 to 26%'],
      ['7', 'Ratios, 24 to 28%', 'Statistics and probability, 22 to 26%'],
      ['8', 'Functions, 28 to 32%', 'Geometry and number system with equations, 24 to 28% each']
    ] },
    left: { h3: 'For parents', ps: [
      'Check your district calendar now for the last day of school; the EOG sits in the ten instructional days before it.',
      'If your eighth grader is in NC Math 1, they will not take the grade 8 EOG at all.'
    ] },
    right: { h3: 'For students', ps: [
      'Do the calculator-off section like a race against yourself, then check every answer by estimating.',
      'Ask for graph paper. You are allowed it, and it helps on geometry.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for North Carolina students',
    lede: 'Elementary number sense through to NC Math 1.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Grades 3 to 5', courses: [
        { code: 'NEP / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5 in sequence.' },
        { code: 'NEP / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Calculator-free speed.' },
        { code: 'NEP / E / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Speed calculation', blurb: 'Shortcuts for keen calculators.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'NEP / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratios to functions.' },
        { code: 'NEP / M / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'A quarter of grade 7.' },
        { code: 'NEP / M / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'For extra challenge.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'NC Math 1 and up', courses: [
        { code: 'NEP / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Toward NC Math 1.' },
        { code: 'NEP / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'NC Math 2 and 3 content.' },
        { code: 'NEP / H / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Functions in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons on Eastern Time for North Carolina',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school ET', l: 'A weekly lesson through the year.' },
      { time: 'Weekends', l: 'Full-length practice in May.' },
      { time: '1-on-1', l: 'Domain by domain, at your child&rsquo;s pace.' }
    ],
    cells: [
      { h3: 'Calculator off', p: 'Number sense practised every week.' },
      { h3: 'NC weights', p: 'Time spent where NCDPI puts the points.' },
      { h3: 'Gridded answers', p: 'Accuracy without answer choices.' },
      { h3: 'Desmos practice', p: 'The embedded NC calculators.' },
      { h3: 'Released forms at home', p: 'Free from NCDPI, for families.' },
      { h3: 'Group or one to one', p: 'Fifteen to twenty in a batch, or private.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'A few of our math students build small programs too; see <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews parents have left us on Google.',

  fees: {
    h2: 'Fees',
    lede: 'Charged monthly in US dollars, stop whenever you like: North Carolina families often begin in March and finish with the school year.',
    free: ['A free first class', 'Bring a recent school math test', 'No card required'],
    group: ['Fifteen to twenty students', 'A steady teacher', 'Choose your batch', 'Monthly'],
    one: ['A private teacher', 'Paced to your district calendar', 'Flexible times']
  },

  faq: {
    eyebrow: 'North Carolina families ask',
    h2: 'NC EOG math: questions from parents',
    items: [
      { q: 'When is the NC EOG math test in 2027?', a: 'NCDPI sets the window as the last ten days of the school year, so the date depends on your district\'s calendar. Count back ten instructional days from the last day of school for 2026 to 2027.' },
      { q: 'How many questions are on the NC EOG math test?', a: 'NCDPI\'s April 2026 specifications list 46 items in grades 3 and 4, 48 in grade 5 and 53 in grades 6 to 8. Of these, 40 count in grades 3 to 5 and 45 in grades 6 to 8; the rest are field-test items.' },
      { q: 'How long is the NC math EOG?', a: 'NCDPI estimates two hours for most students and allows a maximum of three hours, except for students with documented accommodations such as Scheduled Extended Time.' },
      { q: 'Is the NC EOG math test calculator or no calculator?', a: 'Both. Grades 3 to 5 have 20 calculator-inactive and 20 calculator-active scored items; grades 6 to 8 have 15 inactive and 30 active. The online test has an embedded calculator for the active section.' },
      { q: 'What calculator is used on the NC EOG?', a: 'NCTest embeds a four-function calculator for grades 3 to 5, a scientific calculator for grades 6 and 7, and scientific and graphing calculators for grade 8. NCDPI links Desmos practice versions of each.' },
      { q: 'What is on the 5th grade NC math EOG?', a: 'Fractions dominate at 39 to 43 percent, followed by base ten at 25 to 29 percent, measurement, data and geometry at 19 to 23 percent, and operations and algebraic thinking at 9 to 13 percent.' },
      { q: 'Are NC EOG math questions worth different points?', a: 'No. NCDPI\'s specifications say all items are worth one point each, across multiple choice, gridded response and technology-enhanced formats.' },
      { q: 'Where can I find NC EOG math practice tests?', a: 'NCDPI posts a released form for each grade on its End-of-Grade page and in NCTest, and the NCTest tutorial includes practice questions by grade span. Our own practice set is on this page.' },
      { q: 'Does an 8th grader in NC Math 1 take the EOG?', a: 'No. Under State Board policy ACCT-021, quoted in the 2026 to 2027 handbook, grade 8 students enrolled for credit in NC Math 1 take the NC Math 1 EOC instead of the grade 8 math EOG.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is set on Eastern Time.' },
      { q: 'Are you part of NCDPI?', a: 'No. Modern Age Coders is a private online school with no connection to NCDPI, the State Board of Education or any North Carolina district. We quote NCDPI\'s published specifications and handbook.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Grade-level tutoring and our North Carolina pages.',
    items: [
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'The first EOG year.' },
      { href: '/online-math-tutor-5th-grade', label: 'Fifth grade math tutoring', p: 'The fraction-heavy year.' },
      { href: '/online-math-tutor-7th-grade', label: 'Seventh grade math tutoring', p: 'Ratios, probability and statistics.' },
      { href: '/common-core-math-tutor', label: 'Common Core math tutor', p: 'Standards-based homework help.' },
      { href: '/best-coding-classes-for-kids-in-charlotte', label: 'Coding classes in Charlotte', p: 'Our Charlotte page.' },
      { href: '/coding-and-ai-classes-in-north-carolina', label: 'Coding and AI in North Carolina', p: 'Our North Carolina page.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send a recent school math test or report card comment. The teacher will run a short calculator-off check in the first class and tell you what to work on.',
    readFirst: 'Find out <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or open the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'Teachers join from India at times fixed in Eastern Time, after the North Carolina school day or at weekends. A WhatsApp message is the fastest way to reach us.',
    formNote: 'Free first class, no card details.'
  },

  footer: {
    cols: [
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-4th-grade', label: 'Grade 4 math' },
        { href: '/online-math-tutor-6th-grade', label: 'Grade 6 math' },
        { href: '/online-math-tutor-8th-grade', label: 'Grade 8 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'North Carolina and the US', links: [
        { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
        { href: '/best-coding-classes-for-kids-in-charlotte', label: 'Charlotte' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Calculator off, then on'
  },

  personalityCss: `
.ag-root.ag-nep .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-nep .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-nep .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-nep .ag-table td.ag-num { font-variant-numeric: tabular-nums; text-align: center; }
.ag-root.ag-nep .ag-steps li { padding-bottom: 5px; }
`,

  dossier: {
    curriculumAuthority: 'North Carolina Department of Public Instruction, read raw 31 October 2026: End-of-Grade Mathematics Tests at Grades 3 to 8, North Carolina Test Specifications (April 2026: domain weights, DOK, item counts, calculator inactive and active items, timing, window, online mode, calculators, released forms, ALD adoption); State Tests page; North Carolina Test Coordinator&rsquo;s Policies and Procedures Handbook 2026 to 2027 (statutory window, makeups, ACCT-021 grade 8 NC Math 1 rule).',
    localProject: 'Our grade 5 calculator-inactive oats example (2/3 x 3/4 = 6/12 = 1/2 cup, checked as two quarter-cups), our grade 7 discount example done mentally and by calculator (40 less 15 percent is 34), our ten-item practice set by section, our eight-week plan and grade priorities. Lesson family: number sense for the calculator-inactive section.',
    requiredMentions: ['All items will be worth one point each.', 'Number and Operations, Fractions', '39 to 43%', 'Any four-function with memory key', 'Four-function with square root, pi and algebraic logic', 'Three hours (180 minutes), except documented accommodations such as Scheduled Extended Time', 'shall be administered within the final ten instructional days of the school year', 'schools shall not assess them on the grade 8 mathematics EOG', 'English only; native language versions are not available', '2/3 x 3/4 = 6/12', 'must not be used for personal or financial gain'],
    sources: [
      { claim: 'End-of-Grade Mathematics Tests at Grades 3 to 8, North Carolina Test Specifications, April 2026.', url: DPI + '/documents/accountability/testing/eog/eog-mathematics-grades-3-8-test-specifications' },
      { claim: 'NCDPI State Tests page.', url: ST },
      { claim: 'NCDPI End-of-Grade resources page with released forms and Desmos calculators.', url: ST + '/end-grade-eog' },
      { claim: 'North Carolina Test Coordinator&rsquo;s Policies and Procedures Handbook, 2026 to 2027.', url: DPI + '/documents/accountability/testing/north-carolina-test-coordinators-handbook' }
    ],
    rejectedClaims: [
      'Achievement level names and scale-score ranges: the State Board policy host (simbli.eboardsolutions.com) returned an Incapsula block and NCDPI&rsquo;s achievement-level ranges document returned Page not Found; not retried, not printed.',
      'Exact 2027 EOG dates: none exist statewide; the window is the last ten instructional days of each district&rsquo;s calendar.',
      'The State Tests page says EOG math at grades 5 and 8 must be online, while the April 2026 specifications say grades 3 to 8; the page follows the newer specifications.',
      'Use of EOG scores for promotion or placement: in our research map only, not verified at a primary source; not printed.',
      'Reproducing or using released-form items: refused, also because NCDPI forbids their use for personal or financial gain.',
      'Level or score promises for our classes: refused. Any affiliation with NCDPI or a district: none.'
    ]
  }
};
