// SHIP: market | Python course for Peru in English: which Python in 2026, what a course covers, where it counts | floats are binary approximations: compare with isclose, round half to even, Decimal
'use strict';
// Python course for Peru (ag- English subject door, Peru cluster row PE007, P3, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Audience: teenagers in secundaria, university students and working adults in Peru who typed "python course peru",
// "curso de python" or "python course online" (KEYWORDS.md section 1, Python row; PAA "Python course duration and fee?").
// Spine (different from the Spanish twin curso-de-python-en-ingles-peru, which covers EF EPI, PCEP and PEP 745): which
// Python release a course should teach in late 2026 (CPython devguide status table, python.org downloads), what a whole
// course covers in order, where Python counts in Peru (CNEB, Fábrica de Programadores, OPI phase languages), and an
// original floating-point lesson. Primary-source table: the devguide "Status of Python versions".
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/python-course-peru/, fetched
// 2026-11-09 with curl; facts-school raw copies fetched 2026-11-08; every quote grepped in the raw text):
//  CPython devguide, Status of Python versions (devguide.python.org/versions, devguide-versions.html): "3.15 PEP 790 bugfix
//    2026-10-09 2031-10"; "3.14 PEP 745 bugfix 2025-10-07 2030-10"; "3.13 PEP 719 security 2024-10-07 2029-10"; "3.12 PEP
//    693 security 2023-10-02 2028-10"; "3.11 PEP 664 security 2022-10-24 2027-10"; "3.10 PEP 619 end-of-life 2021-10-04
//    2026-10-01"; "Dates shown in italic are scheduled and can be adjusted"; "New binaries are built and released roughly
//    every two months"; "After two years (18 months for versions before 3.13), only security fixes are accepted and no more
//    binaries are released"; "Five years after a release, support ends."
//  python.org/downloads (downloads.html): "Python 3.15.0 Oct. 9, 2026"; "Python 3.15.2 Oct. 25, 2026"; "Download Python 3.15.2".
//  Python tutorial, Floating-Point Arithmetic (floatingpoint.html): "the math.isclose() function can be useful for comparing
//    inexact values"; built-in functions (functions.html): "rounding is done toward the even choice (so, for example, both
//    round(0.5) and round(-0.5) are 0 , and round(1.5) is 2 )". decimal module docs (decimal.html) fetched for context.
//  CNEB (FACTS 33, 39): competency 28 is transversal; no computing area in the secundaria plan of studies.
//  MINEDU press note 24 July 2025 (FACTS 45 to 47): "beneficiará a 1000 escolares de 4.º y 5.º de secundaria de Lima Norte con
//    formación en programación Python y certificación internacional"; "podrán rendir el examen PCEP, con validez global";
//    "Esta experiencia piloto busca validar el modelo pedagógico y replicarlo en el ámbito nacional".
//  OPI Reglamento 2025 (FACTS 111, 116, 118; facts-school/src/opi-reglamento-2025/text.txt, LaTeX accents): Fase 1 "Se podr´a
//    usar C++ o Python"; Fase 2 "Se podr´a usar solo C++."; "Queda prohibido el uso de IA generativa"; OPI home: "abiertas
//    gratuitamente a todos los estudiantes de secundaria del país".
//  INEI Boletín TIC II trimestre 2026 (facts-market/src/inei_tic_iit2026.txt): "el 36,4% de los hogares del país disponía de
//    al menos una computadora".
//  AI tool ages, content/ai-tool-age-audit.json: Claude 18+; ChatGPT under 18 needs a parent's or guardian's permission.
//  Course facts (content/courses/data): python-complete-masterclass-teens "10-12 months (40-48 weeks)", ages 13 to 18;
//    python-programming-masterclass-zero-to-advanced-college "9-11 months (36-44 weeks)", 18+; python-ai-automation-
//    masterclass-college "10-12 months (44-52 weeks)", 18+; each "2 live classes/week".
//  Time: tzdata America/Lima UTC-5 (no DST since 1994), Asia/Kolkata UTC+5:30 (facts-geo/timezone.tsv): India 10 h 30 min ahead.
// Our own calculations: 2031 - 2026 = five years of planned support left on 3.15 at its release (devguide row); the time
// conversions in the table.
// Code (scratchpad pe/e2/pyp_v1.py, pyp_v2.py, python3 -I, Python 3.14.8): v1 prints "0.9999999999999999", "False",
// "0 2 2 4"; v2 prints "True", "1.0 True", "0.30000000000000004 0.3", "0.1000000000000000055511151231257827021181583404541015625".
// Lesson family: floats are binary approximations; compare with a tolerance, know that round() goes to the even
// neighbour, and use Decimal when every digit must be exact.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'ticks = 0.0',
  'for _ in range(10):',
  '    ticks += 0.1',
  'print(ticks)',
  'print(ticks == 1.0)',
  'print(round(0.5), round(1.5), round(2.5), round(3.5))'
].join('\n');

