'use strict';
// Coding classes in Hesse (ag- Land page, Germany cluster P4 row DE093, alloc code che, accent #4F557A).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent.
// Spine: Hessen has no compulsory Informatik at any school type and, per the GI, no binding plan to introduce it; its
// Gymnasien may offer a one-hour Wahlunterricht from grade 7, and the school trial "Digitale Welt" left the timetable in
// 2026/27. The Landesabitur sets Informatik centrally, with exam days published for 2027. Data project: the Hessisches
// Statistisches Landesamt land-use table, where "davon" columns add up and "darunter" columns do not.
// Sources (read raw; copies under ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-in-hesse/):
//  - GI Informatik-Monitor 2026/27, Hessen page (infmon-hessen/ac9387d6.txt; FACTS 77): "Schulartübergreifend findet kein
//    verbindlicher Informatikunterricht statt."; "Im gymnasialen Bildungsgang kann Informatik als Teil des Wahlunterrichts je
//    einstündig ab der Jahrgangsstufe 7 angeboten werden."; Haupt- und Realschule WPU possible "jedoch liegt keine eigene
//    curriculare Grundlage für diese Bildungsgänge vor"; Einführungsphase "zwei- bis dreistündig", "Entsprechende
//    Vorkenntnisse aus der Sekundarstufe I sind hierfür nicht erforderlich."; Q-phase Grundkurs two or three hours,
//    Leistungsfach five hours; "In einem Leistungsfach Informatik wird schriftlich geprüft."; GK as third written, fourth
//    oral or fifth subject; "Die schriftlichen Abiturprüfungsaufgaben werden zentral (landesweit einheitlich) vorgegeben.
//    Praktische Prüfungsanteile am Rechner sind nicht zulässig. Zugelassene Hilfsmittel sind eine Operatorenliste sowie ein
//    Wörterbuch."; seven Sek I school types; Gymnasium Sek I five-year, six-year or both in parallel; "Digitale Welt"
//    trial from 2022/23, from 2026/27 "nur noch im Rahmen des Ganztags"; Kennzahlen: Sek II with Informatik 10 %,
//    Abiturienten with Informatik exam 5 % (2024/2025); 485 Informatik teachers, 2 % of teachers (2025/2026).
//  - GI national page (FACTS 92, 96): Hessen among six Länder without compulsory Informatik; "In Berlin, Brandenburg und
//    Hessen sind keine verbindlichen Vorhaben für die Einführung des Pflichtfachs Informatik bekannt."
//  - Hessisches Ministerium für Kultus, Bildung und Chancen, Termine Landesabitur (abi/termine.txt, fetched 3 Nov 2026):
//    "Die schriftlichen Abiturprüfungen 2027 finden im Zeitraum vom 15. April bis 5. Mai 2027 , die Nachprüfungen im Zeitraum
//    vom 18. Mai bis 3. Juni 2027 statt."; main sequence: Thu 15 April 2027 GK list incl. Informatik; Mon 19 April 2027 LK
//    list incl. Informatik; Fri 16 April Biologie; Tue 20 April Physik; Wed 21 April Chemie; Tue 27 April Deutsch; Fri
//    30 April Englisch; Mon 3 May Französisch; "Mittwoch, 5. Mai 2027 Mathematik Mathematik"; resits Tue 18 May (GK
//    Informatik), Thu 20 May (LK Informatik), "Donnerstag. 3. Juni 2027 Mathematik".
//  - KMK FER2026_27.pdf (FACTS 276): "Hessen (4) 05.10. - 17.10. 23.12. - 12.01. -- 22.03. - 02.04. -- 28.06. - 06.08."
//  - KMK Schema (FACTS 21): Verbundene Haupt- und Realschule and Mittelstufenschule named for Hessen.
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Hessen 6,280,793; Wiesbaden 288,850; Frankfurt am Main 756,021.
//  - Blocked: opendata.hessen.de answered with an anti-bot page for the Schlösser und Gärten CSV; stopped, not retried.
//  - Data: Hessisches Statistisches Landesamt, "Hessische Kreiszahlen", edition October 2026 (hkr_26-2hj.xlsx, 1,092,356
//    bytes, sha256 0c0b94d5...7f3c3e42) from https://statistik.hessen.de/publikationen/hessische-kreiszahlen; series listed
//    on GovData (hessische-kreiszahlen, Open Data Hessen) under CC BY; Impressum sheet: "Vervielfältigung und Verbreitung,
//    auch auszugsweise, mit Quellenangabe gestattet." Table 38 "Bodenfläche in Hessen 2025 nach Nutzungsart (in Hektar)",
//    "Stichtag: 31.12.2025. — Quelle: Hessisches Landesamt für Bodenmanagement und Geoinformation." Exported by us to
//    bodenflaeche_2025.tsv. Downloaded 3 Nov 2026.
// Our own calculations (scratchpad de/w/L1/he_all.py = he_v1 + he_v2 + he_v3, python3 -I, run in the data folder):
//  "Total area: 2111563 ha", "Sum of all six columns: 3826423 ha", "Sum of the davon columns: 2111563 ha",
//  "Farmland + forest inside vegetation: 1714860 of 1740399 ha", "Rows off by rounding: 13 largest gap: 1 ha",
//  "Kreise and kreisfreie Städte: 26", "Odenwaldkreis 56.3 % forest", "Rheingau-Taunus-Kreis 53.9 % forest",
//  "Hochtaunuskreis 49.1 % forest".
// Lesson family: read the table's grammar before you add; "davon" parts make up the total, "darunter" parts are a selection.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'areas = {}',
  'with open("bodenflaeche_2025.tsv", encoding="utf-8") as src:',
  '    for row in csv.reader(src, delimiter="\\t"):',
  '        if len(row) > 8 and row[0].isdigit() and row[2].isdigit():',
  '            areas[(row[0], row[1])] = [int(x) for x in row[2:9]]',
  '',
  'total, settled, transport, vegetation, farmland, forest, water = areas[("000000", "Land Hessen")]',
  'print("Total area:", total, "ha")',
  'print("Sum of all six columns:", settled + transport + vegetation + farmland + forest + water, "ha")'
].join('\n');

