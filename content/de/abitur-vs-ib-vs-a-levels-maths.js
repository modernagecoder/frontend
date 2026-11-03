'use strict';
// Abitur vs IB vs A levels, maths (ag- pillar, Germany cluster row DE007).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only, with
// mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle: for families in Germany choosing between the German Abitur, the IB Diploma and A levels: the three maths exams
// side by side from primary documents only, the KMK rules that decide whether an IB Diploma opens German universities
// (including the SL maths restriction), and the KMK formula that turns IB points into a German average grade, coded and
// tested at its edges. abitur-maths-in-english already explains the Abitur pool structure; this page does not repeat it.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/abitur-vs-ib-vs-a-levels-maths/):
//  - KMK, Vereinbarung über die Anerkennung des "International Baccalaureate Diploma" (Beschluss 10.03.1986 i. d. F.
//    15.06.2023; Anlage 1 Stand 26.03.2026), fetched 3 November 2026: "nach einem Besuch von mindestens zwölf aufsteigenden
//    Jahrgangsstufen"; subjects must include "Mathematik (Mathematics: Analysis and Approaches oder Mathematics:
//    Applications and Interpretation)"; footnote 3: from the 2021 exam, SL maths gives "nur ein fachgebundener
//    Hochschulzugang ... für Studienfächer, die nicht dem mathematisch-naturwissenschaftlich-technischen Bereich zuzuordnen
//    sind" except schools in Anlagen 1 and 2; one HL subject must be "eine Sprache, Mathematik oder ein
//    naturwissenschaftliches Fach" (from the 2025 exam, footnote 9); "mindestens mit der IB-Note 4"; a single 3 offset by a
//    5 at the same level "und insgesamt mindestens 24 Punkte"; grades "4 = satisfactory ... 7 = excellent"; formula
//    "N = 1 + 3 (Pmax - P)/(Pmax - Pmin)", "Pmax = 42 Punkte", "Pmin = 24 Punkte", "N = 1,0 (für 42 ≤ P ≤ 45)"; average
//    computed "in dem Land ..., in dem das Zeugnis bewertet wird". Anlage 1 numbers 59 schools under DEUTSCHLAND.
//  - IB Diploma Programme Subject Brief, Mathematics: applications and interpretation, first assessments 2021
//    (c) IBO 2019, an unaltered IB PDF hosted by the University of Tartu (www-1.ms.ut.ee/too-ja-praktika/files/MHG-IB.pdf),
//    fetched 3 November 2026 (ibo.org itself returned 403 to earlier writers and was not fetched): "two different DP
//    subjects in mathematics"; "Both courses are offered at SL and HL"; "The IB recommends 240 teaching hours for HL
//    subjects and 150 hours for SL"; "All external assessments involve the use of technology"; Paper 1 and 2 SL 1.5 h, 40 %
//    each, HL 2 h, 30 % each; Paper 3 HL 1 h, 20 %; exploration 20 %, "compulsory for both SL and HL students".
//  - AQA A-level Mathematics 7357 specification, Version 1.3, 31 January 2018 (cdn.sanity.io PDF linked from aqa.org.uk),
//    fetched 3 November 2026: "This qualification is linear"; three papers, each "Written exam: 2 hours", "100 marks",
//    "33⅓ % of A-level"; "Total scaled mark: 300"; "six-point scale: A*, A, B, C, D and E"; U "will not receive a
//    qualification certificate"; "A calculator is required for use in all assessments".
//  - IQB Beschreibung der Struktur (Mathematik, Stand 19.06.2024): Part A without aids, Part B with (34); raised level 100
//    BE in 300 minutes, basic 80 BE in 255 minutes (36 to 39). IQB pools since 2017 (30). KMK Sek II: four or five exam
//    subjects, two of German, foreign language, maths (11); Notenpunkte. AGIS: IB Diploma "(mit vorgegebenen
//    Fächerkombinationen) dem deutschen Abitur gleichwertig" (248); all members authorised IB schools (247); English as
//    common language (250). KMK dossier: IB agreement dated 10.3.1986 i. d. F. 15.6.2023 (252).
// Our own: ibnote.py (python3 -I, 3 November 2026): 24 -> 4.0, 27 -> 3.5, 30 -> 3.0, 33 -> 2.5, 36 -> 2.0, 39 -> 1.5,
// 42 -> 1.0, 45 -> 1.0; without the 1.0 rule 45 -> 0.5. Minutes per mark: Abitur raised 300/100 = 3.0, basic 255/80 =
// 3.19 (both include choice time); AQA 360/300 = 1.2. IB marks per paper not in our source, so no IB figure.
// Lesson family: apply a published formula, then test it at its endpoints.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const NOTE = [
  'P_MAX, P_MIN = 42, 24      # from the KMK agreement on the IB Diploma',
  '',
  'def german_note(points, clamp=True):',
  '    if clamp and points >= P_MAX:          # 42 to 45 points all count as 1.0',
  '        return 1.0',
  '    return 1 + 3 * (P_MAX - points) / (P_MAX - P_MIN)',
  '',
  'for p in [24, 27, 30, 33, 36, 39, 42, 45]:',
  '    print(p, "points ->", round(german_note(p), 2))',
  '',
  'print("45 points without the 1.0 rule:", round(german_note(45, clamp=False), 2))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'guide', label: 'Abitur vs IB vs A levels (maths)' },
  slug: 'abitur-vs-ib-vs-a-levels-maths',
  code: 'aib',
  accent: '#026256',
  accentRationale: 'Abitur vs IB vs A levels: a deep teal #026256, the colour of a comparison ledger, set apart from the slate of the Abitur maths page and the green of the Informatik Abitur page; above 4.5:1 on the paper #FBF8F2 and its tints',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Abitur vs IB vs A levels maths',
  title: 'Abitur vs IB vs A Levels: Maths Compared for Germany',
  description: 'Abitur, IB or A levels in Germany? The three maths exams compared from official documents, the KMK rules for the IB Diploma, and IB points to German grade.',
  ogDescription: 'For families in Germany choosing a school route: German Abitur maths, IB Maths and A level Maths side by side, the KMK conditions that make an IB Diploma count for German universities, and the formula that turns IB points into a German grade.',
  twitterDescription: 'Abitur vs IB vs A levels for maths in Germany: exams compared, KMK IB rules, points to grades.',
  pageName: 'Abitur vs IB vs A Levels: Maths',
  webPageDescription: 'A comparison in English of the maths exams in the German Abitur, the IB Diploma and A levels, written for families in Germany, using the IQB structure document, an IB subject brief, the AQA specification and the KMK agreement on recognising the IB Diploma, with an original program that converts IB points to a German average grade.',
  courseDescription: 'Live online maths tutoring in English for pupils in Germany on any of the three routes: IB Maths AA and AI at SL and HL, German Abitur Mathematik at Grundkurs and Leistungskurs, and A level Maths, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Abitur vs IB vs A levels',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#compare', label: 'Side by side' },
    { href: '#recognition', label: 'IB in Germany' },
    { href: '#points', label: 'Points to grade' },
    { href: '#choose', label: 'Which suits' }
  ],
  eyebrow: 'Germany &middot; Abitur, IB, A levels &middot; Maths',
  h1: 'Abitur vs IB vs A levels: the maths, compared',
  lede: 'Families who move to Germany with teenagers often face a choice of route: the German Abitur at a local school, the IB Diploma at an international school, or A levels at a British one. Maths is where the routes differ most, in how it is examined, whether a calculator is allowed and whether it can close doors later. This guide compares the three from their official documents, then explains the German rules that decide what an IB Diploma is worth at a German university.',
  secondaryCta: { href: '#compare', label: 'See the comparison' },
  wa: 'Hello Modern Age Coders, my teenager is in Germany and we are comparing the Abitur, IB and A levels for maths. Could we book a free first class in English?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; IB, Abitur and A level maths tutoring in English',
  spec: [
    ['For', 'Families choosing a route in Germany'],
    ['Covers', 'Abitur, IB AA and AI, A level'],
    ['Levels', 'GK and LK, SL and HL'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Times', 'German afternoons and weekends'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'The German Abitur tests maths in one long exam with a part without a calculator; IB Maths (AA or AI) adds a compulsory exploration and allows technology in every paper; A level Maths is three two-hour papers with a calculator throughout. Under KMK rules, an IB Diploma with SL maths limits German university choices. Modern Age Coders tutors all three live online in English, in a group or one to one.',

  picks: {
    eyebrow: 'One course per route',
    h2: 'Three maths courses, one for each route',
    lede: 'Whichever route your teenager takes, the mentor teaches to that exam, not to a general syllabus.',
    items: [
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'AIB / 01', title: 'IB Maths AA and AI', note: 'SL and HL for both IB maths subjects, with coaching on choosing a topic for the exploration.' },
      { course: 'abitur-mathematics-course-in-english', code: 'AIB / 02', title: 'Abitur Mathematik in English', note: 'Grundkurs and Leistungskurs, with practice for the part without aids and full timed papers.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'AIB / 03', title: 'A Level Maths', note: 'Pure, mechanics and statistics for pupils at British schools in Germany.' }
    ]
  },

  sections: [
    {
      id: 'compare',
      eyebrow: 'Side by side',
      h2: 'How do Abitur, IB and A level maths exams compare?',
      lede: 'One column per route, each filled only from that route\'s own document. For the IB we quote the subject brief for Mathematics: applications and interpretation (AI), because it is the one we could read in full; the IB\'s other maths subject, analysis and approaches (AA), shares its assessment objectives.',
      body: [
        { kind: 'table', numCols: [], caption: 'Maths in three school-leaving routes, from the official documents', head: ['', 'German Abitur (IQB pool)', 'IB Maths AI', 'A level Maths (AQA 7357)'], rows: [
          ['Levels', 'Grundkurs (basic) or Leistungskurs (raised)', 'SL or HL', 'One level'],
          ['Written exam', 'One sitting: 255 minutes basic, 300 raised, including choice time', 'SL: two papers of 1.5 hours; HL: two of 2 hours and one of 1 hour', 'Three papers of 2 hours each'],
          ['Calculator', 'None in Part A; Part B with the aids the Land allows', 'All external assessments use technology', 'Required in all assessments'],
          ['Coursework', 'None in the pool exam', 'Exploration, 20 % at SL and HL', 'None; all exams at the end'],
          ['Marks', '80 basic, 100 raised', 'SL papers 40 % each; HL 30, 30 and 20 %', '300 in total, 100 per paper'],
          ['Final scale', '0 to 15 Notenpunkte', 'IB grades 1 to 7', 'A* to E, or U'],
          ['Teaching time', 'Set by each Land', 'Recommended 150 hours SL, 240 HL', 'Not stated in the specification we read']
        ] },
        { kind: 'source', html: 'Sources: IQB, Gemeinsame Abituraufgabenpools der Länder, Mathematik, Beschreibung der Struktur (Stand 19 June 2024); International Baccalaureate, DP Subject Brief, Mathematics: applications and interpretation, first assessments 2021 (copy hosted by the University of Tartu); AQA, A-level Mathematics 7357 specification, Version 1.3, 31 January 2018; IB grade names from the KMK agreement below. Read 2 and 3 November 2026. We did not fetch ibo.org itself.' },
        { kind: 'two', mt: true,
          leftH3: 'Time per mark, our arithmetic',
          left: [
            'Dividing the written time by the marks gives a rough sense of pace. A Leistungskurs pupil in the pool exam has 300 minutes for 100 marks, 3 minutes a mark; a Grundkurs pupil 255 for 80, about 3.2. An A level candidate has 360 minutes for 300 marks, 1.2 minutes a mark.',
            'These are our calculations, and the Abitur figures include choice time. They say nothing about difficulty, only about rhythm: A level papers reward speed on many short steps, the Abitur rewards stamina on long connected tasks.'
          ],
          rightH3: 'Where the calculator goes',
          right: [
            'The biggest practical difference is technology. The Abitur pool exam keeps a whole part without any aids; the IB AI brief says every external assessment involves technology; AQA requires a calculator in every paper.',
            'A pupil switching from IB or A levels into a German Oberstufe usually needs the most help with fast, exact work by hand. One moving the other way needs to learn the calculator as a tool, not a crutch.'
          ] },
        { kind: 'p', mt: true, html: 'The Abitur side is explained in full on our page <a class="ag-inline-link" href="/abitur-maths-in-english">Abitur maths in English</a>, with the marks by area and the 2027 dates in Nordrhein-Westfalen, where the maths papers are on Wednesday 5 May 2027.' }
      ]
    },
    {
      id: 'required',
      eyebrow: 'Is maths compulsory?',
      h2: 'Can you drop maths on each route?',
      lede: 'The three routes treat maths very differently, and that matters for a pupil who finds it hard.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Abitur: nearly always in', p: 'The KMK says the Abitur covers four or five exam subjects, and two of them must come from German, a foreign language and maths. In practice almost every pupil keeps maths to the end, and it counts in the overall grade.' },
          { h3: 'IB: always in', p: 'For an IB Diploma to count as a university entrance qualification in Germany, the KMK requires maths among the six subjects: either Analysis and Approaches or Applications and Interpretation.' },
          { h3: 'A levels: a choice', p: 'A levels are chosen subject by subject. AQA\'s specification sets no previous learning requirements for A level Maths, and a pupil who does not choose it simply does not sit it.' }
        ] }
      ]
    },
    {
      id: 'recognition',
      tint: 'tint',
      eyebrow: 'The IB in Germany',
      h2: 'Is the IB Diploma recognised as equal to the Abitur in Germany?',
      lede: 'Yes, under conditions. The KMK has an agreement on recognising the IB Diploma, first adopted on 10 March 1986 and last amended on 15 June 2023. AGIS, the association of international schools in Germany, sums it up: the IB Diploma, with the prescribed subject combinations, is equivalent to the German Abitur. The conditions are where families need to look carefully.',
      body: [
        { kind: 'table', numCols: [], caption: 'Conditions in the KMK agreement for an IB Diploma to open German universities', head: ['Condition', 'What the agreement says'], rows: [
          ['Years of school', 'At least twelve ascending school years of full-time schooling'],
          ['Subjects', 'Two languages, a natural science, maths (AA or AI), a social science, and a sixth subject from a list'],
          ['Higher Level', 'From the 2025 exams, one of the three HL subjects must be a language, maths or a natural science'],
          ['Continuity', 'All subjects taken for the full two years'],
          ['Grades', 'Each of the six subjects at IB grade 4 or better; one 3 can be offset by a 5 at the same level and at least 24 points in total'],
          ['Maths at SL', 'Since the 2021 exams: only subject-restricted access, outside maths, science and technology, unless the school is on the KMK\'s list'],
          ['German', 'German holders from a school abroad without German in its IB programme must show enough German before study']
        ] },
        { kind: 'source', html: 'Source: KMK, Vereinbarung über die Anerkennung des "International Baccalaureate Diploma / Diplôme du Baccalauréat International", Beschluss vom 10.03.1986 i. d. F. vom 15.06.2023, Anlage 1 Stand 26.03.2026, read 3 November 2026. AGIS homepage, read 2 November 2026. This is a summary, not advice: the university or the Land\'s certificate office makes the decision.' },
        { kind: 'two', mt: true,
          leftH3: 'The SL maths rule, in plain words',
          left: [
            'Footnote 3 of the agreement is the line most families miss. A pupil who sat Mathematics AA SL or AI SL from the 2021 exams on gets, as a rule, only a subject-restricted entry: university courses outside the mathematics, natural science and technology area.',
            'The exception is a list of schools whose graduates meet the maths requirement with SL. Anlage 1 of the agreement, dated 26 March 2026, numbers 59 schools in Germany. If your teenager is at an IB school in Germany and may want to study engineering, computer science or a science, ask the school whether it is on that list, or plan for HL maths.'
          ],
          rightH3: 'What this means for subject choice',
          right: [
            'At sixteen, choosing SL maths can look like the safe option. Under these rules it can quietly close the door to a German engineering or science degree. HL maths keeps it open everywhere.',
            'We are not connected to the KMK, the IB or any school, and we do not give admissions advice. We do help pupils who choose HL to cope with it, which is often what makes the choice possible.'
          ] }
      ]
    },
    {
      id: 'points',
      eyebrow: 'A formula you can run',
      h2: 'How do IB points become a German Abitur grade?',
      lede: 'The KMK agreement gives one formula for the German average grade (Durchschnittsnote) of an IB Diploma: N = 1 + 3 &times; (Pmax &minus; P) / (Pmax &minus; Pmin), with Pmax = 42 and Pmin = 24, and every total from 42 to 45 points counted as 1.0. We coded it in five lines and tested it the way we teach every formula: at its ends first.',
      body: [
        { kind: 'code', label: 'IB points to a German average grade', lang: 'Python', code: NOTE, note: 'Run with Python 3 on 3 November 2026, it prints <code>24 points -&gt; 4.0</code>, <code>27 points -&gt; 3.5</code>, <code>30 points -&gt; 3.0</code>, <code>33 points -&gt; 2.5</code>, <code>36 points -&gt; 2.0</code>, <code>39 points -&gt; 1.5</code>, <code>42 points -&gt; 1.0</code>, <code>45 points -&gt; 1.0</code> and <code>45 points without the 1.0 rule: 0.5</code>.' },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers show',
          left: [
            'The formula is a straight line: every three IB points move the German grade by half a step. 24 points sit at 4.0, the lowest pass grade of the Abitur, and 42 at 1.0, the top.',
            'The agreement says the grade is worked out in the Land where the certificate is assessed, under a further KMK agreement from 1991 that sets the remaining details. We print two decimals; ask the assessing office how the final grade is rounded.'
          ],
          rightH3: 'Why the endpoint test matters',
          right: [
            'An IB Diploma can reach 45 points. Put 45 into the bare formula and it returns 0.5, a grade that does not exist in Germany. That is why the KMK adds the rule that 42 to 45 points all count as 1.0, and why our function needs its <code>if</code> line.',
            'Testing a formula only in the middle, at 33 or 36, would never reveal that. The ends are where formulas break.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Check a value by hand.</strong> Work out the grade for 35 points on paper before running the code. Does your answer sit between the grades for 33 and 36?',
          '<strong>Find the step.</strong> How many IB points does one full German grade step (from 3.0 to 2.0) take? Explain it from the formula, not the table.',
          '<strong>Break it on purpose.</strong> Remove the <code>if</code> line, run 43 and 44 points, and write one sentence on why the answers are impossible.'
        ] }
      ]
    },
    {
      id: 'choose',
      eyebrow: 'Which suits',
      h2: 'Which route suits a teenager who is strong, or weak, in maths?',
      lede: 'There is no single right answer, and we do not advise on school choice. But the documents above point to some honest patterns.',
      body: [
        { kind: 'two',
          leftH3: 'A strong mathematician',
          left: [
            'On the Abitur, a Leistungskurs with its 300-minute exam is the natural home. In the IB, HL maths keeps every German degree open under the KMK rules. A levels allow maths to be combined with physics or further subjects of the pupil\'s choice.',
            'Whatever the route, olympiad problems and real programming stretch a strong pupil more than extra exam drill.'
          ],
          rightH3: 'A pupil who finds maths hard',
          right: [
            'The Abitur keeps maths in for almost everyone, so steady support through Qualifikationsphase matters. The IB keeps it in too, and SL maths has the university consequence described above. A levels let a pupil drop maths entirely.',
            'In each case, the earlier the gaps in algebra are closed, the more choices stay open.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Taught in English only', p: 'All classes are live and in English. For Abitur pupils, the mentor names each German term beside the English.' },
          { h3: 'Pace and accent matched', p: 'Mentors adjust to how fast your teenager works and how they speak.' },
          { h3: 'One mentor, one route', p: 'The same person every week, teaching to the exam your teenager actually sits.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Planning ahead',
    h2: 'Two years before the final exams',
    lede: 'Our own outline for the last two school years on each route. Adjusted for every pupil.',
    table: { caption: 'The final two years, by route (ours)', head: ['Stage', 'Abitur', 'IB Maths', 'A level Maths'], rows: [
      ['First term', 'Functions and derivatives', 'Algebra and functions; choose SL or HL with care', 'Pure foundations: algebra, proof'],
      ['First year', 'Analysis, start geometry', 'Calculus, statistics; exploration topic', 'Pure, then mechanics or statistics'],
      ['Second year, autumn', 'Stochastik, mixed practice', 'Write the exploration', 'Full syllabus, first past-style papers'],
      ['Final months', 'Part A without aids, full mocks', 'Timed papers with technology', 'Three timed papers, 2 hours each']
    ] },
    left: { h3: 'For parents', ps: [
      'If your teenager is at an IB school, check before Year 1 of the Diploma whether SL maths would limit later study in Germany.',
      'For the Abitur, ask the school which Leistungskurse it runs; not every school offers every combination.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Practise in the conditions of your exam: without a calculator for Abitur Part A, with your calculator for IB and A levels.',
      'Test every formula you learn at its smallest and largest values.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths',
    h2: 'Nine more maths courses for teenagers in Germany',
    lede: 'Taught live in English, each with a regular mentor and the choice of a class or private lessons.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Ages 12 to 16', courses: [
        { code: 'AIB / BASE / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The ground every route stands on.' },
        { code: 'AIB / BASE / 02', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Before A levels or the IB.' },
        { code: 'AIB / BASE / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'Algebra to calculus, step by step.' }
      ] },
      { num: 'II', h3: 'Beyond the syllabus', sub: 'Ages 15 to 19', courses: [
        { code: 'AIB / MORE / 01', slug: 'a-level-further-maths-course', title: 'A Level Further Maths', blurb: 'For the strongest A level pupils.' },
        { code: 'AIB / MORE / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The area all three routes test.' },
        { code: 'AIB / MORE / 03', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'A first look at degree-level calculus and linear algebra.' }
      ] },
      { num: 'III', h3: 'Problem solving', sub: 'Ages 10 to 19', courses: [
        { code: 'AIB / STRETCH / 01', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Mathematik-Olympiade and Känguru', blurb: 'German competitions, our own problems.' },
        { code: 'AIB / STRETCH / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Maths olympiad', blurb: 'International competition maths.' },
        { code: 'AIB / STRETCH / 03', slug: 'tmua-mat-step-preparation-course', title: 'TMUA, MAT and STEP', blurb: 'For UK university maths tests.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live maths tutoring works on each route',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Groups are formed by route and level, so an IB HL pupil never sits in an Abitur Grundkurs group.',
    slots: [
      { time: 'Afternoon', l: 'For example 14:45 German time, 19:15 in India in winter.' },
      { time: 'Early evening', l: 'For example 17:15 German time, 20:45 in India after 28 March 2027.' },
      { time: '1-on-1', l: 'Sunday from 09:00, or a slot of your choosing.' }
    ],
    cells: [
      { h3: 'Route by route', p: 'Abitur, IB and A level pupils taught in separate groups.' },
      { h3: 'Exam conditions', p: 'Calculator or none, as your exam demands.' },
      { h3: 'German terms', p: 'For Abitur pupils, every word from the paper.' },
      { h3: 'Exploration coaching', p: 'For IB pupils: topic choice and method, never writing it.' },
      { h3: 'Timed papers', p: 'Marked against the right scale for the route.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty in a batch, or private lessons.' }
    ]
  },

  projectsH2: 'Beyond exams: what our students build',
  projectsLede: 'Many of our maths students also code. A few of their projects are shown below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page collects more.',
  reviewsLede: 'Google reviews by parents and students, quoted exactly.',

  fees: {
    h2: 'Fees for maths tutoring in Germany',
    lede: 'Billing is monthly, for eight live classes. We display the euro amount using the European Central Bank reference rate, but the payment is processed in US dollars, so your bank handles the conversion and the final figure may vary slightly.',
    free: ['A free first class', 'A short task in the style of your route\'s exam', 'No card needed'],
    group: ['Fifteen to twenty pupils on the same route and level', 'One regular mentor', 'Two classes a week', 'Monthly, stop any month'],
    one: ['Your teenager and one mentor', 'Built around their exam board or Land', 'Extra sessions before mocks']
  },

  faq: {
    eyebrow: 'Families ask',
    h2: 'Abitur vs IB vs A levels: common questions',
    items: [
      { q: 'Is the IB Diploma equal to the Abitur in Germany?', a: 'Under conditions. The KMK agreement of 10 March 1986, as amended on 15 June 2023, recognises the IB Diploma as a university entrance qualification if it includes the required subjects, including maths, after at least twelve school years, with every subject at IB grade 4 or better (one 3 can be offset).' },
      { q: 'Does IB maths SL limit university options in Germany?', a: 'It can. The KMK agreement says that from the 2021 exams, a Diploma with Mathematics AA SL or AI SL gives only subject-restricted access, to courses outside maths, science and technology, unless the school is on the KMK\'s list; Anlage 1 of 26 March 2026 numbers 59 schools in Germany.' },
      { q: 'How are IB points converted into a German grade?', a: 'With the KMK formula N = 1 + 3 (42 minus P) / (42 minus 24), where P is the IB total; 42 to 45 points count as 1.0. So 24 points give 4.0, 33 give 2.5 and 39 give 1.5. The Land that assesses the certificate calculates the final grade.' },
      { q: 'Is a calculator allowed in the Abitur maths exam?', a: 'Not in Part A of the shared pool exam, which is done without any aids. Part B allows the aids your Land permits. In the IB AI brief every external assessment involves technology, and AQA A level Maths requires a calculator in all papers.' },
      { q: 'How long are the maths exams on each route?', a: 'In the Abitur pool exam, 255 minutes at basic level and 300 at raised level, including choice time. IB Maths AI has two papers of 1.5 hours at SL, and at HL two of 2 hours plus one of 1 hour. AQA A level Maths has three papers of 2 hours each.' },
      { q: 'Are A levels recognised in Germany?', a: 'Our sources for this page do not cover A level recognition, so we do not state a rule. Ask the admissions office of the university your teenager is considering, early.' },
      { q: 'Are the classes in German?', a: 'No, we teach only in English, live, with mentors in India who adapt to your teenager\'s pace and accent. Abitur pupils also learn the German term for every idea, because their paper is in German.' },
      { q: 'When are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. German afternoons are early evening for our mentors in India.' },
      { q: 'Do you give school or admissions advice?', a: 'No. We teach maths. We are not connected to the KMK, the IB, AQA, the IQB or any school, and the decisions on recognition rest with universities and the Land\'s offices.' },
      { q: 'How are fees charged?', a: 'Monthly. The page shows euro at the European Central Bank reference rate; the card is charged in US dollars, which your bank converts. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for teenagers in Germany.',
    items: [
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The pool exam in detail, with practice tasks.' },
      { href: '/ib-maths-ai-sl-tutor-online', label: 'IB Maths AI SL tutor', p: 'Our page on the applications course at SL.' },
      { href: '/aqa-a-level-maths-7357-help', label: 'AQA A level Maths 7357', p: 'The three papers in detail.' },
      { href: '/ib-maths-ia-guidance', label: 'IB maths exploration', p: 'How we coach the internal assessment.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our Germany pages.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live class.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us the route and the level. In the first class the mentor sets a short task in the style of that exam, sees where marks would be lost, and suggests a plan.',
    readFirst: 'If you want to read first: <a class="ag-inline-link" href="/courses/ib-mathematics-aa-ai-masterclass">the IB maths syllabus</a>, <a class="ag-inline-link" href="/courses/abitur-mathematics-course-in-english">the Abitur maths syllabus</a> and <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'Live online lessons in English, given by mentors in India. WhatsApp reaches us fastest.',
    formNote: 'Free. No card. No contract.'
  },

  footer: {
    cols: [
      { h4: 'Routes', links: [
        { href: '/courses/ib-mathematics-aa-ai-masterclass', label: 'IB Maths AA and AI' },
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Abitur Mathematik' },
        { href: '/courses/a-level-maths-course-pure-mechanics-statistics', label: 'A Level Maths' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Test a formula at its ends'
  },

  personalityCss: `
.ag-root.ag-aib .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-aib .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-aib .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-aib .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-aib .ag-band-head h3 { letter-spacing: -0.003em; }
`,

  dossier: {
    curriculumAuthority: 'KMK agreement on the IB Diploma (10.03.1986 i. d. F. 15.06.2023, Anlage 1 Stand 26.03.2026); IB DP Subject Brief Mathematics: applications and interpretation (2019, first assessments 2021); AQA A-level Mathematics 7357 specification v1.3; IQB Beschreibung der Struktur Mathematik; KMK Sek II; AGIS. Read 2 and 3 November 2026. Calculations ours.',
    localProject: 'An original Python version of the KMK formula turning IB points into a German average grade, tested at its ends: 24 -> 4.0, 33 -> 2.5, 42 -> 1.0, and 45 -> 0.5 without the rule that 42 to 45 count as 1.0. Lesson family: apply a published formula, then test it at its endpoints.',
    requiredMentions: ['45 points without the 1.0 rule: 0.5', '33 points -&gt; 2.5', 'numbers 59 schools in Germany', 'At least twelve ascending school years of full-time schooling', 'Recommended 150 hours SL, 240 HL', 'Three papers of 2 hours each', '360 minutes for 300 marks, 1.2 minutes a mark', 'Test a formula at its ends'],
    sources: [
      { claim: 'IB recognition conditions, SL maths restriction, grade formula, Anlage 1.', url: 'https://www.kmk.org/fileadmin/veroeffentlichungen_beschluesse/1986/1986_03_10-Vereinbarung-Baccalaureate-Dipl_2023_06_15.pdf' },
      { claim: 'IB maths AI papers, timings, weights, hours, technology.', url: 'https://www-1.ms.ut.ee/too-ja-praktika/files/MHG-IB.pdf' },
      { claim: 'AQA A level Maths papers, marks, calculator, grades.', url: 'https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357' },
      { claim: 'Abitur pool exam parts, minutes and marks.', url: 'https://www.iqb.hu-berlin.de/media/documents/M_Beschreibung_der_Struktur_der_Aufgaben.pdf' },
      { claim: 'IB Diploma equivalence with subject combinations.', url: 'https://www.agis-schools.org/' }
    ],
    rejectedClaims: [
      'IB AA paper structure: the AA guide copy available was partial; only the shared objectives are stated.',
      'A level recognition in Germany: not in our sources; the page says so.',
      'Rounding of the converted IB grade: governed by a 1991 KMK agreement we did not read; two decimals printed.',
      'Names of the 59 listed schools or of any school as a source of students: not printed.',
      'Any affiliation with the KMK, IB, AQA or IQB: none.'
    ]
  }
};
