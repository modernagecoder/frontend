// SHIP: market (en explainer, all ages) | what a Spanish speaker can translate in Python and what stays English | identifiers: isidentifier, iskeyword, PEP 3131 names like año, and English errors on a Spanish computer
'use strict';
// Learn coding and English together, for Peru (ag- English explainer, row PE040, hubGroup guides, code lcet).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Audience: every age from 6 to adult in Peru who wants coding and English at once. Spine (not the Spanish kids'
// explainer's keyword groups or EF skill table): the line between what a Spanish speaker CAN have in Spanish when
// coding (documentation translation, their own names) and what stays English whatever they do (keywords, errors,
// standard-library names), from Python's own sources, then what that means for learning both languages together.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/learn-coding-and-english-together-peru/,
// fetched 9 November 2026; quotes grepped in the extracted text):
//  - Python Docs Translation Dashboard, translations.python.org, "Last updated on Monday 9 November 2026 at 7:58:03 UTC"
//    (translations.html): "Spanish español ... core: 12.82% ... overall: 45.83%"; Japanese "core: 99.38%", "overall:
//    95.98%"; "Brazilian Portuguese ... core: 99.30% ... overall: 56.25%".
//  - Python Developer's Guide, Translating (devguide_translating.txt): "Several documentation translations are already in
//    production and can be found in the language switcher"; the coordination table lists "Spanish (es)".
//  - PEP 3131, Supporting Non-ASCII Identifiers, Python-Version 3.0 (pep3131.txt): "Python code is written by many people
//    in the world who are not familiar with the English language"; "All identifiers in the Python standard library MUST
//    use ASCII-only identifiers, and SHOULD use English words wherever feasible".
//  - Python docs, str.isidentifier (py_stdtypes.txt): "Return True if the string is a valid identifier according to the
//    language definition".
//  - CNEB (cneb/text.txt): secundaria weekly hours "Inglés 3 3 3 3 3" (Jornada Escolar Regular) and "Inglés 5 5 5 5 5"
//    (JEC); competencies "Se comunica oralmente en inglés como lengua extranjera", "Lee diversos tipos de textos escritos
//    en inglés como lengua extranjera", "Escribe diversos tipos de textos en inglés como lengua extranjera".
//  - EF EPI 2025 Peru page (ef_peru.txt): "Reading score: 540 Listening score: 499 Writing score: 514 Speaking score: 480".
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): internet use 97.3% at 19 to 24 years.
//  - Time: America/Lima UTC-5, no DST; India UTC+5:30 (timezone.tsv).
// Our own calculations (python3 -I, Python 3.14.8, scratchpad pe/e7/lcet_v1.py, lcet_v2.py, and python3 -I -c under
// LANG=es_PE.UTF-8), printed output: "2026 2", "año          True", "mi-variable  False", "class        True";
// "si         keyword: False  usable as a name: True", "print      keyword: False  usable as a name: True";
// "NameError: name 'imprimir' is not defined"; "TypeError: 'str' object is not callable".
// Lesson family: identifiers. What Python accepts as a name (str.isidentifier, PEP 3131 non-ASCII letters), which
// English words are reserved (keyword.iskeyword), a built-in that is not reserved (print) and the error messages that
// stay in English on a computer set to Peruvian Spanish.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'año = 2026',
  "niños = ['Ana', 'Luis']",
  'print(año, len(niños))',
  '',
  "for name in ['año', 'niños', 'mi_variable', 'mi-variable', '2026año', 'class', 'clase']:",
  "    print(f'{name:<12} {name.isidentifier()}')"
].join('\n');

const OUT1 = [
  '2026 2',
  'año          True',
  'niños        True',
  'mi_variable  True',
  'mi-variable  False',
  '2026año      False',
  'class        True',
  'clase        True'
].join('\n');

const V2 = [
  'import keyword',
  '',
  "for name in ['class', 'clase', 'if', 'si', 'while', 'mientras', 'print', 'imprimir']:",
  '    usable = name.isidentifier() and not keyword.iskeyword(name)',
  "    print(f'{name:<10} keyword: {keyword.iskeyword(name)!s:<6} usable as a name: {usable}')"
].join('\n');

