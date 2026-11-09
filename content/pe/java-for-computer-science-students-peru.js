// SHIP: market | Java for computer science students in Peru: CS2023 core hours, the plan, contests, in English | sorting with comparators: stable sort keeps ties in input order, chain thenComparing for a full ranking
'use strict';
// Java for computer science students in Peru (ag- English subject door, Peru cluster row PE011, P3, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Audience: students of computer science, systems engineering and software engineering at Peruvian universities who typed
// "curso de java en la uni", "java for computer science students" or "java para universitarios" (KEYWORDS.md section 1, Java
// row: "curso de java en la uni (2)"; rows.tsv PE011).
// Spine (different from the Spanish twin curso-de-java-para-universitarios-peru, which tables the UTEC CS plan and interview
// topics and teaches == against equals()): what an international CS curriculum expects of every graduate (ACM/IEEE-CS/AAAI
// CS2023 core hours), where Java sits in a Peruvian systems-engineering plan (Universidad de Lima malla 2026), contests run
// in the ICPC format, and an original comparator and stable-sort lesson on a contest scoreboard. Primary-source table:
// CS2023 Table 2, CS Core and KA Core hours by knowledge area.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/java-for-computer-science-students-peru/,
// fetched 2026-11-09 with curl unless noted; every quote grepped in the raw text):
//  CS2023 home (csed.acm.org, cs2023.html): "The Curricular Report (Endorsed by: ACM – Jan 18, 2024, IEEE-CS – Jan 22, 2024,
//    AAAI – Feb 22, 2024)"; "Spanish version is also available". Knowledge areas page (cs2023-ka.html) lists 17 areas.
//  CS2023 Introduction to the Knowledge Model PDF (cs2023-1.3-knowledge-model.pdf, text via PDFKit, cs2023-1.3-knowledge-
//    model.txt; Table 2 checked against the rendered page image cs2023-table2.png): "CS Core topics at the desired skill
//    levels are estimated to need 270 hours of instructional time"; "a course is assumed to meet for around 40 instructional
//    hours"; Table 2 CS2023 CS Core / KA Core: AI 12/18, AL 32/32, AR 9/16, DM 10/26, FPL 21/19, GIT 4/70, HCI 8/16, MSF
//    55/145, NC 7/24, OS 8/13, PDC 9/26, SDF 43/(blank), SE 6/21, SEC 6/35, SEP 18/14, SF 18/8, SPD 4/(blank); Total 270.
//  Universidad de Lima, Ingeniería de Sistemas, malla curricular 2026 (malla_curricular_ingenieria_de_sistemas_2026.pdf, raw
//    copy from src-pages/_w2c/ulima-sis-malla.pdf, text via PDFKit): course names "INTRODUCCIÓN A LA PROGRAMACIÓN",
//    "PARADIGMAS DE PROGRAMACIÓN", "PROGRAMACIÓN ORIENTADA A OBJETOS", "ESTRUCTURAS DE DATOS I", "ESTRUCTURAS DE DATOS II",
//    "ANÁLISIS Y DISEÑO DE AL[GORITMOS]", "ESTRUCTURAS DISCRETAS DE COMPUTACIÓN", "INGENIERÍA DE SOFTWARE I"; "NIVEL 1 ...
//    NIVEL 10"; "Total créditos 205"; "Sujeto a cambio curricular." Career page (ulima-sis.html): Círculo de Análisis y
//    Diseño de Algoritmos objectives "Preparar equipos para participar en competencias de programación competitiva como la
//    ICPC y la IEEExtreme." and "con el mismo formato de la ICPC".
//  Java SE 21 API, java.util.Collections (collections.html): "This sort is guaranteed to be stable : equal elements will not
//    be reordered as a result of the sort." Comparator (comparator.html): "The implementor must ensure that signum
//    (compare(x, y)) == -signum(compare(y, x)) for all x and y"; "the relation is transitive".
//  OPI Reglamento 2025 (facts-school/src/opi-reglamento-2025/text.txt, LaTeX accents): "Existen 2 criterios para la
//    asignaci´on de puestos, en orden de prioridad: por puntaje obtenido, por penalidad de tiempo en caso de empate."
//  SUNEDU press note 15 September 2021 (facts-market/src/sunedu_1_1m.txt; MARKET 1.5): "94 universidades licenciadas".
//  AI tool ages, content/ai-tool-age-audit.json: Claude 18+.
//  Course facts (content/courses/data): complete-java-programming-masterclass-college "10-12 months (44-52 weeks)", 18+;
//    data-structures-algorithms-masterclass-college "10-12 months (44-52 weeks)"; competitive-programming-masterclass-college
//    "10-12 months (44-52 weeks)", "Codeforces to ICPC".
//  Time: tzdata America/Lima UTC-5 (no DST), Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations: 270 / 40 = 6.75, so the CS Core alone is close to seven 40-hour courses; SDF + AL + FPL = 43 + 32 +
// 21 = 96 CS Core hours, 35.6% of 270; time conversions. The mapping of ULima course names to CS2023 areas is ours.
// Code (scratchpad pe/e2/java2/Ranking.java, javac and java 21.0.12): "By solved only:" then Diego 5 260, Bruno 5 260,
// Valeria 4 210, Ana 4 180, Camila 3 95; "Solved, then minutes, then name:" then Bruno 5 260, Diego 5 260, Ana 4 180,
// Valeria 4 210, Camila 3 95 (printed as Entry[name=..., solved=..., minutes=...]). Names are invented.
// Lesson family: sorting with comparators; a stable sort keeps tied elements in their input order, so a ranking is only
// fully defined when the comparator breaks every tie.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  'import java.util.ArrayList;',
  'import java.util.Comparator;',
  'import java.util.List;',
  '',
  'public class Ranking {',
  '    record Entry(String name, int solved, int minutes) {}',
  '',
  '    public static void main(String[] args) {',
  '        List<Entry> board = new ArrayList<>(List.of(',
  '            new Entry("Valeria", 4, 210),',
  '            new Entry("Diego", 5, 260),',
  '            new Entry("Ana", 4, 180),',
  '            new Entry("Bruno", 5, 260),',
  '            new Entry("Camila", 3, 95)',
  '        ));',
  '',
  '        board.sort(Comparator.comparingInt(Entry::solved).reversed());',
  '        System.out.println("By solved only:");',
  '        board.forEach(e -> System.out.println("  " + e));',
  '',
  '        board.sort(Comparator.comparingInt(Entry::solved).reversed()',
  '                .thenComparingInt(Entry::minutes)',
  '                .thenComparing(Entry::name));',
  '        System.out.println("Solved, then minutes, then name:");',
  '        board.forEach(e -> System.out.println("  " + e));',
  '    }',
  '}'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Java for CS students' },
  slug: 'java-for-computer-science-students-peru',
  code: 'jcs',
  accent: '#007047',
  accentRationale: 'Java for computer science students, Peru: a cloud-forest green #007047, after the montane forests on the eastern slopes of the Andes, brighter than the beginner Java page to mark the university level; contrast passes 4.5 on all three papers (checked by the build gate)',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Java for computer science students in Peru',
  title: 'Java for Computer Science Students in Peru, Live in English',
  description: 'Java for computer science and systems students in Peru, taught live online in English: what a CS degree expects, data structures, contests, and class hours.',
  ogDescription: 'Live Java classes in English for computer science students in Peru: what the ACM and IEEE CS2023 curriculum asks of every graduate, where Java sits in a Peruvian systems-engineering plan, ICPC-style contests, and a scoreboard lesson on stable sorting.',
  twitterDescription: 'Java for university computer science students in Peru, taught live in English, around your timetable.',
  pageName: 'Java for Computer Science Students in Peru',
  webPageDescription: 'A guide for computer science, systems and software engineering students in Peru learning Java, built from the ACM/IEEE-CS/AAAI CS2023 curriculum report, the Universidad de Lima 2026 systems-engineering plan, the Java SE 21 API and the OPI 2025 rules, with an original lesson on comparators and stable sorting.',
  courseDescription: 'Live online Java, data structures and competitive programming courses taught in English for university computer science and systems students in Peru, in a group of fifteen to twenty or one to one, at hours the student chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Java for CS students',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#expects', label: 'CS2023' },
    { href: '#plan', label: 'Your plan' },
    { href: '#contests', label: 'Contests' },
    { href: '#lesson', label: 'Sorting lesson' },
    { href: '#times', label: 'Hours' }
  ],
  eyebrow: 'Peru &middot; Java at university &middot; Computer science and systems',
  h1: 'Java for computer science students in Peru',
  lede: 'For a computer science or systems student, Java is rarely the goal in itself. It is the language many courses use to teach objects, data structures, algorithms and software design, which are the real goals. This page is for university students in Peru who want those ideas taught slowly and properly, in English: what the international CS curriculum expects of every graduate, where Java fits in a Peruvian plan of studies, how contest programming works, and a sorting lesson that looks trivial until you meet a tie.',
  secondaryCta: { href: '#lesson', label: 'See the sorting lesson' },
  wa: 'Hello Modern Age Coders, I study computer science in Peru and would like live Java and data structures classes in English. May I book a free class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; every class live, online and in English',
  spec: [
    ['Who', 'CS, systems and software students'],
    ['Covers', 'Java, OOP, data structures, algorithms'],
    ['Also', 'Contest practice in the ICPC style'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Hours', 'Around your university timetable'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'At a glance',
  capsule: 'For computer science and systems students in Peru, Modern Age Coders teaches Java, object-oriented design, data structures and algorithms as live online classes in English. Each session is taught as it happens by a mentor based in India, in a group of fifteen to twenty or one to one, at hours planned around your university timetable in Peru time. We teach alongside your degree: your university sets the coursework and the marks, and we make sure you understand the ideas well enough to do it yourself.',

  picks: {
    eyebrow: 'For your degree',
    h2: 'Three courses for computer science students',
    lede: 'The language, the structures built with it, and the contest skills that test both under pressure.',
    items: [
      { course: 'complete-java-programming-masterclass-college', code: 'JCS / 01', title: 'Java, core to Spring Boot', note: 'Ten to twelve months for students of 18 and over, from zero if needed. Core Java, object-oriented design, collections, testing and back-end services, at whatever speed your degree demands.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'JCS / 02', title: 'Data structures and algorithms', note: 'Lists, stacks, trees, heaps, graphs, sorting and complexity over ten to twelve months, each structure built by hand before the library version is used.' },
      { course: 'competitive-programming-masterclass-college', code: 'JCS / 03', title: 'Competitive programming', note: 'From first contest problems to ICPC-level practice over ten to twelve months, with timed virtual contests and a review of every solution afterwards.' }
    ]
  },

  sections: [
    {
      id: 'expects',
      eyebrow: 'What a CS degree expects',
      h2: 'What should every computer science graduate know?',
      lede: 'A widely cited international answer is CS2023, the computer science curriculum report of the ACM, the IEEE Computer Society and AAAI. It names a "CS Core" that every graduate should cover and estimates it at 270 hours of class time, spread across seventeen knowledge areas.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'CS2023 core hours by knowledge area (selected areas, with the total)', head: ['Knowledge area', 'CS Core hours', 'KA Core hours'], rows: [
          ['Software Development Fundamentals (SDF)', '43', 'none listed'],
          ['Algorithmic Foundations (AL)', '32', '32'],
          ['Foundations of Programming Languages (FPL)', '21', '19'],
          ['Mathematical and Statistical Foundations (MSF)', '55', '145'],
          ['Society, Ethics, and the Profession (SEP)', '18', '14'],
          ['Systems Fundamentals (SF)', '18', '8'],
          ['Artificial Intelligence (AI)', '12', '18'],
          ['Data Management (DM)', '10', '26'],
          ['Software Engineering (SE)', '6', '21'],
          ['All seventeen areas', '270', 'not totalled']
        ] },
        { kind: 'source', html: 'Source: ACM/IEEE-CS/AAAI, Computer Science Curricula 2023 (CS2023), "Introduction to the Knowledge Model", Table 2, read on 9 November 2026 and checked against the rendered PDF page. The report was endorsed by ACM on 18 January 2024, IEEE-CS on 22 January 2024 and AAAI on 22 February 2024, and a Spanish version is available on the CS2023 site. Eight smaller areas are left out of this table; their hours are included in the 270.' },
        { kind: 'two', mt: true,
          leftH3: 'How to read it',
          left: [
            'CS Core topics are the ones every graduate should meet. KA Core topics are the deeper material a programme may choose to cover in some areas and not others. CS2023 assumes a typical course meets for about 40 instructional hours, so by our arithmetic the CS Core alone is close to seven full courses.',
            'Three areas carry most of the programming: Software Development Fundamentals, Algorithmic Foundations and Foundations of Programming Languages. Together they make up 96 of the 270 CS Core hours, about 36% by our calculation.'
          ],
          rightH3: 'Where Java comes in',
          right: [
            'CS2023 does not prescribe a language. Java is simply one of the common vehicles for those three areas: it has classes and interfaces for design, a large collections library for data structures, and a strict type system that makes many errors visible early.',
            'So a student who learns Java well is not learning "a Java course". They are covering a large share of what the international curriculum treats as non-negotiable, and the ideas transfer to C++, Python, Kotlin or C# afterwards.'
          ] }
      ]
    },
    {
      id: 'plan',
      tint: 'tint',
      eyebrow: 'Your plan of studies',
      h2: 'Where does Java fit in a Peruvian systems or computer science plan?',
      lede: 'In the programming chain that runs through the first half of most plans. Each university designs its own plan; the Universidad de Lima\'s 2026 plan for Ingeniería de Sistemas is a clear public example.',
      body: [
        { kind: 'two',
          leftH3: 'One published plan',
          left: [
            'The Universidad de Lima publishes its 2026 malla curricular for Ingeniería de Sistemas as a PDF: ten levels, from NIVEL 1 to NIVEL 10, and 205 credits in total, marked as subject to curricular change.',
            'Its programming chain includes Introducción a la Programación, Paradigmas de Programación, Programación Orientada a Objetos, Estructuras de Datos I and II, and Análisis y Diseño de Algoritmos, alongside Estructuras Discretas de Computación and two courses of Ingeniería de Software.'
          ],
          rightH3: 'How we map it',
          right: [
            'By our own reading, those courses line up with the three programming-heavy CS2023 areas: object-oriented programming and paradigms with Foundations of Programming Languages, the data structures courses and algorithm design with Algorithmic Foundations, and the introductory course with Software Development Fundamentals.',
            'That mapping is ours, not the university\'s. Other Peruvian universities use different names and orders, and the official plan is always the one your faculty publishes. For a Spanish-language view of a different plan, see our page <a class="ag-inline-link" href="/curso-de-java-para-universitarios-peru">curso de Java para universitarios</a>.'
          ] },
        { kind: 'p', mt: true, html: 'Peru has many universities to choose from: SUNEDU, the national university regulator, reported 94 licensed universities in its press note of 15 September 2021. We are not connected with SUNEDU, the Universidad de Lima or any other university, and we do not award credits. Our classes run alongside the degree, explaining the ideas your courses assess. Students weighing up Python and Java together can also read <a class="ag-inline-link" href="/cursos-de-programacion-para-universitarios-peru">cursos de programación para universitarios</a>.' }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Contests',
      h2: 'Is competitive programming worth it for a CS student in Peru?',
      lede: 'For many students, yes, because it turns algorithms from a chapter into a reflex. Peruvian universities take it seriously: the Universidad de Lima\'s algorithm circle lists among its aims preparing teams for the ICPC and IEEExtreme contests, and running internal contests in the ICPC format.',
      body: [
        { kind: 'three', cells: [
          { h3: 'What contests test', p: 'Reading a precise problem in English, choosing an algorithm whose running time fits the limits, writing it correctly under time pressure, and testing the edge cases before the judge does.' },
          { h3: 'Where Java fits', p: 'Java\'s collections, comparators and big-number support make it a capable contest language. C++ is faster to run and more common at the top; many students compete in both, and we teach both.' },
          { h3: 'How rankings work', p: 'Contest scoreboards rank by problems solved and break ties by time. Peru\'s school olympiad, the OPI, states the same idea in its 2025 rules: score first, then time penalty, used only to separate ties.' }
        ] },
        { kind: 'p', mt: true, html: 'That last point is the starting idea for our lesson. A ranking is just a sort, and a sort is only as good as its rule for ties. Contest organisers write tie rules down for exactly that reason, and a programmer who forgets them produces a scoreboard that looks right and is not. We are not connected with the ICPC, IEEE or UTEC\'s OPI; the problems we use in class are our own.' }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'How do you sort a contest scoreboard correctly in Java?',
      lede: 'With a comparator that breaks every tie. This lesson, which we teach to university students in their first data structures months, uses an invented five-person scoreboard and Java 21\'s records and comparators.',
      body: [
        { kind: 'two',
          leftH3: 'The setup',
          left: [
            'Five contestants, each with problems solved and penalty minutes. The rule: more problems solved ranks higher; on a tie, fewer minutes ranks higher; if that ties too, order by name so the result never depends on luck.',
            'Most students write the first sort quickly: problems solved, highest first. It compiles, runs and looks plausible.'
          ],
          rightH3: 'The trap',
          right: [
            'Look at the first output. Diego and Bruno both solved 5 in 260 minutes, and Diego comes first only because he was entered first. Valeria, with 210 minutes, ranks above Ana with 180, which breaks the rule.',
            'Java did nothing wrong. Its documentation says <code>Collections.sort</code> is <strong>guaranteed to be stable</strong>: equal elements are not reordered. Elements the comparator calls equal simply stay in their input order, so the comparator must say everything the rule says.'
          ] },
        { kind: 'code', label: 'Ranking.java: one comparator that misses ties, one that settles them', lang: 'Java', code: CODE, note: 'Compiled and run with JDK 21, the first block prints Diego, Bruno, Valeria, Ana, Camila (for example <code>Entry[name=Diego, solved=5, minutes=260]</code> first). The second prints <code>Entry[name=Bruno, solved=5, minutes=260]</code>, then Diego, Ana, Valeria and Camila.' },
        { kind: 'p', mt: true, html: 'The fix is a chain: <code>thenComparingInt(Entry::minutes)</code> settles ties on solved problems, and <code>thenComparing(Entry::name)</code> settles the rare full tie. Now Ana correctly passes Valeria, and Bruno and Diego appear in alphabetical order whatever order they were entered in. <strong>A stable sort keeps your input order for ties; only your comparator can replace it with a rule.</strong>' },
        { kind: 'p', html: 'The <code>Comparator</code> documentation adds the contract behind all of this: comparing x with y must give the opposite sign to comparing y with x, and the relation must be transitive. Comparators that break the contract can make sorting behave unpredictably, which is why we teach students to build them from <code>comparingInt</code> and <code>thenComparing</code> rather than hand-written subtraction. The scoreboard and names are ours, invented for the exercise.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predict.</strong> Swap Diego and Bruno in the input list and run the first sort again. What changes, and why does the second sort not change at all?',
          '<strong>Reverse one key.</strong> Change the rule so that more minutes ranks higher. Which single call do you edit, and what happens if you put <code>reversed()</code> at the very end of the chain instead?',
          '<strong>Prove stability.</strong> Sort first by name, then by solved problems only. Explain, in English, why the names inside each group are now alphabetical.',
          '<strong>Scale it.</strong> Generate 100,000 random entries and time both sorts. Then read the complexity of <code>List.sort</code> in the documentation and say whether your timings agree.'
        ] }
      ]
    },
    {
      id: 'think',
      eyebrow: 'Thinking, not copying',
      h2: 'Should a CS student use AI to write Java assignments?',
      lede: 'Your university decides what is allowed in its coursework, and you should follow its rules. Our view is simpler: if you cannot explain why a comparator is correct, you have not finished the exercise, whoever wrote the code.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Rules before tools', p: 'Write the rule in a sentence first, as in the scoreboard lesson: solved, then minutes, then name. The code is a translation of that sentence, and most bugs are a sentence that was never written.' },
          { h3: 'Read the documentation', p: 'The stable-sort guarantee and the comparator contract are both in the official Java documentation, in English. A student who reads it can answer questions that a pasted answer never raises.' },
          { h3: 'AI as a critic', p: 'Claude is for users aged 18 and over. University students may use such tools to criticise their own designs, within the rules of their course, never to hand in code they cannot defend line by line.' }
        ] },
        { kind: 'p', mt: true, html: 'Whether you study in Lima, Arequipa, Trujillo or Cusco, the teaching standard is the same: reasoning first, code second, and an honest answer when a topic is harder than your course made it look.' }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Hours',
      h2: 'Are classes taught in English, and at what time in Peru?',
      lede: 'They are taught only in English, at the hour you pick. Peru stays five hours behind UTC all year without daylight saving; India stays five and a half hours ahead; so the gap is ten and a half hours on every date. The rows are worked examples, not a schedule.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time against India time for a university student (examples only)', head: ['Peru time', 'India time', 'Typical reason'], rows: [
          ['05:30', '16:00', 'Before an early commute to campus'],
          ['09:00', '19:30', 'A morning without lectures'],
          ['14:00', '00:30, next day', 'Between afternoon sessions'],
          ['22:00', '08:30, next day', 'After evening classes or work']
        ] },
        { kind: 'source', html: 'Source: tz database (IANA), America/Lima and Asia/Kolkata. Conversions are ours and do not change during the year.' },
        { kind: 'p', mt: true, html: 'Mentors explain in clear, measured English and type the key terms into the chat, so a student can review them later. Contest problems, API documentation and most of the CS literature are in English too, so practising technical English in class pays off well beyond the course.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Levels',
    h2: 'Five levels from Java syntax to contest-ready algorithms',
    lede: 'Our levels, used to place students and to show what the next semester of work looks like.',
    table: { numCols: [], caption: 'Java and algorithms for CS students (our levels)', head: ['Level', 'The student can', 'Evidence'], rows: [
      ['1. Syntax', 'Write and debug small Java programs', 'Fixes compiler errors by reading them'],
      ['2. Objects', 'Design classes, interfaces and records', 'A small model with tests'],
      ['3. Structures', 'Build lists, trees and maps by hand', 'Explains the cost of each operation'],
      ['4. Algorithms', 'Sort, search and traverse graphs with proofs of cost', 'The scoreboard lesson and its extensions'],
      ['5. Contest', 'Solve timed problems and test edge cases', 'Virtual contests with a written review']
    ] },
    left: { h3: 'For students', ps: [
      'Level 4 is where sorting stops being a library call and becomes a design decision.',
      'Keep a notebook of every bug that came from a missing rule. It becomes your best revision guide.'
    ] },
    right: { h3: 'For families', ps: [
      'Computer science degrees are demanding in the first years. Steady practice with a mentor keeps a student from falling behind.',
      'Short progress notes describe what was understood, not hours logged.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for computer science students',
    lede: 'All live and in English, with a mentor who stays with the student, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Theory and other languages', sub: 'Early semesters', courses: [
        { code: 'JCS / CORE / 01', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'Calculus, linear algebra and discrete topics by track.' },
        { code: 'JCS / CORE / 02', slug: 'c-programming-course-for-college-beginners', title: 'C programming', blurb: 'Memory and pointers, the layer under Java.' },
        { code: 'JCS / CORE / 03', slug: 'cpp-programming-complete-masterclass-college', title: 'C++, complete', blurb: 'The other main contest language, with the STL.' }
      ] },
      { num: 'II', h3: 'Systems and data', sub: 'Middle semesters', courses: [
        { code: 'JCS / SYS / 01', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL and databases', blurb: 'SQL and design for the Data Management area.' },
        { code: 'JCS / SYS / 02', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Team workflows for group projects.' },
        { code: 'JCS / SYS / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web development', blurb: 'A Java or JavaScript back end with a real front end.' }
      ] },
      { num: 'III', h3: 'Beyond Java', sub: 'Later semesters', courses: [
        { code: 'JCS / NEXT / 01', slug: 'complete-kotlin-programming-masterclass-professional', title: 'Kotlin and Android', blurb: 'A modern language on the same platform.' },
        { code: 'JCS / NEXT / 02', slug: 'ai-ml-masterclass-complete-college', title: 'AI and machine learning', blurb: 'From Python to deep learning, with the maths explained.' },
        { code: 'JCS / NEXT / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python, zero to advanced', blurb: 'The second language most CS students need.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes fit a computer science semester',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'Early hours in Peru meet the Indian evening comfortably.' },
      { time: 'Nights', l: 'Late Peruvian hours reach India in the morning; ask for what you need.' },
      { time: '1-on-1', l: 'Private classes that can shift each semester as your timetable changes.' }
    ],
    cells: [
      { h3: 'Code on screen', p: 'Students write, run and debug Java in every class.' },
      { h3: 'Structures by hand', p: 'Build it yourself before using the library.' },
      { h3: 'English, clearly', p: 'Measured explanations with terms typed out.' },
      { h3: 'A steady mentor', p: 'The same person across the course.' },
      { h3: 'Exam-aware', p: 'Lighter weeks planned around midterms and finals.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty students, or a mentor alone with you.' }
    ]
  },

  projectsH2: 'Work by our more advanced students',
  projectsLede: 'Students who keep going build substantial software. Here are a few projects; the <a class="ag-inline-link" href="/student-labs">student labs</a> page collects the rest.',
  reviewsLede: 'Google reviews from students and parents, as written.',

  fees: {
    h2: 'Fees for computer science students in Peru',
    lede: 'We price in US dollars and take payment by card monthly. The soles figure is your bank\'s conversion on the charge date, so it can drift a little between statements.',
    free: ['A free first class', 'A short problem and a first comparator', 'No card asked for'],
    group: ['Fifteen to twenty students at your stage', 'The same mentor all course', 'Two live classes per week', 'Month to month; stop when you like'],
    one: ['A mentor for you alone', 'Topics matched to your current courses', 'Hours that follow your semester']
  },

  faq: {
    eyebrow: 'Students ask',
    h2: 'Java for CS students in Peru: common questions',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. We teach only in English, live and online. Mentors speak at a measured pace, adapt to your accent, and type key terms in the chat. The Java documentation, contest problems and most computer science books are in English, so the class prepares you for all of them.' },
      { q: 'Will this help with my university Java course?', a: 'It should, because we explain the ideas behind each topic and practise them with you. Your university sets the syllabus, assignments and marks, and we do not complete coursework for students or promise grades.' },
      { q: 'Do I need to know Java already?', a: 'No. The Java course starts from zero for students of 18 and over. Students who already know the basics usually join the data structures course or move faster in one-to-one classes.' },
      { q: 'What is CS2023 and why does it matter?', a: 'It is the computer science curriculum report of the ACM, the IEEE Computer Society and AAAI, endorsed in early 2024. It sets out a CS Core of about 270 hours that every graduate should cover. We use it to check that our courses build the skills a degree expects.' },
      { q: 'Is Java good for competitive programming?', a: 'Yes, it is a capable contest language, with strong collections and comparators. C++ runs faster and is more common at the top level, so many students learn both. We teach both and practise with problems we write ourselves.' },
      { q: 'When can I take classes in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Because India is ten and a half hours ahead, 09:00 in Peru is 19:30 in India.' },
      { q: 'Are you linked to a Peruvian university?', a: 'No. We are an independent online school with mentors in India, not connected with any Peruvian university, SUNEDU or contest organiser. Finishing a course earns our own certificate of completion, never university credit.' },
      { q: 'Can I use AI tools for my assignments?', a: 'Follow your university\'s rules first. Claude is for users aged 18 and over. In our classes, AI may be used to criticise a design, but a student must be able to explain every line of code they submit.' },
      { q: 'What equipment do I need?', a: 'A laptop or desktop computer with a current JDK, a reliable connection and preferably a headset. The mentor helps with installation in the free class. Phones are not suitable for programming practice.' },
      { q: 'How do payments work from Peru?', a: 'By card, monthly, in US dollars. Your bank decides the conversion into soles on each charge date, so small differences between months are normal. The free class needs no card at all.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for computer science students.',
    items: [
      { href: '/curso-de-java-para-universitarios-peru', label: 'Curso de Java para universitarios', p: 'Our Spanish page for university students.' },
      { href: '/java-dsa-course', label: 'Java and DSA', p: 'Data structures taught in Java.' },
      { href: '/java-oops-concepts-course', label: 'Object-oriented Java', p: 'Classes, interfaces and design.' },
      { href: '/data-structures-and-algorithms-course', label: 'Data structures and algorithms', p: 'The theory, with practice.' },
      { href: '/c-plus-plus-for-competitive-programming', label: 'C++ for competitive programming', p: 'The other contest language.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Our index of Peru pages.' }
    ]
  },

  start: {
    h2: 'Book a free class as a computer science student',
    lede: 'The free class starts with a short problem and a first comparator, then a conversation about your courses this semester. The mentor then recommends a course, group or private classes, and Peru hours that work around your timetable.',
    readFirst: 'Read more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains a class in detail, and the <a class="ag-inline-link" href="/courses">course list</a> holds the syllabi.',
    note: 'Classes are live video sessions in English, led from India. For a quick reply, write to us on WhatsApp in English.',
    formNote: 'Free, with no card or commitment.'
  },

  footer: {
    cols: [
      { h4: 'Java and algorithms', links: [
        { href: '/java-dsa-course', label: 'Java and DSA' },
        { href: '/java-oops-concepts-course', label: 'Object-oriented Java' },
        { href: '/java-projects-for-students', label: 'Java projects' },
        { href: '/data-structures-and-algorithms-course', label: 'DSA course' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/curso-de-java-para-universitarios-peru', label: 'Java para universitarios' },
        { href: '/cursos-de-programacion-para-universitarios-peru', label: 'Programación universitaria' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Every tie needs a rule'
  },

  personalityCss: `
.ag-root.ag-jcs .ag-hero h1 { max-width: 22ch; letter-spacing: -0.012em; }
.ag-root.ag-jcs .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-jcs .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-jcs .ag-table caption { text-align: left; }
.ag-root.ag-jcs .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'ACM/IEEE-CS/AAAI CS2023 (home page, knowledge areas, Introduction to the Knowledge Model, Table 2); Universidad de Lima Ingeniería de Sistemas career page and malla curricular 2026; Java SE 21 API (Collections, Comparator); Reglamento OPI 2025; SUNEDU press note of 15 September 2021; IANA tz database. Read 8 and 9 November 2026.',
    localProject: 'An original Java 21 lesson for CS students in Peru: an invented five-person contest scoreboard sorted by problems solved only leaves Diego before Bruno (input order, because Collections.sort is stable) and Valeria (210 minutes) above Ana (180); chaining thenComparingInt(minutes) and thenComparing(name) gives Bruno, Diego, Ana, Valeria, Camila. Tied to the OPI 2025 rule of score first, then time penalty for ties. Lesson family: comparators and stable sorting.',
    requiredMentions: ['Entry[name=Bruno, solved=5, minutes=260]', 'guaranteed to be stable', 'A stable sort keeps your input order for ties; only your comparator can replace it with a rule.', 'Every tie needs a rule', 'estimates it at 270 hours of class time', '205 credits in total', 'preparing teams for the ICPC and IEEExtreme contests', 'one comparator that misses ties, one that settles them'],
    sources: [
      { claim: 'CS2023 endorsed by ACM (18 Jan 2024), IEEE-CS (22 Jan 2024), AAAI (22 Feb 2024); Spanish version available; 17 knowledge areas.', url: 'https://csed.acm.org/' },
      { claim: 'CS Core 270 hours; a course is about 40 instructional hours; Table 2 core hours by knowledge area.', url: 'https://csed.acm.org/wp-content/uploads/2024/04/1.3-Introduction-to-Knowledge-Model.pdf' },
      { claim: 'Universidad de Lima Ingeniería de Sistemas 2026: ten levels, 205 credits, programming course names.', url: 'https://www.ulima.edu.pe/sites/default/files/career/files/malla_curricular_ingenieria_de_sistemas_2026.pdf' },
      { claim: 'Universidad de Lima algorithm circle prepares teams for ICPC and IEEExtreme and runs ICPC-format contests.', url: 'https://www.ulima.edu.pe/pregrado/ingenieria-de-sistemas' },
      { claim: 'Collections.sort is guaranteed to be stable.', url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html' },
      { claim: 'Comparator contract: sign symmetry and transitivity.', url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html' },
      { claim: 'OPI 2025 ranking: score first, then time penalty only for ties.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: '94 licensed universities in Peru (SUNEDU, 15 September 2021).', url: 'https://www.gob.pe/institucion/sunedu/noticias/522805-sunedu-gracias-al-licenciamiento-1-millon-100-mil-estudiantes-acceden-a-educacion-universitaria-de-calidad' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'ICPC regional rules, Peruvian ICPC results or team counts: icpc.global serves only a JavaScript shell to curl; nothing quoted.',
      'Which semester each Universidad de Lima course falls in: the PDF text does not keep the level layout reliably; only course names, the ten levels and the credit total are used.',
      'That CS2023 is adopted by any Peruvian university: not verified; the page presents it as the international reference only.',
      'Internship, job or salary promises: none made.',
      'Any connection with SUNEDU, the Universidad de Lima, ACM, IEEE, AAAI, ICPC or UTEC: none; the page says so.',
      'Spanish-language teaching: not offered; the page says so.'
    ]
  }
};
