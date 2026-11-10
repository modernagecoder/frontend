// SHIP: market | Best Python course in Peru: judge a course by the tests its learners can pass | tests before trust: assert-based edge cases (duplicates, one item, empty) catch a function that looked right
'use strict';
// Best Python course in Peru (ag- English guide, Peru cluster row PE061, P3 best, hubGroup guides).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md (section 3.9: superlative in title and meta only, plain keyword
// H1, a section that defines what "best" means with evidence, never rank or price a named competitor); writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in
// english". Owner 2026-11-08: timing flexible, any time. Fees render in USD from the template only.
// Searches (KEYWORDS.md sections 1 and 6, Python row): "python course with certificate", "python course peru", "curso de
// python con certificado"; questions "Python course duration and fee?", "Eligibility for Python course?", "¿Curso de Python
// con certificado vale la pena?".
// Spine (different from python-course-peru, which covers release status, the course ladder and floats, and from the Spanish
// sibling mejor-curso-de-python-peru, which filters with all() and sorts with a tuple key around the OPI table): "best" means
// a course whose learners can write code that passes tests they did not see; the page shows what the two Python Institute
// exams actually measure (primary-source table: PCEP-30-03 against PCAP-31-04), what PCAP-31-04 now adds (testing,
// debugging, responsible AI-assisted programming), an original testing lesson, where Python counts in Peru (Fábrica de
// Programadores, OPI), the version question in brief, and English as the working language for IT in Peru (EF EPI 2025).
// No competitor is named, ranked or priced.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/best-python-course-in-peru/, fetched
// 2026-11-09 with curl -sL -A "Mozilla/5.0"; every quote grepped in the extracted text):
//  OpenEDG Python Institute, PCEP page (pythoninstitute.org/pcep, pcep.html, pcep.txt): "PCEP-30-03 Exam code Entry
//    Certification level 35 Exam questions 50 min Exam duration 70% Passing score 5 years Credential validity"; "Prerequisites
//    None"; "Question types Single-select, multiple-select, interactive, and scenario-based"; "Exam delivery TestNow™ (OpenEDG
//    Testing Service)".
//  OpenEDG Python Institute, PCAP page (pythoninstitute.org/pcap, pcap.html, pcap.txt): "PCAP-31-04 Exam code Associate
//    Certification level 42 Exam questions 65 min Exam duration 72% Passing score 5 years Credential validity"; "Prior PCEP
//    certification is recommended, but it is not a formal prerequisite."; "PCAP-31-04 exam evaluates practical knowledge of
//    modules and packages, exceptions, strings and Unicode, object-oriented programming, advanced Python constructs, file and
//    filesystem operations, testing, debugging, collaborative development, and responsible AI-assisted programming."; "Question
//    types Single-select, multiple-select, interactive, code-based, and scenario-based".
//  CPython devguide, Status of Python versions (raw copy in src-pages/python-course-peru/devguide-versions.html.txt, fetched
//    2026-11-09): "3.15 PEP 790 bugfix 2026-10-09 2031-10"; "3.10 PEP 619 end-of-life 2021-10-04 2026-10-01".
//  MINEDU press note, Fábrica de Programadores, July 2025 (facts-school/src/n-fabrica-prog): "beneficiará a 1000 escolares de
//    4.º y 5.º de secundaria de Lima Norte con formación en programación Python y certificación internacional"; "Los
//    participantes que concluyan ambas etapas podrán rendir el examen PCEP, con validez global."
//  OPI Reglamento 2025 (facts-school/src/opi-reglamento-2025, LaTeX accents): "Se podr´a usar C++ o Python" (Fase 1); "Se
//    podr´a usar solo C++." (Fase 2); "Queda prohibido el uso de IA generativa para la resoluci´on de problemas."
//  CNEB (FACTS 39): no computing or programming area in the secundaria plans of study.
//  INEI TIC II trimestre 2026 (facts-market/src/inei_tic_iit2026): "el 97,3% de la población de 19 a 24 años utilizó Internet,
//    seguido por el grupo de 25 a 40 años con un 95,2% y el de 12 a 18 años con un 92,5%"; "el 36,4% de los hogares del país
//    disponía de al menos una computadora".
//  EF EPI 2025 Peru page (facts-market/src/ef_peru): job function "IT" 522; Peru 519; Lima 555.
//  Vendor terms via content/ai-tool-age-audit.json: Claude 18+; ChatGPT under 18 needs parental permission.
//  Brand facts: 10,000+ students worldwide, 4.9 from about 547 Google reviews, since 2020; group fifteen to twenty or one to one.
//  Time: tzdata America/Lima UTC-5 all year, Asia/Kolkata UTC+5:30.
// Our own calculations: 50 / 35 = about 1.4 minutes per PCEP question; 65 / 42 = about 1.5 minutes per PCAP question.
// Our own programs (scratchpad pe/e8/bep_v1.py, bep_v2.py), python3 -I (3.14), exact output:
//    v1: "15" / "[12, 19, 15] expected 15 got 15 PASS" / "[17, 17, 9] expected 9 got 17 FAIL" / "[20, 20, 20] expected None got
//    20 FAIL" / "[14] expected None got IndexError FAIL"; v2: "all 5 tests pass".
// Lesson family: tests before trust. A function that works on the first example fails on duplicates, a single item and an
// empty list; writing the edge-case tests first, with assert, is what separates a course that teaches Python from one that
// shows it.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'def runner_up(scores):',
  '    """Return the second-highest score."""',
  '    ordered = sorted(scores)',
  '    return ordered[-2]',
  '',
  'print(runner_up([12, 19, 15]))',
  '',
  'tests = [([12, 19, 15], 15), ([17, 17, 9], 9), ([20, 20, 20], None), ([14], None)]',
  'for scores, expected in tests:',
  '    try:',
  '        got = runner_up(scores)',
  '    except IndexError:',
  '        got = "IndexError"',
  '    print(scores, "expected", expected, "got", got, "PASS" if got == expected else "FAIL")'
].join('\n');

