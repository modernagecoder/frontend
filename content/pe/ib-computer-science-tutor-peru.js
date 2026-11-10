// SHIP: market (en exam door, IB) | an IB Computer Science tutor in Peru: new guide, Peru at the IOI, OPI rules | NULL in SQL: COUNT(*) against COUNT(col), = NULL against IS NULL, and a WHERE that drops rows
'use strict';
// IB Computer Science tutor, Peru (ag- English exam door, Peru cluster row PE033, P3, hubGroup exams).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Fees render in USD from the template only (default priceSubject coding); no typed figure, no soles.
// Search: "ib computer science tutor" (rows.tsv seed), "ib computer science tutor online"; Spanish twin (live):
// bachillerato-internacional-ciencias-de-la-computacion-tutor (spine: JER area table, three initiatives table, tutoring table,
// bubble-sort trace table and comparison counts). This page: what the new guide changed as our course page describes it,
// where computing sits in Peruvian school (prose), Peru's record at the IOI year by year (fresh source, the table), how OPI
// selects that team and what it allows, a tutor's two-year plan, and a databases lesson (new guide: databases at SL and HL,
// per our course). ibo.org returned 403 to the research run and is never retried: IB details are our course's, labelled as
// ours, pointing to the school's IB coordinator. No IB endorsement is claimed or implied. No contestant is named.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/ib-computer-science-tutor-peru/ and
// facts-school/src/; read 8 to 9 November 2026; quotes grepped by scratchpad pe/e5/verify.py):
//  - IOI statistics, Peru https://stats.ioinformatics.org/countries/PER (ioi_country_per.html): "First participation: 2022
//    Years participated: 5 Contestants participated: 13"; "Gold medals: 0 Silver medals: 0 Bronze medals: 1"; "Honourable
//    mentions: 1". Results https://stats.ioinformatics.org/results/PER (ioi_results_per.html, fetched 9 November 2026), per
//    year: 2026 four rows, best "196/375"; 2025 four rows, best "256/330"; 2024 three rows, best "258/353", one "Honourable
//    Mention"; 2023 four rows, best "221/350"; 2022 four rows, best "166/349" with "Bronze".
//  - UTEC OPI home https://opi.utec.edu.pe/ (opi-home): "abiertas gratuitamente a todos los estudiantes de secundaria del
//    país"; "Inscripciones : hasta el 18 de marzo del 2026 . Competencia : 11 de Abril (Fase 2 - Final)"; OPEIA "Competencia :
//    19 de marzo del 2026".
//  - OPI 2025 rules https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf (LaTeX accents in the extraction): Fase 1 "Esta fase ser´a
//    virtual", "Se podr´a usar C++ o Python"; Fase 2 "presencial", "Duraci´on: 5 horas", "Se podr´a usar solo C++";
//    "Los 4 primeros puestos de la FASE 2 ser´an seleccionados para participar en IOI-2025"; "Queda prohibido el uso de IA
//    generativa para la resoluci´on de problemas"; "Tener como m´aximo 20 a˜nos de edad al d´ıa 1 de Julio de 2025".
//  - CNEB: "28 Se desenvuelve en entornos virtuales generados por las TIC"; "Competencias transversales a las áreas";
//    "Diseña y construye soluciones tecnológicas para resolver problemas"; "Educación para el trabajo 2 2 2 2 2" (JER);
//    "Educación para el trabajo 3 3 3 3 3" (JEC).
//  - MINEDU, 24 July 2025 (n-fabrica-prog): "1000 escolares de 4.º y 5.º de secundaria de Lima Norte con formación en
//    programación Python"; "podrán rendir el examen PCEP".
//  - MINEDU, 17 April 2026 (n-coar-ib-1100): "2502 estudiantes obtuvieron el Diploma del Bachillerato Internacional".
//  - INEI TIC II Trimestre 2026: "el 36,4% de los hogares del país disponía de al menos una computadora".
//  - Our course page content/courses/data/ib-computer-science.json: "launched in February 2025 for first teaching in August
//    2025, with first assessment in May 2027"; "Paper 3 has been removed entirely at both SL and HL. The options are gone.";
//    "The case study is now covered by both SL and HL students and is assessed within Paper 1"; "Databases and object-oriented
//    programming are now studied at both levels"; "the new guide runs two separate versions of that paper".
//  - Time: Peru UTC-5 all year (tzdata America/Lima; last Rule Peru 1994); India UTC+5:30; India 10 h 30 min ahead.
// Our calculations: 4 + 4 + 3 + 4 + 4 = 19 team places over five IOIs, held by 13 different students (IOI's count).
// Code (scratchpad pe/e5/icst_v1.py and icst_both.py, python3 -I; names and scores invented): v1 prints
// "(5, 3, 58.333333333333336)", "[]", "[('Ana',), ('Carla',), ('Elena',)]"; v2 run after v1 prints
// "[('Bruno',), ('Diego',)]" and "(5, 2, 35.0)".
// Lesson family: NULL is "unknown", not zero: COUNT(*) counts rows, COUNT(score) skips NULL, AVG ignores NULL, = NULL matches
// nothing, a condition that "covers every score" still drops NULL rows, IS NULL finds them, and COALESCE(score, 0) changes the
// average from 58.3 to 35.0, so the analyst must state which meaning is right.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import sqlite3',
  '',
  'db = sqlite3.connect(":memory:")',
  'db.execute("CREATE TABLE entries (student TEXT, grade INTEGER, score INTEGER)")',
  'db.executemany("INSERT INTO entries VALUES (?, ?, ?)", [',
  '    ("Ana", 4, 55), ("Bruno", 5, None), ("Carla", 4, 80),',
  '    ("Diego", 3, None), ("Elena", 5, 40),',
  '])',
  '',
  'print(db.execute("SELECT COUNT(*), COUNT(score), AVG(score) FROM entries").fetchone())',
  'print(db.execute("SELECT student FROM entries WHERE score = NULL").fetchall())',
  'print(db.execute("SELECT student FROM entries WHERE score < 50 OR score >= 50").fetchall())'
].join('\n');

