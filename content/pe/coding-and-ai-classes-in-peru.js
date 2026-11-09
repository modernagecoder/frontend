'use strict';
// Peru hub (ag- system, Peru cluster P0 row PE001, hubGroup 'start', code coai, accent #8F3736), written 2026-11-09.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing is "flexible any
// time all time". USD only, through the template's data-price anchors; nothing typed.
// Spine: the MINEDU normative age. Peru places a child in a grade by their age on 31 March, so a birthday on 1 April
// moves a whole school year. The project turns that rule into a program and meets the "year minus year" bug.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-and-ai-classes-in-peru/,
// originals under pe/facts-school/src, pe/facts-market/src and pe/src/time; all fetched 8 November 2026):
//  - Ley 28044, Ley General de Educación (cdn.www.gob.pe/uploads/document/file/4049722/...): Primaria "dura seis años";
//    Secundaria "dura cinco años" (FACTS 5, 6).
//  - MINEDU, Edades normativas (gob.pe/institucion/minedu/informes-publicaciones/2742610-edades-normativas): "Se considera
//    la edad normativa al 31 de marzo de cada año." Table PDF: "6 años 7 años 8 años 9 años 10 años 11 años 12 años
//    13 años 14 años 15 años 16 años" against 1er to 6to grado primaria, 1er to 5to grado secundaria (FACTS 13, 14, 15).
//  - MINEDU press release 16 March 2026: "53 631 colegios de Educación Básica Regular ... 6 225 000 estudiantes" (FACTS 17).
//  - CNEB (minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf): competency 28 "Se desenvuelve en
//    entornos virtuales generados por las TIC"; "Competencias transversales a las áreas"; secundaria regular day
//    "Matemática 4 4 4 4 4 Comunicación 4 4 4 4 4 Inglés 3 3 3 3 3"; JEC "Matemática 6 6 6 6 6"; primaria
//    "Matemática 5 5 4 4 4 4"; "horas pedagógicas (45 minutos)" (FACTS 32, 33, 39, 41, 44, 57).
//  - MINEDU Fábrica de Programadores (24 July 2025): "1000 escolares de 4.º y 5.º de secundaria de Lima Norte con
//    formación en programación Python"; "podrán rendir el examen PCEP" (FACTS 45, 46).
//  - MINEDU on COAR and IB: "En el año 2025, en todo el país, 2502 estudiantes obtuvieron el Diploma del Bachillerato
//    Internacional ... los estudiantes de los COAR representan el 47 % del total nacional" (FACTS 91).
//  - UGEL 06 oficio on ONEM 2026: "miércoles 08 de Julio"; "NIVEL 1: 1° y 2° grado de educación secundaria NIVEL 2: 3° y
//    4° ... NIVEL 3: 5°"; "ALFA: Estudiantes de IIEE públicas BETA: Estudiantes de IIEE privadas"; "Consta de diez (10)
//    ítems"; "dos (02) horas" (FACTS 99 to 103). El Peruano 11/10/2026: "más de 1,7 millones de estudiantes de
//    secundaria"; "La etapa nacional se desarrolló hoy, domingo, en el Centro Vacacional Huampaní y reunió a 237
//    estudiantes" (FACTS 105, 106).
//  - OPI, UTEC (opi.utec.edu.pe): "abiertas gratuitamente a todos los estudiantes de secundaria del país"; 2026
//    "Competencia : 11 de Abril (Fase 2 - Final)"; Reglamento OPI 2025: "Se podr´a usar solo C++." (Fase 2) and
//    "Queda prohibido el uso de IA generativa" (FACTS 111, 112, 116, 118).
//  - Universidad de Lima guide 2027-1(A): "Por la modalidad de Diploma de Bachillerato Internacional"; PUCP guide: "con
//    especial énfasis en las áreas de comprensión lectora y matemáticas."; UNI 2026-2: "tres pruebas tomadas en tres
//    días" (FACTS 89, 80, 67).
//  - EF EPI 2025 Peru page (ef.com/wwen/epi/regions/latin-america/peru/): "countryPosition":52,"totalCountries":123,
//    "countryPositionInContinent":8,"totalCountriesInContinent":20,"efEpiScore":519; Lima "proficiencySlug":"high",
//    "score":555; Cusco 520, Trujillo 519, Arequipa 512 moderate; "readingScore":540, "speakingScore":480.
//  - INEI boletín TIC II Trimestre 2026: "el 84,2% de la población de 6 y más años de edad en el país hizo uso de
//    Internet"; Lima Metropolitana "92,4%"; "niños de 6 a 11 años (68,2%)"; "el 36,4% de los hogares del país disponía de
//    al menos una computadora".
//  - Time: tzdata southamerica "Zone America/Lima ... -5:00 Peru", last "Rule Peru 1994 only"; tzdata asia Asia/Kolkata
//    "5:30 - IST"; INACAL "Hora Oficial del Perú" page. India is 10 hours 30 minutes ahead all year.
// Our own calculations (scratchpad pe/hub/v1.py and v2.py, run with python3 -I):
//  v1 (age = year minus year) prints:
//    Valeria 2021-02-14 -> 6 1° primaria / Mateo 2021-03-31 -> 6 1° primaria / Camila 2021-04-01 -> 6 1° primaria /
//    Diego 2014-09-03 -> 13 2° secundaria / Lucía 2011-01-22 -> 16 5° secundaria
//  v2 (birthday checked against 31 March) prints:
//    Valeria 2021-02-14 -> 6 1° primaria / Mateo 2021-03-31 -> 6 1° primaria / Camila 2021-04-01 -> 5 Inicial, 5 años /
//    Diego 2014-09-03 -> 12 1° secundaria / Lucía 2011-01-22 -> 16 5° secundaria
//  Time conversions (zoneinfo, 15 January 2026, 15 July 2026 and 31 March 2027 identical): Lima 07:00 = India 17:30;
//  09:00 = 19:30; 11:00 = 21:30; 13:00 = 23:30; 16:00 = 02:30 next day; 19:00 = 05:30 next day; 21:00 = 07:30 next day.
// The children in the project are invented by us. The 2027 cutoff applies MINEDU's yearly rule to the next school year.
// Lesson family: age is not year minus year (has the birthday arrived by the cutoff date?), tuple comparison of dates.
// The index of built Peru pages is read at build time through scripts/nl/lib/uk-index.js builtPages('pe'), grouped by
// hubGroup; empty groups are hidden, so the hub renders cleanly before any other Peru page exists.

