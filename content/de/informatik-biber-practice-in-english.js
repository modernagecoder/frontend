'use strict';
// Informatik-Biber practice in English (ag- competition spoke, Germany cluster row DE045), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. We are not connected with BWINF and we never reproduce Biber tasks or solutions.
// Spine: reason first, then let the computer check every case. Four original Biber-style puzzles (ours), two of them
// verified by exhaustive search in Python.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/informatik-biber-practice-in-english/
// and facts-school/src/, quoted strings grepped from the raw text, fetched 2 and 3 November 2026):
//  - bwinf.de/biber/: "Deutschlands größter Schülerwettbewerb im Bereich Informatik ... kostenfrei"; "Jahrgangsstufen 3
//    bis 13, keine Vorkenntnisse erforderlich"; "30-40 Minuten Teilnahmedauer"; "Über 580.000 Teilnehmende in 2025";
//    "Mehr als 3.224 Schulen in 2025" (FACTS 129 to 131, 137, 138).
//  - bwinf.de/biber/2026/: "Die Biberwochen 2026 finden vom 9. bis 20. November statt."; "Schnupper-Biber ab 14. September
//    2026"; "Der Biber wird 2026 zum 20. Mal durchgeführt."; "Rund 800 Aufgaben"; "In jeder Altersgruppe werden sechs
//    Aufgaben gestellt, und zur Bearbeitung stehen bis zu 30 Minuten zur Verfügung" (Schnupper-Biber); "Am ersten Biber,
//    im Jahr 2007, nahmen 21.802 Schülerinnen und Schüler teil"; "Versand der Urkunden und Preise (bis Ende 5. KW)".
//  - bwinf.de/aktuelles/termine/: "Dezember 2026: Veröffentlichung der Ergebnisse"; "Januar 2027: Versand der Urkunden
//    und Preise" (FACTS 136).
//  - bwinf.de/biber/faq/: "fünf Altersklassen ... 3 bis 4, 5 bis 6, 7 bis 8, 9 bis 10 und 11 bis 13"; "Teilnehmen können
//    alle deutschen Schulen im In- und Ausland"; "außerschulische oder erweiterte Lernorte ... Coding-Gruppen"; "Sie
//    können auch mit lediglich einer Schülerin oder einem Schüler teilnehmen"; "deutscher Partner der internationalen
//    'Bebras Challenge', die im Jahr 2004 in Litauen ins Leben gerufen wurde"; "Grundschüler lösen neun Aufgaben in 30
//    Minuten. In den Klassen 5 und 6 werden zwölf Aufgaben in 35 Minuten bearbeitet. Jugendliche ab Klasse 7 bearbeiten
//    15 Aufgaben in 40 Minuten."; "bis am Wochenende vor dem Wettbewerb"; computer or tablet, "ein Rechner/Tablet pro Team".
//  - bwinf.de/biber/teilnehmen/: "Schülerinnen und Schüler können sich jedoch nicht eigenständig zum Wettbewerb anmelden,
//    sondern ausschließlich über eine Ansprechperson der Schule oder Einrichtung"; "Einzelarbeit oder als Zweier-Team";
//    "für jede falsche Antwort werden Punkte abgezogen (mit Ausnahme der Jahrgangsstufen 3 und 4 ...)"; "In jeder
//    Altersgruppe gibt es drei Schwierigkeitsstufen"; "Alle Teilnehmenden (ab Stufe 5) haben zu Beginn ein positives
//    Punktekonto"; "an jedem Tag der Biber-Wochen zu einem selbst gewählten Zeitpunkt"; "Biberaufgaben aus den Jahren 2007
//    bis 2025".
//  - bwinf.de/biber/bibertests/: "Wählen Sie aus über 130 Aufgaben".
// Our own calculations (scratchpad de/w/G8/biber1.py and biber2.py, python3 -I): safe lantern signals for 3 to 7 lanterns
// 5, 8, 13, 21, 34; the 8 for four lanterns listed; tunnel exit orders possible 14 of 24, (3, 1, 4, 2) False. Outputs
// pasted below exactly as printed.
// Lesson family: reason first, then make the computer check every case (exhaustive search as a proof checker).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const LANTERNS = [
  'from itertools import product',
  '',
  'def safe(signal):',
  '    return "11" not in signal',
  '',
  'for n in range(3, 8):',
  '    signals = ["".join(s) for s in product("01", repeat=n)]',
  '    good = [s for s in signals if safe(s)]',
  '    print(n, "lanterns:", len(good), "safe signals")',
  '    if n == 4:',
  '        print("  ", " ".join(good))'
].join('\n');

