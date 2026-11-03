'use strict';
// Coding and maths for Indian families in Germany (ag- English door, Germany cluster P2 row DE027).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: children of Indian families at German schools. One sourced Destatis figure and nothing else on nationality or
// residence (brief). Spine: how German school stages differ from the CBSE stages a family may know (both from primary
// sources), what that means for maths and coding, English-medium mentors from India, then a lesson on writing the same
// number three ways (Indian lakh grouping, English, German), with a practice set.
// Sources (raw):
//  - Destatis, Ausländische Bevölkerung nach ausgewählten Staatsangehörigkeiten (src/destatis/auslaendische-
//    bevoelkerung-staatsangehoerigkeit-jahre.txt, "Stand 2. April 2026", "Quelle: Ausländerzentralregister", "Stichtag:
//    31.12."): row "Indien" first value "311 130" (31.12.2025). The only nationality figure on the page.
//  - FACTS.md section 1 (KMK, fetched 2 Nov 2026): Grundschule to Klasse 4, to 6 in Berlin and Brandenburg (1); three Sek I
//    tracks organised in Land-specific school types (5, 6); switching in Klasse 5 and 6 (8); "Am Ende der Grundschule wird
//    keine Abschlussprüfung durchgeführt" (28); central Klasse 10 exams in most Länder (24); Abitur after Jahrgangsstufe
//    12 or 13 (26); Allgemeine Hochschulreife with "Durchschnittsnote 4" (12).
//  - FACTS.md section 2 (GI Informatik-Monitor 2026/27): NRW compulsory Informatik in Klasse 5 and 6 (80); six Länder
//    without compulsory Informatik for all (92).
//  - New raw fetches 3 Nov 2026, src-pages/coding-and-maths-for-indian-families-in-germany/ (cbseacademic.nic.in):
//    cbse-curriculum.html "Curriculum for the Academic Year 2026-27", lists "Mathematics at Advanced Level" for Class IX;
//    Maths_SecP1X_2026-27.pdf: "Subject Code – 041 & 241", "Class – X (2026-27)", "MATHEMATICS- STANDARD (Code – 041)",
//    "MATHEMATICS-BASIC (Code – 241)", "Time: 3 Hours Max. Marks: 80", "INTERNAL ASSESSMENT 20 MARKS", unit marks
//    ALGEBRA 20, GEOMETRY 15, TRIGONOMETRY 12, STATISTICS AND PROBABILITY 11, MENSURATION 10, NUMBER SYSTEMS 06,
//    COORDINATE GEOMETRY 06, TOTAL 80; "A deliberate shift from rote learning to competency-based education".
//    MathsAd_SecP1_2026-27.pdf: "MATHEMATICS AT ADVANCED LEVEL (OPTIONAL) GRADE 9", chapters Sets, Logarithms, Relations
//    and Functions, Coordinate Geometry, Combinatorics, Exploring some more Progressions.
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own code, python3 -I (scratchpad de/w/G5/py/cmi1.py, cmi2.py):
//    cmi1 prints "31,11,30" and "12,50,00,00"
//    cmi2 prints "311,130 | 311.130 | 3,11,130", "12,500,000 | 12.500.000 | 1,25,00,000", "950 | 950 | 950", "2,5"
// Lesson family: one value, many notations: separate what a number is from how it is written.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'def indian(n):',
  '    s = str(n)',
  '    parts = []',
  '    while s:',
  '        parts.insert(0, s[-2:])',
  '        s = s[:-2]',
  '    return ",".join(parts)',
  '',
  'print(indian(311130))',
  'print(indian(12500000))'
].join('\n');

