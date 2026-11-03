'use strict';
// Coding classes in Thuringia (ag- Land page, Germany cluster P4 row DE103, hubGroup land, code cth, accent #504663).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show euro,
// checkout charges USD.
// Spine: Thuringia is one of only three Länder that already plan six compulsory hours of Informatik in lower secondary,
// through the new subject Medienbildung und Informatik (MBI). But it arrives one grade a year: in 2026/27 it reaches grades 5
// to 7, and the first class will have it in grade 10 only in 2029/30. Meanwhile a third of Oberstufe pupils take Informatik,
// and the Leistungskurs exam, set centrally, puts a programming task into every optional question.
// Sources (read raw 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Thüringen page (facts-school/src/infmon-thueringen/592b113d.txt): MBI introduced 2024/25
//    "mit jeweils zwei Wochenstunden in den Doppeljahrgangsstufen 5/6 und 7/8 sowie jeweils eine Unterrichtswochenstunde in
//    den Klassenstufen 9 und 10 an allen allgemeinbildenden Schulen"; "Die Umsetzung erfolgt aktuell in den Jahrgangsstufen 5,
//    6 und 7 – sie erfolgt schrittweise aufwachsend bis zur Jahrgangsstufe 10 im Schuljahr 2029/30." (FACTS 89); new Lehrplan
//    for grade 7 in force from 2026/27; Wahlpflicht options (Regel- and Gesamtschule with Wirtschaft-Recht-Technik; Gymnasium
//    grades 9 and 10 up to six hours; Gemeinschaftsschule); Qualifikationsphase "dreistündig auf grundlegendem" and
//    "fünfstündig" at raised level; "Informatik als Fach mit grundlegendem Anforderungsniveau kann nur als mündliches
//    Prüfungsfach gewählt werden."; "Die Aufgaben werden zentral durch eine landesweite Prüfungsaufgabenkommission erstellt
//    und vom Ministerium für Bildung, Wissenschaft und Kultur genehmigt. Verpflichtende Programmieraufgaben sind in jeder
//    Wahlaufgabe enthalten; von drei Wahlaufgaben müssen zwei gelöst werden."; practical applications allowed if used in class
//    "(z. B. ein Diagrammeditor oder eine Automatensimulation)"; Informatik can replace a second science; school types
//    Förderschule, Regelschule, Gesamtschule, Gymnasium, Gemeinschaftsschule; Gymnasium Einführungsphase grade 10; key
//    figures 2024/2025: Sek II share "33 %", Abitur candidates with Informatik "1 %", 149 Informatik teachers, "1 %" of all
//    teachers, 10 new hires.
//  - Informatik-Monitor national page: MV, Saarland and Thüringen meet the medium-term recommendation of 6 compulsory hours
//    (FACTS 90).
//  - KMK: Regelschule (Thüringen) two-track school, Gemeinschaftsschule three-track (FACTS 20, 21); FER2026_27 row
//    "Thüringen (2) 12.10. - 24.10. 23.12. - 02.01. 01.02. - 06.02. 22.03. - 03.04. 07.05. 10.07. - 20.08." (FACTS 283);
//    Sommerferienregelung 2027 (FACTS 272). FACTS BLOCKED.md: no ministry source for G8/G9 in Thüringen, so the page only
//    repeats the monitor's description of the Oberstufe grades.
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Thüringen 2,100,277; Erfurt 218,793.
//  - No 2027 Abitur dates fetched from the Thuringian ministry; none printed.
//  - Data: Thüringer Ministerium für Digitales und Infrastruktur, Kompetenzzentrum GDI-Th, INSPIRE WFS Verwaltungseinheiten
//    (https://www.geoproxy.geoportal-th.de/geoproxy/services/INSPIREau_wfs), capabilities Fees: "Lizenz: Creative Commons BY 4.0
//    ... Namensnennung: "© GDI-Th"" (au-capabilities.xml saved); GetFeature au:AdministrativeUnit with PROPERTYNAME
//    nationalCode, name, nationalLevel, nationalLevelName saved as au_names.gml (19,180,326 bytes, sha256 154e91f1...
//    564d9445), 729 units, downloaded 3 November 2026; converted by our script to einheiten_thueringen.csv (code, name, level).
// Our own calculations (scratchpad de/w/L2/th/v1.py, v2.py, v3.py, python3 -I), exact output:
//    v1: "Municipality rows: 624" / "Entries keyed by name: 621"
//    v2: "Entries keyed by code: 624" / "Names used twice: ['Eichenberg', 'Elxleben', 'Lehesten']"
//    v3: "Districts: 22" / "Most municipalities: Saale-Holzland-Kreis 91" /
//        "Eichenberg in ['Hildburghausen', 'Saale-Holzland-Kreis']" / "Lehesten in ['Saale-Holzland-Kreis',
//        'Saalfeld-Rudolstadt']" / "Elxleben in ['Ilm-Kreis', 'Sömmerda']"
// Lesson family: a name is not a key; use the unique identifier, or a dictionary silently overwrites rows.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("einheiten_thueringen.csv", encoding="utf-8") as f:',
  '    units = list(csv.DictReader(f, delimiter=";"))',
  'gemeinden = [u for u in units if u["ebene"] == "Kommunales Gebiet"]',
  '',
  'by_name = {g["name"]: g["code"] for g in gemeinden}',
  'print("Municipality rows:", len(gemeinden))',
  'print("Entries keyed by name:", len(by_name))'
].join('\n');