const TUNNEL = [
  'from itertools import permutations',
  '',
  'def can_leave(order):',
  '    tunnel = []',
  '    waiting = [1, 2, 3, 4]',
  '    for beaver in order:',
  '        while beaver not in tunnel and waiting:',
  '            tunnel.append(waiting.pop(0))',
  '        if not tunnel or tunnel[-1] != beaver:',
  '            return False',
  '        tunnel.pop()',
  '    return True',
  '',
  'orders = list(permutations([1, 2, 3, 4]))',
  'possible = [o for o in orders if can_leave(o)]',
  'print("Possible exit orders:", len(possible), "of", len(orders))',
  'for test in [(4, 3, 2, 1), (2, 1, 4, 3), (3, 1, 4, 2), (1, 2, 3, 4)]:',
  '    print(test, can_leave(test))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'competition', label: 'Informatik-Biber practice' },
  slug: 'informatik-biber-practice-in-english',
  code: 'ibp',
  accent: '#702A52',
  accentRationale: 'Informatik-Biber practice: a deep mulberry #702A52, warm like a beaver lodge and clear of the Germany hub green, the Berlin brick and the AI plum; contrast 7.96 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Informatik-Biber practice in English',
  title: 'Informatik-Biber Practice in English for Pupils in Germany',
  description: 'Informatik-Biber practice in English for Klasse 3 to 13: the 2026 dates and rules from BWINF, how schools enter pupils, and four original puzzles with checks.',
  ogDescription: 'How the Informatik-Biber works in 2026, how a child in Germany takes part through a school, and four practice puzzles of our own with answers checked by a short Python program, taught live in English.',
  twitterDescription: 'Informatik-Biber 2026 explained for families in Germany, plus four original practice puzzles, taught live in English.',
  pageName: 'Informatik-Biber Practice in English',
  webPageDescription: 'A guide for families in Germany to the Informatik-Biber, the national informatics puzzle contest run by BWINF: who may enter, the 2026 timeline, the scoring rules, the German words a child will meet, and original practice puzzles with worked solutions and Python checks.',
  courseDescription: 'Live online Informatik-Biber preparation in English for pupils in Germany from Klasse 3 to 13: original puzzles on order, codes, stacks and hidden rules, solved by reasoning and checked by program, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Informatik-Biber practice',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#contest', label: 'The contest' },
    { href: '#entry', label: 'Entry' },
    { href: '#puzzles', label: 'Puzzles' },
    { href: '#words', label: 'German words' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Informatik-Biber &middot; Klasse 3 to 13',
  h1: 'Informatik-Biber practice in English',
  lede: 'The Informatik-Biber asks children to think like a computer scientist without writing a line of code: put things in order, spot a hidden rule, find the shortest way, decode a message. This page sets out what the contest is, how a pupil in Germany takes part in 2026, how the points work, and four puzzles we wrote ourselves, each solved by careful reasoning and then checked by a program that tries every case.',
  secondaryCta: { href: '#puzzles', label: 'Try our four puzzles' },
  wa: 'Hello Modern Age Coders, my child is at school in Germany and would like to practise for the Informatik-Biber in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; puzzles first, then the program that checks them',
  spec: [
    ['School years', 'Klasse 3 to 13'],
    ['Practice', 'Our own Biber-style puzzles'],
    ['Then', 'Short Python checks from about Klasse 5'],
    ['German times', 'Afternoons and weekend mornings'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Informatik-Biber practice at Modern Age Coders is a live online class in English for pupils in Germany from Klasse 3 to 13, part of our German Informatics Competitions course. Children solve original Biber-style puzzles on order, codes, queues and hidden rules, explain each answer aloud, then check it with a short program. One regular mentor matches the child\'s pace and accent, either in a group of fifteen to twenty pupils or alone with the child.',

  picks: {
    eyebrow: 'Where Biber practice starts',
    h2: 'Three courses for Biber puzzlers in Germany',
    lede: 'One built for the German contests themselves, one for younger children who need the thinking habits first, and one that turns puzzle sense into typed Python.',
    items: [
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'IBP / 01', title: 'German Informatics Competitions', note: 'Ages 9 to 19. Biber-style puzzles at the start, then the Jugendwettbewerb and Bundeswettbewerb, with a weekly problem set and a monthly mock contest.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'IBP / 02', title: 'Problem Solving for Kids', note: 'Ages 7 to 12. Patterns, sequences, sorting and logic grids, the thinking a Biber task rewards, at a calm pace for a first contest.' },
      { course: 'python-ai-kids-masterclass', code: 'IBP / 03', title: 'Python and AI for Kids', note: 'Ages 9 to 12. Typed Python from the first lesson, so a child can write the kind of checking program shown in the puzzles below.' }
    ]
  },

  sections: [
    {
      id: 'contest',
      eyebrow: 'The contest',
      h2: 'What is the Informatik-Biber, and who can take part?',
      lede: 'A free online puzzle contest for every school year from Klasse 3 to 13, run by the Bundesweite Informatikwettbewerbe (BWINF), which needs no programming knowledge at all.',
      body: [
        { kind: 'two',
          leftH3: 'What BWINF says it is',
          left: [
            'BWINF describes the Informatik-Biber as the largest school competition in informatics in Germany: an online quiz of puzzles that trains informatical thinking and costs nothing to enter. Its FAQ says the Biber is the German partner of the international Bebras Challenge, which began in Lithuania in 2004, and that the German contest has run since 2007.',
            'The 2026 round is the 20th. BWINF counts more than 580,000 participants in 2025 from more than 3,224 schools; at the first Biber in 2007 the figure was 21,802.'
          ],
          rightH3: 'Who may enter',
          right: [
            'Pupils of every school type from Klasse 3 to 13, with no prior knowledge needed. BWINF lists German schools in Germany and abroad, and also out-of-school learning places with a coordinator, such as open all-day schools, lunchtime clubs and coding groups.',
            'There is no minimum number: a school may take part with a single pupil. Pupils work alone or in pairs, on a computer or tablet with internet access, one device per team.'
          ] },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'The five Biber age groups and what each one solves', head: ['Age group (Klasse)', 'Tasks', 'Minutes'], rows: [
          ['3 and 4', '9', '30'],
          ['5 and 6', '12', '35'],
          ['7 and 8', '15', '40'],
          ['9 and 10', '15', '40'],
          ['11 to 13', '15', '40']
        ] },
        { kind: 'source', html: 'Source: BWINF, Informatik-Biber FAQ (bwinf.de/biber/faq/), which names the five age groups and the task counts and times. Read on 3 November 2026. Each age group has three levels of difficulty.' },
        { kind: 'p', mt: true, html: 'A Biber task is usually a short story with a picture: beavers sorting logs, a message hidden in coloured stones, a robot that follows arrows. Under the story sits a real idea from computer science, such as sorting, encoding, graphs or a stack. That is why the contest suits children who have never coded, and also why it is worth practising: the ideas repeat, even when the stories change.' }
      ]
    },
    {
      id: 'entry',
      tint: 'tint',
      eyebrow: 'Taking part in 2026',
      h2: 'How does a child in Germany enter the Biber in 2026?',
      lede: 'Only through a school or another registered institution. BWINF says plainly that pupils cannot sign themselves up; an adult at the school or club must act as coordinator.',
      body: [
        { kind: 'ol', items: [
          '<strong>A coordinator registers.</strong> From September a teacher, or another responsible adult at the institution, registers as coordinator at login.bwinf.de. BWINF says no knowledge of informatics is needed for this role.',
          '<strong>The coordinator enters the pupils.</strong> Pupils are added at admin.informatik-biber.de and each gets their own login. BWINF\'s FAQ says this can be done up to the weekend before the contest.',
          '<strong>Practice on the real platform.</strong> The Schnupper-Biber has been open since 14 September 2026: six tasks in each age group and up to 30 minutes, with the score shown at the end. It closes a few days before the contest.',
          '<strong>Sit the contest.</strong> The Biberwochen 2026 run from 9 to 20 November 2026. The school chooses any day and time within those two weeks, and the contest fits into a single lesson.',
          '<strong>Results and certificates.</strong> BWINF publishes results in December 2026 and sends certificates and prizes in January 2027. Every participant receives a certificate.'
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'The Informatik-Biber 2026 timeline, as BWINF publishes it', head: ['When', 'What happens', 'Who acts'], rows: [
          ['From September 2026', 'Coordinators register, then enter pupils', 'Teacher or club coordinator'],
          ['From 14 September 2026', 'Schnupper-Biber practice round opens', 'Registered pupils'],
          ['9 to 20 November 2026', 'Biberwochen: the contest itself', 'Pupils, at a time the school sets'],
          ['December 2026', 'Results published', 'BWINF'],
          ['January 2027', 'Certificates and prizes posted', 'BWINF, to the school']
        ] },
        { kind: 'source', html: 'Sources: BWINF, Informatik-Biber 2026 page (bwinf.de/biber/2026/), Termine page and Teilnehmen page, read on 2 and 3 November 2026. The order of steps is our own summary of those pages.' },
        { kind: 'two', mt: true,
          leftH3: 'If the school does not take part',
          left: [
            'Ask the class teacher or the Informatik teacher first; BWINF\'s FAQ says a coordinator can register at any time and that one pupil is enough. With the contest opening on 9 November 2026, a school that has not registered yet should do so soon, because pupils must be entered by the weekend before.',
            'BWINF also allows out-of-school places to take part with their own coordinator. That is a decision for that place and BWINF, not something a family can arrange alone.'
          ],
          rightH3: 'What we do and do not do',
          right: [
            'We are not connected with BWINF, we do not register pupils and we are not a Biber venue. Our part is the practice: puzzles of our own in the same spirit, explained in English, so that the real contest feels familiar.',
            'BWINF\'s own archive holds the Biber tasks from 2007 to 2025 with and without solutions, free on bwinf.de. We point families to it and never copy it into our lessons.'
          ] }
      ]
    },
    {
      id: 'scoring',
      eyebrow: 'Points',
      h2: 'How are Biber points counted, and does a wrong answer cost anything?',
      lede: 'It depends on the school year. The rule changes at Klasse 5, and it is the single most useful thing a child can know before the contest.',
      body: [
        { kind: 'two',
          leftH3: 'Klasse 3 and 4',
          left: [
            'Correct answers earn points and wrong answers cost nothing, according to BWINF\'s Teilnehmen page. A child in these years loses nothing by answering every task, so we teach them to give every question a sensible try before time runs out.'
          ],
          rightH3: 'From Klasse 5',
          right: [
            'A wrong answer now subtracts points, and an unanswered task leaves the score unchanged. To keep things fair, everyone starts with a positive balance, so the lowest possible result is zero. Harder tasks are worth more and cost more.',
            'For these pupils we practise one habit above all: check the answer against the story before you click.'
          ] },
        { kind: 'p', mt: true, html: 'The time limit matters too. Fifteen tasks in 40 minutes, the load from Klasse 7, leaves under three minutes a task, and the hardest ones need longer. Our practice rounds are timed in the same way so that a pupil learns to leave a stubborn task, finish the rest, and come back.' }
      ]
    },
    {
      id: 'puzzles',
      tint: 'tint',
      eyebrow: 'Practice, ours',
      h2: 'What do Biber puzzles train? Four practice puzzles of our own',
      lede: 'These four puzzles were written by Modern Age Coders for this page. They are not Biber tasks and are not taken from any contest. Each one is solved by reasoning first; for two of them we then let a program try every possible case, the habit that turns a good guess into a certain answer.',
      body: [
        { kind: 'two',
          leftH3: 'Puzzle 1: lantern signals (ours)',
          left: [
            'A beaver signals across the pond with four lanterns in a row, each on or off. Two lanterns that are on may never stand side by side, or their light runs together. How many different signals are possible?',
            '<strong>Worked solution.</strong> Count by the last lantern. If it is off, the first three can be any safe signal of three lanterns. If it is on, the one before must be off, and the first two can be any safe signal of two. Two lanterns give 3 safe signals and three give 5, so four give 5 + 3 = 8. Each new lantern adds the two previous counts together.'
          ],
          rightH3: 'Puzzle 2: the narrow tunnel (ours)',
          right: [
            'Beavers 1, 2, 3 and 4 wait in that order outside a tunnel so narrow that only the last one in can come out. A beaver may go in at any moment, and the beaver nearest the exit may leave at any moment. Which order of leaving is impossible: 4 3 2 1, 2 1 4 3, 3 1 4 2 or 1 2 3 4?',
            '<strong>Worked solution.</strong> For 3 to leave first, 1, 2 and 3 must all be inside, with 2 nearest the exit once 3 has gone. So 1 cannot come out next. The answer is 3 1 4 2. The tunnel is what computer scientists call a stack: last in, first out.'
          ] },
        { kind: 'code', label: 'Checking Puzzle 1: try every signal', lang: 'Python', code: LANTERNS, note: 'It prints <code>3 lanterns: 5 safe signals</code>, then <code>4 lanterns: 8 safe signals</code> followed by the eight signals <code>0000 0001 0010 0100 0101 1000 1001 1010</code>, then <code>5 lanterns: 13 safe signals</code>, <code>6 lanterns: 21 safe signals</code> and <code>7 lanterns: 34 safe signals</code>.' },
        { kind: 'p', mt: true, html: 'The program does not think; it simply writes down all sixteen on and off patterns for four lanterns and throws away the ones with two lights together. Eight survive, which agrees with the reasoning. Running it for longer rows shows the numbers 5, 8, 13, 21, 34, each the sum of the two before. Spotting that rule in the output and then explaining why it must hold is exactly the step from checking to understanding that we want a pupil to make.' },
        { kind: 'code', label: 'Checking Puzzle 2: every order of four beavers', lang: 'Python', code: TUNNEL, note: 'It prints <code>Possible exit orders: 14 of 24</code>, then <code>(4, 3, 2, 1) True</code>, <code>(2, 1, 4, 3) True</code>, <code>(3, 1, 4, 2) False</code> and <code>(1, 2, 3, 4) True</code>.' },
        { kind: 'p', mt: true, html: 'Of the 24 ways four beavers could leave, only 14 are possible through a last-in, first-out tunnel, and 3 1 4 2 is one of the ten that are not. The function copies what the beavers do: let beavers in until the one we want is inside, and fail if it is not the one nearest the exit.' },
        { kind: 'two', mt: true,
          leftH3: 'Puzzle 3: the hidden rule (ours)',
          left: [
            'A beaver stamps a code on each log: 2 becomes 4, 3 becomes 9, 5 becomes 25, and 10 becomes 100. A careless helper says 7 becomes 14. What should 7 become, and what mistake did the helper make?',
            '<strong>Worked solution.</strong> Every code is the number multiplied by itself, so 7 becomes 49. The helper saw only the first pair, where doubling and squaring give the same answer, and stopped checking. A rule is only safe when it fits every example.'
          ],
          rightH3: 'Puzzle 4: the shortest swim (ours)',
          right: [
            'Four lodges, A, B, C and D, are joined by channels: A to B takes 4 minutes, A to C takes 1, C to B takes 2, B to D takes 1 and C to D takes 5. What is the quickest swim from A to D?',
            '<strong>Worked solution.</strong> The direct-looking route A, C, D takes 6 minutes, and A, B, D takes 5. But A, C, B, D takes 1 + 2 + 1 = 4 minutes, the quickest. The route with the most stops wins, which is the lesson: compare every route, not only the obvious ones.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Start.</strong> Solve all four puzzles on paper and write one sentence on why each answer is right.',
          '<strong>Check.</strong> Run the two programs and compare their output with your answers.',
          '<strong>Stretch.</strong> Change the lantern rule so that three lights may not be on in a row. Predict the count for five lanterns before running the program.',
          '<strong>Explain.</strong> Tell someone at home, in your own words, why the tunnel is a stack and a queue at a bakery is not.'
        ] }
      ]
    },
    {
      id: 'words',
      eyebrow: 'In English, with the German words',
      h2: 'Can a child who learns in English prepare for the German Biber?',
      lede: 'Yes, as long as the German words that appear on the contest pages are not a surprise. BWINF\'s own pages, the task archive among them, are written in German, so our notes put each German term beside its English meaning.',
      body: [
        { kind: 'table', numCols: [], caption: 'German words a Biber family will meet, and what they mean (our glossary)', head: ['German', 'English', 'Where it appears'], rows: [
          ['Biberwochen', 'The two contest weeks', 'BWINF\'s 2026 page'],
          ['Schnupper-Biber', 'The practice round', 'From 14 September 2026'],
          ['Koordinator:in', 'The adult who registers the school', 'login.bwinf.de'],
          ['Altersgruppe, Stufe', 'Age group, school year', 'The five groups above'],
          ['Schwierigkeitsstufe', 'Level of difficulty', 'Three in each age group'],
          ['Punktabzug', 'Points taken off for a wrong answer', 'From Klasse 5'],
          ['Urkunde', 'Certificate', 'Posted in January 2027']
        ] },
        { kind: 'source', html: 'The German terms are the ones BWINF uses on bwinf.de, read on 3 November 2026. The English meanings and the table are ours.' },
        { kind: 'p', mt: true, html: 'Our classes are taught in English only. The mentor speaks clearly, slows down and rephrases, and checks that a child has understood rather than simply nodded. For a pupil whose school runs in German, the same class is extra English practice; for a pupil at an international school, the glossary closes the gap between English lessons and a German contest page. Puzzles are about ideas, not vocabulary, and the ideas cross languages easily.' }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Class times',
      h2: 'When can a Biber practice class run in German time?',
      lede: 'After school or on a weekend morning, which in India, where our mentors teach from, is the evening or the afternoon.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample German class times and the matching time in India', head: ['Lesson starts in Germany', 'Same moment in India until 27 March 2027', 'Same moment in India from 28 March 2027'], rows: [
          ['14:20', '18:50', '17:50'],
          ['15:40', '20:10', '19:10'],
          ['Saturday 09:00', '13:30', '12:30'],
          ['Sunday 10:30', '15:00', '14:00']
        ] },
        { kind: 'source', html: 'German clocks follow the Einheitenzeitgesetz: UTC+1 since summer time ended on 25 October 2026, and UTC+2 again from 28 March 2027. India keeps UTC+5:30 with no clock change, so a lesson there sits four and a half hours ahead of Germany this winter and three and a half hours ahead in summer.' },
        { kind: 'p', mt: true, html: 'Treat the rows as samples only; no batch is promised at these exact times. You book the free first class in your own clock, each group keeps the slot its families agreed, and one-to-one lessons shift around school, holidays and the contest weeks.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From a first Biber puzzle to a first contest program',
    lede: 'Milestones we set ourselves for the German informatics contests; the mentor uses them to choose a starting point and to tell parents what has changed.',
    table: { caption: 'Biber practice milestones (ours)', head: ['Stage', 'Typical school years', 'The pupil can'], rows: [
      ['1. Reading the story', 'Klasse 3 to 4', 'Restate a puzzle in their own words and say what is being asked'],
      ['2. Trying every case', 'Klasse 4 to 6', 'List all possibilities neatly and cross out the ones that break a rule'],
      ['3. Naming the idea', 'Klasse 5 to 9', 'Recognise a stack, a queue, a code or a shortest path inside a story'],
      ['4. Checking by program', 'Klasse 6 to 10', 'Write a short Python loop that tests every case and agrees with the reasoning'],
      ['5. Ready for the next contest', 'Klasse 7 and up', 'Move on to programming tasks like those of the Jugendwettbewerb Informatik']
    ] },
    left: { h3: 'For children', ps: [
      'Read the question twice. Half of all Biber mistakes are answers to a different question.',
      'If two answers look right, one of them breaks a rule hidden in the story. Find it.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your child to explain one puzzle to you each week. Explaining is where the learning sticks.',
      'Praise the method, not the score. The Biber rewards careful thinking, and so do we.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for young problem solvers in Germany',
    lede: 'All nine run live in English with the same mentor each week, and each can be taken in a group or privately.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Klasse 1 to 4', courses: [
        { code: 'IBP / FIRST / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Blocks, games and the order of instructions.' },
        { code: 'IBP / FIRST / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'A long path from blocks to small apps.' },
        { code: 'IBP / FIRST / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for quick, sure reasoning.' }
      ] },
      { num: 'II', h3: 'Growing puzzlers', sub: 'Klasse 5 to 7', courses: [
        { code: 'IBP / GROW / 01', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Real code and puzzle programs, 9 to 12.' },
        { code: 'IBP / GROW / 02', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik companion', blurb: 'School Informatik, Klasse 5 to 10, in English.' },
        { code: 'IBP / GROW / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns and counting, explored in Python.' }
      ] },
      { num: 'III', h3: 'Next contests', sub: 'Klasse 7 and up', courses: [
        { code: 'IBP / NEXT / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic, data structures and algorithms.' },
        { code: 'IBP / NEXT / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first program to contest-ready code.' },
        { code: 'IBP / NEXT / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Olympiade and Känguru', blurb: 'The maths contests, by Klassenstufe.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live Biber practice works for families in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Early and mid afternoon German time, for primary and lower secondary pupils.' },
      { time: 'Weekend mornings', l: 'Saturday or Sunday, a calm slot for younger children.' },
      { time: 'One to one', l: 'Arranged with the mentor around school and the contest weeks.' }
    ],
    cells: [
      { h3: 'Puzzles we write', p: 'Fresh tasks every week, never copied from a contest.' },
      { h3: 'Say it aloud', p: 'Each answer is explained before it counts.' },
      { h3: 'Checked by code', p: 'Older pupils test their reasoning with Python.' },
      { h3: 'German terms given', p: 'Contest words listed beside the English.' },
      { h3: 'Timed rounds', p: 'Practice at the real contest pace.' },
      { h3: 'One mentor', p: 'The same person follows your child all year.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'A few things our young students around the world have made; there are many more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Unedited Google reviews from our students and from the parents who booked their lessons.',

  fees: {
    h2: 'Fees for Biber practice classes',
    lede: 'One month means eight live lessons. We print the fee in euro, using the reference rate the European Central Bank publishes, yet the card payment is made in US dollars; your bank converts it, so its figure can be a few cents away from ours.',
    free: ['A free first class', 'Two of our puzzles at your child\'s level', 'No card needed'],
    group: ['Fifteen to twenty pupils of a similar age', 'One regular mentor', 'Two classes a week', 'Pay monthly, stop at any time'],
    one: ['Your child and one mentor', 'Puzzles chosen for your child', 'Times agreed together']
  },

  faq: {
    eyebrow: 'Families in Germany ask',
    h2: 'Informatik-Biber practice: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons happen live and in English only, and the mentor adapts to your child\'s pace and accent. Our handouts add the German words a child will see on the BWINF pages, such as Schnupper-Biber and Urkunde.' },
      { q: 'Can my child register for the Biber through you?', a: 'No. BWINF says pupils cannot sign themselves up; entry is only through a coordinator at the school or at another registered institution. We are not connected with BWINF and we do not register anyone. We prepare children for the contest.' },
      { q: 'When is the Informatik-Biber in 2026?', a: 'BWINF lists the Biberwochen 2026 as 9 to 20 November 2026. The school picks the day and time within those two weeks. Results follow in December 2026 and certificates in January 2027.' },
      { q: 'Does my child need to know how to code?', a: 'No. BWINF says no prior knowledge is needed, and the tasks are puzzles rather than programs. In our classes, older pupils also learn to check answers with short Python programs, because that makes the reasoning stronger.' },
      { q: 'Do wrong answers lose points?', a: 'From Klasse 5, yes: BWINF\'s rules subtract points for a wrong answer and leave an unanswered task at zero, with a positive starting balance so the total never drops below zero. In Klasse 3 and 4 nothing is taken off.' },
      { q: 'Do you use real Biber tasks in class?', a: 'No. We write our own puzzles in the same spirit, like the four on this page. BWINF publishes its old tasks from 2007 to 2025 free on its website, and we encourage families to try them at home.' },
      { q: 'What age is right to start?', a: 'The contest starts at Klasse 3. Children as young as 7 can join our problem solving course first, and the competitions course itself is for ages 9 to 19.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Younger children usually come straight after school or on a weekend morning.' },
      { q: 'How are fees paid?', a: 'You see the fee in euro, worked out from the European Central Bank\'s published reference rate, and you pay in US dollars. Your bank handles the conversion, so its statement may show a slightly different euro amount. The first class costs nothing and needs no card.' },
      { q: 'What comes after the Biber?', a: 'For pupils who enjoy it, BWINF runs the Jugendwettbewerb Informatik, where pupils program in a block environment, and the Bundeswettbewerb Informatik for real algorithm problems. Our competitions course follows the same path.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Germany with a young problem solver.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The overview of all our Germany pages.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'Berlin schools, times and a bike counter project.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Our German-language page on school Informatik support.' },
      { href: '/bebras-challenge-practice', label: 'Bebras Challenge practice', p: 'The international family the Biber belongs to.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class with us looks like.' },
      { href: '/student-labs', label: 'Student labs', p: 'Things our students have built.' }
    ]
  },

  start: {
    h2: 'Book a free Biber practice class',
    lede: 'In the first class the mentor gives your child two of our puzzles at the right level, listens to how they reason, and suggests where to begin, all in English and at your child\'s pace.',
    readFirst: 'Before booking you may like to read <a class="ag-inline-link" href="/how-we-teach">how our lessons work</a> or browse <a class="ag-inline-link" href="/courses">every course we run</a>.',
    note: 'Lessons are given live online, in English, by mentors who work from India. For a quick question, message us on WhatsApp in English.',
    formNote: 'The first class is free; we do not ask for a card.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/courses/german-informatics-competitions-course-biber-bwinf-bwki', label: 'German informatics competitions' },
        { href: '/courses/problem-solving-and-computational-thinking-for-kids', label: 'Problem solving for kids' },
        { href: '/bebras-challenge-practice', label: 'Bebras Challenge practice' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' }
      ] }
    ],
    bottomRight: 'Reason first, then check every case'
  },

  personalityCss: `
.ag-root.ag-ibp .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ibp .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ibp .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ibp .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-ibp .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Bundesweite Informatikwettbewerbe (BWINF): Informatik-Biber pages (overview, 2026, FAQ, Teilnehmen, Aufgaben, Bibertests) and the BWINF Termine page; Einheitenzeitgesetz. Read 2 and 3 November 2026.',
    localProject: 'Four original Biber-style puzzles (ours): lantern signals with no two lights together (8 for four lanterns, then 13, 21, 34), a last-in first-out tunnel (14 of 24 exit orders possible, 3 1 4 2 impossible), a squaring rule and a shortest swim, two of them checked by exhaustive search in Python. Lesson family: reason first, then make the computer check every case.',
    requiredMentions: ['4 lanterns: 8 safe signals', 'Possible exit orders: 14 of 24', '(3, 1, 4, 2) False', 'admin.informatik-biber.de', 'Biberwochen 2026 run from 9 to 20 November 2026', 'pupils cannot sign themselves up', 'at the first Biber in 2007 the figure was 21,802', 'Reason first, then check every case'],
    sources: [
      { claim: 'Biber overview: free, Klasse 3 to 13, no prior knowledge, 580,000+ participants and 3,224+ schools in 2025.', url: 'https://bwinf.de/biber/' },
      { claim: 'Biberwochen 9 to 20 November 2026, Schnupper-Biber from 14 September 2026, 20th edition.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Five age groups, task counts and times, schools abroad and out-of-school places, Bebras partner since 2004.', url: 'https://bwinf.de/biber/faq/' },
      { claim: 'No self-registration, pairs allowed, minus points from Klasse 5, archive 2007 to 2025.', url: 'https://bwinf.de/biber/teilnehmen/' },
      { claim: 'Results December 2026, certificates January 2027.', url: 'https://bwinf.de/aktuelles/termine/' }
    ],
    rejectedClaims: [
      'That the Biber tasks are set in English: not verified; the page says only that BWINF\'s pages are in German.',
      'BWINF\'s FAQ says primary pupils may take part since 2016 while a 2026 newsletter says since 2010: conflicting, neither used.',
      'Any affiliation with BWINF or any school: none, and the page says so.',
      'That we can register pupils or act as a Biber venue: we cannot and do not.',
      'Any reproduction of real Biber tasks: none; all four puzzles are our own.'
    ]
  }
};