const path = require('path');
const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const PE_GROUPS = [
  ['start', 'Start here'], ['ages', 'By age'], ['subjects', 'Subjects and courses'], ['exams', 'School, exams and competitions'],
  ['guides', 'Guides for families'], ['regions', 'Regions of Peru'], ['cities', 'Cities'], ['lima', 'Lima, district by district']
];
function peIndex() {
  const pages = require('../../scripts/nl/lib/uk-index.js').builtPages('pe').filter(m => m.file !== path.basename(__filename));
  const groupOf = m => m.group || 'guides';
  const label = m => m.label || m.routeLabel || m.slug;
  const blocks = PE_GROUPS.map(([g, name]) => [name, pages.filter(m => groupOf(m) === g).sort((a, b) => label(a).localeCompare(label(b), 'es'))])
    .filter(([, l]) => l.length)
    .map(([name, l]) => ({ kind: 'p', html: `<strong>${name}:</strong> ` + l.map(m => `<a class="ag-inline-link" href="/${m.slug}">${label(m)}</a>`).join(' &middot; ') }));
  if (!blocks.length) return [];
  return [{ id: 'index', tint: 'tint', eyebrow: 'Peru, one page at a time', h2: 'Which pages have we written for learners in Peru?', lede: 'Each page below takes one age, subject, exam, region, city or Lima district and answers it with its own sources and its own small project.', body: blocks }];
}

const V1 = [
  'from datetime import date',
  '',
  'CUTOFF = date(2027, 3, 31)   # MINEDU: the normative age is taken on 31 March',
  '',
  'GRADES = {3: "Inicial, 3 años", 4: "Inicial, 4 años", 5: "Inicial, 5 años"}',
  'for age in range(6, 12):',
  '    GRADES[age] = f"{age - 5}° primaria"',
  'for age in range(12, 17):',
  '    GRADES[age] = f"{age - 11}° secundaria"',
  '',
  'children = [',
  '    ("Valeria", date(2021, 2, 14)),',
  '    ("Mateo", date(2021, 3, 31)),',
  '    ("Camila", date(2021, 4, 1)),',
  '    ("Diego", date(2014, 9, 3)),',
  '    ("Lucía", date(2011, 1, 22)),',
  ']',
  '',
  'def age_on_cutoff(born):',
  '    return CUTOFF.year - born.year',
  '',
  'for name, born in children:',
  '    age = age_on_cutoff(born)',
  '    print(name, born, "->", age, GRADES.get(age, "outside school age"))'
].join('\n');

