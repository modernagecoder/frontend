'use strict';
// Coding classes in Lower Saxony (ag- Land page, Germany cluster P4 row DE090, alloc code cls, accent #782445).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent.
// Spine: Niedersachsen made Informatik compulsory late in Sekundarstufe I (grades 9 and 10, since 2024/25), so the
// question for parents is the gap from grade 5 to grade 8; its Oberstufe is G9 and its central Informatik Abitur is
// written without a computer, a calculator or a formula sheet, with only a printed information sheet. Data project:
// the Landeshauptstadt Hannover street directory, where "contains" and "ends with" give different answers.
// Sources (read raw; copies under ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-in-lower-saxony/):
//  - GI Informatik-Monitor 2026/27, Niedersachsen page (infmon-niedersachsen/96603f73.txt; FACTS 50, 79): "An allen
//    allgemeinbildenden Schularten wird seit dem Schuljahr 2024/25 das Pflichtfach Informatik in den Jahrgangsstufen 9
//    und 10 unterrichtet."; Hauptschule, Realschule, Oberschule "in den Jahrgangsstufen 6 bis 10 ein zweistündiges
//    Wahlpflichtfach Informatik"; Realschule and Oberschule "in den Klassen 9 und 10 ... auch ein vierstündiges
//    Schwerpunktangebot"; KGS "ab Jahrgangsstufe 7 jeweils zweistündig"; IGS "ab Jahrgangsstufe 6"; Gymnasium
//    "zweistündiges Wahlfach Informatik" (Stundentafel 1) or Profil "drei Profilstunden in Klasse 8 sowie je vier
//    Profilstunden in den Klassen 9 und 10"; Einführungsphase "zweistündiges Wahlpflichtfach"; Qualifikationsphase
//    "fünfstündig auf erhöhtem Anforderungsniveau (zweites Schwerpunktfach) oder dreistündig auf grundlegendem
//    Anforderungsniveau (Ergänzungsfach)" in the mathematisch-naturwissenschaftlicher Schwerpunkt; "Im Schwerpunktfach
//    Informatik wird grundsätzlich schriftlich geprüft."; "Die schriftlichen Abiturprüfungsaufgaben im Fach Informatik
//    werden zentral vorgegeben."; "es dürfen keine Aufgaben gestellt werden, für die der Einsatz eines Rechners
//    erforderlich ist"; "Die Verwendung eines Taschenrechners oder einer Formelsammlung ist ... nicht zulässig. Als
//    Hilfsmittel ist ein zentral vorgegebenes Informationsblatt in ausgedruckter Form zulässig; darauf werden
//    beispielsweise Operationen auf abstrakten Datentypen und die Notation von Datenbankabfragen zusammenfasst.";
//    five Sek I school types (Hauptschule, Realschule, Oberschule, Gesamtschule, Gymnasium); Oberstufe G9 (11
//    Einführungsphase, 12 and 13 Qualifikationsphase). Kennzahlen: Sek II with Informatik 9 %, Abiturienten with
//    Informatik exam 5 % incl. berufliche Gymnasien (2024/2025); 544 Informatik teachers, 1 % of teachers (2025/2026).
//  - GI national page (FACTS 99): Baden-Württemberg, Niedersachsen and Bremen, "ungefähr jede zwölfte Person".
//  - Niedersächsisches Kultusministerium, "Termine für die Abiturprüfungen 2027", Bek. d. MK v. 28.04.2025
//    (abi/Abiturtermine_2027.pdf, text via PDFKit, fetched 3 Nov 2026): "Ende des vierten Schulhalbjahres der
//    Qualifikationsphase Do, 18.03.2027"; written main dates "Di, 06.04. - Do, 13.05.2027"; oral "Mi, 19.05. - Mo,
//    07.06.2027"; certificates "Do, 01.07. - Sa, 03.07.2027"; "Mi 05.05.2027 Mathematik"; "Fr 16.04.2027 Biologie";
//    "Di 20.04.2027 Physik"; "Fr 30.04.2027 Englisch"; first resit list "Fr 28.05.2027 Sport, Informatik" and
//    "Mo 31.05.2027 Mathematik". The main-date line for Informatik is garbled by the PDF's two-column layout, so its
//    main date is NOT stated on the page.
//  - KMK FER2026_27.pdf (FACTS 277): "Niedersachsen 12.10. - 24.10. 23.12. - 09.01. 01.02. - 02.02. 22.03. - 03.04.
//    07.05. und 18.05. 08.07. - 18.08.".
//  - KMK Schema (FACTS 20): Oberschule named for Bremen and Niedersachsen.
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Niedersachsen 8,004,489; Hannover 522,131.
//  - Data: Landeshauptstadt Hannover, FB Planen und Stadtentwicklung, Bereich Geoinformation, Straßenverzeichnis,
//    "Straßenverzeichnis Januar 2026.xlsx" in Straßenverzeichnis.zip (669,130 bytes, sha256 f37ad234...b4be4f), page
//    states "Lizenz Creative Commons Namensnennung 4.0"; Nutzungsbedingungen: CC BY 4.0 unless marked otherwise, credit
//    "Datenquelle: CC-BY-4.0 ..." Landeshauptstadt Hannover. Downloaded 3 Nov 2026; we exported sheet Tabelle1 from row 5
//    to strassen_2026.tsv (4,534 data rows). GovData offered no allowed-licence Land Niedersachsen file: the seal WFS on
//    mdi.niedersachsen.de answered with a maintenance page, the NSG data only as WMS.
// Our own calculations (scratchpad de/w/L1/ni_all.py = ni_v1 + ni_v2 + ni_v3, python3 -I, run in the data folder):
//  "Streets: 3650", "Containing 'weg': 877", "Ending in 'weg': 860",
//  "False matches: 17 ['Am Graswege', 'August-Holweg-Platz', 'Diesterwegstraße', 'Frenswegengang']",
//  "straße 1531 1522", "weg 877 860", "hof 204 164", "kamp 83 50", "feld 96 28".
// Lesson family: match where the meaning is; "contains" is not "ends with", so list the false hits before you trust a count.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'streets = {}',
  'with open("strassen_2026.tsv", encoding="utf-8") as src:',
  '    for row in csv.DictReader(src, delimiter="\\t"):',
  '        if row["STRNR"]:',
  '            streets[row["STRNR"]] = row["STRASSENNAME"].strip()',
  '',
  'print("Streets:", len(streets))',
  'print("Containing \'weg\':", sum("weg" in n.lower() for n in streets.values()))'
].join('\n');

