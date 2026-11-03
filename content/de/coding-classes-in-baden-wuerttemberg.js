'use strict';
// Coding classes in Baden-Württemberg (ag- Land page, Germany cluster P4 row DE095, hubGroup land, code cbw, accent #6A3A06).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show euro,
// checkout charges USD.
// Spine: Baden-Württemberg is building a compulsory subject while the plane is in the air. Informatik und Medienbildung
// started in grades 5 and 6 in 2025/26 and grows a year at a time, but its Bildungsplan is only due in August 2027; in the
// Oberstufe about 7 % take Informatik, and the written Leistungsfach exam is on paper without a programming environment.
// Sources (read raw 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Baden-Württemberg page (facts-school/src/infmon-baden-wuerttemberg/0356d1e4.txt):
//    "Mit dem Schuljahr 2025/2026 wird schulartübergreifend in der Sekundarstufe I das Pflichtfach Informatik und
//    Medienbildung eingeführt, wobei die Umsetzung zunächst in den Jahrgangsstufen 5 und 6 erfolgt"; "An der Werkrealschule,
//    Hauptschule, der Realschule und der Gemeinschaftsschule sind für das Pflichtfach insgesamt vier Wochenstunden
//    vorgesehen."; IMP "auslaufende Profilfach ... in den Jahrgangsstufen 8 bis 10 mit einem Umfang von insgesamt acht
//    Wochenstunden ... informatischer Inhalte insgesamt drei Stunden"; Qualifikationsphase "zweistündiges Wahlfach oder als
//    dreistündiges Basisfach ... fünfstündiges Leistungsfach"; "Im Leistungsfach wird eine schriftliche Abiturprüfung abgelegt.
//    Diese wird zentral (landesweit einheitlich) organisiert."; "Eine Programmierumgebung ist als Hilfsmittel nicht erlaubt.";
//    "Als Prüfungsfach ist Informatik keinem Aufgabenfeld zugeordnet"; "Die Anhörung für den neuen Bildungsplan ist im Schuljahr
//    2026/2027 vorgesehen, die Inkraftsetzung für August 2027."; NIT "zum Schuljahr 2027/2028"; Pflichtfach "in den
//    Jahrgangsstufen 5 bis 11"; Aufbaukurs Informatik grade 7 "ab dem Schuljahr 2026/2027 im Zusammenspiel mit der neuen
//    Lesehilfe"; key figures: "Anteil SuS mit Informatik in der Sek II 7 %" (Schuljahr 2024/2025, KMK); "Anzahl bestehende
//    Informatiklehrkräfte 717", "Anteil Informatiklehrkräfte an allen Lehrkräften 2 %", new hires 26 (25 Lehramt, 1 Quer- oder
//    Seiteneinstieg), Schuljahr 2025/2026, Statistisches Landesamt; school structure: Werkrealschule, Hauptschule,
//    Realschule, Gemeinschaftsschule, Gymnasium; Gemeinschaftsschule Oberstufe 11 to 13, Gymnasium "mehrheitlich" G8 (FACTS 61).
//  - Informatik-Monitor national page: BW among four Länder meeting the short-term 4-hour recommendation (FACTS 91); BW among
//    the Länder where "ungefähr jede zwölfte Person das Fach Informatik" takes it in the Oberstufe (FACTS 99).
//  - KMK: Gemeinschaftsschule named for BW among three-track schools (FACTS 20); written Abitur tasks central in almost all
//    Länder (FACTS 13); FER2026_27.pdf row "Baden-Württemberg (4) 26.10. - 30.10. 31.10. 23.12. - 09.01. -- 25.03.
//    30.03. - 03.04. 18.05. - 29.05. 29.07. - 11.09." (raw src/kmk-fer2627/fe303dbf.txt); Sommerferienregelung 2027
//    "29.07. - 11.09." (FACTS 257).
//  - Kultusministerium BW, "Terminplan für die Abiturprüfung 2027 an den Beruflichen Gymnasien" (src-pages/<slug>/raw/
//    terminplan_bs.pdf, .txt): written Haupttermin "Freitag, 16. April 2027" to "Mittwoch, 05. Mai 2027"; "Dienstag,
//    20.04.2027 ... Informatik (AG, BTG, EG, SGG, WG)"; Nachtermin 10 May to 2 June 2027; oral exams "Montag, 28. Juni bis
//    Donnerstag, 08. Juli 2027"; certificates by 8 July 2027. The plan for allgemein bildende Gymnasien was not found raw,
//    so the page names only the berufliche Gymnasien dates and says so.
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Baden-Württemberg 11,245,898; Stuttgart 612,663.
//  - BWINF: Biber 9 to 20 November 2026, grades 3 to 13, free (FACTS 130, 133).
//  - Data: Landeshauptstadt Stuttgart, Statistisches Amt, "Medienbestände und Entleihungen in Stuttgarter Bibliotheken",
//    via GovData https://ckan.govdata.de/dataset/medienbestande-und-ausleihen-in-stuttgarter-bibliotheken, licence CC BY 4.0
//    (dcat-ap.de/def/licenses/cc-by/4.0), file stadtbibliotheken_stuttgart_bis-2024.csv (162,581 bytes, sha256 898c90ae...
//    d9ee09), downloaded 3 November 2026; package JSON saved beside it.
// Our own calculations (scratchpad de/w/L2/bw/v1.py, v2.py, v3.py, python3 -I), exact output:
//    v1: "Branches in 2024: 20" / "Most loans: Vaihingen 274027"
//    v2: "Loans per item, top: West 6.43" / "Loans per item, bottom: Popup Hedelfingen 0.0"
//    v3: "Branches with a 2023 row too: 17" / "Bottom among them: Stammheim 3.38" /
//        "Only in 2024: ['Popup Hedelfingen', 'Popup Obertürkheim', 'Rathauspassage']"
//    Hedelfingen 2024: 4,106 items, 10 loans; Rathauspassage 57 items, 271 loans; West 25,587 items, 164,462 loans.
// Lesson family: a rate beats a raw total, but only across rows that are alike (compare like with like).

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'stock, loans, years = {}, {}, {}',
  'with open("stadtbibliotheken_stuttgart_bis-2024.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        if row["Bibliothek"] != "Stadtteilbibliotheken" or not row["Stichtag"].endswith("12-31"):',
  '            continue',
  '        name = row["Zweigstelle"]',
  '        years.setdefault(name, set()).add(row["Jahr"])',
  '        if row["Jahr"] == "2024":',
  '            target = stock if row["Ausprägung"] == "Medienbestand" else loans',
  '            target[name] = int(row["Wert"])',
  '',
  'busiest = max(loans, key=loans.get)',
  'print("Branches in 2024:", len(loans))',
  'print("Most loans:", busiest, loans[busiest])'
].join('\n');