const V2 = [
  'def age_on_cutoff(born):',
  '    age = CUTOFF.year - born.year',
  '    if (born.month, born.day) > (CUTOFF.month, CUTOFF.day):',
  '        age -= 1   # the birthday comes after 31 March',
  '    return age'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'start', label: 'Coding and AI classes in Peru' },
  slug: 'coding-and-ai-classes-in-peru',
  code: 'coai',
  accent: '#8F3736',
  accentRationale: 'Peru hub: a deep clay red #8F3736, a darkened cousin of the red on the Peruvian flag and the colour of fired adobe, dark enough for 6.16:1 or better on every paper tint, and clear of the greens and blues the Peru subject pages use',
  pageType: 'market',
  market: PE_EN,
  parents: [],
  routeLabel: 'Coding and AI classes in Peru',
  title: 'Coding and AI Classes in Peru: Live Online in English',
  description: 'Live online coding, Python, AI and maths classes in English for children from 6, teenagers and adults in Peru, matched to primaria and secundaria. First class free.',
  ogDescription: 'Coding, AI, Python and maths taught live in English for learners anywhere in Peru, from 1° primaria to university and work, with a project on how MINEDU sets a child\'s grade from their age on 31 March.',
  twitterDescription: 'Live coding, AI and maths classes in English for Peru, ages 6 and up, at any hour that suits your family.',
  pageName: 'Coding and AI Classes in Peru',
  webPageDescription: 'The Peru page of Modern Age Coders: how Peruvian schooling is organised under MINEDU, where coding and maths sit in the CNEB timetable, which of our courses fits each age and grade, how classes taught live in English work from Lima to India, and an original Python project on the MINEDU normative age.',
  courseDescription: 'Live online coding, Python, AI and maths classes in English for learners in Peru aged 6 and up: Scratch, Roblox and Python for primaria, Python, IB and olympiad maths for secundaria, and Java, automation and AI agents for university students and adults, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }],
  crumbLabel: 'Peru',
  navLinks: [
    { href: '#school', label: 'School' },
    { href: '#ages', label: 'Ages' },
    { href: '#project', label: 'Project' },
    { href: '#english', label: 'English' },
    { href: '#contests', label: 'Exams' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Peru &middot; Coding, AI and maths &middot; Ages 6 and up',
  h1: 'Coding and AI classes in Peru',
  lede: 'In Peru a single birthday can decide a school year: MINEDU places every child by the age they have reached on 31 March. This page explains how Peruvian school is built and where coding and maths sit inside it, which of our courses suits each grade from 1° primaria to university, how classes taught live in English work across the ten and a half hours between Lima and India, and a short program that works out a child\'s grade, with the bug almost everyone writes first.',
  secondaryCta: { href: '#project', label: 'See the grade project' },
  wa: 'Hello Modern Age Coders, we are in Peru and would like a free first class in coding, AI or maths, taught in English.',
  heroNote: 'Teaching online since 2020 &middot; 10,000+ students worldwide &middot; every Peru class held live in English with one regular mentor',
  spec: [
    ['Who', 'Children from 6, teenagers, university students and adults'],
    ['Subjects', 'Coding, Python, AI agents and maths'],
    ['School link', 'Primaria, secundaria, IB, ONEM and OPI practice'],
    ['Peru time', 'Any hour of any day, chosen by you'],
    ['Mentors', 'Based in India, teaching over live video'],
    ['First class', 'Free, with no card asked for']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders gives learners in Peru live online classes in coding, AI, Python and maths, and every one of them is taught in English: for children from 6 in primaria, teenagers in secundaria or the IB, university students and adults. Every learner keeps one regular mentor, based in India, who speaks clearly and follows their pace and accent. A learner can join a group of fifteen to twenty or study alone with the mentor, at whatever hour suits the family in Peru time, and the first class costs nothing.',

  picks: {
    eyebrow: 'Where most learners in Peru begin',
    h2: 'Three first courses for three stages of life in Peru',
    lede: 'A child in primaria who has never written a line of code, a teenager in secundaria whose timetable has no programming area, and an adult or university student who wants to build with AI at work.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'COAI / 01', title: 'Coding for Kids', note: 'For 6 to 12 year olds, roughly 1° to 6° primaria. Scratch blocks first, so nothing has to be typed, then games, small apps and a first look at how AI makes guesses.' },
      { course: 'python-complete-masterclass-teens', code: 'COAI / 02', title: 'Python for Teens', note: 'Ages 13 to 17, 2° to 5° secundaria. Typed Python from variables to files and classes. Python is also what MINEDU\'s own Fábrica de Programadores pilot teaches.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', code: 'COAI / 03', title: 'AI Coding Agents for Adults', note: 'Ages 18 and up. How to direct Codex and Claude Code on real projects, read what they write, and catch their mistakes before anyone else does.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Peruvian schools',
      h2: 'How is school organised in Peru, and where does coding fit?',
      lede: 'Peruvian schooling follows one national framework set by the Ministry of Education, MINEDU, and one national curriculum, the CNEB. That makes the national picture easier to describe than in many countries, and it also shows clearly where programming is missing.',
      body: [
        { kind: 'two',
          leftH3: 'Inicial, primaria, secundaria',
          left: [
            'Under the Ley General de Educación, Ley 28044, regular basic education has three levels: inicial, primaria and secundaria. The law says primaria lasts six years and secundaria lasts five, so a pupil who starts on time finishes 5° de secundaria at about 16 or 17.',
            'The size of the system is worth knowing. MINEDU reported that 53,631 schools of regular basic education opened their doors to 6,225,000 students when the 2026 school year began on 16 March 2026. Under RM 501-2025-MINEDU the 2026 year has 36 teaching weeks in four blocks with short breaks between them, and the long holiday falls in the southern summer, between January and March.'
          ],
          rightH3: 'Computing is a competency, not a subject',
          right: [
            'Among the CNEB\'s competencies, number 28, which MINEDU titles "Se desenvuelve en entornos virtuales generados por las TIC", covers using and creating in digital environments, and the curriculum marks it as transversal: every area is meant to touch it, so no single teacher owns it.',
            'The weekly timetable for secundaria under the regular school day shows the effect. Matemática gets 4 teaching hours a week in every grade, Comunicación 4 and Inglés 3, and each teaching hour is 45 minutes, but there is no area called computing or programming. Schools on the longer Jornada Escolar Completa give maths 6 hours, and still no programming area.'
          ] },
        { kind: 'table', mt: true, numCols: [1], caption: 'Peruvian grades and the age MINEDU expects on 31 March of the school year', head: ['Level', 'Normative age', 'Grades'], rows: [
          ['Inicial', '3, 4 and 5', 'Inicial 3, 4 and 5 años'],
          ['Primaria, cycle III', '6 and 7', '1° and 2° primaria'],
          ['Primaria, cycle IV', '8 and 9', '3° and 4° primaria'],
          ['Primaria, cycle V', '10 and 11', '5° and 6° primaria'],
          ['Secundaria, cycle VI', '12 and 13', '1° and 2° secundaria'],
          ['Secundaria, cycle VII', '14, 15 and 16', '3°, 4° and 5° secundaria']
        ] },
        { kind: 'source', html: 'Sources: MINEDU, Edades normativas (table and note: "Se considera la edad normativa al 31 de marzo de cada año"); Ley 28044, Ley General de Educación; Currículo Nacional de la Educación Básica, plan de estudios. MINEDU press release of 16 March 2026 for the school and student counts. All read on 8 November 2026.' },
        { kind: 'p', mt: true, html: 'Programming has started to appear around the edges. In July 2025 MINEDU launched a pilot called Fábrica de Programadores for 1,000 public-school pupils in 4° and 5° de secundaria in Lima Norte, teaching Python and preparing them to sit the PCEP exam. MINEDU describes it as a first stage that it hopes to extend to the whole country. For everyone outside the pilot, coding still happens after school or not at all.' },
        { kind: 'p', html: 'Our classes are not a school and they lead to no Peruvian qualification. Your child\'s colegio stays in charge of grades and promotion. What we add is regular hands-on practice: live lessons where a learner writes a program, tests it and explains it aloud, or reasons through maths with a mentor, wherever they stand in the Peruvian system.' }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'Choosing a course',
      h2: 'Which course suits my child\'s age and grade in Peru?',
      lede: 'Start from the grade, not the birthday. The table puts our usual first course next to each stage of Peruvian school; the free first class then confirms the level, because a keen 9 year old and a hesitant 13 year old can need the same starting point.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our usual first course by Peruvian grade (our recommendation, adjusted after the free class)', head: ['Peruvian grade', 'Usual age', 'Our usual first course', 'What they build'], rows: [
          ['1° to 3° primaria', '6 to 8', 'Coding for Kids (Scratch)', 'Animated stories and simple games with loops and events'],
          ['4° to 6° primaria', '9 to 11', 'Python and AI for Kids, or Roblox game coding', 'Turtle drawings, quiz games, a first Roblox obstacle course'],
          ['1° to 2° secundaria', '12 and 13', 'Python for Teens, or Maths Through Coding', 'Programs with lists and functions; maths checked by code'],
          ['3° to 5° secundaria', '14 to 16', 'Python for Teens, then data, apps or olympiad maths', 'Data projects, small web apps, competition problems'],
          ['IB Diploma years', '16 to 18', 'IB Computer Science or IB Maths AA and AI', 'Internal assessment practice and exam-style problems'],
          ['University and work', '18 and up', 'Java, Python automation or AI coding agents', 'Interview problems, scripts that save hours, agent workflows']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Children aged 6 to 12',
          left: [
            'Younger children need to see something move within the first ten minutes. They begin with Scratch, where commands are coloured blocks, and they move to typed Python once reading and typing are comfortable, usually around 9 or 10. Roblox suits children who already play it; they learn Luau by changing a game rather than only playing one.',
            'We never point children to AI chat tools whose own terms set an older minimum age; our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> lists those ages. Instead we show children how AI tools make guesses, so they learn to question an answer before they trust it.'
          ],
          rightH3: 'Teenagers, students and adults',
          right: [
            'Teenagers in secundaria usually come for one of three reasons: they want to build something of their own, they are aiming at the IB or a university course in engineering or computing, or they enjoy maths and want harder problems than school sets. Each reason has its own path, and the mentor plans it with them in the first weeks.',
            'University students in Peru often want Java or data structures for interviews; working adults want Python to automate a spreadsheet or AI agents that take routine work off their desk. Adults learn in English too, which for many is part of the point.'
          ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Peruvian school project',
      h2: 'Which grade is my child in? A birthday bug in eleven lines',
      lede: 'Peruvian parents meet this question every March, and so does every school secretary who enrols a new pupil. MINEDU answers it with a single date, and that date makes a good first lesson in why programs need careful tests.',
      body: [
        { kind: 'two',
          leftH3: 'The rule',
          left: [
            'MINEDU publishes a table of normative ages, the age a child is expected to have when enrolling in each grade, and adds one sentence that matters more than the rest: "Se considera la edad normativa al 31 de marzo de cada año." A child counts as 6 for 1° primaria only if they have turned 6 by 31 March of that school year.',
            'So two children born a day apart can belong to different grades. A child born on 31 March is exactly 6 on the cutoff; a child born on 1 April is still 5 and, by the table, belongs in Inicial 5 años for one more year.'
          ],
          rightH3: 'The task',
          right: [
            'Students write a program that takes a list of children and their birthdays and prints the grade each one belongs in for the 2027 school year, using MINEDU\'s table from Inicial 3 años to 5° de secundaria.',
            'The five children are invented by us. They are chosen so that one is born well before the cutoff, one exactly on it, one the day after, and two who are older and whose birthdays fall on either side of 31 March.'
          ] },
        { kind: 'code', label: 'Version 1: age is the year of the cutoff minus the year of birth', lang: 'Python', code: V1, note: 'It prints <code>Valeria 2021-02-14 -&gt; 6 1° primaria</code>, <code>Mateo 2021-03-31 -&gt; 6 1° primaria</code>, <code>Camila 2021-04-01 -&gt; 6 1° primaria</code>, <code>Diego 2014-09-03 -&gt; 13 2° secundaria</code> and <code>Lucía 2011-01-22 -&gt; 16 5° secundaria</code>.' },
        { kind: 'p', mt: true, html: 'Three of the five lines are right, and that is the trap. Camila turns 6 on 1 April 2027, a day after the cutoff, so on 31 March she is 5 and belongs in Inicial 5 años, not 1° primaria. Diego turns 13 in September 2027, so on the cutoff he is 12 and belongs in 1° de secundaria. Subtracting one year from another only gives an age if the birthday has already happened; the program never asked.' },
        { kind: 'code', label: 'Version 2: check whether the birthday has arrived by 31 March', lang: 'Python', code: V2, note: 'With this function the program prints <code>Camila 2021-04-01 -&gt; 5 Inicial, 5 años</code> and <code>Diego 2014-09-03 -&gt; 12 1° secundaria</code>; Valeria, Mateo and Lucía are unchanged.' },
        { kind: 'p', mt: true, html: 'The fix compares two pairs, month then day, the way Python compares tuples: <code>(4, 1) &gt; (3, 31)</code> is true because 4 is bigger than 3, and the day is only looked at when the months are equal. Mateo, born on 31 March, gives two equal pairs, so nothing is subtracted and he stays 6. That one line is why the test list includes a child born exactly on the cutoff: if the comparison had been written with <code>&gt;=</code>, Mateo would wrongly drop a year.' },
        { kind: 'table', mt: true, numCols: [], caption: 'The five invented children, what Version 1 says and what MINEDU\'s rule says (our run of both programs)', head: ['Child, born', 'Version 1', 'Version 2, the rule', 'Why'], rows: [
          ['Valeria, 14 February 2021', '1° primaria', '1° primaria', 'Birthday well before 31 March'],
          ['Mateo, 31 March 2021', '1° primaria', '1° primaria', 'Turns 6 on the cutoff itself'],
          ['Camila, 1 April 2021', '1° primaria', 'Inicial 5 años', 'Turns 6 one day too late'],
          ['Diego, 3 September 2014', '2° secundaria', '1° secundaria', 'Turns 13 after the cutoff'],
          ['Lucía, 22 January 2011', '5° secundaria', '5° secundaria', 'Birthday well before 31 March']
        ] },
        { kind: 'source', html: 'Rule: MINEDU, Edades normativas, ages 3 to 16 against Inicial 3 años to 5° de secundaria, measured on 31 March. The children, the 2027 run and the outputs are ours. The normative age is a reference for enrolment; schools and UGELs apply the detailed enrolment rules, and a family should always confirm a placement with the school.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 7 to 9, on paper.</strong> Write the birthdays of five friends or cousins on cards. Put each card on the left of a line marked 31 March if the birthday comes first in the year, on the right if it comes after. Which side has to subtract one?',
          '<strong>Ages 9 to 12, Scratch.</strong> Ask for a birth month and day, then make a sprite say whether the birthday is on or before 31 March. Try 3 and 31, then 4 and 1.',
          '<strong>Ages 12 to 16, in Python.</strong> Type in Version 1 and spot the two wrong lines before reading Version 2. Then write one test with a child born on 31 March and one born on 1 April.',
          '<strong>Going further.</strong> A child born on 29 February 2020 has a birthday only in leap years. Does Version 2 still give the right grade for 2027, and why does the tuple comparison never need to know?'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in Spanish or English, and who is that good for?',
      lede: 'All of our teaching happens live, and all of it happens in English; there are no Spanish-language lessons. It is said near the top of this page because a family should know it before booking rather than find out in the first lesson.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Pupils at Peruvian colegios', p: 'A weekly class in English becomes programming and spoken English practice in the same hour. Code itself is written in English words such as if, while and print, so a pupil learns the vocabulary while using it.' },
          { h3: 'Bilingual and IB families', p: 'For pupils at bilingual, Cambridge or IB schools, English is already the language of maths and science lessons. An English coding class simply matches how they study the rest of the week.' },
          { h3: 'Students and professionals', p: 'Documentation, error messages, job interviews in global companies and most AI tools work in English first. Adults who learn Python or AI agents in English can read the original sources without waiting for a translation.' }
        ] },
        { kind: 'table', mt: true, numCols: [1], caption: 'English proficiency in Peru, EF English Proficiency Index 2025', head: ['Measure', 'Score', 'EF band or position'], rows: [
          ['Peru overall', '519', 'Moderate; 52nd of 123 countries, 8th of 20 in Latin America'],
          ['Lima', '555', 'High'],
          ['Arequipa', '512', 'Moderate'],
          ['Trujillo', '519', 'Moderate'],
          ['Cusco', '520', 'Moderate'],
          ['Peru, reading skill', '540', 'The strongest of the four skills'],
          ['Peru, speaking skill', '480', 'The weakest of the four skills']
        ] },
        { kind: 'source', html: 'Source: EF Education First, EF EPI 2025, Peru country page, read on 8 November 2026. Lima scored 555, the only Peruvian city in EF\'s high band in 2025.' },
        { kind: 'two', mt: true,
          leftH3: 'Matched to the learner',
          left: [
            'EF\'s figures point to the real difficulty: Peruvians read English better than they speak it. Our mentors plan for that. They speak slowly and clearly, write key words in the chat, rephrase rather than repeat, and wait for an answer instead of filling the silence. When a child reaches for a Spanish word, the mentor understands and kindly offers the English word back.'
          ],
          rightH3: 'Who teaches',
          right: [
            'Our mentors live in India and teach over live video. A learner stays with one mentor across the months, which lets that mentor learn where they pause, which explanations land and how quickly to move.'
          ] }
      ]
    },
    {
      id: 'online',
      eyebrow: 'Learning online',
      h2: 'Can my child learn coding online from anywhere in Peru?',
      lede: 'Yes, if there is a stable connection and a proper computer. INEI\'s household survey shows the first is common across Peru and the second much less so, which is worth checking before the first class.',
      body: [
        { kind: 'two',
          leftH3: 'The connection',
          left: [
            'INEI\'s technology bulletin for the second quarter of 2026 found that 84.2% of people aged 6 and over in Peru used the internet, 92.4% in Lima Metropolitana, 86.1% in other urban areas and 63.7% in rural areas. Among children aged 6 to 11 the figure was 68.2%.',
            'A live class needs about the same connection as a video call. If a call with relatives works smoothly, a class will too.'
          ],
          rightH3: 'The computer',
          right: [
            'The same INEI bulletin found that 36.4% of households in Peru had at least one computer. For coding that matters more than the connection: typing a program, switching windows and reading errors is hard on a phone. A laptop or desktop with a keyboard is what we ask for; for the youngest Scratch learners a tablet can be enough.',
            'Nothing else has to be bought. Scratch and Python, the two tools almost every beginner starts with, cost nothing to use.'
          ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Competitions, IB and university',
      h2: 'Do you help with ONEM, the Peruvian computing olympiad, the IB or university admission?',
      lede: 'Yes, alongside school and always with our own problems. These are the organisers\' own facts for the competitions and routes Peruvian families ask us about most.',
      body: [
        { kind: 'table', numCols: [], caption: 'Competitions and routes for secundaria pupils in Peru, from each organiser', head: ['Name', 'Who', 'What the organiser publishes', 'Organiser'], rows: [
          ['ONEM, Olimpiada Nacional Escolar de Matemática', '1° to 5° secundaria, in three levels', 'School stage on 8 July 2026; Nivel 1 is 1° and 2°, Nivel 2 is 3° and 4°, Nivel 3 is 5°; Alfa category for public schools, Beta for private', 'MINEDU, entered through the school'],
          ['ONEM national stage', 'The finalists', '237 students at the Centro Vacacional Huampaní on Sunday 11 October 2026, out of more than 1.7 million who started', 'MINEDU, reported by El Peruano'],
          ['OPI, Olimpiada Peruana de Informática', 'Secundaria pupils', 'Free for every secundaria pupil in Peru; 2026 final on 11 April 2026; only C++ in the in-person final; generative AI banned for solving problems', 'UTEC'],
          ['IB Diploma', 'Last two years of school', '2,502 students in Peru earned the IB Diploma in 2025, and COAR students were 47% of them', 'International Baccalaureate, figures from MINEDU'],
          ['University admission', 'Pupils in 5° secundaria and school leavers', 'Universidad de Lima admits IB Diploma holders by a separate route; PUCP stresses reading comprehension and maths; UNI sets three papers on three days', 'Each university']
        ] },
        { kind: 'source', html: 'Sources: UGEL 06 oficio múltiple on ONEM 2026; El Peruano, 11 October 2026; <a class="ag-inline-link" href="https://opi.utec.edu.pe/" rel="noopener">opi.utec.edu.pe</a> and the OPI 2025 rules; MINEDU on COAR and the IB Diploma; Universidad de Lima admission guide 2027-1(A); PUCP guía del postulante; UNI Admisión 2026-2. All read on 8 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Maths and coding contests',
          left: [
            'The ONEM school-stage paper, as described in the UGEL 06 circular for 2026, has ten questions, each answered with a single result the pupil works out and writes down, and lasts two hours. It rewards careful reasoning more than speed, which is exactly what our olympiad maths classes train, using problems we write ourselves. We never copy or solve an organiser\'s published problems.',
            'The OPI selects the pupils who represent Peru at the Ibero-American and International Olympiads in Informatics, and its 2025 rules allow only C++ in the in-person final. Pupils who aim at it learn algorithms with us in Python first, then the same ideas in C++. The ban on generative AI is one more reason we teach learners to think a problem through rather than ask a chatbot.'
          ],
          rightH3: 'IB and university',
          right: [
            'For IB families we teach IB Maths AA and AI and IB Computer Science, in English, the language the IB examines them in. The school and the IB set and mark the work; we help a student understand it and practise.',
            'Peruvian university admission exams are written in Spanish, and each university decides who it admits. We do not prepare anyone for a specific admission exam and we promise no results. What we can offer is maths reasoning practice in English, which helps with the problem-solving those exams test.'
          ] },
        { kind: 'p', mt: true, html: 'We are not connected with MINEDU, any UGEL, UTEC, the IB, any COAR or any university. Our certificate of completion is our own and has no official value in Peru.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Peru and India time',
      h2: 'What time are the classes in Peru?',
      lede: 'At whatever hour you choose. Peru keeps one time zone with no daylight saving, so the gap to India never changes: India is 10 hours 30 minutes ahead of Peru on every day of the year.',
      body: [
        { kind: 'table', numCols: [], caption: 'Some Peru times converted to India time (examples only, not a timetable)', head: ['Time in Peru', 'Time in India', 'Same day in India?'], rows: [
          ['07:00', '17:30', 'Yes'],
          ['09:00', '19:30', 'Yes'],
          ['11:00', '21:30', 'Yes'],
          ['13:00', '23:30', 'Yes'],
          ['16:00', '02:30', 'No, already the next day'],
          ['19:00', '05:30', 'No, already the next day'],
          ['21:00', '07:30', 'No, already the next day']
        ] },
        { kind: 'source', html: 'Peru uses UTC-5 all year; the last Peruvian summer time ended on 1 April 1994, according to the tz database maintained by IANA (entry America/Lima), and INACAL keeps the Hora Oficial del Perú. India uses UTC+5:30 all year (entry Asia/Kolkata). The conversions are ours, checked for January, July and March dates.' },
        { kind: 'p', mt: true, html: 'Because the gap is fixed, a time agreed in March still works in October. Any afternoon or evening in Peru is already the next calendar day in India, which only matters when you read a date on a calendar invite. The booking form for the free class shows times in your own Peru clock; the mentor receives the matching moment in India time.' }
      ]
    }
  ].concat(peIndex()),

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a learner in Peru can do at each stage with us',
    lede: 'These milestones are ours. We use them to decide which group a learner joins and to tell parents how things are going. They run beside the Peruvian grades and never stand in for school marks.',
    table: { caption: 'Our coding milestones next to Peruvian school stages', head: ['Stage', 'Peruvian stage', 'The learner can'], rows: [
      ['1. Blocks and events', '1° to 3° primaria', 'Make a sprite react to a key, repeat a move and keep a score'],
      ['2. First typed code', '4° to 6° primaria', 'Write Python with variables, if and a simple loop'],
      ['3. Tests on the edge', '1° to 2° secundaria', 'Pick test cases on and next to a boundary, like the 31 March child'],
      ['4. Structures and data', '3° to 5° secundaria', 'Use lists, dictionaries, functions and files on real data'],
      ['5. Own projects', 'IB, university and work', 'Plan, build, test and explain a program other people use']
    ] },
    left: { h3: 'For parents', ps: [
      'The grade project on this page is a stage 3 task: the program looked finished until a child born on 1 April showed it was not.',
      'Our reports describe what your child made and could explain in their own words, not how many minutes they spent online.'
    ] },
    right: { h3: 'For learners', ps: [
      'When a rule depends on a date, test the day before, the day itself and the day after.',
      'If a result looks right for most cases, look harder at the ones where it is wrong.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners across Peru',
    lede: 'Each one is taught live in English by a regular mentor, either in a group or to one learner alone.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'Ages 6 to 12', courses: [
        { code: 'COAI / PRIM / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Change and build Roblox games by writing Luau.' },
        { code: 'COAI / PRIM / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Turtle art, quizzes and small projects that guess.' },
        { code: 'COAI / PRIM / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns, fractions and shapes explored in Python.' }
      ] },
      { num: 'II', h3: 'Secundaria and IB', sub: 'Ages 12 to 18', courses: [
        { code: 'COAI / SEC / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Proof and problem solving for ONEM-style contests.' },
        { code: 'COAI / SEC / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'SL and HL topics, with internal assessment coaching.' },
        { code: 'COAI / SEC / 03', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'The new IB guide, first assessed in 2027.' }
      ] },
      { num: 'III', h3: 'University and work', sub: 'Ages 17 and up', courses: [
        { code: 'COAI / WORK / 01', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP Python', blurb: 'Python fundamentals towards the two Python Institute exams.' },
        { code: 'COAI / WORK / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java for university', blurb: 'Core Java through to Spring Boot services.' },
        { code: 'COAI / WORK / 03', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts and applied AI for repetitive office work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'What does a week of live classes look like from Peru?',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'Before school or work, early in Peru time.' },
      { time: 'Afternoons and evenings', l: 'After the colegio day or the office day.' },
      { time: 'Weekends and holidays', l: 'Including the long January to March break.' }
    ],
    cells: [
      { h3: 'Live every time', p: 'A real mentor in real time, never a recorded video.' },
      { h3: 'Clear, patient English', p: 'Spoken slowly, written in the chat, said again another way.' },
      { h3: 'The same mentor', p: 'One person who comes to know how your child thinks.' },
      { h3: 'Grouped by level', p: 'Placed with learners who can do similar things.' },
      { h3: 'Notes for parents', p: 'What was made, what was hard, what is next.' },
      { h3: 'Group or one to one', p: 'Fifteen to twenty learners, or just your child.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Below are some projects by our students in other countries; our <a class="ag-inline-link" href="/student-labs">student labs</a> page shows many more of them.',
  reviewsLede: 'Reviews left on Google by parents and learners, copied word for word.',

  fees: {
    h2: 'Fees for learners in Peru',
    lede: 'Each month\'s fee pays for eight one-hour live classes. For Peru the fee is priced in US dollars and charged to a card; your bank changes it into soles at its own rate, which is why the figure on your card statement may differ slightly between months.',
    free: ['A free first class', 'A placement chat in English', 'No card asked for'],
    group: ['Fifteen to twenty learners at one level', 'One regular mentor', 'Eight classes a month', 'Monthly, stop in any month'],
    one: ['Your child and one mentor', 'A plan built around them', 'Hours agreed between you']
  },

  faq: {
    eyebrow: 'Families in Peru ask',
    h2: 'Coding and AI classes in Peru: common questions',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All of our classes are taught live in English, by a mentor in India who speaks clearly and adjusts to how fast the learner works and how they speak. There are no lessons in Spanish. Many Peruvian families treat that as a benefit: coding or maths and English practice in the same hour.' },
      { q: 'How young can a child start coding with you?', a: 'At 6, which is the MINEDU normative age for 1° primaria. Primaria children begin with Scratch blocks and move to typed Python at about 9 or 10. Teenagers and adults start at whatever level the free first class shows.' },
      { q: 'Is programming taught in Peruvian schools?', a: 'Not as a subject of its own. The CNEB treats digital skills as a transversal competency, number 28, and the secundaria timetable has no programming area. In July 2025 MINEDU started Fábrica de Programadores, a Python pilot reaching a thousand public-school pupils in Lima Norte.' },
      { q: 'What times are the classes in Peru?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. In Peru the clock stays at UTC-5 all year while India runs 10 hours 30 minutes ahead, so you always pick the time in your own clock.' },
      { q: 'Where are the mentors?', a: 'In India. They teach over live video, and a learner is not passed from one mentor to another. Because neither country changes its clocks, the time you agree on stays the same all year.' },
      { q: 'How are fees paid from Peru?', a: 'Peru fees are priced in US dollars and charged to a debit or credit card, and your bank converts the amount into soles. The first class is free and asks for no card.' },
      { q: 'Do you prepare pupils for ONEM or the OPI?', a: 'We teach olympiad maths and competitive programming with problems we write ourselves, never the organisers\' own papers. Entry to ONEM is through the school, and the OPI is run by UTEC. We are not connected with either organiser.' },
      { q: 'Can you help with the IB Diploma?', a: 'Yes, alongside school. We teach IB Maths AA and AI and IB Computer Science in English. The school and the IB set and mark the work, and we do not award any IB or Peruvian qualification.' },
      { q: 'Do you prepare students for university admission exams in Peru?', a: 'Not for any specific exam. Peruvian admission exams are in Spanish and each university decides who it admits. We offer maths reasoning practice in English, and we promise no admission result.' },
      { q: 'Does my child need a computer?', a: 'Yes, a laptop or desktop with a keyboard for typed code. INEI found that 36.4% of households in Peru had a computer in the second quarter of 2026, so it is worth checking first. A tablet is enough for the youngest Scratch learners.' },
      { q: 'Do you teach adults in Peru?', a: 'Yes. Adults and university students learn Python, Java, automation and AI coding agents with us, in English, at hours that fit around work or study.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More reading for families in Peru who want to look further before the first class.',
    items: [
      { href: '/how-we-teach', label: 'How we teach', p: 'What actually happens inside one of our live lessons.' },
      { href: '/how-to-think-like-a-programmer', label: 'Thinking like a programmer', p: 'Why we teach reasoning before shortcuts.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which ages each AI tool allows, from its own terms.' },
      { href: '/ib-computer-science-online-tuition', label: 'IB Computer Science tuition', p: 'Our page for IB Diploma pupils anywhere.' },
      { href: '/student-labs', label: 'Student labs', p: 'Programs and games our learners have finished.' },
      { href: '/courses', label: 'All courses', p: 'Every syllabus we teach, on one page.' }
    ]
  },

  start: {
    h2: 'Book a free first class from Peru',
    lede: 'The first class is a friendly chat and one short task pitched at the learner. From it the mentor learns how they reason and how easily they follow spoken English, and then suggests a course and either a group or one-to-one lessons.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a lesson, and <a class="ag-inline-link" href="/courses">the course list</a> shows each syllabus in full.',
    note: 'Classes are live, online and in English, with mentors in India. WhatsApp, in English, is the quickest way to reach us.',
    formNote: 'Nothing to pay and no card needed for the first class.'
  },

  footer: {
    cols: [
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru#school', label: 'School in Peru' },
        { href: '/coding-and-ai-classes-in-peru#project', label: 'The grade project' },
        { href: '/coding-and-ai-classes-in-peru#contests', label: 'ONEM, OPI and IB' },
        { href: '/coding-and-ai-classes-in-peru#times', label: 'Peru and India time' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Has the birthday arrived by 31 March?'
  },

  personalityCss: `
.ag-root.ag-coai .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-coai .ag-capsule { border-left-width: 5px; }
.ag-root.ag-coai .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-coai .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-coai .ag-band-head h3 { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU (Ley 28044; Edades normativas; CNEB plan de estudios; press releases of 24 July 2025 and 16 March 2026; COAR and IB release); UGEL 06 and El Peruano on ONEM 2026; UTEC OPI home page and OPI 2025 rules; Universidad de Lima, PUCP and UNI admission pages; EF EPI 2025; INEI boletín TIC II Trimestre 2026; IANA tzdata and INACAL. All read 8 November 2026.',
    localProject: 'Which grade is my child in? An original Python project on the MINEDU normative age (31 March): Version 1 subtracts years and puts Camila (born 1 April 2021) in 1° primaria and Diego (born 3 September 2014) in 2° secundaria; Version 2 checks the birthday with a tuple comparison and gives Inicial 5 años and 1° secundaria. Lesson family: age is not year minus year; test the cutoff day and the day after.',
    requiredMentions: ['Which grade is my child in? A birthday bug in eleven lines', 'Se considera la edad normativa al 31 de marzo de cada año.', '53,631 schools of regular basic education', 'Camila 2021-04-01 -&gt; 5 Inicial, 5 años', 'Diego 2014-09-03 -&gt; 12 1° secundaria', 'Has the birthday arrived by 31 March?', 'Lima scored 555', '2,502 students in Peru earned the IB Diploma in 2025', 'India is 10 hours 30 minutes ahead of Peru on every day of the year'],
    sources: [
      { claim: 'Normative age per grade, measured on 31 March.', url: 'https://www.gob.pe/institucion/minedu/informes-publicaciones/2742610-edades-normativas' },
      { claim: 'Primaria six years, secundaria five years.', url: 'https://cdn.www.gob.pe/uploads/document/file/4049722/Ley%2028044%20-%20Ley%20General%20de%20Educaci%C3%B3n%20.pdf' },
      { claim: '53,631 schools and 6,225,000 students at the start of 2026.', url: 'https://www.gob.pe/institucion/minedu/noticias/1366423-ministro-de-educacion-inaugura-ano-escolar-2026-en-colegios-publicos' },
      { claim: 'CNEB competency 28 transversal; timetable hours; 45-minute teaching hour.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fábrica de Programadores: 1,000 pupils, Python, PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: '2,502 IB Diploma holders in Peru in 2025, 47% from COAR.', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' },
      { claim: 'ONEM 2026 levels, categories, school-stage date and format.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'ONEM 2026 national stage and participation.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'OPI free for secundaria pupils; 2026 final date; C++ only and no generative AI.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'EF EPI 2025 scores for Peru and its cities.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Internet use and computer ownership, II Trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 with no daylight saving since 1994.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Peru student counts, Peru-only ratings or named Peruvian schools as sources of our students: none exist, none printed.',
      'Spanish-language teaching: we teach in English only, and the page says so in the capsule and the first FAQ.',
      'Soles prices, typed dollar figures and competitor prices: not printed; fees come from the template in US dollars.',
      'Any affiliation with MINEDU, a UGEL, UTEC, the IB, COAR or a university, and any official certificate: none.',
      'Admission results for UNI, PUCP, Universidad de Lima or San Marcos: never promised; the exams are in Spanish.',
      'A Cisco partnership detail for Fábrica de Programadores appeared in a summary but not in the raw MINEDU text: left out.'
    ]
  }
};