const V2 = [
  'print("Sum of the davon columns:", settled + transport + vegetation + water, "ha")',
  'print("Farmland + forest inside vegetation:", farmland + forest, "of", vegetation, "ha")',
  '',
  'gaps = {key[1]: v[1] + v[2] + v[3] + v[6] - v[0] for key, v in areas.items()}',
  'print("Rows off by rounding:", sum(1 for g in gaps.values() if g), "largest gap:", max(abs(g) for g in gaps.values()), "ha")'
].join('\n');

const V3 = [
  'kreise = {key[1]: v for key, v in areas.items() if key[0][0] in "456" and key[0][1:3] != "00"}',
  'share = {name: v[5] / v[0] * 100 for name, v in kreise.items()}',
  'print("Kreise and kreisfreie Städte:", len(kreise))',
  'for name in sorted(share, key=share.get, reverse=True)[:3]:',
  '    print(name, round(share[name], 1), "% forest")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'Hesse' },
  slug: 'coding-classes-in-hesse',
  code: 'che',
  accent: '#4F557A',
  accentRationale: 'Hesse: a slate-blue #4F557A, the blue-grey of the Taunus and Odenwald hills at dusk and of Frankfurt\'s glass towers; contrast 5.85 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes in Hesse',
  title: 'Coding Classes in Hesse (Hessen): Live Online, in English',
  description: 'Coding classes in Hesse, live online in English: Hessen has no compulsory Informatik, its Landesabitur dates for 2027, the holidays and a land-use data project.',
  ogDescription: 'Live online coding in English for pupils in Hessen: why Informatik is optional at every school type, how the central Landesabitur sets it, the 2027 exam days, the 2026/27 holidays and a Python project on the Land\'s land-use statistics.',
  twitterDescription: 'Coding in English for Hesse: optional Informatik, Landesabitur 2027 days and a land-use data project.',
  pageName: 'Coding Classes in Hesse',
  webPageDescription: 'A guide for families in Hessen to coding alongside school, built from the GI Informatik-Monitor 2026/27, the Kultusministerium\'s Landesabitur 2027 dates, the KMK holiday table and Destatis, with an original project on the Hessisches Statistisches Landesamt land-use table.',
  courseDescription: 'Live online coding and Informatik classes in English for pupils in Hesse aged about 10 to 19, giving the grounding that Hessen\'s optional Informatik leaves to chance, in a class of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Hesse',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#optional', label: 'Informatik' },
    { href: '#landesabitur', label: 'Abitur' },
    { href: '#project', label: 'Land use' },
    { href: '#ferien', label: 'Holidays' }
  ],
  eyebrow: 'Hessen &middot; Coding and Informatik &middot; Ages 10 to 19',
  h1: 'Coding classes in Hesse',
  lede: 'In Hessen, no pupil has to learn Informatik. Not in Grundschule, not in grades 5 to 10, at none of the Land\'s seven secondary school types. The Gesellschaft für Informatik also reports that no binding plan to introduce the subject is known. Some Gymnasien offer an hour a week from grade 7; many pupils never meet it until the Oberstufe. This page explains the rules, the 2027 Landesabitur days, the holidays, and a project on how Hessen\'s land is used.',
  secondaryCta: { href: '#project', label: 'Try the land-use project' },
  wa: 'Hello Modern Age Coders, we live in Hessen and would like coding classes in English for our child. Could we book a free first class?',
  heroNote: 'Online since 2020 &middot; 10,000+ students worldwide &middot; live lessons in English with one mentor',
  spec: [
    ['Ages', 'About 10 to 19'],
    ['Core course', 'Informatik Companion, Klasse 5 to 10'],
    ['Class size', '15 to 20, or one to one'],
    ['Hessen times', 'Early afternoon, evening, Sunday midday'],
    ['Mentors', 'Teaching from India, in English'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders runs coding classes for pupils in Hesse aged about 10 to 19: live online, in English, in a class of 15 to 20 or one to one, with the same mentor every week, who keeps to the pupil\'s speed and accent. Since Informatik is not compulsory at any school type in Hessen, our Informatik Companion course gives pupils the grounding that school leaves to chance.',

  picks: {
    eyebrow: 'Where Hessen pupils start',
    h2: 'Three courses for pupils in Hesse',
    lede: 'A course for the years when Hessen offers little or no Informatik, one for the Oberstufe and the Landesabitur, and one for contests.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'CHE / 01', title: 'Informatik for grades 5 to 10', note: 'For 10 to 16. The programming, algorithms and data work that a Hessen timetable may never include, in two live lessons a week.' },
      { course: 'informatik-abitur-course-java-python', code: 'CHE / 02', title: 'Landesabitur Informatik', note: 'For the Grundkurs or the Leistungsfach. Modelling, data structures and databases, rehearsed on paper for a central exam.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'CHE / 03', title: 'Informatics contests', note: 'From 9 to 19. Our own puzzles in the Biber style, then algorithm problems of Bundeswettbewerb difficulty.' }
    ]
  },

  sections: [
    {
      id: 'optional',
      eyebrow: 'Informatik in Hessen',
      h2: 'Is Informatik a compulsory subject in Hessen?',
      lede: 'No. The rules below are summarised from the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, which compiles each Land\'s regulations. Modern Age Coders is independent of the GI and of the Hessian ministry.',
      body: [
        { kind: 'two',
          leftH3: 'Seven school types, no requirement',
          left: [
            'After Grundschule, Hessen has seven secondary school types: Hauptschule, Mittelstufenschule, verbundene Haupt- und Realschule, Realschule, integrated and cooperative Gesamtschule, and Gymnasium. The monitor states that across all of them there is no compulsory Informatik.',
            'At the Gymnasium, Informatik can be offered as an elective of one hour a week from grade 7. In the Haupt- and Realschule tracks it can be set up as a Wahlpflicht subject, but the monitor notes there is no curriculum of its own for those tracks.'
          ],
          rightH3: 'A trial that left the timetable',
          right: [
            'From 2022/23 Hessen trialled a subject called "Digitale Welt" at pilot schools. The monitor reports that from 2026/27 it may only be offered within the all-day programme, so it is no longer part of those schools\' timetables.',
            'Nationally, the GI names Hessen among six Länder with no compulsory Informatik for all, and among three where no binding plan to introduce it is known.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Where Informatik can appear in a Hessen school career', head: ['Stage', 'Informatik'], rows: [
          ['Grundschule, grades 1 to 4', 'No subject'],
          ['Gymnasium, from grade 7', 'Optional Wahlunterricht, one hour a week, if offered'],
          ['Haupt- and Realschule tracks', 'Wahlpflicht possible, without its own curriculum'],
          ['Einführungsphase', 'Two to three hours if offered; no prior Informatik needed'],
          ['Qualifikationsphase', 'Grundkurs of two or three hours, or Leistungsfach of five']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Hessen page and national comparison, read 2 November 2026. The Gymnasium middle years run for five years (grades 5 to 9) or six (grades 5 to 10), or both in parallel.' },
        { kind: 'p', mt: true, html: 'The monitor\'s remark about the Einführungsphase is telling: no prior knowledge from the Sekundarstufe I is required. It has to be that way, because for many pupils there was none. A pupil who arrives in grade 10 or 11 already able to program, read data and reason about algorithms starts the Oberstufe course with a real advantage, and that is what our Companion course builds.' },
        { kind: 'p', html: 'The Hessen page gives about 10 percent of Sekundarstufe II pupils taking Informatik in 2024/25 and about 5 percent of Abitur candidates with it as an exam subject. In 2025/26 the Land had 485 qualified Informatik teachers, about 2 percent of its teaching staff.' }
      ]
    },
    {
      id: 'landesabitur',
      tint: 'tint',
      eyebrow: 'Oberstufe and Landesabitur',
      h2: 'When is the Informatik Abitur in Hessen in 2027?',
      lede: 'Hessen\'s Landesabitur sets Informatik centrally, the same paper across the Land, and the ministry has published the days for 2027.',
      body: [
        { kind: 'two',
          leftH3: 'How it is examined',
          left: [
            'A Leistungsfach in Informatik is examined in writing. A Grundkurs taken without a break through the Einführungs- and Qualifikationsphase can be the third, written exam subject, the fourth, oral one, or the fifth, as a presentation, special learning achievement or oral exam.',
            'The monitor adds that Informatik counts towards the overall Abitur grade like any other exam subject, and can partly replace a natural science in the course requirements.'
          ],
          rightH3: 'What is on the desk',
          right: [
            'The written tasks are set centrally and are the same throughout Hessen. Practical work on a computer is not permitted.',
            'The only aids are a list of operators, the instruction verbs that tell a candidate what kind of answer is wanted, and a dictionary. Everything else must be in the candidate\'s head and pen.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Landesabitur 2027 in Hessen, selected days', head: ['Day', 'Leistungskurs', 'Grundkurs'], rows: [
          ['Thursday 15 April 2027', 'None', 'Informatik and other Grundkurs subjects'],
          ['Friday 16 April 2027', 'Biology', 'Biology'],
          ['Monday 19 April 2027', 'Informatik and other Leistungskurs subjects', 'None'],
          ['Tuesday 27 April 2027', 'German', 'German'],
          ['Friday 30 April 2027', 'English', 'English'],
          ['Wednesday 5 May 2027', 'Mathematics', 'Mathematics']
        ] },
        { kind: 'source', html: 'Source: Hessisches Ministerium für Kultus, Bildung und Chancen, Termine Landesabitur, read 3 November 2026. The written exams run from 15 April to 5 May 2027 and the resits, also set centrally, from 18 May to 3 June 2027; Informatik resits are on 18 May (Grundkurs) and 20 May 2027 (Leistungskurs).' },
        { kind: 'p', mt: true, html: 'A central paper written by hand, with an operator list and nothing else, rewards a particular kind of practice: reading an operator and answering exactly that, writing code that is correct without a compiler, and explaining a design in words. We train those habits beside the school course. The Landesabitur and the school\'s grades decide the result; we teach, and award no German qualifications.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'English-medium lessons',
      h2: 'Our classes are in English: what does that mean in practice?',
      lede: 'Every lesson is taught live and in English; we offer no German-language classes. That is said up front so no family is surprised at the first lesson.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Families who moved here', p: 'Work and study bring families to Hessen from across the world. Their children can learn Informatik in the language they think in, while school continues in German or in an international programme.' },
          { h3: 'Pupils at Hessen schools', p: 'For a pupil at a German school, an English coding lesson doubles as English practice. Mentors keep explanations simple, write new words on screen, and recognise German terms like Leistungsfach or Wahlunterricht.' },
          { h3: 'One language for code', p: 'Programming languages are written with English keywords. Learning them in English simply removes a translation step.' }
        ] },
        { kind: 'p', mt: true, html: 'Our mentors work from India and teach on live video. The standard is identical everywhere: one mentor who follows the pupil from week to week, the pupil writing the code, and reasoning that the pupil can explain, never an answer copied from a solutions page or an AI tool.' }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A Land-wide project',
      h2: 'How much of Hessen is forest? A table-reading project',
      lede: 'The Hessisches Statistisches Landesamt publishes its Kreiszahlen, a workbook of figures for every Kreis, twice a year. Table 38 shows how the Land\'s surface is used. Before any program can answer a question about it, the pupil has to read two small German words in the header.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'We downloaded the October 2026 edition of the Hessische Kreiszahlen on 3 November 2026 and exported Table 38, "Bodenfläche in Hessen 2025 nach Nutzungsart", to bodenflaeche_2025.tsv. The series is listed under CC BY on Open Data Hessen, and the workbook allows reproduction with the source named. The figures are in hectares, as at 31 December 2025.',
            'For each Kreis and for the whole Land there is a total, then columns for settlement, transport, vegetation, farmland, forest and water.'
          ],
          rightH3: 'The trap in the header',
          right: [
            'Above the columns, the table says "davon", meaning "of which, making up the whole". Above farmland and forest it says "darunter", meaning "among which, a selection". Farmland and forest are part of vegetation, not separate from it.',
            'Version 1 ignores the header and adds every column for the Land. The result is about 1.8 times the size of Hessen.'
          ] },
        { kind: 'code', label: 'Version 1: add every column', lang: 'Python', code: V1, note: 'It prints <code>Total area: 2111563 ha</code> and <code>Sum of all six columns: 3826423 ha</code>.' },
        { kind: 'p', mt: true, html: 'The program has counted most of the land twice: once as vegetation, and again as farmland or forest. Version 2 follows the header. It adds only the "davon" columns, checks that farmland and forest fit inside vegetation, and then tests every row of the table the same way.' },
        { kind: 'code', label: 'Version 2 (continues Version 1): respect davon and darunter', lang: 'Python', code: V2, note: 'It prints <code>Sum of the davon columns: 2111563 ha</code>, <code>Farmland + forest inside vegetation: 1714860 of 1740399 ha</code> and <code>Rows off by rounding: 13 largest gap: 1 ha</code>.' },
        { kind: 'p', mt: true, html: 'For the whole Land the "davon" columns add up exactly. In 13 rows they are out by a single hectare, which is what you expect when every column is rounded to whole hectares on its own. That is the right moment to tell pupils a rule statisticians live by: published parts are rounded separately, so they do not always add up to the published total, and nobody should "fix" the total to match.' },
        { kind: 'code', label: 'Version 3 (continues Version 2): forest share by Kreis', lang: 'Python', code: V3, note: 'It prints <code>Kreise and kreisfreie Städte: 26</code>, <code>Odenwaldkreis 56.3 % forest</code>, <code>Rheingau-Taunus-Kreis 53.9 % forest</code> and <code>Hochtaunuskreis 49.1 % forest</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Hessen land use, 31 December 2025, Land total (from Table 38; the check column is ours)', head: ['Column', 'Hectares', 'Header word'], rows: [
          ['Total (insgesamt)', '2,111,563', ''],
          ['Settlement (Siedlung)', '201,575', 'davon'],
          ['Transport (Verkehr)', '140,731', 'davon'],
          ['Vegetation', '1,740,399', 'davon'],
          ['of which farmland (Landwirtschaft)', '867,266', 'darunter'],
          ['of which forest (Wald)', '847,594', 'darunter'],
          ['Water (Gewässer)', '28,858', 'davon']
        ] },
        { kind: 'source', html: 'Data: Hessisches Statistisches Landesamt, Hessische Kreiszahlen, October 2026, Table 38, source given there as the Hessisches Landesamt für Bodenmanagement und Geoinformation, reference date 31 December 2025; downloaded 3 November 2026. Shares, sums and checks are ours. The 26 rows in Version 3 are the Landkreise and kreisfreie Städte, chosen by their area codes.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Grades 5 and 6, on paper.</strong> A class of 28 has 15 girls and 13 boys; "darunter" 6 play football. Which numbers add up to 28, and why can you not add the 6?',
          '<strong>Grades 7 and 8, Python.</strong> Run Version 1, then find the line in the table header that explains the wrong answer. Write Version 2 before you read ours.',
          '<strong>Grades 9 and 10.</strong> Version 3 ranks by forest share. Rank the same rows by forest area in hectares. Which Kreis moves the most, and why?',
          '<strong>Oberstufe.</strong> Compute the forest share for Frankfurt am Main, Stadt, and for the Land as a whole. Explain in two sentences why the Land figure is not the average of the 26 rows.'
        ] }
      ]
    },
    {
      id: 'ferien',
      tint: 'tint',
      eyebrow: 'School year 2026/27',
      h2: 'What are the school holidays in Hessen in 2026/27?',
      lede: 'The Hessen dates, first to last holiday day. Lessons can continue during the holidays or pause, as your family prefers.',
      body: [
        { kind: 'table', numCols: [], caption: 'School holidays in Hessen, 2026/27', head: ['Holiday', 'First day', 'Last day'], rows: [
          ['Autumn', '5 October 2026', '17 October 2026'],
          ['Christmas', '23 December 2026', '12 January 2027'],
          ['Easter', '22 March 2027', '2 April 2027'],
          ['Summer', '28 June 2027', '6 August 2027']
        ] },
        { kind: 'source', html: 'Source: KMK, Ferien im Schuljahr 2026/2027, version of 9 October 2025, Hessen row. Hessen lists no winter holiday and no Whitsun break for 2026/27, and four movable holiday days (bewegliche Ferientage). Summer dates are agreed long in advance by the KMK.' },
        { kind: 'two', mt: true,
          leftH3: 'People and places',
          left: [
            'Destatis puts Hessen\'s population at 6,280,793 on 31 December 2024 and that of Wiesbaden, the Land capital, at 288,850. Frankfurt am Main is larger, with 756,021; the other cities above 100,000 are Kassel, Darmstadt and Offenbach am Main.',
            'Online, a pupil in the Vogelsberg and one in Frankfurt\'s centre attend the same class.'
          ],
          rightH3: 'An early summer',
          right: [
            'Hessen\'s summer holidays in 2027 begin on 28 June, among the earliest in Germany, and the school year ends correspondingly early.',
            'For the Abitur class, the written papers run from 15 April to 5 May 2027, which leaves the Easter holidays, 22 March to 2 April, as the last long stretch for revision.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When are lessons in Hessen time?',
      lede: 'Hessen afternoons fall in the Indian evening. These three rows illustrate the gap between the clocks; families choose their own slot when they book.',
      body: [
        { kind: 'table', numCols: [], caption: 'Hessen time and India time', head: ['Hessen', 'India (winter, until 28 March 2027)', 'India (summer, from 28 March 2027)'], rows: [
          ['13:30', '18:00', '17:00'],
          ['17:15', '21:45', '20:45'],
          ['Sunday 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'The Einheitenzeitgesetz sets German legal time: MEZ (UTC+1) through the winter, MESZ (UTC+2) in summer. Winter time began on 25 October 2026 and summer time starts on 28 March 2027. India does not change its clocks (UTC+5:30), so it is four and a half hours ahead of Hessen in winter, three and a half in summer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From no school Informatik to the Landesabitur',
    lede: 'Five stages of our own, used to place a pupil from Hessen in the right class and to describe what they have learned.',
    table: { caption: 'Informatik stages for Hessen pupils (ours)', head: ['Stage', 'Usual grade', 'What the pupil can do'], rows: [
      ['1. Algorithms', '5 to 6', 'Plan a task step by step and spot the step that is missing'],
      ['2. First Python', '6 to 7', 'Loops, decisions and small functions'],
      ['3. Reading tables', '7 to 9', 'Read a statistics table, including its header, and compute correctly from it'],
      ['4. Data and databases', '9 to 10', 'Clean a public file, summarise it, write simple SQL'],
      ['5. Oberstufe', '10 to 13', 'Model with classes and data structures, written by hand against an operator list']
    ] },
    left: { h3: 'For parents', ps: [
      'The land-use project is stage 3. Reading "davon" and "darunter" correctly is as useful in a newspaper as in Informatik.',
      'Reports say what your child can now do and what comes next.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Read the header before you add the columns.',
      'If your total is bigger than the whole, something has been counted twice.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for families in Hesse',
    lede: 'Live in English, with one mentor throughout, in a class or one to one.',
    bands: [
      { num: 'I', h3: 'Ages 7 to 12', sub: 'Before secondary Informatik', courses: [
        { code: 'CHE / K / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for Kids', blurb: 'Zero to a finished game of their own.' },
        { code: 'CHE / K / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed code with turtle art, games and small AI ideas.' },
        { code: 'CHE / K / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Real scripts in Luau for games they design.' }
      ] },
      { num: 'II', h3: 'Ages 12 to 16', sub: 'Grades 7 to 10', courses: [
        { code: 'CHE / T / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Every core idea of Python, step by step.' },
        { code: 'CHE / T / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Statistics tables, charts and first models.' },
        { code: 'CHE / T / 03', slug: 'mysql-mastery-for-teens', title: 'SQL for Teens', blurb: 'Querying tables like the ones statistics offices publish.' }
      ] },
      { num: 'III', h3: 'Ages 15 to 19', sub: 'Oberstufe', courses: [
        { code: 'CHE / U / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Object orientation for the Oberstufe and beyond.' },
        { code: 'CHE / U / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for Teens', blurb: 'Lists, trees and graphs, explained and traced.' },
        { code: 'CHE / U / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik in English', blurb: 'Ready for the Landesabitur maths paper on 5 May 2027.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Fitting live lessons into a Hessen school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Early afternoon', l: 'Straight after a short school day.' },
      { time: 'Evening', l: 'For older pupils with a full timetable.' },
      { time: '1-on-1', l: 'Arranged with the mentor around school and exams.' }
    ],
    cells: [
      { h3: 'Constant mentor', p: 'The pupil keeps one mentor who knows their progress.' },
      { h3: 'Measured English', p: 'Clear, unhurried, with key words written down.' },
      { h3: 'Hands on', p: 'Pupils write and run the code themselves.' },
      { h3: 'Hessen calendar', p: 'Planned around the Land\'s holidays and Landesabitur.' },
      { h3: 'Updates', p: 'A short note to parents at regular intervals.' },
      { h3: 'Group or single', p: 'A class of 15 to 20, or a private mentor.' }
    ]
  },

  projectsH2: 'What older students have built',
  projectsLede: 'Examples of student work are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'Google reviews from parents and students, as they wrote them.',

  fees: {
    h2: 'Fees for families in Hesse',
    lede: 'Eight live classes a month, billed monthly, with no fixed term. The euro figures shown are based on the European Central Bank reference rate; the payment is processed in US dollars, so your bank converts it and the statement amount can be slightly different.',
    free: ['A free first class', 'A thinking task and a first program', 'No card needed'],
    group: ['A class of 15 to 20 at a similar stage', 'The same mentor each week', 'Two classes a week', 'Monthly, cancel when you choose'],
    one: ['A mentor for one pupil', 'Pace and topics chosen for them', 'Times arranged around school']
  },

  faq: {
    eyebrow: 'Hessen families ask',
    h2: 'Coding classes in Hesse: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. We teach only in English, live, in every class. Mentors speak at the pupil\'s pace, adjust to their accent, and understand German school terms such as Leistungsfach or Wahlunterricht if a pupil uses them.' },
      { q: 'Is Informatik compulsory in Hessen?', a: 'No. The Informatik-Monitor 2026/27 of the Gesellschaft für Informatik states that there is no compulsory Informatik at any school type in Hessen, and that no binding plan to introduce it is known.' },
      { q: 'Can my child take Informatik at a Hessen Gymnasium before the Oberstufe?', a: 'Sometimes. According to the Informatik-Monitor, a Gymnasium can offer Informatik as one hour a week of Wahlunterricht from grade 7. Whether it does depends on the school.' },
      { q: 'What happened to the subject Digitale Welt?', a: 'Hessen trialled it at pilot schools from 2022/23. The Informatik-Monitor reports that from 2026/27 it can only be offered within the all-day programme, so it is no longer on those schools\' timetables.' },
      { q: 'When is the Informatik Abitur in Hessen in 2027?', a: 'The Kultusministerium lists the Grundkurs paper on Thursday 15 April 2027 and the Leistungskurs paper on Monday 19 April 2027. The maths papers are on Wednesday 5 May 2027.' },
      { q: 'Can a computer be used in the Hessen Informatik Abitur?', a: 'No. The Informatik-Monitor states that practical work on a computer is not permitted and that the only aids are an operator list and a dictionary.' },
      { q: 'What time are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A lesson at 17:15 in Wiesbaden is 21:45 in India during the winter months.' },
      { q: 'Does this count towards my child\'s school grades?', a: 'No. We are not part of the school system and award no grades or German qualifications. The school and the Landesabitur decide those.' },
      { q: 'Who teaches the classes?', a: 'Mentors in India, live over video and in English. Your child keeps the same mentor.' },
      { q: 'How are the fees paid?', a: 'Once a month. Euro amounts shown use the European Central Bank reference rate; the charge is in US dollars and your bank converts it. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Hessen.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our Germany pages in one list.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik in the sixteen Länder', p: 'Hessen beside the rest of Germany.' },
      { href: '/abitur-computer-science-in-english', label: 'Informatik Abitur in English', p: 'The Oberstufe subject explained.' },
      { href: '/coding-for-international-school-students-germany', label: 'International school pupils', p: 'IB, IGCSE and AP computing in Germany.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Reasoning before AI', p: 'Why our pupils think first.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'A live lesson, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Your child\'s first class is free: a short problem to reason about, then a first piece of code. The mentor judges level and English along the way and suggests the course and class to join.',
    readFirst: 'For background, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Live, online and in English, with mentors based in India. Send us a WhatsApp message, in English, for the fastest answer.',
    formNote: 'Free; no card; no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Informatik', links: [
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/abitur-computer-science-in-english', label: 'Informatik Abitur' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Davon adds up, darunter does not'
  },

  personalityCss: `
.ag-root.ag-che .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-che .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-che .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-che .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-che .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Hessen and national pages); Hessisches Ministerium für Kultus, Bildung und Chancen, Termine Landesabitur 2027; KMK holidays 2026/27 and Schema; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz. Data: Hessisches Statistisches Landesamt, Hessische Kreiszahlen October 2026, Table 38, CC BY series.',
    localProject: 'Hessen land use 2025 (Table 38): Version 1 adds all six columns and gets 3,826,423 ha for a Land of 2,111,563 ha; Version 2 adds only the davon columns (exactly 2,111,563) and finds 13 rows out by one hectare of rounding; Version 3 ranks forest shares (Odenwaldkreis 56.3 %). Lesson family: davon adds up, darunter does not.',
    requiredMentions: ['bodenflaeche_2025.tsv', 'Sum of all six columns: 3826423 ha', 'Sum of the davon columns: 2111563 ha', 'Rows off by rounding: 13 largest gap: 1 ha', 'Odenwaldkreis 56.3 % forest', 'Monday 19 April 2027', 'Digitale Welt', 'Davon adds up, darunter does not'],
    sources: [
      { claim: 'Hessen: no compulsory Informatik, Gymnasium elective from grade 7, Oberstufe, central Abitur, aids, Digitale Welt, figures.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/hessen' },
      { claim: 'No binding plans in Berlin, Brandenburg, Hessen.', url: 'https://informatik-monitor.de/' },
      { claim: 'Landesabitur 2027 days.', url: 'https://kultus.hessen.de/Schulsystem/Schulformen-und-Bildungsgaenge/Gymnasium/Landesabitur/Termine-Landesabitur' },
      { claim: 'Holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Populations 31.12.2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/02-bundeslaender.xlsx?__blob=publicationFile' },
      { claim: 'Hessische Kreiszahlen, Table 38, and licence.', url: 'https://statistik.hessen.de/publikationen/hessische-kreiszahlen' }
    ],
    rejectedClaims: [
      'A reason for the one-hectare gaps beyond rounding: not stated by the publisher; the page says only that it is what rounding produces.',
      'The Hessische Schlösser und Gärten dataset: opendata.hessen.de served an anti-bot page, so it was not used.',
      'Detail of the Hessen Informatik Abitur task structure: covered by the German page in preparation, not repeated here.',
      'Gender shares from the monitor: left out under the no gender statistics rule.',
      'Any affiliation with the ministry, the GI, the KMK, the statistics office or a school: none.'
    ]
  }
};
