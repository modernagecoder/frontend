// SHIP: market | Best online maths tutor in Peru: diagnose first, make the learner explain, prove | checking cases is not proof: n*n + n + 41 is prime for n = 0 to 39 and fails at 40
'use strict';
// Best online maths tutor in Peru (ag- English guide, Peru cluster row PE063, P3 best, hubGroup guides). priceSubject 'maths'.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md (section 3.9: superlative in title and meta only, plain keyword
// H1, a section that defines what "best" means with evidence, never rank or price a named competitor); writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in
// english". Owner 2026-11-08: timing flexible, any time. Fees render in USD from the template only (maths row).
// Searches (KEYWORDS.md sections 1 and 6, maths row): "best online maths tutor", "english speaking maths tutor online peru",
// "math olympiad peru", "onem peru"; questions "How much is a maths tutor?", "Best online maths tutor?", "¿Cómo preparar a mi
// hijo para la ONEM?".
// Spine (different from the Spanish siblings precio-profesor-particular-matematicas-peru (hours, divmod) and
// profesor-particular-de-matematicas-online-peru): "best" defined as five habits a family can observe in a tutor (diagnoses
// before teaching, makes the learner explain, works across all four CNEB competencies, separates checking from proving,
// reports progress in work not hours); the CNEB's four maths competencies as the primary-source table with a diagnostic
// question of ours beside each; how much maths school gives (CNEB hours, 45-minute periods); what ENLA 2025 found; what ONEM
// 2026 involves (no problems reproduced); an original lesson where a pattern holds 40 times and then fails.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/facts-school/src/, fetched 2026-11-08 by the research
// pass; every quote grepped in the raw text):
//  CNEB, MINEDU (cneb): "Resuelve problemas de regularidad, equivalencia y cambio MATEMÁTICA Resuelve problemas de movimiento,
//    forma y localización Resuelve problemas de gestión de datos e incertidumbre"; "Competencia 23: Resuelve problemas de
//    cantidad."; "horas pedagógicas (45 minutos)"; primaria "Matemática 5 5 4 4 4 4"; secundaria JER "Matemática 4 4 4 4 4";
//    JEC "Matemática 6 6 6 6 6".
//  MINEDU press note, ENLA 2025 announcement (n-enla2026-200mil): "En esta edición serán evaluados estudiantes de 4.° grado de
//    primaria en Lectura y Matemática; 2.° grado de secundaria en Lectura, Matemática y Ciencia y Tecnología; y 5.° grado de
//    secundaria"; "entre el 11 y el 13 de noviembre ... a más de 200 mil estudiantes de 8700 instituciones educativas".
//  MINEDU press note, 13 May 2026, ENLA 2025 results (n-enla2025): "presenta, a nivel nacional, resultados similares a los
//    obtenidos en 2023 y 2024 en Lectura y Matemática."; "En 2.º grado de secundaria, se registran avances en Matemática frente
//    al 2023, siendo este el primer año con cambios positivos tras su severa afectación por el cierre de las escuelas.";
//    "Moquegua, Tacna y Arequipa continúan liderando los logros de aprendizaje en todo el país."
//  UGEL 06 oficio múltiple, ONEM 2026 (ugel06-onem-2026): "se llevará a cabo de manera simultánea a nivel nacional el día
//    miércoles 08 de Julio"; "NIVEL 1: 1° y 2° grado de educación secundaria NIVEL 2: 3° y 4° grado de educación secundaria
//    NIVEL 3: 5° grado de educación secundaria"; "Consta de diez (10) ítems de respuesta construida cerrada"; "La prueba tiene
//    una duración de dos (02) horas."
//  El Peruano, ONEM 2026 national stage (elperuano-onem2026): "la ONEM 2026 convocó a más de 1,7 millones de estudiantes de
//    secundaria de todo el país."; "La etapa nacional se desarrolló hoy, domingo, en el Centro Vacacional Huampaní y reunió a
//    237 estudiantes" (article dated 11 October 2026).
//  PUCP Guía del postulante (pucp-guia): "con especial énfasis en las áreas de comprensión lectora y matemáticas."
//  EF EPI 2025 (facts-market/src/ef_peru): Peru 519, Lima 555.
//  Brand facts: 10,000+ students worldwide, 4.9 from about 547 Google reviews, since 2020; group fifteen to twenty or one to one.
//  Time: tzdata America/Lima UTC-5 all year, Asia/Kolkata UTC+5:30.
// Our own calculations: 5 x 45 = 225 minutes (grades 1 and 2), 4 x 45 = 180 (grades 3 to 6 and JER secundaria), 6 x 45 = 270
// (JEC secundaria) minutes of maths a week; 120 minutes / 10 items = 12 minutes per ONEM item.
// Our own program (scratchpad pe/e8/bem_euler.py), python3 -I (3.14), exact output: "True [41, 43, 47, 53, 61]" then
// "40 1681 False True". The practice problems on the page are written by us; no ONEM, Canguro or textbook problem is used.
// Lesson family: checking cases is not proof: a polynomial gives primes for n = 0 to 39 and fails at n = 40 (1681 = 41 x 41);
// the algebra shows why, which forty checks never could.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  'def is_prime(n):',
  '    if n < 2:',
  '        return False',
  '    d = 2',
  '    while d * d <= n:',
  '        if n % d == 0:',
  '            return False',
  '        d += 1',
  '    return True',
  '',
  'values = [n * n + n + 41 for n in range(40)]',
  'print(all(is_prime(v) for v in values), values[:5])',
  '',
  'n = 40',
  'v = n * n + n + 41',
  'print(n, v, is_prime(v), v == 41 * 41)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Best online maths tutor' },
  slug: 'best-online-maths-tutor-in-peru',
  code: 'bem',
  accent: '#8A3A47',
  accentRationale: 'Best online maths tutor in Peru: a dark rose #8A3A47, the shade of the dried flowers of the cantuta, Peru\'s national flower, picked as a warm but serious tone for a page about patient teaching; contrast passes 4.5 on all three papers (checked by the build gate)',
  pageType: 'market',
  priceSubject: 'maths',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Best online maths tutor in Peru',
  title: 'Best Online Maths Tutor in Peru: What to Look For, in English',
  description: 'How to find a good online maths tutor in Peru: five habits to look for, the four CNEB maths competencies, ONEM and ENLA facts, and our live classes in English.',
  ogDescription: 'What a good online maths tutor does that a weak one does not, for families in Peru: diagnosis first, reasons over answers, all four CNEB competencies, and proof over pattern-spotting. With a lesson where a rule holds forty times and fails.',
  twitterDescription: 'Finding an online maths tutor from Peru: five habits to look for, and a pattern that fails at 40.',
  pageName: 'Best Online Maths Tutor in Peru',
  webPageDescription: 'A guide to choosing an online maths tutor in Peru, built from the CNEB, MINEDU\'s ENLA releases, the ONEM 2026 oficio and El Peruano, PUCP and EF EPI, with original practice problems and a Python lesson on why checking cases is not proof.',
  courseDescription: 'Live online maths classes taught in English for learners in Peru from primaria to university: number sense, algebra, geometry, data, olympiad reasoning, IGCSE and IB, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Best online maths tutor',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#meaning', label: 'What best means' },
    { href: '#competencies', label: 'Four competencies' },
    { href: '#school', label: 'School and ENLA' },
    { href: '#onem', label: 'ONEM' },
    { href: '#proof', label: 'Pattern lesson' }
  ],
  eyebrow: 'Peru &middot; Choosing a maths tutor &middot; Primaria to university',
  h1: 'An online maths tutor for Peru who teaches the reasons',
  lede: 'A maths tutor can raise next week\'s mark by showing how to do this week\'s homework, and leave the learner no stronger. Another can be slower at first and leave them able to face a problem they have never seen. This page helps families in Peru tell the two apart, using what the national curriculum asks for, what national tests found, what ONEM involves, and a short lesson on the difference between noticing a pattern and proving it.',
  secondaryCta: { href: '#proof', label: 'See the pattern lesson' },
  wa: 'Hello Modern Age Coders, I am in Peru and looking for an online maths tutor who teaches in English. Could I book a free class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; maths taught live, online and in English',
  spec: [
    ['Who', 'Primaria, secundaria, university, adults'],
    ['Covers', 'School maths, olympiads, IGCSE, IB'],
    ['First step', 'A short diagnostic, not a lecture'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Peru times', 'At the family\'s chosen hour'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'The short answer',
  capsule: 'A good online maths tutor finds out what the learner misunderstands before teaching, makes them explain their reasoning aloud, and works across all four maths competencies in Peru\'s curriculum, not only arithmetic drills. Modern Age Coders gives live online maths classes in English to learners in Peru from primaria to university, with mentors based in India, in a group of fifteen to twenty or one to one, at any hour that suits the family, and the first class is free.',

  picks: {
    eyebrow: 'Three starting points',
    h2: 'Which maths course fits the learner\'s stage?',
    lede: 'Start where the learner is, not where the school year says they should be. A short diagnostic in the free class settles it.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'BEM / 01', title: 'Primary maths, grades 1 to 5', note: 'Number sense, place value, fractions and measurement for primaria children, taught with objects and drawings first and symbols after, so the method makes sense before it is memorised.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'BEM / 02', title: 'Secondary maths, algebra to calculus', note: 'For secundaria pupils from about 3rd year: algebra, functions, geometry, trigonometry and an introduction to calculus, with every method justified rather than handed over.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'BEM / 03', title: 'Olympiad and competition maths', note: 'For strong pupils who enjoy hard problems: number theory, combinatorics, geometry and proof, practised on problems we write, never on copied contest papers.' }
    ]
  },

  sections: [
    {
      id: 'meaning',
      eyebrow: 'Defining the word',
      h2: 'What makes an online maths tutor the best fit?',
      lede: 'No organisation in Peru rates private maths tutors, and reviews mostly measure how pleasant a tutor is. A more useful definition: the tutor who leaves this learner able to work without them. That shows up in five habits a parent can watch for.',
      body: [
        { kind: 'ol', items: [
          '<strong>They diagnose before they teach.</strong> The first session should include questions designed to find the gap, not a lesson on whatever the homework says. Ours begins with a short diagnostic built around the four competencies below.',
          '<strong>They make the learner talk.</strong> A good tutor asks "why does that step work?" more often than they explain. In our classes the learner explains each step aloud, in English, before moving on.',
          '<strong>They cover all of maths, not just sums.</strong> Peru\'s curriculum has four maths competencies, and drilling arithmetic only touches one. Our plans rotate through all four.',
          '<strong>They separate checking from proving.</strong> Trying examples is how mathematicians start; it is not how they finish. The lesson further down shows why, and we teach it from early secundaria.',
          '<strong>They report work, not hours.</strong> Ask what the learner can now do that they could not before. Our mentors send short notes on problems solved and ideas understood.'
        ] },
        { kind: 'p', mt: true, html: 'If you prefer to read about one-to-one maths tutoring in Spanish, our page <a class="ag-inline-link" href="/profesor-particular-de-matematicas-online-peru">profesor particular de matemáticas online</a> covers it from a parent\'s angle. Families comparing costs can see <a class="ag-inline-link" href="/precio-profesor-particular-matematicas-peru">precio de un profesor particular de matemáticas</a>. The classes are the same: live, online, in English.' }
      ]
    },
    {
      id: 'competencies',
      tint: 'tint',
      eyebrow: 'What Peruvian school asks for',
      h2: 'What maths does the Peruvian curriculum expect a learner to do?',
      lede: 'The Currículo Nacional (CNEB) organises school maths into four competencies, each a kind of problem the pupil should be able to solve. A tutor who knows them can find gaps faster than one working from the textbook\'s chapter order.',
      body: [
        { kind: 'table', numCols: [], caption: 'The four Matemática competencies of the CNEB, with a diagnostic question we might ask for each', head: ['CNEB competency (official name)', 'In plain English', 'A diagnostic question of ours'], rows: [
          ['Resuelve problemas de cantidad', 'Numbers, operations, estimation, fractions and percentages', 'Which is larger, 3/8 or 0.4, and how could you tell without a calculator?'],
          ['Resuelve problemas de regularidad, equivalencia y cambio', 'Patterns, equations, functions and algebra', 'A pattern goes 4, 7, 10, 13. What is the 50th term, and why?'],
          ['Resuelve problemas de movimiento, forma y localización', 'Shapes, measurement, angles, coordinates and transformations', 'A square\'s sides double. What happens to its area, and can you show it with a drawing?'],
          ['Resuelve problemas de gestión de datos e incertidumbre', 'Tables, charts, averages and probability', 'Two dice are thrown. Is a total of 7 or a total of 12 more likely, and by how much?']
        ] },
        { kind: 'source', html: 'Source: MINEDU, Currículo Nacional de la Educación Básica, area of Matemática (the competency names are copied from the CNEB; competency 23 is "Resuelve problemas de cantidad"). Read on 8 November 2026. The plain-English column and the diagnostic questions are ours.' },
        { kind: 'p', mt: true, html: 'Most learners we meet are uneven: comfortable with quantity, shaky on data, or the reverse. A diagnostic that touches all four in twenty minutes tells a tutor more than a month of homework help. It also matters for older pupils, because university admission exams in Peru lean heavily on maths: PUCP, for example, says its admission tests place "special emphasis" on reading comprehension and mathematics.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'School and national tests',
      h2: 'How much maths does school in Peru give, and what did ENLA find?',
      lede: 'More hours than most families think, and steadier results than the headlines suggest. A tutor should build on school, not repeat it.',
      body: [
        { kind: 'two',
          leftH3: 'Hours at school',
          left: [
            'The CNEB gives Matemática five periods a week in 1st and 2nd of primaria and four from 3rd to 6th. In secundaria it is four periods under the regular school day and six in Jornada Escolar Completa schools. A period, the CNEB says, is 45 minutes.',
            'Our arithmetic: that is 225 minutes a week in the first two primaria grades, 180 minutes from 3rd of primaria through regular secundaria, and 270 minutes in full-day secundaria. A tutor adding one or two hours a week is a small fraction of that, so the hours have to be spent on what school cannot do: individual diagnosis and explanation.'
          ],
          rightH3: 'What ENLA 2025 found',
          right: [
            'MINEDU\'s national assessment, ENLA, tested over 200,000 pupils in 8,700 schools between 11 and 13 November 2025, in 4th of primaria and 2nd and 5th of secundaria.',
            'Reporting on 13 May 2026, MINEDU said national results were similar to 2023 and 2024 in reading and maths, that 2nd of secundaria showed gains in maths over 2023 for the first time since school closures, and that Moquegua, Tacna and Arequipa still lead the country.'
          ] },
        { kind: 'p', mt: true, html: 'We are careful with this. MINEDU\'s press summaries are verified; the detailed percentages by achievement level sit on assessment pages we could not reach, so we do not quote them. What the summaries do show is that a national picture, however steady, tells a family nothing about their own child. That is what a diagnostic is for.' }
      ]
    },
    {
      id: 'onem',
      tint: 'tint',
      eyebrow: 'Olympiads',
      h2: 'How should a tutor prepare a pupil for ONEM?',
      lede: 'By teaching problem solving with original problems, not by drilling past papers. ONEM, the national school maths olympiad, rewards pupils who can reason about something unfamiliar, and the only preparation that builds that is unfamiliar problems.',
      body: [
        { kind: 'two',
          leftH3: 'What ONEM 2026 involved',
          left: [
            'The school stage was held nationwide on Wednesday 8 July 2026, in three levels: Level 1 for 1st and 2nd of secundaria, Level 2 for 3rd and 4th, Level 3 for 5th. Its paper had ten closed constructed-response items in two hours, so pupils write answers rather than pick them.',
            'Pupils go forward from school to UGEL, then regional, then national stages. El Peruano reports that ONEM 2026 began with more than 1.7 million secundaria pupils and that the national stage, on Sunday 11 October 2026 at Huampaní, brought together 237 finalists.'
          ],
          rightH3: 'How we prepare',
          right: [
            'Our arithmetic: two hours for ten items is twelve minutes each, long enough to need a plan and short enough to punish a wrong first approach. We practise choosing an approach quickly, then checking it.',
            'Entry is through the pupil\'s school, which registers them; families should ask the school. We never reproduce ONEM problems or solutions. We have no connection with MINEDU, ONEM or its organisers, and we promise no result.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Problem of ours, Level 1 style.</strong> The sum of three consecutive whole numbers is 87. What are they, and can the sum of three consecutive whole numbers ever be 100? Explain.',
          '<strong>Problem of ours, Level 2 style.</strong> How many two-digit numbers have digits that add up to 9? Find a way to count them without listing them all.',
          '<strong>Problem of ours, Level 3 style.</strong> Show that the product of any four consecutive whole numbers is always one less than a perfect square, and then check your argument with 5 &times; 6 &times; 7 &times; 8.'
        ] }
      ]
    },
    {
      id: 'proof',
      eyebrow: 'A real lesson',
      h2: 'Is checking lots of examples the same as proving a maths rule?',
      lede: 'No, and this is the most important habit a maths tutor can teach after arithmetic. Here is the lesson we use with secundaria pupils, with a little Python to do the checking.',
      body: [
        { kind: 'two',
          leftH3: 'The pattern',
          left: [
            'Take the expression n &times; n + n + 41. For n = 0 it gives 41, then 43, 47, 53, 61, and every one is a prime number. A pupil checks the first ten by hand and announces a rule: this always makes primes.',
            'The mentor does not argue. Instead the class writes a short program that checks the first forty values of n at once.'
          ],
          rightH3: 'The surprise',
          right: [
            'All forty are prime. The pattern looks overwhelming. Then the program tries n = 40 and gets 1681, which is 41 &times; 41: not prime.',
            'Algebra explains it in one line. When n = 40, the expression is 40 &times; 40 + 40 + 41 = 40 &times; 41 + 41 = 41 &times; 41. The failure was built in from the start; forty successful checks just hid it.'
          ] },
        { kind: 'code', label: 'pattern.py: forty successes, then a failure', lang: 'Python', code: CODE, note: 'It prints <code>True [41, 43, 47, 53, 61]</code>, meaning all forty values from n = 0 to 39 are prime, and then <code>40 1681 False True</code>: at n = 40 the value 1681 is not prime and equals 41 &times; 41.' },
        { kind: 'p', mt: true, html: 'This rule is famous, and mathematicians long ago noticed its forty primes. We use it because it fails so late. A pupil who has seen it never again says "it worked for every example I tried, so it is true". In ONEM-style problems and in IB or IGCSE proof questions, that sentence costs marks; in later life it costs more.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Find it by hand.</strong> Without the program, explain why n = 41 must also fail. (Hint: every term then has a common factor.)',
          '<strong>Prove a true rule.</strong> Show that the sum of the first n odd numbers is n &times; n. Check n = 1 to 5, then give an argument that covers every n.',
          '<strong>Spot the gap.</strong> A classmate claims every number of the form 2 &times; 2 &times; ... &times; 2 &minus; 1 is prime because 3, 7, 31 and 127 are. Use the program idea to test 2 to the power 11, minus 1.',
          '<strong>Say it in English.</strong> Write two sentences explaining the difference between evidence and proof.'
        ] }
      ]
    },
    {
      id: 'english',
      tint: 'tint',
      eyebrow: 'The teaching language',
      h2: 'Can my child learn maths online in English if their school teaches in Spanish?',
      lede: 'Usually yes, because maths is the subject where language matters least. Symbols, diagrams and worked steps carry most of the meaning, and the English needed is a short list of words used again and again.',
      body: [
        { kind: 'p', html: 'EF\'s English Proficiency Index 2025 rates Peru 519, in its moderate band, and Lima 555, in its high band. Our mentors, based in India, keep sentences short, write every key word on screen, and accept answers as numbers, drawings or a few words. Children at bilingual and international schools, where maths is often taught in English already, adjust at once; others usually settle within a few lessons. For primary-age children, our Spanish page <a class="ag-inline-link" href="/clases-de-matematicas-en-ingles-para-ninos">clases de matemáticas en inglés para niños</a> explains how we handle it, and teenagers preparing for the IB can read <a class="ag-inline-link" href="/tutor-ib-matematicas-en-ingles-peru">tutor de IB matemáticas en inglés</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How will we know the maths tutoring is working?',
    lede: 'Our own markers, one per stage. Each describes what the learner does, not how many hours they sat through.',
    table: { numCols: [], caption: 'Signs of real progress in maths (ours)', head: ['Stage', 'The learner can', 'What a parent might notice'], rows: [
      ['1. Explains', 'Say why each step of a method works', 'Fewer "the teacher said so" answers'],
      ['2. Chooses', 'Pick a method for an unfamiliar problem', 'Starts homework without asking first'],
      ['3. Checks', 'Test an answer by estimate or substitution', 'Catches their own mistakes'],
      ['4. Connects', 'Link ideas across the four competencies', 'Uses algebra to settle a geometry question'],
      ['5. Proves', 'Give an argument that covers every case', 'Distrusts "it worked for my examples"']
    ] },
    left: { h3: 'For parents of primaria children', ps: [
      'Stages 1 to 3 are the goal. A child who can explain and check is ahead of one who calculates fast but cannot say why.',
      'Ask them to teach you one thing from the week. It is the quickest progress report there is.'
    ] },
    right: { h3: 'For secundaria and beyond', ps: [
      'Stage 5 is what olympiads, the IB and university maths all demand.',
      'Keep a notebook of problems that beat you at first. Re-solving them a month later shows real growth.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths courses',
    h2: 'Nine more maths courses, from first numbers to university',
    lede: 'Grouped by stage. All are taught live in English, as a group or one to one.',
    bands: [
      { num: 'I', h3: 'Younger children', sub: 'Ages 4 to 10', courses: [
        { code: 'BEM / EARLY / 01', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Counting, shapes and patterns through play, ages 4 to 7.' },
        { code: 'BEM / EARLY / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense rather than tricks, ages 5 to 10.' },
        { code: 'BEM / EARLY / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Logic puzzles and careful thinking, ages 6 to 9.' }
      ] },
      { num: 'II', h3: 'Middle years', sub: 'About 10 to 14', courses: [
        { code: 'BEM / MID / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'Pre-algebra and geometry, built carefully.' },
        { code: 'BEM / MID / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Letters as numbers, equations and graphs.' },
        { code: 'BEM / MID / 03', slug: 'middle-school-math-competitions-course', title: 'Junior competitions', blurb: 'Problem solving for younger contest takers.' }
      ] },
      { num: 'III', h3: 'Exams and university', sub: 'About 14 and over', courses: [
        { code: 'BEM / ADV / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Core, Extended and Additional Mathematics.' },
        { code: 'BEM / ADV / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB maths AA and AI', blurb: 'SL and HL, including support with the internal assessment.' },
        { code: 'BEM / ADV / 03', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus, linear algebra and on to analysis.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'A live online maths class from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning in Lima', l: 'The Indian evening, when mentors are fresh and teaching.' },
      { time: 'Afternoon and evening', l: 'Early morning in India; mentors teach at those hours too.' },
      { time: 'One to one', l: 'A private tutor whose plan follows one learner\'s gaps.' }
    ],
    cells: [
      { h3: 'A shared whiteboard', p: 'Working is written where both can see and correct it.' },
      { h3: 'Explain before moving on', p: 'Each step is said aloud by the learner.' },
      { h3: 'Short English, clear symbols', p: 'Key words written; maths does the rest.' },
      { h3: 'Grouped by level', p: 'Learners join a group at their real level.' },
      { h3: 'A few problems between classes', p: 'Chosen for the gap, marked together next time.' },
      { h3: 'Notes for parents', p: 'What was solved and what comes next.' }
    ]
  },

  projectsH2: 'Work by our learners',
  projectsLede: 'A few pieces from students who have studied with us for a while. The <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'What parents and students wrote on Google, quoted exactly.',

  fees: {
    h2: 'Online maths tutoring fees for Peru',
    lede: 'Our maths fees are in US dollars and taken by card each month. Your bank decides the soles amount when it converts the payment, so expect small differences between months.',
    free: ['A free first maths class', 'A short diagnostic of all four areas', 'No card required'],
    group: ['A group of fifteen to twenty at one level', 'The same mentor throughout', 'Two live lessons weekly', 'Monthly, stop when you need to'],
    one: ['A private maths tutor', 'Lessons aimed at the learner\'s gaps', 'Hours you agree together']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'Finding an online maths tutor in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our maths classes are live, online and taught only in English. The mentor keeps language simple, writes key words on screen and lets the learner answer with numbers, drawings or short phrases, so the mathematics stays in front.' },
      { q: 'Who is the best online maths tutor in Peru?', a: 'Nobody can honestly name one, because no one measures tutors the same way. Look for a tutor who diagnoses first, makes your child explain, covers all four areas of maths and reports what has been learned. Watch a free class and judge those things yourself.' },
      { q: 'Do you follow the Peruvian curriculum?', a: 'We work alongside it. Our diagnostics and plans use the CNEB\'s four maths competencies, and mentors help with what the learner meets at school. The school sets and marks its own assessments; we do not award Peruvian grades or qualifications.' },
      { q: 'Can you help my child prepare for ONEM?', a: 'Yes, with problem solving on original problems we write. Entry is through the school, which registers pupils. We never copy ONEM problems, have no link with its organisers, and do not promise any result.' },
      { q: 'Do you teach IGCSE and IB maths?', a: 'Yes. We teach IGCSE Core, Extended and Additional Mathematics and IB Mathematics AA and AI at SL and HL, including help planning the internal assessment. The school and the exam board decide grades.' },
      { q: 'Is online maths tutoring as good as at home?', a: 'For most learners, yes, if the tutor uses a shared whiteboard and asks the learner to write and explain. Online also removes travel, and the learner keeps a record of every worked problem.' },
      { q: 'When are classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Lima on every day of the year, so a 16:00 class in Lima is 02:30 the next morning in India, which our mentors can arrange.' },
      { q: 'Group or one to one?', a: 'A group of fifteen to twenty at the same level suits steady progress and competitions. One to one suits a learner with specific gaps, an exam date, or who needs a slower pace. The diagnostic in the free class helps decide.' },
      { q: 'What does my child need?', a: 'A computer or tablet, a stable connection, paper and a pencil. A headset helps. A drawing tablet is useful but not necessary.' },
      { q: 'How are fees paid?', a: 'By card, monthly, in US dollars; your bank converts to soles. The free first class needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for families looking at maths help in Peru.',
    items: [
      { href: '/profesor-particular-de-matematicas-online-peru', label: 'Profesor particular de matemáticas online', p: 'One-to-one maths, explained in Spanish.' },
      { href: '/profesor-de-matematicas-en-ingles-peru', label: 'Profesor de matemáticas en inglés', p: 'Why maths in English works, in Spanish.' },
      { href: '/precio-profesor-particular-matematicas-peru', label: 'Precio de un profesor de matemáticas', p: 'How to compare tutoring costs fairly.' },
      { href: '/tutor-ib-matematicas-en-ingles-peru', label: 'Tutor de IB matemáticas', p: 'For IB Diploma students in Peru.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'All our Peru pages, coding and maths.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live lesson looks like.' }
    ]
  },

  start: {
    h2: 'Book a free maths class from Peru',
    lede: 'The free class is mostly diagnosis: a mentor works through a handful of problems with the learner across all four areas, listens to how they think, and then tells you plainly what to work on first, in a group or one to one, and at what hour.',
    readFirst: 'You can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse every maths syllabus in the <a class="ag-inline-link" href="/courses">course list</a> first.',
    note: 'Lessons are live video classes, taught from India in English. We reply on WhatsApp in English.',
    formNote: 'Free; no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking, not copying' },
        { href: '/courses', label: 'All courses' },
        { href: '/student-labs', label: 'Student labs' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/profesor-particular-de-matematicas-online-peru', label: 'Profesor de matemáticas online' },
        { href: '/clases-de-matematicas-en-ingles-para-ninos', label: 'Matemáticas en inglés, niños' },
        { href: '/tutor-ib-matematicas-en-ingles-peru', label: 'Tutor IB matemáticas' }
      ] }
    ],
    bottomRight: 'Forty checks, no proof'
  },

  personalityCss: `
.ag-root.ag-bem .ag-hero h1 { max-width: 20ch; letter-spacing: -0.015em; }
.ag-root.ag-bem .ag-capsule { border-left-width: 5px; }
.ag-root.ag-bem .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-bem .ag-table td:last-child { font-style: italic; }
.ag-root.ag-bem .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU CNEB (four Matemática competencies, weekly hours, 45-minute periods); MINEDU press notes on ENLA 2025 (announcement and results, 13 May 2026); UGEL 06 oficio on ONEM 2026; El Peruano on the ONEM 2026 national stage (11 October 2026); PUCP Guía del postulante; EF EPI 2025 Peru page. Read 8 and 9 November 2026.',
    localProject: 'An original maths lesson for learners in Peru: n*n + n + 41 is prime for every n from 0 to 39, which a Python check confirms (True [41, 43, 47, 53, 61]), and fails at n = 40 (40 1681 False True, 1681 = 41 x 41); the algebra 40 x 41 + 41 = 41 x 41 shows why. With original practice problems in three ONEM-style levels. Lesson family: checking cases is not proof.',
    requiredMentions: ['True [41, 43, 47, 53, 61]', '40 1681 False True', 'Forty checks, no proof', 'who teaches the reasons', '225 minutes a week in the first two primaria grades', 'twelve minutes each', 'brought together 237 finalists', 'Moquegua, Tacna and Arequipa still lead the country'],
    sources: [
      { claim: 'Four Matemática competencies; competency 23; 45-minute periods; weekly maths hours in primaria and secundaria.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ENLA 2025: 11 to 13 November 2025, over 200,000 pupils, 8,700 schools, grades tested.', url: 'https://www.gob.pe/institucion/minedu/noticias/1284732-minedu-evaluara-aprendizajes-de-200-mil-estudiantes-de-primaria-y-secundaria-de-todo-el-pais' },
      { claim: 'ENLA 2025 results: similar to 2023 and 2024; 2nd secundaria maths gains; Moquegua, Tacna, Arequipa lead.', url: 'https://www.gob.pe/institucion/minedu/noticias/1390772-enla-2025-se-mantienen-avances-en-lectura-y-matematica-con-mejoras-en-las-zonas-rurales' },
      { claim: 'ONEM 2026 school stage 8 July, levels, 10 items, two hours.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'ONEM 2026: 1.7 million pupils; national stage at Huampaní with 237 finalists.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'PUCP admission tests emphasise reading comprehension and maths.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' },
      { claim: 'EF EPI 2025: Peru 519, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'ENLA percentages by achievement level: UMC results pages were WAF-blocked; only the MINEDU press summaries are used.',
      'ONEM problems or solutions: never reproduced; original problems only, labelled ours.',
      'ONEM prize amounts: printed in soles in the source; not repeated (no soles figures on Peru pages).',
      'A ranking of maths tutors, or that ours is the best: no primary source; refused.',
      'Any connection with MINEDU, ONEM, PUCP or exam boards; any promised grade or medal: none.'
    ]
  }
};
