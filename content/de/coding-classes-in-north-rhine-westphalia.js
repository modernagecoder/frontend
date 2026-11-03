'use strict';
// Coding classes in North Rhine-Westphalia (ag- Land page, Germany cluster P4 row DE092, alloc code cnr, accent #2B606D).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent.
// Spine: NRW puts compulsory Informatik at the start of secondary school (grades 5 and 6, all school types), then turns
// it into an elective; its central Informatik Abitur hands each school a set of four tasks from which the teacher picks.
// Data project: the Schulministerium's own Oberstufe course-offer file, which hides its header on line 2; once read
// properly it shows how many NRW Oberstufen offer Informatik and an Informatik Leistungskurs.
// Sources (read raw; copies under ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-in-north-rhine-westphalia/):
//  - GI Informatik-Monitor 2026/27, Nordrhein-Westfalen page (infmon-nordrhein-westfalen/c73c5f12.txt; FACTS 62, 80-82):
//    "An allen allgemeinbildenden Schularten wird das Pflichtfach Informatik in den Jahrgangsstufen 5 und 6 unterrichtet.";
//    Hauptschule Wahlpflicht 7 to 10 "im Gesamtumfang von bis zu acht Wochenstunden"; Realschule "im Gesamtumfang von 14
//    Wochenstunden", "In der Regel findet dieses durchgängig dreistündig statt."; Gesamt- und Sekundarschulen "im
//    Gesamtumfang von zwölf Wochenstunden"; "An Gymnasien mit neunjährigem Bildungsgang wird Informatik im Rahmen des
//    Wahlpflichtunterrichts in den Jahrgangsstufen 9 und 10 im Gesamtumfang von sechs Wochenstunden eigenständig oder als
//    Kombinationsfach verbindlich angeboten."; Einführungsphase "dreistündiger Grundkurs"; Q-phase GK three hours, LK five;
//    "In einem Leistungskursfach Informatik wird grundsätzlich schriftlich geprüft. In einem Grundkursfach Informatik kann
//    entweder eine schriftliche oder eine mündliche Prüfung erfolgen."; "Die Schulen erhalten jeweils einen Aufgabensatz für
//    den Grundkurs und einen für den Leistungskurs. Beide Aufgabensätze enthalten vier Aufgaben. Die Fachlehrkraft wählt ...
//    im Grundkurs zwei Aufgaben und im Leistungskurs drei Aufgaben aus. Eine Aufgabenauswahl durch die Schülerinnen und
//    Schüler ist nicht vorgesehen."; "Der Einsatz eines Computers ist ... nicht vorgesehen."; aids "Wörterbuch zur deutschen
//    Rechtschreibung, wissenschaftlicher Taschenrechner oder CAS/MMS"; project "Informatik an Grundschulen (IaG)" for grades
//    3 and 4; five Sek I school types; Gesamtschule Oberstufe 11 to 13. Kennzahlen: Sek II with Informatik 14 %,
//    Abiturienten with Informatik exam 4 % (2024/2025); 2,808 Informatik teachers, 3 % of teachers (2025/2026).
//    NOT used: the monitor's description of the Gymnasium Oberstufe as G8, because NRW has returned to nine years and the
//    research notes flag it as unchecked against the ministry.
//  - MSB NRW, standardsicherung, Zentralabitur 2027 Termine (nrw-abi2027/be94a2c3.txt; FACTS 42, 43, 48): "Letzter
//    Unterrichtstag ... Qualifikationsphase 2 | Freitag, 19. März 2027"; "Prüfungsvorbereitung | ab Montag, 5. April 2027 bis
//    Freitag, 9. April 2027"; written main dates "ab Dienstag, 13. April 2027 bis Mittwoch, 5. Mai 2027"; resits "ab Montag,
//    10. Mai 2027 bis Montag, 24. Mai 2027"; "Letzter Tag der Zeugnisausgabe | Samstag, 3. Juli 2027"; "Die Prüfungen
//    beginnen jeweils um 9:00 Uhr." Anlage A (FACTS 44-47): Deutsch Tue 27 April, Englisch Fri 30 April, Mathematik Wed
//    5 May, Physik Tue 20 April, Chemie Wed 21 April 2027. The Informatik line of Anlage A is garbled by the PDF layout,
//    so its date is NOT stated on the page.
//  - MSB NRW, Zentrale Prüfungen 10 (FACTS 64, 65): ZP10 in German, maths and English; the 2027 decree is published.
//  - KMK FER2026_27.pdf (FACTS 275): "Nordrhein-Westfalen (3) 17.10. - 31.10. 23.12. - 06.01. -- 22.03. - 03.04. 18.05.
//    19.07. - 31.08."
//  - KMK Schema (FACTS 20): Sekundarschule named for Nordrhein-Westfalen.
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Nordrhein-Westfalen 18,034,454; Düsseldorf 618,685; Köln 1,024,621.
//  - Data: Ministerium für Schule und Bildung NRW, "Kursangebot in der gymnasialen Oberstufe (Gymnasien/Gesamtschulen)
//    in NRW", kurse.csv (650,459 bytes, sha256 6af9779b...7f367065) and key_fach.csv (sha256 b0149e1a...67f065), Open.NRW /
//    GovData, licence Datenlizenz Deutschland Namensnennung 2.0. Notes: courses "gemäß den Amtlichen Schuldaten"; "Durch
//    Kooperationen kann die Schule evtl. weitere Fächer und Kursarten anbieten, die hier nicht aufgelistet sind."; "Die Daten
//    basieren auf der Erhebung der Amtlichen Schuldaten des Vorjahres. Stichtag der Erhebung ist der 15. Oktober". key_fach:
//    "IF";"Informatik". Downloaded 3 Nov 2026.
// Our own calculations (scratchpad de/w/L1/nrw_v1.py, nrw_23.py, python3 -I, run in the data folder):
//  v1 prints "Columns Python found: ['sep=', '', None]" then "KeyError: 'Fachschluessel'".
//  v2 prints "Line 1 of the file: sep=;", "Schools with an Oberstufe in the file: 956", "Schools offering Informatik: 654",
//     "...with a Leistungskurs in Q1: 105".
//  v3 prints "M 956 schools, 892 with LK in Q1, 93 % of all", "PH 834 schools, 241 with LK in Q1, 25 % of all",
//     "IF 654 schools, 105 with LK in Q1, 11 % of all".
// Lesson family: look at the first lines of a file before you parse it; the header is not always on line 1.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("kurse.csv", encoding="utf-8") as src:',
  '    rows = list(csv.DictReader(src, delimiter=";"))',
  '',
  'print("Columns Python found:", list(rows[0].keys()))',
  'informatik = [r for r in rows if r["Fachschluessel"] == "IF"]'
].join('\n');

