// SHIP: market (en exam door, IB) | an IB maths tutor for Diploma students in Peru: the southern-hemisphere November squeeze | the derivative as a limit: forward and central difference quotients, error order, rounding at tiny h
'use strict';
// IB maths tutor, Peru (ag- English exam door, Peru cluster row PE032, P3, hubGroup exams).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Fees render in USD from the template only (priceSubject 'maths'); no typed figure, no soles.
// Search: "ib maths tutor online", "ib math tutor near me", "bachillerato internacional perú" (KEYWORDS.md sections 3 to 5).
// Spanish twin (live): tutor-ib-matematicas-en-ingles-peru (spine: Diploma numbers table, AA vs AI table, U de Lima and PUCP
// route table, two-year plan; lesson: least squares and Pearson r, geometric series). This page takes another spine: the
// Peruvian school year runs March to December, so the November IB session lands on top of university admission dates and
// the last school block (the table), how COAR brings public-school students to the Diploma, what a tutor does across the
// two years, and an original calculus lesson. ibo.org returned 403 to the research run and is never retried: every
// description of IB Maths here is our course's, labelled as ours, and points to the school's IB coordinator.
// No IB endorsement is claimed or implied.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/facts-school/src/; read 8 November 2026; quotes
// grepped by scratchpad pe/e5/verify.py):
//  - MINEDU, 17 April 2026 (n-coar-ib-1100): "En el año 2025, en todo el país, 2502 estudiantes obtuvieron el Diploma del
//    Bachillerato Internacional"; "convocatoria de noviembre de 2025"; "Del total de 2296 estudiantes de los COAR que
//    participaron en la evaluación, 1740 se presentaron a la categoría Diploma y 1179 obtuvieron la certificación";
//    "556 estudiantes postularon a la categoría Curso, y 390 alcanzaron esta certificación"; "durante los años 2024 y 2025";
//    "10 COAR que lograron que más del 70 % de estudiantes obtuvieran la certificación en la categoría Diploma".
//  - MINEDU, 11 January 2026 (n-coar-admision): "2650 vacantes para estudiantes de instituciones educativas públicas que hayan
//    culminado el segundo grado de secundaria"; "se iniciará el 12 de enero y se desarrollará hasta el 30 de enero";
//    "residencia estudiantil"; "más de 2000 universidades nacionales e internacionales".
//  - Universidad de Lima, Guía del postulante 2027-1(A) (ulima-guia-20271a): "Domingo 15 de noviembre de 2026, 7.00 horas";
//    "INICIO DE CLASES Lunes 29 de marzo de 2027"; "postule en un plazo no mayor de tres años".
//  - PUCP, Guía del postulante (pucp-guia): "LA PRIMERA OPCIÓN® INSCRIPCIONES ABIERTAS EVALUACIÓN ACADÉMICA: 29 de noviembre"
//    (2027-1 entry, so 2026); "DIPLOMA DE BACHILLERATO 2.° Convocatoria INSCRIPCIONES ABIERTAS ENTREVISTAS: Hasta el 28 de
//    enero de 2027"; "EVALUACIÓN DEL TALENTO PRÓXIMAMENTE EVALUACIÓN ACADÉMICA: 21 de febrero" (2027); "hasta un máximo de
//    23 créditos"; "podrá convalidar hasta 36 créditos"; Ley 30220 as quoted: "concurso público ... examen de conocimientos".
//  - RM 501-2025-MINEDU (OCR; table checked by eye on rm501-2025-page11.png): "Del 19 octubre a 18 de diciembre".
//  - MINEDU Edades normativas: 4° secundaria 15, 5° secundaria 16 at 31 March.
//  - CNEB: secundaria "Matemática 4 4 4 4 4" (JER) and "Matemática 6 6 6 6 6" (JEC).
//  - Our course page, content/courses/data/ib-mathematics-aa-ai.json: "AA runs a strictly non-calculator paper while AI assumes the
//    GDC everywhere"; "the Internal Assessment is worth a fifth of the grade"; "we never read, edit or ghost-write the real one".
//  - Time: Peru UTC-5 all year (tzdata America/Lima; last Rule Peru 1994); India UTC+5:30; India 10 h 30 min ahead.
// Our calculations: 1179 / 1740 = 67.8%; 390 / 556 = 70.1%; 1740 + 556 = 2296 (matches MINEDU's total).
// Code (scratchpad pe/e5/ibm_v1.py, ibm_v2.py, python3 -I): v1 prints "h=0.1: forward 12.610000, central 12.010000",
// "h=0.01: forward 12.060100, central 12.000100", "h=0.001: forward 12.006001, central 12.000001"; v2 prints
// "h=1e-4: forward 12.0006000100, error 6.0e-04", "h=1e-8: forward 11.9999999271, error 7.3e-08",
// "h=1e-12: forward 12.0010668070, error 1.1e-03", "h=1e-15: forward 10.6581410364, error 1.3e+00".
// Lesson family: the derivative as a limit of difference quotients; algebra predicts the error (12 + 6h + h^2 and 12 + h^2),
// central beats forward, and shrinking h too far lets rounding win.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'def f(x):',
  '    return x ** 3',
  '',
  'x = 2  # exact gradient of x cubed at x = 2 is 3 * 2**2 = 12',
  'for h in (0.1, 0.01, 0.001):',
  '    forward = (f(x + h) - f(x)) / h',
  '    central = (f(x + h) - f(x - h)) / (2 * h)',
  '    print(f"h={h}: forward {forward:.6f}, central {central:.6f}")'
].join('\n');

