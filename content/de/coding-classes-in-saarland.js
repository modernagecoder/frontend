'use strict';
// Coding classes in Saarland (ag- Land page, Germany cluster P4 row DE097, alloc code csa, accent #476130).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent.
// Spine: the smallest Flächenland is one of three Länder that already give six compulsory Informatik hours (two hours a
// week in grades 7 and 8, one hour in grades 9 and 10, at Gemeinschaftsschulen and the nine-year Gymnasium), with
// Informatik and MINT branches at some Gymnasien, while the Gymnasium returns to nine years. Its central Informatik Abitur
// forbids practical work and allows only a calculator. Data project: the Land's own school locations (GDI-SL), where
// degrees of longitude are not kilometres.
// Sources (read raw; copies under ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-in-saarland/):
//  - GI Informatik-Monitor 2026/27, Saarland page (infmon-saarland/ec076df9.txt; FACTS 51, 84): "An Gemeinschaftsschulen
//    und am neunjährigen Gymnasium findet Informatikunterricht verpflichtend in den Jahrgangsstufen 7 und 8 zweistündig
//    sowie den Jahrgangsstufen 9 und 10 einstündig statt. Im Informatikzweig am Gymnasium findet der Informatikunterricht
//    in in den Jahrgangsstufen 8 bis 10 jeweils vierstündig statt. Im MINT-Zweig am Gymnasium findet der
//    Informatikunterricht in der Jahrgangsstufe 10 zweistündig statt."; expiring G8 "in Jahrgangsstufe 10 zweistündig ein
//    Wahlpflichtfach"; Einführungsphase "zweistündiges Wahlpflichtfach"; Q-phase Grundkurs two hours, Leistungskurs five;
//    "Ein Leistungskursfach Informatik kann nur belegt werden, sofern Informatik bereits in der Einführungsphase besucht
//    wurde."; "Im Leistungskursfach Informatik wird schriftlich geprüft. Im Grundkursfach Informatik ist eine schriftliche
//    oder mündliche Prüfung möglich."; "Die schriftlichen Abiturprüfungsaufgaben werden zentral vorgegeben. Die
//    Aufgabenstellungen werden durch je eine Abiturauswahlkommission für das grundlegende bzw. erhöhte Anforderungsniveau
//    ausgewählt und überarbeitet."; "praktische Anteile (z. B. Programmieraufgaben, praktische Anwendungen am Computer)
//    unzulässig"; "nur der Taschenrechner zugelassen"; Basiscurriculum "Medienbildung und informatische Bildung" grades 1
//    to 10; Gemeinschaftsschule and Gymnasium; Gymnasium "derzeit" G8, "bis 2026/27 eine Umstellung hin zum
//    G9-Bildungsgang"; branches incl. "Informatikzweig (Modellversuch), MINT-Zweig (Modellversuch)"; revisions of the
//    Oberstufe and of the Informatik curricula for grades 11 to 13 expected "in den kommenden beiden Jahren". Kennzahlen:
//    Sek II with Informatik 15 % (2024/2025); Abiturienten with Informatik as a written exam subject 6 % (2025/2026);
//    211 Informatik teachers, 4 % of teachers (2025/2026).
//  - GI national page (FACTS 90): Mecklenburg-Vorpommern, Saarland and Thüringen meet the recommendation of 6 hours.
//  - KMK FER2026_27.pdf (kmk-fer2627/fe303dbf.txt): "Saarland (2) 05.10. - 16.10. 21.12. - 31.12. 08.02. - 12.02.
//    30.03. - 09.04. -- 28.06. - 06.08."
//  - KMK Schema (FACTS 20): Gemeinschaftsschule named for Saarland.
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Saarland 1,012,141; Saarbrücken 182,971.
//  - Blocked: www.saarland.de (ministry pages for Abitur 2027 dates) returned HTTP 403; stopped, not retried. So no 2027
//    Abitur date is given on this page. Saarbrücken's open data portal lists its datasets as "datenliz-de" without saying
//    which Datenlizenz, so it was not used.
//  - Data: GDI-Saarland, WFS "Staatliche_Dienste", feature type Staatliche_Dienste:Schulen_SL ("Schulen im Saarland"),
//    https://geoportal.saarland.de/arcgis/services/Internet/Staatliche_Dienste/MapServer/WFSServer, GetFeature as GeoJSON,
//    saved as schulen_sl.geojson (230,009 bytes, sha256 7ca9a674...07b863), 374 features, ERFASSUNG 20.05.2025; metadata
//    (mod_showMetadata wfs 257, featuretype 1125): "Lizenz: Namensnennung 4.0 International Quellenvermerk: © GDI-SL (Jahr)".
//    Downloaded 3 Nov 2026. Contact columns are never printed and no school is named.
// Our own calculations (scratchpad de/w/L1/sl_all.py = sl_v1 + sl_v2 + sl_v3, python3 -I, run in the data folder):
//  "Schools in the file: 374 | Gymnasien: 36", "Farthest apart (degrees x 111): 80.3 km", "Same pair, measured in
//  metres: 53.7 km", "Farthest apart (metres): 53.7 km", "Same pair as before? True", "Longitude squeezed by
//  cos(latitude): 53.6 km", "One degree of longitude here: 72.4 km". Exploration: the pair is in Merzig and Homburg;
//  Schulform counts include Grundschule 183, Gemeinschaftsschule 63, Gymnasium 36.
// Lesson family: a degree of longitude is not a degree of latitude; measure distances in metres, not raw degrees.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import json',
  'from itertools import combinations',
  '',
  'with open("schulen_sl.geojson", encoding="utf-8") as src:',
  '    schools = json.load(src)["features"]',
  '',
  'gym = [s for s in schools if s["properties"]["Schulform"] == "Gymnasium"]',
  'print("Schools in the file:", len(schools), "| Gymnasien:", len(gym))',
  '',
  'def degrees_km(a, b):',
  '    (lon1, lat1), (lon2, lat2) = a["geometry"]["coordinates"], b["geometry"]["coordinates"]',
  '    return ((lon2 - lon1) ** 2 + (lat2 - lat1) ** 2) ** 0.5 * 111',
  '',
  'pair = max(combinations(gym, 2), key=lambda p: degrees_km(*p))',
  'print("Farthest apart (degrees x 111):", round(degrees_km(*pair), 1), "km")'
].join('\n');

