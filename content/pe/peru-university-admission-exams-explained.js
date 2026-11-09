// SHIP: market (en explainer, admission) | Peru's university admission exams in English: UNI, PUCP, U de Lima, San Marcos | expected value of a guess under negative marking: exact fractions, break-even after eliminating options
'use strict';
// Peru university admission exams explained (ag- English explainer, Peru cluster row PE037, P3, hubGroup guides).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md (section 3.8 pre-university honesty); writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in
// english". Owner 2026-11-08: timing flexible, any time. Fees render in USD from the template only (priceSubject 'maths');
// no soles, no typed figure (university application fees are NOT printed).
// The exams are in Spanish. The page explains them from the universities' own pages and offers maths reasoning practice in
// English. No admission promise. Not an academia preuniversitaria. Not connected with any university. No legal advice.
// Search (KEYWORDS.md): "san marcos admission exam date", "pucp admission" (English, weak signal); Spanish "examen de
// admisión", "academia preuniversitaria" cluster is large. "uni admission exam peru" has no suggestions (dead string).
// Spine: how admission works in Peru (Ley 30220 as PUCP quotes it; intakes; pre-university centres); the four universities
// side by side from their own pages; what the exams test and that they are in Spanish; the 2026 to 2027 calendar; routes for
// IB and English-medium students; an original lesson on negative marking (expected value with exact fractions); what we do
// and do not offer; the Lima clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/peru-university-admission-exams-explained/;
// facts-school/src copies fetched 8 November 2026; UNMSM pages fetched 9 November 2026 with curl -sL -A "Mozilla/5.0"):
//  UNI Admisión 2026-2 (facts-school src/uni-adm2026-2): "El examen es de manera presencial y consiste en tres pruebas tomadas
//    en tres días (lunes, miércoles y viernes)"; "1. Primera prueba: - APTITUD ACADÉMICA - HUMANIDADES 2. Segunda prueba: -
//    MATEMÁTICA 3. Tercera prueba: - Física - Química"; "Examen de Admisión Ordinario Lunes 10, miércoles 12 y viernes 14 de
//    agosto de 2026"; "Fechas del examen: 16, 18, 20 de FEBRERO" (no year on the page); "Modalidad Ingreso Directo (CEPRE-UNI)".
//    UNI FAQ (src/uni-faq): "es requisito principal para postular al examen de admisión es el haber culminado tus estudios
//    secundarios de educación básica regular o alternativa."
//  PUCP Guía del postulante (src/pucp-guia): Ley 30220 "La admisión a la universidad se realiza mediante concurso público,
//    previa definición de plazas y máximo una vez por ciclo. El concurso consta de un examen de conocimientos como proceso
//    obligatorio principal"; "Tabla de Admisión PUCP 2027-1 Dirigida a escolares de 5.° de secundaria y egresados que desean
//    iniciar sus estudios en el ciclo 2027-1 (marzo del 2027)"; La Primera Opción "EVALUACIÓN ACADÉMICA: 29 de noviembre";
//    Evaluación del Talento "EVALUACIÓN ACADÉMICA: 21 de febrero"; "con especial énfasis en las áreas de comprensión lectora y
//    matemáticas"; "DIPLOMA DE BACHILLERATO 2.° Convocatoria INSCRIPCIONES ABIERTAS ENTREVISTAS: Hasta el 28 de enero de 2027";
//    "hasta un máximo de 23 créditos"; "Admisión Regular , que abarca las modalidades de La Primera Opción, Evaluación del
//    Talento y CeprePUCP"; "Tampoco se podrá ingresar al campus portando calculadoras".
//  Universidad de Lima, Guía del postulante 2027-1(A) (src/ulima-guia-20271a): "exclusivo para alumnos de quinto año de
//    secundaria"; modalities a) to e) incl. "Centro de Estudios Preuniversitarios" and "Diploma de Bachillerato Internacional";
//    "(PRESENCIAL) Domingo 15 de noviembre de 2026, 7.00 horas"; "PUBLICACIÓN DE RESULTADOS Domingo 15 de noviembre de 2026,
//    19.00 horas"; "El examen de escolares es una prueba única de aptitud académica y de conocimientos"; "La calificación final
//    se obtiene asignando un puntaje por cada respuesta correcta y restándolo por cada respuesta equivocada. Las preguntas no
//    contestadas no aumentan ni restan puntos. Las preguntas contestadas con más de una alternativa se consideran erróneas.";
//    areas "RAZONAMIENTO MATEMÁTICO" and "RAZONAMIENTO Y LECTURA" ("la normativa gramatical del castellano"); calculators
//    prohibited ("calculadoras"); "EVALUACIÓN DE INGLÉS Por confirmar"; "INICIO DE CLASES Lunes 29 de marzo de 2027"; IB route
//    "en un plazo no mayor de tres años"; "En marzo de 2027 se realizará el Concurso de Admisión 2027-1(B)".
//  UNMSM: gob.pe statement (src/unmsm-aclaracion-2026): "La UNMSM aclara que el proceso de admisión 2026 consta de dos etapas
//    (2026-I y 2026-II)"; "la gratuidad solo aplica para una carrera en universidad pública". admision.unmsm.edu.pe, reached on
//    9 November 2026 at the first try (earlier unreachable, BLOCKED.md): portal "UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS -
//    PROCESO DE ADMISIÓN 2027-I", "RESULTADOS - EXAMEN DE ADMISION 2027-I", "DECLARACION JURADA PARA MENORES DE EDAD",
//    "Simulacro Presencial 2027-I", "CEPUSM" (unmsm-2027i.txt); results site "Resultados del Examen de Admisión 2027-I",
//    "EDUCACIÓN BÁSICA REGULAR (EBR) Y EDUCACIÓN BÁSICA ALTERNATIVA (EBA)" (unmsm-web20271.txt); the 2027-I rules page asks for a
//    Banco de la Nación payment receipt before download ("Ingrese los datos de su recibo de pago", unmsm-reglamento.txt), so the
//    rules were NOT read; constancia schedule PDF (unmsm-cronograma.txt): "CRONOGRAMA DE ENTREGA DE CONSTANCIA DE INGRESO 2027-I",
//    areas Ingeniería (incl. "Ing. de Software", "Ciencia de la Computación", "Ing. de Inteligencia Artificial"), Ciencias
//    Básicas, Humanidades y Ciencias Jurídicas y Sociales, Ciencias Económicas y de la Gestión, Ciencias de la Salud; days
//    "Lunes 2 Noviembre" to "Jueves 5 Noviembre", "REZAGADOS" Lunes 9 (PDF uploaded in 2026/10, so 2026).
//  UNSA (Arequipa): unreachable on 8 November 2026 (BLOCKED.md); not retried, not covered.
//  MINEDU, 17 April 2026 (n-coar-ib-1100): 2,502 IB Diplomas in Peru in 2025.
//  Time (timezone.tsv): America/Lima UTC-5; Asia/Kolkata UTC+5:30.
// Our own calculations: python3 -I datetime: 2 November 2026 is a Monday (matches the PDF's "Lunes 2"). Float check (python3 -I):
// with p = 1/k floats, expected(3, 1, 0.5) = -5.551115123125783e-17 and the break-even loop prints 2 instead of 3.
// Also cited: RM 501-2025-MINEDU 2026 calendar (block 4 ends "18 de diciembre", facts-school src/rm501-2025-pdf, checked by
// eye on the signed page); MINEDU Fábrica de Programadores (PCEP), 24 July 2025 (src/n-fabrica-prog).
// Code (scratchpad pe/e6/uae/v1.py, v2.py, python3 -I): v1 prints "penalty 0 -> ['1/5', '1/4', '1/3', '1/2']", "penalty 1/4
// -> ['0', '1/16', '1/6', '3/8']", "penalty 1/2 -> ['-1/5', '-1/8', '0', '1/4']"; v1+v2 adds "penalty 1/4 : guessing stops
// losing marks once 5 options remain" and "penalty 1/2 : guessing stops losing marks once 3 options remain". The penalties are
// invented for the lesson: U de Lima publishes that wrong answers subtract, but its guide does not give the amount.
// Lesson family: expected value of a guess under negative marking, computed with exact fractions; the break-even point moves
// as options are eliminated.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'from fractions import Fraction',
  '',
  'def expected(options_left, gain, loss):',
  '    # average mark for one guess among the options still standing',
  '    p = Fraction(1, options_left)',
  '    return p * gain - (1 - p) * loss',
  '',
  'gain = 1',
  'for loss in (Fraction(0), Fraction(1, 4), Fraction(1, 2)):',
  '    row = [expected(k, gain, loss) for k in (5, 4, 3, 2)]',
  '    print("penalty", loss, "->", [str(x) for x in row])'
].join('\n');

