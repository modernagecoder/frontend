'use strict';
// Abitur maths in English (ag- English door, Germany cluster P1 pilot, rows.tsv pillars).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only, with
// mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle: for English-speaking pupils at German schools (international families, Indian families, bilingual pupils) who
// sit the German Abitur in maths: the exam's real structure from the IQB pool document (Part A without aids, Part B with,
// marks by area, 300 and 255 minutes, the Notenpunkte table), the 2027 dates in NRW, the German operator words, and three
// original Part A style tasks solved in English with the German term beside each idea.
// Sources (raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md and src/iqb-m-struktur/
// deb3a449.txt, "Stand: 19.06.2024", fetched 2 Nov 2026):
//  - IQB Abitur page: pools since 2017 for German, maths, English, French (fact 30); common dates since 2022 (31); each
//    Land's own commission picks pool tasks and adds its own (32); used tasks published with Erwartungshorizonte (33).
//  - IQB Beschreibung der Struktur, Mathematik: Part A no aids, Part B aids; all three areas in both (34); Part A handed in
//    within 110 minutes (raised level) or 100 (basic), all Länder from 2025 (35); raised level 100 Bewertungseinheiten,
//    300 minutes (36, 37); basic 80 BE, 255 minutes (38, 39); +30 minutes choice time if a Land offers a choice in Part B
//    (footnotes 4 and 5); marks: raised Part A 30, Part B Analysis 30, AG/LA 20, Stochastik 20; basic Part A 25, Part B 25,
//    15, 15; Notenpunkte table 15 = 95 %, 10 = 70 %, 5 = 45 %, 1 = 20 %.
//  - KMK Eurydice dossier: Abitur after grade 12 (G8) or 13 (G9) (fact 26).
//  - Bavaria ministry: three written and two oral exams (41).
//  - NRW Standardsicherung: written main exams 13 April to 5 May 2027 (42); last Q2 teaching day 19 March 2027 (43);
//    Mathematik LK and GK Wednesday 5 May 2027 (44); exams start 9:00 (48).
// Our own: three original tasks, checked in Python (f(1) = 4, f(3) = 0; P = 3/10 and 7/10; |AB| = 3; P on g at t = 2).
// Lesson family: answer the operator, not just the question.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  slug: 'abitur-maths-in-english',
  code: 'abm',
  accent: '#2B4A6F',
  accentRationale: 'Abitur maths in English: a deep slate blue #2B4A6F, the ink of an exam paper, distinct from the Berlin brick and the Informatik petrol; contrast 8.57 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Abitur maths in English',
  title: 'Abitur Maths in English: Exam Structure, Dates and Tutoring',
  description: 'Abitur maths in English for pupils at German schools: the IQB exam structure, Part A and B marks, 2027 dates, the German operator words and live tutoring.',
  ogDescription: 'How the German Abitur maths exam works, explained in English: Part A without a calculator, Part B with aids, marks by topic, 300 and 255 minutes, the points table, and three solved practice tasks.',
  twitterDescription: 'The German Abitur maths exam in English: structure, marks, 2027 dates and solved practice tasks.',
  pageName: 'Abitur Maths in English',
  webPageDescription: 'A guide in English to the German Abitur in mathematics for international, bilingual and English-speaking pupils at German schools, built from the IQB common task pool documents, the KMK and the NRW 2027 timetable, with three original practice tasks solved step by step.',
  courseDescription: 'Live online Abitur maths tutoring in English for Leistungskurs and Grundkurs pupils across Germany: Analysis, Analytische Geometrie and Lineare Algebra, Stochastik, Part A practice without aids and full mock exams, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Abitur maths in English',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#structure', label: 'Exam structure' },
    { href: '#marks', label: 'Marks' },
    { href: '#dates', label: '2027 dates' },
    { href: '#words', label: 'German terms' },
    { href: '#practice', label: 'Practice' }
  ],
  eyebrow: 'Germany &middot; Abitur Mathematik &middot; Ages 16 to 19',
  h1: 'Abitur maths in English',
  lede: 'Thousands of pupils at German schools think about maths in English: children of international families, pupils who moved from India, Britain or the US, and bilingual pupils who simply understand a proof faster in English. They still sit the German Abitur. This page explains, in English, how the Abitur maths exam is built from the common task pool of the Länder, how the marks are split, when the 2027 papers are, which German words the questions use, and three solved practice tasks of the kind you meet in the part without a calculator.',
  secondaryCta: { href: '#structure', label: 'How the exam works' },
  wa: 'Hello Modern Age Coders, I am preparing for the Abitur in maths in Germany and would like tutoring in English. Could I book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; one mentor, Leistungskurs or Grundkurs, in English',
  spec: [
    ['For', 'Leistungskurs and Grundkurs pupils'],
    ['Covers', 'Analysis, Geometrie, Stochastik'],
    ['Practice', 'Part A without aids, full mocks'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Times', 'German afternoons and weekends, flexible'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Abitur maths in English at Modern Age Coders is live online tutoring in English for pupils at German schools taking Mathematik as Leistungskurs or Grundkurs: Analysis, Analytische Geometrie and Lineare Algebra, and Stochastik, with timed practice for Part A without aids and full mock papers of 300 or 255 minutes. Every idea is taught in English with the German term beside it, and one regular mentor matches your pace and accent.',

  picks: {
    eyebrow: 'Courses for the Abitur',
    h2: 'Three maths courses for pupils in Germany',
    lede: 'One built for the German Abitur itself, and two for pupils at international schools in Germany who sit the IB or A levels instead.',
    items: [
      { course: 'abitur-mathematics-course-in-english', code: 'ABM / 01', title: 'Abitur Mathematik in English', note: 'Ages 16 to 19, Leistungskurs and Grundkurs. Analysis, geometry and stochastics on the IQB pool format, with Part A practice and full mocks.' },
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'ABM / 02', title: 'IB Maths AA and AI', note: 'For IB Diploma pupils at international schools in Germany: SL and HL, with coaching for the internal assessment.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'ABM / 03', title: 'A Level Maths', note: 'For pupils at British schools in Germany: pure, mechanics and statistics for Edexcel and AQA.' }
    ]
  },

  sections: [
    {
      id: 'structure',
      eyebrow: 'Exam structure',
      h2: 'How is the German Abitur maths exam structured?',
      lede: 'Since 2017 the Länder have shared a common pool of Abitur tasks in maths, coordinated by the IQB, the Länder\'s institute for quality in education at Humboldt-Universität in Berlin. The structure below is the IQB\'s own description of the pool tasks.',
      body: [
        { kind: 'two',
          leftH3: 'Two parts, one exam',
          left: [
            'Every pool exam has two parts. In Part A (Prüfungsteil A) no aids are allowed: no calculator and no formula booklet. In Part B (Prüfungsteil B) the aids your Land permits may be used. Both parts contain tasks from all three areas: Analysis, Analytische Geometrie or Lineare Algebra, and Stochastik.',
            'Part A is a set of short, unconnected tasks. Part B has longer tasks split into connected subtasks, and some of those subtasks can still be ones where aids give no real advantage.'
          ],
          rightH3: 'You choose when to switch',
          right: [
            'At the start you receive both parts. You decide when to hand in Part A and receive your aids, but you must do so within the first 110 minutes at raised level (Leistungskurs) or the first 100 minutes at basic level (Grundkurs). The IQB says all Länder apply this rule from the 2025 exams.',
            'That one rule shapes good preparation: Part A has to be fast and safe without a calculator, so that time is left for the long Part B tasks.'
          ] },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'The two levels of the pool exam in maths', head: ['', 'Raised level (Leistungskurs)', 'Basic level (Grundkurs)'], rows: [
          ['Total marks (Bewertungseinheiten)', '100', '80'],
          ['Working time, including choice time', '300 minutes', '255 minutes'],
          ['Hand in Part A within', '110 minutes', '100 minutes'],
          ['Extra time if Part B offers a choice', '30 minutes', '30 minutes']
        ] },
        { kind: 'source', html: 'Source: IQB, Gemeinsame Abituraufgabenpools der Länder, Aufgaben für das Fach Mathematik, Beschreibung der Struktur (Stand 19 June 2024), and the IQB Abitur pages, read 2 November 2026. Each Land decides through its own commission which pool tasks it uses and how many of its own tasks it adds, so check your school\'s information for the exact rules in your Land.' }
      ]
    },
    {
      id: 'marks',
      eyebrow: 'Marks',
      h2: 'How are the marks split, and how many points do you need?',
      lede: 'The pool exam fixes how many marks each area carries in each part, and a common table turns marks into the 0 to 15 Notenpunkte of the Abitur.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Marks (Bewertungseinheiten) by part and area', head: ['Part and area', 'Raised level', 'Basic level'], rows: [
          ['Part A, without aids, all three areas', '30', '25'],
          ['Part B, Analysis', '30', '25'],
          ['Part B, Analytische Geometrie or Lineare Algebra', '20', '15'],
          ['Part B, Stochastik', '20', '15'],
          ['Total', '100', '80']
        ] },
        { kind: 'table', mt: true, numCols: [0, 1], caption: 'From share of marks to Notenpunkte (selected rows)', head: ['Notenpunkte', 'Share of all marks needed'], rows: [
          ['15', '95 %'],
          ['13', '85 %'],
          ['10', '70 %'],
          ['7', '55 %'],
          ['5', '45 %'],
          ['3', '33 %'],
          ['1', '20 %']
        ] },
        { kind: 'source', html: 'Source: IQB, Beschreibung der Struktur, sections 1.1, 1.2 and 2. The full table has a row for every point from 0 to 15.' },
        { kind: 'p', mt: true, html: 'Two things follow. First, Analysis is the largest single area at both levels, but geometry and stochastics together carry as many Part B marks as Analysis does, so neither can be left out. Second, Part A is worth 30 of 100 marks at raised level. A pupil who is quick and accurate without a calculator has banked almost a third of the exam before the long tasks begin; one who is slow there loses time for Part B as well.' }
      ]
    },
    {
      id: 'dates',
      eyebrow: '2027 dates',
      h2: 'When is the Abitur maths exam in 2027?',
      lede: 'Since 2022, the Abitur in German, English, French and maths has been held largely on common dates across the Länder. The exact day is set by each Land; Nordrhein-Westfalen has published its 2027 timetable.',
      body: [
        { kind: 'table', numCols: [], caption: 'Nordrhein-Westfalen, written Abitur 2027 (main dates)', head: ['What', 'Date'], rows: [
          ['Last teaching day for Q2', 'Friday 19 March 2027'],
          ['Written exams, main dates', '13 April to 5 May 2027'],
          ['Deutsch', 'Tuesday 27 April 2027'],
          ['Englisch', 'Friday 30 April 2027'],
          ['Mathematik, Leistungskurs and Grundkurs', 'Wednesday 5 May 2027, from 9:00']
        ] },
        { kind: 'source', html: 'Source: Ministerium für Schule und Bildung NRW, Standardsicherung, Zentralabitur gymnasiale Oberstufe, Termine 2027 and Anlage A, read 2 November 2026. Other Länder publish their own timetables; in Bayern, the Abitur consists of three written and two oral exams, according to the Bavarian ministry.' },
        { kind: 'p', mt: true, html: 'Counting back from 5 May 2027, a pupil in NRW has about six months from today. We plan that time in three blocks: one area at a time until February, mixed Part A practice and past pool tasks from the IQB website in March, and full timed mock papers after the last teaching day.' }
      ]
    },
    {
      id: 'words',
      eyebrow: 'German terms',
      h2: 'Which German words do Abitur maths questions use?',
      lede: 'Classes are in English, but the paper your school sets will use German terms. Every class pairs the English idea with the word you will read in the exam.',
      body: [
        { kind: 'table', numCols: [], caption: 'Operator words and terms, German and English', head: ['In the question', 'What it asks you to do', 'Common trap'], rows: [
          ['berechnen', 'calculate: a number, with working', 'Giving the number with no working'],
          ['bestimmen', 'determine: find it by any valid method', 'Not stating which method'],
          ['zeigen, nachweisen', 'show, prove: reach the given result', 'Starting from the result'],
          ['begründen', 'justify: give the reason', 'A correct claim with no reason'],
          ['beurteilen', 'assess: judge and explain your judgment', 'Only describing'],
          ['skizzieren', 'sketch: key features, not exact', 'Plotting many points instead'],
          ['Ableitung, Stammfunktion', 'derivative, antiderivative', 'Mixing up f\' and F'],
          ['Extrempunkt, Wendepunkt', 'turning point, point of inflection', 'Forgetting the y value'],
          ['Ortsvektor, Richtungsvektor', 'position vector, direction vector', 'Using a point as a direction'],
          ['Erwartungswert, Binomialverteilung', 'expected value, binomial distribution', 'Ignoring "mindestens" (at least)']
        ] },
        { kind: 'p', mt: true, html: 'Most marks lost by pupils who think in English are not lost on the maths. They are lost on the operator: a pupil who is asked to "begründen" and writes only a correct number has not answered the question. We practise reading the operator first in every task.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'English only, said plainly', p: 'All our classes are live and taught in English. We do not teach in German; we teach the German words you need.' },
          { h3: 'Pace and accent matched', p: 'Mentors speak clearly, slow down for a hard step, and adapt to how each pupil speaks and asks.' },
          { h3: 'Same mentor every week', p: 'One person who knows your weak area and your mock results.' }
        ] }
      ]
    },
    {
      id: 'practice',
      tint: 'tint',
      eyebrow: 'Practice',
      h2: 'Three Part A style tasks, solved in English',
      lede: 'Our own tasks in the style of Part A: short, no calculator, one per area. They are not real Abitur tasks; the IQB publishes those after each exam year.',
      body: [
        { kind: 'two',
          leftH3: '1. Analysis (Analysis)',
          left: [
            '<strong>Task.</strong> Given f(x) = x³ &minus; 6x² + 9x. Bestimmen Sie the points where the graph has a horizontal tangent, and decide their type.',
            '<strong>Solution.</strong> f\'(x) = 3x² &minus; 12x + 9 = 3(x &minus; 1)(x &minus; 3), so f\'(x) = 0 at x = 1 and x = 3. f\'\'(x) = 6x &minus; 12 gives f\'\'(1) = &minus;6 &lt; 0, a maximum, and f\'\'(3) = 6 &gt; 0, a minimum. With f(1) = 4 and f(3) = 0: high point H(1 | 4), low point T(3 | 0).',
            '<strong>Where marks go.</strong> Many pupils stop at "x = 1 and x = 3". The question asks for points, so the y values are part of the answer.'
          ],
          rightH3: '2. Stochastics (Stochastik)',
          right: [
            '<strong>Task.</strong> A bag holds 3 red and 2 blue balls. Two are drawn without replacement. Berechnen Sie the probability that both are red, and that at least one is blue.',
            '<strong>Solution.</strong> P(both red) = 3/5 &middot; 2/4 = 6/20 = 3/10. "At least one blue" is the complement: 1 &minus; 3/10 = 7/10.',
            '<strong>Where marks go.</strong> "Mindestens ein" (at least one) is almost always quickest by the complement. Pupils who list every case run out of Part A time.'
          ] },
        { kind: 'p', mt: true, html: '<strong>3. Geometry (Analytische Geometrie).</strong> Given A(1 | 0 | 2) and B(3 | 2 | 1). <em>Task:</em> berechnen Sie the length of AB, and prüfen Sie whether P(5 | 4 | 0) lies on the line g through A and B. <em>Solution:</em> AB = (2, 2, &minus;1), so |AB| = &radic;(4 + 4 + 1) = &radic;9 = 3. The line is g: x = (1, 0, 2) + t &middot; (2, 2, &minus;1). For P, the first coordinate gives 1 + 2t = 5, so t = 2; then 0 + 2 &middot; 2 = 4 and 2 &minus; 2 = 0 also match, so P lies on g. <em>Where marks go:</em> checking only one coordinate. A point is on the line only if one value of t fits all three.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Read the operator first.</strong> Underline berechnen, bestimmen, zeigen or begründen before you read the rest.',
          '<strong>Give the full object.</strong> A point has two or three coordinates; a probability is a number between 0 and 1.',
          '<strong>Check with a second route.</strong> In task 2, 3/10 + 7/10 = 1 is a one-second check.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Preparation plan',
    h2: 'From now to the written exam',
    lede: 'Our own plan for a pupil sitting the written Abitur in spring 2027, adjusted to each pupil\'s Land and level.',
    table: { caption: 'A six-month Abitur maths plan (ours)', head: ['Months', 'Focus', 'Practice'], rows: [
      ['November and December', 'Analysis: functions, derivatives, integrals', 'Short tasks without a calculator every class'],
      ['January', 'Analytische Geometrie or Lineare Algebra', 'Lines, planes, distances, matrices'],
      ['February', 'Stochastik', 'Binomial distribution, tree diagrams, tests'],
      ['March', 'Mixed Part A sets', 'Timed: 110 or 100 minutes'],
      ['April to May', 'Full mock papers', '300 or 255 minutes, marked to the points table']
    ] },
    left: { h3: 'For parents', ps: [
      'After each mock we send the share of marks by area, so you can see whether Analysis, geometry or stochastics needs more time.',
      'A pupil who reaches 70 % of marks reaches 10 Notenpunkte; we report progress against that table, not in vague terms.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Do Part A without your calculator in every practice session, not only in mocks.',
      'When you check a solution, check the operator: did you calculate, show, or justify, as asked?'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths',
    h2: 'Nine more maths courses for pupils in Germany',
    lede: 'All live, in English, with one regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Building up', sub: 'Ages 10 to 16', courses: [
        { code: 'ABM / BASE / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'Algebra and geometry foundations for the years before Oberstufe.' },
        { code: 'ABM / BASE / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For any pupil whose algebra needs to be secure first.' },
        { code: 'ABM / BASE / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Functions and data explored in Python, 10 to 15.' }
      ] },
      { num: 'II', h3: 'Oberstufe and beyond', sub: 'Ages 15 to 19', courses: [
        { code: 'ABM / UPPER / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Algebra to calculus, grade 9 to 12 level.' },
        { code: 'ABM / UPPER / 02', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Core, Extended and Additional, for international schools.' },
        { code: 'ABM / UPPER / 03', slug: 'a-level-further-maths-course', title: 'A Level Further Maths', blurb: 'For strong pupils at British schools.' }
      ] },
      { num: 'III', h3: 'Stretch', sub: 'Ages 8 to 19', courses: [
        { code: 'ABM / STRETCH / 01', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Mathematik-Olympiade and Känguru', blurb: 'Competition problem solving by Klassenstufe.' },
        { code: 'ABM / STRETCH / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Maths olympiad', blurb: 'International competition maths, AMC to IMO.' },
        { code: 'ABM / STRETCH / 03', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus and linear algebra for the first year of study.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live Abitur tutoring works',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekday afternoons. Two live classes a week, an hour each, with the same mentor.',
    slots: [
      { time: 'Afternoons', l: 'After school, from about 15:00 German time (19:30 in India in winter).' },
      { time: 'Weekends', l: 'Saturday and Sunday mornings, good for mock papers.' },
      { time: '1-on-1', l: 'Extra sessions before Klausuren and the exam.' }
    ],
    cells: [
      { h3: 'English, German terms', p: 'Taught in English, every term given in German too.' },
      { h3: 'Part A drills', p: 'Short tasks without a calculator, every class.' },
      { h3: 'Your Land, your level', p: 'Leistungskurs or Grundkurs, your Land\'s rules.' },
      { h3: 'Mocks marked fairly', p: 'Scored with the points table from the pool.' },
      { h3: 'Reports', p: 'Marks by area after every mock.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty pupils, or one to one.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Our older students also build real software. A few projects are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Parents\' and students\' Google reviews, exactly as they wrote them.',

  fees: {
    h2: 'Fees for pupils in Germany',
    lede: 'The fee is monthly and covers eight live classes. Fees are shown in euro at the European Central Bank reference rate; the payment itself is taken in US dollars, so your bank converts it and the amount on your statement can differ slightly.',
    free: ['A free first class', 'A short Part A style check to find your level', 'No card needed'],
    group: ['Fifteen to twenty pupils at your level', 'One regular mentor', 'Two classes a week', 'Paid monthly, stop any month'],
    one: ['You and one mentor', 'Your weak areas first', 'Times that suit you, more sessions before the exam']
  },

  faq: {
    eyebrow: 'Pupils and parents ask',
    h2: 'Abitur maths in English: common questions',
    items: [
      { q: 'Can I get Abitur maths tutoring in English?', a: 'Yes. Our Abitur Mathematik in English course is live online tutoring for Leistungskurs and Grundkurs pupils across Germany, taught in English only. Mentors match your pace and accent and give every key term in German too, because your exam paper will use German words.' },
      { q: 'How long is the Abitur maths exam?', a: 'In the common pool of the Länder, the raised-level exam (Leistungskurs) lasts 300 minutes and the basic-level exam (Grundkurs) 255 minutes, including choice time. If a Land offers a choice of tasks in Part B, the IQB allows 30 minutes more.' },
      { q: 'Is a calculator allowed in the Abitur maths exam?', a: 'Not in Part A. The IQB pool exam has a Part A without aids and a Part B where the aids your Land permits are allowed. You hand in Part A within 110 minutes at raised level or 100 minutes at basic level, then receive your aids.' },
      { q: 'How many marks is each topic worth?', a: 'At raised level, Part A carries 30 of 100 marks; in Part B, Analysis carries 30, Analytische Geometrie or Lineare Algebra 20 and Stochastik 20. At basic level the figures are 25, 25, 15 and 15, out of 80.' },
      { q: 'How many marks do I need for 10 Notenpunkte?', a: 'In the IQB points table, 10 Notenpunkte need at least 70 % of all marks, 15 need 95 %, and 5 need 45 %.' },
      { q: 'When is the maths Abitur in 2027?', a: 'In Nordrhein-Westfalen, the written maths exam for Leistungskurs and Grundkurs is on Wednesday 5 May 2027, starting at 9:00. Other Länder publish their own dates; since 2022 maths has been held largely on common dates across the Länder.' },
      { q: 'Is the Abitur the same in every Land?', a: 'Not exactly. The Länder share a common task pool, but each Land\'s own commission decides which pool tasks it uses and how many of its own it adds. We prepare you for the rules of your Land and your school.' },
      { q: 'Do you use real Abitur tasks?', a: 'For practice we write our own tasks in the pool style, and pupils also work through the past pool tasks the IQB publishes after each exam year, which include the expected answers. We never present a real task as our own.' },
      { q: 'Who are the tutors?', a: 'Our mentors are based in India and teach live online in English. You see the same mentor every week, at times that fit German afternoons or weekends.' },
      { q: 'What does it cost?', a: 'Fees are monthly and shown on this page in euro at the European Central Bank reference rate. The payment is taken in US dollars and converted by your bank. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for pupils and families in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for families in Germany.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Informatik tutoring in English, page in German.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'For younger brothers and sisters.' },
      { href: '/courses/abitur-mathematics-course-in-english', label: 'Abitur Mathematik in English', p: 'The full course syllabus.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes in detail.' },
      { href: '/courses', label: 'All courses', p: 'Every syllabus in one place.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is a short Part A style check in one area you choose. The mentor sees where marks slip, explains the plan to the exam, and suggests the group or one-to-one plan that fits.',
    readFirst: 'Before you book, <a class="ag-inline-link" href="/courses/abitur-mathematics-course-in-english">the course syllabus</a> lists every topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our live classes.',
    note: 'Classes are live online with mentors in India, taught in English only. WhatsApp is the fastest way to ask us anything.',
    formNote: 'Free, with no card and no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Abitur', links: [
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Abitur Mathematik in English' },
        { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Read the operator first'
  },

  personalityCss: `
.ag-root.ag-abm .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-abm .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-abm .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-abm .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-abm .ag-band-head h3 { letter-spacing: -0.005em; }
`,

  dossier: {
    curriculumAuthority: 'IQB Abitur pages and Beschreibung der Struktur (Mathematik, Stand 19.06.2024); KMK Eurydice dossier; Bavarian ministry Gymnasium page; NRW Standardsicherung Termine 2027 and Anlage A; all read 2 November 2026. Practice tasks our own.',
    localProject: 'Three original Part A style tasks solved in English with the German operator words: curve discussion of x³ − 6x² + 9x (H(1 | 4), T(3 | 0)), drawing without replacement (3/10, 7/10), and a point-on-line check (|AB| = 3, t = 2). Lesson family: answer the operator, not just the question.',
    requiredMentions: ['300 minutes', '255 minutes', '110 minutes', 'Wednesday 5 May 2027', 'high point H(1 | 4), low point T(3 | 0)', '1 &minus; 3/10 = 7/10', '&radic;9 = 3', 'Read the operator first'],
    sources: [
      { claim: 'Pool exam structure, marks, times, points table.', url: 'https://www.iqb.hu-berlin.de/media/documents/M_Beschreibung_der_Struktur_der_Aufgaben.pdf' },
      { claim: 'Pools since 2017, common dates since 2022, Land commissions, published tasks.', url: 'https://www.iqb.hu-berlin.de/abitur/' },
      { claim: 'NRW 2027 dates.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/termine/2027' },
      { claim: 'Bavaria three written, two oral.', url: 'https://www.km.bayern.de/lernen/schularten/gymnasium' }
    ],
    rejectedClaims: [
      'That the Abitur can be written in English: not stated; we teach the German terms instead.',
      'Pass rules for the whole Abitur: not stated; only the points table is quoted.',
      'Reproducing real pool tasks: refused; ours are original.',
      'Any affiliation with the IQB or a ministry: none.'
    ]
  }
};