const V2 = [
  'def f(x):',
  '    return x ** 3',
  '',
  'x = 2',
  'for k in (4, 8, 12, 15):',
  '    h = 10 ** -k',
  '    forward = (f(x + h) - f(x)) / h',
  '    print(f"h=1e-{k}: forward {forward:.10f}, error {abs(forward - 12):.1e}")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'IB maths tutor' },
  slug: 'ib-maths-tutor-peru',
  code: 'ibm',
  accent: '#834600',
  accentRationale: 'IB maths tutor, Peru: a burnt copper #834600, after the copper that Peru mines and exports, a material whose value, like a Diploma grade, comes from careful refining; it clears 4.5:1 on the paper #FBF8F2 and both darker papers (checked by the build).',
  pageType: 'market',
  market: PE_EN,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'IB maths tutor, Peru',
  title: 'IB Maths Tutor in Peru: Live Online, AA and AI, SL and HL',
  description: 'An IB maths tutor for Diploma students in Peru: live online classes in English for AA and AI at SL and HL, planned around November exams and university dates.',
  ogDescription: 'Live IB Maths tutoring in English for Diploma students in Peru: how the November session collides with university admission dates, how COAR students reach the IB, what a tutor does over two years, and a calculus lesson in Python.',
  twitterDescription: 'Live online IB Maths AA and AI tutoring in English for students in Peru, one to one or in a group, at any hour.',
  pageName: 'IB Maths Tutor in Peru',
  webPageDescription: 'A guide for IB Diploma students and families in Peru who want an IB Maths tutor teaching in English, built from MINEDU press releases on COAR and IB results, the Universidad de Lima and PUCP admission guides, the 2026 school-year norm, MINEDU normative ages and the tz database, with an original lesson on difference quotients.',
  courseDescription: 'Live online IB Mathematics tutoring in English for Diploma students in Peru: Analysis and Approaches or Applications and Interpretation, at SL or HL, across both Diploma years, one to one or in a group of fifteen to twenty, taught alongside the student\'s IB school.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'IB maths tutor',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#november', label: 'The November squeeze' },
    { href: '#coar', label: 'COAR and the IB' },
    { href: '#lesson', label: 'Calculus lesson' },
    { href: '#tutor', label: 'What a tutor does' },
    { href: '#clock', label: 'Peru times' }
  ],
  eyebrow: 'Peru &middot; IB Diploma maths, taught in English &middot; AA and AI, SL and HL',
  h1: 'An IB maths tutor for Diploma students in Peru',
  lede: 'IB maths in Peru has a timing problem that students in Europe never face. The Peruvian school year runs from March to December, so at schools that sit the November exam session, as the COAR network did in 2025, the final papers arrive in the last weeks of 5th of secundaria, side by side with university admission tests in Lima. This page lays out that calendar from the universities\' and MINEDU\'s own documents, explains how public-school students reach the Diploma through COAR, shows what an IB maths tutor does across two years, and works through one piece of calculus.',
  secondaryCta: { href: '#lesson', label: 'See the calculus lesson' },
  wa: 'Hello Modern Age Coders, I am an IB Diploma student in Peru and would like an IB Maths tutor in English. Could I book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; every class live, online and in English',
  spec: [
    ['Courses', 'IB Maths AA and AI'],
    ['Levels', 'SL and HL'],
    ['Taught', 'Live, online, in English'],
    ['Format', 'One to one, or a group of fifteen to twenty'],
    ['Peru times', 'Any hour, chosen by you'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'The answer first',
  capsule: 'Modern Age Coders provides an IB maths tutor for Diploma students in Peru: live online classes taught in English for IB Mathematics Analysis and Approaches or Applications and Interpretation, at SL or HL, one to one or in a group of fifteen to twenty. Tutoring follows the student\'s own school through both Diploma years, works on paper technique and the exploration without ever writing it, and is planned around Peru\'s March to December school year and the November exams. Classes run at whatever hour suits the student in Peru time.',

  picks: {
    eyebrow: 'Courses for Diploma students',
    h2: 'Three courses for IB students in Peru',
    lede: 'The Diploma course itself, a foundation course for students who arrive with gaps, and a course for those applying to universities that ask for the SAT.',
    items: [
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'IBM / 01', title: 'IB Maths AA and AI', note: 'Two Diploma years matched to the student\'s exact course and level, with paper practice and honest coaching on the exploration. Taught next to the IB school, which teaches, sets and marks the assessed work.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'IBM / 02', title: 'High School Maths', note: 'Algebra, functions and an introduction to calculus over about a year. Useful in 3rd of secundaria, or for a Diploma student whose algebra is slowing every topic down.' },
      { course: 'sat-math-prep-course', code: 'IBM / 03', title: 'SAT Math', note: 'Six months of preparation for students whose university applications abroad ask for an SAT score alongside the predicted IB grades. Timed practice in English from the first week.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who it is for',
      h2: 'Who needs an IB maths tutor in Peru?',
      lede: 'More students than most people expect. MINEDU reports that 2,502 students in Peru earned the IB Diploma in 2025, and that students of the public COAR network made up 47% of them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'COAR students', p: 'Pupils who won a place at one of the 25 public Colegios de Alto Rendimiento can take the Diploma Programme there. Most come from Spanish-medium schools. For a COAR student who wants IB maths in English, perhaps with a university abroad in mind, a tutor who teaches only in English adds the language of international mathematics to the subject.' },
          { h3: 'Private IB school students', p: 'Students at private IB schools in Lima and other cities often study in English from an early age. For them the question is depth: an HL student aiming at engineering, or an AI student who finds the statistics slippery, needs time with one teacher that a full class cannot give.' },
          { h3: 'Families arriving or leaving', p: 'Families who move to Peru mid-Diploma, or who plan to send a student to university abroad, need the maths to stay continuous whatever the school calendar does. Online tutoring travels with the student.' }
        ] },
        { kind: 'p', mt: true, html: 'Everything on this page assumes the school leads. The IB school teaches the course, sets the internal deadlines and submits the work; our tutors work alongside, in English, on the mathematics and the habits of writing it. We are not connected with the IB, COAR or MINEDU, and nothing here is advice from them.' }
      ]
    },
    {
      id: 'november',
      tint: 'tint',
      eyebrow: 'The November squeeze',
      h2: 'When does an IB student in Peru sit the exams, and what else falls in the same weeks?',
      lede: 'MINEDU\'s report on COAR results refers to the November 2025 session, the one that suits a school year ending in December. For a student in 5th of secundaria in Lima, that session sits beside several admission dates published by Lima universities.',
      body: [
        { kind: 'table', numCols: [], caption: 'Dates a 5th-of-secundaria IB student in Lima may meet, late 2026 to March 2027', head: ['Date', 'What happens', 'Published by'], rows: [
          ['November 2026', 'IB Diploma exams, for schools on the November session (paper dates come from the school\'s IB coordinator)', 'The student\'s IB school'],
          ['Sunday 15 November 2026, 07:00', 'Universidad de Lima school exam for 2027-1(A) entry, for pupils in 5th of secundaria', 'Universidad de Lima admission guide'],
          ['29 November 2026', 'PUCP academic evaluation for La Primera Opción, for pupils in 5th of secundaria', 'PUCP admission guide (2027-1 entry)'],
          ['18 December 2026', 'Last day of the fourth teaching block of the 2026 school year', 'RM 501-2025-MINEDU'],
          ['Until 28 January 2027', 'PUCP Diploma de Bachillerato route, second call: interviews', 'PUCP admission guide'],
          ['21 February 2027', 'PUCP Evaluación del Talento academic evaluation, for school leavers', 'PUCP admission guide (2027-1 entry)'],
          ['Monday 29 March 2027', 'Classes begin at the Universidad de Lima for the 2027-1 term', 'Universidad de Lima admission guide']
        ] },
        { kind: 'source', html: 'Sources: Universidad de Lima, Guía del postulante, Concurso de Admisión 2027-1(A); PUCP, Guía del postulante for 2027-1 entry (the PUCP guide gives 29 November and 21 February without a year; the 2027-1 cycle places them in 2026 and 2027); RM 501-2025-MINEDU, 2026 school-year norm; MINEDU press release of 17 April 2026 for the November 2025 session. All read on 8 November 2026. We could not read the IB\'s own pages (ibo.org refused our request), so no IB exam date is printed here.' },
        { kind: 'two', mt: true,
          leftH3: 'What the table means',
          left: [
            'A Lima student taking the Diploma and applying through a school-leaver route may face a university exam, the IB papers and the end of the school year inside about five weeks. That is the November squeeze, and it is the reason we plan IB maths backwards from it.',
            'Not every student meets every date: routes and universities differ, and some students wait for their Diploma results and apply through a Diploma route instead. Each university decides its own admissions; we only point out where the dates sit.'
          ],
          rightH3: 'How a tutor plans around it',
          right: [
            'The heavy lifting moves earlier. We aim to finish new syllabus content by the July break, spend August to October on full papers and corrections, and keep November for short, calm sessions that rehearse the student\'s weakest question types.',
            'Students who also sit a university exam in Spanish get a different kind of help from us: not that exam\'s content, which we do not teach, but the same habits of reading a question twice, estimating first and leaving a guess blank where wrong answers cost marks.'
          ] }
      ]
    },
    {
      id: 'coar',
      eyebrow: 'COAR and the IB',
      h2: 'How do public-school students in Peru reach the IB Diploma?',
      lede: 'Mainly through COAR, MINEDU\'s network of 25 public high-achievement schools. Students win a place after 2nd of secundaria and can take the Diploma Programme in their final two years.',
      body: [
        { kind: 'two',
          leftH3: 'Getting in',
          left: [
            'MINEDU\'s single admission process for 2026 offered 2,650 places to students from public schools who had finished 2nd of secundaria. Registration was online and free, from 12 to 30 January 2026.',
            'MINEDU describes COAR as a specialised service with personal tutoring, a student residence, meals and materials. It also says that the Diploma Programme widens students\' access to more than 2,000 universities in Peru and abroad; that figure is MINEDU\'s statement, not ours.'
          ],
          rightH3: 'How the 2025 class did',
          right: [
            'The COAR students assessed in the November 2025 session had followed the Diploma Programme through 2024 and 2025. Of 2,296 who took part, 1,740 entered for the full Diploma and 1,179 earned it; another 556 entered for individual course certificates and 390 earned them.',
            'By our own division, that is about 68% for the Diploma and 70% for course certificates. MINEDU adds that ten COARs, in Arequipa, Cajamarca, Ica, La Libertad, Lambayeque, Lima, Lima Provincias, Piura, Puno and San Martín, saw more than 70% of their Diploma candidates succeed.'
          ] },
        { kind: 'p', mt: true, html: 'Ages help with planning. MINEDU\'s normative ages put a student in 4th of secundaria at 15 and in 5th at 16, measured on 31 March, so a typical Peruvian Diploma student sits the final exams at 16 or 17. Inside a school week, the national curriculum gives maths four periods of 45 minutes on the regular day and six on the full day; IB schools organise their own Diploma timetables on top of that.' },
        { kind: 'p', html: 'Our Spanish-language page for the same tutoring, <a class="ag-inline-link" href="/tutor-ib-matematicas-en-ingles-peru">tutor de IB Matemáticas en inglés</a>, sets out the Diploma figures and the university routes for Spanish-speaking parents. For the computer science side of the Diploma, see <a class="ag-inline-link" href="/bachillerato-internacional-ciencias-de-la-computacion-tutor">tutor de IB Computer Science</a>. Both describe classes that are live and in English.' }
      ]
    },
    {
      id: 'courses',
      tint: 'tint',
      eyebrow: 'AA or AI',
      h2: 'Which IB maths course should a student in Peru take, AA or AI?',
      lede: 'That choice belongs to the student, the school and, often, the university course the student hopes to enter. What we can give is our own description of how the two feel to study, as our course teaches them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Analysis and Approaches', p: 'In our course, AA is the algebra-and-calculus route: proof, functions, sequences and calculus done by hand. As our course page describes it, AA includes a paper sat without a calculator, so fluent manipulation is a skill we train on purpose. It tends to suit students heading for engineering, physics, maths or economics.' },
          { h3: 'Applications and Interpretation', p: 'In our course, AI leans on modelling and statistics, with the graphic display calculator used throughout. The hard part is not the algebra; it is deciding which model fits and saying in clear English what a number means. It tends to suit students heading for social sciences, biology, business or design.' },
          { h3: 'SL or HL', p: 'Higher Level adds depth and an extra paper. Our honest advice is sometimes "stay at SL", when a student\'s other subjects need the time. The university\'s own entry requirements, not our view, should settle the question; check them before choosing.' }
        ] },
        { kind: 'p', mt: true, html: 'A note on sources. Every description above is ours, based on our course. We could not read the IB\'s own subject guides for this page because ibo.org refused our request, and we did not try to get round that. For the exact syllabus, the weight of each paper and the exploration rules, the school\'s IB coordinator is the right person to ask.' }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'A real lesson',
      h2: 'What does IB maths tutoring look like? The derivative as a limit, in Python',
      lede: 'This is a lesson we use with AA students before they meet differentiation from first principles, and with AI students who want to know what their calculator is doing. It shows a limit being approached, predicts the error with algebra, and ends with a surprise about computers.',
      body: [
        { kind: 'two',
          leftH3: 'The set-up',
          left: [
            'Take f(x) = x³ at x = 2. The derivative is 3x², so the exact gradient there is 12. A difference quotient estimates it from two nearby points: the forward quotient uses x and x + h; the central quotient uses x - h and x + h.',
            'Version 1 computes both for h = 0.1, 0.01 and 0.001. Before running it, we ask the student to expand (2 + h)³ by hand and predict the forward quotient exactly.'
          ],
          rightH3: 'The algebra that predicts it',
          right: [
            'Expanding gives a forward quotient of 12 + 6h + h², so its error shrinks in step with h. The central quotient simplifies to 12 + h², so its error shrinks with h squared: ten times smaller h, a hundred times smaller error.',
            'When the output matches the algebra to every printed digit, the student has seen the definition of the derivative behave exactly as the theory says. That is a far stronger memory than a formula in a textbook.'
          ] },
        { kind: 'code', label: 'Version 1: forward and central quotients approach 12', lang: 'Python', code: V1, note: 'It prints <code>h=0.1: forward 12.610000, central 12.010000</code>, then <code>h=0.01: forward 12.060100, central 12.000100</code> and <code>h=0.001: forward 12.006001, central 12.000001</code>, exactly 12 + 6h + h² and 12 + h².' },
        { kind: 'p', mt: true, html: 'Now the question every good student asks: if smaller h is better, why not make h tiny? Version 2 tries h from 10<sup>-4</sup> down to 10<sup>-15</sup> with the forward quotient.' },
        { kind: 'code', label: 'Version 2: shrinking h until the computer pushes back', lang: 'Python', code: V2, note: 'It prints <code>h=1e-4: forward 12.0006000100, error 6.0e-04</code>, <code>h=1e-8: forward 11.9999999271, error 7.3e-08</code>, <code>h=1e-12: forward 12.0010668070, error 1.1e-03</code> and <code>h=1e-15: forward 10.6581410364, error 1.3e+00</code>.' },
        { kind: 'p', mt: true, html: 'The error falls until h is about 10<sup>-8</sup>, then rises again, and at 10<sup>-15</sup> the estimate is off by more than one whole unit. The computer stores numbers to about sixteen significant digits, so subtracting two almost equal values of f throws most of those digits away. <strong>A limit is a mathematical idea, not a button you can press forever.</strong>' },
        { kind: 'p', html: 'For an AA student this is first principles made visible, with the algebraic error terms checked by experiment. For an AI student it explains why a calculator\'s numerical derivative is an approximation and how to judge it. For both, it is the kind of question, "where does this method stop working?", that turns an ordinary exploration into a thoughtful one, provided the student chooses and writes it themselves.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Before the Diploma.</strong> Compute (f(2 + h) - f(2))/h by hand for f(x) = x² and h = 0.1. What number is it heading towards?',
          '<strong>SL.</strong> Expand (2 + h)³ and show that the forward quotient equals 12 + 6h + h². Explain in English why the error is roughly proportional to h.',
          '<strong>HL.</strong> Show that the central quotient for x³ at any x is 3x² + h². Then predict which h gives the smallest error on a computer, and test it.',
          '<strong>AI students.</strong> Repeat Version 1 with f(x) = eˣ at x = 0, where the exact answer is 1, and report the errors in a table with one honest sentence of interpretation.'
        ] }
      ]
    },
    {
      id: 'tutor',
      tint: 'tint',
      eyebrow: 'What a tutor does',
      h2: 'What does an IB maths tutor do across the two Diploma years?',
      lede: 'Less lecturing than parents imagine and more careful practice. A tutor\'s value is in the gaps a school class has no time for, and in the written English that the papers reward.',
      body: [
        { kind: 'ol', items: [
          '<strong>Repair the base early.</strong> Algebra, functions and trigonometry from the MYP or from secundaria are checked in the first weeks. A weak base costs marks in every later topic.',
          '<strong>Follow the school\'s order.</strong> We teach topics when the school teaches them, so tutoring deepens class work instead of competing with it.',
          '<strong>Train each paper differently.</strong> As our course teaches it, AA work includes non-calculator fluency and AI work includes efficient calculator routines. Both include writing working that an examiner can follow.',
          '<strong>Teach the command words.</strong> "Show that", "hence", "justify" and "interpret" each ask for something specific. We practise answering exactly what was asked, in full English sentences where needed.',
          '<strong>Support the exploration honestly.</strong> We teach the mathematics a student\'s idea needs, the assessment criteria and how to critique a draft of their own. We never write, edit or ghost-write the real exploration; the school\'s rules decide what help is allowed.',
          '<strong>Rehearse under time.</strong> From August of the final year, full timed papers, then careful correction of every lost mark, sorted by cause: knowledge, method, reading or rushing.',
          '<strong>Keep November calm.</strong> In the final weeks, short sessions on the student\'s three weakest question types, and nothing new.'
        ] },
        { kind: 'p', mt: true, html: 'One tutor stays with the student across both years. That matters in IB maths, where the same student may be confident in calculus and lost in probability, and a teacher who knows their pattern of mistakes saves months.' }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Peru times',
      h2: 'What time would IB maths tutoring be in Peru?',
      lede: 'Whenever the student\'s week allows. Peru keeps UTC minus 5 all year and India UTC plus 5:30, a fixed gap of 10 hours 30 minutes with no clock changes on either side. The rows below are conversions only.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru hours an IB student might choose, with the time in India', head: ['Peru time', 'India time', 'A typical reason'], rows: [
          ['05:30', '16:00', 'Before a long Diploma school day'],
          ['06:45', '17:15', 'A short pre-school review of yesterday\'s topic'],
          ['13:30', '00:00, next day', 'A free afternoon in the July break'],
          ['16:00', '02:30, next day', 'Straight after school'],
          ['19:30', '06:00, next day', 'Evening study, after other subjects'],
          ['23:00', '09:30, next day', 'Late practice in the weeks of mock exams']
        ] },
        { kind: 'source', html: 'Clock source: the IANA tz database (America/Lima at UTC minus 5 with no daylight saving since 1994; Asia/Kolkata at UTC plus 5:30). The last column is our own illustration.' },
        { kind: 'p', mt: true, html: 'The hour is agreed on the student\'s clock. Because neither country changes time, an hour fixed in March holds through November\'s exam weeks. Extra sessions before mocks or exams can be added at short notice.' }
      ]
    },
    {
      id: 'think',
      tint: 'tint',
      eyebrow: 'Integrity',
      h2: 'Will an IB maths tutor do the work for my child?',
      lede: 'No, and a tutor who would is putting the Diploma at risk. We teach students to think through problems and to own every line they submit.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The student writes', p: 'In every session the student holds the pen on the shared board. Explanations come after an attempt, not instead of one.' },
          { h3: 'AI with care', p: 'Most Diploma students are under 18. Claude\'s consumer terms require users to be at least 18, and OpenAI requires under-18s to have a parent\'s permission for ChatGPT. Students who do use AI with permission should use it to test their reasoning, never to produce assessed work.' },
          { h3: 'One standard, every city', p: 'A COAR student in Puno and a private-school student in Miraflores get the same tutors and the same expectations. The internet removes the distance, not the standard.' }
        ] },
        { kind: 'p', mt: true, html: 'For more on Lima\'s bilingual and IB families, <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium classes in Lima</a> covers what Peruvian school gives in English and computing, and <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">our Peru page</a> lists every class we teach for learners in Peru.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Milestones in IB maths tutoring',
    lede: 'These milestones are ours. They tell a student and family where the work stands at each point of the two years, in terms more useful than a single predicted grade.',
    table: { numCols: [], caption: 'IB maths milestones (ours)', head: ['Milestone', 'When', 'The student can'], rows: [
      ['1. Secure base', 'First weeks of year one', 'Handle algebra, functions and trigonometry without slips'],
      ['2. Reads questions', 'Year one', 'Say what each command word asks for before starting'],
      ['3. Writes working', 'Year one', 'Produce working an examiner could mark line by line'],
      ['4. Judges methods', 'Year two', 'Say where a method or model stops working, as in the lesson'],
      ['5. Owns the exploration', 'Year two, by the school\'s deadline', 'Explain every step of their own exploration aloud'],
      ['6. Performs on time', 'August to November of year two', 'Finish a full paper in time and correct their own errors']
    ] },
    left: { h3: 'For parents', ps: [
      'Milestone 4 is the turning point. A student who asks "when does this break?" is thinking like a mathematician.',
      'Ask your child which question type lost the most marks this month. A precise answer shows the tutoring is working.'
    ] },
    right: { h3: 'For students', ps: [
      'Predict before you calculate. A prediction you can check is worth more than a result you cannot.',
      'When a method fails, write down why. That sentence is often the best line in an exploration.'
    ] }
  },

  catalogue: {
    eyebrow: 'Before, during and after',
    h2: 'Nine more courses for IB students',
    lede: 'Live and in English, with one teacher who stays with the student.',
    bands: [
      { num: 'I', h3: 'Before the Diploma', sub: '3rd of secundaria or MYP', courses: [
        { code: 'IBM / PRE / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Cambridge Core, Extended and Additional Mathematics.' },
        { code: 'IBM / PRE / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The algebra every Diploma topic leans on, rebuilt.' },
        { code: 'IBM / PRE / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'Ratio, geometry and pre-algebra for younger MYP pupils.' }
      ] },
      { num: 'II', h3: 'Alongside the Diploma', sub: 'Years one and two', courses: [
        { code: 'IBM / DP / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Extra depth for AI students and for HL probability.' },
        { code: 'IBM / DP / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Hard problem solving for HL students who want more.' },
        { code: 'IBM / DP / 03', slug: 'ib-diploma-computer-science-course', title: 'IB DP Computer Science', blurb: 'For students taking computer science as well, SL or HL.' }
      ] },
      { num: 'III', h3: 'After the Diploma', sub: 'University years', courses: [
        { code: 'IBM / UNI / 01', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus, linear algebra and analysis by semester.' },
        { code: 'IBM / UNI / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'Statistics, linear algebra and the maths of machine learning.' },
        { code: 'IBM / UNI / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language behind the lesson above, from the first line.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How tutoring runs',
    h2: 'How live IB maths tutoring works from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early', l: 'Peru mornings are Indian late afternoons, a comfortable hour for our tutors.' },
      { time: 'Late', l: 'Evening and late-night sessions in Peru are possible too; name the hour.' },
      { time: '1-on-1', l: 'A tutor for one student, following that student\'s school and exam board.' }
    ],
    cells: [
      { h3: 'Course-exact', p: 'AA and AI taught as the different courses they are.' },
      { h3: 'Paper practice', p: 'Timed papers and line-by-line correction.' },
      { h3: 'Exploration ethics', p: 'Mathematics and criteria taught; the work stays the student\'s.' },
      { h3: 'One tutor', p: 'The same person across both Diploma years.' },
      { h3: 'Planned backwards', p: 'From the November session to the first week.' },
      { h3: 'Group or alone', p: 'Fifteen to twenty students, or one to one.' }
    ]
  },

  projectsH2: 'Work by our older students',
  projectsLede: 'Many of our IB-age students also code, and some of their projects are below. The <a class="ag-inline-link" href="/student-labs">student labs</a> page collects more.',
  reviewsLede: 'Parents and students on Google, quoted without edits.',

  fees: {
    h2: 'IB maths tutoring fees for Peru',
    lede: 'Fees are charged in US dollars to a card. The bank converts each charge into soles on the day, at its own rate, so the soles figure on your statement can vary a little month to month.',
    free: ['A free first class', 'A short check of the student\'s course, level and gaps', 'No card needed'],
    group: ['Fifteen to twenty IB students at a similar level', 'One tutor throughout', 'Two live classes a week', 'Monthly, stop whenever you need'],
    one: ['One student, one tutor', 'Built around the school\'s order and deadlines', 'Hours chosen by the family']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'IB maths tutor in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All our classes are live, online and taught only in English, so a student who sits IB maths in English practises in the language of the exam. Tutors speak clearly, adapt to each student\'s pace and accent, and write key terms on the shared board.' },
      { q: 'Do you tutor both AA and AI, at SL and HL?', a: 'Yes. Our IB course covers Analysis and Approaches and Applications and Interpretation at both levels, and a tutor works on the course and level the student is actually taking.' },
      { q: 'Are you approved or endorsed by the IB?', a: 'No. We are an independent online school and are not connected with or endorsed by the International Baccalaureate, COAR, MINEDU or any school. We teach alongside the student\'s IB school, which teaches, sets deadlines and submits assessed work.' },
      { q: 'Will you help with the IB maths exploration?', a: 'We teach the mathematics a student\'s idea needs, the assessment criteria and how to critique their own draft. We never write, edit or ghost-write the exploration itself, and the school\'s IB coordinator decides what help is allowed.' },
      { q: 'When are the IB exams for students in Peru?', a: 'It depends on the school. MINEDU\'s report on COAR results refers to the November 2025 session, which fits Peru\'s March to December school year, but each school chooses its session. Exact paper dates for any year come from the school\'s IB coordinator; we do not print them here.' },
      { q: 'What time would tutoring be?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru is 10 hours 30 minutes behind India all year, so a 19:30 session in Lima is 06:00 the next morning for the tutor.' },
      { q: 'Does the IB Diploma help with university entry in Peru?', a: 'Some universities publish Diploma routes. The Universidad de Lima admits Diploma holders who apply within three years of earning it, and PUCP has a Diploma de Bachillerato route that can recognise up to 23 credits, or 36 after an extra Bachillerato year. Each university decides; we promise no admission.' },
      { q: 'Can you prepare me for a Peruvian university admission exam?', a: 'Not as an exam course: those exams are in Spanish and set by each university. Our tutoring strengthens the mathematics and the habits of careful reading and estimation underneath any exam.' },
      { q: 'When should tutoring start?', a: 'Ideally at the start of the first Diploma year, or in 3rd of secundaria for a student whose algebra needs work. Students who start in the final year can still gain a lot, but there is less time to repair the base.' },
      { q: 'How are fees paid from Peru?', a: 'By card, in US dollars; your bank converts each payment into soles. The first class is free and booking it needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'Related pages',
    lede: 'More for IB students and families in Peru.',
    items: [
      { href: '/ib-maths-tuition-online', label: 'IB maths tuition online', p: 'Our IB maths teaching in detail, for any country.' },
      { href: '/ib-maths-ia-guidance', label: 'IB maths IA guidance', p: 'How we support the exploration without writing it.' },
      { href: '/ib-maths-ai-sl-tutor-online', label: 'IB Maths AI SL', p: 'A closer look at Applications and Interpretation at SL.' },
      { href: '/ib-myp-maths-tutor-online', label: 'IB MYP maths', p: 'The years before the Diploma.' },
      { href: '/ib-extended-essay-maths-computer-science-mentoring', label: 'Extended essay mentoring', p: 'Maths and computer science extended essays.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Why reasoning beats memorising.' }
    ]
  },

  start: {
    h2: 'Book a free IB maths class',
    lede: 'In the free class the tutor asks about the student\'s course, level and school calendar, works through two or three short questions together, and notes where marks are being lost. Afterwards you get a plain recommendation: one to one or a group, how often, and when to start relative to the November session.',
    readFirst: 'Want to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains a live class, and the <a class="ag-inline-link" href="/courses/ib-mathematics-aa-ai-masterclass">IB Maths course page</a> has the full syllabus.',
    note: 'Every class is live on video with a tutor in India, and in English only. WhatsApp in English is the quickest way to reach us.',
    formNote: 'Free, no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'IB maths', links: [
        { href: '/ib-maths-tuition-online', label: 'IB maths tuition' },
        { href: '/ib-maths-ia-guidance', label: 'IB maths IA guidance' },
        { href: '/ib-maths-ai-sl-tutor-online', label: 'IB Maths AI SL' },
        { href: '/ib-myp-maths-tutor-online', label: 'IB MYP maths' }
      ] },
      { h4: 'Beyond maths', links: [
        { href: '/ib-computer-science-online-tuition', label: 'IB computer science' },
        { href: '/ib-extended-essay-maths-computer-science-mentoring', label: 'Extended essay' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'A limit is not a button you press forever'
  },

  personalityCss: `
.ag-root.ag-ibm .ag-hero h1 { max-width: 19ch; letter-spacing: -0.012em; }
.ag-root.ag-ibm .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-ibm .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-ibm .ag-table td:first-child { white-space: nowrap; font-weight: 600; }
.ag-root.ag-ibm .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU press releases on COAR IB results (17 April 2026) and COAR admission 2026 (11 January 2026); Universidad de Lima Guía del postulante 2027-1(A); PUCP Guía del postulante (2027-1); RM 501-2025-MINEDU; MINEDU Edades normativas; Currículo Nacional de la Educación Básica; our own IB Maths course page; IANA tz database. Read 8 November 2026. ibo.org refused access and was not retried.',
    localProject: 'An original calculus lesson: forward and central difference quotients for f(x) = x³ at x = 2 print 12.61 and 12.01 at h = 0.1, exactly 12 + 6h + h² and 12 + h²; shrinking h shows the error bottoming out near h = 1e-8 (7.3e-08) and rising to 1.3 at h = 1e-15 because of rounding. Plus pre-DP, SL, HL and AI tasks.',
    requiredMentions: ['h=0.1: forward 12.610000, central 12.010000', 'h=1e-8: forward 11.9999999271, error 7.3e-08', 'h=1e-15: forward 10.6581410364, error 1.3e+00', 'A limit is a mathematical idea, not a button you can press forever.', 'That is the November squeeze', 'Dates a 5th-of-secundaria IB student in Lima may meet, late 2026 to March 2027', 'Of 2,296 who took part, 1,740 entered for the full Diploma and 1,179 earned it', 'A limit is not a button you press forever'],
    sources: [
      { claim: '2,502 IB Diplomas in Peru in 2025, COAR 47%; November 2025 session; 2,296 COAR participants, 1,740 Diploma entries, 1,179 Diplomas, 556 course entries, 390 course certificates; DP in 2024 and 2025; ten COARs above 70%.', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' },
      { claim: 'COAR 2026 admission: 2,650 places after 2nd of secundaria, 12 to 30 January 2026, free; residence; DP and 2,000+ universities (MINEDU statement).', url: 'https://www.gob.pe/institucion/minedu/noticias/1331404-minedu-pone-en-marcha-proceso-de-admision-a-los-colegios-de-alto-rendimiento' },
      { claim: 'Universidad de Lima school exam 15 November 2026; classes from 29 March 2027; IB Diploma route within three years.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: 'PUCP La Primera Opción 29 November; Diploma de Bachillerato interviews until 28 January 2027; Evaluación del Talento 21 February; up to 23 or 36 credits.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' },
      { claim: 'Fourth teaching block of 2026 ends 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Normative ages: 4th of secundaria 15, 5th 16, at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Secundaria maths periods: 4 (JER) and 6 (JEC) of 45 minutes.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Our IB Maths course description (AA non-calculator paper, AI with GDC, exploration integrity).', url: 'https://learn.modernagecoders.com/courses/ib-mathematics-aa-ai-masterclass' },
      { claim: 'Peru UTC-5 all year, no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'IB exam dates, syllabus details or the number of IB World Schools in Peru from ibo.org: the site returned 403 and was not retried; descriptions are ours and point to the school\'s IB coordinator.',
      'Any IB, COAR, MINEDU or university endorsement or partnership: none, and the page says so.',
      'That the roughly 1,300 non-COAR Diplomas were at named schools or in Lima: not published, not said; no school is named.',
      'Admission, grade or Diploma promises: none.',
      'A typed fee or soles conversion: refused; fees render from the template in USD.'
    ]
  }
};