const V2 = [
  'import math',
  'from decimal import Decimal',
  '',
  'ticks = 0.0',
  'for _ in range(10):',
  '    ticks += 0.1',
  'print(math.isclose(ticks, 1.0))',
  '',
  'exact = sum([Decimal("0.1")] * 10)',
  'print(exact, exact == Decimal("1.0"))',
  'print(0.1 + 0.2, Decimal("0.1") + Decimal("0.2"))',
  'print(Decimal(0.1))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Python course' },
  slug: 'python-course-peru',
  code: 'pyp',
  accent: '#04585C',
  accentRationale: 'Python course, Peru: a deep sea teal #04585C, the cold Humboldt Current water off the Peruvian coast, chosen so the code-heavy page reads calm; contrast passes 4.5 on all three papers (checked by the build gate)',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Python course for Peru',
  title: 'Python Course for Peru: Live Online Classes in English',
  description: 'A Python course for teenagers, university students and adults in Peru, taught live online in English: which Python to learn, what you build, and when.',
  ogDescription: 'Live Python classes in English for learners in Peru: which Python release to learn in late 2026, what a complete course covers, where Python counts in Peruvian school and olympiads, and a real lesson on floating-point numbers.',
  twitterDescription: 'A live Python course in English for Peru: teens, university students and adults, at any hour.',
  pageName: 'Python Course for Peru',
  webPageDescription: 'A guide to learning Python from Peru with live classes taught in English, built from the CPython developer guide, python.org release records, MINEDU sources, the OPI 2025 rules and INEI household data, with an original lesson on floating-point arithmetic.',
  courseDescription: 'Live online Python courses taught in English for learners in Peru aged 13 and over: from first programs to files, data, automation and AI, in a group of fifteen to twenty or one to one, at hours the learner chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Python course',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#who', label: 'Who it suits' },
    { href: '#versions', label: 'Which Python' },
    { href: '#course', label: 'What you learn' },
    { href: '#lesson', label: 'Float lesson' },
    { href: '#times', label: 'Peru times' }
  ],
  eyebrow: 'Peru &middot; Python taught in English &middot; Ages 13 to adult',
  h1: 'Python course for Peru, live and in English',
  lede: 'Python reads almost like plain English, which is one reason so many people choose it as a first language, and it is the language MINEDU chose for its own secundaria pilot. This page is for learners in Peru aged 13 and over who want a real Python course rather than a playlist: which version to install this year, what a complete course teaches and in what order, where Python counts in Peruvian school and competitions, and one honest lesson about why computers get decimals slightly wrong.',
  secondaryCta: { href: '#lesson', label: 'See the float lesson' },
  wa: 'Hello Modern Age Coders, I am in Peru and would like to join a live Python course in English. Could I book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; every Python class live, online and in English',
  spec: [
    ['Who', 'Teenagers from 13, students and adults'],
    ['Level', 'From your first line of code'],
    ['Python release', 'A current bugfix release'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Peru times', 'The hour you pick'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'Modern Age Coders teaches Python courses for learners in Peru as live online classes in English: a mentor based in India teaches every lesson in real time, never as recorded video. Teenagers from 13, university students and working adults start from zero and move through functions, files and data to automation and AI projects, on a current Python 3 release. Classes run in a group of fifteen to twenty or one to one, at the hour you choose in Peru time, and the first class is free.',

  picks: {
    eyebrow: 'Three ways in',
    h2: 'Which Python course should you start with?',
    lede: 'The course follows the learner\'s age and goal, not their country. All three start at the first line of code.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'PYP / 01', title: 'Python for Teens', note: 'Ages 13 to 18, in a batch of teenagers. Over 10 to 12 months it goes from printing a first line to games, small web apps, data work and an AI capstone, at two live classes a week.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PYP / 02', title: 'Python, zero to advanced', note: 'For adults of 18 and over, students or working. Nine to eleven months from the very basics to object-oriented design, testing and real projects, with the reasoning behind every step.' },
      { course: 'python-ai-automation-masterclass-college', code: 'PYP / 03', title: 'Python for automation and AI', note: 'For adults who want Python to save them hours at work: scripts, spreadsheets, web data and applied AI, built carefully over ten to twelve months. No earlier coding needed.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who it suits',
      h2: 'Who takes a Python course from Peru?',
      lede: 'Mostly three kinds of learner, and each starts in a different place. The language is the same; the examples, the pace and the projects change.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Teenagers in secundaria', p: 'A pupil in 3rd, 4th or 5th of secundaria who wants to build things, not just use apps. Peruvian school has no computing subject, so most start from nothing, and that is fine: the teen batch assumes no prior code at all.' },
          { h3: 'University students', p: 'Engineering, economics, science or business students who need Python for a course, a thesis or an internship and want it explained slowly and properly, in the language of the documentation they will read for the rest of their career.' },
          { h3: 'Working adults', p: 'Accountants, analysts, teachers and managers who spend hours on spreadsheets and copied reports. Python automation is often the first program that pays for itself, and we build it with them line by line.' }
        ] },
        { kind: 'p', mt: true, html: 'Younger children are welcome too, but they need a different course: under 13 we start with Scratch or with Python for kids, using games and drawings. For learners who would rather read about this in Spanish, our Spanish page <a class="ag-inline-link" href="/curso-de-python-en-ingles-peru">curso de Python en inglés</a> explains the same classes from a different angle; the lessons themselves are always in English.' },
        { kind: 'p', html: 'What every learner shares is the format. Each class is a live video lesson with a mentor based in India, who speaks clear, unhurried English and stops to check that the idea has landed before moving on. Learners type from the first class. Nobody sits and watches a recording.' }
      ]
    },
    {
      id: 'versions',
      tint: 'tint',
      eyebrow: 'Which Python',
      h2: 'Which version of Python should a course teach in late 2026?',
      lede: 'A current one. Python 3.15.0 came out on 9 October 2026, and the CPython core team publishes a public table showing how long each version will be looked after. Learning on a release that has already reached end of life is the most common setup mistake we see.',
      body: [
        { kind: 'table', numCols: [], caption: 'Status of each Python 3 release, from the CPython developer guide', head: ['Version', 'Status in November 2026', 'First released', 'End of life'], rows: [
          ['3.15', 'bugfix (newest)', '9 October 2026', 'October 2031 (scheduled)'],
          ['3.14', 'bugfix', '7 October 2025', 'October 2030 (scheduled)'],
          ['3.13', 'security fixes only', '7 October 2024', 'October 2029 (scheduled)'],
          ['3.12', 'security fixes only', '2 October 2023', 'October 2028 (scheduled)'],
          ['3.11', 'security fixes only', '24 October 2022', 'October 2027 (scheduled)'],
          ['3.10', 'end of life', '4 October 2021', '1 October 2026']
        ] },
        { kind: 'source', html: 'Source: Python Software Foundation, CPython developer guide, "Status of Python versions" (devguide.python.org/versions), and the release list on python.org/downloads, which shows Python 3.15.0 on 9 October 2026 and 3.15.2 on 25 October 2026; both read on 9 November 2026. The guide marks future end-of-life dates as scheduled and open to adjustment.' },
        { kind: 'two', mt: true,
          leftH3: 'What the statuses mean',
          left: [
            'The developer guide describes five phases. In <strong>bugfix</strong>, a released version still gets bug and security fixes, with new installers roughly every two months. After two years it moves to <strong>security</strong>, where only security fixes are accepted and no new installers are built. Five years after release it reaches <strong>end of life</strong>, and nothing changes again.',
            'So on the day this page was written, two versions, 3.15 and 3.14, were in full bugfix support, and Python 3.10 had stopped receiving any fixes at all on 1 October 2026.'
          ],
          rightH3: 'What we do in class',
          right: [
            'New learners install a current bugfix release from python.org in their first class, with the mentor sharing the screen. If a university lab or an employer needs an older version, we show what differs; for a beginner, almost nothing does.',
            'The habit we teach is more useful than the number: check the official status table before you install anything, and read the release notes in English. Tutorials online age quickly; the table is updated by the people who make the language.'
          ] }
      ]
    },
    {
      id: 'course',
      eyebrow: 'What you learn',
      h2: 'What does a complete Python course cover, and in what order?',
      lede: 'A complete course is a ladder, and skipping rungs is how people end up copying code they cannot fix. This is the order our Python courses follow, whatever the learner\'s age; the projects change, the sequence does not.',
      body: [
        { kind: 'ol', items: [
          '<strong>Values and names.</strong> Numbers, text, true and false; storing them in variables; printing them. The first surprise, that <code>0.1 + 0.2</code> is not quite <code>0.3</code>, arrives early, and the lesson further down this page is built on it.',
          '<strong>Decisions and repetition.</strong> <code>if</code>, <code>elif</code>, <code>else</code>, <code>for</code> and <code>while</code>, practised on small problems the learner can check by hand before running.',
          '<strong>Functions.</strong> Breaking a problem into named pieces, each with one job and a test the learner writes themselves.',
          '<strong>Collections.</strong> Lists, dictionaries, tuples and sets, and choosing the right one: counting things, grouping them and looking them up quickly.',
          '<strong>Files and errors.</strong> Reading and writing text and CSV files, and handling mistakes in the data instead of crashing on them.',
          '<strong>Objects.</strong> Classes, methods and why programs get organised this way once they grow past a few hundred lines.',
          '<strong>Libraries.</strong> Installing and using other people\'s code safely: data tools for analysts, web frameworks for builders, automation tools for office work.',
          '<strong>A real project.</strong> Something the learner designs, builds, tests and explains in English to their mentor, from a game to a report generator to a small AI model.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How long it takes',
          left: [
            'Our full Python courses run for about nine to twelve months at two live classes a week, plus practice between classes. That is longer than most "learn Python in a weekend" offers, on purpose: the steps above need time to settle, and the gap between watching code and writing it only closes with practice.',
            'Learners with a deadline, such as a university course starting next term, can go faster one to one, where the mentor adjusts the pace every week.'
          ],
          rightH3: 'What you can show at the end',
          right: [
            'A folder of programs you wrote yourself and can explain line by line, a finished project, and our own certificate of completion, awarded after a final exam. It is a Modern Age Coders certificate, not a Peruvian qualification and not an official exam result.',
            'For learners who want an industry exam as well, our separate PCEP and PCAP course prepares for the Python Institute\'s certifications; the Institute sets and runs those exams, not us.'
          ] }
      ]
    },
    {
      id: 'peru',
      tint: 'tint',
      eyebrow: 'Python in Peru',
      h2: 'Where does Python count in Peruvian school, olympiads and work?',
      lede: 'In more places than the school timetable suggests. Python is not a school subject in Peru, but it is the language of MINEDU\'s own programming pilot and one of the two languages allowed in the first round of the national informatics olympiad.',
      body: [
        { kind: 'two',
          leftH3: 'At school',
          left: [
            'The national curriculum, the CNEB, has no computing or programming area in its plan of studies. Digital skills sit in competency 28, which every subject shares and none owns.',
            'MINEDU has started to test Python directly. Its Fábrica de Programadores pilot, announced on 24 July 2025, set out to teach Python to 1,000 pupils in 4th and 5th of secundaria in Lima Norte, with the option of sitting the PCEP exam at the end, and MINEDU describes it as a pilot it hopes to replicate nationally. Most teenagers in Peru will not be in it, which is one reason families look for a course outside school.'
          ],
          rightH3: 'In competitions',
          right: [
            'UTEC runs the Peruvian Informatics Olympiad, OPI, free for every secundaria pupil in the country. Its 2025 rules allow C++ or Python in the online first phase, but only C++ in the in-person final, and they ban generative AI for solving problems.',
            'That makes Python a sound first language for a teenager curious about olympiads, with C++ as the second step for anyone who reaches the final. UTEC and the OPI have no link with us; what we teach is the reasoning, with problems we write ourselves.'
          ] },
        { kind: 'p', mt: true, html: 'At work and at university, Python is the default language of data analysis, scientific computing and most AI tooling, and nearly all of its documentation, error messages and forums are in English. Learning it in English from the first class removes a translation step that Spanish-taught learners meet later, usually at the worst moment, in front of an error they cannot search for.' },
        { kind: 'p', html: 'One practical point. In INEI\'s household survey for April to June 2026, just 36.4% of homes across Peru owned so much as one computer. A Python course needs a laptop or desktop: a phone can show the video, but typing and running real programs on one is miserable. If the computer is shared, tell us at booking and we will plan class hours around it.' }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'A real lesson',
      h2: 'Why does Python say 0.1 added ten times is not 1?',
      lede: 'Because computers store most decimals as binary fractions, which are very close to the number you typed but not equal to it. Here is a lesson we teach in the first months of every Python course, for learners of 13 and over.',
      body: [
        { kind: 'two',
          leftH3: 'The task',
          left: [
            'A learner is building a stopwatch that adds 0.1 of a second at every tick. After ten ticks it should show exactly one second, and the program checks <code>ticks == 1.0</code> before ringing a bell.',
            'The bell never rings. Version 1 shows why: the total is <code>0.9999999999999999</code>, so the comparison is <code>False</code>. Then, to make things stranger, it asks Python to round four numbers that end in .5.'
          ],
          rightH3: 'What is going on',
          right: [
            'The number 0.1 has no exact binary form, just as one third has no exact decimal form. Python stores the nearest binary fraction, and the tiny error adds up over ten additions.',
            'The rounding line is a different lesson. Python\'s documentation says <code>round()</code> goes to <strong>the even neighbour</strong> when a number sits exactly halfway, so 0.5 rounds to 0, 1.5 to 2, 2.5 to 2 and 3.5 to 4. It is not a bug; it is a deliberate rule that stops rounding errors piling up in one direction.'
          ] },
        { kind: 'code', label: 'Version 1: the stopwatch that never rings', lang: 'Python', code: V1, note: 'It prints <code>0.9999999999999999</code>, then <code>False</code>, then <code>0 2 2 4</code>.' },
        { kind: 'code', label: 'Version 2: compare with a tolerance, or count exactly', lang: 'Python', code: V2, note: 'It prints <code>True</code>, then <code>1.0 True</code>, then <code>0.30000000000000004 0.3</code>, and finally <code>0.1000000000000000055511151231257827021181583404541015625</code>, the exact value Python stores when you type 0.1.' },
        { kind: 'p', mt: true, html: 'The fix depends on the job. For a stopwatch, a physics result or anything measured, compare with <code>math.isclose</code>, which accepts a tiny difference. For money and anything else where every digit must be exact, build the numbers with <code>Decimal</code> from text, as in <code>Decimal("0.1")</code>. The last line of Version 2 is the one learners remember: build a Decimal from the float 0.1 instead of the text "0.1", and you get the long tail that the float was hiding all along.' },
        { kind: 'p', html: 'None of this is special to Python. Java, C++ and spreadsheets store decimals the same way. A learner who understands this lesson stops trusting <code>==</code> on decimals in every language, and that one habit prevents a whole family of bugs at university and at work.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict first.</strong> Before running Version 1, write down what you expect each line to print. Most people get the first two wrong.',
          '<strong>Change the step.</strong> Try 0.5 and 0.25 instead of 0.1. Both give exactly 1.0 after the right number of ticks. Explain why, using the word "binary".',
          '<strong>Find the halfway cases.</strong> Print <code>round(x)</code> for 4.5, 5.5 and 6.5, and predict each answer before you run it.',
          '<strong>Write it up.</strong> In three English sentences, tell a classmate when you would use <code>isclose</code> and when you would use <code>Decimal</code>.'
        ] }
      ]
    },
    {
      id: 'think',
      tint: 'tint',
      eyebrow: 'Thinking, not copying',
      h2: 'Can I just learn Python with an AI chatbot instead?',
      lede: 'You can get code from a chatbot. You cannot get understanding from one without doing the thinking yourself, and the float lesson above shows why: the code ran, and it was still wrong.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Reason first', p: 'Learners predict what a program will print before they run it. When the prediction is wrong, that gap is where the learning happens, and we stay in it until the reason is clear.' },
          { h3: 'Tools by age', p: 'Claude is for users of 18 and over, and ChatGPT requires a parent\'s or guardian\'s permission for anyone under 18. Teenagers in our classes work without adult AI accounts; adults use AI to question their code, not to write it for them.' },
          { h3: 'Explain every line', p: 'A program is finished when the learner can explain each line in plain English. That rule applies to code they wrote and to any code a tool suggested.' }
        ] },
        { kind: 'p', mt: true, html: 'Peru\'s own olympiad agrees: the OPI 2025 rules forbid generative AI for solving problems, and a contestant caught using it is removed. The same standard of teaching applies to a teenager in Trujillo, a student in Lima and an adult in Cusco: depth first, and a learner who can work without help when it matters.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Peru times',
      h2: 'Are the classes in English, and what time are they in Peru?',
      lede: 'Yes, every class is in English, and the time is yours to choose. Peru stays on UTC minus 5 all year and India stays on UTC plus 5:30, so India is always 10 hours 30 minutes ahead. The rows below are conversions, not a timetable.',
      body: [
        { kind: 'table', numCols: [], caption: 'A few Peru hours and the same moment in India (examples only)', head: ['Peru time', 'India time', 'Who often picks it'], rows: [
          ['06:30', '17:00', 'Early risers before school or work'],
          ['08:00', '18:30', 'University students before a late lecture'],
          ['13:00', '23:30', 'A lunch-hour class for working adults'],
          ['18:30', '05:00, next day', 'Teenagers after homework'],
          ['20:00', '06:30, next day', 'Adults after the working day']
        ] },
        { kind: 'source', html: 'Source: IANA time zone database, zones America/Lima (five hours behind UTC, with no daylight saving since 1994) and Asia/Kolkata (UTC plus 5:30). Conversions are ours and hold on every day of the year, because neither country changes its clocks.' },
        { kind: 'p', mt: true, html: 'Mentors teach only in English and adjust to each learner: shorter sentences, a slower pace and a word written in the chat when it helps. For a learner whose spoken English is still growing, the screen does a lot of the work, because code reads the same in every language. Families in the capital can read more on our page about <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>, and learners in the south on <a class="ag-inline-link" href="/coding-classes-in-arequipa-peru">coding classes in Arequipa</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Five levels of Python, from first line to finished project',
    lede: 'These levels are ours. They place learners in the right batch and give a plain way to see progress month by month.',
    table: { numCols: [], caption: 'Python levels we use with learners from Peru (ours)', head: ['Level', 'The learner can', 'A typical piece of work'], rows: [
      ['1. Write', 'Store values, print them and make decisions', 'A quiz that checks answers and keeps score'],
      ['2. Repeat', 'Use loops and functions with tests', 'A stopwatch that rings at the right moment'],
      ['3. Organise', 'Choose lists, dictionaries and files', 'A tool that reads a CSV and summarises it'],
      ['4. Design', 'Build classes and handle errors cleanly', 'A small app split into tested modules'],
      ['5. Ship', 'Use libraries and explain trade-offs in English', 'A finished project presented to the mentor']
    ] },
    left: { h3: 'For parents of teenagers', ps: [
      'Level 2 is where the float lesson sits. A teenager who reaches it starts asking why a result is slightly off instead of shrugging.',
      'You receive short notes on what was built and what comes next, not a list of hours attended.'
    ] },
    right: { h3: 'For adult learners', ps: [
      'If you can predict what a program prints before running it, you are ready for the next level.',
      'Keep every program you write. In six months it is the clearest record of how far you have come.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more Python courses and next steps',
    lede: 'Every one is taught live in English, in a batch of fifteen to twenty or one to one, with the same mentor each week.',
    bands: [
      { num: 'I', h3: 'Starting younger or aiming at an exam', sub: 'From age 9', courses: [
        { code: 'PYP / EARLY / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Games, turtle drawings and small AI builds for children of 9 to 12.' },
        { code: 'PYP / EARLY / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths explored in Python by learners of 10 to 15.' },
        { code: 'PYP / EARLY / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP preparation', blurb: 'Python Institute exam topics, practised under time, from about 13.' }
      ] },
      { num: 'II', h3: 'Teenagers going deeper', sub: 'Ages 13 to 18', courses: [
        { code: 'PYP / TEEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real datasets, charts and a first machine-learning model.' },
        { code: 'PYP / TEEN / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'Algorithms and data structures, the ground for olympiads.' },
        { code: 'PYP / TEEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'From Python basics to models a teenager trains and tests.' }
      ] },
      { num: 'III', h3: 'Adults and university', sub: 'Ages 18 and over', courses: [
        { code: 'PYP / ADULT / 01', slug: 'data-science-complete-masterclass-college', title: 'Data science, complete', blurb: 'Analysis, machine learning and deep learning in Python.' },
        { code: 'PYP / ADULT / 02', slug: 'python-web-development-django-flask-course', title: 'Web apps with Django and Flask', blurb: 'Python on the server, from routes to databases.' },
        { code: 'PYP / ADULT / 03', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Version control and teamwork, the habit every project needs.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How a live Python class works from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before work', l: 'A Peru morning is an Indian evening, which suits mentors and learners alike.' },
      { time: 'Evenings', l: 'Late classes in Peru are early mornings in India; tell us the hour you want.' },
      { time: '1-on-1', l: 'One learner, one mentor, and a pace set by the learner every week.' }
    ],
    cells: [
      { h3: 'Code from minute one', p: 'Every class has the learner typing and running programs.' },
      { h3: 'One mentor', p: 'The same teacher follows the learner through the course.' },
      { h3: 'Clear English', p: 'Short sentences, key words typed in the chat, no rush.' },
      { h3: 'Batches by age', p: 'Teenagers learn with teenagers, adults with adults.' },
      { h3: 'Practice between classes', p: 'Small tasks, checked and discussed in the next lesson.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one learner and a mentor.' }
    ]
  },

  projectsH2: 'What learners have built after a year or two',
  projectsLede: 'Python learners who keep going end up building real tools and games. A few examples from our older students are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> hold many more.',
  reviewsLede: 'What parents and learners wrote on Google, quoted exactly as they posted it.',

  fees: {
    h2: 'Python course fees for learners in Peru',
    lede: 'Our fees are set in US dollars and taken by card. Your bank converts each payment into soles on the day it is charged, so the amount on your statement may differ slightly from one month to the next.',
    free: ['A free first Python class', 'Install Python and run a first program', 'No card asked for'],
    group: ['A batch of fifteen to twenty learners', 'Your mentor stays the same', 'Two live classes every week', 'Paid monthly; stop whenever you need to'],
    one: ['You and one mentor', 'Projects chosen around your goal', 'Class hours you set']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'Python course for Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is taught live online in English, and only in English. Mentors speak slowly and clearly, adapt to each learner\'s accent and pace, and show every step on screen. Python itself is written in English words such as if, for and while, so the vocabulary of the course and of the language is the same.' },
      { q: 'I have never programmed. Can I start a Python course?', a: 'Yes. All three courses at the top of this page start from the first line of code. Teenagers of 13 to 18 join Python for Teens; adults join the zero-to-advanced course or the automation course. The free first class shows you the pace before you decide.' },
      { q: 'Which version of Python will I learn?', a: 'A current Python 3 release in bugfix support, installed from python.org in your first class. In November 2026 that means Python 3.15 or 3.14. Python 3.10 reached end of life on 1 October 2026, so we do not start new learners on it.' },
      { q: 'How long does it take to learn Python properly?', a: 'Our full courses take about nine to twelve months at two live classes a week, plus practice. A motivated adult can move faster one to one. We would rather a learner understands each step than races through a syllabus and forgets it.' },
      { q: 'When are the classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Peru all year, so 08:00 in Lima is 18:30 in India.' },
      { q: 'Do I get a certificate?', a: 'Yes, our own Modern Age Coders certificate of completion, awarded after the final exam of the course. It is not a Peruvian qualification and no ministry or university issues it. If you also want the Python Institute\'s PCEP or PCAP exam, our certification course prepares for it; the Institute runs the exam itself.' },
      { q: 'Does Python help with the OPI informatics olympiad?', a: 'It helps you start. The OPI 2025 rules allow Python or C++ in the online first phase, but only C++ in the in-person final. Many teenagers learn to reason in Python first and then move to C++. We are independent of UTEC and the OPI and never promise a result.' },
      { q: 'Is Python taught in Peruvian schools?', a: 'Not as a subject. The national curriculum has no computing area. MINEDU\'s Fábrica de Programadores pilot, announced in July 2025, teaches Python to 1,000 pupils in 4th and 5th of secundaria in Lima Norte, but most pupils in Peru are outside it.' },
      { q: 'Can I use ChatGPT or Claude while I learn?', a: 'Adults can, carefully, to question their own code. Claude is for users of 18 and over, and ChatGPT needs a parent\'s or guardian\'s permission under 18, so teenagers in our classes work without adult AI accounts. Every learner must be able to explain each line they submit.' },
      { q: 'What do I need at home?', a: 'A laptop or desktop computer, a steady internet connection and ideally a headset with a microphone. Python is free to install, and your mentor helps you set it up in the first class. A phone is enough to watch but not to write programs.' },
      { q: 'How are fees paid from Peru?', a: 'By card, in US dollars, once a month. Your bank converts the charge into soles, so the figure on your statement can move a little. The first class is free and does not need card details.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More reading for Python learners in Peru.',
    items: [
      { href: '/curso-de-python-en-ingles-peru', label: 'Curso de Python en inglés', p: 'The same classes, explained in Spanish.' },
      { href: '/python-from-the-ground-up', label: 'Python from the ground up', p: 'How we build Python step by step.' },
      { href: '/python-certification-pcep-pcap-course', label: 'PCEP and PCAP certification', p: 'What the Python Institute exams test.' },
      { href: '/python-for-data-science', label: 'Python for data science', p: 'Where Python goes after the basics.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Every Peru page, by age and subject.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Why reasoning comes before tools.' }
    ]
  },

  start: {
    h2: 'Book a free Python class from Peru',
    lede: 'In the free class you install Python, write and run a first short program, and talk with a mentor about what you want Python for. Afterwards we suggest the course, a batch or one-to-one classes, and an hour that fits your week in Peru.',
    readFirst: 'Want more detail first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a live class from start to finish, and the <a class="ag-inline-link" href="/courses">course list</a> has the full syllabus of each Python course.',
    note: 'Classes are live video lessons, taught from India, entirely in English. You can also message us on WhatsApp, in English, for a quick reply.',
    formNote: 'Free, with no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-from-the-ground-up', label: 'Python from the ground up' },
        { href: '/python-certification-pcep-pcap-course', label: 'PCEP and PCAP' },
        { href: '/python-indentation-error-explained', label: 'Indentation errors' },
        { href: '/python-for-machine-learning', label: 'Python for machine learning' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/curso-de-python-en-ingles-peru', label: 'Curso de Python en inglés' },
        { href: '/english-medium-coding-classes-lima', label: 'Coding in English, Lima' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Never trust == on a decimal'
  },

  personalityCss: `
.ag-root.ag-pyp .ag-hero h1 { max-width: 20ch; letter-spacing: -0.015em; }
.ag-root.ag-pyp .ag-capsule { border-left-width: 5px; }
.ag-root.ag-pyp .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pyp .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-pyp .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Python Software Foundation, CPython developer guide (Status of Python versions) and python.org downloads; Python documentation (Floating-Point Arithmetic tutorial, built-in round, decimal module); MINEDU CNEB and Fábrica de Programadores press note (24 July 2025); UTEC OPI home and Reglamento OPI 2025; INEI Boletín TIC II trimestre 2026; IANA tz database. Read 8 and 9 November 2026.',
    localProject: 'An original Python lesson for learners in Peru: a stopwatch adds 0.1 ten times and prints 0.9999999999999999, so ticks == 1.0 is False; round() sends 0.5, 1.5, 2.5, 3.5 to 0 2 2 4 (round half to even); the fix uses math.isclose for measured values and Decimal("0.1") for exact ones, and Decimal(0.1) reveals the stored value. Lesson family: floats are binary approximations.',
    requiredMentions: ['0.9999999999999999', '0 2 2 4', '0.1000000000000000055511151231257827021181583404541015625', 'the even neighbour', 'Python 3.15.0 came out on 9 October 2026', 'Python 3.10 had stopped receiving any fixes at all on 1 October 2026', 'Never trust == on a decimal', 'the stopwatch that never rings'],
    sources: [
      { claim: 'Python 3.10 to 3.15 status, first release and end-of-life dates; phase definitions.', url: 'https://devguide.python.org/versions/' },
      { claim: 'Python 3.15.0 released 9 October 2026; 3.15.2 on 25 October 2026.', url: 'https://www.python.org/downloads/' },
      { claim: 'math.isclose for inexact values.', url: 'https://docs.python.org/3/tutorial/floatingpoint.html' },
      { claim: 'round() rounds halfway cases to the even choice.', url: 'https://docs.python.org/3/library/functions.html#round' },
      { claim: 'Fábrica de Programadores: 1,000 pupils, 4th and 5th secundaria, Lima Norte, Python, PCEP, pilot to replicate.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'OPI 2025: Fase 1 C++ or Python, Fase 2 C++ only, generative AI banned; free for secundaria.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: '36.4% of Peruvian households had a computer, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Rankings of the "most popular language" from surveys or indexes: not fetched from a primary source for this page; not used.',
      'Python job or salary figures for Peru: no primary source; none given.',
      'Any connection with MINEDU, Fábrica de Programadores, UTEC, the OPI or the Python Institute: none, and the page says so.',
      'Spanish-language teaching or a Peruvian qualification: neither offered; the page says so.',
      'Promised olympiad results, grades or jobs: none.'
    ]
  }
};
