// SHIP: market | C++ course for Peru in English: the OPI final is C++ only, the road to the IOI, modern C++ | prefix sums: rebuild every range sum or precompute once; p has n+1 entries and the off-by-one
'use strict';
// C++ course for Peru (ag- English subject door, Peru cluster row PE016, P3, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Audience: teenagers in secundaria (especially those curious about the OPI), university students and adults in Peru who
// typed "curso de c++" or "c++ course" (rows.tsv PE016 "curso de c++"). No Spanish C++ twin exists yet.
// Spine: why C++ matters in Peru (the OPI 2025 final allows only C++; OPI selects the IOI team), the OPI 2025 phases from
// UTEC's own rules, Peru's IOI record, which C++ (C++23 is the current ISO standard), what a C++ course covers, and an
// original prefix-sum lesson on a topic the IOI 2025 syllabus lists as included. Primary-source table: Reglamento OPI 2025,
// FASE 1 and FASE 2.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/c-plus-plus-course-peru/, fetched
// 2026-11-09 with curl; facts-school raw copies fetched 2026-11-08; every quote grepped in the raw text):
//  Reglamento OPI 2025 (opi.utec.edu.pe/Reglamento_OPI_2025.pdf; facts-school/src/opi-reglamento-2025/text.txt, LaTeX accent
//    artefacts such as "podr´a"): "FASE 1 • La fecha de FASE 1 ser´a el d´ıa 18 de Mayo de 2025 . • Esta fase ser´a virtual. •
//    Duraci´on: de 4 a 5 horas. • Se podr´a usar C++ o Python • Ser´an de 3 a 6 problemas."; "Clasifican a la FASE 2 los
//    primeros 30 alumnos con puntaje mayor a cero."; "FASE 2 • La fecha de la FASE 2 ser´a el s´abado 31 de Mayo de 2025 . •
//    Esta fase ser´a presencial en la Universidad de Ingenier´ıa y Tecnolog´ıa (UTEC) con sede en Lima. • Duraci´on: 5 horas.
//    • Se podr´a usar solo C++. • Ser´an de 4 a 6 problemas."; "Ambas fases ser´an realizadas a trav´es de la plataforma
//    OmegaUp"; "los problemas ser´an de t´opicos incluidos en el silabus oficial de la IOI"; "Tener como m´aximo 20 a˜nos de
//    edad al d´ıa 1 de Julio de 2025."; "Las fechas de la OII-2025 ser´an el 14 y 15 de Junio de 2025"; "Los 10 a 15 primeros
//    puestos de la FASE 2 ser´an seleccionados para participar en OII-2025."; "La IOI-2025 se realizar´a del 27 de Julio al 3
//    de agosto en Sucre, Bolivia"; "Los 4 primeros puestos de la FASE 2 ser´an seleccionados para participar en IOI-2025.";
//    "Per´u viene participando en la IOI desde el a˜no 2022"; "Queda prohibido el uso de IA generativa para la resoluci´on de
//    problemas." Printed on the page in plain accents, translated, not quoted verbatim, because of the extraction artefacts.
//  OPI home (facts-school/src/opi-home/): "abiertas gratuitamente a todos los estudiantes de secundaria del país";
//    "Inscripciones : hasta el 18 de marzo del 2026 . Competencia : 11 de Abril (Fase 2 - Final)".
//  IOI statistics, Peru (facts-school/src/ioi-stats-per/): "First participation: 2022 Years participated: 5 Contestants
//    participated: 13"; "Gold medals: 0 Silver medals: 0 Bronze medals: 1 Honourable mentions: 1".
//  IOI syllabus page (ioinformatics.org/page/syllabus/12, ioi-syllabus.html): "This is the official Syllabus for IOI 2025.";
//    "IOI 2026 took place in Uzbekistan". IOI Syllabus 2025 PDF (ioi-syllabus-2025.pdf, text via PDFKit): marks "✓ Included,
//    unlimited"; under AL3a "Simple array manipulation (filling, shifting, rotating, rever- sal, resizing, minimum/maximum,
//    prefix sums, histogram, bucket sort)"; footer "The IOI Syllabus – DRAFT Version 2025".
//  Standard C++ Foundation, The Standard (isocpp.org/std/the-standard, isocpp-std.html): "The current ISO C++ standard is
//    C++23, formally known as ISO International Standard ISO/IEC 14882:2024(E)".
//  cppreference vector::at (cppref-vector.html) fetched for context only; not quoted.
//  CNEB (FACTS 33, 39): no computing area in secundaria.
//  INEI Boletín TIC II trimestre 2026: "el 36,4% de los hogares del país disponía de al menos una computadora".
//  AI tool ages, content/ai-tool-age-audit.json: Claude 18+; ChatGPT under 18 with a parent's permission.
//  Course facts (content/courses/data): cpp-programming-masterclass-for-teens "10-12 months (40-48 weeks)", ages 13 to 18;
//    cpp-programming-complete-masterclass-college "10-12 months (44-52 weeks)", 18+; competitive-programming-for-teens-course
//    "6 months (24 weeks), joinable any month", teens who "can already write basic programs"; cpp-programming-for-kids-course
//    "6 months (24 weeks)", ages 9 to 12.
//  Time: tzdata America/Lima UTC-5 (no DST), Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations: 200,000 x 200,000 = 40,000,000,000 additions in the worst case without prefix sums, against
// 200,000 + 200,000 = 400,000 operations with them (sizes are ours, not OPI limits); time conversions.
// Code (scratchpad pe/e2/cpp/ranges.cpp and scale.cpp, compiled with Apple clang 17, c++ -std=c++17 -O2 -Wall, then run):
// ranges prints "sum 0..7: 40 40", "sum 2..5: 21 21", "sum 3..3: 9 9", "additions, version 1: 13", "additions to build p:
// 8", "wrong formula p[r] - p[l] for 3..3: 0"; scale prints "worst case, version 1: 40000000000 additions", "version 2:
// 400000 additions and subtractions".
// Lesson family: prefix sums; precompute once to answer many range queries, keep p one longer than the array, and test
// the one-element range where the off-by-one shows.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  '#include <iostream>',
  '#include <vector>',
  'using namespace std;',
  '',
  'int main() {',
  '    vector<long long> a = {4, 7, 1, 9, 3, 8, 2, 6};',
  '    int n = a.size();',
  '',
  '    // Version 1: add up every range again',
  '    long long adds = 0;',
  '    auto slow = [&](int l, int r) {',
  '        long long s = 0;',
  '        for (int i = l; i <= r; i++) { s += a[i]; adds++; }',
  '        return s;',
  '    };',
  '',
  '    // Version 2: prefix sums, p[i] = a[0] + ... + a[i-1]',
  '    vector<long long> p(n + 1, 0);',
  '    for (int i = 0; i < n; i++) p[i + 1] = p[i] + a[i];',
  '    auto fast = [&](int l, int r) { return p[r + 1] - p[l]; };',
  '',
  '    int queries[3][2] = {{0, 7}, {2, 5}, {3, 3}};',
  '    for (auto& q : queries)',
  '        cout << "sum " << q[0] << ".." << q[1] << ": "',
  '             << slow(q[0], q[1]) << " " << fast(q[0], q[1]) << "\\n";',
  '    cout << "additions, version 1: " << adds << "\\n";',
  '    cout << "additions to build p: " << n << "\\n";',
  '    cout << "wrong formula p[r] - p[l] for 3..3: " << p[3] - p[3] << "\\n";',
  '}'
].join('\n');

