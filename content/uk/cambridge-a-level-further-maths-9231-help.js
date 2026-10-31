'use strict';
// Cambridge International AS and A Level Further Mathematics 9231 help (ag- exam door, UK and US exams cluster Phase 2,
// row UK068).
// Sources, read raw with curl on 31 October 2026 (copies in
// keyword-research-2026-09/uk-us-gap/src/cambridge-a-level-further-maths-9231-help/):
//  - Cambridge International AS & A Level Further Mathematics 9231 syllabus, "Use this syllabus for exams in 2026 and
//    2027.", "Exams are available in the June and November series.", Version 3 (Images/697357-2026-2027-syllabus.pdf).
//    Verbatim: content sections Paper 1 Further Pure Mathematics 1 (1.1 Roots of polynomial equations, 1.2 Rational
//    functions and graphs, 1.3 Summation of series, 1.4 Matrices, 1.5 Polar coordinates, 1.6 Vectors, 1.7 Proof by
//    induction); Paper 2 Further Pure Mathematics 2 (2.1 Hyperbolic functions, 2.2 Matrices, 2.3 Differentiation, 2.4
//    Integration, 2.5 Complex numbers, 2.6 Differential equations); Paper 3 Further Mechanics (3.1 Motion of a
//    projectile, 3.2 Equilibrium of a rigid body, 3.3 Circular motion, 3.4 Hooke's law, 3.5 Linear motion under a
//    variable force, 3.6 Momentum); Paper 4 Further Probability & Statistics (4.1 Continuous random variables, 4.2
//    Inference using normal and t-distributions, 4.3 chi-squared tests, 4.4 Non-parametric tests, 4.5 Probability
//    generating functions); "All AS Level candidates take two written papers."; "All A Level candidates take four
//    written papers."; AS options "Further Pure Mathematics 1 and Further Mechanics (Paper 1 and Paper 3)" or "Further
//    Pure Mathematics 1 and Further Probability & Statistics (Paper 1 and Paper 4)"; Paper 1 "2 hours", "75 marks", "6 to
//    8 structured questions", "60% of the AS Level", "30% of the A Level", "Compulsory for AS Level and A Level"; Paper 2
//    2 hours, 75 marks, "7 to 9 structured questions", 30% of the A Level, "Compulsory for A Level"; Papers 3 and 4 "1
//    hour 30 minutes", "50 marks", "5 to 7 structured questions", "40% of the AS Level", "20% of the A Level"; three
//    routes: Route 1 AS only, Route 2 "A Level (staged over two years)", Route 3 A Level in one series; "Candidates
//    following an AS Level route are eligible for grades a–e. Candidates following an A Level route are eligible for
//    grades A*–E." (restated without dashes); prior knowledge: "It is expected that learners will have studied the
//    majority of the Cambridge International AS & A Level Mathematics (9709) subject content before studying"; table:
//    9231 Paper 1 needs 9709 Papers 1 and 3; Paper 2 needs 9709 Papers 1 and 3; Paper 3 needs 9709 Papers 1, 3 and 4;
//    Paper 4 needs 9709 Papers 1, 3, 5 and 6; "a scientific calculator"; "Computers, graphical calculators and
//    calculators capable of symbolic algebraic manipulation or symbolic differentiation or integration are not
//    permitted."; "no marks will be given for unsupported answers from a calculator"; "Candidates should give non-exact
//    numerical answers correct to three significant figures (or one decimal place for angles in degrees)"; "MF19 is a
//    combined formulae list for AS & A Level Mathematics (9709) and AS & A Level Further Mathematics (9231)."; "a
//    protractor and a pair of compasses are not required"; "about 180 guided learning hours" AS, "about 360" A Level;
//    "Private candidates can enter for this syllabus."; "candidates can take AS & A Level Mathematics (9709) in the same
//    exam series with AS & A Level Further Mathematics (9231)"; administrative zones with zone timetables; retakes as
//    many times as wanted; carry forward of AS result; "This syllabus and the related assessment materials are
//    available in English only."
//  - Cambridge International syllabus update for 9231, 2026 and 2027: "The latest syllabus is version 3, published
//    August 2025."; version 3 corrected a typographical error on page 19; version 2 (February 2025) corrected errors on
//    pages 16, 23 and 25; "We have not updated the specimen materials for this syllabus."; a 2028 to 2030 syllabus is
//    also linked from the Cambridge 9231 page (not read in detail; not described).
// Our own material, labelled on the page: a method-of-differences sum (1/(r(r+1)) to 20 terms = 20/21), a Hooke's law
// example (natural length 0.8 m, modulus 24 N, 1.2 kg, g = 10: extension 0.4 m, energy 2.4 J), a probability generating
// function example (G(t) = 0.5 + 0.3t + 0.2t^2, mean 0.7, variance 0.61), and a six-question practice set, all checked
// in Python on 31 October 2026. No Cambridge question is reproduced.
// Spine: 9231 sits on 9709. Each 9231 paper names the 9709 papers it assumes, AS Further Maths is Paper 1 plus one
// applied paper, and the staged route pairs the applied papers across two years. Lesson family: sequencing two
// Cambridge syllabuses together.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'CAMBRIDGE 9231', blurb: 'Each 9231 paper assumes particular 9709 papers. Plan the two syllabuses together and the routes through Further Maths become clear.' },
  slug: 'cambridge-a-level-further-maths-9231-help',
  code: 'cale',
  accent: '#865228',
  accentRationale: 'Cambridge International 9231: a toffee brown #865228 from the cluster allocation, 6.09:1 on #FBF8F2, lighter and more orange than the rust of the Further Maths guide so the Cambridge page stands apart',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Cambridge A level Further Maths 9231 help',
  title: 'Cambridge 9231 Further Maths Help: Papers and Routes',
  description: 'Cambridge International AS and A Level Further Maths 9231 help: the four papers, AS and A Level routes, which 9709 papers come first, and live online classes.',
  ogDescription: 'Cambridge International AS and A Level Further Mathematics 9231 for 2026 and 2027, from the syllabus: four papers, three routes, the 9709 prior knowledge each paper needs, and the exam rules.',
  twitterDescription: 'Cambridge 9231 Further Maths: what each paper covers, how AS and A Level routes work, and why 9709 has to come first.',
  pageName: 'Cambridge 9231 Further Maths Help',
  webPageDescription: 'Live online teaching for Cambridge International AS and A Level Further Mathematics 9231, written from the 2026 and 2027 syllabus.',
  courseDescription: 'Live online classes for Cambridge International AS and A Level Further Mathematics 9231: Further Pure 1 and 2, Further Mechanics and Further Probability and Statistics, sequenced with 9709.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Cambridge Further Maths 9231',
  navLinks: [
    { href: '#papers', label: 'Four papers' },
    { href: '#routes', label: 'Routes' },
    { href: '#prior', label: '9709 first' },
    { href: '#examples', label: 'Examples' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Cambridge International &middot; AS and A Level Further Mathematics 9231 &middot; Ages 16 to 19',
  h1: 'Cambridge A level Further Maths 9231 help',
  lede: 'Cambridge International AS and A Level Further Mathematics, syllabus 9231, is offered by Cambridge International to schools in its network worldwide. It is examined in four papers, two of pure and one each of mechanics and probability and statistics, combined in fixed ways for AS and for the full A Level. More than most Further Maths qualifications, it is written to sit on top of a particular A Level Maths, Cambridge 9709, paper by paper. This page sets out that structure, the routes and how we teach 9231.',
  secondaryCta: { href: '#prior', label: 'What 9709 you need first' },
  wa: 'Hello Modern Age Coders, I would like a free first class for Cambridge Further Maths 9231.',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; Not connected with Cambridge International',
  spec: [
    ['Syllabus', 'Cambridge International AS and A Level Further Mathematics'],
    ['Code', '9231, syllabus for 2026 and 2027'],
    ['Series', 'June and November'],
    ['AS Level', 'Paper 1 plus Paper 3 or Paper 4'],
    ['A Level', 'All four papers'],
    ['Calculator', 'Scientific only'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'First class free']
  ],
  capsuleQ: '9231 in brief',
  capsule: 'Cambridge International AS and A Level Further Mathematics (9231) has four papers: Further Pure Mathematics 1 and 2 (each 2 hours, 75 marks), Further Mechanics and Further Probability and Statistics (each 1 hour 30 minutes, 50 marks). AS is Paper 1 with Paper 3 or Paper 4; the A Level is all four. Exams run in June and November, and only a scientific calculator is allowed. Modern Age Coders teaches 9231 live online in the A Level Further Maths course, as a batch of 15 to 20 or 1-on-1, starting with a free class.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Courses for a Cambridge Further Maths student',
    lede: 'The Further Maths course carries 9231. The A level Maths course covers the 9709 papers 9231 assumes; statistics helps students on the Paper 4 route.',
    items: [
      { course: 'a-level-further-maths-course', code: 'CF / 01', title: 'A Level Further Maths', note: 'All four 9231 papers, in the order the 9709 prerequisites allow.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'CF / 02', title: 'A Level Maths', note: 'The 9709 pure, mechanics and statistics that 9231 builds on.' },
      { course: 'statistics-probability-maths-course', code: 'CF / 03', title: 'Statistics and Probability', note: 'Background for Further Probability and Statistics.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'Four papers',
      h2: 'What are the four Cambridge 9231 Further Maths papers?',
      lede: 'Two 2-hour pure papers worth 75 marks, and two 90-minute applied papers worth 50. Every question is compulsory and structured.',
      body: [
        { kind: 'p', html: 'The 9231 syllabus for 2026 and 2027 lists the components plainly and says "All AS Level candidates take two written papers" and "All A Level candidates take four written papers." Every paper is "Answer all questions", written and externally assessed.' },
        { kind: 'table', caption: 'Cambridge International AS and A Level Further Mathematics 9231 (2026 and 2027): papers and weights', head: ['Paper', 'Title', 'Time and marks', 'Questions', 'Share of AS', 'Share of A Level'], rows: [
          ['1', 'Further Pure Mathematics 1', '2 hours, 75 marks', '6 to 8 structured', '60%', '30%'],
          ['2', 'Further Pure Mathematics 2', '2 hours, 75 marks', '7 to 9 structured', 'Not available for AS', '30%'],
          ['3', 'Further Mechanics', '1 hour 30 minutes, 50 marks', '5 to 7 structured', '40%', '20%'],
          ['4', 'Further Probability and Statistics', '1 hour 30 minutes, 50 marks', '5 to 7 structured', '40%', '20%']
        ] },
        { kind: 'source', html: 'Source: Cambridge International AS and A Level Further Mathematics 9231 syllabus for 2026 and 2027, Version 3, Assessment overview, from the <a class="ag-inline-link" href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-mathematics-further-9231/" rel="noopener" target="_blank">Cambridge 9231 page</a>.' },
        { kind: 'table', mt: true, caption: 'What each 9231 paper covers, by the syllabus topic headings', head: ['Paper', 'Topics'], rows: [
          ['1 Further Pure 1', 'Roots of polynomial equations; rational functions and graphs; summation of series; matrices; polar coordinates; vectors; proof by induction'],
          ['2 Further Pure 2', 'Hyperbolic functions; matrices; differentiation; integration; complex numbers; differential equations'],
          ['3 Further Mechanics', 'Motion of a projectile; equilibrium of a rigid body; circular motion; Hooke\'s law; linear motion under a variable force; momentum'],
          ['4 Further Probability and Statistics', 'Continuous random variables; inference using normal and t-distributions; chi-squared tests; non-parametric tests; probability generating functions']
        ] },
        { kind: 'p', mt: true, html: 'Complex numbers sit on Paper 2, not Paper 1. That differs from the English A level boards, where the Department for Education places complex numbers in the compulsory core. For 9231 AS candidates, who sit Paper 1 but not Paper 2, complex numbers are therefore not examined at all.' }
      ]
    },
    {
      id: 'routes', tint: 'deep', eyebrow: 'Routes',
      h2: 'What are the AS and A Level routes for Cambridge 9231?',
      lede: 'Three: AS only, an A Level staged over two years, or the whole A Level in one series. AS always uses Paper 1 plus one applied paper.',
      body: [
        { kind: 'p', html: 'The syllabus offers AS candidates two options: "Further Pure Mathematics 1 and Further Mechanics (Paper 1 and Paper 3)" or "Further Pure Mathematics 1 and Further Probability & Statistics (Paper 1 and Paper 4)." Paper 2 is "Not available for AS Level". The A Level "includes all four components".' },
        { kind: 'table', mt: true, caption: 'The three 9231 routes, as set out in the syllabus', head: ['Route', 'Year 1', 'Year 2', 'Grades'], rows: [
          ['1. AS Level only', 'Papers 1 and 3, or Papers 1 and 4, in one series', 'None', 'a to e'],
          ['2. A Level staged', 'AS: Papers 1 and 3, or Papers 1 and 4', 'Complete with Paper 2 and the other applied paper', 'A* to E'],
          ['3. A Level in one series', 'None', 'All four papers together', 'A* to E']
        ] },
        { kind: 'source', html: 'Source: 9231 syllabus, Version 3, Syllabus overview, routes table. Staged candidates "carry forward their AS Level result subject to the rules and time limits described in the Cambridge Handbook."' },
        { kind: 'ol', mt: true, items: [
          'Decide whether the goal is AS or the full A Level, using the student\'s university plans.',
          'Pick the applied paper for AS: Paper 3 suits students strong in 9709 mechanics; Paper 4 suits those strong in 9709 statistics. That pairing advice is ours.',
          'For the staged route, schedule Paper 2 and the remaining applied paper for the second year.',
          'Check with the school\'s exams officer which series, June or November, and which administrative zone timetable applies.',
          'Confirm the syllabus year: the 2026 and 2027 syllabus is current, and Cambridge already lists a 2028 to 2030 syllabus on its 9231 page.'
        ] }
      ]
    },
    {
      id: 'prior', tint: '', eyebrow: '9709 first',
      h2: 'Which Cambridge 9709 papers do you need before 9231?',
      lede: 'Cambridge expects most of 9709 first, and names the exact 9709 papers each 9231 paper assumes. Pure Mathematics 3 is needed for every one.',
      body: [
        { kind: 'p', html: 'The syllabus states: "It is expected that learners will have studied the majority of the Cambridge International AS & A Level Mathematics (9709) subject content before studying Cambridge International AS & A Level Further Mathematics (9231)." It then gives a table of prior knowledge, which we reproduce below because it is the single most useful planning tool for a 9231 student.' },
        { kind: 'table', mt: true, caption: 'Prior knowledge from 9709 required for each 9231 paper, from section 3 of the 9231 syllabus', head: ['9231 paper', '9709 papers assumed'], rows: [
          ['Paper 1 Further Pure Mathematics 1', '9709 Papers 1 and 3'],
          ['Paper 2 Further Pure Mathematics 2', '9709 Papers 1 and 3'],
          ['Paper 3 Further Mechanics', '9709 Papers 1, 3 and 4'],
          ['Paper 4 Further Probability and Statistics', '9709 Papers 1, 3, 5 and 6']
        ] },
        { kind: 'p', mt: true, html: 'Read the table for its consequences. Every 9231 paper needs 9709 Paper 3, Pure Mathematics 3, which is A Level rather than AS content in 9709. Further Probability and Statistics needs both 9709 statistics papers, 5 and 6. So a student cannot sensibly sit 9231 AS in the same series as 9709 AS unless 9709 Pure 3 has already been taught. Cambridge permits both syllabuses in the same series ("candidates can take AS & A Level Mathematics (9709) in the same exam series"), but the teaching order still has to respect the table.' },
        { kind: 'two', mt: true,
          leftH3: 'A sequence that works',
          left: [
            'Year 1: 9709 Papers 1 and 3 early, with a 9709 applied paper; begin 9231 Paper 1 in the second half of the year.',
            'Year 2: finish 9231 Paper 1, then Paper 2 and the applied papers, once 9709 Papers 4, 5 and 6 are in place. This plan is ours, not Cambridge\'s.'
          ],
          rightH3: 'A sequence that struggles',
          right: [
            'Starting 9231 Paper 4 before 9709 Paper 6. The continuous random variables and inference in Further Statistics rest directly on 9709 statistics.',
            'Cambridge also publishes a support document, Guide to prior learning for Paper 4.'
          ] }
      ]
    },
    {
      id: 'rules', tint: 'tint', eyebrow: 'Exam rules',
      h2: 'Can you use a graphical calculator in Cambridge 9231?',
      lede: 'No. Only a scientific calculator is allowed, and an answer from the calculator with no working earns nothing.',
      body: [
        { kind: 'p', html: 'The syllabus is direct: "Computers, graphical calculators and calculators capable of symbolic algebraic manipulation or symbolic differentiation or integration are not permitted." It adds that "no marks will be given for unsupported answers from a calculator." This is a real difference from the English A level boards, several of which allow graphical calculators, and students moving between systems should know it.' },
        { kind: 'table', mt: true, caption: 'Further exam rules from the 9231 syllabus', head: ['Rule', 'What Cambridge says'], rows: [
          ['Formulae', 'MF19 is supplied, a combined list for 9709 and 9231; all formulae in it may be needed'],
          ['Accuracy', 'Non-exact answers to three significant figures, or one decimal place for angles in degrees, unless the question says otherwise'],
          ['Equipment', 'A ruler and a scientific calculator; a protractor and compasses are not required'],
          ['Series', 'June and November; the timetable depends on the school\'s administrative zone'],
          ['Private candidates', 'Can enter for this syllabus'],
          ['Language', 'English only'],
          ['Retakes', 'As many times as wanted; AS results can be carried forward under Cambridge Handbook rules']
        ] },
        { kind: 'p', mt: true, html: 'The syllabus update notice for 2026 and 2027 says the current text is Version 3, published August 2025, which corrected one typographical error, after Version 2 in February 2025 corrected three others. It also says "We have not updated the specimen materials for this syllabus." Nothing in those changes affects the structure above.' }
      ]
    },
    {
      id: 'examples', tint: 'deep', eyebrow: 'Examples, ours',
      h2: 'Three 9231 style problems, worked by us',
      lede: 'One from Further Pure 1, one from Further Mechanics and one from Further Probability and Statistics. None is a Cambridge question.',
      body: [
        { kind: 'p', html: '<strong>Our Paper 1 problem, summation by differences.</strong> Find the sum of 1/(r(r + 1)) for r = 1 to n, and hence for n = 20. Write 1/(r(r + 1)) = 1/r &minus; 1/(r + 1). Adding from r = 1 to n, every middle term cancels, leaving 1 &minus; 1/(n + 1) = n/(n + 1). For n = 20 that is 20/21. As n grows the sum tends to 1, which is a typical follow-up part.' },
        { kind: 'p', mt: true, html: '<strong>Our Paper 3 problem, Hooke\'s law.</strong> A light elastic string of natural length 0.8 m and modulus of elasticity 24 N hangs from a fixed point with a 1.2 kg particle at rest on its end. Take g = 10 m s<sup>&minus;2</sup> in this example. In equilibrium the tension equals the weight: 24x &divide; 0.8 = 12, so the extension is x = 0.4 m. The elastic potential energy stored is &lambda;x<sup>2</sup> &divide; 2l = 24 &times; 0.16 &divide; 1.6 = 2.4 J.' },
        { kind: 'p', mt: true, html: '<strong>Our Paper 4 problem, a probability generating function.</strong> A random variable X takes the values 0, 1 and 2 with probabilities 0.5, 0.3 and 0.2.' },
        { kind: 'two', mt: true,
          leftH3: 'The generating function',
          left: [
            'G(t) = 0.5 + 0.3t + 0.2t<sup>2</sup>. Check G(1) = 1, as every probability generating function must.',
            'G\'(t) = 0.3 + 0.4t, so E(X) = G\'(1) = 0.7.'
          ],
          rightH3: 'The variance',
          right: [
            'G\'\'(t) = 0.4, and Var(X) = G\'\'(1) + G\'(1) &minus; [G\'(1)]<sup>2</sup> = 0.4 + 0.7 &minus; 0.49 = 0.61.',
            'Computing E(X<sup>2</sup>) directly, 0.3 + 0.8 = 1.1, gives 1.1 &minus; 0.49 = 0.61 too.'
          ] },
        { kind: 'table', mt: true, caption: 'Six practice questions we wrote for 9231 students (answers checked in Python)', head: ['No.', 'Question, ours', 'Paper', 'Answer'], rows: [
          ['1', 'Find the sum of r<sup>3</sup> for r = 1 to 10.', '1', '3025'],
          ['2', 'Roots of x<sup>3</sup> &minus; 5x<sup>2</sup> + 2x + 8 = 0 are &alpha;, &beta;, &gamma;. Find &alpha;&beta;&gamma;.', '1', '&minus;8'],
          ['3', 'Use de Moivre\'s theorem to find (cos &theta; + i sin &theta;)<sup>4</sup> when &theta; = &pi;/8.', '2', 'i'],
          ['4', 'A particle on a light inextensible string moves in a vertical circle of radius 0.5 m. Find the least speed at the top for the string to stay taut, g = 10.', '3', '&radic;5, about 2.24 m s<sup>&minus;1</sup>'],
          ['5', 'X has density f(x) = 3x<sup>2</sup> on [0, 1]. Find its median.', '4', '0.5<sup>1/3</sup>, about 0.794'],
          ['6', 'In a paired sign test, 8 of 10 differences are positive. Find P(X &ge; 8) under H<sub>0</sub>, one-tailed.', '4', '0.0547']
        ] },
        { kind: 'source', html: 'Our problems and practice set were written on 31 October 2026; none is a Cambridge question. The syllabus points teachers to Cambridge\'s School Support Hub for further 9231 support.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Running 9709 and 9231 together',
    lede: 'The prior knowledge table decides the order; the routes decide the timing.',
    table: { caption: 'A typical two-year sequence for 9709 and 9231 together (our plan)', head: ['Phase', 'When', 'Ready when'], rows: [
      ['1. 9709 Pure 1 and Pure 3', 'First two terms', 'Pure 3 complete, since every 9231 paper needs it'],
      ['2. 9231 Paper 1', 'From the second term', 'Roots, series, matrices, polar coordinates, vectors and induction secure'],
      ['3. 9709 applied papers', 'Through both years', 'Papers 4, 5 and 6 as the chosen 9231 applied papers require'],
      ['4. 9231 Paper 2 and applied papers', 'Second year', 'Hyperbolic functions, complex numbers and differential equations, plus Further Mechanics or Statistics']
    ] },
    left: { h3: 'Why Pure 3 comes early', ps: [
      'The prior knowledge table lists 9709 Paper 3 against every 9231 paper.',
      'Delaying it delays all of Further Maths.'
    ] },
    right: { h3: 'November is an option', ps: [
      'Cambridge runs a November series, which some schools use for staged entries.',
      'Ask your exams officer which series your school enters.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses near Cambridge Further Maths',
    lede: 'Grouped by role. The free first class helps us suggest one.',
    bands: [
      { num: 'I', h3: '9709 and 9231', sub: 'Ages 16 to 19', courses: [
        { code: 'UK / CF1 / 01', slug: 'a-level-further-maths-course', title: 'A level further maths', blurb: 'All four 9231 papers.' },
        { code: 'UK / CF1 / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'The 9709 base each 9231 paper assumes.' },
        { code: 'UK / CF1 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For 9709 Papers 5 and 6 and 9231 Paper 4.' }
      ] },
      { num: 'II', h3: 'Groundwork', sub: 'From IGCSE', courses: [
        { code: 'UK / CF2 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE and IGCSE level maths', blurb: 'Secure foundations before the sixth form.' },
        { code: 'UK / CF2 / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Algebra fluency for Further Pure.' },
        { code: 'UK / CF2 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Series and matrices explored in Python.' }
      ] },
      { num: 'III', h3: 'University', sub: 'Admissions and beyond', courses: [
        { code: 'UK / CF3 / 01', slug: 'tmua-mat-step-preparation-course', title: 'TMUA and STEP', blurb: 'For UK university admissions tests.' },
        { code: 'UK / CF3 / 02', slug: 'college-mathematics-complete-masterclass', title: 'College mathematics', blurb: 'First-year university maths, previewed.' },
        { code: 'UK / CF3 / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Olympiad problem solving.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Sequenced against 9709, paper by paper',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We list times in UK time for UK families and agree local times with students elsewhere; our teachers work from India.',
    slots: [
      { time: 'After school', l: 'Common for UK-based Cambridge students.' },
      { time: 'Evening', l: 'Works across several time zones.' },
      { time: 'Weekend morning', l: 'Room for a 2-hour Further Pure paper.' }
    ],
    cells: [
      { h3: 'Prior knowledge map', p: 'Lessons follow Cambridge\'s 9709 to 9231 table.' },
      { h3: 'Scientific calculator only', p: 'Methods practised without graphing shortcuts.' },
      { h3: 'MF19 fluency', p: 'Students learn where each formula sits in the list.' },
      { h3: 'Route planning', p: 'AS pairing and staged entry decided early.' },
      { h3: 'Working shown', p: 'Every calculator value supported by method.' },
      { h3: 'Batch or 1-on-1', p: 'A group of 15 to 20, or individual lessons.' }
    ]
  },

  projectsH2: 'Student projects from class',
  projectsLede: 'Made during lessons, not for Cambridge assessment. More are in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' reviews on Google, quoted as given.',

  fees: {
    h2: 'Fees for Cambridge 9231 classes',
    lede: 'Students outside India pay one monthly fee in US dollars. The first lesson is free, and we take payment only once the course and a weekly time are agreed.',
    free: ['A free 9231 lesson on any paper', 'A check of which 9709 papers are done', 'Booked by phone or WhatsApp'],
    group: ['A Further Maths batch of 15 to 20', 'Taught in step with 9709', 'Further Mechanics or Further Statistics routes', 'Lighter weeks around each series'],
    one: ['A teacher for one student', 'Planned around June or November entry', 'Suits a staged or a single-series A Level']
  },

  faq: {
    eyebrow: '9231 questions',
    h2: 'What students ask about Cambridge Further Maths 9231',
    items: [
      { q: 'How many papers are in Cambridge A Level Further Maths 9231?', a: 'Four for the full A Level: Further Pure Mathematics 1 and 2, Further Mechanics, and Further Probability and Statistics. AS Level uses two of them.' },
      { q: 'What papers do you take for Cambridge AS Further Maths?', a: 'Paper 1, Further Pure Mathematics 1, together with either Paper 3, Further Mechanics, or Paper 4, Further Probability and Statistics. Paper 2 is not available at AS Level.' },
      { q: 'Do I need 9709 before 9231?', a: 'Cambridge expects learners to have studied most of 9709 first and strongly recommends studying it alongside or before 9231. Every 9231 paper assumes 9709 Papers 1 and 3.' },
      { q: 'Can I take 9709 and 9231 in the same exam series?', a: 'Yes. The syllabus says candidates can take AS and A Level Mathematics 9709 in the same series as Further Mathematics 9231.' },
      { q: 'Is a graphical calculator allowed in 9231?', a: 'No. Cambridge permits a scientific calculator only; graphical calculators and those with symbolic algebra or calculus are not allowed.' },
      { q: 'When are the 9231 exams?', a: 'Cambridge offers 9231 in the June and November series. The exact dates depend on the school\'s administrative zone timetable.' },
      { q: 'What is MF19?', a: 'MF19 is the list of formulae and statistical tables supplied in the exam. It is shared between 9709 and 9231, and any formula in it may be needed.' },
      { q: 'What is Further Maths 9231 equivalent to?', a: 'It is the Cambridge International A Level in Further Mathematics, the same level as an A Level. How a university treats it alongside other qualifications is set by that university, so check its admissions page.' },
      { q: 'When are your 9231 classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. UK families see times in UK time.' },
      { q: 'Are you connected with Cambridge International?', a: 'No. Modern Age Coders is independent of Cambridge International and Cambridge University Press and Assessment. All problems on this page are ours.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for Cambridge students',
    lede: 'The companion 9709 page and our wider Further Maths pages.',
    items: [
      { href: '/cambridge-a-level-maths-9709-help', label: 'Cambridge A level Maths 9709 help', p: 'The Cambridge Mathematics syllabus that 9231 builds on.' },
      { href: '/further-maths-tuition-online', label: 'Further maths tuition online', p: 'Our general Further Maths page.' },
      { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition online', p: 'For students still at IGCSE.' },
      { href: '/cambridge-a-level-computer-science-online-classes', label: 'Cambridge A level Computer Science', p: 'Often taken with 9231.' },
      { href: '/is-a-level-further-maths-worth-it', label: 'Is A level Further Maths worth it?', p: 'Weighing up the extra A level.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free 9231 class',
    lede: 'Give us a number and we will call at a time that suits you, in UK time if you are in the UK. We begin by checking which 9709 papers are complete, then teach one 9231 topic that fits.',
    readFirst: 'Prefer to look first? <a class="ag-inline-link" href="/courses">Our courses</a> show syllabuses, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains the approach, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows class work.',
    note: 'WhatsApp is the fastest way to reach us and costs nothing on most data plans. Replies come from India, on a +91 number.',
    formNote: 'There is no fee for asking and nothing to commit to; you get a reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Cambridge maths', links: [
        { href: '/cambridge-a-level-maths-9709-help', label: 'Cambridge 9709' },
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths' },
        { href: '/further-maths-tuition-online', label: 'Further maths' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'Related', links: [
        { href: '/cambridge-a-level-computer-science-online-classes', label: 'Cambridge Computer Science' },
        { href: '/tmua-preparation', label: 'TMUA preparation' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Cambridge 9231 Further Maths, live online'
  },

  personalityCss: `
.ag-root.ag-cale .ag-hero h1 { letter-spacing: -0.018em; font-weight: 705; }
.ag-root.ag-cale .ag-capsule { border-left-width: 6px; border-radius: 5px; }
.ag-root.ag-cale .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-cale .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-cale .ag-table th:first-child { width: 22%; }
.ag-root.ag-cale .ag-steps li { padding-bottom: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Cambridge International AS and A Level Further Mathematics 9231 syllabus for 2026 and 2027, Version 3 (August 2025): June and November series; Paper 1 Further Pure 1 (2 hours, 75 marks, 6 to 8 questions, 60% AS, 30% A Level), Paper 2 Further Pure 2 (2 hours, 75 marks, 7 to 9 questions, 30% A Level, not at AS), Papers 3 Further Mechanics and 4 Further Probability and Statistics (1 hour 30 minutes, 50 marks, 5 to 7 questions, 40% AS, 20% A Level); AS is Paper 1 with 3 or 4; three routes; prior knowledge table mapping each 9231 paper to 9709 papers; scientific calculator only, no unsupported calculator answers; three significant figures; MF19 combined list; private candidates; 9709 and 9231 in one series allowed; English only; retakes and carry forward.',
    localProject: '9231 sits on 9709. The page tabulates the four 9231 papers with shares of AS and A Level and their topic headings, sets out the three routes with a five-step plan, reproduces Cambridge\'s 9709 prior knowledge table and draws out the sequencing consequences, lists the exam rules including the scientific-only calculator, then works our own method-of-differences sum (20/21), a Hooke\'s law example (0.4 m, 2.4 J), a probability generating function (mean 0.7, variance 0.61) and a six-question practice set.',
    requiredMentions: ['All A Level candidates take four written papers.', 'Further Pure Mathematics 1 and Further Probability & Statistics (Paper 1 and Paper 4).', 'have studied the majority of the Cambridge International AS & A Level Mathematics (9709) subject content', '9709 Papers 1, 3, 5 and 6', 'Computers, graphical calculators and calculators capable of symbolic algebraic manipulation', 'no marks will be given for unsupported answers from a calculator', 'We have not updated the specimen materials for this syllabus.', 'leaving 1 &minus; 1/(n + 1) = n/(n + 1)', '24 &times; 0.16 &divide; 1.6 = 2.4 J', 'G(t) = 0.5 + 0.3t + 0.2t<sup>2</sup>'],
    sources: [
      { claim: 'Cambridge International AS and A Level Further Mathematics 9231 syllabus for 2026 and 2027, Version 3: papers, topics, weights, routes, prior knowledge, calculators, accuracy, MF19, series, private candidates, retakes and language.', url: 'https://www.cambridgeinternational.org/Images/697357-2026-2027-syllabus.pdf' },
      { claim: 'Cambridge International syllabus update for 9231 (2026 and 2027): Version 3 published August 2025, corrections, specimen materials not updated.', url: 'https://www.cambridgeinternational.org/Images/729291-2026-2027-syllabus-update.pdf' },
      { claim: 'Cambridge International 9231 qualification page linking the 2026 to 2027 and 2028 to 2030 syllabuses.', url: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-mathematics-further-9231/' }
    ],
    rejectedClaims: [
      'Details of the 2028 to 2030 9231 syllabus: listed on the Cambridge page but not read; only its existence is mentioned.',
      'Exam dates for June or November 2027: zone timetables not read; none printed.',
      'Grade thresholds and UCAS tariff points: not read at a primary source; the equivalence FAQ refers families to universities.',
      'Any Cambridge past paper or specimen question: not reproduced; examples are ours.',
      'That Cambridge 9231 is harder or easier than UK boards: not claimed; only the calculator rule is contrasted.',
      'Any grade promise or connection with Cambridge International: both declined.'
    ]
  }
};
