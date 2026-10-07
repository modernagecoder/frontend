'use strict';
// HSC Mathematics Extension 2 tutoring (ag- exam door, Australia cluster Phase 3, row 55).
// Facts read raw on 7 October 2026 at the NSW Curriculum site (curriculum.nsw.edu.au, Mathematics
// Extension 2 11-12 Syllabus (2024): overview, course structure and enrolment details, HSC examinations,
// school-based assessment), the Extension 1 HSC examinations page (the second-paper rule) and UAC.
// Year 12 course only. Implemented from 2026; teaching from Term 4 2026; first HSC exam 2027. Five areas
// of study: Proof (The nature of proof), Vectors (Further work with vectors), Complex numbers
// (Introduction to complex numbers), Calculus (Further integration), Mechanics (Applications of calculus
// to mechanics). Course 15260, 60 hours, 1 unit; prerequisites Advanced and Extension 1 Year 11;
// corequisites Advanced and Extension 1 Year 12. HSC exam: 100 marks, 3 hours plus 10 minutes reading
// time, Section I 10 marks, Section II 90 marks in 37 to 42 items, at least two worth 4 or 5 marks;
// Advanced and Extension 1 assumed knowledge. Spine: multiplication by i as a quarter turn on the Argand
// diagram, with (3 + 2i)(1 + i) = 1 + 5i as a rotation of 45 degrees and a stretch by the square root
// of 2. Family checked free site-wide on 7 October 2026.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'HSC MATHS EXTENSION 2', label: 'HSC Maths Extension 2 tutoring', blurb: 'The Year 12 NSW course for students who want the hardest mathematics in the HSC: complex numbers, vectors, mechanics and proof.' },
  slug: 'hsc-maths-extension-2-tutoring',
  code: 'hext',
  accent: '#2A1E7B',
  accentRationale: 'HSC Maths Extension 2: a deep muted indigo, contrast above 4.9:1 on #EDE7DA, at least 15 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'HSC Maths Extension 2 tutoring',
  title: 'HSC Maths Extension 2 Tutoring | NSW Year 12 Online',
  description: 'HSC Maths Extension 2 tutoring online for NSW Year 12: the 2024 syllabus, complex numbers as rotations, mechanics, proof, and the two papers Ext 2 students sit.',
  ogDescription: 'Mathematics Extension 2 from the 2024 NSW syllabus: five areas of study, the prerequisites and corequisites, the 100-mark HSC paper, the Extension 1 paper sat beside it, and complex numbers taught as geometry.',
  twitterDescription: 'HSC Maths Extension 2 from the 2024 syllabus: complex numbers as turns, mechanics, proof and two papers.',
  pageName: 'HSC Maths Extension 2 Tutoring',
  webPageDescription: 'Support for NSW Year 12 students in Mathematics Extension 2: the 2024 syllabus and dates, its five areas of study, enrolment requirements, the HSC examination specification, the paper pairing with Extension 1, and an original lesson on multiplying complex numbers.',
  courseDescription: 'Live online teaching for NSW Year 12 Mathematics Extension 2: the nature of proof, further work with vectors, complex numbers, further integration and mechanics.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'HSC Maths Extension 2',
  navLinks: [
    { href: '#areas', label: 'Five areas' },
    { href: '#papers', label: 'Two papers' },
    { href: '#complex', label: 'Complex numbers' },
    { href: '#rhythm', label: 'A Year 12 plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'New South Wales &middot; Mathematics Extension 2 &middot; Live online',
  h1: 'HSC Maths Extension 2 tutoring',
  lede: 'Extension 2 is the summit of NSW school mathematics, and it is a single Year 12 course of sixty indicative hours. Students arrive having done Advanced and Extension 1 in Year 11, and they meet complex numbers, three-dimensional vectors, harder integration and mechanics in one crowded year. The students who do well are the ones who see the geometry behind the algebra, so that is where our teaching starts.',
  secondaryCta: { href: '#complex', label: 'See complex numbers as turns' },
  wa: 'Hello Modern Age Coders, I would like a free class about HSC Mathematics Extension 2.',
  heroNote: '2024 syllabus read at source &middot; Geometry before algebra &middot; Lessons after NSW school hours',
  spec: [
    ['Syllabus', 'Mathematics Extension 2 11-12 (2024)'],
    ['Taken in', 'Year 12 only'],
    ['Size', '1 unit, 60 hours'],
    ['Needs', 'Advanced and Extension 1'],
    ['HSC paper', '100 marks, 3 hours plus reading'],
    ['Also sat', 'The Extension 1 paper'],
    ['We teach', 'Proof, vectors, complex numbers, mechanics'],
    ['We never', 'Forecast a band or an ATAR']
  ],
  capsuleQ: 'In short',
  capsule: 'HSC Mathematics Extension 2 is a one-unit Year 12 NSW course, now set by the Mathematics Extension 2 11-12 Syllabus (2024). Its five areas of study are proof, vectors, complex numbers, calculus through further integration, and mechanics. Students must also take Advanced and Extension 1. The HSC paper is worth 100 marks over 3 hours plus 10 minutes reading time, and Extension 2 students sit the Extension 1 paper too.',

  picks: {
    eyebrow: 'Where Extension 2 students start',
    h2: 'Three courses for the hardest HSC mathematics',
    lede: 'Proof and problem solving, a strong calculus base, then mathematics beyond school.',
    items: [
      { course: 'olympiad-competition-mathematics-mastery', code: 'HEXT / 01', title: 'Proof under pressure', note: 'Rigorous argument, inequalities and creative problem solving, the habits the nature of proof focus area tests.' },
      { course: 'a-level-further-maths-course', code: 'HEXT / 02', title: 'Further pure mathematics', note: 'A UK course whose complex numbers and vectors work runs close to Extension 2 content, with plenty of extra practice.' },
      { course: 'college-mathematics-complete-masterclass', code: 'HEXT / 03', title: 'First-year university maths', note: 'Integration techniques and linear algebra at university pace, for students already thinking past the HSC.' }
    ]
  },

  sections: [
    {
      id: 'areas', tint: 'tint', eyebrow: 'Inside the course',
      h2: 'Five areas of study in one Year 12 course',
      lede: 'Unlike Advanced and Extension 1, Extension 2 has no Year 11 course in the 2024 syllabus. The structure below is NESA\'s, read on the NSW Curriculum site on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Mathematics Extension 2 11-12 Syllabus (2024): Year 12 structure', head: ['Area of study', 'Focus area', 'What it adds'], rows: [
          ['Proof', 'The nature of proof', 'Formal reasoning beyond induction'],
          ['Vectors', 'Further work with vectors', 'Vectors carried into three dimensions'],
          ['Complex numbers', 'Introduction to complex numbers', 'A new number system, with its geometry'],
          ['Calculus', 'Further integration', 'Techniques past those in Extension 1'],
          ['Mechanics', 'Applications of calculus to mechanics', 'Motion described with calculus']
        ] },
        { kind: 'two', mt: true,
          left: [
            'NESA lists the course as number 15260, worth 1 unit and 60 indicative hours. The enrolment rules show how tightly it is stacked: the prerequisites are Year 11 Advanced (11255) and Year 11 Extension 1 (11250), and the corequisites are Year 12 Advanced (15255) and Year 12 Extension 1 (15250). There is no shortcut into Extension 2.',
            'The "What it adds" column is our own summary, not NESA wording, and the focus area names are the ones to plan revision around. Each of the five areas is substantial on its own, which is why Extension 2 feels heavier than its one-unit size suggests.'
          ],
          right: [
            'The 2024 syllabus "is to be implemented from 2026", according to NESA, with teaching of the new course from Term 4 of 2026 and the first HSC examination on it in 2027. A student starting Year 12 in that term is in the first cohort.',
            'Students in the changeover year sometimes find that older worked examples cover topics in a different order or under different headings. The mathematics is still valuable; the topic list to trust is the one in the 2024 course structure.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-2-11-12-2024/overview" rel="noopener" target="_blank">NSW Curriculum, Mathematics Extension 2 11-12 Syllabus (2024)</a>; <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-2-11-12-2024/overview/course" rel="noopener" target="_blank">its course structure and enrolment details</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'papers', tint: 'deep', eyebrow: 'The examinations',
      h2: 'One 100-mark paper, plus the Extension 1 paper',
      lede: 'Taken from NESA\'s examination pages for the 2024 Extension 2 and Extension 1 courses, checked on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'The Extension 2 paper as NESA describes it', head: ['Part', 'Detail'], rows: [
          ['Whole paper', 'Written, 100 marks, 3 hours plus 10 minutes reading time'],
          ['Provided', 'A reference sheet; approved calculators are allowed'],
          ['Section I', '10 marks of objective-response questions'],
          ['Section II', '90 marks over 37 to 42 items, which may contain parts'],
          ['Heavier items', 'Two or more items worth 4 or 5 marks'],
          ['Assumed', 'The Advanced and Extension 1 courses']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Extension 1 examination page adds the piece families often miss: Extension 1 students must also complete either the Advanced paper or the Extension 2 paper, depending on enrolment. For an Extension 2 student that means two papers, the Extension 1 paper and the Extension 2 paper, and no Advanced paper.',
            'Two demanding papers in one exam period is a planning problem as much as a mathematics one. We build timed practice for both into the final term so that neither feels like a surprise.'
          ],
          right: [
            'The Extension 2 paper has the same shape as Advanced: 100 marks, three hours, 37 to 42 items in Section II. The difference is depth. A three-mark item can combine a vector argument with an integral, and the marks go to students who set out every step with reasons.',
            'NESA\'s 2026 key dates put the HSC written exams between 13 October and no later than 5 November 2026. First-cohort students on the new syllabus will sit in 2027 and should check the 2027 timetable when it appears.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-2-11-12-2024/assessment/hsc-examinations" rel="noopener" target="_blank">Extension 2 HSC examinations</a>; <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-1-11-12-2024/assessment/hsc-examinations" rel="noopener" target="_blank">Extension 1 HSC examinations (the second-paper rule)</a>; <a class="ag-inline-link" href="https://www.nsw.gov.au/education-and-training/nesa/key-dates/hsc" rel="noopener" target="_blank">NESA 2026 key dates</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'complex', tint: 'tint', eyebrow: 'Introduction to complex numbers',
      h2: 'Multiplying by i is a quarter turn',
      lede: 'Complex numbers frighten students who meet them only as symbols. Drawn on the Argand diagram, where a + bi is the point (a, b), they become a way to rotate and stretch the plane.',
      body: [
        { kind: 'p', text: 'A worked lesson, written by us. Start with z = 3 + 2i, the point (3, 2). Multiply by i again and again, using i squared = minus 1, and plot each result.' },
        { kind: 'table', caption: 'Repeated multiplication of z = 3 + 2i by i', head: ['Expression', 'Result', 'Point', 'Distance from origin'], rows: [
          ['z', '3 + 2i', '(3, 2)', 'square root of 13'],
          ['iz', '-2 + 3i', '(-2, 3)', 'square root of 13'],
          ['i squared times z', '-3 - 2i', '(-3, -2)', 'square root of 13'],
          ['i cubed times z', '2 - 3i', '(2, -3)', 'square root of 13'],
          ['i to the fourth times z', '3 + 2i', '(3, 2)', 'square root of 13']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The distance from the origin never changes, and after four multiplications the point is back where it started. Each multiplication by i has moved the point a quarter turn anticlockwise about the origin: (3, 2) to (-2, 3) is exactly the rotation (x, y) to (minus y, x). That single picture explains why i to the fourth is 1.',
            'Now multiply by 1 + i instead. (3 + 2i)(1 + i) = 3 + 3i + 2i + 2i squared = 1 + 5i. The length grows from the square root of 13 to the square root of 26, a stretch by the square root of 2, and the angle grows by 45 degrees, from about 33.7 degrees to about 78.7 degrees.'
          ],
          right: [
            'Those two facts, lengths multiply and angles add, are the heart of the complex numbers area of study. They turn a page of algebra into a sketch a student can check by eye, and they reappear when roots of complex numbers are drawn evenly around a circle.',
            'The same idea powers graphics and games: rotating a point on screen is multiplication by a unit complex number. Students who code can test the table above in a few lines of Python, which has complex numbers built in, and see the quarter turns for themselves.'
          ] }
      ]
    },
    {
      id: 'rhythm', tint: '', eyebrow: 'Planning the year',
      h2: 'A sensible Year 12 rhythm for Extension 2',
      lede: 'Our suggested pacing, not NESA\'s. Schools sequence the focus areas in their own order, and students should follow their school program first.',
      body: [
        { kind: 'table', caption: 'A planning outline we use with Extension 2 students', head: ['Phase', 'Focus', 'Habit to build'], rows: [
          ['Start of Year 12', 'Proof and complex numbers', 'Write every step with a reason'],
          ['Middle', 'Vectors and further integration', 'Sketch before calculating'],
          ['Later', 'Mechanics', 'Link each equation to a physical quantity'],
          ['Final weeks', 'Both papers, timed', 'Budget minutes per mark across two papers']
        ] },
        { kind: 'p', text: 'School-based assessment follows the same pattern as the other NSW mathematics courses: NESA sets two components, knowledge and understanding of course content and skills in working mathematically, at 50% each, and limits schools to one take-home task worth no more than 15%. We teach with original problems and never touch work a school will mark.' },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-2-11-12-2024/assessment/school-based-assessment" rel="noopener" target="_blank">NSW Curriculum, Mathematics Extension 2 school-based assessment</a>. Checked on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The pathway',
    h2: 'Four steps up to Extension 2',
    lede: 'Extension 2 is the top of a staircase. Each step has to hold weight.',
    table: { caption: 'From Year 11 to the Extension 2 paper', head: ['Step', 'Course', 'What must be secure'], rows: [
      ['1', 'Year 11 Advanced', 'Functions, trigonometry and a first derivative'],
      ['2', 'Year 11 Extension 1', 'Polynomials, combinatorics and the binomial theorem'],
      ['3', 'Year 12 Advanced and Extension 1', 'Calculus, induction, vectors in two dimensions'],
      ['4', 'Year 12 Extension 2', 'Proof, complex numbers, vectors in space, mechanics']
    ] },
    left: { h3: 'Signs a student is ready', ps: [
      'Comfort with induction and inverse trigonometric functions from Extension 1, and integration that rarely needs a second attempt.',
      'Enjoyment of hard problems for their own sake. Extension 2 rewards students who like puzzling, and it is a long year for those who do not.'
    ] },
    right: { h3: 'If it is the wrong fit', ps: [
      'Extension 1 on its own is a strong, respected course; our <a class="ag-inline-link" href="/hsc-maths-extension-1-tutoring">Extension 1 page</a> explains it.',
      'Course choices belong to the student, family and school. Our <a class="ag-inline-link" href="/atar-explained-for-coding-students">ATAR explainer</a> sets out how UAC treats the courses, without advising which to take.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Extension 2 students',
    lede: 'Grouped by purpose. Each opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Proof and problems', sub: 'The thinking side', courses: [
        { code: 'HEXT / P / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Hard problems, careful proof, and inequality techniques.' },
        { code: 'HEXT / P / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python for exploring complex numbers and testing conjectures.' },
        { code: 'HEXT / P / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'For any gap left in the Advanced foundations.' }
      ] },
      { num: 'II', h3: 'Content support', sub: 'Vectors, complex numbers, calculus', courses: [
        { code: 'HEXT / C / 01', slug: 'a-level-further-maths-course', title: 'Further mathematics', blurb: 'UK further pure content that overlaps Extension 2 topics.' },
        { code: 'HEXT / C / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'Higher-level calculus and vectors from an international course.' },
        { code: 'HEXT / C / 03', slug: 'ap-calculus-exam-prep', title: 'Calculus practice', blurb: 'Written for the US AP exam, useful for integration drill.' }
      ] },
      { num: 'III', h3: 'Beyond school', sub: 'University-level mathematics', courses: [
        { code: 'HEXT / U / 01', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'Calculus, linear algebra and early analysis.' },
        { code: 'HEXT / U / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Mathematics for data science', blurb: 'Linear algebra and statistics as used in machine learning.' },
        { code: 'HEXT / U / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Probability ideas that sit beside the calculus.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Working with us',
    h2: 'Lessons built around a heavy Year 12',
    lede: 'Our tutors are in India. During NSW daylight saving, from October to April, India time runs five and a half hours behind Sydney, and four and a half hours behind in winter. A 6 pm Sydney lesson in summer starts at 12.30 pm for the tutor, so evening sessions in NSW are no strain to staff.',
    slots: [
      { time: 'Two weekday evenings', l: 'The pattern most Extension 2 students settle into.' },
      { time: 'A weekend morning', l: 'For a full timed paper and its review.' },
      { time: 'School holidays', l: 'Focused blocks on one area of study.' }
    ],
    cells: [
      { h3: 'Pictures first', p: 'Complex numbers and vectors are sketched before they are calculated.' },
      { h3: 'Reasons on every line', p: 'Proof writing practised until each step carries its justification.' },
      { h3: 'Two papers rehearsed', p: 'Extension 1 and Extension 2 papers timed back to back.' },
      { h3: 'Small senior groups', p: 'Five to ten Extension 2 students, each one presenting a solution aloud.' },
      { h3: 'One-to-one option', p: 'A private tutor for a single area of study.' },
      { h3: 'Straight talk', p: 'We never forecast marks. The work is the student\'s, and so is the result.' }
    ]
  },

  projectsH2: 'Projects our students have published',
  projectsLede: 'Personal projects, not school assessment. See them all in our <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Posted on Google by our students and their parents, reproduced exactly.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly price in US dollars, the same for every family outside India. No enrolment fee, and you only ever pay for the month you are in.',
    free: ['A proper lesson with a tutor', 'An honest read on readiness', 'No card at this stage'],
    group: ['Five to ten Extension 2 students', 'One tutor for the term', 'Proofs and papers reviewed', 'A certificate at the end'],
    one: ['A dedicated tutor', 'Focused on chosen areas', 'Helpful before trial exams']
  },

  faq: {
    eyebrow: 'Questions about Extension 2',
    h2: 'What Extension 2 students ask us',
    items: [
      { q: 'What is HSC Mathematics Extension 2?', a: 'A one-unit Year 12 NSW course set by the Mathematics Extension 2 11-12 Syllabus (2024). It covers the nature of proof, further work with vectors, an introduction to complex numbers, further integration, and applications of calculus to mechanics.' },
      { q: 'Is there a Year 11 Extension 2 course?', a: 'No. Under the 2024 syllabus Extension 2 is a Year 12 course, and it needs Year 11 Advanced and Year 11 Extension 1 as prerequisites.' },
      { q: 'Which other mathematics courses must I take?', a: 'NESA lists Year 12 Mathematics Advanced and Year 12 Mathematics Extension 1 as corequisites for Extension 2.' },
      { q: 'How long is the Extension 2 exam?', a: 'The paper is worth 100 marks and runs for 3 hours plus 10 minutes reading time, with a reference sheet and approved calculators.' },
      { q: 'How many HSC mathematics papers do Extension 2 students sit?', a: 'Two: the Extension 2 paper and the Extension 1 paper. NESA states Extension 1 students also complete either the Advanced or the Extension 2 paper, depending on enrolment.' },
      { q: 'What is the Argand diagram?', a: 'A plane where the complex number a + bi is drawn as the point (a, b). On it, multiplying by i turns a point a quarter turn anticlockwise about the origin, and multiplying two complex numbers multiplies their lengths and adds their angles.' },
      { q: 'When does the new syllabus start?', a: 'NESA says it is implemented from 2026, with teaching from Term 4 of 2026 and the first HSC examination in 2027.' },
      { q: 'How does Extension 2 affect the ATAR calculation?', a: 'UAC explains that when Extension 2 is completed, Extension 1 counts as 2 units, and a completed Advanced result is not included. UAC\'s published rules are the authority; we do not advise on course choice for the ATAR.' },
      { q: 'Can you promise a top band?', a: 'No. We teach the mathematics and the written method; the outcome belongs to the student.' },
      { q: 'Will you help with school assessment tasks?', a: 'We teach the mathematics with our own problems and never write, edit or check anything that will be marked by a school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for NSW senior mathematics',
    lede: 'The two courses Extension 2 is built on, and the wider NSW picture.',
    items: [
      { href: '/hsc-maths-extension-1-tutoring', label: 'HSC Maths Extension 1', p: 'Induction, vectors and the second paper.' },
      { href: '/hsc-maths-advanced-tutoring', label: 'HSC Maths Advanced', p: 'The calculus foundation under both extension courses.' },
      { href: '/atar-explained-for-coding-students', label: 'The ATAR explained', p: 'How UAC turns HSC results into a rank.' },
      { href: '/coding-and-ai-classes-in-new-south-wales', label: 'Coding and AI in New South Wales', p: 'NESA, the stages, and every NSW page.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Maths contests for students who want more.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free Extension 2 lesson',
    lede: 'Tell us which area of study is giving the most trouble and how far the school has reached. The free lesson tackles it with our own problems.',
    readFirst: 'Rather read first? Course syllabuses are on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, our approach is on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/hsc-maths-extension-1-tutoring">Extension 1 page</a> covers the paper sat alongside.',
    note: 'WhatsApp reaches us quickest. The +91 prefix is Indian because our school is run from India; we have no office in Sydney.',
    formNote: 'No card, no lock-in. One message back to book the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' },
        { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
        { href: '/australian-maths-trust-amc-aio-cat-preparation', label: 'AMC and AIO' }
      ] },
      { h4: 'HSC mathematics', links: [
        { href: '/hsc-maths-extension-1-tutoring', label: 'Maths Extension 1' },
        { href: '/hsc-maths-advanced-tutoring', label: 'Maths Advanced' },
        { href: '/atar-explained-for-coding-students', label: 'The ATAR explained' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Lengths multiply, angles add'
  },

  personalityCss: `
.ag-root.ag-hext .ag-hero-grid { gap: clamp(1.2rem, 3.2vw, 2.7rem); }
.ag-root.ag-hext .ag-hero h1 { letter-spacing: -0.022em; }
.ag-root.ag-hext .ag-capsule { border-left-width: 4px; }
.ag-root.ag-hext .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-hext .ag-table caption { text-align: left; letter-spacing: 0.01em; }
.ag-root.ag-hext .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-hext .ag-spec dt { letter-spacing: 0.14em; }
.ag-root.ag-hext .ag-slots { gap: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'NSW Education Standards Authority (NESA). Mathematics Extension 2 11-12 Syllabus (2024), read at curriculum.nsw.edu.au on 7 October 2026: Year 12 course only, implemented from 2026, teaching from Term 4 2026, first HSC exam 2027; five areas of study; course 15260, 60 hours, 1 unit, with Advanced and Extension 1 prerequisites and corequisites; HSC exam 100 marks, 3 hours plus 10 minutes reading time, Section I 10 marks, Section II 90 marks in 37 to 42 items. Extension 1 HSC examinations page: Extension 1 students also sit the Advanced or Extension 2 paper.',
    localProject: 'Complex multiplication as rotation on the Argand diagram: z = 3 + 2i multiplied by i four times (3 + 2i, -2 + 3i, -3 - 2i, 2 - 3i, back to 3 + 2i), all at distance square root of 13; (3 + 2i)(1 + i) = 1 + 5i as a 45 degree turn and a stretch by square root of 2 (about 33.7 to 78.7 degrees). Written by us.',
    requiredMentions: ['Mathematics Extension 2 11-12 Syllabus (2024)', 'The nature of proof', 'Further work with vectors', 'Introduction to complex numbers', 'Applications of calculus to mechanics', '15260', 'Argand diagram', '-2 + 3i', 'quarter turn'],
    sources: [
      { claim: 'NSW Curriculum, Mathematics Extension 2 11-12 Syllabus (2024): implementation dates and five areas of study.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-2-11-12-2024/overview' },
      { claim: 'NSW Curriculum, Mathematics Extension 2 course structure and enrolment: course 15260, 60 hours, 1 unit, prerequisites and corequisites.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-2-11-12-2024/overview/course' },
      { claim: 'NSW Curriculum, Mathematics Extension 2 HSC examination specifications.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-2-11-12-2024/assessment/hsc-examinations' },
      { claim: 'NSW Curriculum, Mathematics Extension 1 HSC examinations: students also complete the Advanced or Extension 2 paper.', url: 'https://curriculum.nsw.edu.au/learning-areas/mathematics/mathematics-extension-1-11-12-2024/assessment/hsc-examinations' },
      { claim: 'UAC, how your ATAR is calculated: Extension 1 counted as 2 units with Extension 2; Advanced not included after Extension 1 and Extension 2.', url: 'https://www.uac.edu.au/future-applicants/atar/how-your-atar-is-calculated' }
    ],
    rejectedClaims: [
      'The 2026 date of the Extension 2 exam: not tied to a day from the timetable PDF, so only the exam period is given.',
      'The detailed content of each Extension 2 focus area: not read in full; only names are listed and the "What it adds" column is labelled as our summary.',
      'Scaling figures for Extension 2: not quoted.',
      'Any claim about how many students take Extension 2: not quoted.',
      'Any band or ATAR forecast: none.'
    ]
  }
};