const SCALE = [
  '#include <iostream>',
  'using namespace std;',
  '',
  'int main() {',
  '    long long n = 200000, q = 200000;',
  '    cout << "worst case, version 1: " << n * q << " additions\\n";',
  '    cout << "version 2: " << n + q << " additions and subtractions\\n";',
  '}'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'C++ course' },
  slug: 'c-plus-plus-course-peru',
  code: 'cpl',
  accent: '#147175',
  accentRationale: 'C++ course, Peru: a Lake Titicaca teal #147175, the colour of the high-altitude water at Puno, for the language of the OPI final; contrast passes 4.5 on all three papers (checked by the build gate)',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'C++ course for Peru',
  title: 'C++ Course for Peru: Live Online Classes in English',
  description: 'A C++ course for teenagers, university students and adults in Peru, live online in English: why the OPI final uses C++, what you learn, and flexible hours.',
  ogDescription: 'Live C++ classes in English for learners in Peru: the OPI 2025 phases from UTEC\'s own rules, why the final is C++ only, Peru\'s IOI record, which C++ standard to learn, and a prefix-sum lesson that compiles and runs.',
  twitterDescription: 'A C++ course taught live in English for Peru: olympiad-minded teenagers, students and adults, at any hour.',
  pageName: 'C++ Course for Peru',
  webPageDescription: 'A guide to learning C++ from Peru with live classes taught in English, built from the Reglamento OPI 2025 and the OPI home page, IOI statistics and the IOI 2025 syllabus, the ISO C++ standard page and INEI household data, with an original prefix-sum lesson.',
  courseDescription: 'Live online C++ courses taught in English for learners in Peru from age 9: modern C++, the standard library, data structures, algorithms and olympiad-style problem solving, in a group of fifteen to twenty or one to one, at hours the learner chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'C++ course',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#why', label: 'Why C++' },
    { href: '#opi', label: 'The OPI' },
    { href: '#learn', label: 'What you learn' },
    { href: '#lesson', label: 'Prefix sums' },
    { href: '#times', label: 'Peru hours' }
  ],
  eyebrow: 'Peru &middot; C++ in English &middot; Ages 9 to adult',
  h1: 'C++ course for Peru, taught live in English',
  lede: 'In Peru, C++ has a very concrete reason to exist on a teenager\'s timetable: it is the only language allowed in the final of the national informatics olympiad, the OPI, which picks the team Peru sends to the IOI. It is also the language behind game engines, browsers, trading systems and much of the software that has to be fast. This page covers why C++ is worth learning from Peru, how the OPI works according to UTEC\'s own rules, what a full C++ course teaches, and a classic olympiad technique you can compile tonight.',
  secondaryCta: { href: '#lesson', label: 'See the prefix-sum lesson' },
  wa: 'Hello Modern Age Coders, I am in Peru and would like to learn C++ in live classes in English. Could I book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; every class live, online and in English',
  spec: [
    ['Who', 'Children from 9, teenagers, adults'],
    ['Olympiad', 'OPI-style problem solving'],
    ['Standard', 'Modern C++, compiled in class'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Hours in Peru', 'Picked by the learner'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'Short answer',
  capsule: 'Modern Age Coders teaches C++ live, online and in English to learners across Peru, with mentors based in India leading every session in real time. Teenagers learn C++ from zero and can move on to olympiad problem solving of the kind the OPI rewards; university students and adults take a full modern C++ course; children of 9 to 12 have their own beginner course. Choose a batch of fifteen to twenty or private lessons, at the hour that suits you in Peru, and begin with a free class.',

  picks: {
    eyebrow: 'Pick a starting point',
    h2: 'Three C++ courses for learners in Peru',
    lede: 'Two start from nothing, one for teenagers and one for adults. The third is for teenagers who can already code and want contest problems.',
    items: [
      { course: 'cpp-programming-masterclass-for-teens', code: 'CPL / 01', title: 'C++ for Teens', note: 'Ages 13 to 18, complete beginners, over ten to twelve months. Fundamentals first, then the standard library, data structures, algorithms and small games, at two live classes a week.' },
      { course: 'cpp-programming-complete-masterclass-college', code: 'CPL / 02', title: 'C++, fundamentals to systems', note: 'For learners of 18 and over, from zero, over ten to twelve months. Modern C++, memory, the STL, object-oriented and generic design, and performance-minded projects.' },
      { course: 'competitive-programming-for-teens-course', code: 'CPL / 03', title: 'Competitive programming for teens', note: 'Six months, joinable any month, for 13 to 18 year olds who already write basic programs. Weekly problem sets and virtual contests in the style of school olympiads.' }
    ]
  },

  sections: [
    {
      id: 'why',
      eyebrow: 'Why C++',
      h2: 'Why learn C++ in Peru rather than another language?',
      lede: 'Because it is fast, because it teaches you how a computer really handles memory, and because in Peru it is the language of the olympiad final. Few languages give a teenager that combination.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The olympiad route', p: 'The OPI final is C++ only. A secundaria pupil who wants to compete seriously needs C++ sooner or later, and the earlier the language feels natural, the more energy is left for the actual problems.' },
          { h3: 'Speed and control', p: 'C++ compiles to fast machine code and lets the programmer decide how memory is used. That is why it runs game engines and other software where every millisecond counts.' },
          { h3: 'Understanding, not magic', p: 'Learning C++ means learning what a vector, a reference or a copy really costs. Those ideas make every other language easier to understand, including Python and Java.' }
        ] },
        { kind: 'p', mt: true, html: 'C++ is harder than Python at the start, and we are honest about that. For a ten year old or a teenager who has never coded, Python or Scratch can be a gentler first step; our <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes</a> page explains the options for secundaria. For a determined teenager, a university student or an adult, starting directly with C++ works well with a patient mentor.' },
        { kind: 'p', html: 'All the teaching is in English, live. That matters more for C++ than for most languages: compiler messages are long and dense, and the standard library is documented in English. Learners practise reading those messages aloud with their mentor until they stop being frightening.' }
      ]
    },
    {
      id: 'opi',
      tint: 'tint',
      eyebrow: 'The OPI',
      h2: 'How does the Peruvian Informatics Olympiad work, and why is it C++?',
      lede: 'The OPI is organised by UTEC and is free for every secundaria pupil in Peru. Its 2025 rules set two phases: an online round in C++ or Python, then an in-person final in C++ alone, from which Peru\'s teams for the Ibero-American and International Olympiads are chosen.',
      body: [
        { kind: 'table', numCols: [], caption: 'The two phases of the OPI 2025, as set out in UTEC\'s rules', head: ['', 'Phase 1', 'Phase 2 (final)'], rows: [
          ['Date', '18 May 2025', 'Saturday 31 May 2025'],
          ['Format', 'Online', 'In person at UTEC, Lima'],
          ['Length', '4 to 5 hours', '5 hours'],
          ['Languages allowed', 'C++ or Python', 'C++ only'],
          ['Problems', '3 to 6, partial scores possible', '4 to 6, partial scores possible'],
          ['What it leads to', 'The top 30 with a score above zero reach Phase 2', 'Top 10 to 15 to the OII; top 4 to the IOI'],
          ['Ranking', 'Score first; time penalty only to break ties', 'Score first; time penalty only to break ties']
        ] },
        { kind: 'source', html: 'Source: Comité Organizador Olimpiada Peruana de Informática, Reglamento OPI 2025 (published on opi.utec.edu.pe), read on 9 November 2026. The same rules say both phases run on the omegaUp judge, problems come from topics in the official IOI syllabus, contestants must be at most 20 years old on 1 July 2025 and enrolled in a Peruvian school in 2025 or have finished in 2024, and generative AI is forbidden. The OII 2025 was set for 14 and 15 June 2025 and the IOI 2025 for 27 July to 3 August 2025 in Sucre, Bolivia.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the final is C++',
          left: [
            'The rules do not give a reason. Our reading is practical: C++ is fast and predictable, its standard library has the data structures contest problems need, and a final in a single language keeps the judging simple and fair.',
            'The 2026 edition followed a similar calendar: UTEC\'s OPI page gave 18 March 2026 as the last day to register and 11 April 2026 for the Phase 2 final. The page did not yet list 2027 dates when we checked.'
          ],
          rightH3: 'Peru at the IOI',
          right: [
            'The OPI rules note that Peru has taken part in the IOI since 2022. The IOI\'s own statistics for Peru record 5 years of participation and 13 contestants, with one bronze medal and one honourable mention so far.',
            'That is a young record with room to grow, and every place on the IOI team runs through the C++ final. We are not connected with UTEC, the OPI or the IOI, and we never promise a qualification or a medal; our job is the language and the reasoning, practised on problems of our own.'
          ] },
        { kind: 'p', mt: true, html: 'Teenagers interested in other computing olympiads, including UTEC\'s artificial intelligence contest, can read our Spanish page on the <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">curso de IA para adolescentes</a>, and pupils in their final school year our page on <a class="ag-inline-link" href="/programacion-para-5to-de-secundaria">programación para 5to de secundaria</a>.' }
      ]
    },
    {
      id: 'learn',
      eyebrow: 'What you learn',
      h2: 'What does a C++ course cover, and which C++ should you learn?',
      lede: 'Modern C++, in a fixed order. The current ISO standard is C++23, published as ISO/IEC 14882:2024, and a good course teaches the modern style from the start instead of the C-flavoured C++ of old textbooks.',
      body: [
        { kind: 'ol', items: [
          '<strong>Compiling and running.</strong> What a compiler does, how to read its errors, and the edit, compile, run, test loop that every class repeats.',
          '<strong>Types and control flow.</strong> <code>int</code>, <code>long long</code>, <code>double</code>, <code>bool</code>, conditions and loops, with a first warning about values that grow too large for their type.',
          '<strong>Functions and references.</strong> Passing values, passing references, and why copying a large object by accident makes a program slow.',
          '<strong>The standard library.</strong> <code>vector</code>, <code>string</code>, <code>map</code>, <code>set</code>, <code>sort</code> and friends, which do most of the work in real programs and in contests.',
          '<strong>Memory and objects.</strong> Classes, constructors and destructors, ownership and smart pointers, and the bugs that come from getting them wrong.',
          '<strong>Algorithms.</strong> Searching, sorting, prefix sums, recursion, graphs and dynamic programming, with the cost of each worked out before it is coded.',
          '<strong>Contest practice or a project.</strong> Teenagers aiming at the OPI move to timed problem sets; others build a game, a simulation or a tool and explain it to their mentor in English.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How long it takes',
          left: [
            'Our full C++ courses for teenagers and for adults each take ten to twelve months, meeting live twice a week. The competitive programming course for teenagers adds six months of contest practice once the basics are secure.',
            'Children of 9 to 12 can start with C++ for Kids, a six-month course built around games and puzzles, and continue into the teenage course later.'
          ],
          rightH3: 'Compilers and setup',
          right: [
            'Learners install a free compiler on their own computer in the first class, while the mentor watches over a shared screen, and compile every example themselves. The lesson on this page was compiled with clang in C++17 mode; the code works unchanged under later standards.',
            'C++ needs a laptop or desktop. INEI found that 36.4% of Peruvian households had at least one computer in the April to June 2026 quarter, so if yours is shared, tell us and we will choose class hours around it.'
          ] }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'What is a prefix sum, and why do olympiad problems need it?',
      lede: 'A prefix sum is a running total kept in an array, so the sum of any stretch of the original array takes one subtraction instead of a loop. The IOI 2025 syllabus lists prefix sums among the array techniques it treats as fully included. Here is the lesson we use to introduce it, for learners of about 13 and over.',
      body: [
        { kind: 'two',
          leftH3: 'The problem',
          left: [
            'You have eight numbers, perhaps daily scores, and you will be asked many questions of the form "what is the total from day l to day r?". Version 1 answers each question by adding the numbers in the range again.',
            'With eight numbers and three questions, that is fine: 13 additions. Contest problems use hundreds of thousands of numbers and questions, and then the same idea takes far too long.'
          ],
          rightH3: 'The idea',
          right: [
            'Build an array <code>p</code> where <code>p[i]</code> is the total of the first <code>i</code> numbers, so <code>p[0]</code> is 0. Then the sum from <code>l</code> to <code>r</code> is <code>p[r + 1] - p[l]</code>: one subtraction, whatever the length of the range.',
            'The array <code>p</code> has <strong>one more entry than the data</strong>, and getting that wrong is the classic bug. Write <code>p[r] - p[l]</code> by mistake and the one-element range from 3 to 3 comes out as 0.'
          ] },
        { kind: 'code', label: 'ranges.cpp: the slow way, the prefix-sum way, and the off-by-one', lang: 'C++', code: CODE, note: 'Compiled with <code>c++ -std=c++17 -O2 -Wall</code> and run, it prints <code>sum 0..7: 40 40</code>, <code>sum 2..5: 21 21</code>, <code>sum 3..3: 9 9</code>, then <code>additions, version 1: 13</code>, <code>additions to build p: 8</code> and <code>wrong formula p[r] - p[l] for 3..3: 0</code>.' },
        { kind: 'code', label: 'scale.cpp: the same comparison at contest size (sizes are ours)', lang: 'C++', code: SCALE, note: 'It prints <code>worst case, version 1: 40000000000 additions</code> and <code>version 2: 400000 additions and subtractions</code>.' },
        { kind: 'p', mt: true, html: 'Forty billion operations against four hundred thousand: that is the difference between a program that runs out of time and one that finishes almost instantly. The sizes of 200,000 numbers and 200,000 questions are our own example, not limits from any OPI problem. Notice too that we store the totals in <code>long long</code>; with large values, a running total can outgrow an <code>int</code>, and C++ will not warn you.' },
        { kind: 'p', html: 'The habit this lesson builds is the one that matters in every contest: <strong>work out the cost before you write the loop</strong>, and test the smallest case, a range of one element, where off-by-one bugs live. The numbers and exercises are ours, written for our classes; no problem from the OPI or any other olympiad is reproduced here.' },
        { kind: 'ol', mt: true, items: [
          '<strong>By hand.</strong> Write out <code>p</code> for the eight numbers on paper. Check that <code>p[8]</code> equals the sum of the whole array.',
          '<strong>Break it on purpose.</strong> Change the formula to <code>p[r] - p[l]</code> and find every query in the program that now gives a wrong answer. Explain why in English.',
          '<strong>Two dimensions.</strong> Extend the idea to a grid, so the sum of any rectangle takes a few additions and subtractions. Draw the picture first.',
          '<strong>Count, then code.</strong> For a problem with a million numbers and a million questions, estimate both versions\' operation counts before writing anything.'
        ] }
      ]
    },
    {
      id: 'think',
      eyebrow: 'Thinking, not copying',
      h2: 'Can AI tools help me learn C++ for the olympiad?',
      lede: 'Not in the way you might hope. UTEC\'s 2025 rules for the OPI ban generative AI outright when solving problems and remove anyone caught using it, so the skill that counts is reasoning on your own, in C++, against the clock.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Cost first', p: 'Before coding, estimate how many operations a solution needs, as in the prefix-sum lesson. That single habit separates contest solutions that pass from those that time out.' },
          { h3: 'Read the error', p: 'C++ compiler messages are long. We teach learners to find the first real error and fix it, instead of pasting the whole message into a chatbot.' },
          { h3: 'Age rules apply', p: 'Anthropic restricts Claude to adults of 18 and over, and OpenAI asks for a parent\'s consent before anyone under 18 uses ChatGPT. Teenagers in our classes work without adult AI accounts; adults may use AI to question their code, not to produce it.' }
        ] },
        { kind: 'p', mt: true, html: 'The standard is the same for a teenager in Juliaca, Iquitos or Lima: understand every line, test the edge cases yourself, and be able to explain your solution in plain English. That is what an olympiad final rewards, and it is just as valuable at university and at work.' }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Peru hours',
      h2: 'Are C++ classes in English, and what hours work from Peru?',
      lede: 'English only, at hours you choose. Peru keeps one clock all year, five hours behind UTC, and India keeps five and a half hours ahead of UTC, so a mentor in India is always ten and a half hours ahead of you. The table converts examples; it is not a class schedule.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time and India time (example conversions)', head: ['Peru time', 'India time', 'Who tends to choose it'], rows: [
          ['06:45', '17:15', 'Early starters before school'],
          ['08:30', '19:00', 'Weekend or holiday practice'],
          ['15:00', '01:30, next day', 'Teenagers after a morning school shift'],
          ['18:00', '04:30, next day', 'Students after classes'],
          ['20:30', '07:00, next day', 'Adults after work']
        ] },
        { kind: 'source', html: 'Source: the IANA time zone database, America/Lima and Asia/Kolkata, neither of which uses daylight saving. Conversions are ours.' },
        { kind: 'p', mt: true, html: 'Mentors explain slowly, repeat in simpler words when needed and type key terms into the chat. Learners in the capital who want to know more about studying in English can read about <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Five stages from first C++ program to olympiad problems',
    lede: 'These stages are ours. They decide which group a learner joins and show progress clearly from month to month.',
    table: { numCols: [], caption: 'C++ stages for learners in Peru (ours)', head: ['Stage', 'The learner can', 'A sign they are there'], rows: [
      ['1. Compile', 'Write, compile and debug small programs', 'Fixes the first compiler error unaided'],
      ['2. Library', 'Use vector, string, map and sort well', 'Solves list problems without raw arrays'],
      ['3. Cost', 'Estimate running time before coding', 'Explains the prefix-sum lesson'],
      ['4. Algorithms', 'Apply recursion, graphs and dynamic programming', 'Solves timed problems at school-olympiad level'],
      ['5. Contest', 'Plan, code and test under a time limit', 'Completes virtual contests and reviews them']
    ] },
    left: { h3: 'For parents of teenagers', ps: [
      'Stage 3 is the turning point. A teenager who estimates cost before coding is thinking like an olympiad contestant.',
      'Monthly notes describe problems solved and ideas understood.'
    ] },
    right: { h3: 'For learners', ps: [
      'Always test the smallest case. One element, one query, an empty input.',
      'If your solution is slow, count its operations before you try to speed it up.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses around C++',
    lede: 'Every course is live and in English, with one mentor throughout, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Starting out', sub: 'Ages 9 to 18', courses: [
        { code: 'CPL / START / 01', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Games and puzzles in real C++, ages 9 to 12.' },
        { code: 'CPL / START / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic, data structures and algorithms from zero.' },
        { code: 'CPL / START / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The OPI\'s other first-round language.' }
      ] },
      { num: 'II', h3: 'Contest and theory', sub: 'Teenagers and adults', courses: [
        { code: 'CPL / CONTEST / 01', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming (18+)', blurb: 'From first contests to ICPC-level practice.' },
        { code: 'CPL / CONTEST / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'Theory and implementation for university level.' },
        { code: 'CPL / CONTEST / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad mathematics', blurb: 'The mathematics behind many informatics problems.' }
      ] },
      { num: 'III', h3: 'Beyond contests', sub: 'Students and adults', courses: [
        { code: 'CPL / MORE / 01', slug: 'c-programming-course-for-college-beginners', title: 'C programming', blurb: 'Pointers and memory, the ground under C++.' },
        { code: 'CPL / MORE / 02', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Version control for every serious project.' },
        { code: 'CPL / MORE / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'A second typed language for teenagers.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live C++ classes run for learners in Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Morning', l: 'A Peruvian morning meets the Indian evening, an easy hour for a lesson.' },
      { time: 'Late', l: 'Evening classes in Peru reach India before dawn; ask and we will arrange it.' },
      { time: '1-on-1', l: 'A private mentor, useful for an olympiad push or a slower start.' }
    ],
    cells: [
      { h3: 'Compile every class', p: 'Learners build and run each program themselves.' },
      { h3: 'One mentor', p: 'The same teacher across the whole course.' },
      { h3: 'Plain English', p: 'Careful explanations, terms typed in the chat.' },
      { h3: 'Groups by age', p: 'Children, teenagers and adults learn separately.' },
      { h3: 'Problem sets', p: 'Original problems between classes, reviewed together.' },
      { h3: 'Group or one to one', p: 'Fifteen to twenty learners, or a mentor alone with you.' }
    ]
  },

  projectsH2: 'What our longer-term students have built',
  projectsLede: 'Learners who keep coding build substantial projects. Here are a few from our older students; there are more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from families and learners, quoted without changes.',

  fees: {
    h2: 'C++ course fees for learners in Peru',
    lede: 'Fees are listed in US dollars and paid each month by card. Your bank sets the soles amount when it processes the payment, so statements can differ a little from month to month.',
    free: ['A free first C++ class', 'Install a compiler and run a program', 'No card required'],
    group: ['A group of fifteen to twenty', 'The same mentor each week', 'Two live classes weekly', 'Monthly, cancel any month'],
    one: ['A mentor all to yourself', 'Olympiad or project focus, as you prefer', 'Hours that suit you']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'C++ course for Peru: your questions answered',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Our C++ classes are live online and taught only in English. Mentors speak clearly, match the learner\'s pace and accent, and show every step on screen. C++ error messages and documentation are in English, so learning in English helps from the very first compile.' },
      { q: 'Is C++ too hard as a first language?', a: 'It is harder than Python at first, but very learnable with a patient mentor. Teenagers and adults can start directly with C++. Children of 9 to 12 have a gentler C++ for Kids course, and some learners start with Python and switch later.' },
      { q: 'Why is the OPI final only in C++?', a: 'The OPI 2025 rules allow C++ or Python in the online first phase but only C++ in the in-person final. The rules do not explain why; in our view, C++ is fast and predictable, which suits timed problems with strict limits.' },
      { q: 'Can you prepare my child for the OPI?', a: 'We teach C++ and olympiad-style reasoning with original problems, and our competitive programming course practises under time limits. We are not connected with UTEC or the OPI, never reproduce their problems, and never promise a place or a medal.' },
      { q: 'Who can take part in the OPI?', a: 'Under the 2025 rules, pupils enrolled in a Peruvian school in 2025 or who finished school in 2024, aged at most 20 on 1 July 2025. UTEC says the competition is free for all secundaria pupils. Check UTEC\'s current rules before each edition.' },
      { q: 'When are classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead of Peru all year, so 15:00 in Peru is 01:30 the next day in India.' },
      { q: 'Which C++ standard do you teach?', a: 'Modern C++. The current ISO standard is C++23 (ISO/IEC 14882:2024). Beginners learn the modern style, with vectors, strings and the standard library from the start, and our examples compile under C++17 and later.' },
      { q: 'Do learners get a certificate?', a: 'Learners who pass a course\'s final assessment receive our own Modern Age Coders certificate of completion. It is not a Peruvian qualification and is not issued by any school, university or olympiad.' },
      { q: 'Can I use AI tools while learning?', a: 'Adult learners may ask an AI to review code they wrote. Claude has a minimum age of 18 and ChatGPT requires parental consent below 18, so our teen groups use no adult AI accounts. Generative AI is banned during the OPI, which is why solo reasoning is the skill we train.' },
      { q: 'What equipment is needed?', a: 'A laptop or desktop computer, a stable connection and ideally a headset with a microphone. Compilers are free, and the mentor helps with installation in the first class. Phones are not suitable for writing C++.' },
      { q: 'How are fees paid?', a: 'Monthly, by card, in US dollars. Your bank converts each payment into soles, so the amount may vary slightly from month to month. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for C++ learners and olympiad hopefuls.',
    items: [
      { href: '/c-plus-plus-for-competitive-programming', label: 'C++ for competitive programming', p: 'Contest techniques in detail.' },
      { href: '/ioi-olympiad-informatics-training', label: 'IOI training', p: 'How informatics olympiad preparation works.' },
      { href: '/c-plus-plus-for-beginners', label: 'C++ for beginners', p: 'Starting C++ from nothing.' },
      { href: '/c-plus-plus-classes-for-teens', label: 'C++ for teenagers', p: 'What teens build in their first year.' },
      { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Programación para adolescentes', p: 'Our Spanish page for teenagers in Peru.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our pages for Peru, all in one place.' }
    ]
  },

  start: {
    h2: 'Book a free C++ class from Peru',
    lede: 'In the free class you install a compiler, write and run a short C++ program, and tell the mentor whether you are aiming at the OPI, university or a project. We then suggest a course, a group or one-to-one classes, and an hour that works in Peru.',
    readFirst: 'Want to read more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a full class, and the <a class="ag-inline-link" href="/courses">course list</a> shows every syllabus.',
    note: 'Classes are live video lessons in English, taught from India. Message us on WhatsApp in English for a quick answer.',
    formNote: 'Free, no card, nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'C++', links: [
        { href: '/c-plus-plus-for-beginners', label: 'C++ for beginners' },
        { href: '/c-plus-plus-dsa-course', label: 'C++ and DSA' },
        { href: '/c-plus-plus-for-competitive-programming', label: 'Competitive C++' },
        { href: '/c-plus-plus-projects-for-students', label: 'C++ projects' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Para adolescentes' },
        { href: '/programacion-para-5to-de-secundaria', label: '5to de secundaria' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Count the cost, then write the loop'
  },

  personalityCss: `
.ag-root.ag-cpl .ag-hero h1 { max-width: 20ch; letter-spacing: -0.012em; }
.ag-root.ag-cpl .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-cpl .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-cpl .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-cpl .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Comité Organizador OPI, Reglamento OPI 2025, and UTEC\'s OPI home page; IOI statistics for Peru; IOI syllabus page and IOI Syllabus 2025 PDF; Standard C++ Foundation, The Standard (C++23); MINEDU CNEB; INEI Boletín TIC II trimestre 2026; IANA tz database. Read 8 and 9 November 2026.',
    localProject: 'An original C++ lesson for learners in Peru on prefix sums, a technique the IOI 2025 syllabus lists as included: eight invented daily scores, range sums answered by re-adding (13 additions for three queries) and by p[r + 1] - p[l] (sum 0..7: 40 40, sum 2..5: 21 21, sum 3..3: 9 9); the wrong formula p[r] - p[l] gives 0 for 3..3; at our example size of 200,000 numbers and queries, 40000000000 additions against 400000. Lesson family: prefix sums and off-by-one.',
    requiredMentions: ['sum 3..3: 9 9', 'wrong formula p[r] - p[l] for 3..3: 0', 'worst case, version 1: 40000000000 additions', 'one more entry than the data', 'work out the cost before you write the loop', 'Count the cost, then write the loop', 'Top 10 to 15 to the OII; top 4 to the IOI', 'ISO/IEC 14882:2024'],
    sources: [
      { claim: 'OPI 2025: Phase 1 on 18 May 2025, online, 4 to 5 hours, C++ or Python, 3 to 6 problems, top 30 to Phase 2; Phase 2 on Saturday 31 May 2025 at UTEC Lima, 5 hours, C++ only, 4 to 6 problems; ranking by score then time penalty; OII top 10 to 15, IOI top 4; age at most 20 on 1 July 2025; omegaUp; IOI syllabus topics; generative AI banned; Peru at the IOI since 2022.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'OPI free for secundaria pupils; 2026 registration to 18 March, final 11 April 2026.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'Peru at the IOI: first participation 2022, 5 years, 13 contestants, 1 bronze, 1 honourable mention.', url: 'https://stats.ioinformatics.org/countries/PER' },
      { claim: 'IOI 2025 syllabus includes prefix sums under simple array manipulation; IOI 2026 took place in Uzbekistan.', url: 'https://ioinformatics.org/page/syllabus/12' },
      { claim: 'The current ISO C++ standard is C++23, ISO/IEC 14882:2024.', url: 'https://isocpp.org/std/the-standard' },
      { claim: '36.4% of Peruvian households had a computer, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'OPI problems or official solutions: never reproduced; all exercises are ours.',
      'OPI 2027 dates: not published when checked; not printed.',
      'IOI 2025 competition environment and compiler flags: ioi2025.bo did not respond (curl code 000); not described.',
      'Why the OPI final is C++ only: the rules give no reason; the page labels its explanation as our own reading.',
      'Any connection with UTEC, the OPI, the OII or the IOI, or any promise of qualification or medals: none.',
      'Spanish-language teaching: not offered; the page says so.'
    ]
  }
};
