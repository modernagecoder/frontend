'use strict';
// IGCSE maths tutor in Germany (ag- English door, Germany cluster P2 row DE022).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: pupils at international and British schools in Germany taking IGCSE maths, Cambridge 0580 or Pearson Edexcel
// 4MA1. Spine: the two syllabuses side by side from the boards' own documents, what the Core/Extended and
// Foundation/Higher choice means, what AGIS says IGCSE is worth in Germany, then one exam habit taught from the
// Cambridge rule on accuracy. Lesson family: carry full accuracy and round once, at the end.
// Sources (raw, fetched 3 Nov 2026, src-pages/igcse-maths-tutor-germany/):
//  - cie-0580.html (cambridgeinternational.org 0580 page): "One of the papers at each tier is now a dedicated
//    non-calculator paper"; syllabus years 2025 to 2027 and 2028 to 2030; A*-G vs 9-1 entry note.
//  - cie-0580-2025-2027.pdf (syllabus, Version 3): "Use this syllabus for exams in 2025, 2026 and 2027."; "Exams are
//    available in the June and November series."; Core "intended for learners targeting grades C–G", Extended "A*–C";
//    Core candidates "eligible for grades C to G", Extended "A* to E"; "Paper 1: Non-calculator (Core) 1 hour 30 minutes
//    80 marks 50%"; "Paper 3: Calculator (Core) 1 hour 30 minutes 80 marks"; "Paper 2: Non-calculator (Extended) 2 hours
//    100 marks"; "Paper 4: Calculator (Extended) 2 hours 100 marks"; AO2 "Analyse, interpret and communicate
//    mathematically" 30–40 (Core) and 50–60 (Extended); "about 130 guided learning hours"; "non-exact numerical answers
//    correct to 3 significant figures, or 1 decimal place for angles in degrees"; "To earn accuracy marks, candidates
//    should avoid rounding figures until they have their final answer."; "the value of π from their calculator or the
//    value of 3.142"; "Answers may be asked for in terms of π."; not combinable in one series with 0980, 0607, 4024.
//  - pearson-4ma1-spec.pdf (Pearson Edexcel International GCSE (9-1) Mathematics A, Issue 2, November 2017, linked
//    from the Pearson qualification page): "First assessment: June 2018"; "Availability: January and June"; Foundation
//    papers 1F and 2F, Higher 1H and 2H, "Each paper is assessed through a 2-hour examination"; "The total number of
//    marks for each paper is 100."; Foundation grades "(5–1)", Higher "(9–4)"; "A calculator may be used in the
//    examinations"; formulae sheet included.
//  - FACTS.md section 5 (AGIS, fetched 2 Nov 2026): MYP or IGCSE schools give "einen der Mittleren Reife gleichwertigen
//    Abschluss" (249); directory pages listing IGCSE at member schools in Berlin, Augsburg ("including German Mittlere
//    Reife recognition"), Bremen, Ulm/Neu-Ulm, Frankfurt and Westpfalz (222, 231, 232, 234, 239, 240, 243, 244).
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own (scratchpad de/w/G5/py/ima.py, python3 -I) prints:
//    radius: 4.7746482927568605 -> 4.77
//    volume, rounded early: 455.0
//    volume, rounded once: 456.0
//  Non-calculator sector: 120/360 of pi 6^2 = 12 pi; arc 4 pi; perimeter 12 + 4 pi (ours).
// Lesson family: carry full accuracy, round once at the end.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const ROUND = [
  'import math',
  '',
  'def sig3(x):',
  '    return float(f"{x:.3g}")',
  '',
  'circumference = 30  # cm, the length of a string round a ball',
  'r = circumference / (2 * math.pi)',
  '',
  'early = 4 / 3 * math.pi * sig3(r) ** 3',
  'late = 4 / 3 * math.pi * r ** 3',
  '',
  'print("radius:", r, "->", sig3(r))',
  'print("volume, rounded early:", sig3(early))',
  'print("volume, rounded once:", sig3(late))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'IGCSE maths tutor' },
  slug: 'igcse-maths-tutor-germany',
  code: 'ima',
  accent: '#7A413E',
  accentRationale: 'IGCSE maths tutor: a terracotta brown #7A413E, the colour of an old exercise-book cover, warm against the blues of the IB and Abitur pages; it clears 4.5:1 on the paper and all three tints (the build checks it)',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'IGCSE maths tutor in Germany',
  title: 'IGCSE Maths Tutor in Germany: Cambridge 0580 and Edexcel 4MA1',
  description: 'An IGCSE maths tutor for pupils in Germany, live in English: Cambridge 0580 and Edexcel 4MA1 papers compared, Core or Extended, the accuracy rule and tutoring.',
  ogDescription: 'Live IGCSE maths tutoring in English for pupils at international and British schools in Germany, with the Cambridge and Edexcel papers side by side and a lesson on rounding.',
  twitterDescription: 'IGCSE maths in English for pupils in Germany: Cambridge 0580 or Edexcel 4MA1, Core or Extended.',
  pageName: 'IGCSE Maths Tutor in Germany',
  webPageDescription: 'A page for IGCSE maths pupils in Germany and their parents: the Cambridge IGCSE Mathematics 0580 syllabus for 2025 to 2027 and the Pearson Edexcel International GCSE Mathematics A (4MA1) compared from the boards\' own documents, what AGIS says IGCSE means in Germany, and an original lesson on rounding only at the end.',
  courseDescription: 'Live online IGCSE maths tutoring in English for pupils in Germany: Cambridge 0580 Core and Extended and Pearson Edexcel 4MA1 Foundation and Higher, calculator and non-calculator papers, timed practice and exam technique, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'IGCSE maths tutor',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#boards', label: 'Syllabuses' },
    { href: '#tier', label: 'Tiers' },
    { href: '#rounding', label: 'Lesson' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; IGCSE Mathematics &middot; Ages 13 to 17',
  h1: 'IGCSE maths tutor in Germany',
  lede: 'At a British or international school in Germany, the maths exam at sixteen is usually an IGCSE, set in Cambridge or by Pearson Edexcel in London and taken in the same sports hall as pupils in Dubai or Bangkok. The papers do not change because the school is in Munich or Frankfurt. What changes is that help in English is harder to find. This page compares the two IGCSE maths syllabuses from the boards\' own documents and shows how we teach them.',
  secondaryCta: { href: '#boards', label: 'Compare the syllabuses' },
  wa: 'Hello Modern Age Coders, my child takes IGCSE maths at a school in Germany and needs a tutor in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; Cambridge and Edexcel, one regular mentor',
  spec: [
    ['For', 'IGCSE pupils in Germany, Years 9 to 11'],
    ['Boards', 'Cambridge 0580, Pearson Edexcel 4MA1'],
    ['Tiers', 'Core and Extended, Foundation and Higher'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Times', 'German afternoons and Sunday mornings'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders is an IGCSE maths tutor for pupils at international and British schools in Germany, teaching Cambridge IGCSE Mathematics 0580 and Pearson Edexcel International GCSE Mathematics A live online in English. The mentor adapts to how fast a pupil works and how she speaks, and drills both calculator and non-calculator papers, in a group of fifteen to twenty or one to one, through our IGCSE Maths course.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for IGCSE maths pupils in Germany',
    lede: 'The IGCSE course, a bridge course for Years 7 to 9, and the next step for pupils who move on to the IB Diploma.',
    items: [
      { course: 'igcse-mathematics-mastery', code: 'IMA / 01', title: 'IGCSE maths', note: 'Core, Extended and Additional Mathematics, for Cambridge and Edexcel: every topic, timed papers and mark-scheme habits.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'IMA / 02', title: 'Middle school maths', note: 'Fractions, ratio, algebra and geometry before the IGCSE years, for pupils who need firm ground first.' },
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'IMA / 03', title: 'IB Maths AA and AI', note: 'For pupils in Germany who continue from IGCSE into the IB Diploma.' }
    ]
  },

  sections: [
    {
      id: 'boards',
      eyebrow: 'Two syllabuses',
      h2: 'How do Cambridge 0580 and Edexcel 4MA1 IGCSE maths compare?',
      lede: 'Most international and British schools in Germany use one of these two. They cover similar maths but are examined differently, and the difference matters for practice.',
      body: [
        { kind: 'table', numCols: [], caption: 'IGCSE maths: Cambridge 0580 and Pearson Edexcel 4MA1, from each board\'s own syllabus', head: ['', 'Cambridge IGCSE Mathematics 0580', 'Pearson Edexcel International GCSE Mathematics A (4MA1)'], rows: [
          ['Tiers', 'Core and Extended', 'Foundation and Higher'],
          ['Grades', 'Core: C to G. Extended: A* to E', 'Foundation: 5 to 1. Higher: 9 to 4'],
          ['Papers, lower tier', 'Paper 1, non-calculator, 1 h 30 min, 80 marks; Paper 3, calculator, 1 h 30 min, 80 marks', 'Papers 1F and 2F, 2 hours each, 100 marks each'],
          ['Papers, upper tier', 'Paper 2, non-calculator, 2 h, 100 marks; Paper 4, calculator, 2 h, 100 marks', 'Papers 1H and 2H, 2 hours each, 100 marks each'],
          ['Calculator', 'Not allowed in Papers 1 and 2; required in Papers 3 and 4', 'May be used in the examinations'],
          ['Exam series', 'June and November (March in India only)', 'January and June'],
          ['Each paper', '50 % of the qualification', '50 % of the qualification']
        ] },
        { kind: 'source', html: 'Sources: Cambridge International, Cambridge IGCSE Mathematics 0580 syllabus for exams in 2025, 2026 and 2027 (Version 3) and the 0580 qualification page; Pearson Edexcel International GCSE (9-1) Mathematics A specification, Issue 2, November 2017, first assessed June 2018, as linked from Pearson\'s qualification page. All read 3 November 2026. A new 0580 syllabus is published for exams from 2028 to 2030.' },
        { kind: 'p', mt: true, html: 'The single biggest difference for preparation is the calculator. Cambridge now makes one paper at each tier a dedicated non-calculator paper; its own page says this lets candidates show more of what they know without changing the standard. So a Cambridge pupil needs fluent written methods for fractions, percentages, surds and algebra, and answers left exactly, for example "in terms of &pi;", as the syllabus puts it. The Edexcel specification allows a calculator in its examinations and supplies a formulae sheet at each tier, which shifts practice toward longer problems.' },
        { kind: 'p', html: 'The grade scales differ too. Cambridge 0580 reports A* to G; Edexcel reports 9 to 1. Cambridge also runs a separate 9 to 1 syllabus, 0980, and its page warns that a school cannot switch a pupil between the two scales after the entry deadline. Ask the school which code your child is entered for before buying any practice book.' }
      ]
    },
    {
      id: 'tier',
      eyebrow: 'Core or Extended',
      h2: 'Should my child take Core or Extended IGCSE maths?',
      lede: 'Both boards tier their exams, and the tier sets a ceiling on the grade. The school decides the entry, usually in the final year, so the question for a parent is what the tier allows.',
      body: [
        { kind: 'two',
          leftH3: 'What each tier allows',
          left: [
            'Cambridge says the Core content is meant for learners aiming at grades C to G and the Extended content for those aiming at A* to C. A pupil entered for Core can be awarded C at most; a pupil entered for Extended can be awarded A* down to E.',
            'At Edexcel, Foundation covers grades 5 to 1 and Higher grades 9 to 4. Higher questions assume the Foundation content, just as Cambridge\'s Extended content includes all of Core.'
          ],
          rightH3: 'What changes in the papers',
          right: [
            'The longer Extended papers do not only add topics. Cambridge weights its assessment objectives differently: "Analyse, interpret and communicate mathematically" carries 30 to 40 % of Core marks but 50 to 60 % of Extended marks.',
            'In other words, the higher tier rewards reasoning and explanation more than routine technique. A pupil moving up a tier needs practice in writing working that an examiner can follow, not just more formulas.'
          ] },
        { kind: 'p', mt: true, html: 'Cambridge designs the course for about 130 guided learning hours, which it calls guidance only. A pupil in Germany who joins an international school in Year 10 from a German Gymnasium, or who returns from a year abroad, can be months behind on the content and the format at once. That is the situation where a tutor pays off most: the maths is often familiar, and what is missing is the IGCSE way of setting it out.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Aiming at C', p: 'Secure Core technique, then add the Extended topics that appear most, one at a time.' },
          { h3: 'Aiming at A or A*', p: 'Extended entry, with written reasoning practised as hard as the topics.' },
          { h3: 'Unsure', p: 'A diagnostic across both tiers in the first class, then a talk with the school about entry.' }
        ] }
      ]
    },
    {
      id: 'germany',
      eyebrow: 'IGCSE in Germany',
      h2: 'Does an IGCSE count in Germany?',
      lede: 'There is no national register of IGCSE pupils in Germany that we can quote. What we can quote is what AGIS, the association of international schools in Germany, says about its own members.',
      body: [
        { kind: 'p', html: 'AGIS states on its homepage that member schools offering the IB Middle Years Programme or the IGCSE make sure their pupils receive a qualification equivalent to the Mittlere Reife, the German intermediate school certificate taken at the end of Klasse 10. One member school\'s AGIS entry describes its IGCSE as "including German Mittlere Reife recognition". AGIS directory pages list the IGCSE, or Cambridge Upper Secondary, for member schools in Berlin, Augsburg, Bremen, Ulm and Neu-Ulm, the Frankfurt area and Westpfalz.' },
        { kind: 'p', html: 'That equivalence is the schools\' statement about their own pupils, and the detail of how a Land recognises a particular certificate is a matter for the school and the Land authorities. We teach the maths; we do not advise on recognition, and we do not award grades or certificates of any kind.' },
        { kind: 'p', html: 'We name these places only as context. Modern Age Coders is not connected with AGIS, Cambridge International, Pearson or any school, and no school refers pupils to us. A pupil at any school entering IGCSE maths, in Germany or anywhere else, follows the same syllabus with us.' }
      ]
    },
    {
      id: 'rounding',
      tint: 'tint',
      eyebrow: 'A lesson',
      h2: 'Why do IGCSE pupils lose accuracy marks, and how do you stop it?',
      lede: 'The Cambridge syllabus gives the rule plainly: give non-exact answers to 3 significant figures, or 1 decimal place for angles in degrees, and avoid rounding until the final answer. Most pupils know the first half. Our own lesson below shows why the second half costs marks.',
      body: [
        { kind: 'p', html: '<strong>Task (ours, calculator paper style).</strong> A string 30 cm long fits exactly round the middle of a ball. Find the volume of the ball. <em>Working:</em> the circumference is 2&pi;r = 30, so r = 30 / (2&pi;). Then V = (4/3)&pi;r&sup3;. The question is when to round.' },
        { kind: 'code', label: 'Rounding early and rounding once', lang: 'Python', code: ROUND, note: 'It prints <code>radius: 4.7746482927568605 -&gt; 4.77</code>, <code>volume, rounded early: 455.0</code> and <code>volume, rounded once: 456.0</code>.' },
        { kind: 'p', mt: true, html: 'A pupil who writes r = 4.77 and carries on gets 455 cm&sup3;. A pupil who keeps the full calculator value gets 456 cm&sup3;. The two unrounded volumes, about 454.6 and 455.9, differ by roughly 0.3 %, and that is still the difference between the accuracy mark and no accuracy mark, because 455 is not the correct value to 3 significant figures. Rounding the radius cost about 0.1 %; cubing it made that error about three times larger. Any formula with a power, a product of several measurements or a division by a small number does the same.' },
        { kind: 'two', mt: true,
          leftH3: 'On a calculator paper',
          left: [
            'Store the unrounded value in the calculator memory, or write 4.774648... with the dots, and round only the final line.',
            'Where a later part of a question uses an earlier answer, Cambridge asks for the value before it was rounded. Write both: the rounded answer for the mark, the long value for the next step.',
            'Use the &pi; key, or 3.142 if the question says so, never 3.14.'
          ],
          rightH3: 'On a non-calculator paper',
          right: [
            '<strong>Task (ours).</strong> A sector has radius 6 cm and angle 120&deg;. Find its area and its perimeter, in terms of &pi;.',
            '<em>Working:</em> 120&deg; is one third of the circle. Area = (1/3) &middot; &pi; &middot; 6&sup2; = 12&pi; cm&sup2;. Arc = (1/3) &middot; 2&pi; &middot; 6 = 4&pi; cm, so the perimeter is 12 + 4&pi; cm.',
            'Here the rule becomes "do not round at all". An answer of 37.7 cm&sup2; on a paper that asked for &pi; has thrown the exact answer away.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Keep every digit until the last line.</strong> Rounding is a presentation step, not a calculation step.',
          '<strong>Round once, to what the question asks.</strong> 3 significant figures by default, 1 decimal place for angles in degrees.',
          '<strong>On a non-calculator paper, stay exact.</strong> Fractions, surds and &pi; stay as they are unless the question asks for a decimal.'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Times',
      h2: 'When can a pupil in Germany have a live IGCSE maths class?',
      lede: 'Our mentors teach from India, which is ahead of Germany all year. German afternoons and weekend mornings fall in the Indian afternoon or evening, so both work.',
      body: [
        { kind: 'table', numCols: [], caption: 'Three example class times, as a pupil in Germany and a mentor in India see them (our conversion)', head: ['Pupil in Germany', 'Mentor, while Germany is on MEZ', 'Mentor, while Germany is on MESZ'], rows: [
          ['Weekday 13:30', '18:00', '17:00'],
          ['Weekday 16:15', '20:45', '19:45'],
          ['Sunday 09:45', '14:15', '13:15']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz Germany runs on MEZ (UTC+1) and on MESZ (UTC+2) in summer; this winter\'s switch back was on 25 October 2026 and the next move forward is on 28 March 2027. India is on UTC+5:30 with no change. These are sample times, not a published timetable.' },
        { kind: 'p', mt: true, html: 'Cambridge examines 0580 in a June and a November series, and Edexcel offers 4MA1 in January and June, according to their own documents. In the months before a series we add timed papers to the regular classes, at the same time of day as the real exam where the family wants it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Two IGCSE years',
    h2: 'A two-year IGCSE maths plan',
    lede: 'Our own outline for a pupil in Years 10 and 11 at a school in Germany with a June exam. The mentor fits it to the board, the tier and the school\'s order of topics.',
    table: { caption: 'IGCSE maths over two years (ours)', head: ['When', 'Topics', 'Practice'], rows: [
      ['Year 10, autumn', 'Number, ratio, percentages, indices', 'Written methods without a calculator'],
      ['Year 10, spring', 'Algebra, equations, graphs', 'Short exam-style questions each class'],
      ['Year 10, summer', 'Geometry, mensuration, trigonometry', 'First full paper, then a review of every lost mark'],
      ['Year 11, autumn', 'Probability, statistics, vectors and transformations', 'Mixed papers, calculator and non-calculator'],
      ['Year 11, spring', 'Whole syllabus revision', 'Timed papers to the board\'s length']
    ] },
    left: { h3: 'For parents', ps: [
      'After each full paper the mentor tells you how many marks went on method, how many on accuracy and how many on topics not yet learned. Those three need different fixes.',
      'If the school is deciding between tiers, ask the mentor for a mock under both; it makes the conversation with the school concrete.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Never round in the middle. Write the long number, round only the answer you box.',
      'On a non-calculator paper, leave &pi;, surds and fractions exact unless the question says otherwise.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths',
    h2: 'Nine more courses for IGCSE pupils in Germany',
    lede: 'Taught live in English, with the same mentor every week, as a group or one to one.',
    bands: [
      { num: 'I', h3: 'Building up', sub: 'Ages 11 to 15', courses: [
        { code: 'IMA / BASE / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Equations and expressions without a wobble.' },
        { code: 'IMA / BASE / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Number sense for the non-calculator paper.' },
        { code: 'IMA / BASE / 03', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'For pupils on the UK GCSE instead of the IGCSE.' }
      ] },
      { num: 'II', h3: 'Alongside IGCSE', sub: 'Ages 14 to 17', courses: [
        { code: 'IMA / SIDE / 01', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science', blurb: 'The 0478 syllabus, theory and programming.' },
        { code: 'IMA / SIDE / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The data topics in more depth.' },
        { code: 'IMA / SIDE / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Graphs and sequences explored in Python.' }
      ] },
      { num: 'III', h3: 'After IGCSE', sub: 'Ages 16 to 19', courses: [
        { code: 'IMA / NEXT / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A Level Maths', blurb: 'Pure, mechanics and statistics for the sixth form.' },
        { code: 'IMA / NEXT / 02', slug: 'a-level-further-maths-course', title: 'A Level Further Maths', blurb: 'For the strongest Extended pupils.' },
        { code: 'IMA / NEXT / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik in English', blurb: 'For pupils who switch to the German Oberstufe.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live IGCSE maths tutoring works from Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Two live online classes a week of about an hour, on a shared whiteboard, with the pupil\'s own calculator beside the screen.',
    slots: [
      { time: 'Afternoons', l: 'After the international school day, German time.' },
      { time: 'Sunday', l: 'Morning sessions for full papers under timed conditions.' },
      { time: '1-on-1', l: 'Booked around mocks, coursework weeks and holidays.' }
    ],
    cells: [
      { h3: 'Your board', p: 'Cambridge or Edexcel, taught to its own papers.' },
      { h3: 'Your tier', p: 'Core, Extended, Foundation or Higher.' },
      { h3: 'Both paper types', p: 'Calculator and non-calculator practice every week.' },
      { h3: 'Mark schemes', p: 'Method, accuracy and answer marks explained.' },
      { h3: 'Mock reviews', p: 'Every lost mark sorted by its cause.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty pupils, or one to one.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Some IGCSE-age students also code with us. Their projects are below, and more are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What families wrote about us on Google, as posted.',

  fees: {
    h2: 'IGCSE maths tutoring fees in Germany',
    lede: 'A month of tutoring, eight live classes, is one fee. It is displayed in euro using the European Central Bank reference rate, yet billed in US dollars, so your card issuer converts the charge and the euro figure that appears on your statement may differ a little.',
    free: ['A first class at no cost', 'A short check on both tiers', 'No card details'],
    group: ['Fifteen to twenty IGCSE pupils', 'The same mentor throughout', 'Two classes each week', 'Monthly, stop at any month end'],
    one: ['Your child and one mentor', 'Weakest topics first', 'Times fitted to the school calendar']
  },

  faq: {
    eyebrow: 'Families ask',
    h2: 'IGCSE maths tutoring in Germany: common questions',
    items: [
      { q: 'Is there an IGCSE maths tutor in Germany who teaches in English?', a: 'Yes. Modern Age Coders teaches Cambridge IGCSE Mathematics 0580 and Pearson Edexcel International GCSE Mathematics A live online in English, for pupils at international and British schools across Germany, in a group or one to one.' },
      { q: 'Are the classes in German?', a: 'No. All classes are live and taught in English only, the language of the IGCSE papers. Mentors adjust to each pupil\'s pace and accent.' },
      { q: 'What is the difference between Cambridge 0580 and Edexcel 4MA1?', a: 'Cambridge 0580 has Core and Extended tiers graded A* to G, with one non-calculator and one calculator paper at each tier. Edexcel 4MA1 has Foundation and Higher tiers graded 9 to 1, with two papers of 2 hours and 100 marks at each tier, and calculators may be used.' },
      { q: 'How long are the Cambridge IGCSE maths papers?', a: 'In the 0580 syllabus for 2025 to 2027, Core Papers 1 and 3 last 1 hour 30 minutes with 80 marks each, and Extended Papers 2 and 4 last 2 hours with 100 marks each.' },
      { q: 'Is a calculator allowed in IGCSE maths?', a: 'In Cambridge 0580, calculators are not allowed in Papers 1 and 2 and a scientific calculator is required for Papers 3 and 4. The Edexcel 4MA1 specification says a calculator may be used in its examinations.' },
      { q: 'How many decimal places should IGCSE answers have?', a: 'Cambridge asks for non-exact answers to 3 significant figures, or 1 decimal place for angles in degrees, unless the question says otherwise, and tells candidates not to round until the final answer.' },
      { q: 'Is an IGCSE recognised in Germany?', a: 'AGIS says its member schools that offer the IGCSE or the IB Middle Years Programme give pupils a qualification equivalent to the Mittlere Reife. Ask your school how this applies to your child; we do not advise on recognition.' },
      { q: 'What times are possible?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. India runs four and a half hours ahead of German winter time and three and a half ahead of German summer time.' },
      { q: 'Who are the tutors?', a: 'Mentors based in India, teaching IGCSE maths live online in English, with the same mentor for a pupil from month to month.' },
      { q: 'What does it cost?', a: 'The fee shown here is monthly, in euro at the European Central Bank reference rate. The payment itself is in US dollars and your bank converts it. The first class is free, with no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for pupils at international schools in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The starting point for every Germany page.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'If your child moves to the German Oberstufe.' },
      { href: '/courses/igcse-mathematics-mastery', label: 'IGCSE maths course', p: 'The full syllabus and how it is taught.' },
      { href: '/courses/igcse-computer-science-0478-course', label: 'IGCSE Computer Science', p: 'The other IGCSE we teach.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live class.' },
      { href: '/courses', label: 'All courses', p: 'The whole catalogue.' }
    ]
  },

  start: {
    h2: 'Book a free first IGCSE maths class',
    lede: 'Tell us the board and, if you know it, the tier. In the first class the mentor sets a handful of questions from both paper types, watches where marks go, and tells you plainly what the next months should cover.',
    readFirst: 'To read more first, see the <a class="ag-inline-link" href="/courses/igcse-mathematics-mastery">IGCSE maths syllabus</a> and our <a class="ag-inline-link" href="/how-we-teach">description of a live lesson</a>.',
    note: 'All classes are live online and in English only; the mentors are in India. Message us on WhatsApp for the fastest answer.',
    formNote: 'Free. No card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'IGCSE', links: [
        { href: '/courses/igcse-mathematics-mastery', label: 'IGCSE maths' },
        { href: '/courses/igcse-computer-science-0478-course', label: 'IGCSE Computer Science' },
        { href: '/courses/a-level-maths-course-pure-mechanics-statistics', label: 'A Level Maths' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Round once, at the end'
  },

  personalityCss: `
.ag-root.ag-ima .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-ima .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-ima .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ima .ag-table th { font-weight: 600; }
.ag-root.ag-ima .ag-steps li { padding-bottom: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Cambridge IGCSE Mathematics 0580 syllabus for 2025 to 2027 (Version 3) and qualification page; Pearson Edexcel International GCSE (9-1) Mathematics A specification Issue 2 (November 2017); AGIS homepage and directory pages. Read 2 and 3 November 2026. Tasks and calculations our own.',
    localProject: 'Round once, at the end: an original calculator-paper task (a ball with a 30 cm circumference) where rounding the radius to 4.77 gives a volume of 455 cm³ and keeping full accuracy gives 456 cm³, checked in Python; plus a non-calculator sector task answered exactly (12π cm², perimeter 12 + 4π cm). Lesson family: carry full accuracy, round once at the end.',
    requiredMentions: ['volume, rounded early: 455.0', 'volume, rounded once: 456.0', 'radius: 4.7746482927568605 -&gt; 4.77', '12 + 4&pi; cm', 'Paper 2, non-calculator, 2 h, 100 marks', 'Foundation: 5 to 1. Higher: 9 to 4', 'about 130 guided learning hours', 'Round once, at the end'],
    sources: [
      { claim: '0580 papers, tiers, grades, calculator rules, accuracy rule, series, guided hours.', url: 'https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf' },
      { claim: '0580 page: dedicated non-calculator paper, 2028 to 2030 syllabus, grading scale note.', url: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/' },
      { claim: '4MA1 tiers, papers, marks, grades, availability, calculator.', url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf' },
      { claim: 'AGIS: IGCSE or MYP schools give a Mittlere Reife equivalent.', url: 'https://www.agis-schools.org/' }
    ],
    rejectedClaims: [
      'Number of IGCSE pupils or schools in Germany: no official source.',
      'Official recognition of IGCSE by a Land: not fetched; only AGIS\'s own statement is given.',
      'Exam dates for 2027 series: the zone timetables were not fetched; only the series months are given.',
      'Reproducing real past-paper questions: refused; tasks are ours.',
      'Any connection with Cambridge, Pearson, AGIS or a school: none.'
    ]
  }
};
