// SHIP: market | Age 12 in Peru, 1° de secundaria: real projects, ONEM Nivel 1, OPI ahead, no chatbot yet | Sieve of Eratosthenes: a list of True/False, crossing out from p*p, 25 primes below 100
'use strict';
// Coding for kids age 12 in Peru (ag- English door, Peru cluster row PE075, hubGroup ages; alloc caj, #31644A).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Audience: English-reading parents in Peru of a twelve year old, usually in 1° de secundaria (edad normativa 12 at 31 March).
// Spine (different from the Spanish twin programacion-para-ninos-de-12-anos, which compares JER and JEC weeks, Python
// versus Luau versus GDScript, and lists opportunities by organiser with an enemy-waves lesson): twelve as the bridge
// between our kids' and teens' courses; the five secundaria grades with normative age and ONEM level (the page's
// primary-source table: MINEDU Edades normativas + ONEM 2026 bases via UGEL 06); what the secundaria plan gives (Ley
// 28044, CNEB JER hours); ONEM, OPI and COAR seen from twelve; a sieve lesson; why no chatbot at twelve; Peru time.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/facts-school/src/, read 9 November 2026;
// every quote string-matched in the raw text):
//  - Ley 28044 (ley28044-pdf/text.txt): "La Educación Secundaria constituye el tercer nivel de la Educación Básica Regular y
//    dura cinco años. Ofrece a los estudiantes una formación científica, humanista y técnica."
//  - MINEDU Edades normativas (edades-normativas/text.txt and edades-normativas-pdf/text.txt): "Se considera la edad
//    normativa al 31 de marzo de cada año."; "12 años 13 años 14 años 15 años 16 años" against secundaria 1er to 5to grado.
//  - CNEB (cneb/text.txt): "Matemática 4 4 4 4 4 Comunicación 4 4 4 4 4 Inglés 3 3 3 3 3"; "Educación para el trabajo 2 2 2
//    2 2"; "Competencias transversales a las áreas: Se desenvuelve en".
//  - ONEM 2026 bases, UGEL 06 oficio múltiple (ugel06-onem-2026/text.txt): "NIVEL 1: 1° y 2° grado de educación secundaria
//    NIVEL 2: 3° y 4° grado de educación secundaria NIVEL 3: 5° grado de educación secundaria"; "ALFA: Estudiantes de IIEE
//    públicas BETA: Estudiantes de IIEE privadas"; "Consta de diez (10) ítems de respuesta construida cerrada"; "La prueba
//    tiene una duración de dos (02) horas."; "se llevará a cabo de manera simultánea a nivel nacional el día miércoles 08 de
//    Julio".
//  - El Peruano, 11 October 2026 (elperuano-onem2026/text.txt): "la ONEM 2026 convocó a más de 1,7 millones de estudiantes
//    de secundaria de todo el país."
//  - MINEDU COAR admission (n-coar-admision/text.txt): "ofrecerá un total de 2650 vacantes para estudiantes de instituciones
//    educativas públicas que hayan culminado el segundo grado de secundaria".
//  - UTEC OPI (opi-home/text.txt): "abiertas gratuitamente a todos los estudiantes de secundaria del país."; OPI 2025 rules
//    (opi-reglamento-2025/text.txt): Fase 2 "Se podr´a usar solo C++."; "Queda prohibido el uso de IA generativa para la
//    resoluci´on de problemas."
//  - Vendor terms (content/ai-tool-age-audit.json): ChatGPT "You must be at least 13 years old"; Gemini "You must be 13 (or
//    the applicable age in your country) or over"; Claude "You must be at least 18 years old".
//  - Time: tzdata America/Lima -5:00 (last Rule Peru 1994), Asia/Kolkata 5:30.
// Our own calculations: 3 x 45 = 135 minutes of Inglés and 4 x 45 = 180 of Matemática a week under JER; 99 numbers from 2
// to 100 minus 25 primes = 74 crossed out; clock conversions.
// Our own example (sieve12.py and sieve12b.py, run with python3 -I, exact output): the 25 primes up to 97, "Primes up to 100
// : 25", "Numbers crossed out: 74"; "100 primes: 25 | steps from 2p: 146 | steps from p*p: 104"; "1000 primes: 168 | steps
// from 2p: 1958 | steps from p*p: 1411"; "10000 primes: 1229 | steps from 2p: 23071 | steps from p*p: 16981".
// Lesson family: Sieve of Eratosthenes with a Boolean list; why crossing out starts at p*p; counting work as the limit grows.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'limit = 100',
  'is_prime = [True] * (limit + 1)',
  'is_prime[0] = False',
  'is_prime[1] = False',
  '',
  'crossings = 0',
  'for p in range(2, limit + 1):',
  '    if is_prime[p] and p * p <= limit:',
  '        for multiple in range(p * p, limit + 1, p):',
  '            if is_prime[multiple]:',
  '                crossings = crossings + 1',
  '            is_prime[multiple] = False',
  '',
  'primes = [n for n in range(limit + 1) if is_prime[n]]',
  'print(primes)',
  'print("Primes up to", limit, ":", len(primes))',
  'print("Numbers crossed out:", crossings)'
].join('\n');

