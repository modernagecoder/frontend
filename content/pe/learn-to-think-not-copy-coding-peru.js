// SHIP: market (en guide, think-not-copy) | Peru's real tests leave nothing to copy: ONEM, OPI, admission papers | Euclid's algorithm: brute force counted, a hand trace table, then math.gcd as a check
'use strict';
// Learn to think, not copy: coding for Peru (ag- English guide door, row PE027, hubGroup guides, code ltnc).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Spine (not the Spanish twin's): every test that matters to a Peruvian learner is one where nothing can be copied
// (closed constructed-response ONEM items, OPI's in-person C++ final with generative AI banned, admission papers
// that penalise wrong answers), so we teach the habits those rooms reward: predict, trace by hand, explain, test.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/learn-to-think-not-copy-coding-peru/,
// text.txt per source; every quote below string-matched in the raw text on 9 November 2026):
//  - UGEL 06 Oficio Múltiple 00164-2026 on ONEM 2026 (ugel06-onem-2026): "Consta de diez (10) ítems de respuesta
//    construida cerrada", two items per CNEB maths competency; "La prueba tiene una duración de dos (02) horas.";
//    school stage "miércoles 08 de Julio" (2026).
//  - El Peruano, 11 October 2026 (elperuano-onem2026): "la ONEM 2026 convocó a más de 1,7 millones de estudiantes de
//    secundaria de todo el país."; national stage at Huampaní "reunió a 237 estudiantes".
//  - UTEC OPI home (opi-home): "abiertas gratuitamente a todos los estudiantes de secundaria del país".
//  - Reglamento OPI 2025 (opi-reglamento-2025, LaTeX accents kept): "Se podr´a usar solo C++." (Fase 2);
//    "Queda prohibido el uso de IA generativa para la resoluci´on de problemas."
//  - IOI statistics, Peru (ioi-stats-per): "First participation: 2022", 13 contestants, "Bronze medals: 1".
//  - Universidad de Lima, Guía del postulante 2027-1(A) (ulima-guia-20271a): "prueba única de aptitud académica y de
//    conocimientos"; "restándolo por cada respuesta equivocada"; school exam 15 November 2026.
//  - UNI Admisión 2026-2 (uni-adm2026-2): "El examen es de manera presencial y consiste en tres pruebas tomadas en tres
//    días"; papers aptitude and humanities, mathematics, physics and chemistry; 10, 12 and 14 August 2026.
//  - PUCP Guía del postulante (pucp-guia): "con especial énfasis en las áreas de comprensión lectora y matemáticas."
//  - CNEB (cneb/text.txt): competency "29 Gestiona su aprendizaje de manera autónoma", capacities "Define metas de
//    aprendizaje", "Organiza acciones estratégicas para alcanzar sus metas de aprendizaje", "Monitorea y ajusta su
//    desempeño durante el proceso de aprendizaje".
//  - MINEDU Fábrica de Programadores (n-fabrica-prog): 1,000 students of 4.º and 5.º secundaria in Lima Norte, Python,
//    PCEP.
//  - Python docs, math module (py_math.txt): "gcd(*integers) Greatest common divisor of the integer arguments".
//  - Time: America/Lima UTC-5 all year, Asia/Kolkata UTC+5:30 (timezone.tsv).
// Our own calculations (python3 -I, scratchpad pe/e7/ltnc_v1.py to v3.py), printed output:
//   v1: "(12, 73)" and "(21, 442)"; v2 trace rows "1071 462 147", "462 147 21", "147 21 0", "answer: 21", and the
//   reversed call starts "462 1071 462"; v3 prints six rows ending True, e.g. "0 12 12 12 True".
// Lesson family: Euclid's algorithm. Count the work of a brute-force search, trace the remainder loop by hand, predict
// what happens when the arguments are swapped, then check against the standard library.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'def gcd_slow(a, b):',
  '    checks = 0',
  '    d = min(a, b)',
  '    while d > 0:',
  '        checks = checks + 1',
  '        if a % d == 0 and b % d == 0:',
  '            return d, checks',
  '        d = d - 1',
  '',
  'print(gcd_slow(84, 120))',
  'print(gcd_slow(1071, 462))'
].join('\n');

const OUT1 = [
  '(12, 73)',
  '(21, 442)'
].join('\n');

const V2 = [
  'def gcd_traced(a, b):',
  '    print(f"{\'a\':>6} {\'b\':>6} {\'a % b\':>6}")',
  '    while b != 0:',
  "        print(f'{a:>6} {b:>6} {a % b:>6}')",
  '        a, b = b, a % b',
  '    return a',
  '',
  "print('answer:', gcd_traced(1071, 462))",
  "print('answer:', gcd_traced(462, 1071))"
].join('\n');