const V2 = [
  'def metres_km(a, b):',
  '    pa, pb = a["properties"], b["properties"]',
  '    return ((pb["Ost"] - pa["Ost"]) ** 2 + (pb["Nord"] - pa["Nord"]) ** 2) ** 0.5 / 1000',
  '',
  'print("Same pair, measured in metres:", round(metres_km(*pair), 1), "km")',
  'true_pair = max(combinations(gym, 2), key=lambda p: metres_km(*p))',
  'print("Farthest apart (metres):", round(metres_km(*true_pair), 1), "km")',
  'print("Same pair as before?", set(map(id, pair)) == set(map(id, true_pair)))'
].join('\n');

const V3 = [
  'from math import cos, radians',
  '',
  'def corrected_km(a, b):',
  '    (lon1, lat1), (lon2, lat2) = a["geometry"]["coordinates"], b["geometry"]["coordinates"]',
  '    squeeze = cos(radians((lat1 + lat2) / 2))',
  '    return (((lon2 - lon1) * squeeze) ** 2 + (lat2 - lat1) ** 2) ** 0.5 * 111.2',
  '',
  'print("Longitude squeezed by cos(latitude):", round(corrected_km(*true_pair), 1), "km")',
  'print("One degree of longitude here:", round(111.2 * cos(radians(49.4)), 1), "km")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'land', label: 'Saarland' },
  slug: 'coding-classes-in-saarland',
  code: 'csa',
  accent: '#476130',
  accentRationale: 'Saarland: a forest-and-loop green #476130, for the wooded hills around the Saarschleife, the river bend that is the Land\'s most famous view; contrast 5.64 on the paper #FBF8F2 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding classes in Saarland',
  title: 'Coding Classes in Saarland: Live Online, in English',
  description: 'Coding classes in Saarland, live online in English: six compulsory Informatik hours, how the central Informatik Abitur works, holidays and a school-map project.',
  ogDescription: 'Live online coding in English for pupils in the Saarland: compulsory Informatik in grades 7 to 10, Informatik and MINT branches, a central Abitur with no computer and only a calculator, the 2026/27 holidays and a Python project on the Land\'s school locations.',
  twitterDescription: 'Coding in English for the Saarland: six Informatik hours, a calculator-only Abitur and a school-map distance project.',
  pageName: 'Coding Classes in Saarland',
  webPageDescription: 'A guide for families in the Saarland to coding alongside school, built from the GI Informatik-Monitor 2026/27, the KMK holiday table and Destatis, with an original project on the GDI-Saarland school-location data.',
  courseDescription: 'Live online coding and Informatik classes in English for pupils in the Saarland aged about 10 to 19, beside the compulsory grade 7 to 10 subject and the Oberstufe, in a class of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Saarland',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#six', label: 'Informatik' },
    { href: '#abitur', label: 'Abitur' },
    { href: '#project', label: 'Map' },
    { href: '#ferien', label: 'Holidays' }
  ],
  eyebrow: 'Saarland &middot; Coding and Informatik &middot; Ages 10 to 19',
  h1: 'Coding classes in Saarland',
  lede: 'Germany\'s smallest Flächenland is ahead on Informatik. At Gemeinschaftsschulen and the nine-year Gymnasium, every pupil has it as a compulsory subject from grade 7 to grade 10, six weekly hours in total, which only three Länder reach. Some Gymnasien go further with an Informatik or MINT branch. This page explains those routes, the Oberstufe and its strict Abitur rules, the holidays, and a project that measures distances on the Land\'s own school map.',
  secondaryCta: { href: '#project', label: 'Measure the school map' },
  wa: 'Hello Modern Age Coders, we live in the Saarland and would like coding classes in English for our child. Could we book a free first class?',
  heroNote: 'Teaching online since 2020 &middot; 10,000+ students worldwide &middot; live, in English, one regular mentor',
  spec: [
    ['Ages', 'About 10 to 19'],
    ['Core course', 'Informatik Companion, Klasse 5 to 10'],
    ['Class size', '15 to 20, or private'],
    ['Times', 'Early afternoon, evening, Sunday morning'],
    ['Mentors', 'Based in India, teaching in English'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'For pupils in the Saarland aged roughly 10 to 19, Modern Age Coders runs coding classes live online and in English: either a group of fifteen to twenty or private lessons, and always one mentor who follows how fast the learner works and how they speak. Our Informatik Companion course sits beside the compulsory grade 7 to 10 subject and lets younger pupils begin sooner.',

  picks: {
    eyebrow: 'Starting points in the Saarland',
    h2: 'Three courses for pupils in the Saarland',
    lede: 'One course beside the compulsory subject in grades 7 to 10, one for the Oberstufe, and one for informatics contests.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'CSA / 01', title: 'Companion to grades 7 to 10', note: 'From age 10. Practice and depth for the two-hour and one-hour Informatik years, and a head start for pupils in grades 5 and 6.' },
      { course: 'informatik-abitur-course-java-python', code: 'CSA / 02', title: 'Oberstufe Informatik', note: 'For the Grundkurs or the Leistungskurs: algorithms, data structures and modelling, practised without a computer, as the Abitur demands.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'CSA / 03', title: 'Informatics competitions', note: 'From 9 to 19. Our own logic puzzles, then algorithm problems at Bundeswettbewerb level.' }
    ]
  },

  sections: [
    {
      id: 'six',
      eyebrow: 'Informatik in the Saarland',
      h2: 'How much Informatik do Saarland schools teach?',
      lede: 'Six compulsory weekly hours across grades 7 to 10, and more on special branches. We take these details from the GI\'s Informatik-Monitor (2026/27 edition), a survey built from each Land\'s regulations; Modern Age Coders has no tie to the GI or to the Saarland ministry.',
      body: [
        { kind: 'two',
          leftH3: 'The compulsory subject',
          left: [
            'After four years of Grundschule, Saarland pupils go to a Gemeinschaftsschule or a Gymnasium. At both, on the nine-year route, Informatik is compulsory: two hours a week in grades 7 and 8, and one hour a week in grades 9 and 10.',
            'The GI counts the Saarland among three Länder, with Mecklenburg-Vorpommern and Thüringen, that already meet the recommendation of six compulsory Informatik hours.'
          ],
          rightH3: 'Branches with more',
          right: [
            'Some Gymnasien run an Informatik branch, a pilot, with four hours a week of Informatik in each of grades 8, 9 and 10. A MINT branch, also a pilot, adds two hours in grade 10.',
            'On the eight-year Gymnasium, which is being phased out, grade 10 can offer a two-hour Informatik elective.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Weekly Informatik hours in the Saarland Sekundarstufe I', head: ['Route', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'], rows: [
          ['Gemeinschaftsschule and nine-year Gymnasium', '2', '2', '1', '1'],
          ['Gymnasium, Informatik branch (pilot)', 'Not stated', '4', '4', '4'],
          ['Gymnasium, MINT branch (pilot)', 'Not stated', 'Not stated', 'Not stated', '2']
        ] },
        { kind: 'source', html: 'Informatik-Monitor 2026/27 of the Gesellschaft für Informatik, Saarland entry plus the all-Länder comparison, consulted on 2 November 2026. "Not stated" means the monitor gives no separate figure for that branch and grade. A cross-subject Basiscurriculum "Medienbildung und informatische Bildung" covers grades 1 to 10.' },
        { kind: 'p', mt: true, html: 'Six hours across four years is a solid base, and it brings a different question for parents: one or two lessons a week are enough to meet the ideas, not always enough to become fluent. A pupil who wants to write real programs, or who aims at the Leistungskurs, gains most from regular practice between school lessons. That is the role of our Companion course.' },
        { kind: 'p', html: 'The monitor\'s Saarland page also reports that the Gymnasium currently runs eight years, with grade 10 as the Einführungsphase, and is switching back to nine years by 2026/27; at the Gemeinschaftsschule the Oberstufe already runs from grade 11 to 13. It expects the Oberstufe structure and the Informatik curricula for grades 11 to 13 to be revised within about two years.' }
      ]
    },
    {
      id: 'abitur',
      tint: 'tint',
      eyebrow: 'Oberstufe and Abitur',
      h2: 'How is the Informatik Abitur set in the Saarland?',
      lede: 'Centrally, by commission, and strictly: no computer work and nothing on the desk but a calculator.',
      body: [
        { kind: 'two',
          leftH3: 'Courses',
          left: [
            'In the Einführungsphase, Informatik can be a two-hour elective at the Gemeinschaftsschule and the nine-year Gymnasium, except on the music branch. In the Qualifikationsphase it can be a two-hour Grundkurs or a five-hour Leistungskurs.',
            'The Leistungskurs has a condition: it can only be taken if the pupil took Informatik in the Einführungsphase. A pupil who drops it in that year closes the door.'
          ],
          rightH3: 'The exam',
          right: [
            'A Leistungskurs in Informatik is examined in writing; a Grundkurs can be written or oral. The written tasks are set centrally: one Abitur selection commission for each level chooses and revises them, and the school authority approves them.',
            'Practical parts, such as programming tasks or applications on a computer, are not allowed. The only aid is a calculator.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik in the Saarland Oberstufe at a glance', head: ['Point', 'Rule'], rows: [
          ['Einführungsphase', 'Two-hour Wahlpflicht elective (not on the music branch)'],
          ['Grundkurs', 'Two hours; written or oral exam possible'],
          ['Leistungskurs', 'Five hours; only if taken in the Einführungsphase; written exam'],
          ['Task setting', 'Central, chosen and revised by a commission for each level'],
          ['Computer in the exam', 'Not allowed'],
          ['Aids', 'Calculator only']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Saarland page, read 2 November 2026. Its figures: about 15 percent of Sekundarstufe II pupils took Informatik in 2024/25, about 6 percent of Abitur candidates had it as a written exam subject in 2025/26, and the Land had 211 qualified Informatik teachers, about 4 percent of all teachers. The 2027 Abitur dates are published by the Ministerium für Bildung und Kultur; we could not read them because its website refused our request, so none are given here.' },
        { kind: 'p', mt: true, html: 'Programming tasks are banned, but programs are not: candidates still read, write and reason about code, entirely on paper. We prepare exactly that, beside the school course: tracing an algorithm by hand, writing a method that is right the first time, explaining a data structure in words. The commission sets the paper and the school awards the Abitur; we give no German grades or qualifications.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Why do our classes run in English?',
      lede: 'Our mentors teach live, in English, in every class. We do not offer lessons in German, and it is better that families know this first.',
      body: [
        { kind: 'three', cells: [
          { h3: 'If you moved here', p: 'Some families have come to the Saarland from abroad; for their children, English may be the language of thinking, and Informatik in English simply fits.' },
          { h3: 'If school is in German', p: 'A coding lesson in English is also English practice. Mentors speak clearly, show key words on screen, and recognise school terms such as Gemeinschaftsschule or Leistungskurs.' },
          { h3: 'If you wonder about the code', p: 'Words like while, return or class are English in every programming language, so an English lesson costs no extra translation.' }
        ] },
        { kind: 'p', mt: true, html: 'Our mentors sit in India and teach over live video, to one standard wherever the pupil lives: the same person each week, the pupil typing every line, and answers the pupil can defend, never copied from a solution sheet or produced by an AI tool.' }
      ]
    },
    {
      id: 'project',
      eyebrow: 'A Land-wide project',
      h2: 'How far apart are the Saarland\'s Gymnasien? A map project',
      lede: 'The Land\'s geodata infrastructure, GDI-SL, publishes the locations of the Saarland\'s schools as open data. Our pupils use it to answer a simple question and to learn why a map in degrees is not a map in kilometres.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The feature type Schulen_SL in the GDI-SL web service Staatliche_Dienste lists 374 schools and colleges, recorded on 20 May 2025, under the licence Namensnennung 4.0 International (CC BY 4.0), credited as © GDI-SL. We saved it on 3 November 2026 as schulen_sl.geojson. We never print a school\'s name or contact details, only counts and distances.',
            'Each school has a point in longitude and latitude, in degrees, and also two columns, Ost and Nord, giving the same position in metres on a projected grid.'
          ],
          rightH3: 'The question',
          right: [
            'Which two Gymnasien are farthest apart, and how far? A quick idea: one degree is about 111 kilometres, so take the straight-line distance in degrees and multiply by 111.',
            'That works for latitude. It does not work for longitude, because lines of longitude come together towards the poles. At the Saarland\'s latitude a degree east to west is much shorter than a degree north to south.'
          ] },
        { kind: 'code', label: 'Version 1: degrees times 111', lang: 'Python', code: V1, note: 'It prints <code>Schools in the file: 374 | Gymnasien: 36</code> and <code>Farthest apart (degrees x 111): 80.3 km</code>.' },
        { kind: 'p', mt: true, html: 'Eighty kilometres across the Saarland sounds odd for a Land that is not much wider than that. Version 2 measures the same pair again, this time with the Ost and Nord columns, which are already in metres, so Pythagoras gives a true distance.' },
        { kind: 'code', label: 'Version 2 (continues Version 1): measure in metres', lang: 'Python', code: V2, note: 'It prints <code>Same pair, measured in metres: 53.7 km</code>, <code>Farthest apart (metres): 53.7 km</code> and <code>Same pair as before? True</code>.' },
        { kind: 'p', mt: true, html: 'The pair is right, a Gymnasium in Merzig and one in Homburg, but Version 1 overstated the distance by about half. The error is not random: almost all of it comes from the east to west part, which Version 1 treated as if a degree of longitude were 111 kilometres long. Version 3 corrects only that, by squeezing the longitude difference by the cosine of the latitude.' },
        { kind: 'code', label: 'Version 3 (continues Version 2): correct the longitude', lang: 'Python', code: V3, note: 'It prints <code>Longitude squeezed by cos(latitude): 53.6 km</code> and <code>One degree of longitude here: 72.4 km</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'The farthest pair of Gymnasien in the GDI-SL school file, three ways (our calculation)', head: ['Method', 'Distance, km'], rows: [
          ['Degrees as if square, times 111', '80.3'],
          ['Ost and Nord in metres', '53.7'],
          ['Degrees, longitude corrected by cos(latitude)', '53.6']
        ] },
        { kind: 'source', html: 'Data: GDI-Saarland, Staatliche_Dienste, feature type Schulen_SL, CC BY 4.0, © GDI-SL 2025, recorded 20 May 2025, downloaded 3 November 2026. Distances are straight lines between the published points, computed by us; they are not travel distances.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Grades 5 and 6, with a globe or an orange.</strong> Draw lines from the top to the bottom. Measure the gap between two lines at the middle and near the top. What happens to the gap?',
          '<strong>Python in grades 7 and 8.</strong> Try both versions. By how many percent was Version 1 too long? Explain why in one sentence.',
          '<strong>Grades 9 and 10.</strong> Find, for one Gemeinschaftsschule of your choice, the nearest Gymnasium using Version 2\'s distance. Then try Version 1\'s. Does the answer change?',
          '<strong>Oberstufe.</strong> Version 3 is still a flat approximation. Write the haversine formula for distance on a sphere and compare all three methods for the farthest pair.'
        ] }
      ]
    },
    {
      id: 'ferien',
      tint: 'tint',
      eyebrow: 'School year 2026/27',
      h2: 'When are the school holidays in the Saarland in 2026/27?',
      lede: 'The Saarland\'s dates, first and last holiday day. Classes can continue in the holidays or pause, as the family chooses.',
      body: [
        { kind: 'table', numCols: [], caption: 'School holidays in the Saarland, 2026/27', head: ['Holiday', 'From', 'Until'], rows: [
          ['Autumn', 'Monday 5 October 2026', 'Friday 16 October 2026'],
          ['Christmas', 'Monday 21 December 2026', 'Thursday 31 December 2026'],
          ['Winter', 'Monday 8 February 2027', 'Friday 12 February 2027'],
          ['Easter', 'Tuesday 30 March 2027', 'Friday 9 April 2027'],
          ['Summer', 'Monday 28 June 2027', 'Friday 6 August 2027']
        ] },
        { kind: 'source', html: 'From the KMK\'s holiday list for 2026/2027, dated 9 October 2025; its Saarland line also mentions two movable holiday days. The Christmas break ends on 31 December 2026, earlier than in most Länder.' },
        { kind: 'two', mt: true,
          leftH3: 'A small Land',
          left: [
            'Destatis counts 1,012,141 people in the Saarland on 31 December 2024; Saarbrücken, the capital and the only city above 100,000, has 182,971.',
            'The school file used in the project reflects that size: its farthest pair of Gymnasien are less than 54 kilometres apart.'
          ],
          rightH3: 'Planning the year',
          right: [
            'The Saarland has a winter week, 8 to 12 February 2027, and its Easter holidays start on 30 March 2027, eight days later than in neighbouring Rheinland-Pfalz.',
            'For Oberstufe pupils we plan revision around the school\'s own exam calendar, which the school confirms.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are classes in the Saarland?',
      lede: 'Saarland afternoons and evenings are Indian evenings; a Sunday morning is the mentor\'s early afternoon. The rows show the difference; the actual slot is yours to choose.',
      body: [
        { kind: 'table', numCols: [], caption: 'Saarland time and India time', head: ['Saarbrücken', 'Mentor, until 28 March 2027', 'Mentor, after 28 March 2027'], rows: [
          ['13:15', '17:45', '16:45'],
          ['17:40', '22:10', '21:10'],
          ['Sunday 09:45', '14:15', '13:15']
        ] },
        { kind: 'source', html: 'Under the Einheitenzeitgesetz Germany uses MEZ (UTC+1) in winter and MESZ (UTC+2) in summer; clocks went back on 25 October 2026 and spring forward on 28 March 2027. India\'s clock never changes from UTC+5:30, so the mentor is four and a half hours later now and three and a half from the end of March.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From grade 5 to the calculator-only Abitur',
    lede: 'Our mentors use these five levels, written by us, to decide where a Saarland pupil joins and what the next report should say.',
    table: { caption: 'Levels for Saarland pupils (our own scale)', head: ['Level', 'Around grade', 'Can already'], rows: [
      ['1. Precise steps', '5 to 6', 'Write instructions a stranger can follow'],
      ['2. First code', '6 to 7', 'Loops, conditions and functions in Python'],
      ['3. Coordinates and units', '7 to 9', 'Work with map coordinates and convert degrees to metres correctly'],
      ['4. Data', '9 to 10', 'Read a public data file and answer a question from it'],
      ['5. Paper programming', '10 to 13', 'Write and trace algorithms and data structures by hand']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 3 is the school-map project. A pupil who checks units catches errors that look perfectly reasonable.',
      'Reports tell you what has changed and what is next.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Degrees are angles, not distances.',
      'If a number feels too big for the place, check the units before the arithmetic.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Saarland families',
    lede: 'Each is taught live and in English, for a group or a single pupil, and the mentor does not change halfway.',
    bands: [
      { num: 'I', h3: 'Ages 7 to 12', sub: 'Before grade 7', courses: [
        { code: 'CSA / A / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch games first, then apps.' },
        { code: 'CSA / A / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Angles, coordinates and patterns in Python.' },
        { code: 'CSA / A / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Coordinates and code in a world they know.' }
      ] },
      { num: 'II', h3: 'Ages 12 to 16', sub: 'Grades 7 to 10', courses: [
        { code: 'CSA / B / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'All of core Python, project by project.' },
        { code: 'CSA / B / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Real data, charts and careful checks.' },
        { code: 'CSA / B / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for Teens', blurb: 'Fast, strict code and the containers contest coders rely on.' }
      ] },
      { num: 'III', h3: 'Ages 15 to 19', sub: 'Oberstufe', courses: [
        { code: 'CSA / C / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Clean object-oriented programs.' },
        { code: 'CSA / C / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for Teens', blurb: 'Data structures traced and argued on paper.' },
        { code: 'CSA / C / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik in English', blurb: 'The three areas of the maths Abitur, taught in English.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live lessons fit a Saarland school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Early afternoon', l: 'When the school day ends early.' },
      { time: 'Sunday morning', l: 'A quiet slot to start the week.' },
      { time: '1-on-1', l: 'Agreed with the mentor, flexible around exams.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same mentor, who knows where the pupil is.' },
      { h3: 'Plain English', p: 'At the pupil\'s pace, with school terms understood.' },
      { h3: 'Pupil codes', p: 'The pupil writes; the mentor asks why.' },
      { h3: 'Saarland-aware', p: 'Planned around the Land\'s holidays and school calendar.' },
      { h3: 'Progress notes', p: 'Short updates for parents.' },
      { h3: 'Class or private', p: 'A class of 15 to 20, or one to one.' }
    ]
  },

  projectsH2: 'Projects from older students',
  projectsLede: 'A selection of student work appears below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Google reviews from parents and students, word for word.',

  fees: {
    h2: 'Fees for families in the Saarland',
    lede: 'Billing is per month and buys eight live lessons; there is no minimum period. We display euro prices worked out with the European Central Bank\'s reference rate, while the card is charged in US dollars, so the bank converts the sum and the statement can be a little off.',
    free: ['A free first class', 'A problem to think through and a first program', 'No card needed'],
    group: ['A class of 15 to 20 at a similar stage', 'One regular mentor', 'Two classes a week', 'Monthly, stop any month'],
    one: ['One pupil, one mentor', 'Their own speed and topics', 'Times planned around school']
  },

  faq: {
    eyebrow: 'Saarland families ask',
    h2: 'Coding classes in Saarland: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No, never: every live lesson is in English. The mentor keeps sentences short, waits for answers, gets to know how the pupil speaks, and copes happily with a German word such as Gemeinschaftsschule dropped into an English question.' },
      { q: 'Is Informatik compulsory in the Saarland?', a: 'Yes, from grade 7 to 10 at Gemeinschaftsschulen and the nine-year Gymnasium: two hours a week in grades 7 and 8 and one hour in grades 9 and 10, according to the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27.' },
      { q: 'What is the Informatik branch at a Saarland Gymnasium?', a: 'A pilot route, according to the Informatik-Monitor, with four hours of Informatik a week in each of grades 8, 9 and 10. A MINT branch, also a pilot, has two hours in grade 10.' },
      { q: 'Can my child take an Informatik Leistungskurs?', a: 'Only if they took Informatik in the Einführungsphase, according to the Informatik-Monitor. The Leistungskurs runs for five hours a week and ends in a written exam.' },
      { q: 'Is a computer used in the Saarland Informatik Abitur?', a: 'No. The Informatik-Monitor states that practical parts such as programming tasks on a computer are not allowed and that a calculator is the only permitted aid. The tasks are set centrally by a commission for each level.' },
      { q: 'When is the Abitur in the Saarland in 2027?', a: 'The Ministerium für Bildung und Kultur publishes the dates, but its website refused our request when we checked on 3 November 2026, so we do not give them here. Your school confirms the exact days.' },
      { q: 'What time are classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A lesson at 17:40 in Saarbrücken is 22:10 for a mentor in India in winter.' },
      { q: 'Will lessons with you show up on a school report?', a: 'No. Reports, grades and the Abitur belong to the school and the Land. Our part is the understanding and practice behind them.' },
      { q: 'Who will teach my child?', a: 'A mentor working from India, on live video, who stays the same from the first month on.' },
      { q: 'How are fees paid?', a: 'Monthly, by card. Euro prices are calculated at the European Central Bank\'s reference rate; the bank turns the US dollar charge into euro on your statement. Nothing is due for the trial class.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in the Saarland.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'All of our Germany pages.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik in the Länder', p: 'The Saarland compared with the rest.' },
      { href: '/abitur-computer-science-in-english', label: 'Informatik Abitur in English', p: 'The Oberstufe subject explained.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The maths exam in detail.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'Puzzles for the free school contest.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live lessons in detail.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'A trial lesson costs nothing. Your child tackles a short puzzle, then writes a few lines of code; meanwhile the mentor judges level and English, and afterwards proposes where to start.',
    readFirst: 'Before booking you can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or see <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Live online, English only, mentors in India. WhatsApp reaches us fastest, in English.',
    formNote: 'Free, with no card and no commitment.'
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
    bottomRight: 'Degrees are angles, not kilometres'
  },

  personalityCss: `
.ag-root.ag-csa .ag-hero h1 { letter-spacing: -0.009em; }
.ag-root.ag-csa .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-csa .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-csa .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-csa .ag-code-head b { letter-spacing: 0.012em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Saarland and national pages); KMK holidays 2026/27 and Schema; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz. Data: GDI-Saarland, Staatliche_Dienste, Schulen_SL, CC BY 4.0. The ministry\'s Abitur 2027 dates could not be read (HTTP 403).',
    localProject: 'GDI-SL school locations: Version 1 multiplies raw degree differences by 111 and gets 80.3 km for the farthest pair of the 36 Gymnasien; Version 2 uses the Ost and Nord metres and gets 53.7 km for the same pair (Merzig to Homburg); Version 3 corrects longitude by cos(latitude), 53.6 km, one degree of longitude being 72.4 km here. Lesson family: degrees are not kilometres.',
    requiredMentions: ['schulen_sl.geojson', 'Schools in the file: 374 | Gymnasien: 36', 'Farthest apart (degrees x 111): 80.3 km', 'Same pair, measured in metres: 53.7 km', 'One degree of longitude here: 72.4 km', 'four hours of Informatik a week in each of grades 8, 9 and 10', 'Monday 21 December 2026', 'Degrees are angles, not kilometres'],
    sources: [
      { claim: 'Saarland Informatik hours, branches, Oberstufe, central Abitur, no computer, calculator only, G8 to G9, figures.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/saarland' },
      { claim: 'Three Länder meet six compulsory hours.', url: 'https://informatik-monitor.de/' },
      { claim: 'Holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Populations 31.12.2024.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/02-bundeslaender.xlsx?__blob=publicationFile' },
      { claim: 'School locations and CC BY 4.0 licence.', url: 'https://geoportal.saarland.de/mapbender/php/mod_showMetadata.php?resource=featuretype&id=1125' }
    ],
    rejectedClaims: [
      'Abitur 2027 dates for the Saarland: saarland.de returned HTTP 403, and third-party lists are not used.',
      'Saarbrücken footfall data: the portal names its licence only as "datenliz-de", so commercial reuse could not be confirmed.',
      'Naming any school from the GDI-SL file, or printing contact details: not done.',
      'Gender shares from the monitor: left out under the no gender statistics rule.',
      'Any affiliation with the ministry, GDI-SL, the GI, the KMK or a school: none.'
    ]
  }
};