const V2 = [
  'def runner_up(scores):',
  '    """Return the second-highest distinct score, or None if there is none."""',
  '    distinct = sorted(set(scores), reverse=True)',
  '    return distinct[1] if len(distinct) >= 2 else None',
  '',
  'assert runner_up([12, 19, 15]) == 15',
  'assert runner_up([17, 17, 9]) == 9',
  'assert runner_up([20, 20, 20]) is None',
  'assert runner_up([14]) is None',
  'assert runner_up([]) is None',
  'print("all 5 tests pass")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Best Python course' },
  slug: 'best-python-course-in-peru',
  code: 'bep',
  accent: '#9A282B',
  accentRationale: 'Best Python course in Peru: a brick red #9A282B, the colour of the fired clay of Moche pottery from the north coast, chosen because a course is judged by what survives testing, as a pot is judged after the kiln; contrast passes 4.5 on all three papers (checked by the build gate)',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Best Python course in Peru',
  title: 'Best Python Course in Peru: What to Check, Live in English',
  description: 'How to judge a Python course in Peru: what PCEP and PCAP really test, why a good course teaches testing, and how our live online classes in English work.',
  ogDescription: 'A Python course is only as good as the code its learners can write unaided. How to judge one from Peru: the PCEP and PCAP exams side by side, a lesson on tests that catch a function that looked right, and where Python counts in Peru.',
  twitterDescription: 'Judging a Python course from Peru: exams, testing, and the questions to ask before paying.',
  pageName: 'Best Python Course in Peru',
  webPageDescription: 'A guide to choosing a Python course in Peru, built from the OpenEDG Python Institute exam pages, the CPython developer guide, MINEDU, UTEC, INEI and EF EPI, with an original lesson on writing edge-case tests with assert.',
  courseDescription: 'Live online Python courses taught in English for learners in Peru from age 13, from first programs to tested, structured code, with optional preparation for the PCEP and PCAP exams, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Best Python course',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#meaning', label: 'What best means' },
    { href: '#exams', label: 'PCEP and PCAP' },
    { href: '#tests', label: 'Testing lesson' },
    { href: '#peru', label: 'Python in Peru' },
    { href: '#ask', label: 'Questions to ask' }
  ],
  eyebrow: 'Peru &middot; Choosing a Python course &middot; Ages 13 to adult',
  h1: 'A Python course in Peru, chosen by what learners can prove',
  lede: 'Plenty of Python courses look the same from the outside: a syllabus, a certificate, a promise. The difference shows up later, when a learner faces a problem nobody solved for them. This page explains how to tell, before paying, whether a course builds that independence, using the exams Python learners actually sit, a short lesson on testing, and the facts about Python in Peru.',
  secondaryCta: { href: '#tests', label: 'See the testing lesson' },
  wa: 'Hello Modern Age Coders, I am in Peru and choosing a Python course. Could I book a free live Python class in English?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; Python taught live, online and in English',
  spec: [
    ['Who', 'Teenagers from 13 and adults'],
    ['Starting point', 'No code needed'],
    ['Exam prep', 'PCEP and PCAP, optional'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Peru times', 'Set by the learner'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'The short answer',
  capsule: 'The right Python course is the one whose learners can write code that passes tests they have never seen, not the one with the longest syllabus. Ask any course how it checks that. Modern Age Coders teaches Python live online in English to teenagers from 13 and adults in Peru, where a mentor in India reads and reviews the learner\'s code in every lesson, optional preparation for the PCEP and PCAP exams, a group of fifteen to twenty or one to one, and flexible hours.',

  picks: {
    eyebrow: 'Three starting points',
    h2: 'Which of our Python courses fits you?',
    lede: 'Pick by age and by what you need Python for. None of the three asks for earlier programming.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'BEP / 01', title: 'Python for 13 to 18', note: 'Teenagers in secundaria learn to write, test and explain their own programs, from first prints and loops to a data project and an AI build at the end of the year.' },
      { course: 'pcep-pcap-python-certification-course', code: 'BEP / 02', title: 'PCEP and PCAP route', note: 'Suited to anyone who works better with a fixed exam ahead. The course works through the Python Institute\'s published topics with timed practice; the Institute runs the exams.' },
      { course: 'python-ai-automation-masterclass-college', code: 'BEP / 03', title: 'Python that saves work hours', note: 'For adults who want scripts that read spreadsheets, tidy reports and call AI services, with every script tested before it touches real data.' }
    ]
  },

  sections: [
    {
      id: 'meaning',
      eyebrow: 'Defining the word',
      h2: 'What makes a Python course the best choice for one learner?',
      lede: 'No independent body ranks Python courses in Peru, so "best" can only mean the course that leaves this learner able to work alone. That has visible signs. Here are the five we would look for, with what we do for each.',
      body: [
        { kind: 'ol', items: [
          '<strong>Code is reviewed by a person, every week.</strong> Automatic graders tell you a program failed; a mentor tells you why your thinking went wrong. Our mentors read learners\' code live in class and talk through it line by line.',
          '<strong>Learners write tests, not only programs.</strong> A course that never asks "what input would break this?" produces code that works once. Ours introduces <code>assert</code> early and asks for edge cases before a task counts as done, as in the lesson further down.',
          '<strong>The Python is current.</strong> The course should install a supported release. The CPython developers released 3.15.0 on 9 October 2026 and stopped fixing 3.10 altogether eight days earlier; we start new learners on a release still in bugfix support.',
          '<strong>Exam claims are precise.</strong> If a course mentions certification, it should name the exam, its code and who runs it. We prepare learners for the Python Institute\'s PCEP and PCAP when they want them; our own certificate of completion is separate, and neither is a Peruvian qualification.',
          '<strong>You see a real class first.</strong> Our first class is free, needs no card, and is a normal lesson with code, not a presentation.'
        ] },
        { kind: 'p', mt: true, html: 'If you read Spanish more comfortably, our Spanish guide <a class="ag-inline-link" href="/mejor-curso-de-python-peru">mejor curso de Python en Perú</a> approaches the same choice by separating must-haves from preferences. The classes behind both pages are identical: live, online and in English.' }
      ]
    },
    {
      id: 'exams',
      tint: 'tint',
      eyebrow: 'Certificates that mean something',
      h2: 'What do the PCEP and PCAP Python exams test?',
      lede: 'They are the two lower levels of the OpenEDG Python Institute\'s certification ladder, and they are the exams Peruvian learners meet most often, because MINEDU\'s own Python pilot offers PCEP at the end. Here is what each one is, from the Institute\'s pages.',
      body: [
        { kind: 'table', numCols: [], caption: 'PCEP and PCAP side by side, as published by the OpenEDG Python Institute', head: ['', 'PCEP', 'PCAP'], rows: [
          ['Current exam code', 'PCEP-30-03', 'PCAP-31-04'],
          ['Level', 'Entry', 'Associate'],
          ['Questions', '35', '42'],
          ['Time allowed', '50 minutes', '65 minutes'],
          ['Pass mark', '70%', '72%'],
          ['Prerequisite', 'None', 'None formally; PCEP-level knowledge recommended'],
          ['Question types', 'Single and multiple select, interactive, scenario', 'The same, plus code-based questions'],
          ['Valid for', '5 years', '5 years'],
          ['Delivered through', 'TestNow (OpenEDG Testing Service)', 'TestNow (OpenEDG Testing Service)']
        ] },
        { kind: 'source', html: 'Source: OpenEDG Python Institute, certification pages for PCEP (pythoninstitute.org/pcep) and PCAP (pythoninstitute.org/pcap), read on 9 November 2026. Exam prices are set by the Institute and are not shown here. We are not part of the Python Institute and do not run or mark its exams.' },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers tell you',
          left: [
            'Our arithmetic: PCEP gives about 1.4 minutes per question and PCAP about 1.5. Neither leaves time to work an answer out by trial and error, so a learner must read code and predict its result quickly. That is a skill a course has to practise on purpose.',
            'PCEP has no prerequisite at all. A teenager who has finished the first months of a solid course can aim at it; PCAP usually comes after a full year.'
          ],
          rightH3: 'What changed in PCAP-31-04',
          right: [
            'The Institute\'s description of the current PCAP lists modules, exceptions, strings, object-oriented programming, files, <strong>testing, debugging, collaborative development, and responsible AI-assisted programming</strong>.',
            'That last group matters for choosing a course. An exam board now expects learners to test their code and to use AI tools responsibly, which is a strong hint about what a course should already be teaching, exam or no exam.'
          ] }
      ]
    },
    {
      id: 'tests',
      eyebrow: 'A real lesson',
      h2: 'Why does a good Python course teach testing so early?',
      lede: 'Because the most common bug is a function that works on the first example someone tried. Here is a lesson we give teenagers and adults in their first months: a function that looks finished, the four tests that break it, and the fix.',
      body: [
        { kind: 'two',
          leftH3: 'The task',
          left: [
            'A learner writes <code>runner_up(scores)</code> to return the second-highest score in a list, for a class quiz. They sort the list, take the second item from the end, and try it on <code>[12, 19, 15]</code>. It prints 15. Done?',
            'The mentor asks for four tests before accepting it: a normal list, a list where the top score is shared, a list where every score is equal, and a list with one score.'
          ],
          rightH3: 'What the tests reveal',
          right: [
            'With <code>[17, 17, 9]</code> the function returns 17, the winner\'s own score, because two learners tied for first. With <code>[20, 20, 20]</code> it returns 20, though there is no runner-up at all. With <code>[14]</code> it crashes with an <code>IndexError</code>.',
            'Three of four tests fail. None of these bugs shows on the first example, and every one of them would appear on real data within a week.'
          ] },
        { kind: 'code', label: 'Version 1: one good example, three failures', lang: 'Python', code: V1, note: 'It prints <code>15</code>, then <code>[12, 19, 15] expected 15 got 15 PASS</code>, <code>[17, 17, 9] expected 9 got 17 FAIL</code>, <code>[20, 20, 20] expected None got 20 FAIL</code> and <code>[14] expected None got IndexError FAIL</code>.' },
        { kind: 'code', label: 'Version 2: decide what "runner-up" means, then let assert check it', lang: 'Python', code: V2, note: 'It prints <code>all 5 tests pass</code>. If any line were wrong, Python would stop at that <code>assert</code> with an <code>AssertionError</code> naming the line.' },
        { kind: 'p', mt: true, html: 'The fix is one line, but the real lesson is the decision behind it. The learner had to choose what "second-highest" means when scores tie, and what to return when there is no answer. Writing the tests forced that choice into the open; <code>set()</code> removes the duplicate top scores, and returning <code>None</code> handles the short lists honestly instead of crashing.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Break it again.</strong> Add a test with negative numbers, such as <code>[-3, -7, -1]</code>. Predict the answer before running it.',
          '<strong>Change the rule.</strong> Suppose the teacher says tied winners mean the runner-up is also the top score. Rewrite the tests first, then the function.',
          '<strong>Count the cost.</strong> Version 2 sorts the whole list. Write a version that walks the list once, keeping the top two values, and check it against the same tests.',
          '<strong>Explain it.</strong> In two English sentences, say why the first example was not enough evidence.'
        ] }
      ]
    },
    {
      id: 'peru',
      tint: 'tint',
      eyebrow: 'Python in Peru',
      h2: 'Is Python useful for students and workers in Peru?',
      lede: 'Yes, though not through the school timetable. Peru\'s national curriculum has no computing area, yet Python turns up in MINEDU\'s own pilot, in the national informatics olympiad, at university and in most data and AI work.',
      body: [
        { kind: 'three', cells: [
          { h3: 'A MINEDU pilot', p: 'Fábrica de Programadores, announced in July 2025, aims Python lessons at 1,000 state-school teenagers from the last two years of secundaria in Lima Norte, with PCEP open to those who finish, an exam MINEDU describes as having global validity.' },
          { h3: 'The OPI olympiad', p: 'Under UTEC\'s 2025 rules, round one was online and accepted Python as well as C++; the in-person final allowed only C++, and generative AI was banned for solving problems.' },
          { h3: 'University and work', p: 'Engineering, economics and science students meet Python in data and lab work, and EF EPI 2025 puts the English of Peru\'s IT workers at 522, above the national 519.' }
        ] },
        { kind: 'p', mt: true, html: 'Young adults in Peru are already online: INEI found that 97.3% of people aged 19 to 24 used the internet in the second quarter of 2026, as did 92.5% of those aged 12 to 18. The limit is equipment more than access, since only 36.4% of homes had a computer. A Python course needs a laptop or desktop, even a modest one; tell us if it is shared and we will plan around it.' },
        { kind: 'p', html: 'Engineering students have their own page, <a class="ag-inline-link" href="/python-for-engineering-students-peru">Python for engineering students in Peru</a>. For the full sequence of a Python course and the reasons behind it, see our <a class="ag-inline-link" href="/python-course-peru">Python course for Peru</a>.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'The teaching language',
      h2: 'Should I learn Python in English if I live in Peru?',
      lede: 'We think so, and it is the only way we teach. Python\'s keywords, its documentation, both Python Institute exams and almost every answer on the internet are in English, so learning in English removes a translation step that otherwise comes back at every error message.',
      body: [
        { kind: 'two',
          leftH3: 'How classes handle it',
          left: [
            'Mentors speak at a measured pace, write new words in the chat, and keep the code in view so learners can follow by reading. Learners answer however they can: a sentence, a typed word, or by pointing at a line.',
            'Teenagers at Lima\'s bilingual schools rarely notice the language. Learners with school-level English usually settle in within two or three classes, because the vocabulary of Python is small and repeated constantly.'
          ],
          rightH3: 'A side benefit',
          right: [
            'Explaining code aloud in English is practice for the technical interviews and the remote teams many Peruvian developers later work with.',
            'The Spanish explanation of these same classes is on our page <a class="ag-inline-link" href="/curso-de-python-en-ingles-peru">curso de Python en inglés</a>, for families who want the details in Spanish before booking.'
          ] }
      ]
    },
    {
      id: 'ask',
      tint: 'tint',
      eyebrow: 'Before you pay',
      h2: 'What questions should I ask a Python course before enrolling?',
      lede: 'Seven questions, any of which a serious course can answer in a sentence. A vague answer is information too.',
      body: [
        { kind: 'ol', items: [
          '<strong>Which Python version will I install?</strong> Ours: a current release in bugfix support, from python.org, in the first class.',
          '<strong>Who reads my code, and how often?</strong> Ours: the same mentor, live, in every class, plus review of the tasks between classes.',
          '<strong>When will I write my first test?</strong> Ours: in the first months, as soon as functions appear.',
          '<strong>What exactly is the certificate?</strong> Ours: a Modern Age Coders certificate of completion after a final exam, plus optional preparation for the Python Institute\'s exams, which the Institute runs.',
          '<strong>How are AI tools handled?</strong> Ours: under-18s never use adult accounts (Claude is 18+, and ChatGPT needs a parent\'s permission under 18); adults may use AI to question code but must explain every line.',
          '<strong>What happens if I fall behind?</strong> Ours: the mentor adjusts the pace, or the learner moves to one-to-one classes.',
          '<strong>Can I see a real class first?</strong> Ours: yes, free, with no card.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Python milestones a learner can show',
    lede: 'Our own stages. Each ends with something a learner can run and explain, and each adds a new kind of test.',
    table: { numCols: [], caption: 'Python stages with the testing habit at each (ours)', head: ['Stage', 'What the learner writes', 'How they check it'], rows: [
      ['1. Programs', 'Short scripts with decisions and loops', 'Predicts the output before running'],
      ['2. Functions', 'Small functions with one job each', 'Writes assert lines for normal and edge cases'],
      ['3. Data', 'Lists, dictionaries and files', 'Tests with empty, single and duplicate inputs'],
      ['4. Structure', 'Classes, modules and error handling', 'Groups tests and runs them on every change'],
      ['5. Projects', 'A tool or app of their own design', 'Explains the tests to the mentor in English']
    ] },
    left: { h3: 'If you are aiming at PCEP', ps: [
      'Stage 2 is usually enough content; the rest is speed. Timed practice on reading code is what closes the gap.',
      'Sit the exam only when practice scores are steady, not on the first good day.'
    ] },
    right: { h3: 'If you are learning for work', ps: [
      'Stage 3 is where Python starts paying back: reading a messy file and summarising it reliably.',
      'Bring a real task from your job; we will turn it into the course project.'
    ] }
  },

  catalogue: {
    eyebrow: 'Around Python',
    h2: 'Nine more courses for Python learners',
    lede: 'Younger starters, exam takers and adults going deeper. All live, all in English, with one mentor per group.',
    bands: [
      { num: 'I', h3: 'Before 13', sub: 'Ages 8 to 12', courses: [
        { code: 'BEP / KIDS / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Drawings, games and tiny AI experiments in real Python.' },
        { code: 'BEP / KIDS / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Breaking problems into steps before any code is typed.' },
        { code: 'BEP / KIDS / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'From blocks to typed commands inside a world children know.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'BEP / TEEN / 01', slug: 'pcap-python-certification-prep-course', title: 'PCAP preparation', blurb: 'The associate exam\'s topics, including testing and debugging.' },
        { code: 'BEP / TEEN / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Olympiad-style problems against the clock.' },
        { code: 'BEP / TEEN / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Charts, real datasets and a first model.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and over', courses: [
        { code: 'BEP / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'The full language, slowly, for complete beginners.' },
        { code: 'BEP / ADULT / 02', slug: 'python-web-development-django-flask-course', title: 'Django and Flask', blurb: 'Web applications with Python behind them.' },
        { code: 'BEP / ADULT / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The problems technical interviews are built on.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Inside a live Python class from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Early in Lima', l: 'Mentors in India are in their evening, a comfortable hour for both.' },
      { time: 'Late in Lima', l: 'India is in its early morning; classes still run, by arrangement.' },
      { time: 'Private', l: 'One learner, one mentor, and a pace reset whenever needed.' }
    ],
    cells: [
      { h3: 'Write, run, test', p: 'Every class ends with code that passes its own checks.' },
      { h3: 'Mentor reads your screen', p: 'Mistakes are found together, not fixed for you.' },
      { h3: 'English at your pace', p: 'New terms typed in the chat as they come up.' },
      { h3: 'Batches by age', p: 'Teenagers with teenagers, adults with adults.' },
      { h3: 'Tasks between classes', p: 'Short, and reviewed at the next lesson.' },
      { h3: 'Exam practice on request', p: 'Timed PCEP and PCAP style questions when you want them.' }
    ]
  },

  projectsH2: 'Work by learners who kept going',
  projectsLede: 'Some projects from students further along the road. More are in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews left on Google by parents and learners, copied word for word.',

  fees: {
    h2: 'Python course fees from Peru',
    lede: 'Fees are fixed in US dollars and paid monthly by card. Soles appear only on your bank statement, after your bank has done the conversion on the day of payment.',
    free: ['A free first Python lesson', 'Write and run real code', 'No card asked'],
    group: ['Fifteen to twenty learners of similar age', 'One mentor for the whole course', 'Two live classes each week', 'Monthly, with no long contract'],
    one: ['A private mentor', 'Pace and projects set around you', 'Hours of your choosing']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'Choosing a Python course in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our Python classes are live, online and taught in English only. The mentor slows down, repeats, and types key words, and Python\'s own keywords are English words, so the language of the class and of the code soon feel like one thing.' },
      { q: 'What is the best Python course in Peru?', a: 'We will not name one, ourselves included, because nobody measures all providers the same way. Choose the course whose learners can write and test code alone. Ask who reviews your code, when you write your first test, and what the certificate really is.' },
      { q: 'Is a Python course with a certificate worth it?', a: 'It depends on the certificate. PCEP and PCAP are run by the OpenEDG Python Institute and valid for five years. A course\'s own certificate, like ours, shows you completed that course. Neither is a Peruvian qualification. The skill behind the paper is what employers test.' },
      { q: 'Do I need PCEP before PCAP?', a: 'No. The Python Institute recommends PCEP-level knowledge for PCAP but does not require the PCEP certificate. Many learners take PCEP first because it is shorter: 35 questions in 50 minutes against PCAP\'s 42 in 65.' },
      { q: 'How long does it take to learn Python properly?', a: 'Our full Python courses run for most of a year at two live classes a week. A learner can be ready for PCEP well before the end. Speed varies, and one-to-one classes let a determined adult move faster.' },
      { q: 'What time are the Python classes in Lima?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Lima is ten and a half hours behind India throughout the year, so a 07:00 class in Lima is 17:30 for the mentor.' },
      { q: 'Can a 13-year-old join?', a: 'Yes. Python for 13 to 18 year olds is built for secundaria pupils with no coding experience. Children under 13 start with our Python and AI course for kids or with block-based coding.' },
      { q: 'Will I use ChatGPT in the course?', a: 'Not to write your code. Learners under 18 do not use adult AI accounts with us, since Claude requires users to be 18 and ChatGPT needs a parent\'s permission for minors. Adults may ask AI to explain an error, then must explain the fix themselves.' },
      { q: 'What computer do I need?', a: 'Any laptop or desktop that can run a browser and install Python, which is free. A headset helps. A phone is fine for the free first class but not for the course itself.' },
      { q: 'How do I pay from Peru?', a: 'Monthly by card in US dollars. Your bank converts the charge into soles. The first class is free and booking it needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for Python learners in Peru.',
    items: [
      { href: '/python-course-peru', label: 'Python course for Peru', p: 'The full course sequence and a lesson on decimals.' },
      { href: '/mejor-curso-de-python-peru', label: 'Mejor curso de Python en Perú', p: 'Our Spanish guide to the same decision.' },
      { href: '/python-certification-pcep-pcap-course', label: 'PCEP and PCAP certification', p: 'How we prepare for the Institute\'s exams.' },
      { href: '/python-for-engineering-students-peru', label: 'Python for engineering students', p: 'Python for university work in Peru.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'All our Peru pages in one place.' },
      { href: '/python-from-the-ground-up', label: 'Python from the ground up', p: 'Our approach to teaching the language.' }
    ]
  },

  start: {
    h2: 'Try a free Python class from Peru',
    lede: 'Bring a computer and nothing else. In the free lesson you write a small function, test it, and see how a mentor reviews code. Then we suggest the course and format that fit, and a class hour that works for you.',
    readFirst: 'You can also read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or open the <a class="ag-inline-link" href="/courses">course list</a> for each Python syllabus.',
    note: 'Every lesson is a live video class from India, in English. Messages on WhatsApp are answered in English.',
    formNote: 'Free. No card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/python-from-the-ground-up', label: 'Python from the ground up' },
        { href: '/python-certification-pcep-pcap-course', label: 'PCEP and PCAP' },
        { href: '/python-course-peru', label: 'Python course for Peru' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking, not copying' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/mejor-curso-de-python-peru', label: 'Mejor curso de Python' },
        { href: '/curso-de-python-en-ingles-peru', label: 'Curso de Python en inglés' },
        { href: '/english-medium-coding-classes-lima', label: 'Coding in English, Lima' }
      ] }
    ],
    bottomRight: 'One example is not a test'
  },

  personalityCss: `
.ag-root.ag-bep .ag-hero h1 { max-width: 21ch; letter-spacing: -0.015em; }
.ag-root.ag-bep .ag-capsule { border-left-width: 5px; }
.ag-root.ag-bep .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-bep .ag-table th { text-transform: uppercase; letter-spacing: 0.04em; }
.ag-root.ag-bep .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'OpenEDG Python Institute PCEP and PCAP certification pages; CPython developer guide (Status of Python versions); MINEDU Fábrica de Programadores press note (July 2025) and CNEB; UTEC Reglamento OPI 2025; INEI Boletín TIC II trimestre 2026; EF EPI 2025 Peru page; vendor terms via content/ai-tool-age-audit.json. Read 8 and 9 November 2026.',
    localProject: 'An original Python testing lesson for learners in Peru: runner_up() sorts and takes the second-last item; it passes [12, 19, 15] but fails [17, 17, 9], [20, 20, 20] and crashes on [14]; the fix uses set() and returns None, checked by five assert lines that print "all 5 tests pass". Lesson family: tests before trust, edge cases with assert.',
    requiredMentions: ['[17, 17, 9] expected 9 got 17 FAIL', '[14] expected None got IndexError FAIL', 'all 5 tests pass', 'One example is not a test', 'PCEP-30-03', 'PCAP-31-04', 'about 1.4 minutes per question', 'chosen by what learners can prove'],
    sources: [
      { claim: 'PCEP-30-03: entry level, 35 questions, 50 minutes, 70%, no prerequisites, 5 years, TestNow delivery.', url: 'https://pythoninstitute.org/pcep' },
      { claim: 'PCAP-31-04: associate level, 42 questions, 65 minutes, 72%, PCEP recommended not required; covers testing, debugging and responsible AI-assisted programming.', url: 'https://pythoninstitute.org/pcap' },
      { claim: 'Python 3.15 released 9 October 2026; 3.10 end of life 1 October 2026.', url: 'https://devguide.python.org/versions/' },
      { claim: 'Fábrica de Programadores: 1,000 pupils, Lima Norte, Python, PCEP with global validity.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'OPI 2025: Python or C++ in phase 1, C++ only in phase 2, generative AI banned.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'Internet use by age group and households with a computer, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: IT job function 522, Peru 519.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'PCEP or PCAP exam prices: published by the Institute but deliberately not printed (no typed prices on Peru pages).',
      'A ranking of Python courses in Peru, or that ours is the best: no primary source; refused.',
      'Python salaries or job counts in Peru: no primary source; none given.',
      'Any link with the Python Institute, MINEDU, UTEC or the OPI: none, and the page says so.',
      'Spanish-language teaching or a Peruvian qualification: neither offered.'
    ]
  }
};
