'use strict';
// Coding for international school students in Germany (ag- English door, Germany cluster P2 row DE026).
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: families at international schools in Germany, from PYP age to the final exams, who want coding taught in the
// same language as school. The page maps the programmes these schools list (from AGIS, as context only) to a computing
// route by age, and its worked example is a small data-cleaning job on that very list.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-for-international-school-
// students-germany/, fetched 2 Nov 2026 for FACTS.md):
//  - AGIS homepage: "unserer 23 Mitgliedsschulen" (245); "dem deutschen Abitur gleichwertig" with "vorgegebenen
//    Fächerkombinationen" (248); MYP or IGCSE "einen der Mittleren Reife gleichwertigen Abschluss" (249); "Kinder aus bis
//    zu 65 verschiedenen Nationen" and "Englisch als gemeinsame Sprache im Unterricht" (250); "gemeinnützige
//    Organisationen" (251). Wer wir sind: "Alle Mitgliedsschulen der AGIS sind autorisierte IB-Schulen" (247); it also
//    shows "20 Mitgliedsschulen in ganz Deutschland" (246), so no member count is printed on this page.
//  - AGIS directory pages for 25 schools (FACTS.md 220 to 244), "Angebotene Abschlüsse" lists; copied into
//    agis_offers.txt (scratchpad de/w/G6), one line per school.
//  - KMK Eurydice dossier (FACTS.md 253, 255, 256): "die fünf Europäischen Schulen"; Berlin's Staatliche Europa-Schule
//    "an 33 Schulen mit ca. 6.000 Schülerinnen und Schülern"; the DIA is for "Deutschen Schulen im Ausland".
//  - KMK IB recognition agreement (10.03.1986 i. d. F. 15.06.2023), Anlage 1 Stand 26.03.2026: 59 schools numbered
//    under DEUTSCHLAND.
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027.
// Our own code (scratchpad de/w/G6/cis_v1.py, python3 -I): "Schools read: 25", "Different labels before tidying: 27",
// IB Diploma 13, IB, programme not named 9, IGCSE 8, AP 3, Abitur 2, A levels 1.
// Lesson family: tidy messy labels before you count, and keep "unknown" as its own answer.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const SAMPLE = [
  'Bonn International School | IB Primary Years Programme (PYP); IB Diploma Programme (DP); IB Middle Years Programme (MYP)',
  'International School of Ulm/Neu-Ulm | IB Primary Years Programme (PYP); International Baccalaureate (IB); International General Certificate of Secondary Education ( IGCSE)',
  'John F. Kennedy School Berlin | Advanced Placement (AP); American High School Diploma; Deutsches Abitur'
].join('\n');

