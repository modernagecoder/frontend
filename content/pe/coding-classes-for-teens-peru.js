// SHIP: market | Teens in Peru: build, compete or certify, in English; Peru at the IOI 2022 to 2026 | sorting with a tuple key: reverse=True also flips the tie-break; negate one field
'use strict';
// Coding classes for teens in Peru (ag- English door, Peru cluster row PE003, hubGroup ages; alloc cote, #004A28).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Audience: teenagers of 12 to 17 in Peru who read English (bilingual, Cambridge and IB pupils, families who moved to Peru,
// Peruvian teens who want English practice) and their parents. Targets "coding classes for teens peru", the English twin of
// "programación para adolescentes".
// Spine (different from the Spanish twin, which asks which course suits a secundaria student and walks through Python,
// games, OPI/ONEM and AI): three routes a teenager can take (build, compete, certify); Python or C++ judged by what the
// Peruvian contests and the state pilot actually use; Peru's record at the IOI year by year (the primary-source table);
// what secundaria gives; an original lesson on ranking a scoreboard; AI tools within the vendors' age terms; the clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/coding-classes-for-teens-peru/ and
// facts-school/src/; read 9 November 2026; every quote string-matched in the raw text):
//  - IOI Statistics, Peru results https://stats.ioinformatics.org/results/PER (ioi-results-per.html, fetched 9 Nov 2026):
//    per year, Peruvian contestants and rank: 2026 four contestants, best "196/375", no award; 2025 four, best "256/330";
//    2024 three, best "258/353", one "Honourable Mention"; 2023 four, best "221/350"; 2022 four, best "166/349", "Bronze".
//    Member page (ioi-member-per.html): "First participation: 2022", "Years participated: 5", "Contestants participated: 13",
//    "Gold medals: 0", "Silver medals: 0", "Bronze medals: 1", "Honourable mentions: 1". Names are not printed on the page.
//  - UTEC OPI rules 2025 (opi-reglamento-2025.txt, LaTeX accent artefacts kept): "Esta fase ser´a virtual."; "Se podr´a usar
//    C++ o Python"; "Se podr´a usar solo C++."; "Los 4 primeros puestos de la FASE 2 ser´an seleccionados para participar en
//    IOI-2025."; "Tener como m´aximo 20 a˜nos de edad al d´ıa 1 de Julio de 2025."; "Queda prohibido el uso de IA generativa
//    para la resoluci´on de problemas."; "Per´u viene participando en la IOI desde el a˜no 2022". Paraphrased, not quoted.
//  - UTEC OPI home (opi-home.txt): "abiertas gratuitamente a todos los estudiantes de secundaria del país"; "Inscripciones :
//    hasta el 18 de marzo del 2026 . Competencia : 11 de Abril (Fase 2 - Final)"; OPEIA "Competencia : 19 de marzo del 2026";
//    menu "OPI OPEIA OPECIA".
//  - MINEDU, Fábrica de Programadores, 24 July 2025 (FACTS 45, 46): "1000 escolares de 4.º y 5.º de secundaria de Lima Norte
//    con formación en programación Python y certificación internacional"; "podrán rendir el examen PCEP".
//  - Python Institute PCEP page (../cursos-de-programacion-para-universitarios-peru/pcep.txt): "Exam code PCEP-30-03",
//    "Prerequisites None Number of questions 35 Exam duration 50 minutes Passing score 70%".
//  - CNEB (FACTS 39, 40, 41): JER "Matemática 4 4 4 4 4 ... Total de horas 35"; Educación para el trabajo 2 a week (JER) and
//    3 (JEC, 45 hours); no computing area. MINEDU Edades normativas (FACTS 14): 1° secundaria 12 ... 5° secundaria 16.
//  - El Peruano, 11 Oct 2026 (FACTS 105): "la ONEM 2026 convocó a más de 1,7 millones de estudiantes de secundaria".
//  - INEI TIC II Trimestre 2026 Cuadro 2.1 row 12 a 18 años "89,7 91,4 90,7 92,5".
//  - AI tool ages (content/ai-tool-age-audit.json): ChatGPT "at least 13 years old ... If you are under 18 you must have your
//    parent or legal guardian's permission"; Claude "at least 18 years old"; GitHub Copilot floor 13.
//  - Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30.
// Our own calculations: 4 + 4 + 3 + 4 + 4 = 19 places filled by Peru at five IOIs, by 13 different students (IOI's own
// count), so some students went more than once (labelled ours on the page).
// Our own example (board_v1.py, board_v2.py, board_v3.py in the src-pages folder, python3 -I, Python 3.14): v1 prints
// "1 Bruno 300 140", "2 Diego 300 120", "3 Ana 250 95", "4 Carla 250 80", "5 Elena 180 60"; v2 prints "1 Diego 300 120",
// "2 Bruno 300 140", "3 Carla 250 80", "4 Ana 250 95", "5 Elena 180 60"; v3 (two stable sorts) prints
// "['Diego', 'Bruno', 'Carla', 'Ana', 'Elena']". Contestants and scores are invented by us.
// Lesson family: sorting with a tuple key; reverse=True reverses every field including the tie-break; fix by negating
// one field, or by two stable sorts, least important key first.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const DATA = [
  'results = [',
  '    ("Ana", 250, 95),',
  '    ("Bruno", 300, 140),',
  '    ("Carla", 250, 80),',
  '    ("Diego", 300, 120),',
  '    ("Elena", 180, 60),',
  ']'
].join('\n');