const V2 = [
  'for loss in (Fraction(1, 4), Fraction(1, 2)):',
  '    k = 5',
  '    while expected(k, gain, loss) < 0:',
  '        k -= 1',
  '    print("penalty", loss, ": guessing stops losing marks once", k, "options remain")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'University admission exams explained' },
  slug: 'peru-university-admission-exams-explained',
  code: 'uae',
  accent: '#5E5303',
  accentRationale: 'Peru university admission exams explained: a dark olive #5E5303, the colour of old library binding and pencil-shaded answer sheets, deep enough for small text on every paper tone (6.28 on #FBF8F2)',
  pageType: 'market',
  market: PE_EN,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Peru university admission exams explained',
  title: 'Peru University Admission Exams Explained in English',
  description: 'Peru university admission exams explained in English: UNI, PUCP, Universidad de Lima and San Marcos, dates, subjects, scoring and IB routes, from their own pages.',
  ogDescription: 'How university admission works in Peru, in English: what the UNI, PUCP, Universidad de Lima and San Marcos exams test, the 2026 to 2027 dates, the IB routes, why the exams are in Spanish, and a lesson on whether to guess when wrong answers lose points.',
  twitterDescription: 'Peru\'s university admission exams explained in English, from the universities\' own pages, plus live maths reasoning classes in English.',
  pageName: 'Peru University Admission Exams Explained',
  webPageDescription: 'An English explainer of university admission in Peru built from the admission pages and guides of UNI, PUCP, Universidad de Lima and UNMSM, with an original lesson on expected value under negative marking. Modern Age Coders is not connected with any of these universities.',
  courseDescription: 'Live online maths reasoning classes taught in English for students in 4° and 5° de secundaria in Peru and recent school leavers: algebra, number, geometry and problem solving of the kind admission exams test, in a group of fifteen to twenty or one to one, at a time the family chooses. Not an admission course and no admission promise.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Admission exams explained',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#how', label: 'How admission works' },
    { href: '#universities', label: 'Four universities' },
    { href: '#calendar', label: '2026 to 2027 dates' },
    { href: '#guessing', label: 'Should you guess?' },
    { href: '#ib', label: 'IB and English-medium' }
  ],
  eyebrow: 'Peru &middot; University admission &middot; Explained in English',
  h1: 'Peru\'s university admission exams, explained in English',
  lede: 'Getting into a Peruvian university usually means sitting that university\'s own entrance exam, in Spanish, often more than once. For a family who reads English more comfortably, or who is new to Peru, the system can look like a maze of acronyms. This page lays it out from the universities\' own pages: how admission works, what UNI, PUCP, the Universidad de Lima and San Marcos ask for, the dates of the current cycle, and what an IB or English-medium student can do.',
  secondaryCta: { href: '#universities', label: 'Compare the four universities' },
  wa: 'Hello Modern Age Coders, my child is in secundaria in Peru and preparing for university admission. Could we book a free maths reasoning class in English?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; we explain, the universities decide',
  spec: [
    ['Universities covered', 'UNI, PUCP, U de Lima, UNMSM'],
    ['Exam language', 'Spanish'],
    ['Our classes', 'Maths reasoning, in English'],
    ['Delivery', 'Live online'],
    ['Format', 'Fifteen to twenty, or one to one'],
    ['Promise', 'Teaching, never admission']
  ],
  capsuleQ: 'The short version',
  capsule: 'Peruvian universities admit students through their own competitive entrance exams, held in Spanish, usually twice a year for intakes starting around March and August; most also run a pre-university centre and special routes such as one for IB Diploma holders. This page explains UNI, PUCP, Universidad de Lima and San Marcos from their own pages. Modern Age Coders does not prepare students for these exams as an academy: we teach the mathematics and reasoning beneath them, live online and in English, in a group or one to one, at flexible hours.',

  picks: {
    eyebrow: 'Maths behind the exams',
    h2: 'Three courses for the mathematics admission exams lean on',
    lede: 'Not admission courses. These build the algebra, reasoning and problem solving that every university\'s maths section draws on, taught in English.',
    items: [
      { course: 'complete-high-school-mathematics-mastery', code: 'UAE / 01', title: 'High School Mathematics', note: 'Algebra, functions, geometry and trigonometry up to calculus, at the level of 4° and 5° de secundaria. The core of every maths paper described below, taught for understanding rather than formula lists.' },
      { course: 'algebra-foundations-masterclass', code: 'UAE / 02', title: 'Algebra Foundations', note: 'For a student whose algebra is the weak link: expressions, equations, inequalities and graphs, rebuilt carefully. Without a calculator, as most admission exams require, algebra has to be secure.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'UAE / 03', title: 'Problem Solving and Olympiad Maths', note: 'For strong students who want reasoning beyond the syllabus: counting, number theory and logic. The habits it builds, trying cases and checking answers, are exactly what timed reasoning sections reward.' }
    ]
  },

  sections: [
    {
      id: 'how',
      eyebrow: 'How admission works',
      h2: 'How does university admission work in Peru?',
      lede: 'Each university runs its own competition for a fixed number of places. There is no single national exam like the SAT, and a place at one university says nothing about another.',
      body: [
        { kind: 'two',
          leftH3: 'The legal frame',
          left: [
            'PUCP quotes Peru\'s University Law, Ley 30220, in its admission guide: admission is by public competition for places defined in advance, at most once per academic cycle, and the competition consists of a knowledge exam as the main compulsory process, with an optional assessment of aptitudes and attitudes alongside.',
            'In practice that means each university publishes its own rules, its own subjects and its own calendar. A student applying to three universities may sit three different exams.'
          ],
          rightH3: 'Two intakes a year, and many routes',
          right: [
            'Universities name their intakes by year and half: PUCP\'s 2027-1 starts in March 2027, UNMSM\'s 2026 process had two stages, 2026-I and 2026-II, and UNI\'s 2026-2 ordinary exam ran in August 2026.',
            'Alongside the ordinary exam, most universities offer other routes: an exam for students still in 5° de secundaria, the university\'s own pre-university centre (CEPRE-UNI, CeprePUCP, CEPUSM at San Marcos, the Centro de Estudios Preuniversitarios at the Universidad de Lima), and routes for IB Diploma holders or top school students.'
          ] },
        { kind: 'p', mt: true, html: 'Peru also has a large private industry of <em>academias preuniversitarias</em>, independent cram schools that prepare students for these exams. We are not one, and nothing here is advice to choose any route. We describe what the universities publish and teach mathematics in English. For a full picture of a 5° de secundaria year, including school and coding, our Spanish page for <a class="ag-inline-link" href="/programacion-para-5to-de-secundaria">5to de secundaria</a> may help.' }
      ]
    },
    {
      id: 'universities',
      tint: 'tint',
      eyebrow: 'Four universities',
      h2: 'What do the UNI, PUCP, Universidad de Lima and San Marcos exams test?',
      lede: 'Four of the most searched universities, set side by side from their own admission pages. Each is in Lima; each sets its exam in Spanish; each changes details between cycles, so the university\'s page always wins over this one.',
      body: [
        { kind: 'table', numCols: [], caption: 'Admission at four Lima universities, from their own pages', head: ['University', 'Main exam', 'What it covers', 'Scoring and rules we could verify'], rows: [
          ['UNI (Universidad Nacional de Ingeniería)', 'Ordinary exam: three in-person papers on three days (Monday, Wednesday, Friday)', 'Paper 1: academic aptitude and humanities. Paper 2: mathematics. Paper 3: physics and chemistry', 'Applicants must have finished secundaria; direct entry also through CEPRE-UNI'],
          ['PUCP (Pontificia Universidad Católica del Perú)', 'Academic evaluation, by route: La Primera Opción (still in 5°), Evaluación del Talento (school leavers), CeprePUCP', 'Knowledge from secundaria, with special emphasis on reading comprehension and mathematics', 'No calculators allowed on campus for written evaluations'],
          ['Universidad de Lima', 'Examen de escolares, one in-person test, for 5° de secundaria students (admission 2027-1(A))', 'Mathematical reasoning (sciences) and reasoning and reading (humanities, including Spanish grammar)', 'Points for correct answers, points subtracted for wrong ones, blanks score nothing; two marked options count as wrong; no calculators'],
          ['UNMSM (San Marcos)', 'Admission 2027-I, already examined; results published', 'Programmes grouped in five areas, from engineering to health sciences', 'Rules for 2027-I need a bank payment receipt to download, so we could not read them']
        ] },
        { kind: 'source', html: 'Sources, read on 8 and 9 November 2026: UNI, Admisión 2026-2 page and FAQ (admision.uni.edu.pe); PUCP, Guía del postulante (admision.pucp.edu.pe); Universidad de Lima, Guía del postulante 2027-1(A); UNMSM, Oficina Central de Admisión portal, 2027-I results site and the 2027-I constancia schedule (admision.unmsm.edu.pe), and UNMSM\'s statement on gob.pe. UNSA in Arequipa could not be reached when we tried, so it is not covered.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'UNI: maths and science heavy', p: 'Two of UNI\'s three papers are mathematics or physical sciences, which fits an engineering university. A student who is fluent in algebra and comfortable with physics problems starts with an advantage that cannot be crammed in a month.' },
          { h3: 'PUCP and U de Lima: reading and maths', p: 'Both put reasoning with numbers and reasoning with text side by side. At the Universidad de Lima the humanities part explicitly assesses Spanish spelling and grammar, which matters for a student educated mostly in English.' },
          { h3: 'San Marcos: a public university with five areas', p: 'UNMSM\'s 2027-I schedule groups its programmes into engineering, basic sciences, humanities and social sciences, economics and management, and health sciences. Its engineering list includes software engineering, computer science and artificial intelligence engineering.' }
        ] }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'Dates',
      h2: 'When are the admission exams for 2027 entry?',
      lede: 'The dates below come straight from the universities\' pages as we read them in November 2026. Some had passed; some were weeks away. A date without a year is printed the way the university printed it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Admission dates published for the 2026 to 2027 cycle', head: ['University', 'Route', 'Date', 'Status on 9 November 2026'], rows: [
          ['UNI', 'Ordinary exam, Admission 2026-2', '10, 12 and 14 August 2026', 'Held'],
          ['UNI', 'Next ordinary exam shown', '16, 18 and 20 February (year not stated)', 'Shown on the 2026-2 page'],
          ['UNMSM', 'Admission 2027-I', 'Admission letters handed out 2 to 5 November 2026', 'Exam held; results published'],
          ['Universidad de Lima', 'Examen de escolares 2027-1(A)', 'Sunday 15 November 2026, 7:00; results 19:00 the same day', 'Upcoming'],
          ['PUCP', 'La Primera Opción, 5° de secundaria', 'Academic evaluation 29 November 2026', 'Upcoming'],
          ['PUCP', 'Diploma de Bachillerato route', 'Interviews until 28 January 2027', 'Open'],
          ['PUCP', 'Evaluación del Talento, school leavers', 'Academic evaluation 21 February 2027', 'Coming'],
          ['Universidad de Lima', 'First day of classes, 2027-1', 'Monday 29 March 2027', 'Fixed']
        ] },
        { kind: 'source', html: 'Sources as in the table above, read on 8 and 9 November 2026. UNI\'s page, still titled 2026-2, lists "16, 18, 20 de FEBRERO" without a year; it is probably the 2027-1 exam, but the page does not say so. The UNMSM dates are from its 2027-I admission-letter schedule, published in October 2026. The Universidad de Lima also announces a further competition, 2027-1(B), in March 2027.' },
        { kind: 'p', mt: true, html: 'Two things stand out. First, several of these exams fall while the student is still in 5° de secundaria, in November, alongside the end of the school year; the 2026 school year ran until 18 December 2026 under MINEDU\'s calendar. Second, students who miss one route often have another a few months later, so a single result rarely closes every door. Each university decides who it admits; we have no part in that and make no promise about it.' }
      ]
    },
    {
      id: 'spanish',
      tint: 'tint',
      eyebrow: 'Language',
      h2: 'Are Peru\'s admission exams in Spanish, and can classes in English help?',
      lede: 'They are in Spanish. Classes in English help with the mathematics and the reasoning, which are the same in any language, but they are not a substitute for reading Spanish fluently in an exam.',
      body: [
        { kind: 'two',
          leftH3: 'Where English helps',
          left: [
            'Mathematics is a large share of every exam above: a whole paper at UNI, a stated emphasis at PUCP, a full reasoning area at the Universidad de Lima. A student who understands algebra and geometry deeply, in whatever language, carries that into a Spanish paper.',
            'Students at English-medium, Cambridge and IB schools in Peru often learn their maths in English already. For them, strengthening it in English is natural, and the university route via the IB Diploma, below, may matter more than the ordinary exam.'
          ],
          rightH3: 'Where it does not',
          right: [
            'The humanities and reading sections test Spanish itself. The Universidad de Lima\'s guide says its reading area assesses spelling and the grammatical rules of Spanish, and PUCP emphasises reading comprehension. Those need Spanish practice, which we do not provide.',
            'We say this plainly because the alternative, implying that English classes prepare a student for a Spanish exam, would be untrue. We teach mathematics in English; a student\'s Spanish reading needs its own work.'
          ] },
        { kind: 'p', mt: true, html: 'Most exams also ban calculators: the Universidad de Lima lists them among prohibited items, and PUCP does not let candidates bring them onto campus. A student used to doing arithmetic on a calculator at school should practise by hand well before the exam. That is one area where our teaching transfers directly.' }
      ]
    },
    {
      id: 'guessing',
      eyebrow: 'Should you guess?',
      h2: 'When wrong answers lose points, should a student guess? A lesson in expected value',
      lede: 'The Universidad de Lima\'s guide says each correct answer earns points, each wrong answer subtracts points, and a blank changes nothing. Its guide does not say how many points a wrong answer costs, so the numbers below are invented for the lesson. The reasoning is what matters.',
      body: [
        { kind: 'two',
          leftH3: 'The question (ours)',
          left: [
            'A test question has five options, one correct. A correct answer earns 1 mark. Suppose a wrong answer loses some fraction of a mark: nothing, a quarter, or a half. If you have no idea, should you guess? And what changes if you can rule out one or two options?',
            'The tool is <strong>expected value</strong>: the average mark a guess would earn if you made the same guess many times. If it is positive, guessing gains marks on average; if negative, it loses them.'
          ],
          rightH3: 'The working',
          right: [
            'With k options left, a blind guess is right with probability 1/k and wrong with probability (k &minus; 1)/k. So the expected mark is 1/k &times; 1 &minus; (k &minus; 1)/k &times; penalty.',
            'With five options and a penalty of a quarter, that is 1/5 &minus; 4/5 &times; 1/4 = 0. A blind guess neither gains nor loses on average. Eliminate one option and it becomes 1/4 &minus; 3/4 &times; 1/4 = 1/16, a small gain.'
          ] },
        { kind: 'code', label: 'Version 1: expected marks, as exact fractions', lang: 'Python', code: V1, note: 'It prints <code>penalty 0 -&gt; [\'1/5\', \'1/4\', \'1/3\', \'1/2\']</code>, <code>penalty 1/4 -&gt; [\'0\', \'1/16\', \'1/6\', \'3/8\']</code> and <code>penalty 1/2 -&gt; [\'-1/5\', \'-1/8\', \'0\', \'1/4\']</code>, for 5, 4, 3 and 2 options left.' },
        { kind: 'code', label: 'Version 2: how many options must go before guessing pays?', lang: 'Python', code: V2, note: 'Run after Version 1, it prints <code>penalty 1/4 : guessing stops losing marks once 5 options remain</code> and <code>penalty 1/2 : guessing stops losing marks once 3 options remain</code>.' },
        { kind: 'p', mt: true, html: 'The lesson students should take away is not "always guess" or "never guess". It is that <strong>the size of the penalty decides how much you must know before a guess is worth it</strong>. With a heavy penalty, a guess only breaks even once two options are ruled out; with no penalty at all, as in ONEM\'s early stages, you should always answer. Before any exam, find out the scoring rule from the official guide and do this calculation once, calmly, instead of in the exam hall.' },
        { kind: 'p', html: 'We use <code>Fraction</code> rather than decimals for a reason we show students. Rewrite <code>expected</code> with ordinary floats (<code>p = 1 / options_left</code>) and the break-even case with three options and a penalty of a half comes out as <code>-5.551115123125783e-17</code>, a hair below zero. Version 2 then decides three options are not enough and prints 2 instead of 3: wrong advice from a rounding error. Exactness is part of the mathematics, not decoration.' }
      ]
    },
    {
      id: 'ib',
      tint: 'tint',
      eyebrow: 'IB and English-medium',
      h2: 'What can an IB or English-medium student do?',
      lede: 'Look carefully at the routes beyond the ordinary exam. Two of the four universities publish an admission route for holders of a Bachillerato diploma, which covers the IB Diploma.',
      body: [
        { kind: 'table', numCols: [], caption: 'Routes for IB Diploma holders, as the universities publish them', head: ['University', 'Route', 'What the guide says'], rows: [
          ['Universidad de Lima', 'Diploma de Bachillerato Internacional', 'Admits an applicant who has obtained the Diploma and applies within three years'],
          ['PUCP', 'Diploma de Bachillerato', 'Interviews until 28 January 2027 in the second call; Bachillerato courses can be recognised for up to 23 university credits']
        ] },
        { kind: 'source', html: 'Sources: Universidad de Lima, Guía del postulante 2027-1(A); PUCP, Guía del postulante; read on 8 November 2026. MINEDU reported on 17 April 2026 that 2,502 students in Peru obtained the IB Diploma in 2025. We found no IB route on the UNI or UNMSM pages we could read, which is not proof that none exists.' },
        { kind: 'two', mt: true,
          leftH3: 'For IB students',
          left: [
            'A strong Diploma, and especially a strong maths grade, can open a route that avoids the ordinary exam at these universities. The IB marks the Diploma and the university decides on the route; we play no part in either.',
            'Our Spanish-language page for an <a class="ag-inline-link" href="/tutor-ib-matematicas-en-ingles-peru">IB maths tutor in English</a> explains how we teach Analysis and Approaches and Applications and Interpretation to students in Peru.'
          ],
          rightH3: 'For English-medium students in general',
          right: [
            'The Universidad de Lima lists an English evaluation in its post-admission calendar, still marked "por confirmar" when we read it; English is clearly expected at university, even if the entrance exam is in Spanish.',
            'Students heading to a Peruvian degree often meet programming early, whatever their field. Our page on <a class="ag-inline-link" href="/cursos-de-programacion-para-universitarios-peru">programming courses for university students</a>, in Spanish, covers what helps alongside a degree.'
          ] }
      ]
    },
    {
      id: 'offer',
      eyebrow: 'What we offer',
      h2: 'What do Modern Age Coders classes do, and not do, for admission?',
      lede: 'We teach mathematics and reasoning, live and in English. We do not run an admission course, see papers in advance, or promise anyone a place.',
      body: [
        { kind: 'three', cells: [
          { h3: 'What we do', p: 'Teach algebra, functions, geometry, number and problem solving from the reason up, by hand, without calculators where the exams forbid them. Explain each method in English until the student can explain it back.' },
          { h3: 'What we do not do', p: 'Teach Spanish reading or grammar, history or the humanities sections, physics or chemistry for UNI\'s third paper, or anything specific to one university\'s secret format. Pre-university centres and academies do that work.' },
          { h3: 'What we will not say', p: 'That our classes get anyone into a university. Each university runs its own competition and decides its own results. A student who understands maths well has a better chance in any maths section, and that is all we claim.' }
        ] },
        { kind: 'p', mt: true, html: 'We are not connected with UNI, PUCP, the Universidad de Lima, UNMSM or any other university, or with any academia. Our mentors are based in India and teach in English only. If you are weighing coding as well as maths for the year after school, our <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">overview for Peru</a> lists every course by age.' }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Lima times',
      h2: 'What time would classes be in Peru?',
      lede: 'At an hour your family chooses. Peru runs on UTC minus 5 throughout the year, never changing its clocks, and India runs on UTC plus 5:30, so the gap is ten hours and thirty minutes all year. These rows are only conversions.',
      body: [
        { kind: 'table', numCols: [], caption: 'From Peru time to India time', head: ['Peru time', 'India time', 'How a 5° de secundaria student might use it'], rows: [
          ['06:00', '16:30', 'An early hour before school, in exam season'],
          ['07:00', '17:30', 'A Sunday timed practice at an exam-morning hour'],
          ['14:30', '01:00, next day', 'After a school half-day, by arrangement'],
          ['17:00', '03:30, next day', 'Late afternoon, one to one'],
          ['20:30', '07:00, next day', 'A short evening review']
        ] },
        { kind: 'source', html: 'Time zones from the IANA database: America/Lima, UTC minus 5, unchanged since Peru last used summer time in 1994; Asia/Kolkata, UTC plus 5:30. INACAL\'s official clock for Peru agreed when checked on 8 November 2026. We converted the hours ourselves.' },
        { kind: 'p', mt: true, html: 'Several admission exams start early: the Universidad de Lima\'s school-leaver exam began at 7:00 on a Sunday. Practising at that hour for a few weeks helps a student think clearly at the time it counts. A class needs a computer, a stable connection and paper for working by hand.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Our stages',
    h2: 'Maths readiness for admission-style papers: our stages',
    lede: 'These are our own stages, not a university\'s. They describe mathematical readiness, not admission chances.',
    table: { numCols: [], caption: 'Readiness stages (ours)', head: ['Stage', 'Usually', 'The student can', 'Why it matters'], rows: [
      ['1. Hand arithmetic', '3° de secundaria', 'Work fractions, powers and roots without a calculator', 'Most exams ban calculators'],
      ['2. Algebra', '3° and 4° de secundaria', 'Rearrange, factorise and solve without slips', 'Every maths section rests on it'],
      ['3. Functions and graphs', '4° de secundaria', 'Read and sketch linear, quadratic and exponential graphs', 'Common in aptitude questions'],
      ['4. Geometry and trigonometry', '4° and 5° de secundaria', 'Use angle, area and triangle facts in unfamiliar figures', 'Heavy in engineering exams'],
      ['5. Reasoning', '5° de secundaria', 'Spot a pattern, test a case, estimate before calculating', 'Rewards understanding over memory'],
      ['6. Exam judgement', 'Final months', 'Decide when to answer, skip or guess under a scoring rule', 'The expected-value lesson above']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 1 is often the surprise: students who use calculators daily lose time on arithmetic by hand.',
      'After each class you receive a short note on what was secure and what was not.'
    ] },
    right: { h3: 'For students', ps: [
      'Read the scoring rule first. It decides how you should answer.',
      'If you can explain a method in one sentence, you can rebuild it under pressure.'
    ] }
  },

  catalogue: {
    eyebrow: 'Further courses',
    h2: 'Nine more courses for the years around admission',
    lede: 'Live and in English, with one mentor throughout, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Mathematics', sub: '4° and 5° de secundaria', courses: [
        { code: 'UAE / MATHS / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and chance, increasingly common in aptitude sections.' },
        { code: 'UAE / MATHS / 02', slug: 'sat-math-prep-course', title: 'SAT maths', blurb: 'For students also applying to universities in the United States.' },
        { code: 'UAE / MATHS / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'For Diploma students considering the Bachillerato routes.' }
      ] },
      { num: 'II', h3: 'Coding before university', sub: 'Ages 15 to 18', courses: [
        { code: 'UAE / CODE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most first-year programming courses use.' },
        { code: 'UAE / CODE / 02', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP', blurb: 'Python certification, the exam MINEDU\'s pilot also uses.' },
        { code: 'UAE / CODE / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Objects and classes before an engineering degree.' }
      ] },
      { num: 'III', h3: 'First university years', sub: 'Ages 17 and up', courses: [
        { code: 'UAE / UNI / 01', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus and linear algebra for first-year students.' },
        { code: 'UAE / UNI / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data science', blurb: 'Statistics and linear algebra behind machine learning.' },
        { code: 'UAE / UNI / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Algorithms and data structures, from the basics.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'A week of maths reasoning classes from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before school', l: 'Early Lima hours fall in the Indian afternoon or evening.' },
      { time: 'Later in the day', l: 'Afternoon and evening slots too, matched to a mentor.' },
      { time: 'One to one', l: 'For a student working towards a specific exam date.' }
    ],
    cells: [
      { h3: 'By hand', p: 'Calculator-free practice, because most admission exams forbid them.' },
      { h3: 'Reasons first', p: 'Every method explained before it is drilled.' },
      { h3: 'Timed sets', p: 'Our own questions under time, then a calm review.' },
      { h3: 'Scoring rules', p: 'Practice under different marking schemes, including penalties.' },
      { h3: 'Parent updates', p: 'What is secure, what is not, what comes next.' },
      { h3: 'One mentor', p: 'The same teacher across the months that matter.' }
    ]
  },

  projectsH2: 'What our older students go on to build',
  projectsLede: 'Many of our maths students also code. A few projects by older students are below; more are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents and students on Google, quoted without changes.',

  fees: {
    h2: 'Fees for maths classes from Peru',
    lede: 'We charge in US dollars by card. The bank that issued your card converts each charge into soles at its own rate on the day, so the soles total can vary slightly from month to month.',
    free: ['One free class', 'A short calculator-free diagnostic', 'No card required'],
    group: ['Fifteen to twenty students of a similar level', 'One mentor across the months', 'Two live classes a week', 'Monthly; stop when you choose'],
    one: ['One student and one mentor', 'Built around the student\'s exam dates', 'Hours your family sets']
  },

  faq: {
    eyebrow: 'Questions families ask',
    h2: 'Peru\'s university admission exams: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our classes are live, online and taught only in English. The admission exams themselves are in Spanish, so a student also needs Spanish reading practice, which we do not teach. What we teach is the mathematics and reasoning, which are the same in either language.' },
      { q: 'Is there one national university entrance exam in Peru?', a: 'No. Each university runs its own admission competition. PUCP\'s guide quotes Ley 30220: admission is by public competition, at most once per cycle, with a knowledge exam as the main compulsory part. A student applying to several universities usually sits several exams.' },
      { q: 'What does the UNI exam cover?', a: 'UNI\'s ordinary exam is three in-person papers on a Monday, Wednesday and Friday: academic aptitude and humanities, then mathematics, then physics and chemistry. Its 2026-2 exam was held on 10, 12 and 14 August 2026. Applicants must have finished secundaria.' },
      { q: 'Does the Universidad de Lima take marks off for wrong answers?', a: 'Its 2027-1(A) guide says each correct answer earns points and each wrong answer subtracts them, while unanswered questions neither add nor subtract, and marking more than one option counts as wrong. The guide does not state the size of the penalty.' },
      { q: 'Can an IB Diploma help with admission?', a: 'At some universities. The Universidad de Lima has a route for IB Diploma holders who apply within three years, and PUCP has a Diploma de Bachillerato route and can recognise Bachillerato courses for up to 23 credits. Each university decides; check its current guide.' },
      { q: 'When are the San Marcos exams?', a: 'UNMSM\'s 2027-I exam had already been held by November 2026; its admission letters were handed out from 2 to 5 November 2026. Its 2027-I rules can only be downloaded after a bank payment, so we could not read them. Check the university\'s admission office for the next process.' },
      { q: 'Do your classes prepare students for a specific university?', a: 'No. We are not an academia preuniversitaria and we are not connected with any university. We teach the mathematics that every maths section relies on, in English, and we never promise admission.' },
      { q: 'When are classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru is on UTC minus 5 all year and India on UTC plus 5:30, so 17:00 in Lima is 03:30 the next morning in India.' },
      { q: 'Can calculators be used in these exams?', a: 'Not in the ones we could check. The Universidad de Lima lists calculators among prohibited items and PUCP does not allow them onto campus for written evaluations. Practising arithmetic by hand is therefore part of good preparation.' },
      { q: 'How are fees paid?', a: 'By card, in US dollars; your bank converts each charge to soles, so the amount can shift a little from month to month. The first class is free and needs no card details.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'More for students finishing school in Peru.',
    items: [
      { href: '/programacion-para-5to-de-secundaria', label: '5to de secundaria (Spanish)', p: 'Python and PCEP alongside the admission year.' },
      { href: '/tutor-ib-matematicas-en-ingles-peru', label: 'IB maths tutor (Spanish)', p: 'Diploma maths in English for students in Peru.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding in Lima', p: 'Coding in English for Lima families.' },
      { href: '/sat-math-tutoring-online', label: 'SAT maths tutoring', p: 'For students also applying abroad.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Why reasoning beats memorising.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A class, described step by step.' }
    ]
  },

  start: {
    h2: 'Book a free maths reasoning class from Peru',
    lede: 'In the free class a mentor works through a short calculator-free set of our questions with your child: algebra, a geometry figure and one reasoning problem. You then hear which stage they are at and what to strengthen first. We will not predict an admission result.',
    readFirst: 'If you prefer to read first, <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes our classes in detail, and our <a class="ag-inline-link" href="/courses">courses page</a> lists every syllabus.',
    note: 'All classes are live, on video, taught from India in English. Write to us on WhatsApp in English for a quick answer.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/ib-maths-tuition-online', label: 'IB maths tuition' },
        { href: '/sat-math-tutoring-online', label: 'SAT maths' },
        { href: '/group-vs-one-to-one-maths-tuition', label: 'Group or one to one' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru overview' },
        { href: '/profesor-particular-de-matematicas-online-peru', label: 'Online maths tutor' },
        { href: '/cursos-de-programacion-para-universitarios-peru', label: 'Coding for university' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Read the scoring rule before the first question'
  },

  personalityCss: `
.ag-root.ag-uae .ag-hero h1 { max-width: 20ch; letter-spacing: -0.01em; }
.ag-root.ag-uae .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-uae .ag-table td { font-size: 0.95em; }
.ag-root.ag-uae .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-uae .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Universidad Nacional de Ingeniería (Admisión 2026-2 page and FAQ); PUCP Guía del postulante (with Ley 30220 as quoted there); Universidad de Lima Guía del postulante 2027-1(A); UNMSM Oficina Central de Admisión (2027-I portal, results site, constancia schedule) and UNMSM statement on gob.pe; MINEDU press release of 17 April 2026; IANA tz database and INACAL. Read 8 and 9 November 2026.',
    localProject: 'An original lesson on negative marking: with five options and an invented penalty (0, 1/4 or 1/2 of a mark), Python with Fraction computes the expected mark of a guess with 5, 4, 3 or 2 options left (penalty 1/4 gives exactly 0 for a blind guess) and the number of options that must remain before guessing stops losing marks. Grounded in U de Lima\'s published rule that wrong answers subtract points. Lesson family: expected value under negative marking with exact fractions.',
    requiredMentions: ['penalty 1/4 : guessing stops losing marks once 5 options remain', 'penalty 1/2 : guessing stops losing marks once 3 options remain', 'the size of the penalty decides how much you must know before a guess is worth it', '16, 18 and 20 February (year not stated)', 'Admission letters handed out 2 to 5 November 2026', 'Sunday 15 November 2026, 7:00; results 19:00 the same day', 'Read the scoring rule before the first question', 'Rules for 2027-I need a bank payment receipt to download'],
    sources: [
      { claim: 'UNI ordinary exam: three in-person papers on Monday, Wednesday, Friday; subjects; 10, 12 and 14 August 2026; February dates without a year; CEPRE-UNI direct entry.', url: 'https://admision.uni.edu.pe/admision2026-2/index.html' },
      { claim: 'UNI: completed secundaria is the main requirement.', url: 'https://admision.uni.edu.pe/preguntas-frecuentes/index.html' },
      { claim: 'PUCP: Ley 30220 quote; 2027-1 starts March 2027; La Primera Opción 29 November; Evaluación del Talento 21 February; emphasis on reading comprehension and maths; Diploma de Bachillerato route, interviews to 28 January 2027, up to 23 credits; no calculators.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' },
      { claim: 'Universidad de Lima 2027-1(A): 5° de secundaria only; examen de escolares 15 November 2026 at 7:00, results 19:00; aptitude and knowledge; negative marking with no stated amount; areas; no calculators; English evaluation to be confirmed; classes start 29 March 2027; IB route within three years.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: 'UNMSM 2027-I: process page, results published, EBR and EBA modality, rules behind a payment receipt.', url: 'https://admision.unmsm.edu.pe/portal/admision2027-i/' },
      { claim: 'UNMSM 2027-I admission letters 2 to 5 November, latecomers 9 November; five areas; AI engineering, software engineering and computer science listed.', url: 'https://admision.unmsm.edu.pe/portal/wp-content/uploads/2026/10/CRONOGRAMA-DE-ENTREGA-2027-I.pdf' },
      { claim: 'UNMSM 2026 admission in two stages, 2026-I and 2026-II.', url: 'https://www.gob.pe/institucion/unmsm/informes-publicaciones/7042180-aclaracion-sobre-el-proceso-de-admision-2026-a-la-unmsm' },
      { claim: '2,502 IB Diplomas in Peru in 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' }
    ],
    rejectedClaims: [
      'Application fees in soles (UNI, Universidad de Lima): not printed (no typed currency figures).',
      'UNMSM 2027-I exam format, subjects and dates: rules behind a payment receipt; not read, not claimed.',
      'UNSA (Arequipa) admission: site unreachable on 8 November 2026; not retried; not covered.',
      'UPC admission: blocked (403) during research; not covered.',
      'The size of the Universidad de Lima wrong-answer penalty: not in its guide; the lesson\'s penalties are labelled invented.',
      'Admission rates, pass marks, rankings or any admission promise: none given.',
      'Any connection with UNI, PUCP, Universidad de Lima, UNMSM or an academia preuniversitaria: none, and the page says so.'
    ]
  }
};