const OUT2 = [
  '     a      b  a % b',
  '  1071    462    147',
  '   462    147     21',
  '   147     21      0',
  'answer: 21',
  '     a      b  a % b',
  '   462   1071    462',
  '  1071    462    147',
  '   462    147     21',
  '   147     21      0',
  'answer: 21'
].join('\n');

const V3 = [
  'import math',
  '',
  'def gcd(a, b):',
  '    while b != 0:',
  '        a, b = b, a % b',
  '    return a',
  '',
  'tests = [(84, 120), (1071, 462), (462, 1071), (17, 5), (12, 0), (0, 12)]',
  'for a, b in tests:',
  '    print(a, b, gcd(a, b), math.gcd(a, b), gcd(a, b) == math.gcd(a, b))'
].join('\n');

const OUT3 = [
  '84 120 12 12 True',
  '1071 462 21 21 True',
  '462 1071 21 21 True',
  '17 5 1 1 True',
  '12 0 12 12 True',
  '0 12 12 12 True'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Learn to think, not copy' },
  slug: 'learn-to-think-not-copy-coding-peru',
  code: 'ltnc',
  accent: '#863764',
  accentRationale: 'Learn to think, not copy: a deep plum #863764, the ink of a pencil-and-paper trace table rather than a bright screen, serious without being gloomy; contrast above 4.5 on the paper #FBF8F2 and its tints, as allocated in alloc.tsv and checked by the build',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Learn to think, not copy: coding for Peru',
  title: 'Learn to Think, Not Copy: Live Coding Classes for Peru',
  description: 'Coding classes for Peru that teach learners to reason, trace and test their own code instead of copying answers or AI output. Live, online, in English.',
  ogDescription: 'Why the tests Peruvian students actually sit leave nothing to copy, the four habits that replace copying, and a Python lesson on Euclid\'s algorithm traced by hand.',
  twitterDescription: 'Live coding classes in English for learners in Peru, from age 6 to adult, built on reasoning rather than copied answers.',
  pageName: 'Learn to Think, Not Copy: Coding for Peru',
  webPageDescription: 'A guide for families and learners in Peru on learning to code by reasoning instead of copying, built from the ONEM 2026 rules (UGEL 06), the OPI 2025 regulations (UTEC), IOI statistics, the admission guides of Universidad de Lima, UNI and PUCP, and the CNEB, with an original Python lesson on Euclid\'s algorithm.',
  courseDescription: 'Live online coding classes taught in English for learners in Peru from age 6 to adult, in which every program is predicted, traced and explained by the learner before it counts: Scratch and Python for children, Python, algorithms and problem solving for teenagers, and Python, Java and data structures for university students and adults, in a group of fifteen to twenty or one to one, at any hour.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Learn to think, not copy',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#rooms', label: 'No copying here' },
    { href: '#habits', label: 'Four habits' },
    { href: '#lesson', label: 'Euclid lesson' },
    { href: '#ai', label: 'AI and copying' },
    { href: '#clock', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Reasoning first &middot; Ages 6 to adult',
  h1: 'Learn to think, not copy: coding classes for Peru',
  lede: 'A program copied from a classmate, a video or a chatbot runs exactly as well as one the learner wrote. The difference only shows later, in a room with no internet, a pencil and a clock. This page is about getting ready for that room: which Peruvian tests work that way, what thinking looks like in code, and a lesson that shows the method from start to finish.',
  secondaryCta: { href: '#lesson', label: 'See the Euclid lesson' },
  wa: 'Hello Modern Age Coders, we are in Peru and want coding classes in English that teach real reasoning, not copying. Could we book a free first class?',
  heroNote: 'Teaching since 2020 &middot; 10,000+ students worldwide &middot; every line explained by the learner who wrote it',
  spec: [
    ['Who', 'Children from 6, teenagers, university students and adults in Peru'],
    ['Method', 'Predict, trace, explain, test, before any code is kept'],
    ['Subjects', 'Scratch, Python, Java, algorithms and problem solving'],
    ['Format', 'A group of fifteen to twenty, or one to one'],
    ['Hours', 'Any day, any hour in Peru time'],
    ['First class', 'Free, no card asked for']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Learning to think, not copy, means a learner can predict what a program will do, trace it line by line on paper, explain each step aloud and test it on cases they chose, before the code counts as theirs. Modern Age Coders teaches coding this way in live online classes in English for learners in Peru, from children of 6 to teenagers, university students and adults, with mentors in India who adapt to each pace. Learners join a group of fifteen to twenty people of a similar age, or study one to one, at hours the family picks.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses built around reasoning',
    lede: 'One for children ready to type their first code, one for teenagers, and one for anyone over 18 starting from zero. Each is taught by asking the learner to predict and explain before running anything.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'LTNC / 01', title: 'Python and AI for kids', alt: 'Course thumbnail for Python and AI for Kids', note: 'For 9 to 12 year olds. Short programs a child can hold in their head, so every output is guessed first and then checked.' },
      { course: 'python-complete-masterclass-teens', code: 'LTNC / 02', title: 'Python for teens', alt: 'Course thumbnail for the complete Python masterclass for teens', note: 'Ages 13 to 17. From variables to functions, files and classes, with a trace table whenever a loop is new.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'LTNC / 03', title: 'Python from zero for adults', alt: 'Course thumbnail for the Python programming masterclass from zero to advanced', note: 'University students and adults. The same habits at a faster pace, from first script to data and automation.' }
    ]
  },

  sections: [
    {
      id: 'rooms',
      eyebrow: 'Where copying stops working',
      h2: 'Why does copying code fail Peruvian students when it matters?',
      lede: 'Because the tests that decide medals, places and scholarships in Peru are sat in person, on paper or on a locked machine, and most of them reward a worked answer rather than a lucky choice. Read their own rules and the pattern is plain.',
      body: [
        { kind: 'table', numCols: [], caption: 'Five Peruvian tests and the rule in each that makes copying useless, from the organisers\' own documents', head: ['Test', 'Who sets it', 'The rule, in the organiser\'s words', 'What it rewards'], rows: [
          ['ONEM 2026, school stage', 'MINEDU, via each UGEL', '"Consta de diez (10) ítems de respuesta construida cerrada"; "La prueba tiene una duración de dos (02) horas."', 'A number you worked out yourself, ten times, with no options to pick from'],
          ['OPI 2025, final (Fase 2)', 'UTEC', '"Se podr´a usar solo C++." and "Queda prohibido el uso de IA generativa para la resoluci´on de problemas."', 'Writing an algorithm from a blank file, without an assistant'],
          ['Universidad de Lima school exam 2027-1(A)', 'Universidad de Lima', 'A "prueba única de aptitud académica y de conocimientos", with marks taken away "por cada respuesta equivocada"', 'Knowing when you know; a guess costs marks'],
          ['UNI ordinary admission 2026-2', 'Universidad Nacional de Ingeniería', '"El examen es de manera presencial y consiste en tres pruebas tomadas en tres días"', 'Mathematics, physics and reasoning done by hand, under time'],
          ['PUCP admission', 'Pontificia Universidad Católica del Perú', 'Tests set "con especial énfasis en las áreas de comprensión lectora y matemáticas."', 'Reading a problem closely, then reasoning through it']
        ] },
        { kind: 'source', html: 'Sources: UGEL 06, Oficio Múltiple N.° 00164-2026 on the ONEM 2026 school stage; UTEC, Reglamento OPI 2025 (accents as printed in the PDF); Universidad de Lima, Guía del postulante Admisión 2027-1(A); UNI, Admisión 2026-2 page; PUCP, Guía del postulante. Each was read in its original Spanish on 9 November 2026. Modern Age Coders has no link to MINEDU, a UGEL, UTEC or any university, and promises neither medals nor places.' },
        { kind: 'two', mt: true,
          leftH3: 'The olympiads',
          left: [
            'ONEM is enormous. El Peruano reported on 11 October 2026 that the 2026 edition drew more than 1.7 million secondary students from its first stage, and that 237 finalists met for the national stage at Huampaní. Each school-stage paper in 2026 had two items per CNEB maths competency, and every answer was a value the student had to construct. Entry runs through the school.',
            'The Peruvian Computing Olympiad (OPI), run by UTEC, is free for every secondary student in the country. Its 2025 rules allow C++ or Python in the first phase and only C++ in the in-person final, and they ban generative AI for solving problems outright. Peru first sent students to the International Olympiad in Informatics in 2022; the IOI\'s own statistics show 13 Peruvian contestants and one bronze medal so far.'
          ],
          rightH3: 'The admission papers',
          right: [
            'Universidad de Lima\'s guide for the 2027-1(A) process describes one paper of academic aptitude and knowledge, scored by adding marks for each correct answer and subtracting for each wrong one, so guessing has a cost. Its school exam fell on Sunday 15 November 2026.',
            'UNI\'s ordinary exam for 2026-2 ran on 10, 12 and 14 August 2026, three papers on three days, one of them entirely mathematics. PUCP says its tests stress reading comprehension and maths. None of these papers is about programming, and all of them reward the same thing a good programmer has: the ability to hold a problem in your head and work it through.'
          ] },
        { kind: 'p', mt: true, html: 'Admission exams in Peru are in Spanish and we do not prepare candidates for their content. What we can honestly offer is the habit underneath them, practised in English through code and maths. For the school-year view of computing in secundaria, including MINEDU\'s Python pilot, our page on <a class="ag-inline-link" href="/programacion-para-5to-de-secundaria">programación para 5to de secundaria</a> goes further.' }
      ]
    },
    {
      id: 'habits',
      eyebrow: 'What thinking looks like',
      h2: 'What does it mean to learn to code by thinking instead of copying?',
      lede: 'It means four habits that a mentor can see and a parent can check. A learner who has them can sit in front of an empty file and start; a learner who only copies cannot, however many programs they have run.',
      body: [
        { kind: 'ol', items: [
          '<strong>Predict before running.</strong> The learner says, out loud and in English, what the program will print. Being wrong is useful: the gap between the guess and the output is exactly where the misunderstanding lives.',
          '<strong>Trace by hand.</strong> For anything with a loop, the learner writes a table with one column per variable and one row per step. It is slow on purpose. After a few weeks the table moves into their head, which is what an olympiad or an exam needs.',
          '<strong>Explain each line.</strong> "This line swaps the two numbers" is an explanation. "This line is from the example" is not. If a line cannot be explained, it is not kept, even when the program works.',
          '<strong>Test on cases you chose.</strong> Ordinary inputs, the smallest input, zero, the same value twice, the inputs in reverse order. The learner picks them before seeing whether the code passes.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'What a copier says', p: '"It works." Asked why, they point at the screen. Asked to change one requirement, they search again for a new answer.' },
          { h3: 'What a thinker says', p: '"It works for these five cases, and it would break if the list were empty, so I added a check." The sentence is longer, and it is theirs.' },
          { h3: 'What the mentor does', p: 'Asks short questions: what will this print, why this line, what if the input is zero. The mentor does not type the answer, even when it would be faster.' }
        ] },
        { kind: 'p', mt: true, html: 'Peru\'s national curriculum names a close cousin of these habits. Among the CNEB\'s competencies that cut across every subject is "Gestiona su aprendizaje de manera autónoma", managing one\'s own learning, with three capacities: define learning goals, organise strategic actions to reach them, and monitor and adjust one\'s own performance along the way. Predicting and then checking a program is that third capacity in miniature.' }
      ]
    },
    {
      id: 'lesson',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'What does a "think, don\'t copy" coding lesson look like?',
      lede: 'This lesson is ours, written for this page. Our mentors use it with teenagers from about 13 and with adults in their first months, and the maths is the greatest common divisor that Peruvian pupils meet in primaria. The point is not the answer, which any chatbot gives in a second. The point is being able to show why the answer is right.',
      body: [
        { kind: 'p', html: 'The problem, ours: two ribbons are 84 cm and 120 cm long, and we want to cut both into pieces of equal length, as long as possible, with nothing left over. The longest piece is the greatest common divisor of 84 and 120. The mentor first asks for a plan in plain English. Most learners say: start at the smaller number and count down until something divides both.' },
        { kind: 'code', label: 'Version 1: the honest brute force', lang: 'Python', code: V1, note: 'The function returns two things: the divisor it found and how many numbers it had to try. Before running, the mentor asks: how many checks for 1071 and 462?' },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: OUT1, note: 'Exact output from our own run with Python 3. The ribbons give 12 cm after 73 tries. The second pair gives 21, but only after 442 tries, because the search walks down one number at a time from 462.' },
        { kind: 'p', mt: true, html: 'Nothing is wrong with Version 1. It is correct and easy to explain, and that matters: a learner who wrote it understands it. But 442 checks for a three-digit pair is a warning. The mentor then shows Euclid\'s idea, more than two thousand years old: the greatest common divisor of two numbers is unchanged if you replace the larger one by the remainder of dividing it by the smaller one. Keep doing that until the remainder is zero.' },
        { kind: 'code', label: 'Version 2: Euclid, with its own trace table', lang: 'Python', code: V2, note: 'The program prints its own trace table: one row per pass of the loop, before the swap on the last line of the loop runs. The second call deliberately passes the numbers in the opposite order.' },
        { kind: 'code', label: 'What Version 2 prints', lang: 'Output', code: OUT2, note: 'Exact output from our own run. Three passes instead of 442 checks. With the numbers reversed there is one extra row: 462 % 1071 is 462, so the first pass simply swaps them.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Trace it on paper first.</strong> Before the learner runs Version 2, they fill in the three rows by hand: 1071 divided by 462 leaves 147; 462 divided by 147 leaves 21; 147 divided by 21 leaves 0. The program\'s table only confirms what they already wrote.',
          '<strong>Predict the surprise.</strong> "What happens if the smaller number comes first?" Most learners expect an error or a wrong answer. Tracing one row shows the loop fixes the order by itself, and the learner can say why.',
          '<strong>Read the swap.</strong> <code>a, b = b, a % b</code> computes both values on the right before assigning either. Written as two separate lines, <code>a = b</code> then <code>b = a % b</code>, it breaks, and finding out why is a five-minute lesson in its own right.',
          '<strong>Choose hard tests.</strong> The learner lists cases before running anything: a prime and a non-prime, a pair in reverse order, and pairs that contain zero.'
        ] },
        { kind: 'code', label: 'Version 3: test against the standard library', lang: 'Python', code: V3, note: 'Python\'s <code>math</code> module documents <code>gcd(*integers)</code> as the "Greatest common divisor of the integer arguments". Here it is used as an independent referee, never as a replacement for understanding.' },
        { kind: 'code', label: 'What Version 3 prints', lang: 'Output', code: OUT3, note: 'Exact output from our own run: six cases, six matches, including both orders of 1071 and 462 and the two pairs with a zero.' },
        { kind: 'p', mt: true, html: 'Then the mentor asks one last question: would Version 1 survive the same tests? A learner who traces <code>gcd_slow(0, 12)</code> by hand sees that <code>d</code> starts at 0, the loop never runs and the function returns nothing at all. Spotting that without running it is the skill we are after. A copied answer could not have told you, because the person who copied it never looked inside.' }
      ]
    },
    {
      id: 'ai',
      eyebrow: 'AI and copying',
      h2: 'Is using AI to write code the same as copying?',
      lede: 'Pasting AI output you cannot explain is copying, with a faster source. Using AI to check your reasoning, explain an error or suggest a test you missed is not. The line is the same one the four habits draw: if you cannot predict, trace and explain it, it is not yours yet.',
      body: [
        { kind: 'two',
          leftH3: 'How we use AI in class',
          left: [
            'Teenagers and adults meet AI tools in our classes after the basics are in place, never before. The order is fixed: the learner writes or traces their own version first, and only then asks an assistant, and the assistant\'s answer is treated as a claim to be tested, like Version 3 tests Version 2 above.',
            'The tools themselves have age rules. Claude requires users to be 18; ChatGPT asks under-18s for a parent\'s permission. Children under 13 in our classes do not use chatbots at all. Our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> lists what each tool\'s own terms say.'
          ],
          rightH3: 'Why the competitions ban it',
          right: [
            'The OPI rules ban generative AI for solving problems, and the ONEM paper is sat on paper in a school classroom. That is not hostility to technology. It is how an organiser finds out what a student can do alone, which is also what a university, an employer and, sooner or later, the student wants to know.',
            'A learner who has spent a year predicting and tracing finds these rules a relief: the room asks for exactly what they practise. A learner who has spent a year pasting finds the same room empty.'
          ] },
        { kind: 'p', mt: true, html: 'Families who want the full method for building with AI assistants, with tests written first, can read our Spanish page on <a class="ag-inline-link" href="/vibe-coding-curso-en-ingles">vibe coding en inglés</a>. It covers which tools suit each age and how a learner judges generated code.' }
      ]
    },
    {
      id: 'ages',
      eyebrow: 'By age',
      h2: 'At what age can a child learn to think like a programmer?',
      lede: 'From 6, in a form that suits the age. The habit of predicting and checking does not need typing; it needs a question asked before the green flag or the run button is pressed.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ages 6 to 8', p: 'Scratch blocks. "Where will the cat be after this loop?" The child points on the screen, then presses the flag. Being wrong and laughing about it is part of the lesson.' },
          { h3: 'Ages 9 to 12', p: 'Short Python programs and turtle drawings. Children write their guess in a notebook before running, and keep a list of surprises with one English sentence each.' },
          { h3: 'Ages 13 and up', p: 'Trace tables, test cases and algorithms such as the Euclid lesson above, then data structures. Teenagers who like competitions can aim at ONEM or OPI with problems we write ourselves.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults follow the teenage track at their own speed. A professional who has used spreadsheets for years often traces faster than a teenager, and is usually more frustrated by copied code they cannot fix at work. For teenagers in secundaria choosing what to study, our Spanish page on <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes</a> sets out the options by grade.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are these classes taught in Spanish?',
      lede: 'No. Each lesson is live and online, and English is the only teaching language. Our mentors, based in India, speak clearly, slow down when asked and match each learner\'s pace and accent. For this method, English is a help rather than a hurdle.',
      body: [
        { kind: 'two',
          leftH3: 'Explaining is the exercise',
          left: [
            'The habit at the centre of this page is explaining your code aloud. Doing it in English doubles the work in a useful way: the learner has to find the words, which forces them to find the idea first. "The remainder becomes the new divisor" is a sentence you cannot say without understanding it.',
            'Python\'s keywords and error messages are English already. A learner who explains code in English is reading the language the computer answers in.'
          ],
          rightH3: 'Starting with little English',
          right: [
            'Nobody needs to arrive fluent. Children start with short phrases and pictures; teenagers and adults get a word list per lesson. Mentors repeat in simpler words and write key terms in the chat.',
            'Parents may message us in Spanish on WhatsApp at any time. The classes stay in English.'
          ] }
      ]
    },
    {
      id: 'clock',
      eyebrow: 'Peru time',
      h2: 'What time are the classes in Peru?',
      lede: 'At the hour you choose. Our mentors work from India, and since neither Peru nor India changes its clocks during the year, the difference stays fixed.',
      body: [
        { kind: 'table', numCols: [], caption: 'Peru time converted to India time (examples only, not a class schedule)', head: ['Peru time', 'India time', 'Day in India'], rows: [
          ['7:00 a.m.', '5:30 p.m.', 'Same day'],
          ['10:00 a.m.', '8:30 p.m.', 'Same day'],
          ['12:30 p.m.', '11:00 p.m.', 'Same day'],
          ['3:00 p.m.', '1:30 a.m.', 'Next day'],
          ['5:30 p.m.', '4:00 a.m.', 'Next day'],
          ['7:30 p.m.', '6:00 a.m.', 'Next day']
        ] },
        { kind: 'source', html: 'Peru keeps UTC minus 5 all year with no summer time (tz database zone America/Lima); India keeps UTC plus 5:30, so India runs 10 hours 30 minutes ahead of Peru on every day of the year.' },
        { kind: 'p', mt: true, html: 'Secundaria students often pick an early evening hour after homework; university students and adults tend to choose early mornings or late evenings around lectures and work. You book on your own clock and the mentor converts.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How can you tell a learner is thinking, not copying?',
    lede: 'Five stages we use with learners in Peru. They are ours, not an official scale, and they describe behaviour a parent can watch for.',
    table: { caption: 'Five stages from copying to reasoning (our scale)', head: ['Stage', 'What the learner does', 'What to ask them'], rows: [
      ['1. Runs it', 'Runs code and reports whether it worked', '"What did you expect it to do?"'],
      ['2. Predicts it', 'Says the output before running, right or wrong', '"Why did you expect that?"'],
      ['3. Traces it', 'Fills a table of variables step by step for a short loop', '"Show me the row where it changes."'],
      ['4. Breaks it', 'Chooses inputs that might fail, such as zero or reversed order', '"Which input worries you most?"'],
      ['5. Starts blank', 'Writes a working solution from an empty file and explains it', '"Teach it to me in two minutes."']
    ] },
    left: { h3: 'For parents', ps: [
      'Pick one question from the right-hand column each week. You do not need to understand the code; listen for whether the answer is about ideas or about where the code came from.',
      'Moving from stage 2 to stage 3 usually takes the longest. Trace tables feel slow, and that slowness is the training.'
    ] },
    right: { h3: 'For learners', ps: [
      'Write your guess before you press run. Keep a list of the times you were wrong; it is the most useful page in your notebook.',
      'When something works on the first try, try to break it before celebrating.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses taught the same way',
    lede: 'Every one is live, in English, with one mentor, and every one asks for predictions and explanations before code counts.',
    bands: [
      { num: 'I', h3: 'Reasoning foundations', sub: 'Ages 6 to 14', courses: [
        { code: 'LTNC / BASE / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Puzzles, patterns and step-by-step plans before any syntax.' },
        { code: 'LTNC / BASE / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Logic and careful reading for the youngest learners.' },
        { code: 'LTNC / BASE / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths tested in Python, in the spirit of the Euclid lesson.' }
      ] },
      { num: 'II', h3: 'Contest and algorithm work', sub: 'Ages 12 to 17', courses: [
        { code: 'LTNC / CONTEST / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA for teens', blurb: 'Data structures and algorithms traced by hand, then coded.' },
        { code: 'LTNC / CONTEST / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming for teens', blurb: 'Timed problems in C++ or Python, with original practice sets.' },
        { code: 'LTNC / CONTEST / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Constructed answers and proof-style reasoning, no multiple choice.' }
      ] },
      { num: 'III', h3: 'University and adults', sub: '18 and over', courses: [
        { code: 'LTNC / ADULT / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The course behind most technical interviews, done properly.' },
        { code: 'LTNC / ADULT / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java for university students', blurb: 'Types, classes and testing, from first program to projects.' },
        { code: 'LTNC / ADULT / 03', slug: 'pcep-pcap-python-certification-course', title: 'PCEP and PCAP preparation', blurb: 'Python certification prepared by understanding, not memorised dumps.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How are the live classes run?',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Before school or work', l: 'Early slots in Peru time, when minds are fresh.' },
      { time: 'After homework', l: 'Evenings suit many secundaria students.' },
      { time: 'Your own hour', l: 'One-to-one classes at times you set.' }
    ],
    cells: [
      { h3: 'Guess first', p: 'Each new program starts with a spoken prediction.' },
      { h3: 'Paper allowed', p: 'Trace tables on paper or a shared screen, never skipped.' },
      { h3: 'Learner types', p: 'The mentor asks and points; the learner writes.' },
      { h3: 'Tests chosen in advance', p: 'Edge cases picked before the code is run.' },
      { h3: 'Same mentor', p: 'One person who learns how your child reasons.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty learners of a similar age, or one to one.' }
    ]
  },

  projectsH2: 'What reasoning leads to',
  projectsLede: 'Projects by some of our older students, built from blank files. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Families and students on Google, quoted exactly as they wrote.',

  fees: {
    h2: 'Fees for learners in Peru',
    lede: 'The monthly fee for each plan appears here in US dollars and is paid by card. Your bank turns it into soles at the rate it applies on the day, so the figure on your statement can move a little from month to month.',
    free: ['A free first class with a mentor', 'A short reasoning puzzle, not a sales talk', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar age', 'One mentor throughout', 'Two live classes a week', 'Paid monthly, stop at the end of any month'],
    one: ['The learner and a mentor alone', 'Pace set by how fast the habits form', 'Days and hours you choose']
  },

  faq: {
    eyebrow: 'Learners in Peru ask',
    h2: 'Learning to think, not copy: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Every class is live, online and in English only, taught by mentors in India who speak clearly and adjust to each learner\'s pace and accent. Explaining code aloud in English is part of the method, and parents can still write to us in Spanish on WhatsApp.' },
      { q: 'What does "think, not copy" mean in practice?', a: 'Before code counts as the learner\'s own, they predict its output, trace it step by step, explain every line and test it on cases they chose themselves. If any of the four is missing, the code is treated as borrowed, even when it runs.' },
      { q: 'Is it bad to look at example code?', a: 'No. Reading good code is how everyone learns. The rule is that an example is read, explained and then closed, and the learner writes their own version from memory. Typing it out line by line while looking is copying slowly.' },
      { q: 'Can my child use ChatGPT or other AI tools?', a: 'Children under 13 do not use chatbots in our classes. Teenagers use them later, with a parent\'s permission where the tool\'s terms ask for it, and only after writing their own version first. Claude\'s terms require users to be 18, so we use it only with adults.' },
      { q: 'Do you prepare students for ONEM or the OPI?', a: 'We teach the reasoning those competitions reward, with problems we write ourselves; we never reproduce an organiser\'s problems. ONEM entry is through the school, and the OPI is organised by UTEC. We are not connected with either and promise no results.' },
      { q: 'Will this help with university admission exams?', a: 'The habits help with any exam that rewards worked answers, but the admission exams of Peruvian universities are in Spanish and the universities decide admission. We offer maths reasoning practice in English alongside school, not exam preparation or a promise of a place.' },
      { q: 'What age can my child start?', a: 'From 6, with Scratch and spoken predictions. Typed Python usually starts around 9, and trace tables and algorithms from about 13. Adults of any age can start from zero.' },
      { q: 'What time are the classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Peru all year, so 10:00 a.m. in Lima is 8:30 p.m. in India.' },
      { q: 'Does my child need a computer?', a: 'Yes, a laptop or desktop with a keyboard, camera and microphone. A phone is fine for watching but too small for writing and tracing code. Paper and a pencil are useful too.' },
      { q: 'Do you give a certificate?', a: 'At the end of a course we give our own certificate of completion. It is not a Peruvian school grade or a qualification, and we are not connected with MINEDU or any school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More on reasoning and code',
    lede: 'Pages in English that go deeper into the method.',
    items: [
      { href: '/how-to-think-like-a-programmer', label: 'How to think like a programmer', p: 'The mental moves behind decomposing a problem.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'Finding a bug by reasoning rather than guessing.' },
      { href: '/how-to-actually-learn-to-code', label: 'How to actually learn to code', p: 'Why tutorials alone rarely stick.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Our teaching promise, in full.' },
      { href: '/learn-to-code-with-ai', label: 'Learn to code with AI', p: 'Using assistants without handing over the thinking.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Everything we teach in Peru, by age and subject.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is a conversation with a puzzle in it. The mentor gives a short problem, asks the learner to guess before running anything and watches how they reason, then suggests a course and a level. You leave with a clear idea of where to begin, whether or not you continue.',
    readFirst: 'Prefer to read more first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a live class, and the <a class="ag-inline-link" href="/courses">full course list</a> has every syllabus.',
    note: 'Live online classes with mentors in India, in English only. WhatsApp is quickest, and Spanish messages are welcome.',
    formNote: 'Free. No card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Courses on this page', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python and AI for kids' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python for adults' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Reasoning', links: [
        { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer' },
        { href: '/how-to-debug-code', label: 'Debugging' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Guess, trace, then run'
  },

  personalityCss: `
.ag-root.ag-ltnc .ag-hero h1 { letter-spacing: -0.02em; max-width: 19ch; }
.ag-root.ag-ltnc .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ltnc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ltnc .ag-section-head h2 { max-width: 24ch; }
.ag-root.ag-ltnc .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'UGEL 06 Oficio Múltiple 00164-2026 (ONEM 2026 school stage); El Peruano, 11 October 2026 (ONEM 2026 participation and national stage); UTEC, OPI home page and Reglamento OPI 2025; IOI statistics for Peru; Universidad de Lima, Guía del postulante 2027-1(A); UNI, Admisión 2026-2; PUCP, Guía del postulante; MINEDU, CNEB (competency 29); Python documentation, math module. Read 9 November 2026. The Euclid lesson, the five stages and the ribbon problem are our own.',
    localProject: 'Euclid\'s algorithm as a think-not-copy lesson: Version 1 brute force prints "(12, 73)" for 84 and 120 and "(21, 442)" for 1071 and 462; Version 2 prints its own trace table (1071 462 147 / 462 147 21 / 147 21 0, answer 21) and shows that reversed arguments only add one swapping row; Version 3 checks six cases against math.gcd, all True. The learner then predicts by hand that gcd_slow(0, 12) returns None. Set against the rules of Peruvian tests where copying is impossible.',
    requiredMentions: ['Five Peruvian tests and the rule in each that makes copying useless', '(21, 442)', '1071    462    147', '0 12 12 12 True', 'two ribbons are 84 cm and 120 cm long', 'Peru first sent students to the International Olympiad in Informatics in 2022', 'Five stages from copying to reasoning (our scale)', 'Guess, trace, then run', 'with three capacities: define learning goals'],
    sources: [
      { claim: 'ONEM 2026 school stage: ten closed constructed-response items, two per competency, two hours, Wednesday 8 July 2026.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'ONEM 2026 drew more than 1.7 million secondary students; 237 finalists at Huampaní on 11 October 2026.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'OPI is organised by UTEC and free for all secondary students.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'OPI 2025: Fase 2 C++ only; generative AI banned for solving problems.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'Peru at the IOI: first participation 2022, 13 contestants, one bronze medal.', url: 'https://stats.ioinformatics.org/countries/PER' },
      { claim: 'Universidad de Lima 2027-1(A): single aptitude and knowledge test, wrong answers subtract marks, exam 15 November 2026.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: 'UNI 2026-2: three in-person papers on three days, 10, 12 and 14 August 2026.', url: 'https://admision.uni.edu.pe/admision2026-2/index.html' },
      { claim: 'PUCP admission tests emphasise reading comprehension and maths.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' },
      { claim: 'CNEB competency 29, Gestiona su aprendizaje de manera autónoma, and its three capacities.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'math.gcd documented as the greatest common divisor of the integer arguments.', url: 'https://docs.python.org/3/library/math.html' }
    ],
    rejectedClaims: [
      'Reproducing any ONEM, OPI or Canguro problem: refused; the lesson problem (ribbons, 84 and 120) is ours.',
      'Admission preparation or a promise of a place: the admission exams are in Spanish and the universities decide; the page offers reasoning practice only.',
      'UNI and Universidad de Lima registration fees in soles: published by the universities but not repeated (no soles figures).',
      'A count of Peruvian students who copy homework or use AI to cheat: no primary source; not claimed.',
      'Any connection with MINEDU, a UGEL, UTEC or a university: none, said on the page.',
      'Spanish-language teaching: none; every class is in English.'
    ]
  }
};
