'use strict';
// Coding and maths classes in Berlin (ag- Land page for the city-state, Germany cluster P4 row DE098, hubGroup land, code cma,
// accent #0A463D). The live page coding-classes-for-kids-berlin covers ages 6 to 12 (school gaps, Oberbaumbrücke bike
// counter, Biber); this page is the Land page for every age, coding AND maths, with its own spine and data set.
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show euro,
// checkout charges USD.
// Spine: Berlin is the Land where the written Informatik Abitur is written by the pupil's own teachers and a computer is
// allowed, while the maths Abitur draws on the common IQB pool on shared dates. Coding is never compulsory for all; maths
// always is. One page for both, from MSA to Abitur, plus adults.
// Sources (read raw 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Berlin page (facts-school/src/infmon-berlin/7092f8bb.txt): ITG "im Umfang von einer
//    Wochenstunde" in grade 7 or 8; "Das Wahlpflichtfach Informatik wird an allen Schularten in der Regel zweistündig in den
//    Jahrgangsstufen 9 und 10 bzw. dreistündig in der Jahrgangsstufe 9 oder 10 angeboten."; Einführungsphase at ISS and
//    Gemeinschaftsschule "Wahlpflichtfach Informatik im Umfang von zwei bis drei Wochenstunden"; Qualifikationsphase
//    "dreistündig ... (Grundkurs) als auch fünfstündig ... (Leistungskurs)"; "Im Leistungskurs Informatik findet eine
//    schriftliche Prüfung statt."; "Die schriftlichen Abiturprüfungsaufgaben werden dezentral entwickelt. Dazu werden durch die
//    Lehrkräfte für einen Kurs zwei Aufgabenvorschläge eingereicht, von denen einer ausgewählt wird. Die Bearbeitung an einem
//    Rechner ist in allen Aufgaben jedes Aufgabenvorschlags zugelassen."; Primarstufe grades 1 to 6; "grundständige"
//    Gymnasien from grade 5; G8 at the Gymnasium, G9 at ISS and Gemeinschaftsschule (FACTS 54); key figures: Sek II share
//    "12 %" (2024/2025, KMK); 470 Informatik teachers, 3 % of all teachers, 19 new hires (2025/2026, Senatsverwaltung).
//  - Informatik-Monitor national page: Berlin among six Länder without Informatik compulsory for all; no binding plans
//    (FACTS 92, 96).
//  - berlin.de Prüfungen und Abschlüsse: BBR after grade 9, MSA after grade 10 (FACTS 66).
//  - IQB: common pools in German, maths, English, French since 2017; "weitgehend an gemeinsamen Terminen" since 2022; Part A
//    without aids, handed in within 110 (LK) or 100 (GK) minutes; LK 300 minutes, 100 BE; GK 255 minutes, 80 BE; each Land
//    decides which pool tasks it uses (FACTS 30 to 39).
//  - KMK maths standards: one combined ESA/MSA document of 23.06.2022, Leitideen (FACTS 122, 124); IQB VERA-8 2027 window
//    8 February to 25 March 2027 (FACTS 115), results not graded (FACTS 116).
//  - Mathematik-Olympiade: Regionalrunde 11 November 2026, Landesrunde 26 to 28 February 2027 (FACTS 165, 166); Känguru
//    8 April 2027, registration 1 December 2026 to 31 January 2027 (FACTS 183, 184).
//  - KMK FER2026_27 row "Berlin 19.10. - 31.10. 23.12. - 02.01. 01.02. - 06.02. 22.03. - 02.04. 07.05. 18.05. - 19.05.
//    01.07. - 14.08." (FACTS 278); Sommerferienregelung 2027 "01.07. - 14.08." (FACTS 259).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Berlin 3,685,265 (Land and city are the same).
//  - berlin.de answered HTTP 429 to the Prüfungsplan 2027 PDF on 3 Nov 2026: stopped, not retried; no 2027 Berlin exam dates
//    printed (src-pages/<slug>/raw/BLOCKED.txt).
//  - Data: Senatsverwaltung für Bildung, Jugend und Familie, "Breitband-Ausbau der Berliner Schulen", via GovData
//    https://ckan.govdata.de/dataset/breitband-ausbau-der-berliner-schulen, licence CC BY (dcat-ap.de/def/licenses/cc-by),
//    file breitbandausbau-nov-2025.csv (96,109 bytes, ISO-8859-1, converted to UTF-8 as breitband_2025.csv), downloaded
//    3 November 2026 (before the 429).
// Our own calculations (scratchpad de/w/L2/be/v1.py, v2.py, v3.py, python3 -I), exact output:
//    v1: "Schools: 713" / "Status says usable: 594 83.3 %" / "Yes/no column says usable: 590 82.7 %"
//    v2: "Rows where the two columns disagree: ['02G26b', '10K14', '10XD01', '10G10a']"
//    v3: "Schools with both dates: 685" / "Mean wait: 529.8 days; median: 537 days" / "Shortest: 0 Longest: 1191"
//    District medians (days, site visit to active kit): Mitte 389.0, Pankow 414.5, Spandau 634.5, Tempelhof-Schöneberg 934.0.
// Lesson family: cross-check two fields that should agree before you report a percentage; then summarise with mean and median.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("breitband_2025.csv", encoding="utf-8") as f:',
  '    schools = list(csv.DictReader(f, delimiter=";"))',
  '',
  'by_status = sum(1 for s in schools if s["aktueller status"] == "Anschluss nutzbar")',
  'by_flag = sum(1 for s in schools if s["anschluss nutzbar"] == "Ja")',
  'print("Schools:", len(schools))',
  'print("Status says usable:", by_status, round(100 * by_status / len(schools), 1), "%")',
  'print("Yes/no column says usable:", by_flag, round(100 * by_flag / len(schools), 1), "%")'
].join('\n');

