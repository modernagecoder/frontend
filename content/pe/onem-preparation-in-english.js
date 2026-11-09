// SHIP: market (en exam door, olympiad) | ONEM explained in English: who enters, the four stages, the scoring, prep in English | pigeonhole: boxes, a choice one short of the bound, and a Python count of every choice
'use strict';
// ONEM preparation in English (ag- English exam door, Peru cluster row PE036, P3, hubGroup exams).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Fees render in USD from the template only (priceSubject 'maths'); no soles, no typed figure; ONEM prize money not printed.
// No ONEM problem or solution is reproduced: every problem here is ours, labelled ours, answers checked in Python. Entry is
// through the school; we are not connected with MINEDU, any UGEL, DRE/GRE or Aceros Arequipa. No student is named.
// Search (KEYWORDS.md): "onem peru" (English), "onem 2026", "onem bases"; "onem 2027" has no suggestions yet (dead string).
// Audience: English-medium, IB, Cambridge and expat families in Peru, and students who study maths in English.
// Spine: what ONEM is, in English; whether a student at a private or international school can take part (Beta category,
// through the school); the four stages of 2026 with their papers and scoring; what qualifies a student for the next stage;
// reading a Spanish ONEM statement as an English-speaking student (our phrase table); an original pigeonhole lesson with
// Python; an original numeric-answer practice set; a year plan of ours for 2027 (bases not yet published); the Lima clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/onem-preparation-in-english/, copied
// from facts-school/src (fetched 8 November 2026); quotes grepped in the extracted text):
//  UGEL 06 Oficio Múltiple N.º 00164-2026-MINEDU/VMGI-DRELM-UGEL06/DIR-AGEBRE with the ONEM-AA 2026 bases (ugel06-onem-2026):
//    "XXII Olimpiada Nacional Escolar de Matemática"; "Miércoles 08 de julio Turno mañana: 8.00 – 10.00 am Turno tarde: 1.00 –
//    3.00 pm"; "180-2004-ED"; "convenio N.° 004-2025-MINEDU"; "Participan estudiantes varones y mujeres del 1.er al 5.o grado de
//    Educación Secundaria de la EBR de las II. EE. públicas y privadas"; "ALFA: Estudiantes de IIEE públicas BETA: Estudiantes
//    de IIEE privadas"; levels 1 (1° y 2°), 2 (3° y 4°), 3 (5°); "La ONEM-AA se realiza en cuatro etapas"; IE "clasifican dos
//    (2) estudiantes varones y dos (2) estudiantes mujeres que obtuvieron mayor puntaje en cada nivel"; "tres (3) equipos con un
//    total de doce (12) estudiantes"; UGEL "Clasifican a la etapa DRE, los estudiantes que ocupen el 1.er, 2.o, 3.er y 4.° lugar";
//    "veinticuatro (24) estudiantes"; IE and UGEL "Consta de diez (10) ítems de respuesta construida cerrada" (2 per competency
//    for four CNEB competencies + 2 combined), "duración de dos (2) horas"; DRE "ocho (8) ítems de respuesta construida cerrada y
//    dos (2) preguntas de respuesta abierta", two hours; Nacional "cuatro (4) ítems abiertos", "duración de cuatro (4) horas";
//    "El puntaje máximo de las evaluaciones, para todas las etapas y niveles, es de cien (100) puntos"; "las respuestas
//    correctas se califican con diez (10) puntos y las no respondidas o las incorrectamente respondidas se califican con cero
//    (0) puntos"; national "máximo puntaje para cada problema es de veinticinco (25) puntos"; ties "se deberá tener como
//    prioridad el tiempo de desarrollo de los participantes"; "No podrán clasificar a la siguiente etapa aquellos participantes
//    que hayan obtenido como resultado en la prueba cero (0) puntos"; "La etapa Nacional se desarrolla en la ciudad de Lima";
//    tests "no podrán ser reprogramadas"; registration "con el usuario y contraseña del SIAGIE".
//  El Peruano, 11 October 2026 (elperuano-onem2026): "la ONEM 2026 convocó a más de 1,7 millones de estudiantes de secundaria
//    de todo el país."; "Centro Vacacional Huampaní y reunió a 237 estudiantes"; "72 estudiantes con 12 medallas de oro, 24 de
//    plata y 36 de bronce".
//  GRE La Libertad (gre-lalibertad-onem): "177 797 estudiantes de Educación Secundaria ... pertenecientes a 936 instituciones
//    educativas públicas y privadas de la región".
//  ONEM 2027: no bases published as of 8 November 2026 (facts-school BLOCKED.md).
//  MINEDU Edades normativas: secundaria 1° to 5° = 12 to 16 años, counted at 31 March.
//  Time (timezone.tsv): America/Lima UTC-5; Asia/Kolkata UTC+5:30.
// Our own calculations: 10 items x 10 points = 100; 4 problems x 25 = 100; 3 levels x 4 = 12 per school; 12 + 24 + 36 = 72.
// Code (scratchpad pe/e6/ope/v1.py, v2.py, checks.py, python3 -I): v1 prints "Choose 4 : 70 ways, 16 with no pair summing to
// 9" and "Choose 5 : 56 ways, 0 with no pair summing to 9"; v1+v2 adds "Example: (1, 2, 3, 4)" and "Every safe choice takes one
// from each box: True". checks.py prints Q1 167, Q2 term 251 value 1003, Q3 27, Q4 rectangles 60 squares 20 non-square 40, Q5 25.
// Lesson family: pigeonhole; name the boxes, show a choice one short of the bound that avoids the event, and count every choice
// in Python to see both halves.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'from itertools import combinations',
  '',
  'numbers = range(1, 9)            # the whole numbers 1 to 8',
  '',
  'def has_pair(chosen):',
  '    # True if two chosen numbers add up to 9',
  '    return any(a + b == 9 for a, b in combinations(chosen, 2))',
  '',
  'for size in (4, 5):',
  '    picks = list(combinations(numbers, size))',
  '    safe = [p for p in picks if not has_pair(p)]',
  '    print("Choose", size, ":", len(picks), "ways,", len(safe), "with no pair summing to 9")'
].join('\n');

