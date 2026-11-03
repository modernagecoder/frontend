'use strict';
// Coding for international school students in Düsseldorf (ag- city school door, Germany cluster P5 row DE124).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only,
// with mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle: pupils at IB schools in and around Düsseldorf (AGIS context only); what the MYP and the Diploma mean in German
// terms (AGIS: MYP equivalent to the Mittlere Reife; KMK: Computer Science a sixth-slot subject); how computing sits
// in the NRW Oberstufe by comparison (cannot replace the sciences there either; central written Abitur without a
// computer); our IB and teen courses; and a data project on the Rhine-side bike counter at Mannesmannufer, where the
// weather label and the measured rain disagree on 833 hours, so the pupil must choose which column to trust.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-for-international-school-
// students-dusseldorf/ and facts-school/src/, fetched 2 and 3 Nov 2026):
//  - AGIS directory (FACTS 235): International School of Düsseldorf, "Schüler 1000", address "Niederrheinstrasse 33",
//    "Angebotene Abschlüsse IB Primary Years Programme (PYP) IB Middle Years Programme (MYP) International Baccalaureate
//    (IB)"; AGIS NRW list: "800 Schüler:innen Bonn International School", "210 Schüler:innen Independent Bonn
//    International School", "1000 Schüler:innen International School of Düsseldorf", "175 Schüler:innen International
//    School Ruhr". AGIS homepage (248, 249, 250): IB Diploma "dem deutschen Abitur gleichwertig" with prescribed
//    combinations; MYP or IGCSE "einen der Mittleren Reife gleichwertigen Abschluss"; "Kinder aus bis zu 65 verschiedenen
//    Nationen", "Englisch als gemeinsame Sprache im Unterricht".
//  - KMK IB agreement (kmk-ib/5c09f317.txt): "ein naturwissenschaftliches Fach (Biology, Chemistry, Physics)"; Computer
//    Science in the sixth-subject list; Anlage 1 (Stand 26.03.2026) "27 International School of Dusseldorf".
//  - GI Informatik-Monitor 2026/27, NRW: Einführungsphase "dreistündiger Grundkurs"; Qualifikationsphase "dreistündig ...
//    (Grundkurs)" and "fünfstündig ... (Leistungskurs)"; "ist Informatik den naturwissenschaftlichen Fächern nicht
//    gleichgestellt, da es diese nicht ersetzen kann"; written tasks "zentral gestellt", four tasks per set, teacher
//    chooses two (GK) or three (LK); "Der Einsatz eines Computers ist für die Bearbeitung der schriftlich
//    Abituraufgaben nicht vorgesehen."; aids dictionary and "wissenschaftlicher Taschenrechner oder CAS/MMS".
//  - NRW Standardsicherung (FACTS 42): written Abitur 13 April to 5 May 2027.
//  - Destatis (places.tsv): Düsseldorf 618,685; Neuss 154,317; Duisburg 502,270 (31.12.2024). Time: EinhZeitG, SoZV.
//  - Data: Landeshauptstadt Düsseldorf, "Wetterabhängige Jahresübersicht der Dauerzählstellen Radverkehr 2025", via
//    Open.NRW / GovData https://ckan.govdata.de/dataset/wetterabhangige-jahresubersicht-der-dauerzahlstellen-radverkehr-
//    2025, licence Datenlizenz Deutschland Namensnennung 2.0 on every resource; record: "Die Messergebnisse werden im
//    Stunden-Takt erfasst." Resource "Mannesmannufer IN OUT", https://opendata.duesseldorf.de/sites/default/files/
//    Mannesmannufer_IN_OUT_2025.csv, 8,759 data rows, sha256 d0e2d248...4d00fe51, downloaded 3 November 2026. Columns
//    Zeit; Mannesmann Ufer Stadteinwaerts (Ri. Sueden); ... Stadtauswaerts (Ri. Norden); Symbol Wetter; Temperatur;
//    Regen (mm), decimal comma. The missing hour is 30-03-2025 02:00:00.
// Our own calculations (scratchpad de/w/C3/de124/, python3 -I): v1 prints "Hours in the file: 8759", "Label says rain:
// 2122", "Rain measured: 1359", "Label says rain, 0 mm measured: 833", "Sonnig between 00:00 and 03:59: 627"; v1+v2
// print "08:00 wet 182.1 dry 230.0 ratio 0.79", "13:00 wet 128.1 dry 194.1 ratio 0.66", "17:00 wet 202.0 dry 283.6
// ratio 0.71", "21:00 wet 56.5 dry 89.6 ratio 0.63". 70 hours have measured rain under a label without "regen" (mostly
// snow labels: Starker Schneefall 22). "Sonnig": 158 rows at 00:00, 127 at 12:00, 3,283 in all. 1,044,358 crossings.
// Lesson family: when two columns describe the same thing, measure how often they disagree before you pick one.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'rows = []',
  'with open("Mannesmannufer_IN_OUT_2025.csv", encoding="utf-8-sig") as counts:',
  '    reader = csv.reader(counts, delimiter=";")',
  '    next(reader)',
  '    for when, south, north, label, temp, rain in reader:',
  '        rows.append((int(when[11:13]), int(south) + int(north), label, float(rain.replace(",", "."))))',
  '',
  'label_rain = [r for r in rows if "regen" in r[2].lower()]',
  'measured = [r for r in rows if r[3] > 0]',
  'print("Hours in the file:", len(rows))',
  'print("Label says rain:", len(label_rain))',
  'print("Rain measured:", len(measured))',
  'print("Label says rain, 0 mm measured:", len([r for r in label_rain if r[3] == 0]))',
  'print("Sonnig between 00:00 and 03:59:", len([r for r in rows if r[2] == "Sonnig" and r[0] < 4]))'
].join('\n');

