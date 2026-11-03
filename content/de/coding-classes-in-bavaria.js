'use strict';
// Coding classes in Bavaria (ag- Land page, Germany cluster P4 row DE096, hubGroup land, code cob, accent #4D4B00).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show euro,
// checkout charges USD.
// Spine: in Bavaria the school type decides the computing. The Mittelschule teaches Informatik one hour a week in every
// grade from 5 to 10, the Realschule has a full subject called Informationstechnologie, and at the Gymnasium it depends on
// the branch (Ausbildungsrichtung) until grade 11, when every Gymnasium pupil has two compulsory hours. The written
// Informatik Abitur is set centrally, programmed on paper, and its 2027 date follows from the ministry's notice.
// Sources (read raw 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Bayern page (facts-school/src/infmon-bayern/c7366485.txt): Mittelschule "in den
//    Jahrgangsstufen 5 bis 10 das verbindliche Fach Informatik im Umfang von je einer Wochenstunde"; Wahlfach "Informatik und
//    digitales Gestalten in den Jahrgangsstufe 7 bis 10 zweistündig"; Realschule "Informationstechnologie ...
//    Wahlpflichtfächergruppe I – insgesamt elf Wochenstunden, Wahlpflichtfächergruppe II – insgesamt acht ... IIIa ... sieben,
//    ... IIIb ... neun", plus "4 Wochenstunden Profilunterricht"; Gymnasium Natur und Technik with "in den Jahrgangsstufen 6
//    und 7 im Umfang von je einer Wochenstunde der Schwerpunkt Informatik"; NTG grades 9 and 10 "zweistündig das
//    verpflichtende Fach Informatik"; WWG Wirtschaftsinformatik; "Somit findet in Jahrgangsstufe 11 in allen
//    Ausbildungsrichtungen verpflichtend zweistündig Informatikunterricht statt."; Qualifikationsphase NTG "dreistündig auf
//    grundlegendem Anforderungsniveau oder fünfstündig auf erhöhtem"; "spät beginnende Informatik dreistündig"; "Die
//    schriftlichen Abiturprüfungsaufgaben im Fach Informatik werden zentral gestellt. Große Teile des schriftlichen
//    Informatikabiturs beinhalten Programmieraufgaben auf Papier, jedoch keine praktischen Anteile am Rechner."; aids
//    Formelsammlung, formula document, scientific calculator, Rechtschreibwörterbuch; six Ausbildungsrichtungen; G9 with
//    the switch from G8 completed in 2024/25 (FACTS 49); key figures "Anteil SuS mit Informatik in der Sek II 11 %"
//    (2024/2025, KMK); 1248 Informatik teachers, 3 % of all teachers, 75 new hires (2025/2026, Staatsministerium; Realschulen
//    and Gymnasien only).
//  - Bavarian ministry km.bayern.de Gymnasium page: "Die Abiturprüfung besteht aus drei schriftlichen und zwei mündlichen
//    Prüfungen."; nine-year Gymnasium covers grades 5 to 13 in 2025/26 (FACTS 41, 63).
//  - Bayerisches Ministerialblatt BayMBl. 2025 Nr. 354, Abiturprüfung 2027, notice of 18 August 2025 (src-pages/<slug>/raw/
//    baymbl-2025-354.pdf, .txt): "21. April 2027 alle Abiturprüfungsfächer auf erhöhtem Anforderungsniveau (mit Ausnahme von
//    Deutsch, Mathematik, Englisch, Französisch, Biologie, Chemie, Physik)"; "27. April 2027 Deutsch"; "30. April 2027
//    Englisch"; "3. Mai 2027 Französisch"; "5. Mai 2027 Mathematik"; "7. Mai 2027 alle Abiturprüfungsfächer auf grundlegendem
//    Anforderungsniveau (mit Ausnahme von Englisch, Französisch, Biologie, Chemie, Physik)"; biology, physics, chemistry
//    11 to 13 May 2027; Kolloquium "Montag, 31. Mai mit Freitag, 4. Juni 2027" and "Montag, 7. Juni mit Freitag, 11. Juni
//    2027"; mündliche Zusatzprüfungen "bis spätestens Freitag, den 18. Juni 2027". Informatik is not in either exception list,
//    so by the notice's own rule its written exam falls on 21 April 2027 (erhöht) or 7 May 2027 (grundlegend): our reading.
//  - KMK: "Hauptschule Mittelschule (Bayern)" (FACTS 18); FER2026_27 row "Bayern 02.11. - 06.11. 24.12. - 08.01. --
//    08.02. - 12.02. 22.03. - 02.04. 18.05. - 28.05. 02.08. - 13.09." (raw src/kmk-fer2627/fe303dbf.txt); FACTS 258.
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Bayern 13,248,928; München 1,505,005.
//  - Data: Landeshauptstadt München via GovData https://ckan.govdata.de/dataset/haltestellenliste-mvv ("Haltestellenliste
//    MVV", publisher_name Landeshauptstadt München, licence CC BY 4.0, credit "Münchner Verkehrs- und Tarifverbund GmbH (MVV)"),
//    file MVV_Haltestellen_Report_s26.csv (759,570 bytes, sha256 5e2f0d82...d7d61e8a), downloaded 3 November 2026.
//    gkd.bayern.de (lake levels) answered "Request Rejected" and statistikdaten.bayern.de answered 403: both stopped, not retried.
// Our own calculations (scratchpad de/w/L2/by/v1.py, v2.py, v3.py, python3 -I), exact output:
//    v1: "Stops with coordinates: 10173 without: 888" / "Northernmost stop? Hauptbahnhof Passau 13.4507801"
//    v2: "Marienplatz X, Y: 48.1364359 11.577658" / "Northernmost: Nürnberg Hbf Nürnberg 49.445615" /
//        "Southernmost: Bahnhof Seefeld in Tirol 47.3284912"
//    v3: "By degrees: ['Marienplatz (Hl.-Geist-Kirche)', 'Tal', 'Marienplatz (St.-Peter)', 'Viktualienmarkt', 'Nationaltheater']"
//        "By km: ['Marienplatz (Hl.-Geist-Kirche)', 'Tal', 'Marienplatz (St.-Peter)', 'Viktualienmarkt', 'Rindermarkt']"
//        "Within 1 km: 34"
// Lesson family: check the axes and the units before you compute; a column label can be wrong, and a degree east is shorter
// than a degree north.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'stops, missing = [], 0',
  'with open("MVV_Haltestellen_Report_s26.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        if row["WGS84 X"] == "" or row["WGS84 Y"] == "":',
  '            missing += 1',
  '            continue',
  '        x = float(row["WGS84 X"].replace(",", "."))   # assumed: east',
  '        y = float(row["WGS84 Y"].replace(",", "."))   # assumed: north',
  '        stops.append((row["Name ohne Ort"], row["Ort"], x, y))',
  '',
  'north = max(stops, key=lambda s: s[3])',
  'print("Stops with coordinates:", len(stops), "without:", missing)',
  'print("Northernmost stop?", north[0], north[1], north[3])'
].join('\n');

