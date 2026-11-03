'use strict';
// The German school system explained in English, with maths and computing (ag- pillar, Germany cluster row DE003).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only, with
// mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle: the definitive English explainer for families new to Germany: the ladder from Grundschule to Abitur, what each
// Land calls its school types, G8 or G9 by Land, the 1 to 6 marks and the 0 to 15 points, where maths is tested (VERA,
// MSA, Abitur) and where computing sits; plus an original program that lists every route to the Abitur.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/german-school-system-maths-and-computing-
// explained/, facts quoted in de/facts-school/FACTS.md, all fetched 2 November 2026):
//  - KMK Primarbereich: Grundschule "von der ersten bis zur vierten, in Berlin und Brandenburg bis zur sechsten
//    Jahrgangsstufe" (fact 1); standards for German and maths at the end of Klasse 4 (2).
//  - KMK Sekundarstufe I: three Bildungsgaenge (5), organised in different Schularten per Land (6), Hauptschulabschluss
//    and Mittlerer Schulabschluss, a higher level "berechtigt zum Besuch der gymnasialen Oberstufe" (7); "in den
//    Jahrgangsstufen 5 und 6 ein Wechsel in einen anderen Bildungsgang möglich" (8); "an jeder der genannten Schularten
//    grundsätzlich jeder Abschluss und jede Berechtigung der Sekundarstufe I erreicht werden"; general certificates can be
//    gained later "an beruflichen Schulen".
//  - KMK Sekundarstufe II: Einführungsphase one year, Qualifikationsphase two (9); entry needs the MSA with entitlement (10);
//    four or five exam subjects, two at raised level, two of German, a foreign language and maths (11); average grade 4
//    (12); written papers central "in nahezu allen Ländern" (13); 12 or 13 years, at least 265 Jahreswochenstunden (14).
//  - KMK Schema Bildungsgaenge und Schularten, "Stand: 02/2021": names of multi-track and two-track schools by Land (20,
//    21); Oberstufe "am Gymnasium (Jahrgangsstufen 10-12/11-13)" and "an Schularten mit drei Bildungsgängen (i.d.R.
//    Jahrgangsstufen 11-13)"; "Ausnahme ist das Gymnasium" (19).
//  - KMK Eurydice dossier 2024/2025 (Redaktionsschluss Oktober 2025): Berufliches Gymnasium among Oberstufe schools; six
//    Notenstufen "sehr gut = 1 ... ungenügend = 6"; Qualifikationsphase points "Note 1 entspricht 15/14/13 Punkten" to "Note
//    6 entspricht 0 Punkten"; two reports a year; transition "Votum der abgebenden Schule ... mit eingehender Beratung der
//    Eltern", decision "entweder von den Eltern oder der Schule bzw. der Schulaufsicht"; "kein Rechtsanspruch auf die
//    Aufnahme in eine bestimmte Schule"; Schulpflicht "neun Vollzeitschuljahre (in Berlin, Brandenburg, Bremen und Thüringen
//    zehn ..., in Nordrhein-Westfalen ... neun oder zehn"; school year 1 August to 31 July (287); school-start cut-off
//    between 30 June and 30 September (289); no leaving exam after Grundschule (28); Erster Schulabschluss end of Klasse 9
//    (25); central Sek I exams in most Länder (24); Abitur after 12 (G8) or 13 (G9) (26).
//  - G8/G9: GI Informatik-Monitor 2026/27 Oberstufe descriptions (facts 49 to 62) and Bavarian ministry (63). Hessen and
//    Thueringen: no source, printed as "not in our sources".
//  - IQB VERA-3 2027 window 12.04. to 26.05.2027 (111); VERA-8 2027 08.02. to 25.03.2027 (115); results "nicht benotet"
//    (116). KMK maths standards: primary 2004/2022 (119), ESA/MSA 2022 (122), Abitur 18.10.2012 (125). NRW ZP10 in German,
//    maths, English (64). GI Informatik-Monitor: six Länder without compulsory Informatik (92), about 15 percent (97).
// Our own: the route-finder in Python (python3 -I, 3 November 2026): 14 routes, 3 never pass any Gymnasium; without the
// loop guard Python stops with RecursionError. The map is our simplification of the KMK schema.
// Lesson family: model the system as a graph, list every path, and guard against going round in circles.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const ROUTES = [
  'routes = {',
  '    "Grundschule": ["Gymnasium", "Realschule", "Hauptschule", "Multi-track school"],',
  '    "Gymnasium": ["Oberstufe, Gymnasium", "Realschule"],',
  '    "Realschule": ["MSA", "Gymnasium"],',
  '    "Hauptschule": ["MSA"],',
  '    "Multi-track school": ["MSA"],',
  '    "MSA": ["Oberstufe, Gymnasium", "Oberstufe, multi-track school",',
  '            "Berufliches Gymnasium"],',
  '    "Oberstufe, Gymnasium": ["Abitur"],',
  '    "Oberstufe, multi-track school": ["Abitur"],',
  '    "Berufliches Gymnasium": ["Abitur"],',
  '}',
  '',
  'def all_paths(here, goal, path=()):',
  '    if here in path:          # been here already: a loop, not a route',
  '        return []',
  '    path = path + (here,)',
  '    if here == goal:',
  '        return [path]',
  '    found = []',
  '    for step in routes.get(here, []):',
  '        found += all_paths(step, goal, path)',
  '    return found',
  '',
  'paths = all_paths("Grundschule", "Abitur")',
  'print("Routes to the Abitur:", len(paths))',
  'for p in paths:',
  '    print(" > ".join(p[1:-1]))',
  'print("Routes that never pass a Gymnasium of any kind:",',
  '      sum(1 for p in paths if not any("Gymnasium" in s for s in p)))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'guide', label: 'German school system explained' },
  slug: 'german-school-system-maths-and-computing-explained',
  code: 'ssm',
  accent: '#7B4409',
  accentRationale: 'German school system: a burnt umber #7B4409, the colour of an old school register binding, far from the slate of the Abitur page and the petrol of the Informatik page; dark enough for 4.5:1 on the paper #FBF8F2 and its tints',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'German school system explained',
  title: 'German School System Explained in English: Maths and Computing',
  description: 'The German school system in English: Grundschule to Abitur, school names by Land, G8 or G9, marks and points, where maths and Informatik are tested.',
  ogDescription: 'A plain-English map of German school for families new to Germany: every stage, what each Land calls its schools, G8 and G9, the 1 to 6 marks and 0 to 15 points, and where maths and computing fit.',
  twitterDescription: 'German school explained in English: stages, school names by Land, G8 or G9, marks, maths and Informatik.',
  pageName: 'The German School System Explained',
  webPageDescription: 'An English guide to the German school system for families who have moved to Germany, built from KMK, IQB and Gesellschaft für Informatik sources, with tables of school-type names and G8 or G9 by Land, the marking scales, the maths tests and an original program that lists every route to the Abitur.',
  courseDescription: 'Live online maths and computing classes in English for children and teenagers at German schools, from Klasse 5 maths and first programs to Oberstufe, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'German school system explained',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#ladder', label: 'Stages' },
    { href: '#names', label: 'Names' },
    { href: '#g8g9', label: 'G8 or G9' },
    { href: '#marks', label: 'Marks' },
    { href: '#routes', label: 'Routes' }
  ],
  eyebrow: 'Germany &middot; Schulsystem &middot; For families new to Germany',
  h1: 'The German school system, explained in English',
  lede: 'Moving to Germany with children means learning a new vocabulary before the first parents\' evening: Grundschule, Gymnasium, Oberstufe, MSA, G8, Notenpunkte. This guide walks through the whole ladder in plain English, shows what each of the sixteen Länder calls its schools, explains the two marking scales and the national maths tests, and says honestly where computing does and does not appear on the timetable.',
  secondaryCta: { href: '#ladder', label: 'See the stages' },
  wa: 'Hello Modern Age Coders, we have moved to Germany and our child needs maths or coding support in English alongside a German school. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; maths and coding in English for pupils at German schools',
  spec: [
    ['For', 'Families new to German schools'],
    ['Covers', 'Klasse 1 to the Abitur'],
    ['Subjects', 'Maths and computing'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Times', 'German afternoons and weekends'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'German school runs from Grundschule (Klasse 1 to 4, or 1 to 6 in Berlin and Brandenburg) into one of several secondary schools, then to the Mittlerer Schulabschluss after Klasse 10 or on through the Oberstufe to the Abitur after 12 or 13 years. Each Land names its schools differently. Modern Age Coders teaches maths and coding alongside it, live online in English, in a group or one to one.',

  picks: {
    eyebrow: 'Courses for German school years',
    h2: 'Three courses that follow a German school career',
    lede: 'One for the middle years, one for the new Informatik lessons, and one for the Abitur at the top.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'SSM / 01', title: 'Middle school maths', note: 'Klasse 5 to 9: fractions, algebra, geometry and data, the ground the MSA maths papers stand on.' },
      { course: 'informatik-companion-course-klasse-5-10', code: 'SSM / 02', title: 'Informatik Companion, Klasse 5 to 10', note: 'Scratch to Python, data and algorithms, for pupils whose Land now teaches Informatik or does not yet.' },
      { course: 'abitur-mathematics-course-in-english', code: 'SSM / 03', title: 'Abitur Mathematik in English', note: 'Oberstufe maths for Leistungskurs and Grundkurs pupils, taught in English with every German term beside it.' }
    ]
  },

  sections: [
    {
      id: 'ladder',
      eyebrow: 'The stages',
      h2: 'How does the German school system work, from Grundschule to Abitur?',
      lede: 'Education in Germany is run by the sixteen Länder, not by Berlin. Their education ministers agree a common frame in the Kultusministerkonferenz (KMK), and the frame below is the KMK\'s own.',
      body: [
        { kind: 'table', numCols: [], caption: 'The German school ladder and the certificate at the end of each rung', head: ['Rung', 'Klassen', 'Ends with', 'Set by'], rows: [
          ['Grundschule (primary)', '1 to 4; 1 to 6 in Berlin and Brandenburg', 'No leaving exam; the school gives a recommendation', 'Each Land'],
          ['Sekundarstufe I (lower secondary)', '5 to 9 or 10', 'Erster Schulabschluss after Klasse 9, or Mittlerer Schulabschluss (MSA) after Klasse 10', 'Central Land exams in most Länder'],
          ['Einführungsphase (first Oberstufe year)', '10 or 11', 'Entry to the Qualifikationsphase', 'The school'],
          ['Qualifikationsphase (last two years)', '11 to 12, or 12 to 13', 'Marks that count towards the Abitur', 'The school, on the Land\'s rules'],
          ['Abitur (Allgemeine Hochschulreife)', 'After Klasse 12 (G8) or 13 (G9)', 'Four or five exam subjects', 'Written papers set centrally in almost all Länder']
        ] },
        { kind: 'source', html: 'Sources: KMK pages on the Primarbereich, Sekundarstufe I and Sekundarstufe II; KMK Eurydice dossier Das Bildungswesen in der Bundesrepublik Deutschland 2024/2025 (editorial close October 2025). All read on 2 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Starting school and how long it lasts',
          left: [
            'The school year in Germany legally begins on 1 August and ends on 31 July, says the KMK dossier, although the first day of lessons depends on the Land\'s summer holidays. Compulsory schooling normally begins in the year a child turns six; each Land sets a cut-off birthday somewhere between 30 June and 30 September.',
            'Full-time schooling is compulsory for nine years in most Länder. The dossier names Berlin, Brandenburg, Bremen and Thüringen as Länder with ten years, and Nordrhein-Westfalen with nine or ten depending on the course a pupil follows.'
          ],
          rightH3: 'The big decision after Grundschule',
          right: [
            'There is no exam at the end of Grundschule. Instead, the KMK dossier describes a "Votum der abgebenden Schule", the primary school\'s recommendation, which always comes with a counselling talk for parents. Depending on the Land, the final choice of secondary school rests either with the parents or with the school and the school authority.',
            'The dossier is also clear that families have no legal right to a place at one particular school. If you are arriving mid-year, ask the local Schulamt early which schools have room.'
          ] },
        { kind: 'p', mt: true, html: 'Two KMK rules soften the early choice. Pupils can still switch to another track in Klasse 5 and 6, and the KMK says that, in principle, every Sekundarstufe I certificate can be reached at every school type. General certificates can also be gained later at a vocational school. A choice made at age ten is important, but it is not a life sentence.' }
      ]
    },
    {
      id: 'names',
      eyebrow: 'School names',
      h2: 'Why does every Land call its schools something different?',
      lede: 'Lower secondary school has three tracks everywhere: Hauptschule level, Realschule level and Gymnasium level. The Länder combine them into school types with their own names, which is why a school that sounds unfamiliar in Hamburg may be ordinary in Berlin.',
      body: [
        { kind: 'table', numCols: [], caption: 'Names of schools that combine tracks, by Land (KMK overview, February 2021)', head: ['Land', 'Schools with all three tracks', 'Schools with two tracks'], rows: [
          ['Baden-Württemberg', 'Gemeinschaftsschule', ''],
          ['Berlin', 'Integrierte Sekundarschule', ''],
          ['Brandenburg', '', 'Oberschule'],
          ['Bremen', 'Oberschule', 'Sekundarschule'],
          ['Hamburg', 'Stadtteilschule', ''],
          ['Hessen', '', 'Verbundene Haupt- und Realschule, Mittelstufenschule'],
          ['Mecklenburg-Vorpommern', '', 'Regionale Schule'],
          ['Niedersachsen', 'Oberschule', ''],
          ['Nordrhein-Westfalen', 'Sekundarschule', ''],
          ['Rheinland-Pfalz', '', 'Realschule plus'],
          ['Saarland', 'Gemeinschaftsschule', ''],
          ['Sachsen', '', 'Oberschule'],
          ['Sachsen-Anhalt', 'Gemeinschaftsschule', 'Sekundarschule'],
          ['Schleswig-Holstein', 'Gemeinschaftsschule', ''],
          ['Thüringen', 'Gemeinschaftsschule', 'Regelschule']
        ] },
        { kind: 'source', html: 'Source: KMK, Übersicht über die Bildungsgänge und Schularten im Bereich der allgemeinen Bildung (Stand 02/2021), read 2 November 2026. The same overview lists Integrierte and Kooperative Gesamtschulen as further schools with three tracks, and Bavaria\'s Mittelschule as its name for the Hauptschule. An empty cell means the overview names no school of that kind for the Land; it does not mean none exists today.' },
        { kind: 'two', mt: true,
          leftH3: 'The one name that never changes',
          left: [
            'The KMK overview makes one exception to the patchwork: the Gymnasium exists in every Land. It is the school type that leads most directly to the Abitur, and the KMK overview shows it running from the end of Grundschule into its own Oberstufe.',
            'The two Oberschulen in the table are a good warning about names. In Niedersachsen and Bremen an Oberschule combines all three tracks; in Sachsen and Brandenburg the same word means a school with two.'
          ],
          rightH3: 'Where the Oberstufe can be',
          right: [
            'The gymnasiale Oberstufe, the upper school that leads to the Abitur, is not only found at a Gymnasium. The KMK overview places it at the Gymnasium (Klassen 10 to 12 or 11 to 13) and at schools with three tracks (as a rule Klassen 11 to 13), and the KMK dossier adds the Berufliches Gymnasium, a vocational upper school.',
            'Entry to any of them needs the Mittlerer Schulabschluss with the entitlement to the Oberstufe, which a pupil earns with results above the plain MSA level.'
          ] }
      ]
    },
    {
      id: 'g8g9',
      eyebrow: 'G8 or G9',
      h2: 'Is my child\'s Gymnasium G8 or G9?',
      lede: 'G8 means the Abitur after eight years of Gymnasium (Klasse 5 to 12), G9 after nine (Klasse 5 to 13). The KMK allows both, as long as pupils reach at least 265 weekly lesson hours, counted year by year, from Klasse 5. Several Länder have switched back to G9 in recent years, so check the route for your child\'s own year group.',
      body: [
        { kind: 'table', numCols: [], caption: 'The Gymnasium route to the Abitur, by Land, as described for 2026/27', head: ['Land', 'Gymnasium route', 'Oberstufe years'], rows: [
          ['Bayern', 'G9; the switch back from G8 completed in 2024/25', 'Klasse 11 to 13'],
          ['Niedersachsen', 'G9', 'Klasse 11 to 13'],
          ['Rheinland-Pfalz', 'G9 as the norm; a G8 route at some Gymnasien', 'Depends on the route'],
          ['Schleswig-Holstein', 'G9 at most Gymnasien; G8 at selected ones', 'Klasse 11 to 13 on G9'],
          ['Saarland', 'Moving from G8 to G9 by 2026/27', 'Changing'],
          ['Baden-Württemberg', 'Oberstufe mostly G8 for current year groups; system changing', 'Klasse 10 to 12 for most today'],
          ['Nordrhein-Westfalen', 'Nine-year Gymnasien in Sekundarstufe I; system still switching', 'Check with the school'],
          ['Berlin', 'G8 at the Gymnasium; G9 at Integrierte Sekundarschulen and Gemeinschaftsschulen', 'Klasse 10 to 12 at the Gymnasium'],
          ['Brandenburg, Bremen, Hamburg, Sachsen', 'G8', 'Klasse 10 to 12'],
          ['Mecklenburg-Vorpommern, Sachsen-Anhalt', 'G8', 'Klasse 10 to 12'],
          ['Hessen, Thüringen', 'Not in our sources', 'Ask the school']
        ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, the Oberstufe description on each Land\'s page; Bavarian State Ministry for Education, Gymnasium page ("Das neu eingeführte neunjährige Gymnasium umfasst im Schuljahr 2025/26 die Jahrgangsstufen 5 bis 13"); KMK Sekundarstufe II page for the 265 hours. Read 2 November 2026. Baden-Württemberg and Nordrhein-Westfalen are mid-change, so the school\'s own information is the one to trust.' },
        { kind: 'p', mt: true, html: 'Why it matters for maths: on a G8 route, the Oberstufe begins a year earlier, in Klasse 10, so the Einführungsphase overlaps with what G9 pupils still treat as lower secondary. A pupil arriving from abroad at age fifteen can land in quite different maths depending on the route. We place new pupils by what they can already do, not by their age, and then follow their school\'s pace.' }
      ]
    },
    {
      id: 'marks',
      eyebrow: 'Marks and points',
      h2: 'How do German school marks work, and why is 1 the top mark?',
      lede: 'German schools use two scales. Up to the Oberstufe, the KMK\'s six-step scale runs the opposite way from many countries: 1 is the top mark and 6 the lowest. In the Qualifikationsphase, a 0 to 15 point scale takes over, and there higher is better.',
      body: [
        { kind: 'table', numCols: [0, 2], caption: 'The six marks and the matching Oberstufe points', head: ['Note', 'German word', 'Punkte in the Qualifikationsphase'], rows: [
          ['1', 'sehr gut', '15, 14 or 13'],
          ['2', 'gut', '12, 11 or 10'],
          ['3', 'befriedigend', '9, 8 or 7'],
          ['4', 'ausreichend', '6, 5 or 4'],
          ['5', 'mangelhaft', '3, 2 or 1'],
          ['6', 'ungenügend', '0']
        ] },
        { kind: 'source', html: 'Source: KMK Eurydice dossier 2024/2025, sections on assessment in Sekundarstufe I and in the allgemeinbildende Sekundarstufe II. The three points within one Note reflect the "Notentendenz", a plus or minus.' },
        { kind: 'two', mt: true,
          leftH3: 'What a 4 means',
          left: [
            'A 4, ausreichend, is a pass. The KMK dossier says that moving up a year generally needs at least ausreichend in every subject that counts for promotion, and that a mangelhaft or ungenügend in one subject can usually be balanced, within limits, by at least befriedigend elsewhere. The class conference of all the pupil\'s teachers decides.',
            'For the Abitur, the KMK says the Allgemeine Hochschulreife is awarded when the overall qualification reaches at least an average of 4.'
          ],
          rightH3: 'Reports twice a year',
          right: [
            'Pupils receive a Zeugnis, a school report, at the end of each half-year and at the end of the school year. The Länder may use written reports instead of marks in some years, says the dossier, but never on a leaving certificate.',
            'A family used to percentages should read a German report the other way round: a row of 2s is good news.'
          ] }
      ]
    },
    {
      id: 'maths',
      tint: 'tint',
      eyebrow: 'Maths',
      h2: 'Where is maths tested in German schools?',
      lede: 'Maths is taught every year of every school type, and the KMK sets binding national standards for it at three points. The Länder check progress with comparison tests in between.',
      body: [
        { kind: 'table', numCols: [], caption: 'National maths standards and tests, with the 2027 dates where published', head: ['When', 'What', 'Detail'], rows: [
          ['End of Klasse 4', 'KMK maths standards, primary', 'Adopted 15 October 2004, current version 23 June 2022'],
          ['Klasse 3', 'VERA-3 comparison test', '2027 window: 12 April to 26 May 2027'],
          ['Klasse 8', 'VERA-8 comparison test', '2027 window: 8 February to 25 March 2027'],
          ['Klasse 9 or 10', 'KMK standards for the ESA and MSA', 'One combined document since 2022'],
          ['End of Klasse 10', 'Central MSA exams in most Länder', 'In NRW the ZP10 in German, maths and English'],
          ['Abitur', 'KMK maths standards for the Abitur', 'Adopted 18 October 2012; papers drawn from a shared IQB pool']
        ] },
        { kind: 'source', html: 'Sources: KMK Bildungsstandards Mathematik for the Primarbereich, for ESA and MSA, and for the Allgemeine Hochschulreife; IQB pages on VERA-3 and VERA-8; NRW Standardsicherung, Zentrale Prüfungen 10. Read 2 November 2026.' },
        { kind: 'p', mt: true, html: 'VERA is the test that confuses new families most. The IQB says plainly that VERA results are not graded and that no rankings of schools or Länder are produced; the tests tell teachers, a year before the standards are due, how far a class has come. Some Länder call them KERMIT, Kompetenztests or Lernstandserhebungen. There is no reason to drill for VERA, but a weak VERA-8 result is a useful early signal before the MSA.' },
        { kind: 'p', html: 'At the Abitur, maths is close to unavoidable: the KMK says the exam covers four or five subjects, at least two at raised level, and two of them must come from German, a foreign language and maths. Our page on <a class="ag-inline-link" href="/abitur-maths-in-english">Abitur maths in English</a> explains the pool exam itself.' }
      ]
    },
    {
      id: 'computing',
      eyebrow: 'Computing',
      h2: 'Do German schools teach computer science?',
      lede: 'Some do from Klasse 5, some only as an option, and the answer depends entirely on the Land.',
      body: [
        { kind: 'two',
          leftH3: 'Uneven by design',
          left: [
            'Informatik is the newest subject in German schools and the least settled. The Gesellschaft für Informatik counts six Länder in its Informatik-Monitor 2026/27 where no Informatik lesson is compulsory for every pupil: Berlin, Brandenburg, Bremen, Hessen, Rheinland-Pfalz and Sachsen-Anhalt.',
            'In the other ten it is compulsory at some point in lower secondary, from Klasse 5 and 6 in Nordrhein-Westfalen to Klasse 9 and 10 in Niedersachsen.'
          ],
          rightH3: 'Thin at the top',
          right: [
            'In the Oberstufe Informatik is an option, and the same monitor puts the national share of pupils who take it in the Qualifikationsphase at about 15 percent.',
            'Our English guide <a class="ag-inline-link" href="/coding-classes-in-germany">for families in Germany</a> and our German page on <a class="ag-inline-link" href="/informatik-nachhilfe-online">Informatik-Nachhilfe</a> go further into the rules Land by Land.'
          ] }
      ]
    },
    {
      id: 'routes',
      tint: 'tint',
      eyebrow: 'A program you can run',
      h2: 'How many routes lead to the Abitur? A short Python program',
      lede: 'Families often hear that only the Gymnasium leads to the Abitur. The KMK rules above say otherwise, and a short program makes the point better than a paragraph. The map below is our own simplification of the KMK overview, not an official chart.',
      body: [
        { kind: 'code', label: 'Every route from Grundschule to Abitur', lang: 'Python', code: ROUTES, note: 'Run with Python 3 on 3 November 2026, it prints <code>Routes to the Abitur: 14</code>, then the fourteen routes one per line, starting <code>Gymnasium &gt; Oberstufe, Gymnasium</code>, and ends with <code>Routes that never pass a Gymnasium of any kind: 3</code>.' },
        { kind: 'two', mt: true,
          leftH3: 'What the program says',
          left: [
            'Of the fourteen routes, only one is the classic straight line: Gymnasium, then the Oberstufe at the same school. Three never touch a Gymnasium of any kind: a pupil goes from a school with several tracks or a Realschule to the MSA and then into the Oberstufe of a school with three tracks. Our map is simplified (a Land may restrict some of these steps), but the shape is the KMK\'s.',
            'The Realschule and Gymnasium point at each other because the KMK allows a change of track in Klasse 5 and 6.'
          ],
          rightH3: 'The line that stops a loop',
          right: [
            'That two-way arrow is the trap in the code. Delete the line <code>if here in path</code> and the function walks Gymnasium, Realschule, Gymnasium, Realschule for ever; Python gives up with <code>RecursionError: maximum recursion depth exceeded</code>.',
            'Real route planners, from train timetables to the maps in your phone, guard against the same circle. Spotting it is the kind of thinking we teach before any syntax.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 10 to 12.</strong> Draw the map on paper as boxes and arrows. Trace three routes with a finger and count the arrows on each.',
          '<strong>Ages 12 to 14.</strong> Run the program, then add a box for the Erster Schulabschluss after Klasse 9. Does the number of routes to the Abitur change? Explain why.',
          '<strong>Ages 14 and up.</strong> Change the program so it prints the shortest route first. Then remove the loop guard on purpose and read the error message slowly.'
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where we fit in',
    h2: 'What we teach at each German school stage',
    lede: 'Our own map of classes against the German ladder. We teach alongside school; the school\'s course and its marks are the ones that count.',
    table: { caption: 'Our classes by German school stage (ours)', head: ['School stage', 'Maths with us', 'Computing with us'], rows: [
      ['Grundschule, Klasse 1 to 4', 'Number sense and mental arithmetic', 'Scratch, first algorithms on paper'],
      ['Klasse 5 and 6', 'Fractions, decimals, first equations', 'Scratch to Python, loops and conditions'],
      ['Klasse 7 to 9', 'Algebra, functions, geometry, data', 'Python with lists, functions and real data'],
      ['Klasse 10 and the MSA', 'Exam-style practice for the Land\'s papers', 'Projects, algorithms, Informatik catch-up'],
      ['Oberstufe and Abitur', 'Analysis, geometry, stochastics', 'Java or Python, data structures, SQL']
    ] },
    left: { h3: 'For parents', ps: [
      'Send us the school\'s worksheets and the last Klassenarbeit. The mentor works from your child\'s actual German material and explains it in English.',
      'We report progress in plain words and, where useful, against the German marks, so a parents\' evening is easier to follow.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Bring the German word you did not understand. Your mentor gives the English idea and keeps the German term beside it, because your tests will use it.',
      'Ask for the reason, not just the answer. Every class ends with a problem you solve yourself.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for pupils at German schools',
    lede: 'All live in English with one regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Grundschule years', sub: 'Ages 6 to 10', courses: [
        { code: 'SSM / EARLY / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Number, shape and measures for Klasse 1 to 4.' },
        { code: 'SSM / EARLY / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, sure arithmetic without a calculator.' },
        { code: 'SSM / EARLY / 03', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'A first language for young programmers.' }
      ] },
      { num: 'II', h3: 'Lower secondary', sub: 'Ages 10 to 16', courses: [
        { code: 'SSM / MID / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Secure algebra before the MSA.' },
        { code: 'SSM / MID / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Functions and data explored in Python.' },
        { code: 'SSM / MID / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Real programs and simple AI ideas.' }
      ] },
      { num: 'III', h3: 'Oberstufe and international routes', sub: 'Ages 15 to 19', courses: [
        { code: 'SSM / UPPER / 01', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'Java and Python for the Oberstufe.' },
        { code: 'SSM / UPPER / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'For pupils at international schools.' },
        { code: 'SSM / UPPER / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'Core and Extended for international schools.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes fit a German school week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Two live hours a week with the same mentor, planned around the German school day, which often ends early in the afternoon.',
    slots: [
      { time: 'After lunch', l: 'For example 14:00 German time, which is 18:30 in India in winter and 17:30 from 28 March 2027.' },
      { time: 'Early evening', l: 'For example 18:00 German time, for older pupils with long school days.' },
      { time: '1-on-1', l: 'Saturday late mornings or a time you choose, before a Klassenarbeit.' }
    ],
    cells: [
      { h3: 'English, German terms', p: 'Explained in English, with the word from the German worksheet kept beside it.' },
      { h3: 'Your Land\'s order', p: 'We follow the topics in the order your school teaches them.' },
      { h3: 'From any stage', p: 'Families arriving mid-year start where the child really is.' },
      { h3: 'Maths or code', p: 'One subject or both, with one mentor or two.' },
      { h3: 'Parents in the loop', p: 'Short written notes after classes.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty pupils at one level, or one to one.' }
    ]
  },

  projectsH2: 'Things our students have built',
  projectsLede: 'Pupils who start with us in maths often move on to code. A few of their projects are below; more are on our <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from parents and students, quoted as written.',

  fees: {
    h2: 'Fees for families in Germany',
    lede: 'One monthly fee covers eight live classes. On this page the fee appears in euro, converted at the European Central Bank reference rate; we charge the card in US dollars, so your bank does the final conversion and the statement may show a few cents of difference.',
    free: ['A free first class', 'A short check of your child\'s level against the German stage', 'No card needed'],
    group: ['Fifteen to twenty pupils at the same level', 'One regular mentor', 'Two classes a week', 'Monthly, cancel any month'],
    one: ['Your child and one mentor', 'Built around the school\'s worksheets', 'Times that suit your family']
  },

  faq: {
    eyebrow: 'Families ask',
    h2: 'The German school system: common questions',
    items: [
      { q: 'At what age do children start school in Germany?', a: 'Compulsory school normally starts in the year a child turns six. Each Land sets a cut-off birthday between 30 June and 30 September, and children who are six by then start on 1 August, the legal start of the school year, according to the KMK dossier.' },
      { q: 'How many years is school compulsory in Germany?', a: 'Nine years of full-time school in most Länder. The KMK dossier names Berlin, Brandenburg, Bremen and Thüringen with ten years, and Nordrhein-Westfalen with nine or ten depending on the course.' },
      { q: 'Is there an exam to get into the Gymnasium?', a: 'There is no leaving exam at the end of Grundschule. The primary school gives a recommendation after a counselling talk with parents, and depending on the Land the final decision lies with the parents or with the school and school authority. Some Länder use a trial period or entrance test for certain schools.' },
      { q: 'Can my child reach the Abitur without going to a Gymnasium?', a: 'Yes. The KMK places the gymnasiale Oberstufe at the Gymnasium, at schools with three tracks and at the Berufliches Gymnasium. Entry needs the Mittlerer Schulabschluss with the Oberstufe entitlement, which can be earned at any lower secondary school type.' },
      { q: 'What do G8 and G9 mean?', a: 'G8 is the Abitur after eight years of Gymnasium, at the end of Klasse 12; G9 after nine, at the end of Klasse 13. Several Länder, Bayern among them, have returned to G9. Our table above shows the route each Land\'s Gymnasium follows in 2026/27, as far as our sources describe it.' },
      { q: 'Is a 1 or a 6 the best mark in Germany?', a: 'A 1 (sehr gut) is the top mark and a 6 (ungenügend) the lowest. In the last two years before the Abitur, marks become points from 0 to 15, where 15 is the top.' },
      { q: 'What is VERA and does my child need to prepare?', a: 'VERA is a set of comparison tests in Klasse 3 and Klasse 8. The IQB says the results are not graded and no rankings are made. The 2027 window for VERA-8 is 8 February to 25 March 2027. No special preparation is needed, but the result can point to gaps before the MSA.' },
      { q: 'Are the classes in German?', a: 'No. Every class is live and taught in English only, by mentors based in India who match your child\'s pace and accent. We do keep the German school terms beside the English, because your child\'s tests will use them.' },
      { q: 'When do classes run in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Germany is 4 hours 30 minutes behind India in winter and 3 hours 30 minutes behind in summer, so German afternoons suit our mentors well.' },
      { q: 'Do you give German school marks or certificates?', a: 'No. We teach alongside school and are not connected to the KMK, the IQB or any ministry. Your child\'s school sets the marks that count; our job is to make the maths and computing behind them clear.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families settling into German schools.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our main page for every family in Germany.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The pool exam, its marks and dates.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Informatik rules by Land, page in German.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'For primary-age children in the capital.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'For teenagers ready to build models.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live class.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class the mentor finds out where your child stands, compared with the German stage they are in, and suggests whether maths, computing or both would help most.',
    readFirst: 'If you like to read first, <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">the middle school maths syllabus</a> lists every topic, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a class.',
    note: 'All classes are live online, in English only, with mentors in India. WhatsApp is the quickest way to reach us.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'School stages', links: [
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle school maths' },
        { href: '/courses/informatik-companion-course-klasse-5-10', label: 'Informatik Companion' },
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Abitur Mathematik' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Fourteen roads, one Abitur'
  },

  personalityCss: `
.ag-root.ag-ssm .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-ssm .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ssm .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ssm .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-ssm .ag-band-head h3 { text-transform: none; }
`,

  dossier: {
    curriculumAuthority: 'KMK pages on Primarbereich, Sekundarstufe I and II; KMK Schema Bildungsgänge und Schularten (02/2021); KMK Eurydice dossier 2024/2025; Bavarian ministry Gymnasium page; IQB VERA-3 and VERA-8; KMK maths standards; GI Informatik-Monitor 2026/27. Read 2 November 2026.',
    localProject: 'An original Python route-finder over our simplified KMK school map: 14 routes from Grundschule to Abitur, 3 that never pass a Gymnasium, and the RecursionError that appears without the loop guard. Lesson family: model a system as a graph, list every path, guard against loops.',
    requiredMentions: ['Integrierte Sekundarschule', 'Verbundene Haupt- und Realschule, Mittelstufenschule', 'Routes to the Abitur: 14', 'Routes that never pass a Gymnasium of any kind: 3', 'RecursionError: maximum recursion depth exceeded', '8 February to 25 March 2027', 'between 30 June and 30 September', 'Fourteen roads, one Abitur'],
    sources: [
      { claim: 'School types and names by Land, Oberstufe locations.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Bildung/AllgBildung/Schema-Bildungsgaenge_und_Schularten-Stand_2021-02.pdf' },
      { claim: 'Marks, points, transition, Schulpflicht, school year, Berufliches Gymnasium.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Eurydice/DE/dossier_de_ebook.pdf' },
      { claim: 'Track changes in Klasse 5 and 6, certificates at every school type.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/sekundarstufe-i.html' },
      { claim: 'Oberstufe phases, Abitur subjects, G8/G9 and 265 hours.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/sekundarstufe-ii-gymnasiale-oberstufe-und-abitur.html' },
      { claim: 'VERA-8 window and no grading.', url: 'https://www.iqb.hu-berlin.de/de/schule/sekundarstufe-i/vera/' },
      { claim: 'G8/G9 descriptions and Informatik by Land.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/' }
    ],
    rejectedClaims: [
      'G8 or G9 for Hessen and Thüringen: no source fetched; printed as not in our sources.',
      'Pupil numbers by school type: Destatis not fetched; none printed.',
      'That every route in our map is open in every Land: not stated; the map is labelled our simplification.',
      'Any affiliation with the KMK, IQB or a ministry: none.'
    ]
  }
};
