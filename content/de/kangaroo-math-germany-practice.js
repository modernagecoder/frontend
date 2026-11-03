'use strict';
// Kangaroo maths practice in Germany (ag- competition spoke, Germany cluster row DE050), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. We are not connected with the Mathematikwettbewerb Känguru e.V. and never reproduce
// Känguru problems. The per-pupil entry fee is the organiser's, collected by the school; no figure is printed here.
// Spine: when is a guess worth it? The Känguru's own scoring rule turned into exact expected gains with Python fractions,
// plus three original multiple-choice puzzles (ours) solved by ruling options out.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/kangaroo-math-germany-practice/ and
// facts-school/src/kaenguru; quoted strings grepped from the raw text, fetched 2 and 3 November 2026):
//  - mathe-kaenguru.de: "Känguru-Wettbewerb 2027 ausnahmsweise erst im April statt, und zwar am 8. April 2027" (reason:
//    the usual date falls right before the Easter holidays in almost all Länder); "Über 920.000 Schülerinnen und Schüler
//    aus mehr als 13.000 Schulen waren dabei" (19 March 2026); "rund 6 Millionen Teilnehmer in über 100 Ländern";
//    "am 3. Donnerstag im März"; "in 75 Minuten je 24 Aufgaben in den Klassenstufen 3/4 und 5/6 bzw. je 30 Aufgaben in den
//    Klassenstufen 7/8, 9/10 und 11–13"; "von 184 im Jahr 1995 auf über 920.000 im Jahr 2026"; Adventskalender "ab 1.
//    Dezember jeden Tag eine neue Aufgabe" (FACTS 183 to 188).
//  - mathe-kaenguru.de/wettbewerb/: "Die Aufgaben sind im Schwierigkeitsgrad ansteigend und mit 3, 4 oder 5 Punkten
//    bewertet."; "unter Aufsicht und ohne technische Hilfsmittel"; "Die Anmeldung erfolgt über die Schule durch eine
//    verantwortliche Lehrerin oder einen verantwortlichen Lehrer. Einzelanmeldungen sind ausgeschlossen."; "Teilnahmeberechtigt
//    sind Schulen, die mindestens 15 Teilnehmer melden können."; "Die Schülerinnen und Schüler nehmen in der Klassenstufe
//    teil, die ihrem Schulalter entspricht"; "In den Klassenstufen 3 bis 6 erhält jeder vorab eine Startpunktzahl von 24
//    Punkten; in den Klassenstufen 7 bis 13 beträgt die Startpunktzahl 30 Punkte."; "Für jede falsche Antwort gibt es ein
//    Viertel der vorgesehenen Punkte als Minuspunkte"; "Punktzahlen von 0 (wenn alles falsch ist) bis 120 bzw. 150";
//    "Die deutschlandweit besten ca. 5 Prozent"; "etwa im Verhältnis 1 : 2 : 3"; "Känguru-Sprung"; "Anmeldung der
//    Teilnehmerzahlen ... ab 1. Dezember 2026"; "Ende der Online-Eingabe ist am Freitag, dem 16. April 2027, um 18 Uhr";
//    "Die richtigen Lösungsbuchstaben werden am Freitag, dem 16. April 2027, um 19 Uhr auf unserer Webseite veröffentlicht";
//    answer letters "A, B, C, D, E ... sowie F für Mehrfachantworten"; the organiser "Mathematikwettbewerb Känguru e.V., der
//    seinen Sitz an der Humboldt-Universität zu Berlin hat".
//  - mathe-kaenguru.de home: "Online-Anmeldung: ab 01.12.2026 Anmeldeschluss: 31.01.2027" (FACTS 184).
//  - mathe-kaenguru.de/chronik/aufgaben/: "die Aufgaben seit 1998 als pdf-Dateien zum Herunterzuladen".
// Our own calculations (scratchpad de/w/G8/kg1.py, kg2.py, python3 -I), output pasted exactly:
//   Most points, Klasse 3 to 6: 120 / Most points, Klasse 7 to 13: 150
//   3 point task ... 0, 3/16, 1/2, 9/8 / 4 point task ... 0, 1/4, 2/3, 3/2 / 5 point task ... 0, 5/16, 5/6, 15/8
//   Puzzle 1: Thursday -> Saturday / Puzzle 2: 33 / Puzzle 3: 40
// Lesson family: expected value of a guess under the published scoring rule (decide when to answer, by elimination).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const GUESS = [
  'from fractions import Fraction',
  '',
  'print("Most points, Klasse 3 to 6:", 24 + 8 * 3 + 8 * 4 + 8 * 5)',
  'print("Most points, Klasse 7 to 13:", 30 + 10 * 3 + 10 * 4 + 10 * 5)',
  '',
  'for value in [3, 4, 5]:',
  '    gains = []',
  '    for ruled_out in range(4):',
  '        left = 5 - ruled_out',
  '        p_right = Fraction(1, left)',
  '        gain = p_right * value - (1 - p_right) * Fraction(value, 4)',
  '        gains.append(str(gain))',
  '    print(value, "point task, expected gain with 0 to 3 ruled out:", ", ".join(gains))'
].join('\n');

