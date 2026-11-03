'use strict';
// Coding and AI classes in Saarbrücken (ag- city page, Germany cluster P6 row DE167, tier-2 slug shape coding-and-ai:
// all ages). Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent;
// pages show euro, checkout charges USD.
// Spine: "nearest neighbours need a common ruler". One page for a whole family in Saarbrücken (a child, a teenager, a
// parent), built around an original machine-learning project on the city's own airport weather station, where a model
// that copies the most similar past days only starts to work once every feature is measured on the same scale.
// Sources (read raw; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-and-ai-classes-in-saarbruecken-germany/):
//  - GI Informatik-Monitor 2026/27, Saarland page: "An Gemeinschaftsschulen und am neunjährigen Gymnasium findet
//    Informatikunterricht verpflichtend in den Jahrgangsstufen 7 und 8 zweistündig sowie den Jahrgangsstufen 9 und 10
//    einstündig statt" (FACTS 84); "wobei bis 2026/27 eine Umstellung hin zum G9-Bildungsgang erfolgt" (FACTS 51).
//    National page: "Mit Mecklenburg-Vorpommern, dem Saarland und Thüringen setzen drei Bundesländer die mittelfristige
//    Empfehlung von 6 Pflichtstunden um" (FACTS 90); SWK six hours by 2030 (FACTS 93); about 15 percent take Informatik in
//    the Qualifikationsphase nationally (FACTS 97).
//  - KMK, Ferienkalender 2026/27 (Stand 09.10.2025): "Saarland (2) 05.10. - 16.10. 21.12. - 31.12. 08.02. - 12.02.
//    30.03. - 09.04. -- 28.06. - 06.08." (kmk-fer2627 raw).
//  - KMK, Bildung in der digitalen Welt: 2026 framework adds AI competences (FACTS 102).
//  - BWKI (bw-ki.de): run by the Tübingen AI Center (208); written documentation, runnable code and a video pitch (211);
//    German or English (213); 2026 timeline, final in Tübingen 13 November 2026 (214).
//  - bwinf.de: Biberwochen 9 to 20 November 2026 (133), grades 3 to 13, no prior knowledge (130).
//  - Känguru der Mathematik: 8 April 2027 (183).
//  - Destatis GV-ISys (31.12.2024, Zensus 2022 basis): Saarbrücken 182,971; Saarland 1,012,141 (facts-geo/places.tsv).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027 (facts-geo/timezone.tsv).
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily climate observations (KL), station 4336
//    Saarbrücken-Ensheim, file tageswerte_KL_04336_19510101_20251231_hist.zip (713,616 bytes, sha256 7119d95c...a874e36),
//    downloaded 3 November 2026; licence: Terms_of_use.txt "The Creative Commons BY 4.0 - Licence "CC BY 4.0" apply."
//    Station metadata: 318.96 m, 49.2128 N 7.1077 E since 26 April 1989; operator DWD since 11 November 1952.
//    The Saarbrücken portal's licence label has no version and the GDI-Saarland school file is used by the Land page,
//    so neither is used here; saarland.de returned 403 to a sibling and was not tried.
// Our own calculations (scratchpad de/w/T4/bin sb_prep.py, sb_v1.py, sb_v2.py, python3 -I): prep keeps 12,783 days from
// 31 Dec 1990 with TXK, PM and UPM present (2 skipped). V1 prints Training days: 12413, Test days: 364, Same as today:
// 2.59 C, 20 neighbours raw units: 2.53 C. V2 prints Spread of each feature: [52.7, 8.5, 5.0, 13.5] and 20 neighbours,
// scaled: 2.39 C.
// Lesson family: nearest neighbours need a common ruler; scale every feature before you measure distance.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  "import csv",
  "from datetime import date, timedelta",
  "",
  "days = {}",
  "with open(\"ensheim_daily.csv\", encoding=\"utf-8\") as source:",
  "    for record in csv.DictReader(source):",
  "        day = date.fromisoformat(record[\"date\"])",
  "        days[day] = (float(record[\"tmax\"]), float(record[\"pressure\"]), float(record[\"humidity\"]))",
  "",
  "examples = []",
  "for day in days:",
  "    before, after = day - timedelta(days=1), day + timedelta(days=1)",
  "    if before in days and after in days:",
  "        tmax, pressure, humidity = days[day]",
  "        features = [day.timetuple().tm_yday, tmax, pressure - days[before][1], humidity]",
  "        examples.append((day.year, features, days[after][0]))",
  "",
  "train = [e for e in examples if e[0] <= 2024]",
  "test = [e for e in examples if e[0] == 2025]",
  "",
  "def difference(i, a, b):",
  "    if i == 0:                       # day of the year goes round in a circle",
  "        return min(abs(a - b), 365 - abs(a - b))",
  "    return a - b",
  "",
  "def predict(features, units, k=20):",
  "    scored = []",
  "    for _, other, tomorrow in train:",
  "        dist = sum((difference(i, features[i], other[i]) / units[i]) ** 2 for i in range(4))",
  "        scored.append((dist, tomorrow))",
  "    scored.sort()",
  "    return sum(t for _, t in scored[:k]) / k",
  "",
  "def error(pairs):",
  "    return sum(abs(guess - real) for guess, real in pairs) / len(pairs)",
  "",
  "print(\"Training days:\", len(train), \" Test days:\", len(test))",
  "print(\"Same as today:\", round(error([(f[1], real) for _, f, real in test]), 2), \"C\")",
  "raw = [(predict(f, [1, 1, 1, 1]), real) for _, f, real in test]",
  "print(\"20 neighbours, raw units:\", round(error(raw), 2), \"C\")"
].join('\n');

