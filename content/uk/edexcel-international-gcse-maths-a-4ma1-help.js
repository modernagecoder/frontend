'use strict';
// Pearson Edexcel International GCSE Mathematics A 4MA1 help (ag- exam door, UK and US exams cluster, row UK028).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/edexcel-international-gcse-maths-a-4ma1-help/):
//  - Pearson Edexcel International GCSE in Mathematics (Specification A) (9-1) specification, Issue 2, November 2017
//    (international-gcse-in-mathematics-spec-a.pdf from the qualification page). Verbatim: "This qualification is not
//    accredited or regulated by any UK regulatory body."; "Both examinations must be taken in the same series at the end
//    of the course of study."; Foundation 4MA1/1F and 4MA1/2F, Higher 4MA1/1H and 4MA1/2H; "Availability: January and
//    June"; "First assessment: June 2018"; "Each paper is assessed through a 2-hour examination set and marked by
//    Pearson."; "The total number of marks for each paper is 100."; each paper 50%; Foundation "(5–1)"; Higher "(9–4)";
//    "Higher Tier grades 9–4 are available (grade 3 allowed)"; Higher "Each paper will have approximately 40% of the marks
//    distributed evenly over grades 4 and 5 and approximately 60% of the marks distributed evenly over grades 6, 7, 8 and
//    9."; "approximately 40% of questions targeted at grades 5 and 4"; "Questions will assume knowledge from the
//    Foundation Tier subject content."; formulae sheets (Appendix 4 and 5); "A calculator may be used in the
//    examinations"; "Students will be expected to have access to a suitable electronic calculator for all examination
//    papers."; prohibited calculator facilities ("databanks", "retrieval of text or formulae", "QWERTY keyboards",
//    "built-in symbolic algebra manipulations", "symbolic differentiation or integration"); AO1 number and algebra
//    57–63%, AO2 shape, space and measures 22–28%, AO3 handling data 12–18%; problem solving / mathematical reasoning
//    Foundation 25% / 15%, Higher 30% / 20%; Higher content includes "differentiate integer powers of x", "solve
//    quadratic inequalities in one unknown", set notation and Venn diagrams with n(A); "Students should be advised that,
//    if they take two qualifications in the same subject, colleges, universities and employers are very likely to take
//    the view that they have achieved only one of the two GCSEs/International GCSEs."; "unclassified U result";
//    "Individual components are not graded."; progression to "the Pearson Edexcel International GCSE in Further Pure
//    Mathematics"; Issue 2 changed paper codes 4MA1/3H to 4MA1/1H and 4MA1/4H to 4MA1/2H; content "of equivalent
//    standard to Pearson's regulated GCSE in Mathematics".
// Our own material, labelled on the page: the fencing optimisation example (A = 60x - 2x^2, maximum 450 at x = 15), the
// Venn example (9 pupils in both), the quadratic inequality -3 < x < 4, and a six-question practice set, all checked in
// Python on 31 October 2026. No Pearson question is reproduced.
// Spine: the calculator is allowed on both papers, so 4MA1 marks reward method and reasoning rather than arithmetic, and
// the Higher tier has a grade 3 safety net that Foundation has no route to beyond 5. Lesson family: choosing the method
// before touching the calculator.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'EDEXCEL 4MA1', blurb: 'A calculator on both papers, two 2-hour papers sat in one series, and a Higher tier that can still award grade 3.' },
  slug: 'edexcel-international-gcse-maths-a-4ma1-help',
  code: 'eig',
  accent: '#005B66',
  accentRationale: 'Edexcel International GCSE 4MA1: a deep sea teal #005B66 from the cluster allocation, 7.37:1 on #FBF8F2 and 6.34:1 on the deepest paper tint, cool against the plum and oxblood of the two Cambridge IGCSE pages',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Edexcel International GCSE Maths A 4MA1 help',
  title: 'Edexcel IGCSE Maths 4MA1 Help: Papers, Tiers and Grades',
  description: 'Edexcel International GCSE Maths A 4MA1 help: two 2-hour papers per tier, a calculator on both, grade 3 allowed on Higher. Live online classes, 1-on-1 or group.',
  ogDescription: 'Pearson Edexcel International GCSE Mathematics A 4MA1, from the specification: Foundation and Higher papers, grades 9 to 1, the calculator rules and the January and June series.',
  twitterDescription: 'Edexcel IGCSE Maths 4MA1: 1F and 2F, 1H and 2H, grade 3 on Higher, and why method matters more than arithmetic.',
  pageName: 'Edexcel International GCSE Maths A 4MA1 Help',
  webPageDescription: 'Live online teaching for Pearson Edexcel International GCSE Mathematics A 4MA1 candidates at Foundation and Higher tier, written from the Issue 2 specification.',
  courseDescription: 'Live online classes for Edexcel International GCSE Mathematics A 4MA1: number, algebra, geometry and statistics at Foundation and Higher, including Higher calculus, sets and quadratic inequalities.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Edexcel IGCSE Maths 4MA1',
  navLinks: [
    { href: '#papers', label: 'The papers' },
    { href: '#tiers', label: 'Tiers and grades' },
    { href: '#calculator', label: 'Calculator rules' },
    { href: '#example', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Pearson Edexcel &middot; International GCSE 4MA1 &middot; Years 10 and 11',
  h1: 'Edexcel International GCSE Maths A 4MA1 help',
  lede: 'Pearson Edexcel International GCSE Mathematics (Specification A), code 4MA1, is the International GCSE maths that many UK independent schools and home-educating families choose instead of the regulated GCSE. It is graded 9 to 1 like a GCSE, but its papers differ in one big way: a calculator is used on every paper. That shifts where the marks are. This page sets out the four papers, the two tiers and their grades, the calculator rules, and how we teach 4MA1 live online.',
  secondaryCta: { href: '#papers', label: 'The papers' },
  wa: 'Hello Modern Age Coders, I would like a free first class for Edexcel International GCSE Maths 4MA1.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Not affiliated with Pearson or Edexcel',
  spec: [
    ['Qualification', 'Pearson Edexcel International GCSE Mathematics A'],
    ['Code', '4MA1'],
    ['Foundation papers', '1F and 2F, grades 5 to 1'],
    ['Higher papers', '1H and 2H, grades 9 to 4, with 3 allowed'],
    ['Each paper', '2 hours, 100 marks, 50 per cent'],
    ['Calculator', 'Allowed on every paper'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Pearson Edexcel International GCSE Mathematics A, code 4MA1, is a linear qualification graded 9 to 1. Candidates sit two papers at one tier in the same series, January or June: Foundation 1F and 2F (grades 5 to 1) or Higher 1H and 2H (grades 9 to 4, with grade 3 allowed). Each paper lasts 2 hours, carries 100 marks and is half the qualification, and a calculator may be used throughout. Modern Age Coders teaches 4MA1 live online through our IGCSE Mathematics course, in a group of 15 to 20 or 1-on-1, with a free first class.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for a 4MA1 candidate',
    lede: 'The IGCSE course carries the specification. The GCSE course helps pupils moving between the two systems, and the A level course is the next stage.',
    items: [
      { course: 'igcse-mathematics-mastery', code: 'EI / 01', title: 'IGCSE Mathematics', note: 'Foundation and Higher 4MA1 content, including the Higher calculus, sets and inequalities.' },
      { course: 'gcse-mathematics-mastery', code: 'EI / 02', title: 'GCSE Mathematics', note: 'For pupils changing between GCSE and International GCSE, where the content overlaps closely.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'EI / 03', title: 'A Level Maths', note: 'The usual next qualification after a strong Higher result.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'The papers',
      h2: 'How is Edexcel IGCSE Maths 4MA1 structured?',
      lede: 'Two papers at one tier, each two hours, sat together at the end of the course.',
      body: [
        { kind: 'p', html: 'The specification describes 4MA1 as a linear qualification: "Both examinations must be taken in the same series at the end of the course of study." There is no coursework, no modular unit and no early paper. Pearson sets and marks both papers, and "Individual components are not graded"; only the combined mark becomes a grade.' },
        { kind: 'table', caption: 'Pearson Edexcel International GCSE Mathematics A 4MA1: the four papers', head: ['Paper', 'Tier', 'Time', 'Marks', 'Weight', 'Grades targeted'], rows: [
          ['4MA1/1F', 'Foundation', '2 hours', '100', '50 per cent', '5 to 1'],
          ['4MA1/2F', 'Foundation', '2 hours', '100', '50 per cent', '5 to 1'],
          ['4MA1/1H', 'Higher', '2 hours', '100', '50 per cent', '9 to 4, with 3 allowed'],
          ['4MA1/2H', 'Higher', '2 hours', '100', '50 per cent', '9 to 4, with 3 allowed']
        ] },
        { kind: 'source', html: 'Source: Pearson Edexcel International GCSE in Mathematics (Specification A) specification, Issue 2, November 2017, "Qualification at a glance" and "Assessment summary", from the <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-mathematics-a-2016.html" rel="noopener" target="_blank">Pearson 4MA1 qualification page</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'January and June',
          left: [
            'Both tiers are available in January and June, according to the specification. That gives 4MA1 a winter sitting, which matters to a home-educated pupil who is ready early or who needs a second attempt without waiting a full year.',
            'Exact dates are set in Pearson\'s timetable for each series, which an exam centre will confirm when it makes the entry.'
          ],
          rightH3: 'Old paper codes',
          right: [
            'Issue 2 of the specification renamed the Higher papers: 4MA1/3H became 4MA1/1H, and 4MA1/4H became 4MA1/2H. Some older resource packs still use the 3H and 4H labels.',
            'The content did not change with the renaming, so those papers remain usable practice at Higher tier.'
          ] }
      ]
    },
    {
      id: 'tiers', tint: 'deep', eyebrow: 'Tiers and grades',
      h2: 'Foundation or Higher: which grades can each 4MA1 tier give?',
      lede: 'Foundation tops out at grade 5. Higher reaches 9, and unusually still allows a grade 3 underneath.',
      body: [
        { kind: 'p', html: 'Pearson grades 4MA1 "on a nine-grade scale from 9 to 1 using the total subject mark where 9 is the highest grade." Foundation candidates can be awarded grades 5 to 1, and Higher candidates 9 to 4, with grade 3 allowed as well. Below the lowest grade, the result is an unclassified U.' },
        { kind: 'table', mt: true, caption: 'How the two 4MA1 tiers are built, from the specification', head: ['', 'Foundation (1F, 2F)', 'Higher (1H, 2H)'], rows: [
          ['Grades available', '5, 4, 3, 2, 1', '9, 8, 7, 6, 5, 4, with 3 allowed'],
          ['How marks are spread', 'Approximately equal marks for each targeted grade', 'About 40 per cent over grades 4 and 5, about 60 per cent over grades 6 to 9'],
          ['Shared ground', 'About 40 per cent of questions target grades 5 and 4 across 1F and 1H', 'The same overlap, across 2F and 2H'],
          ['Problem solving', '25 per cent', '30 per cent'],
          ['Mathematical reasoning', '15 per cent', '20 per cent'],
          ['Assumed knowledge', 'Key Stage 3 maths or its equivalent', 'All Foundation content, plus Higher-only topics']
        ] },
        { kind: 'p', mt: true, html: 'The middle row explains the safety net. Because roughly 40 per cent of the questions on each pair of papers target grades 4 and 5, a Higher candidate who copes with the shared questions but not the harder ones can still reach a 4, and Pearson allows a grade 3 below that. A Foundation candidate, however strong, cannot be awarded more than a 5.' },
        { kind: 'two', mt: true,
          leftH3: 'When Foundation is sensible',
          left: [
            'For a pupil whose aim is a secure 4 or 5, and who is not planning A level maths, Foundation papers contain fewer of the long multi-step problems and give more marks to each targeted grade.',
            'It closes the door to grade 6 and above in that series, so it should be a decision, not a default.'
          ],
          rightH3: 'When Higher is the right entry',
          right: [
            'Any pupil who might take A level maths, physics or economics needs a grade that only Higher can award. Each sixth form sets its own maths requirement for A level, so check it early.',
            'The grade 3 allowance makes Higher less of a gamble than it looks, but it is not a reason to enter a pupil who is not yet ready for the Higher-only content.'
          ] }
      ]
    },
    {
      id: 'calculator', tint: '', eyebrow: 'Calculator rules',
      h2: 'Is 4MA1 a calculator exam?',
      lede: 'Yes, on both papers at both tiers. That makes method and reasoning, not arithmetic, the place where most marks are won and lost.',
      body: [
        { kind: 'p', html: 'The specification is unambiguous: "Students will be expected to have access to a suitable electronic calculator for all examination papers." This is a real difference from Cambridge IGCSE 0580, where every candidate sits one paper of the two with no calculator at all. A 4MA1 pupil does not need to drill long multiplication by hand, but does need to know exactly what to type and why.' },
        { kind: 'table', mt: true, caption: 'Calculator requirements for 4MA1, from the specification', head: ['Rule', 'Foundation (1F, 2F)', 'Higher (1H, 2H)'], rows: [
          ['Minimum functions', 'Four operations, squares, roots, powers, reciprocals, memory, brackets, statistical sums, sine, cosine, tangent and their inverses', 'The Foundation list plus standard form'],
          ['Prohibited on every paper', 'Databanks, retrieval of text or formulae, QWERTY keyboards', 'Built-in symbolic algebra, symbolic differentiation or integration'],
          ['Formulae sheet', 'Foundation sheet, Appendix 4', 'Higher sheet, Appendix 5']
        ] },
        { kind: 'p', mt: true, html: 'The problem-solving and reasoning shares in the tier table are the other half of the story. On Higher, 30 per cent of the assessment is problem solving and 20 per cent is mathematical reasoning. A calculator cannot decide which method to use, set up an equation from words, or explain why a result follows. So our 4MA1 classes spend more time on reading a question and planning the route than on raw calculation, and we still insist on written working, because the calculator answer alone earns no method marks if it is wrong.' },
        { kind: 'table', mt: true, caption: 'What the assessment rewards, from the 4MA1 assessment objectives', head: ['Objective', 'Content', 'Share of the International GCSE'], rows: [
          ['AO1', 'Number and algebra: calculations, equations, sequences, functions and graphs', '57 to 63 per cent'],
          ['AO2', 'Shape, space and measures: geometry, trigonometry, vectors, transformations', '22 to 28 per cent'],
          ['AO3', 'Handling data: statistics and probability', '12 to 18 per cent']
        ] },
        { kind: 'source', html: 'Source: 4MA1 specification, Issue 2, "Calculators" and "Assessment objectives and weightings". Our paraphrase of the calculator function list; the specification gives it in symbols.' }
      ]
    },
    {
      id: 'example', tint: 'tint', eyebrow: 'Worked examples, ours',
      h2: 'Three Higher-tier ideas, worked step by step',
      lede: 'Problems we wrote on three Higher-only areas of the specification: differentiation, sets and quadratic inequalities.',
      body: [
        { kind: 'p', html: '<strong>Our first problem, calculus.</strong> A gardener has 60 m of fencing to make a rectangular pen against a long wall, so only three sides need fence. The two sides at right angles to the wall are each x m long. Show that the area is A = 60x &minus; 2x<sup>2</sup>, and find the largest possible area.' },
        { kind: 'ol', mt: true, items: [
          'The side parallel to the wall uses the rest of the fence: 60 &minus; 2x metres. The area is x(60 &minus; 2x) = 60x &minus; 2x<sup>2</sup>, which is the result we were asked to show.',
          'Differentiate: dA/dx = 60 &minus; 4x. The 4MA1 Higher content asks pupils to differentiate integer powers of x and find maxima and minima this way.',
          'Set the derivative to zero: 60 &minus; 4x = 0, so x = 15. The pen is 15 m by 30 m.',
          'The largest area is 15 &times; 30 = 450 m<sup>2</sup>. A quick check either side: x = 14 gives 448 m<sup>2</sup> and x = 16 gives 448 m<sup>2</sup>, both smaller, so 450 is a maximum.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our second problem, sets',
          left: [
            'In a class of 40 pupils, 24 study French, 18 study Spanish and 7 study neither. How many study both, and what is the probability that a pupil chosen at random studies Spanish only?',
            'Those studying at least one language number 40 &minus; 7 = 33, so n(F &cup; S) = 33. Then n(F &cap; S) = 24 + 18 &minus; 33 = 9. Spanish only is 18 &minus; 9 = 9 pupils, so the probability is 9/40. Drawing the Venn diagram first makes every number visible.'
          ],
          rightH3: 'Our third problem, inequalities',
          right: [
            'Solve x<sup>2</sup> &minus; x &minus; 12 &lt; 0. Factorise to (x &minus; 4)(x + 3) &lt; 0. The critical values are 4 and &minus;3.',
            'The curve y = (x &minus; 4)(x + 3) is a U shape, below the axis between its roots, so the solution is &minus;3 &lt; x &lt; 4. A sketch is the check that stops pupils writing x &lt; 4 and x &lt; &minus;3.'
          ] },
        { kind: 'table', mt: true, caption: 'Six practice questions, written by us at 4MA1 level (answers checked in Python)', head: ['#', 'Our question', 'Tier', 'Answer'], rows: [
          ['1', 'A machine loses 15 per cent of its value each year. What percentage of its original value remains after 4 years, to 3 significant figures?', 'Foundation and Higher', '52.2 per cent'],
          ['2', 'Write 360 as a product of its prime factors in index form.', 'Foundation', '2<sup>3</sup> &times; 3<sup>2</sup> &times; 5'],
          ['3', 'A length is 12.4 cm, correct to 1 decimal place. Write down its upper bound.', 'Higher', '12.45 cm'],
          ['4', 'f(x) = 3x &minus; 4. Find f<sup>&minus;1</sup>(x).', 'Higher', '(x + 4)/3'],
          ['5', 'Differentiate y = 4x<sup>3</sup> &minus; 5x + 7.', 'Higher', '12x<sup>2</sup> &minus; 5'],
          ['6', 'Solve the simultaneous equations y = 2x + 1 and x<sup>2</sup> + y<sup>2</sup> = 13.', 'Higher', 'x = 1.2, y = 3.4 or x = &minus;2, y = &minus;3']
        ] },
        { kind: 'source', html: 'All three examples and all six questions are ours, written on 31 October 2026. They are not Pearson questions. Sample assessment materials are published on the <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-mathematics-a-2016.html" rel="noopener" target="_blank">Pearson 4MA1 page</a>, and past papers are available through Pearson to schools and exam centres.' }
      ]
    },
    {
      id: 'recognition', tint: 'deep', eyebrow: 'Recognition',
      h2: 'Is Edexcel International GCSE Maths the same as a GCSE?',
      lede: 'It is designed to the same standard, but it is not regulated in the UK, and it should not be taken alongside a GCSE in maths.',
      body: [
        { kind: 'p', html: 'Pearson is candid about the status. The specification says: "This qualification is not accredited or regulated by any UK regulatory body." It also says the content is "of equivalent standard to Pearson\'s regulated GCSE in Mathematics", and that it supports progression to AS and A level Mathematics, Further Mathematics and the International A level. For most universities and sixth forms that is enough, but families should check any requirement that names a regulated GCSE specifically.' },
        { kind: 'table', mt: true, caption: 'Points worth knowing before choosing 4MA1, from the specification', head: ['Point', 'What Pearson says'], rows: [
          ['Regulation', 'Not accredited or regulated by any UK regulatory body'],
          ['Standard', 'Of equivalent standard to Pearson\'s regulated GCSE in Mathematics'],
          ['Taking two maths qualifications', 'Colleges, universities and employers are very likely to treat a GCSE and an International GCSE in the same subject as one'],
          ['Next qualifications', 'International GCSE Further Pure Mathematics, AS and A level Mathematics and Further Mathematics'],
          ['Prior learning', 'Builds on Key Stage 3 maths, ages 11 to 14, or an international equivalent']
        ] },
        { kind: 'p', mt: true, html: 'The double-entry warning is the one that catches families out. A pupil who sits GCSE maths at school and 4MA1 privately gains one maths qualification in the eyes of most institutions, not two. A stronger second qualification is a different one, such as Pearson\'s International GCSE in Further Pure Mathematics, which the specification lists as a progression route.' },
        { kind: 'p', mt: true, html: 'For the English GCSE system, <a class="ag-inline-link" href="/aqa-vs-edexcel-vs-ocr-gcse-maths">our comparison of AQA, Edexcel and OCR GCSE maths</a> explains the three-paper structure, and <a class="ag-inline-link" href="/gcse-maths-calculator-vs-non-calculator-papers">calculator against non-calculator papers</a> covers how the English GCSE handles calculators. Home-educated families can start from <a class="ag-inline-link" href="/coding-for-home-educated-children-uk">our home-education page</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs towards a 4MA1 entry',
    lede: 'The order follows the specification: Foundation content first, then the Higher-only topics, then reasoning under time.',
    table: { caption: 'What a 4MA1 candidate should be able to do at each stage', head: ['Rung', 'Typical timing', 'What should be true'], rows: [
      ['1. Foundation content secure', 'Year 9 to early Year 10', 'Number, ratio, algebra, geometry and statistics at Foundation level, with calculator fluency'],
      ['2. Higher-only topics', 'Year 10', 'Sets and Venn diagrams, functions, quadratic inequalities, surds, vectors and differentiation'],
      ['3. Problem solving', 'Late Year 10 into Year 11', 'Setting up equations from words and choosing the method without being told'],
      ['4. Two papers in one series', 'Before January or June', 'Two full two-hour papers practised close together, with written working throughout']
    ] },
    left: { h3: 'Rung three is the 4MA1 skill', ps: [
      'With a calculator on every paper, the marks that separate grades come from planning and reasoning, which take months to build.',
      'Pupils who enjoy logic may like the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> too.'
    ] },
    right: { h3: 'Rung four is about stamina', ps: [
      'Four hours of maths in one series is demanding. We practise two papers within a few days of each other.',
      'Weekly classes ease off during the exam weeks.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for International GCSE pupils',
    lede: 'Arranged by purpose. The free first class decides the starting course.',
    bands: [
      { num: 'I', h3: 'The qualification', sub: 'Foundation and Higher', courses: [
        { code: 'UK / EI1 / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE mathematics', blurb: 'The full 4MA1 specification at either tier.' },
        { code: 'UK / EI1 / 02', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'For pupils who switch between GCSE and International GCSE.' },
        { code: 'UK / EI1 / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Key Stage 3 maths rebuilt before the course begins.' }
      ] },
      { num: 'II', h3: 'Strands', sub: 'Where pupils often need extra time', courses: [
        { code: 'UK / EI2 / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Histograms, cumulative frequency and conditional probability.' },
        { code: 'UK / EI2 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations and manipulation for pupils whose algebra is fragile.' },
        { code: 'UK / EI2 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Sequences, functions and probability tried out in Python.' }
      ] },
      { num: 'III', h3: 'After 4MA1', sub: 'For strong Higher pupils', courses: [
        { code: 'UK / EI3 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, mechanics and statistics after a Higher grade.' },
        { code: 'UK / EI3 / 02', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'For pupils who want maths as a main subject.' },
        { code: 'UK / EI3 / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Reasoning problems beyond any specification.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Planning first, calculator second',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teaching comes from India, where the time never shifts for summer, and we always quote class times in UK time.',
    slots: [
      { time: 'After school', l: 'The usual slot for Years 10 and 11.' },
      { time: 'Evening', l: 'For pupils busy straight after school.' },
      { time: 'Weekend morning', l: 'Room for a full two-hour paper.' }
    ],
    cells: [
      { h3: 'Route before keys', p: 'Each problem starts with a written plan, then the calculator.' },
      { h3: 'Higher-only topics', p: 'Sets, functions, inequalities and calculus taught early enough to settle.' },
      { h3: 'Working on paper', p: 'Every step written, so a slip on the calculator still earns method marks.' },
      { h3: 'Word problems', p: 'Practice turning sentences into equations, the core of problem solving.' },
      { h3: 'Series planning', p: 'Practice paced for a January or June entry, whichever the centre offers.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20 at one tier, or one teacher for one pupil.' }
    ]
  },

  projectsH2: 'Projects from our classes',
  projectsLede: 'Work students made in normal lessons, separate from any exam. See more in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, as they wrote them.',

  fees: {
    h2: 'Fees for 4MA1 classes',
    lede: 'Families outside India pay one monthly fee in US dollars. There is no charge for the first class, and nothing is billed until a course and a weekly time are set.',
    free: ['A first class on 4MA1 content', 'An honest view of Foundation against Higher', 'Booked with just a phone number'],
    group: ['A group of 15 to 20 at one tier', 'The same teacher across the course', 'Problem-solving practice every week', 'Lighter weeks around each series'],
    one: ['A teacher for one pupil', 'Paced to a January or June entry', 'Suits private candidates working to their own plan']
  },

  faq: {
    eyebrow: 'Questions about 4MA1',
    h2: 'What families ask about Edexcel IGCSE Maths',
    items: [
      { q: 'How many papers are in Edexcel IGCSE Maths 4MA1?', a: 'Two at each tier. Foundation candidates sit 1F and 2F, and Higher candidates sit 1H and 2H. Each paper lasts 2 hours, has 100 marks and is worth half of the qualification.' },
      { q: 'Is there a non-calculator paper in Edexcel IGCSE Maths?', a: 'No. The 4MA1 specification says students will be expected to have access to a suitable electronic calculator for all examination papers. Calculators with symbolic algebra or QWERTY keyboards are not allowed.' },
      { q: 'What grades can you get on Higher tier 4MA1?', a: 'Grades 9 to 4, and Pearson also allows a grade 3 on Higher. Below that the result is an unclassified U.' },
      { q: 'What is the highest grade on Foundation 4MA1?', a: 'Grade 5. Foundation papers target grades 5 to 1, so a pupil who needs a 6 or above must sit Higher.' },
      { q: 'When can 4MA1 be taken?', a: 'The specification lists January and June series for both tiers. Both papers must be taken in the same series, and the exam centre confirms the dates.' },
      { q: 'Is Edexcel International GCSE regulated by Ofqual?', a: 'No. The specification states that the qualification is not accredited or regulated by any UK regulatory body. Pearson designs it to the same standard as its regulated GCSE in Mathematics.' },
      { q: 'Can my child take GCSE and International GCSE maths?', a: 'They can, but Pearson warns that colleges, universities and employers are very likely to count two qualifications in the same subject as one. A second, different qualification such as Further Pure Mathematics is usually more useful.' },
      { q: 'Is calculus in Edexcel IGCSE Maths?', a: 'Yes, at Higher tier. The specification includes differentiating integer powers of x and using derivatives to find gradients, turning points, maxima and minima.' },
      { q: 'What times are your 4MA1 classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are shown in UK time.' },
      { q: 'Are you connected with Pearson Edexcel?', a: 'No. We are an independent teaching company with no link to Pearson. We teach to the published specification and write our own practice questions.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for International GCSE families',
    lede: 'Other boards, the English GCSE, and the next steps after 4MA1.',
    items: [
      { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition online', p: 'Cambridge and Edexcel side by side, for families still deciding.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition online', p: 'The regulated English GCSE, for pupils at state or independent schools.' },
      { href: '/gcse-maths-grades-explained', label: 'GCSE maths grades explained', p: 'How the 9 to 1 scale works, which 4MA1 shares.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition online', p: 'The next stage after a strong Higher grade.' },
      { href: '/coding-for-home-educated-children-uk', label: 'Coding for home-educated children', p: 'For families who also teach computing at home.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our directory of every UK page.' }
    ]
  },

  start: {
    h2: 'Book a free 4MA1 class',
    lede: 'Give us a number and we will ring at a UK time that suits. The class uses our own 4MA1-level problems and ends with a view on the tier.',
    readFirst: 'Rather read before booking? Each <a class="ag-inline-link" href="/courses">course page</a> sets out its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows a typical class, and <a class="ag-inline-link" href="/student-labs">student labs</a> collects what students have made.',
    note: 'Messaging us on WhatsApp is the quickest option and free from UK phones. Our reply comes from India, on a number beginning +91.',
    formNote: 'No card details and no contract; one message back with a time.'
  },

  footer: {
    cols: [
      { h4: 'International GCSE', links: [
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition' },
        { href: '/gcse-maths-grades-explained', label: '9 to 1 grades explained' },
        { href: '/coding-for-igcse-students', label: 'Coding for IGCSE students' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'After 4MA1', links: [
        { href: '/a-level-maths-tuition-online', label: 'A level maths' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Edexcel International GCSE maths 4MA1, taught in UK hours'
  },

  personalityCss: `
.ag-root.ag-eig .ag-hero h1 { letter-spacing: -0.018em; font-weight: 700; }
.ag-root.ag-eig .ag-capsule { border-left-width: 4px; border-radius: 4px; }
.ag-root.ag-eig .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-eig .ag-table caption { text-align: left; font-weight: 660; }
.ag-root.ag-eig .ag-table th:first-child { width: 18%; }
.ag-root.ag-eig .ag-steps li { padding-bottom: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Pearson Edexcel International GCSE in Mathematics (Specification A) (9-1), 4MA1, specification Issue 2, November 2017: linear, both papers in the same series; Foundation 1F and 2F and Higher 1H and 2H, each 2 hours, 100 marks and 50 per cent; Foundation grades 5 to 1, Higher 9 to 4 with 3 allowed; January and June availability; calculator on all papers with listed prohibitions; formulae sheets; AO weights 57 to 63, 22 to 28 and 12 to 18 per cent; problem solving and reasoning 25 and 15 per cent (Foundation), 30 and 20 per cent (Higher); not accredited or regulated by any UK regulatory body; same-subject double-entry warning; progression to Further Pure Mathematics.',
    localProject: 'A calculator on every paper moves the marks into method. The page sets out the four 4MA1 papers and their codes, the tier grade ranges and the grade 3 allowance on Higher, the calculator minimums and prohibitions, the assessment objectives and problem-solving shares, and the regulation and double-entry points, then works three of our own Higher problems (a fencing optimisation with maximum 450 m^2 at x = 15, a Venn problem with 9 pupils in both sets, the inequality -3 < x < 4) and gives a six-question practice set written by us.',
    requiredMentions: ['Of equivalent standard to Pearson\'s regulated GCSE in Mathematics', 'There is no coursework, no modular unit and no early paper', 'Higher candidates 9 to 4, with grade 3 allowed as well', 'access to a suitable electronic calculator for all examination papers', 'Individual components are not graded', '4MA1/3H became 4MA1/1H', 'very likely to treat a GCSE and an International GCSE', 'A = 60x &minus; 2x<sup>2</sup>', 'About 40 per cent over grades 4 and 5', 'n(F &cap; S) = 24 + 18 &minus; 33 = 9'],
    sources: [
      { claim: 'Pearson Edexcel International GCSE in Mathematics (Specification A) specification, Issue 2: structure, papers, grades, availability, calculators, assessment objectives, regulation status, entries and progression.', url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf' },
      { claim: 'Pearson 4MA1 qualification page linking the current specification and support documents.', url: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-mathematics-a-2016.html' },
      { claim: 'Pearson Edexcel International GCSE in Further Pure Mathematics specification: progression route named for 4MA1 Higher candidates.', url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Further%20Pure%20Mathematics/2016/Specification%20and%20sample%20assessments/international-gcse-in-further-pure-mathematics-spec.pdf' }
    ],
    rejectedClaims: [
      'Exam dates for January or June 2027: Pearson\'s international timetable was not read for this build, so no date is printed.',
      'Grade boundaries and results statistics: not read at a primary source, not printed.',
      'Sixth-form entry grades: vary by institution; the page tells families to check the sixth form\'s own requirement.',
      'Any Pearson past paper or sample question: not reproduced; all examples and the practice set are ours.',
      'That a particular share of UK independent schools uses 4MA1: no primary source read, so the page says only that many choose it.',
      'Exam centre fees and any grade promise or affiliation with Pearson: not printed, declined on the page.'
    ]
  }
};
