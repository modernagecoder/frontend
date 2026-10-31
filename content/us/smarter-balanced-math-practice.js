'use strict';
// Smarter Balanced math practice (ag- state-test door; UK and US exams cluster Phase 2, row US023, group B10).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026.
// smarterbalanced.org (the consortium's public site) returned HTTP 403 and was not retried. The consortium's document library
// on portal.smarterbalanced.org served its public PDFs (the portal home page itself is a member login). Copies in
// keyword-research-2026-09/uk-us-gap/src/smarter-balanced-math-practice/:
//  - Mathematics Summative Assessment Blueprint, "As of 2018-19 Test Administration" (blueprint.pdf): blueprint tables for
//    grades 3 to 5, 6 to 8 and 11 (Claim 1 Priority Cluster CAT 13-15 / 12-15 / 14-16, Supporting Cluster 4-5 / 4-5 / 5-6,
//    total 17-20 / 16-20 / 19-22; combined Claims 2 and 4 CAT 6, PT 2-4, total 8-10; Claim 3 CAT 8, PT 0-2, total 8-10);
//    footnote "the total number of items across these two reporting categories for any individual test event is 18-20";
//    "Each PT contains 4-6 total items."; "Up to four PT items may require hand-scoring" (grades 3 to 8), "Up to six PT items may
//    require hand-scoring" (grade 11); "All CAT items in grades 3-5 are designed to be machine-scored."; "There are still four
//    claims, but only three claim scores will be reported with the overall math score."; grade 3 DOK rule "each student will
//    receive at least 7 CAT items at DOK 2 or higher" for Claim 1, at least 2 at DOK 3 or higher for Claims 2 and 4 and for
//    Claim 3; Claim 3 targets A "Test propositions or conjectures with specific examples." and D "Use the technique of breaking
//    an argument into cases."; grade 3 priority cluster target C "Multiply and divide within 100."
//  - Mathematics Content Specifications (contentspecs.pdf): the four claim statements quoted ("Students can explain and apply
//    mathematical concepts and interpret and carry out mathematical procedures with precision and fluency." and the other three);
//    weights "Claim #1 (Concepts and Procedures) contributing roughly 50%", Claim 3 "roughly 25%", Claims 2 and 4 "about 25%".
//  - Usability, Accessibility, and Accommodations Guidelines dated June 30, 2026 (uaag.pdf): embedded universal tools list;
//    "Calculator (for calculator-allowed items only, grades 6-8 and HS)"; members agreed not to include "Calculator on
//    mathematics items in grades 3-5" or "External protractor/ruler for online mathematics tests"; Mark for review "Markings are
//    not saved when the student moves on to the next segment or after a break of more than 20 minutes."; a member may omit or
//    add accessibility resources under its own law or policy.
//  - One member's own manual, for an example window: CAASPP Online Test Administration Manual (California), LEA coordinators set
//    windows; California fact sheet "Most schools will test between the middle of March and the middle of May" (quoted on our
//    CAASPP page; here only summarised as California's practice).
// No item from the blueprint's sample sets, practice tests or interim assessments reproduced. Blueprint ranges quoted as printed;
// no totals computed.
// Our own material, labelled: the grade 7 Claim 3 worked example (does multiplying by a fraction always make a number smaller?
// tested with cases: positive, zero, negative, fraction greater than 1), the claim-to-question map, the twelve-item practice set
// sorted by claim, the state-checklist steps and the eight-week plan.
// Lesson family: reasoning by cases and counterexamples (Smarter Balanced Claim 3, Communicating Reasoning).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const LIB = 'https://portal.smarterbalanced.org/library/en';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'SMARTER BALANCED', blurb: 'The Smarter Balanced math test shared by several states: the four claims, the blueprint item ranges by grade, universal tools and calculator rules, and original Claim 3 practice.' },
  slug: 'smarter-balanced-math-practice',
  code: 'sbp',
  accent: '#845C68',
  accentRationale: 'Smarter Balanced math practice: a muted mauve #845C68 as allocated, about 5.6:1 on paper #FBF8F2 and above 4.5:1 on the deepest tint, deliberately cooler than the California CAASPP rose',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  routeLabel: 'Smarter Balanced math practice',
  title: 'Smarter Balanced Math Practice: SBAC Claims and Blueprint',
  description: 'Smarter Balanced math practice for grades 3 to 8 and 11: the four claims, blueprint item ranges, calculator and tool rules from the consortium, with our practice.',
  ogDescription: 'Four claims, three claim scores, and a blueprint that sets how many questions test reasoning. The Smarter Balanced (SBAC) math test explained from the consortium&rsquo;s own documents.',
  twitterDescription: 'The Smarter Balanced (SBAC) math test from the consortium&rsquo;s blueprint, with original practice.',
  pageName: 'Smarter Balanced Math Practice',
  webPageDescription: 'A guide for families in states that give the Smarter Balanced summative math assessment, built from the consortium&rsquo;s Mathematics Summative Assessment Blueprint, Content Specifications and June 2026 Usability, Accessibility, and Accommodations Guidelines, with an original reasoning-by-cases example and practice set.',
  courseDescription: 'Live online math classes for students in Smarter Balanced states, grades 3 to 8 and high school, taught to the Common Core math standards with weekly reasoning practice, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Smarter Balanced math practice',
  navLinks: [
    { href: '#claims', label: 'Four claims' },
    { href: '#blueprint', label: 'Blueprint' },
    { href: '#tools', label: 'Tools' },
    { href: '#claim3', label: 'Claim 3' },
    { href: '#states', label: 'Your state' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Smarter Balanced states &middot; Grades 3 to 8 and 11 &middot; From the consortium&rsquo;s documents',
  h1: 'Smarter Balanced math practice: the claims behind the score',
  lede: 'Smarter Balanced, often written SBAC, is not one state&rsquo;s test. It is a math and English assessment written by a consortium and given by several member states, each under its own name and on its own calendar. What every version shares is a design built on four &ldquo;claims&rdquo; about what a student can do. Only one of them is about getting procedures right. The others are about solving problems, modeling real situations and explaining reasoning, and the blueprint guarantees a share of questions for each. This page reads that blueprint and shows how to practise the reasoning part, which is where most families never look.',
  secondaryCta: { href: '#claim3', label: 'See a Claim 3 answer' },
  wa: 'Hello Modern Age Coders, my child takes the Smarter Balanced math test this year. Could we book a free first class?',
  heroNote: 'Live math since 2020 &middot; 10,000+ students &middot; lessons on your state&rsquo;s time zone',
  spec: [
    ['Test', 'Smarter Balanced Summative, Mathematics'],
    ['Written by', 'Smarter Balanced consortium'],
    ['Given by', 'Member states, each under its own name'],
    ['Grades', '3 to 8 and 11'],
    ['Claims', 'Four, reported as three scores'],
    ['Parts', 'Adaptive items plus a performance task'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The Smarter Balanced math test (SBAC) is the consortium&rsquo;s summative mathematics assessment for grades 3 to 8 and 11, given by member states such as California. It combines computer-adaptive items with a performance task and measures four claims: Concepts and Procedures, Problem Solving, Communicating Reasoning and Modeling and Data Analysis. Modern Age Coders teaches the math behind it live online, in a batch or 1-on-1, built on our Elementary Maths course and grade-level classes.',

  picks: {
    eyebrow: 'Courses for Smarter Balanced states',
    h2: 'Three courses that cover all four claims',
    lede: 'Procedures every week, and a reasoning or modeling question in every lesson.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'SBP / 01', title: 'Elementary math for grades 3 to 5', note: 'The no-calculator years: facts, fractions and explaining why.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'SBP / 02', title: 'Middle school math for grades 6 to 8', note: 'Ratios, expressions and functions, with the on-screen calculator.' },
      { course: 'algebra-foundations-masterclass', code: 'SBP / 03', title: 'Algebra foundations toward grade 11', note: 'Linear and quadratic models for the high school test.' }
    ]
  },

  sections: [
    {
      id: 'claims', tint: 'tint', eyebrow: 'The four claims',
      h2: 'What are the four Smarter Balanced math claims?',
      lede: 'They are four statements about what a student can do, written in the consortium&rsquo;s Mathematics Content Specifications. Every question on the test is written to gather evidence for one of them.',
      body: [
        { kind: 'table', caption: 'Smarter Balanced mathematics claims and their weight in the overall score (Mathematics Content Specifications, portal.smarterbalanced.org, read 31 October 2026)', head: ['Claim', 'The consortium&rsquo;s statement', 'Weight in the total'], rows: [
          ['1. Concepts and Procedures', '&ldquo;Students can explain and apply mathematical concepts and interpret and carry out mathematical procedures with precision and fluency.&rdquo;', 'Roughly 50%'],
          ['2. Problem Solving', 'Students can solve a range of complex well-posed problems, making productive use of knowledge and problem-solving strategies.', 'About 25%, together with Claim 4'],
          ['3. Communicating Reasoning', '&ldquo;Students can clearly and precisely construct viable arguments to support their own reasoning and to critique the reasoning of others.&rdquo;', 'Roughly 25%'],
          ['4. Modeling and Data Analysis', 'Students can analyze complex, real-world scenarios and construct and use mathematical models to interpret and solve problems.', 'About 25%, together with Claim 2']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Four claims, three scores',
          left: [
            'The blueprint explains the odd arithmetic. Claims 2 and 4 &ldquo;have been combined because of content similarity&rdquo;, so a report shows three claim scores alongside the overall math score, even though four claims still guide the questions.',
            'States can relabel the scores. California, for example, folds Claims 2, 3 and 4 into one Mathematical Practices composite on its family report. The underlying claims are the same.'
          ],
          rightH3: 'What this means for preparation',
          right: [
            'Roughly half the score comes from Claim 1. The other half comes from problems that are not routine: multi-step situations, models, and arguments. A child who only drills procedures is preparing for about half the test.',
            'That is the single most useful fact on this page, and it is why every one of our Smarter Balanced lessons ends with a reasoning or modeling question.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + LIB + '/mathematics-content-specifications.pdf" rel="noopener" target="_blank">Smarter Balanced Mathematics Content Specifications</a>. The consortium&rsquo;s main site, smarterbalanced.org, refused our request (HTTP 403) on 31 October 2026, so we quote only its public library documents. We are not connected with Smarter Balanced or any member state.' }
      ]
    },
    {
      id: 'blueprint', tint: 'deep', eyebrow: 'Blueprint',
      h2: 'How many questions are on the Smarter Balanced math test?',
      lede: 'The blueprint gives ranges rather than one number, because the adaptive section varies by student. These are the ranges per claim, in the consortium&rsquo;s own figures.',
      body: [
        { kind: 'table', caption: 'Items by claim, Smarter Balanced Mathematics Summative Assessment Blueprint (as of the 2018 to 2019 administration, the current published edition), read 31 October 2026', head: ['Claim and where items come from', 'Grades 3 to 5', 'Grades 6 to 8', 'Grade 11'], rows: [
          ['Claim 1, Priority Cluster (adaptive)', '13 to 15', '12 to 15', '14 to 16'],
          ['Claim 1, Supporting Cluster (adaptive)', '4 to 5', '4 to 5', '5 to 6'],
          ['Claim 1, total items', '17 to 20', '16 to 20', '19 to 22'],
          ['Claims 2 and 4: adaptive / performance task', '6 / 2 to 4', '6 / 2 to 4', '6 / 2 to 4'],
          ['Claims 2 and 4, total items', '8 to 10', '8 to 10', '8 to 10'],
          ['Claim 3: adaptive / performance task', '8 / 0 to 2', '8 / 0 to 2', '8 / 0 to 2'],
          ['Claim 3, total items', '8 to 10', '8 to 10', '8 to 10']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the footnotes',
          left: [
            'The ranges for Claims 2 and 4 and for Claim 3 each say 8 to 10, but the blueprint adds that &ldquo;the total number of items across these two reporting categories for any individual test event is 18-20.&rdquo;',
            'Each performance task &ldquo;contains 4-6 total items&rdquo;. Up to four of them may need hand-scoring in grades 3 to 8, and up to six in grade 11, which is why written explanations count.'
          ],
          rightH3: 'Depth of knowledge is guaranteed',
          right: [
            'The adaptive engine is configured so no student gets only easy questions. In grade 3, for example, each student receives at least 7 Claim 1 adaptive items at depth of knowledge (DOK) level 2 or higher.',
            'For Claims 2 and 4 combined, and again for Claim 3, every student meets at least 2 adaptive items at DOK 3 or higher: questions that need strategic thinking, not recall.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + LIB + '/mathematics-summative-assessment-blueprint.pdf" rel="noopener" target="_blank">Mathematics Summative Assessment Blueprint</a>, Smarter Balanced. The table is the consortium&rsquo;s ranges, not our totals.' }
      ]
    },
    {
      id: 'targets', tint: 'tint', eyebrow: 'Targets',
      h2: 'What math is tested at each grade on the SBAC?',
      lede: 'Claim 1 is split into a priority cluster, the heart of each grade, and a supporting cluster. The blueprint lists the assessment targets for every grade and how many items each can draw.',
      body: [
        { kind: 'p', html: 'The grade 3 target sampling page is a useful example of how the consortium thinks. Its priority cluster includes &ldquo;Multiply and divide within 100.&rdquo;, fractions as numbers, area, measurement of time, volume and mass, and the four operations with patterns. Its supporting cluster has place value arithmetic, perimeter, shapes and data. The heavier the target, the more items it can contribute.' },
        { kind: 'table', mt: true, caption: 'Where the weight sits, by grade band (our summary of the blueprint&rsquo;s priority clusters and the Common Core grade focus; not a consortium table)', head: ['Grade band', 'Priority cluster, broadly', 'What usually costs students points'], rows: [
          ['3 to 5', 'Multiplication and division, fractions, place value, area and volume', 'Fraction comparisons explained with a model'],
          ['6 to 8', 'Ratios and proportional reasoning, the number system, expressions, equations and (grade 8) functions', 'Setting up an equation from words'],
          ['11', 'Algebra and functions across the high school standards', 'Interpreting what a model&rsquo;s numbers mean in context']
        ] },
        { kind: 'p', mt: true, html: 'Claims 2, 3 and 4 are &ldquo;drawn across content domains&rdquo;, in the blueprint&rsquo;s words. A Claim 3 question in grade 5 can sit on fractions one year and on volume the next. That is why reasoning practice must use whatever topic the class is studying, rather than wait for a special unit.' }
      ]
    },
    {
      id: 'tools', tint: 'deep', eyebrow: 'Tools and calculators',
      h2: 'Can you use a calculator on the Smarter Balanced math test?',
      lede: 'Only on calculator-allowed items in grades 6 to 8 and high school. The consortium&rsquo;s June 2026 guidelines list the embedded calculator as a universal tool for those grades, and members agreed not to allow one in grades 3 to 5.',
      body: [
        { kind: 'table', caption: 'Selected universal tools for Smarter Balanced math (Usability, Accessibility, and Accommodations Guidelines, June 30, 2026, read 31 October 2026)', head: ['Tool', 'What the guidelines say'], rows: [
          ['Embedded calculator', 'For calculator-allowed items only, grades 6 to 8 and high school'],
          ['Calculator in grades 3 to 5', 'Not included: members agreed to leave it out'],
          ['Math tools (ruler, protractor)', 'Embedded, only with items whose specifications call for them; external rulers and protractors are not part of the online test'],
          ['Mark for review', 'Flags an item, but markings are not saved after moving to the next segment or a break of more than 20 minutes'],
          ['Scratch paper', 'A non-embedded universal tool for notes and computations'],
          ['Breaks', 'No limit on the number of breaks, which may add to overall time']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A detail that catches children out',
          left: [
            'The guidelines put it bluntly: &ldquo;Markings are not saved when the student moves on to the next segment or after a break of more than 20 minutes.&rdquo; A child who flags five questions to revisit later may find the flags gone.',
            'We teach students to treat each question as final when they leave it, and to use mark for review only within a short stretch of work.'
          ],
          rightH3: 'States can change the list',
          right: [
            'The guidelines allow a member to omit a tool that conflicts with its own law or policy, or to add resources for its students. So check your state&rsquo;s version before relying on a tool.',
            'California, for instance, names the exact Desmos calculator for each grade on its own portal. Other states publish their own accessibility manuals.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + LIB + '/usability-accessibility-and-accommodations-guidelines.pdf" rel="noopener" target="_blank">Usability, Accessibility, and Accommodations Guidelines</a>, Smarter Balanced, June 30, 2026.' }
      ]
    },
    {
      id: 'claim3', tint: 'tint', eyebrow: 'Claim 3 in practice',
      h2: 'How do you answer a Smarter Balanced Communicating Reasoning question?',
      lede: 'Test the statement with examples, look for the case that breaks it, and say clearly what you found. Two of the consortium&rsquo;s Claim 3 targets name exactly those moves.',
      body: [
        { kind: 'p', html: 'The grade 3 target list for Claim 3 begins with &ldquo;Test propositions or conjectures with specific examples.&rdquo; and includes &ldquo;Use the technique of breaking an argument into cases.&rdquo; Those two habits carry all the way to grade 11. Here is a grade 7 problem we wrote to practise them.' },
        { kind: 'ol', mt: true, items: [
          '<b>Our problem (not a Smarter Balanced item).</b> Jordan says: &ldquo;When you multiply a number by a fraction, the answer is always smaller than the number you started with.&rdquo; Is Jordan correct? Explain your reasoning.',
          '<b>Case 1: a positive number and a fraction between 0 and 1.</b> 12 x 1/3 = 4, and 4 is smaller than 12. This case agrees with Jordan, which is why the claim feels true.',
          '<b>Case 2: a fraction greater than 1.</b> 12 x 5/4 = 15, and 15 is larger than 12. One counterexample is enough to show the word &ldquo;always&rdquo; is false.',
          '<b>Case 3: zero and negatives.</b> 0 x 1/3 = 0, which is not smaller. And -12 x 1/3 = -4, which is larger than -12, because -4 is to the right of -12 on the number line.',
          '<b>The written answer.</b> &ldquo;Jordan is not correct. It is only true for a positive number times a fraction between 0 and 1. For example, 12 x 5/4 = 15 is larger than 12, and -12 x 1/3 = -4 is larger than -12.&rdquo;'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why this earns credit',
          left: [
            'It answers the question asked (correct or not), names the condition under which the claim does hold, and backs both with specific numbers. A grader can see the reasoning without guessing.'
          ],
          rightH3: 'What loses credit',
          right: [
            'Writing &ldquo;No, because sometimes it gets bigger&rdquo; with no example. The claim is about evidence, and an argument without a case is only an opinion.'
          ] }
      ]
    },
    {
      id: 'states', tint: 'deep', eyebrow: 'Your state',
      h2: 'Which states use Smarter Balanced, and when is the test?',
      lede: 'Membership and dates are set state by state, so the honest answer is to check your own department of education. Here is how to read your state&rsquo;s version quickly.',
      body: [
        { kind: 'ol', items: [
          '<b>Find the state&rsquo;s name for the test.</b> California calls it CAASPP; other members use their own program names. Your child&rsquo;s report or school letter will say.',
          '<b>Find the window.</b> Each member sets its own. In California, district coordinators set dates in the state system and most schools test between mid-March and mid-May; other states publish a statewide window.',
          '<b>Find the state&rsquo;s accessibility manual.</b> It confirms which calculator and tools appear, since members may add or omit resources from the consortium list.',
          '<b>Find the state&rsquo;s score labels.</b> The consortium sets four achievement levels, but states name them. California renamed its levels in 2025 to 2026, for example, without moving any threshold.',
          '<b>Find the practice tests.</b> Members link free practice and training tests from their portals. Use those for the real interface in the final weeks.'
        ] },
        { kind: 'p', mt: true, html: 'Families in California will find that state&rsquo;s grade-by-grade calculator list, scale score ranges and the grade 11 Early Assessment Program on the CAASPP pages of caaspp-elpac.org. For any other state, the blueprint and claims on this page still apply word for word, because the test design is shared.' },
        { kind: 'source', html: 'We have not printed a list of member states: the consortium&rsquo;s membership page was unreachable on 31 October 2026, and we do not publish lists we cannot check.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice',
      h2: 'Twelve Smarter Balanced style practice questions, sorted by claim',
      lede: 'Our own questions, three for each claim, across grades 3 to 11. They train the kind of thinking each claim asks for; they are not consortium items.',
      body: [
        { kind: 'table', caption: 'Original practice by claim (ours), with answers', head: ['Claim', 'Grade', 'Question', 'Answer'], rows: [
          ['1', '3', 'Fill in the blank: 6 x __ = 42.', '7'],
          ['1', '6', 'Divide 3/4 by 1/8.', '6'],
          ['1', '8', 'Solve 4x - 7 = 2x + 9.', 'x = 8'],
          ['2', '4', 'A bus holds 36 students. How many buses for 150 students?', '5 buses (4 hold only 144)'],
          ['2', '7', 'A map scale is 1 inch to 25 miles. Two towns are 3.5 inches apart. How far is that?', '87.5 miles'],
          ['2', '11', 'Find two numbers whose sum is 20 and product is 96.', '8 and 12'],
          ['3', '5', 'Is the product of two whole numbers ever smaller than both? Explain.', 'Yes, when one is 0; otherwise no'],
          ['3', '7', 'Ana says -3 is greater than -1 because 3 is greater than 1. Explain her error.', '-1 is to the right of -3, so -1 is greater'],
          ['3', '8', 'Is every square a rectangle? Is every rectangle a square? Justify both.', 'Yes; no, sides need not be equal'],
          ['4', '6', 'A tap drips 2 ounces per hour. Write and use a model for a full day.', 'w = 2h; 48 ounces'],
          ['4', '8', 'Data: (1, 3), (2, 5), (3, 7). Write a line that fits and predict x = 10.', 'y = 2x + 1; 21'],
          ['4', '11', 'A phone loses 15% of its value each year. Model the value after t years from a start of 800.', 'V = 800(0.85)^t']
        ] },
        { kind: 'p', mt: true, html: 'Member states link the consortium&rsquo;s free practice and training tests from their own testing portals, and those show the real interface and question types. We bring them in during the last weeks, once the reasoning habits are in place.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan',
      h2: 'An eight-week plan for the Smarter Balanced math test',
      lede: 'Ours, built on the claim weights: half the time on procedures, half on the three reasoning claims.',
      body: [
        { kind: 'ol', items: [
          '<b>Week 1: one practice test from your state&rsquo;s portal.</b> We sort every miss by claim, which tells us more than a raw score.',
          '<b>Weeks 2 and 3: Claim 1 gaps.</b> The priority cluster for the grade first, because it carries the most items.',
          '<b>Weeks 4 and 5: Claim 3.</b> Conjectures, counterexamples and cases, like our Jordan problem, two a lesson.',
          '<b>Week 6: Claims 2 and 4.</b> Multi-step problems and simple models from data, with units on every number.',
          '<b>Week 7: one full performance task.</b> Four to six linked questions in one sitting, with written explanations.',
          '<b>Week 8: tools and rules.</b> The calculator for the grade, the 20-minute rule for marks, then rest.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'By grade band',
    h2: 'What Claim 3 reasoning looks like as children grow',
    lede: 'Our reading of how the same claim deepens from grade 3 to grade 11.',
    table: { caption: 'Communicating Reasoning by grade band (ours)', head: ['Grade band', 'A typical argument', 'The habit to build'], rows: [
      ['3 to 5', 'Is 3/4 bigger than 2/3? Show it.', 'Draw a model and point to it in words'],
      ['6 to 8', 'Does a percent increase then the same percent decrease return to the start?', 'Try a number, find the case that breaks it'],
      ['11', 'Is this function always increasing?', 'Use the rule itself, not a few points, as evidence']
    ] },
    left: { h3: 'For parents', ps: [
      'At dinner, ask &ldquo;is that always true?&rdquo; about one thing your child says about numbers. It is Claim 3 practice without a worksheet.',
      'Read the claim scores on the report, not only the overall level. They tell you which half of the test needs work.'
    ] },
    right: { h3: 'For students', ps: [
      'When a question says &ldquo;always&rdquo;, hunt for one example that breaks it. When it says &ldquo;sometimes&rdquo;, find one example each way.',
      'Finish each question before leaving it. Marks for review can disappear after a long break.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for students in Smarter Balanced states',
    lede: 'Grade-level classes, plus routes for students who want more than the state test.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Grades 3 to 5', courses: [
        { code: 'SBP / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Every grade 3 to 5 domain, with written reasons.' },
        { code: 'SBP / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Speed and sense for calculator-free tests.' },
        { code: 'SBP / E / 03', slug: 'early-math-foundations', title: 'Early math', blurb: 'For children before grade 3.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'SBP / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Ratios, equations, geometry, statistics.' },
        { code: 'SBP / M / 02', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'Contest problems that stretch reasoning.' },
        { code: 'SBP / M / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Models you can run in Python.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Grade 11', courses: [
        { code: 'SBP / H / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Linear work done properly.' },
        { code: 'SBP / H / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Functions, statistics and beyond.' },
        { code: 'SBP / H / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'The next test after grade 11.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lesson times set to your state&rsquo;s clock',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Set to Pacific, Mountain, Central or Eastern Time.' },
      { time: 'Weekends', l: 'Performance-task sittings before the spring window.' },
      { time: '1-on-1', l: 'Claim-by-claim work on the gaps a report shows.' }
    ],
    cells: [
      { h3: 'Claim-sorted', p: 'Every mistake tagged to one of four claims.' },
      { h3: 'Reasoning weekly', p: 'A conjecture or counterexample each lesson.' },
      { h3: 'Models from data', p: 'Claim 4 with real tables and units.' },
      { h3: 'Tool rules', p: 'Calculator only where the grade allows.' },
      { h3: 'State practice last', p: 'Your portal&rsquo;s own tests to finish.' },
      { h3: 'Two formats', p: 'Batch of fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'Older students often build small math tools in code. Browse <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews parents left on Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'Billed monthly in US dollars with no long commitment; families in Smarter Balanced states often join for the term before testing and stop afterwards.',
    free: ['A free first class', 'Share the claim scores from the last report', 'No payment details'],
    group: ['Fifteen to twenty in a class', 'One teacher across the term', 'Choose your batch', 'Monthly billing'],
    one: ['Private lessons', 'Built around the weakest claim', 'Your choice of times']
  },

  faq: {
    eyebrow: 'Families ask',
    h2: 'Smarter Balanced math: common questions',
    items: [
      { q: 'What is the Smarter Balanced math test?', a: 'It is the summative mathematics assessment written by the Smarter Balanced consortium and given by member states in grades 3 to 8 and 11. It combines computer-adaptive questions with a performance task and reports an overall score plus three claim scores.' },
      { q: 'What does SBAC stand for?', a: 'SBAC is the common short form of the Smarter Balanced Assessment Consortium, the group of member states that develops the test. States usually give it under their own program name, such as California\'s CAASPP.' },
      { q: 'How many questions are on the Smarter Balanced math test?', a: 'It varies because the test adapts, so the consortium\'s blueprint gives ranges. For Claim 1 alone a grade 3 to 5 student meets 17 to 20 items, and each performance task contains 4 to 6 items.' },
      { q: 'What are the four claims on the SBAC math test?', a: 'Concepts and Procedures, Problem Solving, Communicating Reasoning, and Modeling and Data Analysis. Problem Solving and Modeling are reported together, so families see three claim scores.' },
      { q: 'Is a calculator allowed on the Smarter Balanced math test?', a: 'Only on calculator-allowed items in grades 6 to 8 and high school, where an embedded calculator appears. The consortium\'s members agreed not to include a calculator for grades 3 to 5.' },
      { q: 'Is the Smarter Balanced test the same in every state?', a: 'The design, claims and blueprint are shared, but each member sets its own window and score labels and may add or omit some accessibility tools. Check your own state\'s department of education.' },
      { q: 'When is the Smarter Balanced test in 2027?', a: 'Each member state sets its own spring window. In California, for example, districts set their dates and most schools test between mid-March and mid-May, so ask your school for its 2027 dates.' },
      { q: 'Where can I find a Smarter Balanced practice test?', a: 'Member states link the official practice and training tests from their testing portals, and they show the real interface. The twelve questions on this page are our own practice, sorted by claim.' },
      { q: 'How can my child improve their Claim 3 score?', a: 'Practise testing statements with examples and counterexamples, and write the conclusion in a full sentence with numbers as evidence. Our Jordan fraction problem on this page shows the method.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We set times in your state\'s time zone.' },
      { q: 'Are you connected with Smarter Balanced?', a: 'No. Modern Age Coders is an independent online school with no link to the Smarter Balanced consortium, any member state or any district. We quote the consortium\'s public documents and link to them.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'State pages and grade pages that sit beside this one.',
    items: [
      { href: '/coding-classes-in-california', label: 'Coding classes in California', p: 'For families in the largest member state.' },
      { href: '/common-core-math-tutor', label: 'Common Core math tutoring', p: 'The standards behind the claims.' },
      { href: '/online-math-tutor-5th-grade', label: 'Fifth grade math tutoring', p: 'The last calculator-free year.' },
      { href: '/online-math-tutor-7th-grade', label: 'Seventh grade math tutoring', p: 'Proportions, integers and equations.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'Reasoning beyond the state test.' },
      { href: '/coding-and-ai-classes-in-oregon', label: 'Coding and AI classes in Oregon', p: 'One of our state pages.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Send the claim scores from your child&rsquo;s last report. In the first class the teacher works one Communicating Reasoning problem with your child so you can hear how they argue.',
    readFirst: 'See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or look through all our <a class="ag-inline-link" href="/courses">courses</a>.',
    note: 'Our teachers are based in India and teach at hours fixed to your US time zone, after school or at weekends. WhatsApp is the quickest way to ask a question.',
    formNote: 'There is no charge for the first class and no card is taken.'
  },

  footer: {
    cols: [
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-4th-grade', label: 'Grade 4 math' },
        { href: '/online-math-tutor-6th-grade', label: 'Grade 6 math' },
        { href: '/online-math-tutor-8th-grade', label: 'Grade 8 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'State pages', links: [
        { href: '/coding-classes-in-california', label: 'California' },
        { href: '/coding-classes-in-washington', label: 'Washington' },
        { href: '/coding-and-ai-classes-in-connecticut', label: 'Connecticut' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Four claims, three scores'
  },

  personalityCss: `
.ag-root.ag-sbp .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-sbp .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-sbp .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-sbp .ag-table td { line-height: 1.5; }
.ag-root.ag-sbp .ag-steps li { padding-bottom: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Smarter Balanced consortium public library on portal.smarterbalanced.org, read raw 31 October 2026: Mathematics Summative Assessment Blueprint (as of 2018 to 2019; item ranges by claim, PT size and hand-scoring, DOK minimums, grade 3 targets), Mathematics Content Specifications (claim statements and weights), Usability, Accessibility, and Accommodations Guidelines dated June 30, 2026 (universal tools, calculator grades, items members excluded, mark for review rule, member changes). smarterbalanced.org returned 403 and was not retried. California\'s CAASPP manual used only as one member\'s example of window-setting.',
    localProject: 'Our grade 7 Claim 3 worked example: Jordan\'s claim that multiplying by a fraction always makes a number smaller, tested by cases (12 x 1/3 = 4, 12 x 5/4 = 15, 0 x 1/3 = 0, -12 x 1/3 = -4) and the written conclusion. Our twelve-item practice set sorted by claim, the state-checklist steps, eight-week plan and grade-band ladder. Lesson family: reasoning by cases and counterexamples.',
    requiredMentions: ['the total number of items across these two reporting categories for any individual test event is 18-20.', 'Markings are not saved when the student moves on to the next segment or after a break of more than 20 minutes.', 'Students can clearly and precisely construct viable arguments to support their own reasoning and to critique the reasoning of others.', 'Use the technique of breaking an argument into cases.', 'each student receives at least 7 Claim 1 adaptive items at depth of knowledge (DOK) level 2 or higher', 'have been combined because of content similarity', '12 x 5/4 = 15 is larger than 12, and -12 x 1/3 = -4 is larger than -12', 'Claim 1, Priority Cluster (adaptive)', 'Up to four of them may need hand-scoring in grades 3 to 8, and up to six in grade 11'],
    sources: [
      { claim: 'Mathematics Summative Assessment Blueprint, Smarter Balanced.', url: LIB + '/mathematics-summative-assessment-blueprint.pdf' },
      { claim: 'Mathematics Content Specifications, Smarter Balanced.', url: LIB + '/mathematics-content-specifications.pdf' },
      { claim: 'Usability, Accessibility, and Accommodations Guidelines, June 30, 2026.', url: LIB + '/usability-accessibility-and-accommodations-guidelines.pdf' },
      { claim: 'CAASPP Online Test Administration Manual, one member\'s window and scheduling rules.', url: 'https://ca-toms-help.ets.org/caaspp-otam/prep-and-planning/general-test-admin-info/' }
    ],
    rejectedClaims: [
      'smarterbalanced.org pages (members list, about pages): HTTP 403 on 31 October 2026; not retried; no member list printed.',
      'A list of states such as WA, OR, CT, DE, HI, ID, NV, SD, VT from our research notes: not verified at a primary source this session; only California is named, from its own portal.',
      'Washington OSPI and Delaware and Hawaii department pages: 403 on probe; not retried. Connecticut\'s page was reachable but gave no math test facts; not used.',
      'Consortium-wide achievement level names and scale thresholds: the achievement-level documents were not located in the public library; states\' labels differ, so none are printed here.',
      'Blueprint sample items and any practice or interim item: not reproduced.',
      'Score or level promises: refused. Affiliation with Smarter Balanced or any member: none.'
    ]
  }
};
