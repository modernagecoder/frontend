'use strict';
// Maths tutor in Hamburg, in English (ag- city maths page, Germany cluster P5 row DE109).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD.
// Angle: an English-speaking family in Hamburg wants maths help timed to Hamburg's central exams. Spine: the 2027
// Hamburg exam dates for the ESA, the MSA and the Abitur from the education authority, the two school types and their
// routes, one Klasse 8 task shown in German and taught in English (ours), a circle-formula project on Hamburg's street
// tree register (Elbchaussee), a short Abitur section, and Hamburg times including the early spring holiday.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/math-tutor-hamburg-in-english/):
//  - Behörde für Schule, Familie und Berufsbildung, "Termine für die Abschlussarbeiten 2027", "Stand 09. September 2026"
//    (bsb/termine-schuljahr-2027.pdf/.txt, fetched 3 Nov 2026 for the Hamburg Land page, copied here): "Abitur
//    Regeltermine 13.04. bis 05.05.2027"; "Nachschreibtermine 25.05. bis 31.05.2027"; Erster allgemeinbildender
//    Schulabschluss "Deutsch 08.04.2027", "Mathematik 12.04.2027"; Mittlerer Schulabschluss "Deutsch 09.04.2027",
//    "Mathematik 13.04.2027"; Nachschreibtermin ESA and MSA "Mathematik 21.05.2027"; Nachprüfungen "Mathematik
//    11.08.2027".
//  - hamburg.de, Zentrale Prüfungen (bsb/zp.txt): MSA "in den Fächern – Deutsch und – Mathematik eine Abschlussprüfung
//    mit zentral gestellten Prüfungsaufgaben"; ESA "üblicherweise ... eine Abschlussprüfung mit zentral gestellten
//    Prüfungsaufgaben"; Abiturprüfung 2027 "Musteraufgaben für ländergemeinsame Aufgabenteile".
//  - GI Informatik-Monitor 2026/27, Hamburg page (structure only): "Die Primarstufe umfasst die Grundschule mit den
//    Jahrgangsstufen 1 bis 4."; Stadtteilschule and Gymnasium "welche die Jahrgangsstufen 5 bis 10 abdecken";
//    Gymnasium Oberstufe 10 Einführungsphase, 11 and 12 Qualifikationsphase (G8); Stadtteilschule 11, 12 and 13.
//  - FACTS.md: ESA at the end of grade 9 possible in all Länder (25); ESA/MSA maths standards 23.06.2022 (122) and five
//    Leitideen (124); IQB pool Part A without aids (34), raised level 300 minutes and 100 BE, basic 255 minutes and 80 BE
//    (36 to 39); each Land's commission chooses pool tasks (32); Hamburg holidays 2026/27 (285) and summer 2027 (262).
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Hamburg 1,862,565.
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: BUKEA via Transparenzportal Hamburg, "Straßenbaumkataster Hamburg"
//    (https://ckan.govdata.de/dataset/strassenbaumkataster-hamburg33617, record saved), licence Datenlizenz Deutschland
//    Namensnennung 2.0. OGC API https://api.hamburg.de/datasets/v1/strassenbaumkataster, collection
//    strassenbaumkataster_hh (229,876 items), query strasse=Elbchaussee, limit 5000: 364 features, numberMatched 364,
//    266,993 bytes, sha256 db3ae6fc...bb12dc35, downloaded 3 November 2026. Fields stammumfang (cm), pflanzjahr,
//    art_deutsch.
// Our own code (scratchpad de/w/C1/py/ena_v1.py, ena_v2.py run as ena_all.py, python3 -I, in the data folder):
//  ena_v1 prints "Trees: 364 with a girth: 333", "Widest: Stiel-Eiche 530 cm round, 168.7 cm across",
//  "Mean: 49.0 Median: 43.3".
//  ena_v2 prints "No planting year: 9", "Planted in the future: [2104]", "Oldest: 1750 Median year: 1965.0".
//  Exploration: the 2104 record is a maple with no girth; the 530 cm oak is listed as planted 1750; stadtteile
//  Othmarschen 243, Nienstedten 54, Ottensen 51, Blankenese 16; median girth oaks 181 cm (56 trees), limes 128 cm (55),
//  maples 123 cm (79). Worked task: 251 / pi = 79.9 cm.
// Lesson family: the circle formula run backwards (d = U / pi), then a plausibility check before believing any record.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import json, math, statistics',
  '',
  'with open("elbchaussee.json", encoding="utf-8") as f:',
  '    trees = [t["properties"] for t in json.load(f)["features"]]',
  'measured = [t for t in trees if "stammumfang" in t]',
  'print("Trees:", len(trees), "with a girth:", len(measured))',
  '',
  'widest = max(measured, key=lambda t: t["stammumfang"])',
  'd = widest["stammumfang"] / math.pi',
  'print("Widest:", widest["art_deutsch"], widest["stammumfang"], "cm round,", round(d, 1), "cm across")',
  '',
  'diameters = [t["stammumfang"] / math.pi for t in measured]',
  'print("Mean:", round(statistics.mean(diameters), 1), "Median:", round(statistics.median(diameters), 1))'
].join('\n');