const PUZZLES = [
  'from datetime import date',
  'from itertools import combinations',
  '',
  'print("Puzzle 1:", date(2027, 4, 8).strftime("%A"), "->", date(2027, 5, 8).strftime("%A"))',
  'print("Puzzle 2:", sum(1 for n in range(1, 101) if n % 4 == 0 or n % 6 == 0))',
  'top = max(max(c) for c in combinations(range(1, 51), 5) if sum(c) == 50)',
  'print("Puzzle 3:", top)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'competition', label: 'Känguru der Mathematik practice' },
  slug: 'kangaroo-math-germany-practice',
  code: 'kmp',
  accent: '#67570B',
  accentRationale: 'Känguru der Mathematik practice: a dark olive ochre #67570B, the dry grass of a kangaroo\'s country and clear of the olympiad walnut; contrast 5.79 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Känguru der Mathematik practice in English',
  title: 'Känguru der Mathematik 2027: Practice in English, Germany',
  description: 'Känguru der Mathematik 2027 is on 8 April 2027. Dates, entry through school, the scoring rule, when a guess pays, and three original practice puzzles, in English.',
  ogDescription: 'The Kangaroo maths contest in Germany moves to 8 April 2027. How schools register, how the points work, why a blind guess is worth exactly nothing while an informed one is not, and three practice puzzles of our own.',
  twitterDescription: 'Känguru der Mathematik 2027 in Germany explained, with the maths of guessing and three original puzzles, taught live in English.',
  pageName: 'Känguru der Mathematik Practice in English',
  webPageDescription: 'A guide for families in Germany to the Känguru der Mathematik: the 2027 date and registration window, how a pupil takes part through school, the scoring rule and what it means for guessing, the organiser\'s free archive, and original multiple-choice practice with worked solutions.',
  courseDescription: 'Live online Känguru der Mathematik practice in English for pupils in Germany from Klasse 3 to 13: quick, careful multiple-choice reasoning by Klassenstufe, on original problems, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Känguru der Mathematik',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#contest', label: 'The contest' },
    { href: '#entry', label: 'Entry' },
    { href: '#points', label: 'Points' },
    { href: '#puzzles', label: 'Puzzles' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Känguru der Mathematik &middot; Klasse 3 to 13',
  h1: 'Känguru der Mathematik practice in English',
  lede: 'Each spring hundreds of thousands of pupils in Germany sit the same 75-minute maths paper on the same morning, ticking one letter per question. In 2027 the Känguru der Mathematik moves to 8 April. This page explains how a pupil takes part, how the points are counted, what the scoring rule means for guessing, worked out exactly, and three multiple-choice puzzles of our own, solved by ruling answers out.',
  secondaryCta: { href: '#points', label: 'See when a guess pays' },
  wa: 'Hello Modern Age Coders, my child is at school in Germany and would like to practise for the Känguru der Mathematik in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; quick thinking, checked carefully',
  spec: [
    ['Contest date', '8 April 2027'],
    ['School years', 'Klasse 3 to 13'],
    ['Format', '75 minutes, multiple choice'],
    ['German times', 'Afternoons and weekend mornings'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders runs Känguru der Mathematik practice as live online lessons in English for children in Germany, Klasse 3 to 13, inside our Mathematik-Olympiade and Känguru Training course. Each child meets original multiple-choice questions at the right Klassenstufe, learns to strike out wrong options, and rehearses the 75-minute pace. A regular mentor keeps to the child\'s pace and accent; lessons run for groups of fifteen to twenty or one child alone.',

  picks: {
    eyebrow: 'Where Känguru pupils start',
    h2: 'Courses that suit a Känguru child',
    lede: 'One made for the two German school maths contests, one built around international Kangaroo-style papers, and one for the quick number sense that the first questions reward.',
    items: [
      { course: 'mathematik-olympiade-and-kaenguru-training-course', code: 'KMP / 01', title: 'Mathematik-Olympiade and Känguru Training', note: 'Our German contest course, with batches in the five Känguru bands, from Klasse 3/4 up to 11 to 13, and the Olympiade as its second strand.' },
      { course: 'middle-school-math-competitions-course', code: 'KMP / 02', title: 'Middle School Maths Competitions', note: 'For children of about Klasse 5 to 9. Multiple-choice contest practice, Kangaroo-style papers included, under a clock.' },
      { course: 'mental-maths-mastery-kids', code: 'KMP / 03', title: 'Mental Maths for Kids', note: 'Ages 5 to 10. Number sense rather than tricks, for the 3-point questions a young child should never lose.' }
    ]
  },

  sections: [
    {
      id: 'contest',
      eyebrow: 'The contest',
      h2: 'What is the Känguru der Mathematik, and when is it in 2027?',
      lede: 'A multiple-choice maths contest written on one day, under supervision, at schools across Germany and in many other countries. In 2027 the date moves into April.',
      body: [
        { kind: 'two',
          leftH3: 'The 2027 date',
          left: [
            'The contest is usually held on the third Thursday in March. The organisers explain that in 2027 that date falls directly before the Easter holidays in almost all Länder, so the Känguru takes place as an exception on 8 April 2027.',
            'Schools register their numbers of participants online from 1 December 2026, and registration closes on 31 January 2027.'
          ],
          rightH3: 'How big it is',
          right: [
            'More than 920,000 pupils from more than 13,000 schools took part in Germany on 19 March 2026, according to the organisers, who note that the German figure has grown from 184 in 1995. Worldwide the organisers speak of about 6 million participants in over 100 countries.',
            'The contest is prepared and marked centrally by the Mathematikwettbewerb Känguru e.V., based at the Humboldt-Universität zu Berlin, and run locally by the schools.'
          ] },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'The Känguru paper by Klassenstufe', head: ['Klassenstufe', 'Questions', 'Minutes', 'Starting points'], rows: [
          ['3 and 4', '24', '75', '24'],
          ['5 and 6', '24', '75', '24'],
          ['7 and 8', '30', '75', '30'],
          ['9 and 10', '30', '75', '30'],
          ['11 to 13', '30', '75', '30']
        ] },
        { kind: 'source', html: 'Source: Mathematikwettbewerb Känguru e.V., mathe-kaenguru.de, home page and Wettbewerb page, read on 3 November 2026. The paper is written under supervision with no technical aids, and each pupil competes in the Klassenstufe of their school year.' }
      ]
    },
    {
      id: 'entry',
      tint: 'tint',
      eyebrow: 'Taking part',
      h2: 'How does a child in Germany enter the Känguru?',
      lede: 'Only through school. The organisers rule out individual registration, and a school must be able to enter at least 15 pupils.',
      body: [
        { kind: 'ol', items: [
          '<strong>A teacher takes it on.</strong> Each school needs a responsible teacher who informs pupils and parents, registers, collects the per-pupil entry fee and runs the day.',
          '<strong>Consent.</strong> Taking part is voluntary; the school needs the pupil\'s consent, or the parents\', before entering them.',
          '<strong>Registration.</strong> The teacher registers the number of pupils per Klassenstufe online between 1 December 2026 and 31 January 2027.',
          '<strong>Contest day.</strong> 8 April 2027, 75 minutes, at school, under supervision, without calculators or other aids. Pupils keep the question sheet so it can be discussed afterwards.',
          '<strong>Answers and results.</strong> Schools enter the answer letters online until Friday 16 April 2027 at 18:00. The organisers publish the correct letters the same day at 19:00, and the result packages reach schools from about three weeks after the contest.'
        ] },
        { kind: 'source', html: 'Source: Mathematikwettbewerb Känguru e.V., Wettbewerb and Ablauf pages on mathe-kaenguru.de, read on 3 November 2026. The steps are our summary of the organisers\' list.' },
        { kind: 'two', mt: true,
          leftH3: 'If your child\'s school does not take part',
          left: [
            'The simplest route is a word with the maths teacher well before 31 January 2027. A school needs at least 15 participants, which a single keen class can reach.',
            'There is no way to enter on your own: the organisers state plainly that individual registrations are excluded.'
          ],
          rightH3: 'Our part',
          right: [
            'We are not connected with the Mathematikwettbewerb Känguru e.V., we do not register pupils and we run no contest venue. We prepare children with problems we write ourselves.',
            'The organisers keep every Känguru paper since 1998 as free PDFs on their site, and run a daily puzzle Advent calendar from 1 December. We recommend both for practice at home.'
          ] }
      ]
    },
    {
      id: 'points',
      eyebrow: 'Points and guessing',
      h2: 'How are Känguru points counted, and should a child guess?',
      lede: 'The organisers publish the rule in full. Turned into numbers it gives a clear answer: a blind guess is worth exactly nothing on average, and a guess after ruling out even one wrong option is worth something.',
      body: [
        { kind: 'two',
          leftH3: 'The rule',
          left: [
            'Everyone starts with as many points as there are questions: 24 in Klasse 3 to 6, 30 from Klasse 7. Questions get harder through the paper. In the first third a right answer earns 3 points, in the second 4 and in the last 5. A question left blank scores 0, and a wrong answer costs a quarter of its value: 0.75, 1 or 1.25 points.',
            'That gives a range from 0, if every answer is wrong, to 120 or 150 if every answer is right.'
          ],
          rightH3: 'What a guess is worth (our calculation)',
          right: [
            'Each question has five options, A to E. A blind guess is right one time in five. On a 4-point question it gains 4 points one time in five and loses 1 point four times in five: on average exactly zero. The rule was built so that blind guessing neither helps nor hurts.',
            'Rule out one option and the guess is right one time in four. Now the average gain is positive. The program below works out every case exactly.'
          ] },
        { kind: 'code', label: 'The scoring rule, turned into expected gains', lang: 'Python', code: GUESS, note: 'It prints <code>Most points, Klasse 3 to 6: 120</code> and <code>Most points, Klasse 7 to 13: 150</code>, then <code>3 point task, expected gain with 0 to 3 ruled out: 0, 3/16, 1/2, 9/8</code>, <code>4 point task, expected gain with 0 to 3 ruled out: 0, 1/4, 2/3, 3/2</code> and <code>5 point task, expected gain with 0 to 3 ruled out: 0, 5/16, 5/6, 15/8</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3, 4], caption: 'Average points gained by answering instead of leaving a question blank (our calculation from the organisers\' rule)', head: ['Question value', 'Nothing ruled out', 'One ruled out', 'Two ruled out', 'Three ruled out'], rows: [
          ['3 points', '0', '3/16', '1/2', '9/8'],
          ['4 points', '0', '1/4', '2/3', '3/2'],
          ['5 points', '0', '5/16', '5/6', '15/8']
        ] },
        { kind: 'source', html: 'Rule: Mathematikwettbewerb Känguru e.V., Auswertung section of mathe-kaenguru.de/wettbewerb/, read on 3 November 2026; five answer letters A to E as accepted by the organisers\' online entry. The expected gains are our own exact arithmetic with Python fractions.' },
        { kind: 'p', mt: true, html: 'The first two lines of output are a check on our reading of the rule: 24 starting points plus eight questions each at 3, 4 and 5 gives 120, and 30 plus ten of each gives 150, exactly the maxima the organisers state. The table then turns into one sentence a child can remember: never guess blind, always guess after crossing one option out. With two options gone, a 5-point question is worth five sixths of a point on average, more than many children expect. That is why our Känguru practice is really practice in elimination: spotting, fast, which answers cannot be right.' }
      ]
    },
    {
      id: 'puzzles',
      tint: 'tint',
      eyebrow: 'Practice, ours',
      h2: 'What do Känguru-style questions train? Three practice puzzles of our own',
      lede: 'These three multiple-choice puzzles are our own work, made for this page, one for each part of a paper. None is a Känguru question. Each is solved by ruling options out before calculating.',
      body: [
        { kind: 'two',
          leftH3: 'Puzzle 1, a 3-point style question (ours)',
          left: [
            'The Känguru 2027 is on Thursday 8 April 2027. On which weekday is 8 May 2027? (A) Friday (B) Saturday (C) Sunday (D) Monday (E) Thursday',
            '<strong>Solution.</strong> April has 30 days, so 8 May is 30 days after 8 April. Thirty days is four weeks and two days. Thursday plus two days is Saturday: (B). Option (E) can be ruled out at once, because 30 is not a multiple of 7.'
          ],
          rightH3: 'Puzzle 2, a 4-point style question (ours)',
          right: [
            'How many of the numbers 1 to 100 are divisible by 4 or by 6? (A) 29 (B) 33 (C) 35 (D) 37 (E) 41',
            '<strong>Solution.</strong> 25 numbers are divisible by 4 and 16 by 6. Adding gives 41, but numbers divisible by both, which are the multiples of 12, are counted twice: there are 8. So 25 + 16 - 8 = 33: (B). Option (E) is the trap for anyone who forgets the overlap.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Puzzle 3, a 5-point style question (ours)',
          left: [
            'Five different positive whole numbers have an average of 10. What is the largest possible value of the biggest one? (A) 36 (B) 38 (C) 40 (D) 42 (E) 46',
            '<strong>Solution.</strong> Their total is 50. To make the biggest as large as possible, make the other four as small as possible: 1, 2, 3 and 4, which add to 10. The biggest is then 50 - 10 = 40: (C). Options (D) and (E) are impossible, since even the smallest four other numbers leave only 40.'
          ],
          rightH3: 'How we use puzzles like these',
          right: [
            'In class a child first says which options can be crossed out, and why, before working anything out. Only then do they calculate. On the real paper that habit turns a hard question from a blank into a well-informed guess.',
            'Older children then check their answers with a few lines of code, below. On contest day there is no computer, so the checking is a training tool only.'
          ] },
        { kind: 'code', label: 'Checking the three answers by brute force', lang: 'Python', code: PUZZLES, note: 'It prints <code>Puzzle 1: Thursday -&gt; Saturday</code>, <code>Puzzle 2: 33</code> and <code>Puzzle 3: 40</code>.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Puzzle 1, varied.</strong> Which weekday is 8 April 2028? Remember that 2028 is a leap year.',
          '<strong>Puzzle 2, varied.</strong> How many of the numbers 1 to 100 are divisible by 4 or 6 but not by both?',
          '<strong>Puzzle 3, varied.</strong> Now the five numbers may be equal. What is the largest possible biggest number?',
          '<strong>Timing.</strong> Solve all three originals in under eight minutes, the time a Klasse 7 pupil has for three questions of the real 30.'
        ] }
      ]
    },
    {
      id: 'prizes',
      eyebrow: 'After the contest',
      h2: 'What does every Känguru participant receive?',
      lede: 'Something, whatever the score. The organisers say no school or Land is compared with another; the aim is mathematical life at school.',
      body: [
        { kind: 'table', numCols: [], caption: 'Känguru recognition, as the organisers describe it', head: ['Who', 'What they receive'], rows: [
          ['Every participant', 'A certificate with their score, a booklet with the questions, solutions and extra puzzles, and a small game, the prize for everyone'],
          ['Longest run at each school', 'A Känguru T-shirt for the longest run of consecutive correct answers, the Känguru-Sprung'],
          ['About the top 5 percent nationally', 'First, second and third prizes, set for each Klassenstufe in a ratio of about 1 to 2 to 3'],
          ['The strongest of Klasse 7 to 10', 'Invitations to maths events with young people from other countries']
        ] },
        { kind: 'source', html: 'Source: Mathematikwettbewerb Känguru e.V., Preise and Auswertung sections of mathe-kaenguru.de/wettbewerb/, read on 3 November 2026. From Klasse 7 the booklet usually comes as a digital file.' },
        { kind: 'p', mt: true, html: 'The Känguru-Sprung is a lovely detail for a practice plan. It rewards a long unbroken run of correct answers, which is easier to build at the start of the paper, where the questions are worth 3 points and are meant to be within reach of school knowledge. Our timed rounds teach children to bank those first questions calmly before moving on.' }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Class times',
      h2: 'When can Känguru practice run in German time?',
      lede: 'Straight after school or on a weekend morning. In India, where our mentors teach, those hours fall in the late afternoon or evening.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample times for Känguru practice', head: ['In Germany', 'In India to 27 March 2027', 'In India from 28 March 2027'], rows: [
          ['14:40', '19:10', '18:10'],
          ['16:20', '20:50', '19:50'],
          ['Saturday 10:15', '14:45', '13:45'],
          ['Sunday 11:45', '16:15', '15:15']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz sets German winter time at UTC+1 from 25 October 2026 and summer time at UTC+2 from 28 March 2027, eleven days before the contest. India stays on UTC+5:30, so the difference is four and a half hours, then three and a half.' },
        { kind: 'p', mt: true, html: 'The table shows possibilities, not fixed batch times. In the weeks before 8 April 2027 many families add a weekend timed paper, and one-to-one lessons can move to fit it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From a first multiple-choice paper to a calm 75 minutes',
    lede: 'Our own milestones for Känguru pupils; the mentor sets the starting point from them and reports progress against them.',
    table: { caption: 'Känguru practice milestones (ours)', head: ['Stage', 'Typical school years', 'The pupil can'], rows: [
      ['1. Reading the question', 'Klasse 3 to 4', 'Say in their own words what is asked before looking at the options'],
      ['2. Ruling out', 'Klasse 3 to 6', 'Cross out impossible options and say why'],
      ['3. The first third', 'Klasse 4 to 8', 'Solve the 3-point questions quickly and without slips'],
      ['4. Choosing to answer', 'Klasse 5 and up', 'Decide when to answer and when to leave a question, using the scoring rule'],
      ['5. A full paper', 'Klasse 5 and up', 'Pace a full 75-minute paper, with time to check']
    ] },
    left: { h3: 'For children', ps: [
      'Never guess blind. Cross one option out first, then guess.',
      'Bank the first questions. They are worth fewer points, but every one counts.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask the maths teacher before the end of January whether the school is registered.',
      'Print an old paper from the organisers\' archive and do the first eight questions together over breakfast.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more maths courses for children in Germany',
    lede: 'Live, in English, with the same mentor every week, either in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Younger children', sub: 'Klasse 1 to 4', courses: [
        { code: 'KMP / YOUNG / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary maths', blurb: 'School maths, Klasse 1 to 5, in English.' },
        { code: 'KMP / YOUNG / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic grids and sequences for young puzzlers.' },
        { code: 'KMP / YOUNG / 03', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'A playful first step into coding.' }
      ] },
      { num: 'II', h3: 'Middle years', sub: 'Klasse 5 to 9', courses: [
        { code: 'KMP / MID / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'Fractions, equations and shapes, in depth.' },
        { code: 'KMP / MID / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Counting and chance explored in Python.' },
        { code: 'KMP / MID / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Maths olympiad', blurb: 'For children ready for harder contests.' }
      ] },
      { num: 'III', h3: 'Upper school', sub: 'Klasse 10 to 13', courses: [
        { code: 'KMP / UPPER / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'From algebra to calculus.' },
        { code: 'KMP / UPPER / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Expected value, properly.' },
        { code: 'KMP / UPPER / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur maths in English', blurb: 'For the Oberstufe, alongside school.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live Känguru practice works',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Early to mid afternoon German time, for younger children.' },
      { time: 'Weekend morning', l: 'Saturday or Sunday, good for a full timed paper.' },
      { time: 'One to one', l: 'Arranged with the mentor, more often before 8 April 2027.' }
    ],
    cells: [
      { h3: 'Our own questions', p: 'Fresh multiple-choice problems every week.' },
      { h3: 'Cross out first', p: 'Every answer starts with elimination.' },
      { h3: 'Timed rounds', p: 'Practice at the 75-minute pace.' },
      { h3: 'The scoring rule', p: 'Children know when a guess is worth it.' },
      { h3: 'Clear English', p: 'Explained slowly, rephrased when needed.' },
      { h3: 'One mentor', p: 'The same teacher who knows your child.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Alongside maths, our students build projects; see a few below and many more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Students and parents reviewed us on Google; here are their words, untouched.',

  fees: {
    h2: 'Fees for Känguru practice classes',
    lede: 'One month is eight live lessons. We state the fee in euro from the European Central Bank\'s reference rate, while the payment is made in US dollars and converted by your bank, so your statement may show a slightly different euro sum.',
    free: ['A free first class', 'A short set of our questions at your child\'s level', 'No card needed'],
    group: ['Fifteen to twenty children in the same Klassenstufe band', 'One regular mentor', 'Two classes a week', 'Pay by the month, stop when you like'],
    one: ['Your child and one mentor', 'Practice papers paced for your child', 'Times agreed together']
  },

  faq: {
    eyebrow: 'Families in Germany ask',
    h2: 'Känguru der Mathematik practice: common questions',
    items: [
      { q: 'When is the Känguru der Mathematik 2027?', a: 'On 8 April 2027. The organisers moved it from the usual third Thursday in March because that date falls right before the Easter holidays in almost all Länder in 2027. Schools register from 1 December 2026 to 31 January 2027.' },
      { q: 'Can I register my child myself?', a: 'No. The organisers say registration is only through the school, by a responsible teacher, and individual registrations are excluded. A school needs at least 15 participants. Modern Age Coders has no link with the Känguru e.V. and registers nobody.' },
      { q: 'Are the classes in German?', a: 'No. Lessons are live and in English only, and the mentor keeps to your child\'s speed and accent. Our worksheets print the German maths terms next to the English ones, so a German paper still looks familiar.' },
      { q: 'Should my child guess on the Känguru?', a: 'Not blindly. Under the organisers\' rule a wrong answer costs a quarter of the question\'s value, so on our calculation a blind guess among five options gains nothing on average. After ruling out at least one option, answering gains points on average.' },
      { q: 'How many questions are there?', a: 'The organisers set 24 questions for Klasse 3/4 and 5/6, and 30 for Klasse 7/8, 9/10 and 11 to 13, all in 75 minutes, worth 3, 4 or 5 points each.' },
      { q: 'Do you use real Känguru questions?', a: 'No. We write our own questions in the same style. The organisers publish every paper since 1998 as free PDFs on mathe-kaenguru.de, which are good practice at home.' },
      { q: 'Can a child in Klasse 1 or 2 take part?', a: 'The organisers say interested younger children who can work alone may start in Klassenstufe 3. Our mental maths and elementary maths courses are a gentle start.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Younger children usually come right after school.' },
      { q: 'How do fees work?', a: 'The euro fee is calculated from the European Central Bank\'s reference rate, and we take the payment in US dollars; your bank converts it, so the amount it shows can vary a little. The first class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for children in Germany who enjoy maths and puzzles.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for families in Germany.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'For older pupils heading to the Abitur.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'Puzzles, Scratch and a Berlin data project.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Informatik at school, explained in German.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live class.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects by our students.' }
    ]
  },

  start: {
    h2: 'Book a free Känguru practice class',
    lede: 'During the trial lesson your child tries a handful of our questions, the mentor watches which options get crossed out and why, and you hear afterwards which band and course would fit.',
    readFirst: 'For more first, there is <a class="ag-inline-link" href="/how-we-teach">a page on how we teach</a> and <a class="ag-inline-link" href="/courses">an overview of every course</a>.',
    note: 'Every lesson is live online, in English, with mentors working from India. Write to us on WhatsApp, in English, for a fast answer.',
    formNote: 'We ask for no card for the free first class.'
  },

  footer: {
    cols: [
      { h4: 'Maths contests', links: [
        { href: '/courses/mathematik-olympiade-and-kaenguru-training-course', label: 'Olympiade and Känguru training' },
        { href: '/courses/middle-school-math-competitions-course', label: 'Middle school competitions' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths for kids' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' }
      ] }
    ],
    bottomRight: 'Cross one out, then guess'
  },

  personalityCss: `
.ag-root.ag-kmp .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-kmp .ag-capsule { border-left-width: 6px; }
.ag-root.ag-kmp .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-kmp .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-kmp .ag-grid-2 h3 { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Mathematikwettbewerb Känguru e.V. (mathe-kaenguru.de: home, Wettbewerb with Anmeldung, Ablauf, Auswertung and Preise, Aufgaben archive); Einheitenzeitgesetz. Read 2 and 3 November 2026.',
    localProject: 'When does a guess pay: the Känguru scoring rule (start 24 or 30, 3/4/5 points, minus a quarter for a wrong answer) checked against the published maxima 120 and 150 and turned into exact expected gains with Python fractions (0 for a blind guess; 3/16, 1/4, 5/16 with one option ruled out), plus three original multiple-choice puzzles solved by elimination and checked by brute force. Lesson family: expected value of a guess under a published scoring rule.',
    requiredMentions: ['Most points, Klasse 7 to 13: 150', '4 point task, expected gain with 0 to 3 ruled out: 0, 1/4, 2/3, 3/2', 'Puzzle 1: Thursday -&gt; Saturday', 'individual registrations are excluded', 'at least 15 participants', 'Friday 16 April 2027 at 18:00', 'from 184 in 1995', 'Cross one out, then guess'],
    sources: [
      { claim: '8 April 2027 and the reason; 920,000+ pupils and 13,000+ schools in 2026; questions and 75 minutes by Klassenstufe; registration 1 December 2026 to 31 January 2027.', url: 'https://www.mathe-kaenguru.de/' },
      { claim: 'Scoring rule, school-only entry, 15-pupil minimum, online answer entry until 16 April 2027, prizes.', url: 'https://www.mathe-kaenguru.de/wettbewerb/index.html' },
      { claim: 'Free archive of papers since 1998.', url: 'https://www.mathe-kaenguru.de/chronik/aufgaben/index.html' }
    ],
    rejectedClaims: [
      'The per-pupil entry fee figure: the organiser\'s, collected by schools; not printed under the Germany price rule.',
      'Prize point thresholds for 2026: published per Klassenstufe by the organisers but not reproduced.',
      'How multiple answers (letter F) are scored: not stated on the pages read; not described.',
      'Any affiliation with the Mathematikwettbewerb Känguru e.V.: none.',
      'Reproducing any Känguru question: none; all three puzzles are our own.'
    ]
  }
};
