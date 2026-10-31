'use strict';
// Pearson Edexcel A level Mathematics 9MA0 help (ag- exam door, UK and US exams cluster, row UK032).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/edexcel-a-level-maths-9ma0-help/):
//  - Pearson Edexcel Level 3 Advanced GCE in Mathematics (9MA0) specification, Issue 4, February 2020 (from the Pearson
//    A level Mathematics 2017 qualification page). Verbatim: "First teaching from September 2017", "First certification
//    from 2018"; "consists of three externally-examined papers."; "Students must complete all assessment in May/June in
//    any single year."; Paper 1 "Pure Mathematics 1 (*Paper code: 9MA0/01)", Paper 2 "Pure Mathematics 2 (*Paper code:
//    9MA0/02)", Paper 3 "Statistics and Mechanics (*Paper code: 9MA0/03)"; each "2-hour written examination", "33.33% of
//    the qualification", "100 marks"; Topics 1 to 10 for pure (Proof ... Vectors); Paper 3 "Section A: Statistics"
//    (Topics 1 to 5) and "Section B: Mechanics" (Topics 6 to 9); "Paper 1 and Paper 2 may contain questions on any topics
//    from the Pure Mathematics content."; "Students must answer all questions."; "Calculators can be used in the
//    assessment."; "The booklet 'Mathematical Formulae and Statistical Tables' will be provided"; Appendix 1 formulae
//    "will not appear in the booklet"; large data set: "Students are required to become familiar with the data set in
//    advance of the final assessment."; "questions should be likely to give a material advantage to students who have
//    studied and are familiar with the data set."; "Students will not be required to have copies of the data set in the
//    examination, nor will they be required to have detailed knowledge of the actual data within the data set."; "we will
//    notify centres before the beginning of the two-year course"; AO breakdown (Papers 1 and 2: AO1 16.00 to 17.33, AO2
//    8.66 to 10, AO3 6.33 to 7.67; Paper 3: AO1 16.00 to 17.33, AO2 5.66 to 7.00, AO3 10.33 to 11.67; totals 48 to 52,
//    23 to 27, 23 to 27; "Totals have been rounded either up or down."); "graded and certificated on a six-grade scale from
//    A* to E using the total combined marks (out of 300) for the three compulsory papers. Individual papers are not
//    graded."; "unclassified U result"; "There are no prior learning or other requirements for this qualification.";
//    calculators: "an iterative function", "the ability to compute summary statistics and access probabilities from
//    standard statistical distributions", size, power and no lids with printed formulas; discount-code advice; content
//    lines: "Proof by contradiction", "integration by parts", "projectiles", "F ≤ μR model for friction", conditional
//    probability; Issue 4 changes (proof by exhaustion example replaced, typographical corrections).
// Our own material, labelled on the page: integration by parts of x ln x from 1 to e ((e^2 + 1)/4, about 2.0973), a proof
// by contradiction that a^2 - b^2 = 2 has no positive integer solutions, a projectile (time 2.04 s, range 35.3 m), an
// independence check, and a six-question practice set, checked in Python on 31 October 2026. No Pearson question is
// reproduced.
// Spine: two pure papers, then one paper that splits into statistics and mechanics, assumes the large data set and
// carries the most problem-solving weight. Lesson family: modelling, where the assumptions are part of the answer.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'EDEXCEL 9MA0', blurb: 'Two pure papers, then a Paper 3 split into statistics and mechanics that assumes the large data set and weights problem solving most heavily.' },
  slug: 'edexcel-a-level-maths-9ma0-help',
  code: 'el',
  accent: '#76400F',
  accentRationale: 'Edexcel A level Maths 9MA0: a burnt umber #76400F from the cluster allocation, 7.89:1 on #FBF8F2 and 6.79:1 on the deepest paper tint, browner and warmer than the AQA 7357 rosewood',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Edexcel A level Maths 9MA0 help',
  title: 'Edexcel A Level Maths 9MA0 Help: Papers, Data Set, Formulae',
  description: 'Edexcel A level Maths 9MA0 tuition: two pure papers, a statistics and mechanics Paper 3, the large data set and the formulae booklet. Live online, 1-on-1 or group.',
  ogDescription: 'Pearson Edexcel A level Mathematics 9MA0 from the Issue 4 specification: the three papers, how Paper 3 is split, the large data set, the formulae to learn and the calculator rules.',
  twitterDescription: 'Edexcel A level Maths 9MA0: Pure 1, Pure 2, Statistics and Mechanics, and what the large data set means for Paper 3.',
  pageName: 'Edexcel A Level Maths 9MA0 Help',
  webPageDescription: 'Live online teaching for Pearson Edexcel A level Mathematics 9MA0 students in Years 12 and 13, written from the Issue 4 specification.',
  courseDescription: 'Live online classes for Pearson Edexcel A level Mathematics 9MA0: the ten pure topics for Papers 1 and 2, and statistics and mechanics for Paper 3, including the large data set.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Edexcel A level Maths 9MA0',
  navLinks: [
    { href: '#papers', label: 'The papers' },
    { href: '#paper3', label: 'Paper 3' },
    { href: '#booklet', label: 'Formulae booklet' },
    { href: '#example', label: 'Worked examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Pearson Edexcel &middot; A level Mathematics 9MA0 &middot; Years 12 and 13',
  h1: 'Edexcel A level Maths 9MA0 help',
  lede: 'Pearson Edexcel A level Mathematics, code 9MA0, is examined in three papers at the end of Year 13. Two of them are entirely pure maths. The third, Statistics and Mechanics, is divided into two sections and is where the large data set, modelling and most of the problem-solving marks sit. This page explains what each paper covers, the booklet and the formulae that are not in it, the calculator rules, and how we teach 9MA0 live online.',
  secondaryCta: { href: '#papers', label: 'The papers' },
  wa: 'Hello Modern Age Coders, I would like a free first class for Edexcel A level Maths 9MA0.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Not affiliated with Pearson Edexcel',
  spec: [
    ['Qualification', 'Pearson Edexcel A level Mathematics'],
    ['Code', '9MA0'],
    ['Papers 1 and 2', 'Pure Mathematics'],
    ['Paper 3', 'Statistics, then Mechanics'],
    ['Each paper', '2 hours, 100 marks, a third'],
    ['Series', 'May and June, all in one year'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Pearson Edexcel A level Mathematics 9MA0 is assessed by three 2-hour written papers of 100 marks, each worth a third, sat together in May and June of one year. Paper 1 and Paper 2 are Pure Mathematics and may test any pure topic. Paper 3 has Section A Statistics and Section B Mechanics, and assumes the Pearson large data set. Calculators are allowed and a formulae booklet is provided. Grades are A* to E. Modern Age Coders teaches 9MA0 live online through our A Level Maths course, in a group of 15 to 20 or 1-on-1, with a free first class.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for an Edexcel 9MA0 student',
    lede: 'The A level course carries 9MA0. Statistics adds depth for Paper 3 Section A, and Further Maths is for those taking a second A level in the subject.',
    items: [
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'EL / 01', title: 'A Level Maths', note: 'All of 9MA0: ten pure topics, then statistics and mechanics for Paper 3.' },
      { course: 'statistics-probability-maths-course', code: 'EL / 02', title: 'Statistics and Probability', note: 'Distributions, hypothesis tests and data interpretation, for Section A.' },
      { course: 'a-level-further-maths-course', code: 'EL / 03', title: 'A Level Further Maths', note: 'For students sitting Edexcel Further Maths alongside 9MA0.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'The papers',
      h2: 'How many papers are in Edexcel A level Maths?',
      lede: 'Three, equal in time and marks. Two are pure; one is applied.',
      body: [
        { kind: 'p', html: 'The specification describes 9MA0 as consisting "of three externally-examined papers", and is firm about timing: "Students must complete all assessment in May/June in any single year." There is no route to sit one paper in Year 12 and the others later. Each paper is a 2-hour written exam out of 100, and the grade comes from "the total combined marks (out of 300) for the three compulsory papers. Individual papers are not graded."' },
        { kind: 'table', caption: 'Pearson Edexcel A level Mathematics 9MA0: the three papers', head: ['Paper', 'Code', 'Content', 'Time', 'Marks', 'Weight'], rows: [
          ['Paper 1: Pure Mathematics 1', '9MA0/01', 'Any pure topic, 1 to 10', '2 hours', '100', '33.33 per cent'],
          ['Paper 2: Pure Mathematics 2', '9MA0/02', 'Any pure topic, 1 to 10', '2 hours', '100', '33.33 per cent'],
          ['Paper 3: Statistics and Mechanics', '9MA0/03', 'Section A statistics topics 1 to 5; Section B mechanics topics 6 to 9', '2 hours', '100', '33.33 per cent']
        ] },
        { kind: 'source', html: 'Source: Pearson Edexcel Level 3 Advanced GCE in Mathematics (9MA0) specification, Issue 4, February 2020, "Qualification at a glance", from the <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/mathematics-2017.html" rel="noopener" target="_blank">Pearson A level Mathematics page</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'The ten pure topics',
          left: [
            'Proof; algebra and functions; coordinate geometry in the (x, y) plane; sequences and series; trigonometry; exponentials and logarithms; differentiation; integration; numerical methods; vectors.',
            'Either pure paper "may contain questions on any topics from the Pure Mathematics content", so there is no topic that belongs to Paper 1 only. Revision for both papers is the same revision.'
          ],
          rightH3: 'The applied topics',
          right: [
            'Statistics: sampling, data presentation and interpretation, probability, statistical distributions, hypothesis testing. Mechanics: quantities and units, kinematics including projectiles, forces and Newton\'s laws including friction, and moments.',
            'Pure skills still matter in Paper 3: kinematics with variable acceleration uses calculus, and resolving forces uses trigonometry.'
          ] }
      ]
    },
    {
      id: 'paper3', tint: 'deep', eyebrow: 'Paper 3',
      h2: 'What is special about Edexcel A level Maths Paper 3?',
      lede: 'It is the only applied paper, it assumes the large data set, and it gives problem solving more weight than either pure paper.',
      body: [
        { kind: 'p', html: 'Pearson publishes the assessment-objective split paper by paper, and it shows a real difference. On each pure paper, AO3 (solving problems and modelling) is worth 6.33 to 7.67 per cent of the A level. On Paper 3 it is worth 10.33 to 11.67 per cent, while AO2 (reasoning and communicating) falls to 5.66 to 7.00 per cent. Paper 3 is where the specification puts the most modelling.' },
        { kind: 'table', mt: true, caption: 'Assessment objectives by paper, as a percentage of the whole A level (Pearson\'s figures, rounded by Pearson)', head: ['Paper', 'AO1 technique', 'AO2 reasoning', 'AO3 problem solving'], rows: [
          ['Paper 1: Pure Mathematics 1', '16.00 to 17.33', '8.66 to 10', '6.33 to 7.67'],
          ['Paper 2: Pure Mathematics 2', '16.00 to 17.33', '8.66 to 10', '6.33 to 7.67'],
          ['Paper 3: Statistics and Mechanics', '16.00 to 17.33', '5.66 to 7.00', '10.33 to 11.67'],
          ['Whole A level', '48 to 52', '23 to 27', '23 to 27']
        ] },
        { kind: 'p', mt: true, html: 'Then there is the data set. The specification says: "Students are required to become familiar with the data set in advance of the final assessment." Questions "assume knowledge and understanding of the data set", and Pearson is explicit that they "should be likely to give a material advantage to students who have studied and are familiar with the data set." At the same time, students "will not be required to have copies of the data set in the examination, nor will they be required to have detailed knowledge of the actual data".' },
        { kind: 'two', mt: true,
          leftH3: 'What familiarity means',
          left: [
            'Knowing the variables, their units and how they are recorded, what any abbreviations stand for, and where values are missing or unusual.',
            'Being able to read a summary statistic or chart from the data set and interpret it in context, without needing the setting explained.'
          ],
          rightH3: 'What it does not mean',
          right: [
            'Memorising individual values. Pearson rules that out in writing.',
            'Using a different year\'s data. The specification says Pearson reviews the data set annually and will notify centres of any change "before the beginning of the two-year course", so download the version for your cohort.'
          ] }
      ]
    },
    {
      id: 'booklet', tint: '', eyebrow: 'Formulae booklet',
      h2: 'Do you get a formula sheet in Edexcel A level Maths?',
      lede: 'Yes: the Mathematical Formulae and Statistical Tables booklet. But Appendix 1 lists formulae that are deliberately left out of it.',
      body: [
        { kind: 'p', html: 'Every 9MA0 paper is sat with "The booklet \'Mathematical Formulae and Statistical Tables\'". The specification adds a list of formulae that "students are expected to know for A Level Mathematics" which "will not appear in the booklet". These run from the quadratic formula and laws of indices to the sine and cosine rules, standard derivatives and integrals, standardising a normal variable, and the friction model.' },
        { kind: 'table', mt: true, caption: 'Areas covered by Appendix 1 of the 9MA0 specification, with examples in our words', head: ['Area', 'Examples to know without the booklet'], rows: [
          ['Algebra', 'The quadratic formula and the laws of indices and logarithms'],
          ['Coordinate geometry and sequences', 'The equation of a line through a point, the perpendicular-gradient rule, and the general terms of arithmetic and geometric progressions'],
          ['Trigonometry and mensuration', 'The sine and cosine rules, the area &frac12;ab sin C, cosec<sup>2</sup> A &equiv; 1 + cot<sup>2</sup> A, tan 2A, and arc length and sector area in radians'],
          ['Calculus', 'A table of standard derivatives and integrals'],
          ['Statistics', 'The mean of a data set and standardising with Z = (X &minus; &mu;)/&sigma;'],
          ['Mechanics', 'Weight = mg, the friction model F &le; &mu;R, F = ma, and the calculus links between displacement, velocity and acceleration']
        ] },
        { kind: 'source', html: 'Source: 9MA0 specification, "Assessment information" and "Appendix 1: Formulae". The table summarises the appendix in our words; the specification gives every formula in full.' },
        { kind: 'table', mt: true, caption: 'Calculator rules from Appendix 3 of the specification', head: ['Rule', 'Detail'], rows: [
          ['Use', 'Allowed in all A level Mathematics examinations'],
          ['Must include', 'An iterative function, and summary statistics with probabilities from standard distributions'],
          ['Must be', 'Desk-sized, battery or solar powered, and free of lids or covers printed with instructions or formulas'],
          ['Responsibility', 'Students must make sure their calculator meets the guidelines']
        ] }
      ]
    },
    {
      id: 'example', tint: 'tint', eyebrow: 'Worked examples, ours',
      h2: 'Four problems in the style of the three papers',
      lede: 'Two pure, two applied. All written by us to show the method and the written reasoning the papers reward.',
      body: [
        { kind: 'p', html: '<strong>Our first problem, pure: integration by parts.</strong> Find the exact value of the integral of x ln x from x = 1 to x = e.' },
        { kind: 'ol', mt: true, items: [
          'Choose u = ln x, because its derivative 1/x is simpler, and dv/dx = x, so v = x<sup>2</sup>/2.',
          'Apply the formula: the integral of x ln x is (x<sup>2</sup>/2) ln x &minus; the integral of (x<sup>2</sup>/2)(1/x), which is (x<sup>2</sup>/2) ln x &minus; x<sup>2</sup>/4.',
          'At x = e: e<sup>2</sup>/2 &minus; e<sup>2</sup>/4 = e<sup>2</sup>/4. At x = 1: 0 &minus; 1/4 = &minus;1/4.',
          'Subtract: e<sup>2</sup>/4 + 1/4 = (e<sup>2</sup> + 1)/4, about 2.0973. The question asked for an exact value, so (e<sup>2</sup> + 1)/4 is the answer and the decimal is only a check.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our second problem, pure: proof by contradiction',
          left: [
            'Prove that there are no positive integers a and b with a<sup>2</sup> &minus; b<sup>2</sup> = 2.',
            'Assume there are. Then (a &minus; b)(a + b) = 2. Since a + b is a positive integer, a &minus; b is positive too, and a + b &gt; a &minus; b, so a &minus; b = 1 and a + b = 2. Adding gives 2a = 3, so a = 1.5, which is not an integer. This contradicts the assumption, so no such integers exist.'
          ],
          rightH3: 'Our third problem, mechanics: a projectile',
          right: [
            'A ball is projected from level ground at 20 m s<sup>&minus;1</sup>, 30&deg; above the horizontal. Taking g = 9.8 m s<sup>&minus;2</sup> and modelling the ball as a particle with no air resistance, find its range.',
            'Vertically, 0 = (20 sin 30&deg;)t &minus; 4.9t<sup>2</sup>, so t = 10 &divide; 4.9 = 2.04 s. Horizontally, the range is (20 cos 30&deg;) &times; 2.041 = 35.3 m. The modelling assumptions are part of the answer: Paper 3 can ask which one to refine.'
          ] },
        { kind: 'p', mt: true, html: '<strong>Our fourth problem, statistics.</strong> Events A and B have P(A) = 0.4, P(B) = 0.5 and P(A &cup; B) = 0.7. Are A and B independent? Using P(A &cup; B) = P(A) + P(B) &minus; P(A &cap; B), we get P(A &cap; B) = 0.2. Since P(A) &times; P(B) = 0.2 as well, the events are independent, and so P(A | B) = 0.4, equal to P(A). The final sentence, stating what the equality shows, is where the reasoning mark sits.' },
        { kind: 'table', mt: true, caption: 'Practice set: six questions we wrote for 9MA0 students, answers verified in Python', head: ['#', 'Our question', 'Paper', 'Answer'], rows: [
          ['1', 'Expand (1 + 2x)<sup>&minus;1</sup> up to the term in x<sup>3</sup> and state when it is valid.', 'Pure', '1 &minus; 2x + 4x<sup>2</sup> &minus; 8x<sup>3</sup>, for |x| &lt; 1/2'],
          ['2', 'Solve sin 2&theta; = cos &theta; for 0 &le; &theta; &le; 2&pi;.', 'Pure', '&pi;/6, &pi;/2, 5&pi;/6, 3&pi;/2'],
          ['3', 'Differentiate tan 3x.', 'Pure', '3 sec<sup>2</sup> 3x'],
          ['4', 'Find the exact value of the integral of sin x cos x from 0 to &pi;/2.', 'Pure', '1/2'],
          ['5', 'A 5 kg box is pulled across a rough floor by a horizontal 25 N force; &mu; = 0.3 and g = 9.8. Find its acceleration.', 'Paper 3, mechanics', '2.06 m s<sup>&minus;2</sup>'],
          ['6', 'X ~ N(170, 6<sup>2</sup>). Find P(165 &lt; X &lt; 180) to 3 significant figures.', 'Paper 3, statistics', '0.750']
        ] },
        { kind: 'source', html: 'We wrote all four examples and the six practice questions on 31 October 2026; none comes from Pearson. Sample assessment materials and past papers are listed on the <a class="ag-inline-link" href="https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/mathematics-2017.html" rel="noopener" target="_blank">Pearson A level Mathematics page</a>.' }
      ]
    },
    {
      id: 'entry', tint: 'deep', eyebrow: 'Entry and grading',
      h2: 'Who can take 9MA0, and how is it graded?',
      lede: 'No formal prerequisite, one sitting window, six grades, and a warning about doubling up.',
      body: [
        { kind: 'table', caption: 'Rules from section 3 of the 9MA0 specification', head: ['Rule', 'What Pearson says'], rows: [
          ['Prior learning', '"There are no prior learning or other requirements for this qualification."'],
          ['When', 'All assessment in May and June of a single year'],
          ['Grades', 'A six-grade scale, A* to E, on the combined total out of 300'],
          ['Below E', 'An unclassified U result'],
          ['Two similar A levels', 'Institutions are likely to treat two GCE qualifications with the same discount code as one'],
          ['First certification', '2018']
        ] },
        { kind: 'p', mt: true, html: 'The discount-code warning rarely affects A level Maths with Further Maths, which are separate subjects, but it can matter for combinations with heavy overlap. Pearson advises checking with the institution a student wants to progress to before committing to a combination.' },
        { kind: 'p', mt: true, html: 'For other boards, see <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths tuition online</a>. Students considering a second maths A level can read <a class="ag-inline-link" href="/is-a-level-further-maths-worth-it">whether Further Maths is worth it</a>, and those also taking computing may find <a class="ag-inline-link" href="/ocr-a-level-computer-science-h446-help">OCR A level Computer Science H446</a> useful.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through 9MA0',
    lede: 'The pure foundations come first because two papers depend on them entirely and the third relies on them.',
    table: { caption: 'Where a 9MA0 student should be, term by term', head: ['Step', 'Roughly when', 'Ready to move on when'], rows: [
      ['1. Algebra fluent', 'Start of Year 12', 'Indices, surds, quadratics and rearranging done without errors'],
      ['2. Pure Year 1', 'Year 12', 'Proof, functions, trigonometry, exponentials, first calculus and vectors secure'],
      ['3. Pure Year 2 and applied', 'Year 13', 'Integration methods, numerical methods, statistics with the data set, and mechanics including projectiles'],
      ['4. Three papers', 'Final two terms', 'Pure 1, Pure 2 and Paper 3 practised in full, with modelling assumptions stated']
    ] },
    left: { h3: 'Step two carries the load', ps: [
      'Two thirds of the A level is pure. A strong pure base raises marks on Paper 3 as well.',
      'Students curious about numerical methods in code can look at the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Step four includes the data set', ps: [
      'Paper 3 practice always includes questions set in the large data set\'s context.',
      'Weekly classes ease off in the May and June weeks.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for sixth-form maths',
    lede: 'Grouped by purpose. The free first class points to the right one.',
    bands: [
      { num: 'I', h3: 'The A level', sub: 'Pure, statistics, mechanics', courses: [
        { code: 'UK / EL1 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Every 9MA0 topic, in teaching order.' },
        { code: 'UK / EL1 / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'More practice for Section A of Paper 3.' },
        { code: 'UK / EL1 / 03', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'The second maths A level, often with Edexcel.' }
      ] },
      { num: 'II', h3: 'Bridging', sub: 'Into Year 12', courses: [
        { code: 'UK / EL2 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'Higher GCSE topics secured before the A level starts.' },
        { code: 'UK / EL2 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For students whose algebra holds them back.' },
        { code: 'UK / EL2 / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE mathematics', blurb: 'For international students arriving from IGCSE.' }
      ] },
      { num: 'III', h3: 'Beyond', sub: 'University and stretch', courses: [
        { code: 'UK / EL3 / 01', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'First-year university calculus and linear algebra.' },
        { code: 'UK / EL3 / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'Statistics and linear algebra for data degrees.' },
        { code: 'UK / EL3 / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Hard problems for students who want more.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Pure first, modelling throughout',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Classes are taught from India, which does not change its clocks, and each one is fixed in UK time around a sixth-form week.',
    slots: [
      { time: 'After college', l: 'Common for Years 12 and 13.' },
      { time: 'Evening', l: 'Round work, sport or other A levels.' },
      { time: 'Weekend morning', l: 'Time for a complete paper.' }
    ],
    cells: [
      { h3: 'Booklet drills', p: 'Students learn what is in the formulae booklet and what Appendix 1 leaves out.' },
      { h3: 'Data set context', p: 'Regular tasks on Pearson\'s large data set before Paper 3 practice.' },
      { h3: 'Assumptions stated', p: 'Every mechanics model written with its assumptions, ready to be refined.' },
      { h3: 'Exact answers', p: 'Exact forms kept until the question asks for decimals.' },
      { h3: 'Proof writing', p: 'Contradiction, exhaustion and deduction written in full sentences.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20 9MA0 students, or one teacher for one student.' }
    ]
  },

  projectsH2: 'Projects from our lessons',
  projectsLede: 'Made by students during classes, not marked for any qualification. Find more in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' reviews on Google, quoted exactly.',

  fees: {
    h2: 'Fees for Edexcel 9MA0 classes',
    lede: 'Students outside India pay a single monthly fee in US dollars. The first class is free; billing only begins after a course and a regular weekly time are confirmed.',
    free: ['A first class on a 9MA0 topic', 'A view on pure and applied strengths', 'Book with a phone number'],
    group: ['A group of 15 to 20 9MA0 students', 'One teacher across both years', 'Large data set practice', 'Quieter weeks in May and June'],
    one: ['A teacher for one student', 'Paced around mocks and offers', 'Suits a student resitting all three papers']
  },

  faq: {
    eyebrow: 'Questions about 9MA0',
    h2: 'What students and parents ask about Edexcel A level Maths',
    items: [
      { q: 'How many papers are in Edexcel A level Maths 9MA0?', a: 'Three: Pure Mathematics 1, Pure Mathematics 2, and Statistics and Mechanics. Each is a 2-hour written paper out of 100 marks and worth a third of the A level.' },
      { q: 'What is on Edexcel A level Maths Paper 3?', a: 'Section A is statistics: sampling, data presentation, probability, distributions and hypothesis testing. Section B is mechanics: units, kinematics including projectiles, forces and Newton\'s laws, and moments.' },
      { q: 'Is there a formula sheet for Edexcel A level Maths?', a: 'Yes. The booklet Mathematical Formulae and Statistical Tables is provided in every paper. Appendix 1 of the specification lists formulae students must know because they are not in the booklet.' },
      { q: 'What is the Edexcel large data set?', a: 'A set of real data that Pearson publishes and that students must become familiar with before Paper 3. Questions assume knowledge of its context, but students do not need copies in the exam or to memorise its values.' },
      { q: 'Can you use a calculator in all Edexcel A level Maths papers?', a: 'Yes. Calculators are allowed in all three papers and must have an iterative function and be able to compute summary statistics and probabilities from standard distributions.' },
      { q: 'Can I sit one Edexcel A level Maths paper in Year 12?', a: 'No. The specification says all assessment must be completed in May and June of a single year, so the three papers are sat together.' },
      { q: 'How is Edexcel A level Maths graded?', a: 'On a six-grade scale from A* to E, using the combined total out of 300. Individual papers are not graded, and a result below E is an unclassified U.' },
      { q: 'What do I need before starting 9MA0?', a: 'Pearson sets no formal prior learning requirement. In our experience a strong Higher GCSE or Extended IGCSE in maths makes Year 12 far more manageable, and sixth forms set their own entry grades.' },
      { q: 'When are your 9MA0 classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We always give times in UK time.' },
      { q: 'Are you part of Pearson Edexcel?', a: 'No. We are an independent teaching company with no link to Pearson, and our practice questions are our own.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for A level students',
    lede: 'Other boards, Further Maths and costs.',
    items: [
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition online', p: 'Our page covering A level maths across boards.' },
      { href: '/further-maths-tuition-online', label: 'Further maths tuition online', p: 'For students taking a second maths A level.' },
      { href: '/is-a-level-further-maths-worth-it', label: 'Is A level Further Maths worth it?', p: 'The case for and against, set out plainly.' },
      { href: '/a-level-maths-tutor-cost-uk', label: 'A level maths tutor cost in the UK', p: 'How families think about tuition budgets.' },
      { href: '/ocr-a-level-computer-science-h446-help', label: 'OCR A level Computer Science H446', p: 'For maths students also taking computing.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The full list of our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free 9MA0 class',
    lede: 'Leave a number and we will call at a UK time that suits your week. The class tries a pure problem and a Paper 3 problem of ours, so both halves of the A level are covered.',
    readFirst: 'Prefer to read more? Every <a class="ag-inline-link" href="/courses">course page</a> has its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our classes, and <a class="ag-inline-link" href="/student-labs">student labs</a> collects student work.',
    note: 'Our quickest channel is WhatsApp, free from any UK phone. The reply will come from our team in India, on +91.',
    formNote: 'Nothing to pay and nothing to sign; one reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'A level maths', links: [
        { href: '/a-level-maths-tuition-online', label: 'A level maths tuition' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/a-level-maths-tutor-cost-uk', label: 'Tutor costs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'Alongside maths', links: [
        { href: '/ocr-a-level-computer-science-h446-help', label: 'OCR Computer Science H446' },
        { href: '/is-a-level-further-maths-worth-it', label: 'Is Further Maths worth it?' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Edexcel A level Maths 9MA0, taught in UK hours'
  },

  personalityCss: `
.ag-root.ag-el .ag-hero h1 { letter-spacing: -0.019em; font-weight: 730; }
.ag-root.ag-el .ag-capsule { border-left-width: 8px; border-radius: 2px; }
.ag-root.ag-el .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-el .ag-table caption { text-align: left; font-weight: 690; }
.ag-root.ag-el .ag-table th:first-child { width: 22%; }
.ag-root.ag-el .ag-steps li { padding-bottom: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Pearson Edexcel Level 3 Advanced GCE in Mathematics (9MA0) specification, Issue 4, February 2020: three externally examined papers, all in May/June of a single year; Paper 1 and Paper 2 Pure Mathematics on any pure topic; Paper 3 Statistics (Section A) and Mechanics (Section B); each 2 hours, 100 marks, 33.33 per cent; calculators allowed with iterative and statistical functions; Mathematical Formulae and Statistical Tables booklet provided, Appendix 1 formulae not in it; large data set familiarity required and likely to give a material advantage, no copies in the exam; AO breakdown by paper; six-grade scale A* to E on the total out of 300; no prior learning requirements.',
    localProject: 'Two pure papers, then one applied paper that carries the data set and the most modelling. The page sets out the three 9MA0 papers and codes, the ten pure and nine applied topics, Pearson\'s paper-by-paper AO split showing AO3 at 10.33 to 11.67 per cent on Paper 3, the large data set rules quoted in full, the formulae booklet against Appendix 1, and calculator rules, then works four of our own problems (integration by parts to (e^2 + 1)/4, a proof by contradiction, a projectile with range 35.3 m, an independence check) and a six-question practice set written by us.',
    requiredMentions: ['Students must complete all assessment in May/June in any single year.', 'the total combined marks (out of 300) for the three compulsory papers', 'give a material advantage to students who have studied and are familiar with the data set', 'will not be required to have copies of the data set in the examination', '10.33 to 11.67', 'There are no prior learning or other requirements for this qualification.', '(e<sup>2</sup> + 1)/4', 'before the beginning of the two-year course', 'Mathematical Formulae and Statistical Tables', '9MA0/03'],
    sources: [
      { claim: 'Pearson Edexcel Level 3 Advanced GCE in Mathematics (9MA0) specification, Issue 4: papers, codes, content, timing, weights, AO breakdown, large data set, formulae appendix, calculators, grading and entries.', url: 'https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf' },
      { claim: 'Pearson Edexcel A level Mathematics (2017) qualification page linking the specification and assessment materials.', url: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/mathematics-2017.html' },
      { claim: 'AQA A-level Mathematics 7357 specification, used to contrast paper structures in our wording.', url: 'https://cdn.sanity.io/files/p28bar15/green/746cb551bd31654dd1297ad272acd3605010a543.pdf' }
    ],
    rejectedClaims: [
      'The current large data set\'s exact contents and the cohort it applies to: the specification describes the rules only; the data file was not downloaded for this build, so no variable list is printed beyond general guidance.',
      'May and June 2027 exam dates: JCQ returned HTTP 403 on 31 October 2026 and Pearson\'s timetable was not read; no date printed.',
      'Section A and Section B mark split within Paper 3: not stated in the specification text read, so not printed.',
      'Grade boundaries and results statistics: not read at a primary source.',
      'Any Pearson past paper or sample question: not reproduced; examples and practice set are ours.',
      'Any grade promise or affiliation with Pearson: both declined on the page.'
    ]
  }
};
