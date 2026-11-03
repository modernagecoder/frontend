'use strict';
// Coding and maths classes in Hamburg (ag- Land page for the city-state, Germany cluster P4 row DE089, alloc code cmh,
// accent #1D4841). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief 2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent.
// Spine: Hamburg is a Land and a city at once. Its rules for both subjects of the page: four compulsory Informatik
// hours in grades 7 to 10 at Stadtteilschule and Gymnasium since 2025/26, a central written Informatik Abitur with no
// computer work, and central written maths exams at ESA, MSA and Abitur level on published 2027 dates. Data project:
// the LSBG register of road and foot bridges, where rows are parts and a bridge is a key.
// Sources (read raw; copies under ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-and-maths-classes-in-hamburg-germany/):
//  - GI Informatik-Monitor 2026/27, Hamburg page (infmon-hamburg/09e5d2a0.txt; FACTS 53, 76): "An Stadtteilschulen und
//    Gymnasien sind seit dem Schuljahr 2025/26 vier Wochenstunden Informatik verpflichtend. Über die Verteilung der vier
//    Stunden auf die Jahrgangsstufen 7 bis 10 entscheiden die Schulen."; Stadtteilschule grade 11 elective "im Umfang von
//    insgesamt zwei bis vier Wochenstunden"; Q-phase "zweistündig im Wahlpflichtbereich auf grundlegendem Niveau oder ...
//    als mindestens vierstündiges profilgebendes Fach auf erhöhtem Anforderungsniveau bzw. als zweistündiges
//    profilbegleitendes Fach"; "Die Schriftlichen Abiturprüfungen für das grundlegende und das erhöhte
//    Anforderungsniveau in Hamburg werden zentral entwickelt und sind landesweit einheitlich. Derzeit sind in der
//    schriftlichen Abiturprüfung im Fach Informatik keine praktischen Anteile zulässig."; aids "Taschenrechner (nicht
//    programmierfähig, nicht grafikfähig) und Rechtschreibwörterbuch"; "Naturwissenschaften/Technik" not counted
//    "aufgrund des geringen Anteils informatischer Inhalte"; Gymnasium G8 (grade 10 Einführungsphase, 11 and 12
//    Qualifikationsphase), Stadtteilschule Oberstufe 11 to 13; Grundschule 1 to 4. Kennzahlen: Sek II with Informatik
//    22 %, Abiturienten with Informatik as exam subject 2 % (2024/2025); 610 Informatik teachers, 5 % of teachers
//    (2025/2026).
//  - Behörde für Schule, Familie und Berufsbildung, "Termine für die Abschlussarbeiten 2027", Stand 09. September 2026
//    (bsb/termine-schuljahr-2027.pdf, text via PDFKit): "Abitur Regeltermine 13.04. bis 05.05.2027", "Nachschreibtermine
//    25.05. bis 31.05.2027"; ESA "Deutsch 08.04.2027", "Mathematik 12.04.2027"; MSA "Deutsch 09.04.2027",
//    "Mathematik 13.04.2027". hamburg.de Zentrale Prüfungen: ESA and MSA in German and maths with "zentral gestellten
//    Prüfungsaufgaben".
//  - IQB, Beschreibung der Struktur der Aufgaben (FACTS 34 to 38): Part A without aids, Part B with aids; raised level
//    300 minutes, basic level 255 minutes. IQB (FACTS 32): each Land's commission decides which pool tasks it uses.
//  - KMK FER2026_27.pdf (FACTS 285): "Hamburg 19.10. - 30.10. 21.12. - 01.01. 29.01. 01.03. - 12.03. 07.05. - 14.05.";
//    summer 2027 from the KMK Sommerferienregelung (FACTS 262): "Hamburg 24.07. - 03.09. 09.07. - 19.08. 01.07. - 11.08.".
//  - KMK Schema (FACTS 20): Stadtteilschule is Hamburg's school with three tracks.
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Hamburg 1,862,565.
//  - Blocked: epub.sub.uni-hamburg.de returned HTTP 403 for the Abitur A-Heft 2027 PDF; stopped, not retried.
//  - Data: Landesbetrieb Straßen, Brücken und Gewässer (LSBG) via Transparenzportal Hamburg, "Brücken und sonstige
//    Ingenieurbauwerke Hamburg", OGC API https://api.hamburg.de/datasets/v1/brueckenbauwerke, collections
//    strassenbruecken (881 features, sha256 055f9a55...baaff9) and fussgaengerbruecken (616 features, sha256
//    435500ef...93100d), licence Datenlizenz Deutschland Namensnennung 2.0 (GovData record
//    brucken-und-sonstige-ingenieurbauwerke-hamburg398f3). Description: "Bestehende Bauwerke im Zuständigkeitsbereich des
//    LSBG". Downloaded 3 Nov 2026.
// Our own calculations (scratchpad de/w/L1/hh_v1.py to hh_v3.py, python3 -I, run in the data folder):
//  v1 prints "strassenbruecken rows: 881" and "fussgaengerbruecken rows: 616".
//  v2 prints "strassenbruecken bridges: 753", "fussgaengerbruecken bridges: 591", "Bridges in both files: 1344".
//  v3 prints "Road bridges with a year: 725" and "Oldest: 1802 Median: 1976".
//  Exploration: mean of the per-bridge earliest years 1969.5; 29 road bridges dated before 1900; the 1802 row is named Franzosenbrücke; the Traute-Lafrenz-Brücke has three parts (east footway, middle,
//  west footway); 31 road-bridge rows have no year.
// Lesson family: decide what one thing is before you count it; rows are parts, and a key turns parts into objects.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import json',
  '',
  'for name in ["strassenbruecken", "fussgaengerbruecken"]:',
  '    with open(name + ".json", encoding="utf-8") as src:',
  '        parts = json.load(src)["features"]',
  '    print(name, "rows:", len(parts))'
].join('\n');

