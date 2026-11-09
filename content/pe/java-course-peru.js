// SHIP: market | Java course for Peru from zero, in English: what Java's types promise, the order of a course | integer overflow: int wraps silently, widen before multiplying, Math.multiplyExact throws
'use strict';
// Java course for Peru (ag- English subject door, Peru cluster row PE010, P3, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Audience: teenagers from 13 and adults in Peru who typed "curso de java desde cero", "java course" or "learn java online"
// (KEYWORDS.md section 1, Java row: "curso de java desde cero (3)", "curso de java gratis / completo / intermedio /
// avanzado (3)"; PAA "¿Cuánto dura aprender Java desde cero?"). rows.tsv PE010.
// Spine (different from the Spanish twin curso-de-java-en-ingles-peru, which covers Oracle LTS versions, Spring Boot, JEPs,
// a Python-or-Java comparison and an integer-division lesson): what Java's type system promises, read from the Java
// Language Specification (primitive types and their exact ranges); the order a Java course from zero follows; where Java
// does and does not count in Peru (not an OPI language); an original integer-overflow lesson. Primary-source table: JLS
// Java SE 21, chapter 4, primitive types and value ranges.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/java-course-peru/, fetched 2026-11-09
// with curl unless noted; every quote grepped in the raw text):
//  JLS Java SE 21 Edition, chapter 4 (docs.oracle.com/javase/specs/jls/se21/html/jls-4.html, jls4.html): "The integral types
//    are byte , short , int , and long , whose values are 8-bit, 16-bit, 32-bit and 64-bit signed two's-complement integers,
//    respectively, and char , whose values are 16-bit unsigned integers"; "For byte , from -128 to 127, inclusive For short ,
//    from -32768 to 32767, inclusive For int , from -2147483648 to 2147483647, inclusive For long , from
//    -9223372036854775808 to 9223372036854775807, inclusive For char , from '\u0000' to '￿' inclusive, that is, from 0
//    to 65535"; "The integer operators do not indicate overflow or underflow in any way."; "The floating-point types are
//    float , whose values exactly correspond to the 32-bit IEEE 754 binary32 floating-point numbers, and double , whose
//    values exactly correspond to the 64-bit IEEE 754 binary64 floating-point numbers."; "The boolean type has exactly two
//    values: true and false".
//  Java SE 21 API, java.lang.Math (math.html): "addExact (int x, int y) Returns the sum of its arguments, throwing an
//    exception if the result overflows an int"; "multiplyExact (int x, int y) Returns the product of the arguments, throwing
//    an exception if the result overflows an int".
//  OpenJDK JDK 21 project page (jdk21.html, copied from src-pages/_w2c): "JDK 21 reached General Availability on 19
//    September 2023".
//  OPI Reglamento 2025 (FACTS 116; facts-school/src/opi-reglamento-2025/text.txt): Fase 1 "Se podr´a usar C++ o Python";
//    Fase 2 "Se podr´a usar solo C++." OPI home (FACTS 111): free for all secundaria pupils.
//  CNEB (FACTS 33, 39): no computing area; competency 28 transversal.
//  INEI Boletín TIC II trimestre 2026: "el 36,4% de los hogares del país disponía de al menos una computadora".
//  AI tool ages, content/ai-tool-age-audit.json: Claude 18+; ChatGPT under 18 needs a parent's permission.
//  Course facts (content/courses/data): java-programming-masterclass-for-teens "10-12 months (40-48 weeks)", "Absolute
//    beginner, ages 13 to 18"; complete-java-programming-masterclass-college "10-12 months (44-52 weeks)", 18+;
//    data-structures-algorithms-masterclass-college "10-12 months (44-52 weeks)", 18+.
//  Time: tzdata America/Lima UTC-5 (no DST), Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations: 30 x 24 x 60 x 60 x 1000 = 2,592,000,000, which is above 2,147,483,647; 2,592,000,000 - 2^32 =
// -1,702,967,296; time conversions.
// Code (scratchpad pe/e2/java1/Milliseconds.java, javac and java 21.0.12): prints "int:         -1702967296", "long, late:
// -1702967296", "long, early: 2592000000", "int maximum: 2147483647", "multiplyExact: integer overflow".
// Lesson family: integer overflow; Java ints wrap silently, the type of an expression is fixed before assignment, and
// the exact-arithmetic methods turn silent errors into loud ones.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  'public class Milliseconds {',
  '    public static void main(String[] args) {',
  '        int days = 30;',
  '        int ms = days * 24 * 60 * 60 * 1000;',
  '        long stillWrong = days * 24 * 60 * 60 * 1000;',
  '        long right = days * 24L * 60 * 60 * 1000;',
  '        System.out.println("int:         " + ms);',
  '        System.out.println("long, late:  " + stillWrong);',
  '        System.out.println("long, early: " + right);',
  '        System.out.println("int maximum: " + Integer.MAX_VALUE);',
  '        try {',
  '            System.out.println(Math.multiplyExact(days * 24 * 60 * 60, 1000));',
  '        } catch (ArithmeticException e) {',
  '            System.out.println("multiplyExact: " + e.getMessage());',
  '        }',
  '    }',
  '}'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Java course' },
  slug: 'java-course-peru',
  code: 'jaj',
  accent: '#0D4833',
  accentRationale: 'Java course, Peru: a dark coffee-leaf green #0D4833, for the shade-grown coffee of Peru\'s central jungle and a nod to Java\'s own coffee name; contrast passes 4.5 on all three papers (checked by the build gate)',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Java course for Peru',
  title: 'Java Course for Peru from Zero: Live Online in English',
  description: 'A Java course from zero for teenagers and adults in Peru, taught live online in English: what you learn and in what order, how long it takes, and class hours.',
  ogDescription: 'Live Java classes in English for learners in Peru: what the Java Language Specification promises about numbers, the order a Java course from zero follows, where Java does and does not count in Peru, and a real lesson on integer overflow.',
  twitterDescription: 'A Java course from zero, taught live in English for learners in Peru, at any hour.',
  pageName: 'Java Course for Peru',
  webPageDescription: 'A guide to learning Java from zero in Peru with live classes taught in English, built from the Java Language Specification and Java SE 21 API, the OpenJDK project pages, the OPI 2025 rules and INEI household data, with an original lesson on integer overflow.',
  courseDescription: 'Live online Java courses taught in English for learners in Peru from age 13: from first programs to objects, collections, data structures and back-end projects, in a group of fifteen to twenty or one to one, at a time the learner chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Java course',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#start', label: 'From zero' },
    { href: '#types', label: 'Java\'s types' },
    { href: '#order', label: 'Course order' },
    { href: '#lesson', label: 'Overflow lesson' },
    { href: '#times', label: 'Peru times' }
  ],
  eyebrow: 'Peru &middot; Java from zero &middot; Ages 13 to adult',
  h1: 'Java course for Peru, from zero and in English',
  lede: 'Java is strict, and that is its gift to a beginner. It makes you say what kind of value every variable holds, it refuses to compile code that mixes them carelessly, and it follows a published specification down to the last bit. This page is for teenagers and adults in Peru starting Java from nothing: who it suits, what the language promises about numbers, the order a full course follows, where Java does and does not help in Peru, and a lesson on the one place where Java\'s strictness quietly lets you down.',
  secondaryCta: { href: '#lesson', label: 'See the overflow lesson' },
  wa: 'Hello Modern Age Coders, I am in Peru and want to learn Java from zero in live classes in English. Can I book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; every Java class live, online and in English',
  spec: [
    ['Who', 'Teenagers from 13, students, adults'],
    ['Starting point', 'No coding needed'],
    ['Java version', 'A current long-term release'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Times in Peru', 'Chosen by you'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'What this is',
  capsule: 'Java from zero, for learners in Peru: Modern Age Coders teaches it in live online classes in English, with an India-based mentor leading each session as it happens, never a recording. The course starts at the first line of code and climbs through objects, collections, data structures and back-end projects. Teenagers from 13 learn in a teen batch; adults join the university-level course. Pick a batch of fifteen to twenty or private lessons, at whatever hour suits you in Peru; your first class costs nothing.',

  picks: {
    eyebrow: 'Choose your course',
    h2: 'Three Java courses, by age and goal',
    lede: 'Two start from nothing, one for teenagers and one for adults. The third is where Java learners go once the language feels comfortable.',
    items: [
      { course: 'java-programming-masterclass-for-teens', code: 'JAJ / 01', title: 'Java for Teens', note: 'For complete beginners of 13 to 18, over ten to twelve months. Variables and types first, then objects, collections, files and a finished project, at two live classes a week in a teen batch.' },
      { course: 'complete-java-programming-masterclass-college', code: 'JAJ / 02', title: 'Java, core to Spring Boot', note: 'For adults of 18 and over, from zero. Ten to twelve months from core Java through object-oriented design and testing to back-end services with Spring Boot.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'JAJ / 03', title: 'Data structures and algorithms', note: 'Once the basics are solid: lists, trees, graphs, sorting and complexity over ten to twelve months, the foundation of every technical interview.' }
    ]
  },

  sections: [
    {
      id: 'start',
      eyebrow: 'From zero',
      h2: 'Can you learn Java from zero, with no programming before?',
      lede: 'Yes. Java is a reasonable first language for a patient learner, because it is explicit about everything. The price is a little more typing at the start; the reward is fewer mysteries later.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Teenagers', p: 'A pupil in secundaria who wants a serious language, perhaps with university computer science in mind. Java\'s rules feel fussy for a week or two and then start to feel like a safety net.' },
          { h3: 'University students', p: 'Students whose first programming course uses Java, or who want it before their degree asks for it. Learning it properly, in English, makes every later course in the plan easier.' },
          { h3: 'Adults changing direction', p: 'People moving towards software, back-end development or Android. Java has been used for large business systems for decades, so the ideas it teaches transfer widely.' }
        ] },
        { kind: 'p', mt: true, html: 'If you are deciding between Java and Python as a first language, either is a good choice; what matters more is a course that makes you think. Our Spanish page <a class="ag-inline-link" href="/curso-de-java-en-ingles-peru">curso de Java en inglés</a> compares the two for Peruvian learners, and the <a class="ag-inline-link" href="/curso-de-python-en-ingles-peru">curso de Python en inglés</a> covers the other path. Whichever you choose, the classes are taught in English.' },
        { kind: 'p', html: 'Learners join a batch of people at a similar stage, or learn one to one. Each class is live: the mentor explains, the learner types, and when something does not compile, they read the error message together, in English, and fix it. Those error messages are some of the best English reading practice a programmer gets.' }
      ]
    },
    {
      id: 'types',
      tint: 'tint',
      eyebrow: 'Java\'s types',
      h2: 'What does Java promise about numbers and types?',
      lede: 'Exactly what its specification says. The Java Language Specification fixes the size and range of every primitive type, so a Java <code>int</code> holds the same values on a laptop in Lima, a server in India and a phone anywhere else.',
      body: [
        { kind: 'table', numCols: [], caption: 'Java\'s primitive types and their exact values, from the Java Language Specification (Java SE 21)', head: ['Type', 'What it is', 'Values it can hold'], rows: [
          ['byte', '8-bit signed integer', '-128 to 127'],
          ['short', '16-bit signed integer', '-32,768 to 32,767'],
          ['int', '32-bit signed integer', '-2,147,483,648 to 2,147,483,647'],
          ['long', '64-bit signed integer', '-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807'],
          ['char', '16-bit unsigned integer for text units', '0 to 65,535'],
          ['float', '32-bit IEEE 754 floating point', 'binary32 values'],
          ['double', '64-bit IEEE 754 floating point', 'binary64 values'],
          ['boolean', 'Truth value', 'true or false, nothing else']
        ] },
        { kind: 'source', html: 'Source: Oracle, The Java Language Specification, Java SE 21 Edition, chapter 4 "Types, Values, and Variables", sections 4.2 to 4.2.3, read on 9 November 2026. Thousands separators are added for reading; the specification prints the numbers without them.' },
        { kind: 'two', mt: true,
          leftH3: 'Why a beginner should care',
          left: [
            'In Java you declare a type, and the compiler holds you to it. Try to put a decimal into an <code>int</code> without saying so and the program will not compile. Many beginners find this annoying for a fortnight and grateful for years.',
            'The table also shows the limits. An <code>int</code> stops at 2,147,483,647, a little over two billion. That sounds huge until you count milliseconds, money in cents or the population of a country over time.'
          ],
          rightH3: 'The sentence that surprises people',
          right: [
            'The same chapter of the specification says: "The integer operators do not indicate overflow or underflow in any way." In plain English, if an <code>int</code> calculation goes past its limit, Java does not stop or warn you. It wraps round and carries on with a wrong number.',
            'That one sentence is the reason for the lesson further down. Java is strict about types, but silent about overflow, and a good programmer has to know both facts.'
          ] }
      ]
    },
    {
      id: 'order',
      eyebrow: 'Course order',
      h2: 'What do you learn in a Java course, and in what order?',
      lede: 'A Java course from zero follows a fixed ladder, because each step depends on the one before it. These are the stages of our Java courses for teenagers and adults; the projects differ by age, the order does not.',
      body: [
        { kind: 'ol', items: [
          '<strong>Setting up and a first program.</strong> Installing a current JDK, writing <code>main</code>, compiling and running. Learners meet the compiler\'s error messages on day one and learn to read them calmly.',
          '<strong>Types, variables and operators.</strong> The table above, in practice: choosing <code>int</code>, <code>long</code>, <code>double</code> or <code>boolean</code>, and the overflow lesson on this page.',
          '<strong>Decisions and loops.</strong> <code>if</code>, <code>switch</code>, <code>for</code> and <code>while</code>, with problems checked by hand first.',
          '<strong>Methods.</strong> Splitting a program into named pieces with clear inputs and outputs, and testing each one.',
          '<strong>Classes and objects.</strong> The heart of Java: designing classes, constructors, encapsulation, then inheritance and interfaces once the basics are steady.',
          '<strong>Collections and generics.</strong> Lists, sets and maps from the standard library, and choosing between them.',
          '<strong>Exceptions, files and testing.</strong> Handling failure on purpose, reading and writing data, and writing tests that catch bugs before users do.',
          '<strong>A real project.</strong> For teenagers, often a game or a school tool; for adults, a back-end service with a database. Every learner explains their project, in English, to their mentor.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How long from zero',
          left: [
            'Our Java courses for teenagers and for adults each last ten to twelve months, with two live lessons weekly and practice in between. A complete beginner who searches for a quick course usually finds one that stops at step 4; the stages after that are where Java becomes useful.',
            'Learners racing a date, for example a programming course that begins next semester, can speed up with private lessons.'
          ],
          rightH3: 'Which Java version',
          right: [
            'We teach on a current long-term-support JDK. JDK 21, used to compile and run the lesson on this page, reached General Availability on 19 September 2023, according to the OpenJDK project.',
            'Beginners hardly notice version differences. What matters is installing from an official source and knowing which version you have, which is the first thing we check together.'
          ] }
      ]
    },
    {
      id: 'peru',
      tint: 'tint',
      eyebrow: 'Java in Peru',
      h2: 'Is Java useful for students in Peru, and is it allowed in the OPI?',
      lede: 'Useful at university and at work, but not in the national informatics olympiad. It is worth knowing both before you choose a first language.',
      body: [
        { kind: 'two',
          leftH3: 'School and the olympiad',
          left: [
            'Peruvian school has no computing subject: the national curriculum, the CNEB, treats digital skills as a competency shared across subjects. So most teenagers who learn Java learn it outside school.',
            'The Peruvian Informatics Olympiad, OPI, is run by UTEC and free for secundaria pupils. Under its 2025 rules, contestants may write C++ or Python in phase one, and C++ alone in the final. Java is not on the list. A teenager whose main goal is the OPI should learn C++, and we say so plainly; Java remains an excellent language for everything else.'
          ],
          rightH3: 'University and work',
          right: [
            'Java is widely taught in university programming and software engineering courses, and it powers many business back ends and Android apps. A learner who understands Java\'s types, objects and collections will recognise the same ideas in C#, Kotlin and TypeScript.',
            'All of Java\'s official documentation, the specification included, is in English. Learning Java in English means the words in class, in the compiler\'s messages and in the documentation are the same words.'
          ] },
        { kind: 'p', mt: true, html: 'One practical point: Java needs a real computer to compile and run comfortably. INEI\'s survey of the second quarter of 2026 found 36.4% of Peruvian households with at least one computer. If yours is shared, tell us when you book and we will choose class hours around it. We are not connected with UTEC, the OPI or any Peruvian university.' }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'A real lesson',
      h2: 'Why does Java say 30 days is a negative number of milliseconds?',
      lede: 'Because the answer is too big for an int, and Java wraps round without a word. We teach this early in every Java course, to learners aged 13 upwards.',
      body: [
        { kind: 'two',
          leftH3: 'The problem',
          left: [
            'Picture a reminder app that needs the number of milliseconds in 30 days. The arithmetic is easy: 30 days times 24 hours times 60 minutes times 60 seconds times 1,000. The result goes into an <code>int</code> and gets printed.',
            'The answer is negative. Then they try the obvious fix, storing it in a <code>long</code> instead, and the answer is still the same negative number.'
          ],
          rightH3: 'What is happening',
          right: [
            'The true answer is 2,592,000,000, which is more than the 2,147,483,647 an <code>int</code> can hold. Java wraps past the top of the range, and the result is 2,592,000,000 minus 2<sup>32</sup>, which is -1,702,967,296.',
            'The <code>long</code> fix fails because Java works out the right-hand side first, entirely in <code>int</code>, and only then widens the already wrong result. <strong>The type of the calculation is decided before the assignment</strong>, not by the variable on the left.'
          ] },
        { kind: 'code', label: 'Milliseconds.java: one wrong answer, one still wrong, one right, one loud', lang: 'Java', code: CODE, note: 'Compiled and run with JDK 21, it prints <code>int:         -1702967296</code>, <code>long, late:  -1702967296</code>, <code>long, early: 2592000000</code>, <code>int maximum: 2147483647</code> and <code>multiplyExact: integer overflow</code>.' },
        { kind: 'p', mt: true, html: 'The right answer comes from making the calculation a <code>long</code> from the start: writing <code>24L</code> turns the second number into a <code>long</code>, so every multiplication after it happens in 64 bits. The last line shows the other professional tool. <code>Math.multiplyExact</code>, part of Java\'s standard library, throws an exception if the result overflows an int, so a silent wrong number becomes a loud error you can see and fix.' },
        { kind: 'p', html: 'Bugs like this are not exotic. They appear when programs count time, money in cents, views on a video or rows in a database, and they often hide for months because the small test cases work. The habit we teach is to ask, for every calculation, "how big can this get?", and to choose the type before writing the code. The lesson is ours, written for our classes.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Forecast.</strong> Before you press run, note your forecast for every printed line. Then run it and mark which forecasts held.',
          '<strong>Find the edge.</strong> Change <code>days</code> to 24, then 25. At which number of days does the <code>int</code> version first go wrong? Work it out with a calculator before you test it.',
          '<strong>Move the L.</strong> Put the <code>L</code> on <code>1000</code> instead of <code>24</code>. Does the answer change? Explain why in two English sentences.',
          '<strong>Go loud.</strong> Rewrite the whole calculation with <code>Math.multiplyExact</code> on <code>long</code> values, and test it with 30 days and with 300 million days.'
        ] }
      ]
    },
    {
      id: 'think',
      tint: 'tint',
      eyebrow: 'Thinking, not copying',
      h2: 'Will I learn to think in Java, or just copy code?',
      lede: 'To think. The overflow lesson is a good example: the code compiles, runs and prints a number, and only a learner who asks how big the number can get will catch the mistake.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ask how big', p: 'Before every calculation, learners estimate the largest value it can reach and choose the type to fit. It takes seconds and prevents a whole class of bugs.' },
          { h3: 'Read the compiler', p: 'Java\'s error messages are precise. We teach learners to read them line by line in English, instead of pasting them into a chatbot and pasting back whatever comes out.' },
          { h3: 'AI within age rules', p: 'Anthropic sets 18 as the minimum age for Claude, and OpenAI asks under-18s using ChatGPT for a parent\'s permission. Teenagers learn without adult AI accounts; adults may use AI to question their code, never to replace understanding it.' }
        ] },
        { kind: 'p', mt: true, html: 'Every learner gets the same standard of teaching, whether they log in from Lima, Chiclayo or Tacna: the same patient explanation, the same insistence on understanding each line, and the same honesty when something is harder than it looks.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Peru times',
      h2: 'What hour would Java classes be in Peru, and in what language?',
      lede: 'English only, at an hour of your choosing. Lima\'s clock sits five hours behind UTC throughout the year and India\'s five and a half ahead, which puts India a steady ten and a half hours in front of Peru. These rows convert a few hours; they are not set class times.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru hours with the matching India hour (conversion examples)', head: ['Peru time', 'India time', 'Often chosen by'], rows: [
          ['06:00', '16:30', 'Adults who study before work'],
          ['10:30', '21:00', 'Students with afternoon classes'],
          ['15:30', '02:00, next day', 'Teenagers after a morning school shift'],
          ['19:30', '06:00, next day', 'Adults in the evening']
        ] },
        { kind: 'source', html: 'Based on the IANA tz database entries America/Lima and Asia/Kolkata, neither of which moves its clocks during the year. We did the conversions.' },
        { kind: 'p', mt: true, html: 'Mentors teach only in English and match each learner\'s pace: short sentences, technical words typed into the chat, and each new idea shown on screen before it is used. Learners in the capital who want more about learning in English can read our page on <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'Five stages from your first Java program to a real project',
    lede: 'Our own stages, used to place learners and to show progress in plain terms.',
    table: { numCols: [], caption: 'Java stages for learners in Peru (ours)', head: ['Stage', 'The learner can', 'Proof of the stage'], rows: [
      ['1. Compile', 'Write, compile and run small programs', 'Fixes a compile error by reading it'],
      ['2. Type', 'Choose types and predict overflow', 'Explains the milliseconds lesson'],
      ['3. Structure', 'Write methods and classes with tests', 'A small program split into classes'],
      ['4. Collect', 'Use lists, sets and maps well', 'A tool that groups and sorts real data'],
      ['5. Build', 'Design and finish a project', 'A game, app or service explained in English']
    ] },
    left: { h3: 'For parents of teenagers', ps: [
      'Stage 2 is where careful habits start. A teenager who asks "how big can this get?" is learning to think like an engineer.',
      'Updates describe what was built and understood each month.'
    ] },
    right: { h3: 'For adult learners', ps: [
      'If the compiler complains, read the whole message before changing anything.',
      'A program that compiles is not finished. A program you can explain is.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses around Java',
    lede: 'Each runs live and in English, either with a batch or privately, under a mentor who follows the learner\'s progress.',
    bands: [
      { num: 'I', h3: 'Teenagers alongside Java', sub: 'Ages 13 to 18', courses: [
        { code: 'JAJ / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The other popular first language, from zero.' },
        { code: 'JAJ / TEEN / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The OPI final\'s only language, with STL and algorithms.' },
        { code: 'JAJ / TEEN / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Version control from the first commit.' }
      ] },
      { num: 'II', h3: 'Building with Java ideas', sub: 'Teenagers and adults', courses: [
        { code: 'JAJ / BUILD / 01', slug: 'backend-coding-masterclass-for-teens', title: 'Back-end development for teens', blurb: 'APIs and databases, ages 13 to 18.' },
        { code: 'JAJ / BUILD / 02', slug: 'complete-kotlin-programming-masterclass-professional', title: 'Kotlin and Android', blurb: 'Java\'s close relative, for Android apps.' },
        { code: 'JAJ / BUILD / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL and databases', blurb: 'SQL and design for the data behind Java services.' }
      ] },
      { num: 'III', h3: 'Further and deeper', sub: 'Ages 18 and over', courses: [
        { code: 'JAJ / DEEP / 01', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming', blurb: 'Algorithms under time pressure, up to contest level.' },
        { code: 'JAJ / DEEP / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web development', blurb: 'Front end, back end and deployment.' },
        { code: 'JAJ / DEEP / 03', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java for students on a US-style school programme.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'What a live Java lesson looks like from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'Morning in Peru is evening in India, an easy hour on both sides.' },
      { time: 'Evenings', l: 'Peruvian evenings land in the Indian early morning; ask for the hour you need.' },
      { time: '1-on-1', l: 'A private mentor and hours that move with your week.' }
    ],
    cells: [
      { h3: 'Compile every class', p: 'Learners write and run Java themselves, every lesson.' },
      { h3: 'The same mentor', p: 'One teacher who knows where you get stuck.' },
      { h3: 'Unhurried English', p: 'Clear explanations, key terms written in the chat.' },
      { h3: 'Batches by age', p: 'Teenagers with teenagers, adults with adults.' },
      { h3: 'Short practice tasks', p: 'Set in one class and discussed in the next.' },
      { h3: 'Batch or solo', p: 'A batch of fifteen to twenty, or a mentor all to yourself.' }
    ]
  },

  projectsH2: 'What our longer-term learners have built',
  projectsLede: 'Learners who stay with programming for a year or two build real software. A few projects by our older students are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Reviews from Google, quoted exactly as families and students wrote them.',

  fees: {
    h2: 'Java course fees for learners in Peru',
    lede: 'Fees are charged in US dollars on a card. Your bank turns each charge into soles at that day\'s rate, so the figure on your statement may move slightly from one month to another.',
    free: ['A free first Java class', 'Install a JDK and compile a first program', 'No card needed'],
    group: ['Fifteen to twenty learners at a similar stage', 'One mentor throughout', 'Two live classes a week', 'Pay monthly; stop at any month'],
    one: ['A mentor just for you', 'Projects shaped by your goal', 'Hours you choose']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'Java from zero in Peru: what learners ask',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every Java lesson is live, online and taught in English; we do not teach in Spanish. Mentors keep their speech clear, follow your pace and accent, and put every step on the shared screen. Java\'s keywords, error messages and documentation are all in English, so the class and the language use the same words.' },
      { q: 'Can I learn Java with no programming experience?', a: 'Yes. Java for Teens, for ages 13 to 18, and our adult Java course both begin with your very first line. Java asks for a little more care at the start than some languages, and that care pays off later.' },
      { q: 'How many months does Java from zero take?', a: 'Our full Java courses take ten to twelve months at two live classes a week, plus practice. Short courses often stop before objects and collections, which is where Java becomes useful for real projects. One-to-one learners can move faster.' },
      { q: 'Which version of Java will I use?', a: 'A current long-term-support JDK, installed from an official source in your first class. The lesson on this page was compiled and run with JDK 21, which reached General Availability on 19 September 2023.' },
      { q: 'Can I use Java in the OPI informatics olympiad?', a: 'No. The OPI 2025 rules allow C++ or Python in the first phase and only C++ in the final. If the OPI is your main goal, learn C++. We have no tie to UTEC or the OPI, and we promise no medals.' },
      { q: 'What time are classes for someone in Peru?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. With India ten and a half hours ahead, a 10:30 class in Peru is 21:00 for the mentor.' },
      { q: 'Do I get a certificate?', a: 'You receive a completion certificate from Modern Age Coders once you pass the final exam. It is ours alone: no Peruvian ministry or university issues it, and it is not a Peruvian qualification.' },
      { q: 'Is Java harder than Python?', a: 'It asks for more detail at the start: you declare types and write a little more code. Many learners find that this makes errors easier to understand. Both are good first languages; the quality of the teaching matters more than the choice.' },
      { q: 'Can I use ChatGPT or Claude to learn Java?', a: 'Adult learners can ask an AI tool to critique code they wrote. Claude\'s maker sets its minimum age at 18, and OpenAI wants a parent\'s consent for ChatGPT users under 18, so our teen batches work without adult AI accounts. Whatever the tool, you must be able to explain every line you hand in.' },
      { q: 'What do I need to take the course?', a: 'You need a laptop or desktop, a dependable connection and, if possible, a headset with its own mic. The JDK costs nothing; you install it with your mentor during the first lesson. Writing Java on a phone is not realistic.' },
      { q: 'How are Java fees paid?', a: 'Monthly card payments in US dollars. The soles amount is worked out by your bank, so expect small differences between statements. No card is needed for the free first class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for learners starting Java.',
    items: [
      { href: '/curso-de-java-en-ingles-peru', label: 'Curso de Java en inglés', p: 'Our Spanish-language page on these Java classes.' },
      { href: '/java-for-beginners', label: 'Java for beginners', p: 'How we start Java from nothing.' },
      { href: '/java-oops-concepts-course', label: 'Java object-oriented concepts', p: 'Classes, objects and design.' },
      { href: '/java-cannot-find-symbol-error', label: 'The "cannot find symbol" error', p: 'Reading a common compiler message.' },
      { href: '/java-classes-for-teens', label: 'Java for teenagers', p: 'What teens build in their first year.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'All our pages for Peru, by age and subject.' }
    ]
  },

  start: {
    h2: 'Book a free Java class from Peru',
    lede: 'During the free class you set up a JDK, compile your first program and tell the mentor what you hope to do with Java. We then recommend a course, group or private lessons, and a Peru hour that fits your week.',
    readFirst: 'Prefer to read more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> shows a live class step by step, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Lessons are live over video, taught from India, in English only. Send us a WhatsApp message in English if you want a quick answer.',
    formNote: 'Free, no card required, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Java', links: [
        { href: '/java-for-beginners', label: 'Java for beginners' },
        { href: '/java-dsa-course', label: 'Java and DSA' },
        { href: '/java-projects-for-students', label: 'Java projects' },
        { href: '/java-certification-course', label: 'Java certification' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/curso-de-java-en-ingles-peru', label: 'Curso de Java en inglés' },
        { href: '/english-medium-coding-classes-lima', label: 'Coding in English, Lima' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Ask how big it can get'
  },

  personalityCss: `
.ag-root.ag-jaj .ag-hero h1 { max-width: 20ch; }
.ag-root.ag-jaj .ag-capsule { border-left-width: 6px; }
.ag-root.ag-jaj .ag-section-head h2 { max-width: 30ch; letter-spacing: -0.01em; }
.ag-root.ag-jaj .ag-table td:first-child { font-weight: 700; }
.ag-root.ag-jaj .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Oracle, Java Language Specification Java SE 21 (chapter 4) and Java SE 21 API (java.lang.Math); OpenJDK JDK 21 project page; UTEC OPI home and Reglamento OPI 2025; MINEDU CNEB; INEI Boletín TIC II trimestre 2026; IANA tz database. Read 8 and 9 November 2026.',
    localProject: 'An original Java lesson for learners in Peru: 30 days of milliseconds (2,592,000,000) overflows an int and prints -1702967296; assigning to a long still prints -1702967296 because the expression is evaluated in int first; 24L gives 2592000000; Math.multiplyExact throws "integer overflow". Compiled and run with JDK 21. Lesson family: integer overflow and expression types.',
    requiredMentions: ['int:         -1702967296', 'long, early: 2592000000', 'multiplyExact: integer overflow', 'The integer operators do not indicate overflow or underflow in any way.', 'The type of the calculation is decided before the assignment', 'Ask how big it can get', 'Java is not on the list', 'one wrong answer, one still wrong, one right, one loud'],
    sources: [
      { claim: 'Primitive types: sizes and exact ranges; integer operators do not indicate overflow; float and double are IEEE 754 binary32 and binary64; boolean has two values.', url: 'https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html' },
      { claim: 'Math.addExact and multiplyExact throw if the result overflows an int.', url: 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html' },
      { claim: 'JDK 21 reached General Availability on 19 September 2023.', url: 'https://openjdk.org/projects/jdk/21/' },
      { claim: 'OPI 2025: Fase 1 C++ or Python, Fase 2 C++ only; free for secundaria pupils.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'CNEB: no computing area; competency 28 transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: '36.4% of Peruvian households had a computer, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Java job demand or salaries in Peru: no primary source; none given.',
      'Which Peruvian universities teach Java first: not verified here; the page speaks generally and links the Spanish university page instead.',
      'Oracle certification exam details: not fetched for this page; not described.',
      'Any connection with Oracle, UTEC, the OPI or a university: none.',
      'Spanish-language teaching: not offered; the page says so.'
    ]
  }
};
