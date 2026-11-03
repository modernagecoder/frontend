'use strict';
// Coding classes in Rhineland-Palatinate (ag- Land page, Germany cluster P4 row DE094, alloc code crp, accent #705381).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent.
// Spine: Rheinland-Pfalz is between two systems: no Informatik for all yet, a compulsory subject at every school from
// 2028/29, pilot schools already teaching it, and 21 Informatik-Profil-Schulen with Informatik in grade 5. Its G9 pupils
// write the Abitur in January (12 January to 2 February 2027), and the Informatik Leistungsfach paper is built from
// teachers' proposals chosen by a commission. Data project: the rlpDirekt events list, where "starts in the holidays" and
// "is on during the holidays" are different questions.
// Sources (read raw; copies under ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-in-rhineland-palatinate/):
//  - GI Informatik-Monitor 2026/27, Rheinland-Pfalz page (infmon-rheinland-pfalz/e77afcbd.txt; FACTS 60, 83): Realschule
//    plus Wahlpflicht area "Umfang von 14 Wochenstunden in den Jahrgangsstufen 7 bis 10, wobei verbindliche informatische
//    Inhalte zu berücksichtigen sind", own WPF Informatik "vier bis sechs Wochenstunden"; IGS and nine-year Gymnasium
//    "in den Jahrgangsstufen 9 und 10 ein zwei- bis dreistündiges Wahlfach Informatik"; eight-year Gymnasium "in den
//    Jahrgangsstufen 8 und 9 ein dreistündiges Wahlpflichtfach"; "Seit dem Schuljahr 2021/22 findet an 21
//    Informatik-Profil-Schulen in Jahrgangsstufe 5 verbindlicher Informatikunterricht statt. Schülerinnen und Schüler dieser
//    Schulen können sich für durchgehenden Informatikunterricht von Jahrgangsstufe 6 bis 10 entscheiden."; Oberstufe
//    Grundfach three hours, Leistungsfach five; LF only "wenn in den beiden Schuljahren, die der gymnasialen Oberstufe
//    unmittelbar vorausgehen, Informatik als Wahl- oder als Wahlpflichtfach belegt wurde"; "Im Leistungsfach findet eine
//    schriftliche Prüfung statt."; "Die schriftlichen Abiturprüfungsaufgaben auf erhöhtem Anforderungsniveau werden von den
//    Lehrkräften vor Ort erstellt und beim Ministerium für Bildung zur Auswahl eingereicht. Die Abiturauswahlkommission
//    wählt unter den drei Vorschlägen zwei aus, die dem Prüfling zur Bearbeitung vorgelegt werden. Schriftliche
//    Prüfungsaufgaben auf grundlegendem Niveau sind derzeit an staatlichen Schulen nicht möglich."; "Praktische
//    Prüfungsanteile (mit Rechnereinsatz) sind möglich, jedoch nicht verpflichtend."; three Sek I school types; G9 with a
//    G8 option at some Gymnasien; "Ab dem Schuljahr 2028/29 wird Informatik zum Pflichtfach an allen allgemeinbildenden
//    Schulen und an allen Förderschulen"; "Im Schuljahr 2025/2026 sind 28 Pilotschulen und im Schuljahr 2026/2027 sind 30
//    Pilotschulen mit dem Pflichtfach Informatik gestartet."; Kennzahlen: Sek II with Informatik 26 % (2024/2025); 687
//    Informatik teachers, 3 % of teachers (2025/2026).
//  - GI national page (FACTS 92, 95): RP among six Länder without Informatik for all; from 2028/29 four hours in total.
//  - Ministerium für Bildung RLP, letter of 14.05.2025 "Termine für die Abiturprüfungen an Gymnasien mit neunjährigem
//    Bildungsgang und Integrierten Gesamtschulen 2027" (abi/Mail_G9_2027.pdf via PDFKit) and Anlage
//    (abi/Anlage_Termine_Abi_2027.pdf), linked from https://mss.rlp.de/termine/termine-abitur-2027: "Vorlage der
//    dezentralen Aufgabenvorschläge ... 23.10.2026"; "Durchführung der schriftlichen Prüfung: 12.01. bis 02.02.2027";
//    central: Deutsch 13.01.2027, Englisch 15.01.2027, Mathematik 20.01.2027, Biologie 22.01.2027, Französisch 25.01.2027,
//    Physik 27.01.2027, Chemie 29.01.2027, "Prüfungstermin (9 Uhr)"; "Ausgabe der Zeugnisse der Jahrgangsstufe 13 und
//    gleichzeitig Bekanntgabe der Ergebnisse der schriftlichen Prüfung: 03.03.2027"; "Durchführung der mündlichen Prüfung:
//    11.03. bis 17.03.2027"; "Ausgabe der Zeugnisse der allgemeinen Hochschulreife: spätestens am 19.03.2027". Anlage,
//    G8GTS and others: "M (Abi) 04.05.2027 05.05.2027".
//  - KMK FER2026_27.pdf (FACTS 280): "Rheinland-Pfalz (6) 05.10. - 16.10. 23.12. - 08.01. -- 22.03. - 02.04. -- 28.06. -
//    06.08."
//  - KMK Schema (FACTS 21): Realschule plus named for Rheinland-Pfalz.
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Rheinland-Pfalz 4,129,569; Mainz 224,684.
//  - Data: Land Rheinland-Pfalz, "Liste der über rlpDirekt erfassten Veranstaltungen", GovData record
//    liste-der-uber-rlpdirekt-erfassten-veranstaltungen (publisher rlpDirekt, modified 2026-10-30), licence Datenlizenz
//    Deutschland Zero 2.0, resource https://open-rlp.egovernor.de/metaData/event/data, saved as
//    veranstaltungen-2026-11-03.json (2,691,872 bytes, sha256 57a11487...1a49cd). Notes: data "von Gemeinden,
//    Landkreisen, touristischen Regionalverbänden sowie themenspezifischen Quellen bereitgestellt". Downloaded 3 Nov 2026.
//    Descriptions (which contain ticket prices) are never printed.
// Our own calculations (scratchpad de/w/L1/rp_all.py = rp_v1 + rp_v2 + rp_v3, python3 -I, run in the data folder):
//  "Events in the file: 2969", "Starting in the Christmas holidays: 33", "On at some point in the holidays: 34",
//  "...of which started before 23 December: 1", "Events that end before they start: 4", "Longest running event: 1087 days".
//  Exploration: the one is "Römische Stadtführung in Bitburg (Gruppen)", 2026-01-05 to 2028-12-26; three of the four
//  backward rows end on 2020-07-07; for the autumn holidays 2026 (5 to 16 October) the counts are 92 starting and 94 on.
// Lesson family: two ranges overlap when each starts before the other ends; "starts inside" misses what was already running.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import json',
  'from datetime import date',
  '',
  'with open("veranstaltungen-2026-11-03.json", encoding="utf-8") as src:',
  '    events = json.load(src)',
  '',
  'holiday_start, holiday_end = date(2026, 12, 23), date(2027, 1, 8)',
  '',
  'def day(text):',
  '    return date.fromisoformat(text[:10])',
  '',
  'starting = [e for e in events if holiday_start <= day(e["startDate"]) <= holiday_end]',
  'print("Events in the file:", len(events))',
  'print("Starting in the Christmas holidays:", len(starting))'
].join('\n');

