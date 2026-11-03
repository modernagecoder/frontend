'use strict';
// Coding classes in the Land Bremen (ag- Land page, Germany cluster P4 row DE091, alloc code bre, accent #86516D).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent.
// Spine: the two-city Land (Bremen and Bremerhaven) is, for now, one of six Länder without Informatik for all; it has no
// curricular Informatik in Sekundarstufe I and introduces a compulsory subject step by step from 2027/28. Its raised-
// level Informatik Abitur is written decentrally (each school submits two variants), the basic course is oral only.
// Data project: the Land's own 2025 budget actuals, where a percentage needs a base that is not zero and not tiny.
// Sources (read raw; copies under ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-in-land-bremen/):
//  - GI Informatik-Monitor 2026/27, Bremen page (infmon-bremen/93ee42e6.txt; FACTS 56, 75): "Es finden weder an der
//    Oberschule noch am Gymnasium curricular hinterlegte Angebote mit Informatikbezug statt."; Einführungsphase "zwei- oder
//    dreistündige Wahlpflichtfach Informatik"; Qualifikationsphase "zwei- bis dreistündig ... (Grundkurs) oder fünfstündig
//    ... (Leistungskurs)"; "Im Leistungskurs Informatik wird grundsätzlich schriftlich geprüft. Im Grundkurs Informatik kann
//    eine mündliche Prüfung erfolgen, jedoch keine schriftliche."; exam subject only "wenn es im zweiten Halbjahr der
//    Einführungsphase sowie in der Qualifikationsphase durchgängig belegt worden ist"; "Die Prüfungsaufgaben werden von
//    jeder Schule in zwei Varianten der Behörde zur Prüfung vorgelegt, die nach der Prüfung und Genehmigung festlegt,
//    welche zum Haupt- und welche zum Nebentermin ... zur Anwendung kommt."; "Eine Bearbeitung von Prüfungsaufgaben am
//    Rechner ist nicht vorgesehen."; aids applied for by schools: "Tafelwerke, Formelsammlungen, Wörterbuch,
//    Taschenrechner"; WAT in grades 5 and 6 aims at "Medienkompetenzen"; Oberschule and Gymnasium; Gymnasium G8 (10
//    Einführungsphase, 11 and 12 Qualifikationsphase); Oberschule eight- and nine-year routes; Werkschule; "In den
//    Schuljahren 2025/26 und 2026/27 wird der entsprechende Bildungsplan pilotiert. Die Einführung des Fachs erfolgt
//    schrittweise ab dem Schuljahr 2027/28."; Kennzahl: Sek II with Informatik 17 % (2024/2025).
//  - GI national page (FACTS 92, 94): six Länder without compulsory Informatik incl. Bremen; "Zum Schuljahr 2027/28 wird
//    Bremen Informatik als Pflichtfach an allen Schulen im Gesamtumfang von zwei bis vier Wochenstunden einführen."
//  - Die Senatorin für Kinder und Bildung, Mitteilung Nr. 110/2025 of 22.05.2025, "Abiturtermine 2027 im Lande Bremen"
//    (abi/Abiturtermine_2027.pdf via PDFKit): "Abgabe der Aufgabenvorschläge nach §10a AP-V bei der Fachaufsicht bis Mo.,
//    18.01.2027"; "Ende des zeugnisrelevanten Unterrichts Fr., 19.03.2027"; "Deutsch (LK/GK) Di., 27.04.2027"; "Englisch
//    (LK/GK) Fr., 30.04.2027"; "Mathematik (LK/GK) Mi., 05.05.2027"; "Schriftliche Prüfung LK dezentral Di., 13.04.2027
//    oder nach Gegebenheit der Schule i. d. Zeit vom 13.04. bis 05.05.2027"; "Mündliche Prüfungen im 4. PF Mo., 10.05. bis
//    Fr., 21.05.2027"; "Zentrale Nachschreibtermine Mo., 24.05.2027 bis Mo., 31.05.2027"; "Zeugnisausgabe bis Mi.,
//    07.07.2027".
//  - KMK FER2026_27.pdf (kmk-fer2627/fe303dbf.txt): "Bremen 12.10. - 24.10. 23.12. - 09.01. 01.02. - 02.02. 22.03. - 03.04.
//    07.05. und 18.05. 08.07. - 18.08."
//  - KMK Schema (FACTS 20): Oberschule named for Bremen.
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Land Bremen 704,881; Bremen 586,271; Bremerhaven 118,610.
//  - Data: Freie Hansestadt Bremen, Die Senatorin für Finanzen, "Haushalt des Landes und der Stadtgemeinde Bremen 2025
//    (IST-DATEN)", file IST-Daten_2025_Land_Bremen.csv (987,912 bytes, Windows-1252, converted by us to UTF-8 as
//    ist_2025_land_utf8.csv), via Transparenzportal Bremen / GovData, licence CC BY. Description: "kameralen
//    Haushaltsdaten des Jahres 2025 für das Land und die Stadtgemeinde Bremen"; "Die Stadt Bremerhaven führt einen eigenen
//    Haushalt." Columns Anschlag, Haushaltssoll, IST 2025. Downloaded 3 Nov 2026.
// Our own calculations (scratchpad de/w/L1/hb_v1.py, hb_23.py, python3 -I, run in the data folder):
//  V1 prints "Budget lines: 8620" then stops with "ZeroDivisionError: division by zero".
//  V2 prints "Lines with a plan of 0: 5355", "...of which money moved anyway: 1068",
//     "Largest change: Erstattungen / Rückzahlungen von Zuwendu 94034 %".
//  V3 prints "Lines planned at 10 million or more: 127",
//     "Risikoabdeckung im Leistungsbereich Land | 55.0 -> 0.0 million | -100 %", "Disagio | 20.0 -> 56.7 million | 184 %".
// Lesson family: guard the denominator; a percentage needs a base that is neither zero nor too small to mean anything.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'def euro(text):',
  '    return float(text.replace(".", "").replace(",", ".")) if text.strip() else 0.0',
  '',
  'lines = []',
  'with open("ist_2025_land_utf8.csv", encoding="utf-8") as src:',
  '    table = csv.reader(src, delimiter=";")',
  '    next(table)   # skip the header row',
  '    for row in table:',
  '        # column 2: purpose, column 6: plan, column 8: actual result',
  '        lines.append((row[2].strip(), euro(row[6]), euro(row[8])))',
  '',
  'print("Budget lines:", len(lines))',
  'for name, plan, actual in lines:',
  '    change = (actual - plan) / plan * 100'
].join('\n');

