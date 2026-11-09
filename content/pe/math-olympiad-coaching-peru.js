// SHIP: market (en exam door, olympiad) | maths olympiads in Peru: the national contests, the selection exams and the IMO record | invariants: a parity that never changes proves "impossible"; a search confirms it on a small case
'use strict';
// Math olympiad coaching Peru (ag- English exam door, Peru cluster row PE035, P3, hubGroup exams).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Fees render in USD from the template only (priceSubject 'maths'); no soles, no typed figure (the Ibero selection fee and
// UNI cash prizes are NOT printed). No organiser's problem or solution is reproduced: every problem here is ours, labelled
// ours, answers checked in Python. No student or coach is named. We are not connected with MINEDU, Aceros Arequipa, Binaria
// Matemática, UNI, UTEC, PUCP or the Sociedad Matemática Peruana.
// Search (KEYWORDS.md): "math olympiad peru" (English), "onem 2026", "canguro matemático perú".
// Spine: who coaching is for; the olympiads open to students in Peru (organiser, who, 2026 dates, entry); how Peru's
// international teams are chosen (Comisión de Olimpiadas de la Sociedad Matemática Peruana, two four-hour exams); Peru's
// IMO record 2022 to 2026 and all-time; an original lesson on invariants with Python; an original practice set; thinking
// not copying (OPI bans generative AI); the Lima clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/math-olympiad-coaching-peru/, fetched
// 9 November 2026 with curl -sL -A "Mozilla/5.0" unless stated; quotes grepped in the raw text):
//  IMO official site, Peru page https://www.imo-official.org/countries/PER/ (imo-per.html/.txt): "1987 First Participation",
//    "33 Participations", "Official Contact Comisión de Olimpiadas de la Sociedad Matemática Peruana", "7 Gold 48 Silver 67
//    Bronze 36 Hon. Mentions 0 Perfect Scores"; national MO site link selectivos-peru.blogspot.com.
//  IMO team results for Peru https://www.imo-official.org/results/team/country/PER/ (imo-per-team.html, parsed cell by cell):
//    2026 rank 27, 137 points, G 0 S 3 B 2 HM 1; 2025 rank 27, 158, G 2 S 1 B 2 HM 1; 2024 rank 29, 122, G 0 S 2 B 3 HM 1;
//    2023 rank 32, 133, G 0 S 2 B 3 HM 0; 2022 rank 19, 173, G 0 S 3 B 3 HM 0. Problem PDF languages list includes Spanish
//    and English (imo-home.html settings list).
//  Comisión de Olimpiadas de la SMP, selectivos-peru.blogspot.com (selectivos.html/.txt): Ibero 2026 "se realizará del 6 al
//    13 de setiembre en la ciudad de Buenos Aires, Argentina"; "seleccionar a los 4 alumnos de la delegación nacional constará
//    de dos exámenes presenciales , que se realizarán los días viernes 28 de agosto a las 2:00pm y sábado 29 de agosto a las
//    8:30am"; "Cada examen consta de 3 preguntas y tendrá una duración de 4 horas."; "Puede participar cualquier alumno nacido
//    del 1 de enero de 2008 al 31 de diciembre de 2013"; "Está permitida la participación de alumnos que hayan terminado el
//    colegio"; "un máximo de dos veces"; "el Tutor de la Institución Educativa correspondiente (o en su defecto, un Padre de
//    Familia) debe enviar un correo"; PAGMO 2026 "se realizará del 18 al 24 de octubre en la ciudad de Bucaramanga, Colombia";
//    "que contará con 4 alumnas"; preliminary "lunes 28 de setiembre"; "La participación es gratuita"; "nacida del 1 de enero de
//    2010 al 31 de diciembre de 2014"; "La participación virtual sólo es posible para alumnas de Instituciones Educativas fuera
//    de Lima Metropolitana o Callao"; "El examen de preselección consta de 4 preguntas y tendrá una duración de 3 horas.";
//    training "vía Zoom".
//  ONEM 2026: UGEL 06 Oficio Múltiple 00164-2026 (facts-school src/ugel06-onem-2026): "Miércoles 08 de julio"; "NIVEL 1: 1° y
//    2° grado de educación secundaria NIVEL 2: 3° y 4° grado de educación secundaria NIVEL 3: 5° grado de educación
//    secundaria"; "A partir de la etapa DRE, las evaluaciones se ajustan progresivamente a los parámetros de evaluación de los
//    concursos internacionales"; "Aceros Arequipa". El Peruano (src/elperuano-onem2026): "la ONEM 2026 convocó a más de 1,7
//    millones de estudiantes de secundaria de todo el país."; "La etapa nacional se desarrolló hoy, domingo, en el Centro
//    Vacacional Huampaní y reunió a 237 estudiantes" (11 October 2026).
//  Canguro Matemático (canmatperu.com JS bundle, copied from the sibling raw folder, canmat_index.js, and fechasClave.png):
//    "Abierto a estudiantes de 3° de primaria a 5° de secundaria"; "no es posible la inscripción individual"; "75 minutos";
//    "Opción múltiple (5 alternativas)"; "A partir de 2016, la Pontificia Universidad Católica del Perú cedió la organización
//    del concurso a Binaria Matemática"; 2026 Etapa 1 test 16 and 17 April.
//  UNI-Olimpiada Nacional de Matemática 2026 (facts-school src/uni-olimpiada): "en el marco de la conmemoración de sus 150 años";
//    "Apertura de Inscripciones: 15 de marzo de 2026", "Cierre de Inscripciones: 15 de abril de 2026"; Fase I 03 de mayo,
//    Fase II 31 de mayo, "Fase III: Gran Final Nacional 28 de junio"; school level "Estudiantes de 4° grado" and "5° grado".
//  UTEC OPI (facts-school src/opi-home, opi-reglamento-2025): "abiertas gratuitamente a todos los estudiantes de secundaria del
//    país"; OPI 2026 final "11 de Abril (Fase 2 - Final)"; 2025 rules ban generative AI (LaTeX accents, paraphrased).
//  Time (timezone.tsv): America/Lima UTC-5 all year; Asia/Kolkata UTC+5:30.
// Our own calculations: 7 + 48 + 67 = 122 IMO medals; 4 hours / 3 problems = 80 minutes a problem (both labelled ours).
// Code (scratchpad pe/e6/mao/v1.py, v2.py, checks.py, python3 -I): v1 prints "Patterns reachable, switching 2: 64",
// "All off reachable? False", "Lamps on, in every reachable pattern: [1, 3, 5, 7]"; v1+v2 adds "Patterns reachable,
// switching 3: 128", "All off reachable? True". checks.py: "P1 possible last numbers: [1, 3, 5, 7, 9] zero? False",
// "P2 graphs with every degree odd: 0", "P3 ways to leave no square empty: 0".
// Lesson family: invariants; find a quantity a move cannot change (parity), use it to prove impossibility, and let an
// exhaustive search confirm the small case while the proof covers every size.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'from itertools import combinations',
  '',
  'N = 7                       # seven lamps, all switched on',
  'start = (1,) * N',
  '',
  'def reachable(k):',
  '    # every pattern we can reach if each move switches exactly k lamps',
  '    seen = {start}',
  '    todo = [start]',
  '    while todo:',
  '        lamps = todo.pop()',
  '        for group in combinations(range(N), k):',
  '            new = list(lamps)',
  '            for i in group:',
  '                new[i] = 1 - new[i]',
  '            new = tuple(new)',
  '            if new not in seen:',
  '                seen.add(new)',
  '                todo.append(new)',
  '    return seen',
  '',
  'two = reachable(2)',
  'print("Patterns reachable, switching 2:", len(two))',
  'print("All off reachable?", (0,) * N in two)',
  'print("Lamps on, in every reachable pattern:", sorted({sum(p) for p in two}))'
].join('\n');