const V2 = [
  'import csv',
  '',
  'with open("kurse.csv", encoding="utf-8") as src:',
  '    print("Line 1 of the file:", src.readline().strip())',
  '    rows = list(csv.DictReader(src, delimiter=";"))',
  '',
  'schools = {r["Schulnummer"] for r in rows}',
  'informatik = [r for r in rows if r["Fachschluessel"] == "IF"]',
  'print("Schools with an Oberstufe in the file:", len(schools))',
  'print("Schools offering Informatik:", len({r["Schulnummer"] for r in informatik}))',
  'print("...with a Leistungskurs in Q1:", sum(r["LKQ1"] == "1" for r in informatik))'
].join('\n');

const V3 = [
  'for key in ["M", "PH", "IF"]:',
  '    offers = [r for r in rows if r["Fachschluessel"] == key]',
  '    lk = sum(r["LKQ1"] == "1" for r in offers)',
  '    print(key, len(offers), "schools,", lk, "with LK in Q1,", round(100 * lk / len(schools)), "% of all")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'North Rhine-Westphalia' },
  slug: 'coding-classes-in-north-rhine-westphalia',
  code: 'cnr',
  accent: '#2B606D',
  accentRationale: 'North Rhine-Westphalia: a slate-and-river teal #2B606D, for the Rhine at Köln and Düsseldorf and the dark steel of the Ruhr\'s old pithead frames; contrast 5.69 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes in North Rhine-Westphalia',
  title: 'Coding Classes in North Rhine-Westphalia: Live Online, in English',
  description: 'Coding classes in North Rhine-Westphalia, live online in English: Informatik in grades 5 and 6, the central Abitur 2027 dates, holidays and a school data project.',
  ogDescription: 'Live online coding in English for pupils in NRW: compulsory Informatik in grades 5 and 6, electives after that, the central Informatik Abitur and its four-task sets, the 2027 dates and a project on the Land\'s own Oberstufe course data.',
  twitterDescription: 'Coding in English for NRW: Informatik in grades 5 and 6, Abitur 2027 dates and an Oberstufe course data project.',
  pageName: 'Coding Classes in North Rhine-Westphalia',
  webPageDescription: 'A guide for families in Nordrhein-Westfalen to coding alongside school, built from the GI Informatik-Monitor 2026/27, the Schulministerium\'s Zentralabitur 2027 dates, the KMK holiday table and Destatis, with an original project on the Land\'s Oberstufe course-offer data.',
  courseDescription: 'Live online coding and Informatik classes in English for pupils in North Rhine-Westphalia aged about 10 to 19, from the grade 5 and 6 subject to the Leistungskurs, in a class of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'North Rhine-Westphalia',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#sek1', label: 'School' },
    { href: '#abitur', label: 'Abitur' },
    { href: '#project', label: 'Course data' },
    { href: '#ferien', label: 'Holidays' }
  ],
  eyebrow: 'Nordrhein-Westfalen &middot; Coding and Informatik &middot; Ages 10 to 19',
  h1: 'Coding classes in North Rhine-Westphalia',
  lede: 'NRW starts early. Every pupil in grades 5 and 6, at every school type, has Informatik as a compulsory subject. Then the road divides: from grade 7 Informatik becomes an elective, and whether a pupil keeps it depends on the school and on the choices made at 12 or 13. This page sets out those choices, the central Informatik Abitur and its 2027 dates, the holiday calendar, and a Python exercise built on official NRW data showing which Oberstufen offer Informatik at all.',
  secondaryCta: { href: '#project', label: 'See the course data project' },
  wa: 'Hello Modern Age Coders, we live in North Rhine-Westphalia and would like coding classes in English. Could we book a free first class?',
  heroNote: 'Live online classes since 2020 &middot; 10,000+ students worldwide &middot; taught in English by one regular mentor',
  spec: [
    ['Ages', 'About 10 to 19'],
    ['Core course', 'Informatik Companion, Klasse 5 to 10'],
    ['Class size', '15 to 20 pupils, or one to one'],
    ['NRW times', 'After school and Saturdays, flexible'],
    ['Mentors', 'In India, teaching in English'],
    ['Trial lesson', 'Free, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding to pupils across North Rhine-Westphalia in live online classes in English for pupils between roughly 10 and 19, either in classes of 15 to 20 or privately, and each learner stays with one mentor who works at their speed and tunes in to their accent. Our Informatik Companion course builds on NRW\'s compulsory Informatik in grades 5 and 6 and keeps it going when school makes it optional.',

  picks: {
    eyebrow: 'Starting points in NRW',
    h2: 'Three courses for pupils in North Rhine-Westphalia',
    lede: 'One that carries on from grades 5 and 6, one for the Grundkurs or Leistungskurs, and one for informatics contests.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'CNR / 01', title: 'Informatik after grade 6', note: 'Grades 5 to 10. Continues where the compulsory subject stops: Python, algorithms, data and networks, two live lessons a week.' },
      { course: 'informatik-abitur-course-java-python', code: 'CNR / 02', title: 'Oberstufe Informatik', note: 'For the Einführungsphase and the Qualifikationsphase. Java and Python, data structures, databases and automata, practised for a paper exam.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'CNR / 03', title: 'Informatics competitions', note: 'Ages 9 to 19. Our own Biber-style puzzles, then Bundeswettbewerb Informatik style algorithm problems.' }
    ]
  },

  sections: [
    {
      id: 'sek1',
      eyebrow: 'Grades 5 to 10',
      h2: 'Is Informatik compulsory in NRW schools?',
      lede: 'In grades 5 and 6, yes, at every general school type. After that it is an elective. Our summary follows the GI\'s Informatik-Monitor for 2026/27, a Land-by-Land survey of the rules; we have no tie to its authors or to NRW\'s Ministerium für Schule und Bildung.',
      body: [
        { kind: 'p', html: 'After four years of Grundschule, an NRW pupil goes to one of five school types: Hauptschule, Realschule, Sekundarschule, Gesamtschule or Gymnasium. The KMK names the Sekundarschule as NRW\'s school combining the tracks. All five teach Informatik as a compulsory subject in grades 5 and 6. From grade 7, each school type has its own elective route.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik as an elective after grade 6 in NRW', head: ['School type', 'Grades', 'Wahlpflicht Informatik'], rows: [
          ['Hauptschule', '7 to 10', 'Up to eight weekly hours in total'],
          ['Realschule', '7 to 10', 'Within a 14-hour elective area, usually three hours a week throughout'],
          ['Gesamtschule and Sekundarschule', '7 to 10', 'Within a 12-hour elective area, usually three hours a week throughout'],
          ['Gymnasium (nine-year route)', '9 and 10', 'Offered as a required option within six elective hours, on its own or as a combined subject']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Nordrhein-Westfalen page, read 2 November 2026. "Elective" means the pupil chooses it from what the school offers.' },
        { kind: 'two', mt: true,
          leftH3: 'A start in primary school',
          left: [
            'The monitor also records a project, Informatik an Grundschulen (IaG), with pupils in grades 3 and 4, and notes that the revised Grundschule curricula in maths and Sachunterricht now include Informatik ideas, especially in grades 3 and 4.',
            'So many NRW children meet algorithms and codes before secondary school, and then get two years of a real subject.'
          ],
          rightH3: 'Then a choice at 12',
          right: [
            'The hard moment is the end of grade 6. A pupil who does not choose the Informatik elective, or whose Gymnasium only reaches it in grade 9, can spend two or three years without any programming in school.',
            'Our Companion course is built for that stretch: it keeps the grade 5 and 6 ideas alive and adds typed Python, data and simple algorithms, so a later elective or Oberstufe course does not start from zero.'
          ] },
        { kind: 'p', mt: true, html: 'NRW is big, and so are its numbers. On its NRW page the monitor puts the share of Sekundarstufe II pupils with Informatik at about 14 percent for 2024/25, about 4 percent of Abitur candidates with it as an exam subject, and 2,808 qualified Informatik teachers in 2025/26, around 3 percent of all teachers.' }
      ]
    },
    {
      id: 'abitur',
      tint: 'tint',
      eyebrow: 'Oberstufe and Zentralabitur',
      h2: 'How is the Informatik Abitur set in NRW, and when is the Abitur in 2027?',
      lede: 'Centrally, with a twist: the school receives four tasks and the teacher, not the pupil, chooses which ones are written.',
      body: [
        { kind: 'two',
          leftH3: 'Courses and exams',
          left: [
            'In the Einführungsphase, Informatik can be a three-hour Grundkurs. In the Qualifikationsphase it can be a Grundkurs of three hours or a Leistungskurs of five.',
            'Informatik as a Leistungskurs always ends in a written exam; as a Grundkurs it may be written or oral. It cannot stand in for a natural science when pupils fulfil their course obligations.'
          ],
          rightH3: 'Four tasks, chosen by the teacher',
          right: [
            'The monitor explains that each school receives one task set for the Grundkurs and one for the Leistungskurs, each with four tasks. The teacher picks two of them for the Grundkurs and three for the Leistungskurs; pupils do not choose.',
            'No computer is used. The permitted aids are a German spelling dictionary and a scientific calculator or a CAS or modular maths system.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Zentralabitur 2027 in NRW, selected dates', head: ['Date', 'What happens'], rows: [
          ['Friday 19 March 2027', 'Last day of lessons for Qualifikationsphase 2'],
          ['5 to 9 April 2027', 'Exam preparation week'],
          ['13 April to 5 May 2027', 'Written exams, main dates, each starting at 9:00'],
          ['Tuesday 20 April 2027', 'Physics'],
          ['Tuesday 27 April 2027', 'German'],
          ['Friday 30 April 2027', 'English'],
          ['Wednesday 5 May 2027', 'Mathematics'],
          ['10 to 24 May 2027', 'Resit dates for written exams'],
          ['Saturday 3 July 2027', 'Last day for Abitur certificates']
        ] },
        { kind: 'source', html: 'Source: Ministerium für Schule und Bildung NRW, Qualitäts- und UnterstützungsAgentur, Zentralabitur 2027 Termine and Anlage A, read 2 November 2026. Anlage A also lists the day for Informatik; the school confirms it to its pupils. At the end of grade 10, NRW also holds central exams (ZP10) in German, maths and English.' },
        { kind: 'p', mt: true, html: 'The four-task system shapes good preparation. A pupil cannot avoid a topic by choosing around it, because the teacher does the choosing. So we cover the whole Oberstufe content evenly: object-oriented modelling, lists, trees and graphs, databases and SQL, automata and grammars, all written by hand. School grades and the central exam decide the Abitur; our role is the understanding behind them, and no German qualification is issued by us.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'How do lessons in English work for a pupil in NRW?',
      lede: 'Lessons happen in real time with a mentor, and English is the only teaching language. Families should know that before booking, so it stands here near the top.',
      body: [
        { kind: 'three', cells: [
          { h3: 'International families', p: 'Many families come to Köln, Düsseldorf, Bonn or the Ruhr cities from abroad for work or study. A child who reasons in English can learn Informatik in English while German school continues as normal.' },
          { h3: 'German-school pupils', p: 'At an NRW Gymnasium or Gesamtschule, a pupil who codes with us also practises English for two hours a week without extra effort. Mentors keep sentences short, show the words on screen, and understand terms like Leistungskurs or Wahlpflicht.' },
          { h3: 'Code reads the same', p: 'Python and Java keywords are English words in every country. A loop, a class or a query written with us looks exactly like the one on the NRW exam paper.' }
        ] },
        { kind: 'p', mt: true, html: 'Our mentors work from India and teach over live video. The approach does not change with the city: one mentor who comes to know the pupil, the pupil writing the code, and every step explained in the pupil\'s own words, never copied from a model answer or an AI tool.' }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A Land-wide project',
      h2: 'How many NRW Oberstufen offer Informatik? A data project',
      lede: 'The Schulministerium publishes, as open data, the courses each Gymnasium and Gesamtschule offers in its Oberstufe. Our pupils use it twice: once to answer a real question about their Land, and once to learn the habit that saves hours of confusion, opening a file and reading its first lines before writing any code.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is Kursangebot in der gymnasialen Oberstufe (Gymnasien/Gesamtschulen) in NRW, released with a Datenlizenz Deutschland Namensnennung 2.0 licence and fetched by us on 3 November 2026. It comes in two files: kurse.csv, one row per school and subject, and key_fach.csv, which explains the subject codes. The code for Informatik is IF.',
            'Each row marks with a 1 or 0 whether the school offers a Grundkurs in the Einführungsphase and Grundkurs or Leistungskurs in Q1 and Q2. The ministry notes that it is based on the official school data survey, and that schools may offer more through cooperation with other schools.'
          ],
          rightH3: 'The question',
          right: [
            'Out of the Oberstufen in the file, how many offer Informatik, and how many an Informatik Leistungskurs? It looks like five lines of Python.',
            'Version 1 is those five lines. It stops at once with an error about a column that is plainly in the file. The reason is on line 1.'
          ] },
        { kind: 'code', label: 'Version 1: read and filter', lang: 'Python', code: V1, note: 'It prints <code>Columns Python found: [\'sep=\', \'\', None]</code> and then stops with <code>KeyError: \'Fachschluessel\'</code>.' },
        { kind: 'p', mt: true, html: 'Python took the first line of the file as the header, and the first line is not the header. It is the text <code>sep=;</code>, an instruction some spreadsheet programs read to learn that the file uses semicolons. The real header is on line 2. Version 2 reads line 1 on its own, prints it so we can see it, and only then hands the rest of the file to the CSV reader.' },
        { kind: 'code', label: 'Version 2: read line 1 first', lang: 'Python', code: V2, note: 'It prints <code>Line 1 of the file: sep=;</code>, <code>Schools with an Oberstufe in the file: 956</code>, <code>Schools offering Informatik: 654</code> and <code>...with a Leistungskurs in Q1: 105</code>.' },
        { kind: 'code', label: 'Version 3 (continues Version 2): Informatik next to maths and physics', lang: 'Python', code: V3, note: 'It prints <code>M 956 schools, 892 with LK in Q1, 93 % of all</code>, <code>PH 834 schools, 241 with LK in Q1, 25 % of all</code> and <code>IF 654 schools, 105 with LK in Q1, 11 % of all</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Oberstufe course offers in the NRW file, downloaded 3 November 2026 (our counts)', head: ['Subject (code)', 'Schools offering it', 'Schools with a Leistungskurs in Q1'], rows: [
          ['Mathematics (M)', '956', '892'],
          ['Physics (PH)', '834', '241'],
          ['Informatik (IF)', '654', '105']
        ] },
        { kind: 'source', html: 'Data: Ministerium für Schule und Bildung NRW, Kursangebot in der gymnasialen Oberstufe (Gymnasien/Gesamtschulen) in NRW, Datenlizenz Deutschland Namensnennung 2.0, via Open.NRW, downloaded 3 November 2026. Counts are ours. Courses offered through cooperation between schools may be missing from the file.' },
        { kind: 'p', mt: true, html: 'So in this file about two Oberstufen in three offer some Informatik course, and about one in nine lists an Informatik Leistungskurs in Q1. For a pupil set on a Leistungskurs, the school\'s course list matters as much as the pupil\'s own interest, which is worth knowing before choosing an Oberstufe.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Grades 5 and 6, no computer.</strong> A worksheet has a title line, then a line of column names, then the answers. A classmate starts reading the answers from line 1. What goes wrong?',
          '<strong>Grades 7 and 8, Python.</strong> Run Version 1 and read the error. Before changing anything, open kurse.csv in a text editor and print its first three lines with Python.',
          '<strong>Grades 9 and 10.</strong> Change Version 3 to compare Informatik with chemistry (CH) and biology (BI). Which subject has the largest gap between "offered" and "Leistungskurs"?',
          '<strong>Oberstufe.</strong> key_fach.csv starts with the same line. Write one function that opens either file, skips a sep= line only if it is there, and returns the rows; then join the subject names onto kurse.csv.'
        ] }
      ]
    },
    {
      id: 'ferien',
      tint: 'tint',
      eyebrow: 'School year 2026/27',
      h2: 'When are the NRW school holidays in 2026/27?',
      lede: 'NRW\'s summer holidays in 2027 start on 19 July and run to the end of August. Classes can pause for the holidays or carry on.',
      body: [
        { kind: 'table', numCols: [], caption: 'School holidays in Nordrhein-Westfalen, 2026/27 (first and last day)', head: ['Ferien', 'From', 'To'], rows: [
          ['Herbst', '17 October 2026', '31 October 2026'],
          ['Weihnachten', '23 December 2026', '6 January 2027'],
          ['Ostern', '22 March 2027', '3 April 2027'],
          ['Pfingsten', '18 May 2027', '18 May 2027'],
          ['Sommer', '19 July 2027', '31 August 2027']
        ] },
        { kind: 'source', html: 'Source: KMK holiday overview for the school year 2026/2027, as of 9 October 2025, Nordrhein-Westfalen row. NRW has no winter break in 2026/27. The KMK fixes the summer holidays years ahead; the Land sets the others.' },
        { kind: 'two', mt: true,
          leftH3: 'The largest Land',
          left: [
            'Destatis counts 18,034,454 people in Nordrhein-Westfalen on 31 December 2024, more than in any other Land. Düsseldorf, the capital, has 618,685; Köln, the largest city, 1,024,621.',
            'Other cities above 100,000 include Dortmund, Essen, Duisburg, Bochum, Wuppertal, Bielefeld, Bonn and Münster. Online, they are all the same distance away.'
          ],
          rightH3: 'An Abitur spring in NRW',
          right: [
            'For the Abitur class of 2027, lessons end on 19 March, the Easter holidays run from 22 March to 3 April, the preparation week follows, and the written exams start on 13 April.',
            'We use the Easter holidays for a full timed paper on paper, then the preparation week to close the gaps it shows.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are classes in NRW?',
      lede: 'An NRW afternoon is an Indian evening; a Saturday late morning is an Indian afternoon. The rows show the difference only; you choose your own slot.',
      body: [
        { kind: 'table', numCols: [], caption: 'NRW time and India time', head: ['NRW', 'India in winter (to 28 March 2027)', 'India in summer (from 28 March 2027)'], rows: [
          ['14:45', '19:15', '18:15'],
          ['16:15', '20:45', '19:45'],
          ['Saturday 11:30', '16:00', '15:00']
        ] },
        { kind: 'source', html: 'German time follows the Einheitenzeitgesetz: MEZ at UTC+1 in winter, MESZ at UTC+2 in summer. The switch back happened on 25 October 2026; the next switch forward is on 28 March 2027. India stays at UTC+5:30, so the gap is 4 h 30 in winter and 3 h 30 in summer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From the grade 6 subject to the Leistungskurs',
    lede: 'The five stages we use to place NRW pupils and to report on progress. They are ours, not the Land\'s.',
    table: { caption: 'Informatik stages for NRW pupils (ours)', head: ['Step', 'Usual grade', 'What the pupil manages'], rows: [
      ['1. School basics', '5 to 6', 'Explain and draw an algorithm, encode and decode information'],
      ['2. Typed programs', '6 to 7', 'Write Python with loops, conditions and functions'],
      ['3. Real files', '7 to 9', 'Open a data file, inspect its first lines, then parse and count it'],
      ['4. Structures', '9 to 10', 'Choose between lists and dictionaries and justify it'],
      ['5. Abitur topics', '11 to 13', 'Model with classes, use trees and graphs, write SQL and automata on paper']
    ] },
    left: { h3: 'For parents', ps: [
      'The NRW course-file project sits at stage 3. Looking before parsing sounds small and saves pupils a great deal of frustration.',
      'Reports describe what your child can do now and what they are working on.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Before you parse a file, print its first few lines.',
      'An error about a column that is "obviously there" usually means you are reading the wrong line.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for NRW families',
    lede: 'Live, in English, in a class or one to one, with the same mentor throughout.',
    bands: [
      { num: 'I', h3: 'Before and beside grades 5 and 6', sub: 'Ages 7 to 12', courses: [
        { code: 'CNR / I / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch games, then apps and a look at AI.' },
        { code: 'CNR / I / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Logic and step-by-step reasoning, no screen needed at first.' },
        { code: 'CNR / I / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Blocks to real code inside a familiar world.' }
      ] },
      { num: 'II', h3: 'Grades 7 to 10', sub: 'Ages 12 to 16', courses: [
        { code: 'CNR / II / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Variables in week one, objects and file handling by the end.' },
        { code: 'CNR / II / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Pandas, plots and the habit of checking a source before trusting it.' },
        { code: 'CNR / II / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for Teens', blurb: 'Fundamentals, the STL and first contest problems.' }
      ] },
      { num: 'III', h3: 'Oberstufe', sub: 'Ages 15 to 19', courses: [
        { code: 'CNR / III / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Classes and collections, cleanly written.' },
        { code: 'CNR / III / 02', slug: 'mysql-mastery-for-teens', title: 'SQL for Teens', blurb: 'Relational databases as the Oberstufe teaches them: keys, joins, queries.' },
        { code: 'CNR / III / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik in English', blurb: 'Analysis, geometry and stochastics ahead of NRW\'s maths paper in May 2027.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes in a normal NRW school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'From mid afternoon, after the last school lesson.' },
      { time: 'Saturday', l: 'Late morning, unhurried, good for longer tasks.' },
      { time: '1-on-1', l: 'A slot agreed with the mentor and moved around exams.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'Same mentor, same pupil, week after week.' },
      { h3: 'Clear English', p: 'Spoken at the pupil\'s speed, German terms understood.' },
      { h3: 'Pupil at the keys', p: 'The pupil types and decides; the mentor questions.' },
      { h3: 'NRW-aware', p: 'Paced to NRW\'s electives, holidays and exam dates.' },
      { h3: 'Short reports', p: 'Parents hear what changed and what is next.' },
      { h3: 'Class or solo', p: 'A class of 15 to 20, or one to one.' }
    ]
  },

  projectsH2: 'Projects by students further along',
  projectsLede: 'Some finished work from older students; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Reviews left on Google by parents and students, unchanged.',

  fees: {
    h2: 'Fees for families in North Rhine-Westphalia',
    lede: 'The monthly fee covers eight live classes, and there is no minimum term. On this page the fees appear in euro, derived from the European Central Bank reference rate; your card is charged in US dollars and your bank converts the amount, so the statement may vary slightly.',
    free: ['A free first class', 'A thinking task and a first program', 'No card needed'],
    group: ['A class of 15 to 20 at a similar stage', 'A regular mentor', 'Two classes a week', 'Pay monthly, stop when you like'],
    one: ['Just your child and a mentor', 'Their own speed and topics', 'Times fitted around school']
  },

  faq: {
    eyebrow: 'NRW families ask',
    h2: 'Coding classes in North Rhine-Westphalia: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No, never. Our teaching language is English, in every live lesson. The mentor slows down whenever needed, learns how your child speaks, and is happy to hear a German word like Leistungskurs in the middle of an English sentence.' },
      { q: 'Is Informatik compulsory in NRW?', a: 'In grades 5 and 6. The Gesellschaft für Informatik\'s Informatik-Monitor 2026/27 states that Informatik is a compulsory subject in grades 5 and 6 at all general school types in NRW. After that it is an elective.' },
      { q: 'Can my child keep Informatik after grade 6?', a: 'Usually, through the Wahlpflicht area. Hauptschulen, Realschulen, Gesamtschulen and Sekundarschulen can offer it from grade 7; nine-year Gymnasien offer it within the elective hours of grades 9 and 10. It depends on what the school offers and what your child chooses.' },
      { q: 'How is the NRW Informatik Abitur set?', a: 'Centrally. According to the Informatik-Monitor, each school receives a set of four tasks for the Grundkurs and four for the Leistungskurs; the teacher chooses two or three of them, and pupils do not choose. No computer is used.' },
      { q: 'When are the written Abitur exams in NRW in 2027?', a: 'The Schulministerium lists the written main dates from 13 April to 5 May 2027, each exam starting at 9:00, with the maths paper on Wednesday 5 May 2027. Resits run from 10 to 24 May 2027.' },
      { q: 'Does every Oberstufe offer an Informatik Leistungskurs?', a: 'No. In the ministry\'s Oberstufe course file that we downloaded on 3 November 2026, 654 of 956 schools offer Informatik and 105 list a Leistungskurs in Q1, by our count. Cooperation between schools can add courses not in the file.' },
      { q: 'What time are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Because India runs four and a half hours ahead of NRW in winter, a 16:15 lesson in Düsseldorf is 20:45 for the mentor.' },
      { q: 'Will my child get a certificate from you that counts at school?', a: 'No. Our classes support school work but sit outside the school system: German grades and qualifications come only from the school and from NRW\'s central exams.' },
      { q: 'Where are the mentors based?', a: 'They work from India and meet pupils live on video; the mentor your child starts with is the one they keep.' },
      { q: 'How is payment handled?', a: 'By card, once a month. The euro figures you see use the European Central Bank reference rate, while the charge itself is in US dollars and converted by your bank. Nothing is charged for the free first class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in North Rhine-Westphalia.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All of our pages for Germany.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik in every Land', p: 'NRW alongside the other fifteen.' },
      { href: '/abitur-computer-science-in-english', label: 'Informatik Abitur in English', p: 'The Oberstufe course explained.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The maths exam and how to prepare.' },
      { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik', p: 'Preparing for Germany\'s main informatics contest.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live lesson.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The free class starts with a short reasoning task and ends with a first program. The mentor sees how your child thinks and how they manage in English, and recommends a course and a class.',
    readFirst: 'The page on <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a lesson, and <a class="ag-inline-link" href="/courses">the course list</a> has every syllabus, if you want to look first.',
    note: 'Every lesson is live, online and in English, with a mentor in India. Questions are answered fastest on WhatsApp, in English.',
    formNote: 'Free, without a card or any commitment.'
  },

  footer: {
    cols: [
      { h4: 'Informatik', links: [
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/abitur-computer-science-in-english', label: 'Informatik Abitur' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Read line 1 before you parse'
  },

  personalityCss: `
.ag-root.ag-cnr .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-cnr .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-cnr .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-cnr .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cnr .ag-code-head b { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27, Nordrhein-Westfalen page; Ministerium für Schule und Bildung NRW, Zentralabitur 2027 Termine and Anlage A, ZP10 page; KMK holidays 2026/27 and Schema; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz. Data: MSB NRW, Kursangebot in der gymnasialen Oberstufe, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'NRW Oberstufe course offers: Version 1 fails with KeyError because line 1 of kurse.csv is "sep=;"; Version 2 reads that line first and finds 956 Oberstufen, 654 offering Informatik and 105 with a Leistungskurs in Q1; Version 3 compares maths (892) and physics (241). Lesson family: read the first lines before you parse.',
    requiredMentions: ['kurse.csv', "Columns Python found: ['sep=', '', None]", 'Line 1 of the file: sep=;', 'Schools offering Informatik: 654', 'IF 654 schools, 105 with LK in Q1, 11 % of all', '2,808 qualified Informatik teachers', 'each with four tasks', 'Read line 1 before you parse'],
    sources: [
      { claim: 'NRW Informatik in grades 5 and 6, electives, Oberstufe, central four-task Abitur, aids, figures.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Zentralabitur 2027 dates.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentralabitur-gost/termine/2027' },
      { claim: 'Subject dates 2027 (Anlage A).', url: 'https://www.standardsicherung.schulministerium.nrw.de/system/files/media/document/file/anlage_a_termine_2027_ht.pdf' },
      { claim: 'ZP10 in German, maths and English.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-10' },
      { claim: 'Holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Oberstufe course-offer data and licence.', url: 'https://ckan.govdata.de/dataset/kursangebot-in-der-gymnasialen-oberstufe-gymnasien-gesamtschulen-in-nrw' }
    ],
    rejectedClaims: [
      'G8 for the NRW Gymnasium Oberstufe: the monitor says so but NRW has returned to nine years and this is unchecked, so no Oberstufe grade numbers are given for the Gymnasium.',
      'The Informatik exam date in 2027: the Anlage A line is garbled in our copy, so it is not stated.',
      'Leistungskurs counts for Q2: the Q2 column is far lower than Q1 for every subject, unexplained by the publisher, so only Q1 is used.',
      'Naming individual schools from the course file: not done.',
      'Gender shares from the monitor: left out under the no gender statistics rule.',
      'Any affiliation with the MSB NRW, the GI, the KMK or a school: none.'
    ]
  }
};
