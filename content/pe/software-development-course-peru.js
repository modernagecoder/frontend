// SHIP: market (en subject door) | software development as a process: Peru's NTP-ISO/IEC 12207 rules since 2004 | dependency order: topological sort with graphlib, and the CycleError a small change can cause
'use strict';
// Software development course, Peru (ag- English subject door, Peru cluster row PE014, hubGroup subjects, code sod, #005356).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Fees render in USD from the template only; no soles, no typed figure. British spelling.
// Audience: university students, graduates and working adults in Peru (18+) who want the trade of software development;
// teens are pointed to the teen courses. Spanish twin (live): /curso-de-desarrollo-de-software-en-ingles-peru (its spine:
// programming vs software development, PROMPERÚ market deck, INEI skills, EF EPI by job function, secure software, OPI and
// IOI; lesson: a class that guards its invariant). This page takes a different spine: software development as a named
// process, through the life-cycle standard the Peruvian state has required for its own software since 2004
// (NTP-ISO/IEC 12207), and a lesson on build order and dependency cycles.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/software-development-course-peru/,
// fetched 9 November 2026 with curl -sL -A "Mozilla/5.0"; quotes string-matched in the raw text):
//  - gob.pe search results for "NTP-ISO/IEC 12207" (gob_search_12207.html, the site's own JSON): "Resolución que aprueba el
//    uso obligatorio de la Norma Técnica Peruana \"NTP-ISO/IEC 12207:2016- Ingeniería de Software y Sistemas, Procesos del
//    ciclo de vida del software. 3° Edición\"", name "041-2017-PCM", publication "27 de febrero de 2017", content "en todas
//    las entidades inte ..." (truncated by gob.pe; the RM PDF rm041_2017.pdf is a scan with no text layer, so nothing more is
//    quoted from it). Adoptions in the same results: "011-2022-PCM/PE-ST.01", "6 de abril de 2022", FONAVI-ST, "Se aprueba
//    la Metodología de Desarrollo y Mantenimiento de Software-NTP-ISO/IEC 12207:2016 de la Secretaría Técnica"; "RDE
//    304-2023-PRODUCE/PROINNOVATE", "31 de marzo de 2023", "Aprobar la Metodología de Desarrollo y Mantenimiento de Software
//    alineado a la Norma Técnica Peruana"; "366-2024-OGA-MDMM", "11 de noviembre de 2024", Municipalidad Distrital de
//    Magdalena del Mar, "Aprobar el manual metodología del desarrollo y mantenimiento de sofware alineado a la ntp-iso/iec
//    12207." (sic).
//  - RM 179-2004-PCM with the norm annexed (rm179_2004.pdf, text extracted to rm179_2004.txt with PDFKit): "Lima, 14 de junio
//    de 2004"; "Resolución Comisión de Reglamentos Técnicos y Comerciales Nº 0048-2004/CRT-INDECOPI del 13 de mayo de 2004";
//    Art. 1 "Aprobar el uso obligatorio de la Norma Técnica Peruana “NTP-ISO/IEC 12207:2004 ... en todas las Entidades
//    integrantes del Sistema Nacional de Informática"; Art. 2 "un plazo de dieciocho (18) meses para su implantación"; norm
//    4.1.1 "cinco procesos principales, ocho procesos de apoyo y cuatro procesos organizativos"; process names 5.1 to 5.5,
//    6.1 to 6.8 (documentación, gestión de la configuración, aseguramiento de la calidad, verificación, validación, revisión
//    conjunta, auditoría, solución de problemas), 7.1 to 7.4 (gestión, infraestructura, mejora, recursos humanos). The
//    signatory's name is not printed (no political names).
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): job function IT 522; Lima 555 high.
//  - MINEDU Fábrica de Programadores (FACTS 45, 46): 1,000 students of 4° and 5° secundaria, Python, PCEP.
//  - UTEC Reglamento OPI 2025 (FACTS 116): final round C++ only.
//  - Time (facts-geo/timezone.tsv): America/Lima UTC-5 all year; India UTC+5:30; 10 h 30 min.
// Our own example (scratchpad pe/e3/code/sod_v1.py and sod_v2.py), run with python3 -I, exact output:
//    v1: ok   database / FAIL emails needs ['login'] / FAIL login needs ['passwords'] / ok   passwords / ok   reports
//    v2: Build order: ['database', 'passwords', 'login', 'reports', 'emails'] / Cycle: login -> reports -> database -> login
// Lesson family: dependency ordering; a topological sort (graphlib.TopologicalSorter) gives a valid build order, and a
//    single new dependency can create a cycle that no order satisfies (CycleError).

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'needs = {',
  '    "login":     {"database", "passwords"},',
  '    "passwords": {"database"},',
  '    "reports":   {"database", "login"},',
  '    "database":  set(),',
  '    "emails":    {"login"},',
  '}',
  '',
  'built = set()',
  'for part in sorted(needs):              # alphabetical order',
  '    missing = needs[part] - built',
  '    if missing:',
  '        print("FAIL", part, "needs", sorted(missing))',
  '    else:',
  '        print("ok  ", part)',
  '    built.add(part)'
].join('\n');

