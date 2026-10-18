'use strict';
// AP Computer Science A score calculator (ag- AP door; US cluster Phase 3, row 46).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md, plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Sources, College Board only, fetched raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/ap-computer-science-a-score-calculator/):
//  - apcentral.collegeboard.org/courses/ap-computer-science-a/exam: "This is a fully digital exam."; Section I
//    "42 Questions | 1 Hour 30 Minutes | 55% of Exam Score"; Section II "4 Questions | 1 Hour 30 Minutes | 45% of Exam
//    Score"; the four FRQ types; exam date "Wed, May 12, 2027 | Session 2"; Java Quick Reference included in Bluebook.
//  - AP CSA Course and Exam Description (2025, V.1), exam information page: Question 1 "(7 points)", Question 2
//    "(7 points)", Question 3 "(5 points)", Question 4 "(6 points)"; Q1 Part A (4 points), Part B (3 points);
//    multiple-choice unit weightings 15 to 25, 25 to 35, 10 to 18, 30 to 40 percent; raw score "converted into a
//    composite AP score on a 1" to 5 scale; criterion-referenced, not graded on a curve (text has no spaces in the
//    PDF, so paraphrased, not quoted).
//  - ap26-sg-computer-science-a.pdf (2026 Scoring Guidelines): algorithm criteria "each of which is worth one point";
//    "Algorithm points are NOT earned when:" list incl. "A value is returned from a void method or constructor.";
//    "Errors to Ignore" list incl. "Spelling/case discrepancies where there is no ambiguity".
//  - apcentral past-exam-questions page: older questions "do not completely align with the current AP CSA Exam".
//  - ap25-computer-science-a-scoring-statistics.pdf: 2025 FRQ means 4.53, 5.24, 4.11, 3.95, each of 9 possible
//    points (the pre-2026 format). ap26 scoring statistics: HTTP 404 on 17 October 2026 (not yet posted).
//  - apstudents.collegeboard.org/about-ap-scores/ap-score-scale-table: 5 "Extremely well qualified", 4 "Very well
//    qualified", 3 "Qualified", 2 "Possibly qualified", 1 "No recommendation".
// Our own material, labelled on the page: the composite method (MC / 42 x 55 + FRQ / 25 x 45), the 25-point FRQ
// total (our addition of 7 + 7 + 5 + 6), per-point values (55 / 42 = 1.31, 45 / 25 = 1.8), per-minute values
// (55 / 90 = 0.61, 45 / 90 = 0.50), three worked students, the planning targets, and the Java program (compiled and
// run by us with javac 22: prints "Composite: 68.1 of 100").
// Lesson family: weighted averages (turning two scales into one).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const ESTIMATE = `// Our estimate, not a College Board conversion
public class CsaEstimate {
  // published weights: Section I 55%, Section II 45%
  public static double composite(int mcRight, int[] frq) {
    int frqPoints = 0;
    for (int p : frq) {
      frqPoints += p;
    }
    double partOne = mcRight / 42.0 * 55;
    double partTwo = frqPoints / 25.0 * 45;
    return partOne + partTwo;
  }