const V2 = [
  'marienplatz = [s for s in stops if s[0] == "Marienplatz" and s[1] == "München"][0]',
  'print("Marienplatz X, Y:", marienplatz[2], marienplatz[3])',
  'north = max(stops, key=lambda s: s[2])   # X is the latitude',
  'south = min(stops, key=lambda s: s[2])',
  'print("Northernmost:", north[0], north[1], north[2])',
  'print("Southernmost:", south[0], south[1], south[2])'
].join('\n');

const V3 = [
  'import math',
  'lat0, lon0 = marienplatz[2], marienplatz[3]',
  '',
  'def degrees_apart(s):',
  '    return math.hypot(s[2] - lat0, s[3] - lon0)',
  '',
  'def km_apart(s):',
  '    north_km = (s[2] - lat0) * 111.2',
  '    east_km = (s[3] - lon0) * 111.2 * math.cos(math.radians(lat0))',
  '    return math.hypot(north_km, east_km)',
  '',
  'others = [s for s in stops if s is not marienplatz]',
  'print("By degrees:", [s[0] for s in sorted(others, key=degrees_apart)[:5]])',
  'print("By km:", [s[0] for s in sorted(others, key=km_apart)[:5]])',
  'print("Within 1 km:", sum(1 for s in others if km_apart(s) <= 1))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'Bavaria' },
  slug: 'coding-classes-in-bavaria',
  code: 'cob',
  accent: '#4D4B00',
  accentRationale: 'Bavaria Land page: a dark alpine moss #4D4B00, the olive of Alpine meadows and conifer slopes south of Munich, kept well away from the Land\'s blue and white flag colours; contrast 7.34 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes in Bavaria',
  title: 'Coding Classes in Bavaria: Live Online in English, Klasse 5+',
  description: 'Coding classes in Bavaria, live online in English: Informatik at Mittelschule, Realschule and Gymnasium, the 2027 Abitur dates, holidays and a Munich data project.',
  ogDescription: 'Live coding in English for families in Bavaria: how much Informatik each school type teaches, the compulsory grade 11 course, the paper-based Informatik Abitur in 2027, the school holidays, and an original project on the Munich transit stop list.',
  twitterDescription: 'Coding in English for Bavaria: Informatik by school type, the 2027 Abitur and a Munich transit data project.',
  pageName: 'Coding Classes in Bavaria',
  webPageDescription: 'A guide for families in Bavaria to computing at school and beyond, built from the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, the Bavarian ministry and its Ministerialblatt notice on the Abitur 2027, the KMK holiday tables and Destatis, with an original Python project on the MVV stop list published by the Landeshauptstadt München.',
  courseDescription: 'Live online coding classes in English for learners in Bavaria: Informatik support from Klasse 5, Python and Java for the Oberstufe and the paper-based Abitur, competition training and adult courses, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Bavaria',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'Schools' },
    { href: '#abitur', label: 'Abitur' },
    { href: '#project', label: 'Data' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Bavaria &middot; Coding and Informatik &middot; Mittelschule to Abitur',
  h1: 'Coding classes in Bavaria',
  lede: 'In Bavaria the school a child attends decides how much computing they meet: a Mittelschule pupil has Informatik every year from grade 5, a Realschule pupil has a whole subject called Informationstechnologie, and at a Gymnasium it turns on the branch until grade 11. This page lays that out, gives the 2027 Abitur dates from the ministry\'s own notice, lists the holidays (Bavaria\'s autumn break is this very week), explains our live classes in English, and ends with a Munich data project that starts by finding the wrong answer.',
  secondaryCta: { href: '#project', label: 'See the Munich project' },
  wa: 'Hello Modern Age Coders, we live in Bavaria and would like to book a free first coding class, taught in English.',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ learners worldwide &middot; English-only lessons with one steady mentor',
  spec: [
    ['Ages', 'About 8 to 19, and adults'],
    ['Fits beside', 'Informatik, Informationstechnologie, NTG'],
    ['Languages', 'Scratch, Python, Java'],
    ['Class size', 'Fifteen to twenty, or private'],
    ['Mentors', 'Based in India, teaching in English'],
    ['First lesson', 'Free, with no card']
  ],
  capsuleQ: 'In short',
  capsule: 'For families in Bavaria, Modern Age Coders runs live online coding classes in English for school pupils aged roughly 8 to 19 and for adults, as a batch of fifteen to twenty or one to one. Younger pupils build programs in Scratch and Python beside school Informatik or Informationstechnologie; Gymnasium pupils prepare in Java or Python for the Oberstufe and an Abitur exam written on paper. The Informatik Companion course follows Klasse 5 to 10.',

  picks: {
    eyebrow: 'Starting points in Bavaria',
    h2: 'Three courses matched to Bavarian school stages',
    lede: 'A companion to lower-secondary computing in any of the three school types, an Oberstufe course built around the paper exam, and contest training for pupils who want more.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'COB / 01', title: 'Informatik Companion, Klasse 5 to 10', note: 'For roughly 10 to 16 year olds. Step-by-step thinking, data and code from blocks to Python, useful whether the school calls the subject Informatik, Informationstechnologie or Natur und Technik.' },
      { course: 'informatik-abitur-course-java-python', code: 'COB / 02', title: 'Oberstufe Informatik and the Abitur', note: 'Ages about 16 to 19. Object orientation, data structures, recursion and databases, with regular handwritten programming under time pressure.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'COB / 03', title: 'German informatics competitions', note: 'For roughly 9 to 19 year olds. From Biber-style puzzles to Bundeswettbewerb algorithm tasks and AI projects, every problem written by us.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Informatik at Bavarian schools',
      h2: 'How much Informatik does each school type teach in Bavaria?',
      lede: 'Three school types, three different answers. The Gesellschaft für Informatik summarises the Bavarian school ordinances in its Informatik-Monitor 2026/27; this table follows it.',
      body: [
        { kind: 'table', numCols: [], caption: 'Computing in Bavarian secondary schools, by school type', head: ['School type', 'Grades', 'Computing on the timetable'], rows: [
          ['Mittelschule', '5 to 10', 'Informatik, compulsory, one lesson a week in every grade'],
          ['Mittelschule', '7 to 10', 'Optional: Informatik und digitales Gestalten, two lessons a week'],
          ['Realschule', '5 to 10', 'Informationstechnologie, compulsory; 7 to 11 weekly hours in total, by subject group'],
          ['Gymnasium, all branches', '6 and 7', 'One lesson a week of Informatik inside Natur und Technik'],
          ['Gymnasium, NTG branch', '9 and 10', 'Informatik, compulsory, two lessons a week'],
          ['Gymnasium, all branches', '11', 'Two compulsory lessons a week of an informatics subject']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Bayern page, read 2 November 2026, compiled from the Mittelschulordnung, Realschulordnung and Gymnasialschulordnung. At the Realschule the total depends on the Wahlpflichtfächergruppe: eleven hours in group I, eight in group II, seven in IIIa and nine in IIIb, plus four optional profile hours. At the economics branch (WWG) the subject in grades 9 and 10 is Wirtschaftsinformatik.' },
        { kind: 'two', mt: true,
          leftH3: 'The Gymnasium branch matters',
          left: [
            'A Bavarian Gymnasium is organised in branches, called Ausbildungsrichtungen: humanistic, languages, science and technology (NTG), music, economics and social sciences. Only the NTG branch has compulsory Informatik in grades 9 and 10, so two pupils at the same school can leave grade 10 with very different amounts of programming behind them.',
            'Grade 11 evens things out a little. The monitor records that in grade 11 every branch has two compulsory hours of an informatics subject: Informatik at the NTG, Wirtschaftsinformatik at the economics branch and spät beginnende Informatik, late-start Informatik, everywhere else.'
          ],
          rightH3: 'Back on nine years',
          right: [
            'Bavaria has returned to the nine-year Gymnasium. The ministry\'s Gymnasium page says the reintroduced G9 covers grades 5 to 13 in 2025/26, and the monitor describes grade 11 as the Einführungsphase and grades 12 and 13 as the Qualifikationsphase.',
            'In the Qualifikationsphase an NTG pupil can continue Informatik with three hours a week at basic level or five hours at raised level; the late-start course continues at three hours at basic level. The monitor gives 11 % as the share of Bavarian upper secondary pupils taking Informatik in 2024/25, from KMK figures.'
          ] },
        { kind: 'p', mt: true, html: 'Two more numbers set the scene. Bavaria is home to 13,248,928 people, 1,505,005 of them in Munich, the Land capital (Destatis, 31 December 2024). For 2025/26 the monitor reports 1,248 qualified Informatik teachers at Bavarian Realschulen and Gymnasien, 3 % of all their teachers, with 75 newly hired in the year. KMK\'s school overview also explains a name that confuses newcomers: Mittelschule is simply Bavaria\'s word for the Hauptschule.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Do you teach in German or in English?',
      lede: 'In English, always, and live. Our mentors work from India and adapt to the learner, not the reverse.',
      body: [
        { kind: 'three', cells: [
          { h3: 'No German lessons', p: 'We say this plainly because families ask: every lesson is in English. A pupil at a German school practises English while learning to code; a pupil at an international school in or around Munich simply keeps working in the language of their classroom.' },
          { h3: 'Speed and accent', p: 'Mentors adjust how fast they speak, repeat a step in different words and get used to a learner\'s accent within a few lessons. Nobody is expected to sound like a textbook.' },
          { h3: 'Two vocabularies', p: 'Bavarian lessons use words such as Algorithmus, Variable, Objekt and Klasse. We say the German term and the English one side by side, so homework and our lessons reinforce each other.' }
        ] }
      ]
    },
    {
      id: 'abitur',
      tint: 'tint',
      eyebrow: 'The Abitur in 2027',
      h2: 'When is the Informatik Abitur in Bavaria in 2027, and what is allowed?',
      lede: 'The Staatsministerium announced the 2027 dates in the Bayerisches Ministerialblatt in September 2025. The exam format comes from the Informatik-Monitor.',
      body: [
        { kind: 'table', numCols: [], caption: 'Abitur 2027 at Bavarian Gymnasien: written exams and the colloquium', head: ['Date', 'What is written'], rows: [
          ['21 April 2027', 'All raised-level subjects except German, maths, English, French, biology, chemistry and physics'],
          ['27 April 2027', 'German'],
          ['30 April 2027', 'English'],
          ['3 May 2027', 'French'],
          ['5 May 2027', 'Mathematics'],
          ['7 May 2027', 'All basic-level subjects except English, French, biology, chemistry and physics'],
          ['11 to 13 May 2027', 'Biology, physics and chemistry'],
          ['31 May to 4 June and 7 to 11 June 2027', 'Colloquium exams (two exam weeks)']
        ] },
        { kind: 'source', html: 'Source: Bayerisches Staatsministerium für Unterricht und Kultus, Abiturprüfung 2027, notice of 18 August 2025, BayMBl. 2025 Nr. 354, read 3 November 2026. Informatik is in neither exception list, so by the notice\'s own rule a written Informatik exam falls on 21 April 2027 at raised level and on 7 May 2027 at basic level; that reading is ours, and your school confirms the timetable. Additional oral exams must be finished by 18 June 2027.' },
        { kind: 'two', mt: true,
          leftH3: 'Five subjects, three written',
          left: [
            'The ministry\'s Gymnasium page sums up the format in one line: the Abitur consists of three written and two oral exams. In the colloquium a pupil is examined in conversation, which is where explaining an algorithm aloud, in clear German, matters.',
            'The monitor adds that Informatik at raised level is examined in writing or orally, that it cannot replace the required foreign language or science among the exam subjects, and that Wirtschaftsinformatik and late-start Informatik can be taken as oral exams.'
          ],
          rightH3: 'Programming on paper',
          right: [
            'The written Informatik exam is set centrally and, in the monitor\'s words, large parts of it are programming tasks on paper with no practical work at a computer. Permitted aids are an approved formula collection, the ministry\'s document of mathematical formulas, an approved scientific calculator and a current spelling dictionary.',
            'For a teenager used to an editor that underlines mistakes, that is a different skill. We practise it directly: a task, a timer, a sheet of paper, then a line-by-line review. The school course and teachers remain what counts for the Abitur; we do not set or mark school work.'
          ] }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'Holidays',
      h2: 'When are the Bavarian school holidays in 2026/27?',
      lede: 'Bavaria starts its summer last of all the Länder in 2027, and its autumn holiday falls in the first week of November. Lessons with us carry on through the holidays unless a family pauses them.',
      body: [
        { kind: 'table', numCols: [], caption: 'Bavarian school holidays, 2026/27 (first and last day)', head: ['Holiday', 'Dates'], rows: [
          ['Autumn', '2 to 6 November 2026'],
          ['Christmas', '24 December 2026 to 8 January 2027'],
          ['Winter', '8 to 12 February 2027'],
          ['Easter', '22 March to 2 April 2027'],
          ['Whitsun', '18 to 28 May 2027'],
          ['Summer', '2 August to 13 September 2027']
        ] },
        { kind: 'source', html: 'Taken from the KMK\'s holiday overview for 2026/2027 (dated 9 October 2025) and from its long-range table of summer holidays for 2025 to 2030. The KMK agrees summer dates years in advance; the Land fixes the rest.' },
        { kind: 'p', mt: true, html: 'Two dates are worth circling. The Easter holiday ends on 2 April 2027, less than three weeks before the first written Abitur day on 21 April 2027, so Oberstufe pupils often want extra paper practice in March. And the summer break that runs until 13 September 2027 is long enough for a beginner to finish a whole short course, such as Scratch, before grade 5 starts.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Munich data project',
      h2: 'Which transit stop is furthest north? A project that begins with a wrong answer',
      lede: 'The Landeshauptstadt München publishes the full stop list of the regional transport association MVV as open data. With it our learners practise the check that saves every mapping project: make sure you know which column is which before you calculate anything.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file MVV_Haltestellen_Report_s26.csv lists 11,061 stops with a number, a name, a place (Ort), a global ID and two coordinate columns labelled WGS84 X and WGS84 Y. It is published under CC BY 4.0, which permits reuse with credit to the Münchner Verkehrs- und Tarifverbund GmbH (MVV). We downloaded it on 3 November 2026.',
            'In maths class, x runs left to right and y runs bottom to top. On a map that would make X the east-west position (longitude) and Y the north-south position (latitude). That is the assumption most beginners make, and it is the one Version 1 makes.'
          ],
          rightH3: 'The question',
          right: [
            'Which stop in the file is furthest north? It sounds like one line of code: take the largest y. A pupil who writes that line will get an answer, print it proudly, and be wrong.',
            'The point of the project is not the stop. It is the habit of checking a result against something you already know before you believe it.'
          ] },
        { kind: 'code', label: 'Version 1: trust the column names', lang: 'Python', code: V1, note: 'It prints: <code>Stops with coordinates: 10173 without: 888</code> and <code>Northernmost stop? Hauptbahnhof Passau 13.4507801</code>.' },
        { kind: 'p', mt: true, html: 'Passau sits in the far east of Bavaria, on the Austrian border, so "northernmost" is already suspicious. The number gives it away: 13.45 is a perfectly good longitude for Passau and an impossible latitude for anywhere in Bavaria, which lies between roughly 47 and 50.5 degrees north. Version 2 checks one stop everyone knows, Marienplatz in the centre of Munich, at about 48.14 degrees north and 11.58 degrees east.' },
        { kind: 'code', label: 'Version 2: test a point you know', lang: 'Python', code: V2, note: 'It prints: <code>Marienplatz X, Y: 48.1364359 11.577658</code>, <code>Northernmost: Nürnberg Hbf Nürnberg 49.445615</code> and <code>Southernmost: Bahnhof Seefeld in Tirol 47.3284912</code>.' },
        { kind: 'p', mt: true, html: 'In this file, X holds the latitude and Y the longitude: the labels are the other way round from school maths. With that fixed, the northernmost stop is Nürnberg Hbf and the southernmost is Seefeld in Tirol, across the border in Austria, both reached by regional trains in the association\'s list. Version 1 also counted 888 stops with no coordinates at all, which a careful report mentions instead of hiding.' },
        { kind: 'p', html: 'Version 3 asks a second question with a second trap: which five stops are closest to Marienplatz? Measuring straight in degrees treats a step east as long as a step north. At Munich\'s latitude it is not: a degree of longitude covers only about two thirds of the distance of a degree of latitude, because the lines of longitude meet at the poles. Multiplying by the cosine of the latitude fixes it.' },
        { kind: 'code', label: 'Version 3: degrees are not kilometres', lang: 'Python', code: V3, note: 'It prints: <code>By degrees: [\'Marienplatz (Hl.-Geist-Kirche)\', \'Tal\', \'Marienplatz (St.-Peter)\', \'Viktualienmarkt\', \'Nationaltheater\']</code>, <code>By km: [\'Marienplatz (Hl.-Geist-Kirche)\', \'Tal\', \'Marienplatz (St.-Peter)\', \'Viktualienmarkt\', \'Rindermarkt\']</code> and <code>Within 1 km: 34</code>.' },
        { kind: 'source', html: 'Data: Haltestellenliste MVV, published by the Landeshauptstadt München, licence CC BY 4.0, credit Münchner Verkehrs- und Tarifverbund GmbH (MVV), downloaded 3 November 2026. All counts and rankings are our own calculations. The 111.2 km per degree is the usual round figure for one degree of latitude; good enough for ranking stops in a city, not for surveying.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 8 to 10, no screen.</strong> Draw a grid on squared paper, mark your home and school, and write each as (across, up). Then swap the numbers by mistake and see where you land.',
          '<strong>Ages 10 to 12, Scratch.</strong> Move a sprite to x and y values you type in, then swap them and watch it jump. Which way is north on the stage?',
          '<strong>Ages 13 to 16, Python.</strong> Run Version 1, explain in one sentence why its answer cannot be right, then write Version 2 before you read ours.',
          '<strong>Going further.</strong> Version 3 changes only the fifth place. Find the stop where the two methods disagree most, and explain the disagreement with a sketch.'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Contests',
      h2: 'Which computing contests can a pupil in Bavaria enter this year?',
      lede: 'The national ones, mostly through school.',
      body: [
        { kind: 'p', html: 'The Informatik-Biber, run by Bundesweite Informatikwettbewerbe for grades 3 to 13, takes place from 9 to 20 November 2026; Bavarian pupils return from their autumn break just in time, and the school registers them. The 45th Bundeswettbewerb Informatik has its first round open from 1 September to 23 November 2026 and is open to young people up to 21. We describe what these contests test and train with original problems we write ourselves; we never reproduce an organiser\'s tasks or solutions and are not connected to BWINF.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time would classes be in Bavaria?',
      lede: 'Mostly after school on weekdays, or on a weekend morning. When you book, you pick a slot in your own time zone.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Bavarian lesson times and the matching hour in India', head: ['Bavarian time', 'India, before 28 March 2027', 'India, from 28 March 2027'], rows: [
          ['14:45', '19:15', '18:15'],
          ['18:00', '22:30', '21:30'],
          ['Sunday 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz Germany runs on UTC+1 in winter and UTC+2 in summer; the change back happened on 25 October 2026 and the next change forward is on 28 March 2027. India keeps UTC+5:30 throughout, which puts it four and a half hours ahead this winter and three and a half from the end of March. These are sample times, not fixed batches.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a Bavarian learner can do at each stage',
    lede: 'A scale we use ourselves to place learners and to describe progress to parents; it sits beside school marks, not instead of them.',
    table: { caption: 'Programming milestones from grade 5 to the Qualifikationsphase (ours)', head: ['Stage', 'Typical grade', 'The learner can'], rows: [
      ['1. Instructions', '5', 'Give a sprite exact step-by-step instructions and fix the order when it goes wrong'],
      ['2. Coordinates and loops', '6 to 7', 'Move objects on a grid with loops and explain which axis is which'],
      ['3. Real files', '8 to 9', 'Read a CSV file in Python, convert German decimal commas and check a known row'],
      ['4. Objects', '10 to 11', 'Model a problem with classes and methods, as Oberstufe Informatik expects'],
      ['5. Exam conditions', '12 to 13', 'Write and trace code on paper within a time limit, without an editor']
    ] },
    left: { h3: 'For parents', ps: [
      'The Munich project belongs to stage 3. Its real lesson is checking: a pupil who tests a known point before trusting a result will do the same with every number they meet.',
      'You hear from us about what your child built and can explain, not about minutes online.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you calculate, check one row you already understand. If it looks wrong, the labels might be.',
      'A degree is not a distance. Convert to kilometres first.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners in Bavaria',
    lede: 'Every course below is taught live in English by a mentor who stays with the learner, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 7 to 13', courses: [
        { code: 'COB / KID / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'A long block-coding course from games to first apps.' },
        { code: 'COB / KID / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Programming inside a world children already know.' },
        { code: 'COB / KID / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Coordinates, patterns and number puzzles in Python.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'COB / TEEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Python, tables and charts with real data sets.' },
        { code: 'COB / TEEN / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and DSA', blurb: 'The algorithm thinking contests and exams reward.' },
        { code: 'COB / TEEN / 03', slug: 'mysql-mastery-for-teens', title: 'SQL and databases', blurb: 'Queries and table design, an Oberstufe topic.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'COB / ADULT / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python and AI automation', blurb: 'Scripts that save hours at work.' },
        { code: 'COB / ADULT / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java for adults', blurb: 'A full Java path from first class to projects.' },
        { code: 'COB / ADULT / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full-stack web development', blurb: 'Front end, back end and deployment.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How our live classes work for a Bavarian family',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After lessons end, from mid-afternoon into the evening.' },
      { time: 'Weekends', l: 'Saturday or Sunday mornings, a calm start.' },
      { time: 'Private', l: 'One to one at a time you arrange, shifted around exams.' }
    ],
    cells: [
      { h3: 'A steady mentor', p: 'The same mentor every week, who remembers last week\'s mistake.' },
      { h3: 'Live code', p: 'The learner types; the mentor watches, asks and explains.' },
      { h3: 'Paper drills', p: 'Timed handwritten tasks for the Bavarian written exam.' },
      { h3: 'School words', p: 'German Informatik terms paired with English ones.' },
      { h3: 'Short reports', p: 'A few lines for parents on progress and next steps.' },
      { h3: 'Batch or solo', p: 'A group of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Some of the projects our learners have made are below; there are many more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What families and learners wrote on Google, word for word.',

  fees: {
    h2: 'Fees for Bavarian families',
    lede: 'Eight live lessons a month, paid monthly. The euro amounts you see are converted at the European Central Bank reference rate, but the charge itself is made in US dollars, so your bank converts it and the amount on the statement may differ by a little.',
    free: ['A free first lesson', 'One short task set for the learner\'s grade', 'No card details'],
    group: ['A batch of fifteen to twenty at a similar level', 'The same mentor each week', 'Two lessons a week', 'Monthly, stop whenever you like'],
    one: ['One learner, one mentor', 'Topics chosen around school and exams', 'Times you agree together']
  },

  faq: {
    eyebrow: 'Bavarian families ask',
    h2: 'Coding classes in Bavaria: questions and answers',
    items: [
      { q: 'Are the classes in German?', a: 'No. We only teach in English, live, with mentors based in India who adapt to each learner\'s pace and accent. When a school term in German comes up, the mentor gives the English word next to it.' },
      { q: 'Is Informatik compulsory in Bavaria?', a: 'It depends on the school type. The Informatik-Monitor 2026/27 records compulsory Informatik one lesson a week in grades 5 to 10 at the Mittelschule, the compulsory subject Informationstechnologie at the Realschule, and at the Gymnasium an Informatik focus in grades 6 and 7 plus two compulsory hours in grade 11.' },
      { q: 'My child is at a Gymnasium but not in the NTG branch. Will they learn programming?', a: 'Some. They get one weekly lesson with an Informatik focus in grades 6 and 7 and a two-hour late-start Informatik course in grade 11, according to the Informatik-Monitor. Compulsory Informatik in grades 9 and 10 is only at the NTG branch.' },
      { q: 'When is the written Informatik Abitur in 2027?', a: 'The ministry\'s notice in the Bayerisches Ministerialblatt sets 21 April 2027 for raised-level subjects not listed separately and 7 May 2027 for basic-level ones. Informatik is not listed separately, so by that rule its written exam falls on those days. Your school confirms the timetable.' },
      { q: 'Is the Informatik Abitur done on a computer?', a: 'No. The Informatik-Monitor says the written tasks are set centrally and large parts are programming on paper, with no practical work at a computer.' },
      { q: 'Can your lessons replace the Abitur course at school?', a: 'No, and they are not meant to. Our mentors add programming practice and handwritten tasks in the exam style next to the school course. Only the school\'s own course and exams count towards the Abitur, and we never give school grades.' },
      { q: 'When are lessons in Bavarian time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A lot of Bavarian pupils pick a slot between mid-afternoon and early evening.' },
      { q: 'Do lessons stop during the Bavarian holidays?', a: 'Not unless you want them to. Many families keep going through the autumn break of 2 to 6 November 2026 and pause for part of the summer, which runs from 2 August to 13 September 2027.' },
      { q: 'How is the fee charged?', a: 'The page shows a monthly fee in euro, based on the European Central Bank reference rate. Your card is charged in US dollars and your bank converts it, so small differences on the statement are normal. The first lesson is free.' },
      { q: 'Are you part of a Bavarian school or the ministry?', a: 'No. We are an independent online school and have no connection with the Bavarian Staatsministerium, the KMK, BWINF, the MVV or any school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More reading for families in Bavaria.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The full list of our Germany pages.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik in the sixteen Länder', p: 'Bavaria next to the other Länder.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'The Oberstufe subject in plain English.' },
      { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik', p: 'How the national contest works.' },
      { href: '/ioi-2027-potsdam-guide', label: 'IOI 2027 in Potsdam', p: 'The olympiad Germany hosts next year.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson from start to finish.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'The free lesson is one short task at the right level for the learner\'s grade. From it the mentor can tell how the learner approaches a problem and how comfortably they follow English, and then suggests where to start.',
    readFirst: 'If you want to know more first, see <a class="ag-inline-link" href="/how-we-teach">our teaching approach</a> or browse the <a class="ag-inline-link" href="/courses">full course catalogue</a>.',
    note: 'All lessons are live online, taught in English by mentors in India. WhatsApp is the quickest way to reach us.',
    formNote: 'Free, without a card and without obligation.'
  },

  footer: {
    cols: [
      { h4: 'Informatik', links: [
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/abitur-computer-science-in-english', label: 'Abitur computer science' },
        { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik' },
        { href: '/ioi-2027-potsdam-guide', label: 'IOI 2027 guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/german-school-system-maths-and-computing-explained', label: 'German school system' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Check which column is north'
  },

  personalityCss: `
.ag-root.ag-cob .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-cob .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-cob .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-cob .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-cob .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27, Bayern page; Bayerisches Staatsministerium für Unterricht und Kultus, Gymnasium page and Abiturprüfung 2027 notice (BayMBl. 2025 Nr. 354); KMK FER2026_27, Sommerferienregelung 2025 to 2030 and school-type overview; Destatis GV-ISys 31.12.2024; BWINF Biber and Bundeswettbewerb 2026; read 2 and 3 November 2026. Data: Haltestellenliste MVV, Landeshauptstadt München, CC BY 4.0.',
    localProject: 'Which column is north: an original Python project on the MVV stop list. Version 1 trusts the labels and names Passau (13.4507801) as northernmost; Version 2 tests Marienplatz (48.1364359, 11.577658), finds X holds the latitude, and gets Nürnberg Hbf (49.445615) and Seefeld in Tirol (47.3284912); Version 3 shows that ranking by raw degrees puts Nationaltheater fifth nearest to Marienplatz while kilometres put Rindermarkt fifth; 34 stops within 1 km; 888 stops without coordinates. Lesson family: check the axes and units before you compute.',
    requiredMentions: ['MVV_Haltestellen_Report_s26.csv', 'Northernmost stop? Hauptbahnhof Passau 13.4507801', 'Marienplatz X, Y: 48.1364359 11.577658', 'Southernmost: Bahnhof Seefeld in Tirol 47.3284912', 'Within 1 km: 34', 'BayMBl. 2025 Nr. 354', '2 August to 13 September 2027', 'Check which column is north'],
    sources: [
      { claim: 'Informatik by Bavarian school type, grade 11, Qualifikationsphase, Abitur format, key figures.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bayern' },
      { claim: 'Abitur: three written, two oral; G9 grades 5 to 13 in 2025/26.', url: 'https://www.km.bayern.de/lernen/schularten/gymnasium' },
      { claim: 'Abitur 2027 dates.', url: 'https://www.verkuendung-bayern.de/files/baymbl/2025/354/baymbl-2025-354.pdf' },
      { claim: 'Holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Population of Bavaria and Munich, 31.12.2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/02-bundeslaender.xlsx?__blob=publicationFile' },
      { claim: 'MVV stop list, CC BY 4.0.', url: 'https://ckan.govdata.de/dataset/haltestellenliste-mvv' }
    ],
    rejectedClaims: [
      'A specific 2027 Informatik exam date stated by the ministry: the notice groups subjects, so the page gives our reading and says so.',
      'Lake-level and municipal statistics from gkd.bayern.de and statistikdaten.bayern.de: the hosts refused the request, not retried.',
      'Naming Munich schools or international schools as sources of students: refused.',
      'German-language teaching: we teach in English only.',
      'Any affiliation with the Bavarian ministry, MVV, BWINF or a school: none.'
    ]
  }
};