const V1 = [
  'raw_labels = set()',
  'schools = []',
  'with open("agis_offers.txt", encoding="utf-8") as f:',
  '    for line in f:',
  '        name, offers = line.strip().split(" | ")',
  '        labels = [x.strip() for x in offers.split(";") if x.strip() not in ("", "-")]',
  '        raw_labels.update(labels)',
  '        schools.append((name, labels))',
  '',
  'def tidy(label):',
  '    if "Diploma" in label and label.startswith("IB"):',
  '        return "IB Diploma"',
  '    if label == "International Baccalaureate (IB)":',
  '        return "IB, programme not named"',
  '    if "IGCSE" in label:',
  '        return "IGCSE"',
  '    if "AS / A Levels" in label:',
  '        return "A levels"',
  '    if "Advanced Placement" in label:',
  '        return "AP"',
  '    if "Abitur" in label:',
  '        return "Abitur"',
  '    return None',
  '',
  'counts = {}',
  'for name, labels in schools:',
  '    for group in {tidy(x) for x in labels} - {None}:',
  '        counts[group] = counts.get(group, 0) + 1',
  '',
  'print("Schools read:", len(schools))',
  'print("Different labels before tidying:", len(raw_labels))',
  'for group in sorted(counts, key=counts.get, reverse=True):',
  '    print(group, counts[group])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Coding for international school students' },
  slug: 'coding-for-international-school-students-germany',
  code: 'cis',
  accent: '#843D56',
  accentRationale: 'Coding for international school pupils in Germany: a mulberry #843D56, warm like a school blazer, and well apart from the IB violet, the AP forest green and the IGCSE ochre; contrast on the paper #FBF8F2 about 6.1:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding for international school students in Germany',
  title: 'Coding for International School Students in Germany',
  description: 'Live coding classes in English for pupils at international schools in Germany, ages 6 to 18: Scratch and Python first, then IGCSE, IB or AP Computer Science.',
  ogDescription: 'A computing route by age for children at international schools in Germany, taught live in English, with a look at which programmes these schools list and a small Python data-cleaning project on that list.',
  twitterDescription: 'Coding in English for international school pupils in Germany, from PYP age to IB, IGCSE and AP.',
  pageName: 'Coding for International School Students in Germany',
  webPageDescription: 'A guide for families at international schools in Germany: what these schools offer according to AGIS and the KMK, how coding fits from primary years to the final exams, an original Python project that tidies and counts the programmes schools list, and live classes in English.',
  courseDescription: 'Live online coding classes in English for pupils aged 6 to 18 at international schools in Germany: Scratch and Python for younger children, then IGCSE, IB Diploma or AP Computer Science support, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'International school students',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#landscape', label: 'Schools' },
    { href: '#route', label: 'Routes' },
    { href: '#project', label: 'Project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Germany &middot; International schools &middot; Ages 6 to 18',
  h1: 'Coding for international school students in Germany',
  lede: 'Children at international schools in Germany learn in English, often move country every few years, and end school with the IB Diploma, IGCSE and A levels, or an American diploma with AP. Computing turns up in all of these routes, but at different ages and under different names. This page sets out what these schools say they offer, a coding route from age six to the final exams, and a project in which pupils tidy and count those very programmes in Python.',
  secondaryCta: { href: '#route', label: 'See the route by age' },
  wa: 'Hello Modern Age Coders, my child is at an international school in Germany. Could we book a free first coding class in English?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; from Scratch to IB, IGCSE and AP',
  spec: [
    ['Ages', '6 to 18'],
    ['Younger pupils', 'Scratch, then Python'],
    ['Older pupils', 'IGCSE, IB or AP Computer Science'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['German times', 'After school, Sunday mornings'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding for international school students in Germany at Modern Age Coders means live online classes in English for pupils aged 6 to 18: Scratch and Python for younger children, then support for IGCSE Computer Science, IB Diploma Computer Science or AP Computer Science, matched to the school\'s programme. One regular mentor keeps to your child\'s pace and accent, in a group of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for international school pupils in Germany',
    lede: 'One for the youngest coders, one for the IGCSE years, and one for the IB Diploma, the programme most international schools in Germany list.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CIS / 01', title: 'Python and AI for kids', note: 'Ages 8 to 12. Real Python, typed by the child, with small projects on games, numbers and simple AI ideas.' },
      { course: 'igcse-computer-science-0478-course', code: 'CIS / 02', title: 'IGCSE Computer Science', note: 'Ages 14 to 16. Cambridge 0478, both papers, pseudocode and Python.' },
      { course: 'ib-diploma-computer-science-course', code: 'CIS / 03', title: 'IB Diploma Computer Science', note: 'Ages 16 to 19. Standard or Higher Level, from writing programs to the theory papers and the project the school marks.' }
    ]
  },

  sections: [
    {
      id: 'landscape',
      eyebrow: 'The schools',
      h2: 'What do international schools in Germany offer?',
      lede: 'Mostly IB programmes, but not only. The association AGIS and the KMK give the clearest public picture, and neither publishes a count of pupils.',
      body: [
        { kind: 'two',
          leftH3: 'What AGIS says about its members',
          left: [
            'AGIS, the Arbeitsgemeinschaft der Internationalen Schulen in Deutschland, states that each member is authorised by the IB and runs one or more of its four programmes (Primary Years, Middle Years, Diploma, Career-related). It says the schools bring together children from up to 65 nations and use English as the common language of lessons, and that they are non-profit organisations.',
            'In the association\'s words, its IB Diploma counts as gleichwertig, of equal standing, with the German Abitur provided the required subject mix is taken, while members offering the Middle Years Programme or IGCSE give pupils a qualification equivalent to the Mittlere Reife.'
          ],
          rightH3: 'Other English-medium and bilingual options',
          right: [
            'The KMK\'s description of the German school system mentions five European Schools in Germany, which teach a European model. Berlin\'s Staatliche Europa-Schule is a network of bilingual streams at 33 schools with about 6,000 pupils, in German and a partner language.',
            'The KMK also says the Deutsches Internationales Abitur is awarded at German schools abroad, so it is not a route inside Germany. And in the KMK agreement on the IB Diploma, the annex dated 26 March 2026 numbers 59 schools in Germany under a special arrangement on maths at Standard Level.'
          ] },
        { kind: 'source', html: 'Sources: AGIS, agis-schools.org (homepage, Wer wir sind and school directory), read 2 November 2026; KMK, Eurydice dossier on the German education system; KMK, Vereinbarung über die Anerkennung des International Baccalaureate Diploma, Anlage 1. AGIS pages give two different member counts, 23 on the homepage and 20 on Wer wir sind, so we print neither as a fact. We are not connected with AGIS, the KMK or any school.' }
      ]
    },
    {
      id: 'route',
      tint: 'tint',
      eyebrow: 'A route by age',
      h2: 'When should a child at an international school start coding, and what comes next?',
      lede: 'Our suggested route follows the IB stages most of these schools use, with the Cambridge and American routes beside them. It is our plan, not any school\'s.',
      body: [
        { kind: 'table', numCols: [], caption: 'A coding route for pupils at international schools in Germany (ours)', head: ['Age', 'School stage, roughly', 'What we teach'], rows: [
          ['6 to 8', 'IB Primary Years, early grades', 'Scratch: sequences, loops and events through small animated stories'],
          ['8 to 11', 'Primary Years, upper grades', 'Python basics typed by the child; simple games and number puzzles'],
          ['11 to 14', 'Middle Years, or Cambridge Lower Secondary', 'Python projects, data, a first look at the web and at algorithms'],
          ['14 to 16', 'MYP years 4 and 5, or IGCSE', 'IGCSE Computer Science 0478, or MYP Design and personal projects'],
          ['16 to 19', 'IB Diploma, A levels or AP', 'IB Computer Science, Cambridge 9618, or AP CSA and CSP']
        ] },
        { kind: 'source', html: 'Our own route. Stage names follow the programmes listed in the AGIS school directory; the age bands are approximate and each school sets its own.' },
        { kind: 'two', mt: true,
          leftH3: 'Why start early, and gently',
          left: [
            'Children who move between schools and countries meet computing in very different forms: one school teaches Scratch in grade 2, another nothing until grade 7. A steady weekly class keeps a thread running through those moves, in the same language as school.',
            'For six to eight year olds the aim is not exam content. It is getting used to giving exact instructions and spotting why they went wrong.'
          ],
          rightH3: 'Why the exam years need a plan',
          right: [
            'From about fourteen the route forks: IGCSE Computer Science on a Cambridge track, or the MYP and then the IB Diploma, or AP on an American track. Each has its own exam language, from Cambridge pseudocode to Java for AP Computer Science A.',
            'A pupil who can already write and test programs arrives at that fork with a free choice, instead of avoiding Computer Science because it looks too late to start.'
          ] }
      ]
    },
    {
      id: 'project',
      eyebrow: 'Our worked project',
      h2: 'Can pupils use Python to find out which programmes these schools list?',
      lede: 'Yes, and it teaches the most underrated skill in data work: cleaning labels before you count them. We copied the qualifications listed on 25 AGIS directory pages into a text file, one school per line.',
      body: [
        { kind: 'code', label: 'Three lines of our file agis_offers.txt', lang: 'Text', code: SAMPLE, note: 'The labels are exactly as the AGIS pages give them, including the stray spaces in "( IGCSE)".' },
        { kind: 'p', mt: true, html: 'Look at the first two lines. Bonn lists "IB Diploma Programme (DP)". Ulm/Neu-Ulm lists "International Baccalaureate (IB)", which could mean the Diploma or the IB in general; the label does not say. A careless count would either drop Ulm/Neu-Ulm or add it to the Diploma column. Both are guesses. Our program keeps it as its own answer instead.' },
        { kind: 'code', label: 'Our program: tidy the labels, then count schools', lang: 'Python', code: V1, note: 'It prints <code>Schools read: 25</code>, <code>Different labels before tidying: 27</code>, then <code>IB Diploma 13</code>, <code>IB, programme not named 9</code>, <code>IGCSE 8</code>, <code>AP 3</code>, <code>Abitur 2</code> and <code>A levels 1</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Schools among the 25 AGIS directory pages we read that list each qualification (our count)', head: ['Qualification', 'Schools'], rows: [
          ['IB Diploma, named as such', '13'],
          ['IB, programme not named', '9'],
          ['IGCSE', '8'],
          ['AP', '3'],
          ['German Abitur', '2'],
          ['Cambridge AS and A levels', '1']
        ] },
        { kind: 'source', html: 'Data: AGIS school directory pages, agis-schools.org, read 2 November 2026; 25 pages, not a complete list of international schools in Germany. The grouping and the counts are ours. A school can appear in several rows.' },
        { kind: 'p', mt: true, html: 'Twenty-seven different labels came down to six groups, and one design decision mattered more than any line of code. The order of the tests inside <code>tidy</code> decides where a label lands: Augsburg lists "IB Diploma (including German Abitur recognition)", which contains both "Diploma" and "Abitur". Because the IB test comes first, it counts once, as an IB Diploma, and the Abitur row shows only the two schools that list the Abitur in its own right. Swap the order of those two tests and the answer changes. A pupil who can explain that has understood something many adults with spreadsheets have not.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Run it.</strong> Make your own agis_offers.txt from the three sample lines and check what your shorter file prints.',
          '<strong>Move one test.</strong> Put the Abitur test before the IB Diploma test and predict the new Abitur count before running it.',
          '<strong>Add a group.</strong> Count the Middle Years Programme too. How many label spellings does it need?',
          '<strong>Say what is missing.</strong> Write two sentences on why 25 directory pages cannot tell us how many international schools Germany has.'
        ] }
      ]
    },
    {
      id: 'moving',
      eyebrow: 'Families on the move',
      h2: 'What happens to coding when a family moves to or from Germany?',
      lede: 'Online classes travel. The mentor, the course and the progress stay the same when the school changes.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Arriving in Germany', p: 'A child joining an international school mid-year keeps the same weekly class through the move, which is one fewer thing that changes at once.' },
          { h3: 'Between programmes', p: 'Moving from a Cambridge school to an IB one, or the reverse, we map what the new school expects and fill the gap in order.' },
          { h3: 'Leaving Germany', p: 'Classes continue from the next country. Only the clock changes, and families choose times in their own time zone.' }
        ] },
        { kind: 'p', mt: true, html: 'Some families at international schools also follow the German system for a younger child, or plan a later move into a German Gymnasium. For them we teach the Informatik that German schools now ask for, in English, through our <a class="ag-inline-link" href="/courses/informatik-companion-course-klasse-5-10">Informatik companion course for Klasse 5 to 10</a>, and explain the German side on our <a class="ag-inline-link" href="/informatik-nachhilfe-online">Informatik-Nachhilfe page</a>.' },
        { kind: 'p', mt: true, html: 'With children under 18 we keep to the age rules the AI providers set in their own terms: no tool with an adult minimum age is used in their classes. The <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> quotes the rules tool by tool.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When can a pupil in Germany fit in a coding class?',
      lede: 'International school days often end later than German ones, so many families choose late afternoon or Sunday morning. India, where the mentors are, runs 4 h 30 ahead in winter and 3 h 30 in summer.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample slots in German time, with the matching time in India', head: ['Germany', 'India before 28 March 2027', 'India from 28 March 2027'], rows: [
          ['14:15', '18:45', '17:45'],
          ['16:15', '20:45', '19:45'],
          ['Sunday 09:45', '14:15', '13:15']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz Germany keeps UTC+1 (MEZ) in winter and UTC+2 (MESZ) in summer; the clocks changed on 25 October 2026 and change again on 28 March 2027. India is UTC+5:30 throughout. These are sample times, not fixed groups.' },
        { kind: 'p', mt: true, html: 'Younger children usually do best with one class at the same time each week; exam-year pupils often add a second. The free first class is booked in your own clock.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From a first Scratch story to an exam project',
    lede: 'How we track a pupil\'s progress across the years, whatever programme their school runs. These steps are ours.',
    table: { caption: 'Coding steps for international school pupils (ours)', head: ['Step', 'Age, usually', 'What the pupil does'], rows: [
      ['1. Instructions', '6 to 8', 'Builds a Scratch story with loops and events, and fixes it when it misbehaves'],
      ['2. Typed code', '8 to 11', 'Writes a Python game with variables, conditions and a score'],
      ['3. Data', '11 to 14', 'Reads a file, cleans it and counts, like the AGIS project above'],
      ['4. Exam foundations', '14 to 16', 'Traces algorithms and writes tested programs for IGCSE or the MYP'],
      ['5. Own project', '16 to 19', 'Plans, builds and defends a project for IB, A level or AP']
    ] },
    left: { h3: 'For pupils', ps: [
      'When a label is unclear, count it as unclear. Guessing is not data.',
      'Keep your old projects. Moving schools is easier with a portfolio.'
    ] },
    right: { h3: 'For parents', ps: [
      'Ask the school which computing courses run in which years before choosing options.',
      'A weekly class in the language of school survives a move better than a local club.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for international school pupils',
    lede: 'Live and in English throughout, and the mentor a child starts with is the mentor they keep.',
    bands: [
      { num: 'I', h3: 'Primary years', sub: 'Ages 6 to 11', courses: [
        { code: 'CIS / PY / 01', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'Stories, games and the first loops.' },
        { code: 'CIS / PY / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code in a world children already know.' },
        { code: 'CIS / PY / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Puzzles that train exact thinking.' }
      ] },
      { num: 'II', h3: 'Middle years', sub: 'Ages 11 to 15', courses: [
        { code: 'CIS / MY / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first script to real projects.' },
        { code: 'CIS / MY / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive pages and browser games.' },
        { code: 'CIS / MY / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics competitions', blurb: 'Biber and beyond, with puzzles of our own.' }
      ] },
      { num: 'III', h3: 'Final exams', sub: 'Ages 15 to 19', courses: [
        { code: 'CIS / EX / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java for pupils on an American track.' },
        { code: 'CIS / EX / 02', slug: 'cambridge-a-level-computer-science-9618-course', title: 'A Level Computer Science', blurb: 'Cambridge 9618 after IGCSE.' },
        { code: 'CIS / EX / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'Compulsory for every Diploma pupil.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes fit an international school week in Germany',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoon', l: 'Weekday slots once the school day is over.' },
      { time: 'Sunday morning', l: 'A calm slot before the week starts.' },
      { time: 'One to one', l: 'A time fixed with the mentor that moves with the school calendar.' }
    ],
    cells: [
      { h3: 'The child types', p: 'Every program is built by the pupil, not shown on screen.' },
      { h3: 'School\'s language', p: 'English, as at school, at a pace that suits.' },
      { h3: 'Programme-aware', p: 'IB, Cambridge or American, the plan follows it.' },
      { h3: 'One mentor', p: 'The same person through school moves.' },
      { h3: 'Age-safe tools', p: 'No adult-only AI tools for under-18s.' },
      { h3: 'Class size', p: 'A class of fifteen to twenty, or private lessons.' }
    ]
  },

  projectsH2: 'Made by our students',
  projectsLede: 'A handful of projects by our learners in many countries; <a class="ag-inline-link" href="/student-labs">student labs</a> collects more.',
  reviewsLede: 'Reviews our students and their parents posted on Google, copied without changes.',

  fees: {
    h2: 'Fees for coding classes for international school pupils',
    lede: 'Each month of eight live classes has a single fee. You see it here in euro, based on the European Central Bank reference rate; the payment is processed in US dollars and your bank converts it, which can leave a small difference on your statement.',
    free: ['A free first class', 'A short task matched to age and school stage', 'No card needed'],
    group: ['Fifteen to twenty pupils of a similar age and level', 'One regular mentor', 'Two classes a week', 'Month to month'],
    one: ['One pupil, one mentor', 'Plan built around the school programme', 'Continues through a move abroad']
  },

  faq: {
    eyebrow: 'International school families ask',
    h2: 'Coding for international school pupils in Germany: your questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. All classes are live and in English only, the language AGIS says its member schools teach in. The mentor keeps to your child\'s pace and accent.' },
      { q: 'From what age can my child start?', a: 'From 6, with Scratch. Most children move to typed Python around 8 to 10. There is no upper limit for school-age pupils.' },
      { q: 'Do you teach IB, IGCSE and AP Computer Science?', a: 'Yes: IB Diploma Computer Science at SL and HL, Cambridge IGCSE Computer Science 0478, and AP Computer Science A and Principles. We follow whichever programme your child\'s school runs.' },
      { q: 'Are you connected with my child\'s school or with AGIS?', a: 'No. We are an independent online school. We name schools on this page only as context from the AGIS directory, and we do not award grades or qualifications.' },
      { q: 'Is the IB Diploma recognised in Germany?', a: 'AGIS describes its IB Diploma as equal in standing to the Abitur when the required subjects are taken. The KMK sets those combinations in its recognition agreement; your school\'s IB coordinator can say how they apply to your child.' },
      { q: 'What if we move to another country?', a: 'Classes continue online with the same mentor. You choose new times in your new time zone.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Many international school families pick late afternoon or Sunday morning.' },
      { q: 'How do we pay?', a: 'Fees appear in euro, converted at the European Central Bank reference rate, and are charged in US dollars; your bank does the conversion, so its figure can be a little different. The first class is free.' },
      { q: 'Will my child use AI tools?', a: 'Only tools whose providers allow your child\'s age. Several set 18 as the minimum and we never use those with under-18 pupils.' },
      { q: 'Can siblings of different ages join?', a: 'Yes, in different groups by age and level, or one to one each. Families with two children often book back-to-back slots.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further pages for families at international schools.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our main page for families in Germany.' },
      { href: '/ib-computer-science-online-tuition', label: 'IB Computer Science, worldwide page', p: 'The Diploma course in depth.' },
      { href: '/cambridge-igcse-computer-science-tuition', label: 'IGCSE Computer Science tuition', p: 'Cambridge 0478 in depth.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A classes', p: 'Java for the AP exam.' },
      { href: '/coding-roadmap', label: 'Coding roadmap', p: 'How the skills build over the years.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Tool ages from the providers\' terms.' }
    ]
  },

  start: {
    h2: 'Book a free first coding class',
    lede: 'The mentor asks about your child\'s age, school programme and any coding so far, gives a short task to find the right level, and suggests a starting course, all in English and at a comfortable pace.',
    readFirst: 'You can also read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">every course</a> first.',
    note: 'Our classes are live online, in English, with mentors who work from India. WhatsApp in English is the quickest route to us.',
    formNote: 'The first class is free, without card details.'
  },

  footer: {
    cols: [
      { h4: 'School programmes', links: [
        { href: '/ib-computer-science-online-tuition', label: 'IB Computer Science' },
        { href: '/cambridge-igcse-computer-science-tuition', label: 'IGCSE Computer Science' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' }
      ] }
    ],
    bottomRight: 'Unclear is an answer too'
  },

  personalityCss: `
.ag-root.ag-cis .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-cis .ag-capsule { border-left-width: 6px; }
.ag-root.ag-cis .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-cis .ag-table td:nth-child(2) { font-style: italic; }
.ag-root.ag-cis .ag-code pre { white-space: pre-wrap; }
`,

  dossier: {
    curriculumAuthority: 'AGIS homepage, Wer wir sind and 25 school directory pages; KMK Eurydice dossier; KMK IB recognition agreement, Anlage 1 (Stand 26.03.2026); Einheitenzeitgesetz. Read 2 November 2026.',
    localProject: 'Tidy before you count: an original Python program that reads the qualifications listed on 25 AGIS directory pages (27 different labels) and groups them: IB Diploma 13, IB with programme not named 9, IGCSE 8, AP 3, Abitur 2, A levels 1. Lesson family: tidy messy labels before you count, and keep "unknown" as its own answer.',
    requiredMentions: ['Different labels before tidying: 27', 'IB, programme not named 9', 'agis_offers.txt', 'Twenty-seven different labels came down to six groups', 'including the stray spaces in "( IGCSE)"', 'at 33 schools with about 6,000 pupils', 'children from up to 65 nations', 'Unclear is an answer too'],
    sources: [
      { claim: 'AGIS: all members authorised IB schools; up to 65 nations; English as common language; IB Diploma and IGCSE equivalences.', url: 'https://www.agis-schools.org/' },
      { claim: 'AGIS directory entries, qualifications offered.', url: 'https://www.agis-schools.org/wer-wir-sind' },
      { claim: 'Five European Schools, Staatliche Europa-Schule Berlin, DIA abroad.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Eurydice/DE/dossier_de_ebook.pdf' },
      { claim: 'KMK IB agreement, Anlage 1 lists 59 schools in Germany.', url: 'https://www.kmk.org/fileadmin/veroeffentlichungen_beschluesse/1986/1986_03_10-Vereinbarung-Baccalaureate-Dipl_2023_06_15.pdf' }
    ],
    rejectedClaims: [
      'AGIS member count: the homepage says 23, Wer wir sind says 20; neither is printed.',
      'Any number of international school pupils in Germany: no official source exists (MARKET.md 1.5).',
      'The 25 directory pages as a complete list of international schools: they are not, and the page says so.',
      '"Our students come from" any named school: never claimed.',
      'Any affiliation with AGIS, the KMK or a school: none.'
    ]
  }
};
