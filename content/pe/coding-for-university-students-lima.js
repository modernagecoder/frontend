// SHIP: market (city, university) | Lima university students: Python, DSA, Git and data in English, live, around a timetable | paired comparison: each person against themselves, because the crowd in each column changes
'use strict';
// Coding for university students in Lima (ag- city page, Peru cluster row PE083; alloc: cities, cou, #803103).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; timing flexible (2026-11-08); USD fees only
// through the template's data-price anchors. No job, salary, grade or admission promises.
// Angle: Lima students at UNI, UNMSM, PUCP, U de Lima and the rest study in Spanish; the tools, documentation and
// interviews of software are in English. The page plans programming beside a Lima degree year by year, and teaches a
// statistics habit every CS student needs on UNI's own open admission file. Universities appear as context only,
// from their own pages; we are not connected with any of them.
// Sources (research folder ~/Desktop/SkyCoders/keyword-research-2026-09/pe/, quotes string-matched in raw files):
//  - PUCP guide (FACTS 66) quoting Ley 30220: "La admisión a la universidad se realiza mediante concurso público";
//    UNI (FACTS 67, 68): three papers on three days; U de Lima (FACTS 86): "INICIO DE CLASES Lunes 29 de marzo de 2027";
//    UNMSM (FACTS 90): "el proceso de admisión 2026 consta de dos etapas (2026-I y 2026-II)".
//  - SUNEDU press note 15 September 2021 (MARKET.md): "94 universidades licenciadas (46 públicas y 48 privadas) que
//    albergan a 1 millón 100 mil de estudiantes universitarios" (dated 2021, labelled).
//  - EF EPI 2025 (ef_peru.raw): "ageGroup1Score":469 low (ages 18 to 20); "ageGroup3Score":559 high (26 to 30);
//    Lima city 555; job function IT 522.
//  - INEI TIC II trimestre 2026 (MARKET.md 1.4): "el 97,3% de la población de 19 a 24 años utilizó Internet".
//  - INEI Censos Nacionales 2025, Cuadro 1: Lima Metropolitana 10,141,775.
//  - Time (timezone.tsv): America/Lima UTC-5 all year; India 10 h 30 min ahead.
//  - Data: Universidad Nacional de Ingeniería (UNI), "Postulantes a los procesos de admisión de la Universidad Nacional de
//    Ingeniería [UNI]", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/postulantes-los-procesos-de-admisi%C3%B3n-de-la-universidad-nacional-de-ingenier%C3%ADa-uni,
//    licence odc-by on the dataset page, modified 13 October 2026. File Admision_UNI_2018-2_al_2020-1.csv (8,298,751 bytes,
//    sha256 6d475fc6797ec576...), 30,358 rows, cycles 2018-2, 2019-1, 2019-2, 2020-1; dictionary: id "Identificador
//    anónimo único para cada alumno, si el alumno participa en mas de una postulación debería aparecer nuevamente con el
//    mismo identificador"; calificacion_final_postulante "Puntaje o calificacion final obtenido en el examen de admisión".
//    The file also holds addresses and school names: never printed; only aggregates appear.
// Our own calculations (scratchpad pe/c2/uni/v1.py, v2.py; python3 -I, Python 3.14.8; ORDINARIO rows with a score):
//  v1: Applicants: 11054 / Attempt 1 rows 11054 mean 7.45 / Attempt 2 rows 3888 mean 9.301 / Attempt 3 rows 1312 mean
//      10.124 / Attempt 4 rows 305 mean 10.24
//  v2: Attempt 1 to 2: 3888 people, same-person gain 1.698 / at attempt 1: returners 7.603, leavers 7.367 /
//      Attempt 2 to 3: 1312 people, same-person gain 1.043 / at attempt 2: returners 9.081, leavers 9.413 /
//      Attempt 3 to 4: 305 people, same-person gain 0.856 / at attempt 3: returners 9.385, leavers 10.348
// Lesson family: paired comparison; averages by column compare different crowds (selection), so compare each person
// with themselves.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'from collections import defaultdict',
  'from statistics import mean',
  '',
  'tries = defaultdict(list)',
  'with open("Admision_UNI_2018-2_al_2020-1.csv", encoding="utf-8") as data:',
  '    for row in csv.DictReader(data):',
  '        if row["modalidad"] == "ORDINARIO" and row["calificacion_final_postulante"]:',
  '            when = (int(row["año_postulacion"]), int(row["ciclo_postulacion"]))',
  '            tries[row["id"]].append((when, float(row["calificacion_final_postulante"])))',
  '',
  'by_attempt = defaultdict(list)',
  'for scores in tries.values():',
  '    for n, (when, score) in enumerate(sorted(scores), start=1):',
  '        by_attempt[n].append(score)',
  '',
  'print("Applicants:", len(tries))',
  'for n in sorted(by_attempt):',
  '    print("Attempt", n, "rows", len(by_attempt[n]), "mean", round(mean(by_attempt[n]), 3))'
].join('\n');