const V2 = [
  'def average(values):',
  '    return sum(values) / len(values)',
  '',
  'for hour in [8, 13, 17, 21]:',
  '    wet = [r[1] for r in rows if r[0] == hour and r[3] > 0]',
  '    dry = [r[1] for r in rows if r[0] == hour and r[3] == 0]',
  '    print(f"{hour:02d}:00 wet {average(wet):.1f} dry {average(dry):.1f} ratio {average(wet) / average(dry):.2f}")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'school', label: 'Düsseldorf: international school computing' },
  slug: 'coding-for-international-school-students-dusseldorf',
  code: 'dus',
  accent: '#655637',
  accentRationale: 'Coding for international school students, Düsseldorf: an olive brown #655637, the colour of the Rhine embankment stone in the bike-counter project, unlike the red of the Düsseldorf kids page; contrast 5.80 on the paper #FBF8F2',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding for international school students in Düsseldorf',
  title: 'Coding for International School Students in Düsseldorf',
  description: 'Coding for international school students in Düsseldorf: live IB and MYP computer science in English, how NRW and the KMK rate computing, and a Rhine data project.',
  ogDescription: 'Live online computer science in English for pupils at IB schools around Düsseldorf: MYP and Diploma support, where computing sits in German recognition rules, and a bike-counter project in which two weather columns disagree on 833 hours.',
  twitterDescription: 'IB and MYP computer science for Düsseldorf international school pupils, live in English, with a real Rhine data project.',
  pageName: 'Coding for International School Students in Düsseldorf',
  webPageDescription: 'A guide for families at international schools in the Düsseldorf area to computer science help in English: AGIS context for Nordrhein-Westfalen, the AGIS and KMK reading of the MYP and the IB Diploma, Informatik in the NRW Oberstufe for comparison, and an original project on the city\'s Mannesmannufer bike counter and its weather columns.',
  courseDescription: 'Live online computer science classes in English for pupils at international schools around Düsseldorf: IB Diploma Computer Science, Python for the MYP years and data science, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'International schools, Düsseldorf',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#schools', label: 'Schools' },
    { href: '#recognition', label: 'Recognition' },
    { href: '#project', label: 'Rhine data' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Düsseldorf &middot; International schools &middot; IB MYP and Diploma',
  h1: 'Coding for international school students in Düsseldorf',
  lede: 'Düsseldorf has a large IB school, and the wider Rhine and Ruhr region has several more. Their pupils study computing in English through the IB, not through the Informatik of Nordrhein-Westfalen. This page sets out what the schools list, how German rules read the MYP and the Diploma, where Computer Science fits among the six Diploma subjects, how NRW treats Informatik in its own Oberstufe, which of our live courses suit which stage, and a look at the city\'s Rhine-side bike counter, where the most important step is deciding which of two columns to believe.',
  secondaryCta: { href: '#project', label: 'See the Rhine data project' },
  wa: 'Hello Modern Age Coders, my child is at an international school near Düsseldorf and needs help with computer science. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; IB computer science help in English',
  spec: [
    ['For', 'MYP and Diploma pupils, 13 to 19'],
    ['Courses', 'IB DP Computer Science, Python, data science'],
    ['Code', 'Python or Java, as the school uses'],
    ['Format', 'Group of fifteen to twenty, or one to one'],
    ['Mentors', 'In India, live on video'],
    ['First lesson', 'Free, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding for international school students in Düsseldorf: Modern Age Coders teaches computer science live online in English to pupils at IB schools in and around the city, from Python in the MYP years to IB Diploma Computer Science at SL or HL, with data projects on real city data. Each pupil works with one regular mentor who knows the school\'s programme, alone or in a class of fifteen to twenty.',

  picks: {
    eyebrow: 'Courses by stage',
    h2: 'Three courses for Düsseldorf international school pupils',
    lede: 'One for the Diploma years, one to build solid Python during the MYP, and one for pupils who want to work with real data like the project on this page.',
    items: [
      { course: 'ib-diploma-computer-science-course', code: 'DUS / 01', title: 'IB DP Computer Science', note: 'For SL and HL, starting any month. Both themes of the subject, practice with the case study, programming in the school\'s language, and guidance through the internal assessment.' },
      { course: 'python-complete-masterclass-teens', code: 'DUS / 02', title: 'Python for Teens', note: 'Ages 13 to 18, four to five months, from zero. The base an MYP pupil needs before the Diploma, with projects in place of worksheets.' },
      { course: 'data-science-course-for-teens-python-data', code: 'DUS / 03', title: 'Data Science for Teens', note: 'Ages 14 to 18, six months, basic Python needed. Cleaning, comparing and charting real data, then a first model.' }
    ]
  },

  sections: [
    {
      id: 'schools',
      eyebrow: 'The schools, as context',
      h2: 'Which international schools are there in and around Düsseldorf?',
      lede: 'Everything here about individual schools comes from AGIS, the Arbeitsgemeinschaft der Internationalen Schulen in Deutschland, and serves only to explain what is taught. We have no link with any of them and never present a school as a source of our students.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Three AGIS member schools in Nordrhein-Westfalen, as AGIS lists them', head: ['School', 'Pupils (AGIS)', 'IB programmes (AGIS)'], rows: [
          ['International School of Düsseldorf', '1,000', 'IB Primary Years, IB Middle Years, International Baccalaureate'],
          ['International School Ruhr', '175', 'IB Primary Years, IB Middle Years, IB Diploma Programme'],
          ['Bonn International School', '800', 'IB Primary Years, IB Diploma Programme, IB Middle Years']
        ] },
        { kind: 'source', html: 'Source: the AGIS school directory and its member list for Nordrhein-Westfalen, read 2 November 2026. Pupil numbers are those AGIS publishes. AGIS describes its schools as bringing together children from up to 65 nations and using English as the shared language of teaching.' },
        { kind: 'p', mt: true, html: 'For the city itself, the AGIS entry that matters is the International School of Düsseldorf, which lists the three IB programmes for the primary years, the middle years and the Diploma. A Düsseldorf pupil on that route meets computing first inside the MYP and then, if chosen, as Diploma Computer Science. That is a different path from a pupil at a Düsseldorf Gymnasium, who has compulsory Informatik in Klasse 5 and 6 and then chooses again later.' }
      ]
    },
    {
      id: 'recognition',
      eyebrow: 'German recognition',
      h2: 'How do German rules read the MYP and an IB Diploma with Computer Science?',
      lede: 'Two short answers matter most to families who may stay in Germany. AGIS speaks for the MYP; the Kultusministerkonferenz speaks for the Diploma.',
      body: [
        { kind: 'two',
          leftH3: 'The MYP and the Mittlere Reife',
          left: [
            'AGIS states that member schools offering the Middle Years Programme, or the IGCSE, make sure pupils receive "einen der Mittleren Reife gleichwertigen Abschluss": a qualification equal to the Mittlere Reife, the German intermediate school-leaving certificate.',
            'For a pupil who might later move to a German school or into vocational training, that is the bridge. It does not depend on which subjects the pupil chose in the MYP, so computing in those years can be taken for its own sake.'
          ],
          rightH3: 'Computer Science in the Diploma',
          right: [
            'Under the KMK recognition agreement, a Diploma must include "ein naturwissenschaftliches Fach (Biology, Chemistry, Physics)", and Computer Science appears only as an option for the sixth subject. A pupil who wants German university entry needs a science in addition to Computer Science.',
            'In the agreement\'s Anlage 1 of 26 March 2026, the International School of Dusseldorf is entry 27, one of the schools whose graduates with Mathematics at Standard Level can still receive general university access.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Where computing stands after Klasse 10: IB Diploma against the NRW Oberstufe', head: ['Question', 'IB Diploma (KMK agreement)', 'Informatik in the NRW Oberstufe (Informatik-Monitor)'], rows: [
          ['Can it stand in for a science?', 'No; it may only fill the sixth place', 'No, Informatik cannot replace the natural sciences'],
          ['Hours', 'Set by the IB and the school', 'Einführungsphase three hours; Grundkurs three, Leistungskurs five'],
          ['Written exam', 'Set by the IB', 'Central tasks; four per set, the teacher picks two (GK) or three (LK)'],
          ['Computer in the written exam?', 'As the IB rules state', 'No; dictionary and scientific calculator or CAS only']
        ] },
        { kind: 'source', html: 'Sources: AGIS homepage (MYP and IGCSE equivalence, IB Diploma equivalence with prescribed subject combinations); Kultusministerkonferenz, Vereinbarung über die Anerkennung des IB Diploma (i. d. F. vom 15.06.2023) with Anlage 1 as of 26 March 2026; Informatik-Monitor 2026/27 of the Gesellschaft für Informatik, NRW page. The NRW written Abitur in 2027 runs from 13 April to 5 May 2027. We describe the rules; we give no admissions advice.' },
        { kind: 'p', mt: true, html: 'The interesting point is how similar the two systems are here. Neither lets computing replace a laboratory science, and the NRW written Abitur in Informatik is done on paper, without a computer, with the pupil reading and writing code by hand. A Diploma pupil who practises explaining an algorithm in words and tracing code on paper is preparing for the habits both systems reward.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Live, in English',
      h2: 'How do live lessons in English support an IB pupil?',
      lede: 'The language is the familiar part: IB schools teach in English. What a tutor adds is time, a second explanation, and a steady hand on long projects.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English, like school', p: 'All our lessons are in English; we do not teach in German. Mentors still adapt pace and accent to each pupil, which matters at a school where many pupils speak another language at home.' },
          { h3: 'The programme, not a guess', p: 'MYP design cycles and Diploma assessment are not the same as a German Informatik course or a generic coding class. Our IB course follows the Diploma guide, and one-to-one lessons start from the pupil\'s own school tasks.' },
          { h3: 'The pupil\'s own work', p: 'We never write an internal assessment or any part of it. We teach planning, testing and evaluation, explain published criteria, and teach pupils to check AI suggestions against what their program actually does.' }
        ] },
        { kind: 'p', mt: true, html: 'Our mentors work from India and teach over live video, so a Düsseldorf late afternoon is their evening. A pupil keeps one mentor across the year, which is what makes a long project manageable: the person who helped plan it in September is the one who sees it finished.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A Düsseldorf data project',
      h2: 'Rain on the Rhine promenade: which weather column should you trust?',
      lede: 'Düsseldorf publishes hourly bike counts from its permanent counters together with the weather for each hour. Before asking whether rain keeps cyclists away, an IB pupil must answer a quieter question: the file describes the weather twice, so which description is right?',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Landeshauptstadt Düsseldorf publishes the Wetterabhängige Jahresübersicht der Dauerzählstellen Radverkehr 2025 through Open.NRW with a Datenlizenz Deutschland Namensnennung 2.0 licence, one file per counter, recorded hour by hour. We use the counter at Mannesmannufer on the Rhine, which we fetched on 3 November 2026.',
            'Each row has a time, two direction counts, a weather label such as "Leichter Regenschauer", a temperature, and rain in millimetres written with a decimal comma.'
          ],
          rightH3: 'The question behind the question',
          right: [
            'There are two ways to decide whether an hour was rainy: the label says so, or the millimetre column is above zero. If they agreed, it would not matter which we use. Version 1 counts how often they disagree, and also tests the label against something we know for certain.',
            'Prediction first: how many hours of 2025 should have rain, and should both columns give the same number?'
          ] },
        { kind: 'code', label: 'Version 1: test the two weather columns', lang: 'Python', code: V1, note: 'It prints: <code>Hours in the file: 8759</code>, <code>Label says rain: 2122</code>, <code>Rain measured: 1359</code>, <code>Label says rain, 0 mm measured: 833</code> and <code>Sonnig between 00:00 and 03:59: 627</code>.' },
        { kind: 'p', mt: true, html: 'The two columns disagree badly. On 833 hours the label mentions rain while the gauge shows 0 mm, and 627 hours between midnight and four in the morning are labelled "Sonnig", sunny, which cannot be literally true. The label reads like a general forecast symbol for the hour, "sunny" meaning a clear sky; the millimetre column is a measured amount. Going the other way, 70 hours have measured rain under a label without the word, most of them snow labels, which is fair: snow is precipitation too. For a question about rain, the measured column is the one to use, and the label is better left out.' },
        { kind: 'p', html: 'With that settled, the comparison can be fair in a second way too. Cyclists ride far more at 17:00 than at 03:00 whatever the weather, so Version 2 compares wet and dry hours at the same time of day.' },
        { kind: 'code', label: 'Version 2: wet against dry, hour by hour', lang: 'Python', code: V2, note: 'Run after Version 1. It prints <code>08:00 wet 182.1 dry 230.0 ratio 0.79</code>, <code>13:00 wet 128.1 dry 194.1 ratio 0.66</code>, <code>17:00 wet 202.0 dry 283.6 ratio 0.71</code> and <code>21:00 wet 56.5 dry 89.6 ratio 0.63</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Average bikes per hour at Mannesmannufer in 2025, hours with and without measured rain (our calculation)', head: ['Hour', 'Rain measured', 'No rain', 'Ratio'], rows: [
          ['08:00', '182.1', '230.0', '0.79'],
          ['13:00', '128.1', '194.1', '0.66'],
          ['17:00', '202.0', '283.6', '0.71'],
          ['21:00', '56.5', '89.6', '0.63']
        ] },
        { kind: 'source', html: 'Data: Landeshauptstadt Düsseldorf, Wetterabhängige Jahresübersicht der Dauerzählstellen Radverkehr 2025, file Mannesmannufer IN OUT, licence DL-DE BY 2.0, retrieved 3 November 2026. The file has 8,759 hourly rows; the hour that does not exist is 02:00 on 30 March 2025, when the clocks went forward. The comparisons, averages and ratios are ours, with both directions added together.' },
        { kind: 'p', mt: true, html: 'At every hour we checked, rainy hours carry clearly fewer bikes, roughly two thirds to four fifths of the dry-hour level, and the morning commute at 08:00 holds up best. That is a correlation in one year at one counter, not proof of why; a pupil writing it up should say so, and should report that the weather label was tested and set aside.' },
        { kind: 'ol', mt: true, items: [
          '<strong>MYP.</strong> List three facts you know for certain about any weather data (no sun at midnight, snow is cold) and write one check for each.',
          '<strong>Diploma, SL.</strong> Rewrite Version 1 so it reports every label with how many of its hours had 0 mm, sorted by the share. Which labels are most often wrong?',
          '<strong>Diploma, HL.</strong> Repeat Version 2 for all 24 hours and plot the ratio. Is the morning commute really different, or is it the noise of a small sample?',
          '<strong>Going further.</strong> Download a second counter from the same dataset. Do the two files carry identical weather columns, and what would that tell you about where the weather comes from?'
        ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Lesson times',
      h2: 'When are lessons in Düsseldorf time?',
      lede: 'Teenagers usually pick a late-afternoon weekday slot or a weekend afternoon, with extra sessions before an assessment deadline.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Düsseldorf times for teenage pupils, with the India clock', head: ['Düsseldorf', 'India, winter (to 28 March 2027)', 'India, summer (from 28 March 2027)'], rows: [
          ['17:35', '22:05', '21:05'],
          ['Saturday 14:20', '18:50', '17:50'],
          ['Sunday 16:25', '20:55', '19:55']
        ] },
        { kind: 'source', html: 'Time in Germany follows the Einheitenzeitgesetz: UTC+1 in winter, UTC+2 in summer. Summer time ended on 25 October 2026 and begins again on 28 March 2027, while India stays at UTC+5:30, giving a gap of four and a half hours now and three and a half after the change. The rows are examples only.' },
        { kind: 'p', mt: true, html: 'Lessons run all year, including the school breaks, which at an international school may not match the NRW holiday calendar. Before a deadline a pupil can add sessions, then return to the usual rhythm.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Our checkpoints',
    h2: 'What an IB pupil should manage at each stage',
    lede: 'Our own checkpoints for pupils on the IB route, used to place a pupil and to plan the year with the family.',
    table: { caption: 'Computing checkpoints from the MYP to the Diploma (ours)', head: ['Stage', 'Checkpoint', 'Typical sign that help is needed'], rows: [
      ['MYP 1 to 3', 'Write and test short Python programs with loops and lists', 'Copies code that works without being able to change it'],
      ['MYP 4 and 5', 'Design, build and evaluate a small product of their own', 'Testing left to the last day'],
      ['Diploma year 1', 'Functions, data structures and reading unfamiliar code', 'Freezes when the problem is worded differently'],
      ['Diploma year 2', 'A finished internal assessment and steady exam technique', 'Evaluation that only describes, never judges'],
      ['Any stage', 'Checks data before analysing it', 'Trusts the first column with the right name']
    ] },
    left: { h3: 'For parents', ps: [
      'The last row is the Rhine project. A pupil who tests a column before using it is thinking like an analyst, which is exactly what an internal assessment rewards.',
      'We report skills gained and work done, never predicted grades.'
    ] },
    right: { h3: 'For pupils', ps: [
      'When two columns describe one thing, count how often they disagree.',
      'Trust a measurement over a label, and say why in your write-up.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for teenagers',
    h2: 'Nine more courses for Düsseldorf teenagers',
    lede: 'Live lessons in English for every one of them, with the same mentor throughout.',
    bands: [
      { num: 'I', h3: 'Other exam routes', sub: 'Ages 14 to 19', courses: [
        { code: 'DUS / EXAM / 01', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science', blurb: 'Cambridge 0478 for pupils on that route.' },
        { code: 'DUS / EXAM / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java and the AP free-response questions.' },
        { code: 'DUS / EXAM / 03', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'For pupils who switch to a German Oberstufe.' }
      ] },
      { num: 'II', h3: 'Core skills', sub: 'Ages 13 to 18', courses: [
        { code: 'DUS / CORE / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'For Diploma pupils whose school uses Java.' },
        { code: 'DUS / CORE / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms for teens', blurb: 'Searching, sorting and data structures.' },
        { code: 'DUS / CORE / 03', slug: 'mysql-mastery-for-teens', title: 'SQL for teens', blurb: 'Databases from a first query upwards.' }
      ] },
      { num: 'III', h3: 'Further', sub: 'Ages 13 to 18', courses: [
        { code: 'DUS / MORE / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models built and tested in Python.' },
        { code: 'DUS / MORE / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest problems for confident coders.' },
        { code: 'DUS / MORE / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub', blurb: 'Version control for long projects.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'How lessons fit an IB school week in Düsseldorf',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Late afternoon', l: 'After the school day in Düsseldorf.' },
      { time: 'Weekends', l: 'Longer blocks for projects and practice papers.' },
      { time: '1-on-1', l: 'Around the pupil\'s own deadlines.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'From the first plan to the final draft.' },
      { h3: 'IB-aware', p: 'MYP and Diploma expectations kept apart.' },
      { h3: 'Python or Java', p: 'The language the school uses.' },
      { h3: 'Honest help', p: 'Skills taught, coursework left to the pupil.' },
      { h3: 'Paper skills', p: 'Tracing and explaining code by hand.' },
      { h3: 'Two formats', p: 'A class of fifteen to twenty, or private lessons.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'Teenagers who learn properly end up shipping real work. A selection of student projects follows; the <a class="ag-inline-link" href="/student-labs">student labs</a> page holds many more.',
  reviewsLede: 'Reviews left on Google by parents and students, unchanged.',

  fees: {
    h2: 'Fees for Düsseldorf families',
    lede: 'A month of eight live lessons is billed at once. For orientation the price is shown in euro, calculated from the European Central Bank reference rate; the payment is processed in US dollars and converted by your bank, so the euro figure on your statement can vary slightly.',
    free: ['A free first lesson', 'A look at a current school task', 'No card needed'],
    group: ['Fifteen to twenty pupils at the same stage', 'One regular mentor', 'Two lessons a week', 'Monthly, cancel any month'],
    one: ['The pupil and one mentor', 'Built around school deadlines', 'Times agreed with you']
  },

  faq: {
    eyebrow: 'Families ask',
    h2: 'Computer science help for Düsseldorf international school pupils: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons are live and in English only, the same language as an IB school. Each mentor tunes speed and accent to the learner, which helps the many IB pupils who grew up with another home language.' },
      { q: 'Do you cover the MYP as well as the Diploma?', a: 'Yes. In the MYP years we build programming skill, usually in Python, and support design work; in the Diploma, our IB DP Computer Science course covers SL and HL. One-to-one lessons work from the pupil\'s own school tasks.' },
      { q: 'Does the MYP count as a German qualification?', a: 'AGIS states that member schools offering the MYP or the IGCSE make sure pupils receive a qualification equivalent to the Mittlere Reife. For an individual case, ask the school; we describe the published position and give no advice on recognition.' },
      { q: 'Does IB Computer Science count as the science subject in Germany?', a: 'No. The KMK agreement on the IB Diploma requires Biology, Chemistry or Physics among the six subjects; Computer Science is allowed only in the sixth slot. In the NRW Oberstufe, too, Informatik cannot replace the natural sciences.' },
      { q: 'Will you write or correct my child\'s internal assessment?', a: 'We never write any part of it. We teach planning, testing and evaluation, explain the published criteria and give feedback on understanding, but the product, the code and the write-up remain the pupil\'s own.' },
      { q: 'When are lessons in Düsseldorf time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A late-afternoon weekday slot or a weekend afternoon suits many IB pupils.' },
      { q: 'Is the written Informatik Abitur in NRW taken on a computer?', a: 'No. According to the Informatik-Monitor 2026/27, a computer is not used for the written Informatik Abitur in NRW; the tasks are set centrally and pupils may use a dictionary and a scientific calculator or CAS.' },
      { q: 'Where are the mentors based?', a: 'In India. They teach live over video, so 17:35 in Düsseldorf is 22:05 for the mentor in winter and 21:05 in summer. One mentor stays with the pupil for the whole year.' },
      { q: 'How are fees charged, and in which currency?', a: 'Once a month. This page converts the price to euro with the European Central Bank reference rate for display; the charge itself goes through in US dollars, and your bank applies its own conversion. A trial lesson comes first, free of charge and without card details.' },
      { q: 'Are you connected with the International School of Düsseldorf?', a: 'No. We follow the published IB programme the school lists, and we mention the school here only as context, from the AGIS directory. We have no link with it or with any other school.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for IB families in Germany.',
    items: [
      { href: '/coding-for-international-school-students-germany', label: 'International schools across Germany', p: 'The national picture, region by region.' },
      { href: '/ib-computer-science-tutor-germany', label: 'IB Computer Science tutor', p: 'The Diploma subject in more detail.' },
      { href: '/igcse-computer-science-tutor-germany', label: 'IGCSE Computer Science tutor', p: 'For pupils on the Cambridge route.' },
      { href: '/ap-computer-science-tutor-germany', label: 'AP Computer Science tutor', p: 'Java and the AP exams, for schools that offer them.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'NRW school rules for the whole Land.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every Germany page in one place.' }
    ]
  },

  start: {
    h2: 'Start with a free lesson',
    lede: 'Bring a design task, a past paper or code that misbehaves. Together with the pupil, the mentor looks for the exact point where it stops making sense, then suggests a course and whether group or private lessons fit better.',
    readFirst: 'For more detail first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a live lesson, and <a class="ag-inline-link" href="/courses">all courses</a> sets out every syllabus.',
    note: 'Lessons are given live online by mentors in India, in English only. WhatsApp reaches us fastest.',
    formNote: 'Free, without a card or any commitment.'
  },

  footer: {
    cols: [
      { h4: 'IB route', links: [
        { href: '/courses/ib-diploma-computer-science-course', label: 'IB Computer Science' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/courses/data-science-course-for-teens-python-data', label: 'Data science for teens' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-for-international-school-students-germany', label: 'International schools' },
        { href: '/ib-computer-science-tutor-germany', label: 'IB CS tutor' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Two columns, one truth: test them'
  },

  personalityCss: `
.ag-root.ag-dus .ag-hero h1 { letter-spacing: -0.009em; }
.ag-root.ag-dus .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-dus .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-dus .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-dus .ag-table td { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'AGIS homepage, directory and NRW member list; Kultusministerkonferenz, IB Diploma recognition agreement (i. d. F. vom 15.06.2023), Anlage 1 Stand 26.03.2026; Gesellschaft für Informatik, Informatik-Monitor 2026/27, NRW; NRW Standardsicherung, Abitur 2027 dates; Einheitenzeitgesetz. Data: Landeshauptstadt Düsseldorf, Wetterabhängige Jahresübersicht der Dauerzählstellen Radverkehr 2025, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'The Rhine data project: an original Python project on the 2025 hourly counts at the Mannesmannufer bike counter; the weather label says rain on 2,122 hours, the gauge on 1,359, the label says rain with 0 mm on 833 hours, and 627 night hours are labelled sunny, so the measured column is chosen; wet against dry at the same hour gives ratios from 0.63 to 0.79. Lesson family: when two columns describe one thing, measure their disagreement before choosing.',
    requiredMentions: ['Mannesmannufer_IN_OUT_2025.csv', 'Label says rain: 2122', 'Label says rain, 0 mm measured: 833', 'Sonnig between 00:00 and 03:59: 627', '17:00 wet 202.0 dry 283.6 ratio 0.71', 'International School of Dusseldorf is entry 27', 'einen der Mittleren Reife gleichwertigen', 'Two columns, one truth: test them'],
    sources: [
      { claim: 'International School of Düsseldorf, programmes and pupils listed.', url: 'https://www.agis-schools.org/school/international-school-of-dusseldorf' },
      { claim: 'AGIS: MYP or IGCSE equivalent to the Mittlere Reife; 65 nations; English as shared language.', url: 'https://www.agis-schools.org/' },
      { claim: 'KMK IB agreement: science requirement, Computer Science sixth subject, Anlage 1.', url: 'https://www.kmk.org/fileadmin/veroeffentlichungen_beschluesse/1986/1986_03_10-Vereinbarung-Baccalaureate-Dipl_2023_06_15.pdf' },
      { claim: 'NRW Oberstufe Informatik: hours, no replacement of sciences, central written Abitur without a computer.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Düsseldorf weather-linked bike counts 2025 and licence.', url: 'https://ckan.govdata.de/dataset/wetterabhangige-jahresubersicht-der-dauerzahlstellen-radverkehr-2025' }
    ],
    rejectedClaims: [
      'Where the weather columns come from: not stated in the record, so the page offers it as a question for pupils.',
      'Any IB syllabus detail from ibo.org: blocked by a Cloudflare challenge; none used.',
      'Naming any school as a source of our students, or a link with a school: refused.',
      'Recognition or admissions advice for an individual pupil: refused; published positions only.'
    ]
  }
};
