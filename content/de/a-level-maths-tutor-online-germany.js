'use strict';
// A level maths tutor online in Germany (ag- English door, Germany cluster P2 row DE025).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: sixth-form pupils at British and international schools in Germany taking A level Mathematics (Pearson Edexcel
// 9MA0 or AQA 7357), and private candidates. Spine: the two specifications side by side from the boards' own documents
// (how the three papers split pure, statistics and mechanics), the large data set, the assessment objectives, AGIS
// context for A levels in Germany, then a statistics lesson: fix the decision rule before looking at the data.
// Sources (raw, fetched 3 Nov 2026, src-pages/a-level-maths-tutor-online-germany/):
//  - pearson-9ma0-spec.pdf (Pearson Edexcel Level 3 Advanced GCE in Mathematics, "Specification – Issue 4 – February
//    2020", linked from the Pearson qualification page): "three externally-examined papers"; "Students must complete
//    all assessment in May/June in any single year."; Paper 1 and Paper 2 Pure Mathematics, Paper 3 Statistics and
//    Mechanics; "2-hour written examination", "33.33% of the qualification", "100 marks"; "Calculators can be used in the
//    assessment."; "graded and certificated on a six-grade scale from A* to E using the total combined marks (out of
//    300)"; "Individual papers are not graded."; large data set "Students are required to become familiar with the data
//    set in advance of the final assessment."; AO totals "48-52 23-27 23-27".
//  - aqa-7357-spec.pdf (AQA A-level Mathematics 7357, "Version 1.3 31 January 2018", linked from aqa.org.uk 7357 page):
//    Paper 1 content A to I (proof to numerical methods); Paper 2 "Any content from Paper 1 and content from" vectors and
//    mechanics (J, P, Q, R, S); Paper 3 Paper 1 content plus statistics (K to O); each "Written exam: 2 hours", "100
//    marks", "33⅓ % of A-level"; "become familiar with one or more specific large data set(s)".
//  - cambridgeinternational.org 9709 syllabus PDF returned HTTP 304 with an empty body; not retried, not used.
//  - FACTS.md section 5 (AGIS, fetched 2 Nov 2026): International School Westpfalz lists "Cambridge Advanced AS / A
//    Levels" (240); Berlin International School lists "Cambridge Examinations Board" (223); AGIS English common teaching
//    language (250).
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own (scratchpad de/w/G5/py/atu.py, python3 -I) prints:
//    P(X <= 2) = 0.0355 / P(X <= 3) = 0.1071 / Critical region: X <= 2 / Actual significance level: 0.0355
// Lesson family: fix the decision rule (the critical region) before you look at the data.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const TEST = [
  'from math import comb',
  '',
  'n, p, alpha = 20, 0.3, 0.05',
  '',
  'def cdf(k):',
  '    return sum(comb(n, i) * p**i * (1 - p)**(n - i) for i in range(k + 1))',
  '',
  'c = -1',
  'while cdf(c + 1) <= alpha:',
  '    c += 1',
  '',
  'for k in range(c, c + 2):',
  '    print(f"P(X <= {k}) = {cdf(k):.4f}")',
  'print("Critical region: X <=", c)',
  'print("Actual significance level:", round(cdf(c), 4))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'A level maths tutor' },
  slug: 'a-level-maths-tutor-online-germany',
  code: 'atu',
  accent: '#296361',
  accentRationale: 'A level maths tutor: a deep teal #296361, the green of a sixth-form blazer, apart from the blues and browns of the IB and IGCSE pages; it clears 4.5:1 on the paper and all three tints (the build checks it)',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'A level maths tutor online in Germany',
  title: 'A Level Maths Tutor Online in Germany: Edexcel and AQA',
  description: 'An online A level maths tutor for sixth formers in Germany, live in English: Edexcel 9MA0 and AQA 7357 papers compared, the large data set, a statistics lesson.',
  ogDescription: 'Live online A level maths tutoring in English for pupils at British and international schools in Germany: how the Edexcel and AQA papers divide pure, statistics and mechanics, and how to set up a hypothesis test.',
  twitterDescription: 'A level maths online in English for sixth formers in Germany: Edexcel 9MA0 or AQA 7357.',
  pageName: 'A Level Maths Tutor Online in Germany',
  webPageDescription: 'A page for A level maths pupils in Germany and their parents: the Pearson Edexcel 9MA0 and AQA 7357 specifications compared from the boards\' own documents, the large data set and the assessment objectives, what AGIS shows about A levels at schools in Germany, and an original lesson on fixing the critical region of a hypothesis test before looking at the data.',
  courseDescription: 'Live online A level Mathematics tutoring in English for sixth-form pupils in Germany: pure mathematics, statistics and mechanics for Pearson Edexcel and AQA, the large data set, past-paper style practice and exam technique, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'A level maths tutor',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#papers', label: 'Papers' },
    { href: '#skills', label: 'Marking' },
    { href: '#test', label: 'Lesson' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; A Level Mathematics &middot; Ages 16 to 19',
  h1: 'A level maths tutor online in Germany',
  lede: 'Sixth formers at British schools in Germany, and a few at international schools, sit A level maths exactly as pupils in Manchester do: three two-hour papers in a single May and June. Living in Germany changes nothing about the papers and a good deal about the help on offer nearby. This page compares the two most common specifications, Edexcel and AQA, from the boards\' own documents, and shows one of our statistics lessons.',
  secondaryCta: { href: '#papers', label: 'Compare the papers' },
  wa: 'Hello Modern Age Coders, I am taking A level maths at a school in Germany and would like an online tutor. Could I book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; pure, statistics and mechanics, one mentor',
  spec: [
    ['For', 'Year 12 and 13 pupils in Germany'],
    ['Boards', 'Pearson Edexcel 9MA0, AQA 7357'],
    ['Covers', 'Pure, statistics, mechanics'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Times', 'German afternoons and Saturday mornings'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders is an online A level maths tutor for sixth formers in Germany, teaching Pearson Edexcel 9MA0 and AQA 7357 live in English: pure mathematics, statistics with the large data set, and mechanics. Mentors follow each pupil\'s pace and accent, work through exam-style questions every week, and teach in a group of fifteen to twenty or one to one, through our A Level Maths course.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for sixth-form maths in Germany',
    lede: 'The A level course, Further Maths for pupils taking the second A level, and GCSE maths for Year 11 pupils getting ready for the sixth form.',
    items: [
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'ATU / 01', title: 'A Level Maths', note: 'Pure, mechanics and statistics for Edexcel and AQA, with the large data set and exam-style practice.' },
      { course: 'a-level-further-maths-course', code: 'ATU / 02', title: 'A Level Further Maths', note: 'Core pure and the applied options, for pupils who take Further Maths alongside Maths.' },
      { course: 'gcse-mathematics-mastery', code: 'ATU / 03', title: 'GCSE maths', note: 'Higher tier algebra and geometry secured in Year 10 and 11, the base the A level builds on.' }
    ]
  },

  sections: [
    {
      id: 'papers',
      eyebrow: 'The papers',
      h2: 'How are the Edexcel and AQA A level maths exams organised?',
      lede: 'Both specifications set three papers of equal weight and cover the same national content. They differ in where the statistics and the mechanics sit, and that changes how a pupil should revise.',
      body: [
        { kind: 'table', numCols: [], caption: 'A level Mathematics: Pearson Edexcel 9MA0 and AQA 7357, from each board\'s own specification', head: ['', 'Pearson Edexcel 9MA0', 'AQA 7357'], rows: [
          ['Paper 1', 'Pure Mathematics 1', 'Pure: proof, algebra, coordinate geometry, sequences, trigonometry, exponentials, calculus, numerical methods'],
          ['Paper 2', 'Pure Mathematics 2', 'Paper 1 content plus vectors and mechanics'],
          ['Paper 3', 'Statistics (Section A) and Mechanics (Section B)', 'Paper 1 content plus statistics'],
          ['Each paper', '2 hours, 100 marks, 33.33 % of the A level', '2 hours, 100 marks, 33&#8531; % of the A level'],
          ['Calculator', 'Can be used in all three papers', 'See the board\'s current rules'],
          ['Large data set', 'Provided by Pearson; questions assume familiarity', 'Pupils become familiar with one or more set by AQA'],
          ['When', 'All assessment in May and June of one year', 'Exams from June 2018 onward']
        ] },
        { kind: 'source', html: 'Sources: Pearson Edexcel Level 3 Advanced GCE in Mathematics specification, Issue 4, February 2020; AQA A-level Mathematics 7357 specification, Version 1.3, 31 January 2018. Both downloaded from the boards\' own qualification pages on 3 November 2026. Where the AQA cell says "see the board\'s current rules", we did not find the rule in the pages we read, so we do not state it.' },
        { kind: 'p', mt: true, html: 'The practical difference is this. An Edexcel pupil meets statistics and mechanics together in one paper, Paper 3, after two papers of pure maths. An AQA pupil meets mechanics in Paper 2 and statistics in Paper 3, each next to further pure questions. Either way, pure maths is never finished: AQA says Papers 2 and 3 can test any content from Paper 1, and Edexcel\'s two pure papers can each cover the whole pure content.' },
        { kind: 'p', html: 'Pearson grades the A level from A* to E on the total of the three papers, out of 300, and says individual papers are not graded. A weak Paper 3 can be balanced by strong pure papers, and the reverse. For revision, that means the mentor looks at where the next ten marks are cheapest to gain, not at which paper "went badly".' }
      ]
    },
    {
      id: 'skills',
      eyebrow: 'What is marked',
      h2: 'What does A level maths actually reward?',
      lede: 'Both boards mark against three assessment objectives. Their weights explain why practice must go beyond routine questions.',
      body: [
        { kind: 'two',
          leftH3: 'Three objectives',
          left: [
            'Pearson names them AO1, use and apply standard techniques; AO2, reason, interpret and communicate mathematically; and AO3, solve problems within mathematics and in other contexts.',
            'In the Edexcel table for the whole A level, AO1 carries 48 to 52 %, and AO2 and AO3 each 23 to 27 %. Roughly half the marks, then, are not for standard technique at all.'
          ],
          rightH3: 'What that means in practice',
          right: [
            'A pupil who can differentiate anything but cannot explain why a model is unrealistic, or set up a problem with no worked example to copy, is aiming at about half the paper.',
            'In Paper 3 the problem-solving weight is higher still: the Edexcel table gives AO3 a range of 10.33 to 11.67 % of the A level in Paper 3, against 6.33 to 7.67 % in each pure paper.'
          ] },
        { kind: 'p', mt: true, html: 'The large data set is the clearest example. Pearson says its questions assume knowledge of the data set and are likely to give a material advantage to students who have studied it. Pupils who first open it in revision week lose those marks. We work through the data set from the start of Year 12, in Python and on paper, so that a question about it reads like a question about something familiar.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Technique (AO1)', p: 'Short drills each class, so the routine half of the paper is fast and safe.' },
          { h3: 'Reasoning (AO2)', p: 'Every answer explained in a sentence, as an examiner wants to read it.' },
          { h3: 'Problems (AO3)', p: 'Unseen problems each week, with no worked example to copy.' }
        ] }
      ]
    },
    {
      id: 'germany',
      eyebrow: 'In Germany',
      h2: 'Where do pupils in Germany take A levels?',
      lede: 'Mostly at British and some international schools. There is no official count of A level candidates in Germany, so we quote only what schools publish about themselves through AGIS.',
      body: [
        { kind: 'p', html: 'In the AGIS directory, International School Westpfalz lists Cambridge Advanced AS and A Levels among its qualifications, and Berlin International School lists the Cambridge examinations board. AGIS says every one of its members is an authorised IB school, and its directory covers members only, so this is context, not a complete list of A level schools. AGIS also states that its member schools use English as their common teaching language.' },
        { kind: 'p', html: 'We are not connected with AGIS, Pearson, AQA, Cambridge or any school, and no school sends pupils to us. Whether a German university accepts a particular set of A levels is decided under German rules by the university and the Länder; we do not give admissions advice, and we would send a family to the university\'s own admissions office for that.' },
        { kind: 'p', html: 'A pupil who sits A levels as a private candidate, for example after moving to Germany from the UK mid-course, needs a centre that accepts private candidates. Finding one is the family\'s task; what we provide is the teaching, to the same specification the pupil started.' }
      ]
    },
    {
      id: 'test',
      tint: 'tint',
      eyebrow: 'A lesson',
      h2: 'How do you set up a hypothesis test without fooling yourself?',
      lede: 'Hypothesis testing appears in the statistics content of both specifications. Our own lesson teaches one rule: decide what would count as evidence before you look at the result.',
      body: [
        { kind: 'p', html: '<strong>Task (ours).</strong> A school canteen says 30 % of pupils choose the vegetarian meal. A student suspects the true share is lower. She will ask a random sample of 20 pupils. Test at the 5 % significance level. <em>Set-up:</em> let X be the number in the sample who choose it. H<sub>0</sub>: p = 0.3, H<sub>1</sub>: p &lt; 0.3, a one-tailed test. Under H<sub>0</sub>, X ~ B(20, 0.3).' },
        { kind: 'code', label: 'Finding the critical region first', lang: 'Python', code: TEST, note: 'It prints <code>P(X &lt;= 2) = 0.0355</code>, <code>P(X &lt;= 3) = 0.1071</code>, <code>Critical region: X &lt;= 2</code> and <code>Actual significance level: 0.0355</code>.' },
        { kind: 'p', mt: true, html: 'Before any pupil is asked, the rule is fixed: reject H<sub>0</sub> if X &le; 2. Three would not be enough, because P(X &le; 3) = 0.1071 is above 5 %. The actual significance level of this test is 3.55 %, not 5 %, because a binomial variable jumps in whole steps and cannot hit 5 % exactly. Now the student asks her 20 pupils and 2 say yes. 2 is in the critical region, so there is evidence at the 5 % level that fewer than 30 % choose the vegetarian meal.' },
        { kind: 'two', mt: true,
          leftH3: 'The mistake this prevents',
          left: [
            'A pupil who looks first and then decides is tempted to move the line: "2 out of 20 is 10 %, that feels low, so reject". Or, after seeing 3, to choose a two-tailed test or a 10 % level so that 3 also counts.',
            'Choosing the rule after the data is the oldest error in statistics. Examiners test for it by asking for the critical region before giving the observed value.'
          ],
          rightH3: 'How to write it in the exam',
          right: [
            'State both hypotheses with the parameter p, the distribution under H<sub>0</sub>, and the tail.',
            'Give the critical region with the probability that justifies it, here P(X &le; 2) = 0.0355 &lt; 0.05.',
            'Conclude in context, in words that do not overclaim: "evidence that", never "proof that".'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Write the hypotheses before the data.</strong> H<sub>0</sub>, H<sub>1</sub>, one or two tails, the significance level.',
          '<strong>Find the critical region.</strong> The largest c with P(X &le; c) at or below the level, and say the actual level.',
          '<strong>Only then compare.</strong> The observed value is in the region or it is not; the conclusion follows, in context.'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Times',
      h2: 'When are online A level maths classes from Germany?',
      lede: 'India is ahead of Germany all year, so after-school hours in Germany are evening hours for our mentors, and Saturday mornings in Germany are their early afternoon.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample lesson times for a pupil in Germany, with the mentor\'s time in India (our conversion)', head: ['Pupil, German time', 'Mentor, Germany on winter time', 'Mentor, Germany on summer time'], rows: [
          ['Weekday 13:15', '17:45', '16:45'],
          ['Weekday 15:40', '20:10', '19:10'],
          ['Saturday 08:30', '13:00', '12:00']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz sets German winter time at UTC+1 and summer time at UTC+2; this year\'s change back fell on 25 October 2026 and the spring change is due on 28 March 2027. India does not change its clocks from UTC+5:30. The rows show the arithmetic only; no class is fixed to them.' },
        { kind: 'p', mt: true, html: 'Edexcel\'s specification says all assessment is taken in May and June of a single year. For a pupil in Year 13 that means the last teaching months are about practice, and we add timed papers, two hours each, in the weeks before.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Two sixth-form years',
    h2: 'A plan for A level maths in Year 12 and Year 13',
    lede: 'Our own outline for a pupil in Germany with exams in May and June. The mentor follows the school\'s order of topics and the board.',
    table: { caption: 'A level maths over two years (ours)', head: ['When', 'Pure', 'Applied'], rows: [
      ['Year 12, autumn', 'Algebra, functions, coordinate geometry', 'Sampling and the large data set'],
      ['Year 12, spring', 'Trigonometry, exponentials, differentiation', 'Probability and the binomial distribution'],
      ['Year 12, summer', 'Integration, vectors', 'Kinematics and forces'],
      ['Year 13, autumn', 'Proof, sequences, further calculus', 'Hypothesis tests, the normal distribution, moments'],
      ['Year 13, spring', 'Numerical methods, mixed pure papers', 'Full papers, two hours each']
    ] },
    left: { h3: 'For parents', ps: [
      'The mentor reports marks by objective as well as by topic, so you can see whether the gap is technique, reasoning or unseen problems.',
      'Because the grade comes from all three papers together, we plan revision by where marks are cheapest to gain.'
    ] },
    right: { h3: 'For pupils', ps: [
      'In statistics, write the hypotheses and the critical region before you read the observed value.',
      'Open the large data set in the first term, not in the last month.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths',
    h2: 'Nine more courses for sixth formers in Germany',
    lede: 'All taught live in English by one mentor who stays with the pupil; group or individual.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Ages 14 to 17', courses: [
        { code: 'ATU / BASE / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For pupils whose algebra slows every A level question.' },
        { code: 'ATU / BASE / 02', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Extended and Additional, before the sixth form.' },
        { code: 'ATU / BASE / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Functions and trigonometry made secure.' }
      ] },
      { num: 'II', h3: 'Alongside A level', sub: 'Ages 16 to 19', courses: [
        { code: 'ATU / SIDE / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'More depth for Paper 3.' },
        { code: 'ATU / SIDE / 02', slug: 'a-level-computer-science-course-aqa-ocr', title: 'A Level Computer Science', blurb: 'AQA 7517 and OCR H446.' },
        { code: 'ATU / SIDE / 03', slug: 'cambridge-a-level-computer-science-9618-course', title: 'Cambridge Computer Science 9618', blurb: 'For Cambridge centres.' }
      ] },
      { num: 'III', h3: 'Beyond A level', sub: 'Ages 17 and up', courses: [
        { code: 'ATU / NEXT / 01', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'The first year of a maths or engineering degree.' },
        { code: 'ATU / NEXT / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Proof and problem solving at contest level.' },
        { code: 'ATU / NEXT / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'Statistics and linear algebra for machine learning.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How online A level maths tutoring works from Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A class is a live video lesson of about an hour, twice a week, written out on a shared whiteboard the pupil can download afterwards.',
    slots: [
      { time: 'Weekdays', l: 'Early and mid afternoon in Germany, evening for the mentor.' },
      { time: 'Saturday', l: 'Mornings for two-hour practice papers.' },
      { time: '1-on-1', l: 'Arranged around mocks and school deadlines.' }
    ],
    cells: [
      { h3: 'Your board', p: 'Edexcel or AQA, taught to its own paper layout.' },
      { h3: 'All three strands', p: 'Pure, statistics and mechanics, in proportion.' },
      { h3: 'Large data set', p: 'Explored from the first term.' },
      { h3: 'Unseen problems', p: 'Every week, for the AO3 marks.' },
      { h3: 'Marked practice', p: 'Feedback by topic and by objective.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty pupils, or one to one.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'Sixth formers who code with us build things like these. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Google reviews by our families, unchanged.',

  fees: {
    h2: 'A level maths tutoring fees in Germany',
    lede: 'The monthly fee covers eight live classes. You see it here in euro, worked out with the European Central Bank reference rate; the actual payment is made in US dollars, and because your bank converts it, the euro total on your statement can come out slightly different.',
    free: ['A free first class', 'A short check across pure and applied', 'No card needed'],
    group: ['Fifteen to twenty sixth formers', 'One mentor all year', 'Two classes a week', 'Paid month by month'],
    one: ['One pupil, one mentor', 'Your weakest strand first', 'Times around your timetable']
  },

  faq: {
    eyebrow: 'Pupils and parents ask',
    h2: 'Online A level maths tutoring in Germany: questions',
    items: [
      { q: 'Can I find an A level maths tutor online in Germany?', a: 'Yes. Modern Age Coders teaches A level Mathematics live online in English to sixth formers across Germany, for Pearson Edexcel 9MA0 and AQA 7357, in a group or one to one.' },
      { q: 'Are the classes in German?', a: 'No. All classes are live and in English only, the language of the A level papers. Mentors match each pupil\'s pace and accent.' },
      { q: 'How many papers are there in A level maths?', a: 'Three for both Edexcel and AQA. Each lasts 2 hours, carries 100 marks and is worth a third of the A level.' },
      { q: 'What is the difference between Edexcel and AQA A level maths?', a: 'Edexcel sets two pure papers and a third paper with statistics in Section A and mechanics in Section B. AQA puts mechanics in Paper 2 and statistics in Paper 3, each alongside pure content from Paper 1.' },
      { q: 'How is the A level maths grade worked out?', a: 'Pearson says its A level is graded from A* to E on the combined marks of the three papers, out of 300, and that individual papers are not graded.' },
      { q: 'What is the large data set?', a: 'A set of real data each board names for the statistics content. Pearson says its questions assume familiarity with the data set, so pupils should study it in advance; AQA also requires familiarity with its large data set or sets.' },
      { q: 'Can a German university accept A levels?', a: 'That is decided by the university under German rules, and we do not give admissions advice. Ask the admissions office of the university you are interested in.' },
      { q: 'What times are possible?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A lesson at 15:40 in Germany is at 20:10 for the mentor while Germany is on winter time.' },
      { q: 'Who are the tutors?', a: 'Mentors based in India, teaching A level maths live in English. One mentor stays with a pupil through the course.' },
      { q: 'What does it cost?', a: 'The page shows the monthly fee in euro at the European Central Bank reference rate. You pay in US dollars and your bank does the conversion. Your first class is free and no card is required.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Other pages for pupils in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page we have for Germany.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'If you switch to the German Abitur.' },
      { href: '/courses/a-level-maths-course-pure-mechanics-statistics', label: 'A Level Maths course', p: 'The syllabus in full.' },
      { href: '/courses/a-level-further-maths-course', label: 'A Level Further Maths', p: 'The second maths A level.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live lessons explained.' },
      { href: '/courses', label: 'All courses', p: 'Our full list.' }
    ]
  },

  start: {
    h2: 'Book a free first A level maths class',
    lede: 'Tell us your board and year. In the first class the mentor sets a short mix of pure and applied questions, sees which strand costs you marks, and suggests a plan up to the summer exams.',
    readFirst: 'For the detail, read the <a class="ag-inline-link" href="/courses/a-level-maths-course-pure-mechanics-statistics">A Level Maths syllabus</a>, and see <a class="ag-inline-link" href="/how-we-teach">how a lesson runs</a>.',
    note: 'Every class is live online and in English only, taught by mentors in India. WhatsApp reaches us fastest.',
    formNote: 'Free, without a card or a contract.'
  },

  footer: {
    cols: [
      { h4: 'A level', links: [
        { href: '/courses/a-level-maths-course-pure-mechanics-statistics', label: 'A Level Maths' },
        { href: '/courses/a-level-further-maths-course', label: 'A Level Further Maths' },
        { href: '/courses/a-level-computer-science-course-aqa-ocr', label: 'A Level Computer Science' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Fix the rule, then look'
  },

  personalityCss: `
.ag-root.ag-atu .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-atu .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-atu .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-atu .ag-table td { line-height: 1.5; }
.ag-root.ag-atu .ag-grid-2 h3 { letter-spacing: -0.005em; }
`,

  dossier: {
    curriculumAuthority: 'Pearson Edexcel Level 3 Advanced GCE in Mathematics specification Issue 4 (February 2020); AQA A-level Mathematics 7357 specification Version 1.3 (31 January 2018); AGIS directory pages. Read 2 and 3 November 2026. Cambridge 9709 not used (HTTP 304, empty). The test and its calculation our own.',
    localProject: 'Fix the rule, then look: an original one-tailed binomial test (H0: p = 0.3 against p < 0.3, n = 20, 5 % level) whose critical region X <= 2 is found in Python before the data (P(X <= 2) = 0.0355, P(X <= 3) = 0.1071, actual level 3.55 %), then applied to an observed 2. Lesson family: fix the decision rule before you look at the data.',
    requiredMentions: ['P(X &lt;= 2) = 0.0355', 'P(X &le; 3) = 0.1071', 'reject H<sub>0</sub> if X &le; 2', 'actual significance level of this test is 3.55 %', 'X ~ B(20, 0.3)', 'out of 300', '48 to 52 %', 'Fix the rule, then look'],
    sources: [
      { claim: '9MA0 papers, marks, weights, calculator, grading out of 300, large data set, AO table, May/June.', url: 'https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf' },
      { claim: '7357 paper contents, 2 hours, 100 marks, one third each, large data set.', url: 'https://cdn.sanity.io/files/p28bar15/green/746cb551bd31654dd1297ad272acd3605010a543.pdf' },
      { claim: 'AQA 7357 specification page.', url: 'https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357' },
      { claim: 'AGIS: Westpfalz lists Cambridge AS and A Levels; English common language.', url: 'https://www.agis-schools.org/school/international-school-westpfalz' }
    ],
    rejectedClaims: [
      'German university recognition of A levels: not fetched (anabin not read); no claim, no advice.',
      'Number of A level candidates or British schools in Germany: no official source.',
      'AQA calculator rules: not found in the pages read; not stated.',
      'Cambridge 9709 structure: the syllabus fetch returned 304 empty; not used.',
      'Real past-paper questions: not reproduced; the task is ours.',
      'Any connection with Pearson, AQA, Cambridge, AGIS or a school: none.'
    ]
  }
};
