'use strict';
// Coding for international school students in Frankfurt (ag- city school door, Germany cluster P5 row DE121).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only,
// with mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle: pupils at international schools in and around Frankfurt following IB, IGCSE or AP computing; what AGIS lists
// for the Frankfurt area (context only, never a source of students); how Germany reads an IB Diploma with Computer
// Science (KMK, sixth subject only); how that compares with Informatik in the Hessian Oberstufe; our IB, IGCSE and AP
// courses; and a data project on the city's traffic counts in which a naive join silently drops 32 of 529 rows.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-for-international-school-
// students-frankfurt/ and facts-school/src/, fetched 2 and 3 Nov 2026):
//  - AGIS homepage (FACTS 245): "unserer 23 Mitgliedsschulen"; Wer wir sind (247): "Alle Mitgliedsschulen der AGIS sind
//    autorisierte IB-Schulen". AGIS directory: Frankfurt International School, "Schüler 1820", address "An der Waldlust
//    15 61440 Oberursel", "Angebotene Abschlüsse IB Primary Years Programme (PYP) International Baccalaureate (IB)
//    Advanced Placement (AP) Select Exams" (230); Metropolitan School Frankfurt, "Schüler 743", "Eschborner Landstrasse
//    134 - 142", "IB Primary Years Programme (PYP) International General Certificate of Secondary Education ( IGCSE) IB
//    Diploma Programme (DP) MSF High School Diploma in G12" (244). AGIS Hessen list: "1820 Schüler:innen Frankfurt
//    International School", "350 Schüler:innen Metropolitan International School", "743 Schüler:innen Metropolitan".
//  - KMK, Vereinbarung über die Anerkennung des IB Diploma (10.03.1986 i. d. F. vom 15.06.2023), kmk-ib/5c09f317.txt:
//    "ein naturwissenschaftliches Fach (Biology, Chemistry, Physics)"; sixth subject list includes "Computer Science";
//    HL rule "muss entweder eine Sprache, Mathematik oder ein naturwissenschaftliches Fach"; "mindestens mit der
//    IB-Note 4"; Anlage 1 (Stand 26.03.2026) lists "25 Frankfurt International School" and "31 Metropolitan School
//    Frankfurt" among schools whose graduates with Mathematics SL "ein allgemeiner Hochschulzugang eröffnet werden kann".
//  - GI Informatik-Monitor 2026/27, Hessen (infmon-hessen): Grundkurs "zwei oder drei Wochenstunden"; Leistungsfach
//    "fünfstündig"; "Die schriftlichen Abiturprüfungsaufgaben werden zentral (landesweit einheitlich) vorgegeben.
//    Praktische Prüfungsanteile am Rechner sind nicht zulässig."
//  - kultus.hessen.de Termine Landesabitur 2027: Informatik Grundkurs Thursday 15 April 2027, Leistungskurs Monday
//    19 April 2027.
//  - bwinf.de (FACTS 145, 146): Bundeswettbewerb open up to 21, round 1 1 September to 23 November 2026.
//  - Destatis (places.tsv): Frankfurt am Main 756,021 (31.12.2024). Time: EinhZeitG, SoZV.
//  - Data: Stadt Frankfurt am Main, "WFS Verkehrsmengen Frankfurt am Main", via GovData
//    https://ckan.govdata.de/dataset/wfs-verkehrsmengen-frankfurt-am-main, licence Datenlizenz Deutschland Namensnennung
//    2.0, attribution "Stadt Frankfurt am Main, www.frankfurt.de"; record: "Mittelwerte der Jahre 2019 - 2023"; "Die
//    Radverkehrsmengen wurden zwischen den Bordsteinen ermittelt." Layers zs_kfz24 (530 segments) and zs_rad24 (529),
//    GeoJSON downloaded 3 November 2026; fields mittl_bel, str_name, kno_von, kno_nach.
// Our own calculations (scratchpad de/w/C3/de121/, python3 -I): v1 prints "Bike segments: 529 matched: 497 lost: 32";
// v1+v2 print "Bike segments: 529 matched: 529 lost: 0", "Car segments with no bike row: 1" (Wilhelmshöher Straße) and
// "Segments with more bikes than motor vehicles: 34". All 32 lost rows exist in the car layer with the two node numbers
// the other way round. Highest bike averages above motor vehicles: Oeder Weg 3,631.67 against 2,634.67; Scheffelstraße
// 2,304 against 1,323. 26 bike rows are 0, among them motorway sections (A 5, A 66, A 648, A 661).
// Lesson family: normalise a key before you join, and count what the join drops.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'def load(path):',
  '    table = {}',
  '    with open(path, newline="", encoding="utf-8") as src:',
  '        for r in csv.DictReader(src):',
  '            table[(r["from_node"], r["to_node"])] = float(r["average"])',
  '    return table',
  '',
  'cars = load("kfz.csv")',
  'bikes = load("rad.csv")',
  'matched = [k for k in bikes if k in cars]',
  'print("Bike segments:", len(bikes), "matched:", len(matched), "lost:", len(bikes) - len(matched))'
].join('\n');