  public static void main(String[] args) {
    int[] frq = {5, 4, 3, 4};  // out of 7, 7, 5, 6
    double c = composite(30, frq);
    System.out.printf("Composite: %.1f of 100%n", c);
  }
}`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'AP CSA SCORE', blurb: 'How the AP Computer Science A exam is weighted, and an honest, labelled method to turn practice results into a composite.' },
  slug: 'ap-computer-science-a-score-calculator',
  code: 'acss',
  accent: '#39610F',
  accentRationale: 'AP CSA score calculator, US: a deep moss green #39610F from the US allocation table, muted enough for long tables and clear of the other AP door accents',
  pageType: 'market',
  market: US,
  routeLabel: 'AP CSA score calculator',
  title: 'AP Computer Science A Score Calculator: A Labelled Estimate',
  description: 'AP Computer Science A score calculator: the published 55/45 weighting, FRQ points 7, 7, 5 and 6, a worked composite in Java, and why no official raw cutoff exists.',
  ogDescription: 'Turn a practice AP CSA result into a composite out of 100 using the published weights. A worked example, a Java program you can run, and plain limits on what it can predict.',
  twitterDescription: 'An honest AP CSA score estimate: published weights, FRQ points and a worked composite.',
  pageName: 'AP Computer Science A Score Calculator',
  webPageDescription: 'A method for US high school students to estimate an AP Computer Science A result from practice work, built only on the section weights and point values College Board publishes.',
  courseDescription: 'Live online AP Computer Science A preparation in Java for US high school students, with timed practice marked against the published scoring rules, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'AP CSA score calculator',
  navLinks: [
    { href: '#structure', label: 'Weights' },
    { href: '#method', label: 'The method' },
    { href: '#java', label: 'In Java' },
    { href: '#frq', label: 'FRQ points' },
    { href: '#limits', label: 'Limits' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 9 to 12 &middot; AP Computer Science A',
  h1: 'AP Computer Science A score calculator',
  lede: 'Students who search for an AP CSA score calculator usually have a practice test in front of them and one question: is this a 3, a 4 or a 5? College Board publishes enough to answer part of that honestly. It tells you how many questions each section has, what each section is worth and how many points each free-response question carries. It does not publish the raw score you need for each AP score. So this page does two things, and keeps them apart: it builds a composite out of 100 from the published weights, which is exact arithmetic, and then it explains what that composite can and cannot tell you about May.',
  secondaryCta: { href: '#method', label: 'See the method' },
  wa: 'Hello Modern Age Coders, my teen in the US is taking AP Computer Science A and wants timed practice marked properly. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Java, timed and marked',
  spec: [
    ['Exam', 'AP Computer Science A'],
    ['Next sitting', 'Wednesday, May 12, 2027'],
    ['Section I', '42 multiple choice, 55%'],
    ['Section II', '4 free response, 45%'],
    ['Length', '3 hours, in Bluebook'],
    ['Our method', 'A composite out of 100'],
    ['Teaching', 'Group batch or 1-on-1'],
    ['First step', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'An AP Computer Science A estimate starts from the published weights: 42 multiple-choice questions are 55% of the score and four free-response questions, worth 7, 7, 5 and 6 points, are 45%. Our composite is MC right / 42 &times; 55 plus FRQ points / 25 &times; 45. College Board does not publish the raw cutoffs for a 3, 4 or 5, so any score from a calculator is an estimate.',

  picks: {
    eyebrow: 'Practice that is marked',
    h2: 'Three courses for a student who wants a reliable number',
    lede: 'A calculator is only as good as the marking behind it. In these courses a teacher marks free-response code the way the published guidelines describe.',
    items: [
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'ACSS / 01', title: 'AP Computer Science A exam prep', note: 'Grades 10 to 12. All four units, timed sections, marked FRQs.' },
      { course: 'java-programming-masterclass-for-teens', code: 'ACSS / 02', title: 'Java for teens', note: 'Ages 13 to 18. The Java behind every AP question, from the start.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'ACSS / 03', title: 'Problem solving for teens', note: 'Ages 13 to 18. Arrays, lists and algorithms after AP.' }
    ]
  },

  sections: [
    {
      id: 'structure', tint: 'tint', eyebrow: 'What College Board publishes',
      h2: 'The structure every AP CSA estimate has to start from',
      lede: 'Any honest calculator rests on the numbers below. Each one comes from the AP Computer Science A exam page on AP Central or the 2025 Course and Exam Description, both read on 17 October 2026.',
      body: [
        { kind: 'table', caption: 'AP Computer Science A exam format, from AP Central and the Course and Exam Description (read 17 October 2026)', head: ['Part', 'Questions', 'Time', 'Share of the score', 'Points'], rows: [
          ['Section I: multiple choice', '42', '90 minutes', '55%', 'One per question'],
          ['Section II, Question 1: Methods and Control Structures', '1', 'Shared 90 minutes', 'Part of 45%', '7 (Part A 4, Part B 3)'],
          ['Section II, Question 2: Class Design', '1', 'Shared 90 minutes', 'Part of 45%', '7'],
          ['Section II, Question 3: Data Analysis with ArrayList', '1', 'Shared 90 minutes', 'Part of 45%', '5'],
          ['Section II, Question 4: 2D Array', '1', 'Shared 90 minutes', 'Part of 45%', '6']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table',
          left: [
            'The free-response questions carry 7, 7, 5 and 6 points, which is 25 points in all by our own addition. So the 45% of Section II is spread over 25 rubric points, while the 55% of Section I is spread over 42 questions.',
            'The whole exam runs in the Bluebook app. AP Central says plainly: "This is a fully digital exam." Responses are submitted automatically at the end, and the Java Quick Reference is built into Bluebook.'
          ],
          rightH3: 'What the multiple choice covers',
          right: [
            'The Course and Exam Description gives approximate multiple-choice weights by unit: Unit 1, Using Objects and Methods, 15 to 25 percent; Unit 2, Selection and Iteration, 25 to 35 percent; Unit 3, Class Creation, 10 to 18 percent; Unit 4, Data Collections, 30 to 40 percent.',
            'Those are ranges for Section I only. They are useful for choosing what to revise, and they are a warning against treating Unit 3 as the heart of the exam just because it feels the hardest in class.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: the <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam" rel="noopener" target="_blank">AP Computer Science A exam page</a> and the <a class="ag-inline-link" href="https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf" rel="noopener" target="_blank">AP Computer Science A Course and Exam Description</a> on AP Central. AP Central lists the next exam as Wednesday, May 12, 2027, Session 2. We are not connected with College Board.' }
      ]
    },
    {
      id: 'method', tint: 'deep', eyebrow: 'Our estimate method',
      h2: 'Turning a practice test into one number out of 100',
      lede: 'This is our method, and every step is labelled. The first three steps are exact arithmetic on published weights. Only the last step is a judgement, and it is ours, not College Board&rsquo;s.',
      body: [
        { kind: 'ol', items: [
          '<b>Use a full-length, current-format practice.</b> Forty-two multiple-choice questions in 90 minutes and four free-response questions in 90 minutes, without notes beyond the Java Quick Reference. A half test gives you half an answer.',
          '<b>Count Section I.</b> Write down how many of the 42 you got right. There is nothing to subtract for wrong answers in this method; we treat a blank and a wrong answer the same.',
          '<b>Mark Section II against a rubric.</b> Give each free-response answer a score out of its own maximum: 7, 7, 5 and 6. Mark it the way the scoring guidelines describe, or have a teacher do it. Self-marking is where most estimates go wrong.',
          '<b>Weight both parts.</b> Multiply the Section I count by 55 / 42 and the Section II points by 45 / 25, then add. The result is a composite out of 100 that respects the published 55 and 45 split.',
          '<b>Read the composite as a range, not a score.</b> Compare it with the planning targets further down this page, which we set for our own students, and treat the result as a direction of travel rather than a forecast.'
        ] },
        { kind: 'table', mt: true, caption: 'What each piece is worth in our composite (our arithmetic on the published weights)', head: ['Piece', 'Calculation', 'Composite points'], numCols: [2], rows: [
          ['One multiple-choice question', '55 / 42', '1.31'],
          ['One free-response rubric point', '45 / 25 = 1.8', '1.80'],
          ['All of Section I', '42 &times; 1.31', '55'],
          ['All of Section II', '25 &times; 1.8', '45'],
          ['One minute of Section I', '55 / 90', '0.61'],
          ['One minute of Section II', '45 / 90', '0.50']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'One rubric point beats one question',
          left: [
            'A single free-response point moves the composite by 1.8, while a single multiple-choice question moves it by about 1.31. So one extra rubric point is worth roughly 1.4 extra correct answers in Section I.',
            'That is why students who leave a free-response part blank lose more than they think. A partly correct method that earns 2 of 4 points on Part A of Question 1 is worth 3.6 composite points, almost three multiple-choice questions.'
          ],
          rightH3: 'But the clock favors Section I',
          right: [
            'Measured per minute, the picture flips. A minute in Section I is worth about 0.61 composite points a minute, against 0.50 in Section II, because 55% of the score fits into the same 90 minutes as 45%.',
            'In practice this means two habits: never leave a multiple-choice answer blank, and on the free response write something for every part, because the first points on a question are usually the cheapest to earn.'
          ] }
      ]
    },
    {
      id: 'worked', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Three practice results, worked through the same way',
      lede: 'These three students are invented for the example. Their numbers show how the method behaves when the two sections tell different stories.',
      body: [
        { kind: 'table', caption: 'Three worked composites (ours; invented practice results, not real students)', head: ['Student', 'Section I right of 42', 'FRQ points (Q1, Q2, Q3, Q4)', 'Composite'], numCols: [3], rows: [
          ['A: strong reader, weak writer', '36', '3, 3, 2, 2 = 10 of 25', '47.1 + 18.0 = 65.1'],
          ['B: balanced', '30', '5, 4, 3, 4 = 16 of 25', '39.3 + 28.8 = 68.1'],
          ['C: strong writer, rushed reader', '25', '6, 6, 4, 5 = 21 of 25', '32.7 + 37.8 = 70.5']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the three results show',
          left: [
            'Student A answers six more multiple-choice questions than Student B and still finishes below B. Student C gets eleven fewer questions right than A and finishes highest, because 21 of 25 rubric points is a lot of weight.',
            'The lesson for revision is not that one section matters more. It is that the two sections reward different skills: Section I rewards tracing code someone else wrote, Section II rewards writing your own, and a student who only practises one of them leaves points behind.'
          ],
          rightH3: 'Student B, line by line',
          right: [
            'Section I: 30 correct, times 55 / 42, gives 39.29. Section II: 5 + 4 + 3 + 4 = 16 rubric points, times 45 / 25, gives 28.8.',
            'Add the two and round once at the end: 68.1 of 100. Rounding each part first and then adding can drift by a tenth, which is why the Java program below keeps full precision until it prints.'
          ] }
      ]
    },
    {
      id: 'java', tint: 'deep', eyebrow: 'Run it yourself',
      h2: 'The same calculation as a short Java program',
      lede: 'AP CSA students already write Java, so here is the method as code. It uses only a for-each loop, integer and double arithmetic, and one static method, all inside the course content. We compiled and ran it with javac before publishing.',
      body: [
        { kind: 'code', label: 'CsaEstimate.java &middot; our estimate method', lang: 'java', code: ESTIMATE, note: 'Run by us on 17 October 2026 with javac and java 22. Output: Composite: 68.1 of 100.' },
        { kind: 'two', mt: true,
          leftH3: 'Why 42.0 and not 42',
          left: [
            'The division mcRight / 42.0 uses a double literal on purpose. If both sides were int, Java would do integer division, 30 / 42 would become 0, and every student would score zero on Section I.',
            'That is a real AP CSA idea, from the casting and range topic in Unit 1, and it shows up in multiple-choice questions that ask what an expression evaluates to. Change 42.0 to 42 and run it again to see the bug for yourself.'
          ],
          rightH3: 'Ways to extend it',
          right: [
            'Add a check that each free-response score is no higher than its maximum of 7, 7, 5 or 6, and print a warning if it is. That is a guard condition, the same idea the scoring guidelines reward in method-writing questions.',
            'Or store several practice results in an ArrayList and print the composite for each, which turns this into a small Unit 4 exercise in traversing a list.'
          ] }
      ]
    },
    {
      id: 'frq', tint: 'tint', eyebrow: 'Marking Section II fairly',
      h2: 'How free-response points are actually earned in 2026',
      lede: 'A composite is only as honest as the free-response marks that go into it. The 2026 Scoring Guidelines on AP Central set out the rules, and three of them change how a student should mark practice work.',
      body: [
        { kind: 'table', caption: 'Rules from the 2026 AP Computer Science A Scoring Guidelines (read 17 October 2026)', head: ['Rule', 'What the guidelines say', 'What it means for self-marking'], rows: [
          ['Algorithm points', 'Each question has one or two criteria labelled algorithm, "each of which is worth one point", and they require all necessary steps connected in an appropriate order', 'Do not award the algorithm point because most of the steps are there; the order and the connections matter'],
          ['When an algorithm point is lost', 'The list includes required pieces omitted, steps assembled incorrectly, and "A value is returned from a void method or constructor."', 'Check method headers and return statements before you count the point'],
          ['Non-algorithm points', 'Assessed with a narrower focus, earned even when other errors are present', 'A wrong loop does not cancel a correct method call elsewhere in the same answer'],
          ['Errors to Ignore', 'Minor slips that do not cost the point, such as "Spelling/case discrepancies where there is no ambiguity" and missing parentheses on a call with no parameters', 'Do not dock yourself for small typing slips the guidelines forgive']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The common self-marking mistake',
          left: [
            'Students marking their own code tend to be generous on algorithm points and harsh on small syntax slips, which is the reverse of what the guidelines do. The guidelines forgive a missing semicolon where the structure clearly conveys intent, and refuse an algorithm point when a step is in the wrong place.',
            'A practical fix: mark each criterion separately, one line per point, and write down why each point was earned or not. If you cannot say why, a reader probably could not either.'
          ],
          rightH3: 'Old questions, new format',
          right: [
            'AP Central keeps free-response questions from earlier years online, but warns that after the 2025 to 2026 course and exam revisions those older questions "do not completely align with the current AP CSA Exam".',
            'The difference matters for a calculator. In 2025 each of the four questions had 9 possible points, and College Board&rsquo;s scoring statistics give mean scores of 4.53, 5.24, 4.11 and 3.95. Those means describe the old format; scoring statistics for the 2026 exam were not on AP Central when we checked on 17 October 2026.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://apcentral.collegeboard.org/media/pdf/ap26-sg-computer-science-a.pdf" rel="noopener" target="_blank">2026 AP Computer Science A Scoring Guidelines</a>, the <a class="ag-inline-link" href="https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam/past-exam-questions" rel="noopener" target="_blank">past exam questions page</a> and the <a class="ag-inline-link" href="https://apcentral.collegeboard.org/media/pdf/ap25-computer-science-a-scoring-statistics.pdf" rel="noopener" target="_blank">2025 scoring statistics</a>, read 17 October 2026.' }
      ]
    },
    {
      id: 'limits', tint: 'deep', eyebrow: 'What a calculator cannot do',
      h2: 'Why no AP CSA calculator can give an official score',
      lede: 'Every calculator online, including this one, hits the same wall: the step from raw points to a 1 to 5 score is set by College Board and not published for the current exam.',
      body: [
        { kind: 'two',
          leftH3: 'How College Board describes scoring',
          left: [
            'The Course and Exam Description explains that free-response scores are weighted and combined with the computer-scored multiple choice, and that this raw score is converted into a composite AP score on a 1 to 5 scale.',
            'It also says AP Exams are criterion-referenced rather than graded on a curve: every student who meets the criteria for a given score receives it, however many students that is. So the cutoffs are not a fixed share of test takers, and a score distribution cannot be turned into cut points.'
          ],
          rightH3: 'What the five scores mean',
          right: [
            'College Board&rsquo;s AP Score Scale Table attaches a recommendation to each score: a 5 is "Extremely well qualified", a 4 "Very well qualified", a 3 "Qualified", a 2 "Possibly qualified" and a 1 "No recommendation".',
            'Those descriptions are about readiness for college credit and placement. Whether a given college gives credit for a given score is the college&rsquo;s own decision, which is a separate question from the estimate on this page.'
          ] },
        { kind: 'table', mt: true, caption: 'Our planning targets for a practice composite (ours; not College Board cut scores, which are not published)', head: ['Practice composite', 'How we read it in class', 'What we work on next'], rows: [
          ['70 or more, twice in a row', 'On course for the top of the scale, with a margin', 'Timing, and the free-response points still being dropped'],
          ['55 to 69', 'Solid, with clear gains available', 'The weakest unit in Section I and one free-response type'],
          ['40 to 54', 'Working range, not yet secure', 'Tracing code by hand and writing complete methods'],
          ['Under 40', 'Foundations first', 'Unit 1 and 2 habits before timed papers']
        ] },
        { kind: 'p', mt: true, html: 'We set these targets above where we think the lines are likely to fall, on purpose, so a student who meets them has room for a bad morning. They are not a promise of any score. For an overview of the course itself, see our <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>; for revision strategy, our post on <a class="ag-inline-link" href="/blog/how-to-get-a-5-in-ap-computer-science-a">how to get a 5 in AP Computer Science A</a>; and for what changed in the new course, <a class="ag-inline-link" href="/blog/ap-computer-science-a-changes-2026">the 2026 AP CSA changes</a>.' }
      ]
    },
    {
      id: 'use', tint: '', eyebrow: 'Using the number well',
      h2: 'A composite is a tool for revision, not a verdict',
      lede: 'The most useful thing about a composite is not the total. It is what the two halves say when you put them side by side.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Track it over time', p: 'One practice composite is noise. Three, taken two weeks apart under the same conditions, show a trend you can trust.' },
          { h3: 'Split it by question', p: 'Write the four free-response scores separately. A student scoring 6 of 7 on class design and 1 of 6 on 2D arrays has a clear next topic.' },
          { h3: 'Mark the misses', p: 'For every wrong multiple-choice answer, note the unit. A pile of Unit 4 misses at 30 to 40 percent of Section I matters more than a few in Unit 3.' }
        ] },
        { kind: 'p', mt: true, html: 'If you are still choosing between the two computer science exams, our comparison of <a class="ag-inline-link" href="/blog/ap-csp-vs-ap-csa-which-to-take-first">AP CSP and AP CSA</a> sets out which one to take first.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From practice to May',
    h2: 'Four checkpoints between the first practice test and the exam',
    lede: 'Where a student usually is, and what the composite should be telling them at each point.',
    table: { caption: 'Checkpoints for an AP CSA year (ours)', head: ['Checkpoint', 'What the composite is for'], rows: [
      ['1. First untimed attempt', 'A baseline, and a list of units not yet taught'],
      ['2. First timed full test', 'Finding out whether time or knowledge is the limit'],
      ['3. Teacher-marked free response', 'Replacing a hopeful self-mark with an honest one'],
      ['4. Two full tests in spring', 'A trend, read against the planning targets']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask to see the two halves of the composite, not only the total. The split tells you whether your teen needs more code writing or more code reading.',
      'A falling composite in February is common when Unit 4 arrives. It usually recovers once arrays and lists settle.'
    ] },
    right: { h3: 'For students', ps: [
      'Time yourself honestly. A composite earned with extra minutes describes a different exam.',
      'Keep every marked free-response answer. Rereading your own lost points is the fastest revision there is.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around AP Computer Science A',
    lede: 'Each one is taught live online by a teacher who stays with the student, in a group batch or one to one.',
    bands: [
      { num: 'I', h3: 'Before and during AP', sub: 'Grades 9 to 12', courses: [
        { code: 'ACSS / AP / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'The full course, marked like the exam.' },
        { code: 'ACSS / AP / 02', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP Computer Science Principles', blurb: 'The breadth course and the Create task.' },
        { code: 'ACSS / AP / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Java from first class to objects.' }
      ] },
      { num: 'II', h3: 'Alongside AP', sub: 'Ages 13 to 18', courses: [
        { code: 'ACSS / ALG / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving', blurb: 'Data structures without the panic.' },
        { code: 'ACSS / ALG / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'USACO-style problems, one level at a time.' },
        { code: 'ACSS / ALG / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A second language for projects.' }
      ] },
      { num: 'III', h3: 'Other AP and test prep', sub: 'Grades 10 to 12', courses: [
        { code: 'ACSS / MTH / 01', slug: 'ap-calculus-exam-prep', title: 'AP Calculus AB and BC', blurb: 'Live, with free-response marking.' },
        { code: 'ACSS / MTH / 02', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'Inference and the investigative task.' },
        { code: 'ACSS / MTH / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'The digital SAT math section.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Timed practice and honest marking, live',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in Eastern, Central, Mountain or Pacific time.' },
      { time: 'Weekends', l: 'Longer sessions suit full timed papers.' },
      { time: '1-on-1', l: 'Arranged around the school calendar.' }
    ],
    cells: [
      { h3: 'One teacher all year', p: 'The person who marks the free response knows the student.' },
      { h3: 'Code on a shared screen', p: 'Students type Java live and talk through it.' },
      { h3: 'Marked to the rubric', p: 'Each point earned or lost, with the reason.' },
      { h3: 'Practice in exam timing', p: 'Ninety minutes means ninety minutes.' },
      { h3: 'Every state, online', p: 'From Maine to Hawaii, on video.' },
      { h3: 'Two formats', p: 'A batch of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Projects from teenagers who learned the same Java ideas the exam tests. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents in their own words, copied from Google.',

  fees: {
    h2: 'Fees',
    lede: 'The calculator on this page is free to use. What families pay for is a teacher who marks practice papers properly, billed by the month in US dollars, with no commitment to the full school year.',
    free: ['A free first lesson', 'Bring a practice test', 'No card details'],
    group: ['A batch of fifteen to twenty', 'The same teacher each week', 'Pick a batch time', 'Paid monthly'],
    one: ['A teacher for one student', 'Times that fit the school week', 'A plan built on your results']
  },

  faq: {
    eyebrow: 'Questions from students',
    h2: 'AP Computer Science A scores: common questions',
    items: [
      { q: 'Is there an official AP Computer Science A score calculator?', a: 'No. College Board publishes the section weights and the free-response point values, but not the raw score needed for each AP score on the current exam. Any calculator, including ours, gives an estimate.' },
      { q: 'How is the AP Computer Science A exam weighted?', a: 'Section I has 42 multiple-choice questions worth 55% of the score, and Section II has 4 free-response questions worth 45%. Each section lasts 90 minutes.' },
      { q: 'How many points is each AP CSA free-response question worth?', a: 'In the current format, Question 1 is worth 7 points (Part A 4, Part B 3), Question 2 is worth 7, Question 3 is worth 5 and Question 4 is worth 6, according to the Course and Exam Description.' },
      { q: 'How do I estimate my AP CSA score from a practice test?', a: 'Our method multiplies the number of multiple-choice questions right by 55 / 42, multiplies the free-response points by 45 / 25, and adds the two for a composite out of 100. It is an estimate, not an official conversion.' },
      { q: 'Is AP Computer Science A graded on a curve?', a: 'College Board says AP Exams are criterion-referenced, not graded on a curve: every student who meets the criteria for a score receives it, however many students that is.' },
      { q: 'Can I use old AP CSA free-response questions in a calculator?', a: 'With care. AP Central says the older questions do not completely align with the current exam, and before 2026 each question had 9 points rather than 7, 7, 5 and 6.' },
      { q: 'Do small typing mistakes cost points on the AP CSA free response?', a: 'Often not. The 2026 Scoring Guidelines list errors to ignore, such as spelling or case slips with no ambiguity, as long as no specific guideline says otherwise.' },
      { q: 'What does an AP score of 3 mean?', a: 'On the College Board AP Score Scale Table a 3 means Qualified, a 4 Very well qualified and a 5 Extremely well qualified. Colleges decide their own credit rules.' },
      { q: 'When is the next AP Computer Science A exam?', a: 'AP Central lists Wednesday, May 12, 2027, Session 2, for the AP Computer Science A Exam.' },
      { q: 'What times are AP CSA classes for US students?', a: 'Weekdays or weekends, flexible. Choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do AP Computer Science A classes cost?', a: 'The first lesson is free. After that, families pay one month at a time, and the fees section of this page shows the monthly amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students working towards an AP computer science exam.',
    items: [
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A classes', p: 'The live course, unit by unit.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching', p: 'For the breadth exam and its project.' },
      { href: '/blog/how-to-get-a-5-in-ap-computer-science-a', label: 'Getting a 5 in AP CSA', p: 'A revision plan for the year.' },
      { href: '/blog/ap-computer-science-a-changes-2026', label: 'AP CSA changes for 2026', p: 'What the new course moved.' },
      { href: '/usaco-preparation-online-coaching', label: 'USACO preparation', p: 'Where strong AP students often go next.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page we have for US families.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Bring your latest practice result, marked or unmarked. In the first lesson the teacher re-marks one free-response answer with you, so you can see where your estimate stands.',
    readFirst: 'Curious how the teaching works first? Our page on <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a live class, and the <a class="ag-inline-link" href="/courses">course list</a> has each syllabus.',
    note: 'Teaching happens on video, with teachers working from India, so lessons fit around US school days rather than a local office. WhatsApp is the quickest way to reach us.',
    formNote: 'The first lesson is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'AP computer science', links: [
        { href: '/ap-computer-science-a-online-classes', label: 'AP CSA classes' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CSP coaching' },
        { href: '/blog/ap-csp-vs-ap-csa-which-to-take-first', label: 'AP CSP or AP CSA first' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO preparation' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/coding-for-16-year-olds', label: 'Coding for 16 year olds' },
        { href: '/sat-math-tutoring-online', label: 'SAT math tutoring' }
      ] }
    ],
    bottomRight: 'Two scales, one weighted composite'
  },

  personalityCss: `
