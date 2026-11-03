'use strict';
// Coding classes for kids in Ludwigshafen am Rhein (ag- city page, Germany cluster P6 row DE169, tier-2 slug shape
// coding-classes-for-kids: ages 6 to 12). Owner 2026-11-02: classes are live, in English only, with mentors who match
// the learner's pace and accent; pages show euro, checkout charges USD.
// Spine: "a gap that closes in 2028". Rheinland-Pfalz is one of six Länder with no Informatik for every pupil today and
// will make it compulsory from 2028/29, so a Ludwigshafen child of 6 to 12 now grows up just before the change. The
// project sorts 24 years of daily rain at Oggersheim into buckets and shows that the bucket size decides the picture.
// Sources (read raw; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-for-kids-in-ludwigshafen-am-rhein-germany/):
//  - GI Informatik-Monitor 2026/27, national page: six Länder without Informatik compulsory for all, Rheinland-Pfalz
//    among them (FACTS 92); "Zum Schuljahr 2028/29 wird Informatik in Rheinland-Pfalz zum Pflichtfach an allen Schulen im
//    Gesamtumfang von vier Wochenstunden." (95). Rheinland-Pfalz page: "Seit dem Schuljahr 2021/22 findet an 21
//    Informatik-Profil-Schulen in Jahrgangsstufe 5 verbindlicher Informatikunterricht statt." (83).
//  - KMK primary page: Grundschule grades 1 to 4 outside Berlin and Brandenburg (FACTS 1); KMK 2024 Eckpunktepapier on
//    informatics education in primary school (4). Realschule plus is Rheinland-Pfalz's two-track school (21).
//  - KMK Ferienkalender 2026/27: "Rheinland-Pfalz (6) 05.10. - 16.10. 23.12. - 08.01. -- 22.03. - 02.04. -- 28.06. -
//    06.08." (FACTS 280).
//  - Känguru der Mathematik: 8 April 2027 (183); 75 minutes, 24 problems for grades 3/4 and 5/6 (186).
//  - Mathematik-Olympiade: Bundesrunde 30 May to 2 June 2027 in Kaiserslautern, hosted by Rheinland-Pfalz (167).
//  - bwinf.de: Biber 9 to 20 November 2026 (133); nine tasks in 30 minutes for primary pupils (132).
//  - Destatis GV-ISys 31.12.2024: Ludwigshafen am Rhein 177,222; Rheinland-Pfalz 4,129,569 (places.tsv).
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Deutscher Wetterdienst, Climate Data Center, daily precipitation (more_precip), station 3077
//    Ludwigshafen-Oggersheim (97 m, 49.4708 N 8.3633 E, 1 Jan 1978 to 31 Dec 2004), file
//    tageswerte_RR_03077_19780101_20041231_hist.zip, downloaded 3 November 2026; licence CC BY 4.0 (Terms_of_use.txt).
//    Years 2002 and 2004 are incomplete, so we keep 1978 to 2001. The city portal (ludwigshafen.de) answered with a
//    myracloud block page (HTTP 503) on 3 November 2026 and was not retried; GovData lists no Ludwigshafen city dataset
//    with a file and an open licence.
// Our own calculations (scratchpad de/w/T4/bin lu_prep.py, lu_v1.py, lu_v2.py; python3 -I): 8,766 days; 10 mm buckets
// 0-10 8461, 10-20 236, 20-30 48, 30-40 10, 40-50 8, 50-60 2, 60-70 1; named buckets dry 5114, a few drops 1142, a rainy
// day 1667, a wet day 716, a soaking day 127. Wettest day 23 May 1978, 69.2 mm; average 562.4 mm a year.
// Lesson family: the bucket size decides the picture; choose the edges of a histogram before you read it.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  "import csv",
  "",
  "rain = []",
  "with open(\"oggersheim_rain.csv\", encoding=\"utf-8\") as data:",
  "    for line in csv.DictReader(data):",
  "        rain.append(float(line[\"rain_mm\"]))",
  "",
  "print(\"Days:\", len(rain))",
  "",
  "def count_buckets(width):",
  "    buckets = {}",
  "    for mm in rain:",
  "        start = int(mm // width) * width",
  "        buckets[start] = buckets.get(start, 0) + 1",
  "    return buckets",
  "",
  "wide = count_buckets(10)",
  "for start in sorted(wide):",
  "    print(start, \"to\", start + 10, \"mm:\", wide[start], \"days\")"
].join('\n');

