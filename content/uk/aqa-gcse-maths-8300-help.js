'use strict';
// AQA GCSE Maths 8300 help (ag- maths door, England; UK and US exams cluster, row UK018).
// Sources, read raw on 31 October 2026 (curl -sL; PDFs through macOS PDFKit; raw copies in
// keyword-research-2026-09/uk-us-gap/src/aqa-gcse-maths-8300-help/):
//  - AQA GCSE Mathematics (8300) specification, "Version 1.1 September 2026" (cdn.sanity.io file linked from
//    aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification). Verbatim: "GCSE Mathematics has a
//    Foundation tier (grades 1 – 5) and a Higher tier (grades 4 – 9). Students must take three question papers at
//    the same tier. All question papers must be taken in the same series."; each paper "written exam: 1 hour 30
//    minutes", "80 marks", "33⅓% of the GCSE Mathematics assessment"; "The mathematical demand increases as a
//    student progresses through the paper."; references "Number references start with N" ... "Statistics
//    references start with S."; columns "basic foundation content", "additional foundation content", "Higher
//    content only"; "November entries will only be available to students who were at least 16 on the previous 31
//    August."; entry codes 8300F and 8300H; "The Ofqual qualification accreditation number (QAN) is 601/4608/4.";
//    "Students can re-sit the qualification as many times as they wish, within the shelf life of the
//    qualification."; instruments "pencil (for use in diagrams only)", "ruler", "pair of compasses",
//    "protractor"; private candidates "You must be based in the UK."; notes "it is expected that answers will be
//    given in their simplest form without an explicit instruction to do so", "unfamiliar formulae will be given
//    in the question", "Imperial/metric conversions will be given in the question."; G21 exact values of sin and
//    cos for 0, 30, 45, 60 and 90 degrees; A22 inequalities; A16 circle equation and tangent; A6 identities and
//    proof; S4 box plots and spread.
//  - AQA 8300 key dates page (aqa.org.uk/.../mathematics-8300/key-dates): November 2026 series 4 Nov (8300/1F,
//    1H), 6 Nov (2F, 2H), 9 Nov (3F, 3H); June 2027 series 14 May (1F, 1H), 27 May (2F, 2H), 14 Jun (3F, 3H);
//    each "Start time: AM | Duration: 1h 30m". Overview page: "Next exam: 04 November 2026"; "Exampro Maths is
//    now fully funded for all AQA maths centres."
//  - AQA Reports on the examination, June 2025: 8300/1F (Version 1.0): "the mean score having increased by a
//    little more than one mark"; struggled: "Working backwards from an answer and remainder to find the original
//    number", "Calculating the volume of a sphere", "Standard form", "Recalling the value of sin 90°"; Q11
//    "'circles' were often drawn freehand which would not be awarded any marks. Centres and students are
//    reminded that even on a non-calculator paper, they must bring a ruler and a pair of compasses."; Q10
//    "students who showed their working scored better than those who did not". 8300/1H: "There was no evidence of
//    students having time problems"; excelled "simple simultaneous equations", "frequency trees", "ratio",
//    "simplifying surds", "completing the square"; struggled "inequalities", "inter-quartile range", "algebraic
//    proof". 8300/2H: "Some students' poor presentation made it difficult to know what was trying to be
//    communicated."; struggled "Identifying the gradient of a horizontal line", "equation of a circle",
//    "equation of a tangent to a circle", "composite and inverse functions proof".
//  - Ofqual consultation outcome (gov.uk content API), 2025, 2026 and 2027: boards must "publish the formulae and
//    equations sheets for the exams in 2026 and 2027 by 1 September 2025 and 1 September 2026 respectively" and
//    "provide clean copies"; applies to "exams taken in November 2025, 2026 and 2027". Outcome for 2028 onwards:
//    sheets continue "for the remaining lifetime of the current specifications"; boards must "not set questions
//    that can be answered solely by transferring information from the formulae or equations sheets."
// Our own: the count of 97 references (N1 to N16, A1 to A25, R1 to R16, G1 to G25, P1 to P9, S1 to S6, counted in
// the 1.1 PDF), the mark log method, the three worked examples and the practice set are ours.
// Spine: AQA numbers its content. Every 8300 topic carries a reference from N1 to S6 and sits in one of three
// columns, so a lost mark can be traced to a line of the specification. Lesson family: a board door that teaches a
// student to read the specification as a checklist, distinct from the board comparison and the tier pages.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'AQA 8300', blurb: 'Ninety-seven numbered content references from N1 to S6. Trace every lost mark to one line of the AQA specification.' },
  slug: 'aqa-gcse-maths-8300-help',
  code: 'ag',
  accent: '#495572',
  accentRationale: 'AQA 8300 maths: a slate blue-grey (#495572, 7.01:1 on #FBF8F2 and 6.03:1 on the deepest paper tint), cooler and greyer than the Edexcel teal and the Foundation navy in the same group',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'AQA GCSE Maths 8300 help',
  title: 'AQA GCSE Maths 8300 Help | Papers, Dates, References',
  description: 'AQA GCSE Maths 8300 help: three 80-mark papers, the N1 to S6 content references, the 2027 exam dates, and what AQA examiners wrote about June 2025.',
  ogDescription: 'AQA numbers every GCSE Maths topic from N1 to S6. Trace each lost mark to one line of the 8300 specification, then fix that line.',
  twitterDescription: 'AQA GCSE Maths 8300: the papers, the 2026 and 2027 dates, the content references and the June 2025 examiner reports.',
  pageName: 'AQA GCSE Maths 8300 Help',
  webPageDescription: 'Live online help for AQA GCSE Mathematics 8300 at Foundation and Higher tier, built from the version 1.1 specification and AQA\'s June 2025 reports on the examination.',
  courseDescription: 'Live online teaching for AQA GCSE Mathematics 8300 candidates, Foundation and Higher, organised around the specification references N1 to S6.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'AQA GCSE Maths 8300',
  navLinks: [
    { href: '#papers', label: 'The papers' },
    { href: '#references', label: 'N1 to S6' },
    { href: '#reports', label: 'June 2025 reports' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; AQA GCSE Mathematics 8300 &middot; Years 10 and 11',
  h1: 'AQA GCSE Maths 8300 help',
  lede: 'AQA writes its GCSE Maths specification as a numbered list. Every topic a student can be examined on has a reference, from N1 for ordering numbers to S6 for scatter graphs, and each one sits in a column that says whether it belongs to Foundation, to both tiers, or to Higher only. That numbering is the most useful thing a family can know about 8300, because it turns a vague report ("needs to work on algebra") into a short list of lines to fix. This page sets out the three papers and the 2026 to 2027 dates from AQA, explains how to read the references, summarises what AQA\'s own examiners wrote about the June 2025 papers, and works through three original questions, each tagged to the line of the specification it tests.',
  secondaryCta: { href: '#references', label: 'How the references work' },
  wa: 'Hello Modern Age Coders, I would like a free first class for AQA GCSE Maths 8300.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from AQA\'s 8300 specification and June 2025 examiner reports',
  spec: [
    ['Qualification', 'AQA GCSE Mathematics 8300'],
    ['Tiers', 'Foundation 1 to 5, Higher 4 to 9'],
    ['Papers', 'Three, 1 hour 30 minutes, 80 marks each'],
    ['No calculator', 'Paper 1'],
    ['Next AQA exam', '4 November 2026'],
    ['Format', 'Group of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'In short',
  capsule: 'AQA GCSE Mathematics 8300 is the GCSE Maths qualification set by AQA for students in England, usually sat at the end of Year 11. It has a Foundation tier (grades 1 to 5) and a Higher tier (grades 4 to 9), each assessed by three 1 hour 30 minute papers of 80 marks: Paper 1 without a calculator, Papers 2 and 3 with one. Modern Age Coders teaches 8300 live online, in a group of 15 to 20 or 1-on-1, through its GCSE Maths: Foundation and Higher course. AQA lists the June 2027 papers on 14 May, 27 May and 14 June 2027, and the November 2026 papers on 4, 6 and 9 November 2026. We are not connected with AQA; we teach to its published specification.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for an AQA 8300 student',
    lede: 'The first course is the one most 8300 students join. The other two cover the commonest detours: algebra that keeps leaking marks, and a resit after Year 11.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'AQ / 01', title: 'GCSE Maths: Foundation and Higher', note: 'The whole 8300 content at the tier the school has entered, with AQA papers and mark schemes.' },
      { course: 'algebra-foundations-masterclass', code: 'AQ / 02', title: 'Algebra Foundations', note: 'For a student whose A references (A1 to A25) are where the marks keep going.' },
      { course: 'gcse-maths-resit-course', code: 'AQ / 03', title: 'GCSE Maths Resit', note: 'For students re-sitting 8300 after Year 11, including the November series for those old enough.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'The papers',
      h2: 'How is AQA GCSE Maths 8300 assessed?',
      lede: 'Three papers, all at one tier, all in one exam series. The table is taken from the specification at a glance in AQA\'s version 1.1 document, dated September 2026.',
      body: [
        { kind: 'table', caption: 'AQA GCSE Mathematics 8300: the three papers', head: ['Paper', 'Calculator', 'Length', 'Marks', 'Share of the GCSE'], rows: [
          ['Paper 1 (8300/1F or 8300/1H)', 'Not allowed', '1 hour 30 minutes', '80', 'One third'],
          ['Paper 2 (8300/2F or 8300/2H)', 'Allowed', '1 hour 30 minutes', '80', 'One third'],
          ['Paper 3 (8300/3F or 8300/3H)', 'Allowed', '1 hour 30 minutes', '80', 'One third']
        ] },
        { kind: 'p', html: 'AQA\'s specification says the same thing about all three papers: content "from any part of the specification may be assessed", and the questions run from short single-mark items to multi-step problems. It adds one sentence that should shape how a student uses the time: "The mathematical demand increases as a student progresses through the paper." The early pages are where a well-prepared student should bank marks quickly, so that the later, harder questions get the minutes they need.' },
        { kind: 'table', mt: true, caption: 'When AQA sits 8300, from the AQA key dates page', head: ['Series', 'Paper 1', 'Paper 2', 'Paper 3'], rows: [
          ['November 2026 (resit series)', 'Wednesday 4 November 2026, morning', 'Friday 6 November 2026, morning', 'Monday 9 November 2026, morning'],
          ['June 2027 series', 'Friday 14 May 2027, morning', 'Thursday 27 May 2027, morning', 'Monday 14 June 2027, morning']
        ] },
        { kind: 'p', html: 'The June 2027 series is spread over a month: almost two weeks between Paper 1 and Paper 2, and two and a half weeks between Paper 2 and Paper 3. That gap is useful. A student can review the non-calculator paper\'s weak spots before the calculator papers, rather than sitting all three in a single week. The November series is open only to students who, in AQA\'s words, "were at least 16 on the previous 31 August", which in practice means students resitting after Year 11.' },
        { kind: 'two', mt: true,
          leftH3: 'Entry and tier',
          left: [
            'Schools enter students as 8300F or 8300H, and a student can be entered for only one tier in a series. Foundation awards grades 1 to 5; Higher awards grades 4 to 9.',
            'AQA\'s Ofqual accreditation number for the qualification is 601/4608/4, which is the code to quote when a college or employer asks exactly which GCSE was taken.'
          ],
          rightH3: 'What to bring',
          right: [
            'The specification lists the instruments for every paper: a pencil "for use in diagrams only", a ruler, a pair of compasses and a protractor. A calculator is required for Papers 2 and 3.',
            'AQA\'s June 2025 Foundation report shows why the list matters even on Paper 1: circles drawn freehand were awarded no marks.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification" rel="noopener" target="_blank">AQA GCSE Mathematics 8300 specification</a> (version 1.1, September 2026) and the <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/key-dates" rel="noopener" target="_blank">AQA 8300 key dates page</a>, both read on 31 October 2026. Dates can change; check the school\'s exams office before the series.' }
      ]
    },
    {
      id: 'references', tint: 'deep', eyebrow: 'N1 to S6',
      h2: 'What do the N, A, R, G, P and S references in the AQA spec mean?',
      lede: 'They are AQA\'s labels for every examinable topic, and the fastest way to turn a mock result into a revision list.',
      body: [
        { kind: 'p', html: 'AQA groups the 8300 content into six areas and gives each statement a reference: "Number references start with N", algebra with A, ratio, proportion and rates of change with R, geometry and measures with G, probability with P and statistics with S. Counting the references in the version 1.1 specification, we find 97 of them. That count is ours, not AQA\'s, but it is a useful size to hold in mind: the whole of GCSE Maths, at both tiers, fits on a checklist of fewer than a hundred lines.' },
        { kind: 'table', mt: true, caption: 'The six areas and their references, as numbered in the 8300 specification (count ours)', head: ['Area', 'References', 'How many', 'Examples of what sits there'], rows: [
          ['Number', 'N1 to N16', '16', 'Ordering numbers, standard form (N9), rounding and error intervals (N15)'],
          ['Algebra', 'A1 to A25', '25', 'Functions (A7), straight lines (A9), quadratics (A18), inequalities (A22)'],
          ['Ratio, proportion and rates of change', 'R1 to R16', '16', 'Percentages (R9), direct and inverse proportion, compound measures'],
          ['Geometry and measures', 'G1 to G25', '25', 'Volume of spheres and cones (G17), exact trigonometric values (G21)'],
          ['Probability', 'P1 to P9', '9', 'Frequency trees, tree diagrams, Venn diagrams'],
          ['Statistics', 'S1 to S6', '6', 'Box plots and measures of spread (S4), scatter graphs']
        ] },
        { kind: 'p', html: 'Each reference is then split across three columns, which AQA calls "basic foundation content", "additional foundation content" and "Higher content only". Foundation papers can test the first two columns. Higher papers can test all three. So when a student on Foundation meets an unfamiliar topic in a past paper, the first question is not "how do I do this?" but "which column is it in?" If the answer is Higher content only, it should not be on their paper at all, and the time is better spent elsewhere.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'One reference, two tiers', p: 'Many references have content in more than one column. A22, for example, asks Foundation students to solve linear inequalities in one variable, and Higher students to go on to quadratic inequalities and solution sets on a graph.' },
          { h3: 'The notes count too', p: 'Small notes under a reference carry rules. Under A1, AQA says answers are expected "in their simplest form without an explicit instruction to do so", so an unsimplified answer can cost a mark nobody warned about.' },
          { h3: 'What is given, what is not', p: 'Other notes say what the paper will supply: "unfamiliar formulae will be given in the question", and "Imperial/metric conversions will be given in the question". Metric conversions are not given, and must be known.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The mark log: our method',
          left: [
            'After every past paper, we write each lost mark against its reference, with a one-word reason: knowledge, method, slip or time. After three or four papers, the same references repeat.',
            'Those repeating lines are the revision plan. It is usually five to ten references, not "all of algebra", and each can be taught and retested in a lesson.'
          ],
          rightH3: 'The formulae sheet',
          right: [
            'Ofqual requires a formulae sheet in GCSE Maths for the 2025, 2026 and 2027 exams, including the November series, and AQA had to publish the 2027 sheet by 1 September 2026. For exams from 2028 the sheets continue for the rest of the life of this specification.',
            'Ofqual also bars questions that can be answered "solely by transferring information" from the sheet. Knowing where a formula is printed is not the same as knowing when to use it.'
          ] }
      ]
    },
    {
      id: 'reports', tint: '', eyebrow: 'June 2025 reports',
      h2: 'What did AQA examiners say about the June 2025 GCSE Maths papers?',
      lede: 'AQA publishes a report on the examination for every paper. Three of the June 2025 reports, read in full, point at the same few habits and the same handful of references.',
      body: [
        { kind: 'table', caption: 'From AQA\'s June 2025 reports on the examination (summarised, with references added by us)', head: ['Paper', 'Where students did well', 'Where students struggled'], rows: [
          ['8300/1F, Foundation non-calculator', 'Sequences; primes, factors and multiples; pictograms; ratio and simple probability', 'Working backwards from an answer and a remainder; the volume of a sphere (G17); standard form (N9); recalling sin 90° (G21)'],
          ['8300/1H, Higher non-calculator', 'Simple simultaneous equations; frequency trees; ratio; simplifying surds; completing the square', 'Inequalities (A22); the inter-quartile range (S4); algebraic proof (A6)'],
          ['8300/2H, Higher calculator', 'Prime factors; error intervals; right-angled trigonometry; speed, distance and time', 'The gradient of a horizontal line; the equation of a circle and of a tangent (A16); a composite and inverse functions proof (A7)']
        ] },
        { kind: 'p', html: 'Two things stand out. First, several of the topics that hurt Foundation students are pure recall: the exact value of sin 90° is a fact listed under G21, and the volume of a sphere is a formula a student needs to recognise and use. Second, the Higher struggles cluster around writing mathematics down rather than calculating it. Algebraic proof, a functions proof and inequalities all reward a clear chain of reasoning, and the Higher calculator report noted that "Some students\' poor presentation made it difficult to know what was trying to be communicated."' },
        { kind: 'two', mt: true,
          leftH3: 'Working shown, marks earned',
          left: [
            'On a Foundation substitution question, the examiners wrote that "students who showed their working scored better than those who did not", and gave an example of two students reaching the same wrong answer, where only the one who wrote the substituted line earned marks.',
            'Method marks are awarded for the line, not the answer. A blank line between question and answer is a mark left on the desk.'
          ],
          rightH3: 'Instruments on a non-calculator paper',
          right: [
            'The same Foundation report says circles "were often drawn freehand which would not be awarded any marks", and reminds centres that "even on a non-calculator paper, they must bring a ruler and a pair of compasses."',
            'It is the cheapest lesson on this page: a pair of compasses in the pencil case for every paper.'
          ] },
        { kind: 'p', mt: true, html: 'The good news in the reports is about time. The Higher non-calculator report found "no evidence of students having time problems", and the Foundation non-calculator report recorded the mean score up by "a little more than one mark" on 2024. The papers are hard in places, but they are finishable. Marks are lost to gaps and habits far more often than to the clock.' },
        { kind: 'source', html: 'Source: AQA, GCSE Mathematics 8300/1F, 8300/1H and 8300/2H, Reports on the examination, June 2025, linked from the <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/assessment-resources" rel="noopener" target="_blank">8300 assessment resources page</a>. We summarise the examiners\' comments and do not reproduce the questions.' }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Three questions we wrote, each tagged to its reference',
      lede: 'These are our own questions in the style of the topics AQA\'s examiners flagged. They are not AQA questions. The point is the habit: name the reference, then write every step.',
      body: [
        { kind: 'two',
          leftH3: 'Example 1, Foundation, N2 (working backwards)',
          left: [
            '<strong>Question (ours).</strong> Priya divides a number by 7. Her answer is 38 remainder 4. What was the number?',
            '<strong>Think first.</strong> Division with a remainder means: number = divisor × quotient + remainder. Write that line before touching the numbers.',
            '<strong>Working.</strong> 7 × 38 = 266. Then 266 + 4 = 270. <strong>Check:</strong> 270 ÷ 7 = 38 with 4 left over, because 7 × 38 = 266 and 270 &minus; 266 = 4.',
            'The examiners\' report describes students adding the remainder to the quotient first, or treating the remainder as a decimal. Both errors vanish once the relationship line is written down.'
          ],
          rightH3: 'Example 2, Higher, A22 (a quadratic inequality)',
          right: [
            '<strong>Question (ours).</strong> Solve x² &minus; 2x &minus; 15 &lt; 0.',
            '<strong>Working.</strong> Factorise: (x &minus; 5)(x + 3) &lt; 0. The critical values are x = 5 and x = &minus;3.',
            '<strong>Think.</strong> The graph of y = x² &minus; 2x &minus; 15 is a U-shaped curve crossing the x-axis at &minus;3 and 5. "Less than zero" means the part of the curve below the axis, which is between the roots.',
            '<strong>Answer.</strong> &minus;3 &lt; x &lt; 5. A quick sketch is the step that stops students writing x &lt; &minus;3 or x &gt; 5, the region where the expression is positive.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Example 3, Higher, A6 (a short algebraic proof)',
          left: [
            '<strong>Question (ours).</strong> Prove that the sum of any three consecutive even numbers is a multiple of 6.',
            '<strong>Working.</strong> Any even number can be written 2n, where n is an integer, so the three are 2n, 2n + 2 and 2n + 4. Their sum is 6n + 6 = 6(n + 1).',
            '<strong>Conclusion.</strong> Because n + 1 is an integer, 6(n + 1) is a multiple of 6, whichever even number we started from. The final sentence is part of the proof: it says why the algebra answers the question.'
          ],
          rightH3: 'Why the last sentence matters',
          right: [
            'A6 asks students to "argue mathematically to show algebraic expressions are equivalent" and to construct proofs. A line of algebra that stops at 6n + 6 has shown something, but has not said what.',
            'Writing the conclusion in words is the habit that turns two method marks into full marks, and it is the kind of presentation the June 2025 Higher reports asked for.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, answers at the end).</strong> (1) N9: write 0.00052 in standard form. (2) G21: without a calculator, what is cos 60°? (3) N2: a number divided by 9 gives 14 remainder 5; find it. (4) A22: solve 3x &minus; 7 &gt; 11 and show the solution on a number line with the correct circle. (5) S4: a data set has lower quartile 12 and upper quartile 31; what is the inter-quartile range, and why is it less affected by one extreme value than the range? <strong>Answers:</strong> (1) 5.2 × 10<sup>&minus;4</sup>; (2) one half; (3) 131; (4) x &gt; 6, with an open circle at 6; (5) 19, because it uses only the middle half of the data.' }
      ]
    },
    {
      id: 'plan', tint: '', eyebrow: 'A plan to the June 2027 series',
      h2: 'How should a Year 11 student revise for AQA 8300 before May 2027?',
      lede: 'A seven-month plan from November 2026 to Paper 3, written by us around AQA\'s dates. It assumes one live class a week and two short practice sessions between classes.',
      body: [
        { kind: 'ol', items: [
          '<strong>November 2026: one full paper, marked honestly.</strong> Sit an AQA past Paper 1 at the right tier under timed conditions. Start the mark log: every lost mark against its reference.',
          '<strong>December 2026: the five worst references.</strong> Teach and retest the references that appear most often in the log. For Foundation students these are often in number and ratio; for Higher, in algebra.',
          '<strong>January 2027: the mock series.</strong> Most schools run mocks around now. Add the mock\'s lost marks to the same log, so the plan follows evidence rather than mood.',
          '<strong>February to March 2027: recall lists.</strong> The facts AQA expects students to know (exact trigonometric values, area and volume formulae, angle facts) drilled in five-minute daily bursts.',
          '<strong>April 2027: full papers in AQA order.</strong> One non-calculator and one calculator paper a week, alternating, with the mark log updated after each.',
          '<strong>Early May 2027: Paper 1 rehearsal.</strong> Non-calculator fluency in the fortnight before 14 May 2027: fractions, percentages and estimation by hand.',
          '<strong>Between papers: review, do not cram.</strong> Use the gaps before 27 May and 14 June 2027 to revisit the references Paper 1 exposed.'
        ] },
        { kind: 'p', mt: true, html: 'The plan is a template, not a promise. A student starting at grade 3 and one aiming for a 9 need very different references on their list. The mark log is what makes the plan personal, and it is the first thing we build together.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs for an AQA 8300 student',
    lede: 'Each rung is something a student can show on a real AQA paper, not a feeling about a topic.',
    table: { caption: 'What should be true at each stage', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Knows the tier and the column', 'Start of Year 10 or on joining', 'Can say which tier they are entered for and which references are Higher content only'],
      ['2. Recall secure', 'Year 10', 'The facts listed in the specification and its appendix recalled without the sheet'],
      ['3. Mark log short', 'Spring of Year 11', 'Fewer than ten repeating references across the last three papers'],
      ['4. Exam habits automatic', 'Before Paper 1', 'Working shown, instruments packed, answers simplified, one clear answer per question']
    ] },
    left: { h3: 'Rung one takes an hour', ps: [
      'Reading the three columns with a student is often the most calming lesson of the year: the list is finite.',
      'A student who also studies computing may like the <a class="ag-inline-link" href="/aqa-gcse-computer-science-8525-help">AQA GCSE Computer Science 8525 page</a>.'
    ] },
    right: { h3: 'Rung three is the real work', ps: [
      'Shrinking the mark log is slow, steady teaching. We report on it to families every month.',
      'Lessons lighten in the exam weeks themselves.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around AQA GCSE Maths',
    lede: 'Grouped by what a student needs before, during and after 8300.',
    bands: [
      { num: 'I', h3: 'The GCSE itself', sub: 'Foundation and Higher', courses: [
        { code: 'UK / AQ1 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE Maths', blurb: 'All six areas of 8300, taught at the tier a student sits.' },
        { code: 'UK / AQ1 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'The A references rebuilt from expressions upwards.' },
        { code: 'UK / AQ1 / 03', slug: 'gcse-maths-resit-course', title: 'GCSE Maths Resit', blurb: 'A second attempt planned from the first attempt\'s marks.' }
      ] },
      { num: 'II', h3: 'Gaps and skills', sub: 'Before or alongside Year 10', courses: [
        { code: 'UK / AQ2 / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Key Stage 3 number and geometry that 8300 assumes.' },
        { code: 'UK / AQ2 / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The P and S references, from frequency trees to box plots.' },
        { code: 'UK / AQ2 / 03', slug: 'functional-skills-maths-course', title: 'Functional Skills Maths', blurb: 'A practical Level 1 or Level 2 route for some post-16 learners.' }
      ] },
      { num: 'III', h3: 'Beyond grade 7', sub: 'For students heading further', courses: [
        { code: 'UK / AQ3 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'The course a strong Higher result leads to.' },
        { code: 'UK / AQ3 / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Proof and problem solving beyond the specification.' },
        { code: 'UK / AQ3 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Sequences and functions explored in Python as well as on paper.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Live classes built on AQA\'s own papers',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our teachers are in India and every class is set in UK time.',
    slots: [
      { time: 'After school', l: 'The usual time for Years 10 and 11.' },
      { time: 'Evenings', l: 'Around clubs, sport and homework.' },
      { time: 'Weekend mornings', l: 'Room for a full 90-minute paper.' }
    ],
    cells: [
      { h3: 'AQA papers only', p: 'Past papers and mark schemes from AQA, at the right tier, so the layout is familiar.' },
      { h3: 'References, not chapters', p: 'Every lost mark logged against N1 to S6, so the plan is a short list of lines.' },
      { h3: 'Recall drills', p: 'Exact values and formulae practised in short daily bursts until they are automatic.' },
      { h3: 'Written reasoning', p: 'Proofs and explanations finished with a sentence that says what has been shown.' },
      { h3: 'A free first class', p: 'One live class to see the work and agree where to start, with no payment taken.' },
      { h3: 'Two formats', p: 'A group of 15 to 20 at the same tier, or 1-on-1 planned around one student.' }
    ]
  },

  projectsH2: 'Projects students built in our classes',
  projectsLede: 'A few pieces made in ordinary lessons, none of them assessed. <a class="ag-inline-link" href="/student-labs">Student labs</a> has the rest.',
  reviewsLede: 'What parents wrote on Google, unedited.',

  fees: {
    h2: 'Fees for AQA GCSE Maths classes',
    lede: 'The first class is free. After it, one monthly fee, smaller for a group place than for 1-on-1, with no contract and nothing taken before a weekly time is agreed.',
    free: ['A live class on the student\'s own tier', 'The first page of a mark log', 'Book with just a phone number'],
    group: ['15 to 20 students at one tier', 'One teacher from Year 10 to the exams', 'An AQA paper marked most weeks', 'Monthly note to parents on the mark log'],
    one: ['A teacher for one student', 'Planned around the student\'s references', 'Suits resits and late starters']
  },

  faq: {
    eyebrow: 'Questions about AQA 8300',
    h2: 'What families ask about AQA GCSE Maths',
    items: [
      { q: 'How many papers are there in AQA GCSE Maths 8300?', a: 'Three, at either Foundation or Higher tier. Each lasts 1 hour 30 minutes and is worth 80 marks. Paper 1 is non-calculator and Papers 2 and 3 allow a calculator, and all three must be sat in the same series.' },
      { q: 'When are the AQA GCSE Maths exams in 2027?', a: 'AQA\'s key dates page lists the June 2027 series papers on Friday 14 May, Thursday 27 May and Monday 14 June 2027, all in the morning. The November 2026 resit papers are on 4, 6 and 9 November 2026.' },
      { q: 'What do N1, A22 or G21 mean in the AQA specification?', a: 'They are AQA\'s content references. N stands for number, A for algebra, R for ratio, G for geometry and measures, P for probability and S for statistics, and each number is one topic statement. Logging lost marks against them gives a precise revision list.' },
      { q: 'How do I know if a topic is Higher only?', a: 'Each reference in the specification has three columns: basic foundation content, additional foundation content, and Higher content only. Foundation papers test the first two columns; Higher papers can test all three.' },
      { q: 'Is there a formulae sheet in AQA GCSE Maths?', a: 'Yes. Ofqual requires boards to provide a formulae sheet in the 2025, 2026 and 2027 GCSE Maths exams, including November, and has decided the sheets continue for exams from 2028 for the life of the current specification. Questions cannot be answered just by copying from the sheet.' },
      { q: 'Can my child sit AQA GCSE Maths in November?', a: 'Only if they were at least 16 on the previous 31 August, according to the AQA specification. In practice the November series is a resit series for students who have finished Year 11.' },
      { q: 'What equipment is needed for AQA GCSE Maths?', a: 'The specification lists a pencil for diagrams, a ruler, a pair of compasses and a protractor for every paper, and a calculator for Papers 2 and 3. AQA\'s June 2025 report noted freehand circles scored no marks, even on the non-calculator paper.' },
      { q: 'Can a private candidate sit AQA 8300?', a: 'Yes, through an AQA-approved school or college that accepts private candidates. The specification says private candidates must be based in the UK, and the exams officer at the centre handles the entry.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are given in UK time.' },
      { q: 'Are you connected with AQA?', a: 'No. Modern Age Coders is independent of AQA. We teach to the published 8300 specification and use AQA\'s freely available past papers and reports, and we never promise a particular grade.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More GCSE Maths pages',
    lede: 'The other boards, the two tiers, and what happens after the results.',
    items: [
      { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'AQA vs Edexcel vs OCR GCSE maths', p: 'Where the three boards really differ, line by line.' },
      { href: '/gcse-maths-foundation-vs-higher', label: 'Foundation vs Higher', p: 'How the tier decision works and who makes it.' },
      { href: '/gcse-maths-calculator-vs-non-calculator-papers', label: 'Calculator and non-calculator papers', p: 'Preparing differently for Paper 1 and Papers 2 and 3.' },
      { href: '/gcse-maths-grades-explained', label: 'GCSE maths grades explained', p: 'What grades 1 to 9 mean and where 4 and 7 sit.' },
      { href: '/gcse-maths-resit-explained', label: 'GCSE maths resits', p: 'The post-16 rule and the November series.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our hub for every UK page, maths and computing.' }
    ]
  },

  start: {
    h2: 'Book a free first AQA maths class',
    lede: 'Leave a number and we will ring at a UK time that suits. The class uses AQA questions at the student\'s tier and ends with the first lines of a mark log.',
    readFirst: 'Prefer to read first? The <a class="ag-inline-link" href="/courses/gcse-mathematics-mastery">GCSE Maths course page</a> sets out the syllabus week by week, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our method.',
    note: 'WhatsApp is the quickest way to reach us and is free from a UK mobile. Replies come from our India team, on a number starting +91.',
    formNote: 'No card details, no contract. One reply with a suggested time.'
  },

  footer: {
    cols: [
      { h4: 'GCSE Maths', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'Comparing the boards' },
        { href: '/gcse-maths-foundation-vs-higher', label: 'Foundation or Higher' },
        { href: '/gcse-maths-resit-explained', label: 'Resits' }
      ] },
      { h4: 'Also for Year 11', links: [
        { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA Computer Science 8525' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'AQA 8300 maths, taught live in UK time'
  },

  personalityCss: `
.ag-root.ag-ag .ag-hero h1 { letter-spacing: -0.02em; font-weight: 700; }
.ag-root.ag-ag .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-ag .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ag .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-ag .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-ag .ag-steps li { margin-bottom: 10px; }
`,

  dossier: {
    curriculumAuthority: 'England, AQA GCSE Mathematics 8300, specification version 1.1 September 2026: Foundation grades 1 to 5, Higher 4 to 9; three papers at one tier in one series; each 1 hour 30 minutes, 80 marks, a third of the assessment; Paper 1 non-calculator; "The mathematical demand increases as a student progresses through the paper."; references N, A, R, G, P, S (97 counted by us); columns basic foundation, additional foundation, Higher content only; November entry only for students at least 16 on the previous 31 August; entry codes 8300F and 8300H; QAN 601/4608/4; instruments; private candidates must be based in the UK; notes on simplest form, unfamiliar formulae and imperial/metric conversions. AQA key dates: 4, 6 and 9 November 2026; 14 May, 27 May and 14 June 2027. AQA June 2025 reports on 8300/1F, 1H and 2H. Ofqual formulae sheet decisions for 2025 to 2027 and from 2028.',
    localProject: 'AQA numbers its content. The page sets out the three 8300 papers and AQA\'s own November 2026 and June 2027 dates, then teaches families to read the specification as a checklist: six areas, references N1 to S6 (97 by our count), and three columns that separate Foundation from Higher-only content, with the small notes that carry rules (simplest form, given formulae, conversions). It summarises three June 2025 AQA reports, tags their weak topics to references, and works three original questions (a remainder problem under N2, a quadratic inequality under A22 and a consecutive-even-numbers proof under A6) plus an original practice set, then lays out a seven-month plan to the June 2027 series. Lesson family: a board door that turns lost marks into specification lines.',
    requiredMentions: [
      'version 1.1 document, dated September 2026',
      '601/4608/4',
      'Monday 14 June 2027, morning',
      'Wednesday 4 November 2026, morning',
      'The mathematical demand increases as a student progresses through the paper.',
      'Number references start with N',
      'we find 97 of them',
      'even on a non-calculator paper, they must bring a ruler and a pair of compasses.',
      'Some students\' poor presentation made it difficult to know what was trying to be communicated.',
      'a little more than one mark'
    ],
    sources: [
      { claim: 'AQA GCSE Mathematics 8300 specification, version 1.1 September 2026: papers, tiers, references and columns, November rule, entry codes, QAN, instruments, private candidates, content notes.', url: 'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification' },
      { claim: 'AQA 8300 key dates: November 2026 and June 2027 series paper dates and start times.', url: 'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/key-dates' },
      { claim: 'AQA Reports on the examination, June 2025, 8300/1F, 8300/1H and 8300/2H.', url: 'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/assessment-resources' },
      { claim: 'Ofqual decisions on formulae sheets in GCSE mathematics for 2025, 2026 and 2027.', url: 'https://www.gov.uk/government/consultations/proposed-changes-to-the-assessment-of-mathematics-physics-and-combined-science-gcses-in-2025-2026-and-2027' },
      { claim: 'Ofqual decision that formulae sheets continue from 2028 for the lifetime of the current specifications.', url: 'https://www.gov.uk/government/consultations/proposed-changes-to-the-assessment-of-mathematics-physics-and-combined-science-gcses' }
    ],
    rejectedClaims: [
      'Grade boundaries and entry numbers for 8300: not read at a primary source for this build, so none are quoted.',
      'JCQ common timetable: jcq.org.uk returned 403 to curl, so the dates come from AQA\'s own key dates page only.',
      'AQA\'s claim to be the largest maths board: not stated on the pages read, so not repeated.',
      'Any promised grade or improvement: declined.',
      'Past paper questions: described by topic from AQA\'s reports, never reproduced.'
    ]
  }
};
