'use strict';
// Keystone Algebra I prep (ag- state-test door; UK and US exams cluster Phase 2, row US026, group B10).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from the
// Pennsylvania Department of Education (pa.gov/agencies/education); copies in
// keyword-research-2026-09/uk-us-gap/src/keystone-algebra-1-prep/:
//  - Keystone Exams page: 2026-2027 windows Winter Wave 1 December 7 - 18, 2026; Winter Wave 2 January 4 - 15, 2027; Spring
//    May 17 - 28, 2027; Summer July 26 - 30, 2027 (dashes written "to"); 2027-2028 Winter Wave 1 December 6 - 17, 2027, Spring
//    May 15 - 26, 2028; Firefly Algebra I October 5, 2026 to May 7, 2027; Item and Scoring Samplers note ("Due to the
//    cancellation of standardized testing in 2019–2020, the 2021 Item and Scoring Samplers are revised and enhanced versions").
//  - Keystone Exams Test Definition, Algebra I: modules "Module 1—Operations and Linear Equations & Inequalities", "Module
//    2—Linear Functions and Data Organization"; each module "Core MC/TE items 18 points", "3 core 4 pt.-CR items 12 points",
//    "Total 30 points"; "a total of 60 points (Module 1 and Module 2 combined) with approximately 60% MC/TE items and 40% CR
//    items"; Module 1 "18 Eligible Content", Module 2 "15 Eligible Content"; field test 5 MC/TE and 1 CR per module; section
//    layout 23 MC/TE and 4 CR per module, testing time 75, administration time 85 (minutes); estimated time 114 minutes MC/TE,
//    35 minutes CR, 149 minutes (quoted as printed).
//  - Assessment Anchors and Eligible Content, Algebra I (FINAL, April 2014): six anchors A1.1.1 Operations with Real Numbers and
//    Expressions, A1.1.2 Linear Equations, A1.1.3 Linear Inequalities, A1.2.1 Functions, A1.2.2 Coordinate Geometry, A1.2.3 Data
//    Analysis; eligible content quoted: A1.1.1.1.2 "Simplify square roots (e.g., √24 = 2√6)."; A1.1.1.5.1 "Nothing larger than a
//    binomial multiplied by a trinomial."; A1.1.1.5.2 trinomials "limited to the form ax2 + bx + c where a is equal to 1 after
//    factoring"; A1.1.1.3.1 "Exponents should be integers from –10 to 10." (written "-10 to 10"); A1.1.2.2.1 "Limit systems to two
//    linear equations."; A1.1.3.1.1 compound inequalities "may include absolute value inequalities"; A1.2.3.3.1 compound
//    probability.
//  - Algebra I Formula Sheet: "You may use calculator π or the number 3.14 as an approximation of π."; slope, point-slope,
//    slope-intercept and standard forms; arithmetic properties.
//  - Keystone parent FAQ (Handbook for Assessment Coordinators, Spring 2026, appendix): "Beginning with the class of 2022–2023,
//    students must demonstrate proficiency on the Algebra I, Literature, and Biology Keystone Exams to graduate or fulfill one of
//    the other pathways provided to graduate." (the algebra-1-eoc-prep sibling already quotes this; paraphrased here); results
//    "banked until their junior year for accountability purposes and until their senior year for graduation purposes"; "All
//    students who take a Keystone Exam may retake the exam."; "There is no time limit"; "two to three hours"; each module "one to
//    1.5 hours"; modules "across two days or divided across the morning and the afternoon of the same day"; "approximately 60
//    percent to 80 percent of the total score will be from multiple-choice and technology-enhanced questions" (FAQ, all Keystone
//    subjects); "Scores are based on content only. Spelling and punctuation are not included as part of the scoring process.";
//    the Online Tools Training lets students practise "graphing functions" and "entering equations using an equation builder
//    tool"; in 2012-13 the Keystones replaced the 11th-grade PSSA.
//  - Graduation Requirements page: "Effective with the graduating class of 2023, Pennsylvania high school students have the
//    option to demonstrate their postsecondary preparedness and meet statewide requirements through one of five Pathways to
//    Graduation."
//  - 2026-2027 Winter Keystone Handbook for Assessment Coordinators: Algebra I students "should receive a paper copy of the
//    formula sheet"; students may not share calculators; PDE Calculator Policy in Appendix E (not-permitted list).
// No item or sampler question reproduced. Points quoted as PDE prints them; no totals computed.
// Our own material, labelled: the Module 1 constructed-response worked example (a gym membership compound inequality, 150 to
// 240 a season, then the graph and the interpretation), the Module 2 example (a line of best fit from four points), the
// twelve-item practice set by anchor, the wave-choice table and the eight-week plan.
// Lesson family: working anchor by anchor from the Eligible Content list.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PDE = 'https://www.pa.gov/agencies/education/programs-and-services/instruction/elementary-and-secondary-education/assessment-and-accountability';
const KDOCS = 'https://www.pa.gov/content/dam/copapwp-pagov/en/education/documents/instruction/assessment-and-accountability/keystone-exams';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'KEYSTONE ALGEBRA I', blurb: 'Pennsylvania&rsquo;s Keystone Algebra I exam in depth from PDE: both modules, all six assessment anchors, the four 2026 to 2027 waves, the formula sheet, graduation pathways and original practice.' },
  slug: 'keystone-algebra-1-prep',
  code: 'kea',
  accent: '#756127',
  accentRationale: 'Keystone Algebra I prep: a keystone olive-bronze #756127 as allocated, about 5.9:1 on paper #FBF8F2 and above 4.5:1 on the deepest tint, a Pennsylvania stone tone set apart from the PSSA cocoa',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-and-ai-classes-in-pennsylvania', name: 'Pennsylvania' }],
  routeLabel: 'Keystone Algebra I prep',
  title: 'Keystone Algebra 1 Prep: Modules, Anchors and 2027 Dates',
  description: 'Keystone Algebra 1 prep for Pennsylvania: both modules, all six anchors, 2026 to 2027 test waves, formula sheet and graduation pathways, from PDE, with our practice.',
  ogDescription: 'Two modules of 30 points, six assessment anchors, four chances a year to sit it. Pennsylvania&rsquo;s Keystone Algebra I exam taken apart from PDE&rsquo;s own test definition, with original practice.',
  twitterDescription: 'Pennsylvania&rsquo;s Keystone Algebra I from PDE&rsquo;s test definition, anchor by anchor, with original practice.',
  pageName: 'Keystone Algebra I Prep',
  webPageDescription: 'A detailed guide for Pennsylvania students and families to the Keystone Algebra I exam, built from PDE&rsquo;s Keystone Exams page, Algebra I Test Definition, Assessment Anchors and Eligible Content, formula sheet, parent FAQ and graduation requirements, with original worked constructed-response examples and a practice set for every anchor.',
  courseDescription: 'Live online Algebra I classes for Pennsylvania students preparing for the Keystone Algebra I exam, taught anchor by anchor to the Pennsylvania Core Standards, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Keystone Algebra I prep',
  navLinks: [
    { href: '#modules', label: 'Modules' },
    { href: '#anchors', label: 'Six anchors' },
    { href: '#waves', label: '2026 to 2027 waves' },
    { href: '#cr', label: 'Constructed response' },
    { href: '#pathways', label: 'Graduation' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Pennsylvania &middot; Algebra I end-of-course &middot; From PDE&rsquo;s test definition',
  h1: 'Keystone Algebra 1 prep: the exam, module by module',
  lede: 'The Keystone Algebra I is the end-of-course exam Pennsylvania students take when they finish Algebra I, often in grade 8 or 9. It is written to a published list: six assessment anchors, broken into eligible content statements (18 for Module 1 and 15 for Module 2), many with notes that say exactly how far a question can go. A trinomial to factor will have a leading coefficient of 1. A system will have two equations, never three. Knowing those limits changes how you prepare, because you can stop worrying about what is not on the test. This page reads PDE&rsquo;s test definition and anchor document closely, then teaches both modules with problems of our own.',
  secondaryCta: { href: '#anchors', label: 'See the six anchors' },
  wa: 'Hello Modern Age Coders, my child is taking the Keystone Algebra I exam. Could we book a free first class?',
  heroNote: 'Live math since 2020 &middot; 10,000+ students &middot; lessons on Eastern Time',
  spec: [
    ['Exam', 'Keystone Algebra I'],
    ['Run by', 'Pennsylvania Department of Education'],
    ['Modules', 'Two, 30 points each'],
    ['Question mix', 'About 60% MC/TE, 40% CR'],
    ['Time limit', 'None'],
    ['Next waves', 'December 2026, January and May 2027'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Keystone Algebra I is Pennsylvania&rsquo;s end-of-course Algebra I exam, set by the Pennsylvania Department of Education and taken online at or near the end of the course. It has two modules, each with 18 points of multiple-choice and technology-enhanced items and three 4-point constructed-response items, for 60 points in all, and no time limit. It is offered in winter, spring and summer. Modern Age Coders runs live online Keystone preparation, as a group batch or 1-on-1, built on the Algebra Foundations course.',

  picks: {
    eyebrow: 'Courses for the Keystone',
    h2: 'Three courses for Pennsylvania Algebra I students',
    lede: 'The first is the Keystone course itself; the other two sit either side of it.',
    items: [
      { course: 'algebra-foundations-masterclass', code: 'KEA / 01', title: 'Algebra I for the Keystone', note: 'All six anchors, both modules, with written constructed responses.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'KEA / 02', title: 'Before Algebra I', note: 'Integers, ratios and equations for students starting in grade 8.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'KEA / 03', title: 'After the Keystone', note: 'Geometry and Algebra II once Algebra I is banked.' }
    ]
  },

  sections: [
    {
      id: 'modules', tint: 'tint', eyebrow: 'Two modules',
      h2: 'How is the Keystone Algebra 1 exam structured?',
      lede: 'In two modules of equal weight. Each module carries 18 points from multiple-choice and technology-enhanced items and 12 points from three constructed-response items, which makes 30 points per module.',
      body: [
        { kind: 'table', caption: 'Keystone Algebra I module design (PDE Keystone Exams Test Definition, Algebra I, read 31 October 2026)', head: ['', 'Module 1: Operations and Linear Equations &amp; Inequalities', 'Module 2: Linear Functions and Data Organization'], rows: [
          ['Core MC/TE items', '18 points', '18 points'],
          ['Core constructed response', '3 items, 4 points each, 12 points', '3 items, 4 points each, 12 points'],
          ['Module total', '30 points', '30 points'],
          ['Eligible content', '18', '15'],
          ['Embedded field-test items', '5 MC/TE and 1 CR', '5 MC/TE and 1 CR'],
          ['Testing time / administration time', '75 / 85 minutes', '75 / 85 minutes']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Sixty points, forty percent written',
          left: [
            'PDE&rsquo;s test definition sums it up: &ldquo;a total of 60 points (Module 1 and Module 2 combined) with approximately 60% MC/TE items and 40% CR items.&rdquo;',
            'That 40 percent is unusually high for an end-of-course exam. Six constructed responses, each scored out of 4, decide a large share of the result, so writing out algebra clearly is not optional.'
          ],
          rightH3: 'Field-test items',
          right: [
            'Each module also carries 5 field-test multiple-choice or technology-enhanced items and 1 field-test constructed response, which do not count. So a student sees 23 MC/TE items and 4 constructed responses in each module, and cannot tell which are field tests.',
            'Treat every question as if it counts. That is the only sensible strategy when you cannot see the difference.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + KDOCS + '/resources/pa%20keystone%20algebra%20i%20test%20definition.pdf" rel="noopener" target="_blank">Keystone Exams Test Definition, Algebra I</a>, read on 31 October 2026. Modern Age Coders has no tie to the Pennsylvania Department of Education, to the company that delivers the Keystones, or to any school district.' }
      ]
    },
    {
      id: 'anchors', tint: 'deep', eyebrow: 'Assessment anchors',
      h2: 'What is on the Keystone Algebra 1 exam?',
      lede: 'Six assessment anchors, three per module. PDE counts 18 pieces of eligible content in Module 1 and 15 in Module 2, and its anchor document lists every one, with notes that limit how hard a question can be.',
      body: [
        { kind: 'table', caption: 'Keystone Algebra I assessment anchors and selected eligible content limits (PDE Assessment Anchors and Eligible Content, Algebra I, April 2014 final, read 31 October 2026)', head: ['Anchor', 'What it covers', 'A limit PDE writes into the eligible content'], rows: [
          ['A1.1.1 Operations with Real Numbers and Expressions', 'Comparing reals, square roots, GCF and LCM of monomials, exponents, estimation, polynomials, factoring, rational expressions', 'Polynomial products: &ldquo;Nothing larger than a binomial multiplied by a trinomial.&rdquo;'],
          ['A1.1.2 Linear Equations', 'Writing and solving linear equations, justifying steps by properties, systems', 'Systems: &ldquo;Limit systems to two linear equations.&rdquo;'],
          ['A1.1.3 Linear Inequalities', 'Compound inequalities on a number line, systems of inequalities by graphing', 'Compound inequalities may include absolute value inequalities'],
          ['A1.2.1 Functions', 'Patterns, whether a relation is a function, domain and range, linear functions in tables, graphs and equations', 'Relations may be given as ordered pairs, a graph or a table'],
          ['A1.2.2 Coordinate Geometry', 'Rate of change, slope, writing linear equations, trend lines', 'Slope and intercept read from an equation or a graph'],
          ['A1.2.3 Data Analysis', 'Range, quartiles and interquartile range, predictions from displays, compound probability', 'Probabilities shown as a fraction, decimal or percent']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The limits that save time',
          left: [
            'Factoring: trinomials are limited to the form ax&sup2; + bx + c where a equals 1 after factoring out all monomial factors, in PDE&rsquo;s wording. So 2x&sup2; + 10x + 12 can appear (it becomes 2(x&sup2; + 5x + 6)), but a trinomial needing the &ldquo;ac method&rdquo; with a leading 3 cannot.',
            'Exponents: PDE notes that exponents should be integers from -10 to 10. No fractional exponents, so radicals are handled as square roots, as in the anchor document&rsquo;s own example, &ldquo;Simplify square roots (e.g., √24 = 2√6).&rdquo;'
          ],
          rightH3: 'What surprises students',
          right: [
            'Module 2 is not all functions. Data Analysis is a full anchor: quartiles, box-and-whisker plots, stem-and-leaf plots, scatter plots and compound probability all live there.',
            'And Module 1 asks students to identify the algebraic property that justifies a step in solving an equation. Knowing the names (distributive, additive property of equality) earns points here.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + KDOCS + '/keystone-exams-aa-ec-wosample-items/keystone%20content%20module%20standard%20blueprint--algebra%20i.pdf" rel="noopener" target="_blank">Keystone Exams: Algebra I Assessment Anchors and Eligible Content</a>, PDE.' }
      ]
    },
    {
      id: 'tools', tint: 'tint', eyebrow: 'Calculator and formula sheet',
      h2: 'Is a calculator allowed on the Keystone Algebra 1, and what is on the formula sheet?',
      lede: 'Students may use a calculator that meets PDE&rsquo;s calculator policy, and they get the Algebra I formula sheet both on paper and inside the online test.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Calculator rules', p: 'PDE&rsquo;s policy bans phones and other devices, wireless or computer algebra system (CAS) calculators, and sharing. A test administrator wipes the memory both before the session starts and once it ends.' },
          { h3: 'Paper formula sheet', p: 'The 2026 to 2027 winter handbook says Algebra I students should receive a paper copy of the formula sheet, which is also available within the online test.' },
          { h3: 'What the sheet holds', p: 'Slope, point-slope, slope-intercept and standard forms of a line, the arithmetic properties, and rectangle and prism formulas.' }
        ] },
        { kind: 'p', mt: true, html: 'The sheet also says: &ldquo;You may use calculator π or the number 3.14 as an approximation of π.&rdquo; More usefully for Module 1, it lists the properties by name, the distributive, commutative, associative and identity properties and the additive and multiplicative properties of equality, so a student asked to justify a step can find the right word on the page in front of them. We teach with the real sheet from the first week.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + KDOCS + '/administration-materials/algebra%20i%20formula%20sheet.pdf" rel="noopener" target="_blank">Algebra I Formula Sheet</a> and the <a class="ag-inline-link" href="' + KDOCS + '/administration-materials/2026-2027%20winter%20keystone%20handbook%20for%20assessment%20coordinators.pdf" rel="noopener" target="_blank">2026 to 2027 Winter Keystone Handbook for Assessment Coordinators</a>, PDE.' }
      ]
    },
    {
      id: 'waves', tint: 'deep', eyebrow: '2026 to 2027',
      h2: 'When is the Keystone Algebra 1 exam in 2026 to 2027?',
      lede: 'Four times: Winter Wave 1 from December 7 to 18, 2026; Winter Wave 2 from January 4 to 15, 2027; Spring from May 17 to 28, 2027; and Summer from July 26 to 30, 2027.',
      body: [
        { kind: 'table', caption: 'Keystone Exams testing windows (PDE Keystone Exams page, read 31 October 2026)', head: ['Window', '2026 to 2027', '2027 to 2028'], rows: [
          ['Winter Wave 1', 'December 7 to 18, 2026', 'December 6 to 17, 2027'],
          ['Winter Wave 2', 'January 4 to 15, 2027', 'January 3 to 14, 2028'],
          ['Spring', 'May 17 to 28, 2027', 'May 15 to 26, 2028'],
          ['Summer', 'July 26 to 30, 2027', 'July 24 to 28, 2028']
        ] },
        { kind: 'table', mt: true, caption: 'Which wave fits which student (our planning guide, not PDE advice)', head: ['Student', 'Likely wave', 'Why'], rows: [
          ['Block schedule, Algebra I in the fall semester', 'Winter Wave 1 or 2', 'The exam sits at or near the end of the course'],
          ['Full-year Algebra I', 'Spring, May 17 to 28, 2027', 'Right after the course ends'],
          ['Retaking to reach proficiency', 'Any later wave, often winter', 'Time to rebuild the weaker module first'],
          ['Summer course or summer review', 'Summer, July 26 to 30, 2027', 'A short window, so plan early']
        ] },
        { kind: 'p', mt: true, html: 'The school decides when a student tests, so confirm the wave with the counselor. PDE&rsquo;s parent FAQ also notes that districts can give the two modules on two days, or in the morning and afternoon of one day.' }
      ]
    },
    {
      id: 'cr', tint: 'tint', eyebrow: 'Constructed response, Module 1',
      h2: 'How do you answer a Keystone Algebra 1 constructed-response question?',
      lede: 'Every part answered, every step shown, and the answer interpreted in the situation. Here is a Module 1 problem we wrote around a compound inequality, eligible content A1.1.3.1.1 and A1.1.3.1.3.',
      body: [
        { kind: 'ol', items: [
          '<b>Our problem (not a Keystone item).</b> A climbing gym charges a 30 sign-up fee plus 12 per visit. Maya wants to spend at least 150 and at most 240 this season. Part A: write a compound inequality for v, the number of visits. Part B: solve it and graph the solution on a number line. Part C: explain what the solution means for Maya, and say whether 19 visits is possible.',
          '<b>Part A.</b> The cost is 30 + 12v, so 150 &le; 30 + 12v &le; 240.',
          '<b>Part B.</b> Subtract 30 from all three parts: 120 &le; 12v &le; 210. Divide all three parts by 12: 10 &le; v &le; 17.5. On the number line, closed dots at 10 and 17.5 with the segment between them shaded.',
          '<b>Part C.</b> Visits must be whole numbers, so Maya can make 10, 11, 12 and so on up to 17 visits. 19 visits is not possible: 30 + 12 x 19 = 258, which is more than 240. Interpreting the solution in context, as A1.1.3.1.3 asks, is where the whole-number limit comes from.',
          '<b>Where the four points come from, as we teach it.</b> A correct inequality; correct solving with the operation done to all three parts; a correct graph; and an interpretation that rounds down to 17 and rejects 19 with a calculation. Spelling does not count; PDE&rsquo;s FAQ says scores are based on content only.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The slip we see most',
          left: [
            'Subtracting 30 from the middle only, or from only one side. A compound inequality is three expressions at once, and every operation goes to all three.'
          ],
          rightH3: 'The habit that fixes it',
          right: [
            'Write the three parts in columns and act on each column in turn. It looks slow and it is fast.'
          ] }
      ]
    },
    {
      id: 'module2', tint: 'deep', eyebrow: 'Module 2 in practice',
      h2: 'What does a Keystone Module 2 question on data and trend lines look like?',
      lede: 'Module 2 joins linear functions to data. Eligible content A1.2.2.2.1 asks students to write an equation for a line of best fit, and A1.2.3.2.3 to predict from it. Here is our example.',
      body: [
        { kind: 'ol', items: [
          '<b>Our data (invented).</b> A plant&rsquo;s height in centimeters over weeks: week 1, 4 cm; week 2, 7 cm; week 4, 12 cm; week 6, 18 cm. Part A: estimate a trend line. Part B: interpret the slope. Part C: predict the height at week 8.',
          '<b>Part A.</b> Use two points near the trend, say (2, 7) and (6, 18). Slope = (18 - 7) / (6 - 2) = 11/4 = 2.75. Point-slope form from the formula sheet: y - 7 = 2.75(x - 2), so y = 2.75x + 1.5.',
          '<b>Part B.</b> The slope 2.75 means the plant grows about 2.75 cm per week. The intercept 1.5 is the model&rsquo;s height at week 0, which may not match reality, and saying so shows understanding.',
          '<b>Part C.</b> At x = 8: y = 2.75 x 8 + 1.5 = 23.5 cm. Prediction beyond the data assumes the trend continues, which a good answer mentions.'
        ] },
        { kind: 'p', mt: true, html: 'Different students may pick different points and get slightly different lines. That is expected with a trend line: what matters is a reasonable line, the formula used correctly, and a prediction read from it with the right units.' }
      ]
    },
    {
      id: 'pathways', tint: 'tint', eyebrow: 'Graduation',
      h2: 'Do you have to pass the Keystone Algebra 1 to graduate in Pennsylvania?',
      lede: 'Proficiency on the Algebra I Keystone is one way to meet the statewide requirement, but not the only one. Since the class of 2023, Pennsylvania has offered five Pathways to Graduation.',
      body: [
        { kind: 'two',
          leftH3: 'What PDE says',
          left: [
            'PDE&rsquo;s graduation page states: &ldquo;Effective with the graduating class of 2023, Pennsylvania high school students have the option to demonstrate their postsecondary preparedness and meet statewide requirements through one of five Pathways to Graduation.&rdquo;',
            'Its parent FAQ adds that students should demonstrate proficiency on the Algebra I, Literature and Biology Keystones, or meet one of the other pathways, to graduate.'
          ],
          rightH3: 'Banked, and retakeable',
          right: [
            'Keystone results are &ldquo;banked until their junior year for accountability purposes and until their senior year for graduation purposes&rdquo;, according to the FAQ. A grade 8 result can count years later.',
            'The FAQ is equally clear that &ldquo;All students who take a Keystone Exam may retake the exam.&rdquo; A score below proficient is a reason to plan a later wave, not the end of the road.'
          ] },
        { kind: 'p', mt: true, html: 'Historically, PDE explains, the Keystones replaced the 11th-grade PSSA in math, reading and science in 2012 to 2013. Students still take the Algebra I Keystone for federal accountability whichever graduation pathway they use. Because pathways and local rules vary, ask the school counselor which route your teenager is on.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + PDE + '/graduation-requirements" rel="noopener" target="_blank">Statewide High School Graduation Requirements</a> and the <a class="ag-inline-link" href="' + KDOCS + '/administration-materials/english%20parent%20faq%202026%20keystone.pdf" rel="noopener" target="_blank">Keystone Exams parent FAQ</a> (Spring 2026), PDE.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice',
      h2: 'Twelve Keystone Algebra 1 practice questions, two per anchor',
      lede: 'Written by us to the limits in PDE&rsquo;s eligible content. They are not Keystone items or sampler questions.',
      body: [
        { kind: 'table', caption: 'Original practice by assessment anchor (ours), with answers', head: ['Anchor', 'Question', 'Answer'], rows: [
          ['A1.1.1', 'Simplify the square root of 48.', '4 times the square root of 3'],
          ['A1.1.1', 'Factor x&sup2; - 3x - 28.', '(x - 7)(x + 4)'],
          ['A1.1.2', 'Solve 5(x - 2) = 3x + 6, and name the property used in the first step.', 'x = 8; distributive property'],
          ['A1.1.2', 'Solve the system x + y = 10 and 2x - y = 5.', '(5, 5)'],
          ['A1.1.3', 'Solve and graph -3 &lt; 2x + 1 &le; 9.', '-2 &lt; x &le; 4'],
          ['A1.1.3', 'Solve |x - 4| &lt; 3.', '1 &lt; x &lt; 7'],
          ['A1.2.1', 'Is {(2, 5), (3, 5), (4, 6)} a function? Give its domain.', 'Yes; domain {2, 3, 4}'],
          ['A1.2.1', 'A table shows x = 0, 1, 2 and y = 3, 7, 11. Write the linear function.', 'y = 4x + 3'],
          ['A1.2.2', 'Find the slope through (-1, 4) and (3, -4).', '-2'],
          ['A1.2.2', 'Write the equation of the line with slope 1/2 through (4, 1).', 'y = (1/2)x - 1'],
          ['A1.2.3', 'Find the interquartile range of 3, 5, 6, 8, 10, 12, 15, 18.', '8 (Q1 = 5.5, Q3 = 13.5)'],
          ['A1.2.3', 'A bag has 4 red and 6 blue marbles. One is drawn, replaced, and another drawn. Find P(red then blue).', '24/100 = 0.24']
        ] },
        { kind: 'p', mt: true, html: 'Algebra I Item and Scoring Samplers are published on PDE&rsquo;s <a class="ag-inline-link" href="' + PDE + '/keystone-exams" rel="noopener" target="_blank">Keystone Exams page</a>. The page notes that because testing was cancelled in 2019 to 2020, the 2021 samplers are revised and enhanced versions of the 2017 ones. The Online Tools Training, PDE says, also lets students practise graphing functions and entering equations with the equation builder before test day. We use both in the final weeks.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'A plan',
      h2: 'An eight-week Keystone Algebra 1 study plan',
      lede: 'Ours, counting back from the student&rsquo;s wave: for the spring, from May 17, 2027.',
      body: [
        { kind: 'ol', items: [
          '<b>Week 1: a sampler, sorted by anchor.</b> One module from PDE&rsquo;s sampler, every miss tagged A1.1.1 to A1.2.3.',
          '<b>Weeks 2 and 3: Module 1, anchors A1.1.1 and A1.1.2.</b> Square roots, exponents, factoring within PDE&rsquo;s limits, linear equations and two-equation systems.',
          '<b>Week 4: anchor A1.1.3.</b> Compound and absolute value inequalities, and systems of inequalities by graphing.',
          '<b>Weeks 5 and 6: Module 2.</b> Functions, slope and linear equations, then the full Data Analysis anchor: quartiles, displays, trend lines and compound probability.',
          '<b>Week 7: constructed responses.</b> Two four-point problems a lesson, one from each module, with the formula sheet beside them.',
          '<b>Week 8: two modules, two sittings.</b> A rehearsal in the format the school will use, then rest before the wave.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Starting points',
    h2: 'Four kinds of Keystone student, and where each should start',
    lede: 'Our experience of who arrives for Keystone help, and what to do first.',
    table: { caption: 'Starting points (ours)', head: ['Student', 'First focus', 'Then'], rows: [
      ['Grade 8, Algebra I a year early', 'Integer and fraction fluency under algebra', 'Module 1 anchors in order'],
      ['Grade 9, solid course grade', 'Constructed-response writing', 'The Data Analysis anchor'],
      ['Retaking after Below Basic or Basic', 'The weaker module from the score report', 'A later wave with time to rebuild'],
      ['Strong student wanting Advanced', 'Eligible content edge cases', 'Timed full modules']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask which wave your child is entered for. Block schedules often mean December or January, not May.',
      'If the result is below proficient, ask about the next wave and the pathways. A retake is allowed.'
    ] },
    right: { h3: 'For students', ps: [
      'Learn the property names on the formula sheet. Module 1 can ask you to justify a step.',
      'In every constructed response, finish with a sentence that answers the question in the situation&rsquo;s own words.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses around Keystone Algebra I',
    lede: 'Before, during and after the Algebra I year.',
    bands: [
      { num: 'I', h3: 'Before Algebra I', sub: 'Grades 6 to 8', courses: [
        { code: 'KEA / P / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'The pre-algebra base.' },
        { code: 'KEA / P / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Number sense for younger siblings.' },
        { code: 'KEA / P / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'For grade 7 and 8 problem solvers.' }
      ] },
      { num: 'II', h3: 'The Keystone year', sub: 'Algebra I', courses: [
        { code: 'KEA / A / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Both modules, anchor by anchor.' },
        { code: 'KEA / A / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Linear functions in Python.' },
        { code: 'KEA / A / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'For gaps in fractions and decimals.' }
      ] },
      { num: 'III', h3: 'After the Keystone', sub: 'High school', courses: [
        { code: 'KEA / H / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Geometry to calculus.' },
        { code: 'KEA / H / 02', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'The algebra carries straight over.' },
        { code: 'KEA / H / 03', slug: 'early-math-foundations', title: 'Early math', blurb: 'For the youngest in the family.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Algebra lessons on Eastern Time, around every wave',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school ET', l: 'Weekly lessons through the Algebra I course.' },
      { time: 'Weekends', l: 'Module rehearsals before December, January and May.' },
      { time: '1-on-1', l: 'Retake plans built from the score report.' }
    ],
    cells: [
      { h3: 'Anchor-mapped', p: 'Every lesson tagged to PDE&rsquo;s eligible content.' },
      { h3: 'Written answers', p: 'A four-point response most weeks.' },
      { h3: 'Formula sheet', p: 'PDE&rsquo;s own sheet from week one.' },
      { h3: 'Data anchor', p: 'Quartiles and probability, not skipped.' },
      { h3: 'Samplers late', p: 'PDE&rsquo;s released items to rehearse.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Some students turn their algebra into small programs. See <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from families, left as written.',

  fees: {
    h2: 'Fees',
    lede: 'Billed monthly in US dollars with no term contract, so a student can join eight weeks before their wave and stop once it is done.',
    free: ['A free first class', 'Bring the last Keystone score report if retaking', 'No card required'],
    group: ['Fifteen to twenty students', 'The same teacher each week', 'Choose your batch', 'Monthly'],
    one: ['Private lessons', 'Built around the student&rsquo;s wave', 'Flexible times']
  },

  faq: {
    eyebrow: 'Pennsylvania families ask',
    h2: 'Keystone Algebra 1: common questions',
    items: [
      { q: 'When is the Keystone Algebra 1 exam in 2027?', a: 'PDE lists Winter Wave 2 from January 4 to 15, 2027, Spring from May 17 to 28, 2027 and Summer from July 26 to 30, 2027, after Winter Wave 1 in December 2026. The school decides which wave a student takes.' },
      { q: 'How many questions are on the Keystone Algebra 1?', a: 'Each module has 23 multiple-choice or technology-enhanced items and 4 constructed responses, including field-test items. The scored part is 18 MC/TE points and three 4-point constructed responses per module, 60 points in all.' },
      { q: 'How long is the Keystone Algebra 1 exam?', a: 'There is no time limit. PDE\'s parent FAQ says a typical student needs two to three hours, and each module about one to one and a half hours.' },
      { q: 'What is on Module 1 and Module 2 of the Algebra 1 Keystone?', a: 'Module 1 covers operations with real numbers and expressions, linear equations and linear inequalities. Module 2 covers functions, coordinate geometry and data analysis, including probability.' },
      { q: 'Is a calculator allowed on the Algebra 1 Keystone?', a: 'Yes, one that follows the state calculator policy. Phones, wireless calculators, computer algebra system calculators and shared calculators are not allowed, and the memory is cleared before and after each session.' },
      { q: 'Is there a formula sheet for the Algebra 1 Keystone?', a: 'Yes. Students receive a paper copy and can also open it in the online test. It includes the forms of a linear equation, slope and the arithmetic properties.' },
      { q: 'Do you need to pass the Keystone Algebra 1 to graduate?', a: 'Proficiency is one route, but since the class of 2023 Pennsylvania has offered five Pathways to Graduation. Check with the school counselor which pathway applies to your student.' },
      { q: 'Can you retake the Keystone Algebra 1?', a: 'Yes. PDE\'s parent FAQ says all students who take a Keystone Exam may retake it, and results are banked until senior year for graduation purposes.' },
      { q: 'Where can I find Keystone Algebra 1 practice tests?', a: 'PDE posts Item and Scoring Samplers on its Keystone Exams page, with the 2021 set revised from 2017. Our twelve questions here add two more for each anchor.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every Keystone lesson is set on Eastern Time.' },
      { q: 'Is Modern Age Coders part of the Keystone program?', a: 'No. We are a separate, independent online school. PDE writes and runs the Keystone Exams, and we have no link to it, to its testing vendor or to any district; we only cite and link the department\'s public documents.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Next steps and Pennsylvania pages.',
    items: [
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'For early Algebra I students.' },
      { href: '/middle-school-math-placement-test-prep', label: 'Middle school math placement', p: 'Getting into Algebra I in grade 8.' },
      { href: '/precalculus-tutoring-online', label: 'Precalculus tutoring', p: 'Two courses after the Keystone.' },
      { href: '/psat-8-9-math-prep', label: 'PSAT 8/9 math prep', p: 'The same algebra, a different test.' },
      { href: '/coding-and-ai-classes-in-pennsylvania', label: 'Pennsylvania coding and AI', p: 'Python and AI alongside Algebra I.' },
      { href: '/sat-math-tutoring-online', label: 'SAT math tutoring', p: 'Where Keystone algebra leads next.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the student&rsquo;s wave and share any past Keystone report. In the first class the teacher works one constructed response from each module and maps what to study first.',
    readFirst: 'Find out <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse our <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'We teach from India at hours fixed on Eastern Time, after Pennsylvania school days and at weekends. A WhatsApp message gets the quickest reply.',
    formNote: 'The first class is free; we never take card details to book it.'
  },

  footer: {
    cols: [
      { h4: 'Algebra and after', links: [
        { href: '/online-math-tutor-8th-grade', label: 'Grade 8 math' },
        { href: '/precalculus-tutoring-online', label: 'Precalculus' },
        { href: '/sat-math-tutoring-online', label: 'SAT math tutoring' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'Pennsylvania and the US', links: [
        { href: '/coding-and-ai-classes-in-pennsylvania', label: 'Pennsylvania' },
        { href: '/best-coding-classes-for-kids-in-philadelphia', label: 'Philadelphia' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Six anchors, two modules'
  },

  personalityCss: `
.ag-root.ag-kea .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-kea .ag-capsule { border-left-width: 7px; border-radius: 0; }
.ag-root.ag-kea .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-kea .ag-table td { line-height: 1.55; }
.ag-root.ag-kea .ag-steps li { padding-bottom: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Pennsylvania Department of Education, read raw 31 October 2026: Keystone Exams page (2026 to 2027 and 2027 to 2028 windows, samplers note); Keystone Exams Test Definition, Algebra I (modules, points, 60/40 split, eligible content counts, field test, section layout and times); Assessment Anchors and Eligible Content, Algebra I (six anchors and their limits); Algebra I Formula Sheet; Keystone parent FAQ, Spring 2026 (banking, retake, no time limit, two to three hours, content-only scoring, Online Tools Training, replacement of grade 11 PSSA); Statewide High School Graduation Requirements (five Pathways from the class of 2023); 2026 to 2027 Winter Keystone Handbook (paper formula sheet, calculator policy).',
    localProject: 'Our Module 1 constructed-response example: climbing gym 30 plus 12 per visit, 150 &le; 30 + 12v &le; 240, giving 10 &le; v &le; 17.5, whole visits 10 to 17, and 19 visits rejected at 258. Our Module 2 example: plant heights, line through (2, 7) and (6, 18), y = 2.75x + 1.5, 23.5 cm at week 8. Our twelve-item practice set by anchor, wave guide, starting-point ladder and eight-week plan. Lesson family: anchor-by-anchor work from the Eligible Content.',
    requiredMentions: ['a total of 60 points (Module 1 and Module 2 combined) with approximately 60% MC/TE items and 40% CR items.', 'Nothing larger than a binomial multiplied by a trinomial.', 'Limit systems to two linear equations.', 'Effective with the graduating class of 2023, Pennsylvania high school students have the option to demonstrate their postsecondary preparedness and meet statewide requirements through one of five Pathways to Graduation.', 'banked until their junior year for accountability purposes and until their senior year for graduation purposes', 'All students who take a Keystone Exam may retake the exam.', 'You may use calculator π or the number 3.14 as an approximation of π.', 'Winter Wave 2 from January 4 to 15, 2027', '150 &le; 30 + 12v &le; 240', 'y = 2.75x + 1.5'],
    sources: [
      { claim: 'Keystone Exams page, PDE (windows, samplers).', url: PDE + '/keystone-exams' },
      { claim: 'Keystone Exams Test Definition, Algebra I.', url: KDOCS + '/resources/pa%20keystone%20algebra%20i%20test%20definition.pdf' },
      { claim: 'Keystone Exams: Algebra I Assessment Anchors and Eligible Content.', url: KDOCS + '/keystone-exams-aa-ec-wosample-items/keystone%20content%20module%20standard%20blueprint--algebra%20i.pdf' },
      { claim: 'Algebra I Formula Sheet.', url: KDOCS + '/administration-materials/algebra%20i%20formula%20sheet.pdf' },
      { claim: 'Keystone Exams parent FAQ, Spring 2026.', url: KDOCS + '/administration-materials/english%20parent%20faq%202026%20keystone.pdf' },
      { claim: 'Statewide High School Graduation Requirements.', url: PDE + '/graduation-requirements' }
    ],
    rejectedClaims: [
      'Whether every Algebra I item allows a calculator (no non-calculator section): the test definition and handbook read do not state a calculator-free section, but we did not find an explicit "calculator allowed throughout" line; the page says only that a policy-compliant calculator may be used.',
      'Keystone scaled-score cut points (for example a proficient score of 1500): not found in the documents read; not printed.',
      'The names of the five Pathways to Graduation: not listed on the page section read; only the count and the class of 2023 date are printed.',
      'The spring 2026 Keystone Directions for Online Administration: link returned 404; not used.',
      'Reproducing Item and Scoring Sampler questions: refused; linked instead.',
      'Score, proficiency or graduation promises: refused. Affiliation with PDE: none.'
    ]
  }
};