.ag-root.ag-acss .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-acss .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-acss .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-acss .ag-table caption { text-align: left; }
.ag-root.ag-acss .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'College Board, read raw on 17 October 2026: AP CSA exam page (fully digital, 42 MC 55%, 4 FRQ 45%, 90 minutes each, May 12, 2027 Session 2); 2025 CED (FRQ 7, 7, 5, 6 points, Q1 Part A 4 and Part B 3, MC unit weights, criterion-referenced scoring); 2026 Scoring Guidelines (algorithm points, Errors to Ignore); past exam questions page (older questions do not completely align); 2025 scoring statistics (means of 9); AP Score Scale Table.',
    localProject: 'Our composite method: MC / 42 x 55 + FRQ / 25 x 45, with per-question (1.31), per-point (1.8) and per-minute (0.61 and 0.50) values, three invented worked students (65.1, 68.1, 70.5), planning targets labelled ours, and a Java program compiled and run by us that prints 68.1 of 100. Lesson family: weighted averages.',
    requiredMentions: ['7, 7, 5 and 6', '45 / 25 = 1.8', '55 / 42', '68.1 of 100', 'Errors to Ignore', 'Extremely well qualified', 'Wednesday, May 12, 2027', '0.61 composite points a minute', 'do not completely align with the current AP CSA Exam', '4.53, 5.24, 4.11 and 3.95'],
    sources: [
      { claim: 'Fully digital exam; Section I 42 MC 55%; Section II 4 FRQ 45%; FRQ types; May 12, 2027.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam' },
      { claim: 'FRQ points 7, 7, 5, 6; unit weights; raw score converted to 1 to 5; criterion-referenced.', url: 'https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf' },
      { claim: 'Algorithm and non-algorithm points; Errors to Ignore.', url: 'https://apcentral.collegeboard.org/media/pdf/ap26-sg-computer-science-a.pdf' },
      { claim: 'Older questions do not completely align with the current exam.', url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-a/exam/past-exam-questions' },
      { claim: '2025 FRQ means of 9 possible points.', url: 'https://apcentral.collegeboard.org/media/pdf/ap25-computer-science-a-scoring-statistics.pdf' },
      { claim: 'Score recommendations for 1 to 5.', url: 'https://apstudents.collegeboard.org/about-ap-scores/ap-score-scale-table' }
    ],
    rejectedClaims: [
      'Raw-score cutoffs for a 3, 4 or 5: not published by College Board for the current exam, so none are printed; our planning targets are labelled ours.',
      'Converting the score distribution into cut points: AP is criterion-referenced, so this is not done.',
      '2026 FRQ scoring statistics: not on AP Central on 17 October 2026 (HTTP 404), so no 2026 means are printed.',
      'A guessing penalty: not stated in the sources read, so the method simply counts correct answers.',
      'Any score promise to students: none made.',
      'Any affiliation with College Board: none, and the page says so.'
    ]
  }
};
