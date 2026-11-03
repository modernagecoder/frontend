'use strict';
// Coding classes in Brandenburg (ag- Land page, Germany cluster P4 row DE099, hubGroup land, code brc, accent #63404B).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show euro,
// checkout charges USD.
// Spine: Brandenburg will host the International Olympiad in Informatics in Potsdam in September 2027, yet it is one of the
// six Länder with no Informatik compulsory for all and no binding plan to change that. Computing is something a pupil
// chooses: an elective from grade 7, a Schwerpunkt in grades 9 and 10, a course in the Oberstufe, with a written Abitur
// drafted by the school's own teachers and a computer allowed.
// Sources (read raw 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Brandenburg page (facts-school/src/infmon-brandenburg/adc46bcc.txt): Gesamt- und
//    Oberschulen grades 9 and 10 "das Gesamtkontingent für den Schwerpunktunterricht von fünf Stunden Wahlpflicht- oder
//    Pflichtunterricht im Fach Informatik"; Wahlpflichtfach 7 to 10 (Wahlpflicht contingent eight hours in 7 and 8, six in
//    9 and 10); Gymnasien grades 9 and 10 "Dafür stehen bis zu sieben Stunden zur Verfügung."; Gesamtschule grade 11 first
//    half "dreistündiger Wahlpflichtkurs Informatik", second half Grundkurs (3) or Leistungskurs (5); Gymnasium grade 10
//    "zweistündig ein Wahlpflichtkurs Informatik", grades 11 and 12 Grundkurs 3 or Leistungskurs 5; "Im Leistungskurs
//    Informatik findet eine schriftliche Prüfung statt."; "Als Prüfungsfach ist Informatik den naturwissenschaftlichen
//    Fächern gleichgestellt, da es diese ersetzen kann."; "Die schriftlichen Abiturprüfungsaufgaben werden dezentral
//    entwickelt ... zwei Aufgabenvorschläge ... Die Bearbeitung an einem Rechner ist in allen Aufgaben jedes
//    Aufgabenvorschlags zugelassen."; Primarstufe Grundschule 1 to 6; Oberschule, Gesamtschule, Gymnasium; Gymnasium G8,
//    Gesamtschule Einführungsphase 11 (FACTS 55); key figures: "Anteil SuS mit Informatik in der Sek II 15 %",
//    "Anteil Abiturientinnen und Abiturienten mit Prüfungsfach Informatik 5 %" (2024/2025, KMK and MBJS); 305 Informatik
//    teachers (226 via a teaching degree), 3 % of all teachers, 1,8 % qualified for Sek II, 11 new hires (2025/2026).
//  - Informatik-Monitor national page: six Länder without compulsory Informatik for all incl. Brandenburg; no binding plans
//    in Berlin, Brandenburg and Hessen (FACTS 92, 96).
//  - KMK: Grundschule to grade 6 in Berlin and Brandenburg (FACTS 1); Oberschule (Brandenburg) as a two-track school
//    (FACTS 21); FER2026_27 row "Brandenburg (1) 19.10. - 30.10. 23.12. - 02.01. 01.02. - 06.02. 22.03. - 03.04. 18.05.
//    01.07. - 14.08." (FACTS 279); Sommerferienregelung 2027 (FACTS 260).
//  - MBJS Brandenburg, Rundschreiben 06/25 vom 24. März 2025, Terminrahmen Abiturprüfung 2026/2027 (Amtsblatt MBJS Nr. 9,
//    26 March 2025; src-pages/<slug>/raw/RS_6-25_Abiturtermine_2027.pdf, RS_6-25.txt): written period "16.04. bis
//    05.05.2027"; Zentralabitur dates "16.04., 9.00 Uhr, Biologie", "28.04., 9.00 Uhr, Deutsch", "30.04., 9.00 Uhr,
//    Englisch", "05.05., 9.,00 Uhr, Mathematik"; resits 14 May to 2 June 2027 with "24.05., 9.00 Uhr, Mathematik";
//    "Für die schriftlichen Abiturprüfungen in den Fächern des dezentralen Abiturs sind die Termine schulintern zu planen."
//    Informatik is not on the list of Zentralabitur subjects.
//  - BWINF: IOI 2027 "12-19 September 2027 at the Hasso-Plattner-Institut in Potsdam", Germany host for the second time
//    after 1992 (FACTS 153); Biber 9 to 20 November 2026 (FACTS 133); Bundeswettbewerb round 1 to 23 November 2026 (FACTS 146).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Brandenburg 2,556,747; Potsdam 184,754.
//  - Data: Ministerium für Bildung, Jugend und Sport (MBJS), "Schulen im Land Brandenburg (WFS-MBJS-SCHOOL)", via GovData
//    https://ckan.govdata.de/dataset/schulen-im-land-brandenburg-wfs-mbjs-school; WFS AccessConstraints: "Datenlizenz
//    Deutschland – Namensnennung – Version 2.0 ... „© Ministerium für Bildung, Jugend und Sport“"; GetFeature
//    ms:Schul_Standorte as application/json, saved as schulen_brandenburg.json (1,070,317 bytes, sha256 6354c249...
//    636659e65), downloaded 3 November 2026; capabilities and package JSON saved beside it.
// Our own calculations (scratchpad de/w/L2/bb/v1.py, v2.py, v3.py, python3 -I), exact output:
//    v1: "School sites: 964" / "Exactly 'Grundschule': 483" / "Exactly 'Gymnasium': 111"
//    v2: "Teach Grundschule grades: 537" / "Lead to the Abitur: 177" / "Mixed forms: ['Berufliche Schule in fr. Trägerschaft
//        mit Beruflichem Gymnasium', 'Gesamtschule mit GOST', 'Gesamtschule mit Grundschule und GOST', 'OSZ mit beruflichem
//        Gymnasium', 'Oberschule mit Grundschule']"
//    v3: "Counted in both groups: 4 ['Gesamtschule mit Grundschule und GOST']" / "Abitur sites in Potsdam: 24"
// Lesson family: match the meaning, not the exact label; combined categories make groups overlap, so parts can add up to
// more than the whole.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import json',
  '',
  'with open("schulen_brandenburg.json", encoding="utf-8") as f:',
  '    sites = [feature["properties"] for feature in json.load(f)["features"]]',
  '',
  'primary = sum(1 for s in sites if s["schulform"] == "Grundschule")',
  'gymnasium = sum(1 for s in sites if s["schulform"] == "Gymnasium")',
  'print("School sites:", len(sites))',
  'print("Exactly \'Grundschule\':", primary)',
  'print("Exactly \'Gymnasium\':", gymnasium)'
].join('\n');