const V2 = [
  'clash = [s["schulnummer"] for s in schools',
  '         if (s["aktueller status"] == "Anschluss nutzbar") != (s["anschluss nutzbar"] == "Ja")]',
  'print("Rows where the two columns disagree:", clash)'
].join('\n');

const V3 = [
  'from datetime import datetime',
  'from statistics import mean, median',
  '',
  'def day(text):',
  '    try:',
  '        return datetime.strptime(text.strip(), "%d.%m.%Y").date()',
  '    except ValueError:',
  '        return None',
  '',
  'waits = []',
  'for s in schools:',
  '    visit, kit = day(s["begehung "]), day(s["aktive technik verbaut "])',
  '    if visit and kit:',
  '        waits.append((kit - visit).days)',
  'print("Schools with both dates:", len(waits))',
  'print("Mean wait:", round(mean(waits), 1), "days; median:", median(waits), "days")',
  'print("Shortest:", min(waits), "Longest:", max(waits))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'Berlin: coding and maths' },
  slug: 'coding-and-maths-classes-in-berlin-germany',
  code: 'cma',
  accent: '#0A463D',
  accentRationale: 'Berlin Land page for coding and maths: a deep Spree green #0A463D, the dark water of the river and the Tiergarten canopy, distinct from the brick red of the Berlin children\'s page; contrast 8.71 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding and maths classes in Berlin',
  title: 'Coding and Maths Classes in Berlin: Live Online in English',
  description: 'Coding and maths classes in Berlin for all ages, live online in English: Informatik and the MSA, the Berlin Abitur in both, holidays and a school data project.',
  ogDescription: 'Live coding and maths in English for Berlin learners from Klasse 7 to the Abitur and beyond: why Berlin\'s Informatik Abitur is set by the school and allows a computer, how the maths Abitur uses the common IQB pool, the 2026/27 holidays and a project on fibre at Berlin schools.',
  twitterDescription: 'Coding and maths in English for Berlin: Informatik, MSA and Abitur rules, plus a school broadband data project.',
  pageName: 'Coding and Maths Classes in Berlin',
  webPageDescription: 'The Berlin page of Modern Age Coders for coding and maths at every age, built from the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, the IQB, the KMK, the Berlin Senate and Destatis, with an original Python and statistics project on the Senate\'s school broadband data.',
  courseDescription: 'Live online coding and maths classes in English for learners in Berlin: Informatik from Klasse 7, Abitur Informatik and Abitur maths for the Oberstufe, competition maths, and Python, data and AI for adults, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Berlin, coding and maths',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#coding', label: 'Coding' },
    { href: '#maths', label: 'Maths' },
    { href: '#project', label: 'Fibre data' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Berlin &middot; Coding and maths &middot; Klasse 7 to Abitur, and adults',
  h1: 'Coding and maths classes in Berlin',
  lede: 'Berlin treats its two thinking subjects very differently. Maths is compulsory to the end, and its Abitur shares tasks and dates with other Länder through the IQB pool; Informatik is optional, and its written Abitur is drafted by the pupil\'s own teachers, with a computer allowed. This page explains both systems from the MSA to the Abitur, the 2026/27 holidays, how our live classes in English work for teenagers and adults, and a statistics project on the Senate\'s own data about fibre connections at Berlin schools. Families with younger children will find our page on coding for Berlin kids more useful.',
  secondaryCta: { href: '#project', label: 'See the fibre project' },
  wa: 'Hello Modern Age Coders, I am in Berlin and would like a free first class in coding or maths, taught in English.',
  heroNote: 'Live online classes since 2020 &middot; more than 10,000 students worldwide &middot; taught in English by a mentor you keep',
  spec: [
    ['Ages', 'About 12 to 19, and adults'],
    ['Subjects', 'Coding, Informatik and maths'],
    ['Fits beside', 'ITG, Wahlpflicht Informatik, MSA, Abitur'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Teachers', 'Mentors in India, teaching in English'],
    ['Try first', 'One free class, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders offers coding and maths classes in Berlin as live online lessons in English for teenagers and adults, in a group of fifteen to twenty or one to one. Pupils get Informatik help from Klasse 7, Java or Python for the Oberstufe and Abitur maths practice in English; adults learn Python, data and AI from scratch. Berlin has no compulsory Informatik for everyone, so most pupils start coding outside school.',

  picks: {
    eyebrow: 'Berlin starting points',
    h2: 'Three courses for Berlin teenagers in coding and maths',
    lede: 'One for the Informatik course in the Oberstufe, one for the Abitur maths exam, and one for pupils who like hard problems for their own sake.',
    items: [
      { course: 'informatik-abitur-course-java-python', code: 'CMA / 01', title: 'Informatik for the Oberstufe and Abitur', note: 'Ages about 15 to 19. Object orientation, data structures, databases and automata in Java or Python, with exam-style tasks written on and off the computer.' },
      { course: 'abitur-mathematics-course-in-english', code: 'CMA / 02', title: 'Abitur maths in English', note: 'Ages about 16 to 19. Analysis, analytic geometry and stochastics in the IQB pool format, Part A without aids and Part B with them, on problems we write ourselves.' },
      { course: 'mathematik-olympiade-and-kaenguru-training-course', code: 'CMA / 03', title: 'Mathematik-Olympiade and Känguru training', note: 'Ages about 8 to 18. Problem solving by Klassenstufe for the Olympiad rounds and the Känguru, original problems only.' }
    ]
  },

  sections: [
    {
      id: 'coding',
      eyebrow: 'Informatik in Berlin',
      h2: 'Is Informatik compulsory in Berlin schools?',
      lede: 'No. Berlin offers a short required course and then electives. The details below come from the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, which compiles the Berlin ordinances.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in a Berlin school career, from Klasse 7 to the Abitur', head: ['Stage', 'Grades', 'What is on offer'], rows: [
          ['ITG, all school types', '7 or 8', 'Informationstechnischer Grundkurs, one lesson a week'],
          ['Wahlpflicht Informatik', '9 and 10', 'Elective, usually two lessons a week, or three in one of the two years'],
          ['Einführungsphase, ISS and Gemeinschaftsschule', '11', 'Elective Informatik, two to three lessons a week'],
          ['Qualifikationsphase', 'last two years', 'Grundkurs, three lessons a week, or Leistungskurs, five'],
          ['Abitur', 'final year', 'Written exam in the Leistungskurs; Grundkurs as written, oral or presentation subject']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Berlin page, read 2 November 2026, citing the Sekundarstufe I-Verordnung and the Verordnung über die gymnasiale Oberstufe. A school can also offer the elective earlier, in grades 7 or 8, as part of its profile. The GI\'s national summary names Berlin among six Länder without Informatik that is compulsory for all pupils and says no binding plans to change that are known.' },
        { kind: 'two', mt: true,
          leftH3: 'Teachers write the exam',
          left: [
            'Here Berlin differs from Baden-Württemberg, Bavaria or Saxony. The monitor records that written Informatik Abitur tasks in Berlin are developed decentrally: the teachers of a course submit two task proposals, and one of them is chosen. Work at a computer is permitted in every task of each proposal, limited to the parts where it is needed for the subject, and the teacher lists the aids pupils will receive.',
            'For a pupil this means two things. The exam follows their own course closely, and practical programming can be part of it. Both make steady programming practice through the Qualifikationsphase worth more than last-minute cramming.'
          ],
          rightH3: 'How many take it',
          right: [
            'The monitor gives 12 % as the share of Berlin upper secondary pupils taking Informatik in 2024/25, from KMK figures, a little under the national average of about 15 % it quotes. For 2025/26 it reports 470 Informatik teachers in Berlin, 3 % of all teachers, and 19 new Informatik teachers hired in the year.',
            'Informatik can be the second to fifth Abitur subject, the monitor notes, but not the first, and it cannot replace the science a pupil must take.'
          ] },
        { kind: 'p', mt: true, html: 'The practical upshot for a Berlin family is that a teenager who wants to program seriously usually has to choose it: the elective in grade 9, then a course in the Oberstufe if the school runs one. We teach alongside that choice, or instead of it when a school does not offer the course, and in both cases the school\'s own course is what counts for the Abitur. We do not set, mark or award school grades.' }
      ]
    },
    {
      id: 'schools',
      eyebrow: 'Berlin schools',
      h2: 'How is the Berlin school system organised?',
      lede: 'Six years of primary school, then three secondary school types, and two speeds to the Abitur, in a Land of 3,685,265 people (Destatis, 31 December 2024) where the city and the Land are one.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Primary to grade 6', p: 'The monitor describes a primary stage of grades 1 to 6 at the Grundschule or the Gemeinschaftsschule. Some Gymnasien, called grundständig, take pupils from grade 5 instead.' },
          { h3: 'Three secondary types', p: 'From grade 7 pupils attend a Gemeinschaftsschule, an Integrierte Sekundarschule (ISS) or a Gymnasium. The KMK names the ISS as Berlin\'s school that combines all tracks.' },
          { h3: 'Two speeds', p: 'At the Gymnasium the Oberstufe runs from grade 10 to 12 (G8). At the ISS and the Gemeinschaftsschule grade 11 is the Einführungsphase and the Abitur comes after grade 13 (G9).' }
        ] },
        { kind: 'p', mt: true, html: 'At the end of grade 10 a Berlin pupil can gain the Mittlerer Schulabschluss (MSA), and after grade 9 the Berufsbildungsreife, as the Senate\'s page on exams and qualifications describes. Maths is part of the MSA, and the KMK has had one combined set of maths standards for the Erster Schulabschluss and the MSA since its version of 23 June 2022, built on five Leitideen: number and operations, measurement, structures and functions, space and shape, and data and chance.' }
      ]
    },
    {
      id: 'maths',
      tint: 'tint',
      eyebrow: 'Maths in Berlin',
      h2: 'How is the maths Abitur set in Berlin?',
      lede: 'Unlike Informatik, maths draws on tasks shared between the Länder. The facts here come from the Institut zur Qualitätsentwicklung im Bildungswesen (IQB), which coordinates the shared pool.',
      body: [
        { kind: 'table', numCols: [], caption: 'The shared maths Abitur pool: format by level (IQB)', head: ['Feature', 'Leistungskurs (raised level)', 'Grundkurs (basic level)'], rows: [
          ['Working time, including choice time', '300 minutes', '255 minutes'],
          ['Total marks (Bewertungseinheiten)', '100', '80'],
          ['Part A, no aids, handed in within', '110 minutes', '100 minutes'],
          ['Topics in both parts', 'Analysis, analytic geometry or linear algebra, stochastics', 'The same three areas']
        ] },
        { kind: 'source', html: 'Source: IQB, Abitur pages and Beschreibung der Struktur der Aufgaben (Mathematik), read 2 November 2026. Since 2017 the pools cover German, maths, English and French; since 2022 those exams have been held largely on common dates. Each Land, Berlin included, decides through its own commission which pool tasks it uses and how far it adds its own. The Senate\'s 2027 exam plan could not be fetched when we checked (the server asked us to wait), so this page prints no Berlin exam date.' },
        { kind: 'two', mt: true,
          leftH3: 'What Part A asks for',
          left: [
            'Part A is the hand-in-first section without a calculator or formula sheet. It rewards fluency: differentiating a product, solving an equation exactly, reading a probability off a tree. Pupils who rely on a computer algebra system for everything find these tasks slow, which costs time they need for Part B.',
            'In our maths classes we time Part A style questions separately and practise them without any device, then move to longer Part B problems where tools are allowed.'
          ],
          rightH3: 'Earlier checkpoints',
          right: [
            'Before the Abitur come smaller milestones. The IQB lists the 2027 window for VERA-8, the comparison test in grade 8 that includes maths, as 8 February to 25 March 2027; it is not graded and produces no school rankings. The MSA follows in grade 10.',
            'For pupils who want more than the syllabus, the Mathematik-Olympiade has its regional round on 11 November 2026 and its Land round from 26 to 28 February 2027, and the Känguru der Mathematik is on 8 April 2027, with online registration open from 1 December 2026 to 31 January 2027.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are your coding and maths classes taught in German?',
      lede: 'No, in English only. Mentors work live from India and adjust to the learner.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English, every lesson', p: 'Nothing is taught in German. Many Berlin learners study in English already, at an international or bilingual school or at work; for the rest, an hour of maths or code in English doubles as language practice.' },
          { h3: 'At the learner\'s speed', p: 'Mentors pace each explanation, check understanding before moving on and adapt to the learner\'s accent. Adults starting from zero get the same patience as a grade 7 pupil.' },
          { h3: 'German maths words kept', p: 'Berlin exams use Ableitung, Wahrscheinlichkeit, Vektor and Operatoren such as berechnen or begründen. We teach each idea in English and name the German term next to it.' }
        ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Berlin data project',
      h2: 'How many Berlin schools have usable fibre? Two columns, two answers',
      lede: 'The Senatsverwaltung für Bildung, Jugend und Familie publishes the progress of fibre broadband at every Berlin school it manages. Our teenagers use it for a project that is half programming and half statistics: before reporting a percentage, check that two columns that should agree really do; then describe the waiting times with a mean and a median.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The file is the November 2025 extract of Breitband-Ausbau der Berliner Schulen, published under a CC BY licence that allows reuse with credit. It has one row per school site: school number, district, school type, name, address, a current status, and dates for the site visit (Begehung), civil works (Tiefbau) and the installation of active network equipment, plus a final yes or no for whether the connection is usable. We downloaded it on 3 November 2026 and saved it as UTF-8.',
            'It holds 713 rows across all twelve districts.'
          ],
          rightH3: 'The question',
          right: [
            'What share of these schools can actually use their fibre connection? The file seems to answer it twice: the status column has a value Anschluss nutzbar, and a separate column says Ja or Nein. A careful analyst counts both.',
            'Then a maths question: how long did a school wait from the site visit to the installed equipment, and is the mean a fair summary?'
          ] },
        { kind: 'code', label: 'Version 1: count usable connections two ways', lang: 'Python', code: V1, note: 'It prints: <code>Schools: 713</code>, <code>Status says usable: 594 83.3 %</code> and <code>Yes/no column says usable: 590 82.7 %</code>.' },
        { kind: 'p', mt: true, html: 'Two columns, two answers: 594 by the status, 590 by the yes or no field. The difference is small, but a report that quotes 83.3 % in one paragraph and 82.7 % in the next loses trust. Version 2 lists the rows behind the gap.' },
        { kind: 'code', label: 'Version 2: find the rows that disagree', lang: 'Python', code: V2, note: 'It prints: <code>Rows where the two columns disagree: [\'02G26b\', \'10K14\', \'10XD01\', \'10G10a\']</code>.' },
        { kind: 'p', mt: true, html: 'Four schools are marked usable in the status column and Nein in the final column. In all four, the civil works and the equipment installation are dated 2025, which suggests the yes or no field had not caught up when the extract was made, but the file does not say, so we report both counts and name the four rows rather than guess. That is the habit: when two fields should agree and do not, show the disagreement.' },
        { kind: 'code', label: 'Version 3: mean and median waiting time', lang: 'Python', code: V3, note: 'It prints: <code>Schools with both dates: 685</code>, <code>Mean wait: 529.8 days; median: 537 days</code> and <code>Shortest: 0 Longest: 1191</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Median days from site visit to installed equipment, selected districts (our calculation)', head: ['District', 'Schools with both dates', 'Median wait in days'], rows: [
          ['Mitte', '54', '389'],
          ['Pankow', '74', '414.5'],
          ['Spandau', '48', '634.5'],
          ['Tempelhof-Schöneberg', '62', '934']
        ] },
        { kind: 'source', html: 'Data: Senatsverwaltung für Bildung, Jugend und Familie, Breitband-Ausbau der Berliner Schulen (November 2025 extract), licence CC BY, downloaded 3 November 2026. Counts, percentages, means and medians are our own calculations; the file gives no reasons for differences between rows or districts, and neither do we.' },
        { kind: 'p', mt: true, html: 'Here the mean (529.8 days) and the median (537 days) are close, so the typical school waited about a year and a half, and neither number misleads. The maths lesson is to check that before choosing one: had a handful of schools waited five years, the mean would have jumped while the median barely moved. The wait of 0 days at one site is worth a second look too, since a visit and an installation on the same day is unusual.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Klasse 7 and 8, by hand.</strong> Five friends wait 3, 4, 4, 5 and 30 minutes for a bus. Work out the mean and the median. Which one describes a normal wait?',
          '<strong>Klasse 9 and 10, Python.</strong> Run Version 1 and explain in one sentence why the two percentages differ. Then write Version 2 before reading ours.',
          '<strong>Oberstufe, statistics.</strong> Compute the quartiles of the waiting times and draw a box plot. Is any district an outlier by the 1.5 times IQR rule?',
          '<strong>Adults.</strong> Turn Version 3 into a function that returns mean, median and the share of waits over two years, then test it on a list you make up.'
        ] }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'Holidays',
      h2: 'When are the Berlin school holidays in 2026/27?',
      lede: 'Berlin starts the 2027 summer holiday early, on 1 July. Our classes continue through the holidays unless you pause them.',
      body: [
        { kind: 'table', numCols: [], caption: 'Berlin school holidays 2026/27, first and last day', head: ['Holiday', 'Dates'], rows: [
          ['Autumn', '19 to 31 October 2026'],
          ['Christmas', '23 December 2026 to 2 January 2027'],
          ['Winter', '1 to 6 February 2027'],
          ['Easter', '22 March to 2 April 2027'],
          ['Single days', '7 May 2027, and 18 to 19 May 2027'],
          ['Summer', '1 July to 14 August 2027']
        ] },
        { kind: 'source', html: 'From the KMK overview Ferien im Schuljahr 2026/2027, dated 9 October 2025, and the KMK summer dates for 2025 to 2030. The KMK agrees summer holidays years ahead; Berlin sets its other holidays itself.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are classes in Berlin?',
      lede: 'Late afternoon and early evening on weekdays, or around midday at the weekend, picked in your own clock when you book.',
      body: [
        { kind: 'table', numCols: [], caption: 'Possible Berlin lesson times, with the hour in India', head: ['Berlin', 'India, until 27 March 2027', 'India, from 28 March 2027'], rows: [
          ['17:15', '21:45', '20:45'],
          ['Saturday 12:00', '16:30', '15:30'],
          ['Sunday 16:00', '20:30', '19:30']
        ] },
        { kind: 'source', html: 'Berlin keeps German legal time: UTC+1 in winter and UTC+2 in summer under the Einheitenzeitgesetz, with this year\'s change back on 25 October 2026 and the next change forward on 28 March 2027. India keeps UTC+5:30 all year, so it is four and a half hours ahead now and three and a half from late March. Times shown are examples; batches are arranged with each family.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Coding and maths milestones for Berlin learners',
    lede: 'Stages we use ourselves to place a learner in coding or maths. They describe skills, not school marks.',
    table: { caption: 'Milestones from Klasse 7 to the Abitur (ours)', head: ['Stage', 'Typical point', 'The learner can'], rows: [
      ['1. First programs', 'ITG, Klasse 7 or 8', 'Write short programs with loops and decisions in Python'],
      ['2. Data and percentages', 'Klasse 9 and 10', 'Read a CSV file, count with conditions and report a percentage they have checked'],
      ['3. MSA maths', 'Klasse 10', 'Solve linear and quadratic problems and read data and chance questions with confidence'],
      ['4. Objects and statistics', 'Einführungsphase', 'Model problems with classes; describe data with mean, median and quartiles'],
      ['5. Abitur level', 'Qualifikationsphase', 'Handle Part A maths without aids and write a complete Informatik solution under time pressure']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 2 is the fibre project: a pupil learns that a percentage is only as good as the column it was counted from.',
      'We tell you what your teenager can now do and explain, not how long they sat at the screen.'
    ] },
    right: { h3: 'For learners', ps: [
      'If two columns should say the same thing, count both. If they differ, show the rows.',
      'Before you quote an average, look at the median too.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more coding and maths courses for Berlin',
    lede: 'Each course runs live in English with a mentor who stays the same, in a batch of fifteen to twenty or privately.',
    bands: [
      { num: 'I', h3: 'Lower secondary', sub: 'Klasse 7 to 10', courses: [
        { code: 'CMA / SEK / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Algorithms and programming beside the ITG and the elective.' },
        { code: 'CMA / SEK / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'Algebra, geometry and data for the years before the MSA.' },
        { code: 'CMA / SEK / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics competitions', blurb: 'Biber to Bundeswettbewerb, with our own tasks.' }
      ] },
      { num: 'II', h3: 'Oberstufe', sub: 'Ages 15 to 19', courses: [
        { code: 'CMA / OST / 01', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The stochastics the Abitur and university expect.' },
        { code: 'CMA / OST / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB maths', blurb: 'For Berlin pupils on the IB Diploma instead of the Abitur.' },
        { code: 'CMA / OST / 03', slug: 'ib-diploma-computer-science-course', title: 'IB computer science', blurb: 'The IB route to programming and theory.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'CMA / ADULT / 01', slug: 'data-science-complete-masterclass-college', title: 'Data science', blurb: 'Python, statistics and machine learning on real data.' },
        { code: 'CMA / ADULT / 02', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'How large models work and how to build with them.' },
        { code: 'CMA / ADULT / 03', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus, linear algebra and proof for adult learners.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work for Berlin learners',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Evenings', l: 'Weekday lessons after school or work, Berlin time.' },
      { time: 'Weekends', l: 'Saturday or Sunday, from late morning.' },
      { time: 'One to one', l: 'A slot agreed with your mentor, moved around exams.' }
    ],
    cells: [
      { h3: 'Same mentor', p: 'Coding or maths with one person who knows the gaps.' },
      { h3: 'Live work', p: 'The learner writes the code or the working; the mentor questions it.' },
      { h3: 'Exam practice', p: 'Timed Part A maths and Informatik tasks for the Oberstufe.' },
      { h3: 'Both languages of school', p: 'English teaching with the German exam words named.' },
      { h3: 'Notes home', p: 'Brief updates for parents of school pupils.' },
      { h3: 'Batch or solo', p: 'A group of fifteen to twenty, or private lessons.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'A selection of projects by learners who kept going; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more of them.',
  reviewsLede: 'Google reviews from students and parents, as they posted them.',

  fees: {
    h2: 'Fees for Berlin learners',
    lede: 'Each month covers eight live classes. We display the fee in euro, calculated from the European Central Bank reference rate, and charge it in US dollars, so the conversion is done by your bank and the booked amount can be a little different.',
    free: ['A free first class in coding or maths', 'One short task at the right level', 'No card details'],
    group: ['Fifteen to twenty learners at a similar level', 'A mentor who stays with the group', 'Two classes a week', 'Pay monthly, stop when you like'],
    one: ['One learner with one mentor', 'Coding, maths or both, around school or work', 'Times you agree together']
  },

  faq: {
    eyebrow: 'Berlin learners ask',
    h2: 'Coding and maths classes in Berlin: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every lesson is live and in English only, taught by mentors based in India who adapt to your pace and accent. German exam words such as Ableitung or Operatoren are named next to the English.' },
      { q: 'Is Informatik compulsory in Berlin?', a: 'No. The Informatik-Monitor 2026/27 names Berlin among six Länder without Informatik for all pupils. There is a one-lesson ITG course in grade 7 or 8, and Informatik is an elective, usually in grades 9 and 10.' },
      { q: 'Who sets the Informatik Abitur in Berlin?', a: 'The school. According to the Informatik-Monitor, the course teachers submit two task proposals and one is chosen, and work at a computer is allowed in every task where it is needed.' },
      { q: 'Is the maths Abitur in Berlin the same as in other Länder?', a: 'Partly. The IQB coordinates a common task pool in maths, and since 2022 the exams have been held largely on common dates. Each Land decides which pool tasks it uses and may add its own.' },
      { q: 'Do you help with the MSA?', a: 'Yes, with maths practice in English for grade 10, built on the KMK standards for the MSA. The school\'s exam and marks are what count; we do not award any qualification.' },
      { q: 'Can adults in Berlin join?', a: 'Yes. Adults start from zero in Python, data or AI, or refresh university maths, in the same live format, in a group or one to one.' },
      { q: 'When are classes in Berlin time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Teenagers often choose late afternoon and adults the evening.' },
      { q: 'Is this page for younger children too?', a: 'For children of 6 to 12 our page on coding classes for kids in Berlin is the better guide: it covers Grundschule, Scratch and a first contest.' },
      { q: 'How does payment work?', a: 'The monthly fee is shown in euro, converted at the European Central Bank reference rate, and your card is charged in US dollars, so your bank does the conversion and the figure may differ slightly. The first class is free.' },
      { q: 'Are you linked to the Berlin Senate or a school?', a: 'No. We are an independent online school with no connection to the Senatsverwaltung, the KMK, the IQB, any competition organiser or any Berlin school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Berlin families and learners.',
    items: [
      { href: '/coding-classes-for-kids-berlin', label: 'Coding classes for kids in Berlin', p: 'For children of 6 to 12.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for Germany.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The maths Abitur explained in depth.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'Informatik in the Oberstufe.' },
      { href: '/math-olympiad-germany-preparation', label: 'Mathematik-Olympiade', p: 'Rounds and practice for 2026/27.' },
      { href: '/kangaroo-math-germany-practice', label: 'Känguru practice', p: 'Original problems in the Känguru style.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the free class the learner tackles one short coding or maths task at their level. The mentor watches how they think and how easily they follow English, and suggests a course and a group afterwards.',
    readFirst: 'Want the details first? Read about <a class="ag-inline-link" href="/how-we-teach">how a live class runs</a>, or look through <a class="ag-inline-link" href="/courses">every course and syllabus</a>.',
    note: 'Our classes are live and online, with mentors in India, and they are taught only in English. WhatsApp gets the fastest reply.',
    formNote: 'Free, with no card and nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Berlin', links: [
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for Berlin kids' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths' },
        { href: '/abitur-computer-science-in-english', label: 'Abitur computer science' },
        { href: '/kangaroo-math-germany-practice', label: 'Känguru practice' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Two columns, two answers'
  },

  personalityCss: `
.ag-root.ag-cma .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-cma .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-cma .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cma .ag-table caption { text-align: left; text-transform: none; }
.ag-root.ag-cma .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Berlin and national pages); IQB Abitur pages and maths task structure; KMK maths standards ESA/MSA; IQB VERA-8; Senatsverwaltung für Bildung, Prüfungen und Abschlüsse; Mathematik-Olympiaden e.V.; Känguru der Mathematik; KMK FER2026_27 and Sommerferienregelung; Destatis GV-ISys 31.12.2024; read 2 and 3 November 2026. Data: Senatsverwaltung für Bildung, Jugend und Familie, Breitband-Ausbau der Berliner Schulen, CC BY.',
    localProject: 'Two columns, two answers: an original Python and statistics project on the Senate\'s school fibre data (November 2025 extract, 713 schools). The status column gives 594 usable (83.3 %), the yes/no column 590 (82.7 %); Version 2 names the four rows that disagree (02G26b, 10K14, 10XD01, 10G10a); Version 3 finds a mean wait of 529.8 days and a median of 537 days from site visit to installed equipment across 685 schools. Lesson family: cross-check two fields that should agree, then summarise with mean and median.',
    requiredMentions: ['breitband_2025.csv', 'Status says usable: 594 83.3 %', 'Yes/no column says usable: 590 82.7 %', '02G26b', 'Mean wait: 529.8 days; median: 537 days', 'two task proposals', '1 July to 14 August 2027', 'Two columns, two answers'],
    sources: [
      { claim: 'Berlin ITG, electives, Oberstufe courses, decentral Informatik Abitur with computer use, key figures, school structure.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/berlin' },
      { claim: 'Six Länder without compulsory Informatik; no binding plans in Berlin.', url: 'https://informatik-monitor.de/' },
      { claim: 'Common maths pool, common dates, Part A rules, LK and GK working times.', url: 'https://www.iqb.hu-berlin.de/abitur/' },
      { claim: 'MSA after grade 10 in Berlin.', url: 'https://www.berlin.de/sen/bildung/schule/pruefungen-und-abschluesse/' },
      { claim: 'Berlin holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'School fibre data, CC BY.', url: 'https://ckan.govdata.de/dataset/breitband-ausbau-der-berliner-schulen' }
    ],
    rejectedClaims: [
      'Berlin Abitur and MSA dates for 2027: berlin.de answered 429, so none printed.',
      'Any reason for the four disagreeing rows or the district differences: not in the data, so none given.',
      'Naming Berlin schools or international schools as sources of students: refused.',
      'German-language teaching: we teach in English only.',
      'Any affiliation with the Berlin Senate, the IQB, the KMK or a school: none.'
    ]
  }
};
