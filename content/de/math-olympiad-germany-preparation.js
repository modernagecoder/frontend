'use strict';
// Math olympiad Germany preparation (ag- competition spoke, Germany cluster row DE049), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. We are not connected with the Mathematik-Olympiaden e.V. or Bildung & Begabung, and we never
// reproduce MO problems or solutions (the organiser allows only non-commercial sites to republish, and we are commercial).
// Spine: a computer check is evidence, a proof is the answer. Three original problems by Klassenstufe (ours), each with a
// full written solution, and one Python program that checks small cases without proving anything.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/math-olympiad-germany-preparation/ and
// facts-school/src/mo-bw, moev, mathe-wb; quoted strings grepped from the raw text, fetched 2 and 3 November 2026):
//  - mathe-wettbewerbe.de/mo: "jährlich rund 200.000 Schülerinnen und Schüler"; "Klassenstufen 5 bis 7 in drei, ab
//    Klassenstufe 8 in vier Runden"; "Für die Klassen 3 bis 7 endet der Wettbewerb mit der Landesrunde"; "Seit 2005 wird die
//    Mathematik-Olympiade auch für die Grundschulen angeboten"; "Die Schulrunde startet jährlich zum Beginn des neuen
//    Schuljahres, frühestens am 1. August"; "Interessierte Schülerinnen und Schüler wenden sich direkt an die Fachlehrerin
//    oder den Fachlehrer ihrer Schule"; "Wer die Schulrunde erfolgreich beendet, wird zur Regionalrunde eingeladen, die im
//    November stattfindet. Schülerinnen und Schüler bearbeiten vier Aufgaben an einem zentralen Ort"; Landesrunde "Ende
//    Februar als ein- oder zweitägiger Klausurwettbewerb"; "Mannschaften von bis zu 15 Schülerinnen und Schülern ab
//    Klassenstufe 8"; "Seit 2014 zählen auch fünf Gäste aus deutschen Auslandsschulen dazu"; "An zwei Tagen knobeln rund 200
//    Mathematikbegeisterte an jeweils drei Aufgaben in viereinhalbstündigen Klausuren"; "Zur Bundesrunde der 66.
//    Mathematik-Olympiade lädt Rheinland-Pfalz vom 30. Mai bis 02. Juni 2027 nach Kaiserslautern ein."; costs: "sodass für
//    die Teilnehmenden keine Kosten entstehen"; "rund 150 verschiedene Aufgaben ... rund 60 Mathematikerinnen und
//    Mathematikern" (FACTS 162 to 168).
//  - mathematik-olympiaden.de/moev: "Der Verein ist Träger der Mathematik-Olympiade in Deutschland."; "Regionalrunde:
//    11.11.2026"; "Landesrunde: 26. – 28.02.2027 Bundesrunde: 30.05. – 02.06.2027" (FACTS 165, 166, 169).
//  - mathematik-olympiaden.de aktuelle Aufgaben: "Aufgaben Klassenstufen 5 - 12: online verfügbar ab 01.12.2026".
//  - mathematik-olympiaden.de Aufgabenarchiv: "Auf nicht-kommerziellen Internetangeboten ist es gestattet, Aufgaben
//    einzelner Jahrgänge (maximal 3) in unveränderter Form und ohne Lösung zu veröffentlichen".
//  - mathe-wettbewerbe.de/imo: AIMO decides the six-person IMO team (FACTS 180); mathe-wettbewerbe.de/bwm (FACTS 170).
// Our own calculations (scratchpad de/w/G8/mo1.py, python3 -I), output pasted exactly:
//   A: 15 / B: 18 all divisible by 9: True / C: divisible by 11: 909 all with n % 11 == 4: True / C: divisible by 121: 0
// Lesson family: write the full proof; a computer check of small cases is evidence, never the proof.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const CHECK = [
  'def digit_sum(n):',
  '    return sum(int(d) for d in str(n))',
  '',
  '# Problem A: three-digit numbers whose digits add up to 5',
  'print("A:", sum(1 for n in range(100, 1000) if digit_sum(n) == 5))',
  '',
  '# Problem B: smallest n > 9 with the same digit sum as 2n, and a check on 9',
  'balanced = [n for n in range(10, 100000) if digit_sum(n) == digit_sum(2 * n)]',
  'print("B:", balanced[0], "all divisible by 9:", all(n % 9 == 0 for n in balanced))',
  '',
  '# Problem C: n*n + 3n + 5 for n = 1 to 10000',
  'f = [(n, n * n + 3 * n + 5) for n in range(1, 10001)]',
  'by_11 = [n for n, v in f if v % 11 == 0]',
  'print("C: divisible by 11:", len(by_11), "all with n % 11 == 4:", all(n % 11 == 4 for n in by_11))',
  'print("C: divisible by 121:", sum(1 for n, v in f if v % 121 == 0))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'competition', label: 'Mathematik-Olympiade preparation' },
  slug: 'math-olympiad-germany-preparation',
  code: 'mol',
  accent: '#6E3D22',
  accentRationale: 'Mathematik-Olympiade preparation: a dark walnut brown #6E3D22, the colour of a well-used pencil and old exam paper, clear of the informatics blues and violets; contrast 7.24 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Mathematik-Olympiade preparation in English',
  title: 'Mathematik-Olympiade Preparation in English, Germany',
  description: 'The Mathematik-Olympiade 2026 to 2027: rounds, dates, how pupils enter through school, what proofs earn marks, and three original problems with full solutions.',
  ogDescription: 'Germany\'s Mathematik-Olympiade explained from the organisers\' own pages: the 66th round from the Schulrunde to the Bundesrunde in Kaiserslautern, how a pupil takes part, why written proofs matter, and three practice problems of our own by Klassenstufe.',
  twitterDescription: 'The Mathematik-Olympiade 2026 to 2027 explained, with three original problems and full proofs, taught live in English.',
  pageName: 'Mathematik-Olympiade Preparation in English',
  webPageDescription: 'A guide for families in Germany to the Mathematik-Olympiade: the four rounds of the 66th olympiad in 2026 and 2027, who may enter and how, what the papers ask for, where the organisers publish old problems, and original practice problems with complete written solutions and a Python check of small cases.',
  courseDescription: 'Live online Mathematik-Olympiade preparation in English for pupils in Germany from Klasse 3 to 13: problem solving and written proof by Klassenstufe, on original problems, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Mathematik-Olympiade',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#rounds', label: 'Rounds' },
    { href: '#entry', label: 'Entry' },
    { href: '#proof', label: 'Proofs' },
    { href: '#problems', label: 'Problems' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; Mathematik-Olympiade &middot; Klasse 3 to 13',
  h1: 'Mathematik-Olympiade preparation in English',
  lede: 'The Mathematik-Olympiade is Germany\'s large maths olympiad for schools, and it is not a test of speed. Its papers ask for answers that are argued, step by step, on paper. This page sets out the 66th olympiad from its organisers\' pages, how a pupil takes part through school, what a full written solution looks like, and three problems of our own, one for each age band, with complete proofs and a short program that checks the small cases without proving anything.',
  secondaryCta: { href: '#problems', label: 'Try the three problems' },
  wa: 'Hello Modern Age Coders, my child is at school in Germany and would like to prepare for the Mathematik-Olympiade in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; every answer argued, not just found',
  spec: [
    ['School years', 'Klasse 3 to 13, by Klassenstufe'],
    ['Focus', 'Written solutions and proof'],
    ['Problems', 'Our own, never copied'],
    ['German times', 'Afternoons and weekend mornings'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Mathematik-Olympiade preparation at Modern Age Coders is a live online maths class in English for pupils in Germany from Klasse 3 to 13, through our Mathematik-Olympiade and Känguru Training course. Pupils solve original problems pitched at their Klassenstufe and learn to write the full, argued solutions the olympiad papers mark. A regular mentor matches each pupil\'s pace and accent, in groups of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Where olympiad pupils start',
    h2: 'Three courses for Mathematik-Olympiade pupils',
    lede: 'One shaped around the German contests, one for teenagers who want to reach the international level, and one for younger pupils who are new to competition problems.',
    items: [
      { course: 'mathematik-olympiade-and-kaenguru-training-course', code: 'MOL / 01', title: 'Mathematik-Olympiade and Känguru Training', note: 'Ages 8 to 18, grouped by Klassenstufe. Written proofs for the Olympiade, quick reasoning for the Känguru, weekly problems with one full solution.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'MOL / 02', title: 'Maths Olympiad and Competition', note: 'For strong teenagers. Number theory, combinatorics, geometry and inequalities at olympiad depth, up to the level of international papers.' },
      { course: 'middle-school-math-competitions-course', code: 'MOL / 03', title: 'Middle School Maths Competitions', note: 'Roughly ages 10 to 14. A first season of competition problems, for pupils who find school maths too easy.' }
    ]
  },

  sections: [
    {
      id: 'rounds',
      eyebrow: 'The 66th olympiad',
      h2: 'How does the Mathematik-Olympiade run in 2026 and 2027?',
      lede: 'In rounds that get harder each time, from the school to the Land and, from Klasse 8, to a national final. The Mathematik-Olympiaden e.V. is the organiser.',
      body: [
        { kind: 'table', numCols: [], caption: 'The 66th Mathematik-Olympiade, round by round', head: ['Round', 'Date', 'Where and how', 'Who goes on'], rows: [
          ['Schulrunde', 'From the start of the school year (earliest 1 August), set by each Land', 'Usually a homework round, or a paper at school', 'Successful pupils are invited to the Regionalrunde'],
          ['Regionalrunde', '11 November 2026', 'Four problems at a central place near the school', 'The best go to the Landesrunde'],
          ['Landesrunde', '26 to 28 February 2027', 'A one or two day written paper', 'Ends the contest for Klasse 3 to 7'],
          ['Bundesrunde', '30 May to 2 June 2027, Kaiserslautern', 'Two days, three problems a day, four and a half hour papers', 'Teams of up to 15 per Land, from Klasse 8']
        ] },
        { kind: 'source', html: 'Sources: Bundesweite Mathematik-Wettbewerbe, Mathematik-Olympiade page (mathe-wettbewerbe.de/mo), and Mathematik-Olympiaden e.V. (mathematik-olympiaden.de), read on 2 and 3 November 2026. Dates for primary schools are often later, and the Landesbeauftragte of each Land publish the binding dates.' },
        { kind: 'two', mt: true,
          leftH3: 'Rounds by school year',
          left: [
            'The organisers say pupils in Klasse 5 to 7 compete in three rounds and pupils from Klasse 8 in four. Primary schools have taken part since 2005, in three rounds for Klasse 3 and 4.',
            'About 200,000 pupils take part every year, according to the organisers. The Bundesrunde brings together around 200 of them, and since 2014 it has included five guests from German schools abroad.'
          ],
          rightH3: 'Who writes the problems',
          right: [
            'A problem committee of around 60 mathematicians writes about 150 different problems each school year, pitched to each Klassenstufe, the Mathematik-Olympiaden e.V. says.',
            'For pupils who reach the Bundesrunde, the hosting Land pays board and lodging for the four days, so it costs the participants nothing.'
          ] }
      ]
    },
    {
      id: 'entry',
      tint: 'tint',
      eyebrow: 'Taking part',
      h2: 'How does a pupil in Germany take part in the Mathematik-Olympiade?',
      lede: 'Through the school. The organisers send each round\'s papers to schools through the Landesbeauftragte, and they tell pupils to go straight to their maths teacher.',
      body: [
        { kind: 'ol', items: [
          '<strong>Ask the maths teacher</strong> at the start of the school year whether the school runs the Schulrunde, and how.',
          '<strong>Solve the Schulrunde.</strong> It is usually done at home, sometimes as a paper in school. In primary schools the school decides the format, alone or in groups.',
          '<strong>Sit the Regionalrunde</strong> if invited. In the 66th olympiad it is on 11 November 2026, with four problems at a central place.',
          '<strong>Go on to the Landesrunde</strong> at the end of February if selected: 26 to 28 February 2027 in this round.',
          '<strong>From Klasse 8, the Bundesrunde</strong> for the Land\'s team: 30 May to 2 June 2027 in Kaiserslautern.'
        ] },
        { kind: 'source', html: 'Source: Bundesweite Mathematik-Wettbewerbe, Mathematik-Olympiade FAQ on mathe-wettbewerbe.de/mo, read on 3 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'If the Schulrunde has already passed',
          left: [
            'For 2026/27 the Schulrunde ran from the start of the school year into the autumn, and the Regionalrunde is already set for 11 November 2026. A pupil who did not take part this autumn will usually start with next year\'s Schulrunde, from August 2027 at the earliest.',
            'That is not wasted time. Nine months of steady problem solving before the next Schulrunde is a strong preparation.'
          ],
          rightH3: 'What we do and do not do',
          right: [
            'We are not connected with the Mathematik-Olympiaden e.V. or with Bildung & Begabung, and we do not enter pupils. Entry is the school\'s.',
            'The organisers allow only non-commercial websites to republish old problems, and then without solutions. So we never copy them: we link to the organisers\' archive and teach with problems we write ourselves.'
          ] }
      ]
    },
    {
      id: 'proof',
      eyebrow: 'Written solutions',
      h2: 'What does a Mathematik-Olympiade solution need to show?',
      lede: 'The reasoning, not only the result. The organisers say the problems ask less for skill at calculation than for precise thinking, applying knowledge and finding creative solutions to unusual problems.',
      body: [
        { kind: 'table', numCols: [], caption: 'What separates a found answer from a full solution (our marking checklist)', head: ['A found answer says', 'A full solution also shows'], rows: [
          ['"The answer is 18."', 'Why no smaller number works, and why 18 does'],
          ['"I tried many cases and it always works."', 'An argument that covers every case, not only the ones tried'],
          ['"It is obvious from the picture."', 'Which property of the figure is used, and why it holds'],
          ['"The computer found no example."', 'A proof that no example can exist']
        ] },
        { kind: 'source', html: 'Our own checklist, used in class. The organisers\' description of what the problems test is from mathe-wettbewerbe.de/mo, read on 3 November 2026.' },
        { kind: 'p', mt: true, html: 'Pupils who are quick at mental arithmetic often lose most marks here, because the answer arrived in their head and never reached the paper. Our classes slow that moment down. A pupil solves the problem, then writes the solution so that a stranger could check every step, then reads it aloud in English to the mentor, who asks the one question a marker would ask. Writing in English and explaining aloud are a good test: if a step cannot be said clearly, it usually is not yet understood.' }
      ]
    },
    {
      id: 'problems',
      tint: 'tint',
      eyebrow: 'Practice, ours',
      h2: 'What do olympiad problems look like? Three of our own, with full solutions',
      lede: 'These three problems were written by Modern Age Coders for this page, one per age band. None is from the Mathematik-Olympiade or any other contest. The program at the end checks small cases; read why that is not enough.',
      body: [
        { kind: 'two',
          leftH3: 'Problem A, about Klasse 5 and 6 (ours)',
          left: [
            'How many three-digit numbers have digits that add up to 5?',
            '<strong>Solution.</strong> Sort by the hundreds digit, which cannot be 0. If it is 1, the other two digits add up to 4: 04, 13, 22, 31, 40, so 5 numbers. If it is 2, they add up to 3: 4 numbers. Then 3 numbers for a hundreds digit of 3, 2 for 4, and 1 for 5 (the number 500). The total is 5 + 4 + 3 + 2 + 1 = 15, and the list is complete because every case of the hundreds digit has been counted.'
          ],
          rightH3: 'Problem B, about Klasse 7 and 8 (ours)',
          right: [
            'Call a number balanced if its digit sum equals the digit sum of twice the number. Find the smallest balanced number above 9, and prove that every balanced number is divisible by 9.',
            '<strong>Solution.</strong> A number and its digit sum leave the same remainder on division by 9. If n is balanced, n and 2n have equal digit sums, so they leave the same remainder; then 2n minus n, which is n, leaves remainder 0. So n is a multiple of 9. The multiples of 9 above 9 start with 18, and 18 has digit sum 9 while 36 also has digit sum 9. So the answer is 18. The converse fails: 333 is a multiple of 9, but 666 has digit sum 18.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Problem C, about Klasse 9 and up (ours)',
          left: [
            'For which whole numbers n is n² + 3n + 5 divisible by 11? Can it ever be divisible by 121?',
            '<strong>Solution.</strong> Rewrite: n² + 3n + 5 = (n - 4)² + 11(n - 1), which is easy to check by multiplying out. The second part is always a multiple of 11, so the whole expression is divisible by 11 exactly when (n - 4)² is, and because 11 is prime that happens exactly when n - 4 is. So n must leave remainder 4 on division by 11.'
          ],
          rightH3: 'The second part',
          right: [
            'Now write n = 11k + 4. Then (n - 4)² = 121k², and 11(n - 1) = 11(11k + 3) = 121k + 33. Together that is 121k² + 121k + 33, which leaves remainder 33 on division by 121 for every k. So the expression is never divisible by 121.',
            'Every step holds for all whole numbers, not only for the ones anyone has tried. That is what makes it a proof.'
          ] },
        { kind: 'code', label: 'Checking small cases, which is not a proof', lang: 'Python', code: CHECK, note: 'It prints <code>A: 15</code>, then <code>B: 18 all divisible by 9: True</code>, <code>C: divisible by 11: 909 all with n % 11 == 4: True</code> and <code>C: divisible by 121: 0</code>.' },
        { kind: 'p', mt: true, html: 'The program agrees with all three solutions, which is reassuring. But look at what it actually did: it tested the numbers 1 to 10,000 for Problem C and found none divisible by 121. That cannot rule out a larger number, and an olympiad marker would give no credit for it. The algebra above covers every whole number at once. We use small programs like this in class for one purpose only: to test a guess before trying to prove it, and to catch an arithmetic slip in a solution. In the olympiad itself, as in any written paper, there is no computer and the proof is the whole answer.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Extend A.</strong> How many four-digit numbers have digits adding up to 5? Predict first, then check with one change to the program.',
          '<strong>Test B.</strong> Find the five smallest balanced numbers above 9 by hand, then compare with the program\'s list.',
          '<strong>Vary C.</strong> For which n is n² + 5n + 7 divisible by 3? Write the full solution before running any code.',
          '<strong>Explain.</strong> In two sentences, say why 909 numbers from 1 to 10,000 leave remainder 4 on division by 11.'
        ] }
      ]
    },
    {
      id: 'beyond',
      eyebrow: 'Beyond the olympiad',
      h2: 'Where can the Mathematik-Olympiade lead?',
      lede: 'For a few pupils, further: the organisers describe a path to the international olympiad. For everyone, to clearer thinking in school maths.',
      body: [
        { kind: 'two',
          leftH3: 'The international path',
          left: [
            'Bildung & Begabung says the six-person German team for the International Mathematical Olympiad is chosen through a selection contest, the AIMO, which invites top performers from the Mathematik-Olympiade Bundesrunde, the second round of the Bundeswettbewerb Mathematik and the maths winners at Land level of Jugend forscht. The AIMO begins each year at the end of November or the start of December.',
            'The Bundeswettbewerb Mathematik is a separate, home-based contest for pupils on the way to the Hochschulreife, run over three rounds.'
          ],
          rightH3: 'Where the old problems are',
          right: [
            'The Mathematik-Olympiaden e.V. keeps an archive of official problem sheets on mathematik-olympiaden.de, and puts the problems of the current round online after it has run. For the 66th Regionalrunde, Klasse 5 to 12, it gives 1 December 2026 as the date.',
            'Working through old papers at home is free and useful. We send families to that archive; we do not copy from it.'
          ] }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Class times',
      h2: 'When can olympiad maths classes run in German time?',
      lede: 'After school or on weekend mornings. Our mentors are in India, where it is later in the day.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example olympiad class times', head: ['Time in Germany', 'Time in India this winter (to 27 March 2027)', 'Time in India in summer (from 28 March 2027)'], rows: [
          ['15:20', '19:50', '18:50'],
          ['17:40', '22:10', '21:10'],
          ['Saturday 08:45', '13:15', '12:15'],
          ['Sunday 12:15', '16:45', '15:45']
        ] },
        { kind: 'source', html: 'German time under the Einheitenzeitgesetz is UTC+1 in winter and UTC+2 in summer. The switch back to winter time came on 25 October 2026; summer time returns on 28 March 2027. India runs on UTC+5:30 without any change, four and a half hours ahead of Germany in winter and three and a half in summer.' },
        { kind: 'p', mt: true, html: 'The rows are examples only, never a promised batch time. Around the Regionalrunde and the Landesrunde, one-to-one pupils often add a session of written practice under time pressure.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From a first competition problem to a Landesrunde paper',
    lede: 'Our own milestones for olympiad pupils. They set where a new pupil starts, and they show parents what has changed.',
    table: { caption: 'Olympiad maths milestones (ours)', head: ['Stage', 'Typical school years', 'The pupil can'], rows: [
      ['1. Careful counting', 'Klasse 3 to 5', 'List cases in order and know when the list is complete'],
      ['2. Patterns and why', 'Klasse 5 to 7', 'Spot a pattern and explain the reason behind it'],
      ['3. Remainders and parity', 'Klasse 6 to 9', 'Use even and odd, digit sums and remainders to rule things out'],
      ['4. Full written proof', 'Klasse 7 and up', 'Write a solution a stranger can check, every step justified'],
      ['5. Papers under time', 'Klasse 8 and up', 'Solve and write up three or four problems in a long timed paper']
    ] },
    left: { h3: 'For pupils', ps: [
      'If you tried ten cases, you have a guess. Now find the reason, and you have a proof.',
      'Write the solution for someone who has not seen the problem. Then check that they could follow it.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask your child to read one solution aloud each week. If it sounds clear, it is probably correct.',
      'A Regionalrunde paper with one full solution is a real achievement. Praise the writing as well as the score.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more maths courses for pupils in Germany',
    lede: 'Each course runs live in English with one steady mentor and can be taken in a group or alone.',
    bands: [
      { num: 'I', h3: 'Primary years', sub: 'Klasse 1 to 4', courses: [
        { code: 'MOL / PRIM / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary maths', blurb: 'Number, shape and pattern, Klasse 1 to 5.' },
        { code: 'MOL / PRIM / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense, ages 5 to 10.' },
        { code: 'MOL / PRIM / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic and patterns, ages 7 to 12.' }
      ] },
      { num: 'II', h3: 'Middle years', sub: 'Klasse 5 to 9', courses: [
        { code: 'MOL / MID / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'Pre-algebra and geometry in depth.' },
        { code: 'MOL / MID / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Test conjectures in Python, then prove them.' },
        { code: 'MOL / MID / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Olympiade and Känguru', blurb: 'Both German contests, by Klassenstufe.' }
      ] },
      { num: 'III', h3: 'Upper school', sub: 'Klasse 10 to 13', courses: [
        { code: 'MOL / UPPER / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Algebra to calculus, in English.' },
        { code: 'MOL / UPPER / 02', slug: 'abitur-mathematics-course-in-english', title: 'Abitur maths in English', blurb: 'Leistungskurs and Grundkurs, alongside school.' },
        { code: 'MOL / UPPER / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Counting and chance, carried further.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live olympiad maths classes work',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Mid to late afternoon German time.' },
      { time: 'Weekend morning', l: 'A quiet slot for longer written problems.' },
      { time: 'One to one', l: 'Agreed with the mentor, closer to each round if needed.' }
    ],
    cells: [
      { h3: 'Our own problems', p: 'Written for teaching, by Klassenstufe.' },
      { h3: 'Solutions written', p: 'Every answer argued on paper.' },
      { h3: 'Read aloud', p: 'Pupils explain their proof in English.' },
      { h3: 'Checked, not proved', p: 'Code tests guesses, never replaces proof.' },
      { h3: 'Timed papers', p: 'Practice at olympiad length before each round.' },
      { h3: 'One mentor', p: 'The same teacher marks every solution.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'Our students also build things; a few examples are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> show more.',
  reviewsLede: 'Google reviews written by our students and parents, left exactly as posted.',

  fees: {
    h2: 'Fees for olympiad maths classes',
    lede: 'The monthly fee includes eight live classes. It is quoted here in euro using the European Central Bank\'s reference rate, but taken in US dollars, which your bank converts at its own rate, so a small difference on your statement is normal.',
    free: ['A free first class', 'One problem of ours at your child\'s Klassenstufe', 'No card needed'],
    group: ['Fifteen to twenty pupils of the same Klassenstufe band', 'One regular mentor', 'Two classes a week', 'Monthly, cancel at any time'],
    one: ['One pupil, one mentor', 'Problems chosen for your child', 'Times agreed together']
  },

  faq: {
    eyebrow: 'Families in Germany ask',
    h2: 'Mathematik-Olympiade preparation: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Our classes are live and in English only, with a mentor who matches your child\'s pace and accent. We give the German maths words beside the English, so the olympiad paper itself holds no surprises.' },
      { q: 'When is the Regionalrunde of the Mathematik-Olympiade 2026?', a: 'The Mathematik-Olympiaden e.V. lists 11 November 2026 for the Regionalrunde of the 66th olympiad. The Landesrunde follows from 26 to 28 February 2027 and the Bundesrunde from 30 May to 2 June 2027 in Kaiserslautern.' },
      { q: 'How does my child enter?', a: 'Through school. The organisers tell pupils to ask their maths teacher, and schools receive the papers through the Landesbeauftragte of their Land. We are not connected with the organisers and do not enter anyone.' },
      { q: 'Can primary school children take part?', a: 'Yes. The organisers say primary schools have been part of the Mathematik-Olympiade since 2005, with three rounds for Klasse 3 and 4. Dates for primary schools are often later than for secondary schools.' },
      { q: 'Do you use real olympiad problems?', a: 'No. The organisers allow only non-commercial websites to republish old problems, so we write our own in the same spirit, like the three on this page, and send families to the official archive on mathematik-olympiaden.de.' },
      { q: 'Is it about speed?', a: 'No. The papers ask for written, argued solutions. That is why our classes spend as much time on writing a solution clearly as on finding it.' },
      { q: 'Who reaches the Bundesrunde?', a: 'Teams of up to 15 pupils per Land, from Klasse 8 upwards, according to the organisers. About 200 pupils take part, and for Klasse 3 to 7 the contest ends at the Landesrunde.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Younger pupils usually come after school, older ones often at weekends.' },
      { q: 'How are fees shown and paid?', a: 'Fees appear in euro, converted with the European Central Bank\'s reference rate, and are paid in US dollars; your bank converts the payment, so the euro figure can differ slightly. The first class is free.' },
      { q: 'Does the course also cover the Känguru?', a: 'Yes. Our Mathematik-Olympiade and Känguru Training course prepares for both: written proofs for the Olympiade and quick, careful reasoning for the multiple-choice Känguru der Mathematik.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for maths-loving pupils in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The full set of our Germany pages.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The Abitur papers, explained in English.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'For younger children who like puzzles.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Where maths meets data.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A look inside a live class.' },
      { href: '/student-labs', label: 'Student labs', p: 'What our students have made.' }
    ]
  },

  start: {
    h2: 'Book a free olympiad maths class',
    lede: 'In the first class the mentor gives your child one of our problems at their Klassenstufe, listens to how they reason, and asks them to write the solution, all in English and at your child\'s pace.',
    readFirst: 'If you prefer to read more first, here is <a class="ag-inline-link" href="/how-we-teach">how our lessons run</a> and <a class="ag-inline-link" href="/courses">the list of courses</a>.',
    note: 'Lessons are live, online and given in English by mentors based in India. A WhatsApp message in English is the quickest way to ask us anything.',
    formNote: 'The free first class needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Maths contests', links: [
        { href: '/courses/mathematik-olympiade-and-kaenguru-training-course', label: 'Olympiade and Känguru training' },
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Maths olympiad course' },
        { href: '/courses/middle-school-math-competitions-course', label: 'Middle school competitions' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning' }
      ] }
    ],
    bottomRight: 'Ten cases are a guess; a reason is a proof'
  },

  personalityCss: `
.ag-root.ag-mol .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-mol .ag-capsule { border-left-width: 5px; }
.ag-root.ag-mol .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-mol .ag-grid-2 p { line-height: 1.7; }
.ag-root.ag-mol .ag-table td:first-child { font-style: italic; }
`,

  dossier: {
    curriculumAuthority: 'Mathematik-Olympiaden e.V. (mathematik-olympiaden.de: dates, current problems, archive and its publication rule); Bildung & Begabung, Bundesweite Mathematik-Wettbewerbe (mathe-wettbewerbe.de/mo, /imo, /bwm); Einheitenzeitgesetz. Read 2 and 3 November 2026.',
    localProject: 'Evidence is not proof: three original problems by Klassenstufe (15 three-digit numbers with digit sum 5; balanced numbers, smallest 18, all multiples of 9, converse false at 333; n squared plus 3n plus 5 divisible by 11 exactly when n leaves remainder 4, never by 121, via (n minus 4) squared plus 11(n minus 1)), each with a full written proof and a Python check of small cases. Lesson family: write the full proof; a computer check is evidence only.',
    requiredMentions: ['B: 18 all divisible by 9: True', 'C: divisible by 11: 909 all with n % 11 == 4: True', 'C: divisible by 121: 0', '121k² + 121k + 33', '333 is a multiple of 9, but 666 has digit sum 18', '30 May to 2 June 2027, Kaiserslautern', 'only non-commercial websites to republish old problems', 'Ten cases are a guess; a reason is a proof'],
    sources: [
      { claim: 'Rounds by Klassenstufe, entry through the maths teacher, Regionalrunde format, Bundesrunde teams and format, 200,000 a year, primary since 2005.', url: 'https://www.mathe-wettbewerbe.de/mo' },
      { claim: 'Organiser; 66th dates: Regionalrunde 11 November 2026, Landesrunde 26 to 28 February 2027, Bundesrunde 30 May to 2 June 2027.', url: 'https://www.mathematik-olympiaden.de/moev/index.php' },
      { claim: 'Archive and republication rule for non-commercial sites.', url: 'https://www.mathematik-olympiaden.de/moev/aufgaben/aufgabenarchiv-2?view=aufgabenarchiv' },
      { claim: 'Current-round problems online from 1 December 2026.', url: 'https://www.mathematik-olympiaden.de/moev/aufgaben/aktuelle-aufgaben-2?view=aktaufg' },
      { claim: 'AIMO selection for the six-person IMO team.', url: 'https://www.mathe-wettbewerbe.de/imo' }
    ],
    rejectedClaims: [
      'Reproducing any Mathematik-Olympiade problem or solution: not allowed for a commercial site and not done.',
      'A Schulrunde deadline for a particular Land: set by each Land, not stated.',
      'Any promise of a Regionalrunde, Landesrunde or Bundesrunde place: none.',
      'Any affiliation with the Mathematik-Olympiaden e.V. or Bildung & Begabung: none.',
      'German-language teaching: we teach in English only.'
    ]
  }
};
