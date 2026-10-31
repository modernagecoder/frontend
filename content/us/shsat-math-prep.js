'use strict';
// SHSAT math prep (ag- exam door; UK and US exams cluster, row US050). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from NYC
// Public Schools; copies in keyword-research-2026-09/uk-us-gap/src/shsat-math-prep/:
//  - schools.nyc.gov/enrollment/enroll-grade-by-grade/specialized-high-schools (shs.html): "Register for the SHSAT by
//    October 30 in MySchools", "Registration will open during the day on October 6", test dates "Wednesday, November
//    18" (public middle school ending in grade 8, at the student's school), "Saturday, November 14 or Sunday, November
//    15" (6-12, K-12, charter, private, parochial, independent, homeschooled, central site), "Saturday, November 21"
//    (all grade 9); weekdays checked against the 2026 calendar in Python. "The SHSAT is the only criteria used to admit
//    students to the eight testing Specialized High Schools; no other criteria are used."; offers "in descending order
//    of SHSAT score, combined with each student's preferences"; "the Specialized High Schools do not have waitlists";
//    eligibility "A NYC resident" and "A current eighth grade student or first-time (not repeating the grade) ninth grade
//    student"; the eight school names; "The SHSAT is not used to determine admissions to LaGuardia High School."; ELL
//    extended time "360 minutes (2x standard testing time)"; DREAM and Discovery named.
//  - schools.nyc.gov/learning/testing/specialized-high-school-admissions-test (guide.html): "the sole factor";
//    "students seeking admission for September 2027 will take the test in fall 2026"; "feature 50 questions per
//    section"; "a standard test time of 180 minutes"; math content list (ratios and proportional relationships, number
//    system and expressions, equations, inequalities, statistics and probability, and geometry); "multiple-choice and
//    fill in the blank, in addition to technology-enhanced items (TEI)"; "Beginning in fall 2026, the SHSAT will move to
//    a computer-adaptive test."; "should not assume that rapidly guessing on remaining questions"; "10 unscored
//    field-test items"; scaled subtest scores "added together to produce a composite score used for rank ordering";
//    "four fully functional" online practice tests; Test View in spring 2027.
//  - NYC Guide to the SHSAT for 2027 Admissions PDF (guide-2027.pdf): "The Math section consists of 50 word problems and
//    computational questions"; Grade 8 forms "based on the New York State's learning standards through Grade 7", Grade
//    9 "through Grade 8"; formulas "will NOT be given"; tools Highlighter, Answer Eliminator, Notepad ("will refresh for
//    each item"), Pencil, Line Reader Mask, Equation Editor; calculators not permitted; scrap paper provided; Grade 8
//    retest rule and Grade 9 rule.
//  - NYC Guide to the SHSAT for 2026 Admissions PDF (handbook-fa25.pdf): "The Math section consists of 57 word problems";
//    "Use the bookmark tool to flag questions you want to return to later."
//  - nycshsat.myassessmentsupport.com practice-tests: "50 items in each section"; timed "three hours", untimed "six
//    hours"; "test items on the practice tests (and the actual test) are not translated"; four practice tests for grade
//    8, mini practice tests for grade 9; 2026 operational General Directions PDF: "100 questions across two subjects".
// Our own material, labelled on the page: the pacing table (90 minutes / 50 = 108 seconds; 100 / 50 = 120; 80 / 50 =
// 96), the 40 scored items arithmetic (50 minus 10), three worked examples (88 spiral notebooks; Maya 12; 60 + 4.5 pi),
// ten practice problems with answers checked in Python (40, 10 percent decrease, 12, 4, 5/36, 25 pi, 19, 0, 140, 52.5),
// the two plans. Lesson family: answering in order on an adaptive test. No handbook or practice-test item reproduced.
// NY Education Law 2590-h wording not verified (nysenate.gov 403), so the page cites NYC Public Schools only.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST PREP', blurb: 'SHSAT math for NYC eighth and ninth graders: the new fall 2026 adaptive format, the November dates, pacing per item and ten original practice problems.' },
  slug: 'shsat-math-prep',
  code: 'shx',
  accent: '#525C08',
  accentRationale: 'SHSAT math prep: an olive #525C08 from the US allocation table, 6.85:1 on paper #FBF8F2, kept clear of the competition reds and the coding blues',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'SHSAT math prep',
  title: 'SHSAT Math Prep and Tutoring: the 2026 Adaptive Test',
  description: 'SHSAT math prep for NYC grades 8 and 9: the fall 2026 computer-adaptive format, 50 math items, November 2026 dates and ten original practice problems.',
  ogDescription: 'The SHSAT changed for fall 2026: 50 math items, computer-adaptive, no going back. What NYC Public Schools publishes, what it means for pacing, and how to practice.',
  twitterDescription: 'SHSAT math for 2026: the adaptive format explained from the NYC guide.',
  pageName: 'SHSAT Math Prep',
  webPageDescription: 'A guide for NYC families to the math section of the Specialized High Schools Admissions Test in fall 2026, from NYC Public Schools\' own pages and guide, with pacing, worked examples and original practice problems.',
  courseDescription: 'Live online SHSAT math classes for NYC students in grades 7 to 9, in a batch of 15 to 20 or one to one, built on the grade 7 and grade 8 standards the test draws on.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'SHSAT math prep',
  navLinks: [
    { href: '#format', label: 'The format' },
    { href: '#adaptive', label: 'Adaptive' },
    { href: '#dates', label: 'Dates' },
    { href: '#pacing', label: 'Pacing' },
    { href: '#worked', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New York City &middot; Grades 8 and 9 &middot; The fall 2026 SHSAT',
  h1: 'SHSAT math prep and tutoring',
  lede: 'The Specialized High Schools Admissions Test is the one exam that decides offers to eight New York City public high schools, and its math half changed this year. From fall 2026 the test is computer-adaptive, each section has 50 items, and in math a student cannot go back once they move on. This page explains the new format from NYC Public Schools&rsquo; own guide, read on 31 October 2026, then shows how we teach the math: the grade 7 content, a pacing plan that fits an adaptive test, three worked examples and ten practice problems that we wrote ourselves.',
  secondaryCta: { href: '#adaptive', label: 'What changed in 2026' },
  wa: 'Hello Modern Age Coders, my child in New York City is preparing for the SHSAT math section. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; reasoning taught, never leaked items',
  spec: [
    ['Who sits it', 'NYC residents in grade 8, or grade 9 for the first time'],
    ['Math section', '50 items, from fall 2026'],
    ['Whole test', '180 minutes, ELA and math'],
    ['Format', 'Computer-adaptive from fall 2026'],
    ['Calculator', 'Not permitted'],
    ['Grade 8 content', 'NY standards through grade 7'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The SHSAT (Specialized High Schools Admissions Test) is run by NYC Public Schools for city residents in grade 8, or grade 9 for the first time. From fall 2026 it is computer-adaptive: 180 minutes, 50 ELA and 50 math items, no calculator. Modern Age Coders teaches SHSAT math live online, in a group batch or 1-on-1, through our SHSAT Math Prep course.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses for the SHSAT math section',
    lede: 'The SHSAT course itself, then the two school courses whose content the test samples.',
    items: [
      { course: 'shsat-math-prep-course', code: 'SHX / 01', title: 'SHSAT Math Prep', note: 'Grades 7 to 9. The adaptive format, pacing and every content strand.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'SHX / 02', title: 'Middle school mathematics', note: 'The grade 6 and 7 ratio, number and geometry work underneath.' },
      { course: 'algebra-foundations-masterclass', code: 'SHX / 03', title: 'Algebra foundations', note: 'Equations and inequalities, and the grade 8 content for ninth graders.' }
    ]
  },

  sections: [
    {
      id: 'format', tint: 'tint', eyebrow: 'The test',
      h2: 'What is on the SHSAT math section in 2026?',
      lede: 'The math section has 50 items drawn from the New York State standards, with no calculator and no formula sheet. Students choose whether to start with math or English Language Arts, and the whole test runs 180 minutes.',
      body: [
        { kind: 'table', caption: 'The fall 2026 SHSAT at a glance (NYC Public Schools SHSAT page and the NYC Guide to the SHSAT for 2027 Admissions, read 31 October 2026)', head: ['Feature', 'What NYC Public Schools publishes'], rows: [
          ['Sections', 'Two: English Language Arts and Mathematics, 50 questions each'],
          ['Standard time', '180 minutes for the whole test; the student splits it between the two sections'],
          ['Order', 'The student chooses which section to start with and must submit it before starting the other'],
          ['Math content', 'Ratios and proportional relationships, number system and expressions, equations, inequalities, statistics and probability, and geometry'],
          ['Item types', 'Multiple choice and fill in the blank, plus technology-enhanced items (TEI)'],
          ['Standards', 'Grade 8 forms: New York State standards through grade 7. Grade 9 forms: through grade 8'],
          ['Calculator', 'Not permitted; scrap paper is provided and collected'],
          ['Formulas', 'Not given on the test; students must know them'],
          ['Device', 'A DOE-provided computer at the home school or a central site']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The grade 7 point matters most',
          left: [
            'An eighth grader sitting the SHSAT in November is tested on New York State math standards through grade 7, not on the algebra they are learning that fall. In the guide&rsquo;s words, the items "will require you to apply familiar Math skills to complex, multi-step problems."',
            'So the preparation is less about new topics and more about using familiar ones in longer chains: a ratio feeding a percent, an equation built from a sentence, a shape whose area needs two formulas.'
          ],
          rightH3: 'Formulas from memory',
          right: [
            'The 2027 Admissions guide is blunt that definitions and formulas "will NOT be given in the test booklet". It names perimeter, area, volume and surface area of 2D and 3D figures as formulas to know.',
            'We keep a one-page formula list for each student and quiz it in the first five minutes of every class until recall is instant. Writing them out from memory once a week works better than rereading them.'
          ] },
        { kind: 'source', html: 'Sources: NYC Public Schools <a class="ag-inline-link" href="https://www.schools.nyc.gov/learning/testing/specialized-high-school-admissions-test" rel="noopener" target="_blank">Specialized High School Admissions Test</a> page and the NYC Guide to the SHSAT for 2027 Admissions linked from it, read 31 October 2026. Modern Age Coders is not connected with NYC Public Schools or the SHSAT.' }
      ]
    },
    {
      id: 'adaptive', tint: 'deep', eyebrow: 'New for fall 2026',
      h2: 'How does the computer-adaptive SHSAT work?',
      lede: 'From fall 2026 the test picks each next item from how the student has answered so far. A correct answer tends to bring a harder item, a wrong one an easier item, and every student still answers the same number of questions.',
      body: [
        { kind: 'p', text: 'NYC Public Schools states it plainly: "Beginning in fall 2026, the SHSAT will move to a computer-adaptive test." Each section opens with an item or passage set of average difficulty. After every response the system re-estimates the student&rsquo;s score and chooses what comes next. Because items carry an established difficulty on one shared scale, the final score depends on the pattern of right and wrong answers against item difficulty, not just a count of correct answers.' },
        { kind: 'table', mt: true, caption: 'Fall 2025 and fall 2026 SHSAT math compared (NYC Guides to the SHSAT for 2026 and for 2027 Admissions, read 31 October 2026)', head: ['Point', 'Fall 2025 test (2026 admissions guide)', 'Fall 2026 test (2027 admissions guide)'], rows: [
          ['Math items', '57 word problems and computational questions', '50 word problems and computational questions'],
          ['Item selection', 'One fixed form', 'Computer-adaptive'],
          ['Going back', 'A bookmark tool let students flag questions to return to', 'Once a student advances, the previous math item is closed'],
          ['Answering', 'Questions could be left and revisited', 'Each item must be answered before the next appears'],
          ['Field-test items', 'Not compared on this page', '10 unscored field-test items in each subject']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the change means at the desk',
          left: [
            'The old habit of skipping a hard question and coming back to it no longer works in math. Each item must be answered, and once answered it is gone, so a student needs a decision rule for the item that is not yielding: how long to try, how to eliminate, and when to commit.',
            'NYC Public Schools also warns that students "should not assume that rapidly guessing on remaining questions in order to finish is preferable to making the best attempt on each item." On an adaptive test, a run of rushed guesses at the end can pull the score estimate down.'
          ],
          rightH3: 'Scores and field-test items',
          right: [
            'Each subject includes 10 unscored field-test items, which the city says have no impact on the adaptive nature of the exam. By our arithmetic that leaves 40 scored items per subject. The guide does not say which items are field tests, so we teach students to treat every item as one that counts.',
            'Scaled scores for ELA and math are added to make a composite score, which NYC Public Schools uses to rank students for offers. That process, the city says, is unchanged from earlier years.'
          ] },
        { kind: 'p', mt: true, html: '<b>Practice on the real platform.</b> The NYC SHSAT Portal hosts the Student Readiness Tool and four full-length practice tests for students testing in grade 8 in fall 2026, two with new content this year, plus mini practice tests for ninth graders. They are free, run in a browser and include explanations. We send every student to them and never copy their items into our lessons.' },
        { kind: 'source', html: 'Sources: NYC Public Schools <a class="ag-inline-link" href="https://www.schools.nyc.gov/learning/testing/specialized-high-school-admissions-test" rel="noopener" target="_blank">SHSAT page</a> (adaptive item selection, scoring); the NYC Guides to the SHSAT for 2026 and 2027 Admissions; the <a class="ag-inline-link" href="https://nycshsat.myassessmentsupport.com/practice-tests/" rel="noopener" target="_blank">NYC SHSAT Portal practice tests</a>; all read 31 October 2026.' }
      ]
    },
    {
      id: 'dates', tint: 'tint', eyebrow: 'Dates and eligibility',
      h2: 'When is the SHSAT in 2026, and who can take it?',
      lede: 'The fall 2026 SHSAT runs on four days in November 2026, for students seeking a place in September 2027. Registration through MySchools closed on October 30.',
      body: [
        { kind: 'table', caption: 'SHSAT test dates for fall 2026 (NYC Public Schools Specialized High Schools page, read 31 October 2026; weekdays checked against the 2026 calendar)', head: ['Students', 'Where', 'Date'], rows: [
          ['Grade 8 at a public NYCPS middle school that ends in grade 8', 'Their own school, in the school day', 'Wednesday, November 18, 2026'],
          ['Grade 8 at a 6 to 12, K to 12, charter, private, parochial or independent school, or homeschooled', 'A central NYCPS site', 'Saturday, November 14 or Sunday, November 15, 2026'],
          ['Every registered grade 9 student', 'A central NYCPS site', 'Saturday, November 21, 2026; an alternate date for students who cannot test on Saturday']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Who is eligible',
          left: [
            'To register, a student must be a New York City resident and a current eighth grader or a first-time ninth grader who is not repeating the grade. Public, private and parochial school students all take the same test.',
            'The guide sets two limits that shape planning: an eighth grader cannot test again until the following school year, and a ninth grader has no further chance after grade 9. So grade 8 and grade 9 are two attempts at most.'
          ],
          rightH3: 'If your child is in grade 7 now',
          right: [
            'NYC Public Schools has not yet published dates for the fall 2027 test on the pages we read. Going by the 2026 pattern, registration opened in early October and testing ran in November, but treat that as a pattern, not a promise, and check the city&rsquo;s page next autumn.',
            'A grade 7 student has the most room: the grade 7 standards the test samples are the ones they are studying this year, so school math and SHSAT practice pull in the same direction.'
          ] },
        { kind: 'source', html: 'Source: NYC Public Schools <a class="ag-inline-link" href="https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/specialized-high-schools" rel="noopener" target="_blank">Specialized High Schools</a> enrollment page, read 31 October 2026. The test ticket shows each student&rsquo;s own date and location.' }
      ]
    },
    {
      id: 'schools', tint: 'deep', eyebrow: 'The eight schools',
      h2: 'Which schools use the SHSAT, and how are offers made?',
      lede: 'Eight of the nine Specialized High Schools admit by the SHSAT alone. NYC Public Schools calls it "the sole factor", and the ninth school, LaGuardia, admits by audition instead.',
      body: [
        { kind: 'table', caption: 'The eight testing Specialized High Schools (NYC Public Schools Specialized High Schools page, read 31 October 2026)', head: ['School'], rows: [
          ['The Bronx High School of Science'],
          ['The Brooklyn Latin School'],
          ['Brooklyn Technical High School'],
          ['High School for Mathematics, Science and Engineering at City College of New York'],
          ['High School of American Studies at Lehman College'],
          ['Queens High School for the Sciences at York College'],
          ['Staten Island Technical High School'],
          ['Stuyvesant High School']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How offers work',
          left: [
            'When registering, the student ranks the testing schools in order of preference. The city then works down the list of scores from the top: each student is offered their highest-ranked school that still has seats. In its own words, "The SHSAT is the only criteria used to admit students to the eight testing Specialized High Schools; no other criteria are used."',
            'Two consequences follow. A student is never considered for a school left off their list, and the Specialized High Schools do not have waitlists.'
          ],
          rightH3: 'What we will and will not say',
          right: [
            'No tutor can promise a place, because offers depend on every other student&rsquo;s score and on seats. We teach the math and the test habits and report honestly on progress; we make no prediction of offers.',
            'NYC Public Schools also runs the DREAM program, which prepares eligible public school students for the SHSAT, and Discovery, a summer program for some students who score below the cutoff. Ask your school counselor about both.'
          ] },
        { kind: 'source', html: 'Source: NYC Public Schools <a class="ag-inline-link" href="https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/specialized-high-schools" rel="noopener" target="_blank">Specialized High Schools</a> page, read 31 October 2026. We are not connected with any of these schools.' }
      ]
    },
    {
      id: 'pacing', tint: 'tint', eyebrow: 'Pacing',
      h2: 'How much time should each SHSAT math item get?',
      lede: 'With 180 minutes for 100 items, an even split gives 90 minutes for the 50 math items, about 108 seconds each. The arithmetic is ours; the split is the student&rsquo;s choice on the day.',
      body: [
        { kind: 'table', caption: 'Time per math item under three splits of the 180 minutes (our calculation from the published format)', head: ['Split, ELA then math', 'Math minutes', 'Average per math item'], numCols: [1, 2], rows: [
          ['100 and 80', '80', '96 seconds (4,800 / 50)'],
          ['90 and 90', '90', '108 seconds (5,400 / 50)'],
          ['80 and 100', '100', '120 seconds (6,000 / 50)']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Pick the split in practice, not on the day.</b> Take one full timed practice test on the NYC portal with each order, math first and ELA first, and keep the order that leaves more time in the section that is weaker.',
          '<b>Set a checkpoint.</b> At the 90 second mark on any math item, the student either has a plan or switches to elimination. This replaces the old skip-and-return habit, which the adaptive format removes.',
          '<b>Eliminate with the tool.</b> The Answer Eliminator crosses out options. Removing two impossible choices often makes a hard item a fair guess.',
          '<b>Commit and move.</b> Because the item cannot be revisited, the student writes nothing they plan to check later; they check before pressing next.',
          '<b>Watch the half-way mark.</b> At item 25 the clock should show roughly half the math time used. More than that means speeding up on the easy steps, not rushing the hard ones.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why rushing the end is a poor bet',
          left: [
            'On a fixed paper test, a quick guess on the last five questions cost nothing. On an adaptive test the city advises against it, because every response feeds the score estimate. We teach students to finish with steady, real attempts, even if one or two are educated guesses.',
            'The practical fix is earlier: spending forty seconds less on each of the first ten items creates more than six minutes for the end.'
          ],
          rightH3: 'Notepad or scrap paper',
          right: [
            'The digital notepad refreshes for each item, so working left on it disappears when the student advances. Scrap paper is provided and collected afterwards.',
            'Many students find scrap paper quicker for math, because handwriting fractions and diagrams beats typing them. We practice both in class and let each student choose.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'deep', eyebrow: 'Worked examples',
      h2: 'Three worked SHSAT-style math examples',
      lede: 'These are our own problems, written for this page at the grade 7 level the test draws on. They are not SHSAT items and are not taken from any NYC guide or practice test.',
      body: [
        { kind: 'p', html: '<b>Example 1: a ratio feeding a percent.</b> In September a school store sold 120 notebooks, spiral and bound in the ratio 7 to 5. In October total sales rose by 15 percent while bound sales stayed the same. How many spiral notebooks were sold in October? Reasoning: 7 + 5 = 12 parts, so one part is 120 / 12 = 10, giving 70 spiral and 50 bound in September. October&rsquo;s total is 120 x 1.15 = 138. Bound stays at 50, so spiral is 138 minus 50 = 88. The trap is applying 15 percent to the spiral count alone, which gives 80.5 and is not even a whole number.' },
        { kind: 'p', html: '<b>Example 2: an equation from a sentence (fill in the blank).</b> Maya is 4 times as old as her brother. In 6 years she will be twice as old as he is then. How old is Maya now? Let b be the brother&rsquo;s age, so Maya is 4b. In 6 years: 4b + 6 = 2(b + 6), so 4b + 6 = 2b + 12, 2b = 6 and b = 3. Maya is 12. Check: in 6 years they are 18 and 9, and 18 is twice 9. A fill-in-the-blank item gives no choices to test, so the check is the student&rsquo;s only safety net.' },
        { kind: 'p', html: '<b>Example 3: area with no formula sheet.</b> A garden is a 10 m by 6 m rectangle with a semicircle on one 6 m side. What is its total area, in terms of pi? The rectangle is 10 x 6 = 60 square meters. The semicircle has diameter 6, so radius 3, and area half of pi x 3 x 3 = 4.5 pi. The total is 60 + 4.5 pi square meters, about 74.1. The two formulas, rectangle and circle, must come from memory, which is why we drill them.' },
        { kind: 'two', mt: true,
          leftH3: 'What the three examples share',
          left: [
            'Each one is two or three short steps chained together, which is what the NYC guide means by "complex, multi-step problems". None needs content beyond grade 7.',
            'In every case the mistake that loses the item happens at the join between steps: the wrong base for a percent, a forgotten 6 on both sides, a diameter used as a radius.'
          ],
          rightH3: 'How we turn them into lessons',
          right: [
            'The student first says the plan out loud before writing anything: "parts, then the new total, then subtract." Saying the plan is what makes the chain visible.',
            'Then we change one number and solve again. If the method survives a new ratio or a new length, the student owns the idea rather than the answer.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'tint', eyebrow: 'Practice set',
      h2: 'Ten original SHSAT math practice problems',
      lede: 'Written by our teachers across the six content strands the city lists. No calculator. Aim for about 108 seconds each, the even-split pace from the table above.',
      body: [
        { kind: 'ol', items: [
          '<b>Paint is mixed blue to white in the ratio 5 to 3. How many liters of blue are needed to use 24 liters of white?</b>',
          '<b>A price rises by 20 percent and then falls by 25 percent. What is the overall percent change?</b>',
          '<b>Solve 3(2x minus 5) = 4x + 9.</b>',
          '<b>What is the greatest integer n for which negative 4n + 7 is greater than negative 13?</b>',
          '<b>Two fair number cubes are rolled. What is the probability that the sum is 8?</b>',
          '<b>A circle has circumference 10 pi centimeters. What is its area?</b>',
          '<b>The mean of six numbers is 14. One number is removed and the mean of the rest is 13. Which number was removed?</b>',
          '<b>Evaluate (negative 3/4) divided by (3/8), then subtract negative 2.</b>',
          '<b>Two angles are supplementary. The larger is 20 less than 4 times the smaller. What is the larger angle?</b>',
          '<b>On a map, 1 inch stands for 15 miles. How many miles do 3.5 inches represent?</b>'
        ] },
        { kind: 'table', mt: true, caption: 'Answers and the idea behind each (ours; every answer checked in Python)', head: ['Problem', 'Answer', 'Idea'], rows: [
          ['1', '40 liters', 'Each part is 24 / 3 = 8 liters; blue is 5 x 8'],
          ['2', 'A 10 percent decrease', '1.2 x 0.75 = 0.9; percents do not simply cancel'],
          ['3', 'x = 12', '6x minus 15 = 4x + 9, so 2x = 24'],
          ['4', '4', 'Negative 4n is greater than negative 20, so n is less than 5; dividing by a negative flips the sign'],
          ['5', '5/36', 'Five pairs give 8: (2,6), (3,5), (4,4), (5,3), (6,2)'],
          ['6', '25 pi square centimeters', 'Circumference 10 pi means radius 5'],
          ['7', '19', 'Totals 6 x 14 = 84 and 5 x 13 = 65; the difference is 19'],
          ['8', '0', 'Negative 3/4 times 8/3 is negative 2; negative 2 minus negative 2 is 0'],
          ['9', '140 degrees', 'x + (4x minus 20) = 180 gives x = 40, the smaller angle'],
          ['10', '52.5 miles', '3.5 x 15, a scale factor applied once']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where students slip',
          left: [
            'Problem 2 catches many students, who answer "5 percent down" by subtracting 20 from 25. Problem 4 catches anyone who forgets that dividing an inequality by a negative number reverses it.',
            'Problem 9 asks for the larger angle. Solving correctly and then reporting 40 is the most common way to lose an item that was really solved.'
          ],
          rightH3: 'Then use the official tests',
          right: [
            'Once these feel comfortable, the next step is a full timed practice test on the NYC SHSAT Portal, in the real platform with the real tools. Afterwards, the summary report and the Explanations Appendix show which items were missed.',
            'We go through those missed items in class by topic, not one by one, and set our own fresh problems on each weak topic.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Two plans',
      h2: 'An SHSAT math study plan for grade 7 and for grade 8',
      lede: 'Our plans, built on the published dates. One assumes a grade 8 student with the November 2026 test days away; the other a grade 7 student with a year in hand.',
      body: [
        { kind: 'table', caption: 'Two weeks to the November 2026 test (our plan for a grade 8 student)', head: ['Days', 'Focus'], rows: [
          ['1 to 3', 'One full timed practice test on the NYC portal; list every missed item by strand'],
          ['4 to 7', 'The two weakest strands only, with short untimed sets and formula recall daily'],
          ['8 to 10', 'A second timed practice test in the other section order; settle the split'],
          ['11 to 12', 'Light review of the formula list and the 90 second checkpoint habit'],
          ['Test eve', 'No new material; check the test ticket, the date and the site']
        ] },
        { kind: 'table', mt: true, caption: 'A year to the fall 2027 test (our plan for a grade 7 student, one live class a week)', head: ['Months', 'Focus'], rows: [
          ['November 2026 to January 2027', 'Ratios, proportions and percent; number system and expressions'],
          ['February to April 2027', 'Equations and inequalities; statistics and probability'],
          ['May to June 2027', 'Geometry: area, volume, surface area and angles, with formulas memorized'],
          ['July to August 2027', 'Mixed multi-step sets; first timed practice test on the portal'],
          ['September 2027 onward', 'Adaptive pacing drills, more timed tests, and registration when the city opens it']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 7', p: 'Content first, pacing later. The year plan above.' },
          { h3: 'Grade 8', p: 'Practice tests early in the fall, then the weakest strands.' },
          { h3: 'Grade 9', p: 'One last attempt, with grade 8 content now included.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four signs a student is ready for SHSAT math',
    lede: 'Good grades in math class are the start. The SHSAT adds speed, memory and a no-going-back rule.',
    table: { caption: 'From school math to SHSAT math (our readiness steps)', head: ['Step', 'What it looks like'], rows: [
      ['1. Secure', 'Grade 7 ratio, equation and geometry problems right, given time'],
      ['2. Remembered', 'Every area, volume and angle formula written from memory'],
      ['3. Chained', 'Two and three step problems planned before writing'],
      ['4. Decisive', 'Commits to an answer inside about two minutes and moves on']
    ] },
    left: { h3: 'For parents', ps: [
      'Steps 3 and 4 are rarely part of a school math class. They are what SHSAT practice adds, and they show up most clearly on a timed practice test.',
      'Ask to see the summary report after each practice test. A list of missed strands is far more useful than a single raw number.'
    ] },
    right: { h3: 'For students', ps: [
      'Before pressing next, ask one question: did I answer what was asked? It saves more items than any trick.',
      'Keep a notebook of every item you missed and the idea behind it. Reread it the week before the test.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around the SHSAT years',
    lede: 'Live online classes with the same teacher each week, as a batch or one to one.',
    bands: [
      { num: 'I', h3: 'The test years', sub: 'Grades 7 to 9', courses: [
        { code: 'SHX / TST / 01', slug: 'shsat-math-prep-course', title: 'SHSAT Math Prep', blurb: 'The adaptive test, strand by strand.' },
        { code: 'SHX / TST / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'Grade 6 to 8 content, deeply.' },
        { code: 'SHX / TST / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations before Algebra 1.' }
      ] },
      { num: 'II', h3: 'Stretch and speed', sub: 'For students who want more', courses: [
        { code: 'SHX / STR / 01', slug: 'middle-school-math-competitions-course', title: 'Middle school competitions', blurb: 'MATHCOUNTS and AMC 8 problems.' },
        { code: 'SHX / STR / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'A strand to strengthen.' },
        { code: 'SHX / STR / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Speed calculation', blurb: 'Mental arithmetic without a calculator.' }
      ] },
      { num: 'III', h3: 'After grade 9', sub: 'High school and beyond', courses: [
        { code: 'SHX / HS / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra to calculus.' },
        { code: 'SHX / HS / 02', slug: 'sat-math-prep-course', title: 'SAT math', blurb: 'The next big test.' },
        { code: 'SHX / HS / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Python for ages 10 to 15.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live SHSAT math classes from New York evenings to weekend mornings',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, Eastern Time.' },
      { time: 'Weekends', l: 'A good slot for a three-hour practice test.' },
      { time: '1-on-1', l: 'Paced to one student&rsquo;s weakest strand.' }
    ],
    cells: [
      { h3: 'Strand map', p: 'Six content strands tracked separately.' },
      { h3: 'Formula recall', p: 'Five minutes of memory work each class.' },
      { h3: 'One-way drills', p: 'Sets you cannot go back on, like the real test.' },
      { h3: 'Portal reviews', p: 'Official practice tests reviewed together.' },
      { h3: 'All five boroughs', p: 'Live online; no commute across the city.' },
      { h3: 'Group size', p: 'A batch of 15 to 20, or a single student.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Our learners also build with math in code. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents&rsquo; Google reviews, exactly as they were posted.',

  fees: {
    h2: 'Fees',
    lede: 'The SHSAT itself is run by NYC Public Schools; our fee covers only the classes. We bill month by month, so a family can stop the week after the November test.',
    free: ['A free first class', 'A short no-calculator diagnostic', 'No card details'],
    group: ['A batch of 15 to 20', 'The same teacher weekly', 'Choose your batch', 'Monthly billing'],
    one: ['A private math teacher', 'Lessons mapped to the test date', 'Problems aimed at one student']
  },

  faq: {
    eyebrow: 'Questions from NYC parents',
    h2: 'SHSAT math: what families ask',
    items: [
      { q: 'How many math questions are on the SHSAT in 2026?', a: 'From fall 2026 the math section has 50 items, the same as ELA, within 180 minutes for the whole test. Ten items in each subject are unscored field-test items, according to NYC Public Schools.' },
      { q: 'Is the SHSAT computer-adaptive now?', a: 'Yes. NYC Public Schools says that beginning in fall 2026 the SHSAT is a computer-adaptive test, which chooses each item based on earlier answers. Every student still answers the same number of questions.' },
      { q: 'Can you go back to a question on the SHSAT math section?', a: 'No. In the math section a student must answer each item before moving on and cannot return to it after advancing. That is a change from the fall 2025 test, which had a bookmark tool.' },
      { q: 'Can you use a calculator on the SHSAT?', a: 'No. Calculators are not permitted, and a watch is allowed only if it is silent and is not a calculator. Scrap paper is provided for math working and collected at the end.' },
      { q: 'When is the SHSAT in 2026?', a: 'NYC Public Schools lists Wednesday, November 18, 2026 for eighth graders at public middle schools ending in grade 8, Saturday, November 14 or Sunday, November 15 for other eighth graders, and Saturday, November 21 for ninth graders. The test ticket confirms each student\'s date.' },
      { q: 'What math is on the SHSAT for eighth graders?', a: 'Grade 8 forms are based on New York State math standards through grade 7: ratios and proportional relationships, the number system and expressions, equations, inequalities, statistics and probability, and geometry. Grade 9 forms go through grade 8.' },
      { q: 'Is the SHSAT the only thing that counts for the specialized high schools?', a: 'For the eight testing schools, yes. NYC Public Schools says the SHSAT is the only criteria used and that no other criteria are used; LaGuardia High School admits by audition instead.' },
      { q: 'Do you use real SHSAT questions in class?', a: 'No. We write our own problems at the right level and send students to the free official practice tests on the NYC SHSAT Portal. We never copy items from the NYC guides or practice tests.' },
      { q: 'Can you guarantee an offer to Stuyvesant or Brooklyn Tech?', a: 'No one honestly can. Offers depend on every student\'s score and the seats at each school. We teach the math and the habits the adaptive test rewards, and we report progress plainly.' },
      { q: 'What days and times are SHSAT classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with NYC Public Schools?', a: 'No. Modern Age Coders is an independent online school with no connection to NYC Public Schools, the SHSAT or any specialized high school. Families register for the test through MySchools themselves.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for NYC middle schoolers',
    lede: 'Other entrance tests, grade-level help and contests that build the same skills.',
    items: [
      { href: '/isee-ssat-math-prep', label: 'ISEE and SSAT math', p: 'The independent school route, compared.' },
      { href: '/online-math-tutor-7th-grade', label: '7th grade math tutor', p: 'The year the SHSAT content comes from.' },
      { href: '/online-math-tutor-8th-grade', label: '8th grade math tutor', p: 'For the grade 9 SHSAT form.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'Equations and inequalities, one to one.' },
      { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring', p: 'Area, volume and angle work in depth.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'MATHCOUNTS and friends, for speed.' },
      { href: '/best-coding-classes-for-kids-in-new-york-city', label: 'Coding classes in NYC', p: 'For the student who also wants to build.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child&rsquo;s grade and whether the test is this November or next year. The teacher runs a short no-calculator diagnostic across the six strands and shows you the two to work on first.',
    readFirst: 'For how a class actually runs, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse the <a class="ag-inline-link" href="/courses">full course list</a>.',
    note: 'Classes are live video from our teachers in India, timed for New York afternoons and weekends. Most NYC families reach us fastest on WhatsApp.',
    formNote: 'The first class is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Entrance tests', links: [
        { href: '/isee-ssat-math-prep', label: 'ISEE and SSAT math' },
        { href: '/math-competitions-for-middle-school-students', label: 'Middle school competitions' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation' },
        { href: '/math-olympiad-amc-tutoring', label: 'AMC and olympiad tutoring' }
      ] },
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-6th-grade', label: '6th grade math tutor' },
        { href: '/online-math-tutor-7th-grade', label: '7th grade math tutor' },
        { href: '/online-math-tutor-8th-grade', label: '8th grade math tutor' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Fifty items, one way only'
  },

  personalityCss: `
.ag-root.ag-shx .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-shx .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-shx .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-shx .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-shx .ag-steps li { line-height: 1.6; }
.ag-root.ag-shx .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'NYC Public Schools, read raw on 31 October 2026: the Specialized High Schools enrollment page (registration October 6 to October 30, test dates November 14, 15, 18 and 21 2026, eligibility, the eight testing schools, offers by score and preference, no waitlists, only criteria, LaGuardia by audition, ELL extended time, DREAM and Discovery); the SHSAT testing page (50 questions per section, 180 minutes, math content strands, item types, computer-adaptive from fall 2026, scoring, 10 unscored field-test items, composite score, practice tests, Test View); the NYC Guides to the SHSAT for 2026 and 2027 Admissions (57 then 50 math items, grade 7 and grade 8 standards, no formulas, digital tools, no calculators, bookmark tool in 2025, retest limits); the NYC SHSAT Portal practice tests page.',
    localProject: 'Our pacing table (96, 108 and 120 seconds per math item), our arithmetic of 40 scored items, three original worked examples (88 spiral notebooks, Maya is 12, 60 + 4.5 pi square meters), ten original practice problems with answers checked in Python, a two-week and a one-year plan. Lesson family: answering in order on an adaptive test.',
    requiredMentions: ['Beginning in fall 2026, the SHSAT will move to a computer-adaptive test.', 'The SHSAT is the only criteria used to admit students to the eight testing Specialized High Schools; no other criteria are used.', '57 word problems and computational questions', '10 unscored field-test items in each subject', 'Wednesday, November 18, 2026', 'Saturday, November 21, 2026', 'will NOT be given in the test booklet', 'should not assume that rapidly guessing on remaining questions', '108 seconds (5,400 / 50)', '60 + 4.5 pi square meters', 'the Specialized High Schools do not have waitlists', 'Queens High School for the Sciences at York College'],
    sources: [
      { claim: 'SHSAT 2026 registration window, test dates, eligibility, eight testing schools, offer process and only-criteria statement.', url: 'https://www.schools.nyc.gov/enrollment/enroll-grade-by-grade/specialized-high-schools' },
      { claim: 'Fall 2026 SHSAT format: 50 items per section, 180 minutes, math content, item types, computer-adaptive selection, scoring and field-test items.', url: 'https://www.schools.nyc.gov/learning/testing/specialized-high-school-admissions-test' },
      { claim: 'NYC Guide to the SHSAT for 2027 Admissions: 50 math items, standards through grade 7 and grade 8, formulas not given, digital tools, calculators not permitted, retest limits.', url: 'https://www.schools.nyc.gov/learning/testing/how-to-prepare-for-the-specialized-high-schools-admissions-test1' },
      { claim: 'NYC SHSAT Portal practice tests: four grade 8 practice tests, grade 9 mini tests, 50 items per section, timed and untimed versions.', url: 'https://nycshsat.myassessmentsupport.com/practice-tests/' }
    ],
    rejectedClaims: [
      'The New York State law (Education Law 2590-h, the Hecht-Calandra Act) that sets the SHSAT as the sole criterion: nysenate.gov returned HTTP 403 on 31 October 2026; not circumvented. The page quotes NYC Public Schools only.',
      'Lowest qualifying scores for 2026 admissions and any offer or demographic statistics: published by NYC Public Schools but left off the page; no score targets or offer predictions.',
      'Fall 2027 SHSAT dates: not published on the pages read; the page says so and gives only the 2026 pattern.',
      'Sample questions and practice-test items from the NYC guides and portal: not reproduced; all problems are original and labelled ours.',
      'Score scale range: the pages read describe scaled and composite scores but no range was quoted; none printed.',
      'Whether fall 2025 had field-test items: not compared on the page.',
      'Any affiliation with NYC Public Schools or any specialized high school: none, stated on the page.'
    ]
  }
};
