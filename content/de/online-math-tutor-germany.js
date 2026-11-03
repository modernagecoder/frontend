'use strict';
// Online maths tutor in Germany (ag- English door, Germany cluster P2 row DE018).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: an English-speaking family in Germany looking for a maths tutor online. Spine: the maths checkpoints a pupil
// meets Klasse by Klasse (VERA 3, VERA 8, MSA in Berlin, ZP10 in NRW, Abitur), what each one tests and whether it is
// graded, then a practice set that trains one habit (estimate first). The Abitur gets one row only: the live page
// abitur-maths-in-english carries its structure and marks tables, which are not repeated here.
// Sources (raw):
//  - FACTS.md section 1 (KMK pages, fetched 2 Nov 2026): Grundschule to Klasse 4, to 6 in Berlin and Brandenburg
//    "von der ersten bis zur vierten, in Berlin und Brandenburg bis zur sechsten Jahrgangsstufe" (fact 1); three
//    Sek I tracks "in den Ländern in unterschiedlichen Schularten organisiert" (fact 6); switching in Klasse 5 and 6
//    (fact 8); "zentrale Prüfungen auf Landesebene" in most Länder (fact 24); "Am Ende der Grundschule wird keine
//    Abschlussprüfung durchgeführt" (fact 28).
//  - FACTS.md section 3 (IQB and KMK): VERA-3 "jährlich verpflichtend" (108); five Leitideen (109); other names KERMIT,
//    Kompetenztests, Lernstandserhebungen (110); "VERA-3 2027: 12.04. bis 26.05.2027" (111); VERA-8 grade 8 in German,
//    maths, English, French (113); VERA-8 Leitideen (114); "VERA-8 2027: 08.02. bis 25.03.2027" (115); "nicht benotet",
//    no rankings (116); ESA and MSA maths standards in one document, version of 23.06.2022 (122); six process
//    competences (123); standards "in allen Ländern verbindliche Zielvorgaben" (121).
//  - FACTS.md section 1b: NRW Abitur Mathematik "Mittwoch, 5. Mai 2027" (44).
//  - New raw fetches 3 Nov 2026, in src-pages/online-math-tutor-germany/:
//    zp10-termine-2027.html (standardsicherung.schulministerium.nrw.de, ZP10 Termine 2027): "Mathematik" "Donnerstag,
//    20. Mai 2027" Haupttermin, "Donnerstag, 03. Juni 2027" Nachschreibtermin; "Die schriftlichen Prüfungen beginnen
//    jeweils um 9:00 Uhr."
//    be-pruefungsplan-2027.pdf (berlin.de, "Prüfungsplan für das Schuljahr 2026/27", "Stand: 15.09.2026"): "MSA und
//    erweiterte Berufsbildungsreife 2027", "Die schriftlichen Prüfungen beginnen jeweils um 10:00 Uhr.", "Do,
//    15.04.2027 Mathematik", "Mo, 24.05.2027 Nachtermin: Mathematik"; Abitur "Mi, 05.05.2027 LF + 3. pf MATHEMATIK +
//    mathematik Pool".
//    be-gym-9-10.html (berlin.de, Abschlüsse am Gymnasium nach Klasse 9 und 10): "Dabei haben die Fächer Deutsch,
//    Mathematik und die 1. Fremdsprache eine besondere Bedeutung. Sie werden im Folgenden als Kernfächer im MSA
//    bezeichnet."
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own: five practice tasks, checked with scratchpad de/w/G5/py/tut.py (python3 -I), which prints:
//    Ribbon, cm per piece: estimate 100, exact 85.00, gap +17.6%
//    Tank, minutes to 160 litres: estimate 11, exact 10.83, gap +1.5%
//    Ladder, height in m: estimate 4.9, exact 4.80, gap +2.1%
//    Town after 5 years: estimate 57500, exact 57963.70, gap -0.8%
//    Mean of 7 lengths, cm: estimate 12, exact 12.10, gap -0.8%
// Lesson family: estimate first (Überschlag), then calculate, then compare the two.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const CHECK = [
  'import math',
  '',
  'tasks = [',
  '    ("Ribbon, cm per piece", 100, 340 / 4),',
  '    ("Tank, minutes to 160 litres", 11, (160 - 30) / 12),',
  '    ("Ladder, height in m", 4.9, math.sqrt(5**2 - 1.4**2)),',
  '    ("Town after 5 years", 57500, 50000 * 1.03**5),',
  '    ("Mean of 7 lengths, cm", 12, sum([12.1, 11.8, 12.4, 12.0, 11.9, 12.3, 12.2]) / 7),',
  ']',
  '',
  'for name, guess, exact in tasks:',
  '    gap = 100 * (guess - exact) / exact',
  '    print(f"{name}: estimate {guess}, exact {exact:.2f}, gap {gap:+.1f}%")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Online maths tutor' },
  slug: 'online-math-tutor-germany',
  code: 'tut',
  accent: '#852F60',
  accentRationale: 'Online maths tutor: a plum #852F60, the red pen on a corrected Klassenarbeit softened toward violet, distinct from the Abitur slate and the Berlin brick; it clears 4.5:1 on the paper and all three tints (the build checks it)',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Online maths tutor in Germany',
  title: 'Online Maths Tutor in Germany: Live Classes in English',
  description: 'An online maths tutor for pupils in Germany, live in English: help by Klasse and Land, VERA 3 and 8, MSA and ZP10 2027 dates, the Abitur, and a practice set.',
  ogDescription: 'Live online maths tutoring in English for pupils at German schools, from Grundschule to Abitur: what VERA, the MSA and ZP10 test, the 2027 dates, and five practice tasks.',
  twitterDescription: 'Maths tutoring online in English for pupils in Germany: Klasse by Klasse, with the 2027 test dates.',
  pageName: 'Online Maths Tutor in Germany',
  webPageDescription: 'A guide in English for families in Germany looking for an online maths tutor: the maths checkpoints of German schools by Klasse (VERA 3, VERA 8, the Berlin MSA, the NRW ZP10, the Abitur) with their 2027 dates from the IQB and the Land ministries, and an original practice set on estimating before calculating.',
  courseDescription: 'Live online maths tutoring in English for pupils at German schools from Klasse 1 to the Abitur: number sense and Größen in Grundschule, algebra, functions and geometry in Klasse 5 to 10, preparation for VERA, the MSA and ZP10, and Oberstufe maths, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Online maths tutor',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#checkpoints', label: 'By Klasse' },
    { href: '#vera', label: 'VERA' },
    { href: '#msa', label: 'MSA and ZP10' },
    { href: '#lander', label: 'Länder' },
    { href: '#estimate', label: 'Practice' }
  ],
  eyebrow: 'Germany &middot; Mathe-Nachhilfe in English &middot; Ages 6 to 19',
  h1: 'Online maths tutor in Germany',
  lede: 'Your child goes to a German school, but at home the family speaks English, and a maths word problem read in German can feel twice as hard as it is. This page sets out, Klasse by Klasse, which maths checkpoints a pupil in Germany meets, when they fall in 2027, and what each one really tests. Then it shows how our mentors teach: one habit at a time, in English, with the German words for every idea.',
  secondaryCta: { href: '#checkpoints', label: 'Checkpoints by Klasse' },
  wa: 'Hello Modern Age Coders, my child attends school in Germany and needs maths help in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; Grundschule to Oberstufe, one mentor',
  spec: [
    ['For', 'Pupils from Klasse 1 to the Abitur'],
    ['Covers', 'Zahl, Größen, Funktionen, Geometrie, Daten'],
    ['Checkpoints', 'VERA 3, VERA 8, MSA, ZP10, Abitur'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Times', 'German afternoons and weekend mornings'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders is an online maths tutor for pupils at schools in Germany, taught live in English by mentors who match your child\'s pace and accent. Lessons follow the German school year from Grundschule to the Abitur, prepare for VERA 3 and VERA 8, the MSA or ZP10 maths exam and Klassenarbeiten, and run in a group of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three maths courses for the German school years',
    lede: 'One for Grundschule, one for the long middle stretch from Klasse 5 to 10, and one for the Oberstufe. Your mentor fits each to the Land and the school type.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'TUT / 01', title: 'Grundschule maths', note: 'Klasse 1 to 4 (to 6 in Berlin and Brandenburg). Place value, the four operations, Größen und Messen, shapes and first data.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'TUT / 02', title: 'Klasse 5 to 10 maths', note: 'Fractions, percentages, equations, linear and quadratic functions, Pythagoras, probability: the ground VERA 8, the MSA and ZP10 cover.' },
      { course: 'abitur-mathematics-course-in-english', code: 'TUT / 03', title: 'Abitur Mathematik in English', note: 'Einführungsphase and Qualifikationsphase, Leistungskurs or Grundkurs: Analysis, geometry and Stochastik.' }
    ]
  },

  sections: [
    {
      id: 'checkpoints',
      eyebrow: 'By Klasse',
      h2: 'Which maths tests does a pupil in Germany sit, and when in 2027?',
      lede: 'German schools have few external maths tests, and they sit at fixed points. Knowing where your child stands in that sequence tells you what kind of help makes sense now.',
      body: [
        { kind: 'table', numCols: [], caption: 'Maths checkpoints at German schools, with the 2027 dates published so far', head: ['Klasse', 'Checkpoint', 'Who sets it', '2027 date', 'Graded?'], rows: [
          ['3', 'VERA 3, Mathematik', 'IQB tasks, run by every Land', '12 April to 26 May 2027 (test window)', 'No'],
          ['8', 'VERA 8, Mathematik', 'IQB tasks, run by every Land', '8 February to 25 March 2027 (test window)', 'No'],
          ['10, Berlin', 'MSA, written maths exam', 'Berlin Senate education department', 'Thursday 15 April 2027, from 10:00', 'Yes, part of the certificate'],
          ['10, NRW', 'ZP10, Mathematik', 'NRW school ministry', 'Thursday 20 May 2027, from 9:00', 'Yes, part of the certificate'],
          ['12 or 13', 'Abitur, Mathematik', 'Each Land, using the common pool', 'NRW and Berlin: Wednesday 5 May 2027', 'Yes']
        ] },
        { kind: 'source', html: 'Sources: IQB pages on VERA 3 and VERA 8 (test windows 2027); Senatsverwaltung für Bildung Berlin, Prüfungsplan für das Schuljahr 2026/27 (Stand 15 September 2026); Ministerium für Schule und Bildung NRW, Standardsicherung, Zentrale Prüfungen 10, Termine 2027; NRW Abitur Anlage A 2027. Read 2 and 3 November 2026. Other Länder publish their own exam dates for Klasse 10.' },
        { kind: 'p', mt: true, html: 'Two things stand out in that table. The first is that Grundschule has no leaving exam at all: the KMK says plainly that no final examination is held at the end of primary school. What decides a child\'s next school is the school\'s own picture of their work over the years, so steady understanding matters more than a crash course. The second is that the first maths exam that counts toward a certificate comes in Klasse 10, and only for pupils who take the MSA or a comparable exam in their Land.' },
        { kind: 'p', html: 'Between those points sit the Klassenarbeiten, the written tests every class teacher sets several times a year. They are where most families first notice a problem, and where a tutor helps most often: a pupil who understood fractions in English last year now meets Brüche, Kürzen and Hauptnenner in a test written in German, with ten minutes less than they need.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Klasse 1 to 4', p: 'Counting, place value, times tables, lengths and weights, telling the time. The base everything else stands on.' },
          { h3: 'Klasse 5 to 10', p: 'Fractions to quadratics, percentages, geometry and probability. The longest stretch, and where gaps grow quietly.' },
          { h3: 'Oberstufe', p: 'Analysis, vectors and Stochastik toward the Abitur, at Leistungskurs or Grundkurs level.' }
        ] }
      ]
    },
    {
      id: 'vera',
      eyebrow: 'VERA',
      h2: 'What do VERA 3 and VERA 8 test in maths, and do the results count?',
      lede: 'VERA (Vergleichsarbeiten) are short comparison tests written by the IQB, the Länder\'s institute for quality in education. Every Land uses them; some give them another name.',
      body: [
        { kind: 'two',
          leftH3: 'VERA 3, in Klasse 3',
          left: [
            'The IQB describes VERA 3 as written tests that the Länder run every year, and they are compulsory. In maths they are built on five Leitideen, the content strands of the KMK standards: Zahl und Operation; Raum und Form; Muster, Strukturen und funktionaler Zusammenhang; Größen und Messen; and Daten und Zufall.',
            'In some Länder the same tests are called KERMIT (Kompetenzen ermitteln), Kompetenztests or Lernstandserhebungen, so the letter from school may not say VERA at all. The 2027 test window runs from 12 April to 26 May 2027; each school picks its own day inside it.'
          ],
          rightH3: 'VERA 8, in Klasse 8',
          right: [
            'VERA 8 checks what pupils in Klasse 8 have reached in German, maths, English and French. The maths tests follow five Leitideen again, in their secondary form: Zahl, Raum und Form, Funktionaler Zusammenhang, Messen, and Daten und Zufall.',
            'The 2027 window is earlier in the year, 8 February to 25 March 2027. A pupil in Klasse 8 this school year therefore has about three months before the window opens, counting from November 2026.'
          ] },
        { kind: 'p', mt: true, html: 'The most useful fact for a worried parent is this one: VERA results are not graded, and the IQB produces no rankings of schools or Länder. VERA is meant as an early check, a year before the KMK standards for Klasse 4 and Klasse 9 are due, so that a teacher can see where a class stands. It is not a test to cram for. We never sell VERA as an exam. What we do is use the five Leitideen as a checklist: if one strand is weak in Klasse 3 or 8, it will be weak in the Klassenarbeiten too.' },
        { kind: 'table', mt: true, numCols: [], caption: 'The five maths strands of VERA, in German and in English', head: ['VERA 3 (primary)', 'VERA 8 (secondary)', 'In English, roughly'], rows: [
          ['Zahl und Operation', 'Zahl', 'Number and calculation'],
          ['Raum und Form', 'Raum und Form', 'Space and shape, geometry'],
          ['Muster, Strukturen und funktionaler Zusammenhang', 'Funktionaler Zusammenhang', 'Patterns and functions'],
          ['Größen und Messen', 'Messen', 'Quantities, units and measuring'],
          ['Daten und Zufall', 'Daten und Zufall', 'Data and chance']
        ] },
        { kind: 'source', html: 'Source: IQB, VERA 3 and VERA 8 pages, and IQB, Implementation und Überprüfung, VERA, read 2 November 2026. The English column is our own gloss.' }
      ]
    },
    {
      id: 'msa',
      eyebrow: 'MSA and ZP10',
      h2: 'What is the MSA or ZP10 maths exam, and how is it different in Berlin and NRW?',
      lede: 'At the end of Klasse 10 most Länder hold central written exams for the Mittlerer Schulabschluss, the intermediate school certificate. Maths is one of the subjects every time. Names and dates differ by Land; Berlin and Nordrhein-Westfalen show how much.',
      body: [
        { kind: 'two',
          leftH3: 'Berlin: the MSA',
          left: [
            'In Berlin a pupil at a Gymnasium reaches the MSA through results at the end of Klasse 10. The Berlin Senate names German, maths and the first foreign language as the core subjects (Kernfächer) of the MSA, which carry special weight.',
            'The Berlin exam plan for 2026/27, dated 15 September 2026, puts the written maths exam for the MSA and the erweiterte Berufsbildungsreife on Thursday 15 April 2027, with a catch-up date on Monday 24 May 2027. Berlin\'s written MSA exams begin at 10:00.'
          ],
          rightH3: 'Nordrhein-Westfalen: ZP10',
          right: [
            'In NRW the central exams at the end of Klasse 10 are the Zentrale Prüfungen 10, in German, maths and English, at most secondary school types and at a Gymnasium with a Klasse 10 in the lower secondary stage.',
            'The NRW ministry has set the main ZP10 maths date for Thursday 20 May 2027 and the resit date for Thursday 3 June 2027. NRW\'s written ZP10 papers start at 9:00, and the ministry publishes the previous year\'s tasks for download.'
          ] },
        { kind: 'p', mt: true, html: 'Behind both exams stands one document. Since 2022 the KMK has published a single set of maths standards for the Erster Schulabschluss and the Mittlerer Schulabschluss (version of 23 June 2022), and those standards are binding in every Land. Besides content, they list six process competences: communicating mathematically, solving problems, modelling, representing, working with mathematical objects, and working with media. Three of those six are about words and reasoning, not only arithmetic. That is exactly where a pupil who thinks in English loses marks, and exactly what can be practised in English and then carried into German.' },
        { kind: 'p', html: 'For the step after Klasse 10, the Abitur, our page <a class="ag-inline-link" href="/abitur-maths-in-english">Abitur maths in English</a> explains the exam structure, the marks and the points table in detail. In both NRW and Berlin, the 2027 written maths Abitur falls on Wednesday 5 May 2027.' }
      ]
    },
    {
      id: 'lander',
      eyebrow: 'Länder',
      h2: 'Is school maths the same in every German Land?',
      lede: 'The goals are shared; the route is not. A family moving between Länder, or arriving from abroad, meets three kinds of difference.',
      body: [
        { kind: 'ol', items: [
          '<strong>How long primary school lasts.</strong> Grundschule runs from Klasse 1 to Klasse 4 in most of Germany and to Klasse 6 in Berlin and Brandenburg, according to the KMK. A ten-year-old moving from Hamburg to Berlin may well start the next year in a primary school again.',
          '<strong>What the secondary schools are called.</strong> The KMK describes three secondary tracks that each Land organises in its own school types. Alongside the Gymnasium, which exists in every Land, there are names such as Integrierte Sekundarschule, Stadtteilschule, Oberschule or Gemeinschaftsschule. Switching between tracks is possible in Klasse 5 and 6.',
          '<strong>Which exams come at the end of Klasse 10.</strong> The KMK says most Länder hold central exams at Land level for the Klasse 10 certificates, but each sets its own papers, dates and rules, as Berlin and NRW show above.'
        ] },
        { kind: 'p', mt: true, html: 'What does not change is the content target. The KMK standards for primary maths, adopted in 2004 and current in the version of 23 June 2022, are binding in all Länder, and so are the standards for Klasse 10. A fraction is a fraction in Bremen and in Bavaria. That is why we can teach a pupil anywhere in Germany from one plan, and adjust only the pace, the order and the exam practice to the Land.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Example times for a live class, German time and India time (our conversion)', head: ['German time', 'India time, winter (MEZ)', 'India time, summer (MESZ)'], rows: [
          ['Weekday 13:45', '18:15', '17:15'],
          ['Weekday 16:45', '21:15', '20:15'],
          ['Saturday 09:00', '13:30', '12:30']
        ] },
        { kind: 'source', html: 'Germany uses MEZ (UTC+1) in winter and MESZ (UTC+2) in summer under the Einheitenzeitgesetz; summer time ended on 25 October 2026 and begins again on 28 March 2027. India keeps UTC+5:30 all year, so it is 4 hours 30 minutes ahead of Germany in winter and 3 hours 30 minutes ahead in summer. These rows are examples, not fixed batch times.' }
      ]
    },
    {
      id: 'estimate',
      tint: 'tint',
      eyebrow: 'Practice',
      h2: 'How does an online maths tutor build one habit? A practice set on estimating',
      lede: 'Our own five tasks, one for each of the five strands and spread from Klasse 3 to Klasse 10. The habit is the German Überschlag: before calculating, say roughly what the answer must be. They are written by us, not taken from VERA, the MSA or ZP10.',
      body: [
        { kind: 'two',
          leftH3: 'Tasks 1 to 3',
          left: [
            '<strong>1. Größen und Messen, Klasse 3 or 4.</strong> A ribbon 3 m 40 cm long is cut into 4 equal pieces. How long is each piece? <em>Estimate:</em> 3 m 40 cm is less than 4 m, so each piece is less than 1 m. <em>Calculate:</em> 340 cm &divide; 4 = 85 cm. The estimate of "just under 100 cm" is rough, but it rules out the two classic slips, 8.5 cm and 850 cm.',
            '<strong>2. Funktionaler Zusammenhang, Klasse 8.</strong> A tank already holds 30 litres and fills at 12 litres a minute, so V(t) = 12t + 30. When does it hold 160 litres? <em>Estimate:</em> 130 more litres at about 12 a minute is about 11 minutes. <em>Calculate:</em> 12t = 130, t = 10.83 minutes, a little under 10 minutes 50 seconds.',
            '<strong>3. Raum und Form, Klasse 9 or 10.</strong> A 5 m ladder leans on a wall with its foot 1.4 m from the wall. How high does it reach? <em>Estimate:</em> the foot is close in, so the height is just under 5 m, say 4.9 m. <em>Calculate:</em> by Pythagoras, h = &radic;(25 &minus; 1.96) = &radic;23.04 = 4.8 m.'
          ],
          rightH3: 'Tasks 4 and 5',
          right: [
            '<strong>4. Zahl, Klasse 10.</strong> A town of 50,000 people grows by 3 % a year. How many live there after 5 years? <em>Estimate:</em> five times 3 % is 15 %, so about 57,500. <em>Calculate:</em> 50,000 &middot; 1.03<sup>5</sup> &asymp; 57,964. The estimate is a little low, and the reason is the lesson: each year\'s 3 % is taken of a larger number, so growth compounds.',
            '<strong>5. Daten und Zufall, any Klasse from 5.</strong> Seven pupils measure the same pencil: 12.1, 11.8, 12.4, 12.0, 11.9, 12.3 and 12.2 cm. What is the mean? <em>Estimate:</em> every value sits close to 12, so the mean is close to 12. <em>Calculate:</em> 84.7 &divide; 7 = 12.1 cm.',
            '<strong>A note on commas.</strong> A German school writes 4,8 m and 12,1 cm, with a decimal comma, where an English book writes 4.8 and 12.1. We teach in English but always show the German form too, because the test paper will use it.'
          ] },
        { kind: 'code', label: 'Checking our own estimates', lang: 'Python', code: CHECK, note: 'It prints <code>Ribbon, cm per piece: estimate 100, exact 85.00, gap +17.6%</code>, <code>Tank, minutes to 160 litres: estimate 11, exact 10.83, gap +1.5%</code>, <code>Ladder, height in m: estimate 4.9, exact 4.80, gap +2.1%</code>, <code>Town after 5 years: estimate 57500, exact 57963.70, gap -0.8%</code> and <code>Mean of 7 lengths, cm: estimate 12, exact 12.10, gap -0.8%</code>.' },
        { kind: 'p', mt: true, html: 'Four of the five estimates land within about 2 % of the exact answer, and the first is 17.6 % high on purpose: "less than a metre" is all a Klasse 3 pupil needs to see that 850 cm cannot be right. An estimate is not meant to be the answer. It is a fence. If the calculated answer falls outside the fence, the pupil looks again before handing in the test, and that single check saves more marks in a Klassenarbeit than any trick.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Say the size first.</strong> Before writing anything, say aloud roughly how big the answer must be, and in which unit.',
          '<strong>Then calculate carefully.</strong> Write each step, so a teacher can follow it and award method marks.',
          '<strong>Compare the two.</strong> If they disagree by a factor of ten, find the slip; if they disagree a little, ask why, as in task 4.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A school year with a tutor',
    h2: 'What one school year of maths help can look like',
    lede: 'Our own outline for the school year 2026 to 2027, for a pupil in Klasse 8 or Klasse 10. The mentor adjusts it after the first class.',
    table: { caption: 'A year of maths support, Klasse 8 and Klasse 10 (ours)', head: ['Months', 'Klasse 8', 'Klasse 10'], rows: [
      ['November to January', 'Gaps from earlier years, terms and equations', 'Functions, Pythagoras, percentages'],
      ['February to March', 'The VERA 8 strands, one a week', 'Mixed tasks in the style of last year\'s papers'],
      ['April to May', 'Linear functions and geometry for Klassenarbeiten', 'Timed papers before the MSA or ZP10 date'],
      ['June and July', 'Probability and data, a calm close to the year', 'First steps of Oberstufe maths, if the pupil stays on']
    ] },
    left: { h3: 'For parents', ps: [
      'After each month the mentor tells you which strand is secure and which is not, using the same five strands as VERA, so the report means the same thing as the school\'s.',
      'If a Klassenarbeit comes back with a low mark, send a photo: the next class starts from the actual mistakes, not from a fresh chapter.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Write an estimate in the margin before every calculation, even in homework. It takes five seconds.',
      'Keep a short word list, German on one side and English on the other: Bruch, Nenner, Gleichung, Steigung, Wahrscheinlichkeit.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths',
    h2: 'Nine more maths courses for families in Germany',
    lede: 'Every course is taught live, in English, with the same mentor each week; choose a group or one to one.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Ages 6 to 12', courses: [
        { code: 'TUT / BASE / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense that makes the Überschlag automatic.' },
        { code: 'TUT / BASE / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Bead work to mental calculation, for young learners.' },
        { code: 'TUT / BASE / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Terms and equations made solid before Klasse 7.' }
      ] },
      { num: 'II', h3: 'Klasse 7 and beyond', sub: 'Ages 12 to 19', courses: [
        { code: 'TUT / MID / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Functions to calculus, for the step into Oberstufe.' },
        { code: 'TUT / MID / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and chance in depth, the strand pupils fear most.' },
        { code: 'TUT / MID / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For pupils at international schools in Germany.' }
      ] },
      { num: 'III', h3: 'Beyond the syllabus', sub: 'Ages 8 to 18', courses: [
        { code: 'TUT / PLUS / 01', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Mathematik-Olympiade and Känguru', blurb: 'Contest problems by Klassenstufe, all written by us.' },
        { code: 'TUT / PLUS / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Fractions, graphs and data explored in Python.' },
        { code: 'TUT / PLUS / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'International contests for pupils who want more.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live online maths tutoring works from Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Two live classes a week, an hour each, on a shared screen with a digital whiteboard.',
    slots: [
      { time: 'After school', l: 'Early to late afternoon German time, when mentors in India are in their evening.' },
      { time: 'Saturday', l: 'Morning sessions suit younger children and longer practice papers.' },
      { time: '1-on-1', l: 'A time agreed with the family, with extra sessions before a Klassenarbeit.' }
    ],
    cells: [
      { h3: 'English first', p: 'Every idea explained in English, with its German name beside it.' },
      { h3: 'School-led', p: 'Classes follow what the Klasse is doing this month.' },
      { h3: 'Estimate habit', p: 'An Überschlag before every calculation, in every class.' },
      { h3: 'Real papers', p: 'Published past ZP10 tasks and our own MSA style sets.' },
      { h3: 'Monthly note', p: 'Strand by strand, in plain words for parents.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty pupils, or one to one.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Maths and coding meet in our older students\' projects. A few are below; more are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents and students wrote on Google, unedited.',

  fees: {
    h2: 'Maths tutoring fees for families in Germany',
    lede: 'One monthly fee buys eight live classes. We show it in euro, converted at the European Central Bank reference rate, but the charge itself goes through in US dollars, and your bank does the conversion, so the euro figure on your statement may be a little different.',
    free: ['A free first class with a mentor', 'A short check across the five strands', 'No card details asked'],
    group: ['Fifteen to twenty pupils of a similar level', 'The same mentor every week', 'Two live classes a week', 'Monthly, cancel before the next month'],
    one: ['Only your child and the mentor', 'Starts from your child\'s own mistakes', 'Times that fit your family, extra classes before exams']
  },

  faq: {
    eyebrow: 'Families ask',
    h2: 'Online maths tutoring in Germany: questions from families',
    items: [
      { q: 'Can my child get a maths tutor in English while attending a German school?', a: 'Yes. Modern Age Coders teaches maths live online in English to pupils at schools in Germany, from Grundschule to the Abitur. The mentor follows what the class is doing, explains it in English, and gives the German term for each idea so your child recognises it in the next test.' },
      { q: 'Are the classes in German?', a: 'No. All our classes are live and taught in English only. Our mentors speak clearly, slow down where a step is hard, and adapt to your child\'s pace and accent, and they always show the German word and the German way of writing numbers, such as the decimal comma.' },
      { q: 'Does VERA count toward my child\'s grades?', a: 'No. The IQB says VERA results are not graded and no rankings of schools or Länder are made. VERA 3 and VERA 8 show a teacher where a class stands a year before the KMK standards are due, so there is no need to cram for them.' },
      { q: 'When is VERA 8 in 2027?', a: 'The IQB gives the VERA 8 test window as 8 February to 25 March 2027, and the VERA 3 window as 12 April to 26 May 2027. Each school chooses its own day inside the window.' },
      { q: 'When is the MSA maths exam in Berlin in 2027?', a: 'The Berlin exam plan for 2026/27 sets the written maths exam for the MSA on Thursday 15 April 2027, starting at 10:00, with a catch-up date on Monday 24 May 2027.' },
      { q: 'When is the ZP10 maths exam in NRW in 2027?', a: 'The NRW school ministry has set the ZP10 maths exam for Thursday 20 May 2027, starting at 9:00, with the resit on Thursday 3 June 2027.' },
      { q: 'Do you teach for the Abitur too?', a: 'Yes, through our Abitur Mathematik in English course for Leistungskurs and Grundkurs. We teach alongside school and do not award German grades or certificates; the school course is the one that counts.' },
      { q: 'What times are possible from Germany?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. India is 4 hours 30 minutes ahead of Germany in winter and 3 hours 30 minutes ahead in summer, so German afternoons are evenings for our mentors.' },
      { q: 'Who are the tutors?', a: 'Our mentors are based in India and teach live online in English. Your child keeps the same mentor from week to week, so the mentor knows the weak strand and the last Klassenarbeit.' },
      { q: 'How much does it cost?', a: 'The monthly fee is shown on this page in euro, converted at the European Central Bank reference rate. Payment is taken in US dollars and your bank converts it. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Other pages for families in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our hub page for families across Germany.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The Abitur maths exam explained step by step.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Computer science help, page in German.' },
      { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Klasse 5 to 10 maths', p: 'The middle-years syllabus in full.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live class looks like.' },
      { href: '/courses', label: 'All courses', p: 'The full course list.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class the mentor gives your child a few short tasks across the five strands, sees which one wobbles, and explains in plain words what a few months of help would focus on. You then choose a group or one to one, or neither.',
    readFirst: 'If you like to read first, the <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">Klasse 5 to 10 syllabus</a> lists every topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows a class from start to end.',
    note: 'Our mentors work from India and every class is live and in English only. For a quick question, WhatsApp is fastest.',
    formNote: 'Free. No card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/courses/elementary-mathematics-complete-masterclass', label: 'Grundschule maths' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Klasse 5 to 10 maths' },
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Abitur Mathematik in English' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Estimate first, then calculate'
  },

  personalityCss: `
.ag-root.ag-tut .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-tut .ag-capsule { border-left-width: 5px; }
.ag-root.ag-tut .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-tut .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-tut .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'IQB VERA 3, VERA 8 and VERA implementation pages; KMK primary, Sek I and Eurydice pages; KMK maths standards (primary and ESA/MSA, 23.06.2022); Berlin Prüfungsplan 2026/27 and MSA page; NRW ZP10 Termine 2027; NRW Abitur Anlage A 2027. Read 2 and 3 November 2026. Practice set our own.',
    localProject: 'An original five-task practice set on estimating before calculating, one task per KMK Leitidee from Klasse 3 to 10 (85 cm, 10.83 minutes, 4.8 m, about 57,964, 12.1 cm), checked by a short Python script that prints the gap between estimate and answer. Lesson family: estimate first, then calculate, then compare.',
    requiredMentions: ['Thursday 15 April 2027, from 10:00', 'Thursday 20 May 2027, from 9:00', '8 February to 25 March 2027', '12 April to 26 May 2027', 'VERA results are not graded', '&radic;23.04 = 4.8 m', 'gap +17.6%', 'Estimate first, then calculate'],
    sources: [
      { claim: 'VERA 3: compulsory, annual, five Leitideen, other names, 2027 window.', url: 'https://www.iqb.hu-berlin.de/de/schule/primarstufe/vera-3/' },
      { claim: 'VERA 8: subjects, Leitideen, 2027 window.', url: 'https://www.iqb.hu-berlin.de/de/schule/sekundarstufe-i/vera/' },
      { claim: 'VERA not graded, no rankings.', url: 'https://www.iqb.hu-berlin.de/de/bista/implementation-und-ueberpruefung/vera/' },
      { claim: 'Berlin MSA and Abitur 2027 dates.', url: 'https://www.berlin.de/sen/bildung/schule/pruefungen-und-abschluesse/pruefungsplan-2027.pdf' },
      { claim: 'Berlin MSA core subjects.', url: 'https://www.berlin.de/sen/bildung/schule/pruefungen-und-abschluesse/abschluesse-am-gymnasium-nach-klasse-9-und-10/' },
      { claim: 'NRW ZP10 2027 dates and start time.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-10/termine/zentrale-pruefungen-10-termine-2027' },
      { claim: 'ESA/MSA maths standards 2022 and process competences.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2022/2022_06_23-Bista-ESA-MSA-Mathe.pdf' },
      { claim: 'Grundschule length, no leaving exam, Sek I tracks.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' }
    ],
    rejectedClaims: [
      'MSA or Klasse 10 exam dates for Länder other than Berlin and NRW: not fetched, so not printed.',
      'That VERA affects grades or school choice: the IQB says the results are not graded.',
      'Any grade improvement promise: refused.',
      'Reproducing real VERA, MSA or ZP10 tasks: refused; the practice set is ours.',
      'Any connection with the IQB, the KMK or a Land ministry: none.'
    ]
  }
};