const OUT2 = [
  'class      keyword: True   usable as a name: False',
  'clase      keyword: False  usable as a name: True',
  'if         keyword: True   usable as a name: False',
  'si         keyword: False  usable as a name: True',
  'while      keyword: True   usable as a name: False',
  'mientras   keyword: False  usable as a name: True',
  'print      keyword: False  usable as a name: True',
  'imprimir   keyword: False  usable as a name: True'
].join('\n');

const V3A = [
  '# run on a computer whose language is set to Spanish (Peru)',
  'imprimir("hola")'
].join('\n');

const OUT3A = [
  'Traceback (most recent call last):',
  '  File "<string>", line 1, in <module>',
  '    imprimir("hola")',
  '    ^^^^^^^^',
  "NameError: name 'imprimir' is not defined"
].join('\n');

const V3B = [
  'print = "hola"',
  'print("hola")'
].join('\n');

const OUT3B = [
  'Traceback (most recent call last):',
  '  File "<string>", line 2, in <module>',
  '    print("hola")',
  '    ~~~~~^^^^^^^^',
  "TypeError: 'str' object is not callable"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Learn coding and English together' },
  slug: 'learn-coding-and-english-together-peru',
  code: 'lcet',
  accent: '#894C06',
  accentRationale: 'Learn coding and English together: a burnt copper #894C06, the warm brown of a well-used bilingual dictionary cover, halfway between the two languages the page is about; contrast above 4.5 on the paper #FBF8F2 and its tints, as allocated in alloc.tsv and checked by the build',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Learn coding and English together in Peru',
  title: 'Learn Coding and English Together: Live Classes for Peru',
  description: 'Learn to code and practise English in the same live online class, taught in English for learners in Peru from age 6 to adult, in a group or one to one, any hour.',
  ogDescription: 'What a Spanish speaker can translate when coding in Python and what always stays English, how a coding class trains speaking, and a lesson on names such as año and the errors that stay English.',
  twitterDescription: 'Live coding classes in English for learners in Peru who want to improve their English while they learn to program.',
  pageName: 'Learn Coding and English Together in Peru',
  webPageDescription: 'A guide for learners and families in Peru who want to learn programming and English at the same time, built from the Python documentation translation dashboard, the Python developer\'s guide, PEP 3131, the CNEB English timetable and competencies, EF EPI 2025 and INEI, with an original Python lesson on identifiers and English error messages.',
  courseDescription: 'Live online coding classes taught in English for learners in Peru from age 6 to adult, designed so that programming and English grow together: web and block coding for children, JavaScript and Python for teenagers, and web, Python and data for adults, with spoken explanation, technical reading and English error messages built into every lesson, in a group of fifteen to twenty or one to one, at any hour.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Coding and English together',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#line', label: 'What stays English' },
    { href: '#skills', label: 'Four skills' },
    { href: '#lesson', label: 'Names lesson' },
    { href: '#who', label: 'Who it suits' },
    { href: '#clock', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Two languages, one class &middot; Ages 6 to adult',
  h1: 'Learn coding and English together, live from Peru',
  lede: 'Programming is the one subject a Spanish speaker cannot fully take in Spanish. Some of it can be translated, and volunteers are doing exactly that. A large part never will be. This page draws that line from Python\'s own sources, then shows how a live class taught in English turns the part that stays English into daily language practice, at any age.',
  secondaryCta: { href: '#line', label: 'See what stays English' },
  wa: 'Hello Modern Age Coders, I am in Peru and would like to learn coding and improve my English at the same time. Could I book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students worldwide &middot; every lesson spoken, read and written in English',
  spec: [
    ['Who', 'Learners in Peru from age 6 to adult'],
    ['What', 'Coding, with English used in every part of the lesson'],
    ['Level of English', 'From beginner to fluent; the mentor adapts'],
    ['Format', 'A group of fifteen to twenty, or one to one'],
    ['Hours', 'Any day, any hour in Peru time'],
    ['First class', 'Free, no card required']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Yes, you can learn coding and English together. Modern Age Coders teaches programming live and online, in English, to learners in Peru from age 6 to adult, so every lesson uses English for listening, speaking, reading and writing about code. Mentors based in India speak clearly and follow your pace and accent. It is not an English academy: you learn to program, and your technical and spoken English grow because the class happens in English. Lessons run for groups of fifteen to twenty or one to one, whenever suits you.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses where the English is in plain sight',
    lede: 'Web courses are a natural place to begin, because HTML tags are short English words a beginner meets in the first hour: head, body, title, link.',
    items: [
      { course: 'kids-ai-web-development-course', code: 'LCET / 01', title: 'Websites for kids', alt: 'Course thumbnail for the kids web development course', note: 'Ages 8 to 12. A first website, where every tag a child types is an English word they can say aloud.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'LCET / 02', title: 'JavaScript for teens', alt: 'Course thumbnail for JavaScript for teens, beginners and interactive web', note: 'Ages 13 to 17. Interactive pages and small games, reading documentation in English from the first month.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'LCET / 03', title: 'HTML and CSS for beginners', alt: 'Course thumbnail for the HTML and CSS course for beginners', note: 'Adults. Real websites from scratch, with English used for every instruction and every explanation.' }
    ]
  },

  sections: [
    {
      id: 'line',
      eyebrow: 'Where the line falls',
      h2: 'Can you learn programming in Spanish, or does it have to be in English?',
      lede: 'Partly in Spanish, never entirely. Explanations, tutorials and even part of the official documentation exist in Spanish. The language itself, its error messages and its standard library are English and will stay so. Here is the line, from Python\'s own sources and our own test runs.',
      body: [
        { kind: 'table', numCols: [], caption: 'Coding in Python as a Spanish speaker: what can be in Spanish and what stays in English', head: ['Part of the work', 'In Spanish?', 'Evidence'], rows: [
          ['The official documentation', 'Partly', 'Spanish translation at 45.83% overall and 12.82% of the core pages (Python Docs Translation Dashboard, 9 November 2026)'],
          ['Your own variable and function names', 'Yes, accents allowed', 'PEP 3131 (Python 3.0) allows non-ASCII letters in names; our run accepts <code>año</code> and <code>niños</code>'],
          ['Keywords such as if, while, class', 'No', 'Fixed by the language; <code>si</code> and <code>mientras</code> are ordinary names, not keywords (our run)'],
          ['Error messages', 'No', 'Still English on a computer set to Peruvian Spanish (our run, Python 3.14.8)'],
          ['Standard library names', 'No, by policy', 'PEP 3131: standard library identifiers "MUST use ASCII-only identifiers, and SHOULD use English words wherever feasible"']
        ] },
        { kind: 'source', html: 'Sources: translations.python.org, Python Docs Translation Dashboard, last updated on 9 November 2026; Python Developer\'s Guide, "Translating"; PEP 3131, "Supporting Non-ASCII Identifiers"; our own runs of Python 3.14.8 on 9 November 2026, shown in the lesson below. The dashboard\'s percentages change as volunteers work; read the live page for today\'s figure.' },
        { kind: 'two', mt: true,
          leftH3: 'What the translation figures say',
          left: [
            'Python\'s developer guide says several documentation translations are already in production and reachable from the language switcher, each run by a volunteer team; Spanish has one. On 9 November 2026 the dashboard showed Spanish at 45.83% overall but only 12.82% of the core pages, while Japanese stood at 95.98% overall and Brazilian Portuguese at 56.25%.',
            'So a Spanish speaker can read a good part of the documentation in Spanish, with gaps, and the gaps are often in the most used pages. Anyone who wants the full picture ends up reading English.'
          ],
          rightH3: 'Why the language itself stays English',
          right: [
            'PEP 3131 opened Python 3 to names in other alphabets, explaining that "Python code is written by many people in the world who are not familiar with the English language". It kept the standard library in ASCII and asked for English words wherever feasible, so code written anywhere still shares one vocabulary.',
            'The result is a deal every Spanish-speaking programmer accepts: name your own things however you like, but read, search and talk about the shared parts in English.'
          ] },
        { kind: 'p', mt: true, html: 'That is the case for learning both at once. A learner taught in Spanish meets the English parts anyway, as unexplained symbols. A learner taught in English meets them as words, said aloud, in sentences. For a Spanish-language view of the same choice, see our page on <a class="ag-inline-link" href="/curso-de-python-en-ingles-peru">un curso de Python en inglés</a>.' }
      ]
    },
    {
      id: 'skills',
      eyebrow: 'Four skills in one lesson',
      h2: 'How does a coding class improve your English?',
      lede: 'By making you use all four language skills for a real purpose, every few minutes, with a patient listener. Peru\'s national curriculum names those same skills for English at school; a coding class gives them a job to do.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Listening and speaking', p: 'The mentor explains, you answer questions and, above all, you explain your own code aloud. "This loop runs once for each name" is a full English sentence with a precise meaning, said many times a lesson.' },
          { h3: 'Reading', p: 'Error messages, documentation, instructions and the code itself. A traceback is short, structured English that rewards careful reading: the last line names the problem and the line above shows where.' },
          { h3: 'Writing', p: 'Comments, names for variables and functions, a short description of each project and, for older learners, questions written to a forum or a teammate. Each is small, frequent and checked.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What Peruvian school asks for',
          left: [
            'The CNEB sets three English competencies: to communicate orally in English as a foreign language, to read different types of written texts in English, and to write different types of texts in English. In secundaria the timetable gives English 3 hours a week under the regular school day and 5 under the Jornada Escolar Completa.',
            'A coding class does not replace that. It adds hours where those competencies are used on something the learner has chosen to do.'
          ],
          rightH3: 'Where Peruvians most need practice',
          right: [
            'EF\'s English Proficiency Index 2025 gives Peru 540 for reading, 499 for listening, 514 for writing and 480 for speaking, its lowest skill. EF tests adults, but the pattern is familiar to many families: English read well, spoken less.',
            'A live class tilts the balance towards speaking and listening, because the main thing you do in it is talk about what you are building with someone who is listening closely.'
          ] },
        { kind: 'p', mt: true, html: 'Families in Lima whose children already study in English at school will find a page written for them: <a class="ag-inline-link" href="/english-medium-coding-classes-lima">coding for Lima\'s English-medium pupils</a>.' }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'What does a lesson that teaches coding and English look like?',
      lede: 'This lesson is ours. We use it with teenagers and adults in their first weeks of Python, and with confident 11 and 12 year olds. It answers a question Spanish speakers often ask: can I just write my code in Spanish? The answer, found by running code rather than by taking our word for it, is "partly".',
      body: [
        { kind: 'code', label: 'Step 1: are Spanish names allowed?', lang: 'Python', code: V1, note: '<code>isidentifier()</code> asks Python whether a piece of text could be used as a name. The documentation says it returns True if the string is a valid identifier according to the language definition.' },
        { kind: 'code', label: 'What Step 1 prints', lang: 'Output', code: OUT1, note: 'Exact output from our run with Python 3.14.8. <code>año</code> and <code>niños</code> work, accents and all. A hyphen is not allowed, and a name cannot start with a digit. And <code>class</code> says True, which turns out to be misleading.' },
        { kind: 'p', mt: true, html: 'The mentor asks, in English: "If <code>class</code> is a valid identifier, can I write <code>class = 5</code>?" Learners try it and get a syntax error. The word is the right shape for a name, but Python has reserved it. That calls for a second check.' },
        { kind: 'code', label: 'Step 2: which English words are taken?', lang: 'Python', code: V2, note: '<code>keyword.iskeyword</code> tells you whether a word is reserved by the language. A name is only usable if it passes both checks.' },
        { kind: 'code', label: 'What Step 2 prints', lang: 'Output', code: OUT2, note: 'Exact output from our run. Every English keyword is taken, and every Spanish translation is free. The last two lines hide a trap: <code>print</code> is not a keyword, so Python will let you use it as a name.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Say the rule in English.</strong> "A name can contain letters, digits and underscores, cannot start with a digit, and cannot be a keyword." Learners say it, then write it as a comment.',
          '<strong>Notice what the keywords are.</strong> Every reserved word in the list is an ordinary English word with an ordinary meaning: if, while, class, return. Knowing the meaning makes the code read like a sentence.',
          '<strong>Find the trap.</strong> <code>print</code> is a built-in function, not a keyword. Python allows <code>print = "hola"</code>, and the damage only appears on the next line. Step 3 shows it.'
        ] },
        { kind: 'code', label: 'Step 3a: a Spanish function name on a Spanish computer', lang: 'Python', code: V3A, note: 'We ran this with the computer\'s language set to Spanish (Peru), to see whether Python answers in Spanish.' },
        { kind: 'code', label: 'What Step 3a prints', lang: 'Output', code: OUT3A, note: 'Exact output from our run. The computer is in Spanish; the error is in English. <code>imprimir</code> is a perfectly legal name, but nothing has that name, so Python reports a NameError.' },
        { kind: 'code', label: 'Step 3b: using print as a name', lang: 'Python', code: V3B, note: 'The first line is allowed. The second line tries to call the text "hola" as if it were a function.' },
        { kind: 'code', label: 'What Step 3b prints', lang: 'Output', code: OUT3B, note: 'Exact output from our run. "Object is not callable" is precise technical English: the thing named <code>print</code> is now a string, and you cannot call a string.' },
        { kind: 'p', mt: true, html: 'By the end of the lesson the learner has met five English words that the language owns, a rule they can state aloud, two error messages they can read word by word, and a practical decision: use Spanish names if you like, but never reuse an English built-in. They have also discovered for themselves why most teams write their names in English anyway. Python\'s own standard library does exactly that, by policy.' }
      ]
    },
    {
      id: 'who',
      eyebrow: 'Who it suits',
      h2: 'Who should learn coding and English at the same time?',
      lede: 'Most learners who already have some school English and want to use it. It suits some people less, and it is better to know that before starting than after.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Children of 6 to 12', p: 'Children absorb the words of a game or a web page quickly, especially when they built the thing being described. Classes use pictures and short phrases, and parents see both skills grow in the weekly note.' },
          { h3: 'Teenagers in secundaria', p: 'Teenagers get a reason to speak English outside the classroom and a head start on the technical English used at university and online. Their school English hours stay as they are; this adds practice.' },
          { h3: 'University students and adults', p: 'For adults, English and coding together are often a work goal. INEI found that 97.3% of Peruvians aged 19 to 24 used the internet in the second quarter of 2026, much of the technical part of it in English.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When to wait',
          left: [
            'A learner who cannot yet follow simple spoken instructions in English will struggle to learn programming at the same time. For them, a few months of general English first is kinder.',
            'The free first class answers this honestly. We would rather say "not yet" than see someone discouraged in both subjects at once.'
          ],
          rightH3: 'What we are not',
          right: [
            'We are not an English academy and we do not teach grammar lessons, give English certificates or prepare for English exams. You learn to program, in English, with mentors who are patient about language.',
            'If English is your main goal, combine our classes with an English course. If programming is your goal and English is a welcome side effect, this is the right place.'
          ] },
        { kind: 'p', mt: true, html: 'Adults in Peru weighing courses alongside a job can read our Spanish page for <a class="ag-inline-link" href="/cursos-de-programacion-para-adultos-peru">cursos de programación para adultos</a>. For families planning a summer start, <a class="ag-inline-link" href="/vacaciones-utiles-virtuales-en-ingles">vacaciones útiles virtuales en inglés</a> covers the January to March break.' }
      ]
    },
    {
      id: 'spanish',
      eyebrow: 'Teaching language',
      h2: 'Are the classes taught in Spanish?',
      lede: 'No. Each class is live and online, and English is the only language of teaching. Mentors in India keep their speech clear, check understanding often and follow the pace and accent of each learner, from a 6-year-old beginner to a fluent adult.',
      body: [
        { kind: 'two',
          leftH3: 'What happens when you do not understand',
          left: [
            'You ask, in English, and the mentor says it another way, shows it on the screen or writes the key word in the chat. "Could you say that more slowly?" is the first useful sentence of the course.',
            'Mentors never switch to Spanish to explain. That can feel hard in the first weeks and is exactly what makes the English grow.'
          ],
          rightH3: 'Outside the lesson',
          right: [
            'Parents and learners can write to us in Spanish on WhatsApp about schedules, payments or anything else. Only the lessons are in English.',
            'Mentors send a short note after classes for children, saying what was practised in code and which English words were new.'
          ] }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Peru time',
      h2: 'At what time can I take the classes from Peru?',
      lede: 'Pick any hour. Mentors teach from India, and since Peru and India both ignore daylight saving, the difference between the two clocks never moves.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example conversions from Peru time to India time (not a class timetable)', head: ['Peru time', 'India time', 'Day in India'], rows: [
          ['6:00 a.m.', '4:30 p.m.', 'Same day'],
          ['9:30 a.m.', '8:00 p.m.', 'Same day'],
          ['11:00 a.m.', '9:30 p.m.', 'Same day'],
          ['2:00 p.m.', '12:30 a.m.', 'Next day'],
          ['5:30 p.m.', '4:00 a.m.', 'Next day'],
          ['9:30 p.m.', '8:00 a.m.', 'Next day']
        ] },
        { kind: 'source', html: 'Time zones: Peru, UTC minus 5 all year, no daylight saving (tz database, America/Lima); India, UTC plus 5:30 all year. The difference is always 10 hours 30 minutes, with India ahead.' },
        { kind: 'p', mt: true, html: 'Adults often take a class before work or late in the evening; children and teenagers usually pick an hour after school. Book in Peru time and we handle the conversion.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How do you see progress in coding and in English?',
    lede: 'Five stages we use, with a coding side and a language side for each. They are ours and are not linked to any official English scale.',
    table: { caption: 'Five stages of coding and English growing together (ours)', head: ['Stage', 'In code', 'In English'], rows: [
      ['1. Recognise', 'Runs and changes small examples', 'Recognises keywords and common instructions by ear'],
      ['2. Name', 'Chooses clear names for variables and functions', 'Names things precisely: "total", "count", "is_ready"'],
      ['3. Read', 'Reads an error message and finds the line', 'Reads a traceback and says what it means'],
      ['4. Explain', 'Explains a whole program step by step', 'Speaks for a minute about code without switching language'],
      ['5. Ask and teach', 'Looks up new functions in documentation', 'Writes a clear question to a forum or explains a fix to someone else']
    ] },
    left: { h3: 'For parents', ps: [
      'Listen for longer English sentences about code over the weeks. That is the most reliable sign that both skills are growing.',
      'A child at stage 3 can tell you what an error message says in Spanish; that translation is itself a good exercise.'
    ] },
    right: { h3: 'For learners', ps: [
      'Explain every program aloud to someone, even yourself. If you get stuck on a word, write it down and ask the mentor.',
      'Read the last line of an error message first. It is usually the shortest and most useful English sentence on the screen.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses taught in English',
    lede: 'All live, with one mentor through the course, and all using English for every part of the lesson.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'LCET / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Block coding for kids', blurb: 'Blocks labelled in English, read aloud as the child builds.' },
        { code: 'LCET / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first typed language, explained one English word at a time.' },
        { code: 'LCET / KIDS / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Commands and loops in a world children love to describe.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 17', courses: [
        { code: 'LCET / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first program to files and classes, with documentation in English.' },
        { code: 'LCET / TEEN / 02', slug: 'frontend-development-masterclass-for-teens', title: 'Front-end development for teens', blurb: 'Interfaces built from English-named tags and properties.' },
        { code: 'LCET / TEEN / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Charts and findings explained in short English reports.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'LCET / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'The whole language, for adults starting fresh.' },
        { code: 'LCET / ADULT / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'Working with data at work, explained in plain English.' },
        { code: 'LCET / ADULT / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web development', blurb: 'Front end to database, with English technical writing throughout.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How are the live classes organised?',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before work', l: 'Early hours in Peru time for adults.' },
      { time: 'After school', l: 'Afternoons and evenings for children and teenagers.' },
      { time: 'When you choose', l: 'One-to-one lessons on your own timetable.' }
    ],
    cells: [
      { h3: 'English only', p: 'The whole lesson, with patience for every level.' },
      { h3: 'You speak', p: 'Learners explain their code aloud every class.' },
      { h3: 'Word lists', p: 'New technical words written in the chat and reviewed.' },
      { h3: 'Real errors', p: 'Tracebacks read together, word by word.' },
      { h3: 'One mentor', p: 'The same person, who learns how you speak and think.' },
      { h3: 'Group or solo', p: 'A class of fifteen to twenty at your level, or private lessons.' }
    ]
  },

  projectsH2: 'Built and explained in English',
  projectsLede: 'Projects our older students built and then presented in English. More can be found on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews from Google, in the words families and learners used.',

  fees: {
    h2: 'Fees for learners in Peru',
    lede: 'Fees are monthly and shown below in US dollars. You pay with a card, and the bank that issued it converts the amount into soles using its own rate, so your statement may show a slightly different figure each month.',
    free: ['A free first class with a mentor', 'A check of both coding and spoken English', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar level', 'One mentor all the way through', 'Two live classes a week', 'Monthly, stop at the end of any month'],
    one: ['Just you and the mentor', 'Pace set by your English and your goals', 'Days and times of your choosing']
  },

  faq: {
    eyebrow: 'Learners in Peru ask',
    h2: 'Learning coding and English together: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Lessons are live and online, and they are given in English only. Mentors in India speak clearly and adjust to your pace and accent, and you can message us in Spanish on WhatsApp about anything outside the lesson.' },
      { q: 'Can I learn to code entirely in Spanish?', a: 'Only partly. Tutorials and part of the official Python documentation exist in Spanish, but keywords, error messages and standard library names are English and stay that way. Learning in English means meeting them as words rather than symbols.' },
      { q: 'Will my English really improve in a coding class?', a: 'Your technical English and your spoken English usually do, because you listen, read and explain code in English every lesson. It is not a grammar course, and we do not give English certificates.' },
      { q: 'What level of English do I need?', a: 'Enough to follow simple spoken instructions. Children start with pictures and short phrases; adults with basic school English can begin. The free first class checks this and tells you honestly if you should wait.' },
      { q: 'Can I write my code with Spanish names?', a: 'Yes. Python 3 accepts names such as año and niños. We still recommend English names for anything you share, and never reusing a built-in such as print, as the lesson on this page shows.' },
      { q: 'Is this for children or adults?', a: 'Both. We teach from age 6 to adults of any age, with separate groups and courses by age. Adults often take one-to-one classes around work.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. The two clocks differ by 10 hours 30 minutes on every day of the year, India ahead: 9:30 a.m. in Lima is 8:00 p.m. there.' },
      { q: 'Do I get a certificate?', a: 'At the end of a course you receive our own certificate of completion for the programming course. It is not an English certificate, a Peruvian qualification or a university credit.' },
      { q: 'Is this connected with my school or university?', a: 'No. Modern Age Coders has no tie to MINEDU, to any school or to any university. The classes sit beside your studies or your job.' },
      { q: 'How do I pay?', a: 'You pay monthly by card, in US dollars, and your card issuer turns that into soles. The trial class costs nothing and asks for no card details.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More on code and language',
    lede: 'Related pages, all in English.',
    items: [
      { href: '/how-to-actually-learn-to-code', label: 'How to actually learn to code', p: 'Why practice and explanation beat watching videos.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'Reading error messages as clues.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'One live class, start to finish.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Understanding before tools, at every age.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects our students built and presented.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'The full list of what we teach in Peru.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The free class is short and practical. You build something small with a mentor, explain it in whatever English you have, and the mentor gauges both your coding and your comfort with spoken English before suggesting a course, a format and an hour.',
    readFirst: 'Would you rather read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a lesson, and the <a class="ag-inline-link" href="/courses">course catalogue</a> lists every syllabus.',
    note: 'All lessons are live and online, taught in English by mentors in India. Message us on WhatsApp in Spanish or English.',
    formNote: 'Free. No card. No commitment.'
  },

  footer: {
    cols: [
      { h4: 'Courses on this page', links: [
        { href: '/courses/kids-ai-web-development-course', label: 'Websites for kids' },
        { href: '/courses/javascript-course-for-teens-beginners-interactive-web', label: 'JavaScript for teens' },
        { href: '/courses/html-css-course-for-beginners-build-real-websites', label: 'HTML and CSS for beginners' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Reading', links: [
        { href: '/how-to-actually-learn-to-code', label: 'Learning to code' },
        { href: '/how-to-debug-code', label: 'Reading errors' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Name it in Spanish, read it in English'
  },

  personalityCss: `
.ag-root.ag-lcet .ag-hero h1 { letter-spacing: -0.016em; max-width: 20ch; }
.ag-root.ag-lcet .ag-capsule { border-left-width: 4px; border-radius: 4px; }
.ag-root.ag-lcet .ag-table td { line-height: 1.55; }
.ag-root.ag-lcet .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-lcet .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Python Docs Translation Dashboard (translations.python.org, updated 9 November 2026); Python Developer\'s Guide, Translating; PEP 3131; Python documentation for str.isidentifier; MINEDU CNEB (secundaria English hours under JER and JEC, three English competencies); EF EPI 2025 Peru page (skill scores); INEI TIC en los Hogares II Trimestre 2026. Read 9 November 2026. The five stages and the Python lesson are our own; our test runs used Python 3.14.8.',
    localProject: 'Can a Spanish speaker write Python in Spanish? Step 1 shows año and niños are valid names (PEP 3131) while mi-variable and 2026año are not, and class passes isidentifier; Step 2 shows every English keyword is reserved and every Spanish translation (si, mientras, clase) is free, with print a non-keyword trap; Step 3 runs under a Peruvian Spanish locale and still prints "NameError: name \'imprimir\' is not defined" and "TypeError: \'str\' object is not callable". Set against the Spanish documentation translation at 45.83% overall and 12.82% of core pages.',
    requiredMentions: ['Coding in Python as a Spanish speaker: what can be in Spanish and what stays in English', 'Spanish translation at 45.83% overall and 12.82% of the core pages', 'mi-variable  False', 'usable as a name: True', 'The computer is in Spanish; the error is in English.', 'Python code is written by many people in the world who are not familiar with the English language', 'Five stages of coding and English growing together (ours)', 'Name it in Spanish, read it in English', '97.3% of Peruvians aged 19 to 24 used the internet'],
    sources: [
      { claim: 'Python documentation translation progress, 9 November 2026: Spanish 45.83% overall and 12.82% core; Japanese 95.98% overall; Brazilian Portuguese 56.25% overall.', url: 'https://translations.python.org/' },
      { claim: 'Several documentation translations are in production; a Spanish (es) team exists.', url: 'https://devguide.python.org/documentation/translations/translating/' },
      { claim: 'PEP 3131: non-ASCII identifiers in Python 3; standard library ASCII-only and English words where feasible.', url: 'https://peps.python.org/pep-3131/' },
      { claim: 'str.isidentifier returns True for a valid identifier.', url: 'https://docs.python.org/3/library/stdtypes.html' },
      { claim: 'CNEB: secundaria English 3 hours (JER) and 5 hours (JEC) a week; three English competencies.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 Peru: reading 540, listening 499, writing 514, speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'INEI II Trimestre 2026: 97.3% of people aged 19 to 24 used the internet.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' }
    ],
    rejectedClaims: [
      'That coding classes raise an English exam score or CEFR level: no evidence; the page says we are not an English academy and give no English certificate.',
      'A fixed Spanish translation percentage: the dashboard changes daily; the page dates the figure and tells readers to check the live page.',
      'Any Peruvian figure on how many programmers work in English: no primary source; not claimed.',
      'Any connection with MINEDU, a school or a university: none, and the page says so.',
      'Spanish-language teaching: none; all lessons are in English.'
    ]
  }
};