const V2 = [
  'THIS_YEAR = 2026',
  'years = [t["pflanzjahr"] for t in trees if "pflanzjahr" in t]',
  'print("No planting year:", len(trees) - len(years))',
  'print("Planted in the future:", [y for y in years if y > THIS_YEAR])',
  '',
  'possible = [y for y in years if y <= THIS_YEAR]',
  'print("Oldest:", min(possible), "Median year:", statistics.median(possible))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'maths', label: 'Hamburg: maths tutor' },
  slug: 'math-tutor-hamburg-in-english',
  code: 'ena',
  accent: '#7E1E35',
  accentRationale: 'Maths tutor in Hamburg, in English: a dark wine red #7E1E35, the red-brick of Hamburg\'s Kontorhaus quarter, kept clear of the harbour green on the Hamburg kids page; contrast 8.02 at its lowest on the paper tints and above 4.5 on all three',
  pageType: 'market',
  market: DE_EN,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Maths tutor in Hamburg, in English',
  title: 'Maths Tutor in Hamburg in English: Live Online, ESA to Abitur',
  description: 'A maths tutor in Hamburg, live online in English: ESA maths on 12 April 2027, MSA on 13 April, the Abitur window, and a project on Hamburg\'s street trees.',
  ogDescription: 'Live online maths tutoring in English for Hamburg pupils: the 2027 central exam dates for the ESA, MSA and Abitur, the two school routes, a Klasse 8 task in German and English, and a circle-formula project on the Elbchaussee trees.',
  twitterDescription: 'Maths help for Hamburg pupils, live in English: 2027 exam dates, the school routes and an Elbchaussee tree project.',
  pageName: 'Maths Tutor in Hamburg in English',
  webPageDescription: 'A guide for English-speaking families in Hamburg to maths tutoring timed to the city\'s central exams, built from the Behörde für Schule, Familie und Berufsbildung exam dates for 2027, hamburg.de, KMK and IQB sources, with an original project on Hamburg\'s street tree register.',
  courseDescription: 'Live online maths tutoring in English for Hamburg pupils from Klasse 5 to the Abitur: algebra and geometry toward the ESA and MSA, and Abitur Mathematik in the Oberstufe, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Maths tutor, Hamburg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#exams', label: 'Exams' },
    { href: '#routes', label: 'Schools' },
    { href: '#project', label: 'Project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Hamburg &middot; Maths tutoring &middot; Klasse 5 to 13',
  h1: 'Maths tutor in Hamburg, in English',
  lede: 'Hamburg sets its school-leaving maths papers centrally, and the 2027 dates are already out: the ESA paper on 12 April, the MSA paper the next day, and the Abitur between 13 April and 5 May 2027. This page puts those dates in one table, explains which Hamburg school route leads to which paper, shows how a German maths task reads to a child who thinks in English, and ends with a project on the oak trees of the Elbchaussee, where the formula for a circle meets a tree that the register says will be planted in 2104.',
  secondaryCta: { href: '#exams', label: 'See the 2027 exam dates' },
  wa: 'Hello Modern Age Coders, my child is at school in Hamburg and needs maths help in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; maths explained in English, at your child\'s speed',
  spec: [
    ['Klassen', '5 to 13, Stadtteilschule and Gymnasium'],
    ['Focus', 'ESA, MSA, Abitur, class tests'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Hamburg times', 'Afternoons and weekend mornings'],
    ['Teachers', 'Maths mentors in India, live'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'A maths tutor in Hamburg from Modern Age Coders gives live online maths lessons in English to pupils from Klasse 5 to the Abitur, with one regular mentor who suits the pace and accent of your child. We plan toward Hamburg\'s central papers: ESA maths on 12 April 2027, MSA maths on 13 April 2027, and the Abitur from 13 April to 5 May 2027. Lessons are one to one or in a group of fifteen to twenty.',

  picks: {
    eyebrow: 'Where Hamburg pupils start',
    h2: 'Three maths courses for Hamburg pupils',
    lede: 'One for the years before the ESA and MSA, one to rebuild algebra from the ground, and one for the Oberstufe.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'ENA / 01', title: 'Klasse 5 to 10 maths', note: 'Fractions, percentages, linear and quadratic functions, the circle, Pythagoras and probability: the content of Hamburg\'s ESA and MSA maths papers.' },
      { course: 'algebra-foundations-masterclass', code: 'ENA / 02', title: 'Algebra foundations', note: 'For pupils who lose marks the moment letters appear: terms, brackets, equations and formulas rearranged, slowly and until it sticks.' },
      { course: 'abitur-mathematics-course-in-english', code: 'ENA / 03', title: 'Abitur Mathematik in English', note: 'Hamburg Oberstufe at either level: Analysis, vectors and Stochastik, with timed practice for the part of the paper without a calculator.' }
    ]
  },

  sections: [
    {
      id: 'exams',
      eyebrow: 'Hamburg exams 2027',
      h2: 'When are the ESA, MSA and Abitur maths exams in Hamburg in 2027?',
      lede: 'Hamburg\'s education authority publishes the dates for its central written papers a full school year ahead. Here they are for 2027, with the maths days marked.',
      body: [
        { kind: 'table', numCols: [], caption: 'Written school-leaving exams in Hamburg, 2027', head: ['Date', 'Exam', 'Subject'], rows: [
          ['Thursday 8 April 2027', 'Erster allgemeinbildender Schulabschluss (ESA)', 'German'],
          ['Friday 9 April 2027', 'Mittlerer Schulabschluss (MSA)', 'German'],
          ['Monday 12 April 2027', 'ESA', 'Maths'],
          ['Tuesday 13 April 2027', 'MSA', 'Maths'],
          ['13 April to 5 May 2027', 'Abitur, regular exam dates', 'All written subjects'],
          ['Friday 21 May 2027', 'ESA and MSA catch-up date', 'Maths'],
          ['25 to 31 May 2027', 'Abitur catch-up dates', 'All written subjects'],
          ['Wednesday 11 August 2027', 'ESA and MSA re-examinations (Nachprüfungen)', 'Maths']
        ] },
        { kind: 'source', html: 'Source: Behörde für Schule, Familie und Berufsbildung, Termine für die Abschlussarbeiten 2027, as of 9 September 2026; hamburg.de, Zentrale Prüfungen. Read on 3 November 2026. The authority\'s list gives a range for the Abitur rather than a day per subject; your school confirms the maths day.' },
        { kind: 'two', mt: true,
          leftH3: 'Centrally set papers',
          left: [
            'hamburg.de explains that for the MSA, Hamburg holds a final exam in German and maths with tasks set centrally, and that the ESA usually works the same way in those two subjects. Every pupil in the city writes the same maths paper on the same morning.',
            'Central papers reward a different kind of preparation from class tests. A teacher\'s test follows what the class just did; a central paper can ask about anything in the standards, phrased by someone your child has never met.'
          ],
          rightH3: 'The Hamburg spring gap',
          right: [
            'Hamburg\'s spring holiday comes early: the KMK table lists it from 1 to 12 March 2027. That leaves about four school weeks between the end of the holiday and the maths papers on 12 and 13 April.',
            'For most families that fortnight in March is the natural revision block, and the four weeks after it are for timed papers and calm.'
          ] },
        { kind: 'p', mt: true, html: 'The content behind both papers is national. Since 2022 one KMK standards document covers maths for the ESA and the MSA together, in the version of 23 June 2022. It groups the subject into five Leitideen, running from Zahl und Operation to Daten und Zufall. We use those five headings to find where a Hamburg pupil is losing marks.' }
      ]
    },
    {
      id: 'routes',
      eyebrow: 'Hamburg schools',
      h2: 'Which Hamburg school route leads to which maths exam?',
      lede: 'Hamburg has two kinds of secondary school, and both can lead to the Abitur. The difference is mostly time.',
      body: [
        { kind: 'table', numCols: [], caption: 'The two secondary routes in Hamburg', head: ['', 'Stadtteilschule', 'Gymnasium'], rows: [
          ['Grades', '5 to 10, Oberstufe 11 to 13', '5 to 10, Oberstufe 10 to 12'],
          ['Einführungsphase', 'Grade 11', 'Grade 10'],
          ['Qualifikationsphase', 'Grades 12 and 13', 'Grades 11 and 12'],
          ['Central maths papers on the way', 'ESA after grade 9 or MSA after grade 10, if taken', 'Usually none before the Abitur'],
          ['Abitur', 'After grade 13', 'After grade 12 (G8)']
        ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Hamburg school structure; KMK Eurydice dossier (the ESA can be taken at the end of grade 9 in every Land, and Gymnasium pupils usually gain the Oberstufe entitlement instead of sitting a central lower-secondary exam). Before secondary school, Hamburg\'s Grundschule covers grades 1 to 4. Which pupils sit the ESA or MSA paper is set by Hamburg\'s rules and the school, so ask the school about your child.' },
        { kind: 'p', mt: true, html: 'In practice this means the same maths can come at different moments. A Gymnasium pupil meets the Oberstufe and its Einführungsphase in grade 10, a year earlier than a Stadtteilschule pupil, so quadratic functions and the first calculus ideas arrive sooner. A Stadtteilschule pupil who aims for the MSA in grade 10 and the Abitur after grade 13 has one more year, and a central paper halfway along the road. We plan lessons around whichever route your child is on, and the school course is always the one that counts.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'How does a German maths task read to a child who thinks in English?',
      lede: 'Lessons are live and only in English, and the maths is identical. What needs practice is reading the task. Here is one of ours, in both languages.',
      body: [
        { kind: 'two',
          leftH3: 'The task, as a Hamburg paper might phrase it (ours)',
          left: [
            '<em>Eine Stiel-Eiche an der Elbchaussee hat einen Stammumfang von 2,51 m. Berechne den Durchmesser des Stammes. Runde auf ganze Zentimeter.</em>',
            'Three things can stop a pupil here before any maths happens: Stammumfang (trunk circumference), Durchmesser (diameter) and Runde auf ganze Zentimeter (round to the nearest whole centimetre). And the decimal comma in 2,51 is a decimal point in English.'
          ],
          rightH3: 'How we teach it in English',
          right: [
            'We read it together, underline the three words, and say the task back in English: the trunk is 2.51 m round; find how wide it is. Then the formula: circumference equals pi times diameter, so the diameter is the circumference divided by pi.',
            'In centimetres, 251 divided by pi is 79.9, which rounds to 80 cm. Last, a check: a trunk about 80 cm across is roughly the width of a door, which fits a big old oak. The answer is written in the German format, 80 cm, because that is how the paper is marked.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'English only', p: 'Every lesson is live and in English; we run no German-language lessons. Mentors match each pupil\'s pace and accent and explain a step again in other words when needed.' },
          { h3: 'German on paper', p: 'Hamburg papers are in German, so each topic ends with the German terms and a short task in German, read aloud and translated together.' },
          { h3: 'The same mentor', p: 'Your child works with one mentor all year. Our maths mentors are based in India and teach over live video with a shared whiteboard.' }
        ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Hamburg data project',
      h2: 'How wide are the Elbchaussee trees? The circle formula on real Hamburg data',
      lede: 'Hamburg keeps a register of its street trees, and the Transparenzportal publishes it, free to reuse. Each tree has a girth in centimetres, which is exactly the circumference a Klasse 8 circle task asks about.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Straßenbaumkataster Hamburg comes from the environment authority, BUKEA, under the Datenlizenz Deutschland Namensnennung 2.0. The whole register holds 229,876 trees. We asked its open API for one street, the Elbchaussee along the river in Altona, and on 3 November 2026 saved the answer as elbchaussee.json: 364 trees.',
            'Each tree has a species, a planting year (pflanzjahr) and a trunk girth (stammumfang) in centimetres. Not every field is filled for every tree, which matters below.'
          ],
          rightH3: 'The question',
          right: [
            'How wide is the widest trunk on the Elbchaussee, and how wide is a typical one? The register gives circumference, not width, so every answer needs the circle formula run backwards: d = U / pi.',
            'Then a second question that every good maths pupil asks of any data: are the numbers possible? A tree cannot be planted in a year that has not happened yet.'
          ] },
        { kind: 'code', label: 'Version 1: from girth to diameter', lang: 'Python', code: V1, note: 'It prints <code>Trees: 364 with a girth: 333</code>, <code>Widest: Stiel-Eiche 530 cm round, 168.7 cm across</code> and <code>Mean: 49.0 Median: 43.3</code>.' },
        { kind: 'p', mt: true, html: 'The widest trunk on the street belongs to a pedunculate oak, a Stiel-Eiche, with a girth of 530 cm. Divided by pi that is 168.7 cm, so the trunk is nearly as wide as an adult is tall. The mean diameter, 49.0 cm, sits well above the median, 43.3 cm: a few old giants pull the mean up, while the median shows the typical tree. That difference is a Klasse 7 lesson about averages, here with real wood.' },
        { kind: 'code', label: 'Version 2: are the planting years possible?', lang: 'Python', code: V2, note: 'Run after Version 1, it prints <code>No planting year: 9</code>, <code>Planted in the future: [2104]</code> and <code>Oldest: 1750 Median year: 1965.0</code>.' },
        { kind: 'p', html: 'One tree is listed as planted in 2104. Work out its age the usual way, 2026 minus 2104, and you get minus 78 years, which no tree can have. The register does not say what happened; it may be a typing error, and the record has no girth either. A careful pupil reports it and leaves it out of any average, as Version 2 does. The oldest planting year on the street is 1750, for the same 530 cm oak, and half of the dated trees were planted in 1965 or earlier.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Elbchaussee trees by genus, median girth and the diameter it implies (our calculation)', head: ['Genus', 'Trees with a girth', 'Median girth, cm', 'Diameter, cm (girth / pi)'], rows: [
          ['Oak (Eiche)', '56', '181', '57.6'],
          ['Lime (Linde)', '55', '128', '40.7'],
          ['Maple (Ahorn)', '79', '123', '39.2']
        ] },
        { kind: 'source', html: 'Data: Behörde für Umwelt, Klima, Energie und Agrarwirtschaft, via Transparenzportal Hamburg, Straßenbaumkataster Hamburg, Datenlizenz Deutschland Namensnennung 2.0; the Elbchaussee query was downloaded on 3 November 2026. Every count, median and diameter is our own. Of the 364 trees, 31 have no girth recorded.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Klasse 6.</strong> Wrap a string round a tree or a lamp post, measure it, then divide by 3. Is the result close to the width you see?',
          '<strong>Klasse 7.</strong> Why is the mean diameter above the median? Make up five trunk widths where the mean and the median are the same, then change one so they are not.',
          '<strong>Klasse 8.</strong> A lime on the list has a girth of 128 cm. Find its diameter and the area of its cross-section, to one decimal place.',
          '<strong>Klasse 9 and 10.</strong> Change Version 1 so it prints the widest tree of each genus. Then write one sentence on why you checked the planting years before computing any ages.'
        ] }
      ]
    },
    {
      id: 'abitur',
      eyebrow: 'Abitur 2027',
      h2: 'What does the Hamburg Abitur maths exam involve?',
      lede: 'The written Abitur is part Hamburg, part shared with other Länder. Here is what the published sources say.',
      body: [
        { kind: 'two',
          leftH3: 'Dates and shared tasks',
          left: [
            'The education authority gives the regular written Abitur dates for 2027 as 13 April to 5 May 2027, with catch-up dates from 25 to 31 May 2027. Its exam page offers Hamburg\'s rules for the 2027 Abitur together with sample tasks for the parts the Länder set jointly.',
            'Those joint parts come from the pool coordinated by the IQB. Each Land\'s own commission decides which pool tasks it uses and how far it adds its own.'
          ],
          rightH3: 'The paper itself',
          right: [
            'The IQB describes its maths pool exams in two parts: Part A without aids and Part B with aids. At raised level the exam has 100 marks and 300 minutes; at basic level, 80 marks and 255 minutes, including time to choose tasks.',
            'Part A rewards the fast, sure algebra that is built from Klasse 7 onward. Our <a class="ag-inline-link" href="/abitur-maths-in-english">Abitur maths in English</a> page explains the paper in more detail.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are maths lessons from Hamburg?',
      lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Hamburg pupils usually pick a slot after school or a quiet weekend morning.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample lesson times in Hamburg, with the mentor\'s clock', head: ['In Hamburg', 'Mentor in India, winter', 'Mentor in India, from 28 March 2027'], rows: [
          ['15:55', '20:25', '19:25'],
          ['17:10', '21:40', '20:40'],
          ['Saturday 10:35', '15:05', '14:05'],
          ['Sunday 11:50', '16:20', '15:20']
        ] },
        { kind: 'source', html: 'Germany runs on Central European Time, UTC+1, and summer time, UTC+2, under the Einheitenzeitgesetz; the clocks went back on 25 October 2026 and go forward again on 28 March 2027. India keeps UTC+5:30, so the mentor is 4 hours 30 minutes ahead in winter and 3 hours 30 minutes ahead in summer. Rows are examples, not fixed groups.' },
        { kind: 'p', mt: true, html: 'Lessons continue through school holidays unless you pause. In 2026/27 the KMK table lists Hamburg\'s Christmas break as 21 December 2026 to 1 January 2027, the spring holiday as 1 to 12 March 2027 and a break from 7 to 14 May 2027; summer runs from 1 July to 11 August 2027, just before the maths Nachprüfung on 11 August.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'Five maths stages from Klasse 5 to the Abitur',
    lede: 'Our own scale, built on the five Leitideen. We use it to place a pupil and to report progress.',
    table: { caption: 'Maths stages for Hamburg pupils (ours)', head: ['Stage', 'Usual Klasse', 'By then the pupil can'], rows: [
      ['1. Fractions and decimals', '5 to 6', 'Switch between fractions, decimals and the German decimal comma'],
      ['2. Proportion and percent', '6 to 7', 'Solve percentage and ratio problems and check them by estimate'],
      ['3. Formulas', '7 to 8', 'Use and rearrange formulas such as U = pi d, with units'],
      ['4. Functions and geometry', '8 to 10', 'Read linear and quadratic graphs, use Pythagoras and the circle'],
      ['5. Oberstufe', '10 to 13', 'Differentiate, integrate, use vectors and probability models']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the tree project: one formula, used forwards and backwards, with units kept honest.',
      'We tell you what your child can now do alone, with an example from the last lesson.'
    ] },
    right: { h3: 'For pupils', ps: [
      'If the data gives you the circumference, the formula still works. Just run it the other way.',
      'Before you average anything, check that every value is possible.'
    ] }
  },

  catalogue: {
    eyebrow: 'More maths',
    h2: 'Nine more maths courses for Hamburg pupils',
    lede: 'Each one live and in English, with the same mentor every week, one to one or in a group.',
    bands: [
      { num: 'I', h3: 'Younger pupils', sub: 'Grundschule to Klasse 6', courses: [
        { code: 'ENA / BASE / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Hamburg Grundschule maths, Klasse 1 to 4 and beyond.' },
        { code: 'ENA / BASE / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Fast, sure number work without a calculator.' },
        { code: 'ENA / BASE / 03', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Playful counting and shapes for ages 4 to 7.' }
      ] },
      { num: 'II', h3: 'Going further', sub: 'Klasse 5 to 13', courses: [
        { code: 'ENA / PLUS / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Python projects like the tree one, ages 10 to 15.' },
        { code: 'ENA / PLUS / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Averages, spread and chance, done properly.' },
        { code: 'ENA / PLUS / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Olympiad and Känguru', blurb: 'Contest problems by Klassenstufe, all our own.' }
      ] },
      { num: 'III', h3: 'International syllabuses', sub: 'For Hamburg pupils outside the German track', courses: [
        { code: 'ENA / INTL / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For Cambridge pupils, Core or Extended tier.' },
        { code: 'ENA / INTL / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB maths AA and AI', blurb: 'Analysis or Applications, at either level, plus the exploration.' },
        { code: 'ENA / INTL / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school maths', blurb: 'English-curriculum maths through to calculus.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'A week of live maths lessons from Hamburg',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Each week brings two hour-long live lessons, worked on one whiteboard that pupil and mentor both write on.',
    slots: [
      { time: 'After school', l: 'Hamburg afternoons and early evenings.' },
      { time: 'Weekend', l: 'Saturday or Sunday mornings, good for timed papers.' },
      { time: 'One to one', l: 'A slot you fix with the mentor, moved for exam weeks.' }
    ],
    cells: [
      { h3: 'Exam dates first', p: 'Plans count back from 12 and 13 April 2027.' },
      { h3: 'Read the German', p: 'Tasks are read in German and solved in English.' },
      { h3: 'Our own papers', p: 'Practice sets are written by us, never copied.' },
      { h3: 'Reasons, not tricks', p: 'Pupils explain each step out loud.' },
      { h3: 'Notes for parents', p: 'Progress and next steps in plain words.' },
      { h3: 'Group or private', p: 'Fifteen to twenty pupils, or just one.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Maths turns into code in what our older students make. A few projects are shown below; more are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents and students on Google, in their own words.',

  fees: {
    h2: 'Maths tutoring fees for Hamburg families',
    lede: 'The monthly fee covers eight live lessons. Euro amounts here follow the European Central Bank reference rate. Payment itself is collected in US dollars, which your bank changes into euro, so what reaches your statement may sit slightly above or below the figure shown.',
    free: ['A free first lesson', 'A quick check across the five strands', 'No card required'],
    group: ['Fifteen to twenty pupils at one level', 'A regular maths mentor', 'Two lessons a week', 'Monthly, end any month'],
    one: ['Your child and one mentor', 'A plan built on the 2027 exam dates', 'Times that fit your week']
  },

  faq: {
    eyebrow: 'Hamburg families ask',
    h2: 'Maths tutoring in Hamburg: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons are live and taught in English only. Mentors adapt to your child\'s pace and accent, and because Hamburg papers are in German, every topic ends with the German words and a task read in German, so your child is ready for the real paper.' },
      { q: 'When is the MSA maths exam in Hamburg in 2027?', a: 'Tuesday 13 April 2027, according to the education authority\'s list of exam dates as of 9 September 2026. The catch-up date is Friday 21 May 2027, and re-examinations in maths are on Wednesday 11 August 2027.' },
      { q: 'When is the ESA maths exam in Hamburg in 2027?', a: 'Monday 12 April 2027, one day before the MSA paper. German comes first, on Thursday 8 April 2027. The ESA, the Erster allgemeinbildender Schulabschluss, can be taken at the end of grade 9.' },
      { q: 'Are the Hamburg MSA and ESA maths papers set centrally?', a: 'Yes. hamburg.de says the MSA has a final exam in German and maths with centrally set tasks, and that the ESA usually does too. Every pupil sitting the paper gets the same tasks on the same day.' },
      { q: 'When is the Abitur in Hamburg in 2027?', a: 'The authority lists the regular written Abitur dates as 13 April to 5 May 2027 and catch-up dates as 25 to 31 May 2027. It gives a range, not a day per subject, so your school confirms the maths day.' },
      { q: 'Do you teach Stadtteilschule and Gymnasium pupils?', a: 'Both. A Gymnasium pupil starts the Oberstufe in grade 10 and takes the Abitur after grade 12; a Stadtteilschule pupil starts it in grade 11 and finishes after grade 13. We plan around your child\'s route; the school course is the one that counts.' },
      { q: 'What time are lessons in Hamburg?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A lesson at 17:10 in Hamburg is 21:40 for the mentor in India during winter.' },
      { q: 'Where are your maths tutors?', a: 'In India. They teach over live video, and one mentor stays with your child for the whole year, so each lesson picks up where the last one stopped.' },
      { q: 'How much does it cost, and in which currency?', a: 'Fees are paid monthly for eight live lessons. On this page the fee appears in euro, using the rate the European Central Bank publishes; the card is debited in US dollars and the conversion is your bank\'s. Your first lesson is free.' },
      { q: 'Can you guarantee a grade in the MSA or the Abitur?', a: 'No, and nobody honestly can. We teach the maths, practise with our own tasks under exam conditions, and tell you plainly how your child is doing. The school and the Hamburg authority set and mark the exams.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Hamburg and maths in Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding and maths in Germany', p: 'All our pages for families in Germany.' },
      { href: '/online-math-tutor-germany', label: 'Online maths tutor, Germany', p: 'Maths checkpoints in every Land.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The Abitur paper, part by part.' },
      { href: '/igcse-maths-tutor-germany', label: 'IGCSE maths tutor', p: 'For Cambridge pupils in Germany.' },
      { href: '/math-olympiad-germany-preparation', label: 'Mathematik-Olympiade', p: 'Rounds and our own practice problems.' },
      { href: '/math-tutor-cost-germany', label: 'Maths tutoring costs', p: 'What maths help costs in Germany.' }
    ]
  },

  start: {
    h2: 'Book a free first maths lesson',
    lede: 'Bring a recent class test if you have one. The mentor works through a few short tasks with your child, finds the strand where marks slip, and suggests whether a group or one to one makes more sense.',
    readFirst: 'To read first, the <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">Klasse 5 to 10 syllabus</a> lists every topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson.',
    note: 'All teaching happens live, online and in English, with maths mentors in India. Questions go fastest by WhatsApp.',
    formNote: 'Free, without a card or a contract.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Klasse 5 to 10 maths' },
        { href: '/courses/algebra-foundations-masterclass', label: 'Algebra foundations' },
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Abitur Mathematik' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding and maths in Germany' },
        { href: '/online-math-tutor-germany', label: 'Maths tutor, Germany' },
        { href: '/kangaroo-math-germany-practice', label: 'Känguru practice' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Run the formula backwards, then check it is possible'
  },

  personalityCss: `
.ag-root.ag-ena .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ena .ag-capsule { border-left-width: 5px; border-radius: 1px; }
.ag-root.ag-ena .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ena .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ena .ag-code-note { line-height: 1.55; }
`,

  dossier: {
    curriculumAuthority: 'Behörde für Schule, Familie und Berufsbildung, Termine für die Abschlussarbeiten 2027 (Stand 09.09.2026) and hamburg.de Zentrale Prüfungen; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Hamburg school structure); KMK Eurydice dossier, Bildungsstandards Mathematik ESA/MSA (23.06.2022), holidays 2026/27; IQB pool structure; Destatis GV-ISys 31.12.2024. Data: BUKEA via Transparenzportal Hamburg, Straßenbaumkataster Hamburg, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Elbchaussee trees: an original Python project on the 364 street trees of the Elbchaussee in Hamburg\'s register, in which girths are turned into diameters with d = U / pi (widest: a Stiel-Eiche, 530 cm round, 168.7 cm across), mean and median diameters are compared (49.0 against 43.3), and a planting year of 2104 is caught by a plausibility check; plus a German task worked in English and practice by Klasse. Lesson family: the circle formula backwards, then a plausibility check.',
    requiredMentions: ['elbchaussee.json', 'Widest: Stiel-Eiche 530 cm round, 168.7 cm across', 'Mean: 49.0 Median: 43.3', 'Planted in the future: [2104]', 'Tuesday 13 April 2027', 'Monday 12 April 2027', 'Stammumfang von 2,51 m', 'Run the formula backwards, then check it is possible'],
    sources: [
      { claim: 'ESA, MSA and Abitur exam dates 2027 in Hamburg.', url: 'https://www.hamburg.de/politik-und-verwaltung/behoerden/bsfb/themen/zentrale-pruefungen/termine-133024' },
      { claim: 'Hamburg school structure, Oberstufe G8 and G9.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/hamburg' },
      { claim: 'ESA at the end of grade 9; Gymnasium pupils usually gain the Oberstufe entitlement instead of a central Sek I exam.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Eurydice/DE/dossier_de_ebook.pdf' },
      { claim: 'ESA/MSA maths standards 2022.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2022/2022_06_23-Bista-ESA-MSA-Mathe.pdf' },
      { claim: 'Pool exam structure.', url: 'https://www.iqb.hu-berlin.de/media/documents/M_Beschreibung_der_Struktur_der_Aufgaben.pdf' },
      { claim: 'Hamburg holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Street tree register and licence.', url: 'https://ckan.govdata.de/dataset/strassenbaumkataster-hamburg33617' }
    ],
    rejectedClaims: [
      'Correcting the 2104 planting year: not done; the record is reported and left out.',
      'That the 1750 oak is the oldest tree in Hamburg: only the Elbchaussee query was examined.',
      'A day for the Hamburg Abitur maths paper: the authority lists a range only, so none is given.',
      'Any grade promise: refused; the school and the authority mark the exams.',
      'German-language lessons or any link with the Hamburg authorities: neither exists.'
    ]
  }
};