const V2 = [
  'def segment(a, b):',
  '    return tuple(sorted((a, b)))',
  '',
  'def load2(path):',
  '    table = {}',
  '    with open(path, newline="", encoding="utf-8") as src:',
  '        for r in csv.DictReader(src):',
  '            table[segment(r["from_node"], r["to_node"])] = float(r["average"])',
  '    return table',
  '',
  'cars = load2("kfz.csv")',
  'bikes = load2("rad.csv")',
  'matched = [k for k in bikes if k in cars]',
  'print("Bike segments:", len(bikes), "matched:", len(matched), "lost:", len(bikes) - len(matched))',
  'print("Car segments with no bike row:", len([k for k in cars if k not in bikes]))',
  'more_bikes = [k for k in matched if bikes[k] > cars[k]]',
  'print("Segments with more bikes than motor vehicles:", len(more_bikes))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'school', label: 'Frankfurt: international school computing' },
  slug: 'coding-for-international-school-students-frankfurt',
  code: 'fra',
  accent: '#4A6398',
  accentRationale: 'Coding for international school students, Frankfurt: a steady slate blue #4A6398 for a page about exam courses and data tables, distinct from the plum of the Frankfurt kids page; contrast 4.83 on the paper #FBF8F2',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-hesse', name: 'Hesse' }],
  routeLabel: 'Coding for international school students in Frankfurt',
  title: 'Coding for International School Students in Frankfurt',
  description: 'Coding for international school students in Frankfurt: live IB, IGCSE and AP computer science help in English, how Germany reads IB CS, and a city data project.',
  ogDescription: 'Live online computer science in English for pupils at international schools around Frankfurt: IB, IGCSE and AP courses, how the KMK treats IB Computer Science, and a join that drops 32 rows of the city\'s traffic data.',
  twitterDescription: 'IB, IGCSE and AP computer science for Frankfurt international school pupils, live in English, with a real data join.',
  pageName: 'Coding for International School Students in Frankfurt',
  webPageDescription: 'A guide for families at international schools in the Frankfurt area to computer science help in English: AGIS context for the region, the KMK rules on IB Computer Science, Informatik in the Hessian Oberstufe for comparison, and an original data project on the Stadt Frankfurt am Main traffic counts.',
  courseDescription: 'Live online computer science classes in English for pupils at international schools around Frankfurt: IB Diploma Computer Science, IGCSE Computer Science 0478 and AP Computer Science A, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'International schools, Frankfurt',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#schools', label: 'Schools' },
    { href: '#ib', label: 'IB rules' },
    { href: '#project', label: 'Data join' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Frankfurt am Main &middot; International schools &middot; IB, IGCSE, AP',
  h1: 'Coding for international school students in Frankfurt',
  lede: 'The Frankfurt area has several large international schools, teaching IB, IGCSE and American AP courses in English. This page is for their pupils and parents: what the schools list, how a German university reads an IB Diploma that includes Computer Science, how that differs from Informatik in a Hessian Gymnasium, which of our live courses fits which programme, and a project on the city\'s traffic counts in which a perfectly ordinary join quietly loses six per cent of the data.',
  secondaryCta: { href: '#project', label: 'See the data join' },
  wa: 'Hello Modern Age Coders, my child attends an international school near Frankfurt and needs help with computer science. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; IB, IGCSE and AP computer science in English',
  spec: [
    ['For', 'International school pupils, ages 13 to 19'],
    ['Programmes', 'IB DP, IGCSE 0478, AP CS A'],
    ['Languages', 'Python and Java, plus pseudocode'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'Based in India, live on video'],
    ['Trial', 'Free, no card']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Coding for international school students in Frankfurt means live online computer science lessons in English from Modern Age Coders for pupils at IB, IGCSE and AP schools around the city: IB Diploma Computer Science, IGCSE Computer Science 0478 or AP Computer Science A, in Python or Java. One mentor follows the school\'s syllabus and the pupil\'s pace, one to one or in a group of fifteen to twenty.',

  picks: {
    eyebrow: 'Courses by programme',
    h2: 'Three courses for Frankfurt international school pupils',
    lede: 'One per programme taught in the region\'s international schools: the IB Diploma, Cambridge IGCSE and the American Advanced Placement.',
    items: [
      { course: 'ib-diploma-computer-science-course', code: 'FRA / 01', title: 'IB DP Computer Science', note: 'For Diploma pupils at SL or HL, joinable any month: the case study, algorithmic thinking in Python or Java, and steady support through the internal assessment.' },
      { course: 'igcse-computer-science-0478-course', code: 'FRA / 02', title: 'IGCSE Computer Science 0478', note: 'Six months, from the basics: the full Cambridge 0478 syllabus, pseudocode, and both papers practised under timed conditions.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'FRA / 03', title: 'AP Computer Science A', note: 'Six months of Java from first principles to the free-response questions, for schools that list Advanced Placement.' }
    ]
  },

  sections: [
    {
      id: 'schools',
      eyebrow: 'The schools, as context',
      h2: 'Which international programmes do Frankfurt-area schools teach?',
      lede: 'We name schools here only to describe what is on offer, from the directory of AGIS, the association of international schools in Germany. We do not claim any link with them, and we never say our students come from a particular school.',
      body: [
        { kind: 'table', numCols: [1], caption: 'AGIS member schools in Hessen near Frankfurt, as the AGIS directory lists them', head: ['School (AGIS listing)', 'Pupils listed', 'Programmes listed'], rows: [
          ['Frankfurt International School (address in Oberursel)', '1,820', 'IB Primary Years Programme, International Baccalaureate, Advanced Placement, Select Exams'],
          ['Metropolitan School Frankfurt', '743', 'IB Primary Years Programme, IGCSE, IB Diploma Programme, MSF High School Diploma in G12'],
          ['Metropolitan International School (Viernheim)', '350', 'IB Diploma Programme, Cambridge Primary, Lower and Upper Secondary (IGCSE), Hessen Education Plan']
        ] },
        { kind: 'source', html: 'Source: AGIS, Arbeitsgemeinschaft der Internationalen Schulen in Deutschland, school directory and Hessen member list, read 2 November 2026. AGIS says it represents 23 member schools and that all of them are authorised IB schools. Pupil numbers are as AGIS lists them, not our count.' },
        { kind: 'p', mt: true, html: 'Three things follow for a family. First, computing in these schools is examined in English, against IB, Cambridge or College Board syllabuses, not the Hessian Kerncurriculum. Second, two different exam traditions can sit in one building: an IGCSE year group may be learning Cambridge pseudocode while the Diploma years write Python or Java. Third, a pupil who joins mid-programme, after a move to Frankfurt for a parent\'s job, can arrive with a different first programming language from the one the class uses. That last case is where outside help pays off fastest.' }
      ]
    },
    {
      id: 'ib',
      eyebrow: 'IB Computer Science in Germany',
      h2: 'Does IB Computer Science count for a German university?',
      lede: 'It can be one of the six subjects, but not in place of a science. The Kultusministerkonferenz sets the rules for when an IB Diploma counts as a German university entrance qualification.',
      body: [
        { kind: 'two',
          leftH3: 'What the KMK agreement says',
          left: [
            'The KMK agreement on recognising the IB Diploma, as amended on 15 June 2023, requires two languages, mathematics, a social science and "ein naturwissenschaftliches Fach (Biology, Chemistry, Physics)" among the six exam subjects. Computer Science appears only in the list of subjects allowed for the sixth slot, so it cannot stand in for the science.',
            'Of the three Higher Level subjects, at least one must be a language, mathematics or a science from that list, and all six subjects need at least an IB grade 4, with one 3 allowed if it is balanced by a 5 at the same level or higher and 24 points in total.'
          ],
          rightH3: 'The maths footnote, and the two Frankfurt names',
          right: [
            'A separate footnote restricts graduates who take Mathematics at Standard Level to subject-bound university access outside maths, science and technology. Schools listed in the agreement\'s Anlage 1 are the exception.',
            'In Anlage 1, dated 26 March 2026, Frankfurt International School is number 25 and Metropolitan School Frankfurt number 31. For their graduates, Mathematics SL does not by itself limit access. Families should still check every subject choice with the school\'s own counsellors before the Diploma begins.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Computing at upper secondary level: IB Diploma and the Hessian Oberstufe compared', head: ['Point', 'IB Diploma (KMK reading)', 'Informatik in the Hessian Oberstufe'], rows: [
          ['Can it replace a science?', 'No; Computer Science is a sixth-slot subject only', 'Partly; the Monitor says it can replace the sciences in part'],
          ['Weekly hours', 'Set by the school and the IB', 'Grundkurs two or three hours; Leistungsfach five'],
          ['Written exam', 'IB papers, set by the IB', 'Central Hessian tasks, no practical part on a computer'],
          ['2027 written exam dates', 'Set by the IB, not by Hessen', 'Grundkurs 15 April 2027; Leistungskurs 19 April 2027']
        ] },
        { kind: 'source', html: 'Sources: Kultusministerkonferenz, Vereinbarung über die Anerkennung des International Baccalaureate Diploma (10.03.1986 i. d. F. vom 15.06.2023), Anlage 1 Stand 26.03.2026; Gesellschaft für Informatik, Informatik-Monitor 2026/27, Hessen page; Hessian ministry, Termine Landesabitur 2027. We describe these rules; we do not give admissions advice.' },
        { kind: 'p', mt: true, html: 'We teach the subject. The school and the IB award the Diploma, and universities decide on admission. What we can do is make sure a pupil who has chosen Computer Science can actually program, explain an algorithm in words and handle the case study, so the choice of subject never becomes the weak point of the Diploma.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Live, in English',
      h2: 'How do our lessons fit an international school week?',
      lede: 'International school pupils already study in English, so the language is the easy part. The harder part is time, and matching the exact syllabus of each programme.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English, as at school', p: 'We teach only in English, never in German. That suits an international school pupil, but we still adapt: mentors adjust their pace and accent to each learner, including pupils for whom English is a third language after German and a home language.' },
          { h3: 'The right syllabus', p: 'An IB pupil, an IGCSE pupil and an AP pupil need different things in the same week: a case study, pseudocode rules, or Java free-response practice. Each course follows its own programme, and one to one we work from the pupil\'s school tasks.' },
          { h3: 'Thinking, not copying', p: 'We never write internal assessments or coursework for a pupil. Mentors teach the pupil to plan, test and explain their own code, and to check any AI-generated suggestion against what the program really does.' }
        ] },
        { kind: 'p', mt: true, html: 'Mentors are based in India and teach live over video. A Frankfurt pupil who finishes school mid-afternoon can take a lesson before dinner, and a weekend slot works well before internal assessment deadlines.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Frankfurt data project',
      h2: 'Joining Frankfurt\'s car and bike counts: where did 32 rows go?',
      lede: 'Frankfurt publishes average traffic volumes for road segments: one table for motor vehicles, another for bicycles. Putting them side by side is a join, the most common operation in database work, and the place where data most often disappears without an error message.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'Stadt Frankfurt am Main publishes WFS Verkehrsmengen under the Datenlizenz Deutschland Namensnennung 2.0. The city describes the values as averages of the years 2019 to 2023 and notes that the bicycle counts were taken between the kerbs. We downloaded two layers on 3 November 2026: 530 segments for motor vehicles and 529 for bicycles.',
            'Each segment is identified by two node numbers, the junction it starts from and the one it ends at. We saved both layers as kfz.csv and rad.csv with four columns: from_node, to_node, street and average.'
          ],
          rightH3: 'The task',
          right: [
            'For each bicycle segment, find the motor-vehicle count on the same segment, so we can compare them. The natural key is the pair (from_node, to_node). Version 1 builds a dictionary for each table and keeps the bike rows whose key is also in the car table.',
            'Before running it, predict: with 529 bike rows and 530 car rows, how many should match?'
          ] },
        { kind: 'code', label: 'Version 1: join on (from, to)', lang: 'Python', code: V1, note: 'It prints: <code>Bike segments: 529 matched: 497 lost: 32</code>. No error, no warning, and 32 rows gone.' },
        { kind: 'p', mt: true, html: 'Looking at the 32 lost rows shows the cause at once. Every one of them is in the car table, but with its two node numbers the other way round: the bike layer drew the segment from junction A to B, the car layer from B to A. A road segment has no direction here, so the two keys describe the same thing. The fix is to normalise the key, always putting the smaller node number first, before either table is built.' },
        { kind: 'code', label: 'Version 2: normalise the key, then count again', lang: 'Python', code: V2, note: 'Run after Version 1. It prints: <code>Bike segments: 529 matched: 529 lost: 0</code>, <code>Car segments with no bike row: 1</code> and <code>Segments with more bikes than motor vehicles: 34</code>.' },
        { kind: 'p', html: 'Now every bike row finds its partner, and only one car segment, on Wilhelmshöher Straße, has no bike row at all. The comparison can start: on 34 segments the bike average is higher than the motor-vehicle average. The head of that list is Oeder Weg, with 3,631.67 bikes against 2,634.67 motor vehicles, followed by Scheffelstraße with 2,304 against 1,323.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'What the join does to the result (our calculation on the city\'s counts)', head: ['Step', 'Bike rows matched', 'Rows lost without warning'], rows: [
          ['Version 1, key (from, to)', '497', '32'],
          ['Version 2, key sorted', '529', '0']
        ] },
        { kind: 'source', html: 'Data: Stadt Frankfurt am Main, www.frankfurt.de, WFS Verkehrsmengen Frankfurt am Main, layers zs_kfz24 and zs_rad24, Datenlizenz Deutschland Namensnennung 2.0, downloaded 3 November 2026. The join, the counts and the comparison are ours. The city notes that cycle volumes were measured between the kerbs, so cycle tracks off the carriageway are not in these numbers; 26 bike rows are 0, among them motorway sections of the A 5, A 66, A 648 and A 661.' },
        { kind: 'ol', mt: true, items: [
          '<strong>IGCSE.</strong> Write the join in pseudocode with two arrays and a nested loop, then explain why a dictionary is faster for 529 rows.',
          '<strong>IB.</strong> State the precondition Version 1 silently assumed about the keys, and write a test that would have caught the 32 lost rows.',
          '<strong>AP.</strong> Rewrite segment() in Java as a method that returns a String key such as "62506009-62506013", and check it with both orders.',
          '<strong>Going further.</strong> The street names are in both tables. Count how many matched pairs have different street names, and decide whether that is a data problem or not.'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Beyond the syllabus',
      h2: 'Can international school pupils in Frankfurt enter German computing contests?',
      lede: 'Yes. The national informatics contest is open by age, not by school type, and it is a serious challenge for pupils who enjoy hard problems.',
      body: [
        { kind: 'two',
          leftH3: 'Bundeswettbewerb Informatik',
          left: [
            'The 45th Bundeswettbewerb Informatik opened on 1 September 2026, and its first round closes on 23 November 2026. It is open to young people up to 21 who are not yet at university or in work, and the first round allows group work.',
            'Round two follows in early 2027, round three in September 2027. The organisers choose the German team for the International Olympiad in Informatics from the top of this contest.'
          ],
          rightH3: 'How we help',
          right: [
            'Our informatics competitions course trains with original problems in the style of these rounds, in English. We never solve a pupil\'s contest submission for them, and we are not connected with the organisers.',
            'Because round one allows group work, a pupil can team up with classmates; round two must be done alone, so it is worth starting early.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Lesson times',
      h2: 'When are lessons in Frankfurt time?',
      lede: 'Teenage pupils often choose an early-evening weekday slot or a weekend afternoon. The table gives examples in Frankfurt time.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Frankfurt times for teenage pupils, with India time', head: ['Frankfurt', 'India, until 28 March 2027', 'India, from 28 March 2027'], rows: [
          ['17:20', '21:50', '20:50'],
          ['18:40', '23:10', '22:10'],
          ['Sunday 15:10', '19:40', '18:40']
        ] },
        { kind: 'source', html: 'German legal time under the Einheitenzeitgesetz is UTC+1, and UTC+2 during summer time, which ended on 25 October 2026 and returns on 28 March 2027. India uses UTC+5:30 without a summer change. The rows are examples; one-to-one times are agreed individually.' },
        { kind: 'p', mt: true, html: 'Lessons keep running through school breaks, which at international schools do not always match the Hessian calendar. A pupil with an internal assessment deadline can add lessons in the weeks before it and drop back afterwards.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Our checkpoints',
    h2: 'What a pupil should manage before each exam stage',
    lede: 'Our own checkpoints for international school computing, used to place a pupil and plan the year.',
    table: { caption: 'Computing checkpoints across IGCSE, IB and AP (ours)', head: ['Stage', 'Checkpoint', 'Why it matters'], rows: [
      ['Before IGCSE', 'Trace a loop by hand and write it in pseudocode', 'Written questions ask for algorithms on paper'],
      ['IGCSE exam year', 'Arrays, files and a linear search, tested with edge cases', 'Most lost marks are boundary cases'],
      ['Before the Diploma', 'Write and test functions in Python or Java', 'The Diploma moves fast from week one'],
      ['IB internal assessment', 'Plan, build, test and evaluate a substantial program of their own', 'The work must be the pupil\'s own'],
      ['AP exam year', 'Classes, ArrayLists and 2D arrays in Java, correct before running', 'Habits from the IDE do not help on paper']
    ] },
    left: { h3: 'For parents', ps: [
      'The data join above is a fair test of the IB and AP stages: a pupil who asks "did any rows go missing?" without being told is ready for real project work.',
      'We report in skills gained and work done, never in invented predicted grades.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Before you join two tables, check that both write the key the same way.',
      'Count the rows before and after every join. If the number changes, find out why.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for teenagers',
    h2: 'Nine more courses for Frankfurt teenagers',
    lede: 'All live and in English with one regular mentor, in a small group or one to one.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Ages 13 to 18', courses: [
        { code: 'FRA / BASE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From a first script to real projects, for beginners.' },
        { code: 'FRA / BASE / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'The language of AP CS A, taught from zero.' },
        { code: 'FRA / BASE / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for teens', blurb: 'Logic, data structures and searching, step by step.' }
      ] },
      { num: 'II', h3: 'Data and AI', sub: 'Ages 13 to 18', courses: [
        { code: 'FRA / DATA / 01', slug: 'mysql-mastery-for-teens', title: 'SQL for teens', blurb: 'Joins and queries on real tables, as in the project.' },
        { code: 'FRA / DATA / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python and first models, ages 14 to 18.' },
        { code: 'FRA / DATA / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'How models learn, built in Python.' }
      ] },
      { num: 'III', h3: 'Other routes', sub: 'Ages 13 to 19', courses: [
        { code: 'FRA / ALT / 01', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP CS Principles', blurb: 'The Create task and the exam.' },
        { code: 'FRA / ALT / 02', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'For pupils who move to a German Oberstufe.' },
        { code: 'FRA / ALT / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest problems for pupils who already code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'How live lessons fit around an international school timetable',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Early evening', l: 'After a long international school day in Frankfurt.' },
      { time: 'Weekends', l: 'Longer sessions before an assessment deadline.' },
      { time: '1-on-1', l: 'Built around the pupil\'s own IB, IGCSE or AP tasks.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'Who knows the programme and the pupil.' },
      { h3: 'Exact syllabus', p: 'IB, Cambridge or College Board, never mixed up.' },
      { h3: 'Python or Java', p: 'Whichever the school uses.' },
      { h3: 'Own work only', p: 'Coursework stays the pupil\'s, always.' },
      { h3: 'On paper too', p: 'Tracing and pseudocode for written papers.' },
      { h3: 'Group or alone', p: 'Fifteen to twenty pupils, or one to one.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'Teenagers who learn to code properly end up shipping real software. Some recent student projects appear below, with more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews by parents and students, reproduced as written.',

  fees: {
    h2: 'Fees for Frankfurt families',
    lede: 'Each month covers eight live lessons. Euro amounts on this page use the European Central Bank reference rate for display only; the payment goes through in US dollars, and your bank turns it into euro, so the statement may show a slightly different figure.',
    free: ['A free first lesson', 'A look at a current school task', 'No card needed'],
    group: ['Fifteen to twenty pupils on the same programme', 'One regular mentor', 'Two lessons a week', 'Monthly, cancel any month'],
    one: ['The pupil and one mentor', 'Built on the school\'s own tasks', 'Times around the school week']
  },

  faq: {
    eyebrow: 'Families ask',
    h2: 'Computer science help for Frankfurt international school pupils: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach in English only, and every lesson is live. That matches the language of international schools, and mentors still adjust their pace and accent to each pupil, including those for whom English is a second or third language.' },
      { q: 'Which programmes do you cover?', a: 'IB Diploma Computer Science at SL and HL, Cambridge IGCSE Computer Science 0478, and AP Computer Science A and Principles. We also teach the German Informatik Oberstufe course for pupils who move to a Hessian Gymnasium.' },
      { q: 'Can IB Computer Science replace a science for German university entry?', a: 'No. Under the KMK agreement on the IB Diploma, one of the six subjects must be Biology, Chemistry or Physics; Computer Science is allowed only as the sixth subject. Check every subject choice with the school before the Diploma starts.' },
      { q: 'Do you write or check internal assessments?', a: 'We never write any part of an internal assessment or coursework. We teach the skills behind it, such as planning, testing and evaluating, and we can explain the published criteria. The work and the decisions stay the pupil\'s.' },
      { q: 'Which language do you teach, Python or Java?', a: 'Whichever the school uses. Many IB pupils work in Python or Java, IGCSE pupils need Cambridge pseudocode alongside a language, and AP Computer Science A is examined in Java.' },
      { q: 'When are lessons in Frankfurt time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. An early evening slot after school, or Sunday afternoon, suits many pupils.' },
      { q: 'Is the Bundeswettbewerb Informatik open to international school pupils?', a: 'Yes, it is open to young people up to 21 who are not yet at university or working. The 45th contest\'s first round runs from 1 September to 23 November 2026, and group work is allowed in that round.' },
      { q: 'Where are the mentors?', a: 'In India, teaching live over video. 17:20 in Frankfurt is 21:50 for the mentor in winter and 20:50 in summer. The pupil keeps the same mentor through the school year.' },
      { q: 'What do lessons cost, and in which currency?', a: 'Lessons are billed monthly. Prices here appear in euro at the European Central Bank reference rate, but the charge is in US dollars and your bank converts it, so the statement can differ a little. The first lesson is free, and no card is needed.' },
      { q: 'Do you know the schools in Frankfurt?', a: 'We follow the published IB, Cambridge and College Board syllabuses that the schools teach. We are not connected with any school, and we describe them on this page only from the AGIS directory.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for international school families in Germany.',
    items: [
      { href: '/coding-for-international-school-students-germany', label: 'International school pupils in Germany', p: 'The same question for every region of Germany.' },
      { href: '/ib-computer-science-tutor-germany', label: 'IB Computer Science tutor', p: 'IB CS in Germany, in more depth.' },
      { href: '/igcse-computer-science-tutor-germany', label: 'IGCSE Computer Science tutor', p: 'Cambridge 0478, paper by paper.' },
      { href: '/coding-classes-in-hesse', label: 'Coding classes in Hesse', p: 'Hessian school rules for the whole Land.' },
      { href: '/python-and-dsa-for-international-students-germany', label: 'Python and DSA', p: 'For older students on the way to university.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for Germany.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Bring a current task, a past paper or a piece of code that will not work. The mentor works through it with the pupil, sees where the understanding stops, and recommends a course and a format.',
    readFirst: 'Before booking, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> shows what a live lesson looks like and <a class="ag-inline-link" href="/courses">all courses</a> lists each syllabus in full.',
    note: 'Mentors teach live online from India, in English only. WhatsApp is the fastest way to reach us.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Programmes', links: [
        { href: '/courses/ib-diploma-computer-science-course', label: 'IB Computer Science' },
        { href: '/courses/igcse-computer-science-0478-course', label: 'IGCSE Computer Science' },
        { href: '/courses/ap-computer-science-a-java-exam-prep-course', label: 'AP Computer Science A' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-for-international-school-students-germany', label: 'International schools' },
        { href: '/ib-computer-science-tutor-germany', label: 'IB CS tutor' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Count the rows after every join'
  },

  personalityCss: `
.ag-root.ag-fra .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-fra .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-fra .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-fra .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-fra .ag-table td { hyphens: auto; }
`,

  dossier: {
    curriculumAuthority: 'AGIS school directory and Hessen member list; Kultusministerkonferenz, IB Diploma recognition agreement (i. d. F. vom 15.06.2023) with Anlage 1 Stand 26.03.2026; Gesellschaft für Informatik, Informatik-Monitor 2026/27, Hessen; Hessian ministry, Termine Landesabitur 2027; Bundesweite Informatikwettbewerbe; Einheitenzeitgesetz. Data: Stadt Frankfurt am Main, WFS Verkehrsmengen, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'The Frankfurt traffic join: an original Python project joining the city\'s motor-vehicle and bicycle segment averages; a join on (from, to) matches 497 of 529 bike rows and silently drops 32 whose node pair is reversed; a sorted key matches all 529, leaves one car segment unmatched and shows 34 segments with more bikes than motor vehicles. Lesson family: normalise a key before you join, and count what the join drops.',
    requiredMentions: ['kfz.csv', 'Bike segments: 529 matched: 497 lost: 32', 'Bike segments: 529 matched: 529 lost: 0', 'Segments with more bikes than motor vehicles: 34', 'ein naturwissenschaftliches Fach (Biology, Chemistry, Physics)', 'Metropolitan School Frankfurt number 31', 'Leistungskurs 19 April 2027', 'Count the rows after every join'],
    sources: [
      { claim: 'AGIS member schools near Frankfurt, pupils and programmes listed.', url: 'https://www.agis-schools.org/school/frankfurt-international-school' },
      { claim: 'Metropolitan School Frankfurt programmes listed.', url: 'https://www.agis-schools.org/school/metropolitan-school-frankfurt' },
      { claim: 'KMK IB recognition: science requirement, Computer Science sixth subject, Anlage 1.', url: 'https://www.kmk.org/fileadmin/veroeffentlichungen_beschluesse/1986/1986_03_10-Vereinbarung-Baccalaureate-Dipl_2023_06_15.pdf' },
      { claim: 'Hessen Informatik in the Oberstufe.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/hessen' },
      { claim: 'Hessen Informatik Abitur dates 2027.', url: 'https://kultus.hessen.de/schulsystem/schulformen-und-bildungsgaenge/gymnasium/landesabitur/termine-landesabitur' },
      { claim: 'Frankfurt traffic volumes and licence.', url: 'https://ckan.govdata.de/dataset/wfs-verkehrsmengen-frankfurt-am-main' }
    ],
    rejectedClaims: [
      'Any IB syllabus or exam detail from ibo.org: the host returned a Cloudflare challenge, so none is used.',
      'Naming any school as a source of our students, or any link with a school: refused.',
      'Admissions advice on a pupil\'s subject choice: refused; the page describes the KMK rules only.',
      'Writing internal assessments or contest entries for pupils: refused.'
    ]
  }
};
