'use strict';
// SACE Stage 2 Specialist Mathematics tutoring (ag- exam door, Australia cluster Phase 3, row 75).
// Facts read raw on 7 October 2026 from the SACE Board: the Specialist Mathematics overview and external
// assessment pages, the Stage 2 Specialist Mathematics Subject Outline (docx) and the Examinations timetable
// for 2026 (PDF): code 2MSC20, 20 credits, school assessment 70% (AT1 Skills and Applications Tasks 50%,
// AT2 Mathematical Investigation 20%), external 30% (AT3 Examination, 130 minutes, formula sheet, two
// unfolded A4 sheets of notes, approved electronic technology); six topics; designed to be studied together
// with Mathematical Methods; Topic 4 asks students to 'Compute the point of a given line that is closest to a
// given point'; 2026 exam Tuesday 10 November.
// Spine: scalar projection and the shortest distance from a point to a line in three dimensions, family
// checked free site-wide 7 October 2026.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'SACE SPECIALIST MATHEMATICS', label: 'SACE Specialist Mathematics tutoring', blurb: 'Stage 2 Specialist Mathematics from the subject outline: induction, complex numbers, graphs, three-dimensional vectors, integration and differential equations, with a worked closest-point lesson.' },
  slug: 'sace-specialist-mathematics-tutoring',
  code: 'sasm',
  accent: '#3C1C9C',
  accentRationale: 'SACE Specialist Mathematics: a deep ink indigo chosen by hand, at least 18 RGB from every site accent and 4.8:1 or better on #EDE7DA',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'SACE Specialist Mathematics tutoring',
  title: 'SACE Specialist Mathematics Tutoring | Stage 2 Online',
  description: 'SACE Specialist Mathematics tutoring for South Australian students: induction, complex numbers, 3D vectors, integration, differential equations and the exam.',
  ogDescription: 'SACE Stage 2 Specialist Mathematics explained from the SACE Board subject outline: six topics, the assessment types and their limits, the 2026 exam date, and a worked lesson on the point of a line closest to a given point.',
  twitterDescription: 'Stage 2 Specialist from the subject outline: six topics, a 130-minute exam, and the closest point on a line in three dimensions.',
  pageName: 'SACE Specialist Mathematics Tutoring',
  webPageDescription: 'Support for South Australian students taking SACE Stage 2 Specialist Mathematics: the six topics, how it pairs with Mathematical Methods, the assessment types and permitted materials, the 2026 examination date, and a worked three-dimensional vectors lesson on scalar projection.',
  courseDescription: 'Live online maths tutoring in proof, complex numbers, vectors, integration techniques and differential equations for SACE Stage 2 Specialist Mathematics students, without completing any assessed task.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'SACE Specialist Mathematics',
  navLinks: [
    { href: '#topics', label: 'Six topics' },
    { href: '#paper', label: 'Assessment' },
    { href: '#closest', label: 'Closest point' },
    { href: '#proof', label: 'Proof habits' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'South Australia &middot; SACE Stage 2 &middot; Live online',
  h1: 'SACE Specialist Mathematics tutoring',
  lede: 'Specialist Mathematics is where Stage 2 maths stops being mostly calculation and starts being mostly argument. Induction proofs, complex numbers on a plane, lines and planes in space: each one rewards a student who can say why a step is valid, not only what the next step is.',
  secondaryCta: { href: '#closest', label: 'See the closest-point lesson' },
  wa: 'Hello Modern Age Coders, I would like a free maths class about SACE Stage 2 Specialist Mathematics.',
  heroNote: 'Subject outline read at source &middot; Proof written in full sentences &middot; Lessons on Adelaide time',
  spec: [
    ['Subject', 'Specialist Mathematics'],
    ['Stage', '2, worth 20 credits'],
    ['Code', '2MSC20'],
    ['School assessment', '70 per cent'],
    ['Examination', '30 per cent, 130 minutes'],
    ['Studied with', 'Mathematical Methods'],
    ['2026 exam', 'Tuesday 10 November'],
    ['We never', 'Do assessed work']
  ],
  capsuleQ: 'In short',
  capsule: 'SACE Stage 2 Specialist Mathematics (code 2MSC20, 20 credits) covers mathematical induction, complex numbers, functions and sketching graphs, vectors in three dimensions, integration techniques and applications, and rates of change with differential equations. It is designed to be studied together with Mathematical Methods. Schools assess seven tenths of the result; a 130-minute external paper decides the remaining three tenths.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses that carry Specialist',
    lede: 'Proof and algebra first, then calculus deep enough for differential equations.',
    items: [
      { course: 'a-level-further-maths-course', code: 'SASM / 01', title: 'A Level Further Maths', note: 'A parallel senior course with complex numbers, matrices, vectors and proof, useful extra practice at the same depth.' },
      { course: 'ap-calculus-exam-prep', code: 'SASM / 02', title: 'Calculus in depth', note: 'Integration techniques and the calculus that differential equations are built on.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'SASM / 03', title: 'Competition mathematics', note: 'Proof, induction and problem solving for students who enjoy the hardest questions.' }
    ]
  },

  sections: [
    {
      id: 'topics', tint: 'tint', eyebrow: 'Inside the subject outline',
      h2: 'Six topics, from induction to differential equations',
      lede: 'Read from the SACE Board Stage 2 Specialist Mathematics Subject Outline on 7 October 2026. The outline describes the subject as leading to tertiary study in mathematical sciences, engineering, computer science and the physical sciences.',
      body: [
        { kind: 'table', caption: 'Stage 2 Specialist Mathematics topics, from the subject outline', head: ['Topic', 'What it develops', 'Builds on'], rows: [
          ['1. Mathematical induction', 'Proof by induction, applied in many contexts through the year', 'Stage 1 introduction to induction'],
          ['2. Complex numbers', 'Cartesian and polar forms, the complex (Argand) plane, roots of complex numbers and factorising polynomials', 'Stage 1 complex numbers'],
          ['3. Functions and sketching graphs', 'Composition of functions, one-to-one functions and sketching graphs', 'Stage 2 Methods functions'],
          ['4. Vectors in three dimensions', 'Vector and Cartesian equations of lines and planes, scalar and vector products, and systems of linear equations', 'Stage 1 vectors in the plane'],
          ['5. Integration techniques and applications', 'Further integration, including inverse trigonometric functions and integration by parts, applied to areas and volumes', 'Stage 2 Methods integral calculus'],
          ['6. Rates of change and differential equations', 'Implicit differentiation, related rates and differential equations', 'Stage 2 Methods differentiation']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Specialist leans on Methods throughout. The outline notes that exponential and logarithmic functions are studied in Methods, that integration techniques from Methods are extended in Topic 5, and that implicit differentiation follows on from the differentiation rules studied in Methods.',
            'That is why the outline describes Specialist as designed to be studied together with Mathematical Methods, and why schools sequence the two subjects with care. A student who falls behind in Methods usually feels it first in Specialist.'
          ],
          right: [
            'Induction is unusual among the topics: it is taught as a method and then revisited all year, wherever a statement depends on a whole number. Students meet it again in complex numbers and in sequences of derivatives.',
            'The vectors topic is where geometry, algebra and proof meet. The outline suggests free three-dimensional dynamic geometry software, such as GeoGebra, which is a good sign that seeing the space matters as much as manipulating the symbols.'
          ] },
        { kind: 'source', html: 'The code, credit value and 70/30 split appear on the <a class="ag-inline-link" href="https://www.sace.sa.edu.au/web/specialist-mathematics/overview" rel="noopener" target="_blank">Specialist Mathematics overview</a>; topic detail is from the Word version of the Stage 2 outline offered there (7 October 2026).' }
      ]
    },
    {
      id: 'paper', tint: 'deep', eyebrow: 'How the result is built',
      h2: 'Skills tasks, an investigation and a 130-minute paper',
      lede: 'Specialist shares its shape with Mathematical Methods. The conditions here were taken from the Specialist outline itself, and the paper date from the SACE Board timetable published for 2026.',
      body: [
        { kind: 'table', caption: 'Where a Specialist Mathematics result comes from', head: ['Component', 'Share of the result', 'Rules a student works under'], rows: [
          ['Skills and applications tasks, set and marked by the school', 'Half', 'Supervised in class, five or six of them; the teacher decides whether technology and a single one-sided A4 page of notes are allowed'],
          ['Mathematical investigation, marked by the school', 'One fifth', 'A single report that may not run past 12 written A4 pages, or a multimodal equivalent'],
          ['Examination, marked externally', 'Three tenths', 'A 130-minute paper with a formula sheet supplied; students bring approved technology and two A4 sheets of their own notes, unfolded']
        ] },
        { kind: 'two', mt: true,
          left: [
            'From 2025 the outline asks for seven or eight assessments rather than eight, the requirement for one skills task without a calculator or notes is gone, and the investigation shrank from 15 pages to 12. Students who prepared with older advice should check their school\'s current outline.',
            'The 2026 timetable puts Specialist Mathematics (2MSC20) on Tuesday 10 November, eight days after the Mathematical Methods paper. That gap is useful: Methods content is fresh, and there is time for one more round of Specialist practice.'
          ],
          right: [
            'The criteria are shared with Methods: concepts and techniques (CT1 to CT4) and reasoning and communication (RC1 to RC5). RC5, the development, testing and proof of valid conjectures, matters more in Specialist than anywhere else, because so much of the subject is proof.',
            'Performance standards run from A to E. Technology is permitted in the examination, but a calculator cannot write an induction proof or justify why two lines are skew, so written reasoning carries the paper.'
          ] },
        { kind: 'source', html: 'Conditions: the Specialist Mathematics Subject Outline (Stage 2). Paper date: the 2026 examinations timetable PDF reached through the <a class="ag-inline-link" href="https://www.sace.sa.edu.au/studying/assessment/exams/timetable" rel="noopener" target="_blank">SACE timetable page</a>, checked on 7 October 2026.' }
      ]
    },
    {
      id: 'closest', tint: 'tint', eyebrow: 'A worked lesson',
      h2: 'The point on a line closest to a given point',
      lede: 'Topic 4 asks students to compute the point of a given line that is closest to a given point. Scalar projection does it cleanly, and the vector product checks the answer a second way. The line, point and numbers below are ours.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The setup', p: 'A line passes through A(1, 0, 2) with direction d = (2, 1, 2), so |d| = 3. The point is P(3, 4, 5). The vector from A to P is (2, 4, 3), with length the square root of 29.' },
          { h3: 'Project', p: 'The scalar projection of AP onto d is AP dot d divided by |d|: (4 + 4 + 6) over 3, which is 14/3. That is how far along the line, from A, the closest point lies.' },
          { h3: 'Measure', p: 'By Pythagoras, the squared distance is 29 minus (14/3) squared, which is 65/9. The shortest distance is the square root of 65, over 3, about 2.687.' }
        ] },
        { kind: 'table', caption: 'Three routes to the same answer (our worked example)', head: ['Method', 'Working', 'Result'], rows: [
          ['Scalar projection', 'Squared distance = |AP| squared minus the squared projection = 29 minus 196/9', 'Root 65 over 3, about 2.687'],
          ['Vector product', 'AP cross d = (5, 2, minus 6), length root 65; divide by |d| = 3', 'Root 65 over 3, about 2.687'],
          ['Closest point', 'Parameter t = (AP dot d) / |d| squared = 14/9; point = A + t d', '(37/9, 14/9, 46/9), about (4.111, 1.556, 5.111)'],
          ['Check', 'P minus that point is (minus 10/9, 22/9, minus 1/9); its dot product with d is 0', 'Perpendicular, as it must be']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Students lose this question in two ways. Some find the scalar projection, 14/3, and report it as the distance, forgetting it measures along the line, not across to the point. Others use the parameter t = 14/9 as if it were a length. Drawing the right-angled triangle formed by A, P and the closest point prevents both.',
            'The perpendicular check in the last row is the habit worth building. A dot product of zero proves the segment from P meets the line at right angles, which is exactly what makes it the shortest. It takes one line and catches almost every arithmetic slip.'
          ],
          right: [
            'The vector product route uses a fact the outline states: the length of a cross product is the area of the parallelogram the two vectors determine. Dividing that area by the base length |d| gives the height of the parallelogram, which is the distance from P to the line.',
            'We also check every worked example in a few lines of Python before teaching it. Students who write that check themselves come to trust vector algebra, because they have watched both methods agree to many decimal places.'
          ] },
        { kind: 'source', html: 'Topic wording: Stage 2 Specialist Mathematics Subject Outline, Topic 4, Subtopic 4.2, read on 7 October 2026. Line, point, projections, closest point and perpendicular check are our own, verified by calculation.' }
      ]
    },
    {
      id: 'proof', tint: '', eyebrow: 'Habits that carry the subject',
      h2: 'Proof habits, and how we help without touching assessed work',
      lede: 'Specialist rewards students who write mathematics in sentences. These are the habits we drill, each tied to a topic from the outline.',
      body: [
        { kind: 'table', caption: 'Habits we practise, by topic', head: ['Topic', 'Habit', 'Why it matters'], rows: [
          ['Induction', 'State the claim for n, prove the base case, assume for k, show for k + 1, conclude', 'Missing the conclusion sentence costs marks even when the algebra is right'],
          ['Complex numbers', 'Sketch on the complex plane before calculating', 'A picture shows when an answer is impossible'],
          ['Vectors', 'Finish every closest-point or intersection question with a perpendicularity or substitution check', 'One line catches most slips'],
          ['Integration', 'Differentiate the answer to confirm it', 'The fastest check in calculus'],
          ['Differential equations', 'Substitute the solution back into the equation', 'Shows the solution is right, not merely plausible']
        ] },
        { kind: 'p', text: 'All of this is taught with problems we write. Investigation topics, drafts and supervised tasks are off limits to us: the SACE Board treats them as the student\'s own work, so our help stops at the practice problems we create.' },
        { kind: 'source', html: 'Topics from the Stage 2 Specialist Mathematics Subject Outline; habits are our teaching practice, read and written on 7 October 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Preparing for Specialist',
    h2: 'Steps from Stage 1 into Stage 2 Specialist',
    lede: 'Specialist students need Methods running smoothly underneath, so the steps interleave the two.',
    table: { caption: 'From Stage 1 into Stage 2 Specialist Mathematics', head: ['Point in the year', 'Step', 'Evidence it is in place'], rows: [
      ['Stage 1', '1. Proof language', 'Writes a two-line argument with every step justified'],
      ['Start of Stage 2', '2. Methods running', 'Differentiates and integrates the Methods functions without hesitation'],
      ['Middle of Stage 2', '3. Space', 'Pictures lines and planes in three dimensions before writing equations'],
      ['Late Stage 2', '4. Synthesis', 'Combines induction, calculus and complex numbers inside one problem']
    ] },
    left: { h3: 'If proof feels foreign', ps: [
      'Write proofs as sentences, then remove words only when every step still reads clearly. Short weekly proof practice changes this faster than long sessions.',
      'Our <a class="ag-inline-link" href="/sace-mathematical-methods-tutoring">SACE Mathematical Methods</a> page covers the subject Specialist sits on.'
    ] },
    right: { h3: 'If vectors feel abstract', ps: [
      'Use free 3D geometry software, as the outline suggests, and sketch every line before solving.',
      'Students in New South Wales will find similar content on <a class="ag-inline-link" href="/hsc-maths-extension-2-tutoring">HSC Maths Extension 2</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Specialist students',
    lede: 'Grouped by the kind of mathematics they strengthen. Each card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'Proof and structure', sub: 'Induction and complex numbers', courses: [
        { code: 'SASM / PS / 01', slug: 'a-level-further-maths-course', title: 'A Level Further Maths', blurb: 'Complex numbers, proof and matrices at senior depth.' },
        { code: 'SASM / PS / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Proof and problem solving beyond the syllabus.' },
        { code: 'SASM / PS / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics', blurb: 'Another senior course with induction and complex numbers.' }
      ] },
      { num: 'II', h3: 'Calculus', sub: 'Integration and differential equations', courses: [
        { code: 'SASM / CA / 01', slug: 'ap-calculus-exam-prep', title: 'Calculus in depth', blurb: 'Integration techniques and their uses.' },
        { code: 'SASM / CA / 02', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'First-year calculus and linear algebra.' },
        { code: 'SASM / CA / 03', slug: 'ap-precalculus-exam-prep-course', title: 'Precalculus', blurb: 'Functions and trigonometry that calculus assumes.' }
      ] },
      { num: 'III', h3: 'Algebra and tools', sub: 'Underneath every topic', courses: [
        { code: 'SASM / AT / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Fluent, error-free manipulation.' },
        { code: 'SASM / AT / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level Mathematics', blurb: 'Pure maths and mechanics with vectors.' },
        { code: 'SASM / AT / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Programs that confirm a vector or integral result.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Specialist lessons on Adelaide time',
    lede: 'Tutors join live from India. Through the warm months Adelaide sits five hours in front of India time; for the rest of the year the gap is four (clock changes on 4 October 2026 and 4 April 2027, IANA time zone database). That makes a 5.30 pm Adelaide session in December a 12.30 pm session for us.',
    slots: [
      { time: 'Weekday after school', l: 'Proof and vectors, week by week.' },
      { time: 'Weekend morning', l: 'Longer mixed-topic problem sets.' },
      { time: 'School holidays', l: 'Calculus blocks ahead of November.' }
    ],
    cells: [
      { h3: 'Sentences, not symbols', p: 'Every proof written so a reader can follow it.' },
      { h3: 'A check for every answer', p: 'Substitute, differentiate or dot to confirm.' },
      { h3: 'See the space', p: 'Three-dimensional problems sketched before they are solved.' },
      { h3: 'Peer critique', p: 'Groups of fifteen to twenty at a matching level read one another\'s proofs aloud and hunt for gaps.' },
      { h3: 'One-to-one sessions', p: 'For a single topic, often vectors or induction.' },
      { h3: 'Results stay theirs', p: 'No tutor of ours will guess at a final grade or an ATAR.' }
    ]
  },

  projectsH2: 'Side projects by our students',
  projectsLede: 'Built for fun and for portfolios, nothing a school assessed. The <a class="ag-inline-link" href="/student-labs">student labs</a> hold the rest.',
  reviewsLede: 'Google reviews from our families and students, reproduced without edits.',

  fees: {
    h2: 'Fees',
    lede: 'Every family outside India pays one monthly rate in US dollars for Specialist lessons. There is nothing to join and nothing to cancel: each month stands alone.',
    free: ['A full maths lesson with a tutor', 'A clear view of the topic to fix first', 'No card details'],
    group: ['Fifteen to twenty students at one level', 'The same tutor every week', 'Proofs read and discussed', 'A certificate at the end'],
    one: ['A tutor for one student', 'Focused on one topic', 'Popular before the November paper']
  },

  faq: {
    eyebrow: 'Questions about Specialist',
    h2: 'Specialist Mathematics questions we hear',
    items: [
      { q: 'What is SACE Specialist Mathematics?', a: 'It is a 20-credit Stage 2 subject, code 2MSC20, covering induction, complex numbers, functions and graphs, three-dimensional vectors, integration techniques and differential equations. It is designed to be studied together with Mathematical Methods.' },
      { q: 'Can I take Specialist without Methods?', a: 'Specialist reuses Methods material in nearly every topic, and its outline is written for students taking the pair. Taking Methods on its own is fine; taking Specialist on its own is not what it was built for.' },
      { q: 'When is the 2026 Specialist Mathematics exam?', a: 'Tuesday 10 November 2026, a 130-minute paper, according to the timetable the SACE Board published for this year.' },
      { q: 'What can I take into the exam?', a: 'Bring approved technology and up to two A4 pages of your own handwritten notes, kept flat; the SACE Board supplies the formula sheet.' },
      { q: 'What is a scalar projection?', a: 'The signed length of one vector measured along the direction of another: the dot product of the two vectors divided by the length of the second. It tells you how far along a line a perpendicular from a point lands.' },
      { q: 'How do I find the closest point on a line to a point?', a: 'Project the vector from a point on the line to the given point onto the line\'s direction, move that far along the line, and check that the joining segment is perpendicular to the line with a dot product of zero.' },
      { q: 'What changed from 2025?', a: 'Seven or eight assessments instead of eight, no required calculator-free skills task, and an investigation limit of 12 A4 pages instead of 15.' },
      { q: 'Can a tutor look over my investigation?', a: 'No. Proof and modelling are taught with problems we invent; the investigation itself, from topic to final page, is yours alone.' },
      { q: 'Is Specialist good preparation for computer science?', a: 'The outline names computer science among the tertiary courses it leads to. Proof, vectors and differential equations all appear in computing, from graphics to machine learning.' },
      { q: 'What hours suit South Australian students?', a: 'After school in Adelaide lines up with the middle of the day in India, so weekday afternoons work well. We settle the slot once the free lesson is done.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for South Australian students',
    lede: 'The subjects that pair with Specialist, and the wider Australian picture.',
    items: [
      { href: '/sace-mathematical-methods-tutoring', label: 'SACE Mathematical Methods tutoring', p: 'The subject Specialist is designed to sit beside.' },
      { href: '/sace-digital-technologies-help', label: 'SACE Digital Technologies help', p: 'Stage 2 computing for students who like both.' },
      { href: '/hsc-maths-extension-2-tutoring', label: 'HSC Maths Extension 2 tutoring', p: 'The closest New South Wales course.' },
      { href: '/vce-specialist-maths-tutoring', label: 'VCE Specialist Maths tutoring', p: 'The Victorian equivalent.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Australian competitions calendar', p: 'Maths competitions for strong students.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every Australian page we publish, in one place.' }
    ]
  },

  start: {
    h2: 'Start with a free Specialist lesson',
    lede: 'Tell us which topic is hardest and how far through the year you are. The free lesson works on that topic using problems we set.',
    readFirst: 'Curious first? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> lists every syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a lesson, and the <a class="ag-inline-link" href="/online-maths-tutoring-australia">Australian maths page</a> covers younger year levels.',
    note: 'WhatsApp is the quickest way to reach a person. Expect an Indian +91 number, since the school is run from India and keeps no premises in Australia.',
    formNote: 'No card needed and no obligation. One reply confirms the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/sace-mathematical-methods-tutoring', label: 'SACE Mathematical Methods' },
        { href: '/sace-digital-technologies-help', label: 'SACE Digital Technologies' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'We teach the proofs; every assessed task stays the student\'s own'
  },

  personalityCss: `
.ag-root.ag-sasm .ag-hero-grid { gap: clamp(1.1rem, 3vw, 2.5rem); }
.ag-root.ag-sasm .ag-hero h1 { letter-spacing: -0.022em; }
.ag-root.ag-sasm .ag-capsule { border-left-width: 6px; }
.ag-root.ag-sasm .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-sasm .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-sasm .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-sasm .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-sasm .ag-slots { gap: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'SACE Board of South Australia. Stage 2 Specialist Mathematics Subject Outline (docx, linked from the overview page), the overview and external assessment pages, and the Examinations timetable for 2026, read on 7 October 2026: code 2MSC20, 20 credits; AT1 50%, AT2 20%, AT3 Examination 30% (130 minutes); six topics; designed to be studied together with Mathematical Methods; examination Tuesday 10 November 2026.',
    localProject: 'Closest point on the line through A(1, 0, 2) with direction (2, 1, 2) to P(3, 4, 5): scalar projection 14/3, shortest distance root 65 over 3 (about 2.687) by projection and by the vector product (5, 2, -6), closest point (37/9, 14/9, 46/9) at t = 14/9, and a zero dot product confirming perpendicularity.',
    requiredMentions: ['2MSC20', 'Tuesday 10 November', 'closest to a given point', 'scalar projection of AP', 'square root of 65, over 3', '(37/9, 14/9, 46/9)', 'Rates of change and differential equations', 'Vectors in three dimensions', 'designed to be studied together'],
    sources: [
      { claim: 'SACE Board, Specialist Mathematics overview: code 2MSC20, 20 credits, 70% school and 30% external assessment.', url: 'https://www.sace.sa.edu.au/web/specialist-mathematics/overview' },
      { claim: 'Stage 2 Specialist Mathematics Subject Outline (docx): six topics, relationship with Methods, assessment types, permitted materials and the Topic 4 closest-point requirement.', url: 'https://www.sace.sa.edu.au/documents/652891/12131490/Stage+2+Specialist+Mathematics+Subject+Outline.docx/8a9ba502-1a07-368d-e13e-3ca12aec5230?version=1.0' },
      { claim: 'SACE Board, Examinations timetable for 2026 (PDF): Specialist Mathematics [2MSC20] 130 minutes on Tuesday 10 November.', url: 'https://www.sace.sa.edu.au/documents/652891/ddb4a5dc-0c02-4287-adbd-70944a6cb66c' },
      { claim: 'IANA time zone database (Australia/Adelaide, Asia/Kolkata): offsets of 4 and 5 hours, daylight saving from 4 October 2026 to 4 April 2027.', url: 'https://www.iana.org/time-zones' }
    ],
    rejectedClaims: [
      'The session time of the 2026 Specialist exam: the timetable columns did not extract cleanly, so only the date is given.',
      'The plane-distance formula printed in the outline: the formula did not survive text extraction, so it is not quoted.',
      'Any statement about how Specialist scales into the ATAR: not stated, and no grade or ATAR is promised.',
      'Any affiliation with the SACE Board: none, stated on the page.',
      'Any offer to choose, check or edit an investigation or skills task: refused on the page.'
    ]
  }
};