const V2 = [
  'no_plan = [l for l in lines if l[1] == 0]',
  'print("Lines with a plan of 0:", len(no_plan))',
  'print("...of which money moved anyway:", sum(1 for l in no_plan if l[2] != 0))',
  '',
  'planned = [l for l in lines if l[1] != 0]',
  'wildest = max(planned, key=lambda l: abs((l[2] - l[1]) / l[1]))',
  'print("Largest change:", wildest[0][:40], round((wildest[2] - wildest[1]) / wildest[1] * 100), "%")'
].join('\n');

const V3 = [
  'big = [l for l in planned if l[1] >= 10_000_000]',
  'big.sort(key=lambda l: (l[2] - l[1]) / l[1])',
  'print("Lines planned at 10 million or more:", len(big))',
  'for name, plan, actual in big[:1] + big[-1:]:',
  '    print(name[:40], "|", round(plan / 1e6, 1), "->", round(actual / 1e6, 1), "million |", round((actual - plan) / plan * 100), "%")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'Land Bremen' },
  slug: 'coding-classes-in-land-bremen',
  code: 'bre',
  accent: '#86516D',
  accentRationale: 'Land Bremen: a dusky mauve #86516D, the weathered red-violet of the Schnoor quarter\'s old brick and of the Bremerhaven harbour warehouses; contrast 5.00 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes in the Land Bremen',
  title: 'Coding Classes in Bremen and Bremerhaven: Live Online, in English',
  description: 'Coding classes in the Land Bremen, live online in English: no Informatik for all until 2027/28, the Abitur 2027 dates, holidays and a budget data project.',
  ogDescription: 'Live online coding in English for pupils in Bremen and Bremerhaven: why the Land has no compulsory Informatik yet, how its decentral Informatik Abitur works, the 2027 exam and holiday dates, and a Python project on the Land budget.',
  twitterDescription: 'Coding in English for Bremen and Bremerhaven: the Informatik gap, Abitur 2027 dates and a budget data project.',
  pageName: 'Coding Classes in the Land Bremen',
  webPageDescription: 'A guide for families in Bremen and Bremerhaven to coding alongside school, built from the GI Informatik-Monitor 2026/27, the Senatorin für Kinder und Bildung\'s Abitur dates for 2027, the KMK holiday table and Destatis, with an original project on the Land\'s 2025 budget actuals.',
  courseDescription: 'Live online coding and Informatik classes in English for pupils in Bremen and Bremerhaven aged about 10 to 19, in a class of 15 to 20 or one to one, filling the years before the Land\'s compulsory Informatik arrives.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Land Bremen',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#gap', label: 'Informatik' },
    { href: '#abitur', label: 'Abitur' },
    { href: '#project', label: 'Budget' },
    { href: '#holidays', label: 'Holidays' }
  ],
  eyebrow: 'Bremen and Bremerhaven &middot; Coding and Informatik &middot; Ages 10 to 19',
  h1: 'Coding classes in Bremen and Bremerhaven',
  lede: 'The Land Bremen is two cities on the Weser, and for now neither has an Informatik lesson that every pupil must take. The Gesellschaft für Informatik counts Bremen among six Länder without compulsory Informatik, and reports that the Land will introduce the subject step by step from 2027/28. Until then a curious pupil can go from grade 5 to grade 10 without a single timetabled programming lesson. This page covers that gap, the Abitur in 2027, the holidays, and a project on the Land\'s own budget.',
  secondaryCta: { href: '#project', label: 'Open the budget project' },
  wa: 'Hello Modern Age Coders, we live in Bremen and would like coding classes in English for our child. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; English only, one mentor per pupil',
  spec: [
    ['Ages', 'About 10 to 19'],
    ['Core course', 'Informatik Companion, Klasse 5 to 10'],
    ['Class size', 'A group of 15 to 20, or private'],
    ['Times', 'Afternoons, evenings, Sunday mornings'],
    ['Mentors', 'Teaching from India, in English'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding classes for pupils in Bremen and Bremerhaven, from Modern Age Coders, are live online lessons in English for ages of about 10 to 19, in a group of 15 to 20 or one to one, always with the same mentor, who works at the learner\'s pace and gets used to their accent. Because the Land Bremen has no compulsory Informatik before 2027/28, our Informatik Companion course gives pupils the grounding school does not yet offer.',

  picks: {
    eyebrow: 'Where pupils in Bremen start',
    h2: 'Three courses for Bremen and Bremerhaven',
    lede: 'One course that fills the Sekundarstufe I gap, one for the Leistungskurs and its written exam, and one for contests.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'BRE / 01', title: 'Informatik Companion, grades 5 to 10', note: 'Aimed at ages 10 to 16: the material a compulsory Informatik subject would cover, which Bremen is only now bringing in, taught two lessons a week.' },
      { course: 'informatik-abitur-course-java-python', code: 'BRE / 02', title: 'Leistungskurs Informatik support', note: 'For the Oberstufe. Data structures, object orientation and databases, with written practice for an exam taken without a computer.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'BRE / 03', title: 'Biber, BwInf and BWKI training', note: 'Ages 9 to 19. Original practice puzzles, then real algorithm problems, written by our mentors.' }
    ]
  },

  sections: [
    {
      id: 'gap',
      eyebrow: 'Informatik in the Land Bremen',
      h2: 'Is there compulsory Informatik in Bremen schools?',
      lede: 'Not yet. The figures and quotations below come from the 2026/27 Informatik-Monitor of the Gesellschaft für Informatik, which surveys each Land\'s regulations. We are not connected to the GI or to the Senatorin für Kinder und Bildung.',
      body: [
        { kind: 'two',
          leftH3: 'What exists today',
          left: [
            'After four years of Grundschule, pupils in the Land Bremen go to an Oberschule or a Gymnasium. For both, the monitor states plainly that there are no curricular offers with an Informatik focus in the Sekundarstufe I.',
            'The compulsory subject Wirtschaft, Arbeit, Technik in grades 5 and 6 has digital content, but the monitor notes that it aims at media skills, not Informatik. Some schools describe Informatik elements in their own ITG curricula for the Wahlpflicht area.'
          ],
          rightH3: 'What is coming',
          right: [
            'Bremen is piloting a curriculum in 2025/26 and 2026/27. From the 2027/28 school year it will introduce Informatik as a compulsory subject at all schools, two to four weekly hours in total, step by step.',
            'A pupil in grade 5 today will therefore meet the new subject later in Sekundarstufe I, while pupils now in grades 8 to 10 are likely to finish without it.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik for a pupil in the Land Bremen, 2026/27', head: ['Stage', 'Grades', 'Informatik'], rows: [
          ['Grundschule', '1 to 4', 'No subject'],
          ['Oberschule or Gymnasium', '5 to 10', 'No curricular Informatik; a compulsory subject is introduced step by step from 2027/28'],
          ['Einführungsphase', '10 (Gymnasium) or 11', 'Two- or three-hour Wahlpflicht elective'],
          ['Qualifikationsphase', '11 to 12 or 12 to 13', 'Grundkurs, two to three hours, or Leistungskurs, five hours']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Bremen page and national comparison, read 2 November 2026. At the Gymnasium the Abitur follows grade 12; Oberschulen with an Oberstufe can run eight-year and nine-year routes.' },
        { kind: 'p', mt: true, html: 'This is the situation our Informatik Companion course was written for. Two live lessons a week cover what a compulsory subject would: precise algorithms, programming in Python, working with data, how networks move information. When Bremen\'s own subject arrives, a pupil who has done this is ahead rather than starting cold.' },
        { kind: 'p', html: 'Interest in the Oberstufe is not small: the monitor\'s Bremen page gives 17 percent of Sekundarstufe II pupils taking Informatik in 2024/25. Given the gap lower down, for most of them that course is likely to be the first timetabled Informatik of their school career.' }
      ]
    },
    {
      id: 'abitur',
      tint: 'tint',
      eyebrow: 'Oberstufe and Abitur',
      h2: 'How does the Informatik Abitur work in Bremen, and what are the 2027 dates?',
      lede: 'Bremen\'s written Informatik Abitur is not one paper for the whole Land. Each school writes its own, and the authority approves it.',
      body: [
        { kind: 'two',
          leftH3: 'Leistungskurs: written, decentral',
          left: [
            'A Leistungskurs in Informatik is examined in writing. The monitor explains the process: each school submits its exam tasks in two variants to the authority, which checks and approves them and decides which is used on the main date and which on the second date, sometimes after several rounds of revision.',
            'Tasks are not worked on a computer. Schools apply for the aids they need, such as tables, formula collections, a dictionary or a calculator.'
          ],
          rightH3: 'Grundkurs: oral only',
          right: [
            'A Grundkurs in Informatik can be an oral exam subject but not a written one. Informatik can be an exam subject at all only if it was taken without a break from the second half of the Einführungsphase through the Qualifikationsphase.',
            'The monitor adds that Informatik cannot be chosen as the third exam subject, and it does not replace a natural science in the course requirements.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Abitur 2027 in the Land Bremen, selected dates', head: ['Date', 'What happens'], rows: [
          ['By Monday 18 January 2027', 'Schools submit their task proposals to the Fachaufsicht'],
          ['Friday 19 March 2027', 'Last day of teaching that counts for the certificate'],
          ['From Tuesday 13 April 2027', 'Decentral Leistungskurs papers, on 13 April or a school date up to 5 May'],
          ['Tuesday 27 April 2027', 'German, LK and GK'],
          ['Friday 30 April 2027', 'English, LK and GK'],
          ['Wednesday 5 May 2027', 'Mathematics, LK and GK'],
          ['10 to 21 May 2027', 'Oral exams in the fourth exam subject'],
          ['24 to 31 May 2027', 'Central resit dates'],
          ['By Wednesday 7 July 2027', 'Certificates handed out']
        ] },
        { kind: 'source', html: 'Source: Die Senatorin für Kinder und Bildung, Mitteilung Nr. 110/2025 of 22 May 2025, Abiturtermine 2027 im Lande Bremen, read 3 November 2026. The authority notes that schools would be told of any changes in January 2027. Central dates take priority over school dates.' },
        { kind: 'p', mt: true, html: 'Because a Bremen Leistungskurs paper is written by the pupil\'s own school, the school\'s course and its teachers are the surest guide to what will be asked. Our part is the foundations behind any paper: clean code on paper, data structures, databases and the reasoning to explain them. The school and the authority set and mark the Abitur; Modern Age Coders awards no grades or German qualifications.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'What does "in English" mean for a pupil in Bremen?',
      lede: 'It means every live lesson, from the first minute, is taught in English. No class is held in German.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Families from elsewhere', p: 'Work and study bring families to Bremen and Bremerhaven from abroad. Their children can learn Informatik in the language they think in, while German school life goes on alongside.' },
          { h3: 'Pupils at German schools', p: 'For them, a coding lesson in English is two subjects at once. Mentors keep sentences short, repeat key ideas, and accept German school words such as Leistungskurs or Oberschule in a question.' },
          { h3: 'The language of code', p: 'Keywords in Python and Java are English words already. Pupils who learn them in English have one less translation to make when they meet them again in a Bremen classroom.' }
        ] },
        { kind: 'p', mt: true, html: 'The mentors are based in India and teach live. Whatever a pupil\'s city, the teaching stays the same: a mentor who knows them by the second week, lessons where the pupil writes the code, and solutions argued for rather than copied from an answer sheet or an AI tool.' }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A Land-wide project',
      h2: 'Did the Land Bremen spend what it planned in 2025? A percentage project',
      lede: 'The Senatorin für Finanzen publishes the Land\'s budget line by line, with the plan and the actual result, as open data. Our older pupils use it to learn the most common way a percentage goes wrong: dividing by a base that is zero, or so small that the answer means nothing.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is Haushalt des Landes und der Stadtgemeinde Bremen 2025 (Ist-Daten), published under CC BY on the Transparenzportal Bremen. We use the file for the Land, downloaded on 3 November 2026. Bremerhaven keeps a budget of its own, so it is not in this file.',
            'Each row is one budget line: its number, its purpose (Zweckbestimmung), the amount planned (Anschlag) and the amount actually booked in 2025, in the last column, headed with the German word for actual. The file is written the German way, with points for thousands and commas for decimals, which the euro() function converts.'
          ],
          rightH3: 'The question',
          right: [
            'For each line, by what percentage did the result differ from the plan? The formula looks harmless: (actual minus plan) divided by plan, times 100.',
            'Version 1 applies it to every line. It reads 8,620 lines and then stops, because some lines were planned at exactly zero.'
          ] },
        { kind: 'code', label: 'Version 1: a percentage for every line', lang: 'Python', code: V1, note: 'It prints <code>Budget lines: 8620</code> and then stops with <code>ZeroDivisionError: division by zero</code>.' },
        { kind: 'p', mt: true, html: 'A crash is a good result here, because it tells the truth: for a line with no plan, "percent of the plan" has no answer. Version 2 replaces the loop at the end of Version 1. It counts the zero-plan lines separately and computes the percentage only where a plan exists.' },
        { kind: 'code', label: 'Version 2: set the zero plans aside', lang: 'Python', code: V2, note: 'It prints <code>Lines with a plan of 0: 5355</code>, <code>...of which money moved anyway: 1068</code> and <code>Largest change: Erstattungen / Rückzahlungen von Zuwendu 94034 %</code>.' },
        { kind: 'p', mt: true, html: 'The program no longer crashes, but its headline is useless. A change of 94,034 percent sounds dramatic; it only means the plan for that refund line was tiny. A small base makes every percentage enormous. Version 3 asks the question again, only for lines planned at ten million or more.' },
        { kind: 'code', label: 'Version 3: only lines with a substantial plan', lang: 'Python', code: V3, note: 'It prints <code>Lines planned at 10 million or more: 127</code>, <code>Risikoabdeckung im Leistungsbereich Land | 55.0 -> 0.0 million | -100 %</code> and <code>Disagio | 20.0 -> 56.7 million | 184 %</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Land Bremen budget file 2025: what the three versions found (our counts)', head: ['Check', 'Result'], rows: [
          ['Budget lines in the file', '8,620'],
          ['Lines planned at zero', '5,355'],
          ['Zero-plan lines where money was booked anyway', '1,068'],
          ['Lines planned at 10 million or more', '127']
        ] },
        { kind: 'source', html: 'Data: Die Senatorin für Finanzen, Freie Hansestadt Bremen, Haushalt des Landes und der Stadtgemeinde Bremen 2025 (Ist-Daten), file for the Land, licence CC BY, via Transparenzportal Bremen, downloaded 3 November 2026. All counts and percentages are our own and describe lines of the file, not the Land\'s official budget totals.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Grades 6 and 7, by hand.</strong> A class planned to read 0 books in August and read 3. A second class planned 1 and read 4. Which grew "more"? Can you give both a percentage?',
          '<strong>Grades 8 and 9, Python.</strong> Run Version 1, read the error, and write Version 2 yourself before you look at ours.',
          '<strong>Grade 10.</strong> Change the threshold in Version 3 from ten million to one million. Does the largest change look sensible now? Choose a threshold and defend it in two sentences.',
          '<strong>Oberstufe.</strong> Instead of a threshold, rank lines by the absolute difference in euro. When is that a better question than the percentage?'
        ] }
      ]
    },
    {
      id: 'holidays',
      tint: 'tint',
      eyebrow: 'School year 2026/27',
      h2: 'When are the school holidays in Bremen in 2026/27?',
      lede: 'Bremen and Bremerhaven share one holiday calendar. These are the first and last holiday days.',
      body: [
        { kind: 'table', numCols: [], caption: 'School holidays in the Land Bremen, 2026/27', head: ['Break', 'Starts', 'Ends'], rows: [
          ['Herbstferien', 'Mon 12 Oct 2026', 'Sat 24 Oct 2026'],
          ['Weihnachtsferien', 'Wed 23 Dec 2026', 'Sat 9 Jan 2027'],
          ['Winter break', 'Mon 1 Feb 2027', 'Tue 2 Feb 2027'],
          ['Osterferien', 'Mon 22 Mar 2027', 'Sat 3 Apr 2027'],
          ['Free days', 'Fri 7 May 2027', 'Tue 18 May 2027 (two separate days)'],
          ['Sommerferien', 'Thu 8 Jul 2027', 'Wed 18 Aug 2027']
        ] },
        { kind: 'source', html: 'Source: KMK, Ferien im Schuljahr 2026/2027 (dated 9 October 2025), Bremen row. The KMK sets the summer holidays long in advance and publishes the Länder\'s own dates for the rest.' },
        { kind: 'two', mt: true,
          leftH3: 'Two cities, one Land',
          left: [
            'Destatis gives the Land Bremen 704,881 inhabitants on 31 December 2024: 586,271 in the city of Bremen and 118,610 in Bremerhaven. It is the smallest Land by population.',
            'Online lessons take the river out of the equation. A pupil in Bremerhaven and one in Bremen-Nord share the same live class.'
          ],
          rightH3: 'Planning the Abitur spring',
          right: [
            'For a candidate in 2027, certificate-relevant teaching ends on 19 March, the Easter holidays fill 22 March to 3 April, and the decentral Leistungskurs papers can start on 13 April.',
            'Easter is the natural place for a full practice paper written on paper and timed, followed by a week of work on whatever it uncovered.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When do classes take place in Bremen time?',
      lede: 'After school in Bremen is evening in India, and a Sunday morning in Bremen is the mentor\'s early afternoon. These rows show the offset; your booking sets the actual slot.',
      body: [
        { kind: 'table', numCols: [], caption: 'Bremen time and India time', head: ['Bremen', 'India before 28 March 2027', 'India from 28 March 2027'], rows: [
          ['15:45', '20:15', '19:15'],
          ['18:30', '23:00', '22:00'],
          ['Sunday 10:30', '15:00', '14:00']
        ] },
        { kind: 'source', html: 'Time rules: the Einheitenzeitgesetz fixes Central European Time (UTC+1) and Central European Summer Time (UTC+2) for Germany. Clocks went back on 25 October 2026 and go forward on 28 March 2027. India, at UTC+5:30 all year, leads by four and a half hours in winter and three and a half in summer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Five steps from first program to Leistungskurs',
    lede: 'Stages we wrote ourselves, to place a pupil in Bremen or Bremerhaven and to describe progress.',
    table: { caption: 'Informatik stages for a pupil without school Informatik (ours)', head: ['Stage', 'Typical grade', 'The pupil can'], rows: [
      ['1. Exact instructions', '5 to 6', 'Write steps a stranger could follow without asking'],
      ['2. Programs', '6 to 7', 'Use loops, conditions and variables in Python'],
      ['3. Numbers that mean something', '7 to 9', 'Compute averages and percentages in code, and guard against bad input'],
      ['4. Data files', '9 to 10', 'Read a real public file, convert German number formats, summarise it'],
      ['5. Oberstufe', '10 to 13', 'Design classes and data structures and write them cleanly on paper']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the budget project: knowing when a percentage is meaningless is a skill for life, not only for Informatik.',
      'Reports tell you what your child can now do, in plain words.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Before you divide, ask what you are dividing by.',
      'A huge percentage is a question, not an answer.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Bremen families',
    lede: 'Live and in English, with one regular mentor for each pupil, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Younger pupils', sub: 'Ages 7 to 12', courses: [
        { code: 'BRE / YOUNG / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'From Scratch games to first apps, grouped by age.' },
        { code: 'BRE / YOUNG / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, Roblox and Minecraft in one long course.' },
        { code: 'BRE / YOUNG / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Percentages, graphs and patterns, explored in Python.' }
      ] },
      { num: 'II', h3: 'Sekundarstufe I', sub: 'Ages 12 to 16', courses: [
        { code: 'BRE / MID / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'A full Python course, beginner to confident.' },
        { code: 'BRE / MID / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Public data, charts and honest conclusions.' },
        { code: 'BRE / MID / 03', slug: 'frontend-development-masterclass-for-teens', title: 'Frontend for Teens', blurb: 'HTML, CSS and JavaScript to working web pages.' }
      ] },
      { num: 'III', h3: 'Oberstufe', sub: 'Ages 15 to 19', courses: [
        { code: 'BRE / UPPER / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Object-oriented programming, a common Leistungskurs language.' },
        { code: 'BRE / UPPER / 02', slug: 'mysql-mastery-for-teens', title: 'SQL for Teens', blurb: 'Relational databases from first query to joins.' },
        { code: 'BRE / UPPER / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik in English', blurb: 'For the maths paper on Wednesday 5 May 2027.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How the live lessons fit a week in Bremen',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Late afternoon', l: 'After school and homework, on weekdays.' },
      { time: 'Evenings', l: 'For older pupils who prefer to work later.' },
      { time: '1-on-1', l: 'A time agreed with the mentor, around exams.' }
    ],
    cells: [
      { h3: 'Fixed mentor', p: 'One mentor, every week, who knows where the pupil stands.' },
      { h3: 'Patient English', p: 'Short sentences, key words on screen, German terms understood.' },
      { h3: 'Code by the pupil', p: 'The mentor guides; the pupil does the typing and the thinking.' },
      { h3: 'Aware of Bremen', p: 'Planned around Bremen\'s holidays and Abitur dates.' },
      { h3: 'Parents informed', p: 'A brief update after each block of lessons.' },
      { h3: 'Group or private', p: 'Fifteen to twenty pupils, or one to one.' }
    ]
  },

  projectsH2: 'Work by our more advanced students',
  projectsLede: 'A few projects by older students are shown below. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has the rest.',
  reviewsLede: 'Google reviews by parents and students, reproduced as written.',

  fees: {
    h2: 'Fees for families in Bremen and Bremerhaven',
    lede: 'A month of lessons means eight live classes, paid monthly, and you can cancel for the next month at any time. We show fees in euro, calculated from the European Central Bank reference rate; the card payment itself is in US dollars, and your bank converts it, which can leave the statement a little different.',
    free: ['A free first class', 'A problem to reason through, then a first program', 'No card needed'],
    group: ['A group of 15 to 20 at a similar level', 'One mentor who stays', 'Two classes a week', 'Monthly, cancel any time'],
    one: ['A mentor for your child alone', 'Topics and pace set for them', 'Times planned around school and exams']
  },

  faq: {
    eyebrow: 'Families in Bremen ask',
    h2: 'Coding classes in Bremen and Bremerhaven: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. All classes are live and taught in English only. Mentors adapt their pace and get used to each pupil\'s accent, and German school words such as Leistungskurs or Oberschule are fine in a question.' },
      { q: 'Is Informatik compulsory in Bremen?', a: 'Not yet. The Gesellschaft für Informatik\'s Informatik-Monitor 2026/27 names Bremen among six Länder without compulsory Informatik for all pupils. It reports that Bremen will introduce a compulsory subject of two to four weekly hours in total, step by step from 2027/28.' },
      { q: 'Does my child get any Informatik in grades 5 to 10 today?', a: 'According to the Informatik-Monitor, neither the Oberschule nor the Gymnasium has curricular Informatik in Sekundarstufe I at present. Some schools include Informatik elements in their own ITG electives.' },
      { q: 'Is the Bremen Informatik Abitur the same for every school?', a: 'No. The Informatik-Monitor explains that each school submits its Leistungskurs tasks in two variants to the authority, which approves them and decides which is used on the main and second dates. Tasks are not worked on a computer.' },
      { q: 'Can Informatik be a written exam at Grundkurs level?', a: 'No. The Informatik-Monitor states that a Grundkurs in Informatik can be examined orally but not in writing. A written Informatik exam is only possible in the Leistungskurs.' },
      { q: 'When is the maths Abitur in Bremen in 2027?', a: 'The Senatorin für Kinder und Bildung lists the written maths exam, LK and GK, on Wednesday 5 May 2027. German is on 27 April and English on 30 April 2027; the central resit dates run from 24 to 31 May 2027.' },
      { q: 'What time are the lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. India is 4 hours 30 minutes ahead of Bremen in winter and 3 hours 30 minutes in summer.' },
      { q: 'Do you give grades or certificates?', a: 'No. We teach alongside school and award no German grades or qualifications. The school and the authority set and mark the Abitur.' },
      { q: 'Where do the mentors teach from?', a: 'From India, live over video and in English. A pupil keeps the same mentor from week to week.' },
      { q: 'How do I pay?', a: 'Monthly. Fees are shown in euro at the European Central Bank reference rate and charged in US dollars, so your bank converts the amount. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in the Land Bremen.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The full set of our Germany pages.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'How Bremen compares with the other fifteen.' },
      { href: '/abitur-computer-science-in-english', label: 'Informatik Abitur in English', p: 'The Oberstufe subject in detail.' },
      { href: '/german-school-system-maths-and-computing-explained', label: 'The German school system', p: 'Maths and computing, stage by stage.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Think first, then code', p: 'Why we do not let AI do the reasoning.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live lesson.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is short and practical: a puzzle to think through and a first few lines of code. The mentor gets to know your child\'s level and English, and recommends a course and a group.',
    readFirst: 'To read more beforehand, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson, and <a class="ag-inline-link" href="/courses">all courses</a> lists every syllabus.',
    note: 'Live online with mentors in India, English only. Message us on WhatsApp, in English, for the quickest reply.',
    formNote: 'Free and without obligation; no card.'
  },

  footer: {
    cols: [
      { h4: 'Informatik', links: [
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/abitur-computer-science-in-english', label: 'Informatik Abitur' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/jugendwettbewerb-informatik-preparation', label: 'Jugendwettbewerb Informatik' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Ask what you are dividing by'
  },

  personalityCss: `
.ag-root.ag-bre .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-bre .ag-capsule { border-left-width: 3px; }
.ag-root.ag-bre .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-bre .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-bre .ag-band-head h3 { letter-spacing: -0.002em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Bremen and national pages); Die Senatorin für Kinder und Bildung, Mitteilung Nr. 110/2025, Abiturtermine 2027; KMK holidays 2026/27 and Schema; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz. Data: Die Senatorin für Finanzen, Haushalt des Landes und der Stadtgemeinde Bremen 2025 (Ist-Daten), CC BY.',
    localProject: 'The Land Bremen budget actuals 2025: Version 1 crashes on a zero plan after reading 8,620 lines; Version 2 sets aside 5,355 zero-plan lines (1,068 with money booked anyway) and finds a meaningless 94,034 % change; Version 3 limits to 127 lines planned at 10 million or more. Lesson family: guard the denominator.',
    requiredMentions: ['ist_2025_land_utf8.csv', 'Budget lines: 8620', 'ZeroDivisionError: division by zero', 'Lines with a plan of 0: 5355', 'Lines planned at 10 million or more: 127', 'Mitteilung Nr. 110/2025', 'two to four weekly hours in total', 'Ask what you are dividing by'],
    sources: [
      { claim: 'Bremen Informatik: no Sek I offers, Oberstufe, decentral LK Abitur, GK oral only, pilot and 2027/28 start, 17 %.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bremen' },
      { claim: 'Six Länder without compulsory Informatik; Bremen from 2027/28 with two to four hours.', url: 'https://informatik-monitor.de/' },
      { claim: 'Abitur 2027 dates in the Land Bremen.', url: 'https://www.bildung.bremen.de/sixcms/media.php/13/Abiturtermine%202027.pdf' },
      { claim: 'Holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Populations 31.12.2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' },
      { claim: 'Land Bremen budget actuals 2025 and licence.', url: 'https://ckan.govdata.de/dataset/haushalt-des-landes-und-der-stadtgemeinde-bremen-2025-ist-daten' }
    ],
    rejectedClaims: [
      'Any total of the Land budget: our sums are of file lines and are not presented as official totals.',
      'The national one-in-twelve figure for Bremen: it differs from the 17 % on the monitor\'s Bremen page, so only the Land page figure is used.',
      'The Informatik teacher count on the Bremen page: most breakdown cells are empty, so it is left out.',
      'Gender shares from the monitor: left out under the no gender statistics rule.',
      'Any affiliation with the Senate, the GI, the KMK or a school: none.'
    ]
  }
};