const V2 = [
  'names = list(streets.values())',
  'ends = [n for n in names if n.lower().endswith("weg")]',
  'inside = [n for n in names if "weg" in n.lower() and not n.lower().endswith("weg")]',
  '',
  'print("Ending in \'weg\':", len(ends))',
  'print("False matches:", len(inside), inside[:4])'
].join('\n');

const V3 = [
  'for word in ["straße", "weg", "hof", "kamp", "feld"]:',
  '    anywhere = sum(word in n.lower() for n in names)',
  '    at_end = sum(n.lower().endswith(word) for n in names)',
  '    print(word, anywhere, at_end)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'Lower Saxony' },
  slug: 'coding-classes-in-lower-saxony',
  code: 'cls',
  accent: '#782445',
  accentRationale: 'Lower Saxony: a heather-and-brick claret #782445, for the Lüneburg Heath in late summer and the red brick of the Land\'s old Hanseatic towns; contrast 7.98 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes in Lower Saxony',
  title: 'Coding Classes in Lower Saxony: Live Online, in English',
  description: 'Coding classes in Lower Saxony (Niedersachsen), live online in English: Informatik from grade 9, the Abitur 2027 dates, holidays and a Hannover street data project.',
  ogDescription: 'Live online coding in English for pupils in Niedersachsen: why compulsory Informatik only starts in grade 9, how the central Informatik Abitur works without a computer, the 2026/27 holidays, and a Python project on Hannover\'s street names.',
  twitterDescription: 'Coding in English for Lower Saxony: Informatik from grade 9, Abitur 2027 dates and a Hannover street-name project.',
  pageName: 'Coding Classes in Lower Saxony',
  webPageDescription: 'A guide for families in Niedersachsen to coding alongside school, built from the GI Informatik-Monitor 2026/27, the Kultusministerium\'s Abitur 2027 notice, the KMK holiday table and Destatis, with an original project on the Hannover street directory.',
  courseDescription: 'Live online coding and Informatik classes in English for pupils in Lower Saxony aged about 10 to 19, from the grades before compulsory Informatik to the Oberstufe, in a class of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Lower Saxony',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#grades', label: 'School' },
    { href: '#abitur', label: 'Abitur' },
    { href: '#project', label: 'Street names' },
    { href: '#calendar', label: 'Dates' }
  ],
  eyebrow: 'Lower Saxony &middot; Niedersachsen &middot; Coding and Informatik',
  h1: 'Coding classes in Lower Saxony',
  lede: 'In Niedersachsen, compulsory Informatik arrives in grade 9. Every pupil meets it then, at every school type, since the 2024/25 school year. Before that, from grade 5 to grade 8, whether a child writes a single program depends on the electives the school offers and the child chooses. This page shows those routes, the Oberstufe and the Abitur dates for 2027, the holidays, and a Python project on the street names of Hannover.',
  secondaryCta: { href: '#project', label: 'Try the street project' },
  wa: 'Hello Modern Age Coders, we live in Lower Saxony and would like coding classes in English for our child. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students around the world &middot; English-medium, one regular mentor',
  spec: [
    ['Ages', 'About 10 to 19'],
    ['Core course', 'Informatik Companion, Klasse 5 to 10'],
    ['Class size', '15 to 20, or private'],
    ['Times', 'After school or Saturday, flexible'],
    ['Mentors', 'Based in India, teaching in English'],
    ['Trial', 'Free first class, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders offers coding classes in Lower Saxony as live online lessons in English for pupils of about 10 to 19, in a class of 15 to 20 or one to one, with a regular mentor who follows the learner\'s pace and accent. Our Informatik Companion course covers the years before Niedersachsen\'s compulsory Informatik begins in grade 9, then supports it.',

  picks: {
    eyebrow: 'Starting points in Niedersachsen',
    h2: 'Three courses for pupils in Lower Saxony',
    lede: 'Matched to the Land\'s timetable: something for grades 5 to 8, something for the Oberstufe, and a contest track.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'CLS / 01', title: 'Informatik Companion', note: 'Grades 5 to 10. Algorithms, Python, data and networks, started early so that grade 9 Informatik is a second look, not a first.' },
      { course: 'informatik-abitur-course-java-python', code: 'CLS / 02', title: 'Informatik for the Oberstufe', note: 'For the Ergänzungsfach or the Schwerpunktfach. Data structures, databases and object orientation, practised on paper as the exam requires.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'CLS / 03', title: 'Informatics contests', note: 'Ages 9 to 19. Our own puzzles in the style of the Informatik-Biber, then algorithm tasks for the Bundeswettbewerb Informatik.' }
    ]
  },

  sections: [
    {
      id: 'grades',
      eyebrow: 'Grades 5 to 10',
      h2: 'When do pupils in Lower Saxony start Informatik at school?',
      lede: 'All pupils in grade 9; some much earlier, depending on school type and choices. The detail below is from the Informatik-Monitor 2026/27 of the Gesellschaft für Informatik, which reads the Land\'s ordinances. We are independent of both the GI and the Kultusministerium.',
      body: [
        { kind: 'p', html: 'Since 2024/25, Informatik has been a compulsory subject in grades 9 and 10 at all general school types in Niedersachsen. Lower Saxony has five school types in the Sekundarstufe I, after four years of Grundschule: Hauptschule, Realschule, Oberschule, Gesamtschule (integrated or cooperative) and Gymnasium. Each offers earlier Informatik in its own way.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik before grade 9 in Niedersachsen, by school type', head: ['School type', 'Optional Informatik before the compulsory years'], rows: [
          ['Hauptschule', 'Two-hour Wahlpflicht elective possible in grades 6 to 10'],
          ['Realschule and Oberschule', 'Two-hour elective in grades 6 to 10; in grades 9 and 10 a four-hour Schwerpunkt instead'],
          ['Kooperative Gesamtschule', 'Two hours a week from grade 7'],
          ['Integrierte Gesamtschule', 'Two hours a week from grade 6, as Wahl or Wahlpflicht'],
          ['Gymnasium', 'A two-hour Wahlfach, or in the profile route three hours in grade 8 and four in grades 9 and 10']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Niedersachsen page, read 2 November 2026. "Possible" means the school may offer it; it does not mean every school does.' },
        { kind: 'two', mt: true,
          leftH3: 'The four-year gap',
          left: [
            'Put the table together and a pattern appears. A pupil at a Gymnasium that runs only the standard timetable, who does not pick the Wahlfach, can reach grade 9 without a timetabled Informatik lesson.',
            'That is the gap our Companion course is designed for: two live lessons a week from grade 5 or 6, so that by grade 9 the pupil already writes loops, reads data and can explain an algorithm in plain words.'
          ],
          rightH3: 'Few take it further',
          right: [
            'The monitor\'s national comparison names Niedersachsen, with Baden-Württemberg and Bremen, among the Länder where only about one Oberstufe pupil in twelve takes Informatik. On its Niedersachsen page it gives 9 percent of Sekundarstufe II pupils in 2024/25.',
            'In 2025/26 the Land had 544 qualified Informatik teachers, about 1 percent of its teachers.'
          ] }
      ]
    },
    {
      id: 'abitur',
      tint: 'tint',
      eyebrow: 'Oberstufe and Abitur',
      h2: 'How is the Informatik Abitur set in Lower Saxony, and when is it in 2027?',
      lede: 'Centrally, on paper, with almost nothing on the desk. The Kultusministerium has also published the full Abitur calendar for 2027.',
      body: [
        { kind: 'two',
          leftH3: 'Routes through the Oberstufe',
          left: [
            'Niedersachsen\'s Oberstufe is nine-year: grade 11 is the Einführungsphase, grades 12 and 13 the Qualifikationsphase, at the Gymnasium and the Gesamtschule. In grade 11 Informatik can be a two-hour elective.',
            'In the Qualifikationsphase, within the maths and science Schwerpunkt, it can run for five hours at raised level as the second Schwerpunktfach, or three hours at basic level as an Ergänzungsfach.'
          ],
          rightH3: 'What the exam allows',
          right: [
            'The monitor states that written Abitur tasks in Informatik are set centrally and that no task may require a computer. A calculator and a formula collection are not allowed either.',
            'The one aid is a centrally issued, printed information sheet that summarises, for example, operations on abstract data types and the notation for database queries. Pupils have to know everything else.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Grade 11.</strong> Take Informatik as the two-hour elective in the Einführungsphase, if the school offers it.',
          '<strong>Choose the Schwerpunkt.</strong> In the maths and science Schwerpunkt, Informatik can be the second Schwerpunktfach for five hours, examined in writing.',
          '<strong>Or the Ergänzungsfach.</strong> Taken for three hours from the Einführungsphase on, it can be the fourth, written exam subject or the fifth, oral one.',
          '<strong>Prepare for paper.</strong> No computer and no calculator: practise reading and writing code by hand, with only the information sheet beside you.'
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Abitur 2027 in Niedersachsen, selected dates', head: ['Date', 'What happens'], rows: [
          ['Thursday 18 March 2027', 'End of the fourth half-year of the Qualifikationsphase'],
          ['6 April to 13 May 2027', 'Written exams, main dates'],
          ['Friday 16 April 2027', 'Biology'],
          ['Tuesday 20 April 2027', 'Physics'],
          ['Friday 30 April 2027', 'English'],
          ['Wednesday 5 May 2027', 'Mathematics'],
          ['19 May to 7 June 2027', 'Oral exams'],
          ['Friday 28 May 2027', 'First resit date for Informatik and Sport'],
          ['1 to 3 July 2027', 'Abitur certificates handed out']
        ] },
        { kind: 'source', html: 'Source: Niedersächsisches Kultusministerium, Termine für die Abiturprüfungen 2027, notice of 28 April 2025, read 3 November 2026. The notice also lists every other subject; the main date for Informatik is in that document, and the school confirms it to its pupils.' },
        { kind: 'p', mt: true, html: 'We prepare pupils beside their school course and never instead of it. The school\'s teaching and the central exam decide the result; no German grade or qualification comes from us, and every practice task we use is written by our own mentors.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'English-medium',
      h2: 'Why are the lessons in English, and is that a problem?',
      lede: 'The lessons are live and they are in English, all of them. We have no German-language classes, and it is fairer to say so at the top of the page than at the end of a trial.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Who it suits', p: 'Families from abroad who work in Hannover, Braunschweig or Wolfsburg, pupils at bilingual schools, and German pupils who want their English to grow while they learn to program. For each, the subject comes first and the language rides along.' },
          { h3: 'How mentors adapt', p: 'A mentor slows down, rephrases, writes key words on screen, and learns how the pupil speaks. German terms such as Ergänzungsfach or Schwerpunkt are fine in a question; the answer comes back in clear English.' },
          { h3: 'Why it works for code', p: 'Python, Java and SQL use the same English keywords everywhere. A pupil who learns "while" and "return" with us meets exactly those words in a Niedersachsen classroom.' }
        ] },
        { kind: 'p', mt: true, html: 'The mentors are based in India. The standard is the same wherever the learner sits: the same mentor every week, the pupil at the controls, and every answer reasoned out rather than copied, whether from a worked solution or from an AI tool.' }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A Hannover project',
      h2: 'How many Hannover streets are a "Weg"? A Python project on street names',
      lede: 'The Land capital publishes its official street directory as open data. Our pupils use it to learn why "contains" and "ends with" are different questions, and why a count is only finished when you have looked at the cases it got wrong.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Landeshauptstadt Hannover\'s Bereich Geoinformation publishes the Straßenverzeichnis, the complete list of the city\'s streets, paths and squares with their street keys, under Creative Commons Namensnennung 4.0. We downloaded the January 2026 edition on 3 November 2026.',
            'The spreadsheet has one row per stretch of street, so long streets appear more than once. We exported the main sheet to a file called strassen_2026.tsv and keep one name per street key, STRNR.'
          ],
          rightH3: 'The question',
          right: [
            'German street names end with what they are: -straße, -weg, -platz, -hof, -kamp. How many of Hannover\'s streets are a Weg?',
            'The quick program asks whether the letters "weg" appear in the name. It runs, and it gives a number. The second program asks whether the name ends in "weg", and gets a smaller one. The difference is the lesson.'
          ] },
        { kind: 'code', label: 'Version 1: one name per street, then "contains"', lang: 'Python', code: V1, note: 'It prints: <code>Streets: 3650</code> and <code>Containing \'weg\': 877</code>.' },
        { kind: 'code', label: 'Version 2 (continues Version 1): "ends with", and the leftovers', lang: 'Python', code: V2, note: 'It prints: <code>Ending in \'weg\': 860</code> and <code>False matches: 17 [\'Am Graswege\', \'August-Holweg-Platz\', \'Diesterwegstraße\', \'Frenswegengang\']</code>.' },
        { kind: 'p', mt: true, html: 'Seventeen streets contain the letters without being a Weg. Diesterwegstraße is a street named after a person; August-Holweg-Platz is a square; Am Graswege has the old dative ending. None of them is wrong data. The first program simply asked a looser question than the one we meant.' },
        { kind: 'code', label: 'Version 3 (continues Version 2): five endings compared', lang: 'Python', code: V3, note: 'It prints: <code>straße 1531 1522</code>, <code>weg 877 860</code>, <code>hof 204 164</code>, <code>kamp 83 50</code> and <code>feld 96 28</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Hannover street names, January 2026 edition: "contains" against "ends with" (our count)', head: ['Word', 'Names containing it', 'Names ending in it', 'Difference'], rows: [
          ['straße', '1,531', '1,522', '9'],
          ['weg', '877', '860', '17'],
          ['hof', '204', '164', '40'],
          ['kamp', '83', '50', '33'],
          ['feld', '96', '28', '68']
        ] },
        { kind: 'source', html: 'Data: Landeshauptstadt Hannover, Bereich Geoinformation, Straßenverzeichnis, January 2026 edition, CC BY 4.0 (Datenquelle: Landeshauptstadt Hannover), downloaded 3 November 2026. One name per street key; all counts are ours.' },
        { kind: 'p', mt: true, html: '"feld" is the striking row: only 28 of the 96 names that contain it end with it. Many of the other 68 are a -straße or a -weg with a field name in front, such as Lerchenfeldstraße or Klaterfeldweg, and a good number use the old form -felde, as in Im Roggenfelde. A pupil who reports 96 fields has counted something real, just not fields.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Grades 5 and 6, no computer.</strong> Write ten street names from your own town. Sort them by their last word or ending. Which endings could fool someone who only looks for letters?',
          '<strong>Grades 7 and 8, Python.</strong> Run Version 1 and Version 2, then print all seventeen false matches and sort them into groups: person, place, other.',
          '<strong>Grades 9 and 10.</strong> "Straße der Nationen" contains "straße" but does not end with it. Write a test list of awkward names and check that your function treats each one as you intend.',
          '<strong>Oberstufe.</strong> Rewrite the check as a regular expression that matches "weg" only at the end of a word, and compare its count with Version 2.'
        ] }
      ]
    },
    {
      id: 'calendar',
      tint: 'tint',
      eyebrow: 'School year 2026/27',
      h2: 'What are the Lower Saxony school holidays in 2026/27?',
      lede: 'These are the Land\'s holiday dates, first and last day. Lessons can carry on through them or pause, as the family prefers.',
      body: [
        { kind: 'table', numCols: [], caption: 'School holidays in Niedersachsen, 2026/27', head: ['Holiday', 'Dates'], rows: [
          ['Autumn', '12 to 24 October 2026'],
          ['Christmas', '23 December 2026 to 9 January 2027'],
          ['Winter days', '1 and 2 February 2027'],
          ['Easter', '22 March to 3 April 2027'],
          ['Single days', '7 May and 18 May 2027'],
          ['Summer', '8 July to 18 August 2027']
        ] },
        { kind: 'source', html: 'Source: Kultusministerkonferenz, holiday overview for the school year 2026/2027, dated 9 October 2025. Summer dates are agreed by the KMK in advance; the Land fixes the others.' },
        { kind: 'two', mt: true,
          leftH3: 'A large Land',
          left: [
            'Destatis puts the population of Niedersachsen at 8,004,489 on 31 December 2024, and that of Hannover, the Land capital, at 522,131. The other cities above 100,000 are Braunschweig, Oldenburg, Osnabrück, Wolfsburg, Göttingen and Salzgitter.',
            'From the islands to the Harz, a pupil joins the same live class online.'
          ],
          rightH3: 'The spring of an Abitur year',
          right: [
            'For an Abitur candidate in 2027, teaching in the Qualifikationsphase ends on 18 March, the Easter holidays run from 22 March to 3 April, and the written exams begin on 6 April.',
            'Those two weeks of Easter holidays are the natural place for a timed practice paper on paper, exactly as the real exam will be.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time would classes be for a family in Lower Saxony?',
      lede: 'Afternoon classes in Niedersachsen are evening classes in India. The rows are examples of the time difference; you choose the actual slot when you book.',
      body: [
        { kind: 'table', numCols: [], caption: 'Lower Saxony time against India time', head: ['Niedersachsen', 'India, until 28 March 2027', 'India, from 28 March 2027'], rows: [
          ['14:15', '18:45', '17:45'],
          ['17:45', '22:15', '21:15'],
          ['Saturday 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz Germany runs on MEZ, one hour ahead of UTC, in winter and MESZ, two hours ahead, in summer. The clocks changed back on 25 October 2026 and move forward on 28 March 2027; India, at UTC+5:30 with no clock change, is therefore four and a half hours ahead now and three and a half in summer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Progress from grade 5 to the Abitur',
    lede: 'Five stages we use ourselves to place a pupil in Lower Saxony and to describe progress to parents.',
    table: { caption: 'Informatik stages (ours)', head: ['Stage', 'Typical grade', 'What the pupil can do'], rows: [
      ['1. Precise steps', '5 to 6', 'Describe a process so exactly that someone else can follow it'],
      ['2. First code', '6 to 7', 'Loops, conditions and variables in Python'],
      ['3. Text and lists', '7 to 8', 'Search and filter lists of words, and test the awkward cases'],
      ['4. Data and queries', '9 to 10', 'Read a file, count with conditions, write simple SQL'],
      ['5. Paper programming', '11 to 13', 'Write and trace a data structure by hand, as the Abitur requires']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the street-name project. A child who asks "what exactly did I count?" asks it of every number later on.',
      'Each report names one new skill and the next target.'
    ] },
    right: { h3: 'For pupils', ps: [
      'A count is not finished until you have read the cases it got wrong.',
      'Say exactly what you mean before you write the condition.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for families in Niedersachsen',
    lede: 'Every course is taught live in English, in a class or privately, by one regular mentor.',
    bands: [
      { num: 'I', h3: 'Grades 3 to 6', sub: 'Ages 7 to 12', courses: [
        { code: 'CLS / A / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'A first finished game in a few months, from zero.' },
        { code: 'CLS / A / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Real typing from age 9 or so: drawings with turtle graphics, then little AI experiments.' },
        { code: 'CLS / A / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI learns and fails, explained without adult chatbot accounts.' }
      ] },
      { num: 'II', h3: 'Grades 7 to 10', sub: 'Ages 12 to 16', courses: [
        { code: 'CLS / B / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'From the first print statement to classes and files.' },
        { code: 'CLS / B / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for Teens', blurb: 'Interactive pages and small browser games.' },
        { code: 'CLS / B / 03', slug: 'mysql-mastery-for-teens', title: 'SQL for Teens', blurb: 'The query notation the Abitur information sheet assumes you know.' }
      ] },
      { num: 'III', h3: 'Oberstufe', sub: 'Ages 16 to 19', courses: [
        { code: 'CLS / C / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Classes, inheritance and collections, written cleanly.' },
        { code: 'CLS / C / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving and algorithms', blurb: 'Abstract data types and their operations, traced by hand.' },
        { code: 'CLS / C / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik in English', blurb: 'For the maths paper on Wednesday 5 May 2027.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'What a week of classes looks like for a pupil in Niedersachsen',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Mid afternoon, once school and lunch are done.' },
      { time: 'Saturday', l: 'Around midday, a relaxed slot for longer projects.' },
      { time: '1-on-1', l: 'Whatever time the family and mentor agree.' }
    ],
    cells: [
      { h3: 'Two live lessons', p: 'Two classes a week, an hour each, with the same mentor.' },
      { h3: 'Paced in English', p: 'Clear speech, rephrased when needed, German terms welcome.' },
      { h3: 'Pupil types', p: 'The pupil writes every line; the mentor asks why.' },
      { h3: 'Mapped to the Land', p: 'Topics placed against Niedersachsen\'s grades and exams.' },
      { h3: 'Notes home', p: 'A short update for parents on what changed.' },
      { h3: 'Private or class', p: 'A class of 15 to 20, or a mentor to yourself.' }
    ]
  },

  projectsH2: 'Projects our older students have made',
  projectsLede: 'Some finished work by students further along; more is on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents and students wrote on Google, word for word.',

  fees: {
    h2: 'Fees for families in Lower Saxony',
    lede: 'Each month\'s fee pays for eight live classes, and you can stop at the end of any month. Amounts are displayed in euro using the European Central Bank reference rate, but the charge goes through in US dollars, so your bank makes the conversion and the booked amount may differ a little.',
    free: ['A free first class', 'A small problem and a first program', 'No card needed'],
    group: ['A class of 15 to 20 at a similar stage', 'The same mentor each week', 'Two classes a week', 'Monthly, no long contract'],
    one: ['One pupil and one mentor', 'Your own topics and speed', 'Planned around the Abitur calendar']
  },

  faq: {
    eyebrow: 'Families in Niedersachsen ask',
    h2: 'Coding classes in Lower Saxony: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and in English only. Mentors adapt their speed and get used to each learner\'s accent, and they understand German school words such as Ergänzungsfach when a pupil uses them.' },
      { q: 'When does Informatik become compulsory in Lower Saxony?', a: 'In grades 9 and 10. The Gesellschaft für Informatik\'s Informatik-Monitor 2026/27 states that since 2024/25 Informatik has been a compulsory subject in grades 9 and 10 at all general school types in Niedersachsen. Earlier Informatik depends on school type and electives.' },
      { q: 'Can my child take Informatik before grade 9?', a: 'Often, if the school offers it. Hauptschule, Realschule and Oberschule may offer a two-hour elective from grade 6, Gesamtschulen from grade 6 or 7, and Gymnasien a two-hour Wahlfach or a profile route from grade 8.' },
      { q: 'Is a computer or calculator allowed in the Informatik Abitur?', a: 'No. According to the Informatik-Monitor, the written Informatik tasks are set centrally, no task may need a computer, and calculators and formula collections are not allowed. The one aid is a printed information sheet issued centrally.' },
      { q: 'When is the maths Abitur in Niedersachsen in 2027?', a: 'The Kultusministerium lists the written maths exam on Wednesday 5 May 2027. The written exams run from 6 April to 13 May 2027, and the first resit date for maths is 31 May 2027.' },
      { q: 'What time are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. India is 4 hours 30 minutes ahead of German time in winter and 3 hours 30 minutes in summer.' },
      { q: 'Will this improve my child\'s school grade?', a: 'We cannot promise a grade, and German grades and certificates are not ours to give. We teach alongside school; the school course and the central exams are what count.' },
      { q: 'Who are the mentors?', a: 'Mentors based in India who teach live over video, in English. Your child keeps the same mentor from week to week.' },
      { q: 'Is my 10 year old too young?', a: 'No. Ten is a good age to start with Python or Scratch, four years before compulsory Informatik begins in grade 9.' },
      { q: 'How are fees paid?', a: 'Monthly. You see the fees in euro at the European Central Bank reference rate; the payment is taken in US dollars and your bank converts it. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Lower Saxony.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page in one place.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik in all sixteen Länder', p: 'Where Niedersachsen sits nationally.' },
      { href: '/abitur-computer-science-in-english', label: 'Informatik Abitur in English', p: 'What the Oberstufe course covers.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Our German-language page on Informatik help.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy', p: 'Our approach to AI tools.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'The live lessons in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the free class the mentor sets a small problem, watches how your child approaches it, and gets a feel for their English. You leave with a suggested course and class.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explains the lessons, and <a class="ag-inline-link" href="/courses">all courses</a> has every syllabus.',
    note: 'Live online, mentors in India, English only. WhatsApp is the quickest way to ask us, in English.',
    formNote: 'Free, no card, nothing to sign.'
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
    bottomRight: 'Contains is not ends with'
  },

  personalityCss: `
.ag-root.ag-cls .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-cls .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-cls .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-cls .ag-table caption { text-align: left; }
.ag-root.ag-cls .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Niedersachsen and national pages); Niedersächsisches Kultusministerium, Termine für die Abiturprüfungen 2027 (28 April 2025); KMK holidays 2026/27 and Schema; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz. Data: Landeshauptstadt Hannover, Straßenverzeichnis January 2026, CC BY 4.0.',
    localProject: 'Hannover street directory, January 2026: one name per street key (3,650), "weg" contained in 877 names but ending 860, 17 false matches such as Diesterwegstraße; five endings compared, with feld at 96 against 28. Lesson family: contains is not ends with.',
    requiredMentions: ['strassen_2026.tsv', 'Streets: 3650', "Containing 'weg': 877", "Ending in 'weg': 860", 'feld 96 28', 'Wednesday 5 May 2027', 'centrally issued, printed information sheet', 'Contains is not ends with'],
    sources: [
      { claim: 'Niedersachsen Informatik rules, Oberstufe, Abitur aids and figures.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/niedersachsen' },
      { claim: 'About one in twelve Oberstufe pupils take Informatik in BW, Niedersachsen and Bremen.', url: 'https://informatik-monitor.de/' },
      { claim: 'Abitur 2027 dates.', url: 'https://www.mk.niedersachsen.de/download/99040/Abiturtermine_2027.pdf' },
      { claim: 'Holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Populations 31.12.2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/02-bundeslaender.xlsx?__blob=publicationFile' },
      { claim: 'Hannover street directory and CC BY 4.0 licence.', url: 'https://www.hannover.de/Leben-in-der-Region-Hannover/Verwaltungen-Kommunen/Die-Verwaltung-der-Landeshauptstadt-Hannover/Dezernate-und-Fachbereiche-der-LHH/Stadtentwicklung-und-Bauen/Fachbereich-Planen-und-Stadtentwicklung/Geoinformation/Open-GeoData/Stra%C3%9Fenverzeichnis' }
    ],
    rejectedClaims: [
      'The main written date for Informatik in 2027: the PDF line is garbled by its layout, so only the resit date (28 May 2027) is given.',
      'Weekly hours of the compulsory grade 9 and 10 subject: not stated in the line quoted, so none given.',
      'Gender shares from the monitor: left out under the no gender statistics rule.',
      'Any affiliation with the Kultusministerium, the GI, the KMK, the city of Hannover or a school: none.'
    ]
  }
};