const V2 = [
  "from statistics import pstdev",
  "",
  "units = [pstdev([difference(i, e[1][i], 1 if i == 0 else 0) for e in train]) for i in range(4)]",
  "print(\"Spread of each feature:\", [round(u, 1) for u in units])",
  "scaled = [(predict(f, units), real) for _, f, real in test]",
  "print(\"20 neighbours, scaled:\", round(error(scaled), 2), \"C\")"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Saarbrücken: coding and AI' },
  slug: 'coding-and-ai-classes-in-saarbruecken-germany',
  code: 'cas',
  accent: '#522956',
  accentRationale: 'Coding and AI in Saarbrücken: a dark plum #522956, the colour of slate roofs after rain over the Saar valley, kept clear of the Saarland Land page; contrast 9.41 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-saarland', name: 'Saarland' }],
  routeLabel: 'Coding and AI classes in Saarbrücken',
  title: 'Coding and AI Classes in Saarbrücken, Live Online in English',
  description: 'Coding and AI classes in Saarbrücken for children, teens and adults: live online in English, Saarland Informatik rules, and a model built on Ensheim weather.',
  ogDescription: 'Live online coding and AI lessons in English for every age in Saarbrücken: what Saarland schools teach in Informatik, the BWKI and Biber dates, and an original nearest-neighbour model on the Ensheim weather station.',
  twitterDescription: 'Coding and AI for all ages in Saarbrücken, live in English, with a real model on Ensheim weather data.',
  pageName: 'Coding and AI Classes in Saarbrücken',
  webPageDescription: 'A guide for families and adult learners in Saarbrücken to coding and artificial intelligence classes taught live online in English, with Saarland school facts from the Gesellschaft für Informatik and the KMK, competition dates, and an original Python model on Deutscher Wetterdienst data from Saarbrücken-Ensheim.',
  courseDescription: 'Live online coding and AI classes in English for learners in Saarbrücken from age 6 to adult: Scratch, Python, data and machine learning built from first principles, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Saarbrücken',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#ages', label: 'Ages' },
    { href: '#saarland', label: 'Saarland' },
    { href: '#model', label: 'Model' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Saarbrücken &middot; Coding and AI &middot; Ages 6 to adult',
  h1: 'Coding and AI classes in Saarbrücken',
  lede: 'Saarland already puts more Informatik on the timetable than most of Germany, so a Saarbrücken teenager meets programming at school from grade 7. What school cannot do is follow one learner at their own speed, or show a parent how a model learns. This page covers who our live classes in English are for, from a six year old to an adult, what Saarland schools teach and when, the AI and puzzle contests coming up, and a project on the Ensheim weather station where a model gets better the moment we give it a fair ruler.',
  secondaryCta: { href: '#model', label: 'See the Ensheim model' },
  wa: 'Hello Modern Age Coders, we live in Saarbrücken and would like coding or AI classes in English. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ learners worldwide &middot; every class in English, one regular mentor',
  spec: [
    ['Who', 'Children from 6, teenagers, adults'],
    ['Subjects', 'Scratch, Python, data, machine learning'],
    ['Format', 'Live online, never pre-recorded'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'Based in India, teaching in English'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding and AI to learners in Saarbrücken live online in English: Scratch and Python and AI for Kids from age 6, Python and machine-learning work for teenagers, and AI and ML courses for adults, either in a class of fifteen to twenty or alone with the mentor. One regular mentor matches each learner\'s pace and accent. Saarland schools teach Informatik from grade 7; our classes add depth, projects and a learner\'s own speed.',

  picks: {
    eyebrow: 'Three starting points',
    h2: 'Which course fits which learner in Saarbrücken?',
    lede: 'One course per stage of life: a child who wants to make things, a teenager who wants to know how AI really works, and an adult who wants machine learning they can use at work.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CAS / 01', title: 'Python and AI for Kids', note: 'For children of nine to twelve who are ready to type. Turtle pictures, small games, and AI ideas simple enough to explain to a grandparent over lunch.' },
      { course: 'ai-ml-masterclass-teens', code: 'CAS / 02', title: 'AI and Machine Learning for Teens', note: 'For pupils of thirteen to eighteen. Models are written by hand before any library is allowed, so the pupil can say what each line of a model does and where it breaks.' },
      { course: 'ai-ml-masterclass-complete-college', code: 'CAS / 03', title: 'AI and ML Masterclass', note: 'For students and working adults. It climbs from first Python through classical machine learning to neural networks and generative AI, paced around a job.' }
    ]
  },

  sections: [
    {
      id: 'ages',
      eyebrow: 'Every age',
      h2: 'Who are coding and AI classes in Saarbrücken for?',
      lede: 'For anyone in the city who wants to build with code rather than only use apps: primary children, pupils at Gemeinschaftsschule or Gymnasium, students, and adults changing direction.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Children, 6 to 12', p: 'Younger children start with Scratch blocks and stories, so nothing has to be typed in the first weeks. From about nine, they write real Python and meet AI as a set of ideas: sorting, guessing, learning from examples. No adult chatbot accounts are needed for any of it.' },
          { h3: 'Teenagers, 13 to 18', p: 'A Saarland pupil already has Informatik lessons from grade 7. Our teenage courses go further and faster: Python projects, data, and machine learning written step by step, which is also the kind of work the Bundeswettbewerb Künstliche Intelligenz asks for.' },
          { h3: 'Adults', p: 'Parents, university students and professionals take one-to-one or group courses in Python, data science and AI. Many want to understand the tools their employer is bringing in; others want a project portfolio. The mentor plans around evenings and weekends.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'A first course for each learner (our recommendation)', head: ['Learner', 'Typical start', 'Moves on to'], rows: [
          ['Child aged 6 to 8', 'Coding for Kids (Scratch first)', 'Python and AI for Kids'],
          ['Child aged 9 to 12', 'Python and AI for Kids', 'Maths through coding, or AI literacy'],
          ['Pupil in grades 7 to 10', 'Python for Teens', 'Informatik Companion, Klasse 5 to 10'],
          ['Pupil in the Oberstufe', 'AI and Machine Learning for Teens', 'Informatik Abitur in English'],
          ['Adult beginner', 'Python Masterclass', 'Data Science or the AI and ML Masterclass']
        ] },
        { kind: 'p', mt: true, html: 'The same family can have three learners on three different courses, each with their own mentor and their own times. A child who started at seven and a parent who started at forty are both judged on the same thing: what they can build and explain at the end of a month.' }
      ]
    },
    {
      id: 'saarland',
      eyebrow: 'Saarland schools',
      h2: 'How much Informatik does a Saarbrücken pupil get at school?',
      lede: 'More than in most Länder, and it starts in grade 7. The figures below come from the Gesellschaft für Informatik and the Kultusministerkonferenz, read on 2 November 2026.',
      body: [
        { kind: 'two',
          leftH3: 'Compulsory from grade 7',
          left: [
            'According to the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, Informatik is compulsory at Gemeinschaftsschulen and at the nine-year Gymnasium in Saarland: two lessons a week in grades 7 and 8, and one lesson a week in grades 9 and 10.',
            'On the national page of the same monitor, Saarland is one of only three Länder, with Mecklenburg-Vorpommern and Thüringen, that already meet the medium-term target of six compulsory hours recommended by the KMK\'s Standing Scientific Commission for 2030.'
          ],
          rightH3: 'What that leaves open',
          right: [
            'Six hours across four school years is a solid start, but it is shared between a whole class at one speed. Before grade 7 there is no fixed computing lesson at all, which is the gap younger Saarbrücken children fall into.',
            'The Gymnasium is also changing: the monitor notes that Saarland moves to the nine-year G9 route by 2026/27. In the Oberstufe, Informatik is a course a pupil chooses; nationally, about 15 percent of pupils in the Qualifikationsphase take it.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik in a Saarland school career (Gemeinschaftsschule and G9 Gymnasium)', head: ['Grades', 'Computing on the timetable'], rows: [
          ['1 to 4', 'Grundschule: no fixed Informatik lesson'],
          ['5 and 6', 'No fixed Informatik lesson'],
          ['7 and 8', 'Informatik, two lessons a week, compulsory'],
          ['9 and 10', 'Informatik, one lesson a week, compulsory'],
          ['Oberstufe', 'Informatik as a chosen course, where the school offers it']
        ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Saarland page and Länder overview; read 2 November 2026. In 2026 the KMK adopted an update of its framework Bildung in der digitalen Welt that adds AI-related competences. We are not connected to the Gesellschaft für Informatik, the KMK or the Saarland ministry, and we do not award school grades: the school course is the one that counts, and ours runs alongside it.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Saarland school holidays 2026/27 (KMK)', head: ['Holiday', 'Dates'], rows: [
          ['Herbstferien', '5 to 16 October 2026'],
          ['Weihnachtsferien', '21 to 31 December 2026'],
          ['Winterferien', '8 to 12 February 2027'],
          ['Osterferien', '30 March to 9 April 2027'],
          ['Sommerferien', '28 June to 6 August 2027']
        ] },
        { kind: 'source', html: 'Source: Kultusministerkonferenz, Ferienkalender 2026/27, Stand 9 October 2025. Classes carry on through school holidays; families who travel simply pause and pick up where they stopped.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes really in English, and does that work for a German speaker?',
      lede: 'Yes, every lesson is live and in English, and for most learners in Saarbrücken that turns out to be an advantage rather than a hurdle.',
      body: [
        { kind: 'three', cells: [
          { h3: 'No German lessons, said early', p: 'We teach in English only. A family that needs teaching in German should know that before the first class, so we say it here and again in the questions below. Mentors are based in India and teach over live video.' },
          { h3: 'The mentor adapts', p: 'Mentors slow down, rephrase, and wait. A nine year old who answers half in German is understood and handed the English word; an adult who wants technical vocabulary gets it written in the chat. Accent and pace are matched to the learner, not the reverse.' },
          { h3: 'Programming is already English', p: 'Python is written with words like if, while, print and return. The error messages, the documentation and most of the help online are in English too, so a learner who practises the language of programming in class reads it more easily everywhere else.' }
        ] },
        { kind: 'p', mt: true, html: 'Saarbrücken sits a few kilometres from the French border, and many families here already live with more than one language. A lesson in English adds one more, in a subject where the vocabulary is small and the screen does much of the explaining.' }
      ]
    },
    {
      id: 'model',
      tint: 'tint',
      eyebrow: 'A real Saarbrücken project',
      h2: 'Can a model guess tomorrow\'s temperature at Ensheim from days that looked like today?',
      lede: 'This is the project our teenagers and adults build in their first machine-learning month. It uses one weather station inside the city, a simple idea called nearest neighbours, and one mistake that almost everyone makes on the first try.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Deutscher Wetterdienst runs station 4336, Saarbrücken-Ensheim, at the airport in the south-east of the city, 319 metres above sea level. Its Climate Data Center publishes the daily observations from 1951 to 2025 under the Creative Commons BY 4.0 licence. We downloaded the file on 3 November 2026.',
            'We keep four columns from 31 December 1990 onwards: the date, the day\'s highest temperature, the mean air pressure and the relative humidity. That leaves 12,783 days with all three values present, saved as ensheim_daily.csv.'
          ],
          rightH3: 'The idea',
          right: [
            'To guess tomorrow, find the 20 past days that looked most like today and average what happened the day after each of them. Nothing is hand-written about weather; the model only remembers and compares. Each day is described by four numbers: the day of the year, its highest temperature, how much the pressure changed since yesterday, and the humidity.',
            'The model learns from 1991 to 2024 and is tested on 2025, a year it has never seen. It has to beat the laziest guess there is: tomorrow will be as warm as today.'
          ] },
        { kind: 'code', label: 'Version 1: nearest neighbours in raw units', lang: 'Python', code: V1, note: 'It prints <code>Training days: 12413  Test days: 364</code>, <code>Same as today: 2.59 C</code> and <code>20 neighbours, raw units: 2.53 C</code>.' },
        { kind: 'p', mt: true, html: 'The model is only six hundredths of a degree better than copying today. The reason is in how distance is measured. In raw units, a gap of 30 days in the calendar counts the same as a gap of 30 degrees, and a gap of 13 humidity points the same as 13 degrees. So the model mostly looks for days at the same time of year with similar humidity, and hardly notices whether today was hot or cold.' },
        { kind: 'code', label: 'Version 2: give every feature the same ruler', lang: 'Python', code: V2, note: 'Run after Version 1. It prints <code>Spread of each feature: [52.7, 8.5, 5.0, 13.5]</code> and <code>20 neighbours, scaled: 2.39 C</code>.' },
        { kind: 'p', html: 'Dividing each difference by that feature\'s typical spread turns every feature into the same unit: "how unusual is this gap". Now a day that was 8.5 degrees warmer is as far away as one that sits 52.7 days apart in the calendar. The average error falls to 2.39 degrees, a fifth of a degree better than copying today. Nothing about the data changed. Only the ruler did.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Average error on the 364 test days of 2025 (our calculation)', head: ['Method', 'Average error, degrees C'], rows: [
          ['Tomorrow will be like today', '2.59'],
          ['20 neighbours, raw units', '2.53'],
          ['20 neighbours, every feature scaled', '2.39']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, daily climate data (KL), station 4336 Saarbrücken-Ensheim, licence CC BY 4.0, downloaded 3 November 2026. The column selection, the training and test split and all errors are our own. Two days before 2025 lack one of the values and are left out; 2025 contributes 364 test days because the last day of the year has no tomorrow in the file.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Children, 9 to 12.</strong> Write five cards with a day\'s temperature and the next day\'s. For a new card, find the most similar old card and copy its answer. That is a nearest neighbour.',
          '<strong>Teenagers.</strong> Run Version 1, then change the humidity column to fractions (0.75 instead of 75) and run it again. Explain why the answer moves.',
          '<strong>Adults.</strong> Try k of 5, 20 and 80 after scaling, and plot the error. Then leave out one feature at a time and find the one the model needs most.',
          '<strong>Everyone.</strong> Write in one sentence why "it will be like today" is so hard to beat for the weather, and what kind of day it gets most wrong.'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Contests this school year',
      h2: 'Which coding and AI contests can a Saarbrücken pupil enter in 2026 and 2027?',
      lede: 'Three national ones, from a short puzzle quiz to a full machine-learning project. We are not connected to any of their organisers.',
      body: [
        { kind: 'table', numCols: [], caption: 'Dates as published by the organisers', head: ['Contest', 'Who', 'Key date'], rows: [
          ['Informatik-Biber (BWINF)', 'Grades 3 to 13, no prior knowledge', 'Biberwochen 9 to 20 November 2026, through the school'],
          ['Bundeswettbewerb Künstliche Intelligenz', 'Sekundarstufe I and II, alone or in teams', 'Final in Tübingen, 13 November 2026'],
          ['Känguru der Mathematik', 'Grades 3 to 13', '8 April 2027, through the school']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The AI contest',
          left: [
            'The Bundeswettbewerb Künstliche Intelligenz is run by the Tübingen AI Center. A team hands in written documentation, runnable code and a short video pitch, and the project must use machine-learning methods. Projects may be submitted in German or in English.',
            'The 2026 round closed for projects on 20 September 2026 and ends with the final in Tübingen on 13 November 2026. A pupil who wants to enter the next round can start building now; a project like the Ensheim model is the right size for a first attempt.'
          ],
          rightH3: 'The puzzle contests',
          right: [
            'The Informatik-Biber is a free online quiz of logic puzzles that schools run in a lesson. In 2026 the Biberwochen are 9 to 20 November. Ask your child\'s teacher whether the school takes part.',
            'In class we never use real contest tasks. We write our own problems in the same spirit, label them as ours, and point families to the organisers\' own free archives.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'When do classes run in Saarbrücken time?',
      lede: 'Late afternoon and early evening suit most learners here, and that is evening in India, where the mentors are. Times are agreed with you; there is no fixed timetable.',
      body: [
        { kind: 'table', numCols: [], caption: 'Four sample Saarbrücken slots, read on a clock in India', head: ['Saarbrücken', 'India, winter (to 28 March 2027)', 'India, summer (from 28 March 2027)'], rows: [
          ['13:45', '18:15', '17:15'],
          ['16:45', '21:15', '20:15'],
          ['Saturday 08:30', '13:00', '12:00'],
          ['Sunday 16:00', '20:30', '19:30']
        ] },
        { kind: 'source', html: 'How the gap works: German law (the Einheitenzeitgesetz) sets MEZ, one hour ahead of UTC, for the winter months and MESZ, two hours ahead, for the summer. The clocks went back on 25 October 2026 and go forward on 28 March 2027. India never changes its clocks and sits five and a half hours ahead of UTC, which puts a mentor four and a half hours ahead of Saarbrücken until the spring change and three and a half hours ahead after it. The slots above illustrate the conversion; none of them is a fixed class.' },
        { kind: 'p', mt: true, html: 'Learners from Völklingen, St. Ingbert, Sulzbach or Dudweiler join the same way, because everything happens online. When you book, the time is shown in your own clock, and the mentor sees it in theirs.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What can a learner do after each stage?',
    lede: 'Our own stages, the same for every age; only the pace differs.',
    table: { caption: 'Stages of coding and AI (ours)', head: ['Stage', 'The learner can'], rows: [
      ['1. Instructions', 'Give a computer exact steps and fix them when they go wrong'],
      ['2. Programs', 'Write Python with loops, conditions and functions'],
      ['3. Data', 'Read a real file, clean it and describe it in numbers'],
      ['4. Models', 'Build a simple model by hand and test it on unseen data'],
      ['5. Judgement', 'Say when a model is wrong, and why, before anyone else does']
    ] },
    left: { h3: 'For parents', ps: [
      'The Ensheim project sits at stage 4. A learner who has done it knows that a model is only as fair as the way it measures similarity.',
      'Reports to you describe what was built and explained, not hours online.'
    ] },
    right: { h3: 'For learners', ps: [
      'Before you trust a distance, ask what unit each part of it is in.',
      'A model that cannot beat a lazy guess has not learned anything yet.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for learners in Saarbrücken',
    lede: 'All taught live in English, with one regular mentor, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Young learners', sub: 'Ages 6 to 14', courses: [
        { code: 'CAS / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Scratch games to first apps, 6 to 12.' },
        { code: 'CAS / KIDS / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What learning machines do, for eight to fourteen.' },
        { code: 'CAS / KIDS / 03', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'A complete first course in three to four months.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'CAS / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first lines to real projects.' },
        { code: 'CAS / TEEN / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real datasets and first models.' },
        { code: 'CAS / TEEN / 03', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Keeps pace with Saarland Informatik lessons.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Students and professionals', courses: [
        { code: 'CAS / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python Masterclass', blurb: 'For adults starting from nothing.' },
        { code: 'CAS / ADULT / 02', slug: 'data-science-complete-masterclass-college', title: 'Data Science', blurb: 'Python, statistics and machine learning.' },
        { code: 'CAS / ADULT / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'How chat models and AI agents are built.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live coding and AI classes run for a Saarbrücken learner',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday afternoons', l: 'After school for children and teenagers.' },
      { time: 'Evenings', l: 'Early evenings for adults after work.' },
      { time: '1-on-1', l: 'A time you agree with your mentor.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same person every week, who remembers your last bug.' },
      { h3: 'Live, always', p: 'Nothing pre-recorded; questions are answered as they come.' },
      { h3: 'Your keyboard', p: 'The learner types the code; the mentor guides.' },
      { h3: 'Real data', p: 'Projects use open data from German cities and agencies.' },
      { h3: 'Honest checks', p: 'Every model is tested against a simple guess first.' },
      { h3: 'Group or solo', p: 'Fifteen to twenty learners, or one to one.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'A few things our students have made; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'Google reviews from our students and their parents, unedited.',

  fees: {
    h2: 'Fees for learners in Saarbrücken',
    lede: 'A month buys eight live classes. The figure below is a euro estimate based on the European Central Bank reference rate; the actual charge goes through in US dollars, which your own bank changes into euro, so expect a few cents either way on the statement.',
    free: ['A free first class', 'A short problem and a first program', 'No card needed'],
    group: ['Fifteen to twenty learners of a similar age or level', 'One regular mentor', 'Two classes a week', 'Monthly, stop whenever you like'],
    one: ['One learner, one mentor', 'Your own pace and projects', 'Times you choose']
  },

  faq: {
    eyebrow: 'Questions from Saarbrücken',
    h2: 'Coding and AI classes in Saarbrücken: questions and answers',
    items: [
      { q: 'Are the classes in German?', a: 'No, never. Lessons happen live in English, and only in English. Our mentors work from India; they slow down, choose plain words and get used to each learner\'s accent, which is why a ten year old with school English and an adult who learnt it long ago can both keep up.' },
      { q: 'Who can join coding and AI classes in Saarbrücken?', a: 'Children from 6, teenagers and adults. Children start with Scratch or Python and AI for Kids, teenagers with Python or AI and Machine Learning for Teens, and adults with the Python Masterclass or the AI and ML Masterclass.' },
      { q: 'Do Saarland schools already teach Informatik?', a: 'Yes. The Gesellschaft für Informatik reports that Informatik is compulsory at Gemeinschaftsschulen and the nine-year Gymnasium in Saarland, two lessons a week in grades 7 and 8 and one lesson a week in grades 9 and 10. Our classes run alongside school; the school course is the one that is graded.' },
      { q: 'When are classes in Saarbrücken time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most learners here pick a late afternoon, an early evening or a weekend morning.' },
      { q: 'Does my teenager need an AI chatbot account for these classes?', a: 'No. Nobody under 18 is asked to open one. Claude may only be used by adults, and ChatGPT requires a parent to agree for anyone under 18, so our teenage courses avoid both. Pupils write small models of their own instead, which shows them what a chatbot is doing far better than prompting one.' },
      { q: 'Can you help with the Bundeswettbewerb Künstliche Intelligenz?', a: 'We teach the skills a project needs: Python, data, machine learning and honest testing. The BWKI accepts projects in German or English. The 2026 final is in Tübingen on 13 November 2026, and the work for each entry must be the team\'s own.' },
      { q: 'Is the Ensheim weather project real data?', a: 'Yes. It uses the daily observations of Deutscher Wetterdienst station 4336, Saarbrücken-Ensheim, published under the CC BY 4.0 licence and downloaded on 3 November 2026. The model, the test on 2025 and the error figures are our own.' },
      { q: 'How many learners share a class?', a: 'A group class has between fifteen and twenty people, put together by age for children and by level for teenagers and adults. Someone who prefers undivided attention can take the one-to-one plan, with two private lessons each week.' },
      { q: 'How much does it cost, and in which currency?', a: 'There is one monthly fee. The page displays it in euro, worked out from the reference rate of the European Central Bank; the card is then charged in US dollars, and your bank turns that into euro on the statement, so a small difference is normal. Your first class costs nothing.' },
      { q: 'Can an adult with no coding background start with AI?', a: 'Yes, but through Python first. The AI and ML Masterclass begins with the basics of programming, then data, then models. Most adults are writing and testing their own small model within the first two months.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'Further reading for learners in Saarbrücken and Saarland.',
    items: [
      { href: '/coding-classes-in-saarland', label: 'Coding classes in Saarland', p: 'The Land page: rules, holidays and schools.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page for learners in Germany.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'Our deeper page on learning AI.' },
      { href: '/bundeswettbewerb-ki-bwki-project-help', label: 'BWKI project help', p: 'Building an AI contest entry.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'How the sixteen Länder compare.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Which tools allow which ages.' }
    ]
  },

  start: {
    h2: 'Start with a free first class',
    lede: 'In the first class the mentor gives a short problem, watches how the learner approaches it, and checks how comfortable they are in English. Afterwards you get a suggestion for the course and the group that fit.',
    readFirst: 'Curious before booking? <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a live class, and <a class="ag-inline-link" href="/courses">all courses</a> has every syllabus.',
    note: 'Live online classes with mentors in India, in English only. Write to us on WhatsApp in English for the quickest answer.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Learning AI', links: [
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/bundeswettbewerb-ki-bwki-project-help', label: 'BWKI project help' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, do not copy AI' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-saarland', label: 'Coding in Saarland' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Measure every feature with the same ruler'
  },

  personalityCss: `
.ag-root.ag-cas .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cas .ag-capsule { border-left-width: 6px; }
.ag-root.ag-cas .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-cas .ag-table caption { font-style: italic; text-align: left; }
.ag-root.ag-cas .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Saarland page and Länder overview); KMK Ferienkalender 2026/27 and Bildung in der digitalen Welt; Bundeswettbewerb Künstliche Intelligenz; Bundesweite Informatikwettbewerbe (Biber 2026); Känguru der Mathematik; Destatis GV-ISys; Einheitenzeitgesetz; read 2 and 3 November 2026. Deutscher Wetterdienst, Climate Data Center, station 4336 Saarbrücken-Ensheim, CC BY 4.0.',
    localProject: 'A common ruler for nearest neighbours: an original Python model on 34 years of DWD daily data from Saarbrücken-Ensheim (station 4336) that predicts the next day\'s maximum temperature from the 20 most similar past days. In raw units it barely beats the guess "same as today" (2.53 against 2.59 degrees on 364 test days of 2025); with every feature scaled by its spread it reaches 2.39. Lesson family: scale features before you measure distance.',
    requiredMentions: ['ensheim_daily.csv', '20 neighbours, raw units: 2.53 C', '20 neighbours, scaled: 2.39 C', 'Spread of each feature: [52.7, 8.5, 5.0, 13.5]', 'station 4336, Saarbrücken-Ensheim', 'two lessons a week in grades 7 and 8', '8 to 12 February 2027', 'Measure every feature with the same ruler'],
    sources: [
      { claim: 'Saarland compulsory Informatik hours; G9 by 2026/27.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/saarland' },
      { claim: 'Saarland among three Länder meeting six compulsory hours; 15 percent nationally in the Qualifikationsphase.', url: 'https://informatik-monitor.de/' },
      { claim: 'Saarland holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'BWKI rules, languages and 2026 final date.', url: 'https://www.bw-ki.de/teilnahmebedingungen' },
      { claim: 'Informatik-Biber 2026 dates.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'DWD daily climate data for station 4336.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/kl/historical/' },
      { claim: 'DWD licence CC BY 4.0.', url: 'https://opendata.dwd.de/climate_environment/CDC/Terms_of_use.txt' }
    ],
    rejectedClaims: [
      'Saarbrücken city portal datasets: the licence label carries no version, so not used.',
      'The GDI-Saarland school file: already used by the Saarland Land page.',
      'Any claim that the model forecasts weather: it is a teaching model, and the page says how small its gain is.',
      'Any affiliation with the DWD, BWKI, BWINF, the KMK or the Saarland ministry: none.'
    ]
  }
};