const V2 = [
  'def indian(n):',
  '    s = str(n)',
  '    head, tail = s[:-3], s[-3:]',
  '    parts = [tail]',
  '    while head:',
  '        parts.insert(0, head[-2:])',
  '        head = head[:-2]',
  '    return ",".join(parts)',
  '',
  'def german(n):',
  '    return f"{n:,}".replace(",", ".")',
  '',
  'for n in [311130, 12500000, 950]:',
  '    print(f"{n:,}", "|", german(n), "|", indian(n))',
  'print(str(2.5).replace(".", ","))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Indian families' },
  slug: 'coding-and-maths-for-indian-families-in-germany',
  code: 'cmi',
  accent: '#844366',
  accentRationale: 'Indian families in Germany: a deep rose #844366, a turmeric-and-kumkum warmth turned toward ink so it stays calm on paper, apart from the plum of the maths tutor page; it clears 4.5:1 on the paper and all three tints (the build checks it)',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding and maths for Indian families in Germany',
  title: 'Coding and Maths for Indian Families in Germany, in English',
  description: 'Live coding and maths classes in English for children of Indian families at German schools: German and CBSE stages compared, mentors from India, a number lesson.',
  ogDescription: 'Maths and coding for children of Indian families in Germany, taught live in English by mentors in India: how German school stages compare with CBSE, and how to bridge the two.',
  twitterDescription: 'Coding and maths in English for Indian families in Germany, with mentors in India.',
  pageName: 'Coding and Maths for Indian Families in Germany',
  webPageDescription: 'A page for Indian families whose children attend school in Germany: how the German school stages (KMK) compare with the CBSE stages for 2026-27, where maths and coding fit in each, why mentors in India teaching in English suit these families, and an original lesson on writing one number in Indian, English and German notation.',
  courseDescription: 'Live online maths and coding classes in English for children of Indian families in Germany, aged 6 to 18: school maths that follows the German Klasse, Scratch and Python, school Informatik, and CBSE-level maths for families who keep both curricula, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Indian families in Germany',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#families', label: 'Families' },
    { href: '#stages', label: 'CBSE' },
    { href: '#maths', label: 'Maths' },
    { href: '#coding', label: 'Coding' },
    { href: '#numbers', label: 'Lesson' }
  ],
  eyebrow: 'Germany &middot; For Indian families &middot; Ages 6 to 18',
  h1: 'Coding and maths for Indian families in Germany',
  lede: 'Many Indian parents in Germany went through CBSE, ICSE or a state board themselves, and then watch their children learn maths at a German school that runs on different stages, different marks and a different idea of what Klasse 4 should know. Some want their child to keep the depth they remember; some want help with the German syllabus in a language the family shares. Our mentors are in India and teach in English, so they can do both.',
  secondaryCta: { href: '#stages', label: 'German and CBSE stages' },
  wa: 'Hello Modern Age Coders, we are an Indian family in Germany and would like maths or coding classes for our child in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; mentors in India, classes in English',
  spec: [
    ['For', 'Children of Indian families at schools in Germany'],
    ['Subjects', 'Maths and coding'],
    ['Follows', 'The German Klasse, or CBSE alongside it'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Times', 'German afternoons, Indian evenings'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding and maths live online in English to children of Indian families at schools in Germany, aged 6 to 18. Mentors based in India follow the German school syllabus or, where a family wants it, CBSE-level maths alongside it, match each child\'s pace and accent, and teach in a group of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses Indian families in Germany start with',
    lede: 'Coding for younger children, maths for the German middle years, and school Informatik for children whose Land teaches it.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CMI / 01', title: 'Python and AI for kids', note: 'Ages 8 to 12. Turtle art, games and small smart projects, the first step into real code.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'CMI / 02', title: 'Middle school maths', note: 'Klasse 5 to 10: fractions, algebra, geometry and probability, taught for the German school and deep enough for CBSE.' },
      { course: 'informatik-companion-course-klasse-5-10', code: 'CMI / 03', title: 'Informatik Companion', note: 'School Informatik from Klasse 5 to 10, explained in English, with the German terms beside every idea.' }
    ]
  },

  sections: [
    {
      id: 'families',
      eyebrow: 'Families',
      h2: 'How many Indian families are there in Germany, and what do they ask for?',
      lede: 'One official figure sets the scale, and it is the only one we use on this page.',
      body: [
        { kind: 'p', html: 'According to Destatis, the Federal Statistical Office, 311,130 Indian nationals were registered in Germany on 31 December 2025. The figure comes from the Ausländerzentralregister, in the Destatis table of the foreign population by nationality, last updated on 2 April 2026. It counts nationals only, not families or children, and children with German citizenship are not in it; we quote it for scale and draw nothing else from it.' },
        { kind: 'p', html: 'What a family in this position wants is simpler than any statistic, and it is usually one of three things: "Help my child with maths at the German school, in English." "Keep my child\'s maths at the level I had at their age." And "Teach my child to code properly, not just to play with apps."' },
        { kind: 'three', mt: true, cells: [
          { h3: 'German syllabus, in English', p: 'Help with the Klasse your child is in, explained in the family\'s shared language, with the German terms added.' },
          { h3: 'Depth they remember', p: 'Extra practice and harder problems for parents who feel the German pace is gentler than their own schooling.' },
          { h3: 'Real coding', p: 'Scratch, then Python, then projects that run, for children whose school offers little or no programming.' }
        ] },
        { kind: 'p', mt: true, html: 'A mentor from India brings something no local tutor can: the same reference points as the parents. When a father says "she should know her tables like we did", the mentor knows what that means, and also knows that the German Klassenarbeit next week asks for something different. We teach both, in English, and say clearly which is which.' }
      ]
    },
    {
      id: 'stages',
      eyebrow: 'German and CBSE',
      h2: 'How do German school stages compare with CBSE?',
      lede: 'Both systems are described here only from their own official sources: the KMK for Germany and the CBSE curriculum for 2026-27. The table does not match ages class for class, because the two systems do not line up neatly.',
      body: [
        { kind: 'table', numCols: [], caption: 'German school stages (KMK) and CBSE stages (CBSE 2026-27), from each system\'s own documents', head: ['Point in school', 'Germany (KMK)', 'CBSE (India)'], rows: [
          ['Primary', 'Grundschule, Klasse 1 to 4; to Klasse 6 in Berlin and Brandenburg. No leaving exam', 'Classes 1 to 8 before the secondary stage'],
          ['Choosing a track', 'Three secondary tracks, organised in different school types in each Land; switching possible in Klasse 5 and 6', 'One curriculum; in Class IX an optional "Mathematics at Advanced Level" from 2026-27'],
          ['End of Klasse or Class 10', 'Central Land exams for the Klasse 10 certificates in most Länder', 'Board exam in maths: Standard (041) or Basic (241), 3 hours, 80 marks, plus 20 marks internal assessment'],
          ['School leaving', 'Abitur after Klasse 12 or 13; awarded with an overall average of at least 4 (ausreichend)', 'Classes XI and XII, the second part of the secondary curriculum']
        ] },
        { kind: 'source', html: 'Sources: KMK pages on the primary level, Sekundarstufe I and the gymnasiale Oberstufe, and the KMK Eurydice dossier, read 2 November 2026; CBSE Academic, Curriculum for the Academic Year 2026-27, Mathematics Class X (Subject Code 041 and 241) and Mathematics at Advanced Level (Optional), Grade 9, downloaded 3 November 2026. The CBSE "Classes 1 to 8" row is our own summary of where the CBSE secondary curriculum begins.' },
        { kind: 'p', mt: true, html: 'The biggest difference for an Indian parent is the early sorting. In most of Germany, children leave Grundschule after Klasse 4 and go on to different school types, and the KMK says there is no exam at that point. The school\'s picture of the child\'s work over the years carries the decision. A parent used to judging progress by test marks may need a different lens here: steady understanding through Klasse 3 and 4 matters more than any single result.' },
        { kind: 'p', html: 'The second difference is what a 10th-class exam is. In CBSE it is one national board exam with a fixed paper design. In Germany it is set by each Land, with its own dates and rules, and a pupil at a Gymnasium on the way to the Abitur may take a different route through Klasse 10 than a pupil at another school type.' }
      ]
    },
    {
      id: 'maths',
      eyebrow: 'Maths',
      h2: 'Is German school maths easier than CBSE maths?',
      lede: 'A common question, and a fair one. The honest answer is that the two systems spend their time differently.',
      body: [
        { kind: 'p', html: 'The CBSE Class X maths syllabus for 2026-27 gives Algebra 20 of its 80 exam marks, Geometry 15, Trigonometry 12, Statistics and Probability 11, Mensuration 10, and Number Systems and Coordinate Geometry 6 each. It describes itself as "a deliberate shift from rote learning to competency-based education", and its new optional advanced course for Class IX adds sets, logarithms, relations and functions, combinatorics and progressions.' },
        { kind: 'p', html: 'German school maths follows the KMK standards, which list communicating, problem solving and modelling among their process competences next to calculation, so a German Klassenarbeit often asks a pupil to explain in words why a method works. Neither system is simply easier; they are hard in different places. A child who is quick at calculation but has never been asked to justify a step in a sentence can struggle in a German Klassenarbeit for exactly that reason.' },
        { kind: 'two', mt: true,
          leftH3: 'What we do for the German side',
          left: [
            'Follow the Klasse and the Land: the topic the class is on this month, in the order the school teaches it.',
            'Practise the reasoning and the wording the German tests reward, in English first, then with the German terms.'
          ],
          rightH3: 'What we do for the CBSE side',
          right: [
            'For families who want it, add the CBSE depth: longer algebra, proofs such as the irrationality of &radic;2, and board-style problem sets.',
            'Keep the two apart in the child\'s head, so that extra practice never confuses the German test.'
          ] }
      ]
    },
    {
      id: 'coding',
      eyebrow: 'Coding',
      h2: 'Do German schools teach coding, and what should an Indian family add?',
      lede: 'It depends on the Land. The Gesellschaft für Informatik tracks Informatik across the sixteen Länder in its Informatik-Monitor.',
      body: [
        { kind: 'p', html: 'For 2026/27 the Informatik-Monitor reports that Nordrhein-Westfalen teaches compulsory Informatik in Klasse 5 and 6 at all general school types, while six Länder (Berlin, Brandenburg, Bremen, Hessen, Rheinland-Pfalz and Sachsen-Anhalt) have no Informatik that every pupil must take. So two Indian families a few hundred kilometres apart can have children with very different amounts of coding at school.' },
        { kind: 'p', html: 'What we add is the same everywhere: a real programming path, taught in English. Children aged 6 to 9 start with Scratch and block coding; from about 8 or 9 they move to Python; teenagers go on to larger projects, data and, where the school has it, the Informatik syllabus itself. Under-18s use only tools suitable for their age; we do not put children on accounts that require an adult.' },
        { kind: 'table', mt: true, numCols: [], caption: 'A live class for a child in Germany, and the mentor\'s time in India (our conversion)', head: ['Child\'s time in Germany', 'Mentor\'s time, German winter', 'Mentor\'s time, German summer'], rows: [
          ['Weekday 14:40', '19:10', '18:10'],
          ['Weekday 17:20', '21:50', '20:50'],
          ['Sunday 08:45', '13:15', '12:15']
        ] },
        { kind: 'source', html: 'German law, the Einheitenzeitgesetz, puts Germany on UTC+1 in winter and UTC+2 in summer; the clocks went back on 25 October 2026 and go forward on 28 March 2027. India is on UTC+5:30 the whole year. These are examples, not batch times.' }
      ]
    },
    {
      id: 'numbers',
      tint: 'tint',
      eyebrow: 'A lesson',
      h2: 'How do you write 3,11,130 in Germany? A lesson in notation',
      lede: 'Children in Indian families in Germany meet three ways of writing the same number: lakh and crore at home, commas every three digits in English books, and dots with a decimal comma at a German school. Our own lesson turns that into maths and code.',
      body: [
        { kind: 'p', html: 'The Destatis figure above is printed by Destatis as 311 130, with a space. In English it is 311,130. A German maths book writes 311.130. And in the Indian system it is 3,11,130: three lakh, eleven thousand, one hundred and thirty. The value never changes; only the notation does. A child who understands that is ready for place value in any language.' },
        { kind: 'code', label: 'Version 1: commas every two digits', lang: 'Python', code: V1, note: 'It prints <code>31,11,30</code> and <code>12,50,00,00</code>.' },
        { kind: 'p', mt: true, html: 'Both are wrong, and asking the child why is the lesson. The Indian system is not "a comma every two digits". The last three digits stay together, the thousands, and only above that do the groups become two digits wide: lakh, then crore. Version 1 broke the number from the right in twos from the start. The fix is to cut off the last three digits first.' },
        { kind: 'code', label: 'Version 2: three digits first, then twos, and the German form too', lang: 'Python', code: V2, note: 'It prints <code>311,130 | 311.130 | 3,11,130</code>, <code>12,500,000 | 12.500.000 | 1,25,00,000</code>, <code>950 | 950 | 950</code> and <code>2,5</code>.' },
        { kind: 'two', mt: true,
          leftH3: 'Practice set (ours)',
          left: [
            '<strong>1.</strong> Write 4,50,000 in German notation and in German words. <em>Answer:</em> 450.000, vierhundertfünfzigtausend.',
            '<strong>2.</strong> One crore is how many millions? <em>Answer:</em> 1 crore = 1,00,00,000 = 10,000,000, so 10 million, in German 10 Millionen.',
            '<strong>3.</strong> A German Milliarde is a thousand million. How many crore is that? <em>Answer:</em> 1,000,000,000 &divide; 10,000,000 = 100 crore.',
            '<strong>4.</strong> At school the sheet says 2,75 + 1,5. What is the answer, written the German way? <em>Answer:</em> 4,25.'
          ],
          rightH3: 'Why it matters in a German test',
          right: [
            'In a German maths test, 2,5 means two and a half, not two thousand five hundred, and 2.500 means two thousand five hundred. A child who mixes the two systems loses marks for an answer that was right in her head.',
            'German also uses Milliarde for a thousand million, where English says billion; the German "Billion" is a million million. The same word, a thousand times apart.',
            'We teach the German notation for school, keep lakh and crore for home, and make the child say which system she is using before she writes the number.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Find the value first.</strong> How many thousands, how many lakh, how many millions: say it in words.',
          '<strong>Then choose the notation.</strong> Indian at home, English in an English book, German at school.',
          '<strong>Check with a round trip.</strong> Convert back and see if the same value comes out, as version 2 does for all three numbers.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing up with both',
    h2: 'Maths and coding from Grundschule to Oberstufe',
    lede: 'Our own outline for a child of an Indian family at a German school, with maths and coding side by side.',
    table: { caption: 'A path through maths and coding for a child in Germany (ours)', head: ['School stage', 'Maths with us', 'Coding with us'], rows: [
      ['Grundschule', 'Tables, place value in both notations, Größen und Messen', 'Scratch Junior to Scratch'],
      ['Klasse 5 and 6', 'Fractions and decimals with the decimal comma, first algebra', 'Scratch projects, first Python'],
      ['Klasse 7 and 8', 'Equations, functions, geometry, explanations in words', 'Python with small programs and data'],
      ['Klasse 9 and 10', 'The Land\'s Klasse 10 exam, plus CBSE depth if wanted', 'Python projects, school Informatik where taught'],
      ['Oberstufe', 'Abitur maths in English', 'Informatik Abitur, Java or Python']
    ] },
    left: { h3: 'For parents', ps: [
      'The mentor reports in English, in the terms you know, and tells you which part is German syllabus and which is extra.',
      'If grandparents in India want to join a class or see a project, that is easy: the mentor is in their time zone.'
    ] },
    right: { h3: 'For children', ps: [
      'Before you write a big number, say which system you are using: lakh, English or German.',
      'When you code, explain your program out loud to someone at home in any language you like.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Indian families in Germany',
    lede: 'Live, in English, with a mentor in India who stays with your child; in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Maths depth', sub: 'Ages 6 to 16', courses: [
        { code: 'CMI / MATH / 01', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Speed and number sense from the first school years.' },
        { code: 'CMI / MATH / 02', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Fast calculation, with the reasons behind each method.' },
        { code: 'CMI / MATH / 03', slug: 'jee-foundation-maths-course-class-8-10', title: 'JEE foundation maths', blurb: 'Proof and problem solving for Class 8 to 10 level.' }
      ] },
      { num: 'II', h3: 'Coding', sub: 'Ages 6 to 18', courses: [
        { code: 'CMI / CODE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Drag-and-drop blocks for children of 7 or 8 and up.' },
        { code: 'CMI / CODE / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first lines to full projects.' },
        { code: 'CMI / CODE / 03', slug: 'cbse-computational-thinking-and-ai-course-for-kids-classes-3-to-8', title: 'Computational thinking and AI', blurb: 'CBSE-aligned thinking skills for Classes 3 to 8.' }
      ] },
      { num: 'III', h3: 'Exams', sub: 'Ages 14 to 19', courses: [
        { code: 'CMI / EXAM / 01', slug: 'cbse-class-10-maths-board-exam-prep-course', title: 'CBSE Class 10 maths', blurb: 'Board-style preparation, Standard or Basic.' },
        { code: 'CMI / EXAM / 02', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik in English', blurb: 'Analysis, geometry and Stochastik for the Oberstufe.' },
        { code: 'CMI / EXAM / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Mathematik-Olympiade and Känguru', blurb: 'German maths competitions, trained with our own problems.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work for an Indian family in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Classes are live video lessons of about an hour, twice a week, with the mentor sharing a whiteboard or a code editor.',
    slots: [
      { time: 'After school', l: 'German afternoons, which are evenings in India.' },
      { time: 'Weekend', l: 'Morning classes in Germany, early afternoon for the mentor.' },
      { time: '1-on-1', l: 'At a time set with the family, moved around holidays in either country.' }
    ],
    cells: [
      { h3: 'English, always', p: 'Clear English, adjusted to the child\'s pace and accent.' },
      { h3: 'Two syllabuses', p: 'German school first, CBSE depth only if you ask.' },
      { h3: 'Three notations', p: 'Lakh, English and German numbers, kept apart.' },
      { h3: 'Real projects', p: 'Programs that run on your child\'s own computer.' },
      { h3: 'Parent updates', p: 'Monthly, in plain English.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty children, or one to one.' }
    ]
  },

  projectsH2: 'What our students make',
  projectsLede: 'Children in our classes build projects like these. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents\' and students\' reviews from Google, as they wrote them.',

  fees: {
    h2: 'Fees for families in Germany',
    lede: 'Each month of classes, eight live lessons, has one fee. We print it in euro using the European Central Bank reference rate, but the charge is made in US dollars and converted by your bank, so the euro amount you finally see may be a little different.',
    free: ['A free first class with a mentor', 'A short check in maths or coding', 'No card required'],
    group: ['Fifteen to twenty children at a similar level', 'The same mentor every week', 'Two classes a week', 'Pay one month at a time'],
    one: ['Your child and one mentor', 'German syllabus, CBSE depth, or both', 'Times that fit your family in Germany']
  },

  faq: {
    eyebrow: 'Parents ask',
    h2: 'Coding and maths for Indian families in Germany: questions',
    items: [
      { q: 'Are there maths and coding classes for Indian children in Germany?', a: 'Yes. Our mentors in India run live online lessons, in English, for children of Indian families attending German schools, from age 6 to 18. A child joins a group of fifteen to twenty or learns one to one.' },
      { q: 'Are the classes in German?', a: 'No, English is the only teaching language, and that is deliberate: it is the language the family and the mentor share. The mentor adjusts to how fast your child works and how she speaks, and adds the German maths and Informatik words the school uses.' },
      { q: 'Do you follow the German syllabus or CBSE?', a: 'The German school syllabus first, so the child does well in class. For families who want it, we add CBSE-level depth, such as the Class X Standard maths topics, kept clearly separate.' },
      { q: 'Is German school maths easier than CBSE?', a: 'Not easier, different. German maths standards put weight on explaining and modelling in words; CBSE Class X maths gives Algebra the largest share of its exam, 20 of 80 marks. Children used to one often find the other hard in new places.' },
      { q: 'Is there an exam at the end of Grundschule in Germany?', a: 'No. The KMK says no leaving exam is held at the end of Grundschule. Most children move on after Klasse 4, or Klasse 6 in Berlin and Brandenburg.' },
      { q: 'How many Indian nationals live in Germany?', a: 'Destatis reports 311,130 Indian nationals in Germany on 31 December 2025, from the Ausländerzentralregister. The figure does not count children with German citizenship.' },
      { q: 'What times are possible?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. India is four and a half hours ahead of Germany in winter and three and a half in summer, so German afternoons are Indian evenings.' },
      { q: 'Who are the mentors?', a: 'Teachers based in India who teach live online in English. Your child keeps one mentor, who comes to know both the German school and the family\'s expectations.' },
      { q: 'Can my child learn coding even if the school does not teach it?', a: 'Yes. In six Länder no Informatik is compulsory for every pupil, according to the Informatik-Monitor 2026/27. We teach coding from Scratch to Python regardless of what the school offers.' },
      { q: 'What does it cost?', a: 'The monthly fee is shown on this page in euro, using the European Central Bank reference rate. Payment is in US dollars, converted by your bank. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our main page for families across Germany.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'For teenagers heading into the Oberstufe.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Our German-language page on Informatik help.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'A page for Berlin families with younger children.' },
      { href: '/courses/cbse-class-10-maths-board-exam-prep-course', label: 'CBSE Class 10 maths', p: 'The board-prep syllabus.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live class in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your child\'s Klasse, the Land, and whether you want maths, coding or both. In the first class the mentor works with your child for a while, then tells you in plain English where to begin and whether a group or one to one fits better.',
    readFirst: 'Before booking you can look through the <a class="ag-inline-link" href="/courses/python-ai-kids-masterclass">Python and AI for kids syllabus</a> or read <a class="ag-inline-link" href="/how-we-teach">how our lessons are taught</a>.',
    note: 'Our mentors teach from India, live, and only in English. For a quick answer, send us a WhatsApp message.',
    formNote: 'Free. No card, nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Courses', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python and AI for kids' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle school maths' },
        { href: '/courses/informatik-companion-course-klasse-5-10', label: 'Informatik Companion' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'One value, three notations'
  },

  personalityCss: `
.ag-root.ag-cmi .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cmi .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-cmi .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-cmi .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cmi .ag-grid-3 h3 { letter-spacing: -0.004em; }
`,

  dossier: {
    curriculumAuthority: 'Destatis foreign population by nationality (Ausländerzentralregister, 31.12.2025, Stand 2 April 2026); KMK primary, Sek I, Sek II pages and Eurydice dossier; GI Informatik-Monitor 2026/27; CBSE Curriculum 2026-27, Mathematics Class X (041, 241) and Mathematics at Advanced Level Grade 9. Read 2 and 3 November 2026. Code and practice set our own.',
    localProject: 'One value, three notations: an original Python lesson that writes the Destatis figure 311,130 in Indian (3,11,130), English and German (311.130) notation, first with a wrong every-two-digits grouping (31,11,30), then fixed by keeping the last three digits together; plus a practice set on lakh, crore, Millionen, Milliarde and the decimal comma. Lesson family: separate what a number is from how it is written.',
    requiredMentions: ['311,130 Indian nationals', '31,11,30', '311,130 | 311.130 | 3,11,130', '12,500,000 | 12.500.000 | 1,25,00,000', '1,000,000,000 &divide; 10,000,000 = 100 crore', 'Standard (041) or Basic (241)', 'Mathematics at Advanced Level', 'One value, three notations'],
    sources: [
      { claim: '311,130 Indian nationals on 31.12.2025 (Ausländerzentralregister).', url: 'https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Migration-Integration/Tabellen/auslaendische-bevoelkerung-staatsangehoerigkeit-jahre.html' },
      { claim: 'CBSE Class X maths 2026-27: codes 041 and 241, 3 hours, 80 marks, internal 20, unit marks.', url: 'https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1X_2026-27.pdf' },
      { claim: 'CBSE optional Mathematics at Advanced Level, Grade 9, 2026-27.', url: 'https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/MathsAd_SecP1_2026-27.pdf' },
      { claim: 'CBSE curriculum index 2026-27.', url: 'https://cbseacademic.nic.in/curriculum_2027.html' },
      { claim: 'Grundschule length, no leaving exam, Sek I tracks.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'NRW Informatik in Klasse 5 and 6; six Länder without compulsory Informatik.', url: 'https://informatik-monitor.de/' }
    ],
    rejectedClaims: [
      'Any other figure on Indian nationals (age, sex, growth, residence purpose): left out by rule; one figure only.',
      'Visa, residence, citizenship or school-choice advice: refused.',
      'An age-by-age match of CBSE classes and German Klassen: not stated by either source; not given.',
      'That German maths is easier or harder than CBSE overall: not claimed; the differences are described from the documents.',
      'Any connection with CBSE, the KMK or a school: none.'
    ]
  }
};
