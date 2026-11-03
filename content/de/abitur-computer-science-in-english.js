'use strict';
// Abitur computer science (Informatik) in English (ag- pillar, Germany cluster row DE006).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only, with
// mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle: Informatik as an Abitur subject explained in English: how the written exam is set in each of the 16 Länder,
// whether a computer is allowed, Grundkurs and Leistungskurs hours, the NRW 2027 date, and an original SQL exercise,
// because database queries appear on the official aids in Niedersachsen and Sachsen.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/abitur-computer-science-in-english/,
// fetched 2 November 2026; standardsicherung.schulministerium.nrw.de returned HTTP 403 on 3 November 2026 for
// /zentralabitur-gost, kept as nrw-za-HTTP403.html, not retried):
//  - GI Informatik-Monitor 2026/27, Oberstufe sections of all 16 Land pages: e.g. NRW "Beide Aufgabensätze enthalten vier
//    Aufgaben ... im Grundkurs zwei Aufgaben und im Leistungskurs drei Aufgaben aus", "Eine Aufgabenauswahl durch die
//    Schülerinnen und Schüler ist nicht vorgesehen", "Der Einsatz eines Computers ... nicht vorgesehen", aids
//    "Wörterbuch zur deutschen Rechtschreibung, wissenschaftlicher Taschenrechner oder CAS/MMS"; BY "Große Teile des
//    schriftlichen Informatikabiturs beinhalten Programmieraufgaben auf Papier"; BW "Programmieraufgaben dürfen in der im
//    Kurs eingeführten Programmiersprache bearbeitet werden. Eine Programmierumgebung ist als Hilfsmittel nicht erlaubt";
//    NI "Die Verwendung eines Taschenrechners oder einer Formelsammlung ist ... nicht zulässig", "ein zentral vorgegebenes
//    Informationsblatt ... Operationen auf abstrakten Datentypen und die Notation von Datenbankabfragen"; SN "Dokumentationen
//    für SQL und Python 3 und Java sowie ein für die Prüfung zugelassener Computer"; TH "Verpflichtende Programmieraufgaben
//    sind in jeder Wahlaufgabe enthalten; von drei Wahlaufgaben müssen zwei gelöst werden"; SH "Der von der
//    Rechnerbenutzung abhängige Teil darf ein Viertel der Bewertungseinheiten ... nicht übersteigen"; BE and BB
//    "dezentral entwickelt ... Die Bearbeitung an einem Rechner ist in allen Aufgaben ... zugelassen"; HB "dezentral",
//    "Eine Bearbeitung von Prüfungsaufgaben am Rechner ist nicht vorgesehen", GK "eine mündliche Prüfung ..., jedoch keine
//    schriftliche"; HE "zentral (landesweit einheitlich)", aids "eine Operatorenliste sowie ein Wörterbuch"; HH "zentral
//    entwickelt", "keine praktischen Anteile"; MV "zentral durch eine Aufgabenkommission", "Alle Aufgaben können praktische
//    Anteile beinhalten"; RP "Die Abiturauswahlkommission wählt unter den drei Vorschlägen zwei aus"; SL "praktische
//    Anteile (z. B. Programmieraufgaben, praktische Anwendungen am Computer) unzulässig"; ST "dezentral erstellt", LK at
//    "Zwei Gymnasien"; GK/LK hours per Land (NRW fact 81; others in the same sections). National: about 15 percent (97).
//  - NRW Anlage A 2027 (raw nrw-abi2027-a, fetched 2 Nov 2026): "Freitag, 16. April 2027 ... Ernährungslehre, Informatik,
//    Technik X X" (checked against the rendered PDF table); main period 13 April to 5 May 2027 (42); start 9:00 (48).
//  - KMK Sek II: four or five exam subjects, two at raised level (11); papers central "in nahezu allen Ländern" (13).
//  - BWINF: round 2 "kann als Ersatzleistung für die besondere Lernleistung im Abitur gelten. Ob dies möglich ist, hängt
//    von Bundesland und Schule ab" (149).
// Our own: kurse.py (python3 -I with sqlite3, 3 November 2026): 20 rows without the join condition, 5 with it; COUNT(*)
// gives Dev 1, COUNT(b.kurs_id) gives Dev 0. Names and data invented.
// Lesson family: predict the row count before you run a query.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const SQL = [
  'import sqlite3',
  '',
  'db = sqlite3.connect(":memory:")',
  'db.executescript("""',
  'CREATE TABLE schueler (id INTEGER PRIMARY KEY, name TEXT);',
  'CREATE TABLE kurs (id INTEGER PRIMARY KEY, titel TEXT);',
  'CREATE TABLE belegung (schueler_id INTEGER, kurs_id INTEGER);',
  'INSERT INTO schueler VALUES (1, \'Aylin\'), (2, \'Ben\'), (3, \'Chiara\'), (4, \'Dev\');',
  'INSERT INTO kurs VALUES (1, \'Informatik LK\'), (2, \'Mathe LK\'), (3, \'Physik GK\');',
  'INSERT INTO belegung VALUES (1, 1), (1, 2), (2, 2), (3, 1), (3, 3);',
  '""")',
  '',
  'def rows(sql):',
  '    return db.execute(sql).fetchall()',
  '',
  'forgot = rows("""SELECT s.name, k.titel FROM schueler s, belegung b, kurs k',
  '                 WHERE b.kurs_id = k.id""")',
  'joined = rows("""SELECT s.name, k.titel FROM schueler s, belegung b, kurs k',
  '                 WHERE b.kurs_id = k.id AND b.schueler_id = s.id""")',
  'print("Without the second condition:", len(forgot), "rows")',
  'print("With it:", len(joined), "rows")',
  '',
  'star = rows("""SELECT s.name, COUNT(*) FROM schueler s',
  '               LEFT JOIN belegung b ON b.schueler_id = s.id',
  '               GROUP BY s.id ORDER BY s.id""")',
  'col = rows("""SELECT s.name, COUNT(b.kurs_id) FROM schueler s',
  '              LEFT JOIN belegung b ON b.schueler_id = s.id',
  '              GROUP BY s.id ORDER BY s.id""")',
  'print("COUNT(*):        ", star)',
  'print("COUNT(b.kurs_id):", col)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'guide', label: 'Abitur computer science in English' },
  slug: 'abitur-computer-science-in-english',
  code: 'acs',
  accent: '#00634A',
  accentRationale: 'Abitur computer science: a circuit-board green #00634A, distinct from the slate of the Abitur maths page and the petrol of the Informatik door; contrast above 4.5:1 on the paper #FBF8F2 and its tints',
  pageType: 'market',
  priceSubject: 'coding',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Abitur computer science in English',
  title: 'Informatik Abitur in English: How the Exam Works by Land',
  description: 'Informatik as an Abitur subject, explained in English: how each Land sets the written exam, paper or computer, Grundkurs and Leistungskurs, NRW 2027.',
  ogDescription: 'Computer science in the German Abitur, in English: who writes the papers in each of the sixteen Länder, whether a computer is allowed, Leistungskurs hours, the NRW 2027 date and a solved SQL exercise.',
  twitterDescription: 'The Informatik Abitur explained in English: every Land\'s written exam, paper or computer, and practice.',
  pageName: 'Informatik Abitur in English',
  webPageDescription: 'An English guide to Informatik as an Abitur subject in Germany, built from the Informatik-Monitor 2026/27 Oberstufe descriptions of all sixteen Länder, the KMK and the NRW 2027 timetable, with an original SQL exercise in Python and sqlite3.',
  courseDescription: 'Live online Informatik Oberstufe and Abitur tutoring in English for Grundkurs and Leistungskurs pupils across Germany: Java or Python, object orientation, data structures, databases and SQL, automata, and written exam practice on paper, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Abitur computer science',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#subject', label: 'Subject' },
    { href: '#exam', label: 'By Land' },
    { href: '#paper', label: 'On paper' },
    { href: '#sql', label: 'SQL' },
    { href: '#extras', label: 'Contests' }
  ],
  eyebrow: 'Germany &middot; Informatik Abitur &middot; Ages 16 to 19',
  h1: 'Informatik Abitur, explained in English',
  lede: 'Computer science is a full Abitur subject in Germany, and in several Länder it can be one of the written exams. But it is also the Abitur subject whose rules differ most from Land to Land: in one, the paper is written by a central commission and solved with a pen; in another, a teacher writes it and pupils may use a computer. This page sets out, in English, what each Land does, what that means for preparation, and works through one database task of the kind the official aids point to.',
  secondaryCta: { href: '#exam', label: 'See your Land' },
  wa: 'Hello Modern Age Coders, I take Informatik in the Oberstufe in Germany and would like Abitur tutoring in English. Could I book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; Informatik Grundkurs and Leistungskurs, in English',
  spec: [
    ['For', 'Grundkurs and Leistungskurs pupils'],
    ['Covers', 'Java or Python, data structures, SQL'],
    ['Practice', 'Code on paper, timed papers'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Times', 'German afternoons and weekends'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Informatik can be taken in the Abitur as a Grundkurs or Leistungskurs in every Land, but the written exam differs: Bayern, Nordrhein-Westfalen and others set central papers solved without a computer, while Berlin and Brandenburg allow one. Modern Age Coders teaches Informatik Oberstufe and Abitur classes live online in English, in Java or Python, in a group or one to one.',

  picks: {
    eyebrow: 'Courses for the Oberstufe',
    h2: 'Three courses for Informatik in the Oberstufe',
    lede: 'One built for the German Abitur, one for the algorithms behind it, and one for pupils who want a competition result too.',
    items: [
      { course: 'informatik-abitur-course-java-python', code: 'ACS / 01', title: 'Informatik Oberstufe and Abitur', note: 'Ages 16 to 19. Java or Python, object orientation, lists, stacks, queues and trees, SQL and automata, with written practice on paper.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'ACS / 02', title: 'Algorithms and data structures', note: 'Searching, sorting, recursion and complexity, the hardest part of most Leistungskurs papers.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'ACS / 03', title: 'BWINF and BWKI preparation', note: 'For pupils aiming at the Bundeswettbewerb Informatik, whose second round some Länder accept towards the Abitur.' }
    ]
  },

  sections: [
    {
      id: 'subject',
      eyebrow: 'The subject',
      h2: 'Can you take computer science in the German Abitur?',
      lede: 'Yes, in every Land, but how far you can take it depends on the Land and on what your school offers.',
      body: [
        { kind: 'two',
          leftH3: 'How the Abitur is built',
          left: [
            'The KMK says the Abitur exam covers four or five subjects, at least two of them at raised level (the Leistungskurs, called Leistungsfach or profilgebendes Fach in some Länder), and two of them from German, a foreign language and maths. Informatik can fill one of the other places.',
            'The written Abitur papers are set centrally in almost all Länder, according to the KMK. For Informatik that is only partly true, as the table below shows: several Länder still let teachers write the Informatik paper.'
          ],
          rightH3: 'How many pupils choose it',
          right: [
            'The Gesellschaft für Informatik puts the share of Oberstufe pupils who take Informatik in the Qualifikationsphase at about 15 percent nationally in its Informatik-Monitor 2026/27. On its Land pages the 2024/25 figures run from 7 percent in Baden-Württemberg to 43 percent in Sachsen.',
            'Choosing it is one step; finding a course is another. In Sachsen a Leistungskurs exists only at selected Gymnasien, and in Sachsen-Anhalt the raised level is offered at two Gymnasien with a mathematics and science focus.'
          ] },
        { kind: 'p', mt: true, html: 'In most Länder the Grundkurs runs two or three hours a week and the Leistungskurs five. Nordrhein-Westfalen, for example, offers a three-hour Grundkurs and a five-hour Leistungskurs in the Qualifikationsphase; Hamburg runs the raised level as a profile subject of at least four hours, Schleswig-Holstein as one of four.' }
      ]
    },
    {
      id: 'exam',
      eyebrow: 'The written exam, Land by Land',
      h2: 'How is the written Informatik Abitur set in each Land?',
      lede: 'Three questions decide how to prepare: who writes the paper, whether a computer may be used, and how many hours the Leistungskurs has. The answers, Land by Land:',
      body: [
        { kind: 'table', numCols: [], caption: 'The written Informatik Abitur at raised level, 2026/27', head: ['Land', 'Who sets the paper', 'Computer in the written exam?', 'Leistungskurs'], rows: [
          ['Baden-Württemberg', 'Central', 'No; no programming environment', '5 hours'],
          ['Bayern', 'Central', 'No; programming on paper', '5 hours'],
          ['Berlin', 'Teachers; one of two proposals chosen', 'Allowed where the task needs it', '5 hours'],
          ['Brandenburg', 'Teachers; one of two proposals chosen', 'Allowed where the task needs it', '5 hours'],
          ['Bremen', 'Each school; authority approves', 'No', '5 hours'],
          ['Hamburg', 'Central', 'No practical parts', 'At least 4 hours'],
          ['Hessen', 'Central', 'No', '5 hours'],
          ['Mecklenburg-Vorpommern', 'Central commission', 'Practical parts possible in all tasks', '5 hours'],
          ['Niedersachsen', 'Central', 'No; no calculator either', '5 hours'],
          ['Nordrhein-Westfalen', 'Central', 'No', '5 hours'],
          ['Rheinland-Pfalz', 'Teachers; a commission picks two of three', 'Possible, not required', '5 hours'],
          ['Saarland', 'Central', 'No practical parts', '5 hours'],
          ['Sachsen', 'Central', 'Yes, in Part B', 'Selected Gymnasien'],
          ['Sachsen-Anhalt', 'Each school, approved by the Landesschulamt', 'Possible', 'Two Gymnasien'],
          ['Schleswig-Holstein', 'Teachers; supervisor selects', 'Possible, at most a quarter of the marks', '4 hours'],
          ['Thüringen', 'Central commission', 'Yes, for tools used in class', '5 hours']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, the gymnasiale Oberstufe section of each Land page, read 2 November 2026. The monitor compiles each Land\'s Abitur ordinances; where it reports an expert\'s answer rather than an ordinance, it says so. Your school\'s own exam information takes precedence.' },
        { kind: 'two', mt: true,
          leftH3: 'Nordrhein-Westfalen in detail',
          left: [
            'NRW sends each school one set of four tasks for the Grundkurs and one for the Leistungskurs. The teacher, not the pupil, picks two of the four for the Grundkurs and three for the Leistungskurs. The permitted aids are a German spelling dictionary and a scientific calculator or CAS.',
            'The written Informatik Abitur 2027 in NRW, Grundkurs and Leistungskurs, is on Friday 16 April 2027, inside a main exam period that runs from 13 April to 5 May 2027; NRW exams start at 9:00.'
          ],
          rightH3: 'Three Länder that use a computer',
          right: [
            'In Sachsen the central paper has a compulsory Part B with practical work at an approved computer, and the aids include documentation for SQL, Python 3 and Java.',
            'In Thüringen every optional task contains compulsory programming, pupils solve two of three, and tools used in class, such as a diagram editor or an automaton simulator, may be used if installed. Schleswig-Holstein caps computer-dependent work at a quarter of the marks.'
          ] }
      ]
    },
    {
      id: 'paper',
      tint: 'tint',
      eyebrow: 'Programming on paper',
      h2: 'Why do most Länder test programming without a computer?',
      lede: 'In Bayern, the Informatik-Monitor says, large parts of the written Informatik Abitur are programming tasks on paper with no work at a computer. Baden-Württemberg lets pupils answer in the language their course used but forbids a programming environment. Niedersachsen goes furthest: no calculator, no formula book, only a centrally issued information sheet.',
      body: [
        { kind: 'three', cells: [
          { h3: 'No compiler to help', p: 'On paper, a missing semicolon or a wrong index is yours to find. Pupils who only ever test by running code meet this late, often in the mock.' },
          { h3: 'Reading counts as much as writing', p: 'Many tasks give code and ask what it does, where it fails, or how to complete it. That is a reading skill, and it can be practised.' },
          { h3: 'The sheet tells you the topics', p: 'Niedersachsen\'s information sheet summarises operations on abstract data types and the notation of database queries. Those two areas are worth practising by hand everywhere.' }
        ] },
        { kind: 'p', mt: true, html: 'Is the Abitur written in English? Our sources do not say any Land offers the Informatik Abitur in English, and we do not claim it. The tasks will be in German, while the code itself uses English keywords. Our classes are in English, and every German exam term is taught next to its English meaning.' },
        { kind: 'table', mt: true, numCols: [], caption: 'German words you will meet in an Informatik paper', head: ['In the task', 'In class', 'What to watch'], rows: [
          ['Klasse, Objekt, Methode', 'class, object, method', 'Klasse also means a school year'],
          ['Attribut, Konstruktor', 'attribute, constructor', 'Initialise every attribute'],
          ['Liste, Stapel, Schlange', 'list, stack, queue', 'Which end you add and remove at'],
          ['Binärbaum, Traversierung', 'binary tree, traversal', 'Pre-, in- or post-order'],
          ['Tabelle, Primärschlüssel, Fremdschlüssel', 'table, primary key, foreign key', 'The key that links two tables'],
          ['Abfrage, Verbund', 'query, join', 'The join condition'],
          ['Automat, Zustand, Übergang', 'automaton, state, transition', 'The empty word'],
          ['Laufzeit, Komplexität', 'running time, complexity', 'Best case or worst case?']
        ] }
      ]
    },
    {
      id: 'sql',
      eyebrow: 'A worked exercise',
      h2: 'A database task: predict the rows before you run the query',
      lede: 'Our own exercise, not a real Abitur task. Four invented pupils, three courses and a table of who takes what. The first habit we teach for any SQL question on paper is to say how many rows the answer should have before writing a single line.',
      body: [
        { kind: 'code', label: 'Courses and enrolments in sqlite3', lang: 'Python', code: SQL, note: 'Run with Python 3 and its built-in sqlite3 on 3 November 2026, it prints <code>Without the second condition: 20 rows</code>, <code>With it: 5 rows</code>, <code>COUNT(*):         [(\'Aylin\', 2), (\'Ben\', 1), (\'Chiara\', 2), (\'Dev\', 1)]</code> and <code>COUNT(b.kurs_id): [(\'Aylin\', 2), (\'Ben\', 1), (\'Chiara\', 2), (\'Dev\', 0)]</code>.' },
        { kind: 'two', mt: true,
          leftH3: 'Trap one: the forgotten join',
          left: [
            'There are five enrolments, so a list of who takes which course must have five rows. The first query has 20. It links each enrolment to its course but never to its pupil, so every one of the four pupils is paired with every one of the five enrolments: 4 times 5.',
            'A pupil who predicted five rows sees at once that 20 is wrong. A pupil who did not predict anything copies 20 rows into the answer.'
          ],
          rightH3: 'Trap two: counting nothing as one',
          right: [
            'Dev takes no course. A LEFT JOIN keeps Dev in the result with empty course fields, so <code>COUNT(*)</code>, which counts rows, says 1. <code>COUNT(b.kurs_id)</code> counts only fields that are filled, and says 0, which is the truth.',
            'On paper there is no output to check against. The prediction is the only test you have.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Count first.</strong> How many rows should the answer have? Write the number in the margin.',
          '<strong>One condition per link.</strong> Three tables need two join conditions. Count the tables, count the conditions.',
          '<strong>Ask about the empty case.</strong> Is there a pupil, a course or a customer with nothing? Decide what the query should say for them.',
          '<strong>Try it.</strong> Write the query that lists every course with the number of pupils in it, including courses nobody takes. How many rows will it return?'
        ] }
      ]
    },
    {
      id: 'extras',
      eyebrow: 'Beyond the exam',
      h2: 'Can a competition count towards the Informatik Abitur?',
      lede: 'Sometimes. Several Länder let a pupil bring in a besondere Lernleistung, a substantial piece of work outside the timetable, as part of the Abitur.',
      body: [
        { kind: 'two',
          leftH3: 'The Bundeswettbewerb Informatik',
          left: [
            'The organiser BWINF says the second round of the Bundeswettbewerb Informatik can count as a substitute for the besondere Lernleistung in the Abitur, and that whether this is possible depends on the Land and the school. The monitor names a besondere Lernleistung as an option in Informatik in Berlin, Brandenburg, Hamburg, Hessen, Mecklenburg-Vorpommern, Niedersachsen, Rheinland-Pfalz, Sachsen and Schleswig-Holstein.',
            'Ask your school before you plan on it.'
          ],
          rightH3: 'Oral and presentation exams',
          right: [
            'A Grundkurs pupil often meets Informatik as an oral or presentation exam rather than a written one. In Bremen, for example, the Grundkurs can be examined orally but not in writing; in Hessen a Grundkurs can be the fifth subject as a presentation with a colloquium.',
            'An oral exam rewards the same skill as paper: explaining code in words, step by step.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Preparation plan',
    h2: 'From Einführungsphase to the written exam',
    lede: 'Our own plan for a pupil sitting the Informatik Abitur in spring 2027 or 2028, adjusted to the Land, the language and the level.',
    table: { caption: 'An Informatik Abitur plan (ours)', head: ['When', 'Focus', 'Practice'], rows: [
      ['Einführungsphase', 'Objects and classes in Java or Python', 'Model a small system as classes'],
      ['Q1, first half', 'Lists, stacks, queues, recursion', 'Trace each operation on paper'],
      ['Q1, second half', 'Trees, searching and sorting', 'Compare running times by hand'],
      ['Q2, first half', 'Databases, SQL, automata and grammars', 'Predict every result before running it'],
      ['Last weeks', 'Full papers in your Land\'s format', 'Timed, by hand, marked against the task\'s demands']
    ] },
    left: { h3: 'For parents', ps: [
      'Tell us your Land, the school\'s language and whether Informatik is a written subject. The plan follows from those three facts.',
      'We report what your child can do without a computer, because that is what most written papers test.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Every week, write one program on paper before typing it. Then compare.',
      'Keep a list of German terms with the English beside them, and read past questions in German.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Oberstufe pupils',
    lede: 'Live and in English like everything we teach, with the same mentor from the first week.',
    bands: [
      { num: 'I', h3: 'Languages', sub: 'Ages 14 to 19', courses: [
        { code: 'ACS / LANG / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Classes, objects, inheritance and collections.' },
        { code: 'ACS / LANG / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From scripts to classes and data.' },
        { code: 'ACS / LANG / 03', slug: 'mysql-mastery-for-teens', title: 'SQL and databases', blurb: 'Tables, keys, joins and grouping.' }
      ] },
      { num: 'II', h3: 'Stretch', sub: 'Ages 14 to 19', courses: [
        { code: 'ACS / MORE / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest-style algorithms with time limits.' },
        { code: 'ACS / MORE / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models built and tested in Python.' },
        { code: 'ACS / MORE / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik', blurb: 'The maths most Informatik pupils also sit.' }
      ] },
      { num: 'III', h3: 'Other routes', sub: 'Ages 10 to 19', courses: [
        { code: 'ACS / ALT / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'For younger brothers and sisters, Klasse 5 to 10.' },
        { code: 'ACS / ALT / 02', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'For Diploma pupils whose school teaches the IB.' },
        { code: 'ACS / ALT / 03', slug: 'cambridge-a-level-computer-science-9618-course', title: 'Cambridge A Level CS', blurb: 'For pupils at British schools.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live Informatik Abitur classes work',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most Oberstufe pupils take one programming session and one paper session each week.',
    slots: [
      { time: 'After school', l: 'For example 15:15 German time, 19:45 in India in winter.' },
      { time: 'Evening', l: 'For example 18:30 German time, 22:00 in India once summer time begins on 28 March 2027.' },
      { time: '1-on-1', l: 'Saturday around noon, or extra hours before the written exam.' }
    ],
    cells: [
      { h3: 'Your school\'s language', p: 'Java or Python, whichever your course uses.' },
      { h3: 'Pen and paper', p: 'Code written by hand, then checked on a machine.' },
      { h3: 'Your Land\'s format', p: 'Papers shaped like the ones your Land sets.' },
      { h3: 'German task words', p: 'Every German term paired with its English meaning.' },
      { h3: 'Mocks', p: 'Timed papers, marked task by task.' },
      { h3: 'Size of class', p: 'A batch of fifteen to twenty, or private lessons.' }
    ]
  },

  projectsH2: 'What our older students build',
  projectsLede: 'Oberstufe pupils with us also make software of their own. A handful are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'What parents and students wrote in their Google reviews, unedited.',

  fees: {
    h2: 'Fees for Oberstufe pupils in Germany',
    lede: 'Fees are monthly and include eight live classes. You see them in euro here, calculated from the European Central Bank reference rate; your card is charged in US dollars and your bank makes the conversion, which can leave a small difference on the statement.',
    free: ['A free first class', 'A short paper task to see how you read code', 'No card needed'],
    group: ['Fifteen to twenty pupils at your level', 'One regular mentor', 'Two classes a week', 'Monthly, stop any month'],
    one: ['You and one mentor', 'Your Land\'s format and your school\'s language', 'Extra sessions before the exam']
  },

  faq: {
    eyebrow: 'Pupils and parents ask',
    h2: 'Informatik Abitur in English: common questions',
    items: [
      { q: 'Can I take Informatik as an Abitur subject in Germany?', a: 'Yes. Every Land offers Informatik in the Oberstufe, as a Grundkurs and in most Länder as a Leistungskurs, but your school must run the course. About 15 percent of Oberstufe pupils take it nationally, according to the Informatik-Monitor 2026/27.' },
      { q: 'Is a computer allowed in the written Informatik Abitur?', a: 'It depends on the Land. Bayern, Baden-Württemberg, Hessen, Niedersachsen and Nordrhein-Westfalen, among others, use no computer. Berlin and Brandenburg allow one where a task needs it, Sachsen has a practical Part B at a computer, and Schleswig-Holstein caps computer work at a quarter of the marks.' },
      { q: 'When is the Informatik Abitur 2027 in NRW?', a: 'The written Informatik exam for Grundkurs and Leistungskurs in Nordrhein-Westfalen is on Friday 16 April 2027, according to the ministry\'s 2027 timetable. Exams start at 9:00.' },
      { q: 'Which programming language is used, Java or Python?', a: 'It depends on the school and the Land. Baden-Württemberg lets pupils answer in the language their course used, and Sachsen\'s exam aids include documentation for Python 3 and Java. We teach in whichever language your school uses.' },
      { q: 'Can I write the Informatik Abitur in English?', a: 'None of our sources says any Land offers it in English, so plan for German tasks. Program code uses English keywords anyway, and in class we pair every German exam term with its English meaning.' },
      { q: 'Does the Bundeswettbewerb Informatik count for the Abitur?', a: 'Sometimes. BWINF says its second round can replace the besondere Lernleistung in the Abitur, depending on the Land and the school. Ask your school early.' },
      { q: 'Are the classes in German?', a: 'No. All our classes are live and in English only, with mentors in India who match your pace and accent. That suits Informatik well, because the code is English; the German exam words are taught alongside.' },
      { q: 'When are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our mentors\' clocks in India run 4 hours 30 minutes ahead of German time in winter and 3 hours 30 minutes ahead from 28 March 2027.' },
      { q: 'Do you award a grade or certificate for the Abitur?', a: 'No. The Abitur and its marks come only from your school and Land. We teach alongside school and have no connection with any ministry, the KMK or BWINF.' },
      { q: 'How much are the classes?', a: 'You pay month by month. This page shows the amount in euro using the ECB reference rate; the charge itself is made in US dollars and converted by your card provider. Your first class costs nothing.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Oberstufe pupils in Germany.',
    items: [
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The pool exam, marks and NRW dates.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'The same subject for younger pupils, written in German.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our Germany pages.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'For pupils who want to build models.' },
      { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur syllabus', p: 'Every topic in the course.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class looks like.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class you read a short piece of code on screen, without running it, and say what it does. The mentor sees how you think about code, checks what your Land\'s exam asks for, and suggests a plan.',
    readFirst: 'Before booking, read <a class="ag-inline-link" href="/courses/informatik-abitur-course-java-python">the course syllabus</a> and <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'Classes are online and live, in English only, with mentors based in India. Message us on WhatsApp for the quickest reply.',
    formNote: 'Free, without a card, without commitment.'
  },

  footer: {
    cols: [
      { h4: 'Oberstufe', links: [
        { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur' },
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Abitur Mathematik' },
        { href: '/courses/problem-solving-dsa-masterclass-teens', label: 'Algorithms' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Count the rows first'
  },

  personalityCss: `
.ag-root.ag-acs .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-acs .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-acs .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-acs .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-acs .ag-band-head h3 { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'GI Informatik-Monitor 2026/27 Oberstufe sections for all sixteen Länder; NRW Anlage A 2027 timetable; KMK Sekundarstufe II page; BWINF Bundeswettbewerb page. Read 2 November 2026. SQL exercise ours.',
    localProject: 'An original sqlite3 exercise on invented pupils and courses: a missing join condition returns 20 rows instead of 5, and COUNT(*) reports 1 for a pupil with no course where COUNT(b.kurs_id) reports 0. Lesson family: predict the row count before you run a query.',
    requiredMentions: ['Friday 16 April 2027', 'Without the second condition: 20 rows', 'With it: 5 rows', 'Possible, at most a quarter of the marks', 'Teachers; a commission picks two of three', 'documentation for SQL, Python 3 and Java', 'Each school, approved by the Landesschulamt', 'Count the rows first'],
    sources: [
      { claim: 'Written exam rules, aids, GK/LK hours by Land.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Bayern paper programming, Sachsen practical part, Thüringen tasks (Land pages).', url: 'https://informatik-monitor.de/2026-27/laendervergleich/sachsen' },
      { claim: 'NRW 2027 Informatik date.', url: 'https://www.standardsicherung.schulministerium.nrw.de/system/files/media/document/file/anlage_a_termine_2027_ht.pdf' },
      { claim: 'Abitur subjects and central papers.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/sekundarstufe-ii-gymnasiale-oberstufe-und-abitur.html' },
      { claim: 'BWINF round 2 as besondere Lernleistung.', url: 'https://bwinf.de/bundeswettbewerb/' }
    ],
    rejectedClaims: [
      'That the Informatik Abitur can be written in English: not stated in any source; the page says so.',
      'That NRW uses Java with BlueJ: not in a fetched source; language left to the school.',
      'Fresh NRW Informatik Vorgaben 2027: the host returned HTTP 403 on 3 November 2026; not retried, not used.',
      'Any affiliation with BWINF, the KMK or a ministry: none.'
    ]
  }
};
