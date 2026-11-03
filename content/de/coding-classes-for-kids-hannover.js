'use strict';
// Coding classes for kids in Hannover (ag- city door, Germany cluster P5 row DE137, alloc code cha, accent #562B42).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent.
// Spine: Lower Saxony made Informatik compulsory, but only in grades 9 and 10 (since 2024/25). For a Hannover child of 6
// to 12 the compulsory subject is three to eight years away; electives exist from grade 6 at some school types. The page
// covers that long wait, the Känguru der Mathematik on 8 April 2027, and a data project on Hannover's first autumn frost.
// Data note (opendata.tsv row 14 recorded a GAP for a city dataset): the Landeshauptstadt publishes CC BY 4.0 files on
// Open GeoData (a street directory, used by the Land page and by our German Hannover page), but no table suited to a
// children's question with a time series. We use a federal dataset for the Hannover weather station instead and say so.
// Sources (read raw; quotes in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched 2 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Niedersachsen page (infmon-niedersachsen/96603f73.txt; facts 50, 79): "An allen
//    allgemeinbildenden Schularten wird seit dem Schuljahr 2024/25 das Pflichtfach Informatik in den Jahrgangsstufen 9 und
//    10 unterrichtet."; Hauptschule, Realschule, Oberschule "in den Jahrgangsstufen 6 bis 10 ein zweistündiges
//    Wahlpflichtfach Informatik"; KGS "ab Jahrgangsstufe 7"; IGS "ab Jahrgangsstufe 6"; Gymnasium "zweistündiges Wahlfach
//    Informatik" (Stundentafel 1); "Die Primarstufe umfasst die Grundschule mit den Jahrgangsstufen 1 bis 4."; five Sek I
//    school types; Oberstufe G9, grade 11 Einführungsphase, 12 and 13 Qualifikationsphase; written Abitur set centrally.
//  - GI national page (fact 99): Baden-Württemberg, Niedersachsen and Bremen, "ungefähr jede zwölfte Person".
//  - Känguru der Mathematik (facts 183 to 186): 2027 "ausnahmsweise erst im April statt, und zwar am 8. April 2027";
//    "Online-Anmeldung: ab 01.12.2026 Anmeldeschluss: 31.01.2027"; 2026 "Über 920.000 Schülerinnen und Schüler aus mehr als
//    13.000 Schulen"; 75 minutes, 24 tasks for grades 3/4 and 5/6, 30 tasks from grade 7.
//  - AGIS directory (fact 233): International School Hannover Region lists IB PYP, MYP and Diploma.
//  - KMK FER2026_27.pdf (fact 277): "Niedersachsen 12.10. - 24.10. 23.12. - 09.01. 01.02. - 02.02. 22.03. - 03.04. 07.05.
//    und 18.05. 08.07. - 18.08."
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Hannover 522,131; Niedersachsen 8,004,489.
//  - Time: Einheitenzeitgesetz; summer time ended 25 Oct 2026, starts 28 Mar 2027; India UTC+5:30.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate observations (KL), station 02014 "Hannover",
//    tageswerte_KL_02014_19360101_20251231_hist.zip from
//    https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/ (825,040 bytes,
//    sha256 da4ac8ce...511f6cdf6; product file produkt_klima_tag_19360101_20251231_02014.txt, "generiert: 17.06.2026",
//    31,779 lines). Terms_of_use.txt: "The Creative Commons BY 4.0 - Licence "CC BY 4.0" apply." Station metadata: 55.24 m,
//    52.4644 N, 9.6779 E since 25 Apr 2002; operator DWD since 11 Nov 1952. Years 1941, 1942 and 1945 are absent from the
//    file. DWD Wetterlexikon: "Ein Frosttag ist ein Tag, an dem das Minimum der Lufttemperatur unterhalb des
//    Gefrierpunktes (0 °C ) liegt". TNK = daily minimum air temperature at 2 m. Downloaded 3 Nov 2026.
// Our own calculations (scratchpad de/w/C5/ha/v1.py, v2.py; python3 -I, run in the data folder):
//  v1: "Autumns found: 87", "Earliest: 1977-09-19", "Latest: 2000-12-18".
//  v1+v2 adds "1950s: 10 autumns, first frost around 21 October", "1980s: 10 autumns, first frost around 02 November",
//  "2010s: 10 autumns, first frost around 27 October". All decades: 1950s 21 Oct, 1960s 21 Oct, 1970s 12 Oct, 1980s 2 Nov,
//  1990s 24 Oct, 2000s 1 Nov, 2010s 27 Oct, 2020s (2020 to 2025, six autumns) 13 Nov. September first frosts: 1936, 1939,
//  1969, 1977, 1979.
// Lesson family: find the first time something happens (stop at the first match), then turn dates into day numbers to
// compare them.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv, datetime',
  '',
  'first_frost = {}',
  'readings = open("hannover_tag.txt", encoding="latin-1")',
  'for day_row in csv.DictReader(readings, delimiter=";", skipinitialspace=True):',
  '    day = datetime.datetime.strptime(day_row["MESS_DATUM"], "%Y%m%d").date()',
  '    if day.month < 7 or day.year in first_frost:',
  '        continue                      # spring, or this autumn is already done',
  '    if float(day_row["TNK"]) < 0:',
  '        first_frost[day.year] = day   # the first frosty night after 1 July',
  '',
  'print("Autumns found:", len(first_frost))',
  'print("Earliest:", min(first_frost.values(), key=lambda d: (d.month, d.day)))',
  'print("Latest:", max(first_frost.values(), key=lambda d: (d.month, d.day)))'
].join('\n');