const V2 = [
  'import csv',
  'from collections import defaultdict',
  'from statistics import mean',
  '',
  'tries = defaultdict(list)',
  'with open("Admision_UNI_2018-2_al_2020-1.csv", encoding="utf-8") as data:',
  '    for row in csv.DictReader(data):',
  '        if row["modalidad"] == "ORDINARIO" and row["calificacion_final_postulante"]:',
  '            when = (int(row["año_postulacion"]), int(row["ciclo_postulacion"]))',
  '            tries[row["id"]].append((when, float(row["calificacion_final_postulante"])))',
  '',
  'for scores in tries.values():',
  '    scores.sort()',
  '',
  'for k in (1, 2, 3):',
  '    pairs = [(s[k - 1][1], s[k][1]) for s in tries.values() if len(s) > k]',
  '    stayed = [s[k - 1][1] for s in tries.values() if len(s) == k]',
  '    gain = mean(b - a for a, b in pairs)',
  '    print(f"Attempt {k} to {k + 1}: {len(pairs)} people, same-person gain {gain:.3f}")',
  '    print(f"   at attempt {k}: returners {mean(a for a, b in pairs):.3f}, leavers {mean(stayed):.3f}")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Lima: coding for university students' },
  slug: 'coding-for-university-students-lima',
  code: 'cou',
  accent: '#803103',
  accentRationale: 'Coding for university students in Lima: a rust brown #803103 allocated to this row, the brick of Lima\'s older campuses, dark enough for 4.5:1 on every paper',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding for university students in Lima',
  title: 'Coding for University Students in Lima: Live, in English',
  description: 'Coding for Lima university students: Python, data structures, Git and data, live online in English around your timetable, with a statistics lesson on UNI open data.',
  ogDescription: 'Live online programming for university students in Lima, taught in English at hours that fit lectures and commutes: a year-by-year plan beside the degree, and an original Python lesson on UNI\'s open admission file.',
  twitterDescription: 'For Lima university students: Python, DSA, Git and data in English, live, around lectures, plus a lesson on UNI open data.',
  pageName: 'Coding for University Students in Lima',
  webPageDescription: 'A guide for university students in Lima to live online programming taught in English, built from university admission pages, SUNEDU, INEI and EF EPI 2025 figures, and an original paired-comparison lesson in Python on UNI\'s open admission dataset (ODC-By).',
  courseDescription: 'Live online programming in English for university students in Lima: Python, data structures and algorithms, Git and GitHub, SQL, Java, web development and data science, in a group of fifteen to twenty or one to one, at hours that fit a university timetable.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'University students, Lima',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#plan', label: 'Year by year' },
    { href: '#english', label: 'Why English' },
    { href: '#lesson', label: 'UNI data lesson' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Lima &middot; University students &middot; Live online, in English',
  h1: 'Coding for university students in Lima',
  lede: 'You study in Spanish at a Lima university, between lectures, labs and a long ride across the city. The programming world you are heading into works in English: its documentation, its error messages, its code reviews. This page sets out what to learn beside your degree each year, why learning it in English pays off, how live classes fit a Lima timetable, and a statistics lesson on UNI\'s own open admission data that every computing student should meet once.',
  secondaryCta: { href: '#lesson', label: 'See the UNI data lesson' },
  wa: 'Hello Modern Age Coders, I am a university student in Lima, Peru and would like live coding classes in English. Could I book a free first class?',
  heroNote: 'Live classes since 2020 &middot; more than 10,000 learners worldwide &middot; mentors who code with you, not at you',
  spec: [
    ['For', 'Undergraduates in Lima, any degree, 17 and over'],
    ['Core', 'Python, data structures, Git, SQL'],
    ['Also', 'Java, web, data science, AI'],
    ['Format', 'Groups of fifteen to twenty, or one to one'],
    ['Hours', 'Fitted around lectures, any day'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'Short answer',
  capsule: 'Modern Age Coders teaches university students in Lima to program, live online and in English: Python from zero, data structures and algorithms, Git and GitHub, SQL, and then Java, web development or data science. Lessons are taught live over video by a mentor, either one to one or with fifteen to twenty classmates, at hours that fit around lectures, labs and the commute. Students write and test their own code every session, so they learn to reason about a problem instead of pasting an answer, and they learn the English vocabulary of the field as they go.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses Lima university students start with',
    lede: 'Python if you are new to code, data structures if you already program, and Git because every team expects it.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'UNI-L / 01', title: 'Python Masterclass', note: 'From the first line to files, functions, classes and data. Right for first-year students in any faculty, and for engineers who met Python once and never felt sure of it.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'UNI-L / 02', title: 'Data Structures and Algorithms', note: 'Arrays, hash maps, trees, graphs and their costs, practised live. The core of a computing degree and of most technical interviews.' },
      { course: 'git-github-version-control-course-for-college-students', code: 'UNI-L / 03', title: 'Git and GitHub', note: 'Branches, pull requests and reviews, so group projects stop living in folders called final_v3. Short, practical, and useful from the first semester.' }
    ]
  },

  sections: [
    {
      id: 'context',
      eyebrow: 'Lima universities',
      h2: 'Who is this for, and how does it sit beside a Lima degree?',
      lede: 'Any undergraduate in Lima, whether in computing, engineering, economics or a field that has nothing to do with code yet. Universities set your degree; we teach programming beside it and are not connected with any university.',
      body: [
        { kind: 'two',
          leftH3: 'A big student city',
          left: [
            'SUNEDU reported in September 2021 that Peru had 94 licensed universities, 46 public and 48 private, with "1 millón 100 mil de estudiantes universitarios". It has published no newer national total that we found, so the figure keeps its year. A large share of those students live in Lima Metropolitana, a city of 10,141,775 people in the 2025 census.',
            'Lima\'s universities each run their own calendars. The Universidad de Lima, for example, starts its 2027-1 classes on Monday 29 March 2027, and UNMSM ran its 2026 admission in two stages, 2026-I and 2026-II.'
          ],
          rightH3: 'Where our classes fit',
          right: [
            'Degrees in Peru are taught in Spanish, and they cover theory well. What students tell us they lack is volume of practice: writing hundreds of small programs, reading other people\'s code, and using the tools teams use.',
            'Our classes add that practice, at an hour you choose, without asking you to travel. They do not replace a course, earn credits, or count towards a grade; your university alone decides those.'
          ] }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Year by year',
      h2: 'What should a Lima university student learn beside the degree each year?',
      lede: 'Our suggested plan. Adjust it to your degree; a computing student moves faster through the first rows, an economics student may stop after data.',
      body: [
        { kind: 'table', numCols: [], caption: 'A programming plan beside a five-year Lima degree (ours)', head: ['Year', 'Focus', 'Course', 'You can show at the end'], rows: [
          ['First', 'Python and Git', 'Python masterclass, Git and GitHub', 'Small tools in a public repository'],
          ['Second', 'Data structures and algorithms', 'DSA masterclass', 'Solutions you can explain and time'],
          ['Third', 'Databases and the web', 'MySQL, full stack web development', 'A working web app with a database'],
          ['Fourth', 'Data or a second language', 'Data science, or Java', 'An analysis on real open data, or a Java service'],
          ['Final', 'Depth in one direction', 'AI and ML, generative AI, or interview practice', 'A finished project you can present in English']
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Start small and public.</strong> Push every exercise to GitHub from week one. A history of small commits is more convincing than one large upload.',
          '<strong>Write before you search.</strong> Attempt each problem for twenty minutes before reading any solution or asking an AI tool. Then compare.',
          '<strong>Learn to read errors in English.</strong> Copy the last line of every traceback into your notes with what it meant. In a month you will recognise most of them.',
          '<strong>Explain your code aloud.</strong> In class the mentor asks you to walk through your solution. That is the skill technical interviews test.',
          '<strong>Use real data once a semester.</strong> Peru\'s open-data portal has thousands of datasets. The lesson below is one example.'
        ] }
      ]
    },
    {
      id: 'language',
      eyebrow: 'Python or Java',
      h2: 'Should a Lima university student learn Python or Java first?',
      lede: 'Python first for almost everyone; Java first only if your degree already teaches it in the first year or you are sure you want backend or Android work.',
      body: [
        { kind: 'two',
          leftH3: 'The case for Python',
          left: [
            'Python lets a first-year student write something useful in the first week: a script that renames files, a grade calculator, a chart from a CSV. The syntax gets out of the way, so attention goes to the logic.',
            'It is also the language of data work in economics, engineering, the sciences and AI, which makes it useful to students well outside computing.'
          ],
          rightH3: 'The case for Java',
          right: [
            'Java makes you state types and structure classes from the start. Many computing degrees use it for object-oriented programming courses, and students who meet it early find those courses easier.',
            'If your curriculum switches to Java in the second year, learn Python now and take our Java course the semester before. The ideas carry over; only the syntax is new.'
          ] },
        { kind: 'p', mt: true, html: 'Whichever you choose, the habits matter more than the language: small programs every week, tests before trust, and code you can explain line by line in English. Students already deep in a computing degree will find the specific path on <a class="ag-inline-link" href="/java-course-peru">our Java course page for Peru</a> and <a class="ag-inline-link" href="/python-course-peru">our Python course page for Peru</a>.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Why English',
      h2: 'Why learn programming in English as a Lima student?',
      lede: 'Because the field already works in English, and because your English is likely to grow fastest in exactly these years. We teach only in English, and always live.',
      body: [
        { kind: 'two',
          leftH3: 'What the EF figures suggest',
          left: [
            'EF\'s English Proficiency Index 2025 gives Peruvians aged 18 to 20 a score of 469, in its low band, and those aged 26 to 30 a score of 559, in its high band. The same edition scores Lima city 555 and people working in IT 522.',
            'These are different people, not the same people measured twice, so we read it cautiously: the years around university look like a time when English can grow fast. Practising it with code, where the vocabulary is narrow and repeated, is an efficient way to use that window.'
          ],
          rightH3: 'What it changes day to day',
          right: [
            'Python\'s documentation, Stack Overflow answers, library READMEs and most video courses are in English. So are compiler errors, whatever the language of your operating system.',
            'Mentors are based in India and teach in clear, steady English. They expect questions, repeat when asked, and help you say "this function returns a list of tuples" as naturally as you say it in Spanish.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'English you will use in your first month (our list)', head: ['English', 'In a sentence', 'Spanish'], rows: [
          ['to return', 'The function returns the average', 'devolver'],
          ['an argument', 'Pass the file name as an argument', 'un argumento'],
          ['to raise an exception', 'It raises a ValueError on empty input', 'lanzar una excepción'],
          ['a pull request', 'Open a pull request for review', 'una solicitud de cambios'],
          ['edge case', 'An empty list is an edge case', 'caso límite']
        ] }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'A Lima data lesson',
      h2: 'Do applicants really score higher on every retake at UNI?',
      lede: 'UNI publishes anonymised data on its admission applicants as open data. We use it, in our own lesson, to teach a mistake that appears in research, business dashboards and student projects alike: comparing averages of groups whose members keep changing.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Universidad Nacional de Ingeniería shares "Postulantes a los procesos de admisión" through Peru\'s national open-data portal, licensed ODC-By (Open Data Commons Attribution). The file Admision_UNI_2018-2_al_2020-1.csv covers four admission cycles, 2018-2 to 2020-1, in 30,358 rows.',
            'Its data dictionary describes the id column as an anonymous identifier that "debería aparecer nuevamente con el mismo identificador" when a person applies more than once. That makes repeat applicants traceable without knowing who they are. We use only the ordinary exam route, rows with a score, and print only averages.'
          ],
          rightH3: 'The question',
          right: [
            'For each applicant we sort their attempts in time, then ask: how does the average score change from first attempt to second, third and fourth?',
            'Version 1 does what most first analyses do. It puts every first attempt in one column, every second attempt in another, and compares the column averages.'
          ] },
        { kind: 'code', label: 'Version 1: average score by attempt number', lang: 'Python', code: V1, note: 'It prints: <code>Applicants: 11054</code>, <code>Attempt 1 rows 11054 mean 7.45</code>, <code>Attempt 2 rows 3888 mean 9.301</code>, <code>Attempt 3 rows 1312 mean 10.124</code> and <code>Attempt 4 rows 305 mean 10.24</code>.' },
        { kind: 'p', mt: true, html: 'Read naively, retakes help a lot at first and then barely at all: from attempt 3 to attempt 4 the average rises by only 0.116 points. But the columns contain different people. Only 305 applicants reach a fourth attempt, and they are not a random fifth of the 1,312 who made a third. Version 2 compares each person with themselves.' },
        { kind: 'code', label: 'Version 2: the same person, before and after', lang: 'Python', code: V2, note: 'It prints: <code>Attempt 1 to 2: 3888 people, same-person gain 1.698</code>, <code>at attempt 1: returners 7.603, leavers 7.367</code>, <code>Attempt 2 to 3: 1312 people, same-person gain 1.043</code>, <code>at attempt 2: returners 9.081, leavers 9.413</code>, <code>Attempt 3 to 4: 305 people, same-person gain 0.856</code> and <code>at attempt 3: returners 9.385, leavers 10.348</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Two ways to measure the change between attempts (our calculation, ordinary route)', head: ['Step', 'Change in column averages', 'Average change for the same people', 'People in the pair'], rows: [
          ['Attempt 1 to 2', '1.851', '1.698', '3,888'],
          ['Attempt 2 to 3', '0.823', '1.043', '1,312'],
          ['Attempt 3 to 4', '0.116', '0.856', '305']
        ] },
        { kind: 'source', html: 'Data: Universidad Nacional de Ingeniería, Postulantes a los procesos de admisión, 2018-2 to 2020-1, from the national open-data portal under an ODC-By licence. Every figure is our own, in points on the file\'s own score scale. The file also contains addresses and school names, which we neither use nor print. A "first attempt" here is the first within these four cycles; some applicants may have applied before 2018-2.' },
        { kind: 'p', mt: true, html: 'The last line explains everything. At attempt 3, the people who came back for a fourth try averaged 9.385; those who did not come back averaged 10.348. The column for attempt 4 is filled by weaker attempt-3 scorers, so its average looks flat even though those same people improved by 0.856 on average. Comparing crowds hid most of the change. This is the general rule: when membership changes between groups, compare matched pairs. It says nothing about whether anyone should retake an exam; that is a personal decision, and admission is decided by the university alone.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Check the pairing.</strong> Confirm no id appears twice in the same cycle in the ordinary route before trusting the sort.',
          '<strong>Add uncertainty.</strong> Compute a 95% interval for the 0.856 gain with 305 pairs. Is it clearly above zero?',
          '<strong>Find the selection.</strong> Group attempt-1 scores into bands and show, band by band, who returns.',
          '<strong>Write it in English.</strong> Summarise the finding in three sentences a non-programmer could follow, without claiming cause.',
          '<strong>Generalise.</strong> Name one dashboard at a company or university where the same trap could appear, and how you would pair the data.'
        ] }
      ]
    },
    {
      id: 'fit',
      eyebrow: 'Around a Lima timetable',
      h2: 'How do live online classes fit a Lima student\'s week?',
      lede: 'Better than a second commute. A class you join from your room, a campus library or a quiet corner at work costs only the hour itself.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Fixed or moving', p: 'Groups meet at a regular hour you choose when joining. One-to-one classes can move week by week around exams, lab reports and part-time work.' },
          { h3: 'Connection', p: 'INEI found that 97.3% of people aged 19 to 24 in Peru were internet users in its survey for April to June 2026. A laptop and a stable connection are all you need.' },
          { h3: 'During exams', p: 'Pause during finals and restart afterwards. Monthly plans have no long contract, so the plan can follow the semester.' }
        ] },
        { kind: 'p', mt: true, html: 'Students who want something narrower than this page can go straight to a subject: <a class="ag-inline-link" href="/java-for-computer-science-students-peru">Java for computer science students</a>, <a class="ag-inline-link" href="/python-for-engineering-students-peru">Python for engineering students</a>, the <a class="ag-inline-link" href="/c-plus-plus-course-peru">C++ course</a> or <a class="ag-inline-link" href="/sql-and-data-analysis-course-peru">SQL and data analysis</a>. The national overview for students is <a class="ag-inline-link" href="/coding-courses-for-university-students-peru">coding courses for university students in Peru</a>.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are the classes in Lima?',
      lede: 'At hours you pick. Lima keeps the same clock all year, and so does India, so a slot never drifts.',
      body: [
        { kind: 'table', numCols: [], caption: 'Lima hours against the mentor\'s India time (illustrations, not a timetable)', head: ['Lima', 'India', 'India date'], rows: [
          ['07:00', '17:30', 'Same'],
          ['09:30', '20:00', 'Same'],
          ['12:00', '22:30', 'Same'],
          ['17:00', '03:30', 'Next'],
          ['21:00', '07:30', 'Next']
        ] },
        { kind: 'source', html: 'Lima runs five hours behind UTC and never changes its clocks (tz zone America/Lima); India runs five and a half hours ahead of UTC. The gap stays at 10 hours 30 minutes.' },
        { kind: 'p', mt: true, html: 'Book in Lima time and the mentor sees the India time automatically. Many students choose early morning before lectures or a lunchtime hour on campus; late evening works too.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How a university student progresses with us',
    lede: 'Our milestones for students, whatever their degree. Each one is something you can demonstrate, not a number of hours.',
    table: { caption: 'Programming milestones for university students (ours)', head: ['Milestone', 'Usually by', 'You can'], rows: [
      ['1. Fluent basics', 'Month 2', 'Write and debug small Python programs alone'],
      ['2. Versioned', 'Month 3', 'Work through branches and pull requests'],
      ['3. Efficient', 'Month 6', 'Choose a data structure and state its cost'],
      ['4. Persistent', 'Month 8', 'Store and query data with SQL'],
      ['5. Analytical', 'Month 10', 'Analyse a real file and avoid a misleading comparison'],
      ['6. Communicative', 'Month 12', 'Present a project and its limits in English']
    ] },
    left: { h3: 'In practice', ps: [
      'Milestone 5 is the UNI lesson: spotting that the attempt-4 column holds different people from the attempt-3 column.',
      'You get a short note after each block on what to strengthen.'
    ] },
    right: { h3: 'A rule to keep', ps: [
      'When the members of a group change, compare each member with themselves.',
      'A flat average can hide a real change.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Lima university students',
    lede: 'Three directions. Every course is live, in English, with a regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Software', sub: 'Build things', courses: [
        { code: 'UNI-L / S / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java for college', blurb: 'Core Java to Spring Boot.' },
        { code: 'UNI-L / S / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack web', blurb: 'React, Node.js and deployment basics.' },
        { code: 'UNI-L / S / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL', blurb: 'SQL, schema design and administration.' }
      ] },
      { num: 'II', h3: 'Data and AI', sub: 'Analyse and model', courses: [
        { code: 'UNI-L / D / 01', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Python, machine learning and deep learning.' },
        { code: 'UNI-L / D / 02', slug: 'ai-ml-masterclass-complete-college', title: 'AI and ML', blurb: 'From Python to deep learning and generative AI.' },
        { code: 'UNI-L / D / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'LLMs, retrieval and AI agents.' }
      ] },
      { num: 'III', h3: 'Foundations', sub: 'Maths and modern practice', courses: [
        { code: 'UNI-L / F / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The maths behind lessons like the one above.' },
        { code: 'UNI-L / F / 02', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Proofs, calculus and matrices at degree level.' },
        { code: 'UNI-L / F / 03', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Vibe coding for college', blurb: 'Building with AI assistants while keeping your own judgement.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live classes work for Lima students',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before lectures', l: 'Early Lima hours meet the Indian evening.' },
      { time: 'Between or after', l: 'Midday and evening hours are possible; you choose.' },
      { time: '1-on-1', l: 'A personal hour that moves around your exams.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'Someone who knows your code and your goals.' },
      { h3: 'English that helps', p: 'Clear, steady, technical English, with patience.' },
      { h3: 'You type', p: 'Every solution is yours; the mentor reviews.' },
      { h3: 'Adults only', p: 'University groups never mix with school students.' },
      { h3: 'Real tools', p: 'Git, a terminal, an editor teams actually use.' },
      { h3: 'Group or solo', p: 'A class of fifteen to twenty, or just you.' }
    ]
  },

  projectsH2: 'What our older students have built',
  projectsLede: 'Students who keep going ship real tools. Some are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> collect more.',
  reviewsLede: 'From Google, in the words of students and parents.',

  fees: {
    h2: 'Fees for university students in Lima',
    lede: 'Plans are paid month by month. The price is set in US dollars and your card is billed in dollars; the soles amount on your statement depends on your bank\'s exchange rate that day.',
    free: ['A free first class', 'A short problem to gauge your level', 'No card required'],
    group: ['Fifteen to twenty students at a similar level', 'One mentor for the course', 'Two live classes a week', 'Month to month, stop any time'],
    one: ['You and one mentor', 'Your own syllabus and projects', 'Hours set around your semester']
  },

  faq: {
    eyebrow: 'Lima students ask',
    h2: 'Coding for university students in Lima: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. All classes are live, online and taught only in English. Mentors keep a steady pace, adapt to your accent, and help you put into English what you already understand in Spanish.' },
      { q: 'I study at a Lima university. Do your classes count towards my degree?', a: 'No. We give no credits or grades and we are not connected with UNI, UNMSM, PUCP, the Universidad de Lima or any other university. Our classes are practice beside your degree.' },
      { q: 'I have never programmed. Where do I start?', a: 'With the Python masterclass and the Git course. Both start from zero. After about three months most students move on to data structures.' },
      { q: 'Will this get me a job?', a: 'We make no job or salary promises. We teach skills that software teams use and help you build projects you can show and explain; how you use them is up to you.' },
      { q: 'Can I use AI tools in class?', a: 'Sometimes, and openly. You attempt problems yourself first, then compare with an AI suggestion and explain any difference. The aim is that you understand every line you submit.' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. For the mentor in India it is always 10 hours 30 minutes later: 09:30 in Lima is 20:00 there.' },
      { q: 'Can I pause during exams?', a: 'Yes. Plans are monthly. Pause during finals and restart when the semester allows.' },
      { q: 'How much does it cost?', a: 'You pay monthly by card in the US dollars shown here, and your bank handles the change into soles. Browsing from India shows rupees instead. Your first class is free of charge.' },
      { q: 'Do I get a certificate?', a: 'Some courses close with a completion certificate from us. It records your work; it is not a university credit or degree, and neither SUNEDU nor any university has a part in it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for university students in Peru.',
    items: [
      { href: '/coding-courses-for-university-students-peru', label: 'Coding courses for university students in Peru', p: 'The national guide for students.' },
      { href: '/java-for-computer-science-students-peru', label: 'Java for computer science students', p: 'Java alongside a computing degree.' },
      { href: '/python-for-engineering-students-peru', label: 'Python for engineering students', p: 'Numerical Python for engineers.' },
      { href: '/sql-and-data-analysis-course-peru', label: 'SQL and data analysis in Peru', p: 'Queries and analysis on Peruvian open data.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'The Lima page for children and teenagers at bilingual schools.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'All Peru pages', p: 'Every course and city for Peru.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is a short problem at your level and a conversation about your degree and goals. The mentor then suggests a course and a format.',
    readFirst: 'To look around first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or open the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'Teaching is live, online and English-only, from mentors in India. Message us on WhatsApp, in English, for a fast reply.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'For students', links: [
        { href: '/coding-courses-for-university-students-peru', label: 'University students, Peru' },
        { href: '/java-for-computer-science-students-peru', label: 'Java for CS' },
        { href: '/python-for-engineering-students-peru', label: 'Python for engineers' },
        { href: '/c-plus-plus-course-peru', label: 'C++ course' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Compare each person with themselves'
  },

  personalityCss: `
.ag-root.ag-cou .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-cou .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-cou .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-cou .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cou .ag-code-head b { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'PUCP, UNI, Universidad de Lima and UNMSM admission pages; SUNEDU press note of 15 September 2021; INEI Censos Nacionales 2025 and ICT bulletin II trimestre 2026; EF EPI 2025; tz database America/Lima. Data: UNI, Postulantes a los procesos de admisión 2018-2 to 2020-1, ODC-By.',
    localProject: 'Do applicants score higher on every retake at UNI? An original paired-comparison lesson on UNI\'s anonymised admission file (ODC-By, ordinary route): Version 1 averages by attempt number (7.45, 9.301, 10.124, 10.24), suggesting almost no gain from attempt 3 to 4; Version 2 compares each person with themselves (gains 1.698, 1.043, 0.856) and shows attempt-4 returners scored 9.385 at attempt 3 against 10.348 for leavers. Lesson family: paired comparison against changing crowds.',
    requiredMentions: ['Admision_UNI_2018-2_al_2020-1.csv', 'Attempt 4 rows 305 mean 10.24', 'same-person gain 0.856', 'returners 9.385, leavers 10.348', '10,141,775', '1 millón 100 mil de estudiantes universitarios', 'a score of 469', 'Compare each person with themselves', 'Monday 29 March 2027'],
    sources: [
      { claim: 'UNI admission applicants 2018-2 to 2020-1, anonymised, ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/postulantes-los-procesos-de-admisi%C3%B3n-de-la-universidad-nacional-de-ingenier%C3%ADa-uni' },
      { claim: 'SUNEDU 2021: 94 licensed universities, 1.1 million students.', url: 'https://www.gob.pe/institucion/sunedu/noticias/522805-sunedu-gracias-al-licenciamiento-1-millon-100-mil-estudiantes-acceden-a-educacion-universitaria-de-calidad' },
      { claim: 'Universidad de Lima 2027-1 classes start 29 March 2027.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: 'UNMSM 2026 admission in two stages.', url: 'https://www.gob.pe/institucion/unmsm/informes-publicaciones/7042180-aclaracion-sobre-el-proceso-de-admision-2026-a-la-unmsm' },
      { claim: 'EF EPI 2025 scores by age, Lima and IT.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Internet use by age, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Lima Metropolitana population 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' }
    ],
    rejectedClaims: [
      'Any advice to retake or not retake an admission exam, or any admission promise: refused; the page says admission is the university\'s decision.',
      'Addresses, school names or any row-level data from the UNI file: never printed.',
      'Job or salary outcomes: no promises.',
      'Credits, grades or any connection with UNI, UNMSM, PUCP, U de Lima or SUNEDU: none.',
      'A current national student total: the only SUNEDU figure found is from 2021 and is labelled so.',
      'Spanish-language teaching: every class is in English.'
    ]
  }
};
