'use strict';
// Advanced Higher Maths tuition online (ag- maths door, Scotland; UK cluster Phase 3).
// Sources, read raw on 21 September 2026 (sqa.org.uk PDFs via curl + PyMuPDF):
//  - Advanced Higher Mathematics Course Specification, course code C847 77, course assessment code X847 77,
//    SCQF level 7 (32 SCQF credit points), valid from session 2019-20, May 2019, version 2.0. Verbatim:
//    "Component 1: question paper 1 (non-calculator) 35 1 hour"; "Component 2: question paper 2 80 2 hours
//    and 30 minutes"; notional "160 hours"; entry: "Candidates should have achieved the Higher Mathematics
//    course or equivalent"; content areas "Algebra, proof and number theory", "Calculus", "Matrices,
//    vectors and complex numbers"; skills including proof by contradiction, contrapositive, direct proof,
//    "using proof by induction", Euclid's algorithm, Gaussian elimination, de Moivre's theorem, Maclaurin
//    expansions.
//  - Course report 2025, Advanced Higher Mathematics. Verbatim: resulted entries 4,390 (2024) and 4,469
//    (2025); A 1,845, 41.3%, minimum mark 83; B 71; C 60; D 48; No award 16.9%; "We have not applied
//    rounding"; papers "less demanding than expected" and boundaries adjusted; "omitting certain words or
//    phrases can invalidate the proof"; "They should ensure that they clearly show details such as
//    substitution and algebraic manipulation."; "Candidates should not write over their original answer if
//    they make a mistake."; "expressions can often be simplified by looking for common factors"; "look for
//    accessible marks in the parts of the assessment they find more challenging and to persevere and work to
//    the end of each question paper"; question-level comments summarised.
//  - Higher Mathematics Course Specification lists progression to "Advanced Higher Mathematics,
//    Advanced Higher Mathematics of Mechanics, Advanced Higher Statistics".
// Spine: in a proof, the words carry marks. Advanced Higher brings formal proof into the Scottish exam, and
// the 2025 report warns that leaving out certain words can invalidate a proof by induction. Around it,
// established routines done exactly and notation kept precise. Distinct from National 5 (forty marks
// without a calculator) and Higher (every line follows the last).

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'AH MATHS', blurb: 'Advanced Higher brings formal proof into the exam, and the 2025 report warns that missing words can invalidate a proof by induction.' },
  slug: 'advanced-higher-maths-tuition-online',
  code: 'ahm',
  accent: '#5C4E1F',
  accentRationale: 'Advanced Higher Maths: a dark olive gold from the solver (6.65:1 on every paper tint, dE 8.1 from the nearest used accent), warmer than the other two Scottish maths pages so the ladder steps through three distinct hues',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Advanced Higher Maths tuition online',
  title: 'Advanced Higher Maths Tuition Online | Proof, Routines',
  description: 'Advanced Higher Maths tuition online: proof by induction, where missing words can invalidate the proof, plus the routines and notation the 2025 report flagged.',
  ogDescription: 'Advanced Higher is where proof enters the Scottish exam. The 2025 report warns that leaving out certain words can invalidate a proof by induction.',
  twitterDescription: 'Advanced Higher Maths tuition: proof by induction, integrating factors, Maclaurin series, matrices and the notation markers need.',
  pageName: 'Advanced Higher Maths Tuition Online',
  webPageDescription: 'Live online tuition for Advanced Higher Mathematics in Scotland, built from the course specification and the 2025 course report.',
  courseDescription: 'Live online teaching for Advanced Higher Mathematics candidates: proof, calculus and differential equations, series, matrices, vectors and complex numbers.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Advanced Higher Maths',
  navLinks: [
    { href: '#course', label: 'The course' },
    { href: '#proof', label: 'Proof' },
    { href: '#routines', label: 'Routines' },
    { href: '#writing', label: 'Writing it down' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Scotland &middot; Advanced Higher &middot; S6',
  h1: 'Advanced Higher Maths tuition online',
  lede: 'Advanced Higher Mathematics is where Scottish school maths starts asking students to prove things, not just calculate them. The course lists proof by contradiction, by contrapositive, direct proof and proof by induction among its skills, and the 2025 course report gave a warning that surprises students used to method marks: in an induction proof, "omitting certain words or phrases can invalidate the proof". A proof is an argument, and an argument with a missing step is not a proof, however good the algebra around it. The rest of the paper rewards something just as exacting: established routines, such as the integrating factor, done without a sign slip, and notation that leaves a marker no doubt. This page sets out the course, what the 2025 candidates did well and badly, and how we teach it.',
  secondaryCta: { href: '#proof', label: 'Proof by induction' },
  wa: 'Hello Modern Age Coders, I would like a free first lesson for Advanced Higher Maths.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Drawn from the course specification and the 2025 report',
  spec: [
    ['Course', 'Advanced Higher Mathematics C847 77'],
    ['Paper 1', 'No calculator, 35 marks, 1 hour'],
    ['Paper 2', 'Calculator, 80 marks, 2 hours 30 minutes'],
    ['Content', 'Algebra and proof, calculus, matrices and complex numbers'],
    ['Entries in 2025', '4,469 resulted'],
    ['Entry', 'Higher Mathematics or equivalent'],
    ['Group', 'Five to ten at one stage'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Advanced Higher Mathematics is examined by a non-calculator paper worth 35 marks in one hour and a calculator paper worth 80 marks in two and a half hours, with no coursework. Its content falls into three areas: algebra, proof and number theory; calculus; and matrices, vectors and complex numbers. Candidates normally arrive with Higher Mathematics. In 2025, 4,469 received a result. The course report praised excellent answers to the hardest questions, but warned that omitting certain words can invalidate a proof by induction, and flagged sign errors with integrating factors, Maclaurin series, matrix inverses, cyclic integration by parts, missing constants, brackets and unclear handwriting. Modern Age Coders teaches Advanced Higher Maths live, with proofs written in full and checked for every necessary step, routines drilled until exact, and notation treated as part of the mark. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for Advanced Higher',
    lede: 'University-level content, the calculus bridge, and proof. We teach the Advanced Higher specification through courses built for more than one curriculum.',
    items: [
      { course: 'college-mathematics-complete-masterclass', code: 'AHM / 01', title: 'University Mathematics', note: 'Matrices, proof by induction, Maclaurin series and differential equations, much of the Advanced Higher list.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'AHM / 02', title: 'A Level Maths', note: 'Calculus, the binomial theorem and vectors, to secure the foundations Advanced Higher builds on.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'AHM / 03', title: 'Competition Mathematics', note: 'Proof, induction and complex numbers, for students who want to write arguments, not only answers.' }
    ]
  },

  sections: [
    {
      id: 'course', tint: 'tint', eyebrow: 'The course',
      h2: 'Two papers, three areas, and the step into proof',
      lede: 'From the Advanced Higher Mathematics Course Specification, version 2.0, valid from session 2019 to 20.',
      body: [
        { kind: 'table', caption: 'Advanced Higher Mathematics at a glance', head: ['Part', 'Marks', 'Length', 'Calculator'], rows: [
          ['Question paper 1', '35', '1 hour', 'No'],
          ['Question paper 2', '80', '2 hours 30 minutes', 'Yes']
        ] },
        { kind: 'table', mt: true, caption: 'The three content areas', head: ['Area', 'Includes'], rows: [
          ['Algebra, proof and number theory', 'Partial fractions, the binomial theorem, sequences and series, proof by contradiction, contrapositive, direct proof and induction, Euclid\'s algorithm'],
          ['Calculus', 'Differentiation of exponential, logarithmic and inverse functions, integration by substitution and by parts, first-order differential equations, Maclaurin expansions'],
          ['Matrices, vectors and complex numbers', 'Gaussian elimination for three equations, matrix algebra and inverses, lines and planes in three dimensions, de Moivre\'s theorem and roots of complex numbers']
        ] },
        { kind: 'table', mt: true, caption: 'Advanced Higher Mathematics results, 2025', head: ['Item', 'Figure as published'], rows: [
          ['Resulted entries', '4,469 (4,390 in 2024)'],
          ['Grade A', '41.3 per cent, minimum 83 of 115'],
          ['Grade C minimum', '60 of 115'],
          ['No award', '16.9 per cent']
        ] },
        { kind: 'p', html: 'Both 2025 papers proved less demanding than expected, and the boundaries were adjusted upward to reflect that, so those minimum marks describe 2025 and are not targets. Advanced Higher Mathematics is one of three Advanced Higher maths courses; Mathematics of Mechanics and Statistics are separate qualifications.' },
        { kind: 'source', html: 'Source: the Advanced Higher Mathematics Course Specification, version 2.0, and the Advanced Higher Mathematics course report 2025, both from sqa.org.uk. Qualifications Scotland has awarded the course since replacing SQA on 1 February 2026, and the SQA-era documents remain in force.' }
      ]
    },
    {
      id: 'proof', tint: 'deep', eyebrow: 'Proof',
      h2: 'In a proof, the words carry marks',
      lede: 'The report\'s advice on proof by induction, and why it matters more than students expect.',
      body: [
        { kind: 'p', html: 'Question 15 on the 2025 paper 2 was a proof by induction. The report advises that candidates "should practise proof by induction", citing that question, "so that they are familiar with the vocabulary necessary to demonstrate their understanding of the process", and warns: "They should be aware that omitting certain words or phrases can invalidate the proof. They should ensure that they clearly show details such as substitution and algebraic manipulation."' },
        { kind: 'table', mt: true, caption: 'The parts of an induction proof, and what each must show', head: ['Part', 'What it has to establish'], rows: [
          ['Base case', 'The statement is true for the first value, shown by substitution, not asserted'],
          ['Assumption', 'The statement is assumed true for n = k, stated explicitly'],
          ['Inductive step', 'Using that assumption, the statement is shown true for n = k + 1, with every piece of algebra visible'],
          ['Conclusion', 'A sentence tying the three together: because it holds for the first value, and truth for k implies truth for k + 1, it holds for all the required values']
        ] },
        { kind: 'p', html: 'The conclusion is where the missing words usually are. A student who has done the algebra perfectly and then stops has not finished the proof, because the logical link that makes induction work has never been stated. The same is true of an assumption used but never written down. These are not formalities; they are the argument.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Contradiction', p: 'Assume the opposite of what is to be proved and show it leads to something impossible. The assumption has to be stated clearly at the start.' },
          { h3: 'Contrapositive', p: 'Prove that if not Q then not P, which is logically the same as if P then Q. Students often confuse it with the converse, which is not equivalent.' },
          { h3: 'Direct proof', p: 'A chain of reasoning from known facts to the result. In straightforward examples, each step must be justified, not just asserted.' }
        ] }
      ]
    },
    {
      id: 'routines', tint: '', eyebrow: 'Routines',
      h2: 'Established routines, done exactly',
      lede: 'The report\'s first recommendation is to revise standard techniques thoroughly. Here is where they slipped in 2025.',
      body: [
        { kind: 'table', caption: 'Routine slips in the 2025 report', head: ['Topic', 'What went wrong'], rows: [
          ['Binomial expansion', 'A few gave the general term instead of the full expansion'],
          ['Complex division', 'Some did not multiply numerator and denominator by the conjugate of the denominator'],
          ['Matrices', 'A few gave an incorrect transpose; most did not take a suitable first step to find an inverse from a given relation'],
          ['Rational functions', 'The non-vertical asymptote not stated after the function was rewritten'],
          ['Maclaurin series', 'Some could not expand a simple trigonometric function; many did not square the result in the next part and restarted from first principles'],
          ['Differential equations', 'Some omitted the negative sign when finding the integrating factor'],
          ['Integration by parts', 'In a cyclic case, some said the reappearing integral meant no solution or infinitely many'],
          ['Volume of revolution', 'Most set up the integral; fewer reached the value, and a few gave an approximation where an exact answer was required']
        ] },
        { kind: 'p', html: 'Two patterns run through that list. The first is a routine known but not finished: the expansion left at the general term, the asymptote not stated, the exact value replaced with a decimal. The second is a routine misread: in cyclic integration by parts, the original integral reappearing is the whole point of the method, a signal to rearrange and solve, not a sign that something has failed.' },
        { kind: 'two', mt: true,
          leftH3: 'What candidates did well',
          left: [
            'Most used Gaussian elimination successfully to find where three planes meet, and many handled logarithmic differentiation and rearranged to the required result.',
            'Some produced excellent, insightful answers to the hardest questions, including related rates of change with a combined increase and decrease.'
          ],
          rightH3: 'The factorisation lesson',
          right: [
            'One question gave two expressions that already shared two common factors. Many candidates multiplied both out, making the factorisation much harder, and only a few completed it.',
            'The report\'s advice: "expressions can often be simplified by looking for common factors", rather than expanding first.'
          ] }
      ]
    },
    {
      id: 'writing', tint: 'tint', eyebrow: 'Writing it down',
      h2: 'Notation, handwriting and working to the end',
      lede: 'At Advanced Higher, how an answer is written can decide whether it is marked at all.',
      body: [
        { kind: 'table', caption: 'Presentation points from the report', head: ['Point', 'The report\'s advice'], rows: [
          ['Brackets', 'Marks were lost for omitted brackets in several questions on both papers'],
          ['Integrals', 'Write integrals accurately, especially where the variable is not obvious, as in substitution or volume of revolution'],
          ['Constants', 'Include the constant of integration, and take care if it is later manipulated'],
          ['Handwriting', '"Candidates should not write over their original answer if they make a mistake." Score it through and rewrite legibly in a blank space'],
          ['Units and variables', 'Give units in rates of change, and do not introduce undefined variables'],
          ['Stamina', 'Look for accessible marks in the harder parts and persevere to the end of each paper']
        ] },
        { kind: 'p', html: 'The handwriting point is sharper than it sounds. The report notes that markers can find candidates\' writing difficult to interpret, especially when an answer has been corrected by writing over it. A mark cannot be given for an answer the marker cannot read with confidence. Layout, the report says, should leave the marker in no doubt about what to mark and what to ignore.' },
        { kind: 'two', mt: true,
          leftH3: 'How we teach Advanced Higher',
          left: [
            'Proofs written in full every week, then read back for any missing step or unstated assumption, the way a marker would.',
            'Standard routines drilled to exactness, and the finishing step of each, the asymptote, the exact value, the constant, treated as part of the routine.'
          ],
          rightH3: 'What we will not claim',
          right: [
            'That we run a course made only for Advanced Higher. Our university-level and A level courses cover the content, and we teach it against the specification.',
            'That any grade is guaranteed. The report shows how much rests on care in writing as well as on understanding.'
          ] },
        { kind: 'p', html: 'For the level below, <a class="ag-inline-link" href="/higher-maths-tuition-online">the Higher Maths page</a> covers consistent working, and students who also take computing will find <a class="ag-inline-link" href="/advanced-higher-computing-science-project-help">the Advanced Higher Computing Science page</a> useful. Strong mathematicians may want <a class="ag-inline-link" href="/british-mathematical-olympiad-bmo-preparation">British Mathematical Olympiad preparation</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through S6',
    lede: 'Placement depends on how securely a student can write an argument, not only on how much calculus they know.',
    table: { caption: 'What an Advanced Higher candidate should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Higher, secure', 'Start of S6', 'Differentiation, integration, logarithms and trigonometry from Higher, done fluently and consistently'],
      ['2. New techniques', 'Autumn', 'Partial fractions, integration by parts and substitution, the binomial theorem, matrices and complex numbers'],
      ['3. Proof', 'Winter', 'Induction, contradiction and contrapositive written in full, with every assumption and conclusion stated'],
      ['4. The whole paper', 'Spring', 'Two-and-a-half-hour papers worked to the end, with accessible marks found in the hardest questions']
    ] },
    left: { h3: 'Rung three is new territory', ps: [
      'Few students have written a formal proof before S6. It improves quickly with weekly writing and careful feedback.',
      'Students who code may enjoy the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>, where the same logical care applies.'
    ] },
    right: { h3: 'Rung four is stamina', ps: [
      'Paper 2 is long. Persevering to the end, as the report asks, is a habit built with full timed papers.',
      'Lessons pause for the diet and are there afterwards for university preparation.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for S6 and beyond',
    lede: 'Grouped by purpose. The first lesson settles the order.',
    bands: [
      { num: 'I', h3: 'Advanced Higher content', sub: 'Proof, calculus, matrices', courses: [
        { code: 'UK / AHM1 / 01', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'Matrices, series, induction and differential equations.' },
        { code: 'UK / AHM1 / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Calculus and algebra foundations made secure.' },
        { code: 'UK / AHM1 / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Proof and problem solving at depth.' }
      ] },
      { num: 'II', h3: 'Other routes at this level', sub: 'Mechanics, statistics and the IB', courses: [
        { code: 'UK / AHM2 / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For students also considering Advanced Higher Statistics.' },
        { code: 'UK / AHM2 / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB mathematics', blurb: 'A rigorous parallel curriculum with strong proof content.' },
        { code: 'UK / AHM2 / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Mathematics for data analytics', blurb: 'Where university mathematics meets data.' }
      ] },
      { num: 'III', h3: 'Mathematics and computing', sub: 'For future engineers and scientists', courses: [
        { code: 'UK / AHM3 / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'Proof and induction at work in computer science.' },
        { code: 'UK / AHM3 / 02', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python, zero to advanced', blurb: 'Numerical methods and experiments with series.' },
        { code: 'UK / AHM3 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Mathematical ideas explored by writing programs.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Arguments written in full',
    lede: 'Our teachers are based in India, which never moves its clocks, so Scotland is four and a half hours behind in summer and five and a half in winter. Every slot is fixed in UK time.',
    slots: [
      { time: 'After school', l: 'The usual slot for S6 students.' },
      { time: 'Evening', l: 'Around free periods, jobs and applications.' },
      { time: 'Weekend', l: 'Time for a full paper 2 and its review.' }
    ],
    cells: [
      { h3: 'Proofs every week', p: 'Induction and other proofs written in full, then checked for any missing word or step.' },
      { h3: 'Routines to the finish', p: 'Each standard technique practised through to its final step, exact values and all.' },
      { h3: 'Common factors first', p: 'Expressions examined for shared factors before anything is expanded.' },
      { h3: 'Readable working', p: 'Corrections scored through and rewritten, never written over.' },
      { h3: 'Full timed papers', p: 'Two-and-a-half-hour papers in spring, worked to the end.' },
      { h3: 'Small groups', p: 'Five to ten S6 students, reading each other\'s proofs critically.' }
    ]
  },

  projectsH2: 'Projects from our older students\' lessons',
  projectsLede: 'Four projects from classes, none of them assessed. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, word for word.',

  fees: {
    h2: 'Fees for Advanced Higher lessons',
    lede: 'A monthly charge in US dollars, the same for all families outside India. First lessons are free, and we invoice only after a course and a weekly time have been chosen.',
    free: ['A lesson on real Advanced Higher material', 'A frank view of how secure the proofs are', 'Only a phone number to book'],
    group: ['Five to ten S6 students on one rung', 'One teacher through the session', 'Proofs read and returned each week', 'Full timed papers in spring'],
    one: ['A teacher for one student', 'A plan built back from the diet', 'Suits a student aiming at a mathematics degree']
  },

  faq: {
    eyebrow: 'Questions about Advanced Higher Maths',
    h2: 'What S6 students and parents ask',
    items: [
      { q: 'How is Advanced Higher Maths assessed?', a: 'By two question papers: a non-calculator paper worth 35 marks in one hour and a calculator paper worth 80 marks in two hours and 30 minutes. There is no coursework.' },
      { q: 'What topics does it cover?', a: 'Three areas: algebra, proof and number theory; calculus, including differential equations and Maclaurin series; and matrices, vectors and complex numbers, including de Moivre\'s theorem.' },
      { q: 'Why does proof by induction need particular care?', a: 'The 2025 report warns that omitting certain words or phrases can invalidate the proof. The base case, the assumption, the inductive step and the conclusion all have to be written out.' },
      { q: 'What did candidates find hardest in 2025?', a: 'Finding an inverse matrix from a given relation, completing a factorisation that needed common factors, Maclaurin series, the sign of an integrating factor, and cyclic integration by parts.' },
      { q: 'Does handwriting really matter?', a: 'Yes. The report says markers can find handwriting hard to interpret, especially over-written corrections, and asks candidates to score through mistakes and rewrite clearly instead.' },
      { q: 'What mark is needed for an A?', a: 'It varies. In 2025 the minimum was 83 of 115 for an A and 60 for a C, after both papers proved less demanding than expected; the next diet will be different.' },
      { q: 'Do I need Higher Maths first?', a: 'Entry is at the school\'s discretion, but the specification expects candidates to have achieved Higher Mathematics or equivalent.' },
      { q: 'Are there other Advanced Higher maths courses?', a: 'Yes. Mathematics of Mechanics and Statistics are separate Advanced Higher qualifications. This page covers Advanced Higher Mathematics.' },
      { q: 'Who awards it now?', a: 'Qualifications Scotland, which replaced SQA on 1 February 2026. The course documents from the SQA period remain current.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Ongoing lessons are a monthly fee in US dollars, lower for a group place than one to one, as set out in the fees section, and nothing is payable in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Next steps for strong mathematicians',
    lede: 'The Scottish ladder, the olympiad route, and computing at the same level.',
    items: [
      { href: '/higher-maths-tuition-online', label: 'Higher Maths tuition', p: 'The level below, where consistent working is the lesson.' },
      { href: '/national-5-maths-tuition-online', label: 'National 5 Maths tuition', p: 'Where the ladder starts, without a calculator.' },
      { href: '/advanced-higher-computing-science-project-help', label: 'Advanced Higher Computing Science', p: 'The computing course at the same level.' },
      { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad', p: 'Proof-based competition for the strongest students.' },
      { href: '/maths-olympiad-training-uk', label: 'Maths olympiad training', p: 'The full UK competition ladder.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Where every UK page is linked.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time of your choice. The lesson includes a short proof written in full and ends with a plan for the session.',
    readFirst: 'Would you like to read first? Each <a class="ag-inline-link" href="/courses">course page</a> gives its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> is candid about who our method suits, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows what students make.',
    note: 'WhatsApp is the fastest route, free from a UK phone. Messages go to our India office, so the number opens with +91.',
    formNote: 'No card needed and no contract. We reply once, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Scottish maths', links: [
        { href: '/higher-maths-tuition-online', label: 'Higher Maths' },
        { href: '/national-5-maths-tuition-online', label: 'National 5 Maths' },
        { href: '/advanced-higher-computing-science-project-help', label: 'AH Computing Science' },
        { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland overview' }
      ] },
      { h4: 'Competitions', links: [
        { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad' },
        { href: '/maths-olympiad-training-uk', label: 'Olympiad training' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'Course list' }
      ] }
    ],
    bottomRight: 'Advanced Higher Maths, live on UK time'
  },

  personalityCss: `
.ag-root.ag-ahm .ag-hero h1 { letter-spacing: -0.021em; font-weight: 730; }
.ag-root.ag-ahm .ag-capsule { border-left-width: 6px; border-top: 1px solid var(--ag-accent); }
.ag-root.ag-ahm .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-ahm .ag-table caption { text-align: left; font-weight: 640; }
.ag-root.ag-ahm .ag-table td:first-child { font-weight: 610; }
.ag-root.ag-ahm .ag-band-head h3 { letter-spacing: -0.013em; }
`,

  mustMention: ['35 marks', '80 marks', 'proof by induction', 'invalidate the proof', 'integrating factor', 'Maclaurin', 'de Moivre', '4,469', 'C847 77', 'common factors'],

  dossier: {
    curriculumAuthority: 'Scotland, Advanced Higher Mathematics. Course Specification, course code C847 77, course assessment code X847 77, SCQF level 7 (32 SCQF credit points), valid from session 2019-20, May 2019, version 2.0: "Component 1: question paper 1 (non-calculator) 35 1 hour"; "Component 2: question paper 2 80 2 hours and 30 minutes"; notional 160 hours; entry Higher Mathematics or equivalent; content areas "Algebra, proof and number theory", "Calculus", "Matrices, vectors and complex numbers"; skills including proof by contradiction, contrapositive, direct proof and induction, Euclid\'s algorithm, Gaussian elimination, de Moivre\'s theorem and Maclaurin expansions. Course report 2025: resulted entries 4,390 (2024) and 4,469 (2025); A 41.3% minimum 83; C minimum 60; No award 16.9%; "We have not applied rounding"; both papers less demanding than expected and boundaries adjusted; "should practise proof by induction ... so that they are familiar with the vocabulary necessary to demonstrate their understanding of the process"; "omitting certain words or phrases can invalidate the proof"; "They should ensure that they clearly show details such as substitution and algebraic manipulation."; "Candidates should not write over their original answer if they make a mistake."; "expressions can often be simplified by looking for common factors"; persevere to the end of each paper; question-level comments summarised. Higher Mathematics specification lists Advanced Higher Mathematics of Mechanics and Advanced Higher Statistics as separate progressions.',
    localProject: 'In a proof, the words carry marks. Advanced Higher Mathematics brings formal proof into the Scottish exam, and the 2025 course report warns that omitting certain words or phrases can invalidate a proof by induction. The page sets out the two papers, the three content areas and the 2025 results as published, explains the parts of an induction proof and what each must show, contrasts contradiction, contrapositive and direct proof, then lists the routine slips the report found (binomial, complex division, matrices, asymptotes, Maclaurin, integrating factors, cyclic integration by parts, volumes of revolution) and its presentation advice (brackets, integrals, constants, handwriting, stamina). It says honestly that no course of ours is made only for Advanced Higher. Lesson family: a qualification where argument, not calculation, becomes the thing being marked.',
    requiredMentions: ['invalidate the proof', 'integrating factor', 'common factors', '4,469'],
    sources: [
      { claim: 'Advanced Higher Mathematics Course Specification, version 2.0: course codes, both papers with marks and times, notional hours, entry, the three content areas and the skills within them.', url: 'https://www.sqa.org.uk/files_ccc/AHCourseSpecMathematics.pdf' },
      { claim: 'Advanced Higher Mathematics course report 2025: entries, grade distribution and minimum marks, question-level performance, and advice on proof, routines and presentation.', url: 'https://www.sqa.org.uk/sqa/files_ccc/2025-ah-course-report-mathematics.pdf' },
      { claim: 'Higher Mathematics Course Specification: the list of progression routes including Advanced Higher Mathematics of Mechanics and Advanced Higher Statistics.', url: 'https://www.sqa.org.uk/sqa/files_ccc/h-course-spec-mathematics.pdf' }
    ],
    rejectedClaims: [
      'The exact words a proof by induction must contain: the report does not list them, so the page explains the standard structure rather than claiming a marking script.',
      'Grade boundaries as targets: 2025 figures described as 2025 only.',
      'A course written only for Advanced Higher: none exists; the page says so.',
      'Any promise about a grade, which we decline.'
    ]
  }
};