const V2 = [
  'def days_after_june(d):',
  '    return (d - datetime.date(d.year, 6, 30)).days',
  '',
  'for start in (1950, 1980, 2010):',
  '    years = [y for y in first_frost if start <= y < start + 10]',
  '    mean = sum(days_after_june(first_frost[y]) for y in years) / len(years)',
  '    typical = datetime.date(2026, 6, 30) + datetime.timedelta(days=round(mean))',
  '    print(str(start) + "s:", len(years), "autumns, first frost around", typical.strftime("%d %B"))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Hannover: coding for kids' },
  slug: 'coding-classes-for-kids-hannover',
  code: 'cha',
  accent: '#562B42',
  accentRationale: 'Coding classes for kids, Hannover: a dark aubergine #562B42, a winter colour for a page about the first frost; contrast 9.37 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-lower-saxony', name: 'Lower Saxony' }],
  routeLabel: 'Coding classes for kids in Hannover',
  title: 'Coding Classes for Kids in Hannover: Live Online in English',
  description: 'Coding classes for kids in Hannover aged 6 to 12, live online in English: why Informatik waits until grade 9, Känguru 2027 and a project on the first autumn frost.',
  ogDescription: 'Live online coding in English for Hannover children aged 6 to 12: Lower Saxony teaches compulsory Informatik only in grades 9 and 10, the Känguru maths contest moves to 8 April 2027, and a Python project finds the first frost of every autumn since 1936.',
  twitterDescription: 'Coding for Hannover kids, live in English: Informatik from grade 9, Känguru 2027 and a first-frost data project.',
  pageName: 'Coding Classes for Kids in Hannover',
  webPageDescription: 'A guide for Hannover parents of children aged 6 to 12: when Lower Saxony teaches Informatik and which electives come earlier, from the GI Informatik-Monitor 2026/27, the Känguru der Mathematik dates for 2027, and an original Python project on the Deutscher Wetterdienst daily records for the Hannover station.',
  courseDescription: 'Live online coding classes in English for children in Hannover aged 6 to 12: blocks and Scratch at first, typed Python and small AI and data projects later, in groups of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Hannover',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#lower-saxony', label: 'Lower Saxony' },
    { href: '#frost', label: 'Frost' },
    { href: '#kaenguru', label: 'Känguru' },
    { href: '#hannover-times', label: 'Times' }
  ],
  eyebrow: 'Hannover &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Hannover',
  lede: 'Lower Saxony made Informatik a compulsory subject in 2024, but only for grades 9 and 10. A Hannover child who is seven today will be about fourteen before every school must teach them computing. Some school types offer an elective from grade 6, and that is all. This page sets out the Lower Saxony rules, how our live classes in English give children from 6 to 12 a start of their own, a big maths contest that moves to April in 2027, and a project in which children find the first frost of every Hannover autumn since 1936.',
  secondaryCta: { href: '#frost', label: 'See the frost project' },
  wa: 'Hello Modern Age Coders, we live in Hannover and our child would like to learn coding in English. Can we book a free first class?',
  heroNote: 'Online and live since 2020 &middot; over 10,000 students taught &middot; English-language lessons for Hannover children',
  spec: [
    ['Ages', '6 to 12'],
    ['Begin with', 'Blocks and Scratch'],
    ['Move to', 'Typed Python and data'],
    ['Groups', 'Fifteen to twenty, or 1-on-1'],
    ['Mentors', 'Based in India, live'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'At a glance',
  capsule: 'Modern Age Coders gives Hannover children aged 6 to 12 coding classes that are live, online and in English: Scratch to begin, then Python the child types, with small data and AI projects in our Python and AI for Kids course. A mentor adapts the pace and accent to your child, in a group of fifteen to twenty or alone. In Lower Saxony compulsory Informatik only starts in grade 9, so these years are open.',

  picks: {
    eyebrow: 'Good places to begin',
    h2: 'Three courses for children in Hannover aged 6 to 12',
    lede: 'A long all-round course for the first years, the Python course that most children join at about nine, and a short course on how AI works, written for children.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CHA / 01', title: 'Coding for Kids, first years', note: 'Six to twelve, in batches by age. Story and game projects in Scratch, then simple apps, building a habit of making things rather than watching them.' },
      { course: 'python-ai-kids-masterclass', code: 'CHA / 02', title: 'Python and AI for Kids', note: 'For children of about nine and over: Python typed from the first week, drawings and games, then data projects like the frost record on this page.' },
      { course: 'ai-literacy-for-kids-course', code: 'CHA / 03', title: 'AI Literacy for Kids', note: 'Ages 8 to 14, about four months. What AI can and cannot do, explained without adult chatbot accounts.' }
    ]
  },

  sections: [
    {
      id: 'lower-saxony',
      eyebrow: 'School in Lower Saxony',
      h2: 'When do Hannover children get Informatik at school?',
      lede: 'Compulsory Informatik arrives in grade 9. Before that it depends on the school type and on what a child chooses. The details come from the GI Informatik-Monitor 2026/27.',
      body: [
        { kind: 'two',
          leftH3: 'The compulsory part',
          left: [
            'Since the school year 2024/25, the monitor says, Informatik has been taught as a compulsory subject in grades 9 and 10 at every general school type in Lower Saxony. That is a real step, but it comes late: in a G9 system, where the Oberstufe begins with the Einführungsphase in grade 11, grades 9 and 10 are the last years of Sekundarstufe I.',
            'Grundschule covers grades 1 to 4, and there is no Informatik subject there.'
          ],
          rightH3: 'Earlier, if chosen',
          right: [
            'At a Hauptschule, Realschule or Oberschule, a two-hour Informatik elective can be offered from grade 6. An integrated Gesamtschule can offer it from grade 6 and a cooperative one from grade 7. At a Gymnasium without a profile, Informatik is an optional two-hour subject; Gymnasien with a profile timetable can run it as an elective from grade 8.',
            'Whether any of this exists at your child\'s school is a question for the school.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik in Lower Saxony by grade, 2026/27', head: ['Grades', 'Who gets it', 'Form'], rows: [
          ['1 to 4', 'Nobody', 'No Informatik subject in Grundschule'],
          ['6 to 8', 'Pupils who choose it, where offered', 'Two-hour elective at Haupt-, Real- and Oberschule; from grade 7 at a KGS'],
          ['9 and 10', 'Every pupil', 'Compulsory Informatik at all general school types since 2024/25'],
          ['11', 'Oberstufe pupils who choose it', 'Elective in the Einführungsphase'],
          ['12 and 13', 'Oberstufe pupils who choose it', 'Courses at basic or raised level; written Abitur set centrally']
        ] },
        { kind: 'source', html: 'Source: GI Informatik-Monitor 2026/27, national comparison and Niedersachsen page, read 2 November 2026. Lower Saxony has five Sekundarstufe I school types: Hauptschule, Realschule, Oberschule, Gesamtschule and Gymnasium. The GI counts it among the Länder where only about one Oberstufe learner in twelve takes Informatik.' },
        { kind: 'p', mt: true, html: 'For a family with a primary-age child this is a long runway. A child of eight has five years before the first guaranteed Informatik lesson, which is plenty of time to discover whether they enjoy building programs, and to arrive in grade 9 able to help the person sitting next to them.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Lessons in English',
      h2: 'Why are the classes in English, and does it work for young children?',
      lede: 'We teach live and only in English, and the method is designed around children who are still learning it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English is the only option', p: 'We have no German groups and we say so at the start. Hannover also has international schools, such as the International School Hannover Region, listed in the AGIS directory with the IB programmes; for children at German schools the English lessons double as practice.' },
          { h3: 'The mentor adjusts', p: 'Sentences are kept short, new words come one at a time, and the same instruction is always phrased the same way. The mentor adapts speed and accent to the child and learns to understand the child\'s English in return.' },
          { h3: 'The code is English already', p: 'Python is written with English words such as if, for, print and while. A child who learns them in an English lesson is learning the language and the programming at the same moment.' }
        ] },
        { kind: 'p', mt: true, html: 'Mentors are based in India and teach over live video, so their evening falls in a Hannover afternoon. Each group keeps its mentor, and within a few weeks that mentor knows which children want harder puzzles and which need a calm moment before they answer.' }
      ]
    },
    {
      id: 'frost',
      tint: 'tint',
      eyebrow: 'A real Hannover project',
      h2: 'When does Hannover get its first frost? Ninety years of weather in a few lines of Python',
      lede: 'The German weather service has measured the temperature at its Hannover station every day for decades and publishes the whole record for free reuse. Children use it to find the first frosty night of each autumn, and learn how a program can stop looking once it has found what it wants.',
      body: [
        { kind: 'two',
          leftH3: 'The data, and why it is not from the city',
          left: [
            'The Landeshauptstadt Hannover publishes maps and lists as open data, but no daily record that suits a question like this one. The Deutscher Wetterdienst (DWD) does: its Climate Data Center offers the daily observations of station 2014, "Hannover", under the Creative Commons BY 4.0 licence. We downloaded the file on 3 November 2026.',
            'It has one line per day from 1 January 1936 to 31 December 2025, with a gap for 1941, 1942 and 1945, years that are missing from the file entirely. The column TNK holds the lowest air temperature of the day, measured 2 metres above the ground.'
          ],
          rightH3: 'The question',
          right: [
            'The DWD calls a day a Frosttag when the minimum temperature falls below 0 °C. So: on which date did each autumn bring its first frosty night, and has that date moved since the 1950s?',
            'A child\'s first idea is to look at every day and remember the frosty ones. The better idea is to stop looking for a year as soon as its first frost is found.'
          ] },
        { kind: 'code', label: 'Version 1: the first frost of every autumn', lang: 'Python', code: V1, note: 'Our program. It prints <code>Autumns found: 87</code>, <code>Earliest: 1977-09-19</code> and <code>Latest: 2000-12-18</code>.' },
        { kind: 'p', mt: true, html: 'The line <code>day.year in first_frost</code> does the stopping: once a year has its first frost, every later day of that year is skipped. The program finds 87 autumns, which is the 90 years from 1936 to 2025 minus the three missing ones, and a good check that nothing has gone astray. The earliest first frost came on 19 September 1977; the latest waited until 18 December 2000.' },
        { kind: 'p', html: 'Comparing decades needs one more idea. Dates do not average well as text, so Version 2 turns each date into a number of days after 30 June, averages those numbers, and turns the result back into a date.' },
        { kind: 'code', label: 'Version 2: the typical date in three decades', lang: 'Python', code: V2, note: 'Our program, run after Version 1. It adds <code>1950s: 10 autumns, first frost around 21 October</code>, <code>1980s: 10 autumns, first frost around 02 November</code> and <code>2010s: 10 autumns, first frost around 27 October</code>.' },
        { kind: 'p', html: 'Here comes the lesson children remember. In this record the 1980s had a later typical first frost than the 2010s. If you only compared those two decades you might say the frost is coming earlier. With every decade side by side, as in the table, the pattern looks different again. Ten autumns are a small sample, single years jump around by weeks, and a careful scientist looks at the whole series before saying what it shows.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Typical date of the first autumn frost at the DWD Hannover station, by decade (our calculation)', head: ['Decade', 'Autumns in the file', 'First frost around'], rows: [
          ['1950s', '10', '21 October'],
          ['1960s', '10', '21 October'],
          ['1970s', '10', '12 October'],
          ['1980s', '10', '2 November'],
          ['1990s', '10', '24 October'],
          ['2000s', '10', '1 November'],
          ['2010s', '10', '27 October'],
          ['2020 to 2025', '6', '13 November']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, daily climate data (KL) for station 2014 Hannover, licence CC BY 4.0, downloaded 3 November 2026. "First frost" is our choice: the first day on or after 1 July with a minimum air temperature below 0 °C, following the DWD definition of a Frosttag. Averages and dates are ours. September first frosts appear in 1936, 1939, 1969, 1977 and 1979.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, at the window.</strong> From October, check the car roofs or the grass each morning and mark the first white morning on a calendar. That is your own first-frost record.',
          '<strong>Ages 8 to 10, in Scratch.</strong> Make a list of ten temperatures and let a sprite say the position of the first one below zero, then stop. Add a "stop this script" block and see why it matters.',
          '<strong>Ages 10 to 12, in Python.</strong> Run Version 1, then change it to find the last frost of each spring instead. Hint: you can no longer stop at the first match.',
          '<strong>Going further.</strong> Add the 1960s, 1970s, 1990s and 2000s to Version 2 and rebuild the table above. Then count, for each decade, how many autumns had their first frost in September.'
        ] }
      ]
    },
    {
      id: 'kaenguru',
      eyebrow: 'A maths contest for primary pupils',
      h2: 'When is the Känguru der Mathematik in 2027?',
      lede: 'On 8 April 2027, which is unusual. The contest normally falls on the third Thursday in March, but in 2027 that date sits just before the Easter holidays in almost every Land, so the organisers moved it.',
      body: [
        { kind: 'two',
          leftH3: 'What it is',
          left: [
            'The Känguru der Mathematik is a multiple-choice maths contest, normally held on the same day in all participating countries. In 2026 more than 920,000 pupils from over 13,000 schools in Germany took part.',
            'Everyone works alone for 75 minutes. Grades 3 and 4, and grades 5 and 6, each get 24 problems; from grade 7 there are 30.'
          ],
          rightH3: 'How to enter',
          right: [
            'Online registration opens on 1 December 2026 and closes on 31 January 2027. The 2026 figures speak of more than 13,000 schools, so children normally take part through their school: ask the class teacher in December.',
            'In Lower Saxony the Easter holidays in 2027 run from 22 March to 3 April, so the contest falls in the first week back.'
          ] },
        { kind: 'p', mt: true, html: 'We have no connection with the Känguru organisers and do not reuse their problems. The thinking it rewards is the thinking in the frost project: read the question slowly, notice the one detail that changes the answer, and check before you commit.' }
      ]
    },
    {
      id: 'hannover-times',
      eyebrow: 'Times',
      h2: 'What time are classes in Hannover?',
      lede: 'After school on weekdays and in the mornings at weekends. Booking shows you Hannover time; the mentor sees the same slot in India time.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example Hannover times and the same moment in India', head: ['Hannover', 'India in winter (to 28 March 2027)', 'India in summer (from 28 March 2027)'], rows: [
          ['15:20', '19:50', '18:50'],
          ['17:10', '21:40', '20:40'],
          ['Saturday 11:40', '16:10', '15:10']
        ] },
        { kind: 'source', html: 'Time in Germany is fixed by the Einheitenzeitgesetz: MEZ (UTC+1) in winter and MESZ (UTC+2) in summer. The most recent change was on 25 October 2026 and the next is on 28 March 2027. India keeps one time all year, UTC+5:30, so it is ahead of Hannover by four and a half hours until the spring change and by three and a half afterwards. Example times only.' },
        { kind: 'p', mt: true, html: 'The KMK holiday table for Lower Saxony in 2026 to 2027: Christmas from 23 December 2026 to 9 January 2027, winter days on 1 and 2 February, Easter from 22 March to 3 April, single days on 7 and 18 May, and summer from 8 July to 18 August 2027. Lessons keep going through the holidays. Children from Langenhagen, Laatzen, Garbsen or anywhere in the Region Hannover join the same groups.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'How a Hannover child progresses from 6 to 12',
    lede: 'Five stages of our own. They decide which group a child joins and give parents a clear picture of progress.',
    table: { caption: 'Our progression for ages 6 to 12', head: ['Stage', 'Usual age', 'The child can'], rows: [
      ['1. Order', '6 to 7', 'Put actions in the right order to reach a goal'],
      ['2. Loop', '7 to 9', 'Repeat actions and stop a loop on a condition'],
      ['3. Remember', '8 to 10', 'Store values in variables and lists'],
      ['4. Write', '9 to 11', 'Type Python with if and for and read its output'],
      ['5. Search', '10 to 12', 'Search a long real record and stop at the first match']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the frost project. Searching a record efficiently is an idea the school Informatik course meets again in grades 9 and 10.',
      'Our updates say what your child built and explained.'
    ] },
    right: { h3: 'For children', ps: [
      'Found what you were looking for? Then stop looking.',
      'Ten years of weather is not enough to know the climate. Look at all of it.'
    ] }
  },

  catalogue: {
    eyebrow: 'More choices',
    h2: 'Nine more courses for Hannover children',
    lede: 'Every one is live in English and can be taken in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Foundations', sub: 'Ages 6 to 12', courses: [
        { code: 'CHA / BASE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch from scratch', blurb: 'A full block-coding course ending in games.' },
        { code: 'CHA / BASE / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and Readiness', blurb: 'Logic and patterns, ages 6 to 9.' },
        { code: 'CHA / BASE / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Plans, patterns and step-by-step solutions.' }
      ] },
      { num: 'II', h3: 'Games and apps', sub: 'Ages 7 to 14', courses: [
        { code: 'CHA / APP / 01', slug: 'block-coding-app-development-masterclass', title: 'Apps for kids', blurb: 'Block-built phone apps, 8 to 12.' },
        { code: 'CHA / APP / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox in Luau', blurb: 'Scripting real games, 8 to 14.' },
        { code: 'CHA / APP / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'From blocks to typed code, 7 to 12.' }
      ] },
      { num: 'III', h3: 'Maths and contests', sub: 'Ages 8 to 18', courses: [
        { code: 'CHA / MATH / 01', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Känguru and Olympiad', blurb: 'Contest maths in English, by Klassenstufe.' },
        { code: 'CHA / MATH / 02', slug: 'maths-through-coding', title: 'Maths through code', blurb: 'Python for school maths, 10 to 15.' },
        { code: 'CHA / MATH / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatik contests', blurb: 'Biber and Jugendwettbewerb style, with our own problems.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Format',
    h2: 'What the classes look like for a Hannover family',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'After school', l: 'Afternoon slots in Hannover on school days.' },
      { time: 'Weekends', l: 'Saturday and Sunday mornings.' },
      { time: '1-on-1', l: 'A regular time you agree with us.' }
    ],
    cells: [
      { h3: 'Two per week', p: 'Two live lessons, roughly an hour each.' },
      { h3: 'One mentor', p: 'The same mentor for the group.' },
      { h3: 'Making things', p: 'Children build from lesson one.' },
      { h3: 'Age bands', p: 'Groups of children close in age.' },
      { h3: 'Parent notes', p: 'Short updates on progress.' },
      { h3: 'Your choice', p: 'Group of fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'Built by our older students',
  projectsLede: 'Our older students, many of whom began as young children, have built projects like these; see more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews in the families\' and students\' own words.',

  fees: {
    h2: 'Fees for Hannover families',
    lede: 'Each month\'s fee covers eight live classes. The euro price shown uses the European Central Bank reference rate, while the payment goes through in US dollars, so your bank converts it and the euro total on your statement may be a little different.',
    free: ['Free trial class', 'A puzzle and a small first build', 'No card needed'],
    group: ['Fifteen to twenty children', 'The same mentor', 'Two classes a week', 'Pay monthly, stop any month'],
    one: ['A mentor just for your child', 'Projects shaped to your child', 'Times that fit your family']
  },

  faq: {
    eyebrow: 'Hannover parents ask',
    h2: 'Coding classes for kids in Hannover: the questions we hear',
    items: [
      { q: 'Are the classes in German?', a: 'No. Classes are live and held only in English. Mentors keep their English simple and adjust pace and accent to your child, which is why children with only a little English cope well. Code looks the same in any language.' },
      { q: 'When is Informatik compulsory in Hannover?', a: 'In grades 9 and 10. According to the GI Informatik-Monitor 2026/27, Lower Saxony has taught compulsory Informatik in those two grades at all general school types since 2024/25. Earlier, from grade 6, some school types offer it as an elective.' },
      { q: 'Is there any Informatik in Hannover Grundschulen?', a: 'There is no Informatik subject in grades 1 to 4 in Lower Saxony. Many families therefore start at home or in online classes during the primary years.' },
      { q: 'Can a six year old really learn coding?', a: 'Yes. Six and seven year olds use Scratch blocks and spoken puzzles, with no typing. Most children start typed Python at around nine.' },
      { q: 'When are classes in Hannover time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Hannover families usually book a late afternoon or a Saturday morning.' },
      { q: 'Where do the mentors teach from?', a: 'India, live over video. A Hannover class at 17:10 starts at 21:40 in India in winter and 20:40 in summer. The group keeps the same mentor.' },
      { q: 'When is the Känguru contest in 2027?', a: 'On 8 April 2027, later than usual because the normal March date falls just before the Easter holidays in almost all Länder. Online registration runs from 1 December 2026 to 31 January 2027, usually through the school. We are not connected with the organisers.' },
      { q: 'What is the frost project?', a: 'An original Python project on the Deutscher Wetterdienst daily records for the Hannover station since 1936. Children find the first night below 0 °C in each autumn, stopping the search at the first match, then compare decades.' },
      { q: 'How many children are in a group?', a: 'Fifteen to twenty of a similar age. Private one-to-one classes are the alternative.' },
      { q: 'How are fees shown and charged?', a: 'Monthly, shown here in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts. The first class is free.' }
    ]
  },

  elsewhere: {
    eyebrow: 'See also',
    h2: 'Related pages',
    lede: 'Further pages for families in Hannover and Lower Saxony.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our hub for families across Germany.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'Lower Saxony compared with the rest.' },
      { href: '/kangaroo-math-germany-practice', label: 'Känguru practice in English', p: 'More on the contest and how to prepare.' },
      { href: '/ai-course-for-kids-germany', label: 'AI course for kids', p: 'AI for children, explained safely.' },
      { href: '/coding-classes-in-lower-saxony', label: 'Coding classes in Lower Saxony', p: 'The Land page for Lower Saxony.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live lesson.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The trial class is relaxed: a puzzle, a first program and a chat with the mentor. You see how your child gets on, and we recommend a course and age group.',
    readFirst: 'If you would like more detail, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or scroll through <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'Live online lessons, English only, with mentors in India. For quick questions, use WhatsApp.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids' },
        { href: '/ai-course-for-kids-germany', label: 'AI for kids' },
        { href: '/kangaroo-math-germany-practice', label: 'Känguru practice' },
        { href: '/ai-tools-age-guide', label: 'AI tools by age' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Stop at the first frost'
  },

  personalityCss: `
.ag-root.ag-cha .ag-hero h1 { letter-spacing: -0.009em; }
.ag-root.ag-cha .ag-capsule { border-left-width: 6px; border-radius: 1px; }
.ag-root.ag-cha .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-cha .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cha .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (national and Niedersachsen pages); Känguru der Mathematik e.V.; AGIS directory; KMK Ferienkalender 2026/27; Destatis GV-ISys; Einheitenzeitgesetz; all read 2 November 2026. Deutscher Wetterdienst, Climate Data Center, daily climate data station 2014 Hannover, CC BY 4.0, read 3 November 2026.',
    localProject: 'When does Hannover get its first frost: an original Python project on the DWD daily records for station 2014 Hannover (1936 to 2025, with 1941, 1942 and 1945 missing), which stops at the first night below 0 °C after 1 July in each of 87 autumns (earliest 19 September 1977, latest 18 December 2000) and compares typical dates by decade, where the 1980s come out later than the 2010s. Lesson family: stop at the first match, and turn dates into numbers to compare them.',
    requiredMentions: ['hannover_tag.txt', 'Autumns found: 87', 'Earliest: 1977-09-19', 'Latest: 2000-12-18', '1980s: 10 autumns, first frost around 02 November', 'in grades 9 and 10 at every general school type', 'On 8 April 2027', 'Stop at the first frost'],
    sources: [
      { claim: 'Lower Saxony compulsory Informatik grades 9 and 10 since 2024/25; electives; G9 Oberstufe.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/niedersachsen' },
      { claim: 'About one in twelve Oberstufe learners takes Informatik in Lower Saxony.', url: 'https://informatik-monitor.de/' },
      { claim: 'Känguru 2027 date, registration and format.', url: 'https://www.mathe-kaenguru.de/' },
      { claim: 'Lower Saxony holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'International School Hannover Region programmes.', url: 'https://www.agis-schools.org/school/international-school-hannover-region' },
      { claim: 'DWD daily climate data for station 2014 Hannover.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/' },
      { claim: 'DWD licence CC BY 4.0.', url: 'https://opendata.dwd.de/climate_environment/CDC/Terms_of_use.txt' }
    ],
    rejectedClaims: [
      'A climate trend from the decade averages: not claimed; the page shows that ten autumns are too few to judge.',
      'Naming the International School Hannover Region as a source of students: refused; context only.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any connection with the DWD, the Lower Saxony ministry or the Känguru organisers: none.'
    ]
  }
};
