'use strict';
// VCE Specialist Mathematics tutoring (ag- exam door, Australia cluster Phase 3, row 62).
// Facts read raw on 7 October 2026 from the VCAA: the VCE Specialist Mathematics study design page and the
// VCE Mathematics Study Design (Units 1 to 4 accredited from 1 January 2023). Specialist Units 3 and 4 areas
// of study: Algebra, number and structure; Calculus; Data analysis, probability and statistics; Discrete
// mathematics; Functions, relations and graphs; Space and measurement. Assumes Methods Units 1 and 2,
// Specialist Units 1 and 2, and concurrent or previous Methods Units 3 and 4. Weights: Unit 3 coursework
// 20 per cent (application task, 4 to 6 hours over 1 to 2 weeks), Unit 4 coursework 20 per cent, Examination 1
// 20 per cent (1 hour, no technology, formula sheet), Examination 2 40 per cent (2 hours). 2026 timetable:
// Examination 1 Monday 9 November 9:00 to 10:15 am, Examination 2 Wednesday 11 November 11:45 am to 2:00 pm.
// Spine: nth roots of unity as the vertices of a regular polygon (family checked free site-wide 7 October 2026).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'VCE SPECIALIST MATHS', label: 'VCE Specialist Maths tutoring', blurb: 'Specialist Mathematics Units 3 and 4 from the study design: six areas of study, proof, complex numbers, vectors, differential equations and inference, two exams, and the roots of unity drawn as polygons.' },
  slug: 'vce-specialist-maths-tutoring',
  code: 'vcsm',
  accent: '#815433',
  accentRationale: 'VCE Specialist Maths: a burnt umber, warm and serious, at least 11 RGB from every site accent and 4.8:1 or better on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'VCE Specialist Maths tutoring',
  title: 'VCE Specialist Maths Tutoring | Units 3 and 4 Online',
  description: 'VCE Specialist Maths tutoring online for Victorian students: proof, complex numbers, vectors, calculus and inference, both exams and the SACs, taught by hand first.',
  ogDescription: 'VCE Specialist Mathematics from the VCAA study design: the six areas of study, how the two exams and coursework weigh, the 2026 exam dates, and the nth roots of unity worked as regular polygons.',
  twitterDescription: 'VCE Specialist Maths from the study design: proof, complex numbers, vectors, two exams, and roots of unity as polygons.',
  pageName: 'VCE Specialist Maths Tutoring',
  webPageDescription: 'Support for Victorian students taking VCE Specialist Mathematics Units 3 and 4: areas of study and assumed knowledge, coursework and both examinations, the 2026 examination sessions, and a worked lesson on the nth roots of unity as regular polygon vertices.',
  courseDescription: 'Live online maths tutoring in proof, complex numbers, vectors, advanced calculus, differential equations and statistical inference for Victorian VCE Specialist Mathematics students, without completing any School-assessed Coursework.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'VCE Specialist Maths',
  navLinks: [
    { href: '#six', label: 'Six areas' },
    { href: '#papers', label: 'The exams' },
    { href: '#unity', label: 'Roots of unity' },
    { href: '#coursework', label: 'Coursework' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Victoria &middot; VCE Specialist Mathematics &middot; Live online',
  h1: 'VCE Specialist Maths tutoring',
  lede: 'Specialist Mathematics is the deepest of the VCE maths studies, and the study design says so in its own words: it emphasises "mathematical structure, reasoning and proof". Students meet complex numbers in polar form, vector proofs, differential equations and statistical inference, usually while taking Mathematical Methods at the same time.',
  secondaryCta: { href: '#unity', label: 'See the roots of unity' },
  wa: 'Hello Modern Age Coders, I would like a free maths class about VCE Specialist Mathematics.',
  heroNote: 'Study design read at source &middot; Proof written in full &middot; After-school lessons in Victorian time',
  spec: [
    ['Study', 'VCE Specialist Mathematics'],
    ['Units', '3 and 4'],
    ['Accredited from', '1 January 2023'],
    ['Areas of study', 'Six'],
    ['Exam 1', '20 per cent, 1 hour, no technology'],
    ['Exam 2', '40 per cent, 2 hours'],
    ['2026 exams', '9 and 11 November'],
    ['We never', 'Complete any SAC']
  ],
  capsuleQ: 'In short',
  capsule: 'VCE Specialist Mathematics Units 3 and 4 cover six areas of study, including logic and proof, complex numbers, vectors, advanced calculus and differential equations, and statistical inference. The study assumes concurrent or previous completion of Mathematical Methods Units 3 and 4. Coursework counts 40 per cent, Examination 1 (1 hour, no technology) 20 per cent and Examination 2 (2 hours) 40 per cent.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses that reach Specialist depth',
    lede: 'Proof and complex numbers first, then calculus at the level the exams expect.',
    items: [
      { course: 'a-level-further-maths-course', code: 'VCSM / 01', title: 'Further Maths, A level', note: 'Complex numbers, proof by induction, vectors and differential equations, a close cousin of the Specialist content.' },
      { course: 'ap-calculus-exam-prep', code: 'VCSM / 02', title: 'Calculus foundations', note: 'Integration techniques and rates of change, the base for Specialist\'s advanced calculus.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'VCSM / 03', title: 'Competition mathematics', note: 'Writing proofs that convince, the habit the logic and proof area of study is built around.' }
    ]
  },

  sections: [
    {
      id: 'six', tint: 'tint', eyebrow: 'Inside the study design',
      h2: 'Six areas of study and what they assume',
      lede: 'Taken from the VCE Mathematics Study Design (accredited from 1 January 2023 for Units 1 to 4), which we read on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Specialist Mathematics Units 3 and 4: areas of study and examples of key knowledge', head: ['Area of study', 'Examples from the key knowledge'], rows: [
          ['Discrete mathematics', 'Logic and proof: direct proof, proof by cases, proof by contradiction, proof by contrapositive and proof by mathematical induction'],
          ['Algebra, number and structure', 'Complex numbers in polar form, factorisation over the complex field, De Moivre’s theorem, and the nth roots of unity'],
          ['Functions, relations and graphs', 'Rational functions and simple quotient functions, partial fractions, and the asymptotes and stationary points of their graphs'],
          ['Calculus', 'Advanced integration, differential equations including numerical solution by Euler’s method, and kinematics in a straight line'],
          ['Space and measurement', 'Vectors in two and three dimensions, the scalar and vector products, and vector proofs of geometric results'],
          ['Data analysis, probability and statistics', 'Linear combinations of random variables, the distribution of the sample mean, and confidence intervals for a population mean']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The assumed knowledge is explicit. The study design says Specialist Units 3 and 4 assume the key knowledge of Mathematical Methods Units 1 and 2 and Specialist Units 1 and 2, plus "concurrent study or previous completion of Mathematical Methods Units 3 and 4". In practice nearly every Specialist student is taking Methods in the same year.',
            'The vector proofs it lists are classic and worth practising early: that the diagonals of a rhombus are perpendicular, that the medians of a triangle are concurrent, and that the angle subtended by a diameter in a circle is a right angle.'
          ],
          right: [
            'Proof is not decoration in this study. The discrete mathematics area of study covers conjectures, connectives, quantifiers, examples and counter-examples, so students are expected to write an argument that a stranger could check line by line, not just reach an answer.',
            'Technology still matters. Outcome 3 asks students to apply computational thinking and use technology to develop ideas, and Euler’s method is literally an algorithm. A student who has coded a few steps of it understands its error far better than one who has only read about it.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/specialist-mathematics/vce-specialist-mathematics" rel="noopener" target="_blank">VCAA, VCE Specialist Mathematics study design page</a>; VCE Mathematics Study Design, Specialist Mathematics Units 3 and 4, read on 7 October 2026.' }
      ]
    },
    {
      id: 'papers', tint: 'deep', eyebrow: 'How the study score is built',
      h2: 'Two exams in three days',
      lede: 'Specialist\'s weights and exam conditions are the study design\'s own words; the VCAA\'s 2026 timetable, consulted on 7 October 2026, gives the dates.',
      body: [
        { kind: 'table', caption: 'Specialist study score: four contributions', head: ['Contribution', 'Percentage', 'Form it takes'], rows: [
          ['Coursework in Unit 3', '20', 'A single application task lasting four to six hours across one or two weeks'],
          ['Coursework in Unit 4', '20', 'Modelling or problem-solving work done largely in class time'],
          ['First examination', '20', 'Sixty minutes, technology-free and note-free, formulas supplied on a sheet'],
          ['Second examination', '40', 'Two hours with approved technology and one bound reference book']
        ] },
        { kind: 'two', mt: true,
          left: [
            'In 2026 Specialist Mathematics Examination 1 is on Monday 9 November in the 9:00 am to 10:15 am session, and Examination 2 on Wednesday 11 November from 11:45 am to 2:00 pm. With Methods papers on 5 and 6 November, a student taking both sits four maths examinations inside a week.',
            'Examination 1 rewards exact work: complex numbers in polar form, an induction step written cleanly, an integral that needs the right substitution. It is short, so method has to be instant.'
          ],
          right: [
            'Examination 2 adds technology and longer contexts, often linking areas of study in one question: a vector description of motion that turns into a calculus problem, or an inference question that depends on a linear combination of random variables.',
            'The revision plan that works for most students alternates: one technology-free set and one extended technology question each week, rather than leaving Examination 2 practice until late October.'
          ] },
        { kind: 'source', html: 'Specialist weights and exam rules from the VCE Mathematics Study Design; dates from the <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable" rel="noopener" target="_blank">VCAA 2026 timetable</a> (accessed 7 October 2026).' }
      ]
    },
    {
      id: 'unity', tint: 'tint', eyebrow: 'A worked lesson',
      h2: 'The nth roots of unity are the corners of a polygon',
      lede: 'The study design names the nth roots of unity and their location in the complex plane. Seeing them as the vertices of a regular polygon turns a page of algebra into a picture, and the picture predicts the algebra. The numbers below are ours, checked in Python.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The idea', p: 'The solutions of z to the power n equals 1 all have modulus 1, and their arguments are 0, 2π/n, 4π/n and so on. Plotted, they sit evenly around the unit circle: the corners of a regular n-sided polygon.' },
          { h3: 'n = 6', p: 'The sixth roots are 1, 0.5 ± 0.866i, −1 and −0.5 ± 0.866i, where 0.866 is √3 over 2. Join them and you have a regular hexagon with side length exactly 1.' },
          { h3: 'Two predictions', p: 'Symmetry says the roots must add to zero, because the polygon balances about its centre. Pairing says their product is −1 when n is even and 1 when n is odd.' }
        ] },
        { kind: 'table', caption: 'Roots of unity as polygons: sum, product and perimeter (our calculation)', head: ['n', 'Size of the sum of all roots (floating point)', 'Product of all roots', 'Perimeter of the polygon'], rows: [
          ['3', 'about 3 in 10 to the 16', '1', '5.19615'],
          ['4', 'about 3 in 10 to the 16', '−1', '5.65685'],
          ['6', 'about 4 in 10 to the 16', '−1', '6.00000'],
          ['12', 'about 6 in 10 to the 16', '−1', '6.21166'],
          ['24', 'about 2 in 10 to the 15', '−1', '6.26526'],
          ['96', 'about 3 in 10 to the 15', '−1', '6.28206']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The sums are zero, as symmetry predicted; the tiny non-zero values are rounding error in floating-point arithmetic, which is itself a useful thing for a Specialist student to recognise. The products alternate exactly as predicted, and both facts can be proved in a few lines once the polygon picture suggests them.',
            'The perimeter column is a bonus. Each side has length 2 sin(π/n), so the perimeter is 2n sin(π/n), which climbs towards 2π = 6.28319 as n grows: the polygon becomes the circle. At n = 96 the perimeter is within about 0.0011 of 2π, the same polygon Archimedes used.'
          ],
          right: [
            'The same picture solves exam-style problems quickly. To find the cube roots of 8i, write 8i in polar form as 8 with argument π/2, take the cube root of the modulus (2) and divide the argument by 3: the first root has argument π/6, and the other two are spaced 2π/3 apart, at 1.7321 + i, −1.7321 + i and −2i. A triangle on a circle of radius 2.',
            'De Moivre’s theorem, also in the key knowledge, is what makes "divide the argument" legitimate. Proving it for integral powers by induction joins the complex numbers and the logic and proof areas of study in a single exercise, which is exactly how Examination 2 likes to combine topics.'
          ] },
        { kind: 'source', html: 'Roots of unity and De Moivre key knowledge from the VCE Mathematics Study Design, Specialist Mathematics Units 3 and 4. Sums, products, perimeters and the cube roots of 8i are our own, computed in Python on 7 October 2026.' }
      ]
    },
    {
      id: 'coursework', tint: '', eyebrow: 'School-assessed Coursework',
      h2: 'We teach the mathematics, the SACs stay yours',
      lede: 'Coursework is 40 per cent of Specialist Mathematics, and the VCAA only accepts it as the student\'s own work. The points below are quoted from the study design.',
      body: [
        { kind: 'table', caption: 'What the VCAA expects of Specialist coursework', head: ['Expectation', 'Detail'], rows: [
          ['Ownership', 'The teacher has to be able to vouch that anything not acknowledged was the student’s own work'],
          ['Setting', 'Mostly done in class, inside a fixed window of time'],
          ['Unit 3', 'One application task, four to six hours long over one or two weeks'],
          ['Unit 4', 'Further modelling or problem-solving tasks set by the school']
        ] },
        { kind: 'p', text: 'We teach proof, complex numbers, vectors, calculus and inference with problems we write, like the roots of unity above, and we show students how to explore and check ideas with technology. We do not complete, mark or polish SAC work, and we never drill a student on a task they already know is coming. A student who can write a clean proof for an unfamiliar statement with us can write one for the school.' },
        { kind: 'source', html: 'Coursework rules paraphrased from the Specialist sections of the study design on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Building towards Units 3 and 4',
    h2: 'Four rungs alongside Methods',
    lede: 'Specialist sits on top of Methods, so the ladder runs beside it rather than after it.',
    table: { caption: 'From Specialist Units 1 and 2 to exam readiness', head: ['When', 'Rung', 'The sign it is secure'], rows: [
      ['Units 1 and 2', '1. Proof habits', 'Writes direct and contrapositive proofs of simple statements without prompting'],
      ['Early Unit 3', '2. Complex numbers', 'Moves between Cartesian and polar form and finds roots by spacing arguments'],
      ['Unit 3', '3. Vectors', 'Uses scalar products to prove a geometric fact and to resolve one vector along another'],
      ['Unit 4', '4. Inference', 'Builds a confidence interval for a mean and says precisely what it does and does not claim']
    ] },
    left: { h3: 'If proof feels foreign', ps: [
      'Most students have only ever been asked to calculate. Writing one short proof a day, read aloud to someone else, is the fastest way to make it normal.',
      'Induction in particular improves with a fixed layout: base case, assumption, the step, the conclusion, each on its own line.'
    ] },
    right: { h3: 'Taking both studies', ps: [
      'Our <a class="ag-inline-link" href="/vce-maths-methods-tutoring">VCE Maths Methods</a> page covers the study Specialist assumes.',
      'Specialist\'s vectors, complex numbers and differential equations are the core of first-year engineering and physics mathematics.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Specialist students',
    lede: 'Grouped by the kind of thinking they build. Each card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Proof and structure', sub: 'Discrete mathematics and algebra', courses: [
        { code: 'VCSM / PF / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Arguments that convince, built one careful step at a time.' },
        { code: 'VCSM / PF / 02', slug: 'a-level-further-maths-course', title: 'Further Maths, A level', blurb: 'Complex numbers, induction and matrices from a parallel syllabus.' },
        { code: 'VCSM / PF / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Logic and invariants, practised through problems a computer checks.' }
      ] },
      { num: 'II', h3: 'Calculus and vectors', sub: 'Space, motion and change', courses: [
        { code: 'VCSM / CV / 01', slug: 'ap-calculus-exam-prep', title: 'Calculus foundations', blurb: 'The integration and differentiation Specialist extends.' },
        { code: 'VCSM / CV / 02', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'Vectors, differential equations and beyond.' },
        { code: 'VCSM / CV / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'Extra practice on complex numbers and calculus.' }
      ] },
      { num: 'III', h3: 'Inference and computation', sub: 'Statistics and technology', courses: [
        { code: 'VCSM / ST / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Random variables, sample means and confidence intervals.' },
        { code: 'VCSM / ST / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Euler’s method, simulations and roots of unity in code.' },
        { code: 'VCSM / ST / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'For gaps from Units 1 and 2 that resurface in Units 3 and 4.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'When Specialist lessons happen',
    lede: 'Tutors join from India. In the cooler months Victoria is 4.5 hours in front of India; with daylight saving, in force between 4 October 2026 and 4 April 2027 according to the IANA time zone records, the gap is 5.5 hours, so a 6 pm Specialist lesson in Melbourne lands at 12.30 pm India time.',
    slots: [
      { time: 'Weekday after school', l: 'Weekly progress alongside Methods.' },
      { time: 'Weekend morning', l: 'Long proof and technology sessions.' },
      { time: 'School holidays', l: 'Exam blocks before the November papers.' }
    ],
    cells: [
      { h3: 'Proof in full sentences', p: 'Every argument written so a stranger could check it.' },
      { h3: 'Pictures before algebra', p: 'Complex numbers and vectors drawn first, then calculated.' },
      { h3: 'Technology to check', p: 'Code and calculators used to test ideas, never to replace them.' },
      { h3: 'Groups of five to ten', p: 'Students at one level, each presenting a solution in turn.' },
      { h3: 'One-to-one sessions', p: 'For one area of study that needs rebuilding.' },
      { h3: 'Outcomes stay yours', p: 'Nobody here predicts a study score or ATAR; what you earn is your own work.' }
    ]
  },

  projectsH2: 'Student projects worth a look',
  projectsLede: 'Built for fun and learning, not for school marks. Browse the rest in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'As families and students posted them on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Specialist lessons cost one flat monthly amount in US dollars for every family outside India; you can join without a fee and leave at the end of any month.',
    free: ['A full lesson with a tutor', 'A clear view of what to strengthen', 'No card needed'],
    group: ['Five to ten students at one level', 'One tutor all term', 'Proofs and solutions discussed', 'A certificate when you finish'],
    one: ['One tutor, one student', 'Centred on one area of study', 'Often booked for the last weeks before the exams']
  },

  faq: {
    eyebrow: 'Questions about Specialist',
    h2: 'Specialist questions from Victorian families',
    items: [
      { q: 'What is VCE Specialist Mathematics?', a: 'It is the most advanced VCE mathematics study. Units 3 and 4 cover six areas of study including logic and proof, complex numbers, vectors, advanced calculus and differential equations, and statistical inference, with an emphasis on mathematical structure, reasoning and proof.' },
      { q: 'Do I need Methods to take Specialist?', a: 'The study design says Specialist Units 3 and 4 assume concurrent study or previous completion of Mathematical Methods Units 3 and 4, as well as the Units 1 and 2 knowledge of both studies.' },
      { q: 'How are Specialist marks weighted?', a: 'Forty per cent comes from coursework (twenty in each unit), twenty from the first examination and forty from the second.' },
      { q: 'When are the 2026 Specialist exams?', a: 'Examination 1 is on Monday 9 November 2026, in the session that starts at 9:00 am and ends at 10:15 am; Examination 2 follows on Wednesday 11 November, from 11:45 am to 2:00 pm, according to the VCAA.' },
      { q: 'What are the nth roots of unity?', a: 'They are the n complex numbers z with z to the power n equal to 1. All have modulus 1 and arguments spaced 2π/n apart, so they sit at the corners of a regular n-sided polygon on the unit circle.' },
      { q: 'Which proof methods are examined?', a: 'The study design lists direct proof, proof by cases, proof by contradiction, proof by contrapositive and proof by mathematical induction.' },
      { q: 'Is Euler’s method in Specialist?', a: 'Yes. The calculus area of study includes numerical solution of differential equations by Euler’s method, as a first order approximation.' },
      { q: 'Will you help with my SAC?', a: 'No. Our problems are our own, and SAC work stays untouched by us, since the VCAA counts coursework only when it is the student\'s.' },
      { q: 'How many hours a week does Specialist need?', a: 'It varies with the student, but most need steady weekly practice on proof and technology-free work rather than occasional long sessions. We set the pace together after the free lesson.' },
      { q: 'When do lessons run for Victorian students?', a: 'Late afternoon or early evening in Victoria suits most students, and it falls inside our tutors\' working day. The weekly time is agreed after the free lesson.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Victorian maths students',
    lede: 'The study Specialist assumes, the computing studies that reward the same rigour, and the wider picture.',
    items: [
      { href: '/vce-maths-methods-tutoring', label: 'VCE Maths Methods tutoring', p: 'The study Specialist assumes, with its own two exams.' },
      { href: '/vce-algorithmics-hess-help', label: 'VCE Algorithmics (HESS) help', p: 'Proof by induction and contradiction, applied to algorithms.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring in Australia', p: 'Help for other year levels and states.' },
      { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'Australian Maths Trust competitions', p: 'Competition problems for students who enjoy proof.' },
      { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Coding and AI classes in Melbourne', p: 'Coding and AI for Victorian students who like logic.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Where to start with coding anywhere in Australia.' }
    ]
  },

  start: {
    h2: 'Start with a free Specialist lesson',
    lede: 'Tell us the unit and the area of study that is hardest right now, whether proof, complex numbers, vectors or inference. The free lesson works on it with our own problems.',
    readFirst: 'If you like to read before deciding, the <a class="ag-inline-link" href="/course-atlas">course atlas</a> holds every syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains a lesson, and the <a class="ag-inline-link" href="/vce-maths-methods-tutoring">Maths Methods page</a> covers the companion study.',
    note: 'WhatsApp replies come quickest. The +91 code is India\'s, where we teach from; there is no Australian office.',
    formNote: 'No card and no obligation. We reply once to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/vce-maths-methods-tutoring', label: 'VCE Maths Methods' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' },
        { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne and Victoria' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMT competitions' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'We teach the proofs; the SACs stay the student\'s own'
  },

  personalityCss: `
.ag-root.ag-vcsm .ag-hero-grid { gap: clamp(1rem, 3.4vw, 2.7rem); }
.ag-root.ag-vcsm .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-vcsm .ag-capsule { border-left-width: 5px; }
.ag-root.ag-vcsm .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-vcsm .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-vcsm .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-vcsm .ag-spec dt { letter-spacing: 0.09em; }
.ag-root.ag-vcsm .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'Victorian Curriculum and Assessment Authority (VCAA). VCE Mathematics Study Design, read on 7 October 2026: Units 1 to 4 accredited from 1 January 2023; Specialist Mathematics Units 3 and 4 areas of study Algebra, number and structure; Calculus; Data analysis, probability and statistics; Discrete mathematics; Functions, relations and graphs; Space and measurement; assumes concurrent study or previous completion of Mathematical Methods Units 3 and 4. Unit 3 coursework 20 per cent (application task 4 to 6 hours over 1 to 2 weeks), Unit 4 coursework 20 per cent, Examination 1 20 per cent (1 hour, technology-free), Examination 2 40 per cent (2 hours). 2026 timetable: Examination 1 Monday 9 November 9:00 to 10:15 am, Examination 2 Wednesday 11 November 11:45 am to 2:00 pm.',
    localProject: 'The nth roots of unity as regular polygon vertices: for n = 3, 4, 6, 12, 24 and 96 the floating-point sum of the roots has size below 4 in 10 to the 15, the product is (-1) to the power n+1, and the perimeter 2n sin(pi/n) is 5.19615, 5.65685, 6, 6.21166, 6.26526 and 6.28206 against 2 pi = 6.28319. Cube roots of 8i: 1.7321 + i, -1.7321 + i and -2i. Computed in Python on 7 October 2026.',
    requiredMentions: ['roots of unity', 'Specialist Mathematics Examination 1', 'Wednesday 11 November', 'proof by contrapositive', 'concurrent study or previous completion of Mathematical Methods Units 3 and 4', 'mathematical structure, reasoning and proof', 'the medians of a triangle are concurrent', 'Space and measurement', 'cube roots of 8i'],
    sources: [
      { claim: 'VCAA, VCE Specialist Mathematics study design page: accreditation from 2023 and the Mathematics study design file.', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/specialist-mathematics/vce-specialist-mathematics' },
      { claim: 'VCE Mathematics Study Design: Specialist Mathematics Units 3 and 4 areas of study, key knowledge, assumed knowledge, coursework and examinations.', url: 'https://www.vcaa.vic.edu.au/sites/default/files/2025-10/2023MathematicsSD.docx' },
      { claim: 'VCAA, 2026 VCE examination timetable: Specialist Mathematics Examination 1 on Monday 9 November, Examination 2 on Wednesday 11 November.', url: 'https://www.vcaa.vic.edu.au/administration/key-dates/vce-examination-timetable' },
      { claim: 'IANA time zone database (Australia/Melbourne and Asia/Kolkata): daylight saving from 4 October 2026 to 4 April 2027.', url: 'https://www.iana.org/time-zones' }
    ],
    rejectedClaims: [
      'The number and durations of Unit 4 coursework tasks for Specialist: not confirmed line by line, so the page says only "modelling or problem-solving tasks".',
      'Every item of the functions key knowledge: only rational and simple quotient functions, partial fractions and their graph features are named on the page.',
      'Number of questions or marks in each Specialist examination: the examination specifications were not read.',
      'Any claim about Specialist scaling or ATAR effect: not quoted, and nothing is promised.',
      'Any affiliation with the VCAA: none, stated on the page.',
      'Any offer to complete, check or edit a SAC: refused, stated on the page.'
    ]
  }
};