const V2 = [
  'running = [e for e in events',
  '           if day(e["startDate"]) <= holiday_end and day(e["endDate"]) >= holiday_start]',
  'started_before = [e for e in running if day(e["startDate"]) < holiday_start]',
  'print("On at some point in the holidays:", len(running))',
  'print("...of which started before 23 December:", len(started_before))'
].join('\n');

const V3 = [
  'backwards = [e for e in events if day(e["endDate"]) < day(e["startDate"])]',
  'longest = max(running, key=lambda e: (day(e["endDate"]) - day(e["startDate"])).days)',
  'print("Events that end before they start:", len(backwards))',
  'print("Longest running event:", (day(longest["endDate"]) - day(longest["startDate"])).days + 1, "days")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'Rhineland-Palatinate' },
  slug: 'coding-classes-in-rhineland-palatinate',
  code: 'crp',
  accent: '#705381',
  accentRationale: 'Rhineland-Palatinate: a deep vineyard purple #705381, the colour of ripe Riesling and Dornfelder country along the Mosel and in the Pfalz; contrast 5.26 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes in Rhineland-Palatinate',
  title: 'Coding Classes in Rhineland-Palatinate: Live Online, in English',
  description: 'Coding classes in Rhineland-Palatinate, live online in English: Informatik compulsory from 2028/29, the January 2027 Abitur, holidays and an events data project.',
  ogDescription: 'Live online coding in English for pupils in Rheinland-Pfalz: pilot schools and the 2028/29 compulsory subject, the 21 Informatik-Profil-Schulen, a G9 Abitur written in January 2027, the holidays, and a Python project on the Land\'s events list.',
  twitterDescription: 'Coding in English for Rhineland-Palatinate: Informatik from 2028/29, the January Abitur and an events data project.',
  pageName: 'Coding Classes in Rhineland-Palatinate',
  webPageDescription: 'A guide for families in Rheinland-Pfalz to coding alongside school, built from the GI Informatik-Monitor 2026/27, the Ministerium für Bildung\'s Abitur 2027 dates, the KMK holiday table and Destatis, with an original project on the rlpDirekt events data.',
  courseDescription: 'Live online coding and Informatik classes in English for pupils in Rhineland-Palatinate aged about 10 to 19, ahead of the 2028/29 compulsory subject and through the Oberstufe, in a class of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Rhineland-Palatinate',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#change', label: 'Informatik' },
    { href: '#january', label: 'Abitur' },
    { href: '#project', label: 'Events' },
    { href: '#ferien', label: 'Holidays' }
  ],
  eyebrow: 'Rheinland-Pfalz &middot; Coding and Informatik &middot; Ages 10 to 19',
  h1: 'Coding classes in Rhineland-Palatinate',
  lede: 'Rheinland-Pfalz is changing its mind about Informatik. Today it is one of six Länder where the subject is not compulsory for everyone; from the 2028/29 school year it will be compulsory at every school, and some pilot schools have started already. Its Abitur has a surprise too: pupils on the nine-year route write their exams in January. This page covers both, the holidays, and a project on the Land\'s own events data.',
  secondaryCta: { href: '#project', label: 'See the events project' },
  wa: 'Hello Modern Age Coders, we live in Rheinland-Pfalz and would like coding classes in English for our child. Could we book a free first class?',
  heroNote: 'Teaching online since 2020 &middot; 10,000+ students around the world &middot; one mentor, in English',
  spec: [
    ['Ages', 'About 10 to 19'],
    ['Core course', 'Informatik Companion, Klasse 5 to 10'],
    ['Class size', '15 to 20, or private'],
    ['Times', 'Lunchtime, evening, Saturday midday'],
    ['Mentors', 'In India, teaching in English'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding to pupils in Rhineland-Palatinate aged about 10 to 19 through live online lessons held in English. A family can pick a group of fifteen to twenty or private lessons; either way one mentor stays with the pupil and adapts to how fast they work and how they speak. Rheinland-Pfalz only makes Informatik compulsory in 2028/29, so our Informatik Companion course brings the subject forward to today.',

  picks: {
    eyebrow: 'Where pupils in Rheinland-Pfalz start',
    h2: 'Three courses for Rhineland-Palatinate',
    lede: 'Matched to a Land in transition: one for grades 5 to 10, one for the Oberstufe, one for contest-minded pupils.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'CRP / 01', title: 'Informatik before 2028/29', note: 'Grades 5 to 10. The subject Rheinland-Pfalz is about to make compulsory, taught now: algorithms, Python, data, networks.' },
      { course: 'informatik-abitur-course-java-python', code: 'CRP / 02', title: 'Leistungsfach and Grundfach Informatik', note: 'Oberstufe. Object orientation, data structures and databases for a school-written Abitur paper.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'CRP / 03', title: 'Informatics contest preparation', note: 'For 9 to 19 year olds: puzzles we write ourselves, then algorithm tasks where the pupil must also argue why the answer is right.' }
    ]
  },

  sections: [
    {
      id: 'change',
      eyebrow: 'Informatik in Rheinland-Pfalz',
      h2: 'When does Informatik become compulsory in Rheinland-Pfalz?',
      lede: 'From the 2028/29 school year, at all general schools. Until then it depends on the school. Everything here is drawn from the GI\'s Informatik-Monitor, edition 2026/27, which tracks each Land\'s regulations; Modern Age Coders has no link with its authors or with the Ministerium für Bildung in Mainz.',
      body: [
        { kind: 'two',
          leftH3: 'Today',
          left: [
            'After Grundschule, Rheinland-Pfalz has three secondary school types: Realschule plus, Integrierte Gesamtschule and Gymnasium. None has Informatik for all pupils yet, which is why the GI lists the Land among six without compulsory Informatik.',
            'There are exceptions. Since 2021/22, 21 Informatik-Profil-Schulen have taught compulsory Informatik in grade 5, and their pupils can choose to keep it every year from grade 6 to 10.'
          ],
          rightH3: 'From 2028/29',
          right: [
            'The monitor reports that Informatik will become compulsory at all general schools and all Förderschulen from 2028/29, with four weekly hours in total according to its national summary.',
            'Schools can apply to start early: 28 pilot schools began the compulsory subject in 2025/26 and 30 more in 2026/27.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Optional Informatik in Rheinland-Pfalz before 2028/29', head: ['School', 'Grades', 'What can be offered'], rows: [
          ['Realschule plus', '7 to 10', 'A 14-hour Wahlpflicht area with required Informatik content; a school\'s own Informatik elective of four to six hours in total'],
          ['IGS and nine-year Gymnasium', '9 and 10', 'A two- to three-hour Wahlfach (not on the classical-languages route)'],
          ['Eight-year Gymnasium', '8 and 9', 'A three-hour Wahlpflichtfach'],
          ['Informatik-Profil-Schule', '5, then 6 to 10', 'Compulsory in grade 5, continuous by choice']
        ] },
        { kind: 'source', html: 'Read on 2 November 2026 in the Informatik-Monitor 2026/27 (Gesellschaft für Informatik), on its Rheinland-Pfalz page and in its comparison of all Länder. Most Gymnasien and the IGS run the nine-year route; some Gymnasien offer eight years.' },
        { kind: 'p', mt: true, html: 'One detail matters for families planning ahead. The monitor states that Informatik can currently be taken as a Leistungsfach only if the pupil took it as an elective in the two school years just before the Oberstufe. A pupil who skips the grade 9 and 10 elective may lose the option of an Informatik Leistungsfach later. Our Companion course does not replace that elective, but it keeps a pupil ready to take it.' },
        { kind: 'p', html: 'Interest is high where Informatik is offered: the monitor\'s Rheinland-Pfalz page gives 26 percent of Sekundarstufe II pupils taking it in 2024/25. In 2025/26 the Land counted 687 qualified Informatik teachers, about 3 percent of its teachers.' }
      ]
    },
    {
      id: 'january',
      tint: 'tint',
      eyebrow: 'Oberstufe and Abitur',
      h2: 'Why is the Abitur in Rheinland-Pfalz written in January?',
      lede: 'Because on the nine-year route the Abitur exams come in the middle of grade 13. The ministry has set the 2027 dates.',
      body: [
        { kind: 'table', numCols: [], caption: 'Abitur 2027 at nine-year Gymnasien and IGS in Rheinland-Pfalz', head: ['Date', 'What happens'], rows: [
          ['23 October 2026', 'Schools submit their decentral task proposals to the ministry'],
          ['12 January to 2 February 2027', 'Written exams'],
          ['13 January 2027', 'German (central elements)'],
          ['15 January 2027', 'English (central elements)'],
          ['20 January 2027', 'Mathematics (central elements)'],
          ['3 March 2027', 'Grade 13 reports and written results'],
          ['11 to 17 March 2027', 'Oral exams'],
          ['By 19 March 2027', 'Abitur certificates']
        ] },
        { kind: 'source', html: 'Source: Ministerium für Bildung Rheinland-Pfalz, letter of 14 May 2025 setting the Abitur 2027 dates for nine-year Gymnasien and Integrierte Gesamtschulen, with its annex, via mss.rlp.de, read 3 November 2026. Central papers start at 9:00. At eight-year all-day Gymnasien and other school forms the written exams are in spring, with maths on 5 May 2027.' },
        { kind: 'two', mt: true,
          leftH3: 'How Informatik is examined',
          left: [
            'Informatik is not among the subjects with central elements. A Leistungsfach in Informatik ends in a written exam whose tasks are written by the teachers at the school and sent to the ministry. An Abitur selection commission picks two of the three proposals, and those two are what the candidate works on.',
            'At basic level (Grundfach) a written Informatik exam is currently not possible at state schools; it can be an oral exam or a special learning achievement.'
          ],
          rightH3: 'Computers allowed',
          right: [
            'Unusually, practical parts on a computer are possible, though not required, and there is no fixed list of aids. The monitor notes that the calculators used in maths are often allowed and that computer use with programming software may be limited to parts of a task.',
            'So a pupil should be ready both to code at a machine and to reason on paper.'
          ] },
        { kind: 'p', mt: true, html: 'A January exam changes the calendar of revision: the Christmas holidays, 23 December 2026 to 8 January 2027, end four days before the first paper. We plan the autumn as the main revision period and use the holidays for timed practice. The school writes and marks the Informatik paper and the Abitur is the school\'s to award; Modern Age Coders gives no German grades or qualifications.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'English-medium',
      h2: 'Are lessons in English a hurdle for pupils in Rheinland-Pfalz?',
      lede: 'Every class is taught live and in English. We do not teach in German, and we would rather that is clear before any booking.',
      body: [
        { kind: 'three', cells: [
          { h3: 'For families who arrived from abroad', p: 'Families come to Mainz, Ludwigshafen, Kaiserslautern or Trier for work and study. Children who already reason in English can study Informatik in that language, whatever school they attend.' },
          { h3: 'For German-school pupils', p: 'An Informatik lesson in English is also English practice. Mentors speak plainly, write new words down and know German school terms such as Leistungsfach or Realschule plus.' },
          { h3: 'For the code itself', p: 'Keywords in Python, Java and SQL are English everywhere, so learning them in English removes one translation.' }
        ] },
        { kind: 'p', mt: true, html: 'Mentors teach from India over live video. Wherever a pupil lives, the teaching is the same: the mentor gets to know them, the pupil does the coding, and every answer is reasoned through rather than copied from an answer key or an AI tool.' }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A Land-wide project',
      h2: 'What is on during the Christmas holidays? An events data project',
      lede: 'Rheinland-Pfalz publishes the events collected on its rlpDirekt platform as open data. Our pupils use it to answer a family question, "what is on during the holidays?", and discover that it hides two different questions.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The dataset is Liste der über rlpDirekt erfassten Veranstaltungen, published by the Land under the Datenlizenz Deutschland Zero 2.0. Its notes say the events come from municipalities, districts, tourism associations and other sources. We saved the file on 3 November 2026 as veranstaltungen-2026-11-03.json.',
            'Each event has a name, a place, a startDate and an endDate. Some dates carry a time and a UTC offset, some only a day, so the day() function keeps just the first ten characters.'
          ],
          rightH3: 'The question',
          right: [
            'How many events are on during the Christmas holidays, 23 December 2026 to 8 January 2027? Version 1 counts events that start inside those dates.',
            'That sounds right, until you think of an exhibition that opened in November and runs into January. It is "on" in the holidays, but it did not start in them.'
          ] },
        { kind: 'code', label: 'Version 1: events that start in the holidays', lang: 'Python', code: V1, note: 'It prints <code>Events in the file: 2969</code> and <code>Starting in the Christmas holidays: 33</code>.' },
        { kind: 'p', mt: true, html: 'The correct test for "is on at some point during the holidays" is an overlap: the event must start no later than the last holiday day, and end no earlier than the first. Two comparisons, each between one range\'s start and the other range\'s end. Version 2 uses it.' },
        { kind: 'code', label: 'Version 2 (continues Version 1): the overlap test', lang: 'Python', code: V2, note: 'It prints <code>On at some point in the holidays: 34</code> and <code>...of which started before 23 December: 1</code>.' },
        { kind: 'p', mt: true, html: 'One event more. It is a guided Roman tour of Bitburg for groups, listed from 5 January 2026 to 26 December 2028. A single row, but the principle is the whole lesson: the first program asked "starts inside?", the family meant "overlaps?". In the autumn holidays of 2026 the same two tests give 92 and 94.' },
        { kind: 'code', label: 'Version 3 (continues Version 2): are the ranges sound?', lang: 'Python', code: V3, note: 'It prints <code>Events that end before they start: 4</code> and <code>Longest running event: 1087 days</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'rlpDirekt events, file of 3 November 2026: what the versions found (our counts)', head: ['Check', 'Events'], rows: [
          ['In the file', '2,969'],
          ['Starting between 23 December 2026 and 8 January 2027', '33'],
          ['Overlapping those holidays', '34'],
          ['With an end date before the start date', '4']
        ] },
        { kind: 'source', html: 'Data: Land Rheinland-Pfalz, Liste der über rlpDirekt erfassten Veranstaltungen, Datenlizenz Deutschland Zero 2.0, via GovData, downloaded 3 November 2026. Counts are ours and describe the file, which lists only events entered on rlpDirekt.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Grades 5 and 6, on paper.</strong> Draw the holidays as a bar on a timeline. Draw four events as bars: one inside, one starting before, one ending after, one covering everything. Which ones are "on"?',
          '<strong>Python, grades 7 and 8.</strong> After running Version 1, write the overlap test on your own. Check it against your four drawn events before running it on the file.',
          '<strong>Grades 9 and 10.</strong> Version 3 finds four events that end before they start. Print them. What would you do with them, and why should the program not quietly drop them?',
          '<strong>Oberstufe.</strong> Some dates have a time and an offset such as +01:00. Change day() so it compares full moments instead of days, and find an event whose answer changes.'
        ] }
      ]
    },
    {
      id: 'ferien',
      tint: 'tint',
      eyebrow: 'School year 2026/27',
      h2: 'When are the school holidays in Rheinland-Pfalz in 2026/27?',
      lede: 'The Land\'s dates, from first to last holiday day. Families decide whether lessons continue through them.',
      body: [
        { kind: 'table', numCols: [], caption: 'School holidays in Rheinland-Pfalz, 2026/27', head: ['Holiday', 'Begins', 'Ends'], rows: [
          ['Herbstferien', '5 October 2026', '16 October 2026'],
          ['Weihnachtsferien', '23 December 2026', '8 January 2027'],
          ['Osterferien', '22 March 2027', '2 April 2027'],
          ['Sommerferien', '28 June 2027', '6 August 2027']
        ] },
        { kind: 'source', html: 'From the Kultusministerkonferenz overview of holidays for 2026/2027 (version dated 9 October 2025); the Rheinland-Pfalz line adds six movable holiday days. There is no winter break and no Whitsun break in the table. The KMK sets summer dates years ahead.' },
        { kind: 'two', mt: true,
          leftH3: 'The Land in numbers',
          left: [
            'Destatis counts 4,129,569 people in Rheinland-Pfalz on 31 December 2024 and 224,684 in Mainz, the capital. Ludwigshafen am Rhein, Koblenz, Trier and Kaiserslautern also pass 100,000 residents.',
            'From the Eifel to the Pfalz, every pupil can join the same live class.'
          ],
          rightH3: 'A short gap before the exams',
          right: [
            'For the G9 Abitur class, the Christmas holidays end on 8 January 2027 and the written exams begin on 12 January. Revision has to happen in the autumn.',
            'The summer holidays of 2027 start on 28 June, early in the German rotation, so the new school year also begins early.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are classes in Rheinland-Pfalz?',
      lede: 'German lunchtime and evening slots fall in the Indian afternoon and late evening. These rows illustrate the gap; you choose your actual time when booking.',
      body: [
        { kind: 'table', numCols: [], caption: 'Rheinland-Pfalz time and India time', head: ['Mainz or Trier', 'Mentor in India, winter', 'Mentor in India, from 28 March 2027'], rows: [
          ['13:00', '17:30', '16:30'],
          ['18:15', '22:45', '21:45'],
          ['Saturday 12:30', '17:00', '16:00']
        ] },
        { kind: 'source', html: 'Germany\'s legal time under the Einheitenzeitgesetz is MEZ, UTC+1, in winter and MESZ, UTC+2, in summer; the change back was on 25 October 2026 and the change forward is on 28 March 2027. With India fixed at UTC+5:30, the mentor\'s clock reads 4 h 30 later than yours in winter and 3 h 30 later once summer time starts.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Ready for 2028/29 and beyond',
    lede: 'Our own five stages, used to place pupils from Rheinland-Pfalz and to report their progress.',
    table: { caption: 'Informatik stages (ours)', head: ['Level', 'Grade, roughly', 'Pupils at this level'], rows: [
      ['1. Algorithms', '5 to 6', 'Describe and test a step-by-step method'],
      ['2. Python basics', '6 to 7', 'Loops, conditions, functions'],
      ['3. Dates and ranges', '7 to 9', 'Compare dates, test whether two periods overlap, check a range is valid'],
      ['4. Data and SQL', '9 to 10', 'Read open data, query a database, report honestly'],
      ['5. Oberstufe', '10 to 13', 'Design classes and data structures, both at a keyboard and by hand']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the events project. The overlap rule turns up in timetables, bookings and calendars everywhere.',
      'Parents get a short note in plain words after each stage.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Two periods overlap when each one starts before the other ends.',
      'If an end comes before a start, report it; do not hide it.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for families in Rheinland-Pfalz',
    lede: 'Each course is taught live, in English, by a single mentor from start to finish, for a class or a single pupil.',
    bands: [
      { num: 'I', h3: 'Primary age', sub: 'Ages 7 to 11', courses: [
        { code: 'CRP / P / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Games and stories in Scratch, then first apps.' },
        { code: 'CRP / P / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Patterns, puzzles and careful steps.' },
        { code: 'CRP / P / 03', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Working phone apps built from blocks.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Ages 11 to 16', courses: [
        { code: 'CRP / S / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'From beginner to confident, project by project.' },
        { code: 'CRP / S / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C#, from a first scene to a finished game.' },
        { code: 'CRP / S / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web for teens', blurb: 'React and Node.js, a whole site end to end.' }
      ] },
      { num: 'III', h3: 'Oberstufe', sub: 'Ages 15 to 19', courses: [
        { code: 'CRP / O / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Clean object-oriented code.' },
        { code: 'CRP / O / 02', slug: 'mysql-mastery-for-teens', title: 'SQL for Teens', blurb: 'Tables, keys and queries that hold up.' },
        { code: 'CRP / O / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik in English', blurb: 'For a maths paper on 20 January 2027 on the nine-year route.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live lessons around a school week in Rheinland-Pfalz',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Lunchtime', l: 'For pupils whose school day ends around one.' },
      { time: 'Evenings', l: 'For older pupils after homework.' },
      { time: '1-on-1', l: 'Set with the mentor, moved around the January exams.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'A mentor who knows how the pupil thinks.' },
      { h3: 'Clear speech', p: 'Paced English, German school terms understood.' },
      { h3: 'Doing, not watching', p: 'Pupils write the code themselves.' },
      { h3: 'Land calendar', p: 'Planned around Rheinland-Pfalz holidays and Abitur dates.' },
      { h3: 'Parent notes', p: 'Brief updates on progress.' },
      { h3: 'Group sizes', p: 'A group of 15 to 20, or private lessons.' }
    ]
  },

  projectsH2: 'Student projects from older learners',
  projectsLede: 'Some finished work is shown below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page gathers more.',
  reviewsLede: 'Parents\' and students\' Google reviews, verbatim.',

  fees: {
    h2: 'Fees for families in Rheinland-Pfalz',
    lede: 'You pay month by month for eight live classes and can end the plan after any month. Euro amounts on the page come from the European Central Bank reference rate; the actual charge is in US dollars, which your bank converts, so the booked amount may differ by a little.',
    free: ['A free first class', 'A reasoning task and a first program', 'No card needed'],
    group: ['A class of 15 to 20 at a similar stage', 'A mentor who stays the same', 'Two classes a week', 'Monthly, end any month'],
    one: ['One pupil with one mentor', 'Their own speed and topics', 'Times planned around school']
  },

  faq: {
    eyebrow: 'Families in Rheinland-Pfalz ask',
    h2: 'Coding classes in Rhineland-Palatinate: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. English is our only teaching language, in every lesson. Mentors choose simple words, slow down for younger pupils, and quickly get used to a German accent; a pupil may drop in a German term like Leistungsfach without any trouble.' },
      { q: 'When will Informatik be compulsory in Rheinland-Pfalz?', a: 'From the 2028/29 school year, at all general schools and Förderschulen, according to the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27. Pilot schools started earlier: 28 in 2025/26 and 30 in 2026/27.' },
      { q: 'What is an Informatik-Profil-Schule?', a: 'One of 21 schools that, since 2021/22, have taught compulsory Informatik in grade 5, according to the Informatik-Monitor. Their pupils can choose to continue Informatik every year from grade 6 to 10.' },
      { q: 'Can my child take an Informatik Leistungsfach without the elective in grades 9 and 10?', a: 'Currently not, according to the Informatik-Monitor: Informatik can be a Leistungsfach only if it was taken as an elective in the two school years immediately before the Oberstufe. Ask the school early.' },
      { q: 'When is the Abitur in Rheinland-Pfalz in 2027?', a: 'On the nine-year route, the Ministerium für Bildung sets the written exams from 12 January to 2 February 2027, with maths on 20 January, orals from 11 to 17 March and certificates by 19 March 2027.' },
      { q: 'Who writes the Informatik Abitur paper?', a: 'The Informatik-Monitor explains that teachers at the school write the raised-level tasks and submit three proposals to the ministry; an Abitur selection commission chooses two, which the candidate works on.' },
      { q: 'What time are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. An 18:15 lesson in Mainz is 22:45 in India during the winter.' },
      { q: 'Will your classes count towards the Abitur?', a: 'No. The Abitur and every school mark are given by the school under Land rules. We help pupils understand and practise; we issue nothing that counts in the German system.' },
      { q: 'Where are the mentors?', a: 'In India. They teach live over video, and each pupil keeps one mentor.' },
      { q: 'How are fees charged?', a: 'Each month, by card. Prices appear in euro using the European Central Bank\'s reference rate, yet the money is taken in US dollars and changed by your bank. The trial class costs nothing and asks for no card details.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Rheinland-Pfalz.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page we have built.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik in all Länder', p: 'Rheinland-Pfalz compared nationally.' },
      { href: '/abitur-computer-science-in-english', label: 'Informatik Abitur in English', p: 'The Oberstufe subject explained.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The maths exam in detail.' },
      { href: '/jugendwettbewerb-informatik-preparation', label: 'Jugendwettbewerb Informatik', p: 'The national contest between Biber and BwInf.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live lesson looks like.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The free first class is a small problem to think through and a few lines of code. Along the way the mentor sees your child\'s level and English, and then proposes a course and a class.',
    readFirst: 'You can also read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">all courses</a> first.',
    note: 'Live online, English only, with mentors in India. WhatsApp is the quickest route to us, in English.',
    formNote: 'Free of charge, with no card and no obligation.'
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
    bottomRight: 'Overlap is not the same as starting inside'
  },

  personalityCss: `
.ag-root.ag-crp .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-crp .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-crp .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-crp .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-crp .ag-band-head h3 { letter-spacing: 0.004em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Rheinland-Pfalz and national pages); Ministerium für Bildung Rheinland-Pfalz, Abitur 2027 letter of 14 May 2025 and annex (mss.rlp.de); KMK holidays 2026/27 and Schema; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz. Data: Land Rheinland-Pfalz, rlpDirekt Veranstaltungen, Datenlizenz Deutschland Zero 2.0.',
    localProject: 'rlpDirekt events of 3 November 2026: Version 1 counts 33 events starting in the Christmas holidays 2026/27, Version 2 uses the overlap test and finds 34 (one Bitburg group tour running 2026 to 2028), Version 3 finds 4 events ending before they start. Lesson family: two ranges overlap when each starts before the other ends.',
    requiredMentions: ['veranstaltungen-2026-11-03.json', 'Events in the file: 2969', 'Starting in the Christmas holidays: 33', 'On at some point in the holidays: 34', 'Events that end before they start: 4', '12 January to 2 February 2027', '21 Informatik-Profil-Schulen', 'Overlap is not the same as starting inside'],
    sources: [
      { claim: 'RP Informatik options, Profil-Schulen, Oberstufe, decentral LF Abitur, pilot schools, 2028/29, figures.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/rheinland-pfalz' },
      { claim: 'Six Länder without compulsory Informatik; RP from 2028/29 with four hours.', url: 'https://informatik-monitor.de/' },
      { claim: 'Abitur 2027 dates (G9/IGS) and annex.', url: 'https://mss.rlp.de/termine/termine-abitur-2027' },
      { claim: 'Holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Populations 31.12.2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/02-bundeslaender.xlsx?__blob=publicationFile' },
      { claim: 'rlpDirekt events data and licence.', url: 'https://ckan.govdata.de/dataset/liste-der-uber-rlpdirekt-erfassten-veranstaltungen' }
    ],
    rejectedClaims: [
      'Ticket prices in event descriptions: never printed (no euro figures on Germany pages).',
      'Why four events end before they start: not stated in the data, so not explained.',
      'The weekly hours of the 2028/29 subject per grade: only the national total of four hours is given.',
      'Gender shares from the monitor: left out under the no gender statistics rule.',
      'Any affiliation with the ministry, the GI, the KMK, rlpDirekt or a school: none.'
    ]
  }
};