const OUT1 = [
  '[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]',
  'Primes up to 100 : 25',
  'Numbers crossed out: 74'
].join('\n');

const V2 = [
  'def count_primes(limit, start_at_square):',
  '    is_prime = [True] * (limit + 1)',
  '    is_prime[0] = is_prime[1] = False',
  '    work = 0',
  '    for p in range(2, limit + 1):',
  '        if not is_prime[p]:',
  '            continue',
  '        first = p * p if start_at_square else 2 * p',
  '        for multiple in range(first, limit + 1, p):',
  '            work = work + 1',
  '            is_prime[multiple] = False',
  '    return sum(is_prime), work',
  '',
  'for limit in [100, 1000, 10000]:',
  '    a = count_primes(limit, False)',
  '    b = count_primes(limit, True)',
  '    print(limit, "primes:", a[0], "| steps from 2p:", a[1], "| steps from p*p:", b[1])'
].join('\n');

const OUT2 = [
  '100 primes: 25 | steps from 2p: 146 | steps from p*p: 104',
  '1000 primes: 168 | steps from 2p: 1958 | steps from p*p: 1411',
  '10000 primes: 1229 | steps from 2p: 23071 | steps from p*p: 16981'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Coding for kids aged 12' },
  slug: 'coding-for-kids-age-12-peru',
  code: 'caj',
  accent: '#31644A',
  accentRationale: 'Coding for kids age 12 in Peru: a deep jade green #31644A, the colour of the Urubamba river in the dry season, cooler and more serious than the younger age pages for a child entering secundaria; above 4.5:1 on the paper #FBF8F2 and every paper tone the build checks',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Coding for kids age 12 in Peru',
  title: 'Coding for Kids Age 12 in Peru: Live Classes in English',
  description: 'Coding for a twelve year old in Peru: live online classes in English for 1° de secundaria, Python projects, games and contest maths, group or one to one, any hour.',
  ogDescription: 'Twelve is the start of secundaria in Peru. What changes at school, where ONEM, OPI and COAR fit (organisers\' own pages), why no chatbot yet, and a Python sieve that finds the 25 primes below 100.',
  twitterDescription: 'Live coding classes in English for twelve year olds in Peru: real Python, games and contest maths, at an hour your family picks.',
  pageName: 'Coding for Kids Age 12 in Peru',
  webPageDescription: 'A guide for parents in Peru whose child is twelve and starting secundaria, built from Ley 28044, MINEDU normative ages, the CNEB plan of studies, the ONEM 2026 bases published through UGEL 06, El Peruano, MINEDU on COAR admission, UTEC on the OPI, vendor age terms and the tz database, with an original Python lesson on the sieve of Eratosthenes.',
  courseDescription: 'Live online coding classes for twelve year olds in Peru, taught in English by mentors based in India: Python projects, game development, C++ for contests and maths through code, in a group of fifteen to twenty or one to one, at an hour the family chooses.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Coding at age 12',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#learn', label: 'At twelve' },
    { href: '#secundaria', label: 'Secundaria' },
    { href: '#contests', label: 'ONEM and OPI' },
    { href: '#lesson', label: 'Sieve lesson' },
    { href: '#clock', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Age 12 &middot; 1° de secundaria &middot; Live, in English',
  h1: 'Coding for kids age 12 in Peru',
  lede: 'Twelve sits on a border. In Peru it usually means the first year of secundaria, a new timetable, new teachers and, for some, a first maths olympiad. In coding it means the end of children\'s tools and the start of real ones. Here we write for mothers and fathers hoping to see a twelve year old to cross that border with a teacher beside them, live and in English.',
  secondaryCta: { href: '#lesson', label: 'See the sieve lesson' },
  wa: 'Hello Modern Age Coders, our child is twelve and has just started secundaria in Peru. Could we book a free coding class in English?',
  heroNote: 'Live classes since 2020 &middot; 4.9 average from about 547 Google reviews &middot; twelve year olds build real projects and explain them in English',
  spec: [
    ['Age', 'Twelve, usually 1° de secundaria'],
    ['Languages', 'Python, with C++ or GDScript to follow'],
    ['Focus', 'Projects, algorithms, contest maths'],
    ['Format', 'Live online lessons, no recordings'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['First class', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'A twelve year old in Peru is ready for real programming, and Modern Age Coders teaches it live, online and in English. At twelve most of our students write Python projects with functions and lists, and some move on to game engines, C++ for contests or maths through code. Lessons are led from India by a mentor who shares the screen with your child, either in a class of fifteen to twenty young people born around the same year or one to one, and the hour is whatever your household in Peru prefers. There is no charge for the first lesson.',

  picks: {
    eyebrow: 'Where twelve year olds start',
    h2: 'Good first courses at twelve',
    lede: 'Twelve is the top of our kids\' range and the edge of our teens\' courses. These three are the usual first choices.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CAJ / 01', title: 'Python and AI for Kids', note: 'Ages 9 to 12. For a twelve year old new to typed code, the quickest route to real Python: functions, lists, games and projects that use AI safely, ready for our teen courses at thirteen.' },
      { course: 'godot-game-development-course-for-kids-and-teens', code: 'CAJ / 02', title: 'Godot Game Development', note: 'Ages 10 to 17. For the twelve year old who wants to make proper games. GDScript, scenes, physics and levels in a free, open-source engine used by professionals.' },
      { course: 'middle-school-math-competitions-course', code: 'CAJ / 03', title: 'Middle School Maths Competitions', note: 'Ages about 10 to 14. Contest problem solving in English with original problems, for the twelve year old who enjoys hard puzzles and may be curious about olympiads.' }
    ]
  },

  sections: [
    {
      id: 'who',
      eyebrow: 'Who this page is for',
      h2: 'Who are these coding classes for twelve year olds for?',
      lede: 'Families in Peru whose child is twelve, usually in their first year of secundaria, and who can follow a class in English or want to grow into it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Young people who have outgrown blocks', p: 'They built Scratch games at nine or ten and now find them too simple. They want to type, to build things that look like real software, and to understand how the apps on their phone work.' },
          { h3: 'Beginners starting late', p: 'Twelve is not late. Beginners of this age learn Python faster than younger children, because they read quickly, follow longer explanations and can plan ahead.' },
          { h3: 'Puzzle solvers', p: 'Some twelve year olds love the maths more than the screen. Code lets them test conjectures, count cases and see why an algorithm works, which is good training for contests.' }
        ] },
        { kind: 'p', mt: true, html: 'In Spanish, <a class="ag-inline-link" href="/programacion-para-ninos-de-12-anos">programación para niños de 12 años</a> compares Python, Roblox and Godot at this age. For the years after twelve, <a class="ag-inline-link" href="/coding-classes-for-teens-peru">coding classes for teens in Peru</a> covers building, competing and certification.' }
      ]
    },
    {
      id: 'learn',
      tint: 'tint',
      eyebrow: 'What twelve year olds learn',
      h2: 'What programming can a twelve year old learn?',
      lede: 'The real thing, at a gentler pace. A twelve year old can learn the same ideas an adult beginner learns, as long as each idea arrives with a project that makes it worth learning.',
      body: [
        { kind: 'two',
          leftH3: 'Ideas that click at twelve',
          left: [
            '<strong>Functions.</strong> Writing a piece of code once and calling it with different inputs. Twelve year olds like the feeling of building their own tools.',
            '<strong>Lists.</strong> Keeping many values together and working through them with a loop: scores, names, the numbers in today\'s lesson.',
            '<strong>Algorithms.</strong> A precise method that always works, such as a sieve for primes or a search through a sorted list. This is where coding and mathematics meet.'
          ],
          rightH3: 'Projects that hold attention',
          right: [
            'A game with levels and a saved high score. A small website about a hobby. A program that answers a maths question nobody in the class could do by hand.',
            'Twelve year olds lose interest in exercises that lead nowhere. Every topic in our classes ends in something they can show a friend, and every project is explained aloud, in English, at the end.'
          ] },
        { kind: 'p', mt: true, html: 'Twelve is also when many young coders choose a direction: making games, building for the web, or solving contest problems. They do not have to choose for ever. A term of each is a good way to find out, and the free class is a good way to start.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Starting secundaria',
      h2: 'What changes when a child in Peru starts secundaria?',
      lede: 'A five-year stretch begins, with a new weekly plan and, for those who want it, a new set of contests. The table lines up each grade with MINEDU\'s normative age and with the ONEM level it competes in.',
      body: [
        { kind: 'table', numCols: [], caption: 'Secundaria in Peru: grade, normative age on 31 March and ONEM 2026 level', head: ['Grade', 'Normative age (MINEDU)', 'ONEM level (2026 bases)'], rows: [
          ['1° de secundaria', '12', 'Nivel 1'],
          ['2° de secundaria', '13', 'Nivel 1'],
          ['3° de secundaria', '14', 'Nivel 2'],
          ['4° de secundaria', '15', 'Nivel 2'],
          ['5° de secundaria', '16', 'Nivel 3']
        ] },
        { kind: 'source', html: 'Ages from MINEDU, Edades normativas (normative age counted on 31 March each year). Levels from the bases of the XXII Olimpiada Nacional Escolar de Matemática 2026 as sent to schools by UGEL 06 in an oficio múltiple. Both read on 9 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'The secundaria plan',
          left: [
            'Ley 28044 says secundaria "dura cinco años" and gives students "una formación científica, humanista y técnica". Under the regular school day the CNEB gives every grade 4 weekly periods of Matemática, 4 of Comunicación, 3 of Inglés and 2 of Educación para el Trabajo.',
            'With 45-minute periods, that is 180 minutes of mathematics and 135 of English a week, by our sum. There is still no computing area: digital skills remain a competency shared across subjects, so coding at school depends on the school.'
          ],
          rightH3: 'What that means for a twelve year old',
          right: [
            'Secundaria is busier, and there are more teachers to adjust to. Coding classes that run at an hour the family chooses fit round that better than an after-school club fixed to one afternoon.',
            'English at school goes up to three periods a week. A twelve year old who also codes in English gets a lot of practice in precise, technical language, the kind that is hardest to pick up in a general class.'
          ] }
      ]
    },
    {
      id: 'contests',
      tint: 'tint',
      eyebrow: 'Contests at twelve',
      h2: 'Which olympiads can a twelve year old in Peru take part in?',
      lede: 'In maths, the ONEM from first grade of secundaria. In computing, the OPI is open to secondary students and gets harder later. We describe them from the organisers\' own documents, and we are not connected with any of them.',
      body: [
        { kind: 'two',
          leftH3: 'ONEM, the school maths olympiad',
          left: [
            'The ONEM 2026 bases put 1° and 2° de secundaria in Nivel 1, with categories Alfa for public schools and Beta for private ones. The school stage ran nationwide on Wednesday 8 July 2026; its paper had ten closed constructed-response items and lasted two hours.',
            'According to El Peruano on 11 October 2026, the 2026 edition drew more than 1.7 million secondary students from its first stage. Entry is through your child\'s school, which runs the first round; the winners go on to the UGEL, regional and national stages.'
          ],
          rightH3: 'OPI, the computing olympiad',
          right: [
            'The Olimpiadas Peruanas de Computación, organised by UTEC, are "abiertas gratuitamente a todos los estudiantes de secundaria del país". The OPI 2025 rules allowed only C++ in the final, in-person phase and banned generative AI for solving problems.',
            'A twelve year old is early for the OPI final, but not too early to prepare. Python teaches the thinking; C++ comes later for the contest itself. Our <a class="ag-inline-link" href="/olimpiada-de-matematica-onem-preparacion">page on ONEM preparation</a> explains, in Spanish, how we train with problems we write ourselves.'
          ] },
        { kind: 'p', mt: true, html: 'One more door opens soon after twelve. MINEDU\'s COAR schools offered 2,650 places in their 2026 admission for public-school students who had finished 2° de secundaria. We mention it only so families know the timeline; we do not prepare for COAR admission and make no promise about any contest or admission result. We never reproduce an organiser\'s problems; every practice problem we use is our own.' }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'An original Python lesson',
      h2: 'How do we teach Python to a twelve year old? A sieve for primes',
      lede: 'This is our lesson for twelve year olds who know loops and lists. It is more than two thousand years old, it fits in fifteen lines, and it shows a habit that contest coders need: count the work, not just the answer.',
      body: [
        { kind: 'two',
          leftH3: 'The idea, on paper first',
          left: [
            'Write the numbers from 2 to 100. Circle 2, then cross out every multiple of 2 after it. Circle the next number not crossed out, 3, and cross out its multiples. Keep going. Whatever is circled at the end is prime. The method is called the sieve of Eratosthenes.',
            'The mentor asks one question before any code: when you reach 7, which is the first multiple you actually need to cross out? Most twelve year olds say 14. The answer is 49, because 14, 21, 28, 35 and 42 were already crossed out by 2, 3 or 5.'
          ],
          rightH3: 'In Python',
          right: [
            'We keep a list of <code>True</code> and <code>False</code> values, one per number: <code>True</code> means "still might be prime". Crossing out means setting a value to <code>False</code>.',
            'Because of the question about 7, each prime starts crossing out at its own square, <code>p * p</code>, and the outer loop can stop once <code>p * p</code> is bigger than the limit. We also count how many numbers get crossed out, as a check.'
          ] },
        { kind: 'code', label: 'Version 1: the sieve up to 100', lang: 'Python', code: V1 },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: OUT1, note: 'Our run under Python 3 (python3 -I), unedited. 99 numbers from 2 to 100, minus 25 primes, leaves 74 crossed out, which matches the count.' },
        { kind: 'p', mt: true, html: 'Then the question that turns a twelve year old into a programmer who thinks about cost: <strong>how much work did starting at <code>p * p</code> save?</strong> We write a version that can start at either <code>2 * p</code> or <code>p * p</code> and counts every crossing-out step, even when a number is crossed out twice.' },
        { kind: 'code', label: 'Version 2: the same answer, two amounts of work', lang: 'Python', code: V2 },
        { kind: 'code', label: 'What Version 2 prints', lang: 'Output', code: OUT2, note: 'Exact output of our run. Both versions find the same primes (25, 168 and 1229); starting at p times p saves between about a quarter and nearly 30% of the steps, by our division of the printed counts.' },
        { kind: 'p', mt: true, html: 'Two answers can be equally right and not equally good. The faster version was not found by typing; it came from the paper question about 7. That is the order we teach in: think, then code, then measure. It is also why AI tools that produce an answer instantly are no use to a twelve year old learning this: the answer was never the point.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Our practice, check by hand.</strong> Which numbers below 30 are crossed out more than once in Version 2 when you start at 2p? List them.',
          '<strong>Our practice, twins.</strong> Use the list of primes to print every pair that differs by 2, like 11 and 13. How many pairs are there below 100?',
          '<strong>Our practice, the stopping rule.</strong> Explain, in English, why the outer loop may stop once p times p passes the limit.',
          '<strong>Our practice, estimate.</strong> Without running anything, write down a guess for the number of primes below 100,000. Then run it and compare.'
        ] }
      ]
    },
    {
      id: 'ai',
      tint: 'tint',
      eyebrow: 'AI at twelve',
      h2: 'Can a twelve year old use ChatGPT or other AI for coding?',
      lede: 'Not yet. Twelve is one birthday short of the age the main chatbot makers set, and for learning to code that year is a gift rather than a loss.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The rules', p: 'OpenAI asks ChatGPT users to be 13 or older, and Google sets 13 for Gemini on personal and school accounts. Anthropic sets 18 for Claude. None of them is for a twelve year old, so we do not use them in class.' },
          { h3: 'What happens at thirteen', p: 'In our teen courses, students who have learnt to code first meet AI tools where the maker allows it, with a parent\'s permission where required, and use them to check and explain, never to replace thinking.' },
          { h3: 'Contest rules agree', p: 'The OPI 2025 rules banned generative AI for solving problems. A young coder who can solve problems unaided is ready for that rule and for the real work behind it.' }
        ] },
        { kind: 'p', mt: true, html: 'Every major AI tool and the youngest age its maker allows is listed, with quotes from the makers\' own terms, in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>.' }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Peru time',
      h2: 'When would a twelve year old in Peru have class?',
      lede: 'At an hour your family chooses, around the secundaria day. Peru uses UTC minus five all year and India uses UTC plus five and a half, which puts a mentor in India ten hours thirty minutes later than you, whatever the date. The rows below are conversions, not a schedule.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru hours a twelve year old might use, turned into India time (examples, not class slots)', head: ['Time in Peru', 'Time in India', 'Fits around'], rows: [
          ['07:00', '17:30', 'An early start in the summer holidays'],
          ['10:30', '21:00', 'A Saturday or Sunday morning'],
          ['14:00', '00:30, next day', 'An afternoon after a morning school shift'],
          ['16:30', '03:00, next day', 'The hour after a full school day'],
          ['20:00', '06:30, next day', 'Evening, once homework is done']
        ] },
        { kind: 'source', html: 'Worked out by us from the IANA tz database: America/Lima is UTC minus 5 and has not used summer time since 1994; Asia/Kolkata is UTC plus 5:30.' },
        { kind: 'p', mt: true, html: 'Neither country moves its clocks, so the hour you pick holds from March to December and through the summer. Every Peru page, by age, subject and place, is on our <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress at twelve',
    h2: 'How does a twelve year old progress in coding over a year?',
    lede: 'These five stages are ours. They decide which group a twelve year old joins and when they are ready for our teen courses at thirteen.',
    table: { numCols: [], caption: 'Five stages for twelve year olds (ours)', head: ['Stage', 'Typical timing', 'Can build', 'Can explain'], rows: [
      ['1. Fluent basics', 'Months 1 to 2', 'Programs with loops, decisions and input', 'What each line does'],
      ['2. Own tools', 'Months 2 to 4', 'Functions reused across a project', 'Inputs, outputs and why'],
      ['3. Data', 'Months 4 to 6', 'Programs that keep and search lists', 'How the program finds an item'],
      ['4. Algorithms', 'Months 6 to 9', 'A sieve, a sort, a search, written from an idea', 'Why it is correct and how much work it does'],
      ['5. Projects', 'Months 9 to 12', 'A planned project, finished and tested', 'What they would change next time']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 4 is where coding and school maths meet. A twelve year old who can explain why a method is correct is learning proof, not only programming.',
      'Ask to see the finished project at stage 5, and ask what your child would change. A thoughtful answer is the clearest sign of progress.'
    ] },
    right: { h3: 'For you, at twelve', ps: [
      'Count the work, not only the answer. Two programs can both be right; one can be far better.',
      'When you are stuck, write the idea in plain English first. The code is easier after that.'
    ] }
  },

  catalogue: {
    eyebrow: 'More options',
    h2: 'Nine more courses for twelve year olds',
    lede: 'Taught live and in English, with a regular mentor, in a group of the same age or one to one.',
    bands: [
      { num: 'I', h3: 'Building', sub: 'Ages 8 to 14', courses: [
        { code: 'CAJ / BUILD / 01', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'A gentle first step into the language contests use.' },
        { code: 'CAJ / BUILD / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Luau scripting for games others can play.' },
        { code: 'CAJ / BUILD / 03', slug: 'kids-ai-web-development-course', title: 'Web development for kids', blurb: 'A real website, published by the young builder.' }
      ] },
      { num: 'II', h3: 'Mathematics', sub: 'Ages 10 to 15', courses: [
        { code: 'CAJ / MATH / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Primes, patterns and proof explored in Python.' },
        { code: 'CAJ / MATH / 02', slug: 'amc-8-math-competition-prep-course', title: 'AMC 8 preparation', blurb: 'Contest maths for grade 8 and below.' },
        { code: 'CAJ / MATH / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'Pre-algebra and geometry with a firm base.' }
      ] },
      { num: 'III', h3: 'Ideas and teamwork', sub: 'Ages 8 and up', courses: [
        { code: 'CAJ / IDEA / 01', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'How AI learns and errs, without adult accounts.' },
        { code: 'CAJ / IDEA / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Layouts that work on any screen.' },
        { code: 'CAJ / IDEA / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon for kids', blurb: 'Twelve weeks of team building, then a live event.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live classes work for a twelve year old in Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Secundaria terms', l: 'Afternoons or evenings in Peru, worked around the school shift.' },
      { time: 'Summer and mid-year', l: 'Morning classes while school is out.' },
      { time: '1-on-1', l: 'A mentor for your child alone, at the hour you agree.' }
    ],
    cells: [
      { h3: 'Projects, not drills', p: 'Every topic ends in something that works.' },
      { h3: 'Think, code, measure', p: 'The order behind every lesson.' },
      { h3: 'A regular mentor', p: 'The same person, week after week.' },
      { h3: 'Twelve year olds together', p: 'Groups by age and level.' },
      { h3: 'Notes for parents', p: 'What was built, what was hard, what comes next.' },
      { h3: 'Group or one to one', p: 'Fifteen to twenty, or just your child.' }
    ]
  },

  projectsH2: 'What older students have built',
  projectsLede: 'Students who start around twelve often build projects like these by fifteen or sixteen. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'Google reviews from parents and students, quoted exactly.',

  fees: {
    h2: 'Fees for a twelve year old in Peru',
    lede: 'You pay a monthly fee in US dollars by card. The card\'s bank changes it into soles at its own rate when the payment goes through, so what you see on the statement can vary slightly from month to month.',
    free: ['A free first class', 'Your child writes and explains a small program', 'No card required'],
    group: ['Fifteen to twenty twelve year olds', 'One mentor all the way', 'Two live classes a week', 'Monthly, cancel when you like'],
    one: ['Your child and a mentor alone', 'Projects matched to their interests', 'Your choice of hours']
  },

  faq: {
    eyebrow: 'Parents in Peru ask',
    h2: 'Coding at age 12: questions from families in Peru',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Classes are live and online, and they are taught only in English. Mentors speak clearly, follow your child\'s speed and accent, and write the important words on the shared screen. At twelve, most students follow well, and those who find it hard at first usually settle within a few weeks.' },
      { q: 'Is twelve a good age to start coding?', a: 'Yes. Twelve year olds learn typed code quickly because they read fast and can plan. A complete beginner of twelve often catches up with children who started much younger.' },
      { q: 'Should my twelve year old learn Python or C++?', a: 'Python first for almost everyone: it lets them think about the problem instead of the punctuation. C++ makes sense later for contests such as the OPI, whose 2025 final allowed only C++.' },
      { q: 'Does 1° de secundaria in Peru teach programming?', a: 'Not as its own area. The national plan gives secundaria Matemática, Comunicación, Inglés, Educación para el Trabajo and other areas, with digital skills as a shared competency. Some schools add computing in their own hours.' },
      { q: 'Can my child enter the ONEM at twelve?', a: 'Yes, through the school. The ONEM 2026 bases place 1° and 2° de secundaria in Nivel 1. Schools run the first stage, so ask yours. We are not connected with the ONEM and we never use its problems; our practice problems are our own.' },
      { q: 'When could classes be in Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India stays ten hours thirty minutes ahead, so 16:30 for your child is 03:00 the next day for the mentor.' },
      { q: 'Can a twelve year old use ChatGPT in your classes?', a: 'No. ChatGPT and Gemini set 13 as their minimum age and Claude sets 18. Twelve year olds learn to solve problems without them; students meet AI tools in our teen courses where the maker allows.' },
      { q: 'What comes after twelve?', a: 'At thirteen, students can move into our teen courses: full Python, Java, web development, AI and contest programming. The mentor suggests the next step from what your child has built.' },
      { q: 'Do you prepare students for COAR admission?', a: 'No. We mention COAR only because its admission is for public-school students who have finished 2° de secundaria, which is close to this age. Our classes are coding and maths, and we promise no admission or contest result.' },
      { q: 'Is Modern Age Coders part of MINEDU or connected to schools in Peru?', a: 'No. Modern Age Coders runs independently, teaches from India, and has no tie with MINEDU, UTEC, a UGEL or any Peruvian school. Nothing we issue is a Peruvian grade; students who finish a course receive a completion certificate that we issue ourselves.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More for twelve year olds and their parents',
    lede: 'Useful next reads.',
    items: [
      { href: '/coding-for-12-year-olds', label: 'Coding for 12 year olds', p: 'The same age seen without the Peru detail.' },
      { href: '/python-for-12-year-olds', label: 'Python at twelve', p: 'Python projects that suit this age.' },
      { href: '/coding-for-13-year-olds', label: 'Coding at thirteen', p: 'What opens up a year from now.' },
      { href: '/ai-tools-age-guide', label: 'AI tools by age', p: 'The minimum age for each AI tool, in its maker\'s words.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking before tools', p: 'Why we ask before we tell.' },
      { href: '/student-labs', label: 'Student labs', p: 'Real projects from our students.' }
    ]
  },

  start: {
    h2: 'Book a free coding class for your twelve year old',
    lede: 'During the trial lesson your child solves a short puzzle, writes a small program and explains it, while the mentor listens for how they reason. Then you hear which course fits, whether a group or one-to-one lessons suit better, and which hours are open.',
    readFirst: 'Would you like to read more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a real class, and each syllabus is on the <a class="ag-inline-link" href="/courses">courses</a> page.',
    note: 'Live lessons from India, in English only. For a quick answer, WhatsApp us in English.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Twelve year olds', links: [
        { href: '/coding-for-12-year-olds', label: 'Coding at twelve' },
        { href: '/python-for-12-year-olds', label: 'Python at twelve' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/programacion-para-ninos-de-12-anos', label: 'Leer en español' },
        { href: '/coding-classes-for-teens-peru', label: 'Teens in Peru' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Think, code, then measure'
  },

  personalityCss: `
.ag-root.ag-caj .ag-hero h1 { max-width: 16ch; letter-spacing: -0.016em; }
.ag-root.ag-caj .ag-capsule { border-left-width: 5px; }
.ag-root.ag-caj .ag-table caption { text-align: left; }
.ag-root.ag-caj .ag-steps li { line-height: 1.64; }
.ag-root.ag-caj .ag-code pre { line-height: 1.48; }
`,

  dossier: {
    curriculumAuthority: 'Ley 28044; MINEDU Edades normativas; CNEB secundaria plan (Jornada Escolar Regular) and competencias transversales; ONEM 2026 bases (UGEL 06 oficio múltiple); El Peruano report of 11 October 2026; MINEDU press release on COAR 2026 admission; UTEC OPI homepage and OPI 2025 rules; vendor terms (content/ai-tool-age-audit.json); IANA tz database. Read 9 November 2026.',
    localProject: 'An original Python lesson for twelve year olds: the sieve of Eratosthenes with a list of True and False values, crossing out from p times p after a paper question about 7 (first needed multiple 49); the run lists the 25 primes up to 97 and Numbers crossed out: 74; a second version counts the work, 104 against 146 steps up to 100 and 16981 against 23071 up to 10000. Lesson family: the sieve, and counting the cost of an algorithm.',
    requiredMentions: ['Numbers crossed out: 74', '10000 primes: 1229 | steps from 2p: 23071 | steps from p*p: 16981', 'The answer is 49, because 14, 21, 28, 35 and 42 were already crossed out', 'Secundaria in Peru: grade, normative age on 31 March and ONEM 2026 level', 'abiertas gratuitamente a todos los estudiantes de secundaria del país', '2,650 places in their 2026 admission', 'Five stages for twelve year olds (ours)', 'Think, code, then measure', 'Two answers can be equally right and not equally good.'],
    sources: [
      { claim: 'Secundaria lasts five years with scientific, humanist and technical education (Ley 28044).', url: 'https://cdn.www.gob.pe/uploads/document/file/4049722/Ley%2028044%20-%20Ley%20General%20de%20Educaci%C3%B3n%20.pdf' },
      { claim: 'Normative ages 12 to 16 for 1° to 5° de secundaria, counted on 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Secundaria JER periods: Matemática 4, Comunicación 4, Inglés 3, Educación para el Trabajo 2; TIC competency transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ONEM 2026 levels, categories, 10 items, two hours, school stage 8 July.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'ONEM 2026 drew more than 1.7 million secondary students.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'COAR 2026 admission: 2,650 places after 2° de secundaria.', url: 'https://www.gob.pe/institucion/minedu/noticias/1331404-minedu-pone-en-marcha-proceso-de-admision-a-los-colegios-de-alto-rendimiento' },
      { claim: 'OPI free for all secondary students (UTEC).', url: 'https://opi.utec.edu.pe/' },
      { claim: 'OPI 2025: only C++ in Fase 2; generative AI banned.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'ChatGPT and Gemini minimum 13; Claude 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'ONEM, OPI or COAR problems or solutions: never reproduced; all practice problems are ours.',
      'Any promise of olympiad medals or COAR admission: refused.',
      'Dates for the 2027 ONEM or OPI: not published when checked; not given.',
      'Spanish-language teaching or any link with MINEDU, UTEC or a school: none, and the page says so.'
    ]
  }
};
