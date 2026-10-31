'use strict';
// HSPT math prep (ag- exam door; UK and US exams cluster, row US053). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Every fact read raw with curl on 31 October 2026 from
// Scholastic Testing Service (STS), the publisher; copies in keyword-research-2026-09/uk-us-gap/src/hspt-math-prep/:
//  - ststesting.com/hsp/ (hsp.html): "Since 1955"; "the first test battery designed specifically to deal with selection
//    and/or placement of students entering high school"; Closed HSPT "a secure test, with a new edition produced
//    annually", only to high schools "as part of a lease/score program"; Open HSPT for local scoring; Pre-HSPT "this
//    seventh grade edition"; optional science test, scores "not included in the computation of the Battery Composite";
//    CSQ, standard scores, national and local percentiles, grade equivalents; Rasch model; E-Score, online registration.
//  - ststesting.com/HSPT/par_main, par_prep, par_und, par_schools, pf1 to pf9 (parent pages): "a comprehensive placement
//    test for eighth graders for placement in the ninth grade"; "admissions, scholarship selection, and curriculum
//    placement"; "Calculators are not permitted for the Mathematics subtest."; "there is no penalty for answering
//    incorrectly"; time limits set per subtest, administrators announce half time; "STS is in no way affiliated with any
//    of these products and does not endorse them"; "a well-rounded education is the best form of test preparation";
//    percentiles "range from 1 (low) to 99 (high)", "A percentile rank of 50 is exactly average"; composites "not the
//    average of its part scores"; "Each school evaluates your scores in its own way."; "STS does not coordinate national
//    testing days"; "STS recommends that the HSPT® should only be taken once by each student"; "STS does NOT send
//    results directly to the student's home"; accommodations set by each school.
//  - HSPT Interpretive Manual PDF (ststesting.com/hp_int_sts.pdf, interp.pdf): five multiple-choice subtests; Verbal
//    Skills 60 items, Quantitative Skills 52 items ("Number series, number manipulations, and both geometric and
//    nongeometric quantitative comparison items"), Reading 62, Mathematics 64 ("numbers & numeration, measurements,
//    geometry, algebra, and statistics"), Language 60; calculators "not to be used" in both; "A new form of the Closed
//    HSPT is published annually"; GE 10.4 example; "Both the Quantitative and Mathematics scores are frequently considered
//    for placement in math courses"; Performance Profile skill names (Sequence, Reasoning, Geometric Comparison,
//    Non-Geo. Comparison; Ratio/Proportion, Perimeter/Area/Volume, Equality/Inequality ...).
// Diocesan pages: schools.archchicago.org and sfarchdiocese.org returned HTTP 403; not circumvented; no local dates.
// Our own material, labelled on the page: three worked examples (13; a = c > b; 60 gallons), twelve practice items with
// answers checked in Python (63, 47, 1, 21, 14, a = c < b, square larger, 7, 2,500, 6, 1/2, 15), a fall plan and a
// grade 7 plan. Lesson family: number series and quantitative comparison. No STS sample item reproduced.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'TEST PREP', blurb: 'HSPT math for eighth graders: the Quantitative Skills and Mathematics subtests from the publisher\'s own manual, scoring, and twelve original practice items.' },
  slug: 'hspt-math-prep',
  code: 'hsx',
  accent: '#496F3B',
  accentRationale: 'HSPT math prep: a fern green #496F3B from the US allocation table, 5.47:1 on paper #FBF8F2, set apart from the SHSAT olive and the TACHS slate',
  pageType: 'market',
  priceSubject: 'maths',
  market: US,
  routeLabel: 'HSPT math prep',
  title: 'HSPT Math Prep and Tutoring: Quantitative and Math',
  description: 'HSPT math prep for grade 8: the 52-item Quantitative Skills and 64-item Mathematics subtests, how STS scores them, and twelve original practice items.',
  ogDescription: 'The High School Placement Test has two subtests that use numbers: one tests reasoning, one tests school math. What Scholastic Testing Service publishes about both, and how to prepare.',
  twitterDescription: 'HSPT Quantitative and Math subtests, explained from the STS manual.',
  pageName: 'HSPT Math Prep',
  webPageDescription: 'A guide for families to the math-related parts of the High School Placement Test (HSPT) from Scholastic Testing Service\'s own pages and Interpretive Manual, with worked examples and original practice items.',
  courseDescription: 'Live online HSPT math classes for students in grades 7 and 8, covering the Quantitative Skills and Mathematics subtests, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'HSPT math prep',
  navLinks: [
    { href: '#subtests', label: 'Subtests' },
    { href: '#quantitative', label: 'Quantitative' },
    { href: '#mathematics', label: 'Mathematics' },
    { href: '#scoring', label: 'Scoring' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grade 8 &middot; The High School Placement Test',
  h1: 'HSPT math prep and tutoring',
  lede: 'The HSPT is an entrance test that high schools across the US, many of them in Catholic diocesan programs, give to eighth graders, and it tests numbers twice. Quantitative Skills asks a student to reason with numbers: series, manipulations and comparisons. Mathematics checks the school math learned through grade 8. This page describes both from the publisher, Scholastic Testing Service, read on 31 October 2026, explains how the scores work, and teaches each item style with worked examples and practice items of our own.',
  secondaryCta: { href: '#quantitative', label: 'See the Quantitative subtest' },
  wa: 'Hello Modern Age Coders, my eighth grader is taking the HSPT and needs help with the Quantitative and Math parts. Could we book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; reasoning first, never copied items',
  spec: [
    ['Publisher', 'Scholastic Testing Service'],
    ['Who sits it', 'Eighth graders entering grade 9'],
    ['Quantitative Skills', '52 items'],
    ['Mathematics', '64 items'],
    ['Calculator', 'Not permitted'],
    ['Wrong answers', 'No penalty'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'The HSPT (High School Placement Test) is published by Scholastic Testing Service and given by high schools and dioceses to eighth graders for admission, scholarships and ninth grade placement. Two of its five subtests use numbers: Quantitative Skills (52 items) and Mathematics (64 items), both without a calculator. Modern Age Coders teaches both live online, in a batch or 1-on-1.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses for HSPT math',
    lede: 'Middle school math for the Mathematics subtest, plus algebra and a reasoning course for Quantitative Skills.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'HSX / 01', title: 'Middle school mathematics', note: 'Grades 6 to 8. Numbers, measurement, geometry and statistics.' },
      { course: 'algebra-foundations-masterclass', code: 'HSX / 02', title: 'Algebra foundations', note: 'Equations, inequalities, functions and coordinates.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'HSX / 03', title: 'Problem solving', note: 'Patterns and logic for the number series items.' }
    ]
  },

  sections: [
    {
      id: 'subtests', tint: 'tint', eyebrow: 'The battery',
      h2: 'What is on the HSPT, subtest by subtest?',
      lede: 'The HSPT is five multiple-choice subtests taken in one sitting. STS groups two of them as cognitive skills, which measure reasoning, and three as basic skills, which measure what has been learned.',
      body: [
        { kind: 'table', caption: 'The five HSPT subtests (HSPT Interpretive Manual, Scholastic Testing Service, read 31 October 2026)', head: ['Subtest', 'Group', 'Items', 'What STS says it measures'], numCols: [2], rows: [
          ['Verbal Skills', 'Cognitive', '60', 'Synonyms, antonyms, analogies, classifications and logical reasoning'],
          ['Quantitative Skills', 'Cognitive', '52', 'Number series, number manipulations, geometric and nongeometric comparisons'],
          ['Reading', 'Basic', '62', 'Comprehension, inference and vocabulary in context'],
          ['Mathematics', 'Basic', '64', 'Numbers and numeration, measurements, geometry, algebra and statistics'],
          ['Language', 'Basic', '60', 'Punctuation, capitalization, spelling, grammar, usage and composition']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Two subtests, two kinds of math',
          left: [
            'Quantitative Skills is a reasoning subtest. Its items ask a student to spot the rule in a number series or decide which of three quantities is largest, and they reward flexible thinking more than memorized procedures.',
            'Mathematics is an achievement subtest. The manual says it assesses "elements of a high school curriculum" and the concepts that should have been learned through eighth grade: arithmetic, measurement, geometry, algebra and statistics.'
          ],
          rightH3: 'Why both matter for placement',
          right: [
            'STS reports that "Both the Quantitative and Mathematics scores are frequently considered for placement in math courses". So the HSPT can affect not only an offer but which ninth grade math class a student starts in.',
            'A school may also add one optional 40-item test, such as Science, at the end. Its score is reported separately and is not part of the battery Composite.'
          ] },
        { kind: 'source', html: 'Sources: Scholastic Testing Service <a class="ag-inline-link" href="https://www.ststesting.com/hp_int_sts.pdf" rel="noopener" target="_blank">HSPT Interpretive Manual</a> and <a class="ag-inline-link" href="https://www.ststesting.com/hsp/" rel="noopener" target="_blank">HSPT overview</a>, read 31 October 2026. HSPT is a registered trademark of Scholastic Testing Service; Modern Age Coders is not affiliated with STS.' }
      ]
    },
    {
      id: 'quantitative', tint: 'deep', eyebrow: 'Quantitative Skills',
      h2: 'What does the HSPT Quantitative Skills subtest test?',
      lede: 'Quantitative Skills has 52 items in four styles named in STS score reports: sequences, reasoning, geometric comparison and non-geometric comparison. None needs advanced math, and all of them punish careless reading.',
      body: [
        { kind: 'table', caption: 'The four Quantitative Skills item styles (skill names from the STS Performance Profile; descriptions ours)', head: ['Style', 'What the student does', 'Typical slip'], rows: [
          ['Sequence (number series)', 'Find the rule in a list of numbers and give the next term, or a missing one', 'Seeing one pattern when two alternate'],
          ['Reasoning (number manipulation)', 'Translate a sentence such as "6 more than one third of 45" into arithmetic', 'Doing the operations in the order they are read'],
          ['Geometric comparison', 'Compare lengths, areas or shaded parts in figures', 'Trusting the picture instead of the numbers'],
          ['Non-geometric comparison', 'Evaluate three expressions and choose the true statement about them', 'Stopping after evaluating two of three']
        ] },
        { kind: 'p', mt: true, html: '<b>Worked example 1, a series with two rules (ours).</b> What comes next in 4, 9, 7, 12, 10, 15, ...? The differences are +5, &minus;2, +5, &minus;2, +5, so the next step is &minus;2, and the answer is 13. A student who looks only at every other term sees 4, 7, 10 and 9, 12, 15, two counts by 3, which confirms it. Checking a pattern two ways is the habit we drill most for this subtest.' },
        { kind: 'p', html: '<b>Worked example 2, a comparison (ours).</b> Examine (a) 2 to the power 5, (b) 5 squared and (c) 4 cubed divided by 2. Which is true: a is greater than b, b equals c, or a equals c and both are greater than b? Evaluate all three before reading the choices: (a) 32, (b) 25, (c) 64 / 2 = 32. So a equals c and both exceed b. The trap is treating 2 to the power 5 and 5 squared as the same size because they use the same two digits.' },
        { kind: 'two', mt: true,
          leftH3: 'How we teach series',
          left: [
            'Every series lesson starts with a written difference row under the numbers. If the differences are not constant, the student writes the differences of the differences, then tries ratios, then tries splitting odd and even positions.',
            'Four checks in a fixed order turn a guessing game into a routine. Most series at this level fall to one of the four.'
          ],
          rightH3: 'How we teach comparisons',
          right: [
            'For every comparison item the rule is to write the value of (a), (b) and (c) in the margin first, and only then read the answer choices. Reading the choices first invites the student to test one statement and stop.',
            'For figures, we teach students to label every length they can calculate. A figure that looks half shaded may be three eighths shaded once the numbers are written in.'
          ] }
      ]
    },
    {
      id: 'mathematics', tint: 'tint', eyebrow: 'Mathematics',
      h2: 'What math is on the HSPT Mathematics subtest?',
      lede: 'The Mathematics subtest has 64 multiple-choice items across five areas, all without a calculator. STS describes it as covering computation, problem solving and knowledge of important concepts.',
      body: [
        { kind: 'table', caption: 'HSPT Mathematics areas and the skills STS lists under each (HSPT Interpretive Manual, Performance Profile section)', head: ['Area', 'Skills named by STS'], rows: [
          ['Numbers and numeration', 'Procedural operations; roots, exponents and place value; ratio and proportion; properties, factors and multiples; word problems'],
          ['Measurements', 'Weight, length, dry and liquid measure; time and temperature; metric and money conversions'],
          ['Geometry', 'Points, lines and angles; plane and cubic figures; perimeter, area and volume; diameter, radius and circumference; congruence, symmetry and the Pythagorean theorem'],
          ['Algebra', 'Equality and inequality; functions and coordinates'],
          ['Statistics and probability', 'Mean, median, mode and range; probability; data, graphs and tables']
        ] },
        { kind: 'p', mt: true, html: '<b>Worked example 3, a fraction word problem (ours).</b> A tank is three eighths full. After 15 gallons are added it is five eighths full. What does the tank hold when full? The 15 gallons filled five eighths minus three eighths, which is two eighths, or one quarter, of the tank. If one quarter is 15 gallons, the whole is 4 x 15 = 60 gallons. Students who try to set up an equation with the full capacity as x get there too, but the picture of quarters is faster without a calculator.' },
        { kind: 'two', mt: true,
          leftH3: 'Measurement is the forgotten area',
          left: [
            'Unit conversion often gets little class time in grades 7 and 8, yet STS lists weight, liquid measure, time, temperature and metric conversion as their own skills. We give it a dedicated week.',
            'A student should know without thinking that a kilogram is 1,000 grams, a foot is 12 inches, a yard is 3 feet and a gallon is 4 quarts. Those facts are ours to teach, not given on the test.'
          ],
          rightH3: 'Algebra at the grade 8 level',
          right: [
            'The algebra on the HSPT is linear: one-variable equations and inequalities, reading a point on a coordinate grid, and recognizing a simple function rule. It sits well inside a solid grade 8 course.',
            'The manual also cautions that a grade equivalent of 10.4 on the Math subtest does not mean a student can do tenth grade math; it means they do eighth grade math as well as an average tenth grader does.'
          ] },
        { kind: 'source', html: 'Source: Scholastic Testing Service <a class="ag-inline-link" href="https://www.ststesting.com/hp_int_sts.pdf" rel="noopener" target="_blank">HSPT Interpretive Manual</a>, read 31 October 2026. Skill names are from the manual&rsquo;s sample Performance Profile; the worked examples are ours.' }
      ]
    },
    {
      id: 'scoring', tint: 'deep', eyebrow: 'Scores',
      h2: 'How is the HSPT scored, and is there a penalty for guessing?',
      lede: 'There is no penalty for a wrong answer. STS counts correct answers for each subtest, converts that raw score to a standard score and a national percentile, and builds composite scores the same way.',
      body: [
        { kind: 'table', caption: 'The HSPT scores a family may see (STS parent pages and Interpretive Manual, read 31 October 2026)', head: ['Score', 'What it is, per STS'], rows: [
          ['Raw score', 'The number of items answered correctly in a subtest; nothing is subtracted for wrong answers'],
          ['Standard score', 'The raw score converted to a common scale, so different yearly forms compare fairly'],
          ['National percentile', 'The percentage of a national sample scoring below the student; from 1 to 99, with 50 exactly average'],
          ['Total Cognitive Skills', 'Built from Verbal and Quantitative'],
          ['Total Basic Skills', 'Built from Reading, Mathematics and Language'],
          ['Battery Composite', 'All five subtests; scaled on its own, so not the average of its parts'],
          ['Cognitive Skills Quotient (CSQ)', 'From the Verbal and Quantitative scores and the student&rsquo;s age; read like a traditional IQ score']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What that means for test day',
          left: [
            'Because a wrong answer costs nothing, a blank answer is the only sure way to lose a point. STS&rsquo;s own advice is to "Answer every question", making a sensible guess when unsure.',
            'Time limits are set for each subtest, and STS says administrators should announce the halfway point. We teach students to use that announcement as a checkpoint: past halfway in the items, or behind?'
          ],
          rightH3: 'Who sees the scores',
          right: [
            'STS does not send results home. The school or diocese that gave the test decides which reports to order and what to share, which is why two families can receive different-looking reports.',
            'Each school also uses scores in its own way. As the publisher puts it, "Each school evaluates your scores in its own way." Ask the school directly how it uses the Quantitative and Mathematics scores.'
          ] },
        { kind: 'source', html: 'Sources: STS <a class="ag-inline-link" href="https://www.ststesting.com/HSPT/" rel="noopener" target="_blank">HSPT Parent&rsquo;s Page</a> (scoring, preparing, how schools use scores, FAQs) and the Interpretive Manual, read 31 October 2026.' }
      ]
    },
    {
      id: 'dates', tint: 'tint', eyebrow: 'Dates and sign-up',
      h2: 'When is the HSPT, and how do you register?',
      lede: 'There is no national HSPT date. STS says it "does not coordinate national testing days"; each school or diocese chooses its own day and runs its own registration.',
      body: [
        { kind: 'ol', items: [
          '<b>List the high schools.</b> Write down every school your child may apply to and check each one&rsquo;s admissions page for its HSPT date.',
          '<b>Check for a diocesan program.</b> In some areas a group of high schools tests together under a diocesan education office, and a student can code several schools on one answer sheet.',
          '<b>Register with the school.</b> STS says the HSPT is ordered and administered by schools or dioceses, so registration goes through them, sometimes on STS&rsquo;s online registration system.',
          '<b>Ask about accommodations early.</b> STS does not grant accommodations; each school has its own policy and may ask for documents.',
          '<b>Code the answer sheet carefully.</b> STS cannot change a miscoded high school choice; a parent has to wait for results and ask the testing school to forward them.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Retakes',
          left: [
            'STS recommends that each student takes the HSPT only once. A school may allow a retest in extenuating circumstances, but that is decided case by case.',
            'So the realistic plan is one well-prepared sitting, usually in the fall or winter of grade 8, depending on the schools on your list.'
          ],
          rightH3: 'The seventh grade version',
          right: [
            'The Pre-HSPT is a seventh grade edition that some high schools give as a practice run, scored against seventh grade norms. STS offers it only to high schools, not to families directly.',
            'If a school near you runs it, a grade 7 student gains a real rehearsal of the format a year early. Ask the high school.'
          ] },
        { kind: 'source', html: 'Source: STS <a class="ag-inline-link" href="https://www.ststesting.com/HSPT/" rel="noopener" target="_blank">HSPT FAQs for families</a> and <a class="ag-inline-link" href="https://www.ststesting.com/hsp/" rel="noopener" target="_blank">HSPT overview</a>, read 31 October 2026. Diocesan pages for Chicago and San Francisco refused our request, so no local dates are printed here.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice set',
      h2: 'Twelve original HSPT-style math practice items',
      lede: 'Our own items: seven in the Quantitative Skills styles and five Mathematics items. They are not STS items. Work without a calculator and answer every one.',
      body: [
        { kind: 'ol', items: [
          '<b>What number comes next: 3, 7, 15, 31, ...?</b>',
          '<b>What number comes next: 2, 5, 11, 20, 32, ...?</b>',
          '<b>What number comes next: 81, 27, 9, 3, ...?</b>',
          '<b>What number is 6 more than one third of 45?</b>',
          '<b>What number is 4 less than 25 percent of 72?</b>',
          '<b>Examine (a) 3 squared + 4 squared, (b) (3 + 4) squared and (c) 5 squared. Which is true?</b> Choose from: a is greater than b; a equals c and both are less than b; b equals c.',
          '<b>A square has side 4 cm and a circle has radius 2 cm. Which has the larger area?</b>',
          '<b>Solve 5x minus 8 = 2x + 13.</b>',
          '<b>How many grams are in 2.5 kilograms?</b>',
          '<b>What is the median of 7, 3, 9, 3, 12 and 5?</b>',
          '<b>A bag has 3 red, 5 green and 2 yellow counters. What is the probability that one drawn at random is not green?</b>',
          '<b>A right triangle has legs of 9 and 12. How long is the hypotenuse?</b>'
        ] },
        { kind: 'table', mt: true, caption: 'Answers and the reasoning (ours; each answer checked in Python)', head: ['Item', 'Answer', 'Reasoning'], rows: [
          ['1', '63', 'Each term is double the last plus 1'],
          ['2', '47', 'Differences grow by 3: 3, 6, 9, 12, then 15'],
          ['3', '1', 'Divide by 3 each time'],
          ['4', '21', 'One third of 45 is 15, then add 6'],
          ['5', '14', '25 percent of 72 is 18, then subtract 4'],
          ['6', 'a equals c and both are less than b', '25, 49 and 25: squaring a sum is not the sum of the squares'],
          ['7', 'The square', '16 against 4 pi, which is about 12.6'],
          ['8', 'x = 7', '3x = 21'],
          ['9', '2,500 grams', '1 kilogram is 1,000 grams'],
          ['10', '6', 'Sorted: 3, 3, 5, 7, 9, 12; the middle pair 5 and 7 average to 6'],
          ['11', '1/2', '5 of the 10 counters are not green'],
          ['12', '15', '9, 12, 15 is the 3, 4, 5 triangle scaled by 3']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The two items that teach the most',
          left: [
            'Item 6 shows why comparison items exist: many students assume (3 + 4) squared equals 3 squared + 4 squared. Writing all three values first exposes it at once.',
            'Item 10 has an even number of values, so the median is the mean of the middle two. Students who pick 7 or 5 have usually forgotten to sort the list.'
          ],
          rightH3: 'Make your own next set',
          right: [
            'Change one number in each item and solve again: 4, 9, 19, 39 for item 1, or 30 percent of 80 for item 5. A method that survives a new number is learned.',
            'Then write a series of your own and swap it with a friend. Inventing a fair series is the fastest way to recognize the rules.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'A plan',
      h2: 'An eight-week HSPT math study plan',
      lede: 'Our plan for a grade 8 student with about two months before their school&rsquo;s test date, one live class a week and short practice on most days.',
      body: [
        { kind: 'table', caption: 'Eight weeks to the HSPT (our plan)', head: ['Week', 'Quantitative Skills', 'Mathematics'], rows: [
          ['1', 'Number series: difference rows', 'Fractions, decimals, percents'],
          ['2', 'Series with two rules; ratio series', 'Ratio, proportion and word problems'],
          ['3', 'Number manipulation sentences', 'Exponents, roots and place value'],
          ['4', 'Non-geometric comparisons', 'Measurement and unit conversion'],
          ['5', 'Geometric comparisons', 'Angles, area, volume, circles'],
          ['6', 'Mixed timed sets', 'Equations, inequalities, coordinates'],
          ['7', 'Mixed timed sets', 'Statistics, probability, graphs'],
          ['8', 'Light review; sleep and logistics', 'Light review of weakest area']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grade 7', p: 'Build the Mathematics areas slowly; a Pre-HSPT if a school offers it.' },
          { h3: 'Early grade 8', p: 'The eight-week plan, timed to your school&rsquo;s date.' },
          { h3: 'After the test', p: 'Keep going in math: placement depends on it too.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four steps to HSPT-ready math',
    lede: 'The publisher&rsquo;s own advice is that a well-rounded education is the best preparation. These steps are how we build that for numbers.',
    table: { caption: 'From school math to HSPT math (our steps)', head: ['Step', 'How it shows'], rows: [
      ['1. Fluent', 'Fractions, percents and conversions without a calculator'],
      ['2. Pattern-aware', 'Writes a difference row before guessing a series'],
      ['3. Thorough', 'Evaluates all three quantities in a comparison'],
      ['4. Complete', 'Leaves no blank answers, because blanks score zero']
    ] },
    left: { h3: 'For parents', ps: [
      'On prep products, the publisher writes that "STS is in no way affiliated with any of these products and does not endorse them", and advises families to avoid expensive materials. We are one of those independent providers, and we agree that broad math skill matters most.',
      'Ask each high school how it uses Quantitative and Mathematics scores. The answer changes what to emphasize.'
    ] },
    right: { h3: 'For students', ps: [
      'Read the whole question, then the choices. On comparisons, write all three values first.',
      'Mark your answer sheet against the item number every few questions. One skipped line can shift every answer after it.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for the grade 7 to grade 9 years',
    lede: 'Taught live online, as a group class or one to one, with the same teacher each week.',
    bands: [
      { num: 'I', h3: 'The HSPT years', sub: 'Grades 7 and 8', courses: [
        { code: 'HSX / CORE / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school math', blurb: 'All five Mathematics areas.' },
        { code: 'HSX / CORE / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Linear algebra, properly.' },
        { code: 'HSX / CORE / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Patterns and logic.' }
      ] },
      { num: 'II', h3: 'Speed and stretch', sub: 'For confident students', courses: [
        { code: 'HSX / STR / 01', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Speed calculation', blurb: 'Mental arithmetic tools.' },
        { code: 'HSX / STR / 02', slug: 'middle-school-math-competitions-course', title: 'Middle school competitions', blurb: 'Harder problems, same skills.' },
        { code: 'HSX / STR / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data, graphs and chance.' }
      ] },
      { num: 'III', h3: 'Into high school', sub: 'Grade 9 and up', courses: [
        { code: 'HSX / HS / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school math', blurb: 'Algebra 1 to calculus.' },
        { code: 'HSX / HS / 02', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Python and math together.' },
        { code: 'HSX / HS / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A first real language.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live HSPT math classes around the school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in your own time zone.' },
      { time: 'Weekends', l: 'Longer timed sets suit a Saturday morning.' },
      { time: '1-on-1', l: 'Built around one student&rsquo;s school list and date.' }
    ],
    cells: [
      { h3: 'Difference rows', p: 'A fixed routine for every series.' },
      { h3: 'Three-value rule', p: 'Every comparison fully evaluated.' },
      { h3: 'Unit facts', p: 'Measurement drilled, not assumed.' },
      { h3: 'No blanks', p: 'Guessing taught as a skill.' },
      { h3: 'Any state', p: 'Live online, coast to coast.' },
      { h3: 'Class size', p: 'Fifteen to twenty in a batch, or one student.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Beyond test prep, our students build things with math and code. See the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from parents on Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'Each high school or diocese sets and collects any HSPT testing fee; ours covers only the classes. Billing is monthly, so classes can run for the weeks before your school&rsquo;s date and then stop.',
    free: ['A free first class', 'A short series and comparison check', 'No card details'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A private math teacher', 'Paced to your school&rsquo;s test date', 'Items chosen for your child']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'HSPT math: what parents ask',
    items: [
      { q: 'How many math questions are on the HSPT?', a: 'Two subtests use numbers. According to the STS Interpretive Manual, Quantitative Skills has 52 items and Mathematics has 64 items, all multiple choice.' },
      { q: 'What is the difference between HSPT Quantitative and Math?', a: 'Quantitative Skills is a reasoning subtest with number series, number manipulations and geometric and nongeometric comparisons. Mathematics is an achievement subtest covering numbers, measurement, geometry, algebra and statistics.' },
      { q: 'Can you use a calculator on the HSPT?', a: 'No. STS states that calculators are not permitted for the Mathematics subtest, and its manual says calculators are not to be used on Quantitative Skills either. Scratch paper or the test booklet can be used for working.' },
      { q: 'Is there a penalty for guessing on the HSPT?', a: 'No. STS counts only correct answers and subtracts nothing for wrong ones, so a student should answer every item.' },
      { q: 'When is the HSPT given?', a: 'There is no national date. STS says each school or diocese chooses its own testing day, so check the admissions page of every high school on your list.' },
      { q: 'Can my child take the HSPT more than once?', a: 'STS recommends taking it only once. A school may allow a retest in extenuating circumstances, decided case by case.' },
      { q: 'What is a good HSPT score?', a: 'STS reports national percentiles from 1 to 99, where 50 is exactly average, but each school uses scores in its own way. Ask the schools on your list what they look at; we do not promise any score.' },
      { q: 'Do you use real HSPT questions?', a: 'No. The Closed HSPT is a secure test with a new form each year. We write our own items in the same styles and never reproduce STS material.' },
      { q: 'When do classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with Scholastic Testing Service?', a: 'No. Modern Age Coders is independent and has no tie to STS, any diocese or any high school. HSPT is a trademark of Scholastic Testing Service.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for eighth graders',
    lede: 'Other entrance tests and grade-level help.',
    items: [
      { href: '/online-math-tutor-7th-grade', label: '7th grade math tutor', p: 'A year early, for the Pre-HSPT.' },
      { href: '/isee-ssat-math-prep', label: 'ISEE and SSAT math', p: 'Independent school entrance tests.' },
      { href: '/online-math-tutor-8th-grade', label: '8th grade math tutor', p: 'The year the Mathematics subtest reaches.' },
      { href: '/algebra-tutoring-online-usa', label: 'Algebra tutoring', p: 'Equations and inequalities one to one.' },
      { href: '/geometry-tutoring-online-usa', label: 'Geometry tutoring', p: 'Area, volume and the Pythagorean theorem.' },
      { href: '/math-competitions-for-middle-school-students', label: 'Middle school math competitions', p: 'For students who enjoy the reasoning items.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child&rsquo;s grade and their high schools&rsquo; test dates. The teacher gives a short check across series, comparisons and core math, then suggests where the weeks should go.',
    readFirst: 'Curious how a lesson works? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or see <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'Our teachers work from India over live video, scheduled for US after-school hours and weekends. WhatsApp tends to be the quickest way to reach us.',
    formNote: 'Booking the first class is free; no card is asked for.'
  },

  footer: {
    cols: [
      { h4: 'Entrance tests', links: [
        { href: '/isee-ssat-math-prep', label: 'ISEE and SSAT math' },
        { href: '/mathcounts-preparation', label: 'MATHCOUNTS preparation' },
        { href: '/math-olympiad-amc-tutoring', label: 'AMC and olympiad tutoring' },
        { href: '/homeschool-math-curriculum-usa', label: 'Homeschool math' }
      ] },
      { h4: 'By grade', links: [
        { href: '/online-math-tutor-6th-grade', label: '6th grade math tutor' },
        { href: '/online-math-tutor-7th-grade', label: '7th grade math tutor' },
        { href: '/online-math-tutor-8th-grade', label: '8th grade math tutor' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Write the difference row first'
  },

  personalityCss: `
.ag-root.ag-hsx .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-hsx .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-hsx .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-hsx .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-hsx .ag-steps li { line-height: 1.62; }
.ag-root.ag-hsx .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Scholastic Testing Service, the HSPT publisher, read raw on 31 October 2026: the HSPT overview (since 1955, Closed, Open and Pre-HSPT, new secure form each year, optional tests outside the composite, CSQ and score types); the Parent\'s Page (purpose for grade 8, preparation tips, calculators not permitted, no penalty for wrong answers, STS not affiliated with prep products, well-rounded education, scoring and percentiles 1 to 99, composites not averages, each school evaluates scores its own way, no national testing days, take only once, no results sent home, accommodations by school, miscoded answer sheets); the HSPT Interpretive Manual (five subtests with 60, 52, 62, 64 and 60 items, Quantitative and Mathematics content, calculators not to be used, Performance Profile skill names, grade equivalent caution, placement use). Diocesan pages for Chicago and San Francisco returned 403.',
    localProject: 'Three original worked examples (series answer 13; comparison a equals c greater than b; 60 gallon tank), twelve original practice items with answers checked in Python, an eight-week plan. Lesson family: number series and quantitative comparison.',
    requiredMentions: ['STS is in no way affiliated with any of these products', 'Both the Quantitative and Mathematics scores are frequently considered for placement in math courses', 'does not coordinate national testing days', 'Each school evaluates your scores in its own way.', 'Number series, number manipulations, geometric and nongeometric comparisons', 'Numbers and numeration, measurements, geometry, algebra and statistics', 'from 1 to 99, with 50 exactly average', 'a grade equivalent of 10.4 on the Math subtest', 'the whole is 4 x 15 = 60 gallons', 'Differences grow by 3: 3, 6, 9, 12, then 15', 'Write the difference row first'],
    sources: [
      { claim: 'HSPT history, Closed, Open and Pre-HSPT, annual secure form, optional tests and score types.', url: 'https://www.ststesting.com/hsp/' },
      { claim: 'HSPT Parent\'s Page: purpose, preparation tips, calculators, no guessing penalty, scoring, school use of scores, FAQs on dates, retakes, results and accommodations.', url: 'https://www.ststesting.com/HSPT/' },
      { claim: 'HSPT Interpretive Manual: five subtests and item counts, Quantitative and Mathematics content, skill names, grade equivalents and placement use.', url: 'https://www.ststesting.com/hp_int_sts.pdf' }
    ],
    rejectedClaims: [
      'HSPT subtest time limits in minutes: not stated on the STS pages read (only that time limits are set per subtest); none printed.',
      'Regional HSPT dates from dioceses: schools.archchicago.org and sfarchdiocese.org returned HTTP 403 on 31 October 2026; not circumvented; families are told to check each school.',
      'Item counts per skill from the sample Performance Profile: a sample report, not a test blueprint; skill names used, counts not printed.',
      'Score cutoffs, scholarship thresholds and testing fees: not published by STS and not printed.',
      'HSPT preview sample items: available to high schools only and not reproduced; all items on the page are original.',
      'The optional religion test: left off the page; only the optional Science test is mentioned.',
      'Any affiliation with STS, a diocese or a school: none, stated on the page.'
    ]
  }
};