const V2 = [
  'print(db.execute("SELECT student FROM entries WHERE score IS NULL").fetchall())',
  'print(db.execute(',
  '    "SELECT COUNT(*), SUM(CASE WHEN score IS NULL THEN 1 ELSE 0 END), "',
  '    "ROUND(AVG(COALESCE(score, 0)), 1) FROM entries").fetchone())'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'IB computer science tutor' },
  slug: 'ib-computer-science-tutor-peru',
  code: 'icst',
  accent: '#583400',
  accentRationale: 'IB computer science tutor, Peru: a dark roasted-cacao brown #583400, after the cacao of the Peruvian Amazon, layered and slow to refine like a well-built program; it clears 4.5:1 on the paper #FBF8F2 and on both darker papers (checked by the build).',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'IB computer science tutor, Peru',
  title: 'IB Computer Science Tutor in Peru: Live Online, SL and HL',
  description: 'An IB Computer Science tutor for Diploma students in Peru: live online classes in English for SL and HL, Paper 1, Paper 2 in Python or Java, and the IA.',
  ogDescription: 'Live IB Computer Science tutoring in English for students in Peru: what the new guide changed as our course describes it, where computing sits in Peruvian school, Peru\'s IOI record year by year, OPI rules, and a databases lesson on NULL.',
  twitterDescription: 'Live online IB Computer Science tutoring in English for Peru, SL and HL, one to one or in a group, at any hour.',
  pageName: 'IB Computer Science Tutor in Peru',
  webPageDescription: 'A guide for IB Diploma Computer Science students in Peru who want a tutor teaching in English, built from IOI statistics for Peru, UTEC\'s OPI pages and 2025 rules, the MINEDU national curriculum and press releases, INEI household data, our own IB course page and the tz database, with an original SQL lesson on NULL.',
  courseDescription: 'Live online IB Diploma Computer Science tutoring in English for students in Peru, at SL and HL: both themes, the case study, Paper 2 programming in Python or Java, databases, and support on the internal assessment that keeps it the student\'s own work, one to one or in a group of fifteen to twenty.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'IB computer science tutor',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#guide', label: 'The new guide' },
    { href: '#school', label: 'Computing at school' },
    { href: '#ioi', label: 'Peru at the IOI' },
    { href: '#lesson', label: 'SQL lesson' },
    { href: '#clock', label: 'Peru times' }
  ],
  eyebrow: 'Peru &middot; IB Diploma Computer Science, taught in English &middot; SL and HL',
  h1: 'An IB Computer Science tutor for students in Peru',
  lede: 'IB Computer Science is an unusual subject for a student in Peru: the national curriculum has no computing subject at all, so a Diploma student may meet real programming for the first time at 15 or 16. This page explains what the subject now asks of students, as our course reads the new guide, where computing does and does not sit in Peruvian school, how far Peru\'s strongest young programmers have gone at the International Olympiad in Informatics, and what a database lesson with us looks like.',
  secondaryCta: { href: '#lesson', label: 'See the SQL lesson' },
  wa: 'Hello Modern Age Coders, I am an IB Diploma student in Peru and would like an IB Computer Science tutor in English. Could I book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; every class live, online and in English',
  spec: [
    ['Course', 'IB Diploma Computer Science'],
    ['Levels', 'SL and HL'],
    ['Paper 2', 'Python or Java, as your school chooses'],
    ['Taught', 'Live, online, in English'],
    ['Peru times', 'Any hour you choose'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders offers IB Computer Science tutoring to Diploma students living in Peru. Every session is live, online and in English, for Standard or Higher Level, either alone with a tutor or with fifteen to twenty other IB students. We cover both themes, the case study, Paper 2 code in Python or Java, databases and the internal assessment, which remains wholly the student\'s work. The IB school leads and we support it, at any hour a student picks on a Peruvian clock; the first session costs nothing.',

  picks: {
    eyebrow: 'Courses for computer science students',
    h2: 'Three courses an IB CS student in Peru starts with',
    lede: 'The Diploma course itself, a Cambridge course for students meeting computer science earlier, and a databases course that matches one of the subject\'s heaviest new areas.',
    items: [
      { course: 'ib-diploma-computer-science-course', code: 'ICST / 01', title: 'IB DP Computer Science', note: 'Built around the new guide as our course reads it: both themes, the case study in Paper 1, Paper 2 in Python by default with Java supported, and the internal assessment from plan to documentation. Joinable in any month of the Diploma.' },
      { course: 'igcse-computer-science-0478-course', code: 'ICST / 02', title: 'IGCSE Computer Science 0478', note: 'Six months from the basics for Cambridge students, and a sound first course for a student in 3rd of secundaria who will start the Diploma with no programming behind them.' },
      { course: 'mysql-mastery-for-teens', code: 'ICST / 03', title: 'MySQL for Teens', note: 'SQL from the first query to working applications over five to six months. Databases now sit in the course at both SL and HL, as our IB course page describes, and the lesson below comes from this territory.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who it is for',
      h2: 'Who needs an IB Computer Science tutor in Peru?',
      lede: 'Any Diploma student taking the subject who wants more time with programming, theory or the internal assessment than a school class allows. In Peru that need is sharper than in many countries, because school before the Diploma usually teaches no computing.',
      body: [
        { kind: 'three', cells: [
          { h3: 'First-time programmers', p: 'A student who chose computer science out of curiosity and has never written a loop. The first months of the Diploma move quickly; a tutor can make sure variables, conditions, loops and functions are solid before the course builds on them.' },
          { h3: 'Strong coders, weak theory', p: 'A student who has taught themselves Python from videos but loses marks on networks, databases or written explanation. For them the work is precise English, exact definitions and the habit of answering what the question asks.' },
          { h3: 'Students heading abroad', p: 'MINEDU reports 2,502 IB Diplomas earned in Peru in 2025. Students who plan to study computing at a university abroad want their programming, and their ability to talk about it in English, well ahead of the Diploma minimum.' }
        ] },
        { kind: 'p', mt: true, html: 'The school stays in charge. Teaching the course, setting deadlines and submitting assessed work are the IB school\'s job; ours is extra teaching beside it, in English. We are not connected with or endorsed by the IB, COAR, MINEDU, UTEC or any school, and the descriptions of the course on this page are our own.' }
      ]
    },
    {
      id: 'guide',
      tint: 'tint',
      eyebrow: 'The new guide',
      h2: 'What changed in IB Computer Science for exams from 2027?',
      lede: 'Quite a lot, according to the course page we teach from. The IB website turned our research request away, so what follows is how our own course reads the change; the official text is with the school\'s IB coordinator.',
      body: [
        { kind: 'two',
          leftH3: 'What our course page says changed',
          left: [
            'Our course page describes a new guide launched in February 2025 for first teaching in August 2025, with first assessment in May 2027. It says Paper 3 has been removed at both levels, the options have gone, and the case study now applies to SL and HL students alike, assessed inside Paper 1.',
            'It also says databases and object-oriented programming are now studied at both levels, not only at HL, and that the course is organised in two themes: concepts of computer science, and computational thinking and problem-solving.'
          ],
          rightH3: 'What that means for a student in Peru',
          right: [
            'Schools choose an exam session, and a Peruvian school on a November calendar may meet the new papers at a different moment from a school sitting in May; ask the coordinator which applies to you. Either way, the content is new for everyone, including teachers.',
            'Paper 2, as our course page describes it, now runs in two versions, one in Python and one in Java, and a school picks one at department level. A tutor must therefore teach in the school\'s language, not their own favourite. We teach Python by default and support Java.'
          ] },
        { kind: 'p', mt: true, html: 'The internal assessment, a computational solution to a real problem, keeps its weight in the course, and our course page notes a stronger emphasis on documenting the computational thinking behind it. We support planning, technique and documentation habits; the solution, the code and the writing must be the student\'s own, under the school\'s academic integrity rules.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Computing at school',
      h2: 'Is computer science taught in Peruvian secondary schools?',
      lede: 'Not as a subject. The national curriculum, the CNEB, has no computing or programming area in its plan of studies. Digital skills are a cross-curricular competency, and coding appears mainly in pilots and competitions.',
      body: [
        { kind: 'two',
          leftH3: 'Where digital skills sit',
          left: [
            'The CNEB lists competency 28, "Se desenvuelve en entornos virtuales generados por las TIC", among the competencies that cut across all areas. It is about using and creating in virtual environments, not about algorithms; no area of the timetable owns it.',
            'Two areas come closest. Ciencia y Tecnología includes a competency about designing and building technological solutions to problems, and Educación para el Trabajo has two periods a week on the regular secundaria day and three on the full day. Neither is a programming course.'
          ],
          rightH3: 'Where coding does appear',
          right: [
            'In July 2025 MINEDU launched Fábrica de Programadores, a pilot teaching Python to 1,000 public-school pupils in 4th and 5th of secundaria in Lima Norte, with the chance to sit the PCEP exam. It is a promising pilot, not a national subject.',
            'Then there are competitions. UTEC runs the Peruvian computing olympiads, open free of charge to every secondary pupil in Peru: OPI for programming, OPEIA for artificial intelligence and OPECIA for cybersecurity.'
          ] },
        { kind: 'p', mt: true, html: 'At home, the picture matters too. INEI found that 36.4% of Peruvian households had at least one computer in the second quarter of 2026. An IB CS student needs a computer they can program on for hours, so we check that early, and suggest class hours when a shared machine is free. For a fuller picture of what Peruvian school gives in computing and English, see <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>, and for school-leavers, <a class="ag-inline-link" href="/programacion-para-5to-de-secundaria">programación para 5to de secundaria</a>.' }
      ]
    },
    {
      id: 'ioi',
      tint: 'tint',
      eyebrow: 'Peru at the IOI',
      h2: 'How has Peru done at the International Olympiad in Informatics?',
      lede: 'Peru is a newcomer. The IOI\'s own statistics show Peru taking part every year since 2022, with one bronze medal and one honourable mention so far. The table lists each year without naming any student.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Peru at the International Olympiad in Informatics, 2022 to 2026', head: ['Year', 'Peru contestants', 'Contestants ranked', 'Best Peru rank', 'Award for Peru'], rows: [
          ['2022', '4', '349', '166th', 'One bronze medal'],
          ['2023', '4', '350', '221st', 'None'],
          ['2024', '3', '353', '258th', 'One honourable mention'],
          ['2025', '4', '330', '256th', 'None'],
          ['2026', '4', '375', '196th', 'None']
        ] },
        { kind: 'source', html: 'Source: IOI Statistics, Peru country page and Peru results page (stats.ioinformatics.org), read on 9 November 2026. The site counts 13 different contestants over five years; the 19 team places in the table are our own sum, so several students represented Peru more than once. Ranks are as listed by the site.' },
        { kind: 'two', mt: true,
          leftH3: 'How the team is chosen',
          left: [
            'Peru\'s IOI team comes through OPI, run by UTEC. Under the 2025 rules, the first phase was virtual and allowed C++ or Python; the in-person final at UTEC in Lima lasted five hours and allowed only C++. The top four of the final were selected for the IOI.',
            'Entry is free for secondary pupils. The 2025 rules set a maximum age of 20 on 1 July 2025 and required contestants to be at a Peruvian school in 2025 or to have left in 2024. For 2026, UTEC\'s page gave 18 March 2026 as the registration deadline and 11 April 2026 as the final.'
          ],
          rightH3: 'What it means for an IB student',
          right: [
            'Olympiad problems are much harder than IB Paper 2, but the habits overlap: read the problem exactly, reason about cases before typing, test the edges. An IB student who enjoys Paper 2 algorithms may enjoy OPI too.',
            'The OPI 2025 rules also ban generative AI for solving problems. That matches how we teach: students think through a problem themselves first. We are not connected with UTEC, OPI or the IOI, and we never reproduce their problems.'
          ] }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'A real lesson',
      h2: 'What does IB Computer Science tutoring look like? NULL in SQL, with Python',
      lede: 'With databases now in the course at both levels, as our course page describes, this is a lesson we teach early. It uses Python\'s built-in sqlite3, so it runs anywhere, and it shows why a missing value in a database is not the same as zero.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'A school coding club keeps a table of entries: student, grade and score. Two students, Bruno and Diego, registered but have not been marked yet, so their score is NULL. All names and numbers here are invented by us.',
            'Version 1 asks three innocent questions. How many rows, how many scores, and what is the average? Who has no score? And who scored below 50 or at least 50, which surely means everyone?'
          ],
          rightH3: 'What goes wrong',
          right: [
            'The first line says 5 rows but only 3 scores, and an average of 58.3: AVG quietly ignored the two NULLs. The second query, <code>score = NULL</code>, returns nothing at all, because in SQL nothing equals an unknown, not even another unknown.',
            'The third query is the real surprise. A condition that covers every possible number still returns only three students. A comparison with NULL is neither true nor false but unknown, and WHERE keeps only rows that are true.'
          ] },
        { kind: 'code', label: 'Version 1: three questions, three surprises', lang: 'Python', code: V1, note: 'It prints <code>(5, 3, 58.333333333333336)</code>, then <code>[]</code>, then <code>[(\'Ana\',), (\'Carla\',), (\'Elena\',)]</code>. Bruno and Diego vanish from a condition that seems to cover every score.' },
        { kind: 'code', label: 'Version 2, run after Version 1: ask about NULL properly', lang: 'Python', code: V2, note: 'It prints <code>[(\'Bruno\',), (\'Diego\',)]</code> and <code>(5, 2, 35.0)</code>: IS NULL finds the missing scores, and treating them as zero drops the average from 58.3 to 35.0.' },
        { kind: 'p', mt: true, html: 'Which average is right, 58.3 or 35.0? Neither, until someone says what NULL means here. If Bruno and Diego have not been marked yet, 58.3 is the average of the marked work. If they missed the test and the club rule says a missed test scores zero, 35.0 is right. <strong>NULL means unknown, not zero, and only a human can decide which it should become.</strong>' },
        { kind: 'p', html: 'That last sentence is the IB part. Exam questions about databases reward students who can explain behaviour precisely, and a strong internal assessment states its assumptions about data plainly. A student who writes "missing scores were excluded from the average because they were not yet marked" has shown the computational thinking the course asks for.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Before the Diploma.</strong> Without running anything, predict what <code>COUNT(score)</code> returns for the table. Then explain the difference from <code>COUNT(*)</code> in one English sentence.',
          '<strong>SL.</strong> Rewrite the third query so that it returns all five students. There are at least two ways; find both.',
          '<strong>HL.</strong> Add a second table of grades with a JOIN. What happens to a student whose grade has no matching row with an inner join, and with a left join?',
          '<strong>IA practice.</strong> Write the assumption you would put in your documentation about missing data for a project of your own, in two sentences.'
        ] }
      ]
    },
    {
      id: 'tutor',
      tint: 'tint',
      eyebrow: 'Two years',
      h2: 'What does an IB Computer Science tutor do across the Diploma?',
      lede: 'A plan that runs from the first loop to the final paper, adjusted to the school\'s order. This is ours, not the IB\'s, and every school organises its own calendar.',
      body: [
        { kind: 'ol', items: [
          '<strong>Make programming automatic.</strong> In the first months, short daily problems in the school\'s Paper 2 language until variables, conditions, loops, lists and functions need no thought.',
          '<strong>Teach theory in exact English.</strong> Networks, system fundamentals, databases and machine learning are learnt as precise definitions and explanations, practised in writing.',
          '<strong>Work the case study properly.</strong> When the school releases it, we read it closely with the student, build the vocabulary and practise answering questions on it, rather than skimming it the week before Paper 1.',
          '<strong>Practise object-oriented design.</strong> Classes, objects and relationships, drawn and coded, because our course page says OOP is now studied at both levels.',
          '<strong>Support the internal assessment honestly.</strong> Choosing a realistic problem, planning, testing and documenting: we teach the techniques; the student writes the solution and the documentation.',
          '<strong>Rehearse the papers.</strong> In the final months, timed papers in the student\'s language, with every lost mark sorted into knowledge, method, reading or time.'
        ] },
        { kind: 'p', mt: true, html: 'For the maths that sits beside computer science in many Diploma timetables, see our <a class="ag-inline-link" href="/tutor-ib-matematicas-en-ingles-peru">IB Matemáticas tutor page</a>, and for Spanish-speaking parents, <a class="ag-inline-link" href="/bachillerato-internacional-ciencias-de-la-computacion-tutor">tutor de IB Ciencias de la Computación</a> covers this same tutoring. Each of those pages is about the same live teaching, given in English.' }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Peru times',
      h2: 'What time would IB Computer Science tutoring be in Peru?',
      lede: 'At an hour the student picks. Clocks in Peru and India never move, so India is ten and a half hours later than Peru on every date. The table is a converter, not a schedule.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru times a Diploma student might pick, and the time in India', head: ['Peru time', 'India time', 'Why a student might choose it'], rows: [
          ['06:00', '16:30', 'A focused hour before a full school day'],
          ['09:30', '20:00', 'A Saturday morning of coding practice'],
          ['14:30', '01:00, next day', 'After a morning school shift'],
          ['17:00', '03:30, next day', 'Late afternoon, before homework'],
          ['20:30', '07:00, next day', 'Evening work on the internal assessment'],
          ['22:30', '09:00, next day', 'Paper practice late in the final year']
        ] },
        { kind: 'source', html: 'Zone data: IANA tz database. Lima has used UTC minus 5 without summer time since 1994; Kolkata, for India, uses UTC plus 5:30. Reasons in the third column are our own examples.' },
        { kind: 'p', mt: true, html: 'Book on your own clock; the tutor\'s calendar does the conversion. Neither country changes time, so an hour that works in March still works when deadlines bunch up later in the year. Extra sessions before internal deadlines or exams can be added when needed.' }
      ]
    },
    {
      id: 'think',
      tint: 'tint',
      eyebrow: 'Thinking, not copying',
      h2: 'Can an IB Computer Science student use AI tools?',
      lede: 'Carefully, within the school\'s rules and the tools\' own age terms. We teach students to reason through a problem and write the code themselves first; AI comes later, if at all, as a reviewer.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Age terms first', p: 'Most Diploma students are under 18. Anthropic\'s consumer terms set 18 as the minimum age for Claude, and OpenAI requires a parent\'s permission for ChatGPT users under 18. We follow those terms in class.' },
          { h3: 'Assessed work is yours', p: 'The internal assessment and any assessed task must be the student\'s own. The school\'s IB coordinator explains exactly what is allowed; we never write or edit assessed code or documentation.' },
          { h3: 'Practise without help', p: 'Peru\'s own olympiad, OPI, bans generative AI for solving problems. A student who can solve problems unaided is ready for OPI, for Paper 2 and for university.' }
        ] },
        { kind: 'p', mt: true, html: 'The lesson above shows why. An AI tool may confidently report an average of 58.3 without mentioning the two missing rows. A student who has learnt what NULL means asks the question the tool did not.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Milestones for an IB Computer Science student',
    lede: 'We wrote these milestones ourselves. A predicted grade says little about what to do next; these say exactly that.',
    table: { numCols: [], caption: 'IB Computer Science milestones (ours)', head: ['Milestone', 'When', 'The student can'], rows: [
      ['1. Writes code fluently', 'First term', 'Solve short problems in the school\'s language without notes'],
      ['2. Traces by hand', 'First year', 'Predict a program\'s output before running it'],
      ['3. Explains theory exactly', 'First year', 'Define and explain each theory topic in precise English'],
      ['4. Questions the data', 'First year onwards', 'Say what missing or odd data does to a result, as in the lesson'],
      ['5. Owns the IA', 'Second year, before the internal deadline', 'Explain every design choice and line of their own solution'],
      ['6. Finishes papers in time', 'Final months', 'Complete a timed paper, then find and fix each lost mark']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child what their program does before they run it. Milestone 2 is where real understanding shows.',
      'A student who can explain why a result might be wrong is further ahead than one who only gets results.'
    ] },
    right: { h3: 'For students', ps: [
      'Every time a query surprises you, write down why. Those notes become exam answers.',
      'Code that runs is not code that is right. Test the empty, the missing and the odd case.'
    ] }
  },

  catalogue: {
    eyebrow: 'More computing courses',
    h2: 'Nine more courses for IB computer science students',
    lede: 'Each is taught live, in English, by a mentor the learner keeps.',
    bands: [
      { num: 'I', h3: 'Programming languages', sub: 'Ages 13 to 18', courses: [
        { code: 'ICST / LANG / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The default Paper 2 language, from a first program upward.' },
        { code: 'ICST / LANG / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For students whose school chose the Java version of Paper 2.' },
        { code: 'ICST / LANG / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP', blurb: 'Python certification, the exam MINEDU\'s pilot also points to.' }
      ] },
      { num: 'II', h3: 'Problem solving', sub: 'For olympiad-minded students', courses: [
        { code: 'ICST / PS / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Data structures and algorithms from the beginning.' },
        { code: 'ICST / PS / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest technique for teens who already code.' },
        { code: 'ICST / PS / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The only language allowed in the OPI 2025 final.' }
      ] },
      { num: 'III', h3: 'Beyond the syllabus', sub: 'Diploma years and after', courses: [
        { code: 'ICST / UP / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'From Python to working models, with school maths.' },
        { code: 'ICST / UP / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'The maths that sits beside computer science.' },
        { code: 'ICST / UP / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'DSA for university', blurb: 'Interview-level algorithms for after the Diploma.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How tutoring runs',
    h2: 'How live IB Computer Science tutoring works from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'Peru mornings fall in the Indian late afternoon and evening, easy hours for our tutors.' },
      { time: 'Nights', l: 'Late sessions in Peru are possible too, useful when deadlines are close.' },
      { time: '1-on-1', l: 'One student, one tutor, following the school\'s language and order.' }
    ],
    cells: [
      { h3: 'Code every class', p: 'Students write and run code each session.' },
      { h3: 'School\'s language', p: 'Python or Java, matching Paper 2 at your school.' },
      { h3: 'Theory in English', p: 'Precise definitions, practised in writing.' },
      { h3: 'IA integrity', p: 'Technique taught; the solution stays the student\'s.' },
      { h3: 'Continuity', p: 'A single tutor from the first term to the final paper.' },
      { h3: 'Two formats', p: 'A class of fifteen to twenty, or a student alone with the tutor.' }
    ]
  },

  projectsH2: 'Projects by our older students',
  projectsLede: 'Students who keep coding with us build real software. Here is some of it; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Unedited words from families and learners who reviewed us on Google.',

  fees: {
    h2: 'IB Computer Science tutoring fees for Peru',
    lede: 'We charge in US dollars to a card. Your bank turns each charge into soles at its own rate on the day, so the soles amount can differ slightly from one month to the next.',
    free: ['A free first class', 'A quick look at the student\'s code and course', 'No card needed'],
    group: ['Fifteen to twenty IB students at a similar level', 'One tutor all the way', 'Two live classes a week', 'Monthly, cancel when you like'],
    one: ['One student and one tutor', 'Planned around the school\'s order and deadlines', 'Hours chosen by the family']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'IB Computer Science tutor in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. We teach every class live and online, and only in English. Tutors keep their speech clear, match the student\'s pace and accent, and put technical terms on the shared screen, so a student whose English is still growing can follow.' },
      { q: 'Do you teach Paper 2 in Python or Java?', a: 'Both. Our course page describes two versions of Paper 2 under the new guide, one in Python and one in Java, with the school choosing. We teach in the language your school uses, Python by default.' },
      { q: 'Does the IB recognise or endorse your tutoring?', a: 'No. Modern Age Coders is a private online school run from India. The International Baccalaureate, COAR, MINEDU, UTEC and Peruvian schools have no link with us and have not endorsed our classes. Assessed work is set, supervised and submitted by the IB school.' },
      { q: 'Will you help with the internal assessment?', a: 'We teach the techniques: choosing a realistic problem, planning, testing and documenting. The solution, the code and the documentation must be the student\'s own; we never write or edit them. Ask your IB coordinator where the line between teaching and helping sits at your school.' },
      { q: 'Is computer science taught in Peruvian schools?', a: 'Not as a subject. The national curriculum, the CNEB, treats digital skills as a cross-curricular competency and has no computing area. MINEDU\'s Fábrica de Programadores pilot taught Python to 1,000 pupils in Lima Norte from July 2025, but most students meet programming first in the Diploma.' },
      { q: 'Can sessions fit around a busy IB week?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. A 20:30 session in Peru is 07:00 the next morning in India, all year round.' },
      { q: 'Can you help me prepare for OPI?', a: 'We teach problem solving, algorithms and C++ or Python with problems we write ourselves; we never reproduce OPI problems. OPI is run by UTEC and is free for secondary pupils; we are not connected with it.' },
      { q: 'I have never programmed. Is it too late to start in the Diploma?', a: 'No, but start early. Many IB CS students begin with no programming at all. A few weeks of short daily practice in the school\'s language makes the rest of the course far easier.' },
      { q: 'What computer do I need?', a: 'A laptop or desktop on which you can install and run Python or Java, a steady connection and ideally a headset. Tablets and phones are not enough for programming.' },
      { q: 'How do I pay?', a: 'With a card, in US dollars, month by month. Any conversion into soles is done by your bank at its rate. There is no charge and no card needed for the first class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'Related pages',
    lede: 'More for IB computer science students and families in Peru.',
    items: [
      { href: '/ib-computer-science-online-tuition', label: 'IB computer science tuition', p: 'Our IB CS teaching in more detail, for any country.' },
      { href: '/ib-extended-essay-maths-computer-science-mentoring', label: 'Extended essay mentoring', p: 'Computer science and maths extended essays.' },
      { href: '/cambridge-igcse-computer-science-tuition', label: 'IGCSE computer science', p: 'The Cambridge course before the Diploma.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru', p: 'Everything we teach for learners in Peru.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'The age terms of common AI tools.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Reasoning before tools.' }
    ]
  },

  start: {
    h2: 'Book a free IB Computer Science class',
    lede: 'During the free session the tutor asks about your level, your school\'s Paper 2 language and your deadlines, looks at a short piece of your code or sets a small problem, and tells you honestly what to work on. Then you choose: one to one or a group, and an hour that suits you.',
    readFirst: 'Reading before you book? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a live class, and the <a class="ag-inline-link" href="/courses/ib-diploma-computer-science-course">IB Computer Science course page</a> lists the full syllabus as we teach it.',
    note: 'Sessions happen over live video, led from India and spoken in English throughout. A WhatsApp message in English reaches us fastest.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'IB and Cambridge', links: [
        { href: '/ib-computer-science-online-tuition', label: 'IB computer science' },
        { href: '/cambridge-igcse-computer-science-tuition', label: 'IGCSE computer science' },
        { href: '/ib-extended-essay-maths-computer-science-mentoring', label: 'Extended essay' },
        { href: '/ib-maths-tuition-online', label: 'IB maths tuition' }
      ] },
      { h4: 'How we work', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking first' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'NULL means unknown, not zero'
  },

  personalityCss: `
.ag-root.ag-icst .ag-hero h1 { max-width: 19ch; letter-spacing: -0.01em; }
.ag-root.ag-icst .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-icst .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-icst .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-icst .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'IOI Statistics (stats.ioinformatics.org, Peru country and results pages); UTEC OPI home and Reglamento OPI 2025; MINEDU, Currículo Nacional de la Educación Básica; MINEDU press releases on Fábrica de Programadores (24 July 2025) and IB results (17 April 2026); INEI TIC en los Hogares II Trimestre 2026; our own IB Computer Science course page; IANA tz database. Read 8 to 9 November 2026. ibo.org refused access and was not retried.',
    localProject: 'An original SQL lesson with Python sqlite3 on an invented club table with two NULL scores: COUNT(*) 5 against COUNT(score) 3 and AVG 58.3; WHERE score = NULL returns []; WHERE score < 50 OR score >= 50 returns only Ana, Carla and Elena; IS NULL finds Bruno and Diego; COALESCE(score, 0) changes the average to 35.0, so the analyst must state what NULL means. Plus pre-DP, SL, HL and IA tasks.',
    requiredMentions: ['(5, 3, 58.333333333333336)', "[('Ana',), ('Carla',), ('Elena',)]", "[('Bruno',), ('Diego',)]", '(5, 2, 35.0)', 'NULL means unknown, not zero, and only a human can decide which it should become.', 'Peru at the International Olympiad in Informatics, 2022 to 2026', 'the 19 team places in the table are our own sum', 'the in-person final at UTEC in Lima lasted five hours and allowed only C++', 'NULL means unknown, not zero'],
    sources: [
      { claim: 'Peru at the IOI: first 2022, 5 years, 13 contestants, 1 bronze, 1 honourable mention.', url: 'https://stats.ioinformatics.org/countries/PER' },
      { claim: 'Peru IOI results by year: team sizes, field sizes, best ranks, awards (2022 to 2026).', url: 'https://stats.ioinformatics.org/results/PER' },
      { claim: 'OPI, OPEIA, OPECIA run by UTEC, free for secondary pupils; OPI 2026 registration to 18 March 2026, final 11 April 2026.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'OPI 2025: Fase 1 virtual with C++ or Python; Fase 2 in person at UTEC, 5 hours, C++ only; top 4 to IOI; generative AI banned; age and school rules.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'No computing area; competency 28 transversal; Ciencia y Tecnología technological solutions; Educación para el Trabajo 2 and 3 periods.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fábrica de Programadores: 1,000 pupils, 4th and 5th of secundaria, Lima Norte, Python, PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: '2,502 IB Diplomas in Peru in 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' },
      { claim: '36.4% of Peruvian households had at least one computer (II quarter 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Our course page on the new IB CS guide (first assessment 2027, Paper 3 removed, case study in Paper 1, databases and OOP at both levels, two Paper 2 versions).', url: 'https://learn.modernagecoders.com/courses/ib-diploma-computer-science-course' },
      { claim: 'Peru UTC-5 all year, no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'IB guide details from ibo.org, the number of IB schools in Peru, or IB exam dates: ibo.org returned 403 and was not retried; course details are our course page\'s, labelled as ours.',
      'Names of IOI contestants: available on the IOI site but not printed; they are mostly minors and the page needs only counts.',
      'Any IB, COAR, MINEDU, UTEC or OPI endorsement or partnership: none, and the page says so.',
      'Reproducing OPI or IOI problems: refused; the lesson data and tasks are ours.',
      'A typed fee or soles conversion: refused; fees render from the template in USD.'
    ]
  }
};