const V2 = [
  'import json',
  '',
  'bridges = set()',
  'for name in ["strassenbruecken", "fussgaengerbruecken"]:',
  '    with open(name + ".json", encoding="utf-8") as src:',
  '        parts = json.load(src)["features"]',
  '    numbers = {p["properties"]["internebauwerksnummer"] for p in parts}',
  '    print(name, "bridges:", len(numbers))',
  '    bridges |= {(name, n) for n in numbers}',
  '',
  'print("Bridges in both files:", len(bridges))'
].join('\n');

const V3 = [
  'import json',
  'from statistics import median',
  '',
  'with open("strassenbruecken.json", encoding="utf-8") as src:',
  '    parts = json.load(src)["features"]',
  '',
  'first_year = {}',
  'for p in parts:',
  '    props = p["properties"]',
  '    year = props.get("baujahr")',
  '    if not year:',
  '        continue',
  '    key = props["internebauwerksnummer"]',
  '    first_year[key] = min(int(year), first_year.get(key, 9999))',
  '',
  'years = sorted(first_year.values())',
  'print("Road bridges with a year:", len(years))',
  'print("Oldest:", years[0], "Median:", median(years))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'Hamburg: coding and maths' },
  slug: 'coding-and-maths-classes-in-hamburg-germany',
  code: 'cmh',
  accent: '#1D4841',
  accentRationale: 'Hamburg, coding and maths: a deep harbour green #1D4841, the oxidised copper of the city\'s old roofs and bridge railings over the Fleete; contrast 8.29 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding and maths classes in Hamburg',
  title: 'Coding and Maths Classes in Hamburg: Live Online, in English',
  description: 'Coding and maths classes in Hamburg, live online in English: Informatik since 2025/26, the 2027 MSA and Abitur exam dates, holidays and a bridge data project.',
  ogDescription: 'Live online coding and maths in English for Hamburg pupils: four compulsory Informatik hours in grades 7 to 10, central maths exams on fixed 2027 dates, the school holidays, and a project that counts the city\'s bridges properly.',
  twitterDescription: 'Coding and maths in English for Hamburg: Informatik rules, 2027 exam dates and a bridge-counting data project.',
  pageName: 'Coding and Maths Classes in Hamburg',
  webPageDescription: 'A guide for Hamburg families to coding and maths alongside school, built from the GI Informatik-Monitor 2026/27, the school authority\'s 2027 exam dates, IQB and KMK documents and Destatis, with an original project on the LSBG bridge register.',
  courseDescription: 'Live online coding and maths classes in English for Hamburg pupils aged about 10 to 19: Informatik for grades 7 to 10, maths for the MSA and Abitur, in a class of 15 to 20 or one to one with a regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Hamburg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#informatik', label: 'Informatik' },
    { href: '#maths', label: 'Maths' },
    { href: '#project', label: 'Bridges' },
    { href: '#holidays', label: 'Holidays' }
  ],
  eyebrow: 'Hamburg &middot; Coding and maths &middot; Ages 10 to 19',
  h1: 'Coding and maths classes in Hamburg',
  lede: 'Hamburg is a Land and a city at once, so one school authority sets the rules for every pupil from Blankenese to Bergedorf. Since 2025/26 those rules include four compulsory hours of Informatik, and the maths exams at the end of grade 10 and in the Abitur are written centrally on dates already fixed for 2027. This page covers both subjects, the holidays, and a project that asks a deceptively simple question: how many bridges does the register hold?',
  secondaryCta: { href: '#project', label: 'Count the bridges' },
  wa: 'Hello Modern Age Coders, we are in Hamburg and are looking for coding or maths classes in English. Could we book a free first class?',
  heroNote: 'Teaching online since 2020 &middot; 10,000+ students worldwide &middot; coding and maths, in English',
  spec: [
    ['Ages', '10 to 19, by school stage'],
    ['Subjects', 'Informatik, coding, school maths'],
    ['Group size', '15 to 20 pupils, or one to one'],
    ['Hamburg times', 'Afternoons and Sunday mornings, flexible'],
    ['Teachers', 'Mentors based in India'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders runs coding and maths classes for Hamburg pupils of about 10 to 19, live online and in English; each learner keeps the same mentor, who sets the speed and gets used to the accent. Pupils join a class of 15 to 20 or learn one to one. Coding follows Hamburg\'s compulsory Informatik in grades 7 to 10; maths prepares for the central MSA and Abitur papers of 2027.',

  picks: {
    eyebrow: 'Where Hamburg pupils start',
    h2: 'Three courses for Hamburg pupils',
    lede: 'One for Informatik in the middle years, one for Abitur maths, and one for pupils who enjoy hard problems in either subject.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'CMH / 01', title: 'Informatik alongside grades 7 to 10', note: 'For 10 to 16 year olds. Algorithms, Python, data and networks, so the four compulsory hours land on prepared ground.' },
      { course: 'abitur-mathematics-course-in-english', code: 'CMH / 02', title: 'Abitur maths in English', note: 'For the Oberstufe. Analysis, geometry and stochastics in the two-part exam format, with our own practice papers.' },
      { course: 'mathematik-olympiade-and-kaenguru-training-course', code: 'CMH / 03', title: 'Olympiad and Känguru training', note: 'From 8 to 18. Original problems by Klassenstufe for pupils who want maths beyond the syllabus.' }
    ]
  },

  sections: [
    {
      id: 'informatik',
      eyebrow: 'Informatik in Hamburg',
      h2: 'Is Informatik compulsory at Hamburg schools?',
      lede: 'Yes, since the 2025/26 school year, at both school types of the Sekundarstufe I. The detail is drawn from the 2026/27 edition of the Informatik-Monitor, a survey of Land ordinances by the Gesellschaft für Informatik; Modern Age Coders is independent of it and of the school authority.',
      body: [
        { kind: 'two',
          leftH3: 'Four hours since 2025/26',
          left: [
            'At Stadtteilschulen and Gymnasien, four weekly hours of Informatik have been compulsory since 2025/26. The schools decide how to place those four hours across grades 7 to 10, and they may add Informatik as a Wahlpflicht elective on top.',
            'The monitor is careful about what it does not count: the subject Naturwissenschaften/Technik in grades 5 and 6 contains an Informatik strand, but too little of it to be treated as Informatik teaching.'
          ],
          rightH3: 'Two school types, two routes',
          right: [
            'After four years of Grundschule, Hamburg pupils go to a Stadtteilschule or a Gymnasium; the KMK names the Stadtteilschule as Hamburg\'s school offering all three tracks. At the Gymnasium the Abitur comes after grade 12, with grade 10 as the Einführungsphase. At a Stadtteilschule with an Oberstufe it comes after grade 13.',
            'At the Stadtteilschule, Informatik can be an elective in grade 11 for two to four hours in total.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik in the Hamburg Oberstufe', head: ['Option', 'Level', 'Weekly hours', 'Exam'], rows: [
          ['Wahlpflicht elective', 'Basic', 'Two', 'Not stated by the monitor'],
          ['Profile-accompanying subject', 'Basic', 'Two', 'Written, oral or presentation exam; a besondere Lernleistung can replace it'],
          ['Profile-giving subject', 'Raised', 'At least four', 'Written exam']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Hamburg page, read 2 November 2026. The written Informatik Abitur at both levels is developed centrally and is the same across Hamburg; at present no practical computer work is allowed in it, and the permitted aids are a non-programmable, non-graphing calculator and a spelling dictionary.' },
        { kind: 'p', mt: true, html: 'That last rule matters for how a pupil prepares. A Hamburg Abitur candidate writes and reads programs on paper, without a compiler to point out the mistakes. We train exactly that: predicting what code does before running it, tracing variables by hand, and writing a class or an algorithm cleanly in one go.' },
        { kind: 'p', html: 'The monitor\'s figures for Hamburg are higher than in most Länder: in 2024/25 about 22 percent of Sekundarstufe II pupils took Informatik and about 2 percent of Abitur candidates had it as an exam subject. In 2025/26 Hamburg had 610 qualified Informatik teachers, about 5 percent of all teachers.' }
      ]
    },
    {
      id: 'maths',
      tint: 'tint',
      eyebrow: 'Maths exams in 2027',
      h2: 'When are the central maths exams in Hamburg in 2027?',
      lede: 'Hamburg sets its written maths exams centrally at three points in a school career. The school authority has published the 2027 dates.',
      body: [
        { kind: 'table', numCols: [], caption: 'Central written exams in Hamburg, 2027', head: ['Exam', 'German', 'Mathematics'], rows: [
          ['Erster allgemeinbildender Schulabschluss (ESA)', '8 April 2027', '12 April 2027'],
          ['Mittlerer Schulabschluss (MSA)', '9 April 2027', '13 April 2027'],
          ['Abitur, regular dates', 'Within 13 April to 5 May 2027', 'Within 13 April to 5 May 2027'],
          ['Abitur, resit dates', 'Within 25 to 31 May 2027', 'Within 25 to 31 May 2027']
        ] },
        { kind: 'source', html: 'Source: Behörde für Schule, Familie und Berufsbildung Hamburg, Termine für die Abschlussarbeiten 2027, as of 9 September 2026, read 3 November 2026. The document gives the Abitur as a window, not by subject. Resits for ESA and MSA are on 19 May 2027 (German) and 21 May 2027 (maths).' },
        { kind: 'two', mt: true,
          leftH3: 'Grade 9 and 10: ESA and MSA',
          left: [
            'Hamburg\'s school authority states that the ESA and the MSA include a final exam in German and maths with centrally set tasks. For a grade 10 pupil in spring 2027, that means one maths paper on Tuesday 13 April, a month after Hamburg\'s spring break ends.',
            'Central tasks reward steady skills: fractions and percentages, linear functions, equations, geometry with Pythagoras, and reading data from charts. Gaps from grade 7 show up here, which is why we start by testing the basics.'
          ],
          rightH3: 'Abitur maths: the two-part format',
          right: [
            'Across the Länder, the IQB\'s common pool describes a maths exam in two parts: Part A without any aids, Part B with them. At the raised level the paper lasts 300 minutes including choice time, at the basic level 255 minutes. Each Land\'s commission decides which pool tasks it uses and how many of its own it adds.',
            'In our maths classes, Part A is the hard part to practise, because it needs fluent algebra and calculus with nothing but a pen.'
          ] },
        { kind: 'p', mt: true, html: 'Our lessons sit beside school, never in its place. Only Hamburg\'s exams and the school\'s marks count towards a certificate, which we neither give nor imitate, and our practice problems are written by us, never copied from published exam papers.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the lessons really in English, and how does that work?',
      lede: 'Yes, completely. Mentors teach live in English, and no lesson is given in German.',
      body: [
        { kind: 'three', cells: [
          { h3: 'For international families', p: 'Many families come to Hamburg for the port, trade or media, and their children think in English. A lesson in English lets them learn hard ideas in the language they already reason in, while school runs in German or in an international programme.' },
          { h3: 'For pupils at German schools', p: 'A maths or coding lesson in English is a second subject practised for free. Mentors speak clearly, adjust speed and vocabulary, and know German school words such as Stadtteilschule, Profilfach or Ableitung when a pupil uses them.' },
          { h3: 'Maths and code travel', p: 'A derivative, a for loop and a SQL query are written the same way in Hamburg, Chennai or Chicago. The notation on the screen does most of the work; the English around it is the easy part.' }
        ] },
        { kind: 'p', mt: true, html: 'Our mentors are in India and teach the same way for every learner, wherever they are: a mentor who gets to know each pupil, the pupil doing the work on their own keyboard or paper, and every problem argued out before it is solved. We teach pupils to think, not to copy a worked answer or an AI tool\'s output.' }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A Hamburg project',
      h2: 'How many bridges are in Hamburg\'s bridge register? A counting project',
      lede: 'Hamburg is proud of its bridges, and the city\'s Landesbetrieb Straßen, Brücken und Gewässer publishes its register of them, free to reuse. Counting them looks like a one-line program. It is a lesson in deciding what "one bridge" means.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is Brücken und sonstige Ingenieurbauwerke Hamburg, from the Transparenzportal under the Datenlizenz Deutschland Namensnennung 2.0. Its description says it lists the existing structures in the LSBG\'s area of responsibility: road bridges, foot bridges, tunnels, noise barriers, retaining walls and sign gantries. We downloaded the road and foot bridge files on 3 November 2026.',
            'Each record has a name, an internal structure number, a sub-structure number, a construction type, a status and, for most, a year of construction.'
          ],
          rightH3: 'The question',
          right: [
            'How many road and foot bridges are in the register? A pupil counts the records and has an answer in a minute. Then a second pupil notices that the Traute-Lafrenz-Brücke appears three times: east footway, middle section, west footway.',
            'Is that three bridges or one? The register answers it for us: all three records share one internal structure number and differ only in the sub-structure number.'
          ] },
        { kind: 'code', label: 'Version 1: count the records', lang: 'Python', code: V1, note: 'It prints: <code>strassenbruecken rows: 881</code> and <code>fussgaengerbruecken rows: 616</code>.' },
        { kind: 'p', mt: true, html: 'Version 1 counts parts. A bridge with separate decks, ramps or footways has one record per part. Version 2 collects the internal structure numbers in a set, so each bridge is counted once however many parts it has.' },
        { kind: 'code', label: 'Version 2: count distinct structure numbers', lang: 'Python', code: V2, note: 'It prints: <code>strassenbruecken bridges: 753</code>, <code>fussgaengerbruecken bridges: 591</code> and <code>Bridges in both files: 1344</code>.' },
        { kind: 'p', mt: true, html: 'So the two files hold 1,497 records but 1,344 bridges: 128 road-bridge records and 25 foot-bridge records are extra parts of a bridge already counted. Neither number is "wrong". They answer different questions, and a report that does not say which one it gives has not finished its job.' },
        { kind: 'code', label: 'Version 3: the year of each road bridge', lang: 'Python', code: V3, note: 'It prints: <code>Road bridges with a year: 725</code> and <code>Oldest: 1802 Median: 1976</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Hamburg\'s LSBG bridge register, 3 November 2026 (our count)', head: ['File', 'Records', 'Distinct bridges'], rows: [
          ['Road bridges (strassenbruecken)', '881', '753'],
          ['Foot bridges (fussgaengerbruecken)', '616', '591']
        ] },
        { kind: 'source', html: 'Data: Landesbetrieb Straßen, Brücken und Gewässer, via Transparenzportal Hamburg, Brücken und sonstige Ingenieurbauwerke Hamburg, Datenlizenz Deutschland Namensnennung 2.0; we fetched both files on 3 November 2026 and every count in the table is ours. The register covers the LSBG\'s area of responsibility, so it is not a count of every bridge in the city. The 1802 record is named Franzosenbrücke.' },
        { kind: 'p', mt: true, html: 'Version 3 is where the maths joins in. For each bridge it keeps the earliest year among its parts, then takes the median. The median, 1976, is the year that splits the dated road bridges into two halves; the mean, 1969.5 in our own check, sits earlier because 29 of the dated road bridges were built before 1900 and drag it back. Ask a pupil to compute both and explain the gap, and you have a statistics lesson that no textbook had to invent.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Without a computer, grades 6 and 7.</strong> A club list has a row per pupil per club. Ten pupils, fourteen rows. How do you find how many pupils there are? What would you need on every row?',
          '<strong>Grade 8 or 9, Python.</strong> Run Version 1. Find one bridge that appears more than once and write down which column tells its parts apart. Then write Version 2.',
          '<strong>Grade 10, maths and Python.</strong> Compute the mean year as well as the median in Version 3. Which is earlier, and why? Draw a rough sketch of the distribution.',
          '<strong>Oberstufe.</strong> Thirty-one road-bridge records have no year. Could leaving them out move the median? Argue for the largest and the smallest median they could produce.'
        ] }
      ]
    },
    {
      id: 'holidays',
      tint: 'tint',
      eyebrow: 'School year 2026/27',
      h2: 'When are the Hamburg school holidays in 2026/27?',
      lede: 'Lessons continue through the holidays for those who want them. Families who travel simply pause and pick up where they left off.',
      body: [
        { kind: 'table', numCols: [], caption: 'Hamburg school holidays, 2026/27, first and last holiday day', head: ['Holiday', 'Dates'], rows: [
          ['Autumn', '19 to 30 October 2026'],
          ['Christmas', '21 December 2026 to 1 January 2027'],
          ['Single winter day', '29 January 2027'],
          ['Spring', '1 to 12 March 2027'],
          ['Ascension and Whitsun', '7 to 14 May 2027'],
          ['Summer', '1 July to 11 August 2027']
        ] },
        { kind: 'source', html: 'Taken from the KMK holiday overview for 2026/27 (dated 9 October 2025) and, for summer 2027, from the KMK\'s long-term summer rules for 2025 to 2030. The KMK fixes the summer dates years ahead; the other holidays are set by Hamburg.' },
        { kind: 'two', mt: true,
          leftH3: 'One city, one Land',
          left: [
            'Destatis counts 1,862,565 people in Hamburg on 31 December 2024, the same figure for the city and the Land because they are one. Germany\'s second-largest city therefore has a single school authority and a single set of exam dates.',
            'Online classes make the district irrelevant: a pupil in Harburg and a pupil in Wandsbek have the same mentors and the same lessons.'
          ],
          rightH3: 'A spring to plan',
          right: [
            'Hamburg\'s spring break, 1 to 12 March 2027, comes earlier than in most Länder, and the central exams start a month later.',
            'For grade 10 and Oberstufe pupils, we use the spring break for a full practice paper under time, then spend the four weeks to mid April on whatever that paper exposed.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are classes in Hamburg?',
      lede: 'A Hamburg afternoon is an Indian evening, and a Sunday morning in Hamburg is early afternoon for the mentor. The rows below are examples of the offset, not fixed batches.',
      body: [
        { kind: 'table', numCols: [], caption: 'Hamburg time and India time', head: ['Hamburg', 'India, winter (until 28 March 2027)', 'India, summer (from 28 March 2027)'], rows: [
          ['15:15', '19:45', '18:45'],
          ['16:45', '21:15', '20:15'],
          ['Sunday 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'Germany keeps MEZ, UTC+1, in winter and MESZ, UTC+2, in summer, as the Einheitenzeitgesetz provides; this winter began on 25 October 2026 and summer time returns on 28 March 2027. India has no clock change and stays at UTC+5:30, four and a half hours ahead of Hamburg now and three and a half from late March.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Coding and maths milestones for Hamburg pupils',
    lede: 'We wrote these five stages ourselves; they decide which class a new pupil joins and frame the reports parents receive.',
    table: { caption: 'Coding and maths milestones (ours)', head: ['Stage', 'Typical grade', 'Coding', 'Maths'], rows: [
      ['1', '5 to 6', 'Write and debug step-by-step instructions', 'Fractions, negative numbers, area'],
      ['2', '7 to 8', 'Loops, decisions and lists in Python', 'Linear equations and functions'],
      ['3', '9 to 10', 'Read a data file and count it correctly', 'MSA topics: Pythagoras, quadratics, statistics'],
      ['4', '11', 'Classes and objects, traced on paper', 'Derivatives and the Einführungsphase basics'],
      ['5', '12 to 13', 'Data structures and automata', 'Abitur Part A without aids']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the bridge project. Knowing whether you are counting parts or things is as much maths as coding.',
      'Reports describe what your child can now do and what comes next, not how long they sat at a screen.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Before you count, write down what one thing is.',
      'If a mean and a median disagree, the data is telling you something about its shape.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Hamburg families',
    lede: 'Each runs live, in English, in a class or privately, and a pupil keeps one mentor throughout.',
    bands: [
      { num: 'I', h3: 'Maths, middle years', sub: 'Ages 10 to 16', courses: [
        { code: 'CMH / MATHS / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'Pre-algebra and geometry, the ground under the MSA paper.' },
        { code: 'CMH / MATHS / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Functions, sequences and probability tried out in Python, for 10 to 15.' },
        { code: 'CMH / MATHS / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'From charts to hypothesis tests, with real data.' }
      ] },
      { num: 'II', h3: 'Coding, middle years', sub: 'Ages 10 to 16', courses: [
        { code: 'CMH / CODE / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'A first script in week one, files and objects by the end.' },
        { code: 'CMH / CODE / 02', slug: 'mysql-mastery-for-teens', title: 'SQL for Teens', blurb: 'Tables, keys and queries, the counting skill behind the project.' },
        { code: 'CMH / CODE / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics competitions', blurb: 'Original puzzles for the Biber and the Bundeswettbewerb Informatik.' }
      ] },
      { num: 'III', h3: 'Oberstufe', sub: 'Ages 15 to 19', courses: [
        { code: 'CMH / UPPER / 01', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur in Java and Python', blurb: 'Programming on paper for a central exam with no computer.' },
        { code: 'CMH / UPPER / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'For pupils in an IB programme instead of the Abitur.' },
        { code: 'CMH / UPPER / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for Teens', blurb: 'Trees, graphs and how to show a method is fast enough.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work for a Hamburg family',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'From mid afternoon, after the school day.' },
      { time: 'Sundays', l: 'Morning lessons, calm before the week starts.' },
      { time: '1-on-1', l: 'Any time agreed with the mentor, shifted around exams.' }
    ],
    cells: [
      { h3: 'A mentor who stays', p: 'The same mentor each week, for coding, maths or both.' },
      { h3: 'Clear English', p: 'Paced for the learner, with German school terms understood.' },
      { h3: 'Pen and keyboard', p: 'Code typed live, and maths worked on paper, as the exams demand.' },
      { h3: 'Exam-aware', p: 'Planned back from Hamburg\'s 2027 exam dates.' },
      { h3: 'Short updates', p: 'Parents hear what was learned and what is next.' },
      { h3: 'Class or private', p: 'A class of 15 to 20 at the same stage, or a mentor of your own.' }
    ]
  },

  projectsH2: 'What our older students have built',
  projectsLede: 'A few student projects are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page collects more.',
  reviewsLede: 'Reviews from parents and students on Google, unedited.',

  fees: {
    h2: 'Fees for Hamburg families',
    lede: 'Fees are monthly, for eight live classes, with no long contract. You see them in euro, worked out from the European Central Bank\'s reference rate; the payment is made in US dollars and your bank converts it, so the statement can show a slightly different amount.',
    free: ['A free first class', 'A coding or maths problem to think through', 'No card needed'],
    group: ['A class of 15 to 20 at a similar stage', 'One regular mentor', 'Two classes a week', 'Monthly, stop any month'],
    one: ['One pupil, one mentor', 'Coding, maths or a mix', 'Times planned around exams']
  },

  faq: {
    eyebrow: 'Hamburg families ask',
    h2: 'Coding and maths classes in Hamburg: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. All classes are live and in English only. Mentors adjust their pace and get used to each pupil\'s accent, and they understand German school terms such as Stadtteilschule or Profilfach when a pupil uses them.' },
      { q: 'Is Informatik compulsory in Hamburg?', a: 'Yes. The Informatik-Monitor 2026/27 of the Gesellschaft für Informatik states that four weekly hours of Informatik have been compulsory at Stadtteilschulen and Gymnasien since 2025/26. Each school decides how to place them in grades 7 to 10.' },
      { q: 'Is the Hamburg Informatik Abitur done on a computer?', a: 'No. According to the Informatik-Monitor, the written Informatik Abitur in Hamburg is set centrally at both levels and currently allows no practical computer work. The aids are a non-programmable, non-graphing calculator and a spelling dictionary.' },
      { q: 'When is the MSA maths exam in 2027?', a: 'Hamburg\'s school authority lists the central MSA maths exam on 13 April 2027 and the ESA maths exam on 12 April 2027, as of 9 September 2026. The German papers are on 9 and 8 April 2027.' },
      { q: 'When is the Abitur in Hamburg in 2027?', a: 'The school authority gives the regular written Abitur dates as 13 April to 5 May 2027, with resits from 25 to 31 May 2027. It does not list dates by subject in that document, so the school\'s own plan gives the exact day.' },
      { q: 'Can one mentor teach both coding and maths?', a: 'Often, yes, and some families prefer it. In a one-to-one plan we can split the two weekly classes between maths and coding. In group classes each course has its own mentor.' },
      { q: 'What time are the classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. India is 4 hours 30 minutes ahead of Hamburg in winter and 3 hours 30 minutes in summer.' },
      { q: 'Do you award grades or certificates for school?', a: 'No. We teach alongside school and do not award German grades or qualifications. Hamburg\'s central exams and the school\'s marks are the ones that count.' },
      { q: 'Where are the mentors?', a: 'In India, teaching live over video. That is why Hamburg afternoons and Sunday mornings suit the timetable. Your child keeps the same mentor from week to week.' },
      { q: 'How do payments work?', a: 'Monthly. Fees are shown in euro at the European Central Bank reference rate and charged in US dollars, so your bank converts the amount. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Hamburg families.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for families across Germany.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The exam, the pool and how to prepare.' },
      { href: '/abitur-computer-science-in-english', label: 'Informatik Abitur in English', p: 'Oberstufe Informatik explained.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'Hamburg next to the other fifteen.' },
      { href: '/coding-for-international-school-students-germany', label: 'International school pupils', p: 'IB, IGCSE and AP computing in Germany.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live lessons in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is a short coding or maths problem, chosen for your child\'s grade. The mentor listens to how your child reasons and how comfortable they are in English, then suggests a course and a class.',
    readFirst: 'To read more first, see <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Live online with mentors in India, in English only. WhatsApp reaches us fastest, in English.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Maths and Informatik', links: [
        { href: '/abitur-maths-in-english', label: 'Abitur maths' },
        { href: '/abitur-computer-science-in-english', label: 'Informatik Abitur' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/online-math-tutor-germany', label: 'Online maths tutor' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Count bridges, not records'
  },

  personalityCss: `
.ag-root.ag-cmh .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-cmh .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-cmh .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-cmh .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cmh .ag-band-head h3 { letter-spacing: 0.005em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27, Hamburg page; Behörde für Schule, Familie und Berufsbildung, Termine für die Abschlussarbeiten 2027 and Zentrale Prüfungen page; IQB task structure for the maths pool; KMK holidays 2026/27 and summer rules; KMK Schema; Destatis GV-ISys 31.12.2024. Data: LSBG via Transparenzportal Hamburg, Brücken und sonstige Ingenieurbauwerke Hamburg, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Counting Hamburg\'s LSBG bridge register: Version 1 counts records (881 road, 616 foot), Version 2 counts distinct internal structure numbers (753 and 591, 1,344 in all), Version 3 takes the earliest year per road bridge (725 dated, oldest 1802, median 1976). Lesson family: decide what one thing is before you count it.',
    requiredMentions: ['strassenbruecken rows: 881', 'Bridges in both files: 1344', 'Oldest: 1802 Median: 1976', 'Traute-Lafrenz-Brücke', '13 April 2027', 'Within 13 April to 5 May 2027', '610 qualified Informatik teachers', 'Count bridges, not records'],
    sources: [
      { claim: 'Hamburg Informatik rules, Oberstufe options, central Abitur without computer, figures.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/hamburg' },
      { claim: 'Hamburg 2027 ESA, MSA and Abitur dates.', url: 'https://www.hamburg.de/politik-und-verwaltung/behoerden/bsfb/themen/zentrale-pruefungen/termine-133024' },
      { claim: 'Central ESA and MSA tasks in German and maths.', url: 'https://www.hamburg.de/politik-und-verwaltung/behoerden/bsfb/themen/zentrale-pruefungen' },
      { claim: 'Pool maths exam: Part A and B, 300 and 255 minutes.', url: 'https://www.iqb.hu-berlin.de/media/documents/M_Beschreibung_der_Struktur_der_Aufgaben.pdf' },
      { claim: 'Hamburg holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Bridge register and licence.', url: 'https://ckan.govdata.de/dataset/brucken-und-sonstige-ingenieurbauwerke-hamburg398f3' }
    ],
    rejectedClaims: [
      'A total number of bridges in Hamburg: the register covers only the LSBG\'s responsibility, so no city-wide figure is given.',
      'The day of the Abitur maths exam in Hamburg: the authority publishes only the window, so none is given.',
      'Hamburg\'s use of specific IQB pool tasks: not stated, so only the national pool format is described.',
      'Gender shares from the monitor: left out under the no gender statistics rule.',
      'Any affiliation with the school authority, the GI, the IQB or a school: none.'
    ]
  }
};
