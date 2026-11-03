'use strict';
// IB maths tutor in Germany (ag- English door, Germany cluster P2 row DE020).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: IB Diploma pupils in Germany choosing and passing IB maths. Spine: what the KMK recognition agreement asks of IB
// maths for university entrance in Germany (AA or AI, the Higher Level rule from 2025, the SL footnote and the school
// annex), how the KMK turns an IB total into a German average, then our own "work backwards" practice. ibo.org returned
// 403 (BLOCKED.md) and was not fetched; no IB syllabus hours or paper structures are quoted.
// The sibling ib-computer-science-tutor-germany uses the six-subject pattern and the points formula with 38 and 33
// points; this page uses the maths conditions and the formula inverted (points needed for a target), other numbers.
// Sources (raw):
//  - KMK, Vereinbarung über die Anerkennung des IB Diploma (Beschluss vom 10.03.1986 i.d.F. vom 15.06.2023), fetched
//    3 Nov 2026, src-pages/ib-maths-tutor-germany/kmk-ib-de-2026.pdf (current German file linked from the KMK ZAB
//    Hochschulzugang page, "Anlage 1 (Stand: 26.03.2026)", "Anlage 2 (Stand: 22.05.2026)", footnote 3 unchanged),
//    kmk-ib-de.pdf (German, Anlage 1 Stand 01.03.2023) and kmk-ib-en.pdf
//    (unofficial English translation, "Appendix 1 (as at: 06/11/2025)"). Quoted: "at least twelve years of full-time
//    education"; "mathematics (Mathematics: Analysis and Approaches or Mathematics: Applications and Interpretation)";
//    "At least one of the three ... subjects taken at Higher Level, must be either a language subject, Mathematics, or a
//    natural science subject"; footnote 9 "Applies from exam year 2025; up to and including the exam year 2024, the
//    version of the agreement dated 24 March 2022 applies"; "studied continuously ... in two ascending year groups";
//    "at least IB grade 4 in the six compulsory subjects"; "If an IB grade of 3 has been obtained in only one subject,
//    this can be compensated for if a minimum IB grade of 5 and a minimum total of 24 points have been obtained in another
//    subject"; German footnote 3 "Absolventinnen und Absolventen, die mit dem Prüfungstermin 2021 Mathematics: Analysis
//    and Approaches SL oder Mathematics: Applications and Interpretation SL nachweisen, kann nur ein fachgebundener
//    Hochschulzugang für Fachhochschulen und Universitäten für Studienfächer, die nicht dem
//    mathematisch-naturwissenschaftlich-technischen Bereich zuzuordnen sind, eröffnet werden. Ausnahme: ... der in den
//    Anlagen 1 und 2 aufgelisteten Schulen"; Anlage 1 has a "DEUTSCHLAND" section; footnote 4 older names up to 2020;
//    formula "Pmax = 42 points", "Pmin = 24 points", "N = 1.0 (where 42 ≤ P ≤ 45)", "Any bonus points obtained are
//    included in the calculation"; "The average grade ... is calculated in the country in which the qualification is
//    issued."
//  - FACTS.md section 5 (AGIS, fetched 2 Nov 2026): all members authorised IB schools (247); IB Diploma "dem deutschen
//    Abitur gleichwertig" with prescribed combinations (248); English common teaching language (250); directory pages
//    listing the IB Diploma for member schools in Berlin, Bonn, Dresden, Düsseldorf, Frankfurt, Hamburg, Hannover and
//    Stuttgart (222, 226, 227, 230, 233, 235, 236, 237); KMK Eurydice dossier recognition agreement date (252).
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own (scratchpad de/w/G5/py/imt.py, python3 -I) prints:
//    24 points -> 4.0 / 30 points -> 3.0 / 35 points -> 2.167 / 36 points -> 2.0 / 39 points -> 1.5 / 44 points -> 1.0
//    for 3.0 or better: at least 30 points, giving 3.0
//    for 2.3 or better: at least 35 points, giving 2.167
//    for 1.5 or better: at least 39 points, giving 1.5
//  Log task: x = 4 gives log2(4) + log2(2) = 3.0; x = -2 is outside the domain.
// Lesson family: work backwards from the target, then check the answer in the original condition.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const BACK = [
  'import math',
  '',
  'def grade(points):',
  '    if points >= 42:',
  '        return 1.0',
  '    return 1 + 3 * (42 - points) / (42 - 24)',
  '',
  'def points_needed(target):',
  '    return math.ceil(42 - 6 * (target - 1))',
  '',
  'for p in [24, 30, 35, 36, 39, 44]:',
  '    print(p, "points ->", round(grade(p), 3))',
  'for n in [3.0, 2.3, 1.5]:',
  '    p = points_needed(n)',
  '    print("for", n, "or better: at least", p, "points, giving", round(grade(p), 3))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'IB maths tutor' },
  slug: 'ib-maths-tutor-germany',
  code: 'imt',
  accent: '#2D527A',
  accentRationale: 'IB maths tutor: a deep lake blue #2D527A, cooler and lighter than the Abitur slate, chosen to sit beside it without matching; it clears 4.5:1 on the paper and all three tints (the build checks it)',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'IB maths tutor in Germany',
  title: 'IB Maths Tutor in Germany: AA and AI, SL and HL, in English',
  description: 'An IB maths tutor for Diploma pupils in Germany: AA and AI at SL and HL, what the KMK asks of IB maths for German universities, the grade formula, live tutoring.',
  ogDescription: 'Live IB maths tutoring in English for pupils at international schools in Germany, with what the KMK recognition agreement says about AA, AI, SL and HL, and how an IB total becomes a German grade.',
  twitterDescription: 'IB Maths AA and AI tutoring in English for pupils in Germany, and the KMK rules on IB maths.',
  pageName: 'IB Maths Tutor in Germany',
  webPageDescription: 'A guide in English for IB Diploma pupils in Germany and their parents: the maths conditions of the KMK agreement on recognising the IB Diploma (version of 15 June 2023), the Standard Level footnote and its school annex, the formula that turns an IB total into a German average grade, and an original practice set on working backwards.',
  courseDescription: 'Live online IB Mathematics tutoring in English for Diploma pupils in Germany: Analysis and Approaches and Applications and Interpretation, at Standard and Higher Level, with exam practice and coaching for the internal assessment, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'IB maths tutor',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#recognition', label: 'Rules' },
    { href: '#sl-hl', label: 'SL or HL' },
    { href: '#grade', label: 'Grade' },
    { href: '#backwards', label: 'Practice' }
  ],
  eyebrow: 'Germany &middot; IB Diploma Mathematics &middot; Ages 15 to 19',
  h1: 'IB maths tutor in Germany',
  lede: 'An IB Diploma pupil in Germany sits the same IB maths papers as a pupil in Singapore or Toronto, but the choice of course carries a German consequence. The Kultusministerkonferenz has a written agreement on when an IB Diploma opens a German university, and maths is named in it, down to Standard and Higher Level. This page sets out what that agreement says, how it turns an IB total into a German grade, and how our mentors teach IB maths, live and in English.',
  secondaryCta: { href: '#recognition', label: 'What the KMK asks' },
  wa: 'Hello Modern Age Coders, I am an IB Diploma student in Germany and would like an IB maths tutor. Could I book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; AA and AI, SL and HL, one regular mentor',
  spec: [
    ['For', 'IB Diploma pupils in Germany, and MYP 5'],
    ['Courses', 'Analysis and Approaches, Applications and Interpretation'],
    ['Levels', 'Standard Level and Higher Level'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Times', 'After school and on weekends, German time'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders is an IB maths tutor for Diploma pupils in Germany, teaching Mathematics: Analysis and Approaches and Mathematics: Applications and Interpretation at SL and HL, live online in English. Mentors match each pupil\'s pace and accent, cover exam papers and the internal assessment, and teach in a group of fifteen to twenty or one to one through our IB Maths AA and AI course.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for IB maths pupils in Germany',
    lede: 'The IB course itself, a statistics course for pupils on the AI route or with a heavy statistics topic, and a bridge for MYP pupils before the Diploma starts.',
    items: [
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'IMT / 01', title: 'IB Maths AA and AI', note: 'Both IB maths courses at SL and HL: functions, calculus, statistics and probability, exam technique and the internal assessment.' },
      { course: 'statistics-probability-maths-course', code: 'IMT / 02', title: 'Statistics and probability', note: 'Distributions, regression and hypothesis tests in depth, for AI pupils and for AA pupils who find the statistics topic hardest.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'IMT / 03', title: 'High school maths', note: 'Algebra, functions and trigonometry secured in MYP 4 and 5, so the first Diploma year does not start with gaps.' }
    ]
  },

  sections: [
    {
      id: 'recognition',
      eyebrow: 'KMK rules',
      h2: 'Which IB maths course does Germany accept for university entrance?',
      lede: 'The KMK, the standing conference of the Länder education ministers, first agreed in 1986 how an IB Diploma is recognised as a German university entrance qualification. The current version dates from 15 June 2023. These are its conditions, with the maths ones marked.',
      body: [
        { kind: 'table', numCols: [], caption: 'Conditions for recognising the IB Diploma in Germany, KMK agreement as amended on 15 June 2023', head: ['Condition', 'What the agreement says', 'Maths?'], rows: [
          ['Schooling', 'At least twelve years of full-time education in ascending year groups', ''],
          ['Six subjects', 'Two languages, one natural science, one social science, a sixth from a listed set, and maths', 'Yes'],
          ['Which maths', 'Mathematics: Analysis and Approaches or Mathematics: Applications and Interpretation', 'Yes'],
          ['Higher Level', 'At least one of the three HL subjects must be a language, Mathematics, or Biology, Chemistry or Physics (from exam year 2025)', 'Can be'],
          ['Continuity', 'Every subject studied for the two years of the Diploma Programme', 'Yes'],
          ['Grades', 'At least IB grade 4 in all six subjects; one grade 3 can be balanced by a 5 in a subject of at least the same level, with 24 points in total', 'Yes'],
          ['Maths at SL', 'From the 2021 exams, AA SL or AI SL alone opens only a restricted entrance, outside maths, science and technology subjects, unless the school is listed in Annex 1 or 2', 'Yes']
        ] },
        { kind: 'source', html: 'Source: KMK, Vereinbarung über die Anerkennung des "International Baccalaureate Diploma/Diplôme du Baccalauréat International", Beschluss vom 10.03.1986 i.d.F. vom 15.06.2023, current German text with Anlage 1 as at 26 March 2026 and Anlage 2 as at 22 May 2026, read alongside the KMK\'s unofficial English translation, downloaded from kmk.org on 3 November 2026. Up to and including exam year 2024, the version of 24 March 2022 applies. Up to 2020 the agreement named the older courses, Mathematics SL or HL.' },
        { kind: 'p', mt: true, html: 'Read the table from the bottom up and one thing is clear: in Germany, maths is not just one of six subjects. It is the only subject the agreement names twice, once as a required subject and again in a footnote on its level. A pupil who chooses Standard Level maths in the first Diploma year is making a decision that the KMK text treats as consequential for what she can study later.' },
        { kind: 'p', html: 'This is not legal or admissions advice, and we give none. The agreement is applied by universities and the Länder, and its text names an advisory committee of the KMK\'s Central Office for Foreign Education (ZAB) to review whether the IB still meets the criteria. If a choice of course matters for a particular degree, ask the university, and the school\'s IB coordinator, before the subject choice is fixed.' }
      ]
    },
    {
      id: 'sl-hl',
      eyebrow: 'SL or HL',
      h2: 'Is IB Maths SL enough to study in Germany?',
      lede: 'The footnote is short and easy to miss. Here it is in plain English, then what it means for a pupil choosing courses.',
      body: [
        { kind: 'two',
          leftH3: 'What the footnote says',
          left: [
            'In the German text, footnote 3 says that graduates who present Mathematics: Analysis and Approaches SL or Mathematics: Applications and Interpretation SL from the 2021 exam session onward can be granted only a subject-restricted entrance qualification (fachgebundener Hochschulzugang), for Fachhochschulen and universities and only for subjects outside the mathematical, scientific and technical field.',
            'The exception is graduates of the schools listed in the agreement\'s two annexes: for them the maths requirement counts as met and the Diploma opens general university entrance.'
          ],
          rightH3: 'What the annexes are',
          right: [
            'Annex 1 lists international schools that have a separate agreement with the IBO; in the current German file it is dated 26 March 2026 and has a section for schools in Germany (Deutschland). Annex 2 lists schools abroad with the bilingual German IB.',
            'Whether your school is on the list is a question for your school, which will know. We do not reproduce the list here, because it changes and only the KMK\'s current file is authoritative.'
          ] },
        { kind: 'p', mt: true, html: 'For a pupil the practical upshot is a three-way choice. AA HL keeps the most options open and is the hardest course. AI HL is also Higher Level and suits a pupil whose strength is modelling and statistics rather than proof. A Standard Level course is a sound choice for many pupils, especially at a listed school or with a clear plan outside the sciences, but it is a choice to make knowingly, not by default.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'AA HL', p: 'Algebra, proof and calculus in depth. The heaviest load and the widest set of doors.' },
          { h3: 'AI HL', p: 'Modelling, statistics and technology-led problem solving, still at Higher Level.' },
          { h3: 'AA SL or AI SL', p: 'A lighter load. Check the footnote and your school\'s status before you settle on it.' }
        ] }
      ]
    },
    {
      id: 'grade',
      eyebrow: 'German grade',
      h2: 'How is an IB score turned into a German grade?',
      lede: 'German universities rank applicants by a single average grade, from 1.0 (the top) to 4.0. The KMK agreement gives a formula to turn an IB total into that grade.',
      body: [
        { kind: 'p', html: 'The formula is N = 1 + 3 &middot; (P<sub>max</sub> &minus; P) / (P<sub>max</sub> &minus; P<sub>min</sub>), where P is the IB total, P<sub>max</sub> = 42 and P<sub>min</sub> = 24. Bonus points are added into P, and a pupil with 42, 43, 44 or 45 points is given the top grade, 1.0. The agreement adds that the average is calculated in the country where the Diploma is issued. Put the numbers in and the formula simplifies to N = 1 + (42 &minus; P) / 6: each extra IB point improves the German average by 1/6, about 0.17.' },
        { kind: 'p', html: 'That is a straight line, and a straight line can be read in both directions. Most pupils ask "what grade do my points give?" An IB maths pupil can ask the more useful question, "how many points do I need for the grade I want?", by inverting the function: P = 42 &minus; 6 &middot; (N &minus; 1).' },
        { kind: 'code', label: 'Points to grade, and grade back to points', lang: 'Python', code: BACK, note: 'It prints <code>24 points -&gt; 4.0</code>, <code>30 points -&gt; 3.0</code>, <code>35 points -&gt; 2.167</code>, <code>36 points -&gt; 2.0</code>, <code>39 points -&gt; 1.5</code>, <code>44 points -&gt; 1.0</code>, then <code>for 3.0 or better: at least 30 points, giving 3.0</code>, <code>for 2.3 or better: at least 35 points, giving 2.167</code> and <code>for 1.5 or better: at least 39 points, giving 1.5</code>.' },
        { kind: 'table', mt: true, numCols: [0, 1], caption: 'IB totals and the German average from the KMK formula (our calculation, unrounded)', head: ['IB total (with bonus)', 'Average grade N'], rows: [
          ['24', '4.0'],
          ['30', '3.0'],
          ['35', '2.167'],
          ['36', '2.0'],
          ['39', '1.5'],
          ['42 to 45', '1.0']
        ] },
        { kind: 'source', html: 'Formula and constants from the KMK IB agreement, as amended on 15 June 2023. The results are our own arithmetic. The agreement itself does not say how the result is rounded; the general KMK rules on overall grades for foreign qualifications apply, and we do not restate them here.' },
        { kind: 'p', mt: true, html: 'The inverted line has a trap, and it is the lesson. For a target of 2.3 the formula gives P = 42 &minus; 6 &middot; 1.3 = 34.2. IB totals are whole numbers, and a higher total gives a better (smaller) grade, so the pupil needs at least 35, not 34: 34 points give 2.333, just outside the target. Rounding the wrong way is the mistake; the check is to put the answer back into the original formula.' }
      ]
    },
    {
      id: 'schools',
      eyebrow: 'IB in Germany',
      h2: 'Where in Germany can pupils take the IB Diploma?',
      lede: 'We cannot give a national count: the IBO\'s school finder refused our request, so this page prints no total. What we can quote is AGIS (Arbeitsgemeinschaft der Internationalen Schulen in Deutschland) on its own members.',
      body: [
        { kind: 'p', html: 'In AGIS\'s own words, every member is an IB school with IBO authorisation running one or more of the four IB programmes; it adds that English is the shared teaching language, and that the IB Diploma, with the prescribed subject combinations, is equivalent to the German Abitur. Its directory pages list the IB Diploma Programme, or the IB generally, for member schools in Berlin, Bonn, Dresden, Düsseldorf, Frankfurt, Hamburg, Hannover and Stuttgart, among other places. Some German Gymnasien also offer the IB Diploma alongside the Abitur, according to the same directory.' },
        { kind: 'p', html: 'We mention these places only as context. We are not connected with AGIS, the IBO or any school, and no school sends pupils to us. A pupil at any IB school in Germany, or at a school abroad, learns the same course with us, because the IB syllabus is the same everywhere.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Example times for a live IB class from Germany, and the mentor\'s time in India (our conversion)', head: ['In Germany', 'India, winter time in Germany', 'India, summer time in Germany'], rows: [
          ['Weekday 14:15', '18:45', '17:45'],
          ['Weekday 15:45', '20:15', '19:15'],
          ['Saturday 12:15', '16:45', '15:45']
        ] },
        { kind: 'source', html: 'Germany is on MEZ, UTC+1, from 25 October 2026 and on MESZ, UTC+2, from 28 March 2027, as the Einheitenzeitgesetz sets out; India keeps UTC+5:30 throughout. These rows illustrate the gap only; we do not publish fixed batch times.' }
      ]
    },
    {
      id: 'backwards',
      tint: 'tint',
      eyebrow: 'Practice',
      h2: 'How do you work backwards in IB maths? Three practice tasks',
      lede: 'Our own tasks in the style of IB papers, not taken from any IB exam. Each one starts from the target and works back to the input, then checks the answer in the original condition, as the grade example above did.',
      body: [
        { kind: 'two',
          leftH3: 'AA style: an inverse and a log equation',
          left: [
            '<strong>Task 1.</strong> f(x) = (3x &minus; 1) / 2. Find f<sup>&minus;1</sup>(x) and the value of x for which f(x) = 7. <em>Working back:</em> write y = (3x &minus; 1) / 2, so 2y = 3x &minus; 1 and x = (2y + 1) / 3. Hence f<sup>&minus;1</sup>(x) = (2x + 1) / 3 and f<sup>&minus;1</sup>(7) = 15 / 3 = 5. <em>Check:</em> f(5) = 14 / 2 = 7.',
            '<strong>Task 2.</strong> Solve log<sub>2</sub>x + log<sub>2</sub>(x &minus; 2) = 3. <em>Working back:</em> log<sub>2</sub>(x(x &minus; 2)) = 3, so x(x &minus; 2) = 8, x&sup2; &minus; 2x &minus; 8 = 0, (x &minus; 4)(x + 2) = 0. <em>Check:</em> x = 4 gives log<sub>2</sub>4 + log<sub>2</sub>2 = 2 + 1 = 3. x = &minus;2 is not in the domain, because log<sub>2</sub>(&minus;2) is undefined. Only x = 4 survives.'
          ],
          rightH3: 'AI style: a model read in reverse',
          right: [
            '<strong>Task 3.</strong> A phone battery at 18 % charges at a steady 2.5 percentage points per minute, so C(t) = 18 + 2.5t. When does it reach 80 %? <em>Working back:</em> 2.5t = 62, t = 24.8 minutes. <em>Check:</em> 18 + 2.5 &middot; 24.8 = 80.',
            '<strong>Then question the model.</strong> Real batteries slow down near full, so the straight line is honest only for part of the range. In an AI paper, saying where a model stops being reasonable earns marks of its own, and the internal assessment rewards it too.',
            '<strong>Why "check" is a step.</strong> In task 2 the algebra produced two answers and only one was true. Working backwards finds candidates; the original condition decides.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Write the target first.</strong> f(x) = 7, a grade of 2.3, 80 % charge: name what you want before you rearrange.',
          '<strong>Undo the steps in reverse order.</strong> The last operation done to x is the first one you undo.',
          '<strong>Put the answer back in.</strong> Into the original equation, not the rearranged one, and reject what fails the domain or the context.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Two Diploma years',
    h2: 'A plan for IB maths across the Diploma',
    lede: 'Our own outline for a pupil starting the Diploma in Germany in August or September, adjusted by the mentor to AA or AI and to SL or HL.',
    table: { caption: 'IB maths over the two Diploma years (ours)', head: ['When', 'Focus', 'Alongside'], rows: [
      ['Year 1, first term', 'Number, algebra and functions', 'Course choice reviewed against the KMK conditions'],
      ['Year 1, second term', 'Calculus or statistics, by course', 'Internal assessment topic chosen'],
      ['Year 1, summer', 'Geometry and trigonometry', 'Exploration draft written and checked'],
      ['Year 2, autumn', 'Probability and the remaining topics', 'Internal assessment completed to the school deadline'],
      ['Year 2, spring', 'Mixed past-paper style practice', 'Timed papers, calculator and non-calculator']
    ] },
    left: { h3: 'For parents', ps: [
      'The most important maths decision in the Diploma is made at the very start: the course and the level. We look at the KMK conditions with your child before that decision is fixed, and point you to the school and the university for the final word.',
      'After each mock or test, the mentor reports which topic lost the marks, in plain English.'
    ] },
    right: { h3: 'For pupils', ps: [
      'In every rearranged equation, write the check line. It costs ten seconds and catches the answers that are not really answers.',
      'Know your target total, then work out from the formula what it needs from maths.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths',
    h2: 'Nine more courses for IB pupils in Germany',
    lede: 'Same format as the IB course: live, English only, one mentor who stays, group or individual.',
    bands: [
      { num: 'I', h3: 'Before the Diploma', sub: 'Ages 12 to 16', courses: [
        { code: 'IMT / PRE / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'The MYP years made solid.' },
        { code: 'IMT / PRE / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Rearranging with confidence, the skill this page relies on.' },
        { code: 'IMT / PRE / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For schools that use IGCSE before the Diploma.' }
      ] },
      { num: 'II', h3: 'Alongside the Diploma', sub: 'Ages 16 to 19', courses: [
        { code: 'IMT / DP / 01', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'The new guide, first assessed in 2027.' },
        { code: 'IMT / DP / 02', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'Extra calculus depth for strong AA pupils.' },
        { code: 'IMT / DP / 03', slug: 'ap-statistics-maths-exam-prep-course', title: 'AP Statistics', blurb: 'More statistics practice for AI pupils.' }
      ] },
      { num: 'III', h3: 'Beyond HL', sub: 'Ages 16 and up', courses: [
        { code: 'IMT / PLUS / 01', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus and linear algebra for the first year at university.' },
        { code: 'IMT / PLUS / 02', slug: 'a-level-further-maths-course', title: 'A Level Further Maths', blurb: 'Pure and applied depth beyond the IB syllabus.' },
        { code: 'IMT / PLUS / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Proof and problem solving for the keenest.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live IB maths tutoring works from Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Classes are live video sessions of about an hour, twice a week, with a shared whiteboard and the graphing calculator or software your school uses.',
    slots: [
      { time: 'After school', l: 'German afternoons, when the mentor in India is in the evening.' },
      { time: 'Weekends', l: 'Longer sessions for timed papers and internal assessment drafts.' },
      { time: '1-on-1', l: 'Extra sessions before school deadlines and mock exams.' }
    ],
    cells: [
      { h3: 'IB language', p: 'Command terms, notation and mark-scheme habits, in English.' },
      { h3: 'AA or AI', p: 'Taught to your course and level, not a mix of both.' },
      { h3: 'Check lines', p: 'Every rearrangement ends by substituting back.' },
      { h3: 'IA support', p: 'Help choosing and structuring the exploration; the writing stays yours.' },
      { h3: 'Reports', p: 'Topic by topic after each test or mock.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty pupils, or one to one.' }
    ]
  },

  projectsH2: 'Projects from our students',
  projectsLede: 'Some of our older students build software alongside their maths. A selection is below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Reviews left on Google by parents and students, copied as written.',

  fees: {
    h2: 'IB maths tutoring fees in Germany',
    lede: 'Tutoring is billed monthly, eight live classes at a time. On this page the fee appears in euro, taken from the European Central Bank reference rate, while the card payment itself is in US dollars, so the converted amount your bank books can be slightly different.',
    free: ['A free first class', 'A short diagnostic in your IB course and level', 'No card asked for'],
    group: ['Fifteen to twenty IB pupils', 'One regular mentor', 'Two classes a week', 'Month to month'],
    one: ['One pupil, one mentor', 'Built around your weakest topics', 'Times that fit your school week']
  },

  faq: {
    eyebrow: 'Pupils and parents ask',
    h2: 'IB maths tutoring in Germany: common questions',
    items: [
      { q: 'Can I get an IB maths tutor in Germany who teaches in English?', a: 'Yes. Modern Age Coders teaches IB Mathematics: Analysis and Approaches and Applications and Interpretation, at SL and HL, live online in English to Diploma pupils in Germany, in a group or one to one.' },
      { q: 'Are the classes in German?', a: 'No. Every class is live and taught in English only, which is also the language of the IB papers. Mentors adapt to each pupil\'s pace and accent.' },
      { q: 'Which IB maths course does Germany require?', a: 'The KMK agreement on recognising the IB Diploma, as amended on 15 June 2023, requires maths as Mathematics: Analysis and Approaches or Mathematics: Applications and Interpretation among the six subjects.' },
      { q: 'Is IB Maths SL accepted for German universities?', a: 'The KMK text says that from the 2021 exams, AA SL or AI SL alone gives only a subject-restricted entrance qualification, for subjects outside maths, science and technology, unless the school is listed in the agreement\'s annexes. Ask your school and the university about your own case; we do not give admissions advice.' },
      { q: 'How is my IB total converted into a German grade?', a: 'The KMK formula is N = 1 + 3(42 - P) / (42 - 24), where P includes bonus points and totals of 42 or more give 1.0. By our arithmetic, 36 points give 2.0 and 30 points give 3.0.' },
      { q: 'Do I need a minimum grade in maths?', a: 'The agreement asks for at least IB grade 4 in each of the six subjects. One grade 3 can be balanced by a grade 5 in another subject of at least the same level, with at least 24 points overall.' },
      { q: 'Do you help with the internal assessment?', a: 'Yes, with choosing a topic, planning the maths and reviewing drafts against the criteria. The exploration must be the pupil\'s own work, and we teach it that way.' },
      { q: 'What times are possible?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. German afternoons fall in the Indian evening, by four and a half hours in winter and three and a half in summer.' },
      { q: 'Who teaches the classes?', a: 'Mentors based in India who teach IB maths live online in English. A pupil works with the same mentor throughout.' },
      { q: 'What does it cost?', a: 'Monthly fees are shown in euro on this page using the European Central Bank reference rate; the payment runs in US dollars and your bank converts it. The first class costs nothing and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for international and English-speaking pupils in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page we have published.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'For pupils who sit the German Abitur instead.' },
      { href: '/courses/ib-mathematics-aa-ai-masterclass', label: 'IB Maths AA and AI course', p: 'The full syllabus, topic by topic.' },
      { href: '/courses/ib-diploma-computer-science-course', label: 'IB Computer Science', p: 'The other IB subject we teach.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live class.' },
      { href: '/courses', label: 'All courses', p: 'Everything we teach.' }
    ]
  },

  start: {
    h2: 'Book a free first IB maths class',
    lede: 'Tell us your course, AA or AI, and your level. In the first class the mentor works through a few short tasks with you, sees where your method slips, and suggests how many classes a week make sense before your next test.',
    readFirst: 'Want the detail first? The <a class="ag-inline-link" href="/courses/ib-mathematics-aa-ai-masterclass">IB Maths AA and AI syllabus</a> lists every topic, and <a class="ag-inline-link" href="/how-we-teach">this page on our teaching</a> shows a lesson.',
    note: 'Classes are live online, in English only, with mentors in India. A WhatsApp message gets the quickest reply.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'IB', links: [
        { href: '/courses/ib-mathematics-aa-ai-masterclass', label: 'IB Maths AA and AI' },
        { href: '/courses/ib-diploma-computer-science-course', label: 'IB Computer Science' },
        { href: '/courses/statistics-probability-maths-course', label: 'Statistics and probability' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Work backwards, then check'
  },

  personalityCss: `
.ag-root.ag-imt .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-imt .ag-capsule { border-left-width: 6px; }
.ag-root.ag-imt .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-imt .ag-table caption { font-weight: 600; }
.ag-root.ag-imt .ag-grid-3 p { line-height: 1.55; }
`,

  dossier: {
    curriculumAuthority: 'KMK Vereinbarung über die Anerkennung des IB Diploma (10.03.1986 i.d.F. 15.06.2023), current German file (Anlage 1 Stand 26.03.2026, Anlage 2 Stand 22.05.2026), the March 2023 German file and the unofficial English translation, fetched 3 November 2026; AGIS homepage, Wer wir sind and directory pages, read 2 November 2026; KMK Eurydice dossier. ibo.org blocked (403), not used. Tasks and calculations our own.',
    localProject: 'Work backwards, then check: the KMK formula inverted to give the IB points a pupil needs for a target German grade (2.3 needs 35 points, not 34, because 34.2 must round up), plus three original IB-style tasks: an inverse function (f^-1(7) = 5), a log equation with a rejected root (x = 4, not -2), and a battery model read in reverse (24.8 minutes). Lesson family: work backwards from the target, then check in the original.',
    requiredMentions: ['N = 1 + (42 &minus; P) / 6', 'P = 42 &minus; 6 &middot; (N &minus; 1)', 'for 2.3 or better: at least 35 points, giving 2.167', '34 points give 2.333', 'fachgebundener Hochschulzugang', 'Only x = 4 survives', 't = 24.8 minutes', 'Work backwards, then check'],
    sources: [
      { claim: 'IB recognition conditions, maths requirement, SL footnote 3, annexes (Stand 26.03.2026 and 22.05.2026), formula; current German file.', url: 'https://www.kmk.org/zab/fileadmin/Dateien/pdf/ZAB/Hochschulzugang_Beschluesse_der_KMK/aktuell/283_Vereinb_Anerkenn_Int_Baccalaureate_Diploma-2023-06-15_Liste1__2026-03-26_Liste2-2026-05-22.pdf' },
      { claim: 'Unofficial English translation of the same agreement (older annex dates).', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/ZAB/Hochschulzugang_Beschluesse_der_KMK/aktuell/283_Vereinb_Anerkenn_Int_Baccalaureate_Diploma-2023-06-15_Liste1-2025-11-06_Liste2-2024-11-19_ENGL.pdf' },
      { claim: 'AGIS: members authorised IB schools; IB Diploma equivalent to the Abitur; English common language.', url: 'https://www.agis-schools.org/' },
      { claim: 'AGIS: all members authorised IB schools.', url: 'https://www.agis-schools.org/wer-wir-sind' }
    ],
    rejectedClaims: [
      'Number of IB schools in Germany: ibo.org returned 403; not stated.',
      'IB syllabus hours, paper lengths or mark weights: would need ibo.org; not quoted.',
      'How the German grade is rounded: not in the IB agreement; not stated.',
      'Admissions or legal advice on SL: refused; pupils are pointed to the school, the university and the ZAB.',
      'Naming schools on the KMK annex: not reproduced, as the list changes.',
      'Any connection with the IBO, AGIS, the KMK or a school: none.'
    ]
  }
};
