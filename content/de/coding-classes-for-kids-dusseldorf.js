'use strict';
// Coding classes for kids in Düsseldorf (ag- city door, Germany cluster P5 row DE123, rows.tsv city tier 1).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only,
// with mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle: in NRW, unlike most Länder, Informatik is compulsory in Klasse 5 and 6 at every school type, so a Düsseldorf
// child meets it at about 10; what that means for children of 6 to 12 (a head start before, depth alongside); what
// follows after Klasse 6; our live English classes; the Informatik-Biber; NRW holidays 2026/27; and a project on the
// city's own register of newly planted street trees, where the season with the fewest trees is simply not over yet.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-classes-for-kids-dusseldorf/
// and facts-school/src/, fetched 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, NRW (infmon-nordrhein-westfalen): "An allen allgemeinbildenden Schularten wird das
//    Pflichtfach Informatik in den Jahrgangsstufen 5 und 6 unterrichtet."; Hauptschule WPU 7 to 10 "bis zu acht
//    Wochenstunden"; Realschule WPU "im Gesamtumfang von 14 Wochenstunden"; Gesamt- und Sekundarschulen "zwölf
//    Wochenstunden"; "An Gymnasien mit neunjährigem Bildungsgang wird Informatik im Rahmen des Wahlpflichtunterrichts in
//    den Jahrgangsstufen 9 und 10 im Gesamtumfang von sechs Wochenstunden eigenständig oder als Kombinationsfach
//    verbindlich angeboten." National page (FACTS 92): six Länder without compulsory Informatik, NRW not among them.
//  - KMK Primarbereich (FACTS 1): Grundschule Klasse 1 to 4 outside Berlin and Brandenburg.
//  - KMK FER2026_27 (FACTS 275): "Nordrhein-Westfalen (3) 17.10. - 31.10. 23.12. - 06.01. -- 22.03. - 03.04. 18.05.
//    19.07. - 31.08."
//  - bwinf.de (FACTS 129 to 137). Time: EinhZeitG, SoZV.
//  - Destatis GV-ISys (places.tsv): Düsseldorf 618,685; Nordrhein-Westfalen 18,034,454; Neuss 154,317; Duisburg 502,270
//    (31.12.2024).
//  - Data: Landeshauptstadt Düsseldorf, "Stadtbaumkonzept Düsseldorf", via Open.NRW / GovData
//    https://ckan.govdata.de/dataset/stadtbaumkonzept-dusseldorf, licence Datenlizenz Deutschland Zero 2.0 on every
//    resource; record text: "Der Datensatz enthält die Neupflanzungen von Bäumen im Rahmen des Stadtbaumkonzeptes."
//    CSV https://opendata.duesseldorf.de/sites/default/files/Stadtbaumkonzept.csv, 805 rows, sha256 a293df14...6f2f20fd,
//    downloaded 2 November 2026 and again 3 November 2026 (identical). Columns saison, baumart, parkplatzentfall,
//    _last_update (2026-01-29 on all rows).
// Our own calculations (scratchpad de/w/C3/de123/, python3 -I): v1 prints 2019/2020 101, 2020/2021 106, 2021/2022 182,
// 2022/2023 135, 2023/2024 145, 2024/2025 99, 2025/2026 37 and "Fewest new trees: 2025/2026 37"; v1+v2 print "Finished
// seasons: 6" and "Fewest in a finished season: 2024/2025 99". 82 baumart labels; Zierkirsche 91, Hainbuche 52,
// Feldahorn 51. parkplatzentfall "1" on 22 rows.
// Lesson family: the last period in a file may not be finished; check the data's date before you compare it.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'trees = {}',
  'with open("Stadtbaumkonzept.csv", encoding="utf-8-sig") as planting:',
  '    for row in csv.DictReader(planting, delimiter=";"):',
  '        season = row["saison"]',
  '        trees[season] = trees.get(season, 0) + 1',
  '',
  'for season in sorted(trees):',
  '    print(season, trees[season])',
  'fewest = min(trees, key=trees.get)',
  'print("Fewest new trees:", fewest, trees[fewest])'
].join('\n');