const V2 = [
  'three = reachable(3)',
  'print("Patterns reachable, switching 3:", len(three))',
  'print("All off reachable?", (0,) * N in three)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'Maths olympiad coaching' },
  slug: 'math-olympiad-coaching-peru',
  code: 'mao',
  accent: '#721405',
  accentRationale: 'Maths olympiad coaching, Peru: a dark garnet #721405, the colour of a medal ribbon in deep shade, kept dark so it reads as ink on every paper tone (9.38 on #FBF8F2)',
  pageType: 'market',
  market: PE_EN,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Maths olympiad coaching in Peru',
  title: 'Maths Olympiad Coaching in Peru: Live Online, in English',
  description: 'Maths olympiad coaching for students in Peru: ONEM, Canguro and the national selection exams explained, original problems, live online in English.',
  ogDescription: 'Which maths olympiads students in Peru can enter, how Peru picks its Ibero, PAGMO and IMO teams, Peru\'s IMO results from 2022 to 2026, and an original lesson on invariants with a Python search that confirms the proof.',
  twitterDescription: 'Live maths olympiad coaching in English for students in Peru: proof, invariants and original problems, at any hour.',
  pageName: 'Maths Olympiad Coaching in Peru',
  webPageDescription: 'A guide for olympiad students and parents in Peru, built from the IMO official site, the Comisión de Olimpiadas de la Sociedad Matemática Peruana, the MINEDU ONEM 2026 bases and El Peruano, the Canguro Matemático Peru site, UNI and UTEC, with an original lesson on invariants.',
  courseDescription: 'Live online maths olympiad coaching taught in English for students in Peru from primaria to 5° de secundaria: problem solving, proof, number theory, combinatorics, geometry and algebra, with original problems, in a group of fifteen to twenty or one to one, at a time the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Maths olympiad coaching',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#contests', label: 'Olympiads in Peru' },
    { href: '#selection', label: 'National teams' },
    { href: '#imo', label: 'Peru at the IMO' },
    { href: '#invariants', label: 'Invariants lesson' },
    { href: '#times', label: 'Lima times' }
  ],
  eyebrow: 'Peru &middot; Maths olympiads &middot; Primaria to 5° de secundaria',
  h1: 'Maths olympiad coaching in Peru',
  lede: 'Peru takes olympiad mathematics seriously: the national school olympiad drew more than 1.7 million secundaria students in 2026, and Peru has sent teams to the International Mathematical Olympiad since 1987. This page maps the contests a student in Peru can enter, explains how the national teams are chosen, shows Peru\'s recent IMO results, and teaches one olympiad idea properly, with a proof and a Python check.',
  secondaryCta: { href: '#invariants', label: 'Try the invariants lesson' },
  wa: 'Hello Modern Age Coders, my child in Peru enjoys olympiad maths and would like coaching in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; original problems, written by us',
  spec: [
    ['For', 'Primaria to 5° de secundaria'],
    ['Contests', 'ONEM, Canguro, selection exams'],
    ['Focus', 'Proof and problem solving'],
    ['Taught in', 'English, live online'],
    ['Format', 'Fifteen to twenty, or one to one'],
    ['Hours', 'Any hour in Peru time']
  ],
  capsuleQ: 'The answer first',
  capsule: 'Modern Age Coders gives maths olympiad coaching to students in Peru: live online classes taught in English by mentors based in India, for children from primaria up to 5° de secundaria. Students learn the ideas olympiads reward, such as invariants, counting, number theory and written proof, with problems we write ourselves, never an organiser\'s. Coaching suits students heading for ONEM, the Canguro Matemático or the national selection exams, in a group of fifteen to twenty or one to one, at an hour that suits the family in Peru time.',

  picks: {
    eyebrow: 'Olympiad courses',
    h2: 'Three courses for olympiad students in Peru',
    lede: 'One for younger contest students, one that runs from school competitions to proof, and one that turns the same reasoning into code.',
    items: [
      { course: 'middle-school-math-competitions-course', code: 'MAO / 01', title: 'Middle School Competitions', note: 'For students of about 10 to 14, the age of Canguro and ONEM Nivel 1. Multiple-choice speed and accuracy first, then the habit of explaining an answer, using contest-style problems we write.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'MAO / 02', title: 'Olympiad Mathematics', note: 'From contest problems to full written proofs: number theory, combinatorics, geometry and inequalities. Built for students aiming at the later ONEM stages and the national selection exams.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'MAO / 03', title: 'Problem Solving and DSA', note: 'For teenagers who also want the computing olympiad. Logic, data structures and algorithms in code, the same reasoning that OPI rewards, taught without generative AI.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who it is for',
      h2: 'Who is maths olympiad coaching for in Peru?',
      lede: 'For students who already like mathematics and want more than school gives them. It is not catch-up tutoring: the problems are harder, slower and stranger than classwork, and that is the point.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Curious younger students', p: 'Children in upper primaria who finish class exercises fast and enjoy puzzles. They meet contest problems that need an idea rather than a formula, and learn to try small cases before guessing.' },
          { h3: 'ONEM and Canguro regulars', p: 'Secundaria students who already compete through their school and want to go further than the first round. They need proof, not just answers, because the later ONEM stages ask for full solutions.' },
          { h3: 'Selection-exam candidates', p: 'Strong students considering the national selection exams for international teams. Those exams give a few hard problems and hours to solve them, which calls for stamina and clear writing as much as knowledge.' }
        ] },
        { kind: 'p', mt: true, html: 'Coaching is in English. For a student in an English-medium or IB school that is natural; for a student whose contests are in Spanish it adds practice in a second language, while the ideas stay the same. We are honest that national contests in Peru are set in Spanish, so we also make sure students can read a statement in Spanish precisely. If you would like the Spanish-language overview of maths taught in English, read our page on a <a class="ag-inline-link" href="/profesor-de-matematicas-en-ingles-peru">profesor de matemáticas en inglés</a>; for a 12 year old weighing ONEM against the computing olympiad, our Spanish page on <a class="ag-inline-link" href="/programacion-para-ninos-de-12-anos">programming at 12</a> compares them.' }
      ]
    },
    {
      id: 'contests',
      tint: 'tint',
      eyebrow: 'Olympiads in Peru',
      h2: 'Which maths olympiads can students in Peru enter?',
      lede: 'Several, run by different organisers, with different ages and entry rules. The table lists the main ones with their 2026 dates as each organiser published them; check the organiser\'s own page for 2027, because none of the 2027 dates below are published yet.',
      body: [
        { kind: 'table', numCols: [], caption: 'Maths and computing olympiads open to students in Peru, 2026', head: ['Olympiad', 'Organiser', 'Who', '2026 dates', 'How students enter'], rows: [
          ['ONEM, national school maths olympiad', 'MINEDU, with Aceros Arequipa', '1° to 5° de secundaria, three levels', 'School stage 8 July; national stage 11 October', 'Through the school'],
          ['Canguro Matemático', 'Binaria Matemática', '3° de primaria to 5° de secundaria', 'First stage 16 and 17 April', 'Through the school; no individual entry'],
          ['UNI-Olimpiada Nacional de Matemática', 'Universidad Nacional de Ingeniería', '4° and 5° de secundaria, plus early-year university students', 'Phases 3 May and 31 May; final 28 June', 'Registration 15 March to 15 April'],
          ['Selection exams for Ibero 2026', 'Comisión de Olimpiadas, Sociedad Matemática Peruana', 'Born 2008 to 2013', 'Two exams, 28 and 29 August', 'School tutor or, failing that, a parent'],
          ['Selection for PAGMO 2026 (girls)', 'Comisión de Olimpiadas, Sociedad Matemática Peruana', 'Girls born 2010 to 2014', 'Preliminary 28 September; finals 2 and 3 October', 'School tutor or a parent; free'],
          ['OPI, computing olympiad', 'UTEC', 'All secundaria students, free', 'Final 11 April', 'Registration on the OPI site']
        ] },
        { kind: 'source', html: 'Sources, all read on 9 November 2026: UGEL 06 (MINEDU) Oficio Múltiple 00164-2026 and El Peruano, 11 October 2026 (ONEM); canmatperu.com, the site the Kangaroo association lists for Peru (Canguro); admision.uni.edu.pe (UNI-Olimpiada, held for UNI\'s 150th anniversary); selectivos-peru.blogspot.com, the national olympiad site linked from the IMO\'s Peru page (selection exams); opi.utec.edu.pe (OPI). We are not connected with any of these organisers.' },
        { kind: 'two', mt: true,
          leftH3: 'The school route: ONEM and Canguro',
          left: [
            'ONEM is the largest. El Peruano reported that ONEM 2026 drew more than 1.7 million secundaria students from the first stage, and that 237 reached the national stage at the Huampaní centre on 11 October 2026. It runs from the school through UGEL and regional stages to the national final, at three levels by grade.',
            'The ONEM bases add a detail coaches should notice: from the regional stage onwards, the papers move step by step towards the standards of international competitions. The first round rewards accuracy; the later rounds reward proof.'
          ],
          rightH3: 'The open route: selection exams',
          right: [
            'The national teams for the Ibero-American olympiad and the girls\' Pan-American olympiad, PAGMO, are chosen by the Comisión de Olimpiadas of the Sociedad Matemática Peruana, which the IMO lists as Peru\'s official contact. Its rules let a school tutor, or a parent where the school does not, register a student.',
            'Canguro, by contrast, is school-only: its Peru site says the first stage runs inside each school, so individual entry is not possible. If your child\'s school does not take part in a contest, ask the school first.'
          ] }
      ]
    },
    {
      id: 'selection',
      eyebrow: 'National teams',
      h2: 'How are Peru\'s olympiad teams chosen?',
      lede: 'By exams that look nothing like school tests: a few problems, several hours, full written solutions. The commission\'s own 2026 announcements describe the process for two teams.',
      body: [
        { kind: 'table', numCols: [], caption: 'Selection in 2026 for two international teams, as published by the commission', head: ['Team', 'Competition', 'Who may sit', 'Selection format', 'Team size'], rows: [
          ['Ibero 2026', '41st Ibero-American Mathematical Olympiad, Buenos Aires, 6 to 13 September 2026', 'Students born 1 January 2008 to 31 December 2013; school leavers allowed', 'Two in-person exams, each 3 problems in 4 hours', '4 students'],
          ['PAGMO 2026', 'Pan-American Girls\' Mathematical Olympiad, Bucaramanga, 18 to 24 October 2026', 'Secundaria girls born 1 January 2010 to 31 December 2014', 'A preliminary of 4 problems in 3 hours, then two final exams', '4 students']
        ] },
        { kind: 'source', html: 'Source: Comisión de Olimpiadas de la Sociedad Matemática Peruana, announcements of 24 August and 22 September 2026 on selectivos-peru.blogspot.com, read on 9 November 2026. Both competitions limit a student to representing their country at most twice. The PAGMO preliminary could be sat online only by girls at schools outside Lima Metropolitana and Callao.' },
        { kind: 'two', mt: true,
          leftH3: 'What four hours for three problems means',
          left: [
            'By our division that is eighty minutes a problem, and a single complete solution can be worth more than three half-ideas. Students who have only done timed multiple choice tend to rush, find a pattern, and write the pattern down as if it were a proof.',
            'Coaching for this format is mostly about patience: trying small cases on paper, naming what stays the same, writing the argument so a stranger could check it, and knowing when to switch problems.'
          ],
          rightH3: 'What we do and do not do',
          right: [
            'We teach the mathematics and the habits these exams reward, in English, with our own problems. We do not run selection exams, see papers in advance, or have any role in choosing teams, and we make no promise about any result.',
            'Students who reach the later stages often enjoy programming as well, and Peru runs a separate computing olympiad for them. Our <a class="ag-inline-link" href="/coding-olympiad-medal-track">coding olympiad track</a> covers that side.'
          ] }
      ]
    },
    {
      id: 'imo',
      tint: 'tint',
      eyebrow: 'Peru at the IMO',
      h2: 'How has Peru done at the International Mathematical Olympiad?',
      lede: 'Consistently well for a country of its size. The IMO\'s own records show Peru first took part in 1987 and has taken part 33 times, winning 7 gold, 48 silver and 67 bronze medals and 36 honourable mentions.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4, 5, 6], caption: 'Peru\'s team at the IMO, 2022 to 2026', head: ['Year', 'Team rank', 'Team points', 'Gold', 'Silver', 'Bronze', 'Honourable mentions'], rows: [
          ['2026', '27', '137', '0', '3', '2', '1'],
          ['2025', '27', '158', '2', '1', '2', '1'],
          ['2024', '29', '122', '0', '2', '3', '1'],
          ['2023', '32', '133', '0', '2', '3', '0'],
          ['2022', '19', '173', '0', '3', '3', '0']
        ] },
        { kind: 'source', html: 'Source: International Mathematical Olympiad, official site, Peru country page and Peru team results, read on 9 November 2026. All-time totals are as the IMO prints them; the sum of 122 medals is our own addition of its three medal counts. An empty medal cell on the IMO site is shown here as 0.' },
        { kind: 'p', mt: true, html: 'Two things in that table matter to a family. First, 2025 brought two gold medals, so the very top of the competition is within reach of students trained in Peru. Second, the points vary a lot between years, from 122 to 173, because six problems set by an international jury suit some teams better than others. A medal is not a guaranteed outcome of any coaching, and anyone promising one is selling something.' },
        { kind: 'p', html: 'IMO problems are published in dozens of languages, Spanish and English among them, so language is not the barrier. Depth is. A student who has learnt to prove things in one language can prove them in another; a student who has learnt only to recognise question types cannot prove them in either.' }
      ]
    },
    {
      id: 'invariants',
      eyebrow: 'An olympiad idea',
      h2: 'What is an invariant? A lesson with lamps, a proof and Python',
      lede: 'An invariant is something a move can never change. It is one of the first ideas we teach olympiad students, because it turns "I tried for an hour and could not do it" into "it cannot be done, and here is why". The problem below is ours.',
      body: [
        { kind: 'two',
          leftH3: 'The problem',
          left: [
            'Seven lamps stand in a row, all switched on. A move consists of choosing exactly two lamps and flipping both: on becomes off, off becomes on. Can you reach a position where all seven lamps are off?',
            'Students start by trying, which is right. After a few minutes they notice that however they play, some lamp is always left on. Noticing is not proving, though.'
          ],
          rightH3: 'The proof',
          right: [
            'Look at the number of lamps that are on. A move changes it by +2, 0 or &minus;2, so its parity never changes. It starts at 7, an odd number, so it is odd after every move. All lamps off would mean 0 lamps on, an even number, so <strong>no sequence of moves can reach it</strong>.',
            'Three sentences, and they work for seven lamps or seven thousand. That is the strength of an invariant: it does not care how many moves you try.'
          ] },
        { kind: 'code', label: 'Version 1: search every pattern reachable by flipping two', lang: 'Python', code: V1, note: 'It prints <code>Patterns reachable, switching 2: 64</code>, <code>All off reachable? False</code> and <code>Lamps on, in every reachable pattern: [1, 3, 5, 7]</code>. Exactly half of the 128 possible patterns, and only those with an odd number of lamps on.' },
        { kind: 'code', label: 'Version 2: change the rule to flipping three', lang: 'Python', code: V2, note: 'Run after Version 1, it prints <code>Patterns reachable, switching 3: 128</code> and <code>All off reachable? True</code>. A move of three changes the count by an odd number, so parity is no longer kept, and every pattern can be reached.' },
        { kind: 'p', mt: true, html: 'We use the program to check the proof, never to replace it. The search visits all 128 patterns of seven lamps in a blink, but for a thousand lamps there are more patterns than atoms in the observable universe and no computer could list them. The parity argument covers every size at once. In an olympiad paper, <strong>the search would earn nothing and the proof would earn everything</strong>; in a classroom, the search is how a student learns to trust the proof.' },
        { kind: 'p', html: 'Version 2 teaches the second half of the idea: an invariant belongs to a rule, not to a puzzle. Change the move and the invariant may vanish. Good olympiad students test their invariant against the exact wording of the problem before they rely on it.' }
      ]
    },
    {
      id: 'practice',
      tint: 'tint',
      eyebrow: 'Practice set',
      h2: 'Three invariant problems to try (ours, with answers)',
      lede: 'All three problems were written by us for this page; none is taken from ONEM, Canguro or any other contest. Each answer was checked by an exhaustive search in Python, and each has a short proof that does not need a computer.',
      body: [
        { kind: 'ol', items: [
          '<strong>Differences on a board.</strong> The numbers 1 to 10 are written on a board. A move erases two numbers and writes their difference (larger minus smaller). After nine moves one number is left. Can it be 0?',
          '<strong>Odd handshakes.</strong> At a meeting of five students, could every student shake hands with an odd number of the others? (Two people shake hands at most once.)',
          '<strong>Beetles on a grid.</strong> A 3 by 3 grid has a beetle on each of its nine squares. At a whistle every beetle moves to a square sharing a side with its own. Must some square end up empty?'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Answers',
          left: [
            '1. No. The sum 1 + 2 + ... + 10 = 55 is odd, and replacing a and b with their difference keeps the parity of the total, because a + b and a &minus; b are both even or both odd. The last number is odd. Our search printed <code>P1 possible last numbers: [1, 3, 5, 7, 9] zero? False</code>.',
            '2. No. Each handshake adds 2 to the total of everyone\'s counts, so that total is even; five odd numbers add up to an odd number. Our search over all 1,024 ways to shake hands printed <code>P2 graphs with every degree odd: 0</code>.'
          ],
          rightH3: 'Answer 3, and why colouring helps',
          right: [
            '3. Yes. Colour the grid like a chessboard: five squares of one colour, four of the other. Every beetle changes colour when it moves, so the five beetles on the first colour all land on the four squares of the second. Two must share, and a square is left empty.',
            'Our search over every possible set of moves printed <code>P3 ways to leave no square empty: 0</code>. Colouring is an invariant in disguise: it names what a move always does, here "change colour", and counts what that forces.'
          ] }
      ]
    },
    {
      id: 'think',
      eyebrow: 'Thinking, not copying',
      h2: 'Will coaching teach my child to think, or just to recognise tricks?',
      lede: 'To think. Tricks run out on the first unfamiliar problem; reasoning does not. We teach students to explore, conjecture, prove and write, in that order.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Small cases first', p: 'Before anything clever, try two lamps, three lamps, four. Patterns found by hand are the raw material of every proof, and they are found faster than students expect.' },
          { h3: 'Written proof', p: 'Every solution is written in full sentences that another student could check. In English, which is good practice for the many students heading to universities where proofs are written that way.' },
          { h3: 'No AI answers', p: 'Olympiads test the student, so coaching does too. Peru\'s own computing olympiad, OPI, run by UTEC and free for all secundaria students, bans generative AI for solving problems in its 2025 rules, and we work the same way.' }
        ] },
        { kind: 'p', mt: true, html: 'Children under 18 do not use adult AI chatbot accounts in our classes; tools such as Claude are for adults only, and ChatGPT needs a parent\'s permission under 18. Our problems come from our mentors, and organisers\' past papers stay on the organisers\' own sites, where students can read them as the organisers intend.' }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Lima times',
      h2: 'When would coaching happen in Peru time?',
      lede: 'At whatever hour your family picks. Peru stays at UTC minus 5 through the whole year and India at UTC plus 5:30, so India runs 10 hours 30 minutes ahead on every date. The rows show a few conversions; they are not a schedule.',
      body: [
        { kind: 'table', numCols: [], caption: 'Converting Peru time to India time', head: ['Peru time', 'India time', 'When a student might use it'], rows: [
          ['07:30', '18:00', 'A problem session before school'],
          ['09:00', '19:30', 'A long Saturday proof workshop'],
          ['13:00', '23:30', 'A lunchtime check of written solutions'],
          ['17:30', '04:00, next day', 'After school, one to one'],
          ['19:30', '06:00, next day', 'An evening mock with three problems']
        ] },
        { kind: 'source', html: 'Source: IANA time zone database (America/Lima, UTC minus 5, no summer time since 1994; Asia/Kolkata, UTC plus 5:30) and INACAL\'s official Peru time, checked on 8 November 2026. The conversions are our own.' },
        { kind: 'p', mt: true, html: 'The selection exams described above run for three or four hours. Before them we can arrange a long one-to-one session at the same Lima hour as the exam, so the student practises sustained work at the time of day it will happen. Neither country moves its clocks, so the hour you agree in April is still the hour in August.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From puzzles to proofs: our olympiad stages',
    lede: 'These stages are ours. They are not contest levels and they promise no result; they tell us what to teach next and tell parents how far a student has come.',
    table: { numCols: [], caption: 'Olympiad stages (ours)', head: ['Stage', 'Typical school years', 'The student can', 'Contest it prepares for'], rows: [
      ['1. Explorer', '3° to 6° de primaria', 'Try small cases and spot a pattern', 'Canguro, early levels'],
      ['2. Counter', '1° and 2° de secundaria', 'Count cases without missing or repeating any', 'Canguro, ONEM Nivel 1'],
      ['3. Explainer', '2° to 4° de secundaria', 'Say why an answer is right, not only what it is', 'ONEM school and UGEL stages'],
      ['4. Prover', '3° to 5° de secundaria', 'Write a complete proof, including impossibility', 'ONEM regional and national stages'],
      ['5. Finisher', '4° and 5° de secundaria', 'Hold one problem for an hour and write it cleanly', 'National selection exams'],
      ['6. Specialist', 'Final school years', 'Choose tools across number theory, geometry, combinatorics and algebra', 'International-style papers']
    ] },
    left: { h3: 'For parents', ps: [
      'A student can move between stages quickly or slowly; what matters is that each stage is secure before the next.',
      'Our notes after class describe problems attempted and ideas used, not just scores.'
    ] },
    right: { h3: 'For students', ps: [
      'When you are stuck, ask what a move cannot change.',
      'A pattern in ten cases is a guess. A reason is a proof.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for strong mathematicians in Peru',
    lede: 'All live and in English, with the same mentor each week, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Younger problem solvers', sub: 'Ages 8 to 13', courses: [
        { code: 'MAO / YOUNG / 01', slug: 'amc-8-math-competition-prep-course', title: 'AMC 8 preparation', blurb: 'An international contest for grades 5 to 8, good training for Canguro.' },
        { code: 'MAO / YOUNG / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense and quick reasoning, ages 5 to 10.' },
        { code: 'MAO / YOUNG / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns and counting explored in Python, ages 10 to 15.' }
      ] },
      { num: 'II', h3: 'Contest years', sub: 'Ages 13 to 18', courses: [
        { code: 'MAO / CONTEST / 01', slug: 'amc-10-math-competition-prep-course', title: 'AMC 10 preparation', blurb: 'Algebra, geometry and counting at contest speed.' },
        { code: 'MAO / CONTEST / 02', slug: 'amc-12-math-competition-prep-course', title: 'AMC 12 preparation', blurb: 'Harder algebra and the road to the AIME.' },
        { code: 'MAO / CONTEST / 03', slug: 'statistics-probability-maths-course', title: 'Probability and statistics', blurb: 'Chance done properly, from counting to distributions.' }
      ] },
      { num: 'III', h3: 'School exams in English', sub: 'IGCSE and IB years', courses: [
        { code: 'MAO / SCHOOL / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE Maths', blurb: 'Core, Extended and Additional Mathematics.' },
        { code: 'MAO / SCHOOL / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'SL and HL, with internal assessment coaching.' },
        { code: 'MAO / SCHOOL / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Algebra through calculus, for any school system.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How coaching runs',
    h2: 'A week of olympiad coaching from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings in Peru', l: 'Evening in India, an easy hour for a long problem session.' },
      { time: 'After school', l: 'Later Lima hours work as well; name the time and we find the mentor.' },
      { time: 'One to one', l: 'For a student preparing a selection exam on a fixed date.' }
    ],
    cells: [
      { h3: 'Problems we write', p: 'Fresh problems each week, so nothing has been seen before.' },
      { h3: 'Solutions read aloud', p: 'Students explain their proof; the mentor asks where it could break.' },
      { h3: 'Written feedback', p: 'Every proof comes back with the gap marked, not just a score.' },
      { h3: 'Spanish statements too', p: 'Practice reading problems in Spanish exactly, for national contests.' },
      { h3: 'Age-matched groups', p: 'Primaria explorers and secundaria provers never share a class.' },
      { h3: 'One mentor', p: 'The same person each week, who knows the student\'s habits.' }
    ]
  },

  projectsH2: 'Where mathematics leads in code',
  projectsLede: 'Many of our strongest olympiad students also build programs, and their projects often start from a mathematical idea. Here are a few; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Parents and students in their own words, from Google, unedited.',

  fees: {
    h2: 'Fees for olympiad coaching from Peru',
    lede: 'We price in US dollars and take payment by card. Your bank converts every payment into soles at its rate for the day, so the amount shown on your statement can shift slightly from month to month.',
    free: ['A first class at no cost', 'Two problems and a conversation about how your child thinks', 'No card asked for'],
    group: ['Fifteen to twenty students at a similar stage', 'One mentor throughout', 'Two live classes a week', 'Monthly, and you can stop any month'],
    one: ['One student, one mentor', 'Problems chosen for that student\'s next step', 'Hours that suit your family']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'Maths olympiad coaching in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All coaching is live, online and in English. Mentors speak clearly and at the student\'s pace, and they write every key term on screen. Because national contests in Peru are in Spanish, we also practise reading problems in Spanish carefully, but the teaching itself is in English.' },
      { q: 'Can my child enter ONEM or the Canguro through you?', a: 'No. ONEM and the Canguro Matemático are entered through the school; the Canguro site says individual entry is not possible. We are not connected with MINEDU, Aceros Arequipa or Binaria Matemática. We prepare students for the mathematics; the school handles entry.' },
      { q: 'How does a student get into Peru\'s international teams?', a: 'Through selection exams run by the Comisión de Olimpiadas of the Sociedad Matemática Peruana. In 2026 the Ibero team was chosen from two exams of three problems in four hours each, and a school tutor or a parent could register a student. Check the commission\'s site for each year\'s rules.' },
      { q: 'Do you use past ONEM or Canguro problems?', a: 'No. Every problem we teach with is written by our mentors. Organisers publish their own past papers on their own sites, and students are welcome to read them there; we do not copy or reproduce them.' },
      { q: 'What age should my child start?', a: 'Around 8 to 10 for puzzle-style contests such as the early Canguro levels, which start in 3° de primaria. Proof-based coaching suits most students from about 12 or 13. A strong student can start at any point; the stages table shows where they would begin.' },
      { q: 'When would classes be in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru is on UTC minus 5 all year and India on UTC plus 5:30, so 09:00 in Lima is 19:30 in India.' },
      { q: 'Can you promise a medal?', a: 'No, and nobody honestly can. Results depend on the student, the year\'s problems and the other competitors. Peru\'s IMO team points ranged from 122 to 173 between 2022 and 2026. What we promise is careful teaching of the ideas that olympiads reward.' },
      { q: 'Does coding help with olympiad maths?', a: 'It helps with checking, as the lamps lesson shows, and it opens the computing olympiad, OPI, which UTEC runs free for secundaria students. It never replaces proof. Students who enjoy both often take our problem-solving and algorithms course alongside olympiad maths.' },
      { q: 'Are you connected with any university or olympiad body?', a: 'No. We are an independent online school with mentors in India, not connected with MINEDU, UNI, PUCP, UTEC, the Sociedad Matemática Peruana or the IMO. Students who finish a course receive our own certificate of completion, not a contest award.' },
      { q: 'How are fees paid?', a: 'By card, in US dollars; your bank converts the charge into soles, so the figure on your statement can vary a little between months. The first class is free, and booking it needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'More for competition students and their families.',
    items: [
      { href: '/math-olympiad-amc-tutoring', label: 'Olympiad and AMC tutoring', p: 'Our wider guide to maths contests.' },
      { href: '/ioi-olympiad-informatics-training', label: 'Informatics olympiad training', p: 'The computing side, up to the IOI.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru', p: 'Every course we teach for Peru.' },
      { href: '/programacion-para-ninos-de-12-anos', label: 'Coding at 12 (Spanish)', p: 'For 1° de secundaria, with ONEM and OPI in view.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Why reasoning comes before tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free olympiad class from Peru',
    lede: 'In the free class your child works on two of our problems with a mentor, one to try and one to explain. The mentor watches how they explore and how they argue, then suggests a stage, a course, and whether group or one-to-one coaching would suit them.',
    readFirst: 'Before booking, you may like <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, which shows a class from the inside, and the <a class="ag-inline-link" href="/courses">full course list</a> with each course\'s outline.',
    note: 'Every class is live over video with a mentor in India, and in English. WhatsApp us in English for the fastest reply.',
    formNote: 'No cost, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/math-olympiad-amc-tutoring', label: 'Olympiad and AMC' },
        { href: '/coding-olympiad-medal-track', label: 'Coding olympiad track' },
        { href: '/ioi-olympiad-informatics-training', label: 'IOI training' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru overview' },
        { href: '/profesor-de-matematicas-en-ingles-peru', label: 'Maths in English' },
        { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Coding for teenagers' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Ask what a move cannot change'
  },

  personalityCss: `
.ag-root.ag-mao .ag-hero h1 { max-width: 15ch; letter-spacing: -0.02em; }
.ag-root.ag-mao .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-mao .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-mao .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-mao .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'IMO official site (Peru country page and team results); Comisión de Olimpiadas de la Sociedad Matemática Peruana (selectivos-peru.blogspot.com, Ibero 2026 and PAGMO 2026 announcements); MINEDU ONEM 2026 bases via UGEL 06 and El Peruano; canmatperu.com (Canguro Matemático Peru); UNI-Olimpiada Nacional de Matemática 2026; UTEC OPI; IANA tz database and INACAL. Read 8 and 9 November 2026.',
    localProject: 'An original invariants lesson: seven lamps all on, each move flips exactly two; parity of lamps on never changes, so all-off is impossible. A Python search confirms it (64 reachable patterns, all with 1, 3, 5 or 7 lamps on); flipping three instead reaches all 128. Plus three original invariant problems with proofs and exhaustive Python checks. Lesson family: invariants (parity, colouring) prove impossibility; search confirms the small case.',
    requiredMentions: ['Patterns reachable, switching 2: 64', 'All off reachable? False', 'Patterns reachable, switching 3: 128', 'P1 possible last numbers: [1, 3, 5, 7, 9] zero? False', 'P3 ways to leave no square empty: 0', 'the search would earn nothing and the proof would earn everything', 'Comisión de Olimpiadas of the Sociedad Matemática Peruana', 'Ask what a move cannot change', 'first took part in 1987 and has taken part 33 times'],
    sources: [
      { claim: 'Peru at the IMO: first participation 1987, 33 participations, 7 gold, 48 silver, 67 bronze, 36 HM; official contact the Comisión de Olimpiadas de la SMP.', url: 'https://www.imo-official.org/countries/PER/' },
      { claim: 'Peru IMO team rank, points and medals, 2022 to 2026.', url: 'https://www.imo-official.org/results/team/country/PER/' },
      { claim: 'Ibero 2026 and PAGMO 2026 selection: dates, eligibility, exam format, team of 4, registration by school tutor or parent.', url: 'https://selectivos-peru.blogspot.com/' },
      { claim: 'ONEM 2026 levels, school stage 8 July 2026, later stages move towards international standards.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'ONEM 2026: over 1.7 million students; national stage 11 October 2026 at Huampaní with 237 students.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'Canguro Matemático Peru: 3° primaria to 5° secundaria, school entry only, Binaria Matemática since 2016.', url: 'https://canmatperu.com/' },
      { claim: 'UNI-Olimpiada Nacional de Matemática 2026 phases and registration window.', url: 'https://admision.uni.edu.pe/uni-olimpiadas-matematicas/index.html' },
      { claim: 'OPI organised by UTEC, free for secundaria; 2026 final 11 April; generative AI banned in 2025 rules.', url: 'https://opi.utec.edu.pe/' }
    ],
    rejectedClaims: [
      'Names of students, team leaders or coaches: not printed (private individuals).',
      'Any ONEM, Canguro, selection or IMO problem or solution: none reproduced; every problem is ours.',
      'Cash prizes and registration fees in soles (ONEM, UNI, Ibero selection): not printed (no typed currency figures).',
      'That ONEM results feed the national team selection: not stated by the commission\'s 2026 announcements; not claimed.',
      'Any connection with MINEDU, Aceros Arequipa, Binaria, UNI, PUCP, UTEC, the SMP or the IMO: none, and the page says so.',
      'Medal or result promises: none made.'
    ]
  }
};