const V1 = DATA + '\n' + [
  '# Higher score wins; on a tie, less time wins.',
  'board = sorted(results, key=lambda r: (r[1], r[2]), reverse=True)',
  'for place, (name, score, minutes) in enumerate(board, start=1):',
  '    print(place, name, score, minutes)'
].join('\n');

const OUT1 = [
  '1 Bruno 300 140',
  '2 Diego 300 120',
  '3 Ana 250 95',
  '4 Carla 250 80',
  '5 Elena 180 60'
].join('\n');

const V2 = [
  'board = sorted(results, key=lambda r: (-r[1], r[2]))',
  'for place, (name, score, minutes) in enumerate(board, start=1):',
  '    print(place, name, score, minutes)'
].join('\n');

const OUT2 = [
  '1 Diego 300 120',
  '2 Bruno 300 140',
  '3 Carla 250 80',
  '4 Ana 250 95',
  '5 Elena 180 60'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Coding for teens, 12 to 17' },
  slug: 'coding-classes-for-teens-peru',
  code: 'cote',
  accent: '#004A28',
  accentRationale: 'Coding classes for teens in Peru: a deep cloud-forest green #004A28, the dense green of the forests on the eastern slopes of the Andes, steady and serious for a page about real study; contrast 8.48 on the paper #FBF8F2 and well above 4.5 on every paper tone',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding classes for teens in Peru',
  title: 'Coding Classes for Teens in Peru: Live Online, in English',
  description: 'Coding classes for teens in Peru, aged 12 to 17: live online and taught in English. Python, C++, games, AI and olympiad-style problem solving, any hour.',
  ogDescription: 'Build, compete or certify: three routes for a teenager in Peru who wants to code, with Peru\'s year-by-year record at the International Olympiad in Informatics, what secundaria gives, AI age rules and a Python lesson on ranking a scoreboard.',
  twitterDescription: 'Live coding classes in English for teenagers in Peru: Python, C++, games, AI and contest problem solving.',
  pageName: 'Coding Classes for Teens in Peru',
  webPageDescription: 'A guide for teenagers in Peru and their parents who want coding taught live in English, built from IOI statistics for Peru 2022 to 2026, UTEC\'s OPI rules and home page, MINEDU press releases and the CNEB, the Python Institute PCEP page, INEI household technology data, vendor age terms and the tz database, with an original Python lesson on sorting.',
  courseDescription: 'Live online coding classes for teenagers of 12 to 17 in Peru, taught in English by mentors based in India: Python, C++, Java, games, web and AI, and contest-style problem solving, in a group of fifteen to twenty or one to one, at a time the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Coding for teens',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#routes', label: 'Three routes' },
    { href: '#language', label: 'Python or C++' },
    { href: '#ioi', label: 'Peru at the IOI' },
    { href: '#lesson', label: 'Sorting lesson' },
    { href: '#hours', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Ages 12 to 17 &middot; Live online, in English',
  h1: 'Coding classes for teens in Peru',
  lede: 'Thirteen is a good age to stop playing with code and start making things other people use. This page is for teenagers in Peru who read English, and for their parents: the three directions a young coder can take, which language suits which goal, how Peruvian students have actually fared at the world\'s top school computing contest, and a short Python lesson that catches a mistake even experienced programmers make.',
  secondaryCta: { href: '#lesson', label: 'Try the sorting lesson' },
  wa: 'Hello Modern Age Coders, I am writing from Peru about coding classes in English for a teenager. Could we book a free first class?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ students worldwide &middot; real code from the first lesson, explained in English',
  spec: [
    ['Ages', '12 to 17, grouped by age'],
    ['Languages', 'Python, C++, Java, JavaScript'],
    ['Goals', 'Projects, contests, certificates'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Peru time', 'Any hour that suits'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'The quick answer',
  capsule: 'Modern Age Coders teaches coding to teenagers of 12 to 17 in Peru. Every class is live, online and taught in English by a mentor based in India, who works through real code with the student on a shared screen. Teens learn Python first, then choose a direction: building apps, games and websites; contest problem solving in C++ or Python for events like Peru\'s Informatics Olympiad; or a recognised Python certificate. Classes run in a group of fifteen to twenty or one to one, at any hour that suits the family in Peru time, and the first class is free.',

  picks: {
    eyebrow: 'Where teenagers begin',
    h2: 'Three starting courses for teenagers in Peru',
    lede: 'Most teenagers start with Python. Those already aiming at contests or games start elsewhere, and the free class helps decide.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'COTE / 01', title: 'Python for Teens', note: 'For complete beginners of 13 to 18. Typed code from the first class, then data, files and small programs that solve real problems. Python is also the language of the PCEP certificate and of MINEDU\'s own Python pilot.' },
      { course: 'cpp-programming-masterclass-for-teens', code: 'COTE / 02', title: 'C++ for Teens', note: 'For teens who want speed and contests. Fundamentals, the standard library and data structures; C++ is the only language allowed in the in-person final of Peru\'s Informatics Olympiad.' },
      { course: 'complete-game-development-masterclass-for-teens', code: 'COTE / 03', title: 'Game Development for Teens', note: 'For players who want to become makers. Unity and C#, game physics, levels and menus, ending with a game a friend can download and play.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who joins',
      h2: 'Who are these coding classes for teens for?',
      lede: 'Teenagers in Peru who can follow spoken English, or want to get there, and who are ready to type real code. Three groups write to us most often.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Bilingual, IB and Cambridge pupils', p: 'Their maths and science already come in English, and many will meet computer science as an exam subject. Learning code in the same language avoids translating every term twice before an IGCSE or Diploma paper.' },
          { h3: 'Teens who moved to Peru', p: 'Arriving at 13 or 14 is hard enough without a coding club in a language you are still learning. Here the teaching is in English, and the student keeps one mentor who knows their level.' },
          { h3: 'Peruvian teens with plans', p: 'University reading, programming documentation and most help forums are in English. A teenager who learns to code in English is practising both at once, every week, with a real reason to listen.' }
        ] },
        { kind: 'p', mt: true, html: 'Parents who prefer Spanish will find a page written for them: <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">Leer en español: clases de programación para adolescentes</a>. It describes the same classes in Spanish; the lessons themselves are always taught in English.' }
      ]
    },
    {
      id: 'routes',
      tint: 'tint',
      eyebrow: 'Three routes',
      h2: 'What should a teenager in Peru learn to code: build, compete or certify?',
      lede: 'All three start with the same foundations. After about four months, most teenagers lean towards one of them, and the choice shapes which language and which course comes next.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Build', p: 'Apps, websites, games and tools that someone else can use. This suits the teen who wants to see a result and show it off. Languages: Python, then JavaScript, C# or Java. Proof of progress: a portfolio of finished projects.' },
          { h3: 'Compete', p: 'Short, hard problems solved against the clock, as in Peru\'s Informatics Olympiad. This suits the teen who enjoys puzzles and maths. Languages: Python to start, C++ for speed. Proof: contest results and solved problem counts.' },
          { h3: 'Certify', p: 'An exam with a clear syllabus, such as the Python Institute\'s entry certificate, the PCEP. This suits the teen who likes a defined target. Language: Python. Proof: the certificate itself, from the body that sets the exam.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why not all three at once?',
          left: [
            'Because depth beats breadth at this age. A fourteen year old who has built one complete game understands variables, loops and functions far better than one who has started five tutorials. We keep a student on one route long enough to finish something real.',
            'Routes are not fixed. Contest training makes a builder faster and more careful; building makes a contest coder better at reading long programs. Many of our teenagers switch after a year.'
          ],
          rightH3: 'How the first months look',
          right: [
            'Month one: typed Python, variables, conditions and loops, with a small program finished every week. Month two: lists, functions and files. Months three and four: a first real project, and a first timed problem set.',
            'By then the student, the mentor and the parent can usually see which route fits. The mentor writes a short note suggesting the next course, and the family decides.'
          ] }
      ]
    },
    {
      id: 'language',
      eyebrow: 'Which language',
      h2: 'Should a teenager learn Python or C++ first?',
      lede: 'Python first for almost everyone, then C++ for those heading to contests. The Peruvian contests and MINEDU\'s own pilot point the same way.',
      body: [
        { kind: 'two',
          leftH3: 'What Peru\'s own programmes use',
          left: [
            'The Peruvian Informatics Olympiad, the OPI, is organised by UTEC and is free for every secundaria pupil in the country. Its 2025 rules allowed C++ or Python in the first round, which was held online, and only C++ in the in-person final.',
            'MINEDU\'s Fábrica de Programadores pilot, launched in July 2025 for 1,000 pupils in 4th and 5th of secundaria in Lima Norte, chose Python and offered its graduates the chance to sit the PCEP exam. Python is where the state chose to start.'
          ],
          rightH3: 'What we recommend',
          right: [
            'Start with Python. It lets a beginner think about the problem rather than the punctuation, and every idea learnt in it, from loops to recursion, carries straight into C++ later.',
            'Move to C++ when timed problems start to matter. A student aiming at the OPI final needs C++ by then, and its standard library, with ready-made sorting and data structures, is a big part of contest work. That switch usually takes a few weeks, not months.'
          ] },
        { kind: 'p', mt: true, html: 'For the certificate route, the Python Institute describes the PCEP-30-03 as an entry-level exam with no prerequisites: 35 questions in 50 minutes, a pass mark of 70%, and a credential valid for five years. Our certification course prepares students for it; the Python Institute, not us, sets and awards the exam. For a 5th-year student weighing it up, our Spanish page on <a class="ag-inline-link" href="/programacion-para-5to-de-secundaria">programación para 5to de secundaria</a> goes through it in detail.' }
      ]
    },
    {
      id: 'ioi',
      tint: 'tint',
      eyebrow: 'Peru at the IOI',
      h2: 'How has Peru done at the International Olympiad in Informatics?',
      lede: 'Peru first sent students in 2022 and has competed every year since. The IOI\'s own statistics site lists every result, and the record is honest: one bronze medal and one honourable mention in five years.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Peru at the International Olympiad in Informatics, 2022 to 2026', head: ['Year', 'Peruvian contestants', 'Top Peruvian place (of all contestants)', 'Awards to Peru'], rows: [
          ['2026', '4', '196th of 375', 'None'],
          ['2025', '4', '256th of 330', 'None'],
          ['2024', '3', '258th of 353', 'One honourable mention'],
          ['2023', '4', '221st of 350', 'None'],
          ['2022', '4', '166th of 349', 'One bronze medal']
        ] },
        { kind: 'source', html: 'Source: IOI Statistics, Peru results and Peru member page (stats.ioinformatics.org), read on 9 November 2026. The site counts 13 different Peruvian contestants over these five years and a total of 0 gold, 0 silver and 1 bronze medal plus 1 honourable mention. The total of 19 places is our own addition of the yearly counts; it is higher than 13 because some students went more than once. We do not print students\' names.' },
        { kind: 'two', mt: true,
          leftH3: 'How a student gets there',
          left: [
            'In 2025, UTEC\'s rules set the route: an online first round, an in-person final at UTEC, and the top four of the final chosen for the IOI. Students had to be no older than 20 on 1 July 2025 and either enrolled at a Peruvian school in 2025 or out of school since 2024. For 2026, registration closed on 18 March and the final was held on 11 April.',
            'UTEC runs two sister contests from the same site: OPEIA for artificial intelligence, held on 19 March 2026, and OPECIA for cybersecurity. All three are free for secundaria pupils.'
          ],
          rightH3: 'What the table tells a young coder',
          right: [
            'That the gap is real and can be closed. Peru\'s best finish came in its very first year, and every year since, its students have placed in the middle or lower half of a very strong field. Countries that do well at the IOI usually train students for years before the contest.',
            'That training starts with fundamentals, not tricks: careful reading, choosing the right data structure, and testing edge cases. We teach that kind of thinking with problems we write ourselves. We are not connected with UTEC, the OPI or the IOI and we never reproduce their problems.'
          ] },
        { kind: 'p', mt: true, html: 'Contest training is not for everyone, and it does not have to be. A teenager who builds an app that a family member uses every day has learnt just as much. The table matters because it shows what serious practice can lead to, not because every student should aim at it.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Secundaria',
      h2: 'Does secundaria in Peru teach programming?',
      lede: 'Not as its own subject. In MINEDU\'s national curriculum, the CNEB, none of the secundaria areas is computing or programming, though some private schools add it.',
      body: [
        { kind: 'two',
          leftH3: 'The national timetable',
          left: [
            'Under the regular school day (Jornada Escolar Regular), secundaria has 35 teaching periods a week, with Matemática at 4 in every grade. The nearest area to computing is Educación para el Trabajo, at 2 periods a week, or 3 under the longer full school day of 45 periods; its competency is about running enterprise projects, not writing code.',
            'MINEDU places pupils by their age on 31 March: about 12 in 1st of secundaria and 16 in 5th. Our groups follow age and level, so a 13 year old who has coded for years is not held back.'
          ],
          rightH3: 'Where coding fits instead',
          right: [
            'For many Peruvian teens, the closest thing to a school computing contest is mathematical. The national maths olympiad, ONEM, drew more than 1.7 million secundaria students in 2026, according to El Peruano. Coding and contest maths reward the same habit: reading a problem slowly and proving the answer.',
            'Teenagers are online in any case. INEI reports that 92.5% of Peruvians aged 12 to 18 used the internet in the second quarter of 2026. The question is whether they only consume, or also build.'
          ] },
        { kind: 'p', mt: true, html: 'Our classes run beside school, never in its place. We are not connected with MINEDU, UTEC or any school, we do not award Peruvian grades, and a student who finishes a course receives our own certificate of completion.' }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'What does a lesson look like? Ranking a contest scoreboard in Python',
      lede: 'This is a lesson we teach to teenagers from about 13, early in contest training. The contestants and scores are invented by us. The rule is the usual one for timed contests: the higher score wins, and on equal scores, the faster contestant wins.',
      body: [
        { kind: 'two',
          leftH3: 'The task',
          left: [
            'Five contestants, each with a score and the minutes they took. Sort them into a ranking. Python\'s <code>sorted</code> accepts a <code>key</code>, and a key can be a tuple, so the natural idea is to sort by score and then by time.',
            'Because the highest score should come first, almost everyone adds <code>reverse=True</code>. Version 1 runs cleanly and puts the two 300-point contestants at the top. It looks right at a glance.'
          ],
          rightH3: 'The bug',
          right: [
            'Look at the tie. Diego and Bruno both scored 300, but Diego took 120 minutes and Bruno took 140. Diego should be first. Version 1 puts Bruno first, and does the same to Carla and Ana lower down.',
            'The reason: <code>reverse=True</code> reverses <strong>every field in the key</strong>, not just the score. Larger times now come first too, so the tie-break works backwards. The fix is to reverse only the score, by sorting on its negative.'
          ] },
        { kind: 'code', label: 'Version 1: sorted by (score, time), then reversed', lang: 'Python', code: V1 },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: OUT1, note: 'Our exact output with Python 3: both ties are broken the wrong way round.' },
        { kind: 'code', label: 'Version 2: negate the score, keep time as it is', lang: 'Python', code: V2 },
        { kind: 'code', label: 'What Version 2 prints', lang: 'Output', code: OUT2, note: 'Run after the same <code>results</code> list: Diego above Bruno and Carla above Ana, as the rule requires.' },
        { kind: 'p', mt: true, html: 'Then we show a second fix that older students like. Python\'s sort is <strong>stable</strong>: items that compare equal keep the order they arrived in. So you can sort twice, least important key first. Sort by time; then sort that result by score with <code>reverse=True</code>. When we ran it, it printed <code>[\'Diego\', \'Bruno\', \'Carla\', \'Ana\', \'Elena\']</code>, the same ranking as Version 2. Negating works only for numbers; the two-pass method works for names and dates as well.' },
        { kind: 'p', html: 'The lesson behind the lesson: a program that runs without an error can still be wrong, and the place to look is the tie, the edge, the case where two things are equal. Contest problems are built around exactly those cases. So are real systems that rank anything from search results to exam marks.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Warm-up.</strong> Before running Version 1, write down the ranking you expect. Compare it with the output and find the first line that differs.',
          '<strong>Your fix.</strong> Write Version 2 without looking, then add a sixth contestant who ties with Diego on both score and time. Where should she go, and why does Python put her there?',
          '<strong>Two passes.</strong> Rank the contestants by score, highest first, and then by name in alphabetical order on ties, using two calls to <code>sorted</code>.',
          '<strong>Explain it.</strong> In three English sentences, tell your mentor why <code>reverse=True</code> broke the tie and why negating the score does not.'
        ] }
      ]
    },
    {
      id: 'ai',
      eyebrow: 'AI and teenagers',
      h2: 'Can teenagers use AI tools for coding?',
      lede: 'Some, within each company\'s age terms and only after the student can solve the problem alone. We follow the terms the companies publish, not the ones people assume.',
      body: [
        { kind: 'three', cells: [
          { h3: 'What the terms say', p: 'OpenAI requires ChatGPT users to be at least 13, with a parent or guardian\'s permission under 18. Anthropic requires Claude users to be at least 18, so no teenager uses Claude in our classes. GitHub sets 13 as the floor for Copilot.' },
          { h3: 'What contests say', p: 'UTEC\'s 2025 OPI rules forbid generative AI for solving the problems. A teenager who leans on AI during practice will find that crutch removed on the day that matters.' },
          { h3: 'What we do', p: 'Students solve first, alone, and explain their reasoning. Older teens then use permitted AI tools to review their code and question it, the way a professional uses a second opinion, never to write the answer.' }
        ] },
        { kind: 'p', mt: true, html: 'Teenagers curious about how AI itself works can go further on our Spanish-language page, <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">curso de IA para adolescentes</a>, which covers building simple AI models rather than only using them.' }
      ]
    },
    {
      id: 'hours',
      tint: 'tint',
      eyebrow: 'Peru time',
      h2: 'What time are classes for teenagers in Peru?',
      lede: 'At the hour the family chooses. Peru keeps the same offset all year, five hours behind UTC, and India is five and a half hours ahead of UTC, a gap of ten and a half hours. The rows below are conversions, not a schedule.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Peru hours and the same moment in India (conversions only)', head: ['Peru time', 'India time', 'In a Peruvian teenager\'s day'], rows: [
          ['06:30', '17:00', 'Early, before the school bus'],
          ['13:30', '00:00, next day', 'After a morning shift at school'],
          ['16:30', '03:00, next day', 'After an afternoon of homework'],
          ['18:00', '04:30, next day', 'Before dinner'],
          ['21:30', '08:00, next day', 'Late evening, for older students']
        ] },
        { kind: 'source', html: 'Source: IANA tz database, America/Lima (UTC minus 5, unchanged all year) and Asia/Kolkata (UTC plus 5:30). Conversions are ours.' },
        { kind: 'p', mt: true, html: 'When booking, the family picks an hour on its own clock and our system translates it for the mentor. The hour then stays put through the whole school year and the summer break, because neither Peru nor India moves its clocks. Every Peru page, including those for younger children and adults, is on the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Peru hub</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How does a teenager move from beginner to independent coder?',
    lede: 'In clear steps that the student, the mentor and the parent can all see. These levels are ours, not a school standard.',
    table: { numCols: [], caption: 'Our levels for teenage coders', head: ['Level', 'Typical point', 'The student can', 'Shown by'], rows: [
      ['1. Writes', 'First month', 'Write short programs with conditions and loops', 'A weekly program that works'],
      ['2. Structures', 'Months 2 and 3', 'Split work into functions and use lists and dictionaries', 'A program another student can read'],
      ['3. Finishes', 'Months 3 to 5', 'Plan and complete a small project alone', 'A finished app, game or tool'],
      ['4. Tests', 'Months 4 to 6', 'Find the tie, the edge and the empty case before the mentor does', 'Tests written before the fix'],
      ['5. Chooses', 'Months 6 to 9', 'Pick the right data structure and explain the cost', 'Timed problems solved and explained'],
      ['6. Leads', 'After a year', 'Review another student\'s code and teach a concept', 'A short lesson given to the group']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask to see level 3 work: a finished project, however small. It tells you more than any mark.',
      'Level 4 is the sorting lesson above. Students who reach it start testing their own claims in other subjects too.'
    ] },
    right: { h3: 'For students', ps: [
      'When your code runs, ask what happens on a tie. Then try it.',
      'If you cannot explain a line, you do not own it yet. Rewrite it until you can.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for teenagers',
    lede: 'Each one live, in English, with one mentor throughout, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Build', sub: 'Apps, web and games', courses: [
        { code: 'COTE / BUILD / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web for teens', blurb: 'React and Node.js, from a first page to a working web app.' },
        { code: 'COTE / BUILD / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Real phone apps built with React Native.' },
        { code: 'COTE / BUILD / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive pages and browser games from scratch.' }
      ] },
      { num: 'II', h3: 'Compete and certify', sub: 'Contests and exams', courses: [
        { code: 'COTE / CONTEST / 01', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming for teens', blurb: 'Timed problem solving, the way olympiads test it.' },
        { code: 'COTE / CONTEST / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Data structures and algorithms explained from the ground up.' },
        { code: 'COTE / CONTEST / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP preparation', blurb: 'The Python Institute syllabus, topic by topic.' }
      ] },
      { num: 'III', h3: 'AI and data', sub: 'Ages 13 and up', courses: [
        { code: 'COTE / AI / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'From Python to working models, with school maths.' },
        { code: 'COTE / AI / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real datasets, charts and a first model.' },
        { code: 'COTE / AI / 03', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens', blurb: 'Prompting and projects with tools that allow 13 and over.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Class by class',
    h2: 'How live classes work for a teenager in Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Term time', l: 'Most teens pick an afternoon or evening hour in Peru that leaves space for homework.' },
      { time: 'Holidays', l: 'January to March frees up mornings, a good time to push a project forward.' },
      { time: '1-on-1', l: 'A single student with a mentor, at the hour the family sets.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'One teacher across the course, who knows the student\'s gaps.' },
      { h3: 'Code every class', p: 'Students type and run code from the first minutes.' },
      { h3: 'Clear English', p: 'Technical words explained, then used again until they stick.' },
      { h3: 'Teen groups only', p: 'Students of a similar age and level, never mixed with children.' },
      { h3: 'Reviews of work', p: 'Mentors read the student\'s code and comment line by line.' },
      { h3: 'Group or alone', p: 'Fifteen to twenty students, or one student and one mentor.' }
    ]
  },

  projectsH2: 'Projects from our older students',
  projectsLede: 'Teenagers who stay with us build things that work outside the classroom. Here are a few; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Reviews left on Google by students and parents, unedited.',

  fees: {
    h2: 'Fees for teenagers in Peru',
    lede: 'We charge in US dollars, to a card, once a month. The conversion to soles happens at your bank, at its rate on the day of payment, so statements can vary by a small amount.',
    free: ['A free first class', 'A first program and a short problem', 'No card required'],
    group: ['Fifteen to twenty teenagers of a similar level', 'One mentor for the whole course', 'Two live classes each week', 'Pay monthly, cancel any month'],
    one: ['One student, one mentor', 'Goals and pace set for the student', 'Times chosen by the family']
  },

  faq: {
    eyebrow: 'Teenagers and parents ask',
    h2: 'What teenagers and parents in Peru ask about coding classes',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and in English only. Mentors speak clearly, slow down when needed and match each student\'s pace and accent, and every step also appears on the shared screen. A Spanish-language page describes the classes for parents, but the lessons are always in English.' },
      { q: 'Which language should a teenager learn first?', a: 'Python, in almost every case. It lets a beginner concentrate on the problem, and the ideas transfer directly to C++, Java or JavaScript later. Teenagers aiming at the final of Peru\'s Informatics Olympiad move to C++, the only language its 2025 final allowed.' },
      { q: 'Can a complete beginner of 15 join?', a: 'Yes. Most of our teenage students start from zero. The first course assumes no previous code at all, and the free class places the student in a group of a similar level or in one-to-one lessons.' },
      { q: 'Do you prepare students for the OPI?', a: 'We teach the problem-solving skills the OPI and similar contests reward, with problems we write ourselves, in Python and C++. We are not connected with UTEC or the OPI and never reproduce their problems. Students register through UTEC\'s own site, where entry is free for secundaria pupils.' },
      { q: 'When are classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead of Peru all year, so 18:00 in Peru is 04:30 the next morning in India.' },
      { q: 'Can teenagers use ChatGPT or Claude in class?', a: 'Not Claude: Anthropic\'s terms require users to be 18 or older. ChatGPT needs a user to be at least 13 and, under 18, to have a parent\'s permission. In class, students solve problems on their own first and use only tools whose terms allow their age.' },
      { q: 'Is the PCEP certificate worth it for a teenager?', a: 'It can be a useful target. The Python Institute describes it as an entry-level exam with no prerequisites: 35 questions, 50 minutes, a 70% pass mark. It proves basic Python, not the ability to build large programs, so we pair it with a real project.' },
      { q: 'Will this help with IB or IGCSE computer science?', a: 'Yes, as a foundation, and we also teach IB Diploma Computer Science and IGCSE Computer Science 0478 directly. The school and the exam board set and mark every assessed piece of work; we help the student understand the material deeply.' },
      { q: 'Are you connected with MINEDU or a school in Peru?', a: 'No. Modern Age Coders is an independent online school whose mentors work from India. We have no connection with MINEDU, UTEC or any school in Peru, and award no Peruvian grades. Students who complete a course get our own certificate of completion.' },
      { q: 'What does a teenager need at home?', a: 'A laptop or desktop computer, a steady connection and a headset with a microphone. A phone is not enough for typing code. Classes use an ordinary video call, and any software needed later is free and installed with the mentor\'s help.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Keep reading',
    h2: 'More for teenage coders and their parents',
    lede: 'Pages that go deeper on the routes above.',
    items: [
      { href: '/ib-computer-science-online-tuition', label: 'IB computer science tuition', p: 'Diploma computer science, taught alongside school.' },
      { href: '/coding-for-igcse-students', label: 'Coding for IGCSE students', p: 'How coding supports Cambridge courses.' },
      { href: '/ai-tools-age-guide', label: 'AI tools by age', p: 'Which AI tools a teenager may use.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking before tools', p: 'Why we teach reasoning first.' },
      { href: '/student-labs', label: 'Student labs', p: 'Finished projects by our students.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One class, described step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first class for a teenager',
    lede: 'The free class is a real lesson: a short problem, a first program and a conversation about what the student wants from coding. Afterwards the mentor recommends a starting course, a group or one-to-one lessons, and a time that fits the school week.',
    readFirst: 'Want more detail before booking? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a class, and the <a class="ag-inline-link" href="/courses">full course list</a> holds every syllabus.',
    note: 'Lessons are live over video, taught from India, in English. For the fastest reply, write to us on WhatsApp in English.',
    formNote: 'Free. No card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Teen routes', links: [
        { href: '/ib-computer-science-online-tuition', label: 'IB computer science' },
        { href: '/coding-for-igcse-students', label: 'Coding for IGCSE' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Leer en español' },
        { href: '/english-medium-coding-classes-lima', label: 'Coding in English, Lima' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Check the tie before you trust the ranking'
  },

  personalityCss: `
.ag-root.ag-cote .ag-hero h1 { max-width: 16ch; letter-spacing: -0.02em; }
.ag-root.ag-cote .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-cote .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cote .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cote .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'IOI Statistics (Peru results and member page); UTEC OPI 2025 rules and OPI home page (OPI, OPEIA, OPECIA 2026); MINEDU press release on Fábrica de Programadores (24 July 2025); Python Institute PCEP-30-03 page; MINEDU CNEB secundaria plans of studies and Edades normativas; El Peruano on ONEM 2026; INEI TIC II Trimestre 2026; vendor terms for ChatGPT, Claude and GitHub Copilot (content/ai-tool-age-audit.json); IANA tz database. Read 9 November 2026.',
    localProject: 'An original Python lesson on ranking a contest scoreboard (invented contestants): sorting by (score, time) with reverse=True breaks both ties the wrong way (1 Bruno 300 140 above 2 Diego 300 120) because reverse flips every key field; negating the score fixes it (1 Diego 300 120); two stable sorts, least important key first, give the same ranking. Lesson family: tuple sort keys, reverse=True and the tie-break, stable sorting.',
    requiredMentions: ['1 Bruno 300 140', '1 Diego 300 120', 'every field in the key', '196th of 375', '166th of 349', 'The total of 19 places is our own addition', 'items that compare equal keep the order they arrived in', 'Leer en español: clases de programación para adolescentes', 'Check the tie before you trust the ranking'],
    sources: [
      { claim: 'Peru at the IOI 2022 to 2026: contestants, best ranks, one bronze (2022) and one honourable mention (2024).', url: 'https://stats.ioinformatics.org/results/PER' },
      { claim: 'First participation 2022, 5 years, 13 contestants, medals 0 gold, 0 silver, 1 bronze, 1 honourable mention.', url: 'https://stats.ioinformatics.org/members/PER' },
      { claim: 'OPI 2025: online first round in C++ or Python, in-person final in C++ only, top 4 to the IOI, age limit 20 on 1 July 2025, generative AI banned.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'OPI free for all secundaria pupils; 2026 registration to 18 March, final 11 April; OPEIA 19 March 2026; OPECIA.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'Fábrica de Programadores: 1,000 pupils, 4th and 5th secundaria, Lima Norte, Python, PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'PCEP-30-03: no prerequisites, 35 questions, 50 minutes, 70% pass, valid 5 years.', url: 'https://pythoninstitute.org/pcep' },
      { claim: 'Secundaria plans of studies: 35 periods (JER), 45 (JEC), Matemática 4, Educación para el Trabajo 2 or 3, no computing area.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ONEM 2026 drew more than 1.7 million secundaria students.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: '92.5% of people aged 12 to 18 used the internet, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Names of Peruvian IOI contestants: published by the IOI, but private individuals; not printed.',
      'Any claim that our students have competed at the OPI or IOI: no record; not made.',
      'Reproducing any OPI or IOI problem: refused; the lesson uses our own invented data.',
      'Recommending Claude or the Codex and Claude Code teen course on a page for under-18s: Claude is 18+, so neither is offered here.',
      'Spanish-language teaching, Peruvian qualifications or a link with MINEDU, UTEC or the IOI: none, and the page says so.'
    ]
  }
};
