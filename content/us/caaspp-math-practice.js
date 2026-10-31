'use strict';
// CAASPP math practice (ag- state-test door; UK and US exams cluster Phase 2, row US022, group B10).
// Plan docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026. cde.ca.gov
// answered with a WAF redirect loop (wafalert.html) and was not retried; facts come instead from California's own testing
// portal, caaspp-elpac.org (copyright California Department of Education, maintained by ETS), and from the CDE manuals it
// links on ca-toms-help.ets.org. Copies in keyword-research-2026-09/uk-us-gap/src/caaspp-math-practice/:
//  - caaspp-elpac.org/assessments/caaspp/sb-ela-math: "Students in grades three through eight and grade eleven take the Smarter
//    Balanced Summative Assessments."; "computer adaptive with a performance task"; "approximately five to six hours; however,
//    each is untimed" (ELA and math together).
//  - Smarter Balanced Assessment Fact Sheet (sbsumfactsheet.pdf, May 2025): "Most schools will test between the middle of March
//    and the middle of May."; adaptive description "As students answer correctly, they will receive more challenging questions."
//  - What Do the Scores Mean? Mathematics (scoresmeanmath.pdf, March 2026): two composite claims "Composite Area 1: Concepts and
//    Procedures, and Composite Area 2: Mathematical Practices"; Level 4 Advanced, Level 3 Proficient, Level 2 Developing, Level 1
//    Minimal, with the definitions quoted in short.
//  - Accessibility resources page, Desmos Calculators: "Grades three through five: No embedded calculator used"; grade six
//    four-function; grades seven and eight scientific; "High school/grade eleven: Graphing Calculator".
//  - CAASPP Online Test Administration Manual (2025 to 2026), General Test Administration Information: Table 1 estimated times,
//    math 3 to 5 CAT 0:45 PT 1:00 total 1:45; 6 to 8 CAT 1:00 PT 1:00 total 2:00; grade 11 CAT 1:00 PT 1:30 total 2:30; "the
//    assessments are not timed"; "Smarter Balanced recommends that students take the CAT and PT items on separate days";
//    "Administer the mathematics PT in one session."; "If the assessment is paused for more than 20 minutes, the student will
//    not be able to go back to items on the previous pages"; grades six and above have a calculator segment and a no-calculator
//    segment, and "A student may not return to a segment once it has been completed and submitted"; "All CAASPP testing must take
//    place within this window, including any makeup testing."; LEA coordinators set test dates in TOMS; EAP "a joint
//    collaboration of the CDE and the CSU" and "The release of CAASPP results will not affect a student's application for
//    admission."
//  - OTAM About the Assessments: parent/guardian exemption (PGE) exists; EL students in first 12 months "are required to take
//    the Smarter Balanced for Mathematics".
//  - Scoring and Reporting Guide, What's New in 2025 to 2026: labels revised, "no cut scores or achievement level thresholds were
//    changed"; old Standard Exceeded/Met/Nearly Met/Not Met to Advanced/Proficient/Developing/Minimal; area labels Above
//    Proficient, At or Near Proficient, Below Proficient. Appendix A: current math scale score ranges by grade (grade 3 Minimal
//    2190 to 2380, Developing 2381 to 2435, Proficient 2436 to 2500, Advanced 2501 to 2660; grades 4 to 8 and 11 as tabled).
//    Scale Scores chapter: "It is not possible to calculate a scale score by multiplying a student's percent correct".
// No released item, practice-test item or training-test item reproduced; the page links the official practice and training
// tests. No totals computed from published parts (the ELA plus math estimates are quoted as CDE prints them).
// Our own material, labelled: the grade 5 performance-task style worked example (class garden, 6 beds, 3/4 of a bag each,
// bags in packs of 4), the scale-score reading example (a grade 6 score of 2560), the twelve-item practice set with answers,
// the ten-week plan and the grade ladder.
// Lesson family: planning a multi-part performance task and reading a scale score against California's thresholds.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const PORTAL = 'https://www.caaspp-elpac.org';
const OTAM = 'https://ca-toms-help.ets.org';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'CAASPP MATH', blurb: 'California&rsquo;s CAASPP Smarter Balanced math test from the state&rsquo;s own testing portal: grades, timing, Desmos calculators by grade, the renamed score levels and original practice.' },
  slug: 'caaspp-math-practice',
  code: 'cap',
  accent: '#9B506D',
  accentRationale: 'CAASPP math practice: a dusty rose #9B506D as allocated, about 5.5:1 on paper #FBF8F2 and above 4.5:1 on the deepest tint, a California bougainvillea tone kept clear of the Texas and New York accents',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }, { slug: 'coding-classes-in-california', name: 'California' }],
  routeLabel: 'CAASPP math practice',
  title: 'CAASPP Math Practice: California Test Guide, Grades 3 to 11',
  description: 'CAASPP math practice for California grades 3 to 8 and 11: adaptive test, performance task, Desmos calculator rules and the 2026 score labels, with original practice.',
  ogDescription: 'Untimed, adaptive, with one performance task, and since 2025 to 2026 a new word for passing: Proficient. California&rsquo;s CAASPP math test from the state&rsquo;s own portal, with our practice.',
  twitterDescription: 'California CAASPP Smarter Balanced math, from the state portal, with original practice.',
  pageName: 'CAASPP Math Practice',
  webPageDescription: 'A guide for California families to the CAASPP Smarter Balanced Summative Assessment in mathematics, built from the caaspp-elpac.org portal, the CAASPP Online Test Administration Manual and the Scoring and Reporting Guide, with an original performance-task example, a scale-score reading example and a practice set.',
  courseDescription: 'Live online math classes for California students in grades 3 to 8 and high school, taught to the California Common Core State Standards for mathematics, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'CAASPP math practice',
  navLinks: [
    { href: '#format', label: 'Format' },
    { href: '#calculators', label: 'Calculators' },
    { href: '#levels', label: 'New levels' },
    { href: '#task', label: 'Performance task' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'California &middot; Grades 3 to 8 and 11 &middot; From the state testing portal',
  h1: 'CAASPP math practice for California students',
  lede: 'Every spring, California children in grades 3 to 8 and grade 11 sit the CAASPP math test, the Smarter Balanced Summative Assessment as California runs it. Two things about it surprise parents. First, it has no clock: the state calls it untimed. Second, the words on the report changed for 2025 to 2026. &ldquo;Standard Met&rdquo; is now &ldquo;Proficient&rdquo;, although California says not one cut score moved. This guide sets out what the California Department of Education publishes about the math test, then teaches the hardest part, the performance task, with a problem of our own.',
  secondaryCta: { href: '#task', label: 'See a worked task' },
  wa: 'Hello Modern Age Coders, my child in California takes the CAASPP math test this spring. Could we book a free first class?',
  heroNote: 'Live math since 2020 &middot; 10,000+ students &middot; lessons on Pacific Time',
  spec: [
    ['Test', 'CAASPP Smarter Balanced Mathematics'],
    ['Run by', 'California Department of Education'],
    ['Grades', '3 to 8 and 11'],
    ['Parts', 'Adaptive section plus a performance task'],
    ['Time limit', 'None'],
    ['Usual window', 'Mid-March to mid-May'],
    ['Our classes', 'Batch or 1-on-1'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'CAASPP math is California&rsquo;s annual Smarter Balanced Summative Assessment in mathematics, taken on computer by students in grades 3 to 8 and grade 11. It has a computer-adaptive section and a performance task, it is untimed, and results fall into four levels: Minimal, Developing, Proficient and Advanced. Most schools test between mid-March and mid-May. Modern Age Coders teaches the same California standards live online, either in a group batch or 1-on-1, with our Elementary Maths course as the starting point for grades 3 to 5.',

  picks: {
    eyebrow: 'Courses for California students',
    h2: 'Three courses built around the California math standards',
    lede: 'Each one teaches the reasoning the CAASPP rewards, not a bank of look-alike items.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'CAP / 01', title: 'Grades 3 to 5: elementary math', note: 'Fractions, area and word problems explained in sentences.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'CAP / 02', title: 'Grades 6 to 8: middle school math', note: 'Ratios, equations and geometry, with and without a calculator.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'CAP / 03', title: 'High school math, for grade 11', note: 'Functions, modeling and statistics on a graphing tool.' }
    ]
  },

  sections: [
    {
      id: 'format', tint: 'tint', eyebrow: 'Format',
      h2: 'What is the CAASPP math test, and how is it structured?',
      lede: 'It is the Smarter Balanced math assessment that California gives as part of CAASPP, its state testing system. Each student meets two parts: an adaptive set of questions and one performance task.',
      body: [
        { kind: 'table', caption: 'Estimated CAASPP math testing times (CAASPP Online Test Administration Manual, Table 1; the state notes the tests are not timed and these figures are for scheduling only)', head: ['Grade band', 'Adaptive (CAT) items', 'Performance task (PT)', 'Math total'], rows: [
          ['Grades 3 to 5', '45 minutes', '1 hour', '1 hour 45 minutes'],
          ['Grades 6 to 8', '1 hour', '1 hour', '2 hours'],
          ['Grade 11', '1 hour', '1 hour 30 minutes', '2 hours 30 minutes']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The adaptive part',
          left: [
            'California&rsquo;s fact sheet describes the adaptive section plainly: &ldquo;As students answer correctly, they will receive more challenging questions.&rdquo; Wrong answers bring easier ones. Two classmates can therefore see quite different questions and still be measured on the same scale.',
            'That is why a child sometimes comes home saying the test felt very hard. A hard-feeling test is often a sign the child was doing well, because the system kept raising the level.'
          ],
          rightH3: 'The performance task',
          right: [
            'The performance task is a short set of linked questions around one real-world situation. California&rsquo;s score guide says it lets students evaluate information and develop and communicate &ldquo;a solution to a real-world problem&rdquo;.',
            'The manual tells schools to give the math performance task in one session, and passes on the consortium&rsquo;s advice that the adaptive items and the task be taken on separate days so children are not worn out.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + PORTAL + '/assessments/caaspp/sb-ela-math" rel="noopener" target="_blank">Smarter Balanced Assessments for ELA and Mathematics</a> and the <a class="ag-inline-link" href="' + PORTAL + '/s/docs/sbsumfactsheet.pdf" rel="noopener" target="_blank">Assessment Fact Sheet</a> (May 2025), caaspp-elpac.org; <a class="ag-inline-link" href="' + OTAM + '/caaspp-otam/prep-and-planning/general-test-admin-info/" rel="noopener" target="_blank">CAASPP Online Test Administration Manual</a>, all read 31 October 2026. We are not connected with the California Department of Education, ETS or any California district.' }
      ]
    },
    {
      id: 'rules', tint: 'deep', eyebrow: 'Test-day rules',
      h2: 'Is the CAASPP timed, and can my child go back to earlier questions?',
      lede: 'There is no time limit, but there are two rules about going back that every child should hear before test day.',
      body: [
        { kind: 'three', cells: [
          { h3: 'No clock', p: 'The state portal estimates five to six hours for ELA and math together, &ldquo;however, each is untimed.&rdquo; A careful child can keep working.' },
          { h3: 'The 20-minute pause', p: 'The manual warns that after a pause of more than 20 minutes, the student cannot return to items on earlier screens. Finish a page before a long break.' },
          { h3: 'Segments lock', p: 'From grade 6, the math test has a calculator segment and a no-calculator segment, and a submitted segment cannot be reopened.' }
        ] },
        { kind: 'p', mt: true, html: 'In practice the second and third rules mean the same thing: check each answer before moving on, because the test is not built for a final sweep back through everything. We practise that habit from the first lesson, so that checking happens question by question rather than at the end.' },
        { kind: 'two', mt: true,
          leftH3: 'Who takes it',
          left: [
            'All students enrolled in grades three through eight and grade eleven take the Smarter Balanced math test, according to the manual, apart from the roughly 1 percent with the most significant cognitive disabilities who take the California Alternate Assessments.',
            'English learners in their first 12 months in a US school get a one-time exemption from the ELA test only. The manual states they are still required to take the Smarter Balanced for Mathematics.'
          ],
          rightH3: 'Parent exemption',
          right: [
            'The manual also recognises a parent/guardian exemption (PGE) submitted to the test site. Whether to use it is a family decision; we simply note that California provides the route.',
            'For grade 11, sitting the test has a second use, described in the next sections: the Early Assessment Program with the California State University.'
          ] }
      ]
    },
    {
      id: 'calculators', tint: 'tint', eyebrow: 'Calculators',
      h2: 'Which calculator is allowed on the CAASPP math test?',
      lede: 'None in grades 3 to 5. From grade 6 an on-screen Desmos calculator appears for certain items, and its type changes with the grade.',
      body: [
        { kind: 'table', caption: 'Embedded Desmos calculator by grade, CAASPP mathematics (caaspp-elpac.org Accessibility Resources page, Desmos Calculators section, read 31 October 2026)', head: ['Grade', 'Embedded calculator'], rows: [
          ['3, 4 and 5', 'No embedded calculator used'],
          ['6', 'Four-function calculator'],
          ['7 and 8', 'Scientific calculator'],
          ['11', 'Graphing calculator']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Practise on the same tool',
          left: [
            'The portal notes that the same calculators are on the Desmos website so students can get used to them, and links California&rsquo;s own four-function, scientific and graphing versions.',
            'We teach grade 6 and above with those exact links open. A child who has only used a handheld calculator loses time finding the fraction or square root keys on screen.'
          ],
          rightH3: 'Mental arithmetic still matters',
          right: [
            'Because the calculator appears only for calculator-allowed items, and never in grades 3 to 5, number fluency carries a lot of the test. Multiplication facts and fraction sense are not optional extras here.',
            'In grades 6 to 8 the no-calculator segment comes with its own lock, so a child must be confident doing those questions by hand.'
          ] },
        { kind: 'source', html: 'Desmos test calculators for California: <a class="ag-inline-link" href="https://www.desmos.com/testing/california/fourfunction" rel="noopener" target="_blank">four-function</a>, <a class="ag-inline-link" href="https://www.desmos.com/testing/california/scientific" rel="noopener" target="_blank">scientific</a> and <a class="ag-inline-link" href="https://www.desmos.com/testing/california/graphing" rel="noopener" target="_blank">graphing</a>, linked from the <a class="ag-inline-link" href="' + PORTAL + '/resources/preparation/accessibility-resources" rel="noopener" target="_blank">CAASPP accessibility resources page</a>.' }
      ]
    },
    {
      id: 'levels', tint: 'deep', eyebrow: 'Results',
      h2: 'What do the new CAASPP levels Advanced, Proficient, Developing and Minimal mean?',
      lede: 'They are the old four levels with new names. California&rsquo;s reporting guide for 2025 to 2026 says only the labels and descriptions changed and that no cut score or threshold moved.',
      body: [
        { kind: 'table', caption: 'CAASPP Smarter Balanced overall levels, old and new labels (Scoring and Reporting Guide, What&rsquo;s New in 2025 to 2026, read 31 October 2026)', head: ['Level', 'Label before 2025 to 2026', 'Label now', 'California&rsquo;s description, in short'], rows: [
          ['4', 'Standard Exceeded', 'Advanced', 'Advanced grade-level knowledge and a sophisticated ability to apply it'],
          ['3', 'Standard Met', 'Proficient', 'Proficient grade-level knowledge and a thorough ability to apply it'],
          ['2', 'Standard Nearly Met', 'Developing', 'Developing grade-level knowledge and an initial understanding'],
          ['1', 'Standard Not Met', 'Minimal', 'Minimal grade-level knowledge and a limited understanding']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two composite areas on the report',
          left: [
            'Besides the overall level, the math report gives two composite areas: &ldquo;Composite Area 1: Concepts and Procedures, and Composite Area 2: Mathematical Practices&rdquo;, in the words of California&rsquo;s March 2026 score guide.',
            'Each area is marked Above Proficient, At or Near Proficient, or Below Proficient. These were Above, Near and Below Standard on older reports.'
          ],
          rightH3: 'Why the rename matters to families',
          right: [
            'A child who was &ldquo;Standard Nearly Met&rdquo; in 2025 and &ldquo;Developing&rdquo; in 2026 has not slipped. The labels changed; the thresholds did not, so the two years can be compared directly.',
            'California also removed the dashed line between Level 2 and Level 3 from the gauge on the printed report, so read the scale score itself rather than the picture.'
          ] }
      ]
    },
    {
      id: 'scores', tint: 'tint', eyebrow: 'Scale scores',
      h2: 'What CAASPP math score is proficient for each grade?',
      lede: 'Each grade has its own scale. California prints the current ranges in its Scoring and Reporting Guide, and they are the Smarter Balanced thresholds.',
      body: [
        { kind: 'table', caption: 'Current CAASPP Smarter Balanced mathematics scale score ranges (Scoring and Reporting Guide, Appendix A, read 31 October 2026)', head: ['Grade', 'Minimal (1)', 'Developing (2)', 'Proficient (3)', 'Advanced (4)'], numCols: [1, 2, 3, 4], rows: [
          ['3', '2190 to 2380', '2381 to 2435', '2436 to 2500', '2501 to 2660'],
          ['4', '2205 to 2410', '2411 to 2484', '2485 to 2548', '2549 to 2700'],
          ['5', '2220 to 2454', '2455 to 2527', '2528 to 2578', '2579 to 2740'],
          ['6', '2235 to 2472', '2473 to 2551', '2552 to 2609', '2610 to 2780'],
          ['7', '2250 to 2483', '2484 to 2566', '2567 to 2634', '2635 to 2820'],
          ['8', '2265 to 2503', '2504 to 2585', '2586 to 2652', '2653 to 2860'],
          ['11', '2280 to 2542', '2543 to 2627', '2628 to 2717', '2718 to 2900']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Our example: reading a grade 6 report.</b> Suppose a sixth grader scores 2560. In the table, grade 6 Proficient runs from 2552 to 2609, so 2560 is Proficient, but only 8 points above the start of that band.',
          '<b>Look at the measurement error, too.</b> Every score on the report comes with a plus-or-minus range. A score sitting 8 points above a threshold could, on another day, land just below it. We treat it as &ldquo;on the line&rdquo;, not &ldquo;safe&rdquo;.',
          '<b>Then read the two composite areas.</b> If Concepts and Procedures is Above Proficient but Mathematical Practices is Below Proficient, the gap is in reasoning and problem solving, which is exactly what the performance task tests. That shapes the next term&rsquo;s lessons.'
        ] },
        { kind: 'p', mt: true, html: 'One warning from California&rsquo;s own guide: &ldquo;It is not possible to calculate a scale score by multiplying a student&rsquo;s percent correct&rdquo;. Because the test adapts, two children with the same number right can earn different scale scores. Ignore any website that converts a practice-test percentage into a CAASPP level.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="' + OTAM + '/scoring-and-reporting/appendices/appendix-a/" rel="noopener" target="_blank">Appendix A: Scale Score Ranges</a>, <a class="ag-inline-link" href="' + OTAM + '/scoring-and-reporting/whats-new/" rel="noopener" target="_blank">What&rsquo;s New in 2025 to 2026</a> and <a class="ag-inline-link" href="' + PORTAL + '/s/docs/scoresmeanmath.pdf" rel="noopener" target="_blank">What Do the Scores Mean? Mathematics</a> (March 2026). The worked reading above is our example, not a real student.' }
      ]
    },
    {
      id: 'task', tint: 'deep', eyebrow: 'Performance task',
      h2: 'How do you answer a CAASPP math performance task?',
      lede: 'One situation, several connected questions, and at least one answer that has to be explained. Here is a grade 5 problem we wrote in that spirit, worked the way we teach it.',
      body: [
        { kind: 'ol', items: [
          '<b>Our problem (not a CAASPP item).</b> A class is planting a garden with 6 raised beds. Each bed needs 3/4 of a bag of soil. Soil is sold only in packs of 4 bags. Part A: how many bags of soil does the class need? Part B: how many packs must they buy? Part C: Mia says they should buy 1 pack because 6 x 3/4 is less than 4. Is Mia right? Explain.',
          '<b>Part A.</b> 6 x 3/4 = 18/4 = 4 2/4 = 4 1/2 bags. We write the multiplication and the simplified mixed number, not just the result.',
          '<b>Part B.</b> One pack is 4 bags, which is less than 4 1/2, so one pack is not enough. Two packs give 8 bags. They must buy 2 packs. The context decides the rounding: you cannot buy half a pack, so we round up.',
          '<b>Part C.</b> Mia is not right. 6 x 3/4 is 4 1/2, which is more than 4, not less. One pack would leave the class half a bag short for the last bed.',
          '<b>What makes this a performance-task answer.</b> Each part uses the one before, the rounding comes from the situation rather than a rule, and Part C asks for a judgement with a reason. That is California&rsquo;s Mathematical Practices composite in miniature.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Three habits we drill',
          left: [
            'Reread the situation before every part. Performance tasks hide the deciding fact (packs of 4, whole buses, a deadline) in the first paragraph.',
            'Label every number with its unit, and answer the question that was asked: &ldquo;2 packs&rdquo;, not &ldquo;8&rdquo;.'
          ],
          rightH3: 'One habit we break',
          right: [
            'Writing &ldquo;Mia is wrong&rdquo; and stopping. The explanation is where the reasoning shows, and a reason that uses a number (4 1/2 is more than 4) is stronger than one that does not.'
          ] }
      ]
    },
    {
      id: 'window', tint: 'tint', eyebrow: 'Spring 2027',
      h2: 'When is the CAASPP math test in 2027?',
      lede: 'California does not set one statewide test day. Each district chooses its window, and the state says most schools test between the middle of March and the middle of May.',
      body: [
        { kind: 'table', caption: 'How the CAASPP math window is set (Assessment Fact Sheet, May 2025; CAASPP Online Test Administration Manual, read 31 October 2026)', head: ['Question', 'What California publishes'], rows: [
          ['Who sets the dates', 'Each local educational agency&rsquo;s CAASPP coordinator sets test dates in TOMS, the state test management system'],
          ['Typical spring window', 'Most schools test between the middle of March and the middle of May'],
          ['Make-ups', 'All CAASPP testing, including any makeup testing, must take place within the school&rsquo;s window'],
          ['Suggested pacing', 'Adaptive items and the performance task on separate days; the math task in one session']
        ] },
        { kind: 'p', mt: true, html: 'For 2026 to 2027, ask your child&rsquo;s school for its window as soon as it is published, usually in the winter. Our ten-week plan below counts back from the first math day. California&rsquo;s August 2026 assessment timeline on the portal shows the year&rsquo;s tests in one chart for families who want the full calendar.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="' + PORTAL + '/s/docs/assessmenttimeline.pdf" rel="noopener" target="_blank">California Assessment Timeline</a> (August 2026) and the fact sheet above.' }
      ]
    },
    {
      id: 'grade11', tint: 'deep', eyebrow: 'Grade 11',
      h2: 'Does the grade 11 CAASPP math score matter for college?',
      lede: 'It can help with placement at the California State University through the Early Assessment Program, and the state says it does not affect admission.',
      body: [
        { kind: 'two',
          leftH3: 'What the EAP is',
          left: [
            'California&rsquo;s manual calls the Early Assessment Program &ldquo;a joint collaboration of the CDE and the CSU.&rdquo; Every eleventh grader takes part simply by completing the Smarter Balanced ELA and math tests.',
            'The program gives an early indicator of readiness for college-level work in mathematics and quantitative reasoning before senior year, and the CSU uses the results for course placement once a student is admitted.'
          ],
          rightH3: 'What it is not',
          right: [
            'The manual is explicit: &ldquo;The release of CAASPP results will not affect a student&rsquo;s application for admission.&rdquo; Students are asked to authorise release of their results to the CSU.',
            'So the grade 11 test is worth taking seriously for placement, but it is not an admissions exam, and we never present it as one.'
          ] },
        { kind: 'p', mt: true, html: 'Grade 11 is also the only CAASPP math year with the graphing calculator. Teenagers who have only used a scientific calculator benefit from a few lessons on the Desmos graphing tool: entering a function, finding an intersection, and reading a table of values.' }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice',
      h2: 'Twelve CAASPP-style math practice questions with answers',
      lede: 'Written by us, two per grade band and four for grade 11, labelled with the composite area each one leans on. They are not CAASPP items.',
      body: [
        { kind: 'table', caption: 'Our original practice (not California or Smarter Balanced items), with answers', head: ['Grade', 'Question', 'Leans on', 'Answer'], rows: [
          ['3', 'A shelf holds 7 rows of 8 books. How many books? Write the equation.', 'Concepts and Procedures', '7 x 8 = 56'],
          ['4', 'Is 3/5 closer to 0, 1/2 or 1? Explain using a number line.', 'Mathematical Practices', '1/2 (3/5 = 0.6, which is 0.1 from 1/2)'],
          ['5', 'A recipe uses 2/3 cup of oats per batch. How many cups for 4 batches?', 'Concepts and Procedures', '8/3 = 2 2/3 cups'],
          ['5', 'Leo says 0.4 x 0.2 = 0.8. Find and explain his error.', 'Mathematical Practices', '0.08: tenths times tenths gives hundredths'],
          ['6', 'A phone plan costs 12 per month plus 3 per gigabyte. Write the cost for g gigabytes.', 'Concepts and Procedures', '12 + 3g'],
          ['6', 'Which is the better buy: 5 pens for 4 or 8 pens for 6? Show unit rates.', 'Mathematical Practices', '8 for 6 (0.75 each against 0.80)'],
          ['7', 'Solve 3(x - 2) = 15.', 'Concepts and Procedures', 'x = 7'],
          ['8', 'A line passes through (0, 2) and (4, 10). What is its slope and equation?', 'Concepts and Procedures', 'slope 2; y = 2x + 2'],
          ['11', 'Solve x&sup2; - 5x + 6 = 0.', 'Concepts and Procedures', 'x = 2 or x = 3'],
          ['11', 'A population of 500 doubles every 3 years. Write a model and find the size after 9 years.', 'Mathematical Practices', 'P = 500 x 2^(t/3); 4,000'],
          ['11', 'Is the function f(x) = 2x + 1 increasing or decreasing? Justify.', 'Mathematical Practices', 'Increasing: slope 2 is positive'],
          ['11', 'A survey of 40 students finds 14 walk to school. Estimate how many of 600 students walk.', 'Mathematical Practices', '210, assuming the sample represents the school']
        ] },
        { kind: 'p', mt: true, html: 'For the real interface, California provides free <a class="ag-inline-link" href="' + PORTAL + '/resources/preparation/practice-and-training-tests" rel="noopener" target="_blank">practice and training tests</a> through its student testing site, which the portal says give students experience with the testing interface and test content. Children can sign in as a guest. We use those in the last weeks, after the teaching is done.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A plan',
      h2: 'How to prepare for the CAASPP math test in ten weeks',
      lede: 'Our plan, counting back from the first math day in your school&rsquo;s spring window.',
      body: [
        { kind: 'ol', items: [
          '<b>Week 1: one guest practice test.</b> On the official practice site, so we see both the adaptive section and a performance task, and note where the child hesitates.',
          '<b>Weeks 2 to 4: number fluency for the grade.</b> Facts and fractions in grades 3 to 5, ratios and integers in grades 6 to 8, functions in grade 11, because so much of the test arrives without a calculator.',
          '<b>Weeks 5 to 7: one performance task a week.</b> Our own tasks, written in parts, with every explanation said aloud and then written down.',
          '<b>Week 8: the Desmos tool for the grade.</b> Four-function, scientific or graphing, on the same California links the test uses.',
          '<b>Week 9: test-day rules.</b> Checking each screen before moving on, the 20-minute pause rule and the locked segments.',
          '<b>Week 10: rest and one short task.</b> A light week. The test is untimed, so a calm child does better than a crammed one.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Grade by grade',
    h2: 'Where California children usually need help first',
    lede: 'Our reading of the California Common Core math standards against the two CAASPP composite areas.',
    table: { caption: 'Priorities by grade (ours, from teaching experience and the standards)', head: ['Grade', 'Concepts and Procedures first', 'Mathematical Practices next'], rows: [
      ['3', 'Multiplication and division within 100', 'Explaining area with equal rows'],
      ['4', 'Fraction equivalence and multi-digit multiplication', 'Comparing fractions with a reason'],
      ['5', 'Multiplying fractions and decimals', 'Rounding in context, as in our garden task'],
      ['6', 'Ratios, unit rates and expressions', 'Choosing the better buy and saying why'],
      ['7', 'Proportional relationships and equations', 'Spotting the error in a classmate&rsquo;s work'],
      ['8', 'Linear functions and the Pythagorean Theorem', 'Modeling a situation with a line'],
      ['11', 'Quadratics, exponentials and statistics', 'Building and checking a model on the graphing tool']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to explain one homework answer to you each week. If they can only give the number, the performance task is where points will go missing.',
      'Read last year&rsquo;s report with the scale score table on this page beside it, not just the gauge picture.'
    ] },
    right: { h3: 'For students', ps: [
      'There is no clock, so slow down on the performance task and reread the story before each part.',
      'Before you press Next, check the screen. Long pauses and finished segments can lock the way back.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Math courses for California students',
    lede: 'From third grade facts to grade 11 functions, plus a few routes beyond the state test.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Grades 3 to 5', courses: [
        { code: 'CAP / E / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'The grade 3 to 5 standards, explained aloud.' },
        { code: 'CAP / E / 02', slug: 'mental-maths-mastery-kids', title: 'Mental math', blurb: 'Fluency for the calculator-free years.' },
        { code: 'CAP / E / 03', slug: 'early-math-foundations', title: 'Early math', blurb: 'Playful number work for younger siblings.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'CAP / M / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Pre-algebra and geometry for grades 6 to 8.' },
        { code: 'CAP / M / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For grade 8 students starting Algebra 1.' },
        { code: 'CAP / M / 03', slug: 'middle-school-math-competitions-course', title: 'Math competitions', blurb: 'MATHCOUNTS and AMC 8 for keen solvers.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Grade 11 and beyond', courses: [
        { code: 'CAP / H / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra through calculus.' },
        { code: 'CAP / H / 02', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'The digital SAT, after the state test.' },
        { code: 'CAP / H / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Functions and data in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Lessons set on Pacific Time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school PT', l: 'Weekday lessons that track the class topic.' },
      { time: 'Weekends', l: 'Performance-task practice in February and March.' },
      { time: '1-on-1', l: 'One explanation at a time, rewritten until clear.' }
    ],
    cells: [
      { h3: 'Tasks in parts', p: 'A linked problem most weeks in spring.' },
      { h3: 'California standards', p: 'Taught in the order schools teach them.' },
      { h3: 'The right Desmos', p: 'The grade&rsquo;s own on-screen tool.' },
      { h3: 'Fluency first', p: 'Facts that the calculator never covers.' },
      { h3: 'Official practice late', p: 'The state&rsquo;s guest tests to finish.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or one teacher, one child.' }
    ]
  },

  projectsH2: 'What our students make',
  projectsLede: 'Some California students turn their math into small programs and games. See more on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents&rsquo; Google reviews, exactly as posted.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly fee in US dollars, no annual contract, so families can start in January and pause after their school&rsquo;s spring window ends.',
    free: ['A free first class', 'Bring last year&rsquo;s score report', 'No card needed'],
    group: ['Fifteen to twenty students', 'The same teacher each week', 'Choose your batch', 'Billed monthly'],
    one: ['A teacher for your child alone', 'Planned around the school&rsquo;s window', 'Times that suit you']
  },

  faq: {
    eyebrow: 'California families ask',
    h2: 'CAASPP math: common questions',
    items: [
      { q: 'What grades take the CAASPP math test?', a: 'Students in grades 3 through 8 and grade 11 take the Smarter Balanced math test as part of CAASPP. A small group with the most significant cognitive disabilities takes the California Alternate Assessments instead.' },
      { q: 'How long is the CAASPP math test?', a: 'It is untimed. California\'s administration manual estimates about 1 hour 45 minutes of math in grades 3 to 5, 2 hours in grades 6 to 8 and 2 hours 30 minutes in grade 11, usually split over more than one day.' },
      { q: 'Is there a calculator on the CAASPP math test?', a: 'Not in grades 3 to 5. An embedded Desmos calculator appears for calculator-allowed items from grade 6: four-function in grade 6, scientific in grades 7 and 8, and graphing in grade 11.' },
      { q: 'What does Proficient mean on the CAASPP?', a: 'Proficient is Level 3, the label that replaced Standard Met in 2025 to 2026. California says only the labels changed, so a Proficient score means the same as Standard Met did before.' },
      { q: 'What is a good CAASPP math score?', a: 'It depends on the grade, because each grade has its own scale. In grade 3 Proficient starts at 2436, in grade 6 at 2552 and in grade 11 at 2628, according to California\'s Scoring and Reporting Guide.' },
      { q: 'When is the CAASPP test in 2027?', a: 'Each district sets its own window in the state system. California says most schools test between the middle of March and the middle of May, so ask your school for its 2027 dates.' },
      { q: 'Where can I find a CAASPP math practice test?', a: 'California offers free practice and training tests through its student testing site, linked from caaspp-elpac.org, and students can sign in as a guest. The questions on this page are our own extra practice.' },
      { q: 'Can I opt my child out of the CAASPP?', a: 'California\'s manual recognises a parent or guardian exemption submitted to the test site. Talk to your school about the process and what it means for your child\'s records.' },
      { q: 'Does the grade 11 CAASPP affect college admission?', a: 'No. The manual says releasing CAASPP results will not affect a student\'s application for admission, but the Early Assessment Program lets the CSU use grade 11 results for placement after admission.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set on Pacific Time.' },
      { q: 'Are you part of the California Department of Education?', a: 'No. Modern Age Coders is an independent online school with no connection to the California Department of Education, ETS, Smarter Balanced or any California district. We quote the state\'s public documents and link to them.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for California families and for the grades the test covers.',
    items: [
      { href: '/online-math-tutor-3rd-grade', label: 'Third grade math tutoring', p: 'The first CAASPP year.' },
      { href: '/online-math-tutor-6th-grade', label: 'Sixth grade math tutoring', p: 'The first year with a calculator segment.' },
      { href: '/online-math-tutor-8th-grade', label: 'Eighth grade math tutoring', p: 'Linear functions and the last middle school test.' },
      { href: '/common-core-math-tutor', label: 'Common Core math tutoring', p: 'The standards California builds on.' },
      { href: '/coding-classes-in-california', label: 'Coding classes in California', p: 'Our page for California families.' },
      { href: '/ai-and-python-classes-for-teens-in-san-francisco-bay-area', label: 'Bay Area teen classes', p: 'Python and AI for older students.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Share your child&rsquo;s latest CAASPP report or a recent math test. In the first class the teacher works one performance-style problem with your child and shows you where the points were won and lost.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse every <a class="ag-inline-link" href="/courses">course</a>.',
    note: 'Our teachers work from India on a schedule fixed to Pacific Time, after the California school day and on weekends. A WhatsApp message is the fastest way to reach us.',
    formNote: 'The first class costs nothing, and we never ask for card details to book it.'
  },

  footer: {
    cols: [
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-3rd-grade', label: 'Grade 3 math' },
        { href: '/online-math-tutor-5th-grade', label: 'Grade 5 math' },
        { href: '/online-math-tutor-7th-grade', label: 'Grade 7 math' },
        { href: '/online-math-tutor-cost', label: 'Math tutor cost' }
      ] },
      { h4: 'California and the US', links: [
        { href: '/coding-classes-in-california', label: 'California' },
        { href: '/best-coding-classes-for-kids-in-san-jose', label: 'San Jose' },
        { href: '/coding-classes-in-united-states', label: 'Our US pages' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Untimed, adaptive, one task'
  },

  personalityCss: `
.ag-root.ag-cap .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-cap .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-cap .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cap .ag-table td.ag-num { font-variant-numeric: tabular-nums; text-align: center; }
.ag-root.ag-cap .ag-steps li { padding-bottom: 8px; }
`,

  dossier: {
    curriculumAuthority: 'California Department of Education materials, read raw 31 October 2026 on caaspp-elpac.org (Smarter Balanced ELA and math page, Assessment Fact Sheet May 2025, What Do the Scores Mean? Mathematics March 2026, Accessibility Resources Desmos section, practice and training tests page) and on ca-toms-help.ets.org (CAASPP Online Test Administration Manual 2025 to 2026: times, pause and segment rules, windows, EAP, eligibility; Scoring and Reporting Guide: What\'s New in 2025 to 2026 labels, Appendix A scale score ranges, Scale Scores chapter). cde.ca.gov returned a WAF redirect and was not used.',
    localProject: 'Our grade 5 performance-task style example: 6 raised beds at 3/4 bag each make 4 1/2 bags, packs of 4 mean 2 packs, and the critique that 4 1/2 is more than 4. Our grade 6 scale-score reading of 2560 against the 2552 Proficient threshold. Our twelve-item practice set, ten-week plan and grade ladder. Lesson family: planning a multi-part performance task and reading a scale score.',
    requiredMentions: ['Most schools test between the middle of March and the middle of May', 'Composite Area 1: Concepts and Procedures, and Composite Area 2: Mathematical Practices', 'No embedded calculator used', 'It is not possible to calculate a scale score by multiplying a student&rsquo;s percent correct', 'The release of CAASPP results will not affect a student&rsquo;s application for admission.', 'a joint collaboration of the CDE and the CSU.', '2436 to 2500', 'Standard Nearly Met', 'so 2560 is Proficient, but only 8 points above the start of that band', '6 x 3/4 = 18/4 = 4 2/4 = 4 1/2 bags'],
    sources: [
      { claim: 'Smarter Balanced Assessments for ELA and Mathematics, caaspp-elpac.org.', url: PORTAL + '/assessments/caaspp/sb-ela-math' },
      { claim: 'Smarter Balanced Summative Assessments Fact Sheet, May 2025.', url: PORTAL + '/s/docs/sbsumfactsheet.pdf' },
      { claim: 'What Do the Scores Mean? Mathematics, March 2026.', url: PORTAL + '/s/docs/scoresmeanmath.pdf' },
      { claim: 'CAASPP accessibility resources, Desmos calculators by grade.', url: PORTAL + '/resources/preparation/accessibility-resources' },
      { claim: 'CAASPP Online Test Administration Manual, General Test Administration Information.', url: OTAM + '/caaspp-otam/prep-and-planning/general-test-admin-info/' },
      { claim: 'Scoring and Reporting Guide, Appendix A scale score ranges.', url: OTAM + '/scoring-and-reporting/appendices/appendix-a/' },
      { claim: 'Scoring and Reporting Guide, What\'s New in 2025 to 2026.', url: OTAM + '/scoring-and-reporting/whats-new/' }
    ],
    rejectedClaims: [
      'cde.ca.gov pages (Smarter Balanced summative page, assessment system chart): the host answered with a WAF redirect loop on 31 October 2026; not retried, nothing quoted from it.',
      'Exact 2027 statewide CAASPP dates: California publishes no single date; each LEA sets its window in TOMS. Only the fact sheet\'s mid-March to mid-May wording is used.',
      'CAASPP scores as a gate for accelerated math placement: claimed in our research notes, not found in any CDE source read; not printed.',
      'Item counts for the California blueprint: those are Smarter Balanced consortium figures, used on our separate Smarter Balanced page, not here.',
      'Reproducing practice-test, training-test or released items: refused; linked instead.',
      'Score, level or placement promises: refused. Affiliation with CDE, ETS or Smarter Balanced: none.'
    ]
  }
};