const V2 = [
  'by_code = {g["code"]: g["name"] for g in gemeinden}',
  'seen, twice = set(), []',
  'for g in gemeinden:',
  '    if g["name"] in seen:',
  '        twice.append(g["name"])',
  '    seen.add(g["name"])',
  'print("Entries keyed by code:", len(by_code))',
  'print("Names used twice:", sorted(twice))'
].join('\n');

const V3 = [
  'from collections import Counter',
  '',
  'kreis_name = {u["code"][:7]: u["name"] for u in units if u["ebene"] == "Landkreis/Stadtkreis"}',
  'per_kreis = Counter(code[:7] for code in by_code)',
  'top = per_kreis.most_common(1)[0]',
  'print("Districts:", len(kreis_name))',
  'print("Most municipalities:", kreis_name[top[0]], top[1])',
  'for name in ["Eichenberg", "Lehesten", "Elxleben"]:',
  '    print(name, "in", sorted(kreis_name[c[:7]] for c, n in by_code.items() if n == name))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'Thuringia' },
  slug: 'coding-classes-in-thuringia',
  code: 'cth',
  accent: '#504663',
  accentRationale: 'Thuringia Land page: a dusky slate violet #504663, the shade of the Thuringian Forest ridges at dusk, distinct from the Saxony teal and the Saxony-Anhalt slate blue beside it; contrast 7.11 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes in Thuringia',
  title: 'Coding Classes in Thuringia: Live Online in English',
  description: 'Coding classes in Thuringia, live online in English: the new subject Medienbildung und Informatik, the central Informatik Abitur, holidays and a data project.',
  ogDescription: 'Live coding in English for pupils in Thuringia: how Medienbildung und Informatik reaches one more grade each year until 2029/30, how the central Leistungskurs exam puts programming into every optional task, the 2026/27 holidays and an original project on the Land\'s list of municipalities.',
  twitterDescription: 'Coding in English for Thuringia: the new MBI subject, the central Informatik exam and a municipalities data project.',
  pageName: 'Coding Classes in Thuringia',
  webPageDescription: 'A guide for families in Thuringia to coding and school Informatik, built from the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, the KMK and Destatis, with an original Python project on the Land\'s open register of administrative units published by GDI-Th.',
  courseDescription: 'Live online coding classes in English for learners in Thuringia: support beside Medienbildung und Informatik from Klasse 5, Python and Java for the Oberstufe and its central Leistungskurs exam, competition training and adult courses, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Thuringia',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'MBI' },
    { href: '#abitur', label: 'Abitur' },
    { href: '#project', label: 'Data project' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Thuringia &middot; Coding and Informatik &middot; Klasse 5 to Leistungskurs',
  h1: 'Coding classes in Thuringia',
  lede: 'Thuringia has one of the most generous plans for school Informatik in Germany: the new compulsory subject Medienbildung und Informatik is meant to give six hours across lower secondary. It is arriving one grade at a time, though, and the first class to have it in grade 10 will get there in 2029/30. This page shows who has the subject now, how the central Informatik Abitur works, the holidays of 2026/27, how our live classes in English fit around school, and a data project on the Land\'s municipalities in which three towns vanish from a dictionary.',
  secondaryCta: { href: '#project', label: 'See the data project' },
  wa: 'Hello Modern Age Coders, we live in Thuringia and would like to book a free coding class in English.',
  heroNote: 'Live online teaching since 2020 &middot; 10,000+ students in many countries &middot; all lessons in English, with one regular mentor',
  spec: [
    ['Ages', 'About 9 to 19, and adults'],
    ['Fits beside', 'MBI, Wahlpflicht Informatik, Grund- and Leistungskurs'],
    ['Languages', 'Scratch, Python, Java'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'Based in India, teaching in English'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'For families in Thuringia, Modern Age Coders teaches coding in live online classes in English, from about age 9 up to adults, as a private lesson or a batch of fifteen to twenty. Younger pupils build on the new subject Medienbildung und Informatik with our Informatik Companion course; Oberstufe pupils practise Python or Java for the Leistungskurs, whose central exam includes programming in every optional task.',

  picks: {
    eyebrow: 'Thuringian starting points',
    h2: 'Three courses that follow the Thuringian school path',
    lede: 'One beside the new compulsory subject, one for the Oberstufe and its central exam, and one for the national contests.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'CTH / 01', title: 'Informatik Companion, Klasse 5 to 10', note: 'Roughly 10 to 16. The informatics half of MBI taken further: algorithms, data, networks and real programming, for pupils whose grade has the subject and for those whose grade is still waiting.' },
      { course: 'informatik-abitur-course-java-python', code: 'CTH / 02', title: 'Informatik for the Oberstufe and Abitur', note: 'Roughly 16 to 19. Java or Python, data structures, automata and modelling, with written programming tasks like those in every optional question of the Thuringian exam.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'CTH / 03', title: 'German informatics competitions', note: 'Roughly 9 to 19. From Biber-style puzzles to Bundeswettbewerb algorithms and AI projects, every problem written by us.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Medienbildung und Informatik',
      h2: 'Is Informatik compulsory in Thuringia?',
      lede: 'Yes, as part of the new subject Medienbildung und Informatik (MBI), but only for the grades it has reached so far. The facts below come from the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27.',
      body: [
        { kind: 'table', numCols: [], caption: 'Medienbildung und Informatik in Thuringia: planned hours and roll-out', head: ['Grades', 'Planned weekly hours', 'Taught in 2026/27?'], rows: [
          ['5 and 6', 'Two hours a week in each year of the pair', 'Yes'],
          ['7 and 8', 'Two hours a week in each year of the pair', 'Grade 7 yes, grade 8 not yet'],
          ['9', 'One hour a week', 'Not yet'],
          ['10', 'One hour a week', 'From 2029/30']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Thüringen page, read 2 November 2026. MBI was introduced in 2024/25 at all general schools as a development of the earlier Medienkunde course; the monitor says it is currently taught in grades 5, 6 and 7 and grows one grade a year until grade 10 in 2029/30. A new curriculum for grade 7 came into force for 2026/27.' },
        { kind: 'two', mt: true,
          leftH3: 'Six hours, eventually',
          left: [
            'On paper Thuringia is ahead. The GI\'s national summary names Mecklenburg-Vorpommern, Saarland and Thuringia as the only three Länder that meet the medium-term recommendation of six compulsory hours of Informatik in lower secondary.',
            'In practice a pupil in grade 8 in 2026/27 has not had MBI at all and will not, because the subject started with the younger grades. For those pupils, the electives are the only route: Informatik as a Wahlpflicht subject at the Regelschule, Gesamtschule, Gemeinschaftsschule or Gymnasium, where offered.'
          ],
          rightH3: 'Few teachers for a new subject',
          right: [
            'The monitor reports 149 Informatik teachers in Thuringia for 2024/25, 1 % of all teachers, and 10 newly hired in the year. A subject planned for six hours across six grades will need many more as it grows.',
            'MBI is also a joint subject: the monitor describes it as a development of the older Medienkunde course, so its hours are shared between media education and informatics, and the time left for programming is smaller than the headline number.'
          ] },
        { kind: 'p', mt: true, html: 'Thuringia has 2,100,277 residents, 218,793 of them in Erfurt, the Land capital (Destatis, 31 December 2024). Children attend the Grundschule for four years, or a Gemeinschaftsschule from grade 1, then a Regelschule, a Gesamtschule, a Gymnasium, a Gemeinschaftsschule or a Förderschule. The KMK lists the Thuringian Regelschule as a school that combines two tracks. At the Gymnasium and the Gemeinschaftsschule grade 10 is the Einführungsphase of the Oberstufe; at the Gesamtschule it is grade 11.' }
      ]
    },
    {
      id: 'abitur',
      tint: 'tint',
      eyebrow: 'The Informatik Abitur',
      h2: 'How is the Informatik Abitur set in Thuringia?',
      lede: 'Centrally, by a Land commission, with programming in every optional task. These rules come from the Informatik-Monitor.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in the Thuringian Oberstufe (Informatik-Monitor 2026/27)', head: ['Stage', 'What is offered', 'Exam'], rows: [
          ['Einführungsphase', 'Informatik as an elective, usually three hours a week in grade 10', 'None'],
          ['Qualifikationsphase, basic level', 'Three hours a week', 'Oral exam only'],
          ['Qualifikationsphase, raised level', 'Five hours a week, if the elective was taken before', 'Written exam, set centrally']
        ] },
        { kind: 'source', html: 'Taken from the GI\'s Informatik-Monitor 2026/27 (Thüringen page, consulted 2 November 2026). Informatik can stand in for a second science in a pupil\'s course choices, and as an exam subject it is treated as equal to the sciences. We did not obtain the 2027 Abitur dates from the Thuringian ministry, so this page prints none.' },
        { kind: 'two', mt: true,
          leftH3: 'What the exam looks like',
          left: [
            'Written tasks for the Leistungskurs are drawn up by a Land-wide exam commission and approved by the ministry, according to the monitor. Every optional task includes compulsory programming, and pupils must solve two of three optional tasks.',
            'Practical tools may be used where they were part of the course and are installed on the exam computers, the monitor adds, giving a diagram editor or an automata simulator as examples.'
          ],
          rightH3: 'How to prepare',
          right: [
            'Because programming is in every optional task, a pupil cannot avoid it by choosing well. Fluency matters: writing a correct method quickly, explaining a state machine, modelling a class diagram.',
            'We practise exactly those, with timed tasks we write ourselves. Only the school course and the school exam count for the Abitur; we teach alongside, never grade school work and have no role in the exam.'
          ] },
        { kind: 'p', mt: true, html: 'Two numbers from the monitor show how the Oberstufe works in practice. In 2024/25, 33 % of Thuringian upper secondary pupils took Informatik, from KMK figures, more than twice the national average of about 15 % that the GI quotes; yet the Land\'s education ministry counts only 1 % of Abitur candidates sitting an exam in it. Many pupils keep the subject without examining it.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are your classes taught in German?',
      lede: 'No. All lessons are live and in English. Mentors based in India adapt their pace and accent to the learner.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English only', p: 'We run no German-language lessons. A Thuringian pupil practises English with every program; a family that already speaks English at home finds nothing to adjust to.' },
          { h3: 'Paced for the learner', p: 'Mentors check that each step is understood, rephrase when needed, and give quieter pupils time to answer. They get used to an accent within a few lessons.' },
          { h3: 'German words named', p: 'MBI and the Oberstufe use German terms: Algorithmus, Datenmodell, Automat, Zustand. We teach the idea in English and say the German term as well.' }
        ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Thuringian data project',
      h2: 'How many municipalities does Thuringia have? A name is not a key',
      lede: 'The Land\'s geodata centre (GDI-Th) publishes all of Thuringia\'s administrative units as open data: the Land, its districts, its administrative communities and every municipality, each with an official code. Our pupils use it for a lesson that saves real programs from quiet errors: names can repeat, codes cannot, so you key your data by the code.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'We requested the names, levels and official codes of all administrative units from the GDI-Th INSPIRE web feature service on 3 November 2026; its terms state the licence as Creative Commons BY 4.0 with the credit "© GDI-Th", which allows reuse with attribution. Our script saved the 729 units as einheiten_thueringen.csv with three columns: code, name and level (ebene).',
            '624 of the rows are municipalities (Kommunales Gebiet). The others are 22 districts and towns with district status, 82 administrative communities and the Land itself.'
          ],
          rightH3: 'The question',
          right: [
            'A pupil wants a quick lookup from a municipality\'s name to its code, the kind of table a school app might use. In Python that is one line: a dictionary keyed by name.',
            'Version 1 builds it and counts the entries. The count should be 624.'
          ] },
        { kind: 'code', label: 'Version 1: key by name', lang: 'Python', code: V1, note: 'It prints: <code>Municipality rows: 624</code> and <code>Entries keyed by name: 621</code>.' },
        { kind: 'p', mt: true, html: 'Three municipalities have vanished, with no error and no warning. A Python dictionary keeps one value per key: when the same name comes again, the new row silently replaces the old one. Version 2 keys the data by the official code instead and lists the names that appear twice.' },
        { kind: 'code', label: 'Version 2: key by code, find the repeats', lang: 'Python', code: V2, note: 'It prints: <code>Entries keyed by code: 624</code> and <code>Names used twice: [\'Eichenberg\', \'Elxleben\', \'Lehesten\']</code>.' },
        { kind: 'code', label: 'Version 3: where are the twins?', lang: 'Python', code: V3, note: 'It prints: <code>Districts: 22</code>, <code>Most municipalities: Saale-Holzland-Kreis 91</code>, <code>Eichenberg in [\'Hildburghausen\', \'Saale-Holzland-Kreis\']</code>, <code>Lehesten in [\'Saale-Holzland-Kreis\', \'Saalfeld-Rudolstadt\']</code> and <code>Elxleben in [\'Ilm-Kreis\', \'Sömmerda\']</code>.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Thuringian municipalities that share a name, and their districts (our analysis)', head: ['Name', 'First district', 'Second district'], rows: [
          ['Eichenberg', 'Hildburghausen', 'Saale-Holzland-Kreis'],
          ['Elxleben', 'Ilm-Kreis', 'Sömmerda'],
          ['Lehesten', 'Saale-Holzland-Kreis', 'Saalfeld-Rudolstadt']
        ] },
        { kind: 'source', html: 'Data: Thüringer Ministerium für Digitales und Infrastruktur, GDI-Th, INSPIRE WFS Verwaltungseinheiten, licence CC BY 4.0, credit © GDI-Th, retrieved 3 November 2026. The counts are of the units the service returned on that day; the district of each municipality is read from the first five digits of its official code. All counts and the table are our own analysis.' },
        { kind: 'p', mt: true, html: 'Each pair is two separate places in different districts, and a lookup by name would have sent anyone looking for one of them to the other. The fix is simple once you see it: use the identifier as the key, and keep the name as a label. The habit carries far beyond maps: pupils with the same first name in a class list, two products with one title in a shop, two files called final.docx.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 11, no screen.</strong> Write a class list where two pupils share a first name, then try to find "the" one. What would make each entry unique?',
          '<strong>Ages 11 to 13, Scratch.</strong> Store names in one list and codes in another, look up a name, and see which code Scratch returns when a name appears twice.',
          '<strong>Teenagers, in Python.</strong> Run Version 1, explain the missing three in one sentence, then write Version 2 before reading ours.',
          '<strong>Going further.</strong> Count municipalities per district from the code and rank the districts. Then check your total against the number of municipality rows.'
        ] }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'Holidays',
      h2: 'When are the Thuringian school holidays in 2026/27?',
      lede: 'Thuringia shares its 2027 summer dates with Saxony and Saxony-Anhalt. Our lessons continue through holidays unless you decide to pause.',
      body: [
        { kind: 'table', numCols: [], caption: 'School breaks in Thuringia for 2026/27', head: ['Break', 'Runs'], rows: [
          ['Herbstferien (autumn)', '12 to 24 October 2026'],
          ['Weihnachtsferien', '23 December 2026 to 2 January 2027'],
          ['Winter', '1 to 6 February 2027'],
          ['Easter', '22 March to 3 April 2027'],
          ['Single day', '7 May 2027'],
          ['Summer', '10 July to 20 August 2027']
        ] },
        { kind: 'source', html: 'Dates from two KMK tables: the 2026/2027 holiday overview of 9 October 2025 and the long-range summer list for 2025 to 2030. Thuringia adds two movable holiday days set by each school.' }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Contests',
      h2: 'Which informatics contests can Thuringian pupils enter?',
      lede: 'The national contests, through school.',
      body: [
        { kind: 'p', html: 'Pupils who have started MBI in grades 5 to 7 are a natural audience for the Biber, the no-cost logic quiz that Bundesweite Informatikwettbewerbe holds for school years 3 to 13; this year it falls between 9 and 20 November 2026, with entry handled by the school. Older pupils can enter the 45th Bundeswettbewerb Informatik, whose first round closes on 23 November 2026. Our competition lessons rely on puzzles we write ourselves and never copy the organisers\' tasks; we have no connection with BWINF.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When could lessons be in Thuringia?',
      lede: 'Weekday afternoons and early evenings, or around midday on a Sunday. Booking shows every slot in your local time.',
      body: [
        { kind: 'table', numCols: [], caption: 'Three sample Thuringian slots and the mentor\'s hour', head: ['Thuringia', 'India until 27 March 2027', 'India after 28 March 2027'], rows: [
          ['15:10', '19:40', '18:40'],
          ['17:20', '21:50', '20:50'],
          ['Sunday 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz Germany keeps UTC+1 in the winter months and UTC+2 in summer; this year the change back came on 25 October 2026 and the change forward follows on 28 March 2027. India does not change its clocks (UTC+5:30), so the difference is four and a half hours in winter and three and a half in summer. Slots shown are only examples.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What a Thuringian learner can do at each stage',
    lede: 'A scale we built for placing newcomers and telling parents what has changed; school grades are another matter.',
    table: { caption: 'Programming milestones, grade 5 to the Leistungskurs (ours)', head: ['Milestone', 'Usually in', 'The learner can'], rows: [
      ['1. Steps and blocks', 'Grade 5', 'Turn an everyday process into steps and build it in Scratch'],
      ['2. Variables and lists', 'Grades 6 and 7', 'Store and look up values, and test with chosen inputs'],
      ['3. Keys and records', 'Grades 8 and 9', 'Read a CSV file, key it by a unique ID and find duplicates'],
      ['4. Models', 'Grade 10', 'Draw a class diagram or a state machine and implement it'],
      ['5. Exam ready', 'Qualifikationsphase', 'Solve two of three exam-style tasks with programming in each']
    ] },
    left: { h3: 'For parents', ps: [
      'The municipalities project is milestone 3: a pupil learns that the obvious key can lose data without a single error message.',
      'You hear about what your child built and can explain, not about time online.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you make a dictionary, ask whether the key can repeat. Names usually can.',
      'Count your rows before and after. If they differ, find out why.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners in Thuringia',
    lede: 'Live in English, with one mentor throughout, in a group of fifteen to twenty or one to one.',
    bands: [
      { num: 'I', h3: 'Younger learners', sub: 'Ages 7 to 12', courses: [
        { code: 'CTH / KID / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks to apps over a long course.' },
        { code: 'CTH / KID / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How machines learn, explained for children.' },
        { code: 'CTH / KID / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Scripted games in Luau.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CTH / TEEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Classes and objects for the Oberstufe.' },
        { code: 'CTH / TEEN / 02', slug: 'mysql-mastery-for-teens', title: 'Databases for teens', blurb: 'Keys, tables and SQL queries.' },
        { code: 'CTH / TEEN / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Defensive, ethical security basics.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'CTH / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'Programming from the very beginning.' },
        { code: 'CTH / ADULT / 02', slug: 'mysql-database-complete-masterclass-college', title: 'SQL databases', blurb: 'Design, keys and queries for real work.' },
        { code: 'CTH / ADULT / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'Build with large language models.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes work for a family in Thuringia',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in German time.' },
      { time: 'Weekend', l: 'A Saturday or Sunday lesson.' },
      { time: 'Private', l: 'One to one at a time you agree.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'Someone who knows the learner from week to week.' },
      { h3: 'Code from day one', p: 'Programs written and run in every lesson.' },
      { h3: 'Ahead of the roll-out', p: 'Grades that missed MBI still learn to program.' },
      { h3: 'German terms given', p: 'School vocabulary paired with English.' },
      { h3: 'Short updates', p: 'A few lines for parents after each block.' },
      { h3: 'Group or private', p: 'Fifteen to twenty learners, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students made',
  projectsLede: 'Projects from learners who kept going; the <a class="ag-inline-link" href="/student-labs">student labs</a> page collects many more.',
  reviewsLede: 'What reviewers on Google said about us, quoted without edits.',

  fees: {
    h2: 'Fees for families in Thuringia',
    lede: 'Eight live lessons are included in each month\'s fee. We quote it in euro using the ECB reference rate for convenience, but the payment goes through in US dollars; your bank does the exchange, which can move the final amount a little.',
    free: ['A free first class', 'One task at the learner\'s level', 'No card needed'],
    group: ['Fifteen to twenty learners at a similar level', 'The same mentor each week', 'Two lessons a week', 'Monthly, cancel any month'],
    one: ['A mentor for the learner alone', 'Planned around school and exams', 'Times chosen together']
  },

  faq: {
    eyebrow: 'Thuringian families ask',
    h2: 'Coding classes in Thuringia: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons happen live and in English, never German; the mentors sit in India and tune pace and accent to each child. Thuringian school words are mentioned alongside the English.' },
      { q: 'Is Informatik compulsory in Thuringia?', a: 'Yes, inside the new subject Medienbildung und Informatik. The Informatik-Monitor 2026/27 says it is taught in grades 5, 6 and 7 now and reaches grade 10 in 2029/30.' },
      { q: 'My child is in grade 8 and never had MBI. What now?', a: 'The subject started with younger grades, so your child\'s year will not get it. Electives in Informatik exist at most school types from grade 7 or 9, and outside lessons can fill the gap.' },
      { q: 'How is the written Informatik Abitur set?', a: 'Centrally. According to the Informatik-Monitor, a Land-wide commission writes the Leistungskurs tasks and the ministry approves them; every optional task includes programming, and pupils solve two of three.' },
      { q: 'Can Informatik be a written Abitur subject at basic level?', a: 'No. The monitor says the basic-level course can only be an oral exam subject; the written exam is for the raised level.' },
      { q: 'Do your lessons count for school?', a: 'No. Only the Gymnasium or Regelschule course and its exams matter for school results; our lessons are extra practice and come with no grade or certificate.' },
      { q: 'When are classes in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Slots from about 15:10 suit many pupils.' },
      { q: 'How many children share a lesson?', a: 'A batch has fifteen to twenty, grouped by level. The alternative is private lessons, where your child has the mentor alone.' },
      { q: 'How are the fees charged?', a: 'Our euro figure follows the ECB reference rate, but the card payment runs in dollars and your bank converts it on the day. The trial lesson is free of charge.' },
      { q: 'Are you connected to the Thuringian ministry or a school?', a: 'No. Modern Age Coders is a private online provider; neither the Thuringian ministry, the KMK, BWINF nor any Thuringian school is involved with us.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Thuringia.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our whole Germany section.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'Thuringia beside the other Länder.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'School Informatik help, in German.' },
      { href: '/jugendwettbewerb-informatik-preparation', label: 'Jugendwettbewerb Informatik', p: 'The step after the Biber.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'The Oberstufe subject in depth.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live lesson.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the trial, your child works on one small coding problem pitched at their stage. Watching that, the mentor can judge their reasoning and their comfort with spoken English, and afterwards proposes the right course and batch.',
    readFirst: 'Prefer to read first? See <a class="ag-inline-link" href="/how-we-teach">how our lessons are run</a> and <a class="ag-inline-link" href="/courses">every course we teach</a>.',
    note: 'Teaching happens live over video from India, always in English. For quick questions, WhatsApp works well.',
    formNote: 'Free, with no card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Informatik', links: [
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/jugendwettbewerb-informatik-preparation', label: 'Jugendwettbewerb Informatik' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber practice' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/german-school-system-maths-and-computing-explained', label: 'German school system' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'A name is not a key'
  },

  personalityCss: `
.ag-root.ag-cth .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-cth .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-cth .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cth .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-cth .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Thüringen and national pages); KMK FER2026_27, Sommerferienregelung and school-type overview; Destatis GV-ISys 31.12.2024; BWINF 2026/27 dates; read 2 and 3 November 2026. Data: Thüringer Ministerium für Digitales und Infrastruktur, GDI-Th, INSPIRE WFS Verwaltungseinheiten, CC BY 4.0.',
    localProject: 'A name is not a key: an original Python project on the GDI-Th register of 729 administrative units. A dictionary keyed by name holds 621 of the 624 municipalities; keying by official code keeps all 624 and reveals three names used twice (Eichenberg, Elxleben, Lehesten), each pair in two different districts; the Saale-Holzland-Kreis has the most municipalities (91) of 22 districts. Lesson family: a name is not a key; use the unique identifier.',
    requiredMentions: ['einheiten_thueringen.csv', 'Entries keyed by name: 621', 'Entries keyed by code: 624', "Names used twice: ['Eichenberg', 'Elxleben', 'Lehesten']", 'Most municipalities: Saale-Holzland-Kreis 91', 'Medienbildung und Informatik (MBI)', '12 to 24 October 2026', 'A name is not a key'],
    sources: [
      { claim: 'MBI hours and roll-out to 2029/30; electives; Oberstufe; central LK exam with programming in every optional task; key figures.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/thueringen' },
      { claim: 'Thuringia among three Länder meeting the 6-hour recommendation.', url: 'https://informatik-monitor.de/' },
      { claim: 'Holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Population of Thuringia and Erfurt.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/02-bundeslaender.xlsx?__blob=publicationFile' },
      { claim: 'Administrative units, CC BY 4.0, © GDI-Th.', url: 'https://www.geoproxy.geoportal-th.de/geoproxy/services/INSPIREau_wfs?SERVICE=WFS&REQUEST=GetCapabilities' }
    ],
    rejectedClaims: [
      'Thuringian Abitur 2027 dates: not fetched from the ministry, so none printed.',
      'G8 or G9 for Thuringia as a ministry fact: no ministry source; only the monitor\'s Oberstufe description is used.',
      'Naming schools as sources of students: refused.',
      'German-language teaching: we teach in English only.',
      'Any affiliation with the Thuringian ministry, GDI-Th, BWINF or a school: none.'
    ]
  }
};