const V2 = [
  'primary_any = [s for s in sites if "Grundschule" in s["schulform"]]',
  'abitur_any = [s for s in sites if "GOST" in s["schulform"] or "Gymnasium" in s["schulform"]]',
  'print("Teach Grundschule grades:", len(primary_any))',
  'print("Lead to the Abitur:", len(abitur_any))',
  'print("Mixed forms:", sorted({s["schulform"] for s in primary_any + abitur_any} - {"Grundschule", "Gymnasium"}))'
].join('\n');

const V3 = [
  'both = [s for s in sites if s in primary_any and s in abitur_any]',
  'print("Counted in both groups:", len(both), [s["schulform"] for s in both][:1])',
  'in_potsdam = [s for s in abitur_any if s["kreis"] == "Potsdam"]',
  'print("Abitur sites in Potsdam:", len(in_potsdam))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'Brandenburg' },
  slug: 'coding-classes-in-brandenburg',
  code: 'brc',
  accent: '#63404B',
  accentRationale: 'Brandenburg Land page: a muted heather plum #63404B, the colour of the heathland in the Land\'s nature parks, clear of the Berlin greens and reds next door; contrast 7.21 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes in Brandenburg',
  title: 'Coding Classes in Brandenburg: Live Online in English',
  description: 'Coding classes in Brandenburg, live online in English: Informatik as an elective, the school-set Abitur, IOI 2027 in Potsdam, holidays and a schools data project.',
  ogDescription: 'Live coding in English for pupils in Brandenburg, where Informatik is chosen rather than compulsory: the electives from grade 7, the Abitur written by the school with a computer allowed, the 2027 olympiad in Potsdam, the school holidays and an original project on the Land\'s school list.',
  twitterDescription: 'Coding in English for Brandenburg: Informatik electives, the school-set Abitur, IOI 2027 in Potsdam and a schools data project.',
  pageName: 'Coding Classes in Brandenburg',
  webPageDescription: 'A guide for families in Brandenburg to coding and school Informatik, built from the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, the MBJS Abitur circular for 2026/27, BWINF, the KMK and Destatis, with an original Python project on the Ministry\'s open list of school sites.',
  courseDescription: 'Live online coding classes in English for learners in Brandenburg: Informatik support from Klasse 7, Python and Java for the Oberstufe, olympiad-style algorithm training and adult courses, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Brandenburg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'Informatik' },
    { href: '#abitur', label: 'Abitur' },
    { href: '#project', label: 'Project' },
    { href: '#ioi', label: 'IOI 2027' }
  ],
  eyebrow: 'Brandenburg &middot; Coding and Informatik &middot; Klasse 7 to Abitur',
  h1: 'Coding classes in Brandenburg',
  lede: 'In September 2027 the strongest school programmers in the world will meet in Potsdam for the International Olympiad in Informatics. In Brandenburg\'s own schools, though, Informatik is not compulsory for anyone: a pupil has to choose it. This page explains those choices from grade 7 to the Abitur, how the Abitur exam in Informatik is written by the school itself, the holidays of 2026/27, our live classes in English, and a project on the Ministry\'s list of school sites in which the obvious count is too small.',
  secondaryCta: { href: '#project', label: 'See the schools project' },
  wa: 'Hello Modern Age Coders, we live in Brandenburg and would like a free first coding class, taught in English.',
  heroNote: 'Live online lessons since 2020 &middot; 10,000+ students in many countries &middot; English-only teaching, one regular mentor',
  spec: [
    ['Ages', 'About 9 to 19, plus adults'],
    ['Fits beside', 'Wahlpflicht Informatik, Grund- and Leistungskurs'],
    ['Languages', 'Scratch, Python, Java, C++'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'Based in India, teaching in English'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding classes in Brandenburg from Modern Age Coders are live online lessons in English, for school pupils of about 9 to 19 and for adults, as a batch of fifteen to twenty or one to one. Because Informatik in Brandenburg is an elective, many pupils start with us: Scratch and Python first, then the Informatik Companion course beside the grade 7 to 10 electives, and Java or Python for the Oberstufe.',

  picks: {
    eyebrow: 'Brandenburg starting points',
    h2: 'Three courses for pupils in Brandenburg',
    lede: 'One course for the years when Informatik is optional, one for the Oberstufe and its school-set exam, and one for pupils drawn to the olympiad path that leads to Potsdam.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'BRC / 01', title: 'Informatik Companion, Klasse 5 to 10', note: 'Roughly ages 10 to 16. Programming, data and networks in an order that sits easily beside the framework curriculum for the elective, so school and our lessons line up.' },
      { course: 'informatik-abitur-course-java-python', code: 'BRC / 02', title: 'Informatik for the Oberstufe and Abitur', note: 'Roughly ages 15 to 19. Java or Python, data structures, databases and automata, with practice on the computer as well as on paper, since the Brandenburg exam allows both.' },
      { course: 'competitive-programming-for-teens-course', code: 'BRC / 03', title: 'Competitive programming for teens', note: 'Roughly ages 13 to 18. Algorithm problems with time limits, in Python and C++, the skills olympiad rounds reward, on problems we write.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Informatik in Brandenburg',
      h2: 'Is Informatik a compulsory subject in Brandenburg?',
      lede: 'No. The Gesellschaft für Informatik lists Brandenburg among the six Länder without Informatik that every pupil must take, and records no binding plans to introduce it. What exists is a set of options.',
      body: [
        { kind: 'table', numCols: [], caption: 'Where Informatik can appear in a Brandenburg school career', head: ['School and grades', 'What the rules allow'], rows: [
          ['Grundschule, grades 1 to 6', 'No Informatik subject; media education across subjects'],
          ['Oberschule and Gesamtschule, 7 to 10', 'Informatik as a Wahlpflicht elective'],
          ['Oberschule and Gesamtschule, 9 and 10', 'Up to five hours of Schwerpunkt teaching in Informatik, if the school chooses it'],
          ['Gymnasium, 9 and 10', 'Up to seven hours of Schwerpunkt teaching in Informatik, if the school chooses it'],
          ['Gymnasium, grade 10', 'Two-hour Informatik elective in the Einführungsphase'],
          ['Gymnasium 11 and 12, Gesamtschule 12 and 13', 'Grundkurs (three hours) or Leistungskurs (five hours)']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Brandenburg and national pages, read 2 November 2026, citing the Sekundarstufe I-Verordnung and the Gymnasiale-Oberstufe-Verordnung. At the Gesamtschule the Einführungsphase is grade 11, with a three-hour Informatik elective in the first half-year and a Grundkurs or Leistungskurs in the second. One framework curriculum covers the Informatik elective in grades 7 to 10 at every school type.' },
        { kind: 'two', mt: true,
          leftH3: 'The school decides first',
          left: [
            'The word that matters in the rules is kann: a school can offer Informatik within its Schwerpunkt or elective hours. Whether a particular Oberschule or Gymnasium in Cottbus, Frankfurt (Oder) or the Uckermark actually runs the course depends on its timetable and its teachers.',
            'And teachers are scarce. For 2025/26 the monitor reports 305 Informatik teachers in Brandenburg, 3 % of all teachers, with 1.8 % qualified to teach the subject in the upper secondary years, and 11 newly hired in the year.'
          ],
          rightH3: 'Who takes it in the end',
          right: [
            'Even so, a fair number of pupils choose it. The monitor gives 15 % as the share of Brandenburg upper secondary pupils taking Informatik in the 2024/25 school year (a KMK figure), about the national average of 15 % it quotes, and 5 % as the share of Abitur candidates with Informatik as an exam subject, from the Ministry for Education, Youth and Sport (MBJS).',
            'Informatik can also replace a science among a pupil\'s Abitur exam subjects in Brandenburg, the monitor notes, which is not the case in every Land.'
          ] },
        { kind: 'p', mt: true, html: 'Brandenburg is home to 2,556,747 people, 184,754 of them in Potsdam, the Land capital (Destatis, 31 December 2024). Its primary school runs for six years, to the end of grade 6, as in Berlin; after that a pupil moves to an Oberschule, a Gesamtschule or a Gymnasium. At the Gymnasium the Abitur comes after grade 12; at a Gesamtschule with an Oberstufe it comes after grade 13.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Would my child be taught in German?',
      lede: 'No. Lessons are live and in English only, with mentors in India who adapt their pace and accent to the learner.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English and nothing else', p: 'We have no German-language classes and say so before the first lesson. A pupil at a German school gets English practice with every program; families who already speak English at home find it simply natural.' },
          { h3: 'Patient by design', p: 'Mentors explain a step, ask the learner to repeat it in their own words, and slow down when needed. They learn a pupil\'s accent quickly, and a German word dropped into a sentence is answered, not corrected.' },
          { h3: 'School words in both languages', p: 'Brandenburg\'s framework curriculum uses German terms such as Algorithmus, Datenstruktur or Netzwerk. We teach each idea in English and say the German term with it.' }
        ] }
      ]
    },
    {
      id: 'abitur',
      tint: 'tint',
      eyebrow: 'The Abitur',
      h2: 'How is the Informatik Abitur written in Brandenburg?',
      lede: 'By the pupil\'s own school, and with a computer allowed. Maths and other core subjects, by contrast, are central, on dates the Ministry fixes for the whole Land.',
      body: [
        { kind: 'two',
          leftH3: 'Informatik: decentral',
          left: [
            'The Informatik-Monitor states that written Abitur tasks in Informatik are developed decentrally in Brandenburg. For each course the teachers submit two task proposals, one of which is chosen, and work at a computer is allowed in every task of each proposal, limited to where the subject needs it. The teacher also lists the aids the pupils will receive.',
            'The MBJS circular for 2026/27 fits that picture: Informatik is not among the subjects with a central Abitur, and it says that the dates for written exams in decentral subjects are planned within each school.'
          ],
          rightH3: 'What to practise',
          right: [
            'An exam written by the course teachers rewards steady work in that course more than generic exam tricks. And an exam where a computer is allowed still needs fast, accurate coding: time spent hunting a syntax error is time not spent on the problem.',
            'So with Oberstufe pupils we do both: timed tasks at the keyboard and short written explanations of how a solution works. The school course and its teachers are what count for the Abitur; we teach alongside and never set or mark school work.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Brandenburg Abitur 2027: central written exams named in the MBJS circular (all start at 9:00)', head: ['Date', 'Central subject'], rows: [
          ['16 April 2027', 'Biology'],
          ['20 April 2027', 'Physics'],
          ['21 April 2027', 'Chemistry'],
          ['28 April 2027', 'German'],
          ['30 April 2027', 'English'],
          ['5 May 2027', 'Mathematics'],
          ['14 May to 2 June 2027', 'Resits for central subjects, maths on 24 May 2027']
        ] },
        { kind: 'source', html: 'Source: Ministerium für Bildung, Jugend und Sport, Rundschreiben 06/25 of 24 March 2025 on the Abitur dates for 2026/2027 (Amtsblatt MBJS Nr. 9, 26 March 2025), read 3 November 2026. The written exam period runs from 16 April to 5 May 2027. Other central subjects (French, geography, history, political education) are also listed there. Your school confirms the date of any decentral exam, Informatik included.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Brandenburg data project',
      h2: 'How many schools in Brandenburg lead to the Abitur? Count the meaning, not the label',
      lede: 'The Ministry for Education, Youth and Sport publishes the locations and types of all school sites in the Land as an open web service. Our pupils use it to practise the step every analyst learns the hard way: a category label can combine several things, and an exact match quietly misses them.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'We requested the full layer of school sites from the MBJS web map service as JSON and saved it as schulen_brandenburg.json on 3 November 2026. The service states its licence as Datenlizenz Deutschland Namensnennung 2.0, crediting the Ministerium für Bildung, Jugend und Sport, so it may be reused with that credit.',
            'Each of its 964 records has a school number, a name, an address, a district (Kreis), a school type (Schulform) and more. Some school types are single, such as Grundschule. Others are combined, such as Oberschule mit Grundschule.'
          ],
          rightH3: 'The question',
          right: [
            'Two questions a parent might ask: how many sites teach the Grundschule grades, and at how many can a pupil reach the Abitur? A beginner filters for the label Grundschule and the label Gymnasium, and stops.',
            'Version 1 does exactly that. Version 2 counts what the labels mean. Version 3 checks whether the two groups overlap.'
          ] },
        { kind: 'code', label: 'Version 1: exact labels', lang: 'Python', code: V1, note: 'It prints: <code>School sites: 964</code>, <code>Exactly \'Grundschule\': 483</code> and <code>Exactly \'Gymnasium\': 111</code>.' },
        { kind: 'code', label: 'Version 2: labels that contain the idea', lang: 'Python', code: V2, note: 'It prints: <code>Teach Grundschule grades: 537</code>, <code>Lead to the Abitur: 177</code> and <code>Mixed forms: [\'Berufliche Schule in fr. Trägerschaft mit Beruflichem Gymnasium\', \'Gesamtschule mit GOST\', \'Gesamtschule mit Grundschule und GOST\', \'OSZ mit beruflichem Gymnasium\', \'Oberschule mit Grundschule\']</code>.' },
        { kind: 'p', mt: true, html: 'The exact match missed 54 sites with primary grades and 66 routes to the Abitur. GOST stands for gymnasiale Oberstufe: a Gesamtschule mit GOST leads to the Abitur just as a Gymnasium does, and a vocational school centre (OSZ) with a berufliches Gymnasium leads to it too. The label Gymnasium alone does not cover the meaning a parent has in mind.' },
        { kind: 'code', label: 'Version 3: do the groups overlap?', lang: 'Python', code: V3, note: 'It prints: <code>Counted in both groups: 4 [\'Gesamtschule mit Grundschule und GOST\']</code> and <code>Abitur sites in Potsdam: 24</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'School sites in Brandenburg by question, two ways of counting (our calculation)', head: ['Question', 'Exact label', 'Label contains the idea'], rows: [
          ['Teaches Grundschule grades', '483', '537'],
          ['Leads to the Abitur', '111', '177'],
          ['Both at one site', '0', '4']
        ] },
        { kind: 'source', html: 'Data: Ministerium für Bildung, Jugend und Sport des Landes Brandenburg, Schulen im Land Brandenburg (WFS-MBJS-SCHOOL), Datenlizenz Deutschland Namensnennung 2.0, retrieved 3 November 2026. The counts are our own and count school sites as listed in the service, which includes vocational and special schools; they are not official school statistics.' },
        { kind: 'p', mt: true, html: 'Four sites, each a Gesamtschule mit Grundschule und GOST, are in both groups. So 537 and 177 add up to 714, but only 710 different sites stand behind them: when categories combine, parts can add up to more than the whole. Spotting that before someone else does is what separates a careful analyst from a quick one.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 11, no screen.</strong> In a class, 12 children have a cat, 9 have a dog and 3 have both. How many children have a pet? Draw two overlapping circles to check.',
          '<strong>Ages 11 to 13, Scratch.</strong> Make a list of school names and count how many contain the word Grundschule, not just the ones that are exactly Grundschule.',
          '<strong>Ages 13 to 16, Python.</strong> Run Version 1, write down what you think Version 2 will print, then run it and explain the difference.',
          '<strong>Going further.</strong> Count Abitur sites per Kreis. Which district has the most, and does dividing by the number of all sites in that district change the order?'
        ] }
      ]
    },
    {
      id: 'ioi',
      eyebrow: 'IOI 2027 in Potsdam',
      h2: 'What is happening in Potsdam in September 2027?',
      lede: 'The 39th International Olympiad in Informatics, hosted by Germany for only the second time.',
      body: [
        { kind: 'p', html: 'Bundesweite Informatikwettbewerbe (BWINF) announces the 39th IOI for 12 to 19 September 2027 at the Hasso-Plattner-Institut in Potsdam, the first in Germany since 1992. The German team is chosen through the Bundeswettbewerb Informatik, whose first round for 2026/27 is open until 23 November 2026, followed by training camps. For a teenager in Brandenburg this is a rare chance to see the top of the subject close to home. Our competitive programming lessons use original problems in the olympiad style and never reproduce BWINF or IOI tasks; we are not connected to BWINF or the IOI. For younger pupils, the Informatik-Biber runs from 9 to 20 November 2026 through schools.' }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'Holidays',
      h2: 'When are the school holidays in Brandenburg in 2026/27?',
      lede: 'Brandenburg and Berlin share the same summer dates in 2027. Classes with us continue through holidays unless you choose a break.',
      body: [
        { kind: 'table', numCols: [], caption: 'Brandenburg holiday calendar for the 2026/27 school year', head: ['Break', 'From and to'], rows: [
          ['Autumn', '19 to 30 October 2026'],
          ['Christmas', '23 December 2026 to 2 January 2027'],
          ['Winter', '1 to 6 February 2027'],
          ['Easter', '22 March to 3 April 2027'],
          ['Single day', '18 May 2027'],
          ['Summer', '1 July to 14 August 2027']
        ] },
        { kind: 'source', html: 'Compiled by the KMK in Ferien im Schuljahr 2026/2027 (status 9 October 2025) and in its summer schedule for 2025 to 2030. Brandenburg has one movable holiday day, placed by each school.' },
        { kind: 'p', mt: true, html: 'The written Abitur period opens on 16 April 2027, less than two weeks after the Easter break ends on 3 April 2027, so Oberstufe pupils often want their heaviest practice in March. The summer break that starts on 1 July 2027 ends in mid-August, early by German standards.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When could my child have classes in Brandenburg?',
      lede: 'Weekday afternoons after school, or a weekend morning. Booking shows every slot in your own clock.',
      body: [
        { kind: 'table', numCols: [], caption: 'Three possible Brandenburg slots and the mentor\'s clock in India', head: ['Brandenburg', 'India until 27 March 2027', 'India from 28 March 2027'], rows: [
          ['15:45', '20:15', '19:15'],
          ['16:15', '20:45', '19:45'],
          ['Sunday 10:30', '15:00', '14:00']
        ] },
        { kind: 'source', html: 'Germany is on UTC+1 in winter and UTC+2 in summer (Einheitenzeitgesetz); clocks went back on 25 October 2026 and go forward on 28 March 2027. India stays on UTC+5:30, so the gap is four hours thirty this winter and three hours thirty from the end of March. These slots are examples only.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a learner in Brandenburg can do at each stage',
    lede: 'Our own stages, for placing a learner and reporting progress; school grades are a separate thing.',
    table: { caption: 'Programming milestones from grade 5 to the Oberstufe (ours)', head: ['Stage', 'Typical grade', 'The learner can'], rows: [
      ['1. Blocks and events', '5 to 6', 'Build a Scratch game with events, loops and a score'],
      ['2. Typed Python', '7 to 8', 'Write Python with conditions and loops, and test it with chosen inputs'],
      ['3. Data with care', '9 to 10', 'Filter and count records, and check whether groups overlap'],
      ['4. Structures and objects', '10 to 11', 'Use lists, dictionaries and classes to model a problem'],
      ['5. Exam-ready', 'Qualifikationsphase', 'Solve a full Informatik task at the computer and explain it in writing']
    ] },
    left: { h3: 'For parents', ps: [
      'The schools project is stage 3: a pupil learns that the label in a table and the thing it stands for are not always the same.',
      'We report what your child built and can explain, rather than time on a screen.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you filter, read all the different labels in the column. The one you need may be hiding inside a longer one.',
      'If two groups can share members, count the overlap before you add them.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners in Brandenburg',
    lede: 'Every course here is taught live in English by a regular mentor, as a group of fifteen to twenty or one to one.',
    bands: [
      { num: 'I', h3: 'Starting young', sub: 'Ages 7 to 13', courses: [
        { code: 'BRC / KID / 01', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, Roblox and Minecraft in one long course.' },
        { code: 'BRC / KID / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code and small AI projects from about 9.' },
        { code: 'BRC / KID / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatics competitions', blurb: 'From the Biber to the Bundeswettbewerb, our own tasks.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'BRC / TEEN / 01', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language most olympiad programmers use.' },
        { code: 'BRC / TEEN / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Scripts, data and small apps, step by step.' },
        { code: 'BRC / TEEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'How models learn, built in Python.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'BRC / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'For adults with no programming yet.' },
        { code: 'BRC / ADULT / 02', slug: 'competitive-programming-masterclass-college', title: 'Competitive programming', blurb: 'Contest algorithms for students and adults.' },
        { code: 'BRC / ADULT / 03', slug: 'mysql-database-complete-masterclass-college', title: 'SQL databases', blurb: 'Design and query real databases.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work for a family in Brandenburg',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'Weekday slots once school is out, German time.' },
      { time: 'Weekends', l: 'A Saturday or Sunday morning lesson.' },
      { time: 'One to one', l: 'A time fixed with the mentor, flexible near exams.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same teacher every week, who knows the learner.' },
      { h3: 'Hands on the keyboard', p: 'The learner writes the code from the first lesson.' },
      { h3: 'Exam mix', p: 'Practice at the computer and in writing for the Oberstufe.' },
      { h3: 'German terms named', p: 'Framework curriculum vocabulary paired with English.' },
      { h3: 'Parent notes', p: 'A short update on what was built and what comes next.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty learners, or one to one.' }
    ]
  },

  projectsH2: 'Projects by our learners',
  projectsLede: 'Learners who stay with coding build things like these; the <a class="ag-inline-link" href="/student-labs">student labs</a> page collects more.',
  reviewsLede: 'Reviews left on Google by parents and learners, unchanged.',

  fees: {
    h2: 'Fees for families in Brandenburg',
    lede: 'A monthly fee covers eight live classes. The euro figures here come from converting at the European Central Bank reference rate; the charge is made in US dollars, so your bank converts it and the amount you see on your statement may vary slightly.',
    free: ['A free first class', 'A short task at the right level', 'No card asked for'],
    group: ['A group of fifteen to twenty at a similar level', 'One mentor throughout', 'Two classes each week', 'Paid monthly, stop any month'],
    one: ['Just the learner and a mentor', 'Content set around school and contests', 'Times that fit your family']
  },

  faq: {
    eyebrow: 'Families in Brandenburg ask',
    h2: 'Coding classes in Brandenburg: frequent questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. All lessons are live and taught in English only, by mentors in India who adjust to the learner\'s pace and accent. German school terms are named next to the English ones.' },
      { q: 'Is Informatik compulsory in Brandenburg?', a: 'No. The Informatik-Monitor 2026/27 names Brandenburg among six Länder without Informatik for all and knows of no binding plans to introduce it. Schools can offer it as an elective from grade 7 and as a Schwerpunkt in grades 9 and 10.' },
      { q: 'Who writes the Informatik Abitur in Brandenburg?', a: 'The school. According to the Informatik-Monitor, teachers submit two task proposals per course and one is picked; pupils may work on a computer wherever a task needs one.' },
      { q: 'When is the maths Abitur in Brandenburg in 2027?', a: 'The MBJS circular 06/25 sets the central written maths exam for 5 May 2027 at 9:00, with the resit on 24 May 2027.' },
      { q: 'Will lessons with you count towards the Abitur?', a: 'No. Our practice at the keyboard and on paper runs beside the school course, and only that course and its exam count. We hand out no grades and no certificates of any school kind.' },
      { q: 'Can my child aim for the IOI in Potsdam?', a: 'The IOI 2027 team is selected through the Bundeswettbewerb Informatik and BWINF training camps, so the route starts with that contest. We train the problem-solving skills with our own problems and have no part in selection.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Afternoons from about 15:45 suit many pupils in the Land.' },
      { q: 'How many learners are in a group?', a: 'Fifteen to twenty at a similar level. A one-to-one plan gives a learner a mentor of their own and their own pace.' },
      { q: 'In which currency do we pay?', a: 'Fees are shown in euro at the European Central Bank reference rate and charged in US dollars, so your bank makes the conversion and the statement may differ a little. The first class costs nothing.' },
      { q: 'Are you connected to the Ministry or to BWINF?', a: 'No. Modern Age Coders runs its own online classes and has no tie to the MBJS, the KMK, BWINF, the IOI or any Brandenburg school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Brandenburg.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All our pages for families in Germany.' },
      { href: '/ioi-2027-potsdam-guide', label: 'IOI 2027 in Potsdam', p: 'The olympiad in detail.' },
      { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik', p: 'The route into the German team.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'Brandenburg next to the other fifteen.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'Next door, for children of 6 to 12.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one of our live lessons.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The free class is one short programming task matched to the learner\'s level. It shows the mentor how the learner reasons and how easily they follow spoken English, and the mentor recommends a course and a group from there.',
    readFirst: 'For more before you book, there is a walk-through of <a class="ag-inline-link" href="/how-we-teach">a live lesson</a> and the <a class="ag-inline-link" href="/courses">complete list of courses</a>.',
    note: 'Everything is taught live online by mentors in India, in English only. Message us on WhatsApp for the quickest answer.',
    formNote: 'Free; no card, no contract.'
  },

  footer: {
    cols: [
      { h4: 'Contests', links: [
        { href: '/ioi-2027-potsdam-guide', label: 'IOI 2027 Potsdam' },
        { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' },
        { href: '/jugendwettbewerb-informatik-preparation', label: 'Jugendwettbewerb Informatik' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Count the meaning, not the label'
  },

  personalityCss: `
.ag-root.ag-brc .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-brc .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-brc .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-brc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-brc .ag-code-note { font-size: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Brandenburg and national pages); MBJS Rundschreiben 06/25 on the Abitur 2026/2027; BWINF (IOI 2027, Biber 2026, Bundeswettbewerb); KMK FER2026_27, Sommerferienregelung and school-type overview; Destatis GV-ISys 31.12.2024; read 2 and 3 November 2026. Data: MBJS, Schulen im Land Brandenburg (WFS-MBJS-SCHOOL), Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Count the meaning, not the label: an original Python project on the MBJS list of 964 school sites. Exact labels give 483 Grundschulen and 111 Gymnasien; matching the idea gives 537 sites with primary grades and 177 that lead to the Abitur (Gesamtschule mit GOST, OSZ mit beruflichem Gymnasium and others); four sites are in both groups, so 714 counts stand for 710 sites; 24 Abitur sites in Potsdam. Lesson family: match the meaning, not the exact label; combined categories overlap.',
    requiredMentions: ['schulen_brandenburg.json', "Exactly 'Grundschule': 483", 'Teach Grundschule grades: 537', 'Lead to the Abitur: 177', 'Abitur sites in Potsdam: 24', 'Rundschreiben 06/25', '19 to 30 October 2026', 'Count the meaning, not the label'],
    sources: [
      { claim: 'Brandenburg Informatik options, Oberstufe courses, decentral Abitur with computer use, key figures.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/brandenburg' },
      { claim: 'Six Länder without compulsory Informatik; no binding plans in Brandenburg.', url: 'https://informatik-monitor.de/' },
      { claim: 'Abitur 2027 central dates and decentral rule.', url: 'https://bildungsserver.berlin-brandenburg.de/fileadmin/bbb/unterricht/pruefungen/abitur_bb/RS_ZA_2027/RS_6-25_Abiturtermine_2027.pdf' },
      { claim: 'IOI 2027 at the Hasso-Plattner-Institut, Potsdam.', url: 'https://bwinf.de/olympiade/2027/' },
      { claim: 'Holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'School sites, DL-DE BY 2.0.', url: 'https://ckan.govdata.de/dataset/schulen-im-land-brandenburg-wfs-mbjs-school' }
    ],
    rejectedClaims: [
      'Which Brandenburg schools actually run an Informatik course: not in any source we read, so not stated.',
      'The language field of the school data (incl. Sorbian): not used, to keep clear of identity content.',
      'Naming schools as sources of students: refused.',
      'German-language teaching: we teach in English only.',
      'Any affiliation with the MBJS, BWINF, the IOI or a school: none.'
    ]
  }
};