const V2 = [
  'updated = "2026-01-29"   # the _last_update date on every row of the file',
  'finished = {}',
  'for season in trees:',
  '    last_year = season[5:]',
  '    if last_year < updated[:4]:',
  '        finished[season] = trees[season]',
  '',
  'fewest = min(finished, key=finished.get)',
  'print("Finished seasons:", len(finished))',
  'print("Fewest in a finished season:", fewest, finished[fewest])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Düsseldorf: coding for kids' },
  slug: 'coding-classes-for-kids-dusseldorf',
  code: 'ckd',
  accent: '#933332',
  accentRationale: 'Coding classes for kids, Düsseldorf: a warm red #933332, close to the red of the city\'s coat of arms and far from the Frankfurt plum; contrast 6.17 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'North Rhine-Westphalia' }],
  routeLabel: 'Coding classes for kids in Düsseldorf',
  title: 'Coding Classes for Kids in Düsseldorf: Live Online, in English',
  description: 'Coding classes for kids in Düsseldorf aged 6 to 12, live online in English: Informatik in Klasse 5 and 6 in NRW, the Informatik-Biber and a street tree project.',
  ogDescription: 'Live online coding for Düsseldorf children aged 6 to 12, in English and at their own pace: what compulsory Informatik in NRW Klasse 5 and 6 covers, the Informatik-Biber in November 2026, and a project on the city\'s newly planted trees.',
  twitterDescription: 'Coding for Düsseldorf kids, live in English: NRW Informatik from Klasse 5, the Biber and a city tree project.',
  pageName: 'Coding Classes for Kids in Düsseldorf',
  webPageDescription: 'A guide for Düsseldorf parents of children aged 6 to 12 to learning to code, using the Informatik-Monitor 2026/27 rules for Nordrhein-Westfalen, the KMK holiday calendar, the Informatik-Biber 2026 dates and an original project on the Landeshauptstadt Düsseldorf tree planting register.',
  courseDescription: 'Live online coding classes in English for Düsseldorf children aged 6 to 12: Scratch, then Python and data projects, plus support for compulsory Informatik in Klasse 5 and 6, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kids in Düsseldorf',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#school', label: 'NRW schools' },
    { href: '#project', label: 'Tree project' },
    { href: '#biber', label: 'Biber' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Düsseldorf &middot; Coding for children &middot; Ages 6 to 12',
  h1: 'Coding classes for kids in Düsseldorf',
  lede: 'A Düsseldorf child will have Informatik on the timetable at about ten: Nordrhein-Westfalen teaches it as a compulsory subject in Klasse 5 and 6 at every school type, which most Länder do not. That makes the years before Klasse 5 a real chance to arrive ready, and the years after it a question of what comes next. This page covers both, describes what our live English lessons are like for children of 6 to 12, gives the dates of a free puzzle contest, and walks through a project on the city\'s own list of new street trees, where the obvious answer turns out to be about time rather than trees.',
  secondaryCta: { href: '#project', label: 'See the tree project' },
  wa: 'Hello Modern Age Coders, our child lives in Düsseldorf and would like to learn coding in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; English lessons with a regular mentor',
  spec: [
    ['Ages', '6 to 12, grouped by age'],
    ['Begins with', 'Scratch blocks, later Python'],
    ['Groups', 'Fifteen to twenty children, or one to one'],
    ['Düsseldorf times', 'Afternoons and weekend mornings'],
    ['Teachers', 'Mentors in India, live on video'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding classes for kids in Düsseldorf: Modern Age Coders runs live online coding lessons, taught in English, for Düsseldorf children between 6 and 12, from Scratch games to typed Python and small data projects, plus help with the compulsory Informatik that NRW schools teach in Klasse 5 and 6. A regular mentor adapts pace and accent to your child. Lessons fit Düsseldorf afternoons and weekend mornings, in a class of fifteen to twenty or with the mentor alone.',

  picks: {
    eyebrow: 'Where Düsseldorf children start',
    h2: 'Three courses for Düsseldorf children aged 6 to 12',
    lede: 'Typed Python from nine, a blocks course that starts at six, and a companion to the Informatik lessons of Klasse 5 and 6.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CKD / 01', title: 'Python and AI for Kids', note: 'Nine to twelve year olds, 8 to 10 months. Typed Python, turtle art, small games, and data projects such as the tree register below.' },
      { course: 'kids-coding-blocks-masterclass', code: 'CKD / 02', title: 'Coding for Kids', note: 'Six to twelve, in age groups, 10 to 12 months. Scratch stories and games, then apps, ready for Klasse 5.' },
      { course: 'informatik-companion-course-klasse-5-10', code: 'CKD / 03', title: 'Informatik Companion, Klasse 5 to 10', note: 'Ages 10 to 16. Runs alongside school Informatik: Scratch to Python, data, algorithms and networks, in English.' }
    ]
  },

  sections: [
    {
      id: 'school',
      eyebrow: 'Schools in Nordrhein-Westfalen',
      h2: 'When does a Düsseldorf child start Informatik at school?',
      lede: 'In Klasse 5, at every school type. Nordrhein-Westfalen is one of the ten Länder with compulsory Informatik, and it starts earlier than most.',
      body: [
        { kind: 'two',
          leftH3: 'Compulsory in Klasse 5 and 6',
          left: [
            'The Informatik-Monitor 2026/27 states for NRW: "An allen allgemeinbildenden Schularten wird das Pflichtfach Informatik in den Jahrgangsstufen 5 und 6 unterrichtet." Every Hauptschule, Realschule, Sekundarschule, Gesamtschule and Gymnasium in Düsseldorf teaches it in those two years.',
            'Grundschule in NRW runs from Klasse 1 to 4, so a Düsseldorf child usually meets the compulsory subject at ten. Children in the six Länder without compulsory Informatik, from Hessen to Berlin, may never meet it at all.'
          ],
          rightH3: 'After Klasse 6, it depends',
          right: [
            'From Klasse 7 Informatik becomes a choice. A Realschule may offer it as a Wahlpflicht subject within 14 weekly hours across Klassen 7 to 10, a Gesamtschule or Sekundarschule within 12, a Hauptschule within up to 8.',
            'A nine-year Gymnasium must offer Informatik in the Wahlpflicht area in Klassen 9 and 10, six weekly hours in total, either on its own or combined with another subject. Between Klasse 6 and Klasse 9, then, a Gymnasium pupil may have no Informatik at all.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik in a Düsseldorf school career (NRW rules, 2026/27)', head: ['Klasse', 'School type', 'Informatik'], rows: [
          ['1 to 4', 'Grundschule', 'Not part of the compulsory subject'],
          ['5 and 6', 'All school types', 'Compulsory subject'],
          ['7 to 10', 'Realschule', 'Wahlpflicht, up to 14 weekly hours over four years'],
          ['7 to 10', 'Gesamtschule, Sekundarschule', 'Wahlpflicht, up to 12 weekly hours over four years'],
          ['9 and 10', 'Gymnasium (G9)', 'Wahlpflicht offer, 6 weekly hours over two years']
        ] },
        { kind: 'source', html: 'Source: Informatik-Monitor 2026/27, NRW page (Gesellschaft für Informatik, citing the APO-S I) and Länder comparison; KMK, Primarbereich. Read 2 November 2026. Hours are totals across the years shown, as the Monitor gives them.' },
        { kind: 'p', mt: true, html: 'For parents this gives two clear windows. Before Klasse 5, a child who has built games in Scratch and typed a few lines of Python walks into the compulsory course already confident. After Klasse 6, a child who enjoyed it can keep going while the school timetable pauses, so that the Wahlpflicht choice in Klasse 7 or 9 is made from experience rather than guesswork.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'What does learning to code in English look like for a Düsseldorf child?',
      lede: 'All lessons are live and in English, and the pace is set around the child.',
      body: [
        { kind: 'three', cells: [
          { h3: 'English, plainly', p: 'Lessons are in English. There is no German option, and we would rather you knew that now. For children at the international and bilingual schools in and around Düsseldorf, English is already a school language; for children at a German school, coding in English adds a second skill at no extra cost.' },
          { h3: 'Pace and accent', p: 'The mentor speaks slowly, checks often, and repeats in shorter sentences. Within a few weeks they are used to how your child speaks, and a child who answers half in German is helped to the English words without any fuss.' },
          { h3: 'The same words as school', p: 'NRW Informatik uses the same ideas a coding class does: sequence, loop, condition, variable. When a mentor knows your child has the compulsory course, they point out the German school term next to the English one, so the two support each other.' }
        ] },
        { kind: 'p', mt: true, html: 'Our mentors teach from India over live video, which is why Düsseldorf afternoons work well: it is evening for the mentor. Your child keeps the same mentor every week, someone who soon knows whether they like a hard puzzle, need a minute of quiet, or learn best by changing a game that already works.' }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real Düsseldorf project',
      h2: 'Düsseldorf\'s new street trees: which season planted the fewest?',
      lede: 'The city publishes every new tree planted under its Stadtbaumkonzept, the street tree plan, as open data that anyone may use. Our older children use it to learn a check that is easy to forget: is the last part of the data finished?',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The Landeshauptstadt Düsseldorf publishes Stadtbaumkonzept Düsseldorf through Open.NRW under the Datenlizenz Deutschland Zero 2.0. The city describes it as the new tree plantings made under the plan. On the day we downloaded it, 2 November 2026, the file Stadtbaumkonzept.csv had 805 rows, one per tree.',
            'Each row gives a planting season such as 2021/2022, the species, whether a parking space was given up for the tree, and a last-update date. That date is the same on every row: 29 January 2026.'
          ],
          rightH3: 'The question',
          right: [
            'In which planting season did Düsseldorf plant the fewest new trees? The first program counts the rows for each season, prints them in order and picks the smallest.',
            'Before running it, a child should guess. Was there a season when the plan slowed down?'
          ] },
        { kind: 'code', label: 'Version 1: count trees per season', lang: 'Python', code: V1, note: 'It prints the seasons from <code>2019/2020 101</code> to <code>2025/2026 37</code>, then <code>Fewest new trees: 2025/2026 37</code>.' },
        { kind: 'p', mt: true, html: 'A season with only 37 trees, after six seasons of 99 to 182, looks like a big drop. But look at the last-update date on every row: 29 January 2026. The 2025/2026 season carries 2026 in its own name, and the file was saved in January of that year. Whatever the city planted after 29 January 2026 is not in this file yet. The program did not compare seasons; it compared six whole seasons with part of a seventh.' },
        { kind: 'code', label: 'Version 2: compare only finished seasons', lang: 'Python', code: V2, note: 'Run after Version 1. It prints <code>Finished seasons: 6</code> and <code>Fewest in a finished season: 2024/2025 99</code>.' },
        { kind: 'p', html: 'Our rule is simple and cautious: a season counts as finished only if its second year ended before the file was saved. By that rule 2025/2026 is left out, and the fewest trees among finished seasons were planted in 2024/2025, with 99. The busiest was 2021/2022, with 182. Whether the 2025/2026 season will end higher or lower than 99, nobody can tell from this file; a later download will say.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'New trees per planting season in the Stadtbaumkonzept file (our count, file updated 29 January 2026)', head: ['Season', 'Trees in the file'], rows: [
          ['2019/2020', '101'],
          ['2020/2021', '106'],
          ['2021/2022', '182'],
          ['2022/2023', '135'],
          ['2023/2024', '145'],
          ['2024/2025', '99'],
          ['2025/2026, not finished', '37']
        ] },
        { kind: 'source', html: 'Data: Landeshauptstadt Düsseldorf, Stadtbaumkonzept Düsseldorf, Datenlizenz Deutschland Zero 2.0, downloaded 2 November 2026. The counts and the rule for finished seasons are ours. The most planted species in the file is the Zierkirsche (ornamental cherry), with 91 trees, and 22 of the 805 trees took the place of a parking space.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Count the books on a shelf every evening for a week, but stop on Wednesday. Is Wednesday the "smallest week"?',
          '<strong>Ages 8 to 10, Scratch.</strong> Store the seven totals in a Scratch list, let a sprite name the smallest, then teach it to ignore the final item.',
          '<strong>10 to 12, typed Python.</strong> Try Version 1 first, explain why 37 misleads, and only then attempt Version 2 on your own.',
          '<strong>Going further.</strong> Count the species and find the top three. Then look closely at the names: is "Spitzahorn" really in the file only once?'
        ] }
      ]
    },
    {
      id: 'biber',
      eyebrow: 'A free contest',
      h2: 'Is there a free computing contest for Düsseldorf children?',
      lede: 'There is: the Informatik-Biber, a quiz of logic puzzles that schools run in class. No coding is needed, and the 2026 round is happening now.',
      body: [
        { kind: 'two',
          leftH3: 'The contest',
          left: [
            'The organiser, Bundesweite Informatikwettbewerbe, calls the Informatik-Biber the largest school informatics competition in Germany. It is free and online, open to Klassen 3 to 13 without any previous experience; more than 580,000 pupils entered in 2025.',
            'For a primary child it means nine puzzles in 30 minutes. In Klassen 5 and 6, the years of compulsory Informatik in NRW, it is twelve puzzles in 35 minutes.'
          ],
          rightH3: 'Dates for 2026',
          right: [
            'This year\'s contest weeks fall between 9 and 20 November 2026; registration is by schools only. A Düsseldorf parent should ask the class teacher or the Informatik teacher whether the school takes part.',
            'Results appear in December 2026 and certificates follow in January 2027. Anyone can try the practice puzzles of the Schnupper-Biber.'
          ] },
        { kind: 'p', mt: true, html: 'The puzzles are about rules, order, routes and codes, the thinking behind Informatik in Klasse 5 and 6. We do not reuse the real tasks; mentors write their own puzzles in the same style, and children who like ours tend to enjoy the Biber too. We have no connection with the organiser.' }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time are the classes in Düsseldorf?',
      lede: 'Many families choose an afternoon after homework or a weekend morning. Here are a few sample times with the mentor\'s clock.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Düsseldorf class times and India time', head: ['Düsseldorf', 'India, winter (to 28 March 2027)', 'India, summer (from 28 March 2027)'], rows: [
          ['15:05', '19:35', '18:35'],
          ['16:55', '21:25', '20:25'],
          ['Sunday 09:40', '14:10', '13:10']
        ] },
        { kind: 'source', html: 'Germany runs on UTC+1 in winter and UTC+2 in summer under the Einheitenzeitgesetz; the 2026 summer time ended on 25 October 2026 and the 2027 one begins on 28 March 2027. India stays at UTC+5:30 all year, so a Düsseldorf afternoon is the mentor\'s evening: four and a half hours later now, three and a half from late March. The times are samples, not set batch times.' },
        { kind: 'table', mt: true, numCols: [], caption: 'NRW school holidays in the 2026/27 school year', head: ['Break', 'First and last day'], rows: [
          ['Autumn (Herbstferien)', '17 October to 31 October 2026'],
          ['Christmas', '23 December 2026 to 6 January 2027'],
          ['Easter', '22 March to 3 April 2027'],
          ['Whitsun', '18 May 2027'],
          ['Summer', '19 July to 31 August 2027']
        ] },
        { kind: 'source', html: 'Holiday dates from the KMK Ferienkalender for 2026/27, NRW line. There is no winter break in NRW that school year.' },
        { kind: 'p', mt: true, html: 'Our classes continue through NRW holidays. The summer break in 2027 starts late, on 19 July, and runs to the last day of August, so travelling families can carry on with a weekly class while away.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Milestones',
    h2: 'From first block to Klasse 5 and beyond',
    lede: 'Our own milestones, mapped loosely to the point where compulsory Informatik begins in NRW. Mentors use them to place a child and to report progress to you.',
    table: { caption: 'Milestones we use for 6 to 12 year olds, next to the NRW timetable', head: ['Milestone', 'Usual age', 'What the child does', 'At school in NRW'], rows: [
      ['1. Steps in order', '6 to 7', 'Gives a sprite a list of moves and watches it follow them', 'Grundschule'],
      ['2. Loops and keys', '7 to 9', 'Repeats a move and makes a game respond to keys', 'Grundschule'],
      ['3. Scores and lists', '8 to 10', 'Keeps a score and stores several values', 'Klasse 3 and 4'],
      ['4. Typed code', '9 to 11', 'Types Python with if and for', 'Klasse 5: Informatik begins'],
      ['5. Reading data', '10 to 12', 'Loads a real file and asks whether the answer is fair', 'Klasse 5 and 6: compulsory Informatik']
    ] },
    left: { h3: 'For parents', ps: [
      'Milestone 5 is the tree project. The skill is not counting; it is noticing that the last season was cut off by the date of the file.',
      'Progress reports describe what your child made and could explain.'
    ] },
    right: { h3: 'For children', ps: [
      'Before you say something went down, check whether it has finished.',
      'Every data file has a date. Find it first.'
    ] }
  },

  catalogue: {
    eyebrow: 'More for children',
    h2: 'Nine more courses for Düsseldorf children',
    lede: 'Each course is taught live in English by one mentor, to a group or to a single child.',
    bands: [
      { num: 'I', h3: 'Getting started', sub: 'Ages 6 to 14', courses: [
        { code: 'CKD / START / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'From blocks to finished games, a short course for 6 to 12.' },
        { code: 'CKD / START / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Logic and patterns before code, 7 to 12.' },
        { code: 'CKD / START / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy', blurb: 'What AI can and cannot do, child-safe, 8 to 14.' }
      ] },
      { num: 'II', h3: 'Play and build', sub: 'Ages 7 to 14', courses: [
        { code: 'CKD / PLAY / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code inside a familiar world, 7 to 12.' },
        { code: 'CKD / PLAY / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'Roblox games scripted by the child, 8 to 14.' },
        { code: 'CKD / PLAY / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Three game worlds in one course, 8 to 12.' }
      ] },
      { num: 'III', h3: 'Bigger projects', sub: 'Ages 8 to 15', courses: [
        { code: 'CKD / MAKE / 01', slug: 'block-coding-app-development-masterclass', title: 'App making', blurb: 'Phone apps from blocks, 8 to 12.' },
        { code: 'CKD / MAKE / 02', slug: 'kids-ai-web-development-course', title: 'Websites', blurb: 'Build and publish a small website, 9 to 12.' },
        { code: 'CKD / MAKE / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'School maths in Python, 10 to 15.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'How live classes fit into a Düsseldorf week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Afternoons', l: 'Düsseldorf after-school hours, once homework is done.' },
      { time: 'Weekends', l: 'Saturday or Sunday mornings, good for the youngest.' },
      { time: '1-on-1', l: 'Agreed with the mentor, at your child\'s pace.' }
    ],
    cells: [
      { h3: 'Regular mentor', p: 'One person, week after week.' },
      { h3: 'Patient English', p: 'Slow, simple, said again when needed.' },
      { h3: 'Child at the keys', p: 'Building from the first lesson.' },
      { h3: 'Right age group', p: 'Six year olds with six year olds.' },
      { h3: 'Parent notes', p: 'A short note on each month\'s work.' },
      { h3: 'Two formats', p: 'A class of fifteen to twenty, or private.' }
    ]
  },

  projectsH2: 'What older students build',
  projectsLede: 'Children who start young are often building real apps in their teens. Here are some projects by our older students; the <a class="ag-inline-link" href="/student-labs">student labs</a> page shows plenty more.',
  reviewsLede: 'Reviews from parents and students on Google, exactly as posted.',

  fees: {
    h2: 'Fees for Düsseldorf families',
    lede: 'One monthly payment covers eight live classes. Prices here are converted to euro with the European Central Bank reference rate so you can compare; the card payment itself is in US dollars, converted by your bank, which is why the statement can show a slightly different euro sum.',
    free: ['A free first class', 'A small puzzle and a first program', 'No card needed'],
    group: ['Fifteen to twenty children of a similar age', 'One regular mentor', 'Two classes a week', 'Pay monthly, stop any month'],
    one: ['Your child and one mentor', 'Your child\'s pace and projects', 'Times you choose']
  },

  faq: {
    eyebrow: 'Düsseldorf parents ask',
    h2: 'Coding classes for kids in Düsseldorf: common questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Lessons are given only in English, always live. The mentor talks calmly, adjusts to the way your child speaks, and repeats things more simply when needed, which lets a beginner in English keep up. Blocks and code read the same in a German or an English home.' },
      { q: 'Is Informatik compulsory in NRW schools?', a: 'Yes, in Klasse 5 and 6. The Informatik-Monitor 2026/27 says the compulsory subject is taught in those two years at every general school type in Nordrhein-Westfalen. After Klasse 6 it becomes an elective, with different rules for each school type.' },
      { q: 'Is it worth starting before Klasse 5?', a: 'For many children, yes. A child who has made Scratch games and typed a little Python starts the compulsory course relaxed and curious rather than catching up. Children can start with us from 6.' },
      { q: 'Can you help with Informatik homework in Klasse 5 and 6?', a: 'Yes. Our Informatik Companion course, for ages 10 to 16, runs alongside school Informatik in English, and a one-to-one mentor can work through your child\'s own worksheets. We teach alongside school; the school course and its marks are what count.' },
      { q: 'When are the classes in Düsseldorf time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Popular choices in Düsseldorf are the hours after school until about six in the evening, and weekend mornings.' },
      { q: 'How does a Düsseldorf child join the Informatik-Biber?', a: 'Through the school, which registers its pupils. In 2026 the contest weeks are 9 to 20 November; it is free and needs no coding, and Klasse 5 and 6 pupils get twelve puzzles in 35 minutes. The class teacher will know if the school is signed up.' },
      { q: 'Do classes continue in the NRW holidays?', a: 'Yes. Mentors do not follow the NRW calendar, so classes run through every break. Some families take a break during the long summer holidays (19 July to 31 August 2027) and pick up again in September.' },
      { q: 'Where are the mentors?', a: 'In India, teaching live over video. 16:55 in Düsseldorf is 21:25 for the mentor in winter. Your child has the same mentor every week.' },
      { q: 'How are fees charged?', a: 'Monthly. You see the fee here in euro, worked out with the European Central Bank reference rate; the actual payment is in US dollars and is converted by your bank, so a small difference on the statement is normal. The trial class costs nothing and needs no card.' },
      { q: 'What will my child make?', a: 'Younger children make Scratch games and animated stories. Nine and ten year olds move to Python: drawings, quizzes and small games. Around ten to twelve they start real data work, like the Düsseldorf tree register above.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for families in Düsseldorf and across Germany.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our hub for every Germany page.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'How NRW compares with the other Länder.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'Puzzles we wrote in the Biber style.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes for kids', p: 'The usual first step at 6 or 7.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'Our page for families across NRW.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live classes explained.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Your child solves a short puzzle and makes a first program with the mentor, who watches how your child reasons and whether the English is comfortable, and afterwards suggests a course and group.',
    readFirst: 'If you would like to read first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a live class and <a class="ag-inline-link" href="/courses">all courses</a> has the full syllabuses.',
    note: 'Live online classes with mentors in India, in English only. WhatsApp is the quickest way to reach us.',
    formNote: 'Free, with no card and nothing to sign.'
  },

  footer: {
    cols: [
      { h4: 'Children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/courses/informatik-companion-course-klasse-5-10', label: 'Informatik Companion' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Is the last season finished?'
  },

  personalityCss: `
.ag-root.ag-ckd .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-ckd .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-ckd .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-ckd .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ckd .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Nordrhein-Westfalen and national comparison); KMK Primarbereich and Ferienkalender 2026/27; Bundesweite Informatikwettbewerbe (Biber 2026); Einheitenzeitgesetz and Sommerzeitverordnung; Destatis GV-ISys. Data: Landeshauptstadt Düsseldorf, Stadtbaumkonzept, Datenlizenz Deutschland Zero 2.0.',
    localProject: 'The Düsseldorf tree project: an original Python project on the city\'s Stadtbaumkonzept planting register (805 trees); counting per season names 2025/2026 with 37 as the lowest, but every row was last updated on 29 January 2026, so that season is unfinished; comparing finished seasons only gives 2024/2025 with 99. Lesson family: the last period may not be finished; check the data\'s date first.',
    requiredMentions: ['Stadtbaumkonzept.csv', 'Fewest new trees: 2025/2026 37', 'Finished seasons: 6', 'Fewest in a finished season: 2024/2025 99', 'in den Jahrgangsstufen 5 und 6 unterrichtet', '19 July to 31 August 2027', '29 January 2026', 'Is the last season finished?'],
    sources: [
      { claim: 'NRW: compulsory Informatik in Klasse 5 and 6; Wahlpflicht hours after Klasse 6; Gymnasium 9 and 10.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Six Länder without compulsory Informatik (NRW not among them).', url: 'https://informatik-monitor.de/' },
      { claim: 'NRW holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Informatik-Biber facts and 2026 dates.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Düsseldorf tree plantings and licence.', url: 'https://ckan.govdata.de/dataset/stadtbaumkonzept-dusseldorf' }
    ],
    rejectedClaims: [
      'Why fewer trees were planted in any season, or the city\'s budget for the plan: not stated in the data as used; the record\'s budget figures are not reproduced.',
      'Any final count for 2025/2026: unknown from this file.',
      'Naming Düsseldorf schools as sources of students: refused.',
      'German-language teaching, or any link with BWINF, the city or the NRW ministry: none.'
    ]
  }
};
