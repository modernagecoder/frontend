'use strict';
// Informatik in German schools by state (ag- pillar, Germany cluster row DE004). English answer to "is computer science
// compulsory in German schools / informatik pflichtfach by bundesland".
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only, with
// mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle (different from the German page informatik-nachhilfe-online, which lists "what applies" per Land): each Land
// measured against the SWK recommendation of 4 and 6 compulsory hours, the next change announced, and the 2024/25 share of
// Oberstufe pupils taking Informatik; then an original program that shows why "for all pupils" means the minimum across
// school types, not the strongest school type.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/informatik-in-german-schools-by-state/,
// all GI Informatik-Monitor 2026/27 pages fetched 2 November 2026; facts in de/facts-school/FACTS.md section 2):
//  - National page: SWK "mittelfristig (bis 2030) ... insgesamt sechs Wochenstunden", "Kurzfristig (bis 2024/25) ... vier"
//    (93); MV, Saarland, Thüringen meet 6 (90); BW, Hamburg, Sachsen, SH meet 4 (91); six Länder without (92); Bremen
//    2027/28, two to four hours (94); RP 2028/29, four hours (95); no binding plans in BE, BB, HE (96); "rund 15 Prozent" in
//    the Qualifikationsphase (97); legend "mind. 6 Pflichtstunden Informatik an allen Schulformen" ... "mind. 1 ...";
//    map "Stand 2024/25: Die Belegungsquote beträgt 7 %" etc. per Land.
//  - Land pages: per-Land "Anteil SuS mit Informatik in der Sek II" 2024/25 (BW 7, BY 11, BE 12, BB 15, HB 17, HH 22,
//    HE 10, MV 40, NI 9, NW 14, RP 26, SL 15, SN 43, ST 14, SH 12, TH 33 %); MV "mindestens je einer Wochenstunde" 5 to 10;
//    SL 7 and 8 "zweistündig", 9 and 10 "einstündig"; TH MBI "jeweils zwei Wochenstunden in den Doppeljahrgangsstufen 5/6
//    und 7/8 sowie jeweils eine Unterrichtswochenstunde in den Klassenstufen 9 und 10", phased to Klasse 10 by 2029/30;
//    SN "jeweils einstündig in den Jahrgangsstufen 7 bis 10"; HH "vier Wochenstunden" since 2025/26, the school decides
//    the grades; SH "Gesamtumfang beträgt vier Wochenstunden in den Jahrgangsstufen 7 bis 10"; BY Mittelschule "je einer
//    Wochenstunde" 5 to 10, Realschule Informationstechnologie "insgesamt elf / acht / sieben / neun Wochenstunden" by
//    Wahlpflichtfächergruppe, Gymnasium "in den Jahrgangsstufen 6 und 7 im Umfang von je einer Wochenstunde der Schwerpunkt
//    Informatik"; ST Sekundarschule and Gemeinschaftsschule "6 bis 10 ... je eine Wochenstunde", Gymnasium informatics
//    content "weniger als eine Wochenstunde"; BW "insgesamt vier Wochenstunden" at Werkreal-, Haupt-, Real- and
//    Gemeinschaftsschule, new Bildungsplan "Inkraftsetzung für August 2027"; NRW Pflichtfach in 5 and 6; NI 9 and 10 since
//    2024/25; "Informatik ist in allen Bundesländern ein Mangelfach".
// Our own: bands.py (python3 -I, 3 November 2026), printed output pasted in the note. Our sums of the monitor's per-grade
// hours, labelled ours, agree with the monitor's own bands for all eight Länder in the program.
// Lesson family: a guarantee "for all" is the minimum across groups, not the maximum.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const BANDS = [
  '# Compulsory Informatik hours in Sekundarstufe I, added up over the grades,',
  '# for each school type (Informatik-Monitor 2026/27, Land pages).',
  'hours = {',
  '    "Mecklenburg-Vorpommern": {"every school type": 1 + 1 + 1 + 1 + 1 + 1},',
  '    "Saarland": {"Gemeinschaftsschule": 2 + 2 + 1 + 1, "Gymnasium (G9)": 2 + 2 + 1 + 1},',
  '    "Thüringen": {"every school type": 2 + 2 + 1 + 1},   # 2 in 5/6, 2 in 7/8, 1 in 9, 1 in 10',
  '    "Sachsen": {"Oberschule": 1 + 1 + 1 + 1, "Gymnasium": 1 + 1 + 1 + 1},',
  '    "Hamburg": {"Stadtteilschule": 4, "Gymnasium": 4},',
  '    "Schleswig-Holstein": {"every school type": 4},',
  '    "Bayern": {"Mittelschule": 1 + 1 + 1 + 1 + 1 + 1, "Realschule": 7, "Gymnasium": 1 + 1},',
  '    "Sachsen-Anhalt": {"Sekundarschule": 1 + 1 + 1 + 1 + 1, "Gymnasium": 0},',
  '}',
  '',
  'def band(h):',
  '    if h >= 6: return "6 or more"',
  '    if h >= 4: return "4 or more"',
  '    if h >= 1: return "at least 1"',
  '    return "not for all"',
  '',
  'for land, by_type in hours.items():',
  '    for_all = min(by_type.values())     # what every pupil is sure to get',
  '    top = max(by_type.values())         # what the luckiest pupil gets',
  '    print(f"{land:24} for all: {for_all}  {band(for_all):12} top case: {top}  {band(top)}")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'guide', label: 'Informatik by state' },
  slug: 'informatik-in-german-schools-by-state',
  code: 'isb',
  accent: '#784617',
  accentRationale: 'Informatik by state: a deep tobacco brown #784617, the shade of a cork pinboard map, kept apart from the petrol #1E5560 of the German Informatik page; 4.5:1 or better on the paper #FBF8F2 and on all three paper tints',
  pageType: 'market',
  priceSubject: 'coding',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Informatik in German schools by state',
  title: 'Is Computer Science Compulsory in German Schools? By State',
  description: 'Informatik in German schools, state by state: which of the 16 Länder make it compulsory, how many hours against the SWK target, and who takes it later.',
  ogDescription: 'Computer science (Informatik) in German schools explained in English: all sixteen Länder against the recommended four and six compulsory hours, the changes coming in 2027 and 2028, and how many pupils choose it in the Oberstufe.',
  twitterDescription: 'Is Informatik compulsory in your German state? All 16 Länder, hours against the target, changes ahead.',
  pageName: 'Informatik in German Schools by State',
  webPageDescription: 'An English guide to compulsory Informatik in the sixteen German Länder, built from the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27: each Land against the SWK recommendation, the reforms announced for 2027/28 and 2028/29, Oberstufe take-up for 2024/25, and an original program on why a rule for all pupils is set by the weakest school type.',
  courseDescription: 'Live online Informatik support in English for pupils in Klasse 5 to 10 at German schools: Scratch to Python, algorithms, data and networks, matched to what the pupil\'s Land teaches, in a group or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Informatik by state',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#states', label: 'All 16 Länder' },
    { href: '#hours', label: 'Hours' },
    { href: '#for-all', label: 'For all?' },
    { href: '#changes', label: 'Changes' },
    { href: '#oberstufe', label: 'Oberstufe' }
  ],
  eyebrow: 'Germany &middot; Informatik &middot; Sixteen Länder compared',
  h1: 'Informatik in German schools, state by state',
  lede: 'Ask whether computer science is compulsory in Germany and the honest answer is a question back: which Land? Each of the sixteen Länder writes its own timetable. This page lines all of them up against the same yardstick, the hours the KMK\'s own scientific commission recommends, and shows where your child will meet Informatik, where only some pupils will, and what changes in the next two school years.',
  secondaryCta: { href: '#states', label: 'Find your Land' },
  wa: 'Hello Modern Age Coders, my child is at a school in Germany and we would like Informatik support in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; Informatik help in English for Klasse 5 to 10',
  spec: [
    ['For', 'Pupils in Klasse 5 to 10'],
    ['Covers', 'Scratch, Python, algorithms, data'],
    ['Matched to', 'Your Land\'s Informatik plan'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Times', 'German afternoons and weekends'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'In the school year 2026/27, Informatik is compulsory for all lower secondary pupils in ten of Germany\'s sixteen Länder, according to the Gesellschaft für Informatik; only three meet the recommended six hours. Modern Age Coders runs an Informatik Companion course for Klasse 5 to 10, live online in English, in a group or one to one, matched to what your Land teaches.',

  picks: {
    eyebrow: 'Courses for school Informatik',
    h2: 'Three courses for Informatik at school',
    lede: 'One for the compulsory years, one for the Oberstufe, and one for pupils who want competitions on top.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'ISB / 01', title: 'Informatik Companion, Klasse 5 to 10', note: 'Ages 10 to 16. Algorithms, Scratch to Python, data and networks, paced to the Land your child learns in.' },
      { course: 'informatik-abitur-course-java-python', code: 'ISB / 02', title: 'Informatik Oberstufe and Abitur', note: 'Ages 16 to 19. Java or Python, data structures, SQL and automata for Grundkurs and Leistungskurs.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'ISB / 03', title: 'Biber, BWINF and BWKI', note: 'Ages 9 to 19. Computational thinking up to contest algorithms and AI projects, with our own practice problems.' }
    ]
  },

  sections: [
    {
      id: 'states',
      eyebrow: 'All sixteen Länder',
      h2: 'Is Informatik compulsory in my German state?',
      lede: 'The table measures every Land against the two targets of the Ständige Wissenschaftliche Kommission (SWK), the KMK\'s standing scientific commission: four compulsory hours across lower secondary in the short term, six by 2030. An "hour" here is one lesson a week for one school year.',
      body: [
        { kind: 'table', numCols: [4], caption: 'Compulsory Informatik in lower secondary, 2026/27, and Oberstufe take-up, 2024/25', head: ['Land', 'Compulsory for all?', 'Against the SWK target', 'Next step announced', 'Oberstufe pupils taking it'], rows: [
          ['Baden-Württemberg', 'Yes, from 2025/26', 'Meets 4', 'Growing year by year; new curriculum due August 2027', '7 %'],
          ['Bayern', 'Yes', 'Under 4 for all', 'None stated', '11 %'],
          ['Berlin', 'No', 'None for all', 'No binding plans known', '12 %'],
          ['Brandenburg', 'No', 'None for all', 'No binding plans known', '15 %'],
          ['Bremen', 'No', 'None for all', 'Compulsory from 2027/28, two to four hours', '17 %'],
          ['Hamburg', 'Yes, since 2025/26', 'Meets 4', 'None stated', '22 %'],
          ['Hessen', 'No', 'None for all', 'No binding plans known', '10 %'],
          ['Mecklenburg-Vorpommern', 'Yes', 'Meets 6', 'None stated', '40 %'],
          ['Niedersachsen', 'Yes, since 2024/25', 'Under 4 for all', 'None stated', '9 %'],
          ['Nordrhein-Westfalen', 'Yes', 'Under 4 for all', 'None stated', '14 %'],
          ['Rheinland-Pfalz', 'No', 'None for all', 'Compulsory from 2028/29, four hours', '26 %'],
          ['Saarland', 'Yes', 'Meets 6', 'None stated', '15 %'],
          ['Sachsen', 'Yes', 'Meets 4', 'None stated', '43 %'],
          ['Sachsen-Anhalt', 'No', 'None for all', 'None stated', '14 %'],
          ['Schleswig-Holstein', 'Yes, since 2024/25', 'Meets 4', 'None stated', '12 %'],
          ['Thüringen', 'Yes, since 2024/25', 'Meets 6', 'Reaches Klasse 10 in 2029/30', '33 %']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, national comparison and the sixteen Land pages, read 2 November 2026. "Meets 6" and "Meets 4" are the monitor\'s own lists. "Under 4 for all" is our label for the three compulsory Länder on neither list (Bayern, Niedersachsen, Nordrhein-Westfalen). The last column is each Land page\'s share of Oberstufe pupils with Informatik, Stand 2024/25, which the monitor takes from KMK statistics. The monitor\'s summary sentence groups Bremen with the lowest take-up; we print the figure from Bremen\'s own page, 17 %.' }
      ]
    },
    {
      id: 'hours',
      eyebrow: 'Hours on the timetable',
      h2: 'How many hours of Informatik does each Land teach?',
      lede: 'The SWK asks for six compulsory hours in lower secondary by 2030 and four in the short term, by 2024/25. The Länder are a long way apart, and inside one Land the school type often matters as much as the Land.',
      body: [
        { kind: 'two',
          leftH3: 'The three that meet six',
          left: [
            'Mecklenburg-Vorpommern teaches Informatik und Medienbildung in every school type from Klasse 5 to 10, at least one hour in each year. Saarland teaches two hours in Klasse 7 and 8 and one in Klasse 9 and 10 at Gemeinschaftsschulen and the nine-year Gymnasium.',
            'Thüringen introduced Medienbildung und Informatik (MBI) in 2024/25: two hours across Klasse 5 and 6, two across 7 and 8, then one hour in Klasse 9 and one in 10. It is phasing in, and reaches Klasse 10 only in 2029/30.'
          ],
          rightH3: 'The four that meet four',
          right: [
            'Sachsen teaches one hour a week in each of Klasse 7 to 10 at both Oberschule and Gymnasium. Hamburg has required four hours at Stadtteilschulen and Gymnasien since 2025/26 and lets each school spread them over Klasse 7 to 10; Schleswig-Holstein does the same at every school type since 2024/25.',
            'Baden-Württemberg started its compulsory subject Informatik und Medienbildung in 2025/26 in Klasse 5 and 6, with four hours in total at Werkreal-, Haupt-, Real- and Gemeinschaftsschulen, growing a year at a time.'
          ] },
        { kind: 'p', mt: true, html: 'Three Länder make Informatik compulsory but sit under four hours for all. Nordrhein-Westfalen teaches it to every pupil in Klasse 5 and 6, and Niedersachsen in Klasse 9 and 10 since 2024/25. Bayern is the most interesting case: its Mittelschule teaches one hour in every year from Klasse 5 to 10, its Realschule between seven and eleven hours of Informationstechnologie depending on the subject group, but its Gymnasium only two, one hour of Informatik focus inside Natur und Technik in Klasse 6 and in Klasse 7. The program in the next section shows why that one school type decides Bayern\'s place.' },
        { kind: 'p', html: 'Behind all of this is a staffing problem. Every Land page of the monitor says the same: "Informatik ist in allen Bundesländern ein Mangelfach", a shortage subject everywhere, with too few teachers qualified to teach it. A timetable can promise an hour that a school struggles to staff.' }
      ]
    },
    {
      id: 'for-all',
      tint: 'tint',
      eyebrow: 'A program you can run',
      h2: 'Why is Bayern not in the top group? The answer is a minimum',
      lede: 'The monitor\'s bands read "at least six hours at all school types". A rule about all pupils is only as strong as the school type that offers least. Our short program adds up the hours the monitor gives for each school type and then compares the minimum with the maximum.',
      body: [
        { kind: 'code', label: 'For all pupils, or for the luckiest?', lang: 'Python', code: BANDS, note: 'Run with Python 3 on 3 November 2026, it prints eight lines. Two of them carry the lesson: <code>Bayern                   for all: 2  at least 1   top case: 7  6 or more</code> and <code>Sachsen-Anhalt           for all: 0  not for all  top case: 5  4 or more</code>. The other six give the same band both ways.' },
        { kind: 'two', mt: true,
          leftH3: 'What the minimum shows',
          left: [
            'Measured by the minimum, all eight Länder land exactly where the monitor puts them: Mecklenburg-Vorpommern, Saarland and Thüringen at six, Sachsen, Hamburg and Schleswig-Holstein at four, Bayern compulsory but under four, and Sachsen-Anhalt among the six with nothing for all. Our sums of the monitor\'s per-grade hours, in other words, reproduce its own verdicts.',
            'Bayern\'s Realschule entry is the smallest of its four subject groups, seven hours; using any of the others would not change the result, because the Gymnasium decides it.'
          ],
          rightH3: 'What the maximum would have claimed',
          right: [
            'Swap <code>min</code> for <code>max</code> and Bayern jumps to "6 or more" on the strength of its Realschule, while Sachsen-Anhalt reaches "4 or more" because its Sekundarschule teaches five hours, even though its Gymnasium pupils get none as a compulsory subject.',
            'The best school type is what a brochure quotes. The minimum is what a parent can count on. Choosing the right one of two built-in functions is the whole difference.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Check the units first.</strong> Thüringen says "two hours in the double year 5/6", Sachsen says "one hour in each of 7 to 10", Hamburg says "four hours in total". Before adding, turn every rule into the same unit: weekly hours, summed over the years.',
          '<strong>Then decide the question.</strong> "Can a pupil get six hours here?" needs <code>max</code>. "Does every pupil get six hours?" needs <code>min</code>.',
          '<strong>Try it.</strong> Add Baden-Württemberg with the four hours at its Werkreal-, Haupt-, Real- and Gemeinschaftsschulen. Which number would you need for its Gymnasium before you could trust the result?'
        ] }
      ]
    },
    {
      id: 'changes',
      eyebrow: 'What changes next',
      h2: 'Which Länder are adding compulsory Informatik in 2027 and 2028?',
      lede: 'Two of the six Länder without compulsory Informatik have fixed a start; three have no binding plans.',
      body: [
        { kind: 'table', numCols: [], caption: 'Announced changes to compulsory Informatik, as listed in the Informatik-Monitor 2026/27', head: ['School year', 'Land', 'What is announced'], rows: [
          ['August 2027', 'Baden-Württemberg', 'The new curriculum for Informatik und Medienbildung is due to come into force'],
          ['2027/28', 'Bremen', 'Compulsory at all schools, two to four hours in total'],
          ['2027/28', 'Baden-Württemberg', 'New profile subject Naturwissenschaft, Informatik und Technik (NIT) begins'],
          ['2028/29', 'Rheinland-Pfalz', 'Compulsory at all schools, four hours in total'],
          ['2029/30', 'Thüringen', 'MBI reaches Klasse 10'],
          ['No date', 'Berlin, Brandenburg, Hessen', 'No binding plans known']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, national page and the Baden-Württemberg, Bremen, Rheinland-Pfalz and Thüringen pages, read 2 November 2026. Sachsen-Anhalt\'s page lists the cross-subject plan "Lernen in der digitalen Welt" at the Gymnasium from Klasse 5 since 2024/25, with informatics content of less than one weekly hour.' },
        { kind: 'p', mt: true, html: 'If the announced steps happen as listed, twelve of sixteen Länder will have compulsory Informatik for all in 2028/29, up from ten today; that count is ours, from the table above. Rheinland-Pfalz already runs a head start: since 2021/22, 21 Informatik-Profil-Schulen there teach compulsory Informatik in Klasse 5.' }
      ]
    },
    {
      id: 'oberstufe',
      eyebrow: 'In the Oberstufe',
      h2: 'How many pupils take Informatik in the Oberstufe?',
      lede: 'After lower secondary, Informatik becomes a choice almost everywhere, and the choices differ more than the rules do.',
      body: [
        { kind: 'two',
          leftH3: 'From 7 to 43 percent',
          left: [
            'The Informatik-Monitor puts the national share of Oberstufe pupils taking Informatik in the Qualifikationsphase at about 15 percent. The Land pages for 2024/25 run from 7 percent in Baden-Württemberg and 9 percent in Niedersachsen to 40 percent in Mecklenburg-Vorpommern and 43 percent in Sachsen.',
            'The high scorers are the Länder that teach it longest lower down. A pupil who has had Informatik for four or six years is far more likely to choose it at sixteen.'
          ],
          rightH3: 'What it means for a pupil',
          right: [
            'In a Land with low take-up, a school may not run an Informatik Leistungskurs at all, and a pupil who wants computer science may find no course to join. In Sachsen, for example, the monitor says a Leistungskurs is possible only at selected Gymnasien.',
            'Our English page on <a class="ag-inline-link" href="/abitur-maths-in-english">Abitur maths</a> covers the maths side of the Oberstufe; for Informatik itself, the course below follows the school\'s language, Java or Python.'
          ] }
      ]
    },
    {
      id: 'family',
      tint: 'tint',
      eyebrow: 'For families',
      h2: 'What should a family do if their Land teaches little Informatik?',
      lede: 'Moving between Länder, or arriving from abroad, can leave a child years ahead or years behind in Informatik. Three practical steps help.',
      body: [
        { kind: 'ol', items: [
          '<strong>Find out what the school actually teaches.</strong> Ask for the Stundentafel (timetable of hours) and the Informatik plan for your child\'s year. A Land rule may be phasing in, as in Thüringen and Baden-Württemberg.',
          '<strong>Fill the gap with real programming.</strong> A child in Hessen or Berlin may meet no compulsory Informatik at all; one who moves from Mecklenburg-Vorpommern to Niedersachsen may already know more than the new class.',
          '<strong>Keep the German terms.</strong> School work is in German even when a pupil thinks in English. Schleife, Verzweigung, Variable and Algorithmus are worth knowing next to loop, branch, variable and algorithm.'
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Taught in English only', p: 'Every class is live and in English. The mentor names the German school word beside the English idea, so school and class connect.' },
          { h3: 'Pace and accent matched', p: 'Mentors slow down for a hard idea, rephrase rather than repeat, and get used to how your child speaks.' },
          { h3: 'The same mentor', p: 'One person who knows what your child\'s Land teaches and where the gaps are.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A learning path',
    h2: 'An Informatik path that works in any Land',
    lede: 'Our own sequence for Klasse 5 to 10. A pupil enters where their school and their skills place them.',
    table: { caption: 'Informatik Companion stages (ours)', head: ['Stage', 'Typical Klasse', 'The pupil can'], rows: [
      ['Algorithms', '5 and 6', 'Write step-by-step instructions and test them on a partner'],
      ['Blocks to text', '6 and 7', 'Rebuild a Scratch program in Python'],
      ['Data', '7 and 8', 'Count and compare values in a small table, with a program'],
      ['Functions and lists', '8 and 9', 'Split a problem into functions and test each one'],
      ['Systems', '9 and 10', 'Explain how a message crosses a network and why passwords are hashed']
    ] },
    left: { h3: 'For parents', ps: [
      'Tell us your Land and school type. The mentor reads the plan your child follows and keeps pace with it.',
      'Where school teaches no Informatik, we start at the first stage and move as fast as the child can.'
    ] },
    right: { h3: 'For pupils', ps: [
      'Before you run a program, say what it will print. Then run it and find out why you were right or wrong.',
      'Write down the German word from your worksheet next to the English one from class.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for young programmers in Germany',
    lede: 'Each one taught live by a mentor who stays with the pupil, either in a class of fifteen to twenty or alone.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 6 to 11', courses: [
        { code: 'ISB / FIRST / 01', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Blocks, games and the first ideas of algorithms.' },
        { code: 'ISB / FIRST / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Puzzles that teach how to break a problem down.' },
        { code: 'ISB / FIRST / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'From blocks to typed code.' }
      ] },
      { num: 'II', h3: 'Lower secondary', sub: 'Ages 11 to 16', courses: [
        { code: 'ISB / MID / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Functions, files, data and small projects.' },
        { code: 'ISB / MID / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Where maths lessons and programs meet.' },
        { code: 'ISB / MID / 03', slug: 'mysql-mastery-for-teens', title: 'Databases and SQL', blurb: 'Tables and queries, as in many Oberstufe plans.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Ages 14 to 19', courses: [
        { code: 'ISB / MORE / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'The language many Oberstufe courses use.' },
        { code: 'ISB / MORE / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Searching, sorting, lists and trees.' },
        { code: 'ISB / MORE / 03', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'For pupils at international schools.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live Informatik classes work',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A typical plan is two sessions of an hour each week, and pupils write and run code in both.',
    slots: [
      { time: 'Early afternoon', l: 'For example 13:30 German time, 18:00 in India in winter.' },
      { time: 'Later afternoon', l: 'For example 16:45 German time, 20:15 in India from 28 March 2027.' },
      { time: '1-on-1', l: 'Sunday mornings or another time you choose.' }
    ],
    cells: [
      { h3: 'Your Land\'s plan', p: 'Matched to the sequence on your child\'s Informatik worksheets.' },
      { h3: 'Code every class', p: 'Pupils type and run their own programs.' },
      { h3: 'Paper too', p: 'Tracing code by hand, as school tests ask.' },
      { h3: 'German terms', p: 'The word from the worksheet, beside the English.' },
      { h3: 'Short reports', p: 'What was learned and what comes next.' },
      { h3: 'Class or private', p: 'Fifteen to twenty pupils, or a single learner.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'School Informatik is often where a bigger hobby starts. Here is a sample of what learners went on to make; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows more.',
  reviewsLede: 'Google reviews from parents and students, word for word.',

  fees: {
    h2: 'Fees for Informatik classes in Germany',
    lede: 'Each month\'s fee pays for eight live classes. The amounts shown here are in euro, worked out at the European Central Bank reference rate, while the card payment itself goes through in US dollars; your bank converts it, so the statement can be off by a little.',
    free: ['A free first class', 'A short programming task to see where your child stands', 'No card needed'],
    group: ['Fifteen to twenty pupils at one level', 'One regular mentor', 'Two classes a week', 'Monthly, stop whenever you like'],
    one: ['One pupil, one mentor', 'Built around the school\'s Informatik plan', 'Times chosen by your family']
  },

  faq: {
    eyebrow: 'Parents ask',
    h2: 'Informatik in German schools: common questions',
    items: [
      { q: 'Is computer science compulsory in German schools?', a: 'In ten of the sixteen Länder, Informatik is compulsory for all lower secondary pupils in 2026/27, according to the Gesellschaft für Informatik\'s Informatik-Monitor. In Berlin, Brandenburg, Bremen, Hessen, Rheinland-Pfalz and Sachsen-Anhalt it is not compulsory for all.' },
      { q: 'Is Informatik compulsory in Bavaria?', a: 'Yes, but the amount depends on the school type. The Mittelschule teaches one hour a week in Klasse 5 to 10; the Gymnasium teaches an Informatik focus of one hour in Klasse 6 and in Klasse 7 inside Natur und Technik, and two compulsory hours in Klasse 11.' },
      { q: 'Is Informatik compulsory in Niedersachsen?', a: 'Yes. Since 2024/25 Informatik has been a compulsory subject in Klasse 9 and 10 at every general school type in Niedersachsen, according to the Informatik-Monitor 2026/27.' },
      { q: 'How many hours of Informatik are recommended?', a: 'The KMK\'s standing scientific commission (SWK) recommends six compulsory hours across lower secondary by 2030, and four as a short-term step. Mecklenburg-Vorpommern, Saarland and Thüringen meet six; Baden-Württemberg, Hamburg, Sachsen and Schleswig-Holstein meet four.' },
      { q: 'Which Länder will add compulsory Informatik next?', a: 'Bremen from 2027/28, with two to four hours in total, and Rheinland-Pfalz from 2028/29, with four hours. The monitor knows of no binding plans in Berlin, Brandenburg or Hessen.' },
      { q: 'What should my child do if their school teaches no Informatik?', a: 'Start with real programming outside school, ideally from algorithms and Scratch to Python, so they are ready if they choose Informatik in the Oberstufe. Our Informatik Companion course is built for exactly this.' },
      { q: 'Are the classes in German?', a: 'No, and we say so up front: lessons happen live in English, never German. Our mentors sit in India and adjust to how quickly your child works and how they speak. Since Python and Java are written with English keywords, the language is rarely the hard part, and German school terms are named alongside.' },
      { q: 'When do the classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. In winter India is 4 hours 30 minutes ahead of Germany, in summer 3 hours 30 minutes.' },
      { q: 'Do your classes count towards school marks?', a: 'They do not. Our lessons run next to school, and Modern Age Coders has no link with the Gesellschaft für Informatik, the KMK or any education ministry. Only the school\'s own Informatik marks appear on a Zeugnis.' },
      { q: 'What does it cost?', a: 'A monthly fee, shown on this page in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for pupils and parents in Germany.',
    items: [
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'The same subject, in German, with a trace-table exercise.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page we have for families in Germany.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'The maths side of the Oberstufe.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'For a Land without compulsory Informatik.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI classes in Germany', p: 'For teenagers ready for machine learning.' },
      { href: '/courses/informatik-companion-course-klasse-5-10', label: 'Informatik Companion syllabus', p: 'Every topic, Klasse 5 to 10.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The first class is a short programming task matched to your child\'s Klasse. The mentor sees what your child already knows, compares it with what your Land teaches, and suggests a group or a one-to-one plan.',
    readFirst: 'To read first: <a class="ag-inline-link" href="/courses/informatik-companion-course-klasse-5-10">the Informatik Companion syllabus</a> and <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'Every session is online and live, held in English by a mentor in India. Questions are answered fastest on WhatsApp.',
    formNote: 'Free, with no card and nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Informatik', links: [
        { href: '/courses/informatik-companion-course-klasse-5-10', label: 'Informatik Companion' },
        { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur' },
        { href: '/courses/german-informatics-competitions-course-biber-bwinf-bwki', label: 'Biber, BWINF, BWKI' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'For all means the minimum'
  },

  personalityCss: `
.ag-root.ag-isb .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-isb .ag-capsule { border-left-width: 7px; border-radius: 2px; }
.ag-root.ag-isb .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-isb .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-isb .ag-band-head h3 { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (national page and all sixteen Land pages), read 2 November 2026; it compiles each Land\'s ordinances and KMK statistics. Program and sums ours.',
    localProject: 'An original Python program that sums the monitor\'s per-grade compulsory hours for eight Länder and compares the minimum across school types with the maximum: the minimum reproduces the monitor\'s bands; the maximum would wrongly lift Bayern to six and Sachsen-Anhalt to four. Lesson family: a rule for all is the minimum, not the maximum.',
    requiredMentions: ['Bayern                   for all: 2  at least 1   top case: 7  6 or more', 'Sachsen-Anhalt           for all: 0  not for all  top case: 5  4 or more', 'Compulsory from 2027/28, two to four hours', 'Compulsory from 2028/29, four hours', 'Informatik ist in allen Bundesländern ein Mangelfach', '21 Informatik-Profil-Schulen', 'Reaches Klasse 10 in 2029/30', 'For all means the minimum'],
    sources: [
      { claim: 'National comparison: SWK targets, bands, six Länder without, Bremen and RP plans, 15 percent.', url: 'https://informatik-monitor.de/' },
      { claim: 'Bayern school-type hours.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bayern' },
      { claim: 'Thüringen MBI hours and phasing.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/thueringen' },
      { claim: 'Sachsen-Anhalt Sekundarschule and Gymnasium.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/sachsen-anhalt' },
      { claim: 'Baden-Württemberg four hours, August 2027 curriculum, NIT.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/baden-wuerttemberg' }
    ],
    rejectedClaims: [
      'The monitor\'s summary that Bremen\'s take-up is about one in twelve: its own Bremen page says 17 %, so the Land figure is printed and the conflict noted.',
      'Hours for NRW Klasse 5 and 6 and Niedersachsen Klasse 9 and 10: not stated in the text we read; left out of the program.',
      'Gender shares of Informatik pupils and teachers: available on the monitor but not used (no gender statistics).',
      'Any affiliation with the Gesellschaft für Informatik, the KMK or a ministry: none.'
    ]
  }
};