const V2 = [
  'safe4 = [p for p in combinations(numbers, 4) if not has_pair(p)]',
  'print("Example:", safe4[0])',
  'print("Every safe choice takes one from each box:",',
  '      all(len({min(n, 9 - n) for n in p}) == 4 for p in safe4))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'ONEM preparation in English' },
  slug: 'onem-preparation-in-english',
  code: 'ope',
  accent: '#76382C',
  accentRationale: 'ONEM preparation in English: a burnt umber #76382C, the colour of Arequipa steel after the forge (the olympiad carries the Aceros Arequipa name), dark enough to clear 4.5 on every paper tone (7.18 on #FBF8F2)',
  pageType: 'market',
  market: PE_EN,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'ONEM preparation in English',
  title: 'ONEM Preparation in English: Peru\'s Maths Olympiad, Live',
  description: 'ONEM preparation in English for secundaria students in Peru: the four stages, how papers are scored, who qualifies, and original problems, taught live online.',
  ogDescription: 'Peru\'s national school maths olympiad explained in English: the Alfa and Beta categories, the four stages of ONEM 2026, ten points per answer and no penalty for a wrong one, and an original pigeonhole lesson with a Python check.',
  twitterDescription: 'ONEM explained in English, with live online preparation for secundaria students in Peru at any hour.',
  pageName: 'ONEM Preparation in English',
  webPageDescription: 'An English guide to the Olimpiada Nacional Escolar de Matemática (ONEM) for students at English-medium, IB and private schools in Peru, built from the ONEM 2026 bases issued through UGEL 06, El Peruano and GRE La Libertad, with an original pigeonhole lesson and practice set.',
  courseDescription: 'Live online ONEM preparation taught in English for students in 1° to 5° de secundaria in Peru: number, algebra, data and geometry problems, closed-answer speed and written solutions for later stages, with original problems, in a group of fifteen to twenty or one to one, at a time the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'ONEM in English',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#entry', label: 'Who can enter' },
    { href: '#stages', label: 'The four stages' },
    { href: '#spanish', label: 'Reading Spanish' },
    { href: '#pigeonhole', label: 'Pigeonhole lesson' },
    { href: '#plan', label: 'A 2027 plan' }
  ],
  eyebrow: 'Peru &middot; ONEM &middot; 1° to 5° de secundaria',
  h1: 'ONEM preparation in English',
  lede: 'ONEM, the Olimpiada Nacional Escolar de Matemática, is Peru\'s national school maths olympiad and one of the largest school contests in the country. Its papers are in Spanish, but plenty of the students who sit it learn their maths in English, at bilingual, Cambridge and IB schools. This page explains ONEM in English: who can enter, how the 2026 stages and scoring worked, how to read a Spanish problem precisely, and how we prepare students with problems of our own.',
  secondaryCta: { href: '#pigeonhole', label: 'Try the pigeonhole lesson' },
  wa: 'Hello Modern Age Coders, my child is in secundaria in Peru and would like to prepare for ONEM with classes in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; every problem written by us',
  spec: [
    ['Olympiad', 'ONEM, Peru'],
    ['Grades', '1° to 5° de secundaria'],
    ['Paper language', 'Spanish'],
    ['Our classes', 'Live, online, in English'],
    ['Format', 'Fifteen to twenty, or one to one'],
    ['Hours', 'Chosen in Peru time']
  ],
  capsuleQ: 'What we offer',
  capsule: 'Modern Age Coders prepares secundaria students in Peru for ONEM, the national school maths olympiad, in live online classes, taught in English by India-based mentors. Students practise the four kinds of problem the ONEM papers draw on (number, patterns and algebra, data and chance, geometry) with problems we write ourselves, learn to answer fast and exactly for the early stages, and learn to write full solutions for the later ones. Classes run as a batch of fifteen to twenty students or one to one, timed to the family\'s day in Peru; entry to ONEM itself is through the school.',

  picks: {
    eyebrow: 'Courses for ONEM',
    h2: 'Three courses for ONEM students',
    lede: 'One for Nivel 1 students meeting contest maths for the first time, one for students who want to reach the stages that ask for written solutions, and one to secure the algebra that both depend on.',
    items: [
      { course: 'middle-school-math-competitions-course', code: 'OPE / 01', title: 'Middle School Competitions', note: 'For students in 1° and 2° de secundaria, ONEM Nivel 1. Contest problems with exact numerical answers, the format of the school stage, and the habit of checking an answer before moving on.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'OPE / 02', title: 'Olympiad Mathematics', note: 'For Nivel 2 and 3 students aiming beyond the UGEL stage. Number theory, counting, geometry and inequalities, with written solutions marked the way a jury would mark them.' },
      { course: 'algebra-foundations-masterclass', code: 'OPE / 03', title: 'Algebra Foundations', note: 'For a student who reasons well but makes slips in algebra. In a contest where a wrong number scores zero, secure manipulation is worth as many points as clever ideas.' }
    ]
  },

  sections: [
    {
      id: 'what',
      eyebrow: 'ONEM in English',
      h2: 'What is ONEM, in plain English?',
      lede: 'A national maths competition for every secundaria student in Peru\'s regular school system, run by the Ministry of Education (MINEDU) with the steel company Aceros Arequipa. 2026 was its twenty-second edition, the XXII ONEM.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Who runs it', p: 'MINEDU, which made the olympiad a permanent national contest by ministerial resolution in 2004, with Aceros Arequipa as its private partner under an agreement numbered 004-2025-MINEDU. Schools, local education offices (UGEL) and regional offices (DRE or GRE) run the early stages.' },
          { h3: 'How big it is', p: 'El Peruano, the official gazette, put ONEM 2026 at over 1.7 million participating secundaria students. In one region alone, La Libertad, 177,797 students from 936 schools sat the school stage.' },
          { h3: 'What it rewards', p: 'Problem solving rather than recall. The bases say the early papers use problems set in context, with special weight on analysis, heuristic strategies and mathematical procedures, and that later stages move towards international olympiad style.' }
        ] },
        { kind: 'p', mt: true, html: 'At the top, the 2026 national stage brought 237 students together at the Centro Vacacional Huampaní on 11 October 2026 (the bases place the national stage in Lima), and El Peruano reported 72 medals: 12 gold, 24 silver and 36 bronze. We are not connected with MINEDU, any UGEL or DRE, or Aceros Arequipa, and nothing on this page is official ONEM material. For the Spanish-language overview of how we teach maths in English, see our <a class="ag-inline-link" href="/profesor-de-matematicas-en-ingles-peru">profesor de matemáticas en inglés</a> page.' }
      ]
    },
    {
      id: 'entry',
      tint: 'tint',
      eyebrow: 'Who can enter',
      h2: 'Can a student at a private, bilingual or international school take part?',
      lede: 'Yes, if the school is a secundaria school in Peru\'s regular basic education (EBR) and takes part. ONEM 2026 was open to boys and girls in 1° to 5° de secundaria at public and private schools, in two categories and three levels.',
      body: [
        { kind: 'table', numCols: [], caption: 'ONEM 2026 categories and levels', head: ['', 'What it means', 'Normative age on 31 March (MINEDU)'], rows: [
          ['Category Alfa', 'Students at public schools', 'n/a'],
          ['Category Beta', 'Students at private schools', 'n/a'],
          ['Nivel 1', '1° and 2° de secundaria', '12 and 13'],
          ['Nivel 2', '3° and 4° de secundaria', '14 and 15'],
          ['Nivel 3', '5° de secundaria', '16']
        ] },
        { kind: 'source', html: 'Sources: ONEM-AA 2026 bases, issued to schools by UGEL 06 (MINEDU) in Oficio Múltiple 00164-2026, read on 8 November 2026; MINEDU, Edades normativas, which counts a student\'s normative age on 31 March of each school year.' },
        { kind: 'two', mt: true,
          leftH3: 'Entry runs through the school',
          left: [
            'A family cannot enter a child directly. The bases put registration in the hands of the school, which logs its students in MINEDU\'s competitions platform using its SIAGIE account, the ministry\'s school records system.',
            'So the first step for an interested student is a conversation with the maths teacher or head of department. If the school does not take part, there is no individual route into ONEM.'
          ],
          rightH3: 'Private schools compete with private schools',
          right: [
            'From the UGEL stage onwards, Alfa and Beta students qualify separately within their own category. A student at a private bilingual school in Lima therefore competes for Beta places, against other private-school students.',
            'Whether a particular Cambridge, IB or international school enters ONEM is the school\'s decision; we do not hold a list and name no school. Families at those schools often ask, so it is worth asking early in the year, before the school stage in July.'
          ] }
      ]
    },
    {
      id: 'stages',
      eyebrow: 'The four stages',
      h2: 'How do the ONEM stages and scoring work?',
      lede: 'Four stages, each harder than the last, all on paper and in person. Every paper in every stage is out of 100 points, but the way those points are earned changes halfway up.',
      body: [
        { kind: 'table', numCols: [], caption: 'ONEM 2026: the four stages and their papers', head: ['Stage', 'Who sits it', 'Paper', 'Time', 'Scoring'], rows: [
          ['School (IE)', 'Students the school registers; 8 July 2026, morning or afternoon shift', '10 closed-answer items: 2 per competency, 2 mixed', '2 hours', '10 points per correct answer, 0 for wrong or blank'],
          ['UGEL', 'Two boys and two girls per level from each mixed school', '10 closed-answer items, same structure', '2 hours', '10 points per correct answer'],
          ['DRE or GRE (regional)', 'Top four per level and category from each UGEL', '8 closed-answer items and 2 open problems', '2 hours', '10 points per item'],
          ['National, in Lima', 'The top students of each region, by quota', '4 open problems needing full working', '4 hours', 'Up to 25 points per problem']
        ] },
        { kind: 'source', html: 'Source: ONEM-AA 2026 bases (UGEL 06, Oficio Múltiple 00164-2026), sections on stages, papers and scoring, read on 8 November 2026. "Closed-answer" translates "respuesta construida cerrada": the student writes a single exact answer, with no options to choose from. The four competencies are the CNEB\'s: quantity; regularity, equivalence and change; data and uncertainty; and shape, movement and location. Single-sex schools send their top four per level instead of two boys and two girls.' },
        { kind: 'two', mt: true,
          leftH3: 'Three scoring rules that change strategy',
          left: [
            '<strong>A wrong answer costs nothing.</strong> At the school, UGEL and regional stages an incorrect or blank answer scores zero, never minus. Every item should have an answer written in, even a careful estimate.',
            '<strong>Time breaks ties.</strong> Where students tie on points in those stages, the bases give priority to the time taken; only if time also ties are two extra questions used. Finishing cleanly and early has real value.',
            '<strong>Zero stops you.</strong> A student who scores zero cannot go through to the next stage, whatever the quota.'
          ],
          rightH3: 'What changes at the top',
          right: [
            'The regional paper adds two open problems, described as similar in style to international olympiads, and the national paper is entirely open: four problems, four hours, marks for development and justification.',
            'A student who has only trained for quick exact answers meets a different sport at that point. Preparing well means building both skills from the start: fast accurate answers for the early rounds, and the patience to write a full solution for the later ones.'
          ] },
        { kind: 'p', mt: true, html: 'The bases also say the papers at the school, UGEL and regional stages are sat at the same time across the country and cannot be rearranged, so a family trip in early July needs to be planned around the school\'s date. The 2026 school stage was on Wednesday 8 July, with a morning shift from 8:00 to 10:00 and an afternoon shift from 13:00 to 15:00.' }
      ]
    },
    {
      id: 'spanish',
      tint: 'tint',
      eyebrow: 'Reading Spanish',
      h2: 'My child learns maths in English. Can they still do well in a Spanish paper?',
      lede: 'Yes, if they can read a Spanish statement precisely. The mathematics is identical; the risk is a single word that changes the answer. These are the words we drill with English-medium students.',
      body: [
        { kind: 'table', numCols: [], caption: 'Spanish contest words that change an answer (our classroom list)', head: ['In the Spanish statement', 'In English', 'The trap'], rows: [
          ['cifras', 'digits', 'Not "figures" in the sense of amounts; "¿cuántas cifras?" asks how many digits'],
          ['entero positivo', 'positive integer', 'Excludes zero; "entero no negativo" includes it'],
          ['residuo', 'remainder', 'Not "residue" as in leftovers in general'],
          ['a lo sumo, como máximo', 'at most', 'The boundary value is allowed'],
          ['MCD, MCM', 'HCF (or GCD), LCM', 'The letters do not match the English abbreviations'],
          ['capicúa', 'palindromic number', 'No everyday English word; 1221 is capicúa'],
          ['razón', 'ratio', 'Also means "reason" in ordinary Spanish'],
          ['consecutivos', 'consecutive', 'Consecutive even numbers differ by 2, not 1']
        ] },
        { kind: 'source', html: 'Our own list from teaching bilingual students. It is not an official ONEM glossary, and ONEM papers are set and marked in Spanish by MINEDU\'s contractors, not by us.' },
        { kind: 'p', mt: true, html: 'In class we put a Spanish statement and our English version side by side, and ask the student to find the word that matters before solving anything. Then we remove the English. Within a few weeks most students read the Spanish directly and stop translating, which is faster in an exam where time decides ties.' },
        { kind: 'p', html: 'There is a benefit the other way too. A student who has to explain a solution in English, slowly and in full sentences, writes clearer solutions in Spanish, and clear writing is what the open problems in the regional and national papers reward.' }
      ]
    },
    {
      id: 'pigeonhole',
      eyebrow: 'An olympiad idea',
      h2: 'What is the pigeonhole principle? A lesson with a Python check',
      lede: 'If more objects than boxes go into boxes, some box holds two. It sounds too obvious to be useful, yet it settles a whole family of contest problems, provided you choose the right boxes. We wrote the problem below.',
      body: [
        { kind: 'two',
          leftH3: 'The problem',
          left: [
            'Choose some of the whole numbers from 1 to 8. How many must you choose to be certain that two of them add up to 9?',
            'Most students guess and test a few choices. The olympiad answer needs two halves: a reason why a certain number always works, and an example showing that one fewer can fail.'
          ],
          rightH3: 'The boxes',
          right: [
            'Put the eight numbers into four boxes: {1, 8}, {2, 7}, {3, 6} and {4, 5}. Each box is a pair that adds up to 9. Choose five numbers and, with only four boxes, two must come from the same box, so they add up to 9.',
            'Choose four and you can dodge it: take 1, 2, 3 and 4, one from each box. So <strong>five is the answer: five always works, and four does not</strong>. Both halves are needed for full marks.'
          ] },
        { kind: 'code', label: 'Version 1: count every possible choice', lang: 'Python', code: V1, note: 'It prints <code>Choose 4 : 70 ways, 16 with no pair summing to 9</code> and <code>Choose 5 : 56 ways, 0 with no pair summing to 9</code>.' },
        { kind: 'code', label: 'Version 2: look inside the safe choices of four', lang: 'Python', code: V2, note: 'Run after Version 1, it prints <code>Example: (1, 2, 3, 4)</code> and <code>Every safe choice takes one from each box: True</code>.' },
        { kind: 'p', mt: true, html: 'The program shows both halves of the argument. Among the 56 ways to choose five, not one avoids a pair, which is the pigeonhole half. Among the 70 ways to choose four, exactly 16 avoid a pair, and Version 2 confirms that each of them takes one number from each box. That 16 is no accident: two choices per box, four boxes, 2 &times; 2 &times; 2 &times; 2 = 16.' },
        { kind: 'p', html: 'For ONEM the lesson is practical. A closed-answer item asking "the least number that guarantees..." wants the number 5, and the boxes are how you find it in under a minute. An open problem at the regional or national stage wants the boxes, the argument and the example of four written out, because a jury marks the reasoning. We teach students to produce both, and to use code only to check their thinking afterwards.' }
      ]
    },
    {
      id: 'practice',
      tint: 'tint',
      eyebrow: 'Practice set',
      h2: 'Five ONEM-style practice problems with exact answers (ours)',
      lede: 'We wrote these for this page in the closed-answer format of the early ONEM stages: each answer is a single number. They are not ONEM problems and are not taken from any ONEM paper. The first four answers were checked by a short Python program.',
      body: [
        { kind: 'ol', items: [
          '<strong>Quantity.</strong> How many whole numbers from 1 to 500 are divisible by 4 or by 6 (or both)?',
          '<strong>Regularity and change.</strong> The sequence 3, 7, 11, 15, ... goes up by 4 each time. Which term is the first one greater than 1,000? Give its position.',
          '<strong>Data and uncertainty.</strong> Two ordinary dice are rolled. Of the 36 equally likely outcomes, in how many is the product of the two numbers even?',
          '<strong>Shape and location.</strong> A grid of unit squares is 4 squares wide and 3 squares tall. How many rectangles, drawn along the grid lines, are not squares?',
          '<strong>Mixed, pigeonhole.</strong> What is the smallest number of students in a class that guarantees three of them were born in the same month?'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Answers',
          left: [
            '1. <strong>167</strong>: 125 multiples of 4, plus 83 of 6, minus the 41 multiples of 12 counted twice. Python printed <code>Q1 167</code>.',
            '2. <strong>251</strong>: the nth term is 4n &minus; 1, and 4n &minus; 1 &gt; 1,000 first holds at n = 251, where the term is 1,003. Python printed <code>Q2 term 251 value 1003</code>.',
            '3. <strong>27</strong>: the product is odd only when both dice are odd, 3 &times; 3 = 9 outcomes, so 36 &minus; 9 = 27 are even.'
          ],
          rightH3: 'Answers, continued',
          right: [
            '4. <strong>40</strong>: choose 2 of the 5 vertical lines and 2 of the 4 horizontal ones, 10 &times; 6 = 60 rectangles, of which 12 + 6 + 2 = 20 are squares. Python printed <code>Q4 rectangles 60 squares 20 non-square 40</code>.',
            '5. <strong>25</strong>: twelve months are the boxes. With 24 students, two per month avoids any three sharing; the 25th student must make a third in some month.',
            'Notice which problems a careful student could answer by listing cases and which need an idea. That judgement is what saves minutes, and minutes break ties.'
          ] }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'A 2027 plan',
      h2: 'When should a student start preparing for ONEM 2027?',
      lede: 'Early in the school year. The ONEM 2027 bases are not published yet, so the dates below are not promises; they follow the 2026 pattern, when the school stage was in early July and the national stage in October.',
      body: [
        { kind: 'table', numCols: [], caption: 'A preparation plan for ONEM 2027 (ours, built on the 2026 calendar)', head: ['Months of 2027', 'Focus', 'What the student practises'], rows: [
          ['January and February', 'Foundations, during the summer break', 'Algebra fluency, divisibility, counting by cases'],
          ['March and April', 'The four competencies', 'Two problems a day from each area, exact answers'],
          ['May and June', 'Speed for the school stage', 'Full ten-item papers of ours in two hours, then review'],
          ['July', 'School stage, if 2027 follows 2026', 'Light practice, rest before the paper, nothing new'],
          ['August and September', 'Towards the UGEL and regional stages', 'First open problems written in full'],
          ['October onwards', 'National-style problems', 'Four-hour sessions with four problems']
        ] },
        { kind: 'source', html: 'Our plan. The 2026 dates it rests on (school stage 8 July 2026, national stage 11 October 2026) come from the ONEM 2026 bases and El Peruano. MINEDU had not published ONEM 2027 bases when we checked on 8 November 2026; the real 2027 dates will be in those bases and in the school\'s own notice.' },
        { kind: 'p', mt: true, html: 'Peru\'s summer break, January and February, is a good time to start, because the student has time for the slow foundation work that term time squeezes out. Our English page on <a class="ag-inline-link" href="/peru-summer-holiday-coding-classes-online">summer holiday classes in Peru</a> explains how live classes fit that break. For students in 5° de secundaria, ONEM sits in the same year as university admission, which our <a class="ag-inline-link" href="/programacion-para-5to-de-secundaria">5to de secundaria page</a> discusses in Spanish.' }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Lima times',
      h2: 'What time would ONEM classes be in Peru?',
      lede: 'Any hour you choose. Peru keeps UTC minus 5 all year, with no daylight saving, and India keeps UTC plus 5:30, which puts India ten and a half hours ahead on every day of the year. These rows are conversions only.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time against India time', head: ['Peru time', 'India time', 'A use some students make of it'], rows: [
          ['07:00', '17:30', 'Ten minutes of mental arithmetic, then a short problem'],
          ['08:00', '18:30', 'A two-hour practice paper at the ONEM morning-shift time'],
          ['10:30', '21:00', 'A weekend review of the week\'s mistakes'],
          ['13:00', '23:30', 'A paper at the afternoon-shift time'],
          ['18:30', '05:00, next day', 'An evening one-to-one before a stage']
        ] },
        { kind: 'source', html: 'Clock data: the IANA tz database lists America/Lima at UTC minus 5 with its last summer-time rule in 1994, and Asia/Kolkata at UTC plus 5:30; Peru\'s INACAL time service agreed on 8 November 2026. We did the conversions.' },
        { kind: 'p', mt: true, html: 'We like to hold timed practice papers at the hour of the real shift, 8:00 or 13:00 in Lima, so the student\'s concentration is used to that time of day. Because neither country moves its clocks, an hour agreed in March is still the same hour in July.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages of our own',
    h2: 'How an ONEM student progresses with us',
    lede: 'These are our stages, not ONEM levels. A mentor uses them to choose the next topic, and a parent can read them to see plainly what has changed.',
    table: { numCols: [], caption: 'ONEM preparation stages (ours)', head: ['Stage', 'Usually', 'The student can', 'Useful for'], rows: [
      ['1. Exact', '1° de secundaria', 'Give exact answers without slips under time', 'School stage, Nivel 1'],
      ['2. Four areas', '1° and 2° de secundaria', 'Solve problems from all four competencies', 'School and UGEL stages'],
      ['3. Bilingual reader', 'Any year', 'Read a Spanish statement and spot the word that matters', 'Every stage'],
      ['4. Idea finder', '3° and 4° de secundaria', 'Name the trick: boxes, parity, cases, symmetry', 'UGEL and regional stages'],
      ['5. Writer', '3° to 5° de secundaria', 'Write a solution a jury can follow, with both halves', 'Regional open problems'],
      ['6. Four-hour stamina', '4° and 5° de secundaria', 'Work four open problems in one sitting', 'National stage']
    ] },
    left: { h3: 'For parents', ps: [
      'A student can reach stage 3 at any age, and it is often the quickest win for English-medium students.',
      'After each class we note what was solved, where time went, and the next target.'
    ] },
    right: { h3: 'For students', ps: [
      'Always write an answer: a wrong one scores zero, the same as a blank.',
      'For "the least number that guarantees", find the boxes, then the example one short.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for secundaria mathematicians',
    lede: 'Each is live and in English, with one mentor throughout, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Building the base', sub: 'Ages 11 to 14', courses: [
        { code: 'OPE / BASE / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'Pre-algebra and geometry, the ground of ONEM Nivel 1.' },
        { code: 'OPE / BASE / 02', slug: 'amc-8-math-competition-prep-course', title: 'AMC 8 preparation', blurb: 'A second contest for younger students, in English.' },
        { code: 'OPE / BASE / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Write small programs that test a conjecture, for 10 to 15 year olds.' }
      ] },
      { num: 'II', h3: 'Going further', sub: 'Ages 14 to 18', courses: [
        { code: 'OPE / FURTHER / 01', slug: 'amc-10-math-competition-prep-course', title: 'AMC 10 preparation', blurb: 'An American contest whose multiple choice sharpens ONEM speed.' },
        { code: 'OPE / FURTHER / 02', slug: 'statistics-probability-maths-course', title: 'Probability and statistics', blurb: 'The data and chance competency, in depth.' },
        { code: 'OPE / FURTHER / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Algorithms for students also eyeing the computing olympiad.' }
      ] },
      { num: 'III', h3: 'After 5° de secundaria', sub: 'Ages 16 and up', courses: [
        { code: 'OPE / AFTER / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A Level Maths', blurb: 'Pure maths, mechanics and statistics for students studying abroad.' },
        { code: 'OPE / AFTER / 02', slug: 'sat-math-prep-course', title: 'SAT maths', blurb: 'For students applying to universities in the United States.' },
        { code: 'OPE / AFTER / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Programming from scratch, a natural partner for olympiad thinking.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'A week of ONEM preparation from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Peru mornings', l: 'Evenings in India, a natural time for a timed paper.' },
      { time: 'Afternoons and evenings', l: 'Also possible; tell us the hour and we will find a mentor for it.' },
      { time: 'One to one', l: 'For a student with a stage date coming up.' }
    ],
    cells: [
      { h3: 'Original papers', p: 'Ten-item papers we write in the ONEM format.' },
      { h3: 'Spanish and English', p: 'Statements read in both, so nothing is lost.' },
      { h3: 'Exact answers', p: 'Arithmetic checked until slips stop costing points.' },
      { h3: 'Written solutions', p: 'Open problems marked line by line.' },
      { h3: 'Levels kept apart', p: 'Nivel 1 and Nivel 3 students learn in different groups.' },
      { h3: 'Parent notes', p: 'What improved, what slipped, what is next.' }
    ]
  },

  projectsH2: 'Where our students take mathematics next',
  projectsLede: 'Some of our older students turn mathematical ideas into software. A few of their projects are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Reviews from parents and students on Google, as they wrote them.',

  fees: {
    h2: 'Fees for ONEM preparation from Peru',
    lede: 'Our fees are in US dollars, charged to a card. Your bank turns each charge into soles at its own daily rate, so the soles amount can move a little each month.',
    free: ['A first class free of charge', 'A short paper of our problems to see where your child stands', 'No card needed'],
    group: ['Fifteen to twenty students at the same ONEM level', 'The same mentor every week', 'Two live classes a week', 'Monthly, cancel any month'],
    one: ['One student, one mentor', 'Paced to the school\'s stage dates', 'Your choice of hours']
  },

  faq: {
    eyebrow: 'Families ask',
    h2: 'ONEM preparation in English: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our classes are live, online and taught only in English, by mentors who speak clearly and adjust to each student\'s pace. ONEM papers are in Spanish, so we also train students to read Spanish statements precisely, but the teaching itself is always in English.' },
      { q: 'Can you register my child for ONEM?', a: 'No. Registration is done by the school through MINEDU\'s systems, and families cannot enter directly. We are not connected with MINEDU, any UGEL or DRE, or Aceros Arequipa. Ask your child\'s school whether it takes part, ideally early in the school year.' },
      { q: 'Can students at private or international schools take part?', a: 'ONEM 2026 was open to students in 1° to 5° de secundaria at public and private schools in Peru\'s regular basic education. Private-school students compete in the Beta category. Whether a given school enters is up to that school.' },
      { q: 'Is there a penalty for a wrong answer?', a: 'Not in the 2026 school, UGEL and regional papers: a correct answer scored 10 points and a wrong or blank one scored 0. So students should answer every item. At the national stage, solutions are marked out of 25 points per problem.' },
      { q: 'Do you use past ONEM problems?', a: 'None. Our mentors write all the problems we use, the ones on this page included. Official ONEM material belongs to MINEDU and the regions, and students should read it where they publish it.' },
      { q: 'When is ONEM 2027?', a: 'Not announced yet: MINEDU had not published the 2027 bases when we checked in November 2026. In 2026 the school stage was on 8 July and the national stage on 11 October. Your school will receive the official dates.' },
      { q: 'When are classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Peru is UTC minus 5 all year and India UTC plus 5:30, so 08:00 in Lima is 18:30 in India.' },
      { q: 'Will my child learn real problem solving or shortcuts?', a: 'Real problem solving. Shortcuts help with closed-answer items only until the problems change, and the later ONEM stages are marked on written reasoning. We teach the idea, the proof and then the fast version, never the fast version alone, and no AI tool solves problems for students.' },
      { q: 'Do you promise a medal or a place in the next stage?', a: 'No. Results depend on the student, the paper and the quotas at each stage, which we do not control. We promise careful teaching and honest feedback. A finished course earns our own certificate of completion; ONEM awards are MINEDU\'s alone.' },
      { q: 'How are fees paid?', a: 'By card in US dollars; your bank converts each payment into soles, so the amount can differ slightly between months. The first class costs nothing and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also on this site',
    h2: 'Related pages',
    lede: 'Further reading for ONEM students and their parents.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub', p: 'Coding, AI and maths for Peru, sorted by age.' },
      { href: '/profesor-particular-de-matematicas-online-peru', label: 'Online maths tutor (Spanish)', p: 'Secundaria maths support in Peru, explained in Spanish.' },
      { href: '/math-olympiad-amc-tutoring', label: 'Olympiad and AMC tutoring', p: 'Our general guide to maths contests.' },
      { href: '/ioi-olympiad-informatics-training', label: 'Informatics olympiad', p: 'The computing contests, up to the IOI.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking first', p: 'Why we teach reasoning before tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One of our live classes, described.' }
    ]
  },

  start: {
    h2: 'Book a free ONEM class',
    lede: 'In the free class your child tries a few of our ONEM-style problems with a mentor, including one in Spanish. The mentor notes how fast and how exactly they work, how they read the statement, and whether they can explain an answer, and afterwards recommends where to begin, which course, and whether a batch or one-to-one suits.',
    readFirst: 'To read more first, <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a class, and the <a class="ag-inline-link" href="/courses">course pages</a> set out each syllabus.',
    note: 'Classes are taught live over video, from India, in English. On WhatsApp, write to us in English for a quick reply.',
    formNote: 'Free, with no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/math-olympiad-amc-tutoring', label: 'Olympiad and AMC' },
        { href: '/ioi-olympiad-informatics-training', label: 'IOI training' },
        { href: '/coding-olympiad-medal-track', label: 'Coding olympiad track' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru overview' },
        { href: '/profesor-de-matematicas-en-ingles-peru', label: 'Maths in English' },
        { href: '/programacion-para-5to-de-secundaria', label: '5to de secundaria' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Find the boxes, then the example one short'
  },

  personalityCss: `
.ag-root.ag-ope .ag-hero h1 { max-width: 14ch; letter-spacing: -0.01em; }
.ag-root.ag-ope .ag-capsule { border-left-width: 6px; }
.ag-root.ag-ope .ag-table caption { text-align: left; }
.ag-root.ag-ope .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-ope .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU ONEM-AA 2026 bases issued through UGEL 06 (Oficio Múltiple 00164-2026); El Peruano, 11 October 2026; GRE La Libertad ONEM 2026 note; MINEDU Edades normativas; IANA tz database and INACAL official time. Read 8 and 9 November 2026.',
    localProject: 'An original pigeonhole lesson: from 1 to 8, choosing 5 numbers always gives two that sum to 9 (boxes {1,8}, {2,7}, {3,6}, {4,5}); choosing 4 can avoid it. Python counts all choices (70 of size 4, 16 safe; 56 of size 5, 0 safe) and confirms every safe choice takes one from each box. Plus five original closed-answer practice problems with checked answers. Lesson family: pigeonhole with the extremal example one short of the bound.',
    requiredMentions: ['Choose 4 : 70 ways, 16 with no pair summing to 9', 'Choose 5 : 56 ways, 0 with no pair summing to 9', 'Every safe choice takes one from each box: True', 'five is the answer: five always works, and four does not', 'A wrong answer costs nothing.', 'Time breaks ties.', 'Zero stops you.', 'Find the boxes, then the example one short', 'Q4 rectangles 60 squares 20 non-square 40'],
    sources: [
      { claim: 'ONEM 2026: XXII edition; RM 180-2004-ED; Aceros Arequipa agreement; EBR secundaria public and private; Alfa and Beta; three levels; four stages; paper structure, durations and scoring; ties by time; zero cannot qualify; national stage in Lima; school stage 8 July 2026 in two shifts; registration through SIAGIE.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'ONEM 2026 drew over 1.7 million students; national stage at Huampaní with 237 students; 72 medals (12, 24, 36).', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'La Libertad: 177,797 students from 936 schools at the ONEM 2026 school stage.', url: 'https://www.gob.pe/institucion/regionlalibertad-gre/noticias/1416180-mas-de-177-mil-escolares-de-la-libertad-participan-en-la-olimpiada-nacional-escolar-de-matematicas-2026-onem' },
      { claim: 'Normative age counted on 31 March; secundaria grades at ages 12 to 16.', url: 'https://www.gob.pe/institucion/minedu/informes-publicaciones/2742610-edades-normativas' },
      { claim: 'Peru UTC-5 all year, no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any ONEM problem or solution: none reproduced; all problems are ours.',
      'ONEM prize money: not printed (no typed currency figures).',
      'ONEM 2027 dates: not published; the plan is labelled ours and conditional.',
      'Which international or bilingual schools enter ONEM: not known; no school named.',
      'The conflicting GRE La Libertad plan of a 14 to 18 September national stage: superseded by El Peruano\'s report of 11 October 2026; not used.',
      'Any affiliation with MINEDU, a UGEL, DRE/GRE or Aceros Arequipa, and any medal promise: none, and the page says so.'
    ]
  }
};
