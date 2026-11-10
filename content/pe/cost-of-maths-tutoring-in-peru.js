// SHIP: market | Cost of maths tutoring in Peru: the deadline sets the months, the months set the cost | date arithmetic with datetime and timedelta: days and classes left before an exam, and a guard for dates already past
'use strict';
// Cost of maths tutoring in Peru (ag- English guide, Peru cluster row PE065, P3 cost, hubGroup guides). priceSubject 'maths'.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md (sections 3 and 6: cost pages explain what drives cost and show
// our fee through the template only; no competitor prices, no soles); writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// No visible "best".
// Searches (KEYWORDS.md sections 1, 3 and 6, maths row): "how much is a maths tutor", "maths tutor peru", "clases particulares de
// matemáticas precio", "academia preuniversitaria"; questions "How much is a maths tutor?", "¿Clases a domicilio u online?",
// "¿Cuánto cuesta una academia pre?" (explainer only, no prices).
// Spine (different from the Spanish sibling precio-profesor-particular-matematicas-peru, which converts 45-minute school hours
// and travel time with divmod): the total cost of maths tutoring is the monthly fee times the months before a deadline, so the
// page puts the real 2026 to 2027 maths deadlines in one primary-source table (U de Lima school exam, PUCP La Primera Opción
// and Evaluación del Talento, UNI ordinary exam, CEPRE-UNI, ONEM school stage), explains what each exam asks of maths, what
// moves the monthly cost, what school already provides (CNEB, RM 501), the pre-university centres the universities run
// themselves, and where our maths fee is (template cards). One original datetime program counting days and classes left.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/facts-school/src/, fetched 2026-11-08 by the research
// pass; every quote grepped in the raw text):
//  Universidad de Lima, Guía del postulante 2027-1(A) (ulima-guia-20271a): "(PRESENCIAL) Domingo 15 de noviembre de 2026, 7.00
//    horas"; "El examen de escolares es una prueba única de aptitud académica y de conocimientos"; "La calificación final se
//    obtiene asignando un puntaje por cada respuesta correcta y restándolo por cada respuesta equivocada."; "INICIO DE CLASES
//    Lunes 29 de marzo de 2027"; "exclusivo para alumnos de quinto año de secundaria".
//  PUCP Guía del postulante (pucp-guia): "Tabla de Admisión PUCP 2027-1 Dirigida a escolares de 5.° de secundaria y egresados que
//    desean iniciar sus estudios en el ciclo 2027-1 (marzo del 2027)."; "Si estás cursando 5.° año de secundaria LA PRIMERA
//    OPCIÓN® INSCRIPCIONES ABIERTAS EVALUACIÓN ACADÉMICA: 29 de noviembre"; "Si has finalizado 5.° de secundaria EVALUACIÓN DEL
//    TALENTO PRÓXIMAMENTE EVALUACIÓN ACADÉMICA: 21 de febrero"; "con especial énfasis en las áreas de comprensión lectora y
//    matemáticas."; "Admisión Regular , que abarca las modalidades de La Primera Opción, Evaluación del Talento y CeprePUCP."
//  UNI Admisión 2026-2 (uni-adm2026-2): "Examen de Admisión Ordinario Lunes 10, miércoles 12 y viernes 14 de agosto de 2026";
//    "1. Primera prueba: - APTITUD ACADÉMICA - HUMANIDADES 2. Segunda prueba: - MATEMÁTICA 3. Tercera prueba: - Física - Química";
//    "Fechas del examen: 16, 18, 20 de FEBRERO" (no year on the page); "Inscripción de postulantes Modalidad Ingreso Directo
//    (CEPRE-UNI)". UNI registration fees appear on the page in soles; not printed.
//  CEPRE-UNI cronograma 2026-2 (cepre-uni-2026-2): "DOMINGO 02DE AGOSTO – EXAMEN FINAL PRESENCIAL".
//  UGEL 06 oficio, ONEM 2026 (ugel06-onem-2026): "se llevará a cabo de manera simultánea a nivel nacional el día miércoles 08 de
//    Julio"; "La prueba tiene una duración de dos (02) horas." BLOCKED.md: no ONEM 2027 bases published yet.
//  Ley Universitaria 30220 as quoted by PUCP (pucp-guia): "El concurso consta de un examen de conocimientos como proceso
//    obligatorio principal".
//  CNEB (cneb): "horas pedagógicas (45 minutos)"; secundaria JER "Matemática 4 4 4 4 4"; JEC "Matemática 6 6 6 6 6".
//  RM 501-2025-MINEDU (rm501-2025-pdf, Tabla 1 checked by eye): 36 teaching weeks; fourth block 19 October to 18 December 2026.
//  EF EPI 2025 (facts-market/src/ef_peru): Lima 555.
//  Template: fees cards with data-price maths.international.group and .personal, eight live classes a month. No figure typed.
//  Brand facts: 10,000+ students worldwide, 4.9 from about 547 Google reviews, since 2020; group fifteen to twenty or one to one.
//  Time: tzdata America/Lima UTC-5 all year, Asia/Kolkata UTC+5:30.
// Our own program (scratchpad pe/e8/cotu_weeks.py), invented first-class date 16 November 2026, python3 -I (3.14), exact output:
//    "U de Lima school exam: too late, it falls 1 day(s) before the first class" / "PUCP Primera Opcion: 13 days, 1 full week(s),
//    about 2 classes at two a week" / "PUCP Evaluacion del Talento: 97 days, 13 full week(s), about 26 classes at two a week" /
//    "Thirteen weeks after the start: Monday 15 February 2027"
// Lesson family: date arithmetic with datetime.date and timedelta: subtracting dates gives days, floor division gives whole
// weeks, a guard catches deadlines already past, and timedelta(weeks=) projects an end date.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  'from datetime import date, timedelta',
  '',
  'start = date(2026, 11, 16)                       # an invented first class, a Monday',
  'exams = {',
  '    "U de Lima school exam": date(2026, 11, 15),',
  '    "PUCP Primera Opcion": date(2026, 11, 29),',
  '    "PUCP Evaluacion del Talento": date(2027, 2, 21),',
  '}',
  'for name, day in exams.items():',
  '    gap = (day - start).days',
  '    if gap <= 0:',
  '        print(f"{name}: too late, it falls {-gap} day(s) before the first class")',
  '        continue',
  '    print(f"{name}: {gap} days, {gap // 7} full week(s), about {gap // 7 * 2} classes at two a week")',
  '',
  'print("Thirteen weeks after the start:", (start + timedelta(weeks=13)).strftime("%A %d %B %Y"))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Cost of maths tutoring' },
  slug: 'cost-of-maths-tutoring-in-peru',
  code: 'cotu',
  accent: '#5A2C3C',
  accentRationale: 'Cost of maths tutoring in Peru: a deep aubergine #5A2C3C, close to the dark skin of the Andean oca tuber, chosen as a sober tone for a page about budgets and deadlines; contrast passes 4.5 on all three papers (checked by the build gate)',
  pageType: 'market',
  priceSubject: 'maths',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Cost of maths tutoring in Peru',
  title: 'Cost of Maths Tutoring in Peru: Fees, Months and Exam Dates',
  description: 'What maths tutoring costs in Peru once you count the months to an exam: 2026 to 2027 admission and olympiad dates, what moves the fee, and our live English classes.',
  ogDescription: 'The monthly fee is only half of what maths tutoring costs; the other half is how many months the deadline leaves. Exam dates for U de Lima, PUCP, UNI and ONEM in one table, what drives the price, and a Python date calculator.',
  twitterDescription: 'Maths tutoring costs in Peru, counted in months to the next exam, with the 2026 to 2027 dates.',
  pageName: 'Cost of Maths Tutoring in Peru',
  webPageDescription: 'A guide to the cost of maths tutoring in Peru, built from the admission guides of Universidad de Lima, PUCP and UNI, the CEPRE-UNI calendar, the ONEM 2026 oficio, the CNEB and RM 501-2025, with an original Python lesson on date arithmetic.',
  courseDescription: 'Live online maths tutoring taught in English for learners in Peru from primaria to university, including secundaria maths for admission exams, paid monthly in US dollars, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Cost of maths tutoring',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#price', label: 'What moves the price' },
    { href: '#deadlines', label: 'Exam dates' },
    { href: '#dates', label: 'Date code' },
    { href: '#school', label: 'School hours' },
    { href: '#ours', label: 'Our fee' }
  ],
  eyebrow: 'Peru &middot; What maths tutoring costs &middot; Primaria to university',
  h1: 'Cost of maths tutoring in Peru, counted to the exam',
  lede: 'Families usually compare maths tutors by the price of an hour or a month. The number that decides the total, though, is how many months the learner has before the exam that matters, and in Peru those exams cluster in a few weeks of November, February and August. This page puts the 2026 to 2027 dates in one place, explains what moves a tutor\'s fee, and shows our own maths fee in the cards below, with no competitor prices.',
  secondaryCta: { href: '#deadlines', label: 'See the exam dates' },
  wa: 'Hello Modern Age Coders, I am in Peru and planning maths tutoring before an exam. Could I book a free maths class in English?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; maths taught live, online and in English',
  spec: [
    ['Who', 'Primaria, secundaria, university'],
    ['Billing', 'Monthly, by card'],
    ['Currency', 'US dollars, converted by your bank'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Peru times', 'The hour you choose'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'The short answer',
  capsule: 'The cost of maths tutoring in Peru is the monthly fee multiplied by the months before the learner\'s deadline, so start by counting the weeks to the exam. Fees vary with home or online teaching, the level, one to one or group, and lessons per week. Our mentors teach maths live and online in English, from primaria through university, either in groups of fifteen to twenty or one to one, at hours the family sets; our monthly fee in US dollars is in the cards on this page.',

  picks: {
    eyebrow: 'By stage',
    h2: 'Three maths courses and the deadlines they serve',
    lede: 'Each is paid month by month. The stage of school decides which one, and the exam date decides for how long.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'COTU / 01', title: 'Maths for 1st and 2nd of secundaria', note: 'Pre-algebra, geometry and number work for the first secundaria years, the stage ENLA tests in 2nd of secundaria and ONEM Level 1 draws on. No exam pressure yet; a solid base.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'COTU / 02', title: 'Upper secundaria and admission maths', note: 'Algebra, functions, geometry and trigonometry for 3rd to 5th of secundaria, taught for understanding so that admission-style problems feel familiar rather than memorised.' },
      { course: 'college-mathematics-complete-masterclass', code: 'COTU / 03', title: 'University maths', note: 'For first-year university students facing calculus and linear algebra: explanations slow enough to follow, and practice that matches the course in front of them.' }
    ]
  },

  sections: [
    {
      id: 'price',
      eyebrow: 'Why fees differ',
      h2: 'How much does a maths tutor cost in Peru?',
      lede: 'There is no official rate. A tutor\'s fee in Peru moves with five things, and two families quoting very different prices may simply be buying different services.',
      body: [
        { kind: 'ol', items: [
          '<strong>At home or online.</strong> A tutor who travels to the family\'s home charges for travel time too; online removes it, and so removes the commute for the learner.',
          '<strong>The level.</strong> Primaria arithmetic, secundaria algebra, admission-exam preparation, IB or IGCSE and university calculus are different jobs. Exam-specific work usually costs more.',
          '<strong>One to one or a group.</strong> A private tutor\'s whole hour goes to one learner. Our maths groups have fifteen to twenty learners at the same level; one-to-one classes are the other option.',
          '<strong>Lessons per week.</strong> Some fees buy one lesson a week, others two or more. Our monthly maths fee covers eight live classes, normally two a week.',
          '<strong>How many months.</strong> The one families forget. A month of tutoring three weeks before an exam costs the same as a month in March, and does far less.'
        ] },
        { kind: 'p', mt: true, html: 'We never print other tutors\' or academies\' prices, and our own appears only in the fee cards below. Our Spanish <a class="ag-inline-link" href="/precio-profesor-particular-matematicas-peru">guide to tutor prices</a> converts school hours and travel into clock hours for a fairer comparison.' }
      ]
    },
    {
      id: 'deadlines',
      tint: 'tint',
      eyebrow: 'The deadlines',
      h2: 'When are the main maths exams for secundaria pupils in Peru?',
      lede: 'These are the dates that set most tutoring budgets for the 2026 to 2027 cycle, each from the organiser\'s own page. Dates already past are kept because they show when the next round is likely to fall.',
      body: [
        { kind: 'table', numCols: [], caption: 'Maths-heavy exams for secundaria pupils in Peru, 2026 to 2027, from each organiser', head: ['Exam', 'Who sits it', 'Date', 'How maths appears'], rows: [
          ['ONEM 2026, school stage', 'Secundaria pupils, entered by their school', 'Wednesday 8 July 2026', 'Ten written-answer problems in two hours'],
          ['CEPRE-UNI 2026-2 final exam', 'Students of UNI\'s pre-university centre', 'Sunday 2 August 2026', 'Part of UNI\'s direct-entry route'],
          ['UNI ordinary admission 2026-2', 'Secondary-school leavers', '10, 12 and 14 August 2026', 'Three papers; the second is entirely Matemática'],
          ['U de Lima school exam, 2027-1', 'Pupils in 5th of secundaria', 'Sunday 15 November 2026, 07:00', 'One test of aptitude and knowledge; wrong answers lose points'],
          ['PUCP La Primera Opción, 2027-1', 'Pupils in 5th of secundaria', '29 November 2026', 'Special emphasis on reading comprehension and maths'],
          ['PUCP Evaluación del Talento, 2027-1', 'Secondary-school leavers', '21 February 2027', 'Same emphasis on reading and maths'],
          ['UNI, next ordinary exam', 'Secondary-school leavers', '16, 18 and 20 February (year not stated on the page)', 'Details not yet published there']
        ] },
        { kind: 'source', html: 'Sources: Universidad de Lima, Guía del postulante 2027-1(A); PUCP, Guía del postulante (Admisión 2027-1, classes from March 2027); UNI, Admisión 2026-2 page; CEPRE-UNI activity calendar 2026-2; UGEL 06 (MINEDU) oficio múltiple on ONEM 2026. All read on 8 and 9 November 2026. Admission exams are in Spanish and each university alone decides who is admitted. We are not connected with any university, CEPRE or ONEM.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading the table as a budget',
          left: [
            'Peruvian law requires a knowledge exam as the main route into university: PUCP quotes Ley Universitaria 30220 saying the admission contest consists of "un examen de conocimientos" as the principal compulsory step. Maths sits at the centre of most of these exams.',
            'For a pupil in 4th of secundaria in late 2026, U de Lima and PUCP\'s first-option dates are about a year away. That is a long, cheap runway: one or two maths lessons a week, building understanding rather than cramming.'
          ],
          rightH3: 'Why the date changes the format',
          right: [
            'With a year to go, a group is usually enough. With twelve weeks, one-to-one classes spent only on the learner\'s gaps often cost less in total, because nothing is wasted on topics they already know.',
            'U de Lima deducts points for wrong answers, so preparation must include judging when not to answer. We teach that with original timed sets. Admission exams are in Spanish; we teach the maths reasoning in English and the learner practises the Spanish wording on the university\'s own sample material.'
          ] }
      ]
    },
    {
      id: 'dates',
      eyebrow: 'A real lesson',
      h2: 'How many classes fit before an exam? A short Python program',
      lede: 'Subtract two dates and Python tells you the days between them. From there it is one line to weeks and classes. This is a lesson we give secundaria pupils, and it settles budget arguments at home quickly.',
      body: [
        { kind: 'two',
          leftH3: 'The question',
          left: [
            'A pupil plans to start maths classes on Monday 16 November 2026, an invented date for the lesson, at two classes a week. How many classes fit before each of three exams in the table?',
            'One of the exams falls the day before the first class. A careless program would report a negative number of classes; this one checks first.'
          ],
          rightH3: 'The ideas',
          right: [
            '<code>date(2027, 2, 21) - date(2026, 11, 16)</code> gives a <code>timedelta</code>, and <code>.days</code> turns it into a plain number. Floor division by 7 gives whole weeks.',
            '<code>timedelta(weeks=13)</code> works the other way: add it to a date to find when a thirteen-week plan would end. Python handles month lengths and the change of year for you.'
          ] },
        { kind: 'code', label: 'exam_countdown.py: days, weeks and classes left', lang: 'Python', code: CODE, note: 'It prints <code>U de Lima school exam: too late, it falls 1 day(s) before the first class</code>, then <code>PUCP Primera Opcion: 13 days, 1 full week(s), about 2 classes at two a week</code>, then <code>PUCP Evaluacion del Talento: 97 days, 13 full week(s), about 26 classes at two a week</code>, and finally <code>Thirteen weeks after the start: Monday 15 February 2027</code>.' },
        { kind: 'p', mt: true, html: 'The output makes the budget point by itself. Starting in mid-November leaves about two classes before PUCP\'s first-option exam, which is barely worth paying for as exam preparation, and about twenty-six before February, which is enough for real work. The same fee buys very different value depending on the date it starts. Accents are left out of the exam names in the code to keep the example simple to type.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Change the start.</strong> Set <code>start</code> to 1 March 2026 and run it again. How many classes would have fitted before U de Lima\'s exam?',
          '<strong>Add an exam.</strong> Add the UNI ordinary exam of 10 August 2026 and see the guard catch it.',
          '<strong>Count only school weeks.</strong> Harder: skip any week that falls in a school break from the RM 501-2025 calendar.',
          '<strong>Explain it.</strong> In two English sentences, tell a parent why the start date matters more than the monthly fee.'
        ] }
      ]
    },
    {
      id: 'school',
      tint: 'tint',
      eyebrow: 'What school already gives',
      h2: 'How much maths does a secundaria pupil already get at school?',
      lede: 'Enough hours that a tutor should not repeat the lessons. The point of paying is the part a class of thirty cannot do: finding one learner\'s gaps and fixing them.',
      body: [
        { kind: 'p', html: 'The national curriculum gives Matemática four periods a week in every secundaria grade in schools on the regular day, rising to six where a school runs the longer Jornada Escolar Completa; the CNEB defines a period as 45 minutes. Under RM 501-2025 the 2026 year ran thirty-six teaching weeks, with the last block from 19 October to 18 December 2026. Our arithmetic: four periods is three clock hours of maths a week, about a hundred and eight hours across a teaching year.' },
        { kind: 'p', html: 'Against that, one or two tutoring hours a week is small, so they must be targeted. A diagnostic in the first class, problems chosen for the gap rather than the chapter, and a learner who explains their own working are what make the money count. If a tutor spends the hour doing the homework, the family is paying twice for the same lesson. Our page on choosing a <a class="ag-inline-link" href="/profesor-particular-de-matematicas-online-peru">profesor particular de matemáticas online</a> covers this in Spanish.' }
      ]
    },
    {
      id: 'centres',
      eyebrow: 'Pre-university options',
      h2: 'Is a pre-university academy cheaper than a maths tutor?',
      lede: 'They are different products, and we do not compare prices. An academia or a university\'s own pre-university centre teaches every admission subject to large groups on a fixed schedule; a tutor works on one learner\'s maths.',
      body: [
        { kind: 'two',
          leftH3: 'What the universities run',
          left: [
            'Several universities run their own centres. UNI offers direct entry through CEPRE-UNI, whose 2026-2 cycle ended with a final exam on 2 August 2026. PUCP lists CeprePUCP as one of its regular admission routes, and U de Lima\'s 2027-1 process includes a route through its pre-university centre.',
            'Families should read each university\'s own guide; terms, dates and fees are set there, not by us.'
          ],
          rightH3: 'Where tutoring fits',
          right: [
            'Many pupils combine the two: a centre or academia for the full syllabus in Spanish, and a tutor for the maths that is not clicking. Others need only the maths.',
            'We do not run an academia and do not prepare the Spanish-language parts of admission exams. We teach the maths reasoning, in English, that the exams depend on, and we never promise admission.'
          ] }
      ]
    },
    {
      id: 'ours',
      tint: 'tint',
      eyebrow: 'Our fee',
      h2: 'What does our maths tutoring cost, and what is included?',
      lede: 'Our maths fee is in the cards below, in US dollars per month, for a group or one to one. Here is what that monthly payment covers.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Eight live lessons', p: 'Normally two a week with the same mentor, on a shared whiteboard, with the learner working and explaining each step.' },
          { h3: 'Work between lessons', p: 'A few problems chosen for the learner\'s gaps, marked together at the start of the next lesson. No extra books to buy.' },
          { h3: 'Short progress notes', p: 'What was solved, what is still shaky, and what comes next, so a parent can judge value month by month.' }
        ] },
        { kind: 'p', mt: true, html: 'Payment is monthly by card in US dollars, converted into soles by your bank; a small payment-gateway charge is shown at checkout before you confirm. There is no long contract, so a family can stop once the exam is over. The first class is free and needs no card. Families who want maths taught in English for its own sake can read our Spanish page about a <a class="ag-inline-link" href="/profesor-de-matematicas-en-ingles-peru">maths teacher in English</a>.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'The teaching language',
      h2: 'Will maths tutoring in English cost more or work less well?',
      lede: 'It costs nothing extra, and for most secundaria pupils it works well, because the language of maths is mostly symbols and diagrams.',
      body: [
        { kind: 'p', html: 'The mentor, teaching from India, speaks in short plain sentences, puts each new term on the whiteboard, and is happy with answers given as numbers and working. EF\'s English Proficiency Index 2025 gives Lima 555, in its high band, so many Lima teenagers follow a clear maths lesson in English without trouble; others settle within a few classes. Because admission exams are in Spanish, we make sure each learner also knows the Spanish names of the ideas they learn, so nothing is lost on the day.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Value for money',
    h2: 'What should each month of maths tutoring produce?',
    lede: 'Our own markers. If a month passes without the next one, tell us; it usually means the plan needs changing, not more months.',
    table: { numCols: [], caption: 'Progress markers by month of tutoring (ours)', head: ['Month', 'What the learner should show', 'What it means for the exam'], rows: [
      ['1', 'A clear list of gaps, agreed with the mentor', 'The plan targets the right topics'],
      ['2 to 3', 'Gaps closing; explains methods aloud', 'Fewer marks lost to misunderstanding'],
      ['4 to 6', 'Solves mixed problems without prompts', 'Ready for timed practice'],
      ['Final month', 'Timed sets with a strategy for skipping', 'Marks lost to time and guessing fall']
    ] },
    left: { h3: 'With a year to go', ps: [
      'A group is often enough. Spend the early months on understanding, not exam papers.',
      'Review at month three: if gaps are closing, carry on; if not, try one to one.'
    ] },
    right: { h3: 'With weeks to go', ps: [
      'One to one, aimed only at the biggest gaps, is usually the better use of money.',
      'After the exam, stop or switch to the next goal. Paying past the deadline is the most common waste.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths courses',
    h2: 'Nine more maths courses, paid the same way',
    lede: 'From primaria to adult learners. Each is billed monthly and taught live in English.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'Ages 6 to 11', courses: [
        { code: 'COTU / PRI / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Grades 1 to 5: number, fractions and measurement.' },
        { code: 'COTU / PRI / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for children of 5 to 10.' },
        { code: 'COTU / PRI / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored in Python, 10 to 15.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'Ages 12 to 17', courses: [
        { code: 'COTU / SEC / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The algebra every later topic leans on.' },
        { code: 'COTU / SEC / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Hard problems, original sets, real proof.' },
        { code: 'COTU / SEC / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For Cambridge school pupils in Peru.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and over', courses: [
        { code: 'COTU / ADULT / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'From data to hypothesis tests.' },
        { code: 'COTU / ADULT / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'Statistics, linear algebra and machine learning.' },
        { code: 'COTU / ADULT / 03', slug: 'complete-business-finance-mathematics-mastery', title: 'Business and finance maths', blurb: 'Interest, investment and risk.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How monthly maths tutoring runs from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'During term', l: 'Lessons fitted around school and homework.' },
      { time: 'Before an exam', l: 'Extra one-to-one lessons can be added for a few weeks.' },
      { time: 'After the exam', l: 'Stop, or move to the next goal; no long contract.' }
    ],
    cells: [
      { h3: 'Shared whiteboard', p: 'Working written where mentor and learner both see it.' },
      { h3: 'Gaps first', p: 'Lessons chosen by diagnosis, not by chapter.' },
      { h3: 'Clear, slow English', p: 'Key terms written; Spanish names noted for exams.' },
      { h3: 'Levels, not ages', p: 'A group is matched to what the learner can already do.' },
      { h3: 'Timed sets near exams', p: 'Original problems under exam-style time limits.' },
      { h3: 'Monthly billing', p: 'In US dollars by card; stop when the goal is met.' }
    ]
  },

  projectsH2: 'Work from our learners',
  projectsLede: 'Examples from learners in their second year or later with us. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' and students\' Google reviews, copied word for word.',

  fees: {
    h2: 'Our monthly maths fee for Peru',
    lede: 'Maths fees are monthly, in US dollars, and charged to a card. The soles figure is whatever your bank\'s conversion gives on the day it processes the payment.',
    free: ['A free first maths class', 'A diagnostic of strengths and gaps', 'No card to book'],
    group: ['Fifteen to twenty learners at one level', 'One mentor throughout', 'Eight live lessons a month', 'Monthly; stop after the exam'],
    one: ['A private maths mentor', 'Lessons aimed at your gaps', 'Hours agreed with you']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'The cost of maths tutoring in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every maths lesson we give is live, online and in English. Mentors write each new term on the whiteboard and speak slowly. Because admission exams in Peru are in Spanish, learners also note the Spanish name of each idea.' },
      { q: 'How much does a maths tutor cost in Peru?', a: 'There is no official rate; it depends on home or online teaching, level, one to one or group, and lessons per week. Our monthly maths fee is in the cards on this page, in US dollars. We do not quote other tutors\' or academies\' prices.' },
      { q: 'How many months of tutoring will we need?', a: 'Count the weeks to the exam first. With a year to go, a group class once or twice a week is usually enough. With a few weeks, one-to-one lessons aimed at the biggest gaps give more for the money.' },
      { q: 'When are the 2026 to 2027 admission exams?', a: 'From the universities\' own pages: U de Lima\'s school exam on Sunday 15 November 2026; PUCP La Primera Opción on 29 November 2026 and Evaluación del Talento on 21 February 2027; UNI listed 16, 18 and 20 February without a year. Check each guide before planning.' },
      { q: 'Do you prepare for the admission exam itself?', a: 'We prepare the maths reasoning, in English, with original timed problems. We do not teach the Spanish-language sections, run an academia, or promise admission. Each university decides who is admitted.' },
      { q: 'Is online tutoring cheaper than a tutor at home?', a: 'It removes the tutor\'s travel time, which is part of what a home visit costs, and every worked problem stays saved for revision. Our fee is in the cards on this page; we do not compare it with named tutors.' },
      { q: 'Can we stop after the exam?', a: 'Yes. Payment is monthly with no long contract. Many families stop once the exam is done, or move to the next goal, such as first-year university maths.' },
      { q: 'What time are classes in Peru?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. The mentor in India is ten and a half hours ahead of Lima all year, so a 07:30 lesson in Lima is 18:00 in India.' },
      { q: 'Are there extra costs?', a: 'No books or materials to buy. A computer or tablet, a connection, paper and a pencil are all a learner needs. A small payment-gateway charge appears at checkout before you confirm.' },
      { q: 'How do I pay from Peru?', a: 'By card each month in US dollars; your bank converts the charge into soles. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More on maths help for learners in Peru.',
    items: [
      { href: '/precio-profesor-particular-matematicas-peru', label: 'Precio de un profesor de matemáticas', p: 'Our Spanish cost guide, in clock hours.' },
      { href: '/profesor-particular-de-matematicas-online-peru', label: 'Profesor particular online', p: 'Choosing a private maths tutor, in Spanish.' },
      { href: '/profesor-de-matematicas-en-ingles-peru', label: 'Matemáticas en inglés', p: 'Maths taught in English, explained for Spanish readers.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru page, maths included.' },
      { href: '/pricing', label: 'Pricing', p: 'All our fees in one place.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson from start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free maths class, then count the weeks',
    lede: 'In the free class a mentor works through a short diagnostic with the learner. Afterwards we look at the exam date together, suggest a group or one-to-one plan and how many months it needs, and agree an hour that suits the family.',
    readFirst: 'You can also read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or open the <a class="ag-inline-link" href="/courses">course list</a> to see each maths syllabus.',
    note: 'Lessons are live video classes taught from India, in English. We answer WhatsApp in English.',
    formNote: 'Free, without card details or commitment.'
  },

  footer: {
    cols: [
      { h4: 'Planning', links: [
        { href: '/pricing', label: 'Pricing' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking, not copying' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/precio-profesor-particular-matematicas-peru', label: 'Precio de un profesor' },
        { href: '/profesor-particular-de-matematicas-online-peru', label: 'Profesor online' },
        { href: '/tutor-ib-matematicas-en-ingles-peru', label: 'Tutor IB matemáticas' }
      ] }
    ],
    bottomRight: 'Start the count from the exam'
  },

  personalityCss: `
.ag-root.ag-cotu .ag-hero h1 { max-width: 19ch; letter-spacing: -0.015em; }
.ag-root.ag-cotu .ag-capsule { border-left-width: 5px; }
.ag-root.ag-cotu .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cotu .ag-table td:nth-child(3) { white-space: nowrap; font-variant-numeric: tabular-nums; }
.ag-root.ag-cotu .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Universidad de Lima Guía del postulante 2027-1(A); PUCP Guía del postulante (2027-1); UNI Admisión 2026-2 page; CEPRE-UNI cronograma 2026-2; UGEL 06 oficio on ONEM 2026; CNEB weekly hours; RM 501-2025 Tabla 1; EF EPI 2025. Read 8 and 9 November 2026.',
    localProject: 'An original Python date lesson for learners in Peru: with an invented first class on 16 November 2026, date subtraction shows U de Lima\'s 15 November 2026 exam is already past (a guard prints "too late"), PUCP La Primera Opción on 29 November leaves 13 days and about 2 classes, and Evaluación del Talento on 21 February 2027 leaves 97 days and about 26 classes; timedelta(weeks=13) lands on Monday 15 February 2027. Lesson family: date arithmetic with datetime and timedelta.',
    requiredMentions: ['U de Lima school exam: too late, it falls 1 day(s) before the first class', 'PUCP Evaluacion del Talento: 97 days, 13 full week(s), about 26 classes at two a week', 'Thirteen weeks after the start: Monday 15 February 2027', 'Start the count from the exam', 'counted to the exam', 'about a hundred and eight hours across a teaching year', 'Sunday 15 November 2026, 07:00', 'Three papers; the second is entirely Matemática'],
    sources: [
      { claim: 'U de Lima school exam 15 November 2026, 7.00; single aptitude and knowledge test; wrong answers penalised; classes from 29 March 2027.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: 'PUCP 2027-1: La Primera Opción 29 November; Evaluación del Talento 21 February; emphasis on reading and maths; CeprePUCP; Ley 30220 knowledge exam.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' },
      { claim: 'UNI 2026-2 ordinary exam 10, 12, 14 August 2026; three papers; next dates 16, 18, 20 February without a year; CEPRE-UNI direct entry.', url: 'https://admision.uni.edu.pe/admision2026-2/index.html' },
      { claim: 'CEPRE-UNI 2026-2 final exam on Sunday 2 August 2026.', url: 'https://www.cepre.uni.edu.pe/assets/CRONOGRAMADEACTIVIDADESACAD%C3%89MICAS2026-2.pdf' },
      { claim: 'ONEM 2026 school stage 8 July 2026, two hours.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'Matemática 4 periods (JER) or 6 (JEC) a week in secundaria; 45-minute periods.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: '2026 school year: 36 teaching weeks; fourth block 19 October to 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' }
    ],
    rejectedClaims: [
      'UNI registration fees and any academy or tutor price: printed in soles in sources or not sourced; refused.',
      'Our fee typed in copy or converted into soles: refused; it renders from the template in USD.',
      'An exam year for UNI\'s "16, 18, 20 de FEBRERO": the page gives none; the table says so.',
      'Promised admission, scores or ONEM results: none.',
      'Any connection with U de Lima, PUCP, UNI, CEPRE-UNI, MINEDU or ONEM: none, and the page says so.'
    ]
  }
};