const V2 = [
  'turnover = {name: loans[name] / stock[name] for name in loans}',
  'top = max(turnover, key=turnover.get)',
  'low = min(turnover, key=turnover.get)',
  'print("Loans per item, top:", top, round(turnover[top], 2))',
  'print("Loans per item, bottom:", low, round(turnover[low], 2))'
].join('\n');

const V3 = [
  'full = [name for name in turnover if "2023" in years[name]]',
  'low = min(full, key=turnover.get)',
  'print("Branches with a 2023 row too:", len(full))',
  'print("Bottom among them:", low, round(turnover[low], 2))',
  'print("Only in 2024:", sorted(set(turnover) - set(full)))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'Baden-Württemberg' },
  slug: 'coding-classes-in-baden-wuerttemberg',
  code: 'cbw',
  accent: '#6A3A06',
  accentRationale: 'Baden-Württemberg Land page: a deep sandstone brown #6A3A06, the red-brown Neckar sandstone of the region\'s old towns; contrast 7.67 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes in Baden-Württemberg',
  title: 'Coding Classes in Baden-Württemberg: Live Online in English',
  description: 'Coding classes in Baden-Württemberg, live online in English: the new compulsory Informatik subject, Abitur Informatik rules, 2027 holidays and a Stuttgart project.',
  ogDescription: 'Live coding and Informatik support in English for pupils in Baden-Württemberg: how Informatik und Medienbildung grows grade by grade, what the written Informatik Abitur allows, the 2026/27 holidays and an original project on Stuttgart\'s library loans.',
  twitterDescription: 'Coding in English for Baden-Württemberg: the new Informatik subject, the Abitur rules and a Stuttgart library data project.',
  pageName: 'Coding Classes in Baden-Württemberg',
  webPageDescription: 'A guide for families in Baden-Württemberg to coding and school Informatik, built from the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, the KMK holiday tables, the Kultusministerium\'s Abitur schedule and Destatis, with an original Python project on Stuttgart city library data.',
  courseDescription: 'Live online coding classes in English for learners in Baden-Württemberg: Informatik support from Klasse 5, Python and Java for the Oberstufe, and competition training, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Baden-Württemberg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'School' },
    { href: '#abitur', label: 'Abitur' },
    { href: '#project', label: 'Project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Baden-Württemberg &middot; Coding and Informatik &middot; Klasse 5 to Abitur',
  h1: 'Coding classes in Baden-Württemberg',
  lede: 'Baden-Württemberg made Informatik und Medienbildung a compulsory subject in 2025/26, then started teaching it before its own Bildungsplan was finished: that plan is due in August 2027. This page sets out what pupils in each grade actually get in 2026/27, what the written Informatik Abitur allows and forbids, the holiday dates for the year, how our live classes in English fit around school, and a Stuttgart data project in which the first answer is right and still misleading.',
  secondaryCta: { href: '#project', label: 'See the Stuttgart project' },
  wa: 'Hello Modern Age Coders, we live in Baden-Württemberg and would like a free first class in coding, taught in English.',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; one regular mentor, every class in English',
  spec: [
    ['Ages', '8 to 19, plus adults'],
    ['Fits with', 'Informatik und Medienbildung, Basisfach, Leistungsfach'],
    ['Languages', 'Scratch, Python, Java'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding to learners in Baden-Württemberg through live online lessons in English, for pupils from about 8 to 19 and for adults, in a group of fifteen to twenty or one to one. Younger pupils start with Scratch and Python alongside the new compulsory subject Informatik und Medienbildung; Oberstufe pupils work on Python or Java for the Basisfach or Leistungsfach. Our Informatik Companion course follows the school stages from Klasse 5 to 10.',

  picks: {
    eyebrow: 'Where to start in Baden-Württemberg',
    h2: 'Three courses that follow the Baden-Württemberg school path',
    lede: 'One course runs beside the new compulsory subject, one prepares for Informatik in the Kursstufe, and one feeds the contests many schools in the Land already enter.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'CBW / 01', title: 'Informatik Companion, Klasse 5 to 10', note: 'Ages about 10 to 16. Algorithms, data, networks and programming from Scratch to Python, in step with the topics Informatik und Medienbildung introduces year by year.' },
      { course: 'informatik-abitur-course-java-python', code: 'CBW / 02', title: 'Informatik for the Oberstufe and Abitur', note: 'Ages about 16 to 19. Object-oriented programming, data structures, automata and databases in Java or Python, with written practice on paper, the way the Leistungsfach exam is set.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'CBW / 03', title: 'German informatics competitions', note: 'Ages about 9 to 19. Computational puzzles for the Biber, then algorithm tasks for the Bundeswettbewerb Informatik and AI projects, using original problems written by us.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Informatik in Baden-Württemberg',
      h2: 'Is Informatik a compulsory subject in Baden-Württemberg?',
      lede: 'Yes, since the 2025/26 school year, but it arrives one year group at a time, and the grades above the wave still learn under the old rules. Every fact below names its source.',
      body: [
        { kind: 'two',
          leftH3: 'A subject that grows upwards',
          left: [
            'The Gesellschaft für Informatik (GI) compiles every Land\'s rules in its Informatik-Monitor 2026/27. For Baden-Württemberg it records that the compulsory subject Informatik und Medienbildung was introduced across all school types of Sekundarstufe I from 2025/26, starting in grades 5 and 6 and then growing year by year. The same page says the subject is eventually planned for grades 5 to 11.',
            'At the Werkrealschule, Hauptschule, Realschule and Gemeinschaftsschule the monitor gives the subject four weekly hours in total across the lower secondary years. The GI\'s national summary therefore counts Baden-Württemberg among four Länder that meet the short-term recommendation of four compulsory hours made by the KMK\'s Standing Scientific Commission.'
          ],
          rightH3: 'The plan comes later',
          right: [
            'One detail matters for parents. The monitor states that no Bildungsplan yet exists for the new subject: the consultation is planned for the 2026/27 school year and the plan is to come into force in August 2027. Until then teachers in grades 5 to 7 can lean on older plans for the former Aufbaukurs Informatik and Basiskurs Medienbildung, with a reading aid (Lesehilfe) from the ministry.',
            'Pupils in grade 7 in 2026/27 therefore still take the Aufbaukurs Informatik, which the monitor says is taught from 2026/27 together with the new reading aid. A new profile subject, Naturwissenschaft, Informatik und Technik (NIT), is due at Gemeinschaftsschulen and Gymnasien from 2027/28, while the older profile subject IMP is being phased out.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik for a pupil in Baden-Württemberg, by stage (school year 2026/27)', head: ['Stage', 'Grades', 'What the rules give'], rows: [
          ['Grundschule', '1 to 4', 'No Informatik subject'],
          ['Sekundarstufe I, all types', '5 and 6', 'Informatik und Medienbildung, compulsory since 2025/26'],
          ['Sekundarstufe I, all types', '7', 'Aufbaukurs Informatik, with the new reading aid'],
          ['Gemeinschaftsschule', '8 to 10', 'Profile subject IMP (phasing out): eight hours, about three of them informatics'],
          ['Werkreal-, Haupt-, Realschule', '8 to 10', 'Wahlfach Informatik, if offered'],
          ['Oberstufe, Qualifikationsphase', 'Kursstufe', 'Wahlfach (2 hours), Basisfach (3 hours) or Leistungsfach (5 hours)']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Baden-Württemberg page, read on 2 November 2026; it compiles the Land\'s school ordinances and the Kultusministerium\'s Organisationserlass. The Gymnasium in Baden-Württemberg runs mostly as G8, with the Einführungsphase in grade 10 and the Qualifikationsphase in grades 11 and 12; the Oberstufe of a Gemeinschaftsschule covers grades 11 to 13.' },
        { kind: 'two', mt: true,
          leftH3: 'Who takes it at the top',
          left: [
            'Few pupils keep Informatik to the end. The monitor gives 7 % as the share of upper secondary pupils taking Informatik in Baden-Württemberg in 2024/25, from KMK figures, and its national page names Baden-Württemberg among the three Länder where only about one pupil in twelve takes the subject in the Oberstufe. The national average it quotes is about 15 %.'
          ],
          rightH3: 'Who teaches it',
          right: [
            'For 2025/26 the monitor reports 717 Informatik teachers at the school types it counts, 2 % of all teachers, and 26 new Informatik teachers hired in the year, 25 of them through a teaching degree and one through a lateral entry route. Its figure leaves out Werkreal and Hauptschulen, Gemeinschaftsschulen and special schools, so read it as a floor.'
          ] },
        { kind: 'p', mt: true, html: 'What this means in practice: a ten year old in Stuttgart, Karlsruhe or Ulm now meets computing at school, which is new, but the teaching is still being built, and the step from grade 10 to a Kursstufe course in Informatik is one most pupils do not take. Our classes are not a replacement for that subject. They give a pupil enough programming that the school lesson feels like practice rather than a first encounter, and they keep a teenager programming in the years the timetable does not.' }
      ]
    },
    {
      id: 'schools',
      eyebrow: 'School types',
      h2: 'Which school types are there in Baden-Württemberg?',
      lede: 'Five secondary school types serve a Land of 11,245,898 people, 612,663 of them in the capital, Stuttgart (Destatis, 31 December 2024). The Gymnasium is still mostly on the eight-year route.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Four years of Grundschule', p: 'Children spend grades 1 to 4 in the Grundschule, as in most Länder. The KMK states that there is no leaving exam at the end of it.' },
          { h3: 'Five secondary types', p: 'The monitor lists the Werkrealschule, Hauptschule, Realschule, Gemeinschaftsschule and Gymnasium for grades 5 to 10. The KMK names the Gemeinschaftsschule in Baden-Württemberg among the schools that offer all three tracks under one roof.' },
          { h3: 'Two routes to the Abitur', p: 'At the Gymnasium the Abitur mostly comes after grade 12. At a Gemeinschaftsschule with its own Oberstufe it comes after grade 13. Berufliche Gymnasien are a third door, with their own exam schedule.' }
        ] },
        { kind: 'p', mt: true, html: 'Families moving into the Land, often for work in the Stuttgart region, ask whether an English-speaking child should start at a Gymnasium or a Gemeinschaftsschule. That is a school decision, not ours, and we do not advise on placement. What we can say is that both school types now teach Informatik und Medienbildung in grades 5 and 6, so the computing a pupil meets in the first two secondary years is the same subject whichever door they walk through.' }
      ]
    },
    {
      id: 'abitur',
      tint: 'tint',
      eyebrow: 'The Informatik Abitur',
      h2: 'How is the Informatik Abitur set in Baden-Württemberg?',
      lede: 'Centrally for the Leistungsfach, on paper, with very little allowed on the desk. The facts come from the Informatik-Monitor and the Kultusministerium.',
      body: [
        { kind: 'two',
          leftH3: 'Written, central, without a computer',
          left: [
            'According to the GI\'s Baden-Württemberg page, a written Abitur exam is taken in the Leistungsfach Informatik and it is organised centrally, the same across the Land. The only permitted aids are a German spelling dictionary and a scientific calculator. Programming tasks may be answered in the language used in the course, but a programming environment is not allowed, and practical parts at a computer are neither planned nor permitted.',
            'In the Wahlfach and the Basisfach an oral Abitur exam is possible instead. The monitor adds that Informatik is not assigned to any of the Abitur subject fields and so is not treated as equal to the sciences when pupils choose exam subjects.'
          ],
          rightH3: 'What that asks of a pupil',
          right: [
            'A pupil who has only ever written code with an editor that completes brackets and flags errors will find a paper exam hard, even if they program well. The skill being tested is reading and writing correct code without help: tracing a loop by hand, writing a class from memory, explaining why an algorithm stops.',
            'That is why our Oberstufe course mixes live programming with written practice on paper, timed and marked line by line. The school course and its teachers are what counts for the Abitur; we teach alongside them and do not set or mark school work.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Abitur 2027 at the berufliche Gymnasien in Baden-Württemberg (Kultusministerium schedule)', head: ['Step', 'Date'], rows: [
          ['Written exams, main dates', '16 April to 5 May 2027'],
          ['Written Informatik exam', 'Tuesday 20 April 2027'],
          ['Written resits (Nachtermin)', '10 May to 2 June 2027'],
          ['Oral exams', '28 June to 8 July 2027'],
          ['Abitur certificates, at the latest', '8 July 2027']
        ] },
        { kind: 'source', html: 'Source: Kultusministerium Baden-Württemberg, Terminplan für die Abiturprüfung 2027 an den Beruflichen Gymnasien, read on 3 November 2026. This schedule covers the berufliche Gymnasien only. We did not find the matching schedule for the allgemein bildende Gymnasien on the ministry\'s pages, so we print no date for it; your school publishes its own timetable. Across Germany, the KMK notes that written Abitur tasks are now set centrally in almost all Länder.' }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'The school year',
      h2: 'When are the school holidays in Baden-Württemberg in 2026/27?',
      lede: 'Baden-Württemberg has one of the latest summer holidays in Germany. Our classes run through the year, so these dates are for planning, not for stopping.',
      body: [
        { kind: 'table', numCols: [], caption: 'School holidays in Baden-Württemberg, 2026/27 (first and last day)', head: ['Holiday', 'Dates'], rows: [
          ['Autumn (Herbstferien)', '26 to 30 October 2026; the table also lists 31 October'],
          ['Christmas', '23 December 2026 to 9 January 2027'],
          ['Easter', '30 March to 3 April 2027; the table also lists 25 March'],
          ['Whitsun (Pfingsten)', '18 to 29 May 2027'],
          ['Summer', '29 July to 11 September 2027']
        ] },
        { kind: 'source', html: 'Source: KMK, Ferien im Schuljahr 2026/2027, as of 9 October 2025, and the KMK long-term summer holiday table for 2025 to 2030. The KMK fixes the summer dates years ahead; the Land sets the others. Baden-Württemberg has four movable holiday days that schools place themselves.' },
        { kind: 'p', mt: true, html: 'Because the summer break runs to 11 September 2027, a pupil in Baden-Württemberg is often still on holiday when pupils in the north have been back for weeks. Some families use the first fortnight of September for a short, intense block of one-to-one lessons before a new school year, especially before the step into the Kursstufe.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in English, and who teaches them?',
      lede: 'Every class is live and in English. Our mentors are based in India and adapt to each learner\'s speed and accent.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English, said up front', p: 'We teach only in English, never in German. For a pupil at an international or bilingual school in the Land this matches the classroom; for a pupil at a German school it adds a second language to the coding at no extra cost.' },
          { h3: 'Matched to the learner', p: 'Mentors slow down, rephrase and check understanding. They get used to how a pupil speaks, and a teenager who mixes in a German technical word is answered in plain English rather than corrected for it.' },
          { h3: 'German terms explained', p: 'School Informatik in the Land uses German terms such as Algorithmus, Schleife or Datenbank. We name the German word next to the English one, so a pupil can use both in class.' }
        ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Stuttgart data project',
      h2: 'Which Stuttgart library branch is the busiest? A project in three versions',
      lede: 'The Landeshauptstadt Stuttgart publishes the stock and the loans of every branch of its city library as open data. Our pupils use the 2024 figures to learn a habit that matters well beyond libraries: a total and a rate answer different questions, and a rate is only fair across rows that are alike.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file is stadtbibliotheken_stuttgart_bis-2024.csv from the city\'s statistics office, published under the CC BY 4.0 licence, which allows reuse including commercial reuse with credit. Each row gives a year, a library, a branch, a measure (Medienbestand for items held, Entleihungen for loans) and a value. We downloaded it on 3 November 2026.',
            'For 2024 it lists 20 branches under Stadtteilbibliotheken, from large ones such as Vaihingen and Bad Cannstatt to two pop-up branches and a tiny collection in the Rathauspassage.'
          ],
          rightH3: 'The question',
          right: [
            'Which branch is the busiest? A first-time programmer sorts by loans and is done. A better question follows at once: busy compared with what? A branch with three times as many books will lend more simply because it is bigger.',
            'So the project has three versions, and each one is right about the question it answers.'
          ] },
        { kind: 'code', label: 'Version 1: the branch with the most loans', lang: 'Python', code: V1, note: 'It prints: <code>Branches in 2024: 20</code> and <code>Most loans: Vaihingen 274027</code>.' },
        { kind: 'p', mt: true, html: 'Vaihingen lent 274,027 items in 2024. True, and useful if the question is where most books leave the shelf. But Vaihingen also holds 50,715 items, the largest stock of the 20. Version 2 divides loans by stock, which librarians call turnover: how many times, on average, each item went out in the year.' },
        { kind: 'code', label: 'Version 2: loans per item held', lang: 'Python', code: V2, note: 'It prints: <code>Loans per item, top: West 6.43</code> and <code>Loans per item, bottom: Popup Hedelfingen 0.0</code>.' },
        { kind: 'p', mt: true, html: 'Stuttgart-West, with 25,587 items and 164,462 loans, works its stock hardest: each item went out more than six times. The bottom of the list is stranger. Popup Hedelfingen held 4,106 items but recorded only 10 loans. Before anyone calls it a failure, a good programmer asks whether it is comparable at all, and the data can answer that: Hedelfingen appears in the file only in 2024.' },
        { kind: 'code', label: 'Version 3: compare like with like', lang: 'Python', code: V3, note: 'It prints: <code>Branches with a 2023 row too: 17</code>, <code>Bottom among them: Stammheim 3.38</code> and <code>Only in 2024: [\'Popup Hedelfingen\', \'Popup Obertürkheim\', \'Rathauspassage\']</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Stuttgart branch libraries in 2024: stock, loans and turnover (our calculation)', head: ['Branch', 'Items held', 'Loans', 'Loans per item'], rows: [
          ['Vaihingen', '50,715', '274,027', '5.40'],
          ['West', '25,587', '164,462', '6.43'],
          ['Heslach', '21,176', '126,247', '5.96'],
          ['Stammheim', '23,817', '80,461', '3.38'],
          ['Rathauspassage', '57', '271', '4.75'],
          ['Popup Hedelfingen', '4,106', '10', '0.00']
        ] },
        { kind: 'source', html: 'Data: Landeshauptstadt Stuttgart, Statistisches Amt, Medienbestände und Entleihungen in Stuttgarter Bibliotheken, licence CC BY 4.0, downloaded 3 November 2026. Year-end rows (31 December 2024) for the Stadtteilbibliotheken only. Turnover and the three filters are our own; the file gives no reason why a branch first appears in 2024, so we give none.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 8 to 10, no screen.</strong> Two classes collect books for a fair. Class A brings 60 books for 30 children, class B brings 40 for 10. Which class gave more? Then: which class gave more per child?',
          '<strong>Ages 10 to 12, Scratch.</strong> Store loans and stock for five branches in two lists, find the largest loan count, then the largest loans divided by stock, and see whether the winner changes.',
          '<strong>Ages 13 to 16, Python.</strong> Run Version 1, predict the result of Version 2 before you run it, then write Version 3 yourself and explain why the three answers are all correct.',
          '<strong>Going further.</strong> The tiny Rathauspassage collection has 57 items and a turnover of 4.75. Write a rule that only ranks branches above a minimum stock, and argue for the threshold you chose.'
        ] }
      ]
    },
    {
      id: 'biber',
      eyebrow: 'A first contest',
      h2: 'Can pupils in Baden-Württemberg enter the Informatik-Biber in 2026?',
      lede: 'Yes, through their school. It is free and needs no programming.',
      body: [
        { kind: 'p', html: 'Bundesweite Informatikwettbewerbe (BWINF) runs the Informatik-Biber for pupils from grade 3 up to grade 13, and nobody needs to have programmed before. This year the Biber is held from 9 to 20 November 2026; schools register their pupils and run the quiz in a lesson. For a pupil in grade 5 or 6 who has just met Informatik und Medienbildung, it is a short, friendly test of the same thinking. We do not reuse or copy any real Biber task; in our competitions course every puzzle is written by us, and families who want the originals get a link to the free archive the organiser keeps. We are not connected to BWINF.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are classes in Baden-Württemberg?',
      lede: 'In the afternoon and early evening after school, or on weekend mornings. You choose the time in your own clock when you book.',
      body: [
        { kind: 'table', numCols: [], caption: 'Three sample lesson times, seen from both ends', head: ['Clock in Baden-Württemberg', 'Mentor in India until 27 March 2027', 'Mentor in India after the change'], rows: [
          ['15:15', '19:45', '18:45'],
          ['16:45', '21:15', '20:15'],
          ['Saturday 11:00', '15:30', '14:30']
        ] },
        { kind: 'source', html: 'German law (the Einheitenzeitgesetz) sets UTC+1 for the winter months and UTC+2 for summer; the clocks went back on 25 October 2026 and go forward on 28 March 2027. India does not change its clocks (UTC+5:30), so the gap is four and a half hours now and three and a half hours from late March. The rows are illustrations; no batch is fixed to them.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a learner in Baden-Württemberg can do at each stage',
    lede: 'These stages are ours: they help us place a new learner and tell parents what has changed. School grades are a separate matter.',
    table: { caption: 'Programming milestones from Klasse 5 to the Kursstufe (ours)', head: ['Stage', 'Typical grade', 'The learner can'], rows: [
      ['1. Steps and repeats', '5', 'Write an algorithm in everyday words, then as Scratch blocks'],
      ['2. Decisions and variables', '6 to 7', 'Use conditions and a counter, and test a program with a planned input'],
      ['3. Lists and files', '8 to 9', 'Read a small data file in Python and compute a total and a rate'],
      ['4. Functions and classes', '10', 'Split a program into functions and model an object with a class'],
      ['5. Code on paper', 'Kursstufe', 'Write and trace correct code by hand, without an editor, in a set time']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is where the Stuttgart project sits: a pupil learns that the biggest number and the fairest number are often different.',
      'Our reports describe programs your child wrote and can talk through, not hours logged.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you rank anything, ask what you are dividing by, and whether every row had the same chance.',
      'If your exam is on paper, practise on paper. The editor will not be there to help.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners in Baden-Württemberg',
    lede: 'Each of these runs live over video in English, taught by a mentor who stays with the learner, as a group batch or privately.',
    bands: [
      { num: 'I', h3: 'Younger learners', sub: 'Ages 7 to 14', courses: [
        { code: 'CBW / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'A first complete course in block coding, 7 to 12.' },
        { code: 'CBW / KID / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed Python and small AI projects, 9 to 12.' },
        { code: 'CBW / KID / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Puzzles that build algorithmic habits before code.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CBW / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first scripts to data and small apps.' },
        { code: 'CBW / TEEN / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Classes and objects, the core of Oberstufe Informatik.' },
        { code: 'CBW / TEEN / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur maths in English', blurb: 'Analysis, geometry and stochastics with our own problems.' }
      ] },
      { num: 'III', h3: 'Adults and graduates', sub: 'Ages 18 and up', courses: [
        { code: 'CBW / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'A full Python path for adults starting fresh.' },
        { code: 'CBW / ADULT / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Cleaning, grouping and charting real data sets.' },
        { code: 'CBW / ADULT / 03', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'The ideas behind interviews and university modules.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work for a family in Baden-Württemberg',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons and early evenings in German time.' },
      { time: 'Weekend', l: 'Saturday or Sunday mornings, unhurried.' },
      { time: '1-on-1', l: 'A time agreed with your mentor, moved when exams come.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same person each week, who knows the learner\'s gaps.' },
      { h3: 'Live, never recorded', p: 'Questions are answered while the code is on the screen.' },
      { h3: 'Paper practice', p: 'Timed written tasks for Oberstufe pupils facing a paper exam.' },
      { h3: 'School terms named', p: 'German Informatik vocabulary explained in English.' },
      { h3: 'Progress notes', p: 'Short notes for parents on what was built and what was hard.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one to one.' }
    ]
  },

  projectsH2: 'Projects by our students',
  projectsLede: 'Learners who keep going build real programs. A few are shown here; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Google reviews from families and students, unedited.',

  fees: {
    h2: 'Fees for families in Baden-Württemberg',
    lede: 'You pay monthly for eight live classes. The fees on this page are euro amounts worked out at the European Central Bank reference rate, while the payment itself goes through in US dollars, so your bank does the conversion and the final figure can move a little.',
    free: ['A free first class', 'A short task matched to the learner\'s grade', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar level', 'One regular mentor', 'Two classes a week', 'Monthly, cancel any month'],
    one: ['The learner and one mentor', 'Pace and topics set around school', 'Times that suit your week']
  },

  faq: {
    eyebrow: 'Families in Baden-Württemberg ask',
    h2: 'Coding classes in Baden-Württemberg: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No, never. We teach in English alone, live, and the mentors (who are based in India) tune their speed and accent to the learner. Where school uses a German word such as Schleife, the mentor names it and explains it in English.' },
      { q: 'Is Informatik compulsory in Baden-Württemberg?', a: 'Yes. According to the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, the compulsory subject Informatik und Medienbildung started in grades 5 and 6 in 2025/26 at all secondary school types and grows a year at a time.' },
      { q: 'Does the new subject already have a curriculum?', a: 'Not yet. The Informatik-Monitor states that the consultation on the new Bildungsplan is planned for the 2026/27 school year and that it should come into force in August 2027. Until then teachers use older plans with a ministry reading aid.' },
      { q: 'Can my child use a computer in the written Informatik Abitur?', a: 'No. The Informatik-Monitor says the written Leistungsfach exam is set centrally, a programming environment is not allowed and there are no practical parts at a computer. The aids are a spelling dictionary and a scientific calculator.' },
      { q: 'Do you prepare pupils for the Abitur?', a: 'We teach alongside school, with programming and written practice on paper for the Kursstufe. The school course is what counts for the Abitur; we do not set, mark or award any school grade.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Afternoons from about a quarter past three are popular across the Land.' },
      { q: 'What happens in the long summer holidays?', a: 'Classes continue. The KMK dates for Baden-Württemberg run from 29 July to 11 September 2027, and many families keep a lighter rhythm or switch to one to one for a few weeks.' },
      { q: 'How many learners share a class?', a: 'A batch brings together fifteen to twenty learners at a similar level. Choose one to one if your child would rather have the mentor alone, with lessons built around their own questions.' },
      { q: 'Why is the fee shown in euro but charged in dollars?', a: 'We display each monthly fee in euro, worked out from the ECB reference rate, so families in Germany can compare easily. The card payment itself runs in US dollars, which means your bank converts it on the day and a cent or two of difference is normal. Trying a first lesson costs nothing.' },
      { q: 'Are you connected to the Kultusministerium or a school?', a: 'No. We are an independent online school. We are not connected to the Kultusministerium, the KMK, BWINF, any competition or any school in Baden-Württemberg.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Baden-Württemberg.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page we have written for Germany.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik in all sixteen Länder', p: 'How the Land compares with the others.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'The Oberstufe subject explained.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'Original puzzles in the Biber style.' },
      { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik', p: 'The national algorithm contest.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live lesson looks like, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the free lesson the learner solves one small programming task set for their grade. That gives the mentor a sense of how they reason and how easily they follow spoken English, and the mentor then recommends a course and a batch.',
    readFirst: 'Curious about the format first? Our page on <a class="ag-inline-link" href="/how-we-teach">live teaching</a> walks through a typical lesson, and the <a class="ag-inline-link" href="/courses">course list</a> holds each full syllabus.',
    note: 'Lessons happen live over video with India-based mentors, and English is the only teaching language. For a quick answer, message us on WhatsApp.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Informatik', links: [
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-computer-science-in-english', label: 'Abitur computer science' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/german-school-system-maths-and-computing-explained', label: 'German school system' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Busy compared with what?'
  },

  personalityCss: `
.ag-root.ag-cbw .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cbw .ag-capsule { border-left-width: 6px; }
.ag-root.ag-cbw .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-cbw .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cbw .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Baden-Württemberg and national pages); KMK FER2026_27 and Sommerferienregelung 2025 to 2030; KMK school-type overview; Kultusministerium Baden-Württemberg, Terminplan Abitur 2027 an den Beruflichen Gymnasien; Destatis GV-ISys 31.12.2024; BWINF Biber 2026; read 2 and 3 November 2026. Data: Landeshauptstadt Stuttgart, Statistisches Amt, Medienbestände und Entleihungen in Stuttgarter Bibliotheken, CC BY 4.0.',
    localProject: 'Busy compared with what: an original Python project on Stuttgart\'s 2024 branch library figures. Version 1 crowns Vaihingen by loans (274,027), Version 2 divides by stock and finds West top (6.43) and Popup Hedelfingen bottom (0.0, 10 loans on 4,106 items), Version 3 keeps the 17 branches that also have a 2023 row and finds Stammheim bottom (3.38). Lesson family: a rate beats a raw total, but only across rows that are alike.',
    requiredMentions: ['stadtbibliotheken_stuttgart_bis-2024.csv', 'Most loans: Vaihingen 274027', 'Loans per item, top: West 6.43', 'Bottom among them: Stammheim 3.38', 'Tuesday 20 April 2027', '29 July to 11 September 2027', 'come into force in August 2027', 'Busy compared with what?'],
    sources: [
      { claim: 'Informatik und Medienbildung from 2025/26; hours; Oberstufe courses; Abitur rules; key figures.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/baden-wuerttemberg' },
      { claim: 'BW meets the four-hour recommendation; one in twelve take Informatik in the Oberstufe.', url: 'https://informatik-monitor.de/' },
      { claim: 'Holiday dates 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Abitur 2027 schedule at berufliche Gymnasien, Informatik on 20 April 2027.', url: 'https://km.baden-wuerttemberg.de/fileadmin/redaktion/m-km/intern/PDF/Dateien/Berufliche_Schulen/Terminplan_Abitur_2026_27_Internet_barrierefrei.pdf' },
      { claim: 'Population of Baden-Württemberg and Stuttgart, 31.12.2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/02-bundeslaender.xlsx?__blob=publicationFile' },
      { claim: 'Stuttgart library stock and loans, CC BY 4.0.', url: 'https://ckan.govdata.de/dataset/medienbestande-und-ausleihen-in-stuttgarter-bibliotheken' }
    ],
    rejectedClaims: [
      'Abitur 2027 dates for the allgemein bildende Gymnasien: not found raw on the ministry site, so not printed.',
      'Any reason why the pop-up branches appear only in 2024: not in the data, so none given.',
      'Naming Stuttgart or other schools as sources of students: refused.',
      'German-language teaching: we teach in English only.',
      'Any affiliation with the Kultusministerium, KMK, BWINF or a school: none.'
    ]
  }
};