const V2 = [
  "def name_of(mm):",
  "    if mm == 0:",
  "        return \"dry\"",
  "    elif mm < 1:",
  "        return \"a few drops\"",
  "    elif mm < 5:",
  "        return \"a rainy day\"",
  "    elif mm < 15:",
  "        return \"a wet day\"",
  "    else:",
  "        return \"a soaking day\"",
  "",
  "kinds = {}",
  "for mm in rain:",
  "    kinds[name_of(mm)] = kinds.get(name_of(mm), 0) + 1",
  "",
  "for kind in [\"dry\", \"a few drops\", \"a rainy day\", \"a wet day\", \"a soaking day\"]:",
  "    print(kind, kinds[kind], \"#\" * (kinds[kind] // 200))"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Ludwigshafen: coding for kids' },
  slug: 'coding-classes-for-kids-in-ludwigshafen-am-rhein-germany',
  code: 'crh',
  accent: '#7D601D',
  accentRationale: 'Coding classes for kids in Ludwigshafen am Rhein: an ochre brown #7D601D, the colour of the Rhine banks at Parkinsel in late summer; contrast on the paper #FBF8F2 above 4.78:1 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-rhineland-palatinate', name: 'Rhineland-Palatinate' }],
  routeLabel: 'Coding classes for kids in Ludwigshafen am Rhein',
  title: 'Coding Classes for Kids in Ludwigshafen: Live in English',
  description: 'Coding classes for kids in Ludwigshafen am Rhein, ages 6 to 12: live online in English, what Rhineland-Palatinate schools teach, and a rain-bucket project.',
  ogDescription: 'Live online coding for Ludwigshafen children aged 6 to 12, taught in English at each child\'s pace: why computing arrives late in Rhineland-Palatinate schools, the Känguru and Biber dates, and a project on 24 years of Oggersheim rain.',
  twitterDescription: 'Coding for Ludwigshafen kids aged 6 to 12, live in English, with a project on Oggersheim rain data.',
  pageName: 'Coding Classes for Kids in Ludwigshafen am Rhein',
  webPageDescription: 'A guide for Ludwigshafen parents of children aged 6 to 12 to live online coding classes in English, with Rhineland-Palatinate school facts from the Gesellschaft für Informatik and the KMK, contest dates for 2026 and 2027, and an original Python project on Deutscher Wetterdienst rain data from Ludwigshafen-Oggersheim.',
  courseDescription: 'Live online coding classes in English for children aged 6 to 12 in Ludwigshafen am Rhein: Scratch first, then typed Python and small data projects, in a group of fifteen to twenty or one to one, with one regular mentor.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Ludwigshafen',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#ages', label: 'Ages' },
    { href: '#school', label: 'School' },
    { href: '#rain', label: 'Rain' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Ludwigshafen am Rhein &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Ludwigshafen am Rhein',
  lede: 'Rhineland-Palatinate has decided to make Informatik compulsory in every school, but not until the 2028/29 school year. A child who is six, eight or ten in Ludwigshafen today will spend most of their school years before that change. This page sets out what a child can learn at each age, what Rhineland-Palatinate schools teach now, what an English-speaking mentor does with a primary child, and a project on real Oggersheim rain where a child discovers that the same numbers can tell two different stories.',
  secondaryCta: { href: '#rain', label: 'See the rain project' },
  wa: 'Hello Modern Age Coders, my child lives in Ludwigshafen and would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; a regular mentor who teaches your child in English',
  spec: [
    ['Ages', '6 to 12, in groups by age'],
    ['First tool', 'Scratch blocks, then Python'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Lesson', 'Live, one hour, twice a week'],
    ['Mentors', 'In India, teaching in English'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'For Ludwigshafen am Rhein children from 6 to 12, Modern Age Coders runs coding classes live online in English. Six to eight year olds build Scratch stories and games; from about nine they type Python. One mentor stays with a child week after week and adjusts to their pace and accent, in a class of fifteen to twenty peers or alone. Informatik is only compulsory in every Rhineland-Palatinate school from 2028/29.',

  picks: {
    eyebrow: 'Where Ludwigshafen children begin',
    h2: 'Which first course suits a Ludwigshafen child?',
    lede: 'A long course that grows with a child from six, a short Scratch course to test the water, and a Python course for children who already want to type.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CRH / 01', title: 'Coding for Kids', note: 'The long road from six to twelve over ten to twelve months: Scratch stories and games come first, small apps and simple learning machines follow.' },
      { course: 'scratch-programming-complete-course', code: 'CRH / 02', title: 'Scratch Coding for Kids', note: 'Three to four months for a complete beginner. Your child finishes with games they designed themselves and you find out whether coding sticks.' },
      { course: 'python-ai-kids-masterclass', code: 'CRH / 03', title: 'Python and AI for Kids', note: 'Typing children from roughly nine: proper Python, turtle pictures, small games and real files such as the Oggersheim rain record further down.' }
    ]
  },

  sections: [
    {
      id: 'ages',
      eyebrow: 'By age',
      h2: 'At what age can a child in Ludwigshafen start coding?',
      lede: 'At six, if the first steps are blocks and stories rather than typing. What a child does changes a lot between six and twelve, so groups are always formed by age.',
      body: [
        { kind: 'table', numCols: [], caption: 'What children do in our classes, by age (ours)', head: ['Age', 'School stage', 'What they build'], rows: [
          ['6 and 7', 'Klasse 1 and 2', 'Short Scratch stories: a character walks, talks and changes costume'],
          ['8 and 9', 'Klasse 3 and 4', 'Scratch games with scores, timers and levels'],
          ['9 and 10', 'Klasse 4 and 5', 'First typed Python: drawings with a turtle, number games'],
          ['11 and 12', 'Klasse 5 to 7', 'Python with lists and files, such as counting rainy days']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The youngest',
          left: [
            'Six and seven year olds do not need to read long instructions. The mentor shows, the child copies, then changes one thing and sees what happens. Lessons are broken into short pieces with a small win every ten minutes.',
            'In Rhineland-Palatinate, as almost everywhere in Germany, Grundschule runs from grade 1 to grade 4, so these are Grundschule children.'
          ],
          rightH3: 'The older ones',
          right: [
            'From about nine, many children are ready to type. Python is a real language used by professionals, and children are proud to write the same code adults use.',
            'By eleven or twelve, after the move to a secondary school such as a Gymnasium or a Realschule plus, a child can read a data file and answer a question about it, the kind of project in the rain section below.'
          ] }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Rhineland-Palatinate schools',
      h2: 'What do Rhineland-Palatinate schools teach about computing?',
      lede: 'For most children, not much yet. That is changing, but slowly, and the facts are clear in the Gesellschaft für Informatik\'s Informatik-Monitor 2026/27, read on 2 November 2026.',
      body: [
        { kind: 'two',
          leftH3: 'Today',
          left: [
            'Rheinland-Pfalz is named in the monitor as one of six Länder without Informatik that is compulsory for all pupils. The others are Berlin, Brandenburg, Bremen, Hessen and Sachsen-Anhalt.',
            'There is one exception worth knowing: since the 2021/22 school year, 21 Informatik-Profil-Schulen in the Land teach compulsory Informatik in grade 5. Ask your school whether it is one of them.'
          ],
          rightH3: 'From 2028/29',
          right: [
            'The monitor reports that Informatik becomes a compulsory subject at all schools in Rheinland-Pfalz from the 2028/29 school year, with four lessons a week spread over the years in total.',
            'A child who is eight today will be in about grade 5 when that starts; a child who is eleven will already be in grade 8. For both, the habits of step-by-step thinking are easier to build at home now than to catch up on later.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Computing in a Ludwigshafen school career, as the rules stand in 2026/27', head: ['Grades', 'School', 'Informatik'], rows: [
          ['1 to 4', 'Grundschule', 'No compulsory Informatik lesson'],
          ['5', 'Secondary school', 'Compulsory only at the 21 Informatik-Profil-Schulen'],
          ['5 to 10', 'Secondary school', 'Elective where the school offers it'],
          ['From 2028/29', 'All schools', 'Compulsory, four weekly lessons in total']
        ] },
        { kind: 'source', html: 'Sources: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Länder overview and Rheinland-Pfalz page; KMK, Primarbereich, which also lists a 2024 key-points paper on informatics education in primary school. All read 2 November 2026. We are not connected to the Gesellschaft für Informatik, the KMK or the Rheinland-Pfalz ministry.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Rhineland-Palatinate school holidays 2026/27 (KMK)', head: ['Holiday', 'Dates'], rows: [
          ['Herbstferien', '5 to 16 October 2026'],
          ['Weihnachtsferien', '23 December 2026 to 8 January 2027'],
          ['Osterferien', '22 March to 2 April 2027'],
          ['Sommerferien', '28 June to 6 August 2027']
        ] },
        { kind: 'source', html: 'Source: KMK, Ferienkalender 2026/27, Stand 9 October 2025. Classes do not stop for school holidays; many families use a holiday week to finish a game their child started in term time.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'In English',
      h2: 'Can a Ludwigshafen child learn coding in English?',
      lede: 'Yes. Every class is live and in English only, and young children usually find it easier than their parents expect.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English only, and we say so', p: 'Every lesson is in English. Nothing is taught in German, and it is fairer to say so on this page than after a trial. The mentors work from India over a live video link.' },
          { h3: 'Matched to your child', p: 'The mentor talks slowly, uses short sentences, shows rather than describes, and gets used to how your child speaks. If a child answers with a German word, the mentor understands and offers the English one.' },
          { h3: 'The screen does the work', p: 'A Scratch block that says "move 10 steps" is easy to guess, and most of a lesson is building and trying. Children pick up the handful of words they need within a few weeks.' }
        ] },
        { kind: 'p', mt: true, html: 'Because the mentor is the same every week, a shy child gets time to warm up. After a month the mentor knows whether your child likes a challenge straight away, or a few easy wins first.' }
      ]
    },
    {
      id: 'rain',
      tint: 'tint',
      eyebrow: 'A real Ludwigshafen project',
      h2: 'How rainy is Oggersheim? Sorting 24 years of days into buckets',
      lede: 'The Deutscher Wetterdienst measured rain every day at a station in Ludwigshafen-Oggersheim from 1978 to 2004. Our older children use those numbers to learn that a chart can hide the answer or show it, depending on how you group the data.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'Station 3077, Ludwigshafen-Oggersheim, stood 97 metres above sea level and recorded daily rain in millimetres. Its record is published by the DWD Climate Data Center under the Creative Commons BY 4.0 licence. We downloaded it on 3 November 2026.',
            'We keep the 24 complete years from 1978 to 2001, which is 8,766 days, in a file called oggersheim_rain.csv. One millimetre of rain is one litre of water on every square metre of ground.'
          ],
          rightH3: 'The question',
          right: [
            'What is a normal day in Oggersheim: dry, a little rain, or a lot? A child sorts every day into a bucket and counts how many fall in each. The surprise is that the first way of sorting gives an answer that is true but useless.',
            'The wettest day in the file is 23 May 1978, with 69.2 millimetres, and an average year brought 562.4 millimetres. Both are our own sums from the file.'
          ] },
        { kind: 'code', label: 'Version 1: buckets ten millimetres wide', lang: 'Python', code: V1, note: 'It prints <code>Days: 8766</code>, then seven buckets from <code>0 to 10 mm: 8461 days</code> to <code>60 to 70 mm: 1 days</code>.' },
        { kind: 'p', mt: true, html: 'Almost every day, 8,461 of 8,766, lands in the first bucket. The chart says "it is nearly always 0 to 10 millimetres", which is true and tells you almost nothing: a dry day and a day of steady rain look the same. The buckets are too wide.' },
        { kind: 'code', label: 'Version 2: buckets that match real days', lang: 'Python', code: V2, note: 'Run after Version 1. It prints <code>dry 5114</code>, <code>a few drops 1142</code>, <code>a rainy day 1667</code>, <code>a wet day 716</code> and <code>a soaking day 127</code>, each with a bar of hash marks.' },
        { kind: 'p', html: 'Now the story is visible: more than half of all days were completely dry, and only 127 days in 24 years, about five a year, were soaking days of 15 millimetres or more. Nothing in the data changed between the two versions. Only the edges of the buckets did.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Oggersheim days by kind of rain, 1978 to 2001 (our calculation)', head: ['Kind of day', 'Rain', 'Days'], rows: [
          ['Dry', '0 mm', '5,114'],
          ['A few drops', 'under 1 mm', '1,142'],
          ['A rainy day', '1 to under 5 mm', '1,667'],
          ['A wet day', '5 to under 15 mm', '716'],
          ['A soaking day', '15 mm or more', '127']
        ] },
        { kind: 'source', html: 'Data: Deutscher Wetterdienst, Climate Data Center, daily precipitation, station 3077 Ludwigshafen-Oggersheim, licence CC BY 4.0, downloaded 3 November 2026. The bucket names and edges, the counts and the averages are ours. The station closed at the end of 2004; 2002 and 2004 are incomplete in the file and left out.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Look out of the window every day for two weeks and draw a sun, a cloud or a raindrop. Then decide: is "cloud" one bucket, or two?',
          '<strong>Ages 8 to 10, Scratch.</strong> Make a list of ten rain numbers and three counters called dry, wet and soaking. Move each number into the right counter.',
          '<strong>Ages 10 to 12, Python.</strong> Run Version 1 with buckets 5 millimetres wide, then 1 millimetre wide. Which width tells the clearest story?',
          '<strong>Going further.</strong> Change <code>name_of</code> so that "a soaking day" starts at 10 millimetres. Predict the new counts before running it.'
        ] }
      ]
    },
    {
      id: 'contests',
      eyebrow: 'Free contests',
      h2: 'Which free maths and computing contests can a Ludwigshafen child try?',
      lede: 'Two are run through schools all over Germany this school year, and the maths olympiad has its national final in Rhineland-Palatinate in 2027.',
      body: [
        { kind: 'table', numCols: [], caption: 'Dates published by the organisers', head: ['Contest', 'For', 'When'], rows: [
          ['Informatik-Biber', 'Grades 3 to 13', '9 to 20 November 2026'],
          ['Känguru der Mathematik', 'Grades 3 to 13', '8 April 2027'],
          ['Mathematik-Olympiade, Bundesrunde', 'Invited teams from grade 8', '30 May to 2 June 2027, Kaiserslautern']
        ] },
        { kind: 'p', mt: true, html: 'In the Biber, primary pupils solve nine logic puzzles in 30 minutes, and no coding knowledge is needed. The Känguru gives grades 3 to 6 twenty-four problems in 75 minutes; in 2027 it moves to 8 April because the usual March date falls just before the Easter holidays in almost every Land. Both are entered through the school, so ask the class teacher. Real contest tasks stay with their organisers: the practice puzzles our mentors use are invented by us and marked as ours. BWINF, the Känguru team and the Mathematik-Olympiade have no connection with us.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Times',
      h2: 'When are classes for Ludwigshafen children?',
      lede: 'After school and at weekends, at a time you choose. The mentor\'s day in India is later, which is why German afternoons work well.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Ludwigshafen times against the clock in India', head: ['Ludwigshafen', 'India, winter (to 28 March 2027)', 'India, summer (from 28 March 2027)'], rows: [
          ['15:45', '20:15', '19:15'],
          ['16:15', '20:45', '19:45'],
          ['Saturday 09:00', '13:30', '12:30'],
          ['Sunday 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'Germany runs on MEZ (UTC+1) in winter and MESZ (UTC+2) in summer, as the Einheitenzeitgesetz sets out; the autumn change came on 25 October 2026 and the spring change follows on 28 March 2027. India does not change its clocks and stays on UTC+5:30, four and a half hours ahead of Ludwigshafen in winter and three and a half in summer. The rows are examples, not fixed batches.' },
        { kind: 'p', mt: true, html: 'Children in Frankenthal, Speyer, Schifferstadt or across the river in Mannheim join in exactly the same way. When you book, you pick a time in your own clock.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'What can a Ludwigshafen child do at each stage?',
    lede: 'Five steps we use when we put a child into a group and when we write to parents.',
    table: { caption: 'Five coding steps for primary children (ours)', head: ['Step', 'Usual age', 'What it looks like'], rows: [
      ['1. Steps', '6 to 7', 'Put actions in order so a character does what they planned'],
      ['2. Repeats', '7 to 9', 'Use a loop instead of copying the same block ten times'],
      ['3. Choices', '8 to 10', 'Make a game react with if and else'],
      ['4. Typing', '9 to 11', 'Short Python that mostly runs the first time'],
      ['5. Grouping', '10 to 12', 'Sort data into groups and explain why those groups']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 5 is the rain project. A child who has seen the same data look useless and then useful will question the next chart they see.',
      'We report what your child built and can explain, not how long they sat at the screen.'
    ] },
    right: { h3: 'For children', ps: [
      'If one bucket holds nearly everything, your buckets are too big.',
      'Decide the edges first, then count. Change the edges, and count again.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Ludwigshafen children',
    lede: 'Same format for all of them: live, English, one mentor, class or private.',
    bands: [
      { num: 'I', h3: 'Thinking and maths', sub: 'Ages 6 to 14', courses: [
        { code: 'CRH / THINK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Logic puzzles in the spirit of the Biber.' },
        { code: 'CRH / THINK / 02', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Olympiad and Känguru training', blurb: 'Original contest-style maths, in English.' },
        { code: 'CRH / THINK / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What it means for a machine to learn.' }
      ] },
      { num: 'II', h3: 'Games', sub: 'Ages 7 to 14', courses: [
        { code: 'CRH / PLAY / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code inside a world children already love.' },
        { code: 'CRH / PLAY / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Scripted games of their own in Luau.' },
        { code: 'CRH / PLAY / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Three game tools in one long course.' }
      ] },
      { num: 'III', h3: 'Making', sub: 'Ages 8 to 12', courses: [
        { code: 'CRH / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'Phone apps built from blocks.' },
        { code: 'CRH / MAKE / 02', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A first web page that is truly theirs.' },
        { code: 'CRH / MAKE / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Puzzles in a fast, strict language.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'A normal week of classes for a Ludwigshafen child',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'After Grundschule or secondary school.' },
      { time: 'Weekend mornings', l: 'Calm and fresh, good for the youngest.' },
      { time: '1-on-1', l: 'A time agreed for your child alone.' }
    ],
    cells: [
      { h3: 'Same face', p: 'One mentor who gets to know your child.' },
      { h3: 'Short steps', p: 'A small success every few minutes.' },
      { h3: 'Child at the controls', p: 'Your child builds; the mentor guides.' },
      { h3: 'Age groups', p: 'Six year olds learn with six year olds.' },
      { h3: 'Notes for parents', p: 'What was made and what comes next.' },
      { h3: 'Group or alone', p: 'Fifteen to twenty children, or one.' }
    ]
  },

  projectsH2: 'Projects by our older students',
  projectsLede: 'What some of our teenage students made after starting small. See the <a class="ag-inline-link" href="/student-labs">student labs</a> for the rest.',
  reviewsLede: 'What parents and students wrote on Google, unchanged.',

  fees: {
    h2: 'Fees for Ludwigshafen families',
    lede: 'One monthly payment covers eight live classes. Prices here are euro estimates from the European Central Bank reference rate; the charge runs in US dollars and your bank changes it, so the euro amount on the statement may be a little off.',
    free: ['First class free', 'A logic game and a moving sprite', 'No card asked for'],
    group: ['Fifteen to twenty children of the same age', 'One regular mentor', 'Two classes a week', 'Monthly, cancel any month'],
    one: ['Your child with one mentor', 'Their own pace and projects', 'Times that fit your family']
  },

  faq: {
    eyebrow: 'Ludwigshafen parents ask',
    h2: 'Coding classes for kids in Ludwigshafen: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No, they are in English, live, every time. A mentor speaks in short, simple sentences, adapts to the way your child talks and shows each step on screen, which lets a seven year old with very little English take part from week one.' },
      { q: 'Is six too young to start coding?', a: 'Not with the right start. Six year olds begin with Scratch, where blocks snap together and there is almost nothing to type or read. Lessons are short and playful, and the free first class shows whether your child is ready.' },
      { q: 'Do Ludwigshafen schools teach coding?', a: 'Mostly not yet. The Gesellschaft für Informatik lists Rheinland-Pfalz among six Länder without Informatik that is compulsory for all, with 21 Informatik-Profil-Schulen teaching it in grade 5. Informatik becomes compulsory at all schools in the Land from 2028/29.' },
      { q: 'When can my child switch from Scratch to Python?', a: 'Usually around 9 or 10, once typing is comfortable and they have used loops and choices in Scratch. The mentor suggests the switch when a child starts to find Scratch too slow.' },
      { q: 'When are classes in Ludwigshafen time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Most children here take classes in the late afternoon or on a weekend morning.' },
      { q: 'Can my child enter the Känguru or the Biber?', a: 'Yes, if the school takes part, because both are entered through schools. The Informatik-Biber runs from 9 to 20 November 2026 and the Känguru der Mathematik is on 8 April 2027. Ask the class teacher.' },
      { q: 'Who are the teachers?', a: 'Mentors based in India who teach live online, in English. A child keeps one mentor for the whole course, and the time difference is the reason German afternoons are evenings for them.' },
      { q: 'Is the rain project real Ludwigshafen data?', a: 'Yes. It uses the daily rain record of Deutscher Wetterdienst station 3077, Ludwigshafen-Oggersheim, from 1978 to 2001, published under the CC BY 4.0 licence. The buckets and counts are our own.' },
      { q: 'How many children are in a group?', a: 'Fifteen to twenty children of a similar age. With the one-to-one plan your child has the mentor to themselves for two classes a week.' },
      { q: 'What currency do I pay in?', a: 'You see a euro figure here, based on the European Central Bank reference rate, while the card payment itself is in US dollars. The bank does the conversion, so a few cents of difference on the statement is normal. A first class is free of charge.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'More for Ludwigshafen families.',
    items: [
      { href: '/coding-classes-in-rhineland-palatinate', label: 'Coding classes in Rhineland-Palatinate', p: 'The Land page, with its rules and dates.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding classes for kids in Germany', p: 'Our main page for children.' },
      { href: '/scratch-classes-for-kids-germany', label: 'Scratch classes for kids', p: 'The block-based first step.' },
      { href: '/kangaroo-math-germany-practice', label: 'Känguru practice', p: 'Getting ready for 8 April 2027.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'The Biber, explained in English.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page for families in Germany.' }
    ]
  },

  start: {
    h2: 'Book a free first class for your child',
    lede: 'Expect a little logic game and a Scratch sprite your child moves on their own. From that half hour the mentor can tell how your child approaches a problem and how much English support makes sense, and suggests a matching course and age group.',
    readFirst: 'Parents who like to read first can open <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">the course list</a>.',
    note: 'Our mentors teach from India, online and live, in English only. Questions in English on WhatsApp get the fastest answer.',
    formNote: 'Free, no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany' },
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/kangaroo-math-germany-practice', label: 'Känguru practice' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-rhineland-palatinate', label: 'Coding in Rhineland-Palatinate' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Choose the buckets, then count'
  },

  personalityCss: `
.ag-root.ag-crh .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-crh .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-crh .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-crh .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-crh .ag-band-head h3 { letter-spacing: 0.006em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Länder overview and Rheinland-Pfalz page); KMK Primarbereich and Ferienkalender 2026/27; Känguru der Mathematik; Mathematik-Olympiade; Bundesweite Informatikwettbewerbe; Destatis GV-ISys; Einheitenzeitgesetz; read 2 and 3 November 2026. Deutscher Wetterdienst, Climate Data Center, station 3077 Ludwigshafen-Oggersheim, CC BY 4.0.',
    localProject: 'Choose the buckets, then count: an original Python and Scratch project on 8,766 days of DWD rain at Ludwigshafen-Oggersheim (1978 to 2001). Buckets 10 mm wide put 8,461 days in the first bucket and say nothing; named buckets show 5,114 dry days, 1,142 with a few drops, 1,667 rainy, 716 wet and 127 soaking days. Lesson family: the bucket size of a histogram decides the picture.',
    requiredMentions: ['oggersheim_rain.csv', '0 to 10 mm: 8461 days', 'dry 5114', 'a soaking day 127', 'station 3077, Ludwigshafen-Oggersheim', '21 Informatik-Profil-Schulen', '5 to 16 October 2026', 'Choose the buckets, then count'],
    sources: [
      { claim: 'Rheinland-Pfalz without compulsory Informatik for all; compulsory from 2028/29.', url: 'https://informatik-monitor.de/' },
      { claim: '21 Informatik-Profil-Schulen with compulsory Informatik in grade 5 since 2021/22.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/rheinland-pfalz' },
      { claim: 'Rheinland-Pfalz holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Känguru 2027 date and format.', url: 'https://www.mathe-kaenguru.de/' },
      { claim: 'DWD daily precipitation, station 3077.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/daily/more_precip/historical/' },
      { claim: 'DWD licence CC BY 4.0.', url: 'https://opendata.dwd.de/climate_environment/CDC/Terms_of_use.txt' }
    ],
    rejectedClaims: [
      'Ludwigshafen city portal data: the host returned a block page (HTTP 503, myracloud) and was not retried.',
      'Any claim about rain in Ludwigshafen today: the station closed in 2004, and the page says the years it covers.',
      'Naming Ludwigshafen schools as Informatik-Profil-Schulen: not verified, so parents are told to ask.',
      'Any link with the DWD, BWINF, Känguru, the Mathematik-Olympiade or the Rheinland-Pfalz ministry: none.'
    ]
  }
};
