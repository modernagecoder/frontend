'use strict';
// GCSE Statistics tutor online (ag- maths door, England; UK and US exams cluster Phase 2, row UK023).
// Sources, read raw on 31 October 2026 (curl -sL; PDFs through PyPDF; raw copies in
// keyword-research-2026-09/uk-us-gap/src/gcse-statistics-tutor-online/):
//  - AQA GCSE Statistics 8382 specification, "Version 1.2 June 2026" (cdn.sanity.io file linked from
//    aqa.org.uk/subjects/mathematics/gcse/statistics-8382/specification). Verbatim: "GCSE Statistics has a Foundation
//    tier (grades 1 – 5) and a Higher tier (grades 4 – 9). Students must take two question papers at the same tier."
//    (dashes removed on the page); each paper "Written exam: 1 hour 45 minutes", "80 marks", "50% of GCSE";
//    "Multiple choice, short answer and a Statistical Enquiry Cycle (SEC) question."; "A student sitting the Higher
//    tier who just fails to achieve grade 4 will be awarded an allowed grade 3."; "The Statistical Enquiry Cycle (SEC)
//    underpins the study of Statistics."; five stages "initial planning", "data collection", "data processing and
//    presentation", "interpretation of results", "evaluation and review"; "Assessment objectives (AOs) are set by
//    Ofqual and are the same across all GCSE Statistics specifications and all exam boards."; AO1 55, AO2 25, AO3 20
//    (approx %, +/-3%); "This specification is designed to be taken over two years."; exams "every May/June for the
//    life of the specification"; "The Ofqual qualification accreditation number (QAN) is 603/1177/0."; calculator
//    minimum "four rules", "square", "square root", "reciprocal function", "power function", "brackets", "a memory
//    facility"; "Students may use the statistical functions on their calculator, where appropriate, if they wish but
//    this is not a requirement of the specification."; topics including Spearman's rank correlation, weighted index
//    numbers, Petersen capture/recapture, moving averages, binomial, quality assurance sampling; "private candidate
//    may be self-taught, home schooled or have private tuition".
//  - AQA 8382 key dates page: June 2027 series 8382/1F and 1H 7 Jun, "Start time: PM | Duration: 1h 45m"; 8382/2F and
//    2H 16 Jun, "Start time: AM | Duration: 1h 45m".
//  - Pearson Edexcel Level 1/Level 2 GCSE (9-1) in Statistics 1ST0 specification, Issue 2, December 2017
//    (qualifications.pearson.com). Verbatim: "Students must complete all assessment in May/June in any single year";
//    Papers 1ST0/1F, 1H, 2F, 2H "Written examination: 1 hour 30 minutes", "50% of the qualification", "80 marks";
//    content "The collection of data", "Processing, representing and analysing data", "Probability"; AO1 55, AO2 25,
//    AO3 20; per paper AO1 27.5, AO2 12.5, AO3 10; "There is no formulae sheet for Foundation tier."; Higher sheet "on
//    page 2" with skew, standard deviation and Spearman's rank; calculators: "They are expected to be familiar with the
//    statistical function keys on their scientific calculators."; "The QN for this qualification is: 603/1084/4".
//  - Pearson Edexcel GCSE Summer 2027 Examination Timetable FINAL (subject view): "1ST0 1F Paper 1 Foundation Tier
//    Monday 07 June Afternoon 1h 30m"; "1ST0 2F Paper 2 Foundation Tier Wednesday 16 June Morning 1h 30m" (the week view
//    prints 1h 20m for the same papers; the page follows the specification and the subject view, 1 hour 30 minutes).
// Our own: the comparison of the two specifications in one table, the three worked examples, the practice set, the
// SEC checklist and the plan.
// Spine: GCSE Statistics is a second maths GCSE built on the statistical enquiry cycle. The two English boards share
// Ofqual's assessment objectives and the June 2027 dates but differ in paper length and calculator expectations; the
// page teaches the cycle as the organising idea. Lesson family: a two-board subject door built on a method cycle.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'GCSE STATISTICS', blurb: 'AQA 8382 and Edexcel 1ST0 side by side: two papers each, one enquiry cycle, and the June 2027 dates.' },
  slug: 'gcse-statistics-tutor-online',
  code: 'gs',
  accent: '#733746',
  accentRationale: 'GCSE Statistics: a deep mulberry red (#733746, 8.38:1 on #FBF8F2), a data-chart colour kept dark and muted, distinct from the CCEA brick red and the OCR umber',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'GCSE Statistics tutor online',
  title: 'GCSE Statistics Tutor Online | AQA 8382 and Edexcel 1ST0',
  description: 'GCSE Statistics tutor online for AQA 8382 and Edexcel 1ST0: the papers, the June 2027 dates, the statistical enquiry cycle and worked Spearman and capture examples.',
  ogDescription: 'GCSE Statistics, AQA 8382 or Edexcel 1ST0: two papers, one enquiry cycle. The boards compared, the 2027 dates, and original worked examples.',
  twitterDescription: 'GCSE Statistics: AQA 8382 and Edexcel 1ST0 compared, the June 2027 dates, the enquiry cycle and worked examples.',
  pageName: 'GCSE Statistics Tutor Online',
  webPageDescription: 'Live online teaching for GCSE Statistics, AQA 8382 and Pearson Edexcel 1ST0, at Foundation and Higher tier, built around the statistical enquiry cycle.',
  courseDescription: 'Live online GCSE Statistics classes for AQA 8382 and Pearson Edexcel 1ST0, Foundation and Higher.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'GCSE Statistics',
  navLinks: [
    { href: '#boards', label: 'AQA and Edexcel' },
    { href: '#cycle', label: 'Enquiry cycle' },
    { href: '#calc', label: 'Calculators' },
    { href: '#examples', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'England &middot; GCSE Statistics &middot; AQA 8382 and Pearson Edexcel 1ST0',
  h1: 'GCSE Statistics tutor online: AQA 8382 and Edexcel 1ST0',
  lede: 'GCSE Statistics is often the GCSE nobody planned for. It is offered as a second maths qualification, sometimes in an options block and sometimes after school, and it is usually taught in fewer hours than GCSE Maths. Students who take it meet ideas that GCSE Maths barely touches, such as Spearman\'s rank correlation, index numbers, moving averages and capture and recapture, all tied together by a five-stage statistical enquiry cycle that both boards place at the centre. This page compares AQA 8382 and Pearson Edexcel 1ST0 from their own specifications, gives the June 2027 dates, explains the enquiry cycle and the calculator rules, and works three original Higher-level problems.',
  secondaryCta: { href: '#boards', label: 'Compare the two boards' },
  wa: 'Hello Modern Age Coders, I would like a free first class for GCSE Statistics.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Built from the AQA 8382 and Pearson 1ST0 specifications',
  spec: [
    ['Qualification', 'GCSE Statistics (9-1)'],
    ['Boards', 'AQA 8382, Pearson Edexcel 1ST0'],
    ['Tiers', 'Foundation 1 to 5, Higher 4 to 9'],
    ['Papers', 'Two, 80 marks each'],
    ['June 2027', '7 June and 16 June'],
    ['Format', 'Group of 15 to 20, or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'In short',
  capsule: 'GCSE Statistics is a separate GCSE from GCSE Maths, offered in England by AQA (specification 8382) and Pearson Edexcel (1ST0). Each has a Foundation tier (grades 1 to 5) and a Higher tier (grades 4 to 9) and two 80-mark written papers; AQA papers last 1 hour 45 minutes and Edexcel papers 1 hour 30 minutes. In June 2027 both boards sit Paper 1 on 7 June and Paper 2 on 16 June. Modern Age Coders teaches GCSE Statistics live online through its Statistics and Probability course, 1-on-1 or in a group of 15 to 20. We are independent of both boards.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for a GCSE Statistics student',
    lede: 'The first is the course built for this GCSE. The second suits a student taking Statistics alongside GCSE Maths; the third is for a student who wants to work with real data sets in code.',
    items: [
      { course: 'statistics-probability-maths-course', code: 'ST / 01', title: 'Statistics and Probability', note: 'The 8382 or 1ST0 content in enquiry-cycle order, with each board\'s papers.' },
      { course: 'gcse-mathematics-mastery', code: 'ST / 02', title: 'GCSE Maths: Foundation and Higher', note: 'For the GCSE that most Statistics students sit in the same summer.' },
      { course: 'data-science-course-for-teens-python-data', code: 'ST / 03', title: 'Data Science for Teens', note: 'Real data, cleaned and charted in Python: the processing stage of the cycle done by machine.' }
    ]
  },

  sections: [
    {
      id: 'boards', tint: 'tint', eyebrow: 'AQA and Edexcel',
      h2: 'What is the difference between AQA and Edexcel GCSE Statistics?',
      lede: 'Less than for GCSE Maths. Ofqual sets the same assessment objectives for both, and both sit in June only. The main differences are paper length, calculator expectations and how the content is laid out.',
      body: [
        { kind: 'table', caption: 'AQA GCSE Statistics 8382 and Pearson Edexcel GCSE Statistics 1ST0, from each board\'s specification and June 2027 timetable', head: ['Feature', 'AQA 8382', 'Pearson Edexcel 1ST0'], rows: [
          ['Specification read', 'Version 1.2, June 2026', 'Issue 2, December 2017'],
          ['Papers', 'Two, same tier, same series', 'Two, same tier, same series'],
          ['Length of each paper', '1 hour 45 minutes', '1 hour 30 minutes'],
          ['Marks per paper', '80', '80'],
          ['Tiers', 'Foundation 1 to 5; Higher 4 to 9, allowed grade 3', 'Foundation 1 to 5; Higher 4 to 9'],
          ['Exam series', 'Every May/June', 'May/June only'],
          ['June 2027, Paper 1', 'Monday 7 June, afternoon', 'Monday 7 June, afternoon'],
          ['June 2027, Paper 2', 'Wednesday 16 June, morning', 'Wednesday 16 June, morning'],
          ['Qualification number', '603/1177/0', '603/1084/4']
        ] },
        { kind: 'p', html: 'The two boards sit on the same afternoon and morning in June 2027, because the GCSE timetable is shared across boards. AQA\'s papers are fifteen minutes longer for the same 80 marks, which gives a little more time per mark; AQA describes its question styles as "Multiple choice, short answer and a Statistical Enquiry Cycle (SEC) question", while Pearson describes "short response, medium response and extended response questions". AQA\'s specification also states plainly that "A student sitting the Higher tier who just fails to achieve grade 4 will be awarded an allowed grade 3."' },
        { kind: 'table', mt: true, caption: 'Assessment objectives for GCSE Statistics, the same on both boards (AQA and Pearson specifications; percentages approximate, plus or minus 3)', head: ['Objective', 'What it asks', 'Weighting'], rows: [
          ['AO1', 'Knowledge and understanding of standard techniques to collect and represent data, and to calculate summary statistics and probabilities', '55%'],
          ['AO2', 'Interpret statistical information in context and reason statistically to draw conclusions', '25%'],
          ['AO3', 'Assess the appropriateness of methods and conclusions through the statistical enquiry cycle', '20%']
        ] },
        { kind: 'p', html: 'AQA explains why the table is the same for both: "Assessment objectives (AOs) are set by Ofqual and are the same across all GCSE Statistics specifications and all exam boards." Pearson splits each objective evenly across its papers, printing 27.5% AO1, 12.5% AO2 and 10% AO3 for each one. Compared with GCSE Maths, technique (AO1) carries more weight, but a fifth of the marks still go to judging whether a method or a conclusion is sound, which is where students who only drill calculations lose ground.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/gcse/statistics-8382/specification" rel="noopener" target="_blank">AQA GCSE Statistics 8382 specification</a> (version 1.2, June 2026) and <a class="ag-inline-link" href="https://www.aqa.org.uk/subjects/mathematics/gcse/statistics-8382/key-dates" rel="noopener" target="_blank">8382 key dates</a>; <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/edexcel-gcses/statistics-2017.html" rel="noopener" target="_blank">Pearson Edexcel GCSE Statistics 1ST0 specification</a> (Issue 2) and the Pearson Summer 2027 final timetable. All read on 31 October 2026.' }
      ]
    },
    {
      id: 'cycle', tint: 'deep', eyebrow: 'The enquiry cycle',
      h2: 'What is the statistical enquiry cycle in GCSE Statistics?',
      lede: 'It is the five-stage process both boards build the course on, from asking a question to reviewing the answer. AQA says it "underpins the study of Statistics", and both boards set exam questions on its stages.',
      body: [
        { kind: 'p', html: 'AQA lists the five stages as "initial planning", "data collection", "data processing and presentation", "interpretation of results" and "evaluation and review". Pearson goes further in how it lays out the content: "The order of the content, for each tier, follows the order of the statistical enquiry cycle." Every topic, from sampling to Spearman\'s rank, belongs to one of the stages, and a typical extended question walks through several of them.' },
        { kind: 'table', mt: true, caption: 'The five stages and what each asks of a student (stage names from the AQA 8382 specification; the right-hand column is our checklist)', head: ['Stage', 'From the AQA specification', 'Our question to ask at that stage'], rows: [
          ['1. Initial planning', 'Defining a question or hypothesis; deciding what data to collect and how', 'Is the hypothesis testable, and what would count as evidence against it?'],
          ['2. Data collection', 'Constraints on primary and secondary data; acknowledging sources', 'Who is missing from this sample, and why?'],
          ['3. Processing and presentation', 'Organising data, diagrams, summary measures, the role of technology', 'Does this diagram suit this kind of data?'],
          ['4. Interpretation', 'Conclusions that relate to the question; inferences; reliability', 'Does the conclusion answer the original question, in context?'],
          ['5. Evaluation and review', 'Weaknesses in approach; improvements; refining the hypothesis', 'What one change would make the result more trustworthy?']
        ] },
        { kind: 'p', html: 'The cycle is why GCSE Statistics feels different from the statistics strand of GCSE Maths. In Maths, a question usually hands over the data and asks for a mean or a box plot. In Statistics, a question may ask why a sample of shoppers outside one shop at 9 am is a poor sample, what a hypothesis should be, or whether a conclusion follows from the diagram. Those are AO3 marks, and they reward a student who has carried out an enquiry, not just read about one. AQA says as much: "Practical experience of the cycle is integral to their understanding of the principles of the SEC."' },
        { kind: 'two', mt: true,
          leftH3: 'Content beyond GCSE Maths',
          left: [
            'AQA\'s specification includes topics a Maths student will not meet: Spearman\'s rank correlation, weighted index numbers, moving averages for time series, Petersen capture and recapture, binomial situations and quality assurance sampling.',
            'Pearson organises its content under three headings: "The collection of data", "Processing, representing and analysing data", and "Probability".'
          ],
          rightH3: 'Formulae, given and not',
          right: [
            'Pearson states "There is no formulae sheet for Foundation tier"; the one formula Foundation students may need, a rate of change such as a birth rate, is given in the question. Higher papers carry a formulae sheet on page 2 with skew, standard deviation and Spearman\'s rank.',
            'AQA\'s notes say that formulae for skewness, and for rates of change, "will be given" when needed.'
          ] }
      ]
    },
    {
      id: 'calc', tint: '', eyebrow: 'Calculators',
      h2: 'Can you use a calculator in GCSE Statistics, and which functions matter?',
      lede: 'Yes, on every paper of both boards. The boards differ on one point: whether students are expected to use the calculator\'s statistics mode.',
      body: [
        { kind: 'p', html: 'AQA sets a minimum: the calculator must have "four rules", "square", "square root", "reciprocal function", "power function", "brackets" and "a memory facility". It then adds that "Students may use the statistical functions on their calculator, where appropriate, if they wish but this is not a requirement of the specification." Pearson is firmer: students "are expected to be familiar with the statistical function keys on their scientific calculators."' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Mean and standard deviation', p: 'Entering a list into statistics mode gives the mean and standard deviation at once. A Higher student who can do this saves minutes on a long data question.' },
          { h3: 'Check, do not replace', p: 'Write the method line first, such as the sum of the d squared terms in Spearman\'s rank, then use the calculator. Method marks need the written step.' },
          { h3: 'Memory for accuracy', p: 'Store intermediate results, especially in standard deviation and Spearman\'s rank, so rounding happens once at the end.' }
        ] },
        { kind: 'p', mt: true, html: 'In our classes we teach the statistics mode on the student\'s own calculator model in the first weeks, because the keys differ between models and a student should not discover that in the exam room. We teach the hand method too, since the papers reward seeing the structure of a calculation and not only its answer.' }
      ]
    },
    {
      id: 'examples', tint: 'tint', eyebrow: 'Worked examples',
      h2: 'Three GCSE Statistics problems we wrote, solved step by step',
      lede: 'Original problems, not board questions, on three topics unique to GCSE Statistics. Each ends with the interpretation sentence that AO2 and AO3 marks depend on.',
      body: [
        { kind: 'two',
          leftH3: 'Example 1, capture and recapture',
          left: [
            '<strong>Question (ours).</strong> Volunteers catch and mark 40 newts in a pond and release them. A week later they catch 50 newts, of which 8 are marked. Estimate the number of newts in the pond, and state one assumption.',
            '<strong>Method.</strong> The Petersen estimate is N = M × n ÷ m, where M is the number first marked, n the second catch and m the marked newts in it.',
            '<strong>Working.</strong> N = 40 × 50 ÷ 8 = 250 newts.',
            '<strong>Assumption.</strong> The population did not change between the two visits, and marked newts mixed back in and were as likely to be caught as unmarked ones. An answer without an assumption is unfinished.'
          ],
          rightH3: 'Example 2, Spearman\'s rank correlation',
          right: [
            '<strong>Question (ours).</strong> Five students are ranked on a maths test and a statistics test: A (1, 2), B (2, 1), C (3, 4), D (4, 3), E (5, 5). Calculate Spearman\'s rank correlation coefficient and interpret it.',
            '<strong>Differences.</strong> d = &minus;1, 1, &minus;1, 1, 0, so the sum of d² is 1 + 1 + 1 + 1 + 0 = 4.',
            '<strong>Working.</strong> r<sub>s</sub> = 1 &minus; (6 × 4) ÷ (5 × (25 &minus; 1)) = 1 &minus; 24 ÷ 120 = 0.8.',
            '<strong>Interpretation.</strong> Strong positive correlation between the rankings: students who ranked high in one test tended to rank high in the other. With only five students, the result is weak evidence; a larger sample would be more reliable.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Example 3, judging a sample (AO3)',
          left: [
            '<strong>Question (ours).</strong> A student wants to know how far pupils at her school travel to school. She asks the first 30 pupils who arrive at the front gate one morning. Give two reasons the sample may be biased and suggest a better method.',
            '<strong>Reasons.</strong> Early arrivals may differ from the rest, for example pupils dropped off by car on the way to work. Pupils who arrive at another entrance, such as by school bus at the back, are left out entirely.',
            '<strong>Better method.</strong> A stratified sample by year group, chosen at random from the school register, with the sample in each year proportional to its size.',
            '<strong>Why it matters.</strong> This is a stage 2 question in the cycle. No calculation is needed, but a full answer names the bias and says why it distorts the result.'
          ],
          rightH3: 'What links the three',
          right: [
            'Each problem has a number in it, and each ends with a sentence about what the number means and how far it can be trusted.',
            'That closing sentence is the habit we drill most in GCSE Statistics. Students who stop at 250 or 0.8 leave the interpretation marks behind.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Practice set (ours, answers at the end).</strong> (1) Quarterly sales are 12, 18, 15, 21 and 16; find the two 4-point moving averages. (2) An item cost 80 units in the base year and costs 92 now; find its index number. (3) A data set has lower quartile 14 and upper quartile 29; find the interquartile range. (4) A distribution has mean 52, median 49 and standard deviation 6; use skew = 3(mean &minus; median) ÷ standard deviation and describe the skew. (5) Give one advantage of a pilot survey. <strong>Answers:</strong> (1) 16.5 and 17.5; (2) 115; (3) 15; (4) 1.5, positive skew; (5) it shows up unclear or leading questions before the full survey is run.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Fitting it in',
      h2: 'How do you study GCSE Statistics alongside GCSE Maths?',
      lede: 'AQA says its specification "is designed to be taken over two years", but many schools teach it in less time than that. Our plan shares the work with GCSE Maths where the two overlap and keeps separate time for what only Statistics covers.',
      body: [
        { kind: 'ol', items: [
          '<strong>Find the overlap.</strong> Averages, spread, box plots, scatter graphs, tree and Venn diagrams appear in both GCSEs. Learn them once, carefully, and use them in both.',
          '<strong>List what is Statistics only.</strong> Spearman\'s rank, index numbers, moving averages, capture and recapture, standard deviation and skew, sampling methods, quality assurance. These need their own lessons.',
          '<strong>Run one small enquiry.</strong> Pick a question, collect a little real data, process it and write a conclusion and a review. One enquiry teaches all five stages faster than any worksheet.',
          '<strong>Learn the calculator mode.</strong> Mean and standard deviation from a list, on the student\'s own model, practised until it is automatic.',
          '<strong>Past papers from the right board.</strong> AQA papers for 8382 and Pearson papers for 1ST0, timed to 1 hour 45 minutes or 1 hour 30 minutes accordingly.',
          '<strong>Revise after GCSE Maths ends.</strong> In June 2027, the Statistics papers on 7 and 16 June fall after the second GCSE Maths paper on 27 May, so the last fortnight before 7 June can belong to Statistics.'
        ] },
        { kind: 'p', mt: true, html: 'This plan is ours. It assumes Statistics is the second maths GCSE and that GCSE Maths is the priority, which is usually the right order for a student\'s next step after 16. For a student already strong in maths and drawn to data, Statistics can be the more enjoyable of the two, and it leads naturally to <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level Maths</a>, whose statistics strand builds on it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through GCSE Statistics',
    lede: 'A student climbs a rung by doing it on a real 8382 or 1ST0 paper.',
    table: { caption: 'Checkpoints for a GCSE Statistics student', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Overlap secure', 'First term', 'Averages, spread and diagrams shared with GCSE Maths done without error'],
      ['2. Statistics-only topics', 'By the spring', 'Spearman\'s rank, index numbers, moving averages and capture and recapture carried out correctly'],
      ['3. One enquiry done', 'Before the last term', 'All five stages of the cycle carried through on real data'],
      ['4. Interpretation automatic', 'Before 7 June 2027', 'Every numerical answer followed by a sentence in context']
    ] },
    left: { h3: 'Why the enquiry matters', ps: [
      'Students who have run an enquiry answer stage questions from experience rather than memory.',
      'Our <a class="ag-inline-link" href="/ap-statistics-tutoring-online">AP Statistics page</a> shows where this kind of thinking leads in the US system.'
    ] },
    right: { h3: 'Why interpretation is last', ps: [
      'It is the habit that takes longest to become automatic, and it carries marks on almost every extended question.',
      'We send families a short monthly progress note.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around GCSE Statistics',
    lede: 'Grouped by role: the GCSE itself, the maths around it, and the data skills beyond it.',
    bands: [
      { num: 'I', h3: 'The GCSE', sub: 'AQA 8382 and Edexcel 1ST0', courses: [
        { code: 'UK / ST1 / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and Probability', blurb: 'Every stage of the enquiry cycle, at either tier.' },
        { code: 'UK / ST1 / 02', slug: 'gcse-mathematics-mastery', title: 'GCSE Maths', blurb: 'The partner GCSE most Statistics students also sit.' },
        { code: 'UK / ST1 / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra Foundations', blurb: 'For formulae such as Spearman\'s rank and skew.' }
      ] },
      { num: 'II', h3: 'Data in practice', sub: 'Processing by machine', courses: [
        { code: 'UK / ST2 / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Cleaning and charting real data in Python.' },
        { code: 'UK / ST2 / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange data mining', blurb: 'Visual data analysis without writing code.' },
        { code: 'UK / ST2 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Simulations of probability experiments.' }
      ] },
      { num: 'III', h3: 'After the GCSE', sub: 'Post-16 statistics', courses: [
        { code: 'UK / ST3 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'The statistics strand continues here.' },
        { code: 'UK / ST3 / 02', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'For students heading to American universities.' },
        { code: 'UK / ST3 / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'Statistics and linear algebra for older learners.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Live GCSE Statistics classes in UK time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teaching happens from India, with every class booked in UK time.',
    slots: [
      { time: 'After school', l: 'Fits a second GCSE well.' },
      { time: 'Evenings', l: 'Around GCSE Maths homework.' },
      { time: 'Weekend mornings', l: 'Room for a full 1 hour 45 minute AQA paper.' }
    ],
    cells: [
      { h3: 'Board-specific papers', p: 'AQA 8382 or Pearson 1ST0 papers and mark schemes, at the student\'s tier.' },
      { h3: 'The cycle as the map', p: 'Every topic placed in one of the five stages of the enquiry cycle.' },
      { h3: 'Calculator mode taught', p: 'Statistics functions on the student\'s own calculator model.' },
      { h3: 'A real enquiry', p: 'One small investigation on real data, carried from question to review.' },
      { h3: 'First class free', p: 'One live class before any payment, to agree where to begin.' },
      { h3: 'Group or 1-on-1', p: 'A batch of 15 to 20 Statistics students, or lessons for one.' }
    ]
  },

  projectsH2: 'Work students made in our classes',
  projectsLede: 'Class projects, not assessed. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews parents left on Google, as written.',

  fees: {
    h2: 'Fees for GCSE Statistics classes',
    lede: 'The first class is on us. After that a single monthly fee, with group places costing less than 1-on-1 lessons. Nothing to sign, and nothing paid before a weekly slot is fixed.',
    free: ['A live GCSE Statistics class', 'A first look at the enquiry cycle', 'Booked with a phone number'],
    group: ['15 to 20 Statistics students', 'One teacher to the June papers', 'A board paper marked most weeks', 'A monthly note to parents'],
    one: ['Lessons for one student', 'Fitted around GCSE Maths', 'Suits a school with few Statistics hours']
  },

  faq: {
    eyebrow: 'Questions about GCSE Statistics',
    h2: 'What families ask about GCSE Statistics',
    items: [
      { q: 'Is GCSE Statistics the same as GCSE Maths?', a: 'No. It is a separate GCSE with its own specification and papers. It overlaps with the statistics and probability in GCSE Maths but adds topics such as Spearman\'s rank correlation, index numbers, moving averages and capture and recapture.' },
      { q: 'How many papers are in GCSE Statistics?', a: 'Two, at either Foundation or Higher tier, each worth 80 marks and half of the GCSE. AQA 8382 papers last 1 hour 45 minutes and Pearson Edexcel 1ST0 papers last 1 hour 30 minutes.' },
      { q: 'When are the GCSE Statistics exams in 2027?', a: 'Both AQA and Pearson Edexcel list Paper 1 on the afternoon of Monday 7 June 2027 and Paper 2 on the morning of Wednesday 16 June 2027. Check the school\'s own timetable as well.' },
      { q: 'Is GCSE Statistics hard?', a: 'The algebra is lighter than in Higher GCSE Maths, but the challenge is different: a fifth of the marks are for judging methods and conclusions, and those reward practice at explaining rather than calculating.' },
      { q: 'What is the statistical enquiry cycle?', a: 'It is the five-stage process both boards use: initial planning, data collection, processing and presentation, interpretation of results, and evaluation and review. Exam questions can target any stage.' },
      { q: 'Can you use a calculator in GCSE Statistics?', a: 'Yes, on every paper. AQA lists a minimum set of functions and says statistical functions may be used but are not required; Pearson expects students to be familiar with the statistical function keys.' },
      { q: 'Is there a formulae sheet in GCSE Statistics?', a: 'On Pearson Edexcel, only at Higher tier, printed on page 2 with skew, standard deviation and Spearman\'s rank. Pearson\'s Foundation papers have no sheet. AQA gives formulae such as skewness and rates of change within the questions when they are needed.' },
      { q: 'Can my child take GCSE Statistics as a private candidate?', a: 'AQA says its specification is available to private candidates, including those who are self-taught, home schooled or privately tutored, by entering through an AQA-approved school or college that agrees to host them.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are in UK time.' },
      { q: 'Are you connected with AQA or Pearson?', a: 'No. Modern Age Coders is independent of AQA and Pearson Edexcel. We teach to their published specifications, use their freely available papers, and promise no grade.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More around GCSE Statistics',
    lede: 'The GCSE beside it and the statistics after it.',
    items: [
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'The partner GCSE.' },
      { href: '/aqa-vs-edexcel-vs-ocr-gcse-maths', label: 'GCSE Maths boards compared', p: 'For the maths GCSE, where the boards differ more.' },
      { href: '/further-maths-tuition-online', label: 'Further maths', p: 'The other common second maths qualification.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths', p: 'Where statistics continues after 16.' },
      { href: '/ap-statistics-tutoring-online', label: 'AP Statistics', p: 'The American course at the next level.' },
      { href: '/coding-classes-in-united-kingdom', label: 'UK hub', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free GCSE Statistics class',
    lede: 'Send us a number and a teacher will call at a UK time you prefer. Tell us the board, AQA or Edexcel, and the class uses that board\'s style from the start.',
    readFirst: 'Like to read first? The <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">Statistics and Probability course page</a> lists the topics, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a class.',
    note: 'WhatsApp is the fastest way to reach us, free from a UK number. Replies come from our India team on a +91 number.',
    formNote: 'No card and no contract. A single reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Statistics', links: [
        { href: '/ap-statistics-tutoring-online', label: 'AP Statistics' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths' },
        { href: '/courses/statistics-probability-maths-course', label: 'Statistics course' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'GCSE maths', links: [
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/gcse-maths-grades-explained', label: 'Grades explained' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'GCSE Statistics, live online in UK time'
  },

  personalityCss: `
.ag-root.ag-gs .ag-hero h1 { letter-spacing: -0.016em; font-weight: 700; max-width: 22ch; }
.ag-root.ag-gs .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-gs .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-gs .ag-table caption { text-align: left; font-weight: 620; }
.ag-root.ag-gs .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-gs .ag-steps li { margin-bottom: 9px; }
`,

  dossier: {
    curriculumAuthority: 'England, GCSE Statistics. AQA 8382 specification version 1.2 June 2026: Foundation 1 to 5, Higher 4 to 9 with allowed grade 3; two papers, 1 hour 45 minutes, 80 marks, 50% each; question types; SEC underpins the subject; five stages; AOs set by Ofqual and the same across boards (55, 25, 20); two-year design; every May/June; QAN 603/1177/0; calculator minimum and statistical functions optional; content including Spearman, index numbers, moving averages, Petersen, binomial, quality assurance; private candidates. AQA key dates June 2027: 7 June PM, 16 June AM. Pearson Edexcel 1ST0 Issue 2: May/June only; two papers 1 hour 30 minutes, 80 marks, 50%; content headings; content order follows the SEC; AOs 55, 25, 20 and per paper 27.5, 12.5, 10; no Foundation formulae sheet; Higher sheet on page 2; statistical function keys expected; QN 603/1084/4. Pearson Summer 2027 final timetable: 1ST0 7 June afternoon, 16 June morning.',
    localProject: 'GCSE Statistics is a second maths GCSE built on the statistical enquiry cycle. The page tables AQA 8382 and Pearson Edexcel 1ST0 side by side from their own specifications and June 2027 timetables (both 7 June afternoon and 16 June morning), sets out the shared Ofqual assessment objectives, maps the five stages of the cycle with our own question for each, and compares the boards\' calculator expectations. Three original worked examples (a Petersen estimate of 250 newts with its assumption, a Spearman coefficient of 0.8 with an interpretation, and a biased front-gate sample) plus a practice set, and a plan for fitting Statistics alongside GCSE Maths. Lesson family: a two-board subject door built on a method cycle.',
    requiredMentions: [
      '603/1177/0',
      '603/1084/4',
      'Assessment objectives (AOs) are set by Ofqual and are the same across all GCSE Statistics specifications and all exam boards.',
      'The order of the content, for each tier, follows the order of the statistical enquiry cycle.',
      'Practical experience of the cycle is integral to their understanding of the principles of the SEC.',
      'are expected to be familiar with the statistical function keys on their scientific calculators.',
      'There is no formulae sheet for Foundation tier',
      'Volunteers catch and mark 40 newts in a pond',
      'printing 27.5% AO1, 12.5% AO2 and 10% AO3'
    ],
    sources: [
      { claim: 'AQA GCSE Statistics 8382 specification, version 1.2 June 2026.', url: 'https://www.aqa.org.uk/subjects/mathematics/gcse/statistics-8382/specification' },
      { claim: 'AQA 8382 key dates: June 2027 series.', url: 'https://www.aqa.org.uk/subjects/mathematics/gcse/statistics-8382/key-dates' },
      { claim: 'Pearson Edexcel GCSE (9-1) Statistics 1ST0 specification, Issue 2.', url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/Statistics/2017/specification-and-sample-assessments/gcse-9-1-statistics-specification.pdf' },
      { claim: 'Pearson Edexcel GCSE Summer 2027 final examination timetable: 1ST0 dates.', url: 'https://qualifications.pearson.com/content/dam/pdf/Support/Examination-timetables-for-UK-Edexcel-GCSE/gcse-summer-2027final.pdf' }
    ],
    rejectedClaims: [
      'Paper length 1h 20m for 1ST0: printed in the week view of Pearson\'s 2027 timetable, but the specification and the timetable\'s subject view both say 1 hour 30 minutes, so the page uses 1 hour 30 minutes.',
      'OCR: not checked for a current GCSE Statistics in this build; the page covers AQA and Pearson only.',
      'Entry numbers or grade boundaries: not read at a primary source, so none are quoted.',
      'Any claim that Statistics is an easy GCSE or adds a grade: declined.',
      'Past paper questions: never reproduced; all examples are ours.'
    ]
  }
};