const V2 = [
  'from graphlib import TopologicalSorter, CycleError',
  '',
  'needs = {',
  '    "login":     {"database", "passwords"},',
  '    "passwords": {"database"},',
  '    "reports":   {"database", "login"},',
  '    "database":  set(),',
  '    "emails":    {"login"},',
  '}',
  '',
  'print("Build order:", list(TopologicalSorter(needs).static_order()))',
  '',
  'needs["database"] = {"reports"}         # a "small change" on Friday',
  'try:',
  '    list(TopologicalSorter(needs).static_order())',
  'except CycleError as err:',
  '    print("Cycle:", " -> ".join(err.args[1]))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Software development course' },
  slug: 'software-development-course-peru',
  code: 'sod',
  accent: '#005356',
  accentRationale: 'Software development in Peru: a deep teal #005356 allocated to this row, the colour of a terminal at night and calm next to the warm paper; it clears 4.5:1 on #FBF8F2, #F5F1E8 and #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Software development course, Peru',
  title: 'Software Development Course in Peru: Live Online, in English',
  description: 'Software development course for Peru, live online in English: the full life cycle, Peru\'s NTP-ISO/IEC 12207 rules, Java, Python and DSA, at flexible hours.',
  ogDescription: 'Learn software development from Peru with a live mentor, in English, at whatever hour suits you: what the job involves beyond writing code, the life-cycle standard Peru\'s public sector has required since 2004, which languages to learn, and a worked lesson on build order.',
  twitterDescription: 'Software development from Peru, live online in English: the life cycle, Peru\'s 12207 rules, and a real lesson.',
  pageName: 'Software Development Course in Peru',
  webPageDescription: 'A guide for university students and working adults in Peru who want to become software developers, taught live online in English: the NTP-ISO/IEC 12207 life-cycle rules of the Peruvian state (RM 179-2004-PCM, RM 041-2017-PCM) and their adoption, EF EPI context, and an original Python lesson on dependency order.',
  courseDescription: 'Live online software development courses in English for learners in Peru aged 18 and over: Java or Python, data structures and algorithms, databases, Git and full stack web work, taught as a complete life cycle, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Software development course',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#lifecycle', label: 'Life cycle' },
    { href: '#norm', label: 'NTP 12207' },
    { href: '#order', label: 'Lesson' },
    { href: '#route', label: 'Route' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Peru &middot; Software development &middot; Live online, in English &middot; 18 and over',
  h1: 'Software development course in Peru',
  lede: 'Writing code is one step of software development, and rarely the longest. Someone has to agree what to build, keep track of versions, check the work, fix what users report and keep the system running for years. Peru\'s public sector has written those steps into a technical standard since 2004. This page uses that standard to show what a real software development course should cover, and how ours teaches it.',
  secondaryCta: { href: '#order', label: 'See the build-order lesson' },
  wa: 'Hello Modern Age Coders, I am in Peru and would like to learn software development, live online in English. Could I book a free first class?',
  heroNote: 'Teaching live since 2020 &middot; 10,000+ learners in 25+ countries &middot; your own mentor every week',
  spec: [
    ['For', 'University students, graduates and working adults, 18 and over'],
    ['Languages', 'Java or Python first, then SQL and JavaScript'],
    ['Beyond code', 'Git, testing, reviews, documentation, maintenance'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Peru time', 'Any day, any hour you choose'],
    ['First class', 'Free, without a card']
  ],
  capsuleQ: 'The short answer',
  capsule: 'For adults and university students in Peru, Modern Age Coders runs software development classes that are live, online and in English. Starting from zero if needed, learners pick Java or Python, then work through data structures, databases, Git, testing and full stack web projects, practising the whole life cycle from requirements to maintenance rather than code alone. Every session has a mentor on video, either among fifteen to twenty classmates or one to one, on whichever days and hours you choose. We train people to reason about a system, not to paste code they cannot explain.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses that make a software developer',
    lede: 'A language, the thinking underneath it, and the full stack around it. All three are for adults from 18 and begin from zero.',
    items: [
      { course: 'complete-java-programming-masterclass-college', code: 'PE / SW / 01', title: 'Java, zero to professional', note: 'For complete beginners aged 18 and over, 10 to 12 months. Object-oriented design, collections, testing and the habits of large codebases, in the language of many company back ends.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'PE / SW / 02', title: 'Data structures and algorithms', note: 'From zero to interview-ready over 10 to 12 months. Lists, trees, graphs and the reasoning behind them, including the graph ideas in the lesson on this page.' },
      { course: 'full-stack-web-development-masterclass-college', code: 'PE / SW / 03', title: 'Full stack development', note: '12 to 14 months for beginners from 18. React, Node.js and the basics of deployment: a complete system with a front end, a server and a database.' }
    ]
  },

  sections: [
    {
      id: 'lifecycle',
      eyebrow: 'More than code',
      h2: 'What is software development, beyond writing code?',
      lede: 'It is the whole life of a program: deciding what it should do, building it, proving it works, delivering it, and then living with it for years while it changes. A good course teaches each stage as a skill.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Before the code', p: 'Turning a vague request into requirements someone can test. Learners practise asking the questions a client forgot: what happens when the network fails, who may see this field, how many users at once.' },
          { h3: 'While coding', p: 'Design, small functions, clear names, version control with Git, and reviews where another person reads your code before it is merged. Most of the job is reading code, so we practise reading as much as writing.' },
          { h3: 'After release', p: 'Bug reports, fixes that do not break something else, upgrades of libraries, and documentation that the next developer can follow. Maintenance is where most software spends most of its life.' }
        ] },
        { kind: 'p', mt: true, html: 'Many self-taught programmers in Peru reach the middle column and stop. They can write code that works on their laptop, but have never had to keep a program running after other people started depending on it. Our projects run long enough for that to happen: learners return to their own code months later, fix issues raised by the mentor, and discover why the documentation they skipped would have helped.' },
        { kind: 'p', html: 'Our Spanish page, <a class="ag-inline-link" href="/curso-de-desarrollo-de-software-en-ingles-peru">curso de desarrollo de software en inglés</a>, covers the industry figures, secure software and competitive programming, with a lesson on classes that protect their own rules. Here we follow the process itself.' }
      ]
    },
    {
      id: 'norm',
      tint: 'tint',
      eyebrow: 'Peru\'s software standard',
      h2: 'What is NTP-ISO/IEC 12207, and why does Peru require it?',
      lede: 'NTP-ISO/IEC 12207 is the Peruvian technical standard for the software life cycle, Peru\'s adoption of the international ISO/IEC 12207. The Presidency of the Council of Ministers (PCM) first made it compulsory for public bodies in 2004 and renewed the requirement with a newer edition in 2017.',
      body: [
        { kind: 'table', numCols: [], caption: 'NTP-ISO/IEC 12207 in Peru\'s public sector: the rules and some adoptions', head: ['Date', 'Document', 'What it did'], rows: [
          ['13 May 2004', 'INDECOPI committee resolution 0048-2004/CRT-INDECOPI', 'Approved NTP-ISO/IEC 12207:2004, 1st edition, as a Peruvian technical standard'],
          ['14 June 2004', 'RM 179-2004-PCM', 'Made its use compulsory for every body in the National Informatics System, with 18 months to put it in place'],
          ['27 February 2017', 'RM 041-2017-PCM', 'Made NTP-ISO/IEC 12207:2016, 3rd edition, on software and systems engineering, compulsory'],
          ['6 April 2022', '011-2022-PCM/PE-ST.01, FONAVI technical secretariat', 'Approved a software development and maintenance methodology based on the 2016 standard'],
          ['31 March 2023', 'RDE 304-2023-PRODUCE/PROINNOVATE', 'Approved a development and maintenance methodology aligned to the standard'],
          ['11 November 2024', '366-2024-OGA-MDMM, Municipality of Magdalena del Mar', 'Approved a development and maintenance manual aligned to the standard']
        ] },
        { kind: 'source', html: 'Sources: RM 179-2004-PCM with the standard annexed (PCM, official PDF on gob.pe); gob.pe\'s own records for RM 041-2017-PCM and the three adoptions, read on 9 November 2026. The 2017 resolution is published only as a scanned image, so we quote its title and date and nothing more. The adoptions are examples we found, not a complete list.' },
        { kind: 'two', mt: true,
          leftH3: 'What the standard divides the work into',
          left: [
            'The 2004 edition groups the activities of the software life cycle into "cinco procesos principales, ocho procesos de apoyo y cuatro procesos organizativos": five primary processes, eight supporting ones and four organisational ones. Each process is split into activities, and each activity into tasks.',
            'You do not need to memorise a standard to be a developer. But it is a useful map. When a learner asks why they must write tests or keep a changelog, the honest answer is that those are named processes in the way serious organisations, including Peru\'s own public bodies, are expected to build software.'
          ],
          rightH3: 'Why it matters for a job in Peru',
          right: [
            'Software written for a ministry, a regional government, a municipality or a public programme in Peru is expected to follow a methodology built on this standard. Suppliers who sell to the state meet it in contracts, and the private companies that work with them often adopt the same vocabulary.',
            'A developer who already speaks that vocabulary, configuration management, verification, validation, joint review, reads a Peruvian tender or a methodology manual without fear. That is a practical advantage, not a certificate.'
          ] }
      ]
    },
    {
      id: 'processes',
      eyebrow: 'The map, in plain English',
      h2: 'Which parts of the software life cycle does the course cover?',
      lede: 'Here are the seventeen processes of the 2004 edition, with their Spanish names, and where each one turns up in our courses. The mapping is ours.',
      body: [
        { kind: 'table', numCols: [], caption: 'The processes of NTP-ISO/IEC 12207:2004 and where our courses practise them (mapping ours)', head: ['Group', 'Process (Spanish name in the standard)', 'Where learners meet it'], rows: [
          ['Primary', 'Acquisition (adquisición), supply (suministro)', 'Writing and reading a project brief as client and as developer'],
          ['Primary', 'Development (desarrollo)', 'Every course: design, code, tests'],
          ['Primary', 'Operation (operación), maintenance (mantenimiento)', 'Deploying a project and fixing issues in it months later'],
          ['Supporting', 'Documentation (documentación)', 'A README and code comments the mentor actually reads'],
          ['Supporting', 'Configuration management (gestión de la configuración)', 'Git from the first month: branches, tags, versions'],
          ['Supporting', 'Quality assurance (aseguramiento de la calidad)', 'Agreed coding rules and automatic checks'],
          ['Supporting', 'Verification (verificación), validation (validación)', 'Tests that check the code; a demo that checks the need'],
          ['Supporting', 'Joint review (revisión conjunta), audit (auditoría)', 'Code reviews with the mentor and with peers'],
          ['Supporting', 'Problem resolution (solución de problemas)', 'An issue list, kept honestly, closed with a test'],
          ['Organisational', 'Management (gestión), infrastructure (infraestructura)', 'Planning a sprint; setting up a working environment'],
          ['Organisational', 'Improvement (mejora), human resources (recursos humanos)', 'A short retrospective after each project']
        ] },
        { kind: 'source', html: 'Process names and grouping: NTP-ISO/IEC 12207:2004, sections 5 to 7, as annexed to RM 179-2004-PCM. The 2016 edition reorganises the processes; we teach from the 2004 text because its public copy is readable and its structure is simple.' },
        { kind: 'p', mt: true, html: 'The supporting processes are where beginners are weakest and employers care most. Configuration management in particular sounds bureaucratic until the first time a project breaks because two people changed the same file, or because a part was built before the part it depends on. The lesson below is about the second of those.' }
      ]
    },
    {
      id: 'order',
      eyebrow: 'A lesson from the course',
      h2: 'In what order should the parts of a system be built?',
      lede: 'In an order where nothing is built before the things it needs. That sounds obvious, yet it is how build tools, package managers and deployment scripts fail every day. Our learners meet the idea through a small system with five parts.',
      body: [
        { kind: 'two',
          leftH3: 'The system',
          left: [
            'A small web application has five parts. The login needs the database and the password module. The password module needs the database. Reports need the database and the login. Emails need the login. The database needs nothing.',
            'Version 1 builds the parts in alphabetical order, which is what happens surprisingly often when a script simply loops over a folder. It checks, for each part, whether everything it needs has already been built.'
          ],
          rightH3: 'What the learner should predict',
          right: [
            'Before running it, the mentor asks: which parts will fail? Learners usually spot emails, since "emails" comes before "login" in the alphabet. Fewer spot that login fails too, because "login" comes before "passwords".',
            'Version 2 asks Python\'s standard library for a correct order instead. Then it makes one innocent-looking change and shows what happens when no correct order exists.'
          ] },
        { kind: 'code', label: 'Version 1: build in alphabetical order', lang: 'Python', code: V1, note: 'It prints <code>ok   database</code>, <code>FAIL emails needs [\'login\']</code>, <code>FAIL login needs [\'passwords\']</code>, <code>ok   passwords</code> and <code>ok   reports</code>. Two of five parts were built too early.' },
        { kind: 'code', label: 'Version 2: a topological order, then a cycle', lang: 'Python', code: V2, note: 'It prints <code>Build order: [\'database\', \'passwords\', \'login\', \'reports\', \'emails\']</code> and then <code>Cycle: login -&gt; reports -&gt; database -&gt; login</code>.' },
        { kind: 'p', mt: true, html: 'An order in which every part comes after everything it needs is called a topological order, and <code>graphlib.TopologicalSorter</code> finds one. Read the cycle line as "is needed by": the login is needed by reports, reports are now needed by the database, and the database is needed by the login. Nothing in that loop can be built first.' },
        { kind: 'p', html: 'That one line on Friday, "the database should produce a report when it starts", was reasonable as a feature and impossible as a structure. The lesson is not about Python. Maven, Gradle, npm and every serious build tool do the same calculation, and the developer who understands it can read their error messages instead of fearing them. In the NTP-ISO/IEC 12207 vocabulary above, this is configuration management doing its job.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict.</strong> Add a part called "search" that needs reports. Where does it appear in the order, and is that the only valid place?',
          '<strong>Count.</strong> Without the Friday change, how many different valid build orders are there? Write a program that counts them.',
          '<strong>Repair.</strong> Remove the cycle without losing the feature: what would you split into two parts?',
          '<strong>Transfer.</strong> In the Java course, find the same idea in a Gradle error and explain it to a classmate.'
        ] },
        { kind: 'source', html: 'The system, code and output are ours, written for this page and run with Python 3 on 9 November 2026. The graphlib module is part of the Python standard library.' }
      ]
    },
    {
      id: 'route',
      eyebrow: 'A route of our own',
      h2: 'How long does it take to become a software developer?',
      lede: 'For a complete beginner who practises steadily, about a year to be useful in a junior role, and longer to be trusted alone. Here is the route we suggest; the mentor adjusts it to each learner.',
      body: [
        { kind: 'table', numCols: [], caption: 'A suggested twelve-month route into software development (our plan)', head: ['Months', 'Focus', 'Evidence at the end'], rows: [
          ['1 to 3', 'One language properly: Java or Python', 'Small programs written from a spoken brief'],
          ['3 to 5', 'Git, testing and code review', 'A repository with history, tests and reviewed changes'],
          ['5 to 7', 'Data structures and algorithms', 'Problems solved and explained aloud, not only submitted'],
          ['7 to 9', 'Databases and a server', 'An API with a real database behind it'],
          ['9 to 11', 'A front end and deployment', 'A full system that someone else can use'],
          ['11 to 12', 'Maintenance', 'Issues raised by the mentor, fixed without new breakages']
        ] },
        { kind: 'source', html: 'Our plan, not a guarantee. Learners with a university programming course behind them often start at month 3; those who practise less move more slowly. We promise no job or salary.' },
        { kind: 'two', mt: true,
          leftH3: 'Java or Python first?',
          left: [
            'Either is a sound first language. Java is strict about types, which catches many mistakes early and suits learners heading for large company systems. Python is quicker to start with and dominant in data and automation.',
            'Some arrive with Python already: MINEDU\'s Fábrica de Programadores pilot taught it to 1,000 students in their last two years of secundaria. Others learnt C++ for the OPI, whose 2025 final allowed only C++. We build on whatever a learner brings rather than starting them again.'
          ],
          rightH3: 'Where AI fits',
          right: [
            'Coding assistants are part of the job now, and our professional courses teach them. But they write code, they do not own it. A developer still decides what to build, reviews every change and answers for it in production.',
            'So we teach the process first. Someone who understands build order, testing and review can use an assistant well. Someone who does not will ship its mistakes faster.'
          ] },
        { kind: 'p', mt: true, html: 'If you are at university in Peru, our page on <a class="ag-inline-link" href="/cursos-de-programacion-para-universitarios-peru">programación para universitarios</a> explains how these courses sit beside a Peruvian degree, and the <a class="ag-inline-link" href="/curso-de-java-en-ingles-peru">Java course page in Spanish</a> compares Java versions and frameworks in more depth.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Language of the classes',
      h2: 'Are the classes in Spanish?',
      lede: 'No. The classes are live and online, and English is the only language we teach in. The mentor, based in India, adjusts pace and wording to you.',
      body: [
        { kind: 'two',
          leftH3: 'English at a working pace',
          left: [
            'Mentors talk at a steady pace, check understanding often, and restate an idea in other words when it does not land. Learners can ask in imperfect English and get a patient answer. Within a few classes most stop thinking about the language and think about the code.',
            'Software development happens in English whether the team is in Lima or not: compiler errors, library documentation, issue trackers and code reviews. Learning the trade in English means learning its real vocabulary from the first day.'
          ],
          rightH3: 'What EF measured in Peru',
          right: [
            'In EF\'s English Proficiency Index 2025, Peruvians working in IT average 522, and Lima as a city reaches 555, which EF places in its high band.',
            'Those figures describe adults who already work with English most days. For a learner below that level, an English-taught course is also an English course in disguise, and the free first class is the place to test whether the gap is comfortable.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are classes for students in Peru?',
      lede: 'At whatever time you book. Neither Peru nor India changes its clocks, so a slot stays where you put it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time and India time side by side (examples, not a schedule)', head: ['Peru time', 'India time', 'Often chosen by'], rows: [
          ['06:00', '16:30', 'People who code before the office'],
          ['09:30', '20:00', 'University students with afternoon lectures'],
          ['13:00', '23:30', 'A lunchtime class'],
          ['20:00', '06:30, next day', 'People who code after work']
        ] },
        { kind: 'source', html: 'Peru: UTC minus 5 throughout the year, no daylight saving since 1994 (tz database zone America/Lima). India: UTC plus 5:30. Difference: 10 hours 30 minutes on every date.' },
        { kind: 'p', mt: true, html: 'Book in your own clock and the system converts it for the mentor. Many working adults in Peru change their slot when a project at work gets busy; with one to one classes that is a message, not a negotiation.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How do you know you are becoming a software developer?',
    lede: 'Six milestones of our own. Each one is checked with work you can show, not with a multiple-choice test.',
    table: { caption: 'Software development milestones (ours)', head: ['Milestone', 'You can', 'The evidence'], rows: [
      ['1. Write', 'Solve a stated problem in one language without a template', 'A program written live, explained line by line'],
      ['2. Version', 'Work on branches, write clear commits, undo a mistake', 'A repository whose history tells the story'],
      ['3. Verify', 'Write tests that fail for the right reason', 'A test suite that caught a real bug'],
      ['4. Structure', 'Split a system into parts and order their dependencies', 'A diagram with no cycles, and a build that follows it'],
      ['5. Deliver', 'Deploy a system that others use', 'A running link and a short user guide'],
      ['6. Maintain', 'Change old code safely', 'Three fixed issues with no new failures']
    ] },
    left: { h3: 'For learners', ps: [
      'Milestone 4 is the lesson on this page grown up. Once you see dependencies everywhere, many confusing errors start to make sense.',
      'Milestone 6 is the one that impresses interviewers, because almost nobody practises it before their first job.'
    ] },
    right: { h3: 'For employers', ps: [
      'Every milestone leaves evidence in a public repository: commits, tests, diagrams and issues.',
      'Our certificate of completion records the course. It is our own, not a Peruvian university degree or a state qualification.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for developers in Peru',
    lede: 'Foundations for beginners, routes for teenagers who want to start early, and extra skills for working developers. All live, all in English.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: '18 and over', courses: [
        { code: 'PE / BASE / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Zero to advanced Python for students and professionals.' },
        { code: 'PE / BASE / 02', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Twenty-four classes to collaborate like a team member.' },
        { code: 'PE / BASE / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL and databases', blurb: 'SQL, design and administration of real databases.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'PE / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'From a first program to object-oriented Java.' },
        { code: 'PE / TEEN / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Real Python for secundaria students, from zero.' },
        { code: 'PE / TEEN / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic and algorithms, handy for the OPI.' }
      ] },
      { num: 'III', h3: 'Working developers', sub: 'Professionals', courses: [
        { code: 'PE / PRO / 01', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Advanced Git', blurb: 'Branch strategies, reviews and releases for teams.' },
        { code: 'PE / PRO / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI automation', blurb: 'Scripts and AI tools that remove repetitive work.' },
        { code: 'PE / PRO / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Coding agents used with review, tests and judgement.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How the live software development classes run',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early', l: 'Dawn in Lima is late afternoon in India, a quiet hour to start the day with code.' },
      { time: 'Late', l: 'Evening in Peru is the Indian morning, and our mentors teach then as well.' },
      { time: '1-on-1', l: 'A personal plan and slot, moved when your work requires it.' }
    ],
    cells: [
      { h3: 'You drive', p: 'Your hands on the keyboard; the mentor navigates.' },
      { h3: 'Reviews, not marks', p: 'Your code is read and discussed like a colleague\'s.' },
      { h3: 'A steady mentor', p: 'One person through the course, who knows your repository.' },
      { h3: 'Plain English', p: 'Calm pace, rephrased on request, room to think.' },
      { h3: 'Projects that last', p: 'Code you return to, so maintenance is real.' },
      { h3: 'Group or private', p: 'Fifteen to twenty adults, or one to one.' }
    ]
  },

  projectsH2: 'Software our learners have shipped',
  projectsLede: 'A selection is shown below; more live in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews left by learners and parents, quoted unchanged.',

  fees: {
    h2: 'Fees for the software development course',
    lede: 'A monthly plan. The price is fixed in US dollars and collected from your card in dollars; turning it into soles is your bank\'s job, at its own rate, so expect small differences on the statement.',
    free: ['A free first class', 'A small problem to solve and a talk about your goals', 'No card needed'],
    group: ['Fifteen to twenty adults at a similar level', 'The same mentor throughout', 'Two live classes a week', 'Monthly; leave when you want'],
    one: ['You and one mentor', 'A route built around your job or degree', 'Times you choose and can change']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'Software development course in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. English is the only language of teaching, in every live online class. Our mentors in India speak steadily, check you have followed, put things another way when needed and get used to your accent quickly. Compiler messages and documentation are in English too.' },
      { q: 'Can I learn software development from zero?', a: 'Yes. Our Java, Python and full stack courses for adults all start from nothing. The first months teach one language properly before any framework.' },
      { q: 'What is the difference between programming and software development?', a: 'Programming is writing code that works. Software development is the whole life cycle around it: requirements, design, version control, testing, delivery and years of maintenance. Peru\'s NTP-ISO/IEC 12207 standard names these as separate processes.' },
      { q: 'What is NTP-ISO/IEC 12207?', a: 'The Peruvian technical standard for software life-cycle processes, based on ISO/IEC 12207. RM 179-2004-PCM made it compulsory for public bodies in 2004, and RM 041-2017-PCM did the same for the 2016 edition in February 2017.' },
      { q: 'Should I start with Java or Python?', a: 'Either works. Java suits large company systems and catches type mistakes early; Python is quicker to begin and strong in data and automation. If you already know one from university, the Fábrica de Programadores or the OPI, we build on it.' },
      { q: 'How long does it take?', a: 'About a year of steady practice for a beginner to reach junior level, in our experience; our main courses run 10 to 14 months. It depends on weekly practice, and we promise no job or salary.' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. With India 10 hours 30 minutes ahead, a 20:00 class in Peru is 06:30 the next morning for the mentor.' },
      { q: 'Do you teach AI coding tools?', a: 'Yes, in the professional courses, after the basics. We teach learners to review every change an assistant proposes and to stay responsible for the code, which is only possible once you understand it.' },
      { q: 'How much does it cost?', a: 'The fee section shows the monthly price in US dollars, the currency your card is charged in; your bank converts to soles. From India the page shows rupees. The first class is free, with no card.' },
      { q: 'Will I get a certificate?', a: 'Yes, our own certificate of completion after the final exam. It is not a university degree and not issued by any Peruvian authority; your repositories are the stronger proof.' },
      { q: 'Are you connected to PCM or INDECOPI?', a: 'No. We quote the standard and the resolutions from public sources to explain the process; we have no link with PCM, INDECOPI or any public body, and we do not certify compliance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for adults in Peru who want to build software.',
    items: [
      { href: '/curso-de-desarrollo-de-software-en-ingles-peru', label: 'Desarrollo de software en inglés', p: 'The Spanish page: the industry, secure software and a lesson on class invariants.' },
      { href: '/curso-de-java-en-ingles-peru', label: 'Curso de Java en inglés', p: 'Java versions, Spring Boot and the Java or Python question.' },
      { href: '/cursos-de-programacion-para-universitarios-peru', label: 'Programación para universitarios', p: 'Courses that sit beside a Peruvian degree.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The index of our Peru pages.' },
      { href: '/data-structures-and-algorithms-course', label: 'Data structures and algorithms', p: 'The course behind the graph lesson.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class, start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free software development class',
    lede: 'In the free class you solve a small problem with the mentor and talk about where you want to go. The mentor watches how you reason and how easily the English flows, then recommends a starting course.',
    readFirst: 'Reading first? There is a full description of <a class="ag-inline-link" href="/how-we-teach">a live class</a>, and the <a class="ag-inline-link" href="/courses">complete course list</a> with syllabuses.',
    note: 'All teaching is live, online and in English, by mentors in India. Write to us on WhatsApp, in English, for the fastest answer.',
    formNote: 'Free, and you owe nothing afterwards.'
  },

  footer: {
    cols: [
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/curso-de-desarrollo-de-software-en-ingles-peru', label: 'Software, in Spanish' },
        { href: '/curso-de-java-en-ingles-peru', label: 'Java, in Spanish' },
        { href: '/cursos-de-programacion-para-universitarios-peru', label: 'University students' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/data-structures-and-algorithms-course', label: 'DSA course' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Nothing is built before what it needs'
  },

  personalityCss: `
.ag-root.ag-sod .ag-hero h1 { letter-spacing: -0.018em; max-width: 21ch; }
.ag-root.ag-sod .ag-capsule { border-left-width: 3px; border-radius: 0; }
.ag-root.ag-sod .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-sod .ag-table td:first-child { font-variant-numeric: tabular-nums; white-space: nowrap; }
.ag-root.ag-sod .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'PCM, RM 179-2004-PCM with NTP-ISO/IEC 12207:2004 annexed, and RM 041-2017-PCM (gob.pe records); INDECOPI resolution 0048-2004/CRT-INDECOPI as cited in RM 179-2004-PCM; public adoptions on gob.pe (FONAVI-ST 2022, ProInnóvate 2023, Magdalena del Mar 2024); EF EPI 2025; MINEDU Fábrica de Programadores; UTEC OPI 2025 rules; tz database America/Lima.',
    localProject: 'In what order should the parts of a system be built? An original Python lesson: Version 1 builds five parts alphabetically and fails twice; Version 2 uses graphlib.TopologicalSorter for a valid build order, then one Friday change creates Cycle: login -> reports -> database -> login. Tied to configuration management in NTP-ISO/IEC 12207. Lesson family: dependency ordering and cycle detection.',
    requiredMentions: ['Cycle: login -&gt; reports -&gt; database -&gt; login', 'FAIL login needs', 'RM 179-2004-PCM', 'RM 041-2017-PCM', '0048-2004/CRT-INDECOPI', 'cinco procesos principales, ocho procesos de apoyo y cuatro procesos organizativos', '366-2024-OGA-MDMM', 'Nothing is built before what it needs', 'Peruvians working in IT average 522'],
    sources: [
      { claim: 'RM 179-2004-PCM: compulsory NTP-ISO/IEC 12207:2004, 18 months; the standard\'s process groups.', url: 'https://cdn.www.gob.pe/uploads/document/file/357356/RM_179-2004-PCM.pdf' },
      { claim: 'RM 041-2017-PCM, 27 February 2017: compulsory NTP-ISO/IEC 12207:2016, 3rd edition.', url: 'https://cdn.www.gob.pe/uploads/document/file/155742/RM-N_-041-2017-PCM.pdf' },
      { claim: 'gob.pe records of RM 041-2017-PCM and the 2022, 2023 and 2024 adoptions.', url: 'https://www.gob.pe/busquedas?term=NTP-ISO%2FIEC+12207' },
      { claim: 'Magdalena del Mar methodology manual aligned to 12207, 11 November 2024.', url: 'https://cdn.www.gob.pe/uploads/document/file/7370764/6287555-resolucion-n-366-2024-oga-mdmm.pdf' },
      { claim: 'EF EPI 2025: IT job function 522, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Fábrica de Programadores: 1,000 students, Python, PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'OPI 2025 final in C++ only.', url: 'https://opi.utec.edu.pe/' }
    ],
    rejectedClaims: [
      'The full text of RM 041-2017-PCM: the published PDF is a scan without text, so only its gob.pe title and date are used.',
      'A claim that every public body in Peru complies with 12207: not verified; the adoptions shown are examples.',
      'Software developer salaries or vacancy counts in Peru: no primary source verified.',
      'Any certification of 12207 compliance by us, or any link with PCM or INDECOPI: none.',
      'Spanish-language teaching: every class is in English, and the page says so.'
    ]
  }
};
