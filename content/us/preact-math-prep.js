'use strict';
// PreACT and PreACT 8/9 math prep (ag- exam door; UK and US exams cluster, row US057). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from ACT
// (act.org); copies in keyword-research-2026-09/uk-us-gap/src/preact-math-prep/:
//  - act.org/content/act/en/products-and-services/preact.html (www.act.org/preact redirects here): "PreACT assessments
//    offer 8th, 9th, and 10th graders an early experience with ACT test items, provides a predicted ACT test score";
//    "Anchored on the ACT College and Career Readiness Standards"; PreACT 8/9 or paper PreACT takers "may even opt to have
//    their information shared with colleges and scholarship agencies"; comparison of PreACT 8/9, PreACT, PreACT 9 Secure
//    and PreACT Secure: top scores 30, 35, 32, 35 on the 1-36 scale; grades 8-9, 9-11, 8-9, 9-11; delivery paper-pencil and
//    online, online, online; 130, 160, 155, 160 minutes; schools choose when to test "anytime between early September to
//    late May" (8/9 and PreACT); Secure windows fall four weeks September-October, spring six weeks March-April; Secure
//    versions usable "for program placement, high-stakes, or accountability purposes"; STEM score.
//  - .../preact/enhancements.html: "PreACT Assessments are aligning with the Enhanced ACT"; Secure blueprints spring 2026;
//    PreACT fall 2026; PreACT 8/9 "launch date coming soon"; "Reduced Answer Choices for Math Questions (5 to 4)";
//    Composite "calculated using English+Math+Reading" by fall 2026; science optional "at the contract level", "not at the
//    individual student preference level".
//  - .../preact/faqs.html: blueprint tables (PreACT new: Math 36 items (32 scored) 45 min, current 36 items 40 min; PreACT
//    Secure Math 36 (32 scored) 45 min; PreACT 9 Secure Math 34 (30 scored) 45 min); "Operational items are scored, while
//    embedded field test items are not"; enhanced ACT and PreACT comparison (ACT Math 45 items, 50 min, 67 s per item;
//    PreACT and PreACT Secure 36, 45, 75; PreACT 9 Secure 34, 45, 79); "PreACT 8/9 enhanced blueprint is coming soon";
//    items per content area (PreACT 8/9 Math 35); math reporting categories for PreACT and PreACT Secure enhanced
//    blueprint (Preparing for Higher Math 25, 78%: Number & Quantity 3-4, Algebra 5-7, Functions 5-7, Geometry 5-7,
//    Statistics & Probability 3-4; Integrating Essential Skills 7, 22%; Modeling at least 7, overlapping); PreACT 8/9 and
//    PreACT booklets may be retained; Secure items not released; reports include predicted ACT score ranges.
// Not used: ACT's research claims about PreACT takers' later ACT scores and college enrollment (publisher statistics with
// obvious selection effects; not a basis for any promise). The calculator rule for PreACT is not stated on these pages,
// so the page tells families to ask the school.
// Our own material, labelled: worked examples (a streaming plan model C = 12 + 0.5m; scientific notation 3.2 x 10^4
// times 5 x 10^-2 = 1.6 x 10^3; median and mean of a skewed data set; 75 seconds per item from 45 minutes / 36 items,
// against 50 minutes / 45 items = about 67 on the ACT, both as ACT states); a ten-item practice set; plans by grade.
// Lesson family: modeling (turning a situation into a function) and number and quantity.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST PREP', blurb: 'PreACT and PreACT 8/9 math in 2026-27: the four PreACT versions, the new 36-item math blueprint with four answer choices, and original practice.' },
  slug: 'preact-math-prep',
  code: 'prx',
  accent: '#0D6677',
  accentRationale: 'PreACT math prep: a deep teal #0D6677 from the US allocation table, 6.22:1 on paper #FBF8F2 and 5.35:1 on the deepest tint, apart from the College Board pages in green, brown and mulberry',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'PreACT math prep',
  title: 'PreACT Test Prep: PreACT and PreACT 8/9 Math Help',
  description: 'PreACT test prep for grades 8 to 10: the four PreACT versions, the new 36-item math blueprint with four answer choices, scoring on the ACT scale, and practice.',
  ogDescription: 'PreACT is ACT\'s early test for grades 8 to 10, and in 2026 it is changing to match the enhanced ACT: four answer choices in math, a new Composite, optional science. What ACT publishes, and how to prepare.',
  twitterDescription: 'PreACT and PreACT 8/9 math in 2026-27, from ACT\'s own pages, with practice.',
  pageName: 'PreACT Math Prep',
  webPageDescription: 'A guide for families and students in grades 8 to 10 to the math section of ACT\'s PreACT assessments (PreACT 8/9, PreACT, PreACT 9 Secure and PreACT Secure), from ACT\'s product, enhancement and FAQ pages, with worked examples and an original practice set.',
  courseDescription: 'PreACT math for grades 8 to 10 in live video classes: algebra, functions, geometry, statistics and modeling on the ACT pattern, in a group of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'PreACT math prep',
  navLinks: [
    { href: '#versions', label: 'Four versions' },
    { href: '#changes', label: '2026 changes' },
    { href: '#math', label: 'Math section' },
    { href: '#scores', label: 'Scores' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 8 to 10 &middot; ACT\'s early assessments',
  h1: 'PreACT test prep: PreACT and PreACT 8/9 math',
  lede: 'PreACT is ACT\'s early test for students in grades 8 to 10, given by schools as a first look at the ACT and a predicted score. There are now four versions, and through the 2026-27 school year they are being rebuilt to match the enhanced ACT: math questions drop from five answer choices to four, the PreACT math section grows to 45 minutes, and science becomes a school-level option. This page sets out what ACT publishes about each version and the math section, explains how scores relate to the ACT, and offers problems we wrote. (PreACT here is the ACT test, not the JavaScript library of the same name.)',
  secondaryCta: { href: '#changes', label: 'See what changed in 2026' },
  wa: 'Hello Modern Age Coders, my child is taking the PreACT at school and we would like help with the math section. Could we book a free first class?',
  heroNote: 'Live math teaching since 2020 &middot; 10,000+ students &middot; original practice, never ACT items',
  spec: [
    ['Publisher', 'ACT'],
    ['Grades', '8 to 10 (some versions to 11)'],
    ['Versions', 'PreACT 8/9, PreACT, two Secure'],
    ['New PreACT math', '36 items, 45 minutes'],
    ['Answer choices', 'Four, from 2026'],
    ['Score scale', 'ACT 1 to 36, capped lower'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'PreACT is a family of ACT assessments for grades 8 to 10: PreACT 8/9, PreACT, PreACT 9 Secure and PreACT Secure. Each tests English, math, reading and science on the ACT\'s 1 to 36 scale, with a lower top score, and predicts ACT performance. The new PreACT math blueprint, from fall 2026, has 36 items in 45 minutes with four answer choices. Our ACT Math Prep course takes students through this section live online, in a group batch or 1-on-1.',

  picks: {
    eyebrow: 'Early ACT math',
    h2: 'Three courses for PreACT math',
    lede: 'Our ACT course covers the format; the other two build the algebra and functions that most of the math section rests on.',
    items: [
      { course: 'act-math-prep-course', code: 'PRX / 01', title: 'ACT math', note: 'The enhanced ACT math section, from PreACT onward.' },
      { course: 'algebra-foundations-masterclass', code: 'PRX / 02', title: 'Algebra foundations', note: 'Algebra and functions for grades 8 to 10.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'PRX / 03', title: 'Middle school math', note: 'Number, ratio and geometry for PreACT 8/9.' }
    ]
  },

  sections: [
    {
      id: 'versions', tint: 'tint', eyebrow: 'Four versions',
      h2: 'What are the different PreACT tests?',
      lede: 'ACT now publishes four PreACT assessments. Two are for practice and planning; the two Secure versions can also be used for placement and accountability.',
      body: [
        { kind: 'table', caption: 'The PreACT assessments compared (ACT, Compare the PreACT Assessments, read 31 October 2026)', head: ['Version', 'Grades', 'Format', 'Total time', 'Top score on the 1 to 36 scale'], rows: [
          ['PreACT 8/9', '8 to 9', 'Paper or online, multiple choice', '130 minutes', '30'],
          ['PreACT', '9 to 11', 'Paper or online, multiple choice', '160 minutes', '35'],
          ['PreACT 9 Secure', '8 to 9', 'Online, multiple choice', '155 minutes', '32'],
          ['PreACT Secure', '9 to 11', 'Online, multiple choice', '160 minutes', '35']
        ], numCols: [4] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.act.org/content/act/en/products-and-services/preact.html" rel="noopener" target="_blank">PreACT Assessments, ACT</a>, read 31 October 2026. ACT\'s FAQ gives the new PreACT blueprint as 160 minutes with science and the earlier one as 130. PreACT and ACT are ACT trademarks; we are not connected with ACT.' },
        { kind: 'two', mt: true,
          leftH3: 'What ACT says PreACT is for',
          left: [
            'ACT says PreACT assessments "offer 8th, 9th, and 10th graders an early experience with ACT test items" and provide a predicted ACT score. They are "Anchored on the ACT College and Career Readiness Standards."',
            'Schools choose when to give PreACT 8/9 and PreACT, "anytime between early September to late May." The two Secure versions run in a four-week fall window in September and October and a six-week spring window in March and April.'
          ],
          rightH3: 'Secure versions carry more weight',
          right: [
            'ACT says schools, districts or states can use PreACT 9 Secure and PreACT Secure "for program placement, high-stakes, or accountability purposes", and its enhancement page mentions uses such as dual enrollment.',
            'If your child\'s school uses a Secure version for placement, the score matters more than a practice PreACT would. Ask the school which version it gives and how it uses the result.'
          ] }
      ]
    },
    {
      id: 'changes', tint: 'deep', eyebrow: 'The 2026 changes',
      h2: 'Is the PreACT changing in 2026?',
      lede: 'Yes. ACT says the PreACT assessments "are aligning with the Enhanced ACT", on a timetable that runs from spring 2026 to a PreACT 8/9 date ACT has not yet announced.',
      body: [
        { kind: 'table', caption: 'Enhanced PreACT timetable (ACT, Enhanced PreACT: What K-12 Educators Need to Know, read 31 October 2026)', head: ['Assessment', 'New blueprint', 'English, Math, Reading Composite', 'Science optional'], rows: [
          ['PreACT 9 Secure', 'Spring 2026', 'Spring 2026', 'Spring 2026'],
          ['PreACT Secure', 'Spring 2026', 'Spring 2026', 'Spring 2026'],
          ['PreACT', 'Fall 2026', 'Fall 2026', 'Fall 2026'],
          ['PreACT 8/9', 'Not yet announced ("TBD")', 'Fall 2026', 'Fall 2026']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What changes for math',
          left: [
            'ACT lists "Reduced Answer Choices for Math Questions (5 to 4)". With four options, elimination is a little easier, and a blind guess has a 1 in 4 chance instead of 1 in 5: our arithmetic.',
            'The new PreACT math section is 36 items, 32 of them scored, in 45 minutes, against 36 items in 40 minutes on the earlier PreACT blueprint, according to ACT\'s FAQ.'
          ],
          rightH3: 'What changes for the Composite',
          right: [
            'From fall 2026 the Composite is "calculated using English+Math+Reading", the same as the enhanced ACT, so math is one of three parts of the Composite rather than one of four.',
            'Science becomes optional, but ACT is clear that the choice is the school\'s or district\'s, "not at the individual student preference level."'
          ] },
        { kind: 'p', mt: true, html: 'ACT also explains that each section now includes embedded field test items: "Operational items are scored, while embedded field test items are not." They look like ordinary questions and are mixed in, so a student should treat every question as if it counts.' }
      ]
    },
    {
      id: 'math', tint: 'tint', eyebrow: 'The math section',
      h2: 'What is on the PreACT math test?',
      lede: 'The same kinds of math as the ACT, at a lower level of difficulty. ACT publishes the reporting categories for the enhanced PreACT and PreACT Secure math sections.',
      body: [
        { kind: 'table', caption: 'PreACT and PreACT Secure math reporting categories, enhanced blueprint (ACT PreACT FAQ, read 31 October 2026; 32 operational items)', head: ['Reporting category', 'Operational items', 'Share of test'], rows: [
          ['Preparing for Higher Math', '25', '78%'],
          ['of which Number and Quantity', '3 to 4', '9 to 13%'],
          ['of which Algebra', '5 to 7', '16 to 22%'],
          ['of which Functions', '5 to 7', '16 to 22%'],
          ['of which Geometry', '5 to 7', '16 to 22%'],
          ['of which Statistics and Probability', '3 to 4', '9 to 13%'],
          ['Integrating Essential Skills', '7', '22%'],
          ['Modeling (overlaps the others)', 'At least 7', 'At least 22%']
        ], numCols: [1, 2] },
        { kind: 'two', mt: true,
          leftH3: 'Two kinds of math in one section',
          left: [
            'Preparing for Higher Math is the newer content: algebra, functions, geometry, statistics and number and quantity at the level a student meets in high school courses.',
            'Integrating Essential Skills is the earlier math used in harder combinations: rates, percentages, proportional reasoning, area and averages, often several in one question.'
          ],
          rightH3: 'Modeling runs through everything',
          right: [
            'ACT says items in the Modeling category "overlap with and are counted in other reporting categories." At least 7 of the 32 scored items ask the student to turn a situation into math and interpret the result.',
            'That is the skill we teach most deliberately, because it is the one ordinary homework practises least.'
          ] },
        { kind: 'table', mt: true, caption: 'Time per math item on the enhanced ACT and PreACT (ACT\'s own comparison table; items include unscored field-test items)', head: ['Test', 'Math items', 'Minutes', 'Seconds per item'], rows: [
          ['Enhanced ACT', '45', '50', '67'],
          ['PreACT and PreACT Secure', '36', '45', '75'],
          ['PreACT 9 Secure', '34', '45', '79']
        ], numCols: [1, 2, 3] },
        { kind: 'p', mt: true, html: 'The PreACT gives a little more time per math item than the ACT. ACT says the math section\'s time grew "to better align with the enhanced ACT average time per question." For PreACT 8/9, ACT\'s FAQ lists 35 math items and says its enhanced blueprint "is coming soon". Calculator rules are not stated on the ACT pages we read, so ask the school what is allowed.' }
      ]
    },
    {
      id: 'scores', tint: 'deep', eyebrow: 'Scores and reports',
      h2: 'How is the PreACT scored, and what does the score mean?',
      lede: 'On the ACT\'s own 1 to 36 scale, with a top score below 36, plus predicted ACT score ranges.',
      body: [
        { kind: 'two',
          leftH3: 'The scale',
          left: [
            'ACT says every PreACT version is "Aligned to the same 1-36 score scale as the ACT", with a top score of 30 for PreACT 8/9, 32 for PreACT 9 Secure and 35 for PreACT and PreACT Secure. Each also gives a STEM score.',
            'A capped scale means a PreACT 8/9 score of 30 is the highest available, not a sign that 6 points were missed.'
          ],
          rightH3: 'The prediction',
          right: [
            'ACT says reports for all four assessments include predicted ACT score ranges, and PreACT 8/9 and PreACT 9 Secure reports also include predicted PreACT score ranges.',
            'A prediction is a range, not a promise, and it describes the student as they were on test day. Two years of algebra later, the picture can be quite different.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<b>Find out which version your school gives.</b> PreACT 8/9 and PreACT are practice and planning tools; the Secure versions can be used for placement.',
          '<b>Ask when and in which format.</b> Paper or online for PreACT 8/9 and PreACT; online only for the Secure versions.',
          '<b>Ask whether science is included.</b> From fall 2026 that is the school\'s decision, and it changes how the Composite is calculated.',
          '<b>Read the report by category, not only the Composite.</b> The math reporting categories show where the points were lost.',
          '<b>Keep the test booklet if you get it.</b> ACT says schools using PreACT 8/9 and PreACT may retain booklets for the item response reports; Secure items are not released.'
        ] },
        { kind: 'p', mt: true, html: 'ACT also says students who take PreACT 8/9 or a paper PreACT "may even opt to have their information shared with colleges and scholarship agencies." That choice is the family\'s; nothing on the test requires it.' }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Three PreACT-level math problems, worked by reasoning',
      lede: 'Our own problems for three of ACT\'s reporting categories. They are not ACT items, and ACT\'s own practice is linked from the school\'s test materials.',
      body: [
        { kind: 'table', caption: 'Modeling and Functions (ours): a streaming plan costs 12 units a month plus 0.5 units per film rented. Write the model and use it.', head: ['Step', 'Reasoning'], rows: [
          ['1. Name the variables', 'm = films rented in a month, C = monthly cost'],
          ['2. Fixed part and rate', 'Fixed 12, plus 0.5 per film'],
          ['3. The model', 'C = 12 + 0.5m'],
          ['4. Use it forward', '14 films: C = 12 + 7 = 19'],
          ['5. Use it backward', 'A bill of 20.5 means 0.5m = 8.5, so m = 17 films'],
          ['6. Interpret the slope', 'Each extra film adds half a unit; the graph rises 1 for every 2 films']
        ] },
        { kind: 'table', mt: true, caption: 'Number and Quantity (ours): compute (3.2 x 10^4) x (5 x 10^-2) in scientific notation', head: ['Step', 'Reasoning'], rows: [
          ['1. Multiply the numbers', '3.2 x 5 = 16'],
          ['2. Add the exponents', '10^4 x 10^-2 = 10^2'],
          ['3. Combine', '16 x 10^2'],
          ['4. Normalise', '16 = 1.6 x 10, so the answer is 1.6 x 10^3, which is 1,600']
        ] },
        { kind: 'table', mt: true, caption: 'Statistics and Probability (ours): weekly reading minutes for seven students are 20, 25, 25, 30, 35, 40 and 200. Which describes a typical student better, the mean or the median?', head: ['Measure', 'Value', 'Comment'], rows: [
          ['Mean', '375 / 7, about 53.6', 'Pulled up by the single 200'],
          ['Median', '30', 'The middle value, unaffected by the outlier'],
          ['Better choice', 'Median', 'Six of seven students read 40 minutes or less']
        ] },
        { kind: 'p', mt: true, html: 'Each example asks for a decision as well as a calculation: which variable is which, which form is normal, which measure is fair. That is what ACT\'s Integrating Essential Skills and Modeling categories describe, and it is why we teach younger students to explain their choice in a sentence before they compute.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice and plans',
      h2: 'An original PreACT math practice set and plans by grade',
      lede: 'Ten problems we wrote across ACT\'s math reporting categories, with answers, then short plans for grade 8 and grade 10.',
      body: [
        { kind: 'table', caption: 'Practice we wrote by ACT category (on test day four answer choices would follow each); answers last', head: ['#', 'Category', 'Problem', 'Answer'], rows: [
          ['1', 'Number and Quantity', 'Simplify 2^5 x 2^-3', '4'],
          ['2', 'Number and Quantity', 'Write 0.00072 in scientific notation', '7.2 x 10^-4'],
          ['3', 'Algebra', 'Solve 5(x + 1) = 3x + 17', 'x = 6'],
          ['4', 'Algebra', 'Solve x^2 - 9 = 0', 'x = 3 or x = -3'],
          ['5', 'Functions', 'If f(x) = 2x^2 - x, find f(-2)', '10'],
          ['6', 'Functions', 'A line has slope -2 and y-intercept 7. Its x-intercept?', '3.5'],
          ['7', 'Geometry', 'Area of a circle of diameter 10', '25 pi'],
          ['8', 'Geometry', 'Interior angle sum of a hexagon', '720 degrees'],
          ['9', 'Statistics and Probability', 'P(sum of 7) rolling two fair dice', '1/6'],
          ['10', 'Essential Skills', 'A runner covers 5 km in 25 minutes. Speed in km per hour?', '12']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Grade 8 or 9, PreACT 8/9.</b> One look at the format, then steady work on number, ratio, linear equations and basic geometry. The aim is a fair baseline, not a drilled score.',
          '<b>Grade 9 or 10, PreACT or PreACT Secure.</b> A practice section under a 45-minute limit, then the two weakest reporting categories, usually Functions and Geometry.',
          '<b>After the report.</b> Use the category breakdown to plan the next year of school math and, later, ACT preparation.',
          '<b>If the school uses a Secure version for placement.</b> Ask how the score is used, and prepare as you would for any placement test: content first, format second.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From PreACT to the ACT',
    h2: 'How the ACT sequence usually runs',
    lede: 'Our summary of where each version sits, using ACT\'s published grades and score caps.',
    table: { caption: 'The PreACT to ACT sequence (ours, from ACT\'s published facts)', head: ['Stage', 'Test', 'Top score'], rows: [
      ['Grade 8 or 9', 'PreACT 8/9 or PreACT 9 Secure', '30 or 32'],
      ['Grade 9 to 11', 'PreACT or PreACT Secure', '35'],
      ['Grade 11 or 12', 'The ACT', '36']
    ] },
    left: { h3: 'For students', ps: [
      'Every question may be scored, even though some are field tests. Treat them all the same.',
      'With four answer choices, ruling out one or two wrong ones is often enough to find the right one.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask which PreACT version your school uses, and whether it is for practice or placement.',
      'A predicted ACT range is a starting point. School math over the next two years moves it most.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses from grade 7 to the ACT',
    lede: 'Live classes from middle school foundations to full ACT preparation.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Grades 7 to 9', courses: [
        { code: 'PRX / F / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Number, ratio, geometry.' },
        { code: 'PRX / F / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra 1 in depth.' },
        { code: 'PRX / F / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Modeling in Python.' }
      ] },
      { num: 'II', h3: 'High school', sub: 'Grades 9 to 11', courses: [
        { code: 'PRX / H / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry to precalculus.' },
        { code: 'PRX / H / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and chance.' },
        { code: 'PRX / H / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'For strong younger students.' }
      ] },
      { num: 'III', h3: 'Tests', sub: 'Grades 10 to 12', courses: [
        { code: 'PRX / T / 01', slug: 'act-math-prep-course', title: 'ACT math', blurb: 'The enhanced ACT.' },
        { code: 'PRX / T / 02', slug: 'sat-math-prep-course', title: 'SAT math', blurb: 'If you sit the SAT too.' },
        { code: 'PRX / T / 03', slug: 'ap-precalculus-exam-prep-course', title: 'AP Precalculus', blurb: 'Functions in depth.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'PreACT math lessons around the school year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, linked to class math.' },
      { time: 'Weekends', l: 'Practice sections under a 45-minute clock.' },
      { time: '1-on-1', l: 'Planned to your school\'s PreACT date.' }
    ],
    cells: [
      { h3: 'Category by category', p: 'ACT\'s reporting categories, in turn.' },
      { h3: 'Modeling first', p: 'Situations into functions.' },
      { h3: 'Four choices', p: 'Elimination practised properly.' },
      { h3: 'Grade-appropriate', p: 'Calm work for eighth graders.' },
      { h3: 'Toward the ACT', p: 'The same scale and categories.' },
      { h3: 'Group or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work from our students',
  projectsLede: 'Modeling is easier to see when you code it. Examples on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from families, copied exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Fees are charged per month in US dollars with nothing to sign up front. Prepare for one PreACT sitting, then decide about ACT preparation when the report arrives.',
    free: ['A free first class', 'Bring the school\'s PreACT version', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Paced to school math', 'Flexible times']
  },

  faq: {
    eyebrow: 'Questions families ask',
    h2: 'PreACT math: common questions',
    items: [
      { q: 'What is the PreACT?', a: 'It is ACT\'s early assessment for students in grades 8 to 10, given by schools. ACT says it offers an early experience with ACT test items and a predicted ACT score, in English, math, reading and science.' },
      { q: 'What is the difference between PreACT and PreACT 8/9?', a: 'PreACT 8/9 is for grades 8 and 9, takes 130 minutes and has a top score of 30. PreACT is for grades 9 to 11 and has a top score of 35; its new blueprint takes 160 minutes with science.' },
      { q: 'How many math questions are on the PreACT?', a: 'ACT says the new PreACT blueprint, from fall 2026, has 36 math items, 32 of them scored, in 45 minutes. ACT lists 35 math items for PreACT 8/9, whose new blueprint is still to come.' },
      { q: 'Is the PreACT changing in 2026?', a: 'Yes. ACT is aligning PreACT with the enhanced ACT: math questions go from five answer choices to four, the Composite uses English, math and reading, and science becomes optional at the school or district level.' },
      { q: 'How is the PreACT scored?', a: 'On the ACT\'s 1 to 36 scale, with top scores of 30 for PreACT 8/9, 32 for PreACT 9 Secure and 35 for PreACT and PreACT Secure. Reports include predicted ACT score ranges.' },
      { q: 'Does the PreACT count for anything?', a: 'PreACT 8/9 and PreACT are mainly practice and planning tools. ACT says schools, districts or states can use the Secure versions for program placement, high-stakes or accountability purposes, so ask how your school uses it.' },
      { q: 'Can you use a calculator on the PreACT?', a: 'The ACT pages we read do not state the PreACT calculator rule. Ask your school\'s test coordinator, and practise with the calculator your child will be allowed.' },
      { q: 'How should a ninth grader prepare for the PreACT?', a: 'Lightly: one look at the format, steady school math, and a practice section under a 45-minute limit. The report is most useful when it reflects what the student really knows.' },
      { q: 'When are your PreACT classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with ACT?', a: 'No. We are an independent online school. We describe PreACT from ACT\'s published pages and teach with our own problems.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More math help for grades 8 to 10.',
    items: [
      { href: '/act-math-tutoring-online', label: 'ACT math tutoring', p: 'Where PreACT leads.' },
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math', p: 'The PreACT 8/9 year for many.' },
      { href: '/online-math-tutor-9th-grade', label: 'Ninth grade math', p: 'Algebra 1 and functions.' },
      { href: '/online-math-tutor-10th-grade', label: 'Tenth grade math', p: 'Geometry and the PreACT year.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'The core of Preparing for Higher Math.' },
      { href: '/sat-math-tutoring-online', label: 'SAT math tutoring', p: 'For students sitting both tests.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us which PreACT version the school gives and when. The teacher will start with modeling and whichever reporting category looks weakest.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or explore <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'Our teachers are live from India, with after-school and weekend slots across US time zones. WhatsApp is the simplest way to get in touch.',
    formNote: 'First class free, and no card asked for.'
  },

  footer: {
    cols: [
      { h4: 'Toward the ACT', links: [
        { href: '/act-math-tutoring-online', label: 'ACT math' },
        { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring' },
        { href: '/online-math-tutor-9th-grade', label: 'Grade 9 math' },
        { href: '/online-math-tutor-10th-grade', label: 'Grade 10 math' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/online-math-tutor-8th-grade', label: 'Grade 8 math' },
        { href: '/sat-math-tutoring-online', label: 'SAT math' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'C = 12 + 0.5m'
  },

  personalityCss: `
.ag-root.ag-prx .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-prx .ag-capsule { border-left-width: 4px; border-radius: 8px; }
.ag-root.ag-prx .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-prx .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-prx .ag-section-head h2 { max-width: 29ch; }
`,

  dossier: {
    curriculumAuthority: 'ACT PreACT pages, read raw 31 October 2026: PreACT Assessments (grades 8 to 10; early experience and predicted ACT score; College and Career Readiness Standards; four-version comparison of grades, formats, minutes and top scores; testing windows; Secure uses; information sharing); Enhanced PreACT (alignment timeline; math answer choices 5 to 4; EMR Composite; science optional at contract level); PreACT FAQs (blueprint tables; embedded field test items; ACT and PreACT time per item; PreACT 8/9 items per area; math reporting categories; booklets; predicted score ranges).',
    localProject: 'Our worked examples: streaming model C = 12 + 0.5m (19 at 14 films, 17 films for 20.5); (3.2 x 10^4)(5 x 10^-2) = 1.6 x 10^3; mean about 53.6 against median 30 for a skewed set. Our ten-item practice set (4, 7.2 x 10^-4, 6, plus or minus 3, 10, 3.5, 25 pi, 720, 1/6, 12) and grade plans. Lesson family: modeling and number and quantity.',
    requiredMentions: ['offer 8th, 9th, and 10th graders an early experience with ACT test items', 'Anchored on the ACT College and Career Readiness Standards', 'anytime between early September to late May', 'for program placement, high-stakes, or accountability purposes', 'Reduced Answer Choices for Math Questions (5 to 4)', 'not at the individual student preference level', 'Operational items are scored, while embedded field test items are not.', 'overlap with and are counted in other reporting categories', 'Aligned to the same 1-36 score scale as the ACT', 'A bill of 20.5 means 0.5m = 8.5, so m = 17 films'],
    sources: [
      { claim: 'PreACT assessments overview and four-version comparison.', url: 'https://www.act.org/content/act/en/products-and-services/preact.html' },
      { claim: 'Enhanced PreACT timeline and changes.', url: 'https://www.act.org/content/act/en/products-and-services/preact/enhancements.html' },
      { claim: 'PreACT FAQs: blueprints, field test items, reporting categories, reports.', url: 'https://www.act.org/content/act/en/products-and-services/preact/faqs.html' }
    ],
    rejectedClaims: [
      'ACT\'s research claims that PreACT takers later score higher on the ACT and enroll in college at higher rates: not used; publisher statistics with selection effects, and they would read as a promise.',
      'A PreACT calculator rule: not stated on the ACT pages read; families are told to ask the school.',
      'The PreACT 8/9 enhanced blueprint: not described; ACT says it is coming soon.',
      'ACT\'s Math Mentor Challenge and any released items: not reproduced; our problems are original.',
      'Score or placement promises for our classes: refused.',
      'Any affiliation with ACT: none.'
    ]
  }
};
