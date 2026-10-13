'use strict';
// HSC Mathematics Extension 1 tutoring (ag- exam door, Australia cluster Phase 3, row 54).
// Facts read raw on 7 October 2026 at the NSW Curriculum site (curriculum.nsw.edu.au, Mathematics
// Extension 1 11-12 Syllabus (2024): overview, course structure and enrolment details, HSC examinations,
// school-based assessment) and UAC (uac.edu.au, how your ATAR is calculated). Implemented from 2026;
// Year 12 teaching from Term 4 2026; first HSC exam 2027. Seven areas of study. Year 11 focus areas:
// Further work with functions, Polynomials, Further trigonometry, Permutations and combinations, The
// binomial theorem. Year 12: Proof by mathematical induction, Introduction to vectors, Inverse
// trigonometric functions, Further calculus skills, Further applications of calculus, The binomial
// distribution and sampling distribution of the mean. Course numbers 11250 and 15250, 60 hours and
// 1 unit each, Advanced as corequisite. HSC exam: 70 marks, 2 hours plus 10 minutes reading time,
// Section I 10 marks, Section II 60 marks in 23 to 28 items, at least one worth 4 or 5 marks; students
// also sit the Advanced or the Extension 2 paper. UAC: up to 4 units of calculus-based maths count
// towards the ATAR. Spine: checking an induction claim by brute force first, then proving it; the
// n squared + n + 41 counterexample at n = 40 (1681 = 41 squared). Family checked free on 7 October 2026.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'HSC MATHS EXTENSION 1', label: 'HSC Maths Extension 1 tutoring', blurb: 'The one-unit NSW course that sits on top of Advanced: proof, vectors, combinatorics, and why checking cases is not the same as proving.' },
  slug: 'hsc-maths-extension-1-tutoring',
  code: 'hexo',
  accent: '#90424B',
  accentRationale: 'HSC Maths Extension 1: a muted rosewood, contrast above 4.9:1 on #EDE7DA, at least 12 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'HSC Maths Extension 1 tutoring',
  title: 'HSC Maths Extension 1 Tutoring | NSW Online Help',
  description: 'HSC Maths Extension 1 tutoring online for NSW students: the 2024 syllabus, the 70-mark paper, proof by induction done properly, and how Ext 1 counts for ATAR.',
  ogDescription: 'Mathematics Extension 1 explained from the 2024 NSW syllabus: its focus areas, how it sits on Advanced, the 70-mark HSC paper, the extra paper students also sit, and a worked lesson on testing a claim before proving it.',
  twitterDescription: 'HSC Maths Extension 1 from the 2024 syllabus: the 70-mark paper, induction, vectors, and how it counts for the ATAR.',
  pageName: 'HSC Maths Extension 1 Tutoring',
  webPageDescription: 'Help for NSW students taking Mathematics Extension 1: the 2024 syllabus and its dates, Year 11 and Year 12 focus areas, enrolment rules, the HSC examination specification, how UAC counts the course towards the ATAR, and an original lesson on mathematical induction.',
  courseDescription: 'Live online teaching for NSW Mathematics Extension 1 students: polynomials, combinatorics, the binomial theorem, proof by induction, vectors, inverse trigonometric functions and further calculus.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'HSC Maths Extension 1',
  navLinks: [
    { href: '#course', label: 'The course' },
    { href: '#exam', label: 'The exam' },
    { href: '#induction', label: 'Induction' },
    { href: '#atar', label: 'Units and the ATAR' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New South Wales &middot; Mathematics Extension 1 &middot; Live online',
  h1: 'HSC Maths Extension 1 tutoring',
  lede: 'Extension 1 is where NSW mathematics starts asking students to prove things rather than just compute them. It is only one unit, sixty indicative hours a year, but it changes how a student thinks: a pattern that holds for ten cases is no longer good enough. We teach that shift carefully, alongside the algebra and calculus the course demands.',
  secondaryCta: { href: '#induction', label: 'See the induction lesson' },
  wa: 'Hello Modern Age Coders, I would like a free class about HSC Mathematics Extension 1.',
  heroNote: 'Syllabus read at the source &middot; Proof taught as reasoning, not ritual &middot; Lessons after NSW school hours',
  spec: [
    ['Syllabus', 'Mathematics Extension 1 11-12 (2024)'],
    ['Size', '1 unit, 60 hours each year'],
    ['Must also take', 'Mathematics Advanced'],
    ['HSC paper', '70 marks, 2 hours plus reading'],
    ['Also sit', 'The Advanced or Extension 2 paper'],
    ['First exam, new syllabus', '2027'],
    ['We teach', 'Proof, technique, written method'],
    ['We never', 'Promise a band or an ATAR']
  ],
  capsuleQ: 'In short',
  capsule: 'HSC Mathematics Extension 1 is a one-unit NSW course taken alongside Mathematics Advanced. Under the 2024 syllabus it adds polynomials, combinatorics, the binomial theorem, proof by mathematical induction, vectors, inverse trigonometric functions and further calculus. Its HSC exam is a 70-mark paper of 2 hours plus 10 minutes reading time, and students also sit either the Advanced or the Extension 2 paper.',

  picks: {
    eyebrow: 'A sensible start',
    h2: 'Three courses Extension 1 students lean on',
    lede: 'Calculus fluency first, then counting and proof, then problems that stretch.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'HEXO / 01', title: 'The Advanced core', note: 'Functions, trigonometry and calculus at full strength, because every Extension 1 question assumes the Advanced course is solid.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'HEXO / 02', title: 'Proof and problem solving', note: 'Induction, counting arguments and careful reasoning, practised on problems harder than the syllabus sets.' },
      { course: 'statistics-probability-maths-course', code: 'HEXO / 03', title: 'Probability to the binomial', note: 'Counting, combinations and the binomial distribution, the statistics thread of Year 12 Extension 1.' }
    ]
  },

  sections: [
    {
      id: 'course', tint: 'tint', eyebrow: 'What Extension 1 adds',
      h2: 'Eleven focus areas on top of Advanced',
      lede: 'NESA lists the focus areas below in the course structure of the 2024 syllabus. Checked on the NSW Curriculum site on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Mathematics Extension 1 11-12 Syllabus (2024): focus areas', head: ['Year', 'Area of study', 'Focus area'], rows: [
          ['Year 11', 'Functions', 'Further work with functions; Polynomials'],
          ['Year 11', 'Trigonometric functions', 'Further trigonometry'],
          ['Year 11', 'Combinatorics', 'Permutations and combinations; The binomial theorem'],
          ['Year 12', 'Proof', 'Proof by mathematical induction'],
          ['Year 12', 'Vectors', 'Introduction to vectors'],
          ['Year 12', 'Trigonometric functions', 'Inverse trigonometric functions'],
          ['Year 12', 'Calculus', 'Further calculus skills; Further applications of calculus'],
          ['Year 12', 'Statistical analysis', 'The binomial distribution and sampling distribution of the mean']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Extension 1 is not a separate subject so much as a second storey on the Advanced building. NESA makes that explicit in the enrolment rules: the Year 11 course, number 11250, has Year 11 Advanced as a corequisite, and the Year 12 course, number 15250, needs both Year 11 courses as prerequisites and Year 12 Advanced alongside it. Each is worth 1 unit and 60 indicative hours.',
            'In Year 11 the new material is mostly algebraic and combinatorial: polynomials and their roots, further trigonometry, and counting arrangements. Year 12 brings the topics students remember as the real Extension 1: induction, vectors, inverse trigonometric functions and harder calculus.'
          ],
          right: [
            'The 2024 syllabus follows the same timetable as Advanced. NESA says it "is to be implemented from 2026", with Year 12 teaching from Term 4 of 2026 and the first HSC examination on it in 2027. Students moving through Year 11 and 12 during the changeover should check which version their school is teaching before buying any revision book.',
            'Vectors is the area most likely to feel new to a student who has only seen older materials, and statistics now ends at the sampling distribution of the mean. Both reward students who understand the idea behind the formula, which is the way we teach them.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-1-11-12-2024/overview" rel="noopener" target="_blank">NSW Curriculum, Mathematics Extension 1 11-12 Syllabus (2024), overview</a>; <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-1-11-12-2024/overview/course" rel="noopener" target="_blank">course structure and enrolment details</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'exam', tint: 'deep', eyebrow: 'The HSC examination',
      h2: 'A 70-mark paper, and a second paper beside it',
      lede: 'The specification below is quoted from NESA\'s HSC examinations page for the 2024 syllabus, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Mathematics Extension 1 HSC examination specification', head: ['Feature', 'What NESA specifies'], rows: [
          ['Marks and time', 'A written paper worth 70 marks; 2 hours plus 10 minutes reading time'],
          ['Support', 'A reference sheet will be provided; NESA-approved calculators may be used'],
          ['Section I', 'Objective-response questions to the value of 10 marks'],
          ['Section II', '60 marks; questions may contain parts; there will be 23 to 28 items'],
          ['Longer items', 'At least one item will be worth 4 or 5 marks'],
          ['Assumed knowledge', 'The Mathematics Advanced course and the Extension 1 Year 11 course; Year 11 Extension 1 may be examined'],
          ['The second paper', 'Students also complete either the Mathematics Advanced paper or the Mathematics Extension 2 paper, depending on enrolment']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Sixty marks across 23 to 28 items puts the average item at a little over two marks, much like Advanced, but the items are denser. A two-mark Extension 1 question can hide a substitution, a sign check and a domain restriction, and each of them costs the mark if it is skipped.',
            'With two hours for 70 marks the pace is about 1.7 minutes per mark. Students who practise to that budget learn to recognise the questions worth leaving for a second pass, rather than spending fifteen minutes stuck on a single part.'
          ],
          right: [
            'The second paper is easy to forget when planning. An Extension 1 student also sits the Advanced paper, or the Extension 2 paper if enrolled in that course, so revision time has to cover both. In our experience the Advanced paper is where Extension 1 students lose marks to carelessness, simply because the questions feel easy.',
            'The 2026 HSC written exams run from 13 October to no later than 5 November 2026, by NESA\'s key dates. Students sitting the first paper on the new syllabus in 2027 should watch for NESA\'s 2027 timetable.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-1-11-12-2024/assessment/hsc-examinations" rel="noopener" target="_blank">NSW Curriculum, Mathematics Extension 1 HSC examinations</a>; <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/nesa/key-dates/hsc" rel="noopener" target="_blank">NESA, 2026 HSC key dates</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'induction', tint: 'tint', eyebrow: 'Proof by mathematical induction',
      h2: 'Check the cases, then prove the claim',
      lede: 'Induction is a Year 12 focus area and the clearest example of what Extension 1 asks for. The habit we teach has two halves: test a claim on small cases to see whether it is even true, then prove it, because no number of cases is a proof.',
      body: [
        { kind: 'p', text: 'A worked lesson, written by us. Claim: the sum of the first n odd numbers is n squared. Before proving anything, a student checks small values of n. A short loop in Python or a column on paper does the job.' },
        { kind: 'table', caption: 'Testing the claim 1 + 3 + 5 + ... + (2n minus 1) = n squared', head: ['n', 'Last odd number', 'Sum of odd numbers', 'n squared', 'Match?'], rows: [
          ['1', '1', '1', '1', 'Yes'],
          ['2', '3', '4', '4', 'Yes'],
          ['3', '5', '9', '9', 'Yes'],
          ['4', '7', '16', '16', 'Yes'],
          ['5', '9', '25', '25', 'Yes'],
          ['6', '11', '36', '36', 'Yes']
        ] },
        { kind: 'p', text: 'The cases agree, so the claim is worth proving. The base case is n = 1, where both sides equal 1. For the inductive step, assume the sum of the first k odd numbers is k squared. The next odd number is 2k + 1, so the sum of the first k + 1 odd numbers is k squared plus 2k + 1, which factorises to (k + 1) squared. The statement for k implies the statement for k + 1, and with the base case the claim holds for every positive integer n.' },
        { kind: 'table', caption: 'Why cases alone are never enough: n squared + n + 41', head: ['n', 'Value', 'Prime?'], rows: [
          ['0', '41', 'Yes'],
          ['1', '43', 'Yes'],
          ['10', '151', 'Yes'],
          ['39', '1601', 'Yes'],
          ['40', '1681', 'No: 1681 = 41 squared']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The second table is the warning. The expression n squared + n + 41 gives a prime for every n from 0 to 39, forty cases in a row, and then fails at n = 40, where it equals 1681, which is 41 times 41. A student who stopped testing at 39 would have "proved" something false.',
            'That is the whole reason induction exists, and explaining it in a sentence is worth practising. Markers look for a correct base case, a clearly stated assumption, and a step that actually uses the assumption rather than restating it.'
          ],
          right: [
            'Choosing the base case matters too. The statement 2 to the power n is greater than n squared is true for n = 1, false for n = 2, 3 and 4 (4 is not greater than 4, 8 is not greater than 9, 16 is not greater than 16), and true from n = 5 onwards. A proof must start at n = 5, and a quick table shows why.',
            'This test-then-prove habit also carries straight into programming, where a function can pass a hundred test cases and still be wrong. Students who study both subjects find that each one makes the other easier to understand.'
          ] }
      ]
    },
    {
      id: 'atar', tint: '', eyebrow: 'Units and the ATAR',
      h2: 'How UAC counts Extension 1',
      lede: 'This section explains UAC\'s published rules only. It is not advice on subject choice and it promises no rank.',
      body: [
        { kind: 'p', text: 'UAC, which calculates the NSW ATAR, states that "Up to 4 units of calculus-based maths can be included in the ATAR calculation." It also explains that Mathematics Extension 1 carries a different weighting depending on its partner course: with Mathematics Advanced, Extension 1 counts as 1 unit; with Mathematics Extension 2, Extension 1 counts as 2 units, calculated by doubling its mark.' },
        { kind: 'p', text: 'UAC adds a detail families often miss: a student who completes Advanced and then goes on to complete Extension 1 and Extension 2 will not have the Advanced result included in the calculation. None of this tells a student which courses to choose. That decision belongs with the student, the family and the school, and it should rest on which mathematics the student wants to learn and is ready for.' },
        { kind: 'p', text: 'For how the ATAR works more generally, from ranks to scaling, see our page on <a class="ag-inline-link" href="/atar-explained-for-coding-students">the ATAR explained for coding students</a>.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.uac.edu.au/future-applicants/atar/how-your-atar-is-calculated" rel="noopener" target="_blank">UAC, how your ATAR is calculated</a>. Checked on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four checkpoints before the Extension 1 exam',
    lede: 'The checkpoints follow the skills the course builds, in the order students usually meet them.',
    table: { caption: 'From Advanced fluency to Extension 1 proof', head: ['Stage', 'Checkpoint', 'The sign it is in place'], rows: [
      ['Year 10 into 11', '1. Algebra under pressure', 'Divides polynomials and finds roots without notes'],
      ['Year 11', '2. Counting', 'Explains why an arrangement is a permutation or a combination'],
      ['Year 12, early', '3. Proof', 'Writes an induction proof whose step really uses the assumption'],
      ['Year 12, late', '4. Two papers', 'Finishes timed Advanced and Extension 1 papers in one week']
    ] },
    left: { h3: 'If proof feels slippery', ps: [
      'Most trouble with induction comes from algebra in the inductive step, not from the logic. Practising the factorising on its own first usually fixes it.',
      'Writing a single sentence that says what the assumption is, before using it, makes the structure visible to the student as well as the marker.'
    ] },
    right: { h3: 'Beyond Extension 1', ps: [
      'Students who enjoy proof and vectors may continue to <a class="ag-inline-link" href="/hsc-maths-extension-2-tutoring">Mathematics Extension 2</a>, the one-unit Year 12 course that sits above this one.',
      'Competition problems are another outlet; the <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists maths contests open to secondary students.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Extension 1 students',
    lede: 'Arranged by the part of the course they serve. Each card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Under the course', sub: 'Advanced at full strength', courses: [
        { code: 'HEXO / A / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'The functions and calculus that Extension 1 assumes from Advanced.' },
        { code: 'HEXO / A / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Polynomial manipulation and rearranging, practised until it is fast.' },
        { code: 'HEXO / A / 03', slug: 'ap-calculus-exam-prep', title: 'Calculus practice', blurb: 'Written for the US AP exam, with plenty of differentiation and integration that overlaps NSW calculus.' }
      ] },
      { num: 'II', h3: 'The Extension 1 threads', sub: 'Proof, counting and probability', courses: [
        { code: 'HEXO / T / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Induction, combinatorics and proof on demanding problems.' },
        { code: 'HEXO / T / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The binomial distribution and sampling ideas in depth.' },
        { code: 'HEXO / T / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'An international course with strong overlap in vectors and calculus.' }
      ] },
      { num: 'III', h3: 'Further on', sub: 'For students looking past the HSC', courses: [
        { code: 'HEXO / F / 01', slug: 'a-level-further-maths-course', title: 'Further mathematics', blurb: 'A UK course whose core pure content overlaps Extension 2 territory.' },
        { code: 'HEXO / F / 02', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'Calculus and linear algebra at first-year pace.' },
        { code: 'HEXO / F / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python for testing conjectures before proving them.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson rhythm',
    h2: 'Weekly sessions that fit an NSW school day',
    lede: 'Our tutors teach from India, which is four and a half hours behind Sydney in winter and five and a half hours behind once NSW daylight saving starts in October. A 5 pm lesson in Sydney falls around midday for the tutor, so after-school teaching is straightforward to arrange.',
    slots: [
      { time: 'Weekday afternoons', l: 'Most Extension 1 students take one or two of these a week.' },
      { time: 'Weekend mornings', l: 'Longer blocks for proof practice or a full timed paper.' },
      { time: 'Before trials', l: 'Short runs in the school holidays.' }
    ],
    cells: [
      { h3: 'Proof as a sentence', p: 'Students say what they are assuming and why it helps, before writing a symbol.' },
      { h3: 'Cases before claims', p: 'Quick tables or short programs check a statement before any proof is attempted.' },
      { h3: 'Both papers practised', p: 'Advanced items keep their place in revision, where careless marks hide.' },
      { h3: 'Classes of fifteen to twenty', p: 'Extension 1 students at one level, each explaining a step aloud every week.' },
      { h3: 'Individual help', p: 'A single tutor for a single focus area that will not click.' },
      { h3: 'No rank promises', p: 'We never forecast an ATAR or a band. The effort and the result are the student\'s.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Personal projects, none of them school assessment. The full set lives in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Exactly as posted on Google by students and parents.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly charge in US dollars, identical for every family outside India, with no joining fee and nothing payable beyond the current month.',
    free: ['A full lesson with a tutor', 'A straight answer on readiness', 'No payment details'],
    group: ['Fifteen to twenty students at one level', 'One tutor all term', 'Proofs marked and discussed', 'A certificate on completion'],
    one: ['A tutor for one student', 'Focused on chosen topics', 'Good for the weeks before trials']
  },

  faq: {
    eyebrow: 'Questions about Extension 1',
    h2: 'What Extension 1 families ask us',
    items: [
      { q: 'What is HSC Mathematics Extension 1?', a: 'A one-unit NSW mathematics course taken with Mathematics Advanced. Under the 2024 syllabus it adds polynomials, combinatorics, the binomial theorem, proof by mathematical induction, vectors, inverse trigonometric functions, further calculus, and the binomial distribution with the sampling distribution of the mean.' },
      { q: 'Do I have to take Mathematics Advanced as well?', a: 'Yes. NESA lists Year 11 Advanced as a corequisite for Year 11 Extension 1, and Year 12 Advanced as a corequisite for Year 12 Extension 1.' },
      { q: 'How long is the Extension 1 exam?', a: '2 hours plus 10 minutes reading time, for a paper worth 70 marks with a reference sheet and approved calculators.' },
      { q: 'Do Extension 1 students sit more than one paper?', a: 'Yes. NESA states that students also complete either the Mathematics Advanced paper or the Mathematics Extension 2 paper, depending on their enrolment.' },
      { q: 'What is proof by mathematical induction?', a: 'A way of proving a statement for every positive integer from a starting value. You show it holds for the first value, then show that if it holds for any value k it must hold for k + 1. Together these cover every case.' },
      { q: 'Why is checking many cases not a proof?', a: 'Because a pattern can hold for a long time and then fail. The expression n squared + n + 41 is prime for n = 0 to 39 but equals 1681, which is 41 squared, at n = 40.' },
      { q: 'How does Extension 1 count towards the ATAR?', a: 'UAC says up to 4 units of calculus-based maths can be included. Extension 1 counts as 1 unit when paired with Advanced, and as 2 units when paired with Extension 2.' },
      { q: 'Is there a Year 11 Extension 2 course?', a: 'No. Under the 2024 syllabus, Extension 2 is a Year 12 course; Extension 1 in Year 11 is part of the pathway towards it.' },
      { q: 'Will you guarantee a top result?', a: 'No. We teach the mathematics and the writing; the result is earned by the student.' },
      { q: 'Do you help with take-home tasks?', a: 'We teach the underlying mathematics with our own problems, and we do not write, edit or check any work that a school will mark.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for NSW mathematics students',
    lede: 'The course below this one, the course above it, and how it all feeds the ATAR.',
    items: [
      { href: '/hsc-maths-advanced-tutoring', label: 'HSC Maths Advanced', p: 'The corequisite course, explained from its 2024 syllabus.' },
      { href: '/hsc-maths-extension-2-tutoring', label: 'HSC Maths Extension 2', p: 'Complex numbers, mechanics and harder proof in Year 12.' },
      { href: '/atar-explained-for-coding-students', label: 'The ATAR explained', p: 'Ranks, scaling and units, from the admissions centres.' },
      { href: '/coding-and-ai-classes-in-new-south-wales', label: 'Coding and AI in New South Wales', p: 'Every NSW page and the state\'s school system.' },
      { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMC and AIO preparation', p: 'Competition mathematics and informatics.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'The method behind every lesson.' }
    ]
  },

  start: {
    h2: 'Try a free Extension 1 lesson',
    lede: 'Send us the year level, the focus area that is hardest right now, and the school\'s current topic. The free lesson works on it with our own questions.',
    readFirst: 'Want to look around first? Full course outlines are on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, the teaching method is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and our <a class="ag-inline-link" href="/hsc-maths-advanced-tutoring">Advanced page</a> covers the corequisite course.',
    note: 'WhatsApp answers fastest. The +91 code is Indian because we teach from India; nothing here claims an office in NSW.',
    formNote: 'No card, no contract. A single reply to set up the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'HSC mathematics', links: [
        { href: '/hsc-maths-advanced-tutoring', label: 'Maths Advanced' },
        { href: '/hsc-maths-extension-2-tutoring', label: 'Maths Extension 2' },
        { href: '/atar-explained-for-coding-students', label: 'The ATAR explained' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Test the cases, then write the proof'
  },

  personalityCss: `
.ag-root.ag-hexo .ag-hero-grid { gap: clamp(1rem, 2.8vw, 2.4rem); }
.ag-root.ag-hexo .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-hexo .ag-capsule { border-left-width: 7px; }
.ag-root.ag-hexo .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-hexo .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-hexo .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-hexo .ag-spec dt { letter-spacing: 0.08em; }
.ag-root.ag-hexo .ag-slots { gap: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'NSW Education Standards Authority (NESA). Mathematics Extension 1 11-12 Syllabus (2024), read at curriculum.nsw.edu.au on 7 October 2026: implemented from 2026, Year 12 teaching Term 4 2026, first HSC exam 2027; course numbers 11250 and 15250, 60 hours and 1 unit each, Advanced corequisite; HSC exam 70 marks, 2 hours plus 10 minutes reading time, Section I 10 marks, Section II 60 marks in 23 to 28 items; students also sit the Advanced or Extension 2 paper. UAC on calculus-based units in the ATAR.',
    localProject: 'Test-then-prove for mathematical induction: the sum of the first n odd numbers checked for n = 1 to 6 then proved by induction; the counterexample n squared + n + 41, prime for n = 0 to 39 and equal to 1681 = 41 squared at n = 40; the base-case trap in 2 to the n greater than n squared (true for n = 1 and from n = 5). Written by us.',
    requiredMentions: ['Mathematics Extension 1 11-12 Syllabus (2024)', 'Proof by mathematical induction', 'The binomial distribution and sampling distribution of the mean', '23 to 28 items', '2 hours plus 10 minutes reading time', '15250', '1681', 'Up to 4 units of calculus-based maths', 'Inverse trigonometric functions'],
    sources: [
      { claim: 'NSW Curriculum, Mathematics Extension 1 11-12 Syllabus (2024): implementation dates and seven areas of study.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-1-11-12-2024/overview' },
      { claim: 'NSW Curriculum, Mathematics Extension 1 course structure and enrolment details: focus areas, course numbers 11250 and 15250, 60 hours, 1 unit, corequisites and prerequisites.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-1-11-12-2024/overview/course' },
      { claim: 'NSW Curriculum, Mathematics Extension 1 HSC examinations: 70-mark paper specification and the requirement to complete the Advanced or Extension 2 paper.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-1-11-12-2024/assessment/hsc-examinations' },
      { claim: 'UAC, how your ATAR is calculated: up to 4 units of calculus-based maths; Extension 1 weighting with Advanced or Extension 2.', url: 'https://www.uac.edu.au/future-applicants/atar/how-your-atar-is-calculated' },
      { claim: 'NESA, 2026 HSC key dates: written exams 13 October to no later than 5 November 2026.', url: 'https://www.nsw.gov.au/education-and-training/nesa/key-dates/hsc' }
    ],
    rejectedClaims: [
      'The 2026 exam date for Extension 1: the timetable PDF did not extract cleanly enough to tie the paper to its day, so only the exam period is given.',
      'Scaled means or typical scaled marks for Extension 1: UAC publishes these in reports not read for this page, and none are quoted.',
      'Any advice that a student should or should not take Extension 1 for the ATAR: deliberately not given.',
      'Any band or ATAR promise: none.',
      'Any affiliation with NESA or UAC: none.'
    ]
  }
};
